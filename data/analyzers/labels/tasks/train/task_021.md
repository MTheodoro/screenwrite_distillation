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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01866.json
### SCENE s01866 | INT. APARTMENT - KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): IRIS LENNOX
1 A ¶ A small kitchen.
2 A One lamp.
3 A A kettle gone cold on the stove.
4 A A phone propped against a bowl of fruit, its screen dark.
5 A ¶ IRIS LENNOX, 30s, sits at the table in a cardigan, a mug between her hands, a letter folded beside it.
6 A She stares at the phone.
7 A ¶ She picks it up.
8 A Puts it down.
9 A Picks it up again.
10 A Thumbs the screen.
11 A Holds it to her ear.
12 A ¶ She unfolds the letter and reads the first line under her breath.
13 D IRIS [V.O.] (reading, as if remembered): "Dear Iris. I have started this letter nine times."
14 A ¶ It rings, tinnily, three times.
15 A Four.
16 A Then a flat electronic beep, no greeting at all.
17 D IRIS: Hi. It's me.
18 A ¶ She stops.
19 A Closes her eyes.
20 D IRIS [CONT'D]: That's a stupid way to start. You know it's me. You've always known.
21 A ¶ She laughs, once, and wipes her eye.
22 D IRIS [CONT'D]: I got your letter. I read it standing up in the hallway because I couldn't make it to the kitchen. I read it four times. It's a very good letter. You always did write better than you talked.
23 A ¶ She turns the letter over.
24 D IRIS [CONT'D]: You said you were sorry. You said it three times, actually. I counted. Sorry for leaving. Sorry for the way you left. Sorry for the Thursday.
25 A ¶ A long pause.
26 A Her thumb moves along the mug's rim.
27 D IRIS [CONT'D]: I want to tell you I'm not angry. That would be easier. But I am a little. Not at you. At the Thursday. At whoever decided Thursday was a good day for a person to decide something like that.
28 A ¶ She sets the phone on the table, on speaker, and leans toward it.
29 D IRIS [CONT'D]: You asked if I'd call. I said I wouldn't. I've been sitting here for forty minutes not calling. So.
30 A ¶ She drinks the cold tea.
31 A Grimaces.
32 D IRIS [CONT'D]: Here's what I wanted to say. I wanted to say that the dog is fine. He's fat. He misses you. He sits by the door at six. I know that's not fair to tell you but I'm telling you.
33 A ¶ The line hisses softly.
34 D IRIS [CONT'D]: And I wanted to say that I forgive you, but I'm not ready to say it out loud, so I'm saying it into a machine, which is a little like a church, if you think about it. Nobody answers but you feel lighter.
35 A ¶ She laughs again, wetter.
36 D IRIS [CONT'D]: I'm going to hang up now. Or you'll have to listen to all the rest. There's a lot of rest.
37 A ¶ She reaches for the screen, then pulls her hand back.
38 D IRIS [CONT'D]: Daniel. Call me on Sunday. Or don't. But the porch light will be on.
39 A ¶ She ends the call.
40 A The kitchen is very quiet.
41 A Slowly, deliberately, she gets up, goes to the window, and flicks on the porch light.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01735.json
### SCENE s01735 | INT. BAIT SHOP - DAWN
Detected names (may be incomplete or contain aliases): LENNOX BARRETT, MAMA PEARL
1 A ¶ Minnow tanks bubble in the half-dark.
2 A A radio on the counter plays low static.
3 A The smell of brine, worms, and old coffee.
4 A Pale light creeps through a salt-fogged window.
5 A ¶ LENNOX BARRETT (50s, the owner, flannel shirt, a thick scar through one eyebrow) stands behind the counter with a landline receiver clamped between ear and shoulder.
6 A His other hand rests flat on a lockbox.
7 A He has not slept.
8 A The clock on the wall says 5:42.
9 D MAMA PEARL [V.O.] (over phone): You promised me, Lennox. You promised you'd be home before the sun came up.
10 D LENNOX: I know I did, Mama.
11 D MAMA PEARL [V.O.] (over phone): I made grits. I put the pan back on the stove twice. Your sister's been here since four. She says there's a man on the dock.
12 D LENNOX: There's always a man on the dock.
13 D MAMA PEARL [V.O.] (over phone): Not like this one. She says he's been standing there since midnight with his hat in his hands.
14 A ¶ Lennox looks out the window.
15 A The dock is empty except for a gull.
16 A He turns back and lifts the lid of the lockbox, and the stacks of bills inside catch the light like a pale fan.
17 D LENNOX: Mama, listen to me. I'm going to put this in a bag, and I'm going to carry it out to the truck. I want you to put the phone down and go sit with Ruthie.
18 D MAMA PEARL [V.O.] (over phone): Lennox, the money isn't the thing. It never was. Your father used to say a man is as much what he gives back as what he keeps.
19 D LENNOX: Daddy never kept a thing in his life.
20 D MAMA PEARL [V.O.] (over phone): That's the point, baby. That's exactly the point.
21 A ¶ He closes the box.
22 A He runs his thumb along the latch, once, and his shoulders drop.
23 D LENNOX: Put the pan back on, Mama. Make it hot.
24 D MAMA PEARL [V.O.] (over phone): I never took it off.
25 A ¶ He hangs up.
26 A He carries the lockbox out through the beaded door, across the planks, to the end of the dock.
27 A The sun lifts the edge of the water.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01332.json
### SCENE s01332 | INT. FIELD KITCHEN IN A RUINED OPERA HOUSE - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): CAPTAIN ANNELIES DE VRIES, BEL, CORPORAL EZRA PRYCE, PRIVATE LUCIEN BEAUMONT, SUNDARAM, WRÓBEL
1 A ¶ Plaster cherubs on the ceiling, dust on the velvet seats.
2 A In the orchestra pit, a canvas-covered stove ticks and hisses.
3 A A gaping hole in the roof lets a shaft of watery sunlight fall onto the stage, where a dozen mess tins steam in a row.
4 A ¶ CAPTAIN ANNELIES DE VRIES, 40s, reading glasses pushed up into gray-blond hair, leans on a conductor's stand with a ledger.
5 A SERGEANT IGNACY WRÓBEL, 50s, thick mustache, stirs a vat of barley soup with an oar-length spoon.
6 A CORPORAL EZRA PRYCE, 20s, peels potatoes on the lip of the stage with excruciating care.
7 A PRIVATE LUCIEN BEAUMONT, 19, sits in the first row with a rifle across his knees and a tin of cigarettes he is not allowed to open.
8 A PRIVATE "DOC" SUNDARAM, 30s, a medic with a faded red cross on his sleeve, picks his way down the aisle holding a crate of tinned peaches.
9 A ¶ The distant guns thud, soft as a bass drum in another building.
10 A Nobody reacts.
11 D DE VRIES (to the room): Mess in ten minutes. Tins out, men. Boots off the seats.
12 A ¶ Beaumont lowers his boots.
13 A Pryce nods without looking up.
14 A Wróbel taps the spoon on the rim of the vat, the rhythm of a conductor calling an overture.
15 D WRÓBEL (to Pryce): Thinner, Corporal. That peel is thick enough to roof a barn.
16 D PRYCE: Sergeant, the potatoes are rotten.
17 D WRÓBEL: Then peel the rotten out of them.
18 A ¶ Doc Sundaram sets the crate on the stage, pries off a lid with his thumbnail, lifts a peach out, and sniffs it.
19 A He glances at the captain, shrugs, and eats a piece with his fingers while Beaumont watches with open longing and Pryce holds out a hand until Doc drops a slice into it, and the sergeant pretends not to see any of it, stirring a little harder.
20 D SUNDARAM (muttering): Best thing I've eaten since Naples.
21 D DE VRIES: Doc, you'll share that with the ward.
22 D SUNDARAM: Always, Captain.
23 A ¶ She makes a mark in her ledger.
24 A A flake of plaster drifts down from the ceiling and lands on the page.
25 A She blows it away.
26 D BEAUMONT: Captain, is it true there's a piano under the stage?
27 D DE VRIES: There is.
28 D BEAUMONT: Does anyone play?
29 D DE VRIES: Not since the third.
30 D WRÓBEL (to the soup): I played in Kraków once. Badly.
31 D PRYCE: You, Sergeant?
32 D WRÓBEL: Everyone plays badly in Kraków. It is the national style.
33 A ¶ Pryce grins into his peel.
34 A Beaumont laughs, then covers his mouth as if it were illegal.
35 A Somewhere far away a shell lands, long and low.
36 A The chandelier overhead shivers, then stills.
37 D DE VRIES (to the room): Steady. That was ours.
38 D SUNDARAM (muttering): Always theirs when it's close.
39 D WRÓBEL: Tins! Line up. If you can't hold a tin, hold a spoon.
40 A ¶ They shuffle onto the stage, one after another, and form a ragged line in the weak sun.
41 A Wróbel ladles.
42 A Steam rises from each tin into the beam of light, and for a moment the whole ruined theater looks like a painting of a feast.
43 D PRYCE (quietly): Captain, what do we do when it's over?
44 D DE VRIES: Eat.
45 D PRYCE: And after that?
46 D DE VRIES: After that, Corporal, we peel more potatoes.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01475_1.json
### SCENE s01475_1 | INT. SUGAR MILL - SECOND FLOOR - NIGHT
Detected names (may be incomplete or contain aliases): SERGEANT, CAPTAIN, MEDIC, IBRAHIM
1 A ¶ A long room of rotted grain sacks and a cold boiler.
2 A A hole in the roof lets in the rain.
3 A The three of them drop their packs.
4 A ¶ The Captain spreads her map on a barrel and studies it with a pencil stub.
5 A The Sergeant props his rifle at the window, rubs his knee, then looks out at the dark plain.
6 A The Medic sits against the wall, unlaces his sodden boots, and winces as he peels them off.
7 D SERGEANT: How far to the bridge?
8 D CAPTAIN: Fourteen kilometers.
9 D SERGEANT: In the morning?
10 D CAPTAIN: At dawn. If the river lets us.
11 D MEDIC (small voice): The river's already let us. It came up to meet us.
12 A ¶ The Sergeant almost smiles.
13 A The Captain doesn't look up from her map.
14 D CAPTAIN: You'll want those feet dry, Medic.
15 D MEDIC: Yes, ma'am.
16 D CAPTAIN: Then dry them. That's an order.
17 A ¶ The Medic wrings out a sock.
18 A The Sergeant sits beside him and hands over a rag from his own kit.
19 D SERGEANT: Use this. It's clean. Mostly.
20 D MEDIC: Thank you.
21 D SERGEANT: What's your name, son? I've been calling you Medic for six days.
22 D MEDIC: Ibrahim, Sergeant. Ibrahim Osei.
23 D SERGEANT: Ibrahim. Good. A man needs a name in the dark.
24 A ¶ The Captain finally looks up.
25 A A beat.
26 A Something eases in her face.
27 D CAPTAIN: Ibrahim, how old are you?
28 D IBRAHIM: Nineteen, ma'am.
29 D CAPTAIN: Nineteen.
30 A ¶ She says it softly, as if turning the word over to find out what it weighs.
31 A Then she folds the map, takes a tin from her pocket, and pries it open.
32 D CAPTAIN [CONT'D]: Rations. One tin of peaches. We split it three ways.
33 D SERGEANT: Peaches? Where did you get peaches?
34 D CAPTAIN: I've carried them since the coast. I was saving them.
35 D SERGEANT: For what?
36 D CAPTAIN: For a night like this one. When nothing else was left to save them for.
37 A ¶ She passes the tin.
38 A The Sergeant takes a slice and passes it on.
39 A Ibrahim takes a slice and holds it up to the dim light like a jewel before he eats it.
40 D IBRAHIM: It's sweet.
41 D SERGEANT: It is.
42 D CAPTAIN: Eat the syrup too. We'll want the sugar tomorrow.
43 A ¶ They drink the syrup in turns, silently.
44 A Rain ticks on the sacks.
45 A Below them the water slaps against the vats.
46 A ¶ The Sergeant takes the first watch at the window.
47 A The Captain lies down with her pack for a pillow, her eyes open.
48 A Ibrahim curls on his side, hands tucked between his knees.
49 D IBRAHIM (half-asleep): Sergeant? Do you think we'll make the bridge?
50 D SERGEANT (not turning): Sleep, Ibrahim.
51 D IBRAHIM: But do you think...
52 D SERGEANT: I think the bridge has waited this long. It can wait for you.
53 A ¶ Ibrahim's breath slows.
54 A The Captain closes her eyes.
55 A The Sergeant stays at the window, a shape against the gray, listening to the rain and the river and, beyond them, nothing at all.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00780.json
### SCENE s00780 | EXT. INK RIVER - FERRYMAN'S TOLL BOOTH - TWILIGHT
Detected names (may be incomplete or contain aliases): MAGDA ORLOVSKAYA-FELL, BASIL THORNQUIST, SIX-FINGERED JO
1 A ¶ Black water.
2 A Slow.
3 A Letters swim in it like minnows.
4 A A crooked booth on stilts.
5 A ¶ MAGDA ORLOVSKAYA-FELL, 60s, tollkeeper, lantern for a left hand, counts coins into a jar.
6 A ¶ BASIL THORNQUIST, 30s, pilgrim, muddy cloak, stands at the booth window.
7 A A satchel at his feet.
8 A ¶ SIX-FINGERED JO, ageless, a heron the height of a man, stalks along the dock.
9 D MAGDA: Toll's a memory.
10 D BASIL: A memory?
11 D MAGDA: Of your own. Not borrowed.
12 A ¶ Basil digs in his satchel.
13 A Pulls out a pebble.
14 A Holds it up.
15 D BASIL: My mother's garden.
16 A ¶ Magda sniffs the pebble.
17 A Shakes her head.
18 D MAGDA: Too small.
19 D BASIL: It's a good memory.
20 D MAGDA: It's a pebble.
21 A ¶ Jo ruffles.
22 A Taps the dock with a long beak.
23 D JO: Let him pass, Magda.
24 D MAGDA: Don't tell me my business, bird.
25 D JO: He's carrying something heavy.
26 D MAGDA: They all are.
27 A ¶ Basil lifts the satchel.
28 A Sets it on the sill.
29 A The booth creaks.
30 D BASIL: What if I told you what's inside?
31 A ¶ Magda and Jo lean in.
32 D MAGDA: Tell.
33 D JO: Tell.
34 A ¶ They share a look.
35 A Both clear their throats.
36 A Basil smiles faintly.
37 D BASIL: A name.
38 D MAGDA: Whose?
39 D JO: Whose?
40 D BASIL: Mine. I left it at home.
41 A ¶ Magda writes in her ledger.
42 A Crosses out a line.
43 D MAGDA: That'll do.
44 A ¶ She slides a coin through.
45 A It's blank on both sides.
46 A Basil takes it.
47 D JO: Mind the third current.
48 D BASIL: Thank you.
49 A ¶ The ferry is a hollow boat of reeds.
50 A It nudges the dock.
51 A Basil steps aboard.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00130.json
### SCENE s00130 | INT. MONASTERY BELL TOWER - DAWN
Detected names (may be incomplete or contain aliases): SERGEANT IGNATIUS OBUYA, PRIVATE TOBIAS WREN, STRANGER, ANSELM
1 A ¶ Narrow stone stair, spiraling up into dark.
2 A At the top: a square chamber, open arches on four sides, a great bronze bell hanging dead still.
3 A Fog beyond the arches.
4 A Below, somewhere, artillery coughs.
5 A ¶ SERGEANT IGNATIUS OBUYA, 30s, mud to the knees, rifle slung, wedges himself behind a pillar.
6 A ¶ Behind him, PRIVATE TOBIAS WREN, 19, shaking hands, a field radio strapped to his back.
7 A ¶ A STRANGER crouches in the corner.
8 A Gaunt.
9 A Brown habit, rope belt, bare feet.
10 A He has been there all night.
11 D OBUYA (low): Who's that?
12 D WREN: Monk, I think.
13 D OBUYA (to the Stranger): You speak English?
14 A ¶ The Stranger nods, once.
15 D STRANGER: Some. Brother Anselm.
16 D OBUYA: Brother, you can't be up here.
17 D ANSELM: I have rung this bell every dawn for thirty years.
18 A ¶ Another shell.
19 A The tower shudders.
20 A Dust falls.
21 D WREN: Sarge, the ridge is full of them.
22 D OBUYA: Count.
23 D WREN: Forty. Fifty.
24 D OBUYA: Radio. Tell battalion we're in position.
25 A ¶ Wren fumbles with the handset.
26 A Static.
27 A Nothing.
28 D WREN: Dead.
29 D OBUYA: Then we hold.
30 A ¶ Anselm stands.
31 A He looks at Obuya.
32 A Points to the bell, then to himself.
33 D ANSELM: They will hear it. They always stop.
34 D OBUYA: Brother, if you ring that, they'll know exactly where we are.
35 D ANSELM: They know already.
36 A ¶ He lifts the rope and tugs once.
37 A ¶ A single, enormous BONG.
38 D OBUYA: No!
39 A ¶ Anselm rings it again.
40 A And again.
41 A The tower hums with it.
42 A Below, in the fog, the guns fall silent.
43 A ¶ Wren stares through the arch.
44 D WREN: They're stopping.
45 D OBUYA: What?
46 D WREN: They're taking their hats off.
47 A ¶ Obuya lowers his rifle.
48 A Anselm keeps ringing.
49 A Behind him, the sun breaks through the fog like a struck match.

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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00886.json
### SCENE s00886 | INT. CLIFFSIDE BARBERSHOP - DAY
Detected names (may be incomplete or contain aliases): JEDEDIAH CROWE, COLTON MAYHEW, AGNES BELLWETHER
1 A ¶ A single chair bolted to a plank floor, facing a wide window that opens onto a canyon.
2 A The wind whistles through a crack in the frame.
3 A A mirror.
4 A A strop.
5 A A pot of lather.
6 A ¶ JEDEDIAH CROWE, 60s, the barber, stands behind the chair in a clean white apron.
7 A Gentle hands.
8 A Soft voice.
9 A He hums as he whisks the lather.
10 A ¶ COLTON MAYHEW, 30s, lies back in the chair with a towel across his throat.
11 A Dusty hat on his knee.
12 A Revolver on his hip, strap loose.
13 A ¶ AGNES BELLWETHER, 50s, a widow in black, sits on a bench by the door with a sewing basket and does not look at either man.
14 D JEDEDIAH: A little off the sides?
15 D COLTON: Just the beard.
16 D JEDEDIAH: Quiet morning.
17 D COLTON: Suits me.
18 D JEDEDIAH: Rode far?
19 D COLTON: Far enough.
20 A ¶ Jedediah strops the razor.
21 A The leather slaps.
22 A Agnes pricks her finger with the needle and doesn't flinch.
23 D JEDEDIAH: Miss Agnes, you want coffee?
24 D AGNES: No, thank you, Jed.
25 D JEDEDIAH: Mr. Mayhew?
26 D COLTON: Not before I'm shaved.
27 A ¶ Jedediah smiles, spreads the lather, and begins to draw the razor along Colton's jaw.
28 A Slow.
29 A Deliberate.
30 A The canyon wind rises.
31 D COLTON [CONT'D]: You know my name.
32 D JEDEDIAH: Everybody does, since Tuesday.
33 A ¶ Colton's eyes open.
34 D COLTON (speaking at once; speaking at once): JEDEDIAH What did you hear? Not much. Just that you killed my son.
35 A ¶ The razor rests at Colton's throat.
36 A Agnes sets down her sewing.
37 D AGNES: Jed.
38 D JEDEDIAH: It's all right, Agnes.
39 D COLTON: I never--
40 D JEDEDIAH: You never were sorry. I know. I read the report.
41 A ¶ A very long moment.
42 A The wind drops.
43 A The only sound is Colton's heartbeat, loud in his throat.
44 D JEDEDIAH [CONT'D]: But I'm a patient man, Mr. Mayhew. And Miss Agnes has a pie in the oven.
45 A ¶ He lifts the razor away.
46 A Wipes it on the towel.
47 A Folds it shut.
48 D JEDEDIAH [CONT'D]: The sheriff's on his way. He'll be here before the lather dries.
49 A ¶ Colton lies perfectly still, as if one breath might cost him everything.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01968.json
### SCENE s01968 | EXT. WELL-DIGGING CAMP - DESERT - DAY
Detected names (may be incomplete or contain aliases): EZRA LOCKRIDGE, MERCY TAVARES, ANSEL WHITCOMBE
1 A ¶ A dry plain under a white sky.
2 A A scaffold of timbers stands over a deep shaft.
3 A A windlass creaks.
4 A A water barrel stands empty in the shade of a tilting wagon.
5 A ¶ EZRA LOCKRIDGE, 50s, sunburnt, sleeves rolled, hauls a bucket of rock and clay up from the shaft hand over hand.
6 A MERCY TAVARES, 30s, in a broad straw hat, stands at the lip of the pit and holds the rope steady.
7 A She is thin, tireless, and has not spoken for a long time.
8 A ¶ The bucket clears the rim.
9 A Ezra tips it.
10 A A thin trickle of mud slides out.
11 A He kneels, takes a pinch, and rubs it between his fingers.
12 D EZRA: Wet.
13 D MERCY: Wet isn't water.
14 D EZRA: It's near.
15 D MERCY: You said that yesterday.
16 A ¶ He wipes his hands on his trousers.
17 A He rises, stiff.
18 A The wind carries a dull sound from the east, the clop of a single horse.
19 A ¶ They turn.
20 A A rider approaches along the dry riverbed, slowly, a long shadow thrown ahead of him.
21 A He is tall and spare, with a black coat and a silver star on his lapel.
22 A ANSEL WHITCOMBE, 40s, a land agent, reins in at the edge of camp and dismounts.
23 D ANSEL: Morning.
24 D EZRA: It's near noon.
25 D ANSEL: So it is. I'm told you've been digging on the Culver claim.
26 D EZRA: I'm told it's nobody's claim.
27 D ANSEL: It's the bank's, as of Tuesday.
28 A ¶ Mercy lets the rope go slack.
29 A Ezra does not move.
30 A The windlass creaks as the bucket swings.
31 D MERCY: We have a filed claim.
32 D ANSEL: You have a filed claim in the wrong county.
33 D EZRA: That so.
34 D ANSEL: I'm afraid it is.
35 A ¶ He takes a folded paper from his coat and holds it out.
36 A Ezra does not take it.
37 A Ansel sets it on the windlass crank and steps back.
38 D ANSEL [CONT'D]: You have until sundown.
39 D MERCY: There's water down there.
40 D ANSEL: There's mud.
41 D MERCY: It's water, mister. Give us an hour.
42 A ¶ Ansel looks at the shaft, then at the horizon.
43 A He sighs and removes his hat.
44 A Sweat runs from his hair.
45 D ANSEL: One hour. Then I'm obliged to read it aloud.
46 A ¶ He walks to the shade of the wagon and sits on its tongue.
47 A Ezra waits.
48 A Then he climbs back down the ladder into the shaft.
49 A Mercy takes up the rope again, steady as a post, and begins to haul.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01650.json
### SCENE s01650 | INT. JURY ROOM, FLOODED COURTHOUSE ANNEX - DAY
Detected names (may be incomplete or contain aliases): BEATRICE ACHTERBERG, DEMETRIUS, LOLA PINEDA, SAMUEL ODHIAMBO, KRZYSZTOF, BAILIFF GWENDOLYN
1 A ¶ Ankle-deep water on the floor.
2 A Sandbags at the door.
3 A A long table, six chairs.
4 A Rain drums on a high window.
5 A ¶ Five jurors sit with their feet on rungs.
6 A Nobody has taken a coat off.
7 A ¶ BEATRICE ACHTERBERG, 60s, foreperson, folds her hands.
8 A DEMETRIUS, 40s, a bus driver, taps a pen.
9 A LOLA PINEDA, 20s, a barista, chews her thumbnail.
10 A SAMUEL ODHIAMBO, 50s, a retired teacher, stares at the ceiling.
11 A KRZYSZTOF, 30s, a welder, sits with arms crossed.
12 A ¶ The verdict form lies in the middle of the table.
13 D BEATRICE: We should vote.
14 A ¶ Nobody moves.
15 D BEATRICE [CONT'D]: Anyone?
16 D DEMETRIUS: Not guilty.
17 D LOLA: Not guilty.
18 D SAMUEL (after a moment): Not guilty.
19 D KRZYSZTOF: Guilty.
20 A ¶ Beatrice nods.
21 A Makes a mark.
22 A Her pencil is steady.
23 D BEATRICE: Three to one. And I've not voted.
24 D KRZYSZTOF: Vote.
25 D BEATRICE: After we talk.
26 D DEMETRIUS: What's there to talk about?
27 D KRZYSZTOF: The knife.
28 D DEMETRIUS: The knife wasn't his.
29 D KRZYSZTOF: The glove was.
30 D LOLA (quietly): Gloves can be borrowed.
31 D KRZYSZTOF: So can knives.
32 A ¶ Samuel lowers his gaze from the ceiling.
33 A He picks a pencil off the floor, wipes it on his sleeve.
34 D SAMUEL: I taught his mother.
35 D BEATRICE: Mr. Odhiambo.
36 D SAMUEL: I'm not saying it should matter.
37 D BEATRICE: We were told to disregard everything but the evidence.
38 D SAMUEL: I know. I know that.
39 A ¶ Silence.
40 A The window rattles.
41 A A little water laps against the table leg.
42 D LOLA: My coffee machine's underwater.
43 D DEMETRIUS: Mine's my bus.
44 D KRZYSZTOF: Mine's a pay stub.
45 A ¶ Nobody laughs.
46 A Beatrice smooths the form with both palms.
47 D BEATRICE: Then we take another look at the knife.
48 A ¶ The door opens.
49 A Water sloshes across the floor.
50 A ¶ BAILIFF GWENDOLYN, 40s, in rubber boots and a yellow slicker, wades in with a plastic crate.
51 D GWENDOLYN: Lunch. Egg sandwiches.
52 A ¶ She sets the crate on the table.
53 A Hands out wrapped sandwiches.
54 A Skips Krzysztof.
55 A Gives him a longer look instead.
56 D KRZYSZTOF: What?
57 D GWENDOLYN: Nothing.
58 D KRZYSZTOF: You looked at me.
59 D GWENDOLYN: I look at everyone.
60 A ¶ She leaves.
61 A The door clunks shut.
62 A ¶ Beatrice unwraps a sandwich.
63 A Doesn't eat.
64 A Lola eats half, wraps the rest.
65 A Demetrius takes one bite and puts it down.
66 A Samuel holds his without opening it.
67 A Krzysztof leaves his on the table.
68 D BEATRICE: I'm going to vote.
69 D DEMETRIUS: Go ahead.
70 D BEATRICE: Not guilty.
71 D LOLA: Four.
72 D KRZYSZTOF (low): Five hundred and fifty dollars a week.
73 D BEATRICE: Sorry?
74 D KRZYSZTOF: That's what I make. That's what he stole from me.
75 D SAMUEL: You knew the defendant?
76 D KRZYSZTOF (ignoring this): I want to see the knife again.
77 D BEATRICE: That requires a note to the judge.
78 D KRZYSZTOF: Write the note.
79 A ¶ Beatrice looks at the others.
80 A Lola nods.
81 A Demetrius shrugs.
82 A Samuel sighs and hands her a sheet of paper.
83 A ¶ She writes.
84 A Folds.
85 A Passes it to Samuel, who pushes it back along the table to Krzysztof.
86 A He doesn't touch it.
87 D KRZYSZTOF [CONT'D]: You write it.
88 D BEATRICE: I did.
89 D KRZYSZTOF: Then I'll carry it.
90 A ¶ He takes the note.
91 A Stands.
92 A Water swirls around his boots.
93 A He wades to the door, and Lola's eyes follow him, wide.
94 D LOLA (whispering, after he's gone): Did he say he knew him?
95 D DEMETRIUS: He said it.
96 D SAMUEL: Then he should have said so at the start.
97 D BEATRICE: He didn't want to be excused.
98 A ¶ Nobody speaks.
99 A Rain on the window.
100 A The water, still rising.
