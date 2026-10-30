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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00803.json
### SCENE s00803 | EXT. TIDAL-LOCKED STATION - TERMINATOR RAIL - ETERNAL DUSK
Detected names (may be incomplete or contain aliases): YUSUF BARANOWSKI, FREYA ODUYA, MARCELINE VOSS, DAGMAR NYONI
1 A ¶ A single rail hangs between night and day.
2 A On one horizon the sun is a thin white edge.
3 A On the other, stars.
4 A The station crawls along the track, a lit tube no wider than a bus.
5 A ¶ Inside the observation cab, four figures strap into acceleration couches.
6 A Outside, nothing moves.
7 A ¶ YUSUF BARANOWSKI, 50s, grey-haired, runs a gloved finger along a dead console.
8 A He mutters a number and moves on.
9 A ¶ FREYA ODUYA, 30s, beside him, tightens a harness strap, loosens it again, tightens it.
10 A She stops when he looks.
11 A ¶ MARCELINE VOSS, 20s, near the porthole, presses her forehead to the glass.
12 A Her breath fogs it.
13 A ¶ DAGMAR NYONI, 40s, at the rear, checks the oxygen gauge for the fourth time.
14 A ¶ The station shudders.
15 A A thud rolls through the floor.
16 A They all grab for something.
17 A ¶ He reaches across and clamps her hand on the strap.
18 A She nods.
19 A They both stare at the porthole as the rail ahead begins to buckle.
20 A ¶ She curses.
21 A He swallows.
22 A They share a glance, nothing in it.
23 D YUSUF: Rail's flexing.
24 D FREYA: Expected.
25 D MARCELINE: It's never flexed that much.
26 D DAGMAR: It's within tolerance.
27 A ¶ The cab rocks.
28 A Marceline's knuckles whiten on the rim.
29 A Behind her, Dagmar unstraps, crosses, puts both hands on the girl's shoulders.
30 A Marceline doesn't look back.
31 A ¶ The rail steadies.
32 A The glow along the horizon holds.
33 A ¶ Yusuf lets his breath out.
34 A Freya gives a short, tight laugh.
35 A The four of them sit in the hum of the engines, watching the sun not rise.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00338.json
### SCENE s00338 | INT. FLOODED GRAIN SILO - DAY
Detected names (may be incomplete or contain aliases): MAREN VOSS, OTIENO
1 A ¶ Brown water laps at the third rung of the iron ladder.
2 A Light falls in thick shafts through holes in the tin roof.
3 A The walls sweat.
4 A A rotten sweetness hangs in the air, old wheat gone to mold.
5 A ¶ MAREN VOSS, forties, a farmer in a soaked canvas jacket, sits on a ledge halfway up the wall, one arm hooked through the ladder, watching the water.
6 A OTIENO, thirties, her neighbor, a mechanic with a split lip, stands waist-deep below, feeling along the wall with both hands, working his way around the curve of the silo until he reaches a bricked-up door, presses his ear to it, and strikes it three times with a bolt while she watches without a word.
7 D MAREN (to herself): Two days. Two days and the river took the whole valley.
8 D OTIENO (to Maren): Door's solid. Mortar, not wood.
9 D MAREN: Somebody bricked it up.
10 D OTIENO: Somebody who didn't want it opened. Or didn't want something in here to get out.
11 A ¶ She climbs down a rung.
12 A The water touches her boot.
13 A She pulls the boot back up, then plants it again, then looks up at the roof where a pigeon has settled on a strut.
14 D MAREN (to the silo): Anybody up there? Anybody hear us?
15 A ¶ Nothing but drip.
16 A Otieno rests his forehead on the bricks.
17 A She wades over to him and presses her palm flat to the wall beside his, and together they listen.
18 D OTIENO: It's quiet.
19 D MAREN: It's never quiet in a silo. There's always the grain settling.
20 D OTIENO: No grain left to settle.
21 A ¶ She takes the bolt from his hand and strikes the wall herself, twice, then once, then twice.
22 A A long moment passes.
23 A From beyond the bricks, faint as a heartbeat, someone strikes back.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00574.json
### SCENE s00574 | INT. SIGNAL RELAY HUT - HIMALAYAN PASS - DAY
Detected names (may be incomplete or contain aliases): HAKIM BARAKZAI, LUCJAN NOWAK, COMMAND, MEDIC ANNELI SAARI
1 A ¶ Stone walls.
2 A Tin roof ticking in the wind.
3 A A hand-crank radio on a plank table.
4 A Frost on the window.
5 A 1962.
6 A ¶ SGT. HAKIM BARAKZAI, 40, beard gone grey at the chin, sits on an ammo crate.
7 A Mending a boot.
8 A Slow.
9 A ¶ PVT.
10 A LUCJAN NOWAK, 19, shivering, wrapped in two blankets, stares at the stove.
11 A Feeds it one stick at a time.
12 D NOWAK: Last of the wood.
13 D BARAKZAI: Burn the crate after.
14 D NOWAK: Which crate?
15 D BARAKZAI: The one you're not sitting on.
16 A ¶ Static.
17 A A crackle from the radio.
18 D COMMAND [V.O.] (garbled): Relay Nine, Relay Nine. Report status. Over.
19 A ¶ Barakzai crosses and takes the handset.
20 D BARAKZAI: Command, Relay Nine. Two men. One stove. No contact. Over.
21 D COMMAND [V.O.]: Copy two men. Supply drop postponed. Weather. Over.
22 D BARAKZAI: Understood. Out.
23 A ¶ He hangs up.
24 A Nowak keeps his eyes on the flames.
25 D NOWAK: That's the third postponement.
26 D BARAKZAI: Fourth. You weren't counting.
27 A ¶ The door BANGS open.
28 A Wind and snow.
29 A A figure in a white parka stumbles in, shoulders a medical satchel: MEDIC ANNELI SAARI, 30, Finnish, windburned face, ski goggles pushed up.
30 A She slams the door behind her.
31 D SAARI: Which of you is Barakzai?
32 D BARAKZAI: Me.
33 D SAARI: Good. I walked nine hours. Is there tea?
34 D NOWAK: No.
35 D SAARI: Is there anything?
36 D BARAKZAI: Boiled snow.
37 D SAARI (dropping her satchel): Then boil it.
38 A ¶ Nowak scrambles for the kettle.
39 A Saari sits heavily next to Barakzai and pulls off a glove, examining her blue fingertips.
40 D BARAKZAI: Command said no supply.
41 D SAARI: Command said nothing to me. I was sent for the private's feet.
42 D NOWAK: My feet are fine.
43 D SAARI: Take your boots off.
44 D NOWAK: They're fine.
45 D BARAKZAI: Take them off, Lucjan.
46 A ¶ Reluctantly, Nowak peels off a boot and a grey sock.
47 A The toes are white.
48 A Saari looks, then at Barakzai.
49 D SAARI: Fine. For now.
50 D COMMAND [V.O.] (over radio): Relay Nine, be advised, weather window tomorrow oh-six-hundred. Over.
51 A ¶ Barakzai doesn't move to answer.
52 A He looks at the kettle, at the stove, at the two young faces.
53 D BARAKZAI: Tomorrow, then.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02293.json
### SCENE s02293 | INT. DENTIST WAITING ROOM - DAY
Detected names (may be incomplete or contain aliases): CLOWN, PATRICIA VOSS, DEEDEE, MILO, JUANITA, GUS
1 A ¶ Beige chairs.
2 A A fish tank.
3 A A bowl of lollipops marked FOR GOOD PATIENTS ONLY.
4 A ¶ A CLOWN in full costume sits stiffly with a balloon animal.
5 A DR. PATRICIA VOSS, the dentist, in a mask, hovers by the door.
6 A DEEDEE, her receptionist, types.
7 A A little boy, MILO, six, wails in his mother's lap.
8 A His mother, JUANITA, bounces him.
9 D DEEDEE: Mr. Clown? You're next.
10 D CLOWN: I'm not a patient. I'm the entertainment.
11 D DR. VOSS: We didn't book entertainment.
12 D CLOWN: Somebody did. Under "Gus."
13 D DEEDEE: Gus?
14 D CLOWN: That's me. Gus the Clown.
15 D GUS (tapping his nose): Honk.
16 A ¶ MILO shrieks.
17 A Juanita clamps her hand over his mouth.
18 A Dr. Voss and Deedee both lunge for the lollipops.
19 A The three adults collide at the bowl, sending lollipops flying; Gus slips, his balloon dog squeaks, and the fish tank sloshes.
20 A ¶ Milo stops crying.
21 A He stares at Gus.
22 D MILO: Do the dog again.
23 A ¶ Gus, flat on the floor, honks.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02446.json
### SCENE s02446 | INT. ROADSIDE WAX MUSEUM - HALL OF PRESIDENTS - NIGHT
Detected names (may be incomplete or contain aliases): ONE ONLY, HARLAN BOONE, DOLORES KIM, KIT ABERNATHY, MASON TREVELYAN, YVETTE DUBOIS
1 A ¶ Dim corridor.
2 A Red velvet ropes.
3 A Wax figures stand on low platforms in dusty suits, their glass eyes catching the flashlight beams.
4 A A faded banner: "ONE DAY ONLY - FOREVER."
5 A ¶ HARLAN BOONE (40s, museum owner, ring of keys, bathrobe over pajamas) leads four visitors down the hall, lantern swinging.
6 A Behind him: DOLORES KIM (50s, schoolteacher, tote bag), KIT ABERNATHY (20s, backpacker, headlamp), MASON TREVELYAN (30s, salesman, loosened tie), and YVETTE DUBOIS (30s, nurse, scrubs under a parka).
7 D HARLAN: Right this way, folks. The museum closes at six, but I make exceptions for storms.
8 D DOLORES: Thank you, Mr. Boone. We were nearly in a ditch.
9 D HARLAN: Best place to be nearly in a ditch is my front door.
10 D KIT: Are these all real people?
11 D HARLAN: Wax, miss. All wax.
12 D MASON: They look awfully real.
13 D HARLAN: That's the craft.
14 A ¶ Yvette stops at a figure of Abraham Lincoln.
15 A She reaches out, touches its sleeve, and pulls back.
16 D YVETTE: It's warm.
17 D HARLAN: That's the lamp.
18 D YVETTE: There's no lamp.
19 A ¶ Harlan keeps walking.
20 A The visitors exchange glances.
21 D KIT: Is anyone else getting a weird vibe?
22 D DOLORES: ^Is that wax supposed to be breathing?
23 D MASON: ^Is that wax supposed to be breathing?
24 A ¶ Dolores and Mason speak at once, then look at each other in alarm.
25 A All four turn toward the Lincoln figure.
26 A ¶ Its head swivels slowly toward them.
27 D YVETTE: Oh no.
28 A ¶ Harlan stops at the end of the hall.
29 A Turns.
30 A His smile has changed.
31 A It is wider and wrong.
32 D HARLAN: Don't be rude, folks. They've been waiting a very long time for company.
33 A ¶ All along the hall, the wax figures stir.
34 A A hand lifts.
35 A A jaw clicks.
36 A A glass eye rolls forward.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00949.json
### SCENE s00949 | INT. DEEP-SEA HABITAT, COMMON ROOM - SHIFT CHANGE
Detected names (may be incomplete or contain aliases): COMMANDER ASTRID LINDQVIST-OKOYE, TECHNICIAN BENEDICT ARCHAMBAULT-LI, SOLEDAD VARGAS-EZEKIEL, MONA, ABARCA-NIELSEN, ENGINEER THADDEUS MWANGI-PELLETIER, SPECIALIST KAMALA DEVI-BRANDT
1 A ¶ A cramped steel cylinder with a single porthole of black water.
2 A Bunks fold from the walls.
3 A A coffee machine gurgles.
4 A Condensation drips from the pipes in a slow, steady count.
5 A ¶ Six crew members cluster around a fold-out table playing a card game no one is winning.
6 A ¶ COMMANDER ASTRID LINDQVIST-OKOYE (50s) deals.
7 A TECHNICIAN BENEDICT ARCHAMBAULT-LI (30s) fans his cards.
8 A DR. SOLEDAD VARGAS-EZEKIEL (40s) frowns at her hand.
9 A COOK RAMONA "MONA" ABARCA-NIELSEN (30s) pours coffee.
10 A ENGINEER THADDEUS MWANGI-PELLETIER (60s) hums off-key.
11 A And the youngest, SPECIALIST KAMALA DEVI-BRANDT (20s), stares at the porthole.
12 D ASTRID (to the table): Antes in.
13 D BENEDICT: I fold.
14 D SOLEDAD: You haven't seen the cards.
15 D BENEDICT: I've seen your face.
16 D MONA (over them): Coffee's up, who wants some?
17 D THADDEUS: Me.
18 D KAMALA: Not me.
19 D SOLEDAD: Mona, put two sugars in mine, would you, and Benedict --
20 D BENEDICT: Don't tell me what to do with my own hand --
21 D ASTRID: Everyone, quiet.
22 A ¶ They stop.
23 A The pipes drip.
24 A Kamala is still looking at the porthole.
25 D ASTRID [CONT'D] (to Kamala): What is it?
26 D KAMALA (without turning): Nothing.
27 D THADDEUS (muttering): There's always something.
28 D MONA: Don't start, Thad.
29 D THADDEUS: I'm just saying --
30 D SOLEDAD (over him): He's right, though. The pressure gauge ticked.
31 D BENEDICT: It ticks all the time.
32 D SOLEDAD: Not like that.
33 D MONA (setting down the pot): Like what?
34 D ASTRID: Like a heartbeat.
35 A ¶ Everyone looks at her.
36 A She lays down her cards, face up.
37 D ASTRID [CONT'D] (to herself): I knew I'd heard it before.
38 A ¶ A long, low note rolls through the hull.
39 A The coffee ripples in the cups.
40 A Nobody moves.
41 A Nobody speaks.
42 A Then Kamala turns from the porthole and smiles.
43 D KAMALA: It's only the whales.

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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02226.json
### SCENE s02226 | EXT. SALT FLAT - DAY
Detected names (may be incomplete or contain aliases): NGAIO, TOMASZ, LUPE
1 A ¶ White to the horizon.
2 A Heat shimmers.
3 A The wreck of a Land Cruiser sits on its roof, tires blown, one door off.
4 A ¶ Under a tarp rigged from the open hatch sit three survivors.
5 A ¶ NGAIO, fifties, a Maori geologist, cracked lips, a wide-brimmed hat held on with a scarf.
6 A TOMASZ, thirties, the driver, sunburned face, an arm in a makeshift sling.
7 A LUPE, nineteen, a student, barefoot, her boots set neatly beside her.
8 A ¶ Ngaio unscrews a canteen.
9 A A mouthful of water for each of them.
10 A No more.
11 D NGAIO: One sip. Hold it. Count to ten.
12 D TOMASZ: Give me two sips. I'm bigger than the girl.
13 D LUPE: I'm right here, Tomasz.
14 D TOMASZ: I know you're here.
15 D NGAIO: You get the same as the rest of us. That's the rule.
16 D TOMASZ: Whose rule?
17 D NGAIO: Mine. I've got the canteen.
18 A ¶ Tomasz grunts.
19 A Takes his sip.
20 A Holds it.
21 A His eyes close.
22 D LUPE (whispering): Do you think they know we're missing?
23 D NGAIO: The lodge expects us at six tonight.
24 D TOMASZ: They'll look tomorrow.
25 D LUPE: That's too late, isn't it?
26 D NGAIO: Not if we're careful with the water.
27 D TOMASZ: And the heat.
28 D NGAIO: And the heat. We walk at dusk. East, toward the ridge. The salt is hard there, you won't sink.
29 D LUPE: How far?
30 D TOMASZ: Twenty kilometers.
31 D NGAIO: Twenty-two.
32 D TOMASZ: Twenty-two.
33 D LUPE (low): Okay. Okay.
34 A ¶ A wind rises, spinning a small white devil of salt.
35 A It passes.
36 A The tarp snaps.
37 D NGAIO: There. See that? Wind means weather turning. By dark, it'll cool.
38 D TOMASZ: You say that like you've done this.
39 D NGAIO: Thirty years of fieldwork. I've been lost on flats before.
40 D LUPE: Were you scared?
41 D NGAIO: Every time.
42 A ¶ Lupe laughs, a small cracked sound.
43 A Tomasz almost smiles.
44 D TOMASZ: Then what's the trick?
45 D NGAIO: You stop looking at the horizon. It lies. You look at your feet and the next step.
46 D TOMASZ: That's a lousy trick.
47 D NGAIO: It's the only one.
48 D LUPE: Can I try the canteen again?
49 D NGAIO: No.
50 D LUPE: Tomasz?
51 D TOMASZ: She said no, Lupe.
52 D LUPE: I'm just asking!
53 D NGAIO: Both of you. Sit. Rest. We have eight hours.
54 A ¶ They settle.
55 A Lupe lays her head on her knees.
56 A Tomasz studies his sling.
57 A Ngaio watches the white horizon, unmoving.
58 D NGAIO [CONT'D]: Eight hours. Then we walk.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01832.json
### SCENE s01832 | INT. ROADSIDE WAY STATION - DAY
Detected names (may be incomplete or contain aliases): MA TULLIVER, SPARROW, ORVILLE PENN, SABINA ROJAS, OSCAR HALE, JUDE CALLAHAN, ^OSCAR
1 A ¶ Adobe walls, a stove gone cold, six mismatched chairs pulled to a long table.
2 A Dust hangs in the shaft of light from the door.
3 A Outside, a horse stamps.
4 A ¶ Six people sit down to a meal none of them wants.
5 A The proprietor, MA TULLIVER, sixty, sleeves rolled, ladles beans into tin bowls and says nothing.
6 A Her hired boy, SPARROW, fifteen, sets them down one by one.
7 A A drummer in a checked vest, ORVILLE PENN, forty, sits with his sample case under his boots.
8 A A woman in gray travel wool, SABINA ROJAS, thirty, holds her bowl and does not lift the spoon.
9 A A tall rancher, OSCAR HALE, fifty, takes his hat off for grace though no one says one.
10 A And in the corner chair, back to the wall, a stranger in a dusty duster, JUDE CALLAHAN, thirty-five, watches the door.
11 A ¶ The beans steam.
12 A For a long moment there is only the sound of spoons.
13 D ORVILLE: Lovely weather for the road.
14 D OSCAR: It's rained twice in a year.
15 D ORVILLE: That's what I said.
16 D SABINA: Is there a stage tonight?
17 D MA TULLIVER: Stage came and went.
18 D SABINA: I was told it comes at four.
19 D SPARROW: It did come at four. You were upstairs.
20 D SABINA: Nobody woke me.
21 D MA TULLIVER (over her): Sparrow, fetch the bread.
22 A ¶ He goes.
23 A Oscar glances at Jude, who has not touched his bowl.
24 A Orville clears his throat and opens his mouth, but Sabina speaks first.
25 D SABINA: Mister, are you not hungry?
26 D JUDE: Not particularly.
27 D OSCAR: He's waiting on somebody.
28 D JUDE: I'm waiting on supper to finish.
29 D OSCAR: Then it's finished.
30 A ¶ He shoves his bowl away.
31 A Ma Tulliver sets down her ladle.
32 A The room tightens like a drawn cord.
33 A ¶ She comes around the table, slow, wiping her hands on her apron.
34 A She stops behind Jude's chair and rests one palm on its back.
35 A He does not turn his head.
36 A ¶ Sparrow returns with the bread, sees them, and stops in the doorway with the loaf held against his chest.
37 D SPARROW: Ma?
38 D MA TULLIVER: Put it down, son.
39 A ¶ He sets it on the sideboard.
40 A Orville slides his sample case farther under his chair.
41 A Sabina rises halfway, then sits again as Oscar lays a hand over hers.
42 D JUDE (quietly): Ma'am. You know who I am.
43 D MA TULLIVER (simultaneously): I know whose boy you are.
44 D ^OSCAR (simultaneously): We all know whose boy.
45 A ¶ Jude smiles, tired.
46 A He reaches into his duster.
47 A Everyone in the room draws a breath, and what he takes out is a folded letter, creased soft with handling.
48 D JUDE [CONT'D]: He asked me to bring this.
49 A ¶ He sets it on the table, in the middle of the beans.
50 A Nobody reaches for it.
51 A Outside the horse stamps, and stamps again, and a long shadow crosses the doorway.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00103.json
### SCENE s00103 | INT. CATHEDRAL BELL TOWER OBSERVATION POST - DAY
Detected names (may be incomplete or contain aliases): CAPTAIN HENRY ABERNETHY-LOWE, CORPORAL TOMMASO RICCI, PRIVATE ELIJAH STONE-BARNES, RADIO OPERATOR
1 A ¶ A cramped stone chamber beneath the bells.
2 A Narrow arrow-slit windows.
3 A Sandbags stacked against the wall.
4 A A field telephone on a plank, a pair of binoculars on a nail.
5 A ¶ CAPTAIN HENRY ABERNETHY-LOWE stands at the east slit, field glasses at his eyes.
6 A He is tall, spare, and impeccable, his uniform pressed even in the dust.
7 A CORPORAL TOMMASO RICCI sits on an ammunition crate, a rifle across his knees, cleaning it with a rag.
8 A PRIVATE ELIJAH STONE-BARNES, barely nineteen, huddles by the stairwell door, a mug of tea cold in his hands.
9 A ¶ The captain lowers the glasses.
10 A He does not turn.
11 D ABERNETHY-LOWE: Anything?
12 D RICCI: Nothing, sir.
13 D ABERNETHY-LOWE: Then keep looking.
14 A ¶ Ricci nods, not looking up.
15 A The private watches the captain, who watches the horizon.
16 A A great quiet fills the tower.
17 D RADIO OPERATOR [V.O.] (field phone, crackling): Eagle's Nest, this is Baker Two. Report.
18 A ¶ Abernethy-Lowe crosses the floor, lifts the receiver, and holds it with two fingers.
19 D ABERNETHY-LOWE: Baker Two, Eagle's Nest. Position quiet. No movement.
20 D RADIO OPERATOR [V.O.] (field phone): Understood. Command wants a sweep of the north road at sixteen hundred.
21 D ABERNETHY-LOWE: Acknowledged.
22 A ¶ He hangs up.
23 A Stands very still, his hand lingering on the receiver.
24 A Elijah sets down the mug.
25 D ELIJAH: Sir?
26 D ABERNETHY-LOWE: Private.
27 D ELIJAH: Is it true what they say about the bells?
28 D ABERNETHY-LOWE: What do they say?
29 D ELIJAH: That they ring on their own before an attack.
30 A ¶ Ricci snorts, rubbing the rifle.
31 A The captain turns, finally, and studies the boy.
32 D ABERNETHY-LOWE: They ring when the wind is wrong. That's all.
33 D ELIJAH: Then why do you keep checking?
34 A ¶ The captain does not answer.
35 A A long pause.
36 A High above, in the dark of the belfry, a single bell hums, a faint, shivering note, not a ring, not yet.
37 A ¶ Ricci puts down the rifle.
38 A Abernethy-Lowe lifts his glasses.
39 A Elijah stands.
40 A They all look at the arrow-slit, where the afternoon light has gone a strange, pale gold.
41 D RICCI (softly): Wind.
42 D ABERNETHY-LOWE: Wind.
43 A ¶ The bell hums again.
44 A This time, it rings.
