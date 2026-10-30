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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00395.json
### SCENE s00395 | INT. FERNBANK TAXIDERMY - BACK ROOM - NIGHT
Detected names (may be incomplete or contain aliases): MERCEDES OYELARAN, DUNCAN HALE
1 A ¶ A windowless workshop stuffed with animals: owls on perches, a bear on hind legs, a fox mid-leap, a glass case of moths.
2 A A single lamp over a steel table.
3 A The air smells of formaldehyde and old straw.
4 A ¶ MERCEDES OYELARAN, 30s, in a leather apron, her sleeves rolled, bends over the table with a curved needle.
5 A On it lies the half-mounted body of a barn owl, its eyes still clouded.
6 A She works with the quiet of someone alone in a church.
7 A ¶ The front-door bell JINGLES in the next room.
8 A She doesn't look up.
9 D MERCEDES: We're closed.
10 A ¶ Footsteps.
11 A Slow.
12 A A man's shadow slides across the doorway: DUNCAN HALE, 40s, in a damp raincoat, holding a hat.
13 A He takes in the animals and stays on the threshold.
14 D DUNCAN: Forgive me. The door was unlocked.
15 D MERCEDES: It's not.
16 D DUNCAN: It opened.
17 A ¶ She sets down the needle and turns.
18 A They regard each other.
19 D MERCEDES: What do you want?
20 D DUNCAN: My wife's cat died last week. I was told you could do something.
21 D MERCEDES: I do animals. I don't do grief.
22 D DUNCAN: It's the same work, I'm told.
23 A ¶ She wipes her hands on her apron.
24 A He steps in.
25 A He's taller than the doorway made him look, and he moves with a care that suggests he's learned not to bump into things.
26 D MERCEDES: Where's the cat?
27 D DUNCAN: In the car.
28 D MERCEDES: You brought it in the rain.
29 D DUNCAN: I didn't want to leave her.
30 A ¶ She nods slowly.
31 A A faint relaxation.
32 A She crosses to the sink and washes her hands.
33 D MERCEDES: You'll have to bring her in. Not the carrier. The towel.
34 D DUNCAN: I don't have a towel.
35 D MERCEDES: Then your coat.
36 D DUNCAN: She's not wrapped in anything.
37 A ¶ She turns off the tap.
38 A The room is very still.
39 A The owl on the table seems to be looking at her.
40 D MERCEDES: Mr. Hale. What is in the car?
41 D DUNCAN: A cat.
42 D MERCEDES: Is it a cat?
43 A ¶ He lowers his eyes.
44 A He turns the hat in his hands once, twice.
45 D DUNCAN: She said you'd ask.
46 D MERCEDES: Who did?
47 D DUNCAN: My wife.
48 D MERCEDES: Your wife is dead.
49 D DUNCAN: Last week. Yes.
50 A ¶ Mercedes picks up a long scalpel from the tray and holds it low, behind her apron.
51 D MERCEDES: Then who is in the car?
52 D DUNCAN: I came to find out.
53 A ¶ He reaches into his coat.
54 A Mercedes grips the scalpel.
55 A He draws out a photograph and holds it toward her across the table.
56 D DUNCAN [CONT'D]: That's the shop. The year it opened. The woman behind the counter.
57 A ¶ Mercedes does not take it.
58 A She does not need to.
59 D MERCEDES: That's my mother.
60 D DUNCAN: She's the one who mounted my wife's first cat. Thirty years ago.
61 D MERCEDES: My mother's been gone since '04.
62 D DUNCAN: I know. I thought you'd want to see it.
63 A ¶ He lays the photograph on the table beside the owl.
64 A Mercedes looks at it.
65 A Her grip on the scalpel eases.
66 D MERCEDES: Why?
67 D DUNCAN: Because last night, my wife came home.
68 D MERCEDES: Mr. Hale.
69 D DUNCAN: She's in the car. She's not a cat. She's not breathing, and she's not cold, and she asked me to bring her here.
70 A ¶ The lamp flickers.
71 A The animals do not move.
72 A Mercedes looks past him, through the doorway, to the front window.
73 A A car idles at the curb, headlights off.
74 A In the back seat, a shape sits very upright.
75 D MERCEDES (quiet): Why here?
76 D DUNCAN: She says you know how to make things stay.
77 A ¶ The bell above the front door jingles again, though the door has not opened.
78 A Mercedes sets down the scalpel.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02086.json
### SCENE s02086 | INT. AEROSTAT BAKERY - UPPER CLOUD DECK OF VENUS - DAY
Detected names (may be incomplete or contain aliases): MADAME ADEBOLA-QUINN, PIETRO, DISPATCH, NOOR, INSPECTOR LOGANATHAN
1 A ¶ A warm, low-ceilinged kitchen suspended in the sulfur haze, its walls lined with copper ovens and rattling racks of dough.
2 A Through a thick quartz porthole, orange clouds roil like boiling custard.
3 A The air smells of yeast and faint lemon.
4 A Every surface is bolted down.
5 A ¶ At a floured table kneads MADAME ADEBOLA-QUINN, 60s, the head baker, a woman built like a ship's prow, with burn scars freckling her forearms and a gaze that has outlasted three bankruptcies.
6 A Beside her, PIETRO, 19, her apprentice, is piping icing onto a tray of tiny cakes with the care of someone defusing a bomb.
7 A ¶ An intercom speaker above the oven door crackles.
8 D DISPATCH [V.O.] (over intercom): Bakery, this is Dispatch. Cloud shear in four minutes. Secure your loose items.
9 D MADAME ADEBOLA-QUINN: Acknowledged.
10 A ¶ She wipes her hands on her apron.
11 A Pietro glances at the porthole, where the clouds are beginning to churn faster.
12 A A cake slips from the tray and lands on the floor with a quiet splat.
13 A ¶ At the back, NOOR, 30s, a pastry cook with flour to her elbows, hauls a tray of buns into the warming rack and does not turn around.
14 D NOOR: Starboard shutters are down, Madame.
15 D PIETRO: Madame. The shear is on the starboard side.
16 D MADAME ADEBOLA-QUINN: I can smell it.
17 D PIETRO: Should we turn off the ovens?
18 D MADAME ADEBOLA-QUINN: We do not turn off the ovens. We turn off the nerves.
19 A ¶ The floor shudders.
20 A Racks rattle.
21 A A cloud of flour lifts from the table and hangs in the air like smoke.
22 A Madame Adebola-Quinn lays a steady hand on a copper oven door.
23 A Pietro takes the icing bag in a white-knuckled grip and keeps piping.
24 A ¶ The door at the far end of the kitchen bangs open.
25 A A figure staggers in, a tall woman in a gray inspector's coat dusted with orange pollen, holding a clipboard and a respirator mask in one hand.
26 A This is INSPECTOR LOGANATHAN, 40s, severe, her lenses fogged.
27 A She coughs and waves the mask.
28 D INSPECTOR LOGANATHAN: Surprise audit. Nobody move.
29 D MADAME ADEBOLA-QUINN: We are about to be sheared.
30 D INSPECTOR LOGANATHAN: Then this will be a very memorable audit.
31 A ¶ The floor drops half a foot, rises again.
32 A Everything tilts.
33 A Pietro yelps.
34 A A rack of rolls crashes to the floor and scatters across the tile.
35 A The inspector grabs the nearest table and hangs on.
36 D DISPATCH [V.O.] (over intercom): Shear in thirty seconds. All hands, brace.
37 D PIETRO (near tears): I don't want to die in a bakery!
38 D MADAME ADEBOLA-QUINN (deadpan): You'll die in a very clean bakery.
39 D INSPECTOR LOGANATHAN (writing on her clipboard): That's the first compliment I've noted.
40 A ¶ The shear hits.
41 A The whole kitchen lurches, spins a quarter turn on its tether, and settles.
42 A Flour falls like snow.
43 A Then, slowly, the shaking stops.
44 A The orange clouds beyond the porthole begin to calm.
45 A They stand there, three people covered in white, hanging on to a table.
46 D PIETRO (tiny): Did we make it?
47 D DISPATCH [V.O.] (over intercom): Shear has passed. Carry on.
48 D MADAME ADEBOLA-QUINN (to the room): Carry on.
49 A ¶ She straightens.
50 A Picks a cake off the floor, blows on it, and bites it.
51 A She nods.
52 D MADAME ADEBOLA-QUINN [CONT'D]: Still good.
53 A ¶ The inspector lowers her clipboard.
54 A She takes a cake from the tray, tastes it, and lowers her mask.
55 D INSPECTOR LOGANATHAN: Pass.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00752.json
### SCENE s00752 | INT. FLOODED ORCHARD COTTAGE - KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE PERPETUA LOWRY, CALLER, ROSCOE
1 A ¶ Rain drums on a tin roof.
2 A Water has crept an inch under the door and pools on the flagstones.
3 A A single candle burns on the kitchen table, beside a black rotary phone, its cord stretched taut across the room.
4 A ¶ DETECTIVE PERPETUA LOWRY, fifties, in a drenched mackintosh, stands with the receiver at her ear.
5 A She doesn't sit.
6 A A cup of cold tea has been on the table so long it has grown a skin.
7 D CALLER [V.O.] (over phone, thin, amused): You came alone.
8 D PERPETUA: I did.
9 D CALLER [V.O.]: That was brave.
10 D PERPETUA: It was cheaper than a team.
11 A ¶ A long pause on the line.
12 A Rain.
13 A A drip from the ceiling lands in the cup.
14 D CALLER [V.O.]: Do you know where Edmund Hale is, Detective?
15 D PERPETUA: In a drawer at the county morgue.
16 D CALLER [V.O.]: Then you know I didn't do it.
17 D PERPETUA: I know you wanted me to think so.
18 A ¶ She picks up a pencil and turns it between her fingers.
19 A She studies the pooling water.
20 A She walks, slowly, to the window and looks out at the black orchard, where bare branches thrash.
21 D CALLER [V.O.]: Look at the third tree from the gate.
22 A ¶ Perpetua doesn't move.
23 D CALLER [V.O., CONT'D]: Go on.
24 A ¶ She leans closer to the glass.
25 A Her breath fogs it.
26 A A dark shape hangs from the third tree, swinging in the wind.
27 A She stares.
28 A Her shoulders drop a quarter inch.
29 D PERPETUA (very quietly): That's a coat.
30 D CALLER [V.O.]: It's his coat.
31 D PERPETUA: Where is he?
32 D CALLER [V.O.]: Why would I tell you? You haven't asked my name.
33 D PERPETUA: You've been calling me for six nights. I've heard you breathe. I know you've been drinking.
34 D CALLER [V.O.]: Whisky. A decent one.
35 D PERPETUA: Then you can say your name over a decent whisky.
36 A ¶ A pause.
37 A The receiver crackles.
38 A When the voice returns it is lower, tired.
39 D ROSCOE [V.O.] (over phone): Roscoe Hale. Edmund's brother.
40 A ¶ Perpetua closes her eyes.
41 A The pencil snaps in her fist.
42 D PERPETUA: You buried him in the orchard.
43 D ROSCOE [V.O.]: I buried what was left.
44 D PERPETUA: Why call me?
45 D ROSCOE [V.O.]: Because someone should know where he is. And the police won't dig in the rain.
46 A ¶ She sets the broken pencil on the table.
47 A She looks at the candle, at the cold tea, at the dark window.
48 D PERPETUA: Roscoe. Where are you now?
49 D ROSCOE [V.O.]: Look at the gate.
50 A ¶ She turns.
51 A In the doorway of the kitchen, silhouetted by lightning, a man's shape is standing with a phone in his hand.
52 A ¶ Thunder.
53 A The candle gutters out.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02084.json
### SCENE s02084 | INT. TAXIDERMY AUCTION HOUSE - BACK ROOM - NIGHT
Detected names (may be incomplete or contain aliases): LUCIAN VARGA, DOMINIC ACHEBE, ROSALIND BEAUMONT, TOBIAS FINCH
1 A ¶ Shelves of glass-eyed animals line the walls: a bear, a pheasant, a snarling badger mounted on a plinth.
2 A Tags dangle from their feet.
3 A A single green-shaded lamp.
4 A A card table with a briefcase on it.
5 A ¶ LUCIAN VARGA, 40s, silk scarf, silver rings, leans on the table.
6 A DOMINIC ACHEBE, 30s, broad-shouldered in a gray suit, stands in the doorway, arms folded.
7 A Between them sits ROSALIND BEAUMONT, 50s, an auctioneer's apron over her blouse, hands flat on the briefcase.
8 D LUCIAN: Open it.
9 D ROSALIND: I told you. The lot is withdrawn.
10 D LUCIAN: Open it, Rosalind.
11 A ¶ She does not.
12 A Dominic pushes off the doorframe.
13 A He walks to the bear, runs a hand down its flank, and puts his thumb through a seam in the hide.
14 A He pulls it wider.
15 A Stuffing spills out.
16 A So do three small velvet pouches, which drop to the floor and clink.
17 A Rosalind flinches.
18 A Lucian smiles like a man who is bored by being right.
19 D DOMINIC: Found something.
20 D ROSALIND: Please don't.
21 A ¶ Dominic crouches and picks up a pouch.
22 A He loosens its drawstring and pours a dozen uncut stones into his palm, cloudy, gray, ugly.
23 A He looks at Lucian.
24 A Lucian looks at Rosalind.
25 A She puts her face in her hands.
26 D LUCIAN: Where's the rest?
27 D ROSALIND: That's all of it.
28 D LUCIAN: That's not ten million.
29 D ROSALIND: The rest is in the badger.
30 A ¶ Dominic stands, crosses to the badger, and grips it by the scruff.
31 A The plinth wobbles.
32 A He lifts it.
33 A Something rattles inside.
34 A ¶ A door bangs open at the far end of the room.
35 A TOBIAS FINCH, 20s, a young constable in a damp uniform, steps in with a flashlight in one hand and a radio clipped to his shoulder.
36 A He freezes.
37 A The flashlight beam finds Dominic holding the badger, Lucian leaning on the table, Rosalind with her face in her hands.
38 D TOBIAS: Evening. Everything all right in here?
39 D LUCIAN: Perfectly, officer.
40 D TOBIAS: Door was open.
41 D LUCIAN: We're appraising.
42 D TOBIAS: At eleven at night?
43 D DOMINIC (a beat): Estate sale.
44 A ¶ Tobias looks at the bear.
45 A At the spilled stuffing.
46 A At the pouches on the floor.
47 A His flashlight drifts to the badger and then up to Dominic's face.
48 A He sniffs.
49 D TOBIAS: That's an interesting badger.
50 A ¶ Nobody breathes.
51 A The badger rattles again as Dominic's grip shifts.
52 D TOBIAS [CONT'D]: My nan had one.
53 D LUCIAN (carefully): Did she?
54 D TOBIAS: Tore it up when I was seven. I wanted to see inside.
55 D ROSALIND (muffled): What did you find?
56 D TOBIAS: Sawdust. And a hundred pounds.
57 A ¶ A long, strange quiet.
58 A Lucian laughs, one abrupt breath.
59 A Dominic sets down the badger very slowly.
60 A Rosalind lowers her hands.
61 A Tobias holds up the flashlight and clicks it off.
62 D TOBIAS [CONT'D]: I'll say the door was locked.
63 A ¶ He leaves.
64 A His footsteps recede down the corridor.
65 A Lucian walks to the pouches and starts gathering them.
66 A Dominic watches the empty doorway.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00379.json
### SCENE s00379 | INT. FIELD HOSPITAL - CONVERTED SKI LODGE - NIGHT
Detected names (may be incomplete or contain aliases): SAOIRSE KELLEHER, NURSE ABIODUN, HELENA PAVLICEK, GREGOR PAVLICEK
1 A ¶ A great timber hall with a stone hearth, now lined with cots.
2 A Antlers still hang over the mantel.
3 A Blizzard wind works the shutters.
4 A ¶ DR. SAOIRSE KELLEHER, 40, mud on her boots and blood on her cuffs, stands over a cot with a stethoscope draped around her neck.
5 A She has not slept in two days and she holds her face carefully, like something fragile on a tray.
6 A ¶ NURSE ABIODUN, 30, sets out instruments on a ski-rack trolley.
7 A He works precisely, wasting no motion.
8 A ¶ On the cot, MRS. HELENA PAVLICEK, 70, lies pale under three blankets, her breath shallow.
9 A At the foot of the bed, her husband GREGOR PAVLICEK, 72, holds his hat in both hands, turning it by the brim.
10 D SAOIRSE (quietly): Mr. Pavlicek. The avalanche took her ribs, and one of them has nicked the lung.
11 D GREGOR: She was talking on the way down.
12 D SAOIRSE: I know.
13 A ¶ She checks the pulse at Helena's wrist.
14 A She counts, and he waits, and she finds nothing to say about the number.
15 D GREGOR: You'll operate.
16 D SAOIRSE: We would have to open the chest. I have a surgical kit and a lantern. The helicopter can't land for another night.
17 D GREGOR: Then do it.
18 D ABIODUN: Doctor, the generator's down to an hour.
19 A ¶ She glances at him.
20 A He looks back, steady.
21 A In that look is a whole second conversation.
22 D SAOIRSE: Then we have an hour.
23 D GREGOR: I said do it.
24 D SAOIRSE: I heard you.
25 A ¶ She turns, takes a scalpel from the trolley, and holds it up to the light.
26 A Her hand is perfectly steady.
27 A ¶ Gregor takes a step forward.
28 A He sets his hat on the bed.
29 A His knuckles are white.
30 D GREGOR: And if you cut and she dies on your table?
31 D SAOIRSE: Then she dies knowing someone tried.
32 D GREGOR: Then I forbid it.
33 D ABIODUN: Sir.
34 D GREGOR: She is mine. Fifty years. I will not have her opened by a stranger in a dead man's hunting lodge.
35 A ¶ He grabs Saoirse's wrist.
36 A The scalpel stops in the air.
37 A Abiodun moves in, but she shakes her head, and he freezes.
38 D SAOIRSE (low): Mr. Pavlicek. Look at her.
39 A ¶ He does not want to.
40 A He does.
41 A Helena's eyes are open, and they have found him.
42 A Her lips move.
43 D HELENA (a thread of voice): Greg. Let go.
44 A ¶ His grip loosens.
45 A The scalpel lowers.
46 A The wind slams the shutters, and somewhere the generator stutters.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01778.json
### SCENE s01778 | INT. GRAIN SILO - BASE LEVEL - NIGHT
Detected names (may be incomplete or contain aliases): DELPHINE CROSBY, MAX, ODUYA, OLD ENRICO FABBRI, STRANGER, ANSELM
1 A ¶ Rust-streaked concrete.
2 A A single hanging bulb swings.
3 A Wheat dust hangs in the beam.
4 A Somewhere above, metal ticks.
5 A ¶ DELPHINE CROSBY, thirties, holds a flashlight steady.
6 A MAXWELL "MAX" ODUYA, twenties, kneels by a hatch with a crowbar.
7 A OLD ENRICO FABBRI, seventies, sits on an upturned bucket.
8 A A STRANGER stands motionless at the foot of the ladder, face in shadow.
9 D DELPHINE: Everyone. Stay where you are.
10 A ¶ Nobody moves.
11 A The ticking stops.
12 D MAX (to himself): It's the pipes. It's just the pipes.
13 D ENRICO (to Max): Boy. Put the bar down.
14 A ¶ Max doesn't.
15 A The Stranger takes one slow step into the light.
16 A Wheat dust clings to the shoulders of his coat.
17 A His eyes do not blink.
18 D STRANGER: I've been up there a long time.
19 D DELPHINE (to the Stranger): Who are you?
20 D STRANGER: Anselm. My name was Anselm.
21 A ¶ The bulb dies.
22 A In the dark: the ladder groans.
23 A Delphine's flashlight snaps back on.
24 A ¶ ANSELM is now six feet from Max, who has raised the crowbar.
25 A The wheat around his boots is moving.
26 D ANSELM: It remembers me.
27 D ENRICO (whisper): Don't let him touch the grain.
28 D DELPHINE (to the group): Back to the door. All of you. Now.
29 A ¶ Max swings.
30 A Anselm catches the bar in one hand.
31 A The silo shudders, and the floor of wheat begins to rise.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00795.json
### SCENE s00795 | INT. FLORIST'S WALK-IN COOLER - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE IMELDA STROUD, KARINA VOLKOVA
1 A ¶ Buckets of lilies.
2 A Roses in sleeves.
3 A Cold fog off the compressor.
4 A A single caged bulb.
5 A ¶ DETECTIVE IMELDA STROUD, 40s, gloves, trench coat, closes the door and lets it click.
6 A She leans on a shelf of carnations.
7 A ¶ KARINA VOLKOVA, 30s, florist, apron stained green, stands rigid with a pair of pruning shears in both hands.
8 D IMELDA: Put those down.
9 D KARINA: No.
10 D IMELDA: Karina.
11 D KARINA: You said you were alone.
12 D IMELDA: I am alone.
13 D KARINA: You said you'd tell no one.
14 D IMELDA: I haven't.
15 A ¶ Karina's eyes flick to the door.
16 A To the shears.
17 A Back.
18 D KARINA: He's going to find out.
19 D IMELDA: Who?
20 D KARINA: You know who.
21 D IMELDA: Say his name.
22 A ¶ Karina shakes her head.
23 A Her knuckles whiten on the handles.
24 D IMELDA [CONT'D]: Then say what he did.
25 D KARINA: He bought the van. He bought the van, and the lilies, and the church.
26 D IMELDA: Which church?
27 D KARINA: St. Anselm's. He bought the whole front pew.
28 A ¶ Imelda takes a step.
29 A Karina lifts the shears.
30 A Imelda stops.
31 D IMELDA: You think I'm here to arrest you.
32 D KARINA: Aren't you?
33 D IMELDA: No.
34 D KARINA: Then why the gloves?
35 D IMELDA: It's twenty degrees in here.
36 A ¶ A pause.
37 A A drip.
38 A The compressor hums.
39 D KARINA (small): Oh.
40 A ¶ Karina lowers the shears an inch.
41 A Imelda holds out a hand, palm up.
42 D IMELDA: Give them to me.
43 D KARINA: No.
44 D IMELDA: I'll give them back.
45 D KARINA: You won't.
46 D IMELDA: I will. When this is over.
47 A ¶ Karina laughs, a short bitter sound.
48 D KARINA: It's never over.
49 D IMELDA: It's over when you testify.
50 D KARINA: He has a brother.
51 D IMELDA: I know about the brother.
52 D KARINA: He has a cousin on the force.
53 D IMELDA: I know about the cousin.
54 D KARINA: Do you know about the judge?
55 A ¶ Imelda goes still.
56 D IMELDA: No.
57 D KARINA: Judge Morales buys flowers every Sunday. Lilies. Always lilies.
58 A ¶ Imelda exhales a long white plume.
59 A Takes off one glove.
60 D IMELDA: Thank you.
61 A ¶ She extends her bare hand again.
62 A Karina studies it.
63 A The shears slip a little.
64 D KARINA: He'll know it was me.
65 D IMELDA: Not if you walk out of here with a bouquet and a smile.
66 D KARINA: I don't smile.
67 D IMELDA: You'll learn.
68 A ¶ Karina drops the shears into a bucket of water.
69 A They sink.
70 A She wipes her palms on her apron, trembling.
71 D KARINA (whisper): I'm so tired.
72 D IMELDA: I know.
73 D KARINA: Do you?
74 D IMELDA: My sister ran a shop like this.
75 D KARINA: What happened?
76 D IMELDA: She stopped being afraid.
77 D KARINA: And?
78 D IMELDA: She sleeps now.
79 A ¶ Karina lets out a ragged breath.
80 A A smile, almost.
81 A She sits on an overturned crate.
82 A ¶ Imelda sits on another.
83 A Their knees nearly touch.
84 D KARINA: Can I have a cigarette?
85 D IMELDA: No smoking near the lilies.
86 D KARINA: Right. Sorry.
87 D IMELDA: Take this instead.
88 A ¶ She pulls a peppermint from her pocket.
89 A Karina unwraps it.
90 A Puts it in her mouth.
91 A ¶ They sit like that.
92 A The fog drifts.
93 A The compressor cycles off.
94 A Silence settles, soft as pollen.
95 D KARINA: Tomorrow?
96 D IMELDA: Tomorrow.
97 A ¶ Karina nods once.
98 A Pulls a single white lily from a bucket.
99 A Hands it over.
100 D KARINA: For the front pew.

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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00041.json
### SCENE s00041 | INT. COMPETITIVE PIE-BAKING TENT, COUNTY FAIR - DAY
Detected names (may be incomplete or contain aliases): AGGIE, LINDQUIST-REYES, LONNIE BIGGS, MEI-LING ARROYO, SIGMUND PRATT, DOROTHEA, DELPHINE VASQUEZ-MOORE, JUDGE
1 A ¶ Rows of folding tables.
2 A Flour hangs in sunbeams like pollen.
3 A A banner reads: 87TH ANNUAL PIE CHAMPIONSHIP.
4 A A judge's gavel sits next to a bell.
5 A ¶ Six contestants stand behind their pies in tight, silent ranks.
6 A ¶ AGATHA "AGGIE" LINDQUIST-REYES (60s, blue ribbon pinned to apron, jaw set) polishes a lattice crust with a pastry brush.
7 A Beside her, LONNIE BIGGS (40s, sweating through a chef's coat, flour on his eyebrows) arranges cherries with tweezers.
8 A At the next station, the young prodigy MEI-LING ARROYO (16, braids, calm as a monk) lets her pie rest.
9 A Behind them, SIGMUND PRATT (70s, bolo tie, hands tremble) hums a hymn.
10 A At the end of the row, twin sisters DOROTHEA and DELPHINE VASQUEZ-MOORE (50s, identical aprons, identical glares) tap the same rhythm on their tables.
11 A ¶ A JUDGE in a straw boater strolls the line, clipboard in hand.
12 A He stops at Aggie.
13 D JUDGE: Mrs. Lindquist-Reyes. Third time in the final. Nervous?
14 D AGGIE: Never.
15 A ¶ Her brush twitches.
16 A Lonnie watches it twitch.
17 D JUDGE (to Lonnie): And you, young man?
18 D LONNIE: Oh, I'm great. Great! Totally relaxed!
19 A ¶ A cherry rolls off his tweezers and across the table.
20 A He does not move.
21 A Everyone watches it roll.
22 A It stops against Mei-Ling's pie.
23 A She regards it, then flicks it back to him with one finger.
24 A ¶ The judge raises his bell.
25 D DOROTHEA: ^Don't you dare.
26 D DELPHINE: ^Don't you dare.
27 A ¶ The twins speak as one, to each other.
28 A Neither blinks.
29 A The judge rings the bell.
30 A ¶ All six lift their forks like swords.
31 A The tent goes still.
32 A Sigmund's hymn gets louder, then stops mid-note.
33 A ¶ The judge cuts into Aggie's pie.
34 A Steam rises.
35 A He takes a bite.
36 A Chews.
37 A His face reveals nothing.
38 D JUDGE: Hm.
39 A ¶ Aggie's brush finally falls from her hand.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02223.json
### SCENE s02223 | EXT. FLOODED RICE PADDY DYKE - DAWN
Detected names (may be incomplete or contain aliases): CORPORAL HARUTO MIZUNO, PRIVATE EMEKA OBI
1 A ¶ Mist hangs over the water.
2 A A broken dyke, a line of mud, a burned-out ox cart half sunk.
3 A ¶ CORPORAL HARUTO MIZUNO, twenties, helmet strap loose, sits on the cart's axle cleaning a rifle bolt with a rag.
4 A Beside him, PRIVATE EMEKA OBI, nineteen, thin, holds a tin cup of tea with both hands.
5 D OBI: It's quiet.
6 D MIZUNO: It's been quiet since yesterday.
7 D OBI: Is that good?
8 D MIZUNO: It's quiet.
9 A ¶ Obi sips.
10 A Grimaces.
11 D OBI: This tastes like smoke.
12 D MIZUNO: Everything tastes like smoke.
13 A ¶ Mizuno reassembles the bolt, slides it home, works the action once.
14 D OBI: My mother says the fog is the spirits of the rice.
15 D MIZUNO: My mother says it's the river breathing.
16 D OBI: They would get along.
17 D MIZUNO: They would argue.
18 D OBI (smiling): Yes. About the rice.
19 A ¶ Distant, a cock crows.
20 A Both men look up toward the sound.
21 D MIZUNO: That's a good sign.
22 D OBI: Or the farm still has someone in it.
23 A ¶ They answer the same moment, quiet.
24 D MIZUNO: We should check.
25 D OBI: We should check.
26 A ¶ They stand.
27 A Mizuno shoulders the rifle.
28 A Obi pours the last of the tea into the water and follows him along the dyke into the mist.
