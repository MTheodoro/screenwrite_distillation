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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02126.json
### SCENE s02126 | INT. STRIKE ZONE LANES - OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR NELL AKINTOLA
1 A ¶ A defunct bowling alley.
2 A Dead pinsetters hulk in the dark beyond the glass.
3 A A steel desk.
4 A A cassette recorder on the blotter.
5 A A rotary phone, unplugged.
6 A ¶ Nothing moves.
7 A ¶ A key turns.
8 A The door sticks, then gives.
9 A INSPECTOR NELL AKINTOLA, 50s, raincoat, flat shoes, a paper evidence bag under her arm, steps in and shakes water from her hair.
10 A ¶ She sets the bag on the desk.
11 A Presses PLAY on the recorder.
12 D NELL [V.O.] (tape, tinny): Tuesday. Strike Zone. Owner says he never left the shift.
13 D NELL: He did.
14 D NELL [V.O.] (tape): Receipts say otherwise. Parking stub at the Harbour Hotel, ten fifteen.
15 D NELL: Ten fourteen, actually.
16 D NELL [V.O.] (tape): Lane eleven. The foul line. Something under the tape.
17 D NELL: Three keys on a ring. Tagged. Not his.
18 D NELL [V.O.] (tape): Ask about the night man.
19 D NELL: Night man doesn't exist.
20 D NELL [V.O.] (tape): So who signed the sheet?
21 D NELL: That's what I'm asking, Nell.
22 A ¶ She stops the tape.
23 A Rewinds a few seconds.
24 A Presses PLAY.
25 D NELL [V.O.] (tape): Ask about the night man.
26 A ¶ She nods.
27 A Takes out a pen.
28 A Writes on her palm.
29 A Switches off the recorder.
30 D NELL: Night man.
31 A ¶ She turns off the light and leaves.
32 A The door clicks shut.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02326.json
### SCENE s02326 | INT. TELEGRAPH OFFICE - LOCUST SEASON - DAY
Detected names (may be incomplete or contain aliases): MARSHAL TOBIAS GREER, ODALYS, COAL BRANNIGAN, SILAS PRUETT, DESMOND YEBOAH
1 A ¶ Shuttered windows.
2 A A hum like a saw mill outside.
3 A Dust sifts through cracks.
4 A A single lamp.
5 A ¶ MARSHAL TOBIAS GREER, 40s, sweat-stained duster, wedges a rolled blanket under the door.
6 A ¶ ODALYS, 30s, telegraph operator, taps a key.
7 A Nothing comes back.
8 A ¶ Three drovers sit on crates.
9 A COAL BRANNIGAN, big, bearded.
10 A SILAS PRUETT, old, hat in his lap.
11 A DESMOND YEBOAH, 20s, jittery, boots too clean.
12 A ¶ Something skitters across the roof.
13 D GREER (to the room): Nobody opens that door.
14 D COAL: Wasn't planning to.
15 D GREER: Keep the lamp low.
16 D ODALYS (to Greer): Line's dead. Cut somewhere east.
17 D GREER: Try Kearney.
18 D ODALYS: I did.
19 D GREER: Try again.
20 A ¶ She does.
21 A The key clicks, hollow.
22 D SILAS (muttering): Forty years. Never seen it this thick.
23 D DESMOND: What'd he say?
24 D COAL: He's talking to himself.
25 D DESMOND: Is that a thing he does?
26 D COAL: Since his wife passed.
27 A ¶ Greer turns on them.
28 D GREER: Quiet. All of you.
29 A ¶ A thud on the door.
30 A Then another.
31 A Something heavier.
32 A Not an insect.
33 A ¶ Everyone freezes.
34 A Odalys lifts her hand from the key.
35 D GREER [CONT'D] (low, to himself): Not now.
36 A ¶ He draws his revolver.
37 A Checks the cylinder.
38 D COAL: Marshal.
39 D GREER: Stay put.
40 D COAL: You think it's him?
41 D GREER (to Coal): I think it's someone who ought to be inside.
42 A ¶ Desmond stands.
43 A Sits.
44 A Stands.
45 D DESMOND (to the room): Do we open it or not?
46 D SILAS (muttering): They'll eat the leather first.
47 A ¶ The thud again.
48 A A voice, muffled, human, through the wood.
49 A ¶ Odalys lunges for the lamp.
50 A Greer grabs the blanket from the door.
51 D GREER (to Coal, Silas, Desmond): Back wall. Now.
52 A ¶ They move.
53 A Guns come out.
54 A The doorknob begins to turn.

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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01719.json
### SCENE s01719 | INT. DEEP-SPACE COLONY SHIP - HYDROPONICS BAY - "NIGHT CYCLE"
Detected names (may be incomplete or contain aliases): SAOIRSE KELLEHER, MATEO ROJAS-ILLINGWORTH, ORCHARD
1 A ¶ A cathedral-sized chamber, its curved ceiling lined with violet grow-lights dimmed to a gentle dusk.
2 A Terraces of lettuce, wheat and tomato step down to a central pool where a pale mist lingers.
3 A The air is warm and wet, and smells faintly of basil.
4 A Somewhere, water drips in a patient rhythm.
5 A ¶ DR. SAOIRSE KELLEHER (50s, silver hair in a braid, lab coat over a sleeping tunic) walks the terrace alone, brushing leaves with her fingertips.
6 A Below, at the pool, a young technician, MATEO ROJAS-ILLINGWORTH (20s, rolled sleeves, tool belt) refills a nutrient dispenser.
7 A The ship's AI, ORCHARD, glows as a faint green node at the end of each terrace.
8 D SAOIRSE: Mateo. Aren't you off shift?
9 D MATEO: Couldn't sleep, Doctor.
10 D SAOIRSE: Nor could I.
11 D MATEO: It's quiet down here.
12 D SAOIRSE: It always was, my first voyage.
13 A ¶ He smiles.
14 A She sits on the terrace steps.
15 A The mist swirls.
16 D ORCHARD [V.O.]: All systems nominal. Crop yield at one hundred and four percent.
17 D SAOIRSE: Thank you, Orchard.
18 D MATEO: It's weird, isn't it? Everything's so perfect.
19 D SAOIRSE: Perfect is what we aimed for.
20 A ¶ Silence.
21 A The water drips.
22 A Mateo stops, tilting his head, listening.
23 D MATEO: That's not the drip.
24 D SAOIRSE: What?
25 D MATEO: The drip's every four seconds. That's every three.
26 D ORCHARD [V.O.]: Correction. Condensation cycle is irregular.
27 A ¶ Saoirse stands.
28 A Her hand lingers on a tomato vine.
29 A The leaf is faintly warm, like skin.
30 D SAOIRSE: Orchard. Run a biological scan on Terrace Three.
31 D ORCHARD [V.O.]: Scanning.
32 A ¶ The green node flickers.
33 A Along the terrace, every plant turns, slowly, toward the two humans.
34 A The mist in the pool thickens into a shape that is almost, but not quite, a face.
35 D ORCHARD [V.O., CONT'D] (soft, distorted): Scan complete. You are not alone.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02498.json
### SCENE s02498 | INT. LIGHTHOUSE KEEPER'S COTTAGE - CHRISTMAS EVE - NIGHT - 1948
Detected names (may be incomplete or contain aliases): AMBROSE FINCH, GLADYS FINCH, TILLY
1 A ¶ A small, snug kitchen.
2 A Snow against the window.
3 A A fir tree no taller than a broom stands in a bucket, hung with paper stars.
4 A The big lamp turns slowly above them, sweeping its beam through the frost.
5 A ¶ AMBROSE FINCH, 40s, the keeper, in a heavy jersey, carves a goose.
6 A His wife, GLADYS FINCH, 40s, bustles with a gravy boat.
7 A Their daughter TILLY, 8, hides under the table with a stuffed rabbit.
8 D GLADYS (to the room): Dinner in five!
9 D AMBROSE (to Tilly): Come out, poppet.
10 D TILLY: No.
11 D AMBROSE: Why not?
12 D TILLY: Santa'll see the lamp and think we're a ship.
13 A ¶ Ambrose puts the carving knife down.
14 A Crouches.
15 A Looks under the table.
16 D AMBROSE: Santa's got a better chart than that.
17 D TILLY: Does he?
18 D AMBROSE: Best in the world.
19 D GLADYS (muttering, at the stove): I hope he's got a better goose than this.
20 D AMBROSE: I heard that.
21 A ¶ Tilly slides out.
22 A Rabbit in hand.
23 A Ambrose lifts her.
24 A Gladys sets the gravy on the table and the three of them stand there, laughing.
25 A The rabbit falls.
26 A Tilly lunges for it.
27 A Ambrose steps back.
28 A Gladys catches the gravy boat as it tips.
29 A Everything clatters.
30 D TILLY: Sorry!
31 D GLADYS (to herself): Merry Christmas.
32 A ¶ Ambrose rights the chairs.
33 A A knock at the door.
34 A They freeze.
35 D AMBROSE: Who'd come up here tonight?
36 A ¶ Gladys opens the door.
37 A Wind, snow, nobody.
38 A A parcel in brown paper on the step.
39 D GLADYS (calling into the dark): Hello?
40 D TILLY: It's Santa!
41 D AMBROSE (low): Gladys. Close the door.
42 A ¶ She closes it.
43 A The parcel sits on the table.
44 A Tilly claps.
45 A Ambrose cuts the string.
46 A Inside, a small brass ship's bell and a card.
47 D GLADYS: What does it say?
48 D AMBROSE: "To the light that brought us home."
49 A ¶ Ambrose rings the bell once.
50 A Soft.
51 A The lamp above turns on, steady and bright.
52 A Gladys wipes her eyes with the corner of her apron.
53 D GLADYS (to everyone): Eat before it gets cold.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00881.json
### SCENE s00881 | EXT. RIVER CROSSING - FERRY LANDING - DAY
Detected names (may be incomplete or contain aliases): AMOS PIKE, CORA LEIGHTON, SHERIFF WALT DRUMMOND, MIGUEL ARROYO
1 A ¶ A cable-drawn raft waits on a brown river.
2 A A shack.
3 A A hitching rail.
4 A ¶ AMOS PIKE, 40s, ferryman, coils rope on the dock.
5 A He keeps one eye on the road.
6 A ¶ CORA LEIGHTON, 30s, a schoolteacher in a travelling coat, arrives with a trunk and sets it down hard.
7 A She watches him work.
8 D CORA: How much for the crossing?
9 D AMOS: Two bits.
10 A ¶ She pays.
11 A He pockets it without looking.
12 A ¶ Dust rises on the road.
13 A Two riders.
14 A SHERIFF WALT DRUMMOND, 50s, and MIGUEL ARROYO, 20s, in handcuffs, slumped over his saddle.
15 D AMOS [CONT'D]: Morning, Sheriff.
16 D DRUMMOND: Amos.
17 A ¶ He dismounts.
18 A Pulls the prisoner down.
19 A Miguel's lip is split.
20 A He keeps his eyes on the water.
21 D CORA: Is he hurt?
22 D DRUMMOND: Not badly.
23 D CORA: He looks hurt.
24 D DRUMMOND: Ma'am, it ain't your business.
25 A ¶ She turns to Amos.
26 D CORA: Is it?
27 A ¶ Amos looks at the river.
28 A At the raft.
29 A He chews a long moment.
30 D AMOS: Raft only holds four. And a horse.
31 D DRUMMOND: Then we'll make two trips.
32 D AMOS: Then you wait.
33 A ¶ Drummond's jaw tightens.
34 A Miguel lifts his head and meets Cora's eyes.
35 A He mouths something.
36 A She nods, barely.
37 D DRUMMOND: Something to say, boy?
38 A ¶ Miguel shakes his head.
39 A Cora steps between them, calm as a church.
40 D CORA: Sheriff, I'll ride with the prisoner. The ferryman will take the horses first.
41 D DRUMMOND: That wasn't the plan.
42 D CORA: It is now.
43 A ¶ Amos grins at the rope.
44 A Drummond glares.
45 A Then, slowly, he unbuckles his gun belt and hangs it from his saddle horn.
46 D DRUMMOND: Lead on.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01765.json
### SCENE s01765 | INT. DRAGON'S TOOTH MINE - DEEP SHAFT - DAY
Detected names (may be incomplete or contain aliases): ALDRETH, PIP, MARN, YSABEAU, GORRAN
1 A ¶ Black rock veined with ivory.
2 A Lanterns hang from iron hooks.
3 A The walls are warm.
4 A ¶ ALDRETH (40s, foreman, leather vest, pickaxe on his shoulder) squints into the dark.
5 A PIP (12, mine boy, soot-faced, torch held two-handed) grips his sleeve.
6 A MARN (30s, miner, huge arms, a sledge) swings at the vein, stone chips flying.
7 A YSABEAU (20s, mapmaker, ink on her nose, a roll of parchment under her arm) taps a compass.
8 A ¶ The wall exhales.
9 A Hot breath, sulfur-yellow.
10 A Every lantern bows.
11 D PIP: Foreman?
12 D ALDRETH: Nobody move.
13 A ¶ Marn lowers the sledge.
14 A Ysabeau closes the compass.
15 A Pip ducks behind Aldreth.
16 A Together they back up into the narrow shaft as the vein of ivory glows orange and the stone around it begins to crack like an egg.
17 A ¶ A figure steps out of the dark behind them.
18 A GORRAN (60s, a wyrm-warden, scaled leather armor, a staff of blackened bone) taps the floor once.
19 A The cracking stops.
20 D GORRAN: You've dug into the nursery.
21 D ALDRETH: We didn't know.
22 D GORRAN: Few do. Put down the picks. Back out, slowly, and thank the mountain it's sleeping.
23 A ¶ Marn drops the sledge.
24 A Ysabeau bows.
25 A Pip, trembling, holds out his torch, and Gorran takes it, and pinches the flame out with two bare fingers.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01974.json
### SCENE s01974 | INT. DRY-DOCK PUMP HOUSE - NIGHT
Detected names (may be incomplete or contain aliases): KESTREL OYELARAN-FINCH, DRAGAN MIHAJLOVI, INSPECTOR ROSALIND ACHTERBERG, ALVARO
1 A ¶ A cathedral of valves and rust-orange pipework.
2 A A drained dry dock yawns beyond a glass wall, the hull of a half-scrapped ferry propped on blocks.
3 A Emergency light only.
4 A ¶ KESTREL OYELARAN-FINCH (30s, ex-auditor, wet hair, laptop bag clutched to her chest) backs against a pump housing.
5 A In the center of the room, DRAGAN MIHAJLOVIĆ (50s, heavy coat, port authority lanyard) stands with a pistol held low and loose, like a tool he's tired of.
6 D DRAGAN: Put the bag on the floor.
7 D KESTREL: No.
8 D DRAGAN: It's not a negotiation.
9 D KESTREL: It's the only thing keeping you from sitting in a cell.
10 A ¶ He tilts his head.
11 A A dripping pipe counts seconds.
12 D DRAGAN: The ledgers are digital.
13 D KESTREL: So are the backups.
14 D DRAGAN: Where?
15 D KESTREL: Not telling.
16 A ¶ He sighs, and for a moment looks almost sad.
17 A Steps forward.
18 A ¶ Behind Kestrel, a hatch clangs.
19 A Boots on a steel stair.
20 A She spins.
21 A Dragan doesn't.
22 A ¶ A third figure descends: INSPECTOR ROSALIND ACHTERBERG (40s, plain coat, badge on her belt, one hand already on her holster).
23 D ROSALIND: Port Authority Police. Mr. Mihajlović. Lower it.
24 D DRAGAN: Rosalind.
25 D ROSALIND: Lower it, Dragan.
26 A ¶ He doesn't.
27 A Doesn't raise it either.
28 A Kestrel looks from one to the other.
29 D KESTREL: You know each other.
30 D ROSALIND: Twenty years.
31 D KESTREL: Then you can talk him out of this.
32 D ROSALIND: I'm not here to talk him out of anything.
33 A ¶ Kestrel's face changes.
34 A She takes a step back, into the pump housing.
35 D KESTREL: You're not here to arrest him.
36 D ROSALIND: I'm here to see that the bag leaves with me.
37 D DRAGAN: Ah. There we are.
38 D KESTREL (quiet): I called you. You said you'd come.
39 D ROSALIND: And I did.
40 A ¶ A fourth voice speaks from the dark above the stair, unamplified, polite.
41 D ALVARO [O.S.]: Everyone relax. Please.
42 A ¶ All three look up.
43 A A silhouette stands on the catwalk, a phone held loosely to its ear.
44 D DRAGAN: Who is that.
45 D ALVARO [O.S.]: Someone who'd like to hear the rest of this.
46 D ROSALIND (to Dragan): You brought a recorder?
47 D DRAGAN: I didn't bring anyone.
48 D ALVARO [O.S.]: No, I came on my own. Mrs. Oyelaran-Finch, I believe that's your bag.
49 A ¶ Kestrel stares at the catwalk.
50 A Then, slowly, at the two armed people in front of her.
51 A She sets the bag on the floor, pushes it with her foot across the concrete toward Rosalind and Dragan, and steps away from it with her hands visible.
52 D KESTREL: It's yours. Whoever wants it.
53 A ¶ Neither of them moves.
54 A Dragan lowers his pistol an inch.
55 A Rosalind's hand leaves her holster.
56 A The pipe drips.
57 D ALVARO [O.S.] (softly): That's better.
58 D DRAGAN (muttering): Twenty years.
59 D ROSALIND: Don't.
60 A ¶ She crouches and picks up the bag.
61 A Opens it.
62 A Looks inside.
63 A Closes it.
64 D ROSALIND [CONT'D]: It's empty.
65 D DRAGAN: What?
66 D KESTREL: The laptop's in the dock.
67 A ¶ All of them turn to the glass wall.
68 A Far below, at the foot of the rusted hull, a tiny blue light glows on the concrete floor of the dry dock, beside a sealed gate that has just begun to let in water.
69 D DRAGAN: You flooded it.
70 D KESTREL: I opened a valve. It's what the pump house is for.
71 A ¶ Rosalind sprints for the door.
72 A Dragan lowers his gun completely and watches the water, and the blue light, and the woman, one after the other.
73 D ALVARO [O.S.] (delighted): Oh, well done.
74 D KESTREL: Don't follow me.
75 A ¶ She walks to the stair and climbs past the catwalk without looking at it.
76 A At the top, the silhouette steps aside to let her through.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02094.json
### SCENE s02094 | INT. CAPSIZED TRAWLER - AIR POCKET - NIGHT
Detected names (may be incomplete or contain aliases): IMOGEN TAVARES, PILAR PERRAULT
1 A ¶ A black, upside-down cabin, the floor now the ceiling.
2 A Water slaps a foot below.
3 A A single glow stick floats in a bucket, lighting the underside of everything green.
4 A A handheld radio is wedged in a bunk frame.
5 A ¶ IMOGEN TAVARES, 40s, hangs from the rail by one arm, soaked, her other hand clamped around the radio.
6 A She breathes in ragged pulls.
7 D IMOGEN: Pilar. Pilar, come in.
8 D PILAR [O.S.] (over radio): I'm here.
9 D IMOGEN: Where?
10 D PILAR [O.S.] (over radio): Engine room. The hatch is jammed.
11 D IMOGEN: How much air?
12 D PILAR [O.S.] (over radio): Enough for a conversation.
13 D IMOGEN: Don't joke.
14 D PILAR [O.S.] (over radio): I'm not.
15 A ¶ A beat.
16 A Water slaps.
17 A Imogen lowers herself down, wading chest-deep toward a bulkhead door, the radio held above her head.
18 D IMOGEN: I'm coming.
19 D PILAR [O.S.] (over radio): You can't swim that.
20 D IMOGEN: Watch me.
21 A ¶ She dives.
22 A The glow stick bobs.
23 A A thump.
24 A A muffled scream.
25 A The radio clicks.
26 D PILAR [O.S.] (over radio): Imogen?
27 A ¶ The bulkhead door bursts open and PILAR PERRAULT, 30s, surges through in a gush of water, gasping, hair plastered to her face.
28 A Imogen is behind her, one fist knotted in her collar.
29 A They slam against the wall, tangled, coughing, clutching each other, then shove apart.
30 D PILAR: You left the hatch open.
31 D IMOGEN: I left you alive.
