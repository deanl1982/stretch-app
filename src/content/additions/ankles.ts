import type { Exercise } from '../types.ts';

/**
 * ankles: imported from web research, then reviewed by hand. This file is the source of
 * truth now - edit it freely. The research briefs' review-only fields (pose hints, URLs,
 * evidence grades) were stripped on import.
 *
 * Same editorial rule as the core library: where a source offered a mechanism, we state a
 * feeling and a behaviour instead, and `evidenceNote` corrects any claim that did not survive
 * checking. Evidence for most stretching is weak; the notes say so where it matters.
 */
export const ANKLES: Exercise[] = [
  {
    "id": "wall-big-toe-stretch",
    "name": "Wall Big Toe Stretch",
    "aka": [
      "Toe-to-wall stretch",
      "Standing big toe stretch",
      "Weight-bearing hallux extension"
    ],
    "regions": [
      "ankles"
    ],
    "role": "main",
    "intensity": 2,
    "summary": "Stand facing a wall with your big toe pressed up the wall and your heel on the floor, then lean in.",
    "why": "Once you can ease your big toe back with your hand, this is the next step up: the same joint, but with your bodyweight doing the work, which is what your foot actually asks of it every time you push off. It is the standing cousin of the seated pull, and it takes a minute at a kitchen wall.",
    "targets": [
      "big toe extension",
      "first MTP joint",
      "plantar fascia",
      "toe flexors"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 20,
      "sets": 2,
      "perSide": true
    },
    "cues": [
      "Toes up the wall, the ball of the foot on the floor at the base of it, heel down.",
      "Lean your hips towards the wall until you feel it under the big toe. Six out of ten, no more.",
      "Keep the big toe pointing straight up the wall, not rolling to one side.",
      "Breathe out and let the toe stay long."
    ],
    "shouldFeel": "A stretch under the big toe and along the sole of the foot, sometimes running up into the calf.",
    "shouldNotFeel": "A hard, pinching stop on top of the big toe joint, or a sharp pain under the ball of the foot.",
    "regressions": [
      {
        "label": "Stand further back",
        "detail": "Less lean, less load. Take your hands to the wall for balance.",
        "props": [
          "wall"
        ]
      },
      {
        "label": "Do the seated pull instead",
        "detail": "Ankle on the opposite knee, ease the big toe back with your hand.",
        "props": [
          "chair"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Lift the heel",
        "detail": "Once heel-down is easy, raise the heel a few centimetres for 3 to 5 seconds and lower it. Ten times."
      },
      {
        "label": "Rear-foot big toe lunge",
        "detail": "Same joint, split stance, more bodyweight through it."
      }
    ],
    "props": [
      "wall"
    ],
    "officeFriendly": false,
    "barefootOnly": true,
    "contraindications": [
      "bigToe",
      "plantarFascia"
    ],
    "dailySafe": true,
    "maxHoldSeconds": 30,
    "source": [
      "Accelerate Physical Therapy (toe-to-wall stretch)",
      "Runners Connect"
    ],
    "evidenceNote": "Nobody has tested whether stretching a healthy big toe changes how you walk or run, so treat this as range you are re-owning, not a fix. The numbers you see quoted are also inconsistent: hallux limitus texts say 65 to 75 degrees of extension is normal, while the windlass literature says walking itself needs about 45 to 55. A hard block with a pinch on top of the joint usually means the joint surface has changed (early hallux limitus or a bone spur) and more stretching will not shift it - see a physio or podiatrist."
  },
  {
    "id": "rear-foot-big-toe-lunge",
    "name": "Rear-Foot Big Toe Lunge",
    "aka": [
      "Split-stance big toe extension",
      "Back-toe lunge"
    ],
    "regions": [
      "ankles"
    ],
    "role": "main",
    "intensity": 2,
    "summary": "In a long split stance, sink down so the back heel lifts and the back big toe bends up under your weight.",
    "why": "This is the toe position of every stride you take: back foot, heel up, big toe bearing weight. Doing it slowly in a lunge lets you own that range under load instead of only stretching it with your hand. It is the closest thing here to walking and running, so it is worth knowing before you ask for more of the big toe.",
    "targets": [
      "big toe extension",
      "first ray",
      "plantar fascia",
      "calf"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 20,
      "sets": 2,
      "perSide": true
    },
    "cues": [
      "Step one foot well back into a long split stance, hands on a wall or a chair.",
      "Let the back heel rise and sink your hips down and forward until the back big toe bends up.",
      "Keep pressure through the big toe. Do not roll onto the outside of the foot.",
      "Stay tall. If you are gripping the floor with your toes, come up."
    ],
    "shouldFeel": "A stretch under the back big toe and across the ball of that foot, and some calf.",
    "shouldNotFeel": "Sharp pain directly under the big toe joint, or a pinch on top of it.",
    "regressions": [
      {
        "label": "Shorter stance",
        "detail": "Back foot closer, less lean, less angle at the toe.",
        "props": [
          "wall"
        ]
      },
      {
        "label": "Wall big toe stretch",
        "detail": "Same joint with far less weight through it.",
        "props": [
          "wall"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Hands off",
        "detail": "Hold the position with your hands on your hips."
      },
      {
        "label": "Add gentle pulses",
        "detail": "Rise and sink an inch for ten slow reps."
      }
    ],
    "props": [
      "wall"
    ],
    "officeFriendly": false,
    "barefootOnly": true,
    "contraindications": [
      "bigToe",
      "plantarFascia"
    ],
    "dailySafe": true,
    "maxHoldSeconds": 30,
    "source": [
      "The [P]rehab Guys (split-stance lunge, big toe extension bias)",
      "Kadour Ziani (rear big toe pressed into the ground)"
    ],
    "evidenceNote": "This one rests on coaching practice, not trials. Two small bones (the sesamoids) sit under the big toe joint and get squeezed as it bends up under load, so a pinpoint ache there means back off, not push through."
  },
  {
    "id": "band-big-toe-extension",
    "name": "Banded Big Toe Extension",
    "aka": [
      "Strap-assisted big toe lift",
      "Resisted hallux extension"
    ],
    "regions": [
      "ankles"
    ],
    "role": "main",
    "intensity": 2,
    "summary": "Sit with a band looped round your big toe and lift the toe against it, then press it down against it.",
    "why": "Stretching gets you range. This is how you make the range yours: the toe has to be able to lift and press under control at the end of its motion, which a hand pull never asks of it. It also makes you use the big toe on its own, which most shod feet forget how to do.",
    "targets": [
      "big toe extension",
      "hallux flexors",
      "first ray",
      "end-range control"
    ],
    "dose": {
      "kind": "reps",
      "reps": 6,
      "sets": 1,
      "perSide": true,
      "tempoNote": "Hold 5s lifting against the band, then 5s pressing down.",
      "secondsPerRep": 10
    },
    "cues": [
      "Sit with your knee bent to about ninety degrees, foot flat.",
      "Loop a light band or strap round the big toe and hold the ends, so it pulls the toe down.",
      "Lift the toe against the band and hold. Then press it down into the band and hold.",
      "Keep the other four toes and the heel still."
    ],
    "shouldFeel": "The toe working at the end of its range, and probably some cramping in the arch on the first few goes.",
    "shouldNotFeel": "A jam or sharp pain in the big toe joint.",
    "regressions": [
      {
        "label": "Lift with no band",
        "detail": "Just the active lift, three-second holds.",
        "props": [
          "chair"
        ]
      },
      {
        "label": "Lighter tension",
        "detail": "Hold the band nearer the foot so it pulls less.",
        "props": [
          "band"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Stand and repeat",
        "detail": "Same lift and press on one leg near a wall."
      },
      {
        "label": "Longer holds",
        "detail": "Build to 7 seconds each way."
      }
    ],
    "props": [
      "band",
      "chair"
    ],
    "officeFriendly": true,
    "barefootOnly": true,
    "contraindications": [
      "bigToe"
    ],
    "dailySafe": true,
    "source": [
      "Z-Health Performance (toe extension with band)"
    ],
    "evidenceNote": "Z-Health say a poor big toe drives knee pain, balance problems and falls. That is an association argument, not something trials have shown by training the toe. What is fair to say is that this is loaded, controlled end-range work, which is the kind of change that tends to hold."
  },
  {
    "id": "sesamoid-mobilisation",
    "name": "Sesamoid Mobilisation",
    "aka": [
      "Sesamoid glide",
      "Big toe joint mobilisation with sesamoid pressure"
    ],
    "regions": [
      "ankles"
    ],
    "role": "main",
    "intensity": 1,
    "summary": "Press gently into the two small bones under the ball of the big toe while easing the toe up and back.",
    "why": "Two pea-sized bones sit in a tendon under the big toe joint and have to slide when the toe bends up. If your toe feels jammed at the top of its range, this is the physio's manual technique for it, done on yourself. It is a treatment for a stiff toe, not something to do for fun.",
    "targets": [
      "first MTP joint",
      "sesamoid glide",
      "flexor hallucis brevis"
    ],
    "dose": {
      "kind": "reps",
      "reps": 10,
      "sets": 2,
      "perSide": true,
      "tempoNote": "3s per slow rep.",
      "secondsPerRep": 3
    },
    "cues": [
      "Sit with your ankle on your opposite knee. Find the two firm bumps under the ball of the big toe joint.",
      "Press up into them lightly with your thumb. This is a gentle press, not digging.",
      "Keep the pressure on and ease the big toe up with the other hand, then back to flat.",
      "Slow, both directions. Stop at a firm block rather than forcing it."
    ],
    "shouldFeel": "A gentle pressure under the joint and a mild stretch as the toe lifts.",
    "shouldNotFeel": "Sharp pinpoint pain right on the small bones, or a bruised soreness that lingers into the next day.",
    "regressions": [
      {
        "label": "Press only",
        "detail": "Skip the toe movement and just glide the thumb across the sesamoids.",
        "props": [
          "chair"
        ]
      },
      {
        "label": "Lighter pressure",
        "detail": "Half the pressure, half the range.",
        "props": [
          "chair"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Add the towel scrunch",
        "detail": "Pair it with towel scrunches, the way the trial did."
      }
    ],
    "props": [
      "chair"
    ],
    "officeFriendly": true,
    "barefootOnly": true,
    "contraindications": [],
    "dailySafe": true,
    "requiresFlag": "bigToe",
    "source": [
      "Shamus et al., JOSPT 2004 (sesamoid mobilisation, flexor hallucis strengthening and gait training)",
      "Runners Connect"
    ],
    "evidenceNote": "The only decent trial (20 people, aged 26 to 43) combined this with flexor strengthening and gait training, so nobody can say what the mobilisation did by itself. A review that grades non-operative hallux rigidus care as weak found just that one good trial, and a 2012 review on the topic that gets cited a lot was later retracted. Offer this only when the toe is stiff. If a sesamoid is sore rather than the joint stiff, that is a different problem and needs assessing."
  },
  {
    "id": "first-ray-glide",
    "name": "First Metatarsal Glide",
    "aka": [
      "First ray glide",
      "Metatarsal rock"
    ],
    "regions": [
      "ankles"
    ],
    "role": "main",
    "intensity": 1,
    "summary": "Hold the inner arch bone still and rock the long bone behind your big toe up and down a few millimetres.",
    "why": "The first ray is the big toe plus the long bone behind it, and that bone is meant to move up and down a little when you load the foot, about six millimetres each way. When it is stuck, the big toe does the job alone. This is the small, gentle joint move a physio would use to check and free it.",
    "targets": [
      "first ray",
      "first metatarsal-cuneiform joint",
      "midfoot"
    ],
    "dose": {
      "kind": "reps",
      "reps": 10,
      "sets": 1,
      "perSide": true,
      "tempoNote": "2s up, 2s down.",
      "secondsPerRep": 4
    },
    "cues": [
      "Sit with your ankle on your opposite knee.",
      "Pinch the inner arch bone (just in front of the bump on the inside of the foot) with one hand to hold it still.",
      "With the other hand, hold the long bone behind the big toe and glide it up towards the top of the foot, then down.",
      "The movement is tiny. Small and slow beats big and forced."
    ],
    "shouldFeel": "A small gliding movement deep in the arch, a bit like a gentle click-free rock.",
    "shouldNotFeel": "Pinching or sharp pain in the joint, or the whole foot twisting.",
    "regressions": [
      {
        "label": "Glide up only",
        "detail": "Just the upward glide, held for 2 seconds.",
        "props": [
          "chair"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Follow with the seated big toe pull",
        "detail": "Do this first, then the big toe extension."
      }
    ],
    "props": [
      "chair"
    ],
    "officeFriendly": true,
    "barefootOnly": true,
    "contraindications": [],
    "dailySafe": true,
    "source": [
      "Physiopedia (First Ray)",
      "Athletic Training and Sports Health Care (first MTP mobilisation)"
    ],
    "evidenceNote": "This is a clinician's technique adapted to self-use, so treat the grip description as a starting point, not a protocol. First ray mobility is measurable, and a stiff first ray is associated with different plantar pressures when walking, but nobody has shown that freeing it by hand changes symptoms or performance."
  },
  {
    "id": "big-and-little-toe-lifts",
    "name": "Big Toe and Little Toe Lifts",
    "aka": [
      "Toe yoga",
      "Toe wave",
      "Piano toes",
      "Toe isolation"
    ],
    "regions": [
      "ankles"
    ],
    "role": "opener",
    "intensity": 1,
    "summary": "Lift only the big toe while the other four stay down, then lift only the four while the big toe stays down.",
    "why": "Most men who have worn stiff shoes for decades cannot do this, which tells you how little the toes are asked to do. It is control, not stretching. Being able to work the big toe on its own is the first thing you need before any of the toe strengthening makes sense.",
    "targets": [
      "big toe extensors",
      "toe extensors",
      "intrinsic foot muscles",
      "motor control"
    ],
    "dose": {
      "kind": "reps",
      "reps": 10,
      "sets": 1,
      "perSide": false,
      "tempoNote": "3s big toe up, then 3s four toes up.",
      "secondsPerRep": 6
    },
    "cues": [
      "Sit with both feet flat. Press the four small toes into the floor and lift only the big toe.",
      "Swap: big toe down, lift only the four small toes.",
      "Keep the ball of the foot on the floor. Do not let the foot roll outwards.",
      "If a toe will not go, lift it with your fingers and try to hold it there."
    ],
    "shouldFeel": "Effort, awkwardness, and probably a cramp in the arch at first. Toes that will not obey.",
    "shouldNotFeel": "Sharp pain in a toe joint, or the shin muscle burning as it takes over.",
    "regressions": [
      {
        "label": "Hand-assisted",
        "detail": "Use a finger to hold the four toes down while you lift the big one.",
        "props": [
          "chair"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Standing",
        "detail": "Same drill on two feet, then one foot near a wall."
      },
      {
        "label": "Toe piano",
        "detail": "Lift all ten toes, then lower them one at a time from the little toe to the big toe."
      }
    ],
    "props": [
      "chair"
    ],
    "officeFriendly": true,
    "barefootOnly": true,
    "contraindications": [],
    "dailySafe": true,
    "source": [
      "Bahe (toe wave)",
      "Feet First Clinic",
      "B3 Physical Therapy",
      "Katy Bowman (Foot Gym)"
    ],
    "evidenceNote": "Reviews of foot-muscle training show small gains in foot strength, balance and function but rate the evidence low to very low, and it did not beat other options for pain. One line you will see repeated, that the big toe is 85 percent of your foot's stability when running, is a marketing figure with no source. Do this as skill practice. No trial has shown that toe control prevents injuries."
  },
  {
    "id": "toe-splay",
    "name": "Toe Splay",
    "aka": [
      "Toe spreading",
      "Toe abduction"
    ],
    "regions": [
      "ankles"
    ],
    "role": "opener",
    "intensity": 1,
    "summary": "Spread all five toes as wide apart as you can without curling or lifting them.",
    "why": "Narrow toe boxes squash the toes together for years. A wide, active forefoot is a better base to push off from, and spreading the toes deliberately is the plain version of getting that back. It takes thirty seconds and you can do it at your desk.",
    "targets": [
      "toe abductors",
      "intrinsic foot muscles",
      "forefoot width"
    ],
    "dose": {
      "kind": "reps",
      "reps": 10,
      "sets": 2,
      "perSide": false,
      "tempoNote": "4s spread, 1s relax.",
      "secondsPerRep": 5
    },
    "cues": [
      "Feet flat, toes long and relaxed.",
      "Spread the toes apart. Do not curl them and do not lift them off the floor.",
      "Hold, then let them go fully before the next one.",
      "Big toe moving one way, little toe the other, if you can."
    ],
    "shouldFeel": "A working sensation across the top and bottom of the forefoot, and possibly a cramp.",
    "shouldNotFeel": "Pain in a toe joint, or the toes pulling up off the floor.",
    "regressions": [
      {
        "label": "Fingers between the toes",
        "detail": "Slide your fingers in between the toes and spread them with your hand.",
        "props": [
          "chair"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Band round the toes",
        "detail": "A light loop of band around all five toes to spread against."
      },
      {
        "label": "Standing",
        "detail": "Same drill on one foot near a wall."
      }
    ],
    "props": [
      "chair"
    ],
    "officeFriendly": true,
    "barefootOnly": true,
    "contraindications": [],
    "dailySafe": true,
    "source": [
      "Bahe",
      "Feet First Clinic",
      "Upstep (hallux rigidus exercises)",
      "Katy Bowman (Whole Body Barefoot)"
    ],
    "evidenceNote": "In a six-week trial of 25 healthy adults, foot strengthening including toe work improved big toe alignment and range whether or not a toe spacer was worn. The evidence is small and low-certainty, so the honest claim is: it improves toe control, and control is a reasonable thing to own."
  },
  {
    "id": "toe-spacer-sit",
    "name": "Toe Spacer Sit",
    "aka": [
      "Toe separators",
      "Toe spreaders",
      "Toe spacers"
    ],
    "regions": [
      "ankles"
    ],
    "role": "rest",
    "intensity": 1,
    "summary": "Sit or stand still with silicone spacers between your toes, starting with a few minutes.",
    "why": "Spacers hold the toes apart passively while you do something else, so it costs no effort. If your forefoot is squashed from years in narrow shoes, this is the low-effort way to start giving it room. Start short. Your toes have spent decades pressed together.",
    "targets": [
      "toe alignment",
      "forefoot width",
      "big toe angle"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 120,
      "sets": 1,
      "perSide": false
    },
    "cues": [
      "Slide the spacers in one gap at a time, from the little toe end.",
      "Sit or stand still. Do not walk in them on the first day.",
      "Start with a few minutes and add 5 to 10 minutes a week.",
      "Take them out if the toes go numb, tingle or ache sharply."
    ],
    "shouldFeel": "A stretch or ache between the toes that settles, like a hand held tight.",
    "shouldNotFeel": "Numbness, tingling, cramping that does not ease, or pain in the big toe joint.",
    "regressions": [
      {
        "label": "Fingers between the toes",
        "detail": "Interlace your fingers with your toes for a minute instead.",
        "props": [
          "chair"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Wear them while you stand",
        "detail": "Build to ten to fifteen minutes on your feet at home."
      },
      {
        "label": "Add toe splay",
        "detail": "Do the spreading drill while wearing them."
      }
    ],
    "props": [
      "chair"
    ],
    "officeFriendly": true,
    "barefootOnly": true,
    "contraindications": [],
    "dailySafe": true,
    "maxHoldSeconds": 900,
    "source": [
      "Katy Bowman / Correct Toes",
      "Tehraninasr et al., Prosthetics and Orthotics International 2008"
    ],
    "evidenceNote": "The evidence is thinner than the marketing. A network meta-analysis found exercise plus a toe separator was likely among the better ways to reduce bunion angle, and a systematic review of 10 studies (9 to 90 people each) found small, low-quality trials. A 2026 trial of 25 healthy adults found spacers added nothing to foot exercises, and exercise alone improved passive big toe range more. Spacers do not reverse a bunion or rebuild an arch. They are a tool for comfort and awareness, and only as good as the shoes you wear afterwards."
  },
  {
    "id": "short-foot",
    "name": "Short Foot",
    "aka": [
      "Short foot exercise",
      "Arch doming",
      "Foot doming",
      "Janda short foot"
    ],
    "regions": [
      "ankles"
    ],
    "role": "opener",
    "intensity": 1,
    "summary": "Slide the ball of your foot back towards your heel without curling your toes, so the arch lifts.",
    "why": "The small muscles inside your arch mostly sit idle in cushioned shoes. This is the one movement most often used to wake them up, and it takes no equipment. It is the skill that the standing and single-leg versions are built on.",
    "targets": [
      "intrinsic foot muscles",
      "abductor hallucis",
      "medial arch"
    ],
    "dose": {
      "kind": "reps",
      "reps": 10,
      "sets": 2,
      "perSide": true,
      "tempoNote": "Hold the dome 6s, relax 2s.",
      "secondsPerRep": 8
    },
    "cues": [
      "Sit with your feet flat and your toes long and relaxed.",
      "Draw the ball of the foot back towards the heel without curling the toes.",
      "The arch lifts and the foot gets shorter. The big toe stays on the floor.",
      "Put a finger on the inside of the arch. You should feel a muscle firm up."
    ],
    "shouldFeel": "A small firming along the inside of the arch and a visibly shorter foot.",
    "shouldNotFeel": "Toes curling or gripping, cramp in the toes, or the calf switching on.",
    "regressions": [
      {
        "label": "Fingers guide it",
        "detail": "Use your hand to slide the ball of the foot back the first few times.",
        "props": [
          "chair"
        ]
      },
      {
        "label": "Halve the range",
        "detail": "A smaller dome held longer.",
        "props": [
          "chair"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Stand",
        "detail": "Two feet, then one foot near a wall."
      },
      {
        "label": "Longer hold",
        "detail": "Build to 30 seconds."
      }
    ],
    "props": [
      "chair"
    ],
    "officeFriendly": true,
    "barefootOnly": true,
    "contraindications": [],
    "dailySafe": true,
    "source": [
      "Vladimir Janda",
      "Damien Howell PT",
      "Patrick Ward",
      "Podiapaedia"
    ],
    "evidenceNote": "This is the best-studied foot exercise here, and it still has thin support. A review and meta-analysis found intrinsic foot training modestly lowered navicular drop and improved balance, strength and disability scores, but the certainty was low to very low and it was no better for pain. Research tying arch height to muscle strength is weak, so the popular claim that it fixes flat feet is not supported. Short foot works the intrinsic muscles more than toe curling does (an EMG study), which is the good reason to prefer it."
  },
  {
    "id": "single-leg-short-foot",
    "name": "Single-Leg Short Foot",
    "aka": [
      "Standing short foot",
      "Short foot balance"
    ],
    "regions": [
      "ankles"
    ],
    "role": "main",
    "intensity": 2,
    "summary": "Hold the short-foot dome while you stand on one leg.",
    "why": "Doming the arch sitting down is easy. Doing it under bodyweight while your ankle wobbles is where the foot has to work as a stabiliser, which is the point. This is the version that transfers to standing and walking.",
    "targets": [
      "intrinsic foot muscles",
      "medial arch",
      "single-leg balance"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 20,
      "sets": 2,
      "perSide": true
    },
    "cues": [
      "Stand next to a wall. Find the short foot on two feet first.",
      "Shift onto one foot and keep the dome. Big toe down, toes long.",
      "Keep the knee soft and over the second toe.",
      "Fingertips on the wall if you need them."
    ],
    "shouldFeel": "The arch muscles working steadily and small corrections through the ankle.",
    "shouldNotFeel": "Toes gripping the floor, or the arch collapsing inwards.",
    "regressions": [
      {
        "label": "Two feet",
        "detail": "Stay on both feet, weight on the working one.",
        "props": [
          "wall"
        ]
      },
      {
        "label": "Toe touch on the other foot",
        "detail": "Other foot lightly touching the floor beside you.",
        "props": [
          "wall"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Eyes closed",
        "detail": "Only when the wall is not needed."
      },
      {
        "label": "Add a hinge",
        "detail": "Slow single-leg hinge while keeping the dome."
      }
    ],
    "props": [
      "wall"
    ],
    "officeFriendly": false,
    "barefootOnly": true,
    "contraindications": [
      "balance"
    ],
    "dailySafe": true,
    "source": [
      "Damien Howell PT",
      "Patrick Ward",
      "Podiapaedia"
    ],
    "evidenceNote": "Same caveat as the seated version: low-certainty evidence, no proof it fixes a flat foot. Balance gains in foot-strengthening studies are the more believable outcome."
  },
  {
    "id": "towel-scrunch",
    "name": "Towel Scrunch",
    "aka": [
      "Toe curls",
      "Towel curls",
      "Towel pull"
    ],
    "regions": [
      "ankles"
    ],
    "role": "main",
    "intensity": 1,
    "summary": "Put your toes on a flat towel and scrunch it towards you with your toes.",
    "why": "It is the plain, old-school toe flexor exercise: the muscles that push the toes down into the floor at push-off. It is a familiar item in physio programmes for the big toe and the sole, and anyone can do it on a towel.",
    "targets": [
      "toe flexors",
      "flexor hallucis longus",
      "sole of the foot"
    ],
    "dose": {
      "kind": "reps",
      "reps": 15,
      "sets": 2,
      "perSide": true,
      "tempoNote": "2s scrunch, 1s release.",
      "secondsPerRep": 3
    },
    "cues": [
      "Sit with your heel down and your toes on the near edge of a flat towel.",
      "Curl the toes and drag the towel towards you.",
      "Smooth it out and go again. Keep the heel planted.",
      "Go slowly. Fast scrunching is just flapping."
    ],
    "shouldFeel": "The toe flexors and the sole working, and cramp in the arch on the first few sets.",
    "shouldNotFeel": "Sharp pain under a toe joint, or the shin doing the work.",
    "regressions": [
      {
        "label": "Thin towel or a sheet",
        "detail": "Less friction, easier pull.",
        "props": [
          "towel"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Weight the towel",
        "detail": "Put a light book or a tin on the far end of the towel."
      }
    ],
    "props": [
      "towel",
      "chair"
    ],
    "officeFriendly": true,
    "barefootOnly": true,
    "contraindications": [],
    "dailySafe": true,
    "source": [
      "Runners Connect",
      "Feet First Clinic",
      "Upstep",
      "Shamus et al., JOSPT 2004"
    ],
    "evidenceNote": "It is the flexor strengthening half of the only decent trial for a stiff big toe (20 people, combined with sesamoid mobilisation and gait training), so nobody can isolate what it does. An EMG study found short foot works the arch muscles more than toe curling, which mainly recruits the longer muscles from the calf. Fine as toe flexor work. Not a good way to strengthen the arch."
  },
  {
    "id": "big-toe-press",
    "name": "Big Toe Press",
    "aka": [
      "Toe push",
      "Hallux press-down"
    ],
    "regions": [
      "ankles"
    ],
    "role": "main",
    "intensity": 1,
    "summary": "Press the big toe flat and hard into the floor for five seconds without gripping with the others.",
    "why": "This is the strength side of the big toe: the muscle that bends the toe down into the floor when you push off. Training it flat and controlled is safer and more useful than scrunching, and it is easier to learn than it sounds.",
    "targets": [
      "flexor hallucis",
      "big toe flexion",
      "first ray"
    ],
    "dose": {
      "kind": "reps",
      "reps": 10,
      "sets": 1,
      "perSide": true,
      "tempoNote": "5s press, 1s release.",
      "secondsPerRep": 6
    },
    "cues": [
      "Sit with your knees bent to ninety degrees and the foot in a neutral position.",
      "Press the big toe firmly and flat into the floor. Think down and forward, not gripping.",
      "Keep the other four toes relaxed and long.",
      "Release fully between each one."
    ],
    "shouldFeel": "Effort under and along the big toe, and a cramp in the arch on the first attempts.",
    "shouldNotFeel": "Sharp pain under the toe joint, or all five toes clenching.",
    "regressions": [
      {
        "label": "Lighter press",
        "detail": "Half effort, three seconds.",
        "props": [
          "chair"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Stand and press",
        "detail": "Same drill on two feet, then one near a wall."
      },
      {
        "label": "Big toe heel raise",
        "detail": "Load it with a calf raise."
      }
    ],
    "props": [
      "chair"
    ],
    "officeFriendly": true,
    "barefootOnly": true,
    "contraindications": [],
    "dailySafe": true,
    "source": [
      "Z-Health Performance (toe push)"
    ],
    "evidenceNote": "This is practitioner coaching, not a tested protocol. Cramping around the third rep is normal and passes. Do not believe the balance and falls claims that come with it."
  },
  {
    "id": "banded-first-ray-press",
    "name": "Banded First-Ray Press",
    "aka": [
      "Peroneus longus strengthening",
      "First ray plantarflexion drill",
      "Banded eversion with big toe press"
    ],
    "regions": [
      "ankles"
    ],
    "role": "main",
    "intensity": 1,
    "summary": "Turn the sole outwards against a band while pressing the base of the big toe down into the floor.",
    "why": "The muscle down the outside of your shin has a tendon that runs under the arch and hooks the first metatarsal, the long bone behind your big toe, pulling it down into the ground. It is what keeps the big toe planted at push-off. This drill trains it specifically.",
    "targets": [
      "peroneus longus",
      "first ray plantarflexion",
      "eversion"
    ],
    "dose": {
      "kind": "reps",
      "reps": 10,
      "sets": 3,
      "perSide": true,
      "tempoNote": "2s out, 2s back.",
      "secondsPerRep": 4
    },
    "cues": [
      "Sit with your knees at ninety degrees. Loop a light band over the foot and hold both ends in the hand on the same side.",
      "Turn the sole outwards while you press the base of the big toe down into the floor.",
      "The heel pivots on the floor. It does not slide.",
      "Come back slowly."
    ],
    "shouldFeel": "Work down the outside of the shin and under the inside of the ball of the foot.",
    "shouldNotFeel": "Cramping in the arch, or the whole leg twisting to cheat the move.",
    "regressions": [
      {
        "label": "No band",
        "detail": "Just the movement, pressing the big toe down while turning the sole out.",
        "props": [
          "chair"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Heavier band",
        "detail": "Only once the movement is clean."
      },
      {
        "label": "Standing balance",
        "detail": "Same press while standing on one leg."
      }
    ],
    "props": [
      "band",
      "chair"
    ],
    "officeFriendly": true,
    "barefootOnly": false,
    "contraindications": [],
    "dailySafe": true,
    "source": [
      "Strengthening of the Peroneus Longus Muscle in Patients With Dorsiflexed First Ray (clinical trial NCT05647616)"
    ],
    "evidenceNote": "A preliminary randomised trial in people with a flexible, raised first ray used exactly this drill (3 sets of 10, three times a week for 4 weeks) and found greater first-ray plantarflexion and less time loading the first metatarsal head when walking. It measured foot pressure, not pain or performance, and the group was people with a specific finding a clinician has to spot. Whether it matters for a healthy man is not known."
  },
  {
    "id": "windlass-check",
    "name": "Windlass Check",
    "aka": [
      "Jack's test drill",
      "Big toe lift arch check",
      "Standing hallux lift"
    ],
    "regions": [
      "ankles"
    ],
    "role": "opener",
    "intensity": 1,
    "summary": "Stand and lift your big toe, first with your hand and then on its own, and watch the arch.",
    "why": "Bend the big toe up and the tissue under the foot tightens and the arch lifts. That is the windlass, and it is what makes your foot stiff enough to push off. This gives you a look at whether your foot does it. It also shows you, quickly, which big toe is the stiff one.",
    "targets": [
      "windlass mechanism",
      "plantar fascia",
      "big toe extension",
      "medial arch"
    ],
    "dose": {
      "kind": "reps",
      "reps": 5,
      "sets": 1,
      "perSide": true,
      "tempoNote": "3s up, 2s down.",
      "secondsPerRep": 5
    },
    "cues": [
      "Stand barefoot with your weight even on both feet.",
      "Reach down and slowly lift only the big toe with your fingers. Watch the inside arch. It should rise and the foot should shorten.",
      "Now lift the big toe by itself, with no help.",
      "Compare left and right. Notice the difference."
    ],
    "shouldFeel": "A gentle pull under the arch as the toe rises. A small lift in the arch.",
    "shouldNotFeel": "Heel pain, or a jam at the big toe joint.",
    "regressions": [
      {
        "label": "Sit to do it",
        "detail": "Same lift with the foot flat while seated.",
        "props": [
          "chair"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Add a heel raise",
        "detail": "Lift the heel as the toe lifts, slowly."
      }
    ],
    "props": [
      "none"
    ],
    "officeFriendly": true,
    "barefootOnly": true,
    "contraindications": [
      "plantarFascia",
      "bigToe"
    ],
    "dailySafe": true,
    "source": [
      "Rayner & Smale (windlass anatomy)",
      "Jack's test (flexible flatfoot check)"
    ],
    "evidenceNote": "The mechanism is real and well described, and it is the basis of the clinical windlass test where pain at the heel on forced toe lift points to the plantar fascia. This is a look, not a diagnosis. If the arch barely moves, that tells you something but not what to do about it, and nothing shows that improving how the arch responds to a toe lift changes symptoms."
  },
  {
    "id": "big-toe-heel-raise",
    "name": "Big Toe Heel Raise",
    "aka": [
      "Towel-roll heel raise",
      "Hallux-loaded calf raise"
    ],
    "regions": [
      "ankles"
    ],
    "role": "main",
    "intensity": 2,
    "summary": "Do a slow calf raise with a rolled towel under your big toe, pushing through the big toe as you rise.",
    "why": "A normal calf raise lets you roll onto the outside of the foot and skip the big toe entirely. This one puts the big toe where the push-off happens and makes you use it, with the toe held in the extended position it sees when you walk.",
    "targets": [
      "big toe extension under load",
      "calf",
      "flexor hallucis",
      "first ray"
    ],
    "dose": {
      "kind": "reps",
      "reps": 10,
      "sets": 2,
      "perSide": true,
      "tempoNote": "2s up, 2s down.",
      "secondsPerRep": 4
    },
    "cues": [
      "Roll a small towel and place it under the base of the big toe. Hold a wall.",
      "Rise slowly, pushing through the big toe. Do not roll out to the little toe.",
      "Pause at the top, then lower for two seconds.",
      "Keep the ankle straight. No wobble to the outside."
    ],
    "shouldFeel": "The calf working and the big toe bearing weight, bent up over the towel.",
    "shouldNotFeel": "Sharp pain under the big toe joint or a pinch on top of it.",
    "regressions": [
      {
        "label": "Both feet",
        "detail": "Do it on two feet with a wall for balance.",
        "props": [
          "towel",
          "wall"
        ]
      },
      {
        "label": "Thinner towel",
        "detail": "Less toe extension, less load.",
        "props": [
          "towel",
          "wall"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Single leg",
        "detail": "All your weight on one side."
      },
      {
        "label": "Thicker towel",
        "detail": "More angle at the big toe, more of a challenge."
      }
    ],
    "props": [
      "towel",
      "wall"
    ],
    "officeFriendly": false,
    "barefootOnly": true,
    "contraindications": [
      "bigToe"
    ],
    "dailySafe": true,
    "source": [
      "Bahe (calf raise with big toe elevated)",
      "The [P]rehab Guys (heel raise, big toe extension)"
    ],
    "evidenceNote": "This is coaching and clinic practice, not a trialled protocol. It is also not the same as the plantar fascia strength protocol, which puts the towel under all five toes and is heavy and slow."
  },
  {
    "id": "top-of-foot-stretch",
    "name": "Top-of-Foot Stretch",
    "aka": [
      "Toe extensor stretch",
      "Foot plantarflexion stretch",
      "Toes-down stretch"
    ],
    "regions": [
      "ankles"
    ],
    "role": "main",
    "intensity": 1,
    "summary": "Stand with the top of one foot on the floor behind you, toenails down, and press it gently into the floor.",
    "why": "Seiza needs your ankles and the tops of your feet to point downwards, and they rarely do after a life in shoes. This is the standing way in, and it works when kneeling is off the table, like a sore knee. It also stretches the front of the ankle and the top of the toes, which nothing else here does.",
    "targets": [
      "ankle plantarflexion",
      "toe extensors",
      "front of the ankle"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 20,
      "sets": 2,
      "perSide": true
    },
    "cues": [
      "Stand with a hand on a wall. Put the top of one foot on the floor behind you, toenails down.",
      "Bend the standing knee a little and press the foot into the floor until you feel it across the top.",
      "Keep the ankle in line. Do not let the foot roll to the outside.",
      "Breathe and keep it under a six out of ten."
    ],
    "shouldFeel": "A stretch across the top of the foot, the front of the ankle and the toes.",
    "shouldNotFeel": "A sharp pinch at the front of the ankle, or cramp in the arch.",
    "regressions": [
      {
        "label": "Sit and press",
        "detail": "Ankle crossed over the knee, gently point the foot down with your hand.",
        "props": [
          "chair"
        ]
      },
      {
        "label": "Less weight",
        "detail": "Keep most of your weight on the standing leg.",
        "props": [
          "wall"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Kneel",
        "detail": "Move to seiza when it feels easy."
      }
    ],
    "props": [
      "wall"
    ],
    "officeFriendly": false,
    "barefootOnly": true,
    "contraindications": [],
    "dailySafe": true,
    "maxHoldSeconds": 30,
    "source": [
      "Bahe (extensor stretch)",
      "Katy Bowman (top-of-foot stretch)"
    ],
    "evidenceNote": "This is coaching practice. Sock brands and some foot-fix books say it fixes foot pain; there is no trial behind that. What it does is give you the plantarflexion range the kneeling positions ask for."
  },
  {
    "id": "banded-ankle-mobilisation",
    "name": "Banded Ankle Mobilisation",
    "aka": [
      "Banded ankle distraction",
      "Band-assisted ankle dorsiflexion",
      "Posterior talar glide with band"
    ],
    "regions": [
      "ankles"
    ],
    "role": "main",
    "intensity": 2,
    "summary": "A band pulls the ankle bone back and down while you drive your knee forward over the foot.",
    "why": "The knee-to-wall drill stretches the calf. When the ankle is stopped by something deeper, at the joint itself, a band that pulls the ankle bone backwards is a way to work on that. It is a mobilisation borrowed from physiotherapy, and it is one of the few ankle tools that can make a stubborn ankle feel different within a few minutes.",
    "targets": [
      "ankle dorsiflexion",
      "posterior talar glide",
      "ankle joint"
    ],
    "dose": {
      "kind": "reps",
      "reps": 10,
      "sets": 1,
      "perSide": true,
      "tempoNote": "2s in, 5s hold at the end, 1s back.",
      "secondsPerRep": 8
    },
    "cues": [
      "Anchor a band low behind you and loop it just below the ankle crease, over the front of the ankle bone. It should pull down and back, not up the shin.",
      "Put the foot on a low step, below knee height, and drive the knee forward over the second toe.",
      "Take some weight off the front foot so the joint can glide. Heel stays down, arch stays up.",
      "Hold the end range for five seconds, then come back."
    ],
    "shouldFeel": "A stretch at the ankle joint and the calf, with a sense of the joint sliding rather than the calf pulling.",
    "shouldNotFeel": "A hard pinch at the front of the ankle, tingling in the foot, or the band cutting into the skin.",
    "regressions": [
      {
        "label": "Less pull",
        "detail": "A lighter band or a longer loop.",
        "props": [
          "band",
          "step"
        ]
      },
      {
        "label": "Knee-to-wall drill",
        "detail": "The plain version, with no band.",
        "props": [
          "wall"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Longer holds",
        "detail": "Five to ten holds of 30 seconds each, about two minutes of total time."
      },
      {
        "label": "Knee out",
        "detail": "Drive the knee to the outside of the foot, like the knees-out position of a deep squat."
      }
    ],
    "props": [
      "band",
      "step",
      "doorframe"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [],
    "dailySafe": true,
    "source": [
      "Kelly Starrett / The Ready State (banded ankle distraction)",
      "Mission MVMT"
    ],
    "evidenceNote": "The physiotherapy version of this, mobilisation with movement, has meta-analyses showing modest, short-term gains in dorsiflexion in people with ankle sprains or chronic ankle instability. Small studies of band flossing report quick, short-term gains. What is not supported is the explanation you often hear that a band releases the ankle capsule or fixes a stuck bone. If your ankle stops with a hard pinch at the front rather than a stretch behind, that can be a bony block, such as a spur, and no amount of banding will move it."
  },
  {
    "id": "ankle-cars",
    "name": "Ankle CARs",
    "aka": [
      "Ankle circles",
      "Controlled articular rotations for the ankle"
    ],
    "regions": [
      "ankles"
    ],
    "role": "opener",
    "intensity": 1,
    "summary": "Draw the biggest, slowest circle you can with your foot, moving only at the ankle.",
    "why": "It is a way to check the whole ankle in every direction in about a minute, and to warm it up without loading it. If one direction sticks or jerks, you have found something to work on. It is a cold-start move that fits before a run or a lift.",
    "targets": [
      "ankle range in all directions",
      "inversion",
      "eversion",
      "dorsiflexion",
      "plantarflexion"
    ],
    "dose": {
      "kind": "reps",
      "reps": 10,
      "sets": 1,
      "perSide": true,
      "tempoNote": "Five slow circles each way, about 6s each.",
      "secondsPerRep": 6
    },
    "cues": [
      "Sit with your ankle resting on your opposite knee, or with the foot lifted off the floor.",
      "Hold the shin still with one hand. Only the ankle moves.",
      "Draw the biggest slow circle you can, out to the edge of your range in every direction, with tension all the way round.",
      "Go five each way. Smooth. No jerks."
    ],
    "shouldFeel": "Gentle work around the ankle and maybe a sticky spot in one direction.",
    "shouldNotFeel": "Pain, or clicking that hurts.",
    "regressions": [
      {
        "label": "Smaller circles",
        "detail": "Stay inside the comfortable range.",
        "props": [
          "chair"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Stand on one leg",
        "detail": "Do it with the foot off the ground and the other leg holding the balance."
      }
    ],
    "props": [
      "chair"
    ],
    "officeFriendly": true,
    "barefootOnly": false,
    "contraindications": [],
    "dailySafe": true,
    "source": [
      "Functional Range Conditioning (Dr Andreo Spina)",
      "ACE Fitness"
    ],
    "evidenceNote": "Peer-reviewed evidence for this technique is limited. The idea that circles lubricate the joints with synovial fluid is repeated everywhere and has no measurement behind it. Treat it as a low-risk way to warm up and look at your ankle."
  },
  {
    "id": "ankle-alphabet",
    "name": "Ankle Alphabet",
    "aka": [
      "Ankle ABCs",
      "Alphabet exercise"
    ],
    "regions": [
      "ankles"
    ],
    "role": "opener",
    "intensity": 1,
    "summary": "Draw the letters of the alphabet in the air with your big toe, moving only the ankle.",
    "why": "The physio's standard first exercise for a stiff or sprained ankle: easy, precise and takes the ankle in all directions. If you sprained your ankle years ago and it has never felt quite right, this shows you which direction is the weak one.",
    "targets": [
      "ankle range in all directions",
      "small ankle stabilisers",
      "ankle control"
    ],
    "dose": {
      "kind": "reps",
      "reps": 2,
      "sets": 1,
      "perSide": true,
      "tempoNote": "One full A to Z takes about 40 seconds.",
      "secondsPerRep": 40
    },
    "cues": [
      "Sit with the foot off the floor and imagine your big toe is a pen.",
      "Write A to Z in capital letters, small and slow.",
      "Move from the ankle. The knee and hip stay quiet.",
      "Go through the whole alphabet twice."
    ],
    "shouldFeel": "Small, precise muscle work around the ankle.",
    "shouldNotFeel": "Sharp pain in a particular direction.",
    "regressions": [
      {
        "label": "Lower case",
        "detail": "Smaller letters, less range.",
        "props": [
          "chair"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Stand on one leg",
        "detail": "Draw the alphabet on the floor with the toe of the free foot."
      }
    ],
    "props": [
      "chair"
    ],
    "officeFriendly": true,
    "barefootOnly": false,
    "contraindications": [],
    "dailySafe": true,
    "source": [
      "Harvard Health",
      "UMass Memorial Health",
      "Kaiser Permanente"
    ],
    "evidenceNote": "The alphabet is a rehab drill for the first days after a sprain and for waking the ankle up. Harvard Health say it helps balance and prevents falls but give no evidence for that. It is easy and harmless, and not a substitute for balance or strength work."
  },
  {
    "id": "heel-elevated-goblet-squat",
    "name": "Heel-Elevated Goblet Squat",
    "aka": [
      "Goblet squat on plates",
      "Wedged squat",
      "Heels-up goblet squat"
    ],
    "regions": [
      "ankles",
      "hips"
    ],
    "role": "load",
    "intensity": 2,
    "summary": "A goblet squat with your heels on a small wedge or two plates, so you can sit deep now while the ankle catches up.",
    "why": "If your heels come up in a deep squat, raising them lets you practise the full depth today instead of waiting months for the ankle. You get the hip and trunk position you want, and you get a controlled way to lower the wedge over time. It is the honest middle step between a doorframe hold and a flat-footed squat.",
    "targets": [
      "squat depth",
      "ankle dorsiflexion",
      "knee flexion",
      "hip flexion"
    ],
    "dose": {
      "kind": "reps",
      "reps": 8,
      "sets": 2,
      "perSide": false,
      "tempoNote": "3s down, 1s pause, 2s up.",
      "secondsPerRep": 6
    },
    "cues": [
      "Heels on a wedge, a book or two plates. Feet about shoulder width, toes slightly out.",
      "Hold something light at your chest and sit down between your hips, chest tall.",
      "Push the knees out over the little toes and keep the whole foot planted.",
      "Push the floor away to stand."
    ],
    "shouldFeel": "Effort through the thighs and hips and a stretch in the calf at the bottom.",
    "shouldNotFeel": "Pinching at the front of the ankle or hip, or knee pain.",
    "regressions": [
      {
        "label": "Hold a doorframe",
        "detail": "Let your arms take some weight.",
        "props": [
          "doorframe",
          "wedge"
        ]
      },
      {
        "label": "Higher wedge",
        "detail": "More lift, less range needed.",
        "props": [
          "wedge"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Lower the wedge",
        "detail": "One book thickness every couple of weeks."
      },
      {
        "label": "Flat floor",
        "detail": "Drop the wedge entirely and use the deep squat hold."
      }
    ],
    "props": [
      "wedge",
      "weight"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "knee"
    ],
    "dailySafe": true,
    "source": [
      "Dan John (goblet squat)",
      "BarBend"
    ],
    "evidenceNote": "Coaches disagree about heel lifts. Critics say they hide a mobility limit rather than fix it, and they are right that the wedge does not train the ankle. The practical answer is to use it as a bridge while you also do the ankle drills, and to notice whether the wedge is what lets you go deep. If the wedge fixes it, the ankle is your limit. If it does not, look at the hips."
  },
  {
    "id": "heel-walk",
    "name": "Heel Walk",
    "aka": [
      "Toes-up walking",
      "Tibialis walk"
    ],
    "regions": [
      "ankles"
    ],
    "role": "main",
    "intensity": 1,
    "summary": "Walk on your heels with the toes and the ball of the foot lifted, for thirty seconds.",
    "why": "The tibialis raise is loaded and strict. This is the walking version: slower to build strength but easy to do in a hallway, and it trains the shin to hold the foot up while you move, which is the job it does on every step.",
    "targets": [
      "tibialis anterior",
      "active dorsiflexion",
      "dynamic balance"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 30,
      "sets": 3,
      "perSide": false
    },
    "cues": [
      "Stand tall. Pull the toes and the ball of each foot off the floor so you are on your heels.",
      "Take small steps and keep the toes pulled up the whole time.",
      "Walk near a wall or down a hallway, arms out for balance.",
      "Stop when the shins burn or the foot starts to slap."
    ],
    "shouldFeel": "A burn down the front of the shins.",
    "shouldNotFeel": "Pain along the shin bone itself, or a wobble that makes you feel unsafe.",
    "regressions": [
      {
        "label": "Hand on the wall",
        "detail": "Take a fingertip to a wall as you walk.",
        "props": [
          "wall"
        ]
      },
      {
        "label": "Shorter time",
        "detail": "Ten seconds at a time.",
        "props": [
          "none"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Longer",
        "detail": "Build to a full minute."
      },
      {
        "label": "Walk backwards",
        "detail": "On your heels, with a wall beside you."
      }
    ],
    "props": [
      "none"
    ],
    "officeFriendly": true,
    "barefootOnly": false,
    "contraindications": [
      "balance"
    ],
    "dailySafe": true,
    "source": [
      "Kinetic Revolution",
      "StrengthLog",
      "Otago Exercise Programme"
    ],
    "evidenceNote": "It appears in the Otago programme, which reduced falls in older adults, but nobody has isolated the heel walk. The claim that it prevents shin splints is common and unproven. It is a reasonable, cheap way to load the shin."
  },
  {
    "id": "alfredson-heel-drop",
    "name": "Eccentric Heel Drop",
    "aka": [
      "Alfredson protocol",
      "Eccentric calf raise",
      "Straight-knee heel drop"
    ],
    "regions": [
      "ankles"
    ],
    "role": "load",
    "intensity": 3,
    "summary": "Rise on both feet, then lower slowly on one leg off the edge of a step, knee straight.",
    "why": "The calf and Achilles take the load of every step you walk and every jump you make. This is the classic way to load them slowly and hard. For a healthy man it builds calf and tendon capacity for running and lifting. It is also what physios prescribe for a sore Achilles, which is why it comes with a cap.",
    "targets": [
      "gastrocnemius",
      "Achilles tendon",
      "eccentric calf strength"
    ],
    "dose": {
      "kind": "reps",
      "reps": 12,
      "sets": 2,
      "perSide": true,
      "tempoNote": "Rise with both feet, lower 3s on one leg.",
      "secondsPerRep": 4
    },
    "cues": [
      "Forefoot on the edge of a step, a hand on a wall or rail. Rise up on both feet.",
      "Shift onto the working leg and lower the heel slowly, knee straight, until level with the step and no lower.",
      "Push back up with both legs, not the working one.",
      "Start with bodyweight. Add load only when it is easy and pain-free."
    ],
    "shouldFeel": "A deep, working ache through the calf, and some mild tendon discomfort.",
    "shouldNotFeel": "Sharp pain in the Achilles cord, or pain that is worse the next morning.",
    "regressions": [
      {
        "label": "Two legs down",
        "detail": "Lower on both feet together.",
        "props": [
          "step",
          "wall"
        ]
      },
      {
        "label": "Smaller range",
        "detail": "Stop at the step edge instead of below it.",
        "props": [
          "step",
          "wall"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Add a backpack",
        "detail": "Load it gradually."
      },
      {
        "label": "Bent-knee version",
        "detail": "Same drop with a soft knee to shift the load to the soleus."
      }
    ],
    "props": [
      "step",
      "wall"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "achilles"
    ],
    "dailySafe": false,
    "source": [
      "Hakan Alfredson (1998 protocol)",
      "Beyer et al., Am J Sports Med 2015",
      "JOSPT Achilles tendinopathy guidelines (2018, 2024)"
    ],
    "evidenceNote": "Alfredson's original ran 180 heel drops a day (3 sets of 15 straight knee and 3 of 15 bent knee, twice daily) for 12 weeks in people with chronic mid-portion Achilles tendinopathy. You do not need that volume. A 6-week trial of 28 people found do-as-tolerated equal to the full dose, and a 58-person trial found slow heavy calf raises three times a week gave the same results at 12 and 52 weeks with better satisfaction. The guidelines back progressive tendon loading generally, and no version of this is validated for preventing Achilles trouble in healthy people. Cap it at twice a week."
  },
  {
    "id": "bent-knee-heel-drop",
    "name": "Bent-Knee Eccentric Heel Drop",
    "aka": [
      "Soleus heel drop",
      "Alfredson bent-knee",
      "Soleus eccentric"
    ],
    "regions": [
      "ankles"
    ],
    "role": "load",
    "intensity": 3,
    "summary": "The same slow heel drop with the knee bent about 45 degrees, so the deeper calf muscle takes the load.",
    "why": "Bend the knee and the big two-joint calf muscle goes slack, leaving the soleus, the muscle that holds your knees over your toes in a deep squat and absorbs landing. Most calf work is done straight-legged. This is the bent-knee counterpart and it is how Alfredson's protocol treated the deeper calf.",
    "targets": [
      "soleus",
      "Achilles tendon",
      "eccentric calf strength"
    ],
    "dose": {
      "kind": "reps",
      "reps": 12,
      "sets": 2,
      "perSide": true,
      "tempoNote": "Rise with both feet, lower 3s on one leg.",
      "secondsPerRep": 4
    },
    "cues": [
      "Same set-up as the straight-knee drop, knees softly bent at about 45 degrees, like a half squat.",
      "Keep that knee angle fixed the whole way. The ankle does the moving.",
      "Lower slowly to level with the step, then push back up with both legs.",
      "Stop if the tendon gets sharp."
    ],
    "shouldFeel": "A deep, low working ache in the calf and just above the heel.",
    "shouldNotFeel": "Sharp Achilles pain, or a heel that pinches.",
    "regressions": [
      {
        "label": "Two legs down",
        "detail": "Lower on both feet.",
        "props": [
          "step",
          "wall"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Add a backpack",
        "detail": "Load slowly."
      }
    ],
    "props": [
      "step",
      "wall"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "achilles"
    ],
    "dailySafe": false,
    "source": [
      "Hakan Alfredson (1998 protocol)"
    ],
    "evidenceNote": "This is the second half of the same protocol, so the same caveats apply: built for Achilles tendinopathy at very high volume, and not needed at that volume. Cap it at twice a week."
  },
  {
    "id": "single-leg-calf-raise",
    "name": "Slow Single-Leg Calf Raise",
    "aka": [
      "Heavy slow resistance calf raise",
      "Single-leg heel raise"
    ],
    "regions": [
      "ankles"
    ],
    "role": "load",
    "intensity": 3,
    "summary": "Rise up on one foot for three seconds and lower for three, all the way below a step.",
    "why": "Calf strength is what carries you up stairs, out of a squat and through every stride. Slow, heavy, full-range raises are how calf and Achilles capacity is built, and single-leg versions show up weaknesses that two-leg raises hide.",
    "targets": [
      "gastrocnemius",
      "soleus",
      "Achilles tendon",
      "calf strength"
    ],
    "dose": {
      "kind": "reps",
      "reps": 12,
      "sets": 3,
      "perSide": true,
      "tempoNote": "3s up, 3s down.",
      "secondsPerRep": 6
    },
    "cues": [
      "Ball of the foot on the edge of a step, a hand on a wall.",
      "Rise as high as you can and pause for a beat.",
      "Lower for three seconds, all the way below the step.",
      "Repeat with the knee slightly bent to hit the soleus."
    ],
    "shouldFeel": "The calf working, with a burn towards the last reps.",
    "shouldNotFeel": "Sharp pain in the Achilles, or a foot that rolls to the outside.",
    "regressions": [
      {
        "label": "Two feet",
        "detail": "Both feet up, one foot down.",
        "props": [
          "step",
          "wall"
        ]
      },
      {
        "label": "Floor only",
        "detail": "No step, smaller range.",
        "props": [
          "wall"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Add weight",
        "detail": "Hold a dumbbell, or use a backpack."
      },
      {
        "label": "Heavier and fewer",
        "detail": "Sets of 6 to 8 with a heavy load."
      }
    ],
    "props": [
      "step",
      "wall"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "achilles"
    ],
    "dailySafe": false,
    "source": [
      "Beyer et al., Am J Sports Med 2015 (heavy slow resistance)",
      "JOSPT Achilles tendinopathy guideline",
      "Physiopedia Achilles tendinopathy toolkit"
    ],
    "evidenceNote": "The trial evidence is all from people with Achilles tendinopathy: 3 seconds up and 3 down, 6 to 15 reps, 3 sets, 3 days a week, load going heavier. There is no good trial showing it prevents anything in healthy tendons. It is a standard calf strength move, so do it with the same twice-a-week cap as the eccentric drills."
  },
  {
    "id": "seated-soleus-pushup",
    "name": "Seated Soleus Push-Up",
    "aka": [
      "Soleus pushup",
      "SPU",
      "Seated heel raise"
    ],
    "regions": [
      "ankles"
    ],
    "role": "main",
    "intensity": 1,
    "summary": "Sitting, lift your heels with the balls of your feet down, in a steady rhythm, for several minutes.",
    "why": "It is the one calf exercise you can do at a desk or on a sofa for as long as you like, and the soleus is a big, fatigue-resistant muscle that rarely does anything when you sit. It also pumps blood out of the lower leg. It takes no floor, no kit and no time.",
    "targets": [
      "soleus",
      "calf muscle pump"
    ],
    "dose": {
      "kind": "reps",
      "reps": 20,
      "sets": 3,
      "perSide": false,
      "tempoNote": "2s up, 2s down.",
      "secondsPerRep": 4
    },
    "cues": [
      "Sit tall with your knees at about ninety degrees, knees over the heels, feet flat.",
      "Lift both heels with the balls of the feet on the floor. Lower them slowly.",
      "Keep a steady rhythm without bouncing. Some protocols turn the feet out about 45 degrees.",
      "Keep going until the calf feels warm, not painful."
    ],
    "shouldFeel": "A steady, fatiguing work in the lower calf.",
    "shouldNotFeel": "Cramping in the arch, or sharp pain in the calf.",
    "regressions": [
      {
        "label": "Shorter",
        "detail": "Two minutes at a time.",
        "props": [
          "chair"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Add weight",
        "detail": "A light weight resting on the thighs."
      },
      {
        "label": "Longer",
        "detail": "Eight-minute sessions."
      }
    ],
    "props": [
      "chair"
    ],
    "officeFriendly": true,
    "barefootOnly": false,
    "contraindications": [],
    "dailySafe": true,
    "source": [
      "Hamilton, Hamilton and Zderic, iScience 2022"
    ],
    "evidenceNote": "The headlines that this burns fat while you sit come from small studies. Hamilton's lab study of 25 volunteers found a 52 percent smaller glucose rise after a meal. A pilot in 10 people with prediabetes found about a 32 percent smaller rise, without a control group. Both are short-term, lab-based and looked at blood sugar in the hours after eating. Glucose rose higher once the exercise stopped. Nobody has shown long-term benefit or any effect on weight. As an easy calf and circulation exercise, it is fine. It is not a replacement for walking or for real exercise."
  },
  {
    "id": "banded-eversion",
    "name": "Banded Ankle Eversion",
    "aka": [
      "Peroneal raise",
      "Resisted ankle eversion",
      "Outward band pull"
    ],
    "regions": [
      "ankles"
    ],
    "role": "load",
    "intensity": 1,
    "summary": "Loop a band around the forefoot and turn the sole outwards against it.",
    "why": "The peroneal muscles down the outside of the shin are what stop the ankle rolling over when you land on uneven ground. If you have ever sprained an ankle, they are the ones to train. It is a small, controlled move you can do sitting down.",
    "targets": [
      "peroneus longus",
      "peroneus brevis",
      "ankle stability"
    ],
    "dose": {
      "kind": "reps",
      "reps": 10,
      "sets": 2,
      "perSide": true,
      "tempoNote": "2s out, 2s back.",
      "secondsPerRep": 4
    },
    "cues": [
      "Sit with the band looped around the forefoot and held down under the other foot or pulled by a hand.",
      "Turn the sole outwards, keeping the heel still.",
      "Come back slowly, using the muscle, not letting the band whip it.",
      "Leg and knee stay still."
    ],
    "shouldFeel": "Work along the outside of the shin and ankle.",
    "shouldNotFeel": "Sharp pain on the outside of the ankle, or the knee swinging to cheat.",
    "regressions": [
      {
        "label": "No band",
        "detail": "Just the movement, with light pressure from your hand.",
        "props": [
          "chair"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Heavier band",
        "detail": "Only when 10 slow reps are easy."
      },
      {
        "label": "Add inversion",
        "detail": "The opposite direction for the inner ankle and arch muscle (tibialis posterior)."
      }
    ],
    "props": [
      "band",
      "chair"
    ],
    "officeFriendly": true,
    "barefootOnly": false,
    "contraindications": [],
    "dailySafe": true,
    "source": [
      "Physitrack",
      "Rehab Hero",
      "Sports Injury Clinic"
    ],
    "evidenceNote": "Meta-analyses of exercise for chronic ankle instability, where strength work sits alongside balance training, show benefit. Nobody has isolated eversion strengthening as the part that works, and there is no evidence it prevents a first sprain. Strength plus balance training is what the research supports."
  },
  {
    "id": "high-load-towel-heel-raise",
    "name": "High-Load Heel Raise (Towel Under Toes)",
    "aka": [
      "Rathleff protocol",
      "Plantar fascia strengthening",
      "Windlass heel raise"
    ],
    "regions": [
      "ankles"
    ],
    "role": "load",
    "intensity": 3,
    "summary": "A slow single-leg calf raise with a rolled towel under all five toes, done every second day.",
    "why": "For stubborn heel pain, stretching is not the only option. This is the heavy, slow calf raise from a trial where strength training beat plantar fascia stretching at three months. Bending the toes up over a towel keeps the arch tight while the calf works.",
    "targets": [
      "plantar fascia",
      "calf",
      "windlass mechanism",
      "toe extension under load"
    ],
    "dose": {
      "kind": "reps",
      "reps": 12,
      "sets": 3,
      "perSide": true,
      "tempoNote": "3s up, 2s pause, 3s down.",
      "secondsPerRep": 8
    },
    "cues": [
      "Roll a towel and put it under all five toes on a step, ball of the foot on the edge, one hand on a wall.",
      "Rise for three seconds, pause for two, lower for three.",
      "Every second day only. Add weight in a backpack once twelve is comfortable.",
      "Do not start while the heel is still raw and painful."
    ],
    "shouldFeel": "The calf working hard and a tightness through the arch.",
    "shouldNotFeel": "A stab in the heel that lingers, or Achilles pain.",
    "regressions": [
      {
        "label": "Two feet",
        "detail": "Both feet on the towel, one hand on the wall.",
        "props": [
          "towel",
          "step",
          "wall"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Add books",
        "detail": "Books or weight in a backpack."
      },
      {
        "label": "More sets, heavier",
        "detail": "The trial went 12 reps by 3 sets, then 10 by 4, then 8 by 5."
      }
    ],
    "props": [
      "towel",
      "step",
      "wall"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "achilles"
    ],
    "dailySafe": false,
    "requiresFlag": "plantarFascia",
    "source": [
      "Rathleff et al., Scand J Med Sci Sports 2015"
    ],
    "evidenceNote": "The trial had 48 people. The strength group did better on the Foot Function Index at 3 months, by 29 points. By 6 and 12 months the groups were no different, and both groups also wore shoe inserts. So strength got people better sooner, not better in the end. It is a sound option next to stretching. It is not proven to be superior. Guidance around it says not to start until the initial symptoms have settled and not to use it alone."
  },
  {
    "id": "arch-roll",
    "name": "Ball Arch Roll",
    "aka": [
      "Frozen bottle roll",
      "Foot rolling",
      "Plantar fascia self-massage"
    ],
    "regions": [
      "ankles"
    ],
    "role": "opener",
    "intensity": 1,
    "summary": "Roll a tennis ball, lacrosse ball or frozen bottle under your arch, slowly, with moderate pressure.",
    "why": "It feels good, it wakes the foot up before you stand on it, and some people with heel pain get short-term relief. That is a fair reason to do it. Do it on its way to the actual work, not as the work itself.",
    "targets": [
      "sole of the foot",
      "plantar fascia"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 90,
      "sets": 1,
      "perSide": true
    },
    "cues": [
      "Sit with a tennis or lacrosse ball under the arch. A frozen bottle works too.",
      "Roll slowly from the ball of the foot to the heel with moderate pressure, about four out of ten.",
      "Pause for ten seconds on a tender spot and breathe.",
      "Then follow it with a stretch or the big toe drills."
    ],
    "shouldFeel": "A broad, achy pressure through the arch that eases as you roll.",
    "shouldNotFeel": "Sharp or bruising pain, or pressure straight on the heel bone.",
    "regressions": [
      {
        "label": "Softer ball",
        "detail": "A soft rubber ball or a rolled-up sock.",
        "props": [
          "chair"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Follow with the plantar fascia stretch",
        "detail": "Roll for a minute, then stretch."
      }
    ],
    "props": [
      "chair"
    ],
    "officeFriendly": true,
    "barefootOnly": false,
    "contraindications": [],
    "dailySafe": true,
    "source": [
      "Michigan Foot Doctors",
      "Frozen tennis ball and stretching trial (2025)"
    ],
    "evidenceNote": "Rolling does not break up adhesions or scar tissue in the fascia. That claim is unsupported and the plantar fascia is dense enough that rolling barely deforms it. Small trials show short-term pain relief when a ball is added to stretching, and reviews of foam rolling for pain are inconclusive. Use it because it feels good, not because of a mechanism."
  },
  {
    "id": "supported-single-leg-stand",
    "name": "Supported Single-Leg Stand",
    "aka": [
      "One-leg stand",
      "Single-leg balance"
    ],
    "regions": [
      "ankles"
    ],
    "role": "main",
    "intensity": 1,
    "summary": "Stand on one leg beside a wall or counter with a fingertip on it, for thirty seconds.",
    "why": "The ankle's job is to balance you, and it gets worse the less you ask it to. This is the simplest test and drill in the book, and it is safe even if your balance is poor, because the wall is there. It is the base of every balance progression here.",
    "targets": [
      "ankle stabilisers",
      "single-leg balance",
      "foot intrinsics",
      "hip stabilisers"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 30,
      "sets": 3,
      "perSide": true
    },
    "cues": [
      "Stand next to a wall or counter with a fingertip on it.",
      "Lift one foot a few centimetres. Stand tall and look at a spot ahead.",
      "Wobbles are normal. Let the foot make small corrections. Do not grip with the toes.",
      "Take the hand off for a few seconds once it is easy."
    ],
    "shouldFeel": "The ankle and foot working with lots of tiny corrections.",
    "shouldNotFeel": "Dizziness, or a wobble that makes you grab the wall hard. Stop and sit if so.",
    "regressions": [
      {
        "label": "Heel-to-toe stand",
        "detail": "Both feet on the floor, one directly in front of the other, touching the wall.",
        "props": [
          "wall"
        ]
      },
      {
        "label": "Toe touch",
        "detail": "The lifted foot resting lightly on the floor.",
        "props": [
          "wall"
        ]
      }
    ],
    "progressions": [
      {
        "label": "No hand",
        "detail": "Hands on hips."
      },
      {
        "label": "Eyes closed",
        "detail": "Only with a wall right beside you."
      },
      {
        "label": "Soft surface",
        "detail": "A folded towel or a cushion."
      }
    ],
    "props": [
      "wall"
    ],
    "officeFriendly": true,
    "barefootOnly": false,
    "contraindications": [],
    "dailySafe": true,
    "source": [
      "Runners Connect",
      "Otago Exercise Programme"
    ],
    "evidenceNote": "In a Cochrane review of 108 trials, balance and functional exercises cut the rate of falls by 24 percent in older adults, with high-certainty evidence. Balance training also helps people with chronic ankle instability. For a healthy middle-aged man the benefit is unstudied, so the honest reason to do it is that it is cheap, quick and tells you something."
  },
  {
    "id": "heel-to-toe-walk",
    "name": "Heel-to-Toe Walk",
    "aka": [
      "Tandem walk",
      "Tightrope walk"
    ],
    "regions": [
      "ankles"
    ],
    "role": "main",
    "intensity": 1,
    "summary": "Walk along a wall with one foot directly in front of the other, heel touching toe.",
    "why": "Walking a line takes a narrow base and makes the ankles do the balancing. It is one of the simplest balance drills in fall-prevention programmes and a good next step from standing on one leg.",
    "targets": [
      "ankle stabilisers",
      "dynamic balance",
      "foot placement"
    ],
    "dose": {
      "kind": "reps",
      "reps": 10,
      "sets": 3,
      "perSide": false,
      "tempoNote": "2s per step.",
      "secondsPerRep": 2
    },
    "cues": [
      "Walk along a wall with one hand trailing on it.",
      "Put one foot directly in front of the other, heel touching toes.",
      "Eyes forward, not at your feet.",
      "Ten steps, turn round, repeat."
    ],
    "shouldFeel": "Ankle wobbles and lots of tiny corrections.",
    "shouldNotFeel": "Dizziness, or being unable to stay near the wall.",
    "regressions": [
      {
        "label": "Wider steps",
        "detail": "Leave a gap between heel and toe.",
        "props": [
          "wall"
        ]
      }
    ],
    "progressions": [
      {
        "label": "No wall",
        "detail": "Once it is easy."
      },
      {
        "label": "Walk backwards",
        "detail": "Heel-to-toe backwards, wall beside you."
      }
    ],
    "props": [
      "wall"
    ],
    "officeFriendly": true,
    "barefootOnly": false,
    "contraindications": [],
    "dailySafe": true,
    "source": [
      "Otago Exercise Programme"
    ],
    "evidenceNote": "Tandem walking is part of the Otago programme, which reduced falls in older adults, with a 24 percent lower fall rate for balance and functional exercise in a Cochrane review. The trials were in older adults, and nobody has tested this in fit middle-aged men."
  },
  {
    "id": "star-excursion-reach",
    "name": "Star Excursion Reach",
    "aka": [
      "SEBT training",
      "Y-balance reach",
      "Clock reach"
    ],
    "regions": [
      "ankles"
    ],
    "role": "load",
    "intensity": 2,
    "summary": "Stand on one leg and reach the other foot forward and behind you along three lines, touching lightly.",
    "why": "It is a balance drill that makes you move your body over a planted foot in different directions, which is closer to what the ankle does in real life than standing still. It is the drill physios use for a leg that has been sprained more than once.",
    "targets": [
      "ankle stability",
      "single-leg dynamic balance",
      "hip and knee control"
    ],
    "dose": {
      "kind": "reps",
      "reps": 9,
      "sets": 2,
      "perSide": true,
      "tempoNote": "Three reaches in each of three directions, about 4s each.",
      "secondsPerRep": 4
    },
    "cues": [
      "Stand on one leg, hands on hips, standing knee soft.",
      "Reach the free foot forward, then back and across behind you, then back and out to the side. Touch the floor lightly each time and return to the middle.",
      "Reach only as far as you can with control. Do not lean on the reaching foot.",
      "Keep the standing foot flat and the arch up."
    ],
    "shouldFeel": "The ankle, foot and hip of the standing leg working hard.",
    "shouldNotFeel": "Sharp pain in the knee or ankle, or having to hop to stay up.",
    "regressions": [
      {
        "label": "Fingertips on a wall",
        "detail": "A light touch for balance.",
        "props": [
          "wall"
        ]
      },
      {
        "label": "Shorter reach",
        "detail": "Half the distance.",
        "props": [
          "none"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Longer reach",
        "detail": "As far as you can with control."
      },
      {
        "label": "Add the fourth line",
        "detail": "Include the full set of eight directions."
      }
    ],
    "props": [
      "none"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "balance"
    ],
    "dailySafe": true,
    "source": [
      "Physiopedia (Star Excursion Balance Test)",
      "Physitrack"
    ],
    "evidenceNote": "A meta-analysis of 58 studies (2,097 people) found balance training improved function, dynamic balance and joint position sense in chronic ankle instability. That does not isolate this drill, and there is no equivalent evidence in healthy adults."
  },
  {
    "id": "half-dome-calf-stretch",
    "name": "Half-Dome Calf Stretch",
    "aka": [
      "Half-roller calf stretch",
      "Dome calf stretch"
    ],
    "regions": [
      "ankles"
    ],
    "role": "main",
    "intensity": 1,
    "summary": "Put the ball of your foot on the top of a half foam roller, drop the heel and straighten the knee.",
    "why": "The half dome tilts the forefoot up, so the calf stretches without you needing a step. It is a flat, portable, cheaper version of the step and easier on the arch. It is the tool Katy Bowman teaches the calf stretch with, and a good fit if you like doing this at home.",
    "targets": [
      "gastrocnemius",
      "soleus",
      "ankle dorsiflexion"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 30,
      "sets": 2,
      "perSide": true
    },
    "cues": [
      "Half foam roller flat side down. Ball of the foot on the top, heel on the floor.",
      "Straighten the knee and step the other foot forward for balance. Hips level.",
      "Hold for a few breaths, then soften both knees a little to shift it into the soleus.",
      "Second toe points straight ahead."
    ],
    "shouldFeel": "A long stretch through the calf.",
    "shouldNotFeel": "Pain in the Achilles cord or the arch.",
    "regressions": [
      {
        "label": "Smaller dome",
        "detail": "A rolled towel under the ball of the foot.",
        "props": [
          "towel"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Bent-knee soleus",
        "detail": "Bend both knees, heels down."
      }
    ],
    "props": [
      "roller",
      "wall"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "achilles"
    ],
    "dailySafe": true,
    "source": [
      "Katy Bowman (Nutritious Movement)"
    ],
    "evidenceNote": "The dome only changes the angle of the stretch. There is no evidence it does more than a step or a wall. Static calf stretching gives short-term gains in ankle range, but the evidence for lasting change or for preventing injury is weak, and calf tightness is not the hidden cause of most foot problems, however often that is claimed."
  },
  {
    "id": "knee-to-wall-check",
    "name": "Knee-to-Wall Check",
    "aka": [
      "Weight-bearing lunge test",
      "Dorsiflexion lunge test"
    ],
    "regions": [
      "ankles"
    ],
    "role": "opener",
    "intensity": 1,
    "summary": "Find the farthest your foot can be from a wall while your knee still touches it with the heel down.",
    "why": "It is the ankle measurement that matters to a squat: how far the knee can go over the toes with the heel on the ground. Doing it once a month gives you a number to work against and shows you if one ankle is behind the other.",
    "targets": [
      "ankle dorsiflexion",
      "left-right difference"
    ],
    "dose": {
      "kind": "reps",
      "reps": 3,
      "sets": 1,
      "perSide": true,
      "tempoNote": "Slow reach, 3s at the wall.",
      "secondsPerRep": 5
    },
    "cues": [
      "Stand facing a wall with your big toe about ten centimetres from it. Use a ruler or tape.",
      "Bend the knee forward to touch the wall with the heel down and the knee tracking over the second toe.",
      "If it touches easily, move the foot back a centimetre and repeat until you can no longer touch. Record that distance.",
      "Do both sides and compare."
    ],
    "shouldFeel": "A stretch in the calf at the back of the ankle.",
    "shouldNotFeel": "A sharp pinch at the front of the ankle.",
    "regressions": [
      {
        "label": "Foot nearer the wall",
        "detail": "Start close and only test a few positions.",
        "props": [
          "wall"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Retest monthly",
        "detail": "Same shoes off, same surface, same time of day."
      },
      {
        "label": "Try the drill",
        "detail": "Use the knee-to-wall drive to work at the edge."
      }
    ],
    "props": [
      "wall"
    ],
    "officeFriendly": true,
    "barefootOnly": false,
    "contraindications": [],
    "dailySafe": true,
    "source": [
      "Physiopedia (Knee to Wall Test)",
      "Manual Therapy 2011 (normative asymmetry)"
    ],
    "evidenceNote": "The test is highly repeatable, and in young healthy adults the average is about 11 cm from the wall or roughly 41 degrees, with anything over about 9 to 10 cm treated as normal. Differences between sides up to about 1.5 cm are within normal variation. Those figures come from healthy college-age people and are not a pass mark for a squat. A bony block from a spur at the front of the ankle also feels like a hard end and a pinch at the front, and it will not ease when you bend the knee, unlike a tight calf muscle. That is the case to get looked at rather than stretched."
  }
];
