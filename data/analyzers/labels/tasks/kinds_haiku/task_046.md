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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0146.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01545 | INT. LUNAR TRANSIT LOUNGE - LONG PERIOD
Detected names (may be incomplete or contain aliases): RHI, ACHTERBERG-KOMA, TAD, LOWENSTEIN-OSEI
* 1 A ¶ A curved observation hall hewn from basalt.
* 2 A Banks of pale seating bolted to the floor.
* 3 A A wall-sized window frames Earth, a blue coin hung in black.
* 4 A Overhead, signage in six languages announces delays that have no end.
* 5 A ¶ The air smells of recycled coffee and warm plastic.
* 6 A A cleaning drone hums past, brushing at invisible dust.
7 A ¶ RHIANNON "RHI" ACHTERBERG-KOMA, 30s, in a faded flight jacket, sits at a corner table nursing a cold tube of coffee.
8 A Her boots are up on a spare chair.
9 A She has been here a long time.
10 A ¶ A man in a grey pressure suit approaches with a tray.
11 A THADDEUS "TAD" LOWENSTEIN-OSEI, 50s, graying, polite.
12 A He carries two tubes.
13 A He stops a respectful distance away.
14 D TAD: Is this seat taken?
15 D RHI: The chair is. The seat isn't.
16 A ¶ She moves her boots.
17 A He sits.
18 A Sets the second tube in front of her.
19 D RHI [CONT'D]: I didn't order that.
20 D TAD: I thought you might have a second thirst.
21 D RHI: I have a second everything. It's what happens when you wait.
22 D TAD: Which flight?
23 D RHI: Mars Direct. Twice rescheduled.
24 D TAD: Mine's the Ceres shuttle.
25 D RHI: Sixteen days late.
26 D TAD: You've been checking.
27 D RHI: Everyone checks. It's the hobby.
28 A ¶ They sip.
* 29 A Outside, a transport crosses the lunar horizon, trailing a thin plume.
* 30 A Earth turns in the window, slowly, blue and white.
31 D TAD: I used to come up here for work. Now I come for the view.
32 D RHI: It's always the same view.
33 D TAD: That's the comfort.
34 D RHI: The comfort is that I know what I'm missing.
35 D TAD: And what's that?
36 D RHI: Weather.
37 A ¶ He laughs.
* 38 A The drone returns, brushes around their table, and sweeps away.
39 D TAD: What's your trade?
40 D RHI: Soil. I'm an agronomist. I teach dust to grow things.
41 D TAD: Does it listen?
42 D RHI: Not to me. To the right microbe, maybe.
43 D TAD: I fix valves.
44 D RHI: Somebody has to.
45 D TAD: Somebody does. Mostly me, on bad days.
46 A ¶ She turns the tube in her fingers.
47 A Peers at the label.
48 D RHI: Why Ceres?
49 D TAD: My daughter's there. Three years. She keeps asking me to visit and I keep telling her it's a long trip.
50 D RHI: Is it?
51 D TAD: It was, until I decided to go.
* 52 A ¶ A soft chime.
* 53 A Overhead, a board flickers.
* 54 A A line changes.
55 A Both of them look up.
56 D RHI: Yours?
57 D TAD: Mine.
58 D RHI: Boarding?
59 D TAD: In forty minutes.
60 A ¶ Rhi nods.
61 A Lifts her tube in a small salute.
62 A He raises his in answer.
63 D RHI: To soil, then.
64 D TAD: To valves.
65 A ¶ They drink.
* 66 A Earth turns, unhurried.
67 A He rises, takes his tray, and pauses at the edge of the table.
68 D TAD [CONT'D]: If you ever see Ceres. The garden domes are poor. They'd listen to you.
69 D RHI: Is that an invitation?
70 D TAD: It's a valve repair request. Disguised.
71 A ¶ She smiles for the first time.
72 A He nods and walks away across the basalt floor.
73 A ¶ Rhi puts her boots back up on the chair and settles to wait.

### SCENE s01546 | INT. COUNTY COURTHOUSE - BASEMENT HOLDING CELL CORRIDOR - DAY
Detected names (may be incomplete or contain aliases): ATTORNEY SABINE ROTHSCHILD-OKONJO, DEE, VASQUEZ-IBEKWE, WOMAN IN GREY, NICOLA
* 1 A ¶ Pipes along the ceiling.
* 2 A Water stains on cinderblock.
* 3 A A steel bench bolted to the wall.
* 4 A A single bulb in a cage buzzes like a trapped insect.
5 A ¶ ATTORNEY SABINE ROTHSCHILD-OKONJO, 40s, in a navy suit with a crease worn in the elbow, stands with her briefcase held against her chest.
6 A Across from her, behind a steel mesh gate, a young woman in county orange paces: DEMETRIA "DEE" VASQUEZ-IBEKWE, 20s, hair scraped back, eyes red.
7 A ¶ A third woman sits on the bench by the gate, hunched, anonymous in a grey cardigan, hands clasped.
8 A THE WOMAN IN GREY says nothing.
9 A She does not look up.
10 D SABINE: Dee. Sit.
11 D DEE: I can't.
12 D SABINE: You've been standing since six.
13 D DEE: They put me on the bench, I think about the bench.
14 D SABINE: Then think about me.
15 A ¶ Dee halts.
16 A Faces her.
17 A Her fingers curl through the mesh.
18 D DEE: She told them it was me.
19 D SABINE: Who?
20 D DEE: Her. The one who works with me. She told them I took the money.
21 D SABINE: Nicola?
22 D DEE: Nicola.
23 D SABINE: She did not tell them. She was subpoenaed.
24 D DEE: Same thing.
25 D SABINE: It is not.
26 A ¶ The Woman in Grey lifts her head.
27 A Her face is plain, composed, unreadable.
28 A She glances at Dee, then at Sabine, then away.
29 D DEE [CONT'D]: Who is she?
30 D SABINE: I don't know.
31 D DEE: Is she with you?
32 D SABINE: No.
33 D DEE: Then why is she in here?
34 A ¶ The Woman in Grey stands.
35 A Smooths her cardigan.
36 D WOMAN IN GREY: Because I've been waiting a very long time to say something to you.
37 D SABINE: This is a private consultation.
38 D WOMAN IN GREY: Then let me be private.
39 A ¶ She steps up to the gate.
40 A Dee takes a half step back.
* 41 A The bulb flickers.
42 D WOMAN IN GREY [CONT'D]: My name is Nicola Halloran-Eze.
43 D DEE (quietly): No.
44 D NICOLA: Yes.
45 A ¶ Sabine turns the briefcase flat against her chest like a shield.
46 D SABINE: Ms. Halloran-Eze, I must insist--
47 D NICOLA: I took the money.
* 48 A ¶ Silence.
* 49 A Pipes tick overhead.
50 A Dee's mouth opens.
51 A Nothing comes out.
52 D NICOLA [CONT'D]: I told them it was you because I thought you'd be believed. Because you were younger. You'd have time.
53 D DEE: Time.
54 D NICOLA: To recover. I was going to confess before the trial.
55 D DEE: It's Thursday.
56 D NICOLA: I know what day it is.
57 A ¶ Sabine steps between them.
58 A She holds up both palms, one to each side.
59 D SABINE: Ms. Halloran-Eze, you do not have to say another word.
60 D NICOLA: I'm done being told what I don't have to say.
61 D SABINE: This is a confession. In a holding corridor. In front of the defendant.
62 D NICOLA: In front of her counsel. That makes it legal, doesn't it?
63 D SABINE (a long beat): It makes it extraordinary.
64 A ¶ Dee slides down the mesh.
65 A Sits on the concrete floor, her orange knees drawn up.
66 D DEE (to no one): I told my mother it was a mistake.
67 D SABINE: Dee, don't speak.
68 D DEE (still to no one): I told her. I told her.
69 A ¶ Nicola presses her forehead to the steel.
* 70 A A guard's keys jingle somewhere beyond the corridor, and a door clangs.
71 D SABINE: Nicola. Will you repeat that to the judge?
72 D NICOLA: At two o'clock.
73 D SABINE: Will you repeat it to the prosecutor?
74 D NICOLA: If she'll listen.
75 D SABINE: She'll listen.
76 A ¶ Sabine hands her a card from her breast pocket.
77 A Nicola takes it.
78 A Reads it.
79 A Folds it into the cardigan.
80 A ¶ Dee lifts her head.
* 81 A The bulb steadies.
82 A For the first time since the scene began, she is still.

### SCENE s01547 | INT. SNOWBOUND CABIN - DAY
Detected names (may be incomplete or contain aliases): HETTY, MBATHA-FLORES, OSKAR LINDQVIST-AKINTOLA, JUNE, ACHEBE-RYDER, TOMASZ BRZEZINSKI, MIRABEL ODUYA-HART
* 1 A ¶ Frost on the panes.
* 2 A A woodstove, nearly dead.
3 A Five survivors packed around a table with a single can between them.
4 A ¶ CAPTAIN HENRIETTA "HETTY" MBATHA-FLORES, 50s, pilot, scrapes the last bean from the can.
5 A DR. OSKAR LINDQVIST-AKINTOLA, 40s, holds a splinted arm to his chest.
6 A JUNIPER "JUNE" ACHEBE-RYDER, 20s, shivers in an oversized parka.
7 A TOMASZ BRZEZINSKI, 60s, glowers at the stove.
8 A And little MIRABEL ODUYA-HART, 10, wrapped in a blanket, eyes huge.
9 D HETTY: Fire's out in an hour.
10 D OSKAR: We need wood.
11 D TOMASZ: We need a plan.
12 D JUNE: We need to stop shouting.
13 D TOMASZ: Nobody's shouting.
14 D HETTY: Tomasz, you are.
15 D TOMASZ: I'm projecting.
16 D OSKAR: At whom?
17 D TOMASZ: At whoever gets us killed.
18 D JUNE: Nobody's getting killed.
19 D MIRABEL: Is Dad coming?
* 20 A ¶ Silence.
21 A Hetty sets down the can.
22 A Oskar studies the floor.
23 D HETTY: Mirabel, sweetheart. The radio's down.
24 D MIRABEL: But they know where we are.
25 D OSKAR: They know where the plane went down.
26 D TOMASZ: Which is twelve miles west.
27 D JUNE: We could walk.
28 D OSKAR: She means him, in the blanket, with a broken arm. And her. And me.
29 D TOMASZ: Then I go alone.
30 D HETTY: You'll freeze.
31 D TOMASZ: He'll freeze if I don't.
32 D OSKAR: Who? Me?
33 D TOMASZ: Both of you. All of you.
34 D HETTY: Nobody goes alone.
35 D JUNE: I'll go with him.
36 D TOMASZ: She'll slow me.
37 D HETTY: She'll keep you alive.
38 D MIRABEL: I want to come.
39 D HETTY: No, Mirabel.
40 D MIRABEL: Why not?
41 D OSKAR: Because she is the only reason the rest of us stay.
42 A ¶ Mirabel looks from face to face.
43 A Tomasz rises and takes his coat from the hook.
44 D TOMASZ: At dawn, then.
45 D HETTY: At dawn.
46 D JUNE (quietly): I'll get the rope.

### SCENE s01548 | EXT. SALOON PORCH - DUSK
Detected names (may be incomplete or contain aliases): JERRY, ACHTERBERG-NWOSU, DOLLY MAE FAIRWEATHER-ODUYA, GUS, KOWALCZYK-LAW, MADAME PRUDENCE LOCKHART-ADEYEMI
* 1 A ¶ A false-fronted saloon at the dry end of a dust street.
* 2 A The sun sinks behind a ridge, throwing long shadows.
* 3 A A tin windmill clanks.
4 A ¶ SHERIFF JEREMIAH "JERRY" ACHTERBERG-NWOSU, 50s, sits in a rocker with a shotgun across his knees.
5 A He rolls a cigarette with slow, thick fingers.
6 A ¶ On the step below him, DOLLY MAE FAIRWEATHER-ODUYA, 20s, sweeps dust with a broom and does not look up.
7 A Her apron is stained.
8 A ¶ Leaning on a post, a stranger in a flat-brimmed hat watches the street.
9 A AUGUSTUS "GUS" KOWALCZYK-LAW, 40s, drover, spurs jingling when he shifts.
10 D JERRY: Evening, Gus.
11 D GUS: Sheriff.
12 D JERRY: Cattle all watered?
13 D GUS: Every last head.
14 D DOLLY MAE: Don't see why you need a watered cow to rob a bank.
15 A ¶ Jerry's cigarette stops halfway to his lip.
16 A Gus does not move.
* 17 A The windmill clanks.
18 D JERRY: Dolly Mae.
19 D DOLLY MAE: I'm sweeping, Sheriff.
20 D JERRY: You're talking.
21 D DOLLY MAE: Can't I do both?
* 22 A ¶ From the far end of the street, a horse picks its way through the dusk, hooves soft in the powder.
23 A Its rider is a woman in black, face shadowed by a widow's veil.
24 A She reins in at the foot of the porch and dismounts with a stiff, practised ease.
25 A ¶ MADAME PRUDENCE LOCKHART-ADEYEMI, 60s, black dress, carpetbag, steel in her eye.
26 A She lifts her veil, studies the three of them one by one, and drops a letter on the porch boards where Jerry will have to look at it.
27 D PRUDENCE: Sheriff. Your name, I'm told, is on this.
28 D JERRY: Ma'am.
29 D PRUDENCE: My husband owned the bank. He died last Tuesday. Someone in this town knows how.
30 A ¶ Jerry lowers the shotgun.
31 A Gus pushes off his post.
32 A Dolly Mae sets down the broom, and for the first time, looks Prudence in the eye.
33 D JERRY: Mrs. Lockhart-Adeyemi, I'm sorry for your loss.
34 D PRUDENCE: Don't be sorry. Be useful.
35 D GUS (low): Ma'am, I'd be careful what you say on this porch.
36 D PRUDENCE: Mr. Kowalczyk-Law. You are the last man in this territory to give me advice on caution.
37 A ¶ Gus' hand drifts to his belt.
38 A Jerry thumbs the shotgun's hammer, easy.
39 A Dolly Mae steps back on the stairs and the broom clatters behind her.
40 A Prudence does not flinch, standing in the half-light with her carpetbag held in front of her like a Bible.
41 D PRUDENCE [CONT'D] (quietly): Someone has until sunrise.
42 A ¶ She steps up onto the porch.
43 A Walks between them, through the swing doors, into the saloon.
* 44 A The doors flap and settle.
45 D JERRY: Well.
46 D DOLLY MAE: Well.
47 D GUS: Well, hell.
48 A ¶ Jerry takes up the shotgun.
49 A Gus tips his hat.
50 A Dolly Mae gathers her broom.
51 A Not one of them looks at another.

### SCENE s01549 | INT. ANTIQUARIAN BOOKSHOP - UPSTAIRS READING ROOM - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): PROFESSOR IMOGEN LOWERY-ACHEBE, PIP, OKONKWO-DAVIES
* 1 A ¶ Tall shelves on three walls.
* 2 A A rolling ladder.
* 3 A Dust turning in a diagonal bar of light.
* 4 A A single leather armchair with a cracked arm.
* 5 A On a round table sit a pot of tea and two untouched cups.
6 A ¶ PROFESSOR IMOGEN LOWERY-ACHEBE, 60s, in a tweed skirt and pearl buttons, stands by the window with her back to the room.
7 A A magnifying glass hangs from her neck on a ribbon.
8 A ¶ Behind her, seated at the table, is her former student, DETECTIVE-SERGEANT PHILIPPA "PIP" OKONKWO-DAVIES, 30s, in a damp raincoat.
9 A She has not taken it off.
* 10 A Her notebook lies closed.
11 D PIP: Thank you for seeing me.
12 D IMOGEN: I almost didn't.
13 D PIP: I know.
14 D IMOGEN: You always asked questions with your hands folded. It was a trick.
15 D PIP: It still is.
16 A ¶ Pip unclasps her hands, deliberately, and lays them flat on the table.
17 A Imogen turns.
18 A Looks at the hands.
19 A Looks at the teapot.
20 D IMOGEN: Shall I pour?
21 D PIP: Please.
22 A ¶ Imogen pours.
* 23 A The china clinks.
* 24 A A thin line of steam climbs between them.
25 D IMOGEN: The bookseller. Mr. Fenwick.
26 D PIP: Yes.
27 D IMOGEN: He was found in the cellar.
28 D PIP: Yes.
29 D IMOGEN: With a first folio.
30 D PIP (a pause): How do you know about the folio?
31 D IMOGEN: It was in the newspaper.
32 D PIP: The newspaper didn't mention a folio.
33 A ¶ Imogen sets down the pot.
34 A Carefully.
35 A The spout trembles once, and she steadies it with her other hand.
36 D IMOGEN: The newspaper mentioned a book.
37 D PIP: A book. Yes.
38 D IMOGEN: I assumed.
39 D PIP: You assumed correctly.
40 A ¶ Imogen lowers herself into the armchair, which sighs.
41 A She does not look at the shelves behind her.
42 A Pip does, once, her eye travelling along the spines to a gap at the height of Imogen's shoulder.
43 D PIP [CONT'D]: That's a rare space.
44 D IMOGEN: Books are borrowed.
45 D PIP: By whom?
46 D IMOGEN: By people who ask nicely.
47 D PIP: And did he ask nicely?
48 D IMOGEN: Mr. Fenwick asked in a great many ways.
49 A ¶ Pip lifts her cup.
50 A Does not sip.
51 A Holds it, level, like a measure.
52 D PIP: He wrote a letter to the Society. Three weeks before he died.
53 D IMOGEN: Did he.
54 D PIP: He said a colleague had been selling pages from the folio.
55 D IMOGEN: Did he name the colleague?
56 D PIP: He didn't have to.
57 A ¶ Imogen smooths her skirt.
58 A Her fingers find the magnifying glass on its ribbon and wind the ribbon once around her hand.
59 D IMOGEN: Philippa.
60 D PIP: Professor.
61 D IMOGEN: You were my best student.
62 D PIP: I know.
63 D IMOGEN: I taught you to see.
64 D PIP: You did.
65 D IMOGEN: Then see this. There is nothing in this room that is not what it appears to be.
66 A ¶ Pip sets her cup down.
67 A Reaches into her raincoat.
68 A Draws out a slim glass sleeve, and in it, a single torn page, brown at the edges, in a looping Elizabethan hand.
69 D PIP: Forensics found this in his hand.
70 A ¶ Imogen looks at the page.
71 A Then at the shelf.
72 A Then at the window, where the light has slipped down the wall and is now the colour of tea.
73 D IMOGEN (softly): He did write beautifully.
74 D PIP: Who?
75 D IMOGEN: Shakespeare. I mean Shakespeare.
76 D PIP: I know who you mean.
77 A ¶ They sit, two women and a pot of cooling tea, while the bar of light slides off the table and onto the floor.

### SCENE s01550 | INT. GRAND HOTEL PARLOUR, SARATOGA - 1893 - AFTERNOON
Detected names (may be incomplete or contain aliases): CORNELIA VANDERHOOF-ADEBAYO, MISS BEATRIX ONWUACHI-LAW, MADAME SOLANGE TREMBLAY-OKORO
* 1 A ¶ A tea table laid for three.
* 2 A Gilded mirrors.
* 3 A A potted fern quivers in a draught from the verandah doors.
4 A ¶ MRS. CORNELIA VANDERHOOF-ADEBAYO, 50s, rigid in black silk, presides over the pot.
5 A Her niece MISS BEATRIX ONWUACHI-LAW, 20s, in lavender, pleats a napkin.
6 A Across from them sits MADAME SOLANGE TREMBLAY-OKORO, 40s, a visitor, gloved and veiled, smiling thinly.
7 D CORNELIA: Sugar, Madame?
8 D SOLANGE: One lump.
9 D CORNELIA: Beatrix, the tongs.
10 D BEATRIX: Yes, Aunt.
11 D CORNELIA: She never listens. You will find that of the young.
12 D SOLANGE: I find it of the old as well.
13 D CORNELIA: I beg your pardon?
14 D SOLANGE: Nothing at all. The tea is excellent.
15 D CORNELIA: It is from Ceylon.
16 D SOLANGE: I should never have guessed. I took it for Darjeeling.
17 D BEATRIX: Aunt prides herself on knowing the difference.
18 D CORNELIA: Beatrix.
19 D BEATRIX: Only as an observation.
20 D SOLANGE: Observation is a great virtue, Miss Onwuachi-Law. Tell me, what do you observe about this room?
21 D BEATRIX: The mirrors are very bright.
22 D SOLANGE: And?
23 D BEATRIX: The draught is not from the verandah.
24 D CORNELIA: Beatrix, do not be absurd.
25 D BEATRIX: It is from behind the fern.
26 D SOLANGE (setting down her cup): I find your niece quite remarkable.
27 D CORNELIA: She finds herself so.
28 D SOLANGE: Mrs. Vanderhoof-Adebayo, when your husband died so suddenly in the spring, the physician said it was his heart.
29 D CORNELIA: It was.
30 D SOLANGE: And yet, the family lawyer tells me the will has been altered.
31 D CORNELIA: Naturally. Estates are tidied.
32 D SOLANGE: Altered in your favour.
33 D CORNELIA: Madame Tremblay-Okoro, I invited you for tea, not for an inquest.
34 D SOLANGE: But it is a tea, is it not? And teas, in my experience, are where the truth is poured.
35 A ¶ Beatrix drops the tongs.
* 36 A The silver clatters on the china.
37 A Nobody moves to retrieve them.
38 D BEATRIX: Aunt?
39 D CORNELIA: Be quiet, child.
40 D SOLANGE: Let her speak. She has been waiting two seasons.
41 A ¶ Cornelia lifts the teapot.
42 A Her hand is perfectly steady.
43 A She pours, and the stream falls straight and gold into the empty cup before her.
44 D CORNELIA: You are very sure of yourself.
45 D SOLANGE: I am Pinkerton's agent in New York.
* 46 A ¶ Behind the fern, a floorboard creaks.
* 47 A The draught stops.

### SCENE s01551 | INT. EMERGENCY ROOM - TRAUMA BAY THREE - NIGHT
Detected names (may be incomplete or contain aliases): CHIDINMA OKAFOR-LINDQVIST, TOBIAS ACHTERBERG-NNAMDI, NURSE BEATRIZ COLQUHOUN-SANTOS
* 1 A ¶ Blood on the floor.
* 2 A Monitors shrieking.
3 A A gurney with a young man strapped to it, chest rising in shallow gasps.
4 A ¶ DR. CHIDINMA OKAFOR-LINDQVIST, 40s, in a gown and gloves, leans over the patient.
5 A Beside her, RESIDENT DR. TOBIAS ACHTERBERG-NNAMDI, 20s, holds a suction wand, white-faced.
6 A At the foot of the bed, NURSE BEATRIZ COLQUHOUN-SANTOS, 30s, cuts the patient's shirt with trauma shears.
7 D CHIDINMA: Pressure?
8 D TOBIAS: Seventy over forty.
9 D BEATRIZ: Falling.
10 D CHIDINMA: Two large-bore lines. Now.
11 D TOBIAS: Already in.
12 D BEATRIZ: Left arm's blown.
13 D CHIDINMA: Then go to the neck.
14 D TOBIAS: Dr. Okafor-Lindqvist, he's seventeen.
15 D CHIDINMA: Pressure.
16 D BEATRIZ: Sixty over thirty.
17 D TOBIAS: What's the mechanism?
18 D CHIDINMA: Stab wound, left chest, no exit.
19 D BEATRIZ: Pulse ox ninety.
20 D TOBIAS: Pneumothorax?
21 D CHIDINMA: Hemothorax. Chest tube. Tobias, you do it.
22 D TOBIAS: Me?
23 D CHIDINMA: Yes. Now.
24 D BEATRIZ: Betadine.
25 D TOBIAS: Okay. Okay.
26 D CHIDINMA: Fifth intercostal, mid-axillary. You know this.
27 D TOBIAS: I know this.
28 D BEATRIZ: Pressure's fifty.
29 D CHIDINMA: Push the blood.
30 D BEATRIZ: O-neg's up.
31 D TOBIAS: Incision.
32 D CHIDINMA: Good. Bluntly through the muscle.
33 D TOBIAS: There's a rush of blood.
34 D CHIDINMA: Good. That's the chest. Insert the tube.
35 D TOBIAS: It's in.
36 D BEATRIZ: Pressure sixty.
37 D CHIDINMA: Seventy?
38 D BEATRIZ: Seventy.
39 D TOBIAS: Output is eight hundred cc and rising.
40 D CHIDINMA: We go to the OR.
41 D BEATRIZ: OR's clearing.
42 D CHIDINMA: Get the surgeon.
43 D BEATRIZ: Calling.
44 D TOBIAS: Dr. Okafor-Lindqvist?
45 D CHIDINMA: Yes?
46 D TOBIAS: I thought he was gone.
47 D CHIDINMA: So did I.
48 A ¶ She rips off her gloves.
49 A Squeezes his shoulder once.
50 D CHIDINMA [CONT'D]: Good work, Doctor.

### SCENE s01552 | INT. APPELLATE COURTROOM - ANTEROOM - DAY
Detected names (may be incomplete or contain aliases): ATTORNEY CONSTANCE ABIOLA-HARTWELL, ASHER DELACROIX-NWOSU
* 1 A ¶ Wood panelling.
* 2 A Water pitcher.
* 3 A A window onto a car park.
4 A ¶ ATTORNEY CONSTANCE ABIOLA-HARTWELL, 50s, checks her notes.
5 A Her opposing counsel, ASHER DELACROIX-NWOSU, 40s, enters, nods, and takes the other end of the table.
6 A ¶ She doesn't look up.
7 A He sets down his briefcase.
8 D CONSTANCE (to the room, loud): Everyone should be seated by nine.
* 9 A ¶ No one else is there.
10 A Asher raises an eyebrow.
11 D ASHER: Talking to the furniture?
12 D CONSTANCE: Habit.
13 A ¶ He sits.
14 A She shuffles pages.
15 A He does the same.
16 A Their hands brush a stapler at the same instant.
17 A Both withdraw.
18 D ASHER: After you.
19 D CONSTANCE: No. You.
20 A ¶ He picks it up.
21 A Staples.
22 A Stares at the result.
23 D ASHER (muttering, to himself): Wrong page.
24 A ¶ She notices.
25 A Says nothing.
* 26 A The clock ticks.
* 27 A ¶ A buzzer sounds.
28 A They both rise, grab their briefcases, and collide at the door.
29 A She goes first.
30 A He follows.
31 D CONSTANCE: Don't rush me.
32 D ASHER: Wouldn't dream of it.
33 A ¶ They enter the courtroom side by side, not touching.

### SCENE s01553 | INT. LOCKER ROOM - HALFTIME
Detected names (may be incomplete or contain aliases): ODUYA-LINDGREN, JAZZ, ABERNATHY-OKORO, COACH, DEE, KOWALCZYK
* 1 A ¶ Sweat, steam, rattling lockers.
* 2 A A whiteboard scrawled with arrows.
3 A ¶ COACH MARGUERITE "MAGS" ODUYA-LINDGREN, 50s, paces with a clipboard.
4 A The team captain, JASMINE "JAZZ" ABERNATHY-OKORO, 20s, sits on a bench with a towel over her head.
5 D COACH: Fourteen down.
6 D JAZZ: I know.
7 D COACH: Fourteen.
8 D JAZZ: I know, Coach.
9 D COACH: She knows, she says.
10 D JAZZ: We know.
11 A ¶ The coach slams the clipboard against a locker.
12 A Jazz flinches.
13 A She pulls the towel off, wipes her face, and doesn't look up.
14 D COACH [CONT'D]: They run the same play every time. Every single time.
15 D JAZZ: So why can't we stop it?
16 D COACH: Because you're watching the ball.
17 D JAZZ: We're supposed to watch the ball!
18 D COACH: You're supposed to watch the hips!
* 19 A ¶ The door bangs.
20 A A rookie stands there, sweating.
21 A DESHAWN "DEE" KOWALCZYK, 19, number twelve, helmet under her arm.
22 D DEE: Coach. Can I say something?
23 D COACH: No.
24 D JAZZ: Yes.
25 D DEE: I see it. The tell. The left shoulder drops before the screen.
* 26 A ¶ Silence.
27 A The coach turns.
28 A Jazz lifts her chin.
29 D COACH: Say that again.
30 D DEE: Left shoulder. Every time.
31 D JAZZ (standing): Then we hit it.
32 D COACH: Then we hit it.

### SCENE s01554 | INT. PAWN SHOP BACK OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): SOL, ADEYEMI-BRANDT, REN, PAPADOPOULOS-ESEZOBOR
* 1 A ¶ A desk lamp.
* 2 A A safe with its door ajar.
* 3 A Boxes of watches, wedding rings, guitars.
4 A ¶ SOLOMON "SOL" ADEYEMI-BRANDT, 60s, cardigan, reading glasses, counts bills with a licked thumb.
* 5 A Behind him on a shelf, a clock.
* 6 A ¶ The door opens a crack.
7 A RENATA "REN" PAPADOPOULOS-ESEZOBOR, 30s, in a hooded sweatshirt, slips in, keeping one hand in the pocket.
8 D SOL: We're closed.
9 D REN: Door was open.
10 D SOL: Doors do that.
11 D REN: You Sol?
12 D SOL: Depends.
13 D REN: Gabe sent me.
14 D SOL: Gabe's in Tucson.
15 D REN: Gabe's not.
16 A ¶ Sol stops counting.
17 A Folds the bills.
18 A Puts them in a drawer, slowly.
19 A Closes the drawer with his knee.
20 D SOL: Sit.
21 D REN: I'll stand.
22 D SOL: Suit yourself.
23 A ¶ She stays by the door.
24 A He picks up a tea mug, sips, sets it down.
* 25 A The clock ticks.
26 D REN: He says you owe him.
27 D SOL: Everybody owes somebody.
28 D REN: Eight thousand.
29 D SOL: I've got six.
30 D REN: He said eight.
31 D SOL: He said a lot of things.
32 A ¶ Ren takes a step.
* 33 A The floor creaks.
34 A Sol's hand slides from the desk toward the lamp's base.
35 D SOL [CONT'D]: That's close enough.
36 D REN: You scared?
37 D SOL: I'm seventy. Everything scares me.
38 D REN: You said sixty.
39 D SOL: Sixty-nine.
40 A ¶ He laughs.
41 A She doesn't.
42 A Her hand comes out of the pocket, empty, then goes back in.
43 D SOL [CONT'D]: What's in there?
44 D REN: Gloves.
45 D SOL: It's July.
46 D REN: It's a long night.
47 A ¶ Sol rises.
48 A Slowly.
* 49 A His chair rolls back, bumps the safe.
50 A Ren darts forward, he swings the lamp, she ducks, they collide against the desk, and the lamp crashes to the floor in a spray of glass.
* 51 A Darkness.
* 52 A ¶ A grunt.
* 53 A A thud.
* 54 A Something metal skitters.
* 55 A ¶ The lamp's bulb sputters and relights, flickering.
56 A Sol sits on the floor with his back against the safe, breathing hard.
57 A Ren crouches over him, gloves on, a rubber hammer in her fist.
58 D SOL [CONT'D] (wheezing): Gloves.
59 D REN: Told you.
60 A ¶ She lowers the hammer.
61 A Sets it on the carpet.
62 A Sol pats his chest.
63 D SOL: Take the six.
64 D REN: Gabe will want eight.
65 D SOL: Then tell him I'm dead.
66 D REN: He'll check.
67 D SOL: Let him.
68 A ¶ She stands.
69 A Opens the drawer, takes the bills.
70 A Counts.
71 A Doesn't count.
72 D REN: You said sixty.
73 D SOL: I said sixty-nine.
74 A ¶ She almost smiles.
75 A Pockets the cash and goes.
* 76 A The door clicks.
77 A Sol leans his head against the safe, listens to the clock, and shuts his eyes.

### SCENE s01555 | INT. DISTRICT COURTHOUSE - CORRIDOR OUTSIDE COURTROOM 4B - DAY
Detected names (may be incomplete or contain aliases): WOMAN, DONNELLY-ADEYEMI, MAN, HAROLD OSEI-BRANDT, DONNELLY
* 1 A ¶ Bench seating.
* 2 A A water cooler.
* 3 A A television mounted high plays the news without sound.
4 A ¶ A WOMAN in a black suit paces with a folder.
5 A Her badge reads P. A. DONNELLY-ADEYEMI, Assistant District Attorney.
6 A ¶ A MAN in a rumpled blazer stands near the cooler, tapping his phone.
7 A The placard on his briefcase reads "HAROLD OSEI-BRANDT, ESQ."
8 D DONNELLY: Harold.
9 D OSEI-BRANDT: Priscilla.
10 D DONNELLY: You filed the motion at five a.m.
11 D OSEI-BRANDT: Insomnia.
12 D DONNELLY: It had a cover letter.
13 D OSEI-BRANDT: I take pride in my cover letters.
14 A ¶ She stops pacing.
15 A Stares at the TV.
* 16 A The ticker reads "BREAKING: LOCAL JUDGE RECUSES."
17 D DONNELLY (to herself): Of course.
18 D OSEI-BRANDT: Something?
19 D DONNELLY: Nothing. Talking to the weather.
20 A ¶ He chuckles.
21 A She does not.
22 D DONNELLY [CONT'D] (louder, to the whole corridor): Anyone with a four o'clock in 4B should know it's been moved.
* 23 A ¶ Nobody answers.
24 A A janitor wheels a mop bucket past, whistling.
25 D OSEI-BRANDT: Wasted breath.
26 D DONNELLY: Habit.
27 D OSEI-BRANDT: Moved to where?
28 D DONNELLY: Courtroom 7. New judge.
29 D OSEI-BRANDT: Who?
30 D DONNELLY: Judge Kowalczyk.
31 D OSEI-BRANDT (sinking onto the bench): No.
32 D DONNELLY: Yes.
33 D OSEI-BRANDT: He hates me.
34 D DONNELLY: He hates everyone. That's the beauty.
35 D OSEI-BRANDT: Priscilla, I need a continuance.
36 D DONNELLY: Harold, I need a miracle.
37 A ¶ She sits beside him.
* 38 A Their briefcases touch.
* 39 A The TV flickers to a weather map: a hurricane swirl.
40 D OSEI-BRANDT (quietly): Priscilla, if I say please.
41 D DONNELLY: Don't.
42 D OSEI-BRANDT: Please.
43 D DONNELLY (sighing): Fine. A week.
44 A ¶ He stands, extends a hand.
45 A She shakes it.
46 A Then she looks at the placard on his case, and at her own badge, and the cue in her notes.
47 D DONNELLY [CONT'D] (to herself): Priscilla Anne. Not Priscilla.
48 D OSEI-BRANDT: What?
49 D DONNELLY: Nothing, Harold. Go.
50 A ¶ He goes.
51 A She remains on the bench, watching the hurricane turn.

### SCENE s01556_0 | EXT. HOMESTEAD - DAWN
Detected names (may be incomplete or contain aliases): NELL TREMAINE-ADEYEMI
* 1 A ¶ A sod house on an empty plain.
* 2 A Wind combs the grass.
* 3 A A broken wagon wheel leans against the door.
* 4 A A lone windmill creaks.
5 A ¶ NELL TREMAINE-ADEYEMI, 40s, stands in the yard in a man's coat and a faded bonnet.
* 6 A A rifle rests against the fence post beside her.
* 7 A A saddlebag, half packed, lies in the dirt at her feet.
8 A She does not look at the road.
9 A ¶ She crouches.
10 A Pulls a letter from her pocket.
11 A Smooths it against her knee.
12 D NELL [V.O.] (reading, as if written): "Dear Nell. By the time you read this, I'll be in Cheyenne."
13 A ¶ She lowers the letter.
14 A Looks at the horizon.
15 A Raises it again.
16 D NELL [V.O., CONT'D]: "The claim is yours. The mule, too. I never did like him."
17 A ¶ A small, dry breath, almost a laugh.
18 A She tucks the letter into her coat.
19 A ¶ She stands.
20 A Walks to the well.
21 A Lowers the bucket on its rope.
* 22 A The rope creaks.
23 A She draws it up slowly, hand over hand, never taking her eyes off the plain.
24 A ¶ Drinks from her cupped palm.
25 A Wipes her chin.

### SCENE s01556_1 | INT. HOMESTEAD - CONTINUOUS
Detected names (may be incomplete or contain aliases): NELL
* 1 A ¶ A single room.
* 2 A Table, stove, cot.
* 3 A A tintype of two people on the wall: Nell, younger, and a man with a stern moustache.
4 A She takes it down.
5 A Looks at it.
6 A Wipes it with her sleeve.
7 A Places it face-down on the table.
8 D NELL (to the empty room): Well.
9 A ¶ She opens a tin on the shelf.
10 A Counts coins.
* 11 A Not many.
12 A She puts them in her pocket.
* 13 A ¶ On the stove, a pot of coffee.
14 A She pours a cup, holds it, doesn't drink.
15 A Sets it on the sill by the window.
* 16 A Steam rises into the dawn.

### SCENE s01556_2 | EXT. HOMESTEAD - CONTINUOUS
Detected names (may be incomplete or contain aliases): NELL
1 A ¶ She walks to the barn.
2 A Opens the door.
* 3 A A mule stands in the dark, chewing hay.
4 D NELL: Morning, you.
* 5 A ¶ The mule flicks an ear.
6 D NELL [CONT'D]: You heard?
* 7 A ¶ The mule turns away.
8 A She laughs, once, helplessly.
9 D NELL [CONT'D]: He said you were his favourite.
10 A ¶ She leads the mule out.
11 A Loads the saddlebag.
12 A Tightens the cinch with hard jerks.
13 D NELL [V.O.] (reading): "Don't wait for me. Don't write. If you must hate someone, hate the weather."
14 A ¶ She stops.
15 A Hands flat on the mule's flank.
16 D NELL [V.O., CONT'D]: "I was never any good at stopping."
17 A ¶ She turns.
* 18 A The sun clears the horizon and the whole plain turns gold.
19 A She stands in the yard with the mule and the rifle and the house behind her.
20 A ¶ She picks up the rifle.
21 A Aims at nothing.
22 A At the windmill.
23 A At the sky.
24 A ¶ Lowers it.
25 D NELL [CONT'D] (quietly): Fine.
26 A ¶ She walks to the house.
27 A Takes the tintype from the table, wraps it in a rag, tucks it in the saddlebag.
28 A Pulls the saddlebag tight.

### SCENE s01556_3 | INT. HOMESTEAD - CONTINUOUS
Detected names (may be incomplete or contain aliases): 
* 1 A ¶ The coffee cup on the sill has gone cold.
2 A She takes it.
3 A Pours it out on the floor.
4 A Turns the cup upside down on the table.

### SCENE s01556_4 | EXT. HOMESTEAD - CONTINUOUS
Detected names (may be incomplete or contain aliases): NELL
1 A ¶ She mounts the mule.
2 A Looks at the house one last time.
* 3 A The windmill creaks.
* 4 A The wheel leans against the door.
5 A ¶ She turns the mule toward the road.
* 6 A Not Cheyenne.
* 7 A The other way.
8 D NELL: Come on.
9 A ¶ They go.
* 10 A The grass closes behind them.
11 D NELL [V.O.] (reading, fading): "Yours, always. Thomas."
* 12 A ¶ The windmill turns.
* 13 A The yard is empty.

### SCENE s01557 | INT. DEPARTMENT STORE - PERFUME COUNTER - DAY
Detected names (may be incomplete or contain aliases): MISS PRISCILLA ODUYA-FAIRBANKS, LEOPOLD KOWALCZYK-ADEBAYO, GENEVIEVE KOWALCZYK-ADEBAYO, OSWIN, THEODORE ACHTERBERG-NWOSU
* 1 A ¶ Glass cases.
* 2 A Gilt mirrors.
* 3 A A faint cloud of mixed scents hangs in the air.
4 A ¶ MISS PRISCILLA ODUYA-FAIRBANKS, 40s, saleslady in a white smock, arranges tiny bottles with surgical precision.
5 A ¶ Across the counter, MR. LEOPOLD KOWALCZYK-ADEBAYO, 50s, wearing a bowler hat, lifts a flask and sniffs it suspiciously.
6 A Next to him, his wife MRS. GENEVIEVE KOWALCZYK-ADEBAYO, 40s, in a feathered hat, glares at the saleslady.
7 A Their teenage son OSWIN, 15, hangs behind them, bored.
8 A ¶ A floorwalker, MR. THEODORE ACHTERBERG-NWOSU, 60s, with a carnation in his lapel, hovers nearby, wringing his hands.
9 D LEOPOLD: This smells like a wet dog.
10 D PRISCILLA: That is our finest civet, sir.
11 D GENEVIEVE: Leopold, put it down.
12 D LEOPOLD: I like it.
13 D GENEVIEVE: You like everything that offends me.
14 D OSWIN: Can we go?
15 D THEODORE: Madam, sir, perhaps the rose water--
16 D LEOPOLD: No rose water!
17 D GENEVIEVE: ^I'll have the rose water.
18 A ¶ Priscilla sets two bottles on the counter.
19 A Leopold and Genevieve both grab for the same one.
20 A They tug.
* 21 A The flask flies out of their hands, bounces off Oswin's shoulder, and crashes to the floor in a spray of glass and scent.
22 A ¶ Everyone freezes.
* 23 A A rolling fog of lavender drifts across the shop.
24 D OSWIN (deadpan): Smells like a wet dog.
25 A ¶ Theodore faints.
26 A Priscilla catches him.
27 A Leopold throws his bowler hat in the air.
28 D LEOPOLD: I'll take it!

### SCENE s01558 | INT. DEEP-SPACE LISTENING POST - COMMAND CENTRE - NIGHT
Detected names (may be incomplete or contain aliases): TEMI, AJAYI-NORDQVIST, COMMANDER BARNABY HOLLINGSWORTH-OSEI, VISITOR, SPECIALIST ORLANDO PAPADAKIS-NWOSU, ISHMAEL
* 1 A ¶ A circular room of screens and cables.
* 2 A Banks of antennae data scroll in green.
* 3 A One chair empty.
* 4 A A kettle ticks on a hotplate.
5 A ¶ LIEUTENANT TEMITOPE "TEMI" AJAYI-NORDQVIST, 30s, in a dark jumpsuit, stares at a waveform.
6 A Beside her, COMMANDER BARNABY HOLLINGSWORTH-OSEI, 50s, leans on a console with a mug.
7 A ¶ At the back, a stranger in a plain grey coat stands with his hands folded.
8 A THE VISITOR, 40s, calm, unlit by any badge.
9 D TEMI: It's repeating.
10 D BARNABY: How many cycles?
11 D TEMI: Seventeen.
12 D BARNABY: Direction?
13 D TEMI: Cygnus.
14 D BARNABY: Cygnus is empty.
15 D TEMI: Cygnus was empty.
16 A ¶ The Visitor steps forward.
17 A Barnaby turns.
18 D BARNABY: Who authorised you down here?
19 D VISITOR: No one yet.
20 D BARNABY: That's not an answer.
21 D VISITOR: It will be soon.
22 D TEMI: Commander, the signal's changing.
23 D BARNABY: Changing how?
24 D TEMI: It's addressing us.
25 D BARNABY (setting down the mug): Show me.
26 A ¶ She taps a key.
* 27 A Text crawls up the main screen: a string of digits, then a single word.
* 28 A ¶ HELLO
* 29 A ¶ Silence.
* 30 A The kettle clicks off.
31 A At the rear console, SPECIALIST ORLANDO PAPADAKIS-NWOSU, 20s, hunched over headphones, pulls one earcup off and stares.
32 D ORLANDO: Sir, I heard it too.
33 D BARNABY [CONT'D]: That is a prank.
34 D VISITOR: It isn't.
35 D BARNABY: And you are?
36 D VISITOR: Call me Ishmael.
37 D BARNABY: That's not your name.
38 D VISITOR: No. But it's one I chose.
39 D TEMI (whisper): Commander, it's responding to him.
* 40 A ¶ On the screen, the word changes: ISHMAEL.
41 A ¶ Barnaby backs away.
42 A Temi grips her console.
43 A The man who calls himself Ishmael smiles faintly.
44 D ISHMAEL: Thank you for answering.
45 D BARNABY: We didn't.
46 D ISHMAEL: Someone did. Long ago. I'm merely the postman.
47 D TEMI: Who sent you?
48 D ISHMAEL: Everyone you ever sent a signal to.
49 D BARNABY: What do they want?
50 D ISHMAEL: To say thank you.
51 D TEMI: For what?
52 D ISHMAEL: For being lonely.
53 A ¶ Barnaby sits heavily in the empty chair.
54 A Temi presses a hand to her mouth.
* 55 A On the screen, a new line scrolls, unhurried, in a language none of them has seen, which all of them somehow read.

### SCENE s01559 | INT. VICTORIAN CONSERVATORY - TWILIGHT
Detected names (may be incomplete or contain aliases): LADY ARABELLA OKONKWO-VANCE, GILES FAIRWEATHER-ADEBAYO
* 1 A ¶ Glass walls fogged with breath.
* 2 A Orchids hang in baskets.
* 3 A Ferns drip.
* 4 A Gaslights hiss in brass brackets.
5 A ¶ LADY ARABELLA OKONKWO-VANCE, 40s, in black bombazine, stands alone among the palms, a pruning knife in her gloved hand.
* 6 A A single white orchid trembles on its stem.
* 7 A ¶ The door scrapes.
8 A GILES FAIRWEATHER-ADEBAYO, 50s, in a doctor's frock coat, steps in with his bag.
9 A He stops, hat in hand.
10 D GILES: Lady Arabella.
11 D ARABELLA: Doctor.
12 D GILES: I came as soon as I heard.
13 D ARABELLA: Heard what?
14 D GILES: That the Colonel is unwell.
15 D ARABELLA: He is quite well. He is upstairs, asleep.
16 D GILES: Then why did you send for me?
17 A ¶ She turns the knife in her fingers.
* 18 A Light slides along the blade.
19 D ARABELLA: I wished to show you the orchid.
20 D GILES: I am no botanist.
21 D ARABELLA: It blooms once in seven years.
22 D GILES (wary): How charming.
23 D ARABELLA: It was my husband's favourite.
24 A ¶ Giles sets his bag on a wicker table.
25 A His hands are not quite steady.
26 D GILES: I really ought to see the Colonel.
27 D ARABELLA: In a moment.
28 A ¶ She snips the orchid, cleanly, at the stem.
* 29 A It falls into her palm.
30 A She offers it to him.
31 D ARABELLA [CONT'D]: For your lapel.
32 A ¶ He takes it.
33 A Looks at it.
34 A At her.
* 35 A A drop of water falls from a fern onto the brim of his hat.
36 D GILES: Arabella--
37 D ARABELLA: Lady Arabella.
38 D GILES: Lady Arabella. What are you doing?
39 D ARABELLA: Giving you a flower.
40 A ¶ She steps close.
41 A Pins the orchid to his coat with a hairpin.
42 A Her fingers linger.
43 D ARABELLA [CONT'D]: It is poisonous, you know. The sap.
44 A ¶ Giles looks down.
* 45 A A dark bead glistens on his lapel.
46 A ¶ He steps back.
* 47 A Hits the wicker table.
* 48 A His bag spills.

### SCENE s01560 | INT. SEASIDE RESTAURANT - EVENING
Detected names (may be incomplete or contain aliases): MARI, ABERNATHY-OSEI, BEN, LINDGREN-ADEBAYO, ROZ, TOMMASO BELLINI-OKORO, DJ, RADIO
* 1 A ¶ A small trattoria by the sea.
* 2 A Checked tablecloths.
* 3 A Candles in wine bottles.
* 4 A Sunset through salt-streaked windows.
* 5 A A radio murmurs from the kitchen.
6 A ¶ At a corner table sit MARISOL "MARI" ABERNATHY-OSEI, 30s, in a blue dress, and her fiancé, BENEDICT "BEN" LINDGREN-ADEBAYO, 30s, in a pressed shirt.
* 7 A Between them: a bread basket and a bottle of white.
8 A ¶ Across the room, her sister ROSALIND "ROZ" ABERNATHY-OSEI, 30s, in a leather jacket, sits alone with a coffee.
9 A She watches the couple the way one watches weather.
10 A ¶ A waiter, TOMMASO BELLINI-OKORO, 20s, hovers with a pad.
11 D TOMMASO: Ready to order?
12 D BEN: Mari?
13 D MARI: You first.
14 D BEN: The sea bass.
15 D MARI: The same.
16 D TOMMASO: Wonderful.
17 A ¶ He hurries off.
18 A Mari plays with the stem of her glass.
19 A Ben breaks a piece of bread and doesn't eat it.
20 D BEN: You're quiet.
21 D MARI: I'm tired.
22 D BEN: You said that at lunch.
23 D MARI: I was tired at lunch.
24 A ¶ From across the room, Roz lifts her coffee in a mock toast.
25 A Mari sees it.
26 A Looks away.
27 A Ben follows her gaze.
28 D BEN [CONT'D]: Is that your sister?
29 D MARI: Probably.
30 D BEN: You didn't say she'd be here.
31 D MARI: I didn't know.
32 D BEN: Shall I invite her?
33 D MARI: No.
34 D BEN: Mari.
35 D MARI: Don't.
* 36 A ¶ The radio in the kitchen crackles.
* 37 A A DJ's voice cuts through.
38 D RADIO [V.O.]: And that was the Delfonics, for the lovers out there tonight. Next up, a request from Roz in booth six, for Mari.
39 A ¶ Mari stiffens.
40 A Ben looks up.
41 A Roz does not move.
42 D RADIO [V.O., CONT'D]: "Mari, I'm sorry I never came to the wedding rehearsal. Please dance with me."
* 43 A ¶ A slow, old song begins.
44 A Mari closes her eyes.
45 D BEN: What is this?
46 D MARI: It's our song.
47 D BEN: We don't have a song.
48 D MARI: Roz and I do.
49 A ¶ Ben sets down the bread.
50 A Mari stands.
51 A Takes a step toward Roz's table.
52 A Stops.
53 A Looks at Ben.
54 D MARI [CONT'D] (to the room, quietly): I'm going to dance.
* 55 A ¶ The room goes still.
56 A Tommaso, mid-stride with a tray, pauses.
* 57 A A fork drops somewhere.
58 D BEN: Mari. Now?
59 D MARI: Yes.
60 D BEN: With her?
61 D MARI: With my sister.
62 A ¶ Ben stares at his plate.
63 A Rises, pushes in his chair.
64 A Steps aside with a small, brittle bow.
65 D BEN: Go on, then.
66 A ¶ Mari crosses to Roz.
67 A Holds out a hand.
68 A Roz takes it.
69 A They move onto the little cleared floor between tables, and the song swells, and the sea goes violet at the windows.
70 A ¶ Tommaso sets down the tray.
71 A Across the room, Ben pours himself a glass of the white, drinks it quickly, and pours another.
72 D TOMMASO (to Ben, gently): Sea bass, sir?
73 D BEN: Give it to the gulls.
74 A ¶ Tommaso nods.
75 A Retreats.
* 76 A The song reaches its bridge.
77 A Roz whispers something in Mari's ear.
78 A Mari laughs, and then, abruptly, she isn't laughing.
79 D MARI (to Roz): You always do this.
80 D ROZ: Do what?
81 D MARI: Arrive at the end.
82 D ROZ: Somebody has to.
* 83 A ¶ The music fades.
* 84 A The radio hisses.
85 A Mari lets go of Roz's hand.
86 D MARI: I'm marrying him.
87 D ROZ: I know.
88 D MARI: Will you come?
89 D ROZ: If you ask nicely.
90 A ¶ Mari returns to the table.
91 A Sits.
92 A Takes Ben's glass from him, empties it, hands it back.
93 D MARI: I'm hungry.
94 D BEN (a breath): The sea bass was for the gulls.
95 D MARI: Then we'll order again.
96 A ¶ Tommaso, hearing, glides over, pad ready.
97 D TOMMASO: Wonderful.
98 A ¶ Roz drains her coffee, stands, drops a few bills on the table, and walks out into the dusk.

### SCENE s01561_0 | INT. PEDIATRIC WARD - NIGHT
Detected names (may be incomplete or contain aliases): MAN, NURSE PHILOMENA ACHEBE-LINDQVIST
* 1 A ¶ Dim corridor.
* 2 A Cartoon murals peeling.
* 3 A The hum of a vending machine.
4 A ¶ A MAN in scrubs and a hospital badge pushes a gurney.
5 A Face tired.
6 A Badge reads D. VANTERPOOL.
7 A ¶ NURSE PHILOMENA ACHEBE-LINDQVIST, 30s, jogs after him.
8 D PHILOMENA: Doctor, wait.
9 D MAN: Not now.
10 D PHILOMENA: She's coding.
11 D MAN: Which room?
12 D PHILOMENA: Seven.
13 A ¶ They sprint.
* 14 A The gurney squeaks.

### SCENE s01561_1 | INT. ROOM SEVEN - CONTINUOUS
Detected names (may be incomplete or contain aliases): MAN, PHILOMENA, ODALYS ABERNATHY-FENWICK, VANTERPOOL
1 A ¶ A small girl, five, on the bed, tiny chest still.
* 2 A Monitors scream.
* 3 A Her mother is not present.
4 A ¶ The Man leans in.
5 A Starts compressions with two fingers.
6 D MAN: Epi!
7 D PHILOMENA: Pushing!
8 D MAN: Again!
* 9 A ¶ The monitor spikes.
* 10 A Then another tracing.
11 A The girl gasps.
12 D PHILOMENA: She's back.
13 A ¶ The Man wilts.
14 A Wipes his forehead with his sleeve.
15 A ¶ A woman in a coat bursts through the door, wild-eyed.
16 A MRS. ODALYS ABERNATHY-FENWICK, 30s, the girl's mother.
17 D ODALYS: Is she--
18 D MAN: She's breathing.
19 D ODALYS: Thank you. Thank God. Thank you, Dr. Vanterpool.
20 A ¶ The Man closes his eyes.
21 D VANTERPOOL: I'm not a doctor.
22 D ODALYS: What?
23 D VANTERPOOL: I'm the night janitor.
24 D PHILOMENA (whisper): Don Vanterpool. He's been here twenty years.
25 D ODALYS: But you saved her.
26 D VANTERPOOL: I watched the doctors. For twenty years.
* 27 A ¶ Silence.
28 A Odalys takes his hand in both of hers.
29 A Philomena looks at him as if seeing him for the first time.
30 D VANTERPOOL [CONT'D]: Somebody had to start.

### SCENE s01562 | INT. NEONATAL ICU - NURSES' STATION - 3 A.M.
Detected names (may be incomplete or contain aliases): SAOIRSE ACHEBE-LINDGREN, NURSE PERPETUA OKONKWO-HART, ELIAS FAIRWEATHER-NNAMDI, HOLLIS BRZEZINSKI-OSEI
* 1 A ¶ Low lights.
* 2 A Monitors blink like fireflies.
* 3 A Incubators glow along the far wall.
4 A ¶ DR. SAOIRSE ACHEBE-LINDGREN, 40s, scrubs rumpled, drinks cold tea.
5 A NURSE PERPETUA OKONKWO-HART, 50s, charts at the desk.
6 A RESIDENT DR. ELIAS FAIRWEATHER-NNAMDI, 20s, rubs his eyes.
7 A And the father, HOLLIS BRZEZINSKI-OSEI, 30s, in a jacket over pyjamas, stands with a paper cup he has not touched.
8 D SAOIRSE: Mr. Brzezinski-Osei, sit down.
9 D HOLLIS: I'd rather stand.
10 D SAOIRSE: Please.
11 D HOLLIS: Is she worse?
12 D SAOIRSE: She's the same.
13 D HOLLIS: The same.
14 D PERPETUA: Her numbers are stable.
15 D ELIAS: Her oxygen sats are ninety-four.
16 D HOLLIS: Is that good?
17 D SAOIRSE: It's better than yesterday.
18 D HOLLIS: But it's not good.
19 D ELIAS: It's within range.
20 D HOLLIS: Whose range?
21 D SAOIRSE: Ours.
22 D PERPETUA: Mr. Brzezinski-Osei, she is fighting.
23 D HOLLIS: She weighs less than a bag of sugar.
24 D SAOIRSE: She weighs one kilo, four hundred.
25 D HOLLIS: Everyone keeps telling me the number.
26 D ELIAS: It's what we have.
27 D HOLLIS: I have a name for her.
28 D SAOIRSE: We know. Matilda.
29 D HOLLIS: She doesn't know it.
30 D PERPETUA: She does. I say it every shift.
31 D HOLLIS: You say it?
32 D PERPETUA: Every shift, Mr. Brzezinski-Osei.
33 A ¶ Hollis puts down the cup.
34 A Presses his palms to his eyes.
35 D HOLLIS: Can I hold her?
36 D SAOIRSE: Not tonight.
37 D HOLLIS: When?
38 D SAOIRSE: When her numbers hold for twenty-four hours.
39 D HOLLIS: And if they don't?
40 D ELIAS: They will.
41 D HOLLIS: You don't know that.
42 D ELIAS: No. I don't.
* 43 A ¶ Silence.
* 44 A A monitor chirps.
45 A Perpetua looks up, checks the bay, nods.
46 D PERPETUA: She's fine. A feeding pump.
47 A ¶ Hollis laughs, shaky.
48 A Sits.
* 49 A Finally.
50 D HOLLIS: Tell me about the pump.
51 D SAOIRSE: It's a pump.
52 D HOLLIS: Tell me anyway.
53 A ¶ Saoirse sits across from him.
54 A Takes his hand.
55 A Begins to explain.

### SCENE s01563 | EXT. LANTERN MARSH - TWILIGHT
Detected names (may be incomplete or contain aliases): SERAPHINA ACHEBE-LINDQVIST, FERRYWOMAN, SHADOW
* 1 A ¶ A shallow lake of black water under a violet sky.
* 2 A Reeds taller than houses.
* 3 A Thousands of lanterns drift above the surface, each held by a thin silver thread that rises into mist.
* 4 A The air smells of rain and old coins.
5 A ¶ On a rotted jetty at the edge of the marsh stands SERAPHINA ACHEBE-LINDQVIST, 17, in a ragged green cloak, a lantern pole in her fist.
6 A Her boots are wet to the knee.
7 A Her hair has come loose from its braid.
8 A ¶ Behind her, wrapped in a patchwork shawl, a figure sits on an overturned bucket: THE FERRYWOMAN, ageless, skin like bark, eyes pale as river stones.
9 A She mends a net by feel.
10 A ¶ A third presence stirs in the reeds.
11 A A boy-shaped shadow with a heron's long legs, wading toward them without a sound.
12 D SERAPHINA: Is that him?
13 D FERRYWOMAN: That is what comes.
14 D SERAPHINA: I asked who.
15 D FERRYWOMAN: And I answered.
16 A ¶ The shadow reaches the jetty.
17 A Climbs up, dripping.
18 A It unfolds into a gaunt young man in a ferryman's coat, face white and handsome, eyes dark as wells.
19 A He looks at Seraphina.
20 A Bows.
21 D SHADOW: Greetings.
22 D SERAPHINA: Who are you?
23 D SHADOW: Whoever you need.
24 D FERRYWOMAN: Do not trust him.
25 D SHADOW: She never does.
26 A ¶ Seraphina steps back.
* 27 A The lantern pole trembles.
* 28 A The threads overhead hum.
29 D SERAPHINA: I came for my brother.
30 D SHADOW: I know.
31 D SERAPHINA: They said you took him.
32 D SHADOW: They say a great deal.
33 D SERAPHINA: Did you?
34 A ¶ The Shadow glances at the Ferrywoman.
35 A She does not look up from her net.
36 D SHADOW: Your brother is a lantern. Third row, left of the willow.
37 D SERAPHINA: A lantern?
38 D SHADOW: They all are, eventually.
39 A ¶ Seraphina looks out at the thousands of lights.
* 40 A They sway, gentle, indifferent.
41 D SERAPHINA: I want him back.
42 D SHADOW: I can make an exchange.
43 D FERRYWOMAN: Seraphina.
44 D SERAPHINA: What exchange?
45 D SHADOW: A year of your life.
46 D SERAPHINA: A year.
47 D SHADOW: For a year of his.
48 A ¶ The Ferrywoman drops her net.
* 49 A It slides off her knee into the water, and sinks.
50 D FERRYWOMAN (low): Listen to me, child. He is not what he says.
51 D SHADOW: I am exactly what I say.
52 D FERRYWOMAN: Then tell her your name.
53 A ¶ The Shadow smiles for the first time.
* 54 A A smile like a closing door.
55 D SHADOW: Orren.
56 A ¶ At the word, every lantern on the marsh flares, a thousand white flames at once, and Seraphina cries out and raises an arm against the glare.
57 A Orren stands in the light, untouched, polite, waiting.

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
