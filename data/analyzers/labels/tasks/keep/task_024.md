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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01473.json
### SCENE s01473 | INT. CORNER LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): TEDDY, MAKINDE-LOWE, MINA, ASHWORTH-REYES, ATTENDANT
1 A ¶ A long fluorescent room that hums on a note slightly flat of pleasant.
2 A Forty-year-old dryers turn their round windows to the room like patient, soapy eyes.
3 A Linoleum the color of weak tea.
4 A A vending machine sells one kind of detergent and one kind of regret.
5 A ¶ At the far end, a wall intercom, brown with age, crackles every so often like a throat clearing itself.
6 A ¶ THEODORA "TEDDY" MAKINDE-LOWE (60s, silver hair pinned under a scarf, the posture of a retired headmistress) folds towels with military corners.
7 A She does it slowly.
8 A She does it as an argument.
9 A ¶ At the next folding table, GUILLERMINA "MINA" ASHWORTH-REYES (60s, jewelry that clinks, a laugh kept in reserve) is unloading a basket of what appear to be fifty identical white shirts.
10 A ¶ Neither woman looks at the other.
11 A The dryers turn.
12 D MINA: They've changed the soap.
13 D TEDDY: They have not.
14 D MINA: It smells different.
15 D TEDDY: You smell different. You've changed your perfume.
16 D MINA: I have not.
17 D TEDDY: It has a note of disappointment in it.
18 A ¶ Mina sets down a shirt, very gently, as one sets down a grenade.
19 A She smooths it.
20 A She picks up another.
21 D MINA: Is that a towel or a tribute?
22 D TEDDY: It is a towel folded the way a towel is meant to be folded.
23 D MINA: It's a bit sharp for a towel. She'd never fold them like that, you know.
24 D TEDDY: She would not. She didn't have the discipline. She had charm, which is the next best thing to a fully ironed shirt.
25 A ¶ Mina's hands go still on the shirt in front of her.
26 D MINA: Don't.
27 D TEDDY: I merely said...
28 D MINA: Don't do the voice. Don't do the voice you do.
29 D TEDDY: What voice? This is my voice. It has been my voice since nineteen-sixty-one.
30 A ¶ The wall intercom CRACKLES.
31 A Both women look up.
32 D ATTENDANT [V.O.] (over intercom, bored): Attention customers. Dryer six is finished. Dryer six is finished. Please remove your items from dryer six.
33 A ¶ Neither moves.
34 A Dryer six, at the end of the row, gives a long, low buzz.
35 D TEDDY: That's yours.
36 D MINA: Yours.
37 D TEDDY: You were by it.
38 D MINA: You were nearer.
39 D ATTENDANT [V.O.] (over intercom): Dryer six. Also, someone has left a casserole dish in dryer three.
40 A ¶ Teddy goes pink at the ears.
41 A Mina notices.
42 A She smiles, slowly, like a woman who has just found the pearl in the oyster.
43 D MINA: A casserole dish.
44 D TEDDY: It's nothing.
45 D MINA: In a dryer.
46 D TEDDY: It had gone cold, and I thought...
47 D MINA: You thought you'd warm it up in a dryer. At a laundromat. At midnight.
48 D TEDDY (with dignity): I was having an evening.
49 A ¶ Mina starts to laugh.
50 A It's a small laugh at first, a hiccup behind her teeth.
51 A She presses a hand over her mouth.
52 A The bracelets clink.
53 D TEDDY [CONT'D]: Stop that.
54 D MINA: I'm not doing anything.
55 D TEDDY: You're laughing at me.
56 D MINA: I'm laughing at a casserole.
57 D TEDDY: It was her recipe.
58 A ¶ The laughter stops as if a switch had been thrown.
59 A ¶ The dryers keep turning.
60 A The room hums its flat note.
61 A Mina picks a shirt up, puts it down.
62 A Teddy folds a towel, unfolds it, folds it again.
63 D MINA (quietly): It was her recipe.
64 D TEDDY: It's the only one I have.
65 D MINA: I have the chicken.
66 D TEDDY: You have the chicken.
67 D MINA: I've had it for six years and I've never once made it.
68 D TEDDY: Nor I the casserole. Until tonight. I put it in the dryer and I stood there and I watched it go round and I thought, this is the stupidest thing I have ever done.
69 D MINA: It is the stupidest thing.
70 D TEDDY: It is.
71 D MINA: It's wonderful.
72 D TEDDY (cracking): Mina, I cannot do this to a perfectly good evening.
73 A ¶ She bangs a folded towel down on the table.
74 A A second.
75 A A third.
76 A She grabs the stack and hurls the whole thing across the room.
77 A It hits the vending machine with a soft, ridiculous FLUMP.
78 A ¶ Mina stares.
79 A Then she picks up a shirt and throws it, too.
80 A It lands on Teddy's head.
81 A For a moment Teddy sits there under it, motionless, like a ghost in a bad school play.
82 D TEDDY [CONT'D] (from under the shirt): That was hers.
83 D MINA: Was it?
84 D TEDDY: It was a very nice shirt.
85 A ¶ She pulls it off.
86 A Both women are laughing now, helplessly, hanging onto the folding table.
87 D ATTENDANT [V.O.] (over intercom, deadpan): Customers. Please keep your grief to the back of the store.
88 A ¶ That makes it worse.
89 A They have to sit down on the floor.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01474.json
### SCENE s01474 | INT. NIGHT-SHIFT CAR WASH - 3 A.M.
Detected names (may be incomplete or contain aliases): NADIA SZABO, DOM, ACHEBE, OLD HARLAN PRICE, LUIS FERRO, VANCE
1 A ¶ Fluorescent lights.
2 A Wet concrete.
3 A A conveyor hums, empty.
4 A ¶ Four people around a break-room table inside a glass booth.
5 A Vending coffee.
6 A Donuts.
7 A ¶ NADIA SZABO (30s, manager) counts the till.
8 A DOMINIC "DOM" ACHEBE (20s) eats.
9 A OLD HARLAN PRICE (70s) does a crossword.
10 A LUIS FERRO (50s) stirs his coffee for too long.
11 D DOM: Seven letters, "cheerful and quiet."
12 D HARLAN: Serene.
13 D NADIA: That's six.
14 D LUIS (not looking up): Nobody's cheerful at three in the morning.
15 D DOM: I'm cheerful.
16 D NADIA: You're asleep.
17 D HARLAN: Placid. Seven.
18 D DOM: He's eating.
19 D NADIA: Both.
20 A ¶ Quiet.
21 A The conveyor hums.
22 A Headlights sweep the glass.
23 A ¶ A black sedan rolls to the entrance and stops.
24 A Nobody gets out.
25 D NADIA [CONT'D]: Closed sign's on.
26 D HARLAN: Sign's always on.
27 D LUIS (low): Nobody go out.
28 D DOM: Why not?
29 D LUIS: That's the third night. Same car. Same plate. Look at the plate.
30 A ¶ They look.
31 A Dom stops chewing.
32 D HARLAN: Who parks and waits at a car wash?
33 D LUIS: A man who's already clean.
34 D NADIA: Luis...
35 A ¶ The sedan's door opens.
36 A A polished shoe touches wet concrete.
37 A MR. VANCE (50s, camel coat, pleasant face) steps out and walks toward the booth, hands visible, smiling.
38 D LUIS (whispering): He asked me last night where the cameras are.
39 D NADIA: And you said?
40 D LUIS: Nothing.
41 D HARLAN: Good.
42 D DOM: Then why's he coming to ask again?
43 A ¶ Nadia's hand slides under the counter and closes on something cold.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01475_0.json
### SCENE s01475_0 | EXT. FLOODED SUGAR MILL - DUSK
Detected names (may be incomplete or contain aliases): CAPTAIN RUTH OYELOWO-KAUFMANN, SERGEANT BASHIR AL-HAMDANI, MEDIC, CAPTAIN, SERGEANT
1 A ¶ A war-wrecked sugar mill on a river plain.
2 A The ground floor stands in knee-deep brown water.
3 A Chimney broken.
4 A Rain has thinned to drizzle.
5 A ¶ Three soldiers wade between iron vats, rifles above their heads.
6 A All three are exhausted and trying not to show it.
7 A ¶ CAPTAIN RUTH OYELOWO-KAUFMANN (40s, steady, carries a map case) goes first, testing each step with a pole.
8 A SERGEANT BASHIR AL-HAMDANI (30s, broad shoulders, a limp he hides) follows, watching the ridge line.
9 A A young MEDIC (20s, red cross armband, boots gone) brings up the rear, carrying a pack too big for him.
10 D CAPTAIN: Stairs on the left. We take the second floor and dry out.
11 D SERGEANT: Dry out, Captain? With what?
12 D CAPTAIN: With hope, Sergeant.
13 A ¶ The Medic stumbles on a submerged rail.
14 A The Sergeant catches him by the strap and sets him upright without a word, and the Captain stops, turns, and watches the boy catch his breath before she moves on.

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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01476.json
### SCENE s01476 | INT. ORBITAL GREENHOUSE RING - "SOLARIUM 3" - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): IMOGEN FAIRWEATHER-OKORO
1 A ¶ A curved corridor of glass and ribbed steel, wrapped around a slow-turning station.
2 A Rows of tomato vines climb silver trellises under violet grow-lamps.
3 A Beyond the glass, Saturn's rings burn thin and gold against black.
4 A ¶ DR. IMOGEN FAIRWEATHER-OKORO (50s, close-cropped gray hair, a patched blue jumpsuit, hands stained green to the wrist) walks the rows with a tablet.
5 A She is humming.
6 A She stops at a vine and presses a ripe tomato between thumb and finger.
7 D IMOGEN: Good girl.
8 A ¶ She plucks it, bites in, closes her eyes.
9 A The station is quiet.
10 A The lamps hum on a calm note.
11 A Everything is exactly as it should be.
12 A ¶ She taps the tablet and speaks into it.
13 D IMOGEN [CONT'D]: Greenhouse log, day four hundred and twelve. Yield nominal. Humidity nominal. Crew morale...
14 A ¶ She smiles at the empty corridor.
15 D IMOGEN [CONT'D]: Nominal. Seeing as I'm the crew.
16 A ¶ A soft chime.
17 A The tablet screen flickers.
18 A A recorded voice, her own, younger, bright, comes through the speaker.
19 D IMOGEN [V.O.] (recording): Log, day one. If you're hearing this, Imogen, then the relief ship is overdue and I've been right about the schedule all along.
20 A ¶ Imogen's smile fades.
21 A She lifts the tablet and scrolls.
22 A A file she does not remember is open.
23 D IMOGEN [V.O., CONT'D] (recording): Don't go to the east vines. The ones in the corner. Don't water them. Don't touch them. They aren't ours.
24 A ¶ Imogen turns her head slowly.
25 A At the end of the ring, past the last trellis, a single vine she has never planted is climbing the glass, pulsing, in time with her breath.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01477.json
### SCENE s01477 | EXT. SALT FLAT - HIGH NOON
Detected names (may be incomplete or contain aliases): LUCKY, TREVINO-ASH, BARNABY CROW
1 A ¶ White.
2 A Flat.
3 A Shimmering to the horizon.
4 A A dead windmill.
5 A A single iron water trough, bone dry.
6 A ¶ LUCINDA "LUCKY" TREVINO-ASH (30s, sun-cracked lips, black duster, a rifle across her saddle) sits a paint mare in the glare.
7 A ¶ Across the flat, a man on foot.
8 A BARNABY CROW (60s, one blind eye, a gold tooth, no horse).
9 A He drags a coffin lid behind him on a rope.
10 A ¶ Lucky waits.
11 A He keeps coming.
12 D LUCKY: That's far enough.
13 D BARNABY: Is it?
14 A ¶ He keeps coming.
15 D LUCKY: Barnaby.
16 D BARNABY: Lucky.
17 D LUCKY: Where's your horse?
18 D BARNABY: Ate it.
19 D LUCKY: You didn't.
20 D BARNABY: Wanted to.
21 A ¶ He stops ten paces off.
22 A Sits on the coffin lid.
23 A Wipes his face.
24 D BARNABY [CONT'D]: Got any water?
25 A ¶ She tosses him a canteen.
26 A He drinks.
27 A Pours some on his head.
28 A Hands it back, empty.
29 D LUCKY: That was my last.
30 D BARNABY: I know.
31 A ¶ Her rifle comes up.
32 A He doesn't flinch.
33 D BARNABY [CONT'D]: Before you shoot me. Look in the lid.
34 D LUCKY: Why?
35 D BARNABY: Humor an old man.
36 A ¶ She keeps the rifle on him.
37 A Leans out of the saddle and flips the lid with her boot.
38 A Underneath: a bundle of bank notes, wet and rotting, tied with twine.
39 D LUCKY: That the Dunmore money?
40 D BARNABY: What's left. The salt got in.
41 A ¶ Lucky laughs.
42 A A short, cracked bark.
43 A Barnaby laughs, too.
44 A They are both still laughing when the rifle goes off.
45 A ¶ The shot echoes.
46 A Barnaby looks down.
47 A Nothing.
48 A The bullet has kicked up salt a foot from his boot.
49 D LUCKY: That's for the horse.
50 D BARNABY (wheezing): Fair.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01478.json
### SCENE s01478 | INT. DEEP-SEA SURVEY HABITAT "KELP-9" - COMMON ROOM - NIGHT
Detected names (may be incomplete or contain aliases): CAPTAIN HENRIETTA VOSS-LIANG, TAMSIN ODUYA, ENGINEER PIOTR NAKAMURA-BELL, TOPSIDE, GROAN
1 A ¶ A cramped steel room with a single round viewport.
2 A Beyond it, blackness and drifting silt.
3 A Bunks along one wall.
4 A A galley table bolted to the floor.
5 A A wall speaker with a dented grille.
6 A ¶ Three crew members sit at the table playing cards.
7 A A fourth voice lives in the speaker.
8 A ¶ CAPTAIN HENRIETTA VOSS-LIANG (50s, gray braid, reading glasses on a cord) deals.
9 A DR. TAMSIN ODUYA (30s, tall, a bandaged hand) arranges her cards slowly.
10 A ENGINEER PIOTR NAKAMURA-BELL (40s, heavy, oil under his nails) eats from a foil pouch with a plastic spoon.
11 D VOSS-LIANG: Your bid, Doctor.
12 D TAMSIN: Pass.
13 D PIOTR: She always passes.
14 D TAMSIN: I always win.
15 D PIOTR: When?
16 D TAMSIN: Eventually.
17 A ¶ A low, slow GROAN passes through the hull.
18 A Nobody looks up.
19 D VOSS-LIANG: That's the third time today.
20 D PIOTR: It's the sediment settling. Pressure shifts. It's nothing.
21 D TAMSIN: Nothing makes a very specific sound.
22 A ¶ The speaker crackles.
23 D TOPSIDE [V.O.] (over speaker): Kelp-9, Topside. Weather's picking up. We'll hold the surface buoy another twelve hours, then we're sending the lift. Over.
24 D VOSS-LIANG (toward speaker): Copy, Topside. All quiet down here. Out.
25 A ¶ She sets her cards face-down.
26 D VOSS-LIANG [CONT'D]: That's the longest any of us has gone without an alarm.
27 D PIOTR: Don't say that.
28 D VOSS-LIANG: Why not?
29 D PIOTR: Because the habitat listens.
30 D TAMSIN: It does not listen. It's a tin can with a sandwich in it.
31 A ¶ The GROAN comes again, closer.
32 A A pipe overhead ticks.
33 A The silt outside the viewport swirls, as if something huge has moved behind it.
34 A ¶ Tamsin stands slowly.
35 A Walks to the viewport.
36 A Presses her bandaged hand to the glass.
37 D TAMSIN [CONT'D]: Captain.
38 D VOSS-LIANG: Doctor?
39 D TAMSIN: The silt isn't settling.
40 A ¶ Piotr drops his spoon.
41 A He goes to the viewport.
42 A Voss-Liang is already there.
43 A All three stare out at a patch of black that is slightly blacker than the rest, and that is rising.
44 D TOPSIDE [V.O.] (over speaker, distorted): Kelp-9, Topside, we're showing a seismic spike. Repeat, seismic spike. Get out of there. Get out of there now.
45 A ¶ The lights flicker.
46 A The hull begins to SHRIEK.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01479.json
### SCENE s01479 | INT. ROLLER DERBY RINK - BASEMENT OF A BOWLING ALLEY - NIGHT
Detected names (may be incomplete or contain aliases): PRISS, MONTEIRO, COACH ARLETTE BEAUMONT-WEI, RESERVE SKATER, ODALYS
1 A ¶ Cracked maple floor.
2 A Bleachers made of old pews.
3 A A hand-painted banner reads: THE DOCKSIDE DAMES.
4 A ¶ Two skaters sit on a bench, lacing up.
5 A The younger, PRISCILLA "PRISS" MONTEIRO (20s, shaved head, neon wrist guards), bounces a knee.
6 A The older, COACH ARLETTE BEAUMONT-WEI (50s, clipboard, whistle, a voice like gravel), stands over her.
7 D ARLETTE: Eyes up. Head up. Heart up.
8 D PRISS: Which one first?
9 D ARLETTE: All of them.
10 A ¶ She blows the whistle.
11 A It echoes off the pews.
12 D PRISS (muttering): Okay. Okay. Okay.
13 D ARLETTE (to the empty room): Anybody else? Anybody?
14 A ¶ Silence.
15 A A single pew creaks.
16 D ARLETTE [CONT'D] (louder, to Priss): Where's the rest of the team?
17 D PRISS: Flu. Four of them. And Dana's cousin's wedding.
18 D ARLETTE: We have a bout in twenty minutes.
19 D PRISS: I know.
20 D ARLETTE: With three skaters.
21 D PRISS: Two. You don't skate.
22 A ¶ Arlette glares.
23 A Priss shrinks.
24 A ¶ The basement door bangs.
25 A A stranger descends the steps: a woman in a long coat and rental skates, rolling unsteadily down the aisle.
26 A RESERVE SKATER (30s, athletic, bleached ponytail, a duffel on her shoulder).
27 A She stops at the rail.
28 D RESERVE SKATER: Is this the Dockside Dames?
29 D ARLETTE: Who's asking?
30 D RESERVE SKATER: Somebody who played four years for the Harbor Hellcats.
31 D PRISS (whisper): She's a Hellcat.
32 D ARLETTE (to Priss): I can hear.
33 D RESERVE SKATER: I got cut. Long story. I need a team.
34 D ARLETTE: We need a body.
35 D RESERVE SKATER: I'm more than a body.
36 D ARLETTE: What's your name?
37 D RESERVE SKATER: Odalys. Odalys Ferreira.
38 D ARLETTE: Welcome, Odalys.
39 A ¶ Odalys drops her duffel and sits.
40 A Priss scoots over.
41 D PRISS (to Odalys): You're really a Hellcat?
42 D ODALYS: Was.
43 D ARLETTE (to the room): Three skaters. Nobody's tired. Nobody's hurt. Nobody's quitting.
44 D PRISS: Nobody's even stretched.
45 D ARLETTE: Stretch on the track.
46 A ¶ She blows the whistle.
47 A The three of them stand, wobble, roll toward the rink.
48 A Odalys glances back at the empty pews and mutters.
49 D ODALYS (to herself): Please let somebody come.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01480.json
### SCENE s01480 | INT. HOT-AIR BALLOON BASKET - DAWN
Detected names (may be incomplete or contain aliases): SOLOMON ABARA-KITT, ROZ, PETROV, PILOT, GUNNAR ECKHARDT
1 A ¶ A wicker basket rising slowly over a patchwork of fog and green hills.
2 A A propane burner roars, then hushes.
3 A ¶ SOLOMON ABARA-KITT (30s, sunburned, nervous hands) holds a small velvet box behind his back.
4 A ROSALIND "ROZ" PETROV (30s, wind-whipped hair, an easy grin) leans over the edge, taking photos with her phone.
5 D ROZ: Look at that. You can see the whole valley.
6 D SOLOMON: I can see it.
7 D ROZ: You're not looking.
8 D SOLOMON: I'm looking at you.
9 A ¶ She turns.
10 A Sees his face.
11 A Sees the way his hand is behind him.
12 D ROZ: Sol. What's in your hand?
13 D SOLOMON: Nothing.
14 D ROZ: Sol.
15 D SOLOMON: It's a, um. It's a sandwich.
16 D ROZ: It is not a sandwich.
17 A ¶ He brings out the box.
18 A Opens it.
19 A A ring catches the first sun.
20 D SOLOMON: Roz. Will you...
21 A ¶ A voice from above them, cheerful, heavily accented.
22 D PILOT [O.S.]: Good morning, lovebirds!
23 A ¶ Solomon freezes.
24 A Roz looks up.
25 A At the top of the basket's rigging, clinging to a rope with one hand and holding a thermos with the other, hangs the PILOT, GUNNAR ECKHARDT (60s, wild white beard, goggles pushed up on a leather cap).
26 D GUNNAR: Do not mind me. I am only checking the knots.
27 D SOLOMON (through his teeth): Gunnar. Please.
28 D GUNNAR: Yes, yes, I am very quiet.
29 A ¶ He climbs down out of sight.
30 A Roz laughs until she cries.
31 A Solomon, mortified, looks at the ring.
32 D ROZ: Ask me again.
33 D SOLOMON: Roz Petrov. Will you marry me?
34 D ROZ: Yes.
35 A ¶ From somewhere above, faintly:
36 D GUNNAR [O.S.]: Congratulations!

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01481.json
### SCENE s01481 | INT. FIELD POST OFFICE - A REQUISITIONED SCHOOLROOM - DAY
Detected names (may be incomplete or contain aliases): PRIVATE ELIAS WEATHERBY-NDLOVU
1 A ¶ A schoolroom stripped for the war.
2 A Desks pushed to the walls and stacked with canvas mail sacks.
3 A A blackboard still carries a half-erased multiplication table.
4 A Dust slants through high windows.
5 A Somewhere beyond the walls, distant guns thump at the slow pace of a heart at rest.
6 A ¶ PRIVATE ELIAS WEATHERBY-NDLOVU (40s, spectacles mended with wire, gray at the temples) sits at the teacher's desk with a pile of letters.
7 A He sorts them into pigeonholes made from egg crates.
8 A His hands are careful.
9 A He does not hurry.
10 A ¶ He picks up a letter.
11 A Reads the name.
12 A Pauses.
13 A Puts it face-down at the edge of the desk.
14 A ¶ He picks up the next.
15 A Sorts it.
16 A The next.
17 A Sorts it.
18 A Then he returns to the face-down letter.
19 A Turns it over.
20 A Turns it back.
21 A ¶ Elias does not read it aloud.
22 A Someone else's handwriting does, in his head.
23 D ELIAS [V.O.] (reading, flat): "...and the pear tree has finally put out fruit. Tell Papa. Tell him I kept my word."
24 A ¶ He sets the letter down.
25 A Squares its edge against the desk.
26 A ¶ He takes a pencil from behind his ear.
27 A Flips the face-down letter once more.
28 A On the back, in neat capitals, he writes a single word: RETURNED.
29 A Then, after a moment, he erases it.
30 A ¶ He gets up.
31 A Walks to the blackboard.
32 A Takes a rag.
33 A Wipes the multiplication table away, row by row, until only the nines remain.
34 A He stands there a moment, looking at them.
35 A ¶ He sits again.
36 A Takes the letter.
37 A Places it, gently, in the highest pigeonhole, the one nobody can reach without a chair.
38 A ¶ Elias looks at the highest pigeonhole.
39 A Then at the egg crates.
40 A Then at the door.
41 D ELIAS (to the empty room): Not today.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01482_0.json
### SCENE s01482_0 | EXT. SNOWFIELD BELOW A CRASHED CARGO PLANE - DAY
Detected names (may be incomplete or contain aliases): MARISOL ARROYO-LINDGREN, ANTON BELLWEATHER-ODUYA
1 A ¶ A white slope.
2 A A twisted tail section jutting from the drift.
3 A Wind drags snow in long ropes.
4 A ¶ MARISOL ARROYO-LINDGREN (40s, parka, bleeding scalp under a knit cap) kneels beside the wreck, digging with a tin plate.
5 A ANTON BELLWEATHER-ODUYA (50s, lanky, one arm tucked inside his jacket) stands over her, stamping his feet.
6 A ¶ She digs.
7 A He watches.
8 D ANTON: Anything?
9 D MARISOL: Not yet.
10 A ¶ He paces.
11 A She keeps digging.
12 A The plate scrapes on metal.
13 A She stops.
14 D MARISOL [CONT'D]: There's a hatch.
15 D ANTON: Open it.
16 A ¶ She grips the edge.
17 A Pulls.
18 A It doesn't give.
19 A He kneels beside her with his good hand.
20 A They pull together.
21 A It gives a quarter inch and stops.
22 D MARISOL: It's frozen.
23 D ANTON: Of course it's frozen. Everything's frozen.
24 A ¶ She sits back on her heels.
25 A He stares at the hatch.
26 A Wind howls.
27 D MARISOL (muttering): Don't panic. Don't panic. Don't panic.
28 D ANTON: I'm not panicking.
29 D MARISOL: I wasn't talking to you.
30 A ¶ He looks at her.
31 A She keeps her eyes on the hatch.
32 A ¶ He takes off his glove with his teeth.
33 A Puts a bare palm on the metal.
34 A Holds it there.
35 A Winces.
36 A Pulls away.
37 D ANTON: It's warm underneath.
38 D MARISOL: What?
39 D ANTON: Something's warm. Something's running in there.
40 A ¶ She puts her hand on it.
41 A Holds it.
42 A Her eyes widen.
43 D MARISOL: A generator.
44 D ANTON: Or an engine.
45 A ¶ She slams the plate against the hatch handle.
46 A Once.
47 A Twice.
48 A A crack of ice.
49 A On the third blow the handle snaps loose and the hatch swings up on a gust of warm, oily air.
50 A ¶ They both recoil.
51 A Then they lean in together and stare down a ladder into a hold lit by a single red emergency lamp.
52 D ANTON [CONT'D] (to himself): Thank God.
53 D MARISOL (to Anton): Don't thank anyone yet.
54 A ¶ She swings her legs over the edge.
55 A He grabs her sleeve.
56 D ANTON: Wait. We should tie off.
57 D MARISOL: With what?
58 A ¶ He looks around at the white.
59 A Nothing.
60 A She pulls free.
61 D MARISOL [CONT'D] (to the whole slope, as if calling the wind to witness): We're going down!
62 A ¶ She goes.
63 A He hesitates.
64 A Then follows, sliding the hatch shut over his head.
65 A The snow closes in behind them.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01482_1.json
### SCENE s01482_1 | INT. CARGO HOLD - CONTINUOUS
Detected names (may be incomplete or contain aliases): ANTON, MARISOL
1 A ¶ Crates strapped to the floor.
2 A A red lamp swinging gently.
3 A The hold smells of diesel and spilled coffee.
4 A ¶ She reaches the bottom first.
5 A He lands heavily, groans, and clutches his arm.
6 A ¶ She hands him a flashlight from her belt.
7 A He plays the beam across the crates.
8 A Stenciled words: MEDICAL SUPPLIES.
9 D ANTON: Medical.
10 D MARISOL: That's useful.
11 D ANTON: Is it?
12 D MARISOL: Bandages. Antibiotics. Whatever's in there for your arm.
13 A ¶ He looks at his arm.
14 A He's been avoiding it.
15 A He pulls out the sleeve and sees the dark soak in the fabric.
16 D ANTON (quietly): It's worse than I said.
17 D MARISOL: I know.
18 D ANTON: You knew?
19 D MARISOL: You've been holding it like a baby bird for three hours.
20 A ¶ He laughs, once, and sits down on a crate.
21 A She pries the lid off the next one with the tin plate.
22 A It's full of foil blankets.
23 A ¶ She wraps one around his shoulders.
24 A Sits beside him with another.
25 A ¶ They don't speak.
26 A The red lamp swings.
27 D ANTON (finally): Marisol.
28 D MARISOL: Mm.
29 D ANTON: If it comes to it. If one of us has to walk out.
30 D MARISOL: Don't.
31 D ANTON: If it comes to it, it should be you.
32 A ¶ She doesn't answer.
33 A He turns his head, looking for her face in the red light.
34 A She is staring at the hatch, jaw set, hands wrapped tight in the blanket.
35 D MARISOL (low, to the hatch): It won't come to it.
36 A ¶ The wind outside rises, a long hollow note against the hull.
37 A She does not look away from the ladder.
38 A He tucks the blanket tighter and does the same.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01483.json
### SCENE s01483 | EXT. MANGROVE SWAMP - HIDDEN OXBOW LAGOON - DAWN
Detected names (may be incomplete or contain aliases): DESTA ALEMAYEHU-VOSS, KIPP LOUGHRAN
1 A ¶ Mist on black water.
2 A Tangled roots like the knuckles of drowned giants.
3 A A kingfisher stitches blue over the surface.
4 A ¶ A dugout canoe drifts to the bank.
5 A DESTA ALEMAYEHU-VOSS (40s, cracked sunglasses, rope-burned palms, a satchel of dried fish) steps ashore.
6 A Behind her, curled in the bow, KIPP LOUGHRAN (teen, thin, a bandaged ankle) hugs his knees.
7 D DESTA: Camp's through here.
8 D KIPP: You said that yesterday.
9 D DESTA: Yesterday I was lying.
10 A ¶ She hauls the canoe up the bank.
11 A Kipp limps after, peering around.
12 A ¶ An ironwood tree.
13 A A hammock.
14 A A fire pit with warm ash.
15 A A stack of dry kindling.
16 A A rusted pot, upturned, drying in the sun.
17 D KIPP: Somebody lives here.
18 D DESTA: Somebody did.
19 D KIPP: Who?
20 A ¶ She sets down the satchel.
21 A Takes out the fish and starts to lay them on a flat stone.
22 D DESTA: Let's eat.
23 A ¶ Kipp stays by the tree.
24 A He runs a finger along the bark.
25 A Fresh cuts.
26 A A tally: dozens of notches, in columns of five.
27 D KIPP: These are new.
28 D DESTA (not looking up): Don't touch things.
29 D KIPP: How long since the last notch?
30 D DESTA: Eat.
31 A ¶ He turns.
32 A Looks at her.
33 A She keeps her eyes on the fish.
34 A The kingfisher flies off.
35 D KIPP: You've been here before.
36 D DESTA: Once.
37 D KIPP: When?
38 A ¶ She lifts her head.
39 A Her eyes go past him to the upturned pot, where a small boot, child-sized and rotted, sticks out from under the rim.
40 D DESTA [CONT'D] (very softly): Kipp. Don't turn around.
41 A ¶ He turns around.
42 A He sees the boot.
43 A He sees the tally.
44 A He counts the columns, lips moving, and stops at the last notch, which is shallow and fresh.
45 D KIPP: There's one for me.
46 A ¶ Desta says nothing.
47 A The mist closes over the water.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01484.json
### SCENE s01484 | INT. ABANDONED LANGUAGE LABORATORY - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE VERONICA OSEI-LAMBERT, DETECTIVE MARGUERITE ILLYICH, LEONARD ASHBY
1 A ¶ Forty carrels in rows, each with a dead headset hung on its hook like a tiny hanged man.
2 A Cassette decks, dusty.
3 A A reel-to-reel machine at the front of the room, its tape spooled out across the floor and into the dark.
4 A ¶ DETECTIVE VERONICA OSEI-LAMBERT (40s, trench coat, a flashlight clamped in her teeth) steps between the carrels.
5 A Behind her, DETECTIVE MARGUERITE ILLYICH (40s, long coat, notebook out) keeps one hand on the grip of her sidearm.
6 A Neither speaks.
7 A ¶ At the rear wall, a man sits slumped in a carrel, headset clamped on.
8 A LEONARD ASHBY (50s, a gray cardigan), dead or sleeping.
9 A His chest does not rise.
10 A ¶ Veronica takes the flashlight from her mouth.
11 D VERONICA: She said to look at the tape.
12 D MARGUERITE: Who said?
13 D VERONICA: She did.
14 A ¶ Marguerite follows the loose tape with her eyes, from the reel-to-reel along the floor to Leonard's carrel, where it is fed through the deck beneath his hands.
15 A Veronica leans over him.
16 A She lifts the headset, holds it to her own ear.
17 A ¶ A hiss.
18 A A voice, thin and warm, from the earpiece.
19 D LEONARD [V.O.] (recorded): If you are hearing this, then she has already left the building. She is on the third floor. She has the key. She is not alone.
20 A ¶ Veronica pulls the headset off.
21 A Marguerite has already turned to the door.
22 A On the landing outside, slow footsteps climb, and a keyring chimes at every step.
23 D MARGUERITE (whispering): She's early.
24 D VERONICA: Who is?
25 D MARGUERITE: Both of us, I think.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01485.json
### SCENE s01485 | INT. DEFUNCT CLOCK TOWER - GEAR ROOM - NIGHT
Detected names (may be incomplete or contain aliases): TOBIAS FENWICK-ADEYEMI, MATT, ROSALES-HEIDT
1 A ¶ A cathedral of brass wheels and iron pendulums, stilled for thirty years.
2 A Moonlight comes through the huge translucent dial and paints the room the color of old ivory.
3 A ¶ Two men in dark clothes work their way along a catwalk above the great gear train.
4 A TOBIAS FENWICK-ADEYEMI (50s, gray stubble, a coil of rope on his shoulder) goes first.
5 A MATTHEW "MATT" ROSALES-HEIDT (30s, gloves, a backpack heavy with tools) follows.
6 A ¶ They stop at a small iron door set into the wall behind the largest wheel.
7 D TOBIAS: That's the vault.
8 D MATT: It's a clock.
9 D TOBIAS: The clockmaker's safe. Eighteen-ninety-two. Built into the movement itself.
10 D MATT: How do you know?
11 D TOBIAS: Because I read the blueprints, Matt. All eleven hundred pages.
12 A ¶ Matt swings his pack off.
13 A Kneels in front of the door.
14 A Tobias holds a flashlight over his shoulder.
15 D MATT: Hold it steady.
16 D TOBIAS: I am holding it steady.
17 D MATT: You're breathing on it.
18 D TOBIAS: You're bending the beam.
19 A ¶ Matt looks up.
20 A Tobias lowers the light.
21 A A small, wary silence.
22 A Then Matt starts work, the picks clicking softly in the lock.
23 D MATT: Tobias, if he sees him standing in the light like that...
24 D TOBIAS: Who?
25 D MATT: Him. The one you hired to watch the street.
26 D TOBIAS: I hired nobody.
27 D MATT: Then who's in the street?
28 A ¶ Tobias goes still.
29 A Matt goes still.
30 A Each waits for the other to say it.
31 A ¶ The lock gives.
32 A The door swings open on a velvet-lined compartment.
33 A Inside, a single pocket watch on a gold chain, ticking.
34 D MATT [CONT'D]: It's running.
35 D TOBIAS: It shouldn't be.
36 A ¶ Far below, with a groan like a waking giant, the great gear train begins to turn.
37 A He grabs the rail.
38 A He grabs the rope.
39 A Neither of them can tell which of them is shouting.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01486.json
### SCENE s01486 | INT. TAXIDERMY WORKSHOP - EVENING
Detected names (may be incomplete or contain aliases): INSPECTOR AUGUSTINE BELLAMY-OKAFOR, MISS CLEMENTINE VASQUEZ-HOLT, ODALYS PRENDERGAST, WILFRED TANAKA, BELLAMY, MISS VASQUEZ
1 A ¶ Glass eyes on every shelf.
2 A A stuffed heron guards the doorway.
3 A Under a green-shaded lamp, a long worktable holds a half-mounted fox and a ledger.
4 A ¶ INSPECTOR AUGUSTINE BELLAMY-OKAFOR (50s, bowler hat, wet umbrella) stands at the table.
5 A Opposite him, MISS CLEMENTINE VASQUEZ-HOLT (40s, leather apron, a scalpel in her fist) hovers over the fox.
6 A Seated on a stool by the stove are two others: the widow MRS. ODALYS PRENDERGAST (60s, black gloves, a handbag clutched in her lap) and the young apprentice WILFRED TANAKA (19, soot on his cuffs, eyes on the floor).
7 D BELLAMY: Mrs. Prendergast, your husband died on the fourteenth.
8 D MRS. PRENDERGAST: He did.
9 D BELLAMY: And on the fifteenth you commissioned a mounting.
10 D MRS. PRENDERGAST: A cat.
11 D BELLAMY: A cat. Which weighs, according to this ledger, eleven stone.
12 D MISS VASQUEZ: We had to reinforce the frame.
13 D BELLAMY (to Vasquez): Did you.
14 D MISS VASQUEZ: It's a very large cat.
15 D BELLAMY: Mr. Tanaka. You did the packing.
16 D WILFRED: I did, sir.
17 D BELLAMY: What was inside the cat?
18 D WILFRED: Sawdust, sir.
19 D BELLAMY: Only sawdust?
20 D WILFRED: And a few cotton wads. Sir.
21 D BELLAMY: And the eleven stone?
22 D WILFRED (quietly): I only lifted the end, sir.
23 D MRS. PRENDERGAST: Wilfred is a good boy.
24 D BELLAMY: I'm sure he is. Miss Vasquez. You are an artist.
25 D MISS VASQUEZ: I am a craftswoman.
26 D BELLAMY: You can tell, I think, the difference between a cat and a man.
27 D MISS VASQUEZ: I can tell the difference between a cat and a lie.
28 D BELLAMY: Which was this?
29 D MISS VASQUEZ: A cat.
30 D BELLAMY: Then open it.
31 A ¶ Silence.
32 A The stove ticks.
33 A Mrs. Prendergast tightens her grip on her handbag.
34 A Wilfred stares at the floorboards.
35 D MISS VASQUEZ: It's been sewn shut.
36 D BELLAMY: Cut the stitches.
37 D MRS. PRENDERGAST: Inspector, please. He was a very private man.
38 D BELLAMY: He is a very dead one, madam.
39 A ¶ The scalpel catches the lamplight.
40 A Bellamy steps forward, and the others half-rise as one.
41 A Miss Vasquez raises the blade, Wilfred bolts for the door, and Mrs. Prendergast lunges for the handbag as it slides from her lap.
42 A ¶ The stuffed heron topples across the doorway.
43 A Wilfred trips over it and falls flat.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01487.json
### SCENE s01487 | INT. CHURCH-TURNED-SALOON, DRY CREEK - NIGHT
Detected names (may be incomplete or contain aliases): STRANGER, SHERIFF DELPHINE ACHEBE-MARSH, BIG JASPER TUCKERMAN, DOC PRUDENCE OYELARAN, OZZIE, BRIGHT-RAMIREZ, TOMASZ KOWALCZYK-LEE, DOC, ORCUTT
1 A ¶ A former chapel with its pews dragged into a poker circle.
2 A A cracked stained-glass saint looks down on the cards with a beatific squint.
3 A Lantern light.
4 A Cigar haze.
5 A Wind scouring the shutters.
6 A ¶ At the long communion table, five players sit hunched over a pot of coins, watches, and one wedding band.
7 A ¶ A STRANGER in a gray duster slouches in the darkest corner, hat low, a glass of milk untouched in front of him.
8 A Nobody has looked directly at him in an hour.
9 A ¶ At the table: SHERIFF DELPHINE ACHEBE-MARSH (40s, weary, star pinned crooked), BIG JASPER TUCKERMAN (50s, a belly like a barrel, a laugh like a rockslide), DOC PRUDENCE OYELARAN (60s, spectacles, neat fingers), and the barkeep OSWALDO "OZZIE" BRIGHT-RAMIREZ (30s, apron, a shotgun under the bar), who deals.
10 A Last, young TOMASZ KOWALCZYK-LEE (19, new boots, trembling hat), sweating over his hand.
11 D JASPER: Call.
12 D DELPHINE: Raise.
13 D DOC: Fold.
14 D OZZIE: Fold.
15 D TOMASZ (whisper): All in.
16 A ¶ The room goes quiet.
17 A Jasper looks at the boy.
18 A Delphine looks at the boy.
19 A Doc, with great delicacy, lifts her spectacles.
20 A ¶ The Stranger stirs in his corner.
21 A Rises.
22 A Crosses the room.
23 A The planks complain under his boots.
24 D STRANGER: Might I see his cards?
25 D DELPHINE: It's not a game for spectators.
26 D STRANGER: It isn't a game at all.
27 A ¶ He stops beside Tomasz.
28 A Lays a gloved hand on the boy's shoulder.
29 A The boy flinches.
30 A The Stranger tilts his head and studies the saint in the window.
31 D STRANGER [CONT'D]: Son, what's your name?
32 D TOMASZ: Tomasz.
33 D STRANGER: Not Tom.
34 D TOMASZ: Not Tom.
35 D STRANGER: Then Tomasz, I'll tell you mine. They call me Reverend Silas Orcutt.
36 A ¶ A slow ripple passes over the table.
37 A Jasper's laugh dies.
38 A Doc's hand finds the edge of her bag.
39 A Ozzie reaches under the bar.
40 A Delphine, without lifting her eyes, thumbs the hammer of her pistol.
41 D ORCUTT (smiling): This was my church.
42 D DELPHINE: It was a ruin.
43 D ORCUTT: It was a ruin because of men at this table.
44 A ¶ Tomasz slides his chair back.
45 A Orcutt's grip tightens.
46 D ORCUTT [CONT'D]: Stay seated, son. I'm only here for the ones who burned it.
47 D JASPER: Now, Reverend...
48 D ORCUTT: Jasper Tuckerman. You carried the lamp oil.
49 A ¶ Jasper surges from his chair.
50 A Delphine fires.
51 A Ozzie brings the shotgun up.
52 A Doc dives behind a pew.
53 A Tomasz, white as chalk, flattens himself under the table, the cards scattering around him like snow.
54 A ¶ The saint in the window, struck by a bullet, loses its head in a shower of colored glass.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01488.json
### SCENE s01488 | INT. FUNERAL HOME KITCHEN - AFTERNOON
Detected names (may be incomplete or contain aliases): THEO, AUNT BERNADETTE, REUBEN, HECTOR, GRACIE, LILIANA, ^REUBEN
1 A ¶ Linoleum.
2 A A casserole dish in every available space.
3 A A wall clock stopped at ten past four.
4 A ¶ Six people share a room built for three.
5 A ¶ GRACELAND "GRACIE" OSEI-LINDQVIST.
6 A 40s.
7 A Eldest daughter.
8 A Hands in the sink.
9 A ¶ REUBEN OSEI-LINDQVIST.
10 A 40s.
11 A Her brother.
12 A Leaning on the fridge.
13 A ¶ AUNT BERNADETTE VASQUEZ.
14 A 70s.
15 A Carries a tin of shortbread like a weapon.
16 A ¶ HECTOR PRZYBYLSKI.
17 A 30s.
18 A Gracie's husband.
19 A Holds a dish towel he never uses.
20 A ¶ LILIANA OSEI.
21 A 16.
22 A Gracie's daughter.
23 A Hood up.
24 A ¶ THEO FINCH.
25 A 50s.
26 A Funeral director.
27 A Waiting.
28 A ¶ Gracie scrubs a dish that is already clean.
29 D THEO: Everything's arranged for three o'clock tomorrow.
30 A ¶ Nobody answers.
31 D THEO [CONT'D]: If the family would like a few more minutes...
32 D AUNT BERNADETTE: We've had four days.
33 A ¶ She sets the tin on the table.
34 A Opens it.
35 A Offers it to no one.
36 D REUBEN: Is there coffee?
37 D HECTOR: I'll make coffee.
38 A ¶ He puts down the towel.
39 A Picks it up again.
40 A Opens a cupboard.
41 A Closes it.
42 D GRACIE: Third shelf.
43 D HECTOR: Right.
44 A ¶ He finds the can.
45 A Fills the pot.
46 A Liliana watches him.
47 D LILIANA (to herself): He's doing it wrong.
48 D HECTOR: What?
49 D LILIANA: Nothing.
50 D REUBEN (to the room): Does anyone know where Dad kept the good suit?
51 A ¶ Silence.
52 A Bernadette studies the shortbread.
53 A Hector studies the coffee can.
54 A Gracie turns off the tap.
55 D GRACIE: Reuben.
56 D REUBEN: It's a simple question.
57 D GRACIE: It's in the hall closet.
58 D REUBEN: Thank you.
59 D GRACIE: Navy. Pressed. I did it Tuesday.
60 D REUBEN: You didn't have to.
61 D GRACIE: Someone did.
62 D REUBEN: I would've.
63 D GRACIE (quiet): Would you?
64 A ¶ The kettle ticks on the stove.
65 A Theo clears his throat, but does not speak.
66 D AUNT BERNADETTE: Children.
67 D GRACIE: I'm not fighting.
68 D ^REUBEN: I'm not fighting.
69 A ¶ Hector pours coffee into six mugs.
70 A Passes them around.
71 A Everyone takes one.
72 A No one drinks.
73 D LILIANA: Mom. Can I go?
74 D GRACIE: Where?
75 D LILIANA: Out.
76 D GRACIE: It's dark.
77 D LILIANA: It's four-ten.
78 D GRACIE: The clock is wrong.
79 D LILIANA: Everything in here is wrong.
80 A ¶ She stands.
81 A Hector reaches for her sleeve.
82 A She shrugs him off.
83 D HECTOR: Lil.
84 D LILIANA: Don't.
85 A ¶ She goes.
86 A The back door bangs.
87 A Gracie wipes her hands on her apron very slowly, one finger at a time.
88 D THEO (gently): Mrs. Przybylski...
89 D GRACIE: It's Osei-Lindqvist. Still.
90 D THEO: Of course. Forgive me.
91 D GRACIE (to the room): Does anyone want to see him?
92 A ¶ The question lands like a dropped plate.
93 A Reuben stares into his coffee.
94 A Bernadette lowers the tin lid.
95 A Hector sets his mug down.
96 D AUNT BERNADETTE: I do.
97 D GRACIE: Auntie.
98 D AUNT BERNADETTE: I've seen him in every state a man can be in. I'll see this one, too.
99 A ¶ She stands.
100 A Straightens her cardigan.
101 D AUNT BERNADETTE [CONT'D]: Who is coming with me?
102 A ¶ Nobody moves.
103 A Then Reuben puts down his mug.
104 A Then Gracie.
105 A Then, last, Hector.
106 A Theo opens the kitchen door and stands aside.
107 A ¶ They file out into the hall.
108 A The coffee cools.
109 A The clock stays where it is, ten past four.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01489.json
### SCENE s01489 | INT. FIELD HOSPITAL TENT - FLOOD RELIEF CAMP - NIGHT
Detected names (may be incomplete or contain aliases): PATIENT, ADAEZE OKONKWO-REYES, NURSE PETRA LINDBERG-AZIZ, MEDIC SAMUEL TORRES-WU, HENRI DUBOIS-KAMARA, DAUGHTER, JOY BANERJEE-HALL
1 A ¶ Canvas walls breathing in the wind.
2 A Cots in rows.
3 A Hanging bulbs on extension cords.
4 A The smell of bleach and wet earth.
5 A ¶ Five people around a single cot.
6 A On it, the PATIENT, a man in his 60s, gray-faced, breathing shallowly.
7 A Nobody says his name.
8 A ¶ DR. ADAEZE OKONKWO-REYES (40s, scrubs, sleeves rolled, sweat at her temples) checks a monitor that blinks erratically.
9 A NURSE PETRA LINDBERG-AZIZ (30s, steady, a pen behind each ear) squeezes a bag valve.
10 A MEDIC SAMUEL TORRES-WU (20s, wet boots) holds a flashlight.
11 A DR. HENRI DUBOIS-KAMARA (50s, retired surgeon, borrowed lab coat) stands at the foot with his arms folded.
12 A The man's DAUGHTER, JOY BANERJEE-HALL (30s, a muddy raincoat), grips the cot rail.
13 D ADAEZE (to the room): Okay. Everyone. Pressure's dropping. Petra, push the fluids. Samuel, hold the light steady. Henri...
14 D HENRI: I'm observing.
15 D ADAEZE: I know. Observe harder.
16 A ¶ Petra changes the bag.
17 A Samuel moves the light.
18 A The man's chest rises and falls.
19 D JOY (to Adaeze): Is he going to be all right?
20 D ADAEZE: We're doing everything we can.
21 D JOY: That's not what I asked.
22 D ADAEZE: I know.
23 A ¶ She turns back to the monitor.
24 A A beep.
25 A Another.
26 A A flat trailing note.
27 D PETRA: Doctor.
28 D ADAEZE: I see it.
29 D SAMUEL (muttering): Come on, come on, come on.
30 A ¶ Samuel angles the light, then glances at Joy and looks away.
31 D HENRI: Adaeze. The line is infiltrated.
32 D ADAEZE: What?
33 D HENRI: The IV. It's swelling at the wrist.
34 A ¶ She looks.
35 A He's right.
36 A Her jaw tightens.
37 A She pulls the line herself, fast, and the man gasps.
38 D JOY: What are you doing?
39 D ADAEZE: Resetting it.
40 D JOY: You're hurting him.
41 D ADAEZE (sharp): Then let me work.
42 A ¶ Joy flinches.
43 A Adaeze catches herself.
44 A She closes her eyes for a half second, then opens them.
45 D ADAEZE [CONT'D] (softer): Petra. Another line. The other arm.
46 D PETRA: Already done.
47 A ¶ Petra holds out the needle, a bead of blood on her thumb.
48 A Adaeze takes it.
49 A Her hands, steady a moment ago, tremble now.
50 A She sets the needle.
51 A Draws breath.
52 A Pushes.
53 A ¶ The monitor catches.
54 A Beeps.
55 A A ragged line climbs.
56 D SAMUEL: We've got him.
57 D HENRI: We have a rhythm. Not a pulse.
58 D ADAEZE (to Henri): Come here.
59 A ¶ He comes.
60 A She hands him the bag valve without a word.
61 A He takes it, stunned.
62 A Then he squeezes, once, twice, and glances across the cot at her.
63 D HENRI (quiet): I forgot how this feels.
64 D ADAEZE: Don't remember now. Squeeze.
65 A ¶ Joy's knuckles are white on the rail.
66 A Samuel puts a hand on her shoulder.
67 A Joy does not shake it off.
68 A ¶ The man's eyelids flutter.
69 A His mouth moves.
70 A Joy leans in, hair dripping onto his cheek.
71 D JOY: Dad? Dad, it's me.
72 A ¶ Nothing.
73 A Then a breath, deeper than the others, a long ragged pull.
74 A Everyone stops moving.
75 A ¶ Outside, the wind drops.
76 A For the first time in hours, the tent hangs still.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01490.json
### SCENE s01490 | INT. ROOFTOP GREENHOUSE, APARTMENT BLOCK - DAWN
Detected names (may be incomplete or contain aliases): PHILOMENA ADEBAYO-STRAND, NIKOLAI, ^PHILOMENA
1 A ¶ Tomato cages, herb pots, a rusted bistro table.
2 A The city wakes in haze below.
3 A ¶ PHILOMENA ADEBAYO-STRAND (60s, cardigan, trowel) waters basil.
4 A Across from her, her son NIKOLAI (30s, borrowed suit, unslept) cradles a mug.
5 A ¶ She waters.
6 A He sips.
7 A Neither looks.
8 D PHILOMENA: You came early.
9 D NIKOLAI: Train was on time.
10 D PHILOMENA: First time in years.
11 A ¶ He nods.
12 A She moves to the tomatoes.
13 A He follows with his eyes.
14 D NIKOLAI: It looks good up here.
15 D PHILOMENA: Your father built the cages.
16 D NIKOLAI: I remember.
17 D PHILOMENA: He'd have hated the basil.
18 D NIKOLAI: He hated everything green.
19 A ¶ They share a quiet smile.
20 A It lingers.
21 D PHILOMENA: Nik.
22 D NIKOLAI: Mm.
23 A ¶ He sets down the mug.
24 A She sets down the can.
25 A They look at each other for the first time.
26 D NIKOLAI: I'm sorry I wasn't here.
27 D ^PHILOMENA: I sold the house.
28 A ¶ A pause.
29 A Neither moves.
30 A The basil drips.
31 D NIKOLAI: You what?
32 D PHILOMENA: It's done. Papers signed Friday.
33 A ¶ Nikolai picks up the mug.
34 A Sets it down.
35 A Picks it up again.
36 A She watches his hands.
37 A Behind them, the sun clears the rooftops.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01491.json
### SCENE s01491 | EXT. FROZEN QUARRY LAKE - DUSK
Detected names (may be incomplete or contain aliases): WYN, ASANTE-KOWALSKI, ROSALIE PEARSON-NGUYEN, BARNABAS OYELARAN, TEODORA VRANCEA-BELL, PETRUS HOLLAND-ABARA
1 A ¶ A flat gray disc ringed by black cliffs.
2 A Dirty snow.
3 A A thin skin of ice that talks in the cold.
4 A ¶ Five hikers stand at the shore, packs heavy.
5 A ¶ GWENDOLYN "WYN" ASANTE-KOWALSKI (40s, ruddy, a rope over her shoulder) tests the ice with a pole.
6 A ROSALIE PEARSON-NGUYEN (30s, a swollen ankle bound in a scarf) leans on a ski pole.
7 A Behind them: BARNABAS OYELARAN (50s, bald, a thermos), TEODORA VRANCEA-BELL (20s, braids, camera strap), and old PETRUS HOLLAND-ABARA (70s, a hat with ear flaps).
8 D WYN: It'll hold.
9 D ROSALIE: It'll talk, but it'll hold.
10 D BARNABAS: How far across?
11 D WYN: Four hundred meters. Camp's on the far bank.
12 D TEODORA: And around?
13 D WYN: Eight kilometers. Through the cliffs.
14 D PETRUS: In the dark.
15 D WYN: In the dark.
16 A ¶ Rosalie shifts her weight.
17 A Winces.
18 A Wyn sees it and says nothing.
19 D ROSALIE: She'll want to go across.
20 D WYN: She'll want to? Or you?
21 D ROSALIE: Her. She's never liked the cliffs.
22 A ¶ Teodora glances between them.
23 A The ice groans.
24 D TEODORA: Whose "she"?
25 A ¶ Rosalie and Wyn both look at her.
26 A Nobody answers.
27 A Barnabas clears his throat and steps forward.
28 D BARNABAS: We go across. Single file. Fifteen meters apart. Wyn first.
29 D WYN: Rosalie second.
30 D ROSALIE: I can walk.
31 D WYN: You can limp.
32 A ¶ She lowers the rope off her shoulder, ties it around Rosalie's waist, and then around her own.
33 A They step out.
34 A The ice cracks softly under them, a long fine sound like a hair being drawn from silk.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01492.json
### SCENE s01492 | INT. ABANDONED PLANETARIUM - NIGHT
Detected names (may be incomplete or contain aliases): MAGGIE, DAMIAN KELLERMAN-ASANTE, YOLANDE BEAUMONT-DAS, ELI, ROSENBLATT-ADEBAYO
1 A ¶ The dome is cracked, the stars on it long gone to water stains.
2 A A circle of folding chairs sits beneath the central projector, a bulbous metal insect.
3 A Candle stubs flicker on the floor.
4 A ¶ Four people sit in the circle, coats on, breath fogging.
5 A ¶ MAGDALENA "MAGGIE" OYELOWO-SZABO is in her fifties, wrapped in a quilt, a retired astronomer's patience in her eyes.
6 A Across from her, her adult son DAMIAN KELLERMAN-ASANTE slouches, jaw tight.
7 A Beside him sits his wife YOLANDE BEAUMONT-DAS, tall, steady, hand on his knee.
8 A The fourth chair holds ELIJAH "ELI" ROSENBLATT-ADEBAYO, a teenager in a hooded jacket, cradling a battered telescope case.
9 D MAGGIE: Thank you for coming, all of you.
10 D DAMIAN: Mom, why are we here?
11 D MAGGIE: Because the city is closing this building on Friday.
12 D DAMIAN: And?
13 D MAGGIE: And I wanted to show you the sky one more time.
14 D YOLANDE: Maggie, the projector's dead.
15 D MAGGIE: Is it?
16 A ¶ She stands.
17 A Crosses to the great machine.
18 A Lays her palm on its flank, the way you'd greet an old horse.
19 A She reaches into a panel, draws out a bulb the size of a fist, and screws it home.
20 A ¶ Eli slides forward in his seat.
21 D ELI: You fixed it?
22 D MAGGIE: I did, Eli. Last Tuesday.
23 D DAMIAN: You came here every night this week.
24 D MAGGIE: Every night.
25 D DAMIAN: Without telling anyone.
26 D MAGGIE: Without telling anyone, Damian.
27 A ¶ Silence.
28 A Yolande squeezes her husband's knee.
29 A He looks at the floor.
30 D YOLANDE: Damian. Let her.
31 A ¶ Maggie throws a switch.
32 A The machine whirs, coughs dust, and then blooms.
33 A On the dome, thousands of pinpoints appear, slow, shuddering, then steady.
34 A The Milky Way rolls out across the ceiling like a shaken scarf.
35 A ¶ Eli gasps.
36 A Yolande puts her hand to her mouth.
37 A Damian lifts his head, and the light spills across his face.
38 D DAMIAN (hoarse): That's the one from the lake house.
39 D MAGGIE: That's the one.
40 D DAMIAN: You said you couldn't make it that clear again.
41 D MAGGIE: I said a lot of things after your father died.
42 A ¶ Damian rises.
43 A Walks across the circle.
44 A Stands in front of her.
45 A He doesn't speak.
46 A She waits.
47 A Then, awkwardly, like a man unused to it, he wraps his arms around her.
48 D MAGGIE [CONT'D] (into his shoulder): There now.
49 D ELI: Can I look through the scope?
50 D MAGGIE: Oh, Eli. There's no sky left to look through. But sit. Sit. There's plenty of dome.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01493.json
### SCENE s01493 | INT. COMMUNITY-GARDEN TOOL SHED - NIGHT
Detected names (may be incomplete or contain aliases): NELLIE, OKOYE-PRESCOTT, MARCUS TRAN-ABERNATHY, BRIDGET KILLIAN-ADEYEMI, OLD FELIX BRANDT-NJOKU, AISHA MORENO-VANCE
1 A ¶ A cramped plank shed that smells of manure and linseed oil.
2 A A single bulb on a string.
3 A Rakes in racks.
4 A A calendar from 1998.
5 A ¶ Five neighbors sit on buckets and overturned crates, an emergency meeting in a space not built for five.
6 A ¶ CORNELIA "NELLIE" OKOYE-PRESCOTT (60s, gardening gloves, a loud cardigan) presides on a stool.
7 A Next to her: MARCUS TRAN-ABERNATHY (30s, a clipboard), BRIDGET KILLIAN-ADEYEMI (40s, bags under her eyes), OLD FELIX BRANDT-NJOKU (70s, a pipe unlit in his teeth), and young AISHA MORENO-VANCE (20s, still in her work apron).
8 D NELLIE: The developers close the lot Friday.
9 D MARCUS: They can't. We have the lease.
10 D NELLIE: We had the lease.
11 D MARCUS: Until when?
12 D NELLIE: Until the thirtieth. Yesterday.
13 D BRIDGET: Nobody told us.
14 D NELLIE: The letter was in the mailbox of the man who died in March.
15 D FELIX (around his pipe): That's Hendricks.
16 D BRIDGET: Hendricks is dead, Felix.
17 D FELIX: That's why the letter's late.
18 A ¶ Silence.
19 A The bulb swings a quarter inch.
20 D MARCUS: We can petition.
21 D NELLIE: We have forty-two signatures.
22 D MARCUS: Forty-two is a lot.
23 D NELLIE: It's not enough.
24 D AISHA: How many do we need?
25 D NELLIE: Two hundred.
26 D AISHA: By Friday?
27 D NELLIE: By Friday.
28 D BRIDGET: Then we pick up the pace. Door to door tomorrow.
29 D MARCUS: I have a meeting.
30 D BRIDGET: Cancel it.
31 D MARCUS: I can't.
32 D BRIDGET: Then you're out.
33 D MARCUS: Out of what?
34 D BRIDGET: The garden.
35 A ¶ A pause so cold the bulb seems to dim.
36 A Marcus half rises.
37 A Felix sets his pipe on his knee.
38 A Aisha puts a hand on Marcus's sleeve.
39 A Bridget crosses her arms.
40 A Nellie lifts a rake from the rack and sets it on her lap.
41 D NELLIE: Sit, Marcus.
42 A ¶ He sits.
43 D NELLIE [CONT'D]: Bridget, apologize.
44 D BRIDGET: I will not.
45 D NELLIE: Then explain.
46 D BRIDGET: Hendricks's tomatoes are still in the south bed. He planted them. I water them.
47 D FELIX (gentle): Every day.
48 D BRIDGET: Every day. Because somebody has to. And if they bulldoze it Friday...
49 A ¶ She doesn't finish.
50 A Marcus lowers his clipboard.
51 A Aisha stares at her hands.
52 A Felix lights his pipe, finally, with a slow match, and the shed fills with sweet smoke.
53 D MARCUS: I'll cancel the meeting.
54 D BRIDGET: Thank you.
55 D MARCUS: Don't thank me. I'm taking the south side.
56 D FELIX: Of course you are.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01494.json
### SCENE s01494 | INT. GRAIN SILO, HEAVY BOMBER BASE - NIGHT
Detected names (may be incomplete or contain aliases): LIEUTENANT CASIMIR WOJCIK-ASANTE, SERGEANT TIBERIUS HALLORAN-OKORO, YOUNG PRIVATE JONAH ABERNATHY-LIU
1 A ¶ A hollow concrete cylinder smelling of dust and old wheat.
2 A A rope ladder dangles from a hatch.
3 A Moonlight falls through the hatch in a pale coin on the floor.
4 A ¶ Three men huddle around a hurricane lamp.
5 A LIEUTENANT CASIMIR WOJCIK-ASANTE (30s, flight jacket, no cap) sits on an overturned drum.
6 A SERGEANT TIBERIUS HALLORAN-OKORO (40s, a bandaged hand) cleans a pistol.
7 A YOUNG PRIVATE JONAH ABERNATHY-LIU (19, a radio on his lap) fiddles with its dials.
8 D CASIMIR: How long since the last patrol?
9 D TIBERIUS: Two hours.
10 D CASIMIR: Nothing on the radio?
11 D JONAH: Static, sir. Just static.
12 D CASIMIR: Try the emergency band.
13 D JONAH: I've tried it.
14 D CASIMIR: Try it again.
15 A ¶ Jonah turns the dial.
16 A Static rises, falls.
17 A A fragment of music, dance-band, swells and fades.
18 D TIBERIUS: That's Berlin.
19 D CASIMIR: That's Brussels.
20 D TIBERIUS: It's Berlin.
21 D CASIMIR: Sergeant, I have flown over both.
22 D TIBERIUS: Sir, I have been bombed by both.
23 D CASIMIR (a dry smile): Then we are experts.
24 D JONAH: Sir, may I ask something?
25 D CASIMIR: You may.
26 D JONAH: Are we going to be all right?
27 A ¶ Tiberius stops cleaning the pistol.
28 A Casimir leans back until his drum creaks.
29 D CASIMIR: Private, the war ends. Whether we end with it is a matter of arithmetic.
30 D JONAH: Arithmetic?
31 D TIBERIUS: He means luck.
32 D CASIMIR: I mean luck with decimals.
33 A ¶ Jonah laughs, small and surprised.
34 A Tiberius cracks a smile.
35 A For a moment all three men are grinning in the lamplight like boys in a treehouse.
36 A ¶ Then the grin falters.
37 A Overhead, very faint, a droning begins.
38 A It swells.
39 A The lamp flame trembles.
40 A Tiberius lowers the pistol, Casimir springs to his feet, and Jonah clutches the radio to his chest, all three staring up at the coin of moonlight as the hatch rattles on its hinges.
41 D TIBERIUS: Ours.
42 D CASIMIR: You're sure?
43 D TIBERIUS: Listen to the engines.
44 A ¶ They listen.
45 A The drone passes directly overhead.
46 A It's steady.
47 A Unhurried.
48 A It fades toward the east.
49 D JONAH (whisper): Ours.
50 D CASIMIR: Ours.
51 A ¶ They sit down again, slowly.
52 A No one speaks.
53 A Tiberius resumes cleaning the pistol.
54 A Jonah turns the dial back to the dance band, very low.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01495.json
### SCENE s01495 | INT. CLOSED FISH MARKET - PRE-DAWN
Detected names (may be incomplete or contain aliases): DETECTIVE IGNATIUS OYELARAN-BRENNAN, DETECTIVE YASMINE ACHEBE-KOWALCZYK, UNIFORMED OFFICER, TREVOR MBEKI-LLOYD, BARTHOLOMEW SANTIAGO-NGUYEN, PERPETUA OKORO-VANCE, DIEGO FERREIRA-AKINS, OFFICER
1 A ¶ Concrete slabs, hoses, drains.
2 A Ice melting in bins.
3 A A tarp-draped shape in the center of the floor.
4 A ¶ Six people stand around it in a loose horseshoe.
5 A ¶ DETECTIVE IGNATIUS OYELARAN-BRENNAN (50s, rumpled suit) holds a notebook.
6 A His partner DETECTIVE YASMINE ACHEBE-KOWALCZYK (30s, blazer, tired eyes) kneels beside the tarp.
7 A A UNIFORMED OFFICER, TREVOR MBEKI-LLOYD (20s), stands guard at the door.
8 A The market owner, MR. BARTHOLOMEW SANTIAGO-NGUYEN (60s, rubber apron), twists a towel.
9 A His night cleaner, PERPETUA OKORO-VANCE (40s, a mop in her hands), stares at the wall.
10 A In the corner, a fishmonger's boy, DIEGO FERREIRA-AKINS (16, still in waders), chews his thumbnail.
11 D IGNATIUS: Who found him?
12 D BARTHOLOMEW: She did.
13 D PERPETUA: I opened at four. He was there.
14 D YASMINE: Did you touch him?
15 D PERPETUA: No.
16 D IGNATIUS: You're sure.
17 D PERPETUA: I swear.
18 D DIEGO: She screamed so loud I came running.
19 D BARTHOLOMEW: You weren't supposed to be here yet.
20 D DIEGO: I'm always here early.
21 D BARTHOLOMEW: No one asked you.
22 D IGNATIUS: Let him speak, Mr. Santiago-Nguyen.
23 D BARTHOLOMEW: Santiago.
24 D IGNATIUS: Santiago. Did you know this man?
25 D BARTHOLOMEW: Never seen him.
26 D YASMINE: He's wearing your market's apron.
27 D BARTHOLOMEW: Everyone's wearing the apron. I give out aprons.
28 D OFFICER (from the door): Detective, the van's here.
29 D IGNATIUS: Hold it, Officer.
30 D OFFICER: Yes, sir.
31 D YASMINE: Diego. How long have you worked here?
32 D DIEGO: Two summers.
33 D YASMINE: You know the regulars.
34 D DIEGO: Some.
35 D YASMINE: Look at his face.
36 A ¶ Diego hesitates.
37 A Yasmine lifts the corner of the tarp.
38 A Perpetua turns away.
39 A Bartholomew drops his towel.
40 A Diego steps closer, peers down, and his shoulders sag.
41 D DIEGO: That's Mr. Koval. He buys the eels. Every Tuesday.
42 D IGNATIUS: Mr. Koval.
43 D DIEGO: He always paid in cash.
44 D BARTHOLOMEW: Diego, shut up.
45 D IGNATIUS: No. Go on, son.
46 D DIEGO: He's been coming in Tuesdays since I started. He and Mr. Santiago talk. In the back.
47 D BARTHOLOMEW: About eels!
48 D PERPETUA: About money.
49 D BARTHOLOMEW: Perpetua!
50 D PERPETUA: I clean the back, Bartholomew. I hear everything.
51 D IGNATIUS (to Bartholomew): Mr. Santiago, I think we should continue this at the station.
52 D BARTHOLOMEW: I want a lawyer.
53 D YASMINE: You'll have one.
54 D BARTHOLOMEW: I want one now.
55 D IGNATIUS: Officer Mbeki-Lloyd?
56 D TREVOR: Sir.
57 D IGNATIUS: Escort Mr. Santiago to the car.
58 A ¶ Trevor crosses the floor.
59 A Bartholomew, for a moment, looks ready to bolt.
60 A Then his shoulders slump and he lets himself be led.
61 A ¶ The door closes.
62 A Dawn bleeds in at the edges of the loading bay.
63 A Perpetua leans on her mop.
64 A Diego slumps onto an ice bin.
65 D YASMINE: You two did the right thing.
66 D PERPETUA: I just wanted to mop.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01496.json
### SCENE s01496 | INT. STRANDED GONDOLA CAR, ALPINE CABLEWAY - NIGHT
Detected names (may be incomplete or contain aliases): WOMAN, ELDERLY MAN, TEENAGE GIRL, OPERATOR, PATROL, TEENAGER, INES
1 A ¶ A glass box swaying slightly in the dark, forty meters above a gorge.
2 A Frost on the windows.
3 A A single battery lamp.
4 A The far lights of a village glitter like spilled sugar.
5 A ¶ Five people are packed inside, and a voice on a radio makes six.
6 A Skis, packs, a child's sled strapped to the wall.
7 A Their breath fogs the glass.
8 A ¶ A WOMAN in her fifties sits upright, coat buttoned to the chin, a folded map in her lap.
9 A A MAN in his thirties crouches by the door with a phone held high.
10 A A TEENAGE GIRL hugs her knees on the bench.
11 A An ELDERLY MAN with a cane and a flat cap sits staring at the ceiling.
12 A A YOUNG WOMAN in ski patrol red leans against the control panel.
13 A ¶ The man's phone shows no signal.
14 A He lowers it.
15 A ¶ The radio on the control panel crackles.
16 D OPERATOR [V.O.] (radio, faint): Gondola Nine, Base. Do you read?
17 A ¶ The patrol woman grabs the handset.
18 D PATROL: Base, Gondola Nine. We read. Six aboard, all stable.
19 D OPERATOR [V.O.] (radio): Copy six. Power's out on the whole line. Rescue crew's three hours out.
20 A ¶ The elderly man grunts.
21 A The woman refolds her map, creasing it in half, then in quarters.
22 D PATROL (to the car): Three hours. Everyone stay put. Please.
23 A ¶ She sets the handset down.
24 A The teenager shifts.
25 D TEENAGER: I'm cold. Ines, what do we do?
26 D INES: We sort it.
27 A ¶ The man in the door unzips his jacket.
28 A He crosses to the bench and spreads it over the teenager.
29 A He sits back on his heels.
30 A The old man watches him.
31 D ELDERLY MAN: You know her?
32 D MAN: No.
33 D ELDERLY MAN: Hm.
34 A ¶ The man looks at the teenager.
35 A She shakes her head, once.
36 A He turns away.
37 A ¶ The gondola lurches.
38 A A creak travels the cable from far above.
39 A Everyone freezes.
40 A The lamp flickers.
41 A The glass trembles in its frame.
42 D INES: It's the wind. Just the wind.
43 D WOMAN: It's not the wind.
44 D INES: Ma'am...
45 D WOMAN: It's the cable. Listen.
46 A ¶ They listen.
47 A A thin, rhythmic singing runs along the steel, rising in pitch.
48 D INES (into radio, sharp): Base, Base. We have cable noise. Repeat, cable noise.
49 D OPERATOR [V.O.] (radio): Say again, Nine?
50 D INES: Cable noise! Singing, pitching up!
51 D OPERATOR [V.O.] (radio): Hold on. Hold on, Nine.
52 A ¶ The old man lifts his cane and lays it across his knees like a rifle.
53 A The teenager pulls the jacket closer.
54 A The man by the door stands, swaying, and puts a hand on the glass.
55 A Far below, the gorge exhales cold air.
56 A ¶ The singing stops.
57 A A long, absolute silence.
58 A Then the car drops six inches, stops, and swings.
59 A ¶ Nobody screams.
60 A The young woman in red just closes her eyes.
61 D WOMAN (very quiet): All right. All right.
62 A ¶ She takes the teenager's hand.
63 A The teenager takes the old man's.
64 A He takes the man's.
65 A A chain.
66 A A shaky one.
67 D INES (whispering to herself): Come on, rescue. Come on.
68 A ¶ The radio hisses.
69 A No voice.
70 A The lamp holds, steady and small, as the car sways out over nothing.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01497.json
### SCENE s01497 | EXT. SINKING FISHING TRAWLER, BERING SEA - NIGHT
Detected names (may be incomplete or contain aliases): CAPTAIN WINIFRED OYELOWO-STRAND, DECKHAND AMADEO TRUJILLO-BELL
1 A ¶ Black swells.
2 A A bow rising and falling, deck awash.
3 A Two survivors cling to the wheelhouse roof.
4 A ¶ CAPTAIN WINIFRED OYELOWO-STRAND (50s, orange survival suit, a split lip) and DECKHAND AMADEO TRUJILLO-BELL (20s, no gloves, teeth chattering).
5 D AMADEO: Captain, the lifeboat's gone!
6 D WINIFRED: I know!
7 D AMADEO: We'll freeze!
8 D WINIFRED: We won't freeze. We'll drown first. It's quicker.
9 D AMADEO: That's not funny!
10 D WINIFRED: I wasn't joking.
11 D AMADEO (laughs, then sobs): I'm twenty-two.
12 D WINIFRED: I'm fifty-four. I've done this three times.
13 D AMADEO: Done what?
14 D WINIFRED: Sunk.
15 D AMADEO: How do you...
16 D WINIFRED: You hold on. That's the whole trick. Hold on till the boat stops being your problem.
17 D AMADEO: What if it never does?
18 D WINIFRED: Then you hold on to me.
19 A ¶ A swell slams the hull.
20 A Spray.
21 A They scream.
22 A The boat tilts, groans, and settles.
23 D AMADEO: Captain!
24 D WINIFRED: Still here!
25 D AMADEO: Still here!
26 D WINIFRED: Then the rest is arithmetic.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01498.json
### SCENE s01498 | INT. CONSERVATORY WEDDING RECEPTION - EVENING
Detected names (may be incomplete or contain aliases): GWENDA FITZALAN-OKORO, PIERS LANGLEY-ASANTE, TABITHA NWOSU-REYES, DJ, LUCIO MARCHETTI-DAS, STRANGER, DANIEL
1 A ¶ A Victorian glasshouse strung with paper lanterns.
2 A Ferns and fig trees crowd the corners.
3 A Rain drums on the panes.
4 A Tables laid with mismatched china.
5 A ¶ The guests murmur around a small dance floor, six of them clustered near the cake: the bride's mother GWENDA FITZALAN-OKORO (60s, silver gown, brimming eyes), the groom's brother PIERS LANGLEY-ASANTE (30s, loosened tie), an old friend TABITHA NWOSU-REYES (40s, wine glass in each hand), the DJ (20s, headphones, bored), a caterer LUCIO MARCHETTI-DAS (50s, white jacket), and a STRANGER in a rain-soaked coat at the glass door.
6 A ¶ The stranger has no card, no corsage, no seat.
7 A He looks at the dance floor as if at a stage he once knew.
8 D GWENDA: Who is that?
9 D PIERS: No idea.
10 D TABITHA: He's very wet.
11 A ¶ The stranger steps in.
12 A Dripping, he crosses the floor and stops before Gwenda.
13 D STRANGER: Mrs. Fitzalan-Okoro. You won't remember me.
14 D GWENDA: I don't believe I do.
15 D STRANGER: Twenty-six years ago, I proposed to your daughter's mother. In this room.
16 A ¶ Silence.
17 A The DJ takes off his headphones.
18 A Lucio sets down the tray.
19 D GWENDA (whisper): Daniel.
20 D DANIEL: Hello, Gwenda.
21 A ¶ She puts a hand to her mouth.
22 A Behind her, the music trails away.
23 A Rain drums on the glass.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01499.json
### SCENE s01499 | INT. REVOLVING RESTAURANT ATOP A TELEVISION TOWER - NIGHT
Detected names (may be incomplete or contain aliases): DIMITRI OKAFOR-LIND, SOLANGE ASHWORTH-NDIAYE, HALVARD PEREIRA-GOH, SABINE KOWALSKI-ABARA, WAITER, THEODORE BRIGHT-OSEI
1 A ¶ White tablecloths.
2 A A slow circular carpet.
3 A The city lights sweep past the glass like a clock hand.
4 A ¶ At a corner table sit two couples and a waiter.
5 A DIMITRI OKAFOR-LIND (50s, sharp tie) stirs his coffee without drinking it.
6 A His wife SOLANGE ASHWORTH-NDIAYE (40s, pearls, sharp eyes) watches the room.
7 A Across from them, HALVARD PEREIRA-GOH (40s, tuxedo, a bandaged wrist) smiles too widely, while his date SABINE KOWALSKI-ABARA (30s, red dress, tense jaw) spins the stem of her glass.
8 A The WAITER, THEODORE BRIGHT-OSEI (20s, ironed apron), refills the water.
9 A ¶ The restaurant turns one degree.
10 A Dimitri glances at Halvard.
11 A Halvard glances at Sabine.
12 A Sabine glances at the waiter.
13 A The waiter, hands steady, sets the pitcher down, slides a folded napkin to Solange and steps back with a bow.
14 A Solange unfolds it beneath the table and reads.
15 A Her face does not move.
16 D DIMITRI (low): Well?
17 D SOLANGE: Sit still.
18 A ¶ The restaurant turns another degree.
19 A Halvard lifts his glass to his lips, and Sabine, without looking, takes his wrist.
20 A He freezes.
21 A Dimitri's hand slides toward his jacket.
22 A Theodore, still beside the table, tightens his grip on the pitcher handle.
23 A Solange folds the napkin back along its creases, lays it by her plate, and smiles at Sabine for the first time.
24 D SOLANGE [CONT'D] (pleasant): She tells me the elevator has stopped.
25 A ¶ The lights go out.
26 A In the dark, the carpet keeps turning, and she says nothing at all.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01500.json
### SCENE s01500 | INT. COUNTY COURTHOUSE - SUPPLY CLOSET TURNED INTERVIEW ROOM - DAY
Detected names (may be incomplete or contain aliases): PUBLIC DEFENDER NOREEN ASANTE-WHITFIELD, ELLIS PORTILLO-ADEBAYO, DESMOND KORKMAZ-LIU, ^NOREEN
1 A ¶ A narrow room, mop buckets pushed to one side.
2 A A card table.
3 A Three folding chairs.
4 A A single window painted shut.
5 A ¶ PUBLIC DEFENDER NOREEN ASANTE-WHITFIELD (40s) sits with a file open.
6 A Across from her, the prosecutor ELLIS PORTILLO-ADEBAYO (40s) pushes a paper across the table.
7 A Between them, in the third chair, their juror-turned-witness DESMOND KORKMAZ-LIU (30s) grips the seat edge.
8 A ¶ Noreen slides the paper back.
9 D NOREEN: No.
10 D ELLIS: You haven't read it.
11 D NOREEN: I've read it.
12 D ELLIS: It's a good offer.
13 D NOREEN: It's a bad one.
14 A ¶ Ellis taps the paper.
15 A She pushes back.
16 A He lets her.
17 D ELLIS: Mr. Korkmaz-Liu, you understand why we're here?
18 D DESMOND: I was juror number six.
19 D NOREEN: You were.
20 D ELLIS: You spoke to the defendant's sister during recess.
21 D DESMOND: She spoke to me.
22 D NOREEN (to Desmond): What did she say?
23 D DESMOND: She said her brother didn't do it.
24 D ELLIS: That's inadmissible.
25 D ^NOREEN: That's inadmissible.
26 A ¶ They glare at each other.
27 A Desmond looks from one to the other.
28 D ELLIS: I didn't mean...
29 D NOREEN: Neither did I.
30 A ¶ They both lean back.
31 A The folding chairs creak.
32 A Noreen closes the file.
33 A Ellis straightens the offer.
34 A Desmond lets go of his seat.
35 A The three of them sit in silence, waiting for someone to move first.
36 D ELLIS: Mr. Korkmaz-Liu, thank you for your honesty. You may go.
37 D DESMOND: That's it?
38 D NOREEN: That's it.
39 A ¶ Desmond stands, bumps a mop bucket, and flees.
40 A Ellis and Noreen watch the door swing shut.
41 D ELLIS: Offer stands till five.
42 D NOREEN: I'll see you in court.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01501.json
### SCENE s01501 | INT. REGIONAL AIRPORT BAGGAGE CLAIM - NIGHT
Detected names (may be incomplete or contain aliases): THADDEUS BRANSON-OYELARAN, GIGI, PETRAKIS-NWOSU, ^GIGI
1 A ¶ A dead carousel.
2 A One flickering fluorescent tube.
3 A A vending machine humming a note a half-step flat.
4 A Rain thrashes the empty glass hall.
5 A The last flight in was four hours ago.
6 A ¶ THADDEUS BRANSON-OYELARAN (50s, an immaculate overcoat, the posture of a man who has complained to managers before) stands with arms crossed beside a single battered suitcase.
7 A It is not his.
8 A He has decided it is his.
9 A ¶ GREGORIA "GIGI" PETRAKIS-NWOSU (50s, a blazer the color of canned peaches, a rolling cart of lost luggage) pushes through a swing door, whistling, and stops.
10 A She sees him.
11 A He sees her.
12 D GIGI: Sir, the airport is closed.
13 D THADDEUS: I'm aware.
14 D GIGI: Then why are you in it?
15 D THADDEUS: Because my bag is in it.
16 D GIGI: This is a lost-and-found area. Your bag is lost.
17 D THADDEUS: My bag is right here.
18 D GIGI: That's not your bag.
19 D THADDEUS: It's the bag I was given.
20 D GIGI: By whom?
21 D THADDEUS: By the carousel.
22 A ¶ Gigi studies the dead carousel.
23 A It doesn't move.
24 A She studies the suitcase.
25 A It's the color of mud, with a duct-taped corner.
26 D GIGI: Sir, that bag has been here since Tuesday.
27 D THADDEUS: Then it's been waiting for me.
28 D GIGI: It's tagged to a Mr. Hassan Abdi-Lindgren, Gate Nine.
29 D THADDEUS: I'm a Hassan in spirit.
30 D GIGI: Are you?
31 D THADDEUS (a long pause): No.
32 A ¶ She crosses her arms.
33 A He does not uncross his.
34 A They stand in a faint electrical hum, two statues who each know the other won't blink.
35 D GIGI (to herself): Lord, give me strength.
36 D THADDEUS (to himself): Lord, give me my bag.
37 A ¶ Gigi pulls a clipboard from the cart.
38 A Writes.
39 A Rips off a form.
40 A Holds it out.
41 D GIGI: Fill out Form 31-B.
42 D THADDEUS: Of what?
43 D GIGI: Of your grievance.
44 A ¶ He takes the form.
45 A Reads it.
46 A Looks up.
47 D THADDEUS: It's in triplicate.
48 D GIGI: We're a serious airport.
49 D THADDEUS: You have one gate.
50 D GIGI: It's a serious gate.
51 A ¶ She snaps her fingers.
52 A A pen sails out of her pocket and lands in his hand.
53 A He stares at it.
54 A It's a ballpoint chained to a small rubber frog.
55 D THADDEUS: What is this?
56 D GIGI: Our pen.
57 D THADDEUS: It's a frog.
58 D GIGI: It's a frog pen. It's how we know you're honest.
59 A ¶ Thaddeus clicks it.
60 A Starts writing.
61 A The frog dangles.
62 A Gigi leans over, reading upside down.
63 D GIGI [CONT'D]: That's not a grievance. That's a poem.
64 D THADDEUS: It's a long grievance.
65 D GIGI (reading): "Oh, suitcase, thou art mud."
66 D THADDEUS: Stop reading.
67 D GIGI: "Oh, suitcase, thou art lost, yet found, yet mine."
68 D THADDEUS: It's not for you!
69 D GIGI: It's on my form!
70 A ¶ Thaddeus tears the form in half.
71 A Gigi gasps.
72 A She snatches the halves and tries to fit them together.
73 D THADDEUS: GIGI You can't do that!
74 D ^GIGI: You can't do that!
75 A ¶ They stop.
76 A A beat.
77 A The vending machine hums.
78 D THADDEUS (to the empty hall): Is there anyone else?
79 D GIGI (to the empty hall): No.
80 D THADDEUS (to Gigi): Why are you here?
81 D GIGI: Because someone has to be.
82 D THADDEUS: For a suitcase?
83 D GIGI: For anyone's suitcase.
84 A ¶ A long silence.
85 A He looks at the bag.
86 A She looks at the torn form.
87 A The fluorescent tube buzzes, dims, and recovers.
88 D THADDEUS: It isn't mine.
89 D GIGI: I know.
90 D THADDEUS: Mine had a yellow ribbon.
91 D GIGI: I know. It's in the back. It came in Tuesday. I was just waiting to see who would show up for the wrong one first.
92 D THADDEUS: That's cruel.
93 D GIGI: That's customer service.
94 A ¶ She rolls her cart to the swing door.
95 A Holds it open with her hip.
96 A He stands for a moment.
97 A Then he picks up the muddy suitcase, hugs it once, sets it down gently, and follows her out.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01502.json
### SCENE s01502 | INT. DEBTORS' PRISON WARD, LONDON - 1788 - NIGHT
Detected names (may be incomplete or contain aliases): EZEKIEL PRIMROSE-ADEBAYO, JEMIMA HARGREAVES-OKORO, SERGEANT MAGNUS FALKENBERG, TOBIAH
1 A ¶ A vaulted brick cell lit by a single tallow candle.
2 A Straw on the stones.
3 A A barred window, a crust of ice on the sill.
4 A Water drips somewhere in the walls.
5 A ¶ Four prisoners share the space.
6 A EZEKIEL PRIMROSE-ADEBAYO (60s, once a draper, now a coat of patches) lies on a plank bed with a ledger on his chest.
7 A The young JEMIMA HARGREAVES-OKORO (20s, ragged dress, hair under a cap) sits by the candle, darning a stocking.
8 A The old soldier SERGEANT MAGNUS FALKENBERG (50s, one leg, a crutch) leans against the wall whittling a spoon.
9 A In the shadows, the child TOBIAH (8, barefoot, a ratty blanket over his shoulders) listens.
10 D EZEKIEL: They say the King is mad again.
11 D MAGNUS: They said so in 'eighty-eight.
12 D EZEKIEL: They said so in 'eighty-seven.
13 D MAGNUS: He'll be mad till he's dead.
14 D JEMIMA: Hush. The boy.
15 D TOBIAH: I'm not asleep.
16 D JEMIMA: You should be.
17 D TOBIAH: It's too cold.
18 A ¶ Magnus sets down the spoon, shuffles on his crutch to the boy, and wraps the blanket tighter, tucking it under the child's heels.
19 A Ezekiel closes the ledger and sits up, grunting.
20 A Jemima bites off her thread and holds the stocking out to Tobiah, who pulls it over a bare foot.
21 A For a moment all four are close in the candlelight, the soldier kneeling, the draper leaning, the girl smiling at the child, and the child staring back at all of them as if memorizing their faces.
22 D MAGNUS: Tomorrow it will be warmer.
23 D TOBIAH: Is that a promise?
24 D MAGNUS: It's a weather report.
25 D TOBIAH: From who?
26 D MAGNUS: From the Almighty. He writes to me.
27 A ¶ Tobiah giggles.
28 A Jemima shakes her head.
29 A Ezekiel lies back down.
30 D EZEKIEL: Then ask Him about the bailiff.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01503.json
### SCENE s01503 | INT. HOSPITAL ELEVATOR - NIGHT
Detected names (may be incomplete or contain aliases): NURSE PRISCILLA ADEBAYO-KANE, ORDERLY HIRAM OKORO-STRAND, DOCTOR, CAPTAIN LUCIANA MOREAU-BANERJEE
1 A ¶ A steel box rising slowly.
2 A A gurney crowds the car.
3 A Under the sheet lies a patient, pale, an oxygen mask over his mouth.
4 A ¶ NURSE PRISCILLA ADEBAYO-KANE (30s, scrubs, hair in a bun) squeezes a bag valve.
5 A ORDERLY HIRAM OKORO-STRAND (50s, thick arms) steadies the gurney rail.
6 A A DOCTOR (40s, tired, a stethoscope around his neck) watches the monitor.
7 D DOCTOR: Eight more floors.
8 D PRISCILLA: He's holding.
9 D HIRAM: Come on, come on.
10 A ¶ The elevator stops.
11 A The doors don't open.
12 A The lights flicker.
13 D DOCTOR: No.
14 D HIRAM: It's the generator.
15 D PRISCILLA: How long?
16 D HIRAM: Ten minutes, maybe.
17 D DOCTOR: He doesn't have ten minutes.
18 A ¶ The doors part a crack.
19 A A hand wedges into the gap.
20 A A fire axe handle.
21 A The doors grind apart.
22 A In the opening, a figure in a yellow turnout coat.
23 A CAPTAIN LUCIANA MOREAU-BANERJEE (40s, helmet, soot on her cheek).
24 D LUCIANA: Fire department. Everybody out the top hatch or I cut you out.
25 D DOCTOR: We have a patient.
26 D LUCIANA: Then he goes first.
27 A ¶ She turns to Hiram.
28 D LUCIANA [CONT'D]: You. On three. One. Two.
29 A ¶ Hiram braces the gurney.
30 A Priscilla keeps squeezing the bag.
31 A The captain's helmet lamp hits the patient's face and, quietly, she nods.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01504.json
### SCENE s01504 | EXT. DRY CREEK BED, SOUTH TEXAS - NOON
Detected names (may be incomplete or contain aliases): WOMAN, BOY
1 A ¶ White glare on pale stones.
2 A Mesquite and a dead cottonwood.
3 A The creek bed is a crooked ribbon of dust, ankle-deep with the memory of water.
4 A Heat shimmers on the rocks.
5 A ¶ Four people stand at the four corners of a small open grave.
6 A ¶ A tall MAN in a black frock coat, hat in hand, reads from a Bible.
7 A A shorter WOMAN beside him, in a widow's veil, holds a tiny wooden cross.
8 A An older RANCHER in dusty chaps leans on a shovel.
9 A A BOY of fifteen, barefoot, stares at the hole.
10 A ¶ He closes the book.
11 A She steps forward and plants the cross at the head of the grave.
12 A He puts on his hat.
13 A The rancher rests the shovel against his hip and starts to fill the hole, and the boy, after a long moment, takes the spade from him and finishes it himself, tamping each shovelful.
14 A ¶ She watches him.
15 A He watches the ground.
16 A The man in black shifts his weight and turns to the rancher.
17 A The rancher spits.
18 A ¶ They stand in the heat.
19 A Nobody says a word.
20 A ¶ Then the woman lifts her veil.
21 A She is younger than the veil suggested.
22 A She looks at the rancher, then at the man in black, then at the boy.
23 D WOMAN: Who's going to tell him?
24 A ¶ The three men look at one another.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01505_0.json
### SCENE s01505_0 | INT. GRAND HOTEL LOBBY, SNOWED IN - NIGHT
Detected names (may be incomplete or contain aliases): RAYMOND, EUDORA, ELMER
1 A ¶ A cavernous lobby of marble and brass.
2 A A grand staircase.
3 A A dead fireplace.
4 A Snow piled against the revolving door.
5 A Candles in saucers on every table.
6 A ¶ Six people occupy the room.
7 A They have not yet spoken to one another.
8 A ¶ DETECTIVE RAYMOND OKONKWO-HAYES.
9 A 50s.
10 A Rumpled.
11 A Smokes unlit cigarettes.
12 A ¶ LADY EUDORA PEMBERTON-ASANTE.
13 A 70s.
14 A Pearls.
15 A A cane with a silver head.
16 A ¶ PROFESSOR ISIDORE KOWALSKI-BRIGHT.
17 A 60s.
18 A Tweed.
19 A Spectacles on a chain.
20 A ¶ MISS CALLISTA DEVEREAUX-ADEYEMI.
21 A 30s.
22 A Evening gown.
23 A Scarlet lipstick.
24 A ¶ DOCTOR SAMUEL NAKAMURA-OKORO.
25 A 40s.
26 A Medical bag at his feet.
27 A ¶ THE DESK CLERK, ELMER FINNEGAN-LUU.
28 A 20s.
29 A Terrified.
30 A ¶ A scream cuts through the lobby, from upstairs.
31 A Everyone freezes.
32 A A door slams.
33 D RAYMOND: Nobody move.
34 D EUDORA: I wasn't going to.
35 D RAYMOND: Clerk. Who's on the third floor?
36 D ELMER: Mr. Delacroix, sir. Room 312.
37 D RAYMOND: Key.
38 A ¶ Elmer fumbles under the desk.
39 A Slides a brass key across the counter.
40 A Raymond snatches it and bounds up the stairs.
41 A The others stand frozen, until Samuel grabs his bag and follows.
42 A Callista watches him go, sets down her glass, and races after, leaving Eudora and Isidore alone with the clerk.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01505_1.json
### SCENE s01505_1 | INT. HOTEL - THIRD FLOOR HALLWAY - CONTINUOUS
Detected names (may be incomplete or contain aliases): 
1 A ¶ A long corridor, red carpet.
2 A Raymond reaches 312, tries the knob, then shoulder-rams the door.
3 A It gives.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01505_2.json
### SCENE s01505_2 | INT. HOTEL - ROOM 312 - CONTINUOUS
Detected names (may be incomplete or contain aliases): SAMUEL, RAYMOND, CALLISTA, EUDORA, ISIDORE, ELMER
1 A ¶ A man lies face-down on the floor, a candlestick beside him.
2 A Samuel kneels and checks his neck.
3 D SAMUEL: Dead.
4 D RAYMOND: How long?
5 D SAMUEL: Minutes.
6 D CALLISTA (at the door): Oh, God.
7 D RAYMOND: Miss Devereaux, stay back.
8 D CALLISTA: He was my husband.
9 A ¶ Samuel looks up sharply.
10 A Raymond turns.
11 A In the doorway, behind Callista, the others have gathered: Eudora leaning on her cane, Isidore polishing his spectacles, Elmer trembling.
12 D RAYMOND: Everyone in the room. Nobody leaves.
13 D EUDORA: It was always going to be me or the Professor.
14 D ISIDORE: Lady Pemberton!
15 D EUDORA: Oh, don't be coy, Isidore. We both had reasons.
16 D RAYMOND: What reasons?
17 D EUDORA: He owed us money.
18 D ISIDORE: A great deal of it.
19 D ELMER (small voice): He owed me, too.
20 A ¶ Raymond looks at each in turn.
21 A Samuel rises and wipes his hands.
22 A Callista is staring at the floor.
23 D CALLISTA: He owed all of us.
24 D RAYMOND: Then it's a long list.
25 A ¶ The lights go out.
26 A A candle flame gutters.
27 A In the dark, a single gunshot cracks.
28 A A body drops.
29 A A woman gasps.
30 A Everyone scatters.
31 A Raymond throws himself at the doorway, Samuel dives behind the bed, Eudora swings her cane in a wide arc, Isidore ducks under the desk, Elmer bolts for the window, and Callista grabs for the candlestick.
32 A ¶ A match flares.
33 A Raymond stands over the figure on the floor, the smoking pistol in Eudora's hand.
34 D RAYMOND [CONT'D]: Lady Pemberton. Put it down.
35 D EUDORA: I only shot the lamp, Detective.
36 A ¶ She sets the pistol on the dresser and sits on the bed, composed, hands folded.
37 D EUDORA [CONT'D]: I wanted you to see his face when the light came back.
38 A ¶ The match gutters out.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01520.json
### SCENE s01520 | INT. SALT WAREHOUSE - DAWN
Detected names (may be incomplete or contain aliases): SERGEANT ODALYS BRANTZ, VASKO, CORPORAL HIROSHI MAEDA
1 A ¶ Mountains of grey salt.
2 A Rafters.
3 A Dust in slanted light.
4 A ¶ SERGEANT ODALYS BRANTZ, 40s, cracked lips, rifle slung low, drags a wounded boy through the doorway.
5 A ¶ PVT.
6 A TEODOR "TEDDY" VASKO, 19, bleeding thigh, grips her collar.
7 A ¶ CORPORAL HIROSHI MAEDA, 30s, wire-thin, covers the door.
8 A Counts rounds.
9 A Counts again.
10 D BRANTZ: Down. Behind the big pile.
11 D VASKO: I can walk.
12 D BRANTZ: You can't.
13 D MAEDA (muttering): Eleven. Eleven. Eleven.
14 A ¶ Boots outside.
15 A Gravel.
16 A Stop.
17 A ¶ Brantz and Maeda freeze.
18 A Vasko stops breathing.
19 D BRANTZ (whisper, to Maeda): Window.
20 D MAEDA: Boarded.
21 D VASKO: Sarge, I hear--
22 D BRANTZ: Quiet.
23 D MAEDA: Sarge, they're at the--
24 D VASKO: They're at the back too.
25 D BRANTZ: Everyone shut up.
26 A ¶ A shadow crosses the slats.
27 A Gone.
28 D MAEDA (to himself): Breathe. Count. Breathe.
29 A ¶ Brantz slides a canteen to Vasko.
30 A He fumbles it.
31 A It clangs.
32 A ¶ All three flinch.
33 A ¶ A shout outside.
34 A Another.
35 A Running feet.
36 D BRANTZ (to all): Positions. Now.
37 A ¶ Vasko drags himself behind a salt drift.
38 A Maeda drops to one knee.
39 A Brantz climbs a crate.
40 D MAEDA: How many?
41 D BRANTZ: Enough.
42 D VASKO: Sarge, I can't feel my leg.
43 D BRANTZ: Then you can't feel it hurt. Good.
44 A ¶ The door shudders.
45 A A rifle butt splinters the wood.
46 A ¶ Maeda fires.
47 A Brantz fires.
48 A Salt sprays like snow.
49 D VASKO: I got one! I got--
50 D MAEDA: Down, Teddy!
51 D BRANTZ: Maeda, left!
52 A ¶ The door bursts.
53 A A grenade skitters across the floor.
54 A ¶ All three scatter.
55 A Brantz dives for Vasko.
56 A Maeda hurls himself at the grenade, kicks it back out the door.
57 A ¶ BOOM.
58 A Salt rains from the rafters.
59 A ¶ Silence.
60 A Ringing ears.
61 D MAEDA (coughing): Eleven. Ten.
62 A ¶ Brantz hauls Vasko up.
63 A Vasko grins, white with salt.
64 D VASKO: Still here.
65 D BRANTZ: Move.

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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01522.json
### SCENE s01522 | INT. CORPORATE WELLNESS NAP POD ROOM - DAY
Detected names (may be incomplete or contain aliases): PRIYA DESHMUKH-LOWE, WALLY, PRZYBYSZ, VP, SUNNIVA ABARA
1 A ¶ Six sleep pods.
2 A One occupied.
3 A Whale sounds on a loop.
4 A ¶ PRIYA DESHMUKH-LOWE, 30s, lanyard, laptop balanced on her knees inside the pod.
5 A Typing in the dark.
6 A ¶ The hatch hisses open.
7 A WALTER "WALLY" PRZYBYSZ, 50s, regional VP, leans in with a clipboard.
8 D WALLY: Priya. Nap quota's twenty minutes.
9 D PRIYA: This is a nap.
10 D WALLY: You're answering email.
11 D PRIYA: Napping with intent.
12 A ¶ Wally ticks a box.
13 A Writes.
14 A Frowns.
15 A ¶ Behind him, the door swings.
16 A DR. SUNNIVA ABARA, 40s, Chief Wellbeing Officer, crisp blazer, tablet like a shield.
17 D SUNNIVA: Walter. Is she charging overage?
18 D WALLY: She's... overachieving.
19 D SUNNIVA (to Priya): I need you rested for the layoff announcement.
20 A ¶ Priya's typing stops.
21 A Wally's pen stops.
22 A The whales go on.
23 D PRIYA: When?
24 D SUNNIVA: After your nap.
25 A ¶ Priya closes the laptop.
26 A Smiles.
27 A Lies back, hands folded like a corpse.
28 D WALLY (whisper to Sunniva): She knows.
29 D SUNNIVA: She knows nothing.
30 A ¶ Priya snores.
31 A Loudly.
32 A Fakely.
33 A ¶ Wally sweats.
34 A Sunniva checks her watch.
35 A The whales sing.
