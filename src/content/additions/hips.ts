import type { Exercise } from '../types.ts';

/**
 * hips: imported from web research, then reviewed by hand. This file is the source of
 * truth now - edit it freely. The research briefs' review-only fields (pose hints, URLs,
 * evidence grades) were stripped on import.
 *
 * Same editorial rule as the core library: where a source offered a mechanism, we state a
 * feeling and a behaviour instead, and `evidenceNote` corrects any claim that did not survive
 * checking. Evidence for most stretching is weak; the notes say so where it matters.
 */
export const HIPS: Exercise[] = [
  {
    "id": "wall-couch-stretch",
    "name": "Wall Couch Stretch",
    "aka": [
      "Wall hip flexor stretch",
      "Rear shin up the wall",
      "Couch stretch on the wall"
    ],
    "regions": [
      "hips"
    ],
    "role": "main",
    "intensity": 3,
    "summary": "Kneel with your back shin flat up a wall, foot in the air, and sink your hips towards the wall.",
    "why": "This is the original, hardest form of the couch stretch, and the one that asks the most of your hip extension and your quads together. It is a good test: if you cannot get your hips near the wall without your back arching, you have found the range you have lost from sitting. For a lifter it is the difference between finishing a deadlift with your glutes and finishing it with your lower back.",
    "targets": [
      "hip extension",
      "rectus femoris",
      "hip flexors"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 45,
      "sets": 1,
      "perSide": true
    },
    "cues": [
      "Start with your knee a foot away from the wall, then walk it back as the stretch allows.",
      "Squeeze the back glute hard, then tuck your tailbone under.",
      "Stay tall. If your ribs flare out, you are arching, so come out of it a little.",
      "Pad the knee, and keep breathing."
    ],
    "shouldFeel": "A strong pull down the front of the thigh, just above the knee, and across the front of the back hip.",
    "shouldNotFeel": "Pinching in the lower back (you are arching), pain at the kneecap, or a hamstring cramp that will not settle.",
    "regressions": [
      {
        "label": "Knee away from the wall",
        "detail": "Move the knee 20 to 40 cm out so your shin leans on the wall instead of standing flat against it.",
        "props": [
          "wall",
          "cushion"
        ]
      },
      {
        "label": "Hands on the floor",
        "detail": "Lean forward on your hands beside the front foot so the load on the back hip drops.",
        "props": [
          "wall",
          "cushion"
        ]
      },
      {
        "label": "Chair couch stretch",
        "detail": "Foot on a chair seat instead of the wall. Much lower demand.",
        "props": [
          "chair",
          "cushion"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Front foot on a block",
        "detail": "Raise the front foot to bring the hips further forward."
      },
      {
        "label": "Add the glute squeeze cycles",
        "detail": "Squeeze the back glute for 5 seconds, relax, and sink a little further. Three rounds."
      },
      {
        "label": "Reach overhead",
        "detail": "Same-side arm up and lean gently away."
      }
    ],
    "props": [
      "wall",
      "cushion"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "knee",
      "hipReplacement"
    ],
    "dailySafe": true,
    "maxHoldSeconds": 120,
    "source": [
      "Kelly Starrett (Becoming a Supple Leopard, The Ready State)",
      "Garage Gym Reviews",
      "Healthline"
    ],
    "evidenceNote": "With the back knee bent to 90 degrees or more, most of what you feel is rectus femoris, the quad muscle, not the psoas. That is not a flaw, but do not call it a psoas stretch. Starrett also says this stretch can fix knee pain and back pain. Nothing tested supports that. What is supported: hip-extension stretches held for 30 seconds or more increase hip extension range in the short term, and posterior pelvic tilt with a glute squeeze makes them work better (see the pelvic-tuck half-kneeling entry)."
  },
  {
    "id": "rear-foot-elevated-hip-flexor-stretch",
    "name": "Rear-Foot-Elevated Hip Flexor Stretch",
    "aka": [
      "Bench couch stretch",
      "Elevated couch stretch",
      "Back foot on a box hip flexor stretch"
    ],
    "regions": [
      "hips"
    ],
    "role": "main",
    "intensity": 3,
    "summary": "Standing lunge with your back foot up on a bench or box, sinking down until the front of the back hip stretches. No knee on the floor.",
    "why": "It keeps the couch-stretch position but takes the floor out of it, so there is no kneecap pressure. It is the right pick for a man whose knees hate kneeling but who can hold a split squat. Because the back foot is raised, the hip is pulled into extension without you having to lunge forward and arch.",
    "targets": [
      "hip extension",
      "rectus femoris",
      "hip flexors"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 30,
      "sets": 2,
      "perSide": true
    },
    "cues": [
      "Back foot laces down on the bench, front foot far enough out that your front shin stays roughly upright.",
      "Tuck the tailbone and squeeze the back glute before you lower.",
      "Sink straight down, not forward. Stay tall.",
      "Hold a wall or rack with one hand."
    ],
    "shouldFeel": "A stretch along the front of the back thigh and the front of the hip, with the front leg working to hold you.",
    "shouldNotFeel": "Pinching in the lower back, pain at the front knee, or wobbling that makes you brace instead of relax.",
    "regressions": [
      {
        "label": "Lower surface",
        "detail": "Use a low step instead of a bench.",
        "props": [
          "step"
        ]
      },
      {
        "label": "Hand support",
        "detail": "Hold a wall, chair back or rack with one hand.",
        "props": [
          "chair",
          "wall"
        ]
      },
      {
        "label": "Kneel instead",
        "detail": "Chair couch stretch, if balance is the problem.",
        "props": [
          "chair",
          "cushion"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Lower the back knee towards the floor",
        "detail": "Sink until the back knee hovers, then rests, on a cushion."
      },
      {
        "label": "Overhead reach",
        "detail": "Same-side arm up and lean gently away."
      },
      {
        "label": "Front foot on a plate",
        "detail": "Lengthens the stance for a deeper stretch."
      }
    ],
    "props": [
      "chair"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "knee",
      "balance",
      "hipReplacement"
    ],
    "dailySafe": true,
    "source": [
      "Garage Gym Reviews",
      "Kelly Starrett"
    ],
    "evidenceNote": "The bench or box can be any solid surface that reaches about knee to hip height. Raising the back foot keeps the knee bent, so this is as much a quad stretch as a hip one. There is no trial comparing it to floor couch stretches, so choose it on comfort, not on claims that higher is better."
  },
  {
    "id": "chair-couch-stretch",
    "name": "Chair Couch Stretch",
    "aka": [
      "Low couch stretch",
      "Foot-on-chair hip flexor stretch"
    ],
    "regions": [
      "hips"
    ],
    "role": "main",
    "intensity": 2,
    "summary": "Kneel with your back foot resting on a chair seat and the knee well out from the chair, so the shin slopes rather than standing up straight.",
    "why": "The couch stretch you can actually build up to. Moving the knee away from the chair softens it enough for most people to hold for 45 seconds, and you make it harder by shuffling the knee closer. It is also the version you can do beside an office desk.",
    "targets": [
      "hip extension",
      "rectus femoris",
      "hip flexors"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 45,
      "sets": 1,
      "perSide": true
    },
    "cues": [
      "Cushion under the knee. Foot resting on the seat, toes pointing back.",
      "Squeeze the back glute, then tuck the tailbone.",
      "Shuffle closer to the chair only when the stretch fades.",
      "Keep the ribs down. Do not arch to get lower."
    ],
    "shouldFeel": "A firm stretch down the front of the back thigh and across the front of the hip.",
    "shouldNotFeel": "Pinching in the low back, a hamstring cramp, or knee pain.",
    "regressions": [
      {
        "label": "Knee further from the chair",
        "detail": "Every 10 cm away from the chair takes tension off the thigh.",
        "props": [
          "chair",
          "cushion"
        ]
      },
      {
        "label": "Hands on the seat",
        "detail": "Lean on your hands to share the load with the front leg.",
        "props": [
          "chair",
          "cushion"
        ]
      },
      {
        "label": "Half-kneeling lunge",
        "detail": "Back foot flat on the floor instead of on the chair.",
        "props": [
          "cushion"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Knee closer to the chair",
        "detail": "Bring the shin steeper, then vertical against a wall."
      },
      {
        "label": "Glute squeeze cycles",
        "detail": "Squeeze 5 seconds, relax and sink."
      },
      {
        "label": "Overhead reach",
        "detail": "Same-side arm up, lean gently away."
      }
    ],
    "props": [
      "chair",
      "cushion"
    ],
    "officeFriendly": true,
    "barefootOnly": false,
    "contraindications": [
      "knee",
      "hipReplacement"
    ],
    "dailySafe": true,
    "source": [
      "Kelly Starrett",
      "Garage Gym Reviews",
      "Healthline"
    ],
    "evidenceNote": "Kelly Starrett's version stands the shin against the couch back or wall. Moving the knee away is the widely used regression, not a different stretch. The claim that the couch stretch is the fix for tight hips and knee pain has no controlled evidence behind it. The effect that is actually measured is a short-term rise in hip extension range."
  },
  {
    "id": "couch-stretch-side-bend",
    "name": "Couch Stretch with Overhead Reach and Side Bend",
    "aka": [
      "Couch stretch with lateral flexion",
      "Couch stretch with contralateral side bend",
      "Psoas couch stretch"
    ],
    "regions": [
      "hips",
      "back"
    ],
    "role": "main",
    "intensity": 3,
    "summary": "In a couch stretch, raise the arm on the back-leg side overhead and lean your ribcage a little away from the stretched hip.",
    "why": "The psoas is the only hip flexor that also attaches to your lower spine. Leaning away from the stretched side pulls on that attachment, which a plain lunge or couch stretch does not. It is the closest a stretch gets to biasing the psoas, and it is a smaller movement than it looks: a few centimetres of lean, not a dramatic bend.",
    "targets": [
      "psoas",
      "hip extension",
      "hip flexors",
      "lateral trunk"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 30,
      "sets": 2,
      "perSide": true
    },
    "cues": [
      "Get set in the couch stretch first, glute squeezed, tailbone tucked.",
      "Reach the arm on the back-leg side straight up.",
      "Lean the top half slightly away from that leg. Keep the hips square and still.",
      "Breathe into the ribs on the reaching side."
    ],
    "shouldFeel": "The stretch along the front of the hip climbing towards the ribs on the reaching side, and a long line up that side of the body.",
    "shouldNotFeel": "Pinching in the lower back on the leaning side, or a pull that turns into sharp groin pain.",
    "regressions": [
      {
        "label": "Half-kneeling version",
        "detail": "Do the reach and lean from the half-kneeling lunge instead.",
        "props": [
          "cushion"
        ]
      },
      {
        "label": "Reach only, no lean",
        "detail": "Arm overhead, spine tall, no bend.",
        "props": [
          "chair",
          "cushion"
        ]
      },
      {
        "label": "Hand on the hip",
        "detail": "Skip the overhead arm and just lean a little.",
        "props": [
          "chair",
          "cushion"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Add a small twist",
        "detail": "Turn the chest slightly towards the front leg while keeping the hips square."
      },
      {
        "label": "Wall version",
        "detail": "The same reach from the wall couch stretch."
      }
    ],
    "props": [
      "chair",
      "cushion"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "knee",
      "hipReplacement",
      "backPain"
    ],
    "dailySafe": true,
    "source": [
      "Kelly Starrett",
      "Stuart McGill",
      "Garage Gym Reviews",
      "Healthline"
    ],
    "evidenceNote": "Psoas major is one of several hip flexors. It runs from the sides of the lower spine (T12 to L5) to the top of the thigh bone, and joins the iliacus (from inside the pelvis) to form the iliopsoas. Rectus femoris, the quad muscle that crosses both hip and knee, and TFL also flex the hip. Any stretch that takes the hip into extension lengthens all of them, so you cannot stretch the psoas alone. Adding a lean away from the stretched side is what the anatomy points to, and it is the reasoning McGill gives for it, but I found no imaging or muscle-recording study that confirms any position stretches the psoas more than the iliacus. Treat it as a reasonable bias, not an isolation. Popular claims that stretching the psoas releases stored emotion or trauma have no scientific support. If you feel emotional in a deep hip stretch, that is a normal response to a strenuous position and to slow breathing, not something stored in one muscle."
  },
  {
    "id": "couch-stretch-contract-relax",
    "name": "Couch Stretch with Glute Squeeze (Contract-Relax)",
    "aka": [
      "Couch stretch PNF",
      "Couch stretch with contract-relax",
      "Squeeze-and-sink couch stretch"
    ],
    "regions": [
      "hips"
    ],
    "role": "main",
    "intensity": 3,
    "summary": "In a couch stretch, squeeze the back glute hard for 5 seconds, relax, then sink a little deeper. Repeat.",
    "why": "It is the honest version of \"get more from the stretch\". Instead of waiting for the muscle to give, you contract first, which reliably lets you sink deeper afterwards. For a lifter that fits: earn the range with tension, then use it.",
    "targets": [
      "hip extension",
      "hip flexors",
      "rectus femoris"
    ],
    "dose": {
      "kind": "reps",
      "reps": 3,
      "sets": 1,
      "perSide": true,
      "tempoNote": "5s hard glute squeeze, 5s relax and sink deeper.",
      "secondsPerRep": 10
    },
    "cues": [
      "Set the couch stretch: glute on, tailbone tucked, ribs down.",
      "Squeeze the back glute hard for 5 seconds, then let go and lean in a little.",
      "Breathe out as you sink. Do not hold your breath.",
      "Stop the round when the range stops growing."
    ],
    "shouldFeel": "A hard glute squeeze, then a clear release in the front of the hip and thigh that lets you sink further.",
    "shouldNotFeel": "Cramping in the hamstring or glute that will not release, pinching in the lower back, or knee pain.",
    "regressions": [
      {
        "label": "Half effort",
        "detail": "Squeeze at about half your strength.",
        "props": [
          "chair",
          "cushion"
        ]
      },
      {
        "label": "Half-kneeling",
        "detail": "Do the squeeze in a half-kneeling lunge.",
        "props": [
          "cushion"
        ]
      },
      {
        "label": "Chair couch stretch",
        "detail": "Foot on a chair rather than the wall.",
        "props": [
          "chair",
          "cushion"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Squeeze harder",
        "detail": "Build towards near-maximal squeeze, still breathing."
      },
      {
        "label": "Wall couch stretch",
        "detail": "Same cycles with the shin against the wall."
      }
    ],
    "props": [
      "chair",
      "cushion"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "knee",
      "hipReplacement",
      "bloodPressure"
    ],
    "dailySafe": true,
    "source": [
      "Kelly Starrett (The Ready State)"
    ],
    "evidenceNote": "Starrett describes tensing muscles for 5 to 10 seconds then relaxing deeper. The popular explanation is that squeezing the glute makes the hip flexor \"switch off\" (reciprocal inhibition). The stronger evidence is simply that contract-relax methods raise range of motion in the short term, mostly because you tolerate more stretch. A 2004 trial of 33 people with limited hip extension found active and passive home stretching improved range equally over 6 weeks, so there is no proof this beats a plain hold. Nothing here breaks up tissue."
  },
  {
    "id": "half-kneeling-lunge-stretch",
    "name": "Half-Kneeling Lunge Stretch",
    "aka": [
      "Kneeling hip flexor stretch",
      "Kneeling lunge stretch",
      "Basic hip flexor stretch"
    ],
    "regions": [
      "hips"
    ],
    "role": "main",
    "intensity": 1,
    "summary": "One knee down on a cushion, the other foot forward, and shift your weight gently forward with your chest tall.",
    "why": "The starting point for every hip flexor stretch here. Sitting all day leaves the front of your hip less used to opening, and this asks it to open a little at a time. It is also the easiest to regress with a chair, so it is where a stiff man should begin.",
    "targets": [
      "hip extension",
      "hip flexors"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 30,
      "sets": 2,
      "perSide": true
    },
    "cues": [
      "Cushion under the back knee. Front knee over the ankle.",
      "Stand tall out of your hips. Do not lean forward at the chest.",
      "Shift forward a small amount, only until you feel a stretch.",
      "Breathe out and let the hips settle."
    ],
    "shouldFeel": "A stretch along the front of the back hip and the top of the thigh.",
    "shouldNotFeel": "Pinching in the lower back, or pressure on the kneecap.",
    "regressions": [
      {
        "label": "Kneel in front of a chair",
        "detail": "Hands on the seat, cushion under the knee, shift forward gently.",
        "props": [
          "chair",
          "cushion"
        ]
      },
      {
        "label": "Hands on the front thigh",
        "detail": "Press down on the front knee for steadiness.",
        "props": [
          "cushion"
        ]
      },
      {
        "label": "Standing split stance",
        "detail": "No kneeling. Back foot on the floor.",
        "props": [
          "none"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Glute squeeze and pelvic tuck",
        "detail": "The pelvic-tuck version is a real step up."
      },
      {
        "label": "Overhead reach",
        "detail": "Same-side arm up."
      },
      {
        "label": "Chair couch stretch",
        "detail": "Back foot up on a chair."
      }
    ],
    "props": [
      "cushion"
    ],
    "officeFriendly": true,
    "barefootOnly": false,
    "contraindications": [
      "knee",
      "hipReplacement"
    ],
    "dailySafe": true,
    "source": [
      "HSS (Hospital for Special Surgery) physical therapist",
      "The Prehab Guys",
      "Mike Reinold"
    ],
    "evidenceNote": "Most people do this one wrong: they lean forward and arch the lower back, which lets the hip flexors stay short. Stay tall and add the pelvic tuck. This is a hip-extension stretch for the whole hip flexor group. It does not isolate the psoas."
  },
  {
    "id": "half-kneeling-pelvic-tuck-stretch",
    "name": "Half-Kneeling Hip Flexor Stretch with Pelvic Tuck",
    "aka": [
      "Posterior pelvic tilt hip flexor stretch",
      "Glute-squeeze lunge stretch",
      "Reinold hip flexor stretch"
    ],
    "regions": [
      "hips"
    ],
    "role": "main",
    "intensity": 2,
    "summary": "In half-kneeling, squeeze the back glute and tuck the tailbone under before you lean forward. Lean only an inch or two.",
    "why": "This is where the hip flexor stretch starts working. If your lower back arches as you lean, the hip barely moves. The tuck flattens the lower back and pushes the hip into the extension the stretch is meant for. Physical therapist Mike Reinold makes this the whole point: a tiny movement with a hard glute squeeze beats a big lunge.",
    "targets": [
      "hip extension",
      "psoas",
      "iliacus",
      "hip flexors"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 30,
      "sets": 2,
      "perSide": true
    },
    "cues": [
      "Squeeze the back glute hard before you move.",
      "Tuck your tailbone under, like pulling a tail between your legs.",
      "Hands on the front knee, press down and brace your abs.",
      "Lean forward two or three centimetres at most."
    ],
    "shouldFeel": "A stretch deep in the front of the back hip, higher up than a normal lunge stretch. Often more from a small movement.",
    "shouldNotFeel": "Any low back arch or pinch, or a pinch at the front of the hip joint itself.",
    "regressions": [
      {
        "label": "Squeeze only, no lean",
        "detail": "Set the tuck and glute squeeze without moving forward. Many people feel it already.",
        "props": [
          "cushion"
        ]
      },
      {
        "label": "Kneel in front of a chair",
        "detail": "Hands on the seat for balance.",
        "props": [
          "chair",
          "cushion"
        ]
      },
      {
        "label": "Standing split stance",
        "detail": "Same tuck with the back foot on the floor.",
        "props": [
          "none"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Overhead reach",
        "detail": "Same-side arm up and lean away slightly."
      },
      {
        "label": "Band pulling the hip forward",
        "detail": "Add a band around the top of the thigh."
      },
      {
        "label": "Couch stretch",
        "detail": "Same tuck with the foot up."
      }
    ],
    "props": [
      "cushion"
    ],
    "officeFriendly": true,
    "barefootOnly": false,
    "contraindications": [
      "knee",
      "hipReplacement"
    ],
    "dailySafe": true,
    "source": [
      "Mike Reinold",
      "The Prehab Guys",
      "Dani Winks Flexibility",
      "HSS physical therapist"
    ],
    "evidenceNote": "Psoas major is one of several hip flexors. It runs from the sides of the lower spine (T12 to L5) to the top of the thigh bone, and joins the iliacus (from inside the pelvis) to form the iliopsoas. Rectus femoris, the quad muscle that crosses both hip and knee, and TFL also flex the hip. Any stretch that takes the hip into extension lengthens all of them, so you cannot stretch the psoas alone. The pelvic tuck has real evidence behind it: a 2024 crossover trial (26 healthy, active adults, 30 seconds by 2) found that adding a tuck cut hip-flexor resistance more than the standard half-kneeling stretch. That measures how tense the tissue feels to stretch straight afterwards, not how you sit or stand. Two related claims are not supported. A tight psoas is not proven to cause back pain (a small 2024 study of 70 students found no link between iliopsoas length and low back pain, and 96% tested normal length). And releasing it will not fix your posture."
  },
  {
    "id": "half-kneeling-side-bend-twist",
    "name": "Half-Kneeling Lunge with Side Bend and Twist",
    "aka": [
      "Psoas lunge stretch with side bend",
      "Kneeling hip flexor stretch with rotation",
      "Low lunge with lateral flexion"
    ],
    "regions": [
      "hips",
      "back"
    ],
    "role": "main",
    "intensity": 2,
    "summary": "In the pelvic-tuck lunge, reach the back-leg-side arm up, lean away from that leg, and add a small twist towards the front leg.",
    "why": "The extra steps a straight lunge does not have. The side bend brings in the psoas's spinal attachment; the twist is the bit coaches add on top. Done properly it looks small: a lean, not a lunge.",
    "targets": [
      "psoas",
      "hip extension",
      "hip flexors",
      "lateral trunk"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 30,
      "sets": 2,
      "perSide": true
    },
    "cues": [
      "Set the tuck and glute squeeze first. That is the base.",
      "Reach the back-leg-side arm overhead, lean the ribs away from the back leg.",
      "Keep the hips square, then rotate the chest slightly toward the front knee.",
      "Stop where you feel the stretch move up towards the ribs."
    ],
    "shouldFeel": "The stretch on the front of the hip climbing up the front of the body towards the ribs on the reaching side.",
    "shouldNotFeel": "Pinching in the low back on the leaning side, or a sharp pull in the groin.",
    "regressions": [
      {
        "label": "Bend only",
        "detail": "Skip the twist and just reach and lean.",
        "props": [
          "cushion"
        ]
      },
      {
        "label": "Hand on the front knee",
        "detail": "Lean without the arm overhead.",
        "props": [
          "cushion"
        ]
      },
      {
        "label": "Kneel in front of a chair",
        "detail": "Hold the seat with the other hand.",
        "props": [
          "chair",
          "cushion"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Couch stretch with side bend",
        "detail": "Same reach with the foot up."
      },
      {
        "label": "Breathe into the ribs",
        "detail": "Two slow breaths into the ribs of the reaching side."
      }
    ],
    "props": [
      "cushion"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "knee",
      "hipReplacement",
      "backPain"
    ],
    "dailySafe": true,
    "source": [
      "Stuart McGill",
      "The Prehab Guys",
      "Garage Gym Reviews"
    ],
    "evidenceNote": "Psoas major is one of several hip flexors. It runs from the sides of the lower spine (T12 to L5) to the top of the thigh bone, and joins the iliacus (from inside the pelvis) to form the iliopsoas. Rectus femoris, the quad muscle that crosses both hip and knee, and TFL also flex the hip. Any stretch that takes the hip into extension lengthens all of them, so you cannot stretch the psoas alone. Coaches differ on the twist: the Prehab Guys add hip internal rotation and a side bend away, McGill describes lateral bending with some twist, and Garage Gym Reviews turns towards the front leg. No study I found tests which is best, so use whichever gives a stretch at the front of the hip without pinching. Do not be sold a \"psoas release\": stretching cannot release stored emotion, fix posture, or cure back pain. Hip flexor length was not linked to low back pain in the small study I found."
  },
  {
    "id": "psoas-stride",
    "name": "Psoas Stride",
    "aka": [
      "McGill psoas stretch",
      "Lunge with overhead reach and side bend",
      "Walking lunge reach"
    ],
    "regions": [
      "hips",
      "back"
    ],
    "role": "main",
    "intensity": 2,
    "summary": "Step into a lunge, raise the back-leg-side arm overhead, lean away from the back leg, hold two seconds, then stride through to the other side.",
    "why": "Stuart McGill, the spine researcher, uses this as his psoas stretch because it combines hip extension with a side bend, not a deep static hold. It also works as a dynamic warm-up for a man who does not want to sit in a deep lunge cold.",
    "targets": [
      "psoas",
      "hip extension",
      "hip flexors",
      "lateral trunk"
    ],
    "dose": {
      "kind": "reps",
      "reps": 6,
      "sets": 1,
      "perSide": true,
      "tempoNote": "Step in, 3s reach and lean, 3s to stand and step through.",
      "secondsPerRep": 6
    },
    "cues": [
      "Take a big step and sink into the lunge with the back heel up.",
      "Reach the back-leg-side arm overhead, lean gently away from the back leg.",
      "Hold two or three seconds, breathing out.",
      "Push off the front foot and step through into the next side."
    ],
    "shouldFeel": "A stretch across the front of the back hip that runs up the side of the body.",
    "shouldNotFeel": "Front-knee pain or a pinch in the low back on the leaning side.",
    "regressions": [
      {
        "label": "Hold a wall",
        "detail": "One hand on a wall for balance.",
        "props": [
          "wall"
        ]
      },
      {
        "label": "Shallow lunge",
        "detail": "Less depth, no side bend.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Stay in place",
        "detail": "Half-kneeling with side bend instead of striding.",
        "props": [
          "cushion"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Longer holds",
        "detail": "5 seconds at the bottom."
      },
      {
        "label": "Add a small twist",
        "detail": "Turn the chest towards the front leg."
      }
    ],
    "props": [
      "none"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "knee",
      "balance",
      "hipReplacement"
    ],
    "dailySafe": true,
    "source": [
      "Stuart McGill"
    ],
    "evidenceNote": "Psoas major is one of several hip flexors. It runs from the sides of the lower spine (T12 to L5) to the top of the thigh bone, and joins the iliacus (from inside the pelvis) to form the iliopsoas. Rectus femoris, the quad muscle that crosses both hip and knee, and TFL also flex the hip. Any stretch that takes the hip into extension lengthens all of them, so you cannot stretch the psoas alone. McGill's stated reasoning is that the psoas is only reached by a lunge that includes lateral bending, some twist and extension, and that a plain lunge misses it. That follows from anatomy, but I found no study that measured it. He also warns that psoas-heavy exercises like sit-ups and leg raises compress the spine, which is a separate, better-supported point. The stretch is a movement drill, not a treatment."
  },
  {
    "id": "low-lunge",
    "name": "Low Lunge",
    "aka": [
      "Anjaneyasana",
      "Low crescent lunge",
      "Kneeling lunge with arms up"
    ],
    "regions": [
      "hips"
    ],
    "role": "main",
    "intensity": 2,
    "summary": "Back knee on the floor, front foot forward, arms overhead, sink your hips forward while keeping your ribs down.",
    "why": "The yoga version of the half-kneeling lunge, with the arms up so the front of the body opens too. The arms make it easy to arch the lower back and hide a lack of hip movement, so it earns its place only if you keep the pelvis tucked.",
    "targets": [
      "hip extension",
      "hip flexors",
      "shoulder flexion"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 30,
      "sets": 2,
      "perSide": true
    },
    "cues": [
      "Back knee down on a cushion, front knee over the ankle.",
      "Squeeze the back glute and tuck the tailbone before you sink.",
      "Lift the arms only as high as your ribs stay down.",
      "Slide the back knee a little further back if you want more."
    ],
    "shouldFeel": "A stretch across the front of the back hip and thigh, and a lift through the front of the chest.",
    "shouldNotFeel": "A crunch in the low back as the arms go up, pain at the back kneecap, or a pinch in the shoulders.",
    "regressions": [
      {
        "label": "Hands on the front thigh",
        "detail": "Skip the arms and keep the hands down.",
        "props": [
          "cushion"
        ]
      },
      {
        "label": "Blocks under the hands",
        "detail": "Lean on blocks to take load off.",
        "props": [
          "block",
          "cushion"
        ]
      },
      {
        "label": "Towel under the knee",
        "detail": "More padding for the back knee.",
        "props": [
          "towel"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Arms overhead, palms together",
        "detail": "Keep the ribs down."
      },
      {
        "label": "Side bend away",
        "detail": "Add the lean from the psoas-focused entries."
      },
      {
        "label": "Back leg lifted",
        "detail": "The full runner's lunge."
      }
    ],
    "props": [
      "cushion"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "knee",
      "hipReplacement",
      "shoulder"
    ],
    "dailySafe": true,
    "source": [
      "YogaUOnline",
      "Yoga International",
      "Liforme"
    ],
    "evidenceNote": "Yoga sources routinely say lengthening the psoas here releases tension \"physical and mental\" or breaks the stress cycle. There is no evidence that stretching a muscle releases emotional tension. What is true is that slow breathing in a strong stretch tends to calm most people down. The hip stretch itself is the same hip-extension stretch as a half-kneeling lunge."
  },
  {
    "id": "runners-lunge-rotation",
    "name": "Runner's Lunge with Rotation",
    "aka": [
      "Deep lunge with reach",
      "Low lunge with thoracic rotation",
      "Lunge with rotation"
    ],
    "regions": [
      "hips",
      "back"
    ],
    "role": "main",
    "intensity": 3,
    "summary": "Deep lunge with both hands inside the front foot, back knee lifted. Rotate towards the front leg and reach that arm to the ceiling.",
    "why": "A deep lunge that asks for hip extension, hip flexion and a spinal twist in one position. Runners use it because it looks like a stride: the front hip is deeply bent, the back hip fully open. It is a stronger, less supported version than the kneeling lunges, so it is not for a first attempt.",
    "targets": [
      "hip extension",
      "hip flexors",
      "thoracic rotation",
      "hip flexion"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 30,
      "sets": 1,
      "perSide": true
    },
    "cues": [
      "From hands and toes, step one foot next to the hand on the same side.",
      "Keep the back knee off the floor and the back leg strong.",
      "Rotate the chest towards the front leg and raise that arm to the ceiling.",
      "Breathe out into the rotation. Do not force the back knee down."
    ],
    "shouldFeel": "A stretch across the front of the back hip and thigh, a stretch in the front-hip crease, and a twist through the middle of the back.",
    "shouldNotFeel": "Sharp pinching at the front of the hip, wrist pain, or front-knee pain.",
    "regressions": [
      {
        "label": "Back knee down",
        "detail": "Rest the back knee on a cushion.",
        "props": [
          "cushion"
        ]
      },
      {
        "label": "Hands on blocks",
        "detail": "Blocks under the hands raise the floor.",
        "props": [
          "block"
        ]
      },
      {
        "label": "Skip the rotation",
        "detail": "Just hold the lunge with both hands down.",
        "props": [
          "none"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Elbow to the floor",
        "detail": "Lower the inside forearm to the floor or a block."
      },
      {
        "label": "Back knee lifted, glute squeezed",
        "detail": "Squeeze the back glute to lift the thigh."
      }
    ],
    "props": [
      "block",
      "cushion"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "knee",
      "wrist",
      "balance",
      "hipReplacement"
    ],
    "dailySafe": true,
    "source": [
      "Fit FX Training",
      "Runner's Blueprint",
      "Omstars"
    ],
    "evidenceNote": "This is a common warm-up. It stretches iliopsoas, rectus femoris and TFL together, so it is not a psoas isolate. The evidence for warm-up stretches is that they help you move better in that session, not that they change your tissue."
  },
  {
    "id": "standing-split-stance-stretch",
    "name": "Standing Split-Stance Hip Flexor Stretch",
    "aka": [
      "Standing lunge stretch",
      "Standing hip flexor stretch",
      "Staggered stance hip flexor stretch"
    ],
    "regions": [
      "hips"
    ],
    "role": "opener",
    "intensity": 1,
    "summary": "Stand in a long stride with the back heel down and shift forward gently, keeping the tailbone tucked.",
    "why": "The no-floor hip flexor stretch. It suits an office, a hotel room or anyone whose knees complain about kneeling. The back heel staying down is what keeps the hip in extension, so a heel that lifts turns it into a calf stretch.",
    "targets": [
      "hip extension",
      "hip flexors"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 30,
      "sets": 2,
      "perSide": true
    },
    "cues": [
      "Long stride. Back heel stays on the floor.",
      "Squeeze the back glute and tuck the tailbone.",
      "Shift forward until you feel it, and stop.",
      "Keep the back leg straight or with a soft knee."
    ],
    "shouldFeel": "A stretch along the front of the back hip.",
    "shouldNotFeel": "Pain in the front knee, a stretch only in the back calf, or a low back pinch.",
    "regressions": [
      {
        "label": "Hold a wall or chair",
        "detail": "Hand on a stable surface.",
        "props": [
          "wall",
          "chair"
        ]
      },
      {
        "label": "Shorter stride",
        "detail": "Less distance, less stretch.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Softer squeeze",
        "detail": "Lighter glute squeeze and a smaller tuck. Less stretch, less to go wrong.",
        "props": [
          "none"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Arm overhead",
        "detail": "Same-side arm up, lean gently away."
      },
      {
        "label": "Longer stride",
        "detail": "Longer step, lower hips."
      },
      {
        "label": "Half-kneeling",
        "detail": "Move to the floor for a stronger version."
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
      "ACE Fitness",
      "Rehab Hero",
      "Dani Winks Flexibility"
    ],
    "evidenceNote": "Keeping the back knee straight leaves the rectus femoris (quad) with slack at the knee, so more of the stretch lands on the one-joint hip flexors, which is closer to the psoas and iliacus. That is anatomical reasoning; it has not been tested against a bent-knee version."
  },
  {
    "id": "banded-hip-flexor-stretch",
    "name": "Banded Hip Flexor Stretch",
    "aka": [
      "Band-distracted hip flexor stretch",
      "Band-assisted couch stretch",
      "Starrett banded hip flexor stretch"
    ],
    "regions": [
      "hips"
    ],
    "role": "main",
    "intensity": 2,
    "summary": "Kneeling with a heavy band looped high on the back thigh and anchored behind you, so it pulls the hip forward as you tuck and squeeze.",
    "why": "Kelly Starrett uses a band to pull the top of the thigh bone forward in the socket, on the theory that this gives the joint room and reduces the pinch at the front. It is more setup than most, so only worth it if plain lunge stretches leave you feeling pinched rather than stretched.",
    "targets": [
      "hip extension",
      "hip flexors",
      "hip joint capsule"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 45,
      "sets": 1,
      "perSide": true
    },
    "cues": [
      "Anchor a heavy band low behind you. Loop it high on the back thigh, close to the crease of the hip.",
      "Step forward until the band pulls the top of the thigh forward and you feel tension.",
      "Squeeze the back glute so the thigh bone stays back against the band.",
      "Lean back slightly or reach the same-side arm overhead if it is comfortable."
    ],
    "shouldFeel": "A deeper, less pinchy stretch at the front of the hip, with your back glute working against the band.",
    "shouldNotFeel": "Sharp pain in the groin, pinching at the front of the hip joint, or the band biting into the skin.",
    "regressions": [
      {
        "label": "Lighter band",
        "detail": "Less tension.",
        "props": [
          "band"
        ]
      },
      {
        "label": "Skip the lean back",
        "detail": "Just tuck, squeeze and hold in half-kneeling.",
        "props": [
          "band",
          "cushion"
        ]
      },
      {
        "label": "Pad the crease",
        "detail": "Fold a towel where the band sits.",
        "props": [
          "towel"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Arm overhead",
        "detail": "Same-side arm up."
      },
      {
        "label": "Lower into a lunge from split stance",
        "detail": "Squeeze, then lower under band tension."
      }
    ],
    "props": [
      "band",
      "cushion"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "knee",
      "groin",
      "hipReplacement"
    ],
    "dailySafe": true,
    "maxHoldSeconds": 90,
    "source": [
      "Kelly Starrett (MobilityWOD / The Ready State)",
      "Squat University (Aaron Horschig)"
    ],
    "evidenceNote": "The claim that a band \"opens the hip joint\" and clears impingement is a theory. I found no trial testing it against the same stretch without a band. Treat it as an option that some people feel more comfortable in, not as a joint-space treatment. If you have a diagnosed hip impingement, get it assessed rather than stretching it with a band."
  },
  {
    "id": "thomas-stretch",
    "name": "Thomas Stretch",
    "aka": [
      "Bed-edge hip flexor stretch",
      "Thomas test position stretch",
      "Supine hip flexor stretch",
      "Lying hip flexor stretch off the bed"
    ],
    "regions": [
      "hips"
    ],
    "role": "opener",
    "intensity": 1,
    "summary": "Lie on your back at the edge of a firm bed or bench, hug one knee to your chest and let the other leg hang off the edge.",
    "why": "The easiest way to stretch the front of the hip without your lower back helping. Hugging the knee flattens your back onto the surface and tucks your pelvis for you, so there is no arching to cheat with. Gravity does the work, so a beginner can do it cold, half asleep, in bed.",
    "targets": [
      "hip extension",
      "psoas",
      "iliacus",
      "hip flexors"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 45,
      "sets": 1,
      "perSide": true
    },
    "cues": [
      "Shuffle to the edge until the thigh of the hanging leg is off the surface.",
      "Hug the other knee to your chest. Keep your lower back flat on the surface.",
      "Let the hanging leg drop. Do not push it down.",
      "Breathe out and let it settle."
    ],
    "shouldFeel": "A stretch down the front of the hip and thigh of the hanging leg.",
    "shouldNotFeel": "Your lower back arching off the bed, or pain in the hip crease at the front.",
    "regressions": [
      {
        "label": "Hug the knee less",
        "detail": "A smaller hug means less tuck. Use it if the hip crease pinches.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Support the foot",
        "detail": "Rest the hanging foot on a stack of cushions or a low stool so the thigh drops only part way.",
        "props": [
          "cushion"
        ]
      },
      {
        "label": "Hold behind the knee",
        "detail": "Pull the hugged knee in with both hands behind the thigh if the hip tries to twist.",
        "props": [
          "none"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Bend the hanging knee",
        "detail": "The strap version, which moves the stretch onto the quad."
      },
      {
        "label": "Contract-relax",
        "detail": "Lift the hanging thigh gently against a strap, 5 seconds, then relax deeper."
      },
      {
        "label": "Slightly longer holds",
        "detail": "Build towards 60 seconds."
      }
    ],
    "props": [
      "none"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "hipReplacement"
    ],
    "dailySafe": true,
    "source": [
      "HSS (Hospital for Special Surgery) physical therapist",
      "Physitrack",
      "Physiopedia (Thomas test)"
    ],
    "evidenceNote": "Psoas major is one of several hip flexors. It runs from the sides of the lower spine (T12 to L5) to the top of the thigh bone, and joins the iliacus (from inside the pelvis) to form the iliopsoas. Rectus femoris, the quad muscle that crosses both hip and knee, and TFL also flex the hip. Any stretch that takes the hip into extension lengthens all of them, so you cannot stretch the psoas alone. The Thomas position is a clinical test before it is a stretch. If your hanging thigh stays above the surface, that points to short one-joint hip flexors (iliopsoas); if your knee straightens as the thigh reaches the surface, it points to the rectus femoris. Some physio sites say this position \"isolates\" the psoas. That is an overstatement: it keeps the lower back from cheating, which is useful, but the same muscle group is still stretched. In a 2004 trial, 33 people with limited hip extension who stretched at home improved over 6 weeks whether the stretching was passive or active, with no difference between the two. The Thomas position was the measuring position, not necessarily the stretch."
  },
  {
    "id": "thomas-stretch-strap-knee-bend",
    "name": "Thomas Stretch with Strap (Knee Bent)",
    "aka": [
      "Supine quad stretch",
      "Thomas test strap stretch",
      "Rectus femoris stretch off the bed"
    ],
    "regions": [
      "hips"
    ],
    "role": "main",
    "intensity": 2,
    "summary": "From the Thomas stretch, loop a strap around the hanging ankle and pull the heel towards your bottom while the thigh stays still.",
    "why": "The rectus femoris is a quad muscle that crosses the hip and the knee. Bend the knee and it is stretched; keep the knee loose and it is not. This version turns the Thomas stretch into a rectus femoris stretch so you can feel the difference between two different \"hip flexor\" tight spots.",
    "targets": [
      "rectus femoris",
      "hip extension",
      "knee flexion"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 30,
      "sets": 2,
      "perSide": true
    },
    "cues": [
      "Get set in the Thomas stretch first, lower back flat.",
      "Loop a strap around the ankle of the hanging leg.",
      "Pull the heel towards your bottom. The thigh stays where it is.",
      "Stop when the front of the thigh is firm."
    ],
    "shouldFeel": "A stretch on the front of the thigh, above the knee, more than the front of the hip.",
    "shouldNotFeel": "Pain in the front of the knee, or a cramp in the back of the thigh.",
    "regressions": [
      {
        "label": "Less knee bend",
        "detail": "Bend the knee only a little.",
        "props": [
          "band"
        ]
      },
      {
        "label": "Hold the foot",
        "detail": "Hold the ankle with your hand if you can reach.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Prop the foot",
        "detail": "Rest the foot on a cushion stack to shorten the range.",
        "props": [
          "cushion",
          "band"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Longer hold",
        "detail": "Build towards 60 seconds."
      },
      {
        "label": "Add a glute squeeze",
        "detail": "Squeeze the hanging-side glute gently."
      }
    ],
    "props": [
      "band"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "knee",
      "hipReplacement"
    ],
    "dailySafe": true,
    "source": [
      "Physitrack",
      "The Prehab Guys (prone rectus femoris stretch)"
    ],
    "evidenceNote": "In the modified Thomas test, the hip angle reflects the length of the iliopsoas and the knee angle reflects the rectus femoris. That is the reason the strap version matters: it shows the difference between the deep hip flexor and the quad. It does not make either stretch better, and there is no trial showing it changes running or lifting outcomes."
  },
  {
    "id": "thomas-contract-relax",
    "name": "Thomas Stretch, Contract-Relax",
    "aka": [
      "Hip flexor PNF stretch",
      "Hold-relax hip flexor stretch",
      "Isometric hip flexor stretch"
    ],
    "regions": [
      "hips"
    ],
    "role": "main",
    "intensity": 2,
    "summary": "In the Thomas position, gently lift the hanging thigh against a strap for 5 seconds, then relax and let it drop a little further. Repeat three times.",
    "why": "A well-used way to get more from a stretch: tense the muscle, then relax it. Clinics use this contract-relax method on the hip flexors from this position, and it gives you a way to work at the stretch instead of just waiting for it.",
    "targets": [
      "hip extension",
      "psoas",
      "iliacus",
      "hip flexors"
    ],
    "dose": {
      "kind": "reps",
      "reps": 3,
      "sets": 1,
      "perSide": true,
      "tempoNote": "5s gentle lift, 10s relax and drop deeper.",
      "secondsPerRep": 15
    },
    "cues": [
      "Set the Thomas stretch. Loop a strap over the hanging thigh, hold the ends in both hands.",
      "Lift the hanging thigh up against the strap at about a third of your effort for 5 seconds.",
      "Relax fully and let the thigh sink lower for 10 seconds.",
      "Keep your lower back flat and keep breathing."
    ],
    "shouldFeel": "A steady lift with no pain, then a clear sink into a bigger stretch.",
    "shouldNotFeel": "A groin pain or cramp during the lift. Back off the effort.",
    "regressions": [
      {
        "label": "Lighter contraction",
        "detail": "Half the effort.",
        "props": [
          "band"
        ]
      },
      {
        "label": "Skip the strap",
        "detail": "Do a plain Thomas stretch.",
        "props": [
          "none"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Harder lift",
        "detail": "Build towards a stronger contraction, still breathing."
      },
      {
        "label": "Add a lean",
        "detail": "The same cycles in the couch stretch."
      }
    ],
    "props": [
      "band"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "hipReplacement",
      "groin",
      "bloodPressure"
    ],
    "dailySafe": true,
    "source": [
      "Physiopedia (Proprioceptive Neuromuscular Facilitation)",
      "Physitrack"
    ],
    "evidenceNote": "In clinics this is done with a therapist holding the leg, contracting for about 6 seconds at high effort and then stretching statically. Doing it alone with a strap is a home adaptation. PNF reliably increases range in the short term, but mostly because you tolerate more stretch, not because the muscle physically lengthens or \"releases\". The 2004 trial that compared active and passive home stretching for hip flexors found both improved range over 6 weeks and neither was better."
  },
  {
    "id": "side-lying-hip-flexor-stretch",
    "name": "Side-Lying Hip Flexor Stretch",
    "aka": [
      "Side-lying quad stretch",
      "Side-lying hip flexor and quad stretch"
    ],
    "regions": [
      "hips"
    ],
    "role": "main",
    "intensity": 1,
    "summary": "Lie on your side with knees bent, pull the top foot back towards your bottom while keeping your pelvis tucked.",
    "why": "A stretch for the man who cannot kneel, cannot lie at a bed edge, or hates lunges. The floor holds you up, so your lower back is not asked to work. It stretches the front of the hip and thigh together.",
    "targets": [
      "hip extension",
      "rectus femoris",
      "hip flexors"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 30,
      "sets": 2,
      "perSide": true
    },
    "cues": [
      "Lie on your side, knees bent about 90 degrees, in line with your hips.",
      "Hold the top ankle and bring it back behind you.",
      "Keep the pelvis tucked under, glute lightly squeezed, no back arch.",
      "The thigh moves back only as far as the pelvis stays still."
    ],
    "shouldFeel": "A stretch on the front of the top thigh and hip.",
    "shouldNotFeel": "Your lower back arching, or cramping in the back of the thigh.",
    "regressions": [
      {
        "label": "Towel loop",
        "detail": "Loop a towel around the ankle if you cannot reach.",
        "props": [
          "towel"
        ]
      },
      {
        "label": "Pillow under the head",
        "detail": "Keep your neck neutral.",
        "props": [
          "cushion"
        ]
      },
      {
        "label": "Shorter range",
        "detail": "Bring the thigh back only slightly.",
        "props": [
          "none"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Straighten the thigh line",
        "detail": "Bring the top thigh in line with the bottom thigh, then just behind it."
      },
      {
        "label": "Glute squeeze",
        "detail": "Squeeze the top glute for 5 seconds, then relax deeper."
      }
    ],
    "props": [
      "none"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "knee"
    ],
    "dailySafe": true,
    "source": [
      "HSS (Hospital for Special Surgery) physical therapist",
      "Healthline"
    ],
    "evidenceNote": "Keeping the pelvis tucked is the entire point. The stretch is mostly rectus femoris (the quad), because the knee is bent, so this is a quad stretch more than a psoas one. That is fine, but do not call it a psoas stretch."
  },
  {
    "id": "prone-knee-bend-quad-stretch",
    "name": "Prone Knee Bend",
    "aka": [
      "Prone rectus femoris stretch",
      "Lying quad stretch",
      "Prone quad stretch"
    ],
    "regions": [
      "hips"
    ],
    "role": "main",
    "intensity": 2,
    "summary": "Lie face down, bend one knee and pull the heel towards your bottom without letting your hip lift.",
    "why": "The stretch that shows you what rectus femoris feels like, on its own. Because you are face down, the hip is already straight, so pulling the heel back stretches the quad across both the hip and the knee. It is a good comparison against the lunge stretches, which mix all the hip flexors together.",
    "targets": [
      "rectus femoris",
      "knee flexion",
      "hip extension"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 30,
      "sets": 2,
      "perSide": true
    },
    "cues": [
      "Lie face down, forehead on your hands. A towel under the hips helps.",
      "Bend the knee and take the ankle in your hand or a strap.",
      "Draw the heel towards your bottom without the hip rising.",
      "Squeeze the glute lightly to keep the pelvis flat."
    ],
    "shouldFeel": "A stretch along the front of the thigh, from the knee to the hip.",
    "shouldNotFeel": "A cramp in the hamstring, pain on the front of the knee, or a low back pinch.",
    "regressions": [
      {
        "label": "Use a strap",
        "detail": "Loop a strap or towel around the ankle.",
        "props": [
          "band",
          "towel"
        ]
      },
      {
        "label": "Towel under the hips",
        "detail": "Rolled towel under the hip bones to remove the arch.",
        "props": [
          "towel"
        ]
      },
      {
        "label": "Less bend",
        "detail": "Only pull the heel part-way.",
        "props": [
          "none"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Glute squeeze",
        "detail": "Squeeze 5 seconds, relax and pull a little further."
      },
      {
        "label": "Thomas stretch with strap",
        "detail": "The same idea lying on your back at a bed edge."
      }
    ],
    "props": [
      "none"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "knee"
    ],
    "dailySafe": true,
    "source": [
      "The Prehab Guys"
    ],
    "evidenceNote": "A quad stretch, not a psoas stretch. The rectus femoris is a two-joint muscle, so it needs both the hip extended and the knee bent to be stretched. That is why a bent-knee kneeling lunge feels mostly like a quad stretch, and why the Thomas stretch keeps the hanging knee loose when the aim is the deeper hip flexors."
  },
  {
    "id": "bridge-hip-flexor-stretch",
    "name": "Glute Bridge with Pelvic Tuck",
    "aka": [
      "Bridge pose (hip flexor lengthening)",
      "Setu bandhasana",
      "Glute bridge hold"
    ],
    "regions": [
      "hips"
    ],
    "role": "opener",
    "intensity": 1,
    "summary": "Lie on your back, tuck your pelvis, then lift your hips by squeezing your glutes until your thighs line up with your torso. Hold.",
    "why": "A way to use hip extension rather than just stretch it. The glutes drive the hips up, which takes the front of the hip into a gentle extension. It is also a fair warm-up for the glutes before lifting.",
    "targets": [
      "hip extension",
      "gluteus maximus",
      "hip flexors"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 20,
      "sets": 2,
      "perSide": false
    },
    "cues": [
      "Feet flat, hip-width, heels close to your bottom.",
      "Tuck your pelvis first, then squeeze the glutes to lift.",
      "Stop when your thighs and torso make one line. Do not arch higher.",
      "Ribs down, breathe."
    ],
    "shouldFeel": "The glutes doing the work, and a gentle stretch at the front of the hips at the top.",
    "shouldNotFeel": "Hamstring cramps, or your lower back doing the lifting. If so, tuck harder and lift lower.",
    "regressions": [
      {
        "label": "Shorter lift",
        "detail": "Lift only a few centimetres.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Feet closer to the bottom",
        "detail": "Reduces hamstring cramping.",
        "props": [
          "none"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Longer hold",
        "detail": "Build towards 30 seconds."
      },
      {
        "label": "One leg",
        "detail": "Single-leg version."
      }
    ],
    "props": [
      "none"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [],
    "dailySafe": true,
    "source": [
      "Yoga International",
      "Common physiotherapy exercise"
    ],
    "evidenceNote": "Yoga International explains that the iliopsoas lengthens when the glutes drive the hips into extension, as in bridge. That is true in principle, but the stretch at the top of a bridge is small: the hips reach about neutral, well short of what a lunge or couch stretch asks. Treat this as glute activation and practice at using your hip range, not as a hip flexor stretch. The popular claim that the psoas is chronically tight and the glutes are chronically asleep from sitting is repeated widely and is not well tested."
  },
  {
    "id": "seated-hip-flexor-lift-off",
    "name": "Seated Hip Flexor Lift-Off",
    "aka": [
      "Seated isometric hip flexion",
      "Seated knee lift",
      "Hip flexor lift-off"
    ],
    "regions": [
      "hips"
    ],
    "role": "load",
    "intensity": 1,
    "summary": "Sit tall, lift one knee as high as you can without slumping, and hold it there. Press down with your hands to make it harder.",
    "why": "Not a stretch. The hip flexors are also a strength problem: lifting the knee high is something few men train. If your hip flexors feel tight, it may be that they are tired or weak at the top of the range rather than short. This trains the top end of the range.",
    "targets": [
      "psoas",
      "iliacus",
      "hip flexion strength"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 20,
      "sets": 2,
      "perSide": true
    },
    "cues": [
      "Sit tall on the front of a chair, spine long.",
      "Lift one knee as high as you can without leaning back.",
      "Hold it there. Press down lightly with both hands if you want more.",
      "Ease off if the groin pinches."
    ],
    "shouldFeel": "The top of the thigh and the front of the hip working, and possibly the lower abs.",
    "shouldNotFeel": "A pinch at the front of the hip, a sharp pain in the groin, or the lower back slumping.",
    "regressions": [
      {
        "label": "Lift, no hand pressure",
        "detail": "Just hold the knee off the seat.",
        "props": [
          "chair"
        ]
      },
      {
        "label": "Shorter hold",
        "detail": "10 seconds at a time.",
        "props": [
          "chair"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Hand pressure",
        "detail": "Press down with both hands at 30 to 50 percent."
      },
      {
        "label": "Longer hold",
        "detail": "Build towards 30 seconds."
      }
    ],
    "props": [
      "chair"
    ],
    "officeFriendly": true,
    "barefootOnly": false,
    "contraindications": [
      "hipReplacement"
    ],
    "dailySafe": true,
    "source": [
      "Rehab Hero",
      "Coast Performance Rehab"
    ],
    "evidenceNote": "Psoas major is one of several hip flexors. It runs from the sides of the lower spine (T12 to L5) to the top of the thigh bone, and joins the iliacus (from inside the pelvis) to form the iliopsoas. Rectus femoris, the quad muscle that crosses both hip and knee, and TFL also flex the hip. Any stretch that takes the hip into extension lengthens all of them, so you cannot stretch the psoas alone. Two things people repeat here need correcting. First, that a tight psoas causes back pain: the small study I found (70 students) found no link between iliopsoas length and low back pain, and most participants tested as normal length. Second, that a psoas can be released with the right stretch and your posture will then be fixed: not supported. The fair reason to train the hip flexors is that they are a strength weak point at the top of the range, and that is what this does. Isometric holds at different effort levels appear on rehab sites, but there is no trial showing this specific drill changes back pain."
  },
  {
    "id": "classic-pigeon",
    "name": "Classic Pigeon",
    "aka": [
      "Half pigeon",
      "Pigeon pose",
      "Eka Pada Rajakapotasana"
    ],
    "regions": [
      "hips"
    ],
    "role": "main",
    "intensity": 3,
    "summary": "From hands and knees, bring one knee towards the same-side wrist, slide the other leg straight back, and sit tall with the hips level.",
    "why": "The full pigeon works the outer hip and the front of the back hip at the same time, which is why it is the yoga hip opener people ask for. It is also the position where knees get hurt, so it needs more care than the 90/90 lean, which is the lower-demand entry and the one this app already has.",
    "targets": [
      "hip external rotation",
      "piriformis",
      "glutes",
      "hip extension (back leg)"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 45,
      "sets": 1,
      "perSide": true
    },
    "cues": [
      "Cushion under the front hip until the pelvis sits level.",
      "Point the front toes but flex them back to keep the ankle straight.",
      "Slide the back leg straight behind, kneecap facing the floor.",
      "Sit tall on your hands. If your hips tilt to one side, prop more."
    ],
    "shouldFeel": "A deep stretch in the outer hip and glute of the front leg, and a stretch across the front of the back hip.",
    "shouldNotFeel": "Any twisting or pinching pain at the front knee, sharp pain on the inside of the knee, or shooting or tingling pain down the back of the leg. Come out slowly if you feel any.",
    "regressions": [
      {
        "label": "Bolster under the front hip",
        "detail": "Prop so the pelvis is level and the front knee can sit lower.",
        "props": [
          "cushion"
        ]
      },
      {
        "label": "Front heel closer to the groin",
        "detail": "Draw the front foot in so the knee angle is more closed. It asks the hip for less rotation.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Reclined pigeon",
        "detail": "The floor holds you up and the knee is not loaded.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Seated figure-4",
        "detail": "Chair version.",
        "props": [
          "chair"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Fold forward",
        "detail": "Sleeping pigeon, forearms down."
      },
      {
        "label": "Front shin parallel to the mat's edge",
        "detail": "Only once the knee has zero pain and the hips stay level."
      }
    ],
    "props": [
      "cushion"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "knee",
      "hipReplacement",
      "sciatica"
    ],
    "dailySafe": true,
    "source": [
      "Yoga Journal",
      "YogaUOnline",
      "Yoga International"
    ],
    "evidenceNote": "The safety rule that matters: in pigeon the front hip has to rotate outward far enough for the shin to lie across the mat. If the hip runs out of rotation, the twist goes into the front knee, and the knee tolerates twisting poorly. Teachers describe a front hip that needs about 90 degrees of outward rotation, and most people fall short. The claim that pigeon \"releases stored emotions\" has no evidence behind it, and the claim that it treats sciatica is not well supported either. Pigeon combines deep hip flexion, outward rotation and knee bend, which is exactly what hip replacement precautions restrict, so it is off the list after a replacement unless your surgeon has cleared it. Yoga sources suggest reclining or seated versions until the joint has recovered most of its range."
  },
  {
    "id": "sleeping-pigeon",
    "name": "Sleeping Pigeon",
    "aka": [
      "Folded pigeon",
      "Sleeping swan",
      "Forward-folding pigeon"
    ],
    "regions": [
      "hips"
    ],
    "role": "main",
    "intensity": 3,
    "summary": "From classic pigeon, fold forward over the front leg and rest your forearms or forehead on the floor.",
    "why": "The longer, quieter version. Folding forward loads the outer hip harder and lets you stay a while, which is where the stretch builds. It is also the version that adds your torso weight to the front knee, which is the risk.",
    "targets": [
      "hip external rotation",
      "piriformis",
      "glutes",
      "lower back"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 60,
      "sets": 1,
      "perSide": true
    },
    "cues": [
      "Get set in pigeon first, cushion under the front hip.",
      "Walk the hands forward and lower the chest over the front shin.",
      "Forearms or forehead on the floor or a bolster. Keep the pelvis level.",
      "Breathe out and let the hips settle. Come up slowly."
    ],
    "shouldFeel": "A heavy, long stretch in the outer hip and glute of the front leg.",
    "shouldNotFeel": "Any pinching or twist at the front knee, sacrum or low back pain, or tingling down the leg.",
    "regressions": [
      {
        "label": "Bolster under the chest and hips",
        "detail": "Prop the front hip, thigh and knee, and rest the chest on a second cushion.",
        "props": [
          "cushion"
        ]
      },
      {
        "label": "Stay upright",
        "detail": "Return to classic pigeon on the hands.",
        "props": [
          "cushion"
        ]
      },
      {
        "label": "Figure-4 lying down",
        "detail": "Reclined version.",
        "props": [
          "none"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Longer hold",
        "detail": "Up to 90 seconds once the knee is quiet."
      },
      {
        "label": "Arms forward, elbows off the floor",
        "detail": "Deepens the outer-hip stretch."
      }
    ],
    "props": [
      "cushion"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "knee",
      "hipReplacement",
      "sciatica",
      "backPain"
    ],
    "dailySafe": true,
    "maxHoldSeconds": 90,
    "source": [
      "Yoga Journal",
      "YogaRenew",
      "Yoga International"
    ],
    "evidenceNote": "The safety rule that matters: in pigeon the front hip has to rotate outward far enough for the shin to lie across the mat. If the hip runs out of rotation, the twist goes into the front knee, and the knee tolerates twisting poorly. Teachers describe a front hip that needs about 90 degrees of outward rotation, and most people fall short. Yoga Journal's own teaching notes warn that folding forward without safe alignment puts a lot of stress on the knee and sacrum, because your torso weight lands on the front leg. Higher props under the front thigh make it safer. There is no evidence that a long hold in this position does anything beyond a temporary rise in range and a settled feeling."
  },
  {
    "id": "supported-pigeon",
    "name": "Pigeon on a Bolster",
    "aka": [
      "Propped pigeon",
      "Supported pigeon",
      "Restorative pigeon"
    ],
    "regions": [
      "hips"
    ],
    "role": "main",
    "intensity": 2,
    "summary": "Pigeon with a bolster or firm cushion under the front hip and thigh, so the pelvis stays level and the knee sits lower.",
    "why": "The version most men should actually use. A prop under the front hip gets the pelvis level, lets the knee sit at an easier angle and lowers the demand on the joints. It gives a similar stretch to classic pigeon with less risk to the knee.",
    "targets": [
      "hip external rotation",
      "piriformis",
      "glutes"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 45,
      "sets": 1,
      "perSide": true
    },
    "cues": [
      "Slide the bolster under the buttock and the back of the front thigh.",
      "Adjust the height until the pelvis feels level, not tipped to one side.",
      "Hands down, chest tall. Then fold forward if it feels quiet.",
      "Different height for each side. One hip is usually stiffer."
    ],
    "shouldFeel": "A broad stretch in the outer hip of the front leg, easier to relax into than the floor version.",
    "shouldNotFeel": "Any twist or pinch in the front knee, or pain in the groin.",
    "regressions": [
      {
        "label": "Higher prop",
        "detail": "A firmer or taller support under the front hip.",
        "props": [
          "cushion",
          "block"
        ]
      },
      {
        "label": "Front heel in",
        "detail": "Bring the front foot closer to the groin.",
        "props": [
          "cushion"
        ]
      },
      {
        "label": "Reclined figure-4",
        "detail": "Lying on your back.",
        "props": [
          "none"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Lower the prop",
        "detail": "Step down one height at a time."
      },
      {
        "label": "Fold forward over the prop",
        "detail": "Sleeping pigeon, supported."
      }
    ],
    "props": [
      "cushion"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "knee",
      "hipReplacement",
      "sciatica"
    ],
    "dailySafe": true,
    "source": [
      "YogaUOnline",
      "Yoga Journal"
    ],
    "evidenceNote": "The safety rule that matters: in pigeon the front hip has to rotate outward far enough for the shin to lie across the mat. If the hip runs out of rotation, the twist goes into the front knee, and the knee tolerates twisting poorly. Teachers describe a front hip that needs about 90 degrees of outward rotation, and most people fall short. A prop lets the pelvis stay level and the shin lie closer to parallel with less twist in the knee. Yoga Journal's advice is that the higher you prop the front thigh and hip, the safer the front knee. Props help; they do not remove the requirement that the hip actually rotates."
  },
  {
    "id": "reclined-pigeon",
    "name": "Reclined Pigeon",
    "aka": [
      "Figure-4 stretch",
      "Supine figure four",
      "Supine piriformis stretch",
      "Reclining pigeon",
      "Supta Kapotasana"
    ],
    "regions": [
      "hips"
    ],
    "role": "main",
    "intensity": 1,
    "summary": "Lie on your back, cross one ankle over the opposite thigh, and pull the uncrossed leg towards your chest.",
    "why": "The pigeon stretch with the floor holding you up. Your knee is not loaded, your back is supported, and you control the amount of stretch with your hands. It stretches the same outer hip and glutes as pigeon and is where a man with stiff hips or a cranky knee should start.",
    "targets": [
      "hip external rotation",
      "piriformis",
      "glutes"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 45,
      "sets": 2,
      "perSide": true
    },
    "cues": [
      "Lie on your back, both feet flat on the floor.",
      "Cross the ankle just above the opposite knee and flex the crossed foot.",
      "Reach through, hold behind the lower thigh, and draw it towards your chest.",
      "Keep the head and shoulders down. Do not yank."
    ],
    "shouldFeel": "A stretch deep in the outer hip and buttock of the crossed leg.",
    "shouldNotFeel": "Pain in the knee, a pinch at the front of the hip, or shooting or tingling pain down the leg.",
    "regressions": [
      {
        "label": "Foot stays on the floor",
        "detail": "Cross the leg but leave the supporting foot planted.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Towel behind the thigh",
        "detail": "Loop a towel if you cannot reach.",
        "props": [
          "towel"
        ]
      },
      {
        "label": "Crossed foot on the wall",
        "detail": "See the wall figure-4.",
        "props": [
          "wall"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Press the crossed knee away",
        "detail": "Gently, with the elbow or hand."
      },
      {
        "label": "Draw the supporting knee closer",
        "detail": "More hip flexion, more stretch."
      },
      {
        "label": "Longer hold",
        "detail": "Build towards 60 seconds."
      }
    ],
    "props": [
      "none"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "hipReplacement"
    ],
    "dailySafe": true,
    "source": [
      "Yoga Journal",
      "YogaUOnline",
      "Physitrack",
      "Hinge Health"
    ],
    "evidenceNote": "Yoga teachers recommend reclined pigeon for people with knee issues because it stretches the outer hip without loading the knee, and it is the recommended version after hip or knee replacement once about 70 percent of range has returned, with surgeon approval. For piriformis and sciatica claims: many sites say this stretch relieves sciatica. The evidence for that is limited. If the stretch sends tingling or shooting pain down your leg, it is the wrong stretch for you. It still stretches the deep outer hip and glutes, as a stretch, and it moves the hip through flexion and outward rotation."
  },
  {
    "id": "seated-figure-4",
    "name": "Seated Figure-4",
    "aka": [
      "Chair pigeon",
      "Seated pigeon",
      "Seated piriformis stretch",
      "Chair figure four"
    ],
    "regions": [
      "hips"
    ],
    "role": "opener",
    "intensity": 1,
    "summary": "Sit tall on a chair, cross one ankle over the opposite knee, and hinge forward from the hips.",
    "why": "The pigeon stretch you can do at a desk. If you sit all day, it is the easiest way to take the outer hip through a bit of outward rotation without touching the floor. It also works as a hip check: if the crossed knee will not drop, you know which side is stiffer.",
    "targets": [
      "hip external rotation",
      "piriformis",
      "glutes"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 45,
      "sets": 1,
      "perSide": true
    },
    "cues": [
      "Sit tall, both feet flat, near the front of the chair.",
      "Cross the ankle over the opposite thigh, just above the knee.",
      "Hinge forward from the hips with a long back until you feel it.",
      "Let the knee open by itself. Rest a hand on it lightly if you want."
    ],
    "shouldFeel": "A stretch in the outer hip and buttock of the crossed leg.",
    "shouldNotFeel": "Pain in the knee or a pinch at the front of the hip.",
    "regressions": [
      {
        "label": "Sit tall only",
        "detail": "Cross the leg but do not lean forward.",
        "props": [
          "chair"
        ]
      },
      {
        "label": "Foot stays on the floor",
        "detail": "Rest the ankle on the shin, not the thigh.",
        "props": [
          "chair"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Hinge further",
        "detail": "Keep the back long as the chest lowers."
      },
      {
        "label": "Reclined figure-4",
        "detail": "Move to the floor."
      }
    ],
    "props": [
      "chair"
    ],
    "officeFriendly": true,
    "barefootOnly": false,
    "contraindications": [
      "hipReplacement"
    ],
    "dailySafe": true,
    "source": [
      "YogaUOnline",
      "Pelvic PT",
      "pt2 Austin"
    ],
    "evidenceNote": "Yoga teachers recommend the seated version for people with limited hip, hamstring and back mobility, since the range is smaller and the joints are supported. Crossing the legs at the knee is on the precaution list for many hip replacements, so leave it out unless your surgeon has cleared it."
  },
  {
    "id": "wall-figure-4",
    "name": "Wall Figure-4",
    "aka": [
      "Figure-4 with feet on the wall",
      "Supine piriformis stretch against the wall",
      "Wall-assisted figure four"
    ],
    "regions": [
      "hips"
    ],
    "role": "main",
    "intensity": 2,
    "summary": "Lie on your back with your hips near a wall, cross one ankle over the opposite knee, and let the wall hold your supporting foot.",
    "why": "The wall carries your leg so you do not have to pull on it. That leaves the neck and shoulders relaxed and gives you a stretch you can hold, rather than one you have to work at. Good for anyone who finds the reclined pigeon hard on the arms or neck.",
    "targets": [
      "hip external rotation",
      "piriformis",
      "glutes"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 45,
      "sets": 1,
      "perSide": true
    },
    "cues": [
      "Lie with the hips about a foot from the wall and both feet on it, knees bent.",
      "Cross one ankle over the opposite thigh.",
      "Walk the supporting foot down the wall to deepen. Stop where it feels firm.",
      "Keep the hips flat on the floor. Do not press the crossed knee."
    ],
    "shouldFeel": "A steady stretch in the outer hip of the crossed leg with the neck and arms relaxed.",
    "shouldNotFeel": "Knee pain, a pinch at the front of the hip, or any nerve pain down the leg.",
    "regressions": [
      {
        "label": "Foot higher on the wall",
        "detail": "Less hip flexion.",
        "props": [
          "wall"
        ]
      },
      {
        "label": "Hips farther from the wall",
        "detail": "Less range.",
        "props": [
          "wall"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Foot lower on the wall",
        "detail": "More flexion."
      },
      {
        "label": "Gentle press on the crossed knee",
        "detail": "Small pressure with the hand."
      }
    ],
    "props": [
      "wall"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "hipReplacement"
    ],
    "dailySafe": true,
    "source": [
      "Physitrack"
    ],
    "evidenceNote": "The stretch is the same as the reclined figure-4. The wall's value is comfort, not a different tissue effect. Physitrack lists it as a figure-4 piriformis/glute stretch performed supine with the foot on the wall."
  },
  {
    "id": "prying-goblet-squat",
    "name": "Prying Squat",
    "aka": [
      "Goblet squat pry",
      "Elbow-prying deep squat",
      "Prying kettlebell squat"
    ],
    "regions": [
      "hips"
    ],
    "role": "main",
    "intensity": 2,
    "summary": "Sit into a deep squat with your palms together at your chest and press your elbows into your knees to push them out.",
    "why": "The deep squat hold with a job to do. Your elbows push the knees apart, which opens the inner thighs and hips far further than just sitting. Coaches like Aaron Horschig use it as a hip mobility drill you can do before squatting.",
    "targets": [
      "hip flexion",
      "hip external rotation",
      "adductors",
      "ankle dorsiflexion"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 45,
      "sets": 2,
      "perSide": false
    },
    "cues": [
      "Feet flat, toes turned out slightly.",
      "Sit down, chest tall, palms together at your chest.",
      "Press the elbows into the inside of the knees and push the knees out.",
      "Keep the whole foot planted."
    ],
    "shouldFeel": "A broad stretch through the inner thighs, groin and the fronts of the hips.",
    "shouldNotFeel": "Knee pain, heels lifting, or pinching at the front of the hip.",
    "regressions": [
      {
        "label": "Hold a doorframe",
        "detail": "Hold onto something solid in front of you.",
        "props": [
          "doorframe"
        ]
      },
      {
        "label": "Heels on a wedge",
        "detail": "Prop the heels on a book or plate.",
        "props": [
          "wedge"
        ]
      },
      {
        "label": "Sit on a block",
        "detail": "Only go as low as a block.",
        "props": [
          "block"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Squeeze then sink",
        "detail": "Squeeze the glutes for a few seconds, then relax and sink."
      },
      {
        "label": "Hold a light weight",
        "detail": "Goblet-style at the chest."
      },
      {
        "label": "Hold longer",
        "detail": "Build towards a minute."
      }
    ],
    "props": [
      "weight"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "knee",
      "hipReplacement",
      "balance"
    ],
    "dailySafe": true,
    "source": [
      "Squat University (Aaron Horschig)"
    ],
    "evidenceNote": "The deep squat hold is already in the app. This adds the elbow pry, a coaching tool that raises the stretch in the hips. There is no research on it specifically. Contract-relax, squeezing the glutes for a few seconds before sinking, is described by Squat University but has no direct trial in the squat."
  },
  {
    "id": "happy-baby",
    "name": "Happy Baby",
    "aka": [
      "Ananda Balasana",
      "Happy Baby pose"
    ],
    "regions": [
      "hips"
    ],
    "role": "rest",
    "intensity": 1,
    "summary": "Lie on your back, hold the outsides of your feet and let your knees open out towards your armpits.",
    "why": "A calm position for a closing stretch. Gravity opens the inner thighs and groin without effort, and your back is supported on the floor. It is not a psoas stretch; it is the opposite position, with the hips bent up.",
    "targets": [
      "hip flexion",
      "adductors",
      "hip external rotation"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 45,
      "sets": 1,
      "perSide": false
    },
    "cues": [
      "Lie on your back and bend the knees into the belly.",
      "Hold the outsides of the feet, or the shins.",
      "Let the knees open wider than the torso. Ankles stay above the knees.",
      "Breathe slowly."
    ],
    "shouldFeel": "A gentle stretch through the inner thighs and hips, and a settled feeling.",
    "shouldNotFeel": "Knee pain, a pinch at the front of the hip, or neck strain from lifting the head.",
    "regressions": [
      {
        "label": "Hold the shins",
        "detail": "Take the shins or behind the knees if you cannot reach the feet.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Strap around the feet",
        "detail": "Loop a strap or belt.",
        "props": [
          "towel",
          "band"
        ]
      },
      {
        "label": "Head on a cushion",
        "detail": "Keep the neck neutral.",
        "props": [
          "cushion"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Rock gently side to side",
        "detail": "Small slow rocks."
      },
      {
        "label": "Pull the knees lower",
        "detail": "Bring the knees towards the floor beside the ribs."
      }
    ],
    "props": [
      "none"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "knee",
      "hipReplacement"
    ],
    "dailySafe": true,
    "source": [
      "Yoga Journal",
      "Healthline"
    ],
    "evidenceNote": "Yoga sites claim it \"releases the lower back\", calms the nervous system or relieves stress. Slow breathing in a comfortable lying position will tend to calm most people, but the position itself is a passive inner-thigh and hip stretch and nothing more. Hip replacement patients should avoid it unless cleared: it brings the thighs closer to the torso than the usual limit."
  }
];
