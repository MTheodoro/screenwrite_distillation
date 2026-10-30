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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusKT/group_0015.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00285 | INT. DRIVE-IN THEATER PROJECTION BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): DOCTOR MARGUERITE OYELARAN-STACK, PADDY, GALLAGHER-NWOSU, SHERIFF HOLCOMB JABLONSKI, JUNIPER PARK-MBEKI, SAUL, ODETTE ABERNATHY-VOSS, MRS. ABERNATHY
* 1 A ¶ A cramped concrete box above the snack bar.
* 2 A Two projectors, dusty.
* 3 A A shelf of film cans.
* 4 A One small window overlooking a lot of weeds and a blank screen leaning in the dark.
5 A ¶ Six people crowd the booth.
* 6 A Rain drums the roof.
* 7 A A lantern sits on an overturned can, throwing their shadows huge.
8 A ¶ DOCTOR MARGUERITE OYELARAN-STACK (50s, medical bag, cardigan) kneels by a figure lying on the floor under a coat.
9 A ¶ The coat covers the face of PATRICK "PADDY" GALLAGHER-NWOSU (30s, projectionist), who is not moving.
10 A ¶ SHERIFF HOLCOMB JABLONSKI (60s, rain slicker, flashlight) stands at the door, back to the wall, watching the stairs.
11 A ¶ TWO TEENAGERS huddle by the window.
12 A They are JUNIPER PARK-MBEKI (16, letterman jacket) and her brother SAUL (17, headphones around his neck, shaking).
13 A ¶ By the film shelf, an old woman, MRS. ODETTE ABERNATHY-VOSS (70s, shawl, a thermos clutched like a talisman).
14 D MARGUERITE: He's gone.
15 D SAUL: He can't be.
16 D JUNIPER: Saul, don't.
17 D MRS. ABERNATHY: He was fine at the second reel.
18 D HOLCOMB: Everybody quiet.
19 A ¶ They fall quiet.
* 20 A Rain.
* 21 A And below the rain, a slow scrape on the stairs.
* 22 A Something dragging.
23 D SAUL: That's him.
24 D MARGUERITE: He's right there, Saul.
25 D SAUL: Then who's on the stairs?
26 D JUNIPER: Oh God.
27 D MRS. ABERNATHY: Don't say His name. Not in here.
28 D HOLCOMB: Lock the door.
29 D JUNIPER: There's no lock!
30 D SAUL: Use the can! Use a film can!
31 D MARGUERITE: Hold on, hold on, everyone--
32 D HOLCOMB (over her): Get back from the door!
33 D SAUL (over him): It's coming up!
34 D JUNIPER (over both): Saul, shut UP!
35 D MRS. ABERNATHY (over everyone): It wants the projector!
36 A ¶ They all stop.
37 A Look at her.
38 D MRS. ABERNATHY [CONT'D] (quietly): It always wants the projector.
* 39 A ¶ The scrape reaches the top of the stairs.
* 40 A Stops.
* 41 A The lantern flame leans toward the door, as if drawn.
42 D HOLCOMB (muttering): Nothing there. Nothing there.
* 43 A ¶ Something knocks.
* 44 A Three times.
* 45 A Soft.
* 46 A Almost polite.
47 D SAUL: Don't open it.
48 D MARGUERITE: Nobody's opening it.
* 49 A ¶ The door handle turns.
50 D JUNIPER (whispering): It's locked, right? Tell me it's locked.
51 D HOLCOMB: There's no lock, I said!
* 52 A ¶ The door swings in.
* 53 A Empty landing.
* 54 A Wet footprints on the concrete, leading in.
* 55 A ¶ The footprints lead to Paddy's body.
* 56 A ¶ The coat slides slowly off his face.
57 D MARGUERITE (to herself): No pulse. I checked. I checked.
58 A ¶ Paddy's eyes open.
* 59 A White.
* 60 A Wet.
61 A He looks at the projectors.
62 D PADDY (a rasp): Roll it.
* 63 A ¶ Every projector in the booth clatters to life by itself.
* 64 A Light erupts against the blank screen outside, and a figure of the sheriff, thirty feet tall, begins to move across it.
65 A ¶ Holcomb looks over his shoulder at the window.
* 66 A At himself on the screen.
67 A He raises his flashlight.
68 D HOLCOMB (barely): That's not me.
* 69 A ¶ On the screen, the giant Holcomb turns and looks into the booth.

### SCENE s00286 | INT. COLLAPSED PARKING GARAGE, LEVEL P3 - NIGHT
Detected names (may be incomplete or contain aliases): WOMAN, RESCUER, BEATRIX
* 1 A ¶ Dust hangs in the beam of a headlamp.
* 2 A Concrete slab above, a tilted pillar, an overturned sedan with its radio humming.
* 3 A ¶ A WOMAN hunches in the gap between slab and floor.
4 A Fifties, parka, scraped palms.
5 A She is wedged tight and breathing carefully.
6 D WOMAN (to herself): Slow in. Slow out.
* 7 A ¶ The sedan radio crackles.
* 8 A A voice on a rescue frequency.
9 D RESCUER [V.O.]: Hello? Can anyone hear me? This is Ines Calderon, Urban Rescue Team Four.
10 A ¶ The woman lifts her head.
11 D WOMAN: I hear you.
12 D RESCUER [V.O.]: Ma'am, what's your name?
13 D WOMAN: Beatrix. Beatrix Oyelowo-Marsh.
14 D RESCUER [V.O.]: Beatrix, are you hurt?
15 D BEATRIX: Wrist. Maybe rib. I'm stuck, not bleeding.
16 D RESCUER [V.O.]: Good. We're coming. Stay still.
17 D BEATRIX: I'm not going anywhere.
18 A ¶ She almost laughs.
* 19 A Dust sifts down onto her shoulders.
20 A She lowers her head onto her arm and watches the beam of her headlamp tremble on the concrete.

### SCENE s00287 | EXT. RAILROAD WATER TOWER PLATFORM - DAY
Detected names (may be incomplete or contain aliases): WOMAN, ROSIE, HARTWELL-BANDA, ELIJAH TOBIAS CORNWALL, JED, OKONJO, PERALES-WINTERS, CORNELIUS DUNLEAVY-KEITA
* 1 A ¶ A prairie town reduced to a siding, a tank on stilts, and one plank platform baking in the sun.
* 2 A A dog sleeps in the shade of a barrel.
3 A ¶ A WOMAN sits on a crate, shelling peas into a pan.
4 A ROSALIND "ROSIE" HARTWELL-BANDA (40s, calico dress, wide-brimmed hat).
5 A Calm.
6 A Too calm.
7 A ¶ An old man whittles a spoon on the steps.
8 A ELIJAH TOBIAS CORNWALL (70s, white beard, suspenders).
9 A ¶ A boy of twelve pumps the handle of the well.
10 A JEDEDIAH "JED" OKONJO (12, oversized boots).
11 A ¶ A young cowhand leans against the post, hat low.
12 A He chews a straw.
13 A SANTIAGO "SANTI" PERALES-WINTERS (20s, spurs, easy grin).
* 14 A ¶ At the far end, a rider.
* 15 A A stranger on a gray horse.
16 A He reins in.
17 A Climbs down slow.
18 A ¶ His name is CORNELIUS DUNLEAVY-KEITA (50s, long coat, dusty).
19 A He nods to them all.
20 D CORNELIUS: Afternoon.
21 D ROSIE: Afternoon.
22 A ¶ She keeps shelling.
23 A He ties the horse.
24 A Walks up the steps.
25 A Elijah scoots his boots out of the way.
26 D CORNELIUS: Train due?
27 D ELIJAH: Four o'clock.
28 D CORNELIUS: That's a ways.
29 D ELIJAH: Hot day for waiting.
30 A ¶ Cornelius smiles.
31 A Takes off his hat and wipes his brow.
32 A Santi drops the straw.
33 A Picks up a new one.
34 D CORNELIUS: That your boy at the pump?
35 D ROSIE: He's everybody's boy.
36 A ¶ Cornelius nods.
37 A Watches Jed work the handle.
* 38 A The water gushes into a trough.
39 D JED (to no one): Mister, you want some?
40 D CORNELIUS: I'd be obliged.
41 A ¶ Jed fills a tin cup.
42 A Hands it up.
43 A Cornelius drinks.
44 A Slowly.
45 A Hands it back.
46 D CORNELIUS [CONT'D]: Peas.
47 D ROSIE: Peas.
48 D CORNELIUS: I always liked them.
49 A ¶ She finally looks up.
50 A Meets his eye.
51 D ROSIE: Not these.
52 A ¶ Cornelius lowers his hand.
53 A Santi straightens from the post.
54 A Elijah sets the knife on his knee.
55 A Jed backs away from the pump.
56 D CORNELIUS (quietly): Ah.
57 A ¶ Rosie reaches into the pan.
* 58 A Under the peas, a revolver.
59 A She lifts it, calm as a woman lifting a teacup.
60 D ROSIE: Walk back to your horse.
61 A ¶ He does not move.
62 D ROSIE [CONT'D]: Now, Mr. Dunleavy.
63 A ¶ He turns.
64 A Takes the steps one at a time.
65 A Reaches the gray.
66 A Swings up.
* 67 A ¶ The dog lifts its head.
68 D CORNELIUS (to Rosie, over his shoulder): Tell the boy to keep pumping.
69 A ¶ He rides out.
70 A ¶ Rosie sets the revolver back in the peas.
71 A Jed lets out a sob and sits right down in the dust.

### SCENE s00288 | EXT. CHERRY ORCHARD IN BLOSSOM - DAY
Detected names (may be incomplete or contain aliases): LAZARUS BARNABY-OKORO, HEZ, ARRINGTON-CHEN, PRUDENCE LOWELL-ADEYEMI
* 1 A ¶ Pink petals on the wind.
* 2 A A weathered fence.
* 3 A A stone farmhouse with the shutters closed.
4 A ¶ Two men sit on the porch.
5 A ¶ LAZARUS BARNABY-OKORO (50s, shirtsleeves, suspenders, sharp eyes) whittles.
6 A Slow strokes.
7 A ¶ HEZEKIAH "HEZ" ARRINGTON-CHEN (60s, white mustache, bad leg stretched out) fans himself with a hat.
* 8 A ¶ A mockingbird sings.
* 9 A Petals fall.
10 D HEZ: Pretty.
11 D LAZARUS: Pretty.
* 12 A ¶ Silence.
13 D HEZ: Used to hate cherries.
14 D LAZARUS: You never said.
15 D HEZ: Didn't have to.
16 A ¶ He fans himself.
17 A Lazarus sets down the knife.
18 D LAZARUS: Hez.
19 D HEZ: Mm.
20 D LAZARUS: Eleven years.
21 D HEZ: Twelve in August.
22 D LAZARUS: Twelve.
23 A ¶ Hez nods.
* 24 A A petal lands on his boot.
25 A He brushes it off.
26 D HEZ: You ever think she'd come back?
27 D LAZARUS: No.
28 D HEZ: Me neither.
* 29 A ¶ A quiet.
* 30 A The mockingbird stops.
* 31 A The wind drops.
* 32 A The orchard holds its breath.
33 D HEZ [CONT'D]: Funny how the birds go quiet.
34 D LAZARUS: Mm.
35 D HEZ: Before weather.
36 D LAZARUS: Before something.
37 A ¶ Lazarus rises.
38 A Walks to the porch rail.
39 A Looks down the lane.
* 40 A ¶ Dust, far off.
* 41 A One rider.
* 42 A Coming slow.
43 D LAZARUS [CONT'D]: Company.
44 A ¶ Hez struggles up.
45 A Takes his hat.
46 A Stands beside him.
47 A They watch together.
48 A ¶ The rider reaches the gate.
49 A Stops.
50 A A woman.
51 A Black dress, black hat, a rifle across the saddle.
52 A She dismounts.
53 A ¶ Her name is PRUDENCE LOWELL-ADEYEMI (40s, dust-streaked, hard-eyed).
54 A She walks to the porch.
55 A Stops at the bottom step.
56 D PRUDENCE: Lazarus.
57 D LAZARUS: Prudence.
58 D PRUDENCE: Hezekiah.
59 D HEZ: Ma'am.
60 A ¶ She lets the rifle hang.
61 D PRUDENCE: You thought I was dead.
62 D LAZARUS: We hoped.
63 D PRUDENCE: That's honest.
64 D HEZ: Pru, we can talk--
65 D PRUDENCE: We talked. Twelve years ago. On this porch.
66 A ¶ She climbs one step.
67 D PRUDENCE [CONT'D]: You said you'd sell the land and split it.
68 D LAZARUS: We did.
69 D PRUDENCE: You said you'd send my share.
70 D LAZARUS: It never--
71 D PRUDENCE: It never came.
72 A ¶ Lazarus and Hez exchange a look.
73 A Hez's hand drifts toward his hat.
74 D HEZ: Pru, I don't know what you think--
75 D PRUDENCE: I think the orchard is mine.
* 76 A ¶ Petals swirl.
77 A Lazarus's hand goes still on the rail.
78 D LAZARUS: It's mine, Pru. I paid.
79 D PRUDENCE: With what?
* 80 A ¶ Silence.
81 A She climbs another step.
82 D PRUDENCE [CONT'D]: With my share.
83 D LAZARUS (low): Pru.
84 D PRUDENCE: I'm not here to kill you.
85 D HEZ: Thank God.
86 D PRUDENCE: I'm here to sit.
87 A ¶ She climbs the last step.
88 A Looks at the empty chair.
89 A Sits.
90 A Lays the rifle across her knees.
91 D PRUDENCE [CONT'D]: Pour me a drink, Hez.
92 A ¶ Hez stares at her.
93 A Slowly reaches for the jug.
94 A Pours.
95 A His hand trembles.
96 A She takes the cup.
97 A ¶ She drinks.
98 A Sets it down.
99 D PRUDENCE [CONT'D]: Now. Tell me about the cherries.
100 A ¶ Lazarus turns from the rail.
101 A Sits.
102 A Picks up the knife.
103 A Doesn't whittle.
104 A Just holds it.
105 D LAZARUS: They bloom early here.
106 D PRUDENCE: I remember.
* 107 A ¶ The mockingbird starts again, slowly.
* 108 A A petal falls on the rifle barrel.
109 A None of them moves to brush it off.

### SCENE s00289 | INT. FLOWER WHOLESALER COLD ROOM - PRE-DAWN
Detected names (may be incomplete or contain aliases): PHIL, ADEWALE-STRAND, RAFI, KOWALCZYK-MENSAH, DESI, LINDGREN-OKAFOR
* 1 A ¶ Buckets of roses.
* 2 A Fog from the compressor.
* 3 A A caged bulb.
4 A ¶ Three people in refrigerated coats stand around a steel table.
* 5 A A blueprint under their elbows.
* 6 A A thermos steaming.
7 A ¶ PHILOMENA "PHIL" ADEWALE-STRAND (50s, reading glasses) taps the blueprint with a pencil.
8 A ¶ RAFAEL "RAFI" KOWALCZYK-MENSAH (30s, tattooed forearm) stirs coffee with a pen.
9 A ¶ DESIREE "DESI" LINDGREN-OKAFOR (20s, headphones round neck) chews a rose petal.
10 D PHIL: The armored van arrives at six.
11 D RAFI: Six-ten.
12 D DESI: Six-oh-five.
13 D PHIL: Six.
14 D RAFI: It's always late.
15 D DESI: Not on Thursdays.
16 D PHIL: It's Thursday.
17 D RAFI: It's a flower truck on Thursdays.
18 D DESI: They deliver the same floor.
19 D PHIL: They deliver at the same dock.
20 D RAFI: Different dock.
21 D DESI: Same dock, different door.
22 D PHIL: Children.
23 A ¶ They stop.
24 A Rafi sips.
25 A Desi shrugs.
26 D PHIL [CONT'D]: Same dock. Same door. We hide in the roses.
27 D RAFI: In the roses.
28 D DESI: Thorns?
29 D PHIL: Dethorned.
30 D DESI: Oh.
31 D RAFI: Desi.
32 D DESI: Rafi.
33 A ¶ They say each other's name together.
34 A Rafi grins.
35 A Desi flicks the petal at him.
* 36 A It lands on the blueprint.
37 D PHIL (to the room): Five-forty. Positions.
38 A ¶ She folds the blueprint.
39 A Slides it into her coat.
40 A Rafi screws the lid on the thermos.
41 A Desi pulls her headphones up.
* 42 A ¶ The compressor shudders.
* 43 A The light flickers once, then steadies.

### SCENE s00290 | INT. FLOODED CHURCH CRYPT - COMMAND POST - NIGHT
Detected names (may be incomplete or contain aliases): MAJOR WINIFRED BAPTISTE-OKONKWO, CAPTAIN LUCIAN HARGREAVES-DIALLO, STACKS, WILLOUGHBY, LIEUTENANT SIMONE ARCHAMBAULT-TSOSIE, CORPORAL REUBEN VASQUEZ-OLUWOLE, COLONEL
* 1 A ¶ Vaulted brick.
* 2 A Knee-deep water.
* 3 A A table on cinderblocks, a field telephone, three lanterns.
* 4 A Mortar dust drifts down with each distant shell.
5 A ¶ MAJOR WINIFRED BAPTISTE-OKONKWO (40s, helmet off, tired) leans over a map.
6 A ¶ CAPTAIN LUCIAN HARGREAVES-DIALLO (30s, bandaged forehead) sits on the table edge.
7 A ¶ SERGEANT EUSTACE "STACKS" WILLOUGHBY (50s, immense, silent) cleans a rifle.
8 A ¶ LIEUTENANT SIMONE ARCHAMBAULT-TSOSIE (20s, radio operator) crouches by the field telephone.
9 A ¶ CORPORAL REUBEN VASQUEZ-OLUWOLE (20s, sentry) watches the stairs.
* 10 A ¶ The field telephone buzzes.
11 A Simone grabs it.
12 D SIMONE: Command post.
13 D COLONEL [V.O.] (over the phone, thin): Status.
14 D SIMONE: Holding, sir. Water's rising.
15 D COLONEL [V.O.]: Hold until dawn.
16 D SIMONE: Sir, they're shelling the nave.
17 D COLONEL [V.O.]: Hold until dawn, Lieutenant.
* 18 A ¶ The line clicks.
19 A Simone lowers the receiver.
20 D WINIFRED: Well?
21 D SIMONE: Dawn.
22 D LUCIAN: That's five hours.
23 D WINIFRED: Then we'll see five hours.
* 24 A ¶ A shell hits the church.
* 25 A The crypt shakes.
* 26 A Mortar rains.
* 27 A A lantern swings, throws shadows.
28 D REUBEN (muttering): Closer. Closer.
29 D STACKS (rumble): Let them.
30 A ¶ Winifred and Lucian step aside, water sloshing.
31 A They whisper over the map.
32 D WINIFRED: If the north wall goes, we pull back through the ossuary.
33 D LUCIAN: And if the ossuary floods?
34 D WINIFRED: Then we swim.
* 35 A ¶ A third shell, so close the lanterns gutter.
36 A Reuben shouts from the stairs.
37 D REUBEN: Movement! Top step!
38 A ¶ Everyone drops.
39 A Rifles up.
40 A Stacks rolls behind the table.
41 A Simone drags the phone under it.
* 42 A ¶ A boot appears on the stairs.
* 43 A Then a hand, empty, open.
44 D WINIFRED: Hold fire!
45 D LUCIAN: Hold fire!
* 46 A ¶ Nobody fires.
* 47 A A voice, thin and foreign, from the dark above.
48 D REUBEN (calling up): Show yourself!
* 49 A ¶ The crypt shakes one more time.
* 50 A Then, for the first time in hours, silence.
51 D STACKS (low): That's the barrage ending.
* 52 A ¶ Dust settles.
* 53 A Water stills.
54 A Reuben lowers his rifle at last.
55 D WINIFRED (to the whole crypt): Stand down. Rest in shifts.
56 D LUCIAN: Dawn?
57 D WINIFRED: Dawn.
58 A ¶ She turns to the map and does not look back at the stairs.

### SCENE s00291 | INT. SERVICE ELEVATOR - GRAND HOTEL - DAY
Detected names (may be incomplete or contain aliases): BERNADETTE QUARLES-IBARRA, FERDIE, ACHTERBERG-LOWE, KWABENA OSEI-DRUMMOND, LOTTIE FAIRCHILD-NAKAMURA
* 1 A ¶ A brass box, six feet square, smelling of lilies.
* 2 A In the center, a four-tier wedding cake on a rolling cart, wrapped in plastic like a fragile patient.
3 A ¶ BERNADETTE QUARLES-IBARRA (50s, caterer's apron, clipboard) presses herself against the left wall.
4 A FERDINAND "FERDIE" ACHTERBERG-LOWE (60s, tuxedo, bow tie slightly crooked) holds the right.
5 A KWABENA OSEI-DRUMMOND (20s, bellhop pillbox hat) guards the buttons.
6 A LOTTIE FAIRCHILD-NAKAMURA (8, flower girl, wreath of daisies) sits cross-legged on the floor beside the cart, eating a rose off the top tier.
* 7 A ¶ The elevator lurches.
8 A Everyone freezes.
* 9 A The cake sways.
10 A Bernadette's clipboard drops.
11 A Ferdie's hand shoots out to steady the cart.
12 A Kwabena stabs three buttons at once.
13 A Lottie licks icing off her wrist.
* 14 A The lift hums, hangs, hums again.
15 D FERDIE: Is it stuck?
16 D BERNADETTE: It is not stuck.
17 D KWABENA: It's thinking.
18 D LOTTIE: Can I have the other rose?
19 D BERNADETTE: No.
20 D FERDIE: Yes.
21 D KWABENA: Sir, with respect, it's her cake.
22 D FERDIE: It's my daughter's cake, and my granddaughter's rose.
23 D BERNADETTE: That rose is sixty dollars.
24 D LOTTIE: It tastes like soap.
* 25 A ¶ The elevator drops six inches.
* 26 A The top tier slides.
27 A Four hands lunge.
* 28 A The cake settles.
* 29 A Nobody breathes.
30 A Ferdie wipes a smear of frosting from his lapel and holds out his hand, palm up, to Bernadette.
31 A She looks at it.
32 A Then she hands him a plastic fork.

### SCENE s00292 | INT. FUNERAL PARLOR - VIEWING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): JO, ADEBAYO-KRUSE, MALACHI TREVELYAN-SHAW, VOICE
* 1 A ¶ Folding chairs.
* 2 A Carnations in a wire stand.
* 3 A A closed casket, brass handles dull.
4 A ¶ JOSEPHINE "JO" ADEBAYO-KRUSE (40s, black coat, sunglasses she doesn't remove) sits in the front row.
5 A She does not turn when the door opens.
6 A ¶ MALACHI TREVELYAN-SHAW (50s, black suit, damp at the shoulders) stands in the doorway.
7 A He holds a small paper bag.
8 A ¶ He walks the aisle.
9 A Sits two chairs from her.
10 A Sets the bag on the empty seat between them.
11 A ¶ She looks at it.
12 A Doesn't touch it.
* 13 A ¶ A phone rings in her coat.
14 A She lets it go three rings.
15 A He watches her hand.
16 A ¶ She takes it out.
17 A Answers.
18 A Holds it between them on speaker.
19 D VOICE [V.O.] (over the phone): Is he there?
20 D JO: He's here.
21 D VOICE [V.O.]: Then you know.
22 A ¶ She says nothing.
23 A Her thumb moves along the edge of the phone.
24 A He leans his elbows on his knees and looks at the casket.
25 D VOICE [V.O., CONT'D]: Open the bag.
26 A ¶ She doesn't.
27 A He does.
28 A Takes out a single brass key.
29 A Holds it up to the lamp.
* 30 A The key turns slowly on its string.
31 D VOICE [V.O., CONT'D]: That's the end of it.
32 A ¶ Jo hangs up.
33 A Slips the phone back in her coat.
34 A She takes the key from his fingers, and for a moment their hands stay together.
35 A ¶ She stands.
36 A Smooths her coat.
37 A He stays seated.
38 A She walks to the casket and lays the key on the lid, beside the carnations.
39 A ¶ At the door she stops.
40 A He still hasn't looked at her.
41 A She goes out, and he sits on, staring at the key.

### SCENE s00293 | INT. COMMUNITY CENTER BASEMENT - FOLDING-CHAIR CIRCLE - NIGHT
Detected names (may be incomplete or contain aliases): DOLLIE, ENGSTROM-ACHEBE, CORNELL BEAUMONT-ASANTE, YASMINE KOWALSKI-HADDAD, TIBERIUS FAIRWEATHER-MWANGI, HARPER DELACROIX-YAMAMOTO
* 1 A ¶ A low-ceilinged room with a linoleum floor and a coffee urn that has been warm since 1994.
* 2 A Posters of tide pools on cinderblock walls.
* 3 A Five chairs in a circle, one empty.
4 A ¶ FACILITATOR DOLORES "DOLLIE" ENGSTROM-ACHEBE (60s, cardigan, kind eyes, a voice trained to be even) sits with a clipboard on her knee.
5 A ¶ CORNELL BEAUMONT-ASANTE (40s, mechanic's hands scrubbed pink, work shirt with his name stitched on) grips a paper cup.
6 A ¶ YASMINE KOWALSKI-HADDAD (30s, scrubs, hair coming loose, eyes bright with no sleep) sits with her feet tucked under her.
7 A ¶ OLD MR. TIBERIUS FAIRWEATHER-MWANGI (80s, tweed cap in his lap, hearing aid whistling softly) leans on a cane.
8 A ¶ HARPER DELACROIX-YAMAMOTO (17, hoodie, earbuds around neck) has chosen the chair nearest the door.
9 D DOLLIE: Thank you for coming. Who would like to start?
10 D CORNELL: I'll start.
11 D DOLLIE: Thank you, Cornell.
12 D CORNELL: My wife used to say I never talked. Said I could run a whole day on three words. Truth is I just never knew where to put the rest of them.
13 D YASMINE: That's me with my mother. Eleven years of silence in the same kitchen.
14 D CORNELL: And now she's gone.
15 D YASMINE: And now the kitchen's loud.
16 D TIBERIUS: What's that?
17 D DOLLIE: She says the kitchen's loud, Tiberius.
18 D TIBERIUS: Mine's the opposite. Mine hums. The refrigerator hums so much I think it's her.
19 D HARPER: That's not weird.
20 D TIBERIUS: It's a bit weird, young man.
21 D HARPER: I'm not a man.
22 D TIBERIUS: Young person, then. Forgive me.
23 D HARPER: It's fine.
24 D DOLLIE: Harper, would you like to share?
25 D HARPER: No.
26 D DOLLIE: That's all right.
27 D HARPER: Okay, maybe.
* 28 A ¶ A long pause.
* 29 A The urn gurgles.
30 D HARPER [CONT'D]: My dad's phone still gets texts. I read them sometimes. People tell him about their day. I don't know why I keep reading.
31 D YASMINE: You keep him company.
32 D HARPER: He's not there.
33 D YASMINE: Neither's my mother, and I still set two cups.
34 D CORNELL: Two cups.
35 D YASMINE: Every morning.
36 D CORNELL: I do that with the truck. I leave the passenger seat clear.
37 D TIBERIUS: What for?
38 D CORNELL: In case.
39 D TIBERIUS: Ah.
40 D DOLLIE: It's a good thing, to leave room.
41 D CORNELL: Is it?
42 D DOLLIE: I think so. I leave a chair in this circle every week. For whoever isn't here yet.
43 D HARPER: That's why there's an empty one.
44 D DOLLIE: That's why.
45 D TIBERIUS: It's not empty. My Winnie sits there.
* 46 A ¶ Silence.
47 A Nobody laughs.
48 D CORNELL (low): Mine too.
49 D YASMINE: Mine's in the kitchen.
50 D HARPER (very quietly): Mine's on the phone.
51 D DOLLIE: Then we're full tonight.

### SCENE s00294 | INT. VICTORIAN CONSERVATORY, GLASS WINTER-GARDEN - 1887 - AFTERNOON
Detected names (may be incomplete or contain aliases): LADY CORDELIA WHITTINGTON-BANDELE, RUPERT ABERNETHY-ODUYA, MISS PHILIPPA LOVELACE
* 1 A ¶ Palms press against the glass like prisoners.
* 2 A A fountain, dry.
* 3 A Wrought-iron chairs gone green with weather.
4 A ¶ LADY CORDELIA WHITTINGTON-BANDELE (30s, bustled gown of dove gray, a face trained to give nothing away) sits with a teacup untasted in her gloved hands.
5 A ¶ Across from her, MR. RUPERT ABERNETHY-ODUYA (40s, frock coat, whiskers meticulously combed) turns his hat in his fingers.
6 A ¶ By the fountain's rim, partly hidden by a palm, stands MISS PHILIPPA LOVELACE (20s, governess' grey wool, spectacles), who has been told to wait and is waiting.
7 D RUPERT: Lady Cordelia, I must speak plainly.
8 D CORDELIA: Mr. Abernethy, you have never done otherwise, and I have never thanked you for it.
9 D RUPERT: Then permit me to continue.
10 D CORDELIA: Permit nothing. Say it.
11 A ¶ He rises.
12 A She rises.
13 A Philippa shrinks behind the palm.
14 A Rupert crosses the tiles in two strides and Cordelia steps back until her skirts catch the iron chair.
* 15 A It scrapes.
16 A The three of them freeze, an arrangement of statues in a house of glass.
17 D RUPERT: Miss Lovelace, you may go.
18 D PHILIPPA: Yes, sir.
19 D CORDELIA: No, Philippa. Stay.
20 D RUPERT: Cordelia--
21 D CORDELIA: Mr. Abernethy, whatever you have to say about the letters, you may say before my governess. She wrote them.
22 A ¶ Philippa lifts her chin.
* 23 A The palm leaves stir, though there is no wind.
24 A Rupert's hat slips from his hand and rolls, round and round, to the dry fountain's edge.

### SCENE s00295 | INT. PARKING STRUCTURE ROOFTOP - DAWN
Detected names (may be incomplete or contain aliases): LEONIE ASANTEWAA-VOGEL, RETTA, OKOYE-BLOOM
* 1 A ¶ A rental van.
2 A Two women lean on its bumper.
* 3 A Between them, a gym bag.
4 A ¶ LEONIE ASANTEWAA-VOGEL (40s, bomber jacket) lights a cigarette.
5 A Her hands are steady.
6 A ¶ MARGUERETTA "RETTA" OKOYE-BLOOM (30s, hoodie) watches the sun come up over a gray city.
7 A ¶ Leonie offers the pack.
8 A Retta shakes her head.
9 D LEONIE: You hungry?
10 D RETTA: No.
11 D LEONIE: You should eat.
12 D RETTA: Later.
13 A ¶ Leonie drags on the cigarette.
14 A Looks at the bag.
15 D LEONIE: She wanted it split three ways.
16 D RETTA: She wanted a lot of things.
17 D LEONIE: She called me last night.
18 D RETTA: She called me, too.
* 19 A ¶ Silence.
* 20 A A pigeon lands on the van roof.
* 21 A Walks the length of it.
22 D LEONIE: She said she was sorry.
23 D RETTA: She said that to me, too.
24 A ¶ Leonie flicks the ash.
25 A Retta stares at her shoes.
26 D LEONIE: Nobody's coming.
27 D RETTA: I know.
28 D LEONIE: So we could just go.
29 D RETTA: We could.
30 A ¶ Neither moves.
* 31 A The pigeon takes off.
32 A ¶ Retta bends.
33 A Unzips the bag a few inches.
34 A Looks.
35 A Zips it shut.
36 A She hands the strap to Leonie, and Leonie takes it, and for a moment neither lets go.
37 D LEONIE: Which way?
38 D RETTA: You pick.
39 A ¶ Leonie opens the van door.
40 A Retta gets in.
41 A Leonie follows.
42 A They sit with the engine off and the sun on the windshield.

### SCENE s00296 | INT. NIGHT FERRY, LOWER CAR DECK - NIGHT
Detected names (may be incomplete or contain aliases): LORCAN BRENNAN-OSEI, NELLWYN PRYCE-ADEYEMI, TAD, MBEKI-LINDEN
* 1 A ¶ Rows of parked cars.
* 2 A Chains rattle.
* 3 A Fog presses on the stern gate.
* 4 A A single fluorescent tube hums over three folding chairs where the deckhands drink coffee.
5 A ¶ LORCAN BRENNAN-OSEI (50s, deckhand) pours from a thermos.
6 A NELLWYN PRYCE-ADEYEMI (20s, new hire, hi-vis vest) sits on the chair edge.
7 A THADDEUS "TAD" MBEKI-LINDEN (60s, captain's patch on his sleeve) rubs his eyes.
8 D LORCAN: You hear that?
9 D NELLWYN: Hear what?
10 D LORCAN: Knocking.
11 D TAD: Engine.
12 D LORCAN: Not the engine. Knocking. Under us.
13 D NELLWYN: Under the deck?
14 D LORCAN: Under the hull.
15 D TAD: Lorcan, it's the sea.
16 D LORCAN: The sea doesn't knock three times.
17 D NELLWYN: Maybe it's a buoy.
18 D TAD: Maybe it's a buoy.
19 D LORCAN: It's not a buoy.
20 D TAD: Then what is it?
21 D LORCAN: Last crossing, it knocked four times. Before that, five.
22 D NELLWYN: Counting down?
23 D LORCAN: Counting something.
24 D TAD: Stop frightening the girl.
25 D NELLWYN: I'm not frightened.
26 D TAD: Then you've not been listening.
27 D LORCAN: Three. That's three. Tonight it's three.
28 D NELLWYN: And after three?
29 D LORCAN: Two, one.
30 D NELLWYN: And after one?
31 D LORCAN: That's what I'm asking him.
32 D TAD (low): After one, we don't dock.
* 33 A ¶ Silence.
* 34 A The fluorescent tube flickers.
* 35 A The fog at the stern gate seems to lean.
36 D NELLWYN: That's a joke.
37 D TAD: It's a rule. My father taught me. When it counts down to one, you turn the ship around.
38 D NELLWYN: Tonight is three.
39 D LORCAN: Tonight is three.
40 D TAD: Then pray for a long crossing.
* 41 A ¶ A single knock, soft, from under the deck.
42 D NELLWYN: That was two.
43 D LORCAN: That was two.
44 D TAD (barely): Turn her around.
45 D LORCAN: Captain?
46 D TAD: Turn. Her. Around.

### SCENE s00297 | INT. COLD-STORAGE LOCKER, FISH MARKET - NIGHT
Detected names (may be incomplete or contain aliases): DEL, OKONKWO-REYES, TOBY, HARLAN-AMADI, SABINE ROUSSEAU-ADEKUNLE
* 1 A ¶ Steel racks.
* 2 A Crates of ice.
* 3 A Breath fogging.
* 4 A A swinging bulb.
5 A ¶ Two figures wedge the door shut with a pry bar.
6 A ¶ DELPHINE "DEL" OKONKWO-REYES (30s, rubber apron) shoves a crate against it.
7 A ¶ TOBIAS "TOBY" HARLAN-AMADI (50s, flannel, grizzled) leans on the bar, panting.
8 A ¶ Something THUDS on the other side of the door.
* 9 A Once.
10 D DEL (to Toby): Is it holding?
11 D TOBY: It's holding.
* 12 A ¶ THUD.
* 13 A The door shivers.
14 D DEL (to herself): Okay. Okay. Don't scream.
15 D TOBY (to the whole locker): Nobody make a sound.
16 D DEL: Who are you talking to?
17 D TOBY: Habit.
* 18 A ¶ Silence.
* 19 A Ice drips.
* 20 A The bulb sways.
21 D DEL: How long?
22 D TOBY: Till morning crew.
23 D DEL: That's six hours.
24 D TOBY: Then we wait six hours.
* 25 A ¶ Another THUD.
* 26 A Dents the steel.
27 A Del backs away.
28 A Her heel hits a crate.
* 29 A Cold light flickers across her face.
30 D DEL (whispering, to herself): It's only the compressor.
31 D TOBY: That's not the compressor.
* 32 A ¶ The bulb goes out.
* 33 A Darkness.
* 34 A Breathing.
* 35 A A slow, wet scraping from the far end of the locker.
36 A ¶ From the dark: a voice, gentle.
37 D SABINE [O.S.]: Del?
38 A ¶ Del freezes.
39 A Toby grabs her sleeve.
40 D TOBY (mouthing): Don't.
41 D SABINE [O.S.]: Del, it's me. Open the door.
42 D DEL (whispering): Sabine?
* 43 A ¶ The bulb flares.
44 A At the end of the aisle, in the white fog, stands SABINE ROUSSEAU-ADEKUNLE (30s, same apron as Del, hair wet, lips blue).
45 A She smiles.
46 A Her feet do not touch the floor.
47 A ¶ Del makes a small sound.
48 A Toby heaves the pry bar up like a club.
49 D SABINE: Oh, don't be afraid. I've come to warm up.
50 A ¶ She drifts forward.
* 51 A The ice on the racks cracks.
* 52 A Frost races up the walls.
53 D TOBY (to Sabine): Stay back!
54 D DEL (to Toby): She's dead! She drowned in March!
55 D SABINE: Del.
56 A ¶ She extends a hand.
57 A Del's breath stops.
58 A Toby swings the bar.
* 59 A It passes through Sabine and rings against a steel rack.
60 A Sabine looks at him, hurt.
61 D SABINE [CONT'D]: That wasn't kind.
62 A ¶ The THUD on the door comes a third time and the door bursts open on the rush of morning crew: sunlight, shouting.
63 A Sabine vanishes in the light like breath on glass.
64 A ¶ Toby drops the bar.
65 A Del falls to her knees.
* 66 A The ice on the racks begins, quietly, to melt.

### SCENE s00298 | INT. CALL CENTER - COMPLAINTS DEPARTMENT - DAY
Detected names (may be incomplete or contain aliases): CYPRIAN OYELARAN-BLOOM, AGGIE, VANTERPOOL-NKEMELU, MOE, LINDQVIST-SANTOS, ROSAMUND FEATHERSTONE-ABIOLA
* 1 A ¶ Cubicles.
* 2 A Headsets.
* 3 A A banner reads "WE LISTEN!" in sagging letters.
4 A ¶ CYPRIAN OYELARAN-BLOOM (30s, headset askew) slams his desk.
5 A AGATHA "AGGIE" VANTERPOOL-NKEMELU (50s, supervisor, cardigan, mug that says WORLD'S OKAYEST BOSS) strides over.
6 A MORDECAI "MOE" LINDQVIST-SANTOS (20s, intern, tie too wide) trails behind her with a notepad.
7 A ROSAMUND FEATHERSTONE-ABIOLA (60s, a customer) is audible only through the headset.
8 D CYPRIAN (into mic): Ma'am, I understand.
9 D ROSAMUND [V.O.] (tinny, furious): You do NOT understand!
10 D CYPRIAN: Ma'am, the toaster is under warranty.
11 D ROSAMUND [V.O.]: It exploded!
12 D CYPRIAN: Ma'am, "exploded" is not a covered event.
13 D AGGIE: Cyprian. Hold.
14 D CYPRIAN (muting): She says it exploded.
15 D AGGIE: Did it?
16 D CYPRIAN: She sent a photo.
17 A ¶ He tilts the monitor.
* 18 A A blackened ceiling, a toast-shaped hole.
19 D MOE: Is that a toast-shaped hole?
20 D AGGIE: Moe, take a note.
21 D MOE: What note?
22 D AGGIE: "Do not tell her it is covered."
23 D MOE: Why not?
24 D AGGIE: Because then we'd owe her a ceiling.
25 A ¶ Cyprian unmutes.
26 D CYPRIAN: Ma'am, we are going to send you a brand-new toaster.
27 D ROSAMUND [V.O.]: A TOASTER?
28 D CYPRIAN: A better toaster.
29 D ROSAMUND [V.O.]: I want a ceiling!
30 A ¶ Aggie snatches the headset off Cyprian.
31 A Puts it on.
32 A Smiles at the monitor.
33 D AGGIE (sweetly): Mrs. Featherstone-Abiola, it's Agatha. Have you tried the hat?
34 D ROSAMUND [V.O.]: ...What hat?
35 D AGGIE: The complimentary hat.
* 36 A ¶ A pause.
37 A Moe and Cyprian stare at her.
38 D ROSAMUND [V.O.] (softening): Is it a nice hat?
39 D AGGIE: It's a very nice hat.
40 A ¶ She hangs up.
41 A Takes off the headset.
42 A Cyprian and Moe watch her like she has levitated.
43 D CYPRIAN: There's no hat.
44 D AGGIE: Moe. Find a hat.

### SCENE s00299 | INT. TRAFFIC COURT - HEARING ROOM 4 - DAY
Detected names (may be incomplete or contain aliases): JUDGE PERPETUA OSEI-LANGSTROM, BART, KENYATTA-VOSS, PROSECUTOR ILSE NAKAGAWA-OYELOWO
* 1 A ¶ Fluorescent glare.
* 2 A Beige carpet.
* 3 A A flag leaning slightly.
* 4 A A bailiff's chair, empty.
5 A ¶ JUDGE PERPETUA OSEI-LANGSTROM (60s, robe over a cardigan, reading glasses on a chain) peers down at a file.
6 A At the defendant's table, BARTHOLOMEW "BART" KENYATTA-VOSS (40s, wrinkled blazer, a cardboard tube under his arm) stands very straight.
7 A Across the aisle, PROSECUTOR ILSE NAKAGAWA-OYELOWO (30s, immaculate, a binder as thick as a phone book) leafs through exhibits.
8 D BART: Your Honor, I'd like to submit the exhibit.
9 D JUDGE PERPETUA: What exhibit, Mr. Kenyatta-Voss?
10 A ¶ Bart pulls the cardboard tube open.
* 11 A Out slides a rolled-up poster, which unfurls across the table in a slow, majestic curl: a hand-drawn map of an intersection, annotated in four colors of marker, with arrows, sunbeams, and a smiling cartoon sedan.
12 A Ilse gapes.
13 A Judge Perpetua removes her glasses, polishes them, puts them back on.
14 A Bart steps forward to flatten a corner, knocking Ilse's binder to the floor.
15 A She kneels to gather it, he kneels to help, their heads nearly collide, and the poster slides off the table and onto Judge Perpetua's bench, where it covers her gavel.
16 D ILSE: Objection.
17 D JUDGE PERPETUA: On what grounds?
18 D ILSE: The sedan has a face.
19 D JUDGE PERPETUA: Overruled. Mr. Kenyatta-Voss, proceed.
20 D BART: Your Honor, as the map shows, the stop sign was obscured by a sycamore.
21 D ILSE: It was obscured by a sycamore he planted.
22 D BART: Prove it.
23 D ILSE: I have the permit.
24 A ¶ She holds up a stapled paper.
25 A Bart looks at it.
26 A Looks at the poster.
27 A Looks at the cartoon sedan, which smiles back.
28 D BART (quietly): I'll pay the fine.
29 D JUDGE PERPETUA: Forty dollars, payable at the window.
30 A ¶ She raps the gavel through the poster.
* 31 A It makes a small soft tearing sound.

### SCENE s00300 | INT. OBSERVATION CAR, MOUNTAIN SCENIC RAILWAY - SUNSET
Detected names (may be incomplete or contain aliases): WOMAN, THE STRANGER, ANSELM, PHILIPPA
* 1 A ¶ A glass-domed car, brass fittings polished to honey.
* 2 A Plush velvet seats.
* 3 A Outside, peaks go violet under a rose-colored sky.
4 A ¶ A WOMAN sits alone by the window, a travel journal on her knee.
5 A Mid-thirties, silk scarf, auburn hair pinned with a tortoiseshell comb.
6 A She writes, and stops, and watches the mountains.
7 A ¶ A STRANGER enters from the vestibule: a tall man, forties, tweed jacket, a camera on a strap.
8 A He pauses at her row.
9 D THE STRANGER: Is this seat taken?
10 D WOMAN: There are forty empty seats.
11 D THE STRANGER: I know. I counted.
12 A ¶ She almost smiles.
13 A He sits across the aisle, not beside.
14 A Lifts the camera, lowers it again.
15 D THE STRANGER [CONT'D]: The light's gone before I can catch it. Always.
16 D WOMAN: Then stop catching it.
17 D THE STRANGER: And do what?
18 D WOMAN: Look at it.
19 A ¶ He looks.
* 20 A A long beat.
* 21 A The train curves, and the whole western sky tilts into the car.
22 D THE STRANGER: My name is Anselm.
23 D ANSELM (correcting himself): Anselm Whitcombe-Diallo.
24 D WOMAN: Philippa Okoro-Strand.
25 D ANSELM: Philippa. That's a good mountain name.
26 D PHILIPPA: Is there such a thing?
27 D ANSELM: There is now.
* 28 A ¶ The train rocks gently through a tunnel and out again.
29 D PHILIPPA: Do you travel often?
30 D ANSELM: Only when I've lost something.
31 D PHILIPPA: What did you lose?
32 D ANSELM: I'm hoping the mountains will tell me.
33 D PHILIPPA: They don't talk.
34 D ANSELM: They don't need to.
35 A ¶ She closes her journal.
* 36 A The sky goes from rose to lavender.
37 A Neither of them speaks, and neither looks away.

### SCENE s00301 | INT. BALLROOM CLOAKROOM - ART DECO HOTEL - NIGHT
Detected names (may be incomplete or contain aliases): WOMAN IN SAPPHIRE, OTTOLINE, MARGUERITE
* 1 A ¶ A narrow room of brass hooks and furs.
* 2 A A single frosted lamp.
* 3 A Muffled orchestra through the wall.
4 A ¶ A WOMAN in a sapphire gown leans against the counter, breathing hard.
5 A Her lipstick is smeared.
6 A Her hand grips a champagne flute so tightly it might break.
* 7 A ¶ The attendant's stool is empty.
* 8 A ¶ The door opens.
9 A Another WOMAN steps in, in a silver gown, a fur stole over one arm.
10 A She closes the door behind her.
11 A Locks it.
12 D WOMAN IN SAPPHIRE: You followed me.
13 D WOMAN IN SILVER: You left your wrap.
14 A ¶ She holds out a stole.
15 A The woman in sapphire stares at it.
16 A Doesn't take it.
17 D WOMAN IN SAPPHIRE: I said I wouldn't dance.
18 D WOMAN IN SILVER: You danced with him.
19 D WOMAN IN SAPPHIRE: She asked.
20 D WOMAN IN SILVER: She did?
21 A ¶ The sapphire woman sets the flute down.
* 22 A It rings on the marble.
23 D WOMAN IN SAPPHIRE: Constance asked me for the third waltz. In front of everyone. I couldn't say no.
24 D WOMAN IN SILVER: Of course you could.
25 D WOMAN IN SAPPHIRE: She's my cousin.
26 D WOMAN IN SILVER: She's your cousin who looks at you like I do.
* 27 A ¶ Silence.
* 28 A The orchestra swells and falls.
29 A ¶ The woman in silver steps closer and drapes the stole over her companion's shoulders.
30 A For a moment they stand with their foreheads almost touching.
31 D WOMAN IN SAPPHIRE: I'm Ottoline, by the way. You never asked.
32 D OTTOLINE (softer): Ottoline Fairbrother-Nnamdi.
33 D WOMAN IN SILVER: Marguerite.
34 D OTTOLINE: Marguerite, I'm terrified.
35 D MARGUERITE: Good. So am I.
* 36 A ¶ A knock at the door.
37 A They break apart.
38 A Ottoline wipes her lipstick.
39 A Marguerite unlocks the door and opens it on the roar of the band.

### SCENE s00302 | INT. APOTHECARY SHOP, MARKET TOWN - 1740 - EVENING
Detected names (may be incomplete or contain aliases): APOTHECARY BARNABAS ADEYEMI-HOLLOWAY, KEZIAH OSEI-LINDQVIST, GIDEON PELL-ADEBOYE, WOMAN, ISOLDE FAIRCHILD-ADEBAYO
* 1 A ¶ Low beams.
* 2 A Shelves of blue glass jars with handwritten labels.
* 3 A A mortar and pestle, a scale, a bundle of dried lavender hung from a rafter.
* 4 A A coal stove ticks in the corner.
5 A ¶ APOTHECARY BARNABAS ADEYEMI-HOLLOWAY (50s, ink-stained apron, round spectacles) is grinding something in a bowl.
6 A His movements are slow and deliberate.
7 A ¶ His apprentice, KEZIAH OSEI-LINDQVIST (16, linen cap, sleeves rolled to the elbow), sorts herbs into drawers, humming under her breath.
8 A ¶ In the corner, on a stool by the stove, sits GIDEON PELL-ADEBOYE (60s, patched coat, a clay pipe unlit in his teeth), a regular who has said nothing in an hour and will say nothing more.
* 9 A ¶ The shop bell rings.
10 A A WOMAN in a traveling cloak enters, rain on her shoulders.
11 A She is ISOLDE FAIRCHILD-ADEBAYO (30s, pale, careful, a worn leather satchel), and she carries herself like someone who has practiced being unremarkable.
12 A ¶ She shakes out her cloak, hangs it on a peg.
13 A He watches her without seeming to.
14 A She smiles.
15 A He smiles back.
16 D ISOLDE: Good evening, sir.
17 D BARNABAS: Madam. A foul night.
18 D ISOLDE: I was told you stock rue.
19 D BARNABAS: We do. For what complaint?
20 D ISOLDE: A friend's.
21 A ¶ He sets down the pestle and goes to the shelf.
22 A She follows him with her eyes.
23 A She steps closer to the counter, and from the satchel her hand slips something small and flat, which she lays on the wood.
24 A ¶ Keziah stops humming.
25 A ¶ Barnabas returns with a jar.
26 A He sets it down.
27 A Sees the thing on the counter.
28 A His face does not change, but his hand does, closing over the jar's lid as if to keep it from spilling.
29 D BARNABAS [CONT'D] (evenly): Where did you come by this?
30 D ISOLDE: Does it matter?
* 31 A ¶ It is a seal ring, silver, with an unfamiliar crest.
32 A He picks it up.
33 A Turns it over.
34 A Keziah watches his thumb stroke the inside of the band.
35 D BARNABAS: Keziah. Lock the door.
36 A ¶ She does.
* 37 A The bolt falls with a sound like a dropped coin.
38 D ISOLDE: I was told you'd know the crest.
39 D BARNABAS: I know it.
40 D ISOLDE: Then you know why I've come.
41 A ¶ He looks at Keziah.
42 A At the stove.
43 A At the ring in his palm.
44 A He says nothing for a long time.
45 D BARNABAS: Sit, madam.
46 A ¶ She sits.
* 47 A The coal ticks.
* 48 A Rain presses on the window.

### SCENE s00303 | INT. WITHERED SALON IN A CLOSED CHATEAU - 1789 - NIGHT
Detected names (may be incomplete or contain aliases): MADAME HORTENSE DE VALLOMBREUSE-ADEYEMI, LOUIS-MARIE FONTAINE-OKOYE
* 1 A ¶ A great room under dust sheets.
* 2 A A single candle burns on a harpsichord whose lid has been propped open with a book.
* 3 A Shuttered windows.
* 4 A Outside, far off, a crowd murmurs like the sea.
5 A ¶ An old woman, MADAME HORTENSE DE VALLOMBREUSE-ADEYEMI (70s, silver silk gone gray at the hem, a ring on every finger), sits at the harpsichord.
6 A She does not play.
7 A She presses one key, listens to its fading note, and presses another.
* 8 A ¶ The door opens.
9 A A young man slips in and shuts it behind him, breathing hard.
10 A LOUIS-MARIE FONTAINE-OKOYE (20s, servant's livery, torn collar, a candle stub in his hand) is the last of her household.
11 D HORTENSE: You are late, Louis-Marie.
12 D LOUIS-MARIE: Madame, the gates are down. They are in the courtyard.
13 D HORTENSE: I heard.
14 D LOUIS-MARIE: Then you must come. There is a cart in the stable. I have bribed the boy.
15 D HORTENSE: With what?
16 D LOUIS-MARIE: With your emeralds.
17 D HORTENSE: Ah. Those were never mine.
18 D LOUIS-MARIE: Madame, please.
19 A ¶ She presses a key.
* 20 A The note hangs.
21 D HORTENSE: Do you know, I have lived in this house for fifty-one years and never once been alone in this room. There was always someone to carry a candle. Someone to close a shutter. Someone to watch me not play.
22 D LOUIS-MARIE: I am here.
23 D HORTENSE: Yes. You are the last.
24 D LOUIS-MARIE: Madame, they will burn it.
25 D HORTENSE: I should hope so. It is a great deal of work to maintain.
26 A ¶ He kneels beside the stool.
27 A She does not look at him.
* 28 A The crowd's murmur swells into a roar and the candle on the harpsichord gutters.
29 D LOUIS-MARIE: Please. For my sake.
30 D HORTENSE: Then do this for mine. Take the candle. Go through the kitchen. Do not look back, and do not tell them you served me.
31 D LOUIS-MARIE: They will know.
32 D HORTENSE: They will know that you ran. That is enough.
33 A ¶ She finally turns.
34 A Touches his face with a ringed hand, once, lightly.
35 D HORTENSE [CONT'D]: Go.
36 A ¶ He rises.
37 A Backs away.
38 A At the door he stops, then bows low, deeper than any servant should.
* 39 A The door closes.
40 A She turns back to the keys and plays, at last, one slow chord that fills the dark room.

### SCENE s00304 | INT. CURLING CLUB - LOCKER ROOM - EVENING
Detected names (may be incomplete or contain aliases): YOUNG WOMAN, HJALMAR ODUYA-KRISTENSEN, MO, DELACROIX-ABARA, BRYNJA
* 1 A ¶ Wet wool.
* 2 A Steam.
* 3 A The thump of stones through a wall.
4 A ¶ A YOUNG WOMAN sits on the bench in her stocking feet, broom across her knees.
5 A Twenties, red parka, a bruise on her cheekbone from a fall.
6 A She stares at nothing.
7 A ¶ Coach HJALMAR ODUYA-KRISTENSEN (60s, club blazer, whistle) stands at the door with a clipboard.
8 A He does not speak.
9 A He taps the clipboard against his thigh.
10 A ¶ At the far end, a veteran, MAUREEN "MO" DELACROIX-ABARA (40s, gray-blonde braid) tightens a boot.
11 A She doesn't look up either.
12 A ¶ The young woman bends.
13 A Unlaces one shoe.
14 A Laces it again.
15 A Same shoe.
16 D HJALMAR: Five minutes.
17 A ¶ The young woman nods.
18 D MO (to Hjalmar): Leave her.
19 D HJALMAR: She has a stone to throw.
20 D MO: She has a minute.
21 A ¶ Hjalmar studies the young woman.
22 A She picks up the broom.
23 A Puts it down.
24 A Picks up a towel and presses it to her cheek.
* 25 A ¶ A horn sounds in the hallway.
26 A ¶ Mo stands.
27 A Offers her hand.
28 A The young woman looks at it, then up at her face.
29 D MO [CONT'D]: Brynja.
30 D BRYNJA (rising): I'm fine.
31 A ¶ She isn't.
32 A She takes the hand anyway.
33 A ¶ Hjalmar steps aside from the door.
34 A The three of them walk out together, Brynja in the middle, broom over her shoulder, jaw set.

### SCENE s00305 | INT. NIGHT-SHIFT BAKERY - BACK ROOM - 4 AM
Detected names (may be incomplete or contain aliases): TEODORICO ABARA-LINDBERG, PENNY, NAKASHIMA-OKOYE, STRANGER, QUINCY ADEYEMI-HALVORSEN, PERPETUA
* 1 A ¶ Flour dust.
* 2 A Steel tables.
* 3 A Racks of dough rising under damp cloths.
* 4 A A radio plays something soft and unidentifiable.
5 A ¶ MR. TEODORICO ABARA-LINDBERG (60s, apron, gentle) kneads.
6 A His assistant, PENELOPE "PENNY" NAKASHIMA-OKOYE (20s, hairnet), oils pans.
7 A At the doorway, a STRANGER in a rain-soaked coat stands with a baguette-shaped package.
8 A Behind her, hiding behind the oven door, is a small, wide-eyed apprentice, QUINCY ADEYEMI-HALVORSEN (12, flour on his nose).
9 D STRANGER: Good morning. Are you the baker?
10 D TEODORICO: Everyone here is the baker.
11 D STRANGER: I mean the baker who makes the seeded rye.
12 D TEODORICO: Ah. That's Penny.
13 D PENNY: That's me.
14 D STRANGER: Then I owe you an apology.
15 D PENNY: For what?
16 D STRANGER: I left a one-star review.
17 D PENNY (not looking up): I remember.
18 D STRANGER: I was in a mood.
19 D PENNY: You called it "a brick with ambitions."
20 D STRANGER: It was a very good brick.
21 A ¶ Teodorico chuckles into the dough.
22 D STRANGER [CONT'D]: My name is Perpetua.
23 D PERPETUA (correcting): Perpetua Chen-Oyelowo. I'm the reviewer.
24 D PENNY: We know. You've been in the paper.
25 D PERPETUA: Then you know I'm contractually obliged to review again.
26 D TEODORICO: Of course.
27 D PERPETUA: I came to taste it. Before I write.
28 A ¶ Quincy peeks around the oven.
29 D QUINCY: It's still rising.
30 D PERPETUA: Then I'll wait.
31 D TEODORICO: Penny, make her tea.
32 D PENNY: I'm making her toast first.
33 A ¶ She slides a loaf from the rack and slices it.
34 A Perpetua sits on an overturned crate.
35 A Quincy tiptoes to sit beside her.
* 36 A The radio hums.
37 A Nobody, for a while, says anything.

### SCENE s00306 | INT. EMPTY INDOOR TENNIS COURT - DAWN
Detected names (may be incomplete or contain aliases): OTIS BRAITHWAITE-NKOSI, LEO, AMAECHI-DAHL
* 1 A ¶ Green carpet.
* 2 A Sodium lamps coming up.
* 3 A A basket of balls.
4 A ¶ OTIS BRAITHWAITE-NKOSI (40s, track jacket) feeds balls from the basket.
5 A Across the net, LEONTYNE "LEO" AMAECHI-DAHL (16, racket too big for her) returns them.
* 6 A Thock.
* 7 A Thock.
* 8 A Thock.
9 D OTIS: Again.
10 D LEO: Again.
11 A ¶ They speak at the same time.
12 D OTIS: Reset your feet.
13 D LEO: I'm resetting my feet.
14 D OTIS: Then reset them faster.
* 15 A ¶ Thock.
16 A She hits wide.
17 A He doesn't flinch.
18 D LEO: Coach.
19 D OTIS: Leo.
20 D LEO: Same time tomorrow?
21 D OTIS: Same time.
22 A ¶ She smiles.
23 A He feeds another ball.

### SCENE s00307 | INT. LAUNDROMAT - BACK TABLE - NIGHT
Detected names (may be incomplete or contain aliases): IGGY, OYELOWO-BRANDT, CORRIE
* 1 A ¶ Flat fluorescent light.
* 2 A Rows of dryers tumbling.
* 3 A A folding table.
* 4 A A wall of coin machines.
5 A ¶ Two siblings, a brother and a sister, fold clothes in silence.
6 A ¶ IGNATIUS "IGGY" OYELOWO-BRANDT (30s, grease-stained flannel, hands that don't stay still) folds towels with military corners.
7 A ¶ CORINTHIA "CORRIE" OYELOWO-BRANDT (30s, nurse's clogs, tired eyes) folds a child's pajamas into a square the size of her palm.
* 8 A ¶ The machines hum.
* 9 A A dryer thumps.
10 D IGGY: You're doing it wrong.
11 D CORRIE: It's pajamas.
12 D IGGY: There's a way.
13 D CORRIE: Then show me.
14 A ¶ He doesn't.
15 A She keeps folding.
* 16 A A quarter rattles inside a dryer.
17 D IGGY: How's Mom?
18 D CORRIE: Tuesday she asked who you were.
19 D IGGY: Tuesday I wasn't there.
20 D CORRIE: She asked anyway.
21 D IGGY: What'd you say?
22 D CORRIE: Her son.
23 D IGGY: Good.
* 24 A ¶ Beat.
25 A He takes a shirt from the pile.
26 D IGGY [CONT'D]: Corrie, I'm sorry.
27 D CORRIE: For what?
28 D IGGY: I don't know. Everything.
29 D CORRIE: That's not an apology. That's a weather report.
30 D IGGY: I'm trying.
31 D CORRIE: I know you are.
32 A ¶ She folds.
33 A He folds.
* 34 A A buzzer sounds on a distant machine.
35 D IGGY: I could come Sunday.
36 D CORRIE: You said that last month.
37 D IGGY: I came.
38 D CORRIE: For ten minutes.
39 D IGGY: It was ten good minutes.
40 D CORRIE: It was ten minutes you spent on your phone.
41 D IGGY: It was the shop. A guy needed a quote.
42 D CORRIE: Iggy.
43 D IGGY: Okay.
44 D CORRIE: She's not going to be here forever.
45 D IGGY: I know.
46 D CORRIE: You don't.
47 A ¶ He stops.
48 A Sets down the shirt.
49 A Looks at her for the first time.
50 D IGGY: Corrie, I know.
51 A ¶ She meets his eyes.
* 52 A A long beat.
53 A Then she hands him the pajamas.
54 D CORRIE: Do it the way you said.
55 A ¶ He takes them.
56 A Unfolds.
57 A Folds again, slowly, creasing each edge with his thumbnail.
58 D IGGY: See?
59 D CORRIE: That's better.
60 D IGGY: It's the same.
61 D CORRIE: It's better.
* 62 A ¶ A dryer finishes and goes quiet.
* 63 A The room hums on.
64 A They reach for the next pile together.

### SCENE s00308 | EXT. PIER AMUSEMENT ARCADE - NIGHT
Detected names (may be incomplete or contain aliases): NOVA, ABIOLA-HARTLEY, FLISS, OKONJO-VARGA, WYNDHAM TIERNEY-ASARE
* 1 A ¶ Neon, salt air, the electronic bleat of a hundred machines.
* 2 A A claw crane glows at the end of a row.
3 A ¶ NOVELLA "NOVA" ABIOLA-HARTLEY (20s, sequined jacket) feeds quarters into the crane.
4 A Her friend FELICITY "FLISS" OKONJO-VARGA (20s, cardigan, two ice creams) hovers behind.
5 A A stranger, WYNDHAM TIERNEY-ASARE (20s, windbreaker, a tin of tokens), waits for the machine.
6 A ¶ She presses the stick.
* 7 A The claw descends.
* 8 A It grips a plush octopus.
* 9 A It lifts.
* 10 A It drops it.
11 A ¶ She groans and slaps the glass.
12 A He stifles a laugh.
13 A She turns on him.
14 D NOVA: Don't.
15 D WYNDHAM: I didn't.
16 D NOVA: You were going to.
17 D WYNDHAM: I was going to say nice try.
18 A ¶ He slides a token into the slot.
19 A Their eyes meet.
20 A She steps aside.
21 A He takes the stick.
* 22 A The claw descends over the octopus.
23 A Fliss licks her ice cream.
24 A Watches them both.
* 25 A ¶ The claw grabs.
* 26 A Lifts.
* 27 A Shakes.
* 28 A The octopus swings and holds, then drops into the chute.
* 29 A It tumbles out.
30 A ¶ He picks it up.
31 A Hands it to Nova.
32 A She takes it.
33 D NOVA: Thank you.
34 D WYNDHAM: You're welcome.
35 A ¶ They speak at once and laugh.
36 A Fliss clears her throat.
37 D FLISS (to Nova): We're going to miss the Ferris wheel.
38 D NOVA (to Fliss): Go on. I'll catch up.
39 A ¶ Fliss shrugs.
40 A Goes.
41 A Nova turns to Wyndham, hugging the octopus.
42 D NOVA [CONT'D]: So.
43 D WYNDHAM: So.
44 A ¶ She looks at the octopus.
45 A He looks at his shoes.
* 46 A A siren whoops from a driving game and someone shouts jackpot.
47 A She starts to speak and the lights on the pier go out.
* 48 A ¶ Darkness.
49 A A collective moan from the arcade.
* 50 A A beat.
51 A Then the lights return, brighter than before, and he is gone.
52 A She is alone with the octopus.
53 A ¶ She looks around.
54 A Down the row, by the Ferris wheel entrance, he is waving.
55 A Her ticket is in his hand.

### SCENE s00309 | INT. ABANDONED LIGHTHOUSE LENS ROOM, MOONLIGHT - NIGHT
Detected names (may be incomplete or contain aliases): CALLISTA ROUSSEL-OKAFOR, DES, ACHTERBERG-NNAMDI, MARIGOLD PEMBERTON-ASANTE, ZEPHYR KOWALCZYK-ADEYEMI, INSPECTOR MALACHI QUARTERMAINE-OSEI
* 1 A ¶ A great Fresnel lens, dark, towering over the room like a cathedral of cut glass.
* 2 A A rusted catwalk wraps it.
* 3 A Wind sings through broken panes.
4 A ¶ Four people sit on crates in a loose circle, sharing a thermos.
5 A They are strangers by temperament, partners by accident.
6 A ¶ CALLISTA ROUSSEL-OKAFOR (30s, field jacket, a laptop open on her knee) taps keys.
7 A DESMOND "DES" ACHTERBERG-NNAMDI (40s, bearded, binoculars at his chest) glasses the sea.
8 A MARIGOLD PEMBERTON-ASANTE (50s, silver hair, birdwatcher's vest) tends the thermos.
9 A And young ZEPHYR KOWALCZYK-ADEYEMI (20s, headphones at his neck, restless) paces the catwalk.
* 10 A ¶ The sea beyond is flat as slate.
* 11 A The moon is a coin on it.
12 D MARIGOLD (to the group): Tea, anyone?
13 D DES: Please.
14 D CALLISTA: Not now.
15 D ZEPHYR (from above): Nothing yet.
16 D MARIGOLD (muttering): Always nothing yet, then everything at once.
17 A ¶ She pours.
* 18 A The steam rises in a thin ribbon.
19 A Callista types.
20 A Des lowers the binoculars.
21 D DES (to Callista): You're sure of the coordinates?
22 D CALLISTA: I'm sure of the data. Whoever sent it, less so.
23 D DES (to himself): It's a wild goose chase.
24 D ZEPHYR (calling down): It's a boat.
25 A ¶ They all look up.
26 A Zephyr points.
* 27 A On the black water, a light, small and white, is moving toward the lighthouse.
28 D CALLISTA: That's not on the schedule.
29 D DES: No lights, then lights.
30 D MARIGOLD: Hush. Let it come.
* 31 A ¶ The boat grows.
* 32 A A slow engine.
33 A Zephyr descends the catwalk with quick steps.
34 A The four of them gather at the window.
* 35 A Wind whines in the glass.
* 36 A ¶ The boat slides up to the rocks.
37 A A figure climbs onto the landing.
38 A Thin, soaked, a case in one hand.
39 A He is already climbing the iron stair.
40 A ¶ INSPECTOR MALACHI QUARTERMAINE-OSEI (50s, long coat, hat in hand) steps into the lens room, and stops.
41 A He looks at each of them in turn.
42 D MALACHI: Good evening. Thank you for waiting.
43 A ¶ Callista closes her laptop.
44 A Slowly.
45 A Des lowers his binoculars.
46 A Marigold sets down the thermos.
47 A Zephyr moves, quietly, between the inspector and the stair.
48 D MALACHI [CONT'D] (mildly): Please. Don't. I'm here as a friend.
49 A ¶ He sets the case on a crate and opens it.
* 50 A Inside, a folded sheet of paper and a revolver.
51 D MALACHI [CONT'D]: One of you wrote to me. I should like to know which.
* 52 A ¶ Silence.
* 53 A The moon cuts through the lens and throws one blade of light across the floor.

### SCENE s00310 | INT. ORBITAL STATION "HALCYON" - OBSERVATION RING - SHIP NIGHT
Detected names (may be incomplete or contain aliases): COMMANDER YUSUF ADEWUNMI-LINDGREN, HELENA OKONKWO-BRANDT, ENGINEER TOMASZ NAKASHIMA-AMADI, TECH IRIS MBEKI-HALVORSEN
* 1 A ¶ A curved window onto a gray world.
2 A Four crew in thermal suits sit at a low table around a flickering screen.
3 A ¶ COMMANDER YUSUF ADEWUNMI-LINDGREN (50s) speaks first.
4 A DR. HELENA OKONKWO-BRANDT (40s) answers.
5 A ENGINEER TOMASZ NAKASHIMA-AMADI (30s) interrupts.
6 A And the youngest, TECH IRIS MBEKI-HALVORSEN (20s), says nothing.
7 D YUSUF: Final report. Oxygen reserves at eleven percent.
8 D HELENA: That's four days.
9 D TOMASZ: Four days if nobody breathes.
10 D YUSUF: Nobody's counting breaths, Tomasz.
11 D TOMASZ: I am.
12 D HELENA: Commander, the relief ship?
13 D YUSUF: Nine days out.
14 D HELENA: Then we're five short.
15 D TOMASZ: Five.
16 D YUSUF: We are going to be fine.
17 D IRIS (quietly): No, we're not.
18 A ¶ They look at her.
19 A She looks at the window.
20 D IRIS [CONT'D]: But we can say it like we are.
21 A ¶ Yusuf nods.
22 A Helena reaches across the table and takes Iris's hand.
23 A Tomasz folds his arms and stares at the gray world turning below.

### SCENE s00311 | INT. FEDERAL COURTROOM 11 - DAY
Detected names (may be incomplete or contain aliases): JUDGE ROSALIND ABERNATHY-KOMOLAFE, COUNSEL BENEDICT ASANTE-FAIRWEATHER, PRISCILLA DUARTE-LINDQVIST, ATTORNEY MARCUS OYELOWO-STRAND, THE WOMAN, NAVY SUIT, DELPHINA MWANGI-HOLCOMB, JOCASTA
* 1 A ¶ Oak paneling.
* 2 A A seal on the wall.
* 3 A A jury box with twelve empty chairs.
* 4 A It is a pretrial conference, and the room has the hush of a library.
5 A ¶ JUDGE ROSALIND ABERNATHY-KOMOLAFE (60s, robe, reading glasses) presides.
6 A At the plaintiff's table: COUNSEL BENEDICT ASANTE-FAIRWEATHER (50s, three-piece suit) and his associate, MS. PRISCILLA DUARTE-LINDQVIST (20s, legal pad, nervous knee).
7 A At the defense table: ATTORNEY MARCUS OYELOWO-STRAND (40s, rolled sleeves) and his co-counsel, A WOMAN IN A NAVY SUIT (30s), who has not been introduced.
8 A The court reporter, DELPHINA MWANGI-HOLCOMB (50s), types without looking up.
9 D JUDGE ROSALIND: Counsel, the pretrial order states discovery closed March first.
10 D BENEDICT: It did, Your Honor.
11 D MARCUS: It did not.
12 D JUDGE ROSALIND: Mr. Oyelowo-Strand?
13 D MARCUS: Your Honor, the plaintiff's production of the August emails came forty days late.
14 D BENEDICT: Because your client's servers were corrupted.
15 D MARCUS: Because your client's counsel was unreachable.
16 D PRISCILLA (whispering to Benedict): That's not what the file says.
17 D BENEDICT (whispering back): I know.
18 D JUDGE ROSALIND: Counsel, address the court, not each other.
19 D BENEDICT: Yes, Your Honor.
20 A ¶ The woman in the navy suit leans toward Marcus and passes a folded note.
21 A He reads it.
22 A His jaw tightens.
23 D MARCUS: Your Honor, with the court's permission, may I introduce my co-counsel?
24 D JUDGE ROSALIND: Please.
25 D THE WOMAN (rising): Jocasta Reyes-Abiola, Your Honor. Appearing for the defense.
26 D JOCASTA (to the room): We have a motion.
27 A ¶ Priscilla stops writing.
28 A Benedict removes his glasses.
29 A Delphina's fingers pause over the keys.
30 D JUDGE ROSALIND: Ms. Reyes-Abiola, proceed.
31 D JOCASTA: We move to compel the original server logs from August fourteenth.
32 D BENEDICT: Your Honor, those logs do not exist.
33 D JOCASTA: Then Mr. Asante-Fairweather can explain to the court why his firm billed us for reviewing them.
* 34 A ¶ Silence.
35 A Priscilla, very softly, to no one:
36 D PRISCILLA: Oh no.
37 A ¶ Benedict sets down his pen and does not look at her.
38 D JUDGE ROSALIND: Mr. Asante-Fairweather, would you care to respond?
39 D BENEDICT (slowly): I would like a recess, Your Honor.
40 D JUDGE ROSALIND: Denied. Respond.

### SCENE s00312 | INT. BOTANICAL GARDEN ORCHID HOUSE - MORNING
Detected names (may be incomplete or contain aliases): DETECTIVE SOLOMON OKAFOR-LINDQVIST, CURATOR AMELIA DRUMMOND-ADEBAYO, THADDEUS BROUGHAM-ASANTE
* 1 A ¶ Humid green dim.
* 2 A Mist beading on glass.
* 3 A A path of wet flagstones between banks of blooms.
4 A ¶ DETECTIVE SOLOMON OKAFOR-LINDQVIST (50s, trench coat, notebook) crouches beside an empty planter.
* 5 A A tag reads PHALAENOPSIS "GHOST".
* 6 A Nothing grows there.
7 A ¶ CURATOR AMELIA DRUMMOND-ADEBAYO (40s, cardigan, trowel in her back pocket) stands over him, arms crossed.
8 D SOLOMON: When did you last see it?
9 D AMELIA: Last Thursday. Or last Wednesday.
10 D SOLOMON: Which?
11 D AMELIA: I water them in sequence. Thursday is the third bench.
12 D SOLOMON: So Thursday.
13 D AMELIA: So Thursday.
* 14 A ¶ Footsteps on the gravel.
15 A A young man comes round the corner at a trot, apron flapping.
16 A A volunteer: THADDEUS BROUGHAM-ASANTE (20s, name tag on a lanyard).
17 A He freezes when he sees the detective.
18 D THADDEUS: Sorry. I didn't know.
19 D AMELIA: Thaddeus. Go back to the lilies.
20 D THADDEUS: Yes, ma'am.
21 A ¶ He does not move.
22 A Amelia does not look at him.
23 A Solomon, still crouched, studies Thaddeus's hands.
24 A They are stained with potting soil, and a single white petal is stuck to his wrist.
25 D SOLOMON: Thaddeus.
26 D THADDEUS: Sir.
27 D AMELIA: Thaddeus.
28 A ¶ Their voices collide on the name.
29 A Thaddeus swallows.
30 A He peels the petal off his wrist and holds it out on his open palm.
31 D THADDEUS [CONT'D]: It was dying.
32 A ¶ Amelia says nothing.
33 A Solomon straightens slowly, closing his notebook, and in the green dim the mist begins, gently, to settle.

### SCENE s00313 | INT. DEEP-SEA HABITAT "ABYSSAL ONE" - MESS HALL - SHIP NIGHT
Detected names (may be incomplete or contain aliases): CAPTAIN DOROTHEA OKORO-VALLENTINE, BART, LINDBERG-NWOSU, MARINE BIOLOGIST SELENE ADEBAYO-KOWALSKI, MEDIC IGNATIUS FAIRCHILD-OSEI
* 1 A ¶ A cramped steel cylinder, portholes black with pressure.
* 2 A A galley table bolted to the floor.
3 A Four crew sit with untouched trays.
4 A ¶ CAPTAIN DOROTHEA OKORO-VALLENTINE (50s).
5 A ENGINEER BARTHOLOMEW "BART" LINDBERG-NWOSU (40s).
6 A MARINE BIOLOGIST SELENE ADEBAYO-KOWALSKI (30s).
7 A MEDIC IGNATIUS FAIRCHILD-OSEI (30s).
8 D DOROTHEA: Say it again.
9 D BART: The hull is whispering.
10 D SELENE: That's metal contraction.
11 D BART: It's not contraction. It's tonal. It repeats.
12 D IGNATIUS: Repeats what?
13 D BART: Seven beats. Pause. Seven beats.
14 D SELENE: Bart, we're nine hundred meters down. Everything whispers.
15 D BART: Not in sevens.
16 D DOROTHEA: Have you logged it?
17 D BART: Three times. Systems say nominal.
18 D IGNATIUS: Maybe the systems are lying.
19 D SELENE: Systems don't lie.
20 D IGNATIUS: They omit.
21 D DOROTHEA: Enough. Bart, if it's not a fault, what is it?
22 D BART: A signal.
23 D SELENE: From where?
24 D BART: Outside.
25 D IGNATIUS: There's nothing outside.
26 D BART: There's a trench outside, three kilometers deep.
27 D SELENE: Whales sing in sevens sometimes.
28 D BART: Not at this depth.
29 D DOROTHEA (low): Play it.
30 D BART: Captain--
31 D DOROTHEA: Play. It.
32 A ¶ Bart reaches under the table.
* 33 A A speaker crackles.
* 34 A Over the hum of the ventilators, a low hollow knock, seven times.
* 35 A A pause.
* 36 A Seven times.
37 D SELENE (whispering): That's inside the hull.
38 D IGNATIUS: That's coming from the airlock.
39 D DOROTHEA: Who's in the airlock?
40 D BART: Nobody.
41 D IGNATIUS: Nobody's in there.
42 D SELENE: Then who's knocking?
* 43 A ¶ The knocking stops.
* 44 A Silence, for a full, heavy breath.
* 45 A Then, from the speaker, the same seven beats, slower, and a voice, far away and fragmentary, that sounds like Selene's own.
46 D SELENE [CONT'D] (barely): That's me.
47 D DOROTHEA: Shut it off.
48 D BART: I can't.
49 D DOROTHEA: Bartholomew.
50 D BART: It's not coming from the system, Captain. It's coming through the glass.
51 A ¶ Selene stands.
* 52 A Her chair clatters.
53 A She backs toward the bulkhead.
54 A The four of them stare at the black porthole.
* 55 A On its surface, in condensation, one finger-width at a time, a handprint begins to bloom.

### SCENE s00314 | INT. LAKESIDE BOATHOUSE - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): DOSIA, ELIAS WELLINGTON-ADEBAYO, WOMAN, RUTH MARCHETTI-OSEI, PERRY, ADEKUNLE-STRAND
* 1 A ¶ A weathered boathouse leaning toward the water.
* 2 A Cedar planks gone silver.
* 3 A A rowing shell hangs from the rafters on rope slings, pale as a bone.
* 4 A Light slants through gaps in the boards and lies across the floor in long bars.
* 5 A ¶ Dust turns in the light.
* 6 A A radio, tuned between stations, hisses faintly from the workbench.
7 A ¶ THEODOSIA "DOSIA" WELLINGTON-ADEBAYO (60s, a man's cardigan over a housedress, hair tied up with a bootlace) sits on an overturned bucket, sanding the oar of a long-dead husband.
8 A She works with patient, practiced strokes.
9 A She has done this every autumn for thirty years.
10 A ¶ ELIAS WELLINGTON-ADEBAYO (30s, city coat, rental-car keys on his finger) stands at the threshold.
11 A He has not stepped inside.
12 A His shoes are wrong for the planks.
13 D ELIAS: Mama.
14 D DOSIA: You're late.
15 D ELIAS: Traffic.
16 D DOSIA: There's no traffic on the lake road.
17 D ELIAS: There was a deer.
18 A ¶ She sands.
* 19 A The oar's grain comes up gold under her thumb.
20 D DOSIA: You came to talk about the house.
21 D ELIAS: I came to see you.
22 D DOSIA: Yes. And to talk about the house.
23 A ¶ He steps in at last.
* 24 A The floorboards give a long, low groan.
25 A He looks at the shell above him.
26 A Reaches up.
27 A Does not quite touch it.
28 D ELIAS: It's still here.
29 D DOSIA: Where would it go?
30 D ELIAS: Dad would've sold it.
31 D DOSIA: Your father would have rowed it into the lake and kept going.
32 D ELIAS: Mama.
33 D DOSIA: I'm only saying.
34 A ¶ She finally looks up.
35 A Studies his face.
36 A His coat.
37 A His keys.
38 D DOSIA [CONT'D]: You look like a man who's been told to be gentle.
39 D ELIAS: Ruth thinks--
40 D DOSIA: Ruth thinks a great many things from three states away.
41 D ELIAS: She thinks you should come stay with us.
42 D DOSIA: In an apartment.
43 D ELIAS: A good apartment.
44 D DOSIA: Elias.
45 D ELIAS: Mama, the stairs. The pipes. Winter.
46 A ¶ She sets down the sandpaper.
47 A Brushes dust off her knee with a slow hand.
48 D DOSIA: Tell me, did you ever once, as a boy, carry that oar?
49 D ELIAS: Once.
50 D DOSIA: And?
51 D ELIAS: I dropped it.
52 D DOSIA: Into the lake.
53 D ELIAS: Dad had to swim for it.
54 D DOSIA: He was furious.
55 D ELIAS: He was laughing.
56 D DOSIA: Both things can be true.
* 57 A ¶ The radio hisses.
* 58 A A gull cries somewhere over the water.
59 A Elias sinks onto a coil of rope, and the boathouse tilts a little, and holds.
60 A ¶ A WOMAN's voice calls from the dock outside, bright and brisk.
61 D RUTH [O.S.]: Elias? Is she in there?
62 A ¶ Elias closes his eyes.
63 A Dosia's mouth thins.
64 A She picks up the sandpaper.
65 D DOSIA (low): You brought her.
66 D ELIAS: She drove. I didn't know--
67 D DOSIA: Of course you didn't.
68 A ¶ RUTH MARCHETTI-OSEI (30s, parka, a folder under her arm) steps into the doorway, silhouetted against the lake.
69 A She sees the shell above them, the oar in Dosia's lap, and the quiet.
70 A She stops.
71 D RUTH: Oh. I'm interrupting.
72 D DOSIA: Yes.
73 D RUTH: I'll wait outside.
74 D DOSIA: You'll come in. And you'll stand where I can see you.
75 A ¶ Ruth does.
76 A The three of them make an awkward triangle on the creaking floor.
* 77 A The light bars stretch across their feet.
78 D DOSIA [CONT'D]: Now. Which of you is going to tell me the real reason you're here?
79 A ¶ Neither answers.
* 80 A The radio hisses between stations.
81 A ¶ A small figure appears at the water door at the back: PEREGRINE "PERRY" ADEKUNLE-STRAND (10, wet to the knees, a bucket of minnows).
82 A He stops, takes in the three adults, and decides to be invisible.
83 D DOSIA [CONT'D]: Perry. Put the minnows in the trough.
84 D PERRY: Yes, Miss Dosia.
85 A ¶ He tiptoes past them to the trough, pours, and tiptoes out the way he came.
86 D DOSIA [CONT'D] (softly): Then I'll finish the oar.
87 A ¶ She resumes sanding.
88 A Slow, rhythmic, patient.
89 A Elias watches his mother's hands.
90 A Ruth watches Elias.
* 91 A And the shell hangs above them like a held breath.

### SCENE s00315 | INT. ARMORED PARKING GARAGE, P4 - NIGHT
Detected names (may be incomplete or contain aliases): VIC, ODUYA-LINDGREN, ANNA, BRAITHWAITE-NKOSI, REG, ASANTE-HOLM, DEACON TIMOTHY ABARA-VOSS
* 1 A ¶ Concrete.
* 2 A Sodium glare.
3 A Four people in a ring around a black sedan with its trunk open.
4 A ¶ VIKTOR "VIC" ODUYA-LINDGREN (40s, tailored coat).
5 A ANNELIESE "ANNA" BRAITHWAITE-NKOSI (30s, gloves).
6 A REGINALD "REG" ASANTE-HOLM (50s, armed).
7 A And the fourth, tied to a chair, a gag around his neck: DEACON TIMOTHY ABARA-VOSS (60s, cufflinks).
8 D VIC: Anna, take the gag off.
9 D ANNA: Vic, he'll shout.
10 D VIC: He won't.
11 D REG: He will.
12 D VIC: Deacon, will you shout?
13 D DEACON (hoarse): No.
14 D ANNA: He's lying.
15 D VIC: He's tired. Tired men don't shout.
16 D DEACON: Please, Victor.
17 D VIC: Don't "please" me. You sold the list.
18 D DEACON: I sold nothing.
19 D REG: We've got the bank record.
20 D DEACON: Then the bank record's wrong.
21 D ANNA: Reg, check his phone.
22 D REG: Already did. Nothing.
23 D ANNA: Nothing doesn't mean innocent.
24 D VIC: No. It means careful.
25 D DEACON: Victor, listen. I wasn't the one.
26 D VIC: Then who?
27 D DEACON (a long beat): Ask her.
28 A ¶ Every head turns toward Anna.
29 A She doesn't flinch.
30 D ANNA: That's a nice try, Deacon.
31 D DEACON: Check her laptop.
32 D REG: Anna.
33 D ANNA: Reg, don't.
34 D VIC: Anna.
35 A ¶ The ring tightens.
* 36 A In the silence, a distant door clanks open and footsteps echo down the ramp.

### SCENE s00316 | INT. OPERA HOUSE, FLY GALLERY - NIGHT
Detected names (may be incomplete or contain aliases): IMOGEN LARKSPUR-ADEWALE, HOLDEN PRYCE-NWANKWO, SALOME BRAITHWAITE-OKORO, ZHENYA, ABARA-KOZLOV
* 1 A ¶ Far above the stage, a catwalk of iron grating hung with ropes and counterweights.
* 2 A Below, the orchestra tunes in a distant tide.
3 A Four figures in stagehand blacks creep along the rail.
4 A ¶ The first is IMOGEN LARKSPUR-ADEWALE (40s), who holds a lantern shuttered to a slit.
5 A The second is HOLDEN PRYCE-NWANKWO (50s), who carries a coil of rope over one shoulder.
6 A The third is SALOME BRAITHWAITE-OKORO (30s), who moves like water.
7 A The fourth, last in line, is YEVGENY "ZHENYA" ABARA-KOZLOV (20s), who is sweating through his gloves.
8 A ¶ She raises two fingers.
9 A He freezes behind her.
10 A She points at a hanging chandelier of painted canvas, ten feet away.
11 A He nods, though he cannot see what she means.
12 A She takes the rope from him, loops it round the rail, and tests it with her weight.
13 A He swallows.
* 14 A The chandelier turns slowly in the draft.
15 D IMOGEN (whispering): Ten minutes.
16 D HOLDEN: Eight.
17 D SALOME: Seven, if he stops shaking.
18 D ZHENYA: I'm not shaking.
19 D SALOME: You're humming.
20 D ZHENYA: I'm humming because he's humming.
21 D HOLDEN: Nobody's humming.
22 A ¶ They listen.
* 23 A Below, the orchestra falls silent.
* 24 A A hush rolls up through the dark.
* 25 A A single violin begins, and from beneath the stage a soprano's voice rises in a glissando so pure it makes Imogen's grip tighten on the lantern.
26 A ¶ She turns to him, and he to her.
27 A Her eyes glitter.
28 A His mouth is open.
29 A Whoever they are to each other, in this moment they share a single trembling breath.
30 D SALOME (pointing): Now.
31 A ¶ They move.
32 A She drops the rope.
33 A He catches it.
34 A She slides down.
35 A He braces.
* 36 A The chandelier lurches, and a hundred glass beads shiver.
37 A Below, someone in the audience gasps.
38 D IMOGEN (hissing): Abort!
39 D HOLDEN: Too late!
* 40 A ¶ The chandelier swings free and crashes silently into the curtain, a harmless explosion of painted canvas.
41 A The audience, delighted, applauds.
42 A The four of them crouch on the catwalk, frozen, as the soprano holds her note and the whole house roars.

### SCENE s00317 | INT. REGIONAL SWIM CENTER - POOL DECK - EARLY MORNING
Detected names (may be incomplete or contain aliases): COACH MARISOL TREVELYAN-ADEWALE, ISAURA PRZYBYLSKI-MBEKI
* 1 A ¶ Chlorine haze.
* 2 A Lane ropes bobbing.
* 3 A Rows of empty bleachers.
4 A A single swimmer cuts lengths in lane four.
5 A ¶ COACH MARISOL TREVELYAN-ADEWALE (50s, whistle, towel round her neck) crouches at the pool edge with a stopwatch.
6 A On the starting block, soaked, goggles pushed up on her forehead, waits ISAURA PRZYBYLSKI-MBEKI (17, racing suit, shoulders too narrow for her ambitions).
7 D MARISOL: Again.
8 D ISAURA: I just did two hundred.
9 D MARISOL: And you'll do another.
10 D ISAURA: Coach.
11 D MARISOL: Isaura.
12 D ISAURA: My arms are lead.
13 D MARISOL: Lead floats if you move fast enough.
14 A ¶ Isaura laughs, breath ragged.
15 A Lowers her goggles.
16 D MARISOL [CONT'D]: On my whistle.
17 D ISAURA: On your whistle.
18 A ¶ Marisol raises it.
19 D MARISOL: Go.
20 A ¶ Isaura launches.
* 21 A The water folds around her.
22 A Marisol clicks the watch.
23 A Walks the deck beside the lane, keeping pace.
24 A ¶ At the wall, Isaura tumbles, pushes off.
25 A Marisol bends lower.
26 D MARISOL [CONT'D]: Long. Long.
27 D ISAURA [O.S.] (gasping): I'm trying!
28 D MARISOL: Long, Isaura!
29 A ¶ Isaura touches the far wall.
30 A Surfaces.
31 A Breathes.
32 A Marisol stops the watch.
33 A Looks at it.
34 D MARISOL [CONT'D]: Better.
35 D ISAURA: How much?
36 D MARISOL: Two-tenths.
37 D ISAURA: That's all?
38 D MARISOL: That's everything.
39 A ¶ Isaura grins.
40 A Pulls herself onto the deck and sits, legs dangling.
41 A Marisol sits beside her.
42 A They both stare at the water.
43 D ISAURA: Can I ask something?
44 D MARISOL: You can ask.
45 D ISAURA: Did you ever want to quit?
46 D MARISOL: Every day.
47 D ISAURA: But you didn't.
48 D MARISOL: I got up. That's the whole trick.
49 D ISAURA: That's not a trick. That's just getting up.
50 D MARISOL: Yes. Exactly.
51 A ¶ They say the next line together.
52 D MARISOL: Again?
53 D ISAURA: Again.
54 A ¶ They laugh.
55 A Isaura stands.
56 A Marisol rises.
* 57 A The water settles into stillness, waiting for them.

### SCENE s00318 | INT. PRESCHOOL PLAYGROUND - NAP TIME - AFTERNOON
Detected names (may be incomplete or contain aliases): GRANDMA ODALIE KOWALSKI-ADEYEMI, BERTIE, NNAMDI-LINDGREN, AUNT RUFINA PRYCE-OYELARAN, COUSIN TAVIAN BRAITHWAITE-OSEI, BABY SITTER, JOJO, ABARA-FENWICK, LITTLE ZURI ADEKUNLE-HOLM
* 1 A ¶ Foam mats.
* 2 A Mobile of felt moons.
3 A Six figures in miniature chairs at a very small table, holding very small teacups.
4 A ¶ GRANDMA ODALIE KOWALSKI-ADEYEMI (70s, church hat).
5 A UNCLE BARTHOLOMEW "BERTIE" NNAMDI-LINDGREN (50s, delivery uniform).
6 A AUNT RUFINA PRYCE-OYELARAN (40s, scrubs).
7 A COUSIN TAVIAN BRAITHWAITE-OSEI (30s, suit).
8 A THE BABY SITTER, MS. JOSEPHINE "JOJO" ABARA-FENWICK (20s, lanyard).
9 A And the child, LITTLE ZURI ADEKUNLE-HOLM (4, tutu over snow pants).
10 D ZURI (solemn): More tea, please.
11 D ODALIE: Of course, dear.
12 A ¶ She pours from an empty pot.
13 A Bertie sips from a cup of nothing.
14 A Rufina checks her watch.
15 A Tavian's phone buzzes; he silences it.
16 A Jojo mouths along with every word.
17 D ZURI: She spilled.
18 D BERTIE: She did?
19 D RUFINA: She did not.
20 D TAVIAN: She did a little.
21 D ODALIE: He's lying. She spilled a lot.
22 D ZURI: He did it.
23 D JOJO: Who's he?
24 D ZURI: Him.
25 A ¶ Everybody points at somebody else.
26 D ZURI [CONT'D]: Nap time!
27 A ¶ They lower their heads onto the table, one by one, a perfect silent tableau.
28 A Zuri peeks.
29 A Smiles.
30 A Lowers her head too.

### SCENE s00319 | EXT. ABANDONED DRIVE-IN SNACK STAND ROOF - NIGHT
Detected names (may be incomplete or contain aliases): CALLUM ODUYA-LINDQVIST, NADIA, ABARA-FENWICK
* 1 A ¶ A flat tar roof under a smear of stars.
* 2 A A cracked neon cone sign, unlit.
* 3 A A cooler.
* 4 A Two lawn chairs.
5 A ¶ Two teenagers sit with their backs to the sky.
6 A ¶ CALLUM ODUYA-LINDQVIST (16, skinny, hoodie, hands tucked in sleeves) watches the road below.
7 A ¶ NADEZHDA "NADIA" ABARA-FENWICK (16, cut-off jeans, scab on one knee) lies flat, staring up.
* 8 A ¶ Somewhere far off, a freight train rolls.
9 D NADIA: Seven.
10 D CALLUM: Seven what?
11 D NADIA: Satellites. Since you sat down.
12 D CALLUM: That's not satellites.
13 D NADIA: It's satellites.
14 D CALLUM: It's planes.
15 D NADIA: Planes blink.
16 A ¶ He doesn't argue.
17 A Leans back.
* 18 A The tar creaks.
19 D CALLUM: My dad's driving back tomorrow.
20 D NADIA: From where?
21 D CALLUM: Reno.
22 D NADIA: What's in Reno?
23 D CALLUM: Nothing. That's the point.
24 A ¶ She turns her head toward him.
25 D NADIA: Is he staying?
26 D CALLUM: He says so.
27 D NADIA: Do you believe him?
28 D CALLUM: He bought a couch.
29 D NADIA: That's not the same.
30 D CALLUM: He's never bought a couch.
31 A ¶ She sits up.
32 A Pulls her knees to her chest.
33 A He opens the cooler and offers her a soda.
34 A She takes it.
35 D NADIA: Mine's leaving for good, you know.
36 D CALLUM: Your mom?
37 D NADIA: Mine's mom, yes, my mom. Moving to Tucson with a guy named Gordon.
38 D CALLUM: Gordon sounds fake.
39 D NADIA: Gordon sounds like a sofa.
40 D CALLUM: He might be your dad's couch.
41 A ¶ She laughs, loud, startling a nighthawk off the sign.
42 A Callum smiles, too, for the first time.
* 43 A The freight train's horn fades.
44 D NADIA: You'll still be here.
45 D CALLUM: Yeah.
46 D NADIA: Promise.
47 D CALLUM: I'm not going anywhere. There's nowhere to go.
48 D NADIA: That's not a promise.
49 D CALLUM: It's the only kind I have.
50 A ¶ She tips her soda against his.
51 A They drink.
52 A A shooting star cuts across the sky and neither of them says anything, though both see it.
53 D NADIA: Make a wish.
54 D CALLUM: I did.
55 D NADIA: What was it?
56 D CALLUM: If I tell you, it won't work.
57 D NADIA: That's superstition.
58 D CALLUM: It's a rule.
59 D NADIA: Same thing.
60 D CALLUM: Not tonight.
61 A ¶ She lies back.
62 A He lies down, too, shoulder to shoulder, and the stars wheel on above them.

### SCENE s00320 | INT. LIGHTHOUSE LAMP ROOM TEA SHOP - DUSK
Detected names (may be incomplete or contain aliases): ODALYS VANCE, BRAM OKONKWO, HESTER PELL
* 1 A ¶ The lamp room of a decommissioned lighthouse, glazed on all sides, the great lens long ago swapped for six mismatched tables.
* 2 A Salt has frosted the windows from outside.
* 3 A Inside, steam from a copper urn beads on the brass rail.
* 4 A Every cup in the room is chipped in the same place, as if by one clumsy hand.
5 A ¶ ODALYS VANCE, forties, a insurance assessor in a rain-spotted camel coat, sits with her back to the sea.
* 6 A Her notebook is closed.
* 7 A Her pen is not.
8 A ¶ BRAM OKONKWO, sixties, the shop's owner, a broad man with flour-white forearms and a limp he pretends is a stroll, sets a teapot between them without being asked.
9 A ¶ HESTER PELL, eighties, sits at the farthest table in a knitted hat, spooning sugar into a cup that is already full.
10 A She has not looked up since Odalys arrived.
11 D ODALYS: The policy was taken out eleven days before the fire.
12 D BRAM: Eleven days is a good number. Lucky, in some places.
13 D ODALYS: The fire started in the cellar. The cellar had no wiring. No stove. Nothing that burns by itself.
14 D BRAM: Old buildings do surprise us.
15 D ODALYS: Your lease says the cellar was sealed in 1994. Someone unsealed it. Someone with a key to a door that, on paper, does not exist.
16 D BRAM: I have a great many keys. Lighthouses are sentimental about keys.
17 D ODALYS: Mr. Okonkwo, I am not accusing you.
18 D BRAM: That is the most frightening sentence in your language.
19 D HESTER (not looking up): He did not light it.
20 D ODALYS: Mrs. Pell. I did not know you were listening.
21 D HESTER: I have listened to this room for fifty years. It is the only thing I do properly.
22 D BRAM: Hester, please.
23 D HESTER: Your father kept the lamp, Bram. Mine kept the logbook. You know what a logbook is for.
24 D BRAM: Not now.
25 D ODALYS: What is it for, Mrs. Pell?
26 D HESTER: For the nights nobody wants remembered.
27 D BRAM: That book burned.
28 D HESTER: That book is in my handbag.
29 D ODALYS: Then the fire was not an accident, and it was not for the insurance.
30 D BRAM: Stop. Both of you. Stop talking.
31 D HESTER: He wrote a name on page forty. A boy. Seventeen. The wrong rocks, the right storm. Your father let the lamp go dark that night, Bram, to save oil.
32 D BRAM: He was ordered to.
33 D HESTER: He was paid to.
34 D ODALYS: And the cellar?
35 D HESTER: The cellar is where the boy was kept until the tide went out.
* 36 A ¶ The urn hisses.
37 A Bram's hand closes on the teapot handle and the pot shatters against the brass rail, tea running black across the floorboards toward Hester's shoes.
38 D BRAM: Nobody was meant to ever open that door!

### SCENE s00321 | INT. PICKLE BRINING CELLAR - DAY
Detected names (may be incomplete or contain aliases): FELIX BRANDT, MABEL TOOMEY, SOL KAPLAN
* 1 A ¶ Oak barrels stacked to the rafters.
* 2 A A single bare bulb swings on a cord.
* 3 A The smell is dill, vinegar and old secrets.
4 A ¶ FELIX BRANDT, fifties, a deli owner in a stained apron and a bow tie he refuses to remove, stands guard over a barrel with both arms spread wide.
5 A ¶ MABEL TOOMEY, thirties, a health inspector with a clipboard and a face like a closed door, taps her pen against the barrel lid.
6 A ¶ SOL KAPLAN, sixties, Felix's brother-in-law, sits on an upturned crate eating a pickle with great concentration.
7 D MABEL: Open the barrel, Mr. Brandt.
8 D FELIX: It's a pickle barrel. You've seen one. They're all the same.
9 D MABEL: Open it.
10 D FELIX (to the room): Folks, nobody panic, the lady wants to see a pickle.
11 A ¶ Sol chews.
12 A Nobody moves.
* 13 A The bulb sways.
14 D SOL (to himself): Forty years. Forty years and she wants to see a pickle.
15 D MABEL: I heard a noise from this barrel when I came in.
16 D FELIX: That's fermentation. It's alive. Like all of us.
17 D MABEL: It said "Felix."
18 D FELIX: Then it's a very friendly pickle.
19 A ¶ Mabel reaches for the lid.
20 A Felix steps in front of it.
21 A Sol quietly slides his crate three feet to the left, to block the door.
22 D FELIX [CONT'D]: Mabel, may I call you Mabel, the cellar is cold, your hands are cold, come upstairs, have a bagel.
23 D MABEL: Mr. Brandt, one thing at a time.
24 D FELIX: I'll give you two bagels.
25 D SOL (to nobody): Three. She looks like a three.
26 D MABEL: I do not take bribes.
27 D FELIX: Nobody said bribe. We said bagels.
28 D FELIX: It's a family recipe, you understand!
29 D MABEL: I understand a violation when I smell one!
* 30 A ¶ The lid thumps from inside.
31 A All three stare at it.
32 A Sol takes another bite.
33 D SOL (to the group): Nice acoustics down here.
34 A ¶ Felix puts a hand on the lid and presses down, smiling so hard his bow tie quivers.
35 D FELIX: Sol. The jar of the good relish. Upstairs. Now.
36 D SOL (rising, not hurrying): She'll want it with mustard.
37 D MABEL: I want the barrel open.
38 D FELIX: And I want a bigger deli. We don't always get.
* 39 A ¶ The lid thumps again.
40 A Mabel, without taking her eyes off Felix, writes one word on her clipboard and underlines it twice.

### SCENE s00322 | INT. SALT-DRYING SHED - TIDAL FLAT - NIGHT
Detected names (may be incomplete or contain aliases): INES MARCHETTI, DORCAS WYNN, TOBIAS LEACH
* 1 A ¶ A long timber shed on stilts above the mudflats, open at the seaward end.
* 2 A White pyramids of salt glimmer along the floor like small glaciers.
* 3 A The tide is a sound out in the dark, patient and wet.
4 A ¶ INES MARCHETTI, fifties, a brine-cracked woman in oilskins, stands at the foot of the largest heap with a lantern held low.
5 A ¶ DORCAS WYNN, thirties, a county coroner's investigator in a clean grey raincoat that does not belong here, kneels beside a shovel that someone has driven upright into the salt.
6 A ¶ TOBIAS LEACH, sixties, the shed's night watchman, sits on an overturned bucket in the doorway, his hands folded around a thermos.
7 A ¶ Ines sets the lantern down.
8 A Dorcas does not look at her.
9 A Ines watches Dorcas's hands, and Dorcas watches the shovel.
10 D INES: You found it fast.
11 D DORCAS: It was the only thing standing.
12 A ¶ Ines nods.
13 A She steps closer.
14 A She picks up a handful of salt and lets it run through her fingers back onto the pile.
15 A She does it again.
16 A She does not stop.
17 D TOBIAS: Tide turns at two. If you want the flat, you want it before.
18 D INES: We want nothing, Tobias.
19 A ¶ Dorcas pulls the shovel loose.
* 20 A The salt beneath is darker, damp, a seam of brown running down into the heap.
21 A She sets the blade against it and pushes.
22 D DORCAS: Who was working this stack last Thursday?
23 D INES: Nobody. It was closed.
24 D DORCAS: Somebody locked it. Somebody had the key.
25 A ¶ Ines hands Dorcas the lantern.
26 A She holds it a moment longer than she needs to, and she does not let go.
27 D INES: Careful. It is slippery near the edge.
28 A ¶ Dorcas takes the lantern.
29 A She notices that Ines has not asked what is under the salt.
30 A She says nothing.
31 A She digs.
* 32 A ¶ The shovel strikes cloth.
* 33 A A sleeve, grey like her own, stiff with brine.
34 A ¶ Tobias stands.
* 35 A The thermos drops, rolling across the boards.
36 D TOBIAS: I told you to leave the tide to do it.
37 D INES: Be quiet.
38 D TOBIAS: You said the tide would do it!
39 A ¶ Ines turns on him.
40 A Dorcas, still on her knees, sets down the lantern and the light throws all three shadows long against the wall.
41 D DORCAS: Which of you wants to tell me whose coat this is?
42 A ¶ Nobody answers.
* 43 A Out on the flat, the water arrives.

### SCENE s00323 | INT. STALLED CABLE CAR GONDOLA - DAY
Detected names (may be incomplete or contain aliases): RAVI, NKECHI, OLEG, PILAR
1 A ¶ RAVI, forties, a hiking guide, sits on the floor with his boots braced against the door.
2 A NKECHI, thirties, grips the rail.
3 A OLEG, seventies, holds a thermos in both hands.
4 A PILAR, twenties, films the white nothing outside on her phone.
* 5 A ¶ The gondola has been still for two hours.
6 A He licks his lips.
7 A She lowers the phone.
8 A They all look at the roof as it ticks in the cold.
9 D RAVI: Rescue said four hours. That was one hour ago, so three.
10 D NKECHI: It was two hours ago. So two.
11 D OLEG: It is whatever number keeps us calm. I choose three.
12 D PILAR: My battery is nineteen percent.
13 D RAVI: Then stop filming the clouds.
14 D PILAR: They're getting closer.
15 D NKECHI: Clouds don't get closer. We get lower.
16 D OLEG: Nobody said lower.
17 D RAVI: The cable sags in the cold. It is normal. Everybody breathe slowly, in through the nose.
18 D PILAR: I am breathing. I'm breathing so loudly.
19 D NKECHI: We are fine. Somebody pour the tea.
20 D OLEG: Last cup is mine. After that, we take turns.

### SCENE s00324 | EXT. FROZEN RESERVOIR CURLING SHEET - DAWN
Detected names (may be incomplete or contain aliases): KAI TANAKA, DESHAWN FOLEY, BIRGIT SOLBERG, ACHTERBERG, YOUNG PETRO
* 1 A ¶ A pale sheet of ice scraped smooth between two snowbanks, the far house painted in washed-out reds.
* 2 A Breath hangs over every mouth.
3 A ¶ KAI TANAKA, thirties, broom raised, crouches at the hog line.
4 A DESHAWN FOLEY, twenties, his rival, stands opposite in a borrowed jacket.
5 A BIRGIT SOLBERG, sixties, skips for Kai's team and screams numbers like a general.
6 A MRS. ACHTERBERG, seventies, the umpire, sits on a folding chair wrapped in a quilt.
7 A YOUNG PETRO, ten, Mrs. Achterberg's grandson, holds the scoreboard stick.
8 A ¶ Kai releases.
* 9 A The stone glides, curls, kisses Deshawn's guard and drifts toward the button.
10 A Birgit and Kai sweep together, frantic, shouting.
* 11 A The stone stops a hair short.
12 D BIRGIT: No!
13 D DESHAWN (grinning): Hair short, gentlemen!
14 A ¶ Kai and Deshawn shove each other chest to chest.
15 A Both slip, both go down in a tangle, brooms skittering away.
16 A Birgit hauls them apart by their collars.
17 A Petro drops the scoreboard stick and runs.
18 D MRS. ACHTERBERG: Measure it!
19 A ¶ Everyone freezes.
20 A Petro returns with the string, kneels, and stretches it from the button to the stone.
* 21 A The ice creaks like a held breath.
22 D PETRO: It's a tie.
23 A ¶ The group scatters in four directions, laughing, swearing, slapping each other on the back.

### SCENE s00325 | INT. HYPERBARIC CHAMBER - HOSPITAL BASEMENT - NIGHT
Detected names (may be incomplete or contain aliases): LENA ASHWORTH, NURSE PRIYA DESAI, WALDEMAR GRUBB
* 1 A ¶ A steel cylinder the size of a submarine hatch, riveted, round-windowed, humming.
* 2 A Dials gleam.
* 3 A A single bench runs along each wall.
* 4 A The air smells of hot metal and antiseptic.
5 A ¶ DR. LENA ASHWORTH, forties, tall, severe, with grey strands escaping from a tight bun, checks a pressure gauge with the focus of a surgeon.
6 A ¶ NURSE PRIYA DESAI, thirties, small, quick, her scrubs covered in a cardigan, adjusts an IV line on a gurney.
7 A ¶ MR. WALDEMAR GRUBB, sixties, a diver with the bends, lies on the gurney, bearded, grey-skinned, eyes bright with fear.
8 D LENA: Pressure at two atmospheres. Priya, how is his pulse?
9 D PRIYA: One-ten and climbing.
10 A ¶ Lena crosses to Priya.
11 A She leans over the gurney.
12 A She checks Waldemar's pupils.
13 A She frowns and looks up at Priya.
14 D WALDEMAR: Am I dying?
15 D LENA: You are being treated.
16 D WALDEMAR: That is not an answer.
17 D PRIYA: It's the only one she gives.
18 A ¶ Lena shoots Priya a look.
19 A Priya shrugs.
20 A She tucks the blanket tighter around Waldemar's feet.
21 D LENA: Two and a half atmospheres. Watch the oxygen. If he seizes, we have ninety seconds.
22 D PRIYA (low): Ninety seconds in a sealed tube. Wonderful.
23 D LENA: I heard that.
24 D WALDEMAR (wheezing): Tell me one thing. Which of you two is in charge?
25 A ¶ Lena and Priya both begin to answer.
26 A Both stop.
* 27 A The dial needle trembles.
* 28 A A rivet pings somewhere in the wall.
29 D PRIYA: She is.
30 D LENA: She is.
31 A ¶ They look at each other.
32 A Waldemar's whole body arches off the gurney and the alarm shrieks.
33 A Lena and Priya grab him at once, one at his shoulders, one at his knees, and hold him down while the chamber hums louder around them.
34 D LENA [CONT'D]: Three atmospheres! Now!
35 D PRIYA: Three! Going up!
36 A ¶ She hammers the valve.
* 37 A The needle climbs.
38 A Waldemar sags back, gasping, and the alarm cuts out.
* 39 A The sudden silence is enormous.
40 D WALDEMAR (a whisper): Thank you.
41 A ¶ Lena lets go first.
42 A Priya follows.
43 A Neither of them speaks.
