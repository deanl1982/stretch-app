import type { Exercise } from '../types.ts';

/**
 * cossack: imported from web research, then reviewed by hand. This file is the source of
 * truth now - edit it freely. The research briefs' review-only fields (pose hints, URLs,
 * evidence grades) were stripped on import.
 *
 * Same editorial rule as the core library: where a source offered a mechanism, we state a
 * feeling and a behaviour instead, and `evidenceNote` corrects any claim that did not survive
 * checking. Evidence for most stretching is weak; the notes say so where it matters.
 */
export const COSSACK: Exercise[] = [
  {
    "id": "cossack-squat",
    "name": "Cossack Squat",
    "aka": [
      "Cossack",
      "Lateral squat",
      "Side squat",
      "Horse-stance transition",
      "Cossack switch",
      "Low lateral shift",
      "Low switch Cossack squat",
      "Side-to-side squat"
    ],
    "regions": [
      "hips",
      "hamstrings"
    ],
    "role": "main",
    "intensity": 3,
    "summary": "From a wide stance, sit deep onto one leg while the other leg stays straight out to the side, toes up.",
    "why": "Most lifters train the hips in a straight line, forwards and back, and almost never side-on. This asks the inner thigh and the back of the straight leg to lengthen while the other leg holds your whole weight, so it builds range and strength in the same rep. It is also an honest test: if one side will not go down, you have found the tight side.",
    "targets": [
      "hip adductors",
      "medial hamstrings",
      "hip abduction range",
      "knee flexion",
      "ankle dorsiflexion",
      "glutes"
    ],
    "dose": {
      "kind": "reps",
      "reps": 5,
      "sets": 2,
      "perSide": true,
      "tempoNote": "3s down, 1s pause, 2s up.",
      "secondsPerRep": 6
    },
    "cues": [
      "Sit back and down onto one leg. Keep your chest up and your arms reaching forward.",
      "Keep the bent knee over your middle toes. Do not let it dive inwards.",
      "Straight leg: heel down, toes up. Toes down is fine if that is what your ankle allows.",
      "Only go as deep as you control. Stand up the way you went down."
    ],
    "shouldFeel": "A stretch along the inner thigh and hamstring of the straight leg, and hard work in the thigh and buttock of the bent leg.",
    "shouldNotFeel": "Sharp or pinching pain in the groin or the front of the hip, a pull on the inside of the bent knee, or the heel wrenching off the floor.",
    "regressions": [
      {
        "label": "Hands on a chair",
        "detail": "Put both hands on a sturdy chair or couch in front of you and let your arms take as much weight as you need. The straight leg may bend a little at first.",
        "props": [
          "chair"
        ]
      },
      {
        "label": "Heel on a wedge",
        "detail": "A book or plate under the heel of the bent leg, so the ankle has less range to find.",
        "props": [
          "wedge"
        ]
      },
      {
        "label": "Reach or hold a light weight",
        "detail": "Reach your arms forward, or hold something light out in front of you, to counterbalance as your hips sit back.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Half depth",
        "detail": "Sit only until the thigh is about level, keeping the straight leg's foot flat. This is a plain side squat.",
        "props": [
          "none"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Drop the props",
        "detail": "No wedge, no chair, arms reaching only. Heels stay flat."
      },
      {
        "label": "Slower lowering",
        "detail": "Take 5 seconds down and pause 2 seconds at the bottom."
      },
      {
        "label": "Horse-stance transition",
        "detail": "Cross from one side to the other without standing up. See the transition entry."
      },
      {
        "label": "Add a light weight at the chest",
        "detail": "Strength work, not mobility. Only after weeks of clean bodyweight reps, and keep it out of the daily routine."
      }
    ],
    "props": [
      "chair",
      "wedge"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "knee",
      "groin",
      "hipReplacement",
      "balance"
    ],
    "dailySafe": false,
    "source": [
      "Strength Side Follow Alongs - I Only Do This For Hip Mobility, now (https://youtu.be/SZ7f_nXJJ98)",
      "BarBend",
      "Rehab Hero",
      "Diesel Strength & Conditioning (James Smith)"
    ],
    "evidenceNote": "The video says that if you master this you will never need to stretch your groins or hamstrings again, and that it bulletproofs the lower body. The first is an overreach. A pooled analysis of 11 trials (Afonso 2021) found strength training through a full range improved range of motion about as much as stretching. A 2025 review of 36 trials found resistance training improved joint range compared with no training, and its authors warn that this is not a reason to drop stretching. Both are mixed and inconsistent in design. We found no trial of the Cossack squat itself, so a fair summary is: a deep, loaded, controlled range like this can improve range and is a reasonable substitute for some stretching, but never needing to stretch again is one person's experience. The second claim is marketing. No exercise is known to make joints bulletproof or to prevent injury on its own. What is supported is narrower: strength training in general lowered sports injuries in athlete trials (Lauersen 2014), and an adductor strengthening programme built on the Copenhagen exercise cut groin problems by about 41 percent in footballers (Harøy 2019). The Cossack squat is a different exercise from both, so neither result transfers automatically. Coaches who like this exercise still warn that most people do not have the range for it, and that forcing it can strain the hamstring or inner thigh, and load the knee when the foot is planted. On the heel: the video says everyone falls backwards and the counterweight solves it. That is partly right. A limited ankle range is the usual reason the heel lifts or you tip backwards, and a wedge lowers that demand. Reaching or holding a weight is a genuine counterbalance, so the hips can sit further back. Both work around the limit; neither fixes it, and ankle work does. The video also lets the heel float off the floor. We keep it down or on a wedge because a floating heel makes the position less stable under load."
  },
  {
    "id": "wide-stance-groin-opener",
    "name": "Wide-Stance Groin Opener",
    "aka": [
      "Wide-stance squat hold",
      "Sumo squat hold",
      "Wide squat"
    ],
    "regions": [
      "hips"
    ],
    "role": "main",
    "intensity": 2,
    "summary": "Stand wide with your toes turned out, sit down between your legs, and rest your hands on your inner thighs.",
    "why": "The Cossack squat needs the inner thighs to give way before it needs the legs to be strong. This is the quiet version: no single-leg load, just time in a wide, deep position where you can breathe. It is also a fair warm-up for the Cossack squat, though never a cold start.",
    "targets": [
      "hip adductors",
      "hip abduction",
      "hip external rotation",
      "hip flexion",
      "ankle dorsiflexion"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 30,
      "sets": 2,
      "perSide": false
    },
    "cues": [
      "Feet wider than your shoulders, toes turned out to the angle where your knees track over your toes.",
      "Hands on your inner thighs. Guide the knees out gently. Do not shove them.",
      "Sit only as deep as you can breathe slowly. Keep your chest up.",
      "Hold something if you need to. This is not a balance test."
    ],
    "shouldFeel": "A deep, even stretch along both inner thighs and into the groin that eases as you breathe.",
    "shouldNotFeel": "Sharp or pinching pain deep in the crease of the hip, a pull in the inner thigh that feels like a strain, or pain on the inside of the knee.",
    "regressions": [
      {
        "label": "Hold a doorframe or post",
        "detail": "Grab something solid at chest height in front of you and let your arms take a third of your weight.",
        "props": [
          "doorframe"
        ]
      },
      {
        "label": "Sit on a block or bottom step",
        "detail": "Stop short of your full depth and rest there.",
        "props": [
          "block"
        ]
      },
      {
        "label": "Heels on a wedge",
        "detail": "A book or plate under each heel takes the pressure off the ankle.",
        "props": [
          "wedge"
        ]
      },
      {
        "label": "Narrower stance, shallower depth",
        "detail": "Take a stance only a little wider than your shoulders and stop where the stretch is mild.",
        "props": [
          "none"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Gentle weight shifts",
        "detail": "Slowly move your weight a little towards one foot, then the other, holding 3 to 5 seconds each side. Stay inside a range that is comfortable."
      },
      {
        "label": "Longer holds",
        "detail": "Build towards 45 to 60 seconds. Extra time, not extra force."
      }
    ],
    "props": [
      "none"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "knee",
      "groin",
      "hipReplacement"
    ],
    "dailySafe": true,
    "maxHoldSeconds": 60,
    "source": [
      "Strength Side Follow Alongs - I Only Do This For Hip Mobility, now (https://youtu.be/SZ7f_nXJJ98)",
      "Rehab Hero",
      "BarBend"
    ],
    "evidenceNote": "The video says the deeper you go the better and to push the knees out with your hands. We softened both. Pushing hard into the end of hip abduction and rotation is exactly where groin strains and pinching at the front of the hip happen: symptoms of hip impingement typically show up at end range, such as a deep squat, and while limited hip range has been proposed as a groin injury risk factor in athletes, reviews disagree and the stronger risk factors are a previous groin injury and weak hip adductors. That argues for building range gradually, not forcing it. There is no evidence that a forced deep groin stretch prevents injury. Time in a comfortable deep position is what the evidence for stretching supports. We set dailySafe to false to be conservative for men with a groin-strain history; with light cues and a supported version it could reasonably be relaxed later. The video also says this is done before Cossack squats to create space in the groin. That is plausible, since stretching does briefly raise range, but the effect is small and short-lived."
  },
  {
    "id": "standing-side-leg-lift",
    "name": "Standing Side Leg Lift",
    "aka": [
      "Sidekick hold",
      "Standing hip abduction",
      "Standing side leg raise",
      "Standing side-leg isometric"
    ],
    "regions": [
      "hips"
    ],
    "role": "main",
    "intensity": 1,
    "summary": "Stand tall, lift one leg straight out to the side, and lower it slowly.",
    "why": "The muscles on the outside of your hips keep your pelvis level every time you stand on one leg, and they are what your standing leg leans on in a Cossack squat. If you sit most of the day they are easy to neglect. This is the simplest way to wake them up and it takes no equipment.",
    "targets": [
      "gluteus medius",
      "hip abductors",
      "standing-leg stability"
    ],
    "dose": {
      "kind": "reps",
      "reps": 10,
      "sets": 2,
      "perSide": true,
      "tempoNote": "1s up, 2s down.",
      "secondsPerRep": 3
    },
    "cues": [
      "Stand tall with a hand on a wall or chair. Do not lean.",
      "Lift the leg straight out to the side with the toes pointing forward.",
      "Lift only as high as you can with your torso upright and your hips level.",
      "Lower slowly."
    ],
    "shouldFeel": "Work in the outside of the lifted hip, and in the buttock and outer hip of the leg you are standing on.",
    "shouldNotFeel": "Pinching at the front or side of the hip, back pain, or the body swaying sideways to get the leg higher.",
    "regressions": [
      {
        "label": "Hold the wall with both hands",
        "detail": "Face it with both hands on the wall. Take as much balance from it as you need.",
        "props": [
          "wall"
        ]
      },
      {
        "label": "Smaller range",
        "detail": "Lift only 15 to 20 degrees, about a foot off the floor.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Lie on your side",
        "detail": "Do the same lift lying on your side with the bottom knee bent. No balance needed.",
        "props": [
          "none"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Pause at the top",
        "detail": "Hold the leg out for 10 to 15 seconds instead of lowering it. Start low, and once that is steady hold it higher - as high as you can keep your hips level."
      },
      {
        "label": "Slower lowering",
        "detail": "Take 4 seconds coming down."
      },
      {
        "label": "Band above the knees",
        "detail": "A light band around the thighs adds resistance."
      }
    ],
    "props": [
      "wall"
    ],
    "officeFriendly": true,
    "barefootOnly": false,
    "contraindications": [
      "balance"
    ],
    "dailySafe": true,
    "source": [
      "Strength Side Follow Alongs - I Only Do This For Hip Mobility, now (https://youtu.be/SZ7f_nXJJ98)",
      "Distefano et al, JOSPT 2009"
    ],
    "evidenceNote": "The video says to lift the leg as high as you can and says the Cossack squat takes a lot of strength on the outside of the hips. We changed the first: lifting further than your pelvis can stay level just means the trunk leans and the hip hitches, which takes the work away from the muscle you are trying to train. The second is reasonable but not measured: the standing leg in a Cossack squat does resist the pelvis dropping sideways, but we did not find a study showing that abductor strength limits Cossack depth. Distefano 2009 found that side-lying hip abduction activated gluteus medius more than clams, lunges or hops (about 81 percent of a maximal contraction). It did not test the standing version, so treat standing as a practical variation, not a proven equal. Hip abductor weakness is linked with hip and groin problems in athletes, but linked is not proven cause."
  }
];
