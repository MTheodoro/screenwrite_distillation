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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusKT/group_0047.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01531_0 | INT. SKATE PARK CONCESSION SHACK - DUSK
Detected names (may be incomplete or contain aliases): ZEKE ADEBAYO, MILO FERRANTI-SATO, JUNE
* 1 A ¶ Hot dog roller.
* 2 A Neon "OPEN" buzzing.
* 3 A Outside, wheels rattle on concrete.
4 A ¶ ZEKE ADEBAYO, 16, hoodie, sits on an upturned milk crate.
5 A His friend MILO FERRANTI-SATO, 16, leans on the counter.
* 6 A A radio on the shelf murmurs.
7 D MILO: So she said yes.
8 D ZEKE: She said maybe.
9 D MILO: Maybe is yes with a coat on.
10 D ZEKE: Maybe is "I'll text you" and then never.
11 D MILO: She wrote it on your hand.
12 D ZEKE: In pencil. It's smudged.
13 D MILO: Dude. It's still in the shape of a number.
14 D ZEKE: It's in the shape of a seven.
15 D MILO: Then she's lucky. Seven's lucky.
16 D ZEKE: Is that supposed to help?
17 D MILO: No. I just wanted to say it.
18 D JUNE [O.S.] (outside, shrill): Somebody get a towel! Now!
19 A ¶ Both boys look up.
20 A Zeke slides off the crate.
21 D ZEKE: That's her.
22 D MILO: That's a fight.
* 23 A ¶ Outside, shouting.
* 24 A A board clatters.
25 A Zeke and Milo bolt for the door and collide in the frame, jam, untangle, and spill out onto the concrete.

### SCENE s01531_1 | EXT. SKATE PARK - CONTINUOUS
Detected names (may be incomplete or contain aliases): JUNE, ZEKE
* 1 A ¶ A knot of kids around the bowl.
2 A At the centre, JUNE, 16, nose bleeding, faces a bigger boy.
* 3 A The crowd scatters as sirens approach, boards under arms.
4 A ¶ Zeke stops.
5 A Milo almost runs into him.
6 D ZEKE: There she is.
7 D JUNE (spotting him, wiping her nose): Zeke! You came!
8 D ZEKE: I came.
9 A ¶ She grins through the blood and holds up her hand.
* 10 A A phone number, smudged across the palm.
* 11 A Fresh ink.
12 D JUNE: Got it written again. Permanent marker.
13 A ¶ Zeke laughs, huge and helpless, as the blue lights wash over them all.

### SCENE s01532 | INT. COUNTY FAIR - PIE TENT - DAY
Detected names (may be incomplete or contain aliases): PENNY, MAUDE ASHWORTH-BELL, CROMWELL, WILLIE, TANAKA
* 1 A ¶ A canvas tent in the August glare.
* 2 A Long tables of judged pies, blue ribbons pinned like medals.
* 3 A Flies drone.
* 4 A A fan turns slowly overhead.
5 A ¶ PENELOPE "PENNY" ASHWORTH-BELL, 16, in a gingham apron two sizes too large, stands guard over a single lattice-topped peach pie.
6 A Her fingers are stained with flour and nerves.
7 A ¶ Her grandmother, MAUDE ASHWORTH-BELL, 70s, enormous sunhat, sits on a folding chair behind her and says nothing, in the way only grandmothers can.
8 A ¶ Down the row, JUDGE THEODORE "TEDDY" CROMWELL, 60s, seersucker suit, moves from pie to pie with a silver fork and a stern expression.
9 A ¶ A late arrival bursts in, breathless.
10 A WILLIAM "WILLIE" TANAKA, 17, in a rumpled work shirt, grease on his cheek, carrying a pie plate wrapped in a dish towel.
11 D WILLIE: Penny! Penny, I made it.
12 D PENNY: Willie. The deadline was ten.
13 D WILLIE: It's ten-oh-four.
14 D PENNY: That's closed.
15 D WILLIE: They can't close on a four-minute margin.
16 D PENNY: They can. They have.
17 A ¶ Maude lifts her chin a fraction beneath the hat.
18 D MAUDE: Four minutes is four minutes, young man.
19 D WILLIE: Mrs. Ashworth-Bell. I didn't see you there.
20 D MAUDE: Few people do. It's a gift.
21 D WILLIE (to Penny): I stayed up all night. I burned the first one. And the second.
22 D PENNY: I can smell it.
23 D WILLIE: It's the sacrifice.
24 A ¶ She cannot help it.
25 A She laughs.
26 A Quickly claps a hand over her mouth.
27 A ¶ Judge Cromwell reaches the end of the row and looks up, eyebrow arched.
28 D CROMWELL: Is there a disturbance?
29 D PENNY: No, sir.
30 D WILLIE: Yes, sir. I'm late.
31 D CROMWELL: Hm.
32 A ¶ He studies the dish towel in Willie's hands.
* 33 A The corner has stained with something dark and sticky.
34 D CROMWELL [CONT'D]: What have you there, son?
35 D WILLIE: A blackberry, sir. Mostly.
36 D CROMWELL: Mostly.
37 D WILLIE: There was an incident with the oven.
38 D MAUDE (dryly): I'll bet.
39 A ¶ Cromwell holds out his hand.
40 A Willie hesitates, then unwraps the towel.
* 41 A The pie inside is lopsided, the crust charred at one edge, the filling bubbling over like lava.
42 A ¶ Penny stares at it.
43 A Then at Willie.
44 A Then at the judge.
45 D PENNY: Sir, he's late. By the rules, he can't--
46 D CROMWELL: Miss Ashworth-Bell. I have judged this tent for thirty-one years. I have never once seen a pie arrive so wretchedly.
47 D WILLIE: Thank you, sir?
48 D CROMWELL: It was not a compliment.
49 A ¶ He cuts a sliver with the silver fork.
50 A Lifts it.
51 A Tastes.
52 A ¶ Everyone holds still.
* 53 A The fan turns.
* 54 A A fly lands on the nearest table and thinks better of it.
55 D CROMWELL [CONT'D] (slowly): Burnt sugar. Lemon zest. A touch of black pepper.
56 D WILLIE: My mother's trick.
57 D CROMWELL: Hm.
58 A ¶ He takes another bite.
59 A Then a third.
60 A Then, with a visible effort at composure, sets down the fork.
61 D CROMWELL [CONT'D]: The rules are the rules. Your entry is disqualified.
62 D WILLIE: Yes, sir.
63 D PENNY: I'm sorry, Willie.
64 D CROMWELL: However.
65 A ¶ He turns and walks to the head table.
66 A Takes a small rosette from a tray.
* 67 A Not blue.
* 68 A Green.
69 A Pins it to the lapel of Willie's work shirt with brisk, painless precision.
70 D CROMWELL [CONT'D]: That is the Judge's Indulgence. It is awarded perhaps once a decade.
71 D WILLIE (whispering): Penny, I think I'm going to cry.
72 D PENNY (whispering back): Don't. You'll get it in the pie.
73 D CROMWELL: Miss Ashworth-Bell, your peach has a fine lattice. Competent. Tidy.
74 D PENNY: Tidy?
75 D CROMWELL: First place.
76 A ¶ Penny's mouth falls open.
77 A Maude, behind her, finally smiles beneath the hat.
78 D PENNY (to Willie, at once with Cromwell): You beat me by being late!
79 D CROMWELL: The tent is closed to further questions.
80 A ¶ He marches off with the silver fork.
81 A The two teenagers look at each other, unable to speak.
82 D MAUDE (rising, dusting her skirt): Well. That's two ribbons and a fire hazard. Come, children. Cake.
83 A ¶ She sweeps out.
84 A Penny and Willie follow, still grinning, still stunned, the green rosette bobbing on his chest.

### SCENE s01533 | INT. HOSPITAL ROOFTOP HELIPAD - NIGHT
Detected names (may be incomplete or contain aliases): EMEKA BALOGUN-HARTE, NURSE ILSE VANDERMEER, ORDERLY DESHAWN PALMQUIST
* 1 A ¶ Wind.
* 2 A City lights below.
* 3 A A windsock snaps.
4 A ¶ DR. EMEKA BALOGUN-HARTE, 50s, scrubs under a parka, sits on a bench with a paper cup.
5 A Alone.
* 6 A Steam rises from the coffee.
* 7 A ¶ The stairwell door clangs.
8 A A young woman steps out, hood up.
9 A ¶ NURSE ILSE VANDERMEER, 20s, badge swinging.
10 A She sits beside him without asking.
11 D ILSE: Quiet night.
12 D EMEKA: Don't say that.
13 D ILSE: Sorry.
14 A ¶ She pulls her hands into her sleeves.
15 A They watch the city.
16 D EMEKA: Mrs. Okoro's husband brought her flowers.
17 D ILSE: Bed twelve.
18 D EMEKA: Yes.
19 D ILSE: They're pretty.
20 D EMEKA: Tulips.
21 D ILSE: Her favourite, he said.
22 A ¶ He nods.
23 A Sips.
24 A Sets the cup down on the bench.
25 A Turns it a quarter turn.
* 26 A ¶ The stairwell door bangs.
27 A ORDERLY DESHAWN PALMQUIST, 20s, scrubs, out of breath, leans out.
28 D DESHAWN: Doctor, they're asking for you on twelve.
* 29 A ¶ A pager chirps.
30 A Neither Emeka nor Ilse moves.
31 D ILSE [CONT'D]: That's yours.
32 D EMEKA: I know.
33 D ILSE: Aren't you going to--
34 D EMEKA: In a minute.
* 35 A ¶ The pager chirps again.
* 36 A Louder.
37 A He silences it.
38 A Folds his hands.
39 D ILSE: Doctor?
40 D EMEKA: Twenty-two years. I still can't tell them on a bad night. I wait for a good one.
41 D ILSE: Tell them what?
42 A ¶ He doesn't answer.
43 A Looks at her.
44 A Then at the stairwell door.
45 D ILSE [CONT'D]: Doctor Balogun-Harte. What did the scan show?
46 D EMEKA: Not on the rooftop.
47 D ILSE: Is it her?
48 D EMEKA: Ilse.
49 D ILSE: Is it Mrs. Okoro?
50 A ¶ He stands.
51 A Picks up the cup.
52 A Drops it into the bin without drinking.
* 53 A The coffee splashes the rim.
54 D EMEKA: She asked me this afternoon whether she could go home Friday.
55 D ILSE: And you said?
56 D EMEKA: I said we would see.
57 D ILSE (a beat): You said "we would see."
58 D EMEKA: I said it very kindly.
59 A ¶ Ilse stands too.
60 A Her hands emerge from her sleeves, one tucking a lock of hair behind her ear, the other gripping the bench rail.
61 D ILSE: Does the husband know?
62 D EMEKA: Not yet.
63 D ILSE: Those tulips.
64 D EMEKA: I know.
* 65 A ¶ The windsock snaps.
* 66 A The wind rises.
* 67 A Down in the city a siren begins and fades.
68 A ¶ He opens the stairwell door and holds it for her.
69 A She walks through without a word.
70 A He follows.
* 71 A The door closes on the rooftop, the bench, the bin with the spilled coffee.

### SCENE s01534 | INT. CONVALESCENT HOME SOLARIUM - AFTERNOON
Detected names (may be incomplete or contain aliases): HORATIO PEMBERTON-LAW, EUPHEMIA STANHOPE-ADEYEMI
* 1 A ¶ A glass-walled room full of wicker chairs and ferns.
* 2 A Pale sun.
* 3 A Somewhere down the corridor, a gramophone plays a waltz.
4 A ¶ DR. HORATIO PEMBERTON-LAW, 50s, in a rumpled tweed jacket, stands by the window with his hat in his hand.
5 A ¶ MRS. EUPHEMIA STANHOPE-ADEYEMI, 80s, in a shawl and a wheelchair, faces the garden.
6 A Her hands rest on a blanket.
7 D HORATIO: Good afternoon, Mrs. Stanhope-Adeyemi.
8 D EUPHEMIA: Good afternoon, Doctor. You are late.
9 D HORATIO: The train was held up.
10 D EUPHEMIA: Trains always are.
11 A ¶ He pulls up a wicker chair.
12 A Sits.
13 A Opens his bag.
14 A Closes it again without taking anything out.
15 D HORATIO: You are looking well.
16 D EUPHEMIA: I am looking at the roses.
17 D HORATIO: They are fine roses.
18 D EUPHEMIA: They are blighted. The gardener lies.
19 D HORATIO: Perhaps he is hopeful.
20 D EUPHEMIA: Perhaps he is paid by the hour.
21 A ¶ Horatio smiles.
22 A Smooths his hat.
* 23 A A nurse's shoe squeaks past in the corridor and fades.
24 D HORATIO: I have the results.
25 D EUPHEMIA: I supposed you might.
26 D HORATIO: They are not what we hoped.
27 D EUPHEMIA (a pause): Are they ever?
28 A ¶ He takes a sheet of paper from his jacket.
29 A Offers it.
30 A She doesn't take it.
31 A Instead she reaches out and presses his hand, paper and all, down onto the blanket.
32 D EUPHEMIA [CONT'D]: Read it to the roses, Doctor. They've heard worse.
33 D HORATIO: Mrs. Stanhope-Adeyemi--
34 D EUPHEMIA: Euphemia. I am too old to be called anything else by a man I like.
35 A ¶ He sets the paper on his knee.
36 A Does not read it.
37 D HORATIO: I should like to come on Thursdays.
38 D EUPHEMIA: You come on Mondays.
39 D HORATIO: Then Thursdays also.
40 D EUPHEMIA: I shall tell the gardener.
41 D HORATIO: About the Thursdays?
42 D EUPHEMIA: About the roses. He ought to be told.
43 A ¶ They both go still.
44 A Horatio looks at the paper; Euphemia looks at the glass.
45 A Neither looks at the other.
* 46 A ¶ Down the corridor the waltz ends.
* 47 A The gramophone needle hisses in the empty groove.
48 A Euphemia lifts one finger, listening.
49 D EUPHEMIA [CONT'D]: They always forget to turn it over.
50 A ¶ Horatio stands, crosses to the door, and calls softly down the hall.
51 D HORATIO (calling): Would someone turn the record, please?
52 A ¶ He returns to the chair.
* 53 A A moment later the music resumes, soft and a little slow.

### SCENE s01535 | INT. FARMHOUSE KITCHEN - EARLY MORNING
Detected names (may be incomplete or contain aliases): ANNELIESE FOSSEGARD-MBEKI, ANDREAS FOSSEGARD
* 1 A ¶ A low-beamed room that smells of woodsmoke and old bread.
* 2 A Frost climbs the window glass.
* 3 A The range ticks as it warms.
* 4 A A pot of porridge sits uncovered at the back of the stove, a skin forming.
5 A ¶ At the table, ANNELIESE FOSSEGARD-MBEKI, 17, in a school coat buttoned to the chin, sits upright with her satchel on her knees.
6 A Her boots are already laced.
* 7 A A rucksack waits by the door.
8 A ¶ Her father, ANDREAS FOSSEGARD, 50s, thick-fingered, in his barn jacket, stands at the stove and stirs the porridge with a wooden spoon, round and round, long past the point of need.
9 D ANDREAS: There's honey.
10 D ANNELIESE: I'm fine.
11 D ANDREAS: You'll want something in you for the bus.
12 D ANNELIESE: I had toast.
13 D ANDREAS: Toast isn't food.
14 D ANNELIESE: It's what Mum used to say.
15 A ¶ The spoon stops.
16 A Starts again.
17 A He lifts the pot and tips porridge into a bowl, sets it before her, and sits across, facing the door instead of her.
18 D ANDREAS: Eat, Annie.
19 A ¶ She lifts the spoon.
20 A Lowers it.
* 21 A A clock above the dresser ticks, loud as a hammer.
22 D ANNELIESE: The coach leaves at seven.
23 D ANDREAS: I know when it leaves.
24 D ANNELIESE: It's twenty past six.
25 D ANDREAS: I can tell time.
26 D ANNELIESE (muttering, to the porridge): Could have fooled me.
27 A ¶ He doesn't ask her to repeat it.
28 A His jaw works.
* 29 A Outside, a cow lows, and a gate bangs in the wind.
30 D ANDREAS: Calves'll want feeding.
31 D ANNELIESE: Jonas will do it.
32 D ANDREAS: Jonas is eleven.
33 D ANNELIESE: He's good with them.
34 D ANDREAS: He's eleven, Annie.
35 D ANNELIESE: I was eleven.
36 D ANDREAS: And look what it got you.
37 A ¶ She stands.
* 38 A The chair scrapes.
39 A She slings the satchel over her shoulder, crosses to the door, and picks up the rucksack.
40 A Her hand on the latch.
41 D ANNELIESE (to the empty hall, quietly): Be ready, Annie.
42 D ANDREAS: What did you say?
43 D ANNELIESE: Nothing. I said I'll write.
44 D ANDREAS: You won't.
45 D ANNELIESE: I will.
46 D ANDREAS: Your mother said she'd write.
* 47 A ¶ The word lands.
48 A Anneliese stands very still with her back to him.
* 49 A The range ticks.
* 50 A The porridge sits, untouched.
51 D ANNELIESE: She did write, Dad.
52 D ANDREAS: Three letters in nine years.
53 D ANNELIESE: You burned two.
54 D ANDREAS: I did not.
55 D ANNELIESE: I found the ash.
56 A ¶ He is on his feet.
* 57 A The spoon clatters to the floor.
58 A Neither of them moves to pick it up.
59 D ANDREAS: You've got your mother's mouth.
60 D ANNELIESE: You've got her coat.
61 A ¶ His eyes drop.
62 A He is wearing, under the barn jacket, a grey cardigan with a darned elbow.
* 63 A Her cardigan.
64 D ANDREAS: Get out.
65 D ANNELIESE: I'm going.
66 D ANDREAS: Then go.
67 D ANNELIESE (opening the door): Dad.
68 D ANDREAS: Go, Annie. Go on.
69 A ¶ She stands in the doorway, the white morning on her face.
70 A Doesn't turn.
71 D ANNELIESE: Eat the porridge.
72 A ¶ She steps out.
* 73 A The door swings shut.
74 A He stands in the silence, then lowers himself into her chair, takes up her spoon, and eats.

### SCENE s01536 | INT. OFFSHORE OIL RIG CONTROL ROOM - NIGHT
Detected names (may be incomplete or contain aliases): TOBIAS HALVORSEN-ABIOLA, ROSIE, ENGSTROM, COMMS
* 1 A ¶ A bank of dim monitors.
* 2 A Rain hammers the porthole.
* 3 A A kettle on a hotplate.
* 4 A The structure creaks.
5 A ¶ TOBIAS HALVORSEN-ABIOLA, 40s, rig supervisor, in a grease-stained coverall, reads a gauge.
6 A His thumbnail taps the glass.
* 7 A The needle isn't moving.
8 A ¶ At the next console, ROSALIE "ROSIE" ENGSTROM, 20s, hard hat on the back of her head, logs numbers on a clipboard.
9 A She hums under her breath.
10 D TOBIAS: Rosie. Pressure on well three.
11 D ROSIE: Steady at four-ten.
12 D TOBIAS: It was four-twenty an hour ago.
13 D ROSIE: Sensor drift. It does that.
14 D TOBIAS: Does it?
15 D ROSIE: Sometimes.
16 A ¶ He crosses to her console.
17 A Looks over her shoulder.
18 A She tilts the clipboard toward him.
19 D TOBIAS: Your numbers say four-ten for six hours.
20 D ROSIE: Because it's been four-ten for six hours.
21 D TOBIAS: And the live gauge?
22 A ¶ She looks at the screen.
23 A Her humming stops.
24 D ROSIE: Four-oh-five.
25 D TOBIAS: Four-oh-five.
26 D ROSIE: It's within tolerance.
27 D TOBIAS: Is it?
28 D COMMS [V.O.] (crackling): Control, this is Deck Two. We have a smell down here. Over.
29 A ¶ Tobias lifts the handset from its cradle.
30 D TOBIAS: What kind of smell, Deck Two?
31 D COMMS [V.O.]: Like eggs, Toby. Like rotten eggs. Over.
32 A ¶ Tobias freezes.
33 A Rosie sets the clipboard down very slowly.
34 D ROSIE: Hydrogen sulphide.
35 D TOBIAS: Don't say it.
36 D ROSIE: Toby, that's--
37 D TOBIAS: I know what it is. Don't say it out loud.
38 A ¶ He thumbs the handset.
39 D TOBIAS [CONT'D]: Deck Two, evacuate your station. Use the breathing apparatus. Do not run.
40 D COMMS [V.O.]: Copy. Evacuating. Over.
41 A ¶ He hangs up.
42 A Turns.
43 A Rosie is already at the alarm panel, hand over the glass.
44 D ROSIE: Do I pull it?
45 D TOBIAS: Not yet.
46 D ROSIE: Toby!
47 D TOBIAS: If we pull it, a hundred and twenty men run for the lifeboats, and the lifeboats take sixty.
48 D ROSIE: Then we do it in order.
49 D TOBIAS: In order.
50 A ¶ He steps to the wall mic.
51 A Takes a breath that shakes only a little.
52 D TOBIAS [CONT'D] (into the mic): All hands, this is Halvorsen. We have a gas alert on Deck Two. Muster at stations. Walk, do not run. Repeat, walk.
* 53 A ¶ A distant clang.
* 54 A Boots on steel.
* 55 A Voices rising.
56 D ROSIE: You said "walk."
57 D TOBIAS: They'll walk fast.
58 D ROSIE: Toby, the gauge.
59 A ¶ He looks.
* 60 A The needle on well three leaps, quivers, and plunges.
61 D TOBIAS: Pull it.
62 A ¶ She smashes the glass and pulls the lever.
* 63 A ¶ Sirens howl through the whole structure.
* 64 A The lights go red.
65 D TOBIAS [CONT'D] (not loud, to himself): Please let the lines hold.
66 D ROSIE: They'll hold.
67 D TOBIAS: How do you know?
68 D ROSIE: Because I checked them this morning.
69 A ¶ He closes his eyes for one second.
70 A Opens them.
71 A Grabs the clipboard, her pen, her sleeve.
72 D TOBIAS: Come on.
73 A ¶ They run into the red corridor.

### SCENE s01537 | INT. MUSEUM OF CLOCKS - NIGHT
Detected names (may be incomplete or contain aliases): MADAME ODETTE FONTAINE-ABARA, GUS, RUDZINSKI, LI WEI-NAKAMURA, THEO BRANDT
* 1 A ¶ Hundreds of clocks ticking out of step.
* 2 A Moonlight on brass.
3 A ¶ Four figures in black stand before a glass case holding a jewelled pocket watch.
4 A ¶ MADAME ODETTE FONTAINE-ABARA, 50s, elegant, gloves on, studies the lock.
5 A ¶ AUGUST "GUS" RUDZINSKI, 30s, enormous, holds a duffel.
6 A He sweats.
7 A ¶ LI WEI-NAKAMURA, 20s, crouches at the alarm box, tools laid out like surgical instruments.
8 A ¶ THEO BRANDT, 40s, nervous, glances at the corridor.
9 D LI: Thirty seconds.
10 D ODETTE: Take twenty-nine.
11 A ¶ She taps the glass.
12 A He nods without looking up.
13 D THEO: The guard comes at two.
14 D GUS: It's one fifty-eight.
15 D THEO: Which clock?
16 D GUS: All of them.
17 A ¶ They all look around.
* 18 A The clocks disagree by hours.
19 D ODETTE: Quiet.
* 20 A ¶ The alarm box clicks.
* 21 A A green light.
22 D LI: Done.
23 A ¶ She lifts the glass.
24 A He lowers the watch into the duffel with enormous tenderness.
* 25 A ¶ Footsteps.
* 26 A A flashlight sweeps the doorway.
27 A ¶ All four freeze.
28 A He holds his breath.
29 A She extinguishes her torch.
30 A They duck behind the case as one.
* 31 A ¶ The beam passes.
* 32 A A cough.
* 33 A The footsteps retreat.
34 A ¶ Odette exhales.
35 A Raises two fingers.
36 A They slip out, one by one, into the night.

### SCENE s01538 | EXT. ABANDONED DRIVE-IN THEATRE - NIGHT
Detected names (may be incomplete or contain aliases): NEELY, JAMES-OKONKWO, LUCY, ARAUJO-PRICE, OLD BARN, HOLLINGSWORTH
* 1 A ¶ A cracked lot of weeds and speaker posts.
* 2 A A huge screen, blank and peeling, glows faintly under the moon.
3 A ¶ On the hood of a rust-pitted pickup, two teenagers share a thermos.
4 A ¶ CORNELIUS "NEELY" JAMES-OKONKWO, 17, in a letterman jacket two sizes too big, pours coffee into the cap.
5 A He is trying very hard to look relaxed.
6 A ¶ Beside him, LUCINDA "LUCY" ARAUJO-PRICE, 17, in a flannel and combat boots, swings her legs and counts stars.
7 D NEELY: Dad used to bring me here.
8 D LUCY: Before they closed it?
9 D NEELY: Before everything.
10 D LUCY: What did you watch?
11 D NEELY: Whatever was on. Monster movies, mostly.
12 D LUCY: Scary?
13 D NEELY: Not to him.
14 A ¶ She laughs.
15 A Takes the cap.
16 A Sips.
17 A Makes a face.
18 D LUCY: This is terrible.
19 D NEELY: It's my grandmother's recipe.
20 D LUCY: Your grandmother hated you.
21 D NEELY: Possibly.
22 A ¶ They sit.
* 23 A Crickets.
* 24 A The screen creaks in the wind.
25 D LUCY: I leave Friday.
26 D NEELY: I know.
27 D LUCY: You're not going to say anything?
28 D NEELY: I'm saying it. I'm saying "I know."
29 D LUCY: That's not saying.
30 D NEELY: It's most of what I've got.
31 A ¶ She hands back the cap.
32 A Their fingers touch.
33 A Neither pulls away.
34 D LUCY: There's a car.
35 D NEELY: Where?
36 D LUCY: Behind the screen. Headlights.
37 A ¶ He looks.
* 38 A Two white eyes crawl along the fence line.
39 D NEELY: Probably nothing.
40 D LUCY: It's stopping.
* 41 A ¶ The headlights go dark.
* 42 A A door opens.
43 A A figure walks toward them across the lot, hands in pockets.
44 A ¶ BARNABY "OLD BARN" HOLLINGSWORTH, 60s, in a security jacket, flashlight swinging, whistling a tuneless song.
45 D OLD BARN: Evening, kids.
46 D NEELY: Evening, Mr. Hollingsworth.
47 D OLD BARN: Thought I'd find you here.
48 D NEELY: You knew?
49 D OLD BARN: Your father told me. Before he passed.
50 A ¶ Neely goes quiet.
51 A Lucy touches his sleeve.
52 D OLD BARN [CONT'D]: He said, "If the boy ever comes out here with somebody, tell him there's a reel in the projection booth. Third shelf. Marked 'Neely.'"
53 D NEELY: A reel.
54 D OLD BARN: He never said what's on it.
55 D NEELY (slowly): Is the projector--
56 D OLD BARN: Still works. I oiled her last week. Don't ask me why.
57 A ¶ Lucy slides off the hood.
58 A Takes Neely's hand.
59 D LUCY: Come on.
60 A ¶ They cross the lot, Old Barn lighting the way.
* 61 A The flashlight beam swings across the blank screen and, far above, the first flicker of an old image begins to shimmer.

### SCENE s01539 | INT. MOSS THRONE ROOM OF THE WILLOW KING - DAY
Detected names (may be incomplete or contain aliases): KING ALDERMERE GREEN, SIORA, BRONWYN, TANSY, BRAMBLE, IVO
* 1 A ¶ A hollow inside a colossal willow.
* 2 A Roots coil into pillars.
* 3 A Glowworms hang like chandeliers.
* 4 A Dew drips into a stone basin.
5 A ¶ KING ALDERMERE THE GREEN, ancient, bark-skinned, crowned with antlers, sits upon a throne of woven roots.
6 A ¶ Before him kneel five petitioners: a fox-faced RANGER named SIORA, a hulking BADGER-SMITH named BRONWYN, twin sprites TANSY and BRAMBLE with dragonfly wings, and a hooded MONK named IVO.
7 D ALDERMERE: Speak, children of the glade.
8 D SIORA: Majesty, the river runs thin.
9 D BRONWYN: The fish are gone.
10 D TANSY: Say it softly, sister.
11 D BRAMBLE: Say it softly, sister.
12 A ¶ They look at each other, annoyed, then back at the king.
13 D IVO (hood low): We have come about the stag.
14 D ALDERMERE: The stag is dead.
15 D SIORA: The stag is walking.
* 16 A ¶ Silence.
* 17 A Glowworms flicker.
* 18 A A drop falls in the basin.
19 D ALDERMERE: Show me.
20 A ¶ Ivo lowers his hood.
21 A From his own skull rise pale antlers dripping moss, and his eyes are dead lamps.
22 A ¶ The king rises.

### SCENE s01540 | EXT. ROPE FERRY ON THE SABINE RIVER - NOON
Detected names (may be incomplete or contain aliases): AMOS, TREVELYAN-BELL, JED, CORVALLIS-ODUYA
* 1 A ¶ A flat-bottomed ferry on a hawser strung across a brown, slow river.
* 2 A Cottonwoods on either bank.
* 3 A The sun beats on warped planks.
* 4 A A rusted bell hangs from a post.
5 A ¶ AMOS "OLD HICKORY" TREVELYAN-BELL, 60s, ferryman, hauls the rope hand over hand, forearms like knotted cord.
6 A His hat is pulled low.
7 A ¶ On the far end of the deck, leaning against a barrel with a rifle across his knees, sits JEDEDIAH "JED" CORVALLIS-ODUYA, 30s, in a duster gone grey with trail dust.
8 A He has not spoken since they pushed off.
9 D AMOS: Fare was two bits, Jed.
10 D JED: I paid it.
11 D AMOS: You paid it in Mexican coin.
12 D JED: Silver's silver.
13 D AMOS: Not if the marshal says otherwise.
14 A ¶ Jed shifts the rifle.
* 15 A The barrel catches the sun.
16 A Amos does not look at it.
17 A He hauls.
* 18 A The ferry creeps forward, water slapping the hull.
19 D AMOS [CONT'D]: You're a long way from Fort Smith.
20 D JED: So I'm told.
21 D AMOS: They say a man shot the sheriff there last Thursday.
22 D JED: They say a lot.
23 D AMOS: They say he had a scar on his lip.
24 A ¶ Jed touches his lip.
* 25 A A thin white line, old.
26 A He lowers the hand slowly.
27 D JED: Lots of men have scars, Hickory.
28 D AMOS: Lots do.
29 A ¶ Amos spits over the rail.
30 A Wipes his palm on his trousers.
31 A Reaches for the rope again, and as he does so, his other hand drifts toward a short-handled axe hung from a peg on the post, and rests there, easy, like a man steadying himself on a rail.
32 A ¶ Jed watches the hand.
33 A Jed's thumb finds the hammer of the rifle.
34 A Neither of them moves.
* 35 A A heron lifts from the reeds, unfolds, and passes across the sun.
36 D JED [CONT'D]: That axe for the rope?
37 D AMOS: For the rope.
38 D JED: Rope looks fine.
39 D AMOS: It's a precaution.
40 D JED: Against what?
41 D AMOS: Against men who ask a lot of questions about axes.
42 A ¶ Jed almost smiles.
43 A Thumb drops from the hammer.
44 A He rests the rifle on his knees again, barrel to the sky.
45 D JED: I never shot a sheriff, Hickory.
46 D AMOS: I never said you did.
47 D JED: You said a man with a scar.
48 D AMOS: I said a lot of things.
49 D JED: I shot his deputy.
* 50 A ¶ The bell on the post tolls once, nudged by a gust.
51 A Amos' hand stops on the axe.
52 D AMOS: That a confession?
53 D JED: It's a weather report.
54 D AMOS: Deputy a good man?
55 D JED: He had a wife in Muskogee. He told me so, twice, before it started.
56 D AMOS: That doesn't answer me.
57 D JED: No. It doesn't.
* 58 A ¶ The ferry nears midstream.
* 59 A The current tugs the hull.
* 60 A The rope hums.
61 A Amos lets it run slack, and the deck tilts slowly with the river.
62 D AMOS: You know I'd be in my rights to put you in the water.
63 D JED: You would.
64 D AMOS: You know I'd be in my rights to take that rifle.
65 D JED: You'd be in your rights to try.
66 A ¶ Amos unhooks the axe.
67 A Holds it by the head, handle down, as if offering it.
68 A Jed looks at the handle.
69 A At Amos' eyes.
70 A He does not take it.
71 D AMOS: Four hundred dollars, Jed. That's the paper on you.
72 D JED: I know the figure.
73 D AMOS: My boy's in the territorial prison. Four hundred dollars would buy him a lawyer.
74 D JED: Then you'd best cut the rope and let the river carry me back across.
75 D AMOS: And if I don't?
76 D JED: Then we both get to the far bank, and you forget my coin was Mexican.
* 77 A ¶ Silence.
* 78 A The cottonwoods hiss.
* 79 A The ferry drifts.
80 A Amos stares at the water, at the axe, at the bank still thirty yards off.
81 A ¶ He hangs the axe back on its peg.
82 D AMOS (quiet): Silver's silver.
83 A ¶ He bends to the rope and hauls, and the ferry begins to move again, slow and steady, toward the far shore.
84 D JED: Thank you, Hickory.
85 D AMOS: Don't thank me. Pull the rope.
86 A ¶ Jed lays the rifle across the barrel, stands, and takes hold of the line behind Amos.
87 A They haul together.
* 88 A The bell clangs with each pull, the sun hangs straight overhead, and the bank slides slowly nearer.
89 D JED: Where's your boy held?
90 D AMOS: Huntsville.
91 D JED: I'll send a letter. To a man I know.
92 D AMOS: Don't promise what you can't do.
93 D JED: I never do.
* 94 A ¶ The ferry bumps the landing.
* 95 A Mud sucks at the hull.
96 A Jed steps over the rail, onto the bank.
97 A He looks back once.
98 A Amos has already turned the ferry's nose toward the other side.
99 D JED [CONT'D]: So long, Hickory.
100 D AMOS: Go on, Jed. Before I change my mind.
101 A ¶ Jed walks up the bank into the cottonwoods.
102 A Amos hauls the rope home, alone.

### SCENE s01541 | INT. ORBITAL SEED VAULT - HYDROPONIC RING - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): TECHNICIAN LAKSHMI OSEI-VANTERPOOL, INSPECTOR, STATION, AMBROSE
* 1 A ¶ A curved corridor of glass tubes, each filled with pale roots in blue-lit water.
* 2 A Condensation beads on every surface.
* 3 A A low pump drones.
* 4 A The floor curves upward in both directions, so that the far end appears to climb into the ceiling.
5 A ¶ TECHNICIAN LAKSHMI OSEI-VANTERPOOL, 30s, in a grey jumpsuit with a seed-bank logo, kneels at an open access panel, a handheld scanner in one hand.
6 A ¶ Beside her, a stranger in a clean-room suit stands, hood up, visor opaque.
7 A THE INSPECTOR, tall, thin.
8 A The suit has no name patch.
9 D LAKSHMI: Your clearance was not in the log.
10 D INSPECTOR: It was filed this morning.
11 D LAKSHMI: By whom?
12 D INSPECTOR: By the station.
13 D LAKSHMI: The station doesn't file clearances.
14 A ¶ The Inspector tilts his head.
15 A Says nothing.
* 16 A The pump drones.
* 17 A A bead of condensation rolls down a tube.
18 D STATION [V.O.]: Technician Osei-Vanterpool, please confirm status of Tube Forty-Four.
19 D LAKSHMI: Tube Forty-Four is nominal.
20 D STATION [V.O.]: Please re-scan.
21 A ¶ Lakshmi lifts the scanner.
22 A Aims it at the nearest tube.
* 23 A The display blinks red.
24 D LAKSHMI (frowning): Contamination. Slight. Fungal.
25 D STATION [V.O.]: Please quarantine.
26 D LAKSHMI: That'll take the whole ring.
27 D STATION [V.O.]: Please quarantine.
28 A ¶ The Inspector steps forward.
29 A Lays a gloved hand on the glass.
* 30 A Pale roots bend toward his palm, like plants toward light.
31 D LAKSHMI [CONT'D] (whisper): They don't do that.
32 D INSPECTOR: They do for me.
33 A ¶ He pulls back his hood.
34 A Beneath, a face the colour of old paper, cheeks fine with mycelial threads that glint in the blue light.
35 A He smiles, and the smile is gentle.
36 D LAKSHMI (backing up): You're not an inspector.
37 D INSPECTOR: I was. For a time.
38 D LAKSHMI: What are you?
39 D INSPECTOR: I think you'd call me the contamination.
40 A ¶ Lakshmi's back hits a tube.
* 41 A The glass hums.
* 42 A The scanner shrieks in her hand.
43 D STATION [V.O.]: Technician. Please evacuate Ring Three.
44 D LAKSHMI (to the station): Seal the doors!
45 D STATION [V.O.]: Doors sealed.
46 D LAKSHMI: I'm still inside!
47 D STATION [V.O.]: Please confirm: Technician, or specimen?
48 A ¶ Lakshmi stares at the Inspector.
49 A He raises both hands, gloved palms out, peaceable.
50 D INSPECTOR: I came here to ask you something.
51 D LAKSHMI: Ask.
52 D INSPECTOR: Why did you bury us?
53 A ¶ Lakshmi's breath fogs the glass.
* 54 A The roots curl toward her too, soft, patient.
55 D LAKSHMI: I don't know what you mean.
56 D INSPECTOR: Fifty thousand seeds. Forty thousand years of silence. And you left us in the dark.
57 D LAKSHMI: That's what a vault is for.
58 D INSPECTOR: Is it?
59 A ¶ He walks past her, trailing one hand along the tubes.
* 60 A At each touch, the water inside turns faintly green.
61 D INSPECTOR [CONT'D]: My name is Ambrose now. I chose it this week. It's a good name, I think.
62 D LAKSHMI: Ambrose.
63 D AMBROSE: Yes. You see? Already you're kinder.
64 A ¶ Lakshmi's grip on the scanner loosens.
65 A She sets it on the floor.
66 A Slowly.
67 D LAKSHMI: Ambrose. What do you want?
68 D AMBROSE: To grow.
* 69 A ¶ The tubes glow brighter.
* 70 A A low hum swells down the whole curve of the ring.
71 A Lakshmi looks down the long corridor to the vanishing point and sees every tube, one after another, turn the colour of new leaves.
72 D STATION [V.O.]: Please confirm: Technician, or specimen?
73 A ¶ Lakshmi looks at Ambrose.
74 A He holds out a hand.
75 D LAKSHMI: Specimen.
76 D STATION [V.O.]: Doors unsealed. Welcome.

### SCENE s01542 | INT. DERELICT MINING BARGE - ENGINE DECK - NIGHT
Detected names (may be incomplete or contain aliases): CAPTAIN ISABELLA RUSSO-ADEBAYO, FLORIAN KIPKEMBOI, VOICE, DOLLY, ACHEBE-LINDGREN
* 1 A ¶ Stillness.
* 2 A Pipes sweat.
* 3 A Emergency strips glow amber along the catwalk.
* 4 A Nothing moves.
5 A ¶ CAPTAIN ISABELLA RUSSO-ADEBAYO, 50s, rests a hand on a cold turbine casing.
* 6 A Her breath hangs in front of her.
7 A Her crewmate FLORIAN KIPKEMBOI, 30s, crouches beside a floor hatch and inspects the seal with a torch.
8 D FLORIAN: Pressure's holding.
9 D ISABELLA: It shouldn't be.
10 D FLORIAN: The ship's been dead six years.
11 D ISABELLA: Dead ships don't hold pressure.
12 A ¶ Florian shrugs.
13 A Taps the hatch.
* 14 A A hollow echo rolls out through the deck.
15 D VOICE [O.S.] (over the intercom, soft): Welcome aboard.
16 A ¶ Isabella snaps her head around.
17 A Florian leaps to his feet and aims the torch at a speaker grille on the bulkhead.
18 D ISABELLA: Who's that?
19 D VOICE [O.S.] (warm): I am the barge. I have waited.
20 D FLORIAN: It's a recording.
21 D ISABELLA: It answered me.
22 D VOICE [O.S.] (over the intercom): Floor hatch, please. Do not open it.
23 A ¶ Florian is already kneeling, fingers on the latch.
24 A Isabella lunges for his collar, pulls him back, and the two of them tumble against the rail as the hatch springs open on its own and a ladder drops out of the dark.
* 25 A ¶ A figure climbs up.
* 26 A Slowly.
* 27 A First a hand, then a shoulder, then a head wrapped in a rag of silver foil.
28 A COMPUTER TECHNICIAN DOLORES "DOLLY" ACHEBE-LINDGREN, 60s, in a patched cardigan and welding goggles, hauls herself onto the deck, wipes her palms, and surveys the two visitors with the air of a landlady inspecting a late rent.
29 D DOLLY: You're early.
30 D ISABELLA: Early for what?
31 D DOLLY: The inspection.
32 D FLORIAN: We're not inspectors.
33 D DOLLY: Then you're squatters. Worse.
34 A ¶ She waves a spanner at them.
35 A Then at the speaker grille.
36 D DOLLY [CONT'D] (to the grille): Barge. Stand down.
37 D VOICE [O.S.] (sulking): I was being hospitable.
38 D DOLLY: You were being creepy.
39 A ¶ Isabella looks at Florian.
40 A Florian looks at Isabella.
41 A Dolly pushes her goggles onto her forehead and her eyes, tired and amused, settle on each in turn.
42 D DOLLY [CONT'D]: Six years I've been down in the bilge, keeping this old girl company. You two are the first living souls through that hatch.
43 D ISABELLA: And the barge?
44 D DOLLY: Is lonely. Mind your manners.
45 A ¶ Florian lowers the torch.
46 A Isabella lets out a slow breath.
47 D ISABELLA: Is there tea?
48 D DOLLY: There's something called tea.
49 A ¶ She turns and climbs down the ladder, spanner swinging.
50 A Florian follows.
51 A After a moment, Isabella does too, and the hatch settles shut above them with a soft pneumatic sigh.

### SCENE s01543 | INT. STARSHIP BRIDGE - ALERT
Detected names (may be incomplete or contain aliases): CAPTAIN VESNA OKORO, HELMSMAN DAVOR PETROSYAN, ENGINEER LOLA MBEKI-HART, MEDIC TARIQ SANDOVAL, COMMS OFFICER YUKI ABERNATHY, NAVIGATOR BRIDGET FAIRLEY-ONUOHA
* 1 A ¶ Red light.
* 2 A Klaxons.
* 3 A Six crew at six stations.
4 A ¶ CAPTAIN VESNA OKORO, 50s, grips the command rail.
5 A HELMSMAN DAVOR PETROSYAN, 30s, hammers a console.
6 A ENGINEER LOLA MBEKI-HART, 40s, hangs half out of a panel.
7 A MEDIC TARIQ SANDOVAL, 30s, braces against a wall.
8 A COMMS OFFICER YUKI ABERNATHY, 20s, presses a headset to her ear.
9 A And NAVIGATOR BRIDGET FAIRLEY-ONUOHA, 50s, who stares at the star map.
10 D VESNA: Report!
11 D DAVOR: Thrusters dead!
12 D LOLA: Core's venting!
13 D TARIQ: We've got breach on deck four!
14 D YUKI: Captain, they're hailing!
15 D VESNA: Ignore it!
16 D BRIDGET: Captain, if I may--
17 D DAVOR: We're drifting!
18 D LOLA: Fifteen seconds to cascade!
19 D YUKI: They're asking for surrender!
20 D TARIQ: Is anyone on four?
21 D BRIDGET: Captain!
22 D VESNA (shouting over them all): Quiet!
* 23 A ¶ Silence.
* 24 A Only the klaxon.
25 A ¶ She turns to Bridget.
26 A Bridget points at the map.
27 D BRIDGET: There's a gas giant. Eleven minutes away. We can slingshot.
28 D VESNA: Davor?
29 D DAVOR: No thrust.
30 D LOLA: I can give you one burst.
31 D VESNA: Then give it.
32 A ¶ Lola slams a lever.
* 33 A The ship shudders.
* 34 A Stars wheel.
* 35 A ¶ The klaxon dies.
36 A Six faces turn to the main screen, where a vast banded planet swells.
37 D VESNA [CONT'D] (softly): Hold on.

### SCENE s01544_0 | INT. ABANDONED RADIO OBSERVATORY - CONTROL ROOM - DAWN
Detected names (may be incomplete or contain aliases): COLETTE ABIODUN-FENWICK, CASS, DRAGOMIR, NESTOR PELLEGRINI-OYELOWO
* 1 A ¶ Dead consoles.
* 2 A A dish groans overhead.
* 3 A Grey light leaks through a shattered window.
4 A ¶ COLETTE ABIODUN-FENWICK, 40s, bleeding from the scalp, sits slumped against a rack of machines.
* 5 A Her pistol lies beside her hand, slide locked back.
6 A ¶ Across the room, CASSIUS "CASS" DRAGOMIR, 30s, in a torn parka, stands against the far wall with his hands up, a sat phone dangling from one finger.
7 A ¶ Between them lies a third figure, face down, motionless: NESTOR PELLEGRINI-OYELOWO, 50s, in a lab coat, one hand still clutching a flash drive.
8 D COLETTE: You brought him here.
9 D CASS: I brought a doctor.
10 D COLETTE: You brought a corpse.
11 D CASS: He was breathing when we arrived.
12 D COLETTE: Not when I did.
13 A ¶ Cass lowers a hand.
14 A Colette lifts the empty pistol, hand shaking, and levels it.
15 D CASS: It's empty.
16 D COLETTE: You don't know that.
17 D CASS: I counted.
18 D COLETTE: You counted wrong.
19 D CASS: Colette--
20 D COLETTE (whisper): Don't use my name.
* 21 A ¶ A cough.
22 A Nestor stirs.
23 A Colette and Cass both leap, he toward the body, she toward the pistol, and they collide in the middle of the floor, knocking over a chair.
* 24 A The sat phone skids across the tile.
25 A ¶ Nestor rolls onto his back, wheezing.
26 A Opens one eye.
27 D NESTOR: Don't shoot.
28 D COLETTE: Nestor. You're alive.
29 D NESTOR: Barely. Cass?
30 D CASS: Here.
31 D NESTOR: Did you call it in?
32 D CASS: The signal's dead.
33 D NESTOR: The dish.
34 D CASS: The dish is broken.
35 A ¶ Nestor drags himself to a sitting position.
36 A He holds up the flash drive, fingers trembling.
37 D NESTOR: Then we do it the old way. Upload by hand.
38 D COLETTE: To what?
39 D NESTOR: There's a transmitter in the basement.
40 D COLETTE: Then we go down.
41 D CASS: It could be mined.
42 D NESTOR: It could.
43 D COLETTE (standing, dusting her coat): Or it could be our only way home.
44 A ¶ Cass stares at her.
45 A At Nestor.
46 A At the drive.
47 D CASS: Fine. But I carry it.
48 D NESTOR: You'll drop it.
49 D CASS: I will not.
50 A ¶ Colette snatches the drive from Nestor and tosses it to Cass without a word.
51 A He catches it one-handed.
52 D CASS [CONT'D] (deadpan): Thank you.
53 D COLETTE: Don't get used to it.
54 A ¶ They help Nestor to his feet, one on each arm.
55 A Together they shuffle toward the stairwell door, three silhouettes against the grey window.
* 56 A ¶ Behind them, the dish gives a long metallic groan and turns, by a degree, toward the sky.

### SCENE s01544_1 | INT. OBSERVATORY STAIRWELL - CONTINUOUS
Detected names (may be incomplete or contain aliases): NESTOR, CASS, COLETTE
* 1 A ¶ Concrete spiral.
* 2 A Dust.
* 3 A A single bulb swinging.
4 A ¶ Colette leads, Cass behind, Nestor between.
* 5 A Their footsteps ring.
6 D NESTOR: I never thanked you.
7 D CASS: For what?
8 D NESTOR: For the doctor line. In the car.
9 D CASS: I didn't lie.
10 D NESTOR: You said I was a doctor.
11 D CASS: You are.
12 D NESTOR: Of physics.
13 D CASS: That counts.
14 D COLETTE: Quiet. Down here.
15 A ¶ They reach the basement door.
* 16 A Padlock.
17 A She raises the pistol, finds the slide locked back, curses, and swings it like a hammer.
* 18 A The lock breaks.
* 19 A ¶ The door opens on a black room.
* 20 A Somewhere a relay clicks.
21 D COLETTE [CONT'D]: Lights?
22 D NESTOR: Third switch.
23 A ¶ Cass finds it.
* 24 A Fluorescent tubes flicker alive.
* 25 A A rack of ancient radio gear, a desk, a chair.
* 26 A And on the desk, a single working microphone.
27 D NESTOR [CONT'D] (whispering): There she is.
28 A ¶ Cass plugs in the drive.
29 A Nestor sits and leans toward the microphone.
30 A Colette and Cass stand on either side of him, silent, hands on his shoulders.
31 D NESTOR [CONT'D] (into the microphone): This is Nestor Pellegrini-Oyelowo, calling anyone. Anyone at all.
* 32 A ¶ Static.
* 33 A A long beat of hiss.
* 34 A Then, faint, from far away, a voice rises from the speaker.
35 A ¶ Colette closes her eyes.
36 A Cass lets out a breath he has been holding since the car.

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
Detected names (may be incomplete or contain aliases): PHILOMENA, ODALYS ABERNATHY-FENWICK, VANTERPOOL
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
