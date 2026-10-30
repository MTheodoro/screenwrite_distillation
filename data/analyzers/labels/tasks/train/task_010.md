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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00686.json
### SCENE s00686 | INT. NORTHBEAM SYNERGIES - OPEN OFFICE - MORNING
Detected names (may be incomplete or contain aliases): BRENDA KOWALCZYK, TREVOR NAKAMURA, PRIYA VENKATARAMAN, GUS TILLMAN
1 A ¶ Rows of identical desks.
2 A A motivational banner reads "TOGETHER WE ALIGN."
3 A A broken printer wheezes in the corner.
4 A ¶ BRENDA KOWALCZYK, 50s, regional VP in a power blazer, stands on a chair with a clicker.
5 A TREVOR NAKAMURA, 30s, middle manager, holds a coffee like a shield.
6 A PRIYA VENKATARAMAN, 30s, a senior analyst with a headset around her neck, scrolls through a spreadsheet.
7 A GUS TILLMAN, 20s, an intern in a too-big tie, takes notes.
8 D BRENDA: Team! Huddle up!
9 A ¶ Nobody huddles.
10 A Trevor drifts closer.
11 D BRENDA [CONT'D]: Today we pivot. From synergy to hypersynergy.
12 D TREVOR (to himself): Pivot where? We don't have a chair.
13 D BRENDA: Trevor, I heard that.
14 D TREVOR: I said "we don't have a chair." For the new hire.
15 D BRENDA: We hire the person, not the chair.
16 D PRIYA (not looking up): Brenda, our Q3 numbers are down forty percent.
17 D BRENDA: Which is why we pivot.
18 D PRIYA: It would be easier to fix the number.
19 D BRENDA: We don't fix numbers, Priya. We reframe them.
20 D GUS (raising a hand): Can I ask a question?
21 D BRENDA: Gus. Welcome to the conversation.
22 D GUS: What does hypersynergy mean?
23 D BRENDA: It means synergy, but faster.
24 D TREVOR (to Gus, low): It means layoffs.
25 D BRENDA: I heard that too.
26 D TREVOR: I know. I wanted you to.
27 A ¶ Brenda climbs down from the chair, slowly, crosses to Trevor, and lowers her voice to a whisper that carries across the entire floor.
28 D BRENDA: You're on a performance improvement plan.
29 D TREVOR: For what?
30 D BRENDA: For saying "layoffs" out loud.
31 D PRIYA (to herself, typing): Seven words. A new record.
32 D GUS (to the room): Does the plan come with a chair?
33 A ¶ Priya snorts.
34 A Trevor stares at Brenda.
35 A Brenda stares back.
36 D BRENDA (to everyone): Everyone back to your desks. We're going to have a very productive day.
37 A ¶ Nobody moves.
38 A The printer coughs and dies.
39 D TREVOR: I'm not on a plan.
40 D BRENDA: You are now.
41 D TREVOR: Then I quit.
42 D PRIYA: Seconded.
43 D GUS (very small): Does that include interns?
44 A ¶ Brenda looks at the banner, then at the three of them, then at the dead printer.
45 A Her smile has not moved at all.
46 D BRENDA: Everybody take fifteen. In fifteen minutes, we circle back to this.
47 A ¶ She steps back up onto the chair.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00918.json
### SCENE s00918 | INT. COURTHOUSE - BASEMENT HOLDING OFFICE - DAY
Detected names (may be incomplete or contain aliases): CORNELIA BASSETT, HAROLD VANTERPOOL
1 A ¶ Cinder-block walls, a steel table, a ringing phone.
2 A A water-stained ceiling.
3 A One window, barred, at ankle level.
4 A ¶ CORNELIA BASSETT, 40s, a defense attorney in a charcoal suit, paces with a stack of folders under one arm and a cold coffee in the other hand.
5 A She checks her watch.
6 A Again.
7 A ¶ The intercom on the wall crackles.
8 D HAROLD [V.O.] (through the speaker): Ms. Bassett? Ms. Bassett, are you there?
9 D CORNELIA: I'm here, Harold.
10 D HAROLD [V.O.]: They moved the hearing up.
11 D CORNELIA: To when?
12 D HAROLD [V.O.]: Ten minutes.
13 A ¶ She sets down the coffee.
14 A It sloshes over the lip.
15 A She looks at the folders, at the door, at the clock.
16 D CORNELIA: Where's my client?
17 D HAROLD [V.O.]: Still upstairs. Processing.
18 D CORNELIA: Tell them to hurry.
19 D HAROLD [V.O.]: I did.
20 D CORNELIA: Tell them again.
21 D HAROLD [V.O.]: I'm coming down.
22 A ¶ The intercom clicks off.
23 A She dumps the folders onto the table and tears through them, sheets flying.
24 A A door bangs somewhere above.
25 A Footsteps hammer the stairwell, and HAROLD VANTERPOOL, 60s, a sweating court clerk with a ring of keys and a bow tie askew, bursts in, holding a paper above his head like a prize.
26 A He wheezes and she whirls to meet him, snatching the paper, and he doubles over, hands on his knees, while she scans the page and slowly, grimly, begins to smile.
27 D CORNELIA: This is the affidavit.
28 D HAROLD: Found it in Judge Mercer's chambers.
29 D CORNELIA: You stole it.
30 D HAROLD: I borrowed it. Without asking.
31 D CORNELIA: Harold, you beautiful man.
32 D HAROLD (catching his breath): Ten minutes, Counselor.
33 D CORNELIA: Eight, now.
34 A ¶ She grabs her folders, squares her shoulders, and strides to the door.
35 A Harold straightens his bow tie.
36 D HAROLD: Good luck.
37 D CORNELIA: Luck is for the prosecution.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02285.json
### SCENE s02285 | INT. WHALE-BONE LIBRARY, LANTERN ISLE - NIGHT
Detected names (may be incomplete or contain aliases): ARCHIVIST MIRELLE, WREN, GRIMOLD, THE SEXTON
1 A ¶ A cathedral built inside the ribcage of a leviathan.
2 A Ribs arch overhead like the vault of some drowned church.
3 A Shelves climb the bone.
4 A Fireflies in glass jars hang on chains for light.
5 A ¶ ARCHIVIST MIRELLE, ancient, hunched, wrapped in a moth-eaten cloak, polishes a brass astrolabe.
6 A Her left eye is a milk-white marble.
7 A ¶ A boy, WREN, eleven, barefoot, slips between shelves, a book under his coat.
8 A A giant, GRIMOLD, ten feet tall, shaggy as a pine, ducks beneath the ribs with a candle in his fist.
9 A A stranger in the doorway, THE SEXTON, tall and thin, a hooded figure with no face, raps his staff on the floor.
10 D THE SEXTON: Return what you took.
11 D WREN: I took nothing.
12 A ¶ Mirelle's head turns slowly.
13 A The milk-white eye finds the book beneath his coat.
14 A Grimold sets down the candle and takes one step toward the boy, and the floor shivers.
15 A The Sexton lifts his staff.
16 A The jars swing on their chains, the fireflies swarming up like sparks.
17 D MIRELLE: Child. The book.
18 A ¶ Wren bolts.
19 A Grimold lunges, Mirelle's cloak snags on a shelf, the Sexton's staff cracks against a rib, and a hundred volumes thunder down in a cloud of dust.
20 A The boy skids through the avalanche and slams into the Sexton's legs.
21 A The book falls open.
22 A ¶ It is blank.
23 D GRIMOLD (rumbling): There is nothing in it.
24 D THE SEXTON (lowering the staff): Then why did you steal it?
25 D WREN: I wanted something to write in.
26 A ¶ Silence.
27 A The dust settles.
28 A Mirelle laughs, a dry whisper like pages turning, and the fireflies drift back down to their jars.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01675.json
### SCENE s01675 | INT. FAMILY HOUSEBOAT - GALLEY - EVENING
Detected names (may be incomplete or contain aliases): HENRIKA DOLAN, PIETER DOLAN, ANNELIES, STRANGER, CASIMIR
1 A ¶ The houseboat rocks in a slow, patient rhythm against the canal wall.
2 A A copper lamp swings from a hook.
3 A Steam rises from a pot of lentils, fogging the small round window.
4 A Dinner is set for four on a table too small for it.
5 A ¶ HENRIKA DOLAN (60s, gray braid, forearms dusted with flour) ladles soup without looking up.
6 A Across from her sits her son, PIETER DOLAN (35, pressed shirt, a man who has practiced a speech in a mirror).
7 A Beside him, his wife ANNELIES (33, careful hands, folding and refolding a napkin).
8 A ¶ At the end of the table, an empty chair.
9 A A folded newspaper rests on its seat.
10 D HENRIKA: Eat while it's hot.
11 D PIETER: Mama, we need to talk about the boat.
12 D HENRIKA: We are talking. Over soup. It's the best way.
13 A ¶ Annelies lays her spoon down with exact quiet.
14 D ANNELIES: The buyer is serious, Henrika.
15 D HENRIKA: There is always a buyer. Last year there was a buyer.
16 D PIETER: Papa's been gone two years.
17 A ¶ Henrika's ladle stops.
18 A A single drop of soup falls and spreads on the cloth.
19 D HENRIKA: I know how long.
20 D PIETER: Then you know we can't keep paying for the mooring --
21 D HENRIKA: I know what we pay.
22 A ¶ A knock at the hull.
23 A The door opens.
24 A A STRANGER (40s, rain-soaked coat, a canvas satchel) stands on the gangway, hat in hand.
25 D STRANGER: Forgive me. I was told Anders Dolan lived here.
26 A ¶ Nobody breathes.
27 A Henrika sets the ladle down.
28 D HENRIKA: Who told you that?
29 D STRANGER: A man in Rotterdam. He said to bring this.
30 A ¶ He sets a brass compass on the table.
31 A Pieter stares at it.
32 A Annelies covers her mouth.
33 D HENRIKA: Where did you get that?
34 D STRANGER: My name is Casimir Rooke. Your husband sailed with me, ma'am. Eleven years ago, off Terschelling.
35 D PIETER: Eleven years? He was home eleven years ago.
36 D CASIMIR: Was he?
37 A ¶ Henrika walks to the window and presses her palm to the cold glass.
38 A The lamp keeps swinging.
39 D HENRIKA (low): Sit down, Mr. Rooke. Annelies, a bowl.
40 D PIETER: Mama, no. Not now.
41 D HENRIKA: Pieter, hush.
42 D PIETER: You don't even know who he is!
43 A ¶ He stands so fast his chair crashes backward.
44 A The soup trembles in its pot.
45 D PIETER [CONT'D]: Two years! Two years you let us believe he drowned clean!
46 D HENRIKA: Sit down.
47 D PIETER: I will not sit down in his house, with his stranger, eating his lentils!
48 A ¶ Annelies reaches for his sleeve.
49 A He shakes her off.
50 A Casimir sets the satchel on the floor and does not move, a man who has walked into a fire he cannot put out.
51 D CASIMIR: He asked me to tell you he was sorry.
52 A ¶ Henrika turns.
53 A For a long moment, only the water speaks against the hull.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00529.json
### SCENE s00529 | INT. CONSERVATORY GREENHOUSE - ORCHID SHOW - DAY
Detected names (may be incomplete or contain aliases): WREN ASHBY-LOVELACE, STRANGER, ABARA, TAMSIN
1 A ¶ Glass and humid green.
2 A Ten thousand blossoms on risers: slipper orchids like lacquered tongues, moth orchids like frozen flight.
3 A Rain ticks on the panes overhead.
4 A ¶ WREN ASHBY-LOVELACE, 30s, in a cardigan the color of moss, bends close to a speckled bloom with a magnifying glass, entirely absorbed.
5 A ¶ A STRANGER, 30s, a woman in a rain-darkened trench and a scarf the red of a struck match, stops beside her.
6 A She does not look at the orchids.
7 A She looks at Wren.
8 D STRANGER: That one is lying to you.
9 D WREN: Excuse me?
10 D STRANGER: The label says Paphiopedilum. But it's a hybrid. Look at the staminode.
11 A ¶ Wren lowers the glass.
12 A Looks.
13 A Looks again.
14 A She laughs, low and surprised.
15 D WREN: You're right. She's right. Whoever grew it, I mean.
16 D STRANGER: She'd be furious with you for guessing.
17 A ¶ MR. ABARA, 60s, a show steward with a lapel rosette, glides by with a clipboard and clears his throat.
18 D MR. ABARA: Ladies, the judging begins at noon. Kindly keep to the path.
19 A ¶ He moves on.
20 A The two women watch him go, then glance at each other, conspirators.
21 D WREN: I'm Wren.
22 D STRANGER (after a beat): Tamsin.
23 A ¶ She extends her hand.
24 A Wren takes it.
25 A Neither lets go at once.
26 A ¶ Above, the rain thickens.
27 A TAMSIN lifts her scarf, and, shyly, shows Wren the orchid pinned beneath it: a hybrid, speckled, impossible.
28 D TAMSIN: I grew it for the judging. I was going to lose on purpose.
29 D WREN: Don't. Not today.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00122.json
### SCENE s00122 | INT. COUNTY RECORDS BASEMENT - DAY
Detected names (may be incomplete or contain aliases): JUDGE ILSA BRANDVOLD, ATTORNEY RAJESH PILLAY, CLERK FERGUS MBEKI, ATTORNEY LOUISE ARCENEAUX
1 A ¶ Steel shelving in grey rows.
2 A A single folding table has been set under a humming fluorescent tube.
3 A Dust hangs in the light like flour.
4 A ¶ JUDGE ILSA BRANDVOLD, 60s, reading glasses on a chain, sits at the head of the table with a legal pad.
5 A Across from her, ATTORNEY RAJESH PILLAY, 40s, rumpled suit, pulls a banker's box toward him and lifts the lid.
6 A At the far end, CLERK FERGUS MBEKI, 20s, bow tie, sorts folders into piles while ATTORNEY LOUISE ARCENEAUX, 50s, crisp navy blazer, pretends not to watch the box and instead straightens her pen, then her water glass, then her notes, then glances at Pillay, who pays her no mind and hums as he unfolds a brittle deed.
7 D BRANDVOLD: We are on the record. Counsel, you said there was a discrepancy in the plat.
8 D PILLAY: There is a lot line, Your Honor, that appears on the 1962 survey and not on the 1974 survey.
9 D ARCENEAUX: Which is irrelevant, as the 1974 survey supersedes.
10 D PILLAY: Unless the 1974 survey was never recorded.
11 A ¶ Mbeki stops sorting.
12 A He checks a ledger, runs a finger down a column, then looks up with the slow expression of a man who has found something unwelcome.
13 D MBEKI: It was recorded, Judge. In the wrong book.
14 D BRANDVOLD: The wrong book.
15 D MBEKI: Deed book instead of plat book. Somebody misfiled it fifty years ago.
16 A ¶ Arceneaux sets down her pen.
17 A Pillay finally smiles, folds the deed back along its crease, and slides it across the table toward the judge while Brandvold removes her glasses, polishes them on her sleeve, replaces them, and reads, and Mbeki hovers behind her with the ledger open, and Arceneaux leans to see.
18 D ARCENEAUX: That's a clerical error. It doesn't alter the legal effect.
19 D PILLAY: It alters the date.
20 D BRANDVOLD: Mr. Mbeki, bring me the plat book.
21 A ¶ He crosses the room, hauls down a canvas-bound volume, wipes it with his cuff, and sets it before her.
22 A She turns pages, slowly, one at a time.
23 D BRANDVOLD [CONT'D]: We will be here a while. Would anyone like coffee?
24 D ARCENEAUX: Please.
25 D PILLAY: Black, thanks.
26 A ¶ Mbeki nods and heads for the stairs, already counting cups.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01521.json
### SCENE s01521 | INT. GREENHOUSE ON A DISUSED FERRY - EVENING
Detected names (may be incomplete or contain aliases): ISOLDE FAIRWEATHER-NKEMELU, DESMOND ACHTERBERG, GRETA, OYELARAN
1 A ¶ A car ferry long retired from its route, moored and rusting at a quiet estuary.
2 A Its vehicle deck has been roofed with glass and turned into a nursery of citrus trees in tubs.
3 A Lamps hum.
4 A The air is warm, bitter-sweet, and smells of leaf and engine oil.
5 A ¶ ISOLDE FAIRWEATHER-NKEMELU, 34, sleeves rolled, soil to the elbows, prunes a lemon tree with more force than the tree needs.
6 A Her wedding ring hangs on a string around her neck instead of her finger.
7 A ¶ Across the aisle, DESMOND ACHTERBERG, 36, in a good coat that does not belong among the tubs, holds a paper bag of pastries as if it were a summons.
8 A He has not put it down since he arrived.
9 A ¶ Between them, perched on an upturned crate and reading a seed catalogue she is not reading, sits MARGUERITE "GRETA" OYELARAN, 70, Isolde's landlady and the ferry's last pilot.
10 A ¶ Isolde snips a branch.
11 A It falls.
12 A Desmond watches it fall.
13 D DESMOND: You've moved the tangerines.
14 D ISOLDE: They wanted light.
15 D DESMOND: They used to be by the stairs.
16 D ISOLDE: Things shift.
17 D GRETA (turning a page): The lemons shifted too. Nobody asked them.
18 A ¶ Desmond sets the bag down on a workbench.
19 A Takes it up again.
20 D DESMOND: I brought the ones with the almond.
21 D ISOLDE: I don't eat those anymore.
22 D DESMOND: Since when?
23 D ISOLDE: Since a while.
24 D DESMOND: You loved those.
25 D ISOLDE: I loved a lot of things at the time.
26 D GRETA: There's a draught from the east vent. Someone should mind it.
27 A ¶ Neither of them moves toward the vent.
28 D DESMOND: The bank wrote to me about the account. They said you'd closed your half.
29 D ISOLDE: I did.
30 D DESMOND: You could have called.
31 D ISOLDE: I could have.
32 D DESMOND: I'd have said yes.
33 D ISOLDE: You'd have said yes to anything, that month.
34 D DESMOND: That's not fair.
35 D ISOLDE: It isn't a verdict. It's a date.
36 D GRETA: Margins are thin in citrus. People forget that.
37 D DESMOND: Greta, would you mind--
38 D GRETA: I would. I've a view of the water from here and I'm using it.
39 A ¶ Isolde almost smiles.
40 A Catches herself.
41 A Snips.
42 D DESMOND: Your mother sent a card. To the flat. I didn't know what to do with it.
43 D ISOLDE: Put it in the drawer.
44 D DESMOND: I did. I took it out again.
45 D ISOLDE: And?
46 D DESMOND: It's in my coat.
47 A ¶ He does not reach for it.
48 A His hand rests on the pocket.
49 D ISOLDE: Keep it.
50 D DESMOND: It's addressed to you.
51 D ISOLDE: Then it's mine to say who keeps it.
52 A ¶ Silence.
53 A A pump clicks on somewhere below decks.
54 A Water moves in the pipes.
55 D DESMOND: You've lost weight.
56 D ISOLDE: You've gained a coat.
57 D DESMOND: It was a gift.
58 D ISOLDE: From?
59 D DESMOND: Does it matter?
60 D ISOLDE: Not at all.
61 A ¶ She drops the shears into a tub.
62 A They ring against the rim.
63 A Both of them look at the sound.
64 D GRETA (to the catalogue): Eighty-one pounds for a Buddha's hand citron. Robbery.
65 D DESMOND: I'm not here about the account.
66 D ISOLDE: I know.
67 D DESMOND: I'm not here about the card.
68 D ISOLDE: I know that too.
69 D DESMOND: The lease on the flat is up in March. I wondered if you had a view.
70 D ISOLDE: On the flat.
71 D DESMOND: On the flat.
72 D ISOLDE (a long beat): The east vent really is open.
73 A ¶ She walks to it.
74 A Closes it.
75 A Stays there with her back to him, hand flat on the cold iron.
76 A ¶ They speak at once.
77 D DESMOND: I don't know how to be in a room with you.
78 D ISOLDE: I don't know how to be in a room without you.
79 A ¶ Nobody moves.
80 A Greta turns a page, slowly, and does not read it.
81 D GRETA: Well. That's the first honest weather of the evening.
82 A ¶ Desmond puts the pastry bag down for the last time.
83 A Walks the length of the aisle, stops one tub short of Isolde.
84 A A lemon hangs between them, green, not yet ready.
85 A ¶ He lifts it gently on his palm, as if weighing it.
86 A Lets it go.
87 D ISOLDE: It needs another month.
88 D DESMOND: Does it.
89 D ISOLDE: The ones in the light, perhaps three weeks.
90 A ¶ She turns.
91 A His coat is wet at the shoulder where the roof drips.
92 A She notices.
93 A Says nothing.
94 A Takes the string from around her neck, winds the ring once about her finger, and unwinds it again.
95 D DESMOND: Three weeks.
96 D ISOLDE: The flat can wait three weeks.
97 D GRETA (standing, folding the catalogue): I'll put the kettle on. Down in the wheelhouse. It will take me a good long while.
98 A ¶ She goes.
99 A Her footsteps ring on the iron stairs, slow, deliberate, deliberately loud.
100 A ¶ Desmond picks the almond pastry from the bag.
101 A Offers it.
102 A ¶ Isolde looks at it.
103 A Looks at him.
104 A Takes half.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02430.json
### SCENE s02430 | EXT. SLED DOG RACE - MIDPOINT CHECKPOINT - NIGHT
Detected names (may be incomplete or contain aliases): NILA KOYUK, HESTER VANCE, RACE MARSHAL
1 A ¶ A frozen lake.
2 A Wind carves the snow into long, sharp ridges.
3 A A canvas tent glows orange at the shore, lit by a generator whose hum is swallowed by the dark.
4 A Beyond it, forty sled dogs lie curled in straw beds, steam rising off their backs.
5 A ¶ A battered radio on a folding table crackles.
6 A A hand-lettered sign flaps from a pole: "CHECKPOINT 6 - 480 MILES TO GO."
7 A ¶ NILA KOYUK (30s, musher, parka stiff with ice, goggles pushed up) stands at the edge of the straw, counting dogs under her breath.
8 A Eleven.
9 A Twelve.
10 A Thirteen.
11 A She stops.
12 A Counts again.
13 A ¶ DR. HESTER VANCE (50s, race veterinarian, round glasses fogged white) kneels beside a sleek husky named Biscuit.
14 A She runs her gloved fingers along the dog's foreleg.
15 D VANCE: Easy, girl. Easy.
16 D NILA: How's the wrist?
17 D VANCE: She's favoring it. Not broken. Not good, either.
18 D NILA: She's my lead dog, Doc.
19 D VANCE: Then she shouldn't lead tonight.
20 A ¶ Nila crouches.
21 A The wind pushes at her hood.
22 A She takes Biscuit's face in both hands.
23 A The dog licks her chin.
24 D NILA: Hey, Biscuit. Hey. You tired?
25 A ¶ The dog thumps her tail.
26 A Nila exhales, long and slow.
27 A ¶ The radio crackles.
28 A RACE MARSHAL (V.O.) comes through, flat with distance.
29 D RACE MARSHAL [V.O.] (over radio): Checkpoint Six, this is Marshal. Weather's closing from the north. Teams have a two-hour window.
30 D NILA: Copy, Marshal. Two hours.
31 D RACE MARSHAL [V.O.] (over radio): Koyuk, you're in third. Chandler is forty minutes ahead.
32 A ¶ Nila's jaw tightens.
33 A Vance glances up.
34 D VANCE: Forty minutes isn't far.
35 D NILA: It's far enough.
36 A ¶ She stands.
37 A Brushes snow from her knees.
38 A Looks across the lake, where nothing but white and darkness meets.
39 D NILA [CONT'D]: Doc, what would you do?
40 D VANCE: I'd scratch.
41 D NILA: I mean really.
42 D VANCE: Really? I'd scratch.
43 A ¶ Nila laughs, short and bitter.
44 D NILA: That's not very sporting.
45 D VANCE: I'm a vet. I treat the ones who can't speak. You know what she's saying right now.
46 A ¶ Both women look at Biscuit.
47 A The dog limps one step, then another, then stops and looks back at Nila, ears forward.
48 D NILA: She wants to go.
49 D VANCE: She wants to please you. There's a difference.
50 A ¶ Silence.
51 A The generator coughs.
52 A The wind rises.
53 A ¶ Nila walks to the sled.
54 A Checks the brush bow.
55 A Runs a hand along the runner.
56 A Doesn't pick up the snow hook.
57 D NILA (to herself): Two hours.
58 A ¶ She turns back.
59 D NILA [CONT'D]: Doc, give me a second lead. Anyone.
60 D VANCE: Pepper's strong. Not fast.
61 D NILA: Strong is fine.
62 A ¶ Vance stands and whistles.
63 A A gray dog bounds out of the straw, tail whipping.
64 D VANCE: Pepper. You're promoted.
65 D NILA (to the dog): Don't let me down.
66 A ¶ Pepper barks once, bright and sure.
67 A ¶ The radio crackles again.
68 D RACE MARSHAL [V.O.] (over radio): Koyuk, confirm you're rolling?
69 A ¶ Nila lifts the handset.
70 A Looks at Vance.
71 A Vance gives the smallest nod.
72 D NILA (into the radio): Rolling, Marshal. Give me a green flag.
73 A ¶ She hangs up.
74 A Pulls her goggles down.
75 D NILA [CONT'D]: Doc, if it goes bad--
76 D VANCE: Then I'll be here with a heater and a flask.
77 D NILA: Sounds like a plan.
78 D VANCE: It's the only one I've got.
79 A ¶ Nila steps onto the runners.
80 A Biscuit watches her go from the straw.
81 A Her tail slowly sinks.
82 A ¶ Vance kneels beside the old lead dog.
83 D VANCE [CONT'D] (whispering): She'll be back, girl.
84 A ¶ The sled lurches.
85 A Thirteen dogs pull into the blue dark.
86 A The tent shrinks to a single orange spark, then nothing.
87 A ¶ Vance stays kneeling, one hand on Biscuit's flank, until the radio crackles with the next team.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02507.json
### SCENE s02507 | EXT. DESERT RAIL HALT - TELEGRAPH OFFICE - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): EZRA CALLOWAY, MARISOL VEGA, HAWTHORNE
1 A ¶ A single wooden shack beside a single rail line, a thousand miles from anywhere.
2 A The platform boards are bleached silver.
3 A Sage grass trembles in a hot wind.
4 A The horizon is a thin blade of light.
5 A A windmill creaks over a stock tank.
6 A ¶ Inside the shack, a dusty window throws a bar of gold across a roll-top desk.
7 A A telegraph key sits at its centre like a small brass insect, silent.
8 A A clock ticks on the wall.
9 A ¶ EZRA CALLOWAY, 60s, stationmaster, sleeves held up by arm garters, sits with his boots on the desk reading a seed catalogue.
10 A MARISOL VEGA, 30s, a widow in a travelling dress the colour of dust, sits upright on the waiting bench with a carpetbag on her knees.
11 A She has been there since morning.
12 A ¶ The clock ticks.
13 A Ezra turns a page.
14 A Marisol watches a fly crawl across the window.
15 D EZRA: Train's due at four.
16 D MARISOL: It's ten past.
17 D EZRA: It'll come.
18 D MARISOL: You said that at noon.
19 D EZRA: I did.
20 A ¶ Another page.
21 A The fly lifts off, whirs, settles on the key.
22 D EZRA [CONT'D]: You headed far?
23 D MARISOL: Far enough.
24 D EZRA: West?
25 D MARISOL: West.
26 D EZRA: There's nothing west.
27 D MARISOL: Then it'll be quiet.
28 A ¶ Ezra smiles into his catalogue.
29 A She smoothes her skirt.
30 A Her fingers find a small tin locket at her throat.
31 A She holds it, lets go.
32 D EZRA: My wife used to say a person only goes west to forget.
33 D MARISOL: Did she forget?
34 D EZRA: She went east.
35 A ¶ A faint sound.
36 A A rumble, far down the line, no louder than a stomach.
37 A Ezra lowers his boots.
38 A Marisol stands.
39 D HAWTHORNE [O.S.] (calling from the platform): Smoke on the horizon, Ezra!
40 A ¶ Ezra goes to the door.
41 A Squints.
42 A Comes back.
43 D EZRA: That's her.
44 D MARISOL: Is she on time?
45 D EZRA: An hour late.
46 D MARISOL: Good.
47 D EZRA: Good?
48 D MARISOL: I wasn't ready.
49 A ¶ She picks up her bag.
50 A Sets it down again.
51 A Ezra looks at her.
52 A Sees her.
53 A Doesn't say anything.
54 A ¶ The rumble grows.
55 A The rails begin to sing.
56 A The windmill turns faster.
57 A Through the window, a smudge of black smoke climbs the sky.
58 D HAWTHORNE [O.S.] (closer): Two minutes!
59 D EZRA: You've got a ticket?
60 D MARISOL: Bought it in Fort Aurelius.
61 D EZRA: West of here?
62 D MARISOL: East.
63 D EZRA: Then you're going the wrong way.
64 D MARISOL: I know.
65 A ¶ She smiles a small, tired smile.
66 A Ezra nods.
67 A Takes his hat from a peg.
68 A He takes her carpetbag, without asking, and carries it to the door.
69 D EZRA: The platform's uneven. Mind the third board.
70 D MARISOL: Thank you, Mr. Calloway.
71 D EZRA: Ezra.
72 D MARISOL: Ezra.
73 A ¶ They step out into the light.
74 A The rumble becomes a roar.
75 A Wind pulls at Marisol's hair.
76 A She holds the locket against her throat.
77 D HAWTHORNE [O.S.] (shouting over the engine): She's coming in hot!
78 A ¶ The locomotive thunders into frame, steam and iron and sun.
79 A Ezra holds Marisol's bag out of the dust.
80 A ¶ The brakes scream.
81 A The train stops.
82 A Silence, and the hiss of steam.
83 A Ezra hands up the bag.
84 A Marisol climbs the step, turns once.
85 D MARISOL: Ezra.
86 D EZRA: Ma'am.
87 D MARISOL: Plant the tomatoes in May.
88 A ¶ He touches his hat.
89 A The conductor's whistle sounds.
90 A The train begins to move.
91 A ¶ Ezra watches until it is a smudge again, then a line, then nothing.
92 A He walks back into the office, sits, and takes up the seed catalogue.
93 A ¶ The key on the desk begins to chatter.

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
