// Apply the duplicate auditor's merges and the reviewers' corrections to the imported entries.
//   node --experimental-strip-types scripts/apply-decisions.mjs [--write] dedupe.json review1.json review2.json ...
// Dry run by default: prints exactly what it would change. Entries in src/content/additions/*.ts are
// JSON-bodied and edited as data. Entries in the hand-written core (src/content/exercises.ts) are
// NOT edited here - the changes they need are printed under "MANUAL" for a human to apply.
import { readFileSync, writeFileSync, readdirSync } from 'node:fs';

const args = process.argv.slice(2);
const WRITE = args.includes('--write');
const files = args.filter((a) => !a.startsWith('--'));
const dedupe = files.find((f) => /dedupe/.test(f));
const reviews = files.filter((f) => /review/.test(f));

const DIR = 'src/content/additions';
const sets = new Map(); // filename -> { head, data }
for (const f of readdirSync(DIR).filter((n) => n.endsWith('.ts'))) {
  const src = readFileSync(`${DIR}/${f}`, 'utf8');
  const cut = src.indexOf('= [') + 2;
  sets.set(f, { head: src.slice(0, cut), data: JSON.parse(src.slice(cut, src.lastIndexOf(';'))) });
}
const coreIds = new Set([...readFileSync('src/content/exercises.ts', 'utf8').matchAll(/^    id: '([^']+)'/gm)].map((m) => m[1]));
const locate = (id) => { for (const [f, s] of sets) { const e = s.data.find((x) => x.id === id); if (e) return { f, s, e }; } return null; };

const log = { applied: [], manual: [], skipped: [] };
const eq = (a, b) => JSON.stringify(a) === JSON.stringify(b);

// ---- 1. Merges -------------------------------------------------------------------------------
if (dedupe) {
  const d = JSON.parse(readFileSync(dedupe, 'utf8'));
  for (const m of d.merges ?? []) {
    const drop = locate(m.drop);
    const into = locate(m.into);
    if (!drop) { log.skipped.push(`merge ${m.drop} -> ${m.into}: "${m.drop}" is not an imported entry (already gone, or a core id)`); continue; }
    if (coreIds.has(m.drop)) { log.skipped.push(`merge ${m.drop}: REFUSED - deployed ids are never removed`); continue; }
    const carry = m.carryOver ?? {};
    if (into) {
      const e = into.e;
      const addAka = (carry.aka ?? []).filter((a) => ![e.name, ...(e.aka ?? [])].some((x) => x.toLowerCase() === a.toLowerCase()));
      const addReg = (carry.regressions ?? []).filter((r) => !(e.regressions ?? []).some((x) => x.label.toLowerCase() === r.label.toLowerCase()));
      const addProg = (carry.progressions ?? []).filter((r) => !(e.progressions ?? []).some((x) => x.label.toLowerCase() === r.label.toLowerCase()));
      if (addAka.length) e.aka = [...(e.aka ?? []), ...addAka];
      if (addReg.length) e.regressions = [...e.regressions, ...addReg];
      if (addProg.length) e.progressions = [...(e.progressions ?? []), ...addProg];
      log.applied.push(`merge ${m.drop} -> ${m.into}  (+${addAka.length} aka, +${addReg.length} regressions, +${addProg.length} progressions)  ${m.reason}`);
    } else if (coreIds.has(m.into)) {
      log.manual.push(`merge ${m.drop} -> core ${m.into}: add to ${m.into} in exercises.ts: ${JSON.stringify(carry)}`);
    } else { log.skipped.push(`merge ${m.drop} -> ${m.into}: target "${m.into}" does not exist`); continue; }
    drop.s.data = drop.s.data.filter((x) => x.id !== m.drop);
  }
  // Alias fixes to imported entries: set the field outright.
  for (const e of d.newEntryAliasEdits ?? []) {
    const hit = locate(e.id);
    if (!hit) { log.skipped.push(`alias edit ${e.id}: entry no longer exists`); continue; }
    if (eq(hit.e[e.field], e.to)) continue;
    hit.e[e.field] = e.to;
    log.applied.push(`alias ${e.id}.${e.field} -> ${JSON.stringify(e.to)}`);
  }
  for (const c of d.coreEdits ?? []) log.manual.push(`core ${c.id}.${c.field} -> ${JSON.stringify(c.to)}   (${c.reason})`);
}

// ---- 2. Review corrections --------------------------------------------------------------------
for (const rf of reviews) {
  const r = JSON.parse(readFileSync(rf, 'utf8'));
  for (const i of r.issues ?? []) {
    if (i.replacement === null || i.replacement === undefined) { log.skipped.push(`review ${i.id}.${i.field} [${i.severity}] needs a human: ${i.problem.slice(0, 110)}`); continue; }
    const hit = locate(i.id);
    if (!hit) { coreIds.has(i.id) ? log.manual.push(`core ${i.id}.${i.field} -> ${JSON.stringify(i.replacement).slice(0, 160)}   [${i.severity}]`) : log.skipped.push(`review ${i.id}.${i.field}: entry no longer exists (merged away)`); continue; }
    if (eq(hit.e[i.field], i.replacement)) continue;
    hit.e[i.field] = i.replacement;
    log.applied.push(`review ${i.id}.${i.field} [${i.severity}/${i.status}]`);
  }
}

console.log(`\nAPPLIED (${log.applied.length})`); for (const l of log.applied) console.log('  +', l);
console.log(`\nMANUAL - core entries, edit exercises.ts by hand (${log.manual.length})`); for (const l of log.manual) console.log('  !', l);
console.log(`\nSKIPPED / NEEDS A HUMAN (${log.skipped.length})`); for (const l of log.skipped) console.log('  -', l);

if (WRITE) {
  for (const [f, s] of sets) writeFileSync(`${DIR}/${f}`, `${s.head}${JSON.stringify(s.data, null, 2)};\n`);
  console.log('\nwritten.');
} else console.log('\n(dry run - pass --write to apply)');
