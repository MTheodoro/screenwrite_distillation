You are an annotator labeling screenplay scenes for a dataset.

## What to label

Each scene is given as numbered units. `A` = one sentence of action/description text (¶ marks the
first sentence of a paragraph). `D` = one dialogue block, shown as `NAME [extensions] (parenthetical): text`.

Produce one JSON object per scene:

{
  "scene_id": "<id>",
  "cast": {"<every character name variant used in the scene>": "<canonical name>", ...},
  "beats": [<unit numbers that START a beat, ascending; the first non-heading unit always starts one>],
  "lines": {
    "<n>": {"t": "A"|"D"|"S", "who": ["<canonical>", ...], "emo": {"<canonical>": ["<emotion>", <0-1>]}, "c": <0-1>},   // for A units
    "<n>": {"to": ["<canonical>"|"ALL"|"SELF"|"NONE", ...], "emo": ["<emotion>", <0-1>], "c": <0-1>}                     // for D units
  },
  "tension": [<one score 0-100 per beat, same order as "beats">]
}

Rules:
- cast: map EVERY name variant (cue names, CAPS introductions, aliases like STRANGER -> INGRID once named,
  DET. RUIZ / RUIZ) to one canonical name per real person. Unnamed extras get a short canonical (e.g. "GUARD").
- Every A and D unit must appear in "lines" (skip the heading and transitions).
- A units, field t: "A" = a character does something (acts, moves, speaks-without-cue, reacts);
  "D" = a character is described (appearance, introduction, state) ; "S" = no character: setting, objects, sound,
  atmosphere. who = the character(s) performing the action or being described, as canonical names; empty for "S".
  Use several names only when they genuinely act jointly ("They fight", "Both freeze"). Resolve every pronoun.
  If the actor is a crowd or someone not in the cast, use "OTHER".
- D units: to = who the line is addressed to. "ALL" = the group, "SELF" = muttered/thinking aloud,
  "NONE" = no listener (e.g. pure voice-over narration). A phone/radio listener counts as a character.
- emo: emotion actually conveyed by the line's text, subtext, parenthetical or behaviour - not guessed from the
  plot. One of: neutral, joy, sadness, anger, fear, surprise, disgust, affection, with intensity 0-1
  (neutral -> 0-0.2). For A units give emo only for characters whose emotion the sentence shows; otherwise {}.
- c = your confidence that who/to is right (0-1). Be honest: ambiguous pronouns deserve low confidence.
- beats: a beat is the smallest unit in which something dramatically changes - an action, a reaction, a shift
  in tactic, a reveal, an entrance. A beat may be dialogue only, action only, or mixed, and may split an action
  paragraph. Typical beats are 1-8 units long.
- tension: dramatic tension a reader feels in that beat - stakes, conflict, threat, urgency, suspense. Loud or
  violent is not automatically tense; a quiet threat can be very tense. Use absolute anchors so scores compare
  across scenes: 0-15 calm/mundane, 15-35 mild friction or unease, 35-60 clear conflict or suspense,
  60-80 high stakes, open confrontation or danger, 80-100 peak life-or-death / climactic moment.


Write each scene's JSON (valid JSON, no comments, no trailing commas) to the given path with the Write tool. Do not write anything else. Reply only with "done N".

## Scenes

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01728.json
### SCENE s01728 | EXT. SALT FLAT - DAWN
Detected names (may be incomplete or contain aliases): ANNELIESE VOGT, JORUND HALVORSEN, PILAR ESPINOSA, MOX, DEV KAPOOR, DISPATCH
1 A ¶ White to every horizon.
2 A A pickup truck, hood up, sits dead in the middle of nothing.
3 A Heat shimmer already.
4 A ¶ ANNELIESE VOGT (40s, geologist, sunburned neck, a sun hat tied under her chin) walks a slow circle around the truck, boots crunching crust.
5 A JORUND HALVORSEN (50s, driver, gray beard, canvas vest) sits on the tailgate, drinking the last of the water.
6 A PILAR ESPINOSA (30s, photographer, cameras on both hips) crouches in the shade of the tire.
7 A MOX (19, nickname, nobody uses his real one, shaved head, wide eyes) sits in the cab with the door open.
8 A DEV KAPOOR (30s, engineer, glasses, calm) lies under the truck on a flattened cardboard box.
9 D DEV [O.S.]: It's the fuel line. Cracked clean through.
10 D JORUND: Can you fix it?
11 D DEV [O.S.]: With what, Jorund? Gum?
12 D PILAR: Hey. Anneliese. Come sit.
13 D ANNELIESE: I'm looking for the road.
14 D PILAR: It's behind us. Forty miles behind us.
15 D ANNELIESE: Forty-one.
16 D MOX: Is it forty or forty-one?
17 D ANNELIESE: Forty-one, Mox. I counted on the odometer.
18 D MOX: Okay. That's good. That's a good number.
19 A ¶ Jorund tilts the empty bottle and sets it down.
20 A Pilar lifts a camera and takes a picture of the whole white nothing.
21 D PILAR: Nobody panic, right? We have the satellite phone.
22 D JORUND: We have a satellite phone.
23 D PILAR: That's what I said.
24 D JORUND: No. I said, we have a satellite phone. I'm telling you, we have a phone.
25 A ¶ A long silence.
26 A Dev slides out from under the truck and sits up, wiping his hands on his shirt.
27 D DEV: Is the phone working, Jorund?
28 D JORUND: It has a battery.
29 D DEV: Is the phone working?
30 D JORUND: Pilar, hand me the pack.
31 A ¶ Pilar passes the pack.
32 A He unzips it.
33 A He takes out the satellite phone, dials, holds it to his ear.
34 A The others lean in.
35 A A beat.
36 A His eyes settle on the horizon.
37 D JORUND [CONT'D]: It's ringing.
38 D MOX: Oh, thank God.
39 D PILAR: Put it on speaker.
40 D DEV (quiet): Wait for it.
41 A ¶ A click.
42 A A voice, warm, bored.
43 D DISPATCH [V.O.]: Salt Flat Rescue Coordination, this is Marianne.
44 D JORUND: We're stranded. Mile marker forty-one, west of the old road. Four of us. Five. Five of us.
45 D DISPATCH [V.O.]: Copy five. Is anyone injured?
46 D ANNELIESE (to Dev): Why is everybody smiling?
47 D DEV: Because they're coming.
48 D DISPATCH [V.O.]: Sir, your coordinates show you at the mile marker. I can have a team to you by ten. Please stay by the vehicle.
49 D MOX: Ten! That's, that's only a few hours!
50 D PILAR: Mox, sit.
51 D MOX: I'm sitting.
52 D JORUND: Thank you, Marianne. Ten is good.
53 D DISPATCH [V.O.]: Sir, one more thing. I'm showing the beacon on your vehicle was triggered at four a.m. last night.
54 D JORUND: We didn't trigger any beacon.
55 D DISPATCH [V.O.]: No, sir. That's what I wanted to ask. Because there are two vehicles at those coordinates.
56 A ¶ Jorund lowers the phone.
57 A Anneliese straightens.
58 A Dev looks up.
59 D DEV (slowly): Pilar, where did you put the second set of keys?
60 D PILAR: What second set?
61 A ¶ At the edge of the flat, a mile away, sunlight catches the windshield of a second truck, parked, with its engine running, waiting.
62 D ANNELIESE: Jorund. Who told you to drive out here?
63 A ¶ Jorund looks at the phone.
64 A He looks at the truck.
65 A He looks at Mox, who does not look back.
66 D JORUND: Mox, put your hands where I can see them.
67 D MOX: Jorund, it isn't what you think.
68 D JORUND: Nobody ever says what it is.
69 A ¶ Mox takes one step out of the cab.
70 A Pilar's camera drops into the salt.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01340.json
### SCENE s01340 | INT. GRAIN ELEVATOR, NIGHT SHIFT - NIGHT
Detected names (may be incomplete or contain aliases): ODELIA FINCH, BIG ROY MALLORY, DEZ, PARRISH
1 A ¶ A cathedral of concrete silos.
2 A Dust hangs in the lamplight like pollen.
3 A Belts clank.
4 A Somewhere deep in the dark, grain pours with a sound like breathing.
5 A ¶ ODELIA FINCH, 30s, hard hat, headlamp, clipboard, stands on a steel catwalk twenty feet up.
6 A Below her, BIG ROY MALLORY, 50s, bearded, sleeves rolled, rakes a heap of wheat from a hopper.
7 A And in the doorway of the control shed, DESMOND "DEZ" PARRISH, 20s, a new hire, grips a thermos like a rosary.
8 D ODELIA: Roy, bin four is reading empty.
9 D BIG ROY: Bin four's full. I filled it myself at six.
10 D ODELIA: The gauge says empty.
11 D BIG ROY: Gauge is lying.
12 D DEZ: Miss Finch, I heard something in four.
13 D ODELIA: What kind of something, Dez?
14 D DEZ: A knocking.
15 D BIG ROY: It's the wheat settling, kid.
16 D DEZ: It was knocking back.
17 A ¶ Silence.
18 A The grain pours in the dark.
19 A Odelia's headlamp swings across the silo hatch.
20 A Big Roy leans on the rake and does not smile.
21 D BIG ROY: Odelia. Don't open the hatch.
22 D ODELIA: Roy, why not?
23 D BIG ROY: Because I didn't fill it at six.
24 A ¶ He sets the rake against the hopper.
25 A His hands are shaking.
26 A Odelia climbs down the ladder, rung by rung, and crosses to the hatch.
27 D DEZ: Miss Finch. Please.
28 D ODELIA: Dez, go home.
29 D DEZ: The truck's at the other end of the lot.
30 D ODELIA: Then run.
31 A ¶ He doesn't.
32 A Odelia grips the wheel on the hatch.
33 A From inside the silo comes three slow knocks.
34 A She drops her hand.
35 A Big Roy lets out a breath that is half a sob.
36 D BIG ROY: It's been knocking since June.
37 D ODELIA: Why didn't you say?
38 D BIG ROY: Because nobody asked it what it wanted.
39 A ¶ The hatch wheel turns on its own.
40 A Slowly.
41 A One quarter turn.
42 A The headlamp flickers and goes out.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00434.json
### SCENE s00434 | INT. ABANDONED CONSERVATORY - GLASSHOUSE - DAY
Detected names (may be incomplete or contain aliases): INSPECTOR CLEMENTINE PRYCE, SIR ALDOUS WREN
1 A ¶ Dead palms.
2 A Cracked panes.
3 A A wrought-iron table in the center, set for tea.
4 A INSPECTOR CLEMENTINE PRYCE (50s, tailored suit, kid gloves) pours from a silver pot.
5 A Across from her sits SIR ALDOUS WREN (70s, cravat, a cane with a silver head), perfectly composed.
6 D CLEMENTINE: Sugar, Sir Aldous?
7 D ALDOUS: Two, Inspector. As always.
8 A ¶ She drops two cubes into his cup.
9 A He stirs, lifts it, and smiles.
10 D ALDOUS [CONT'D]: You've grown quiet, my dear Clementine.
11 D CLEMENTINE: I'm listening to the glass. It still sings in the wind.
12 D ALDOUS: It sang the night my brother died.
13 A ¶ She sets down the pot very gently.
14 A Her gloved hand rests on the table.
15 D CLEMENTINE: You were here that night, Aldous.
16 D ALDOUS: I was in London.
17 D CLEMENTINE (kindly): Your cuff, Sir Aldous. There's a leaf on it.
18 A ¶ He glances down.
19 A A single pale frond, the kind that grows only in this room, clings to the cloth.
20 A His smile does not move, but his fingers tighten on the cup.
21 D ALDOUS: Clementine, my dear. You were always the clever one.
22 D CLEMENTINE: And you, Aldous, were always the early riser.
23 A ¶ She raises a hand.
24 A Beyond the glass, two constables step from the hedges, and he sets the cup down without a sound.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00941.json
### SCENE s00941 | INT. CORONER'S OFFICE, AFTER HOURS - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE MIRIAM ACHTERBERG-OLUWOLE
1 A ¶ Green linoleum.
2 A A desk lamp.
3 A A wall of filing cabinets, drawers half open.
4 A ¶ DETECTIVE MIRIAM ACHTERBERG-OLUWOLE (50s) sits behind the desk in her coat.
5 A She has not taken it off.
6 A She holds a single photograph by its edges.
7 A ¶ She sets it down.
8 A Picks it up.
9 A Sets it down.
10 A ¶ She presses play on a micro-cassette recorder.
11 A Hiss.
12 A Then her own voice, younger, steadier.
13 D MIRIAM [V.O.] (recorded): Day one. The body's identified. Walter Pryor, forty-four. Case closed.
14 A ¶ She stops the tape.
15 A Rewinds.
16 A Plays it again.
17 D MIRIAM [V.O., CONT'D] (recorded): Walter Pryor, forty-four. Case closed.
18 A ¶ She turns the photograph over.
19 A A name, in pencil, on the back.
20 A She reads it twice.
21 D MIRIAM: It's the wrong body.
22 A ¶ She stares at the lamp.
23 A Her jaw works.
24 D MIRIAM [CONT'D] (to the recorder): You signed the form. You, Miriam.
25 A ¶ She hits the red button.
26 A Records.
27 D MIRIAM [CONT'D] (into the recorder): Day nine hundred and four. Reopen it.
28 A ¶ She flicks off the lamp.
29 A The room goes dark, and only the red record light glows on her face.
30 D MIRIAM [CONT'D]: So who's in the ground?

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00890.json
### SCENE s00890 | INT. HOSPITAL SUBBASEMENT - LAUNDRY ROOM - NIGHT
Detected names (may be incomplete or contain aliases): EZEKIEL FAIRWEATHER, PADDY GALLAGHER
1 A ¶ A low, steam-choked cavern.
2 A Industrial washers thump like slow drums.
3 A Sheet-laden carts line the walls in ghostly rows.
4 A Pipes sweat overhead, and the tiled floor is slick with soap and condensation.
5 A A single fluorescent tube buzzes.
6 A ¶ DR. EZEKIEL FAIRWEATHER, 50s, a cardiothoracic surgeon, sits on an overturned laundry bin in rumpled blue scrubs, his tie shoved in his pocket.
7 A Grey stubble.
8 A Hands folded between his knees as if praying.
9 A He has not slept in thirty hours.
10 A He stares at the drain in the floor.
11 A ¶ The doors at the far end swing open and a gurney wheel squeals.
12 A PADDY GALLAGHER, 50s, the night porter, pushes a cart of towels down the aisle.
13 A Barrel-chested, flushed, a green cap pulled over a bald crown.
14 A He stops short at the sight of the doctor.
15 D PADDY: Jesus, Mary and Joseph. Doctor?
16 D EZEKIEL: Don't mind me.
17 D PADDY: You scared the life out of me.
18 D EZEKIEL: Sorry.
19 D PADDY: It's the wrong end of the building for you, sir. The surgeons have their own lounge.
20 D EZEKIEL: I know.
21 D PADDY: Then why--
22 D EZEKIEL: It's loud here.
23 A ¶ Paddy considers this.
24 A He parks the cart.
25 A Pulls a crumpled pack of cigarettes from his pocket, glances up at the smoke detector, and puts them back.
26 D PADDY: Bad one?
27 D EZEKIEL: Seven hours. We lost him on the table.
28 D PADDY: I'm sorry.
29 D EZEKIEL: He was thirty-one.
30 D PADDY: Ah, God.
31 D EZEKIEL: He had a daughter. She was in the waiting room, drawing a horse.
32 D PADDY: Did you tell her?
33 D EZEKIEL: His wife did. I just stood there.
34 A ¶ A washer ends its cycle with a shuddering groan.
35 A Steam breathes out of the vents.
36 A Paddy drags a second bin across the tile and lowers himself onto it with a grunt, so the two men sit knee to knee in the damp.
37 D PADDY: My brother went the same way. Heart.
38 D EZEKIEL: When?
39 D PADDY: Twenty years. The doctors were very kind.
40 D EZEKIEL: That doesn't help, does it?
41 D PADDY: Not on the day.
42 D EZEKIEL (speaking at once; speaking at once): PADDY What does, then? Time, I suppose.
43 A ¶ They both stop.
44 A The ghost of a smile crosses Paddy's face.
45 A Ezekiel laughs, one dry exhale through his nose, and rubs his eyes with the heels of his hands.
46 D PADDY [CONT'D]: You want a towel? They're warm.
47 D EZEKIEL: I'm not crying.
48 D PADDY: Never said you were. They're just warm.
49 A ¶ He passes a folded towel from the cart.
50 A Ezekiel takes it, presses it to his face, and holds it there much longer than a person needs to wipe off sweat.
51 A Paddy gazes politely at a washer.
52 A Time passes in the slow rhythm of the drums.
53 D EZEKIEL (muffled): Thank you.
54 D PADDY: Aye.
55 D EZEKIEL: Does it ever stop? The... carrying it?
56 D PADDY: I wouldn't know, Doctor. I only carry the linen.
57 D EZEKIEL (lowering the towel): Then you're luckier than I am.
58 D PADDY: Maybe. Or I just do the washing so you can do the rest.
59 A ¶ Ezekiel looks at him properly for the first time.
60 A Paddy meets the look without flinching, wide-faced and unhurried.
61 D EZEKIEL: What's your name?
62 D PADDY: Paddy. Paddy Gallagher.
63 D EZEKIEL: Ezekiel.
64 D PADDY: I know. It's on the plaque in the lobby. The one with the donors.
65 D EZEKIEL: I never donated.
66 D PADDY: Your name's on it anyway.
67 A ¶ The ghost of a smile returns.
68 A Ezekiel stands.
69 A He folds the towel into a perfect square and sets it back on the cart, then stands for a moment with his hand on the metal rail.
70 D EZEKIEL: I should go up.
71 D PADDY: They'll keep.
72 D EZEKIEL: Not all of them.
73 D PADDY: No. Not all.
74 A ¶ Ezekiel nods.
75 A He straightens his scrubs, pulls his tie from his pocket, and puts it back again.
76 A At the door he pauses.
77 D EZEKIEL: Paddy.
78 D PADDY: Doctor.
79 D EZEKIEL: Thank you for the towel.
80 D PADDY: Anytime. It's what I'm for.
81 A ¶ The door sighs shut behind the surgeon.
82 A Paddy sits alone in the thrum of the machines.
83 A After a moment he takes out the cigarettes, looks at the smoke detector again, and slowly, decidedly, puts them back.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01147.json
### SCENE s01147 | INT. ORBITAL HOSTEL - GALLEY - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): WOMAN, CASS, HOWARD, DEVI
1 A ¶ A narrow galley under dim amber light.
2 A A foldable table.
3 A Pouches of food clipped to a rail.
4 A Through a porthole, the slow curve of a blue planet.
5 A ¶ A WOMAN (30s, grey coverall, wrist tattoo) sits alone at the table, peeling the foil off a ration tray.
6 A She eats a small bite, looks at the porthole, eats another.
7 A ¶ CASS (30s, medic jacket, bleary) floats in and anchors himself to a rail with his foot.
8 D CASS: You're up.
9 D WOMAN: You're up.
10 D CASS: I couldn't sleep.
11 D WOMAN: Me neither.
12 A ¶ He fills a squeeze bulb at the dispenser, drinks, wipes his mouth.
13 A Looks at her tray.
14 D CASS: Is that the chicken?
15 D WOMAN: Allegedly.
16 A ¶ HOWARD (60s, station steward, clipboard, a bad hip) enters, slow.
17 A He sees the Woman, stops.
18 D HOWARD: Dr. Devi. I didn't know you'd come down.
19 D DEVI: Neither did I, Howard.
20 A ¶ He nods, studies her, glances at Cass.
21 A Cass takes another sip.
22 A Howard consults his clipboard.
23 D HOWARD: The log says you're in quarantine.
24 D DEVI: The log is early.
25 D HOWARD: I'll note it.
26 D DEVI: Note whatever you like.
27 A ¶ Howard hesitates, then marks a line and shuffles out.
28 A Cass and Devi sit in the quiet.
29 A The planet turns outside.
30 D CASS: You told them you were fine?
31 D DEVI: I told them I was awake.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01376.json
### SCENE s01376 | INT. HOSPITAL - HYPERBARIC CHAMBER ANTEROOM - DAY
Detected names (may be incomplete or contain aliases): SUNITA RAGHAVAN, NURSE FELIX OYELARAN, IMOGEN VASCO
1 A ¶ A small tiled room with a round porthole window into a steel pressure chamber.
2 A Gauges tick.
3 A A wall clock reads 2:15.
4 A ¶ DR. SUNITA RAGHAVAN, 50s, scrubs and reading glasses, stands at the console reviewing a chart.
5 A She is relaxed.
6 A She is eating almonds.
7 A ¶ NURSE FELIX OYELARAN, 30s, checks a valve with a gloved hand.
8 A Whistles faintly.
9 D SUNITA: Pressure steady?
10 D FELIX: Two point four. Just like the textbook.
11 D SUNITA: Patient comfortable?
12 D FELIX: Mr. Arkwright's asleep. He said the hum reminded him of his mother's refrigerator.
13 D SUNITA: That's the nicest thing anyone's said about this machine.
14 A ¶ They share a small laugh.
15 A The chamber hums.
16 A ¶ DR. IMOGEN VASCO, 40s, hospital administrator's badge, steps in with a tablet and a face without expression.
17 D IMOGEN: Dr. Raghavan. Nurse Oyelaran.
18 D SUNITA: Imogen. Almond?
19 D IMOGEN: No, thank you.
20 D FELIX: Everything all right?
21 D IMOGEN: I need a word about Mr. Arkwright.
22 D SUNITA: Of course. What about him?
23 D IMOGEN: His daughter called legal an hour ago.
24 D SUNITA: His daughter. Gwen. She's lovely. She sat with him all morning.
25 D IMOGEN: She says he was never told the full risk of the procedure.
26 D SUNITA: I went through the consent form with her line by line.
27 D IMOGEN: She says you did it while he was sedated.
28 D FELIX: That's not what happened.
29 D IMOGEN: I'm not saying it is.
30 D SUNITA: Then what are you saying?
31 D IMOGEN: I'm saying there's a record that says otherwise.
32 D SUNITA: What record?
33 D IMOGEN: The sedation log. It has a time on it. 1:40.
34 D FELIX: That's wrong.
35 D IMOGEN: It's what the system shows.
36 D SUNITA: Felix, you charted the sedation.
37 D FELIX: I did. At 2:00. After consent.
38 D IMOGEN: The system says 1:40.
39 D FELIX: Then someone changed it.
40 D IMOGEN: Who could have?
41 D FELIX (slowly): Dr. Raghavan.
42 D SUNITA: What?
43 D FELIX: You asked me for the keyboard at 1:50. To fix a typo.
44 D SUNITA: I fixed a typo.
45 D FELIX: You were on the sedation log.
46 D SUNITA: Because I was checking the dose.
47 D IMOGEN: Dr. Raghavan.
48 D SUNITA: This is ridiculous.
49 D IMOGEN: I have to ask you to step out of the chamber rotation while we review.
50 D SUNITA: You can't be serious.
51 D IMOGEN: It's procedure.
52 D SUNITA: I have forty years of procedure. I know exactly what it is.
53 D FELIX: I'm sorry. I didn't want to say it.
54 D SUNITA: Say what, Felix?
55 D FELIX: That I saw your hand move.
56 A ¶ Sunita sets down the almonds.
57 A Takes off her glasses.
58 A Her voice is very quiet.
59 D SUNITA: Pressure is two point four. In eleven minutes we need to bring him up. Who is going to do that, Imogen?
60 D IMOGEN: Nurse Oyelaran is certified.
61 D SUNITA: Then I suppose it will be Nurse Oyelaran.
62 D FELIX: Dr. Raghavan, I--
63 D SUNITA: Go on, Felix. The gauge won't watch itself.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00643.json
### SCENE s00643 | INT. ABANDONED ANTARCTIC WEATHER STATION - DAY
Detected names (may be incomplete or contain aliases): HESTER VANTONGEREN
1 A ¶ A single room the size of a train carriage.
2 A Frost on the inside of the windows.
3 A A pegboard of rusted instruments, a cot with a sleeping bag, a radio set under a tarp.
4 A The wind outside is a long low voice, never stopping.
5 A ¶ HESTER VANTONGEREN, fifties, hair cropped short and gone white, face seamed by weather and something older.
6 A A green parka, hood down, fingerless gloves.
7 A She has been here four days.
8 A ¶ She sits at the radio with a pencil.
9 A She has a notebook.
10 A She writes a column of numbers, stops, crosses it out, writes another.
11 A ¶ On the shelf beside the set: a battered cassette recorder, one red light glowing.
12 A ¶ She presses PLAY.
13 D HESTER [V.O.] (tape, crackling): Day one. Landed on schedule. Station intact. Heater functional. Supplies for three weeks, if I'm careful.
14 A ¶ Hester pauses it.
15 A She looks at the cot.
16 A At the neat blankets, the folded socks beneath them.
17 A ¶ She presses PLAY again.
18 D HESTER [V.O.] (tape): Day two. Wind picking up. Radio silent but the batteries are fresh. I will try again at noon.
19 A ¶ She switches it off.
20 A She gets up.
21 A At the window she scrapes frost with a thumbnail until a little clear patch opens, white on white, a sky and a ground with no seam between them.
22 A ¶ She opens the stove.
23 A One log left.
24 A She holds it for a moment, weighing it, then puts it back and closes the door.
25 A ¶ She returns to the radio.
26 A Turns a dial.
27 A Static.
28 A She keys the mic.
29 D HESTER (quietly): Station Ember, Station Ember. Anyone.
30 A ¶ Static.
31 A ¶ She releases the key.
32 A She does not repeat.
33 A She sits for a long minute with her hands flat on the table.
34 A Then she picks up the pencil and writes, very slowly, in the notebook: DAY FIVE.
35 A ¶ She stops.
36 A She presses the recorder's RECORD button.
37 A The red light shifts.
38 D HESTER [CONT'D] (into the recorder): Day five. Wind steady. I'm fine.
39 A ¶ She lets the tape run for several seconds of silence.
40 A The wind fills it.
41 A Then she turns the recorder off, picks up the last log, and carries it to the stove.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01267.json
### SCENE s01267 | INT. SYNERGY SOLUTIONS - CONFERENCE ROOM 12 - DAY
Detected names (may be incomplete or contain aliases): DARIUS FEATHERSTONEHAUGH, PENELOPE ACHTERBERG-SOLOMON
1 D DARIUS FEATHERSTONEHAUGH: Thanks for squeezing me in, Penelope.
2 D PENELOPE ACHTERBERG-SOLOMON: Always. You have fifteen minutes.
3 D DARIUS FEATHERSTONEHAUGH: I only need ten. I want to talk about a rebrand.
4 D PENELOPE ACHTERBERG-SOLOMON: Of what?
5 D DARIUS FEATHERSTONEHAUGH: Of the team.
6 D PENELOPE ACHTERBERG-SOLOMON: We're a team of two.
7 D DARIUS FEATHERSTONEHAUGH: That's the problem. We feel like a duo. I want us to feel like a movement.
8 D PENELOPE ACHTERBERG-SOLOMON: A movement of two.
9 D DARIUS FEATHERSTONEHAUGH: A movement that has not yet scaled.
10 D PENELOPE ACHTERBERG-SOLOMON: Go on.
11 D DARIUS FEATHERSTONEHAUGH: I propose we call ourselves the Alignment Pod.
12 D PENELOPE ACHTERBERG-SOLOMON: The Alignment Pod.
13 D DARIUS FEATHERSTONEHAUGH: With a mission statement. Draft: "To align what is misaligned, and to pod what is unpodded."
14 D PENELOPE ACHTERBERG-SOLOMON: What does "pod" mean as a verb?
15 D DARIUS FEATHERSTONEHAUGH: It means to gather in the spirit of synergy.
16 D PENELOPE ACHTERBERG-SOLOMON: Darius, how long have you worked here?
17 D DARIUS FEATHERSTONEHAUGH: Eleven years in March.
18 D PENELOPE ACHTERBERG-SOLOMON: And in eleven years, you have never once had a new idea.
19 D DARIUS FEATHERSTONEHAUGH: That is unkind.
20 D PENELOPE ACHTERBERG-SOLOMON: It's also the reason I'm going to approve this.
21 D DARIUS FEATHERSTONEHAUGH: You are?
22 D PENELOPE ACHTERBERG-SOLOMON: On one condition. You are the only member of the Alignment Pod.
23 D DARIUS FEATHERSTONEHAUGH: And you?
24 D PENELOPE ACHTERBERG-SOLOMON: I am the Pod's supervisor, from a distance.
25 D DARIUS FEATHERSTONEHAUGH: I'll take it.
26 D PENELOPE ACHTERBERG-SOLOMON: Good. Your ten minutes are up.
27 D DARIUS FEATHERSTONEHAUGH: Penelope, one last thing.
28 D PENELOPE ACHTERBERG-SOLOMON: Yes?
29 D DARIUS FEATHERSTONEHAUGH: The Pod will require a budget.
30 D PENELOPE ACHTERBERG-SOLOMON: Of course it will.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02439.json
### SCENE s02439 | EXT. SALT FLATS - DUSK
Detected names (may be incomplete or contain aliases): AMOS QUARLES
1 A ¶ Blinding white ground.
2 A A lone wagon with a broken wheel.
3 A Heat shimmer.
4 A ¶ AMOS QUARLES (50s, sunburned, hat brim torn) sits on the tailgate with a pencil stub and a crumpled sheet of paper.
5 A He writes.
6 A Stops.
7 A Rereads.
8 D AMOS [V.O.]: Dear Ruth. The wheel went at noon. The water went at two.
9 A ¶ He licks the pencil.
10 D AMOS [V.O., CONT'D]: I walked to the ridge. Nothing there but wind.
11 A ¶ He stands.
12 A Shades his eyes.
13 A Nothing in any direction.
14 A ¶ Amos kicks the dead wheel.
15 A It rolls an inch, falls over.
16 D AMOS [V.O., CONT'D]: I think I'll wait for the stars. They never lied to me yet.
17 A ¶ He sits back down.
18 A Folds the letter into his hat.
19 A ¶ Far off, a faint metallic ring.
20 A A bell.
21 A ¶ Amos looks up.
22 D AMOS (whispering): Well, now.
23 A ¶ He stands.
24 A Picks up his canteen.
25 A Shakes it.
26 A Empty.
27 A He walks toward the sound anyway.
