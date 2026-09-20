/**
 * Safety copy.
 *
 * Kept as data rather than scattered through components so it can be shown in more
 * than one place and reviewed in one place. Wording follows the evidence: backs are
 * robust and movement is safe, but a short list of symptoms genuinely needs a
 * clinician rather than an app.
 */

export const DISCLAIMER = `This app gives general movement guidance. It is not medical advice, and it is not a substitute for seeing a doctor or physiotherapist. Move within a comfortable range, stop if something sharpens, and come back tomorrow — consistency does more than intensity. If you are recovering from surgery, have osteoporosis or a joint replacement, or have pain that is new, severe or not improving, talk to a clinician first.`;

export const EMERGENCY_FLAGS = [
  'Numbness around your groin, genitals, buttocks or inner thighs — the area that would touch a saddle',
  'Trouble passing urine, or losing control of your bladder or bowels',
  'Weakness in both legs, or weakness that is getting worse',
  'Sudden loss of sexual sensation',
];

export const SEE_SOMEONE_FLAGS = [
  'Pain that wakes you at night and does not ease when you change position',
  'Weight loss you cannot explain, fever, or feeling generally unwell',
  'A recent significant fall or accident',
  'Leg weakness, numbness or pins and needles that is getting worse',
  'Back pain that is not improving at all after six weeks',
];

/** The single most useful self-triage rule a consumer app can teach. */
export const LEG_RULE = `If a movement makes symptoms move towards your spine and away from your leg, keep going — that direction is helping. If it pushes symptoms further down your leg, or brings on new numbness or tingling, stop that movement for today.`;

/** How to tell an irritated nerve from a tight muscle, which feel identical. */
export const NERVE_TEST = `In any hamstring stretch, pull your toes towards your shin and tuck your chin to your chest. If the stretch sharpens noticeably, that is nerve, not muscle — ease off the end-range work for a week or two.`;

/** The finding that stops a chunk of this audience grinding at something structural. */
export const ANKLE_NOTE = `If your ankle stops with a hard pinch at the front rather than a stretch in the calf, that is likely bone or joint rather than muscle. Anterior ankle spurs are very common in anyone who played sport, and no amount of squatting will shift them. Propping your heels is the answer, permanently, and it is not a failure.`;
