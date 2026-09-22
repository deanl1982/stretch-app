import type { Exercise } from './types.ts';
import { ANKLES } from './additions/ankles.ts';
import { BACK } from './additions/back.ts';
import { COSSACK } from './additions/cossack.ts';
import { HAMSTRINGS } from './additions/hamstrings.ts';
import { HIPS } from './additions/hips.ts';
import { STRENGTHSIDE } from './additions/strengthside.ts';

/**
 * The exercise library.
 *
 * Content is drawn from the source transcripts and then corrected against published
 * evidence — see `evidenceNote` on any item whose original claim did not survive
 * checking. The editorial rule throughout: where the source offered a *mechanism*,
 * we state a *feeling* and a *behaviour* instead.
 */
const CORE: Exercise[] = [
  // ─────────────────────────────────────────────────────────────── HIPS ──

  {
    id: 'hip-cars',
    name: 'Hip Circles',
    aka: ['Hip CARs', 'Controlled Articular Rotations'],
    regions: ['hips'],
    role: 'opener',
    intensity: 1,
    summary:
      'Stand on one leg and draw the biggest, slowest circle you can with the other knee.',
    why: "The best thirty seconds you can spend finding out what is actually stiff today. It moves the hip through every direction it owns — flexion, abduction, rotation, extension — under your own control, so it warms up and assesses at the same time.",
    targets: ['hip flexion', 'hip abduction', 'hip internal rotation', 'hip external rotation'],
    dose: { kind: 'reps', reps: 4, sets: 1, perSide: true, tempoNote: 'Slow enough to be boring.', secondsPerRep: 10 },
    cues: [
      'Only the hip moves — lock everything else.',
      'Go to the edge of your range, not past it.',
      'Slow enough that it feels boring.',
      'Notice where it catches. That is today’s information.',
    ],
    shouldFeel: 'Effortful and slightly shaky at the outer limits. You should feel where it sticks.',
    shouldNotFeel:
      'Painful clicking or catching, or a need to twist your torso to finish the circle — make the circle smaller instead.',
    regressions: [
      { label: 'Both hands on a wall', detail: 'Take balance out of it entirely.', props: ['wall'] },
      { label: 'Seated', detail: 'Sit tall on a chair and circle one knee.', props: ['chair'] },
      {
        label: 'On hands and knees',
        detail: 'Fire-hydrant circles, if standing balance is poor.',
        props: ['none'],
      },
    ],
    progressions: [
      { label: 'Hands off', detail: 'No wall, no support.' },
      { label: 'Full body tension', detail: 'Brace hard everywhere so only the hip moves.' },
      { label: 'Slower', detail: 'Build to 15–20 seconds per circle.' },
    ],
    props: ['wall'],
    officeFriendly: true,
    barefootOnly: false,
    contraindications: ['hipReplacement', 'balance'],
    dailySafe: true,
    source: ['Functional Range Conditioning (Andreo Spina)'],
  },

  {
    id: 'hip-swivels',
    name: 'Hip Swivels',
    aka: ['Windscreen wipers'],
    regions: ['hips'],
    role: 'opener',
    intensity: 1,
    summary:
      'Sit with your knees bent and feet down, and let both knees drop side to side like wipers.',
    why: 'The highest-value entry drill there is. It rotates one hip in and the other out at almost no load, and within a single set the knees usually start dropping further. It is also the fastest way to find out which of your hips is the stiff one.',
    targets: ['hip internal rotation', 'hip external rotation'],
    dose: { kind: 'reps', reps: 10, sets: 2, perSide: false, secondsPerRep: 3 },
    cues: [
      'Let the knees fall. Do not throw them.',
      'Keep both sit bones heavy.',
      'Breathe out as the knees drop.',
    ],
    shouldFeel:
      'A deep, vague stretch in the back of one hip and the front of the other. It should get easier within the set.',
    shouldNotFeel: 'Pinching at the front crease of the hip, or any twisting through the knee.',
    regressions: [
      {
        label: 'Hands behind you',
        detail: 'Plant your hands well behind your hips and lean back onto them.',
        props: ['none'],
      },
      { label: 'Sit on a cushion', detail: 'Raises the hips so the pelvis can stack.', props: ['cushion'] },
      { label: 'Smaller range', detail: 'Move only as far as the knees travel freely.', props: ['none'] },
    ],
    progressions: [
      { label: 'Hands off', detail: 'Chest upright, no support.' },
      { label: 'Pause at the end', detail: 'Hold 2–3 seconds at each side.' },
    ],
    props: ['none'],
    officeFriendly: false,
    barefootOnly: false,
    contraindications: [],
    dailySafe: true,
    source: ['The Most Potent Stretch for Hip Mobility'],
    evidenceNote:
      'The source calls this "working with the nervous system rather than stretching". That is closer to right than most stretching claims: early range gains come largely from increased stretch tolerance rather than tissue lengthening.',
  },

  {
    id: 'shin-box',
    name: 'Shin Box',
    regions: ['hips'],
    role: 'main',
    intensity: 1,
    summary:
      'Sit with one shin in front and one behind, both knees bent, the back knee pointing forwards rather than straight out.',
    why: 'The anchor position of the whole programme. It is deliberately easier than a strict 90/90 because the back knee is not forced out to the side, so your pelvis stays level and your lower back does not have to compensate.',
    targets: ['hip external rotation', 'hip internal rotation'],
    dose: { kind: 'hold', seconds: 45, sets: 1, perSide: true },
    cues: [
      'Stack your ribs over your pelvis.',
      'Both sit bones stay down.',
      'Sit up tall before you think about leaning forward.',
    ],
    shouldFeel:
      'A stretch in the outer glute of the front leg and the front or inner thigh of the back leg.',
    shouldNotFeel:
      'Pain on the inside of the back knee — that is the knee taking rotation the hip will not give.',
    regressions: [
      { label: 'Sit on a block', detail: 'A yoga block or firm cushion under the sit bones.', props: ['block', 'cushion'] },
      { label: 'Hands down', detail: 'Hands on the floor behind or beside you.', props: ['none'] },
      { label: 'Widen the angle', detail: 'Let the back shin drift further forward.', props: ['none'] },
    ],
    progressions: [
      { label: 'Hands off', detail: 'Sit tall with no support.' },
      { label: 'Walk it towards 90°', detail: 'Bring the back shin closer to a right angle.' },
    ],
    props: ['cushion'],
    officeFriendly: false,
    barefootOnly: false,
    contraindications: ['knee', 'hipReplacement'],
    dailySafe: true,
    source: ['The Most Potent Stretch for Hip Mobility'],
  },

  {
    id: 'ninety-ninety-lean',
    name: '90/90 Forward Lean',
    regions: ['hips'],
    role: 'main',
    intensity: 2,
    summary:
      'From shin box, lean your chest forward over the front shin, hinging at the hip rather than rounding your back.',
    why: 'The stretch most desk workers actually feel. It reaches the deep external rotators under the glute — the tissue that genuinely does get tight from sitting — and it is a far more accessible entry than a full pigeon.',
    targets: ['hip external rotation', 'piriformis', 'posterior hip capsule'],
    dose: { kind: 'hold', seconds: 60, sets: 1, perSide: true },
    cues: [
      'Sternum over the front shin, not off to the side.',
      'Hinge from the hip. Keep the spine long.',
      'Prop the front hip until you feel level.',
      'Breathe out and let it settle.',
    ],
    shouldFeel: 'A broad, deep stretch in the outer glute of the front leg.',
    shouldNotFeel:
      'Electric, burning or shooting pain down the back of the leg. That is nerve, not muscle — back off.',
    regressions: [
      {
        label: 'Cushion under the front hip',
        detail:
          'The single most important prop here. It stops the position tipping you off to one side, so you get the angle you came for.',
        props: ['cushion'],
      },
      { label: 'Elevate the front shin', detail: 'A low block under the front foot.', props: ['block'] },
      { label: 'Forearms on a chair', detail: 'Lean onto a chair seat instead of the floor.', props: ['chair'] },
    ],
    progressions: [
      { label: 'Chest towards the floor', detail: 'Forearms down.' },
      { label: 'Extend the back leg', detail: 'Gradually straighten it behind you towards a full pigeon.' },
    ],
    props: ['cushion'],
    officeFriendly: false,
    barefootOnly: false,
    contraindications: ['knee', 'hipReplacement', 'sciatica'],
    dailySafe: true,
    source: ['The Most Potent Stretch for Hip Mobility', 'Kit Laughlin (Stretch Therapy)'],
    evidenceNote:
      'Kit Laughlin’s correction — prop the front hip so the spine stays straight and you get the right angle — is the reason this works when the floor version does not. Keep the front knee at 90° or more; do not crank the heel towards the opposite hip.',
  },

  {
    id: 'ninety-ninety-isometric',
    name: '90/90 Press and Release',
    regions: ['hips'],
    role: 'main',
    intensity: 2,
    summary:
      'Sitting in shin box, push the back knee up into your hand for four seconds, then press it down into the floor for four seconds.',
    why: 'This is the one "release" technique in the source material that the evidence actually supports. Contracting hard in both directions and then relaxing produces a noticeably deeper sit straight afterwards — and for a lifter it is the familiar idea of earning range with tension rather than waiting for it.',
    targets: ['hip internal rotation', 'deep hip rotators'],
    dose: { kind: 'reps', reps: 2, sets: 1, perSide: true, tempoNote: '4s up, then 4s down.', secondsPerRep: 8 },
    cues: [
      'Push the knee into your hand like you are trying to stand it up.',
      'Now bury the knee in the floor.',
      'Breathe. Do not hold your breath and go red.',
    ],
    shouldFeel: 'A hard contraction, then a noticeably easier, deeper sit afterwards.',
    shouldNotFeel: 'Cramping that will not release, or any knee pain during the contraction.',
    regressions: [
      { label: 'Sit on a block first', detail: 'Get the position comfortable before adding tension.', props: ['block'] },
      { label: 'Half effort', detail: 'Use 50% force instead of maximal.', props: ['none'] },
    ],
    progressions: [
      { label: 'Two cycles', detail: 'Repeat before resettling.' },
      { label: 'Longer holds', detail: 'Build towards 5 seconds at near-maximal effort.' },
    ],
    props: ['none'],
    officeFriendly: false,
    barefootOnly: false,
    contraindications: ['knee', 'hipReplacement', 'bloodPressure'],
    dailySafe: true,
    source: ['The Most Potent Stretch for Hip Mobility', 'Garrett Kuljian (G Money Movement)'],
    evidenceNote:
      'This is a contract-relax technique. It reliably increases range — but the mechanism is your nervous system turning down its protective guarding, not muscle "releasing" or fascia breaking up.',
  },

  {
    id: 'shin-box-hip-lift',
    name: 'Shin Box Hip Lift',
    regions: ['hips'],
    role: 'load',
    intensity: 3,
    summary:
      'From shin box, press the back knee down and lift your hips off the floor, then lower slowly.',
    why: 'The item that turns a stretch into strength. The lowering is where the gains are — loaded work at long muscle lengths is the thing that makes range stick rather than evaporate. For anyone who squats or deadlifts, the back leg is usually the bigger limiter, and this is how you load it.',
    targets: ['hip internal rotation', 'hip extension', 'glute medius'],
    dose: { kind: 'reps', reps: 6, sets: 1, perSide: true, tempoNote: 'Lower over 3–4 seconds.', secondsPerRep: 6 },
    cues: [
      'Drive the back knee into the floor.',
      'Squeeze the glute to lift — do not push with your hands.',
      'Come down slower than you went up.',
    ],
    shouldFeel: 'The glute working hard, and a stretch through the front of the back hip.',
    shouldNotFeel: 'Compression in the lower back, or pain on the inside of the back knee.',
    regressions: [
      { label: 'Hands down', detail: 'Both hands on the floor taking weight.', props: ['none'] },
      { label: 'Do not lift at all', detail: 'Just press the knee down and think about lifting.', props: ['none'] },
      {
        label: 'Work from the top down',
        detail: 'Stay tall, rotate your torso towards the back leg, go only as deep as is comfortable.',
        props: ['none'],
      },
    ],
    progressions: [
      { label: 'Hands off', detail: 'One hand, then none.' },
      { label: 'Slower lowering', detail: '4–5 seconds down on every rep.' },
    ],
    props: ['none'],
    officeFriendly: false,
    barefootOnly: false,
    contraindications: ['knee', 'hipReplacement', 'groin'],
    dailySafe: true,
    source: ['Ido Portal', 'The Most Potent Stretch for Hip Mobility'],
  },

  {
    id: 'frog-rock-back',
    name: 'Frog Rock-Back',
    regions: ['hips'],
    role: 'main',
    intensity: 2,
    summary:
      'On hands and knees, take the knees wide with the inside of the feet down, then rock your hips backwards.',
    why: 'The adductors are the hole in most mobility routines. They are what actually stops you getting your knees to the floor cross-legged, they limit how wide you can squat, and they are a common strain site for anyone who runs and changes direction.',
    targets: ['adductors', 'hip abduction', 'medial hamstring'],
    dose: { kind: 'reps', reps: 10, sets: 1, perSide: false, tempoNote: 'Slow, then hold at the end.', secondsPerRep: 4 },
    cues: [
      'Shins parallel to each other.',
      'Rock back until it is firm, not until it is sharp.',
      'Keep the lower back flat — stop where it starts to round.',
    ],
    shouldFeel: 'A broad stretch through the inner thighs and groin.',
    shouldNotFeel:
      'Sharp pain at the pubic bone, or pulling right at the top of the inner thigh where the tendon attaches.',
    regressions: [
      { label: 'Forearms up', detail: 'Forearms on a block or a chair seat.', props: ['block', 'chair'] },
      { label: 'Narrow the knees', detail: 'Less width, less demand.', props: ['none'] },
      { label: 'Butterfly sit', detail: 'Sit on a cushion with the soles of the feet together.', props: ['cushion'] },
    ],
    progressions: [
      { label: 'Chest to the floor', detail: 'Lower the torso as you rock back.' },
      { label: 'Add contract-relax', detail: 'Squeeze the knees inwards for 5 seconds, then rock further back.' },
    ],
    props: ['none'],
    officeFriendly: false,
    barefootOnly: false,
    contraindications: ['knee', 'groin', 'hipReplacement'],
    dailySafe: true,
    source: ['Added — adductors are absent from the source material'],
  },

  {
    id: 'couch-stretch',
    name: 'Couch Stretch',
    aka: ['Wall couch stretch', 'Wall hip flexor stretch', 'Rear shin up the wall', 'Couch stretch on the wall', 'Bench couch stretch', 'Elevated couch stretch', 'Back foot on a box hip flexor stretch', 'Chair couch stretch', 'Low couch stretch', 'Foot-on-chair hip flexor stretch', 'Couch stretch PNF', 'Couch stretch with contract-relax', 'Squeeze-and-sink couch stretch', 'Psoas couch stretch', 'Couch stretch with lateral flexion', 'Couch stretch with side bend'],
    regions: ['hips', 'back'],
    role: 'main',
    intensity: 2,
    summary:
      'Half-kneeling with something soft under the back knee; the harder version puts the back foot up on a chair seat.',
    why: 'Sitting all day genuinely does reduce how far your hip can extend — it is one of the few sitting effects that has actually been measured. For a runner that is stride length. For a lifter it is whether you finish a hip hinge with your glutes or your lower back.',
    targets: ['hip extension', 'hip flexors', 'rectus femoris'],
    dose: { kind: 'hold', seconds: 45, sets: 1, perSide: true },
    cues: [
      'Squeeze the back glute first — that is what makes it work.',
      'Tuck your tailbone under. Do not arch your back to get lower.',
      'Pad the knee.',
    ],
    shouldFeel: 'A strong stretch down the front of the back hip and thigh.',
    shouldNotFeel: 'Pinching in the lower back, which means you are arching, or pain at the kneecap.',
    regressions: [
      { label: 'Kneel in front of a chair', detail: 'Cushion under the knee, hands on the seat.', props: ['cushion', 'chair'] },
      { label: 'Hands on the desk', detail: 'For balance.', props: ['none'] },
      { label: 'Standing split stance', detail: 'Back foot on a low step. No knee pressure at all.', props: ['step'] },
      { label: 'Knee well out from the chair', detail: 'Kneel with the back foot on the chair seat but the knee 30 to 40 cm away, so the shin slopes instead of standing upright.', props: ['chair', 'cushion'] },
    ],
    progressions: [
      { label: 'Back foot on the chair', detail: 'The full couch stretch.' },
      { label: 'Overhead reach', detail: 'Same-side arm up and lean away.' },
      { label: 'Back shin up the wall', detail: 'The tallest version: kneel with the back shin flat up a wall, foot in the air, and sink the hips towards the wall. Start with the knee 20 to 40 cm out and walk it back.' },
      { label: 'Back foot on a bench, no knee down', detail: 'Stand in a lunge with the back foot up on a bench or box and sink until the front of the back hip stretches. Kneeling is the easier version.' },
      { label: 'Glute squeeze cycles', detail: 'Squeeze the back glute hard for 5 seconds, relax, then sink a little deeper. Repeat three times.' },
      { label: 'Overhead reach with side bend', detail: 'Raise the arm on the back-leg side and lean the ribcage a little away from the stretched hip. Stay tall; do not arch the lower back.' },
    ],
    props: ['cushion', 'chair'],
    officeFriendly: false,
    barefootOnly: false,
    contraindications: ['knee', 'hipReplacement'],
    dailySafe: true,
    source: ['Kelly Starrett', 'Chairs Wreck your Hips'],
    evidenceNote:
      'The source says sitting leaves these muscles "ravaged". Nothing is damaged — you have simply stopped using a range, and your lower back tends to cover for it. The couch stretch is Kelly Starrett’s, from Becoming a Supple Leopard.',
  },

  {
    id: 'chair-hover',
    name: 'Become Your Own Chair',
    regions: ['hips'],
    role: 'opener',
    intensity: 1,
    summary: 'Sitting at your desk, press through your feet and lift your backside a few inches off the seat.',
    why: 'The best-evidenced habit in the whole app — though not for the reason the video gives. Breaking up sitting every half hour with a minute or two of light activity has real measured benefit for blood sugar and circulation. This version adds a little hip and leg loading, and is invisible in an open-plan office.',
    targets: ['quadriceps', 'glutes', 'hip abduction'],
    dose: { kind: 'reps', reps: 4, sets: 1, perSide: false, tempoNote: 'Hold 10–20 seconds each.', secondsPerRep: 15 },
    cues: [
      'Feet flat, drive through the whole foot.',
      'Let the knees spread.',
      'Breathe out as you lift — do not strain against a held breath.',
    ],
    shouldFeel: 'Quads and glutes working, inner thighs stretching.',
    shouldNotFeel: 'Knee pain, or the strain of holding your breath.',
    regressions: [
      { label: 'Hands on the desk', detail: 'Share the load through your arms.', props: ['none'] },
      { label: 'Just stand up', detail: 'Stand and sit three times. Same interruption.', props: ['chair'] },
    ],
    progressions: [
      { label: 'Hands off', detail: '20–30 second holds.' },
      { label: 'Press the knees apart', detail: 'Actively spread while hovering.' },
    ],
    props: ['chair'],
    officeFriendly: true,
    barefootOnly: false,
    contraindications: ['shoulder', 'wrist'],
    dailySafe: true,
    source: ['Chairs Wreck your Hips'],
    evidenceNote:
      'Use a stable chair — never a wheeled office chair unless the castors are locked.',
  },

  // ──────────────────────────────────────────────────────── HAMSTRINGS ──

  {
    id: 'dowel-hinge',
    name: 'Broomstick Hinge',
    aka: ['Dowel hinge calibration', 'Wall hip hinge', 'Butt-to-wall hinge', 'Wall hinge drill', 'Wall tap hinge'],
    regions: ['hamstrings', 'back'],
    role: 'opener',
    intensity: 1,
    summary:
      'Hinge forward with a broomstick held along your spine, touching your head, mid-back and tailbone.',
    why: 'The cheapest honest feedback there is. Your brain already knows how to brace under a bar, but with no load and no feedback most people quietly round at 40 or 50 degrees and call it 90. The moment the stick lifts off your tailbone, your lower back has taken over — and that is your real range today.',
    targets: ['hip hinge', 'hamstrings', 'lumbar position awareness'],
    dose: { kind: 'reps', reps: 8, sets: 1, perSide: false, tempoNote: 'Slow and deliberate.', secondsPerRep: 5 },
    cues: [
      'Push the hips back. Do not bend down.',
      'Keep all three contact points.',
      'Stop the instant the stick lifts off your tailbone.',
    ],
    shouldFeel: 'Hamstrings loading, a mild pull.',
    shouldNotFeel: 'Any pinch or ache in the lower back — that means you already lost the position.',
    regressions: [
      { label: 'Bend the knees more', detail: '20–30 degrees of knee bend.', props: ['dowel'] },
      { label: 'No stick', detail: 'One hand on your chest, one on your tailbone, and feel for it.', props: ['none'] },
      { label: 'Wall hinge', detail: 'Stand a hand-span from a wall and push the hips back to touch it.', props: ['wall'] },
    ],
    progressions: [
      { label: 'Straighten the knees', detail: 'Reduce the bend towards straight.' },
      { label: 'Film it', detail: 'Drop the stick and check yourself from the side.' },
      { label: 'Step further from the wall', detail: 'Move the feet a little further from the wall each week so the hips have to travel further back before they touch it.' },
    ],
    props: ['dowel'],
    officeFriendly: true,
    barefootOnly: false,
    contraindications: ['sciatica'],
    dailySafe: true,
    source: ['The ONLY Hamstring Stretch you Need'],
  },

  {
    id: 'standing-good-morning',
    name: 'Standing Good Morning',
    regions: ['hamstrings'],
    role: 'main',
    intensity: 1,
    summary:
      'Soft knees, lower back gently arched, push the hips back and hinge your torso towards horizontal.',
    why: 'This is the same movement as the test, so training it is training the score. It is the pattern that makes picking things off the floor a hip job rather than a spine job — and for a deadlifter it is the hinge stripped of the load that lets you cheat with range.',
    targets: ['hamstrings', 'adductor magnus', 'spinal erectors'],
    dose: { kind: 'reps', reps: 8, sets: 2, perSide: false, tempoNote: '3s down, 2s up.', secondsPerRep: 5 },
    cues: [
      'Hips back, not chest down.',
      'Belt buckle rotates towards the floor.',
      'Stop where the arch stops.',
      'Drive the floor away to stand up.',
    ],
    shouldFeel: 'A broad, warm stretch high in the back of the thighs.',
    shouldNotFeel: 'Burning or aching in the lower back, or pinching at the front of the hip.',
    regressions: [
      { label: 'Hands on thighs', detail: 'Use the pressure to keep your back flat.', props: ['none'] },
      { label: 'More knee bend', detail: '30–40 degrees.', props: ['none'] },
      { label: 'Hold a chair back', detail: 'Hinge away from it at arm’s length.', props: ['chair'] },
    ],
    progressions: [
      { label: 'Straighter knees', detail: 'Reduce the bend.' },
      { label: 'Add the pulse', detail: 'Straighten the knees a little further at the bottom.' },
    ],
    props: ['none'],
    officeFriendly: true,
    barefootOnly: false,
    contraindications: ['sciatica', 'backPain'],
    dailySafe: true,
    source: ['The ONLY Hamstring Stretch you Need'],
  },

  {
    id: 'good-morning-pulse',
    name: 'Good Morning Pulse',
    regions: ['hamstrings'],
    role: 'main',
    intensity: 2,
    summary:
      'At the bottom of a good morning, repeatedly straighten your knees a little further while keeping the back flat.',
    why: 'This reaches the exact gap a deadlifting history leaves. You have trained hip extension against a bent-ish knee for years; the knee-straight end range is the untrained territory. It is also self-scoring — how straight the knee gets is a number you can watch move.',
    targets: ['hamstrings at end range', 'knee extension'],
    dose: { kind: 'reps', reps: 7, sets: 2, perSide: false, tempoNote: '2s out, 2s back. Never grind.', secondsPerRep: 4 },
    cues: [
      'Push the knee straight, do not drop the chest.',
      'Back flat first, knee straight second.',
      'Straighter by a millimetre, not by a mile.',
    ],
    shouldFeel: 'An intense but broad hamstring stretch. Mildly uncomfortable is normal.',
    shouldNotFeel:
      'A thin, wiry, electric line running towards the calf or foot, or any tingling. That is nerve.',
    regressions: [
      { label: 'Stay higher', detail: 'Raise the torso and straighten the knee from there.', props: ['none'] },
      { label: 'Elevate the heel', detail: 'On a book or a plate — takes the calf and nerve out of it.', props: ['wedge'] },
      { label: 'Hands on thighs', detail: 'Throughout.', props: ['none'] },
    ],
    progressions: [
      { label: 'Lower the torso', detail: 'Towards 90° while keeping the knee range.' },
      { label: 'Add an isometric', detail: '3 seconds at the straightest point of each pulse.' },
    ],
    props: ['none'],
    officeFriendly: true,
    barefootOnly: false,
    contraindications: ['sciatica', 'backPain'],
    dailySafe: true,
    source: ['The ONLY Hamstring Stretch you Need'],
    evidenceNote:
      'The source calls this a "floss". We renamed it, because nerve flossing is a different technique for a different problem — if your symptoms are electric or radiating, you want the nerve slider, not this.',
  },

  {
    id: 'hands-on-thighs-straighten',
    name: 'Hands-on-Thighs Straighten',
    regions: ['hamstrings'],
    role: 'main',
    intensity: 1,
    summary:
      'Hinge forward with your hands braced on your thighs, then straighten one knee at a time.',
    why: 'The entry point for anyone who feels they have steel cables down the back of their legs. Two strong hamstrings pulling your pelvis backwards will beat your hip flexors every time — bracing on the thighs outsources that fight to your arms, so the muscle actually gets the stretch instead of your spine absorbing it.',
    targets: ['hamstrings', 'anterior pelvic tilt control'],
    dose: { kind: 'reps', reps: 5, sets: 2, perSide: true, tempoNote: '3–5s hold on each straight leg.', secondsPerRep: 6 },
    cues: [
      'Push hard through the hands to keep your back flat.',
      'Stick the tailbone out.',
      'Straighten one knee, let the other stay soft.',
    ],
    shouldFeel: 'A clear one-sided hamstring stretch, high under the sit bone.',
    shouldNotFeel: 'Compression in the lower back.',
    regressions: [
      { label: 'Stay high', detail: 'Torso at 30–45° only.', props: ['none'] },
      { label: 'Hands on a chair', detail: 'Or a countertop instead of your thighs.', props: ['chair'] },
      { label: 'Elevate the heel', detail: 'Two or three centimetres under the working leg.', props: ['wedge'] },
    ],
    progressions: [
      { label: 'Lower the torso', detail: 'Progressively towards 90°.' },
      { label: 'Both knees at once', detail: 'That is the Good Morning Pulse.' },
    ],
    props: ['none'],
    officeFriendly: true,
    barefootOnly: false,
    contraindications: ['sciatica'],
    dailySafe: true,
    source: ['The ONLY Hamstring Stretch you Need'],
  },

  {
    id: 'active-slr',
    name: 'Active Straight Leg Raise',
    aka: ['AIS hamstring stretch', 'Mattes method hamstring stretch', 'Rope hamstring stretch', 'Active isolated hamstring stretch'],
    regions: ['hamstrings'],
    role: 'main',
    intensity: 1,
    summary:
      'Lie on your back, one leg flat on the floor, and lift the other straight leg as high as it goes under its own power.',
    why: 'The flexion-safe route, and the most objective one. The floor stops your lower back rounding entirely, so a sensitive back still gets hamstring work. It also trains your hip flexors to produce the range rather than having range imposed on you — which is what makes it usable.',
    targets: ['hamstrings', 'active hip flexion'],
    dose: { kind: 'reps', reps: 8, sets: 2, perSide: true, tempoNote: '2s hold at the top.', secondsPerRep: 6 },
    cues: [
      'The down leg stays glued to the floor — that is the whole exercise.',
      'Lift with the front of the hip.',
      'Ribs down, lower back quiet.',
    ],
    shouldFeel: 'A hamstring stretch plus a working sensation at the front of the hip.',
    shouldNotFeel: 'The down leg lifting, your lower back arching off the floor, or any zinging.',
    regressions: [
      { label: 'Bend the down leg', detail: 'Foot flat. Removes the pull on your lower back.', props: ['none'] },
      { label: 'Doorway', detail: 'Down leg through the frame, up leg sliding against it.', props: ['doorframe'] },
      { label: 'Belt or towel', detail: 'Loop it over the foot and assist the last few degrees.', props: ['towel'] },
    ],
    progressions: [
      { label: 'Down leg straight', detail: 'Pressed flat to the floor.' },
      { label: 'Own the assisted range', detail: 'Hold the top for 5 seconds with no help after an assisted rep.' },
      { label: 'Two-second strap assist at the top', detail: 'Lift the straight leg with your own muscles, then use a strap for a gentle extra two seconds at the end before lowering.' },
    ],
    props: ['none'],
    officeFriendly: false,
    barefootOnly: false,
    contraindications: [],
    dailySafe: true,
    source: ['Added — the flexion-safe substitute'],
    evidenceNote:
      'This is also the app’s best progress metric. Around 80° is normal, and the smallest change that is not measurement noise is 6–7° — so retest monthly, not weekly.',
  },

  {
    id: 'sciatic-slider',
    name: 'Sciatic Nerve Slider',
    regions: ['hamstrings'],
    role: 'main',
    intensity: 1,
    summary:
      'Seated, straighten the knee as you lift your chin, then bend the knee as you tuck your chin. Rhythmic, never held.',
    why: 'When the sciatic nerve is irritated it feels exactly like tight hamstrings — and stretching harder makes it worse. This glides the nerve rather than stretching a muscle, adding tension at one end while releasing it at the other.',
    targets: ['sciatic nerve excursion'],
    dose: { kind: 'reps', reps: 12, sets: 1, perSide: true, tempoNote: 'Smooth, like a pendulum. Do not hold.', secondsPerRep: 3 },
    cues: [
      'Oscillate, do not hold.',
      'Chin up as the knee straightens, chin down as it bends.',
      'Stay under the symptom. Never chase the zing.',
    ],
    shouldFeel: 'Movement and a mild, fleeting pull. Often a sense of easing.',
    shouldNotFeel:
      'Increased tingling or numbness, or symptoms that linger after you stop. That means too much range or too many reps.',
    regressions: [
      { label: 'Smaller range', detail: 'At both ends.', props: ['none'] },
      { label: 'Knee short of straight', detail: 'Stop well before full extension.', props: ['none'] },
    ],
    progressions: [
      { label: 'Add ankle movement', detail: 'Gentle toes-to-shin as the knee straightens.' },
    ],
    props: ['chair'],
    officeFriendly: true,
    barefootOnly: false,
    contraindications: [],
    // Only offered to people who told us they have nerve symptoms. Handing this to
    // someone with plain tight hamstrings is pointless; handing end-range stretching
    // to someone with an irritated nerve makes them worse.
    requiresFlag: 'sciatica',
    dailySafe: true,
    source: ['Added — not in the source material, and needed'],
    evidenceNote:
      'How to tell nerve from muscle: in any hamstring stretch, pull your toes towards your shin and tuck your chin. If the stretch sharpens noticeably, it is nerve. Use this instead of end-range stretching for a week or two.',
  },

  {
    id: 'long-sit',
    name: 'Long Sit',
    aka: ['Straddle sit'],
    regions: ['hamstrings', 'hips'],
    role: 'rest',
    intensity: 1,
    summary: 'Sit on the floor with your legs straight ahead, or wide, and your spine tall.',
    why: 'The payoff position. This is what the hinge work buys you, and doing it straight after hamstring work is the moment you notice the difference — the same person who slumped ten minutes ago can often sit upright on a lower cushion.',
    targets: ['hamstrings', 'adductors', 'upright sitting endurance'],
    dose: { kind: 'hold', seconds: 60, sets: 2, perSide: false },
    cues: [
      'Sit on the front of your sit bones, not behind them.',
      'Grow tall — this is posture, not a stretch.',
      'Cushion up until you can sit upright. Height is not failure.',
    ],
    shouldFeel: 'Hamstrings under passive tension, and honest work in your lower back and hips.',
    shouldNotFeel: 'Numbness in the legs or feet, or sit-bone pain.',
    regressions: [
      { label: 'Sit on a cushion', detail: 'Raise the hips 5–10cm so the pelvis can tip forward.', props: ['cushion', 'block'] },
      { label: 'Soften the knees', detail: 'A small bend is fine.', props: ['none'] },
      { label: 'Back to a wall', detail: 'Let the wall hold you up.', props: ['wall'] },
    ],
    progressions: [
      { label: 'Lower the cushion', detail: 'Over weeks.' },
      { label: 'Hinge forward slightly', detail: 'Flat back, a few degrees, and hold.' },
    ],
    props: ['cushion'],
    officeFriendly: false,
    barefootOnly: false,
    contraindications: [],
    dailySafe: true,
    source: ['Give me 5 minutes, I’ll Fix your Hips'],
  },

  // ─────────────────────────────────────────────────────── ANKLES/FEET ──

  {
    id: 'wall-ankle-drive',
    name: 'Wall Ankle Drive',
    aka: ['Knee-to-wall reps', 'Banded ankle mobilisation', 'Banded ankle distraction', 'Band-assisted ankle dorsiflexion', 'Posterior talar glide with band'],
    regions: ['ankles'],
    role: 'opener',
    intensity: 1,
    summary:
      'Facing a wall in a lunge stance, drive your knee forward past your toes with the heel glued down.',
    why: 'Same position as the assessment, so practising and testing are the same skill. It is weight-bearing with a bent knee, which is the specific form of ankle range a squat actually asks for — and it is the one most lifters never train, because they only ever do straight-leg calf stretches.',
    targets: ['ankle dorsiflexion', 'soleus', 'posterior talar glide'],
    dose: { kind: 'reps', reps: 12, sets: 1, perSide: true, tempoNote: 'Slow.', secondsPerRep: 4 },
    cues: [
      'Heel stays welded to the floor.',
      'Drive the knee straight over the second toe.',
      'Do not let the arch collapse inwards to fake the range.',
    ],
    shouldFeel: 'A firm stretch low in the calf, behind the ankle.',
    shouldNotFeel: 'A bony pinch at the front of the ankle crease.',
    regressions: [
      { label: 'Foot closer to the wall', detail: 'Close enough that the heel stays down.', props: ['wall'] },
      { label: 'Half-kneeling', detail: 'Rear knee on a cushion.', props: ['cushion', 'wall'] },
      { label: 'Hands on the wall', detail: 'Take some bodyweight through your arms.', props: ['wall'] },
    ],
    progressions: [
      { label: 'Foot further back', detail: 'A centimetre a week.' },
      { label: 'Sweep the joint', detail: 'Drive the knee inside, over and outside the second toe.' },
      { label: 'Band across the front of the ankle', detail: 'Loop a band around the front of the ankle, anchored behind you at foot height so it pulls the ankle bone back, and drive the knee forward against it.' },
    ],
    props: ['wall'],
    officeFriendly: true,
    barefootOnly: false,
    contraindications: [],
    dailySafe: true,
    source: ['Added — the trainable form of the assessment'],
    evidenceNote:
      'If your ankle stops with a hard pinch at the front rather than a calf stretch, that is likely joint or bone rather than muscle. Stretching harder will not fix it — see the note on heel elevation.',
  },

  {
    id: 'soleus-calf-stretch',
    name: 'Bent-Knee Calf Stretch',
    aka: ['Soleus stretch'],
    regions: ['ankles'],
    role: 'main',
    intensity: 1,
    summary:
      'Forefoot on a step, heel dropped, knee bent twenty to thirty degrees.',
    why: 'This is the squat stretch. Your calf has two muscles: one crosses the knee and one does not. Bend the knee and the big one goes slack, leaving the soleus — which is the muscle that actually limits you at the bottom of a deep squat. Almost everyone only ever does the straight-knee version, which is why their squat never changes.',
    targets: ['soleus', 'ankle dorsiflexion'],
    dose: { kind: 'hold', seconds: 45, sets: 2, perSide: true },
    cues: [
      'Keep the knee soft and bent — that is the whole point.',
      'Drop the heel, do not bounce.',
      'Stop the arch rolling inwards.',
    ],
    shouldFeel: 'A deep, low stretch just above the heel.',
    shouldNotFeel: 'Sharp pain in the Achilles cord itself, or pinching at the front of the ankle.',
    regressions: [
      { label: 'Smaller drop', detail: 'A folded towel instead of a step.', props: ['towel'] },
      { label: 'Hands on a wall', detail: 'Take weight through your arms.', props: ['wall'] },
    ],
    progressions: [
      { label: 'Full step drop', detail: 'Heel well below the step.' },
      { label: 'Single leg', detail: 'All your bodyweight on one side.' },
    ],
    props: ['step'],
    officeFriendly: true,
    barefootOnly: false,
    contraindications: ['achilles'],
    dailySafe: true,
    source: ['How a 5-Min Deep Squat Changes the Human Body'],
    evidenceNote:
      'The source is right that the deep squat calf stretch is "mainly the soleus" — one of its strongest claims. A heels-down deep squat needs roughly 35° of ankle dorsiflexion.',
  },

  {
    id: 'gastroc-calf-stretch',
    name: 'Straight-Knee Calf Stretch',
    aka: ['Gastrocnemius stretch', 'Half-dome calf stretch', 'Half-roller calf stretch', 'Dome calf stretch'],
    regions: ['ankles'],
    role: 'main',
    intensity: 1,
    summary: 'Same step or wall position, back leg locked straight, heel down.',
    why: 'This is the running stretch — the counterpart to the bent-knee version. It targets the two-joint calf muscle that matters at push-off, when your knee is relatively straight. It does comparatively little for your squat, and that is the point of running them as a pair.',
    targets: ['gastrocnemius', 'Achilles tendon'],
    dose: { kind: 'hold', seconds: 45, sets: 2, perSide: true },
    cues: ['Back knee locked straight.', 'Heel down, hips forward, not up.', 'Second toe points straight ahead.'],
    shouldFeel: 'A long stretch through the fat part of the calf.',
    shouldNotFeel: 'Pain in the Achilles cord, or in the arch of the foot.',
    regressions: [
      { label: 'Wall push, foot flat', detail: 'No step at all.', props: ['wall'] },
      { label: 'Shallower drop', detail: 'Less depth off the step.', props: ['step'] },
      { label: 'Half foam roller under the ball of the foot', detail: 'With no step, put the ball of the foot on a half foam roller, drop the heel and straighten the knee.', props: ['roller', 'wall'] },
    ],
    progressions: [
      { label: 'Single leg on a full step', detail: 'Full bodyweight.' },
      { label: 'Sweep into the soleus', detail: 'Add 10 seconds of bent knee straight afterwards.' },
    ],
    props: ['step'],
    officeFriendly: true,
    barefootOnly: false,
    contraindications: ['achilles'],
    dailySafe: true,
    source: ['How a 5-Min Deep Squat Changes the Human Body'],
  },

  {
    id: 'tib-raise',
    name: 'Tibialis Raise',
    regions: ['ankles'],
    role: 'load',
    intensity: 1,
    summary:
      'Back against a wall, heels a stride out, pull your toes up towards your shins slowly.',
    why: 'The shin muscle is what pulls you down into a deep squat and holds you there. Loading it separately means you can hold end range actively instead of just hanging in it — and strength through a new range is what makes the range stick.',
    targets: ['tibialis anterior', 'active dorsiflexion'],
    dose: { kind: 'reps', reps: 15, sets: 2, perSide: false, tempoNote: '2s hold at the top.', secondsPerRep: 4 },
    cues: [
      'Toes up as high as they will go, then higher.',
      'Slow on the way down — do not drop the foot.',
      'Heels planted, knees soft.',
    ],
    shouldFeel: 'A strong burn down the front of the shin.',
    shouldNotFeel: 'Pain over the shin bone itself, or a cramping arch.',
    regressions: [
      { label: 'Heels closer to the wall', detail: 'Much easier.', props: ['wall'] },
      { label: 'Seated', detail: 'Heel on the floor, no bodyweight.', props: ['chair'] },
    ],
    progressions: [
      { label: 'Heels further out', detail: 'More leverage, more load.' },
      { label: 'Hold a weight', detail: 'Against your chest.' },
    ],
    props: ['wall'],
    officeFriendly: true,
    barefootOnly: false,
    contraindications: [],
    dailySafe: true,
    source: ['How a 5-Min Deep Squat Changes the Human Body', 'Ben Patrick (Knees Over Toes)'],
    evidenceNote:
      'Ben Patrick’s "25% of bodyweight for 5×5" is a commercial programme benchmark, not a validated norm. Ignore the number and just get stronger.',
  },

  {
    id: 'seiza',
    name: 'Seiza',
    aka: ['Kneeling sit', 'Heel sit', 'Vajrasana'],
    regions: ['ankles', 'hips'],
    role: 'rest',
    intensity: 2,
    summary: 'Kneel with the tops of your feet flat on the floor and sit back towards your heels.',
    why: 'The forgotten direction. Everything else here works the ankle one way; a life of chairs and shoes loses both ends. This is the range you need to kneel, to sit on the floor with your kids, and to get up without using your hands.',
    targets: ['knee flexion', 'ankle plantarflexion', 'quadriceps', 'tibialis anterior'],
    dose: { kind: 'hold', seconds: 60, sets: 1, perSide: false },
    cues: [
      'Tops of the feet flat, toes pointing straight back.',
      'Sit back only as far as the knees are comfortable.',
      'Prop under the hips the moment it is too much.',
    ],
    shouldFeel: 'A stretch across the tops of the feet, shins and thighs. Even, tolerable pressure on the knees.',
    shouldNotFeel: 'Pinching or sharp pain inside the knee joint, or feet going numb.',
    regressions: [
      { label: 'Block under the hips', detail: 'Reduces how far you sit back. Start high.', props: ['block', 'cushion'] },
      { label: 'Rolled towel under the ankles', detail: 'If the front of the ankle is the limit.', props: ['towel'] },
      { label: 'Hands on the floor in front', detail: 'Takes weight off the knees.', props: ['none'] },
    ],
    progressions: [
      { label: 'Lower the prop', detail: 'Then remove it.' },
      { label: 'Lean back slightly', detail: 'Onto your hands, for more shin and quad stretch.' },
    ],
    props: ['cushion'],
    officeFriendly: false,
    barefootOnly: false,
    contraindications: ['knee'],
    dailySafe: true,
    source: ['Give me 5 minutes, I’ll Fix your Hips'],
    evidenceNote:
      'Start at 30 seconds, not three minutes. And vary your positions — a career of occupational kneeling is associated with knee problems, so this is a position to visit often and briefly, not to camp in.',
  },

  {
    id: 'toes-tucked-kneeling',
    name: 'Toes-Tucked Kneeling',
    aka: ['Seiza, toes tucked', 'Toe sit', 'Kneeling toe stretch'],
    regions: ['ankles'],
    role: 'main',
    intensity: 3,
    summary: 'Kneel with your toes tucked under and sit back towards your heels. Far harder than it looks.',
    why: 'Textbooks put a healthy big toe at around 65 to 75 degrees of upward bend, though walking needs less. It tensions the whole sole of your foot when it bends — that is what turns your foot into a rigid lever to push off. A life in cushioned shoes loses it. This is the blunt instrument for getting it back.',
    targets: ['big toe extension', 'plantar fascia', 'toe flexors'],
    dose: { kind: 'hold', seconds: 15, sets: 3, perSide: false },
    maxHoldSeconds: 20,
    cues: [
      'Tuck all ten toes, including the little one.',
      'Sit back only until it is a strong six out of ten.',
      'Keep breathing. If you are holding your breath, come forward.',
    ],
    shouldFeel: 'A broad, intense stretch across the balls of the feet and the soles.',
    shouldNotFeel: 'A sharp point of pain under the big toe joint, or a burning heel.',
    regressions: [
      { label: 'Folded towel under the toes', detail: 'The single best regression — reduces the toe angle.', props: ['towel'] },
      { label: 'Weight forward on your hands', detail: 'Take most of your bodyweight off your feet.', props: ['none'] },
      { label: 'Rock in and out', detail: 'Reps rather than a hold.', props: ['none'] },
    ],
    progressions: [
      { label: 'Remove the towel', detail: 'Toes straight onto the floor.' },
      { label: 'Sit back further', detail: 'Sit back a little further each week. Keep each hold to 20 seconds at most; add sets rather than time.' },
    ],
    props: ['towel'],
    officeFriendly: false,
    barefootOnly: true,
    contraindications: ['knee', 'plantarFascia', 'bigToe'],
    dailySafe: true,
    source: ['Give me 5 minutes, I’ll Fix your Hips'],
    evidenceNote: 'The source says this improves ankle dorsiflexion. It does not: the ankle sits at about a right angle here, well short of the bend a squat needs. It is an excellent toe, forefoot and sole exercise, which is reason enough. Start at ten seconds.',
  },

  {
    id: 'big-toe-tucked-kneeling',
    name: 'Big-Toe-Tucked Kneeling',
    aka: ['Seiza, big toe only', 'First ray kneeling', 'Single-toe seiza'],
    regions: ['ankles'],
    role: 'main',
    intensity: 3,
    summary:
      'Kneel in seiza and tuck just the big toe of one foot under, so all the pressure lands on that one joint.',
    why: 'Textbooks put a healthy big toe at around 65 to 75 degrees of upward bend, though walking needs less. When it bends, the whole sole tightens and your foot becomes a stiff lever to push off. Toes-tucked kneeling spreads that job across all five toes. This puts it through one \u2014 the toe that does most of the work when you run, and the one a lifetime of stiff-soled shoes has let you avoid using.',
    targets: ['big toe extension', 'first ray', 'plantar aponeurosis', 'knee flexion'],
    dose: { kind: 'hold', seconds: 15, sets: 2, perSide: true },
    maxHoldSeconds: 20,
    cues: [
      'Kneel in seiza, then tuck under the big toe of one foot only.',
      'Keep the other four toes flat on the floor.',
      'Sit back until it is a strong six out of ten, and no further.',
      'Breathe. If you are bracing against it, come forward.',
    ],
    shouldFeel:
      'A narrow, concentrated stretch under the big toe and across the inside of the ball of that foot.',
    shouldNotFeel:
      'A sharp, pinpoint ache directly under the big toe joint, or a hard bony stop with pain on top of it.',
    regressions: [
      {
        label: 'Folded towel under the toe',
        detail: 'The one that makes this doable on day one \u2014 it cuts the angle at the joint.',
        props: ['towel'],
      },
      {
        label: 'Hands on the floor in front',
        detail: 'Takes most of your weight off the foot and off the knee.',
        props: ['none'],
      },
      {
        label: 'Kneel tall',
        detail: 'Hips off the heels entirely. Least load, still the right shape.',
        props: ['none'],
      },
    ],
    progressions: [
      { label: 'Sit all the way back', detail: 'Hips onto the heel, full weight through the toe.' },
      { label: 'Both big toes at once', detail: 'Same hold, half the time, twice the honesty.' },
      {
        label: 'Hold longer',
        detail: 'Build towards 20 seconds. That is the ceiling here, not a target to beat.',
      },
    ],
    props: ['towel'],
    officeFriendly: false,
    barefootOnly: true,
    contraindications: ['knee', 'plantarFascia', 'bigToe'],
    dailySafe: true,
    source: ['Kadour Ziani', 'Added \u2014 the loaded first ray item'],
    evidenceNote:
      'The windlass is real: bend the big toe up and the sheet of tissue under your foot pulls tight and the arch lifts \u2014 measured at roughly 6mm of arch rise sitting and 11mm walking. What nobody has tested is whether holding this position changes how you walk or run, so the honest claim is narrower \u2014 it is loaded range you do not currently own. Two small bones called the sesamoids sit directly under this joint and get squeezed when the toe bends up under weight, so a pinpoint ache there means stop, not push. Keep kneeling short and varied: a working life spent kneeling is associated with knee osteoarthritis and meniscal problems, and nothing here protects your knees.',
  },

  {
    id: 'deep-squat-hold',
    name: 'Deep Squat Hold',
    aka: ['Prying squat', 'Goblet squat pry', 'Elbow-prying deep squat', 'Prying kettlebell squat'],
    regions: ['ankles', 'hips', 'back', 'fullBody'],
    role: 'rest',
    intensity: 2,
    summary: 'Sit all the way down into the deepest squat you can hold, and stay there and breathe.',
    why: 'The position your job removed. It is the app’s best ankle and hip loading, its best assessment, and the thing every other item feeds into. If your heels lift, that is ankle range; if your back rounds, that is hips. Neither is a moral failure — both are information.',
    targets: ['ankle dorsiflexion', 'hip flexion', 'hip external rotation', 'knee flexion'],
    dose: { kind: 'hold', seconds: 45, sets: 2, perSide: false },
    cues: [
      'Heels down — prop them if they lift.',
      'Push the knees out over your little toes.',
      'Stack your ribs over your pelvis and breathe into your belly.',
      'Hold the depth you can breathe in, not the deepest you can force.',
    ],
    shouldFeel: 'A broad stretch through the hips, groin and calves. Effortful at first, then settled and boring.',
    shouldNotFeel:
      'Sharp pinching at the front of the ankle or hip, knee pain, or pins and needles in the feet.',
    regressions: [
      {
        label: 'Hold a doorframe',
        detail: 'Grab something solid and let your arms take a third of your weight. Most people can do this on day one.',
        props: ['doorframe'],
      },
      { label: 'Elevate the heels', detail: 'A book, a plate or a folded mat under the heels.', props: ['wedge'] },
      { label: 'Counterbalance', detail: 'Hold something light out in front — even a water bottle.', props: ['none'] },
      { label: 'Sit on a block', detail: 'Or the bottom step.', props: ['block'] },
    ],
    progressions: [
      { label: 'Lower the heel wedge', detail: 'One book thickness every few weeks.' },
      { label: 'Hands off', detail: 'Elbows inside the knees, gently pushing them out.' },
      { label: 'Play in the bottom', detail: 'Rock side to side, reach, shift your weight.' },
      { label: 'Pry the knees out', detail: 'Palms together at the chest, press the elbows into the inside of the knees to push them out, then squeeze and sink.' },
      { label: 'Hold a light weight at the chest', detail: 'Hold a light dumbbell or kettlebell at the chest while you sit in the bottom.' },
    ],
    props: ['doorframe', 'wedge'],
    officeFriendly: false,
    barefootOnly: false,
    contraindications: ['knee', 'hipReplacement'],
    dailySafe: true,
    source: ['How a 5-Min Deep Squat Changes the Human Body'],
    evidenceNote:
      'The source says this decompresses your spine. There is no measurement behind that — what is true is that it takes the load off your lower back and makes a deep breath the default, which is what people are actually feeling. Aim for five minutes of squat time across the whole day, not five minutes in one go.',
  },

  {
    id: 'big-toe-extension',
    name: 'Big Toe Extension',
    aka: ['First ray mobilisation', 'Hallux extension', 'Big toe mobility'],
    regions: ['ankles'],
    role: 'main',
    intensity: 1,
    summary:
      'Sitting, hold the foot still in one hand and ease the big toe back towards your shin, then try to lift it on its own.',
    why: 'Textbooks put a healthy big toe at around 65 to 75 degrees of upward bend, though walking needs less. When it bends, it tightens the whole sole of your foot and turns it into a rigid lever to push off. A life in cushioned shoes quietly takes that away. This is the precise, controllable version of toes-tucked kneeling — the one you can still do when your foot is cranky.',
    targets: ['big toe extension', 'first ray', 'plantar fascia'],
    dose: { kind: 'reps', reps: 10, sets: 1, perSide: true, tempoNote: 'Hold the last one for 30 seconds.', secondsPerRep: 3 },
    cues: [
      'Hold the foot still — you are moving the toe, not the whole foot.',
      'Firm pressure, not a wrench.',
      'Now try to lift just the big toe while the others stay down.',
      'Badly is fine at first. It comes back.',
    ],
    shouldFeel: 'A stretch under the big toe and across the ball of the foot.',
    shouldNotFeel: 'A hard, bony stop with pain on top of the joint.',
    regressions: [
      { label: 'Smaller range', detail: 'Ease it back only as far as it goes freely.', props: ['none'] },
      { label: 'Rest the foot on your thigh', detail: 'Takes the effort out of holding it up.', props: ['chair'] },
      { label: 'Passive only', detail: 'Skip the active lift — most people cannot do it at first.', props: ['none'] },
    ],
    progressions: [
      { label: 'Loaded', detail: 'Big toe up against a wall or a book, heel down, lean forward.' },
      { label: 'Hold longer', detail: 'Build the passive hold towards 60 seconds.' },
    ],
    props: ['chair'],
    officeFriendly: true,
    barefootOnly: true,
    contraindications: ['bigToe'],
    dailySafe: true,
    source: ['Give me 5 minutes, I\u2019ll Fix your Hips', 'Kadour Ziani'],
    evidenceNote: 'A hard bony stop with pain on top of the joint is not something to push through. That pattern suggests the joint itself is restricted rather than the soft tissue, and it is worth getting looked at. Nobody has tested whether stretching a healthy big toe changes how you walk or run, so treat this as range you are re-owning, not a fix.',
  },

  {
    id: 'plantar-fascia-stretch',
    name: 'Plantar Fascia Stretch',
    regions: ['ankles'],
    role: 'main',
    intensity: 1,
    summary:
      'Sitting, cross one ankle over the opposite knee and pull your toes back until the cord in your arch stands out.',
    why: 'The one foot item with a proper trial behind it. For heel pain that had lasted months, it did better than calf stretching at 8 weeks. Two years on the groups were no different, because everyone had switched to this stretch after week 8, and nine in ten of those who replied were satisfied. It is also the safe substitute for toes-tucked kneeling if your heel is sore.',
    targets: ['plantar aponeurosis'],
    dose: { kind: 'reps', reps: 10, sets: 1, perSide: true, tempoNote: '10 seconds each.', secondsPerRep: 10 },
    cues: [
      'Cross the ankle onto the opposite knee.',
      'Fingers across the base of all the toes, pull back.',
      'You should be able to feel the cord in the arch with your other hand.',
    ],
    shouldFeel: 'A distinct pull along the sole, from heel to toes.',
    shouldNotFeel: 'A sharp stab at the heel bone.',
    regressions: [
      { label: 'Pull less far', detail: 'Short of the full stretch.', props: ['none'] },
      { label: 'Use a towel', detail: 'Around the forefoot, if you cannot reach.', props: ['towel'] },
    ],
    progressions: [
      { label: 'Roll the arch first', detail: 'A ball under the foot before stretching.' },
      { label: 'Progress to toes-tucked kneeling', detail: 'Once you are symptom-free.' },
    ],
    props: ['chair'],
    officeFriendly: true,
    barefootOnly: true,
    contraindications: [],
    dailySafe: true,
    source: ['Added — the evidence-backed plantar item'],
    evidenceNote: 'If you have heel pain, do one set before your first steps of the morning. That timing is part of the protocol. In the 2003 trial (82 people with heel pain for about ten months or more) the stretch beat calf stretching at 8 weeks, but both groups also wore soft insoles and took a short course of an anti-inflammatory. At two years the groups were no different, because the calf-stretch group had switched to this stretch, so the follow-up shows people did well, not that this stretch is better.',
  },

  // ─────────────────────────────────────────────────────── BACK/SPINE ──

  {
    id: 'cat-cow',
    name: 'Cat-Cow',
    regions: ['back'],
    role: 'opener',
    intensity: 1,
    summary: 'On hands and knees, alternately round and arch your spine, breathing with the movement.',
    why: 'The cheapest way to visit both ends of your spine’s range without any load. You spend your training sessions braced rigid and your working hours at one fixed angle — this is pure variety, which is the thing that actually helps.',
    targets: ['lumbar flexion', 'lumbar extension', 'thoracic extension'],
    dose: { kind: 'reps', reps: 8, sets: 1, perSide: false, tempoNote: '4s per direction.', secondsPerRep: 8 },
    cues: [
      'Breathe out as you round, in as you arch.',
      'Move slowly enough to feel each segment.',
      'Comfortable range, not maximum.',
    ],
    shouldFeel: 'A broad, easy wave through the back.',
    shouldNotFeel: 'Pinching in the lower back at the arch end — reduce the arch rather than pushing through.',
    regressions: [
      { label: 'Seated', detail: 'On a chair, hands on knees.', props: ['chair'] },
      { label: 'Standing', detail: 'Hands on a wall or the desk edge.', props: ['wall'] },
      { label: 'Forearms down', detail: 'On a cushion, if your wrists complain.', props: ['cushion'] },
    ],
    progressions: [
      { label: 'Segmental', detail: 'Start from the tailbone and roll one vertebra at a time.' },
      { label: 'Add side bending', detail: 'Wag the tail between reps.' },
    ],
    props: ['none'],
    officeFriendly: true,
    barefootOnly: false,
    contraindications: ['wrist'],
    dailySafe: true,
    source: ['Added — spinal variety'],
    evidenceNote:
      'The squat video uses "back rounds like a cat" as a fault. Rounding is not dangerous — here it is a movement you own on purpose.',
  },

  {
    id: 'open-book',
    name: 'Open Book',
    aka: ['Side-lying windmill', 'Thoracic windmill', 'Windmill rotation', 'Side-lying arm sweep'],
    regions: ['back'],
    role: 'opener',
    intensity: 1,
    summary:
      'Side-lying with your knees stacked on a cushion, rotate your top arm and chest open towards the floor behind you.',
    why: 'Rotation is the range most completely absent from a desk worker’s day and from most lifters’ training — deadlift, squat and run are all straight ahead. Blocking the hips with a cushion is what stops your lower back stealing the movement.',
    targets: ['thoracic rotation', 'pectorals'],
    dose: { kind: 'reps', reps: 7, sets: 1, perSide: true, tempoNote: '3s open, 3s back.', secondsPerRep: 6 },
    cues: [
      'Keep the knees glued together and pinned down.',
      'Lead with your ribs and your eyes, not your arm.',
      'Exhale as you open — you will get a few more degrees.',
    ],
    shouldFeel: 'A stretch across the chest, front shoulder and mid-back. A gentle rib pop is harmless.',
    shouldNotFeel: 'Shoulder joint pain, lower back twisting, or nerve symptoms down the arm.',
    regressions: [
      { label: 'Seated', detail: 'Sit in a chair, arms crossed, rotate the ribcage with the knees square.', props: ['chair'] },
      { label: 'Pillow under the head', detail: 'And one between the knees.', props: ['cushion'] },
      { label: 'Smaller range', detail: 'Trace the floor with your hand rather than reaching overhead.', props: ['none'] },
    ],
    progressions: [
      { label: 'Hold the end range', detail: '5 seconds with a long exhale.' },
      { label: 'Half-kneeling version', detail: 'With a dowel across the shoulders.' },
      { label: 'Full windmill sweep', detail: 'Sweep the top arm in a big arc across the body, up past the head and down to the floor behind you.' },
    ],
    props: ['cushion'],
    officeFriendly: true,
    barefootOnly: false,
    contraindications: ['shoulder'],
    dailySafe: true,
    source: ['Added — thoracic rotation'],
  },

  {
    id: 'bird-dog',
    name: 'Bird Dog',
    regions: ['back'],
    role: 'load',
    intensity: 2,
    summary: 'On hands and knees, extend the opposite arm and leg while your torso stays perfectly still.',
    why: 'Back endurance is one of the few things that actually predicts fewer bad back weeks. This trains your torso to stay quiet while your limbs work, which is exactly what carrying, rowing and running demand — at almost no load on the spine.',
    targets: ['core endurance', 'back extensor endurance', 'anti-rotation'],
    dose: { kind: 'reps', reps: 5, sets: 1, perSide: true, tempoNote: '10s holds. Add reps, not longer holds.', secondsPerRep: 12 },
    cues: [
      'Kick the heel straight back, do not lift the foot high.',
      'Keep breathing. Do not hold your breath.',
      'Imagine a glass of water on your lower back.',
      'Long, not high.',
    ],
    shouldFeel: 'Steady work in the glutes, mid-back and sides. A fatigue burn by the last reps.',
    shouldNotFeel: 'Lower back pinching at the top — lower the limbs.',
    regressions: [
      { label: 'Leg only', detail: 'Arm stays down.', props: ['none'] },
      { label: 'Slide the foot', detail: 'Along the floor instead of lifting.', props: ['none'] },
      { label: 'Forearms down', detail: 'On a cushion, if your wrists hurt.', props: ['cushion'] },
    ],
    progressions: [
      { label: 'Draw a square', detail: 'With the extended hand and foot at the end of each hold.' },
      { label: 'Elbow to knee', detail: 'Under the body between reps.' },
    ],
    props: ['none'],
    officeFriendly: false,
    barefootOnly: false,
    contraindications: ['wrist'],
    dailySafe: true,
    source: ['Stuart McGill'],
    evidenceNote:
      'Chosen because it builds back endurance with almost no load on the spine — not because your back is fragile. Backs are robust, and the evidence is clear that treating them as delicate makes people worse, not better.',
  },

  {
    id: 'side-bridge',
    name: 'Side Bridge',
    regions: ['back'],
    role: 'load',
    intensity: 2,
    summary: 'On your side, propped on your elbow, lift your hips so your body is one straight line.',
    why: 'The most spine-sparing way to load the sides of your trunk. It trains the muscles that resist sideways collapse without the compression of side-bending exercises — and left-right differences are common in anyone with a one-sided desk or sport habit.',
    targets: ['lateral core endurance', 'quadratus lumborum', 'obliques'],
    dose: { kind: 'reps', reps: 4, sets: 1, perSide: true, tempoNote: '10s holds.', secondsPerRep: 12 },
    cues: [
      'Push the ground away with your elbow — do not sag into the shoulder.',
      'Hips, shoulders and knees in one line.',
      'Breathe smoothly through the hold.',
    ],
    shouldFeel: 'A burn down the side of your trunk and into the hip.',
    shouldNotFeel: 'Shoulder joint pain, or the lower back cramping.',
    regressions: [
      { label: 'Knees bent', detail: 'Short-lever side bridge. The standard entry point.', props: ['none'] },
      { label: 'Top hand down', detail: 'On the floor in front for support.', props: ['none'] },
      { label: 'Against a wall', detail: 'Standing, forearm on the wall, hips pushed towards it.', props: ['wall'] },
    ],
    progressions: [
      { label: 'Full side plank', detail: 'On your feet.' },
      { label: 'Top leg lift', detail: 'At the top of the hold.' },
    ],
    props: ['none'],
    officeFriendly: false,
    barefootOnly: false,
    contraindications: ['shoulder'],
    dailySafe: true,
    source: ['Stuart McGill'],
  },

  {
    id: 'tspine-extension',
    name: 'Mid-Back Extension',
    regions: ['back'],
    role: 'main',
    intensity: 2,
    summary:
      'Foam roller across your mid-back, hands supporting your head, extend backwards over it at two or three heights.',
    why: 'The highest-yield spine target for a desk worker. Your lower back already lives near the end of its extension range; your mid-back is the bit that has stopped moving. Getting it back also improves your overhead position and your ability to keep your chest up under a bar.',
    targets: ['thoracic extension', 'rib mobility'],
    dose: { kind: 'reps', reps: 6, sets: 2, perSide: false, tempoNote: 'Exhale as you extend.', secondsPerRep: 5 },
    cues: [
      'Support your head with your hands — never pull on your neck.',
      'Exhale as you extend back.',
      'Keep the ribs down and the glutes on the floor so the arch does not migrate into your lower back.',
      'Small range, several spots — not one big backbend.',
    ],
    shouldFeel: 'A satisfying opening across the mid-back. Cracking is harmless.',
    shouldNotFeel: 'Lower back arching or pinching, neck strain, or sharp rib pain.',
    regressions: [
      { label: 'Rolled towel', detail: 'Much gentler than a roller, and you can adjust the thickness.', props: ['towel'] },
      { label: 'Over a chair back', detail: 'Seated, hands behind your head.', props: ['chair'] },
      { label: 'Roller lengthways', detail: 'Lie along it with arms out in a T. Entirely passive.', props: ['roller'] },
    ],
    progressions: [
      { label: 'Hold the end range', detail: '3–5 seconds, driven by the exhale.' },
      { label: 'Weight overhead', detail: 'A light plate during the extension.' },
    ],
    props: ['roller'],
    officeFriendly: true,
    barefootOnly: false,
    contraindications: ['osteoporosis', 'shoulder'],
    dailySafe: true,
    source: ['Added — the better target for desk workers'],
    evidenceNote:
      'Rolling buys a temporary window of extra range. It does not release fascia or break up adhesions — so use the window straight away with an active drill, or it fades.',
  },

  {
    id: 'childs-pose',
    name: 'Child’s Pose with Side Reach',
    regions: ['back'],
    role: 'rest',
    intensity: 1,
    summary:
      'Kneel and sit your hips back towards your heels with your arms long in front, then walk your hands to one side.',
    why: 'Two jobs. It is a genuinely calming position where you can breathe into the back of your ribs — and it is deliberate, unloaded rounding of the spine. If you have spent a decade being told that rounding is dangerous, this is the item that quietly proves otherwise.',
    targets: ['lumbar flexion', 'lats', 'quadratus lumborum'],
    dose: { kind: 'hold', seconds: 45, sets: 1, perSide: false },
    cues: [
      'Breathe into your back ribs and feel them widen.',
      'Let the hips sink. Do not pull.',
      'Long slow exhale, twice as long as the inhale.',
    ],
    shouldFeel: 'A broad stretch in the lower back, lats and outer hips. Calming.',
    shouldNotFeel: 'Knee pain — prop it. Groin pinching, or numb feet.',
    regressions: [
      { label: 'Cushion behind the knees', detail: 'Between calf and thigh, to reduce the knee bend.', props: ['cushion'] },
      { label: 'Knees wide', detail: 'Big toes together, to give your belly room.', props: ['none'] },
      { label: 'Seated fold', detail: 'Fold forward over your thighs in a chair, arms hanging.', props: ['chair'] },
    ],
    progressions: [
      { label: 'Thread the needle', detail: 'Add rotation from the same position.' },
      { label: 'Extended puppy', detail: 'Hips higher, chest sinking, for more mid-back.' },
    ],
    props: ['cushion'],
    officeFriendly: true,
    barefootOnly: false,
    contraindications: ['knee'],
    dailySafe: true,
    source: ['Added — down-regulation'],
  },

  {
    id: 'supine-breathing',
    name: 'Legs-Up Breathing',
    aka: ['Constructive rest', 'Supine 90/90'],
    regions: ['back'],
    role: 'rest',
    intensity: 1,
    summary:
      'Lie on your back with your calves resting on a chair seat, hands on your lower ribs, breathing slowly out through the mouth.',
    why: 'This is the one position where the unloading idea genuinely holds up — lying down measurably takes pressure off your spine in a way a squat does not. For anyone who deadlifts and then sits in meetings, the real product here is the down-shift out of a braced, gripped-up trunk.',
    targets: ['diaphragmatic breathing', 'rib mobility', 'spinal unloading'],
    dose: { kind: 'hold', seconds: 90, sets: 1, perSide: false },
    cues: [
      'Nose in, mouth out. Exhale longer than you inhale.',
      'Fill the sides and back of your ribs, not your chest.',
      'Let the ribs drop at the end of the exhale.',
      'Jaw and shoulders soft.',
    ],
    shouldFeel: 'Ribs expanding sideways, your back settling into the floor, calm and slightly heavy.',
    shouldNotFeel:
      'Light-headed — that means you are over-breathing. Slow down and breathe less, not more.',
    regressions: [
      { label: 'Knees bent, feet on the floor', detail: 'No chair needed.', props: ['none'] },
      { label: 'Book under the head', detail: 'If your chin tips up.', props: ['none'] },
    ],
    progressions: [
      { label: 'Longer exhale', detail: '4 seconds in, 6–8 seconds out.' },
      { label: 'Squeeze a cushion', detail: 'Lightly between the knees on the exhale.' },
    ],
    props: ['chair'],
    officeFriendly: false,
    barefootOnly: false,
    contraindications: [],
    dailySafe: true,
    source: ['Added — the honest version of "decompression"'],
  },

  {
    id: 'ground-time',
    name: 'Ground Time',
    regions: ['hips', 'back', 'fullBody'],
    role: 'rest',
    intensity: 1,
    summary:
      'Sit on the floor — cross-legged, long, kneeling, shin box — and change position whenever you get uncomfortable.',
    why: 'The whole philosophy in one item, though the mechanism is not the romantic one. The floor works because it is uncomfortable enough that you shift every few minutes, and a sofa is not. Changing position often is the part with real evidence behind it.',
    targets: ['hip rotation', 'hip flexion', 'upright sitting endurance', 'postural variety'],
    dose: { kind: 'hold', seconds: 60, sets: 2, perSide: false },
    cues: [
      'Sit on a cushion until you can sit tall without effort.',
      'Change position the moment it gets uncomfortable. That is the point.',
      'Grow tall out of the hips, do not brace your back.',
      'Alternate which leg is in front every time.',
    ],
    shouldFeel: 'A stretch in the outer hips, groin and inner thighs. Some honest postural fatigue.',
    shouldNotFeel: 'Pins and needles in the feet, or lower back ache — get the cushion higher.',
    regressions: [
      { label: 'Sit on a cushion', detail: 'Raise the hips so the pelvis can tip forward.', props: ['cushion', 'block'] },
      { label: 'Back against the sofa', detail: 'Let it support you.', props: ['wall'] },
      { label: 'Cushions under the knees', detail: 'When cross-legged.', props: ['cushion'] },
    ],
    progressions: [
      { label: 'Lower the cushion', detail: 'Over weeks.' },
      { label: 'Get up without hands', detail: 'The real-world test.' },
    ],
    props: ['cushion'],
    officeFriendly: false,
    barefootOnly: false,
    contraindications: [],
    dailySafe: true,
    source: ['Give me 5 minutes, I’ll Fix your Hips', 'Katy Bowman'],
    evidenceNote:
      'Katy Bowman’s orca analogy — captive whales’ fins collapse without the ocean’s forces — is a metaphor, not a study. The real finding is that people who rest in squatting and kneeling postures keep meaningful muscle activity going, where a chair drops it to almost nothing.',
  },
];

/**
 * The whole library: the hand-written core, then the sets imported from research.
 * Order here is only the default order - every screen sorts for itself.
 */
export const EXERCISES: Exercise[] = [...CORE, ...HIPS, ...COSSACK, ...HAMSTRINGS, ...ANKLES, ...BACK, ...STRENGTHSIDE];

/** Fast lookup by id, for history rendering and deep links. */
export const EXERCISES_BY_ID: ReadonlyMap<string, Exercise> = new Map(
  EXERCISES.map((exercise) => [exercise.id, exercise]),
);

export function getExercise(id: string): Exercise | undefined {
  return EXERCISES_BY_ID.get(id);
}
