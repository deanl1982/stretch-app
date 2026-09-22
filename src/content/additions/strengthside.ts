import type { Exercise } from '../types.ts';

/**
 * strengthside: imported from web research, then reviewed by hand. This file is the source of
 * truth now - edit it freely. The research briefs' review-only fields (pose hints, URLs,
 * evidence grades) were stripped on import.
 *
 * Same editorial rule as the core library: where a source offered a mechanism, we state a
 * feeling and a behaviour instead, and `evidenceNote` corrects any claim that did not survive
 * checking. Evidence for most stretching is weak; the notes say so where it matters.
 */
export const STRENGTHSIDE: Exercise[] = [
  {
    "id": "toe-kneeling-rock",
    "name": "Toe-Kneeling Rock",
    "aka": [
      "Kneeling deadlift rock",
      "Toe-tuck rock"
    ],
    "regions": [
      "ankles",
      "hips"
    ],
    "role": "main",
    "intensity": 2,
    "summary": "Kneel with your toes tucked under, then rock your hips back towards your heels and forward again.",
    "why": "It warms up the same toe range as toes-tucked kneeling but as a moving rock rather than a sustained sit-back, so it is a gentler way in and it doubles as a hip hinge drill — most of the work is the hips moving back over stacked toes, not the toes taking your full weight.",
    "targets": [
      "big toe extension",
      "ankle plantarflexion",
      "hip hinge"
    ],
    "dose": {
      "kind": "reps",
      "reps": 8,
      "sets": 1,
      "perSide": false,
      "tempoNote": "2s back, 2s forward.",
      "secondsPerRep": 4
    },
    "cues": [
      "Tuck all ten toes under and keep your hands on the floor for balance.",
      "Rock your hips back towards your heels, then forward until your hips are over your knees.",
      "Keep the rock small until the toes stop complaining.",
      "Stop rocking back the moment it turns from stretch into pain."
    ],
    "shouldFeel": "A stretch across the balls of the feet that eases as you go, and light hip and thigh work on the forward rock.",
    "shouldNotFeel": "A sharp, pinpoint ache under the big toe joint, or knee pain.",
    "regressions": [
      {
        "label": "Folded towel under the toes",
        "detail": "Cuts the angle at the toe joints.",
        "props": [
          "towel"
        ]
      },
      {
        "label": "Hands on a chair",
        "detail": "Take weight off the toes through your arms.",
        "props": [
          "chair"
        ]
      },
      {
        "label": "Smaller rock",
        "detail": "Only rock back an inch or two.",
        "props": [
          "none"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Remove the towel",
        "detail": "Toes straight onto the floor."
      },
      {
        "label": "Rock further back",
        "detail": "Towards a full toes-tucked kneeling sit-back."
      }
    ],
    "props": [
      "towel"
    ],
    "officeFriendly": false,
    "barefootOnly": true,
    "contraindications": [
      "knee",
      "plantarFascia",
      "bigToe"
    ],
    "dailySafe": true,
    "maxHoldSeconds": 20,
    "source": [
      "Strength Side Follow Alongs (Gentle Hip Mobility Flow, https://youtu.be/a7PMV1nDLK0)"
    ],
    "evidenceNote": "Same joint as toes-tucked kneeling, so the same caution applies: a hard bony or pinpoint pain under the big toe is a stop signal, not something to rock through."
  },
  {
    "id": "fisherman-squat-switches",
    "name": "Fisherman Squat Switches",
    "aka": [
      "Squat weight shifts",
      "Skater squat switches"
    ],
    "regions": [
      "hips",
      "ankles"
    ],
    "role": "main",
    "intensity": 2,
    "summary": "From a wide squat, shift your weight from one bent leg to the other without standing up, hands down at first, then no hands.",
    "why": "This is the moving cousin of the Cossack squat: instead of sitting into one side and holding, you shift weight side to side, which trains the transition rather than the end position. That transition is what a lateral step or a change of direction actually asks of the hip.",
    "targets": [
      "hip adductors",
      "hip abduction range",
      "ankle dorsiflexion",
      "balance"
    ],
    "dose": {
      "kind": "reps",
      "reps": 8,
      "sets": 2,
      "perSide": false,
      "tempoNote": "2s per shift.",
      "secondsPerRep": 4
    },
    "cues": [
      "Start wide, hands down between your feet for balance.",
      "Shift your weight fully onto one leg, letting the other straighten out to the side.",
      "Keep the bent knee tracking over the middle toes.",
      "Once it feels controlled, lift your hands off the floor."
    ],
    "shouldFeel": "Work in the thigh and glute of the bent leg, and a stretch down the inner thigh of the straight leg.",
    "shouldNotFeel": "Pinching in the groin or front of the hip, or the heel of the bent leg lifting off the floor.",
    "regressions": [
      {
        "label": "Hands down throughout",
        "detail": "Keep both hands on the floor for the whole set.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Smaller shifts",
        "detail": "Do not straighten the far leg fully.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Hold a chair",
        "detail": "One or both hands on a chair seat in front of you.",
        "props": [
          "chair"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Hands off",
        "detail": "Arms reaching forward instead of down."
      },
      {
        "label": "Slower switches",
        "detail": "3–4 seconds per shift."
      },
      {
        "label": "Progress to Cossack squat",
        "detail": "Add a full sit-and-hold on each side."
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
      "hipReplacement",
      "balance"
    ],
    "dailySafe": true,
    "source": [
      "Strength Side Follow Alongs (Gentle Hip Mobility Flow, https://youtu.be/a7PMV1nDLK0)"
    ]
  },
  {
    "id": "hip-escape",
    "name": "Hip Escape (Shrimping)",
    "aka": [
      "Shrimping",
      "Ebi",
      "Hip scoot"
    ],
    "regions": [
      "hips",
      "back"
    ],
    "role": "main",
    "intensity": 2,
    "summary": "Lying on your back, drive one heel into the floor to slide your hips away from it, turning slightly onto your side as you go, then switch sides.",
    "why": "A basic grappling drill — wrestlers and jiu-jitsu players use it constantly to move their hips without using their hands. For anyone else it is a cheap way to link a foot-driven push with hip and trunk rotation, a combination almost nothing else in a lifting or running routine asks for.",
    "targets": [
      "hip flexion",
      "trunk rotation",
      "foot-driven power"
    ],
    "dose": {
      "kind": "reps",
      "reps": 6,
      "sets": 2,
      "perSide": true,
      "tempoNote": "One unhurried scoot per rep.",
      "secondsPerRep": 4
    },
    "cues": [
      "Lie on your back, knees bent, feet flat.",
      "Plant one foot and push through it to slide your hips away, turning your shoulders slightly the other way.",
      "Let the far knee come up towards your chest as you turn.",
      "Reset flat on your back between reps."
    ],
    "shouldFeel": "Work through the leg that is pushing, and a light stretch through the hip and side of the trunk as you turn.",
    "shouldNotFeel": "Lower back strain from twisting hard, or neck or shoulder discomfort if you elevate the hips (see progression).",
    "regressions": [
      {
        "label": "Smaller scoot",
        "detail": "Slide only a few inches per rep.",
        "props": [
          "none"
        ]
      },
      {
        "label": "No turn",
        "detail": "Just practise the foot-drive and hip slide, torso staying flat.",
        "props": [
          "none"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Elevated hip escape",
        "detail": "Prop up on one forearm and shoulder to lift the hips slightly as you scoot — a bridging pattern that loads the shoulder and neck, so build the flat version first and stop if either aches."
      }
    ],
    "props": [
      "none"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "shoulder",
      "backPain"
    ],
    "dailySafe": true,
    "source": [
      "Strength Side Follow Alongs (Gentle Hip Mobility Flow, https://youtu.be/a7PMV1nDLK0)"
    ],
    "evidenceNote": "This is not a mobility-coach invention — it is \"shrimping\" (Japanese: ebi), a foundational movement from Judo and Brazilian Jiu-Jitsu used to create space and escape pins. Its home is grappling, not this channel; the mobility framing here is a repurposing of an established combat-sport drill. The elevated, shoulder-supported version is a bridging pattern and loads the neck and shoulder — treat it as an optional progression, not the default."
  },
  {
    "id": "ostrich-walk",
    "name": "Ostrich Walk",
    "aka": [
      "Stiff-leg hamstring walk"
    ],
    "regions": [
      "hamstrings"
    ],
    "role": "main",
    "intensity": 2,
    "summary": "Standing tall with straight legs, reach down to hold your toes or shins and walk forward and back in small steps.",
    "why": "A moving hamstring stretch that keeps you upright and breathing rather than folded and static, and it doubles as a balance and hip-hinge check — the leg you are stepping onto has to control the stretch on the other side as you go.",
    "targets": [
      "hamstrings",
      "hip hinge",
      "balance"
    ],
    "dose": {
      "kind": "reps",
      "reps": 8,
      "sets": 1,
      "perSide": false,
      "tempoNote": "One small step forward or back per rep, about 2s each.",
      "secondsPerRep": 2
    },
    "cues": [
      "Hinge from the hips, back long, and hold your shins or toes.",
      "Keep both knees as straight as your hamstrings allow — a soft bend is fine.",
      "Take small steps forward, then walk backward the same way.",
      "Let your head hang; do not force it up to look forward."
    ],
    "shouldFeel": "A steady stretch through the backs of both thighs that eases as you warm up.",
    "shouldNotFeel": "Electric or shooting pain down the leg, or dizziness from the head-down position.",
    "regressions": [
      {
        "label": "Hold higher up the leg",
        "detail": "Shins or knees instead of toes.",
        "props": [
          "none"
        ]
      },
      {
        "label": "More knee bend",
        "detail": "Bend the knees generously and straighten gradually with practice.",
        "props": [
          "none"
        ]
      },
      {
        "label": "No stepping",
        "detail": "Hold the fold still and just breathe, without walking.",
        "props": [
          "none"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Straighter knees",
        "detail": "Reduce the bend over weeks."
      },
      {
        "label": "Longer steps",
        "detail": "Cover more ground per step."
      }
    ],
    "props": [
      "none"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "sciatica",
      "backPain",
      "balance",
      "bloodPressure"
    ],
    "dailySafe": true,
    "source": [
      "Strength Side Follow Alongs (Gentle Hip Mobility Flow, https://youtu.be/a7PMV1nDLK0)"
    ]
  },
  {
    "id": "horse-stance-internal-rotation",
    "name": "Horse-Stance Internal Rotation",
    "aka": [
      "Half-squat knee-in drill",
      "Horse-stance knee drive"
    ],
    "regions": [
      "hips"
    ],
    "role": "main",
    "intensity": 2,
    "summary": "From a wide half-squat stance, drive one knee inward and down while staying low, then reset and switch sides.",
    "why": "Most hip mobility work asks for external rotation (turning the knee out). This drives the opposite direction — internal rotation under a bit of load — which is the range that goes missing first in anyone who only squats and deadlifts in a straight line.",
    "targets": [
      "hip internal rotation",
      "adductors",
      "ankle stability"
    ],
    "dose": {
      "kind": "reps",
      "reps": 6,
      "sets": 2,
      "perSide": true,
      "tempoNote": "2s drive in, 2s reset.",
      "secondsPerRep": 4
    },
    "cues": [
      "Set up in a wide, low half-squat, hands loose in front.",
      "Drive one knee inward and slightly down, letting that hip rotate in.",
      "Keep the supporting foot flat — do not let the arch collapse.",
      "Reset to centre before switching sides."
    ],
    "shouldFeel": "A stretch in the outer hip and glute of the rotating leg, and work through both thighs.",
    "shouldNotFeel": "Pain on the inside of either knee, or the supporting arch collapsing hard.",
    "regressions": [
      {
        "label": "Higher stance",
        "detail": "Less knee bend, smaller rotation.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Hold a chair or wall",
        "detail": "For balance while you learn the motion.",
        "props": [
          "chair",
          "wall"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Lower stance",
        "detail": "More knee bend before you rotate."
      },
      {
        "label": "Slower reps",
        "detail": "3–4 seconds each way."
      }
    ],
    "props": [
      "none"
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
      "Strength Side Follow Alongs (Gentle Hip Mobility Flow, https://youtu.be/a7PMV1nDLK0)"
    ]
  },
  {
    "id": "horse-jump",
    "name": "Horse Jump",
    "aka": [
      "Frog progression Level 1"
    ],
    "regions": [
      "hips",
      "fullBody"
    ],
    "role": "load",
    "intensity": 3,
    "summary": "From a wide stance with hands down, take a small jump forward and land softly in the same wide, hands-down position.",
    "why": "The first rung of a jumping progression that builds towards the frog hop. It is here mainly as the honest, lower-impact entry point — most men reading this should stay here and skip the higher jumps unless they specifically want plyometric work.",
    "targets": [
      "hip flexion power",
      "landing control",
      "wrist and shoulder loading tolerance"
    ],
    "dose": {
      "kind": "reps",
      "reps": 5,
      "sets": 2,
      "perSide": false,
      "tempoNote": "One small jump per rep, full reset between.",
      "secondsPerRep": 3
    },
    "cues": [
      "Set up wide, hands flat on the floor, hips low.",
      "Jump forward a short distance — inches, not feet.",
      "Land soft, hands and feet together, and absorb through bent elbows and knees.",
      "Reset fully before the next jump."
    ],
    "shouldFeel": "A brief, controlled effort through the hips, arms and shoulders.",
    "shouldNotFeel": "A jarring landing, wrist pain, or any pain in the knees on landing.",
    "regressions": [
      {
        "label": "Step, do not jump",
        "detail": "Walk the feet forward to the hands instead of jumping — the static, supported version this app treats as the default.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Smaller jump",
        "detail": "An inch or two of travel.",
        "props": [
          "none"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Frog hop",
        "detail": "A deeper squat with a jump back to a hand-support position."
      }
    ],
    "props": [
      "none"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "knee",
      "wrist",
      "balance",
      "bloodPressure"
    ],
    "dailySafe": false,
    "source": [
      "Strength Side Follow Alongs (This Squat Transformed my Body, https://youtu.be/NaYuRpfhPfE)"
    ],
    "evidenceNote": "This is a jumping, plyometric drill, not a stretch. It is not appropriate as a cold-start opener or a daily item for a deconditioned adult — the stepping regression is the version this app should actually hand out by default; treat the jump itself as optional and only for someone already comfortable landing on their hands and feet."
  },
  {
    "id": "frog-hop",
    "name": "Frog Hop",
    "aka": [
      "Frog jump",
      "Deep squat to hand-support hop"
    ],
    "regions": [
      "hips",
      "fullBody"
    ],
    "role": "load",
    "intensity": 3,
    "summary": "From a deep squat, jump both feet back into a hand-supported plank-like position, then hop them back in.",
    "why": "A whole-body plyometric that asks the hips, shoulders and wrists to take a real landing load. It belongs later in a training progression, not in a general daily mobility routine — most men should use the static deep squat hold and the stepping regression instead.",
    "targets": [
      "hip power",
      "shoulder and wrist loading",
      "landing control"
    ],
    "dose": {
      "kind": "reps",
      "reps": 4,
      "sets": 2,
      "perSide": false,
      "tempoNote": "One full hop out and back per rep.",
      "secondsPerRep": 3
    },
    "cues": [
      "Start in a deep squat, hands on the floor in front.",
      "Jump both feet back at once into a supported plank-ish position.",
      "Hop them straight back in under your hips.",
      "Land soft every time — quiet feet, bent elbows."
    ],
    "shouldFeel": "Effortful whole-body work, breathing up within a few reps.",
    "shouldNotFeel": "Wrist pain, a hard jarring landing, or lower back sagging in the back position.",
    "regressions": [
      {
        "label": "Step instead of hop",
        "detail": "Walk the feet back and in rather than jumping — the version to actually reach for daily.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Fewer reps",
        "detail": "2 reps, full recovery between.",
        "props": [
          "none"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Frog kick-through",
        "detail": "Add a diagonal leg thread on the way back."
      }
    ],
    "props": [
      "none"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "knee",
      "wrist",
      "shoulder",
      "balance",
      "bloodPressure"
    ],
    "dailySafe": false,
    "source": [
      "Strength Side Follow Alongs (This Squat Transformed my Body, https://youtu.be/NaYuRpfhPfE)"
    ],
    "evidenceNote": "Impact work like this is optional, not the default. For a deconditioned adult, the deep squat hold plus the stepping regression delivers the same hip range with none of the landing load — reach for those first and treat the hop as something to earn."
  },
  {
    "id": "frog-kick-through",
    "name": "Frog Kick-Through",
    "aka": [
      "Thread-the-leg squat jump"
    ],
    "regions": [
      "fullBody",
      "hips"
    ],
    "role": "load",
    "intensity": 3,
    "summary": "From the frog hop's back position, thread one leg diagonally underneath your body and kick it through to the far side, then return.",
    "why": "A rotational, floor-based power move sitting well up a jumping progression. It is included for completeness because the source teaches it, not because most readers of this app should be doing it — it needs a frog hop and solid wrist and shoulder tolerance first.",
    "targets": [
      "rotational hip power",
      "shoulder stability",
      "wrist loading"
    ],
    "dose": {
      "kind": "reps",
      "reps": 4,
      "sets": 2,
      "perSide": true,
      "tempoNote": "One thread-through per rep, controlled.",
      "secondsPerRep": 3
    },
    "cues": [
      "From the hand-supported back position, lift one hip and thread that leg diagonally under your body.",
      "Let the leg swing through to the far side, then bring it back.",
      "Keep your supporting arm locked and your core braced throughout.",
      "Land the returning foot softly."
    ],
    "shouldFeel": "Strong rotational work through the hips and trunk, and real load through the supporting wrist and shoulder.",
    "shouldNotFeel": "Wrist or shoulder pain, or any twinge in the lower back on the rotation.",
    "regressions": [
      {
        "label": "Slow, no jump",
        "detail": "Thread the leg through slowly from a static hand-support hold, no hop involved.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Master frog hop first",
        "detail": "Do not attempt this until the plain frog hop is comfortable.",
        "props": [
          "none"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Frog to crab support hold",
        "detail": "The next step in the same progression."
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
      "knee",
      "balance"
    ],
    "dailySafe": false,
    "source": [
      "Strength Side Follow Alongs (This Squat Transformed my Body, https://youtu.be/NaYuRpfhPfE)"
    ],
    "evidenceNote": "This sits several rungs up a plyometric progression. It is genuinely optional — most of the mobility benefit of this whole sequence comes from the static frog and crab positions below it, not from the jumping and threading."
  },
  {
    "id": "frog-crab-support-hold",
    "name": "Frog-to-Crab Support Hold",
    "aka": [
      "Crab transition hold",
      "Frog Level 4 (beginner)"
    ],
    "regions": [
      "fullBody",
      "hips"
    ],
    "role": "load",
    "intensity": 2,
    "summary": "From a deep squat, rotate to face upward into a crab-style hold, hands and feet on the floor, hips lifted, then rotate back.",
    "why": "The static, non-jumping version of the frog-to-crab family — a genuine wrist and shoulder loading position without any impact, and the sensible entry point if the jumping variants further up this progression do not interest you.",
    "targets": [
      "shoulder extension",
      "wrist extension tolerance",
      "hip extension"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 15,
      "sets": 2,
      "perSide": false
    },
    "cues": [
      "From a deep squat, turn to face the ceiling, planting your hands behind you.",
      "Lift your hips so your body forms a table, feet and hands flat.",
      "Keep your neck relaxed, chin slightly tucked, not craned back.",
      "Rotate back to the squat under control."
    ],
    "shouldFeel": "Work through the shoulders, triceps and glutes, and a stretch across the front of the wrists.",
    "shouldNotFeel": "Sharp wrist pain, or the lower back sagging towards the floor.",
    "regressions": [
      {
        "label": "Fingers turned out",
        "detail": "Point fingers slightly outward or backward to ease wrist strain.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Shorter hold",
        "detail": "5–10 seconds.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Hips lower",
        "detail": "Do not lift all the way to a flat table.",
        "props": [
          "none"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Frog to tuck L-sit",
        "detail": "Bring the knees to the chest from this position."
      }
    ],
    "props": [
      "none"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "wrist",
      "shoulder"
    ],
    "dailySafe": true,
    "source": [
      "Strength Side Follow Alongs (This Squat Transformed my Body, https://youtu.be/NaYuRpfhPfE)"
    ]
  },
  {
    "id": "crab-press",
    "name": "Crab Press",
    "aka": [
      "Crab hip press",
      "Crab glute bridge"
    ],
    "regions": [
      "fullBody",
      "hips"
    ],
    "role": "load",
    "intensity": 2,
    "summary": "In the crab support position, squeeze your glutes to press your hips higher, hold, then lower under control.",
    "why": "The finishing strength move for the whole crab family: it turns the crab hold into a working hip-extension exercise, and it activates the shoulders and triceps in a stretched-back position almost nothing else in a normal gym routine touches.",
    "targets": [
      "hip extension",
      "glutes",
      "shoulder extension",
      "triceps"
    ],
    "dose": {
      "kind": "reps",
      "reps": 8,
      "sets": 2,
      "perSide": false,
      "tempoNote": "2s up, 1s hold, 2s down.",
      "secondsPerRep": 5
    },
    "cues": [
      "Set up in the crab support position, fingers pointing back or out.",
      "Squeeze your glutes hard and press your hips up as high as you can.",
      "Hold a beat at the top, then lower under control.",
      "Keep your neck relaxed throughout — do not crane it back."
    ],
    "shouldFeel": "The glutes and backs of the shoulders working hard.",
    "shouldNotFeel": "Wrist pain, or neck strain from looking backward.",
    "regressions": [
      {
        "label": "Smaller range",
        "detail": "Press the hips up only partway.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Feet on a low step",
        "detail": "Reduces the range needed at the hip.",
        "props": [
          "step"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Pause longer at the top",
        "detail": "3–4 seconds."
      },
      {
        "label": "Single-leg crab press",
        "detail": "Lift one foot at the top of the press."
      }
    ],
    "props": [
      "none"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "wrist",
      "shoulder"
    ],
    "dailySafe": true,
    "source": [
      "Strength Side Follow Alongs (This Squat Transformed my Body, https://youtu.be/NaYuRpfhPfE)",
      "Strength Side Follow Alongs (The Animal Mobility Everyone NEEDS, https://youtu.be/-rW0583WZ6w)"
    ],
    "evidenceNote": "This move appears under two names in the source material (\"crab press\" and \"crab hip press\") for what is the same glute-and-shoulder pressing pattern; they are combined into one entry here."
  },
  {
    "id": "crab-squat",
    "name": "Crab Squat",
    "aka": [
      "Crab-to-squat transition"
    ],
    "regions": [
      "hips",
      "fullBody"
    ],
    "role": "load",
    "intensity": 2,
    "summary": "Rotate between a crab support position and a deep squat and back, without your hands leaving the floor.",
    "why": "It links two positions this app already treats as valuable — the deep squat and a shoulder-extended crab hold — into one continuous transition, which trains the control of moving between end ranges rather than just holding one.",
    "targets": [
      "hip flexion and extension",
      "ankle dorsiflexion",
      "shoulder extension",
      "wrist loading"
    ],
    "dose": {
      "kind": "reps",
      "reps": 6,
      "sets": 2,
      "perSide": false,
      "tempoNote": "3s each direction.",
      "secondsPerRep": 6
    },
    "cues": [
      "Start in a deep squat, hands on the floor in front.",
      "Rotate to face the ceiling, hands planting behind you, hips lifting into the crab position.",
      "Rotate back through to the deep squat.",
      "Keep the transition slow enough to control both end positions."
    ],
    "shouldFeel": "A broad mix of hip, ankle and shoulder work, effortful but not sharp anywhere.",
    "shouldNotFeel": "Wrist pain, or knee pain in either end position.",
    "regressions": [
      {
        "label": "Pause at each end",
        "detail": "Hold the squat and the crab for a beat rather than flowing continuously.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Smaller crab lift",
        "detail": "Do not lift the hips all the way to flat in the crab.",
        "props": [
          "none"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Both directions smoothly",
        "detail": "Rotate one way, then reverse, without pausing."
      },
      {
        "label": "Add the crab press",
        "detail": "Press the hips higher each time you reach the crab position."
      }
    ],
    "props": [
      "none"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "knee",
      "wrist",
      "hipReplacement"
    ],
    "dailySafe": true,
    "source": [
      "Strength Side Follow Alongs (7 Minute Full Body Stretch, https://youtu.be/zcrW26c5YZc)"
    ]
  },
  {
    "id": "torso-lateral-shift",
    "name": "Standing Torso Lateral Shift",
    "aka": [
      "Dancer's shift",
      "Rib shift with side bend"
    ],
    "regions": [
      "back"
    ],
    "role": "opener",
    "intensity": 1,
    "summary": "Standing tall, shift your ribcage sideways over your hips without leaning, then add a gentle side bend on top of the shift.",
    "why": "A small, controlled way to move the ribcage independently of the pelvis — a dancer's drill that most lifters never practise, since squats, deadlifts and running all keep the ribs and hips stacked and moving together.",
    "targets": [
      "lateral flexion",
      "trunk dissociation",
      "obliques",
      "quadratus lumborum"
    ],
    "dose": {
      "kind": "reps",
      "reps": 8,
      "sets": 1,
      "perSide": true,
      "tempoNote": "2s shift, 2s return.",
      "secondsPerRep": 4
    },
    "cues": [
      "Stand tall, feet hip-width, hips still.",
      "Shift your ribcage directly sideways, keeping your shoulders level.",
      "Once that feels controlled, add a gentle lean into the shift for a side stretch.",
      "Keep breathing — do not brace and hold your breath."
    ],
    "shouldFeel": "A mild stretch up one side of the trunk, and a slightly odd, disconnected feeling as the ribs move without the hips.",
    "shouldNotFeel": "Lower back pinching, or dizziness.",
    "regressions": [
      {
        "label": "Smaller shift",
        "detail": "A couple of centimetres of travel is enough to start.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Hand on a wall",
        "detail": "Light support while you learn the motion.",
        "props": [
          "wall"
        ]
      },
      {
        "label": "Seated",
        "detail": "The app's existing Seated Side Bend is the seated equivalent.",
        "props": [
          "chair"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Larger shift",
        "detail": "Travel further sideways before adding the bend."
      },
      {
        "label": "Arms overhead",
        "detail": "Reach one arm up and over during the bend."
      }
    ],
    "props": [
      "none"
    ],
    "officeFriendly": true,
    "barefootOnly": false,
    "contraindications": [],
    "dailySafe": true,
    "source": [
      "Strength Side Follow Alongs (7 Minute Full Body Stretch, https://youtu.be/zcrW26c5YZc)"
    ],
    "evidenceNote": "The source calls this a way to 'release the QL'. There is no good evidence that a tight quadratus lumborum causes most back pain, or that this drill treats anything — it is simply a movement direction (side-to-side rib shift) that a straight-ahead training and sitting life never visits, which is reason enough to include it."
  },
  {
    "id": "bear-to-downward-dog",
    "name": "Bear to Downward Dog with Calf Raise",
    "aka": [
      "Bear-dog transition"
    ],
    "regions": [
      "back",
      "fullBody"
    ],
    "role": "main",
    "intensity": 2,
    "summary": "From a bear hold, push your hips up and back into a downward dog, then rise onto your toes and lower your heels a few times before returning to bear.",
    "why": "Links two positions this app already uses — the bear hold and a hamstring-and-calf downward dog — with an added calf raise, so one drill trains trunk control, a hamstring and calf stretch, and calf strength in sequence.",
    "targets": [
      "trunk stability",
      "hamstrings",
      "calves",
      "shoulder stability"
    ],
    "dose": {
      "kind": "reps",
      "reps": 5,
      "sets": 2,
      "perSide": false,
      "tempoNote": "2s to downward dog, 3s of heel raises, 2s back to bear.",
      "secondsPerRep": 7
    },
    "cues": [
      "Start in the bear hold: hands under shoulders, knees hovering an inch up.",
      "Push your hips up and back into a downward dog, heels reaching towards the floor.",
      "Rise onto your toes and lower your heels three or four times.",
      "Return to the bear hold to finish the rep."
    ],
    "shouldFeel": "A stretch through the calves and hamstrings in the down-dog phase, and trunk and shoulder work throughout.",
    "shouldNotFeel": "Wrist pain, or a head-rush feeling from the head-down position.",
    "regressions": [
      {
        "label": "Skip the bear phase",
        "detail": "Move only between hands-and-knees and downward dog.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Bent knees throughout downward dog",
        "detail": "Keep the knees soft rather than chasing straight legs.",
        "props": [
          "none"
        ]
      },
      {
        "label": "No calf raises",
        "detail": "Just hold the downward dog briefly instead.",
        "props": [
          "none"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Straighter legs in the down-dog",
        "detail": "As the hamstrings allow."
      },
      {
        "label": "Slower bear hold",
        "detail": "Hold the bear position for a full 5 seconds each rep."
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
      "Strength Side Follow Alongs (7 Minute Full Body Stretch, https://youtu.be/zcrW26c5YZc)"
    ]
  },
  {
    "id": "cross-legged-sit",
    "name": "Cross-Legged Seated Hold",
    "aka": [
      "Tailor sit",
      "Sukhasana",
      "Easy pose"
    ],
    "regions": [
      "hips",
      "hamstrings"
    ],
    "role": "rest",
    "intensity": 1,
    "summary": "Sit on the floor with your legs crossed in front of you and your spine tall, propped on a cushion if you need it.",
    "why": "The plainest floor-sitting position there is, and one most desk-based adults have quietly lost the ability to hold comfortably for more than a minute. It is a good honest baseline to sit in while reading or watching something, not a stretch to chase depth in.",
    "targets": [
      "hip external rotation",
      "upright sitting endurance",
      "hip flexion"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 90,
      "sets": 1,
      "perSide": false
    },
    "cues": [
      "Sit with the shins crossed, one in front of the other, ankles relaxed.",
      "Sit on the front of your sit bones and grow tall through the spine.",
      "Prop a cushion under your hips the moment your lower back rounds.",
      "Switch which shin is in front from time to time."
    ],
    "shouldFeel": "A mild stretch in the hips, and honest postural work keeping the spine tall.",
    "shouldNotFeel": "Numbness in the feet, or knee pain on either side.",
    "regressions": [
      {
        "label": "Sit on a cushion or block",
        "detail": "Raises the hips so the pelvis can sit level.",
        "props": [
          "cushion",
          "block"
        ]
      },
      {
        "label": "Back against a wall",
        "detail": "For support while you build sitting tolerance.",
        "props": [
          "wall"
        ]
      },
      {
        "label": "Shorter holds",
        "detail": "30 seconds, building up gradually.",
        "props": [
          "none"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Lower the cushion",
        "detail": "Then remove it."
      },
      {
        "label": "Longer holds",
        "detail": "Work towards several minutes across the day rather than one long sit."
      }
    ],
    "props": [
      "cushion"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "knee"
    ],
    "dailySafe": true,
    "source": [
      "Strength Side Follow Alongs (Stop Rushing your Hip Mobility, https://youtu.be/doJNOmSkrPE)"
    ]
  },
  {
    "id": "gorilla-hold",
    "name": "Gorilla Hold",
    "aka": [
      "The gorilla",
      "Knee-lift squat hold"
    ],
    "regions": [
      "hips",
      "fullBody"
    ],
    "role": "load",
    "intensity": 3,
    "summary": "From a deep squat, plant your fists on the floor and lift your knees slightly, taking your weight through your fists and feet.",
    "why": "A deep-squat position turned into a loaded hold: it asks the ankles and hips for the same range as the deep squat hold, plus wrist and shoulder loading through the fists. It is a strength position, not a passive stretch.",
    "targets": [
      "hip flexion",
      "ankle dorsiflexion",
      "wrist and forearm loading",
      "grip"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 15,
      "sets": 2,
      "perSide": true
    },
    "cues": [
      "Squat deep, fists planted on the floor in front of your feet, knuckles down.",
      "Lift your knees slightly, shifting weight onto your fists and feet.",
      "Keep your back long, not rounded.",
      "Come down the moment your wrists or knuckles complain."
    ],
    "shouldFeel": "Strong effort through the hips, forearms and the knuckles of your fists.",
    "shouldNotFeel": "Wrist pain, or sharp pain in the knuckles — pad them or use flat hands if fists hurt.",
    "regressions": [
      {
        "label": "Flat hands instead of fists",
        "detail": "Removes the knuckle loading entirely.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Knees down",
        "detail": "Do the deep squat hold without lifting the knees.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Padded knuckles",
        "detail": "A folded towel under the fists.",
        "props": [
          "towel"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Longer holds",
        "detail": "Build towards 30 seconds — treat that as a ceiling, not a target to beat."
      },
      {
        "label": "Gorilla push-up",
        "detail": "Add a press from this position."
      }
    ],
    "props": [
      "none"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "knee",
      "wrist",
      "hipReplacement"
    ],
    "dailySafe": true,
    "maxHoldSeconds": 30,
    "source": [
      "Strength Side Follow Alongs (Stop Rushing your Hip Mobility, https://youtu.be/doJNOmSkrPE)"
    ],
    "evidenceNote": "The source credits this to \"Kadori Xiani\" — the correct name is Kadour Ziani, a French streetball and dunk performer (Slam Nation) and former professional football (soccer) goalkeeper, not a professional basketball player. His widely repeated 56-inch vertical jump figure is self-reported, not lab-verified, and this app does not repeat it as fact. Treat the position itself the same as the deep squat hold: a deep, sustained end-range squat, so anyone with knee or hip issues should be more cautious with it, not less, just because it is new here."
  },
  {
    "id": "half-lotus-forward-fold",
    "name": "Half-Lotus Forward Fold",
    "aka": [
      "Ardha Padmasana fold",
      "Half-lotus seated fold"
    ],
    "regions": [
      "hips",
      "hamstrings"
    ],
    "role": "main",
    "intensity": 2,
    "summary": "Sitting with one foot drawn up onto the opposite thigh and the other leg bent or straight in front, fold forward from the hips.",
    "why": "A classic combined hip-and-hamstring position: one hip works into deep external rotation while the front of the body folds over the other leg. It is a useful range for sitting on the floor comfortably with one leg tucked, which most adults have quietly stopped doing.",
    "targets": [
      "hip external rotation",
      "hamstrings",
      "ankle plantarflexion"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 45,
      "sets": 1,
      "perSide": true
    },
    "cues": [
      "Draw one foot up onto the opposite thigh, as close to the hip crease as is comfortable.",
      "Keep the other leg bent in front of you, or extend it if your hamstring allows.",
      "Hinge forward from the hips, spine long, rather than rounding from the top.",
      "Only fold as far as the lifted knee stays comfortable."
    ],
    "shouldFeel": "A stretch in the outer hip and groin of the lifted leg, and the hamstring of the straight leg if extended.",
    "shouldNotFeel": "Pain on the inside of the lifted knee — that is a common injury site in this position and a clear stop signal.",
    "regressions": [
      {
        "label": "Foot on the shin, not the thigh",
        "detail": "A much smaller demand on the hip and knee — this is a half-lotus in name only until you have real hip rotation to spare.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Sit on a cushion",
        "detail": "Raises the hips so the pelvis can tilt forward.",
        "props": [
          "cushion"
        ]
      },
      {
        "label": "Smaller fold",
        "detail": "Sit tall rather than folding forward.",
        "props": [
          "none"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Lower the fold",
        "detail": "Chest gradually towards the shin."
      },
      {
        "label": "Straighten the front leg",
        "detail": "Once the fold is comfortable with it bent."
      }
    ],
    "props": [
      "cushion"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "knee",
      "hipReplacement"
    ],
    "dailySafe": true,
    "source": [
      "Strength Side Follow Alongs (Stop Rushing your Hip Mobility, https://youtu.be/doJNOmSkrPE)"
    ],
    "evidenceNote": "Full lotus is a well-documented source of knee injury in inflexible adults because the rotation gets forced through the knee rather than the hip; half-lotus is materially safer but the same principle applies — never force the foot up if the hip will not give the range first."
  },
  {
    "id": "half-sa-lift",
    "name": "Half-Sa Lift",
    "aka": [
      "Seiza mini-lunge",
      "Ankle-strength kneeling lift"
    ],
    "regions": [
      "ankles",
      "hips"
    ],
    "role": "main",
    "intensity": 2,
    "summary": "From seiza, bring one foot forward flat on the floor and press through it to lift your hips into a small half-kneeling lunge, then return to seiza.",
    "why": "Most ankle mobility work is passive stretching. This loads the ankle and calf of the front leg through a real range as it stands you up from a low position — closer to the strength you actually need to get up off the floor without using your hands.",
    "targets": [
      "ankle dorsiflexion",
      "calf strength",
      "hip flexion",
      "getting up off the floor"
    ],
    "dose": {
      "kind": "reps",
      "reps": 6,
      "sets": 2,
      "perSide": true,
      "tempoNote": "2s up, 2s down.",
      "secondsPerRep": 4
    },
    "cues": [
      "Start in seiza, then bring one foot flat on the floor in front of you.",
      "Press through that foot to lift your hips forward and up, into a small lunge.",
      "Keep the front knee tracking over the toes, not caving in.",
      "Lower back down to seiza under control."
    ],
    "shouldFeel": "Work through the calf and thigh of the front leg, and a stretch through the back knee and shin.",
    "shouldNotFeel": "Sharp pain in either knee, or the front heel lifting off the floor.",
    "regressions": [
      {
        "label": "Hands down for assistance",
        "detail": "Push off the floor with your hands as you rise.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Smaller lift",
        "detail": "Rise only a few inches before returning.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Support the front foot on a wedge",
        "detail": "Slightly elevate the front heel to reduce the ankle demand.",
        "props": [
          "wedge"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Hands off",
        "detail": "Rise without using your arms."
      },
      {
        "label": "Slower descent",
        "detail": "3–4 seconds back down to seiza."
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
      "achilles"
    ],
    "dailySafe": true,
    "source": [
      "Strength Side Follow Alongs (Stop Rushing your Hip Mobility, https://youtu.be/doJNOmSkrPE)"
    ],
    "evidenceNote": "Seiza itself is a position to visit often and briefly, not to camp in — occupational kneeling is linked with knee problems, so this loaded version deserves the same caution as the app's existing seiza entry."
  },
  {
    "id": "gorilla-push-up",
    "name": "Gorilla Push-Up",
    "aka": [
      "Fist push-up",
      "Knuckle push-up"
    ],
    "regions": [
      "fullBody"
    ],
    "role": "load",
    "intensity": 3,
    "summary": "A standard push-up performed on closed fists instead of flat hands.",
    "why": "It keeps the wrist in a neutral, straight position instead of full extension, which is easier on the wrist joint itself than a flat-hand push-up — the trade is that the load moves onto the knuckles instead.",
    "targets": [
      "chest and shoulder pressing strength",
      "wrist neutrality",
      "knuckle loading tolerance"
    ],
    "dose": {
      "kind": "reps",
      "reps": 6,
      "sets": 2,
      "perSide": false,
      "tempoNote": "2s down, 1s pause, 1s up.",
      "secondsPerRep": 4
    },
    "cues": [
      "Make loose fists, knuckles down, wrists straight rather than bent.",
      "Set up in a standard push-up position, hands under the shoulders.",
      "Lower with control, elbows at roughly 45 degrees from the body.",
      "Press back up without letting the hips sag or pike."
    ],
    "shouldFeel": "Chest, shoulder and tricep work, and pressure through the knuckles.",
    "shouldNotFeel": "Wrist pain, or sharp pain in the knuckles — pad them or come off the fists if it hurts.",
    "regressions": [
      {
        "label": "On the knees",
        "detail": "Standard knee push-up, on fists.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Against a wall or counter",
        "detail": "Standing, hands in fists against a raised surface.",
        "props": [
          "wall"
        ]
      },
      {
        "label": "Padded knuckles",
        "detail": "A folded towel or mat under the fists.",
        "props": [
          "towel"
        ]
      },
      {
        "label": "Flat-hand push-up",
        "detail": "Skip the fist version entirely — it trains the same chest and shoulder strength without the knuckle demand.",
        "props": [
          "none"
        ]
      }
    ],
    "progressions": [
      {
        "label": "More reps",
        "detail": "Build volume before adding difficulty elsewhere."
      },
      {
        "label": "Elevated feet",
        "detail": "Feet on a step, once the flat version is easy."
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
      "knee"
    ],
    "dailySafe": false,
    "source": [
      "Strength Side Follow Alongs (Stop Rushing your Hip Mobility, https://youtu.be/doJNOmSkrPE)"
    ],
    "evidenceNote": "This is a strength exercise, not a mobility item, and the honest regression is simply the flat-hand push-up — it delivers the same pressing strength without asking the knuckles to bear load they have not been prepared for. Build knuckle tolerance gradually and on a padded surface before doing this on bare floor."
  },
  {
    "id": "kneeling-hip-extension",
    "name": "Kneeling Glute Squeeze",
    "aka": [
      "Kneeling hip extension",
      "Donkey kick isometric"
    ],
    "regions": [
      "hips"
    ],
    "role": "opener",
    "intensity": 1,
    "summary": "On hands and knees, lift one bent knee a few inches off the floor by squeezing the glute, hold briefly, then lower.",
    "why": "A simple, low-load way to wake the glutes up before anything more demanding — useful directly before the deep squat hold or the couch stretch, both of which depend on the glutes doing the work rather than the lower back.",
    "targets": [
      "hip extension",
      "glute activation"
    ],
    "dose": {
      "kind": "reps",
      "reps": 10,
      "sets": 2,
      "perSide": true,
      "tempoNote": "1s up, 1s hold, 1s down.",
      "secondsPerRep": 3
    },
    "cues": [
      "Hands under shoulders, knees under hips.",
      "Keep the knee bent at roughly 90 degrees throughout.",
      "Squeeze the glute to lift the knee a few inches — do not swing the leg.",
      "Keep your back flat; do not let it arch as the leg lifts."
    ],
    "shouldFeel": "A clear glute squeeze and burn with higher reps.",
    "shouldNotFeel": "Lower back arching or pinching, or wrist pain.",
    "regressions": [
      {
        "label": "Smaller lift",
        "detail": "An inch is enough.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Forearms down",
        "detail": "On a cushion, if your wrists complain.",
        "props": [
          "cushion"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Pause longer at the top",
        "detail": "2–3 seconds."
      },
      {
        "label": "Straight-leg version",
        "detail": "Extend the leg straight back instead of keeping the knee bent."
      }
    ],
    "props": [
      "none"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "wrist",
      "backPain"
    ],
    "dailySafe": true,
    "source": [
      "Strength Side Follow Alongs (The Animal Mobility Everyone NEEDS, https://youtu.be/-rW0583WZ6w)"
    ]
  },
  {
    "id": "downward-dog-crawl",
    "name": "Downward-Dog Crawl",
    "aka": [
      "Opposite-limb crawl",
      "Bear-dog crawl with heel drop"
    ],
    "regions": [
      "fullBody",
      "hamstrings"
    ],
    "role": "main",
    "intensity": 2,
    "summary": "From downward dog, crawl forward and back by moving opposite hand and foot together, pausing to drop a heel towards the floor.",
    "why": "A crawling pattern that combines cross-body coordination with the same hamstring and calf stretch as a static downward dog, and it is weight-bearing through the shoulders and wrists the whole time — genuine full-body work, not a passive stretch.",
    "targets": [
      "hamstrings",
      "calves",
      "shoulder stability",
      "cross-body coordination"
    ],
    "dose": {
      "kind": "reps",
      "reps": 6,
      "sets": 2,
      "perSide": false,
      "tempoNote": "One full length forward or back, moving opposite hand and foot together, roughly 8s.",
      "secondsPerRep": 8
    },
    "cues": [
      "Start in downward dog, hips high, heels reaching down.",
      "Move your right hand and left foot forward together, then the left hand and right foot.",
      "Pause every few steps to sink one heel towards the floor.",
      "Keep your hips lifted throughout — do not let them sag."
    ],
    "shouldFeel": "A moving stretch through the hamstrings and calves, and steady shoulder and wrist work.",
    "shouldNotFeel": "Wrist pain, or a head-rush feeling if you stay head-down too long.",
    "regressions": [
      {
        "label": "Bent knees throughout",
        "detail": "Keep both knees soft rather than chasing straight legs.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Smaller steps",
        "detail": "Shuffle rather than reaching far with each limb.",
        "props": [
          "none"
        ]
      },
      {
        "label": "No heel drops",
        "detail": "Just crawl without pausing to stretch the calf.",
        "props": [
          "none"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Straighter legs",
        "detail": "As the hamstrings allow."
      },
      {
        "label": "Longer crawl",
        "detail": "Cover more distance each way."
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
      "Strength Side Follow Alongs (The Animal Mobility Everyone NEEDS, https://youtu.be/-rW0583WZ6w)"
    ]
  },
  {
    "id": "crab-walk",
    "name": "Crab Walk",
    "aka": [
      "Crab crawl"
    ],
    "regions": [
      "fullBody"
    ],
    "role": "load",
    "intensity": 2,
    "summary": "In the crab support position, hips lifted, walk forward and backward using opposite hand and foot.",
    "why": "A travelling version of the crab hold: it keeps the shoulders, triceps and wrists loaded in extension while adding hip and glute work and cross-body coordination as you move.",
    "targets": [
      "shoulder extension",
      "wrist extension loading",
      "hip extension",
      "coordination"
    ],
    "dose": {
      "kind": "reps",
      "reps": 6,
      "sets": 2,
      "perSide": false,
      "tempoNote": "One full length forward or back, roughly 8s.",
      "secondsPerRep": 8
    },
    "cues": [
      "Set up in the crab position, hands planted behind you, hips lifted.",
      "Move your right hand and left foot together, then the left hand and right foot.",
      "Keep your hips up throughout — do not let them drag on the floor.",
      "Keep your neck relaxed rather than craning it back."
    ],
    "shouldFeel": "Work through the shoulders, triceps and glutes, and pressure through the wrists.",
    "shouldNotFeel": "Wrist pain, or neck strain from looking backward.",
    "regressions": [
      {
        "label": "Hips lower",
        "detail": "Do not lift all the way to a flat table position.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Fewer, smaller steps",
        "detail": "A short shuffle rather than a full crawl.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Static crab hold instead",
        "detail": "Master the still hold before adding movement.",
        "props": [
          "none"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Longer walk",
        "detail": "Cover more distance each way."
      },
      {
        "label": "Add the crab press",
        "detail": "Pause periodically to press the hips higher."
      }
    ],
    "props": [
      "none"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "wrist",
      "shoulder"
    ],
    "dailySafe": true,
    "source": [
      "Strength Side Follow Alongs (The Animal Mobility Everyone NEEDS, https://youtu.be/-rW0583WZ6w)"
    ]
  },
  {
    "id": "duck-walk",
    "name": "Duck Walk",
    "aka": [
      "Squat walk"
    ],
    "regions": [
      "hips",
      "fullBody"
    ],
    "role": "load",
    "intensity": 3,
    "summary": "Walk forward, then backward, staying in the bottom of a deep squat the entire time.",
    "why": "It turns the deep squat hold into a moving, weight-shifting drill — each step asks one hip to briefly take your full weight at end range while the other leg moves, which a static hold never tests.",
    "targets": [
      "hip flexion",
      "ankle dorsiflexion",
      "single-leg control at depth"
    ],
    "dose": {
      "kind": "reps",
      "reps": 1,
      "sets": 2,
      "perSide": false,
      "tempoNote": "One full length forward, then one length back, about 20s each.",
      "secondsPerRep": 20
    },
    "cues": [
      "Sit into the bottom of your deepest comfortable squat.",
      "Keep your chest up and heels down as you step forward.",
      "Small steps — this is about depth, not speed.",
      "Walking backward is harder: go slower and shorter than the forward pass."
    ],
    "shouldFeel": "Deep, steady work through the hips, thighs and ankles.",
    "shouldNotFeel": "Sharp knee pain, heels lifting off the floor, or losing your balance.",
    "regressions": [
      {
        "label": "Half-kneeling entry",
        "detail": "Practise stepping into the deep squat from a half-kneeling lunge position before attempting continuous walking steps.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Higher squat",
        "detail": "Do not sit as deep — a comfortable half-squat walk is still useful.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Hold a support",
        "detail": "One hand on a wall or doorframe while you step.",
        "props": [
          "wall",
          "doorframe"
        ]
      },
      {
        "label": "Forward only",
        "detail": "Skip the backward pass, which asks more of balance and control.",
        "props": [
          "none"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Backward walking",
        "detail": "Once the forward walk is comfortable and controlled."
      },
      {
        "label": "Longer distance",
        "detail": "More steps each way."
      }
    ],
    "props": [
      "none"
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
      "Strength Side Follow Alongs (The Animal Mobility Everyone NEEDS, https://youtu.be/-rW0583WZ6w)"
    ],
    "evidenceNote": "A sustained, travelling deep squat is a bigger ask on the knees and hips than the app's static deep squat hold, so it carries the same contraindications and then some — anyone with knee or hip issues should stay with the static hold rather than adding travel on top of depth."
  }
];
