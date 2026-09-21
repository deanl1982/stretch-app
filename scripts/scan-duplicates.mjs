// Programmatic first pass at finding duplicate or near-duplicate exercises across the whole library.
// It only nominates pairs; deciding whether two are really the same position is a judgement call.
//   node --experimental-strip-types scripts/scan-duplicates.mjs
import { EXERCISES } from '../src/content/exercises.ts';
import { normalise } from '../src/content/search.ts';

const STOP = new Set(['stretch','the','a','and','with','of','to','on','in','pose','hold','position','stance','exercise']);
const toks = (s) => new Set(normalise(s).split(' ').filter((t) => t && !STOP.has(t)));
const jac = (a, b) => { const i = [...a].filter((x) => b.has(x)).length; const u = new Set([...a, ...b]).size; return u ? i / u : 0; };
const contains = (a, b) => a.size > 0 && [...a].every((x) => b.has(x));

const names = (e) => [e.name, ...(e.aka ?? [])];
const rows = [];
for (let i = 0; i < EXERCISES.length; i++) for (let j = i + 1; j < EXERCISES.length; j++) {
  const a = EXERCISES[i], b = EXERCISES[j];
  let best = 0, why = '';
  for (const x of names(a)) for (const y of names(b)) {
    const tx = toks(x), ty = toks(y);
    if (normalise(x) === normalise(y)) { best = 1; why = `same name/alias "${x}"`; continue; }
    const c = (contains(tx, ty) || contains(ty, tx)) && Math.min(tx.size, ty.size) >= 1 ? 0.85 : 0;
    const sc = Math.max(jac(tx, ty), c);
    if (sc > best) { best = sc; why = `"${x}" ~ "${y}"`; }
  }
  const ta = new Set(a.targets.map(normalise)), tb = new Set(b.targets.map(normalise));
  const tj = jac(ta, tb);
  const sameShape = a.dose.kind === b.dose.kind && a.regions[0] === b.regions[0];
  const score = Math.max(best, sameShape && tj >= 0.6 ? 0.5 + tj / 4 : 0);
  if (score >= 0.6) rows.push({ score, a: a.id, b: b.id, why: best >= 0.6 ? why : `targets overlap ${tj.toFixed(2)}` });
}
rows.sort((x, y) => y.score - x.score);
console.log(`${EXERCISES.length} exercises, ${rows.length} nominated pair(s)\n`);
for (const r of rows) console.log(`${r.score.toFixed(2)}  ${r.a}  <->  ${r.b}   [${r.why}]`);
