import type { Exercise } from '../types.ts';

/**
 * back: imported from web research, then reviewed by hand. This file is the source of
 * truth now - edit it freely. The research briefs' review-only fields (pose hints, URLs,
 * evidence grades) were stripped on import.
 *
 * Same editorial rule as the core library: where a source offered a mechanism, we state a
 * feeling and a behaviour instead, and `evidenceNote` corrects any claim that did not survive
 * checking. Evidence for most stretching is weak; the notes say so where it matters.
 */
export const BACK: Exercise[] = [
  {
    "id": "mcgill-curl-up",
    "name": "McGill Curl-Up",
    "aka": [
      "Modified curl-up",
      "McGill crunch",
      "Stuart McGill curl-up"
    ],
    "regions": [
      "back"
    ],
    "role": "load",
    "intensity": 2,
    "summary": "On your back with one knee bent and your hands under your lower back, lift your head and shoulders a few centimetres and hold, without moving your lower back.",
    "why": "A sit-up moves your lower back through a big arc. This does the opposite: the front of your trunk works hard to lift your head and chest while your lower back stays exactly where it was. It builds front-of-trunk endurance for carrying, bracing and long days on your feet, with almost no movement at the spine.",
    "targets": [
      "rectus abdominis",
      "obliques",
      "front-of-trunk endurance"
    ],
    "dose": {
      "kind": "reps",
      "reps": 5,
      "sets": 2,
      "perSide": false,
      "tempoNote": "2s up, 8s hold, 2s down.",
      "secondsPerRep": 12
    },
    "cues": [
      "Slide both hands, palms down, under the small of your back. One knee bent, the other leg straight.",
      "Lift only your head and the tips of your shoulder blades. It is a few centimetres, not a sit-up.",
      "Keep your lower back exactly where it started. Your hands will tell you if it moves.",
      "Breathe normally through the hold. Swap which leg is straight halfway."
    ],
    "shouldFeel": "A steady effort across the front of your belly that builds over the hold.",
    "shouldNotFeel": "Neck strain, pain in the lower back, or holding your breath. Keep your gaze on the ceiling and do not pull on your head.",
    "regressions": [
      {
        "label": "Both knees bent",
        "detail": "Feet flat. Easier on the hip flexors and the usual entry point.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Shorter holds",
        "detail": "Five seconds, then build to eight to ten.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Head lift only",
        "detail": "Lift just the head an inch with your chin gently tucked.",
        "props": [
          "none"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Elbows off the floor",
        "detail": "Hover your elbows an inch above the floor during the hold, as McGill does."
      },
      {
        "label": "Descending pyramid",
        "detail": "Six holds, then four, then two, with a short rest between sets."
      }
    ],
    "props": [
      "none"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "osteoporosis"
    ],
    "dailySafe": true,
    "source": [
      "Stuart McGill (Back Mechanic / Ultimate Back Fitness)"
    ],
    "evidenceNote": "McGill picked this exercise because it trains the abdominals with almost no lumbar movement, which is a biomechanics argument, not a trial result. Studies of exercise for chronic low back pain have not shown any one exercise, including this one, to be clearly better than another. The case against ordinary sit-ups rests mainly on lab and animal-tissue studies, not on trials where sit-ups caused back pain. Do this one because you want front-of-trunk endurance, not because a sit-up is dangerous."
  },
  {
    "id": "dead-bug",
    "name": "Dead Bug",
    "aka": [
      "Deadbug",
      "Supine limb lowering"
    ],
    "regions": [
      "back"
    ],
    "role": "load",
    "intensity": 2,
    "summary": "On your back with your arms up and knees over your hips, slowly lower the opposite arm and leg towards the floor while your trunk stays still.",
    "why": "It is the floor version of what a barbell or a heavy carry asks of your trunk: keep the middle still while the arms and legs move. Lying down removes balance and grip from the problem, so you can find out how well you actually control your ribs and lower back.",
    "targets": [
      "anti-extension",
      "deep abdominals",
      "hip flexor control"
    ],
    "dose": {
      "kind": "reps",
      "reps": 6,
      "sets": 2,
      "perSide": true,
      "tempoNote": "3s out, 3s back.",
      "secondsPerRep": 6
    },
    "cues": [
      "Arms straight up, hips and knees at 90 degrees, shins parallel to the floor.",
      "Keep your ribs down and your lower back quiet. If your back arches as the limb goes out, go less far.",
      "Exhale as the arm and leg go out.",
      "Slow and small beats big and wobbly."
    ],
    "shouldFeel": "Work low in the belly and around the ribs, and the hip flexors of the lowering leg.",
    "shouldNotFeel": "Your lower back arching off the floor, or pinching. Neck tension.",
    "regressions": [
      {
        "label": "Heel taps",
        "detail": "Legs only. Lower one foot to touch the floor and bring it back, arms stay up.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Arms only",
        "detail": "Keep the knees over the hips and just lower the arm overhead.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Feet on the floor",
        "detail": "Slide one heel out along the floor instead of lifting it.",
        "props": [
          "none"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Straighter legs",
        "detail": "Lower the leg further out from the hip, as far as you can keep the back quiet."
      },
      {
        "label": "Band or light weights",
        "detail": "Hold a light weight in each hand, or loop a band around the feet."
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
      "Physio Ed",
      "Yorkville Sports Medicine",
      "Back Intelligence"
    ],
    "evidenceNote": "You will often be told to press your lower back flat into the floor. You do not need to hold a perfectly flat back, and 'neutral spine at all times' is not something research has shown you need. The point is to notice when your ribs flare or your back arches and stop the movement there. There is no good evidence that dead bugs specifically prevent back injuries."
  },
  {
    "id": "glute-bridge",
    "name": "Glute Bridge",
    "aka": [
      "Bridge",
      "Supine bridge",
      "Hip bridge",
      "Pelvic lift"
    ],
    "regions": [
      "back",
      "hips"
    ],
    "role": "main",
    "intensity": 1,
    "summary": "On your back with knees bent and feet flat, squeeze your glutes and lift your hips until your body is a straight line from shoulders to knees.",
    "why": "If your glutes do not finish a hip extension, your lower back tends to. The bridge is the easiest way to practise ending the movement with the glutes, lying down, with no load on the spine. It is also a standard early step in NHS back-pain exercise sheets.",
    "targets": [
      "glute max",
      "hip extension",
      "hamstrings",
      "trunk endurance"
    ],
    "dose": {
      "kind": "reps",
      "reps": 8,
      "sets": 2,
      "perSide": false,
      "tempoNote": "2s up, 2s hold, 2s down.",
      "secondsPerRep": 6
    },
    "cues": [
      "Feet flat, shoulder-width apart, heels about a hand-span from your bum.",
      "Squeeze your glutes to lift, do not push with your back.",
      "Stop when your body is a straight line. Going higher just arches your lower back.",
      "Lower slowly."
    ],
    "shouldFeel": "The glutes doing the lifting, a light stretch across the front of the hips at the top.",
    "shouldNotFeel": "Lower back cramping, or the hamstrings cramping. Pushing your feet closer or squeezing the glutes harder usually fixes both.",
    "regressions": [
      {
        "label": "Smaller lift",
        "detail": "Lift only a few centimetres and hold.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Feet further from the bum",
        "detail": "More hamstring, less glute. Use it if your hamstrings cramp.",
        "props": [
          "none"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Longer holds",
        "detail": "Hold the top for ten seconds, breathing normally."
      },
      {
        "label": "Bridge march",
        "detail": "Alternate lifting each foot while the hips stay level."
      },
      {
        "label": "Band above the knees",
        "detail": "Press out against a light band throughout."
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
      "NHS Wrightington, Wigan and Leigh low back pain exercises (Level 1 and 2)",
      "Physiopedia: Bridging"
    ],
    "evidenceNote": "Glute bridges are a sensible, low-load exercise and are widely prescribed, but there is no good evidence that 'weak glutes cause back pain' or that this specific exercise beats any other back exercise. Trials of exercise for chronic low back pain find small-to-moderate benefit overall, with little difference between types."
  },
  {
    "id": "bridge-march",
    "name": "Single-Leg Bridge March",
    "aka": [
      "Marching bridge",
      "Bridge with alternating leg lift",
      "Single leg bridge hold"
    ],
    "regions": [
      "back",
      "hips"
    ],
    "role": "load",
    "intensity": 2,
    "summary": "Hold a glute bridge and lift one foot off the floor at a time, keeping your hips level.",
    "why": "The plain bridge is symmetrical. Lifting a foot means your trunk and glutes have to stop your pelvis from dropping or twisting, which is the same job they do every step you run or carry.",
    "targets": [
      "glute max",
      "anti-rotation",
      "pelvic control"
    ],
    "dose": {
      "kind": "reps",
      "reps": 6,
      "sets": 2,
      "perSide": true,
      "tempoNote": "1s lift, 3s hold, 1s down.",
      "secondsPerRep": 5
    },
    "cues": [
      "Get the bridge up first, then lift one foot.",
      "Keep both hip bones pointing at the ceiling. Do not let one sag.",
      "Breathe normally.",
      "Put the foot down before you get wobbly."
    ],
    "shouldFeel": "The glute of the standing leg working hard and the trunk holding you level.",
    "shouldNotFeel": "Hamstring cramping, lower back pain, or the hips twisting.",
    "regressions": [
      {
        "label": "Toe taps",
        "detail": "Keep the bridge and just tap one toe off the floor and back.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Two-leg bridge",
        "detail": "Go back to the plain glute bridge.",
        "props": [
          "none"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Straight-leg single bridge",
        "detail": "Extend the raised leg so the knees stay level."
      },
      {
        "label": "Feet on a step",
        "detail": "Raised feet make it harder to control."
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
      "The Prehab Guys, bridge progressions",
      "Aurora Health lumbar stabilization bridging progression"
    ],
    "evidenceNote": "Marching bridges are a normal progression in physio clinics and there is no meaningful difference in the evidence between them and other exercises for back pain. Their value is that they are easy to scale and they train the trunk to hold still."
  },
  {
    "id": "pallof-press",
    "name": "Pallof Press",
    "aka": [
      "Band anti-rotation press",
      "Anti-rotation press",
      "Pallof hold"
    ],
    "regions": [
      "back",
      "fullBody"
    ],
    "role": "load",
    "intensity": 2,
    "summary": "Stand side-on to a band anchored at chest height, and press your hands straight out in front while you resist the band trying to twist you.",
    "why": "Most of what your trunk does when you carry a bag, swing a leg or run is stop yourself rotating. The Pallof press trains exactly that with something that pulls sideways at you, so you have to hold still.",
    "targets": [
      "anti-rotation",
      "obliques",
      "trunk endurance"
    ],
    "dose": {
      "kind": "reps",
      "reps": 8,
      "sets": 2,
      "perSide": true,
      "tempoNote": "2s out, 3s hold, 2s back.",
      "secondsPerRep": 7
    },
    "cues": [
      "Feet shoulder-width, band pulling you sideways. Stand tall and tight.",
      "Hands start at the chest. Press them straight out and hold.",
      "Do not let the band turn your shoulders or hips.",
      "Breathe normally."
    ],
    "shouldFeel": "The sides of your trunk and the outside of the hip nearest the anchor working to keep you square.",
    "shouldNotFeel": "Any shoulder pinching, or your trunk twisting towards the band.",
    "regressions": [
      {
        "label": "Lighter band or step closer",
        "detail": "Step nearer the anchor to lower the tension.",
        "props": [
          "band",
          "doorframe"
        ]
      },
      {
        "label": "Press only halfway",
        "detail": "Stop with the hands a foot from the chest.",
        "props": [
          "band",
          "doorframe"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Half-kneeling",
        "detail": "Inside knee down on a cushion. The pelvis is anchored, the trunk has to work."
      },
      {
        "label": "Press with a pause",
        "detail": "Hold the extended position for ten seconds."
      },
      {
        "label": "Overhead press",
        "detail": "Press up as well as out."
      }
    ],
    "props": [
      "band",
      "doorframe"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [],
    "dailySafe": true,
    "source": [
      "Named after physical therapist John Pallof; taught widely by strength coaches (The Prehab Guys, Breaking Muscle, BarBend)"
    ],
    "evidenceNote": "Anti-rotation work is a good way to train the trunk as it is used in real life. It is not a protective shield for your back: the evidence for exercise preventing back pain episodes is real but modest and fades if you stop, and there is no evidence that Pallof presses beat any other kind of exercise."
  },
  {
    "id": "forearm-plank",
    "name": "Forearm Plank",
    "aka": [
      "Front plank",
      "Prone bridge",
      "McGill front plank"
    ],
    "regions": [
      "back",
      "fullBody"
    ],
    "role": "load",
    "intensity": 2,
    "summary": "Prop yourself on your forearms and toes so your body is one straight line, and hold it for a short time.",
    "why": "The plank is the standard way to test and train how long the front of your trunk can hold you straight. It is worth doing in short, sharp holds rather than one heroic minute.",
    "targets": [
      "anti-extension",
      "abdominal endurance",
      "shoulder stability"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 20,
      "sets": 3,
      "perSide": false
    },
    "cues": [
      "Elbows under your shoulders. Push the floor away.",
      "Squeeze the glutes and keep your ribs down.",
      "Breathe normally. Stop when your hips sag.",
      "Lengthen out from the toes to the crown of your head."
    ],
    "shouldFeel": "The abdominal wall, glutes and shoulders working hard.",
    "shouldNotFeel": "Lower back sag or pain, or shoulder pinching. That is the cue to stop the set.",
    "regressions": [
      {
        "label": "Knees down",
        "detail": "Plank from the knees.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Incline plank",
        "detail": "Forearms on a wall or a chair seat, body at an angle.",
        "props": [
          "wall",
          "chair"
        ]
      },
      {
        "label": "Shorter holds",
        "detail": "Ten seconds, more sets.",
        "props": [
          "none"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Feet together and long lever",
        "detail": "Walk the elbows a little further forward."
      },
      {
        "label": "Add reps not time",
        "detail": "Do more sets of 10 to 20 seconds instead of one long hold."
      }
    ],
    "props": [
      "none"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "shoulder",
      "wrist"
    ],
    "dailySafe": true,
    "maxHoldSeconds": 60,
    "source": [
      "Stuart McGill (trunk endurance testing)",
      "Ekstrom (EMG studies of core exercises)"
    ],
    "evidenceNote": "Plank time is a real test of trunk endurance and back and side endurance has been linked to fewer future episodes of back pain in some studies, but the link is modest and a very long plank adds little. Treat 20 to 60 seconds as plenty and do not read your plank time as a measure of how safe your back is."
  },
  {
    "id": "bear-hold",
    "name": "Bear Hold",
    "aka": [
      "Bear plank",
      "Quadruped hover",
      "Knees-off hold"
    ],
    "regions": [
      "back",
      "fullBody"
    ],
    "role": "load",
    "intensity": 2,
    "summary": "On hands and knees, lift your knees an inch off the floor and hold your trunk still.",
    "why": "It is a plank with a shorter lever: the shoulders and trunk work as if you are about to crawl, and your hips stay back and level. A good step between a bird dog and a full plank.",
    "targets": [
      "anti-extension",
      "shoulder stability",
      "trunk endurance"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 20,
      "sets": 2,
      "perSide": false
    },
    "cues": [
      "Hands under shoulders, knees under hips.",
      "Lift your knees about an inch, no more.",
      "Keep your back flat like a table and breathe.",
      "Push the floor away with your hands."
    ],
    "shouldFeel": "The front of the trunk, shoulders and thighs working.",
    "shouldNotFeel": "Lower back sag, wrist pain, or shoulder pinching.",
    "regressions": [
      {
        "label": "Hands and knees hold",
        "detail": "Stay on hands and knees, knees down, and brace the trunk for the same time. Bird dog is the next step up.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Shorter holds",
        "detail": "Ten seconds.",
        "props": [
          "none"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Slow shoulder taps",
        "detail": "Tap one shoulder with the opposite hand, keeping the hips still."
      },
      {
        "label": "Bear crawl",
        "detail": "Slow forward steps once you can hold for 30 seconds."
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
    "dailySafe": true,
    "maxHoldSeconds": 45,
    "source": [
      "Simply Physio",
      "Pinnacle Hill Chiropractic",
      "Healthline"
    ],
    "evidenceNote": "Popular sources call this 'one of the best core exercises' but I did not find research on it. It is a reasonable low-cost trunk endurance drill and no more."
  },
  {
    "id": "prone-press-up",
    "name": "Prone Press-Up",
    "aka": [
      "McKenzie press-up",
      "Extension in lying",
      "EIL",
      "Cobra press-up"
    ],
    "regions": [
      "back"
    ],
    "role": "main",
    "intensity": 2,
    "summary": "Lying face down with your hands by your shoulders, press your upper body up while your hips and legs stay relaxed on the floor.",
    "why": "It is the standard test in the McKenzie method and a common self-treatment for people whose back is stiff or sore after a lot of sitting or bending. If you spend hours flexed forward at a desk or a bar, this is the opposite direction, done gently, in a range your back rarely visits.",
    "targets": [
      "lumbar extension",
      "abdominal wall stretch",
      "hip flexor stretch"
    ],
    "dose": {
      "kind": "reps",
      "reps": 8,
      "sets": 1,
      "perSide": false,
      "tempoNote": "2s up, 1s hold, 2s down.",
      "secondsPerRep": 5
    },
    "cues": [
      "Lie face down, hands flat under your shoulders. Let your hips and legs go heavy.",
      "Press up with your arms only. Do not use your back muscles to lift.",
      "Go up as far as is comfortable, then lower. Do not force the last few degrees.",
      "Breathe out at the top."
    ],
    "shouldFeel": "A stretch across the front of the belly and hips, and a gentle pressure or arch in the lower back that eases as you go.",
    "shouldNotFeel": "Pain that spreads down the leg or gets further from the spine as you repeat it, sharp pinching in the lower back, or wrist pain. If pain moves further down the leg, stop and see a clinician.",
    "regressions": [
      {
        "label": "Prone on elbows",
        "detail": "Rest on your forearms with elbows under your shoulders.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Prone lying",
        "detail": "Just lie face down for a minute with your arms by your sides or under your head.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Pillow under the belly",
        "detail": "If lying flat is uncomfortable, put a pillow under your hips.",
        "props": [
          "cushion"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Hold at the top",
        "detail": "Hold the top position for 2 to 5 seconds."
      },
      {
        "label": "Hips to the floor, arms locked out",
        "detail": "Only if you can keep the hips relaxed and pain-free."
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
      "sciatica"
    ],
    "dailySafe": true,
    "source": [
      "Robin McKenzie, Treat Your Own Back",
      "Physiopedia: McKenzie Method"
    ],
    "evidenceNote": "The evidence for the McKenzie method is real but has limits. Network meta-analyses of exercise for chronic low back pain found it among the better-performing types, but the certainty is low to moderate and the differences from other exercise are small. What the method actually claims is about direction: if repeating this movement moves your pain from your leg into your back, that is a good sign ('centralisation'). Centralisation is a marker of a better outlook, found in roughly 60 to 70 percent of people with leg-referred pain in the reviews I found. It does not tell you which tissue hurts, does not prove a disc problem, and pain that gets worse further down the leg means stop. Nothing about this position is 'putting a disc back in'. Extension is not always the right direction either: some people feel better bending forward, and some conditions like spinal stenosis prefer flexion. Any pain that moves down the leg, new numbness or weakness, or bladder or bowel changes needs a clinician, not more press-ups."
  },
  {
    "id": "prone-on-elbows",
    "name": "Prone on Elbows",
    "aka": [
      "Sphinx",
      "Sphinx pose",
      "Propped prone lying",
      "McKenzie prone on elbows"
    ],
    "regions": [
      "back"
    ],
    "role": "main",
    "intensity": 1,
    "summary": "Lie face down and prop yourself on your forearms, elbows under your shoulders, and rest there.",
    "why": "The gentle version of the press-up. Your lower back sits in a mild, supported arch and you do nothing. A minute or two here undoes some of the forward-flexed position you spend the day in.",
    "targets": [
      "lumbar extension",
      "hip flexors",
      "abdominal wall"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 60,
      "sets": 1,
      "perSide": false
    },
    "cues": [
      "Elbows under shoulders, forearms flat.",
      "Let your belly, hips and legs be heavy on the floor.",
      "Look at the floor a little in front of you, neck long.",
      "Breathe slowly."
    ],
    "shouldFeel": "A gentle arch and stretch through the lower back and front of the trunk. Comfortable and easy.",
    "shouldNotFeel": "Pinching in the lower back, pain that travels down the leg, or shoulder or neck strain.",
    "regressions": [
      {
        "label": "Lie flat",
        "detail": "Rest face down for a minute with your head turned to one side.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Pillow under the hips",
        "detail": "Reduces the arch.",
        "props": [
          "cushion"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Press-up",
        "detail": "Straighten your arms to lift higher."
      }
    ],
    "props": [
      "none"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "sciatica",
      "shoulder"
    ],
    "dailySafe": true,
    "source": [
      "Robin McKenzie, Treat Your Own Back",
      "Physiopedia: McKenzie Method"
    ],
    "evidenceNote": "Popular sources say this position 'decompresses the discs' or 'pushes bulging discs back in'. Those are theories, not measured facts. What has been measured is that people with back and leg symptoms sometimes feel better in extension and sometimes worse, so use your own response as the guide. If it makes the leg symptoms worse or spreads them lower down, stop."
  },
  {
    "id": "standing-back-extension",
    "name": "Standing Back Extension",
    "aka": [
      "McKenzie standing extension",
      "Standing lumbar extension",
      "One stretch"
    ],
    "regions": [
      "back"
    ],
    "role": "main",
    "intensity": 1,
    "summary": "Standing, with your hands on your hips or the back of your pelvis, lean gently backwards from your lower back, then return.",
    "why": "The easiest extension you can do at work, no floor needed. Use it after a long sit. It is the standing counterpart to the press-up and a common workplace McKenzie exercise.",
    "targets": [
      "lumbar extension"
    ],
    "dose": {
      "kind": "reps",
      "reps": 8,
      "sets": 1,
      "perSide": false,
      "tempoNote": "2s back, 1s hold, 2s up.",
      "secondsPerRep": 5
    },
    "cues": [
      "Feet hip-width, knees straight but not locked. Hands on the back of your pelvis, fingers pointing down.",
      "Lean back as far as is comfortable. Do not force it.",
      "Return to standing slowly.",
      "Stop if your legs feel odd or it hurts."
    ],
    "shouldFeel": "An easy stretch across the front of the trunk and a mild arch in the lower back.",
    "shouldNotFeel": "Pinching in the lower back, pain into the leg, or dizziness.",
    "regressions": [
      {
        "label": "Smaller range",
        "detail": "Just a few degrees of lean.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Hands on a desk",
        "detail": "Lean back holding a bench or desk at hip height for support.",
        "props": [
          "chair"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Hold at the end",
        "detail": "Hold the last rep for 5 seconds."
      },
      {
        "label": "Prone press-up",
        "detail": "Move to the floor version for a bigger range."
      }
    ],
    "props": [
      "none"
    ],
    "officeFriendly": true,
    "barefootOnly": false,
    "contraindications": [
      "sciatica",
      "balance"
    ],
    "dailySafe": true,
    "source": [
      "Robin McKenzie",
      "Physiopedia: McKenzie Method",
      "Munger Physical Therapy",
      "Japanese care worker trial (PMC4727733)"
    ],
    "evidenceNote": "A trial in Japanese care workers reported that a standing back extension routine helped prevent or improve back pain. Trials like this are small and unblinded, so they show it is reasonable to try, not that it works. Some people with leg pain, back stiffness and stenosis feel worse leaning back and better bending forward. If leaning back makes you worse, do not do it. The extension is not 'fixing a slipped disc'."
  },
  {
    "id": "knee-to-chest",
    "name": "Knee-to-Chest Stretch",
    "aka": [
      "Single knee to chest",
      "Double knee to chest",
      "Lumbar flexion in lying",
      "Rocking knees to chest"
    ],
    "regions": [
      "back",
      "hips"
    ],
    "role": "opener",
    "intensity": 1,
    "summary": "On your back, hug one knee, or both, gently towards your chest and hold.",
    "why": "A classic NHS back-pain exercise sheet move. It puts your lower back into gentle flexion and stretches the glutes. If you have been standing, arching or lifting, this is a comfortable counter-position.",
    "targets": [
      "lumbar flexion",
      "glutes",
      "hip flexion"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 20,
      "sets": 2,
      "perSide": true
    },
    "cues": [
      "Lie on your back, knees bent, feet flat.",
      "Pull one knee towards your chest with both hands behind the thigh, not on the knee.",
      "Keep the other foot on the floor. Relax the neck.",
      "Breathe out slowly."
    ],
    "shouldFeel": "A gentle stretch in the lower back and buttock.",
    "shouldNotFeel": "Pinching in the front of the hip, knee pain, or pain that goes down the leg.",
    "regressions": [
      {
        "label": "Hands behind the thigh",
        "detail": "Avoid pulling on the knee itself.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Smaller range",
        "detail": "Do not pull as far.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Towel loop",
        "detail": "Loop a towel behind the thigh if you cannot reach.",
        "props": [
          "towel"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Both knees",
        "detail": "Bring both knees to the chest and rock gently side to side."
      },
      {
        "label": "Opposite leg long",
        "detail": "Extend the other leg flat on the floor for a hip flexor stretch as well."
      }
    ],
    "props": [
      "none"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "backPain",
      "osteoporosis",
      "hipReplacement"
    ],
    "dailySafe": true,
    "source": [
      "Arthritis UK / Versus Arthritis back exercises",
      "NHS Wrightington, Wigan and Leigh back exercises"
    ],
    "evidenceNote": "This is a comfortable position, not a treatment. Nothing is being 'decompressed' or 'reset'. It feels good because you are moving and breathing. If bending forward is what flares your back, do not do it. Pulling into end-range flexion is the position that most osteoporosis guidance says to be careful with."
  },
  {
    "id": "lower-trunk-rotation",
    "name": "Lower Trunk Rotation",
    "aka": [
      "Knee rolls",
      "Crook-lying rotation",
      "Lumbar rotation in lying",
      "Knee drops"
    ],
    "regions": [
      "back"
    ],
    "role": "opener",
    "intensity": 1,
    "summary": "On your back with your knees bent and together, slowly roll both knees to one side and then the other while your shoulders stay flat.",
    "why": "A gentle rotation for the lower back that needs no equipment and is part of nearly every NHS back-pain exercise sheet. It is a gentle way to move your spine when it feels stiff.",
    "targets": [
      "lumbar rotation",
      "obliques"
    ],
    "dose": {
      "kind": "reps",
      "reps": 10,
      "sets": 1,
      "perSide": false,
      "tempoNote": "3s to each side.",
      "secondsPerRep": 6
    },
    "cues": [
      "Knees together, feet flat, shoulders flat on the floor.",
      "Roll your knees only as far as is comfortable, or until the opposite shoulder wants to lift.",
      "Move slowly, breathe out as you roll.",
      "Small and smooth beats big and forced."
    ],
    "shouldFeel": "A mild twist and stretch in the lower back and outer hips.",
    "shouldNotFeel": "Sharp pain in the back, pain down the leg, or hip pinching.",
    "regressions": [
      {
        "label": "Smaller range",
        "detail": "Just a few centimetres each side.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Feet wider",
        "detail": "Take the feet wider apart to reduce the rotation.",
        "props": [
          "none"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Feet further from the bum",
        "detail": "Moving the feet changes where the rotation happens."
      },
      {
        "label": "Hold each side",
        "detail": "Pause for 5 seconds at the end of each roll."
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
      "NHS Wrightington, Wigan and Leigh (Low Back Pain Exercises Level 1)",
      "East Lancashire Hospitals NHS Trust back mobility"
    ],
    "evidenceNote": "A gentle mobility exercise, not a treatment. No research shows it 'releases' anything. Its value is that it is a way to move a stiff, sore back comfortably, which is what current guidance for back pain encourages. Note that Hip Swivels (already in the app) is a seated hip drill, not this lumbar position."
  },
  {
    "id": "pelvic-tilt",
    "name": "Pelvic Tilt",
    "aka": [
      "Pelvic rocking",
      "Posterior pelvic tilt",
      "Lumbar tilt",
      "Pelvic clock"
    ],
    "regions": [
      "back"
    ],
    "role": "opener",
    "intensity": 1,
    "summary": "On your back with your knees bent, gently tilt your pelvis to flatten your lower back into the floor, then let it arch slightly, and repeat.",
    "why": "The plain, no-load way to find where your lower back is and to move it a small distance in each direction. It is the first exercise on many hospital back sheets because it is easy and calming.",
    "targets": [
      "lumbar flexion",
      "lumbar extension",
      "pelvic awareness"
    ],
    "dose": {
      "kind": "reps",
      "reps": 10,
      "sets": 1,
      "perSide": false,
      "tempoNote": "3s each way.",
      "secondsPerRep": 6
    },
    "cues": [
      "Knees bent, feet flat. Breathe normally.",
      "Gently rock the pelvis to flatten your lower back, then let it arch slightly.",
      "Move slowly and stay relaxed. Do not squeeze the belly hard.",
      "Small movements only."
    ],
    "shouldFeel": "A small, gentle movement of the lower back and pelvis.",
    "shouldNotFeel": "Pain, or holding your breath.",
    "regressions": [
      {
        "label": "Smaller range",
        "detail": "Just a whisper of movement.",
        "props": [
          "none"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Add a bridge",
        "detail": "Tilt then lift into a glute bridge, one bone at a time."
      },
      {
        "label": "Standing at a wall",
        "detail": "Back against a wall, tilt to flatten the lower back onto it."
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
      "South Tees Hospitals NHS Foundation Trust",
      "Cambridge University Hospitals back mobility exercises"
    ],
    "evidenceNote": "This is a movement warm-up, not a way to 'fix your pelvic position'. Nobody has a wrong resting tilt that this corrects, and there is no evidence that it changes posture or cures pain. The middle of the movement is sometimes called 'neutral spine'. There is no single correct neutral that you need to hold at all times."
  },
  {
    "id": "quadruped-thoracic-rotation",
    "name": "Quadruped Thoracic Rotation",
    "aka": [
      "Quadruped T-spine rotation",
      "Hand-behind-head rotation",
      "Quadruped rotation"
    ],
    "regions": [
      "back"
    ],
    "role": "opener",
    "intensity": 1,
    "summary": "On hands and knees, put one hand behind your head and rotate your chest up towards the ceiling and back.",
    "why": "Your mid-back is built to rotate, and your hips and lower back happily fake it when it does not. Sitting your hips back on your heels a little stops the lower back taking over, so the turn comes from your ribcage.",
    "targets": [
      "thoracic rotation",
      "thoracic extension"
    ],
    "dose": {
      "kind": "reps",
      "reps": 8,
      "sets": 1,
      "perSide": true,
      "tempoNote": "2s open, 1s pause, 2s back.",
      "secondsPerRep": 5
    },
    "cues": [
      "Hips back towards your heels, a little, and keep them there.",
      "Hand behind head. Turn your elbow to the ceiling and follow it with your eyes.",
      "Turn from the ribs. Do not let the hips swing.",
      "Breathe out as you open."
    ],
    "shouldFeel": "A stretch through the mid-back, side ribs and chest.",
    "shouldNotFeel": "Lower back twisting, shoulder pinching, or wrist pain.",
    "regressions": [
      {
        "label": "Hand on the sacrum",
        "detail": "Place the moving hand on your lower back instead of your head.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Seated",
        "detail": "Use the seated thoracic rotation.",
        "props": [
          "chair"
        ]
      },
      {
        "label": "Forearm on cushion",
        "detail": "Support the standing forearm on a cushion if your wrist objects.",
        "props": [
          "cushion"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Reach-through",
        "detail": "Slide the same arm under your body and then open up."
      },
      {
        "label": "Hold the end",
        "detail": "Pause for 5 seconds at the open position."
      }
    ],
    "props": [
      "none"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "wrist"
    ],
    "dailySafe": true,
    "source": [
      "The Prehab Guys",
      "Physiopedia: Thoracic Manual Techniques and Exercises",
      "Clinical reasoning framework for thoracic spine exercise (PMC7173996)"
    ],
    "evidenceNote": "The claim that this 'unlocks your thoracic spine' or 'fixes posture' is not supported. People with a stiff mid-back often feel a difference in overhead reach and rotation straight afterwards, but that is a feeling, not a measured long-term change. The evidence for thoracic mobility work and back pain is thin."
  },
  {
    "id": "seated-thoracic-rotation",
    "name": "Seated Thoracic Rotation",
    "aka": [
      "Seated trunk rotation",
      "Seated rotations",
      "Desk rotation"
    ],
    "regions": [
      "back"
    ],
    "role": "opener",
    "intensity": 1,
    "summary": "Sit tall on a chair with your arms crossed over your chest, and turn your ribcage slowly to each side while your hips face forward.",
    "why": "You can do this at your desk, in a car park or before a run. Your mid-back needs rotation and your hips are not involved, so the movement comes from your ribs.",
    "targets": [
      "thoracic rotation",
      "obliques"
    ],
    "dose": {
      "kind": "reps",
      "reps": 6,
      "sets": 1,
      "perSide": true,
      "tempoNote": "3s turn, 2s hold, 2s back.",
      "secondsPerRep": 7
    },
    "cues": [
      "Sit at the front of a firm chair with feet flat and knees pointing forward.",
      "Cross your arms. Lead with the breastbone and turn around your spine.",
      "Keep your hips and knees pointing forward.",
      "Breathe out as you turn."
    ],
    "shouldFeel": "A stretch through the mid-back and sides of the ribcage.",
    "shouldNotFeel": "Pain in the lower back or hips, or neck strain.",
    "regressions": [
      {
        "label": "Smaller turn",
        "detail": "Turn only as far as your hips stay still and it feels easy.",
        "props": [
          "chair"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Hold a dowel",
        "detail": "Broomstick across the shoulders for a longer lever."
      },
      {
        "label": "Longer hold",
        "detail": "Hold each side for 20 seconds, breathing slowly."
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
      "South Tees Hospitals NHS Foundation Trust",
      "Cambridge University Hospitals thoracic spine exercises"
    ],
    "evidenceNote": "Good for a quick desk break. Nobody has shown that seated rotations reduce back pain or prevent it. The value is that you moved."
  },
  {
    "id": "side-lying-windmill",
    "name": "Side-Lying Windmill",
    "aka": [
      "Thoracic windmill",
      "Windmill rotation",
      "Side-lying arm sweep"
    ],
    "regions": [
      "back"
    ],
    "role": "main",
    "intensity": 2,
    "summary": "Lying on your side with your top knee bent and resting on a cushion, sweep your top arm in a big arc across your body and back over your head to the floor behind you.",
    "why": "The open book with a bigger sweep. The bent, supported knee locks the pelvis so the rotation and reach come from the mid-back and shoulder girdle. It works both thoracic extension and rotation in one move.",
    "targets": [
      "thoracic rotation",
      "thoracic extension",
      "shoulder girdle mobility"
    ],
    "dose": {
      "kind": "reps",
      "reps": 6,
      "sets": 1,
      "perSide": true,
      "tempoNote": "4s across, 4s back.",
      "secondsPerRep": 8
    },
    "cues": [
      "Lie on your side, bottom leg straight, top hip and knee bent to 90 degrees on a stack of cushions.",
      "Sweep your top arm forward, up and over, keeping your eyes on your hand.",
      "Press the top knee down into the cushion so your pelvis does not roll.",
      "Exhale as the arm goes back."
    ],
    "shouldFeel": "A stretch through the chest, mid-back and front of the shoulder.",
    "shouldNotFeel": "Shoulder pinching, lower back twisting, or numbness in the arm.",
    "regressions": [
      {
        "label": "Smaller sweep",
        "detail": "Do not go all the way to the floor.",
        "props": [
          "cushion"
        ]
      },
      {
        "label": "Use the open book",
        "detail": "Simpler version with knees stacked.",
        "props": [
          "cushion"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Hold the end",
        "detail": "Hold the open position for 5 seconds with a slow exhale."
      },
      {
        "label": "Foam roller",
        "detail": "Rest the top knee on a foam roller instead of a cushion."
      }
    ],
    "props": [
      "cushion"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "shoulder",
      "hipReplacement"
    ],
    "dailySafe": true,
    "source": [
      "Rehab Hero",
      "Physiopedia: Thoracic Manual Techniques and Exercises"
    ],
    "evidenceNote": "Popular claims say this 'unlocks' the spine. Range often feels better straight after drills like this, but I found no trials showing a change in back pain. Treat it as movement practice."
  },
  {
    "id": "bench-thoracic-extension",
    "name": "Kneeling Bench Thoracic Extension",
    "aka": [
      "Prayer stretch",
      "Kneeling thoracic extension",
      "Bench T-spine extension",
      "Elbows-on-bench stretch"
    ],
    "regions": [
      "back"
    ],
    "role": "main",
    "intensity": 2,
    "summary": "Kneel in front of a chair seat or bench with your elbows on it and sink your chest towards the floor.",
    "why": "The floor-friendly way to get your mid-back into extension and stretch your lats and shoulders at the same time. Good before you lift anything overhead and a good counter to a day hunched at a screen.",
    "targets": [
      "thoracic extension",
      "lats",
      "shoulder flexion"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 30,
      "sets": 2,
      "perSide": false
    },
    "cues": [
      "Kneel with elbows on a chair seat about shoulder-width apart, palms together or thumbs up.",
      "Sit your hips back a little and let your chest sink between your arms.",
      "Keep your ribs soft so the bend comes from your mid-back, not your lower back.",
      "Breathe out and let the chest drop a bit more on each breath."
    ],
    "shouldFeel": "A stretch under the armpits and through the mid-back and the back of the shoulders.",
    "shouldNotFeel": "Pinching at the top of the shoulder, lower back pinching, or wrist pain.",
    "regressions": [
      {
        "label": "Higher surface",
        "detail": "Use a higher chair seat, or stand and use a wall.",
        "props": [
          "chair",
          "wall"
        ]
      },
      {
        "label": "Hips further back",
        "detail": "Sit the hips back towards your heels to reduce the arch.",
        "props": [
          "cushion"
        ]
      },
      {
        "label": "Cushion under the knees",
        "detail": "Pad the knees.",
        "props": [
          "cushion"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Dowel in the hands",
        "detail": "Hold a broomstick to lengthen the reach."
      },
      {
        "label": "Longer hold",
        "detail": "Build to 60 seconds."
      }
    ],
    "props": [
      "chair",
      "cushion"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "shoulder",
      "osteoporosis",
      "knee"
    ],
    "dailySafe": true,
    "source": [
      "Squat University (Aaron Horschig)",
      "Rehab Hero",
      "Redefining Strength"
    ],
    "evidenceNote": "This is a stretch for shoulder flexion and the mid-back. Improved thoracic extension after a session is real but short-lived and there is no evidence it 'fixes rounded shoulders' or posture. Aim the arch at the mid-back: most people arch the lower back instead, which is the part that does not need extra range."
  },
  {
    "id": "wall-angels",
    "name": "Wall Angels",
    "aka": [
      "Wall slides",
      "Wall angel slides",
      "Back-to-wall arm slides"
    ],
    "regions": [
      "back"
    ],
    "role": "opener",
    "intensity": 1,
    "summary": "Stand with your back, head and hips against a wall and slide your arms up and down the wall like a snow angel.",
    "why": "It checks whether you can get your arms overhead without arching your lower back or hoisting your ribs forward. That is the same check you need to press or hang from a bar.",
    "targets": [
      "thoracic extension",
      "shoulder flexion",
      "serratus anterior",
      "lower trapezius"
    ],
    "dose": {
      "kind": "reps",
      "reps": 10,
      "sets": 1,
      "perSide": false,
      "tempoNote": "3s up, 3s down.",
      "secondsPerRep": 6
    },
    "cues": [
      "Stand with heels a few centimetres from the wall, and hips, upper back and head touching.",
      "Arms in a goalpost shape, backs of the hands as close to the wall as you comfortably can.",
      "Slide up and down without your ribs or lower back lifting off the wall.",
      "Go only as far as you can keep the contact."
    ],
    "shouldFeel": "A stretch across the chest and front of the shoulders, and effort in the mid-back and shoulder blades.",
    "shouldNotFeel": "Pinching at the top of the shoulder, tingling or numbness in the arms, or your lower back arching hard.",
    "regressions": [
      {
        "label": "Smaller range",
        "detail": "Slide only as far as the wall contact holds.",
        "props": [
          "wall"
        ]
      },
      {
        "label": "Forearms on the wall, elbows low",
        "detail": "Reduce the reach.",
        "props": [
          "wall"
        ]
      },
      {
        "label": "Lying on the floor",
        "detail": "Do the same slide lying on your back with knees bent.",
        "props": [
          "none"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Feet closer to the wall",
        "detail": "Reduces the room to cheat with the lower back."
      },
      {
        "label": "Pause at the top",
        "detail": "Hold the top for 3 seconds."
      }
    ],
    "props": [
      "wall"
    ],
    "officeFriendly": true,
    "barefootOnly": false,
    "contraindications": [
      "shoulder"
    ],
    "dailySafe": true,
    "source": [
      "JOSPT serratus anterior wall slide EMG study",
      "Peak Physio and practitioner sources"
    ],
    "evidenceNote": "What is measured is that wall slides activate the serratus anterior at and above shoulder height, which is why physios use them for shoulders. The claim that they 'fix kyphosis' or 'correct rounded posture' is unproven; I found a trial comparing them with other exercises for hunched posture that is registered but I found no published result. Treat it as a test of overhead reach and a decent shoulder warm-up rather than a spine corrector."
  },
  {
    "id": "prone-ytw",
    "name": "Prone Y-T-W Raises",
    "aka": [
      "Prone Y T W",
      "Prone YTWL",
      "Prone shoulder raises",
      "Prone Y raise"
    ],
    "regions": [
      "back"
    ],
    "role": "load",
    "intensity": 2,
    "summary": "Lie face down and lift your arms off the floor in a Y, then a T, then a W shape, with your thumbs up.",
    "why": "The muscles between and below your shoulder blades and along your mid-back do a lot of the work of holding you upright at a desk and under a bar. This trains them to work for longer, without the spine moving much.",
    "targets": [
      "lower trapezius",
      "mid trapezius",
      "thoracic extensors",
      "rear delts"
    ],
    "dose": {
      "kind": "reps",
      "reps": 5,
      "sets": 2,
      "perSide": false,
      "tempoNote": "Y, T, then W, 5s each.",
      "secondsPerRep": 15
    },
    "cues": [
      "Lie face down, forehead resting on a folded towel, thumbs up.",
      "Lift the arms with your shoulder blades, not by arching your lower back.",
      "Lift only a few centimetres. Hold each shape for a breath.",
      "Keep your legs and pelvis on the floor."
    ],
    "shouldFeel": "Muscles working between and below the shoulder blades and along the mid-back.",
    "shouldNotFeel": "Pinching in the shoulder joint, neck strain, or lower back pain.",
    "regressions": [
      {
        "label": "Y only",
        "detail": "Do just the Y shape, which most reliably works the lower trapezius.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Arms low",
        "detail": "Keep the arms lower, at a 30 degree angle.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Towel under the hips",
        "detail": "Rolled towel under the pelvis to protect the lower back.",
        "props": [
          "towel"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Longer holds",
        "detail": "Hold each shape for 10 seconds."
      },
      {
        "label": "Light weights",
        "detail": "Hold a tin of beans in each hand."
      }
    ],
    "props": [
      "towel"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "shoulder"
    ],
    "dailySafe": true,
    "source": [
      "Ekstrom et al., JOSPT 2003 (surface EMG of trapezius and serratus exercises)"
    ],
    "evidenceNote": "The 2003 EMG study showed that the Y (prone arm raise overhead) gives the highest lower-trapezius activation of the exercises tested. That is a measure of muscle activity, not proof it prevents pain or 'fixes posture'. Popular sites also say it 'strengthens the spine'; it strengthens the shoulder-blade and mid-back muscles."
  },
  {
    "id": "quadruped-rock-back",
    "name": "Quadruped Rock-Back",
    "aka": [
      "Rocking",
      "Rock-back",
      "Quadruped hip hinge",
      "Rocking test"
    ],
    "regions": [
      "back",
      "hips"
    ],
    "role": "main",
    "intensity": 1,
    "summary": "On hands and knees, sit your hips back towards your heels while keeping your lower back where it started.",
    "why": "The simplest way to feel the difference between bending at the hip and bending at the lower back. If your back rounds before your hips have moved much, that is the 'lower-back-first' bend that many lifters and desk workers default to.",
    "targets": [
      "hip flexion",
      "lumbar-pelvic dissociation",
      "hip hinge"
    ],
    "dose": {
      "kind": "reps",
      "reps": 8,
      "sets": 1,
      "perSide": false,
      "tempoNote": "3s back, 3s forward.",
      "secondsPerRep": 6
    },
    "cues": [
      "Hands under shoulders, knees under hips.",
      "Rock your hips straight back as if closing a drawer with your bum.",
      "Notice the point where your lower back starts to round. Stop just before it.",
      "Rock forward again, keeping the back quiet."
    ],
    "shouldFeel": "A stretch in the glutes and back of the hips, and the awareness of where your back starts to move.",
    "shouldNotFeel": "Knee pain, or pinching in the front of the hip.",
    "regressions": [
      {
        "label": "Smaller range",
        "detail": "Rock back only a short way.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Cushion behind the knees",
        "detail": "Reduces knee bend if the knees complain.",
        "props": [
          "cushion"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Knees wider",
        "detail": "Wider knees let the hips go deeper before the spine moves."
      },
      {
        "label": "Hold at your end range",
        "detail": "Pause for 3 seconds and breathe."
      }
    ],
    "props": [
      "none"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [
      "knee",
      "wrist"
    ],
    "dailySafe": true,
    "source": [
      "Stuart McGill (rocking)",
      "Shirley Sahrmann (rocking backward test)",
      "Duke R2P"
    ],
    "evidenceNote": "This is a drill, not a rule. Rounding your lower back is not dangerous. It is useful to know your hip range, because if your hips stop early your lower back tends to make up the difference under load. The 'neutral spine at all times' message that comes with hinge cues has no backing: a review of lifting studies found no link between lumbar flexion while lifting and disabling low back pain."
  },
  {
    "id": "wall-hip-hinge",
    "name": "Wall Hip Hinge",
    "aka": [
      "Butt-to-wall hinge",
      "Wall hinge drill",
      "Wall tap hinge"
    ],
    "regions": [
      "hamstrings",
      "back"
    ],
    "role": "opener",
    "intensity": 1,
    "summary": "Stand a step in front of a wall, facing away, and push your hips back until your bum touches the wall, then stand up again.",
    "why": "A wall gives your hips a target to move to, which is easier than a broomstick if you have never felt a hinge. It teaches your body to move backwards at the hips first, the same start to every deadlift and every pick-up from the floor.",
    "targets": [
      "hip hinge",
      "hamstrings",
      "glutes"
    ],
    "dose": {
      "kind": "reps",
      "reps": 8,
      "sets": 1,
      "perSide": false,
      "tempoNote": "3s back, 2s up.",
      "secondsPerRep": 5
    },
    "cues": [
      "Stand about a foot from the wall, facing away, feet hip-width, soft knees.",
      "Push your bum back to touch the wall. Let the trunk lean forward as it goes.",
      "Keep your weight over your mid-foot.",
      "Stand up by pushing the floor away and squeezing the glutes."
    ],
    "shouldFeel": "A stretch in the hamstrings and a push through the glutes as you stand.",
    "shouldNotFeel": "Lower back pain, or knee pain.",
    "regressions": [
      {
        "label": "Closer to the wall",
        "detail": "Reduces the depth.",
        "props": [
          "wall"
        ]
      },
      {
        "label": "Hands on thighs",
        "detail": "Slide the hands down the thighs for support.",
        "props": [
          "wall"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Step further away",
        "detail": "An inch at a time until you no longer touch the wall."
      },
      {
        "label": "Add the dowel",
        "detail": "Same movement with the broomstick along your back."
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
      "Physiopedia: Hip Hinge",
      "T Nation: Wall and Dowel Hip Hinge Drills",
      "PhysioFit Adelaide"
    ],
    "evidenceNote": "The idea that you must keep your back neutral at all times when you bend or lift is not supported by the evidence. A 2020 systematic review found no association between lumbar flexion while lifting and the development of disabling low back pain. Hinging is worth learning because it uses your strong hips for the work, not because rounding is dangerous."
  },
  {
    "id": "standing-roll-down",
    "name": "Standing Roll-Down",
    "aka": [
      "Spinal roll down",
      "Pilates roll-down",
      "Segmental forward bend",
      "Roll-up and roll-down"
    ],
    "regions": [
      "back",
      "hamstrings"
    ],
    "role": "main",
    "intensity": 1,
    "summary": "Standing, tuck your chin and slowly round your spine forward one section at a time until your hands hang, then roll back up.",
    "why": "It is deliberate, unloaded rounding of your spine, and a way to check whether it moves evenly. Most people have a stiff patch. Doing it slowly on purpose is a useful way to prove to yourself that a rounded spine is not something to fear.",
    "targets": [
      "spinal flexion",
      "hamstrings",
      "spinal awareness"
    ],
    "dose": {
      "kind": "reps",
      "reps": 5,
      "sets": 1,
      "perSide": false,
      "tempoNote": "5s down, 5s up.",
      "secondsPerRep": 10
    },
    "cues": [
      "Feet hip-width, knees soft.",
      "Tuck your chin, then let the head and each part of your spine roll forward one at a time.",
      "Let your arms and head hang. Do not bounce.",
      "Roll up slowly, hips first, head last."
    ],
    "shouldFeel": "A stretch in the back and back of the legs, and a smooth roll.",
    "shouldNotFeel": "Dizziness, pain down the leg, or sharp back pain.",
    "regressions": [
      {
        "label": "Hands on thighs",
        "detail": "Support the hands on the thighs as you go down.",
        "props": [
          "none"
        ]
      },
      {
        "label": "Against a wall",
        "detail": "Stand with your back a hand's width from a wall and roll away from it.",
        "props": [
          "wall"
        ]
      },
      {
        "label": "Bent knees",
        "detail": "Bend the knees more if the back of the legs pull.",
        "props": [
          "none"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Longer hang",
        "detail": "Hang at the bottom for 10 seconds, breathing."
      },
      {
        "label": "Straighter legs",
        "detail": "Only if it stays comfortable."
      }
    ],
    "props": [
      "none"
    ],
    "officeFriendly": true,
    "barefootOnly": false,
    "contraindications": [
      "backPain",
      "osteoporosis",
      "sciatica",
      "balance"
    ],
    "dailySafe": true,
    "source": [
      "Physio-led Pilates roll-down guides (Pro Pelvic)",
      "NHS Cheshire and Merseyside lower back range of motion exercises"
    ],
    "evidenceNote": "Some claim that rolling up from a forward bend 'damages your spine' or that flexion must be avoided; that is not what the research on lifting and low back pain shows. It is unloaded and slow. For people with osteoporosis or a past spinal fracture, sustained and loaded forward bending is the position to avoid, so do not add weight and skip this if you are in that group. Some people with pain that flares when they bend forward will want to skip it."
  },
  {
    "id": "doorframe-lat-stretch",
    "name": "Doorframe Lat Stretch",
    "aka": [
      "Lat stretch on a doorframe",
      "Overhead lat stretch",
      "Wall lat stretch"
    ],
    "regions": [
      "back"
    ],
    "role": "main",
    "intensity": 1,
    "summary": "Hold a doorframe with one hand at head height, step back and sit your hips away, so your armpit and the side of your ribs stretch.",
    "why": "Your lats attach from your upper arm to the base of your spine and pelvis. If they are short you lose overhead reach, and your lower back often arches to make up the difference. This is the easy way to stretch them, and also a way to feel the side of your ribs open when you breathe.",
    "targets": [
      "latissimus dorsi",
      "lateral trunk",
      "shoulder flexion"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 30,
      "sets": 2,
      "perSide": true
    },
    "cues": [
      "Hold the frame at about head height with one hand, thumb up.",
      "Step back and sit your hips away until your arm is straight and your torso is bent.",
      "Turn your chest a little away from the arm to feel it up the side.",
      "Breathe into your ribs and drop the hips a bit further each breath."
    ],
    "shouldFeel": "A stretch from the armpit down the side of the ribs, sometimes into the hip.",
    "shouldNotFeel": "Pinching at the front of the shoulder, tingling in the arm, or lower back arching.",
    "regressions": [
      {
        "label": "Hand lower",
        "detail": "Hold the frame at chest height.",
        "props": [
          "doorframe"
        ]
      },
      {
        "label": "Two hands",
        "detail": "Both hands on the frame, hips back, chest towards the floor.",
        "props": [
          "doorframe"
        ]
      },
      {
        "label": "Use a wall",
        "detail": "Hand flat on the wall.",
        "props": [
          "wall"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Kneel and reach",
        "detail": "Use the kneeling bench version for a bigger stretch."
      },
      {
        "label": "Longer hold",
        "detail": "Build to 60 seconds."
      }
    ],
    "props": [
      "doorframe"
    ],
    "officeFriendly": true,
    "barefootOnly": false,
    "contraindications": [
      "shoulder"
    ],
    "dailySafe": true,
    "source": [
      "Peak Physio",
      "The Prehab Guys",
      "Physitrack"
    ],
    "evidenceNote": "Stretching a short lat helps overhead range in the short term. The claim that tight lats cause low back pain is not established. Lat stretching is a comfortable position that many people like, nothing more. Most stretching evidence is short-term and small."
  },
  {
    "id": "seated-side-bend",
    "name": "Seated Side Bend",
    "aka": [
      "Seated lateral flexion",
      "Seated QL stretch",
      "Chair side stretch"
    ],
    "regions": [
      "back"
    ],
    "role": "opener",
    "intensity": 1,
    "summary": "Sit tall on a chair, reach one arm over your head and lean gently to the opposite side.",
    "why": "The side of your trunk, including the quadratus lumborum and lats, rarely gets moved in a straight-ahead life of lifting, running and sitting. This is the gentlest way to put the side of the spine through some movement.",
    "targets": [
      "lateral flexion",
      "quadratus lumborum",
      "lats"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 20,
      "sets": 2,
      "perSide": true
    },
    "cues": [
      "Sit tall on the front of the chair, both sit-bones heavy.",
      "Reach one arm up and over, keeping the other hand on the seat or thigh.",
      "Bend sideways, not forwards or backwards.",
      "Breathe into the stretched side."
    ],
    "shouldFeel": "A stretch up the side of the trunk from hip to armpit.",
    "shouldNotFeel": "Pinching in the lower back, or shoulder pain.",
    "regressions": [
      {
        "label": "Hand on the head",
        "detail": "Reduce the reach.",
        "props": [
          "chair"
        ]
      },
      {
        "label": "Smaller lean",
        "detail": "Go less far.",
        "props": [
          "chair"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Cross the legs",
        "detail": "Cross one leg for a slightly different stretch."
      },
      {
        "label": "Standing",
        "detail": "Same movement standing tall."
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
      "Rehab Hero (QL stretch)",
      "The Prehab Guys"
    ],
    "evidenceNote": "The quadratus lumborum is often blamed for back pain and 'tight QL' is a common diagnosis. There is no good evidence that a tight QL causes most low back pain, or that stretching it is a treatment. Side-bending is simply a movement direction that most people do not visit; it is comfortable and reasonable to include."
  },
  {
    "id": "crocodile-breathing",
    "name": "Crocodile Breathing",
    "aka": [
      "Prone diaphragmatic breathing",
      "Makarasana breathing",
      "Prone belly breathing"
    ],
    "regions": [
      "back"
    ],
    "role": "rest",
    "intensity": 1,
    "summary": "Lie face down with your forehead resting on your hands and breathe slowly into your belly and the back of your ribs against the floor.",
    "why": "Lying face down, the floor gives your belly and lower ribs something to push against, so you can feel where your breath goes. Many people who lift breathe only into the chest and neck. This is a calm, low-effort way to feel your ribs and belly move.",
    "targets": [
      "diaphragmatic breathing",
      "rib mobility"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 90,
      "sets": 1,
      "perSide": false
    },
    "cues": [
      "Lie face down, hands stacked under your forehead, elbows out.",
      "Breathe in through your nose for about four seconds. Feel the belly and lower ribs press against the floor.",
      "Breathe out through the mouth slowly, longer than the inhale.",
      "Keep shoulders and jaw loose."
    ],
    "shouldFeel": "Belly and lower ribs pressing into the floor on the in-breath, and settling on the out-breath. Calming.",
    "shouldNotFeel": "Light-headedness. That means over-breathing: slow down and breathe less.",
    "regressions": [
      {
        "label": "Towel under the forehead",
        "detail": "Rolled towel under your forehead instead of stacked hands.",
        "props": [
          "towel"
        ]
      },
      {
        "label": "Supine",
        "detail": "Use the supine breathing position instead.",
        "props": [
          "none"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Longer exhale",
        "detail": "Four seconds in, six to eight out."
      },
      {
        "label": "Hands on the lower ribs",
        "detail": "Place a hand on either side to feel them widen."
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
      "Gray Cook (Functional Movement Systems)",
      "B3 Physical Therapy"
    ],
    "evidenceNote": "You will see it said that after about 20 crocodile breaths, 70 to 80 percent of people improve on a movement screen. That is a workshop observation, not a study. What is reasonable to claim is that slow breathing while lying face down is calming and helps you feel your ribs move. It does not 'reset the nervous system' or 'fix the core'."
  },
  {
    "id": "side-lying-rib-breathing",
    "name": "Side-Lying Rib Breathing",
    "aka": [
      "Lateral costal breathing",
      "Side-lying lateral breathing",
      "Side-lying rib expansion"
    ],
    "regions": [
      "back"
    ],
    "role": "rest",
    "intensity": 1,
    "summary": "Lie on your side with a pillow under your head and knees bent, and breathe so the top ribs widen sideways.",
    "why": "Your ribs move most sideways and to the back when you breathe well. Lying on your side, the bottom ribs are supported and the top ribs are free to move, so it is easy to feel the ribs widen. Good for a calm ending after a hard session.",
    "targets": [
      "lateral rib expansion",
      "thoracic mobility",
      "breathing awareness"
    ],
    "dose": {
      "kind": "hold",
      "seconds": 60,
      "sets": 1,
      "perSide": true
    },
    "cues": [
      "Lie on your side, pillow under the head, knees bent and stacked.",
      "Put your top hand on the side of your lower ribs.",
      "Breathe in through the nose so the ribs widen up into your hand.",
      "Breathe out slowly and let the ribs drop."
    ],
    "shouldFeel": "The ribs on the top side widening on the in-breath and settling on the out-breath.",
    "shouldNotFeel": "Light-headedness, or neck and shoulder tension.",
    "regressions": [
      {
        "label": "Hands on ribs",
        "detail": "Use both hands to feel the movement.",
        "props": [
          "cushion"
        ]
      },
      {
        "label": "Lying on your back",
        "detail": "Use the supine breathing position.",
        "props": [
          "none"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Reach the top arm overhead",
        "detail": "Rest the top arm along your ear to open the side further."
      },
      {
        "label": "Longer exhale",
        "detail": "Four seconds in, six to eight seconds out."
      }
    ],
    "props": [
      "cushion"
    ],
    "officeFriendly": false,
    "barefootOnly": false,
    "contraindications": [],
    "dailySafe": true,
    "source": [
      "Physiopedia: Diaphragmatic Breathing Exercises",
      "Empowered Physical Therapy (lateral breathing)"
    ],
    "evidenceNote": "Rib mobility and breathing drills are common in physio clinics and pulmonary rehab, but for back pain the evidence is thin. Claims that lateral breathing 'fixes rib flare', 'resets your posture' or 'engages your deep core' are practitioner ideas, not research findings. Its honest use is as a slow, calming position."
  },
  {
    "id": "abdominal-draw-in",
    "name": "Abdominal Draw-In",
    "aka": [
      "Abdominal hollowing",
      "Transversus abdominis activation",
      "Drawing-in manoeuvre",
      "ADIM"
    ],
    "regions": [
      "back"
    ],
    "role": "main",
    "intensity": 1,
    "summary": "On your back with your knees bent, gently draw your lower belly in and up, as if zipping tight trousers, and hold while you breathe.",
    "why": "This was the classic physio drill for the deep abdominal muscles. It is a small, precise contraction, not a hard brace. It is mostly used to teach someone who has never felt their trunk muscles what it feels like to switch them on.",
    "targets": [
      "transversus abdominis",
      "deep trunk muscles"
    ],
    "dose": {
      "kind": "reps",
      "reps": 6,
      "sets": 1,
      "perSide": false,
      "tempoNote": "10s hold, 2s rest.",
      "secondsPerRep": 12
    },
    "cues": [
      "Knees bent, feet flat, spine relaxed.",
      "Gently draw your lower belly button in towards your spine, about a quarter effort.",
      "Keep breathing normally. Do not hold your breath or flatten your back.",
      "Your ribs and pelvis should not move."
    ],
    "shouldFeel": "A gentle tightening low in the belly, a quarter of full effort.",
    "shouldNotFeel": "Holding your breath, your ribs flaring, or a hard clench.",
    "regressions": [
      {
        "label": "Shorter hold",
        "detail": "Five seconds.",
        "props": [
          "none"
        ]
      },
      {
        "label": "On hands and knees",
        "detail": "Do it in four-point kneeling.",
        "props": [
          "none"
        ]
      }
    ],
    "progressions": [
      {
        "label": "Add a heel slide",
        "detail": "Draw in, then slide one heel away and back without your back moving."
      },
      {
        "label": "Move to the dead bug",
        "detail": "Use it as the entry to leg-lowering drills."
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
      "Carolyn Richardson and Paul Hodges (Queensland motor control work)",
      "JOSPT (Teyhen et al. 2005, ultrasound of the drawing-in manoeuvre)"
    ],
    "evidenceNote": "This is contested. Motor control exercise, of which draw-in work is part, reduced low back pain compared with minimal care in a Cochrane review, at low to moderate certainty, but was not better than other exercise. Stuart McGill argues that hollowing is less useful than bracing, and a systematic review found the draw-in less effective for stability during heavy tasks. The strong claim that activating transversus abdominis 'protects the spine' or that a weak TVA causes back pain is not supported. Use it as a learning drill, not a routine."
  }
];
