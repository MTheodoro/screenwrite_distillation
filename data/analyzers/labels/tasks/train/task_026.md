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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00720.json
### SCENE s00720 | INT. MUNICIPAL PIGEON CENSUS OFFICE - SUBBASEMENT - DAY
Detected names (may be incomplete or contain aliases): GWENDOLYN PRATT, TOBIAS NKEMELU, ANJALI VERMA, OSKAR LINDQVIST, MARISOL DUARTE, INTERCOM, LEONARD
1 A ¶ A windowless room under City Hall, lit by one fluorescent tube that has been dying since the last administration.
2 A Clipboards hang from nails like pelts.
3 A On every wall, laminated maps of the city are stuck with coloured pins, each pin a flock nobody has visited in years.
4 A ¶ GWENDOLYN PRATT, fifties, Regional Avian Statistics Director, stands on a wobbling chair in a cardigan the colour of weak tea.
5 A She holds a single grey feather aloft like a verdict.
6 A ¶ Around the long table, the team has gone still.
7 A ¶ TOBIAS NKEMELU, thirties, the only person in the office with a tan, lowers his sandwich.
8 A ANJALI VERMA, twenties, sharp-eyed, clicks her pen once, twice.
9 A OSKAR LINDQVIST, sixties, a man built entirely of corduroy, does not look up from his crossword.
10 A MARISOL DUARTE, forties, the department's tired heart, sits with her coat still on.
11 D GWENDOLYN (to everyone): Colleagues. The Mayor's office wants the Q3 count by four o'clock. We have counted, by my reckoning, eleven pigeons.
12 D TOBIAS: Eleven in total? In the city?
13 D GWENDOLYN: Eleven that are confirmed to be pigeons and not, as Oskar's report suggested, "a mood."
14 D OSKAR (not looking up): Seven letters. "Regret, in a hat."
15 D ANJALI (to Gwendolyn): Ma'am, I've been telling you since March. The spreadsheet's counting the same bird. Reginald. He's got a limp.
16 D GWENDOLYN: Reginald is a limp. Reginald is not a flock.
17 A ¶ Gwendolyn steps down from the chair.
18 A It rocks, then forgives her.
19 A She smooths the cardigan and, for the first time, looks tired.
20 D GWENDOLYN [CONT'D] (muttering, to herself): Thirty years. Thirty years of pins.
21 A ¶ An INTERCOM crackles on the wall above the door, a beige box with a tongue of dust.
22 D LEONARD [V.O.] (over intercom, bright): Hello, subbasement! Leonard from Facilities. Quick heads up, the four o'clock deadline has been moved to "whenever." The Mayor has discovered squirrels.
23 A ¶ The room exhales as one body.
24 A Tobias resumes his sandwich.
25 A Anjali caps her pen.
26 D MARISOL (to Leonard's box): Thank you, Leonard.
27 D LEONARD [V.O.] (over intercom): Also, someone's been leaving feathers in the lift. Just flagging.
28 A ¶ Gwendolyn looks at the feather in her hand.
29 A She walks to the nearest map and, with great ceremony, pins it to the middle of the city.
30 D GWENDOLYN (quietly, to Marisol): Put that down as twelve.
31 D MARISOL: It's a feather.
32 D GWENDOLYN: It's a pigeon in spirit.
33 A ¶ Oskar fills in a word.
34 A He nods, satisfied, at no one at all.
35 D OSKAR (to himself): Hat.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00876.json
### SCENE s00876 | EXT. ABANDONED SALT WORKS - EVAPORATION FLATS - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): TOBIAS WREN, ESPERANZA QUINTERO, LUKA
1 A ¶ A white country, flat to the edge of the sky.
2 A Shallow ponds, each a different shade of rose and bone, are cut by crumbling wooden sluice gates.
3 A The wind carries a taste of brine.
4 A At the far end, a long shed with a sagging tin roof, its door hanging off one hinge.
5 A ¶ TOBIAS WREN, 60s, kneels at a pond's edge, scooping salt crystals into a sack.
6 A Weathered as a fence post, his hat brim stiff with old sweat, his beard a pale yellow like old piano keys.
7 A His hands are cracked from decades of brine.
8 A He works without hurry.
9 A ¶ A figure approaches along the causeway.
10 A ESPERANZA QUINTERO, 30s, rides a grey mule, a rifle slung across her back and a canvas satchel on her hip.
11 A Dust-coloured coat.
12 A Black braid.
13 A She stops the mule a polite distance away.
14 D ESPERANZA: You Wren?
15 D TOBIAS: Depends who's asking.
16 D ESPERANZA: Esperanza Quintero. I bought the claim at the other end of the flats.
17 D TOBIAS: That's a lot of nothing to buy.
18 D ESPERANZA: It's cheap nothing.
19 A ¶ He almost smiles.
20 A Drops another handful of salt into the sack.
21 D TOBIAS: Water's bad on your side.
22 D ESPERANZA: I figured.
23 D TOBIAS: Good on mine. If you ask nicely.
24 A ¶ She slides down from the mule.
25 A Boots crunch on the crust.
26 A She looks across the flats, then at him.
27 D ESPERANZA: I'm asking.
28 A ¶ A boy emerges from the shed, barefoot, nine or ten, LUKA, thin as a rope and just as strong.
29 A He carries a bucket almost as big as his torso.
30 D LUKA: Grandpa, the pump's stuck again.
31 D TOBIAS: Then unstick it.
32 D LUKA: I tried.
33 D TOBIAS: Try harder.
34 A ¶ Luka notices Esperanza.
35 A Stares at the rifle.
36 A Stares at the mule.
37 D LUKA: Is that a real gun?
38 D ESPERANZA: It's a real mule.
39 D LUKA (grinning): Can I touch him?
40 D ESPERANZA: Her. Be gentle.
41 A ¶ He sets down the bucket and approaches the mule with both palms out, whispering.
42 A The mule allows it.
43 A Tobias watches the boy, then the woman, then the horizon.
44 D TOBIAS: Sit. There's coffee. It's terrible.
45 D ESPERANZA: I've had worse.
46 D TOBIAS: Not out here.
47 A ¶ She smiles, ties the mule to a post, and follows him toward the shed.
48 A Behind them the salt shines like a field of broken glass under the long low sun.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01667.json
### SCENE s01667 | INT. HOTEL BALLROOM - 24-HOUR TABLE TENNIS MARATHON - NIGHT
Detected names (may be incomplete or contain aliases): NORIKO ABE, DESMOND CRAWLEY
1 A ¶ Chandeliers dimmed to amber.
2 A One green table in the center of a vast parquet floor.
3 A Folding chairs along the walls, empty.
4 A A banner sagging between two columns: HOUR 19.
5 A ¶ NORIKO ABE, 40s, in a faded tracksuit with a sweatband, bounces the ball once off her paddle.
6 A DESMOND CRAWLEY, 50s, in bright orange shorts, stands across from her, red-faced, shoulders heaving.
7 A ¶ The scoreboard reads 10-10.
8 A A cardboard sign propped against it: SUDDEN DEATH.
9 D DESMOND (to the empty ballroom): Did everyone hear that? Ten-all!
10 A ¶ Nobody answers.
11 A A janitor's vacuum hums far away.
12 D NORIKO: Serve.
13 D DESMOND: I know it's my serve.
14 D NORIKO: Then serve.
15 D DESMOND: I'm gathering my thoughts.
16 D NORIKO: They've scattered.
17 A ¶ Desmond tosses the ball.
18 A Whacks it.
19 A It flies in a slow arc.
20 A Noriko returns, short, with a flick of the wrist.
21 A Desmond lunges, snaps a backhand over the net.
22 A Noriko leaps, smashes, and the ball cracks onto the table and into the dark, and Desmond, chasing it, goes down hard against a stack of chairs, which clatter across the floor like dropped cutlery while Noriko, arms raised, is already celebrating alone.
23 D NORIKO [CONT'D]: Point!
24 A ¶ Desmond sits up.
25 A Chairs are tangled around his legs.
26 D DESMOND: Out!
27 D NORIKO: It was on the line.
28 D DESMOND: It was off the line.
29 D NORIKO: It kissed the line.
30 D DESMOND (muttering): It kissed my dignity.
31 A ¶ He gets to his feet.
32 A Pulls a chair off his shin.
33 A Looks at the scoreboard.
34 A 11-10.
35 D DESMOND [CONT'D] (to the room): For the record, I'd like it noted that I was provoked.
36 D NORIKO: By what?
37 D DESMOND: By you existing.
38 A ¶ She smiles.
39 A It is the first smile of the night.
40 D NORIKO: Match point.
41 D DESMOND: Don't.
42 D NORIKO: Your serve.
43 D DESMOND (grim): Fine.
44 A ¶ He retrieves the ball from beneath a chair.
45 A Wipes it on his shorts.
46 A Steps to the end of the table.
47 A Stares at her, then at the ball, then at the chandelier.
48 D DESMOND [CONT'D] (to himself): Twenty-four hours. One ball. Two idiots.
49 A ¶ He serves.
50 A A looping, impossible spin.
51 A Noriko tracks it.
52 A Lifts her paddle.
53 A Misses by an inch.
54 A ¶ The ball bounces off the table.
55 A Drifts across the ballroom.
56 A Rolls to a stop at a vacuum cleaner's wheels.
57 A ¶ A long silence.
58 A They both stare at it.
59 D NORIKO: Eleven-eleven.
60 D DESMOND: It's a point for me!
61 D NORIKO: It's a point for you.
62 D DESMOND: It's eleven-eleven.
63 D NORIKO: You need two.
64 D DESMOND: I know that!
65 A ¶ He walks down the room to fetch the ball.
66 A His shoes squeak on the parquet.
67 A Behind him, Noriko sinks onto the edge of the table, rubs her wrist, and looks at the banner.
68 A HOUR 19.
69 A She counts silently on her fingers.
70 D NORIKO (under her breath): Five more hours.
71 A ¶ Desmond returns with the ball.
72 A He holds it up like a trophy.
73 D DESMOND: Found it.
74 D NORIKO: It didn't go far.
75 D DESMOND: Nothing in this room goes far.
76 A ¶ They look at each other.
77 A Both, slowly, start to laugh.
78 A Neither can stop.
79 A Desmond has to put the paddle down.
80 A Noriko wipes her eyes.
81 D NORIKO: Why are we here?
82 D DESMOND: For charity.
83 D NORIKO: Which one?
84 D DESMOND: I don't remember.
85 D NORIKO: Serve, Desmond.
86 D DESMOND (winded, grinning): Serving.
87 A ¶ He serves.
88 A She returns.
89 A They rally.
90 A It goes on and on, ball ticking over the net, the sound filling the ballroom like the beating of a patient heart, until neither of them is keeping score.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00472.json
### SCENE s00472 | INT. NATURAL HISTORY MUSEUM - TAXIDERMY HALL - NIGHT
Detected names (may be incomplete or contain aliases): SUNNIVA HALVORSEN, MERIEM AIT-OUDIA, BASEMENT
1 A ¶ A long gallery with a ceiling lost in dark.
2 A Glass cases run down both walls like the windows of a train that stopped decades ago.
3 A Inside them: foxes mid-stride, owls with wings half-raised, a heron balanced on one leg in painted reeds.
4 A Dust lies over everything in a soft grey fur.
5 A ¶ Two flashlight beams cross the threshold and wander.
6 A ¶ SUNNIVA HALVORSEN (30s, cropped hair, a surveyor's vest with too many pockets) steps in first.
7 A She runs her light across the cases the way a person reads a menu in a language she half knows.
8 A ¶ MERIEM AIT-OUDIA (40s, heavy coat, an old camera strapped across her chest) follows two paces behind, breathing through her mouth.
9 D SUNNIVA: Council wants an inventory by Friday.
10 D MERIEM: Of what?
11 D SUNNIVA: Everything with a tag.
12 D MERIEM: Everything here has a tag.
13 A ¶ Sunniva crouches before a case of badgers.
14 A Their glass eyes catch the light and hold it a half-second too long.
15 A She tilts her beam and the shine slides away.
16 A ¶ Meriem lifts the camera.
17 A She frames the heron.
18 A She does not press the shutter.
19 A She lowers it, wipes the lens with her sleeve, and lifts it again.
20 D SUNNIVA: You can take the picture.
21 D MERIEM: I'm waiting for the light.
22 D SUNNIVA: It's a flashlight. It's not going to change.
23 A ¶ Meriem lowers the camera.
24 A She looks at the heron, then at the floor in front of its case.
25 A A line of small, clean prints crosses the dust there, pale and even, as if something had walked the length of the hall on bare feet.
26 A ¶ Sunniva sees them a moment after.
27 A She stands.
28 A She sets her light on the floor, pointing along the trail.
29 A It runs to the end of the gallery and into the dark between two cases.
30 D SUNNIVA [CONT'D]: Night guard.
31 D MERIEM: There is no night guard.
32 D SUNNIVA: Then somebody from the cleaning contract.
33 D MERIEM: No one has cleaned this hall in eleven years.
34 A ¶ The beam trembles.
35 A Neither of them says whose hand is holding it.
36 A ¶ Sunniva follows the prints a few steps.
37 A Meriem follows her.
38 A Between the cases there is a narrow service door, painted the same green as the wall.
39 A It is open an inch.
40 A Cold air breathes out of it, smelling of camphor and rain.
41 A ¶ Meriem reaches past her and pushes the door wider.
42 A She leans her light into the gap.
43 A Stairs, going down.
44 A On the third stair, a single wet footprint, still shining.
45 D SUNNIVA (quietly): That one's new.
46 D MERIEM: Yes.
47 A ¶ They stand together at the lip of the stairwell.
48 A Behind them, in the hall, something small and dry settles in one of the cases: a click, like a claw on glass.
49 A Neither turns around.
50 A ¶ Sunniva takes out her clipboard.
51 A She writes a line.
52 A She shows it to Meriem.
53 A ¶ The page says: BASEMENT - NOT ON INVENTORY.
54 A ¶ Meriem nods.
55 A She lifts the camera and, for the first time, presses the shutter.
56 A The flash fills the stairwell white.
57 A In the afterimage, the stairs are exactly as they were.
58 A The wet print is gone.
59 D MERIEM [CONT'D]: Friday.
60 D SUNNIVA: Friday.
61 A ¶ She pulls the green door shut.
62 A It latches with a sound like a held breath let go.
63 A Both of them go back down the long gallery, past the badgers, past the owls.
64 A They do not hurry.
65 A Behind them, every glass eye in the hall has turned a few degrees toward the door.
66 A ¶ Sunniva stops at the exit and puts her hand flat against the wall.
67 A She switches off her light.
68 A Meriem switches off hers.
69 A ¶ In the dark, the prints continue to cross the dust, one after another, toward the place where the two women had been standing.
70 D SUNNIVA [CONT'D] (whispering): Don't look back.
71 D MERIEM: I wasn't going to.
72 A ¶ She opens the door to the street.
73 A Rain falls through the streetlight, ordinary and loud.
74 A They step out into it side by side, and the door swings shut on its own, slow, with the patience of a thing that has all night.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02249.json
### SCENE s02249 | INT. NEWSROOM - OVERNIGHT - EMPTY
Detected names (may be incomplete or contain aliases): LUCINDA VALE
1 A ¶ Desks in rows.
2 A Dead monitors.
3 A A cleaning cart abandoned mid-aisle.
4 A An answering machine blinks on a corner desk, red.
5 A ¶ A stairwell door opens.
6 A ¶ LUCINDA VALE, forties, a long raincoat, a messenger bag, a flash drive between her fingers, slips in.
7 A She locks the door behind her.
8 A Crosses the room on tiptoe.
9 A ¶ She stops at the corner desk.
10 A Presses the machine's button.
11 D LUCINDA [V.O.] (her recorded voice, tired): Message one. Lucy, it's you. If you're hearing this, you're back at the paper. Don't go home. They'll be at the apartment.
12 A ¶ Lucinda sits.
13 A Her hand covers her mouth.
14 D LUCINDA [V.O., CONT'D]: The story's real. Every document. But they know about the drive.
15 A ¶ She looks at the flash drive in her palm.
16 D LUCINDA (to herself): Of course they do.
17 D LUCINDA [V.O.]: Message two. Send it from the old terminal. The one with no network log.
18 D LUCINDA: Clever girl.
19 A ¶ The machine clicks off.
20 A ¶ She rises.
21 A Crosses to a dusty terminal beneath a stack of old directories, blows off the dust, turns it on.
22 A It groans awake.
23 A ¶ She plugs in the drive.
24 A A folder opens.
25 A Hundreds of files.
26 A She scrolls fast, eyes flicking.
27 D LUCINDA [CONT'D] (whispering): There you are.
28 A ¶ She selects a document and attaches it to an email.
29 A Her cursor hovers over SEND.
30 A Somewhere in the building, an elevator dings.
31 A She flinches, then steadies herself, and clicks.
32 A ¶ A progress bar crawls.
33 D LUCINDA [CONT'D]: Come on. Come on.
34 A ¶ The bar hits ninety.
35 A Ninety-five.
36 A She pulls the drive free as it completes.
37 A The terminal chimes, softly: SENT.
38 A ¶ Lucinda shuts her eyes, then pockets the drive, buttons her raincoat, and leaves the way she came.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00135.json
### SCENE s00135 | INT. FIELD HOSPITAL - REQUISITIONED BALLROOM - NIGHT
Detected names (may be incomplete or contain aliases): SERGEANT NIKODEM ZAWADZKI, NURSE PHILOMENA OKONKWO, PRIVATE ELIAS BRODEUR, STRANGER, MARCHETTI
1 A ¶ A grand hall of cracked chandeliers and bloodied parquet.
2 A Cots in rows where the dance floor used to be.
3 A Lanterns hang from candelabras.
4 A Somewhere, a gramophone with no needle collects dust.
5 A ¶ SERGEANT NIKODEM ZAWADZKI, 30s, left arm in a sling, sits on a cot.
6 A Beside him, NURSE PHILOMENA OKONKWO, 30s, rolls bandages with grim efficiency.
7 A Across the aisle, a young soldier lies still, face to the wall: PRIVATE ELIAS BRODEUR, 18.
8 A ¶ A figure in the doorway, silhouetted by the dying fire outside: a STRANGER, in a civilian overcoat, rifle slung.
9 D STRANGER (from the door): Is this the hospital?
10 D PHILOMENA: It's a ballroom. Come in.
11 A ¶ The Stranger crosses the hall.
12 A His boots echo on the parquet.
13 A He pauses by Elias's cot.
14 D STRANGER: This one's alive?
15 D NIKODEM: He breathes. That's all we know.
16 D PHILOMENA: Who are you?
17 D STRANGER: Captain Lucien Marchetti. 4th Brigade. Our line broke at midnight.
18 D NIKODEM (sitting up): Broke?
19 D MARCHETTI: They'll be here by dawn.
20 A ¶ Philomena rises.
21 A Nikodem swings his legs to the floor.
22 A Elias stirs, a small groan.
23 D PHILOMENA: We have forty wounded.
24 D MARCHETTI: Then you have a decision.
25 D NIKODEM: We have no decision. We don't move them.
26 D MARCHETTI: He will. And she will. And you will.
27 A ¶ He points to Philomena.
28 A Then to Nikodem.
29 A Then to the wall.
30 D MARCHETTI [CONT'D]: Sergeant, you speak for the men?
31 D NIKODEM: I speak for no one.
32 D MARCHETTI: Then I'll speak.
33 A ¶ Elias wakes.
34 A Looks at Marchetti.
35 A Looks at the rifle.
36 D ELIAS: Captain?
37 D MARCHETTI: Private.
38 D ELIAS: I can walk.
39 D PHILOMENA: No, you can't.
40 D ELIAS: I can crawl.
41 D MARCHETTI (quietly): Then crawl first. We follow.
42 A ¶ He turns to the others.
43 A Nikodem nods once.
44 A Philomena grabs a blanket.
45 A ¶ They begin moving cots toward the door, one by one, the way mourners carry a coffin.
46 A ¶ At the far end of the hall, the gramophone, caught in a draft, begins to turn on its own.
47 A A thin old waltz crackles out, ghostly, ridiculous, and every head lifts.
48 A ¶ Then the first shell lands.
49 A ¶ The chandelier swings.
50 A Plaster rains.
51 A The cots stagger.
52 A Philomena throws herself over Elias.
53 A Nikodem hauls Marchetti down.
54 A The waltz continues, warped by the blast, slowing to a drone.
55 A ¶ Dust.
56 A Smoke.
57 A A long, long silence.
58 A ¶ Marchetti coughs.
59 A Rises.
60 A Lifts his rifle.
61 D MARCHETTI [CONT'D]: They're early.
62 D NIKODEM (wiping his face): Of course they are.
63 A ¶ Marchetti smiles grimly and puts his rifle to his shoulder.
64 A The ballroom, for the last time, becomes a ballroom of living men.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01156.json
### SCENE s01156 | INT. WITCH'S TOWER - TOP CHAMBER - NIGHT
Detected names (may be incomplete or contain aliases): WITCH IOLANTHE
1 A ¶ A round room of grey stone, windows shuttered against a gale.
2 A Shelves of jars, bundled herbs, an iron cauldron cold on its hook.
3 A A single candle in a bottle.
4 A On a table, a roll of parchment sealed with black wax.
5 A ¶ WITCH IOLANTHE (70s, long white hair, moth-eaten shawl, bare feet) lowers herself onto a stool by the table.
6 A She stares at the parchment for a long time.
7 A She doesn't touch it.
8 D IOLANTHE (to herself): Well. Don't be a coward.
9 A ¶ She cracks the seal with her thumbnail.
10 A The wax pops loose.
11 A The parchment unrolls itself like a tongue.
12 A A small silver bell falls out and rings once on the stone.
13 A ¶ She picks up the parchment.
14 A Her lips move as she reads, and then a voice, her own, young and clear, speaks from the page.
15 D IOLANTHE [V.O.] (reading, her younger voice): "Dear Iolanthe, if you are reading this, the winter was long, and I am afraid I am not coming back. I left the tower to you because no one else could climb it."
16 A ¶ Iolanthe sets the parchment on her knee.
17 A She laughs, short and dry.
18 D IOLANTHE [CONT'D]: You always had a flair for drama.
19 A ¶ She goes to the shutter and cracks it.
20 A Wind rushes in, sending the candle flame dancing.
21 A Beyond the glass the black sea of the forest tosses below.
22 D IOLANTHE [V.O., CONT'D] (reading): "The cauldron needs oil. The raven eats only on Thursdays. And do not, whatever you do, open the third door."
23 A ¶ Iolanthe frowns.
24 A She looks at the iron door in the far wall.
25 A It has been boarded over, rusted, nails bent.
26 D IOLANTHE (muttering): Third door. Third door.
27 A ¶ She crosses the room.
28 A Presses her palm against the wood.
29 A Cold.
30 A She exhales, takes the bell from the floor, and sets it on a shelf where it catches the candlelight.
31 D IOLANTHE [V.O., CONT'D] (reading, softer): "But if you must, then know that I have not left you alone. Ring the bell three times, and let the room answer."
32 A ¶ Iolanthe lifts the bell.
33 A Studies it.
34 A She glances at the boarded door.
35 D IOLANTHE: Absolutely not.
36 A ¶ She sets the bell down.
37 A The wind knocks at the shutter.
38 A She closes it, latching it with a firm hand, and returns to the stool.
39 A The parchment is still open on her knee.
40 A One last line glows at the bottom, in her own handwriting.
41 D IOLANTHE [V.O., CONT'D] (reading, very gently): "I am only asking you to be brave once."
42 A ¶ Iolanthe's shoulders drop.
43 A For a while she sits, breathing.
44 A Then she rises, goes to the shelf, picks up the bell, and holds it out at arm's length.
45 D IOLANTHE: Fine.
46 A ¶ She rings it once.
47 A Twice.
48 A Her hand shakes.
49 A She lowers it for the third.
50 A ¶ She rings it.
51 A ¶ Behind her the nails in the boarded door begin to slide out, one by one, ringing on the stone.
52 A She doesn't turn around.
53 A She sets the bell down on the table, picks up the candle in its bottle, and walks toward the door.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01933_1.json
### SCENE s01933_1 | INT. ICE-FISHING HUT - CONTINUOUS
Detected names (may be incomplete or contain aliases): NANA PHILOMENA DUBOIS, ARJUN CHAUDHRY, TEDDY LINDGREN, UNCLE SIONE TAUFA, MEI-LING DUBOIS-CHAUDHRY, BEATRIZ
1 A ¶ Six people crowd a space meant for two.
2 A A stove glows orange in one corner.
3 A Four holes bored in the plank floor reveal black water below.
4 A ¶ NANA PHILOMENA DUBOIS, 70s, sits in a lawn chair in a quilted parka, a fishing line wrapped around her gloved finger like a ring.
5 A Beside her, ARJUN CHAUDHRY, 40s, her son-in-law, tends the stove with the grim pride of a man who has built his first fire.
6 A TEDDY LINDGREN, 9, kneels on an overturned bucket, nose to the water.
7 A UNCLE SIONE TAUFA, 50s, enormous in a down jacket, wedges himself on a cooler, fiddling with a transistor radio.
8 A MEI-LING DUBOIS-CHAUDHRY, 35, hands out thermoses.
9 A And BEATRIZ, 5, lies on her stomach on the plank floor, one mitten dipping toward a hole.
10 D MEI-LING: Beatriz, away from the water.
11 D BEATRIZ: It's looking at me.
12 D NANA PHILOMENA: That is a fish, child. They look at everyone.
13 D UNCLE SIONE: Nana, don't scare her. It could be a very friendly fish.
14 D TEDDY: It's not a fish. It's a muskrat.
15 D ARJUN (from the stove): It can't be a muskrat. They don't live under ice.
16 D TEDDY: This one does.
17 A ¶ A tug on Nana's line.
18 A She sits bolt upright.
19 A Everyone stills.
20 A The line twitches again.
21 D NANA PHILOMENA: Hush, all of you. Hush.
22 D ARJUN: Philomena, I think you've got something.
23 D MEI-LING: Mama, pull!
24 D UNCLE SIONE: Pull, Nana, pull!
25 A ¶ Nana hauls on the line with both hands.
26 A A silver fish the length of her forearm bursts through the hole, flops across the plank, and lands in Beatriz's lap.
27 A Beatriz shrieks.
28 A Teddy dives for it.
29 A Mei-Ling grabs Beatriz.
30 A Arjun knocks over the bucket.
31 A Uncle Sione catches the radio before it hits the stove.
32 D BEATRIZ: It's alive!
33 D TEDDY: It's a pike!
34 D NANA PHILOMENA: It is dinner.
35 A ¶ The fish flaps.
36 A Teddy pins it with both hands, grinning.
37 A Arjun kneels beside him, awkward, and takes the pliers from his belt.
38 D ARJUN: Hold still. Hold still, little guy.
39 D MEI-LING: Do you know how to do this?
40 D ARJUN: I watched a video.
41 D UNCLE SIONE: Give me the pliers, brother.
42 A ¶ Arjun surrenders the pliers.
43 A Uncle Sione works the hook free in one practiced twist, then lifts the fish high in the cramped air for everyone to see.
44 A They cheer.
45 A The little hut rings with it.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01932.json
### SCENE s01932 | INT. CANAL LOCK-KEEPER'S COTTAGE - NIGHT
Detected names (may be incomplete or contain aliases): AGNES THORNBURY, MAN, THE STRANGER, JULIAN
1 A ¶ 1841.
2 A A single room: iron stove, rough table, a rain-black window.
3 A The canal sloshes against the lock gates outside.
4 A ¶ AGNES THORNBURY, 40s, widow, plain brown dress, sits at the table peeling a potato.
5 A A hard knock at the door.
6 A She sets down the knife, crosses the room, and opens it a crack.
7 A ¶ A MAN, 30s, drenched, hatless, bleeding from one temple, stands in the rain.
8 A He holds a canvas satchel against his chest like a child.
9 D THE STRANGER: Forgive me. My boat has sunk below your lock.
10 D AGNES: Then you'll want the bank, not my door.
11 D THE STRANGER: I'll want a fire, if you've one to spare.
12 A ¶ She considers him.
13 A She steps back.
14 A He enters, dripping, and kneels at the stove.
15 A She locks the door behind him and slides the bolt.
16 A He notices.
17 A He says nothing.
18 D AGNES: Your head.
19 D THE STRANGER: A gate struck me. It's nothing.
20 D AGNES: It is something. Sit.
21 A ¶ He sits.
22 A She takes a rag from a peg, wets it from the kettle, and presses it against his temple.
23 A He flinches, then goes still.
24 A His eyes fix on the satchel in his lap.
25 A Hers do the same.
26 D THE STRANGER: You're kind.
27 D AGNES: I'm careful. There's a difference.
28 D THE STRANGER: Which are you being now?
29 D AGNES: Both.
30 A ¶ He laughs, once, and winces.
31 A She steps back, folds the rag, and crosses to the shelf.
32 A From behind a tin of tea she takes a long hunting knife and lays it on the table between them, blade toward him.
33 D AGNES [CONT'D]: My husband kept that for poachers.
34 D THE STRANGER: Then I am glad not to be one.
35 D AGNES: What's in the satchel?
36 D THE STRANGER: Letters.
37 D AGNES: Whose?
38 D THE STRANGER: My brother's. He drowned in this canal in March. I came to see where.
39 D AGNES: The Haverty boy?
40 D THE STRANGER: You knew him.
41 D AGNES: I pulled him out. I buried him myself.
42 A ¶ The Stranger rises so fast the chair falls over.
43 A Agnes takes up the knife in one smooth motion.
44 A They face each other across the table, breathing hard.
45 D THE STRANGER: Where?
46 D AGNES: Behind the lock, under the willow.
47 D THE STRANGER: Take me there.
48 D AGNES: In this weather?
49 D THE STRANGER: Now.
50 A ¶ She lowers the knife.
51 A Her shoulders drop.
52 A She takes a lantern from the wall and lights it with a taper from the stove.
53 A The Stranger picks up the fallen chair, sets it right, and stands waiting, hat in hand though he has no hat.
54 D AGNES [CONT'D]: What do I call you?
55 D JULIAN: Julian Haverty.
56 D AGNES: Julian. I am Agnes.
57 D JULIAN: I know. He wrote of you.
58 D AGNES: He wrote of me?
59 D JULIAN: Every letter. He loved you.
60 A ¶ Agnes sets down the lantern.
61 A Her hand covers her mouth.
62 A For the first time she looks at the satchel not with suspicion but with grief.
63 D AGNES: He never said.
64 D JULIAN: He meant to.
65 A ¶ She nods.
66 A She picks the lantern up again.
67 A They go out together into the rain.
68 A The door swings in the wind.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01947.json
### SCENE s01947 | INT. FUNICULAR STATION VAULT - NIGHT
Detected names (may be incomplete or contain aliases): CAMILLE DUVALL, RASHID AL-TAMIMI, SVEN EKLUND, ODESSA RUIZ
1 A ¶ A brass-and-marble ticket hall at the foot of an alpine rail line.
2 A Behind a hidden panel, the old bank vault gapes open, its steel door scarred by a thermal lance.
3 A Dust motes drift in lantern light.
4 A ¶ CAMILLE DUVALL, 40s, tailored black coat, pale and still, sits on an overturned crate with a coil of rope across her knees.
5 A She waits.
6 A A step ahead of her stands RASHID AL-TAMIMI, 50s, shaven head, a surgeon's calm; he is gently lifting a velvet-wrapped ingot from a cart.
7 A SVEN EKLUND, 30s, red-bearded and nervous, kneels beside him, counting bars into a leather duffel.
8 A ODESSA RUIZ, 30s, a lookout with a stopwatch, leans in the archway, tapping her boot.
9 D CAMILLE: Time?
10 D ODESSA: Four minutes to the first car.
11 A ¶ She nods.
12 A She does not move from the crate.
13 D RASHID: Seventeen bars.
14 D SVEN: Eighteen.
15 D RASHID: Count again.
16 A ¶ He does, lips moving.
17 A He shakes his head and adds one more bar to the bag.
18 A The duffel sags.
19 A He grunts and drags it toward the archway, where she meets him and takes the other strap.
20 D SVEN: Camille, there were thirty.
21 D CAMILLE: There were thirty. Now there are eighteen, because someone got here first.
22 D RASHID: Who?
23 D CAMILLE: Someone with a key.
24 A ¶ Silence.
25 A Odessa's stopwatch ticks.
26 A Sven looks at the floor.
27 A Rashid straightens and turns toward the vault, slowly, as if the empty shelves might speak.
28 D ODESSA: Three minutes.
29 D CAMILLE: We take what we have and go.
30 D RASHID: We also look at who knew the plan.
31 A ¶ He stares at Sven.
32 A Sven goes red.
33 A The duffel slides from his hand.
34 D SVEN: I didn't.
35 D CAMILLE: Nobody's accusing you.
36 D RASHID: I am.
37 A ¶ She stands.
38 A She folds the rope.
39 A She sets it in the cart with the same care she gave the rest.
40 D CAMILLE: Rashid, it's a trade. We keep eighteen bars, and the thief keeps twelve. We never speak of it again.
41 D RASHID: And if the thief speaks?
42 D CAMILLE: Then we'll know exactly who it was.
43 A ¶ Odessa clicks the stopwatch.
44 A Two minutes.
45 D ODESSA: Time's up.
