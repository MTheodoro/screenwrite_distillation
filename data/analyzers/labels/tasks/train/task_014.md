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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01589.json
### SCENE s01589 | INT. NIGHT FERRY - OBSERVATION DECK - NIGHT
Detected names (may be incomplete or contain aliases): DAHLIA OYELARAN, RUSSELL KAPLAN, INGRID SOLBERG, BASIL MWANGI
1 A ¶ Open air, plastic benches, a vending machine blinking in the corner.
2 A The engine thrums underfoot.
3 A Black water, white wake.
4 A ¶ DAHLIA OYELARAN (30s, peacoat, a half-eaten sandwich) leans on the rail.
5 A Her ex, RUSSELL KAPLAN (30s, scarf, hands in pockets), stands three feet away, as close as he dares.
6 A ¶ Below them on the car deck, two figures drift between vehicles: INGRID SOLBERG (60s, captain's cap, a flashlight) and her deckhand, BASIL MWANGI (20s, orange vest, earbuds).
7 D DAHLIA: You followed me.
8 D RUSSELL: I took the same boat.
9 D DAHLIA: At midnight.
10 D RUSSELL: It was the last one.
11 D DAHLIA: It's always the last one with you.
12 A ¶ He laughs once, short.
13 A She doesn't.
14 A The ferry horn blows.
15 D RUSSELL: I got the job in Tallinn.
16 D DAHLIA: Good for you.
17 D RUSSELL: I turned it down.
18 D DAHLIA: Why?
19 D RUSSELL: You know why.
20 D DAHLIA: I don't.
21 D RUSSELL: Dahlia.
22 D DAHLIA: Say it.
23 D RUSSELL: Because you're here.
24 A ¶ She turns.
25 A Wind in her hair.
26 A He steps closer.
27 D DAHLIA: Four years, Russell. Four.
28 D RUSSELL: I counted every one.
29 D DAHLIA: You counted?
30 D RUSSELL: Like a prisoner.
31 A ¶ She looks at him, then at the water, then back.
32 D DAHLIA: I almost called you in February.
33 D RUSSELL: What stopped you?
34 D DAHLIA: The phone.
35 D RUSSELL: It was broken?
36 D DAHLIA: It was mine.
37 A ¶ He grins in spite of himself.
38 A She does too.
39 A A small, reluctant thaw.
40 D RUSSELL: I love you. Still. Dumb, isn't it?
41 D DAHLIA: Very.
42 D RUSSELL (hopeful): But?
43 D DAHLIA: But nothing.
44 A ¶ She takes his hand.
45 A A beat.
46 A Then Ingrid's voice cuts through the PA.
47 D INGRID [V.O.] (over loudspeaker): Attention passengers. We will dock in ten minutes.
48 D BASIL [V.O.] (over loudspeaker, muffled): Also, someone left a sandwich on bench seven.
49 D DAHLIA: That's mine.
50 D RUSSELL: You're going to leave it?
51 D DAHLIA: I'm going to stay.
52 A ¶ He leans in.
53 A They kiss.
54 D RUSSELL: ^I want to tell my mother.
55 D DAHLIA: ^I want to tell mine.
56 A ¶ They break apart, laughing, and she lifts her phone.
57 A His expression changes.
58 D RUSSELL: What's that?
59 D DAHLIA: A message.
60 D RUSSELL: From who?
61 A ¶ She turns the screen toward him.
62 A A name: "ELLIOT."
63 A Under it: "Ready for you at the port."
64 D DAHLIA: I was going to tell you.
65 D RUSSELL: When?
66 D DAHLIA: Tonight.
67 D RUSSELL: Dahlia.
68 D DAHLIA: It's complicated.
69 D RUSSELL: It always is.
70 A ¶ He steps back.
71 A The ferry lurches as it enters the harbor.
72 A Lights ahead.
73 D RUSSELL [CONT'D]: Who is he?
74 A ¶ She opens her mouth.
75 A The ferry horn drowns her answer.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00035.json
### SCENE s00035 | INT. FROZEN FOOD WAREHOUSE, WALK-IN FREEZER - NIGHT
Detected names (may be incomplete or contain aliases): ROZ, PETKOVIC, DENNIS ABERNATHY-VOSS, LAZARUS BELL
1 A ¶ Steel racks of frosted boxes.
2 A A vapor cloud rolls off every breath.
3 A The door is frozen shut.
4 A ¶ ROSALIND "ROZ" PETKOVIC (30s, thermal jacket, night inventory clipboard) crouches beside the door, pounding the latch.
5 A Behind her, her coworker DENNIS ABERNATHY-VOSS (40s, beard stiff with frost) paces the aisle.
6 A Between them, hunched on a pallet of peas, sits a stranger in a soaked tuxedo: LAZARUS BELL (50s, slow-blinking, shivering).
7 D ROZ: It's jammed!
8 D DENNIS: Hit it harder!
9 D ROZ: I am hitting it!
10 A ¶ Dennis shoves her aside and throws his shoulder into the door.
11 A It doesn't budge.
12 A They both slump against it, panting.
13 A ¶ Lazarus lifts his head.
14 D LAZARUS: It will not open.
15 D DENNIS: Who the hell are you?
16 D LAZARUS: A man in the wrong place.
17 D ROZ: How did you get in here?
18 D LAZARUS: I walked in. Hours ago. Perhaps days.
19 D DENNIS: Days? We've been here forty minutes.
20 D LAZARUS: You have been here forty minutes. I have been here longer.
21 A ¶ He stands.
22 A His breath doesn't fog.
23 A Roz sees it first and backs away, clipboard hugged to her chest.
24 D ROZ: Dennis.
25 D DENNIS: What?
26 D ROZ: Look at his breath.
27 A ¶ Dennis looks.
28 A Lazarus smiles, apologetic, and spreads his hands.
29 D LAZARUS: I have found it is easier not to tell people.
30 D DENNIS: Tell people what?
31 D LAZARUS: Only that it does not get warmer. That is all.
32 A ¶ Roz grabs Dennis by the sleeve and they both charge the door again, slamming into it together, again and again, until it cracks and bursts open on a blast of loading-dock air.
33 A ¶ They tumble out onto asphalt.
34 A Roz scrambles to look back.
35 A ¶ The freezer door swings gently shut.
36 A Through the shrinking gap, Lazarus raises a hand in farewell.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00640.json
### SCENE s00640 | INT. TAXIDERMIST'S WORKSHOP - NIGHT
Detected names (may be incomplete or contain aliases): SASHA, MELNYK, RAFFI, COSTANZA
1 A ¶ Glass eyes in trays.
2 A A badger on a stand.
3 A A fox mid-leap, forever.
4 A ¶ OLEKSANDR "SASHA" MELNYK, sixties, apron stiff with old plaster.
5 A Scalpel in hand.
6 A Steady.
7 A ¶ RAFAELLA "RAFFI" COSTANZA, forties.
8 A Camel coat.
9 A Sits on a stool among the heads.
10 A Smiling.
11 D RAFFI: You're late with the money, Sasha.
12 D SASHA: I'm late with everything. Ask the owl.
13 D RAFFI: The owl isn't my problem.
14 D SASHA: The owl has been my problem six weeks. Every customer wants it perfect. Nobody wants to pay for perfect.
15 D RAFFI: Neither do I.
16 D SASHA: I told your brother in March. I said, give me till the autumn.
17 D RAFFI: It's autumn.
18 D SASHA: It's the end of autumn.
19 D RAFFI: Sasha. Sasha. I like you. I like the shop. I like that nobody's been in here since Easter and the place still smells like a church.
20 D SASHA: That's the formaldehyde.
21 D RAFFI: That's what I said.
22 D SASHA: You want the shop? Take it. You want the badger? Take the badger. But don't stand there telling me you like me.
23 D RAFFI: I do like you.
24 D SASHA: Then why are you in my chair?
25 A ¶ She stands.
26 A Slowly.
27 A Pulls a long glass jar from the shelf and weighs it in her palm.
28 A ¶ Sasha lifts the scalpel an inch.
29 D RAFFI [CONT'D]: Put it down.
30 D SASHA: You put it down.
31 A ¶ The jar flies.
32 A Sasha ducks.
33 A Glass bursts on the badger.
34 A Raffi lunges across the bench and they crash into the shelves.
35 A Eyes spill across the floor, hundreds of them, rolling.
36 A ¶ Raffi pins his wrist.
37 A He drives a knee into her ribs.
38 A She gasps.
39 A The scalpel skitters away under the fox.
40 A ¶ They stop.
41 A Both breathing hard.
42 A Both looking at the dozens of little glass eyes staring up from the floor.
43 D SASHA [CONT'D] (quietly): Now you've made a mess.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01701.json
### SCENE s01701 | INT. VICTORIAN OBSERVATORY - NIGHT (1887)
Detected names (may be incomplete or contain aliases): YOUNG WOMAN, PROFESSOR EUSTACE PEMBERTON, PROFESSOR, OTTOLINE
1 A ¶ A copper dome open to the stars.
2 A A great brass telescope on a creaking mount, its tube pointing at a smear of the Milky Way.
3 A Chalk equations cover a slate board.
4 A ¶ A YOUNG WOMAN in a plain gray dress (20s) stands at the eyepiece, a notebook clutched to her chest.
5 A She has slipped in through the coal door.
6 A Behind her, from the stairwell, a lantern rises.
7 A ¶ An old man, PROFESSOR EUSTACE PEMBERTON (70s, nightshirt, dressing gown, white whiskers), emerges, glaring.
8 D PROFESSOR: Who is there? Show yourself!
9 A ¶ She spins, notebook falling.
10 A He lifts the lantern.
11 A The light finds her face.
12 D YOUNG WOMAN: Professor, please. I only wished to see.
13 D PROFESSOR: This is a private instrument.
14 D YOUNG WOMAN: I am Ottoline Marsh, sir. I wrote to you eleven times.
15 A ¶ He lowers the lantern a little.
16 A His beard trembles.
17 D PROFESSOR: The scullery girl's cousin? The one who counts comets?
18 D OTTOLINE: I do not count them, sir. I find them.
19 A ¶ He stares at her.
20 A Then at the telescope.
21 A Then at the sky through the open dome.
22 D PROFESSOR: Show me.
23 A ¶ She hesitates, steps to the eyepiece, adjusts a brass knob with practiced fingers.
24 A He peers in after her.
25 A A long silence.
26 D PROFESSOR [CONT'D]: God in heaven.
27 D OTTOLINE: Yes, sir.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01519.json
### SCENE s01519 | INT. LIGHTHOUSE-TURNED-WEDDING-VENUE, SEASIDE TERRACE - EVENING
Detected names (may be incomplete or contain aliases): ROSS, CLEM, AUNT ZENOBIA, ^ROSS, YUSUF, LENA, OLD MR. TIBERIUS
1 A ¶ A white tower on a cliff above a violet sea.
2 A A terrace strung with lights.
3 A A small dance floor.
4 A Folding chairs, half of them empty.
5 A A cake on a card table.
6 A ¶ Six wedding guests drift in the golden hour.
7 A ¶ CLEMENTINE "CLEM" OKONKWO-ASHBY.
8 A 30s.
9 A Maid of honor.
10 A Hair coming loose.
11 A ¶ ROSS MAKINDE-LINDQVIST.
12 A 30s.
13 A The best man.
14 A A slightly crooked tie.
15 A ¶ AUNT ZENOBIA ADEYEMI-HART.
16 A 60s.
17 A Sequins.
18 A Fierce.
19 A ¶ YUSUF ABARA-KOWALSKI.
20 A 40s.
21 A Photographer.
22 A A heavy camera.
23 A ¶ LENA PETRAKIS-NGUYEN.
24 A 20s.
25 A A catering waitress with a tray of champagne.
26 A ¶ OLD MR. TIBERIUS BRANDT-OSEI.
27 A 80s.
28 A The groom's grandfather.
29 A A cane.
30 A ¶ Clem watches the sea.
31 A Ross watches Clem.
32 D ROSS: You've been standing there for twenty minutes.
33 D CLEM: I'm thinking.
34 D ROSS: About what?
35 D CLEM: About the speech.
36 D ROSS: You wrote it.
37 D CLEM: That's the problem.
38 A ¶ She turns.
39 A He smiles.
40 A She does not.
41 D AUNT ZENOBIA: Children, the cake!
42 A ¶ Clem and Ross speak at the same time.
43 D CLEM: Not yet.
44 D ^ROSS: Not yet.
45 A ¶ They look at each other.
46 A A small, startled grin passes between them.
47 D YUSUF: Smile for me, you two.
48 A ¶ They don't.
49 A Yusuf lowers the camera.
50 D YUSUF [CONT'D]: Ah. That's the better shot.
51 D CLEM: Don't you dare print that.
52 D YUSUF: I wouldn't dream of it.
53 A ¶ Lena glides past with her tray.
54 A She offers a flute to Clem.
55 A Clem takes one.
56 A She offers one to Ross.
57 A Ross takes it, and with it, brushes Clem's fingers.
58 D LENA (murmuring): Careful. People are watching.
59 A ¶ Clem looks across the terrace, past the cake, to the sea.
60 A Ross lowers his eyes.
61 D OLD MR. TIBERIUS: Is it time?
62 D AUNT ZENOBIA: It's time, Tiberius.
63 A ¶ He taps his cane.
64 A A gong sounds from within the tower.
65 A Guests turn toward the stairs.
66 D ROSS: We should go in.
67 D CLEM: We should.
68 A ¶ Neither moves.
69 A Ross sets down his flute.
70 A Clem sets down hers.
71 A The gong sounds again.
72 D ROSS: Clem.
73 D CLEM: Don't.
74 D ROSS: I haven't said anything.
75 D CLEM: You were going to.
76 D ROSS: I was going to say your speech was good.
77 D CLEM: You haven't heard it.
78 D ROSS: I know you.
79 A ¶ She laughs.
80 A It is half a sob.
81 A He reaches for her hand.
82 A She lets him take it for exactly one heartbeat, then pulls free and walks toward the tower.
83 A ¶ He stays behind, alone at the rail, watching the violet sea.
84 A Lena returns and takes his empty flute.
85 D LENA: She'll come around.
86 D ROSS: She already did.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01984.json
### SCENE s01984 | EXT. FERRIS WHEEL, TOP GONDOLA - NIGHT
Detected names (may be incomplete or contain aliases): PETRA SOLBERG-IWU, CAL, ARDOUIN, OPERATOR
1 A ¶ A county-fair Ferris wheel, lit gold against a black sky.
2 A It has stopped.
3 A The top gondola sways.
4 A Far below, a crowd and a stuttering generator.
5 A ¶ PETRA SOLBERG-IWU (30s, vintage dress, nerves) clutches the safety bar.
6 A Beside her, CALLUM "CAL" ARDOUIN (30s, bad blazer, worse haircut) leans over the rail and waves at the ground.
7 D CAL (shouting): Hello down there! We're fine!
8 D PETRA: They can't hear you.
9 D CAL: They'll see me waving.
10 D PETRA: They'll see a man falling.
11 A ¶ He pulls back, sits, grips the bar beside her.
12 A The gondola creaks.
13 D CAL: Okay. So. This is not how I planned it.
14 D PETRA: How did you plan it?
15 D CAL: Cotton candy. Slow ride. Kiss at the top.
16 D PETRA: We are at the top.
17 D CAL: Yes.
18 D PETRA: Cal.
19 D CAL: Yes?
20 D PETRA: It's not a good moment.
21 D CAL: It's an excellent moment. We have all the time in the world. We're stuck.
22 A ¶ She laughs, sharp.
23 A Looks away.
24 D PETRA (to herself): Oh, this is ridiculous.
25 D CAL: What did you say?
26 D PETRA: Nothing.
27 D CAL: You said ridiculous.
28 D PETRA: I said it to myself.
29 A ¶ A gust.
30 A The gondola lurches.
31 A She seizes his arm.
32 A He freezes.
33 A They both look at her hand.
34 D CAL (softly): Petra.
35 D PETRA: I'm not letting go.
36 D CAL: I wouldn't ask you to.
37 A ¶ Below, a loudspeaker crackles.
38 D OPERATOR [V.O.] (distant, bullhorn): Folks, we're working on it! Stay seated! Do not stand!
39 A ¶ Cal cups his hands and calls down.
40 D CAL (shouting): Take your time!
41 D PETRA (shouting): No, hurry up!
42 D CAL (shouting): Take your time!
43 D PETRA (shouting): Hurry up!
44 A ¶ They look at each other.
45 A And laugh.
46 A The laughter fades into a silence that feels different.
47 D CAL: I'm going to kiss you now.
48 D PETRA: Don't you dare.
49 D CAL: Why not?
50 D PETRA: Because if you do, and they start the wheel, I'll miss it.
51 D CAL: You'll miss the kiss?
52 D PETRA: I'll miss the view. You'll be in front of it.
53 A ¶ He grins.
54 A Sits back.
55 A Both of them stare out over the gold-lit fair and the dark fields beyond it.
56 D CAL: It's pretty up here.
57 D PETRA: It is.
58 A ¶ The wheel shudders.
59 A Moves.
60 D CAL: Ah. There it goes.
61 D PETRA: Cal.
62 D CAL: Yes?
63 D PETRA: Now.
64 A ¶ He turns.
65 A She meets him halfway.
66 A The gondola begins its slow descent, and the generator coughs, and they ride down in a pool of golden light.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00352.json
### SCENE s00352 | INT. FAMILY HARDWARE STORE - AFTER HOURS - NIGHT
Detected names (may be incomplete or contain aliases): ROSE LINDQVIST, HENRY LINDQVIST, MARGO LINDQVIST-BYRNE, DANNY LINDQVIST, UNCLE FRITZ
1 A ¶ A narrow hardware store, aisles crowded floor to ceiling with bins of nails, rope, washers, paint cans.
2 A A single bulb hangs over the register.
3 A A cardboard sign taped to the door reads: "CLOSED.
4 A FOREVER?"
5 A ¶ ROSE LINDQVIST, sixties, the widow, sits on a stool at the register, a cigar box open in front of her.
6 A HENRY LINDQVIST, forties, her eldest, in a suit, paces the center aisle.
7 A MARGO LINDQVIST-BYRNE, thirties, her daughter, leans against the paint counter with her arms crossed.
8 A DANNY LINDQVIST, twenty-five, her youngest, sits on an upturned bucket by the door.
9 A UNCLE FRITZ, seventies, Rose's brother-in-law, polishes a hammer with a rag, saying nothing.
10 D HENRY: Mom, the offer expires Friday.
11 D ROSE: I know when Friday is.
12 D MARGO: Henry, can you sit down?
13 D HENRY: I'm trying to help.
14 D MARGO: You're trying to pace.
15 D HENRY: Danny, tell her.
16 D DANNY: Tell her what?
17 D HENRY: That fourteen hundred square feet next to a Whole Foods is worth three times what this place makes.
18 D DANNY: I don't know, Henry.
19 D HENRY: You don't know.
20 D DANNY: It's Dad's store.
21 D HENRY: Dad's dead, Danny.
22 A ¶ Silence.
23 A Fritz stops polishing.
24 A Margo uncrosses her arms.
25 A Rose closes the cigar box with a small click.
26 D ROSE: Say that again.
27 D HENRY: Mom, I didn't mean...
28 D ROSE: Say it again, Henry. To my face.
29 A ¶ Henry stops in the middle of the aisle.
30 A He opens his mouth.
31 A He closes it.
32 D MARGO: Mom.
33 D ROSE: Quiet, Margo.
34 A ¶ Danny stands.
35 A The bucket tips and clatters.
36 A Henry spins toward the sound, his sleeve catching a display of screwdrivers, and a hundred handles hit the floor, rolling.
37 D HENRY: Great. Fantastic.
38 D DANNY: I've got it.
39 D HENRY: Leave it, Danny!
40 D DANNY: I said I've got it!
41 A ¶ He drops to his knees and gathers the screwdrivers.
42 A Margo kneels beside him.
43 A Henry stands with his hands open at his sides.
44 A Fritz sets down the hammer, picks up a broom, and begins to sweep, slow and steady.
45 D ROSE: Your father kept the books in this box.
46 A ¶ She lifts the lid.
47 A Inside are index cards, hundreds of them, in neat blue ink.
48 D ROSE [CONT'D]: Every customer who ever couldn't pay. Every tab he let ride. Forty years.
49 D MARGO: Mom, I never knew.
50 D ROSE: Nobody did. That's the thing about your father. He never wanted to be thanked.
51 D HENRY (quiet): How much is owed?
52 D ROSE: I haven't counted. I think it's more than the Whole Foods offer.
53 A ¶ Henry laughs once, a helpless sound.
54 A He sits down on the floor in the middle of the screwdrivers.
55 D HENRY: Uncle Fritz, did you know?
56 D FRITZ: I wrote half those cards.
57 D DANNY: We're not selling.
58 D HENRY: Danny.
59 D DANNY: We're not selling it, Henry.
60 D MARGO: No.
61 D HENRY (rising, pulling at his tie): Then we run it. All four of us. Like he did.
62 D ROSE: Five.
63 A ¶ She nods at Fritz.
64 A He lifts the broom in salute.
65 A Henry crosses to the register and takes the cigar box in both hands, and Rose lets him.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02317.json
### SCENE s02317 | INT. FAMILY MINIVAN, PARKED OUTSIDE GRANDMA'S HOUSE - DAY
Detected names (may be incomplete or contain aliases): DAD, ROBERT OYELARAN, MOM, WENDY OYELARAN, TEEN, MAYA, LITTLE BROTHER BENNY
1 A ¶ Rain taps the windshield.
2 A The seats are littered with crayons and fast-food bags.
3 A A tiny air freshener swings from the mirror.
4 A ¶ DAD, ROBERT OYELARAN, forty-five, grips the wheel and stares at the house.
5 A MOM, WENDY OYELARAN, forty-three, in the passenger seat, adjusts her hair in the visor mirror.
6 A In the back, TEEN, MAYA, fifteen, scrolls her phone, earbuds in, and LITTLE BROTHER BENNY, seven, hugs a stuffed rabbit.
7 D WENDY (to the car): Okay. Everyone. Smile, be polite, no complaining.
8 D BENNY: Do I have to hug her?
9 D ROBERT: Yes.
10 D BENNY: She smells like cabbage.
11 D WENDY: Benny.
12 D MAYA (pulling an earbud): Can we skip it this year?
13 D ROBERT: No, Maya.
14 D MAYA (muttering): Great.
15 D WENDY: Robert, you remember what we agreed.
16 D ROBERT: No politics.
17 D WENDY: No politics, no complaints about the casserole.
18 D ROBERT: She makes it on purpose.
19 D WENDY: Robert.
20 D ROBERT: Fine.
21 A ¶ The front door of the house opens.
22 A GRANDMA waves from the porch in a pink cardigan.
23 A Everyone in the van freezes, then waves back at once, teeth bared in unison.
24 D BENNY: She's got the casserole.
25 D ROBERT (under his breath): I know.
26 A ¶ The doors open.
27 A They file out into the rain, Maya last, dragging her feet.
28 A She pauses to pocket her earbuds.
29 D MAYA (whispering): Love you guys.
30 D WENDY: What?
31 D MAYA: Nothing. Let's go.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02334.json
### SCENE s02334 | EXT. SKY-WHALE MARKET - FLOATING DECK - DAWN
Detected names (may be incomplete or contain aliases): MIMSY, ASHGROVE, GID, THORNE
1 A ¶ A vast whale drifts through pink clouds, its back lashed with rope bridges and canvas stalls.
2 A Lanterns burn in the morning.
3 A Merchants shout in the distance.
4 A ¶ MIRABEL "MIMSY" ASHGROVE, 20s, a thief in a patchwork cloak, crouches on a spice barrel.
5 A A copper compass spins in her fist.
6 A ¶ GIDEON "GID" THORNE, 30s, in the livery of the Harbor Guard, climbs the barrel stack behind her.
7 A His boots slap the planks.
8 D GID: Mimsy. Don't.
9 D MIMSY: Gid.
10 D GID: Put it down.
11 D MIMSY: It was mine first.
12 D GID: It belonged to the Admiral.
13 D MIMSY: The Admiral is dead.
14 D GID: That doesn't make it yours.
15 A ¶ Mimsy tosses the compass from hand to hand.
16 A He winces at each toss.
17 D MIMSY (to herself): Steady, girl. Steady.
18 D GID: Who are you talking to?
19 D MIMSY: Nobody.
20 A ¶ She stands on the barrel.
21 A Spreads her arms to the whole market below.
22 A The merchants glance up.
23 D MIMSY [CONT'D] (loudly, to the crowd): Good people of the Whale! This man would take my inheritance!
24 A ¶ A murmur.
25 A A woman drops a basket of figs.
26 A A boy points.
27 D GID (to the crowd): Nothing of the sort! Return to your stalls!
28 D MIMSY: He's a liar!
29 D GID: She's a thief!
30 D MIMSY: Both can be true.
31 A ¶ Gid lunges.
32 A Mimsy leaps.
33 A They collide midair and crash through the canvas roof of the fruit stall, tumbling in a heap of melons and rope.
34 A ¶ Both lie flat for a second.
35 A Then both scramble upright, glaring, each with one hand on the compass.
36 D GID [CONT'D]: Let go, Mimsy.
37 D MIMSY: You first, Gid.
38 A ¶ They pull.
39 A The compass spins.
40 A The needle jerks west, then stops, pointing straight down at the clouds beneath the whale.
41 A ¶ Both freeze.
42 A They look at the needle.
43 A Then at each other.
44 D MIMSY [CONT'D] (quietly): Oh.
45 D GID: It's pointing at the sea.
46 D MIMSY: It's pointing at something under the sea.
47 A ¶ The whale rumbles, a long, deep note that shakes the stalls.
48 A The lanterns sway.
49 A The merchants scatter, tipping carts.
50 D GID: Run?
51 D MIMSY: Run.
52 A ¶ They pull the compass between them like a rope and sprint for the bow.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00031.json
### SCENE s00031 | INT. CLOCKMAKER'S GUILD VAULT ANTECHAMBER - NIGHT
Detected names (may be incomplete or contain aliases): SECOND MAN, JANITOR, GUARD, DWYER, STRANGER
1 A ¶ Marble floor.
2 A Brass pendulums under glass domes, swinging out of sync.
3 A A time lock gleams on a steel door.
4 A ¶ A MAN in a janitor's coverall mops, eyes down.
5 A He is tall, mid-40s, with a limp.
6 A Behind him, a second MAN in a security blazer, younger, wide-shouldered, scrolls a tablet.
7 A ¶ The janitor stops mopping and glances at the guard.
8 A The guard doesn't look up.
9 D JANITOR: Quiet shift.
10 D GUARD: Don't talk to me while I'm working.
11 D JANITOR: Right.
12 A ¶ He mops closer to the door.
13 A His mop handle taps the lock panel, twice, a soft tick.
14 D GUARD: Hey. What was that?
15 D JANITOR: Nothing. Sorry.
16 A ¶ The guard approaches, tablet lowered.
17 A The janitor straightens.
18 A Their eyes meet.
19 D GUARD: I don't think I know you.
20 D JANITOR: Third week. Night crew.
21 D GUARD: Name?
22 A ¶ A beat.
23 A Somewhere, a pendulum clicks.
24 A The janitor's hand slips into his bucket.
25 D JANITOR: Cormac Dwyer.
26 D GUARD (reading from tablet): There's no Dwyer on the roster.
27 D DWYER (calmly): No. There isn't.
28 A ¶ He pulls a taser from the bucket and fires.
29 A The guard drops.
30 A Dwyer kneels, takes his keycard, and turns to the pendulums.
31 A ¶ At the far end of the room, a SECOND MAN has stood watching from the shadows the entire time: a thin figure in a clockmaker's apron, silver hair, spectacles.
32 A He steps forward.
33 D STRANGER: You're early.
34 D DWYER (not surprised): You said midnight.
35 D STRANGER: I said twelve-oh-three. He walks the floor at twelve-oh-two.
36 D DWYER: Then he's dead on schedule.
37 A ¶ The stranger smiles, tucks a loupe into his pocket, and removes a key from around his neck.
38 D STRANGER: Call me Aurelio.
39 A ¶ AURELIO inserts the key.
40 A The vault door sighs open on a room of ticking gold.
