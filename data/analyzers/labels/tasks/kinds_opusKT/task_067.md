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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusKT/group_0067.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s02279 | INT. FUNICULAR CAR, MIDWAY UP - NIGHT
Detected names (may be incomplete or contain aliases): BRIEFCASE MAN, WOMAN IN RED, TEENAGER, PRIEST, MECHANIC, CONDUCTOR, PREWITT
* 1 A ¶ A glass cabin on a steel cable, hanging over a sleeping city.
* 2 A Lights below like spilled salt.
* 3 A The cable hums.
4 A ¶ Six people.
5 A A BRIEFCASE MAN, fifties, tie loosened.
6 A A WOMAN IN RED, thirties, perched on the bench.
7 A A TEENAGER, hood up, earbuds in.
8 A A PRIEST, seventies.
9 A A MECHANIC, big hands.
10 A A CONDUCTOR, grey cap, bored.
* 11 A ¶ The car shudders.
* 12 A Stops.
* 13 A Lights flicker.
14 D CONDUCTOR: Folks, a brief delay. Remain seated.
15 D BRIEFCASE MAN: How brief?
16 D CONDUCTOR: A few minutes.
17 D WOMAN IN RED: Then why is he sweating?
18 A ¶ All eyes turn to the briefcase man.
19 A He grips the case to his chest.
20 D BRIEFCASE MAN: I'm not.
21 D TEENAGER (pulling out an earbud): He is.
22 D PRIEST: My son, are you unwell?
23 D BRIEFCASE MAN: I'm fine!
24 D MECHANIC: That case is ticking.
* 25 A ¶ Silence.
* 26 A The ticking is audible now, quick and mean.
27 D BRIEFCASE MAN: It's a watch. A prototype.
28 D WOMAN IN RED: Open it.
29 D CONDUCTOR: Sir, I'll have to ask you to open it.
30 A ¶ He does not.
31 A The Woman in Red lunges.
32 A The Mechanic grabs her arm.
33 A The Teenager is shouting.
34 A The Priest has his hand on the briefcase man's shoulder, murmuring.
35 D MECHANIC: Hold him!
36 D BRIEFCASE MAN (breaking): My name is Aldous Prewitt, I'm a courier, I was told it was documents!
37 D PREWITT [CONT'D]: I swear it, I swear it on my mother!
* 38 A ¶ The case clicks.
* 39 A The lid lifts.
* 40 A Inside, an old brass alarm clock rings, sits on a stack of unmarked bills, and a note reads: GOT YOU ALL TO TALK.
* 41 A ¶ The funicular lurches.
* 42 A Lights return.
* 43 A The car climbs on.

### SCENE s02280 | INT. BARBERSHOP, SILVER GULCH - DAY
Detected names (may be incomplete or contain aliases): JUDGE AMBROSE LITTLEFIELD, SHERIFF NATHANIEL WREN, DOC SILAS FAIRWEATHER, ROSALIND MARCHAND, ROSIE, DEPUTY CALEB, DOC
* 1 A ¶ Striped pole.
* 2 A Brass spittoon.
* 3 A Through the window, a gallows is being quietly dismantled across the street.
4 A ¶ JUDGE AMBROSE LITTLEFIELD, sixty, sits in the barber's chair under a white cloth.
5 A SHERIFF NATHANIEL WREN, forties, stands at the door with his hat in his hands.
6 A DOC SILAS FAIRWEATHER, a tall consumptive, sits by the stove.
7 A ROSALIND MARCHAND, called ROSIE, thirty, the barber, strops a razor.
8 A DEPUTY CALEB, nineteen, holds the broom.
9 D LITTLEFIELD: Cut it short, Rosie.
10 D ROSIE: Not too short, Judge. You'll feel the draught.
11 D WREN: He won't be out of doors much.
12 D LITTLEFIELD: Nathaniel, I'll be out of doors a good deal. Don't you worry.
13 D DOC: You look better than you did in March.
14 D LITTLEFIELD: I look like a man who sentenced the wrong brother.
15 D WREN: You sentenced the one the jury found.
16 D LITTLEFIELD: Juries find what you set in front of them.
17 D ROSIE: Hold still.
18 D LITTLEFIELD: Is the rope down yet?
19 D CALEB: Yes, sir. Half an hour ago.
20 D LITTLEFIELD: Good boy. Sweep the sawdust before the wind takes it.
21 D WREN: The mare's saddled at the livery. Provisions are in the left bag.
22 D LITTLEFIELD: You've been thoughtful.
23 D WREN: Rosie packed the bread.
24 D ROSIE: It's a day old.
25 D LITTLEFIELD: Everything's a day old in this town.
26 D DOC: Where will you go?
27 D LITTLEFIELD: South. There's a Judge in Albuquerque who owes me a sherry.
28 D ROSIE: You don't drink sherry.
29 D LITTLEFIELD: No. But it's owed.
30 D WREN: Ambrose.
31 D LITTLEFIELD: Yes, Nathaniel.
32 D WREN: I'll keep the bench warm.
33 D LITTLEFIELD: You'll keep it clean. That's the harder thing.
34 A ¶ Rosie wipes the razor on her apron and sets it on the shelf.
35 D ROSIE: That's the last of it.
36 D LITTLEFIELD: Thank you, Rosalind. What do I owe you?
37 D ROSIE: Two bits.
38 D LITTLEFIELD: Two bits for the cut of a lifetime.
39 D ROSIE: Three, if you stay for the shave.
40 D LITTLEFIELD: No. No, I believe I'll go as I am.

### SCENE s02281 | INT. STALLED ELEVATOR, TWENTY-SECOND FLOOR - DAY
Detected names (may be incomplete or contain aliases): HORACE PRIDE, GLORIA MENDELSOHN, TERRY, BOOTH, CONGRATULATIONS YOUR RETIREMENT, COLLEAGUES
* 1 A ¶ A mahogany-panelled elevator with a brass nameplate: CALLOWAY & PRIDE, ASSET MANAGEMENT.
* 2 A The numbers above the door read 22 and flicker.
* 3 A On the floor sits a large sheet cake in a cardboard box.
4 A ¶ HORACE PRIDE, sixty, the firm's senior partner, in a three-piece suit, grips the handrail.
5 A GLORIA MENDELSOHN, forty, an executive assistant with an orange lanyard, holds a clipboard to her chest.
6 A TERRENCE "TERRY" BOOTH, twenty-five, a mailroom clerk, clutches a bundle of envelopes and a balloon on a string.
* 7 A ¶ The elevator lurches.
8 A Horace and Gloria both grab for the cake box.
9 A Terry throws himself across it.
10 A The three of them end up in a heap on the carpet, the balloon bobbing above them, the cake intact.
11 D HORACE: Get off the cake!
12 D TERRY: I'm saving the cake!
13 D GLORIA: You're sitting on the cake!
14 A ¶ Terry rolls away.
15 A Gloria lifts the lid.
* 16 A Across the top, in blue icing: CONGRATULATIONS ON YOUR RETIREMENT, HORACE.
17 D HORACE: I'm not retiring.
18 D GLORIA: That's what the memo said.
19 D HORACE: What memo?
20 D GLORIA: The one signed by you.
21 D HORACE: I sign forty memos a day.
22 D TERRY: Sir, the party's at three.
23 D HORACE: What party?
24 D GLORIA: Yours.
25 D HORACE: I never agreed to a party.
26 D GLORIA: You agreed to the memo.
27 D HORACE: I agreed to a memo about a party. Not a party about my retirement.
28 D TERRY: Is there a difference?
29 D HORACE: There is a difference, Terrence. The difference is that I'm not ready.
30 D GLORIA: You're sixty-three, Horace. Everybody else on the floor has been ready for you since 2014.
31 D HORACE: That is a cruel thing to say to a man in an elevator.
32 D GLORIA: It is a true thing. The cruelty is incidental.
33 D TERRY: Should I, uh. Should I press the button again?
34 D HORACE: Press whichever one gets me out of this conversation.
35 A ¶ Terry presses every button on the panel at once.
* 36 A The elevator groans, lurches, and drops a floor.
37 A Horace and Gloria clutch the rail.
38 A Terry hugs the cake.
* 39 A The balloon floats up and pops against the ceiling.
* 40 A ¶ The doors slide open on the sixteenth floor.
41 A A crowd of colleagues in party hats stares in, holding streamers.
42 D COLLEAGUES [O.S.]: Surprise!
43 A ¶ Horace and Gloria look at each other.
44 A Terry, still on the floor, lifts the cake, a little squashed, a lot proud.
45 D HORACE: I am going to need a very large drink.

### SCENE s02282 | INT. PRINTING SHOP, MANCHESTER - EVENING (1838)
Detected names (may be incomplete or contain aliases): EZEKIEL FARTHING, PRUDENCE ASHWORTH
* 1 A ¶ Ink-black presses.
* 2 A Racks of lead type.
* 3 A A single tallow candle gutters beside a chalkboard of tomorrow's handbills.
4 A ¶ EZEKIEL FARTHING, thirties, compositor, in a leather apron, sets type with quick, practised fingers.
5 A Ink stains him to the elbow.
* 6 A ¶ A knock.
* 7 A The door opens, letting in cold and the smell of coal smoke.
8 A ¶ PRUDENCE ASHWORTH, twenties, a mill-girl in a patched shawl, steps in clutching a folded paper.
9 D PRUDENCE: Mr. Farthing? They said you'd print for a penny.
10 D EZEKIEL: Depends what it says.
11 D PRUDENCE: It says we want ten hours. No more.
12 D EZEKIEL: Who is "we"?
13 D PRUDENCE: The women at Greaves Mill. All three hundred.
14 D EZEKIEL: And who signs it?
15 D PRUDENCE: Nobody. That's the point. If nobody signs it, nobody's turned out.
16 A ¶ Ezekiel wipes his hands on his apron.
17 A He takes the paper and reads it by the candle.
18 A His lips move.
19 D EZEKIEL: It's a good bill.
20 D PRUDENCE: Will you print it?
21 D EZEKIEL: I'll print it. Come back Thursday.
22 D PRUDENCE: Thursday's too late. The vote is tomorrow.
23 D EZEKIEL: Then I'd best set it tonight.

### SCENE s02283 | INT. LAKE CABIN, KITCHEN - DAY
Detected names (may be incomplete or contain aliases): MARGUERITE LAVOIE, ODILE LAVOIE, DESMOND OYELARAN, ALBRECHT
* 1 A ¶ A pine-panelled kitchen that smells of woodsmoke and dust.
* 2 A Cardboard boxes stack on a table where somebody's father once ate breakfast.
* 3 A Through the window a grey lake lies flat as a plate.
4 A ¶ MARGUERITE LAVOIE, fifty-two, in a cardigan, wraps a chipped teacup in newspaper.
5 A Her sister ODILE LAVOIE, forty-eight, in a denim jacket, stands at the open refrigerator with a bin bag, holding a jar of pickles at arm's length.
6 A At the counter DESMOND OYELARAN, Marguerite's husband, taps at a calculator.
7 A By the screen door a neighbour, MR. ALBRECHT, seventy, in rubber boots, holds a fishing rod he has not been asked to hold.
8 D MARGUERITE: That was Maman's cup.
9 D ODILE: It's chipped.
10 D MARGUERITE: It was chipped when she bought it.
11 A ¶ She sets the cup in the box.
12 A She does not look at her sister.
13 A She picks up the next cup.
14 D ODILE: He kept pickles from 2009.
15 D MARGUERITE: He kept everything.
16 D ODILE: That's not a virtue.
17 A ¶ She drops the jar in the bin bag.
* 18 A The glass thuds, muffled, and does not break.
19 A Both of them listen for it to break.
20 A Neither says so.
21 D DESMOND: The realtor wants to list by the fifteenth.
22 D MARGUERITE: The fifteenth is a Sunday.
23 D DESMOND: Then the sixteenth.
24 D ODILE (to the bin bag): She'll list when she's ready.
25 D MARGUERITE: Who's she?
26 D ODILE: You. She. I don't know.
27 A ¶ She ties the bag.
28 A She carries it past Mr. Albrecht, who steps aside, then follows with the rod.
29 D MR. ALBRECHT: Your father lent me this in '94.
30 D MARGUERITE: Keep it.
31 D MR. ALBRECHT: It isn't mine to keep.
32 D ODILE (from the porch, not turning): He'd want you to have it.
33 A ¶ She sets the bag at the curb.
* 34 A The screen door bangs behind her.
35 A Marguerite stands very still at the table, her hand flat on a cardboard lid.
36 D DESMOND: Marguerite.
37 D MARGUERITE: I'm fine.
38 D DESMOND: I know.
39 A ¶ He crosses the kitchen and unfolds her fingers from the lid.
40 A He takes the cup out of the box, unwraps it, fills it from the kettle, and puts it in her hands.
41 D MR. ALBRECHT (clearing his throat): I'll leave the rod on the porch, then.
42 A ¶ He goes.
* 43 A The kitchen is quiet.
44 A ¶ Through the window Odile has sat down on the dock, her back to the cabin, her boots dangling above the water.
45 A Marguerite watches her through the glass.
46 A She lifts the cup, drinks, and does not set it down.
47 A ¶ After a moment she carries the cup out the screen door and across the grass.
48 A She lowers herself onto the planks beside her sister.
49 A She holds the cup out without a word.
50 A ¶ Odile takes it.
51 A She drinks.
52 A She hands it back.
* 53 A ¶ The lake does not move.

### SCENE s02284 | INT. SHARK TANK TUNNEL, MARINE AQUARIUM - NIGHT
Detected names (may be incomplete or contain aliases): MAN IN OVERALLS, WOMAN, DIVE SUIT, TAMSIN VOLK, LOOKOUT, DESHAWN, TEODORO
* 1 A ¶ Blue gloom.
* 2 A Sharks glide overhead.
* 3 A The tunnel's acrylic arch glows.
4 A ¶ A MAN IN OVERALLS crouches at a maintenance panel, drill whining.
5 A A WOMAN IN A DIVE SUIT, TAMSIN VOLK, swims past outside the glass, signalling.
6 A The third, a LOOKOUT in a guard uniform, DESHAWN, leans on the rail, watching the corridor.
7 D MAN IN OVERALLS: Panel's open.
8 D TAMSIN [O.S.] (through earpiece): Clock's running. Two minutes.
9 D DESHAWN: Quiet. Footsteps.
* 10 A ¶ A torch beam sweeps the far wall.
11 A All three freeze.
* 12 A A hammerhead drifts across the glass.
13 D MAN IN OVERALLS: Seal's cut. Pearl case is behind it.
14 D TAMSIN [O.S.]: Don't touch the alarm bar.
15 D TEODORO (whispering): I never touch the bar.
16 D DESHAWN: Teodoro, hurry.
17 D TEODORO: Got it.

### SCENE s02285 | INT. WHALE-BONE LIBRARY, LANTERN ISLE - NIGHT
Detected names (may be incomplete or contain aliases): ARCHIVIST MIRELLE, WREN, GRIMOLD, THE SEXTON
* 1 A ¶ A cathedral built inside the ribcage of a leviathan.
* 2 A Ribs arch overhead like the vault of some drowned church.
* 3 A Shelves climb the bone.
* 4 A Fireflies in glass jars hang on chains for light.
5 A ¶ ARCHIVIST MIRELLE, ancient, hunched, wrapped in a moth-eaten cloak, polishes a brass astrolabe.
6 A Her left eye is a milk-white marble.
7 A ¶ A boy, WREN, eleven, barefoot, slips between shelves, a book under his coat.
8 A A giant, GRIMOLD, ten feet tall, shaggy as a pine, ducks beneath the ribs with a candle in his fist.
9 A A stranger in the doorway, THE SEXTON, tall and thin, a hooded figure with no face, raps his staff on the floor.
10 D THE SEXTON: Return what you took.
11 D WREN: I took nothing.
12 A ¶ Mirelle's head turns slowly.
13 A The milk-white eye finds the book beneath his coat.
14 A Grimold sets down the candle and takes one step toward the boy, and the floor shivers.
15 A The Sexton lifts his staff.
* 16 A The jars swing on their chains, the fireflies swarming up like sparks.
17 D MIRELLE: Child. The book.
18 A ¶ Wren bolts.
19 A Grimold lunges, Mirelle's cloak snags on a shelf, the Sexton's staff cracks against a rib, and a hundred volumes thunder down in a cloud of dust.
20 A The boy skids through the avalanche and slams into the Sexton's legs.
* 21 A The book falls open.
* 22 A ¶ It is blank.
23 D GRIMOLD (rumbling): There is nothing in it.
24 D THE SEXTON (lowering the staff): Then why did you steal it?
25 D WREN: I wanted something to write in.
* 26 A ¶ Silence.
* 27 A The dust settles.
28 A Mirelle laughs, a dry whisper like pages turning, and the fireflies drift back down to their jars.

### SCENE s02286 | INT. LAUNDROMAT, 24-HOUR - 3 A.M.
Detected names (may be incomplete or contain aliases): TALL MAN, VERONICA CASTELLANOS, NIKOLAI BRODSKY, DOLORES, MARCUS
* 1 A ¶ Fluorescent hum.
* 2 A Rows of dryers tumbling.
* 3 A A vending machine glows.
* 4 A The windows are black.
5 A ¶ A TALL MAN in a work jacket sits on a folding table, a duffel bag at his feet.
6 A He stares at the dryers.
7 A Across the room, VERONICA CASTELLANOS, thirty, scrubs, sits with a laundry basket in her lap, scrolling her phone.
8 A At the folding table's far end, a younger man, NIKOLAI BRODSKY, hoodie up, folds towels very slowly.
9 A And behind the counter, DOLORES, sixty, the attendant, reads a paperback.
10 D TALL MAN: Excuse me. Is this machine broken?
11 D VERONICA: It says out of order.
12 D TALL MAN: It took my quarters.
13 D DOLORES: There's a number on the sign.
14 D TALL MAN: Is the number answered?
15 D DOLORES: Not at three.
16 A ¶ The man stands.
17 A He is very large.
18 A He crosses to the dryer and lays a palm against its door.
19 A Nikolai's eyes rise from the towels.
20 D NIKOLAI: I'd leave it alone.
21 D TALL MAN: Who asked you?
22 D NIKOLAI: Nobody. Just saying.
23 D TALL MAN: What's in the dryer, kid?
24 D NIKOLAI: Nothing.
25 D TALL MAN: Then why are you worried?
26 A ¶ Veronica sets down her phone.
27 A Dolores sets down her book.
28 D VERONICA: Sir, you should sit down.
29 D TALL MAN: Sit down yourself.
30 A ¶ He yanks the door.
* 31 A A canvas satchel tumbles out, hits the floor, and spills bundled cash.
32 A Nikolai lunges.
33 A The tall man shoves him back into the folding table, and towels burst across the floor.
34 D MARCUS (holding up a badge): Police. Everybody stay where you are.
35 A ¶ Veronica and Nikolai freeze.
36 A Dolores slowly raises her hands.
37 A Marcus kneels over the satchel, his badge dangling from his chain.
38 D MARCUS [CONT'D]: Who owns this?
39 D DOLORES: He does.
40 D NIKOLAI: She's lying.
41 D VERONICA: He hid it this afternoon. I saw him.
42 D NIKOLAI: She was in on it!
43 A ¶ Marcus stands.
44 A He looks at the three of them, a long beat.
45 A He takes out his cuffs.

### SCENE s02287 | INT. ELEVATOR HOISTWAY, OFFICE TOWER - NIGHT
Detected names (may be incomplete or contain aliases): ISAAC MBEKI, CELESTE ARNAUD, RADIO
* 1 A ¶ A concrete shaft lit by a single work lamp.
* 2 A Greasy cables hang in the dark.
* 3 A Far below, a pit.
* 4 A Far above, a rectangle of light.
5 A ¶ ISAAC MBEKI, thirties, an elevator mechanic, clings to a ladder bolted to the wall.
6 A He wears a headlamp and a harness that does not look new.
* 7 A A radio crackles at his hip.
8 A ¶ He glances up.
* 9 A A set of boots has appeared in the light above him.
10 A ¶ CELESTE ARNAUD, forties, in a good coat, stands on the landing with a pistol held low.
11 A She has the posture of a woman who has done this before.
12 A She does not speak.
13 A ¶ His breath catches.
14 A He takes a step down the ladder.
15 A She takes one down after him.
* 16 A The cable between them hums.
17 D RADIO [V.O.] (tinny): Isaac, you there? Control room. We've lost the car on four.
18 A ¶ He keeps his eyes on her and unclips the radio.
19 D ISAAC: Say again.
20 D RADIO [V.O.]: Car's stuck between four and five. Don't move the cab.
21 A ¶ She raises the pistol a few inches.
22 A He hears the safety click.
23 D ISAAC (into the radio, calm): Copy. Hold the car. I'm coming up.
24 D RADIO [V.O.]: Who are you talking to?
25 A ¶ He does not answer.
26 A He drops the radio.
* 27 A It falls forty feet, bouncing off the guide rails, then shatters on the pit floor.
28 A ¶ She fires.
* 29 A The round whines off a rail.
30 A He kicks away from the ladder, swings on the cable, and lets go.
31 A A moving counterweight rises out of the dark and he lands on it hard, flat, wind knocked from him.
32 A ¶ She leans over the edge, searching the black.
* 33 A The counterweight sinks.
34 A Her face shrinks in the rectangle of light.
35 A ¶ He lies there, shaking, laughing silently, and does not move for a very long time.

### SCENE s02288 | INT. ABANDONED SCHOOLROOM, YORKSHIRE - DUSK (1851)
Detected names (may be incomplete or contain aliases): MISS EDITH WHITLOCK
* 1 A ¶ A single desk.
* 2 A A cracked slate.
* 3 A Snow drifts through a broken window and settles on a pile of primers.
* 4 A ¶ The door creaks.
5 A MISS EDITH WHITLOCK, thirty, in a wool coat and bonnet, a trunk dragging behind her, steps in and stops.
6 A ¶ She sets down the trunk.
7 A She crosses to the desk.
8 A She wipes frost from it with her glove and takes a folded letter from her sleeve.
9 D EDITH [V.O.] (reading, her own voice): "Dear Miss Whitlock. We regret the schoolhouse at Thornby Moor has been closed these four years."
10 A ¶ She turns to the slate.
* 11 A A single word is chalked there in a child's hand: STAY.
12 D EDITH [V.O., CONT'D]: "The parish cannot afford a mistress. We trust you will find other employment."
13 A ¶ She sets the letter down.
14 A She takes off her bonnet.
15 A She picks up a stub of chalk, and under STAY she writes, very slowly, MONDAY.

### SCENE s02289 | INT. PALLIATIVE WARD, ROOM 7 - NIGHT
Detected names (may be incomplete or contain aliases): OLD SOLOMON KAPLAN, NURSE, DANIELLE
* 1 A ¶ Dim lamp.
* 2 A Machine hum.
* 3 A A window fogged with breath.
4 A ¶ OLD SOLOMON KAPLAN, eighty-three, in the bed, blanket to his chin.
5 A A NURSE, forties, in lilac scrubs, checks a drip.
6 D NURSE: Can't sleep?
7 D SOLOMON: I sleep fine.
8 D NURSE: Then why are your eyes open?
9 D SOLOMON: Habit.
10 A ¶ She adjusts the pillow.
11 A He watches.
12 D SOLOMON [CONT'D]: You new?
13 D NURSE: Six months.
14 D SOLOMON: You'll learn.
15 D NURSE: Learn what?
16 D SOLOMON: Not to look at the clock.
17 A ¶ She smiles.
18 A She smooths the blanket.
19 A She stays.
20 D SOLOMON [CONT'D]: My wife used to hum.
21 D NURSE: What did she hum?
22 D SOLOMON: Whatever was on.
23 D NURSE: Radio?
24 D SOLOMON: Kettle.
* 25 A ¶ A pause.
26 D NURSE: Would you like tea?
27 D SOLOMON: There's no tea at three.
28 D NURSE: There's tea if I say there is.
29 D SOLOMON: What's your name?
30 D NURSE: Danielle.
31 D SOLOMON: Danielle. That's a good name for a nurse.
32 D DANIELLE: Mr. Kaplan, drink some water.
33 D SOLOMON: Solomon.
34 D DANIELLE: Solomon.
35 A ¶ He drinks.
36 A She holds the cup.
37 A His hand shakes on hers.
38 D SOLOMON: My son isn't coming, is he?
39 D DANIELLE: The roads are bad.
40 D SOLOMON: That's a kind lie.
41 D DANIELLE: It's the one I have.
42 D SOLOMON: Keep it.
43 A ¶ She sits on the edge of the bed.
44 A She doesn't say anything.
45 A He closes his eyes.
* 46 A The machine hums on.
47 D SOLOMON [CONT'D]: Hum something.
48 D DANIELLE: I can't carry a tune.
49 D SOLOMON: Neither could she.
50 A ¶ Danielle hums.
* 51 A It is not a tune.
* 52 A It is a kettle.
53 A His hand slackens on hers, and she keeps humming.

### SCENE s02290 | INT. PLANETARIUM DOME, CITY MUSEUM - NIGHT
Detected names (may be incomplete or contain aliases): LUCIEN DAGGETT, MAEVE OSHIRO, FELIX BRANDT
* 1 A ¶ A hush of velvet seats under a black ceiling stippled with fake stars.
* 2 A A projector as big as a refrigerator squats in the centre like a sleeping insect.
3 A ¶ LUCIEN DAGGETT, fifties, tuxedoed, courteous, once a stage magician, kneels at the projector with a screwdriver.
4 A MAEVE OSHIRO, thirties, in a night-guard uniform two sizes too large, holds a flashlight and a walkie-talkie.
5 A FELIX BRANDT, twenty, wiry, in black, dangles from a rope through a hatch in the dome.
6 D LUCIEN: Is the corridor clear?
7 D MAEVE: Clear for four minutes.
8 D LUCIEN: Felix. Descend.
9 D FELIX: I'm descending!
* 10 A ¶ The rope pays out.
11 A Felix swings across the dome, sneakers squeaking, and plants one foot on a seat back and the other on the projector, and the whole machine tilts.
12 A Lucien and Maeve both lunge to steady it.
13 A The three of them end up in a knot, Felix's rope wrapped round Maeve's arm, Lucien's screwdriver pinned under Felix's chin.
* 14 A A hidden lens flares, and a thousand stars wheel across the ceiling.
15 D MAEVE: Get off me.
16 D FELIX: I can't, you're on the rope.
17 D LUCIEN: Both of you, be still.
18 A ¶ They hold still.
* 19 A A tiny brass drawer slides out of the projector's base.
* 20 A Inside lies a velvet pouch.
21 D LUCIEN [CONT'D]: There you are.
22 D MAEVE: That's it? That's the Orion Diamond?
23 D LUCIEN: That's it.
* 24 A ¶ A door slams somewhere in the museum.
* 25 A Footsteps.
26 A All three freeze.
* 27 A The stars keep turning overhead.
28 A Then Lucien smiles, and tucks the pouch into his cummerbund.

### SCENE s02291 | INT. CONSERVATORY, FINCH-HATTON HOUSE - EARLY MORNING
Detected names (may be incomplete or contain aliases): INSPECTOR OSWIN PELLEGRINI, LADY CORDELIA FINCH-HATTON, AMOS TREVELYAN, BERNADETTE QUILL, JASPER
* 1 A ¶ Glass walls beaded with dew.
* 2 A Orchids hang from iron hooks.
* 3 A Rain taps the roof like fingernails on a table.
* 4 A A white sheet covers something long on the tiled floor.
5 A ¶ INSPECTOR OSWIN PELLEGRINI, fifties, rumpled tweed, a pipe he does not light, stands over the sheet.
6 A Around him wait the household: LADY CORDELIA FINCH-HATTON, seventy, upright in a wheelchair; AMOS TREVELYAN, the butler, pale as candle wax; MRS. BERNADETTE QUILL, the cook, wringing a dishcloth; and JASPER, the nephew, twenty-two, slouched against a palm.
7 D PELLEGRINI: Nobody leaves.
8 D JASPER: We were having breakfast.
9 D PELLEGRINI: Then you may have it later.
10 A ¶ He crouches.
11 A He lifts the corner of the sheet and lets it fall.
12 A Lady Cordelia grips the arms of her chair.
13 A The cook turns her face to the glass.
14 D PELLEGRINI [CONT'D] (to himself): No sign of a struggle.
15 D AMOS: Inspector, if I might say.
16 D PELLEGRINI: You might.
17 D AMOS: The doors were locked at eleven.
18 D MRS. QUILL: They were. I locked the kitchen.
19 D JASPER: I locked nothing, I never lock anything.
20 D CORDELIA: Be quiet, Jasper.
21 D PELLEGRINI: Lady Finch-Hatton, who was the last to see him?
22 D CORDELIA: I was. At half past ten.
23 D PELLEGRINI: And?
24 D CORDELIA: He was watering the orchids.
25 A ¶ Pellegrini rises, slowly, and goes to the nearest hanging basket.
26 A He touches the soil with two fingers.
27 D PELLEGRINI (a murmur): Dry.
28 A ¶ Jasper and Amos exchange a look.
29 A Mrs. Quill drops the dishcloth.
30 A Cordelia's wheels creak as she rolls backward half a foot, and then stops.
31 D PELLEGRINI [CONT'D] (to the room): Whoever killed him watered the plants after.
* 32 A ¶ Silence.
* 33 A Rain.
34 A Then, softly, Lady Cordelia begins to laugh.

### SCENE s02292 | EXT. ABANDONED DRIVE-IN CONCESSION ROOF - NIGHT
Detected names (may be incomplete or contain aliases): ILSE VANTERPOOL, RODRIGO ACOSTA
* 1 A ¶ A flat tar roof ringed by rusted floodlights.
* 2 A The screen beyond it stands bare, a white rectangle against a sky full of cricket noise.
* 3 A Weeds crack the asphalt below.
4 A ¶ ILSE VANTERPOOL, seventeen, sits on the parapet, boots dangling over a drop she does not look at.
5 A She wears her brother's varsity jacket, sleeves rolled twice.
6 A A cigarette burns down in her fingers, unsmoked.
7 A ¶ RODRIGO ACOSTA, eighteen, lanky, a trombone case at his feet, climbs the last rung of the ladder and stops three steps away.
8 A He holds a paper bag.
9 D RODRIGO: You said you'd be at the recital.
10 D ILSE: I said I'd think about it.
11 A ¶ He sets the bag down.
12 A He sits, not close, not far.
* 13 A A moth batters the nearest dead lamp.
14 D RODRIGO: It went okay.
15 D ILSE: Did you play the part?
16 D RODRIGO: Which part?
17 D ILSE: You know which part.
18 A ¶ He opens the case.
19 A He doesn't take the instrument out.
20 A He just lifts the lid, as though to let the night look in.
21 D RODRIGO: I skipped it.
22 D ILSE: Why?
23 D RODRIGO: Wasn't mine to play.
24 A ¶ She stubs the cigarette against the parapet, a long slow press.
25 A Then she laughs, one dry breath, and her shoulders drop.
26 A He passes her the bag.
27 A She takes out a warm paper-wrapped churro, bites it, and holds the rest out to him without turning her head.
* 28 A ¶ The screen glows, faintly, with starlight.

### SCENE s02293 | INT. DENTIST WAITING ROOM - DAY
Detected names (may be incomplete or contain aliases): CLOWN, PATRICIA VOSS, DEEDEE, MILO, JUANITA, GUS
* 1 A ¶ Beige chairs.
* 2 A A fish tank.
* 3 A A bowl of lollipops marked FOR GOOD PATIENTS ONLY.
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

### SCENE s02294 | INT. TRUCK STOP DINER, ARM-WRESTLING TABLE - NIGHT
Detected names (may be incomplete or contain aliases): BIG WENDELL TUCKER, ADA PRZYBYLSKI, REFEREE
* 1 A ¶ Steel table.
* 2 A Two stools.
* 3 A A crowd of truckers three-deep.
* 4 A Neon beer signs buzz.
5 A ¶ BIG WENDELL TUCKER, forty, three hundred pounds, hands like shovels, grips the pegs.
6 A Across from him sits ADA PRZYBYLSKI, twenty-three, a barista in a hairnet, five-foot-two, sleeves rolled.
7 D REFEREE: Ready.
8 A ¶ Wendell grins.
9 A Ada doesn't.
10 A Their hands lock.
11 D REFEREE [CONT'D]: Go.
12 A ¶ Wendell surges.
13 A Ada's arm folds back to forty-five degrees and the crowd roars.
14 A Her face goes red, her knuckles white, and she exhales through clenched teeth.
15 A Wendell relaxes into the win.
16 D ADA: Not yet.
17 A ¶ She drives.
18 A The forearm rises, inch by inch, a hinge opening against a rusty spring, and Wendell's grin falters.
19 A The crowd quiets.
20 A His wrist cracks.
21 A She slams it back to vertical, then past, pressing it toward the steel, and he shouts, but she holds.
22 A He wrenches free, regrips, and with a bellow of rage reverses the angle, the table rocking.
23 A Ada's stool skids, her hairnet slips, a strand of hair falls into her mouth, and she bites it.
24 D WENDELL: You can't!
25 D ADA: I can.
26 A ¶ The back of his hand touches steel.
27 A The room erupts.
28 A Wendell stares at his fist as though it belonged to a stranger.

### SCENE s02295 | INT. ROOFTOP GREENHOUSE APARTMENT, LISBON - EVENING
Detected names (may be incomplete or contain aliases): CATARINA VIEIRA, MACHINE
* 1 A ¶ A small glass room on a tiled roof.
* 2 A Geraniums in chipped pots.
* 3 A Behind the glass the city falls away in terraces of orange light and the river beyond is the colour of tin.
4 A ¶ CATARINA VIEIRA, thirty-five, in a linen shirt, stands at a wooden table with her sleeves rolled.
5 A She waters a row of seedlings from a copper can.
6 A She hums as she works, tunelessly, content.
* 7 A ¶ On the table, a battered answering machine blinks red.
8 A She does not look at it.
9 A She waters.
10 A She hums.
11 A She leans to pinch a dead leaf from a geranium.
12 A ¶ She straightens.
13 A Her eyes finally go to the machine.
14 A She presses a finger to the button.
15 D MACHINE [V.O.] (her own voice, younger, laughing): You've reached Catarina. If you're Tomás, I'm still angry. If you're not Tomás, leave a message.
* 16 A ¶ A beep.
17 A Her hand goes still on the can.
18 D CATARINA [V.O.] (the same voice, older, brittle): It's me. I'm at the airport. I just wanted to say I'm sorry, and I'm coming back, and, and I changed the message so you'd have it.
19 A ¶ She sets the can down.
20 A She presses the button again.
21 A She listens again.
22 A Her lips move along with the words.
23 A ¶ Then she lowers herself into the chair beside the table.
24 A She turns the machine until its small red eye faces the window, toward the river, and she smiles.
25 A ¶ She picks up the can.
26 A She waters the seedlings.
27 A She hums.

### SCENE s02296 | INT. LIGHTHOUSE KEEPER'S ROOM - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR MALCOLM REYNOLDS, DICTAPHONE
* 1 A ¶ A round stone room.
* 2 A An iron stove glows.
* 3 A A kettle ticks.
* 4 A Outside, a gale tears at the shutters.
5 A ¶ INSPECTOR MALCOLM REYNOLDS, fifties, in an oilskin coat, sits at a rough table.
6 A He winds the spool of a portable dictaphone and presses PLAY.
7 D DICTAPHONE [V.O.] (his own voice, calm): Entry one. The keeper is dead.
8 A ¶ He pours tea.
9 A He is not troubled.
10 D DICTAPHONE [V.O., CONT'D]: Entry two. The boat was sabotaged, the radio smashed, and the logbook burned.
11 A ¶ He sips.
12 A He turns a page of the logbook, very much unburned.
13 D DICTAPHONE [V.O., CONT'D]: Entry three. No one else is on the island.
* 14 A ¶ The shutters bang.
15 A He stops the machine.
16 A He looks up at the winding iron stairs, listening.
* 17 A A single drop falls from the ceiling and hits the table.
18 A ¶ Slowly, he rewinds the spool.
19 D REYNOLDS (quietly): Entry four.

### SCENE s02297 | EXT. SALT FLATS, ABANDONED SURVEY CAMP - DAWN
Detected names (may be incomplete or contain aliases): TOBIAS GRAYSON, LENORE BASQUIAT, SLATER BROTHERS, JUDE, ABEL
* 1 A ¶ White to every horizon.
* 2 A A crooked tent.
* 3 A A dead mule on its side.
* 4 A Heat already shimmers.
5 A ¶ TOBIAS GRAYSON, forties, leathered, sits against the tent pole, a bullet in his gut, his hat over his eyes.
6 A LENORE BASQUIAT, thirty, in a duster, kneels with a canteen.
7 A Two outlaws, the SLATER BROTHERS, JUDE and ABEL, stand over them, rifles lowered.
8 D JUDE: He's done.
9 D LENORE: He's breathing.
10 D ABEL: Not for long.
11 D TOBIAS (thin): Leave her out of it.
12 D JUDE: She dug your claim.
13 D LENORE: It was never his claim.
14 D ABEL: Then whose?
15 D LENORE: Mine.
* 16 A ¶ Silence.
17 A Jude lifts his rifle again, slowly.
18 A Abel holds out a hand.
19 D ABEL [CONT'D]: Let her talk.
20 D TOBIAS: Lenore. Don't.
21 D LENORE: It's under the mule.
22 A ¶ The brothers look at the dead animal.
23 A Tobias's hand slips from his gut.
* 24 A The canteen falls and the water drains into the salt.

### SCENE s02298 | INT. ER TRAUMA BAY 2 - NIGHT
Detected names (may be incomplete or contain aliases): TRAUMA SURGEON, NURSE ABIOLA ADEYEMI, RESIDENT DAVIT HOVSEPIAN, SUNITA RAO, SECURITY GUARD LEROY, ELLINGTON, MENDEZ
* 1 A ¶ Fluorescent glare.
* 2 A Monitors scream.
* 3 A Blood on the floor tile.
4 A ¶ A TRAUMA SURGEON, forties, gloved to the elbow, bends over a gurney.
5 A NURSE ABIOLA ADEYEMI, thirties, squeezes a bag-valve mask.
6 A RESIDENT DAVIT HOVSEPIAN, twenty-six, pumps the patient's chest.
7 A Anaesthetist DR. SUNITA RAO, fifties, calls out numbers.
8 A SECURITY GUARD LEROY, thirty, stands at the door.
9 A A bystander's mother, MRS. ELLINGTON, sobs behind him.
10 D DR. RAO: Pressure's sixty over thirty!
11 D DAVIT: Compressions continuing!
12 D ABIOLA: Airway clear!
13 D TRAUMA SURGEON: Clamp. I need a clamp.
14 D DAVIT: Which clamp?
15 D ABIOLA: The big one, Doctor Mendez!
16 D MENDEZ: Thank you, Abiola.
17 A ¶ Mendez takes the clamp.
18 A His hands move fast.
19 A Davit sweats through his scrubs, Abiola bags, Rao reads the monitor.
20 A Leroy blocks the door.
21 A Mrs. Ellington cries out and he lowers his head.
22 D DR. RAO: Sixty-five over forty!
23 D MENDEZ: Stay with me.
24 D LEROY: Ma'am, you can't come in.
25 D MRS. ELLINGTON: He's my boy!
26 D DAVIT: Pulse!
27 D ABIOLA: I've got a pulse!
* 28 A ¶ The monitor settles into a steady beep.
29 A Mendez straightens.
30 A Everyone breathes.

### SCENE s02299 | INT. COURTHOUSE STAIRWELL - DAY
Detected names (may be incomplete or contain aliases): ATTORNEY NADIA FAROUQ, DARRELL OKAFOR
* 1 A ¶ Concrete steps.
* 2 A A buzzing light.
* 3 A Muffled voices from above.
4 A ¶ ATTORNEY NADIA FAROUQ, forties, stands against the wall with a briefcase.
5 A Her client, DARRELL OKAFOR, thirty, stands one step below, suit too big at the shoulders.
6 D NADIA: Say the date again.
7 D DARRELL: March fourth.
8 D NADIA: And the time.
9 D DARRELL: Nine-fifteen.
10 A ¶ She nods.
11 A She straightens his tie.
12 A He lets her.
13 A His hand is steady.
14 A Hers is not.
15 A She puts it in her pocket.
16 D NADIA: If they ask about the knife.
17 D DARRELL: I never saw a knife.
18 D NADIA: Good.
* 19 A ¶ Above them a door opens and closes.
20 A She picks up her briefcase and goes up one step.
21 A He doesn't move.
22 D DARRELL: You believe me?
23 D NADIA: I believe the record.
24 A ¶ She goes up another step.
25 A He follows.

### SCENE s02300 | EXT. SCHOOL BUS, LAST DAY OF SUMMER CAMP - AFTERNOON
Detected names (may be incomplete or contain aliases): MAYA, TOMASZ, JOLENE, ROSALIE, SPENCER, HIROSHI
* 1 A ¶ A yellow bus idles on a gravel lot, windows down, smelling of sunscreen and lake water.
2 A Six kids pile in, damp-haired, loud.
3 A ¶ MAYA, thirteen, drags her duffel up the steps and drops into the front seat, then immediately stands, looking down the aisle.
4 A TOMASZ, fourteen, slouches behind her with headphones round his neck.
5 A JOLENE and her twin ROSALIE, twelve, argue over a seat.
6 A SPENCER, eleven, carries a jar with a frog in it.
7 A And at the back, alone, HIROSHI, fourteen, sits with his knees up and a letter in his fist.
8 D MAYA: Everybody, quiet, I have to say something!
9 D TOMASZ: Nobody wants you to say something.
10 D JOLENE: Shut up, Tomasz.
11 D ROSALIE (muttering): Always saying something.
12 D SPENCER: The frog's coming with me!
13 D MAYA: Spencer, no.
14 A ¶ He cradles the jar, plants himself in the aisle.
15 A She sighs, turns to the whole bus, and takes a breath.
16 A Hiroshi folds the letter into smaller and smaller squares, until he can't fold any more.
17 A Tomasz notices.
18 A He pulls his headphones up.
19 A Jolene and Rosalie fall silent in the same instant.
* 20 A The frog croaks.
21 D MAYA [CONT'D] (softly): I'm going to miss you all.
22 A ¶ Nobody laughs.
* 23 A The bus lurches forward.
24 A Hiroshi presses his forehead against the window and does not look back.

### SCENE s02301 | EXT. TREEHOUSE IN A DEAD ELM - NIGHT
Detected names (may be incomplete or contain aliases): ANNELIESE KROLL, BO TRAN, KWAME BOATENG, SOLEDAD IBARRA
* 1 A ¶ A plywood box wedged in the crotch of a bare elm.
* 2 A A string of Christmas lights, half burned out.
* 3 A Four sleeping bags laid in a square.
* 4 A Frost on the railings.
5 A ¶ ANNELIESE KROLL, sixteen, sits cross-legged with a thermos.
6 A BO TRAN, sixteen, tunes a ukulele nobody asked for.
7 A KWAME BOATENG, seventeen, stretches on his back and stares up at a hole in the roof.
8 A SOLEDAD IBARRA, sixteen, perches at the edge with her feet in the air, rolling an unlit cigarette between her fingers.
9 D BO: Okay, okay, this one's for the graduating class.
10 D KWAME: We haven't graduated.
11 D BO: It's for the future.
12 D ANNELIESE: You can't even play it.
13 D BO: I can play three chords.
14 D SOLEDAD: Four if you count the one you broke.
15 A ¶ Bo strums.
* 16 A It is awful.
17 A Kwame laughs into his sleeve.
18 A Anneliese passes the thermos to Soledad, and Soledad drinks and passes it on to Kwame, and it goes round without anyone speaking.
* 19 A The lights flicker.
* 20 A The ukulele fades.
21 D BO: It's nice up here.
22 D KWAME: Yeah.
23 D ANNELIESE: Yeah.
24 A ¶ Soledad says nothing.
25 A She rolls the cigarette once more, then sets it on the plank beside her and folds her hands.
26 D SOLEDAD: Hey. Can I say something?
27 D KWAME: Always.
28 D SOLEDAD: I'm leaving in the morning.
29 A ¶ Bo stops strumming.
30 A Anneliese puts down the thermos.
31 A Kwame sits up.
32 A The three of them turn to her at once, and the ukulele rolls off the platform and clatters through the branches.
33 D ANNELIESE: What do you mean, leaving?
34 D SOLEDAD: My dad got the job. In Tucson.
35 D BO: Tucson?
36 D KWAME: When?
37 D SOLEDAD: Seven a.m.
38 A ¶ Nobody speaks.
* 39 A Frost ticks on the rail.
40 A Kwame reaches across the square of sleeping bags and takes her sleeve between two fingers, and holds on.
41 A Anneliese climbs over Bo and puts her head on Soledad's shoulder.
42 A Bo just sits there, looking down at the dark where the ukulele went.

### SCENE s02302 | INT. MASCOT DRESSING ROOM, MINOR-LEAGUE BALLPARK - DAY
Detected names (may be incomplete or contain aliases): ZEPHYR OKONJO, MORGANA TREVINO, DUNCAN, ANNOUNCER
* 1 A ¶ A cramped cinderblock closet crowded with giant heads: a hot dog, a gopher, a foam eagle with a bent beak.
* 2 A It smells of old sweat and glue.
3 A ¶ ZEPHYR OKONJO, twenties, half-dressed as the gopher, struggles with a zipper.
4 A MORGANA TREVINO, fifties, the mascot coordinator, clutches a clipboard.
5 A DUNCAN, nineteen, the hot dog, stands frozen with one arm in a sleeve.
6 D MORGANA: Showtime in four minutes!
7 D ZEPHYR: My zipper's stuck!
8 D DUNCAN: I can't see out of this thing!
9 D MORGANA: You don't need to see, Duncan, you need to wave.
10 A ¶ Zephyr yanks.
11 A Duncan staggers.
12 A Both of them knock into Morgana, who drops the clipboard.
13 A All three go down in a heap of foam and fur, the gopher head rolling away, the hot dog bun flapping.
14 D ZEPHYR: Get off my tail!
15 D DUNCAN: That's my mustard!
16 D MORGANA: Both of you, stand up!
17 A ¶ They stand, tangled.
* 18 A A voice booms through the wall.
19 D ANNOUNCER [O.S.]: Ladies and gentlemen, please welcome your Oakwood Gophers!
20 A ¶ The three look at each other.
21 A Zephyr picks up the gopher head, jams it on backwards, and runs for the door.

### SCENE s02303 | INT. FISHING BOAT, MOORED AT DOCK - DAY
Detected names (may be incomplete or contain aliases): ATTORNEY RENATA OKAFOR-LINDGREN, GWEN, HARTIGAN
* 1 A ¶ A deposition held in a wheelhouse.
* 2 A A stenographer's machine on a tackle crate.
* 3 A Gulls outside.
* 4 A The boat creaks.
5 A ¶ ATTORNEY RENATA OKAFOR-LINDGREN, forties, sharp suit, sea-legs unsteady, leans against a bulkhead.
6 A Opposite, in a folding chair, sits CAPTAIN GWENDOLYN "GWEN" HARTIGAN, sixty, weathered, arms crossed.
7 D RENATA: State your name for the record.
8 D GWEN: Gwendolyn Hartigan.
9 D RENATA: And you were the captain on the night of the sixth.
10 D GWEN: I'm captain every night.
11 A ¶ Renata slides a photograph across the crate.
12 A Gwen doesn't look at it.
13 D RENATA: She was found in your hold.
14 D GWEN: She was my deckhand.
15 D RENATA: And she was alive when she boarded?
16 D GWEN: She was alive when she came on. She was alive when she went below.
17 A ¶ Renata taps the photo.
18 A Gwen's jaw tightens.
19 D RENATA: And when she came up?
20 D GWEN: She didn't.

### SCENE s02304 | INT. BAKERY WALK-IN COOLER - BEFORE DAWN
Detected names (may be incomplete or contain aliases): CASIMIR LEWANDOWSKI, ROXANE DELACROIX-HUNT
* 1 A ¶ Steel shelves of dough trays.
* 2 A Breath fogs.
* 3 A A bare bulb swings slightly from its cord.
4 A ¶ CASIMIR LEWANDOWSKI, sixty, the head baker, in a white coat, stands at the back wall.
5 A His hands shake.
6 A Across from him ROXANE DELACROIX-HUNT, forty, in a black wool coat and leather gloves, holds a ledger.
7 A ¶ He looks at the door.
8 A She looks at him.
9 A She sets the ledger on a tray of dough, and the dough sighs under it.
10 D CASIMIR: You said Tuesday.
11 D ROXANE: It is Tuesday.
12 D CASIMIR: It's four in the morning.
13 D ROXANE: Then it's early Tuesday.
14 A ¶ She opens the ledger.
15 A He shuts his eyes.
16 A She turns a page and runs a gloved finger down a column.
17 D CASIMIR: Forty years, I never cooked the books.
18 D ROXANE: You cooked them for thirty-nine.
19 A ¶ He opens his eyes.
20 A He reaches into his coat and she watches him do it, patient as a cat.
21 A He draws out a small brass key.
22 D CASIMIR: It's in the flour bin.
23 D ROXANE: All of it?
24 D CASIMIR: All of it.
25 A ¶ She takes the key.
26 A She does not move toward the door.
27 A Instead she closes the ledger and sets it back in his hands.
28 D ROXANE: Keep this. It's the only copy.
29 A ¶ He stares.
30 A She straightens her gloves.
31 A She walks out, and the heavy door swings shut behind her, and the bulb sways, and he stands among the dough with the book clutched to his chest like a hymnal.

### SCENE s02305 | INT. DRAGON'S HOARD, MOUNTAIN CAVERN - TWILIGHT
Detected names (may be incomplete or contain aliases): SER ALARIC THORNWELL, BRAN, ASHDOWN, VESPERINE
* 1 A ¶ A cavern as wide as a cathedral.
* 2 A Gold rises in slow dunes to the ceiling, spilling goblets, helms, a toppled throne.
* 3 A Far above, a fissure lets in a shaft of rose light.
* 4 A Warm air smells of sulphur and old coins.
5 A ¶ SER ALARIC THORNWELL, forty, battered mail under a cloak of faded blue, kneels on a gold dune with a lantern.
6 A Beside him, young BRANDOLF "BRAN" ASHDOWN, eighteen, his squire, hauls a sack, panting.
7 A Both are filthy with soot.
8 A And on a shelf of rock above them, curled around a brazier of coals, lies an elderly dragon, VESPERINE, scales gone the colour of dusk.
9 A ¶ The dragon opens one yellow eye.
10 D VESPERINE: You are very late.
11 A ¶ Alaric lowers the lantern.
12 A Bran drops the sack.
13 D ALARIC: Forgive us, Vesperine. The pass was snowed in.
14 D VESPERINE: The pass has been snowed in for three hundred years. I would not have thought it a surprise.
15 D BRAN: Ser Alaric, she's talking.
16 D ALARIC: Yes, Bran.
17 D BRAN: Dragons talk?
18 D VESPERINE: Dragons do everything. We merely prefer not to.
19 A ¶ Bran stares at her.
20 A He stares at Alaric.
21 A Alaric folds his arms.
22 D ALARIC: We came for the sword.
23 D VESPERINE: Everyone comes for the sword.
24 D ALARIC: My lord is dying. The kingdom needs it.
25 D VESPERINE: Your lord is a fool.
26 D ALARIC: Perhaps. But he is mine.
27 A ¶ The dragon rolls her head toward Bran.
28 D VESPERINE: And you, little one. What do you come for?
29 D BRAN (whispering): Me? I came to carry the sack.
30 D VESPERINE: Honest, at least.
31 A ¶ She shifts.
* 32 A The gold slides.
* 33 A A tarnished hilt appears among the coins.
34 A Alaric starts toward it.
35 A Vesperine's tail curls across his path, not violently, just a gate closing.
36 D ALARIC: You'll not let us take it?
37 D VESPERINE: I did not say that.
38 D ALARIC: Then what?
39 D VESPERINE: You carry a sack, a lantern, and the weight of a dying lord. Put them down. Sit.
40 A ¶ Alaric looks at Bran.
41 A Bran shrugs.
42 A They sit on the gold, knees drawn up like boys.
43 A Vesperine settles her chin on her claws.
44 D VESPERINE [CONT'D]: Tell me about the king.
45 D ALARIC: He was a good man once.
46 D VESPERINE: And now?
47 D ALARIC: Now he is a tired one.
48 D VESPERINE: Tired men make poor kings. But they make excellent grandfathers.
49 D BRAN (softly): She's smiling.
50 D ALARIC: Dragons do not smile.
51 D VESPERINE: You see? You know nothing about us.
52 A ¶ She lifts her tail.
* 53 A The sword gleams.
54 D VESPERINE [CONT'D]: Take it. And tell your king the mountain remembers him kindly.
55 A ¶ Alaric rises.
56 A He crosses the dunes, lifts the hilt with both hands, and bows over it.
57 A Bran trots after him, dragging the sack.
58 A ¶ At the cavern mouth Bran glances back.
59 A The dragon's eye is closing.
* 60 A The shaft of rose light fades to grey.
61 D BRAN: She let us go.
62 D ALARIC: She did.
63 D BRAN: Why?
64 D ALARIC (after a moment): I think she was lonely, Bran.

### SCENE s02306 | EXT. WINDMILL FARM, EVENING
Detected names (may be incomplete or contain aliases): EUGENE HAUSER, CORA, PATRICK, WIDOW IMOGENE SPARROW, ISAIAH MOBLEY, TELEGRAPH CLERK
* 1 A ¶ A single wooden windmill creaks above a dry stock tank.
* 2 A Beyond it, a wire fence and a field of stubble.
* 3 A Wind lifts the dust in slow brown ropes.
4 A ¶ On the porch of a low house five people sit in mismatched chairs.
5 A EUGENE HAUSER, seventy, bent, holds a tin cup between his knees.
6 A His daughter-in-law CORA, forty, sits with her sleeves rolled and a bowl of shelled peas in her lap.
7 A Her son PATRICK, fifteen, whittles a clothespin.
8 A A neighbour, WIDOW IMOGENE SPARROW, sixty-five, fans herself with a hat.
9 A And a hired man, ISAIAH MOBLEY, thirty, leans on the rail with his boots crossed.
10 A ¶ He watches the road.
11 A Nobody else does.
* 12 A The windmill creaks.
13 D CORA: Wind's up.
14 D EUGENE: Been up all day.
15 D IMOGENE: It'll turn.
16 D PATRICK: It always turns.
17 D ISAIAH: Not always.
18 A ¶ They fall quiet.
* 19 A A far-off hammering echoes from somewhere beyond the hill.
20 D TELEGRAPH CLERK [O.S.] (shouting from the road): Telegram! Telegram for Hauser!
21 A ¶ Cora lifts her head.
22 A Eugene sets down the cup.
23 A Imogene's fan stops.
24 A Patrick looks at the knife in his hand, then at his mother.
25 A Isaiah straightens from the rail, but says nothing, and crosses the yard to the gate.
26 A ¶ He takes the envelope.
27 A He turns it over once.
28 A He carries it back and hands it to Eugene, who holds it without opening it.
29 D EUGENE: Read it, Cora.
30 D CORA: It isn't mine.
31 D EUGENE: Read it anyway.
32 A ¶ She wipes her hands on her skirt, takes the envelope, tears it open.
33 A Her eyes travel down the page and then back up, slowly.
* 34 A The peas stay in her lap.
35 D CORA [CONT'D]: They want us to sign for the water rights.
36 D EUGENE: That all?
37 D CORA: That's all.
38 D IMOGENE: Thank God.
39 D PATRICK: Is that good?
40 D EUGENE: It's something.
41 A ¶ He takes up the cup again.
* 42 A The wind drops.
* 43 A The windmill turns once, slowly, as though remembering how.

### SCENE s02307 | INT. CAROUSEL PAVILION, SEASIDE AMUSEMENT PARK - NIGHT
Detected names (may be incomplete or contain aliases): SIM, ARCHAMBAULT, BEATRIX VON LOEWEN
* 1 A ¶ Dust sheets.
* 2 A Painted horses frozen mid-gallop, brass poles gleaming.
* 3 A A mirrored hub reflects a dozen flashlight beams.
4 A ¶ SIMEON "SIM" ARCHAMBAULT, forties, wiry, kneels at the base of a lacquered unicorn with a pry bar.
5 A BEATRIX VON LOEWEN, thirties, mask pushed up, scans the pavilion with a handheld scanner.
6 D SIM (to himself): Come on, come on, come on.
7 D BEATRIX: Everyone's gone. Camera loops for six minutes.
8 D SIM (to her): Then hold the light.
9 A ¶ She obeys.
10 A He levers the unicorn's belly open.
* 11 A A hollow glints with gold coins, ancient, stamped with a stag, stacked like poker chips.
12 A Sim lifts one and bites it, and Beatrix lets out a long breath.
13 D BEATRIX (to the room): Anyone want to say it?
14 D SIM (grinning): It's real.

### SCENE s02308 | INT. ABANDONED NURSERY SCHOOL, CLASSROOM - NIGHT
Detected names (may be incomplete or contain aliases): OFFICER DWIGHT MALLORY, OFFICER SANDRA PELL, TAYLOR REEVES, MISS MARIGOLD
* 1 A ¶ Tiny chairs.
* 2 A A rocking horse with no eyes.
* 3 A Peeling alphabet posters in the moonlight.
* 4 A A music box plays three notes and stops.
5 A ¶ OFFICER DWIGHT MALLORY, forties, flashlight in hand, nudges open the door with his boot.
6 A His partner OFFICER SANDRA PELL, thirties, follows, gun low.
7 A A teenage urban explorer, TAYLOR REEVES, seventeen, trails behind with a camera, whispering.
8 A And at the back wall, so still she could be a coat on a hook, stands a girl in a yellow dress, MISS MARIGOLD, her face turned to the corner.
9 D MALLORY: Police. Anyone in here?
10 D PELL: Quiet. Listen.
11 D TAYLOR: It's just the wind, right?
* 12 A ¶ The music box plays again.
13 A Pell sweeps her light.
14 A Mallory crouches by the rocking horse and puts a hand on its empty socket.
15 A Taylor lifts the camera, the red light blinks, and the flashlight beam crosses the yellow dress.
16 D PELL: Dwight.
17 D MALLORY: I see her.
18 D TAYLOR: Is that, is she a kid?
19 A ¶ The girl turns.
20 A Her face is smooth and pale as a plate.
21 A She lifts one hand to her mouth, and the music box plays its three notes again.
22 D MARIGOLD (sweetly): Nap time.

### SCENE s02309 | INT. DEEP-SPACE HAULER, CARGO BAY 3 - SHIP'S NIGHT
Detected names (may be incomplete or contain aliases): CAPTAIN LUCIAN ASANTE-BROOKS, FIRST MATE YUKI TANABE-REYES, CARGO MASTER BORIS ZIELINSKI, MEDIC ANJALI VERMA, STOWAWAY, PILOT
* 1 A ¶ Stacked containers.
* 2 A Amber work lights.
* 3 A A thin layer of frost on the deck plates.
* 4 A The air recyclers wheeze.
5 A ¶ CAPTAIN LUCIAN ASANTE-BROOKS, fifties, stands at a manifest console.
6 A FIRST MATE YUKI TANABE-REYES, thirties, runs a scanner along a container seam.
7 A CARGO MASTER BORIS ZIELINSKI, forties, big and tired, drags a crowbar.
8 A MEDIC ANJALI VERMA, thirties, hugs a trauma kit.
9 A A STOWAWAY, fifteen, sits cross-legged on a crate, arms wrapped round his knees.
10 A And the ship's AI, a disembodied voice named PILOT, hums through the wall speakers.
11 D LUCIAN: Boris, open it.
12 D BORIS: It's sealed from the inside.
13 D YUKI: That's impossible.
14 D ANJALI: Then who sealed it?
15 D PILOT [V.O.]: Captain, thermal sensors indicate a heat signature in Container Seventeen.
16 D LUCIAN: How warm?
17 D PILOT [V.O.]: Thirty-seven degrees Celsius.
18 A ¶ Yuki lowers her scanner.
19 A Boris sets his crowbar against the seam.
20 A Anjali edges away from the container, closer to the stowaway.
21 A The boy watches it with wide, unblinking eyes.
22 D STOWAWAY: Don't open it.
23 D LUCIAN: Who are you?
24 D STOWAWAY: Please, don't.
25 D BORIS: Captain, the lock's cooling.
26 D YUKI: It's venting. Pressure's equalising.
27 D PILOT [V.O.]: Warning. Structural integrity of Container Seventeen has been compromised.
* 28 A ¶ The seam splits.
29 A A hiss of white vapour floods the deck, Boris staggers back, Yuki fires a flare, Anjali drags the boy behind a crate, and Lucian draws his sidearm.
* 30 A The door swings open.
31 A ¶ Inside, curled on a bed of packing foam, a figure raises its head.
32 A It has the boy's face.

### SCENE s02310 | INT. CASINO COUNTING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): ELIAS VANDERKOOI, MARISOL FONTANA, DETECTIVE HARLAN BECKMANN
* 1 A ¶ Stacked cash.
* 2 A Camera domes.
* 3 A A hum of machines.
4 A ¶ ELIAS VANDERKOOI, fifty, in a grey suit, sits at a desk and sorts bills with a licked thumb.
5 A He does not look up when the vault door clicks.
6 A ¶ His partner MARISOL FONTANA, forty, closes it behind her and leans against it.
7 A She holds a duffel bag by one strap.
8 A She does not look at the money.
9 A She looks at him.
10 D ELIAS: Late.
11 D MARISOL: Traffic.
12 A ¶ He sets down the bills.
13 A She lets the duffel slide to the floor and kicks it across the carpet.
* 14 A It stops against his shoe.
15 D ELIAS: That's the whole amount?
16 D MARISOL: It's all of it.
17 A ¶ Elias sighs.
18 A He stands, slowly, and he unbuttons his jacket.
19 A ¶ A third figure steps out from behind the shelving.
20 A DETECTIVE HARLAN BECKMANN, sixty, in a trench coat, holds a badge in one hand and handcuffs in the other.
21 D BECKMANN: Evening.
22 A ¶ Marisol closes her eyes.
23 A Elias lifts his hands, calm, almost relieved, and says nothing at all.

### SCENE s02311 | INT. PHOTO BOOTH, WEDDING RECEPTION - NIGHT
Detected names (may be incomplete or contain aliases): INGRID SOLBERG, THEO MARCHETTI, PASCAL
* 1 A ¶ A curtained booth, red velvet, a strip of lightbulbs.
* 2 A Muffled dance music thumps through the walls.
3 A ¶ INGRID SOLBERG, thirty, in a bridesmaid's green dress, sits on the stool with her shoes in her lap.
4 A THEO MARCHETTI, thirty-two, a groomsman, slides in beside her, tie loosened.
5 A PASCAL, the photographer's assistant, nineteen, sticks his head through the curtain with a coin tray.
6 D PASCAL: Four frames. Strike a pose.
7 D INGRID: We're not together.
8 D THEO: We're not together.
9 D INGRID: Do not make this weird.
* 10 A ¶ The flash goes.
11 A Ingrid and Theo both flinch and nearly fall off the stool.
12 A Pascal ducks out.
13 D THEO: We haven't spoken in three years.
14 D INGRID: We spoke in March.
15 D THEO: You said "excuse me."
16 D INGRID: You were in the way of the cheese.
* 17 A ¶ The flash goes again.
18 A Neither smiles.
19 D THEO: You look good.
20 D INGRID: Don't.
21 D THEO: I'm just saying.
22 D INGRID: I know what you're saying. You're saying it with that face.
* 23 A ¶ Flash.
24 A She is looking at him.
25 A He is looking at her.
* 26 A Flash.
27 A She leans in and kisses him, hard, and the booth shakes.
* 28 A The curtain parts.
29 D PASCAL (whispering): Do you want me to keep the strip?

### SCENE s02312 | INT. HOUSEBOAT, DINING TABLE - NIGHT
Detected names (may be incomplete or contain aliases): ROSALEEN FITZPATRICK, THADDEUS FITZPATRICK, CILLIAN, YASMIN FITZPATRICK
* 1 A ¶ A narrow cabin lit by a hurricane lamp.
* 2 A A pot of stew steams.
* 3 A The hull knocks gently against a pier.
4 A ¶ ROSALEEN FITZPATRICK, sixty, her hair pinned up, ladles stew.
5 A Her husband THADDEUS FITZPATRICK, sixty-two, bearded, tears bread in silence.
6 A Their son CILLIAN, thirty-four, in a city jacket, stares at his bowl.
7 A And his wife YASMIN FITZPATRICK, thirty, folds her napkin into smaller and smaller squares.
8 D ROSALEEN: Eat.
9 D CILLIAN: I'm not hungry.
10 D ROSALEEN: You drove four hours.
11 D CILLIAN: I had a sandwich.
12 D THADDEUS: Where?
13 D CILLIAN: A service station.
14 D THADDEUS: They'll charge you three pounds for a sandwich.
15 D CILLIAN: It was four.
16 D THADDEUS: Robbery.
17 D ROSALEEN: Yasmin, more stew?
18 D YASMIN: I'm fine, thank you.
19 D ROSALEEN: You didn't finish.
20 D YASMIN: I'm full.
21 D ROSALEEN: You're thin.
22 D YASMIN: I'm what I always am.
* 23 A ¶ A pause.
24 A Thaddeus sets down the bread.
25 D THADDEUS: Your mother made this stew.
26 D CILLIAN: It's good.
27 D THADDEUS: It's the same as last year.
28 D CILLIAN: That's what makes it good.
29 D THADDEUS: Then why do you look like that?
30 D CILLIAN: Like what?
31 D THADDEUS: Like a man who's sold the boat.
* 32 A ¶ Silence.
33 A Rosaleen sets down the ladle.
* 34 A Yasmin's napkin is a tiny white square.
35 D CILLIAN: Dad.
36 D THADDEUS: Did you sell the boat?
37 D CILLIAN: I haven't sold anything.
38 D THADDEUS: You've had a man to look at her.
39 D CILLIAN: That was a surveyor. For the bank.
40 D THADDEUS: The bank.
41 D ROSALEEN: Thaddeus.
42 D THADDEUS: The bank, Rosaleen.
43 D CILLIAN: The mortgage is three months behind. I didn't know how to say it.
44 D THADDEUS: So you brought a surveyor.
45 D CILLIAN: I brought help.
46 D THADDEUS: I don't need help.
47 A ¶ He rises.
* 48 A The chair scrapes, the lamp swings, shadows slide across the walls.
49 A He goes up the stairs and out onto the deck, and the hull rocks under his boots.
50 A Nobody moves.

### SCENE s02313 | EXT. FRONT-LINE TRENCH, FLANDERS - DAWN (1916)
Detected names (may be incomplete or contain aliases): CORPORAL ALISTAIR BRODIE, PRIVATE EMMANUEL DUBOIS
* 1 A ¶ Mud to the knee.
* 2 A A duckboard path vanishes into fog.
* 3 A Somewhere, rifle fire pops like distant twigs.
4 A ¶ CORPORAL ALISTAIR BRODIE, thirty, sits on an ammunition crate with a chessboard balanced on a sandbag.
5 A Across from him PRIVATE EMMANUEL DUBOIS, twenty, a French-Canadian volunteer, rubs a pawn between finger and thumb.
6 D BRODIE: Your move.
7 D DUBOIS: I know.
8 A ¶ Neither moves.
* 9 A A shell whistles overhead and bursts a hundred yards away.
10 A They flinch together, hunch, and glance up, then back at the board.
* 11 A Dust sifts from the revetment onto the pieces.
12 A Brodie blows it off.
13 A Dubois nudges his bishop forward with a trembling hand.
14 D BRODIE: Good.
15 D DUBOIS: Is it?
16 A ¶ Brodie takes the bishop with a knight.
17 A Dubois stares at the empty square.
18 A Neither speaks.
19 A Then Dubois reaches into his tunic, draws out a creased photograph, and sets it on the board beside the captured piece.
20 D BRODIE: Who's that?
21 D DUBOIS: My sister.
22 A ¶ Brodie looks at it for a long moment.
23 A He lifts his own king, tips it on its side, and lays it next to the photograph.

### SCENE s02314 | INT. JURY ROOM, OLD GRAIN EXCHANGE - DAY
Detected names (may be incomplete or contain aliases): FOREWOMAN GERTRUDE OYELOWO, QUIET MAN, HOODIE, CORNELIUS BELLWETHER, WOMAN KNITTING, BUS DRIVER, ANSELM
* 1 A ¶ A long table of scarred oak.
* 2 A Tall windows with blinds half drawn.
* 3 A A pitcher of water sweats.
* 4 A Dust motes spin.
5 A ¶ Six jurors sit in a row.
6 A FOREWOMAN GERTRUDE OYELOWO, sixty, taps a pen.
7 A A YOUNG MAN IN A HOODIE slouches.
8 A MR. CORNELIUS BELLWETHER, seventy, in a bow tie, polishes his glasses.
9 A A WOMAN WITH KNITTING, plump, needles clicking.
10 A A BUS DRIVER in uniform, arms crossed.
11 A And a QUIET MAN at the end, thin, bald, who has said nothing.
12 D GERTRUDE: We'll go around. Verdict?
13 D BELLWETHER: Guilty.
14 D THE YOUNG MAN: Not guilty.
15 D KNITTING WOMAN: Guilty.
16 D BUS DRIVER: Guilty. Obviously.
17 D GERTRUDE: Juror six?
18 A ¶ The quiet man looks up.
19 A He sets a hand flat on the table.
20 D QUIET MAN: Not guilty.
21 D BELLWETHER: On what grounds?
22 D QUIET MAN: Reasonable doubt.
23 D BUS DRIVER: There's no doubt.
24 D QUIET MAN: There's some.
25 D KNITTING WOMAN (counting stitches): Where?
26 D QUIET MAN: The light switch.
27 D GERTRUDE: What about it?
28 D QUIET MAN: The defendant said he flipped it on. But the switch was installed upside down. Up means off.
* 29 A ¶ Silence.
30 A The needles stop clicking.
31 A Bellwether puts his glasses back on.
32 D BELLWETHER: Remarkable.
33 D THE YOUNG MAN: Told you.
34 D GERTRUDE: What's your name, Juror six?
35 D ANSELM: Anselm Rudd. Electrician.
36 D BUS DRIVER (muttering): Of course.
37 D ANSELM: I'll explain it again, if anyone wants.
38 D GERTRUDE: We have all day.

### SCENE s02315 | INT. ROOFTOP BAR, HOTEL TERRACE - NIGHT
Detected names (may be incomplete or contain aliases): STRANGER, VIVIENNE ASHFORD-LANE, BARTENDER, DOMINIC, QUENTIN
* 1 A ¶ Candles in glass chimneys.
* 2 A A city of lights twenty floors down.
* 3 A Jazz from a speaker.
* 4 A The bar is nearly empty.
* 5 A A velvet rope hangs from brass posts near the stairwell door.
6 A ¶ A STRANGER in a trench coat sits alone at the end of the bar, a half-finished martini before him.
7 A His hat is pulled low.
8 A On his sleeve is a small spot of dried blood.
9 A ¶ VIVIENNE ASHFORD-LANE, thirty-five, in an emerald gown and long gloves, enters through the stairwell door.
10 A She pauses.
11 A She crosses to the bar and takes the stool beside his.
12 A The BARTENDER, DOMINIC, fifty, polishes a glass with a white cloth.
13 D VIVIENNE: Whisky. Neat.
14 D DOMINIC: Right away, Miss Ashford-Lane.
15 A ¶ The stranger turns his head.
16 A He studies her.
17 A She does not meet his gaze.
18 D STRANGER: You come here often?
19 D VIVIENNE: Every Thursday.
20 D STRANGER: Then you'll know the barman's been paid to forget me.
21 A ¶ Dominic's polishing stops.
* 22 A The glass rings against the bar top.
23 D VIVIENNE (quietly): Who are you?
24 D STRANGER: Call me Quentin.
25 D QUENTIN (lifting his martini): I'm the man who knows what your husband did on Tuesday.
26 A ¶ She sets down her glove.
27 A Her pulse jumps in her throat.
28 A She reaches for her purse.
29 A Quentin's hand closes over her wrist, not roughly.
30 D QUENTIN [CONT'D]: Don't. Dominic has a gun under the register, and I have a better one.
31 D DOMINIC (softly): Miss Ashford-Lane, I'm sorry.
32 D VIVIENNE: You work for him?
33 D DOMINIC: For both of you. Different days.
34 A ¶ Quentin releases her wrist.
35 A He sets a folded envelope on the bar and slides it across.
36 D QUENTIN: Open it.
37 A ¶ She does.
* 38 A A single photograph.
* 39 A Her husband, unmoving, at the foot of a staircase.
40 A She exhales.
41 A For a long moment she says nothing.
42 D VIVIENNE: Thank you.
43 D QUENTIN: That's it?
44 D VIVIENNE: That's it.
45 A ¶ She finishes her whisky.
46 A She leaves a very large tip.

### SCENE s02316 | INT. PAWNSHOP, BACK ROOM - NIGHT
Detected names (may be incomplete or contain aliases): SILK, MERCADO, TWO-TON TOMMY, PEARL, BIG ARTHUR, SWEETS
* 1 A ¶ Shelves of guitars, cameras, wedding rings under glass.
* 2 A A single dusty lamp.
* 3 A Tension thick as the smell.
4 A ¶ SILAS "SILK" MERCADO, forties, in a silk shirt, leans on a safe.
5 A Four men face him in a loose arc: TWO-TON TOMMY, enormous; PEARL, thin and quick; BIG ARTHUR, grey-bearded; and young SWEETS, jittery, with a revolver tucked in his waistband.
6 D SILK: Gentlemen.
7 D TWO-TON TOMMY: Silk.
8 D PEARL: You're late.
9 D SILK: I'm exactly on time.
10 D SWEETS: He's lying.
11 D BIG ARTHUR: Quiet, boy.
12 A ¶ Silk reaches for the safe dial.
13 A Sweets' hand twitches toward his waistband.
14 A Pearl and Tommy move together to block him, and Arthur steps between, and for a moment all four stand shoulder to shoulder, nobody breathing.
* 15 A The lamp flickers.
16 D SILK: Easy. It's just the combination.
17 A ¶ He spins the dial.
* 18 A A click.
* 19 A The door swings open on rows of bundled cash.
20 A Nobody moves.
21 D PEARL: Count it.
22 D SILK: Already did.

### SCENE s02317 | INT. FAMILY MINIVAN, PARKED OUTSIDE GRANDMA'S HOUSE - DAY
Detected names (may be incomplete or contain aliases): DAD, ROBERT OYELARAN, MOM, WENDY OYELARAN, TEEN, MAYA, LITTLE BROTHER BENNY
* 1 A ¶ Rain taps the windshield.
* 2 A The seats are littered with crayons and fast-food bags.
* 3 A A tiny air freshener swings from the mirror.
4 A ¶ DAD, ROBERT OYELARAN, forty-five, grips the wheel and stares at the house.
5 A MOM, WENDY OYELARAN, forty-three, in the passenger seat, adjusts her hair in the visor mirror.
6 A In the back, TEEN, MAYA, fifteen, scrolls her phone, earbuds in, and LITTLE BROTHER BENNY, seven, hugs a stuffed rabbit.
7 D WENDY (to the car): Okay. Everyone. Smile, be polite, no complaining.
8 D BENNY: Do I have to hug her?
9 D ROBERT: Yes.
10 D BENNY: She smells like cabbage.
11 D WENDY: Benny.
12 D MAYA (pulling an earbud): Can we skip it this year?
13 D ROBERT: No, Maya.
14 D MAYA (muttering): Great.
15 D WENDY: Robert, you remember what we agreed.
16 D ROBERT: No politics.
17 D WENDY: No politics, no complaints about the casserole.
18 D ROBERT: She makes it on purpose.
19 D WENDY: Robert.
20 D ROBERT: Fine.
* 21 A ¶ The front door of the house opens.
22 A GRANDMA waves from the porch in a pink cardigan.
23 A Everyone in the van freezes, then waves back at once, teeth bared in unison.
24 D BENNY: She's got the casserole.
25 D ROBERT (under his breath): I know.
* 26 A ¶ The doors open.
27 A They file out into the rain, Maya last, dragging her feet.
28 A She pauses to pocket her earbuds.
29 D MAYA (whispering): Love you guys.
30 D WENDY: What?
31 D MAYA: Nothing. Let's go.

### SCENE s02318 | INT. FARMHOUSE BASEMENT - NIGHT
Detected names (may be incomplete or contain aliases): DEZ, CALLUM KOWALCZYK, RHONDA
* 1 A ¶ Dirt floor.
* 2 A A single bare bulb on a cord.
* 3 A Shelves of mason jars.
* 4 A A furnace thumps like a heartbeat.
5 A ¶ DESMOND "DEZ" KOWALCZYK, thirty, and his brother CALLUM KOWALCZYK, twenty-eight, crouch by a low iron door in the far wall.
6 A Dez holds a crowbar, Callum a flashlight.
7 A Their cousin RHONDA, thirty-five, stands on the steps, arms wrapped round herself.
8 D RHONDA: Dez, don't.
9 D DEZ: We have to know.
10 D CALLUM: Dez is right.
11 D RHONDA: Callum, you're not helping.
12 D CALLUM: Rhonda, I'm trying.
13 A ¶ He aims the light at the iron door.
* 14 A It is covered in scratches, long and deep.
15 A Dez sets the crowbar in the seam and heaves.
* 16 A Nothing.
17 D DEZ: It's rusted shut.
18 D CALLUM: Together.
19 A ¶ They push.
* 20 A The door groans.
21 A Rhonda gasps.
* 22 A Something inside gives a long low hiss, and the bulb flickers, then dies.
* 23 A The furnace stops thumping.
24 D RHONDA (in the dark): Dez? Callum?
25 D DEZ: I'm here.
26 D CALLUM: I'm here.
27 D RHONDA: Something's breathing.
28 D DEZ: That's us.
29 D RHONDA: No. It isn't.
* 30 A ¶ The bulb flares back.
31 A Dez and Callum are alone on the dirt floor.
* 32 A The door is wide open.
* 33 A The steps are empty.
34 A Rhonda's voice calls from the dark behind the iron, small and cheerful.
35 D RHONDA [O.S.]: Come on in, boys!

### SCENE s02319 | INT. INTERROGATION ROOM, PRECINCT 9 - NIGHT
Detected names (may be incomplete or contain aliases): JO, PRUITT, CARMINE LUCIANO
* 1 A ¶ A steel table, two chairs, a one-way mirror that has seen better decades.
* 2 A A single fluorescent tube buzzes.
* 3 A A tape recorder sits between them, its reels still.
4 A ¶ DETECTIVE JOSEPHINE "JO" PRUITT, forty-five, shirtsleeves rolled, leans back in her chair with a coffee.
5 A Across from her sits CARMINE LUCIANO, fifty, in a camel overcoat, his hands folded, a gold ring on every finger.
6 D JO: Mr. Luciano. Thanks for coming in.
7 D CARMINE: I came in because you asked nicely.
8 D JO: I always ask nicely.
9 D CARMINE: That's what worries me.
10 A ¶ She sets her coffee down.
11 A She switches on the tape recorder.
* 12 A The reels begin to turn.
13 D JO: For the record, state your whereabouts on Saturday night.
14 D CARMINE: Home. With my wife.
15 D JO: Your wife is in Palm Beach.
16 D CARMINE: Then I was home alone.
17 D JO: Doing what?
18 D CARMINE: Reading.
19 D JO: What were you reading?
20 D CARMINE: A cookbook.
21 A ¶ She smiles.
22 A He doesn't.
23 A She slides a photograph across the table.
24 A He glances at it, then back at her face.
25 D JO: Do you know this man?
26 D CARMINE (a pause): No.
27 D JO: His name was Anthony Bellavance. He was found in the river.
28 D CARMINE: A tragedy.
29 D JO: He was your accountant.
30 D CARMINE: I have many accountants.
31 D JO: This one kept two sets of books.
32 A ¶ Carmine's jaw tightens.
33 A He unfolds his hands, places them flat on the table, and examines the rings.
34 D CARMINE: Detective, are you charging me?
35 D JO: Not yet.
36 D CARMINE: Then I'd like my lawyer.
37 D JO: He's on his way.
38 D CARMINE: Good.
39 D JO: Good.
40 D CARMINE: You're making a mistake.
41 D JO: You're making one too.
* 42 A ¶ A long silence.
* 43 A The fluorescent tube buzzes.
44 A Carmine takes a cigar from his coat.
45 A She watches him.
46 A He sniffs it, lets it hang in his fingers.
47 D CARMINE: May I?
48 D JO: No smoking.
49 D CARMINE: Even for old friends?
50 D JO: We're not friends.
51 D CARMINE: You wound me.
52 D JO: I'd rather arrest you.
53 A ¶ He laughs, genuinely, and puts the cigar away.
54 D CARMINE: You remind me of someone.
55 D JO: Who?
56 D CARMINE: Your father.
57 A ¶ Her coffee cup stops halfway to her mouth.
58 A She sets it down slowly, deliberately, without a sound.
59 D JO: Say that again.
60 D CARMINE: I knew Mickey Pruitt. A good cop. A hard man. We had an understanding.
61 D JO: He never took a dime.
62 D CARMINE: No. He took something better.
63 D JO: What?
64 D CARMINE: My word.
65 A ¶ Jo rises.
* 66 A The chair legs scrape.
67 A She walks to the mirror and stands with her back to him, her palms against the glass.
68 A In the reflection her face is steady and her hands are not.
69 D JO (not turning): What did he ask for?
70 D CARMINE: He asked me to leave his daughter out of it.
71 D JO: Out of what?
72 D CARMINE: Out of everything.
73 A ¶ She turns.
74 A For the first time, Carmine looks tired.
75 A He folds his hands again and waits.
* 76 A The tape recorder turns.
77 D JO: I need a minute.
78 D CARMINE: Take two.
79 A ¶ She crosses to the door.
80 A She opens it, pauses, and glances back.
81 D JO: Don't go anywhere.
82 D CARMINE: Where would I go?
83 A ¶ She leaves.
* 84 A The door closes.
85 A He leans back and studies the mirror, and then, very slightly, he nods at it, as though at an old friend on the other side.

### SCENE s02320 | INT. ROLLER RINK - TEMPORARY COURTROOM - DAY
Detected names (may be incomplete or contain aliases): NADIA BRZEZINSKI, YOUNG MAN, TOBIAS, JUDGE FAUSTINA OYELOWO-MARSH
* 1 A ¶ The county courthouse flooded in March.
* 2 A Now a folding table stands on the maple skating floor, and a disco ball hangs dead above it.
* 3 A Rental skates hang on a wall rack behind the bench.
4 A ¶ NADIA BRZEZINSKI, 40s, public defender, sorts papers into two stacks.
5 A Her suit is good but the shoes are sneakers.
6 A She looks at the door twice.
7 A ¶ A YOUNG MAN in a borrowed suit sits across from her.
8 A The sleeves cover his knuckles.
9 A He is picking at the cuff.
10 D YOUNG MAN: They said it'd be at the courthouse.
11 D NADIA: It's under four feet of water.
12 D YOUNG MAN: Right.
13 A ¶ He nods.
14 A He keeps nodding a moment too long.
15 D NADIA: You didn't wear the tie I told you to.
16 D YOUNG MAN: It's in the car.
17 D NADIA: Is the car here?
18 A ¶ He looks at the exit sign.
19 A She watches him look.
20 D NADIA [CONT'D]: What's your name? Say it for me. The way you'll say it to her.
21 D YOUNG MAN: Tobias Wren.
22 D NADIA: Again. Slower.
23 D TOBIAS: Tobias Wren.
24 A ¶ She slides a pen across the table.
25 A He doesn't take it.
26 A She leaves it there.
27 D NADIA: The state's offer expires at ten. It's nine fifty.
28 D TOBIAS: My mom said I shouldn't sign anything.
29 D NADIA: Your mom isn't here.
30 D TOBIAS: She's in the lot.
31 A ¶ Nadia stops sorting.
32 A She puts both hands flat on the table.
33 D NADIA: Go get her.
34 A ¶ Tobias stands.
35 A Sits back down.
36 A Stands again.
37 A Walks halfway to the door and turns around.
38 D TOBIAS: I'll sign it.
39 D NADIA: Don't do it because I said "go get her."
40 A ¶ He picks up the pen.
41 A His hand is steady now, steadier than hers.
* 42 A ¶ The side door bangs open.
43 A JUDGE FAUSTINA OYELOWO-MARSH, 60s, robe over a cardigan, enters on rental skates and rolls to a stop at the bench.
* 44 A Nobody laughs.
45 D JUDGE OYELOWO-MARSH: Counsel. Mr. Wren. We are on the record.
46 A ¶ Tobias holds the pen above the page.
47 A Nadia takes it out of his fingers, gently, and caps it.
48 D NADIA: Your Honor, we need ten more minutes.
49 D JUDGE OYELOWO-MARSH: You have two.
50 A ¶ Nadia nods.
51 A Tobias, very quietly, starts to untie his shoes.

### SCENE s02321 | EXT. CANAL LOCK - ABANDONED BARGE - DUSK
Detected names (may be incomplete or contain aliases): SERGEANT KOWALCZYK, PRIVATE TEMBO, CORPORAL ISHIDA, CIVILIAN WOMAN, MIREILLE
* 1 A ¶ Mud.
* 2 A Reeds.
* 3 A A gutted barge half sunk in the lock chamber.
* 4 A Rain thinning to nothing.
5 A ¶ SERGEANT KOWALCZYK, 30s, ash-faced, crouches on the deck.
6 A Rifle across his knees.
7 A He counts rounds by touch.
8 A ¶ PRIVATE TEMBO, 19, scrawny, huddles behind a coil of rope.
9 A Helmet too big.
10 A Shaking.
11 A ¶ CORPORAL ISHIDA, 20s, steady, sweeps the far bank through a cracked scope.
* 12 A ¶ Silence.
* 13 A Distant guns, getting farther.
14 D TEMBO: Is that it? Are they gone?
15 D KOWALCZYK: Shut up and breathe.
16 D ISHIDA: Nothing moving. Tree line's clear.
17 A ¶ Kowalczyk looks at the hatch.
* 18 A A knock from below.
* 19 A Three slow raps.
20 A ¶ All three men freeze.
21 A Rifles up.
22 D KOWALCZYK: Hands. Now.
* 23 A ¶ The hatch lifts a few inches.
* 24 A A woman's hand.
25 A Then a face.
26 A A CIVILIAN WOMAN, 30s, soaked, coat buttoned wrong, clutches a canvas bag to her chest.
27 D CIVILIAN WOMAN: Don't shoot. Please.
28 D ISHIDA: Who are you?
29 D CIVILIAN WOMAN: I live here. I live on the barge.
30 D TEMBO: Nobody lives here.
31 D CIVILIAN WOMAN: I do.
32 A ¶ Kowalczyk lowers the rifle an inch.
33 A Doesn't lower it more.
34 D KOWALCZYK: Name.
35 D CIVILIAN WOMAN: Mireille.
36 D KOWALCZYK: Anyone else down there, Mireille?
37 D MIREILLE: A cat.
38 A ¶ Tembo laughs.
39 A Short.
40 A Cracked.
41 A Then it turns into something else and he presses his sleeve to his mouth.
42 A ¶ Ishida hands him a canteen.
43 A Doesn't say anything.
44 D KOWALCZYK: You hungry?
45 D MIREILLE: Yes.
46 A ¶ Kowalczyk digs in his pack.
47 A Tosses a tin.
48 A She catches it with one hand, bag still clamped under the other arm.
49 D MIREILLE [CONT'D]: They'll come back at dawn.
50 D ISHIDA: We know.
51 D MIREILLE: There's a way out. Under the sluice gate.
52 A ¶ Kowalczyk studies her.
* 53 A Rain starts again, light.
54 D KOWALCZYK: Show us.

### SCENE s02322 | INT. COURTHOUSE FREIGHT ELEVATOR - STUCK BETWEEN FLOORS - NIGHT
Detected names (may be incomplete or contain aliases): ROSALIND PETTIGREW, DEMETRIUS OKONKWO-HALE
* 1 A ¶ A steel box with a scarred wooden floor.
* 2 A A work light flickers.
* 3 A A stenciled sign: MAX LOAD 4000 LBS.
4 A ¶ ROSALIND PETTIGREW, 50s, prosecutor, grips a banker's box.
5 A DEMETRIUS OKONKWO-HALE, 40s, defense counsel, leans on the back wall with a coffee cup.
* 6 A ¶ The elevator hangs still.
* 7 A A cable creaks overhead.
8 D ROSALIND: Twelve minutes.
9 D DEMETRIUS: It's been eleven.
10 D ROSALIND: Then you can count. Good. Count how long my offer stands.
11 D DEMETRIUS: Your offer is manslaughter and eight years.
12 D ROSALIND: It's a gift.
13 D DEMETRIUS: It's a coin flip with the coin removed.
14 A ¶ She presses the alarm button.
* 15 A Nothing.
16 A She presses it again.
17 D ROSALIND: Your client lied to the detective.
18 D DEMETRIUS: Your detective led him.
19 D ROSALIND: Your client said he was at the depot.
20 D DEMETRIUS: He was at the depot.
21 D ROSALIND: Until nine.
22 D DEMETRIUS: Until nine fifteen.
23 D ROSALIND: The body was found at nine twenty.
24 D DEMETRIUS: The depot is eleven minutes from the creek.
25 D ROSALIND: Then he ran.
26 D DEMETRIUS: In dress shoes. Carrying a toolbox.
27 A ¶ Rosalind sets the banker's box down.
28 A Opens it.
29 A Pulls a photograph.
30 A Holds it out without looking at him.
31 D ROSALIND: Look at it.
32 D DEMETRIUS: I've seen it.
33 D ROSALIND: Look at it again.
34 A ¶ He takes the photograph.
35 A He studies it.
36 A His jaw works.
37 D DEMETRIUS: The shoe prints don't match.
38 D ROSALIND: The prints are smudged.
39 D DEMETRIUS: They're smudged because your tech walked through them.
40 D ROSALIND: That is a very convenient theory.
41 D DEMETRIUS: It's a photograph.
* 42 A ¶ The elevator lurches.
43 A Both of them grab the rail.
* 44 A The coffee spills across the floor.
45 A Both stare at the puddle as it spreads toward the box.
46 A ¶ Rosalind snatches the box up.
47 A Demetrius shoves his foot against the puddle, blocking it.
48 D DEMETRIUS [CONT'D]: That box is evidence.
49 D ROSALIND: That box is mine.
50 D DEMETRIUS: Then keep it dry.
51 A ¶ They both stop moving.
* 52 A The cable stops creaking.
* 53 A Silence.
54 D ROSALIND: Was that the brake?
55 D DEMETRIUS: I don't know.
56 D ROSALIND: Don't say "I don't know" to me.
57 D DEMETRIUS: I'm not your witness.
58 D ROSALIND: You're the one who wanted to take the freight elevator.
59 D DEMETRIUS: You pushed the button.
60 D ROSALIND: I was pointing at it.
61 D DEMETRIUS: You pushed it.
62 A ¶ Rosalind sits down on the box.
63 A Straightens her skirt.
64 A Looks up at the ceiling vent, then at him.
65 D ROSALIND: Six years.
66 D DEMETRIUS: Four.
67 D ROSALIND: Five, and he pleads to the lesser count.
68 D DEMETRIUS: No.
69 D ROSALIND: No?
70 D DEMETRIUS: He didn't do it.
71 D ROSALIND: Mr. Okonkwo-Hale, I have a thirty-year record that says everyone says that.
72 D DEMETRIUS: And your record never once says someone was right?
73 A ¶ Rosalind stands.
74 A They are close in the small space.
75 A Neither backs away.
76 D ROSALIND: You think I want to be right?
77 D DEMETRIUS: I think you want to be done.
78 D ROSALIND: That's the same thing.
79 D DEMETRIUS: It isn't.
* 80 A ¶ The light flickers off.
* 81 A Total dark.
* 82 A A beat.
* 83 A Two beats.
* 84 A It flickers on.
85 A ¶ They are exactly where they were.
86 A Neither has moved.
87 D ROSALIND: Four years. Plea to the lesser. I'll sign it in this box.
88 D DEMETRIUS: I'll need to hear it from you after we're out.
89 D ROSALIND: You'll hear it.
90 D DEMETRIUS: I'll need it in writing.
91 D ROSALIND: Do you have a pen?
92 A ¶ He pats his pockets.
93 A She pats hers.
94 A They both check their jackets, then each other's eyes.
95 D DEMETRIUS: No.
96 D ROSALIND: Of course not.
* 97 A ¶ The elevator groans.
* 98 A Begins, slowly, to rise.
99 A They both look up.
100 A Neither speaks.
* 101 A The floor numbers light, one by one, over the door.

### SCENE s02323 | INT. LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): ILSE
* 1 A ¶ Closed.
* 2 A Fluorescent hum.
* 3 A Dryers dark.
* 4 A One machine on the end, still ticking as it cools.
* 5 A ¶ An answering machine on the counter.
* 6 A Red light blinking.
* 7 A ¶ Keys in the lock.
* 8 A The door swings.
9 A ¶ ILSE, 60, enters in a rain slicker.
10 A Hair flat.
11 A Laundry basket on her hip.
12 A Empty.
13 A ¶ She sets it down.
14 A Presses play.
15 D ILSE [V.O.] (recorded, cheerful): You've reached Sunshine Wash and Fold. We can't come to the phone.
16 A ¶ Ilse stares at the machine.
17 D ILSE [V.O., CONT'D] (recorded): Leave a message. Or just bring your socks!
* 18 A ¶ A man's laugh, behind the recording.
* 19 A Cut off.
20 A ¶ She presses stop.
21 A Presses play.
* 22 A The laugh again.
23 A ¶ Stop.
24 A Play.
25 A Stop.
26 A ¶ She lifts the machine.
27 A Holds it overhead.
28 A Her arms shake.
29 A ¶ She sets it down.
30 A Softly.
31 A Presses play.
32 D ILSE [V.O., CONT'D] (recorded): Or just bring your socks!
33 A ¶ Ilse sits on the folding table.
34 A Folds her hands.
35 A Listens to it all the way through, twice.

### SCENE s02324 | INT. FISH-DRYING SHED - ICELANDIC COAST - DAWN
Detected names (may be incomplete or contain aliases): SKAR, ELINBORG, KARI, BJARNI, ÓSKAR, SIGRÚN
* 1 A ¶ A long timber shed.
* 2 A Slatted walls leak gray sea light.
* 3 A Thousands of cod hang from the rafters in rows, stiff as boards.
* 4 A The air smells of salt and iron.
* 5 A A woodstove ticks in the corner.
6 A ¶ GRANDPA ÓSKAR, 80s, wears a wool cap pulled low and a face like a cliff.
7 A He sits on an overturned crate, mending a net with fingers that don't need to look.
8 A ¶ ELINBORG, 40s, his daughter, stands rigid by the door in a city coat.
9 A Wrong boots.
10 A She holds a folder against her chest.
11 A ¶ KARI, 16, her son, lounges against the wall in headphones, hood up.
12 A Earbuds leaking tinny bass.
13 A ¶ SIGRÚN, 12, Kari's sister, sits cross-legged on the floor, counting fish with her lips.
14 A ¶ BJARNI, 50s, Óskar's other son, comes in last.
15 A Shoulders wide.
16 A A thermos in one fist.
17 A Mud to the knee.
18 D ELINBORG: You told me it was shut down.
19 D ÓSKAR: It was shut down. Now it's open.
20 D BJARNI: Dad wanted to dry one more season.
21 D ELINBORG: Dad is eighty-four.
22 D ÓSKAR: Dad can hear you.
23 D KARI (not looking up): Can we go?
24 D ELINBORG: Kari, take those out.
25 D KARI: Why?
26 D ELINBORG: Because your grandfather is talking.
27 A ¶ Kari removes one earbud.
28 A Slowly.
29 A Like a concession.
30 D ÓSKAR: Your mother wants to sell this place.
31 D ELINBORG: I want to talk about it.
32 D BJARNI: That's what selling is.
33 D SIGRÚN: Seven hundred and twelve.
34 D BJARNI: What is?
35 D SIGRÚN: The fish.
36 A ¶ Nobody answers her.
37 D ELINBORG: The offer is real. A developer from Reykjavík. They want the shoreline.
38 D ÓSKAR: They want a hotel.
39 D ELINBORG: They want a lot of things.
40 D BJARNI: Dad built the racks.
41 D ÓSKAR: I built the racks. My father built the shed.
42 D ELINBORG: And what did his father build?
43 D ÓSKAR: Nothing. He died on a boat.
44 D ELINBORG: Pabbi.
45 D ÓSKAR: Don't Pabbi me.
* 46 A ¶ Silence.
* 47 A The stove ticks.
* 48 A A cod sways on its string, knocking another.
49 D ELINBORG: Dad, please.
50 D BJARNI: Dad, enough.
51 D KARI (quietly): Can I say something?
52 D ÓSKAR: You can say something.
53 D KARI: I don't care about the hotel. I don't care about any of it. But I think... I think the smell here is the best thing I've ever smelled.
54 D ELINBORG: Kari.
55 D KARI: I'm serious. It smells like him. Like Afi. Like everything he's ever worn.
56 D ÓSKAR: That is a fair description.
57 D SIGRÚN: Seven hundred and twelve.
58 D BJARNI: Okay, we heard you.
59 D SIGRÚN: Seven hundred and twelve is the number Mom said the developer wants.
60 D ELINBORG: Sigrún.
61 D SIGRÚN: Seven hundred and twelve thousand. That's what they offered. I read it.
62 D ELINBORG: You read my folder.
63 D SIGRÚN: It was open.
64 D ÓSKAR (a thin smile): She counts well, this one.
65 D ELINBORG (softer): Pabbi. I'm not trying to take it from you.
66 D ÓSKAR: You are a little bit.
67 D ELINBORG: A little bit.
68 D ÓSKAR: It's all right. Everyone takes a little.
69 A ¶ He sets the net down.
70 A Stands.
71 A Walks to the nearest rack.
72 A Reaches up and lifts a fish from its string.
73 A Holds it out to Kari.
74 D ÓSKAR [CONT'D]: Smell it.
75 A ¶ Kari does.
76 A Closes his eyes.
77 D KARI: Yeah.
78 D ÓSKAR: Now tell me what it's worth.
79 D KARI: I don't know.
80 D ÓSKAR: Neither do I. That's the problem.
81 A ¶ Elinborg laughs.
82 A Wipes her eyes with the back of her glove.
83 A Bjarni pours coffee into the thermos lid and hands it to his sister without a word.
84 A ¶ She takes it.
85 A ¶ Sigrún goes back to counting.

### SCENE s02325 | INT. MATTRESS SHOWROOM - 3 A.M.
Detected names (may be incomplete or contain aliases): WOMAN, DWAYNE, PRIYA, LOCKHART
* 1 A ¶ Fluorescent lights.
* 2 A Forty beds, no customers.
* 3 A Soft jazz.
4 A ¶ A WOMAN in a nightgown and parka lies on a king-size display model, hands folded on her chest.
5 A She stares at the ceiling.
6 A ¶ DWAYNE, 30s, the night salesman, stands at the foot of the bed with a clipboard.
7 D DWAYNE: Ma'am, we're a mattress store.
8 D WOMAN: I know what you are.
9 D DWAYNE: You can't sleep here.
10 D WOMAN: I'm testing.
11 D DWAYNE: For six hours?
12 D WOMAN: It's a firm medium. It takes time.
13 A ¶ He writes something.
14 A Crosses it out.
15 D DWAYNE: What's your name?
16 D WOMAN: Priya.
17 D DWAYNE: Priya, my manager is going to be here at four.
18 D PRIYA: Then I have an hour.
19 A ¶ She rolls over.
20 A Pulls a pillow to her face.
* 21 A ¶ The front door chimes.
22 A MS. LOCKHART, 50s, regional manager in a camel coat, enters with a travel mug.
23 A She sees the bed.
24 A Sees Priya.
25 A Sees Dwayne.
26 D MS. LOCKHART: Dwayne.
27 D DWAYNE: It's not what it looks like.
28 D MS. LOCKHART: It looks like a customer is asleep.
29 D DWAYNE: Then it's exactly what it looks like.
30 A ¶ Lockhart sips her coffee.
31 A Sits on the next bed over.
32 A Kicks off her heels.
33 D MS. LOCKHART: Scoot.

### SCENE s02326 | INT. TELEGRAPH OFFICE - LOCUST SEASON - DAY
Detected names (may be incomplete or contain aliases): MARSHAL TOBIAS GREER, ODALYS, COAL BRANNIGAN, SILAS PRUETT, DESMOND YEBOAH
* 1 A ¶ Shuttered windows.
* 2 A A hum like a saw mill outside.
* 3 A Dust sifts through cracks.
* 4 A A single lamp.
5 A ¶ MARSHAL TOBIAS GREER, 40s, sweat-stained duster, wedges a rolled blanket under the door.
6 A ¶ ODALYS, 30s, telegraph operator, taps a key.
* 7 A Nothing comes back.
8 A ¶ Three drovers sit on crates.
9 A COAL BRANNIGAN, big, bearded.
10 A SILAS PRUETT, old, hat in his lap.
11 A DESMOND YEBOAH, 20s, jittery, boots too clean.
* 12 A ¶ Something skitters across the roof.
13 D GREER (to the room): Nobody opens that door.
14 D COAL: Wasn't planning to.
15 D GREER: Keep the lamp low.
16 D ODALYS (to Greer): Line's dead. Cut somewhere east.
17 D GREER: Try Kearney.
18 D ODALYS: I did.
19 D GREER: Try again.
20 A ¶ She does.
* 21 A The key clicks, hollow.
22 D SILAS (muttering): Forty years. Never seen it this thick.
23 D DESMOND: What'd he say?
24 D COAL: He's talking to himself.
25 D DESMOND: Is that a thing he does?
26 D COAL: Since his wife passed.
27 A ¶ Greer turns on them.
28 D GREER: Quiet. All of you.
* 29 A ¶ A thud on the door.
* 30 A Then another.
* 31 A Something heavier.
* 32 A Not an insect.
* 33 A ¶ Everyone freezes.
34 A Odalys lifts her hand from the key.
35 D GREER [CONT'D] (low, to himself): Not now.
36 A ¶ He draws his revolver.
37 A Checks the cylinder.
38 D COAL: Marshal.
39 D GREER: Stay put.
40 D COAL: You think it's him?
41 D GREER (to Coal): I think it's someone who ought to be inside.
42 A ¶ Desmond stands.
43 A Sits.
44 A Stands.
45 D DESMOND (to the room): Do we open it or not?
46 D SILAS (muttering): They'll eat the leather first.
* 47 A ¶ The thud again.
* 48 A A voice, muffled, human, through the wood.
49 A ¶ Odalys lunges for the lamp.
50 A Greer grabs the blanket from the door.
51 D GREER (to Coal, Silas, Desmond): Back wall. Now.
52 A ¶ They move.
53 A Guns come out.
* 54 A The doorknob begins to turn.

### SCENE s02327 | EXT. BAIL BONDS DRIVE-THRU - NIGHT
Detected names (may be incomplete or contain aliases): MARISOL, HUGO, DOUG
* 1 A ¶ A cinderblock shack with a pneumatic tube and a speaker post.
* 2 A Neon: BAIL 24/7.
* 3 A Rain.
4 A ¶ MARISOL, 30s, in a cardigan, sits inside behind bulletproof glass, eating cereal from a mug.
* 5 A ¶ A battered hatchback pulls up.
6 A HUGO, 50s, rolls down the window and leans toward the post.
7 D HUGO: Hi. I'd like to bail out my brother.
8 D MARISOL (through the speaker): Name?
9 D HUGO: Rodolfo.
10 D MARISOL: Charge?
11 D HUGO: Is "sleepwalking" a charge?
12 A ¶ She stops chewing.
13 D MARISOL: Sir.
14 D HUGO: He took a municipal bus. In pajamas. Drove it to Tulsa.
15 D DOUG [O.S.] (over the speaker, scratchy): Marisol, is that the sleepwalker?
16 D MARISOL: Doug, you're on the intercom again.
17 D DOUG [O.S.]: Tell him it's two thousand.
18 D HUGO: Two thousand?
19 D MARISOL: He said that on purpose.
20 D DOUG [O.S.]: I did.
21 A ¶ Hugo pulls out a fistful of crumpled bills.
22 A Counts.
23 A Frowns.
24 A Looks up.
25 D HUGO: I have eleven hundred.
26 D MARISOL: Leave your watch.
27 D HUGO: It's my father's watch.
28 D DOUG [O.S.]: Then leave your car.
29 D HUGO: Then how do I take him home?
* 30 A ¶ A long beat.
31 A Marisol sets the mug down.
32 A Presses the tube button.
* 33 A A canister whooshes toward Hugo's window.
34 D MARISOL: Sign the form.

### SCENE s02328 | INT. BELL FOUNDRY - CASTING FLOOR - NIGHT
Detected names (may be incomplete or contain aliases): SABINE MOREAU-KIM, ORLANDO PEEL, THEODORA VASS, LIAM
* 1 A ¶ Cold furnaces.
* 2 A Sand molds in rows like sleeping beasts.
* 3 A A crack in the skylight lets in one blade of moon.
4 A ¶ DET. SABINE MOREAU-KIM, 40s, camel coat, kneels at an empty cradle where a bronze bell should hang.
5 A She runs a thumb along the chain mark.
6 A ¶ ORLANDO PEEL, 60s, the foreman, stands with his arms crossed over a leather apron.
7 A THEODORA VASS, 30s, in a clean white shirt, watches him from the doorway.
8 A LIAM, 17, the apprentice, sits on an upturned bucket and doesn't look at anyone.
9 D MOREAU-KIM: Four tons. Gone.
10 D PEEL: I told you. I locked up at ten.
11 D VASS: He always says ten.
12 D LIAM: It was ten.
13 D PEEL: It was ten.
14 D MOREAU-KIM: Who has keys?
15 D PEEL: Me.
16 D VASS: Me.
17 D LIAM: Me.
18 A ¶ They answer nearly at once.
19 A The detective stands.
20 A Brushes sand from her knee.
21 D PEEL (to Liam): You gave yours back.
22 D LIAM: No.
23 D VASS (over him): You gave it to me.
24 D MOREAU-KIM: Which is it?
* 25 A ¶ Silence.
26 A The kid studies his boots.
27 A Peel's jaw tightens.
28 A Vass crosses to the cradle, touches the chain, and for a second her hand shakes.
29 D MOREAU-KIM [CONT'D]: Thank you, Ms. Vass. That's all I needed.
