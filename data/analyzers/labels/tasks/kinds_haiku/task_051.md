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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0151.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01761 | INT. MATTRESS SHOWROOM - SATURDAY AFTERNOON
Detected names (may be incomplete or contain aliases): HARLAN FEENEY, DOT BELLAMY, WALLACE BELLAMY
* 1 A ¶ A cavernous store.
* 2 A Hundreds of mattresses in neat rows under blazing lights.
* 3 A A banner hangs from the rafters: EVERYTHING MUST GO.
* 4 A Soft muzak plays.
* 5 A The floor is carpeted a shade of regret.
6 A ¶ HARLAN FEENEY (50s, salesman, tan suit, a name tag that says HARLAN - ASK ME ABOUT SLEEP) glides between the beds with a grin.
7 A DOT BELLAMY (70s, a tiny woman in a quilted jacket, huge handbag, orthopedic sneakers) stalks the aisles, pressing each mattress with her palm.
8 A WALLACE BELLAMY (70s, her husband, suspenders, a newspaper rolled in his fist) trails behind her at a respectful distance.
9 D HARLAN: Welcome! First time in the market for a mattress?
10 D DOT: Forty-one years.
11 D HARLAN: Wonderful. Then you know the value of a good night's sleep.
12 D DOT: I know the value of a good price.
13 A ¶ She climbs onto a bed in her sneakers.
14 A Harlan's smile locks in place.
15 A She lies flat, hands folded across her handbag.
16 A Wallace perches on the edge of the next bed and opens his newspaper.
17 D DOT [CONT'D]: Too soft.
18 D HARLAN: Ma'am, shoes.
19 D DOT: Wallace, test this.
20 D WALLACE: I'm reading.
21 D DOT: Test it.
22 A ¶ Wallace sighs, folds the paper, and lies down on the adjacent mattress with his shoes on.
23 A Harlan winces visibly.
24 A Both Bellamys lie side by side on separate beds, staring at the ceiling, like patients in a ward.
25 D WALLACE: It's all right.
26 D DOT: It's not all right.
27 D WALLACE: It's fine.
28 D DOT: You said that in 1983, and we had to buy the one with the lump.
29 D HARLAN: This is our Cloud Supreme. Eight inches of memory foam, with a ten-year warranty.
30 D DOT: Memory of what?
31 D HARLAN: Of you, ma'am. It remembers your shape.
32 D DOT: I don't want it to remember me. I want it to forget.
33 D HARLAN (beat): That's, uh, our Nap Plus model.
34 D DOT: How much?
35 D HARLAN: Fourteen hundred.
36 D DOT: For a bed.
37 D HARLAN: For a sleep.
38 A ¶ Dot sits up, swings her legs over the side, and looks at him for a long, hard moment.
39 A Then she slaps her palm down on the mattress.
40 D DOT: Eight hundred, and you throw in the pillows.
41 D HARLAN: Ma'am, I can't--
42 D DOT: Wallace. Get up. We're leaving.
43 D WALLACE: I'm comfortable.
44 D DOT: Wallace!
45 A ¶ He rises slowly, unwillingly, shoes squeaking.
46 A Harlan raises both hands.
47 D HARLAN: Twelve hundred. And the pillows.
48 D DOT: One thousand.
49 D HARLAN: Eleven.
50 D DOT: One thousand, and we take the floor model, and you deliver it Tuesday.
51 D HARLAN (defeated): Done.
52 D DOT: Wallace, pay the man.
53 A ¶ Wallace pulls out his wallet.
* 54 A A moth flutters out.
55 A Harlan stares at it, stares at Dot, and takes the wallet gently, as if it might bite.

### SCENE s01762 | INT. ICE CREAM FACTORY - ABANDONED - NIGHT
Detected names (may be incomplete or contain aliases): SWEET TOOTH CREAMERY, VIOLET ASHBY
* 1 A ¶ A cavernous hall of frost-bitten steel.
* 2 A Conveyor belts stilled mid-run.
* 3 A Giant mixing vats, lids ajar.
* 4 A A cracked pink sign reads "SWEET TOOTH CREAMERY - SINCE 1951".
* 5 A Moonlight through a skylight.
* 6 A The cold smells like old vanilla.
7 A ¶ VIOLET ASHBY (40s, long coat, flashlight, a small digital recorder clipped to her lapel) steps over a fallen pallet.
8 A She keeps her light low.
9 A She keeps her shoulders square.
10 A ¶ She stops at a cold-room door.
11 A She puts her palm against it, as if she could feel a pulse.
12 A She doesn't open it.
13 A She moves on.
14 A ¶ She finds a clipboard on the floor, wipes the dust with her sleeve, and reads for a long moment.
15 A She tucks it under her arm.
16 A She walks to the nearest vat, tilts the lid back with a boot, and shines the light inside.
* 17 A ¶ Empty.
* 18 A Dry.
* 19 A Stained brown at the bottom.
20 D VIOLET (into recorder): Sweet Tooth Creamery. Tuesday, 2 a.m. No sign of forced entry.
21 A ¶ She lets the lid fall.
* 22 A It echoes for too long.
23 A ¶ She walks.
24 A Her breath fogs.
* 25 A Beneath her boots the floor changes, from concrete to a slick of old ice that crackles as she steps.
26 A She slows.
27 A She crouches.
28 A She presses her glove to the ice.
* 29 A ¶ Under the glaze, someone has frozen a wristwatch.
30 A ¶ She stares at it.
31 A Then she stands and takes four steps back, slowly, and lifts her head.
* 32 A Along the far wall, a row of freezer doors waits in the dark, each with a small brass number.
* 33 A One door is ajar.
* 34 A A thin breath of fog curls from the gap.
35 A ¶ She does not move toward it.
36 A She does not move away from it.
37 D VIOLET [CONT'D] (into recorder): Door nine is open.
38 A ¶ She plays the recording back.
* 39 A Her own voice, tinny and small.
40 D VIOLET [V.O.] (recorded): Door nine is open.
* 41 A ¶ Then, after a gap of dead air, another sentence she has not said.
42 D VIOLET [V.O.] (recorded, whisper): Door nine is open, and you are standing in front of it.
43 A ¶ She clicks the recorder off.
44 A She stands there very still, her flashlight beam trembling on the floor.
45 A ¶ She turns it, slowly, along the wall, row by row, door by door.
* 46 A Eight.
* 47 A Seven.
* 48 A Six.
* 49 A When the beam reaches door nine, it is closed.
50 A ¶ She breathes out.
* 51 A Fog drifts in front of her face.
52 A ¶ She turns her back on the wall and walks, in a perfectly steady line, toward the exit.
* 53 A Behind her, soft and unhurried, a latch clicks, and another, and another, down the line of doors.
54 A ¶ She keeps walking.
55 A She does not turn around.
56 A ¶ Halfway to the exit she stops and unclips the recorder from her lapel.
57 A She sets it on the floor, in the center of the aisle, red light still glowing.
58 A She straightens her coat.
59 A ¶ She walks on, and does not look back, and the recorder keeps running in the dark.
60 D VIOLET [V.O.] (from the recorder, small and far off): I'll leave this here. In case anyone wants to know how it ended.
* 61 A ¶ The skylight fades to black.

### SCENE s01763 | INT. COLLAPSED SUBWAY TUNNEL - NIGHT
Detected names (may be incomplete or contain aliases): MAGDA KOWAL, RAVI MENON, JOAQUIN BELTRAN, XIMENA ORTIZ, OLD TEO, BEA
* 1 A ¶ Concrete, rebar, rubble.
* 2 A A single emergency light flickers in a cage on the wall.
* 3 A Dust hangs in the beam.
* 4 A Water drips somewhere out of sight.
5 A ¶ MAGDA KOWAL (50s, transit worker, hard hat, reflective vest) leans against a slab, one hand on her ribs.
6 A RAVI MENON (20s, student, backpack, scuffed laptop) sits cross-legged, scrolling a dead phone.
7 A JOAQUIN BELTRAN (40s, commuter, suit jacket wrapped around a bleeding hand) paces.
8 A XIMENA ORTIZ (30s, pregnant, hand on her belly) rests on a plastic crate.
9 A OLD TEO (70s, flat cap, harmonica in his breast pocket) sits against the wall, eyes closed.
10 A BEA (9, school uniform, a pink backpack, sitting very close to Ximena) hums.
11 D MAGDA: Everybody, listen. Rescue knows we're down here.
12 D JOAQUIN: How?
13 D MAGDA: Because they always know.
14 D RAVI (muttering): Phone's dead. Mine's dead.
15 D JOAQUIN: We all have dead phones, kid.
16 A ¶ Ximena adjusts her seat.
17 A She winces and tries to hide it.
18 A Bea looks up at her and places a small hand over Ximena's.
19 D BEA: Is the baby kicking?
20 D XIMENA: A little.
21 D BEA: Does it know we're in a tunnel?
22 D XIMENA: I don't think so.
23 D BEA: Good.
24 A ¶ Old Teo opens one eye, takes the harmonica from his pocket, wipes it on his sleeve, and plays a single low note.
* 25 A It trembles in the cave.
26 D MAGDA: Teo, save your breath.
27 D TEO: It saves itself.
28 A ¶ He plays another, then a phrase, slow and tender.
29 A Ravi stops scrolling.
30 A Joaquin stops pacing.
31 A Even Magda lowers her head.
* 32 A The light flickers.
* 33 A For the length of a verse, no one speaks.
34 D JOAQUIN (to himself): My wife is going to kill me.
35 D RAVI: It's not your fault.
36 D JOAQUIN: I took the late train. I never take the late train.
37 D BEA: I take it every day.
38 D JOAQUIN: Do you?
39 D BEA: My grandma meets me at Elm.
40 A ¶ Ximena and Magda exchange a look over the child's head.
41 A Teo lowers the harmonica.
42 D TEO: She'll be at Elm tonight too.
43 D BEA: I know.
44 D MAGDA: Okay. Okay. Water first. Joaquin, what have you got?
45 D JOAQUIN: A bottle. Half.
46 D MAGDA: Ravi?
47 D RAVI: Nothing. A granola bar.
48 D MAGDA: Break it in six.
49 D RAVI: It's tiny.
50 D MAGDA: Break it in six.
51 A ¶ He does.
52 A He gives Bea the biggest piece.
53 A She hands it to Ximena.
54 A Ximena breaks it again and hands half back.
* 55 A ¶ Overhead, concrete shifts with a groan.
* 56 A Dust sifts down in a thin ribbon.
57 A Everyone looks up.
* 58 A The light dims, brightens, holds.
59 D TEO (softly): Play me a song, little one.
60 D BEA: I don't know any.
61 D TEO: Hum the one you were humming.
62 A ¶ Bea hums.
63 A Teo finds the key on his harmonica and joins.
64 A The others sit and let the music do the work.

### SCENE s01764 | INT. SPACE ELEVATOR CAR - ORBITAL TETHER - DAY
Detected names (may be incomplete or contain aliases): CAPTAIN IDRIS VAUGHAN, NOOR HASHEMI, BART, CHUKWU, FUMIKO SATO, SVEN LUNDGREN
* 1 A ¶ A decommissioned passenger car, windowless but for one thick porthole.
* 2 A Worn leather seats, six of them, bolted in a ring around a central pole.
* 3 A A dial on the wall reads 31,000 km and drops by the second.
* 4 A The air is stale, the lights half-power.
5 A ¶ CAPTAIN IDRIS VAUGHAN (50s, gray crew cut, patched uniform jacket) sits at the control panel, reading tablet data.
6 A NOOR HASHEMI (30s, flight engineer, braids pinned up, hands always moving) is on her back under the console, wiring.
7 A BARTHOLOMEW "BART" CHUKWU (40s, medic, big man in a small seat) peels the foil off a ration bar.
8 A FUMIKO SATO (20s, cadet, rigid in her seat, hands gripped white around the harness) stares at the porthole.
9 A SVEN LUNDGREN (60s, scientist, lab coat over thermals, a thermos strapped to his belt) hums at the wall.
10 D IDRIS: Noor, status.
11 D NOOR (from under the console): Power's holding. Descent's nominal.
12 D IDRIS: Nominal.
13 D NOOR: I said nominal. Didn't say good.
14 D BART: Is there such a thing as a bad descent when you're only falling thirty thousand kilometers?
15 D NOOR (dry): Yes, Bart. The kind where you land.
16 D BART: Funny.
17 D FUMIKO: Captain, how long?
18 D IDRIS: Four hours, Cadet.
19 D FUMIKO: Four hours is a long time.
20 D IDRIS: It's the normal time.
21 D SVEN: It is a good time. Time enough for a story.
22 D BART: No stories, Sven.
23 D SVEN: It is a short one.
24 D BART: It's never short.
25 D SVEN: It is the one about the cable.
26 A ¶ Noor slides out from under the console.
27 A She sits up, a coil of wire in her fist.
28 A Idris sets down his tablet.
29 A Fumiko turns her eyes from the porthole for the first time.
30 D IDRIS: Not that one, Sven.
31 D SVEN: They should hear it, Captain.
32 D IDRIS: They have clearance to know what they need.
33 D SVEN: Then they need to know.
* 34 A ¶ Silence.
* 35 A The dial reads 29,000.
* 36 A The car shudders, a small tremor along the line.
37 A Everyone feels it.
38 A Nobody mentions it.
39 D NOOR: Captain, I'd like to hear the story.
40 D IDRIS: No.
41 D NOOR: Captain--
42 D IDRIS: Engineer, return to the panel.
43 A ¶ Noor does not move.
44 A Bart pops the foil wrapper off his ration bar and eats a bite without chewing.
45 D BART (to Fumiko, quietly): Look out the window, kid. Look at the stars.
46 D FUMIKO: They're not moving.
47 D BART: Good.
48 D FUMIKO: They should be.
49 A ¶ Bart stops chewing.
50 A He looks at Idris.
51 A Idris, with great deliberateness, puts the tablet face-down on the panel.
52 D SVEN: They are not moving because we are not descending, Fumiko.
53 D NOOR: That's not funny, Sven.
54 D SVEN: It is not a joke.
55 D IDRIS: Sven, I said no.
56 D SVEN: It is not a thing you can say no to, Captain. The dial is reading. The dial is wrong. We have been stationary since the first tremor, which was ninety minutes ago.
57 D BART: The dial's dropping.
58 D SVEN: The dial is a recording. I looped it myself.
59 A ¶ Noor drops the coil of wire.
60 A Bart rises, bumping his head on the low ceiling.
61 A Fumiko lifts her hands off the harness, finally, and puts them in her lap.
62 D NOOR: You looped it.
63 D SVEN: At the Captain's instruction.
64 A ¶ All eyes shift to Idris.
65 A His face is perfectly composed.
66 A He lays both hands flat on the panel.
67 D IDRIS: There is a fault in the tether.
68 D BART: How bad?
69 D IDRIS: We are holding at thirty thousand and nine hundred kilometers, on a line rated for twenty-two.
70 D NOOR: That's not possible.
71 D IDRIS: It is happening.
72 D FUMIKO: Why didn't you tell us?
73 D IDRIS: Because if I had, you would have done what you're doing now.
74 D FUMIKO: What am I doing?
75 D IDRIS: Looking at me.
* 76 A ¶ Silence.
* 77 A The car groans.
* 78 A Somewhere below them, in the dark, a long cable sings a very high note.
79 D SVEN (softly): Now will you let me tell the story?
80 A ¶ Idris nods, once.
81 A Sven sits, unscrews his thermos, pours a single cup of tea, and holds it out to Fumiko, whose hand reaches for it, and closes, and does not shake.

### SCENE s01765 | INT. DRAGON'S TOOTH MINE - DEEP SHAFT - DAY
Detected names (may be incomplete or contain aliases): ALDRETH, PIP, MARN, YSABEAU, GORRAN
* 1 A ¶ Black rock veined with ivory.
* 2 A Lanterns hang from iron hooks.
* 3 A The walls are warm.
4 A ¶ ALDRETH (40s, foreman, leather vest, pickaxe on his shoulder) squints into the dark.
5 A PIP (12, mine boy, soot-faced, torch held two-handed) grips his sleeve.
6 A MARN (30s, miner, huge arms, a sledge) swings at the vein, stone chips flying.
7 A YSABEAU (20s, mapmaker, ink on her nose, a roll of parchment under her arm) taps a compass.
* 8 A ¶ The wall exhales.
* 9 A Hot breath, sulfur-yellow.
* 10 A Every lantern bows.
11 D PIP: Foreman?
12 D ALDRETH: Nobody move.
13 A ¶ Marn lowers the sledge.
14 A Ysabeau closes the compass.
15 A Pip ducks behind Aldreth.
16 A Together they back up into the narrow shaft as the vein of ivory glows orange and the stone around it begins to crack like an egg.
17 A ¶ A figure steps out of the dark behind them.
18 A GORRAN (60s, a wyrm-warden, scaled leather armor, a staff of blackened bone) taps the floor once.
* 19 A The cracking stops.
20 D GORRAN: You've dug into the nursery.
21 D ALDRETH: We didn't know.
22 D GORRAN: Few do. Put down the picks. Back out, slowly, and thank the mountain it's sleeping.
23 A ¶ Marn drops the sledge.
24 A Ysabeau bows.
25 A Pip, trembling, holds out his torch, and Gorran takes it, and pinches the flame out with two bare fingers.

### SCENE s01766 | INT. PARKING GARAGE - TICKET BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): KOWALCZYK, ROSARIO LEAL, NELL TRUMBO, TEAGUE, BAO PHAM, HENDRIK, KOWAL
* 1 A ¶ A glass cube the size of a closet.
* 2 A A flickering monitor.
* 3 A A coffee-stained logbook.
* 4 A A speaker crackles.
* 5 A Across the lot, rows of parked cars and the red glow of an EXIT sign.
6 A ¶ DET. KOWALCZYK (40s, rumpled, spiral notebook, a dead cigar) squeezes in beside ROSARIO LEAL (30s, rookie detective, ponytail, a camera slung on her shoulder).
7 A In the booth's corner sits NELL TRUMBO (60s, the attendant, cardigan, a thermos, a crossword).
8 A TEAGUE (30s, driver, cap, hunched in a parked van outside, binoculars) watches the stairwell.
9 A BAO PHAM (20s, uniformed patrol officer) paces near the barrier arm.
10 A HENDRIK (50s, a nervous man in a gray suit, a briefcase between his feet) waits on a bench near the elevator.
11 D KOWALCZYK: Anyone been through the barrier since ten?
12 D NELL: Eleven cars. Two vans. One bicycle.
13 D KOWALCZYK: Bicycle?
14 D NELL: Tried to park it in a car space. I charged him.
15 D ROSARIO: Detective, the suit is making a phone call.
16 D KOWALCZYK: Which suit?
17 D ROSARIO: The one on the bench.
18 A ¶ Hendrik is whispering into a phone, hunched, shielding his mouth.
19 A Bao glances at him and catches Rosario's eye.
20 D KOWAL (low, to Rosario): Let him talk. He's the only one who thinks he's hidden.
21 D ROSARIO: Detective, did you want me to--
22 D KOWAL: Stay.
23 D TEAGUE (over earpiece): Kowalczyk, he's moving.
24 D KOWAL: Understood.
25 A ¶ Hendrik stands, briefcase in hand, and walks toward the stairwell.
26 A Bao shifts into his path, hand on the radio.
27 A Hendrik stops.
28 A Teague slides out of the van, closing the door as softly as a sigh.
29 A Rosario lifts her camera, Nell lowers her crossword, and Kowal comes out of the booth like a man leaving a church, and for the space of a held breath, everyone is still.
30 D HENDRIK: I'm not carrying anything.
31 D KOWAL: I haven't asked.
32 D HENDRIK: The briefcase is empty.
33 D NELL (from the booth): Then you won't mind opening it.
34 A ¶ Hendrik looks at her.
35 A She smiles over her thermos.
36 A Rosario steps forward and takes the case from his hand.
37 A He lets her.
38 A She clicks the latches.
* 39 A ¶ Inside, a pair of men's gloves, a paperback, and a pink ticket stub.
40 D ROSARIO: That's it.
41 D KOWAL: What's the stub?
42 D HENDRIK: It's from here. Level three.
43 D NELL: That's my stub.
44 D HENDRIK: It's for my car.
45 D NELL: You don't have a car on level three.
46 D HENDRIK: No. It's for hers.
* 47 A ¶ Silence.
48 A Everyone looks at the stub.
49 A Teague slowly lowers his binoculars.
50 D KOWAL: Whose?
51 D HENDRIK: The woman. The one I was meeting. She's been dead since Tuesday.
52 A ¶ Nell sets down her pen.
* 53 A Bao's radio hisses.
* 54 A Rosario's camera clicks once, by accident, and the sound in the booth is enormous.
55 D KOWAL: Mr. Hendrik, where is her car?
56 D HENDRIK: Level three. Space forty.
57 D KOWAL: Bao. Rosario. With me.
58 A ¶ They go, three of them in a tight little line toward the elevator.
59 A Hendrik doesn't move.
60 A Nell watches him from the glass booth, and when he turns to her, she raises her thermos in a silent toast.
61 D TEAGUE (into his sleeve): Level three. We're on our way.

### SCENE s01767 | INT. DIM SUM KITCHEN - BACK OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): LAI MEI-LING, CAZ DELGADO, MERLE PIKE, PASHA GORSKI
* 1 A ¶ A cramped room behind the steam.
* 2 A A desk strewn with order slips, a rice cooker, a safe the size of a microwave.
* 3 A Bamboo steamers stack to the ceiling.
* 4 A The kitchen noise thuds through the wall.
5 A ¶ LAI MEI-LING (50s, owner, chef's whites, a cleaver stuck in the desk) is counting bills in neat stacks.
6 A CAZ DELGADO (30s, her nephew, gold chain, gum) sits on the safe, swinging his heels.
7 A MERLE PIKE (60s, accountant, bifocals, mismatched socks) stirs a thermos of tea.
8 A PASHA GORSKI (40s, new supplier, expensive coat, a duffel bag at his feet) stands by the door.
9 D LAI: Six thousand.
10 D PASHA: Seven.
11 D LAI: Six. We agreed six.
12 D PASHA: Seven. There was a change.
13 D MERLE (calmly, to the tea): There is always a change.
14 D CAZ: Auntie, don't--
15 D LAI: Caz, quiet.
* 16 A ¶ The kitchen noise outside softens.
17 A Merle takes a sip.
18 A Pasha watches the cleaver in the desk, then the old woman, then the door.
19 D PASHA: You have a nice place.
20 D LAI: It's a restaurant.
21 D PASHA: Your dumplings are very good.
22 D LAI: They are the best.
23 D PASHA: I always say, good food, good business.
24 D CAZ (dual with Lai): You don't say anything, you just show up.
25 D LAI: ^You say nothing, Mr. Gorski, you take.
26 A ¶ They speak at the same moment, in the same tone.
27 A Pasha almost laughs.
28 D PASHA: Family, yes? Such a family.
29 D MERLE: Pasha, the number is six.
30 D PASHA: Seven.
31 D MERLE: Six and a half.
32 D PASHA: Mr. Pike--
33 D MERLE: Six and a half, and a case of the shrimp har gow, and you stop coming on Fridays.
34 D PASHA (smiling): That is a very strange deal.
35 D LAI: It is a fair deal.
36 D PASHA: Why Fridays?
37 D CAZ: Because that's when the inspector comes.
38 D PASHA: What inspector?
* 39 A ¶ A sound in the wall, a soft thump, like a boot.
40 A Merle sets the thermos down.
41 A Lai pulls the cleaver out of the desk and lays it across her knees.
42 A Caz slides off the safe.
43 D LAI: Mr. Gorski. How many men did you bring tonight?
44 D PASHA: One. Me.
45 D LAI: You should have said two.
46 D PASHA: Why?
* 47 A ¶ The door to the kitchen swings open on its own.
* 48 A A rush of steam rolls through the room, and beyond it the kitchen is entirely, unnaturally still.
* 49 A Not a pan clatters.
50 D CAZ (whisper): Auntie. It's Friday.
51 D LAI: I know what day it is.
52 A ¶ Pasha kicks his duffel bag.
* 53 A It falls open, and the money inside is stacks of yellow order slips.
54 D MERLE (sighing): Six and a half.

### SCENE s01768 | INT. JURY ROOM - FLOODED COURTHOUSE - NIGHT
Detected names (may be incomplete or contain aliases): HATTIE BOONE, SUNIL RAO, BEVERLY OSEI, ROMAN VOLKOV, ESTELLE FARRIER
* 1 A ¶ Two inches of black water on the floor.
* 2 A A long mahogany table above it.
3 A Five jurors sit with their feet on rungs, trousers rolled.
* 4 A A single lantern on the table.
5 A ¶ HATTIE BOONE (60s, foreperson, cardigan, reading glasses) taps a verdict form.
6 A SUNIL RAO (30s, jacket on his head against the drip).
7 A BEVERLY OSEI (40s, nurse, arms crossed).
8 A ROMAN VOLKOV (50s, plumber, boots, a flask).
9 A ESTELLE FARRIER (70s, hat with a veil, hands folded).
10 D HATTIE: We've been in here nine hours.
11 D SUNIL: Ten.
12 D BEVERLY: Eleven, if you count the lunch.
13 D HATTIE: Nobody counts the lunch.
14 D ROMAN (raising the flask): I count the lunch.
15 D HATTIE: Roman.
16 D ROMAN: It's water.
17 D HATTIE: It isn't.
18 A ¶ Hattie holds out her hand.
19 A Roman gives her the flask.
20 A She sniffs, wrinkles her nose, and sets it on the table.
21 D HATTIE [CONT'D]: Show of hands. Guilty.
22 A ¶ Sunil raises his.
23 A Roman raises his.
24 A Beverly does not.
25 A Estelle does not.
26 A Hattie does, slowly.
27 D HATTIE [CONT'D]: Three to two.
28 D BEVERLY: She did it.
29 D ESTELLE: She did not.
30 D SUNIL: Who? Who did it?
31 D BEVERLY: The defendant, Sunil. The woman. She said it herself.
32 D ESTELLE: She said she was sorry. That's not the same thing.
* 33 A ¶ Water laps at the legs of the table.
* 34 A The lantern flickers.
35 A Hattie lifts her eyes, and stops.
36 D HATTIE: Where is the foreman's chair?
37 A ¶ They turn.
* 38 A At the head of the table, the chair is pulled out.
39 A Somebody has taken the sixth place.
* 40 A A wet gown lies folded on the seat.
* 41 A Nobody saw anyone enter.
42 D ESTELLE: Oh, dear.
43 D BEVERLY: Hattie. There's only five of us.
44 D HATTIE: Count again.
45 D SUNIL: One, two, three, four, five. Five.
46 D ESTELLE: Six, dear. You forgot yourself.
47 A ¶ Sunil looks down.
* 48 A His reflection in the black water, perfectly still, looks back up at him and does not blink.
49 D SUNIL: Okay. I want to change my vote.

### SCENE s01769 | INT. DRIVER'S LICENSE OFFICE - WAITING AREA - DAY
Detected names (may be incomplete or contain aliases): ERNEST PLUMLEY
* 1 A ¶ Plastic chairs bolted in rows.
* 2 A A take-a-number machine.
* 3 A A flag.
* 4 A A sign: PLEASE HAVE ALL DOCUMENTS READY.
5 A ¶ ERNEST PLUMLEY (60s, bow tie, blazer with elbow patches, a folder of papers held in both hands) sits in the exact middle of the front row.
6 A He aligns his folder with the edge of his knee.
7 A He checks his watch.
8 A He checks his ticket: B-114.
* 9 A The overhead display reads B-103.
10 A ¶ He squares his shoulders and stares at the display with immense confidence.
* 11 A ¶ The display ticks.
* 12 A B-104.
13 A ¶ He nods.
14 A He smiles at nobody.
15 A He pulls a small cassette recorder from his blazer pocket and presses record.
16 D ERNEST (into recorder): Note to self. Today I renew my license. A calm man. A prepared man.
17 A ¶ He clicks it off, pockets it, and checks the folder again, thumbing each page in order.
18 A His smile does not waver.
* 19 A ¶ The display ticks.
* 20 A B-105.
21 A ¶ His eyes flick to a bank of windows.
* 22 A A clerk, unseen, slams a stamp.
23 A Ernest flinches, covers it with a cough, and straightens his bow tie.
* 24 A ¶ The display ticks.
* 25 A B-106.
26 A Ernest's knee begins to bounce.
27 A He holds his folder down with his free hand to still it.
28 A ¶ He pulls out the recorder again.
29 A He presses play.
30 D ERNEST [V.O.] (recorded): Note to self. Today I renew my license. A calm man. A prepared man.
31 A ¶ He listens to his own voice, serene.
32 A He rewinds a few seconds and plays it again.
33 A He nods to it, as to a trusted colleague.
* 34 A ¶ The display ticks.
* 35 A B-107.
36 A Ernest rises, tests his legs, sits again.
37 A ¶ He opens his folder.
38 A He turns a page.
39 A He freezes.
40 A He turns another page, and another, faster.
41 A His face drains of color, one shade at a time.
42 A ¶ He pulls out the recorder with trembling fingers.
43 D ERNEST (into recorder): Note to self.
44 A ¶ He stops.
45 A His lip works.
46 D ERNEST [CONT'D] (into recorder): The proof of residence is on the kitchen table.
47 A ¶ He clicks it off.
48 A He looks at the display.
* 49 A B-108.
50 A He looks at his ticket.
* 51 A B-114.
52 A ¶ Slowly, with enormous dignity, he gets up, tucks the folder under his arm, and walks to the door.
53 A Halfway, he stops, turns, and returns to his seat, and sits, and folds his hands, and stares at the display with immense confidence.

### SCENE s01770 | INT. ABANDONED SALT MINE - CURLING SHEET - NIGHT
Detected names (may be incomplete or contain aliases): ODALYS FERREIRA, BRUNO KATZ, TAMSIN OYELARAN, KOFI, WREN, ISHAAN
* 1 A ¶ A white rock hall lit by work lamps strung from roof bolts.
* 2 A Brine has been frozen into a ribbon of ice sixty feet long.
* 3 A The air tastes of metal.
4 A ¶ ODALYS FERREIRA, forties, crouches at the hack with her broom held like a rifle.
5 A She does not look at the score chalked on the wall.
* 6 A Nobody does.
7 A ¶ BRUNO KATZ, her skip, broad as a doorway, stands in the far house and taps the ice with his broom.
8 A He taps it again.
9 A He taps it again.
10 A ¶ TAMSIN OYELARAN, nineteen, and KOFI, thirties, a union jacket zipped to the chin, crouch on either side of the lane, brooms raised, breath smoking.
11 D ODALYS (not loud): Hold.
12 A ¶ Odalys slides.
* 13 A The stone leaves her hand and the whole hall leans after it.
14 A Tamsin and Kofi run beside it, sweeping in a frantic double rhythm, their brooms drumming the ice, each trying to outpace the other.
15 D BRUNO: Hard. Hard.
16 A ¶ At the rail, WREN, a girl of ten in a hard hat three sizes too big, grips the cold pipe with both hands.
17 A ISHAAN, her father, sixty, puts his palm on the back of her helmet and neither of them blinks.
* 18 A ¶ The stone slows.
19 A Tamsin and Kofi both stop sweeping at the same instant and stand there, brooms hovering, like men who have seen a wire pulled tight.
* 20 A ¶ The stone creeps, touches the button, and settles against the opposing rock with a small clean click.
* 21 A ¶ Nobody cheers.
22 A Bruno lowers his broom and sets it very carefully against the wall.
23 A Odalys stands, takes off one glove, and puts it back on.
24 A Wren lets go of the pipe and her fingers stay curled in the shape of it.
25 D ISHAAN (quietly): Again.

### SCENE s01771 | INT. MOBILE CLINIC - CONVERTED BOOKMOBILE - DAY
Detected names (may be incomplete or contain aliases): HALVORSEN LUNDQVIST, NURSE PIA OKONKWO, ELIAS BRANDT, DOROTA BRANDT
* 1 A ¶ A city bookmobile gutted and refitted.
* 2 A Shelves that once held paperbacks now hold gauze and saline.
* 3 A A folding exam bed.
* 4 A A hand-lettered sign: CLOSE THE DOOR SOFTLY.
5 A ¶ DR. HALVORSEN LUNDQVIST, fifties, tired, sits on a stool with a blood pressure cuff in her lap.
6 A NURSE PIA OKONKWO, thirties, wipes down a tray.
7 A ELIAS BRANDT, seventy, shirtless to the waist, sits on the exam bed.
8 A His wife MRS. DOROTA BRANDT, also seventy, stands by the door with her purse held in front of her like a shield.
9 A ¶ Elias grips the bed's edge.
10 A Dr. Lundqvist and Pia look at the monitor at the same time.
11 A Pia reaches for the cuff.
12 A The doctor reaches for it too.
13 A Their hands meet on it and they both stop.
14 D DR. LUNDQVIST: Go ahead.
15 A ¶ Pia wraps the cuff around Elias's arm.
16 A Dorota takes a step in.
17 A Elias lifts his free hand to stop her.
18 D ELIAS: I'm fine.
19 D DOROTA: You're grey.
20 D ELIAS: It's the light in here.
21 D DR. LUNDQVIST: It's not the light, Mr. Brandt.
22 A ¶ Pia pumps the bulb.
23 A Everyone watches the needle fall.
24 D PIA: One-sixty over ninety-eight.
25 D DR. LUNDQVIST: That's better than it was twenty minutes ago.
26 D DOROTA: What was it twenty minutes ago?
27 D DR. LUNDQVIST: One-ninety over a hundred and ten.
28 A ¶ Dorota sits on the bench seat under the window.
29 A She puts her purse on her knees and then, after a moment, on the floor.
30 D DOROTA: He wouldn't come in. For three days, he wouldn't come in.
31 D ELIAS: I had the garden.
32 D DOROTA: You had a chest like a drum and you had the garden.
33 D ELIAS: Dorota.
34 D DOROTA: Don't Dorota me in front of the nurse.
35 D PIA: It's all right, Mrs. Brandt.
36 D DOROTA: It isn't, though. I'm sorry. It isn't.
37 D DR. LUNDQVIST: Mr. Brandt, how long have you had the pain in your left arm?
38 D ELIAS: Since Tuesday.
39 D DOROTA: Since Sunday.
40 D ELIAS: Since Sunday. Fine.
41 D DR. LUNDQVIST: And the shortness of breath?
42 D ELIAS: When I climb the stairs.
43 D DOROTA: When he climbs anything.
44 D PIA: We're going to do an ECG. It's painless. Some stickers on your chest.
45 D ELIAS: I know what an ECG is.
46 D PIA: I know you know.
47 A ¶ Pia opens a drawer and peels three electrodes from a sheet.
48 A Elias watches her hands.
49 D ELIAS: My brother had one of those.
50 D DR. LUNDQVIST: What happened?
51 D ELIAS: He's dead.
52 D DOROTA: Elias.
53 D ELIAS: You asked.
54 D DR. LUNDQVIST: I did. I'm sorry for the loss. When was this?
55 D ELIAS: Nineteen ninety-one. Heart attack at fifty-four. He was cutting a hedge.
56 D DR. LUNDQVIST: That is useful for me to know. I'm going to write it down.
57 A ¶ Dr. Lundqvist writes.
58 A Pia presses the stickers to his chest, left, right, low.
59 D PIA: Cold?
60 D ELIAS: Everything's cold.
61 D DOROTA: The heater's broken. They said Thursday.
62 D PIA: They said Thursday last Thursday.
63 D DOROTA: They did.
* 64 A ¶ A small laugh passes through the bookmobile, the first.
* 65 A It dies quickly.
66 D DR. LUNDQVIST: Okay. Lie back for me.
67 A ¶ Elias lies back.
68 A Pia clips the leads on.
* 69 A The monitor draws a line, then another, then a rhythm.
70 A ¶ Dr. Lundqvist and Pia both lean toward the screen.
71 A They look at each other.
72 A Neither speaks.
73 A Dr. Lundqvist exhales through her nose.
74 D DR. LUNDQVIST [CONT'D]: No ST elevation.
75 D PIA: No.
76 D DR. LUNDQVIST: That's good.
77 D DOROTA: What does that mean?
78 D DR. LUNDQVIST: It means he is not having a heart attack right now. It does not mean he did not have a small one on Sunday.
79 D DOROTA: Can you tell?
80 D DR. LUNDQVIST: We can draw blood. It takes about an hour at the hospital.
81 D ELIAS: I'm not going to the hospital.
82 D DOROTA: You are going to the hospital.
83 D ELIAS: Dorota.
84 D DOROTA: You are going to the hospital and I am going to sit in the plastic chair and hold your coat.
85 D ELIAS: Who'll feed the cat?
86 D DOROTA: The cat has eaten since nineteen eighty-eight without you.
87 D ELIAS: That's a lie. I fed it this morning.
88 D DOROTA: That is what I mean.
89 A ¶ Elias laughs, once, and winces, and presses a hand flat to his sternum.
90 D DR. LUNDQVIST: Stop laughing. Pia, aspirin, please. Chewed, not swallowed.
91 D PIA: Right away.
92 D DR. LUNDQVIST: And call the ambulance. Tell them stable, chest pain, seventy-year-old male.
93 A ¶ Pia takes a phone from the shelf.
94 A Dorota rises, goes to the bed, and puts her hand over her husband's hand on his chest.
95 A He looks at the ceiling.
96 A She looks at the monitor.
97 D DR. LUNDQVIST [CONT'D]: Mrs. Brandt, he'll be fine for the next little while. I'd like you to sit with him.
98 D DOROTA: I am sitting with him.
99 D DR. LUNDQVIST: Yes. Thank you.
100 D PIA (into phone): Hello? Yes. Mobile clinic on Ostrow Street, by the bakery.
101 D ELIAS (to Dorota): Don't let them touch my garden tools.
102 D DOROTA: Nobody wants your garden tools.
103 D ELIAS: The good trowel.
104 D DOROTA: I will guard the trowel with my life.
105 A ¶ Pia hangs up and hands Elias an aspirin.
106 A He puts it in his mouth and grimaces.
* 107 A The monitor goes on drawing its line.

### SCENE s01772 | INT. LIGHTHOUSE LAMP ROOM - NIGHT (1887)
Detected names (may be incomplete or contain aliases): SILAS PENHALLOW, THADDEUS MARROW, HOBART VANE
* 1 A ¶ A brass and glass chamber at the top of a stone tower, the great lens turning slowly above.
* 2 A Wind hums in the lantern panes.
3 A ¶ SILAS PENHALLOW, fifties, the head keeper, stands at the logbook with a pen.
4 A THADDEUS MARROW, twenties, his assistant, kneels at the lens with an oilcan.
5 A HOBART VANE, forties, a Trinity House inspector in a wet greatcoat, stands in the doorway with his hat in his hands.
6 D SILAS: Mr. Vane, you've climbed a hundred and forty steps in a gale to tell me my lamp is dim.
7 D HOBART: I climbed them to see whether it was.
8 D THADDEUS: It's not dim, sir. Silas trims the wick every hour.
9 D SILAS: Thaddeus, you needn't defend me.
10 D HOBART: He needn't, but he does, Mr. Marrow. That's a good habit in a young man.
11 A ¶ Thaddeus wipes the oilcan on his sleeve and does not look up.
12 A Silas closes the logbook.
13 D SILAS: Hobart, you'll take tea before you go down.
14 D HOBART: I'll take it standing.
15 A ¶ Silas and Hobart face each other.
16 A Neither moves toward the kettle.
17 A Thaddeus stands, crosses to it, and lights the spirit stove.
* 18 A Behind him the lens turns, and the beam sweeps the three of them with white light, and goes out over the black water.

### SCENE s01773 | EXT. DRIVE-IN THEATER - CONCESSION ROOF - NIGHT
Detected names (may be incomplete or contain aliases): DEWEY HALLORAN, LONNIE VASQUEZ, FRANKIE DUBOIS
* 1 A ¶ A flat tar roof above the snack bar.
* 2 A Beyond the low parapet, rows of parked cars face a giant screen flickering with a western none of them are watching.
* 3 A Moths swarm the projector beam.
4 A ¶ DEWEY HALLORAN, seventeen, lean, in a rented bow tie, sits cross-legged with a flashlight in his teeth.
5 A LONNIE VASQUEZ, seventeen, stocky, in a usher's jacket two sizes too small, sits beside him eating popcorn from a paper tub.
6 A FRANKIE DUBOIS, sixteen, wiry, with grease under his nails, stands at the edge and looks down.
7 D DEWEY: Everybody got their cut of the money?
8 D LONNIE: I got mine. I got it in my sock.
9 D FRANKIE: Why's it in your sock?
10 D LONNIE: Because that's where my mother never looks.
11 D DEWEY: Fine. Frankie, you're sure about the key?
12 D FRANKIE: I made it myself. It'll open any projection booth in the county.
13 D LONNIE: The county? Frankie, we've got one booth.
14 D FRANKIE: It's a figure of speech.
15 D DEWEY: It's a good key, Lonnie. Leave him alone.
16 D LONNIE: I'm only saying.
17 D FRANKIE: You're always only saying.
18 D DEWEY: All right, listen. Tonight we show them the thing we made. Everybody's out there, the whole school, my father, Mr. Paget. After the intermission cartoon, it plays. Three minutes. That's all.
19 D LONNIE: My mother will see it.
20 D DEWEY: Your mother will love it.
21 D LONNIE: She's going to see me in it, Dewey. Me, with the cape.
22 D FRANKIE: You look great in the cape.
23 D LONNIE: I look like a tablecloth.
24 D DEWEY: You look like a hero.
25 D LONNIE: A tablecloth hero.
26 A ¶ Lonnie stuffs a fistful of popcorn into his mouth.
27 A Dewey takes the flashlight from his teeth and clicks it off.
28 D FRANKIE: What if it doesn't work?
29 D DEWEY: It'll work.
30 D FRANKIE: What if the reel jams?
31 D LONNIE: What if it plays backward?
32 D DEWEY: Then it'll be a different movie.
33 D FRANKIE: You always say that.
34 D DEWEY: Because it's always true.
* 35 A ¶ Below them, the western reaches a gunfight.
* 36 A A hundred car horns honk in approval, and the roof hums with it.
37 D LONNIE: That's not even a good one.
38 D FRANKIE: Mine's better.
39 D DEWEY: Ours is better.
40 D LONNIE: Ours.
41 A ¶ Frankie turns from the edge and sits between them.
42 A The three of them look out over the lot.
* 43 A Somewhere a screen door bangs.
44 D FRANKIE: What do we do after?
45 D DEWEY: After what?
46 D FRANKIE: After they see it.
47 D DEWEY: We go home.
48 D LONNIE: We go home and pretend we weren't here.
49 D FRANKIE: And then?
50 D DEWEY: Then we make another one.
51 D LONNIE (through popcorn): A longer one.
52 D FRANKIE: With real stunts.
53 D DEWEY: With no capes.
54 D LONNIE: No, no, the cape stays.
* 55 A ¶ The western ends.
* 56 A The screen goes white, then black.
* 57 A A tinny voice from the loudspeakers announces the intermission.
* 58 A A dancing hot dog appears on screen, singing.
59 A ¶ Dewey stands.
60 A Lonnie stands.
61 A Frankie is already on his feet.
62 D DEWEY [CONT'D]: Frankie. The booth.
63 D FRANKIE: Going.
64 D LONNIE: I'm coming with you.
65 D DEWEY: Both of you, go. I'll watch the lot.
66 D FRANKIE: Don't let anybody leave.
67 D DEWEY: They won't.
68 A ¶ Frankie vaults over the roof's far edge to the ladder.
69 A Lonnie is on his heels.
70 A Dewey stays at the parapet, shoulders squared, watching a hundred cars and the dancing hot dog.
71 A He lifts the flashlight and holds it like a torch.
72 D DEWEY [CONT'D] (softly): Now.
* 73 A ¶ The loudspeakers crackle.
* 74 A The screen flickers and goes dark.
* 75 A For one long second the whole lot is silent, a hundred windshields reflecting nothing.
* 76 A ¶ Then a projector lamp flares in the booth and a ragged, hand-cut image leaps up on the screen: a boy in a tablecloth cape, running.
77 A ¶ Dewey grins.
* 78 A Down in the lot, a horn honks.
* 79 A Then another.
* 80 A Then all of them.

### SCENE s01774 | INT. TRAIN STATION LEFT-LUGGAGE OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): CORDELIA MBEKI, AUGUSTINE PELLETIER, RAFAELA DOMINGUES
* 1 A ¶ Rows of steel shelves.
* 2 A Suitcases, cello cases, a taxidermy owl in a crate.
* 3 A A clock above the counter reads 11:52.
4 A ¶ CORDELIA MBEKI, thirties, stands at the counter with a claim ticket.
5 A She slides it across.
6 A Behind the counter, AUGUSTINE PELLETIER, an older clerk, takes it without looking and shuffles away into the shelves.
7 A ¶ She waits.
8 A Then the door behind her opens and RAFAELA DOMINGUES walks in, shaking rain off her coat.
9 A She stops when she sees her.
10 A ¶ She doesn't move.
11 A Cordelia turns her head and stops as well.
* 12 A The rain on the roof is the only sound.
13 D RAFAELA: You came.
14 D CORDELIA: I said I would.
15 A ¶ She steps to the counter and sets down a small leather case.
16 A She doesn't open it.
17 A Cordelia looks at the case, then at her.
18 D CORDELIA [CONT'D]: That's the one?
19 D RAFAELA: That's the one.
20 A ¶ She pushes it an inch toward her.
21 A Cordelia puts a finger on the lid and takes it away again.
22 D CORDELIA: I thought you'd have thrown it into the river by now.
23 D RAFAELA: I thought about it.
24 D CORDELIA: What stopped you?
25 D RAFAELA: The river was cold.
26 A ¶ Augustine returns with a battered suitcase.
27 A He sets it on the counter and looks from one to the other.
28 A She lifts her eyes to meet his.
29 D AUGUSTINE: Ticket three-oh-seven.
30 D CORDELIA: That's mine.
31 A ¶ She grips the handle.
32 A Rafaela lays a hand on the other end of it.
33 A They stand with the suitcase between them, both holding on.
34 D RAFAELA: Your train is at midnight.
35 D CORDELIA: It is.
36 D RAFAELA: Leave it.
37 D CORDELIA: I can't.
38 A ¶ Rafaela lets go.
39 A She picks up her leather case and holds it against her chest.
40 A Cordelia drags the suitcase off the counter, and at the door she pauses with her back turned.
41 D CORDELIA [CONT'D]: Keep the case. Please.
42 A ¶ She goes out into the rain.
43 A Rafaela stays where she is until the clock reads 11:58, then lays the case on the counter in front of the clerk.
44 D RAFAELA: Could you hold this for me?
45 A ¶ Augustine takes it and writes out a ticket.

### SCENE s01775 | INT. RIVER ROCK QUARRY - FIRST-AID TENT - DAY
Detected names (may be incomplete or contain aliases): SADIE TREMBLAY, ARTUR NOWAK, JUNE ABERNATHY
* 1 A ¶ A canvas tent pitched at the lip of a limestone quarry.
* 2 A Dust drifts through the open flap.
* 3 A A stretcher bed, a cooler of saline bags, a battery lantern.
4 A ¶ DR. SADIE TREMBLAY, forties, crouches over a pale quarryman, ARTUR NOWAK, who lies on the stretcher clutching his thigh.
* 5 A A tourniquet is tight above the knee.
6 A A young medic, JUNE ABERNATHY, kneels at his side with a roll of gauze.
7 A ¶ She is shaking.
8 A Dr. Tremblay takes the gauze from her without a word and presses it to the wound.
9 A Artur howls through his teeth.
10 D DR. TREMBLAY: Pressure. Hold it right there.
11 D JUNE: He's losing it. He's going grey.
12 A ¶ He grabs for June's wrist and she grabs his.
13 A They hold each other's grip.
14 D ARTUR: Don't let me go.
15 D JUNE (over him): I've got you.
16 D DR. TREMBLAY: Artur, look at me.
17 D ARTUR: I can't feel my foot.
18 A ¶ Dr. Tremblay cuts the trouser leg with scissors.
19 A She reads the wound, and the tension in her shoulders eases by an inch.
20 D DR. TREMBLAY: It missed the artery. Tourniquet did its job. June, loosen it a quarter turn.
21 A ¶ June turns the windlass, her fingers steadying as she works.
22 A Artur lets his head fall back.
23 D ARTUR: Is it bad?
24 D DR. TREMBLAY: It's a deep gash. It's going to hurt for weeks and you're going to keep the leg.
25 A ¶ He closes his eyes and laughs, a cracked sound.
26 A June sits back on her heels and wipes her face with the back of a bloody glove.

### SCENE s01776 | INT. GREENHOUSE WEDDING TENT - NIGHT
Detected names (may be incomplete or contain aliases): NAOMI ADEYEMI-BRAUN, SEBASTIAN KOWALCZYK, PRIYA SOLANKI, FATHER LEOPOLD GAUDET
* 1 A ¶ Fairy lights.
* 2 A Orchids.
* 3 A A cake leaning slightly.
* 4 A The band has stopped.
5 A Guests have drifted outside.
6 A ¶ NAOMI ADEYEMI-BRAUN, thirties, in a champagne gown, stands at the cake table with a knife and no cake cut.
7 A Across from her, SEBASTIAN KOWALCZYK, thirties, bow tie hanging loose, holds two flutes and gives neither of them up.
8 A ¶ Beside them, a bridesmaid, PRIYA SOLANKI, twenties, freezes mid-reach for a canapé.
9 A Behind, the officiant, FATHER LEOPOLD GAUDET, sixty, dozes upright on a folding chair.
10 A ¶ Naomi sets the knife down.
11 A Sebastian sets a glass down.
12 A They both pick up their own again.
13 A She drinks.
14 A He doesn't.
15 D NAOMI: You were always going to leave.
16 D SEBASTIAN: I'm standing right here.
17 D PRIYA (low): Guys.
18 A ¶ Naomi and Sebastian turn their heads together, then back.
19 A Priya retreats a step, canapé in hand.
20 A Father Gaudet wakes, blinks, smiles at the ceiling, and is out again.
21 D NAOMI: I meant tomorrow. Next month. Whenever it gets hard.
22 D SEBASTIAN: It's already hard.
23 A ¶ She takes off her ring, looks at it, puts it on the cake table.
24 A He steps forward, picks it up, and slides it back onto her finger.
25 A She lets him.
26 A Neither says anything.
27 D PRIYA: Should I cut the cake?
28 D NAOMI: No.
29 D SEBASTIAN: Yes.
30 A ¶ They look at each other.
31 A A small laugh escapes Naomi.
32 A Sebastian's mouth twitches.
33 A Priya picks up the knife and cuts, a crooked first slice, and hands the plate to Father Gaudet, who wakes and takes it.

### SCENE s01777 | INT. DRIVING SCHOOL - SIMULATOR ROOM - DAY
Detected names (may be incomplete or contain aliases): HECTOR PRZYBYLSKI, MILDRED OKAFOR, TRAVIS BELLWETHER
* 1 A ¶ A cramped room with a cardboard dashboard and a monitor.
* 2 A A fake steering wheel.
* 3 A A banner: SAFETY IS NO ACCIDENT.
4 A ¶ HECTOR PRZYBYLSKI, fifties, instructor, sits beside a student in the driver's seat.
5 A MILDRED OKAFOR, seventies, white-knuckled, wears sunglasses indoors.
6 D HECTOR: Now brake.
7 D MILDRED: I am braking.
8 D HECTOR: You're accelerating.
* 9 A ¶ On the monitor, a virtual crosswalk.
* 10 A A virtual pedestrian leaps clear.
11 D HECTOR [CONT'D]: That's the third one.
12 D MILDRED: He was jaywalking.
13 D HECTOR: He was a mailbox.
* 14 A ¶ The door opens.
15 A TRAVIS BELLWETHER, thirties, a state inspector with a clipboard and a lanyard, steps in.
16 A He's sweating.
17 D TRAVIS: Mr. Przybylski? Your license renewal inspection. Early.
18 D HECTOR: Early.
19 D MILDRED: Early.
20 A ¶ Hector and Mildred swivel to look at Travis.
21 A He looks at the monitor, where a virtual school bus flips into a virtual lake.
22 D TRAVIS: Is that a pass or a fail?
23 D HECTOR: It's a learning experience.

### SCENE s01778 | INT. GRAIN SILO - BASE LEVEL - NIGHT
Detected names (may be incomplete or contain aliases): DELPHINE CROSBY, MAX, ODUYA, OLD ENRICO FABBRI, STRANGER, ANSELM
* 1 A ¶ Rust-streaked concrete.
* 2 A A single hanging bulb swings.
* 3 A Wheat dust hangs in the beam.
* 4 A Somewhere above, metal ticks.
5 A ¶ DELPHINE CROSBY, thirties, holds a flashlight steady.
6 A MAXWELL "MAX" ODUYA, twenties, kneels by a hatch with a crowbar.
7 A OLD ENRICO FABBRI, seventies, sits on an upturned bucket.
8 A A STRANGER stands motionless at the foot of the ladder, face in shadow.
9 D DELPHINE: Everyone. Stay where you are.
10 A ¶ Nobody moves.
* 11 A The ticking stops.
12 D MAX (to himself): It's the pipes. It's just the pipes.
13 D ENRICO (to Max): Boy. Put the bar down.
14 A ¶ Max doesn't.
15 A The Stranger takes one slow step into the light.
* 16 A Wheat dust clings to the shoulders of his coat.
17 A His eyes do not blink.
18 D STRANGER: I've been up there a long time.
19 D DELPHINE (to the Stranger): Who are you?
20 D STRANGER: Anselm. My name was Anselm.
* 21 A ¶ The bulb dies.
* 22 A In the dark: the ladder groans.
* 23 A Delphine's flashlight snaps back on.
24 A ¶ ANSELM is now six feet from Max, who has raised the crowbar.
* 25 A The wheat around his boots is moving.
26 D ANSELM: It remembers me.
27 D ENRICO (whisper): Don't let him touch the grain.
28 D DELPHINE (to the group): Back to the door. All of you. Now.
29 A ¶ Max swings.
30 A Anselm catches the bar in one hand.
* 31 A The silo shudders, and the floor of wheat begins to rise.

### SCENE s01779 | INT. CASINO BOAT - COUNTING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): SAUL VERDUGO, MARISOL TREJO, BAXTER KWAN, DEZ, MOURAD, LUCILLE FONTAINE, GABRIEL VERDUGO
* 1 A ¶ A windowless steel room that rocks faintly with the river.
* 2 A Money cages, bins of chips, a long table piled with banded cash.
* 3 A A brass clock ticks too loudly.
4 A ¶ SAUL VERDUGO, sixties, the pit boss, sits at the head of the table with his hands flat.
5 A Facing him are MARISOL TREJO, thirties, with a leather folio; BAXTER KWAN, forties, in a damp raincoat; and DESMOND "DEZ" MOURAD, fifty, whose jacket hangs open to show a holster.
6 A At the cage, a cashier, LUCILLE FONTAINE, forties, has frozen with a stack of twenties in her hand.
7 A In the corner by the door, a boy, GABRIEL VERDUGO, sixteen, holds a mop and says nothing.
8 D SAUL: Count it again.
9 D MARISOL: We counted it twice.
10 D SAUL: Then a third time won't hurt.
11 D BAXTER: It's short two hundred thousand. You can count until the boat sinks.
12 D SAUL: The boat is not going to sink, Mr. Kwan.
13 D DEZ: Somebody in this room is lying.
14 D MARISOL: Somebody on this boat is lying.
15 D DEZ: That's what I said.
16 D SAUL: No, it isn't. You said this room. This room has six people in it, one of them a child.
17 D GABRIEL: I'm sixteen.
18 D SAUL: You're a child.
19 D BAXTER: The boy doesn't count.
20 D MARISOL: Everyone counts. That's the point.
21 D DEZ: Then let's start with the cage.
22 D LUCILLE: Don't look at me.
23 D DEZ: I'm looking at everyone.
24 D SAUL: Lucille, put down the money.
25 A ¶ Lucille sets the stack on the counter.
26 A Dez rises.
27 A Baxter rises.
28 A Marisol closes her folio.
29 A Saul lifts one hand, and the others stop where they stand.
30 D SAUL [CONT'D]: Sit down. All of you. Sit down and we will do this like family.
31 A ¶ Gabriel drops the mop.
* 32 A The clatter makes every head turn.
33 A Dez's hand goes to the holster.
34 A Lucille ducks behind the cage.
35 A Baxter backs against the wall.
36 A Marisol does not flinch.
37 A ¶ Saul looks at his grandson, and the old man's face goes slack.

### SCENE s01780 | INT. MUSEUM OF CLOCKS - VAULT CORRIDOR - NIGHT
Detected names (may be incomplete or contain aliases): MAN, WOMAN, MARCUS
* 1 A ¶ A hush of ticking.
* 2 A Glass cases of pocket watches line the walls.
* 3 A At the end, a steel vault door the color of old pewter.
4 A ¶ A MAN in a night guard's uniform kneels at the door with a stethoscope pressed against the lock.
5 A A WOMAN in a cleaner's smock stands behind him with a mop bucket she has not moved in several minutes.
6 D MAN: Quiet.
7 D WOMAN: I am being quiet.
8 D MAN: You're breathing.
9 D WOMAN: I'm told it's mandatory.
10 A ¶ He turns the dial a hair.
* 11 A Tick.
* 12 A Tick.
* 13 A The stethoscope clicks.
14 A He sits back.
15 D MAN [CONT'D]: That's three. One more.
16 D WOMAN: You said that two numbers ago.
17 D MAN: I was optimistic.
* 18 A ¶ Footsteps echo far away.
19 A Both freeze.
* 20 A The footsteps stop.
* 21 A A radio crackles in the distance and goes silent.
22 D WOMAN (whispering): How long?
23 D MAN: Ninety seconds.
24 D WOMAN: Till what?
25 D MAN: Till he comes round again.
26 A ¶ She lifts the mop from the bucket like a spear.
27 A He shakes his head and takes it from her, sets it against the wall, and presses the stethoscope back to the lock.
* 28 A ¶ The dial turns.
* 29 A A deep, final clunk.
* 30 A The door sighs open an inch.
31 D MAN [CONT'D]: Got it.
32 D WOMAN: Of course you did.
* 33 A ¶ Inside, on a velvet plinth, a single gold clock the size of a fist ticks serenely.
34 D MAN: Sixteen-forty-two. Made for a king who never lived to wind it.
35 D WOMAN: Oh, I like him already.
36 A ¶ She steps forward.
* 37 A A red laser blinks across the doorway at ankle height.
38 A They both see it at the same moment.
39 D MAN: I don't remember that.
40 D WOMAN: I don't remember that.
41 D MAN (to himself): Of course. Of course there's a laser.
42 A ¶ The woman crouches, studies it, and pulls a compact mirror from her pocket.
43 A She holds it at an angle.
* 44 A The beam bends and strikes the wall.
45 D WOMAN: There. Satisfied?
46 D MAN: Reasonably.
47 A ¶ She steps through.
48 A The man follows, stepping high.
49 A ¶ At the plinth, she lifts the gold clock.
* 50 A It stops ticking.
* 51 A ¶ Silence.
52 A They look at each other.
53 D MAN [CONT'D]: That's not good.
54 A ¶ She leans in and reads the name stitched on his guard's jacket.
55 D WOMAN: Marcus?
56 A ¶ The man closes his eyes.
57 D MARCUS (whisper): Don't start.
58 D WOMAN: You told me your name was Gil.
59 D MARCUS: It's a long night.
* 60 A ¶ Footsteps again, closer now.
61 A Marcus takes the clock from her hands, sets it back on the plinth, and the ticking resumes.
62 A They look at it, then at each other.
63 A Marcus smiles, nervous and delighted.
64 D MARCUS [CONT'D]: Run.

### SCENE s01781 | INT. COUNTY FAIR - PIE TENT - AFTERNOON
Detected names (may be incomplete or contain aliases): GIRL, TALL MAN, WOMAN, LOUISE, WALTER, POPPY
* 1 A ¶ Long trestle tables under a striped canvas roof.
* 2 A Judges' placards, wasps, and a hundred pies cooling in rows.
* 3 A A fan turns without effect.
4 A ¶ A GIRL of nine in a gingham dress stands on a milk crate at the end of the nearest table, nose level with the pies.
5 A A TALL MAN in a pressed apron stands beside her, holding a rolling pin as though it might go off.
6 A Across the tent, a WOMAN in a sunhat leans on a pole and watches them with tight, amused eyes.
7 D GIRL: Daddy, they're judging in four minutes.
8 D TALL MAN: I know, sweet pea.
9 D GIRL: Is ours the one with the crust?
10 D TALL MAN: They all have crusts.
11 D GIRL: The one with the extra crust.
12 A ¶ He looks down at her.
13 A She looks up at him.
14 A The Woman in the sunhat pushes off the pole and strolls over, ducking a wasp, and the Girl waves while the Tall Man straightens his apron and drops the rolling pin, and the Girl catches it before it hits the ground.
15 D GIRL [CONT'D]: Mama!
16 A ¶ The Woman kisses her on the head, takes the rolling pin from her, rests it across the table, then takes the Tall Man's hand and turns it over to look at the flour on his palm.
17 D LOUISE: Walter Brockhurst. You are covered in flour.
18 D WALTER: I'm a baker, Louise.
19 D LOUISE: You're a plumber.
20 D WALTER: I'm a baker today.
21 D GIRL: Mama, Daddy's nervous.
22 D WALTER: Daddy is not nervous.
23 D GIRL: He's holding the pie with two hands.
24 A ¶ Walter looks down.
25 A He is holding the pie in both hands, as though it were a small and fragile pet.
26 A He puts it on the table.
27 D LOUISE: Then let's let Poppy decide.
28 D POPPY: Me?
29 D LOUISE: You made the filling. You chose the cinnamon.
30 D POPPY: I chose too much cinnamon.
31 D WALTER: Poppy, that's not true.
32 D POPPY: It's true, Daddy. I watched you taste it.
33 D WALTER: I was being polite.
34 D LOUISE: You were being a coward.
35 A ¶ Walter laughs.
36 A A judge approaches, a stern woman with a clipboard, and the three of them straighten up on instinct, shoulders squared, as though facing a firing squad.
37 A Poppy steps off the crate.
38 D POPPY (whispering): Smile.
39 D WALTER: I am smiling.
40 D POPPY: Then smile with your face.

### SCENE s01782 | INT. COURTHOUSE - WITNESS PREPARATION ROOM - DAY
Detected names (may be incomplete or contain aliases): ROSALIND ACHTERBERG, OSWALD TIMMONS, BAILIFF
* 1 A ¶ A windowless room.
* 2 A A table, two chairs, a pitcher of water nobody has touched.
* 3 A A wall clock with a loud second hand.
4 A ¶ ROSALIND ACHTERBERG, forties, a defense attorney in a charcoal suit, sits with a legal pad.
5 A Across from her, OSWALD TIMMONS, fifties, a quiet accountant in a borrowed tie, smooths his sleeves.
6 D ROSALIND: We have nine minutes. Do you remember what I told you?
7 D OSWALD: Answer the question asked. Don't volunteer.
8 D ROSALIND: Good.
9 D OSWALD: Look at the jury.
10 D ROSALIND: Not too much.
11 D OSWALD: Not too much.
12 A ¶ She writes something.
13 A He drinks water, then sets the cup down.
14 D OSWALD [CONT'D]: Ms. Achterberg. May I ask you something?
15 D ROSALIND: Of course.
16 D OSWALD: When this is over, will you still be my lawyer?
17 D ROSALIND: Mr. Timmons, I'll be your lawyer until the court says I'm not.
18 D OSWALD: That's not what I asked.
19 A ¶ She looks at him a moment.
* 20 A The clock ticks.
21 D ROSALIND: Yes.
22 A ¶ He nods, relieved, and folds his hands.
23 D OSWALD: It's strange. I've kept books for thirty years. Never lost a penny of anyone else's.
24 D ROSALIND: I know. That's what the jury will hear.
25 D OSWALD: They won't hear the ledger?
26 D ROSALIND: They won't read the ledger. They'll hear you.
27 D OSWALD: Then I should stop fidgeting.
28 D ROSALIND: You're doing fine.
29 D OSWALD: You're kind.
30 D ROSALIND: I'm accurate.
31 A ¶ He smiles faintly.
32 A She turns a page on the legal pad.
33 D ROSALIND [CONT'D]: One more thing. Direct examination goes first, then cross. The prosecutor will try to rattle you with the Cayman accounts.
34 D OSWALD: I understand.
35 D ROSALIND: What do you say?
36 D OSWALD: I say I reported them. Fully. On the forms the bank gave me.
37 D ROSALIND: And if he asks about the second set of forms?
38 D OSWALD (a beat): What second set?
39 D ROSALIND: Exactly. Don't get cute.
40 D OSWALD: I'm not cute.
41 D ROSALIND: No. You're not.
* 42 A ¶ The clock ticks.
43 A Rosalind caps her pen.
44 D ROSALIND [CONT'D]: Oswald. Look at me.
45 D OSWALD: I'm looking.
46 D ROSALIND: Is there a second set of forms?
47 D OSWALD: No.
48 D ROSALIND: Think carefully.
49 D OSWALD: There is no second set of forms.
50 D ROSALIND: Because if there is, I need to know now, not on the stand. I can still protect you now.
51 D OSWALD: Ms. Achterberg.
52 D ROSALIND: Yes?
53 D OSWALD: You've been wonderful.
54 A ¶ Rosalind studies him.
55 A She does not speak.
* 56 A The clock ticks four more times.
57 D ROSALIND: Mr. Timmons, why did you say "wonderful"?
58 D OSWALD: Because you have.
59 D ROSALIND: You said it like goodbye.
60 D OSWALD: Did I?
61 D ROSALIND: Yes.
* 62 A ¶ A knock at the door.
63 A A BAILIFF's voice carries through.
64 D BAILIFF [O.S.]: Two minutes, counselor.
65 D ROSALIND: Thank you.
66 A ¶ She doesn't move.
67 A Oswald stands, straightens his tie, and picks up a thin manila folder from the floor beside his chair.
68 A He sets it on the table in front of her.
69 D OSWALD: I was going to give you this after.
70 A ¶ She opens it.
* 71 A Inside, a second set of forms.
72 A She reads the first page, then the second, and her face remains still.
73 D ROSALIND: When did you find these?
74 D OSWALD: I didn't find them. I made them.
75 D ROSALIND: Oswald.
76 D OSWALD: I thought you should know before I swear to tell the truth.
77 D ROSALIND: Why?
78 D OSWALD: Because I would like very much to do it.
79 A ¶ Rosalind closes the folder.
* 80 A The second hand ticks.
81 A Neither moves.
82 D ROSALIND: Sit down.
83 A ¶ He sits.
84 D ROSALIND [CONT'D]: We're going to ask for a continuance. And you're going to tell me everything, from the beginning.
85 D OSWALD: All right.
86 D ROSALIND: Start with the first account.
87 D OSWALD (speaking over her): Start with the first account.
88 A ¶ He smiles.
89 A She almost does.

### SCENE s01783 | INT. NORTH STAR ROLLER RINK - DJ BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): INEZ CASTELLANOS-WHITE, RECORD
* 1 A ¶ A glass cubicle above an empty rink.
* 2 A A mirror ball turns, throwing flecks of light.
* 3 A Pink neon buzzes.
* 4 A The floor below is bare maple, still scuffed from the evening's skaters.
5 A ¶ INEZ CASTELLANOS-WHITE, sixteen, in a rental-skate shirt with her name sewn on the pocket, sits alone at the turntables.
6 A She wears headphones around her neck.
* 7 A A cassette recorder sits beside a cardboard box of tapes.
8 A ¶ She presses PLAY.
* 9 A A hiss of tape.
10 D INEZ [V.O.] (recorded, younger): Okay, is it recording? It's recording. This is the first mix tape of Inez Castellanos-White, age twelve. Do not tell my brother.
11 A ¶ She freezes the tape with a click.
12 A Pushes her chair back.
13 A Stares down at the empty rink.
14 A ¶ She laughs, short, and rubs her eyes with the heel of her hand.
15 D INEZ: Twelve.
16 A ¶ She presses PLAY again.
17 D INEZ [V.O.] (recorded): I'm going to be a DJ. I'm going to be the best one in the whole state, and when I'm famous I'm going to buy this rink and nobody will ever skate backward again.
* 18 A ¶ A hiccup of tape.
* 19 A A pause.
* 20 A A younger giggle.
21 D INEZ [V.O., CONT'D] (recorded): Okay, here's my favorite song. I made the transition myself.
* 22 A ¶ A scratchy needle drop.
* 23 A A bright pop song swells over the tape hiss.
24 A Inez listens.
25 A Her foot starts to tap.
26 A ¶ She stops it.
27 A Rewinds.
28 A Plays again.
29 A Stops.
30 A She picks up the tape and turns it over in her fingers.
31 D INEZ [CONT'D] (to the tape): You were so bad.
32 A ¶ She goes to the turntables and pulls a record from its sleeve.
33 A She sets it on the platter.
34 A Lowers the needle.
* 35 A The same bright pop song, clean and loud, fills the empty rink.
36 A ¶ She lifts the second turntable's arm and brings it down at a point she knows by heart.
* 37 A The song doubles, then slides into the next, a seam so smooth it is nearly invisible.
38 A ¶ She watches the empty floor.
39 A Her shoulders loosen.
40 D INEZ [CONT'D] (softly): There.
41 A ¶ She picks up the cassette recorder, presses RECORD, and holds the microphone close to her mouth.
42 D INEZ [V.O., CONT'D] (recorded): Okay. This is the second mix tape of Inez Castellanos-White, age sixteen. It's recording.
43 A ¶ She laughs.
44 A She lets the music run under it.
45 D INEZ [V.O., CONT'D] (recorded): Do not tell my brother.
* 46 A ¶ The mirror ball turns.
* 47 A Light slides across the floor, across her face, across the boxes of tapes.
* 48 A On the maple below, for a moment, it looks as though someone is skating.
49 A ¶ Inez ejects the cassette, writes on its label with a marker, and puts it in her pocket.
50 A ¶ She turns off the neon.
* 51 A The booth goes dark except for the mirror ball's last slow spin.

### SCENE s01784 | INT. APPELLATE COURTROOM - LOBBY - DAY
Detected names (may be incomplete or contain aliases): CASSIUS WELLINGTON-OBI, ADA LOVELACE-REYES, THEO SANDOVAL
* 1 A ¶ A marble anteroom, high-windowed, quiet as a chapel.
* 2 A A bench, a water cooler, a brass door that gives onto the courtroom proper.
3 A ¶ CASSIUS WELLINGTON-OBI stands at the window with his back to the room, a man of fifty with a brief clutched against his chest.
4 A ADA LOVELACE-REYES sits on the bench with her ankles crossed, composed in a blue suit.
5 A Between them, a younger associate, THEO SANDOVAL, shifts from foot to foot.
6 A ¶ She does not look up when he speaks.
7 A He doesn't turn when she answers.
8 D THEO: Ms. Lovelace-Reyes, the panel's been out forty minutes.
9 D ADA: Forty-one.
10 D CASSIUS: Forty-two.
11 D THEO: That's a good sign, right? Long means they're reading everything.
12 D ADA: Long means they're arguing.
13 D CASSIUS: Long means nothing.
14 D THEO: So it's a bad sign.
15 D ADA: It's not a sign.
16 A ¶ He wipes his palms on his trousers.
17 A She straightens a cuff.
18 A He turns from the window at last and takes a single step into the room.
19 D CASSIUS: Ada, when you're done being calm, I'd appreciate it if you'd tell me what it is we've forgotten.
20 D ADA: We've forgotten nothing.
21 D CASSIUS: Then why am I sweating?
22 D THEO: Because the AC's broken.
* 23 A ¶ The brass door swings open.
24 A A clerk looks out and calls them in.
25 A The three of them stand together.
26 A Nobody moves toward the door until Ada does.

### SCENE s01785 | EXT. MONASTERY BELL TOWER - DAWN (1944)
Detected names (may be incomplete or contain aliases): SERGEANT THADDEUS KRUGER, CORPORAL NIKOLAI BOGDANOV, MONK, BROTHER ANSELMO
* 1 A ¶ A stone belfry open to the sky, half the roof gone.
* 2 A Below, the valley is smoke and orchard.
* 3 A A cracked bell hangs silent.
4 A ¶ SERGEANT THADDEUS KRUGER, thirties, lies prone on the floor with a rifle.
5 A CORPORAL NIKOLAI BOGDANOV, twenties, crouches by the stair with a radio.
6 A A MONK, BROTHER ANSELMO, seventies, sits against the wall with rosary beads running through his fingers.
7 D KRUGER: He's in the second window, third floor of the mill.
8 D BOGDANOV: Who is?
9 D KRUGER: The man who has been shooting at us since four.
10 D BROTHER ANSELMO: He is a boy. I saw him yesterday, bringing water to the cows.
11 D KRUGER: Then it's a boy with a rifle, Father.
12 D BROTHER ANSELMO: I am not your father. I am only an old man who rings the bell.
13 D BOGDANOV: Sir, command says hold until eight.
14 D KRUGER: Command is thirty miles from here and has never smelled this smoke.
15 D BOGDANOV: They've asked us to confirm positions.
16 D KRUGER: Tell them we're in a bell tower on a hill, and we're not going anywhere.
17 D BROTHER ANSELMO: Will you let me ring it?
18 D KRUGER: No.
19 D BROTHER ANSELMO: It would tell them we are here.
20 D KRUGER: They know we are here.
21 D BROTHER ANSELMO: It would tell them we are still alive.
22 A ¶ Kruger lowers the rifle and looks at him.
23 A He studies him for a long moment.
* 24 A In the valley, a rooster crows.
25 D KRUGER: Bogdanov.
26 D BOGDANOV: Sergeant?
27 D KRUGER: Cover the second window.
28 D BOGDANOV: Yes, sir.
29 D KRUGER: Father. One ring.
30 D BROTHER ANSELMO: One ring.

### SCENE s01786_0 | EXT. FROZEN LAKE - ICE-FISHING SHACK - DAY
Detected names (may be incomplete or contain aliases): 
* 1 A ¶ A tin shack on a plain of white.
* 2 A Wind pushes snow across the lake.
* 3 A A thin plume of smoke rises from the stovepipe.

### SCENE s01786_1 | INT. ICE-FISHING SHACK - CONTINUOUS
Detected names (may be incomplete or contain aliases): GRETA HOLLINGSWORTH, LEIF AASEN, DANTE FIORENTINO, STRANGER, TOBIAS
* 1 A ¶ Cramped.
* 2 A A bunk, a wood stove, two holes in the floor with lines dangling into black water.
3 A Four people live here this week.
4 A ¶ GRETA HOLLINGSWORTH, forties, sits by the stove, sorting matches.
5 A LEIF AASEN, twenties, hunches over a hole with a rod.
6 A DANTE FIORENTINO, fifties, lies on the bunk with a blanket up to his chin.
7 A They have not spoken in an hour.
8 D LEIF: Anything?
9 D GRETA: Not yet.
10 D DANTE: It'll bite when the barometer drops.
11 D LEIF: We don't have a barometer.
12 D DANTE: Then it'll bite when it feels like it.
13 A ¶ Greta tosses a match into the stove.
* 14 A It flares, spits, goes out.
15 D GRETA: Forty hours. We said we'd be home in twelve.
16 D LEIF: We said the truck would start.
17 D DANTE: The truck started.
18 D GRETA: It started and then it died, Dante.
19 D DANTE: It died in a way that was consistent with starting.
20 A ¶ Leif laughs despite himself.
21 A Greta almost does.
* 22 A The line in the hole twitches.
23 A Leif grabs the rod.
24 A Greta rises.
25 A Dante sits up.
26 D LEIF: I've got something.
27 D GRETA: Easy. Easy.
28 D DANTE: Don't horse it.
29 A ¶ Leif reels.
* 30 A The water breaks.
* 31 A A pike, long as his arm, thrashes up through the hole and flops onto the floor boards, where it lies still, mouth working.
32 A ¶ All three stare at it.
* 33 A The shack is silent.
34 D GRETA: Well.
* 35 A ¶ Then the shack door bangs open.
36 A A STRANGER fills the doorway, fifties, bundled head to boot in a snow-caked parka, ice in his beard, a snowmobile helmet under one arm.
37 D STRANGER: I smelled the smoke from two miles away. Anybody home?
38 D LEIF: Mister, you have no idea.
39 D DANTE: Close the door. You're letting out the warm.
40 D STRANGER: Sorry. Sorry.
41 A ¶ He shuts it.
42 A Greta stares at him.
43 A He stares at the pike.
44 D STRANGER [CONT'D]: That your supper?
45 D GRETA: It's our supper if you've got a sled.
46 D STRANGER: Got a sled. Got a tow rope. Got a thermos of coffee, too.
47 D DANTE: Coffee.
48 D LEIF: Coffee!
49 D GRETA (over them): Sit down, mister--
50 D TOBIAS: Wren. Tobias Wren.
51 D DANTE (over Greta): Wren, there's a sled?
52 D LEIF (over both): Is it big enough for four?
53 D TOBIAS: It's big enough for four and a fish.
54 A ¶ Greta sits him on the bunk and presses a tin mug into his hands.
* 55 A The pike gives one last flop.

### SCENE s01787 | INT. FARMHOUSE KITCHEN - MORNING
Detected names (may be incomplete or contain aliases): GRANDMA ROSELLA PIPER, HAROLD PIPER, JUNIPER, MABEL, TOBY
* 1 A ¶ A big kitchen, yellow-walled, with a scarred oak table and a coal range ticking.
* 2 A Window boxes of red geraniums.
* 3 A A rooster clock on the wall reads six-fifty.
* 4 A Pancake batter on every surface.
5 A ¶ GRANDMA ROSELLA PIPER, seventies, small and iron-backed, stands at the range flipping a pancake the size of a hubcap.
6 A HAROLD PIPER, her son, forties, sits at the table in a clean work shirt and reads the paper.
7 A His wife JUNIPER, forties, ties a ribbon around their daughter MABEL's braid.
8 A MABEL, seven, kicks her feet.
9 A In the corner, an old beagle named BISCUIT sleeps on a rag rug, and the youngest, TOBY, three, sits beneath the table with a wooden spoon.
10 A ¶ Rosella flips the pancake.
* 11 A It lands on the floor.
12 A Biscuit wakes, Toby lunges, the beagle and the toddler scramble for it together, and Mabel shrieks.
13 D MABEL: Toby's eating off the floor!
14 D JUNIPER: Toby, no!
15 D HAROLD (not looking up): Floor pancake's the best pancake.
16 D ROSELLA: Harold!
17 A ¶ Rosella scoops Toby up with one arm and the pancake with the other.
18 A Juniper snatches the spoon.
19 A Harold folds his paper and sighs with great contentment.

### SCENE s01788 | INT. SYNERGY PARTNERS - OPEN OFFICE - DAY
Detected names (may be incomplete or contain aliases): BRADLEY ONYEKACHI, PRISCILLA FAIRWEATHER, DOC, ELLISWORTH, SPEAKERPHONE
* 1 A ¶ Standing desks, a ping-pong table nobody plays, a whiteboard that says "DISRUPT" in six colors.
2 A ¶ BRADLEY ONYEKACHI, thirties, in a quarter-zip, stands at the head of a huddle.
3 A PRISCILLA FAIRWEATHER, forties, clutches a laptop.
4 A DONOVAN "DOC" ELLISWORTH, fifties, sits on a beanbag with a coffee.
* 5 A A speakerphone on the table blinks red.
6 D BRADLEY: Okay, team. Quick pulse check on the pivot.
7 D PRISCILLA: Which pivot?
8 D DOC: The one from Tuesday or the one from lunch?
9 D BRADLEY: The one from the lunch of Tuesday.
10 D PRISCILLA: Oh. That pivot.
11 D SPEAKERPHONE [V.O.]: Hello? Are you there? This is Greg from Corporate. I can hear you but you can't hear me.
12 D DOC: We can hear you, Greg.
13 D BRADLEY (over Doc): Greg! Great to have you!
14 D PRISCILLA (over both): Greg, can you mute?
15 D SPEAKERPHONE [V.O.]: I'm not on mute. Am I on mute?
16 D BRADLEY: We can hear you.
17 D DOC: He can't hear us.
18 D SPEAKERPHONE [V.O.]: Did someone say something?
19 A ¶ Bradley sinks into a chair.
20 A Priscilla closes her laptop.
21 A Doc sips his coffee.
22 D DOC [CONT'D]: Well. Synergy.

### SCENE s01789 | INT. UNDERWATER RESTAURANT - DINING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): POLLY, ASHWORTH-DIAZ, CALVIN ASHWORTH, ISADORA MCFEE, WAITER
* 1 A ¶ A glass-walled dining room sunk forty feet beneath a harbor.
* 2 A Green water presses at the panes, and small silver fish dart past candlelit tables.
* 3 A Every sound is muffled, like conversation in a cathedral.
* 4 A A single table is occupied.
5 A ¶ LEOPOLDINA "POLLY" ASHWORTH-DIAZ, sixty, in a velvet turban and enough pearls to flood the room, presides at the head of the table.
6 A Her nephew CALVIN ASHWORTH, thirties, damp-palmed and rumpled, sits at her left.
7 A At her right is her lawyer, ISADORA MCFEE, fifties, sharp as a letter opener, with a briefcase on her knees.
8 A ¶ A WAITER hovers.
* 9 A He is not a character; he is a rumor.
10 D POLLY: Calvin, darling, you've not touched your lobster.
11 D CALVIN: I'm not very hungry, Aunt Polly.
12 D POLLY: Nonsense. You've been hungry since the day you were born.
13 D ISADORA: Miss Ashworth-Diaz, shall we turn to the reason we're here?
14 D POLLY: Isadora, we are here for the lobster.
15 D ISADORA: We are here for the will.
16 D POLLY: We are here for both.
17 A ¶ Calvin looks at the water.
* 18 A A fish stares back at him, then wheels away.
19 D CALVIN: I've never liked being this far down.
20 D POLLY: That's the charm of it. Nobody can leave in a huff.
21 D ISADORA: You can leave in a rush, Calvin. There's a lift.
22 D CALVIN: I'll stay.
23 D POLLY: Good boy.
24 A ¶ The waiter tops off Polly's wine.
25 A She waves him off with two fingers and he vanishes behind a pillar.
26 D POLLY [CONT'D]: Now. Here is how this will go. I have written a will. It names one heir. I will tell you the name over dessert.
27 D CALVIN: Over dessert?
28 D POLLY: The soufflé is divine.
29 D ISADORA: This is irregular.
30 D POLLY: So is my taste in nephews.
31 A ¶ Calvin lets out a nervous laugh and stops when nobody joins him.
32 A He picks up his fork, studies the lobster, puts it down.
33 D CALVIN: Aunt Polly, if it's me, I want you to know I'd be grateful.
34 D POLLY: And if it isn't?
35 D CALVIN (a pause): I'd still be grateful.
36 D POLLY: That is the first honest thing you've said in ten years.
37 D ISADORA: Miss Ashworth-Diaz, I really must insist.
38 D POLLY: Insist all you like, dear. The soufflé takes twenty minutes.
39 A ¶ Isadora opens her briefcase, withdraws a thick envelope, and sets it on the white tablecloth.
* 40 A The candle gutters in the stillness.
41 D ISADORA: I have here the sealed document. I am obliged to read it in the presence of the heir.
42 D POLLY: Then you are obliged to wait.
43 D ISADORA: Polly.
44 D POLLY: Isadora.
45 A ¶ They hold each other's eyes.
46 A Calvin looks from one to the other, as a man might watch a tennis match from inside a fishbowl.
* 47 A Above them, the harbor lights ripple.
* 48 A ¶ A low groan comes from the hull.
* 49 A The glass seems to flex.
50 A A thin trickle of water runs down the west wall, and Polly's smile holds.
51 D CALVIN: Is that supposed to happen?
52 D POLLY: The trickle? Oh, yes. It's decorative.
53 D ISADORA: It's not decorative.
54 D POLLY: Well, it is now.
* 55 A ¶ The trickle widens.
* 56 A The candle flames lean.
57 A Calvin half rises from his chair.
58 D CALVIN: We should go.
59 D POLLY: Sit down, Calvin.
60 D CALVIN: Aunt Polly, the wall is leaking.
61 D POLLY: The wall is performing.
62 D ISADORA (standing): This is absurd. Calvin, we are going.
63 D POLLY: Isadora, sit.
64 A ¶ Isadora doesn't sit.
* 65 A A seam of glass cracks, a hair-thin line from floor to ceiling.
* 66 A The sound is small and very precise.
67 D CALVIN (in a whisper): Oh no.
68 D POLLY (calm): Oh dear. Well. That is a new development.
* 69 A ¶ The line widens.
* 70 A Water jets through it, flat and white.
* 71 A The waiter's tray crashes somewhere out of sight.
72 A Polly pushes back her chair, finally, and stands.
73 D POLLY [CONT'D]: Calvin. The envelope.
74 D CALVIN: What about it?
75 D POLLY: Take it. Open it. Now.
76 A ¶ He seizes it, tears the flap, and pulls out a single sheet.
* 77 A The water is at their ankles.
78 A He reads, and his mouth falls open.
79 D CALVIN: It says...
80 D POLLY: Read it aloud, darling.
81 D CALVIN: "To my nephew Calvin I leave nothing. To my lawyer, Isadora McFee, I leave everything, for she has been faithful."
82 A ¶ Isadora stares at him.
83 A Polly looks at Isadora with bright, fond eyes.
84 D POLLY: Well. Nobody ever tells you the plot twist will happen at forty feet.
85 D ISADORA: I didn't know.
86 D POLLY: Of course you didn't. That's what made it so lovely.
* 87 A ¶ The glass gives way.
88 A The sea rushes in, and the candles go out one by one, and the last thing we see is Polly lifting her wine to the dark and saying, to nobody in particular:
89 D POLLY [CONT'D]: Cheers.

### SCENE s01790 | INT. GONDOLA CAR - MOUNTAIN LIFT - DUSK
Detected names (may be incomplete or contain aliases): IMOGEN HARTLEY-SOTO, FERN, ABARA, ALOYSIUS KELLERMAN
* 1 A ¶ A small glass cabin swinging high above a pine valley.
* 2 A Snow-dusted peaks turn pink.
* 3 A The cabin has stopped.
4 A ¶ IMOGEN HARTLEY-SOTO, thirties, grips the rail.
5 A Across from her, FERDINAND "FERN" ABARA, thirties, takes off his skis and wedges them against the seat.
6 A In the next cabin, twenty feet away, an old couple, MARGUERITE and ALOYSIUS KELLERMAN, seventies, peer across the gap and wave.
* 7 A ¶ The cabin sways.
8 A Imogen yelps, Fern grabs her hand, the Kellermans laugh and wave harder, and Imogen pulls free and grips the rail again.
9 D IMOGEN: Fern, this is the second time you've promised me a scenic view.
10 D FERN: It is a scenic view.
11 D IMOGEN: We're stuck.
12 D FERN: We're stuck with a scenic view.
* 13 A ¶ The speaker crackles and goes dead.
14 A Marguerite shouts something across the gap that neither of them can hear, and Aloysius mimes a heart with his gloved hands.
15 A Fern waves back, grinning.
16 A Imogen covers her face and starts to laugh, and leans her forehead against the cold glass.
17 D IMOGEN [CONT'D]: They think we're a couple.
18 D FERN: Aren't we?
19 A ¶ She lifts her head.
20 A He looks away at the peaks.
* 21 A The cabin sways, then lurches into motion and carries them down toward the lights.

### SCENE s01791 | INT. LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): AUGUSTINE BELLAMY, MARTA BELLAMY, LUCAS, HANA, PIPPA, DESMOND
* 1 A ¶ Fluorescent tubes, a row of humming dryers, a vending machine selling single-serve detergent.
* 2 A Rain on the window.
* 3 A The big clock reads 9:40.
* 4 A Orange plastic chairs bolted in a row.
5 A ¶ AUGUSTINE BELLAMY, sixties, tall, sits stiff in a chair with a duffel bag between his boots.
6 A Beside him MARTA BELLAMY, fifties, folds the same towel for the third time.
7 A Their son LUCAS, twenty, slouches against a washer with his earbuds in.
8 A Their daughters, HANA, fourteen, and PIPPA, nine, share a dryer's warm glass front, sitting cross-legged on the floor.
9 A And in the doorway stands DESMOND, Augustine's brother, forty, rain-soaked, a suitcase in each hand.
10 A ¶ Nobody speaks.
11 A Marta puts down the towel.
12 A Augustine looks at the duffel.
13 A Lucas pulls out one earbud.
14 A Hana and Pippa stop whispering.
* 15 A The dryers keep turning.
16 D DESMOND: I knocked at the house.
17 D AUGUSTINE: We moved.
18 D DESMOND: I see that.
19 A ¶ Desmond sets down one suitcase.
20 A Then the other.
* 21 A Water drips from his sleeves.
22 D PIPPA: Is that Uncle Dez?
23 D HANA: Shh.
24 A ¶ Marta stands.
25 A Augustine stands.
26 A Lucas pushes off the washer.
27 A They form a half circle around the door, and no one reaches for anyone.
28 A Then Marta crosses to the vending machine, feeds it quarters, and returns with a tiny box of detergent.
29 A ¶ She hands it to Desmond.
30 A He takes it, turns it over, and nods slowly.
31 A Augustine clears his throat and moves his duffel off the seat beside him.

### SCENE s01792 | INT. PROVINCIAL TAXIDERMY CLUB - MEETING HALL - EVENING
Detected names (may be incomplete or contain aliases): HORTENSE ABERNATHY-LIU, CHESTER PUDDIFOOT, BERNIE, OKOYE
* 1 A ¶ A long, low room paneled in dark wood and ringed with the glass eyes of badgers.
* 2 A A banner says TWENTY-NINTH ANNUAL STUFFED SHIRT AWARDS.
* 3 A A folding table holds a punch bowl and a single plate of deviled eggs.
4 A ¶ HORTENSE ABERNATHY-LIU, sixty, club president, in tweed and a name badge, taps a spoon against a glass.
5 A She is ignored.
6 A CHESTER PUDDIFOOT, seventy, treasurer, mutters into a ledger at the end of the table.
7 A And BERNADETTE "BERNIE" OKOYE, forties, the newest member, stands at the deviled eggs with a plastic cup, trying to look as if she has belonged for decades.
8 D HORTENSE: Order. Order, please.
9 D CHESTER: There's nobody here to order, Hortense.
10 D HORTENSE: There are three of us, Chester.
11 D CHESTER: There's two and a half. Bernadette is a guest.
12 D BERNIE: I paid my dues.
13 D CHESTER: You paid half your dues.
14 D BERNIE: I paid the half I could afford.
15 D HORTENSE: That's a fair point.
16 D CHESTER: It's a half point.
17 A ¶ Hortense taps the glass again, loudly, and a stuffed owl on the wall falls off its perch and thumps to the carpet.
18 A All three look at it.
19 A Nobody moves.
20 D BERNIE: Should somebody...?
21 D CHESTER: It's done that before.
22 D HORTENSE: It always lands facing the wall.
* 23 A ¶ The owl lies face-down.
24 A Bernie takes a deviled egg, studies it, and sets it down again as if it might be evidence.
25 A Chester turns a page of his ledger with enormous care.
26 A Hortense straightens her badge.
27 D HORTENSE [CONT'D]: First item. The Stuffed Shirt Award for Excellence in Taxidermy.
28 D CHESTER: Who's nominated?
29 D HORTENSE: Last year's winner was a trout.
30 D BERNIE: Was it a good trout?
31 D CHESTER: It was an adequate trout.
32 D HORTENSE: It was beautiful, Chester.
33 D CHESTER: It had one fin.
34 D HORTENSE: It had one fin when it came to us. We did what we could.
35 D BERNIE: Maybe the fin was the point.
36 A ¶ They both look at her.
37 A She grips her cup, suddenly aware of herself.
38 D BERNIE [CONT'D]: Like, art. The fin that isn't there.
39 D CHESTER: She has a point.
40 D HORTENSE: She has half a point.
41 D BERNIE: Now you're doing it.
42 D CHESTER: We're a very precise club.
43 A ¶ Hortense crosses to the owl, picks it up, and carries it with great tenderness to the table.
44 A She sets it between the punch bowl and the eggs.
45 D HORTENSE: This year's winner. By acclamation.
46 D CHESTER: Of whom?
47 D HORTENSE: Of the owl.
48 D CHESTER: It fell off its perch.
49 D HORTENSE: It fell with dignity.
50 D BERNIE: I second it.
51 D CHESTER: You can't second it. You're a guest.
52 D BERNIE: I'm half a member.
53 D CHESTER (a beat): Seconded, then.
54 A ¶ Hortense produces a small gold ribbon from her handbag and pins it to the owl's chest.
55 A She steps back.
56 A They stand in a row, Hortense, Chester, and Bernie, looking at the owl, and it looks at the wall.
57 D HORTENSE: A moment of silence.
58 A ¶ Nobody speaks.
* 59 A The old radiator knocks twice.
60 A Bernie takes the deviled egg after all and eats it.

### SCENE s01793 | INT. PARKING GARAGE - LEVEL P4 - NIGHT
Detected names (may be incomplete or contain aliases): AGENT VIKTORIA NASSAR, JUDE OKAFOR-BRANDT, SILHOUETTE, MIKHAIL TOROSYAN
* 1 A ¶ Concrete.
* 2 A Sodium lights.
* 3 A A drip, somewhere.
* 4 A A lone black sedan with its engine running.
5 A ¶ AGENT VIKTORIA NASSAR, thirties, crouches behind a pillar with a pistol.
6 A Ten yards away, her partner JUDE OKAFOR-BRANDT, forties, flattens against a van with a briefcase handcuffed to his wrist.
7 A They exchange a look across the gap.
8 D JUDE (whisper): Two minutes.
9 D VIKTORIA: They're early.
* 10 A ¶ Footsteps.
* 11 A Heels on concrete.
12 A Viktoria slides back a step and Jude drops low, the briefcase scraping against the van's fender.
13 A A silhouette strides into the light from the stairwell, tall, bareheaded, arms loose.
14 A ¶ The silhouette stops at the sedan and taps on the window.
* 15 A The window rolls down.
16 D SILHOUETTE: Do you have it?
17 A ¶ A gloved hand passes out a thick envelope.
18 A Viktoria's eyes narrow.
19 A Jude lifts the briefcase an inch and then lowers it.
20 D VIKTORIA (whisper): That's not our guy.
21 D JUDE: Whose guy is it?
22 A ¶ The envelope disappears under the silhouette's coat.
23 A A new figure peels from the shadows behind them, a big man in a hood, MIKHAIL TOROSYAN, fifties, his pistol steady on Viktoria's pillar.
24 D MIKHAIL: Out, please. Hands where I can see them.
25 A ¶ Viktoria rises with her gun down.
26 A Jude steps out from the van with the briefcase held high, wrist chained, as the silhouette turns at last and the light reveals the face of the sedan's driver, a woman with a scar through one eyebrow, who gives them a polite, regretful smile.
27 A ¶ Then the sedan's engine roars, the headlights snap on, Viktoria dives left, Jude dives right, Mikhail fires, the first shot sparking off the pillar, and the sedan lurches forward and clips the van, spinning it into a column with a thunderous crunch.
* 28 A Glass rains down.
* 29 A Alarms scream through the garage.
30 A In the confusion, Jude drags himself behind a stack of tires, Viktoria rolls to her feet and sprints for the stairwell, and Mikhail, bleeding from the scalp, fires at both of them without hitting either.
31 A ¶ The sedan screeches up the ramp.
32 A Viktoria hits the stairwell door with her shoulder, barges through, and gone.
33 A ¶ Jude, alone and cuffed to his case, looks up at the swinging sodium lights.
34 D JUDE: Well. That went well.

### SCENE s01794 | INT. ABANDONED CIRCUS - RINGMASTER'S WAGON - AFTERNOON
Detected names (may be incomplete or contain aliases): ARNOLD, PELLEGRINO, CORINNE WACHOWIAK-BELL
* 1 A ¶ A painted wagon, faded to the color of old peaches, its walls hung with moth-eaten posters of lions and strongmen.
* 2 A A cracked mirror.
* 3 A A brass bed with a mangy leopard-print throw.
* 4 A Afternoon sun slants through shuttered windows, and dust turns in the beams.
5 A ¶ ARNOLD "THE MAGNIFICENT" PELLEGRINO, seventy, in a satin dressing gown and an immense waxed mustache, sits before the mirror applying greasepaint to a face that has long ago stopped taking it.
6 A He hums, off key.
* 7 A ¶ The door creaks.
8 A He does not turn.
9 D ARNOLD: If you're the bailiff, I'm indisposed. If you're the ghost, you're late.
* 10 A ¶ The door opens fully.
11 A A young woman steps in with a briefcase and a paper bag of sandwiches, blinking in the dimness.
12 A This is CORINNE WACHOWIAK-BELL, twenty-eight, a real estate appraiser, in a gray pencil skirt and sensible shoes, and she is clearly the most out of place person who has ever entered this wagon.
13 D CORINNE: Mr. Pellegrino?
14 D ARNOLD: Arnold the Magnificent.
15 D CORINNE: I'm Corinne Wachowiak-Bell. I'm here about the lot.
16 D ARNOLD: I know why you're here, my dear.
17 D CORINNE: I brought sandwiches.
18 D ARNOLD: I never eat before a show.
19 D CORINNE: There's no show.
20 D ARNOLD: There is always a show.
21 A ¶ She sets the sandwiches on the bed.
* 22 A The leopard throw shifts and a cat's head pops out.
23 A She jumps.
24 D CORINNE: You have a cat.
25 D ARNOLD: I have a leopard.
26 D CORINNE: That's a cat.
27 D ARNOLD: She is thirteen years old and has eaten two assistants. Be kind.
28 A ¶ Corinne laughs, then stops, then laughs again, nervously.
29 A She takes a step toward the mirror.
* 30 A In it, her reflection stands beside his.
31 D CORINNE: Mr. Pellegrino, the county wants to demolish the grounds. They sent me to appraise the equipment.
32 D ARNOLD: The equipment.
33 D CORINNE: The wagons, the tent, the cannon.
34 D ARNOLD: The cannon is not equipment. The cannon is a colleague.
35 D CORINNE: I'll need to measure it.
36 D ARNOLD: Measure her gently.
37 D CORINNE: I will.
38 D ARNOLD: You have kind hands. I can tell.
39 D CORINNE: You can't tell that from the mirror.
40 D ARNOLD: Forty years in the business, child. Nobody lies to the mirror.
41 A ¶ He swivels on his stool at last and looks at her.
42 A His eyes are very blue under the greasepaint.
43 D ARNOLD [CONT'D]: Sit.
44 D CORINNE: I don't have a lot of time.
45 D ARNOLD: Nobody does. Sit.
46 A ¶ She sits on the edge of the brass bed.
* 47 A The leopard stares at her.
48 A She stares back.
49 D ARNOLD [CONT'D]: When I was twenty-two, I swallowed fire in this very ring. Two thousand people on the benches. I breathed in, and for one second I forgot to be afraid. You know what that felt like?
50 D CORINNE: Like winning?
51 D ARNOLD: Like nothing. Like the moment before the heartbeat. That is what a circus is, Miss Wachowiak-Bell. A very expensive way to hold your breath.
52 D CORINNE: And now?
53 D ARNOLD: Now the breath has run out.
54 A ¶ Corinne looks at her briefcase.
55 A She looks at the posters.
56 A She pulls out a clipboard and sets it on her knee.
57 D CORINNE: Mr. Pellegrino, I'm going to be honest with you. This is not the kind of job I like.
58 D ARNOLD: No?
59 D CORINNE: No. I like houses. Kitchens, with granite. I like when somebody's moving in.
60 D ARNOLD: Then why did you take this one?
61 D CORINNE: They didn't give me a choice.
62 D ARNOLD: That is the circus. They never do.
* 63 A ¶ A beat.
64 A She smiles.
65 A He winks.
* 66 A The leopard rolls onto its back.
* 67 A ¶ Outside, an engine coughs awake and a chain rattles against iron.
68 A Corinne stands.
69 A Arnold does not.
70 D CORINNE: That'll be the cannon.
71 D ARNOLD (to himself): So it begins.

### SCENE s01795 | EXT. SHELLED VILLAGE - CELLAR HATCH - NIGHT
Detected names (may be incomplete or contain aliases): CORPORAL YUSUF DEMIR, HAL, QUIST
* 1 A ¶ Broken roofs.
* 2 A A church tower snapped in half.
* 3 A Flares drift down on parachutes and the ground shudders with distant guns.
4 A ¶ CORPORAL YUSUF DEMIR, thirties, crouches at a cellar hatch with a rifle across his knees.
5 A Beside him lies PRIVATE HALLORAN "HAL" QUIST, nineteen, on his back, helmet over his eyes.
6 A ¶ Yusuf shoves him.
7 D YUSUF: Up.
8 D HAL: I am up.
9 D YUSUF: You're lying down.
10 D HAL: It's a different kind of up.
* 11 A ¶ A shell lands close.
* 12 A Dirt rains.
13 A Both flatten.
* 14 A The ringing fades.
15 D YUSUF: Count.
16 D HAL: One. Two.
17 D YUSUF: Not shells. Us.
18 D HAL: Two.
19 A ¶ Yusuf nods.
20 A He rises to a crouch and peers over the ruined wall.
* 21 A A flare dies.
* 22 A Darkness.
23 D YUSUF: We go on three.
24 D HAL: Where?
25 D YUSUF: The bridge.
26 D HAL: There is no bridge.
27 D YUSUF: There's a bridge.
28 D HAL: There was a bridge.
29 A ¶ Yusuf looks at him.
30 A Hal sits up and pushes his helmet back.
31 D YUSUF: Hal.
32 D HAL: I know.
33 D YUSUF: If I say go, you go.
34 D HAL: I know.
35 D YUSUF: If I fall, you keep going.
36 D HAL: I know.
37 D YUSUF: One.
38 D HAL (at the same time): One.
39 A ¶ They exchange a glance.
* 40 A A flare pops overhead and the night turns white.
41 D YUSUF: Two.
42 A ¶ Hal checks his rifle.
43 A Yusuf takes a breath.
44 D YUSUF [CONT'D]: Three.
45 A ¶ They run.
