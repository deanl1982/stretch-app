// Turn validated research candidates into typed library files.
//   node scripts/import-candidates.mjs <candidates.json> <out-name>
// Writes src/content/additions/<out-name>.ts. Review-only fields (poseHint, urls, evidenceQuality,
// variationOf, reviewNotes, relatedTo) are stripped: they informed the merge and are not app data.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { DROPPED } from './validate-candidates.mjs';

const [, , input, name] = process.argv;
if (!input || !name) { console.error('usage: import-candidates.mjs <candidates.json> <out-name>'); process.exit(2); }

const REVIEW_ONLY = new Set(['poseHint', 'urls', 'evidenceQuality', 'variationOf', 'reviewNotes', 'relatedTo']);
const KEY_ORDER = ['id','name','aka','regions','role','intensity','summary','why','targets','dose','cues','shouldFeel',
  'shouldNotFeel','regressions','progressions','props','officeFriendly','barefootOnly','contraindications','dailySafe',
  'maxHoldSeconds','requiresFlag','source','evidenceNote'];

const short = input.split('/').pop();
const kept = JSON.parse(readFileSync(input, 'utf8'))
  .filter((e) => !DROPPED[`${short}:${e.id}`])
  .map((e) => {
    const out = {};
    for (const k of KEY_ORDER) if (e[k] !== undefined) out[k] = e[k];
    for (const k of Object.keys(e)) if (!REVIEW_ONLY.has(k) && !(k in out)) throw new Error(`${e.id}: unexpected key "${k}"`);
    return out;
  });

const header = `import type { Exercise } from '../types.ts';

/**
 * ${name}: imported from web research, then reviewed by hand. This file is the source of
 * truth now - edit it freely. The research briefs' review-only fields (pose hints, URLs,
 * evidence grades) were stripped on import.
 *
 * Same editorial rule as the core library: where a source offered a mechanism, we state a
 * feeling and a behaviour instead, and \`evidenceNote\` corrects any claim that did not survive
 * checking. Evidence for most stretching is weak; the notes say so where it matters.
 */
export const ${name.toUpperCase().replace(/[^A-Z0-9]/g, '_')}: Exercise[] = `;

mkdirSync('src/content/additions', { recursive: true });
writeFileSync(`src/content/additions/${name}.ts`, `${header}${JSON.stringify(kept, null, 2)};\n`);
console.log(`wrote src/content/additions/${name}.ts (${kept.length} entries)`);
