import type { Exercise } from '../types.ts';

/**
 * hamstrings: imported from web research, then reviewed by hand. This file is the source of
 * truth now - edit it freely. The research briefs' review-only fields (pose hints, URLs,
 * evidence grades) were stripped on import.
 *
 * Same editorial rule as the core library: where a source offered a mechanism, we state a
 * feeling and a behaviour instead, and `evidenceNote` corrects any claim that did not survive
 * checking. Evidence for most stretching is weak; the notes say so where it matters.
 */
export const HAMSTRINGS: Exercise[] = [
  {
    "id": "strap-hamstring-stretch",
    "name": "Strap Hamstring Stretch",
    "aka": [
      "Supine hamstring stretch",
      "Towel hamstring stretch",
      "Supta Padangusthasana",
      "Reclined hand-to-big-toe pose",
      "Doorway hamstring stretch",
      "Doorframe hamstring stretch",
      "Wall hamstring stretch",
      "Lying doorframe hamstring stretch",
      "Legs up the wall",
      "Viparita Karani (wall version)",
      "Wall hamstring rest",
      "Hold-relax",
      "PNF hamstring stretch",
      "Isometric hamstring stretch",
      "Hamstring PAILs and RAILs"
    ],
    "regions": [
      "hamstrings"
    ],
    "role": "main",
    "intensity": 1,
    "summary": "Lie on your back, loop a towel or strap round one foot, and use it to lift the straight leg until you feel a firm pull behind the thigh.",
    "why": "The floor holds your lower back flat and the strap does the lifting, so the only thing left working is the stretch. It is the cleanest place to find out how far each leg goes with your spine out of the picture, and to notice which side is tighter.",
    "targets": [
      "hamstrings",
      "hip flexion range"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 30,
      "sets": 2,
      "perSide": true
    },
    "cues": [
      "Keep the down leg long and heavy on the floor.",
      "Keep the raised knee straight but not locked.",
      "Ease the strap in until it is a firm pull, then stop and breathe out."
    ],
    "shouldFeel": "A firm, even pull through the back of the thigh, usually strongest just under the sit bone or behind the knee.",
    "shouldNotFeel": "A thin, wiry line, tingling or numbness running down the calf or foot, or the hip of the down leg lifting off the floor.",
    "regressions": [
      {
        "label": "Soft knee",
        "detail": "Let the raised knee bend a little. It shifts the stretch up into the belly of the muscle and off the back of the knee.",
        "props": [
          "towel"
        ]
      },
      {
        "label": "Bend the down leg",
        "detail": "Foot flat on the floor, so your lower back does not get pulled into it.",
        "props": [
          "towel"
        ]
      },
      {
        "label": "Strap round the calf",
        "detail": "Loop it behind the calf rather than the foot so the ankle and calf drop out of it.",
        "props": [
          "towel"
        ]
      },
      {
        "label": "Doorframe, no strap",
        "detail": "Lie with the hips at a doorway, one leg through the opening, and walk the other heel up the frame until the knee is straight.",
        "props": [
          "doorframe"
        ]
      },
      {
        "label": "Both legs up a wall",
        "detail": "Scoot the hips to a wall and rest both legs straight up it for two minutes. Further from the wall or bent knees for less; hips to the wall for more.",
        "props": [
          "wall"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Flatten the down leg",
        "detail": "Press the back of the down knee to the floor the whole way through."
      },
      {
        "label": "Add a contract-relax",
        "detail": "Push gently into the strap for about 6 seconds, relax, then take up the slack (see Contract-Relax Hamstring Stretch)."
      },
      {
        "label": "Hips closer to the frame",
        "detail": "Scoot the hips closer to the frame for a stronger stretch."
      },
      {
        "label": "Contract-relax rounds",
        "detail": "Push the leg gently into the strap for a few seconds, relax, take up the slack, and repeat for three rounds."
      }
    ],
    "props": [
      "towel"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "sciatica"
    ],
    "dailySafe": true,
    "source": [
      "Physiotherapy patient guides (UMass Memorial Health, VA Veterans Health Library)",
      "Hatha yoga: Supta Padangusthasana"
    ],
    "evidenceNote": "The popular story is that this physically lengthens the muscle. It mostly does not. In a small 4-week daily hamstring stretching trial (14 people; Halbertsma and Goeken 1994) the leg went higher but the muscle was no longer and no less stiff; people simply tolerated a bigger pull. A 2025 meta-analysis of 65 trials found a similar pattern: after weeks of stretching, tolerance to stretch went up and muscle fibre length did not change, although overall stiffness fell slightly. That is still useful, because range you are comfortable using is range you can use, but do not expect the tissue to change shape. On duration, Bandy, Irion and Briggler (1997, 93 adults) found 30 seconds worked and 60 seconds was no better; a recent dose-response meta-analysis of 84 trials found one 1.5-minute session did not beat measurement noise, whereas repeated stretching over a week or more, around 70 minutes in total, more often did. So: 30-second holds, done regularly, for weeks."
  },
  {
    "id": "seated-chair-hamstring-stretch",
    "name": "Seated Chair Hamstring Stretch",
    "aka": [
      "Seated hamstring stretch",
      "Sitting hamstring stretch",
      "Chair hamstring stretch"
    ],
    "regions": [
      "hamstrings"
    ],
    "role": "opener",
    "intensity": 1,
    "summary": "Sit on the edge of a chair, one leg straight with the heel on the floor and toes up, and hinge forward from the hips.",
    "why": "The desk-friendly version. It takes 60 seconds, needs a chair and nothing else, and it is safe to do cold. Because you are sitting on the front of your sit bones it is also an honest test of whether you can tip the pelvis forward or just round the spine.",
    "targets": [
      "hamstrings",
      "pelvic tilt awareness"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 30,
      "sets": 2,
      "perSide": true
    },
    "cues": [
      "Sit tall on the front edge of the seat.",
      "Hinge from your hips, keeping your chest long. Do not fold from your waist.",
      "Stop when you feel a pull; going further does not add anything."
    ],
    "shouldFeel": "A mild to moderate pull in the back of the thigh of the straight leg.",
    "shouldNotFeel": "Rounding or pinching in the lower back, pain behind the knee, or tingling down the leg.",
    "regressions": [
      {
        "label": "Bend the knee",
        "detail": "Heel further in, knee bent 30 degrees or so.",
        "props": [
          "chair"
        ]
      },
      {
        "label": "Hands on the thigh",
        "detail": "Push down through your hands to keep your back long.",
        "props": [
          "chair"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Toes up harder",
        "detail": "Pull the toes towards you, which adds the calf. Back off if it turns wiry."
      },
      {
        "label": "Sit lower",
        "detail": "Move to a lower seat or a step, so the hip has to work through more range."
      }
    ],
    "props": [
      "chair"
    ],
    "officeFriendly": true,
    "barefootOnly": false,
    "contraindications": [
      "sciatica"
    ],
    "dailySafe": true,
    "source": [
      "Physiotherapy patient guides (Cigna/Healthwise, UMass Memorial Health, NewYork-Presbyterian)"
    ],
    "evidenceNote": "This is the shape of the sit-and-reach test, and reaching your toes is a poor way to keep score. A meta-analysis of 34 studies (Mayorga-Vega 2014) found sit-and-reach tests have only moderate validity for hamstring length (correlations of roughly 0.46 to 0.67) and low validity for the low back (about 0.16 to 0.35). Arm length, leg length and how much you round your spine all change the number without any change in the hamstring. Use a straight-leg raise or the Active Knee Extension instead, and treat any single reading as approximate."
  },
  {
    "id": "standing-heel-up-hamstring-stretch",
    "name": "Standing Heel-Up Hamstring Stretch",
    "aka": [
      "Elevated-foot hamstring stretch",
      "Foot-on-step hamstring stretch",
      "Foot-on-chair hamstring stretch",
      "Pyramid pose",
      "Parsvottanasana",
      "Intense side stretch",
      "Split-stance forward fold"
    ],
    "regions": [
      "hamstrings"
    ],
    "role": "main",
    "intensity": 2,
    "summary": "Stand in front of a low step, put one heel on it with the knee straight, and hinge forward from the hips.",
    "why": "It is the standing stretch most people already do, but with the position that makes it work: heel up, chest long, weight over the hips. It lets you feel a hamstring stretch through the range you actually use to bend down, not lying on the floor.",
    "targets": [
      "hamstrings",
      "hip hinge"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 30,
      "sets": 2,
      "perSide": true
    },
    "cues": [
      "Put the heel on the step, toes up, knee straight but not locked.",
      "Push your hips back and hinge with a long spine.",
      "Keep the standing knee soft and your hips square to the step."
    ],
    "shouldFeel": "A firm stretch high in the back of the thigh of the raised leg.",
    "shouldNotFeel": "Pulling or aching in the lower back, a sharp catch behind the knee, or wobbling that makes you round to stay upright.",
    "regressions": [
      {
        "label": "Lower the step",
        "detail": "A few books or a thick towel is enough.",
        "props": [
          "step"
        ]
      },
      {
        "label": "Hold a chair",
        "detail": "Lean on a chair or countertop for balance and to keep your back long.",
        "props": [
          "chair"
        ]
      },
      {
        "label": "Soft knee",
        "detail": "Bend the raised knee slightly.",
        "props": [
          "step"
        ]
      },
      {
        "label": "Long stride on the floor, no step",
        "detail": "Stand with the front foot flat in a long stride and fold over it with hands on blocks. It has no elevation at all, so it is gentler than the step.",
        "props": [
          "block"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Higher step",
        "detail": "Move up one step height at a time, only if your back stays long."
      },
      {
        "label": "Reach for the toes",
        "detail": "Reach the hand to the shin, not the toe, while your back stays flat."
      }
    ],
    "props": [
      "step"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "sciatica",
      "balance",
      "hipReplacement"
    ],
    "dailySafe": true,
    "source": [
      "Physiotherapy patient guides (Cleveland Clinic, Hinge Health)",
      "Mayo Clinic stretching guide"
    ],
    "evidenceNote": "The widely repeated reason to do this is to prevent hamstring strains. That is not well supported. Thacker's 2004 systematic review found no significant effect of stretching on total injury risk (odds ratio 0.93, confidence interval 0.78 to 1.11), concluding there was not enough evidence to endorse or drop routine stretching; Herbert and Gabriel's 2002 review also found little or no effect on injury risk. A prospective study of 450 amateur footballers (van Doormaal 2017) found no relationship between sit-and-reach flexibility and hamstring injury; a larger study of 438 professionals (van Dyk 2018) found flexibility deficits only a weak risk factor. What does look protective is strength work at long muscle lengths (see the Nordic curl entry). Stretch because it feels good and gives you range, not to prevent a pull."
  },
  {
    "id": "seated-one-leg-forward-fold",
    "name": "Seated One-Leg Forward Fold",
    "aka": [
      "Janu Sirsasana",
      "Head-to-knee forward bend",
      "Seated single-leg hamstring stretch"
    ],
    "regions": [
      "hamstrings",
      "hips"
    ],
    "role": "main",
    "intensity": 2,
    "summary": "Sit with one leg straight and the other foot resting against the inside of that thigh, then hinge forward over the straight leg.",
    "why": "Each leg gets worked on its own, so you find out about the difference between sides that a two-leg forward fold hides. The bent leg holds your pelvis square so the stretch stays in the hamstring rather than leaking into the back.",
    "targets": [
      "hamstrings",
      "adductors",
      "pelvic tilt"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 45,
      "sets": 1,
      "perSide": true
    },
    "cues": [
      "Sit on a cushion until your pelvis can tip forward.",
      "Turn your chest to face the straight leg and hinge from the hips.",
      "Let the bent knee fall wherever it is comfortable. Do not force it to the floor."
    ],
    "shouldFeel": "A steady pull in the back of the thigh of the straight leg, and a mild stretch in the groin of the bent leg.",
    "shouldNotFeel": "Pain on the inside of the bent knee, pinching in the low back, or numbness down the leg.",
    "regressions": [
      {
        "label": "Sit higher",
        "detail": "A thicker cushion or folded blanket under the hips.",
        "props": [
          "cushion"
        ]
      },
      {
        "label": "Strap around the foot",
        "detail": "Hold the ends of a towel instead of reaching for the foot.",
        "props": [
          "towel"
        ]
      },
      {
        "label": "Support the bent knee",
        "detail": "Put a cushion under it so the hip is not hanging.",
        "props": [
          "cushion"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Lower the seat",
        "detail": "Reduce cushion height over weeks."
      },
      {
        "label": "Longer spine, deeper hinge",
        "detail": "Reach further along the shin as long as the back stays long."
      }
    ],
    "props": [
      "cushion",
      "towel"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "knee",
      "sciatica",
      "hipReplacement"
    ],
    "dailySafe": true,
    "source": [
      "Hatha yoga: Janu Sirsasana (Yoga Journal)",
      "Yoga instruction tradition"
    ],
    "evidenceNote": "The sole-to-thigh version here is the modern yoga-taught one. Older gym handouts show the 'hurdler stretch', with the bent leg tucked behind you, which many clinicians advise against because it twists the knee; do not do that version. Claims that seated folds stimulate the abdominal organs or calm the mind are traditional, not tested. What the position reliably does is stretch the hamstring of the straight leg and the adductors of the bent one."
  },
  {
    "id": "straddle-forward-fold",
    "name": "Straddle Forward Fold",
    "aka": [
      "Pancake stretch",
      "Upavistha Konasana",
      "Seated wide-leg forward fold"
    ],
    "regions": [
      "hamstrings",
      "hips"
    ],
    "role": "main",
    "intensity": 2,
    "summary": "Sit with your legs wide apart and hinge forward from the hips, walking your hands out in front of you.",
    "why": "The next step up from the straddle sit. Hinging between the legs loads the inner hamstrings and adductors together, which is exactly the region a deadlifter's narrow stance and a desk chair both leave alone.",
    "targets": [
      "hamstrings",
      "adductors",
      "hip hinge in abduction"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 45,
      "sets": 2,
      "perSide": false
    },
    "cues": [
      "Sit on a cushion so you can tip the pelvis forward.",
      "Keep your kneecaps pointing at the ceiling.",
      "Hinge from the hips and stop where your back would start to round."
    ],
    "shouldFeel": "A broad stretch through the inner thighs and the back of the legs.",
    "shouldNotFeel": "Pain inside the knees, a pinch at the front of the hip, or rounding through the lower back.",
    "regressions": [
      {
        "label": "Narrower straddle",
        "detail": "Bring the legs closer together. Width is not the goal.",
        "props": [
          "cushion"
        ]
      },
      {
        "label": "Hands on blocks",
        "detail": "Blocks in front of you help you hinge without diving.",
        "props": [
          "block"
        ]
      },
      {
        "label": "Sit higher",
        "detail": "More cushion until the hinge is easy.",
        "props": [
          "cushion"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Walk the hands out",
        "detail": "Reach forward along the floor while keeping the chest long."
      },
      {
        "label": "Add a lift-off",
        "detail": "At the bottom, lift your hands a centimetre for five seconds to own the position."
      }
    ],
    "props": [
      "cushion",
      "block"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "groin",
      "hipReplacement",
      "sciatica"
    ],
    "dailySafe": true,
    "source": [
      "Lattice Training (flexibility for climbers)",
      "Dani Winks Flexibility",
      "Yoga: Upavistha Konasana"
    ],
    "evidenceNote": "Getting your chest flat to the floor in a wide straddle depends heavily on the shape of your hip sockets and the twist of your thigh bones, which no stretching changes. Some people will fold flat and some never will, at any level of effort. That is a widely made point among clinicians; there is little direct research on the pancake itself, so treat a lack of depth as normal, not failure."
  },
  {
    "id": "half-split",
    "name": "Half Split",
    "aka": [
      "Ardha Hanumanasana",
      "Half splits",
      "Kneeling hamstring stretch"
    ],
    "regions": [
      "hamstrings",
      "hips"
    ],
    "role": "main",
    "intensity": 2,
    "summary": "From a half-kneel, straighten the front leg by rocking the hips back over the rear knee, with the front heel on the floor and toes up.",
    "why": "It is the easiest way to load one hamstring on the floor without lying down, and it stretches the calf along with it. It also flows well with the couch stretch: the same half-kneeling start, the opposite stretch.",
    "targets": [
      "front-leg hamstring",
      "calf",
      "hip hinge"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 45,
      "sets": 1,
      "perSide": true
    },
    "cues": [
      "Hips back over the rear knee, not forward over the front foot.",
      "Keep the front knee soft and the heel on the floor.",
      "Hands on blocks so your spine can stay long."
    ],
    "shouldFeel": "A stretch in the back of the front thigh and a mild pull in the calf.",
    "shouldNotFeel": "Pressure on the kneecap of the back leg, sharp pulling behind the front knee, or rounding through the lower back.",
    "regressions": [
      {
        "label": "Pad the rear knee",
        "detail": "Folded blanket under it.",
        "props": [
          "cushion"
        ]
      },
      {
        "label": "Soft front knee",
        "detail": "Keep the front leg bent and straighten it a little at a time.",
        "props": [
          "block"
        ]
      },
      {
        "label": "Hands on blocks",
        "detail": "Blocks under your hands so you stay long.",
        "props": [
          "block"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Lengthen the spine",
        "detail": "Reach the chest towards the front toes with the back long."
      },
      {
        "label": "Toes pull back",
        "detail": "Pull the front toes to the shin for more calf. Drop the toes if the stretch turns wiry."
      }
    ],
    "props": [
      "cushion",
      "block"
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
      "Hatha yoga: Ardha Hanumanasana (Yoga Journal, Inside Yoga)"
    ],
    "evidenceNote": "As with any hamstring position, the toes-up position adds tension on the sciatic nerve as well as the muscle. If the pull feels thin or runs down towards the calf rather than broad through the thigh, drop the toes; that is a nerve signal, not a tighter hamstring."
  },
  {
    "id": "wide-leg-standing-fold",
    "name": "Wide-Leg Standing Fold",
    "aka": [
      "Prasarita Padottanasana",
      "Wide-legged forward bend",
      "Standing straddle fold"
    ],
    "regions": [
      "hamstrings",
      "hips"
    ],
    "role": "main",
    "intensity": 2,
    "summary": "Stand with your feet about a leg-length apart, hinge forward from the hips, and rest your hands on blocks or the floor.",
    "why": "The standing partner to the seated straddle. It stretches the inner hamstrings and adductors with your feet on the floor, which makes it easy to stack the hips over the feet and much easier to keep the spine long.",
    "targets": [
      "hamstrings",
      "adductor magnus",
      "calf"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 30,
      "sets": 2,
      "perSide": false
    },
    "cues": [
      "Feet parallel, hips over the ankles.",
      "Hinge from the hips with a long back and hands under the shoulders.",
      "Keep a soft knee and stay only as low as the back stays long."
    ],
    "shouldFeel": "A stretch through the back and inside of both thighs.",
    "shouldNotFeel": "Pain inside the knees, groin pulling, pins and needles in the legs, or light-headedness on the way up.",
    "regressions": [
      {
        "label": "Hands on blocks",
        "detail": "Blocks under the hands.",
        "props": [
          "block"
        ]
      },
      {
        "label": "Hands on a chair",
        "detail": "Hinge and rest your hands on a chair seat.",
        "props": [
          "chair"
        ]
      },
      {
        "label": "Narrower stance",
        "detail": "Bring the feet closer together.",
        "props": [
          "block"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Hands to the floor",
        "detail": "Progress from blocks over weeks."
      },
      {
        "label": "Head towards the floor",
        "detail": "Only if the spine stays long and it is comfortable."
      }
    ],
    "props": [
      "block"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "bloodPressure",
      "balance",
      "groin",
      "hipReplacement",
      "sciatica"
    ],
    "dailySafe": true,
    "source": [
      "Hatha yoga: Prasarita Padottanasana (Yoga Journal)"
    ],
    "evidenceNote": "The head is below the heart in this position. That is why it is on the blood pressure list and why you should come up slowly. Claims that it 'calms the brain' or 'improves circulation to the head' are not supported by evidence; it is a hamstring and adductor stretch."
  },
  {
    "id": "active-knee-extension",
    "name": "Active Knee Extension",
    "aka": [
      "AKE",
      "Active knee extension test",
      "Supine hamstring knee extension"
    ],
    "regions": [
      "hamstrings"
    ],
    "role": "main",
    "intensity": 1,
    "summary": "Lie on your back with your hip bent to 90 degrees, hold the back of the thigh, and straighten the knee as far as it goes.",
    "why": "It is a hamstring stretch with the pelvis locked by the floor and the hip fixed at 90 degrees, so the only thing that moves is the knee. That makes it a cleaner measure than reaching for your toes, and the actively straightened knee trains the range rather than just borrowing it.",
    "targets": [
      "hamstrings",
      "knee extension range"
    ],
    "dose": {
      "kind": "reps",
      "reps": 6,
      "sets": 2,
      "perSide": true,
      "tempoNote": "2s straighten, 3s hold, 2s bend.",
      "secondsPerRep": 7
    },
    "cues": [
      "Hold the back of the thigh and keep it vertical. It should not drift towards you.",
      "Straighten the knee until you feel a firm pull, then stop.",
      "Keep your head down and your lower back on the floor."
    ],
    "shouldFeel": "A moderate pull in the back of the thigh as the knee straightens.",
    "shouldNotFeel": "A thin, wiry line running towards the calf or foot, or pain behind the knee.",
    "regressions": [
      {
        "label": "Stop short of straight",
        "detail": "Straighten the knee only as far as is comfortable.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Towel behind the thigh",
        "detail": "Use a towel instead of your hands.",
        "props": [
          "towel"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Hold at the top",
        "detail": "Add 5 seconds at the straightest point."
      },
      {
        "label": "No hands",
        "detail": "Once the thigh stays vertical, let go and hold it with the hip muscles."
      }
    ],
    "props": [
      "none"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "sciatica"
    ],
    "dailySafe": true,
    "source": [
      "Active knee extension test (Gajdosik and Lusin)",
      "Physiotutors",
      "Physical therapy assessment literature"
    ],
    "evidenceNote": "The active knee extension test (also called the 90/90 test) is a widely used clinical test of hamstring length because the hip is held at a fixed angle. Many clinics treat about 20 degrees short of straight as normal for an active adult. It is still a measure of how far you tolerate the stretch, not of muscle length, so it moves with tolerance, warm-up and even mood. Use it as an approximate monthly check, alongside the straight-leg raise."
  },
  {
    "id": "front-back-leg-swings",
    "name": "Front-to-Back Leg Swings",
    "aka": [
      "Sagittal leg swings",
      "Pendulum leg swings",
      "Forward and backward leg swing"
    ],
    "regions": [
      "hamstrings",
      "hips"
    ],
    "role": "opener",
    "intensity": 1,
    "summary": "Holding a wall, swing one leg forward and back like a pendulum, a little higher each time.",
    "why": "It is the dynamic way in: no holding, no pulling, just the leg moving through the range it will use. It is a good first thing before lifting or running, and it is far less likely than a long static hold to leave you feeling weak on the first set.",
    "targets": [
      "hamstrings",
      "hip flexors",
      "hip control"
    ],
    "dose": {
      "kind": "reps",
      "reps": 12,
      "sets": 1,
      "perSide": true,
      "tempoNote": "Easy pendulum, 1s forward and 1s back.",
      "secondsPerRep": 2
    },
    "cues": [
      "Stand tall and hold the wall lightly.",
      "Swing from the hip with a soft standing knee.",
      "Let the swing get a little higher each time. Do not force it."
    ],
    "shouldFeel": "A light stretch in the back of the thigh at the front of the swing and the front of the hip at the back.",
    "shouldNotFeel": "A jarring catch, pain in the front of the hip, or your lower back arching at the back of the swing.",
    "regressions": [
      {
        "label": "Smaller swing",
        "detail": "Keep the range small and relaxed.",
        "props": [
          "wall"
        ]
      },
      {
        "label": "Hold with two hands",
        "detail": "Face the wall and hold with both hands.",
        "props": [
          "wall"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Side to side",
        "detail": "Swing across the body and out to the side, holding the wall."
      },
      {
        "label": "Walk-through",
        "detail": "Alternate legs in a slow walking kick (see Straight-Leg March)."
      }
    ],
    "props": [
      "wall"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "balance"
    ],
    "dailySafe": true,
    "source": [
      "Niel Asher Education",
      "Strength and conditioning warm-up practice"
    ],
    "evidenceNote": "Dynamic stretching like this gives about the same short-term range gains as a static hold: a 2023 meta-analysis of 27 trials found similar acute effects, with larger longer-term gains from repeated static stretching. It also does not prevent hamstring strains on its own. The claim that swings 'lubricate the hip joint' or 'wake up' the nervous system is a sales pitch, not a finding. Their real job is to warm you up and let you rehearse the movement. They are a warm-up, not a way to build range."
  },
  {
    "id": "straight-leg-march",
    "name": "Straight-Leg March",
    "aka": [
      "Frankenstein walk",
      "Walking straight-leg kicks",
      "Dynamic hamstring sweep"
    ],
    "regions": [
      "hamstrings"
    ],
    "role": "opener",
    "intensity": 1,
    "summary": "Walk slowly forward, kicking each straight leg to about hip height and reaching towards the toes with the opposite hand.",
    "why": "The moving version of a hamstring stretch: your hamstring meets its end range for a moment at each step, then lets go. It rehearses the pattern of a swinging leg and warms you up without the drop in strength that a long static hold can cause.",
    "targets": [
      "hamstrings",
      "hip flexors",
      "coordination"
    ],
    "dose": {
      "kind": "reps",
      "reps": 12,
      "sets": 2,
      "perSide": false,
      "tempoNote": "Slow, about 2s per step.",
      "secondsPerRep": 2
    },
    "cues": [
      "Kick only as high as you can keep the knee straight and the torso tall.",
      "Do not lean back to get the leg higher.",
      "Reach the opposite hand towards the shin. Do not force it to the toe."
    ],
    "shouldFeel": "A brief stretch at the back of the thigh at the top of each kick.",
    "shouldNotFeel": "A tug behind the knee, back rounding to reach the foot, or wobbling.",
    "regressions": [
      {
        "label": "Bent-knee march",
        "detail": "March with a soft knee and lift the foot only to knee height.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Hold a wall",
        "detail": "Kick beside a wall or a rail.",
        "props": [
          "wall"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Higher kick",
        "detail": "Slightly higher as range improves, torso still tall."
      },
      {
        "label": "Add a hinge",
        "detail": "Pause each step with a slight hinge forward."
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
      "Sports warm-up practice (Illustrated Workout, ExerciseLibrary)"
    ],
    "evidenceNote": "Repeated across fitness sites is the claim that this 'reduces injury risk' in runners. It has not been tested on its own and dynamic stretching in general has no clear injury benefit. The real value is as a low-effort warm-up."
  },
  {
    "id": "inchworm-walkout",
    "name": "Inchworm Walkout",
    "aka": [
      "Inchworm",
      "Walkouts",
      "Walk-out to plank"
    ],
    "regions": [
      "hamstrings"
    ],
    "role": "main",
    "intensity": 2,
    "summary": "Fold forward, walk your hands out to a plank, then walk your feet back in towards your hands with the legs as straight as you can.",
    "why": "The hamstrings get worked on the way in, when the feet close in and the legs straighten, and your shoulders and trunk get a light plank on the way out. It is a five-minute warm-up that covers the hinge, the plank and the hamstring in one flow.",
    "targets": [
      "hamstrings",
      "calves",
      "trunk control"
    ],
    "dose": {
      "kind": "reps",
      "reps": 5,
      "sets": 2,
      "perSide": false,
      "tempoNote": "4s walking out, 4s walking back.",
      "secondsPerRep": 8
    },
    "cues": [
      "Bend the knees as much as you need to get your hands down.",
      "Walk the feet in with small steps, keeping the legs as straight as you can.",
      "Keep your ribs down in the plank. Do not sag the low back."
    ],
    "shouldFeel": "A mild to moderate stretch in the back of the thighs as your feet walk in, and light effort in the shoulders and abdomen.",
    "shouldNotFeel": "Pain in the wrists or shoulders, or a sagging, pinching lower back in the plank.",
    "regressions": [
      {
        "label": "Bend the knees",
        "detail": "Bend the knees generously during the walk-in.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Hands on a step",
        "detail": "Hands on a step or a chair make the walk-out shorter.",
        "props": [
          "step"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Pause at the bottom",
        "detail": "Pause two seconds in the folded position with straighter knees."
      },
      {
        "label": "Add a push-up",
        "detail": "A push-up at the plank."
      }
    ],
    "props": [
      "none"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "wrist",
      "shoulder",
      "backPain",
      "hipReplacement",
      "osteoporosis"
    ],
    "dailySafe": true,
    "source": [
      "Sports warm-up practice (Coach, Bodi)",
      "Dynamic warm-up clinician notes"
    ],
    "evidenceNote": "The hamstring stretch here is mild and brief; the value is that it takes the whole chain through a hinge and a plank in a few minutes. Any claim about 'lengthening' the hamstrings from repeated walkouts is stronger than the evidence supports."
  },
  {
    "id": "supine-sciatic-nerve-glide",
    "name": "Supine Sciatic Nerve Glide",
    "aka": [
      "Supine nerve floss",
      "Supine sciatic slider",
      "Knee-extension nerve glide"
    ],
    "regions": [
      "hamstrings"
    ],
    "role": "main",
    "intensity": 1,
    "summary": "Lie on your back with the hip bent to 90 degrees, straighten the knee while pointing the toes away, then bend the knee while pulling the toes towards you.",
    "why": "If the back of your leg feels tight but stretching makes it worse, or the pull runs down the calf rather than sitting in the muscle, the tight thing may be an irritated nerve, not a short hamstring. Lying down takes the back out of the equation, so it is a calmer way to move the nerve than the seated version.",
    "targets": [
      "sciatic nerve excursion"
    ],
    "dose": {
      "kind": "reps",
      "reps": 10,
      "sets": 1,
      "perSide": true,
      "tempoNote": "3s straighten, 3s bend. Never hold.",
      "secondsPerRep": 6
    },
    "cues": [
      "Hold the back of the thigh so it stays vertical.",
      "Point the toes as you straighten the knee, pull them back as you bend.",
      "Stay under the symptom. Never chase the zing."
    ],
    "shouldFeel": "Movement and a mild, fleeting pull. Often a sense of easing.",
    "shouldNotFeel": "Increased tingling, numbness or burning, or symptoms that linger after you stop. That means too much range or too many reps.",
    "regressions": [
      {
        "label": "Smaller range",
        "detail": "Straighten only part of the way.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Fewer reps",
        "detail": "Five smooth reps, then stop.",
        "props": [
          "none"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Add head movement",
        "detail": "Lift the chin as the knee straightens, tuck it as the knee bends."
      },
      {
        "label": "Straighter knee",
        "detail": "Slightly more knee extension if all symptoms stay quiet."
      }
    ],
    "props": [
      "none"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [],
    "dailySafe": true,
    "requiresFlag": "sciatica",
    "source": [
      "Neurodynamic sliders (Butler; Coppieters)",
      "Physiotherapy clinics (Perfect Balance Clinic, LYT)"
    ],
    "evidenceNote": "Nerve tension and muscle tightness feel alike but behave differently. A simple test: in a hamstring stretch, pull the toes towards you or tuck the chin. If the stretch sharpens or moves down the calf, the nerve is involved; if it barely changes, it is muscle. In a 120-person trial (Castellote-Caballero 2014), a sciatic slider raised straight-leg range by roughly 9 to 10 degrees, more than stretching or placebo, but that was an immediate effect in people without symptoms. A 2017 systematic review (Basson) found neural mobilisation evidence for nerve-related musculoskeletal problems mixed and of variable quality. The idea that it 'frees a stuck nerve' is not proven; it may just lower the nerve's sensitivity. Numbness, weakness or worsening pain down the leg needs a clinician."
  },
  {
    "id": "romanian-deadlift",
    "name": "Romanian Deadlift",
    "aka": [
      "RDL",
      "Hip hinge with weights"
    ],
    "regions": [
      "hamstrings",
      "back"
    ],
    "role": "load",
    "intensity": 2,
    "summary": "Stand holding a pair of dumbbells or a kettlebell, push your hips back with the knees slightly bent, lower the weight down your legs, and stand back up.",
    "why": "It is the loaded step after the good morning, and it trains the hamstring where it is long, under control, with a weight you can choose. Strength work through a full range improves range of motion about as well as stretching does, and it also makes the range usable.",
    "targets": [
      "hamstrings",
      "glutes",
      "spinal erectors",
      "hip hinge"
    ],
    "dose": {
      "kind": "reps",
      "reps": 8,
      "sets": 2,
      "perSide": false,
      "tempoNote": "3s lower, 1s pause, 2s up.",
      "secondsPerRep": 6
    },
    "cues": [
      "Soften the knees once and keep them fixed. Do not squat it.",
      "Push your hips back and slide the weight down your thighs.",
      "Stop where the hamstrings run out of stretch or your back would round.",
      "Drive the floor away to stand up."
    ],
    "shouldFeel": "A deep, heavy stretch and working effort through the back of the thighs and buttocks.",
    "shouldNotFeel": "Pain or aching in the lower back, burning at the hip crease, or pulling at the back of the knee.",
    "regressions": [
      {
        "label": "Bodyweight only",
        "detail": "Do the Standing Good Morning or the Broomstick Hinge first.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Lighter load",
        "detail": "One light dumbbell held at the chest, or nothing at all.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Shorter range",
        "detail": "Stop at mid-shin height.",
        "props": [
          "none"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Slower lowering",
        "detail": "Take 5 seconds down."
      },
      {
        "label": "Add load",
        "detail": "Only when the last two reps look the same as the first two."
      },
      {
        "label": "Single-leg",
        "detail": "See Single-Leg Romanian Deadlift."
      }
    ],
    "props": [
      "weight"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "backPain",
      "sciatica"
    ],
    "dailySafe": false,
    "source": [
      "Strength and conditioning practice",
      "Nordbelt",
      "EMG comparison of deadlift variations"
    ],
    "evidenceNote": "A common claim is that stretching makes you more flexible and lifting makes you tighter. That is not true. A 2021 meta-analysis (Afonso) found strength training through a full range and stretching did not differ in improving range of motion. One small 2017 trial (Bourne, 30 active young men) found that 10 weeks of loaded 45-degree hip-extension training lengthened the fibre bundles of the biceps femoris long head, as Nordics did; a 2025 meta-analysis found static stretching does not change fibre length. The Romanian deadlift itself was not the exercise studied for that, so treat it as a close cousin, not proof. It is not daily-safe because loaded eccentric hamstring work causes soreness; twice a week is enough."
  },
  {
    "id": "single-leg-romanian-deadlift",
    "name": "Single-Leg Romanian Deadlift",
    "aka": [
      "Airplane hinge",
      "Askling Diver",
      "Kickstand RDL",
      "Single-leg RDL",
      "Single-leg good morning",
      "Single-leg hip hinge",
      "Standing single-leg RDL reach"
    ],
    "regions": [
      "hamstrings",
      "hips"
    ],
    "role": "load",
    "intensity": 2,
    "summary": "Balance on one leg, hinge forward as the other leg stretches out behind you, and touch the floor or a step with a long back.",
    "why": "It loads the standing hamstring and forces the hip on that side to stay level, which is what running and lifting off one leg both need. It also exposes an asymmetry that two-leg hinges hide.",
    "targets": [
      "hamstrings",
      "glutes",
      "hip stability"
    ],
    "dose": {
      "kind": "reps",
      "reps": 6,
      "sets": 2,
      "perSide": true,
      "tempoNote": "3s down, 1s pause, 2s up.",
      "secondsPerRep": 6
    },
    "cues": [
      "Fix your eyes on a spot a metre in front of you.",
      "Push the hips back and reach the free leg straight behind you.",
      "Keep your hips square to the floor.",
      "Stop where the hamstring runs out of stretch."
    ],
    "shouldFeel": "A stretch and working effort in the back of the standing thigh.",
    "shouldNotFeel": "Pain in the lower back, a twisting or rocking pelvis, or a wobble that makes you lose the flat back.",
    "regressions": [
      {
        "label": "Reach only to the knee",
        "detail": "Slide your hand down to your knee and no further, then to mid-shin as the hinge gets steadier. Reaching the floor is the last step, not the first.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Kickstand",
        "detail": "Keep the back toe on the floor for balance and put most of your weight on the front leg.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Hold a wall",
        "detail": "Touch a wall or chair lightly with one hand.",
        "props": [
          "wall"
        ]
      },
      {
        "label": "Shorter range",
        "detail": "Stop halfway.",
        "props": [
          "none"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Hold the bottom",
        "detail": "Hold the bottom position for as long as you can keep it steady, arms out. This is the Diver from Askling's L-protocol."
      },
      {
        "label": "Add load",
        "detail": "A dumbbell in the opposite hand, once the hinge is steady."
      }
    ],
    "props": [
      "none"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "balance",
      "backPain",
      "sciatica"
    ],
    "dailySafe": true,
    "source": [
      "The Prehab Guys",
      "Peak Physio",
      "Askling L-protocol (the Diver)"
    ],
    "evidenceNote": "The Diver, hinging on one leg with the free leg back and holding it, is one of three lengthening exercises in Askling's L-protocol. In a randomised trial of 56 Swedish elite sprinters and jumpers with a hamstring tear, that protocol got athletes back about 37 days sooner than conventional rehab. That is a rehab result in elite athletes, not proof it prevents strains in recreational lifters. Bodyweight only here; if you add a load, count it as a heavy session and do it at most twice a week."
  },
  {
    "id": "nordic-hamstring-curl",
    "name": "Nordic Hamstring Curl",
    "aka": [
      "Nordics",
      "Nordic hamstring exercise",
      "Nordic lowering"
    ],
    "regions": [
      "hamstrings"
    ],
    "role": "load",
    "intensity": 3,
    "summary": "Kneel with your ankles held down, and lower your body forward as slowly as you can, catching yourself with your hands.",
    "why": "It is the heaviest hamstring exercise you can do without equipment: the muscle works hard as it lengthens. If you sprint, play field sports, or just want a hamstring that can take the load of being a lifter, this is the exercise the research keeps returning to.",
    "targets": [
      "hamstrings",
      "eccentric knee flexion strength"
    ],
    "dose": {
      "kind": "reps",
      "reps": 3,
      "sets": 2,
      "perSide": false,
      "tempoNote": "5s lowering, 3s catching and pushing back up.",
      "secondsPerRep": 8
    },
    "cues": [
      "Hips stay in line with the shoulders and knees. Do not fold at the hips.",
      "Lower as slowly as you can. When you cannot hold it, catch yourself.",
      "Push off the floor with your hands to come back up."
    ],
    "shouldFeel": "Intense work and burning in the back of the thighs, especially near the end of the lowering.",
    "shouldNotFeel": "Sharp pain at the top of the hamstring near the buttock, pain at the kneecap, or a pop.",
    "regressions": [
      {
        "label": "Band-assisted",
        "detail": "A resistance band around your chest, anchored in front, takes some of your weight.",
        "props": [
          "band"
        ]
      },
      {
        "label": "Partial range",
        "detail": "Lower only to 45 degrees and push straight back up.",
        "props": [
          "cushion"
        ]
      },
      {
        "label": "Two reps, no more",
        "detail": "Do 2 sets of 2 to 3 in the first weeks.",
        "props": [
          "cushion"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Lower further",
        "detail": "Extend the range slightly each week."
      },
      {
        "label": "Full range",
        "detail": "All the way to the floor, chest first, hands as a last resort."
      }
    ],
    "props": [
      "anchor",
      "cushion"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "knee"
    ],
    "dailySafe": false,
    "source": [
      "Nordic hamstring exercise (Petersen 2011; van der Horst 2015; van Dyk 2019)",
      "VALD Health"
    ],
    "evidenceNote": "You will read that Nordics halve your risk of hamstring injury. The evidence is real but more limited than that suggests. A 2011 randomised trial in Danish football (Petersen) found roughly 60 percent fewer new injuries; a 2015 randomised trial in Dutch amateur footballers (van der Horst) also found fewer; and a 2019 meta-analysis of 8,459 athletes (van Dyk) put the reduction at about half. A 2021 reappraisal (Impellizzeri) argued that when only properly randomised trials are counted the effect is inconclusive (only five of the fifteen studies were), and that at best a conditional recommendation can be made for soccer. I found no trials in middle-aged recreational lifters. What is more solid is that it builds hamstring eccentric strength and fascicle length. The first sessions cause heavy soreness (typically worst on days 2 to 3), so start with 2 sets of 3 to 5 and never more than twice a week. Anchoring your ankles: hook them under a heavy sofa, or use a partner."
  },
  {
    "id": "bridge-slider-leg-curl",
    "name": "Bridge Slider Leg Curl",
    "aka": [
      "Sliding leg curl",
      "Towel hamstring curl",
      "Slider hamstring curl"
    ],
    "regions": [
      "hamstrings",
      "hips"
    ],
    "role": "load",
    "intensity": 2,
    "summary": "Lie on your back in a bridge with a towel under each heel on a smooth floor, and slowly slide your heels away until your legs are nearly straight, then pull back in.",
    "why": "A bridge between the light stuff and the Nordic. The hamstring works to control your legs as they lengthen, in a controlled range, with no falling and no partner. It is the honest way to build up to Nordics.",
    "targets": [
      "hamstrings",
      "glutes",
      "knee flexion strength"
    ],
    "dose": {
      "kind": "reps",
      "reps": 6,
      "sets": 2,
      "perSide": false,
      "tempoNote": "4s slide out, 2s curl back.",
      "secondsPerRep": 6
    },
    "cues": [
      "Keep the hips high in the bridge the whole time.",
      "Slide out slowly. If you cannot control it, stop shorter.",
      "Curl back in with your heels, not by dropping the hips."
    ],
    "shouldFeel": "Strong working effort in the back of the thighs, especially on the way out.",
    "shouldNotFeel": "Cramping that will not ease, sharp pain at the top of the hamstring, or the hips dropping to the floor.",
    "regressions": [
      {
        "label": "Shorter slide",
        "detail": "Slide out only a third of the way.",
        "props": [
          "towel"
        ]
      },
      {
        "label": "Two-hand assist",
        "detail": "Press your hands into the floor by your sides for stability.",
        "props": [
          "towel"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Slide further",
        "detail": "Add range a few centimetres each week."
      },
      {
        "label": "Single leg",
        "detail": "One leg sliding, the other held in the air, only after two-leg is easy."
      }
    ],
    "props": [
      "towel"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [],
    "dailySafe": false,
    "source": [
      "The Prehab Guys",
      "Physiotherapy hamstring rehab (Trainwell, Redefining Strength)"
    ],
    "evidenceNote": "Slider curls are a widely used rehab step between bridging and Nordics. I did not find trials showing they prevent hamstring strains on their own, so treat the benefit as strength work, not injury insurance. The hamstring works hardest as it lengthens, and cramping is common at first. It needs a smooth floor and a towel or slider; on carpet it will grip."
  },
  {
    "id": "long-lever-bridge-hold",
    "name": "Long-Lever Bridge Hold",
    "aka": [
      "Isometric hamstring bridge",
      "Straight-leg bridge hold",
      "Heels-out bridge"
    ],
    "regions": [
      "hamstrings",
      "hips"
    ],
    "role": "load",
    "intensity": 2,
    "summary": "Lie on your back with your heels well away from your hips and knees nearly straight, lift the hips, and hold.",
    "why": "It is a hamstring hold where the muscle is long and working, which is the position it is least used in by most lifters. Being an isometric, it puts almost no sudden load on the tissue, so it is a good entry point to lengthened strength work.",
    "targets": [
      "hamstrings",
      "glutes"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 30,
      "sets": 2,
      "perSide": false
    },
    "cues": [
      "Push your heels down and lift the hips until you form a straight line from shoulders to knees.",
      "Toes up, knees nearly straight.",
      "Keep the pelvis level. Do not arch your back to get higher."
    ],
    "shouldFeel": "Hard work in the back of the thighs, sometimes a cramp-like tightness.",
    "shouldNotFeel": "Pain in the lower back, or sharp pain near the top of the hamstring.",
    "regressions": [
      {
        "label": "Heels closer",
        "detail": "Bring the heels nearer to the hips.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Shorter hold",
        "detail": "Three sets of 15 seconds.",
        "props": [
          "none"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Single-leg hold",
        "detail": "One heel further out, the other foot lifted."
      },
      {
        "label": "Heels on a step",
        "detail": "Place the heels on a step or a low chair to raise the load."
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
      "The Prehab Guys (isometric hamstring bridge)",
      "PhysiTrack exercise library"
    ],
    "evidenceNote": "A tempting assumption is that any hold in a lengthened position lengthens the muscle. A 2022 randomised trial compared isometric and eccentric hip-extension training: only the eccentric group increased the fibre length of the biceps femoris long head. Isometrics build strength at that angle but did not lengthen the muscle in that study. That is not a reason to skip them: they are safer to start with and can be done more often."
  },
  {
    "id": "foam-roller-hamstring-roll",
    "name": "Foam Roller Hamstring Roll",
    "aka": [
      "Hamstring foam rolling",
      "Self-myofascial release for hamstrings"
    ],
    "regions": [
      "hamstrings"
    ],
    "role": "opener",
    "intensity": 1,
    "summary": "Sit with a foam roller under one thigh, hands behind you, and roll slowly from just above the knee to just below the sit bone.",
    "why": "It gives a short-lived increase in how far you can stretch, and it does not cost you strength beforehand, so it suits a warm-up. It is no better than a stretch for range. It is also a handy way to find the tender spots.",
    "targets": [
      "hamstrings"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 60,
      "sets": 1,
      "perSide": true
    },
    "cues": [
      "Roll slowly, about a hand-width every few seconds.",
      "Pause for five seconds on any tender spot. Do not grind on it.",
      "Stay off the back of the knee and off the bone."
    ],
    "shouldFeel": "Firm, uncomfortable pressure that eases as you stay on a spot.",
    "shouldNotFeel": "Sharp, burning or electric pain, pins and needles, or pressure that builds rather than fades.",
    "regressions": [
      {
        "label": "Less weight",
        "detail": "Put more weight through your hands and less through the thigh.",
        "props": [
          "roller"
        ]
      },
      {
        "label": "Softer roller",
        "detail": "Use a softer roller or a rolled towel.",
        "props": [
          "towel"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Cross the legs",
        "detail": "Cross the other leg on top to add pressure."
      },
      {
        "label": "Add knee bends",
        "detail": "Bend and straighten the knee while pressing on a spot."
      }
    ],
    "props": [
      "roller"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "sciatica"
    ],
    "dailySafe": true,
    "source": [
      "Foam rolling research (Wiewelhove 2019; Wilke 2020; Sports Medicine meta-analysis 2022)"
    ],
    "evidenceNote": "Rolling does not 'break up fascia' or 'release adhesions': a roller cannot apply enough force to reshape connective tissue, and there is no evidence that it does. What the research supports is a small, short-lived rise in joint range (meta-analyses of acute effects, including the hamstrings) with no loss in strength, lasting minutes not hours. Rolling for more than two weeks did not show a clear benefit in a 2022 meta-analysis of foam-rolling training, and rolling was no better than stretching for range in an acute-effect meta-analysis. The most likely reason is a change in how the stretch feels, the same as with stretching. It is a warm-up aid, not a treatment."
  },
  {
    "id": "pedalling-downward-dog",
    "name": "Pedalling Downward Dog",
    "aka": [
      "Down dog pedals",
      "Walking the dog",
      "Bent-knee downward dog"
    ],
    "regions": [
      "hamstrings",
      "ankles"
    ],
    "role": "main",
    "intensity": 2,
    "summary": "From a downward dog, bend one knee and then the other in a slow pedalling motion, dropping each heel towards the floor.",
    "why": "It gives you a mild, moving stretch through the hamstrings and calves, and it teaches you to hinge from the hips in a position where your hands, not your back, hold the weight. It is a very easy way to warm the back of the legs.",
    "targets": [
      "hamstrings",
      "calves",
      "hip hinge"
    ],
    "dose": {
      "kind": "reps",
      "reps": 8,
      "sets": 2,
      "perSide": false,
      "tempoNote": "2s bending each knee in turn, so 4s a pair.",
      "secondsPerRep": 4
    },
    "cues": [
      "Push the floor away and lift your tailbone.",
      "Bend the knees as much as you need to keep your back long.",
      "Sink one heel at a time."
    ],
    "shouldFeel": "A moderate stretch through the calves and the backs of the thighs.",
    "shouldNotFeel": "Pain in the wrists or shoulders, pinching in the low back, or a dizzy head-down feeling.",
    "regressions": [
      {
        "label": "Hands on a chair or wall",
        "detail": "Put your hands on a chair or wall and step back.",
        "props": [
          "wall"
        ]
      },
      {
        "label": "Bent knees throughout",
        "detail": "Keep both knees bent and just breathe.",
        "props": [
          "none"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Straighter legs",
        "detail": "Bend less each time as the back of the legs allows."
      },
      {
        "label": "Hold one heel down",
        "detail": "Pause 10 seconds on each side with the leg straight."
      }
    ],
    "props": [
      "none"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "wrist",
      "shoulder",
      "bloodPressure"
    ],
    "dailySafe": true,
    "source": [
      "Hatha yoga: Adho Mukha Svanasana (Yoga Journal, Dani Winks Flexibility)"
    ],
    "evidenceNote": "You will read that downward dog 'decompresses the spine' or 'detoxifies'. Neither has any support. It is a weight-bearing hamstring, calf and shoulder position. Most people stiff in the hamstrings will find their heels are nowhere near the floor; that is normal and not a target."
  },
  {
    "id": "toes-up-toe-touch",
    "name": "Toes-Up Toe Touch",
    "aka": [
      "Cook toe touch progression",
      "Elevated-toes forward fold",
      "Toe touch with toes up"
    ],
    "regions": [
      "hamstrings",
      "back"
    ],
    "role": "opener",
    "intensity": 1,
    "summary": "Stand with your toes up on a low wedge or book and your heels on the floor, then bend forward and down.",
    "why": "Sometimes the hamstrings are not short: they are braking. If your weight is over your toes as you fold, the hamstrings clamp to keep you from tipping over. Tipping the toes up forces your weight back onto your heels so the brake can let go, and you find out how far you go without it.",
    "targets": [
      "posterior weight shift",
      "hamstrings"
    ],
    "dose": {
      "kind": "reps",
      "reps": 6,
      "sets": 2,
      "perSide": false,
      "tempoNote": "3s down, 2s up.",
      "secondsPerRep": 5
    },
    "cues": [
      "Weight on your heels, toes lifted on the wedge.",
      "Let the hips travel back as you fold. Let your head hang.",
      "Breathe out as you go down."
    ],
    "shouldFeel": "A gentle stretch behind the thighs and a heavy, hanging feeling.",
    "shouldNotFeel": "Pulling in the lower back, dizziness, or a sense that you are about to fall backwards.",
    "regressions": [
      {
        "label": "Bend the knees",
        "detail": "Bend the knees as much as you need to reach the floor.",
        "props": [
          "wedge"
        ]
      },
      {
        "label": "Hands on a chair",
        "detail": "Hold a chair for balance.",
        "props": [
          "wedge",
          "chair"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Knee squeeze",
        "detail": "Hold a towel between the knees and squeeze as you fold."
      },
      {
        "label": "Reverse the wedge",
        "detail": "Put the heels up and the toes down for a comparison."
      }
    ],
    "props": [
      "wedge"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "balance",
      "backPain",
      "sciatica",
      "osteoporosis",
      "hipReplacement",
      "bloodPressure"
    ],
    "dailySafe": true,
    "source": [
      "Gray Cook (Functional Movement Systems, Toe Touch Progression)"
    ],
    "evidenceNote": "The idea that tight hamstrings are often a protective brake, not a shortened muscle, is Gray Cook's clinical model. It is plausible and fits the finding that stretching mostly changes tolerance, but it has not been tested in trials. The explanation about squeezing the knees 'switching off' the back muscles through reciprocal inhibition is a theory, not a finding. Take it as a cheap experiment: if your reach changes when you tip your toes up, weight shift is part of your limit."
  },
  {
    "id": "squat-to-stand",
    "name": "Squat-to-Stand",
    "aka": [
      "Inverted hamstring stretch",
      "Deep squat to hamstring stretch",
      "Toe-grab squat to stand"
    ],
    "regions": [
      "hamstrings",
      "hips",
      "ankles"
    ],
    "role": "main",
    "intensity": 2,
    "summary": "Fold forward and grab your toes, drop into a deep squat, then straighten your legs while holding your toes.",
    "why": "It moves between two positions the app cares about: the squat and the forward fold. Going from one to the other with your hands on your toes teaches you to control the range in between, and it hits hips, calves and hamstrings in one movement.",
    "targets": [
      "hamstrings",
      "hips",
      "ankle dorsiflexion"
    ],
    "dose": {
      "kind": "reps",
      "reps": 8,
      "sets": 1,
      "perSide": false,
      "tempoNote": "2s to the squat, 3s straightening the legs, 3s back to the squat.",
      "secondsPerRep": 8
    },
    "cues": [
      "Grab your toes or ankles and keep your chest close to your thighs.",
      "Straighten the legs as far as they go without letting go.",
      "Bend the knees again and come back to the squat."
    ],
    "shouldFeel": "A stretch through the backs of the thighs and calves as the legs straighten, and a stretch in the hips at the bottom.",
    "shouldNotFeel": "Pain in the knees in the deep squat, a pinch at the front of the hip, or losing your balance.",
    "regressions": [
      {
        "label": "Grab the ankles",
        "detail": "Ankles instead of toes.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Heels raised",
        "detail": "Heels on a low wedge to make the squat easier.",
        "props": [
          "wedge"
        ]
      },
      {
        "label": "Shorter range",
        "detail": "Straighten the legs only halfway.",
        "props": [
          "none"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Pause at each end",
        "detail": "Two seconds in the squat and two seconds with the legs straight."
      },
      {
        "label": "Slower straightening",
        "detail": "Take 5 seconds to straighten."
      }
    ],
    "props": [
      "none"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "knee",
      "backPain",
      "balance",
      "hipReplacement"
    ],
    "dailySafe": true,
    "source": [
      "Physiotherapy home programmes (PhysiTrack)",
      "Mobility coaching (STACK)"
    ],
    "evidenceNote": "It is popular as a 'hip opener' and 'hamstring lengthener'. No trials I found test it against other hamstring stretches; it is a movement drill, and as with all of these the gains in reach are most likely tolerance, not length. Deep knee bend means it is not a cold opener."
  },
  {
    "id": "ragdoll-forward-fold",
    "name": "Ragdoll Forward Fold",
    "aka": [
      "Standing forward fold",
      "Uttanasana",
      "Rag doll hang"
    ],
    "regions": [
      "hamstrings",
      "back"
    ],
    "role": "main",
    "intensity": 1,
    "summary": "Stand with your feet hip-width apart, bend your knees, fold forward and let your head, arms and torso hang.",
    "why": "The simplest possible hamstring stretch: gravity does it. With the knees bent, the stretch stays in the belly of the muscle and your back is free to hang. It is a good position for breathing out and for seeing how your back and hamstrings share the work.",
    "targets": [
      "hamstrings",
      "spinal erectors"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 45,
      "sets": 1,
      "perSide": false
    },
    "cues": [
      "Bend the knees as much as you need to.",
      "Let your head, neck and arms hang heavy.",
      "Roll up slowly, head last."
    ],
    "shouldFeel": "A stretch in the backs of the thighs and a heavy, hanging sense in the back.",
    "shouldNotFeel": "Pain in the lower back, light-headedness, or numbness in the legs.",
    "regressions": [
      {
        "label": "Hands on thighs",
        "detail": "Brace your hands on your thighs and go only halfway.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Hands on a chair",
        "detail": "Put your hands on a chair seat.",
        "props": [
          "chair"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Straighter knees",
        "detail": "Reduce the bend gradually."
      },
      {
        "label": "Toe grab",
        "detail": "Hold your big toes and gently pull to lengthen."
      }
    ],
    "props": [
      "none"
    ],
    "officeFriendly": true,
    "barefootOnly": false,
    "contraindications": [
      "backPain",
      "bloodPressure",
      "osteoporosis",
      "sciatica",
      "balance",
      "hipReplacement"
    ],
    "dailySafe": true,
    "source": [
      "Hatha yoga: Uttanasana (Yoga Journal, YogaUOnline)"
    ],
    "evidenceNote": "Yoga teaching claims that hanging like this 'decompresses the spine' or 'flushes the brain'. There is no evidence for either. It is a passive stretch that also puts your spine into full forward flexion, which is why it is not for people with osteoporosis, or a back that flares when they bend. The head is below the heart, so come up slowly."
  }
];
