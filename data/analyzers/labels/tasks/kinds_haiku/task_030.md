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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0130.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00934 | INT. STAGECOACH WAY STATION, DINING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): AMOS GRISWOLD-TAYLOR, CLEMENTINE ROSSITER, ISIDRO VALDEZ, TOBIAS WREN, NELL HAWTHORNE-BEAR
* 1 A ¶ A low adobe room.
* 2 A A long plank table, a kerosene lamp, five tin plates.
* 3 A Rain drums the roof.
4 A ¶ AMOS GRISWOLD-TAYLOR (60s, station keeper) ladles stew.
5 A At the table sit the evening's passengers: CLEMENTINE ROSSITER (30s, a widow's veil pushed back), ISIDRO VALDEZ (40s, a drummer with a sample case), and TOBIAS WREN (20s, a seminarian, his collar a size too big).
6 A At the head of the table, apart, sits a woman in a trail-worn duster, NELL HAWTHORNE-BEAR (40s).
7 A ¶ She has not touched her stew.
8 D CLEMENTINE: Is it always this wet in the territory?
9 D AMOS: Only when somebody's about to die.
10 D ISIDRO: Mr. Griswold, that's not funny.
11 D AMOS: Wasn't meant to be.
12 D TOBIAS: Is there a church within fifty miles?
13 D AMOS: There's a hole. Used to be a church.
14 D CLEMENTINE: Does anyone here carry a firearm?
15 D NELL: I do.
16 A ¶ They all look at her.
17 A She lifts the lid of her stew bowl, peers inside, and sets it down again.
18 D ISIDRO: For what purpose, ma'am?
19 D NELL: The usual.
20 D AMOS (too brightly): More bread, anyone?
21 D NELL: Sit down, Amos.
22 A ¶ He does.
23 D NELL [CONT'D]: The man who sold you this stew is not the man whose name is on the door.
24 D AMOS: I don't know what you --
25 D NELL: I buried the real Amos Griswold in March. Wasn't a pretty burying.
* 26 A ¶ Nobody moves.
* 27 A The lamp gutters.
28 A Isidro's hand slides slowly toward his sample case.
29 D NELL [CONT'D]: Don't.
30 D ISIDRO: Madam, I --
31 D NELL: I've no quarrel with the three of you. It's only him.
32 A ¶ Amos laughs, a dry hoarse sound, and reaches under the table.
33 A Nell is faster.
* 34 A A single shot, loud as a door slamming, and the gun in his hand skitters across the floor.
35 A ¶ He sits very still, clutching his wrist, and for the first time he looks his real age.
36 D AMOS: Who sent you?
37 D NELL: Nobody. I came on my own.
38 A ¶ She stands, holsters the revolver, and turns to the others.
39 D NELL [CONT'D]: Finish your supper. The stage leaves at dawn.

### SCENE s00935 | INT. MENDOZA-FAIRCLOUGH FAMILY KITCHEN - DUSK
Detected names (may be incomplete or contain aliases): GRANDMOTHER EULALIA MENDOZA, HECTOR FAIRCLOUGH-MENDOZA, NOEMI, TEODORO
* 1 A ¶ A narrow galley kitchen in a house built for a bigger family.
* 2 A Yellowed curtains, a fridge covered in magnets from places no one has visited in years.
* 3 A On the counter, a cake with one candle already melted.
4 A ¶ GRANDMOTHER EULALIA MENDOZA (70s, cardigan buttoned wrong) arranges forks into a fan.
5 A She stops, straightens them, arranges them again.
6 A ¶ Her son, HECTOR FAIRCLOUGH-MENDOZA (40s, shirt sleeves rolled, a ring of sweat at the collar) stands at the stove, stirring a pot that has long since stopped needing it.
7 A His daughter, NOEMI (16, headphones round her neck, thumbnail polish chipped to nubs), sits at the table peeling a label off a jar in one long unbroken strip.
8 A At the end of the table, TEODORO (9, in a school tie knotted too tight) draws a small, careful circle on a napkin, and then another, and then another.
9 D HECTOR (to the room): Dinner in five.
* 10 A ¶ No one answers.
11 A Eulalia moves a fork a quarter-inch.
12 D NOEMI: Is Dad coming?
13 D HECTOR (to the pot): He said he'd try.
14 D EULALIA (to herself): He always says that.
15 A ¶ Teodoro finishes a circle.
16 A He draws a line connecting it to the others.
17 D NOEMI: Teo, what is that?
18 D TEODORO (not looking up): It's the table.
19 D NOEMI: We're five. There's four chairs.
20 D TEODORO: I know.
* 21 A ¶ The label tears.
22 A Noemi drops it and leaves the jar on the table.
23 A Hector turns off the burner and the pot ticks as it cools.
24 A Eulalia sets down the last fork, and all of them, one by one, look at the empty chair.
25 D NOEMI [CONT'D] (to everyone, tight): Can we please just eat.
26 D HECTOR: Noemi --
27 D NOEMI: I said, can we please just eat!
28 A ¶ She shoves her chair back.
* 29 A It scrapes.
30 A Eulalia flinches.
31 A Teodoro does not.

### SCENE s00936 | INT. ICE RINK ZAMBONI GARAGE - EARLY MORNING
Detected names (may be incomplete or contain aliases): RUDY, OYELARAN-STACK, MARISOL ECHEVERRIA-TANAKA, COACH DAHLIA FENWICK-ABARA, COACH, PHOEBE NAKAMURA-DELACROIX
* 1 A ¶ A cinderblock garage that smells of diesel and frozen rubber.
* 2 A A Zamboni, huge and patient, sits in the center like a sleeping bull.
* 3 A Hockey sticks hang on pegs along the wall, taped blades pointing at the floor.
4 A ¶ RUTHERFORD "RUDY" OYELARAN-STACK (60s) sits on an upturned bucket by the machine, a thermos between his knees.
5 A He is a big man gone soft, with a face like weathered oak and eyes that have watched ten thousand early mornings.
6 A He pours coffee into the thermos lid and offers it to no one in particular.
* 7 A ¶ The side door opens.
8 A MARISOL ECHEVERRIA-TANAKA (17) comes in carrying a hockey bag nearly as big as she is.
9 A She wears a faded junior-league jersey and holds her skates by the laces.
10 A ¶ She sets down the bag.
11 A He nods.
12 A She nods back.
13 A Neither says anything.
* 14 A It is a ritual.
15 D RUDY: Ice is good today.
16 D MARISOL: Good how?
17 D RUDY: Hard. Fast. Clean.
18 A ¶ She laces her skates, standing one foot on the Zamboni's bumper.
19 A He sips the coffee and lets her work.
20 A ¶ A third figure leans in the doorway: COACH DAHLIA FENWICK-ABARA (40s, quilted parka, a clipboard held like a hymnal).
21 A She watches Marisol lace for a moment, then glances at Rudy, who shrugs.
22 D COACH: You're early.
23 D MARISOL: So are you.
24 D COACH: I'm always early.
25 D MARISOL: So am I.
26 A ¶ The Coach smiles, almost.
27 A She sets the clipboard on the hood of the Zamboni.
28 A ¶ At the far end of the garage, a second girl is already sitting on the bench, tying her own skates in silence: PHOEBE NAKAMURA-DELACROIX (16).
29 A She does not look up.
30 A Marisol sees her, and her shoulders tighten, then ease.
31 D MARISOL [CONT'D] (quietly): Hey, Phoebe.
32 D PHOEBE: Hey.
* 33 A ¶ That's all.
34 A Rudy puts the lid back on the thermos.
35 A He climbs onto the Zamboni and the engine coughs awake, roaring in the low room.
* 36 A The big door rolls up, and a gray light pours across the ice.
37 A ¶ Marisol steps out onto the surface first.
38 A Phoebe follows.
* 39 A Nobody speaks.
* 40 A The blades cut their lines in the fresh ice.

### SCENE s00937 | EXT. ABANDONED DRIVE-IN SCREEN, ROOFTOP OF THE CONCESSION STAND - NIGHT
Detected names (may be incomplete or contain aliases): JUNE, OKAFOR-LINDQVIST, DEX, ALVARADO-CHEN, MAEVE O'DONNELL-BASU, TOM, REYNOLDS
* 1 A ¶ A cracked concrete rooftop under a vast, wheeling sky.
* 2 A Below, the lot is a field of rusted speaker posts.
* 3 A Above them, the screen towers, blank and enormous, a white rectangle hung against the stars.
4 A ¶ Four teenagers sprawl on the tar paper with a cooler and a boombox playing something tinny and joyous.
5 A ¶ JUNIPER "JUNE" OKAFOR-LINDQVIST (17, scraped knees, a purple streak in her hair) balances on the parapet with her arms out like wings.
6 A DEXTER "DEX" ALVARADO-CHEN (18, glasses, a sunburn in the shape of a watch) sits cross-legged, aiming a laser pointer at the screen.
7 A MAEVE O'DONNELL-BASU (17, a denim jacket three sizes too big) drums a beat on the cooler.
8 A And TOMASZ "TOM" REYNOLDS (18, a letterman jacket without a letter) lies flat on his back, eyes closed, a grin spreading slowly across his face.
9 D JUNE (to everyone): We are the last people on Earth!
10 D DEX (to June): You're going to fall.
11 D JUNE: I'm going to fly.
12 D MAEVE (to herself): Please don't fly.
13 D TOM (eyes closed): Everyone shut up. This is the best night of my life.
14 D DEX: You said that last week.
15 D TOM: It was true last week too.
* 16 A ¶ The laser dot dances across the white screen, a red comet looping among the stars.
17 A June leaps from the parapet to the roof, landing in a crouch, whooping.
18 D JUNE: Nobody's ever going to know we were here!
19 D MAEVE (to Dex): Is that supposed to be sad?
20 D DEX (to Maeve): No. I think it's the opposite.
21 A ¶ June grabs Maeve's hands and spins her.
* 22 A The boombox swells.
23 A Tom sits up, laughing, and throws a can of soda.
24 A Dex ducks.
* 25 A It bursts against the screen's concrete foot below, a tiny sticky firework.
26 D TOM: Direct hit!
27 D MAEVE (to the sky): Please never end.
28 D DEX (to all of them): It won't, not for us.
* 29 A ¶ They fall quiet, laughing still, panting, four small figures on a roof beneath the enormous empty screen.

### SCENE s00938 | INT. FAIRBANKS FAMILY DINING ROOM - EVENING
Detected names (may be incomplete or contain aliases): LAWRENCE FAIRBANKS-ODUYA, MARGARET, CLAUDIA, TEDDY
* 1 A ¶ A formal dining room in a house that is slightly too large.
* 2 A A chandelier.
* 3 A A mahogany table set for four, with a fifth chair pushed against the wall.
* 4 A A grandfather clock ticks.
5 A ¶ LAWRENCE FAIRBANKS-ODUYA (60s, three-piece suit, silver hair brushed back) carves a roast with exacting care.
6 A At the other end of the table, MARGARET (60s, pearls, a smile on a timer) arranges napkins.
7 A Between them sit their grown children: CLAUDIA (30s, tailored, a wedding ring she keeps turning) and THEODORE "TEDDY" (30s, a rumpled blazer, no tie).
* 8 A ¶ The roast is placed.
9 A Lawrence serves Claudia first, then Margaret, then himself.
10 A Teddy's plate stays empty.
11 D LAWRENCE: Claudia. Your promotion. Tell us.
12 D CLAUDIA: It's nothing, Father. Just a title.
13 D LAWRENCE: Don't undersell it.
14 D MARGARET: Lawrence, let her eat.
15 A ¶ Teddy takes a roll from the basket.
16 A He tears it in half and lays both halves on his plate.
17 D LAWRENCE: And you, Theodore?
18 D TEDDY: I'm fine.
19 D LAWRENCE: That wasn't the question.
20 D TEDDY: It was an answer.
21 A ¶ Margaret refills her water glass.
22 A She does not drink.
23 A Claudia glances at her brother; he glances back.
* 24 A The clock ticks.
25 D LAWRENCE: Your mother and I were discussing the lease.
26 D TEDDY: What lease?
27 D LAWRENCE: The office. Downtown. It expires in June.
28 D TEDDY: I know when it expires.
29 D LAWRENCE: Then you know we won't renew.
30 A ¶ Teddy sets the roll down.
31 A He wipes his fingers on the napkin, folds it into a neat square, and places it on the table.
32 D CLAUDIA: Father, can we not do this tonight?
33 D LAWRENCE: When, then?
34 D MARGARET (brightly): More potatoes, anyone?
35 D TEDDY: Thank you, Mother. No.
36 A ¶ Lawrence sets down the knife and fork, side by side, at precisely five o'clock.
37 A He looks at his son for a long, patient moment.
38 D LAWRENCE: You've had five years.
39 D TEDDY: I've had five years of you watching.
40 A ¶ Claudia stands.
41 A She begins clearing plates that have barely been touched.
42 A Margaret rises, takes the potato dish, and goes to the kitchen without a word.
* 43 A The door swings shut behind her.
44 A ¶ Teddy pushes his chair back, takes his blazer from the chair, and stands there with it hanging from one hand.
45 D LAWRENCE: Sit down.
46 D TEDDY: No.
47 A ¶ For the first time, Lawrence's hand trembles on the table.
48 A He closes it into a fist and holds it there.

### SCENE s00939 | INT. LIGHTHOUSE KEEPER'S COTTAGE, ATTIC - NIGHT
Detected names (may be incomplete or contain aliases): ESME, PAXTON-MBEKI, WILLOW PAXTON-LOWE
* 1 A ¶ A low attic under slate.
* 2 A A single round window faces the sea.
* 3 A Boxes of old photographs, a dressmaker's dummy wearing a faded raincoat, and a rocking horse whose paint has long since worn away at the ears.
4 A ¶ ELSPETH "ESME" PAXTON-MBEKI (70s, white braid down her back, a wool shawl pinned with a brass fish) sits on a trunk with a shoebox on her lap, and her granddaughter, WILLOW PAXTON-LOWE (17, rain-wet hair, her mother's unmistakable chin), kneels on the floor with a flashlight, a photograph, and a magnifying glass, pulling things out of boxes and laying them on the boards in rows.
5 D WILLOW: Gran, who's this one?
6 D ESME: Oh, that's your great-uncle Piet. He drowned on that boat, that one, the one behind him.
7 D WILLOW: He looks happy.
8 D ESME: He was always happy. That's what killed him.
9 A ¶ Willow laughs, then sees her grandmother isn't laughing.
10 A She sets down the photograph and picks up another.
11 A Esme watches her, fingers moving on the shoebox lid, then lifts it and takes out a small tin whistle.
12 D ESME [CONT'D]: Your mother played this. Right here, on this floor, every night until the lamp came on.
13 D WILLOW: She never told me.
14 D ESME: She wouldn't. She thought you'd laugh.
15 D WILLOW: Gran, I wouldn't --
16 D ESME: Shh.
17 A ¶ Esme lifts the whistle and blows a single, thin note.
18 A Willow stares at her, and the note hangs in the cold air.
* 19 A The lamp in the tower below, far beneath them, swings its great beam across the round window.
20 D WILLOW: Play it again.
21 D ESME: I don't remember the tune.
22 D WILLOW: Play anything.
23 A ¶ Esme closes her eyes, puts the whistle to her lips again, and plays a halting, crooked melody.
24 A Willow, kneeling in a circle of photographs, begins to hum along with her.
* 25 A Then the whistle breaks into a harsh squeal.
26 A Esme lowers it and laughs, wheezing.
27 A Willow laughs with her, and then, suddenly, she is crying, and she doesn't stop, and she crawls across the floor and puts her head in her grandmother's lap.
28 D WILLOW [CONT'D] (into the shawl): I miss her, Gran.
29 D ESME: I know, my girl. I know.
30 A ¶ The beam passes the window again, and again, and the two of them sit inside it, rocking, in the rhythm of the sea.

### SCENE s00940 | EXT. RAILWAY CUTTING, FLOODED TRENCH LINE - PRE-DAWN
Detected names (may be incomplete or contain aliases): SERGEANT BORIS KALININ-ADEYEMI, PRIVATE LUCIEN MAROIS, CORPORAL TAMSIN BRENNAN-OKORO
* 1 A ¶ Mud.
* 2 A Barbed wire.
* 3 A A rusted boxcar tipped on its side, half sunk.
* 4 A Thin mist over the standing water.
5 A ¶ SERGEANT BORIS KALININ-ADEYEMI crouches in the doorway of the boxcar.
6 A Tall.
7 A Gray at the temples.
8 A A cigarette he does not light.
9 A ¶ Behind him, PRIVATE LUCIEN MAROIS (19) sits against the wall with his knees to his chest.
10 A His rifle lies across his lap.
11 A He stares at the floor.
12 A ¶ Further down the car, CORPORAL TAMSIN BRENNAN-OKORO crouches over a field kit.
13 A She counts bullets into her palm.
14 A Counts again.
* 15 A ¶ Silence.
* 16 A Water drips.
17 D BORIS: Marois.
18 A ¶ Lucien does not look up.
19 D BORIS [CONT'D]: Marois.
20 A ¶ Lucien lifts his head.
21 A His eyes are very bright.
22 D LUCIEN: Sergeant.
23 D BORIS: Eat something.
24 D LUCIEN: Not hungry.
25 A ¶ Boris tosses a tin of biscuits across the car.
26 A Lucien catches it against his chest without opening it.
27 D TAMSIN: He'll eat when he's ready.
28 D BORIS: He'll eat now.
29 A ¶ Tamsin glances at the boy, then at Boris.
30 A She says nothing.
31 A Lucien cracks the tin, takes one biscuit, and holds it without biting.
* 32 A ¶ Far off, a shell lands.
* 33 A The boxcar shivers.
* 34 A A fine rain of rust falls from the roof.
35 A No one flinches.
36 A Tamsin finishes counting.
37 A Boris lights the cigarette at last, takes one drag, then pinches it out and returns it to his pocket.
38 D TAMSIN: Eleven rounds each.
39 D BORIS: That's enough.
40 D TAMSIN: It's not enough, Boris.
41 D BORIS: It is for what we've got.
* 42 A ¶ A second shell.
* 43 A Closer.
44 A Lucien bites the biscuit.
45 A Chews.
46 A Swallows.
47 D LUCIEN: Sergeant?
48 D BORIS: Yes.
49 D LUCIEN: Is my brother's company still on the ridge?
50 A ¶ Boris looks at Tamsin.
51 A Tamsin looks at her hands.
* 52 A It is the only answer, and everyone in the boxcar understands it.
53 D BORIS: Eat the other half.
54 A ¶ Lucien does.
55 A He keeps his eyes on his sergeant the whole time.
* 56 A ¶ A third shell, much farther away.
* 57 A The mist begins to thin.
* 58 A Pale light slides along the water.
59 D BORIS [CONT'D] (quietly): When it's quiet, we move.
60 D TAMSIN (quietly): When it's quiet, we move.
61 A ¶ Boris almost smiles.
62 A He gathers his rifle.
63 A Tamsin shoulders her kit.
64 A Lucien stands, unsteady, and the three of them wait in the doorway of the tipped boxcar for the guns to stop.

### SCENE s00941 | INT. CORONER'S OFFICE, AFTER HOURS - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE MIRIAM ACHTERBERG-OLUWOLE
* 1 A ¶ Green linoleum.
* 2 A A desk lamp.
* 3 A A wall of filing cabinets, drawers half open.
4 A ¶ DETECTIVE MIRIAM ACHTERBERG-OLUWOLE (50s) sits behind the desk in her coat.
5 A She has not taken it off.
6 A She holds a single photograph by its edges.
7 A ¶ She sets it down.
8 A Picks it up.
9 A Sets it down.
10 A ¶ She presses play on a micro-cassette recorder.
* 11 A Hiss.
* 12 A Then her own voice, younger, steadier.
13 D MIRIAM [V.O.] (recorded): Day one. The body's identified. Walter Pryor, forty-four. Case closed.
14 A ¶ She stops the tape.
15 A Rewinds.
16 A Plays it again.
17 D MIRIAM [V.O., CONT'D] (recorded): Walter Pryor, forty-four. Case closed.
18 A ¶ She turns the photograph over.
* 19 A A name, in pencil, on the back.
20 A She reads it twice.
21 D MIRIAM: It's the wrong body.
22 A ¶ She stares at the lamp.
23 A Her jaw works.
24 D MIRIAM [CONT'D] (to the recorder): You signed the form. You, Miriam.
25 A ¶ She hits the red button.
* 26 A Records.
27 D MIRIAM [CONT'D] (into the recorder): Day nine hundred and four. Reopen it.
28 A ¶ She flicks off the lamp.
* 29 A The room goes dark, and only the red record light glows on her face.
30 D MIRIAM [CONT'D]: So who's in the ground?

### SCENE s00942 | INT. 24-HOUR LAUNDROMAT, SUNSET STRIP PLAZA - 3 A.M.
Detected names (may be incomplete or contain aliases): GWEN, ABERNATHY-TSUJI, KWABENA
* 1 A ¶ Fluorescent hum.
* 2 A Rows of dryers tumbling, each a small bright porthole.
* 3 A Plastic chairs bolted to the floor.
* 4 A A vending machine glows red beside a bulletin board layered with years of flyers.
5 A ¶ GWENDOLYN "GWEN" ABERNATHY-TSUJI (50s, orthopedic shoes, a nurse's lanyard still around her neck) sits alone in the middle of the row, folding towels.
6 A She has folded the same towel three times.
* 7 A Her cell phone lies face-up on the seat beside her, silent.
8 A ¶ She stacks the towel on a pile.
9 A Reaches for another.
* 10 A The phone buzzes.
11 A She does not look at it for four full buzzes.
12 A Then she picks it up.
13 D GWEN: Hello?
14 D KWABENA [V.O.] (over phone): Mom. It's me.
15 D GWEN: I know who it is, baby.
16 D KWABENA [V.O.] (over phone): Did I wake you?
17 D GWEN: I don't sleep, Kobe. You know that.
18 D KWABENA [V.O.] (over phone): Still on nights?
19 D GWEN: Still on nights.
* 20 A ¶ A dryer buzzes.
21 A She stands, opens it, pulls out a handful of warm laundry, and holds it to her face, just for a moment.
22 A Then she carries it to the folding table.
23 D KWABENA [V.O.] (over phone): How's the knee?
24 D GWEN: Fine.
25 D KWABENA [V.O.] (over phone): Mom.
26 D GWEN: It's a knee, Kobe. It's seen worse.
27 A ¶ She snaps a pillowcase flat.
28 A Folds it in thirds.
29 D KWABENA [V.O.] (over phone): I'm not calling about the knee.
30 D GWEN: I know.
31 D KWABENA [V.O.] (over phone): You do?
32 D GWEN: You called at three in the morning. You're a good boy. You don't do that for nothing.
* 33 A ¶ Silence on the line.
34 A She waits.
* 35 A Outside, a bus idles at the stop, its brake lights painting the window red.
36 D KWABENA [V.O.] (over phone): Mom. I got the letter.
37 A ¶ Her hands stop.
38 D GWEN: Which letter?
39 D KWABENA [V.O.] (over phone): The one from Dad's lawyer.
40 A ¶ Gwen sets down the pillowcase.
41 A She walks to the window and stands with her back to the room, one hand pressed flat to the cold glass.
42 D GWEN: What did it say?
43 D KWABENA [V.O.] (over phone): That he left something. For both of us.
44 D GWEN: He left us nothing.
45 D KWABENA [V.O.] (over phone): Mom, I'm looking at a deed.
46 D GWEN: I don't want it.
47 D KWABENA [V.O.] (over phone): It's the house in Accra. The one he said he sold.
48 D GWEN: He sold it. I watched him sign.
49 D KWABENA [V.O.] (over phone): Mom --
50 D GWEN: He sold it, Kwabena!
51 A ¶ Her voice cracks and fills the whole room.
* 52 A The dryers tumble on, indifferent.
* 53 A A long breath over the line.
54 D GWEN [CONT'D] (quietly): I'm sorry. I didn't mean to shout.
55 D KWABENA [V.O.] (over phone): It's okay.
56 D GWEN: It isn't. I just -- I carried that man for thirty years.
57 D KWABENA [V.O.] (over phone): I know.
58 D GWEN (together): I'm not carrying him anymore.
59 D KWABENA [V.O.] (together, over phone): You don't have to carry him anymore.
60 A ¶ They both go still.
* 61 A The line holds open between them, hissing softly.
62 D GWEN: Say that again.
63 D KWABENA [V.O.] (over phone): You don't have to, Mom. I'll go. I'll sort it out. You can stay right where you are.
64 A ¶ She sinks into a plastic chair.
* 65 A The bus pulls away from the stop, and its light slides off her face.
66 D GWEN: When are you flying?
67 D KWABENA [V.O.] (over phone): Thursday.
68 D GWEN: I'll make the jollof.
69 D KWABENA [V.O.] (over phone): Mom, I'm not staying for dinner.
70 D GWEN: You are staying for dinner.
71 D KWABENA [V.O.] (over phone): Yes, Mom.
72 A ¶ She laughs, a real laugh, wet at the edges.
73 A She presses the heel of her hand to her eye.
* 74 A Behind her, the last dryer buzzes and falls silent.
75 A In the sudden quiet, she is very small, and very still, and finally not alone.

### SCENE s00943 | INT. ORBITAL AGRICULTURE RING, SECTOR NINE - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): CAPTAIN ISOLDE VANTERPOOL-NWOSU, BART, KOWALSKI-DIAZ, ZAINAB HAKIMI-OSEI, QUARTERMASTER FIONNUALA BRANAGH-SATO, MERCATOR, PERRY, OLUWASEUN
* 1 A ¶ Rows of hydroponic wheat curve up and over the ceiling, a green horizon bent into a loop.
* 2 A Grow lights hum at a violet pitch.
* 3 A A lone maintenance drone ticks along a rail.
4 A ¶ CAPTAIN ISOLDE VANTERPOOL-NWOSU (50s, close-cropped silver hair, a mechanic's gloves tucked into her belt) crouches over an open irrigation panel while ENSIGN BARTHOLOMEW "BART" KOWALSKI-DIAZ (20s, freckled, a tool belt that sags on one hip) holds the flashlight and DR. ZAINAB HAKIMI-OSEI (40s, lab coat, a tablet she hasn't looked up from) paces the aisle between the rows, all three listening to the same faint knocking in the walls.
5 A Down the far end, QUARTERMASTER FIONNUALA BRANAGH-SATO (30s, a clipboard under her arm) and a taciturn engineer called MERCATOR (60s, mechanical left hand, a cigar he never lights) stand at the lock, arguing in low voices about whose shift this was, while a nervous seed technician, PERPETUA "PERRY" OLUWASEUN (20s, a tray of seedlings hugged to her chest), hovers between the two groups.
6 D BART: Captain, it's coming from the north wall.
7 D ISOLDE: It's coming from the wheat.
8 D ZAINAB (without looking up): Wheat doesn't knock.
* 9 A ¶ The knocking stops.
10 A They all freeze.
11 A Bart lowers the flashlight, Zainab lifts her head, Isolde stills with a wrench in her hand, and at the far end of the aisle Fionnuala and Mercator turn together.
12 D FIONNUALA: Did you hear that?
13 D MERCATOR: Hear what?
14 D PERRY: I told you the wheat was strange!
* 15 A ¶ The lights go out.
* 16 A A beat of perfect dark, then emergency amber floods up from the floor.
* 17 A The wheat rows rustle, though there is no wind.
18 D ISOLDE: Everyone to the hatch, now.
19 A ¶ They scatter.
20 A Bart drops the flashlight and runs.
21 A Zainab fumbles the tablet into her coat and follows.
22 A Isolde backs away from the panel with the wrench raised.
23 A Fionnuala drops the clipboard and Mercator grabs her sleeve, and together they stumble toward the lock as the north wall bulges inward, plates bending like wet paper.
24 D BART (shouting): What is that?
25 D ZAINAB (shouting): Don't look at it!
* 26 A ¶ Too late.
27 A Bart stops dead and stares.
28 A Zainab catches his collar and hauls him around the corner, and Isolde slams the bulkhead shut behind all six of them, panting.
* 29 A The knocking resumes on the other side, patient and rhythmic.
30 A ¶ Mercator, for the first time, takes the cigar out of his mouth.
31 D MERCATOR: That's not wheat.
32 D ISOLDE: No.
33 A ¶ Fionnuala starts to laugh, high and thin.
* 34 A Nobody joins her.

### SCENE s00944 | INT. HARBORVIEW ROWING CLUB, BOATHOUSE - PRE-DAWN
Detected names (may be incomplete or contain aliases): COACH HAROLDINE BEAUMONT-ADEKUNLE, DARIUS KOWALA-NAKAMURA, LORCAN FITZGIBBON-ADE, ELOWEN MARCH-SANTOS, PADDY TREMBLAY-ONYEKA
* 1 A ¶ Racks of eight-man shells hang from the rafters like pale fish.
* 2 A The river outside is black and still.
* 3 A Condensation beads on the windows.
4 A ¶ COACH HAROLDINE BEAUMONT-ADEKUNLE (60s, wool cap, a stopwatch on a faded lanyard) stands at the water door with her back to the room.
5 A ¶ Behind her, four rowers sit on the bench, lacing shoes.
6 A DARIUS KOWALA-NAKAMURA (20s, shoulders like doors) has ripped his tape twice.
7 A LORCAN FITZGIBBON-ADE (20s, hands bandaged) peels the gauze off one palm, studies the raw skin, and presses the gauze back on.
8 A ELOWEN MARCH-SANTOS (20s, her ponytail tight enough to hurt) stares at the same spot on the floor.
9 A PADDY TREMBLAY-ONYEKA (19, the youngest, a borrowed hoodie) keeps rubbing his thumbs against his knees.
* 10 A ¶ Nobody speaks.
* 11 A The only sound is the creak of the racks and the slap of water against the dock.
12 A ¶ Haroldine shifts her weight.
13 A She does not turn.
14 D HAROLDINE: Boats in.
15 A ¶ They stand.
16 A All together, with the ease of long practice, they lift the shell from its rack and walk it toward the water.
17 A Darius takes the bow.
18 A Lorcan, the stern.
19 A Elowen and Paddy each take a side.
20 A Haroldine holds the door.
* 21 A ¶ The shell touches the river.
22 A Paddy steps in first.
23 A His foot slips.
24 A Elowen's hand is on his elbow before he knows he's falling.
25 A ¶ He says nothing.
26 A She says nothing.
27 A She lets go.
28 D HAROLDINE [CONT'D] (to the shell, quietly): Go.
* 29 A ¶ Oars dip.
30 A The boat moves out into the fog, and the four of them breathe as one, a single lung.
31 A On the dock, the Coach clicks her stopwatch, looks at it, and clicks it again.

### SCENE s00945 | INT. NEONATAL ICU, NIGHT SHIFT - 4 A.M.
Detected names (may be incomplete or contain aliases): PHILOMENA ADEGBOYE-LINDGREN
* 1 A ¶ Rows of incubators glow like small amber lanterns.
* 2 A Monitors blink green.
* 3 A A radiator ticks.
* 4 A No one is at the nurses' station.
* 5 A ¶ The desk phone's red light flashes.
* 6 A An answering machine clicks on.
7 D PHILOMENA [V.O.] (recorded): You've reached Neonatal. If this is an emergency, hang up and call the floor line. Otherwise, leave your message after the tone.
* 8 A ¶ Beep.
* 9 A Dead air.
* 10 A Then a click, and the line goes silent.
* 11 A ¶ The double doors swing open.
12 A DR. PHILOMENA ADEGBOYE-LINDGREN (40s, scrubs, hair under a cap, a coffee cup in each hand) pushes through backward, shouldering the door.
13 A She sets one coffee on the desk, takes a sip of the other, and looks at the flashing phone.
14 A ¶ She presses the button.
* 15 A The message plays again.
16 A She listens to the beep, the silence, the click.
17 A ¶ She frowns.
18 A She picks up the receiver, checks the dial tone, replaces it.
19 A ¶ She walks the row of incubators.
20 A At each one she checks the monitor, taps the chart, nods.
21 A At the fourth she stops, reaching to adjust a blanket.
22 A Her hand hovers.
23 A ¶ The baby is awake.
24 A Eyes open.
25 A Staring at her without blinking.
26 A ¶ She smiles, adjusts the blanket, and moves on.
27 A ¶ At the sixth incubator she stops again.
28 A Empty.
* 29 A A name card still clipped to the frame.
30 A She checks the chart.
31 A Her pen stops.
32 D PHILOMENA (under her breath): Where did you go?
33 A ¶ She looks back toward the desk.
* 34 A The red light has stopped flashing.
35 A She walks slowly toward it.
* 36 A Beside the phone lies a hospital bracelet, tiny, the plastic still warm.
37 A ¶ She picks it up.
38 A Turns it over.
* 39 A ¶ On the back, in fresh marker: HER NAME.
* 40 A ¶ The monitors all flatline at once.
41 D PHILOMENA [CONT'D] (whispering): No.
42 A ¶ She spins.
* 43 A The row of incubators stands in perfect order.
* 44 A Every one of them is empty.
* 45 A Every one of them is lit.
* 46 A ¶ The answering machine clicks on again.
47 D PHILOMENA [V.O.] (recorded): You've reached Neonatal. Leave your message after the tone.
* 48 A ¶ Beep.
* 49 A And this time, a small breath on the line.

### SCENE s00946 | INT. FUNICULAR CAR, MID-ASCENT - NIGHT
Detected names (may be incomplete or contain aliases): ODALYS FERREIRA-MBEKI, MARCELLUS HOLLINGWORTH-NAKAMURA
* 1 A ¶ A tiny wooden cabin, varnished the color of old violins, climbing a steep rail through black pine forest.
* 2 A Brass lamps sway on their hooks.
* 3 A Rain hammers the glass.
* 4 A Below, the lights of a mountain town shrink to a handful of sparks.
5 A ¶ A woman sits upright on the forward bench, her coat buttoned to the throat.
6 A ODALYS FERREIRA-MBEKI is forty, with a face carved from patience and a leather satchel clutched in both hands.
7 A She watches the man across from her, and she never blinks.
8 A ¶ He is MARCELLUS HOLLINGWORTH-NAKAMURA, sixty, silver at the temples, gloves of fine kid.
9 A A cane lies across his lap.
10 A He smiles with his mouth only.
11 D ODALYS: You're late.
12 D MARCELLUS: The weather.
13 D ODALYS: It's always the weather with you.
14 A ¶ He taps the cane once against the floor.
15 A She flinches, barely.
16 A He notices.
17 D MARCELLUS: You have it?
18 A ¶ She does not answer.
19 A She lifts the satchel an inch, lets it fall back.
20 D MARCELLUS [CONT'D]: Show me.
21 D ODALYS: Not until the top.
22 D MARCELLUS: We are not going to the top.
* 23 A ¶ The car shudders.
* 24 A Something groans beneath the floor, steel on steel, and the lamps swing hard.
25 A Odalys grips the bench.
26 A He doesn't move at all.
27 D ODALYS: What did you do?
28 D MARCELLUS: Nothing yet.
* 29 A ¶ The cabin stops.
* 30 A Dead in the middle of the slope.
* 31 A Rain on the glass.
* 32 A Wind in the cables.
33 A ¶ He leans forward, resting both hands on the cane.
34 D MARCELLUS [CONT'D]: Now. Show me.
35 A ¶ Her hand slides inside the satchel.
36 A It comes out holding a small brass revolver, aimed at his chest.
37 A He looks at it, and for the first time, his smile changes.
38 D MARCELLUS [CONT'D]: Ah. There she is.
39 D ODALYS: Cut the cable, Marcellus.
40 D MARCELLUS: That isn't how it works.
41 D ODALYS: Cut it.
42 A ¶ He lifts the cane.
43 A Twists the silver handle.
* 44 A A thin blade slides out, gleaming.
45 A He turns it in the lamplight, almost fondly.
46 D MARCELLUS: It's a long way down, Odalys.
47 A ¶ She cocks the hammer.

### SCENE s00947 | INT. RADIOLOGY READING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): ADEBAYO KOWALSKI-NNAMDI
* 1 A ¶ Dark.
* 2 A Banks of monitors glow blue-white.
* 3 A A single chair, a headset, a cold coffee gone to skin.
4 A ¶ DR. ADEBAYO KOWALSKI-NNAMDI (40s) sits hunched at the center workstation, scrolling through a stack of chest films.
5 A He rubs his eyes.
6 A He scrolls.
7 A He stops.
8 A ¶ He leans in.
9 A Zooms.
10 A Zooms again.
11 A ¶ He taps a key.
* 12 A The dictation system plays back his earlier note through the speakers.
13 D ADEBAYO [V.O.] (recorded): Chest, two views. Lungs clear. No acute findings.
14 A ¶ He frowns.
15 A Pans the image.
* 16 A A small shadow, high in the left lung, edges crisp.
17 A He measures it.
18 A Measures it again.
19 A He leans back and exhales slowly.
20 D ADEBAYO (to himself): Not clear.
21 A ¶ He deletes the recording.
* 22 A The speakers click.
23 A He picks up the mic and begins to speak, steady and low.
24 D ADEBAYO [CONT'D] (dictating): Chest, two views. Small nodule, left upper lobe, six millimeters. Recommend follow-up CT.
25 A ¶ He sets the mic down and rolls his shoulders.
* 26 A On the screen, the shadow waits.

### SCENE s00948 | INT. LIBRARY OF THE OLD MILL HOUSE - EVENING
Detected names (may be incomplete or contain aliases): INSPECTOR CORNELIA VANDERHOEK-ASANTE, LADY OTTILIE FAIRBROTHER-ZULU, AGATHA PENHALIGON-DUBOIS, MRS. PENHALIGON, DENNIS HOLLOWAY-PARK
* 1 A ¶ A long, low room under a timbered ceiling.
* 2 A Shelves of leather books, a fire crackling in a stone hearth, a rain-streaked window overlooking the mill race.
* 3 A A grandfather clock stands against the wall, stopped at ten past four.
4 A ¶ INSPECTOR CORNELIA VANDERHOEK-ASANTE (50s, gray tweed, a pipe she never lights) paces slowly, studying the shelves.
5 A Two suspects sit in leather chairs by the fire, each with a glass of sherry untouched at their elbow.
6 A ¶ LADY OTTILIE FAIRBROTHER-ZULU (70s, silver rings on every finger) sits bolt upright, spine like a ruler.
7 A Beside her, the housekeeper, MRS. AGATHA PENHALIGON-DUBOIS (60s, apron still tied, hands folded in her lap) stares at the floor.
8 D CORNELIA: Thank you all for waiting.
9 D OTTILIE: We had little choice, Inspector.
10 D CORNELIA: No. You didn't.
11 A ¶ She stops at a shelf.
12 A Runs a finger along the spines.
13 A Pulls one out, holds it up, replaces it.
14 D OTTILIE: This is absurd. My brother Reginald fell down the stairs.
15 D CORNELIA: He did. Eventually.
16 D MRS. PENHALIGON (softly): The poor man.
17 D CORNELIA: Mrs. Penhaligon, you found the body at six?
18 D MRS. PENHALIGON: Quarter to six, ma'am. The clock was already stopped.
19 D CORNELIA: At ten past four.
20 D OTTILIE: It's been stopped for years.
21 D CORNELIA: No, Lady Fairbrother. It was stopped this morning. The pendulum is still warm.
* 22 A ¶ Silence.
* 23 A The fire pops.
24 A Ottilie's hand tightens on the arm of her chair.
25 D CORNELIA [CONT'D]: Someone stopped it at ten past four to give themselves an alibi.
26 D OTTILIE: Who would do that?
27 D CORNELIA: Someone who forgot the clock has a second winding key.
28 A ¶ The door opens, and a young constable, DENNIS HOLLOWAY-PARK (20s, rain-slick cape), comes in holding a small brass key in a handkerchief.
29 D DENNIS: Found it, Inspector. In the pocket of the dead man's dressing gown.
30 D CORNELIA: Thank you, Constable.
31 A ¶ She takes the key, turns it over, and looks at each of them in turn.
32 A Ottilie meets her gaze.
33 A And Mrs. Penhaligon, very slowly, lifts her eyes.
34 D MRS. PENHALIGON: It's mine, ma'am.
35 D OTTILIE: Agatha --
36 D MRS. PENHALIGON: It was always going to come to this, my lady.
37 D CORNELIA (gently): Mrs. Penhaligon, would you come with me?
38 A ¶ She nods, rises, smooths her apron, and walks to the door without looking back.

### SCENE s00949 | INT. DEEP-SEA HABITAT, COMMON ROOM - SHIFT CHANGE
Detected names (may be incomplete or contain aliases): COMMANDER ASTRID LINDQVIST-OKOYE, TECHNICIAN BENEDICT ARCHAMBAULT-LI, SOLEDAD VARGAS-EZEKIEL, MONA, ABARCA-NIELSEN, ENGINEER THADDEUS MWANGI-PELLETIER, SPECIALIST KAMALA DEVI-BRANDT
* 1 A ¶ A cramped steel cylinder with a single porthole of black water.
* 2 A Bunks fold from the walls.
* 3 A A coffee machine gurgles.
* 4 A Condensation drips from the pipes in a slow, steady count.
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
* 22 A ¶ They stop.
* 23 A The pipes drip.
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
* 38 A ¶ A long, low note rolls through the hull.
* 39 A The coffee ripples in the cups.
* 40 A Nobody moves.
* 41 A Nobody speaks.
42 A Then Kamala turns from the porthole and smiles.
43 D KAMALA: It's only the whales.

### SCENE s00950 | INT. NIGHT FERRY, OBSERVATION DECK - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE RUSSELL TEMPLETON-OYELARAN, TONI, BERGSTROM-ABIODUN
* 1 A ¶ Wind.
* 2 A Salt spray.
* 3 A Empty benches bolted to the deck.
4 A ¶ DETECTIVE RUSSELL TEMPLETON-OYELARAN (50s) grips the rail.
5 A Beside him, a small woman in a yellow slicker, ANTONIA "TONI" BERGSTROM-ABIODUN (30s), watches the wake.
6 D RUSSELL: You said you'd tell me.
7 D TONI: I did.
8 D RUSSELL: Then tell me.
9 D TONI: Not here.
10 D RUSSELL: Here.
11 D TONI: He's on this boat.
12 D RUSSELL: Who?
13 D TONI: The man in the grey cap.
14 D RUSSELL: I didn't see --
15 D TONI: Don't turn around.
16 A ¶ Russell turns.
* 17 A A gull cries.
* 18 A The deck is empty.
19 A Toni is gone.

### SCENE s00951 | INT. THE VASQUEZ-LINDEN KITCHEN - SUNDAY NOON
Detected names (may be incomplete or contain aliases): ROSALIND VASQUEZ-LINDEN, GREGORIUS LINDEN, SELMA
* 1 A ¶ A bright, crowded kitchen.
* 2 A Pots on every burner.
* 3 A A radio plays something with trumpets.
4 A ¶ ROSALIND VASQUEZ-LINDEN (50s) chops onions with violent speed.
5 A Her husband, GREGORIUS LINDEN (50s), hunts through a drawer for a corkscrew.
6 A Their daughter, SELMA (20s), stands in the doorway with a suitcase.
7 D ROSALIND (without turning): You're late.
8 D SELMA: The train --
9 D GREGORIUS (to the drawer): Where is that blasted thing?
10 D ROSALIND: Gregorius, it's in your hand.
11 D GREGORIUS: So it is.
12 D SELMA: I have news.
13 D ROSALIND (over her): Dinner first.
14 D GREGORIUS (to everyone): Dinner first!
15 D SELMA: I'm moving to Lisbon.
16 A ¶ The knife stops.
17 A Gregorius closes the drawer.
* 18 A The trumpet on the radio hits a long, high note, and no one moves.

### SCENE s00952 | INT. ASSEMBLY ROOM, BATH - 1790s - NIGHT
Detected names (may be incomplete or contain aliases): LADY CONSTANCE ASHWORTH-BELLAMY, MISS GEORGIANA TREVELYAN-SOLOMON, DUCHESS ELEANOR MARCHMONT-IDOWU
* 1 A ¶ Candles.
* 2 A A string quartet.
* 3 A Powdered wigs.
* 4 A Silk and sweat.
5 A ¶ LADY CONSTANCE ASHWORTH-BELLAMY (30s) and MISS GEORGIANA TREVELYAN-SOLOMON (20s) stand at the edge of the dance floor, fans snapping.
6 A A third woman, DUCHESS ELEANOR MARCHMONT-IDOWU (60s), leans heavily on her cane between them.
7 D CONSTANCE: She's staring again.
8 D GEORGIANA: Who?
9 D CONSTANCE: The Duchess. She thinks we cannot see her.
10 D DUCHESS: I can hear you perfectly well.
11 D GEORGIANA: Your Grace --
12 D DUCHESS: Do not "Your Grace" me. You were both whispering.
13 D CONSTANCE: We were admiring your pearls.
14 D DUCHESS: You were admiring my debts.
15 D GEORGIANA: Never!
16 D DUCHESS: Then you are fools. Everyone else is.
* 17 A ¶ The quartet begins a minuet.
18 A The Duchess lifts her cane and points it at the floor.
19 D DUCHESS [CONT'D]: Dance, both of you. And smile.

### SCENE s00953 | EXT. SCHOOL ROOF, STARGAZING NIGHT - NIGHT
Detected names (may be incomplete or contain aliases): TILDA, DELACROIX-OKAFOR, ANJALI, BANERJEE-LUND
* 1 A ¶ A flat tar roof under a smear of stars.
* 2 A A borrowed telescope on a tripod.
3 A ¶ MATILDA "TILDA" DELACROIX-OKAFOR (16) lies on her back, eating cereal from the box.
4 A She squints at the sky.
* 5 A ¶ The roof door bangs.
6 A ANJALI "JALI" BANERJEE-LUND (16, hoodie, backpack heavy with something clinking) bursts out, wheezing.
7 D ANJALI: You said eleven.
8 D TILDA: It's eleven.
9 D ANJALI: It's eleven-fifteen.
10 D TILDA: Time is a construct.
11 A ¶ She squats at the telescope and squints through it.
12 A Tilda crunches cereal.
13 A Anjali stands up, triumphant.
14 D ANJALI: I see Saturn.
15 D TILDA: That's the streetlight.
16 D ANJALI: It's Saturn.
17 D TILDA: It has no rings.
18 D ANJALI: It's shy.
19 A ¶ She laughs.
20 A Tilda laughs back.
* 21 A Then the laugh dies.
22 A Anjali has gone very quiet.
23 A She lifts something from her backpack: a crumpled acceptance letter, the paper soft from handling.
24 D ANJALI [CONT'D]: They said yes.
25 D TILDA: Who?
26 D ANJALI: Boston.
27 A ¶ Tilda's cereal box slides out of her hand.
* 28 A Cereal spills across the tar.
29 A She does not pick it up.
30 D TILDA (flat): That's far.
31 D ANJALI: It's a train.
32 D TILDA: It's a long train.
33 A ¶ She stands, brushes her knees, and walks to the telescope.
34 A She looks through it for a long time.
* 35 A Then, very quietly:
36 D TILDA [CONT'D]: It really is Saturn.

### SCENE s00954 | EXT. SALOON ROOFTOP, DEAD MAN'S CROSSING - SUNSET
Detected names (may be incomplete or contain aliases): SHERIFF OBADIAH TRELAWNEY-KANE, JED, RUSSO-ABIOLA, MAGDALENA SOLIS-FAIRWEATHER, FINN, O'HALLORAN-DIOP
* 1 A ¶ A flat saloon roof with a rickety rain barrel at one corner.
* 2 A A church bell hangs from a crooked post nearby.
* 3 A The street below is still.
* 4 A Warm light on dust.
5 A ¶ SHERIFF OBADIAH TRELAWNEY-KANE (50s, white mustache, a star pinned to a faded vest) sits on the barrel playing a harmonica.
6 A Across from him, DEPUTY JEDEDIAH "JED" RUSSO-ABIOLA (20s, hat tilted) eats beans from a tin.
7 A A woman in a gingham dress, MAGDALENA SOLIS-FAIRWEATHER (30s, a basket on her arm), hangs laundry on a line between two chimneys.
8 A Near the edge, FINNEGAN "FINN" O'HALLORAN-DIOP (40s, drover's hat pulled low) leans against the bell post, whittling.
9 D OBADIAH (to Jed): Quiet day.
10 D JED: Too quiet.
11 D MAGDALENA (to all of them): Anyone want pie?
12 D FINN (muttering): Pie, she says.
13 D OBADIAH: I'll take pie, Maggie.
14 D JED: I'll take two.
15 D MAGDALENA: Then you can come get it.
16 D OBADIAH: Come get it, Jed.
17 D JED: Why me?
18 D FINN: Because you're the youngest, son.
19 D JED: I'm not --
20 D OBADIAH: Quiet.
21 D FINN: Hear that?
22 A ¶ All four go still.
* 23 A Far off, hoofbeats.
* 24 A A hundred horses.
* 25 A Then a thousand.
* 26 A The church bell hums on its post.
27 D MAGDALENA: Obadiah?
28 D OBADIAH: Everyone down.
29 D JED: But sir --
30 D FINN: Down!
31 A ¶ They drop behind the parapet.
* 32 A From the end of the street, a dark mass rolls in: a cattle drive, massive and wild, tearing down Main Street toward them.
33 D JED (laughing, relieved): It's only cattle.
34 D OBADIAH: Look at the riders.
35 A ¶ Behind the stampede, a line of masked men with torches lopes into town.
36 D MAGDALENA (whispering): Lord help us.
37 D FINN (to himself): Not today.
38 A ¶ Obadiah rises, tucks the harmonica into his vest, and draws his revolver.

### SCENE s00955 | INT. ROADSIDE DINER, ROUTE 9 - NIGHT
Detected names (may be incomplete or contain aliases): LORETTA PENDERGAST-NWACHUKWU, ARTEMUS WILKES-DUBOIS, CASPIAN LEFEVRE-OYELARAN, JO, MAKINDE-HARTWELL
* 1 A ¶ A chrome-edged diner with a flickering OPEN sign.
* 2 A Rain on the windows.
* 3 A Red vinyl booths.
* 4 A A jukebox that has not played since 1994.
5 A ¶ LORETTA PENDERGAST-NWACHUKWU (50s, apron, a pencil tucked into her gray bun) wipes the counter.
6 A At a booth by the window sits ARTEMUS WILKES-DUBOIS (60s, trucker's cap, a thermos) with a crossword.
7 A In the corner booth, a young man hunches over a laptop: CASPIAN LEFEVRE-OYELARAN (20s, hoodie, headphones around his neck).
8 D LORETTA (to the room): Last call for pie, folks.
9 D ARTEMUS: Seven letters. "Unwelcome guest."
10 D LORETTA: Intruder.
11 D ARTEMUS: Eight.
12 D LORETTA: Trespasser.
13 D ARTEMUS: That fits. Thanks, Loretta.
14 A ¶ She tops off his coffee.
15 A Caspian, in the corner, types faster.
16 A His knee bounces.
17 D LORETTA (low, to Artemus): Boy's been here since noon.
18 D ARTEMUS (low): Not my business.
* 19 A ¶ The bell above the door jingles.
20 A A woman enters, soaked, a duffel over one shoulder.
21 A JOSEPHINE "JO" MAKINDE-HARTWELL (30s, buzz cut, a tattoo of a swallow on her neck) stops just inside the door, scanning every face.
22 D LORETTA: Sit anywhere, hon.
23 A ¶ Jo does not sit.
24 A She looks at Caspian.
25 D JO: Cass.
26 A ¶ Caspian freezes.
27 A He doesn't turn around.
28 D CASPIAN (to the screen): Jo.
29 D JO: You didn't call.
30 D CASPIAN (to himself): I was going to.
31 D ARTEMUS (to Loretta, whispering): That's not a customer.
32 D LORETTA (whispering back): No kidding.
33 A ¶ Jo crosses the room and stands at Caspian's booth, dripping on the linoleum.
34 D JO: I drove four hundred miles.
35 D CASPIAN: I know.
36 D JO: You left a note on the fridge.
37 D CASPIAN: I know.
38 D JO: It said "back soon."
39 D CASPIAN: It's been eight months.
40 D JO: Yeah, Cass. It has.
41 A ¶ Loretta clears her throat, loud enough that everyone looks.
42 D LORETTA: Pie, anyone? On the house?
43 D JO (turning, to the room): Sorry for the noise.
44 D LORETTA: Honey, this is the most interesting night I've had all year.
45 A ¶ Artemus chuckles into his thermos.
46 A Jo slides into the booth across from Caspian.
47 A She takes a fork from the napkin dispenser and eats a bite of his untouched pie.
48 D JO: Good pie.
49 D CASPIAN: You hate pie.
50 D JO: I hate being lied to.
51 A ¶ Caspian shuts the laptop.
52 D CASPIAN: Then I'll tell you the truth.
53 D JO: It better be long.
54 D CASPIAN: It's very long.
55 A ¶ Loretta fills two more cups.
56 A Artemus gives up on the crossword.
57 A The rain keeps coming, and the OPEN sign keeps blinking, and in the corner booth the two of them lean toward each other across the table.
58 D JO [CONT'D]: Start from the beginning.

### SCENE s00956 | INT. FIELD TENT, FORWARD AID STATION - NIGHT
Detected names (may be incomplete or contain aliases): MEDIC VICTORINE OKONJO-HALVORSEN, BRANDVOLD
* 1 A ¶ Canvas walls snap in the wind.
* 2 A A single hurricane lamp swings on a hook.
* 3 A Two empty cots.
* 4 A A field radio crackles beside a stack of ration tins.
5 A ¶ MEDIC VICTORINE OKONJO-HALVORSEN (30s) sits alone on the nearer cot with her sleeves rolled above the elbows.
6 A Her hands are steady.
7 A She winds a roll of gauze and does not look at the radio.
* 8 A ¶ It coughs.
9 D BRANDVOLD [V.O.] (over radio): Aid station four, this is Control. Report.
10 A ¶ She stares at it.
11 A She lets it ask twice.
12 D BRANDVOLD [V.O., CONT'D] (over radio): Victorine. Pick up.
13 A ¶ She lifts the handset.
14 D VICTORINE: Control, aid station four. No wounded.
15 D BRANDVOLD [V.O.] (over radio): None?
16 D VICTORINE: None left.
* 17 A ¶ A pause on the line.
* 18 A The wind pushes the canvas in and out like breathing.
19 D BRANDVOLD [V.O.] (over radio): Evacuation at oh-four-hundred. Pack what you can carry.
20 A ¶ She sets down the gauze.
21 A She does not move to pack.
22 D VICTORINE: Sergeant. Was it Anselmo?
23 D BRANDVOLD [V.O.] (over radio): Yes.
24 A ¶ She nods, to no one.
25 A She folds the blanket from the second cot into a tight square and holds it in her lap.
26 D BRANDVOLD [V.O.] (over radio): Control, out.
* 27 A ¶ The radio goes to static.
28 A She switches it off and sits in the lamplight, listening to the wind.

### SCENE s00957 | EXT. MESA OVERLOOK, HIGH DESERT - DAWN
Detected names (may be incomplete or contain aliases): STRANGER, CAPTAIN LEONIDAS HARGROVE-ABASI, SALLY QUILLFEATHER-DIAZ, OWEN TIBBS-OKORO, EPHRAIM
* 1 A ¶ Red rock.
* 2 A A sky going gold.
3 A Four riders reining in on the edge of a drop that falls a thousand feet to the canyon floor.
4 A ¶ A man in a black duster, a STRANGER, holds his horse apart, a rifle across the saddle.
5 A The three behind him wait: CAPTAIN LEONIDAS HARGROVE-ABASI (50s, cavalry hat), a gunslinger called SALLY QUILLFEATHER-DIAZ (30s, two revolvers, one scarred cheek), and a boy bugler, OWEN TIBBS-OKORO (15).
6 D LEONIDAS (to the Stranger): Your name, friend.
7 D STRANGER: Don't have one.
8 D SALLY: Everyone has one.
9 D OWEN (excited): Maybe he's a ghost!
10 D STRANGER (dryly): Maybe.
11 A ¶ He lowers the rifle.
12 A He looks at Sally for a long moment, and something passes behind his eyes.
13 D STRANGER [CONT'D]: Sally Quillfeather. Last time I saw you, you were nine.
14 D SALLY: Who the hell --
15 D STRANGER: Ephraim. Ephraim Quillfeather.
16 D SALLY: My brother's dead.
17 D EPHRAIM: So they told you.
18 D LEONIDAS (over him): Stand down, Sally!
19 D SALLY (over him): Don't you dare, Ephraim!
* 20 A ¶ The echo rolls off the mesa and into the canyon.
21 A Owen lifts his bugle halfway to his mouth, then lowers it.
22 A Nobody moves.

### SCENE s00958 | INT. CHINESE RESTAURANT BACK ROOM, MAH-JONG TABLE - NIGHT
Detected names (may be incomplete or contain aliases): MADAME LOTUS FONG-ADEWALE, VINNIE, CARUSO-OBI, DOLLY ZHAO-HARTLEY, BIG MOSES TEMPLETON-AGYEMAN, QUINCY PARK-DELGADO, FATHER PASCAL EZEKWESILI-MORROW
* 1 A ¶ Cigarette haze.
* 2 A A round table.
3 A Six men and women, tiles clacking.
4 A ¶ MADAME LOTUS FONG-ADEWALE (60s) sits at the head, perfectly still.
5 A To her left, VINNIE "THE CLERK" CARUSO-OBI (50s) shuffles.
6 A Beside him, DOLLY ZHAO-HARTLEY (40s) files her nails.
7 A Across, BIG MOSES TEMPLETON-AGYEMAN (50s), enormous, sweating.
8 A Next to him, QUINCY PARK-DELGADO (30s), tapping a tile.
9 A And the last, FATHER PASCAL EZEKWESILI-MORROW (60s, collar loose), stares at his hand.
* 10 A ¶ The tiles click.
* 11 A Click.
* 12 A Click.
13 D MADAME LOTUS (not looking up): Someone here has been talking.
14 A ¶ Nobody moves.
15 A Dolly's nail file stops.
16 A Moses lifts a tile, sets it down.
17 A Quincy's hand slides from the table to his lap.
18 D VINNIE: Madame --
19 D MADAME LOTUS: Vincent. Not you.
20 A ¶ She picks up a tile, turns it over, and sets it face-up on the felt.
* 21 A It's blank.
22 A She waits.
23 A ¶ Father Pascal reaches into his coat.
24 A Every head swivels.
25 A He draws out a rosary and kisses it.
* 26 A ¶ The tiles click again.

### SCENE s00959 | INT. BOTANICAL CONSERVATORY, AFTER CLOSING - NIGHT
Detected names (may be incomplete or contain aliases): PROFESSOR HENRIETTA VAN DER MEULEN-ASANTE, IGNATIUS BELLAMY-OJO, DOT, KWESI-PEMBERTON, SUMNER HALE-ABIOLA, CELESTINE OYELOWO-STRAND
* 1 A ¶ A cathedral of glass and iron.
* 2 A Palms rise into the dark like columns.
* 3 A Condensation drips from the vaulted panes.
* 4 A A path of wet slate winds between orchid beds, and a single lamp near the fountain draws a small circle of gold in the green gloom.
5 A ¶ Five people stand in the circle, looking at the water.
6 A ¶ PROFESSOR HENRIETTA VAN DER MEULEN-ASANTE (60s) holds a clipboard against her chest like a shield.
7 A Beside her, DR. IGNATIUS BELLAMY-OJO (50s) polishes his spectacles on his tie.
8 A DOROTHEA "DOT" KWESI-PEMBERTON (30s, gardener's overalls) stands with her arms folded.
9 A Across the fountain, SUMNER HALE-ABIOLA (40s, security uniform, flashlight) shifts his weight.
10 A And at the edge of the light, the youngest, CELESTINE OYELOWO-STRAND (20s, a notebook against her hip), is writing.
11 D HENRIETTA: Someone moved the orchid.
12 D DOT: It's not an orchid, Professor. It's a hybrid.
13 D HENRIETTA: Dorothea, I do not need a lecture.
14 D IGNATIUS: Henrietta, please. We're all tired.
15 D SUMNER: I locked the east door at nine.
16 D CELESTINE (not looking up): And the west?
17 D SUMNER: West too.
18 D HENRIETTA: Then how did it leave the building?
19 D DOT: It didn't.
* 20 A ¶ Silence.
* 21 A A drop falls from the glass into the fountain.
* 22 A Ripples spread.
23 D IGNATIUS: Dorothea, what do you mean?
24 D DOT: I mean it's still here.
25 A ¶ She points.
* 26 A At the base of the tallest palm, in the shadow beyond the lamp, something small and pale lies in the soil.
* 27 A The roots of the palm have curled around it like a fist.
28 D SUMNER (whispering): That's impossible.
29 D CELESTINE (finally looking up): It's not impossible. It's what it does.
30 D HENRIETTA: Celestine?
31 D CELESTINE: It's a hunter. It leaves, then it comes back for what it wants.
32 A ¶ Dot unfolds her arms.
33 A Ignatius puts on his spectacles.
34 A Sumner raises the flashlight, and its beam swings across the glass, across the palms, and settles on the pale thing at the roots.
* 35 A ¶ It is a human hand.

### SCENE s00960 | EXT. ICE-LOCKED LIFEBOAT, ARCTIC FLOE - DAWN
Detected names (may be incomplete or contain aliases): CAPTAIN BRYNHILD OLSEN-ADESANYA, FIRST MATE HIRAM DELACROIX-NWOSU, FINA, LARSEN-OKAFOR, TEMPERANCE BRIGGS-MOHAMMED
* 1 A ¶ A battered orange lifeboat frozen into a plain of pack ice.
* 2 A White sky.
* 3 A White ground.
* 4 A The only color: the boat, four parkas, and a thin line of red blood on the ice.
5 A ¶ CAPTAIN BRYNHILD OLSEN-ADESANYA (50s, frost in her eyebrows, a compass on a lanyard) crouches at the stern, rationing biscuits.
6 A Across from her, FIRST MATE HIRAM DELACROIX-NWOSU (40s, one glove missing) sits staring at his bare hand.
7 A At the bow, COOK YOSEFINA "FINA" LARSEN-OKAFOR (30s) feeds a tin stove with the last of the splinters.
8 A And curled in the bottom of the boat, wrapped in a tarp, lies deckhand TEMPERANCE BRIGGS-MOHAMMED (20s), breathing shallowly.
9 D BRYNHILD: Nine biscuits. Four of us.
10 D FINA: Two and a quarter each.
11 D BRYNHILD: Two each. The quarter goes to Temperance.
12 D HIRAM: She won't eat it.
13 D BRYNHILD: She will.
14 A ¶ Temperance stirs.
15 A Her eyelids flutter.
16 D TEMPERANCE (hoarse): Is it morning?
17 D FINA: It's morning.
18 D TEMPERANCE: Is it warm?
19 D FINA (gently): No, love.
* 20 A ¶ A silence.
* 21 A The stove ticks.
* 22 A The wind picks up, sliding a ribbon of snow across the floe.
23 A ¶ Hiram's head lifts.
24 A He cocks it, listening.
25 D HIRAM: Do you hear that?
26 D BRYNHILD: Hear what?
27 D HIRAM: An engine.
28 A ¶ They all go still.
* 29 A Far off, a faint drone.
30 A Fina laughs, one cracked note.
31 D FINA: It's the wind.
32 D HIRAM: It's an engine, Fina.
33 A ¶ Brynhild stands, shading her eyes.
* 34 A A dark speck on the horizon, growing.
35 A Temperance grips the tarp.
* 36 A Then the speck resolves into a long gray shape with a red cross on its flank, and the drone swells into the unmistakable thrum of a rescue helicopter.
37 A ¶ Nobody cheers.
38 A Nobody moves.
39 A Then Hiram begins to weep, and Fina puts her arm around him, and Brynhild picks up the flare gun with a hand that will not stop shaking.

### SCENE s00961 | INT. MARS TRANSIT STATION, MAINTENANCE BAY - SOL 412
Detected names (may be incomplete or contain aliases): TECH ADAEZE CHUKWUDI-VANCE, CASIMIR NAKASHIMA-BRIGGS, SURVEYOR, COLIN, ORBITER
* 1 A ¶ A low gray room lit by rack lights.
* 2 A A rover on a cradle, its wheel hub stripped.
* 3 A Tools laid out on a magnetic table.
* 4 A Dust on every surface, the red fine-grained dust that gets everywhere.
5 A ¶ TECH ADAEZE CHUKWUDI-VANCE (30s) is on her back under the rover.
6 A Her boots stick out.
7 A Across the bay, DR. CASIMIR NAKASHIMA-BRIGGS (50s) taps at a console.
8 A ¶ A stranger stands in the airlock hatch: a man in a dusty suit, helmet under one arm, a clipboard in his other hand.
9 D ADAEZE (from under the rover): Cas, hand me the 10-mil.
10 D CASIMIR: Which one's the 10?
11 D ADAEZE: The one that isn't the 12.
12 A ¶ The stranger steps forward.
13 D SURVEYOR: Excuse me. I'm looking for the station supervisor.
14 A ¶ Adaeze rolls out.
15 A Casimir turns.
16 D CASIMIR: That would be me. And you are?
17 D SURVEYOR: Colin Maddox-Reyes. Surveyor, Earth Authority.
18 D ADAEZE: Surveyor, huh? You came a long way for a clipboard.
19 D COLIN (smiling): It's a good clipboard.
* 20 A ¶ The intercom crackles.
21 D ORBITER [V.O.] (over intercom): Station, Orbiter. We've got an inbound dust front. Thirty minutes.
22 D CASIMIR: Copy, Orbiter.
23 D ADAEZE: Colin, you picked a lovely day.
24 D COLIN: Just my luck, Adaeze.
25 D ADAEZE (squinting): I didn't tell you my name.
26 A ¶ Colin's smile does not change.
* 27 A The clipboard clatters to the floor.
28 A His other hand comes up holding a very small, very precise pistol.

### SCENE s00962 | EXT. CATTLE GRID BRIDGE OVER DRY RIVERBED - DAWN
Detected names (may be incomplete or contain aliases): MARSHAL AMBROSE DRUMMOND-ASANTE, GUSSIE, RAINWATER-OKORO, DEPUTY PRUDENCE LOCKHART-ADEBOYE
* 1 A ¶ A rickety wooden bridge spanning a dry wash.
* 2 A A single telegraph pole leans beside it, wires humming.
* 3 A The sun is a pale coin over the mesa.
4 A ¶ MARSHAL AMBROSE DRUMMOND-ASANTE (50s) stands at the center of the bridge with his rifle slung.
5 A He watches the horizon.
6 A Fifteen yards behind him, a woman in a worn blue dress sits on a crate, her wrists bound in front of her: AUGUSTINA "GUSSIE" RAINWATER-OKORO (30s).
7 A Neither of them speaks.
* 8 A ¶ The telegraph key clatters on the pole's receiver box, a small brass box bolted to the wood.
9 A Ambrose crosses to it, listens, and writes in a notebook.
10 D AMBROSE [V.O.] (reading the wire): Marshal Drummond. Judge arrives Thursday. Hold prisoner at bridge. Stop.
11 D AMBROSE (to himself): Thursday. It's Monday.
12 D GUSSIE: Marshal?
13 D AMBROSE: Quiet.
14 D GUSSIE: I'm only asking.
15 D AMBROSE: Ask quietly.
16 A ¶ He tears the page from the notebook and tucks it into his vest.
* 17 A A dust plume rises on the far side of the wash.
18 A A single rider, coming fast.
19 D GUSSIE: Who's that?
20 D AMBROSE: I don't know.
21 A ¶ The rider reins in at the bridge, a woman in a dusty brown duster, her hat pulled low: DEPUTY PRUDENCE LOCKHART-ADEBOYE (30s).
22 A She dismounts and approaches, hands visible.
23 D PRUDENCE: Marshal. Sorry I'm late.
24 D AMBROSE: You're not late. You're not expected.
25 D PRUDENCE: Judge Hollis sent me. He wants her at the courthouse by noon.
26 D AMBROSE: The wire says Thursday.
27 D PRUDENCE: Wire's wrong.
28 A ¶ Gussie looks from one to the other, her face unreadable.
* 29 A The wires hum.
30 D AMBROSE: Show me the order.
31 A ¶ Prudence hands over a folded paper.
32 A He reads, nods slowly, and lets out a breath.
33 D AMBROSE [CONT'D]: Judge's hand. All right.
34 A ¶ He unties Gussie's wrists himself.
35 A She rubs them, flexing her fingers.
36 D GUSSIE: I told you I'd be no trouble.
37 D AMBROSE: You've been trouble since Sunday.
38 A ¶ She smiles, almost.
39 A Prudence leads the horses forward and the three of them start across the bridge.

### SCENE s00963 | EXT. TREETOP MARKET, CANOPY OF THE WHISPERING WOOD - NOON
Detected names (may be incomplete or contain aliases): QUILLON FERNWHISTLE, BRAMBLE OAKENSHIELD-DIOP, TILLY WREN-ABAYOMI
* 1 A ¶ Rope bridges.
* 2 A Hanging stalls.
* 3 A Lanterns strung between giant branches.
* 4 A The market floats above the forest floor in green light.
5 A ¶ QUILLON FERNWHISTLE (any age, mossy beard, one ear pointed) hawks charms from a swaying stall.
6 D QUILLON: Lucky bones! Lucky bones!
7 A ¶ BRAMBLE OAKENSHIELD-DIOP (30s, scarred forearm, an enormous axe on her back) pushes through the crowd, scanning every stall.
8 A ¶ TILLY WREN-ABAYOMI (10, bare feet, a satchel too big for her) hops beside her, eating a honeyed fig.
9 D BRAMBLE: Stay close, Tilly.
10 D TILLY: I am close.
11 D BRAMBLE: Closer.
12 D QUILLON: Warrior-lady! Lucky bones for the child?
13 D BRAMBLE: No.
14 D QUILLON: Protection charms, then. Very cheap.
15 D BRAMBLE: I said no.
16 A ¶ Tilly tugs Bramble's sleeve.
17 A She points.
18 A At the far end of the bridge, a tall figure in a hooded cloak has stopped dead among the shoppers, looking directly at them.
19 D TILLY: Bramble.
20 D BRAMBLE: I see him.
21 D QUILLON (suddenly pale): You'll want those bones after all.
22 A ¶ The figure raises his head.
23 A Beneath the hood, no face: only a smooth plane of dark bark.
24 D BRAMBLE: Run.
25 A ¶ They bolt.
26 A The crowd parts.
27 A Behind them the hooded figure walks, calmly, as the ropes of the bridge begin to creak, then snap, one by one.
28 D TILLY (laughing, terrified): Bramble, he's chasing us!
29 D BRAMBLE: I noticed!
30 A ¶ Quillon grabs a lantern, a bundle of bones, and scrambles up the nearest branch.
* 31 A The bridge drops.
32 A Bramble leaps, catches a rope, hauls Tilly up beside her, and swings them both onto a platform of woven vines.
33 A ¶ They land in a heap, gasping, safe.
34 A Below, the hooded figure stands at the broken end of the bridge, looking up.
35 A Then it turns and walks away through empty air, and the forest swallows it.
36 D TILLY: Do you think he'll come back?
37 D BRAMBLE: Everything comes back.
38 D QUILLON (from above): Lucky bones, anyone?

### SCENE s00964 | INT. CAFE ON A BRIDGE, PARIS - RAINY AFTERNOON
Detected names (may be incomplete or contain aliases): CELINE ARCHAMBEAU-DIALLO, MONSIEUR FERNAND LAGRANGE-OBI, ISAAC BERGMAN-NWANKWO
* 1 A ¶ A narrow glass cafe built into the span of a stone bridge.
* 2 A Steamed windows.
* 3 A The river slides past below, brown and slow.
* 4 A Six small tables, a zinc counter, a cracked espresso machine.
5 A ¶ CELINE ARCHAMBEAU-DIALLO (30s, red scarf, damp hair) sits at the corner table with a book she is not reading.
* 6 A Her coffee has gone cold.
7 A ¶ At the counter, the owner, MONSIEUR FERNAND LAGRANGE-OBI (60s, white apron, forearms like cables), wipes the same glass for the fifth time.
* 8 A ¶ The bell above the door chimes.
9 A In steps ISAAC BERGMAN-NWANKWO (30s, battered trench coat, a violin case in one hand, rain running off the brim of his hat).
10 A ¶ Celine looks up.
11 A Looks down.
12 A Turns a page.
13 A ¶ Isaac stops.
14 A Takes off his hat.
15 A Holds it in both hands.
16 D FERNAND: Monsieur?
17 D ISAAC: Just a coffee.
18 D FERNAND: Sit anywhere.
19 A ¶ Isaac looks at the corner table.
* 20 A The one empty chair across from Celine.
21 A He sits at the next table over instead.
22 A Sets the violin case on his lap.
* 23 A ¶ The silence has weight.
24 A Fernand brings the coffee.
25 A He sets it down, pauses, glances at Celine, then at Isaac, and retreats behind the counter with the expression of a man who has seen this before.
26 A ¶ Celine turns another page without reading it.
27 A Isaac stirs his coffee for a very long time.
* 28 A Neither of them has added sugar.
29 D ISAAC [CONT'D] (not looking): You cut your hair.
30 D CELINE (not looking): You grew a beard.
31 D ISAAC: It's raining.
32 D CELINE: I noticed.
33 A ¶ His hand rests on the violin case.
34 A Her thumb traces the edge of a page.
35 A Fernand polishes the glass again.
36 D CELINE [CONT'D]: Is it still in tune?
37 D ISAAC: Why?
38 D CELINE: Just asking.
39 A ¶ He opens the case.
40 A Lifts the violin.
41 A Tucks it under his chin.
42 A Draws the bow across a single string, long and low, and the sound fills the narrow cafe, and Celine closes her book.

### SCENE s00965 | INT. PAWNSHOP BACK OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): BUNNY, OKAFOR-STANWYCK, DELIA VOSS-MBEKI, GUS, PELLEGRINI-ADE
* 1 A ¶ Fluorescent tube.
* 2 A A steel desk.
* 3 A Shelves of watches, guitars, wedding rings in velvet trays.
* 4 A A safe the size of a refrigerator, door ajar.
5 A ¶ BERNICE "BUNNY" OKAFOR-STANWYCK (50s) counts cash into stacks, reading glasses on her nose.
6 A Her partner, DELIA VOSS-MBEKI (40s), leans on the desk eating an orange.
7 A A boy of twenty, AUGUSTUS "GUS" PELLEGRINI-ADE, sits on a stool by the door, one knee bouncing.
8 D BUNNY: Fifteen thousand. All there.
9 D DELIA: Told you.
10 D GUS: Can I go now?
11 D BUNNY: You're not going anywhere.
12 D GUS: You said, once the count --
13 D DELIA: Gus, honey. Sit.
14 A ¶ He sits.
15 A He was sitting.
16 A He sits harder.
17 D BUNNY (counting): Sixteen. Seventeen.
18 D DELIA: You nervous, Gus?
19 D GUS: No.
20 D DELIA: You look nervous.
21 D GUS: It's a pawnshop. I'm fine.
22 A ¶ She smiles at him.
23 A Peels the orange, a long unbroken spiral.
24 A Hands him a segment.
25 A He takes it and does not eat it.
26 D BUNNY: Eighteen. Nineteen.
* 27 A ¶ The shop bell rings out front.
28 A All three freeze.
29 D DELIA (quietly): We're closed.
* 30 A ¶ Through the wall, a truck door slams.
31 A Gus goes white.
32 D GUS (whispering): That's my dad's truck.
33 D BUNNY: You told us he was in Phoenix.
34 D GUS (whispering): He was!
35 D DELIA: Bunny.
36 D BUNNY: I know.
37 A ¶ Bunny rises and, slowly, takes a small revolver from the drawer.
38 A Delia sets the orange peel on the desk.
* 39 A The shop bell rings again.

### SCENE s00966 | INT. BOOTH OF AN ABANDONED RADIO STATION - NIGHT
Detected names (may be incomplete or contain aliases): HORATIA KESSELRING-OLUMIDE
* 1 A ¶ Dust.
* 2 A Dead tubes.
* 3 A A single working microphone on a bent boom arm, a red ON AIR light that flickers when it feels like it.
4 A HORATIA KESSELRING-OLUMIDE (60s), a retired host with a voice like warm gravel, sits at the console in a green velvet jacket.
5 D HORATIA: Good evening, listeners. If there are any of you left.
6 A ¶ This is Horatia Kesselring, and this is the last broadcast of Midnight Confessional.
7 A Tonight, we confess one thing.
8 A Just one.
* 9 A ¶ (beat)
10 A ¶ Thirty-one years ago, a young man called this station from a phone booth on Delaney Street.
11 A He said he had done something terrible.
12 A He said he needed to tell somebody.
13 A And I, in my infinite wisdom, said, "Call back tomorrow, honey.
14 A We're out of time."
15 A ¶ He never called back.
* 16 A The next morning, police found a body on Delaney Street.
* 17 A A girl.
* 18 A Her name was Marian Pruitt.
* 19 A ¶ (beat)
20 A ¶ I kept the tape.
21 A Every call, every night, thirty-one years.
22 A I have never played this one for anyone.
23 A Tonight I will.
24 A ¶ She presses a key on the console.
* 25 A Tape hiss.
26 D HORATIA [V.O.] (recorded, thirty-one years ago): Midnight Confessional, you're on the air.
27 D HORATIA: Listen. That's me, at thirty. So bright. So certain.
28 D HORATIA [V.O.] (recorded, thirty-one years ago): Go ahead, caller. You're among friends.
29 D HORATIA: He doesn't speak, you see. The tape is nineteen seconds of breathing. Nineteen. I counted them every night for thirty-one years.
* 30 A ¶ (beat)
31 A ¶ So I'll say what I should have said.
32 A I'm sorry, Marian.
33 A I'm sorry, whoever you were.
34 A I should have stayed on the line.
* 35 A ¶ (beat)
36 A ¶ This has been Horatia Kesselring.
37 A Good night, Delaney Street.

### SCENE s00967 | EXT. THE LAST BRIDGE OF STARLIGHT, CLOUD CROSSING - TWILIGHT
Detected names (may be incomplete or contain aliases): WARDEN ISAURA MENDELSSOHN-OKAFOR, SIR BALTHAZAR OYELARAN-STIRLING, FENELLA CROSSLEY-AKINTOLA
* 1 A ¶ A bridge of braided silver woven across a gulf of clouds.
* 2 A Far below, a sea of mist rolls over unseen mountains.
* 3 A Above, the first stars wink into a violet sky.
4 A At the midpoint of the span stands a gate of white stone, and before the gate waits a figure in a robe the color of fog.
5 A ¶ WARDEN ISAURA MENDELSSOHN-OKAFOR (ageless, silver hair to her waist) rests both hands on a staff of pale wood.
6 A She does not move, though the wind tugs at her robe.
7 A ¶ Two travelers approach along the bridge from the west: SIR BALTHAZAR OYELARAN-STIRLING (50s, battered plate armor, a laugh lurking behind a grim mouth), who limps, and a young mage, FENELLA CROSSLEY-AKINTOLA (20s, ink-stained sleeves, a spellbook the size of a paving stone), who walks backward half the time to check on him.
8 A They stop ten paces from the gate.
9 D ISAURA: Travelers. State your purpose.
10 D BALTHAZAR: We seek passage to the east, Warden.
11 D FENELLA (over him): Not passage, exactly, it's more of a delivery --
12 D BALTHAZAR: Fenella --
13 D FENELLA: -- we have a message for the Moon Queen, you see, it's rather urgent --
14 D ISAURA: The Queen receives no messages.
15 D FENELLA: Not even this one?
16 D BALTHAZAR: Especially this one.
17 D FENELLA (whispering, to Balthazar): You're not helping.
18 D BALTHAZAR (whispering back): I'm helping a great deal.
19 A ¶ Isaura taps her staff once on the silver.
* 20 A A clear note rings out across the gulf.
* 21 A The clouds below shiver, the stars overhead pulse, and the gate swings inward a hand's breadth before stopping.
22 D ISAURA: Three questions. Answer truly, and the gate opens. Answer falsely, and the bridge forgets you.
23 D FENELLA (swallowing): Forgets us?
24 D BALTHAZAR: It means we fall.
25 D FENELLA: I know what it means!
26 D ISAURA: First question. What do you carry?
27 D BALTHAZAR (simply): A letter and a debt.
28 D FENELLA (at the same time): A spellbook and an apology.
29 D ISAURA: Second question. Whom do you fear?
30 D FENELLA: The Queen.
31 D BALTHAZAR: Myself.
32 A ¶ Isaura's face does not change.
33 A But the staff trembles in her grip, ever so slightly.
34 D ISAURA: Third question. What do you hope for?
35 A ¶ Balthazar looks at Fenella.
36 A Fenella looks at Balthazar.
* 37 A A long silence stretches across the bridge, long enough for the first moon to rise, a pale silver coin over the clouds.
38 D BALTHAZAR: That she reads it.
39 D FENELLA: That she forgives it.
* 40 A ¶ The gate opens fully.
41 A Isaura steps aside and bows her head, and the three of them stand in the starlight, the only people in the world.
42 D ISAURA: Pass, then. And be kind to her.

### SCENE s00968 | INT. LOCKER ROOM, COMMUNITY COLLEGE GYM - 5:40 A.M.
Detected names (may be incomplete or contain aliases): DESHAWN PRITCHARD-AMADI
* 1 A ¶ Gray light through frosted windows.
* 2 A Rows of dented lockers.
* 3 A A bench bolted to the floor.
* 4 A A shower drips somewhere, patient as a metronome.
5 A ¶ DESHAWN PRITCHARD-AMADI (20s, lean, wrapped in a towel, hands taped to the wrist) sits on the bench, staring at his own feet.
* 6 A A gym bag rests between his ankles.
* 7 A A cheap phone sits on his knee.
8 A ¶ He picks it up.
9 A Puts it down.
* 10 A ¶ The PA system clicks overhead.
11 D DESHAWN [V.O.] (recorded, over PA): All fighters report to the ring in fifteen minutes. All fighters, fifteen minutes.
12 A ¶ He winces.
13 A Stops.
14 A Realizes his own recorded voice is the one on the PA, the one he left for the gym's morning announcements.
15 A He lets out a short laugh.
16 D DESHAWN: Fifteen minutes.
17 A ¶ He flexes his fingers inside the tape.
18 A Stands.
19 A Rolls his neck until it pops.
20 D DESHAWN [CONT'D] (to himself): Not scared. Not scared.
21 A ¶ He opens the locker, takes out a pair of worn red gloves, and holds them up to the light as if they might tell him something.
* 22 A They don't.
* 23 A ¶ The shower drips.
24 A He slides the gloves on.
25 A Taps them together once, twice.
26 D DESHAWN [CONT'D] (louder): Okay. Okay.
27 A ¶ He walks to the mirror, looks himself in the eye, and does not look away.
28 D DESHAWN [CONT'D]: Let's go.
* 29 A ¶ The PA clicks again.
* 30 A His own voice returns, patient, indifferent.
31 D DESHAWN [V.O.] (recorded, over PA): All fighters report to the ring.
32 A ¶ He opens the door.
* 33 A The sound of a distant crowd rolls in like surf.

### SCENE s00969 | INT. SCHOOL BUS DEPOT, MAINTENANCE PIT - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): CLAY, WREN ABERNETHY-OKORO
* 1 A ¶ Oil, rust, the bones of old buses.
* 2 A Fluorescent bars hum overhead.
* 3 A Work lights hang from a rolling cart.
4 A ¶ CLARENCE "CLAY" ABERNETHY-OKORO (50s, coveralls, a pencil behind each ear) lies on a creeper beneath a bus, wrenching at something unseen.
* 5 A A radio on the floor plays low country.
* 6 A ¶ Footsteps on concrete.
* 7 A Sneakers.
8 A A teenage girl hovers at the edge of the pit, backpack on one shoulder, staring down.
9 D CLAY (from under the bus): Is that you, Wren?
10 A ¶ The girl is WREN ABERNETHY-OKORO (16, hair in a messy braid, headphones around her neck).
11 A She sits at the edge of the pit, feet dangling.
12 D WREN: Hi, Dad.
13 D CLAY: You're early.
14 D WREN: I walked.
15 D CLAY: It's four miles.
16 D WREN: I know how far it is.
* 17 A ¶ A wrench clanks.
18 A Clay rolls out on the creeper, wiping his hands on a rag, and looks up at his daughter.
19 A His face softens, then tightens as he sees hers.
20 D CLAY: What happened?
21 D WREN: Nothing.
22 D CLAY: Wren.
23 D WREN: I quit the team.
24 A ¶ He sits up slowly.
* 25 A The radio sings about a dog and a truck.
26 D CLAY: Okay.
27 D WREN: Aren't you going to yell?
28 D CLAY: Do you want me to?
29 D WREN: Kind of.
30 D CLAY: Then I will. (beat) Wren Abernethy!
31 D WREN (smiling despite herself): That's not yelling.
32 D CLAY: I'm out of practice.
33 A ¶ She slides down into the pit and sits on the creeper next to him.
34 A He hands her a wrench.
35 A She turns it over in her hands.
36 D WREN: Dad? I'm okay, you know.
37 D CLAY: I know, kiddo.
38 D WREN: Can I help?
39 D CLAY: Hold the light.

### SCENE s00970 | INT. DROWNED CATHEDRAL BELFRY - TIDE HOUR
Detected names (may be incomplete or contain aliases): ORSOLYA, KEZIAH
* 1 A ¶ Green water laps the third stair.
* 2 A Moonlight through broken tracery.
* 3 A One huge bell, furred with barnacles.
4 A ¶ ORSOLYA (30s, salt-white braid, bone-needle at her belt) crouches on a beam.
5 A Soaked.
6 A Grinning.
7 A ¶ KEZIAH (20s, half-fox ears, patched coat) hauls himself through the window.
* 8 A Drips everywhere.
9 D ORSOLYA: You're late, Kez.
10 D KEZIAH: The tide was early.
11 D ORSOLYA: The tide is never early. You were.
12 A ¶ He lifts a lantern.
* 13 A Inside, a trapped blue flame.
14 D KEZIAH: Got it. Moon-ember. Off the sleeping tax-collector himself.
15 A ¶ She snatches it.
16 A Laughs.
17 A Kisses his forehead.
18 D ORSOLYA: Kezi. You beautiful thief.
* 19 A ¶ The bell hums.
* 20 A Low.
* 21 A Wrong.
22 D KEZIAH: Orsolya. That's not us.
23 A ¶ She freezes.
24 A So does he.
* 25 A ¶ Water rises.
* 26 A Fast.
* 27 A Knee-deep.
* 28 A Waist.
29 D ORSOLYA: Take the rope.
30 D KEZIAH: Not without you!
31 A ¶ She shoves him.
32 A Hard.
33 A He grabs the bell-rope, swings, slams against stone.
34 A Hisses.
35 D ORSOLYA: Ring it!
36 D KEZIAH: It'll wake the whole drowned choir!
37 D ORSOLYA: Better them than the tide!
38 A ¶ He hesitates.
39 A Then pulls.
* 40 A ¶ DONG.
* 41 A The sound rolls out like thunder under glass.
* 42 A The water stops.
* 43 A Shivers.
* 44 A Retreats.
* 45 A ¶ Silence.
46 A They stare at each other.
47 A Then both burst out laughing.
48 D KEZIAH: Never again.
49 D ORSOLYA: Liar.
50 A ¶ Somewhere below, a choir begins to sing.
* 51 A Off-key.
* 52 A Furious.
53 A ¶ She grabs his hand.
54 A They run.

### SCENE s00971 | INT. HOLLOWED ASTEROID ORCHARD - SHIFT NIGHT
Detected names (may be incomplete or contain aliases): TAVITA, NELL, ISAAK, MEI-LIN, OSEI
* 1 A ¶ A cavern of rock lit by amber grow-lamps.
* 2 A Rows of dwarf apple trees bolted to drifting soil trays.
* 3 A Pollen-drones hum like tired insects.
4 A ¶ TAVITA (50s, broad, vacuum-scarred hands) stands at a control stump.
5 A NELL (20s, sharp, ink-stained fingers) clutches a tablet.
6 A ISAAK (60s, wiry, one cloudy eye) leans on a ladder.
7 A MEI-LIN (30s, braided cables in her hair) hovers upside down.
8 A OSEI (teen, oversized pressure jacket) grips a pruning rod.
9 D TAVITA: Hull pressure's dropping in the north orchard. Everyone stays calm.
10 D NELL: Calm is a luxury. The seal's gone, Tavita. I can hear it.
11 D ISAAK: Then shut the bulkhead. Trees can bloom again.
12 D MEI-LIN: Not if we're on the wrong side of it. Osei's still holding row nine.
13 D OSEI: I can let go. I can run.
14 D TAVITA: You'll run when I say run.
15 D NELL: Forty seconds of air at that leak rate. Maybe thirty.
16 D ISAAK: Then thirty is what we use. Mei-Lin, drones to the breach. Nell, patch kit. Osei, row nine, now.
17 D MEI-LIN: Drones are going. They won't hold it.
18 D TAVITA: They don't have to hold it. They only have to buy us the walk.

### SCENE s00972 | INT. FERRY CAFETERIA - NIGHT CROSSING
Detected names (may be incomplete or contain aliases): DOLORES, PAZ, HENRIK
* 1 A ¶ Orange plastic booths.
* 2 A A coffee urn rattles with the engine.
* 3 A Rain on the windows.
* 4 A Nobody else aboard.
5 A ¶ DOLORES (60s, black cardigan, rosary wound around her wrist) sits stiff.
6 A Across from her, PAZ (40s, leather jacket, same jaw) peels a label off a water bottle.
7 A ¶ HENRIK (50s, rumpled suit, folder under his arm) arrives with two paper cups.
8 A Sets one down.
9 A Hesitates.
10 A Sets the other down too.
11 A ¶ She doesn't touch hers.
12 A She watches her sister.
13 D HENRIK: Your mother's will is short.
14 D DOLORES: Mine, she says. My mother. Not yours.
15 A ¶ Paz stops peeling.
16 A She looks up.
17 D PAZ: Our mother.
18 A ¶ She slides the label across the table.
* 19 A A small, damp scrap.
20 D HENRIK: It leaves the house to one of you.
21 A ¶ She laughs.
22 A Short.
23 A Ugly.
24 A The other stays silent.
25 D DOLORES: Which one.
26 D HENRIK: The one who stayed.
27 A ¶ Paz stands.
28 A Sits again.
29 A Her knee bounces under the table.
30 D PAZ: Twenty years she called me every Sunday.
31 D DOLORES: And I washed her every morning.
32 A ¶ She slams a palm on the Formica.
* 33 A The urn rattles louder.
34 A Henrik flinches, opens the folder, closes it.
35 D HENRIK: There's a letter. She asked me to read it only if you both were present.
36 D DOLORES: Read it, then.
37 A ¶ He unfolds the page.
38 A Clears his throat.
39 A Her eyes are already wet.
40 A The other's are not.
41 D HENRIK (reading): "Neither of you gets the house."
* 42 A ¶ Silence.
* 43 A The ferry horn sounds, long and low.
44 A ¶ She reaches for the cup.
45 A Her hands shake.
46 A Paz takes the other cup, drinks, and nods once at the window.
47 D PAZ: She never could make a decision.
48 D DOLORES: She made this one.

### SCENE s00973 | INT. GLASS-FOREST APIARY TOWER - DUSK
Detected names (may be incomplete or contain aliases): WYNFRED, SABLE, LUCAN
* 1 A ¶ Hexagonal windows hum with ten thousand bees.
2 A WYNFRED, an old beekeeper in a veil of moth silk, pours smoke into a brass censer.
3 A SABLE, a young storm-witch with wet hair, sits on the hive-table.
4 A LUCAN, a knight with a cracked pauldron, stands by the stairs.
5 D WYNFRED: You came a long way for honey.
6 D LUCAN: I came for the queen.
7 D SABLE: He means the hive's queen. Not the crown.
8 D WYNFRED: Does he?
9 D LUCAN: I mean what I said.
10 D SABLE: You mean what you were told to say.
11 D LUCAN: The king is dying.
12 D WYNFRED: Kings do.
13 D LUCAN: His physician says only royal jelly can hold the fever.
14 D SABLE: And the physician is lying.
15 D LUCAN: You don't know that.
16 D SABLE: I know the smell of a man who wants a hive burned.
17 D WYNFRED: Quiet, child. Let him say it.
18 D LUCAN: I was told to take the queen. Alive if she'd come. Dead if not.
19 D WYNFRED: And you believed it.
20 D LUCAN: I believed the king.
21 D SABLE: The king hasn't spoken in a month.
22 D LUCAN: Then who sent me?
23 D WYNFRED: Ask the hive.
* 24 A ¶ The humming deepens.
25 A Wynfred sets down the censer.
26 D LUCAN: I won't kill a queen of bees.
27 D SABLE: Then what will you do?
28 D LUCAN: I'll warn the king.
29 D WYNFRED: He can't hear you.
30 D LUCAN (shouting): Then I'll make the palace hear!
31 D SABLE: Then I will!
32 D LUCAN: Then I will!
33 D WYNFRED: Both of you, stop.
34 D LUCAN: He is my king.
35 D SABLE: And this is my home.
36 D WYNFRED: Then go together. Fire answers fire. Bees answer storm.

### SCENE s00974 | INT. PARKING GARAGE STAIRWELL - NIGHT
Detected names (may be incomplete or contain aliases): LOTTE VANTERPOOL
* 1 A ¶ Concrete.
* 2 A Flickering tube light.
* 3 A A door slams two floors below.
4 A ¶ LOTTE VANTERPOOL (30s, trench coat, press badge) freezes mid-step.
5 A Phone in hand.
* 6 A ¶ Footsteps.
* 7 A Climbing.
* 8 A Fast.
9 A ¶ She jabs the screen.
* 10 A Voice memo.
11 D LOTTE [V.O.] (recording, calm): If you hear this, I'm already in the stairwell of Level B. The ledger is in the glovebox of the grey Fiat.
12 A ¶ She kills it.
13 A Backs up.
14 A Hits the rail.
15 A Whispers.
16 D LOTTE: Come on, come on.
* 17 A ¶ The footsteps stop.
* 18 A Right below her.
* 19 A Waiting.
20 A ¶ She doesn't breathe.
* 21 A A key jingles.
22 A Then a little girl's laugh echoes up.
23 A A father's voice, humming.
24 A ¶ They pass.
* 25 A Door opens.
* 26 A Closes.
* 27 A Gone.
28 A ¶ Lotte slides down the wall.
29 A Laughs.
30 A Wipes her eyes.
31 D LOTTE [CONT'D]: Idiot.
32 A ¶ She replays the memo.
33 A Deletes it.
34 A Stands.
35 A Walks on.

### SCENE s00975 | INT. ROLLER RINK - AFTER CLOSING
Detected names (may be incomplete or contain aliases): DEZ, MARISOL, TOBY
* 1 A ¶ Disco ball still turning.
* 2 A Chairs up on tables.
* 3 A Carpet-covered walls.
4 A ¶ DEZ (16) sits on the skate counter in one rental skate.
5 A He holds the other.
6 A MARISOL (16) leans on the rail, arms crossed.
7 A TOBY (15) lies flat on the floor, staring at the ceiling.
8 D DEZ: So that's it. Last night.
9 D MARISOL: Dez, the rink is closing. Not you.
10 D TOBY: It's basically you. You were born here.
11 D DEZ: Rink rat. That's what Mr. Pruitt called me.
12 D MARISOL: He called me that too.
13 D TOBY: He called everyone that.
14 D DEZ: My first kiss was by the snack bar.
15 D MARISOL: It was me.
16 D DEZ: It was a hot dog. I was kissing a hot dog.
17 D TOBY: I was there. It was sad.
18 D MARISOL: We'll find somewhere else.
19 D DEZ: There isn't anywhere else.
20 D TOBY: There's the parking lot.
21 D MARISOL: The parking lot has no music.
22 D TOBY: I'll bring a speaker.
23 A ¶ He sits up.
24 A Grins.
25 A She lets her arms drop.
26 D DEZ: Fine. Parking lot. Saturdays.
27 D MARISOL: Saturdays.
28 A ¶ Dez slides the second skate on.
29 A Stands.
30 A Wobbles.
31 A Rolls one slow lap, alone, while the ball keeps turning.

### SCENE s00976 | INT. SYNERGY DEPARTMENT - FORMER FUNERAL HOME - MORNING
Detected names (may be incomplete or contain aliases): PELLINGHAM, GLORIA, SPUD, ADAEZE
* 1 A ¶ Cubicles line the old viewing room.
* 2 A A faux-brass chandelier.
* 3 A A banner reads "WE'RE ALL FAMILY HERE."
* 4 A Coffins serve as supply cabinets.
5 A ¶ MR. PELLINGHAM (50s, bow tie, sweating) stands on a velvet kneeler holding a clipboard.
6 A GLORIA (40s, reading glasses on a chain) sorts paperclips.
7 A SPUD (30s, hoodie) eats cereal from a casket lid.
8 A ADAEZE (20s, headset, razor eyes) types without looking.
9 D MR. PELLINGHAM: People! People! Today we pivot.
10 D GLORIA: We pivoted yesterday, Mr. Pellingham.
11 D SPUD: Twice. Before lunch.
12 D MR. PELLINGHAM: Spud, today we pivot to a pivot.
13 D ADAEZE: Is that a metric?
14 D MR. PELLINGHAM: Adaeze, it's a mindset.
15 D GLORIA: What happened to the mindset?
16 D SPUD: It got laid off.
17 D MR. PELLINGHAM: Nobody got laid off. We are right-sizing the horizon.
18 D ADAEZE: Gloria, did he say horizon?
19 D GLORIA: He said horizon.
20 D MR. PELLINGHAM: I am going to need everyone's quarterly aspirations by noon.
21 D SPUD: Mr. Pellingham, I only have a quarterly nap.
22 D GLORIA: Spud!
23 D ADAEZE: Put it in the shared folder.
24 D MR. PELLINGHAM: Thank you, Adaeze.
25 D SPUD: He thanked her. Mark the calendar.
26 D GLORIA: Mark it. Under "Funeral".
27 A ¶ Mr. Pellingham looks at the banner.
28 A Climbs down.
29 A Sighs.
30 D MR. PELLINGHAM: Friends, let's just have cake.
31 D SPUD: Is it from the last funeral?
32 D MR. PELLINGHAM: It's... lemon.

### SCENE s00977 | INT. LIGHTHOUSE GALLEY - POTLUCK NIGHT
Detected names (may be incomplete or contain aliases): ROSALIND, EDMUND, CHIKA, DMITRI, BEA, AUNT FENELLA
* 1 A ¶ A cramped round kitchen at the base of a lighthouse.
* 2 A Casserole dishes crowd every surface.
* 3 A A foghorn blares every ten seconds.
4 A ¶ ROSALIND (60s, apron, vengeful smile) guards a bundt cake.
5 A EDMUND (60s, golf shirt) carves a ham.
6 A CHIKA (30s, nose ring, crisp linen) pours wine.
7 A DMITRI (40s, ponytail, guitar case) leans on the counter.
8 A BEA (20s, headphones around neck) scrolls her phone.
9 D ROSALIND: I'm only saying that some of us brought homemade.
10 D EDMUND: Rosalind, it's the same casserole you brought to the last four potlucks.
11 D ROSALIND: It's a family recipe.
12 D CHIKA: It's from a can.
13 D DMITRI: Cream of mushroom. I smelled it in the parking lot.
14 D BEA: Aunt Rosalind, are you aware you're yelling?
15 D ROSALIND: I am explaining.
16 D EDMUND: Over the foghorn.
17 D ROSALIND: Because I'm tired of being the villain in this lighthouse!
18 D CHIKA: Nobody said villain.
19 D DMITRI: I said cannibal. The cake looks human.
20 D ROSALIND: It's a bundt!
21 D EDMUND: Honey, put the knife down.
22 D ROSALIND: This is a cake server!
23 D BEA: It's honestly a very sharp cake server.
* 24 A ¶ The door bangs open.
25 A AUNT FENELLA (80s, fur stole, cane held like a spear) sweeps in, trailing mist.
26 A Everyone stops.
27 D AUNT FENELLA: I'm told someone has been slandering my casserole.
28 D ROSALIND: Your casserole?
29 D AUNT FENELLA: Cream of mushroom, 1974. I invented it at this very counter.
30 D EDMUND: Nobody told us that.
31 D CHIKA: Why would anyone tell us that?
32 D DMITRI: Because they're afraid of her.
33 D AUNT FENELLA: Quite right.
34 D BEA: I'm getting cake.
35 D ROSALIND (whispering): Nobody touch the cake.

### SCENE s00978 | EXT. LEVIATHAN BACK MARKET - DAWN
Detected names (may be incomplete or contain aliases): YARROW, CINDERMAE, BRISK, SEUN
* 1 A ¶ A sleeping sea-beast the size of an island.
* 2 A Stalls on its spine.
* 3 A Rigging lashed to ribs.
* 4 A The skin breathes slowly.
5 A ¶ YARROW (20s, sea-glass eyes, ragged oilskin) crouches by a stall of bottled winds.
6 A ¶ CINDERMAE (70s, silver teeth, coal-black shawl) presides behind the counter.
7 A ¶ BRISK (teen, gull on his shoulder) scrambles up a rope ladder.
8 A Out of breath.
9 A ¶ SEUN (40s, copper armor, spear of whalebone) lurks at the edge, watching.
10 D BRISK: Yarrow! They're coming!
11 D YARROW: Who?
12 D BRISK: The tide-wardens!
13 D CINDERMAE: Quiet, boy. You'll wake the beast.
* 14 A ¶ The leviathan's skin ripples.
* 15 A Stalls shudder.
* 16 A Bottles clink.
17 D YARROW: How many?
18 D BRISK: Six. Maybe seven.
19 D SEUN: Eight.
20 A ¶ They turn.
21 A Seun steps forward, spear lowered.
22 D SEUN [CONT'D]: And I am the first.
23 D CINDERMAE: Seun. You were a friend of this market.
24 D SEUN: I was a friend of the market. The sea-king is the market's master.
25 D YARROW: You swore an oath to the wind.
26 D CINDERMAE: She swore an oath to the wind.
27 D YARROW: She swore an oath to the wind.
28 D SEUN: Oaths bend.
29 D BRISK (whispering): The gull says run.
30 A ¶ Seun hurls the spear.
* 31 A It bursts a jar of tempest.
* 32 A Wind howls out.
* 33 A The leviathan groans awake.
* 34 A The whole market tilts.
35 D YARROW: Hold on!
36 A ¶ Everyone grabs rope.

### SCENE s00979 | INT. WAX MUSEUM - AFTER HOURS
Detected names (may be incomplete or contain aliases): INSPECTOR CALLOWAY, MADAME ZELENKA, PERCIVAL, LADY MARGUERITE, TOMMASO
* 1 A ¶ Rows of figures in fading finery.
* 2 A A single lantern.
* 3 A Dust on the Duke of Wellington's boots.
4 A ¶ INSPECTOR CALLOWAY (50s, rumpled overcoat, notebook) stands beside a plinth.
5 A MADAME ZELENKA (60s, turban, jeweled fingers) sits stiffly on a chaise.
6 A PERCIVAL (30s, curator's smock) wrings a handkerchief.
7 A LADY MARGUERITE (40s, widow's veil) holds a fan.
8 A TOMMASO (20s, night guard's cap) fidgets by the door.
9 D CALLOWAY: Let us review. The Duke was found at midnight with his head missing.
10 D PERCIVAL: It is the wax, Inspector. Wax is delicate.
11 D CALLOWAY: It is also not usually missing.
12 D MARGUERITE: I was admiring the Duke at eleven. He was whole.
13 D ZELENKA: I felt a presence. A cold one. It lingered.
14 D TOMMASO: I locked the doors at ten. No one came in.
15 D CALLOWAY: Then no one went out. Which means the head is here.
16 D PERCIVAL: You can't think one of us...
17 D CALLOWAY: I think a head cannot walk. Madame Zelenka, your turban looks heavy.
18 D ZELENKA: It is Persian silk, Inspector.
19 D CALLOWAY: It is lumpy.
20 A ¶ She hesitates.
21 A Unwinds the cloth.
* 22 A Inside, nothing but hair.
23 A She smiles thinly.
24 D MARGUERITE: Inspector, my fan.
25 D CALLOWAY: Lady Marguerite, your veil has stopped moving.
26 A ¶ She stiffens.
27 A Tommaso drops his cap.
28 A Percival laughs, high and tinny.
29 D PERCIVAL: It's under the chaise, I'm afraid. I only meant to repair the nose.

### SCENE s00980 | EXT. SALT FLAT STAGE STATION - NOON
Detected names (may be incomplete or contain aliases): SILAS MORROW, CATALINA VEGA
* 1 A ¶ White ground, white sky.
* 2 A A lone shack.
* 3 A A dead well.
* 4 A Heat shimmer.
5 A ¶ SILAS MORROW (50s, dusty duster, gray stubble) sits on a bench with a rifle across his knees.
6 A CATALINA VEGA (30s, wide hat, twin pistols) stands in the road ten paces away.
7 D CATALINA: You're a long way from Tucson, Silas.
8 D SILAS: I was told you'd be here.
9 D CATALINA: By who?
10 D SILAS: By a man who owed me.
11 D CATALINA: He owed you what?
12 D SILAS: A reason.
13 A ¶ She smiles.
14 A Steps forward.
15 A He doesn't move.
16 D CATALINA: You killed my brother.
17 D SILAS: I did.
18 D CATALINA: Why?
19 D SILAS: He drew first.
20 D CATALINA: He was nineteen.
21 D SILAS: So was I, once.
* 22 A ¶ The wind stops.
23 A Both of them listen.
24 D CATALINA: Stand up.
25 D SILAS: My knees won't allow it.
26 A ¶ She draws one pistol.
27 A He lifts the rifle.
28 A They both freeze, muzzles level.
29 D CATALINA: Last words?
30 D SILAS: Tell the boy's mother I'm sorry.
* 31 A ¶ A gunshot.
32 A Both flinch.
33 A Both dive for cover.
34 A ¶ On the ridge, a distant rider tumbles from a horse.
35 A The two lie in the salt, breathing.
36 A They look at each other.
