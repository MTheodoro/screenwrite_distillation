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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01232.json
### SCENE s01232 | INT. FERRY TERMINAL WAITING ROOM - IMPROVISED COURTROOM - DAY
Detected names (may be incomplete or contain aliases): JUDGE ZUZANNA PRZYBYLSKA, ATTORNEY CASSIUS WREN, CANCELLED
1 A ¶ Plastic chairs.
2 A Vending machines unplugged.
3 A A folding table with a flag taped to its front.
4 A Ferry schedules still on the wall.
5 A ¶ JUDGE ZUZANNA PRZYBYLSKA (60s, robe over a parka) taps a gavel made from a ship's wrench.
6 A Rain on the glass.
7 A ¶ ATTORNEY CASSIUS WREN (30s, wet suit jacket, bag of files) stands alone at the counter where tickets were once sold.
8 D JUDGE PRZYBYLSKA: All rise.
9 A ¶ Nobody else is present.
10 A Wren stays standing.
11 A The judge sits, unbothered.
12 D JUDGE PRZYBYLSKA [CONT'D] (to the empty chairs): Be seated. Ferry's cancelled. Court is in session.
13 A ¶ Wren sets down the files.
14 A They slide.
15 A He catches them with a forearm, a small rescue.
16 D WREN: Your Honour. My client's absent.
17 D JUDGE PRZYBYLSKA: Where?
18 D WREN: The ferry.
19 D JUDGE PRZYBYLSKA: Of course.
20 A ¶ She writes.
21 A Wren shuffles a sheet.
22 A Behind him the departures board flickers: CANCELLED, CANCELLED, CANCELLED.
23 D WREN (muttering): Two hours of driving for this.
24 D JUDGE PRZYBYLSKA: Counsel?
25 D WREN: Nothing, Your Honour.
26 D JUDGE PRZYBYLSKA: Proceed.
27 A ¶ He clears his throat and addresses the empty rows as if a jury sat there.
28 D WREN: Ladies and gentlemen, the question today is simple.
29 D JUDGE PRZYBYLSKA: There's no jury, Mr. Wren.
30 D WREN: Habit.
31 D JUDGE PRZYBYLSKA: Break it.
32 A ¶ Wren nods.
33 A He takes a long breath.
34 A His shoulders drop.
35 A The fight leaves him like air from a tyre.
36 A The judge sets down her pen, takes off her glasses, and rubs the bridge of her nose.
37 D JUDGE PRZYBYLSKA [CONT'D]: Motion granted. Default stays. Go home, son.
38 D WREN: That's it?
39 D JUDGE PRZYBYLSKA: That's it.
40 A ¶ He gathers the files, drops one, picks it up, drops another.
41 A She waits until he is at the door.
42 D JUDGE PRZYBYLSKA [CONT'D] (to herself, soft): Good lawyer. Terrible week.
43 A ¶ He pauses in the doorway.
44 A Doesn't turn.
45 D WREN: I heard that.
46 D JUDGE PRZYBYLSKA: You were meant to.
47 A ¶ He goes out into the rain.
48 A She turns the wrench-gavel over in her hands, then sets it carefully back on its cradle and stares at the board: CANCELLED.
49 T FADE OUT.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01233.json
### SCENE s01233 | INT. COURTHOUSE - EMPTY COURTROOM 4B - NIGHT
Detected names (may be incomplete or contain aliases): NADIRA SULTANOVA, ELIAS THORNQUIST
1 A ¶ A mid-size municipal court, the kind with fake wood panelling and a drop ceiling.
2 A Fluorescent tubes buzz.
3 A Half the lights are off, leaving the jury box in gloom and the bench in a pool of white.
4 A ¶ Chairs are stacked in the gallery.
5 A A cleaning cart stands abandoned by the door, its mop bucket still steaming.
6 A ¶ NADIRA SULTANOVA (40s, sharp tailoring gone limp after a fourteen-hour day, hair clipped up with a pen) stands in the well of the court with a legal pad.
7 A She faces the empty jury box.
8 A ¶ She is alone with the room.
9 A Or she thinks she is.
10 D NADIRA (to the jury box): Ladies and gentlemen, the state will tell you that my client is a liar.
11 A ¶ She waits.
12 A Silence.
13 A The jury box regards her.
14 D NADIRA [CONT'D] (to the jury box): They will tell you he lied about the ledger, about the date, about the signature.
15 A ¶ She turns a page.
16 D NADIRA [CONT'D] (muttering): Too long. Cut the signature.
17 A ¶ She crosses out a line with her pen.
18 A Behind her, a soft cough.
19 A ¶ She spins.
20 A In the back row, half-hidden by the stacked chairs, sits ELIAS THORNQUIST (70s, retired bailiff, grey cleaners' overalls, thick glasses held together with tape).
21 A A paperback lies on his knee.
22 A He is not reading it.
23 D NADIRA [CONT'D] (to Elias): How long have you been there?
24 D ELIAS: Since the second part.
25 D NADIRA: Which part is that?
26 D ELIAS: The part where you said "ledger" like it was a bad word.
27 A ¶ Nadira studies him.
28 A The tube above her flickers and settles.
29 D NADIRA: I'm rehearsing. The trial starts at nine.
30 D ELIAS: I know. I'll be sitting at the back.
31 D NADIRA: You're a bailiff?
32 D ELIAS: Was. Thirty-one years. Now I clean the brass.
33 D NADIRA (to the room, dry): Wonderful. A critic.
34 A ¶ Elias grins, a quick crooked flash.
35 D ELIAS: You want a critique?
36 D NADIRA: I want a jury.
37 D ELIAS: Not got one. Got me.
38 A ¶ She exhales through her nose.
39 A Takes a step toward him, the legal pad hanging at her side.
40 D NADIRA: Fine. Tell me.
41 D ELIAS: You open with the word "liar." Don't.
42 D NADIRA: It's the state's word.
43 D ELIAS: It's still your first word. They'll remember it.
44 A ¶ She stops.
45 A Absorbs this.
46 A Looks back at the jury box as if seeing it for the first time.
47 D NADIRA (muttering): He's right.
48 D ELIAS: I'm always right. It's the curse of the cleaning staff.
49 D NADIRA (to Elias): What would you open with?
50 D ELIAS: I'd open with the weather.
51 D NADIRA: The weather.
52 D ELIAS: Thirty-one years, I never saw a juror hear a word in the first minute. They're looking for their umbrellas. Give them something to hold. Say it rained that night.
53 D NADIRA: It did rain.
54 D ELIAS: Then say that.
55 A ¶ She turns to the empty jury box.
56 A Draws a breath.
57 A Straightens her spine.
58 D NADIRA (to the jury box): It rained on the night of the fourteenth.
59 A ¶ Elias nods once.
60 A Behind him the mop bucket gives a final hiss.
61 D NADIRA [CONT'D] (to the jury box): It rained, and a man went to a bank, and he signed his name.
62 D ELIAS: Better.
63 D NADIRA (to Elias): Shut up. I'm working.
64 A ¶ He mimes zipping his lips.
65 A She almost smiles.
66 A She goes on, quieter, rolling each phrase slowly, and he follows her with his eyes, lips moving a half-second behind her words like an old pew regular who has heard the liturgy a thousand times.
67 A ¶ She finishes.
68 A Silence.
69 A The tubes buzz.
70 D ELIAS (softly): Ladies and gentlemen.
71 D NADIRA (to the jury box): Ladies and gentlemen.
72 A ¶ She bows her head.
73 A The empty box does not applaud.
74 A Elias stands, tucks his paperback under his arm, picks up the mop, and begins on the floor by the door.
75 D NADIRA [CONT'D] (muttering): Weather.
76 T FADE OUT.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01234.json
### SCENE s01234 | INT. ROOFTOP BOXING RING - BETWEEN ROUNDS - NIGHT
Detected names (may be incomplete or contain aliases): DELROY, STANTON, ISAURA CAMPOS, RN HALVORSEN, BJÖRN
1 A ¶ A ring bolted to a car-park roof.
2 A City glare behind the ropes.
3 A Wind flaps a banner.
4 A ¶ DELROY "BLACKJACK" STANTON (30s, boxer) slumps on the stool, chest heaving, one eye swollen.
5 A ISAURA CAMPOS (50s, trainer, towel over her shoulder) crouches in front of him.
6 A BJÖRN HALVORSEN (60s, cutman, glove-stained thumbs) works on the eye.
7 D ISAURA: Look at me.
8 D BJÖRN: Hold still.
9 D DELROY: I'm fine.
10 D ISAURA: You're not fine. You're dropping the left.
11 D BJÖRN: Don't talk. I've got a hole here.
12 D DELROY: She keeps coming in under.
13 D ISAURA: Then step back and counter. Step back.
14 D BJÖRN: Chin up.
15 A ¶ She slaps the water bottle into his hand.
16 A He rinses, spits into the bucket.
17 A Björn swabs.
18 A A bell rings.
19 A Delroy rises.
20 A Isaura pushes him into the ring.
21 D ISAURA: Left hand, Jack!
22 D BJÖRN: Go, go, go!
23 T FADE OUT.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01235.json
### SCENE s01235 | INT. COIN LAUNDRY - NIGHT
Detected names (may be incomplete or contain aliases): FRANKIE DOLAN, MEI-LING WONG, OBI NWANKWO, SABINE ARCAND, RUFUS BELL, TAMSIN PRICE, ^RUFUS
1 A ¶ Dryers tumble.
2 A Plastic chairs.
3 A A vending machine hums.
4 A ¶ Six regulars huddle around a folding table.
5 A They're holding a wake for the shop's owner.
6 A He's laid out in a framed photo between the detergent boxes.
7 A ¶ FRANKIE DOLAN lifts a paper cup.
8 A MEI-LING WONG nods.
9 A OBI NWANKWO wipes his eyes.
10 A SABINE ARCAND folds a towel without looking.
11 A RUFUS BELL stares at the floor.
12 A The youngest, TAMSIN PRICE, taps her phone.
13 D FRANKIE: To Gus.
14 D MEI-LING: To Gus.
15 D OBI: Sixty years of quarters.
16 D RUFUS: He never gave me change once.
17 D SABINE: He gave me change twice.
18 D TAMSIN: He gave me a free sock.
19 A ¶ They all look at her.
20 D OBI: A sock?
21 D TAMSIN: One. He said the other would turn up.
22 D FRANKIE: It always does.
23 D MEI-LING: Never.
24 A ¶ They laugh, quietly, then stop.
25 A The dryers keep turning.
26 D FRANKIE: I'll miss him.
27 D ^RUFUS: I'll miss him.
28 A ¶ They glance at one another, startled by the echo.
29 A She puts her phone away.
30 A He swallows.
31 A The vending machine thuds out a bag of chips.
32 T FADE OUT.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01236.json
### SCENE s01236 | INT. AUCTION HOUSE - FREIGHT ELEVATOR - NIGHT
Detected names (may be incomplete or contain aliases): HOLLIS CARMICHAEL-REEVE, TRINH VO, ALOUETTE PICARD, GUARD, ^ALOUETTE
1 A ¶ A caged industrial lift with a scarred wooden floor.
2 A A control panel with a brass key switch.
3 A The elevator descends slowly, cables creaking, between concrete shaft walls.
4 A ¶ Three figures in grey janitorial coveralls stand in the car.
5 A A rolling mop bucket sits in the corner.
6 A ¶ HOLLIS CARMICHAEL-REEVE (50s, crew boss, bifocals on a cord) reads a clipboard like a recipe.
7 A ¶ TRINH VO (30s, wiry, hair under a cap) crouches by the bucket and checks the wringer for something that isn't water.
8 A ¶ ALOUETTE PICARD (40s, grim, gloves tight) presses her palm against the elevator wall and counts the seconds under her breath.
9 D HOLLIS: Sub-basement in forty.
10 D TRINH: Thirty-eight.
11 D HOLLIS: Thirty-eight.
12 D ALOUETTE: Camera's looping. Twenty minutes, maybe twenty-two.
13 D TRINH: Maybe?
14 D ALOUETTE: Twenty.
15 D HOLLIS: Say twenty.
16 A ¶ Silence.
17 A The cables squeal.
18 A The lift lurches and settles.
19 A Somewhere above, a muffled bell rings the hour.
20 D HOLLIS [CONT'D]: When the doors open, we are cleaners. We move slow. We do not look at the vault.
21 D TRINH: We look at the floor.
22 D HOLLIS: We look at the floor.
23 D ALOUETTE: What if there's a guard?
24 D HOLLIS: There's a guard.
25 D ALOUETTE: What if he's awake?
26 D HOLLIS: He's awake. He's always awake. Four weeks, he's seen us.
27 D TRINH: He likes us.
28 D ALOUETTE: He likes your biscuits.
29 D TRINH (blushing): They're my mother's.
30 A ¶ The elevator slows, and the cables go quiet.
31 A A soft ding.
32 A ¶ The doors slide open on a concrete corridor lit in sickly green.
33 A At the far end, a lone guard's desk with a lamp, a thermos, and a newspaper.
34 A The chair is empty.
35 A ¶ Nobody moves.
36 D TRINH [CONT'D] (whispering): That's not right.
37 D HOLLIS: Move.
38 A ¶ They shuffle out, bucket first.
39 A The wheels squeak on the concrete.
40 A Halfway down the corridor, the lamp on the desk clicks off.
41 A The corridor goes darker.
42 D ALOUETTE: Hollis.
43 D HOLLIS: Keep moving.
44 D TRINH: Twenty minutes, he said. He doesn't go to the bathroom.
45 A ¶ They stop.
46 A In the dark, a steel door at the corridor's end is open a hand's width.
47 A A strip of cold light falls on the floor.
48 A ¶ Hollis lifts the clipboard.
49 A Reads it again.
50 A Lowers it.
51 D HOLLIS: Right. New plan.
52 D TRINH: We have a plan?
53 D HOLLIS: We have a mop.
54 A ¶ He lifts the mop out of the bucket.
55 A Taps the vault door open with its handle.
56 A It swings wide.
57 A Inside, rows of locked cases line the walls under blue light.
58 A And in the middle, sitting cross-legged on a crate with a flask in one hand and his cap tilted back, is the GUARD (60s, leathery, content), eating one of Trinh's mother's biscuits.
59 D GUARD: Evening, team.
60 A ¶ Nobody breathes.
61 D GUARD [CONT'D]: You're early. I wasn't expecting you till two.
62 D TRINH (squeaking): We had a cancellation.
63 D GUARD: Hm.
64 A ¶ He chews.
65 A Swallows.
66 A Gestures with the biscuit toward the cases.
67 D GUARD [CONT'D]: Mind the lemon polish. The Tiffany lamp's sensitive.
68 D HOLLIS: Of course.
69 D ^ALOUETTE: Of course.
70 D TRINH: Not a problem.
71 A ¶ They file in.
72 A The guard watches them go by, one eyebrow raised.
73 A As Alouette passes, he catches her sleeve.
74 D GUARD [CONT'D] (low): Whatever you've planned, do it tonight. I retire at dawn.
75 D ALOUETTE (low): Understood.
76 A ¶ She pulls her sleeve free.
77 A Trinh begins to laugh, a high sound, and Hollis clamps a hand over his mouth.
78 A The guard offers the biscuit tin.
79 D GUARD [CONT'D]: Anyone?
80 A ¶ The lights in the corridor behind them go out.
81 A Then, one by one, the lights in the vault.
82 D HOLLIS (to the room): Nobody panic.
83 D GUARD: Oh, that's just me.
84 D TRINH (muffled, under the hand): Mm?
85 D GUARD (in the dark): The sale starts at nine. Lot forty-one's a Tiffany lamp.
86 A ¶ A match flares.
87 A The guard lights a candle on the crate.
88 A His grin glows orange.
89 D GUARD [CONT'D]: Shall we?
90 T FADE OUT.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01237.json
### SCENE s01237 | EXT. DRIVE-IN THEATRE - SNACK BAR PATIO - DUSK
Detected names (may be incomplete or contain aliases): BITE, BEEBE, CARRUTHERS, LOUISE TOLLIVER, SOUR-FACED BOY, MOTHER, ORVILLE
1 A ¶ Summer evening, 1962.
2 A The screen is a white rectangle against a pink sky.
3 A A neon sign says GRAB A BITE.
4 A Cars idle in rows.
5 A Crickets.
6 A ¶ TWO TEENAGERS lean on the rail: BEATRICE "BEEBE" CARRUTHERS (16, ponytail, saddle shoes) and her best friend LOUISE TOLLIVER (16, sunglasses, her father's jacket).
7 A Neither looks at the other.
8 A ¶ Behind the counter, a SOUR-FACED BOY in a paper hat (17, freckles, glaring at a milkshake machine).
9 A ¶ At the window of a nearby station wagon, a MOTHER (40s, curlers under a headscarf) smokes and watches them like a hawk.
10 D BEEBE: He's looking at you.
11 D LOUISE: He's looking at you.
12 D BEEBE: He's looking at her. She's the one with the jacket.
13 D LOUISE: He's looking at the jacket.
14 A ¶ The sour-faced boy slides two milkshakes across the counter without a word.
15 D BOY: Four bits.
16 D BEEBE: That's a quarter more than last week.
17 D BOY: Prices go up.
18 D LOUISE: So do tempers.
19 A ¶ He flicks his eyes at her, then away.
20 A His ears go red.
21 D BEEBE (to Louise, low): Ask his name.
22 D LOUISE: You ask his name.
23 D BEEBE: He'd answer you.
24 D LOUISE: He'd answer anyone.
25 D BEEBE: He wouldn't answer me.
26 A ¶ Louise sighs.
27 A Pushes her sunglasses up into her hair.
28 D LOUISE: What do they call you?
29 D BOY: They don't.
30 D LOUISE: We'll call you something.
31 D BOY: Orville.
32 D BEEBE: Orville?
33 D ORVILLE: It's a family name.
34 D LOUISE: It's a terrible name.
35 D ORVILLE (unsmiling): My grandfather flew a biplane in the first war.
36 D BEEBE: Oh!
37 D LOUISE: Oh.
38 A ¶ The two girls exchange a glance.
39 A Orville slides a napkin across the counter, then another.
40 D ORVILLE [CONT'D]: They're free.
41 D BEEBE (taking hers): Thanks, Orville.
42 A ¶ The screen flickers.
43 A A film leader counts down.
44 A The Mother's cigarette glows.
45 A She says nothing, but her gaze drifts to the Boy at the counter.
46 A ¶ Orville wipes the counter.
47 A His hand shakes slightly.
48 D ORVILLE [CONT'D] (low, to Beebe): Saturday. If you're free.
49 D BEEBE: She's not free.
50 D LOUISE: She's free.
51 D BEEBE: Louise.
52 D LOUISE: She'd love to.
53 A ¶ She nudges the other girl hard.
54 A The napkin flutters to the pavement.
55 A In the station wagon, the Mother turns away with a small, private smile and flicks ash out the window.
56 A ¶ The first scene of the movie begins on the screen, lighting their faces in silver.
57 T FADE OUT.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01238.json
### SCENE s01238 | INT. SEAFOOD MARKET - BACK OFFICE - PRE-DAWN
Detected names (may be incomplete or contain aliases): VITO FERRANTINO, DANTE FERRANTINO, ODETTE LAROCHE, SUNDAR IYER, ^SUNDAR
1 A ¶ A tiled room that smells of ice and brine.
2 A A desk with a ledger and a crushed pack of cigarettes.
3 A Through a window, the market floor is dark, tubs of crab stacked like tombstones.
4 A ¶ VITO FERRANTINO (60s, apron over a good shirt) sits behind the desk with his hands folded.
5 A Across from him, his nephew DANTE FERRANTINO (30s, leather coat, wet hair) shifts in a metal chair.
6 A ¶ By the door stands MRS. ODETTE LAROCHE (50s, orange rubber gloves to the elbow, fishmonger's cap), eating an apple.
7 A And in the corner, on an overturned crate, sits SUNDAR IYER (20s, soft-spoken, clean, holding a clipboard).
8 D VITO (to the room): Everybody comfortable?
9 A ¶ Nobody answers.
10 A Odette bites the apple.
11 A Dante's knee bounces.
12 D VITO [CONT'D] (to Dante): You want some coffee?
13 D DANTE: I'm good.
14 D VITO: It's early. You look tired.
15 D DANTE: I'm not tired.
16 D VITO (to himself): He's not tired.
17 A ¶ He opens the ledger.
18 A Turns a page.
19 A Runs a finger down a column.
20 D VITO [CONT'D] (to Sundar): Accountant. How's the arithmetic?
21 D SUNDAR: It's close, Mr. Ferrantino.
22 D VITO: Close to what?
23 D SUNDAR: It's close to correct.
24 D VITO: Close. Odette?
25 D ODETTE: Close is a nice word.
26 D VITO: It's a nice word until the fish go off.
27 A ¶ Dante laughs once.
28 A Short.
29 A Dry.
30 A Nobody joins.
31 D VITO [CONT'D] (to Dante): You think it's funny?
32 D DANTE: You said fish.
33 D VITO: I did say fish.
34 A ¶ He closes the ledger.
35 A Slides it across the desk.
36 A Dante glances at it.
37 A Doesn't touch it.
38 D VITO [CONT'D]: Read it.
39 D DANTE: Uncle Vito.
40 D VITO: Read the third page.
41 D DANTE: I know what's on the third page.
42 D ODETTE: Then why are you sweating?
43 D SUNDAR: Dante, I told you to take it back.
44 D DANTE: You told me nothing!
45 A ¶ Both speak at once, sharp and loud.
46 D ODETTE (to Sundar): Hush.
47 D ^SUNDAR (to Odette): I didn't say--
48 D VITO (to the room, calm): Enough.
49 A ¶ Silence.
50 A The ice machine rumbles in the next room.
51 A Vito lifts the lid of the ledger one more time and takes out a single photograph.
52 A He sets it face-up on the desk.
53 A ¶ It's Dante, in a car, handing an envelope to a stranger in a dark coat.
54 A The timestamp reads last Thursday.
55 D DANTE (barely): Where did you get that?
56 D VITO: The man in the coat is mine. Has been for ten years. He told me you'd come.
57 A ¶ Dante looks at Odette.
58 A At Sundar.
59 A At the door.
60 A Odette drops the apple core into the bin and folds her gloved arms.
61 D VITO [CONT'D] (quietly, to himself): Blood.
62 A ¶ He lifts the phone on the desk and dials one digit.
63 A It rings once.
64 T FADE OUT.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01239.json
### SCENE s01239 | INT. SUBURBAN KITCHEN - MORNING
Detected names (may be incomplete or contain aliases): NINA ZELENKO, MAN, TOMAS
1 A ¶ Cereal boxes, a half-finished jigsaw on the counter, a calendar with every square filled.
2 A ¶ NINA ZELENKO (8, pyjamas, ponytail askew) kneels on a chair, building a tower out of sugar cubes.
3 A She doesn't look up when a MAN comes in through the back door.
4 A ¶ He is in his thirties, stubble, suitcase in his hand, a travel-worn grey sweater.
5 A He stops just inside the mat.
6 A He doesn't speak.
7 D NINA: Mum's at work.
8 D MAN: I know.
9 D NINA: You can't come in if she's not here.
10 D MAN: I'm already in.
11 A ¶ She considers this.
12 A Places another cube.
13 A The tower wobbles and holds.
14 D NINA: Are you the plumber?
15 D MAN: No.
16 D NINA: The man from the gas?
17 D MAN: No.
18 D NINA: You look like a man from the gas.
19 A ¶ The Man sets the suitcase on the floor.
20 A Slowly.
21 A Like putting down something that might go off.
22 D MAN [CONT'D]: Do you remember a photograph? On the fridge. A man with a boat.
23 D NINA: That's Daddy. He's in Australia.
24 D MAN: Do you know his name?
25 D NINA: Daddy.
26 D MAN: His other name.
27 A ¶ Nina chews her lip.
28 A She sets down a cube, lining it up with great care.
29 D NINA: Tomas.
30 D MAN (quietly): Tomas.
31 D NINA: Zelenko. Like me.
32 A ¶ The Man breathes out.
33 A He crosses to the table and pulls out the chair opposite her.
34 A Sits.
35 A He is eye level with the tower.
36 D NINA [CONT'D]: You have the same nose.
37 D TOMAS: I do.
38 D NINA: You're not in Australia.
39 D TOMAS: Not today.
40 A ¶ Nina looks at him then, for the first time, properly.
41 A Her eyes trace his jaw, his hands, his collar.
42 A She picks up a sugar cube and offers it across the table.
43 D NINA: You can add one. Carefully.
44 A ¶ He takes it.
45 A His fingers tremble.
46 A He lowers it on to the very top of the tower.
47 A It holds.
48 D NINA [CONT'D] (almost whispering): Daddy.
49 D TOMAS: Nina.
50 D NINA: Mum says you're not coming back.
51 D TOMAS: Mum might be right.
52 D NINA: But you're here.
53 D TOMAS: I'm here this morning.
54 A ¶ She nods.
55 A Considers.
56 A Reaches for another cube.
57 D NINA: Then let's build it taller.
58 T FADE OUT.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01240.json
### SCENE s01240 | INT. FERRIS WHEEL GONDOLA - STOPPED AT THE TOP - NIGHT
Detected names (may be incomplete or contain aliases): LYSANDER POTTS, IMOGEN FAIRBANKS-DUBOIS
1 A ¶ A wind-rocked cabin sixty metres over a closed fairground.
2 A Painted bulbs flicker on the rim below.
3 A A duffel sits on the bench.
4 A ¶ LYSANDER POTTS (30s, tool belt over a ride-attendant's vest) kneels on the cabin floor with a drill, boring slowly through the planks.
5 A He hums under his breath.
6 A The drill whines, chews, drops.
7 A A fist-sized hole opens, framing the dark ticket booth below and a faint silver glint inside it.
8 A ¶ He lowers a line through the hole, clips a harness to the rail, and tests the knot with a bounce.
9 A The gondola creaks.
10 A He pauses.
11 A Something else is creaking.
12 A ¶ A gloved hand grips the outside of the cage.
13 A Then another.
14 A A woman hauls herself up the bars and hooks one elbow through the cabin door: IMOGEN FAIRBANKS-DUBOIS (30s, ski mask rolled up like a hat, grin like a crescent moon, breathing hard).
15 D IMOGEN: Evening, Lysander.
16 A ¶ Lysander lunges for the duffel.
17 A Imogen swings in, kicks the drill across the floor, and catches him in a bear hug.
18 A They wrestle, the cabin rocking, bulbs flaring and dying as they slam against the cage.
19 A His elbow cracks into the bench.
20 A Her boot catches the rail.
21 A The line goes taut and flaps across both of them.
22 A ¶ Then both freeze.
23 A Below, in the dark fairground, a torch beam swings across the ticket booth.
24 D LYSANDER (whispering): Is that yours?
25 D IMOGEN (whispering): I thought it was yours.
26 A ¶ The beam steadies on the hole in the floor.
27 A ¶ Lysander slowly lets go.
28 A Imogen unhooks her elbow.
29 A Neither lifts their hands.
30 T FADE OUT.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01241.json
### SCENE s01241 | INT. CHURCH BELL TOWER - SNIPER NEST - DAY
Detected names (may be incomplete or contain aliases): SERGEANT AMADOU DIALLO, KAZ, NOWAK
1 A ¶ Broken stone.
2 A Bells long gone.
3 A A sandbag parapet at the slit window.
4 A Dust hangs in the shafts of light.
5 A Distant shelling.
6 A ¶ SERGEANT AMADOU DIALLO (40s, helmet, three days of beard) lies prone behind a rifle.
7 A Eyes fixed on a far street.
8 A ¶ PRIVATE KAZIMIERZ "KAZ" NOWAK (19, spotter, binoculars, cracked lips) crouches beside him with a field radio.
9 D KAZ: Movement. Window, third floor.
10 D DIALLO: Which building?
11 D KAZ: Blue shutters.
12 D DIALLO: Got it.
13 A ¶ A mortar thuds close.
14 A Grit rains from the vault.
15 A Neither flinches.
16 D KAZ (into radio): Echo Two to Base. Contact.
17 A ¶ Static.
18 A Nothing.
19 D DIALLO: They can't hear you.
20 D KAZ (muttering): Come on, come on.
21 A ¶ Diallo shifts the rifle.
22 A Exhales.
23 A Waits.
24 D KAZ [CONT'D] (down the stairwell, shouting): Hold the door! Anyone comes up, you hold the door!
25 A ¶ Silence.
26 A A boot scuffs below.
27 A Diallo glances back.
28 A Kaz nods, shrugs.
29 D DIALLO: Count.
30 D KAZ: Four. Five. Six.
31 D DIALLO: Shutters.
32 D KAZ: Opening.
33 A ¶ A shape in the window.
34 A Diallo's finger tenses on the trigger.
35 A A pause.
36 A A breath.
37 D DIALLO (to himself): Not yet.
38 D KAZ: Sarge.
39 D DIALLO: Not yet.
40 A ¶ The shape retreats.
41 A The shutters close.
42 A Diallo lets his shoulders drop one inch.
43 D KAZ: They're playing with us.
44 D DIALLO: We play back.
45 A ¶ He resettles.
46 A Kaz lifts the binoculars.
47 A The shelling picks up again.
48 T CUT TO BLACK.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01242.json
### SCENE s01242 | EXT. DRY SALT LAKE - HOMESTEAD PORCH - AFTERNOON
Detected names (may be incomplete or contain aliases): JEREMIAH PIKE, STRANGER, JEDEDIAH
1 A ¶ A white crust of land that runs to the mountains.
2 A A weathered shack with a sagging porch roof.
3 A A rain barrel, empty.
4 A A windmill creaks, turning once in a while.
5 A ¶ An old rancher, JEREMIAH PIKE (70s, suspenders, a face like cracked leather), sits on a rocking chair whittling a stick.
6 A A shotgun leans against the rail.
7 A He doesn't pick it up.
8 A ¶ A rider appears out of the shimmer, leading a skinny horse.
9 A The rider dismounts at the edge of the yard: a lean man in a long duster, hat pulled low.
10 A A STRANGER.
11 D STRANGER: Afternoon.
12 D JEREMIAH: Afternoon.
13 D STRANGER: I'm looking for water for the horse.
14 D JEREMIAH: Barrel's dry.
15 D STRANGER: So I see.
16 D JEREMIAH: Well's behind the house. Bucket's on the nail. Mind the rope.
17 A ¶ The Stranger nods.
18 A Leads the horse around the side.
19 A A pump handle squeaks.
20 A Water splashes.
21 A Jeremiah whittles on.
22 A ¶ Presently the Stranger returns, hat in hand.
23 A He is younger than he looked: forty, if that.
24 A A scar runs down one cheek.
25 D STRANGER [CONT'D]: That's a good well.
26 D JEREMIAH: Dug it myself. Nineteen years ago.
27 D STRANGER: Nineteen.
28 D JEREMIAH: You say that like it means something.
29 D STRANGER: Might.
30 D JEREMIAH: Sit if you like.
31 A ¶ The Stranger takes the other step of the porch.
32 A Lowers himself.
33 A Their eyes are on the horizon.
34 D JEREMIAH [CONT'D]: You got a name?
35 D STRANGER: Used to.
36 D JEREMIAH: Used to is a fine name for a man.
37 A ¶ The Stranger half smiles.
38 A The windmill turns.
39 A A hawk circles far off.
40 D STRANGER: Jedediah.
41 D JEREMIAH (still whittling): Jedediah what?
42 D JEDEDIAH: Pike.
43 A ¶ The knife stops.
44 A Jeremiah stares at the stick in his hand as though it had just spoken.
45 D JEREMIAH: Pike's my name.
46 D JEDEDIAH: I know it.
47 D JEREMIAH: I had a boy named Jedediah.
48 D JEDEDIAH: I know.
49 A ¶ Neither looks at the other.
50 A The wind picks up a veil of white dust and lets it fall again.
51 D JEREMIAH: He ran off when he was twenty-one.
52 D JEDEDIAH: Twenty-one and two months.
53 D JEREMIAH: Took a horse.
54 D JEDEDIAH: This one's his granddaughter.
55 A ¶ Jeremiah laughs, short, dry, a sound with no air in it.
56 A He lowers the stick.
57 A Looks at it.
58 A Places it carefully on the rail.
59 D JEREMIAH: You hungry?
60 D JEDEDIAH: I could eat.
61 D JEREMIAH: I've beans.
62 D JEDEDIAH: Beans are good.
63 D JEREMIAH: Beans are what there is.
64 A ¶ He rises with a groan.
65 A Stops with a hand on the door.
66 D JEREMIAH [CONT'D]: Don't go getting any ideas about staying.
67 D JEDEDIAH: No, sir.
68 D JEREMIAH: I snore.
69 D JEDEDIAH: I remember.
70 A ¶ Jeremiah's back is turned.
71 A His shoulders tremble once.
72 A Then he goes inside.
73 A Jedediah sits there a while longer, hat on his knee, looking at the white horizon.
74 A ¶ He picks up the stick Jeremiah left on the rail and, with the little knife from his belt, begins to finish the carving.
75 T FADE OUT.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01243.json
### SCENE s01243 | EXT. FROZEN LAKE - ICE FISHING HUT - DAWN
Detected names (may be incomplete or contain aliases): ASTRID BJORKLUND, KWAME ASANTE, LEILA NOURI, OLD HARTWELL, BENEDICT OYELARAN
1 A ¶ A tiny plywood shack on a plain of white.
2 A A thin plume of smoke rises from its tin chimney.
3 A The sun pushes up behind a dark treeline, spilling pink across the ice.
4 A ¶ Inside, four people crowd shoulder to shoulder around a hole in the floor, lines hanging in the black water.
5 A A portable stove glows red.
6 A ¶ ASTRID BJORKLUND (60s, wool hat, thermos) tends a line with patient fingers.
7 A ¶ KWAME ASANTE (30s, ice-auger slung across his back, laughs easily) rubs his gloves over the stove.
8 A ¶ LEILA NOURI (20s, scientist, notebook, clipboard) jots numbers beside the hole.
9 A ¶ OLD HARTWELL (70s, one-eyed, cap with earflaps) dozes upright in a folding chair, a pipe unlit in his mouth.
10 D KWAME: Astrid, you've got a bite.
11 D ASTRID: I know.
12 D KWAME: You're not reeling.
13 D ASTRID: I'm waiting.
14 D LEILA: What for?
15 D ASTRID: For him to decide.
16 A ¶ The line tugs.
17 A Astrid lifts it a single inch.
18 A The tension goes slack.
19 A She sighs.
20 D LEILA: Eleven centimetres of ice at the edge. Nineteen here. It's thickening, Astrid.
21 D ASTRID: It always thickens. Then it stops.
22 D KWAME: Hartwell, wake up. We have fish.
23 D HARTWELL (eyes closed): We have no fish.
24 D KWAME: We have a fish.
25 D HARTWELL: We have an optimist.
26 A ¶ Kwame grins.
27 A Leila writes it down without being asked, and Astrid's mouth twitches.
28 A ¶ Outside, a snowmobile growls.
29 A The engine cuts.
30 A Boots creak.
31 A The door swings open on a rush of white air.
32 A ¶ A man ducks in, stamping snow: BENEDICT OYELARAN (40s, ranger's parka, radio on his chest).
33 A He closes the door and stands there, enjoying the heat.
34 D KWAME [CONT'D]: Ranger Benedict. Come to arrest us?
35 D BENEDICT: Only if you've got more than the limit.
36 D LEILA: We have none.
37 D BENEDICT: Then you're safe.
38 D ASTRID: Coffee?
39 D BENEDICT: God, yes.
40 A ¶ She pours him a cup.
41 A He cradles it, steaming, and looks at the four of them: hats, noses, gloves, the black circle of water.
42 D BENEDICT [CONT'D]: Anybody catch anything?
43 D HARTWELL: Not yet.
44 D KWAME: But the day is young, Hartwell.
45 D HARTWELL: The day's old as the lake.
46 A ¶ Kwame laughs.
47 A Leila turns a page.
48 A The stove ticks.
49 A Astrid's line twitches again, and nobody says a word.
50 T FADE OUT.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01244.json
### SCENE s01244 | INT. PLEA ROOM - COURTHOUSE BASEMENT - DAY
Detected names (may be incomplete or contain aliases): PUBLIC DEFENDER ROSALIND KEMP, MARGUERITE DELACROIX-OBI, THELONIOUS GRAVES
1 A ¶ A cinderblock cell with a steel table.
2 A A buzzing light.
3 A A small high window.
4 A ¶ PUBLIC DEFENDER ROSALIND KEMP (30s, tired blazer) sits across from her client, MARGUERITE DELACROIX-OBI (30s, orange jumpsuit, braids), and the prosecutor, ASSISTANT D.A. THELONIOUS GRAVES (50s, bow tie, folder).
5 D ROSALIND: She'll take the deal.
6 D GRAVES: Will she?
7 D MARGUERITE: I'll hear it first.
8 D GRAVES: Three years, suspended.
9 D ROSALIND: Time served.
10 D GRAVES: Three, suspended.
11 A ¶ Rosalind and Marguerite glance at each other.
12 A Marguerite lays a palm flat on the table.
13 A Graves taps his folder.
14 D MARGUERITE: And the record?
15 D GRAVES: Sealed after five.
16 D ROSALIND: Four.
17 A ¶ They all lean in at once, three palms on the table.
18 A Then all three freeze, because the light flickers and goes out.
19 A In the dark, nobody moves.
20 A ¶ The light buzzes back.
21 A They're in the same positions.
22 A Graves' bow tie is crooked.
23 D GRAVES (deadpan): Five.
24 D ROSALIND: Four and a half.
25 A ¶ He sighs.
26 A Marguerite almost laughs.
27 A Rosalind lifts a pen.
28 T FADE OUT.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01245.json
### SCENE s01245 | INT. ER TRAUMA BAY - NIGHT
Detected names (may be incomplete or contain aliases): FATIMA HADDAD, PIERRE LEFEBVRE-OKORO, NURSE TALIA BRODERICK, RESPIRATORY THERAPIST GUNNAR EKSTROM, EMEKA ADEYEMI-STROM
1 A ¶ A curtained bay under harsh fluorescent light.
2 A Monitors beep in a staggered chorus.
3 A The floor is wet where something was mopped and then spilled again.
4 A ¶ On the gurney lies a motorcyclist in a ruined leather jacket, jaw clamped around a bite block.
5 A Round him, the team works in a tight ring.
6 A ¶ DR. FATIMA HADDAD (40s, trauma lead, surgical cap with cartoon owls) calls out numbers in a flat voice.
7 A ¶ DR. PIERRE LEFEBVRE-OKORO (30s, resident, shirt soaked to the elbow) holds pressure on the chest.
8 A ¶ NURSE TALIA BRODERICK (50s, silver braid, expert hands) pushes a syringe into a line and calls the drug.
9 A ¶ RESPIRATORY THERAPIST GUNNAR EKSTROM (20s, headset, calm) squeezes a bag and watches the numbers climb.
10 D TALIA: Two of epi in.
11 D FATIMA: Pressure?
12 D GUNNAR: Seventy over forty.
13 D PIERRE: I have the bleed. I have it.
14 D FATIMA: Hold it. Hold it, Pierre.
15 D PIERRE: Holding.
16 A ¶ The monitor tone changes: a faster beep, a ragged line.
17 A Fatima lifts her eyes to it.
18 A Nobody speaks.
19 A Gunnar squeezes the bag.
20 A Talia's hand rests on the patient's shoulder, steady as a stone.
21 D GUNNAR: Eighty over fifty. Ninety.
22 D FATIMA: Sinus rhythm. We have a rhythm.
23 A ¶ The tone smooths.
24 A A long breath moves around the ring like a wave.
25 A Pierre's shoulders drop an inch.
26 A Talia taps the shoulder twice, lightly, the way you would pat a horse.
27 A ¶ The curtain flicks open.
28 A A tall man steps through: DR. EMEKA ADEYEMI-STROM (60s, chief of surgery, tie loose, tired).
29 A He takes in the monitors, the blood, the faces, and nods once.
30 D EMEKA: OR two is ready. Who's going up?
31 D FATIMA: Pierre will scrub in with you. I'll stay with the chest tube.
32 D EMEKA: Good.
33 D PIERRE: Good?
34 D EMEKA: Good work. All of you.
35 A ¶ He doesn't smile.
36 A He doesn't have to.
37 A The room has just slowed down to a human speed, and the owls on Fatima's cap seem to blink.
38 D TALIA (quietly): Gurney. On three.
39 A ¶ They count it together and roll him out.
40 T FADE OUT.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01246.json
### SCENE s01246 | INT. FAMILY KITCHEN - MORNING
Detected names (may be incomplete or contain aliases): ROSEMARY ALDRIDGE, BARNABY ALDRIDGE, GRANDMA
1 A ¶ Pancakes burn.
2 A Smoke curls from the pan.
3 A A cat watches from the refrigerator top.
4 A ¶ Mum, ROSEMARY ALDRIDGE (40s, bathrobe, phone against her shoulder), flips a pancake.
5 A It lands on the floor.
6 A She leaves it.
7 A ¶ Her son, BARNABY ALDRIDGE (10, school jumper, one shoe), sits at the table, staring at his cereal.
8 D BARNABY: It's soggy.
9 D ROSEMARY (into phone): Yes. I'm here. Hold on.
10 A ¶ She covers the receiver.
11 D ROSEMARY [CONT'D]: Barnaby, shoes.
12 D BARNABY: I'm not going.
13 D ROSEMARY: Barnaby.
14 D BARNABY: I'm not going.
15 D ROSEMARY (into phone): No, not you. Go on.
16 D GRANDMA [V.O.] (tinny, through the phone): Rosemary, put the boy on. Put him on.
17 D ROSEMARY: Mum, he's eating.
18 D GRANDMA [V.O.]: He's not eating. I can hear he's not eating.
19 A ¶ Barnaby's spoon clinks against the bowl.
20 A He pushes cereal in a circle.
21 D ROSEMARY: Barnaby. Grandma wants a word.
22 A ¶ He takes the phone.
23 A Holds it away from his ear like a dead fish.
24 D BARNABY: Hi.
25 D GRANDMA [V.O.]: Barnaby, my darling. Do you know what day it is?
26 D BARNABY: Tuesday.
27 D GRANDMA [V.O.]: It's your sports day, isn't it?
28 A ¶ His shoulders hunch.
29 A The spoon goes still.
30 D BARNABY: I'm not doing the race.
31 D GRANDMA [V.O.]: Why not?
32 D BARNABY: Because I always lose.
33 A ¶ Rosemary stops with the spatula in the air.
34 A She looks at him.
35 A He looks at the table.
36 D GRANDMA [V.O.]: Your grandfather lost every race he ever ran.
37 D BARNABY: Really?
38 D GRANDMA [V.O.]: Every one. He'd come in last and hold his arms up like he'd won. Everyone cheered. You know why?
39 D BARNABY: Why?
40 D GRANDMA [V.O.]: Because he was the only one who looked like he was enjoying it.
41 A ¶ Barnaby lifts his head.
42 A A corner of his mouth moves.
43 D BARNABY: Grandpa did that?
44 D GRANDMA [V.O.]: Put your mother back on.
45 A ¶ He hands the phone to Rosemary.
46 A She takes it, breath held.
47 D ROSEMARY: Mum?
48 D GRANDMA [V.O.]: Burn another pancake. He likes them burned.
49 A ¶ Rosemary laughs, a wet cracked sound.
50 A She wipes her eyes with the back of her wrist.
51 D ROSEMARY: I love you.
52 D GRANDMA [V.O.]: Hush. Go and flip.
53 A ¶ The line clicks.
54 A Rosemary puts the phone down on the counter.
55 A She picks up the burnt pancake from the pan, slides it onto a plate, and sets it in front of Barnaby.
56 D BARNABY: It's black.
57 D ROSEMARY: Eat.
58 A ¶ He takes a bite.
59 A Chews.
60 A Nods.
61 D BARNABY: It's okay.
62 A ¶ He picks up his other shoe.
63 T FADE OUT.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01247.json
### SCENE s01247 | EXT. STAGECOACH STATION - HIGH NOON
Detected names (may be incomplete or contain aliases): SHERIFF LUCINDA HARGROVE, DEPUTY MARIGOLD TEASDALE, ABSALOM FINCH
1 A ¶ A single hitching post.
2 A Dust.
3 A A water trough with a drowned sparrow in it.
4 A ¶ SHERIFF LUCINDA HARGROVE (40s, star on her vest) stands with her arms folded.
5 A Beside her, DEPUTY MARIGOLD TEASDALE (20s, new hat, too-big holster) fidgets.
6 A Across the road, a rider on a grey mare: ABSALOM FINCH (30s, handlebar moustache, silver spurs).
7 D LUCINDA (to Marigold, low): Let me do the talking.
8 D MARIGOLD: I wasn't going to.
9 D LUCINDA (to the road, loud): Morning, Absalom.
10 D ABSALOM: Morning, Sheriff.
11 D LUCINDA: You're a long way from Tucson.
12 D ABSALOM: It's a long way to anywhere.
13 A ¶ He swings down.
14 A Spurs ring.
15 A The mare shakes her mane.
16 A Marigold's hand drifts toward her holster.
17 D LUCINDA (muttering): Hand off the gun.
18 D MARIGOLD (muttering): She said hand off.
19 A ¶ She lets the hand fall.
20 A Lucinda doesn't look at her.
21 D ABSALOM: Heard there was a hanging today.
22 D LUCINDA: Heard wrong.
23 D ABSALOM: Heard right, then.
24 A ¶ He tips his hat to the trough, to the sparrow, to the dust.
25 A Mounts again, turns the mare, and trots out of town.
26 A Lucinda watches him go.
27 A Marigold releases her breath.
28 D MARIGOLD: Who hangs on a Tuesday?
29 D LUCINDA (to the whole street): Nobody, thank God.
30 T FADE OUT.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01248.json
### SCENE s01248 | INT. STAGE DOOR - GRAND MERIDIAN THEATRE - NIGHT
Detected names (may be incomplete or contain aliases): AUGUSTINE BLACKWOOD, MIRABELLE TRUJILLO, THADDEUS GRANT, PRUDENCE WILKES-AMARI, CORNELIUS FAIRCHILD, BARTY, NKEMELU
1 A ¶ The backstage corridor of an old playhouse.
2 A Peeling posters, a cracked mirror, a radiator knocking like a dying heart.
3 A A single bulb in a wire cage swings gently.
4 A There is no draught.
5 A ¶ The final performance has ended.
6 A Six members of the company stand in their street clothes, coats half-on, none of them going home.
7 A ¶ AUGUSTINE BLACKWOOD (60s, director, silk scarf) stares at the stage door.
8 A ¶ MIRABELLE TRUJILLO (30s, lead actress, make-up still on one eye) grips her handbag.
9 A ¶ THADDEUS GRANT (40s, stage manager, headset around his neck) counts heads with his finger.
10 A ¶ PRUDENCE WILKES-AMARI (20s, understudy, bright red coat) bites her thumbnail.
11 A ¶ CORNELIUS FAIRCHILD (50s, prop master, apron) cradles a skull from the final scene.
12 A ¶ BARTHOLOMEW "BARTY" NKEMELU (teen, call-boy, cap) hovers at the back.
13 D THADDEUS: Five. I count five.
14 D AUGUSTINE: Six, Thaddeus.
15 D THADDEUS: Five and Barty.
16 D MIRABELLE: Six, then.
17 D PRUDENCE: Who's missing?
18 D CORNELIUS: Nobody's missing.
19 D BARTY: There was somebody in the wings. During the third act.
20 D AUGUSTINE: That was the ghost light.
21 D BARTY: It moved.
22 D THADDEUS: Lights don't move.
23 D PRUDENCE: It was a man.
24 D MIRABELLE: It was Cornelius, getting the skull.
25 D CORNELIUS: I was at the prop table.
26 A ¶ A beat.
27 A The bulb swings.
28 A The shadow of the cage drifts slowly across their faces.
29 A Nobody looks up.
30 A ¶ The radiator knocks twice.
31 A Then once.
32 D AUGUSTINE: Whose coat is that?
33 A ¶ On a hook by the stage door hangs a long black coat with a velvet collar.
34 A Nobody moves toward it.
35 D MIRABELLE (almost inaudible): It wasn't there at the interval.
36 D PRUDENCE: It's cold.
37 D THADDEUS: Everyone, out. Now. Barty, the keys.
38 D BARTY: I left them on the...
39 D THADDEUS: Barty.
40 D BARTY: I left them in the prompt corner.
41 A ¶ Silence.
42 A Thaddeus turns.
43 A Down the corridor, the stage door to the auditorium is open a hand's width.
44 A Inside, in the dark, the ghost light burns, and in front of it, small and still, stands a figure with its back to them, face to the empty seats.
45 D CORNELIUS (whispering): Don't look.
46 A ¶ They all look.
47 A ¶ The skull in Cornelius's arms clacks its jaw, softly, once.
48 A He drops it.
49 A It rolls under the radiator.
50 D AUGUSTINE (barely a breath): Nobody run.
51 D PRUDENCE: Nobody...
52 D MIRABELLE: Yes.
53 D THADDEUS: Run.
54 A ¶ They run.
55 T FADE OUT.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01249.json
### SCENE s01249 | INT. PEDIATRIC CLINIC - EXAM ROOM - DAY
Detected names (may be incomplete or contain aliases): WOMAN, SOLVEIG AASEN-BELLO, KAMARIA JOSEPH-FERRIER, OSKAR, FATHER, THE FATHER, DAVID
1 A ¶ Bright walls, painted giraffes, a jungle-gym poster.
2 A A small examination bed with white paper and a stuffed lion.
3 A A scale.
4 A Sunlight through a striped blind.
5 A ¶ A WOMAN in a white coat, her name tag turned backward, sits on a rolling stool with a tablet: DR. SOLVEIG AASEN-BELLO (40s, kind, tired, mismatched earrings).
6 A She keeps her voice level.
7 A ¶ Her patient's mother, KAMARIA JOSEPH-FERRIER (30s, nurse's scrubs under her coat, tight shoulders), holds a toddler's hand.
8 A The toddler, OSKAR, is asleep on the bed.
9 A ¶ And in the corner, on a plastic chair, sits a man, introduced on the form only as THE FATHER (30s, hoodie, unshaven, knee bouncing).
10 D SOLVEIG: He's very warm.
11 D KAMARIA: I know.
12 D SOLVEIG: Has he been drinking?
13 D KAMARIA: Barely.
14 D THE FATHER: He had juice.
15 D KAMARIA: Half a cup.
16 D SOLVEIG: Any rash?
17 D THE FATHER: Not that I saw.
18 D KAMARIA: David, I checked. Twice.
19 D SOLVEIG (typing): Fever since?
20 D THE FATHER: Monday.
21 D KAMARIA: Sunday night.
22 A ¶ He looks at her.
23 A She looks at the child.
24 A The pen clicks.
25 D SOLVEIG: Okay. I'm going to listen to his chest.
26 A ¶ She lays the stethoscope on the small ribs.
27 A Her eyes drift, then fix.
28 A Her face doesn't change, but her hand does.
29 A It moves up.
30 A Back.
31 A Down.
32 D KAMARIA: What is it?
33 D SOLVEIG: I'd like a quick bloods and a chest film.
34 D THE FATHER: What is it?
35 D SOLVEIG: I'm not sure yet.
36 D KAMARIA (very quiet): Don't do that to me. I'm a nurse.
37 D SOLVEIG: I know.
38 D KAMARIA: What do you hear?
39 D SOLVEIG: A fluid sound. On the right.
40 A ¶ Kamaria closes her eyes.
41 A The father's knee stops bouncing.
42 A He half rises, sits again, and leans forward until his elbows rest on his thighs.
43 D DAVID (to himself): I told you Monday.
44 D KAMARIA: You told me nothing.
45 D DAVID: I said we should come in Monday.
46 D KAMARIA: You said wait.
47 D SOLVEIG: Please. Both of you.
48 A ¶ She wheels the stool back.
49 A Rests the stethoscope across her knees.
50 D SOLVEIG [CONT'D]: He's going to be admitted. Today. He's stable, he's breathing, and I'm going to have him upstairs in twenty minutes.
51 D KAMARIA: Oxygen?
52 D SOLVEIG: Yes.
53 D KAMARIA: Antibiotics?
54 D SOLVEIG: IV. Straight away.
55 A ¶ Kamaria nods.
56 A Opens her eyes.
57 A Squeezes the small hand and doesn't let go.
58 A David pulls a tissue from his hoodie pocket.
59 A Finds there is nothing in it.
60 D SOLVEIG [CONT'D]: He's going to be all right. It will be loud and frightening, but he's going to be all right.
61 D DAVID: You promise?
62 D SOLVEIG: I won't promise. I'll stay with him.
63 A ¶ On the bed, Oskar stirs, opens one eye, and sees the lion.
64 A He reaches for it with the whole of his fist.
65 T FADE OUT.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01250.json
### SCENE s01250 | INT. UNDERTAKER'S PARLOUR - BACK ROOM - NIGHT - 1927
Detected names (may be incomplete or contain aliases): MAUDE PELLETIER, CYRIL OSGOOD, OTTOLINE VANTERPOOL, BRAM HOLLIDAY, STRANGER, NOLAN, ^NOLAN
1 A ¶ Behind a velvet curtain, a secret card game.
2 A Six coffins stand in a row against the wall, lids propped open as stools.
3 A A card table in the middle.
4 A Smoke hangs under a green-shaded lamp.
5 A A gramophone plays a tinny foxtrot.
6 A ¶ MAUDE PELLETIER (50s, owner, black bombazine, rings on every finger) deals cards with a flick of her wrist.
7 A ¶ CYRIL OSGOOD (30s, bookkeeper, spectacles, sweat on his lip) arranges his hand in a fan.
8 A ¶ OTTOLINE VANTERPOOL (20s, flapper, fur collar, cigarette holder) leans back in a coffin as if it were a chaise longue.
9 A ¶ BRAM HOLLIDAY (40s, bootlegger, pinstripes, a pistol bulge under his arm) drinks gin out of a tin funeral urn.
10 A ¶ The curtain parts.
11 A A man in a rain-soaked fedora steps through.
12 A A STRANGER (30s, slim, quiet, hands in his pockets).
13 D MAUDE: We're closed, mister.
14 D STRANGER: The door said open.
15 D MAUDE: The door says a lot of things.
16 D STRANGER: I heard there was a game.
17 D BRAM: You heard wrong.
18 D OTTOLINE: Oh, let him sit, Bram. He's pretty.
19 D CYRIL (swallowing): Is he police?
20 D STRANGER: No.
21 D BRAM: You'd say that.
22 D STRANGER: I would.
23 A ¶ He takes a seat in the empty coffin, folding his coat over his knees.
24 A Maude deals him in without waiting for permission.
25 A He turns up his cards, studies them, and sets them face-down.
26 D MAUDE: What's your name?
27 D STRANGER: Does it matter?
28 D MAUDE: Everyone who sits here has one.
29 A ¶ Ottoline blows smoke at the lamp.
30 A Cyril clears his throat, drops a chip.
31 A Bram watches the Stranger over the rim of the urn.
32 D STRANGER: Nolan.
33 D MAUDE: Just Nolan?
34 D NOLAN: It's what the boys at the dock call me.
35 A ¶ Bram's urn stops halfway to his mouth.
36 D BRAM: Which dock?
37 D NOLAN: Pier nine.
38 D BRAM: Pier nine's mine.
39 D NOLAN: I know.
40 A ¶ The gramophone needle hits the end of the record and ticks.
41 A Nobody gets up to change it.
42 A Cyril's hand goes to the little pearl-handled derringer in his boot.
43 A He thinks better of it.
44 D OTTOLINE: Oh, I do love a scene.
45 D BRAM: Shut it, Otty.
46 D OTTOLINE: You shut it. I'm having a lovely time.
47 D NOLAN (to the table): Nobody has to get hurt.
48 D MAUDE: Good. I've hurt enough people this week.
49 D BRAM: You think you can walk in here and--
50 D CYRIL: I think we should all calm down--
51 D OTTOLINE: I think he should deal--
52 D MAUDE: Quiet!
53 A ¶ They stop.
54 A Maude lays down the deck.
55 A Slides one coffin lid shut with a bang that makes the lamp swing.
56 D MAUDE [CONT'D] (to Nolan): Say your piece.
57 D NOLAN: Mr. Holliday's been shorting Pier nine for six months. The Chief says the count's off by forty crates.
58 D BRAM: Who's the Chief?
59 D NOLAN: The man whose pier it really is.
60 D BRAM: That's a lie.
61 D ^NOLAN: That's a receipt.
62 A ¶ He lays a folded paper on the felt.
63 A Maude picks it up, scans it, passes it to Cyril.
64 A Cyril reads and goes grey.
65 D CYRIL (whispering): Bram. It's your signature.
66 D BRAM: It's forged.
67 D CYRIL: It's got the thumb.
68 D BRAM: Give me that!
69 A ¶ He lunges.
70 A Chips fly.
71 A The urn clatters off.
72 A Ottoline shrieks with laughter and scrambles backward.
73 A Nolan doesn't move from his coffin.
74 A Bram's pistol is in his hand now, shaking, aimed at Nolan's chest.
75 D MAUDE: Bram, put it down.
76 D BRAM: He's not leaving.
77 D NOLAN: Not through the door, no.
78 A ¶ Bram blinks.
79 A The curtain behind him moves.
80 A A shadow stretches along the wall.
81 A ¶ Maude stands.
82 A Her chair scrapes.
83 D MAUDE: Bram. Behind you.
84 A ¶ He half turns.
85 A Maude's ringed hand takes the pistol out of his grip, neat as a waiter lifting a plate.
86 A She holds it by the barrel.
87 A ¶ The gramophone needle skips.
88 A Silence.
89 D OTTOLINE (delighted): Oh, Maude's the Chief!
90 A ¶ Nolan collects his cards.
91 A Turns them over.
92 A A full house.
93 D NOLAN: Maude. Your deal.
94 D MAUDE (dryly): Of course it is.
95 T FADE OUT.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01251.json
### SCENE s01251 | INT. BOARDING HOUSE - KITCHEN - MORNING - 1911
Detected names (may be incomplete or contain aliases): ABIGAIL THORNBURY, ROSALIE THORNBURY-LAMB
1 A ¶ A long, low room with a range stove and a scrubbed deal table.
2 A Copper pans hang from a rack.
3 A Rain on the window.
4 A A bowl of apples.
5 A A kettle sings on the hob.
6 A ¶ ABIGAIL THORNBURY (50s, widow, apron over grey wool, hands red from lye) rolls pastry.
7 A She does it without thinking, as her mother did, and her mother's mother: out, turn, out, turn.
8 A ¶ Through the ceiling comes the sound of a bed creaking.
9 A A step.
10 A A pause.
11 A A drawer slides shut.
12 D ROSALIE [O.S.] (from upstairs, muffled): Abigail? Are you there?
13 D ABIGAIL (raising her voice slightly): Where else would I be?
14 D ROSALIE [O.S.]: I can't find my blue hat.
15 D ABIGAIL: It's on the hook in the hall.
16 D ROSALIE [O.S.]: I looked there.
17 D ABIGAIL: Look again.
18 A ¶ A pause.
19 A A longer creak.
20 A Then footsteps, light, down the back stairs.
21 A The kitchen door swings open and ROSALIE THORNBURY-LAMB (50s, younger sister, travelling coat, hat in hand) enters, pink in the cheeks.
22 D ROSALIE: It was on the hook.
23 D ABIGAIL: It's always on the hook.
24 D ROSALIE: I don't know how I missed it.
25 D ABIGAIL: You were looking for a hat. You weren't looking for a hook.
26 A ¶ Rosalie sets the hat down on the table, beside the apples.
27 A She doesn't sit.
28 A Abigail rolls and turns the pastry.
29 D ROSALIE: Is there tea?
30 D ABIGAIL: The kettle's on.
31 A ¶ Rosalie takes two cups from the dresser.
32 A Arranges them, saucers, spoons.
33 A Pours when the kettle shrieks.
34 A She sets Abigail's cup on the table at her elbow and takes her own to the window.
35 D ROSALIE: It's still raining.
36 D ABIGAIL: It's been raining since Michaelmas.
37 D ROSALIE: She'd have hated that. Mother. Always said rain made the apples sour.
38 D ABIGAIL: She said many things.
39 D ROSALIE: She said you'd stay.
40 A ¶ Abigail's hands pause on the pin.
41 A Only for a second.
42 A Then they roll.
43 D ABIGAIL: And she said you'd go. Both are true.
44 D ROSALIE: Are they?
45 D ABIGAIL: Nobody's stopping you.
46 D ROSALIE: I thought you might.
47 D ABIGAIL: I'd be a poor sister to bar a door.
48 A ¶ Rosalie sips her tea.
49 A Her face is turned to the window and the grey light; Abigail's is turned to the table.
50 A Neither sees the other's expression.
51 D ROSALIE: The train is at noon.
52 D ABIGAIL: Then you'll want an early lunch.
53 D ROSALIE: I will.
54 D ABIGAIL: I've an apple pie.
55 D ROSALIE: It's not baked.
56 D ABIGAIL: It will be.
57 A ¶ She lifts a flat circle of pastry and drapes it over a tin.
58 A Trims the edge with a knife in one smooth turn.
59 A Rosalie watches the knife.
60 D ROSALIE: You've always been so good at that.
61 D ABIGAIL: It's the only thing I'm good at.
62 D ROSALIE: That isn't true.
63 D ABIGAIL (drily): Tell me what else, then.
64 D ROSALIE: You were good at being left.
65 A ¶ Abigail's knife stops.
66 A She doesn't look up.
67 D ABIGAIL: That's unkind.
68 D ROSALIE: It's the truth. I mean it kindly.
69 D ABIGAIL: I know you do.
70 A ¶ A long, quiet moment.
71 A The kettle ticks as it cools.
72 A Rosalie crosses, sets down her cup.
73 A Takes an apple from the bowl, then a second, and hands one to Abigail.
74 A They peel in silence, side by side, the skins coming off in two unbroken spirals.
75 D ROSALIE: Yours is longer.
76 D ABIGAIL: It always is.
77 A ¶ She drops her spiral in the bin.
78 A Rosalie keeps hers, curled in her palm like a small snake, a moment longer than she needs to.
79 D ROSALIE: I'll write.
80 D ABIGAIL: You won't.
81 D ROSALIE: I will.
82 D ABIGAIL: Then I'll read it.
83 A ¶ Rosalie smiles.
84 A She sets the peel on the table.
85 A It uncurls slowly and lies there, pale, in the lamplight.
86 T FADE OUT.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01252.json
### SCENE s01252 | INT. PARKED CAR - ABANDONED QUARRY - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE SERAPHINA OKONJO-WYATT
1 A ¶ Rain on the roof.
2 A The dashboard glows green.
3 A A small digital recorder sits in the cupholder, its red light steady.
4 A ¶ DETECTIVE SERAPHINA OKONJO-WYATT (40s, rain-slick trench, eyes that haven't slept in days) leans toward the recorder.
5 D SERAPHINA: This is Detective Okonjo-Wyatt. Eleventh of November, twenty-three-forty. If anyone is listening to this, I'm sorry.
6 A ¶ She presses a button.
7 A A click.
8 A A hiss.
9 A Then, on the tape, her own voice plays back from earlier.
10 D SERAPHINA [V.O.] (recorded, flat): Monday. The body was found at the foot of the quarry stairs. No wallet. No phone. One shoe.
11 A ¶ She stops the tape.
12 A Rewinds a little.
13 A Presses record.
14 D SERAPHINA: The shoe was wrong. Left shoe, size nine, on a right foot. I should have seen it Monday. I saw it Wednesday. Wednesday is too late.
15 A ¶ A long breath.
16 D SERAPHINA [CONT'D]: The man in the stairwell wasn't the man we buried. The man we buried was a second man, and the second man had been dead since Friday. The first man is alive. He is walking around in the first man's shoes.
17 A ¶ She rubs her eyes.
18 A The rain thickens.
19 D SERAPHINA [CONT'D]: His name is Corwin Hale. He's the one who called it in.
20 A ¶ She stops.
21 A Her face is lit green.
22 A She presses play.
23 A Her own voice again.
24 D SERAPHINA [V.O.] (recorded): Corwin Hale found the body at dawn. He said he was jogging. He was in loafers.
25 A ¶ She stops the tape.
26 D SERAPHINA: Loafers, Corwin. I wrote it down. You saw me write it down.
27 A ¶ She swallows.
28 A Looks through the windscreen.
29 A Beyond the glass, in the rain, a pair of headlights is turning in at the quarry gate, slowly, very slowly.
30 D SERAPHINA [CONT'D] (lower): If this is the last thing I record, I want it noted that I was right.
31 A ¶ The headlights grow.
32 A She does not look at them.
33 A She reaches out and presses the recorder once more.
34 D SERAPHINA [CONT'D] (into recorder): Case file is in the glove box. The key is under the seat. Tell Marguerite I did love her.
35 A ¶ The light floods the car.
36 A Her shadow lunges across the dashboard.
37 T CUT TO BLACK.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01253.json
### SCENE s01253 | INT. HOSPICE - FAMILY LOUNGE - AFTERNOON
Detected names (may be incomplete or contain aliases): MERCEDES ARANDA-LINDGREN, RAMIRO BELLWETHER, CONSTANZA BELLWETHER-NAKAMURA, FELIX BELLWETHER
1 A ¶ A soft, sunny room: beige sofas, a fish tank, a jigsaw half-done on a coffee table.
2 A A television plays a gardening programme with the sound off.
3 A Somewhere down the hall, a trolley rattles.
4 A ¶ DR. MERCEDES ARANDA-LINDGREN (50s, grey cardigan, low voice) pours four cups of tea from a pot she did not need to bring.
5 A She sets the tray on the table with great care.
6 A Her hands are very still.
7 A ¶ On the sofa sit three siblings: the eldest, RAMIRO BELLWETHER (50s, rumpled suit, wedding ring he keeps turning), the middle, CONSTANZA BELLWETHER-NAKAMURA (40s, ironed blouse, handbag clutched on her knees), and the youngest, FELIX BELLWETHER (30s, scruffy, headphones around his neck).
8 D RAMIRO: She's been better this week.
9 D FELIX: She asked for the radio.
10 D CONSTANZA: She asked for soup.
11 D MERCEDES: She did.
12 A ¶ She hands out cups.
13 A Ramiro accepts his without looking.
14 A Constanza sets hers on the table, untouched.
15 A Felix cradles his between both palms as if it were a bird.
16 D MERCEDES [CONT'D]: She's been very bright these past days. It happens sometimes. A rally. We see it more than people expect.
17 D RAMIRO: A rally.
18 D MERCEDES: Yes.
19 D RAMIRO: So she's improving.
20 D MERCEDES: She's comfortable.
21 A ¶ He nods, slowly.
22 A Turns the ring.
23 A On the television, a woman in a straw hat bends to trim a rose, silent as a mime.
24 D CONSTANZA: When can she come home?
25 A ¶ Mercedes lifts her own cup.
26 A Sips.
27 A Sets it down, rim to saucer, with no sound at all.
28 D MERCEDES: That's a question I'd like to talk about.
29 D FELIX: Not yet.
30 D RAMIRO: Felix.
31 D FELIX: I'm not ready.
32 D CONSTANZA: Nobody's saying...
33 D MERCEDES: Felix.
34 A ¶ He looks at her.
35 A She waits.
36 A The fish tank bubbles.
37 A A clownfish noses a plastic castle.
38 D MERCEDES [CONT'D]: When someone gets bright, like your mother, it often means they're gathering themselves. It can last a day. It can last a week. But it is, very often, the last good thing.
39 A ¶ Constanza's hand finds her brother's arm.
40 A Ramiro's ring stops turning.
41 A Felix stares into the tea.
42 D FELIX (whispering): Is that what you meant by comfortable?
43 D MERCEDES: It's what I meant.
44 A ¶ Silence.
45 A The trolley rattles down the corridor and fades.
46 A Constanza opens her handbag, takes out a tissue, and folds it twice but does not use it.
47 D RAMIRO: How long?
48 D MERCEDES: Days.
49 D RAMIRO: How many?
50 D MERCEDES: I can't say exactly. I'd rather not guess in front of you.
51 A ¶ He exhales.
52 A Taps the sofa arm twice, hard, like a man hammering a nail.
53 A Then stops.
54 D CONSTANZA: She wants to see the garden.
55 D MERCEDES: She can see it. Today. We'll take the chair.
56 D CONSTANZA: And the dog.
57 D MERCEDES: Whatever she wants.
58 D FELIX (looking up): She wants the radio.
59 D MERCEDES: Then bring the radio.
60 A ¶ Felix nods.
61 A Stands, clumsy, spilling tea.
62 A He sets the cup on the tray and wipes his palms on his jeans.
63 A Constanza rises too.
64 A Ramiro follows, last, placing his tea on the table with a precision that looks like violence.
65 A ¶ At the door he stops.
66 D RAMIRO: Doctor.
67 D MERCEDES: Yes?
68 D RAMIRO: Thank you for the tea.
69 D MERCEDES (gently): You're welcome.
70 A ¶ The three siblings leave.
71 A Mercedes remains alone with the tray, the unfinished cups, the jigsaw.
72 A She picks up a puzzle piece from the table, turns it in her fingers, and sets it carefully in the sky of a sunny picture, where it fits exactly.
73 T FADE OUT.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01254.json
### SCENE s01254 | EXT. CANYON RIM - CAMP - DAWN
Detected names (may be incomplete or contain aliases): ELIJAH VANCE-HOLLOWAY, PEPPER, DUNLEAVY, TOBIAS MWANGI, OLD AUGUSTUS FENWICK, ^TOBIAS
1 A ¶ Red stone against a lemon sky.
2 A A thin column of smoke.
3 A Four bedrolls around a dead fire, a coffee pot on a flat rock.
4 A Horses hobbled in a stand of juniper.
5 A ¶ A tall man sits cross-legged on a saddle, rolling a cigarette.
6 A ELIJAH VANCE-HOLLOWAY (40s, black hat, a face like a closed door).
7 A He licks the paper, tucks it behind his ear, and doesn't light it.
8 A ¶ Beside him a lean woman scrapes a skillet clean with a knife.
9 A PERPETUA "PEPPER" DUNLEAVY (30s, braided hair, two pistols).
10 A She scrapes slowly, listening.
11 A ¶ The third bedroll is empty.
12 A The fourth holds a boy of fifteen, sleeping with his boots on: TOBIAS MWANGI (15, freckles, too-big shirt).
13 A He snores.
14 A ¶ At the edge of camp, a stooped man in a long grey duster watches the horizon with a spyglass: OLD AUGUSTUS FENWICK (60s, spectacles pushed up on his forehead).
15 D AUGUSTUS: Smoke.
16 D ELIJAH: Whose?
17 D AUGUSTUS: South. Two miles.
18 D ELIJAH: Ours or theirs?
19 D AUGUSTUS: Don't know. Could be anybody's.
20 A ¶ Pepper stops scraping.
21 A She sets the skillet down and wipes her knife on her trouser leg.
22 A She does not look at Elijah.
23 A He does not look at her.
24 D PEPPER: We should wake the boy.
25 D ELIJAH: Let him sleep.
26 D PEPPER: He'll want to be awake for this.
27 D ELIJAH: No, he won't.
28 A ¶ Augustus lowers the spyglass.
29 A He turns it over in his hands, studies the brass, then screws it shut.
30 D AUGUSTUS: Eleven riders.
31 D ELIJAH: You said smoke.
32 D AUGUSTUS: I said smoke. Then I counted.
33 A ¶ Elijah draws the cigarette from behind his ear.
34 A Strikes a match on his boot.
35 A The flame trembles.
36 A He holds it a long time before lighting, as if the match were something to pray to.
37 D ELIJAH: Eleven.
38 D PEPPER: We have four.
39 D ELIJAH: Three, with a child.
40 D AUGUSTUS: Four.
41 D ELIJAH: Four.
42 D PEPPER: We could ride north.
43 D ELIJAH: They'd see the dust.
44 D PEPPER: We could ride now.
45 D ELIJAH: They'd see the dust.
46 A ¶ She nods, short, like a woman agreeing to be hanged.
47 A She stands, her two pistols clinking, and crosses to the juniper where the horses stand.
48 A She runs her hand along the nearest neck.
49 A ¶ At the bedroll, the boy turns over and opens one eye.
50 D TOBIAS: Is it morning?
51 D ELIJAH: It's morning.
52 D TOBIAS: Is there coffee?
53 D ELIJAH: There will be.
54 A ¶ Tobias sits up.
55 A Rubs his face.
56 A Sees Pepper at the horses.
57 A Sees Augustus with the spyglass.
58 A Sees the match burn down to Elijah's fingers.
59 D TOBIAS: Who's coming?
60 A ¶ Nobody answers.
61 A Elijah drops the match.
62 A It dies in the dust.
63 D ELIJAH: Pepper. Saddle the boy's horse.
64 D PEPPER: I've done it.
65 D ELIJAH: Augustus. Water.
66 D AUGUSTUS: I filled it last night.
67 D ELIJAH: You always do.
68 A ¶ He stands.
69 A Dusts his knees.
70 A Hands the unlit cigarette to Tobias, who takes it, astonished.
71 D TOBIAS: What's this for?
72 D ELIJAH: For after.
73 D PEPPER: You don't say that to a boy.
74 D ELIJAH: I'm saying it.
75 A ¶ A distant sound: horses, many horses, a soft thunder rolling over the rim.
76 A Augustus puts the spyglass in his pocket.
77 A Pepper draws one pistol and spins it once on her finger.
78 A Tobias gets his boots under him.
79 D TOBIAS: Can I have a gun?
80 D ELIJAH: No.
81 D PEPPER: Give him mine.
82 D ELIJAH: Pepper.
83 D PEPPER: He's got a right.
84 D ^TOBIAS: I've got a right.
85 A ¶ They speak together, her voice dry, his voice cracking.
86 A Elijah looks from one to the other, then at the dust cloud boiling on the horizon, then at the coffee pot.
87 D ELIJAH (quietly): Put on the coffee.
88 D AUGUSTUS: Elijah...
89 D ELIJAH: If we're going to die, we'll die warm.
90 A ¶ Pepper sets the pot on the dead coals.
91 A Tobias snaps twigs into a pile.
92 A Augustus brings a match.
93 A ¶ The thunder rolls closer.
94 A The twigs catch.
95 T FADE OUT.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01255.json
### SCENE s01255 | INT. FRONTIER SALOON - NIGHT
Detected names (may be incomplete or contain aliases): SHERIFF BOONE, RED CALLOWAY, MOSES FULLER, MISS ELOISE TRASK, LEFTY OBREGON, SILAS CROFT, ^RED
1 A ¶ Piano stops.
2 A Chairs scrape.
3 A Six figures face off across spilled whiskey.
4 A ¶ SHERIFF BOONE (50s) draws.
5 A RED CALLOWAY (30s) draws.
6 A A bartender, MOSES FULLER (60s), ducks.
7 A A schoolteacher, MISS ELOISE TRASK (30s), screams.
8 A A drunk, LEFTY OBREGON (40s), laughs.
9 A A boy piano player, SILAS CROFT (12), freezes with one finger on a key.
10 D BOONE: Drop it, Red.
11 D ^RED: You drop yours.
12 D MOSES: Not in my bar!
13 D ELOISE: Please!
14 D LEFTY (laughing): Do it!
15 A ¶ Silas presses the key.
16 A A single note rings out.
17 A All six flinch.
18 A Nobody fires.
19 T FADE OUT.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01256.json
### SCENE s01256 | INT. UNIVERSITY BOATHOUSE - ERG ROOM - 5 A.M.
Detected names (may be incomplete or contain aliases): COACH NADEZHDA PROKOFIEVA, LEO, ARMSTRONG-DIOP, STRANGER, SCARLET UNIFORM, KOFI
1 A ¶ A long low room of rowing machines in rows.
2 A Windows fogged.
3 A A whiteboard with names and splits.
4 A The air smells of rubber and sweat.
5 A ¶ Two rowers sit at adjacent machines, cooling down.
6 A COACH NADEZHDA PROKOFIEVA (50s, tracksuit, thermos, calm as a stopwatch) stands at the whiteboard capping a marker.
7 A ¶ LEOPOLD "LEO" ARMSTRONG-DIOP (20s, stroke seat, shoulders like a door) wipes his face with a towel and doesn't speak.
8 A ¶ The other rower, a stranger to the room, rests his hands on his knees.
9 A A STRANGER IN A SCARLET UNIFORM (20s, rival college crest, lean and quiet).
10 D NADEZHDA: Leo. Splits.
11 D LEO: Two-oh-one.
12 D NADEZHDA: Pace?
13 D LEO: Thirty-two.
14 D NADEZHDA: Good.
15 A ¶ She writes it.
16 A Leo glances at the Stranger, who has not looked up since he sat down.
17 D LEO: Coach, who's this?
18 D NADEZHDA: A guest.
19 D LEO: Guest of who?
20 D NADEZHDA: Of me.
21 A ¶ Leo's eyes narrow.
22 A The Stranger lifts his head, finally.
23 A He has an easy, friendly face.
24 D STRANGER: Morning.
25 D LEO: You're from Harlow.
26 D STRANGER: I'm from a lot of places.
27 D LEO: Your kit says Harlow.
28 D STRANGER: It's a good kit.
29 A ¶ Nadezhda caps the marker, sets it in the tray, and takes a sip from her thermos.
30 A She has the air of a woman watching two dogs decide whether to be friends.
31 D NADEZHDA: Leo, this is Kofi. He rows for Harlow. He's transferring.
32 D LEO: Transferring where?
33 D NADEZHDA: Here.
34 A ¶ A silence.
35 A Leo lowers the towel slowly.
36 A He looks at the whiteboard, at the splits.
37 A His name is at the top.
38 A Under it is another name, written in a different hand and wiped out.
39 D KOFI: Don't worry. I'm not here for your seat.
40 D LEO: Then what are you here for?
41 D KOFI: Seven seat. I row in the middle.
42 D LEO: We have a seven seat.
43 D KOFI: You have a seven seat that can't hold a pace.
44 D LEO: That's Marcus. He's my roommate.
45 D KOFI: I know. I'm sorry.
46 A ¶ Leo gets up.
47 A The erg handle slides back with a clack.
48 A He stands in front of the Stranger, jaw working.
49 A Kofi stays seated, hands still.
50 D NADEZHDA: Sit down, Leo.
51 D LEO: I'm fine.
52 D NADEZHDA: Sit down.
53 A ¶ He sits.
54 A The machine sighs.
55 A Outside, geese take off from the river in a bark of wings.
56 D LEO (low): Does Marcus know?
57 D NADEZHDA: Marcus knows.
58 D LEO: When did he find out?
59 D NADEZHDA: Yesterday.
60 D LEO: He didn't say.
61 D NADEZHDA: He asked me not to let you hear it from him.
62 A ¶ Leo shuts his eyes.
63 A Draws a long breath through his nose.
64 A Wipes his face with the towel, then wipes it again, though there's nothing left to wipe.
65 A ¶ Kofi leans forward.
66 D KOFI: I'd rather have rowed beside him, honestly.
67 D LEO (without opening his eyes): Don't.
68 D KOFI: I mean it.
69 D LEO: I said don't.
70 A ¶ Nadezhda crosses to the nearest erg and takes a seat.
71 A She straps in her feet.
72 A She looks like she means to row.
73 D NADEZHDA: Both of you. Twenty minutes. Steady state. Twenty-two.
74 D LEO: Coach...
75 D NADEZHDA: That's not a request.
76 A ¶ Leo opens his eyes.
77 A Looks at Kofi.
78 A Kofi holds the look, and then, slowly, offers a hand.
79 A Leo looks at the hand.
80 A Takes it.
81 A They shake once, stiff, like men sealing a bad bargain.
82 D KOFI: Twenty-two?
83 D LEO: Twenty-two.
84 A ¶ They turn to their machines and begin to row.
85 A The chains whir.
86 A The fly wheels whisper.
87 A Nadezhda pulls her first stroke, then settles into the rhythm.
88 D NADEZHDA (softly, as if to herself): Better.
89 T FADE OUT.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01257.json
### SCENE s01257 | EXT. VINEYARD TERRACE - EVENING
Detected names (may be incomplete or contain aliases): CAMILLE ROUSSEAU-ADEBAYO, JOSEPHINE LIND
1 A ¶ Late sun slants across rows of vines.
2 A Cicadas.
3 A A stone table under a pergola, two glasses of rosé sweating on a linen cloth.
4 A ¶ CAMILLE ROUSSEAU-ADEBAYO (30s, linen shirt, bare feet) sits sideways on a bench, one knee drawn up.
5 A Opposite her, JOSEPHINE LIND (30s, wide straw hat, sunglasses pushed up into her hair) turns the stem of her glass between two fingers.
6 A ¶ Neither has spoken for a long time.
7 A The light moves a finger's width across the cloth.
8 D CAMILLE: You're quiet.
9 D JOSEPHINE: I'm looking.
10 D CAMILLE: At what?
11 D JOSEPHINE: At her, the way she sits. I forgot she did that.
12 D CAMILLE: Did what?
13 A ¶ Josephine smiles at the vines, not at Camille.
14 A A breeze lifts the corner of the cloth and lets it fall.
15 D JOSEPHINE: Nothing.
16 A ¶ Camille reaches out and straightens the cloth.
17 A Her fingers brush Josephine's, and neither moves them away.
18 T FADE OUT.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01258.json
### SCENE s01258 | INT. SAFE HOUSE - WAREHOUSE LOFT - NIGHT
Detected names (may be incomplete or contain aliases): DOMINIKA SZCZEPA, SKA-REYES, OTIS WHITLOW, KALINDA RAINEY, TEODOR VASILESCU, MAXIMILLIAN HOLT
1 A ¶ A raw concrete loft above a shuttered print shop.
2 A Plastic sheeting over broken windows.
3 A A table with a laptop, four phones, and an open pizza box.
4 A A single lamp.
5 A Rain hammers the tin roof.
6 A ¶ FIVE PEOPLE sit around the table.
7 A The mood is brittle.
8 A ¶ DOMINIKA SZCZEPAŃSKA-REYES (40s, team leader, silver streak in black hair) paces the room with a phone against her chest.
9 A ¶ OTIS WHITLOW (50s, tech, cardigan over body armour) stares at the laptop screen.
10 A ¶ KALINDA RAINEY (30s, field agent, torn jacket, bandaged hand) sits on the table's edge, swinging a boot.
11 A ¶ TEODOR VASILESCU (30s, driver, nervous, cigarette cupped in his palm) keeps checking the window.
12 A ¶ And in the corner on a wooden chair, hands zip-tied behind him, sits MAXIMILLIAN HOLT (60s, tailored suit, torn at the knees).
13 A His face is calm, as if he were waiting for a train.
14 D DOMINIKA: Otis. How long?
15 D OTIS: Four minutes. Maybe five.
16 D DOMINIKA: Maybe?
17 D OTIS: The uplink's unstable.
18 D KALINDA: They'll be here before it finishes.
19 D OTIS: They won't.
20 D KALINDA: They will.
21 D TEODOR (from window): Headlights. Two blocks.
22 D DOMINIKA: Whose?
23 D TEODOR: Don't know.
24 D DOMINIKA: Teodor, whose?
25 D TEODOR: I can't see! The rain!
26 A ¶ Dominika crosses to the window in three strides.
27 A Teodor makes room.
28 A She presses her forehead to the glass.
29 A A pair of white lights crawls along the wet street.
30 A Stops.
31 A Cuts out.
32 D DOMINIKA: Parked.
33 D KALINDA: They're early.
34 D DOMINIKA: They're patient.
35 D MAXIMILLIAN (from corner, mild): They're my friends.
36 A ¶ All heads turn.
37 A He gives a small, pleasant smile.
38 D MAXIMILLIAN [CONT'D]: They've been very patient with me. Longer than you, Dominika.
39 D DOMINIKA: Shut him up.
40 D KALINDA: With what?
41 D DOMINIKA: Anything.
42 A ¶ Kalinda rummages in her jacket.
43 A Finds a roll of tape.
44 A Strides across the loft, tears a strip, and presses it over his mouth.
45 A His smile continues beneath the tape, visible in the eyes.
46 D OTIS: Three minutes.
47 D TEODOR: Boss, what do we do if it's them?
48 D DOMINIKA: We don't open.
49 D TEODOR: They'll break the door.
50 D DOMINIKA: Then we are not here.
51 D KALINDA: We're very much here.
52 D DOMINIKA: We are leaving.
53 D OTIS: I can't leave. The transfer.
54 D DOMINIKA: Then finish it. Kalinda, you're with Otis. Teodor, the van, engine on, lights off.
55 D TEODOR: And him?
56 D DOMINIKA: He comes.
57 D TEODOR: Boss, he's a hostage. We take him out the back, they'll see.
58 D DOMINIKA: He's not a hostage, Teodor. He's insurance.
59 A ¶ On the chair, Maximilian's eyebrows lift.
60 D KALINDA (to Maximilian): Don't look so pleased.
61 D OTIS: Two minutes. I'm at ninety percent.
62 D DOMINIKA: Where's the flash drive?
63 D OTIS: In the pizza box.
64 D DOMINIKA: You put it in the pizza box?
65 D OTIS: They never look in the pizza box.
66 D DOMINIKA: Otis!
67 D OTIS: It's worked before!
68 A ¶ She snatches the box.
69 A Flips the lid.
70 A Under the congealed cheese lies a thumb drive in a sandwich bag.
71 A She holds it up.
72 A A flicker of grim approval crosses her face.
73 D DOMINIKA: Fine.
74 A ¶ A thump on the stairs.
75 A Then another.
76 A Everyone freezes.
77 A Dominika puts her finger to her lips.
78 A Footsteps climb, slow, unhurried.
79 D TEODOR (whispering): That's them.
80 D KALINDA (whispering): That's one of them.
81 D DOMINIKA (whispering): Otis.
82 D OTIS (whispering): Ninety-eight.
83 A ¶ The footsteps stop at the door.
84 A A polite knock.
85 A Three times.
86 A ¶ Behind the tape, Maximilian closes his eyes, relieved.
87 A ¶ Dominika raises her pistol and aims at the door.
88 D DOMINIKA (whispering): Teodor. Back stairs.
89 D TEODOR: Boss...
90 D DOMINIKA: Go.
91 T FADE OUT.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01259.json
### SCENE s01259 | INT. VICTORIAN NURSERY - NIGHT
Detected names (may be incomplete or contain aliases): PENELOPE ASHWORTH, BRIDGET OLDACRE
1 A ¶ A tall, narrow room at the top of a stair.
2 A Gaslight burns low.
3 A A rocking horse, a dollhouse, a cradle with its hood drawn forward.
4 A The wallpaper is a pattern of faded roses.
5 A A window rattles in its frame.
6 A ¶ MRS. PENELOPE ASHWORTH (40s, grey silk, a bunch of keys at her waist) stands in the doorway holding a candle.
7 A Behind her, her stern-faced maid, BRIDGET OLDACRE (20s, white cap, apron), clutches a coal scuttle.
8 D PENELOPE: Bridget, did you wind the music box?
9 D BRIDGET: No, ma'am.
10 D PENELOPE: Then who did?
11 A ¶ A tinkling melody drifts from the cradle.
12 A The hood is drawn forward.
13 A Neither woman moves.
14 D BRIDGET: It's the draught, ma'am.
15 D PENELOPE: There is no draught, Bridget.
16 A ¶ The tune slows.
17 A Stumbles.
18 A A tiny creak as the cradle rocks once.
19 D BRIDGET (whispering): Ma'am, the baby's been in the churchyard since March.
20 D PENELOPE: I know it.
21 A ¶ She steps forward.
22 A The candle gutters.
23 A The rocking stops.
24 D PENELOPE [CONT'D] (softly): Hush, my darling. Mother's here.
25 A ¶ The hood of the cradle lifts, ever so slightly, from within.
26 T CUT TO BLACK.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01260.json
### SCENE s01260 | INT. INTERROGATION ROOM - NIGHT
Detected names (may be incomplete or contain aliases): LIEUTENANT ISIDORE MCALLISTER-KANE, BENEDEK VARGA
1 D LIEUTENANT ISIDORE MCALLISTER-KANE: Your alibi has a hole in it, Mr. Varga.
2 D BENEDEK VARGA: Everyone's alibi has a hole in it, Lieutenant.
3 D LIEUTENANT ISIDORE MCALLISTER-KANE: Mine doesn't.
4 D BENEDEK VARGA: You haven't been asked.
5 D LIEUTENANT ISIDORE MCALLISTER-KANE: You say you were at the cinema.
6 D BENEDEK VARGA: I was at the cinema.
7 D LIEUTENANT ISIDORE MCALLISTER-KANE: The ticket stub is dated Tuesday.
8 D BENEDEK VARGA: Then I went on Tuesday.
9 D LIEUTENANT ISIDORE MCALLISTER-KANE: The robbery was on Wednesday.
10 D BENEDEK VARGA: Then I was somewhere else on Wednesday.
11 D LIEUTENANT ISIDORE MCALLISTER-KANE: Where?
12 D BENEDEK VARGA: I'd have to think.
13 D LIEUTENANT ISIDORE MCALLISTER-KANE: Think out loud.
14 D BENEDEK VARGA: My mother's. She makes goulash on Wednesdays.
15 D LIEUTENANT ISIDORE MCALLISTER-KANE: Your mother died in March.
16 D BENEDEK VARGA: So she did.
17 D LIEUTENANT ISIDORE MCALLISTER-KANE: Mr. Varga.
18 D BENEDEK VARGA: Lieutenant.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01261.json
### SCENE s01261 | INT. LAUNDROMAT PAYPHONE ALCOVE - NIGHT
Detected names (may be incomplete or contain aliases): KENDRA ABERNATHY-VOSS, FATHER
1 A ¶ Humming dryers.
2 A A bank of washers behind a glass wall.
3 A A payphone on a tile wall, its cord scarred by years of nervous fingers.
4 A ¶ KENDRA ABERNATHY-VOSS (30s, hospital badge on a lanyard, hair wet from the rain) feeds coins into the slot.
5 A She dials with trembling care.
6 A ¶ The phone rings twice.
7 A A click.
8 D FATHER [V.O.] (through the receiver, gruff): Yeah.
9 D KENDRA: Dad. It's me.
10 D FATHER [V.O.]: Kendra. Thought you'd be asleep.
11 D KENDRA: I'm on nights this week.
12 D FATHER [V.O.]: Right. Right, nights. They work you too hard.
13 D KENDRA: It's fine.
14 D FATHER [V.O.]: You eating?
15 D KENDRA: Yes.
16 D FATHER [V.O.]: Real food?
17 D KENDRA: Dad.
18 D FATHER [V.O.]: Okay, okay.
19 A ¶ Silence.
20 A On the line, a television murmurs in another room.
21 A She winds the metal cord around her finger until the tip turns white.
22 D KENDRA: How's Mom?
23 D FATHER [V.O.]: She's good. Good. She's in bed.
24 D KENDRA: She sleeping?
25 D FATHER [V.O.]: She's, uh. Yeah. She's sleeping.
26 D KENDRA: Dad.
27 D FATHER [V.O.]: What?
28 D KENDRA: You're doing the voice.
29 D FATHER [V.O.]: What voice?
30 D KENDRA: The one you used when Buster died.
31 A ¶ A long pause on the line.
32 A The television fades out.
33 A Then a breath, shaky.
34 D FATHER [V.O.]: Honey, I was going to call you.
35 D KENDRA: When?
36 D FATHER [V.O.]: In the morning. After you slept.
37 A ¶ Kendra rests her forehead against the cold tile.
38 A A dryer buzzes behind her.
39 A She doesn't turn.
40 D KENDRA: What time?
41 D FATHER [V.O.]: About nine o'clock. Just after the nurses.
42 D KENDRA: I'm coming.
43 D FATHER [V.O.]: Honey, there's nothing to...
44 D KENDRA: I'm coming, Dad.
45 A ¶ She hangs the receiver on its hook, very gently, as though it were asleep.
46 A Stands there a long moment.
47 A Then she goes to the glass wall, opens a dryer, and starts folding warm towels one by one.
48 T FADE OUT.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01262.json
### SCENE s01262 | INT. PENGUIN HOUSE - ZOO - MORNING
Detected names (may be incomplete or contain aliases): TIMBO, OKAFOR, PRUDHOMME LAVOIE, GRETA SOLBERG, ANAND BHATT, BEATA KWIATKOWSKA, WILFRED PARRY
1 A ¶ A glass-walled enclosure of artificial ice and real fish smell.
2 A Six keepers in waders jostle around a bucket of herring.
3 A The penguins watch from a rock like a jury.
4 A ¶ TIMOTHY "TIMBO" OKAFOR (40s, head keeper) hands out gloves.
5 A His assistant PRUDHOMME LAVOIE (30s, clipboard) counts birds.
6 A Trainee GRETA SOLBERG (20s, notebook) takes notes.
7 A Veterinarian DR. ANAND BHATT (50s, stethoscope) squints at a limping bird.
8 A Cleaner BEATA KWIATKOWSKA (60s, mop, headphones) hums.
9 A Intern WILFRED PARRY (19, enormous boots) holds the bucket upside down.
10 D TIMBO: Wilfred, the bucket.
11 D WILFRED: Sorry, Timbo.
12 A ¶ He rights it.
13 A Herring slides across the floor.
14 A Three penguins launch themselves after it.
15 D PRUDHOMME: That's thirty-one.
16 D GRETA: Thirty-two.
17 D PRUDHOMME: Thirty-one.
18 D ANAND: Thirty, plus the one on Beata's boot.
19 A ¶ Beata looks down.
20 A A penguin stands on her boot, staring up.
21 A She lifts her headphones, nods to it, puts them back, and goes on mopping.
22 D TIMBO: Dr. Bhatt, the limp?
23 D ANAND: It's a sulk.
24 D TIMBO: A sulk?
25 D ANAND: He wants the rock the other one has.
26 D GRETA (writing): Sulk. Rock. Other one.
27 A ¶ They all look at the rock.
28 A A fat penguin sits on it, smug, wings folded behind it like an old man at a bus stop.
29 D WILFRED: I'll swap them.
30 D TIMBO: No!
31 A ¶ Too late.
32 A Wilfred wades in.
33 A Penguins scatter.
34 A The sulker slips onto the rock.
35 A The fat one slides off and lands on Wilfred's boot.
36 A Everyone sighs.
37 T FADE OUT.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01263.json
### SCENE s01263 | INT. PLANETARIUM - DOME THEATRE - NIGHT
Detected names (may be incomplete or contain aliases): LAVINIA MORROW-ESPOSITO, ELIAN TREMAINE
1 A ¶ A hushed circular hall.
2 A Rows of reclining seats fan out toward a central projector like a black beetle.
3 A Overhead, a star field turns slowly on the white dome, thousands of points of light so soft they seem to breathe.
4 A The air smells of carpet and warm dust.
5 A ¶ Rows of empty seats.
6 A Not quite empty.
7 A ¶ At the lectern at the front stands LAVINIA MORROW-ESPOSITO (30s, astronomer, wool cardigan, a laser pointer lit in her hand).
8 A She is rehearsing.
9 A She has done this speech a hundred times and has never said it right.
10 A ¶ In the back row, half in shadow, sits ELIAN TREMAINE (30s, night guard, flashlight dark in his lap).
11 A He came in to check the doors and stayed.
12 D LAVINIA (to the empty seats): Good evening, everyone. Welcome to the Southern Sky.
13 A ¶ She sweeps the laser over the dome.
14 A A red dot dances among the stars.
15 D LAVINIA [CONT'D] (to the empty seats): If you look up now, you'll see the constellation we call the Southern Cross.
16 A ¶ She stops.
17 A Lowers the pointer.
18 A Mutters.
19 D LAVINIA [CONT'D] (muttering): Too slow. They'll be asleep by the third star.
20 D ELIAN (from the dark): I wasn't.
21 A ¶ She jumps.
22 A The laser skitters across the dome.
23 A He half stands, flashlight raised like a white flag.
24 D ELIAN [CONT'D]: Sorry. I didn't mean to scare you.
25 D LAVINIA: How long have you been there?
26 D ELIAN: Since Orion.
27 D LAVINIA: That's the second slide.
28 D ELIAN: Is it?
29 D LAVINIA (drily): Then you've missed the introduction.
30 D ELIAN: I liked what I heard.
31 A ¶ She studies him: the grey uniform, the badge, the way he sits with his knees turned out, careful of the seat in front.
32 A He does not look like a man who has ever been in the way.
33 D LAVINIA: I'm supposed to give this to a hundred schoolchildren tomorrow.
34 D ELIAN: You'd be good at that.
35 D LAVINIA: You haven't heard me.
36 D ELIAN: I've heard enough.
37 A ¶ She almost smiles.
38 A Taps the lectern with the pointer.
39 A The stars drift.
40 D LAVINIA: Would you stay?
41 D ELIAN: For the rehearsal?
42 D LAVINIA: For the audience.
43 A ¶ He sits back.
44 A Lays the flashlight on the carpet.
45 D ELIAN: Go ahead.
46 A ¶ She faces the dome.
47 A Takes a long breath.
48 A Her voice, when it comes, is lower, slower, as though she were speaking to a single person.
49 D LAVINIA (to the dome): Good evening. Tonight we begin with a very old idea. That what you see up there is not above you but behind you.
50 D ELIAN (softly): Behind?
51 D LAVINIA (to Elian): The light you're looking at left its star before you were born. Some of it before anyone was born.
52 D ELIAN: So it's gone.
53 D LAVINIA: The star may be gone. The light isn't.
54 A ¶ A silence.
55 A The dome turns.
56 A A faint wash of blue drifts across their faces.
57 D LAVINIA [CONT'D] (to herself, barely): Say it. Just say it.
58 D ELIAN: What?
59 D LAVINIA: Nothing.
60 D ELIAN: You were talking to yourself.
61 D LAVINIA: It's a bad habit.
62 D ELIAN: It's a nice one.
63 A ¶ She steps out from behind the lectern.
64 A Walks up the aisle between the seats, the laser dark in her hand, until she is two rows from him.
65 A The dome throws pale constellations over her cardigan.
66 D LAVINIA: Do you know what I do, in the daytime?
67 D ELIAN: I'm guessing you look at things.
68 D LAVINIA: I look at light that's already too late.
69 D ELIAN: That sounds lonely.
70 D LAVINIA: It's the best part of the job.
71 A ¶ He smiles, a little crooked.
72 A She sits down in the row in front of his.
73 A Not beside.
74 A Not far.
75 D LAVINIA [CONT'D] (to the dome): Good evening, and welcome.
76 A ¶ Elian reclines.
77 A Folds his hands over his stomach.
78 A Looks up at the stars, and she looks up with him, and the two of them watch the sky wheel in the dark without saying anything.
79 T FADE OUT.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01264.json
### SCENE s01264 | INT. CLOCKMAKER'S SHOP - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR BARNABAS HOLLOWAY, CLOCKMAKER, ROSALIND PEEL, STRANGER, WINIFRED
1 A ¶ Ticking, everywhere.
2 A Cuckoos, grandfathers, carriage clocks.
3 A A workbench lit by a green lamp.
4 A The window shows an empty street slick with rain.
5 A ¶ INSPECTOR BARNABAS HOLLOWAY (50s, trench coat) stands over a body: the CLOCKMAKER (70s, apron, eyes open) lying beside the bench.
6 A ¶ A young constable, ROSALIND PEEL (20s, notebook), hovers near the door.
7 A ¶ A woman in a pearl-grey raincoat steps in, shaking her umbrella.
8 A A STRANGER (30s, calm eyes).
9 D STRANGER: Inspector.
10 D HOLLOWAY: Who let you in?
11 D STRANGER: The door was open.
12 D ROSALIND: It wasn't, sir.
13 D HOLLOWAY: Name.
14 D STRANGER: Winifred.
15 D HOLLOWAY: Winifred what?
16 D STRANGER: Winifred Arkwright. His niece.
17 D ROSALIND: He had no niece.
18 D WINIFRED: He had me.
19 A ¶ Holloway crouches by the body.
20 A The clocks tick on.
21 A Rosalind scribbles.
22 D HOLLOWAY: Time of death?
23 D ROSALIND: Eleven-twelve, sir. The big clock stopped.
24 D HOLLOWAY: Stopped?
25 D WINIFRED: Someone stopped it.
26 D HOLLOWAY: You'd know, would you?
27 D WINIFRED: I would.
28 A ¶ Holloway looks up.
29 A The woman is smiling faintly.
30 A Rosalind frowns, then stares at the grandfather clock.
31 A Its hands read eleven-twelve.
32 A Its pendulum swings.
33 D ROSALIND: Sir. It's running.
34 D HOLLOWAY: Then it was reset.
35 D WINIFRED: By me.
36 A ¶ A silence.
37 A Rosalind's hand drifts to her whistle.
38 A Holloway rises slowly.
39 D HOLLOWAY: Miss Arkwright.
40 D WINIFRED: Inspector.
41 D HOLLOWAY: You wouldn't be telling me you did this.
42 D WINIFRED: No. I'm telling you what he told me.
43 D HOLLOWAY: Who?
44 D WINIFRED: The clocks.
45 A ¶ Every clock in the room chimes at once.
46 A Rosalind jumps.
47 A Holloway doesn't.
48 T FADE OUT.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01265.json
### SCENE s01265 | INT. PAWNSHOP - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE MARLOWE-DIAZ, SOLOMON ABRAMS, TIPPER JOHNSON, CLEO, DUBOIS, VICTOR STANHOPE
1 A ¶ Cluttered shelves.
2 A Guitars hang from the ceiling.
3 A A glass counter.
4 A A cage separates the till.
5 A ¶ DETECTIVE MARLOWE-DIAZ (40s, rumpled raincoat) leans on the counter.
6 A Behind it, the owner, SOLOMON ABRAMS (60s, green eyeshade), polishes a watch.
7 A By the guitars stands TIPPER JOHNSON (20s, nervous, hands in his pockets).
8 A In the corner, a woman in a red scarf, CLEOPATRA "CLEO" DUBOIS (30s, calm), examines a ring.
9 D DET. MARLOWE-DIAZ: Evening, Solomon.
10 D SOLOMON: Detective.
11 D DET. MARLOWE-DIAZ: Heard you got a delivery.
12 D SOLOMON: I get many.
13 A ¶ The door chimes.
14 A A tall man in a trench coat enters, dripping: VICTOR STANHOPE (50s, silver hair, soft hat).
15 A He tips the hat to nobody.
16 D VICTOR: Gentlemen. Lady.
17 D MARLOWE-DIAZ: Mr. Stanhope. Out late.
18 D VICTOR: Always.
19 D TIPPER (whispering): That's him.
20 A ¶ Cleo sets down the ring.
21 A Solomon sets down the watch.
22 A Nobody moves.
23 D MARLOWE-DIAZ (quietly): Tipper. Who?
24 D TIPPER: Nobody.
25 D CLEO (to Victor): You're early.
26 D VICTOR: So are you.
27 A ¶ Marlowe-Diaz looks from one to the other, then at the safe behind the counter.
28 A The lock gleams.
29 T FADE OUT.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01266.json
### SCENE s01266 | INT. OBSERVATORY LIBRARY - NIGHT
Detected names (may be incomplete or contain aliases): PROFESSOR ALISTAIR GREYSON-MBEKI, INSPECTOR LENORE QUIGLEY-ABARA, PRUNELLA DOUGHTY
1 A ¶ A circular room beneath a copper dome, shelves climbing in tiers around a wrought-iron gallery.
2 A A rolling ladder on a brass track.
3 A A reading table, a green banker's lamp, a half-drunk glass of sherry.
4 A A body-sized shape of dust where a rug has been recently pulled aside.
5 A ¶ PROFESSOR ALISTAIR GREYSON-MBEKI (60s, tweed jacket, bow tie) lies on the floor, face turned toward the dome.
6 A His eyes are open.
7 A A small wooden stool tilts nearby, one leg snapped.
8 A ¶ INSPECTOR LENORE QUIGLEY-ABARA (40s, black wool coat, notebook) crouches at his shoulder, gloved fingers hovering over his collar.
9 A Behind her, in the doorway, stands the housekeeper MRS. PRUNELLA DOUGHTY (60s, apron, white curls, hands clasped tight), who is trying not to look.
10 D QUIGLEY-ABARA: When did you find him?
11 D PRUNELLA: Half past nine, Inspector. I came in to turn down the lamp.
12 D QUIGLEY-ABARA: And the door?
13 D PRUNELLA: Open. Always open. He hates a closed door.
14 A ¶ Quigley-Abara stands.
15 A Walks the circumference of the room slowly, trailing a hand along the shelves.
16 A At the ladder she stops, tests the brass track with a thumbnail, and lifts a smear of something pale.
17 D QUIGLEY-ABARA: Chalk.
18 D PRUNELLA: For the blackboard.
19 D QUIGLEY-ABARA: There's no blackboard in this room.
20 D PRUNELLA: No. I suppose there isn't.
21 A ¶ The Inspector turns.
22 A Prunella has moved a little way into the room, and now stands with one hand on the reading table, steadying herself.
23 A The other hand has found the sherry glass and turned it a quarter turn to hide a lipstick mark on its rim.
24 D QUIGLEY-ABARA: Mrs. Doughty.
25 D PRUNELLA: Yes, Inspector?
26 D QUIGLEY-ABARA: Do you take sherry?
27 D PRUNELLA: Never.
28 D QUIGLEY-ABARA: That's your shade of pink, though.
29 A ¶ Prunella's mouth works.
30 A Slowly she lifts her chin, as if resolving to be brave about something she hasn't yet been accused of.
31 D PRUNELLA: He asked me to sit with him.
32 D QUIGLEY-ABARA: Did he?
33 D PRUNELLA: Last night. It was his birthday. He had no one.
34 D QUIGLEY-ABARA: And you drank sherry together.
35 D PRUNELLA: One glass.
36 D QUIGLEY-ABARA: And then?
37 D PRUNELLA: And then I went to bed.
38 D QUIGLEY-ABARA: And he climbed the ladder, in the dark, at seventy-one, to reach the Almagest.
39 D PRUNELLA: He always did that.
40 D QUIGLEY-ABARA: Not with a stool.
41 A ¶ She crosses to the broken stool and rights it.
42 A Looks at the snapped leg: the wood is white and fresh, with a clean diagonal where a saw has been.
43 D QUIGLEY-ABARA [CONT'D]: That's not a fall.
44 D PRUNELLA (very quietly): No.
45 D QUIGLEY-ABARA: Who sawed it?
46 D PRUNELLA: I did.
47 A ¶ The Inspector does not move.
48 A The lamp hums.
49 A In the high copper dome, the wind lifts a flap of loose metal and lets it fall with a soft clang.
50 D PRUNELLA [CONT'D]: He was going to sell the telescope.
51 D QUIGLEY-ABARA: To whom?
52 D PRUNELLA: To a man who'd put it in a hotel lobby.
53 D QUIGLEY-ABARA: And that was cause enough.
54 D PRUNELLA: Forty years I've polished that brass.
55 A ¶ She sits down on the reading chair.
56 A Smooths her apron.
57 A Folds her hands.
58 A Quigley-Abara closes the notebook, comes round the table, and takes the sherry glass by its stem.
59 A She sets it in an evidence bag.
60 A The sound of the bag zip is very loud.
61 D QUIGLEY-ABARA: Thank you, Mrs. Doughty.
62 D PRUNELLA: Will there be tea?
63 D QUIGLEY-ABARA: There will be tea.
64 T FADE OUT.

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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01268.json
### SCENE s01268 | INT. WEDDING RECEPTION - RIVERBOAT BALLROOM - NIGHT
Detected names (may be incomplete or contain aliases): IMANI LOCKHART-DEVEREUX, FERNANDO CASTELLANOS, DONA GLORIA CASTELLANOS, UNCLE ABEL
1 A ¶ Paper lanterns sway on a gilded deck.
2 A A band plays under strung lights.
3 A Champagne flutes shiver on a long white table.
4 A ¶ Four guests huddle near the cake: the bride's sister IMANI LOCKHART-DEVEREUX (30s, bridesmaid, sage-green dress), her ex-boyfriend FERNANDO CASTELLANOS (30s, best man, too-tight tie), his mother DONA GLORIA CASTELLANOS (60s, black lace, fan in hand), and an elderly cousin, UNCLE ABEL (70s, braces, cane).
5 A ¶ Imani and Fernando stand a pace apart, the way people do when they have both rehearsed a speech and forgotten it.
6 D IMANI: You look well.
7 D FERNANDO: You look... green.
8 D IMANI: It's sage.
9 A ¶ Gloria snaps her fan open.
10 A Abel leans heavily on his cane and squints at the cake.
11 A Imani and Fernando both reach for the same champagne flute, their fingers meeting on the stem.
12 A They freeze.
13 A The band hits a slow chord.
14 D FERNANDO: After you.
15 D IMANI: After you.
16 A ¶ Gloria and Abel exchange a glance, shuffle to opposite sides of the cake, and, as if on cue, begin to cut it, passing the knife between them with elaborate ceremony.
17 T FADE OUT.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01269.json
### SCENE s01269 | INT. GLOBEX HOLDINGS - OPEN-PLAN OFFICE - MORNING
Detected names (may be incomplete or contain aliases): HORATIO PEMBERTON-ADEYEMI, CORDELIA VANTERPOOL-OKONKWO, REGGIE FITZWILLIAM, BRIGITTE SOLANKI, DEZ, OKAMOTO, IT, INTERCOM, BARNABY CRANSTON-LEE, VP
1 A ¶ A sea of beige cubicles under a drop ceiling.
2 A A motivational poster of a rowing eight hangs crooked above the water cooler.
3 A A sign: SYNERGY IS OUR MIDDLE NAME.
4 A ¶ Five employees stand at their desks, holding paper cups of lukewarm coffee, waiting.
5 A ¶ HORATIO PEMBERTON-ADEYEMI (50s, manager, short-sleeve shirt, tie clip like a tiny sword) clears his throat by the whiteboard.
6 A ¶ CORDELIA VANTERPOOL-OKONKWO (30s, senior analyst, silent, immaculate) stirs her coffee without drinking it.
7 A ¶ REGGIE FITZWILLIAM (40s, sales, loud shirt, over-whitened teeth) sprawls on the corner of a desk.
8 A ¶ BRIGITTE SOLANKI (20s, HR coordinator, lanyard heavy with badges) clutches a binder.
9 A ¶ DESMOND "DEZ" OKAMOTO (30s, IT, headphones round his neck, three days' growth) leans against a filing cabinet, unimpressed.
10 A ¶ Overhead, a speaker crackles.
11 D INTERCOM [V.O.] (female, bright): Good morning, Globex! A reminder that today is Casual Friday, and also Mandatory Fun Day.
12 D HORATIO (to the room): Okay, team. Quick huddle.
13 D REGGIE: We are huddled.
14 D HORATIO: Properly huddled.
15 D CORDELIA: We're standing four feet apart.
16 D HORATIO: Three, please.
17 A ¶ They shuffle a foot closer.
18 A Brigitte raises her binder like a shield.
19 A Dez rolls his eyes.
20 D HORATIO [CONT'D]: As you know, Corporate has asked us to find twelve percent in efficiencies.
21 D REGGIE: Twelve?
22 D BRIGITTE: It's in the memo.
23 D REGGIE: There's a memo?
24 D DEZ: There's always a memo.
25 D HORATIO: I want to be clear: nobody is being let go.
26 D CORDELIA: Good.
27 D HORATIO: Today.
28 A ¶ A silence.
29 A The intercom clicks.
30 D INTERCOM [V.O.] (female, bright): Reminder: the Efficiency Pizza Party begins at noon in the Collaboration Zone!
31 D BRIGITTE (muttering): Efficiency Pizza.
32 D HORATIO: What was that, Brigitte?
33 D BRIGITTE: Nothing. Nothing at all.
34 D HORATIO: Because if there's something you'd like to share with the group...
35 D BRIGITTE: I'd like to share that I've been here six years and I still don't know what we do.
36 A ¶ Nobody laughs.
37 A Reggie's grin falters.
38 A Dez takes his headphones from around his neck and puts them on.
39 A Cordelia sets her coffee down on the desk with a click.
40 D CORDELIA: We process claims.
41 D BRIGITTE: Which claims?
42 D CORDELIA: Claims.
43 D HORATIO: Let's not go off-topic.
44 D REGGIE: I sell the claims. I think.
45 D DEZ (removing one earphone): You sell the claims? To whom?
46 D REGGIE: To people who have claims.
47 D DEZ: People with claims don't need to buy claims.
48 D REGGIE: Dez, buddy, you don't understand sales.
49 D DEZ: I understand there's no product.
50 A ¶ A new figure appears at the end of the aisle.
51 A A tall man in an immaculate grey suit, hair slicked back, folder under one arm.
52 A MR. BARNABY CRANSTON-LEE (50s, regional VP, eyes like glass).
53 A The room freezes.
54 D CRANSTON-LEE: Don't stop on my account.
55 D HORATIO: Mr. Cranston-Lee! We didn't expect you.
56 D CRANSTON-LEE: That is the point of the visit.
57 A ¶ He walks down the aisle.
58 A His shoes click.
59 A He stops by Cordelia's desk and picks up her coffee.
60 A Sniffs.
61 A Sets it down.
62 D CRANSTON-LEE [CONT'D]: Lukewarm.
63 D CORDELIA: It's been a long morning.
64 D CRANSTON-LEE: Of course it has.
65 A ¶ He opens the folder.
66 A Takes out a single sheet of paper.
67 A Holds it up.
68 D CRANSTON-LEE [CONT'D]: Twelve percent.
69 D REGGIE: We were just discussing...
70 D CRANSTON-LEE: I know what you were discussing. Brigitte. How many years?
71 D BRIGITTE: Six, sir.
72 D CRANSTON-LEE: Dez.
73 D DEZ: Four.
74 D CRANSTON-LEE: Cordelia.
75 D CORDELIA: Nine.
76 D CRANSTON-LEE: Reggie.
77 D REGGIE: Fifteen! Fifteen glorious years, sir!
78 D CRANSTON-LEE: Horatio.
79 D HORATIO (swallowing): Twenty-two.
80 D CRANSTON-LEE: Twenty-two years. And in that time, none of you has produced a single claim.
81 A ¶ The intercom crackles.
82 D INTERCOM [V.O.] (female, bright): Mandatory Fun Day will now begin!
83 A ¶ Cranston-Lee lowers the page.
84 A Looks around at five stricken faces.
85 A Then, to everyone's astonishment, he smiles.
86 D CRANSTON-LEE: Don't worry. Neither has anyone else. That's why the company's been so profitable.
87 D HORATIO: Sir?
88 D CRANSTON-LEE: Efficiencies, Horatio. I want twelve percent more nothing.
89 A ¶ He tucks the folder under his arm and strides out.
90 A Nobody breathes.
91 A Reggie, slowly, raises his paper cup.
92 D REGGIE: To nothing.
93 D DEZ: To nothing.
94 D CORDELIA: To nothing.
95 D BRIGITTE (muttering): Efficiency pizza.
96 T FADE OUT.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01270.json
### SCENE s01270 | INT. DRAINED PUBLIC SWIMMING POOL - NIGHT
Detected names (may be incomplete or contain aliases): DEZ OKAFOR, ROZ VANCE, TOBIAS KRELL
1 A ¶ Deep end.
2 A Cracked blue tile.
3 A Moonlight leaks through a broken skylight.
4 A ¶ DEZ OKAFOR, 40s, shaved head, sits on an upturned lifeguard chair.
5 A Duffel bag between his boots.
6 A ¶ ROZ VANCE, 30s, leather jacket, thumb on a revolver hammer.
7 A She stands over the drain.
8 D ROZ: You're late.
9 D DEZ: Traffic.
10 D ROZ: At two in the morning.
11 D DEZ: There was a parade.
12 D ROZ: For who?
13 D DEZ: Me. Confetti and everything. Count it.
14 D ROZ: You count it. I want to see your hands doing the counting.
15 D DEZ: My hands are fine. My hands have never been the problem.
16 D ROZ: Your mouth is the problem.
17 D DEZ: My mouth got us this pool. Free rent, no neighbours, a diving board for a lookout.
18 D ROZ: It smells like a wet dog died in a bleach factory.
19 D DEZ: That's the ambience. You pay extra for that.
20 D ROZ: I'm not paying extra for anything. I'm paying what we agreed.
21 D DEZ: Then count.
22 A ¶ Steel door CLANGS above.
23 A Boots on the ladder.
24 A ¶ TOBIAS KRELL, 50s, soaked raincoat, grey stubble, drops to the tile.
25 A Revolver out.
26 A Shaking.
27 D TOBIAS: Nobody move.
28 D ROZ: Tobias, put that down.
29 D DEZ: Who's Tobias?
30 D ROZ: My brother-in-law.
31 D TOBIAS: Ex.
32 D ROZ: Ex-brother-in-law. He drove.
33 D DEZ: You brought a driver to a deal?
34 D TOBIAS: I brought a gun to a deal!
35 D ROZ: You brought a gun that doesn't have bullets, Tobias.
36 D TOBIAS: ...How did you know that?
37 D ROZ: I took them out. Last Tuesday.
38 A ¶ Tobias lowers the gun.
39 A Laughs, thin and relieved.
40 A Sits on the tile.
41 D TOBIAS: Thank God. I thought I'd have to use it.
42 D DEZ: Count the money, Roz.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01271.json
### SCENE s01271 | INT. BOMBED CATHEDRAL BELL TOWER - DAWN
Detected names (may be incomplete or contain aliases): IMRE HALASZ, TEODORO BASCO, LI WEI, AGNES FARQUHAR, RINGS
1 A ¶ Stone stairs spiral up into smoke.
2 A A great bronze bell hangs cracked.
3 A Slit windows.
4 A Dust falls like snow.
5 A ¶ SGT. IMRE HALASZ, 40s, grey in his beard, crouches at a slit window.
6 A Rifle braced.
7 A ¶ CPL.
8 A TEODORO BASCO, 20s, wiry, kneels beside a field radio.
9 A Headset crooked.
10 A ¶ PVT.
11 A LI WEI, 19, round glasses taped at the hinge, sits against the wall.
12 A Hugging his helmet.
13 A ¶ He stares at nothing.
14 A ¶ LT. AGNES FARQUHAR, 30s, mud to the knees, climbs into the room.
15 A Pistol out.
16 A Breathing hard.
17 A ¶ She drops beside the sergeant.
18 D FARQUHAR: Report.
19 D HALASZ: Two tanks at the bridge. Infantry behind them.
20 D BASCO: Command says hold.
21 D FARQUHAR: Hold what?
22 D BASCO: The tower, ma'am.
23 D FARQUHAR: We're in the tower.
24 D BASCO: That's what I told them.
25 D HALASZ: They've seen us. Light on the bell.
26 A ¶ He points.
27 A A glint on the bronze.
28 D FARQUHAR: Cover it.
29 D LI: With what?
30 D FARQUHAR: Your jacket.
31 A ¶ He doesn't move.
32 D HALASZ: Li.
33 D LI: Yes, Sergeant.
34 D HALASZ: Jacket.
35 A ¶ He peels it off.
36 A Climbs the bell frame.
37 A Drapes it over the metal.
38 A Hands shaking.
39 A ¶ A distant WHUMP.
40 D BASCO: Incoming!
41 A ¶ All four drop.
42 A ¶ The wall SHUDDERS.
43 A Plaster rains.
44 D FARQUHAR: Where?
45 D HALASZ: Short. Nave.
46 D BASCO: Sergeant, they're ranging us.
47 D LI: They're ranging us. They're ranging us.
48 D FARQUHAR: Private!
49 D LI: I'm fine.
50 D HALASZ: He's not fine.
51 D FARQUHAR: Nobody's fine. Basco, get me the battery.
52 D BASCO: Radio's dead on the artillery net.
53 D FARQUHAR: Then use the infantry net.
54 D BASCO: They don't answer.
55 D HALASZ: Because they're running.
56 A ¶ He turns back to the slit.
57 D HALASZ [CONT'D]: Infantry's on the bridge. Fifty metres.
58 D FARQUHAR: Count?
59 D HALASZ: Thirty. Forty.
60 D LI: We have nine magazines.
61 D BASCO: Eight. I gave one to the medic.
62 D LI: The medic's dead.
63 A ¶ Silence.
64 A Basco looks at him.
65 A Then away.
66 A ¶ Another WHUMP.
67 A Closer.
68 A ¶ The bell RINGS, one flat note.
69 A Dust pours from the vault.
70 D FARQUHAR: Down. Everyone down!
71 A ¶ She grabs Li by the collar.
72 A Hauls him flat.
73 A ¶ He grips her sleeve.
74 D LI: Lieutenant, I can't.
75 D FARQUHAR: You can.
76 D LI: I can't.
77 D HALASZ: Li. Look at me.
78 A ¶ He does.
79 D HALASZ [CONT'D]: Forty men on that bridge. Four of us up here. You know what that makes us?
80 D LI: Dead.
81 D HALASZ: Inconvenient.
82 A ¶ A breath.
83 A Something almost like a laugh.
84 A ¶ Basco slams the radio.
85 D BASCO: Got them! Got somebody!
86 D FARQUHAR: Who?
87 D BASCO: Don't know. Sounds like cavalry.
88 D HALASZ: We don't have cavalry.
89 D BASCO: Then it's somebody's cousin.
90 A ¶ The third shell lands.
91 A Direct hit on the stair below.
92 A The floor LURCHES.
93 A ¶ They scramble.
94 A Rifles up.
95 A Faces white with plaster.
96 D FARQUHAR: Positions.
97 A ¶ He crawls to the slit.
98 A She takes the east window.
99 A Basco kneels, radio in one fist, rifle in the other.
100 A ¶ Li lifts his rifle.
101 A Steadies it on the sill.
102 D LI: Sergeant?
103 D HALASZ: Yes?
104 D LI: When it starts, don't let me stop.
105 D HALASZ: I won't.
106 A ¶ The bell hums.
107 A Beyond it, boots on the bridge.
108 D HALASZ [CONT'D]: Wait for it.
