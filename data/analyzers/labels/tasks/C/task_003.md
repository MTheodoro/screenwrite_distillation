You are a dramaturg reading the scene as an audience member would experience it. Follow who is doing what to whom moment by moment, then label.

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
  }
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


Write each scene's JSON (valid JSON, no comments, no trailing commas) to the given path with the Write tool. Do not write anything else. Reply only with "done N".

## Scenes

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_C/s05056.json
### SCENE s05056 | INT. SELF-STORAGE UNIT 114 - DAY
Detected names (may be incomplete or contain aliases): HOLLIS, THE WOMAN, WADE, ODALYS, CAL
1 A ¶ ON CAMERA: a roll-up door half open, daylight on concrete.
2 A The camera operator's breathing is audible.
3 A ¶ Hollis, 60s, in a sweat-stained Stetson, kneels over a trunk.
4 A Behind him, boxes stacked to the ceiling, saddles, a dented tin lantern.
5 A ¶ A woman stands in the doorway with her arms crossed.
6 A She does not give her name.
7 A She has a leather satchel and a very flat voice.
8 D HOLLIS: Told the office it was all family stuff. Photographs. My granddad's saddle.
9 D THE WOMAN: And the brand book.
10 D HOLLIS: Didn't say a word about no brand book.
11 D THE WOMAN: You didn't have to.
12 A ¶ Hollis opens the trunk.
13 A Nothing.
14 A Dust.
15 D HOLLIS: Well, it ain't here.
16 A ¶ Hollis's phone RINGS.
17 A He answers on speaker.
18 D WADE [V.O.] (tinny): Pa? You in there yet? Don't open nothing till I get there.
19 D HOLLIS: Too late, son.
20 D WADE [V.O.]: Is somebody with you?
21 A ¶ Hollis looks at the woman.
22 A She looks at the camera.
23 A For a long time none of them say anything.
24 D THE WOMAN: Tell him it's Odalys. Tell him I came the long way round.
25 D HOLLIS (into the phone): It's Odalys.
26 D WADE [V.O.] (a pause, then flat): I'm ten minutes out. Stay put.
27 A ¶ The line goes dead.
28 A Hollis puts the phone in his pocket and does not look up.
29 D HOLLIS: He ain't gonna be happy.
30 D ODALYS: No.
31 D HOLLIS: You gonna wait?
32 D ODALYS: I have waited thirty years, Mr. Hollis. Ten minutes is nothing.
33 D CAL (behind the camera): Are we still rolling?
34 A ¶ Nobody answers him.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_C/s05008.json
### SCENE s05008 | INT. HOTEL - 9TH FLOOR CORRIDOR - NIGHT
Detected names (may be incomplete or contain aliases): CELIA VANCE, STRANGER, DAD, MARCUS, PRIYANKA
1 A ¶ Long.
2 A Carpeted.
3 A Quiet as a held breath.
4 A Brass numbers glow on doors.
5 A A housekeeping cart sits abandoned by the elevators, a room-service tray on the floor, a single shoe in the hall.
6 A ¶ CELIA VANCE, 30s, evening dress, heels in hand, walks fast with a phone to her ear.
7 A Behind her, a STRANGER in a grey suit follows at a polite distance.
8 D CELIA (into phone): Dad I told you I'm fine, the party was fine, I'm in the hallway now, I'm literally at my door.
9 D DAD [V.O.] (over phone, warm): You sound off. Is somebody with you?
10 A ¶ She glances back.
11 A The STRANGER stops, checks his watch, smiles.
12 D CELIA: No. Nobody.
13 A ¶ She reaches her door.
14 A Swipes.
15 A Red light.
16 A Swipes again.
17 A Red.
18 A ¶ ON PHONE: Front Desk: Your key has expired.
19 A Please visit reception.
20 D CELIA (muttering): Great. Perfect.
21 A ¶ The STRANGER steps closer, hands visible.
22 D STRANGER: Having trouble? I can call down. I'm in 912, just there.
23 D CELIA: I'm fine thank you
24 D STRANGER: Of course. I'm Marcus by the way. Marcus Hale. We met at the bar, I bought you the gin.
25 A ¶ Celia freezes.
26 A A beat.
27 A Her face loosens.
28 D CELIA: Oh my god. Marcus. You're the one who spilled it on my coat.
29 D MARCUS: Guilty. I've been trying to apologise all night. Honestly I followed you because I felt terrible.
30 A ¶ She laughs, relieved, the phone drooping at her side.
31 A Dad's tiny voice keeps talking.
32 D DAD [V.O.]: Celia? Celia are you there
33 D CELIA (into phone): Dad I'll call you back
34 A ¶ She hangs up.
35 A The corridor settles.
36 A Down the hall an elevator DINGS and the doors slide, and out walks a woman in a hotel blazer, name badge reading PRIYANKA, and behind her two men in dark coats who are definitely not guests.
37 D MARCUS (low, not smiling now): Don't turn around. Walk with me.
38 D CELIA: What
39 D MARCUS: Your father sold something he shouldn't have. They're here for you. I'm the one who's here to get you out.
40 A ¶ The housekeeper sets down her cart.
41 A Her hand goes to her pocket.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_C/s05088.json
### SCENE s05088 | INT. LAKEVIEW BANQUET HALL - WEDDING AFTERPARTY - NIGHT
Detected names (may be incomplete or contain aliases): DJ, WAITER, TEENAGERS, NORA, CALLUM, DEVON, MARIN
1 A ¶ Streamers.
2 A Half-eaten cake.
3 A A DJ plays something slow to a nearly empty floor.
4 A A WAITER carries a tray of champagne flutes between tables.
5 A Two TEENAGERS in matching rented suits hide behind a pillar, sharing a vape.
6 A A small WHITE DOG in a bow tie trots under the head table, hunting for crumbs.
7 A ¶ At a corner table, NORA, 28, bridesmaid, grips her clutch.
8 A Across from her sits CALLUM, 30s, the groom's cousin, loosening his tie.
9 D NORA (low, smiling for the room): Don't look at the bar.
10 D CALLUM (looking at the bar): Which one is he?
11 D NORA (sips water): Grey suit. Left of the cake.
12 D CALLUM (squints): That's the best man.
13 D NORA: That's not the best man.
14 A ¶ A beat.
15 A The Waiter passes.
16 A Nora lifts a flute.
17 A Sets it down untouched.
18 A ¶ DEVON arrives, 30s, the real best man, grinning, a bit sweaty, and slides into the chair next to Callum.
19 D DEVON (clapping Callum on the shoulder): There you are! Where were you during the toast?
20 D CALLUM (stiff): Parking.
21 D DEVON (to Nora): And you owe me a dance.
22 D NORA (too bright): Later.
23 D DEVON (leaning in): You okay? You look pale.
24 D NORA (squeezing the clutch): Long day.
25 A ¶ The Dog yips under the table.
26 A One of the Teenagers giggles.
27 A The other shushes him.
28 A ¶ MARIN, 50s, the bride's mother in a silver dress, glides up behind them.
29 D MARIN (tapping Devon's arm): Dev, the photographer needs you. Now.
30 D DEVON (rising, to Callum): Don't leave. We're doing shots at midnight.
31 A ¶ He goes.
32 A Marin lingers, her eyes on Nora.
33 D MARIN (softly): He is lovely, isn't he?
34 D NORA (nodding, tight): Very.
35 D MARIN (turning to Callum): And you. You'll keep an eye on her?
36 D CALLUM (a beat): Yes, ma'am.
37 A ¶ Marin smiles and drifts away.
38 A Nora exhales.
39 A Callum turns to her.
40 D CALLUM [CONT'D] (whispering): Your clutch. What's in it?
41 D NORA (eyes on the dance floor): Not here.
42 A ¶ The DJ fades out the slow song.
43 A The room claps, thinly.
44 A The Waiter returns for the flute Nora never touched.
45 A She hands it to him with a smile that does not reach her eyes.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_C/s05062.json
### SCENE s05062 | INT. RIDESHARE CAR - NIGHT
Detected names (may be incomplete or contain aliases): GWEN, RICKY, TASHA, BOB
1 A ¶ 2 AM.
2 A Rain.
3 A A hatchback, wipers going.
4 A GWEN, bride-to-be, in a wedding dress, sits in back.
5 A Next to her, RICKY, her ex.
6 A Up front, TASHA drives.
7 A Beside her, BOB, a stranger with a trombone case.
8 D TASHA: So to confirm. Four people. One dress. Zero explanations.
9 D GWEN: He's not with me.
10 D RICKY: I'm totally with her.
11 D GWEN: He's not WITH me with me.
12 A ¶ Silence.
13 A ¶ Bob.
14 A Trombone.
15 A Nothing.
16 D BOB: I got in the wrong car.
17 D TASHA: You got in the right car. You got in the wrong, uh, situation.
18 A ¶ Her phone.
19 A Dead.
20 D GWEN: Does anyone have a charger
21 D TASHA: Glovebox. Next to my dignity.
22 A ¶ He opens it.
23 A Empty.
24 A Rain.
25 D RICKY: Gwen, the groom is at the church. Everyone is at the church. Why are we in a Honda?
26 D GWEN: Because I ran. Okay? I ran. In heels.
27 D BOB (raising trombone case): For what it's worth, I think you look fantastic.
28 A ¶ Beat.
29 A All three turn to him.
30 D TASHA: Sir, you're not even supposed to be here.
31 D BOB: I'm just saying. Great dress.
32 A ¶ She laughs, then cries, then laughs.
33 A He hands her a napkin from the case.
34 A Why does he have napkins in a trombone case.
35 A Nobody asks.
36 A ¶ Tasha stops the car.
37 A Church.
38 A Lights on.
39 A Doors open.
40 A The groom, tiny in the distance, waving.
41 D RICKY: Oh no.
42 D GWEN: Oh no.
43 D TASHA: Five stars everybody. Thats the best ride I ever had.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_C/s05066.json
### SCENE s05066 | INT. MARRIOTT SUITES - 4TH FLOOR CORRIDOR - NIGHT
Detected names (may be incomplete or contain aliases): COREY, DANI, BEX, MARCUS, LENA, GREG
1 A ¶ fluorescent light. carpet the colour of a bruise. a room service cart abandoned outside 412.
2 A COREY, DANI, BEX, MARCUS and LENA stand in a loose knot outside the conference suite, lanyards still on, name tags crooked, the team retreat is in its third hour of "synergy".
3 D COREY: ok but nobody says anything to Greg.
4 D DANI: nobody's saying anything to Greg.
5 D COREY: because last time somebody said something to Greg we all got a mindfulness seminar.
6 D BEX: i liked the mindfulness seminar.
7 D MARCUS: Bex, they made us hold hands with the interns.
8 D BEX: it was grounding. also i'm allowed to like things.
9 D LENA: Bex is allowed to like things.
10 D BEX: thank you Lena. they are the only one who gets it.
11 A ¶ ON PHONE: A message from "GREG (VP)" lights up Corey's screen. "great energy team!! back in 5 for the breakout"
12 D COREY: he said breakout. Dani. he said breakout.
13 D DANI: no. no no no. we did the breakout.
14 D MARCUS: that was the pre-breakout.
15 D LENA: what's the difference between a breakout and a pre-breakout
16 D MARCUS: the pre-breakout has snacks.
17 D BEX: i'm not going back in. i'm going to stay in the hall and become a plant.
18 D DANI: Bex you literally can't. you're presenting the deck.
19 D BEX: Dani, they, i mean i, i have never once presented the deck. you're confusing me with the other Bex.
20 D COREY: there's another Bex?
21 D BEX: no. i just wanted to see if you'd check.
22 A ¶ ON PHONE: A second message, group chat "RETREAT 2K24 (DO NOT MUTE)".
23 A Lena: "dont look but greg is at the elevator".
24 A Marcus: "he's crying???"
25 A Dani: "happy crying or layoff crying"
26 A ¶ They all turn at once.
27 A At the far end of the corridor, the elevator dings.
28 A GREG, 50s, vest, lanyard, a laminated agenda, steps out wiping his eyes with a tiny hotel napkin.
29 D LENA (whispering): Layoff crying.
30 D MARCUS: Happy crying doesn't wear a vest.
31 D COREY: Everybody act normal. Dani, normal.
32 D DANI: i'm so normal. i am the normalest.
33 D BEX (slowly raising a hand): hi Greg.
34 A ¶ Greg looks up.
35 A A beat.
36 A He sniffles.
37 D GREG: Team. Great. Love it. Love the energy.
38 A ¶ He walks past them into the suite and the door sighs shut.
39 A They stand in the corridor in silence.
40 D MARCUS: So. Breakout.
41 D COREY: Breakout.
42 A ¶ They don't move.
43 A The cart rattles faintly as the building settles.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_C/s05165.json
### SCENE s05165 | INT. COLDLINE DELIVERY WAREHOUSE - NIGHT
Detected names (may be incomplete or contain aliases): BOGDAN, THE WOMAN, ILSE, TWINS
1 A ¶ Water is on the floor, ankle high.
2 A The power is out.
3 A A small camping lantern stands on a shelf and gives yellow light, and BOGDAN, 50s, is moving boxes of canned food from low shelves to high shelves one by one, and in the corner near the loading door THE WOMAN, 30s, wet coat, sits on a stack of pallets with her phone in her hand and she looks at the stairs and at the water and at him, and the rain on the metal roof is loud.
4 D BOGDAN: This shelf is dry. Put your bag here.
5 D THE WOMAN: I keep my bag.
6 D BOGDAN: OK.
7 A ¶ He lifts another box.
8 A She watches him.
9 A The water moves around his boots.
10 A ¶ ON PHONE: Message failed.
11 A No signal.
12 A ¶ She puts the phone in her pocket.
13 D THE WOMAN: How long you work here?
14 D BOGDAN: Eleven years. Never this much water.
15 D THE WOMAN: The driver did not come back.
16 D BOGDAN: He will come.
17 D THE WOMAN: You say this like you do not think so.
18 A ¶ Bogdan does not answer.
19 A He gives her a can of peaches and a plastic spoon.
20 A She takes it.
21 A She does not open it.
22 A She holds it on her knee.
23 D BOGDAN: Open. Eat. We have enough.
24 D THE WOMAN: Later.
25 A ¶ Bogdan sets the lantern higher.
26 A Outside, a car horn sounds far away, two short notes, then stops.
27 A They both look at the door.
28 D THE WOMAN [CONT'D]: My name is Ilse. I should say it.
29 D BOGDAN: Bogdan.
30 D ILSE: I know. It is on your jacket.
31 A ¶ He almost smiles.
32 A He looks at the stitching on his chest as if he forgot it.
33 A ¶ Then the side door BANGS open.
34 A Water rushes in.
35 A THE TWINS, two boys about ten, soaked to the skin, in matching yellow raincoats, stand in the frame holding one backpack between them.
36 A They do not speak.
37 A They look at the lantern.
38 D BOGDAN [CONT'D] (softly): Come. Come inside. Close the door.
39 D THE TWINS (together): We are looking for our mother.
40 A ¶ Ilse stands up.
41 A She sets the can of peaches down on the shelf, open now, with the spoon in it, and she pulls off her coat and puts it over the two small shoulders.
42 D ILSE: Sit. Here. It is dry.
43 A ¶ The boys sit on the pallets.
44 A Bogdan hands them the peaches.
45 A They share the spoon.
46 A ¶ Rain.
47 A The lantern flickers, then holds.
48 A ¶ ON PHONE: one bar.
49 A A message comes through at last.
50 A ¶ ON PHONE: "Where r u?
51 A We are at the bridge.
52 A Boys with you?"
53 A ¶ Ilse reads it.
54 A She does not smile.
55 A She turns the phone so the twins can see the screen, and she keeps her hand on the nearest small wet head.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_C/s05027.json
### SCENE s05027 | EXT. RIVERSIDE PARK - FOUNTAIN - DAY
Detected names (may be incomplete or contain aliases): KIKI, KAI, JADA, STRANGER, MARCUS, SQUEAL
1 A ¶ Kiki, 19, ring light clipped to her phone, stands on the fountain's edge in a yellow jacket.
2 A Kai, her cousin, holds the tripod.
3 A Jada, 17, stands off to the side eating chips.
4 D KIKI [V.O.]: Everyone thinks the camera shows the truth. It shows what you point it at. That's the whole trick.
5 D KIKI: Okay, okay, take four. Kai, don't breathe on the mic.
6 D KAI: I'm not breathing on it.
7 D JADA: He's breathing on it.
8 D KAI: I'm literally holding my breath.
9 A ¶ The phone BUZZES on the tripod.
10 A ¶ ON PHONE: unknown number: stop filming. go home.
11 A ¶ Kiki laughs.
12 A Shows Kai.
13 A Kai doesn't laugh.
14 D KAI: That's a bit.
15 D KIKI: It's a bit. Some bot. Rolling.
16 A ¶ She starts the dance.
17 A Two bars in, a man in a grey coat walks into the frame behind her, and does not walk out.
18 D KIKI [CONT'D]: Excuse me, sir? We're filming!
19 D STRANGER: You're filming me.
20 D JADA: Nobody's filming you.
21 D KAI: Dude, you're in the shot, step back.
22 D STRANGER: You posted this fountain at nine this morning. Caption said "no one ever comes here."
23 D KIKI: It's a caption!
24 A ¶ ON PHONE: unknown number: he's not joking. walk away.
25 A ¶ Kiki's smile goes.
26 A The tripod light blinks red.
27 A A pigeon bursts off the fountain, SCREAMING away over the trees.
28 D KAI: Who is texting you?
29 D KIKI: Jada?
30 D JADA: It's not me! I'm right here!
31 D STRANGER: My name is Marcus. I'm the one who texted you. Look behind you, Kiki.
32 D KIKI [V.O.]: Funny. I only said "Kiki" in the video. Never my last name. Never where we live.
33 D MARCUS (to Kai, calm): Put the phone down.
34 D KAI: What? No!
35 D JADA: Kiki, we should go.
36 D KIKI: Go where, Jada, he's--
37 A ¶ A black van pulls up on the gravel path with a SQUEAL of tires.
38 A The side door SLIDES open.
39 D MARCUS: Now, please. All three.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_C/s05185.json
### SCENE s05185 | INT. ST. BRIDGET'S CHURCH BASEMENT - NIGHT
Detected names (may be incomplete or contain aliases): DANA, ALL, WALTER, TOMAS, FATHER MORAN
1 A ¶ Folding chairs in a circle on cracked linoleum.
2 A A coffee urn sputters.
3 A Under a flickering tube light, six people sit with paper cups, and one of them is wearing a wire.
4 A ¶ Dana Whitlock, 30s, sharp-eyed, an undercover agent in a thrift-store cardigan, sits beside Walter Pruitt, 60s, a retired accountant who hasn't touched his coffee, while across the circle Rosalind Kerr, 50s, a lawyer with ink-stained fingers, grips the arm of Tomas Reyes, 20s, who bounces his knee, and Father Gil Moran, 70s, the host, folds his hands as Priya Anand, 40s, a nurse in scrubs, steps in late and closes the door too carefully.
5 A ¶ CLOSE ON Dana's cup.
6 A A pinhole lens in the rim.
7 D DANA: I'm Dana. I'm an alcoholic.
8 D ALL: Hi, Dana.
9 A ¶ ANGLE ON Walter.
10 A He watches her hands, not her face.
11 A ¶ This is the last time any of them will sit in this room together.
12 D WALTER: You sound new.
13 D DANA: Three weeks.
14 D WALTER: Funny. You smell like gun oil.
15 A ¶ Silence.
16 A The urn gurgles.
17 A Rosalind's grip on Tomas tightens.
18 A ¶ INSERT - Priya's phone, face-down on her knee.
19 A A text lights the screen: HE KNOWS.
20 A ¶ WE SEE Father Moran slowly stand, one hand sliding into his cassock.
21 A ¶ BACK TO SCENE
22 D TOMAS: Nobody move.
23 D FATHER MORAN: Sit down, son. Everyone sit. Dana, the cup, please.
24 A ¶ Dana sets it on the floor.
25 A Slowly.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_C/s05148_1.json
### SCENE s05148_1 | INT. NEW BEGINNINGS FERTILITY CLINIC - HALLWAY - CONTINUOUS
Detected names (may be incomplete or contain aliases): DEV, KAREN, MAYA
1 A ¶ The generator HUMS louder here.
2 A A row of steel tanks, each frosted with cold.
3 A The woman is already at the biggest one, pulling at its door.
4 D DEV: Hey. Hey! You can't touch that.
5 D THE WOMAN: The backup power's failing. Somebody has to move them.
6 D DEV: Who are you?
7 D THE WOMAN: Karen Ellis. Lab tech. Eleven years.
8 D DEV (quieter): Karen. My wife's in there right now.
9 D KAREN: Then you'd better help me lift.
10 A ¶ He looks at the tank.
11 A At her.
12 A At the dark ceiling.
13 A ¶ Dev takes off his jacket and grabs the other handle.
14 A ¶ Behind them, the swinging door opens.
15 A Maya stands there, pale, with the nurse behind her.
16 D MAYA (very still): Dev. What are you doing?
17 D DEV: Saving the thing we came here for.
18 A ¶ This is the first time all week that anyone in this building has told the truth.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_C/s05102.json
### SCENE s05102 | INT. MOON COLONY FUNERAL RECEPTION - EVENING
Detected names (may be incomplete or contain aliases): PIM, PIP, AUNT NEBULA
1 A ¶ Grey dust drifts past the big round window.
2 A Earth hangs there, small and blue and very far away.
3 A Under the dome, a long table of nutrient cakes nobody is touching.
4 A ¶ PIM, a squat round robot the size of a beach ball with two floppy antenna ears, rolls up to the cake table.
5 A Next to him bobs PIP, a thin silver drone with a single blinking eye.
6 A Everyone says they are the same model.
7 A They are not.
8 D PIM (to everyone): Thank you all for coming to say goodbye to Captain Barnaby Tumbleton, who was the best captain of the best crater on the whole moon!
9 A ¶ Dust.
10 A Hush.
11 A A distant air pump going whoosh.
12 D PIP (to Pim): Pim, you said "best" twice and he was the only captain.
13 D PIM (muttering): Then he was twice as best.
14 A ¶ The dome lights flicker low.
15 A A tiny sad chime plays from the speakers, and the cake's candle gutters in the thin air.
16 D PIP: Pim I miss him.
17 D PIM: Me too Pip. (sniff) My antenna ears are leaking.
18 A ¶ The airlock hisses.
19 A In rolls AUNT NEBULA, an enormous fluffy purple dust-bunny robot in a black veil, humming slowly.
20 A She stops.
21 A Everything goes still.
22 D AUNT NEBULA (to the room): Nobody told me I was late. Is there cake left? Is he still dead?
23 D PIM (softly): Yes. To both.
