You classify screenplay action lines that have NO character as their agent, for a writing tool.
Every line in the script must belong somewhere, so each marked line (`*`) gets exactly one kind:

- `setting`  : the place, scenery, light, weather, time of day, what a space looks/sounds like as a whole
               ("A cramped kitchen.", "Rain hammers the windows.", "Dawn over the harbor.", "Silence.")
- `event`    : something happens or an object/sound/vehicle/machine acts, with no character doing it
               ("The phone rings.", "A car backfires outside.", "Cash.", "The door swings shut.", "A light blinks.")
- `extra`    : done by people or creatures who are NOT characters of the scene (unnamed passers-by, a crowd that
               is not in the names list, an animal, a monster) ("A waiter passes.", "Two women lean on its bumper.")
- `camera`   : shot, edit or on-screen-text directions ("CLOSE ON the letter.", "We see...", "INSERT - phone",
               "SUPER: 1999", "Back to scene.", "INTERCUT", "Time cut.")
- `abstract` : narration, reflection, commentary, theme, time passing, things that are not visible action
               ("Some wounds never close.", "Years pass.", "This is the last time they will speak.")
- `character`: actually done by / describing a character in the names list (the marking was wrong). Then also give
               the name(s).

Units: `A` = action sentence (¶ = first sentence of a paragraph), `D` = dialogue block. Only `*` lines need a label;
the rest is context.

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusKT/group_0048.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01564 | EXT. LIFE RAFT - OPEN OCEAN - DAY
Detected names (may be incomplete or contain aliases): LEILA ACHEBE-KOWALCZYK, ANSELM ODUYA-FENWICK, SOLENE BRZEZINSKI-OKORO, CAPTAIN ELWOOD NNAMDI-LINDQVIST, KIT ADEBAYO-HART
* 1 A ¶ A yellow raft on flat grey water.
* 2 A A torn canopy flaps.
* 3 A The horizon is empty.
4 A ¶ Five survivors share the space.
5 A ¶ LEILA ACHEBE-KOWALCZYK, 30s, ties a rag to an oar.
6 A ANSELM ODUYA-FENWICK, 40s, bails with a cut-off bottle.
7 A SOLENE BRZEZINSKI-OKORO, 20s, hugs her knees.
8 A Old CAPTAIN ELWOOD NNAMDI-LINDQVIST, 60s, fingers a rosary.
9 A And little KIT ADEBAYO-HART, 12, lies curled in the middle.
10 D LEILA: Eight days.
11 D ANSELM: Nine.
12 D LEILA: Eight.
13 D ANSELM: She counted the first night as one.
14 D SOLENE: I didn't count.
15 D ELWOOD: Nine, then.
16 A ¶ Anselm bails.
* 17 A Water arcs over the side.
* 18 A No one speaks.
19 D KIT (whisper): Is it going to rain?
20 D SOLENE: No.
21 D KIT: How do you know?
22 D SOLENE: I don't.
23 D LEILA: Don't tell him that.
24 D ANSELM: Why not? It's true.
25 D LEILA: Because he's twelve.
26 A ¶ Elwood turns a bead.
27 A Mouths a word.
28 A Solene watches the rosary as if it might answer.
29 D SOLENE: Captain. Are we drifting?
30 D ELWOOD: North.
31 D SOLENE: Towards what?
32 D ELWOOD: Towards nothing.
33 A ¶ Anselm stops bailing.
34 A Stares at the water.
35 D ANSELM: There's a shadow.
36 D LEILA: Where?
37 D ANSELM: Under us.
38 A ¶ They all lean.
* 39 A A long dark shape slides beneath the raft, then another.
40 A Leila grips Kit's shoulder.
41 A Anselm lifts the bottle like a weapon.
42 A Elwood closes his eyes.
43 D SOLENE (whisper): Don't look.
44 D KIT: Why?
45 D SOLENE: Because it looks back.
* 46 A ¶ The shapes pass.
* 47 A Water laps.
* 48 A The raft rocks, gently, and settles.
49 D LEILA: Dolphins.
50 D ANSELM: Sharks.
51 D LEILA: Dolphins, Anselm.
52 D ANSELM: Fine. Dolphins.
53 A ¶ Kit laughs, small, cracked.
54 A Elwood opens his eyes and looks at the sky, where a thin line of cloud has appeared in the east.

### SCENE s01565 | INT. ROOFTOP GREENHOUSE RESTAURANT - NIGHT
Detected names (may be incomplete or contain aliases): ARCHIE, ISADORA ADEYEMI-VANCE, THAD, KOWALCZYK-OSEI, MADAME LUCRETIA FAIRWEATHER-NNAMDI
* 1 A ¶ A glass pavilion on top of a skyscraper.
* 2 A Tomato vines climb strings overhead.
* 3 A Candles on white tablecloths.
* 4 A The city glitters below like spilled sequins.
* 5 A Only one table is occupied.
6 A ¶ At it sit four people.
7 A ¶ ARCHIBALD "ARCHIE" ADEYEMI-VANCE, 60s, silver hair, bespoke suit, ring on every finger.
8 A He swirls wine and watches no one.
9 A ¶ His daughter, ISADORA ADEYEMI-VANCE, 30s, in a red dress, sits straight, hands on the cloth.
10 A Her smile is not a smile.
11 A ¶ Opposite her, THADDEUS "THAD" KOWALCZYK-OSEI, 40s, a lawyer, loosens his tie and sweats.
* 12 A His briefcase rests under his chair.
13 A ¶ And at the head, quiet as a stone: MADAME LUCRETIA FAIRWEATHER-NNAMDI, 70s, black lace gloves, who has not spoken since the soup.
14 D ARCHIE: The tomatoes are from the vine above us.
15 D THAD: Impressive.
16 D ISADORA: He says that every year.
17 D ARCHIE: Because it's true every year.
18 D LUCRETIA (softly): The knife, Archibald.
19 A ¶ Archie glances at the steak knife by his plate.
20 A Slowly pushes it away from him.
21 D ARCHIE: Of course.
22 D THAD: Mr. Adeyemi-Vance, if we could return to the papers--
23 D ISADORA: Papers.
24 D THAD: The transfer of shares.
25 D ARCHIE: After dessert.
26 D ISADORA: ^After dessert, Thad. Always after dessert.
27 A ¶ Neither of them looks at the other.
28 A Lucretia lifts a finger, and the candles flicker as a gust finds the vents.
29 D LUCRETIA: My late husband built this building. On a handshake.
30 D THAD: So I've heard.
31 D LUCRETIA: He would have disliked the tomatoes.
32 D ARCHIE: Lucretia, we all have our vices.
33 D LUCRETIA: Yours cost him forty million.
* 34 A ¶ Silence.
* 35 A A tomato vine sways.
36 A Archie sets down his glass.
37 A Isadora folds her napkin into a neat square.
38 A Thad reaches under his chair for the briefcase.
39 D THAD: Madame, I'm only here to--
40 D LUCRETIA: Sit, young man.
41 A ¶ He sits.
42 D LUCRETIA [CONT'D]: Isadora, my dear. You may open the window.
43 D ISADORA: Which one?
44 D LUCRETIA: The big one.
45 A ¶ Isadora rises.
46 A Crosses to the glass wall.
47 A Flips a latch.
* 48 A A section slides back and night air pours in, cold and loud with traffic far below.
49 D ARCHIE: What are you doing?
50 D ISADORA: Letting in a draught.
51 A ¶ She returns to the table.
52 A Resumes her seat.
53 A Takes the steak knife from beside her father's plate and lays it across her own, perfectly aligned.
54 D LUCRETIA: Archibald. The papers.
55 A ¶ Archie's mouth tightens.
56 A He reaches into his jacket, draws out a folded envelope, and slides it across the cloth.

### SCENE s01566 | EXT. THE GLASS DESERT - DAWN
Detected names (may be incomplete or contain aliases): WARDEN SALT, OPPOSITE HER, WILLA, FAIRWEATHER-ACHEBE
* 1 A ¶ A vast plain of fused sand, smooth as a frozen sea.
* 2 A Wind carves ripples in the surface.
* 3 A The sky is a bruise of peach and violet.
* 4 A Far off, a ridge of black towers rises like broken teeth.
5 A ¶ Two figures stand on the glass.
* 6 A Each throws a long shadow.
7 A ¶ THE WARDEN OF SALT, tall, gaunt, draped in a cloak of white crystals, holds a staff topped with a clouded lens.
* 8 A Where her feet touch the glass, small stars of frost bloom.
9 A ¶ OPPOSITE HER, a girl: WILHELMINA "WILLA" FAIRWEATHER-ACHEBE, 15, in a patched travelling coat, a leather satchel across her chest.
10 A She carries a lantern whose flame is a deep, steady blue.
11 D WARDEN: You are a long way from the green.
12 D WILLA: I had a reason.
13 D WARDEN: Everyone does.
14 D WILLA: Mine is better.
15 A ¶ The Warden tilts her head.
* 16 A The crystals on her cloak chime.
17 D WARDEN: Show me.
18 A ¶ Willa lifts the lantern.
* 19 A The blue flame flares.
* 20 A Across the glass, a hundred feet away, a patch of sand ripples and darkens, as though something beneath it has turned over in its sleep.
21 D WARDEN [CONT'D] (a long breath): Who gave you that?
22 D WILLA: My grandmother.
23 D WARDEN: Where is she?
24 D WILLA: Under the sand.
25 D WARDEN: I do not take the dead.
26 D WILLA: She said you'd say that.
27 A ¶ The Warden raises her staff.
* 28 A The lens clears.
* 29 A In it, a swirl of tiny figures: a woman in a shawl, a child on her knee, an old man laughing, all spinning slowly.
30 D WILLA [CONT'D] (whispering): That's her.
31 D WARDEN: So it is.
32 D WILLA: Let her go.
33 D WARDEN: She is not mine to release.
34 D WILLA: Then whose?
35 A ¶ The Warden looks past the girl at the black towers.
* 36 A Wind rattles the crystals on her cloak.
37 D WARDEN: Theirs.
38 D WILLA: The Silent Court.
39 D WARDEN: You know the name.
40 D WILLA: I know all the names. She taught me.
41 A ¶ Willa steps forward.
* 42 A The lantern's blue light spills across the glass, and where it touches, cracks race out in glittering fans.
43 A The Warden stumbles back a half step.
44 D WARDEN: Careful. This ground is old.
45 D WILLA: So am I.
46 D WARDEN: You are fifteen.
47 D WILLA: I've been fifteen a long time.
48 A ¶ They stand.
* 49 A The wind drops.
* 50 A Even the cracks stop whispering.
51 D WARDEN: What will you give?
52 D WILLA: What do you ask?
53 D WARDEN: A season of your life.
54 D WILLA: Which season?
55 D WARDEN: Spring.
56 A ¶ Willa's face does not change.
57 A Her hand tightens on the lantern.
58 D WILLA: Why spring?
59 D WARDEN: Because it is when you were meant to bloom.
60 D WILLA: And in exchange?
61 D WARDEN: One hour with her. No more.
62 D WILLA: An hour.
63 D WARDEN: Under the sand. Where she sleeps.
64 A ¶ Willa looks at the blue flame.
65 A At the towers.
66 A At the lens, where a tiny woman raises her small hand.
67 D WILLA (to herself): One hour.
68 D WARDEN: Choose.
69 D WILLA: I choose.
70 D WARDEN: Speak it.
71 A ¶ At the same moment, in the same breath, both of them whisper a single word.
72 D WILLA: Yes.
73 D WARDEN: Yes.
* 74 A ¶ The glass shudders.
* 75 A A wide circle of the desert floor turns clear as water, and beneath it, deep down, a long stair descends into lamplight.
76 A ¶ The Warden steps aside.
77 A She sweeps one crystalled arm toward the opening.
78 A Willa walks forward, lantern held before her.
* 79 A Frost blooms behind her heels.
80 A ¶ At the edge of the clear circle she pauses.
81 A Does not turn.
82 D WILLA [CONT'D]: Warden. Will it hurt?
83 D WARDEN: Only when you climb back up.
84 A ¶ Willa nods.
85 A Takes the first step down.
86 A The Warden stands alone on the glass, her staff planted, the wind picking up again, until the girl's blue light shrinks to a point and winks out.

### SCENE s01567 | INT. VILLA TERRACE - DUSK
Detected names (may be incomplete or contain aliases): SIGNORA CATERINA BELLINI-OKORO, FRANCIE, HARL, PERPETUA ACHEBE-LINDQVIST, THEO FAIRWEATHER-KOWALCZYK, TILDA, ODUYA-HART
* 1 A ¶ A hilltop villa in the Italian lakes.
* 2 A Terracotta pots spilling bougainvillea.
* 3 A Fairy lights strung between lemon trees.
* 4 A Below, the lake lies like polished pewter.
* 5 A A long table is laid for a wedding rehearsal dinner.
6 A ¶ At the head of it, SIGNORA CATERINA BELLINI-OKORO, 60s, in emerald silk, directs two waiters with small, imperious flicks of her wrist.
7 A Beside her sits her daughter, the bride-to-be, FRANCESCA "FRANCIE" BELLINI-OKORO, 28, in a cream wrap, twisting a glass.
8 A ¶ The groom, HARLAN "HARL" ACHEBE-LINDQVIST, 30, rakish in rolled sleeves, leans back with a grin.
9 A His best man, THEO FAIRWEATHER-KOWALCZYK, 31, ties a napkin round his own head as a joke.
10 A Harl's mother, MRS. PERPETUA ACHEBE-LINDQVIST, 55, small, hawk-eyed, sits upright, her handbag clutched on her lap.
11 A And last, perched on the balustrade like a bird, is Francie's friend ROSALIND "TILDA" ODUYA-HART, 28, bridesmaid, sandals dangling.
12 D CATERINA: Glasses!
13 A ¶ Everyone obeys.
* 14 A Waiters pour prosecco.
15 D HARL: Francie, my love.
16 D FRANCIE: My love.
17 D THEO (muffled by napkin): I object.
18 D TILDA: Theo, you're not the officiant.
19 D THEO: I'm practising.
20 D PERPETUA: Harlan. Sit up straight.
21 D HARL: Mama, I am.
22 D PERPETUA: You slouch like your father.
23 D CATERINA: Perpetua, a toast!
24 D PERPETUA: I don't make toasts.
25 D CATERINA: Then I will.
26 A ¶ She rises.
27 A Everyone else half-rises in sympathy and sinks again.
28 D CATERINA [CONT'D]: To my daughter, and to this boy who has the grace to look frightened.
29 D HARL: I'm not frightened.
30 D THEO: You're a little frightened.
31 D TILDA: You're green.
32 D HARL: It's the lighting.
33 A ¶ Francie reaches for his hand.
34 A Harl takes it.
35 A They are both smiling too widely.
36 A Perpetua studies them over the rim of her glass.
37 D PERPETUA (dry): Marriage is a long road.
38 D CATERINA: And a longer lunch.
39 A ¶ The table laughs.
* 40 A The tension lifts.
* 41 A Then, from the villa's terrace door, a clatter.
* 42 A ¶ A caterer's tray crashes.
* 43 A Cannoli skid across the stones.
44 A Everyone turns.
45 A ¶ In the doorway stands a man in a white jacket, a stranger, looking stricken.
* 46 A Behind him a second tray tilts, shuddering.
47 D THEO: Everyone, down!
* 48 A ¶ Chaos.
49 A Theo dives under the table with his napkin still on his head.
50 A Tilda leaps off the balustrade.
51 A Perpetua rises, handbag swinging like a flail.
52 A Caterina barks at the waiters.
53 A Francie and Harl, startled, collapse into each other, upsetting a candelabrum.
* 54 A Prosecco sprays.
55 A The caterer drops to his knees, scrabbling for pastry.
56 D CATERINA [CONT'D] (over the din): Enough! Enough!
* 57 A ¶ Silence falls.
* 58 A A single cannolo rolls to a stop at Perpetua's foot.
59 A ¶ She picks it up.
60 A Examines it.
61 A Bites.
62 D PERPETUA (chewing): Not bad.
63 A ¶ The terrace erupts in laughter.
64 A Harl kisses Francie.
65 A Tilda applauds.
66 A Theo emerges from under the table, napkin crooked.
67 D THEO: Did I miss the vows?
68 D CATERINA: Not yet, caro. Sit.
69 A ¶ The waiters refill glasses.
* 70 A The lights twinkle.
* 71 A Below them, the lake darkens, and one by one, the lamps of the far shore come on.

### SCENE s01568 | INT. NIGHT TRAIN SLEEPER COMPARTMENT - NIGHT
Detected names (may be incomplete or contain aliases): WENDELL ODUYA-FENWICK, CLEMENTINE ACHEBE-LINDQVIST, LAVINIA BELLINI-OKORO, ANATOLE KOWALCZYK-ADEYEMI
* 1 A ¶ Rhythmic clatter.
* 2 A A reading lamp swings on its hook.
* 3 A Rain streaks the window.
* 4 A Two bunks, one folded away.
5 A ¶ WENDELL ODUYA-FENWICK, 40s, sits by the window in shirtsleeves, tie loosened.
6 A His wife CLEMENTINE ACHEBE-LINDQVIST, 40s, on the bunk, braids her hair without looking.
7 A ¶ Her sister LAVINIA BELLINI-OKORO, 30s, stands in the doorway with a suitcase.
8 A And a conductor, ANATOLE KOWALCZYK-ADEYEMI, 50s, hovers in the corridor, punching tickets.
9 A ¶ He glances at the others.
10 A She doesn't glance back.
11 A They have not spoken for a long time.
12 D LAVINIA: Is there room?
13 D CLEMENTINE: There's always room.
14 D LAVINIA: For a suitcase?
15 D WENDELL: For a suitcase, yes.
16 A ¶ She enters.
17 A He shifts.
18 A Their knees brush.
19 A He pulls his away.
20 D ANATOLE: Tickets, please.
21 A ¶ He punches two.
22 A Hesitates at the third.
23 A Clementine hands it over without a word.
24 A He nods, moves on.
* 25 A ¶ The door slides shut.
* 26 A The train rocks.
27 A Lavinia sits on the lower bunk, opposite Clementine.
28 D LAVINIA: You look tired.
29 D CLEMENTINE: You look thin.
30 D LAVINIA: I've been travelling.
31 D CLEMENTINE: So have we.
32 D WENDELL: Where to?
33 D LAVINIA: Anywhere with a sea.
34 D CLEMENTINE: There's a sea at the end of this line.
35 D LAVINIA: That's what I heard.
36 D WENDELL: Who told you?
37 D LAVINIA: A man at the station. He said the sea turns green in September.
38 D CLEMENTINE: It does.
39 D LAVINIA: Have you seen it?
40 D CLEMENTINE: Once. A long time ago.
41 D WENDELL: With me.
42 D CLEMENTINE: With you.
* 43 A ¶ A pause.
* 44 A The train sways.
45 A Lavinia looks at her hands.
46 A Wendell looks at the rain.
47 A Clementine finishes the braid and ties it off.
48 D LAVINIA: I should have written.
49 D CLEMENTINE: You should have.
50 D LAVINIA: I'm sorry.
51 D CLEMENTINE: So am I.
52 D WENDELL: Shall I open a window?
53 D LAVINIA: It's raining.
54 D WENDELL: It's close in here.
55 D CLEMENTINE: Leave it.
56 D WENDELL: All right.
57 D LAVINIA: I met someone.
58 D CLEMENTINE: Good.
59 D LAVINIA: It didn't end well.
60 D CLEMENTINE: They rarely do.
61 D WENDELL: Clementine.
62 D CLEMENTINE: What? It's true.
63 D LAVINIA: No, she's right. They don't.
64 D WENDELL: Do you want tea?
65 D LAVINIA: Please.
66 A ¶ He rises.
67 A Opens the door.
68 A Disappears into the corridor.
69 A The two sisters sit across from each other, alone, the rain tapping the glass.
70 D CLEMENTINE: He's changed.
71 D LAVINIA: Has he?
72 D CLEMENTINE: He lets me braid my own hair.
73 A ¶ They share a smile.
74 A Small.
75 A Then bigger.
76 A Lavinia wipes her eye with the back of her hand.
77 D LAVINIA: I missed you.
78 D CLEMENTINE: I know.
79 A ¶ She reaches across, pulls her sister close, and holds her.
80 A Over Lavinia's shoulder she watches the door.
81 A ¶ Wendell returns with three cups.
82 A He stops in the doorway, sees them.
83 A Sets the tray down gently on the bunk and quietly steps back out.

### SCENE s01569 | EXT. FLOODED RICE PADDY - NIGHT
Detected names (may be incomplete or contain aliases): GUS, ADEBAYO-KOWALCZYK, TEDDY, FAIRWEATHER-LINDQVIST, PRIVATE MARCEL BELLINI-OKORO, IGGY, NNAMDI-HART, RADIO
* 1 A ¶ Moonlight on black water.
* 2 A A burned-out watchtower.
* 3 A Reeds rustle.
* 4 A Distant artillery thumps.
5 A ¶ Four soldiers wade in a ragged line.
6 A ¶ SERGEANT AUGUSTINE "GUS" ADEBAYO-KOWALCZYK, 40s, point man, signals with a fist.
7 A CORPORAL THEODORA "TEDDY" FAIRWEATHER-LINDQVIST, 20s, carries a radio on her back.
8 A PRIVATE MARCEL BELLINI-OKORO, 19, shivers, rifle held high.
9 A And MEDIC IGNATIUS "IGGY" NNAMDI-HART, 30s, limps, red cross faded on his sleeve.
10 A ¶ They stop.
11 A Listen.
* 12 A The reeds sigh.
13 D GUS (whisper): Hold.
14 D TEDDY: Sarge?
15 D GUS: Quiet.
16 D MARCEL: I hear something.
17 D IGGY: It's the water.
18 D MARCEL: It's footsteps.
19 D GUS: Both of you shut it.
* 20 A ¶ A twig snaps ahead.
21 A All four freeze.
* 22 A A flare arcs overhead and bursts, white, turning the paddy to a lit stage.
23 A The soldiers dive into the water, sinking to their chests.
* 24 A ¶ Silence.
* 25 A The flare drops.
* 26 A Darkness.
27 D RADIO [V.O.] (crackling): Falcon Two, this is Base. Report.
28 A ¶ Teddy grabs the handset, whispers back.
29 D TEDDY: Base, we have contact. Grid four-seven.
30 D RADIO [V.O.]: Say again.
31 D TEDDY: Contact, four-seven! Repeat, contact!
* 32 A ¶ A crack of gunfire.
* 33 A Muzzle flashes stitch the reeds.
34 A Marcel screams.
35 A Gus hurls himself on top of him, pushing him under the water as bullets zip past.
36 A Iggy crawls toward them, pulling a bandage from his pack.
37 A Teddy returns fire blindly.
38 D GUS: Marcel! Marcel!
39 D MARCEL (spluttering): I'm okay! I'm okay!
40 D IGGY: You're hit.
41 D MARCEL: Where?
42 D IGGY: Shoulder.
43 D GUS: Can he move?
44 D IGGY: He'll have to.
45 D RADIO [V.O.]: Falcon Two, hold your position. Air support inbound.
46 D TEDDY (shouting): How long?
47 D RADIO [V.O.]: Four minutes.
48 D GUS: Four minutes. We can do four minutes.
49 A ¶ Teddy and Gus exchange a look.
50 A Gus drags Marcel behind the burned tower.
51 A Iggy follows, hands slick.
52 A Teddy lays down fire in short, disciplined bursts.
53 D IGGY: Hold him.
54 D GUS: Got him.
55 A ¶ Iggy tears the sleeve.
56 A Packs the wound.
57 A Marcel groans.
58 D MARCEL: Sarge, I'm sorry.
59 D GUS: For what?
60 D MARCEL: I made noise.
61 D GUS: We all make noise, son.
* 62 A ¶ Gunfire slackens.
63 A Teddy ducks back, breathing hard.
64 D TEDDY: They're pulling back.
65 D GUS: Or flanking.
66 D IGGY: Which?
67 D GUS: Doesn't matter.
* 68 A ¶ A drone in the sky, deep and growing.
69 A All four look up.
* 70 A Dark shapes sweep over the moon.
71 D TEDDY (whispering): That's ours.
* 72 A ¶ Fire blooms along the treeline.
* 73 A The earth shakes.
74 A The soldiers cling to each other behind the tower, water streaming from their faces, laughing and crying at once.
75 D RADIO [V.O.]: Falcon Two, are you still with us?
76 A ¶ Gus takes the handset from Teddy.
77 D GUS (into the radio): Base, Falcon Two. All four. We're still here.

### SCENE s01570 | INT. TAXIDERMY SHOP - BACK ROOM - DAWN
Detected names (may be incomplete or contain aliases): INSPECTOR ADAEZE OKAFOR, ELIAS VANTERPOOL
* 1 A ¶ Glass eyes.
* 2 A Hundreds.
* 3 A Foxes, owls, one bewildered ostrich.
4 A ¶ INSPECTOR ADAEZE OKAFOR (50s, raincoat, tired eyes) stands over a workbench.
* 5 A A half-stuffed heron.
* 6 A Fresh stitches.
7 A ¶ ELIAS VANTERPOOL (60s, apron, ink-stained thumbs) wipes his hands.
8 A Slowly.
9 A Too slowly.
10 D OKAFOR: Nice heron.
11 D ELIAS: Customer's. Collects Thursday.
12 D OKAFOR: Thursday.
13 A ¶ She lifts the heron's wing.
14 A Peers inside.
15 A Sets it down.
16 D OKAFOR [CONT'D]: Mr. Vanterpool, where were you Sunday night?
17 D ELIAS: Here. Working.
18 D OKAFOR: Alone?
19 D ELIAS: Always alone. Animals don't gossip.
20 D OKAFOR: Mrs. Delacroix did. Before she vanished.
21 D ELIAS: Mrs. Delacroix gossiped about everyone.
22 D OKAFOR: She said you kept a second ledger.
23 D ELIAS: Everyone keeps a second ledger.
24 D OKAFOR: Not everyone keeps it inside a badger.
* 25 A ¶ Silence.
26 A Elias glances at the shelf.
27 A Okafor follows his look.
28 A Back to him.
29 D ELIAS: You've no warrant.
30 D OKAFOR: Door was open.
31 D ELIAS: Door was closed.
32 D OKAFOR: Then someone opened it. Funny, that.
33 D ELIAS: Get out of my shop.
34 D OKAFOR: She paid you for the badger. Didn't she? Forty years of payments. For something that isn't a badger at all.
35 D ELIAS: Get out.
36 D OKAFOR: Where is she, Elias?
37 A ¶ Elias lunges for the shelf.
38 A Okafor tackles him.
39 A They crash into the workbench.
* 40 A The heron topples.
* 41 A Glass eyes rattle.
42 A ¶ They roll.
43 A Elias grabs a scalpel.
44 A Okafor pins his wrist.
45 A They freeze, nose to nose, breath ragged.
* 46 A ¶ The badger falls from the shelf.
* 47 A Splits open.
* 48 A Paper spills across the floor.
49 A ¶ Both stare at it.
50 A Neither moves.

### SCENE s01571 | INT. LIGHTHOUSE KEEPER'S KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): HESTER VOSS, LAURENTIU PAVEL, BRIDGET MACALLISTER, OLD TOMAS, YUKI HARADA
* 1 A ¶ A squat stone room at the foot of the tower, where the wind finds every crack and hums through it like a held note.
* 2 A A kettle ticks on the iron stove.
* 3 A Rain slides down the single porthole window in slow, deliberate lines.
4 A ¶ Around a scarred table sit five people, none of whom wanted to be here.
5 A ¶ HESTER VOSS (60s, the keeper, a face weathered to driftwood) watches her guests over the rim of a chipped mug.
6 A ¶ DR. LAURENTIU PAVEL (40s, rumpled tweed, a physician's patient stillness) turns his hat in his hands.
7 A ¶ BRIDGET MACALLISTER (30s, sharp-eyed, a ferry clerk's ink on her cuffs) taps a pencil against a ledger.
8 A ¶ OLD TOMAS (70s, a retired fisherman, hands like knotted rope) stares at the stove.
9 A ¶ YUKI HARADA (20s, damp from the crossing, a satchel clutched to her chest) sits closest to the door.
10 D HESTER: The lamp went dark at nine. Somebody put it out.
11 D PAVEL: The storm could have done it.
12 D HESTER: The storm doesn't carry a key.
13 A ¶ Bridget stops tapping.
14 A Tomas looks up from the stove.
15 D BRIDGET: Only you have a key, Hester.
16 D HESTER: And Dr. Pavel borrowed it Tuesday. For his patient up the tower.
17 D PAVEL: I returned it Wednesday.
18 A ¶ Yuki's satchel creaks as she shifts.
19 D YUKI: Why is everyone looking at me?
20 D TOMAS (muttering): Because she came on the last boat, and the last boat is the one that always brings trouble.
21 A ¶ Hester sets down her mug.
22 A She and Bridget lock eyes across the table.
23 A Bridget stands and Hester stands with her, chairs scraping stone.
24 D BRIDGET: She kept the ledger. She knew what the ferry carried.
25 D HESTER: She knew what you let it carry.
26 A ¶ Pavel rises between them.
* 27 A The wind howls.
* 28 A The porthole rattles in its frame.
* 29 A ¶ Above them, from the black of the tower stair, a slow, heavy footstep.
* 30 A ¶ Then another.

### SCENE s01572 | INT. LAUNDROMAT - SUNDAY AFTERNOON
Detected names (may be incomplete or contain aliases): PRIYA NAIR, DEV, STRANGER, KOFI, ABERNATHY
* 1 A ¶ Yellow light.
* 2 A Eight dryers turning.
* 3 A A wall of mismatched plastic chairs, a cracked vending machine selling tiny detergent boxes.
4 A ¶ PRIYA NAIR (40s, scrubs, hair in a clip) folds towels with military precision.
5 A Her son DEV (9, oversized hoodie) sits on a dryer, swinging his legs.
6 A ¶ Beside him, a boy of fifteen slouches over a phone.
7 A He is a STRANGER to Priya.
8 A Headphones, buzz cut, one untied shoe.
9 D DEV: Mom, he says he's my cousin.
10 D PRIYA: You don't have a cousin here.
11 D STRANGER: I'm Kofi. Aunt Lena's kid. From Accra.
12 A ¶ Priya stops folding.
13 D PRIYA: Lena's boy? You were this tall.
14 D KOFI: Yeah. I grew.
15 A ¶ Dev kicks the dryer door gently.
* 16 A A sock thumps inside.
17 A ¶ An elderly woman, MRS. ABERNATHY (80s, cardigan, a cart of laundry), wheels past and nods at all three.
18 D MRS. ABERNATHY: Lovely family.
19 D PRIYA (smiling, tired): Thank you.
20 A ¶ Kofi pulls off his headphones.
21 D KOFI: Mom's going to call you tonight. She wants me to stay a week.
22 D PRIYA: We'll make room.
23 A ¶ Dev grins.
* 24 A The dryers keep turning.

### SCENE s01573 | INT. GRAIN ELEVATOR CONTROL ROOM - NIGHT
Detected names (may be incomplete or contain aliases): NADIA KOWALCZYK, DISPATCH, MARCUS TREVELYAN
* 1 A ¶ Concrete.
* 2 A Steel.
* 3 A A wall of dead monitors.
* 4 A One lit.
5 A ¶ NADIA KOWALCZYK (30s, hard hat, dust in her braid) crouches at a console.
6 A Headset on.
7 A A flashlight clamped in her teeth.
8 A ¶ She types.
9 A Stops.
10 A Types.
* 11 A ¶ On the monitor: a progress bar.
* 12 A 71%.
* 13 A ¶ The radio on the desk crackles.
14 D DISPATCH [V.O.] (through static): Kowalczyk, status.
15 D NADIA (into headset): Almost in.
16 D DISPATCH [V.O.]: Plant manager's asking. He says the auditors arrive at six.
17 D NADIA: Tell him the auditors can wait.
18 D DISPATCH [V.O.]: He says the auditors can't.
19 A ¶ She pulls the flashlight from her mouth.
* 20 A 84%.
21 D NADIA: Then tell him the numbers are wrong. Tell him the silo three weights have been wrong since March.
22 D DISPATCH [V.O.]: Repeat?
23 A ¶ She says nothing.
* 24 A 96%.
* 25 A ¶ Somewhere below, a heavy door booms shut.
26 A Nadia freezes.
27 A Kills the flashlight.
* 28 A ¶ Footsteps on the steel stairs.
* 29 A Slow.
* 30 A Unhurried.
* 31 A ¶ The door handle turns.
32 A ¶ MARCUS TREVELYAN (50s, plant manager, pressed shirt, no hard hat) steps in.
33 A He holds a clipboard.
34 A He smiles.
35 D MARCUS: Working late.
36 D NADIA: Just routine.
37 D MARCUS: On a Sunday. At two in the morning.
* 38 A ¶ The radio crackles.
39 D DISPATCH [V.O.]: Kowalczyk? You still there?
40 A ¶ Marcus crosses to the radio.
41 A Switches it off.
* 42 A The room goes silent but for the console fan.
* 43 A ¶ On the monitor: 99%.
44 A ¶ Nadia's hand drifts to a wrench on the desk.
45 D MARCUS [CONT'D]: Step away from the keyboard, Nadia.
46 A ¶ She doesn't.
47 A ¶ He drops the clipboard.
48 A Lunges.
49 A ¶ The wrench swings.
* 50 A The monitor flashes: 100%.

### SCENE s01574 | EXT. FLOODED RICE PADDY - DAWN
Detected names (may be incomplete or contain aliases): DOYLE, CORPORAL RAFAEL ORTEGA, PRIVATE EZRA FINCH, LIEUTENANT HIROSHI TANAKA
* 1 A ¶ Mist hangs low over water the color of tin.
* 2 A A broken irrigation sluice stands like a gallows in the middle distance.
3 A ¶ Four soldiers crouch behind a mud dike, helmets slick with rain.
4 A ¶ SERGEANT WALTER "BUCK" DOYLE (40s, square jaw, a face carved for recruiting posters) scans the treeline through field glasses.
5 A ¶ CORPORAL RAFAEL ORTEGA (20s, radio on his back, quick to smile) fiddles with a dial.
6 A ¶ PRIVATE EZRA FINCH (19, freckled, rifle held too tightly) shivers beside him.
7 A ¶ LIEUTENANT HIROSHI TANAKA (30s, Nisei interpreter, spectacles taped at the hinge) kneels apart, a map folded in his gloved hands.
8 D DOYLE: Quiet, all of you.
9 D ORTEGA: I'm just saying, Sarge, the set's dead. Nothing but static.
10 D FINCH: Maybe they're jamming it.
11 D TANAKA: They aren't. The transmitter's been underwater since the rains.
12 D DOYLE: I said quiet.
13 D FINCH: Sarge, I think I saw something move.
14 D ORTEGA: Where?
15 D TANAKA: Left of the sluice. Don't point.
16 D DOYLE: Finch, stay down. Ortega, forget the radio. Lieutenant, how far to the ridge?
17 D TANAKA: Two kilometers across open water.
18 D ORTEGA: Open water. Swell.
19 D FINCH: I can't swim so good.
20 D DOYLE: You can wade.
* 21 A ¶ Across the paddy, a rooster crows.
22 A Everyone freezes.
23 A Then, from the treeline, a woman's voice calls out in a tongue none of them knows.
24 D TANAKA (low): She says to come in. She says it is safe.
25 D DOYLE: Do you believe her?
26 D TANAKA: No.
27 D ORTEGA: Then why are you smiling?
28 D TANAKA: Because she said it twice.
* 29 A ¶ A mortar whistles.
30 A All four dive into the mud as the sluice erupts in white water.
31 D DOYLE: Move! Move!
32 A ¶ They scramble along the dike, bent double, Finch last, dragging his rifle through the muck.

### SCENE s01575 | INT. COMMUNITY CENTER KITCHEN - MORNING
Detected names (may be incomplete or contain aliases): WESTBROOK BAKE-OFF, GLORIA ESPINOSA-REED, MAYA, TOBY, GLORIA'S HUSBAND, DENNIS REED, JUDGE'S ASSISTANT, PRUDENCE HARTWELL
* 1 A ¶ A big institutional kitchen, steel counters, a dozen mismatched pots.
* 2 A Flour on every surface.
* 3 A A banner on the wall: "WESTBROOK BAKE-OFF - 40TH ANNUAL."
4 A ¶ GLORIA ESPINOSA-REED (50s, apron, reading glasses on a chain) kneads dough with ferocity.
5 A Her daughter MAYA (16, headphones around her neck) arranges cooling racks.
6 A Her son TOBY (8, a paper chef hat too big for him) licks a spoon.
7 A ¶ At the far counter, GLORIA'S HUSBAND, DENNIS REED (50s, mild, a man who apologizes to furniture), is measuring sugar with great care.
8 D GLORIA: Dennis, level it off.
9 D DENNIS: I am leveling it.
10 D GLORIA: You're mounding it.
11 D DENNIS: It's a gentle mound.
12 D MAYA: Dad, it's a hill.
13 D TOBY: Can I have the spoon?
14 D GLORIA: You already have the spoon.
15 D TOBY: Can I have another spoon?
16 A ¶ Dennis hands him one.
17 A Gloria sighs, but she is smiling.
* 18 A ¶ The wall phone rings.
19 A Maya answers it.
20 D MAYA: Espinosa-Reed residence, kitchen division.
21 D JUDGE'S ASSISTANT [V.O.] (over phone): Good morning. This is the contest office. We're confirming your entry for ten o'clock.
22 D MAYA: Yes. Cinnamon pull-apart.
23 D JUDGE'S ASSISTANT [V.O.]: Wonderful. And the family recipe is original?
24 D MAYA (glancing at Gloria): Totally original.
25 D JUDGE'S ASSISTANT [V.O.]: Perfect. We'll see you shortly.
26 A ¶ Maya hangs up.
27 A Gloria is watching her.
28 D GLORIA: Why did you say it like that?
29 D MAYA: Like what?
30 D GLORIA: Like you were reading it off a card.
31 D MAYA: I wasn't.
32 D GLORIA: Maya.
33 D MAYA: Mom, it's fine.
34 D GLORIA: Is the recipe original?
35 D MAYA: Mom.
36 D GLORIA: Maya Rosalind.
37 D MAYA: It's Grandma Inez's recipe. It's practically ours.
38 D GLORIA: Inez's recipe is from the Hartwell Cookbook, Maya. Page ninety-one. Mrs. Hartwell is a judge.
39 D MAYA: I know.
40 D GLORIA: You know?
41 D MAYA: I knew last week. I looked it up. I didn't want to say anything.
42 D GLORIA: You didn't want to say anything.
43 D MAYA: You looked so happy.
44 A ¶ Dennis sets down the sugar scoop very quietly.
45 A Toby stops licking his spoon.
46 D GLORIA: I made this recipe for thirty years. My mother gave it to me. She said her mother wrote it herself.
47 D MAYA: Maybe she did. Maybe she wrote it down from the cookbook.
48 D GLORIA: Maybe.
49 D DENNIS: Gloria.
50 D GLORIA (sharp): Dennis, not now.
51 D DENNIS: I only meant, maybe change a little. Add the cardamom.
52 D GLORIA: You want me to add the cardamom.
53 D DENNIS: It's the one thing that isn't in the cookbook.
* 54 A ¶ A long silence.
* 55 A The oven timer ticks.
56 D GLORIA: Maya, hand me the cardamom.
57 A ¶ Maya blinks.
58 A Then she crosses to the spice rack and hands over a small tin.
* 59 A ¶ The door swings open.
60 A MRS. PRUDENCE HARTWELL (70s, lavender cardigan, a clipboard held like a scepter) enters, trailed by an assistant.
61 D PRUDENCE: Gloria, dear, I came early to see the kitchens. Is that cinnamon I smell?
62 D GLORIA (brightly): It is.
63 D PRUDENCE: Is it the pull-apart?
64 D GLORIA: It is.
65 D PRUDENCE: I used to make one just like it. My own grandmother's recipe. I published it, you know.
66 A ¶ Gloria's hand tightens around the cardamom tin.
67 D GLORIA: I did not know that.
68 A ¶ Prudence leans over the dough, sniffs, and smiles.
69 D PRUDENCE: Oh, there's something different in this. Something warm. What is it?
70 A ¶ Maya, Dennis, and Toby all look at Gloria.
71 D GLORIA: Cardamom.
72 D PRUDENCE: Lovely. Page ninety-one, if I'm not mistaken. But with your own touch.
73 A ¶ Gloria goes completely still.
74 A Prudence pats her arm and sweeps out.
* 75 A ¶ The door closes.
* 76 A Nobody speaks.
77 D TOBY: Does that mean we win?
78 A ¶ Gloria laughs.
79 A A short, startled laugh, then a longer one.
80 A She wipes her eyes with a floury wrist.
81 D GLORIA: It means we bake.

### SCENE s01576 | INT. ROLLER RINK - AFTER HOURS - NIGHT
Detected names (may be incomplete or contain aliases): JUNE PAIK, DELROY BASS
* 1 A ¶ Disco ball off.
* 2 A Work lights on.
* 3 A Scuffed maple floor.
* 4 A A snack bar with a hand-lettered menu.
* 5 A ¶ Chairs on tables.
* 6 A Mop bucket.
* 7 A Silence.
8 A ¶ JUNE PAIK (16, denim jacket, fresh bruise on one knee) laces up skates at the rail.
* 9 A Alone.
10 A Breathing.
11 A ¶ She stands.
12 A Wobbles.
13 A Pushes off.
* 14 A ¶ Slow loops.
* 15 A Clumsy.
* 16 A Then smoother.
* 17 A ¶ On the far wall: a trophy case.
* 18 A One photo.
* 19 A A girl in a gold jumpsuit, mid-spin.
20 A ¶ June stares at it as she passes.
* 21 A ¶ A buzz.
* 22 A The wall phone behind the snack bar rings.
23 A ¶ June ignores it.
24 A Another lap.
* 25 A ¶ It keeps ringing.
26 A ¶ She skates to the counter.
27 A Picks up.
28 D JUNE: Rink's closed.
29 D MRS. PAIK [V.O.] (over phone): June. Where are you?
30 D JUNE: Studying. At Hana's.
31 D MRS. PAIK [V.O.]: Hana's mother says you left at five.
32 D JUNE: I went to the library after.
33 D MRS. PAIK [V.O.]: The library closes at six.
34 A ¶ June closes her eyes.
35 D JUNE: I'm fine, Mom.
36 D MRS. PAIK [V.O.]: Come home.
37 D JUNE: In an hour.
38 A ¶ She hangs up.
39 A Turns.
* 40 A ¶ A man in the doorway.
41 A DELROY BASS (60s, rink owner, janitor's keys on his belt, shoulders that sag a little to the left).
42 D DELROY: Thought I heard someone.
43 D JUNE: Sorry. The back door was open.
44 D DELROY: Back door's never open.
45 D JUNE: It was today.
46 A ¶ He looks at her skates.
47 A At the bruise.
48 D DELROY: That your mother?
49 D JUNE: Yeah.
50 D DELROY: She sounds worried.
51 D JUNE: She's always worried.
52 A ¶ Delroy nods.
53 A Hangs his keys on a nail.
54 D DELROY: You skate like her.
55 D JUNE: Like who?
56 A ¶ He points at the trophy case.
57 D DELROY: Valerie Paik. Nineteen eighty-four. Regional champ.
58 A ¶ June stares at him.
59 D JUNE: That's my mother?
60 D DELROY: She never told you.
61 D JUNE: She told me she hated skating.
62 D DELROY: She did. After she quit.
63 D JUNE: Why?
64 A ¶ Delroy takes a long breath.
65 D DELROY: Ask her.
66 A ¶ June sits on the rail.
67 A Skates dangling.
68 A She looks at the photo.
* 69 A The girl in the gold jumpsuit looks back.
70 A ¶ Her phone buzzes.
* 71 A A text from Mom: "I'm outside."
72 A ¶ She looks up at Delroy.
73 D JUNE: She's here.
74 D DELROY: Then you'd better go.
75 A ¶ June stands.
76 A Skates to the door.
77 A Slows.
78 A Turns back.
79 D JUNE: Can I come back tomorrow?
80 D DELROY: Rink opens at ten.
81 D JUNE: Not for open skate.
82 D DELROY (small smile): Then at six. I'll leave the back door open.

### SCENE s01577 | INT. COUNTY COURTHOUSE - STAIRWELL LANDING - DAY
Detected names (may be incomplete or contain aliases): ATTORNEY SIMONE BELLAMY-OKONKWO, DEE, PRUITT, BAILIFF OSEI TEMPLETON, DISTRICT ATTORNEY PRUDHOMME LACROIX
* 1 A ¶ Marble.
* 2 A Echo.
* 3 A A broken radiator ticking.
4 A ¶ ATTORNEY SIMONE BELLAMY-OKONKWO (30s, charcoal suit, briefcase like a shield) paces.
5 A Phone to ear.
* 6 A Voicemail again.
7 A ¶ Across the landing, her client DARNELL "DEE" PRUITT (20s, borrowed tie, handcuffs hidden under a jacket draped over his wrists) sits on a bench, jaw tight.
8 A A bailiff, BAILIFF OSEI TEMPLETON (50s, belly, patience), stands guard.
9 D SIMONE: Pick up, Judge. Pick up.
10 D DEE: He's not going to pick up.
11 D SIMONE: Be quiet and memorize your answers.
12 D DEE: I did.
13 D SIMONE: Again.
14 D DEE: I was home at nine. My cousin brought the pizza. My cousin is gone now.
15 D SIMONE: Gone where?
16 D DEE: Gone gone.
17 A ¶ Simone hangs up.
18 A Stares at him.
* 19 A The radiator clanks.
20 A Templeton shifts his weight, glances at his watch, clears his throat, then looks at the ceiling as if to give them privacy.
* 21 A ¶ The stairwell door slams open.
* 22 A Footsteps below, fast, then up.
23 A ¶ DISTRICT ATTORNEY PRUDHOMME LACROIX (50s, silver hair, voice like warm gravel) arrives on the landing with a file under his arm.
24 A He stops.
25 A Smiles at no one in particular.
26 D LACROIX: Counsel. A word.
27 D SIMONE: Not without a witness.
28 D LACROIX: The bailiff is a witness.
29 D TEMPLETON: I'm furniture, sir.
30 D LACROIX: We have a recording from the pizza shop.
31 A ¶ Dee goes rigid.
32 A Simone doesn't move.
33 A Lacroix slides a tablet out of his file, taps it, holds it up.
* 34 A Grainy footage: a delivery counter, a man in a hoodie, a timestamp at 9:14.
35 D SIMONE: That's not my client.
36 D LACROIX: Isn't it?
37 A ¶ Dee lunges up from the bench.
38 A The jacket slips.
* 39 A The cuffs flash.
40 A Templeton catches his elbow and Simone puts a hand flat on Dee's chest.
41 A Lacroix steps back, the tablet falling, clattering down the marble steps.
42 D SIMONE: Sit down. Now.
43 A ¶ Dee sits.
44 A Breathing hard.
45 A Simone turns to Lacroix.
46 D SIMONE [CONT'D]: That footage has no chain of custody.
47 D LACROIX: Then why did he flinch?
48 D SIMONE: Because you're standing six inches from his face, Prudhomme.
* 49 A ¶ A pause.
50 A Lacroix retrieves the tablet from the stairs with a wince at the cracked screen, tucks it away, and exhales.
51 D LACROIX: Plea's still on the table. Ten minutes.
52 A ¶ He exits.
53 A Templeton sighs.
54 D TEMPLETON: Never seen a man look so pleased about a broken screen.
55 A ¶ Simone sits next to Dee.
56 A For the first time, she lets her shoulders drop.

### SCENE s01578 | INT. DEEP-SEA HABITAT MODULE - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): IMANI KAGWE, COMMANDER ARVID LUNDQVIST
* 1 A ¶ Cramped.
* 2 A Pipes sweat.
* 3 A Red emergency strip along the ceiling.
* 4 A Through a porthole: black water, drifting silt.
5 A ¶ DR. IMANI KAGWE (40s, braided hair, a surgeon's steady hands) stands at a console.
6 A Behind her, COMMANDER ARVID LUNDQVIST (50s, close-cropped silver, a voice trained to be calm) holds a tablet.
7 D LUNDQVIST: Oxygen's holding.
8 D KAGWE: For how long?
9 D LUNDQVIST: Nine hours.
10 D KAGWE: That's not holding. That's a countdown.
11 A ¶ She turns.
12 A Their eyes meet.
13 A He sets the tablet down.
14 D LUNDQVIST: The surface team says forty-eight.
15 D KAGWE: The surface team says what it's told to say.
16 D LUNDQVIST: You think they're lying.
17 D KAGWE: I think you are.
* 18 A ¶ A pipe groans.
* 19 A A thin jet of water hisses from a seam in the wall.
20 A Neither moves.
21 D LUNDQVIST: The seam isn't structural.
22 D KAGWE: It's weeping brine. It's structural.
23 D LUNDQVIST: Imani.
24 D KAGWE: Don't.
25 A ¶ He grabs a wrench from the wall.
26 A She steps in front of it.
27 A He tries to go around her.
28 A She blocks him.
29 A They collide, the wrench clattering to the deck.
30 D LUNDQVIST: Let me patch it!
31 D KAGWE: You'll shear the coupling!
32 A ¶ He shoves her.
33 A She shoves back.
34 A He slams against the console.
35 A She slams against the bulkhead.
* 36 A The jet widens.
* 37 A ¶ The lights flicker.
* 38 A Alarms begin to chirp, softly at first.
39 A ¶ They both freeze, staring at the porthole.
* 40 A Beyond the glass, something large and pale slides past.
* 41 A ¶ It does not slide past again.

### SCENE s01579 | INT. PROBATE COURT - EMPTY CHAMBERS - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): ATTORNEY RHONDA VASQUEZ-LEE, TEDDY, LEE
* 1 A ¶ Dust turns in a shaft of amber light.
* 2 A A single leather chair stands where the judge once sat.
3 A ¶ ATTORNEY RHONDA VASQUEZ-LEE (50s) shuts a thick folder and does not look up.
4 A Across the long oak table, her brother-in-law TEDDY "TEDS" LEE (50s) watches her hands.
5 A ¶ He clears his throat.
6 A She ignores it.
7 D TEDDY: Rhonda. Come on.
8 D RHONDA: Don't "Rhonda, come on" me, Teds.
9 A ¶ He leans back.
10 A She finally lifts her eyes.
11 A Hers are dry, but he is the one who looks away.
12 D TEDDY: Dad wanted it split.
13 D RHONDA: Dad wanted a lot of things.
14 A ¶ He stands, paces to the window.
15 A She follows him with her gaze, then rises too, slowly, one hand on the table as if to steady it.
16 D TEDDY: You're really going to contest this.
17 D RHONDA: I'm going to read it aloud. Every word. Into the record.
18 A ¶ He turns.
19 A She holds up the folder, and for a moment the light catches the red wax seal.
20 D TEDDY: You wouldn't.
21 A ¶ She opens it.
22 A He crosses the room in three strides, but she is already reading.

### SCENE s01580 | EXT. ICE FIELD - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): TOVE HALVORSEN, BASE CAMP
* 1 A ¶ White.
* 2 A Everywhere.
* 3 A Wind drags spindrift across the surface like smoke.
* 4 A ¶ A tiny orange tent, half-collapsed.
* 5 A Skis stabbed upright in the snow.
6 A ¶ TOVE HALVORSEN (30s, frostbitten cheeks, goggles pushed up, a pack nearly as big as she is) crawls out of the tent on hands and knees.
7 A ¶ She stands.
8 A Staggers.
9 A Catches herself on a ski.
10 A ¶ A handheld radio hangs from her chest strap.
11 A She thumbs it.
12 D TOVE: Base, this is Tove. Do you copy?
* 13 A ¶ Static.
14 D TOVE [CONT'D]: Base. Tove. Anyone.
* 15 A ¶ Static.
* 16 A A hiss.
* 17 A Then, far away, thin as wire:
18 D BASE CAMP [V.O.] (over radio): ...ove... copy... say position...
19 D TOVE: Seventy-nine north. Three kilometers past the cairn.
20 D BASE CAMP [V.O.]: ...repeat...
21 D TOVE: Past the cairn! I've lost one ski pole! Tent's torn!
22 D BASE CAMP [V.O.]: ...storm... front... twelve hours...
23 A ¶ She looks up.
* 24 A To the west: a bruise-colored wall of cloud, creeping.
25 D TOVE: Twelve hours. Okay.
26 A ¶ She drops to her knees.
27 A Digs in her pack.
28 A Pulls out a thermos, shakes it, unscrews the cap.
29 A Drinks.
30 A Grimaces.
* 31 A Frozen slush.
32 A ¶ She tosses it.
* 33 A It skitters across the ice.
* 34 A ¶ Wind picks up.
* 35 A The tent flaps.
* 36 A The first flakes begin to fall.
37 D TOVE [CONT'D] (to herself): Pack. Move. Pack. Move.
38 A ¶ She grabs the tent poles.
39 A They snap in her gloves.
40 A She stares at the splinters.
41 D BASE CAMP [V.O.]: ...Tove... turn... back...
42 D TOVE: There is no back!
43 A ¶ She keys the radio again, voice cracking.
44 D TOVE [CONT'D]: Base, I'm going to walk. East. Toward the lights.
45 D BASE CAMP [V.O.]: ...no lights... east...
46 A ¶ She stops.
47 A Looks east.
* 48 A Nothing but white.
* 49 A ¶ The snow thickens.
50 A She zips her jacket to her chin.
51 A Lifts the pack.
52 A Staggers one step.
53 A Two.
* 54 A ¶ Behind her, the tent collapses completely.

### SCENE s01581 | INT. SYNERGY PARTNERS - OPEN OFFICE - FRIDAY, 4:55 PM
Detected names (may be incomplete or contain aliases): BRANDEN CHASE, PRIYANKA MENON, DEZ, WILLIAMS, CALLIE ZIMMERMAN, HOLLOWAY, VP
* 1 A ¶ Beanbags.
* 2 A A kombucha tap.
* 3 A A neon sign reads "GOOD VIBES ONLY."
4 A Under it, five exhausted people.
5 A ¶ BRANDEN CHASE (30s, quarter-zip, gelled hair) stands at a whiteboard that says "SYNERGY 2.0 - ALIGN.
* 6 A PIVOT.
* 7 A ELEVATE."
8 A ¶ PRIYANKA MENON (30s, headphones, eye bags) slumps at her desk.
9 A DESMOND "DEZ" WILLIAMS (40s, cardigan, thermos) chews a pen.
10 A CALLIE ZIMMERMAN (20s, intern, notebook) sits upright, vibrating.
11 A And MR. HOLLOWAY (60s, regional VP, face on a video call projected on the wall) frowns from a rectangle.
12 D BRANDEN: Okay team, quick pulse check before the weekend.
13 D PRIYANKA (muttering): There is no pulse.
14 D HOLLOWAY [V.O.] (from the screen): I can't hear you, Priyanka.
15 D PRIYANKA: I said I'm thrilled.
16 D BRANDEN: Dez, the Q3 deck?
17 D DEZ: Done.
18 D BRANDEN: Done done, or "done" done?
19 D DEZ: Done in the sense that I'll never open it again.
20 D CALLIE: I made a mood board!
21 D BRANDEN: Callie, love the energy.
22 D PRIYANKA (to Callie, low): Save it. They'll sell it back to you.
23 D HOLLOWAY [V.O.]: Someone mentioned the layoffs?
24 D BRANDEN: No one mentioned layoffs, sir.
25 D HOLLOWAY [V.O.]: Because I'm seeing a rumor.
26 D DEZ (to himself): I'm seeing a door.
27 D BRANDEN: Team, let's take a breath.
28 D PRIYANKA: Everyone breathing? Great. Branden, are we getting cut?
29 D BRANDEN: I can't speak to that.
30 D PRIYANKA: You can speak to everything else.
31 D DEZ: He's mute on the one subject that matters.
32 D CALLIE: Is this a good time to share my mood board?
33 D HOLLOWAY [V.O.]: Callie, was it? We'll circle back.
34 D BRANDEN: Okay. Okay. Let's all just, you know, honor the process.
35 D PRIYANKA: The process has a sign-off sheet?
36 D DEZ: Process is a verb, Priyanka. We are the object.
37 D HOLLOWAY [V.O.]: I'll let you all go early. Happy weekend.
* 38 A ¶ The screen goes black.
39 A Nobody moves.
40 D BRANDEN (brightly): Great sync, everyone.
41 A ¶ He erases "ELEVATE" with his sleeve.
42 A Callie slowly closes her notebook.
43 D DEZ (to himself): I'm going to miss the kombucha.

### SCENE s01582 | EXT. DESERT SALT FLAT - DAY
Detected names (may be incomplete or contain aliases): MARIBEL SOTO, ANDRÉS, OLD MAN BENEDICTO
* 1 A ¶ Glare.
* 2 A White crust to every horizon.
* 3 A A jeep sits with its hood up, wheels sunk to the axles.
4 A ¶ MARIBEL SOTO (30s, wide-brim hat, cracked lips) kneels at the engine.
5 A Her brother ANDRÉS (20s, sunburned neck) sits in the shade of the jeep, rationing a water bottle with one eye.
6 A ¶ She wipes her hands on her jeans.
7 A He caps the bottle.
8 D ANDRÉS: Anything?
9 D MARIBEL: Radiator's dry.
10 D ANDRÉS: How dry?
11 D MARIBEL: Bone.
12 D ANDRÉS: How much water do we have?
13 D MARIBEL: You're holding it.
14 A ¶ He turns the bottle upside down.
* 15 A A few drops.
16 D ANDRÉS: I thought we had four.
17 D MARIBEL: We had four. You drank two on the first day.
18 D ANDRÉS: You told me to.
19 D MARIBEL: I told you to sip.
20 D ANDRÉS: I sipped.
21 D MARIBEL: Big sips.
22 D ANDRÉS: You said the road was forty miles.
23 D MARIBEL: It was forty miles.
24 D ANDRÉS: It's been eighty.
25 D MARIBEL: I know.
26 D ANDRÉS: We took the wrong turn.
27 D MARIBEL: You took the wrong turn.
28 D ANDRÉS: I was reading your map.
29 D MARIBEL: My map was fine.
30 D ANDRÉS: Your map was upside down.
31 A ¶ She stands.
32 A Wipes her face.
33 A He rises with her, squinting.
* 34 A ¶ On the horizon: a shimmer.
* 35 A A dot.
* 36 A A dust plume.
37 A ¶ They both freeze.
38 D ANDRÉS [CONT'D]: Is that a car?
39 D MARIBEL: Don't hope.
* 40 A ¶ The dot grows.
* 41 A A battered pickup rolls out of the glare and stops thirty feet away.
* 42 A ¶ The door opens.
43 A OLD MAN BENEDICTO (70s, straw hat, a jug of water slung over one shoulder) climbs down.
44 A He looks at the jeep.
45 A Looks at them.
46 D BENEDICTO: You are very far from the road.
47 A ¶ Maribel steps forward.
48 D MARIBEL: Please. Water.
49 A ¶ He unslings the jug.
50 A Holds it out.
51 A She takes it with both hands and drinks.
52 A Andrés watches, trembling.
53 D BENEDICTO: Slowly. Slowly.

### SCENE s01583 | INT. BELLTOWER OBSERVATORY - NIGHT
Detected names (may be incomplete or contain aliases): PROFESSOR AMBROSE QUILL, SEXTON
* 1 A ¶ A cramped brass-and-oak room at the top of a church tower.
* 2 A Star charts curl on the walls.
* 3 A A telescope points through a roof hatch.
4 A ¶ PROFESSOR AMBROSE QUILL (70s, cardigan, wire spectacles) sits at a desk, writing in a leather journal.
5 A He pauses.
6 A Taps his pen.
7 A Lifts his head as though listening.
8 A ¶ He rises, crosses to a brass speaking tube on the wall, and uncaps it.
9 D AMBROSE (into tube): Mrs. Pennywhistle?
10 D SEXTON [V.O.] (distant, tinny): Yes, Professor?
11 D AMBROSE: Did you take the key to the lower cabinet?
12 D SEXTON [V.O.]: No, sir. It was on its hook at supper.
13 A ¶ He frowns.
14 A Looks to the cabinet.
* 15 A The door is ajar.
16 D AMBROSE: It is not there now.
17 D SEXTON [V.O.]: Shall I come up?
18 A ¶ He considers.
19 A Glances at the journal on the desk, then at the dark hatch above.
20 D AMBROSE: No. Thank you. I believe I know where it is.
21 A ¶ He caps the tube.
22 A Returns to his desk.
23 A Opens a drawer.
* 24 A The key lies inside, dusted with chalk.
25 A ¶ He smiles faintly.
26 A Closes the drawer.

### SCENE s01584 | INT. VICTORIAN CONSERVATORY - AFTERNOON
Detected names (may be incomplete or contain aliases): LADY EVELYN ASHCROFT, JULIAN THORNBURY
* 1 A ¶ Glass roof, iron ribs.
* 2 A Ferns the size of carriages.
* 3 A A wrought-iron table set for tea in the middle of a green jungle.
4 A ¶ LADY EVELYN ASHCROFT (60s, lavender silk, a cane she uses more for pointing than walking) pours from a silver pot.
5 A Across from her, MR. JULIAN THORNBURY (30s, young solicitor, tight collar, too-new gloves) perches on the edge of a wicker chair.
6 D EVELYN: Sugar, Mr. Thornbury?
7 D JULIAN: Two, thank you.
8 D EVELYN: Two. Ambitious.
9 D JULIAN: I have a sweet tooth, Lady Ashcroft.
10 D EVELYN: I have a lawyer's nephew with a sweet tooth. I trust you are not he.
11 D JULIAN: I am nobody's nephew, my lady.
12 A ¶ She drops two lumps.
13 A Stirs once.
14 A Hands the cup across.
15 D EVELYN: Then you have no reason to flatter me.
16 D JULIAN: I flatter no one.
17 D EVELYN: A pity. I should like to be flattered. At my age it is the only vitamin.
18 A ¶ He sips.
19 A Burns his tongue.
20 A Hides it.
21 D JULIAN: My firm has sent me about the estate.
22 D EVELYN: The estate.
23 D JULIAN: The matter of the east orchard.
24 D EVELYN: The orchard has been mine for forty years.
25 D JULIAN: And the Hargreaves family wishes to purchase it.
26 D EVELYN: The Hargreaves family wishes a great many things.
27 D JULIAN: They offered considerably more than market value.
28 D EVELYN: Then it is worth considerably more than market value.
29 D JULIAN (carefully): That is what the firm suspects.
30 A ¶ She sets down the pot.
31 A Studies him.
32 D EVELYN: You are not as foolish as you dress.
33 D JULIAN: I beg your pardon.
34 D EVELYN: Nothing. Another biscuit?
35 D JULIAN: Thank you.
36 A ¶ He takes one.
37 A She watches him bite.
38 D EVELYN: Do you know what grows in the east orchard, Mr. Thornbury?
39 D JULIAN: Apples, I assume.
40 D EVELYN: Apples. Pears. And beneath the fourth pear tree, a good deal else.
41 D JULIAN: My lady?
42 D EVELYN: Eat your biscuit.
43 A ¶ He does.
* 44 A A parrot shrieks somewhere in the ferns.
45 A They both pretend not to hear it.
46 D EVELYN [CONT'D]: My late husband was a collector.
47 D JULIAN: Of what?
48 D EVELYN: Whatever he could not bear to leave to others.
49 D JULIAN: That is a poet's phrase.
50 D EVELYN: He was not a poet.
* 51 A ¶ A pause.
* 52 A The rain begins on the glass.
* 53 A Soft, then steady.
54 D JULIAN: Is there anything I should tell the Hargreaves?
55 D EVELYN: Tell them the orchard is not for sale.
56 D JULIAN: May I tell them why?
57 D EVELYN: You may tell them it is sentimental.
58 D JULIAN: Is it?
59 D EVELYN: Entirely.
60 D JULIAN: I shall convey it.
61 A ¶ She pours him more tea.
62 A They sit for a while without speaking.
63 D JULIAN [CONT'D] (gently): Lady Ashcroft, the firm will not stop at one letter.
64 D EVELYN: Then the firm will find me at home.
65 D JULIAN: You are very brave.
66 D EVELYN: I am very old. It is a different thing.
67 A ¶ He smiles.
68 A She smiles back.
* 69 A In the glass, the rain keeps falling.
70 D EVELYN [CONT'D]: Another cup, Mr. Thornbury?
71 D JULIAN: Please.
72 A ¶ She pours.
* 73 A The steam rises between them.

### SCENE s01585 | INT. ABANDONED AQUARIUM - TUNNEL EXHIBIT - NIGHT
Detected names (may be incomplete or contain aliases): KENJI MORITA, BEA, CALDERON, TYRELL BANKS, NOOR HAMDAN
* 1 A ¶ A glass tunnel, drained.
* 2 A Green slime on the walls.
* 3 A Dead fish skeletons lie on the sand like dropped coins.
* 4 A Water drips somewhere.
5 A ¶ Four teenagers huddle in the beam of one flashlight.
6 A ¶ KENJI MORITA (17, backpack, scared grin) holds the light.
7 A BEATRIZ "BEA" CALDERON (17, hoodie, steady) holds his sleeve.
8 A TYRELL BANKS (18, letterman jacket, loud) leads.
9 A And NOOR HAMDAN (16, glasses, camera strapped around her neck) trails behind them.
10 D TYRELL: See? Nothing.
11 D KENJI: It's very dark.
12 D BEA: It's an aquarium.
13 D NOOR: It's a dead aquarium.
* 14 A ¶ A sound.
* 15 A A wet slap on glass above them.
16 A All four freeze.
17 A The flashlight shakes.
18 D KENJI: What was that?
19 D TYRELL: Nothing.
* 20 A ¶ At the end of the tunnel, a shape rises from the dried sand.
21 A Tall.
22 A Dripping.
23 A Gill slits flutter along its neck.
24 D BEA (whispering): Guys.
25 D NOOR (whispering): Guys.
26 D KENJI (at the same time): Guys?
27 D TYRELL (at the same time): Run.
28 D BEA: ^Run!
29 A ¶ They scatter.
30 A Kenji drops the flashlight.
* 31 A It rolls, spinning light across the walls.
32 A The shape lunges.

### SCENE s01586 | EXT. FROZEN QUARRY LAKE - DUSK
Detected names (may be incomplete or contain aliases): LEILA RAHIMI, WYATT PRUITT, CORA, DELGADO, ANTON
* 1 A ¶ Black ice.
* 2 A Gray sky.
* 3 A Snow drifting sideways.
4 A ¶ Four figures on the surface, roped together, each separated by ten feet of slack.
5 A ¶ LEILA RAHIMI (30s, point, goggles fogged) tests the ice with a pole.
6 A Behind her, WYATT PRUITT (50s, quiet, bad knee) hauls a sled.
7 A Then CORAZON "CORA" DELGADO (20s, hood up), carrying the radio.
8 A Last, a boy of twelve, ANTON (swallowed by an adult parka), stays close to the sled.
9 A ¶ Leila stops.
10 A Raps the pole twice.
* 11 A The ice answers with a dull, hollow note.
12 D LEILA: Left. Wider.
13 D WYATT: Left is the long way.
14 D LEILA: Left.
15 D CORA: We could cut across.
16 D LEILA: We could.
* 17 A ¶ Nobody moves.
18 A Wyatt adjusts the sled strap.
19 A Anton looks at the horizon.
20 D WYATT: I used to skate here as a kid. Every winter. We'd race from the north wall to the pumphouse. I always lost.
21 D CORA: You lost?
22 D WYATT: My brother won. He was faster. He was always faster.
23 D CORA: Where is he now?
24 D WYATT: Montana.
25 D CORA: That's far.
26 D WYATT: It's far enough.
27 D LEILA: Cora, how's the radio?
28 D CORA: Quiet.
29 D LEILA: Try it.
30 D CORA: It's been quiet all day.
31 D LEILA: Try it.
32 A ¶ Cora thumbs the radio.
* 33 A Static.
* 34 A Nothing else.
35 A She lowers it.
36 D WYATT: My brother says the ice thins near the pumphouse. Where the old pipe runs.
37 D LEILA: Which is where we're headed.
38 D WYATT: Yes.
39 D LEILA: So you think we should go left.
40 D WYATT: I think we should go left.
41 D CORA: Anton, you okay?
42 A ¶ Anton nods, not looking at her.
43 A He tugs the rope at his waist, once, twice, as though checking that it is real.
44 D LEILA: Wyatt, tie the sled shorter.
45 D WYATT: It'll drag.
46 D LEILA: Then it drags.
47 A ¶ He kneels, wincing.
48 A Shortens the line.
* 49 A The ice creaks.
50 A Everyone looks down.
51 D CORA: That was nothing.
52 D LEILA: That was something.
* 53 A ¶ A long crack, like a rifle shot, rolls across the lake.
54 A They stand rigid.
55 A Anton drops to his knees, flat.
56 A The others follow, spreading their weight.
* 57 A ¶ Silence.
* 58 A Snow falls on four still bodies.

### SCENE s01587 | INT. DISUSED FUNICULAR CAR - NIGHT
Detected names (may be incomplete or contain aliases): AGENT CLEMENTINE ROUX, RODION VASILYEV, FELIX, SABINE HOLT
* 1 A ¶ A wooden car stalled halfway up a mountain track, lights guttering.
* 2 A Outside, black pines and a vertical drop.
3 A Inside, four people, a thermos, and a briefcase handcuffed to someone's wrist.
4 A ¶ AGENT CLEMENTINE ROUX (40s, trench coat, the kind of face that gives nothing away) grips the briefcase handle.
5 A Across from her sits RODION VASILYEV (50s, fur collar, a gold tooth catching the light).
6 A Beside her, a young porter, FELIX (20s, uniform two sizes too big), shakes.
7 A At the rear window, a woman named SABINE HOLT (30s, driver's gloves, bruised lip) watches the track below.
8 D CLEMENTINE (to everyone): Nobody touches the emergency brake.
9 D RODION: It is already stuck.
10 D FELIX: The cable's frayed. I told the foreman. I told him twice.
11 D SABINE (to herself): Of course you did.
12 D CLEMENTINE: Felix, how long until the next car?
13 D FELIX: There isn't one. We're the last run.
14 D RODION: Then we wait.
15 D CLEMENTINE (to the group): We don't wait. Someone in this car cut that cable.
16 A ¶ Sabine turns.
17 A Rodion leans forward.
18 A Felix presses against the wall.
19 D RODION: You accuse us?
20 D CLEMENTINE: I accuse the cable.
21 D SABINE (softly): She is right.
22 A ¶ Felix lunges for the door handle.
23 A Rodion catches his collar.
24 A Sabine grabs Rodion's wrist.
* 25 A The briefcase swings on its chain.
26 A Clementine slams it against the window, glass cracking, cold air hissing through.
27 A ¶ For a moment, all four are tangled.
* 28 A Then the car lurches.
29 A Everyone freezes.
* 30 A ¶ The sound of a single strand parting, far above.
31 D CLEMENTINE (low): Nobody breathe.
32 A ¶ Rodion lets go of Felix.
33 A Sabine lets go of Rodion.
34 A Slowly, painfully, they all sit down.
35 D RODION (to himself): I told Anton we should have taken the road.
* 36 A ¶ Outside, wind.
* 37 A Inside, the thermos rolls across the floor and stops against Felix's boot.

### SCENE s01588 | INT. OPERA HOUSE - BALCONY BOX - EVENING
Detected names (may be incomplete or contain aliases): CLAIRE, JACK, MADAME DUBOIS, GENERAL HARTLEY
* 1 A ¶ Velvet.
* 2 A Gilt.
* 3 A Below, an orchestra tunes.
4 A ¶ CLAIRE (30s, emerald gown) sits rigid.
5 A Beside her, JACK (30s, tux, a man who bought tickets in a hurry).
6 A Two seats behind: her mother, MADAME DUBOIS (60s, pearls, lorgnette), and his father, GENERAL HARTLEY (60s, medals, mustache).
7 A ¶ She does not look at him.
8 A He does not look at her.
9 A ¶ Her fingers drum the armrest.
10 A His gaze stays on the stage.
* 11 A ¶ The lights dim.
* 12 A The overture begins.
13 A His hand drifts toward hers, hesitates, withdraws.
14 A She notices.
15 A ¶ Madame Dubois lowers her lorgnette.
16 A The General coughs.
17 D CLAIRE (whispering): You came.
18 D JACK (whispering): You asked.
19 D CLAIRE: I asked in March.
20 D JACK: I got the letter in June.
* 21 A ¶ The music swells.
22 A She turns at last.
23 A He meets her eyes.
24 A The General leans forward to hear.
25 A Madame Dubois leans too.
26 D CLAIRE (whispering): Stay for the second act?
27 D JACK (whispering): Forever.

### SCENE s01589 | INT. NIGHT FERRY - OBSERVATION DECK - NIGHT
Detected names (may be incomplete or contain aliases): DAHLIA OYELARAN, RUSSELL KAPLAN, INGRID SOLBERG, BASIL MWANGI
* 1 A ¶ Open air, plastic benches, a vending machine blinking in the corner.
* 2 A The engine thrums underfoot.
* 3 A Black water, white wake.
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
* 14 A The ferry horn blows.
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
* 39 A A small, reluctant thaw.
40 D RUSSELL: I love you. Still. Dumb, isn't it?
41 D DAHLIA: Very.
42 D RUSSELL (hopeful): But?
43 D DAHLIA: But nothing.
44 A ¶ She takes his hand.
* 45 A A beat.
* 46 A Then Ingrid's voice cuts through the PA.
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
* 62 A A name: "ELLIOT."
* 63 A Under it: "Ready for you at the port."
64 D DAHLIA: I was going to tell you.
65 D RUSSELL: When?
66 D DAHLIA: Tonight.
67 D RUSSELL: Dahlia.
68 D DAHLIA: It's complicated.
69 D RUSSELL: It always is.
70 A ¶ He steps back.
* 71 A The ferry lurches as it enters the harbor.
* 72 A Lights ahead.
73 D RUSSELL [CONT'D]: Who is he?
74 A ¶ She opens her mouth.
* 75 A The ferry horn drowns her answer.

### SCENE s01590 | INT. CURLING CLUB - SHEET THREE - EVENING
Detected names (may be incomplete or contain aliases): ROCKS FALLING, COACH MARGUERITE LAVOIE, BJORN HALLDORSSON, DEZ, ARCHER, WILLA, NG, TAMSIN OKORO, ALTERNATE POPPY DUNLEAVY
* 1 A ¶ Pebbled ice, humming compressors.
* 2 A A scoreboard reads: ROCKS FALLING, HOUSE TIED.
3 A ¶ COACH MARGUERITE LAVOIE (50s, club jacket, whistle) watches from the hack.
4 A Skip BJORN HALLDORSSON (40s, broom, one-glove) kneels in the house, calling the line.
5 A Third DESMOND "DEZ" ARCHER (20s, jittery) cradles a stone.
6 A Second WILHELMINA "WILLA" NG (30s, goggles) sweeps beside it.
7 A Lead TAMSIN OKORO (20s, ponytail) holds the broom.
8 A And ALTERNATE POPPY DUNLEAVY (teen, coat zipped to chin) sits on the bench, gripping her knees.
9 D BJORN: Dez, hold.
10 D DEZ: Holding.
11 A ¶ Marguerite does not speak.
12 A Her eyes move from Dez to the stone to Poppy and back.
13 D BJORN: Easy weight.
14 A ¶ Dez releases.
* 15 A The stone glides.
16 A Willa and Tamsin sweep in sync, the sound of brooms like rain.
17 D WILLA: Hard!
18 D TAMSIN: Hurry hard!
* 19 A ¶ The stone slows.
20 A Poppy leans forward.
* 21 A It curls, kisses the guard, and stops one inch from the button.
* 22 A ¶ Silence.
23 A Then Marguerite lowers her whistle, takes a breath, and sits down next to Poppy.
24 D MARGUERITE (quietly): You're up next.
25 A ¶ Poppy swallows.
26 A Nods.
27 A Stands.
28 A Takes off her coat.
* 29 A Underneath: the jersey, a size too large.
30 A She picks up a stone.
31 A ¶ Behind her, the whole team watches.
32 A She walks to the hack.

### SCENE s01591 | INT. ABANDONED CARNIVAL - HALL OF MIRRORS - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE NAOMI FAIRWEATHER, DETECTIVE CASPIAN ROTH, LUCIA FERREIRA, THE CARNY
* 1 A ¶ Cracked glass multiplies everything.
* 2 A A hundred reflections of a hundred flashlights, swimming in the dark.
* 3 A ¶ Four silhouettes pick through the maze.
4 A DETECTIVE NAOMI FAIRWEATHER (40s, rain jacket, gun at her hip).
5 A Her partner DETECTIVE CASPIAN ROTH (30s, tall, careful).
6 A A hostage, LUCIA FERREIRA (20s, torn dress, hands bound), shoved ahead by the fourth: THE CARNY (50s, grease-stained vest, a pistol, a nervous laugh).
7 D THE CARNY: Don't come closer.
8 D NAOMI: We're not.
* 9 A ¶ The mirrors show otherwise.
* 10 A Dozens of Naomis advancing.
11 A The Carny spins, firing at a reflection.
* 12 A Glass explodes in a silver storm.
13 A ¶ Lucia drops to the floor.
14 A Caspian dives behind a panel.
15 A Naomi flattens against the wall.
16 A The Carny turns, turns again, lost among his own faces.
17 D NAOMI [CONT'D] (low): Caspian. Left.
18 A ¶ He crawls.
19 A The Carny fires again.
* 20 A Another mirror blows.
21 A Fragments rain down on Lucia, who covers her head.
22 D CASPIAN (whispering): Lucia. Stay low.
23 A ¶ The Carny laughs, high and thin.
* 24 A Footsteps.
* 25 A A hundred of them.

### SCENE s01592 | INT. MERIDIAN INSURANCE - BASEMENT FILE ROOM - MORNING
Detected names (may be incomplete or contain aliases): GERALD PLUMMER, STRANGER, DANA, HARRIET OKAFOR-BLYTH
* 1 A ¶ Gray shelves.
* 2 A Gray boxes.
* 3 A One flickering fluorescent tube.
* 4 A A sign: "REMEMBER: DOCUMENTATION IS PROTECTION."
5 A ¶ GERALD PLUMMER (50s, short-sleeved dress shirt, lanyard) wheels a cart of folders down the aisle, whistling a tune with no melody.
6 A He stops at a shelf, squints at a label.
7 A ¶ A woman steps out of the shadows.
8 A She wears an expensive coat.
9 A No lanyard.
10 A No badge.
11 A A STRANGER.
12 D STRANGER: Excuse me. Are you the file clerk?
13 D GERALD: Archivist.
14 D STRANGER: Archivist. I'm looking for the Henderson claim.
15 D GERALD: Which Henderson?
16 D STRANGER: The big one.
17 D GERALD: They're all big, miss.
18 A ¶ She smiles thinly and holds out a hand.
19 D STRANGER: I'm Dana. Dana Whitfield. From corporate.
20 D GERALD (delighted): Oh! The audit.
21 D DANA: Not an audit. A review.
22 D GERALD: Gerald Plummer. Twenty-six years in this basement.
23 D DANA: Impressive.
24 D GERALD: It's a very nice basement.
25 A ¶ A third figure appears at the end of the aisle.
26 A HARRIET OKAFOR-BLYTH (30s, headset, tablet) walks briskly toward them, typing as she goes.
27 D HARRIET: Gerald, I was told you'd be upstairs for the town hall.
28 D GERALD: I was told the town hall was optional.
29 D HARRIET: It's mandatory.
30 D GERALD: Then who told me it was optional?
31 D HARRIET: Dana, were you speaking to him?
32 D DANA: Briefly.
33 D HARRIET: Did you mention the restructuring?
34 D DANA: I did not.
35 D GERALD: What restructuring?
36 A ¶ Harriet and Dana exchange a look.
* 37 A The light flickers.
38 D HARRIET (carefully): Gerald, why don't you come upstairs.
39 D GERALD: Why?
40 D DANA: There's cake.
41 D GERALD: Is it a retirement cake?
42 D DANA: It could be.
43 A ¶ Gerald looks down at the cart.
* 44 A At the Henderson folder on top.
45 D GERALD: Then I'd better file this first.
46 A ¶ He wheels the cart away, whistling, as Dana and Harriet watch him go.

### SCENE s01593 | INT. COUNTY ARCHIVE - READING ROOM - RAINY AFTERNOON
Detected names (may be incomplete or contain aliases): TEDDY, BRANDT, EZEKIEL FAIRBANKS, MIRIAM ACHTERBERG
* 1 A ¶ High windows, streaked with rain.
* 2 A Oak tables.
* 3 A Green-shaded lamps.
* 4 A The hush of paper.
5 A ¶ THEODORA "TEDDY" BRANDT (40s, cardigan, a pencil behind her ear) turns the pages of a bound ledger with white cotton gloves.
6 A At the next table, EZEKIEL FAIRBANKS (60s, tweed, a magnifying glass on a cord) reads a yellowed newspaper.
7 A And behind the desk, the archivist MIRIAM ACHTERBERG (50s, bun, reading glasses on her forehead) sorts index cards.
8 A ¶ Teddy stops on a page.
9 A Lifts a corner with her pencil.
10 A Looks again.
11 A ¶ She glances at Ezekiel.
12 A He is watching her over the top of his newspaper.
13 A They both look away.
14 D MIRIAM (to the room): Reading room closes at five, everyone.
15 A ¶ Neither responds.
16 A ¶ Teddy photographs the page with her phone, the shutter click loud in the silence.
17 A Miriam's eyes flick up, then down.
18 A She files a card.
19 A ¶ Ezekiel rises, stretches, and strolls to Teddy's table.
20 A He glances at the ledger.
21 A His face stays perfectly polite.
22 D EZEKIEL: Interesting hand. Eighteen-nineties?
23 D TEDDY: Eighteen-ninety-four.
24 D EZEKIEL: Mm. I hear the county clerk was a drinker.
25 D TEDDY: I hear a lot of things.
26 A ¶ He nods.
27 A Returns to his table.
28 A Sits.
29 A Turns a page of his newspaper without reading it.
30 A ¶ Teddy takes a slow breath and closes the ledger.
31 A She slips off one glove, then the other, and folds them over the cover.
32 D MIRIAM (to herself): Someone always takes that one.
33 A ¶ Teddy looks up.
34 A Miriam keeps sorting.
35 D TEDDY: Which one?
36 D MIRIAM: The hand.
37 D TEDDY: You've seen it?
38 D MIRIAM: It's gone out four times this year.
39 A ¶ Ezekiel's newspaper lowers a fraction.
* 40 A Rain presses at the glass.
41 D TEDDY: Who else?
42 D MIRIAM: I can't say. Patron privacy.
43 D TEDDY: Of course.
44 A ¶ Teddy gathers her things.
45 A Stands.
46 A Walks to the desk and slides the ledger across.
47 D TEDDY [CONT'D]: Thank you.
48 D MIRIAM: Come again.
49 D TEDDY: I'll try.
50 A ¶ She leaves.
* 51 A The door sighs shut behind her.
52 A ¶ Ezekiel folds his newspaper, tucks it under his arm, and approaches the desk.
53 D EZEKIEL: The same one, please.
54 A ¶ Miriam lifts the ledger.
55 A Holds it for a moment.
56 D MIRIAM: It's very popular today.
57 A ¶ She passes it over.
58 A He opens it to the marked page.
59 A Smiles very slightly.
60 A Takes out his own phone.

### SCENE s01594 | INT. PET GROOMING SALON - AFTERNOON
Detected names (may be incomplete or contain aliases): CARMELITA VEGA, LEO PARK, ZELINSKI
* 1 A ¶ Fluorescent lights.
* 2 A A wall of leashes.
* 3 A The air smells of oatmeal shampoo and panic.
4 A ¶ CARMELITA VEGA (40s, rubber apron, forearms like a boxer's) lathers a very large, very wet Newfoundland named BISCUIT in a steel tub.
5 A Behind her, LEO PARK (20s, trainee, ear gauges) sprays the nozzle without looking.
6 A And in the waiting area, MR. ZELINSKI (70s, sweater vest, a tiny terrier under his arm) watches with deep concern.
7 D CARMELITA: Leo, the nozzle.
8 D LEO: Sorry, I was looking at the dog.
9 D CARMELITA: The nozzle goes on the dog.
10 D LEO: That's what I'm doing.
11 D CARMELITA: You're spraying me.
12 A ¶ Leo glances at the nozzle, then at Carmelita's drenched apron.
13 A He drops it.
* 14 A It whips around, spraying the ceiling.
15 D CARMELITA [CONT'D]: Leo!
16 A ¶ Both lunge for the hose.
17 A Biscuit shakes.
* 18 A A wave of soapy water crosses the salon.
19 A Mr. Zelinski clutches his terrier and rises from the chair.
20 A ¶ Leo slips on the tile.
21 A Carmelita catches his collar.
22 A They freeze, mid-fall, staring at each other.
23 A Biscuit shakes again.
* 24 A Foam coats the window.
25 D MR. ZELINSKI: Is this normal?
26 A ¶ Carmelita and Leo exchange a look.
27 A Slowly, they straighten up.
28 A Leo wipes his face with his sleeve.
29 A Carmelita pulls a clump of suds from her hair.
30 D CARMELITA (flatly): Every Tuesday.
31 D LEO: Every Tuesday.
32 D MR. ZELINSKI: I'll come back later.
33 A ¶ He backs out the door.
* 34 A The bell jingles.
35 A Biscuit sneezes.
* 36 A Soap bubbles drift across the room, floating gently toward the ceiling.

### SCENE s01595 | EXT. MUDDY TRENCH - DAWN
Detected names (may be incomplete or contain aliases): SERGEANT ABEL TOROSYAN, PRIVATE LUCIEN MARCHAND, CORPORAL HAYDEN BRIGGS, FLIP, OKONKWO, PRIVATE EAMON DOHERTY, LIEUTENANT SASHA VOLKOV
* 1 A ¶ A cold morning.
* 2 A Rain-fed mud, duckboards, a sagging tarp strung overhead.
* 3 A Smoke from a tin stove.
4 A ¶ SERGEANT ABEL TOROSYAN (40s, helmet, gray in his stubble) hunches over a mess tin.
5 A Beside him, PRIVATE LUCIEN MARCHAND (20s, bandaged ear) peels a potato.
6 A CORPORAL HAYDEN BRIGGS (30s, tall, tobacco-stained moustache) cleans his rifle.
7 A PRIVATE FELICITY "FLIP" OKONKWO (20s, medic's armband) rewinds a bandage roll.
8 A PRIVATE EAMON DOHERTY (19, scrawny) writes a letter on his knee.
9 A And young LIEUTENANT SASHA VOLKOV (20s, polished boots now caked in mud) studies a map.
10 D TOROSYAN: Anyone hear the guns?
11 D BRIGGS: Not since four.
12 D LUCIEN: They're resting.
13 D FLIP: Everyone rests.
14 D VOLKOV (to the trench): Gentlemen, a reminder. We move at noon.
15 D EAMON (muttering): Noon. Always noon.
* 16 A ¶ A shell whistles overhead, high and wide, and bursts far behind the line.
17 A Every man ducks.
18 A Lucien drops the potato.
19 A Briggs sweeps the rifle against his chest.
20 A Flip falls flat.
21 A Eamon covers his letter with his body.
22 A Torosyan, last, tucks his tin under his arm.
* 23 A ¶ Silence.
24 A Then Briggs laughs, once, and the others join, a dry reluctant sound.
25 D TOROSYAN: Everyone alive?
26 D LUCIEN: My potato's dead.
27 D FLIP: Pity.

### SCENE s01596 | EXT. DUST STREET - GHOST TOWN - HIGH NOON
Detected names (may be incomplete or contain aliases): SHERIFF JEDEDIAH CROW, MERCY BELLWEATHER
* 1 A ¶ Sun like a hammer.
* 2 A Wind.
* 3 A A rusted sign creaks: "SALOON."
4 A ¶ SHERIFF JEDEDIAH CROW (50s, tin star, dust-gray duster) stands in the middle of the road.
5 A Thumb on his hammer.
6 A ¶ Forty feet away: MERCY BELLWEATHER (30s, black hat, two revolvers, one eyebrow cocked).
7 A ¶ Neither moves.
8 D CROW: Mercy.
9 D MERCY: Jed.
10 D CROW: You came back.
11 D MERCY: Didn't plan to.
* 12 A ¶ A tumbleweed rolls between them.
13 D CROW: There's no one left to arrest.
14 D MERCY: Then you're alone.
15 D CROW (to himself): Always was.
16 A ¶ Mercy's fingers twitch.
17 A Crow's too.
18 D CROW [CONT'D] (to the empty windows): Anyone watching, step back.
* 19 A ¶ Wind.
* 20 A A shutter bangs.
21 D MERCY: Draw, Jed.
22 D CROW: After you.
23 A ¶ Neither draws.
* 24 A The sun climbs another degree.
* 25 A A fly lands on Crow's hat.
26 A Mercy smiles.
27 D MERCY: Still a gentleman.
28 D CROW: Still a fool.
29 A ¶ She draws.

### SCENE s01597 | INT. ORBITAL SALVAGE TUG - COCKPIT - SHIP TIME 03:12
Detected names (may be incomplete or contain aliases): PILOT KESTREL VANDERHOOF, OSEI MENSAH-RIVERA, PEBBLE, VOICE
* 1 A ¶ Cramped.
* 2 A Warm.
* 3 A Handwritten sticky notes on every panel.
* 4 A Through the viewport: the husk of a dead freighter, tumbling slowly.
5 A ¶ PILOT KESTREL VANDERHOOF (30s, shaved head, a tattoo of a moth on her neck) flicks switches.
6 A At the engineering station, DR. OSEI MENSAH-RIVERA (40s, glasses taped at the hinge, calm voice) frowns at a readout.
7 A And the ship's AI, a soft synthetic voice named PEBBLE, speaks from the ceiling.
8 D KESTREL: Pebble, scan that hull again.
9 D PEBBLE [V.O.]: Scanning. The hull contains residual heat signatures.
10 D OSEI: Residual from what?
11 D PEBBLE [V.O.]: Possibly from life.
12 D KESTREL: There shouldn't be life.
13 D OSEI: There shouldn't be anything.
14 D PEBBLE [V.O.]: Respectfully, there is both.
15 A ¶ Kestrel leans toward the glass.
16 A Osei rises and joins her.
17 A Together they watch the freighter turn.
* 18 A A single window glows amber.
19 D OSEI: I count one.
20 D KESTREL: I count more.
21 D PEBBLE [V.O.]: I count seventeen.
22 D OSEI: Seventeen what?
23 D PEBBLE [V.O.]: Heartbeats.
24 A ¶ Kestrel and Osei stare at the speaker.
25 A At each other.
26 A At the glass.
27 D KESTREL: Seventeen heartbeats on a ship that's been dead six years.
28 D OSEI: Could be a malfunction.
29 D KESTREL: Could be a rescue.
30 D OSEI: Could be a trap.
31 D KESTREL: Could be both.
32 A ¶ She unbuckles.
33 A Pushes off toward the airlock.
34 A He grabs her ankle.
35 A She grabs his wrist.
36 A They float, face to face.
37 D KESTREL [CONT'D]: ^Let go.
38 D OSEI: ^Don't.
39 D PEBBLE [V.O.]: Please do not argue in zero-g. It increases the risk of injury.
40 A ¶ Kestrel laughs despite herself.
41 A Osei lets go.
42 D OSEI: We call it in first.
43 D KESTREL: Fine.
44 A ¶ She floats back to the console.
45 A Keys the comm.
* 46 A Static.
47 A A man's voice answers from the freighter, calm, cheerful, impossible.
48 D VOICE [V.O.]: Salvage tug, welcome. We've been waiting.
49 A ¶ Kestrel looks at Osei.
50 A Osei looks at the ceiling.
51 D OSEI: Pebble?
52 D PEBBLE [V.O.]: I do not recognize that voice.
53 A ¶ Kestrel's hand hovers over the airlock release.

### SCENE s01598 | INT. HOSPITAL - STAFF LOUNGE - 3 AM
Detected names (may be incomplete or contain aliases): ANIKA SHARMA, BART, KINSELLA, TOMASZ NOWAK, TECH LUCINDA FAIRCHILD, ORDERLY MARCUS OYELOWO, REGINALD PEMBERTON
* 1 A ¶ Vending machine hum.
* 2 A A couch with a stain no one will claim.
* 3 A A TV on mute plays a late-night infomercial.
4 A ¶ DR. ANIKA SHARMA (30s, scrubs, hair undone) sprawls on the couch.
5 A NURSE BARTHOLOMEW "BART" KINSELLA (50s, glasses on a chain) stirs instant coffee.
6 A RESIDENT DR. TOMASZ NOWAK (20s, wired) flips through a chart.
7 A TECH LUCINDA FAIRCHILD (20s, headphones) eats crackers.
8 A ORDERLY MARCUS OYELOWO (40s, mop in hand) leans in the doorway.
9 A And attending DR. REGINALD PEMBERTON (60s, bow tie, exhausted dignity) sits very still in the armchair.
10 D BART (to the room): Anyone want donuts? They're from Tuesday.
11 D LUCINDA: Pass.
12 D TOMASZ: Is Tuesday old?
13 D ANIKA: Tuesday is archaeological.
14 D PEMBERTON (to himself): Three hours until rounds.
* 15 A ¶ A monitor beeps down the hall.
16 A All six stiffen.
17 A Anika sits up.
18 A Tomasz drops the chart.
19 A Bart sets down the coffee.
20 A Lucinda pulls off one earphone.
21 A Marcus straightens.
22 A Pemberton opens one eye.
* 23 A ¶ The beep resolves into a steady rhythm.
24 A Nobody moves.
25 D PEMBERTON [CONT'D]: False alarm.
26 A ¶ They exhale together.
27 A Anika slumps back.
28 A Tomasz picks up the chart.
29 A Bart returns to stirring.
30 D MARCUS (to no one): I hate nights.
31 D LUCINDA: Everyone hates nights.
32 D PEMBERTON (gently): Nights are where we find out who we are.
33 D BART (muttering): Tired, apparently.

### SCENE s01599 | INT. CIRCUS WINTER QUARTERS - REHEARSAL BARN - MORNING
Detected names (may be incomplete or contain aliases): FLYING FONTAINES, RINGMASTER BARNABY FONTAINE, PICKLES, VIVI, MORETTI, GUSTAV BERGSTROM, FANNY LU, ALISTAIR PEMBERTON-HOYT
* 1 A ¶ A drafty barn smelling of sawdust and horse.
* 2 A Trapezes hang at rest.
* 3 A A faded banner: "THE FLYING FONTAINES - SINCE 1923."
4 A ¶ RINGMASTER BARNABY FONTAINE (60s, top hat, a tailcoat patched at the elbows) stands center ring, clipboard in hand.
5 A Beside him, the clown PICKLES (40s, half makeup, full despair) hangs his head.
6 A Atop a ladder, the aerialist VIOLETTA "VIVI" MORETTI (30s, sequined leotard under a parka) adjusts a rope.
7 A Below her, the strongman GUSTAV BERGSTROM (40s, shaved head, shoulders like a door) lifts a barbell without effort.
8 A And in a folding chair, the bookkeeper FANNY LU (50s, cardigan, adding machine) taps keys.
9 D BARNABY: Ladies and gentlemen, we are bankrupt.
10 D PICKLES: Again?
11 D FANNY: Still.
12 D VIVI (from the ladder): Barnaby, we've been bankrupt since Easter.
13 D BARNABY: Since Easter, Vivi, we have been merely poor. Today we are bankrupt.
14 D GUSTAV: I thought bankrupt meant we get a bailout.
15 D FANNY: It means we get a lawyer.
16 D PICKLES: I can juggle lawyers.
17 D BARNABY: Pickles, you are not helping.
18 D PICKLES: I am a clown. I am helping by being unhelpful.
19 D VIVI (sliding down the rope): We could sell the elephant.
20 D GUSTAV: We don't have an elephant.
21 D VIVI: We have a very large dog.
22 D FANNY: We have a very large debt.
23 D BARNABY: I will not sell Cornelius.
24 D PICKLES: Cornelius is a dog?
25 D BARNABY: Cornelius is a lion.
26 D GUSTAV: Cornelius is an old man in a lion costume.
27 D BARNABY: Cornelius is our dignity.
* 28 A ¶ A silence.
* 29 A Then the barn door bangs open and a gust of wind sweeps in.
30 A A figure steps through: a stranger in a pinstriped suit, briefcase in hand.
31 A MR. ALISTAIR PEMBERTON-HOYT (50s, banker's frown, a small gold pin on his lapel).
32 D ALISTAIR: Good morning. I'm looking for Mr. Fontaine.
33 D BARNABY (stiffly): You've found him.
34 D ALISTAIR: I represent the Third Mutual Bank.
35 D PICKLES (to himself): Here come the clowns.
36 D ALISTAIR: I'm here to inspect the assets.
37 D BARNABY: We have no assets.
38 D ALISTAIR: Then I'm here to inspect the liabilities.
39 D VIVI (softly): That's us.
40 A ¶ Alistair opens his briefcase and pulls out a document.
41 A Fanny takes it.
42 A Reads.
43 A Her brows climb.
44 D FANNY (slowly): Barnaby, this says the bank will forgive the debt.
45 D BARNABY: It says what?
46 D FANNY: On one condition.
47 D ALISTAIR: That you perform.
48 D GUSTAV: Perform?
49 D ALISTAIR: My daughter's birthday party. Saturday. She's seven. She adores clowns.
50 A ¶ Pickles raises one weary hand.
51 D PICKLES: ^I'm a clown.
52 D BARNABY: ^We are the Flying Fontaines.
53 D ALISTAIR: Then it's settled.
54 A ¶ Barnaby stares at the contract.
55 A At Alistair.
56 A At the faded banner.
57 D BARNABY: Mr. Pemberton-Hoyt, we will not merely perform. We will astonish.
58 D ALISTAIR: I merely require competence.
59 D BARNABY: Competence is the death of art.
60 A ¶ Fanny stamps the document.
61 A Gustav drops the barbell.
62 A Vivi whoops.
63 A Pickles produces, from nowhere, a handful of confetti and throws it into the air.
64 D ALISTAIR (dryly): I'll see you Saturday.
65 A ¶ He exits.
* 66 A The door bangs behind him.
67 D FANNY: Barnaby, we have four days.
68 D BARNABY: Then we shall rehearse for three and panic for one.
69 D GUSTAV: Which day is panic?
70 D BARNABY: Saturday, Gustav. Always Saturday.

### SCENE s01600 | INT. GRAND HOTEL - PENTHOUSE SUITE - NIGHT
Detected names (may be incomplete or contain aliases): VICTOR LANGFORD, IRIS LANGFORD, WAITER LEONARD CROSS
* 1 A ¶ Art deco.
* 2 A Polished brass.
* 3 A A fire crackles behind a screen.
* 4 A Through tall windows, the glittering city.
5 A ¶ VICTOR LANGFORD (50s, dinner jacket, whiskey in hand) stands before a window, admiring his reflection.
6 A At a writing desk sits his wife IRIS LANGFORD (40s, silver gown, a jeweled pin), reading a letter she does not seem to be reading.
7 D IRIS: You're quiet tonight, Victor.
8 D VICTOR: I'm thinking.
9 D IRIS: About what?
10 D VICTOR: Everything.
11 D IRIS: That's not an answer.
12 D VICTOR: It's the only honest one.
13 A ¶ She folds the letter.
14 A Slips it into her bag.
15 A He turns from the window, smiling like a man at ease.
16 D VICTOR [CONT'D]: Shall we dine?
17 D IRIS: Here?
18 D VICTOR: Upstairs. Eight o'clock. A table for two.
19 D IRIS: How romantic.
20 D VICTOR: I try.
21 A ¶ He crosses to her.
22 A Kisses her forehead.
23 A She does not flinch, but she does not close her eyes either.
* 24 A ¶ A soft knock.
25 A Both turn.
26 D VICTOR [CONT'D]: That will be the champagne.
27 A ¶ He opens the door.
28 A A tall man in a waiter's jacket stands in the hall, tray in hand, a bottle sweating in an ice bucket.
29 A But his shoes are wrong, military black, and his hands are bare of the white gloves the hotel requires.
30 A ¶ WAITER LEONARD CROSS (30s, thin smile, calm eyes) steps in and sets the tray on the table.
31 D LEONARD: Good evening, Mr. and Mrs. Langford.
32 D IRIS: You're new.
33 D LEONARD: Very.
34 D VICTOR: Where's Henri?
35 D LEONARD: Henri has the night off.
36 D VICTOR: Henri never has a night off.
37 D LEONARD: He does tonight.
* 38 A ¶ Silence.
* 39 A The fire pops.
40 A Victor's smile fades.
41 D VICTOR: Iris, would you excuse us?
42 D IRIS: No.
43 D LEONARD: Mrs. Langford may stay.
44 D VICTOR: Of course she may. It's her suite as well.
45 D LEONARD: It is.
46 D IRIS (quietly): Victor, who is he?
47 D VICTOR: A waiter.
48 D LEONARD (at the same time): A friend of Mr. Delacroix.
* 49 A ¶ The name hangs in the air.
50 A Victor sets down his glass.
51 A Iris rises, one hand on the desk.
52 D IRIS: Delacroix.
53 D VICTOR: Iris.
54 D LEONARD: He sends his regards.
55 D IRIS: You told me he was dead.
56 D VICTOR: He is.
57 D LEONARD: Not entirely.
58 A ¶ Victor takes a step back.
59 A Iris takes a step forward.
60 A Leonard lifts the champagne bottle, peels the foil, and eases the cork.
61 D VICTOR: Iris, don't.
62 D IRIS: Leonard, is it?
63 D LEONARD: Yes.
64 D IRIS: Tell me, Leonard, what does Mr. Delacroix want?
65 D LEONARD: Everything, Mrs. Langford. But tonight, I think he'd settle for the truth.
* 66 A ¶ The cork pops.
* 67 A Foam spills over the bottle.
68 A ¶ Victor stares at it.
69 A Iris stares at Leonard.
70 A Leonard stares at no one.
71 D LEONARD [CONT'D] (pouring three glasses): Shall we begin?

### SCENE s01601 | INT. FUNERAL HOME - REPOSITORY ROOM - AFTERNOON
Detected names (may be incomplete or contain aliases): MARGUERITE OKAFOR-LINDQVIST, THEO, ASHA, DESMOND, GERTRUDE, NINA ABERNATHY
* 1 A ¶ Folding chairs.
* 2 A A coffee urn.
* 3 A Framed photos on an easel.
* 4 A The last guests are drifting toward the door.
5 A ¶ MARGUERITE OKAFOR-LINDQVIST (60s, black dress) stands by the coffin, one hand resting on its edge.
6 A Her son THEO (30s, loosened tie) collects paper cups.
7 A Her daughter ASHA (20s, red-eyed) folds programs into her purse.
8 A Her brother DESMOND (50s, rumpled suit) stares at the carpet.
9 A Her aunt GERTRUDE (80s, cane, hat with a veil) sits very upright and says nothing.
10 A And on the far side of the room, a younger woman waits near the guest book.
11 A ¶ Marguerite sets down her handkerchief, crosses to the coffee urn, pours two cups, hands one to Desmond, then sits beside Gertrude.
12 A Theo drops a cup into the trash.
13 A Asha zips her purse.
14 A ¶ The younger woman steps forward.
15 A NINA ABERNATHY (30s, gray coat, hair tied back) pauses at the edge of the circle.
16 D NINA: I'm so sorry. I didn't know whether I should come.
17 A ¶ Everyone looks at her.
18 A Marguerite sets down her cup.
19 D MARGUERITE: Who are you?
20 D NINA: Nina. I worked with your husband.
21 D DESMOND (low): I don't remember a Nina.
22 D NINA: I was the night shift.
23 A ¶ Gertrude lifts her veil an inch, studies Nina, and lowers it again.
24 D MARGUERITE: Thank you for coming.
25 D NINA: He talked about you often.
26 A ¶ Marguerite nods.
27 A She places a hand on Nina's arm, gently, and walks her to the door.

### SCENE s01602 | INT. FIELD HOSPITAL TENT - NIGHT
Detected names (may be incomplete or contain aliases): SOLEDAD ARRIAGA, SISTER AGNES KOWALSKI, COLONEL AUGUSTIN RENARD
* 1 A ¶ Canvas walls breathing in the wind.
* 2 A A generator rattles outside.
* 3 A Kerosene lamps cast long shadows over a row of cots, most empty.
4 A ¶ DR. SOLEDAD ARRIAGA (40s, sleeves rolled to the elbow, hair clipped under a cap) leans over a cot where a young soldier lies unconscious, his chest rising in shallow, uneven breaths.
5 A Her hands move with the economy of long practice: a pulse at the wrist, a lifted eyelid, a pressed palm on the sternum.
6 A ¶ Opposite her, a nurse, SISTER AGNES KOWALSKI (50s, wimple, a rosary peeking from her apron pocket), wrings out a cloth in a basin and lays it on the boy's forehead.
7 D SOLEDAD: How long since the last dose?
8 D AGNES: Forty minutes.
9 D SOLEDAD: And his pressure?
10 D AGNES: Falling.
11 A ¶ Soledad takes a breath.
12 A Straightens.
13 A Her gaze drifts to the tent flap, where the wind has begun to tug at the canvas ties.
14 D SOLEDAD: Prepare the table. We're opening him.
15 D AGNES: Doctor, without plasma...
16 D SOLEDAD: Then without plasma.
17 A ¶ Agnes hesitates, her fingers at the rosary.
18 A Then she moves, quick and quiet, to the instrument tray.
* 19 A ¶ The tent flap tears open.
* 20 A A gust of cold air swirls through the tent, snuffing two of the lamps.
21 A In the doorway stands a tall, soaked figure, rain streaming from the brim of his helmet.
22 A ¶ COLONEL AUGUSTIN RENARD (50s, medals dulled by mud, one arm in a sling) takes a step inside.
* 23 A Behind him, nothing but darkness and the sound of far-off guns.
24 D RENARD: Doctor Arriaga.
25 D SOLEDAD: Colonel. This is not a good moment.
26 D RENARD: It is the only moment I have.
27 A ¶ He glances at the boy on the cot.
28 A His jaw tightens.
29 D RENARD [CONT'D]: That one is mine.
30 D SOLEDAD: Then you may watch.
31 A ¶ Agnes holds out the scalpel.
32 A Soledad takes it.
33 A Renard removes his helmet and stands very still while the generator coughs and the lamps flicker, and the first incision is made.

### SCENE s01603 | EXT. MANGROVE SWAMP - DUSK
Detected names (may be incomplete or contain aliases): RUTH ABERNETHY-SOLIS, KIERAN, TOMASI
* 1 A ¶ Brackish water, knotted roots rising like fingers.
* 2 A A small aluminum boat lies keel-up in the shallows, half sunk in silt.
* 3 A Mosquitoes hang in veils.
4 A ¶ RUTH ABERNETHY-SOLIS (50s, torn khakis, a field notebook held above the waterline) wades thigh-deep toward the wreck.
5 A Behind her, her nephew KIERAN (20s, soaked, a coil of rope over his shoulder) hauls himself over a root.
6 A A few paces further, a guide named TOMASI (60s, bare feet, a machete resting loosely at his side) watches the treeline.
7 A ¶ Ruth reaches the boat.
8 A Runs her palm along the hull.
9 A Wipes the silt from a plate near the stern.
* 10 A A stenciled name, scratched but legible: the same one as in her notebook.
11 A ¶ She holds the notebook open beside it.
12 A Compares.
13 A Closes it without a word.
14 A ¶ Kieran lowers the rope.
15 A Tomasi turns his head.
* 16 A Far off, something large moves through the water, rippling the surface in a long slow V.
17 A ¶ None of them speaks.
18 A Ruth tucks the notebook inside her shirt.
19 A Kieran steps closer to her.
20 A Tomasi lifts the machete, a few inches, and holds it there.
* 21 A ¶ The ripple vanishes.
* 22 A The mosquitoes whine.
23 A Ruth nods once, and the three of them begin to wade, very carefully, back the way they came.

### SCENE s01604 | INT. VELODROME - INFIELD - EARLY MORNING
Detected names (may be incomplete or contain aliases): ISOLDE MAKINEN, COACH
* 1 A ¶ An enormous oval of pale wooden track banked to a steep tilt, lit by a few high lamps.
* 2 A The empty seats rise in tiers into the dark.
* 3 A The air smells of rubber and resin.
4 A ¶ ISOLDE MAKINEN (20s, skin suit, helmet hanging from one hand, a scar on her left calf) sits on an upturned crate, unlacing her cleats.
* 5 A Her bike leans against the rail, its carbon frame catching the lamplight like a blade.
6 A ¶ She stares at the track.
7 A Doesn't blink.
8 A Doesn't speak.
9 A One thumb works at a loose thread on her glove.
* 10 A ¶ A phone on the crate beside her buzzes.
11 A She glances at the screen, then back at the track.
* 12 A It buzzes again.
13 A She answers, thumb on speaker.
14 D COACH [V.O.] (over phone): You there?
15 D ISOLDE: Yes.
16 D COACH [V.O.]: Sleep?
17 D ISOLDE: Some.
18 D COACH [V.O.]: Eat?
19 D ISOLDE: A banana.
20 D COACH [V.O.]: That's not eating.
21 A ¶ She says nothing.
22 A Behind her eyes, something flickers: a thousand laps, a thousand pairs of hands, a wall of sound.
23 D COACH [V.O., CONT'D]: You ready?
24 A ¶ Isolde stands.
25 A Sets down her cleats.
26 A Steps toward the bike.
27 A Lays a palm on the saddle.
28 D ISOLDE: Ask me in four minutes.
29 A ¶ She hangs up.
