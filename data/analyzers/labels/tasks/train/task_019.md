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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00644.json
### SCENE s00644 | INT. GARAGE CANNING KITCHEN - AFTERNOON
Detected names (may be incomplete or contain aliases): FITZ, MULLIGAN, SIOBHAN, ROXANNE, KAI, BEATA
1 A ¶ Steam, vinegar, dill.
2 A Two folding tables of jars.
3 A A burner humming under a tall pot.
4 A The garage door is open on a sunny cul-de-sac.
5 A ¶ FITZGERALD "FITZ" MULLIGAN, seventies, stirs the brine with a wooden paddle.
6 A His daughters, SIOBHAN, fifties, and ROXANNE, forties, work the packing line, and neither has looked at the other in an hour.
7 A Two grandchildren hover: KAI, twelve, with a stack of lids, and BEATA, nine, with a roll of labels.
8 D SIOBHAN: Dad, the salt's wrong.
9 D ROXANNE: It's fine.
10 D SIOBHAN: It's too much, Rox.
11 D FITZ: It's been this recipe since 1971.
12 D ROXANNE: Siobhan counts every grain like it's evidence.
13 D SIOBHAN: Because someone has to!
14 D KAI: Can I put the lids on?
15 D BEATA: I'm doing the labels, Kai.
16 D FITZ: Everyone do their own thing.
17 D SIOBHAN: Dad, you always say that!
18 A ¶ Roxanne drops a jar.
19 A It shatters.
20 A Pickles skid across the floor.
21 A Kai freezes, Beata squeals, Siobhan lunges to stop the brine from spilling, Fitz sets down the paddle and turns off the burner.
22 D FITZ: That's enough. Everybody out.
23 D ROXANNE: Dad --
24 D FITZ: Out. I'll finish.
25 A ¶ They leave, one by one.
26 A He sits on an overturned crate among the pickles and, very quietly, begins to laugh.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01894.json
### SCENE s01894 | INT. CATERING VAN, PARKED BEHIND SYMPHONY HALL - NIGHT
Detected names (may be incomplete or contain aliases): FINA, QUISPE-LARSEN, TREVOR ASANTE, OLIVIA BRANDT, WALLY, DRUMMOND
1 A ¶ Metal shelving.
2 A Trays of canapés.
3 A A thermos.
4 A Four people in black waiter uniforms crowd the back of the van, their tuxedo jackets half-unbuttoned.
5 A ¶ JOSEFINA "FINA" QUISPE-LARSEN (40s, crew boss) unrolls a blueprint on a cooler lid.
6 A TREVOR ASANTE (30s, gloves, a canvas bag) checks a watch.
7 A OLIVIA BRANDT (20s, earpiece, nervous) tucks a cable under her cuff.
8 A And WALLACE "WALLY" DRUMMOND (60s, an actual caterer's apron over the tux) props a tray against the door.
9 D FINA: Vault's under the cello section. Trevor goes in through the green room. Olivia takes the stairs. Wally, you walk the floor with the canapés.
10 D WALLY: I'm not a thief, I'm a caterer.
11 D FINA: Today you're both.
12 D TREVOR: The guard rotates at ten twenty.
13 D OLIVIA: Ten twenty-two. I checked.
14 D TREVOR: It's ten twenty.
15 D OLIVIA: I checked the rotation, not the time.
16 D WALLY: Children. Children.
17 D FINA: We have six minutes. Trevor, the bag.
18 A ¶ Trevor hands her the canvas bag.
19 A She unzips it.
20 A Out come four tuxedo vests, each with a small lump sewn in.
21 A She tosses them around.
22 A They catch them, fumble, button up.
23 D OLIVIA: Is this a camera?
24 D TREVOR: It's a microphone. The camera is in Wally's tray.
25 D WALLY: There's a camera in my tray?
26 D TREVOR: There's a camera in the pâté.
27 D WALLY: I'll never serve pâté again.
28 D FINA: Wally, go. Smile. Walk slowly. The vault door opens at ten twenty-six.
29 A ¶ Wally lifts the tray.
30 A Pushes the van door open.
31 A Trevor slips out behind him; Olivia follows; Fina climbs down last, closing the door softly as she goes.
32 A ¶ Outside, footsteps crunch gravel.
33 A A flashlight beam swings across the van's windshield.
34 A ¶ The four freeze.
35 A Wally lowers the tray.
36 A Trevor holds his breath.
37 A Olivia grips her cuff.
38 A Fina's hand slides to the door latch.
39 D WALLY (whispering): Do I smile?
40 D FINA: Smile.
41 A ¶ He smiles.
42 A The beam slides across his face, hesitates, moves on.
43 A Gravel crunches away.
44 A Wally exhales so hard his tray shakes.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00149.json
### SCENE s00149 | INT. FENCING SALLE - EVENING
Detected names (may be incomplete or contain aliases): ENZO, BIANCHI, PRIYANKA SHARMA-ODUYA, PRIYA, MASTER ALBERIC DUVAL
1 A ¶ Wooden floor, mirrored wall.
2 A Masks hang on pegs.
3 A Two figures in white square off under a single hanging lamp.
4 A ¶ LORENZO "ENZO" BIANCHI, 20s, wiry, tightens his glove.
5 A Opposite, PRIYANKA SHARMA-ODUYA, 20s, calm, flexes her blade.
6 D ENZO: Priya, you're stalling.
7 D PRIYA: I'm warming up.
8 D ENZO: It's your finals bout.
9 D PRIYA: It's practice.
10 A ¶ They salute.
11 A En garde.
12 A Silence.
13 A The lamp hums.
14 A ¶ Lunge.
15 A Parry.
16 A The blades sing.
17 A They circle, step, retreat, advance, a quiet dance.
18 D ENZO: Bit slow tonight.
19 D PRIYA: Bit loud tonight.
20 A ¶ Click.
21 A Point to Priya.
22 A She grins.
23 A He grins back.
24 A ¶ The door opens.
25 A A tall, silver-haired man in a long coat steps in.
26 A MASTER ALBERIC DUVAL, 70s, leans on a cane and watches.
27 D ALBERIC: Don't stop on my account.
28 D ENZO: Maestro.
29 D PRIYA: Master Duval.
30 D ALBERIC: Again.
31 A ¶ They resume.
32 A Faster now.
33 A Blades blur.
34 A A final parry.
35 A A riposte.
36 A Priya stops, blade at Enzo's chest.
37 D PRIYA: Touch.
38 A ¶ Alberic nods, slowly, and turns to go.
39 A At the door, he pauses.
40 D ALBERIC: Priyanka. Pack your bag. Nationals are Thursday.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01638.json
### SCENE s01638 | INT. GOLD ASSAY OFFICE - DAY
Detected names (may be incomplete or contain aliases): ISAIAH COLE, MAGDALENA OROZCO
1 A ¶ One room, adobe walls, a barred window.
2 A A scale of polished brass on a counter.
3 A A stove ticking.
4 A Dust turning in the light.
5 A ¶ ISAIAH COLE, 50s, a stooped assayer in sleeve garters, wipes the scale with a rag.
6 A He is slow, methodical.
7 A A man who has weighed other people's hopes for thirty years.
8 A ¶ A door in the back wall stands ajar.
9 A Beyond it, a lamp-lit vault.
10 A ¶ The bell above the front door jingles.
11 A ¶ MAGDALENA OROZCO, 30s, enters.
12 A Dust on her riding skirt.
13 A A canvas pouch in one fist.
14 A She walks like she has somewhere to be, and pauses when she sees he has already seen her.
15 D ISAIAH: Morning.
16 D MAGDALENA: It's afternoon.
17 D ISAIAH: Not in here.
18 A ¶ She lays the pouch on the counter.
19 A He opens it.
20 A Pours out a stream of dull yellow dust, and says nothing.
21 A He weighs.
22 A He squints.
23 A He weighs again.
24 D MAGDALENA: Well?
25 D ISAIAH: Eleven ounces.
26 D MAGDALENA: That's all?
27 D ISAIAH: Where did you find it?
28 D MAGDALENA: Upriver.
29 D ISAIAH: Upriver is long.
30 A ¶ She shrugs.
31 A He looks at her face, then at her hands.
32 A Her fingers are steady.
33 A Her nails are broken.
34 D ISAIAH [CONT'D]: That's a rough week.
35 D MAGDALENA: A rough year.
36 A ¶ He pours the dust back in.
37 A Ties the pouch.
38 A Slides it across.
39 D ISAIAH: It isn't gold.
40 D MAGDALENA: It's yellow.
41 D ISAIAH: So is brass. So is a fool's hope.
42 A ¶ She doesn't move.
43 A The stove ticks.
44 A The scale settles.
45 D MAGDALENA: How much for the dust, if it's brass?
46 D ISAIAH: Nothing.
47 D MAGDALENA: Then how much if it's gold?
48 D ISAIAH: That depends on whether you're lying.
49 A ¶ He walks to the vault door and pushes it wider.
50 A Beyond, a long table, covered with ledgers, a hundred small pouches in rows.
51 A ¶ She slips past him.
52 A Through the open door.
53 A Into the lamplight.
54 A He does not stop her.
55 D MAGDALENA [O.S.] (from the back room): Isaiah, how many pouches are in here?
56 D ISAIAH: More than eleven ounces' worth.
57 D MAGDALENA [O.S.] (from the back room): Whose are they?
58 D ISAIAH: Men who stopped coming back.
59 A ¶ A pause.
60 A A pouch thumps onto the table.
61 A Another.
62 D MAGDALENA [O.S.] (from the back room): You never sent them anything.
63 D ISAIAH: Nobody left an address.
64 A ¶ He lets out a slow breath.
65 A Sets down the rag.
66 A Locks the front door with a click.
67 A The bell above it jingles one last time.
68 A ¶ She steps from the vault, a pistol held loose at her side.
69 D MAGDALENA: Eleven ounces was only the start.
70 D ISAIAH: I know.
71 A ¶ He folds his hands on the counter and waits.
72 A He has weighed worse.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01955_1.json
### SCENE s01955_1 | INT. GONDOLA - CONTINUOUS
Detected names (may be incomplete or contain aliases): MIREILLE CASTANEDA, OZZIE BERGSTROM, NKECHI OBI, DARIUSZ PAWLAK, XIMENA TORRES, NEIL, ATWOOD
1 A ¶ Six people share a steel cabin built for eight.
2 A Windows fog with breath.
3 A A flask passes hand to hand.
4 A ¶ MIREILLE CASTANEDA, 60s, in a white wool coat, sits in the corner with her eyes closed, rubbing a rosary between her thumb and finger.
5 A OZZIE BERGSTROM, 30s, a lanky snowboarder, leans against the door, thumbing a dead phone.
6 A NKECHI OBI, 40s, a nurse, tends to DARIUSZ PAWLAK, 70s, whose hand trembles around a thermos.
7 A XIMENA TORRES, 20s, squeezes onto the bench beside them, scrolling through a map with no signal.
8 A And CORNELIUS "NEIL" ATWOOD, 50s, stands at the window and watches the dark.
9 A ¶ He turns from the window.
10 A She glances at him.
11 A They both look away.
12 A ¶ Ozzie slides to the floor.
13 A Ximena shifts to make room for his legs, and Nkechi tucks a blanket around Dariusz's knees.
14 A Mireille sighs.
15 D NEIL: How long has it been?
16 D NKECHI: Forty minutes.
17 D NEIL: It feels like four hours.
18 D OZZIE: It always does.
19 D XIMENA: Has anyone tried the emergency cord?
20 D DARIUSZ: It's been pulled twice.
21 D NKECHI: Both times, a recorded voice said help was coming.
22 D MIREILLE (eyes closed): Help is always coming.
23 A ¶ Silence.
24 A The cabin sways.
25 A Everyone shifts their weight at once, and Ozzie curses.
26 A They steady.
27 A Nkechi glances at Dariusz, who has gone pale.
28 D NKECHI [CONT'D]: Drink some water.
29 D DARIUSZ: I am fine.
30 D NKECHI: I know. Drink.
31 A ¶ He does.
32 A She smiles and pats his hand.
33 A Neil returns to the window.
34 A Ximena folds up her phone.
35 A Ozzie tilts his head back against the door.
36 A ¶ The cabin lurches once and then, with a long, heavy groan, begins to move.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02043.json
### SCENE s02043 | INT. ABANDONED AIRPORT CONTROL TOWER - NIGHT
Detected names (may be incomplete or contain aliases): HARLAN BEAUMONT-DIAZ, PILOT
1 A ¶ Dusty consoles.
2 A Cracked glass on all sides.
3 A A single dead radar screen.
4 A Wind whistles through broken panes.
5 A ¶ HARLAN BEAUMONT-DIAZ (30s, flashlight, pry bar) crouches at a radio console, alone.
6 A He thumbs a dial.
7 A Static.
8 D HARLAN (muttering): Dead. Of course it's dead.
9 A ¶ The radio crackles.
10 A A burst of static.
11 A Then a voice, faint, flat.
12 D PILOT [V.O.] (through static): Tower, Tower. Do you read? We are inbound. Ten miles. We have lost our lights.
13 A ¶ Harlan freezes.
14 A The flashlight trembles.
15 D HARLAN: This tower's been closed for thirty years.
16 D PILOT [V.O.]: Tower, we see the runway. We are coming in. Please light the runway.
17 D HARLAN (into the mic): Who is this?
18 D PILOT [V.O.]: Tower, please. We cannot see our hands.
19 A ¶ The radio dies.
20 A Silence.
21 A Then, from the airfield far below, a low drone.
22 A It grows.
23 A A pale glow sweeps across the cracked windows, as though something very large is descending.
24 A ¶ Harlan backs toward the stairs, trips over the pry bar, and falls.
25 A The drone swells until the glass shivers in its frames.
26 D HARLAN [CONT'D] (whispering): Not tonight. Not tonight.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00814.json
### SCENE s00814 | INT. MURANO GLASSWORKS - FURNACE HALL - NIGHT
Detected names (may be incomplete or contain aliases): SERAFINA BOLDRINI, CHIARA MENEGHEL
1 A ¶ The great furnace has burned for four hundred years and has never once gone out.
2 A It breathes orange light across a hall of crooked chandeliers, rows of unsold goblets, and a locked case of Doge's glass behind a velvet rope.
3 A The air is a held breath.
4 A ¶ SERAFINA BOLDRINI, 50s, apron, silver braid, tends the furnace with a long iron pipe and the patience of someone who has done so for decades.
5 A She hums an old lullaby.
6 A ¶ Across the hall, CHIARA MENEGHEL, 30s, in a borrowed apprentice smock and a coat of nerve, drifts between the chandeliers.
7 A Her gloved hand pauses on a showcase latch.
8 A Her other hand holds a velvet bag.
9 D SERAFINA: Chiara, you're late.
10 D CHIARA: The vaporetto, signora.
11 D SERAFINA: Always the vaporetto.
12 A ¶ Chiara lets the latch go.
13 A Crosses to the furnace, ears red with the heat.
14 A She lifts a pipe, gathers a gob of molten glass, and for a moment they work side by side, the older woman correcting the younger's angle with a touch.
15 D SERAFINA [CONT'D]: Slower. Glass has no patience for those in a hurry.
16 D CHIARA: I'll remember.
17 D SERAFINA: You won't. But it's kind of you to say.
18 A ¶ The glass glows like a small sun.
19 A Chiara turns it, gently, and the lullaby seems to hum itself in her throat.
20 A She is, for the first time, perfectly calm.
21 A ¶ She lifts her eyes to the case.
22 A Back to the glass.
23 A Then, softly:
24 D CHIARA: It's very beautiful, what you do.
25 D SERAFINA: It is.
26 A ¶ Serafina smiles.
27 A She sets down her pipe.
28 A Reaches into her apron pocket and draws out a long, cold key.
29 A Holds it in her palm.
30 D SERAFINA [CONT'D]: My daughter used to say the same. The last night she worked here, she asked me to open the case.
31 A ¶ She steps toward the Doge's glass.
32 A Chiara goes rigid.
33 D SERAFINA [CONT'D]: She was a very good thief. Very patient. Not patient enough.
34 A ¶ She slips the key in the lock.
35 A The case swings open on empty velvet.
36 D SERAFINA [CONT'D]: Your mother never did learn to wait.
37 A ¶ Chiara drops the velvet bag.
38 A Behind her, the furnace roars.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01309.json
### SCENE s01309 | INT. PHONE REPAIR SHOP - NIGHT
Detected names (may be incomplete or contain aliases): NADINE PRICE, ELIJAH SOTO
1 A ¶ A narrow cramped counter lit by a flickering fluorescent.
2 A Racks of cracked screens, cables hung like vines, a smell of solder and warm plastic.
3 A Rain on the shutter.
4 A ¶ NADINE PRICE, 30s, in a hooded sweatshirt, hunches over a disassembled phone with a tiny screwdriver and a magnifying lamp.
5 A Across the counter, ELIJAH SOTO, 20s, the shop's owner, sits on a stool with a bag of chips.
6 A He scrolls on another phone, bored, feet up on a box.
7 D NADINE: Elijah, it's still ringing.
8 D ELIJAH: So pick it up.
9 D NADINE: It has no battery. I took the battery out.
10 D ELIJAH: Then it's not ringing.
11 D NADINE: It's ringing.
12 A ¶ He lowers his phone.
13 A A tinny, impossible melody drifts from the gutted device.
14 A The lamp's bulb flickers.
15 A Nadine lifts the case with two fingers.
16 A Inside, where the board should be, is a hole.
17 A From the hole, the ringing grows louder, and a thin pale finger curls over the edge.
18 A Elijah drops the chips.
19 A Nadine hurls the phone across the shop.
20 A It SMASHES against the shutter.
21 A The ringing stops.
22 A The finger is gone.
23 A They stand frozen, staring at the broken pieces on the floor, the rain, the silence.
24 D ELIJAH (whispering): Do we answer it?
25 D NADINE: It's off.
26 A ¶ Across the shop, from the pile of shattered plastic, a small LED blinks green.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00834.json
### SCENE s00834 | INT. HOLLOWAY & DRAKE, OPEN-PLAN FLOOR, "SYNERGY POD" - DAY
Detected names (may be incomplete or contain aliases): BRENT STOLLER, DEIRDRE KOH, QUINCY ABARA, AUGUSTINE VANCE-PELL
1 A ¶ A glass cube in the middle of forty identical desks.
2 A Beanbags.
3 A A whiteboard reading "WINS!!" in six colors.
4 A A mini-fridge hums with kombucha.
5 A ¶ BRENT STOLLER, thirties, vest over a Henley, paces in front of the board holding a ceremonial marker.
6 A DEIRDRE KOH, forties, brisk, with a pen behind each ear, sits cross-legged on a beanbag.
7 A QUINCY ABARA, twenties, the junior analyst, perches on the edge of a stool, holding a laptop like a shield.
8 D BRENT: Team, great energy. I just want to say, we are crushing Q3.
9 D DEIRDRE: We missed Q3.
10 D BRENT: We pre-crushed it. In spirit.
11 A ¶ Quincy scribbles.
12 A Deirdre catches her eye and mouths something.
13 A She mouths it back.
14 A Neither smiles.
15 D QUINCY: Brent, should I put "pre-crushed" in the deck?
16 D BRENT: Absolutely. Bold it.
17 A ¶ She does.
18 A The fridge hums.
19 A Everything seems fine.
20 A ¶ The glass door slides open.
21 A AUGUSTINE VANCE-PELL, sixty, chief executive, silver and enormous in a camel coat, enters with a binder under one arm and a wide, serene smile.
22 A ¶ Brent's marker stops moving.
23 A Deirdre rises from the beanbag in one smooth motion, like someone leaving a bomb site.
24 A Quincy shuts her laptop.
25 D AUGUSTINE: Please. Don't stop on my account.
26 A ¶ He walks to the whiteboard and reads it, lips moving.
27 A Then he turns, and the smile has not changed at all.
28 D AUGUSTINE [CONT'D]: I have a very short announcement. Who would like to hear it?
29 A ¶ Nobody speaks.
30 A Deirdre raises her hand, as if at school.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00722.json
### SCENE s00722 | EXT. SALT-FLAT FERRY LANDING - NOON
Detected names (may be incomplete or contain aliases): DEACON CROWE, BIRDIE PRUETT
1 A ¶ White.
2 A Everything white.
3 A Heat shimmer.
4 A A rotting dock jutting into a lake that dried up a decade ago.
5 A A ferry sits stranded on cracked crust, hull tilted.
6 A ¶ DEACON CROWE, forties, sits on an upturned bucket by the ramp.
7 A Black coat, grey with salt.
8 A Rifle across his knees.
9 A He doesn't aim it.
10 A He just keeps it.
11 A ¶ Hoofbeats, slow.
12 A A shape resolves in the glare.
13 A Rider.
14 A Mule.
15 A ¶ BIRDIE PRUETT, thirties, wide hat, rolled sleeves.
16 A Sunburnt nose.
17 A She dismounts without hurry.
18 A Ties the mule to a piling.
19 A ¶ He watches.
20 A Doesn't rise.
21 D BIRDIE: Deacon.
22 D DEACON: Birdie.
23 A ¶ She takes a canteen off the saddle.
24 A Drinks.
25 A Holds it out.
26 A He considers it.
27 A Takes it.
28 D BIRDIE: You're a long way from anybody.
29 D DEACON: That's the idea.
30 A ¶ She sits on the ramp's edge.
31 A Boots dangling over dry crust.
32 A He caps the canteen, passes it back.
33 A Neither says anything for a while.
34 A ¶ A gull cries.
35 A Where it came from, no one knows.
36 A Both look up.
37 A Both look down again.
38 D DEACON [CONT'D]: They say the lake'll come back.
39 D BIRDIE: They say a lot.
40 A ¶ He grins.
41 A Small.
42 A It leaves quick.
43 A ¶ She pulls a folded paper from her vest.
44 A Turns it over in her fingers.
45 A He sees it.
46 A Eyes narrow.
47 A Rifle shifts a half inch on his knees.
48 A ¶ They both go still.
49 A Wind hushes the dock timbers.
50 D DEACON [CONT'D]: That mine?
51 D BIRDIE: Was yours. It's a telegram now.
52 D DEACON: Who from?
53 D BIRDIE: Your sister. Says come home.
54 D DEACON (flat): Don't have one.
55 D BIRDIE: Then somebody's lying, Deacon.
56 A ¶ He stares at the ferry.
57 A Her eyes stay on him.
58 A The heat hums.
59 A ¶ She unfolds the paper.
60 A Holds it up between them like a card she doesn't want to play.
61 D BIRDIE [CONT'D]: Read it with me.
62 A ¶ He doesn't take it.
63 A He doesn't leave.
64 A ¶ After a long moment he sets the rifle down on the planks.
65 A Slides over on the bucket.
66 A She shifts toward him, paper between them.
67 A They read.
68 D DEACON (low): Hell.
69 D BIRDIE: Yeah.
70 A ¶ Salt glitters.
71 A Neither moves.
