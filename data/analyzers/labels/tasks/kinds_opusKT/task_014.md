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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusKT/group_0014.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00254 | INT. DEEP-SEA RESEARCH HABITAT "THALASSA-9," MESS HALL - SHIP NIGHT
Detected names (may be incomplete or contain aliases): COMMANDER ILSE VARGA-OKONJO, MBALI NKOSI-ARRINGTON, ENGINEER DEWEY HOLLOWAY-SATO, PRIYA, DESAI-BRANDT, NEWCOMER, ARTHUR
* 1 A ¶ Low ceiling.
* 2 A Portholes show black water.
* 3 A A table bolted to the floor.
* 4 A Steam from five bowls of reconstituted soup.
5 A ¶ Five crew eat in tired silence.
6 A ¶ COMMANDER ILSE VARGA-OKONJO (50s, grey crewcut, flight jacket) cuts a biscuit in half.
7 A ¶ DR. MBALI NKOSI-ARRINGTON (30s, marine biologist, spectacles on a string) stirs her soup without drinking.
8 A ¶ ENGINEER DEWEY HOLLOWAY-SATO (40s, wrench in his belt) scrapes his bowl.
9 A ¶ TECH PRIYANKA "PRIYA" DESAI-BRANDT (20s, tablet in one hand, spoon in the other) scrolls through readings.
10 A ¶ And a quiet man, face smudged with grease, who has not given his name: A NEWCOMER (30s, orange vest, new boots).
11 D ILSE: Anyone want to say anything?
* 12 A ¶ Silence.
* 13 A A pipe knocks somewhere.
14 D MBALI: The trench is warmer than yesterday.
15 D DEWEY: Everything's warmer than yesterday.
16 D PRIYA: Not everything. Pressure's flat.
17 D NEWCOMER: Flat is good.
18 D DEWEY: Flat is boring.
19 D ILSE: I like boring.
20 D PRIYA: I like flat.
21 D MBALI: I like soup.
22 A ¶ They eat.
* 23 A A porthole flickers: a pale shape drifts past and is gone.
24 D MBALI [CONT'D]: Did anyone see that?
25 D PRIYA: What?
26 D DEWEY: Fish.
27 D MBALI: It was larger than fish.
28 D ILSE: Dr. Nkosi-Arrington, the instruments say nothing.
29 D MBALI: The instruments aren't looking out the window.
30 D NEWCOMER: It's the lights. They attract plankton.
31 D DEWEY: Plankton doesn't look back.
32 D PRIYA: Did it look back?
33 D MBALI: I don't know.
* 34 A ¶ The table goes quiet.
35 A Priya sets down her tablet, face up.
36 A Everyone leans in.
37 D ILSE: Priya. Readings.
38 D PRIYA: Nothing. A small thermal bloom, two hundred meters out.
39 D DEWEY: Heat means life.
40 D MBALI: Or a vent.
41 D NEWCOMER: Or us.
42 A ¶ Ilse looks at him.
43 A He looks at her.
44 A After a moment she nods and resumes cutting her biscuit.
45 D ILSE: Eat. We have a shift in an hour.
46 A ¶ They eat.
* 47 A Nobody speaks.
* 48 A The pipe knocks again.
49 A ¶ Then the newcomer says, softly, to no one:
50 D ARTHUR: Name's Arthur.
51 D ILSE: Welcome, Arthur.
52 D DEWEY: Welcome.
53 D PRIYA: Welcome.
54 D MBALI: Welcome. Your boots are very new.
55 D ARTHUR: They're the only thing I own.
56 A ¶ Mbali smiles for the first time.
57 A The others do too.
* 58 A Outside, the porthole darkens again.

### SCENE s00255 | INT. REGIONAL BAKING CHAMPIONSHIP, COMMUNITY HALL - AFTERNOON
Detected names (may be incomplete or contain aliases): BERNIE, OKONKWO-PRYCE, CORKY, ABERNATHY-LIU, GWENDOLYN MUKHERJEE-FALLOWS, OLLIE, TEMPLETON-ADAIR, OISE OLUWASEUN-LEBLANC, FRANÇOISE
* 1 A ¶ Bunting.
* 2 A Folding tables.
* 3 A A smell of sugar and mild panic.
4 A Contestants stand at oven stations in matching aprons.
5 A ¶ Five of them cluster near the judges' table, where a lemon tart sits under a glass dome.
6 A ¶ BERNADETTE "BERNIE" OKONKWO-PRYCE (60s, apron with a hand-stitched rolling pin) wipes flour from her glasses.
7 A ¶ CORNELIUS "CORKY" ABERNATHY-LIU (30s, hair net, drawn-on mustache) sulks beside a deflated soufflé.
8 A ¶ GWENDOLYN MUKHERJEE-FALLOWS (40s, crisp white chef's jacket) arranges a perfect row of macarons.
9 A ¶ ORVILLE "OLLIE" TEMPLETON-ADAIR (70s, suspenders) hums off-key over a tray of shortbread.
10 A ¶ And the judge, MADAME FRANÇOISE OLUWASEUN-LEBLANC (50s, silk scarf, expression of permanent disappointment), lowers herself into the central chair.
11 D FRANÇOISE: Contestants. Time.
12 D BERNIE: Time!
13 D CORKY: Time?
14 D GWENDOLYN: Time.
15 D OLLIE (humming): Time, time, time.
16 D FRANÇOISE: Mr. Abernathy-Liu, your soufflé has fallen.
17 D CORKY: It's resting.
18 D FRANÇOISE: It is flat.
19 D CORKY: It's modernist.
20 D BERNIE: It's a pancake, dear.
21 D CORKY: It's an homage to the pancake.
22 D GWENDOLYN: Mine rose perfectly.
23 D BERNIE: Yours is a macaron, Gwen. It's required to.
24 D GWENDOLYN: Don't be catty.
25 D OLLIE: I'm not catty. I'm shortbread.
26 D FRANÇOISE: Mr. Templeton-Adair, you are not allowed to hum.
27 D OLLIE: I'm not humming.
28 D FRANÇOISE: You are.
29 D OLLIE: It's the oven.
* 30 A ¶ The oven timer BEEPS.
31 A Everyone jumps.
32 A Gwendolyn's elbow knocks her tray.
* 33 A Macarons scatter across the floor like pastel dice.
34 A Corky dives, Bernie dives, Ollie dives.
35 A The three of them collide, flour clouds going up, a tangle of aprons.
36 D FRANÇOISE (standing): Stop! Stop at once!
37 A ¶ Bernie surfaces with a macaron in her teeth.
38 A Corky has a mouthful of shortbread.
39 A Ollie is under the table.
40 A Gwendolyn stands frozen, hands at her cheeks.
41 D GWENDOLYN (whispering): Eight hours.
42 D FRANÇOISE: Mrs. Mukherjee-Fallows.
43 D GWENDOLYN: Eight hours I stood at that oven.
44 D BERNIE (spitting out the macaron): It's not bad, actually.
45 D CORKY (muffled): Quite good.
46 D OLLIE (from under the table): Can someone pass a plate?
47 A ¶ Françoise sits slowly, looks at the wreckage, and for the first time lifts a hand to her mouth to hide a smile.
48 D FRANÇOISE: I have never seen such a thing.
49 D BERNIE: Does that mean we won?
50 D FRANÇOISE: It means I'm hungry.

### SCENE s00256 | INT. NIGHT BOAT, RIVER DANUBE - NIGHT
Detected names (may be incomplete or contain aliases): OLGA RADOMSKA-IKEJIANI, DETECTIVE KASPAR NWANKWO-BRUUN, LAURA
* 1 A ¶ A narrow cabin.
* 2 A Brass lamp.
* 3 A Curtains drawn.
* 4 A A tray with two untouched cups of tea.
5 A ¶ OLGA RADOMSKA-IKEJIANI (40s, black gloves, a fur collar) sits on the bunk.
6 A She stirs her tea slowly, never lifting it.
7 A ¶ Across from her, DETECTIVE KASPAR NWANKWO-BRUUN (50s, trench, bruised knuckles) leans against the door.
8 A ¶ He is calm.
9 A She is calm.
* 10 A The boat rocks.
11 D KASPAR: You knew him.
12 D OLGA: Everyone knew him.
13 D KASPAR: Better than most.
14 D OLGA: Worse.
15 D KASPAR: He wrote to you every week.
16 D OLGA: Letters are cheap.
17 A ¶ She sips.
18 A Sets the cup down.
19 A He watches the cup, not her.
20 D KASPAR: He's dead, Olga.
21 D OLGA: So I hear.
22 D KASPAR: Poisoned.
23 D OLGA: How careless.
24 A ¶ He moves.
25 A In a single step he is across the cabin.
26 A She rises just as quickly.
27 A They stand an inch apart.
28 D KASPAR [CONT'D] (quietly): Give me the glove.
29 D OLGA: Which?
30 D KASPAR: The left.
31 A ¶ She holds out her left hand.
32 A He takes it.
33 A Peels the glove, finger by finger.
* 34 A ¶ On her wrist: a bruise shaped like a ring of fingertips.
35 D KASPAR [CONT'D]: He fought.
36 D OLGA: He was stronger than he looked.
37 D KASPAR: Than you looked.
38 A ¶ She yanks free.
39 A He catches her again.
40 A They grapple.
* 41 A The lamp swings.
* 42 A Tea spills across the floor.
43 A She wrenches a hairpin from her hair, jabs at his arm.
44 A He twists it away.
45 A Both crash onto the bunk, breathing hard.
* 46 A ¶ Then the cabin door opens.
* 47 A A woman's voice, off-screen, calm and amused:
48 D LAURA [O.S.]: Kaspar. Olga. You're both very loud.
49 A ¶ They freeze.
50 A Kaspar, over Olga, hand at her throat.
51 A Olga, under him, the pin at his ribs.
52 D OLGA (whispering): Who is that?
53 D KASPAR (whispering back): My wife.
54 A ¶ Olga laughs, a low rich laugh.
55 A He lets go.
56 A She sits up, smoothing her fur.
57 D OLGA: Then this is a very different kind of poisoning.

### SCENE s00257 | INT. HOSPITAL ROOFTOP HELIPAD - NIGHT
Detected names (may be incomplete or contain aliases): MALACHI BOUSSARD-OJO, WOMAN, LONG GREY COAT, DELPHINE
* 1 A ¶ Wind.
* 2 A Orange safety lights.
* 3 A The city spreads below like a spilled circuit board.
4 A ¶ DR. MALACHI BOUSSARD-OJO (40s, scrubs under a parka) leans on the railing, staring at the lights.
* 5 A A thermos steams beside him.
* 6 A ¶ Boots on metal stairs.
* 7 A The door opens.
8 A ¶ A WOMAN IN A LONG GREY COAT (30s, hospital badge flipped backwards) steps out and stops five feet away.
9 D MALACHI: You shouldn't be up here.
10 D WOMAN: Neither should you.
11 D MALACHI: I'm on break.
12 D WOMAN: So am I.
13 A ¶ She walks to the railing.
14 A Stands beside him.
15 A He pours coffee into the thermos cap, offers it.
16 A She takes it.
17 D WOMAN [CONT'D]: Thanks, Dr. Boussard-Ojo.
18 D MALACHI: You know my name.
19 D WOMAN: It's on the schedule.
20 D MALACHI: I don't know yours.
21 D WOMAN: Not yet.
22 A ¶ She sips.
23 A Looks at the city.
24 A He watches her.
25 A She hands the cap back, empty.
26 A He fills it again.
27 D MALACHI: Third floor. Bed twelve. Did you know him?
28 D WOMAN: Mr. Prokopiou?
29 D MALACHI: Yes.
30 D WOMAN: I did.
31 D MALACHI: He died an hour ago.
32 D WOMAN: I know. I was with him.
33 D MALACHI: Not on the chart.
34 D WOMAN: I'm not on any chart.
* 35 A ¶ A siren climbs the hill and fades.
36 A Malachi stiffens.
37 A She looks at him steadily.
38 D MALACHI: Who are you?
39 D WOMAN: Delphine. Delphine Ashworth.
40 D MALACHI: The inspector from the board?
41 D DELPHINE: The same.
42 D MALACHI (low): You were here the whole time.
43 D DELPHINE: Since Tuesday.
44 A ¶ His hand shakes.
45 A The thermos cap spills.
46 A He wipes his palm on his thigh, steps back, and she steps forward.
47 A He grips the railing.
48 A She grips his sleeve.
49 A Their eyes lock for a long time, wind snapping both coats against their legs.
50 D DELPHINE [CONT'D]: Dr. Boussard-Ojo, the insulin dose you ordered was ten times the standard.
51 D MALACHI: It was a clerical error.
52 D DELPHINE: It was initialed in your handwriting.
53 D MALACHI (whispering): I was tired.
54 D DELPHINE: Everyone is tired.
55 A ¶ He pulls free.
56 A Paces to the helipad's yellow circle.
57 A Stands in its center, head bowed.
58 D MALACHI (quietly): He was in pain. For eleven days.
59 D DELPHINE: And?
60 D MALACHI: I thought I was doing him a kindness.
61 D DELPHINE: You were doing yourself one.
62 A ¶ He looks up.
* 63 A The wind drops.
* 64 A Far below, a patrol car pulls into the emergency bay, its lights spinning blue and red against the glass.
65 D MALACHI: You called them.
66 D DELPHINE: At the start of break.
67 D MALACHI: Why wait?
68 D DELPHINE: I wanted to hear you say it.
69 A ¶ She picks up the thermos, screws the lid on, and sets it gently at his feet.
70 A He stares at it.
71 A Then slowly, he sits down in the yellow circle and lets the cold come.

### SCENE s00258 | EXT. TRAIN WATER TOWER, RAILWAY SIDING - NIGHT
Detected names (may be incomplete or contain aliases): WIDOW HESTER GALLOWAY-BIRD, TRAVELLING DOCTOR AMARA OKONKWO-WESTBROOK
* 1 A ¶ A wooden tower on iron legs.
* 2 A A pump house.
* 3 A Rails vanish into dark prairie.
4 A ¶ Two women sit under it, a small fire between them, boots stretched toward the heat.
5 A ¶ WIDOW HESTER GALLOWAY-BIRD (60s, wide-brimmed hat, shotgun across her knees) pokes the embers with a stick.
6 A ¶ TRAVELLING DOCTOR AMARA OKONKWO-WESTBROOK (40s, black bag, dusty skirt) writes in a leather book.
* 7 A ¶ The fire cracks.
8 D HESTER: You writing about me?
9 D AMARA: About the weather.
10 D HESTER: No weather in that book.
11 D AMARA: It's a long book.
12 A ¶ Hester snorts.
13 A Amara closes the cover, folds her hands.
14 D HESTER: Where you headed?
15 D AMARA: North. There's a fever in Redwater.
16 D HESTER: Redwater's dead.
17 D AMARA: Not all of it.
18 D HESTER: Not all, I'll grant you.
19 D AMARA: How far is it?
20 D HESTER: Two days on foot. One on a horse.
21 D AMARA: I've no horse.
22 D HESTER: I have.
23 D AMARA: Is she for sale?
24 D HESTER: She's not a she. She's a gelding. And no.
25 D AMARA: Rent, then.
26 D HESTER (to the fire): I've been waiting thirty years for someone to ask me that.
27 D AMARA: Is that a yes?
28 D HESTER: It's a story.
29 D AMARA: Tell it.
30 D HESTER: My husband had a horse. Same gelding's mother. He rode her to Redwater the winter of the sickness. Carried medicine.
31 D AMARA: And?
32 D HESTER: He didn't come back.
33 D AMARA: I'm sorry.
34 D HESTER: Don't be. He was a fool. He said she'd carry him anywhere.
35 D AMARA: Did she?
36 D HESTER: She came back. Alone. Saddle empty.
37 D AMARA (softly): She did her job.
38 D HESTER (to the fire): Everybody does, eventually.
39 A ¶ She stirs the embers.
* 40 A Sparks swirl into the black.
41 D HESTER [CONT'D] (louder, to the dark): Hear that? She'll ride.
42 D AMARA: Who are you talking to?
43 D HESTER: The horse. And the husband.
44 A ¶ Amara smiles in spite of herself.
45 A She reaches over, takes the stick, and pokes the fire herself.
46 D AMARA: Then let's sleep. We leave at dawn.
47 D HESTER: We?
48 D AMARA: You're not letting a stranger ride your husband's horse alone.
49 A ¶ Hester looks at her.
50 A For the first time, she laughs.
51 D HESTER: Doctor, you're smarter than you look.
52 D AMARA: I've been told.
53 A ¶ They settle back.
* 54 A The rails hum faintly in the cold.
* 55 A Far off, a whistle.

### SCENE s00259 | EXT. FLOATING MARKET OF THE LANTERN SEA - DUSK
Detected names (may be incomplete or contain aliases): QUEEN-MOTHER OSHUN ADEBAYO-LUMINARA, PRINCE TAMSIN LUMINARA-VOSS, NERISSA KALOMBO-AQUILA, BARNABAS, OYELOWO-SMYTHE, PIPPA TRELAWNEY-ANAYA
* 1 A ¶ Hundreds of boats lashed together on a windless lagoon.
* 2 A Paper lanterns hang from masts.
* 3 A Traders call across the water in a tangle of tongues.
* 4 A Drifting steam smells of spice and rain.
5 A ¶ At the heart of the market, on a barge strung with silver bells, five figures stand in a ring.
6 A ¶ QUEEN-MOTHER OSHUN ADEBAYO-LUMINARA (70s, sea-silk robe, crown of coral) holds a trident in one hand and a small carved box in the other.
7 A ¶ Her son, PRINCE TAMSIN LUMINARA-VOSS (30s, silver armor, bloodshot eyes), stands stiffly at her right.
8 A ¶ The sorceress NERISSA KALOMBO-AQUILA (40s, indigo cloak, hair braided with shells) waits on her left.
9 A ¶ An old pirate captain, BARNABAS "BLACK BARNEY" OYELOWO-SMYTHE (60s, one eye, huge laugh), leans on a cutlass.
10 A ¶ And the ferryman's daughter, PIPPA TRELAWNEY-ANAYA (14, barefoot, bright), clings to a mast.
11 D OSHUN (into the crowd): Friends. Neighbors. Traders of the Lantern Sea. I have called you here to end the feud.
* 12 A ¶ Silence ripples across the boats.
* 13 A Bells chime softly.
14 D TAMSIN: Mother, this is unwise.
15 D OSHUN: It is overdue.
16 D NERISSA: It is a trap.
17 D OSHUN: It is a truce.
18 D BARNABAS (booming): Truce! I love a truce. When do we eat?
19 D PIPPA (whispering from the mast): Captain Barney, hush.
20 D BARNABAS: I can't hush. I'm a pirate.
21 D OSHUN: Barnabas. Your fleet will withdraw from the northern channel.
22 D BARNABAS: My fleet will think about it.
23 D OSHUN: Your fleet will withdraw.
24 D BARNABAS (grinning): Of course, Majesty.
25 D NERISSA: And the sorcerers' guild?
26 D OSHUN: Will return the stolen tides.
27 D NERISSA: They were not stolen. They were borrowed.
28 D OSHUN: For three centuries.
29 D NERISSA: It was a long loan.
30 D TAMSIN: Mother, enough.
31 D OSHUN: Silence, Tamsin.
32 A ¶ She opens the carved box.
* 33 A Inside rests a pearl the size of a fist, dull and grey.
34 D OSHUN [CONT'D]: This is the Heart of the Lagoon. It has been dying for forty years. Unless all of you swear on it, it dies tonight.
* 35 A ¶ Gasps ripple.
36 A Tamsin steps forward and seizes the box.
37 A Barnabas draws his cutlass.
38 A Nerissa raises a hand and the water around the barge begins to rise.
39 A Pippa leaps from the mast and lands between them all.
40 D PIPPA (shouting): Stop it! All of you!
41 A ¶ They freeze.
* 42 A Cutlass.
* 43 A Hand.
* 44 A Hand on the box.
* 45 A The lanterns sway.
46 D PIPPA [CONT'D] (quietly): My father says a pearl dies when it stops being held.
47 D OSHUN: Child--
48 D PIPPA: So hold it. Together.
* 49 A ¶ A long moment.
50 A Then Tamsin lowers his hand.
51 A Barnabas sheathes his cutlass.
52 A Nerissa lets the water fall.
53 A Oshun, tired, extends the box.
54 A One by one, they each place a hand on the pearl.
* 55 A ¶ The grey surface warms.
* 56 A A faint pulse of silver rises, then gold, then every color the lanterns carry.
57 A ¶ The crowd exhales.
* 58 A The boats begin to rock gently, as if the lagoon itself had sighed.
59 D BARNABAS (under his breath): Well, I'll be.
60 D NERISSA: It has been a long time since it glowed.
61 D TAMSIN (to Oshun, softly): Forgive me, Mother.
62 D OSHUN: There is nothing to forgive. Hold the light.
63 D PIPPA: Can I go home now?
64 D BARNABAS (roaring with laughter): She wants to go home! The savior of the sea wants to go home!
65 D OSHUN (smiling): Pippa Trelawney-Anaya, you may go anywhere you like.
66 A ¶ Pippa grins, drops from the barge into a small skiff, and begins to row, the lanterns blooming on the water around her.

### SCENE s00260 | INT. ABANDONED LIGHTHOUSE KEEPER'S QUARTERS - NIGHT
Detected names (may be incomplete or contain aliases): HARPER OSEI-LINDQVIST, JAZ, ABERNATHY-TRAN, KEZIAH ONYANGO-FALLOWS, MATT, KOWALSKI-BELLO, LOTTIE SUNDARAM-REEVES, KEEPER
* 1 A ¶ A round room.
* 2 A Peeling wallpaper the color of old tea.
* 3 A A cast-iron stove.
* 4 A A spiral stair winding up into darkness.
* 5 A Salt crusts the windows.
6 A ¶ Five friends have made camp on the floor with sleeping bags and flashlights.
7 A ¶ HARPER OSEI-LINDQVIST (20s, canvas jacket, mug of instant coffee) sits cross-legged near the stove.
8 A ¶ JASPER "JAZ" ABERNATHY-TRAN (20s, knit cap, deck of cards) shuffles with a nervous flick.
9 A ¶ KEZIAH ONYANGO-FALLOWS (20s, vintage windbreaker, hair in a bandana) reads a tattered logbook by flashlight.
10 A ¶ MATEUSZ "MATT" KOWALSKI-BELLO (30s, flannel, camera tripod) adjusts a lens.
11 A ¶ And LOTTIE SUNDARAM-REEVES (20s, oversized sweater, pale), who hasn't spoken since they arrived, hugs her knees by the window.
12 D HARPER: So the logbook. Read it again.
13 D KEZIAH: "October ninth. Fog thick as wool. The light turns but no ship answers. I hear footsteps on the stair, though I am alone."
14 D JAZ: Spooky.
15 D KEZIAH: "October tenth. The footsteps again. This time they stop at my door."
16 D MATT: Cut it. We can't use this on camera.
17 D JAZ: Why not?
18 D MATT: It's too good. We'll need to reshoot.
19 D HARPER: It's a log, Matt. It's not a script.
20 D KEZIAH: "October eleventh. The door is open. I did not open it."
* 21 A ¶ A creak from the stair above.
22 A Everyone looks.
* 23 A Nothing.
* 24 A Only the dark.
25 D LOTTIE (very quietly): There's something on the stairs.
26 D HARPER: There's nothing.
27 D LOTTIE: There's something.
28 D MATT: Where?
29 D LOTTIE: The third landing.
30 A ¶ Keziah clicks her flashlight toward the third landing.
* 31 A The beam finds a pale shape, slim and still, standing with its head tilted.
32 A A figure in a keeper's coat, face blurred as if seen through wet glass.
33 D KEZIAH: Oh no.
34 D JAZ: Don't move. Nobody move.
35 D HARPER (through her teeth): Matt, are you filming?
36 D MATT: Yes.
37 D HARPER: Keep filming.
38 A ¶ The figure takes one step down.
* 39 A The boards creak.
* 40 A Another.
41 A Jaz drops the cards; they scatter like white birds.
42 A Matt swings the camera.
43 A Lottie rises, steps toward the stair, mesmerized.
44 D KEZIAH: Lottie, don't.
45 D LOTTIE: It wants to show me something.
46 D HARPER: Lottie!
47 A ¶ She grabs Lottie's arm.
48 A Lottie turns, eyes glassy, smiling.
49 D LOTTIE (softly): He's lonely.
50 A ¶ The figure reaches the second landing.
* 51 A The temperature drops.
* 52 A Their breath fogs.
* 53 A The stove flame bends sideways, then goes out.
* 54 A ¶ Darkness.
* 55 A Five flashlights jitter.
* 56 A Five beams find the keeper's coat, now at the bottom of the stair, its face almost clear.
* 57 A Almost human.
58 D KEEPER (a whisper, a wind): Stay.
59 A ¶ Jaz screams.
60 A Matt backs into the stove.
61 A Keziah slams the logbook shut.
62 A Harper wrenches Lottie back with both hands, and the five of them stumble toward the door.
63 A They crash through it, tumbling onto the wet grass outside.
* 64 A The sea roars.
* 65 A The lighthouse beam sweeps over them, steady, impossible, from a lamp that has been dead for forty years.
66 A ¶ They stare up.
* 67 A The beam swings away.
68 A ¶ Lottie, panting, laughs weakly.
69 D LOTTIE [CONT'D]: Nobody believed me.
70 D MATT (shaking): I got it. I got all of it.
71 D HARPER: Delete it.
72 D MATT: What?
73 D HARPER: Delete it. Please.
74 A ¶ Matt looks at the camera.
75 A At Harper.
76 A At the lighthouse.
77 A He nods.
78 A Presses the button, and the light on the camera goes out.

### SCENE s00261 | EXT. CROSSROADS SHRINE IN A PINE FOREST - TWILIGHT
Detected names (may be incomplete or contain aliases): ARTY, OKAFOR-LINDEN, BROTHER MALACHAI TREVELYAN-BOSE, KESTREL AMANI-DUNBAR, SIR OSWALD PEMBERTON-ADEYEMI, GIRL
* 1 A ¶ A stone cairn at the meeting of four paths, crowned with offerings: ribbons, acorns, a child's wooden horse.
* 2 A Mist threads between the pines.
3 A ¶ Four travellers arrive from four directions and stop, each at the edge of the clearing.
4 A ¶ ARTEMISIA "ARTY" OKAFOR-LINDEN (30s, scout, hooded cloak, short bow) crouches beside the cairn and touches a ribbon.
5 A ¶ BROTHER MALACHAI TREVELYAN-BOSE (50s, cleric, bronze bell hung at his belt) removes his hat in the shrine's presence.
6 A ¶ KESTREL AMANI-DUNBAR (20s, thief, patched leathers, two daggers) leans on a pine, arms crossed, looking bored.
7 A ¶ And SIR OSWALD PEMBERTON-ADEYEMI (40s, knight, tarnished armor, a battered shield with a painted sun) stands with his sword point-down in the loam.
8 D OSWALD: Four roads, four travellers. I take it we all received the same summons.
9 D ARTY: A black feather on the doorstep.
10 D KESTREL: Same.
11 D MALACHAI: A feather in the offering plate.
12 D OSWALD: Mine was nailed to my gate.
13 D KESTREL: Dramatic.
14 D OSWALD: Quite.
15 D ARTY: So who sent it?
16 D MALACHAI: Not who. What.
17 D KESTREL: Here we go.
18 D MALACHAI: The shrine. The shrine called us.
19 D KESTREL: Shrines don't call. They sit.
20 D MALACHAI: This one speaks, if one listens.
21 D OSWALD: Brother, let us listen, then.
* 22 A ¶ Silence.
* 23 A A wind passes, bringing cold.
* 24 A The ribbons ripple.
25 A Arty cocks her head.
26 D ARTY: Someone's coming.
* 27 A ¶ Footsteps in the pines.
28 A The four draw weapons and turn together.
29 A ¶ A small girl steps out of the mist.
30 A Perhaps nine.
31 A Ragged coat, bare feet, a black feather braided in her hair.
32 A She carries a wooden bowl.
33 D GIRL: Hello.
34 D OSWALD: Child. Where is your family?
35 D GIRL: They're gone. I live here now.
36 D KESTREL: Alone?
37 D GIRL: With the roads.
38 D MALACHAI: Child, did you send these feathers?
39 D GIRL (nodding): Four of you. That's the right number.
40 D ARTY: For what?
41 A ¶ The girl sets down the bowl at the foot of the cairn.
* 42 A It is filled with dark water.
43 D GIRL: To drink.
44 D KESTREL: Pass.
45 D GIRL: It's a promise.
46 D OSWALD: What kind of promise?
47 D GIRL: That you'll come back. After.
48 D MALACHAI: After what?
49 A ¶ The girl smiles, very faintly.
* 50 A The mist thickens.
* 51 A Behind the pines, something enormous exhales, and the ground trembles.
52 D ARTY (low): Oswald.
53 D OSWALD: I feel it.
54 D KESTREL: Oh, great.
55 D MALACHAI: Child, what is out there?
56 D GIRL: That's what you're for.
* 57 A ¶ The ground shudders again.
* 58 A Pinecones rattle down.
* 59 A Branches break.
60 A The four glance at one another.
61 A Then, one by one, they step to the bowl, dip their hands, and drink.
* 62 A ¶ The water is cold as iron.
63 A Oswald coughs.
64 A Kestrel swears.
65 A Arty gasps and clutches her chest.
66 A Malachai rings his bell once, bright and clear.
* 67 A ¶ Light blooms from the cairn.
* 68 A The mist retreats, trembling.
69 D GIRL [CONT'D]: Thank you.
70 D OSWALD: Child, what is your name?
71 D GIRL: I don't have one yet.
72 A ¶ She turns and walks into the pines.
73 A The four watch her go, then raise their weapons to the dark.
74 D KESTREL (muttering): Should have taken the money.

### SCENE s00262 | EXT. ICE CAVE UNDER A COLLAPSING GLACIER - DAY
Detected names (may be incomplete or contain aliases): LEOCADIA MWANGI-HALVORSEN, TOBIAS ADEGOKE-LINDGREN
* 1 A ¶ Blue walls.
* 2 A Meltwater running in thin silver threads across the floor.
* 3 A Overhead, the ice groans like a living thing.
4 A ¶ Two climbers in torn gear crouch near the cave mouth.
* 5 A Their ropes lie in a coil between them, one end frayed.
6 A ¶ DR. LEOCADIA MWANGI-HALVORSEN (40s, glaciologist, split lip) tapes a gash in her thigh.
7 A She works fast, jaw clenched.
8 A ¶ Across from her, her expedition partner TOBIAS ADEGOKE-LINDGREN (30s, mountaineer, frostbitten ears) tests the sharpness of an ice axe with his thumb.
9 D LEOCADIA: Our rope won't hold another fall.
10 D TOBIAS: Then we don't fall.
11 D LEOCADIA: Tobias.
12 D TOBIAS: Leocadia.
13 D LEOCADIA: Eight hundred meters to the glacier terminus. Without a rope.
14 D TOBIAS: Seven fifty.
15 D LEOCADIA: Does it matter?
16 D TOBIAS: It matters to me.
17 D LEOCADIA: Why?
18 D TOBIAS: Because it's less.
19 A ¶ She laughs, then winces.
20 A He tosses her a chocolate bar.
21 A She catches it one-handed.
22 D LEOCADIA: How many left?
23 D TOBIAS: Three.
24 D LEOCADIA: Four, if we split yours.
25 D TOBIAS: I ate mine.
26 D LEOCADIA: You always eat yours.
27 D TOBIAS: I have a metabolism.
28 D LEOCADIA: You have a problem.
* 29 A ¶ Silence.
* 30 A The ice groans louder.
* 31 A A trickle of water becomes a stream, curling around their boots.
32 D TOBIAS: Leo.
33 D LEOCADIA: I hear it.
34 D TOBIAS: The glacier's moving.
35 D LEOCADIA: It's always moving.
36 D TOBIAS: Faster.
37 A ¶ She stands, wincing, and puts a hand against the wall.
* 38 A It hums.
39 D LEOCADIA: We go. Now.
40 D TOBIAS: Without gear?
41 D LEOCADIA: Without everything.
42 A ¶ They shoulder packs, scramble toward the cave mouth.
* 43 A The ceiling cracks, a long hairline racing across the blue.
44 A Tobias grabs her arm.
45 A She grabs his.
46 A They both look up as a slab the size of a truck shears loose.
47 A ¶ They dive.
* 48 A The slab lands where they stood, spraying frozen shards.
49 A Leocadia tumbles through the opening, Tobias behind, both rolling into the white glare of day.
50 A ¶ They lie on their backs, gasping.
* 51 A Behind them, the cave collapses, groaning, with a final thunderous sigh.
* 52 A ¶ Dust settles.
* 53 A Snow glitters.
* 54 A A distant raven calls.
55 D TOBIAS (laughing, breathless): Seven fifty.
56 D LEOCADIA: Seven hundred. We just walked fifty.
57 D TOBIAS: We crawled fifty.
58 D LEOCADIA: Counts.
59 A ¶ They sit up.
60 A She offers him the chocolate.
61 A He shakes his head.
62 A She breaks it in half, hands him the bigger piece.
63 D TOBIAS: Leo.
64 D LEOCADIA: Eat.
65 A ¶ He eats.
66 A She watches the sky.
67 D LEOCADIA [CONT'D] (quietly): I'm tired.
68 D TOBIAS: I know.
69 D LEOCADIA: Don't say anything.
70 D TOBIAS: I won't.
71 A ¶ They sit in the sun a long time.
72 A Neither speaks.
* 73 A The glacier moves under them like a slow breath.
74 A ¶ Eventually she rises, offers him her good hand.
75 A He takes it.
76 A They start walking.

### SCENE s00263 | INT. COACHING INN STABLE LOFT, ENGLAND - NIGHT, 1788
Detected names (may be incomplete or contain aliases): LADY GEORGIANA ASHWORTH-OLUWOLE, STRANGER, MATTHIAS, A VOICE, SOLDIER
* 1 A ¶ Hay.
* 2 A Lantern light.
* 3 A The smell of horse and rain.
* 4 A A rope ladder to the yard below.
5 A ¶ A cloaked figure crouches in the straw, back to the wall, pistol held in both hands.
* 6 A ¶ The ladder creaks.
7 A ¶ LADY GEORGIANA ASHWORTH-OLUWOLE (30s, riding habit torn at the hem, hair coming loose) climbs into the loft and freezes at the sight of the pistol.
8 D GEORGIANA: Put that away, please.
9 D STRANGER: Stay where you are.
10 D GEORGIANA: I have been riding for nine hours. I will sit.
11 A ¶ She sits on a hay bale.
12 A The stranger does not lower the pistol.
13 D STRANGER: Who sent you?
14 D GEORGIANA: Nobody. I own the horse in the third stall. I came to check on her.
15 D STRANGER: Liar.
16 D GEORGIANA: I assure you, I am not.
17 A ¶ The stranger leans out of shadow.
18 A A man, late twenties, rain-soaked, hollow-eyed, in the coat of a courier.
19 D STRANGER [CONT'D]: The horse in the third stall is mine.
20 D GEORGIANA: It is a grey mare with a white sock?
21 D STRANGER (beat): A brown gelding.
22 D GEORGIANA: Then we are both mistaken.
23 A ¶ She smiles, tilts her head, and the tension shifts, just slightly.
24 A He lowers the pistol an inch.
25 D STRANGER: I am a courier. I carry letters for the Crown.
26 D GEORGIANA: How dull.
27 D STRANGER: You'd be surprised.
28 D GEORGIANA: Show me one.
29 D STRANGER: No.
30 D GEORGIANA: Then tell me your name, courier.
31 A ¶ He hesitates, searching her face for a lie.
32 D STRANGER: Matthias.
33 D GEORGIANA: Matthias what?
34 D MATTHIAS: Just Matthias.
35 D GEORGIANA: Then call me Georgiana. Just Georgiana.
* 36 A ¶ The ladder creaks again.
37 A Both turn.
* 38 A Boots on the rungs.
* 39 A Torchlight on the beams.
40 D A VOICE [O.S.] (from below): Search the loft!
41 A ¶ Matthias grabs her arm.
42 A She grabs his wrist.
43 A They freeze, nose to nose, as torchlight crawls along the straw.
44 D MATTHIAS (whispering): They've come for me.
45 D GEORGIANA: Then they shall have us both.
46 D MATTHIAS: Why?
47 D GEORGIANA: Because I'm tired of being polite.
48 A ¶ She yanks him down into the hay.
49 A Pulls her cloak over them both.
* 50 A Torchlight sweeps over the rafters.
51 A A soldier's head appears at the top of the ladder, squinting.
52 D SOLDIER [O.S.]: Nothing here.
53 D SOLDIER [CONT'D] (calling): Only straw and horse-dung!
54 A ¶ The head vanishes.
* 55 A Boots descend.
* 56 A Silence returns.
57 A ¶ Matthias and Georgiana lie breathless beneath the cloak.
58 D GEORGIANA (whispering): You're heavier than you look.
59 D MATTHIAS: You're braver than you look.
60 D GEORGIANA: We are both liars.
61 D MATTHIAS: Obviously.
62 A ¶ They begin, helplessly, to laugh.
63 A Then to shake.
64 A Then, finally, to lie very still, listening to the rain on the slates.
65 A ¶ Matthias slides the pistol into his belt.
66 D MATTHIAS [CONT'D] (to the room): I owe you.
67 D GEORGIANA (to him): I'll collect.

### SCENE s00264 | INT. PARKED CAR, PARKING GARAGE LEVEL P3 - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE CASSIUS ONWUDIWE-HARLOW, DISPATCH
* 1 A ¶ Concrete.
* 2 A Sodium light.
* 3 A A car idling, engine just above a whisper.
4 A ¶ DETECTIVE CASSIUS ONWUDIWE-HARLOW (50s, stained trench, thermos in the cupholder) sits behind the wheel.
5 A Alone.
6 A ¶ He watches an elevator door.
* 7 A It does not open.
8 A ¶ He turns off the engine.
* 9 A Silence.
* 10 A A drip somewhere.
11 A ¶ He picks up a cell phone.
12 A Dials.
13 A Puts it to his ear.
14 D DISPATCH [V.O.]: Dispatch.
15 D CASSIUS: Cassius Harlow. Badge two-one-four. I'm on P3 at the Meridian.
16 D DISPATCH [V.O.]: Copy, Detective. Status?
17 D CASSIUS: Stakeout. Nothing yet.
18 D DISPATCH [V.O.]: Need backup?
19 D CASSIUS: No.
20 D DISPATCH [V.O.]: Detective, it's two a.m.
21 D CASSIUS: I know what time it is.
22 D DISPATCH [V.O.]: You've been there six hours.
23 D CASSIUS: Seven.
24 A ¶ He sets the phone on the dash.
25 A Opens the thermos.
26 A Pours coffee into the cap.
27 A Sips.
28 A Winces.
29 D CASSIUS [CONT'D] (to himself): Cold.
30 A ¶ He watches the elevator again.
* 31 A A light above the door blinks: 3.
* 32 A Then dims.
33 D CASSIUS [CONT'D] (whispering): Come on. Come on, you son of a--
* 34 A ¶ The elevator dings.
* 35 A The door slides open.
* 36 A Empty.
37 A ¶ He sits very still.
38 A Then slowly lets out a breath.
39 A Closes his eyes.
40 D CASSIUS [CONT'D] (to himself): Not tonight.
* 41 A ¶ The phone buzzes on the dash.
42 A He picks it up.
43 D DISPATCH [V.O.]: Detective, the subject has been detained at the airport. You're clear to stand down.
44 D CASSIUS: Airport.
45 D DISPATCH [V.O.]: He never came to the Meridian.
46 D CASSIUS: Of course he didn't.
47 D DISPATCH [V.O.]: Go home, Cassius.
48 D CASSIUS: Copy.
49 A ¶ He ends the call.
50 A Puts the thermos back in the cupholder.
51 A Starts the engine.
52 D CASSIUS [CONT'D] (to the rearview): Seven hours.
53 A ¶ He backs out slowly.
* 54 A The elevator door slides shut behind him on its own.

### SCENE s00265 | EXT. SUNKEN GARDEN BENEATH A FALLEN STARSHIP - NIGHT
Detected names (may be incomplete or contain aliases): IRENEUS BASKERVILLE-ADE, MYRT, OKONKWO-SPARROW, HOLGER STAVROS-NWACHUKWU, THEO, LAVENDER-OSEI, GRANDMAMA NKECHI WINTERBOURNE
* 1 A ¶ A hull the size of a cathedral lies crumpled across a valley.
* 2 A Under its arch, moss and glowing mushrooms have colonized a courtyard of broken tile.
3 A ¶ Five figures circle a fire in the courtyard center.
4 A ¶ IRENEUS BASKERVILLE-ADE (50s, wizard, coat of many pockets) feeds twigs to the flames.
5 A ¶ MYRTLE "MYRT" OKONKWO-SPARROW (20s, bard, lute on her back) tunes a string.
6 A ¶ HOLGER STAVROS-NWACHUKWU (30s, mercenary, scarred jaw) sharpens a long blade on a whetstone.
7 A ¶ THEODORA "THEO" LAVENDER-OSEI (teens, apprentice, ink on her chin) copies glyphs from the hull onto a scroll.
8 A ¶ And GRANDMAMA NKECHI WINTERBOURNE (80s, wrapped in quilts, eyes sharp as tacks) sits on a stool nearest the fire.
9 D IRENEUS (to the group): We rest here till dawn.
10 D HOLGER: Rest? With that thing over us?
11 D IRENEUS: It's a ship, Holger. It's dead.
12 D HOLGER: So were the last three things I fought.
13 D MYRT: Holger, relax. Listen to this.
14 A ¶ She plucks a gentle melody.
* 15 A The mushrooms pulse, brightening in time.
16 A Theo looks up from her scroll, startled.
17 D THEO: Oh. They like it.
18 D MYRT: Everything likes it.
19 D HOLGER (muttering): Not me.
20 D GRANDMAMA: You like it, boy. You just won't say.
21 D HOLGER: Grandmama--
22 D GRANDMAMA: Hush.
* 23 A ¶ The fire cracks.
24 A Ireneus rises, brushing his coat.
25 D IRENEUS: Theo, the glyphs. What do they say?
26 D THEO: Um. "Do not wake the garden."
* 27 A ¶ A long silence.
* 28 A The music stops.
29 A Myrt's hand freezes on the strings.
30 D MYRT: Theo.
31 D THEO: Sorry. I only just read it.
32 D HOLGER (rising, blade drawn): Everyone quiet.
33 D IRENEUS: Holger, put that away.
34 D HOLGER: No.
* 35 A ¶ Beneath them, the ground trembles.
* 36 A The mushrooms flare white, then red.
* 37 A A distant hum rises through the soil like a stirring giant.
38 D MYRT: Ireneus.
39 D IRENEUS: I know.
40 D GRANDMAMA (mildly, to the fire): Well. That's the trouble with gardens.
* 41 A ¶ The hull groans.
* 42 A Vines uncoil from the ceiling, thick as cables, and begin to descend.
43 A Holger swings at one.
44 A It splits, spills glowing sap, and lunges for his throat.
45 D HOLGER: Theo, run!
46 D THEO: Where?
47 D HOLGER: Anywhere!
48 A ¶ Myrt strikes a chord, wild, dissonant.
49 A The vines recoil.
50 A Ireneus hurls a handful of powder; it ignites in a flash of orange.
51 A Theo hauls Grandmama up by the elbow and they stumble toward the arch.
52 D IRENEUS (over the roar): Don't look back!
53 D MYRT: I am looking!
54 D HOLGER: Then look faster!
55 A ¶ A vine catches Holger's ankle.
56 A He topples.
57 A Myrt dives, slashes with her lute-strap.
58 A It parts.
59 A Together they scramble to their feet.
60 A ¶ The five reach the arch just as the entire garden convulses, erupting into a roar of green light.
61 A ¶ They tumble onto cold grass beyond.
* 62 A Behind them, the starship shudders, then lies still.
63 D GRANDMAMA (breathing hard): Hm.
64 D THEO: Grandmama?
65 D GRANDMAMA: I'd like to go home now.

### SCENE s00266 | INT. DERELICT ORPHANAGE, WEST WING DORMITORY - NIGHT
Detected names (may be incomplete or contain aliases): EUGENIA FALLOWFIELD-ADEYEMI, NOAH, OKWUOSA-BERGMAN, LENA TAKAHASHI-DUMONT, CHILD, WREN, TAPE
* 1 A ¶ Iron beds in rows.
* 2 A Mildewed mattresses.
* 3 A A rocking horse with one glass eye.
* 4 A Moonlight through a shattered window.
5 A ¶ Three paranormal investigators move in a tight triangle, flashlights jittering.
6 A ¶ DR. EUGENIA FALLOWFIELD-ADEYEMI (50s, parapsychologist, wool coat, an old tape recorder in her hand) leads.
7 A ¶ NOAH "NO" OKWUOSA-BERGMAN (20s, camera operator, headlamp) films over her shoulder.
8 A ¶ LENA TAKAHASHI-DUMONT (30s, sound engineer, headphones, boom mic) sweeps the room with a long pole.
9 D EUGENIA (to the group): Quiet, please. I want a clean recording.
10 D NOAH: Copy.
11 D LENA: Copy.
12 A ¶ They freeze.
* 13 A The tape recorder whirs.
* 14 A A long beat.
* 15 A The wind moves through the dormitory like breath.
16 D EUGENIA (into the recorder): Is anyone here?
* 17 A ¶ Silence.
* 18 A Then, faintly, from the far end:
19 D CHILD [O.S.]: Yes.
20 A ¶ All three jump.
21 A Lena stumbles into the rocking horse; it sways, creaking.
22 A Noah's camera light lurches.
23 D EUGENIA (whispering): Did you hear that?
24 D LENA: Yes.
25 D NOAH: I got it.
26 D EUGENIA (into the recorder): What is your name?
27 D CHILD [O.S.]: Wren.
28 D EUGENIA: Hello, Wren. How old are you?
29 D CHILD [O.S.]: Nine.
30 D EUGENIA: Do you live here?
31 D CHILD [O.S.]: We all do.
* 32 A ¶ The temperature drops.
* 33 A Their breath fogs.
34 D LENA (to herself): Okay. Okay. This is fine.
35 D NOAH: It's very fine.
36 D LENA: It's extremely fine.
37 D EUGENIA: Wren, can you show us where you are?
* 38 A ¶ A pause.
* 39 A Then, down the dormitory aisle, a lantern flickers into being.
40 A Under it stands a small figure in a gray nightshirt, hands clasped, face pale and ordinary.
41 D NOAH: Oh my god.
42 D EUGENIA (steady): Hello, Wren.
43 D WREN (smiling): Hello.
44 A ¶ She tilts her head.
* 45 A Behind her, the iron beds begin to rattle, one by one.
46 D LENA: Eugenia.
47 D EUGENIA: I see them.
48 D WREN: They're excited.
49 D EUGENIA: Why?
50 D WREN: You're the first visitors.
51 A ¶ Eugenia opens her mouth.
52 A Closes it.
53 D NOAH (whispering): Please tell me we're leaving.
54 D EUGENIA: Not yet.
55 D LENA: Eugenia!
56 D EUGENIA: Not yet. Wren, who is the one at the back?
57 A ¶ Beyond Wren, in the darkness, a tall shape unfolds from the last bed.
58 A A woman in a nurse's uniform, face hidden in shadow.
59 D WREN: That's Matron.
60 D LENA (very quietly): Matron.
61 D WREN: She's not very nice.
62 A ¶ The nurse steps forward.
* 63 A A single stride, and the whole room tilts.
* 64 A The beds slide.
* 65 A The glass in the window sings.
66 A Lena shrieks and drops the mic.
67 A Noah's camera light flares and goes out.
68 A Eugenia stumbles against an iron frame.
69 D EUGENIA (shouting): Out! Everyone, out!
70 A ¶ They run.
* 71 A The dormitory stretches around them, doors multiplying, corridors lengthening.
72 A Lena sobs.
73 A Noah curses.
74 A Eugenia, hand on the wall, counts doors under her breath.
75 D EUGENIA [CONT'D]: Seven. Eight. Nine. Here!
76 A ¶ She slams through a door.
* 77 A They tumble into the courtyard, grass and moonlight, cold clean air.
78 A ¶ They lie gasping.
* 79 A The orphanage looms behind them, windows dark.
80 D LENA (weeping): Never again.
81 D NOAH: I lost the camera.
82 D EUGENIA (softly): No. You have the tape.
83 A ¶ She holds up the recorder, its light still green.
84 A She presses play.
* 85 A ¶ Her own voice: "Is anyone here?"
* 86 A A pause.
* 87 A Then a small voice, unmistakable:
88 D TAPE [V.O.]: Come back.
89 A ¶ They stare at the recorder.
90 A Slowly, without a word, Lena takes it, crouches, and buries it in the dirt.

### SCENE s00267 | INT. BAGGAGE CLAIM, MIDNIGHT TERMINAL - NIGHT
Detected names (may be incomplete or contain aliases): SABRINA OLUWAFEMI-STRAND, VIC, ANANDARAJAH-KELLER, INSPECTOR MIRA TOLENTINO-ACHEBE
* 1 A ¶ A carousel loops empty.
* 2 A Flickering departures board.
* 3 A The cleaners have gone home.
4 A ¶ SABRINA OLUWAFEMI-STRAND (30s, courier, hard-shell case handcuffed to her wrist) waits at belt six.
5 A ¶ Beside her, a tall man holds a paper cup: VICTOR "VIC" ANANDARAJAH-KELLER (40s, airport security, lanyard, deadpan).
6 A ¶ At the end of the belt, a third figure examines the departures board: INSPECTOR MIRA TOLENTINO-ACHEBE (50s, plainclothes, press badge folded in her palm).
7 D VIC: Ma'am, you've been here three hours.
8 D SABRINA: My bag is delayed.
9 D VIC: Which bag?
10 D SABRINA: The blue one.
11 D VIC: You don't have a blue one.
12 D SABRINA: I'd like to speak to your supervisor.
13 D VIC: I am my supervisor.
14 D SABRINA: Then I'd like another one.
15 D MIRA (without turning): Miss Oluwafemi-Strand.
16 D SABRINA (freezing): Do I know you?
17 D MIRA: Not yet. But I know the case on your wrist.
18 A ¶ Sabrina's hand tightens on the handle.
19 D SABRINA: It's personal.
20 D MIRA: It's evidence.
21 D VIC (to Mira): Evidence of what?
22 D MIRA: Of a very bad weekend.
23 A ¶ Sabrina whips the case up and swings it at Vic's head.
24 A He ducks.
25 A It clips Mira's shoulder.
26 A Mira stumbles back; Sabrina bolts for the exit, dragging the case on its chain.
27 D VIC: Stop!
28 D MIRA: Let her run.
29 D VIC: Inspector?
30 D MIRA (calling): Sabrina! The carousel's about to start!
31 A ¶ Sabrina stops, turns.
* 32 A The belt shudders and begins to turn, empty.
33 A She looks at it, then at them.
34 D SABRINA: What's that supposed to mean?
35 D MIRA (overlapping): It means turn it over.
36 D VIC (overlapping): It means she's cornered.
37 A ¶ ^
38 A ¶ Sabrina stares.
* 39 A The case drops open on its chain, spilling nothing.
* 40 A A few sheets of paper flutter to the floor.
41 D SABRINA (whispering): Oh.
42 D MIRA: Yes.
43 D SABRINA: It's empty.
44 D MIRA: It was always empty.
45 A ¶ Sabrina laughs, short and hollow.
46 A Slowly she sinks to the floor beside the belt.
47 A Vic takes off his lanyard and sets it beside her.
48 D VIC: Tea?
49 D SABRINA: Please.

### SCENE s00268 | INT. LUNAR RELAY STATION "KESTREL-4," COMMAND DECK - SHIP NIGHT
Detected names (may be incomplete or contain aliases): STATION CHIEF AMINATA VOSKUIJLEN-OSEI, DAV, LINDQVIST-KAMARA
* 1 A ¶ A cramped dome of monitors and cables.
* 2 A A slice of Earth hangs in the viewport, blue and fragile.
3 A ¶ STATION CHIEF AMINATA VOSKUIJLEN-OSEI (40s, grey coverall, tied-back hair) sits at the primary console, headset on one ear.
4 A ¶ Beside her, systems tech DAVID "DAV" LINDQVIST-KAMARA (30s, T-shirt, bare feet on the deck) eats a protein bar.
5 D AMINATA: Telemetry's drifting.
6 D DAV: It's always drifting.
7 D AMINATA: Not by this much.
8 D DAV: Let me see.
9 A ¶ He swivels to her screen, bar in his mouth.
10 A Reads.
11 A Swallows.
12 D DAV [CONT'D]: Huh.
13 D AMINATA: Huh?
14 D DAV: That's not drift.
15 D AMINATA: What is it?
16 D DAV: Something is pinging us.
17 D AMINATA: From where?
18 D DAV: Everywhere.
* 19 A ¶ A soft tone sounds.
20 A Both look at the console.
* 21 A A line of green text scrolls past.
22 D AMINATA (reading): "Greetings, Kestrel-Four."
23 D DAV: That's--
24 D AMINATA: It's coming from our own transmitter.
25 D DAV (overlapping): It's a loopback!
26 D AMINATA (overlapping): It's not a loopback!
* 27 A ¶ ^
28 A ¶ They stare at each other.
* 29 A The text continues.
30 D DAV (reading): "We have waited."
31 D AMINATA: Who's "we"?
32 D DAV: Aminata, I'm going to need a minute.
33 D AMINATA: Take two.
34 A ¶ He stands, pacing.
35 A Then stops, hands on his hips.
36 D DAV: Okay. Hypothesis. Either it's a prank by the Mars crew--
37 D AMINATA: They're asleep.
38 D DAV: --or it's a prank by the ground crew--
39 D AMINATA: They're in a meeting.
40 D DAV: --or it's us.
41 D AMINATA: Us?
42 D DAV: We're hallucinating. Oxygen's low.
43 A ¶ She taps a gauge.
* 44 A It reads perfect.
45 D AMINATA: Oxygen's fine.
46 D DAV: Damn.
* 47 A ¶ Another tone.
* 48 A The text changes.
49 D AMINATA (reading): "Please do not be afraid."
50 D DAV: I'm afraid.
51 D AMINATA (dry): Me too.
52 A ¶ She types: WHO ARE YOU.
* 53 A The cursor blinks.
* 54 A Then the reply:
* 55 A ¶ "A friend.
* 56 A Look up."
57 A ¶ They look up.
* 58 A Through the viewport, high above the lunar horizon, a ring of pale lights forms, silent, orderly, expanding.
59 D DAV (whispering): Chief.
60 D AMINATA: I see it.
61 D DAV: Should we call Houston?
62 D AMINATA: We should wake the Mars crew.
63 D DAV: Both.
64 D AMINATA: Both.
65 A ¶ Neither moves.
* 66 A The lights grow.
* 67 A In the viewport the Earth looks smaller than before.
68 D DAV: Aminata?
69 D AMINATA: Yes?
70 D DAV: I never finished my protein bar.
71 A ¶ She almost smiles.
72 A Reaches over and takes it from his hand.
73 A Takes a bite.
74 D AMINATA: Neither did I.
75 A ¶ She chews, slowly.
76 A They watch the sky.

### SCENE s00269 | INT. FREIGHT ELEVATOR, SHUTTERED TEXTILE MILL - NIGHT
Detected names (may be incomplete or contain aliases): MAN, LEATHER JACKET, WOMAN, STEFAN, NAOMI
* 1 A ¶ A steel cage the size of a small room.
* 2 A Dim bulb.
* 3 A A brass gate.
* 4 A Dust.
5 A ¶ A MAN IN A LEATHER JACKET (40s, scar through his lip) leans against the back wall.
6 A A smoking pistol hangs loose in his fist.
* 7 A ¶ The gate rattles.
* 8 A A hand grips it from outside.
9 A ¶ A WOMAN (30s, long coat, blood on her cuff) slides in, pulls the gate shut, and presses the lever.
* 10 A The elevator lurches down.
11 A ¶ They face each other.
* 12 A Silence, except for the cables.
13 D WOMAN: You're late.
14 D MAN: You're early.
15 D WOMAN: I was told midnight.
16 D MAN: Midnight was the plan.
17 A ¶ She looks at his pistol.
18 A He tucks it slowly into his waistband.
19 D WOMAN: Where's the third?
20 D MAN: Dead.
21 D WOMAN: How?
22 D MAN: Quickly.
* 23 A ¶ The cable groans.
* 24 A The bulb flickers.
25 A She steps close and he flinches, then stills.
26 A ¶ She reaches into his jacket, withdraws a leather folio, flips it open.
* 27 A A set of blueprints.
* 28 A A passport.
* 29 A A photograph.
30 D WOMAN [CONT'D] (reading): Matteo Ferrante.
31 D MAN: That's me.
32 D WOMAN: It isn't.
33 D MAN: It is tonight.
34 D WOMAN (low): Tell me your real name.
35 D MAN: Why?
36 D WOMAN: So I know whom to shoot.
37 A ¶ He grins, tilts his head.
* 38 A The elevator thumps to a halt between floors.
* 39 A The lights die.
* 40 A Total dark.
* 41 A ¶ In the dark, a scuffle.
* 42 A A thud.
* 43 A A gasp.
* 44 A A pistol clatters on the floor.
45 A Someone lunges, someone slams a wall, a body falls against the gate and it rattles open.
* 46 A The bulb sputters back to life.
47 A ¶ The woman has the man pinned against the cage, forearm across his throat.
48 A His hands are on her wrists.
49 A Both breathing hard.
* 50 A The pistol lies between their feet.
51 D MAN [CONT'D] (strained): Stefan.
52 D WOMAN: Stefan what?
53 D STEFAN: Stefan Halloran.
54 D WOMAN (releasing him): My brother.
55 D STEFAN: Naomi.
56 D NAOMI: You're alive.
57 D STEFAN: Barely.
58 A ¶ She slaps him, hard.
59 A Then hugs him, fiercer than a boxer.
60 D NAOMI [CONT'D]: Twelve years.
61 D STEFAN: Eleven and a half.
62 D NAOMI: I'm still going to kill you.
63 D STEFAN: Do it after we get out.
* 64 A ¶ The elevator groans.
* 65 A Starts to move again, down, into the dark.

### SCENE s00270 | INT. ROLLER RINK SNACK BAR - CLOSING TIME
Detected names (may be incomplete or contain aliases): IMANI VOSS, TEODOR LIND, GRANDMA PEARL, DEZ, ACHTERBERG, DJ, CLEO
* 1 A ¶ A cramped counter under a flickering neon sign.
* 2 A The popcorn machine ticks as it cools.
* 3 A Mirror-ball light crawls over a floor of scuffed maple.
* 4 A Rental skates hang in crooked rows.
5 A ¶ IMANI VOSS (30s, braids pinned up, rink-staff polo two sizes big) wipes the counter in slow circles.
6 A She has been wiping the same spot for a while.
7 A ¶ TEODOR LIND (30s, rangy, wool coat, skate laces knotted round one wrist) stands at the far end holding a paper boat of cold fries.
8 D IMANI: We close in five.
9 D TEODOR: I know. I'm eating.
10 A ¶ Imani nods.
11 A Keeps wiping.
12 A ¶ GRANDMA PEARL (70s, tiny, sequined cardigan, terrifyingly good on skates) glides up to the counter and raps it twice with a knuckle.
13 D PEARL: Two cocoas. One for me, one for the man who's about to say something.
14 D TEODOR: I wasn't going to.
15 D PEARL: That's what I'm afraid of.
16 A ¶ DESMOND "DEZ" ACHTERBERG (20s, gangly, headset askew) leans out of the DJ booth and cups a hand to his mouth.
17 D DEZ: Last song! Anybody left, last song!
18 A ¶ CLEO (teens, braces, rental skates on the wrong feet) wobbles in from the rink, grabs the counter, and lets go of it again at once.
19 A ¶ Imani and Teodor both reach to steady her.
20 A Their hands meet on Cleo's sleeve.
21 A Both pull back.
22 A Cleo sits down on the floor.
23 D CLEO: I'm fine.
24 D IMANI: You're on the floor.
25 D CLEO: Fine on the floor.
26 A ¶ Pearl slides two cocoas across.
27 A Teodor takes his and does not drink it.
28 D TEODOR: I drove four hours.
29 D IMANI: Nobody asked you to.
30 D TEODOR: You did. In March.
31 D IMANI: In March I was talking.
32 A ¶ Pearl turns her cocoa a quarter turn on the counter, in no hurry.
33 D PEARL (to Cleo): Up, sweetheart. This part's boring.
34 A ¶ Cleo scrambles up.
35 A Pearl steers her toward the rink by the elbow, and the two of them roll away.
36 A ¶ Dez cuts the music.
* 37 A The room hums.
* 38 A The mirror ball keeps turning without a song.
39 D IMANI: Teo.
40 D TEODOR: Imani.
41 A ¶ They speak at the same moment.
42 D IMANI: I should have called.
43 D TEODOR: I should have stayed.
* 44 A ¶ Neither laughs.
45 A Imani folds the rag into a square.
46 D IMANI: It's a long drive back.
47 D TEODOR: It is.
48 A ¶ He sets the fries down and picks them up again.
49 A Imani reaches under the counter and hands him a napkin.
50 D TEODOR [CONT'D]: Thanks.
51 D IMANI: Go on. I have to lock up.
52 A ¶ He nods.
53 A At the door he stops, and she does not look up.
54 A Dez flips the house lights on, and the whole rink goes flat and bright.
55 D CLEO [O.S.]: Are we allowed to keep the skates?
56 D DEZ: No!
57 A ¶ Teodor pushes the door open and the cold comes in.

### SCENE s00271 | INT. SALT MINE ELEVATOR HOIST HOUSE - DAY
Detected names (may be incomplete or contain aliases): GUS, TREVINO, LUCKY, MARROW, DEPUTY WENDELL OKORO, REVEREND ISAIAH CALLOWAY-BRANT
* 1 A ¶ Brine-crusted timbers.
* 2 A A cable drum.
* 3 A One lantern.
* 4 A Wind through the slats.
5 A ¶ SHERIFF AUGUSTINE "GUS" TREVINO (50s, gray mustache, bad knee) sits on an upturned crate.
6 A Rifle across his lap.
7 A Waiting.
8 A ¶ Across from him, hands tied to the cable rail: LUCINDA "LUCKY" MARROW (30s, sun-cracked lips, torn duster).
9 A Smiling.
10 A Always smiling.
11 A ¶ Behind her, in the doorway: DEPUTY WENDELL OKORO (20s, borrowed hat, pale).
12 A Counting something on his fingers.
13 A ¶ Gus checks his watch.
14 A Puts it away.
15 D GUS (to himself): Noon. Should be noon.
16 D LUCKY: Time moves slow in a salt mine.
17 D GUS: Didn't ask you.
* 18 A ¶ Silence.
* 19 A A drip somewhere.
* 20 A The cable drum creaks.
21 D WENDELL: Sheriff. The train's late.
22 D GUS: I can hear that.
23 A ¶ Wendell shifts his weight.
* 24 A The floorboards complain.
25 D LUCKY: Your boy's nervous.
26 D GUS: My boy's fine.
27 D WENDELL: I'm fine.
28 A ¶ He isn't.
29 A His hand rests on his holster.
30 A Slides off.
31 A Rests again.
32 A ¶ Gus rises.
33 A Knee pops.
34 A He walks to the slat window.
35 A Looks out at white flats and nothing.
36 D GUS (to the room): Nobody moves till the whistle.
37 D WENDELL: Yes sir.
38 D LUCKY: Hear that? Nobody moves.
39 A ¶ She tugs the rope.
40 A Testing.
41 A Gus turns.
42 D GUS: Quit that.
43 D LUCKY: Quit what?
44 D GUS: You know what.
45 A ¶ She lets the rope go slack.
46 A Smile widens.
47 A ¶ A fourth figure fills the doorway behind Wendell.
* 48 A Quiet.
* 49 A Boots on salt.
50 A ¶ REVEREND ISAIAH CALLOWAY-BRANT (60s, black frock, spectacles, a Bible under one arm).
51 A Dust on his shoulders.
52 A He tips his hat.
53 D CALLOWAY-BRANT: Gentlemen. Lady.
54 A ¶ Wendell spins.
55 A Hand on the gun this time.
56 D WENDELL: Who in hell are you?
57 D CALLOWAY-BRANT: A man looking for water.
58 D GUS: No water here. Only salt.
59 D CALLOWAY-BRANT: So I see.
60 A ¶ He steps in.
61 A Slow.
62 A Eyes drifting to Lucky.
63 A To the rope.
64 A To the rifle.
65 D LUCKY (to Calloway-Brant): Morning, Reverend.
66 A ¶ Gus looks at her.
67 A Looks at the preacher.
68 D GUS: You two acquainted?
69 D CALLOWAY-BRANT: No.
70 D LUCKY: Never met.
* 71 A ¶ Too fast.
* 72 A Both.
73 A ¶ Gus raises the rifle.
74 A Not at anyone.
75 A Just up.
76 D GUS (to himself): Damn.
* 77 A ¶ A distant whistle.
* 78 A Long.
* 79 A Low.
80 D WENDELL: That's the train.
81 D GUS: Everybody stay put.
82 A ¶ Calloway-Brant sets the Bible on the crate.
83 A Unhurried.
84 D CALLOWAY-BRANT: Sheriff, I'd sit down.
85 D GUS: I'll stand.
86 D CALLOWAY-BRANT: Then stand well.
87 A ¶ He opens the Bible.
* 88 A Hollowed out.
* 89 A A short-barreled pistol.
90 A ¶ Wendell draws.
* 91 A Late.
* 92 A ¶ The pistol barks.
93 A Wendell spins.
94 A Drops.
95 A ¶ Gus fires.
* 96 A Splinters from the doorframe.
97 A Calloway-Brant is already moving, crashing sideways into the lantern.
* 98 A ¶ Dark.
* 99 A Then fire.
* 100 A The lantern oil catches the dry timber.
101 D LUCKY (laughing): Cut me loose, Gus! Cut me loose!
102 D GUS: Not a chance.
* 103 A ¶ Flames climb the wall.
* 104 A Smoke rolls.
105 A Calloway-Brant is a shadow behind the cable drum.
106 D CALLOWAY-BRANT [O.S.]: Last chance, Sheriff!
107 D GUS: Come take it!
108 A ¶ Gus fires at the drum.
* 109 A Sparks.
* 110 A The cable snaps free and whips across the room, slashing the rope at Lucky's wrists.
111 A ¶ She is loose.
112 A She grins.
113 D LUCKY: Thank you kindly.
114 A ¶ She snatches Wendell's fallen gun.
115 A Gus swings the rifle on her.
116 A ¶ They freeze.
* 117 A Three guns.
* 118 A Three people.
* 119 A Fire roaring.
120 D WENDELL (weak, from the floor): Don't.
121 A ¶ None of them moves.
* 122 A ¶ The roof timbers groan.
* 123 A A beam drops between them in a shower of sparks.
124 A ¶ They scatter.

### SCENE s00272 | INT. MUNICIPAL SWAN-BOAT BOATHOUSE - EVENING
Detected names (may be incomplete or contain aliases): BARNABY QUILL, ODALYS FERREIRA-NNAMDI, PETE, LAZAR
* 1 A ¶ A cathedral of damp wood.
* 2 A Eleven fiberglass swans, enormous and faintly smug, are moored nose to tail in the dark water, each wearing the faded expression of a creature that has been pedaled by thousands of children and has forgiven none of them.
3 A ¶ BARNABY QUILL (50s, municipal windbreaker, a lanyard heavy with keys that open nothing important) stands on the dock with a clipboard held like a hymnal.
4 A He is counting swans for the third time and arriving at a different number each time.
5 A ¶ ODALYS FERREIRA-NNAMDI (40s, wet-weather poncho, hair in a hopeful bun) climbs out of a swan with the dignity of a woman leaving a courtroom.
6 D ODALYS: It's twelve.
7 D BARNABY: It's eleven.
8 D ODALYS: The inventory says twelve.
9 D BARNABY: The inventory also says the pond is a lake.
* 10 A ¶ Behind them, a third voice drifts from the rafters.
11 A PETRU "PETE" LAZAR (20s, cheerful, harness, a flashlight in his teeth) dangles above the water, retrieving a pennant.
12 D PETE (around the flashlight): Thith ith the one.
13 D ODALYS: Pete, take the flashlight out of your mouth.
14 A ¶ Pete spits the flashlight into his palm.
* 15 A It bounces off a swan's head and sinks.
16 D BARNABY: That was a municipal flashlight.
17 D PETE: It was my flashlight.
18 D ODALYS: It was Barnaby's flashlight.
19 D BARNABY: It was a flashlight in the general sense.
20 D PETE: Can I come down now?
21 D ODALYS: No.
22 D BARNABY: Yes.
23 D ODALYS: No, because if he comes down we'll have to talk about the swan.
24 D BARNABY: We are talking about the swan.
25 D PETE: Which swan?
26 D ODALYS: The twelfth.
27 D PETE: There's a twelfth?
28 D BARNABY: There is not a twelfth.
29 D ODALYS: Barnaby, I rode it. For twenty minutes. It has a steering problem and a name.
30 D BARNABY: What name?
31 D ODALYS: Gerald.
32 D PETE: Gerald's a good name.
33 D BARNABY: Pete, you are suspended in the air by one strap and I need you to stop having opinions.
34 D PETE: I've had opinions the whole time, though.
35 D ODALYS: He's had opinions since March.
36 D BARNABY: In March I told you both the swans were not to be named.
37 D ODALYS: You named the swans.
38 D BARNABY: I named ONE swan. Lucille. Out of respect.
39 D PETE: Lucille's on the left.
40 D ODALYS: Lucille is the one we sank in August.
41 D BARNABY: Lucille is resting.
* 42 A ¶ A long silence.
* 43 A Water slaps the pilings.
* 44 A A swan, somewhere, knocks against the dock with a hollow note.
45 D ODALYS: Barnaby, there are twelve swans.
46 D BARNABY (very quietly): I know.
47 D PETE: So who's got Gerald?
48 A ¶ Barnaby lets the clipboard drop.
* 49 A It floats.
50 A All three of them watch it drift away across the dark water toward the far swan, which has, impossibly, begun to turn its head.

### SCENE s00273 | INT. CAR WASH TUNNEL - NIGHT
Detected names (may be incomplete or contain aliases): KAVEH RAZMI, SOL, DUARTE, TOBIAS WREN
* 1 A ¶ Brushes idle.
* 2 A Soap drips.
* 3 A Three cars' worth of silence.
4 A ¶ KAVEH RAZMI (40s, wet suit jacket) crouches behind a spinning mitter curtain, gun low.
5 A He is breathing hard.
6 A ¶ Across the bay, MARISOL "SOL" DUARTE (30s, mechanic's coveralls) holds a wrench like a club.
* 7 A ¶ A speaker crackles overhead, then goes dead.
8 D KAVEH: Sol. Put it down.
9 D SOL: You first, Kav.
10 A ¶ They speak at once.
11 D KAVEH: I didn't take it.
12 D SOL: You didn't take it.
13 A ¶ Sol laughs once.
* 14 A Short.
* 15 A Dead.
16 D SOL [CONT'D] (muttering): Four years.
17 A ¶ A third silhouette steps through the exit light.
18 A TOBIAS WREN (60s, dry, immaculate raincoat).
19 D TOBIAS: Evening, both.
20 A ¶ Kaveh's gun drifts toward Tobias.
21 A Sol's wrench stays on Kaveh.
22 D TOBIAS [CONT'D]: Nobody here's leaving angry. Which is the point.
23 A ¶ He sets a thin black case on the wet floor and slides it forward.
24 A ¶ Sol drops the wrench.
* 25 A It rings.
26 A Kaveh lowers the gun.

### SCENE s00274 | INT. LIGHTHOUSE KEEPER'S QUARTERS - NIGHT
Detected names (may be incomplete or contain aliases): HELGA STRAND, ARNE STRAND, MAREN STRAND, THEO STRAND, CAPTAIN BASIL YEBOAH-KARLSSON, RADIO
* 1 A ¶ Storm outside.
* 2 A Sea slamming rock.
* 3 A A kerosene lamp.
* 4 A A shortwave radio on the table, buzzing.
5 A ¶ HELGA STRAND (60s, oilskin, iron-gray braid) stands at the stove.
6 A Stirring.
7 A Not looking up.
8 A ¶ At the table: her son, ARNE STRAND (30s, damp wool sweater, a bandage across one hand).
9 A He stares at the radio.
10 A ¶ Their daughter-in-law, MAREN STRAND (30s, pregnant, hands wrapped around a cup) watches Arne watch the radio.
11 A ¶ On the stairs, listening: THEO STRAND (10, pajamas, bare feet).
12 A He has been told to sleep.
13 A ¶ By the window: CAPTAIN BASIL YEBOAH-KARLSSON (50s, drenched, sou'wester in hand).
14 A A stranger.
* 15 A Dripping onto the floorboards.
* 16 A ¶ The radio hisses.
17 D RADIO [V.O.] (distorted): Coast Guard to lighthouse. Come in.
18 A ¶ Nobody moves.
19 A ¶ Helga stirs.
20 D RADIO [V.O., CONT'D]: Coast Guard to lighthouse. We have your vessel's mayday. Repeat. Come in.
21 A ¶ Arne rises.
* 22 A Chair scrapes.
23 A Maren catches his wrist.
24 D MAREN: Don't.
25 D ARNE: Maren.
26 D MAREN: You say one word to them and it's over.
27 D ARNE: It's already over.
28 A ¶ Helga sets the spoon down.
29 A Turns.
30 D HELGA: Sit.
31 A ¶ Arne sits.
32 A Maren lets go.
33 A ¶ Basil steps from the window.
* 34 A Water pooling around his boots.
35 D BASIL: They'll keep calling.
36 D HELGA: Let them.
37 D BASIL: My crew is in that water.
38 D HELGA: Your crew is dead, Captain.
* 39 A ¶ Silence.
* 40 A The radio crackles.
41 D RADIO [V.O.]: Lighthouse. Acknowledge. Over.
42 A ¶ Theo sits on the bottom stair.
43 A Pulls his knees up.
44 D THEO: Daddy?
45 D ARNE: Go to bed.
46 D THEO: Who's talking?
47 D MAREN: The radio, love. Go on.
48 A ¶ Theo doesn't go.
49 A ¶ Basil crosses the room in three strides and picks up the microphone.
50 A Arne is up again.
51 A Helga steps between them.
52 A The three of them stand locked, a breath apart, Maren half-risen behind with one hand on her belly, Theo gripping the banister.
53 D BASIL: Let me answer.
54 D HELGA: Put it down.
55 D BASIL: They'll send a boat.
56 D ARNE: They'll send a boat for us.
57 D BASIL: For all of us.
58 D HELGA (quiet): For him.
59 A ¶ She nods at Arne.
60 A Basil looks.
61 A Looks at the bandage.
62 A At the rope burn climbing the wrist.
63 D BASIL (slowly): You cut the line.
64 A ¶ Arne says nothing.
65 D BASIL [CONT'D]: You cut our line.
66 D ARNE: The reef would have taken the lighthouse.
67 D BASIL: The reef took forty men!
68 D ARNE (shouting): I was trying to save my family!
69 A ¶ Maren covers her mouth.
70 A Theo starts to cry without sound.
71 D RADIO [V.O.]: Lighthouse, we have a visual on your lamp. Repeat, we have a visual. Hold position.
72 A ¶ Basil lets the microphone drop.
* 73 A It swings on its cord, clicking against the table leg.
74 A ¶ Helga takes it.
75 A Presses the key.
76 D HELGA (into the microphone): This is Helga Strand. Lighthouse is secure.
* 77 A ¶ A pause.
* 78 A Static.
79 D RADIO [V.O.]: Copy, ma'am. Any survivors?
80 A ¶ Everyone looks at Basil.
81 A ¶ Basil stares at the floor.
82 A At the pool of seawater spreading around his boots.
83 A At the small bare feet on the stairs.
84 A He looks up.
85 D BASIL (barely): One.
86 A ¶ Helga lowers the microphone.
87 A Arne puts his face in his bandaged hand.
88 A Maren crosses to him and doesn't touch him.
* 89 A ¶ Wind hits the tower.
* 90 A The lamp above them sweeps its beam across the window, turning, turning, turning.

### SCENE s00275 | INT. MINIATURE GOLF WINDMILL - DAY
Detected names (may be incomplete or contain aliases): GRETCHEN POLLARD, WALDO POLLARD, TEENAGE ATTENDANT RUSS OYELARAN, LITTLE MIRABEL
* 1 A ¶ The big concrete windmill at hole eighteen.
* 2 A Blades turning slowly.
* 3 A A tunnel through its base.
4 A ¶ GRETCHEN POLLARD (50s, visor, scorecard in teeth) is wedged halfway into the tunnel on her stomach.
5 A ¶ Her husband WALDO POLLARD (50s, bucket hat) holds her ankles.
6 A ¶ TEENAGE ATTENDANT RUSS OYELARAN (17, name tag, vest) arrives with a rake.
7 A ¶ LITTLE MIRABEL (8, glitter sneakers) watches from the green, club trailing.
8 D RUSS: Ma'am, you can't go in there.
9 D GRETCHEN [O.S.]: My ball's in there!
10 D WALDO: She means it.
* 11 A ¶ The blades turn.
* 12 A A blade clips Waldo's hat.
13 A He ducks.
14 A Gretchen shoots out of the tunnel, ball in hand, and the two of them tumble into Russ.
15 A All three go down in a heap.
* 16 A The rake clatters.
17 D MIRABEL: Is that a hole in one?
18 D RUSS (from the pile): No.
19 A ¶ Gretchen holds up the ball like a trophy.

### SCENE s00276 | EXT. FLOODED RICE PADDY - DAWN
Detected names (may be incomplete or contain aliases): LIEUTENANT NADIA VASSILIOU, SERGEANT FIONN MCALLISTER-DUBE, CORPORAL AMARA TSEGAYE, POLDO, RINCON
* 1 A ¶ Mist.
* 2 A Brown water to the knees.
* 3 A A broken dike.
* 4 A Frogs.
5 A ¶ Four soldiers in a skirmish line.
6 A Slogging.
7 A ¶ LIEUTENANT NADIA VASSILIOU (30s, helmet strap loose) in the lead.
8 A Compass in her fist.
9 A ¶ SERGEANT FIONN MCALLISTER-DUBE (40s, radio on his back) behind her.
10 A ¶ CORPORAL AMARA TSEGAYE (20s, rifle high, eyes wide) third.
11 A ¶ PRIVATE LEOPOLDO "POLDO" RINCON (19, glasses taped at the hinge) last.
12 D NADIA (low, to the line): Spacing. Ten feet.
13 A ¶ They spread.
* 14 A Water sloshes.
15 D POLDO (muttering): Ten feet. Ten feet. Ten feet.
* 16 A ¶ A frog leaps.
17 A Amara jerks the rifle.
18 A Fionn grabs the barrel.
19 D FIONN: Easy.
20 D AMARA: Sorry.
21 A ¶ They go on.
* 22 A The mist shifts.
* 23 A ¶ Metal glints ahead.
* 24 A A crouched shape.
* 25 A A helmet.
* 26 A Then another.
27 A ¶ Nadia raises a fist.
28 A Everyone stops.
* 29 A ¶ A crack.
* 30 A Water jumps near Poldo.
31 D NADIA: Down!
32 A ¶ Nadia and Amara dive left.
33 A Fionn and Poldo dive right.
* 34 A A machine gun opens up, stitching the paddy.
35 D FIONN (shouting at the whole squad): Stay low! Stay LOW!
36 A ¶ Poldo lifts his head.
37 A Gets a mouthful of mud.
38 D POLDO (to himself): Okay. Okay okay okay.
39 D AMARA (to Nadia): Where is it?
40 D NADIA: Treeline. Eleven o'clock.
41 A ¶ She crawls to Fionn.
42 A He is on the radio.
43 A His lips move.
* 44 A Static only.
45 D FIONN: Dead.
46 D NADIA: Try again.
47 A ¶ He tries.
* 48 A Nothing.
* 49 A ¶ The firing stops.
* 50 A Hard silence.
* 51 A Frogs begin again.
52 A ¶ Nadia peers over the dike.
53 A She stares.
54 A Her shoulders drop.
55 D NADIA [CONT'D] (to the squad): Hold fire.
56 D AMARA: Ma'am?
57 D NADIA: Hold. Fire.
* 58 A ¶ Across the paddy, the "helmets" are scarecrows.
* 59 A Two straw men in rusted pots.
* 60 A A third machine gun sits on a bamboo tripod, tied to a clapper that bangs in the breeze.
61 A ¶ Fionn lets out a breath that turns into a laugh.
62 A Amara puts her forehead on her rifle.
63 A Poldo sits straight up out of the water, soaked to the chin.
64 D POLDO: It's a bird scarer.
65 D NADIA: It's a bird scarer.
66 A ¶ She pulls her wet hat off and wrings it.
67 A Amara and Poldo stand together, shaking, and slap each other on the shoulder, hard, both laughing.
68 D FIONN (to Nadia): Will you tell them she did the compass right?
69 D NADIA (to Fionn): Tell them yourself. She's your lieutenant.
70 A ¶ Fionn looks at Nadia.
71 A She looks at him.
* 72 A A beat, and neither can say which of them was the "she" meant.
73 D FIONN: Aye.
74 A ¶ They start across the paddy.

### SCENE s00277 | INT. BONDED WAREHOUSE - CHEESE AGING CAVE - NIGHT
Detected names (may be incomplete or contain aliases): DOLLY, PRITCHARD-ABARA, CASIMIR VOLKOV, LEFTY, BATISTE, INSPECTOR HOLLIS TANAKA-REED, PEPPER NAKAMURA-OSEI
* 1 A ¶ Rows of wheels stacked to the ceiling.
* 2 A Cold.
* 3 A Ammonia and rind.
4 A ¶ A woman in a hairnet, DOLORES "DOLLY" PRITCHARD-ABARA (50s), runs a finger along a shelf.
5 A She doesn't look at the two men by the door.
6 A ¶ A man in a good suit, CASIMIR VOLKOV (40s), checks his cuffs.
7 A He is early.
8 A He hates being early.
9 A ¶ The second man, LENNOX "LEFTY" BATISTE (30s, work gloves, one sleeve rolled), leans on a hand truck.
10 A He taps it.
11 A ¶ She lifts a wheel.
12 A Turns it.
13 A Sniffs.
14 D LEFTY: It's the right one.
15 D DOLLY: We'll see.
16 A ¶ She sets it down.
17 A Wipes her hands on her apron.
18 A He watches her hands.
19 A ¶ A fourth figure comes down the aisle: INSPECTOR HOLLIS TANAKA-REED (50s, county badge on a belt clip).
20 A Slow.
21 A Wheezing from the cold.
22 A She stops three rows away.
23 D HOLLIS: Evening.
* 24 A ¶ Nobody answers.
25 A She nods at the shelves.
26 D HOLLIS [CONT'D]: Lot of inventory.
27 D DOLLY: It's a big cave.
28 A ¶ Hollis smiles.
29 A Moves closer.
30 A Casimir shifts his weight.
31 A He glances at Lefty.
32 A Lefty looks at the floor.
33 D HOLLIS: Mind if I look at the paperwork?
34 D DOLLY: Back office.
35 D HOLLIS: I'd rather look here.
36 A ¶ She waits.
37 A Dolly hands over a clipboard.
38 A She flips pages.
39 A Doesn't read them.
40 D HOLLIS [CONT'D]: Funny. These numbers line up exactly.
41 D DOLLY: We keep good books.
42 D HOLLIS: Nobody keeps books this good.
43 A ¶ She sets the clipboard on a wheel.
44 A Casimir steps forward.
45 A Lefty's hand tightens on the truck.
* 46 A ¶ A fifth voice, from the dark behind the last row.
47 D PEPPER [O.S.]: Everybody just stay where you are.
48 A ¶ Out of the dark: PEPPER NAKAMURA-OSEI (20s, the night cleaner, mop bucket, calm).
49 A A pistol in her yellow glove.
50 A ¶ She points at no one in particular.
* 51 A At the room.
52 D PEPPER: Mrs. Pritchard, you said you'd be gone by ten.
53 A ¶ Dolly doesn't blink.
54 A She looks at the wheel Hollis is leaning on.
55 A ¶ Hollis sees it.
56 A Straightens.
57 A Takes her hand off the cheese.
58 A ¶ Lefty lets go of the hand truck.
* 59 A It rolls a foot.
* 60 A Stops.
61 A ¶ Casimir smooths his tie.
* 62 A ¶ The compressor kicks on.
* 63 A A long, low hum.
64 A ¶ Pepper lowers the pistol.
65 D PEPPER [CONT'D] (quietly): It's cold in here.
66 A ¶ Dolly takes off her apron.
67 A Folds it.
68 A Sets it on the shelf.
69 A She nods once to Hollis, who nods back.
70 A ¶ They walk out together.
71 A The two men follow.
72 A Pepper stays, looking at the wheels, the mop bucket at her feet.

### SCENE s00278 | INT. ABANDONED PLANETARIUM - NIGHT
Detected names (may be incomplete or contain aliases): EVELYN HARGROVE, THE MAN, AMBROSE
* 1 A ¶ A great dome of cracked plaster.
* 2 A Rows of tilting seats like rotted teeth.
* 3 A At the center, a Zeiss star projector, shrouded like a sleeping beast.
* 4 A ¶ A flashlight beam wanders across the dome.
5 A Behind it: EVELYN HARGROVE (30s, wool coat, camera bag), picking her way down the aisle.
6 D EVELYN: Hello? The caretaker said the doors were unlocked.
* 7 A ¶ Her voice dies in the plaster.
8 A She reaches the projector.
9 A Lays a hand on its cover.
* 10 A ¶ A SOUND.
* 11 A Soft.
* 12 A Behind her.
* 13 A A seat creaking back.
14 A ¶ She spins the light.
15 A A MAN sits in the third row.
16 A Gray suit.
17 A Hands folded.
18 A Smiling pleasantly.
19 D THE MAN: Ten minutes early. Punctual people are rare.
20 D EVELYN: I didn't see you come in.
21 D THE MAN: I didn't come in.
22 A ¶ She laughs, nervous, and glances at the exit.
* 23 A Still there.
* 24 A Still far.
25 D EVELYN: Are you the caretaker?
26 D THE MAN: I look after the stars. Is that the same?
27 A ¶ She lowers the light.
28 D EVELYN: I'm here to photograph the dome. For the historical society.
29 D THE MAN: Of course.
30 A ¶ He stands.
31 A Slowly.
* 32 A His shadow does not move with him.
33 D EVELYN (whispering): Oh.
34 D THE MAN: Don't be frightened. I only want you to look up.
35 D EVELYN: No.
36 D THE MAN: Please.
* 37 A ¶ The projector SHUDDERS under its cover.
* 38 A A hum rises from the machine.
* 39 A A thin line of light cuts from under the cloth.
40 D EVELYN: Who are you?
41 D THE MAN: Ambrose Lyle. Chief astronomer. Nineteen thirty-one.
42 A ¶ He smiles, and the plaster above them goes black, then bursts with ten thousand stars.
43 D EVELYN: Please.
44 D AMBROSE: Look up, Miss Hargrove.
45 A ¶ She doesn't want to.
46 A She does.
* 47 A The stars begin to move toward her.

### SCENE s00279 | INT. GREENHOUSE CONSERVATORY - NIGHT
Detected names (may be incomplete or contain aliases): DOCTOR PRUDENCE ACHEBE, LORD ALISTAIR PENHALLOW-NG, TALLY, BRIGHTWATER, OSWIN OKONKWO-FRY, GRANDE DAME ESMERALDA VANCE, DEV, MARLOWE
* 1 A ¶ Glass walls beaded with condensation.
* 2 A Orchids hang like trapped moths.
* 3 A At the center, a wrought-iron table, a half-eaten fig tart, and a toppled chair.
4 A ¶ Six people stand around the table.
* 5 A In the chair's place lies the body of the host, a velvet cloak over his chest.
* 6 A Nobody has touched him.
7 A ¶ DOCTOR PRUDENCE ACHEBE (50s, tailored green suit) kneels.
8 A Fingertips at his throat.
9 A ¶ LORD ALISTAIR PENHALLOW-NG (60s, monocle, flushed) stands rigid, a champagne flute shaking in his hand.
10 A ¶ MISS TALLULAH "TALLY" BRIGHTWATER (20s, flapper beads) grips the back of a chair.
11 A ¶ MR. OSWIN OKONKWO-FRY (40s, butler's tails) holds the door.
12 A ¶ GRANDE DAME ESMERALDA VANCE (70s, black lace, cane) watches all of them.
13 A ¶ Standing apart, by the orchids: INSPECTOR DEVRAJ "DEV" MARLOWE (40s, rumpled raincoat, soaked).
14 D DEV: No one leaves.
15 D TALLY: Dev, darling, you can't hold us.
16 D DEV: Miss Brightwater, I can hold you till breakfast.
17 D ESMERALDA: Oswin, lock the door.
18 D OSWIN: Already done, madam.
19 A ¶ Everyone turns to look at Oswin.
20 A Oswin looks at the key in his hand.
21 A Doctor Achebe stands.
22 A Lord Alistair steps back into an orchid.
* 23 A The flute shatters.
24 A ¶ Tally and Dev lunge for the same loose thread of cloak.
25 A Oswin bolts for the door.
26 A Esmeralda's cane cracks down on his wrist.
27 A Alistair collapses into a chair.
28 A The doctor catches the key mid-air.
29 D ACHEBE (calm): The tart.
30 A ¶ Every head turns to the fig tart.
* 31 A One slice missing.
* 32 A A silver fork beside it, tines green.
33 D DEV: Who cut the tart?
* 34 A ¶ Silence.
* 35 A Condensation drips from the glass roof.
36 D ESMERALDA (softly): I did, Inspector.

### SCENE s00280 | EXT. DRIFTING ICE FLOE, ARCTIC INLET - DAY
Detected names (may be incomplete or contain aliases): FIGURE, HANNE, SKJOLD, STATION
* 1 A ¶ A white plain under a white sky.
* 2 A A scatter of gear: a collapsed tent, a sled, a battered handheld radio.
* 3 A Wind pushes snow in thin ribbons across the surface.
4 A ¶ A FIGURE in a red parka kneels over a camp stove, back to us.
5 A Small.
6 A Methodical.
7 A ¶ The figure turns.
8 A HANNELORE "HANNE" SKJOLD (40s, glacier goggles pushed up, frostbitten cheeks, a field biologist's patience in her face) pours melted water into a tin cup.
9 A She drinks.
10 A Looks at the horizon.
11 D HANNE (to herself): Day nine.
12 A ¶ She sets down the cup.
13 A Picks up the radio.
14 A Thumbs it.
15 D HANNE [CONT'D]: Station, this is Skjold. Do you copy?
* 16 A ¶ Static.
17 A She waits.
18 A Counts to thirty.
19 A Tries again.
20 D HANNE [CONT'D]: Station, this is Skjold. Floe drift continues northeast. Rations, six days. Morale, fine.
21 A ¶ She almost smiles at that last word.
* 22 A ¶ Static, then a thin voice, far away.
23 D STATION [V.O.]: ...Skjold, copy... say again...
24 A ¶ Hanne grips the radio.
25 D HANNE: Station, I read you. Position unchanged. I am not in distress.
26 D STATION [V.O.]: ...hold... helicopter... three days...
27 D HANNE: Understood. Three days.
28 A ¶ She lowers the radio.
29 A Doesn't celebrate.
30 A Doesn't sag.
31 A Reaches for a notebook and a pencil stub.
* 32 A ¶ The camera finds the page.
* 33 A A tally of marks, nine neat strokes.
34 A She adds a tenth.
* 35 A ¶ Under the tally, in block letters: DON'T LOSE THE PENCIL.
36 D HANNE [CONT'D] (reading it aloud): Don't lose the pencil.
37 A ¶ She tucks the pencil behind her ear.
38 A Looks out at the ice, and the ice looks back, patient and enormous.
* 39 A ¶ A low groan rolls under the floe.
* 40 A A thin crack runs a few meters away and stops.
41 D SKJOLD (mildly): Not yet, thank you.
42 A ¶ She zips the radio into her parka and starts to repack the sled.

### SCENE s00281 | INT. NATURAL HISTORY MUSEUM - WHALE HALL - NIGHT
Detected names (may be incomplete or contain aliases): ZOFIA KRAWCZYK-ADEYEMI, TRIX, OKAFOR-LINDQVIST, MIRIAM SOLOMON-BEAUCHAMP
* 1 A ¶ A blue whale skeleton hangs from the ceiling.
* 2 A Moonlight through skylights makes its ribs look like a ship's hull.
3 A ¶ Three figures at the base of a display case.
4 A Black clothes, soft shoes.
5 A ¶ ZOFIA KRAWCZYK-ADEYEMI (40s) kneels at the lock, picks in her teeth.
6 A Patient.
7 A Her hands barely move.
8 A ¶ TRISTAN "TRIX" OKAFOR-LINDQVIST (20s) holds a flashlight with a red filter and a stopwatch.
9 A His knee bounces.
10 A ¶ MIRIAM SOLOMON-BEAUCHAMP (60s, silver bob) stands at the rail, arms folded, watching the doors.
11 D TRIX: Ninety seconds.
12 A ¶ Zofia doesn't answer.
* 13 A The lock clicks.
14 A She sets down the picks.
* 15 A ¶ Inside the case: a fossil egg the size of a football, on a velvet cradle.
16 A ¶ Trix reaches.
17 A Miriam's hand closes on his sleeve.
18 A He stops.
19 D MIRIAM: Gloves.
20 A ¶ He pulls on gloves.
21 A His fingers are wet.
* 22 A They slide.
23 A Zofia takes his hands, wipes them on her shirt, helps him.
24 A ¶ She lifts the egg.
25 A Weighs it.
26 A Hands it to Miriam.
27 A ¶ Miriam holds it a moment too long.
28 A Her thumb strokes the shell.
29 D TRIX: Miriam.
30 D MIRIAM: I know.
31 A ¶ She wraps it in a blanket and passes it to Trix.
32 A He cradles it against his chest like a baby.
* 33 A ¶ A SOUND.
* 34 A Footsteps on the mezzanine.
* 35 A A flashlight sweeps the hall.
36 A Three freeze.
37 A Trix stops breathing.
* 38 A ¶ The light crosses the whale.
* 39 A The ribs.
* 40 A The case.
* 41 A It settles on the empty velvet.
* 42 A ¶ Silence.
* 43 A Then the light moves on.
* 44 A The footsteps fade toward the east wing.
45 A ¶ Zofia lets out a breath.
46 A Trix is shaking so hard the egg rattles in its blanket.
47 A She steadies it with both hands.
48 D ZOFIA (whispering): Walk.
49 A ¶ They walk.
* 50 A Under the whale.
* 51 A Past the stuffed elk.
* 52 A Toward the loading dock.
53 A ¶ At the door, Miriam stops.
54 A Looks back at the empty case.
55 A At the whale.
56 D MIRIAM: Seventy years.
57 D ZOFIA: Move.
58 A ¶ Miriam turns.
59 A Follows.

### SCENE s00282 | INT. GENERATION SHIP "TERNARY LANTERN" - HYDROPONIC SPINE - SHIP NIGHT
Detected names (may be incomplete or contain aliases): JUNO ABARA-WESTLUND, COMMANDER ISADORA FENN-KATSURAGI
* 1 A ¶ A cylindrical corridor lined with trays of silver-leafed lettuce, each rotating slowly toward an artificial sun that is, tonight, a pale and dying amber.
2 A ¶ JUNO ABARA-WESTLUND (30s, botanist, gloves stained green) kneels at a leaking pipe.
* 3 A Beside her, an old gardener's robot of brass and canvas has stopped mid-sentence.
4 A ¶ A second woman steps from the airlock: COMMANDER ISADORA FENN-KATSURAGI (50s, uniform pressed, hair cropped).
5 A She looks at the pipe.
6 A Looks at the amber light.
7 D ISADORA: How long has the sun been failing?
8 D JUNO: Eleven hours. I filed it.
9 D ISADORA: I read the file. She did not say eleven.
10 D JUNO: She said eight. She was wrong. I corrected her.
11 A ¶ She holds up a wrench.
12 A Her hand shakes, and it is not fear.
13 A It is the long fury of a woman who has been right in a ship that does not want her to be.
14 A ¶ Isadora's eyes narrow.
15 A She takes a step closer, and the lettuce trays lean toward her like a congregation.
16 D ISADORA: You rewrote the commander's log.
17 D JUNO: I corrected it.
18 D ISADORA: Without permission.
19 D JUNO: Without waiting for her to die first.
* 20 A ¶ The amber light stutters.
* 21 A The pipe hisses.
22 A Neither woman looks at it.

### SCENE s00283 | INT. FAMILY MINIVAN - DRIVE-THROUGH BREAKFAST LANE - MORNING
Detected names (may be incomplete or contain aliases): ROLAND ESPINOZA-HART, NEELAM ESPINOZA-HART, TAMSIN, FELIX
* 1 A ¶ Rain on the windshield.
* 2 A Four people.
* 3 A One bag of hash browns that has already been opened.
4 A ¶ He is at the wheel, shouting into the speaker box while checking the mirror, the clock, and his phone all at once.
5 A His name is ROLAND ESPINOZA-HART (40s, tie half-knotted).
6 A ¶ She is in the passenger seat, shouting over him to the speaker box, with a coffee in one hand and a sleeping bag stuffed under her arm.
7 A This is NEELAM ESPINOZA-HART (40s, hospital scrubs).
8 A ¶ In the back, a girl of twelve, TAMSIN, kicks the seat.
9 A A boy of seven, FELIX, is standing on the seat, pressing his nose to the glass.
10 A A sibling war has broken out over the hash browns.
11 A They each have one hand in the bag and one hand on the other's face.
12 A Roland reaches back without looking and swats at both.
13 A Neelam reaches back, too, and her coffee spills down Roland's sleeve.
14 A He yelps.
15 A Tamsin shrieks.
16 A Felix falls off the seat onto the floor, still holding the bag.
17 D ROLAND: Two number threes!
18 D NEELAM: Three!
19 D TAMSIN: He's eating mine!
20 D FELIX: It's MY bag!
21 D ROLAND: Everybody stop!
* 22 A ¶ Nobody stops.
* 23 A The speaker box crackles.
* 24 A The car behind them honks.
25 D NEELAM: Roland, move up.
26 D ROLAND: I'm moving!
27 A ¶ He is not moving.
28 A He is reaching for a napkin.
29 A Felix's foot is on the horn.
* 30 A The honk goes long.
31 A Neelam lunges for the foot.
32 A Tamsin grabs the napkin.
33 A Roland swerves a half inch and hits the speaker post.
* 34 A ¶ The speaker box goes silent.
35 A All four freeze, mid-motion, a family in tableau.
36 A Then everyone starts again.

### SCENE s00284 | INT. PEST-CONTROL TRAINING SEMINAR - HOTEL BALLROOM - DAY
Detected names (may be incomplete or contain aliases): HUMPHREY, BRANDYWINE-OYELOWO, PRIZZY, DELACROIX-NAKASHIMA
* 1 A ¶ Folding chairs.
* 2 A A projector screen with a photograph of a cockroach the size of a thumb.
* 3 A A tray of lukewarm danishes.
4 A Two chairs are occupied.
5 A ¶ AUGUSTUS "HUMPHREY" BRANDYWINE-OYELOWO (50s, rumpled blazer, lanyard) is trying to open a danish with the ferocity of a man defusing a bomb.
6 A ¶ In the next chair, PRISCILLA "PRIZZY" DELACROIX-NAKASHIMA (30s, crisp polo, notebook) is writing in a hand so neat it looks typeset.
* 7 A ¶ At the front, nobody.
* 8 A The presenter has not arrived.
* 9 A The cockroach on the screen stares at the room with enormous composure.
10 D HUMPHREY: Prizzy, I think we've been had.
11 D PRIZZY: Humphrey, we paid for the seminar.
12 D HUMPHREY: We paid for a seminar. We didn't pay for an absence.
13 D PRIZZY: I'm sure he's coming.
14 D HUMPHREY: It's been forty minutes. I've eaten two danishes. I have regrets.
15 D PRIZZY (muttering): Regrets, he says.
* 16 A ¶ A pause.
17 A Humphrey looks at the screen.
18 A At the cockroach.
19 D HUMPHREY: That's a lot of bug.
20 D PRIZZY: That's an American cockroach.
21 D HUMPHREY: Is it? It looks Greek.
22 D PRIZZY: Humphrey.
23 D HUMPHREY: It's got the look. Stately. Doomed.
24 A ¶ Prizzy puts down her pen.
25 A Humphrey takes a bite of danish.
26 D HUMPHREY [CONT'D] (to the empty room): Anyone?
* 27 A ¶ The empty room does not answer.
* 28 A A fluorescent tube buzzes.
29 D PRIZZY: I could present.
30 D HUMPHREY: You could.
31 D PRIZZY: I know all the slides. I've seen the deck.
32 D HUMPHREY: You have the deck?
33 D PRIZZY: It's on my laptop.
34 D HUMPHREY: Prizzy, that's the bravest thing anyone's said since the continental breakfast.
35 A ¶ She stands.
36 A Smooths her polo.
37 A Walks to the front.
38 A Plugs in the cable.
* 39 A The projector flickers, then flares to life with a new slide: a diagram of a roach's digestive tract.
40 D PRIZZY (to the room): Good morning, everyone.
41 D HUMPHREY (whispering to himself): Oh, this is going to be good.
42 A ¶ Prizzy clears her throat, takes a breath.
* 43 A The door at the back bangs in the wind, and nobody comes in.
44 A ¶ Humphrey slumps.
45 A Prizzy continues, regardless.
46 D PRIZZY [CONT'D] (to the empty doorway, kindly): We're in the middle of a seminar.
47 D HUMPHREY: Prizzy, let the draft in. It might be the roaches.
