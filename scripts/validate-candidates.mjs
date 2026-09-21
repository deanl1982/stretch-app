// Validate research candidate files against the app's Exercise schema before
// anything is generated from them. Usage: node scripts/validate-candidates.mjs a.json b.json ...
import { readFileSync } from 'node:fs';

const REGIONS = ['hips', 'hamstrings', 'ankles', 'back', 'fullBody'];
const ROLES = ['opener', 'main', 'load', 'rest'];
const PROPS = ['none','cushion','block','chair','wall','doorframe','towel','wedge','dowel','roller','band','step','weight','bench','anchor','ball'];
const FLAGS = ['knee','hipReplacement','backPain','sciatica','balance','groin','bloodPressure','shoulder','osteoporosis','achilles','plantarFascia','bigToe','wrist'];
const REQUIRED = ['id','name','regions','role','intensity','summary','why','targets','dose','cues','shouldFeel',
  'shouldNotFeel','regressions','progressions','props','officeFriendly','barefootOnly','contraindications','dailySafe','source'];

const isMain = process.argv[1]?.endsWith('validate-candidates.mjs');
const { EXERCISES } = isMain ? await import('../src/content/exercises.ts') : { EXERCISES: [] };
const existingIds = new Set(EXERCISES.map((e) => e.id));
const existingNames = new Map(EXERCISES.flatMap((e) => [[e.name.toLowerCase(), e.id], ...(e.aka ?? []).map((a) => [a.toLowerCase(), e.id])]));

// Entries deliberately not imported, with the reason. Decided by hand after comparing them.
export const DROPPED = {
  'candidates-ankles.json:varied-terrain-barefoot-walk':
    'A five-minute walk over grass and sand: no room-based timer can run it, and it exceeds the 120s single-hold cap. Off-brief for a 20-minute floor routine.',
  'candidates-back.json:suitcase-carry':
    'A loaded walk: needs a weight and walking space, and is neither a stretch nor a floor position. Off-brief for a 20-minute floor routine.',
  'candidates-hips.json:cossack-squat':
    'Duplicate of the transcript agent\'s cossack-squat, which carries the video\'s hand-supported and heel-lift regressions and a stricter dailySafe.',
};

const seenIds = new Map();
const seenNames = new Map();
let problems = 0, total = 0;
const complain = (file, id, msg) => { problems += 1; console.log(`  ✗ [${file}] ${id}: ${msg}`); };

for (const file of isMain ? process.argv.slice(2) : []) {
  const short = file.split('/').pop();
  let list;
  try { list = JSON.parse(readFileSync(file, 'utf8')); } catch (e) { complain(short, '-', `not valid JSON: ${e.message}`); continue; }
  if (!Array.isArray(list)) { complain(short, '-', 'top level is not an array'); continue; }
  console.log(`${short}: ${list.length} entries`);

  for (const e of list) {
    if (DROPPED[`${short}:${e.id}`]) { console.log(`  - [${short}] ${e.id}: dropped (${DROPPED[`${short}:${e.id}`].slice(0, 60)}...)`); continue; }
    total += 1;
    const id = e.id ?? '(no id)';
    for (const k of REQUIRED) if (e[k] === undefined) complain(short, id, `missing "${k}"`);
    if (!/^[a-z0-9]+(-[a-z0-9]+)*$/.test(id)) complain(short, id, 'id is not kebab-case');
    if (existingIds.has(id)) complain(short, id, 'id already exists in the library');
    if (seenIds.has(id)) complain(short, id, `id also used in ${seenIds.get(id)}`);
    seenIds.set(id, short);

    for (const label of [e.name, ...(e.aka ?? [])]) {
      const key = String(label).toLowerCase();
      if (existingNames.has(key)) complain(short, id, `"${label}" is already a name/alias of ${existingNames.get(key)}`);
      const prior = seenNames.get(key);
      if (prior && prior.id !== id) complain(short, id, `"${label}" also a name/alias of ${prior.id} (${prior.file})`);
      seenNames.set(key, { id, file: short });
    }

    for (const r of e.regions ?? []) if (!REGIONS.includes(r)) complain(short, id, `bad region "${r}"`);
    if (!(e.regions ?? []).length) complain(short, id, 'no regions');
    if (!ROLES.includes(e.role)) complain(short, id, `bad role "${e.role}"`);
    if (![1,2,3].includes(e.intensity)) complain(short, id, `bad intensity ${e.intensity}`);
    for (const p of [...(e.props ?? []), ...(e.regressions ?? []).flatMap((r) => r.props ?? [])])
      if (!PROPS.includes(p)) complain(short, id, `bad prop "${p}"`);
    for (const f of [...(e.contraindications ?? []), ...(e.requiresFlag ? [e.requiresFlag] : [])])
      if (!FLAGS.includes(f)) complain(short, id, `bad flag "${f}"`);

    const n = e.cues?.length ?? 0;
    if (n < 2 || n > 4) complain(short, id, `${n} cues (need 2-4)`);
    if (!(e.regressions ?? []).length) complain(short, id, 'no regressions');
    for (const r of e.regressions ?? []) if (!r.label || !r.detail || !Array.isArray(r.props)) complain(short, id, 'malformed regression');
    for (const r of e.progressions ?? []) if (!r.label || !r.detail) complain(short, id, 'malformed progression');
    if (!Array.isArray(e.source) || !e.source.length) complain(short, id, 'no source');

    const d = e.dose;
    if (d?.kind === 'hold') {
      if (!(d.seconds >= 10 && d.seconds <= 120)) complain(short, id, `hold ${d.seconds}s outside 10-120`);
      if (!(d.sets >= 1) || typeof d.perSide !== 'boolean') complain(short, id, 'malformed hold dose');
    } else if (d?.kind === 'reps') {
      if (!(d.reps >= 1) || !(d.sets >= 1) || typeof d.perSide !== 'boolean') complain(short, id, 'malformed reps dose');
      if (!(d.secondsPerRep >= 2)) complain(short, id, `secondsPerRep ${d.secondsPerRep} (need >= 2)`);
      if (!d.tempoNote) complain(short, id, 'reps dose without tempoNote');
    } else complain(short, id, `bad dose kind "${d?.kind}"`);

    // Safety rules from the brief.
    if (e.role === 'opener' && e.intensity > 1) complain(short, id, `opener with intensity ${e.intensity}`);
    if (e.role === 'opener' && (e.contraindications ?? []).includes('knee') && /squat|kneel|deep/i.test(e.name)) complain(short, id, 'deep-knee-flexion item marked opener');
    // dailySafe is about load (heavy eccentrics are capped at twice a week), not intensity, so a
    // hard static stretch can legitimately be dailySafe. Only weighted work should not be.
    if (d?.kind === 'reps' && e.dailySafe === true && /weight|loaded|goblet|kettlebell|dumbbell|nordic|carry/i.test(`${e.name} ${e.summary}`))
      complain(short, id, 'looks like loaded work but is marked dailySafe (check)');
    if (!e.poseHint) complain(short, id, 'no poseHint - cannot draw it');
  }
}
if (isMain) {
  console.log(`\n${total} entries checked, ${problems} problem(s).`);
  process.exit(problems === 0 ? 0 : 1);
}
