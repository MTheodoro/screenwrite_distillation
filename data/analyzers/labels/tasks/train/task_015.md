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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01152.json
### SCENE s01152 | INT. FARMHOUSE KITCHEN - HARVEST NIGHT
Detected names (may be incomplete or contain aliases): OLEKSANDR, MIREILLE, TEDDY, ROSA, AUGUSTINE, KIERAN, ^ROSA
1 A ¶ A long pine table crowded with cornbread, pickled beets, and a pot of paprika stew.
2 A Oil lamps burn though the electricity works.
3 A Through the open window, the throb of a combine in the field, working late.
4 A ¶ OLEKSANDR (70s, white moustache, suspenders) sits at the head of the table, carving bread with a knife older than his children.
5 A His wife MIREILLE (60s, floured apron, silver braid) ladles stew into mismatched bowls.
6 A Their son TEDDY (40s, city jacket, gold watch) sits restlessly to the right, thumbing his phone under the table.
7 A His sister ROSA (30s, work gloves tucked into her belt, sunburned neck) leans against the stove with her arms folded.
8 A At the far end, AUGUSTINE (20s, neighbor boy, cap in his hands) waits to be told where to sit.
9 A And in the corner, perched on a milking stool, KIERAN (10, the grandson, scabbed knees, a jar of fireflies) holds the jar in both hands and watches everyone.
10 A ¶ Mireille sets a bowl in front of Teddy.
11 A He looks at it as if it were an invoice.
12 D OLEKSANDR: Eat.
13 D TEDDY: I'm not hungry.
14 D ROSA: You haven't been hungry in this house in fifteen years.
15 D TEDDY (quietly, to her): Don't start.
16 D OLEKSANDR (at the same time): Teddy, we have guests.
17 D ^ROSA (at the same time): Somebody has to start.
18 A ¶ Mireille puts the ladle down with a clink.
19 A Augustine edges toward a chair and pretends to be fascinated by the wallpaper.
20 A Kieran lifts his jar of fireflies to the lamp.
21 D ROSA [CONT'D]: The bank called about the loan again.
22 D TEDDY: I know.
23 D ROSA: You know?
24 D TEDDY: I'm the one who signed it.
25 A ¶ Oleksandr's knife stops in the bread.
26 A Mireille touches the edge of her apron.
27 A Nobody speaks.
28 A The combine in the field coughs and goes quiet.
29 A Kieran's fireflies blink.
30 D OLEKSANDR: You signed?
31 D TEDDY: For the combine. Papa, I did it for the harvest.
32 D OLEKSANDR: You put the land on that paper.
33 D TEDDY: It's a bridge loan. We pay it off in March.
34 D ROSA (low): If the wheat sells.
35 D TEDDY: It will sell.
36 D ROSA: Hail came through Tuesday. Forty acres flattened.
37 D TEDDY: Why am I only hearing about this now?
38 D ROSA: Because you only come when there's something to sign.
39 A ¶ Teddy shoves his chair back.
40 A Oleksandr raises one hand.
41 A The room freezes: Rosa with her arms locked, Teddy half-risen, Mireille clutching the ladle, Augustine wide-eyed in the lamplight, Kieran cradling his glowing jar.
42 D OLEKSANDR: Sit down.
43 A ¶ Teddy sits.
44 A Oleksandr lays the knife across the loaf, wipes his hands on his trousers, and rises, slow, using the table's edge.
45 A He crosses to the window and stands looking out into the dark.
46 D OLEKSANDR [CONT'D]: My father lost this land in forty-six. My brother and I won it back with our hands. It was never ours. It was a loan from the weather.
47 D MIREILLE: Oleksandr.
48 D OLEKSANDR: Let me say it. If the bank takes it, the bank takes it. I'm not afraid of a letter.
49 D ROSA: Papa...
50 D OLEKSANDR: What I am afraid of is this. A table where nobody tells the truth until the harvest is in.
51 A ¶ He turns.
52 A His eyes find Kieran's.
53 D OLEKSANDR [CONT'D]: Boy. What is in your jar?
54 D KIERAN: Fireflies, Dedo.
55 D OLEKSANDR: How many?
56 D KIERAN: Eleven.
57 D OLEKSANDR: Are they happy?
58 D KIERAN (considering): They glow when they're scared.
59 A ¶ A silence.
60 A Then Mireille begins to laugh, hand over her mouth, and then Rosa, and then, unwillingly, Teddy.
61 A Augustine, relieved, sits at last.
62 A Oleksandr crosses back to the table, takes Teddy by the shoulder, and sits beside him.
63 D OLEKSANDR: Eat, my son. Tomorrow we count the wheat that's left.
64 A ¶ Teddy lifts his spoon.
65 A Kieran sets his jar on the table.
66 A In the glow of eleven small lights, the family eats.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00099.json
### SCENE s00099 | INT. NIGHT TRAIN - SLEEPER COMPARTMENT - NIGHT
Detected names (may be incomplete or contain aliases): CLEMENCE ARDOIN, SULEIMAN HADDAD
1 A ¶ A narrow cabin of dark wood and brass.
2 A Two bunks.
3 A A lamp swings with the rails.
4 A Rain slides sideways down the window.
5 A ¶ CLEMENCE ARDOIN (30s, wool coat, hair undone) sits on the lower bunk with her shoes still on.
6 A SULEIMAN HADDAD (30s, travel-worn suit, a single suitcase) stands at the window with his back to her.
7 A He does not turn.
8 A ¶ She watches the back of his neck.
9 A He watches the dark.
10 D CLEMENCE: You could have taken another car.
11 D SULEIMAN: There was no other car.
12 D CLEMENCE: There's always another car.
13 D SULEIMAN: Not at two in the morning.
14 D CLEMENCE: You didn't ask.
15 D SULEIMAN: Neither did you.
16 A ¶ The rails clack.
17 A She smooths her skirt.
18 A He loosens his tie, pulls it off, folds it once, twice, and tucks it in his pocket.
19 D CLEMENCE: Tell me why you came.
20 D SULEIMAN: I told you.
21 D CLEMENCE: You told me a story about a conference.
22 D SULEIMAN: It was a good conference.
23 D CLEMENCE: In Lyon. Where I live.
24 D SULEIMAN: It's a big city.
25 D CLEMENCE: Suleiman.
26 D SULEIMAN: Clemence.
27 D CLEMENCE: Say it.
28 D SULEIMAN: I got on the wrong train.
29 D CLEMENCE: You got on the right one.
30 D SULEIMAN: That's worse.
31 D CLEMENCE: Yes.
32 A ¶ He finally turns.
33 A The lamp lights half his face.
34 A She is already standing.
35 A They are closer than either planned.
36 D SULEIMAN: Six years.
37 D CLEMENCE: Seven in March.
38 D SULEIMAN: You counted.
39 D CLEMENCE: You didn't?
40 D SULEIMAN: Every day.
41 D CLEMENCE: Then why is this the first time?
42 D SULEIMAN: Because you would have said no.
43 D CLEMENCE: I might have said yes.
44 D SULEIMAN: Might.
45 D CLEMENCE: Might.
46 A ¶ The train screams around a curve and throws her against his chest.
47 A He catches her.
48 A Neither lets go.
49 D CLEMENCE [CONT'D]: That was an accident.
50 D SULEIMAN: I know.
51 D CLEMENCE: I'm not sorry.
52 D SULEIMAN: Neither am I.
53 A ¶ She slaps him, hard, across the cheek.
54 A He doesn't flinch.
55 A She slaps him again, and then she is crying, and then she is holding onto his lapels, and he says her name into her hair, again and again, as the rain beats on the glass and the train carries them toward a station neither of them knows.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02183.json
### SCENE s02183 | INT. NEONATAL ICU - NURSES' STATION - 3 A.M.
Detected names (may be incomplete or contain aliases): ELOISE FAURE, NURSE DESMOND ACHEBE, NURSE LUPE TALAKAI, ANIKA VERMA, RESPIRATORY THERAPIST BO LINDGREN, CHAPLAIN MIRIAM GOLD
1 A ¶ Soft monitors.
2 A A mug of cold tea.
3 A Six people around a whiteboard.
4 A ¶ DR. ELOISE FAURE (50s, attending) caps a marker.
5 A NURSE DESMOND ACHEBE (30s) sips his coffee.
6 A NURSE LUPE TALAKAI (40s) scrolls a chart.
7 A DR. ANIKA VERMA (30s, resident) hugs a clipboard.
8 A RESPIRATORY THERAPIST BO LINDGREN (20s) leans on the counter.
9 A CHAPLAIN MIRIAM GOLD (60s) sits quietly in the corner.
10 D FAURE: Okay. Bed six stabilised, bed nine's weaning, bed eleven is the one I'm watching.
11 D ACHEBE: Eleven's sats have been drifting.
12 D TALAKAI: Ninety-one, ninety, ninety-one.
13 D VERMA: That's within range.
14 D FAURE: It's within range for a healthy infant. Not for this one.
15 D LINDGREN: I can bump the flow.
16 D FAURE: Do it. Slowly.
17 D GOLD: The parents asked if they could come in.
18 D FAURE: At four. If nothing changes.
19 D GOLD: They're afraid it will.
20 D FAURE: So am I.
21 A ¶ A pause.
22 A The monitors keep their quiet rhythm.
23 D ACHEBE: Everything looks calm.
24 D TALAKAI: That's what scares me.
25 A ¶ Behind them, a single alarm begins to sound.
26 A Soft, then not.
27 A Bed eleven.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00567.json
### SCENE s00567 | INT. DRAWBRIDGE CONTROL HOUSE - NIGHT
Detected names (may be incomplete or contain aliases): HARRIET LOCKWOOD, NATHANIEL BRIGHT
1 A ¶ A glass booth perched high above a river, lit by a desk lamp and a bank of switches.
2 A The bridge spans a quarter-mile of black water below.
3 A Cars queue on both sides, headlights fogged.
4 A A thermos, a paperback, a radio playing low jazz.
5 A ¶ HARRIET LOCKWOOD, 50s, a bridge tender in a cardigan, feet on the desk, reads by lamplight.
6 A Her hand rests on the control lever.
7 A ¶ The door bangs open.
8 A A gust of rain.
9 A ¶ NATHANIEL BRIGHT, 30s, soaked, panting, a pistol in one hand and a gym bag in the other, kicks the door shut and presses his back to it.
10 D NATHANIEL: Don't move.
11 D HARRIET (without looking up): I wasn't going to.
12 D NATHANIEL: Put the book down.
13 D HARRIET: It's a good book.
14 D NATHANIEL: Put it down!
15 A ¶ She marks her page with a bus ticket.
16 A Sets the paperback on the desk.
17 A Raises both hands.
18 D HARRIET: There. Happy?
19 D NATHANIEL: Raise the bridge.
20 D HARRIET: That's a lot of cars.
21 D NATHANIEL: I said raise it!
22 D HARRIET: There's an ambulance in that line, son. Third from the left.
23 A ¶ He looks.
24 A Through the glass, the pulsing blue of an ambulance in the waiting traffic.
25 A His arm wavers.
26 D NATHANIEL: I don't care.
27 D HARRIET: You do.
28 D NATHANIEL: Raise it, or I swear --
29 D HARRIET: You swear what?
30 A ¶ He steps forward.
31 A The gun shakes.
32 A She stays perfectly still, hands up, face calm.
33 D HARRIET [CONT'D] (to the room, gently): Everyone's safe up here, young man. It's only a bridge.
34 D NATHANIEL (to himself): Don't think. Don't think.
35 D HARRIET: Whoever's behind you, he's not coming for you here.
36 D NATHANIEL: Shut up.
37 D HARRIET: He's not that fast.
38 A ¶ Nathaniel lowers the gym bag.
39 A Unzips it with one hand.
40 A Money, packed tight.
41 A He closes it again, hard.
42 D NATHANIEL: Please. I'm asking.
43 D HARRIET: You're not asking. You're aiming.
44 D NATHANIEL: Then what do I do?
45 A ¶ She lowers her hands, slow.
46 A Reaches for the thermos.
47 A Pours a cup of coffee.
48 A Holds it out.
49 D HARRIET: You drink this.
50 D NATHANIEL: Are you crazy?
51 D HARRIET: Thirty-one years on this bridge. You're the fourth.
52 A ¶ He stares at the cup.
53 A The jazz plays on, a soft saxophone.
54 A Rain rattles the glass.
55 D NATHANIEL: ...What happened to the other three?
56 D HARRIET: One went to jail. One went home. One's the mayor.
57 A ¶ He laughs, one broken sound.
58 A His arm sinks.
59 D NATHANIEL: I'm not going to jail.
60 D HARRIET: You might.
61 D NATHANIEL: I can't.
62 D HARRIET: Then go home.
63 A ¶ Headlights flare across the booth.
64 A Sirens, far off, rising.
65 D NATHANIEL: They're coming.
66 D HARRIET: They're always coming.
67 A ¶ He takes the coffee.
68 A Sets down the gun on the desk beside the paperback.
69 A His hands shake so hard the cup rattles on the saucer.
70 D HARRIET [CONT'D]: Sit. You're dripping on my floor.
71 A ¶ He sits.
72 A She lowers the lever.
73 A Far below, the bridge begins to rise, a vast iron hinge turning against the night sky, and every car on both banks goes still.
74 D NATHANIEL: What are you doing?
75 D HARRIET: Giving the river a minute.
76 A ¶ The sirens grow.
77 A The bridge lifts.
78 A Two figures, the tender and the thief, sit side by side in the booth, drinking from the same thermos, listening to the jazz.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02332.json
### SCENE s02332 | INT. RUINED OPERA HOUSE - FIELD HOSPITAL - NIGHT
Detected names (may be incomplete or contain aliases): SISTER AGNIESZKA, SERGEANT HOLLIS BRANTLEY
1 A ¶ The stage is a ward.
2 A Cots under gilded boxes.
3 A Candles in wine bottles.
4 A Above, a painted ceiling of cherubs, half of it fallen onto the stalls.
5 A ¶ SISTER AGNIESZKA, 30s, moves between the cots with a basin and a rag.
6 A Her habit is gray with dust.
7 A She stops at the last bed.
8 A ¶ SERGEANT HOLLIS BRANTLEY, 20s, lies on the final cot.
9 A His left arm is bandaged to the shoulder.
10 A He has been awake for hours.
11 A ¶ She sets the basin down.
12 A He watches her wring the rag.
13 D BRANTLEY: Is it quiet out there?
14 D AGNIESZKA: It has been since midnight.
15 A ¶ He nods.
16 A She presses the cloth to his forehead, and he flinches, then lets her.
17 D BRANTLEY: You have a kind hand, Sister.
18 D AGNIESZKA: I have a tired hand.
19 A ¶ She smiles slightly.
20 A He almost does.
21 A The candle flames lean in a draft and straighten.
22 D BRANTLEY: I haven't heard a bomb in four hours.
23 D AGNIESZKA: Don't say it aloud.
24 D BRANTLEY: Why?
25 D AGNIESZKA: Because the building listens.
26 A ¶ He laughs, then winces.
27 A She adjusts the blanket.
28 A Her fingers brush the dog tags at his throat.
29 A She holds them a moment, turned to the candle.
30 A ¶ Her face does not change.
31 A Her hand does not move.
32 D AGNIESZKA [CONT'D] (quietly): Brantley.
33 D BRANTLEY: Yes?
34 D AGNIESZKA: That is an English name.
35 D BRANTLEY: It's my name.
36 A ¶ She lets go of the tags.
37 A Straightens.
38 A Takes up the basin.
39 D AGNIESZKA: I will bring you water.
40 D BRANTLEY: Sister, I'm in the right ward, aren't I?
41 A ¶ She stops.
42 A She does not turn.
43 D AGNIESZKA: It is the only ward there is.
44 A ¶ She walks away, careful not to hurry.
45 A At the proscenium she sets down the basin, steps behind the curtain, and presses her back to the wall.
46 A ¶ Her hand goes inside her habit.
47 A It comes out holding a pistol.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02517.json
### SCENE s02517 | INT. DAGUERREOTYPE STUDIO - DAY - 1843
Detected names (may be incomplete or contain aliases): ELIJAH THORNBURY, MISS CORNELIA PEMBERLEY
1 A ¶ A top-floor room in Boston.
2 A Skylight, white drapes, a posing chair with a headrest clamp.
3 A A wooden camera on a tripod.
4 A Silver plates in a rack.
5 A The smell of mercury and iodine.
6 A ¶ ELIJAH THORNBURY, 40s, in a stained frock coat, adjusts the camera with practiced fingers.
7 A MISS CORNELIA PEMBERLEY, 30s, in a black mourning dress and bonnet, stands in the doorway holding a small wrapped bundle.
8 D ELIJAH: Come in, miss.
9 D CORNELIA: Thank you.
10 D ELIJAH: You are the lady who wrote.
11 D CORNELIA: I am.
12 D ELIJAH: You said it was a portrait of a child.
13 A ¶ She enters.
14 A Her step is careful.
15 A She sets the bundle on the table beside the plates, and unfolds the cloth.
16 A A small girl, five years old, in a white christening gown, asleep.
17 A ¶ Elijah goes quiet.
18 A He wipes his hands on his coat.
19 D ELIJAH [CONT'D]: When?
20 D CORNELIA: Sunday.
21 D ELIJAH: I am sorry.
22 D CORNELIA: She never had a likeness made. I thought, if I could just. If you could.
23 D ELIJAH: I have done it before. It is not an easy thing.
24 D CORNELIA: I will pay double.
25 D ELIJAH: Miss Pemberley. I will not take your money.
26 A ¶ She nods.
27 A Her lips shake.
28 A She straightens the child's gown.
29 D CORNELIA: Where shall I put her?
30 A ¶ Elijah brings the posing chair into the light.
31 A He tilts the headrest.
32 A He kneels, and with great delicacy folds the little hands across the gown.
33 D ELIJAH: Here. Where the sun can find her.
34 A ¶ Cornelia stands beside him.
35 A He steps to the camera.
36 A Slides in the plate.
37 A She watches him without breathing.
38 D ELIJAH [CONT'D]: You must be very still, Miss Pemberley.
39 D CORNELIA: I will.
40 D ELIJAH: Even your breath.
41 D CORNELIA: I will not breathe.
42 A ¶ He removes the lens cap.
43 A They hold, the three of them, in the white light.
44 A The seconds pass.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00628.json
### SCENE s00628 | INT. LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): MARISOL, DESMOND, JUNIOR, TAMSIN, CONCEPCIÓN
1 A ¶ Dryers turning.
2 A Fluorescent hum.
3 A A broken vending machine.
4 A ¶ Five Hargrove-Delgados.
5 A One bench.
6 A ¶ GRANDMA CONCEPCIÓN, eighties, folds towels.
7 A Slow.
8 A ¶ Her daughter, MARISOL, fifties, scrolls her phone.
9 A Doesn't read it.
10 A ¶ MARISOL's husband, DESMOND, sixties, reads a newspaper upside down.
11 A Maybe on purpose.
12 A ¶ Their son, JUNIOR, twenty, headphones.
13 A Elsewhere.
14 A ¶ Their niece, TAMSIN, nine, counts quarters.
15 A Arranges them.
16 A Rearranges them.
17 D CONCEPCIÓN (to everyone): Almost done. Nobody move.
18 D JUNIOR: Nobody's moving, Abuela.
19 D MARISOL: Junior. Take those off.
20 A ¶ He doesn't.
21 A She sighs and goes back to her phone.
22 D DESMOND (muttering): Forty minutes for two towels.
23 D TAMSIN: Uncle Des, you're holding it wrong.
24 D DESMOND: It's fine.
25 A ¶ She takes it from him, turns it right side up.
26 A He nods, gravely.
27 D CONCEPCIÓN: Tamsin, mija, how many?
28 D TAMSIN: Eleven.
29 D CONCEPCIÓN: We need twelve.
30 A ¶ A pause.
31 A They all look at the machine.
32 A It hums back.
33 D MARISOL (to no one): We always need twelve.

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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00910.json
### SCENE s00910 | EXT. WINDMILL RANCH - WATER TROUGH - DUSK
Detected names (may be incomplete or contain aliases): SHERIFF BARNABAS TUCK, OLIVE STARKEY
1 A ¶ A tall iron windmill creaks in the failing light.
2 A A trough of dark water, a hitching post, a scatter of sleeping cattle on the hill.
3 A ¶ SHERIFF BARNABAS TUCK, 60s, stands with his hat in his hand, watering his horse.
4 A His badge is dull, his boots caked.
5 A ¶ He looks across the pasture.
6 A Far down the road, a lantern bobs.
7 D TUCK (to the horse): Visitors.
8 A ¶ The horse nickers.
9 A Tuck settles his hat and draws the rifle from its scabbard.
10 A The lantern grows.
11 A A buckboard emerges from the dusk, driven by OLIVE STARKEY, 40s, in a man's duster and a flat brim, a shotgun across her lap.
12 A ¶ She reins up twenty feet away.
13 D OLIVE: Evening, Sheriff.
14 D TUCK: Olive.
15 D OLIVE: You're off your range.
16 D TUCK: So are you.
17 D OLIVE: Not by my reckoning. This is my husband's ground.
18 D TUCK: Your husband's dead.
19 D OLIVE: Then it's mine.
20 A ¶ Wind in the iron blades.
21 A The cattle shift.
22 A Tuck lowers the rifle a few inches.
23 D TUCK (to the hills, tired): I'm too old for this.
24 D OLIVE: You were too old ten years ago.
25 D TUCK: Is that why you came? To tell me so?
26 D OLIVE: I came to ask you to leave.
27 D TUCK: I'll leave when I'm done.
28 D OLIVE: Done with what?
29 D TUCK: Looking at the water.
30 A ¶ She studies him a long moment.
31 A Then, slowly, she lays the shotgun in the bed of the buckboard and climbs down.
32 A She walks to the trough, kneels, and drinks from her cupped hands.
33 D OLIVE: It's good water.
34 D TUCK: It's the best in the county.
35 D OLIVE: He dug that well himself.
36 D TUCK: I know.
37 A ¶ She stands, wiping her palms on her duster.
38 A Tuck holsters the rifle.
39 D OLIVE: Stay for supper.
40 D TUCK: Is that an order?
41 D OLIVE: It's an apology.
42 A ¶ He smiles for the first time.
43 A The windmill turns, steady and patient, in the gathering dark.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00029.json
### SCENE s00029 | INT. AIR TRAFFIC CONTROL TOWER, SMALL REGIONAL AIRPORT - NIGHT
Detected names (may be incomplete or contain aliases): OZZIE, FAIRWEATHER, PRU, MARTIN ESPERANZA, JUNE TAKAHASHI, PILOT
1 A ¶ A glass-walled octagon above a dark runway.
2 A Radar scope glows green.
3 A A cold cup of coffee sits beside a ham sandwich with one bite out of it.
4 A ¶ OSWALD "OZZIE" FAIRWEATHER (60s, headset, cardigan) sits at the console, steady and unhurried.
5 A Next to him stands his granddaughter, PRUDENCE "PRU" FAIRWEATHER (17, school uniform, backpack), holding a notebook.
6 A She is supposed to be doing homework.
7 A She is not.
8 A ¶ Two others fill the cramped room.
9 A One is MARTIN ESPERANZA (30s, shift supervisor, tie loosened), who hovers over the radar.
10 A The other is a trainee, JUNE TAKAHASHI (19, apron over uniform, nervous), who clutches a clipboard.
11 D OZZIE: Pru, if you're going to watch, watch properly. Come around here.
12 D PRU: Grandpa, I'm fine.
13 D OZZIE: Come on.
14 A ¶ She steps beside him.
15 A He nods to the scope.
16 D OZZIE [CONT'D]: That blip is a Cessna. November-Four-Two-Seven. See how she drifts?
17 D PRU: Why?
18 D OZZIE: Crosswind. He's fighting it.
19 A ¶ Pru leans closer.
20 A Her breath fogs the glass.
21 D PILOT [V.O.] (over radio, crackling): Tower, Cessna Four-Two-Seven, ten miles out, requesting landing.
22 A ¶ Ozzie squeezes the mic.
23 D OZZIE (into radio): Four-Two-Seven, Tower, runway two-seven, wind two-six-zero at eighteen gusting twenty-five. Say your fuel state.
24 D PILOT [V.O.] (over radio): Tower, Four-Two-Seven, thirty minutes of fuel. We're good.
25 D MARTIN (muttering): Thirty minutes. In that wind.
26 D JUNE: Should I call the fire crew?
27 D MARTIN: Not yet.
28 A ¶ Ozzie hands the headset to Pru.
29 D PRU: Grandpa, no.
30 D OZZIE: Just say what I say. "Four-Two-Seven, cleared to land."
31 A ¶ She hesitates, then pulls the headset on.
32 A Her voice shakes.
33 D PRU (into radio): Four-Two-Seven, cleared to land.
34 D PILOT [V.O.] (over radio): Cleared to land, Four-Two-Seven. Who's this? You sound young.
35 D PRU: Um. I'm... training.
36 D PILOT [V.O.] (over radio): Good job, trainee. See you on the ground.
37 A ¶ Pru stares at her grandfather, wide-eyed.
38 A He chuckles and pats her shoulder.
39 D OZZIE: Eyes on the scope, Pru. That's the whole job.
40 A ¶ Below them, tiny landing lights wobble through the dark, steadying, lowering.
41 A They all watch it touch down.
