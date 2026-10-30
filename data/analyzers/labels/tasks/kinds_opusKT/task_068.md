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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusKT/group_0068.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s02329 | INT. CAROUSEL PAVILION - DEPOSITION - DAY
Detected names (may be incomplete or contain aliases): ISADORA FENWICK-ADEYEMI, HAROLD BENNIGAN, MEI-LING, RAFAEL SOLORZANO
* 1 A ¶ A shuttered amusement park, midwinter.
* 2 A Painted horses frozen mid-gallop circle a conference table dragged onto the platform.
* 3 A Dust floats in the cold light from the high windows.
4 A ¶ ISADORA FENWICK-ADEYEMI, 50s, sits upright at the head of the table, a legal pad squared before her.
5 A She has not yet touched her pen.
6 A ¶ HAROLD BENNIGAN, 70, the witness, sits opposite in a camel overcoat that smells of cedar.
7 A His hands rest on a cane.
8 A He studies the brass pole beside him as if it might speak.
9 A ¶ MEI-LING, 20s, the court reporter, bends over her steno machine in the corner.
10 A Her fingers wait.
11 A ¶ RAFAEL SOLORZANO, 40s, opposing counsel, lounges in a chair three seats down.
12 A His tie is loosened.
13 A He has the air of a man who has lost nothing yet.
14 D ISADORA: Mr. Bennigan, you operated this carousel for how many years?
15 D HAROLD: Thirty-one.
16 D ISADORA: And in that time how many children rode it?
17 D HAROLD: I don't know. Thousands.
18 D ISADORA: Tens of thousands, by the park's own ledger.
19 D HAROLD: If you say so.
20 D RAFAEL: Objection. She's testifying.
21 D ISADORA: I'm reading from Exhibit Four.
22 D RAFAEL: Which my client hasn't seen.
23 D ISADORA: He signed the page.
24 A ¶ Harold shifts.
25 A The cane taps the platform.
* 26 A A horse above him seems to lean closer.
27 D ISADORA [CONT'D]: On the tenth of August, a brake pin sheared. A girl was thrown. Do you remember that?
28 D HAROLD: I remember.
29 D ISADORA: Was the pin inspected that morning?
30 D HAROLD: It was.
31 D ISADORA: By whom?
32 D HAROLD: By me.
33 D ISADORA: Was it replaced?
34 D HAROLD: It was not.
35 D ISADORA: Why not?
36 D HAROLD: Because the part was on order.
37 D ISADORA: For how long?
38 D HAROLD: Six weeks.
39 D ISADORA: And you ran the carousel anyway.
40 D RAFAEL: Objection.
41 D ISADORA: He said it was on order. I'm asking if he ran it.
42 D HAROLD (very quietly): I ran it.
43 D ISADORA: Because the owner told you to.
44 D HAROLD: Because that was the job.
45 D ISADORA: Was that the owner's instruction?
46 D HAROLD: Yes.
47 D RAFAEL: Harold, don't.
48 D ISADORA: Counsel, you may instruct the witness not to answer. You may not coach him.
49 A ¶ Rafael rises half out of his chair and sits down again.
50 A Mei-Ling's fingers fly.
51 D ISADORA [CONT'D]: Mr. Bennigan, did the owner put that instruction in writing?
52 D HAROLD: I kept the note.
53 D ISADORA: Where is it?
54 D HAROLD: In my coat.
* 55 A ¶ A silence.
56 A Rafael stares at the old man's pocket as if it might ignite.
57 A Harold reaches in.
58 A Draws out a folded yellow paper.
59 A Lays it on the table.
* 60 A It sits there, pale, over the scarred wood.
61 A ¶ Isadora does not reach for it.
62 A She waits until Rafael does.

### SCENE s02330 | INT. GRAIN SILO - CERES MINING COLONY - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): COMMANDER ABEL TRASK, MOSES KWAME, CORE STORAGE
* 1 A ¶ A vertical steel cylinder, dim and echoing.
* 2 A Frost on the catwalks.
* 3 A The grain gauge reads EMPTY in red.
4 A ¶ COMMANDER ABEL TRASK, 50s, in a patched thermal jacket, climbs the ladder to the upper platform.
5 A His breath fogs.
6 A His hand finds a rusted rail.
7 A ¶ MOSES KWAME, 30s, the colony engineer, waits at the top with a lantern and a datapad.
8 A He hasn't slept.
9 D TRASK: You sent for me.
10 D KWAME: I sent for the Commander. Not the man who made the ration cuts.
11 D TRASK: There is no difference.
12 D KWAME: There was yesterday.
13 A ¶ Trask steps onto the platform.
* 14 A The grating hums under his boots.
15 D TRASK: Show me.
16 A ¶ Kwame lifts the lantern.
* 17 A Across the platform, a hatch stands open, stamped CORE STORAGE - SEALED.
* 18 A Inside, rows of crates.
* 19 A Full.
* 20 A Stacked to the ceiling.
21 A ¶ Trask stares.
22 A His face doesn't change.
23 A He does not look at Kwame.
24 D KWAME: Four hundred tons. Forty days of food. Sealed since the council declared the shortage.
25 D TRASK: Who else knows?
26 D KWAME: Nobody.
27 D TRASK: Then keep it that way.
28 A ¶ Kwame lowers the lantern.
29 A He steps between Trask and the hatch.
30 D KWAME: You knew.
31 D TRASK: I signed the seal.
32 D KWAME: People have been rationing since spring.
33 D TRASK: People have been alive since spring.
34 D KWAME: My daughter has stopped growing.
35 A ¶ Trask finally looks at him.
36 D TRASK: He is not the first to say that to me.
37 A ¶ Kwame's hand tightens on the datapad.
38 A He raises it as if to throw.
39 A Trask doesn't flinch.
40 A Doesn't move.
41 D KWAME: Open it. Tonight.
42 D TRASK: And in forty days?
43 D KWAME: We'll have forty days.
44 A ¶ Trask takes a slow breath.
45 A Reaches for the keypad.
46 A Kwame watches his hand.
47 A Trask enters a code.
* 48 A The lock chunks open.
49 A ¶ He shoves the door wide.
* 50 A A cold wind of old grain sweeps over them.
51 A Kwame stumbles.
52 A Trask catches his arm.
53 A ¶ For a moment, he holds on.
54 A Then he lets go, and he doesn't look back.

### SCENE s02331 | INT. BAKERY - PREDAWN
Detected names (may be incomplete or contain aliases): PILAR, JONAH, DELACROIX-WU
* 1 A ¶ A narrow shop.
* 2 A Racks of proofing dough under cloth.
* 3 A A radio plays low, in Portuguese.
* 4 A Flour in the air like smoke.
5 A ¶ PILAR, 30s, scores loaves with a razor in fast, even strokes.
6 A Apron, forearms white to the elbow.
7 A ¶ JONAH, 30s, the delivery driver, leans on the counter with a crate under one arm, and has been leaning there too long.
8 D PILAR: You're early.
9 D JONAH: You're late.
10 D PILAR: I've been here since two.
11 D JONAH: That's what I mean.
12 A ¶ She doesn't smile.
13 A She slides a tray into the oven, closes the door with her hip, and wipes her hands on her apron, and he pretends to read the crate label while she does.
14 D PILAR: You bring the rye flour?
15 D JONAH: Forty pounds. And the thing you asked for.
16 A ¶ He reaches into his jacket and pulls out a small paper bag, slightly crushed.
17 A She takes it, opens it, looks inside.
* 18 A A single cherry.
19 D PILAR: One?
20 D JONAH: They only had one.
21 D PILAR: It's July.
22 D JONAH: That's when they stop having them.
23 A ¶ She sets the cherry on the cutting board and looks at it as if it were a coin from a country she has never visited.
24 A ¶ Jonah sets down the crate.
25 A Steps closer.
26 A She doesn't step away.
27 D PILAR [CONT'D] (together): You shouldn't.
28 D JONAH (together): I wanted to.
29 A ¶ They both laugh, quietly.
* 30 A The radio fills the gap.
* 31 A ¶ The back door opens.
32 A MR. DELACROIX-WU, 70, her landlord, in a tweed cap and a rain-spotted coat, steps in stamping his shoes.
33 A He takes in the two of them, the cherry, the flour.
34 D MR. DELACROIX-WU: Pilar. The roof.
35 D PILAR: What about the roof?
36 D MR. DELACROIX-WU: It leaks onto the dough.
37 A ¶ Pilar and Jonah look at the ceiling together.
* 38 A A drop forms.
* 39 A Falls.
* 40 A Lands on a loaf with a soft plop.
41 A Nobody moves for a moment.
42 A Jonah picks up the cherry and sets it gently on the damp loaf, like a crown.

### SCENE s02332 | INT. RUINED OPERA HOUSE - FIELD HOSPITAL - NIGHT
Detected names (may be incomplete or contain aliases): SISTER AGNIESZKA, SERGEANT HOLLIS BRANTLEY
* 1 A ¶ The stage is a ward.
* 2 A Cots under gilded boxes.
* 3 A Candles in wine bottles.
* 4 A Above, a painted ceiling of cherubs, half of it fallen onto the stalls.
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
* 21 A The candle flames lean in a draft and straighten.
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

### SCENE s02333 | INT. AGING CAVE - ALPINE CHEESE VAULT - NIGHT
Detected names (may be incomplete or contain aliases): VESNA, DMITRI, KOFI
* 1 A ¶ Stone walls, sweating.
* 2 A Wheels of cheese stacked to the vaulted ceiling, wooden shelves groaning.
* 3 A Humidity gauge on a post.
* 4 A Temperature: 11 C.
5 A ¶ VESNA, 30s, in a hairnet and black coverall, drops from a ventilation shaft onto a shelf.
6 A Lands soft.
7 A Gloved hands to the stone.
8 A ¶ DMITRI, 40s, big for a safecracker, follows.
9 A His shoe slips on a wheel.
* 10 A It rolls.
11 A He catches it against his chest and holds very still.
12 D VESNA (whispering): You are a disaster.
13 D DMITRI: It's slippery.
14 D KOFI [V.O.] (over earpiece, crackling): Talk to me. Where are you?
15 D VESNA (touching her ear): Inside. Cave three.
16 D KOFI [V.O.]: Camera sweep in forty seconds. Left aisle. Don't breathe.
17 A ¶ Vesna waves Dmitri forward.
18 A They creep along the wall.
* 19 A At the far end stands a steel cabinet with a keypad.
20 A Dmitri sets down the cheese, wipes his hands, and presses his ear to the door as if listening to a heartbeat.
21 A Vesna scans the ceiling for the camera, counting on her fingers.
22 D KOFI [V.O., CONT'D]: Twenty seconds.
23 D DMITRI (whispering): Is nineteen digits.
24 D VESNA: It's always nineteen digits.
25 D KOFI [V.O.]: Ten.
* 26 A ¶ The camera swings toward them.
27 A Dmitri throws himself between two stacks of cheese.
28 A Vesna dives behind a ladder.
* 29 A The lens sweeps the aisle, pauses, moves on.
30 A ¶ Vesna exhales.
31 A Dmitri's arm trembles from holding the wheel above him.
32 D DMITRI: Can I put it down?
33 D VESNA: No.
34 D KOFI [V.O.]: Alarm's armed. You have ninety seconds before the guard rotates.
35 A ¶ Dmitri finally sets the cheese on the shelf.
36 A Cracks his knuckles.
37 A Starts the code.
* 38 A The keypad chirps, red, red, green.
39 A He glances at Vesna.
40 A She glances back.
* 41 A Behind them, soft footsteps echo in the passage.
42 A Vesna's eyes go wide.
43 D VESNA (whispering): That's not the guard.
44 D KOFI [V.O.]: Say again?
* 45 A ¶ The cabinet clicks open.
* 46 A Inside, a single wheel of cheese, wrapped in gold foil.
47 D DMITRI: That's it?
48 D VESNA: That's forty thousand euros of cheese.
49 D DMITRI: It's a little small.
* 50 A ¶ Footsteps closer.
51 A Vesna grabs the wheel.
52 A Dmitri grabs her sleeve.
53 A They bolt for the shaft.

### SCENE s02334 | EXT. SKY-WHALE MARKET - FLOATING DECK - DAWN
Detected names (may be incomplete or contain aliases): MIMSY, ASHGROVE, GID, THORNE
* 1 A ¶ A vast whale drifts through pink clouds, its back lashed with rope bridges and canvas stalls.
* 2 A Lanterns burn in the morning.
* 3 A Merchants shout in the distance.
4 A ¶ MIRABEL "MIMSY" ASHGROVE, 20s, a thief in a patchwork cloak, crouches on a spice barrel.
5 A A copper compass spins in her fist.
6 A ¶ GIDEON "GID" THORNE, 30s, in the livery of the Harbor Guard, climbs the barrel stack behind her.
7 A His boots slap the planks.
8 D GID: Mimsy. Don't.
9 D MIMSY: Gid.
10 D GID: Put it down.
11 D MIMSY: It was mine first.
12 D GID: It belonged to the Admiral.
13 D MIMSY: The Admiral is dead.
14 D GID: That doesn't make it yours.
15 A ¶ Mimsy tosses the compass from hand to hand.
16 A He winces at each toss.
17 D MIMSY (to herself): Steady, girl. Steady.
18 D GID: Who are you talking to?
19 D MIMSY: Nobody.
20 A ¶ She stands on the barrel.
21 A Spreads her arms to the whole market below.
22 A The merchants glance up.
23 D MIMSY [CONT'D] (loudly, to the crowd): Good people of the Whale! This man would take my inheritance!
* 24 A ¶ A murmur.
25 A A woman drops a basket of figs.
26 A A boy points.
27 D GID (to the crowd): Nothing of the sort! Return to your stalls!
28 D MIMSY: He's a liar!
29 D GID: She's a thief!
30 D MIMSY: Both can be true.
31 A ¶ Gid lunges.
32 A Mimsy leaps.
33 A They collide midair and crash through the canvas roof of the fruit stall, tumbling in a heap of melons and rope.
34 A ¶ Both lie flat for a second.
35 A Then both scramble upright, glaring, each with one hand on the compass.
36 D GID [CONT'D]: Let go, Mimsy.
37 D MIMSY: You first, Gid.
38 A ¶ They pull.
* 39 A The compass spins.
* 40 A The needle jerks west, then stops, pointing straight down at the clouds beneath the whale.
41 A ¶ Both freeze.
42 A They look at the needle.
43 A Then at each other.
44 D MIMSY [CONT'D] (quietly): Oh.
45 D GID: It's pointing at the sea.
46 D MIMSY: It's pointing at something under the sea.
* 47 A ¶ The whale rumbles, a long, deep note that shakes the stalls.
* 48 A The lanterns sway.
49 A The merchants scatter, tipping carts.
50 D GID: Run?
51 D MIMSY: Run.
52 A ¶ They pull the compass between them like a rope and sprint for the bow.

### SCENE s02335 | INT. BOWLING ALLEY - LANE 9 - NIGHT
Detected names (may be incomplete or contain aliases): HAPPY BIRTHDAY NOOR, WESLEY, BEANS, PRISCILLA, NOOR'S MOTHER, HAKIMI, RUDY
* 1 A ¶ Neon pins on the wall.
* 2 A Carpet printed with comets.
* 3 A The scoring monitor above lane 9 reads HAPPY BIRTHDAY NOOR in rainbow letters.
* 4 A Balls clatter down the lanes in the dim.
5 A ¶ NOOR, 15, sits in a plastic chair with a paper crown tilted on her head.
6 A She holds a slice of cake like a plate she's not sure she's allowed to eat from.
7 A ¶ WESLEY, 15, flips through the score sheet with studied boredom.
8 A BEANS, 14, bites a straw flat.
9 A PRISCILLA, 16, texts under the table, glancing up at the door every few seconds.
10 A ¶ Nobody speaks.
11 A A ball thunders down the next lane, and all four of them watch it.
12 A ¶ NOOR'S MOTHER, MRS. HAKIMI, 40s, in a work blazer, stands at the shoe counter signing a receipt.
13 A She doesn't look at the kids.
14 A ¶ Behind the counter, RUDY, 60s, spritzes a pair of size sevens with disinfectant.
15 A He watches Noor the way a man watches weather.
16 D WESLEY: You're up, Noor.
17 D NOOR: I know.
18 D WESLEY: It's your birthday. You go first.
19 D NOOR: I said I know.
20 A ¶ She doesn't move.
21 A She sets the cake on her knee.
22 A Priscilla's phone buzzes, and she slides it into her sleeve.
23 D BEANS: Is she going to throw it or what?
24 D NOOR: Who?
25 D BEANS: Anyone.
26 D PRISCILLA (under her breath): She's not coming.
27 D NOOR (not looking up): Who's not coming?
28 D WESLEY: Nobody. Throw the ball.
29 A ¶ Noor rises.
30 A Takes a ten-pound ball from the rack.
31 A She holds it with both hands, studies the pins.
* 32 A Down the lane, the machine resets.
33 A ¶ At the counter, Mrs. Hakimi turns.
34 A For a moment her eyes meet her daughter's.
35 A She lifts one hand in a half wave, then returns to the receipt.
36 A ¶ Noor raises the ball.
37 A Draws back.
38 A Lets it go.
39 A It rolls hard and straight into the gutter.
* 40 A The monitor chirps: GUTTER.
41 A ¶ No one says a word.
42 A Rudy sets down the disinfectant and presses the button that raises the bumpers.
43 A ¶ Noor stays at the line.
44 A Her paper crown has slipped over one eye.
45 A She does not fix it.

### SCENE s02336 | INT. FLORESCENT BREAK ROOM - MERIDIAN SYNERGY CORP - DAY
Detected names (may be incomplete or contain aliases): YOUNG WOMAN, VOLKOV, CASSANDRA
* 1 A ¶ A microwave beeps.
* 2 A A motivational poster reads TEAMWORK in a font that has given up.
3 A ¶ A YOUNG WOMAN in a lanyard stands before the coffee machine, holding two empty pods and one full one.
4 A She has the posture of someone who has been told not to touch anything.
5 A ¶ MS. VOLKOV, 50s, regional director, enters in a pencil skirt and a visible air of purpose.
6 D MS. VOLKOV: You're the intern.
7 D YOUNG WOMAN: Yes. Cassandra.
8 D MS. VOLKOV: Cassandra. You've been here three weeks and I haven't seen you do one thing.
9 D CASSANDRA: I've been doing the thing you asked.
10 D MS. VOLKOV: What thing?
11 D CASSANDRA: Shadowing you.
12 A ¶ Ms. Volkov considers this.
13 A She takes the pod from Cassandra, studies it, and drops it in the trash.
14 D MS. VOLKOV: Then she should have noticed I don't drink this brand.
15 D CASSANDRA: She did.
16 D MS. VOLKOV: Who?
17 D CASSANDRA: Me. I noticed. I just didn't know she was allowed to say it.
18 A ¶ They look at each other.
* 19 A The microwave beeps again.
20 D MS. VOLKOV: You're promoted.
21 D CASSANDRA: I'm what?
22 D MS. VOLKOV: To associate. Effective now. She who notices things should be in the meetings.
23 D CASSANDRA: Wait. Who is "she"?
24 D MS. VOLKOV (already leaving): Whoever's holding the pod.
25 A ¶ She exits.
26 A Cassandra looks down at the pod.
27 A Looks at the poster.
28 A Quietly, she sets the pod on the counter and walks out after her.

### SCENE s02337 | INT. HOTEL BALLROOM - ARBITRATION - DAY
Detected names (may be incomplete or contain aliases): ARBITRATOR HENRIETTA BOSCO, CLAIMANT DARNELL FITZGIBBON, LUCINDA TAN-ROSSI, RESPONDENT GUSTAV HALVERSEN, AMBROSE KELLEHER, BRIGITTE
* 1 A ¶ A rented ballroom.
* 2 A Chandeliers, stacking chairs, a banquet table draped in white.
* 3 A Through the folding partition, wedding music thumps: a bass line, a cheering crowd.
4 A ¶ ARBITRATOR HENRIETTA BOSCO, 60s, sits at the head of the table with a legal pad and a stopwatch.
5 A She wears reading glasses on a chain and an expression of hard-won patience.
6 A ¶ To her left: CLAIMANT DARNELL FITZGIBBON, 40s, in a suit that doesn't quite close, and his attorney, LUCINDA TAN-ROSSI, 30s, with a color-coded binder.
7 A ¶ To her right: RESPONDENT GUSTAV HALVERSEN, 60s, silver beard, folded hands, and his attorney, AMBROSE KELLEHER, 50s, with a fountain pen he clicks constantly.
8 A ¶ A paralegal, BRIGITTE, 20s, sits at the end with a laptop and a timer.
* 9 A ¶ The wedding bass drops.
10 A Everyone flinches.
11 D BOSCO: Mr. Keller... Kelleher. Your opening.
12 D KELLEHER: Thank you, Arbitrator. My client, Mr. Halversen, has operated this ballroom for twenty years.
13 D LUCINDA: And has never once fixed the ceiling.
14 D KELLEHER: I was not finished.
15 D BOSCO: Ms. Tan-Rossi, wait your turn.
16 D LUCINDA: Apologies, Arbitrator. I was moved.
17 A ¶ She grins.
18 A Darnell elbows her.
19 A Halversen studies the chandelier above them.
* 20 A A crystal quivers with the bass.
21 D KELLEHER: The roof has been inspected annually.
22 D DARNELL: It fell on my cousin's wedding cake.
23 D HALVERSEN (quietly): It was a small piece of ceiling.
24 D DARNELL: It was the size of a hubcap!
25 D BOSCO: Mr. Fitzgibbon, you will address counsel, not the respondent.
26 D DARNELL: Sorry, Arbitrator.
27 A ¶ She lowers her glasses.
28 A He sinks into his seat.
29 A Brigitte whispers to Lucinda, who nods, flips three tabs, and slides a photograph across the table.
30 D LUCINDA: Exhibit Nine. The cake, post-impact.
31 A ¶ Bosco picks up the photograph.
32 A She studies it for a long moment.
33 A Something almost like a smile crosses her face and is quickly put away.
34 D BOSCO: Mr. Halversen, did you replace the cake?
35 D HALVERSEN: Madame, I replaced the ceiling.
36 D BOSCO: That wasn't my question.
37 A ¶ Halversen unfolds his hands.
38 A Refolds them.
39 A Kelleher stops clicking his pen.
* 40 A A cheer rises from the wedding.
* 41 A A woman's voice over a microphone: "And now, the first dance!"
42 A ¶ Everyone at the table turns toward the partition.
* 43 A The music slows to something soft.
44 D BOSCO [CONT'D] (to the room): We will take ten minutes.
45 A ¶ She stands.
46 A The others stand.
47 A Darnell, Halversen, the lawyers, all of them drift toward the divider, and no one says why.

### SCENE s02338 | INT. PET CEMETERY - GIFT SHOP - DAY
Detected names (may be incomplete or contain aliases): FENELLA ABERNATHY, TOBY QUINN, TRACKSUIT MAN, TRACKSUIT, PRUITT
* 1 A ¶ A cramped shop inside a converted barn.
* 2 A Shelves of tiny urns, plush angel wings, paw-print stepping stones.
* 3 A A cash register shaped like a bone.
* 4 A Soft harp music drifts from a speaker.
5 A ¶ FENELLA ABERNATHY, 50s, in a lavender smock, arranges a display of memorial candles.
6 A She hums with the harp.
7 A ¶ Behind the counter, TOBY QUINN, 20s, scrolls on his phone, a name tag reading TOBY (ASK ME ABOUT GRIEF).
* 8 A ¶ The door jingles.
9 A A MAN IN A TRACKSUIT, 40s, sunglasses on indoors, steps in carrying a shoebox.
10 D TRACKSUIT MAN: Hi. I'd like to bury a hamster.
11 D FENELLA (warmly): Oh. I'm so sorry for your loss.
12 D TRACKSUIT MAN: It's not a loss. It's a business decision.
13 A ¶ Fenella tilts her head.
14 A Toby sets his phone down.
15 D TOBY: What kind of hamster?
16 D TRACKSUIT MAN: The kind that owes me money.
* 17 A ¶ Silence.
* 18 A The harp plays on.
19 D FENELLA: Plots start at three hundred dollars. For rodents, two hundred.
20 D TRACKSUIT MAN: Does that include a marker?
21 D FENELLA: Marker is extra.
22 D TRACKSUIT MAN: What does it say?
23 D TOBY: Whatever you want. "Beloved companion." "In loving memory."
24 D TRACKSUIT MAN: Can it say "Dead"?
25 D FENELLA: We would have to run that by Mr. Pruitt.
* 26 A ¶ A phone on the wall rings.
27 A Fenella answers it.
28 D FENELLA [CONT'D] (into phone): Rosewood Rest, this is Fenella.
29 D PRUITT [O.S.] (over the phone, a gravelly voice): Fenella, it's Pruitt. Is someone trying to bury a hamster?
30 D FENELLA: How did you know?
31 D PRUITT [O.S.]: It's the third this week.
32 D FENELLA: Are you quite sure it's a hamster?
33 D PRUITT [O.S.]: I have never been sure.
34 A ¶ Fenella covers the mouthpiece.
35 A Whispers to Toby.
36 D FENELLA [CONT'D] (whispering): Mr. Pruitt says it's the third.
37 D TOBY (whispering): Of what?
38 D FENELLA (whispering): Of the week.
39 A ¶ The Tracksuit Man shifts the shoebox from one arm to the other.
* 40 A It makes a small rattle.
41 D TRACKSUIT MAN: Is there a problem?
42 D TOBY: No problem, sir. Fenella, the phone.
43 D FENELLA (into phone): Mr. Pruitt, I'll call you back.
44 A ¶ She hangs up.
45 D TRACKSUIT MAN: Do you take cash?
46 D FENELLA: We take cash.
47 D TOBY: We take cash.
48 D TRACKSUIT MAN: Good. Because I'd like to pay in advance. For all of them.
49 A ¶ He sets the shoebox on the counter.
50 A Opens the lid a crack.
51 A Fenella peeks inside.
52 A Her smile freezes.
53 A Toby leans in.
54 D TOBY [CONT'D]: That's not a hamster.
55 D TRACKSUIT MAN: I told you. Business decision.
56 D FENELLA (very calmly): Toby. Lock the door.
57 A ¶ Toby locks the door.
* 58 A The harp plays on.
59 D TRACKSUIT MAN (removing his sunglasses): Now. Tell me about your grief counseling.
60 A ¶ Fenella and Toby exchange a long look.
61 D PRUITT [O.S.] (through the wall speaker, faint): Is everything all right in there?
62 D FENELLA (brightly, to the speaker): Perfectly fine, Mr. Pruitt!
63 D TOBY (to the Tracksuit Man): Sir, would you like a candle?
64 A ¶ The man picks one up.
65 A Smells it.
66 D TRACKSUIT MAN: Does this one come in lavender?
67 D FENELLA: It comes in lavender.
68 D TRACKSUIT MAN: Then I'll take it.
69 A ¶ He sets down a wad of bills.
70 A Fenella counts them with trembling fingers.
71 A Toby stares at the box.
* 72 A The harp swells.
73 A ¶ Slowly, Fenella slides the box off the counter and into a drawer, and shuts it as if closing a secret.

### SCENE s02339 | EXT. RIVER OF ASH - FERRY LANDING - DUSK
Detected names (may be incomplete or contain aliases): FERRYWOMAN, LANTERN VOICE
* 1 A ¶ Gray water.
* 2 A No current, no wind.
* 3 A A rickety dock lit by a single lantern.
* 4 A Beyond it, a flat ferry with a rope-pulled mast.
5 A ¶ THE FERRYWOMAN, 60s, in a cloak the color of dust, stands at the stern with a long pole.
6 A She doesn't speak.
7 A She counts the figures lined up on the dock: shadows with hats, hands, the vague outline of people.
8 A ¶ A VOICE, deep, ancient, from the lantern, as if the flame were a mouth.
9 D LANTERN VOICE [O.S.]: How many tonight?
10 A ¶ She holds up four fingers, then one more.
11 D LANTERN VOICE [O.S., CONT'D]: Five. That's all?
12 A ¶ She nods.
13 A Raises her pole.
14 A Plants it in the water.
15 A ¶ She turns to the shadows.
16 D FERRYWOMAN (to the whole line): Step aboard. One at a time. No pushing.
17 A ¶ She waits.
18 A They shuffle forward.
19 A One shadow stops at the rail.
20 A ¶ She leans toward it.
21 D FERRYWOMAN [CONT'D] (to that shadow): You owe me a coin.
22 A ¶ The shadow doesn't move.
23 A She sighs.
24 A Pulls a coin from her cloak and drops it in the water.
25 D FERRYWOMAN [CONT'D] (muttering): Third time this month. Nobody carries their own coin anymore.
26 D LANTERN VOICE [O.S.]: I heard that.
27 D FERRYWOMAN: You were meant to.
28 A ¶ She pushes off.
* 29 A The ferry drifts.
* 30 A The lantern recedes behind them.
* 31 A Gradually, quietly, it dims, and the voice goes with it.
32 D LANTERN VOICE [O.S., CONT'D] (faint): Don't be late.
33 D FERRYWOMAN (to the dark, flat): I am never late.
* 34 A ¶ A spark flies off the pole.
35 A For a heartbeat she is lit from below, and her face is young.
* 36 A Then it is gone.
37 D FERRYWOMAN [CONT'D] (to the shadows, softly): Hold on. It gets colder.

### SCENE s02340 | INT. SPEAKEASY BEHIND ABERNETHY & SONS FUNERAL PARLOR - NIGHT (1926)
Detected names (may be incomplete or contain aliases): MADAME CELESTINE DUBOIS, SHORTY, WASHINGTON, HORATIO PELL, EUGENIA PELL, BIG DOMINIC, SAL, INSPECTOR CORNELIUS BLACKWOOD
* 1 A ¶ A low cellar dressed as a mourning room.
* 2 A Black crepe on the walls.
* 3 A Coffins serve as tables, lids propped for drinks.
* 4 A A gramophone scratches out a muffled foxtrot.
* 5 A Cigar smoke curls under a tin ceiling.
6 A ¶ MADAME CELESTINE DUBOIS, 50s, proprietress, in black beads and a veiled hat, sits behind the bar polishing a glass.
7 A Eyes like flint.
8 A ¶ OTIS "SHORTY" WASHINGTON, 30s, bartender, small, quick, in a white apron stained gray.
9 A He pours without looking.
10 A ¶ At a coffin table, HORATIO PELL, 40s, banker, in a bowler, nurses a whiskey.
11 A Beside him, his young wife, EUGENIA PELL, 20s, in a flapper dress, stares at the floor.
12 A ¶ In the corner, two men in dark coats: BIG DOMINIC, 30s, thick neck, and his partner, SAL, 20s, who bites his fingernails.
13 D MADAME DUBOIS (to the whole room): Another round for the mourners. On the house.
* 14 A ¶ A weak cheer.
15 A Horatio raises his glass.
16 A Eugenia does not.
17 D HORATIO (low, to Eugenia): Smile.
18 D EUGENIA: I am.
19 D HORATIO: Don't look at the door.
20 D EUGENIA: I wasn't.
21 A ¶ Shorty slides two drinks across.
22 A Dominic watches Horatio.
23 A Sal rubs his thumb against his knee.
24 D MADAME DUBOIS (to Shorty, quietly): Lock the cellar.
25 D SHORTY: Yes, ma'am.
26 A ¶ He moves to the stairs.
* 27 A A heavy tread above.
* 28 A Someone knocks, twice, slow, then once, fast.
29 A ¶ Everyone stops.
* 30 A The gramophone needle skips.
31 A ¶ A new figure descends the stairs.
32 A INSPECTOR CORNELIUS BLACKWOOD, 50s, rain on his shoulders, badge in hand, steps into the lamplight.
33 A He surveys the room, the coffins, the crepe.
34 D INSPECTOR BLACKWOOD: Evening, all. I'm told someone has died.
35 D MADAME DUBOIS (very evenly): Several, Inspector. Mostly of thirst.
36 A ¶ Dominic reaches inside his coat.
37 A Horatio's hand finds Eugenia's wrist.
38 A Sal stands, scraping his chair.
39 D INSPECTOR BLACKWOOD (to himself): Always the same room.
40 A ¶ He sets his badge on the bar.
41 A Takes off his hat.
42 A Places it beside it.
43 A Nobody breathes.
44 D INSPECTOR BLACKWOOD [CONT'D] (to the room): Gentlemen. Ladies. I'm here to pay my respects.
* 45 A ¶ Silence.
46 A Then Madame Dubois, slowly, pours him a glass.

### SCENE s02341 | INT. OIL RIG - MEDICAL BAY - NIGHT
Detected names (may be incomplete or contain aliases): ILSABET HALVORSEN-REYES, WALLY, OKONJO, CAPTAIN LOWE
* 1 A ¶ A steel-walled room bolted to the deck of a North Sea platform.
* 2 A A single examination cot, an oxygen tank strapped to the wall, a shelf of rattling supplies.
* 3 A The floor shudders with each wave.
* 4 A Rain hammers the window.
5 A ¶ DR. ILSABET HALVORSEN-REYES, 40s, in rain-stained scrubs, bends over the cot.
6 A A headlamp hangs around her neck.
7 A Her eyes are red but steady.
8 A ¶ On the cot lies WALLACE "WALLY" OKONJO, 50s, a roughneck, his shirt cut open.
9 A A pad of gauze soaks red above his ribs.
10 A He grits his teeth.
* 11 A ¶ A radio on the wall crackles.
* 12 A The signal is thin.
13 D CAPTAIN LOWE [V.O.] (over radio): Doctor, we're losing the chopper window. Fifteen minutes.
14 D DR. HALVORSEN-REYES (to the radio): Understood.
15 D WALLY: Doc...
16 D DR. HALVORSEN-REYES: Don't talk.
17 D WALLY: Is it bad?
18 D DR. HALVORSEN-REYES: It's a rib and a lung. I've seen worse.
19 D WALLY: Where?
20 D DR. HALVORSEN-REYES (to herself): Not here.
21 A ¶ She lifts the gauze.
22 A Looks.
23 A Presses the dressing back down with the heel of her hand.
24 A Wally hisses.
25 D CAPTAIN LOWE [V.O.] (over radio): Everyone's standing by on deck. We can wait if you need more time.
26 D DR. HALVORSEN-REYES (to the radio, then to the empty room): Nobody waits. Hear me? Nobody waits for me.
27 A ¶ She opens a drawer.
28 A Pulls out a chest tube kit and tears the sterile wrapper with her teeth.
29 D WALLY: Doc. If I don't...
30 D DR. HALVORSEN-REYES: Wally.
31 D WALLY: Tell my wife I kept the lighthouse key.
32 D DR. HALVORSEN-REYES: You tell her yourself.
33 A ¶ She slides the tube in.
34 A Wally shouts.
35 A Then gasps.
36 A Then, slowly, his chest rises, and his face loosens.
37 D DR. HALVORSEN-REYES [CONT'D] (to Wally): There it is. Breathe with me.
38 A ¶ He breathes.
39 A She breathes.
* 40 A A wave shakes the room.
* 41 A The window goes white with spray.
42 D CAPTAIN LOWE [V.O.] (over radio): Doctor?
43 D DR. HALVORSEN-REYES (to the radio, calm): Captain, you can send the chopper. He's stable.
44 D CAPTAIN LOWE [V.O.] (over radio): Copy that. Good work, Doctor.
45 A ¶ She switches off the radio.
46 A Slumps onto the stool.
47 A Wally lifts a hand.
48 A She takes it.

### SCENE s02342 | INT. MADAME ROUSSEL'S SALON - PARIS - EVENING (1791)
Detected names (may be incomplete or contain aliases): MADAME ROUSSEL, MONSIEUR ROUSSEL, LOUISE, ANTOINE, ABBÉ FOURNIER, CAPTAIN DUVALIER
* 1 A ¶ Candles in silver sconces.
* 2 A Gilt chairs.
* 3 A A harpsichord with its lid closed.
* 4 A Six guests sit around a tea table, porcelain cups trembling on saucers, as the window shows a red dusk beyond the curtains.
5 A ¶ MADAME ROUSSEL, 50s, presides in powdered hair.
6 A Her husband, MONSIEUR ROUSSEL, 60s, studies the sugar tongs.
7 A Their niece, LOUISE, 18, watches the window.
8 A A young poet, ANTOINE, 20s, fiddles with a cravat pin.
9 A A priest, ABBÉ FOURNIER, 60s, stirs his tea long past need.
10 A An officer, CAPTAIN DUVALIER, 30s, sits stiffly, hand on his sword.
11 D MADAME ROUSSEL: More sugar, Abbé?
12 D ABBÉ FOURNIER: No, Madame, I—
13 D LOUISE: Did you hear that?
14 D ANTOINE: It's only the carriage.
15 D MONSIEUR ROUSSEL: At this hour there are no carriages.
16 D CAPTAIN DUVALIER (rising): I will see.
17 D MADAME ROUSSEL: Sit down, Captain.
18 D ABBÉ FOURNIER: Child, it is nothing.
19 D LOUISE: It is a drum.
* 20 A ¶ Silence.
* 21 A The tea steams.
* 22 A Far below, a drumbeat rolls through the street.
* 23 A Then, much closer, a fist on the front door.
24 A Madame Roussel pours another cup with perfect, trembling grace.

### SCENE s02343 | EXT. DRY WELL - HOMESTEAD - DAY
Detected names (may be incomplete or contain aliases): AMOS, TREVELYAN, CASSIUS DELANEY
* 1 A ¶ Flat, cracked earth to the horizon.
* 2 A A single stone well, rope rotted and trailing in the dirt.
* 3 A A windmill turns without conviction.
4 A ¶ AMOS "OLD AMOS" TREVELYAN, 60s, sits on the well's lip, a canteen across his knees, bootless, feet in the dust.
5 A ¶ CASSIUS DELANEY, 30s, rides up on a gray mare.
6 A Hat low, duster pale with road.
7 A He swings down and ties the horse to the windmill.
8 D CASSIUS: Afternoon, Amos.
9 D AMOS: Cassius. You're a long way from town.
10 D CASSIUS: So are you.
11 D AMOS: I live here.
12 D CASSIUS: Not for long, I hear.
13 A ¶ Amos unscrews the canteen.
14 A Tilts it.
* 15 A A few drops fall on his tongue.
16 D AMOS: They send you to talk me out?
17 D CASSIUS: Nobody sends me.
18 D AMOS: That's what I thought.
19 D CASSIUS: The bank wants the land.
20 D AMOS: The bank can have the dust.
21 D CASSIUS: It's the dust they're paying for.
22 D AMOS: Then the bank's a fool.
23 A ¶ Cassius crouches.
24 A Picks up a clod and crumbles it.
25 A He looks into the well.
26 D CASSIUS: How deep was she?
27 D AMOS: Forty feet when I dug her. Now? Maybe thirty-nine.
28 D CASSIUS: You've been down there?
29 D AMOS: Every morning.
30 D CASSIUS: Why?
31 D AMOS: To see if she changed her mind.
* 32 A ¶ A long silence.
* 33 A The windmill creaks.
* 34 A A hawk crosses the sky.
35 D CASSIUS: Amos, I've known you since I was a boy.
36 D AMOS: You were a boy who stole my peaches.
37 D CASSIUS: I was a boy who was hungry.
38 D AMOS: Same thing.
39 A ¶ Cassius laughs, short.
40 A Stands.
41 A Brushes his hands on his pants.
42 D CASSIUS: I came to tell you something.
43 D AMOS: Go on.
44 D CASSIUS: There's water, Amos. East of here. A man in the hills found a spring.
45 A ¶ Amos lowers the canteen.
46 A He turns his head slowly.
47 D AMOS: How far?
48 D CASSIUS: Two days. Maybe three, with a wagon.
49 D AMOS: And who owns it?
50 D CASSIUS: Nobody yet.
51 D AMOS (softly): Nobody yet.
52 A ¶ He looks into the well.
53 A Then, deliberately, he lifts one boot from the dust and pulls it on.
54 D AMOS [CONT'D]: Cassius, what do you want for it?
55 D CASSIUS: I want my name on the deed beside yours.
56 A ¶ Amos stares at him for a long moment.
57 A Then he reaches behind the well, pulls out a shotgun, and levels it at Cassius's chest.
58 D AMOS: That's what I thought.
59 D CASSIUS: Amos.
60 D AMOS: You didn't come to tell me. You came to see if I'd say yes.
61 D CASSIUS: Put it down, old man.
62 D AMOS: Where's the spring, Cassius?
63 D CASSIUS: There is no spring.
64 A ¶ Amos's finger tightens.
65 A Cassius does not move.
66 D CASSIUS [CONT'D]: But there was a time you'd have believed me.
* 67 A ¶ The windmill creaks.
68 A Amos lowers the gun, slowly.
69 A He sits back on the well, looking older.
70 A Cassius mounts his mare and rides off, and Amos does not watch him go.

### SCENE s02344 | INT. WAY STATION - STAGE STOP - NIGHT
Detected names (may be incomplete or contain aliases): MARGUERITE LAFLEUR, HUDSON CROY, OLD PETE, VOICE, DEPUTY KANE
* 1 A ¶ One lamp, one table.
* 2 A Four people circle a stew pot gone cold.
* 3 A Wind rattles the shutters.
4 A ¶ MARGUERITE LAFLEUR, 40s, in a traveling dress, grips a carpetbag.
5 A HUDSON CROY, 30s, a drummer in a checked vest, drums his fingers.
6 A OLD PETE, 70, the station keeper, whittles.
7 D MARGUERITE: I paid for a coach to Sedalia.
8 D HUDSON: We all paid.
9 D OLD PETE: Coach left this morning.
10 D MARGUERITE: Without me?
11 D OLD PETE: Without anyone. The driver took sick.
12 D HUDSON: Then who's out there?
13 D MARGUERITE: Where?
14 D HUDSON: Listen.
* 15 A ¶ Hoofbeats outside, slow.
16 A A rider dismounts.
17 A Boots on the porch.
18 D OLD PETE (under his breath): Not tonight.
19 A ¶ A VOICE (O.S.) outside, rough and unhurried.
20 D DEPUTY KANE [O.S.]: Pete! Open up! I know you've got folks in there.
21 D HUDSON (whispering): Is he the law?
22 D OLD PETE: He is the law's cousin.
23 D MARGUERITE: Then we open it.
24 D HUDSON: We do not open it.
25 D DEPUTY KANE [O.S.]: I'll count to five!
26 A ¶ Hudson stands, walks to the door, and slides the bolt back.
27 A Marguerite and Pete stare.
28 A He opens it wide.

### SCENE s02345 | INT. DUGOUT CHAPEL - WESTERN FRONT - NIGHT
Detected names (may be incomplete or contain aliases): CHAPLAIN ROSARIO VELAZQUEZ, TEDDY, LACROIX, SERGEANT NIKOLAI BORISOV
* 1 A ¶ A cellar dug under a ruined church.
* 2 A Sandbags for pews.
* 3 A A cracked crucifix propped on an ammunition crate.
* 4 A A gramophone, hand-cranked, plays one worn waltz.
* 5 A Candle stubs.
* 6 A The earth trembles with a distant shelling.
7 A ¶ CHAPLAIN ROSARIO VELAZQUEZ, 40s, kneels at the crate, adjusting the crucifix.
8 A His hands are quick and wrong.
9 A ¶ PRIVATE EDMUND "TEDDY" LACROIX, 19, sits on a sandbag with a letter on his knee and a pencil behind his ear.
10 A ¶ SERGEANT NIKOLAI BORISOV, 30s, leans on the entrance, rifle slung, helmet dented.
11 D TEDDY: Father. How do you write to someone you haven't spoken to in a year?
12 D CHAPLAIN VELAZQUEZ: You begin with the weather.
13 D TEDDY: It's raining.
14 D CHAPLAIN VELAZQUEZ: Then that's a start.
15 D TEDDY: She won't want to know about the rain.
16 D CHAPLAIN VELAZQUEZ: Nobody wants to know about the rain. That's why it is safe.
17 D BORISOV: Safe is a good word for it.
18 D CHAPLAIN VELAZQUEZ: Sergeant. You may sit.
19 D BORISOV: I'll stand.
20 D TEDDY: What if I tell her the truth?
21 D CHAPLAIN VELAZQUEZ: Which truth?
22 D TEDDY: That I'm afraid.
23 D BORISOV: She knows that.
24 D TEDDY: How?
25 D BORISOV: Everyone's afraid. The ones who say they're not are the ones lying.
26 D CHAPLAIN VELAZQUEZ: Sergeant Borisov is a wise man.
27 D BORISOV: Sergeant Borisov is a tired man.
28 D TEDDY: Are you afraid, Sergeant?
29 D BORISOV: I don't discuss it.
30 D TEDDY: That's an answer.
31 D BORISOV: Take it however you like.
32 D CHAPLAIN VELAZQUEZ: Edmund. Write what you would say if she were standing here.
33 D TEDDY: She would never be standing here.
34 D CHAPLAIN VELAZQUEZ: Then write that.
* 35 A ¶ The shelling swells.
* 36 A Dust sifts from the beams.
* 37 A The gramophone skips, and starts again.
38 D TEDDY: Dear Mathilde. It is raining.
39 D CHAPLAIN VELAZQUEZ: Good.
40 D TEDDY: There is a waltz playing. It's the only one we have.
41 D BORISOV: It's a bad waltz.
42 D TEDDY: It's the only one.
43 D CHAPLAIN VELAZQUEZ: Keep going.
44 D TEDDY: I think of you at the window. I think of you hanging the washing. I think of you not thinking of me, and I'm glad.
45 D BORISOV: Glad?
46 D TEDDY: That she's not afraid for me.
* 47 A ¶ A very long silence.
48 A Then Borisov crosses the cellar.
49 A Sits beside Teddy on the sandbag.
50 A Takes the pencil from behind the boy's ear, hands it to him, and says nothing more.

### SCENE s02346 | INT. CURLING RINK - 5 A.M.
Detected names (may be incomplete or contain aliases): GRETCHEN VANDERMEER, BERNIE, OKAFOR, LINNEA SOLBERG, XIMENA TREVINO
* 1 A ¶ A long sheet of pebbled ice under cold blue light.
* 2 A The rafters are hung with faded club banners.
* 3 A Frost on the glass.
* 4 A The Zamboni sits idle at the far end like a sleeping animal.
5 A ¶ Four women stand at the hog line in padded jackets, brooms upright.
* 6 A Breath rises from them in synchronized clouds.
7 A ¶ GRETCHEN VANDERMEER, 50s, the skip, holds the house in her gaze as if it might move if she looked away.
8 A BERNADETTE "BERNIE" OKAFOR, 40s, the lead, flexes a wrist wrapped in tape.
9 A LINNEA SOLBERG, 30s, third, adjusts a glove for the tenth time.
10 A And at the back, 19-year-old XIMENA TREVINO, the new second, holds her broom as if it might fire.
11 D GRETCHEN: We are down by one. Last end. Hammer is theirs.
12 D BERNIE: They always have the hammer.
13 D LINNEA: They always have the luck.
14 D GRETCHEN: Luck is a story we tell after.
15 D XIMENA: Should I sweep hard or light?
16 D GRETCHEN: Hard until I say light. Light until I say hard.
17 D XIMENA: That's the same thing.
18 D GRETCHEN: Then you understand perfectly.
19 D LINNEA: She will, in a year.
20 D BERNIE: In a year she will be skipping.
21 D XIMENA: I don't want to skip.
22 D GRETCHEN: No one wants to skip. We want the rock to go where we want it. The skip is the one who stands there when it doesn't.
23 D BERNIE: That's the most poetic thing she's said all season.
24 D LINNEA: It was a little bit poetic.
25 D GRETCHEN: It was a rule. Eyes on the broom.
26 D XIMENA: Okay. Eyes on the broom.
27 D GRETCHEN: Bernie, first stone. Draw to the four-foot. Light touch.
28 D BERNIE: Light as a prayer.
29 D GRETCHEN: Do not say "prayer."
30 D BERNIE: Light as an apology.
31 D GRETCHEN: Better.
32 A ¶ Bernie settles into the hack.
33 A The ice hisses under her slider as she pushes out, long and low.
34 A She releases the stone, and it glides away with a low whisper, the handle turning slowly.
35 D GRETCHEN [CONT'D] (shouting): Sweep!
36 A ¶ Linnea and Ximena drop and sweep, brooms flicking in perfect alternating rhythm.
37 A Their breath comes in hard bursts.
* 38 A The stone drifts, curls, slows.
39 D GRETCHEN [CONT'D]: Hold. Hold. Off.
40 A ¶ They lift their brooms.
* 41 A The stone slides to a stop, dead center of the house.
* 42 A A tiny sound, like a coin settling on a table.
43 A ¶ Nobody cheers.
44 A They only look at it, steaming faintly on the ice.

### SCENE s02347 | INT. ORBITAL GREENHOUSE - HELIX STATION - "DAY" CYCLE
Detected names (may be incomplete or contain aliases): HELENA VASQUEZ-OLUWO, JO, ARDEN, COMMANDER RHEE, TEENAGE CADET, CADET LISANDRA, TECHNICIAN WU
* 1 A ¶ A great curved garden turning slowly in space.
* 2 A Glass arches filled with starlight.
* 3 A Rows of tomato vines, lemon dwarfs, stalks of corn, all tied to trellises with soft cord.
* 4 A A gentle hum of pumps.
* 5 A Water droplets drift, glittering.
6 A ¶ DR. HELENA VASQUEZ-OLUWO, 50s, botanist, floats upside down among the tomatoes with a clipboard strapped to her wrist.
7 A She is pinching a leaf, frowning.
8 A ¶ Below her, hands on a rail, ENGINEER JOSEPHINE "JO" ARDEN, 30s, in a gray station jumpsuit, adjusts a valve and watches the readout.
9 D HELENA: It's yellowing.
10 D JO: The whole row?
11 D HELENA: Half.
12 D JO: Is it the light?
13 D HELENA: It isn't the light.
14 D JO: Then the water.
15 D HELENA: It isn't the water either.
16 D JO: Then what?
17 A ¶ Helena pulls herself down the trellis.
18 A She hangs beside Jo.
19 A She holds out the leaf.
* 20 A It crumbles to powder in her fingers.
21 D JO [CONT'D]: That's not blight.
22 D HELENA: No.
23 D JO: That's... static.
24 D HELENA: Yes. She thinks so too.
25 D JO: Who?
26 D HELENA: Commander Rhee. She came by this morning.
27 D JO: She didn't tell me.
28 D HELENA: She doesn't tell you things.
29 D JO: She tells you.
30 D HELENA: She asks me things. It isn't the same.
31 A ¶ Jo's jaw works.
32 A She taps the readout.
* 33 A Numbers scroll in amber.
34 A She stops on one.
35 D JO: Helena. That's radiation.
36 D HELENA: I know.
37 D JO: From where?
38 D HELENA: From outside.
39 D JO: That's impossible. The shielding's rated for...
40 D HELENA: It was rated for the old sun.
41 A ¶ Jo turns slowly.
42 A They look at each other.
* 43 A A droplet of water drifts between them and breaks against the glass.
* 44 A ¶ The station intercom chimes.
* 45 A A calm voice.
46 D COMMANDER RHEE [V.O.]: All hands. Report to the central deck. All hands.
47 D JO: That's her.
48 D HELENA: Of course it is.
49 A ¶ Jo pushes off the rail.
50 A Helena grabs a handful of leaves, stuffs them in her pocket.
51 A They float down the long arc of the garden toward the airlock, side by side.
* 52 A Behind them, the tomatoes turn from red to gray.
53 A ¶ At the bulkhead, a TEENAGE CADET, 17, in an oversized uniform, drifts into their path, wide-eyed, a tablet clutched to her chest.
54 D CADET LISANDRA: Doctor. Engineer. The Commander says it's the sun.
55 D JO: We know.
56 D CADET LISANDRA: She says there's a window. Eleven hours.
57 D HELENA: For what?
58 D CADET LISANDRA: To decide.
59 A ¶ Helena closes her eyes.
60 A Jo takes the tablet from the cadet's hands and reads it.
61 A Then, very slowly, she hands it back.
62 A She turns her gaze to Helena.
63 A Helena doesn't open her eyes.
64 D HELENA: Tell me.
65 D JO: We can evacuate half.
66 D HELENA: Which half?
67 D JO: Whichever half she says.
68 D HELENA: And the rest?
69 D JO: She says they'll have the garden.
70 D HELENA (a bitter breath): The garden's dying.
71 D JO: She knows.
72 A ¶ Cadet Lisandra stares from one woman to the other.
73 A She says nothing.
* 74 A A single drop of water drifts up and pops on her sleeve.
* 75 A ¶ Then, beyond the arches, a flare lights the stars.
76 A ¶ Jo and Helena turn together toward the glass.
* 77 A The light climbs, white and silent, across their faces.
78 D CADET LISANDRA [CONT'D] (whispering): That wasn't the sun.
79 D JO: No.
80 D HELENA (low): That was the shield failing.
* 81 A ¶ The hum of the pumps rises.
* 82 A The vines shiver on their trellises.
* 83 A The sirens begin.
84 A ¶ TECHNICIAN WU, 20s, bursts through the bulkhead, goggles up, breathless.
85 D TECHNICIAN WU: Helena! Jo! The Commander wants you on the deck now!
86 D HELENA: We're coming, Wu.

### SCENE s02348 | EXT. RAILROAD CROSSING - BROKEN-DOWN SCHOOL BUS - DUSK
Detected names (may be incomplete or contain aliases): JUNE, RAYMOND, DEVI
* 1 A ¶ A yellow bus idles dead on the tracks.
* 2 A The hood is up.
* 3 A Crossing lights blink red, and a distant horn sounds.
4 A ¶ JUNE, 16, in a letterman jacket, kneels at the engine with a flashlight in her teeth.
5 A RAYMOND, 17, hovers beside her, shirt untucked.
6 A DEVI, 15, stands on the bus steps with a phone held high, hunting for a signal.
7 D RAYMOND: It's the alternator.
8 D JUNE (around the flashlight): It's not the alternator.
9 D DEVI: I have one bar. One. Don't move.
10 D RAYMOND: How would you know?
11 D JUNE: My dad's a mechanic.
12 D DEVI: Quiet, I'm calling.
13 D RAYMOND: He fixes lawnmowers.
14 D JUNE: He fixes everything.
15 D DEVI: Hello? Hello? Is this 911?
16 D RAYMOND: Tell them the train.
17 D DEVI: There's a train coming!
18 D JUNE: How far?
19 D RAYMOND: Two miles.
20 D JUNE: Three.
21 D DEVI: They're asking where we are.
22 D RAYMOND: Say Route Nine.
23 D JUNE: Say the crossing.
24 D DEVI: Route Nine, at the crossing!
* 25 A ¶ The horn sounds again, nearer.
26 A All three look east.
27 D JUNE: Out. Everyone out.
28 D RAYMOND: I'm out.
29 D DEVI: I'm out.
30 A ¶ They run into the weeds, hand in hand in hand, as the bus sits alone in the red light.

### SCENE s02349 | INT. ICE-SCULPTURE WAREHOUSE - NIGHT
Detected names (may be incomplete or contain aliases): DRIVER, MAGDA KOWALSKI, ESME, MARCUS
* 1 A ¶ A walk-in freezer the size of a hangar.
* 2 A Frost smokes off the floor.
* 3 A Under blue work lights stand dozens of ice sculptures: swans, a dragon, a wedding cake, a life-size horse.
* 4 A Everything glitters.
5 A ¶ A DRIVER, 30s, ski mask pushed up onto his forehead, stands before the horse with a hand truck.
6 A He is shivering.
* 7 A Beside him, a dolly holds a rolled-up carpet.
8 A ¶ MAGDA KOWALSKI, 40s, in a parka, arrives through a side door with a tool bag.
9 A Her breath trails behind her like a ghost.
10 D MAGDA: Why's the horse still here?
11 D DRIVER: It's a horse.
12 D MAGDA: I know it's a horse. Why's it still here? The plan was the cake.
13 D DRIVER: The cake was too big.
14 D MAGDA: The cake was perfect.
15 D DRIVER: It wouldn't fit the van.
16 D MAGDA: Then you should've brought a bigger van.
17 D DRIVER: I don't pick the vans.
18 D MAGDA: Who does?
19 D DRIVER: Nobody. It's just what was left.
20 A ¶ Magda sets down her tool bag and unzips it.
21 A She takes out a cordless drill and a thermal blanket.
22 D MAGDA: Help me wrap it.
23 D DRIVER: Wrap the horse?
24 D MAGDA: It's the horse now.
25 A ¶ They drape the blanket over the sculpture.
26 A The Driver grunts, straining.
27 A Frost clings to his cuffs.
28 D DRIVER: What's inside it again?
29 D MAGDA: Don't ask.
30 D DRIVER: I'm not asking. I'm... wondering.
31 D MAGDA: Wondering is asking.
32 D DRIVER: Is it the necklace?
33 A ¶ She says nothing.
34 A Drills a small hole at the horse's flank, and the bit whines through the ice.
35 D DRIVER [CONT'D]: It's the necklace.
36 D MAGDA (not turning): Esme.
37 D DRIVER: What?
38 D MAGDA: That's my name. You've worked with me for six years and you still call me "Magda" in your head.
39 D DRIVER: Your name's Magda.
40 D MAGDA: Is it?
41 A ¶ He stops.
42 A He studies her.
* 43 A The drill bit catches something and goes silent.
44 D MAGDA [CONT'D] (softly): Hold the light.
45 A ¶ ESME's hand goes into the hole.
46 A She withdraws a slim leather pouch, glittering with frost.
47 A She weighs it in her palm.
48 D DRIVER: So it's Esme.
49 D ESME: It's Esme.
50 D DRIVER: And I'm...
51 D ESME: You're the driver.
52 D DRIVER: I'd rather be Marcus.
53 D ESME: Then you're Marcus.
54 A ¶ The Driver, now MARCUS, takes the pouch and slips it into his glove.
55 D MARCUS: Esme. Door's open. Let's roll the horse.
56 A ¶ They roll the wrapped horse toward the loading bay.
* 57 A Behind them, the swans, the dragon, the cake, slowly bead with moisture in the warm draft of the open door.

### SCENE s02350 | INT. STRANDED CABLE CAR - ALPINE RIDGE - DAWN
Detected names (may be incomplete or contain aliases): HANNELORE BR, CKNER, ISAAC MBEKI-LOWE, PAULINE ACHTERBERG
* 1 A ¶ A glass-walled gondola hanging motionless over a gorge.
* 2 A Frost on the windows.
* 3 A A white sea of cloud below.
* 4 A The cable creaks.
* 5 A A single bench seat, a steel pole.
6 A ¶ Three passengers.
7 A They have been here since last night.
8 A ¶ HANNELORE BRÜCKNER, 60s, in a loden coat, sits upright with her handbag on her knees.
9 A Her lips are blue.
10 A She has not complained once.
11 A ¶ ISAAC MBEKI-LOWE, 30s, in a ski jacket, crouches against the door.
12 A His phone is dead.
13 A He taps it anyway.
14 A ¶ PAULINE ACHTERBERG, 20s, in a thin windbreaker, huddles in the corner with a thermos.
15 A She unscrews it, checks it, screws it shut.
* 16 A ¶ The gondola sways.
17 A Everyone stops breathing until it stills.
18 D ISAAC: Anyone have a lighter?
19 D HANNELORE: I don't smoke.
20 D ISAAC: It's not for smoking.
21 D PAULINE: I have matches.
22 D ISAAC: Why didn't you say?
23 D PAULINE: You didn't ask.
24 A ¶ She hands him a small box.
25 A He takes it, strikes one.
* 26 A It flares and dies.
27 A He strikes another and cups it.
28 A They all lean toward the tiny glow like a campfire.
29 A ¶ Hannelore opens her handbag.
30 A Takes out a folded newspaper.
31 A Smooths it on her knee.
32 A Holds it out.
33 D HANNELORE: It burns.
34 D ISAAC: It's your paper.
35 D HANNELORE: It's yesterday's.
36 A ¶ Isaac takes it.
37 A Tears off a corner.
38 A Lights it.
* 39 A A thin yellow flame climbs and wavers, and the gondola glows for a few seconds.
40 A Nobody speaks.
41 A ¶ Pauline reaches out and lets her palm hover over the flame.
42 A Isaac moves the paper closer to her without a word.
43 A When it burns down to his fingers, he lets it fall and stamps it out.
* 44 A ¶ The cable jolts.
45 A Everyone grabs a rail.
* 46 A A distant mechanical groan comes from the tower.
47 A Hannelore turns her head slowly toward the sound, as though recognizing an old acquaintance.
48 D HANNELORE [CONT'D]: That is the generator.
49 D ISAAC: How do you know?
50 D HANNELORE: My husband built the first one.
51 D PAULINE: Is that good?
52 D HANNELORE: It means they are trying.
* 53 A ¶ The gondola lurches forward a foot and stops.
54 A Pauline laughs once, a dry bark.
55 A Isaac slides down the door and sits.
56 A Hannelore folds her hands again, and for the first time her shoulders drop.

### SCENE s02351 | INT. NOBLE'S PAWN & LOAN - BLACKOUT - NIGHT
Detected names (may be incomplete or contain aliases): OBINNA AKPAN, ROSALIE, WOMAN, DEVAKI, MOOSE, CHESTER
* 1 A ¶ Total dark but for the red glow of an emergency exit sign and the guttering flame of one candle.
* 2 A Glass cases glint with watches and wedding bands.
* 3 A Guitars hang from the wall like bats.
4 A ¶ A thin man, OBINNA AKPAN, 40s, stands behind the counter with a baseball bat in both hands.
5 A His knuckles whiten.
6 A Beside him, his teenage daughter, ROSALIE, 16, clutches a flashlight she has not dared switch on.
* 7 A ¶ The bell above the door jingles.
8 A Three silhouettes enter.
9 D OBINNA (to the dark): We're closed.
* 10 A ¶ A match flares.
11 A A woman's face, hard and young, lit from below.
12 A ¶ THE WOMAN, who calls herself DEVAKI, 30s, in a raincoat, holds the match up and surveys the store with an easy, patient eye.
13 A Behind her, a big man in a hoodie: MOOSE, 40s, shaved head, jiggling a ring of keys.
14 A Another shape lingers in the doorway: CHESTER, 60s, in a flat cap, one hand on the knob, as if he might leave.
15 D DEVAKI (to the room): Nobody panic. We only came for what's ours.
16 D OBINNA: There's nothing here that's yours.
17 D DEVAKI: Not yet.
18 A ¶ She walks to the glass case.
19 A Taps it with a ringed finger.
20 D DEVAKI [CONT'D]: Open it.
21 D OBINNA: The power's out. The register won't...
22 D DEVAKI: I didn't say the register.
23 A ¶ Obinna swallows.
24 A He looks at Rosalie.
25 A She shakes her head in a tiny motion.
26 A He sets the bat down on the counter.
27 D OBINNA (quietly): Rosie. Back room.
28 D ROSALIE: No.
29 D OBINNA: Now.
30 D ROSALIE: I'm not leaving you.
31 A ¶ Moose steps closer, jingling his keys.
32 A Chester murmurs, barely audible, to no one.
33 D CHESTER (muttering): This isn't what we agreed.
34 D DEVAKI (without turning): Chester.
35 D CHESTER: Yes.
36 D DEVAKI: Shut the door.
37 A ¶ He does.
* 38 A The bell jingles.
* 39 A The store seems to shrink.
40 A ¶ Obinna takes a key from his belt, fits it to the case, and turns it with a click.
41 A Devaki lifts the lid.
42 A She takes out a small velvet bag.
43 A Opens it.
44 A Pours a ring into her palm.
45 A She inspects it by the match, and her face softens for one second.
46 D DEVAKI [CONT'D] (to the group): We're done. Nobody follows.
47 D MOOSE: That's it?
48 D DEVAKI: That's it.
49 D MOOSE: It's one ring.
50 D DEVAKI: It's my mother's ring.
51 A ¶ She slips it onto her finger.
* 52 A The match burns down.
53 A She shakes it out.
54 A In the dark, the bell jingles, and the three shapes slip out.
55 A ¶ For a long moment, neither Obinna nor Rosalie moves.
56 A Then Rosalie clicks on the flashlight.
* 57 A Its beam finds the empty case, the open velvet bag, and a small stack of cash left on the glass.
58 D ROSALIE: Dad. They paid for it.
59 D OBINNA (a slow breath): They paid for it.
60 A ¶ He picks up the cash.
61 A Counts.
62 A Frowns.
63 A Counts again, and frowns harder.
64 D ROSALIE: How much?
65 D OBINNA: Three times the ring.
66 A ¶ He sets the money on the counter and looks at the door, in the dark, where the bell is still faintly swinging.

### SCENE s02352 | INT. NIGHT FERRY - GALLEY - NIGHT
Detected names (may be incomplete or contain aliases): CAPTAIN EZEKIEL FARROW, FIRST MATE ODESSA LIN, COOK BARNABY OKORO, DECKHAND SVEN HALLGREN, NAVIGATOR PRIYANKA DESHMUKH, ENGINEER YURI KOZLOV
* 1 A ¶ A cramped steel galley below the car deck.
* 2 A Condensation drips from pipes.
* 3 A A coffee urn gurgles.
* 4 A Six crew crowd a bolted table beneath a swinging lamp.
* 5 A The engine drones through the floor.
6 A ¶ CAPTAIN EZEKIEL FARROW, 60s, at the head, stirs a mug he doesn't drink.
7 A FIRST MATE ODESSA LIN, 40s, flips through a logbook.
8 A COOK BARNABY OKORO, 50s, wipes a spotless counter.
9 A DECKHAND SVEN HALLGREN, 20s, jiggles his knee.
10 A NAVIGATOR PRIYANKA DESHMUKH, 30s, studies a chart.
11 A And at the end, ENGINEER YURI KOZLOV, 50s, an oil-stained cap in his fist.
12 D CAPTAIN FARROW (to the table): I called you here because someone has been in the cargo hold.
13 D LIN: Which hold?
14 D CAPTAIN FARROW: The sealed one.
15 D SVEN: There's no sealed hold.
16 D CAPTAIN FARROW: There is now.
17 D BARNABY (muttering): I never liked this run.
18 D PRIYANKA: Captain, the manifest lists nothing sealed.
19 D CAPTAIN FARROW: The manifest was edited.
20 D LIN: By whom?
21 D CAPTAIN FARROW: By someone with access.
22 D YURI: That's all of us.
23 D CAPTAIN FARROW: Yes. That's the point.
* 24 A ¶ A heavy silence.
* 25 A The lamp swings.
26 A Sven stops jiggling his knee.
27 D SVEN: Is it dangerous?
28 D CAPTAIN FARROW: I don't know.
29 D BARNABY: Then why tell us?
30 D CAPTAIN FARROW: Because one of you already knows.
31 A ¶ Nobody moves.
32 A Priyanka sets down her pen.
33 A Lin closes the logbook.
34 D LIN (to the Captain): You think it's one of us.
35 D CAPTAIN FARROW: I think it is two of you.
36 D YURI: Then say who.
37 D CAPTAIN FARROW: I will not. Not yet.
38 D SVEN (under his breath): This is insane.
39 D PRIYANKA (to Sven): Sit still.
40 D SVEN: I am sitting.
41 D PRIYANKA: You are vibrating.
42 D BARNABY (to himself): Thirty years at sea and I'm cooking for a hanging.
43 D CAPTAIN FARROW (to the whole table, calmly): At the next port, a team boards. Customs, perhaps police. Anyone wishing to speak before then, my door is open.
44 D LIN: And if no one does?
45 D CAPTAIN FARROW: Then I will have to guess.
* 46 A ¶ The lamp swings.
* 47 A The engine drones.
* 48 A A faint knocking begins, somewhere far below the floor, slow and patient, like a fist on a locked door.
49 A Every head turns.

### SCENE s02353 | INT. CLOSED PLANETARIUM - OVERNIGHT SLEEPOVER - NIGHT
Detected names (may be incomplete or contain aliases): MAEVE ARMSTRONG, TARIQ BELLAMY, WINONA SHORTBULL, CALLUM TREMBLAY, IMOGEN ABARA, PETROS KALOGEROS
* 1 A ¶ A great domed theater.
* 2 A Rows of reclined seats, and a projector like a monstrous insect at the center of the floor.
* 3 A The dome above is blank.
* 4 A Six sleeping bags lie in a ragged circle under the projector, and a lantern throws their shadows up the curved wall.
* 5 A ¶ Six teenagers sit on the carpet in pajamas, a paper plate of cold pizza between them, the box lid torn open.
6 A ¶ MAEVE ARMSTRONG, 16, the host, cross-legged, in a faded band shirt, plays with a thread on her sleeve.
7 A TARIQ BELLAMY, 17, beside her, glances at the exit doors.
8 A WINONA SHORTBULL, 16, hugs a pillow, eyes bright.
9 A CALLUM TREMBLAY, 17, snaps a glow stick over and over.
10 A IMOGEN ABARA, 15, whispers into her hood.
11 A And at the edge, a quiet boy, PETROS KALOGEROS, 16, watches the dome with unblinking calm.
* 12 A ¶ The projector hums.
* 13 A A small red light blinks on it, then goes dark.
14 D MAEVE (to the group): Okay. Truth or dare.
15 D CALLUM: No.
16 D MAEVE: Yes.
17 D TARIQ: It's two in the morning.
18 D MAEVE: That's when it works.
19 D WINONA (to Maeve): Don't be weird.
20 D MAEVE: I'm not weird. I'm hosting.
21 D IMOGEN (softly, to herself): It's too cold in here.
22 D PETROS: It's the dome. The air has nowhere to go.
23 D IMOGEN: That's... a thing you know?
24 D PETROS: Mm.
* 25 A ¶ The lantern flickers.
26 A Callum snaps the glow stick, and the green light ripples across their faces.
* 27 A The dome is still dark.
28 D MAEVE: Dare. Tariq. Go to the control booth and bring back the key.
29 D TARIQ: What key?
30 D MAEVE: The one in the booth.
31 D TARIQ: There's no key.
32 D MAEVE: Then bring me whatever's there.
33 A ¶ Tariq stands.
34 A Looks at the dark doors.
35 A Then at the others.
36 A Nobody encourages him.
37 D TARIQ (under his breath): Fine.
38 A ¶ He crosses the floor.
* 39 A His footsteps die quickly in the carpet.
40 A The others watch him go.
41 D WINONA (to the group, whispering): Do you hear that?
42 D CALLUM: What?
43 D WINONA: Humming.
44 D IMOGEN: It's the projector.
45 D WINONA: It's not the projector.
46 D PETROS: It's coming from above.
47 A ¶ All six faces lift to the dome.
* 48 A Stars flicker on, one by one, then dozens, then thousands, the whole sky spilling across the curve.
* 49 A No one touches a button.
* 50 A A warm voice murmurs from somewhere, soft as a lullaby, in a language none of them know.
51 D CALLUM (quietly): Tariq!
52 A ¶ Tariq stands at the booth door, still as a statue, his back to them.
53 A He does not answer.
54 D MAEVE (whispering): Tariq?
55 A ¶ Slowly, he turns.
56 A His face is calm.
57 A His eyes reflect the stars.
58 A He smiles at them.
59 D TARIQ: It's beautiful.
60 D WINONA: Tariq. Come back.
61 D TARIQ: You should see it from here.
62 D IMOGEN (barely audible): No.
63 D PETROS (to the group): Nobody go to the booth.
* 64 A ¶ The humming rises.
65 A Callum drops the glow stick.
* 66 A It rolls into the center of the circle and goes out.
* 67 A In the dark, the stars on the dome begin, ever so slowly, to turn.

### SCENE s02354 | INT. FUNERAL HOME - FAMILY ROOM - DAY
Detected names (may be incomplete or contain aliases): OLIVER STANHOPE, WINIFRED STANHOPE-DUVAL, LUCIAN STANHOPE
* 1 A ¶ Beige carpet, a box of tissues on every surface.
* 2 A A framed print of a wheat field.
* 3 A A coffee urn steams on a side table.
4 A ¶ OLIVER STANHOPE, 50s, in a black suit too big at the shoulders, stands facing the wall.
5 A His sister, WINIFRED STANHOPE-DUVAL, 50s, sits on the sofa with a binder of arrangements.
6 D WINIFRED: We should choose the casket today.
7 D OLIVER: Dad wanted pine.
8 D WINIFRED: Dad wanted a lot of things.
9 D OLIVER: He wanted pine.
10 D WINIFRED: He wanted to be left alone.
* 11 A ¶ The door opens.
12 A LUCIAN STANHOPE, 20s, their nephew, steps in, hair wet from rain, a duffel on his shoulder.
13 D LUCIAN: I got the earlier flight.
14 D OLIVER: You weren't invited.
15 D WINIFRED: Oliver.
16 D LUCIAN: It's my grandfather.
17 D OLIVER: It's my father.
18 D WINIFRED: Both of you stop.
19 D LUCIAN: I didn't come to fight.
20 D OLIVER: You came to take the watch.
21 D LUCIAN: I came to say goodbye!
22 D WINIFRED: Quiet! Both of you, quiet!
23 A ¶ Oliver swings around.
24 A His hand shakes.
* 25 A The binder slides off Winifred's lap and hits the floor with a slap.
* 26 A Nobody picks it up.

### SCENE s02355 | INT. MINIATURE GOLF COURSE - WINDMILL HOLE - DAY
Detected names (may be incomplete or contain aliases): WILLY, PHILIPPA PRATT, DOBBS
* 1 A ¶ A garish plastic windmill, a fiberglass dinosaur, a pond of dyed-blue water.
* 2 A Sprinklers tick.
* 3 A A line of tourists waits at the tee.
4 A ¶ WILLOUGHBY "WILLY" PRATT, 60s, in a golf visor and a pastel polo, grips his putter like a scepter.
5 A His wife, PHILIPPA PRATT, 60s, pats her hair and checks her scorecard.
6 A Their son, CHAD PRATT, 30s, in a collared shirt with the logo of his own startup, scrolls his phone.
7 A Their daughter, PORTIA PRATT, 20s, kicks a tee.
8 A And behind them, the hole's reluctant attendant, MR. DOBBS, 50s, sits in a plastic chair under a beach umbrella, reading a paperback with grim concentration.
9 D WILLY (declaring): The windmill hole. Where families are made or destroyed.
10 D PHILIPPA: Please don't be dramatic.
11 D WILLY: This is the hole that cost me my first marriage.
12 D PHILIPPA: I'm your first marriage.
13 D WILLY: That is why it hurt.
14 A ¶ Chad snorts without looking up.
15 A Portia sets her ball on the mat with exaggerated care, takes a stance, and swings.
* 16 A The ball rolls straight, hits the windmill's spinning blade with a hollow clack, and rebounds.
* 17 A It rolls back past her feet, past Chad, past Willy's shoes, and into the blue pond with a plop.
18 D PORTIA: That's cheating.
19 D MR. DOBBS (not looking up): It's a windmill.
20 D WILLY: Cheating how?
21 D PORTIA: The blade moves.
22 D MR. DOBBS: That's the idea.
23 A ¶ Willy hands her another ball.
24 A Philippa lines up her shot with her pinkie extended.
25 A Chad finally pockets his phone, steps up with a stiff practice swing that sends a clod of turf across the course and onto Mr. Dobbs's paperback, and then, with no trace of embarrassment, shrugs and tees up his own ball.
26 A While Willy lectures Portia about wrist angles, Philippa's ball rolls untouched past the windmill, down a slope, and settles at the lip of the hole.
27 D PHILIPPA: Oh.
28 A ¶ Everyone looks at the ball.
29 A Willy forgets the lecture.
30 A Chad drops his putter.
31 A Portia gasps.
32 A Mr. Dobbs lowers the paperback, revealing a face that has seen this before.
33 D WILLY: Hole in one?
34 D MR. DOBBS: Not yet.
* 35 A ¶ The windmill blade swings around, taps the ball, and sinks it.
* 36 A A bell dings.
* 37 A A tinny fanfare plays from a hidden speaker.
38 A The family goes silent.
39 D MR. DOBBS [CONT'D] (deadpan): Congratulations, ma'am. You win a free game.
40 D PHILIPPA (delighted): I do?
41 D WILLY (horrified): She does?
42 A ¶ Philippa throws her arms up.
43 A Chad applauds without enthusiasm.
44 A Portia stalks to the pond and begins fishing for her ball with her putter.
45 A Willy sinks onto the dinosaur's tail, defeated.
46 D WILLY [CONT'D]: In forty years, I have never won a free game.
47 D PHILIPPA: Darling, you have a free game every time you married me.
48 A ¶ Mr. Dobbs flips a page of his paperback.
* 49 A Overhead, a plastic seagull swings from a pole, creaking in the wind.
50 A Everyone, finally, laughs, even Willy, even Dobbs, though he hides it behind the book.
51 D WILLY (rising, brushing his shorts): Next hole. The one with the volcano.
52 D PHILIPPA: Oh, no.
53 D CHAD: Dad, the volcano is a lie.
54 D WILLY: It is a beautiful lie.
55 D PORTIA (from the pond, lifting a dripping ball): I got it!
56 A ¶ She holds it up like a trophy.
* 57 A Water streams down her arm.
58 A Willy salutes.
59 A The family troops toward the volcano, still bickering, while Mr. Dobbs returns to his paperback and the sprinklers tick on.

### SCENE s02356 | INT. ROOFTOP GREENHOUSE - SUNSET
Detected names (may be incomplete or contain aliases): ADAEZE NWOSU
* 1 A ¶ A glass shed on the roof of a tenement, filled with tomato plants, geraniums, and a sagging lawn chair.
* 2 A The city sprawls beyond the panes, rose-gold in the last light.
* 3 A A tape recorder sits on an upturned crate with its lid open.
* 4 A ¶ The door creaks.
5 A ADAEZE NWOSU, 30s, in a long cardigan and paint-spattered jeans, steps inside carrying a watering can.
6 A She is tired in the way of someone who has decided to be tired quietly.
7 A ¶ She sets the can down.
8 A Looks at the recorder.
9 A Kneels beside it.
10 A ¶ She presses a button.
* 11 A The tape whirs.
12 D ADAEZE (into the recorder): Okay. It's me. Again. I know you said not to.
13 A ¶ She laughs without humor and rubs her eyes.
14 D ADAEZE [CONT'D]: I'm on the roof. The tomatoes are doing better than I am. I thought you'd want to know.
15 A ¶ She waits.
* 16 A A silence stretches.
* 17 A A pigeon lands on the glass, scuttles, leaves.
18 A ¶ She presses stop.
19 A Rewinds.
20 A Presses play.
21 D ADAEZE [V.O.] (from the tape, a month old): Okay. It's me. I'm just going to talk. Don't answer. Don't ever answer. I just need to say these things aloud to somebody who isn't me.
22 A ¶ She switches the tape off.
23 A Sits on the lawn chair.
24 A Takes up the recorder in her lap.
25 D ADAEZE [CONT'D] (into the recorder): Right. Here's what I wanted to say.
26 A ¶ She presses record.
27 A A long breath.
28 D ADAEZE [CONT'D]: I think I loved you the way people love a house they've never entered. I stood outside admiring the porch. I never tried the door. And when you finally opened it, I was so busy looking at the porch that I didn't walk in.
29 A ¶ She switches the recorder off.
30 A Watches a bee drift between flowers.
31 A ¶ She rewinds again.
32 A Presses play, and listens to herself.
33 D ADAEZE [V.O.] (from the tape): That's all. I don't expect anything. I just wanted the tomatoes to know you were here once.
34 A ¶ Adaeze exhales.
35 A She stands, takes up the watering can, and pours water at the base of each plant, slowly, one by one.
* 36 A The sun slides lower.
* 37 A The glass turns copper.
38 A ¶ When she is done she sets the can down.
39 A Returns to the recorder.
40 A Presses record.
41 D ADAEZE [CONT'D] (into the recorder, steady now): It's me. I'm going to leave a message. I know you won't listen. But I'm going to say it anyway.
42 A ¶ She takes a long breath.
43 D ADAEZE [CONT'D]: I was wrong about the house. It isn't a house. It's a greenhouse. Everything in it is trying to grow toward the glass. And I stood here for years wondering why it was so bright.
* 44 A ¶ A beat.
45 A She smiles at herself.
46 D ADAEZE [CONT'D]: So here is my invitation. No porch. No door. Just the roof. Come up. Come up and see what I've done with the tomatoes.
47 A ¶ She presses stop.
48 A Ejects the cassette.
49 A Holds it in her palm, small and warm in the fading light.
50 A ¶ She slips it into an envelope on the crate.
51 A Seals it.
52 A Writes a name on the front, in careful hand, then crosses it out and writes another.
53 A Nothing in her face tells which.
54 A ¶ She sets the envelope on the lawn chair, propped against the arm, where the last orange light finds it.
55 A ¶ Then she turns off the lamp, and stands for a while in the half dark among the green.
* 56 A ¶ A siren sounds in the street below.
57 A She does not move toward it.
* 58 A The tomatoes rustle in the breeze from a cracked pane.
59 A ¶ Adaeze steps outside.
* 60 A The door closes behind her, softly, as though not to wake something.
* 61 A The envelope rests in its pool of dying gold.

### SCENE s02357 | EXT. GHOST TOWN - DEAD FERRY LANDING - DUSK
Detected names (may be incomplete or contain aliases): SHERIFF MORDECAI WELLS, CALISTA REYNOSO, PRESTON GRIGGS, DISPATCH
* 1 A ¶ A dry riverbed.
* 2 A A rotting dock with no water beneath it.
* 3 A Wind in a broken pilot-house.
* 4 A A weathered sign: LAST CROSSING.
5 A ¶ SHERIFF MORDECAI WELLS, 50s, bone-thin, gray coat.
6 A A tin star gone dull.
7 A He stands at the end of the pier, hat tipped back.
8 A ¶ CALISTA REYNOSO, 20s, a bounty hunter in dusty leathers.
9 A Scarred cheek.
10 A Dual pistols.
11 A She sits on a barrel, legs swinging.
12 A ¶ PRESTON GRIGGS, 40s, in irons, wrists chained, face swollen.
13 A He kneels on the planks.
* 14 A ¶ A radio set crackles from a saddlebag.
15 D WELLS: You said the river was here.
16 D CALISTA: It was here.
17 D WELLS: Where is it now?
18 D CALISTA: Went to Mexico, I guess.
19 A ¶ Griggs laughs, a raw cough.
20 D GRIGGS: Told you. Told you both.
21 D WELLS: Shut him up.
22 D CALISTA: He's tired.
23 D GRIGGS: Tired. That's the word.
* 24 A ¶ The radio spits static.
* 25 A A woman's voice, faint.
26 D DISPATCH [V.O.] (over radio): Sheriff Wells, come in. Sheriff Wells.
27 A ¶ Wells crosses the dock.
28 A Lifts the receiver.
29 D WELLS: This is Wells.
30 D DISPATCH [V.O.] (over radio): Mordecai. The judge says to bring him in alive.
31 D WELLS: Understood.
32 D DISPATCH [V.O.] (over radio): Alive. You hear?
33 D WELLS: I heard.
34 A ¶ He sets the receiver down.
35 A Turns.
36 D CALISTA: Well?
37 D WELLS: Judge wants him breathing.
38 D CALISTA: Judge isn't here.
39 D GRIGGS (smiling): There it is.
40 A ¶ Wells pulls his revolver.
41 A Calista lays a hand on one of hers.
* 42 A The wind kicks up dust.
* 43 A A loose plank bangs somewhere.
44 A Nobody moves.
45 D WELLS: We take him in at dawn.
46 D CALISTA: And tonight?
47 D WELLS: We sit.
48 A ¶ He holsters the gun.
49 A Sits on the dock edge, legs over the dry bed.
50 A After a moment, Calista joins him.
51 A Griggs, between them, lowers his head.

### SCENE s02358 | INT. ARCHIVE VAULT - DEEP-SPACE LIBRARY SHIP - CYCLE UNKNOWN
Detected names (may be incomplete or contain aliases): ARCHIVIST LENKA ORLOVA, ASSISTANT KEZIAH BRANDT, TECHNICIAN OBADIAH MWANGI, UNIT SEVEN, CAPTAIN ISOLDE VANTERPOOL
* 1 A ¶ A cathedral of data.
* 2 A Tall cylinders of blue light line the walls, each humming faintly.
* 3 A The floor is polished obsidian, reflecting everything twice.
* 4 A A single thread of cold air moves through the nave.
5 A ¶ ARCHIVIST LENKA ORLOVA, 60s, in a gray tabard, walks the central aisle with a slate.
6 A She touches each cylinder as she passes, the way a priest touches pews.
7 A ¶ ASSISTANT KEZIAH BRANDT, 20s, follows two steps behind with an armload of sleeves.
8 A Her eyes keep drifting upward to the vaulted ceiling.
9 A ¶ At the far end, a stool, a lamp, and a figure bent over a console: TECHNICIAN OBADIAH MWANGI, 40s, unshaven, his cuffs stained.
10 A ¶ Beside him, a patched service robot, UNIT SEVEN, stands at ease, one optic lens cracked.
11 A It tilts toward the women when they approach.
12 A ¶ CAPTAIN ISOLDE VANTERPOOL, 50s, enters from a side door in full dress uniform, boots clicking on the obsidian.
13 A She does not look at anyone.
14 D LENKA (without turning): Captain. You are late for the reading.
15 D ISOLDE: I was delayed by the bridge.
16 D LENKA: The bridge is always delayed.
17 D OBADIAH (not looking up): Shall I start it?
18 D LENKA: Yes.
19 A ¶ He presses a key.
* 20 A The cylinders brighten, one by one, until the whole vault glows.
* 21 A A low chord rises from the floor, like an organ in another room.
22 D UNIT SEVEN: Playing record eleven. Origin: Earth. Date: unknown.
23 A ¶ Everyone turns to the wall.
* 24 A Light pools and spills into the shape of a tree, its roots stretching, its branches full of leaves.
25 A Nobody speaks.
26 A Keziah's lips part.
27 D ISOLDE (quietly): It is much larger than I remembered.
28 D LENKA: You have never seen it.
29 D ISOLDE: I remembered it anyway.
30 A ¶ Obadiah rises from his stool.
31 A He crosses the vault slowly, hands in his pockets.
32 A He stops beside Isolde and looks up at the tree, then at her profile.
33 A She feels it.
34 A She does not turn.
35 A ¶ Lenka clears her throat.
36 A Keziah drops one of the sleeves.
* 37 A It clatters on the obsidian.
* 38 A The sound echoes, long, long.
39 D UNIT SEVEN: Record eleven is incomplete. Would you like to hear the missing portion?
40 D ISOLDE: No.
41 D LENKA: Yes.
42 A ¶ They look at each other.
* 43 A A beat.
* 44 A The tree flickers.
45 A Isolde unclasps her jacket collar with a short, tight motion.
46 D ISOLDE: Play it.
47 A ¶ The robot raises its cracked lens.
* 48 A The chord darkens.
* 49 A The tree burns, quietly, to ash.

### SCENE s02359 | EXT. SHELLED VINEYARD - DAWN
Detected names (may be incomplete or contain aliases): CORPORAL ELIAS VOSS, SERGEANT MARISKA DOBOS, CHILD
* 1 A ¶ Rows of broken vines in gray mist.
* 2 A A stone wall half collapsed.
* 3 A A crater at its foot, still smoking.
4 A ¶ CORPORAL ELIAS VOSS, 20s, lies in the crater with his rifle across his chest.
5 A He listens to his own breath.
6 A He has not spoken in hours.
7 A ¶ SERGEANT MARISKA DOBOS, 30s, crawls up beside him on elbows, helmet scraped silver.
8 A She lowers herself into the crater without a sound.
9 D DOBOS (whispering): They're gone.
10 D VOSS: Gone where?
11 D DOBOS: Over the ridge.
12 A ¶ He lets out a breath he has held since midnight.
13 A His hand, still locked on the rifle, begins to shake.
14 A She watches it and says nothing, then lays hers over his until the shaking slows.
* 15 A ¶ A scrape of stone.
16 A They both freeze.
17 A ¶ A boy rises from behind the wall.
18 A A CHILD, 8, in a man's coat, his cheeks smeared with dirt, holding a single bunch of grapes.
19 A He looks at the rifles.
20 A At them.
21 A ¶ He holds out the grapes.
22 A ¶ Voss lowers the rifle.
23 A Dobos takes a grape.
24 A Eats it.
25 A Nods once.
26 A The child nods back and vanishes behind the wall.

### SCENE s02360 | INT. PUBLIC POOL - SWIM MEET - EVENING
Detected names (may be incomplete or contain aliases): COACH TREVOR PIKE, DANI KOWALCZYK, ANNELIESE VEGA, STARTER, TEENAGE TIMEKEEPER
* 1 A ¶ Chlorine haze.
* 2 A Echoing whistles.
* 3 A Lane ropes in red and white.
4 A Parents crowd the bleachers with foam fingers.
5 A ¶ COACH TREVOR PIKE, 40s, in a wind jacket and a stopwatch lanyard, kneels at the edge of lane four, speaking low.
6 A At his feet, DANI KOWALCZYK, 17, in a cap and goggles, rocks on her heels.
7 D PIKE: She'll be on your left. Don't watch her.
8 D DANI: I won't.
9 D PIKE: You will.
10 D DANI: I will.
11 A ¶ He grins and squeezes her shoulder.
12 A ¶ Across the deck, in lane five, ANNELIESE VEGA, 17, shakes out her arms.
13 A Her coach says something.
14 A She answers without looking.
15 A Her eyes are on Dani.
16 A ¶ Dani looks back.
17 A Neither blinks.
18 D PIKE (quietly): She beat your time last week.
19 D DANI: I know.
20 D PIKE: She's going to start fast.
21 D DANI: So will I.
22 A ¶ The starter walks to the end of the deck.
23 A A hush spreads over the bleachers.
24 D STARTER [O.S.]: Swimmers, take your marks.
25 A ¶ Dani steps onto the block.
26 A Anneliese steps onto hers.
27 A They bend.
* 28 A A gun cracks.
29 A ¶ Both dive.
* 30 A The water closes over them like glass.
31 A ¶ Pike jogs along the side, timer in fist.
32 A Dani and Anneliese surface together and churn, white water, arms rising in perfect rhythm.
33 A ¶ At the halfway turn, they flip within a breath of each other.
34 A A girl in the stands screams.
35 A ¶ A TEENAGE TIMEKEEPER, 15, in a borrowed volunteer shirt, appears beside Pike with a clipboard, wide-eyed.
36 D TIMEKEEPER: Coach, which one is yours?
37 D PIKE: The one on the left.
38 D TIMEKEEPER: They're both on the left.
39 D PIKE: Then the one who's winning.
40 A ¶ She grins.
41 A The swimmers surge toward the wall.
42 A Anneliese reaches first by half a hand.
43 A Dani slaps the tile a hair behind.
* 44 A ¶ The scoreboard blinks.
45 A Both girls hang from the lane rope, gasping, staring at the numbers.
46 A Anneliese raises one fist.
47 A Dani turns her face to the water, and the goggles hide her eyes.

### SCENE s02361 | INT. TROLL BRIDGE TOLLHOUSE - DUSK
Detected names (may be incomplete or contain aliases): BRUNHILDE GRUMBLEDOWN, ULFRIC, ERLANDEL, SPRIGGET
* 1 A ¶ A stone hut under a mossy arch.
* 2 A A kettle on a hook.
* 3 A Coins in neat stacks.
* 4 A Rain taps the slate roof.
5 A ¶ BRUNHILDE GRUMBLEDOWN, 100s, a troll in a patched apron, stirs the kettle.
6 A Her knuckles are mossy, her hands slow.
7 A Her son, ULFRIC, 40s, sits in a corner with his huge back to her, whittling a bone flute that will never be finished.
8 A A lean elf, ERLANDEL, 20s, slips in from the rain and shakes out his cloak; he slides three silver coins onto the counter without a word.
9 A A small goblin girl, SPRIGGET, 8, perches on the windowsill and swings her feet.
10 D ERLANDEL: Evening, Mother Brunhilde.
11 D BRUNHILDE: Erlandel. You're thinner.
12 D ERLANDEL: The road is long.
13 D BRUNHILDE: So is the winter.
14 A ¶ Ulfric does not turn.
* 15 A The flute scrapes.
16 A Sprigget leans toward Erlandel and whispers, loudly.
17 D SPRIGGET: He hasn't spoken since the flood.
18 D ULFRIC (low, to the wall): I speak.
19 D BRUNHILDE: Ulfric.
20 D ULFRIC: I speak when there's something worth saying.
21 A ¶ Brunhilde ladles tea into four cups and sets them on the counter, one at a time, nudging the last toward her son.
22 A He reaches back without looking and takes it.
23 A Erlandel drinks.
24 A Sprigget hops down, steals a coin, and slips it into her sleeve while everyone pretends to watch the kettle.
* 25 A Rain pours.

### SCENE s02362 | INT. LIGHTHOUSE LAMP ROOM - STORM - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR HOLLOWAY BRAITHWAITE, KEEPER MARIGOLD FINCH, ANSELM OYEDELE, SISTER CORDELIA, DESDEMONA QUILL, COASTGUARD
* 1 A ¶ A circular room of glass and brass.
* 2 A The great lens turns slowly, throwing beams across black water.
* 3 A Rain slaps the windows.
4 A Five people crowd the narrow gallery, wet coats steaming.
5 A ¶ INSPECTOR HOLLOWAY BRAITHWAITE, 50s, trench coat, notebook, studies the room.
6 A KEEPER MARIGOLD FINCH, 60s, grips a lantern.
7 A DR. ANSELM OYEDELE, 40s, holds a medical bag.
8 A SISTER CORDELIA, 30s, fingers a rosary.
9 A And the boat captain, DESDEMONA QUILL, 50s, arms folded by the stairs.
* 10 A ¶ A body lies under a tarp at the center of the floor.
11 D BRAITHWAITE (to the room): Nobody leaves until I say.
12 D QUILL: The tide says otherwise.
13 D BRAITHWAITE: Then the tide can wait.
14 D FINCH (muttering): Fourteen years and not one drowned. Now this.
15 D OYEDELE (to Braithwaite): He wasn't drowned.
16 D BRAITHWAITE: How do you know?
17 D OYEDELE: Because there's no water in his lungs.
* 18 A ¶ A beat.
* 19 A The lens beam sweeps across the faces, one by one.
20 D CORDELIA (to herself): I saw nothing.
* 21 A ¶ A radio on the wall crackles.
22 D COASTGUARD [V.O.] (over radio, thin): Lighthouse, this is Coastguard. Storm has closed the channel. Repeat, no boats until dawn.
23 D BRAITHWAITE (to the radio): Understood. Hold position.
24 D COASTGUARD [V.O.] (over radio): Is anyone injured?
25 D BRAITHWAITE (glancing at the tarp): Not anymore.
26 A ¶ He switches off the radio.
* 27 A The beam sweeps again.
28 A This time he is watching Finch.
29 D BRAITHWAITE [CONT'D] (to the whole room): I'll ask once. Who was at the lamp when it went dark?
30 A ¶ Nobody answers.
* 31 A Then, far above, the lens stops turning.

### SCENE s02363 | INT. HOSPITAL ROOFTOP GARDEN - MORNING
Detected names (may be incomplete or contain aliases): IMELDA FAIRWEATHER-NKEMELU, ARTHUR PENHALIGON, JULIETTE PENHALIGON, NURSE BEATRIX OYELAKIN, DR. FAIRWEATHER
* 1 A ¶ A walled terrace above the oncology wing.
* 2 A Raised beds of lavender and rosemary.
* 3 A Wrought-iron benches, a trellis of late roses.
* 4 A Pigeons strut.
* 5 A The city hums far below.
6 A ¶ DR. IMELDA FAIRWEATHER-NKEMELU, 50s, in a white coat gone limp, sits on a bench with a paper cup.
7 A She has not slept.
8 A A gray streak runs through her hair.
9 A ¶ MR. ARTHUR PENHALIGON, 70s, in a hospital gown and a corduroy cardigan, sits beside her, IV pole parked at his knee.
10 A His cheeks are hollow.
11 A His eyes are very clear.
12 A ¶ His daughter, JULIETTE PENHALIGON, 40s, in a trench coat, perches on the bench's arm, hands clasped.
13 A ¶ A nurse, NURSE BEATRIX OYELAKIN, 30s, in blue scrubs, hovers at the door with a clipboard.
14 D PENHALIGON: You'll tell it plainly, Doctor.
15 D DR. FAIRWEATHER: Yes.
16 D PENHALIGON: Good. Everyone else has been very gentle.
17 D DR. FAIRWEATHER: The scan shows the tumor has spread to the liver.
18 D PENHALIGON: How long?
19 D DR. FAIRWEATHER: Weeks. Perhaps a few months.
20 D JULIETTE (quietly): Dad.
21 D PENHALIGON: It's all right, Juliette.
22 D DR. FAIRWEATHER: We can keep you comfortable. We can plan the time.
23 D PENHALIGON: Plan.
24 D DR. FAIRWEATHER: Yes.
25 D PENHALIGON: I have been planning since I was a young man. I planned to write a novel. I planned to see Lisbon.
26 D DR. FAIRWEATHER: Have you seen Lisbon?
27 D PENHALIGON: Never.
28 D DR. FAIRWEATHER: Then there is something to plan.
29 D PENHALIGON (a thin smile): You are a surprising doctor.
30 D DR. FAIRWEATHER: I have been told.
31 D JULIETTE (to the doctor): Can he travel?
32 D DR. FAIRWEATHER: With supervision. In two weeks. Not more.
33 D BEATRIX (from the door): Doctor, the families are waiting in Bay Three.
34 D DR. FAIRWEATHER (rising, to Beatrix): Two minutes.
35 D PENHALIGON: Doctor.
36 D DR. FAIRWEATHER: Yes, Mr. Penhaligon.
37 D PENHALIGON: Thank you for sitting.
38 A ¶ She nods.
39 A Touches his shoulder for a moment, light as a petal, and goes.
* 40 A The door closes.
* 41 A A pigeon lands on the trellis.
42 A Juliette takes her father's hand.
43 A He looks at the lavender.

### SCENE s02364 | INT. ARENA - ROLLER DERBY CHAMPIONSHIP - LAST JAM - NIGHT
Detected names (may be incomplete or contain aliases): DJ, BLANCHE, OKONKWO, LINDQVIST, FERREIRA-WONG, SZYMANSKI, DELACROIX-NAKAMURA, ANNOUNCER
* 1 A ¶ A packed hall.
* 2 A A banked track painted in clashing neon, chain-link fence, a scoreboard flickering.
3 A The crowd roars in waves, a hundred foam fingers pumping.
4 A A DJ on a scaffolding spins a bass line that shakes the railings.
* 5 A ¶ At the pack: the Bay City Banshees against the Harbor Hellions.
6 A Six skaters pivot and shove on the inside curve.
* 7 A Wheels scream on the sealed concrete.
8 A ¶ BLANCHE "BLITZKRIEG" OKONKWO, 30s, jammer for the Banshees, crouches at the line with her star-covered helmet strapped tight.
9 A Behind her, her blocker, PRUDENCE "PRU" LINDQVIST, 40s, thick-armed, rolls on her toes.
10 A Across the line, the Hellions' jammer, ODALYS "THE ORACLE" FERREIRA-WONG, 20s, flexes her fingers.
11 A Her blocker, GRETA "GRAVEYARD" SZYMANSKI, 30s, spits into her mouth guard.
12 A And the head referee, MARGUERITA "MARG" DELACROIX-NAKAMURA, 50s, in black and white stripes, raises her whistle.
13 D ANNOUNCER [V.O.] (over speakers, booming): Ladies and gentlemen, the final jam! Two minutes, one title!
* 14 A ¶ The whistle shrieks.
15 A The pack erupts.
16 A Blanche drives into the first wall, ducks Greta's hip, spins around Pru's elbow, and slips through a gap no wider than a tire.
17 A Odalys is a half-step behind, then even, then briefly ahead.
18 A They crash shoulder to shoulder at the first turn, and the crowd howls.
19 A ¶ Greta slams into Pru and both skid sideways in a spray of sparks.
20 A Marg tracks them, whistle between her teeth, arm out like a conductor.
21 A Blanche's hip checks a Hellion, who hits the rail and slides down it.
22 D ANNOUNCER [V.O., CONT'D] (over speakers): Banshees up by two! Thirty seconds!
23 A ¶ Blanche glances back.
24 A Odalys is gaining.
25 A Her face is a mask of concentration.
26 D BLANCHE (through her teeth): Not tonight.
27 A ¶ She jumps the apex, crosses her skates in a tight loop, and rockets down the straightaway as Odalys, a breath behind, throws a hip.
* 28 A Contact.
29 A Blanche stumbles.
30 A The crowd gasps.
31 A Pru spins and catches her sleeve, throws her forward, a human slingshot.
32 A Blanche glides across the line a full stride ahead.
* 33 A ¶ The buzzer sounds.
34 A The Banshees' side explodes.
* 35 A Foam fingers tumble through the air.
36 A Pru tackles Blanche from behind and they roll across the track, screaming.
37 A Odalys coasts to the boards, helmet off, hair stuck to her forehead, and offers Blanche a hand without a word.
38 A Blanche takes it.
39 A They hold each other's wrists for a moment, breathing like swimmers.
40 A ¶ Marg skates up, blows a final low whistle, and raises Blanche's arm in the air.

### SCENE s02365 | INT. DERELICT MARS SURFACE HABITAT - COMMON ROOM - SOL 412
Detected names (may be incomplete or contain aliases): HATTIE, OKONJO-BELL, LEOPOLD ASHWORTH, COMMS OFFICER RENATA KWIATKOWSKI, BILLIE, TSANG
* 1 A ¶ Red dust coats every surface.
* 2 A A cracked dome overhead lets in amber light.
* 3 A Cots, a folding table, shelves of dehydrated meals, a dead plant in a coffee tin.
* 4 A A generator whirs weakly in the next compartment.
5 A ¶ MISSION SPECIALIST HARRIET "HATTIE" OKONJO-BELL, 40s, in a faded jumpsuit, sits at the table cleaning a helmet visor with a rag.
6 A Her hair is chopped short.
7 A Her eyes are tired but sharp.
8 A ¶ DR. LEOPOLD ASHWORTH, 60s, leans against a shelf, wrapped in a thermal blanket, coughing into a fist.
9 A A gray beard has grown unevenly on his cheeks.
10 A ¶ COMMS OFFICER RENATA KWIATKOWSKI, 30s, kneels beside a dead radio set with a screwdriver, muttering in Polish.
11 D HATTIE: Any luck?
12 D RENATA: It's the transmitter. The coil's burned through.
13 D HATTIE: Can you fix it?
14 D RENATA: With what? A paper clip and a prayer?
15 D LEOPOLD (rasping): I have a prayer.
16 D RENATA: Save it for the oxygen.
17 A ¶ Hattie sets the visor down.
* 18 A A faint rumble builds in the walls.
19 A The three of them look up.
* 20 A Dust trickles from the dome.
21 D HATTIE: Another quake?
22 D LEOPOLD: No. That's an engine.
23 A ¶ Renata drops the screwdriver.
24 A They all stare at the ceiling.
* 25 A The rumble grows, a roar, then a shriek of thrusters.
* 26 A A shadow slides across the dome, long and dark.
* 27 A ¶ A final shudder.
* 28 A Silence.
* 29 A ¶ Then a hatch clanks at the far end of the room.
* 30 A It swings open.
31 A A figure in a white suit steps through, visor up, face lit by the amber glow: CAPTAIN WILHELMINA "BILLIE" TSANG, 50s, with a rescue beacon in one gloved hand.
32 D BILLIE: Hello, Hattie.
33 A ¶ Hattie rises very slowly.
* 34 A Her rag slides from the table.
35 D HATTIE: You came back.
36 D BILLIE: I said I would.
37 D LEOPOLD (a tired laugh): You said it forty times.
38 D BILLIE: And I meant it forty times.
39 A ¶ Renata crosses the room in three strides and throws her arms around Billie's suit.
40 A The visor clacks against her forehead.
41 A She laughs and sobs and swears in Polish.
42 A Hattie stays where she is, one hand on the back of a chair.
43 D HATTIE (quietly): How long do we have?
44 D BILLIE: Eleven minutes before the dust storm.
45 D HATTIE: Then we go.
46 D BILLIE: We go.
47 A ¶ She hands the beacon to Leopold, helps him up, drapes the blanket across his shoulders.
48 A He leans on her.
* 49 A The generator sputters and stops.
* 50 A In the sudden quiet the dead plant in its coffee tin catches the light from the open hatch, and for one moment, it looks green.
