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
    "id": "half-kneeling-pelvic-tuck-stretch",
    "name": "Half-Kneeling Hip Flexor Stretch with Pelvic Tuck",
    "aka": [
      "Posterior pelvic tilt hip flexor stretch",
      "Glute-squeeze lunge stretch",
      "Reinold hip flexor stretch",
      "Half-kneeling lunge stretch",
      "Kneeling hip flexor stretch",
      "Kneeling lunge stretch",
      "Basic hip flexor stretch",
      "Psoas lunge stretch with side bend",
      "Kneeling hip flexor stretch with rotation",
      "Low lunge with lateral flexion",
      "Low lunge",
      "Anjaneyasana",
      "Low crescent lunge",
      "Kneeling lunge with arms up",
      "Band-distracted hip flexor stretch",
      "Band-assisted couch stretch",
      "Starrett banded hip flexor stretch"
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
      },
      {
        "label": "Plain lunge, no tuck",
        "detail": "Shift the weight gently forward with the chest tall and skip the glute squeeze. The easiest entry point; add the tuck once it feels easy.",
        "props": [
          "cushion"
        ]
      },
      {
        "label": "Blocks under the hands",
        "detail": "Rest the hands on blocks beside the front foot to take the arms out of it.",
        "props": [
          "block",
          "cushion"
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
      },
      {
        "label": "Side bend and small twist",
        "detail": "Reach the back-leg-side arm up, lean away from that leg, then add a small twist towards the front leg."
      },
      {
        "label": "Back leg lifted",
        "detail": "Lift the back knee off the floor, keeping the glute squeezed. This is a much harder position."
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
    "id": "thomas-stretch",
    "name": "Thomas Stretch",
    "aka": [
      "Bed-edge hip flexor stretch",
      "Thomas test position stretch",
      "Supine hip flexor stretch",
      "Lying hip flexor stretch off the bed",
      "Supine quad stretch",
      "Rectus femoris stretch off the bed",
      "Thomas test strap stretch",
      "Hip flexor PNF stretch",
      "Hold-relax hip flexor stretch",
      "Isometric hip flexor stretch"
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
      },
      {
        "label": "Strap the hanging heel",
        "detail": "Loop a strap around the hanging ankle and pull the heel towards your bottom while the thigh stays still."
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
      "Eka Pada Rajakapotasana",
      "Sleeping pigeon",
      "Folded pigeon",
      "Sleeping swan",
      "Forward-folding pigeon",
      "Pigeon on a bolster",
      "Propped pigeon",
      "Supported pigeon",
      "Restorative pigeon"
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
      },
      {
        "label": "Forehead or forearms to the floor",
        "detail": "Fold all the way down over the front leg and rest your forearms or forehead on the floor."
      },
      {
        "label": "Lower the prop",
        "detail": "Use a lower bolster or cushion each week until the hip rests near the floor."
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
    "id": "reclined-pigeon",
    "name": "Reclined Pigeon",
    "aka": [
      "Figure-4 stretch",
      "Supine figure four",
      "Supine piriformis stretch",
      "Reclining pigeon",
      "Supta Kapotasana",
      "Wall figure-4",
      "Wall-assisted figure four",
      "Figure-4 with feet on the wall"
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
      },
      {
        "label": "Walk the supporting foot down the wall",
        "detail": "With the hips near a wall, slide the supporting foot lower on the wall to bring the knee closer."
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
