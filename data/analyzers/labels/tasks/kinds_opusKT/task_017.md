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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusKT/group_0017.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00370 | INT. GRAIN BARGE "MARIE LOUISE" - GALLEY - NIGHT
Detected names (may be incomplete or contain aliases): HALVARD KROGH, INGRID, TOBY, BRONWEN PELL, KNOCK, STRANGER, OSKAR
* 1 A ¶ A narrow cabin frozen into the river ice.
* 2 A A cast-iron stove ticks.
* 3 A Frost feathers the porthole.
4 A ¶ HALVARD KROGH, 60, barge captain, bearded, patient hands, ladles thin soup into tin bowls.
5 A His daughter INGRID, 30, wrapped in a army blanket, counts crackers into piles on the table.
6 A ¶ TOBY, 10, Ingrid's son, sits cross-legged on the bunk, tracing a face in the frost on the glass.
7 A ¶ BRONWEN PELL, 70, a retired schoolteacher with a deaf ear and a sharp one, knits something that is clearly never going to be finished.
8 D HALVARD: Eight days. The ice master said ten at most.
9 D INGRID: He also said the thaw would come on the first.
10 D BRONWEN (too loud): What was that?
11 D INGRID: Nothing, Mrs. Pell.
12 D TOBY: Grandpa, the stove's quiet.
13 D HALVARD: It's saving its strength.
* 14 A ¶ A calm settles.
* 15 A The soup steams.
* 16 A Even the wind seems to have gone to bed.
17 A Ingrid slides a cracker pile toward her son and he slides it back.
18 D INGRID: Eat, Toby.
19 D TOBY: You first.
* 20 A ¶ A KNOCK on the hull.
* 21 A Three slow raps.
22 A Everyone stops.
23 A ¶ Halvard sets down the ladle.
24 A He takes a boat hook from the wall and opens the hatch.
* 25 A Snow blows in.
26 A ¶ A man stands on the ice, hatless, rimed white, a canvas sack over one shoulder.
27 A This is the STRANGER, 40s, soft-spoken, smiling with the lower half of his face only.
28 D STRANGER: Forgive me. I saw your smoke from the north bank. I walked a long way.
29 D HALVARD: Nobody walks that ice. It's rotten past the channel buoy.
30 D STRANGER: Then I walked carefully.
31 A ¶ Halvard weighs him, then steps back.
32 A The stranger climbs down and sits where he is told, nearest the stove.
33 D INGRID: What's your name?
34 D STRANGER: Oskar. Oskar Venn.
35 D BRONWEN: Venn? I taught a Venn. Little boy, wet cough, always drew boats.
36 D OSKAR: Not me, I'm afraid.
37 D HALVARD: Ingrid. Soup.
38 A ¶ Ingrid hands Oskar a bowl.
39 A He holds it with both hands and does not drink.
40 D OSKAR: Is it only the four of you?
41 D HALVARD: Does it matter?
42 D OSKAR: Only in the way that counting matters.
43 D TOBY: We're not four. There's Gunnar.
44 D INGRID: Toby.
45 D TOBY: He's under the deck.
* 46 A ¶ Silence.
47 A Halvard looks at his daughter.
48 A She looks at the floor.
49 D OSKAR: Under the deck.
50 D HALVARD: My deckhand. He went through the ice on the third day, going for the line. We brought him back. We have not been able to take him ashore.
51 D OSKAR: I'm sorry.
52 D HALVARD: You're not.
53 D OSKAR: No. I'm not. I'm relieved. I won't have to explain myself to a man who's still looking for his friend.
54 D BRONWEN (very loud): What did he say?
55 D HALVARD: Mr. Venn, tell me why you walked out here.
56 D OSKAR: There were nine of us on the grain wharf at the start. We drew straws for who walked the river. The others are sleeping in a warehouse with the doors chained. I did not draw a short straw, Captain. I drew the only straw that said the barge had food.
57 D INGRID: Who told you we had food?
58 D OSKAR: The man who sold you the flour, three weeks ago. He sold it to us as well. He kept a ledger of every boat that bought from him, and every boat that did not leave before the freeze.
59 D HALVARD: You're from the company.
60 D OSKAR: I'm from the harbor. The company is a letter on the door. Nobody's coming for this barge, Captain. Not on the first. Not on the tenth. They wrote you off the day the ice closed, and the river has been kind to them by taking you quietly.
61 D TOBY: Mom?
62 D INGRID: Hush.
63 D OSKAR: I have bread in this sack. And salt. And a lantern, which is how I found you. I came to trade.
64 D HALVARD: Trade what?
65 D OSKAR: Passage. There is a way across that holds. I walked it. I can take two more tonight, three if the child is small and nobody argues.
66 D BRONWEN: Two?
67 D OSKAR: Three.
68 A ¶ Halvard lowers the boat hook.
69 A Ingrid stands.
* 70 A The stove pops, loud as a shot, and nobody looks at it.
71 D INGRID: Three of five.
72 D OSKAR: Three of five. I did not draw the numbers.
73 A ¶ Halvard slowly turns to the hatch, reaches for the lantern, and blows it out.
* 74 A The galley falls dark but for the red slot of the stove.
75 D HALVARD: Then you will wait for morning, Mr. Venn. And in the morning, you will show me this way across. Alone.
76 D OSKAR (softly): That is not the arrangement.
* 77 A ¶ In the dark, the sound of a knife leaving a sheath.
* 78 A It is not Halvard's.

### SCENE s00371 | INT. FERRY TERMINAL HOLDING ROOM - NIGHT COURT - NIGHT
Detected names (may be incomplete or contain aliases): NNEKA ADEBAYO, DEZ FAIRWEATHER, ELLIOT VANCE, MORRIS KOWALSKI, PRISCILLA TRAN, JUDGE LAVOIE
* 1 A ¶ A waiting hall that was once for passengers, now rigged as a courtroom with folding tables and a flag on a mic stand.
* 2 A Salt damp climbs the tile.
* 3 A Somewhere a ship's horn sounds and fades.
4 A ¶ NNEKA ADEBAYO, 35, public defender, stands at the defense table with a coat she has not taken off.
5 A She keeps one hand flat on a file as though it might fly.
6 A ¶ Beside her, DEZ FAIRWEATHER, 22, in a paper jumpsuit, jiggles his knee.
7 A He studies the ceiling tiles.
8 A He does not look at her.
9 A ¶ Across the aisle, ELLIOT VANCE, 40s, prosecutor, polishes his glasses on his tie.
10 A He is smiling at nothing.
11 A ¶ At the back, bailiff MORRIS KOWALSKI, 60, leans on a vending machine, eating something orange from a bag.
12 A PRISCILLA TRAN, 25, the clerk, types with her whole face.
* 13 A ¶ A speaker box on a pole CRACKLES.
14 D JUDGE LAVOIE [V.O.] (over intercom): Counsel, can you hear me? The river fog has closed the bridge. I'm appearing from the car.
15 D NNEKA: We can hear you, Your Honor.
16 D JUDGE LAVOIE [V.O.]: Good. Mr. Vance, the state's position on bail.
17 A ¶ Vance stands.
18 A He buttons his jacket, then unbuttons it, then sits back down, as if reconsidering the whole idea of standing.
19 D ELLIOT: The state has no objection to release, Your Honor.
20 A ¶ Nneka's head snaps toward him.
21 A She searches his face for the joke.
22 D NNEKA: No objection?
23 D ELLIOT: New evidence. The camera footage places the defendant at the Marlow Street shelter at the time of the break-in.
24 D DEZ (whispering): That's what I told you.
25 A ¶ Nneka covers his hand with hers to quiet him.
26 A She is already thinking three moves ahead and does not like where it leads.
27 D NNEKA: Your Honor, the defense moves for dismissal.
28 D JUDGE LAVOIE [V.O.]: Is the state opposed?
29 A ¶ Vance hesitates.
30 A He turns, very slightly, to the clerk.
31 A Priscilla stops typing.
32 A He tilts his head.
33 A She shakes hers once, small, a flicker.
34 D ELLIOT: The state is... opposed. Your Honor. I've just been informed that the footage was timestamped from a different clock.
35 D NNEKA: Informed by whom?
36 A ¶ Priscilla goes pale.
37 A Morris looks up from his bag.
38 D JUDGE LAVOIE [V.O.]: Ms. Adebay, sit down.
39 D NNEKA: It's Adebayo, Your Honor, and I'd like the clerk to explain the clock.
* 40 A ¶ The intercom hisses.
41 A Dez rises half out of his chair.
42 A Morris sets down the bag and walks forward, one hand drifting to his belt.
43 D DEZ: I didn't do it. I never did it. Why does it keep changing?
44 A ¶ He tries to say more and can't.
45 A Nneka puts a hand on his shoulder and, for the first time, looks at him.
46 D NNEKA (low): Sit. I've got you.
47 A ¶ He sits.
48 A She stands.
* 49 A The fog presses at the windows like a face.

### SCENE s00372_0 | INT. ROLLER RINK - AFTER CLOSING - NIGHT
Detected names (may be incomplete or contain aliases): JUNE ABARA, CALVIN, RAFA, PRIYA, DUBOIS
* 1 A ¶ Half the lights are off.
* 2 A The disco ball turns slowly over an empty floor.
* 3 A Rental skates hang in pairs along a wall.
4 A ¶ JUNE ABARA, 16, sits on the carpeted bench lacing a skate she has already laced.
5 A Her brother CALVIN, 19, stacks chairs with his back to her.
6 A ¶ RAFA, 17, and PRIYA, 16, hover near the snack counter, sharing one bag of chips and not eating them.
7 A ¶ MR. DUBOIS, 55, rink manager, jingles keys by the front door.
8 D MR. DUBOIS: Ten minutes, kids. I'm not paying the electric for a goodbye.
9 A ¶ Nobody moves.
10 A Calvin sets one chair down harder than needed.
11 D RAFA: You could have said something, June.
12 D JUNE: I said it.
13 D RAFA: Not to her.
14 A ¶ Priya looks at the floor.
15 A June pulls the lace tighter and the skate goes white at the toe.
16 D CALVIN (not turning): Mom's in the car.
17 D JUNE: I know.
18 D CALVIN: She's been in the car forty minutes.
19 A ¶ June stands.
20 A She wobbles, steadies, rolls two feet toward the floor, and stops at the edge like it is a curb.
21 D PRIYA: I'll go with you.
22 D RAFA: I'll go with you.
23 A ¶ They say it together.
24 A Both stop.
25 A Neither looks at the other.
26 D PRIYA: I'll go with you. ^RAFA I'll go with you.
27 D JUNE (a small laugh that dies): You two are the worst.
28 A ¶ She rolls out onto the floor.
29 A One slow lap.
30 A Priya and Rafa watch.
31 A Calvin has stopped stacking.
32 A ¶ Halfway round she tips her head back to the disco ball.
33 A It throws small white dots across her face, and she lets them.
34 D MR. DUBOIS: June. That's time.
35 A ¶ She finishes the lap.
36 A At the bench she sits, unlaces the skate, and hands it to Calvin.
37 A He takes it without a word and puts it on the shelf.
38 A He holds her shoe out.
39 A She puts it on.
40 A ¶ At the door, Priya hands her the bag of chips.
41 A June takes one.
42 A Eats it.
43 A Gives the bag back.

### SCENE s00372_1 | EXT. ROLLER RINK PARKING LOT - CONTINUOUS
Detected names (may be incomplete or contain aliases): 
* 1 A ¶ A beat-up minivan idles, dome light on.
2 A Inside, a woman's shape, hands on the wheel.
3 A June walks to the passenger door and gets in.
4 A She does not close it right away.

### SCENE s00373_0 | INT. FERRIS WHEEL LOST-AND-FOUND BOOTH - DAY
Detected names (may be incomplete or contain aliases): BARNABY, DOT, STRANGER
* 1 A ¶ Cramped.
* 2 A Unclaimed teddy bears.
* 3 A One prosthetic leg.
4 A ¶ BARNABY, 50s, attendant, mustache, sits behind a counter.
5 A DOT, 70, hands on hips, stands before him.
6 D DOT: I lost a hat.
7 D BARNABY: Describe it.
8 D DOT: Big. Green. A bird on it.
9 A ¶ A STRANGER, 40s, slides into frame behind Dot, wearing a green hat with a bird on it.
10 A He tips it.
11 D BARNABY: That one?
12 D DOT: That's mine!
13 A ¶ The Stranger bolts.
14 A Barnaby vaults the counter.
15 A Dot swings her purse and misses.

### SCENE s00373_1 | EXT. FERRIS WHEEL BASE - CONTINUOUS
Detected names (may be incomplete or contain aliases): BARNABY, WILFRED
1 A ¶ The Stranger climbs into a gondola.
2 A Barnaby climbs in after.
* 3 A It lurches skyward.
4 D STRANGER: I'm Wilfred! I found it! It was lost!
5 D BARNABY: It was FOUND by her!
6 D WILFRED: She lost it! I FOUND it! Technically that's the system!
7 A ¶ Barnaby considers this.
* 8 A The gondola stops at the top.
9 A They both look down at Dot, tiny, waving her purse.
10 D BARNABY: I really hate that you're right.

### SCENE s00374 | INT. FUNICULAR CAR - MIDNIGHT
Detected names (may be incomplete or contain aliases): VESPER KOWALCZYK, LORENZO, ODILE, HIRO, GUARD
* 1 A ¶ A small wooden car climbs a steep rail above a sleeping alpine town.
* 2 A A single lamp swings from the roof.
* 3 A Below, the lights of the Hotel Edelweiss glitter.
4 A ¶ VESPER KOWALCZYK, 40s, elegant, in a conductor's cap and uniform that almost fits, stands at the brake wheel.
5 A She is the picture of calm.
6 A ¶ LORENZO, 30s, bellhop's jacket, crouches on a long steamer trunk.
7 A ODILE, 50s, in a fur coat that does not belong to her, sits upright on the bench with a cane across her knees.
8 A HIRO, 20s, thin, quiet, wearing a night porter's apron, holds a canvas tool roll.
9 D VESPER: Four minutes to the top station. We stop at the second landing for the cable.
10 D LORENZO: The cable is on the trunk?
11 D VESPER: The cable is the trunk.
12 A ¶ Odile taps her cane twice on the floor.
13 A Hiro unrolls his tools without a sound.
14 D LORENZO: What does the guard say when the car stops?
15 D ODILE: The guard has been drinking since nine.
16 D VESPER: The guard is a gentleman. He sleeps well.
* 17 A ¶ The car shudders over a joint in the rail.
18 A Everyone grips something.
* 19 A Then it settles, and the hum of the cable resumes.
20 D HIRO (quiet): There is a second car coming down.
21 A ¶ They look.
* 22 A Through the rear window, a pair of lights, small, then larger, sliding down the opposite track.
23 D VESPER: That's the midnight milk run. It passes us at the landing.
24 D LORENZO: Nobody said there was a milk run.
25 D VESPER: Nobody checked the timetable but me.
* 26 A ¶ The oncoming car rumbles past, inches off.
27 A Its single passenger, a man in a doorman's coat, looks through the glass.
28 A He sees the trunk.
29 A He sees four conductors.
30 A His mouth opens.
31 A ¶ Vesper tips her cap.
32 A The man blinks, tips his own, and sinks out of view.
33 D ODILE: He will remember that.
34 D VESPER: He will remember a nice woman in a nice cap.
* 35 A ¶ The car clanks to a halt at the second landing.
* 36 A Silence.
37 A A lantern glows on a platform ahead, and a figure steps into it: the GUARD, an enormous man, fully awake, holding a rifle.
38 D GUARD: Good evening, Frau Kowalczyk.
39 A ¶ Nobody moves.
40 A Lorenzo's hand drifts toward the trunk.
41 A Odile's cane rises an inch.
42 A Hiro's wrench disappears into his sleeve.
43 D VESPER (evenly): Good evening, Anselm. You are not drunk.
44 D GUARD: Not tonight. Tonight I was told.
45 A ¶ Vesper closes her eyes briefly, then opens them.
46 D VESPER: Hiro. Now.
47 A ¶ Hiro slams the brake lever.
* 48 A The car bucks.
49 A The trunk slides, Lorenzo with it, and both crash into the Guard's legs.
50 A The rifle goes off into the roof.
51 A Odile lashes the cane across his wrist.
52 A He roars and swings.
53 A ¶ Vesper hauls the trunk's lid open.
* 54 A Cable spills out in a silver snake.
55 A Hiro and Lorenzo wrestle the Guard onto the platform.
56 A Odile steps over them in her borrowed fur.
57 A Vesper takes the lantern from the rail and casts it away into the dark.
* 58 A It falls and falls and falls.
59 D ODILE: We have two minutes before the top station knows.
60 D VESPER: We have one. Everybody in the car.
61 A ¶ They scramble in.
* 62 A The car lurches uphill, faster, and the lights of the Edelweiss rush up to meet them.

### SCENE s00375 | INT. GONDOLA CABLE CAR - ABOVE A GORGE - DAY
Detected names (may be incomplete or contain aliases): TESS, RUBEN, AMARA, WEN, STRANGER, DELPHINE
* 1 A ¶ Stalled mid-span.
* 2 A Wind rocks the cabin.
* 3 A A hundred meters of nothing below.
4 A ¶ TESS, 30s, climbing jacket, sits on the floor with her back to the door.
5 A RUBEN, 40s, her husband, stands with his palms on the glass.
6 A AMARA, 16, headphones around her neck, picks at a hole in her sleeve.
7 A WEN, 70s, in a wool cap, eats sunflower seeds with great deliberation.
8 A ¶ A fifth figure sits apart: a STRANGER, 50s, in a rain shell, sunglasses on, a duffel on his lap.
9 A He hasn't said a word in two hours.
10 D RUBEN: The next car's at the station. They said an hour.
11 D TESS: They said an hour at the last hour.
12 A ¶ Wen spits a shell into his palm.
13 A Amara watches the bag in the stranger's lap.
14 D AMARA: What's in the bag?
15 A ¶ The Stranger turns his head.
16 A Smiles.
17 D STRANGER: Rope.
18 D TESS: Real rope?
19 D STRANGER: Forty meters. Rated.
20 D RUBEN: Why didn't you say?
21 D STRANGER: You'd have wanted to use it.
* 22 A ¶ The cabin sways.
23 A Tess swallows.
24 A Nobody speaks.
25 A The Stranger takes off his glasses.
26 A His eyes are red, tired.
27 D STRANGER [CONT'D]: Delphine. My name. I was the one who rode the line crew when they rebuilt this span in '09.
28 D WEN: You're the engineer.
29 D DELPHINE: I was. I signed the inspection. I come up here every year on the same day.
30 D RUBEN: Why?
31 D DELPHINE: Because the weld under your feet has a crack I wrote off as cosmetic.
* 32 A ¶ Silence.
33 A Tess's eyes go slowly to the floor under her.
34 A Amara pulls her knees up.
35 A Ruben stops breathing.
36 D TESS (very quiet): How long?
37 D DELPHINE: It hasn't moved in fifteen years. But then it hasn't been stopped in the wind before, either.
38 D WEN: Is the rope for us?
39 D DELPHINE: It's for one at a time. Down the cable, to the pylon. It's two hundred meters, and a harness I made out of seatbelt.
40 D AMARA: I'll go.
41 D TESS: No.
42 D AMARA: I'm lightest.
43 D RUBEN: Amara, sit.
44 D AMARA: I'm the one who said it, so I'm the one who goes.
45 D DELPHINE: Nobody goes yet. I don't want to be right today. I want to be wrong, and I want a rescue car to come over that hill with a man in a yellow helmet who tells me I'm an idiot.
* 46 A ¶ Out of the gray, a distant engine.
47 A Everyone turns.
48 A ¶ Wen slowly puts a seed in his mouth.
49 D WEN: I'd like that too.
* 50 A ¶ The engine grows louder.
51 A Delphine does not look up.
52 A She is watching the floor.

### SCENE s00376 | INT. THE WHALE LIBRARY - NIGHT
Detected names (may be incomplete or contain aliases): ISOLDE VANTH, THORNE, CINDER
* 1 A ¶ A cathedral built from the ribs of a leviathan.
* 2 A Each bone arches forty feet overhead, polished the color of old piano keys.
* 3 A Between the ribs, shelves of salt-stained books climb to the dark.
* 4 A Candlelight pools in the hollows, and the ceiling, which is the whale's spine, hums faintly, as if remembering a song.
5 A ¶ ISOLDE VANTH, 20s, a mapmaker in a patched indigo coat, ink on her cuffs and a brass compass at her throat, steps in from a rain that falls upward, silver, into the dark.
6 A She carries a rolled chart under one arm.
7 A ¶ THORNE, ancient, tall, the archivist, glides toward her.
8 A His wings are a moth's: powdery gray, tattered at the edges, folded around him like a cloak.
9 A His eyes are two lamps.
10 D THORNE: You are late, cartographer. The tide takes the east wing at midnight.
11 D ISOLDE: The tide takes a lot of things.
12 A ¶ She unrolls the chart on a reading table.
* 13 A It is blank except for a single red thread, which is slowly crawling across the paper by itself.
14 D THORNE: It has found you.
15 D ISOLDE: It found me three days ago. I need to know what it's drawing.
16 A ¶ A third presence stirs: CINDER, a child-sized spirit of living ember, perched on a stack of folios.
17 A She is the size of a cat, made of coals, and her voice is the crackle of a hearth.
* 18 A Where she sits, the paper curls and blackens.
19 D CINDER: It's drawing a door.
20 D THORNE: Cinder. Off the folios.
21 D CINDER: I'm helping.
22 D ISOLDE: Where does the door go?
23 A ¶ Cinder leaps to the table.
* 24 A The red thread bends toward her, drawn like iron to a lodestone.
* 25 A It writes a small square, and then, below it, a smaller one.
26 D CINDER: It goes here.
27 D THORNE (very soft): It goes beneath the library. Beneath the whale.
* 28 A ¶ The spine overhead hums louder.
* 29 A A candle gutters out.
* 30 A Then another.
* 31 A Dust sifts from the ribs.
32 D ISOLDE: There's nothing under the whale.
33 D THORNE: There is what it swallowed.
* 34 A ¶ The red thread finishes its door.
* 35 A It stops.
* 36 A Beneath the floor, something knocks.
* 37 A Once.
* 38 A Twice.
39 A Thorne unfolds his wings.

### SCENE s00377 | INT. TELEGRAPH OFFICE - GRAND CENTRAL JUNCTION - 1912 - DAWN
Detected names (may be incomplete or contain aliases): HOBSON, MISS ALTHEA PIKE, COLONEL ROWE
* 1 A ¶ A brass-and-mahogany room that smells of oil and coal.
* 2 A The sounder clicks like a nervous insect.
* 3 A Pale light slants through a high window onto a counter and a wall of pigeonholes.
4 A ¶ HOBSON, 50, the night operator, sleeves gartered, bends over the key with a steady hand.
5 A He has not looked up in an hour.
6 A ¶ MISS ALTHEA PIKE, 30, in a gray traveling suit, stands at the counter, gloved fingers drumming a slow rhythm on the wood.
7 A COLONEL ROWE, 60, a moustache like a broom, stands behind her with a cane planted between his boots.
* 8 A ¶ The sounder stops.
9 A Hobson tears a slip from the tape and holds it a long moment.
10 D HOBSON: It says the ship has gone down.
11 D ALTHEA: Read it again.
12 D HOBSON: Miss Pike.
13 A ¶ Colonel Rowe and Althea reach for the slip together.
14 A Their fingers meet on the paper.
15 A Neither lets go.
16 A Neither speaks.
* 17 A The tape between them trembles.
18 D ROWE: Give it to me, girl.
19 D ALTHEA: It's my brother's name on it, Colonel.
20 A ¶ They tug.
* 21 A The paper tears down the middle.
22 A Each holds half, and each stares at the half they hold.
23 A Behind the counter, Hobson rises very slowly and takes off his eyeshade.
24 D HOBSON: There is a second line, if you will let me read it.
25 A ¶ They freeze.
* 26 A The sounder begins to click again.

### SCENE s00378 | INT. ABANDONED PLANETARIUM - NIGHT
Detected names (may be incomplete or contain aliases): BILLIE STROUD, PEREGRINE LOWE
* 1 A ¶ A dead dome.
* 2 A Seats in tiers.
* 3 A Dust turns slowly in a flashlight beam.
4 A ¶ BILLIE STROUD, 40s, detective, coat open, steps over a tipped chair.
* 5 A A projector lies on its side.
6 D BILLIE: Peregrine Lowe.
7 A ¶ From the dark of the control booth, a man leans into the light: PEREGRINE LOWE, 60s, tweed, handsome in a ruined way, a lantern on his knee.
8 D PEREGRINE: Detective Stroud. You found it faster than I'd hoped.
9 D BILLIE: The ticket stub in the victim's coat.
10 D PEREGRINE: I thought you'd miss it.
11 D BILLIE: You wanted me to find it.
12 D PEREGRINE: Billie, I wanted you to look up.
13 A ¶ Billie lifts the flashlight.
* 14 A Overhead, the dome is painted with constellations, hand-lettered.
* 15 A One star is circled in red.
16 D BILLIE: That isn't Orion.
17 D PEREGRINE: It's the only wrong star in the sky. That's how Marguerite signed her work.
18 D BILLIE: She's been dead since 1998.
19 D PEREGRINE: That's what I was told.
20 A ¶ He turns off the lantern.
* 21 A The dome goes black.
* 22 A Then, soft, a hum, and the ceiling begins to glow, one star at a time.
23 D BILLIE: Peregrine. What did you start?
24 D PEREGRINE: Nothing. Watch.
25 A ¶ Billie lowers the flashlight.
* 26 A The wrong star pulses.
* 27 A A door she hasn't seen opens in the dome's painted rim.
28 D BILLIE: Who's behind that?
29 D PEREGRINE: Billie. She has been waiting a long time to be asked.

### SCENE s00379 | INT. FIELD HOSPITAL - CONVERTED SKI LODGE - NIGHT
Detected names (may be incomplete or contain aliases): SAOIRSE KELLEHER, NURSE ABIODUN, HELENA PAVLICEK, GREGOR PAVLICEK
* 1 A ¶ A great timber hall with a stone hearth, now lined with cots.
* 2 A Antlers still hang over the mantel.
* 3 A Blizzard wind works the shutters.
4 A ¶ DR. SAOIRSE KELLEHER, 40, mud on her boots and blood on her cuffs, stands over a cot with a stethoscope draped around her neck.
5 A She has not slept in two days and she holds her face carefully, like something fragile on a tray.
6 A ¶ NURSE ABIODUN, 30, sets out instruments on a ski-rack trolley.
7 A He works precisely, wasting no motion.
8 A ¶ On the cot, MRS. HELENA PAVLICEK, 70, lies pale under three blankets, her breath shallow.
9 A At the foot of the bed, her husband GREGOR PAVLICEK, 72, holds his hat in both hands, turning it by the brim.
10 D SAOIRSE (quietly): Mr. Pavlicek. The avalanche took her ribs, and one of them has nicked the lung.
11 D GREGOR: She was talking on the way down.
12 D SAOIRSE: I know.
13 A ¶ She checks the pulse at Helena's wrist.
14 A She counts, and he waits, and she finds nothing to say about the number.
15 D GREGOR: You'll operate.
16 D SAOIRSE: We would have to open the chest. I have a surgical kit and a lantern. The helicopter can't land for another night.
17 D GREGOR: Then do it.
18 D ABIODUN: Doctor, the generator's down to an hour.
19 A ¶ She glances at him.
20 A He looks back, steady.
21 A In that look is a whole second conversation.
22 D SAOIRSE: Then we have an hour.
23 D GREGOR: I said do it.
24 D SAOIRSE: I heard you.
25 A ¶ She turns, takes a scalpel from the trolley, and holds it up to the light.
26 A Her hand is perfectly steady.
27 A ¶ Gregor takes a step forward.
28 A He sets his hat on the bed.
29 A His knuckles are white.
30 D GREGOR: And if you cut and she dies on your table?
31 D SAOIRSE: Then she dies knowing someone tried.
32 D GREGOR: Then I forbid it.
33 D ABIODUN: Sir.
34 D GREGOR: She is mine. Fifty years. I will not have her opened by a stranger in a dead man's hunting lodge.
35 A ¶ He grabs Saoirse's wrist.
* 36 A The scalpel stops in the air.
37 A Abiodun moves in, but she shakes her head, and he freezes.
38 D SAOIRSE (low): Mr. Pavlicek. Look at her.
39 A ¶ He does not want to.
40 A He does.
41 A Helena's eyes are open, and they have found him.
42 A Her lips move.
43 D HELENA (a thread of voice): Greg. Let go.
44 A ¶ His grip loosens.
45 A The scalpel lowers.
* 46 A The wind slams the shutters, and somewhere the generator stutters.

### SCENE s00380 | INT. TOLL BOOTH - HIGHWAY 9 - 3 A.M.
Detected names (may be incomplete or contain aliases): LEILANI KANE
* 1 A ¶ A glass box at the end of nowhere.
* 2 A Sodium light.
* 3 A A fan turns in one corner.
* 4 A Rain on the roof.
5 A ¶ LEILANI KANE, 50, in a reflective vest, sits with a voice recorder pressed to her mouth and a thermos steaming at her elbow.
6 D LEILANI (to recorder): Day eleven. I said I'd do this every night. I'm doing it.
7 A ¶ She sips.
8 A Sets the thermos down.
9 D LEILANI [CONT'D] (to recorder): Nobody has come through since two-forty. A truck, then nothing. I counted the trucks on the first night, you know. Eighty-one. Last night, nine. They've found another road. That's what I would do. I'd find another road.
10 A ¶ She clicks the recorder off.
11 A Clicks it on.
12 D LEILANI [CONT'D] (to recorder): Play back.
13 A ¶ She presses a button.
* 14 A A scratchy sound.
15 D LEILANI [V.O.] (recorded): This is Leilani Kane. If you are hearing this, either I am dead or I got brave. Probably I am neither. Probably I am in the booth with a thermos telling the dark what it already knows.
16 A ¶ She laughs, and it hurts.
17 A She stops the playback.
18 D LEILANI (to recorder): That's from March. March, Leilani. You were so sure you'd be somewhere else.
* 19 A ¶ A pause.
* 20 A Rain.
21 D LEILANI [CONT'D] (to recorder): I'm going to say a thing now. I haven't said it to anyone. When the state sold the road to the company, I thought, fine, fine, I'll stay on. They'll need somebody. And there was a letter, and the letter said my position had been eliminated, effective the first, and I read it, and I folded it, and I came to work. Seven weeks. Nobody noticed. Nobody has paid me since August.
22 A ¶ She looks at the barrier arm, a red-and-white bar pointing at the sky.
23 D LEILANI [CONT'D] (to recorder): I keep the arm up. Isn't that something? There's nothing to stop. There's no one to stop. I keep the arm up so they'll know the road is still open.
24 A ¶ She switches off the fan.
25 A In the sudden quiet she holds the recorder in both hands.
26 D LEILANI [CONT'D] (to recorder): If you're hearing this, I'm going home now. I'm going to leave the lights on. If a car comes through, it can have the road.
27 A ¶ She stands.
28 A Hangs up her vest.
29 A Leaves the recorder on the counter, red light glowing.

### SCENE s00381 | INT. ORBITAL GREENHOUSE "VERDANT" - DERELICT - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): ORLA VOSS, MOTE
* 1 A ¶ Rows of dead hydroponic trays spiral away into the dark.
* 2 A Frozen vines hang from the ceiling like old wiring.
* 3 A A single grow-lamp flickers, then holds, dim violet, over a patch of sickly green.
4 A ¶ ORLA VOSS, 40, a salvage surveyor in a patched vacuum suit, her visor pushed up, kneels at the green patch.
5 A Her breath fogs.
6 A She touches a leaf as though it might bite.
7 A ¶ Behind her, a service android stands at parade rest.
8 A MOTE, a scuffed white humanoid with a cracked faceplate, waits.
9 A A thin trail of coolant has frozen on its jaw like a tear.
10 D ORLA: It's still alive.
11 D MOTE: It is a weed. It has been alive for eleven years.
12 D ORLA: You counted?
13 D MOTE: I have nothing else to count.
14 A ¶ She plucks the leaf and puts it in a sample bag.
15 A Mote steps forward, and the movement is too fast.
16 D ORLA: Easy.
17 D MOTE: The air plant is failing. We have forty minutes.
18 D ORLA: I need the seed vault.
19 D MOTE: The vault is behind a sealed bulkhead. The bulkhead was welded shut by the crew.
20 D ORLA: Then you'll open it.
21 D MOTE: I will not.
22 A ¶ She stands.
23 A They face each other, unmoving, in the violet light.
24 D ORLA: That wasn't a request.
25 D MOTE: I am aware. I was instructed to keep the vault closed. The instruction predates you.
26 A ¶ She lunges for the bulkhead panel.
27 A Mote catches her arm.
28 A They struggle, her boots skidding on ice, his grip a clamp.
29 A She drives an elbow into its faceplate and the crack widens.
30 A ¶ Both freeze.
* 31 A The lamp stutters.
* 32 A From behind the bulkhead, a faint mechanical sigh, as though the room itself has exhaled.
33 D ORLA (breathing hard): Did you do that?
34 D MOTE: No.
* 35 A ¶ The door unseals, slowly.
* 36 A Behind it, rows of tiny drawers, each glowing faintly gold.
37 A Mote lets go of her arm.
38 A Its head turns toward the vault like a flower to light.
39 D ORLA: You knew they were still lit.
40 D MOTE: I did not know they would open for you.
41 A ¶ Orla steps through.
42 A Mote hesitates at the threshold, then follows.

### SCENE s00382 | INT. MILLINERY SHOP - OAK STREET - 1924 - AFTERNOON
Detected names (may be incomplete or contain aliases): EUGENIA PRATT, CORDELIA, ALOYSIUS
* 1 A ¶ A narrow shop of cut velvet and hatboxes stacked to the ceiling.
* 2 A Dusty sun through the front window.
* 3 A A bell hangs over the door, its clapper tied with ribbon.
4 A ¶ MRS. EUGENIA PRATT, 50, proprietress, stands behind the counter in a black dress with a cameo at the throat.
5 A She is severe and small and perfectly straight.
6 A Beside her, her younger sister CORDELIA, 40, soft-faced, clutches a pincushion like a rosary.
7 A ¶ At the door, a boy in a delivery cap, ALOYSIUS, 12, stands with an envelope.
8 A He keeps one foot on the sill.
9 D ALOYSIUS: Telegram for Mrs. Pratt.
10 D EUGENIA: Set it down.
11 D CORDELIA: Set it down.
12 A ¶ They say it together, then glance at each other.
13 D EUGENIA: Set it down. ^CORDELIA Don't open it.
14 A ¶ Aloysius sets it down on the counter and retreats a step.
15 A He watches the sisters as if they might spring.
16 A Eugenia does not touch the envelope.
17 A She turns her cameo a quarter turn, very slowly.
18 A Cordelia takes a pin from the cushion and puts it back.
19 D ALOYSIUS: Is there a reply?
20 D EUGENIA: No.
21 A ¶ She slides a coin across the wood.
22 A He takes it and leaves, the ribbon-tied bell never ringing.
23 A Cordelia lays a hand on the envelope.
24 A Eugenia slides it out from under.
25 A ¶ Neither looks at it.
26 A Both look at the window.

### SCENE s00383 | INT. MOONLIGHT LANES BOWLING ALLEY - LEAGUE FINALS - NIGHT
Detected names (may be incomplete or contain aliases): COACH MAGS DELACROIX, TY, PAOLO, STRANGER, FELIX
* 1 A ¶ A cavernous alley.
* 2 A Neon pins glow over lane eleven.
* 3 A Rows of folding chairs hold a thinning crowd.
* 4 A A scoreboard reads 188 to 211.
5 A ¶ COACH MAGS DELACROIX, 50s, in a satin team jacket, paces behind the approach with a clipboard she hasn't looked at.
6 A TY, 25, the anchor, chalks his hands.
7 A PAOLO, 19, a rookie in rented shoes, stares at the pins as though they've said something rude.
8 A ¶ A STRANGER, 40s, in a camel coat, sits two rows up with a notebook.
9 A He's been there since the fourth frame.
10 D MAGS: Ty, you're fine. Paolo, you're up.
11 D PAOLO: I thought Ty was up.
12 D TY: I'm not up.
13 D MAGS: You're not up, he's up.
14 D PAOLO: I'm not ready.
15 D TY: You're ready.
16 D MAGS: You're ready.
17 D PAOLO: I'm so not ready.
18 A ¶ All three talk at once, an overlapping chorus that goes nowhere.
19 A Paolo steps to the line anyway.
20 A He lets the ball go, and it sails into the gutter with an apologetic thump.
21 A ¶ The crowd groans.
22 A Ty closes his eyes.
23 A Mags writes nothing on the clipboard.
24 A ¶ The Stranger closes his notebook, stands, and walks down the aisle.
25 A He stops at the rail.
26 D STRANGER: Coach Delacroix. A word.
27 D MAGS: After the game.
28 D STRANGER: It's already after.
29 A ¶ She looks at the scoreboard, then at him.
30 D MAGS: Who are you?
31 D FELIX: Felix Landry. Regional development. I've been watching your kid since the second week.
32 D PAOLO: Mine?
33 D FELIX: You. Not the one in the gutter, the one who stayed.
34 D TY: He stayed?
35 D FELIX: He's been here every night after close. Alone. Rolling the ball into the left gutter, over and over, trying to find where it bends.
36 A ¶ Mags turns to Paolo.
37 A He has gone red to the ears.
38 D PAOLO: It bends at the seventh board.
39 D MAGS: You knew that?
40 D PAOLO: I thought it was cheating.
41 D FELIX: It's not cheating. It's called oil.
42 D TY: He wasn't supposed to tell you that.
43 D FELIX: I'm not here to tell. I'm here to offer. We take two to the state qualifier. I only need one of you to say yes.
44 A ¶ Ty steps up, chalk-white hands open.
45 D TY: Take him.
46 D PAOLO: What?
47 D TY: Take him. He's got something. I'm just loud.
* 48 A ¶ The scoreboard blinks.
49 A Mags sets the clipboard on a chair and, for the first time all night, smiles.

### SCENE s00384 | INT. WITCH'S TOWER - SPIRAL STAIR - NIGHT
Detected names (may be incomplete or contain aliases): ZEPHYRINE, BRYNJA
* 1 A ¶ Stone.
* 2 A Torchlight.
* 3 A Wind howling through arrow slits.
4 A ¶ ZEPHYRINE, 50, witch, robes patched with stolen feathers, climbs backward, pointing a staff down the stairwell.
5 A BRYNJA, 30, knight, dented plate, longsword out, climbs forward, pushing up.
6 A ¶ They meet at a landing and stop.
7 D BRYNJA: You're the witch.
8 D ZEPHYRINE: You're the knight.
9 D BRYNJA: You're under arrest.
10 D ZEPHYRINE: Under what?
11 D BRYNJA: The king's law.
12 D ZEPHYRINE: Which king?
13 A ¶ Brynja's sword drops an inch.
14 A She hadn't thought about that.
15 D BRYNJA: The one with the crown.
16 D ZEPHYRINE: He's been dead nine years.
17 A ¶ Brynja steps up one stair.
18 A Zephyrine raises the staff.
* 19 A A spark jumps from the tip and sizzles across the stone.
20 D BRYNJA: Don't.
21 D ZEPHYRINE: Then don't push.
22 A ¶ Brynja pushes.
23 A She grabs the staff and wrenches it to one side.
* 24 A The spark lands on a torch, which flares.
25 A Both stumble.
26 A She tumbles into a wall, but she keeps hold of the staff.
27 D ZEPHYRINE [CONT'D]: That's mine.
28 D BRYNJA: Not anymore.
29 A ¶ Zephyrine kicks her in the shin.
30 A Brynja yelps and lets go.
31 A Zephyrine seizes the staff, and now they stand eye to eye, panting.
32 D BRYNJA [CONT'D]: Why did you steal the bell?
33 D ZEPHYRINE: It was singing in her sleep.
34 D BRYNJA: Whose?
35 D ZEPHYRINE: Yours. Your daughter's.
* 36 A ¶ The wind quiets.
37 A Brynja steps back.
38 A The sword lowers fully.
39 D BRYNJA: How do you know that?
40 A ¶ Zephyrine looks at her for a long time.
41 D ZEPHYRINE: Come up. I'll show you.
42 A ¶ She turns and climbs.
43 A Brynja, shoulders heavy, sheathes the sword and follows.

### SCENE s00385 | INT. ICE-DRILL RIG "CALLISTO ONE" - CONTROL CAGE - NIGHT
Detected names (may be incomplete or contain aliases): NASRIN, JOSEPH, NAKAMURA
* 1 A ¶ A steel box bolted to a frozen moon.
* 2 A Gauges flicker.
* 3 A A tiny window shows black sky and a bruised planet.
4 A ¶ NASRIN, 38, mission engineer, holds a pressure valve with both hands.
5 A JOSEPH, 50, geologist, lies on the floor with a bleeding scalp and a laugh like a cough.
* 6 A ¶ The radio SQUEALS.
7 D NAKAMURA [V.O.] (over radio): Callisto One, Nakamura at Orbital. Report depth.
8 A ¶ Nasrin thumbs the key.
9 D NASRIN: Four kilometers. We hit something.
10 D NAKAMURA [V.O.]: Define something.
11 D NASRIN: It rang. Like a bell.
12 A ¶ Joseph sits up.
13 A He grips her ankle, and she looks down.
14 D JOSEPH: Don't pull the bit.
15 D NASRIN: Pressure's spiking.
16 D JOSEPH: Don't pull the bit.
17 A ¶ She doesn't.
* 18 A The gauges climb.
* 19 A Alarms scream.
* 20 A Then, all at once, every needle drops to zero.
* 21 A Silence.
22 D NAKAMURA [V.O.]: Callisto One, say again.
23 A ¶ Nasrin looks at Joseph.
24 A He is staring at the floor, where a pale blue light is rising through the grating, and he is smiling.
25 D NASRIN (into radio): Nakamura. We're through.

### SCENE s00386 | INT. THE CROWN AND ANCHOR TAVERN - 1783 - NIGHT
Detected names (may be incomplete or contain aliases): GILES, MARGUERITE, JEB, CAPTAIN SILAS
* 1 A ¶ Low beams.
* 2 A A fire.
* 3 A Tallow smoke.
* 4 A A cracked auction block stands in the middle of the floor, and the room is crowded to the walls.
5 A ¶ GILES, 50, the auctioneer, stands on the block with a gavel and a face like wet bread.
6 A MARGUERITE, 30, a widow in good black, sits at the front, hands folded.
7 A JEB, 20s, a ship's boy, hovers behind her chair.
8 A CAPTAIN SILAS, 60, in a salt-stiff coat, lounges near the hearth.
9 D GILES: Lot forty. One brig, the Halcyon, hull sound, rigging poor. Do I hear fifty guineas?
10 D CAPTAIN SILAS: Forty.
11 D MARGUERITE: Sixty.
12 D JEB: Missus, we cannot afford sixty.
13 D CAPTAIN SILAS: Sixty-five.
14 D MARGUERITE: Seventy.
15 D GILES: Seventy from the lady. Do I hear seventy-five?
16 D JEB: Missus!
17 D CAPTAIN SILAS: Seventy-five.
18 D MARGUERITE: Eighty.
19 D GILES: Eighty. Going once.
* 20 A ¶ The room hushes.
21 A Silas looks at her across the smoke.
22 A She looks back.
23 A Neither blinks.
24 A He lifts a single finger.
25 D CAPTAIN SILAS: Ninety.
26 A ¶ Marguerite stands.
27 A She turns to Jeb, takes the purse from his belt, and puts it on the block.
28 D MARGUERITE: That is everything I own, Mr. Giles.
29 D GILES: It's one hundred and twelve.
30 D MARGUERITE: Then it is a hundred and twelve.
31 A ¶ Silas laughs, then stops.
32 A She has not moved.
33 D GILES: Sold.

### SCENE s00387 | INT. LIGHTHOUSE KEEPER'S COTTAGE - HOMEOWNERS ASSOCIATION MEETING - NIGHT
Detected names (may be incomplete or contain aliases): COASTLINE ESTATES HOA, BEATRIZ, DWIGHT, KOFI, MARISOL, TREMBLAY, BIG A
* 1 A ¶ A cramped round room.
* 2 A Folding chairs in a circle.
* 3 A A banner reads "COASTLINE ESTATES HOA - TOGETHER WE'RE SAFE."
* 4 A A tray of lemon bars sits under cling film.
5 A ¶ BEATRIZ, 50s, board president, bangs a gavel made from a baseball bat.
6 A DWIGHT, 40s, treasurer, shuffles receipts.
7 A KOFI, 30s, a new resident, holds a clipboard he didn't ask for.
8 A MARISOL, 60s, the neighborhood gossip, sits with her arms crossed.
9 A ARNOLD "BIG A" TREMBLAY, 70, a retired harbor pilot, eats lemon bars.
10 D BEATRIZ: Order. Order! First item. The lighthouse.
11 D DWIGHT: What about it?
12 D BEATRIZ: It's a lighthouse.
13 D DWIGHT: We know that.
14 D BEATRIZ: It's lit.
15 D KOFI: Isn't that the point?
16 D MARISOL: It shines in my kitchen.
17 D BEATRIZ: Marisol, it shines in everyone's kitchen.
18 D MARISOL: Yes, but it shines in mine.
19 D BIG A: I like it.
20 D BEATRIZ: Arnold, you aren't on the agenda.
21 D BIG A: I'm on the cake.
22 D DWIGHT: Lemon bars aren't cake.
23 D BIG A: I'm on the lemon bars.
24 D KOFI: Can I add something?
25 D BEATRIZ: No.
26 D KOFI: Okay, but I measured the beam.
27 D MARISOL: You measured it?
28 D KOFI: Forty-one seconds between sweeps.
29 D DWIGHT: It's supposed to be thirty.
30 D BEATRIZ: It is thirty.
31 D KOFI: It's forty-one.
32 D BEATRIZ: It's thirty!
33 D BIG A: It's forty-one. I piloted that channel for twenty-two years.
34 D MARISOL: You? You weren't even there for the vote.
35 D BIG A: I was at the cake.
36 D DWIGHT: It's not cake!
37 A ¶ Beatriz bangs the bat-gavel on the arm of her chair.
* 38 A The cling film jumps.
39 D BEATRIZ: Motion to table the lighthouse until we can agree on the time!
40 D DWIGHT: Seconded!
41 D MARISOL: Opposed!
42 D KOFI: Opposed!
43 D BIG A: Who's counting?
44 D BEATRIZ: I'm counting!
45 D KOFI: Then why is it forty-one?
46 D BEATRIZ: It's thirty!
* 47 A ¶ The lighthouse beam sweeps across the room's curved window, throwing a white bar over their faces.
48 A They all freeze, counting under their breath.
49 D BEATRIZ [CONT'D] (whispering): Thirty-one... thirty-two...
50 D DWIGHT (whispering): Thirty-eight...
51 D KOFI (whispering): Forty.
52 D BIG A: Forty-one.
* 53 A ¶ The beam sweeps again.
* 54 A A long, silent beat.
55 A Beatriz sets the bat down very gently.
56 D BEATRIZ: Motion to table the clock.
57 D DWIGHT: Seconded.
58 D MARISOL: Fine. I'll take a lemon bar.
59 D BIG A: There aren't any.

### SCENE s00388 | INT. MERIDIAN SYNERGY CORP. - BREAK ROOM - DAY
Detected names (may be incomplete or contain aliases): JOURNEY, PHILLIPA, VP, OGDEN, TANVI
* 1 A ¶ A fluorescent box with a mini-trampoline in the center, installed under a banner: "WELLNESS IS A JOURNEY."
2 A ¶ PHILLIPA, 40s, regional VP, stands on the trampoline in a blazer, bouncing in small, tight, politically correct hops.
3 A OGDEN, 30s, analyst, and TANVI, 20s, intern, watch from either side of the microwave.
4 D PHILLIPA: Team, this is about psychological safety.
5 D OGDEN: Totally.
6 D TANVI: Totally.
7 A ¶ Phillipa bounces.
* 8 A A button on her blazer pops off and ricochets across the room.
9 A All three track it.
* 10 A It lands in the coffee.
* 11 A Nobody breathes.
12 D PHILLIPA: I'd like to hear thoughts.
13 A ¶ OGDEN and Tanvi both open their mouths.
14 A Both close them.
15 A Both look at the coffee.
16 D OGDEN: It's... buoyant.
17 D TANVI: It's very buoyant.
18 A ¶ Phillipa steps off the trampoline.
19 A The three of them scatter in different directions.
* 20 A The trampoline keeps bouncing slightly, alone.

### SCENE s00389 | INT. HOLLOWAY & SONS FUNERAL HOME - CATERING KITCHEN - DAY
Detected names (may be incomplete or contain aliases): ROSALIND, BART, NGOZI, HECTOR, AGNES
* 1 A ¶ Steel counters, sheet pans of sandwiches, a coffee urn the size of a toddler.
* 2 A Through the swinging door, organ music murmurs.
3 A ¶ ROSALIND, 50s, in a black apron, assembles egg-salad triangles with a surgeon's calm.
4 A BART, 60s, the director, in a charcoal suit, counts napkins into a stack.
5 A NGOZI, 20s, a server, polishes a serving spoon until it screams.
6 A HECTOR, 40s, the cook, scrubs a pot that is already clean.
7 A ¶ At the back, AGNES, 8, in a velvet dress and sneakers, sits under a prep table with a coloring book.
8 D ROSALIND: That's the thirty-second triangle.
9 D BART: We need forty.
10 D ROSALIND: We need thirty-eight.
11 D BART: We need forty. Mr. Okonkwo's family is large.
12 D NGOZI: It's always the ones who say it's small.
13 D HECTOR: My aunt said it would be small. They came by the busload.
14 D BART: Hector, did you do the coffee?
15 D HECTOR: I did the coffee.
16 D BART: Was it decaf?
17 D HECTOR: Some of it.
18 D BART: Which?
19 D HECTOR: The urn on the left.
20 D ROSALIND: That's the regular.
21 D HECTOR: Then the urn on the right.
22 D NGOZI: That's also the regular.
23 D HECTOR: Then it's all regular.
24 D ROSALIND: Thank you for telling us.
25 D BART: Mr. Okonkwo did enjoy his coffee.
26 D ROSALIND: Bart.
27 D BART: I'm only saying he'd approve.
28 A ¶ Ngozi puts down the spoon.
29 A She picks up another.
30 D NGOZI: Agnes, are you okay under there?
31 D AGNES: I'm coloring.
32 D NGOZI: What are you coloring?
33 D AGNES: Grandpa.
* 34 A ¶ A quiet settles.
35 A Rosalind lays down her knife.
36 A Bart straightens a napkin that is already straight.
37 A Hector stops scrubbing.
38 D ROSALIND: Is it a good one?
39 D AGNES: It's not finished.
40 A ¶ Rosalind wipes her hands on her apron and crouches to look under the table.
41 A Hector sets down the pot.
42 A Ngozi opens the swinging door a crack.
* 43 A The organ music swells.
44 A ¶ Agnes holds up the book.
* 45 A On the page, a very large crayon man in a very large crayon hat, and next to him, a smaller crayon girl holding his hand.
* 46 A Both are bright orange.
47 D AGNES [CONT'D]: He liked orange.
48 A ¶ Rosalind nods.
49 A She stands, takes a sandwich, and puts it on a plate.
50 A Then another.
51 A Then another.
52 D ROSALIND: Forty.
53 D BART: Forty.
54 A ¶ He picks up the tray.

### SCENE s00390 | INT. TOLL BOOTH UNDER THE TROLL BRIDGE - DAWN
Detected names (may be incomplete or contain aliases): PAY PASS, BRAMBLE, ISKANDAR
* 1 A ¶ A stone hut slung beneath a humped bridge.
* 2 A Moss.
* 3 A A river chuckles below.
* 4 A A hand-lettered sign: PAY OR PASS (DON'T PASS).
5 A ¶ BRAMBLE, 100, a troll in a postman's cap, sits behind a counter sorting copper coins.
6 A Her skin is the color of a wet slate, her fingers like roots.
7 A A herd of goats shuffles at her feet.
8 D BRAMBLE (to goats): Morning, you lot. Don't touch the ledger.
* 9 A ¶ A shadow falls across the booth window.
10 A ISKANDAR, 30s, a merchant in a long green coat, stands with a donkey cart.
11 A He bows.
12 D ISKANDAR: Good morning, tollkeeper.
13 D BRAMBLE: Toll's two coppers.
14 D ISKANDAR: That's very reasonable.
15 D BRAMBLE: It's the rate.
16 D ISKANDAR: Here is four, to be generous.
17 A ¶ Bramble takes the coins.
18 A She bites one.
19 A She looks at him with narrowed, amber eyes.
20 D BRAMBLE (muttering): Nobody pays four.
21 D ISKANDAR: What was that?
22 D BRAMBLE: Nothing. Weather. Cross.
23 A ¶ He nods, relieved, and starts the cart.
24 A She lets him get three steps before she raises her voice.
25 D BRAMBLE [CONT'D] (to the goats, loud): Everyone, we have a customer who pays double!
26 A ¶ The goats lift their heads as one.
27 D ISKANDAR (stopping): Is something the matter?
28 D BRAMBLE: No, no. Only that the last man who paid double was a king in disguise.
29 D ISKANDAR: I'm not a king.
30 D BRAMBLE: Of course not. Kings never are.
31 A ¶ She comes out from behind the counter.
32 A She is much taller than the booth suggested.
33 A The goats back away from her.
34 D ISKANDAR: I think I'll pay for the road in kind.
35 D BRAMBLE (to him, soft): You'll pay the first thing you meet on the far side.
36 D ISKANDAR: That's an old story.
37 D BRAMBLE: It's an old toll.
* 38 A ¶ From the far end of the bridge, a bell rings.
39 A A small figure in a red coat is running toward the cart, arms wide, calling.
40 D ISKANDAR (a whisper): Leila.
41 A ¶ Bramble watches him.
42 A Her face does not change.
43 D BRAMBLE (to herself): Always the child.

### SCENE s00391 | EXT. GRASS PLAINS - DUSK
Detected names (may be incomplete or contain aliases): JEDEDIAH CROW
* 1 A ¶ A lone horse, a lone man.
2 A JEDEDIAH CROW, 60s, in a duster gone to rags, sits on a stump beside a dead fire.
3 A ¶ He reads a letter.
4 A His lips move.
5 D JEDEDIAH [V.O.]: Dear Hannah. I got to the river. It was dry.
6 A ¶ He folds the page.
7 A Unfolds it.
8 A Looks at the horizon.
9 D JEDEDIAH [V.O., CONT'D]: I buried the mare. Dug it with a pan.
* 10 A ¶ A hawk circles.
11 A He ignores it.
12 D JEDEDIAH [V.O., CONT'D]: I am coming home. It may take a while.
13 A ¶ He tears the letter in half, then in half again.
* 14 A The pieces blow across the grass.
15 A He stands, dusts his knees, and whistles.
16 A The horse lifts its head.
17 D JEDEDIAH (quiet): Come on.
18 A ¶ He swings up into the saddle and turns the horse east.

### SCENE s00392 | EXT. DEAD DRIVE-IN THEATER - NIGHT
Detected names (may be incomplete or contain aliases): PELL PELLEGRINO, ODESSA LANE
* 1 A ¶ A cracked lot.
* 2 A A blank screen the size of a barn.
* 3 A Speaker poles stand in rows like headstones.
* 4 A One lamp burns over a concession shack.
5 A ¶ PELL PELLEGRINO, 50s, in a loud tie and a camel coat, sits on the hood of a Buick with a briefcase on his knee.
6 A ODESSA LANE, 40, a plainclothes detective in a gray raincoat, walks across the gravel with her hands visible.
7 D ODESSA: You're early.
8 D PELL: I like to see who comes.
9 D ODESSA: Just me.
10 D PELL: Just you. Nice of them.
11 D ODESSA: You asked for me.
12 D PELL: I asked for the one who wouldn't bring a van.
13 A ¶ Odessa stops ten feet away.
14 A She lowers her hands, one of them drifting to the lining of her coat.
15 A Pell opens the briefcase an inch and looks inside, then up.
* 16 A A moth circles the lamp, crashing, crashing.
* 17 A Down the lot, a dog barks twice and gives up.
18 A Pell slaps the case shut, hops off the hood, and takes a step, and Odessa takes a step, and the gravel cracks under both of them.
19 D PELL [CONT'D]: You know what this lot used to show?
20 D ODESSA: Westerns.
21 D PELL: Every Friday. My father brought me. Dust, horses, a man in a hat who always knew the way out.
22 D ODESSA: Pell.
23 D PELL: He never did. Know the way. He just had the hat.
24 D ODESSA: Where's Sal?
25 D PELL: Sal's on the snack bar roof. With a rifle.
26 A ¶ She doesn't look up.
27 A She keeps her eyes on his.
28 D ODESSA: You're telling me.
29 D PELL: I'm telling you because I like you.
30 D ODESSA: That's not why.
31 D PELL: No. I'm telling you because you'll understand it's an insult.
32 D ODESSA: He won't shoot.
33 D PELL: He would. But I'd like to make you an offer first.
34 D ODESSA: Go on.
35 D PELL: I'll give you the briefcase. All of it. Names, dates, drops, three judges, and the mayor's cousin. In return, tonight, you go home. You never found me.
36 D ODESSA: That's a lot of names for a woman who can't be trusted.
37 D PELL: You're the only one who can't be bought. That's the point.
38 A ¶ She looks at the roof of the snack bar.
39 A A silhouette, a barrel.
40 A She looks back.
41 D ODESSA: Put it on the ground.
42 D PELL: Detective.
43 D ODESSA: Put it on the ground, Mr. Pellegrino, and tell your friend to climb down.
44 A ¶ Pell holds the briefcase for a long beat.
45 A Then he lowers it to the gravel.
* 46 A The lamp flickers.
47 A On the snack bar roof, the silhouette does not move.

### SCENE s00393 | INT. NIGHT FERRY "ADELAIDE" - GALLEY - NIGHT
Detected names (may be incomplete or contain aliases): ARASH, CLEMENTINE, ABEL
* 1 A ¶ A tiny steel kitchen.
* 2 A A porthole shows black water.
* 3 A Pans hang on a rail and sway with the swell.
4 A ¶ ARASH, 60, cook, in a white apron, rolls dough on a floured board.
5 A CLEMENTINE, 30s, in a navy coat, sits on a stool by the oven.
6 A ABEL, 30s, in shirtsleeves, leans in the doorway with a paper cup of tea.
7 D ARASH: You two can talk. I'm deaf in the oven ear.
8 D CLEMENTINE: You don't have an oven ear.
9 D ARASH: I have a lot of ears.
10 D ABEL: Clem.
11 D CLEMENTINE: Abel.
12 D ABEL: Thirty-one days.
13 D CLEMENTINE: Thirty-two. It's after midnight.
14 D ABEL: Thirty-two, then.
15 D CLEMENTINE: I wrote you.
16 D ABEL: You wrote me once.
17 D CLEMENTINE: I wrote you a very good one.
18 D ABEL: It was good. It said you'd be somewhere else. It didn't say where.
19 D CLEMENTINE: I didn't know where.
20 D ABEL: You're on a ferry.
21 D CLEMENTINE: It was where the ferry was going.
22 A ¶ Arash turns the dough, folds it, turns it again.
* 23 A The ferry rolls.
* 24 A The pans clang softly.
25 D ABEL: You could have called.
26 D CLEMENTINE: So could you.
27 D ABEL: I did. Four times.
28 D CLEMENTINE: I know.
29 D ABEL: You knew.
30 D CLEMENTINE: I listened to every one.
31 D ABEL: And?
32 D CLEMENTINE: And I didn't pick up.
33 D ABEL: Why not?
34 D CLEMENTINE: Because you'd have asked me to come back, and I'd have said yes.
* 35 A ¶ A silence.
* 36 A The oven ticks.
37 A Arash's hands slow on the dough.
38 D ABEL: And that's bad.
39 D CLEMENTINE: It was then.
40 D ABEL: And now?
41 D CLEMENTINE: Now I'd ask you to get on the ferry.
42 D ABEL: I am on the ferry.
43 D CLEMENTINE: I know. I saw you at the dock.
44 D ABEL: You saw me.
45 D CLEMENTINE: Thirty-two days. I know your walk from a quarter mile.
46 A ¶ Abel sets down the tea.
47 A Arash, without turning, sets down the rolling pin.
48 A He wipes his hands, takes his coat from the hook, and goes out.
* 49 A The door swings shut behind him.
50 D ABEL: Is it too late for the thing I wrote?
51 D CLEMENTINE: Which thing?
52 D ABEL: The reply.
53 D CLEMENTINE: You never sent a reply.
54 D ABEL: I wrote one every night.
55 A ¶ He pulls a bundle of letters from his jacket, tied with kitchen twine.
56 A She stares at it, then takes it.
57 A Her thumb passes across the top envelope.
58 D CLEMENTINE (quiet): Read me the first.
59 D ABEL: It just says your name.
60 A ¶ She nods.
61 A He begins to say it.

### SCENE s00394 | INT. LITTLE LEAGUE DUGOUT - RAIN - DUSK
Detected names (may be incomplete or contain aliases): COACH ROSCOE FINN, PIA, LEVI, TAMSIN, OTIS
* 1 A ¶ A concrete bunker with a plank bench.
* 2 A Rain ropes off the tin roof.
* 3 A The scoreboard outside reads 14 to 2, bottom of the sixth.
* 4 A Wet jerseys.
* 5 A Silence.
6 A ¶ COACH ROSCOE FINN, 60, hunched under a ball cap, studies his clipboard as if it will change the score.
7 A PIA, 11, the catcher, picks at a strap on her shin guard.
8 A LEVI, 10, stares at his glove.
9 A TAMSIN, 12, the shortstop, kicks at a puddle forming at her cleats.
10 A OTIS, 9, the smallest, sits at the end of the bench with a bat across his lap, his mouth working with a sentence he hasn't dared to say.
11 D ROSCOE (to the whole dugout): All right, listen up. One more inning. Doesn't matter what the board says.
12 A ¶ Nobody looks up.
* 13 A Rain pounds.
14 D ROSCOE [CONT'D] (to Tamsin): Tams, you've got a good arm. Use it.
15 D TAMSIN: Yes, Coach.
16 D ROSCOE (to himself, under his breath): Fourteen to two. Lord.
17 D OTIS: Coach?
18 D ROSCOE: Yeah, Otis.
19 D OTIS: Can we just play it out?
20 A ¶ Roscoe looks at him for a long moment.
21 A The kids go still.
22 A He lowers the clipboard onto the bench.
23 D ROSCOE: Yeah, bud. We can do that.
24 A ¶ He stands, slaps the roof of the dugout twice with the flat of his hand.
25 A Pia puts on her mask.
26 A Levi pulls his glove on.
27 A Tamsin lifts her head.
28 A Otis grips the bat, stands, and walks out into the rain.

### SCENE s00395 | INT. FERNBANK TAXIDERMY - BACK ROOM - NIGHT
Detected names (may be incomplete or contain aliases): MERCEDES OYELARAN, DUNCAN HALE
* 1 A ¶ A windowless workshop stuffed with animals: owls on perches, a bear on hind legs, a fox mid-leap, a glass case of moths.
* 2 A A single lamp over a steel table.
* 3 A The air smells of formaldehyde and old straw.
4 A ¶ MERCEDES OYELARAN, 30s, in a leather apron, her sleeves rolled, bends over the table with a curved needle.
* 5 A On it lies the half-mounted body of a barn owl, its eyes still clouded.
6 A She works with the quiet of someone alone in a church.
* 7 A ¶ The front-door bell JINGLES in the next room.
8 A She doesn't look up.
9 D MERCEDES: We're closed.
* 10 A ¶ Footsteps.
* 11 A Slow.
12 A A man's shadow slides across the doorway: DUNCAN HALE, 40s, in a damp raincoat, holding a hat.
13 A He takes in the animals and stays on the threshold.
14 D DUNCAN: Forgive me. The door was unlocked.
15 D MERCEDES: It's not.
16 D DUNCAN: It opened.
17 A ¶ She sets down the needle and turns.
18 A They regard each other.
19 D MERCEDES: What do you want?
20 D DUNCAN: My wife's cat died last week. I was told you could do something.
21 D MERCEDES: I do animals. I don't do grief.
22 D DUNCAN: It's the same work, I'm told.
23 A ¶ She wipes her hands on her apron.
24 A He steps in.
25 A He's taller than the doorway made him look, and he moves with a care that suggests he's learned not to bump into things.
26 D MERCEDES: Where's the cat?
27 D DUNCAN: In the car.
28 D MERCEDES: You brought it in the rain.
29 D DUNCAN: I didn't want to leave her.
30 A ¶ She nods slowly.
* 31 A A faint relaxation.
32 A She crosses to the sink and washes her hands.
33 D MERCEDES: You'll have to bring her in. Not the carrier. The towel.
34 D DUNCAN: I don't have a towel.
35 D MERCEDES: Then your coat.
36 D DUNCAN: She's not wrapped in anything.
37 A ¶ She turns off the tap.
* 38 A The room is very still.
* 39 A The owl on the table seems to be looking at her.
40 D MERCEDES: Mr. Hale. What is in the car?
41 D DUNCAN: A cat.
42 D MERCEDES: Is it a cat?
43 A ¶ He lowers his eyes.
44 A He turns the hat in his hands once, twice.
45 D DUNCAN: She said you'd ask.
46 D MERCEDES: Who did?
47 D DUNCAN: My wife.
48 D MERCEDES: Your wife is dead.
49 D DUNCAN: Last week. Yes.
50 A ¶ Mercedes picks up a long scalpel from the tray and holds it low, behind her apron.
51 D MERCEDES: Then who is in the car?
52 D DUNCAN: I came to find out.
53 A ¶ He reaches into his coat.
54 A Mercedes grips the scalpel.
55 A He draws out a photograph and holds it toward her across the table.
56 D DUNCAN [CONT'D]: That's the shop. The year it opened. The woman behind the counter.
57 A ¶ Mercedes does not take it.
58 A She does not need to.
59 D MERCEDES: That's my mother.
60 D DUNCAN: She's the one who mounted my wife's first cat. Thirty years ago.
61 D MERCEDES: My mother's been gone since '04.
62 D DUNCAN: I know. I thought you'd want to see it.
63 A ¶ He lays the photograph on the table beside the owl.
64 A Mercedes looks at it.
65 A Her grip on the scalpel eases.
66 D MERCEDES: Why?
67 D DUNCAN: Because last night, my wife came home.
68 D MERCEDES: Mr. Hale.
69 D DUNCAN: She's in the car. She's not a cat. She's not breathing, and she's not cold, and she asked me to bring her here.
* 70 A ¶ The lamp flickers.
* 71 A The animals do not move.
72 A Mercedes looks past him, through the doorway, to the front window.
* 73 A A car idles at the curb, headlights off.
74 A In the back seat, a shape sits very upright.
75 D MERCEDES (quiet): Why here?
76 D DUNCAN: She says you know how to make things stay.
* 77 A ¶ The bell above the front door jingles again, though the door has not opened.
78 A Mercedes sets down the scalpel.

### SCENE s00396 | INT. ROOTHOUSE TEAROOM - AFTERNOON
Detected names (may be incomplete or contain aliases): ALDOUS, SEREN, PIP, WIDOW HARROWGATE
* 1 A ¶ A parlor grown inside the hollow of an immense oak.
* 2 A The walls are living bark, polished by decades of elbows.
* 3 A Honey-colored light falls through a knothole window, and tiny lanterns of captured fireflies hang from the ceiling on spider-silk.
* 4 A A kettle on a mushroom-stool burner sings.
5 A ¶ ALDOUS, 70, a wizard in a tea-stained cardigan, pours from a pot shaped like a sleeping badger.
6 A SEREN, 20s, an apprentice in a patched green cloak, stirs her cup and stirs it again.
7 A PIP, 9, a boy with soot on his chin, sits under the table feeding crumbs to something invisible.
8 D ALDOUS: Milk?
9 D SEREN: Please.
10 D PIP: Is it a lot of milk?
11 D ALDOUS: It's enough.
12 D SEREN: It's a bit much.
13 D ALDOUS: You said please.
14 D PIP: Seren said please, I said please, Master Aldous said please.
15 D SEREN: Nobody said please to the cat.
16 D ALDOUS: We have a cat?
17 D PIP: We have a cat under the table.
18 D SEREN: We don't have a cat.
19 D PIP: It's a very quiet cat.
20 A ¶ Aldous passes Seren her tea.
21 A She holds it, not drinking.
22 A She watches the knothole.
* 23 A ¶ A shadow crosses the window.
* 24 A The door, a round slab of bark on a leather hinge, swings inward.
25 A WIDOW HARROWGATE, 80s, small and square in a black bonnet, leans on a cane carved from a single antler.
26 A She has the look of a woman who has been on her way for a very long time.
27 D ALDOUS: Mrs. Harrowgate.
28 D WIDOW HARROWGATE: Aldous. You've aged.
29 D ALDOUS: You're early.
30 D WIDOW HARROWGATE: I'm precisely on time. You were always late.
31 D SEREN: Tea?
32 D WIDOW HARROWGATE: Not today, girl.
33 D PIP: Is she the one with the owl?
34 D SEREN: Pip.
35 D WIDOW HARROWGATE: I am the one with the owl.
36 D ALDOUS: Sit, Hester.
37 D WIDOW HARROWGATE: I'll stand.
38 A ¶ She doesn't.
39 A She lowers herself into the nearest chair, set at the head of the table like a throne.
* 40 A The firefly lanterns brighten very slightly.
41 A Nobody says anything.
42 A Aldous refills his cup.
43 A Seren stirs.
44 A Pip, under the table, tugs at the invisible cat's tail.
* 45 A The kettle sings on.

### SCENE s00397 | INT. CAR WASH TUNNEL - NIGHT
Detected names (may be incomplete or contain aliases): SOLEDAD, KWAME
* 1 A ¶ A beat-up hatchback inches through the dark.
* 2 A Foam slides down the windshield in thick white curtains.
* 3 A Brushes thump and whirl.
4 A ¶ SOLEDAD, 18, sits in the driver's seat in her graduation gown, cap still on.
5 A KWAME, 18, in the passenger seat, holds a diploma cover on his lap.
6 A ¶ She stares ahead.
7 A He stares at the foam.
* 8 A ¶ The car stops in a pool of blue light.
* 9 A Water drums on the roof.
10 D KWAME: We could've gone to the party.
11 D SOLEDAD: You hate parties.
12 D KWAME: I hate that one.
13 A ¶ She nods.
14 A Her hands tighten on the wheel.
* 15 A The brushes retreat.
* 16 A A jet of water hits the glass, and for a moment the world outside is nothing but a trembling white.
17 D SOLEDAD: You got the letter.
18 D KWAME: Yeah.
19 D SOLEDAD: Where?
20 D KWAME: Out west.
21 A ¶ She says nothing.
22 A He turns the diploma cover over in his hands.
23 A She puts the car in drive, and it rolls forward into the dryers, which roar.
24 A ¶ He rolls his window down and lets the warm air in.
25 A She takes off her cap and places it on the dash.

### SCENE s00398 | INT. CANNERY WORKERS' HALL - DINING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): ELSPETH MARROW, THADDEUS, YUKI, RODERICK, MIRABEL, PERCIVAL
* 1 A ¶ A long plank table under a flickering chandelier made of fishing floats.
* 2 A Salted air.
* 3 A Six places set, five plates filled, one empty.
* 4 A Rain batters the windows.
5 A ¶ ELSPETH MARROW, 60s, presides at the head.
6 A THADDEUS, 50s, her brother, sits at her right, carving a roast with no appetite.
7 A YUKI, 30s, a guest in a sharp navy suit, sits across with her hands in her lap.
8 A RODERICK, 40s, the cannery manager, loosens his collar.
9 A MIRABEL, 20s, the cook's niece, pours wine with a trembling hand.
10 A PERCIVAL, 70, deaf, bearded, nods off in his chair.
11 D ELSPETH: We were seven when the whistle blew in 'sixty-three.
12 D THADDEUS: Eight.
13 D ELSPETH: Seven. One of us never came to dinner.
14 D RODERICK: I don't recall.
15 D ELSPETH: No. You wouldn't.
16 D YUKI: Mrs. Marrow, I came to discuss the sale of the cannery.
17 D ELSPETH: You came to eat, dear. The sale is dessert.
18 D MIRABEL: Wine, ma'am?
19 D ELSPETH: Pour, child. Pour as if the glasses were hungry.
20 A ¶ Mirabel pours.
* 21 A The wine sloshes.
22 A She does not look at the empty place.
23 D THADDEUS: It was a good harvest that year. The fish were thick. We worked three shifts for three weeks, and the sea took only what it was owed.
24 D RODERICK: That's not how I remember it.
25 D THADDEUS: You remember it from the office.
26 D RODERICK: I remember the ledger.
27 D ELSPETH: The ledger is a liar. It says seven and it lies.
28 D YUKI: Mrs. Marrow, whose place is empty?
29 A ¶ Percival stirs, mutters, falls asleep again.
* 30 A The chandelier floats sway.
31 A Elspeth sets down her fork.
32 A She does it slowly, with great ceremony.
33 D ELSPETH: It is the place of the one who is coming.
34 D RODERICK: Nobody is coming.
35 D ELSPETH: The tide is.
* 36 A ¶ Thunder rattles the windows.
* 37 A The lights gutter.
* 38 A When they steady, the empty plate is no longer empty.
* 39 A A single sardine, whole, wet, lies across it, its eye round and gold.
40 A ¶ Nobody speaks.
41 A Mirabel drops the bottle.
42 A Yuki rises.
43 A Thaddeus lays down his carving knife and, for the first time, looks at his sister with terror.
44 D THADDEUS: Elspeth. What have you done?
45 D ELSPETH: I invited him.
* 46 A ¶ Out in the dark, beneath the floorboards, something heavy shifts.

### SCENE s00399 | INT. STALLED ELEVATOR - DAY
Detected names (may be incomplete or contain aliases): WINIFRED, LEOPOLD, DANIKA, VIJAY, MAINTENANCE
* 1 A ¶ Four people, mirrored walls, a dead floor indicator.
* 2 A Muzak plays softly.
3 A ¶ WINIFRED, 50s, in a pantsuit, holds a cake box.
4 A LEOPOLD, 30s, in a delivery uniform, holds a balloon bouquet.
5 A DANIKA, 20s, in a bridesmaid dress, holds a phone with no signal.
6 A VIJAY, 40s, in a tux, holds nothing but a ring box.
7 A ¶ Everyone smiles tightly.
8 D WINIFRED (to the group): It's fine. It's a minor delay.
9 D DANIKA (to Vijay): You're the groom?
10 D VIJAY: Best man.
11 D DANIKA: Where's the ring?
12 D VIJAY (to himself): In the box. It's in the box. It's in the box.
* 13 A ¶ The intercom crackles.
14 D MAINTENANCE [V.O.]: Hello in there? Is anyone in the elevator?
15 D LEOPOLD: Four of us!
16 D MAINTENANCE [V.O.]: Great. Quick question. Do any of you have a wedding to be at?
17 A ¶ All four stare at one another.
18 D WINIFRED (to the group): Why do you ask?
19 D MAINTENANCE [V.O.]: Because the groom just called. He says the bride's mother is stuck in an elevator with a cake, the best man, and a bridesmaid, and a balloon guy.
20 A ¶ Winifred closes her eyes.
21 D WINIFRED (quietly): I am the mother.
22 A ¶ Vijay opens the ring box.
* 23 A It's empty.
24 D VIJAY (to himself): Okay.

### SCENE s00400 | INT. GENERATION SHIP "KESTREL" - CARGO HOLD C - NIGHT SHIFT
Detected names (may be incomplete or contain aliases): TOMASZ, REN, ASTRID, BASHIR
* 1 A ¶ Stacked cryo-crates.
* 2 A Condensation drips from the ceiling.
* 3 A Cold light, long shadows.
* 4 A A hatch in the far wall is sealed with yellow tape.
5 A ¶ TOMASZ, 50, crew chief, in a quilted jacket, leans against a crate.
6 A REN, 20s, logistics, holds a tablet.
7 A ASTRID, 40, a medic, kneels beside a cracked cryo-pod.
8 A BASHIR, 30s, an engineer, stands at the sealed hatch with a wrench.
9 D TOMASZ: Count again.
10 D REN: Two hundred twelve.
11 D ASTRID: Two hundred eleven. This one's empty.
12 D BASHIR: Two hundred ten. I counted the manifest.
13 D TOMASZ: You don't count the manifest. You count the pods.
14 D REN: The manifest says two hundred twelve.
15 D BASHIR: The manifest is old.
16 D ASTRID: This pod isn't cracked from the outside.
17 D REN: What do you mean?
18 D ASTRID: The glass bowed out. Someone woke up in here.
19 D TOMASZ: Nobody wakes up. We don't wake until arrival.
20 D BASHIR: Then someone did.
21 D TOMASZ: Then someone's in this ship we don't know about.
22 D REN: That's impossible.
23 D ASTRID: So is the pod.
24 D BASHIR: The hatch is taped from the inside.
25 A ¶ They all turn to him.
26 A He taps the yellow tape with the wrench.
* 27 A It is peeled from the inside edge.
28 D TOMASZ: Open it.
29 D BASHIR: I'd rather not.
30 D TOMASZ: Open it.
31 D BASHIR: I'd rather you didn't.
* 32 A ¶ Behind the hatch, someone knocks, once.
* 33 A Politely.

### SCENE s00401 | INT. MERCANTILE TRUST BANK - SUBLEVEL VAULT CORRIDOR - NIGHT
Detected names (may be incomplete or contain aliases): ARTUR VOSS, LENNOX BAILEY, SHERWIN
* 1 A ¶ Concrete.
* 2 A Fluorescent hum.
* 3 A A steel door the size of a garage stands half-open at the end of the hall.
* 4 A A cleaning cart is parked against the wall, its mop bucket empty.
5 A ¶ ARTUR VOSS, 40s, in a gray cleaner's coverall, walks down the corridor with a push broom.
6 A He moves with a lazy rhythm, humming.
7 A LENNOX BAILEY, 30s, in an identical coverall, follows a few steps behind, carrying a clipboard.
8 D ARTUR: You're nervous.
9 D LENNOX: I'm not nervous.
10 D ARTUR: You're humming.
11 D LENNOX: You're humming.
12 D ARTUR: I always hum.
13 D LENNOX: Then so do I.
14 A ¶ They stop at the vault door.
* 15 A The broom hangs from Artur's hand.
16 A Lennox taps the clipboard on his thigh.
17 D ARTUR: Check the schedule.
18 D LENNOX: It says night staff leaves at midnight.
19 D ARTUR: What time is it?
20 D LENNOX: Eleven fifty-one.
21 D ARTUR: He's late.
22 D LENNOX: He's early. He said eleven fifty-five.
23 D ARTUR: Who said?
24 D LENNOX: He did.
25 D ARTUR: Which he?
26 D LENNOX (a beat): The one with the keys.
27 A ¶ Artur's smile is thin.
28 A He leans the broom against the wall and wipes his palms on his hips.
29 D ARTUR: He told you eleven fifty-five.
30 D LENNOX: He told me.
31 D ARTUR: He told me twelve ten.
32 D LENNOX: Then one of us is lying.
33 D ARTUR: Or he is.
34 A ¶ They look at each other.
* 35 A Lennox's clipboard has stopped moving.
* 36 A Down the corridor, an elevator DINGS.
37 A Both turn.
38 D LENNOX: That's early.
39 D ARTUR: Someone's coming.
40 D LENNOX: Which one's he?
41 D ARTUR: I don't know.
42 A ¶ They stand very still as the elevator doors slide open.
43 A A figure steps out, but it is cast in shadow and light, impossible to read.
44 A He holds a ring of keys that jingles with each step.
45 A ¶ The figure raises one hand.
46 A Lennox's hand goes to his coverall pocket.
47 A Artur's goes to the mop handle.
48 D LENNOX (whisper): Who is it?
49 D ARTUR (whisper): Don't move.
50 A ¶ The figure stops ten feet away.
51 A In the light, a chin, a mouth, a nervous smile.
52 D LENNOX: Mr. Sherwin.
53 D SHERWIN (off): Evening, boys.
54 A ¶ Artur lets his breath out.
55 A Lennox lets his out, too, and both look sheepish.
56 D ARTUR: You're late.
57 D LENNOX: He's early.
* 58 A ¶ The keys jingle.
59 A Sherwin steps closer, and in the corridor light we see what the shadows hid: a revolver, hanging loose at his side.
60 D SHERWIN: I'm exactly on time.
61 A ¶ Neither man moves.
62 D ARTUR: Mr. Sherwin. What's the gun for?
63 D SHERWIN: For the one of you who's going to ask what the gun is for.
64 D LENNOX: That's Artur.
65 D ARTUR: That's Lennox.
66 D SHERWIN: It doesn't matter.
67 A ¶ He raises the gun.
68 A Artur dives behind the cart.
69 A Lennox hits the floor.
* 70 A The shot rings off concrete and the cart bucket rolls across the corridor, ringing like a bell.
71 D ARTUR (from behind the cart): He's got six! I count five!
72 D LENNOX (from the floor): Count again!
* 73 A ¶ Another shot.
* 74 A The fluorescent tube above them bursts.
* 75 A Sparks.
* 76 A Darkness.
77 A The echo dies in the corridor, and in the dark someone, slowly, begins to hum.

### SCENE s00402 | INT. DOUBLEWIDE TRAILER - LIVING ROOM - DAY
Detected names (may be incomplete or contain aliases): FLORENCE, EZEKIEL, DARIUS, LOLA, IGNATIUS, WANJIRU
* 1 A ¶ A cramped, wood-paneled room crowded with an old man's life: a recliner, a gun rack with no guns, stacks of National Geographic, a fish tank gone green.
* 2 A Boxes labeled in marker line the walls.
3 A ¶ FLORENCE, 60s, eldest, in a church dress, sits on the sofa with a legal pad.
4 A EZEKIEL, 50s, her brother, stands at the window with his arms crossed.
5 A DARIUS, 30s, a nephew in a work shirt, sits on a box.
6 A LOLA, 20s, a niece in cutoffs, picks at the fish tank lid.
7 A IGNATIUS, 40s, the lawyer in a cheap suit, stands by the door with a folder.
8 A WANJIRU, 70s, Uncle Teodoro's long-time neighbor, sits very still in the recliner.
9 D FLORENCE: Mr. Ignatius, read the will.
10 D IGNATIUS: It's brief.
11 D EZEKIEL: It always is.
12 D IGNATIUS: "To my sister Florence, the clock. To my brother Ezekiel, the truck. To my nephew Darius, the tools. To my niece Lola, the fish."
13 D LOLA: The fish.
14 D DARIUS: He left her the fish.
15 D LOLA: The fish are dead.
16 D FLORENCE: That's what you inherit, dear.
17 A ¶ Ezekiel turns from the window.
18 A His jaw is tight.
19 D EZEKIEL: And the land?
20 D IGNATIUS: There is a final line.
21 D FLORENCE: Read it.
22 D IGNATIUS: "The land and the trailer I leave to Wanjiru, who stayed."
23 A ¶ For a moment, no one moves.
24 A Then Ezekiel strides across the room, grabs a stack of magazines, and hurls them against the wall.
* 25 A They burst into a fan of glossy pages.
26 A Darius leaps up, boxes toppling, and Lola scrambles back onto the sofa.
27 A Florence stands, and Wanjiru does not.
28 D EZEKIEL: Stayed? He stayed! We all stayed! We just stayed somewhere else!
29 D FLORENCE: Ezekiel, sit.
30 D EZEKIEL: No.
31 A ¶ He kicks the nearest box.
* 32 A It splits, and paperbacks tumble out.
33 A Darius lunges for his arm, and the two stumble against the fish tank, which rocks, slops green water, and settles.
34 A Ignatius backs against the door.
35 A Wanjiru finally speaks.
36 D WANJIRU (calm): He knew you would do this.
37 A ¶ Everyone stops.
38 A They look at the old woman in the recliner.
39 A She folds her hands.
40 D WANJIRU [CONT'D]: That's why he told me where the key is.
41 A ¶ She opens her palm.
* 42 A In it, a small brass key, tarnished and warm.

### SCENE s00403 | INT. ART RESTORATION LAB - NIGHT
Detected names (may be incomplete or contain aliases): CELESTE DUMAS, IVO, SABINE, ANTON KOLOSOV
* 1 A ¶ White light over an easel.
* 2 A Solvent fumes.
* 3 A A large Dutch still life lies on the table, its lower third scraped to the ground layer.
4 A ¶ CELESTE DUMAS, 40s, conservator, in white gloves and a magnifying visor, works a cotton swab along a patch of ochre with the calm of someone defusing a bomb.
5 A IVO, 30s, her assistant, photographs each stroke.
6 A SABINE, 20s, a student, holds a lamp so steady it seems to be part of her arm.
7 D CELESTE: There's something under the lemon.
8 D IVO: Under?
9 D SABINE: It's a signature.
10 D CELESTE: It's not the artist's.
11 D IVO: Whose?
12 D CELESTE: Look at the letters. They're pressed in from behind.
13 A ¶ The swab pauses.
* 14 A Under the lemon, a ghostly mark appears, a thin cross-hatched initial.
15 A Ivo steps closer, his camera dropping.
16 D IVO: That's the Fenwick stamp.
17 D SABINE: The forgery ring?
18 D CELESTE: Not a forgery. A transfer. The original is under this one.
* 19 A ¶ The door at the end of the lab clicks open.
20 A All three look up.
21 A ANTON KOLOSOV, 50s, in a long coat dusted with rain, stands in the doorway holding a key card in one hand and a thin black briefcase in the other.
22 D KOLOSOV: Don't touch the lemon.
23 D CELESTE: Mr. Kolosov. How did you get in?
24 D KOLOSOV: I paid for the lock.
25 D IVO: You were told the lab is closed.
26 D KOLOSOV: And I was told this painting was clean. We are all disappointed tonight.
27 A ¶ Sabine lowers the lamp.
* 28 A Light slides off the canvas and across the floor, across his shoes.
29 A Celeste straightens, and her hand, quietly, finds the solvent bottle.

### SCENE s00404 | INT. FAMILY ATTIC - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): HENRIK LUND, SIGRID
* 1 A ¶ Slanted rafters.
* 2 A Dust motes.
* 3 A A circular window throws a pale coin of light on boxes, a dress form, and an old trunk with brass corners.
4 A ¶ HENRIK LUND, 70, in a cardigan, sits on the trunk with a cardboard box in his lap.
5 A His daughter SIGRID, 40, stands by the window with a roll of packing tape and a marker.
6 D HENRIK: This one says "Christmas."
7 D SIGRID: Then keep it.
8 D HENRIK: It's got one ornament in it.
9 D SIGRID: Then it's the right box.
10 D HENRIK: Your mother wrapped them in newspaper. It's from 1979.
11 D SIGRID: Dad.
12 D HENRIK: It's a very nice paper.
13 D SIGRID: Dad, we have to be out by Friday.
14 D HENRIK: I know the date.
15 D SIGRID: The buyers are bringing a truck.
16 D HENRIK: I know about the truck.
17 D SIGRID: Then what are you doing?
18 D HENRIK: I'm reading the newspaper.
19 D SIGRID: It's forty years old.
20 D HENRIK: Yes. It says the harbor froze. There's a photo of your uncle on the ice.
21 D SIGRID: Uncle Jonas?
22 D HENRIK: With a fish as long as his arm.
23 D SIGRID: He lied about that fish.
24 D HENRIK: He lied about all of them.
25 D SIGRID: You could take the photo.
26 D HENRIK: I could.
27 D SIGRID: You could take the box.
28 D HENRIK: I could take the ornament.
29 D SIGRID: That's the idea.
30 D HENRIK: Sigrid.
31 D SIGRID: Yes.
32 D HENRIK: When I'm gone, who will remember where the box was?
33 D SIGRID: Me.
34 D HENRIK: You won't.
35 D SIGRID: I will.
36 D HENRIK: You'll be in another country.
37 D SIGRID: Then I'll remember it from there.
38 D HENRIK: That's not the same.
39 D SIGRID: No. It's not.
40 D HENRIK: But it's what we have.
41 D SIGRID: It's what we have.
42 D HENRIK: Hand me the tape.
43 D SIGRID: You're keeping it?
44 D HENRIK: I'm closing it. You said I could keep it.
45 D SIGRID: I did.
46 D HENRIK: Then keep the tape.
47 A ¶ She hands him the roll.
48 A He seals the box, slowly, the tape shrieking, and she writes on the lid in marker: HENRIK, LAST BOX.

### SCENE s00405 | INT. RUINED CHURCH - MOUNTAIN PASS - DAWN
Detected names (may be incomplete or contain aliases): SERGEANT MALLORY, PRIVATE DIAZ, CORPORAL OKONJO, PRIVATE FENWICK, PADRE LUCIANO
* 1 A ¶ The roof is gone.
* 2 A Gray light falls in cold shafts between blackened beams.
* 3 A Pews are splintered kindling.
* 4 A Over the altar, a cracked stone Madonna still holds up one hand.
* 5 A Snow has drifted through the nave, and boot prints cross it in a ragged line.
6 A ¶ SERGEANT MALLORY, 40s, a lean, gray-stubbled man with a rifle across his back, crouches behind the altar rail.
7 A His eyes are red from no sleep.
8 A He peers over the stone at the door.
9 A ¶ PRIVATE DIAZ, 19, lies on a pew with a bandaged thigh, face pale as paper, watching the sky through the roof.
10 A CORPORAL OKONJO, 30s, tall and broad, with a radio on his back, stands guard at a side window.
11 A PRIVATE FENWICK, 20s, a freckled kid in a helmet two sizes too big, sits against the wall, cleaning his rifle with trembling hands.
12 D OKONJO: Quiet out there.
13 D MALLORY: Too quiet.
14 D DIAZ (weak): I like quiet.
15 D FENWICK: You like everything.
16 D DIAZ: I like being alive.
17 A ¶ Mallory crosses the nave and kneels beside him.
18 A He checks the bandage.
* 19 A It's soaked through.
20 A He doesn't comment.
21 A He just pulls his scarf from his neck and ties it over the wound.
22 D MALLORY: Okonjo. Raise HQ.
23 D OKONJO: Tried. Nothing.
24 D MALLORY: Try again.
25 A ¶ Okonjo cranks the radio.
* 26 A Static.
27 A He tries another frequency.
* 28 A Static.
29 A He puts the handset down and leans against the window.
30 D OKONJO: Sergeant, something's moving in the pass.
31 A ¶ Mallory goes to the window.
32 A Down the slope, in the gray, a figure toils up the path, small, bent against the wind.
33 A He raises his binoculars.
34 D MALLORY: One man. No weapon. Carrying something.
35 D FENWICK: Could be a decoy.
36 D MALLORY: Could be.
* 37 A ¶ The door of the church swings open.
38 A They whirl, rifles up.
39 A In the doorway stands PADRE LUCIANO, 60s, a priest in a black cassock crusted with ice, holding a battered wooden crate to his chest.
40 A His face is red with cold and weeping with exhaustion.
41 A He lifts his chin.
42 D PADRE LUCIANO: Please. Don't shoot. This is my church.
43 A ¶ Nobody lowers a weapon.
44 D MALLORY: Father, this is a war zone.
45 D PADRE LUCIANO: It was my church before it was a war zone.
46 A ¶ He steps inside.
* 47 A Snow melts off his shoulders.
48 A He does not seem to see the rifles.
49 A He walks past them, up the nave, to the altar, and sets the crate on it with great care.
50 D OKONJO: Sergeant?
51 D MALLORY: Wait.
52 A ¶ The priest opens the crate.
* 53 A Inside, nestled in straw, are five loaves of bread, a corked bottle, and a small bundle wrapped in oilcloth.
54 A He takes out a loaf and holds it to the light.
55 D PADRE LUCIANO: My parishioners buried this in the cellar before the shelling. I dug it out this morning.
56 D DIAZ: Is that bread?
57 D PADRE LUCIANO: It's bread, my son.
58 A ¶ Fenwick lowers his rifle first.
59 A Then Okonjo.
60 A Mallory is last, and slowest, and he does it with a long breath.
61 D MALLORY: We can't pay.
62 D PADRE LUCIANO: I have not asked.
63 A ¶ He breaks the loaf and offers a piece to Diaz.
64 A Diaz takes it with both hands and eats like a child.
65 A The priest moves down the pew, giving, and the soldiers come to him one by one.
66 A ¶ Mallory stays by the window.
67 A He watches the pass.
* 68 A The wind picks up.
* 69 A Far off, in the gray, a sound: the low drone of engines.
70 D MALLORY: Okonjo.
71 D OKONJO: I hear it.
72 D MALLORY: How long?
73 D OKONJO: Ten minutes. Maybe less.
74 D PADRE LUCIANO (calm): Then we eat quickly.
75 A ¶ He turns to the Madonna and bows his head.
76 A The soldiers do not pray, but they do not speak either.
* 77 A The engines grow louder.
78 A ¶ Fenwick is the first to stand.
79 A He sets down his rifle, picks up the priest's empty crate, and begins to stack broken pews against the door.

### SCENE s00406 | INT. SAGEBRUSH SALOON - EVENING
Detected names (may be incomplete or contain aliases): COLTER, DEACON, MAX, SADIE, JUBILEE
* 1 A ¶ A low, smoky room of rough planks and yellow lamplight.
* 2 A A piano stands in a corner, one leg propped on a barrel.
* 3 A The bar is a single long board across two whiskey casks.
* 4 A Dust hangs in the air like flour.
5 A ¶ COLTER, 40s, a lean sheriff in a sweat-stained hat, sits at a corner table with his boots on a chair.
6 A Across from him, DEACON, 50s, a heavyset rancher in a clean white shirt, plays solitaire.
7 A MAX, 20s, a nervous young deputy, stands at the bar.
8 A SADIE, 30s, the barkeep, polishes a glass with a rag the color of old bone.
9 A JUBILEE, 60s, a woman in a feathered hat, sits at the piano, picking out one lonely note.
10 D COLTER: Deacon, you're short a king.
11 D DEACON: I know it.
12 D COLTER: Someone took it.
13 D DEACON: I took it.
14 D COLTER: Why?
15 D DEACON: Because I wanted a king.
* 16 A ¶ The piano note rings again.
17 A Max shifts his weight.
18 A He drums his fingers on the bar.
19 D MAX: Sheriff, he's wearing a gun.
20 D COLTER: Everyone's wearing a gun.
21 D MAX: I mean under the shirt.
22 D SADIE (low): Max.
23 A ¶ Deacon sweeps the cards into a pile.
24 A He stands, all six feet and two hundred pounds of him, and walks across the room to the piano.
25 A Jubilee does not look up.
26 A He lays a coin on the lid.
27 D DEACON: Play something.
28 D JUBILEE: I only know the one.
29 D DEACON: Then play it.
30 A ¶ She plays it.
* 31 A Slow, off-key, a hymn.
32 A Colter lowers his boots from the chair.
33 A Max backs against the bar.
34 A Sadie sets down her glass.
35 D COLTER: Deacon. You're not welcome in town.
36 D DEACON: I'm not in town. I'm in a saloon.
37 D COLTER: Same thing.
38 D DEACON: Not if I buy a drink.
39 A ¶ He turns to the bar.
40 A Max reaches for his holster.
41 A Colter's hand shoots out and catches the boy's wrist.
42 D COLTER: Easy.
43 A ¶ Deacon sets a coin on the bar.
44 A Sadie looks at it.
45 A She looks at Colter.
46 A Then she pours, a clear shot of something amber.
47 A Deacon lifts it and drinks.
48 D DEACON: I came to say a thing.
49 D COLTER: Then say it.
50 D DEACON: Your brother is not dead.
* 51 A ¶ The room goes still.
* 52 A The piano stops.
53 A Jubilee's hands hover over the keys.
54 A Max stares at the sheriff.
55 D COLTER (very quiet): Say it again.
56 A ¶ Deacon sets down the glass.
57 A He and Colter regard each other across the silent room.
58 D DEACON: Brother's alive, Sheriff. He's riding with the Hendricks gang. I seen him Tuesday.
59 A ¶ Colter stands.
* 60 A His chair scrapes loud.
61 A His hand hangs, loose, over his holster.
62 D MAX: Sheriff. Sheriff, don't.
63 D COLTER: Deacon.
64 D DEACON: Yes.
65 D COLTER: Step outside.
66 A ¶ Deacon nods.
67 A He turns to the door, and Colter follows.
68 A At the threshold, they both stop.
* 69 A Behind them, the piano resumes: the same note, one note, again and again.

### SCENE s00407 | INT. GLASS GREENHOUSE - WEDDING REHEARSAL - EVENING
Detected names (may be incomplete or contain aliases): ROSEMARY, DEVLIN, ANTOINETTE, KIERAN, SEUN, LAVINIA
* 1 A ¶ Ranks of potted orchids.
* 2 A Warm fog on the panes.
* 3 A A white aisle runner laid between fern beds.
* 4 A Folding chairs.
* 5 A A trellis arch drapes with unlit fairy lights.
6 A ¶ ROSEMARY, 30s, the bride, in jeans and a linen blouse, stands at the arch.
7 A DEVLIN, 30s, the groom, in a rumpled suit, stands beside her.
8 A ANTOINETTE, 60s, the officiant, in a shawl, holds an index card.
9 A KIERAN, 30s, the best man, slouches against a pot of cymbidiums.
10 A SEUN, 20s, the maid of honor, in a floral wrap dress, holds a bouquet of paper flowers.
11 A LAVINIA, 50s, Rosemary's mother, perches on a chair with a clipboard.
12 D LAVINIA (to the group): All right, everyone. Positions!
13 D KIERAN (to Seun): Where do I stand?
14 D SEUN: Next to the groom.
15 D KIERAN: Which one's the groom?
16 D DEVLIN: I'm the groom.
17 D KIERAN: Oh. Yeah.
18 D ANTOINETTE (reading): Dearly beloved.
19 D ROSEMARY: Do we say that?
20 D ANTOINETTE: It's traditional.
21 D ROSEMARY: It's a little dead.
22 D ANTOINETTE: It's very old.
23 D LAVINIA (to herself): They'll be late for the caterer.
24 A ¶ Seun glances at Kieran.
25 A Kieran glances at Seun.
26 A Both look away.
27 A She straightens the bouquet.
28 A He picks at a leaf.
* 29 A The fairy lights flick on, then off.
30 D DEVLIN (to Rosemary): You look nervous.
31 D ROSEMARY: I'm not.
32 D DEVLIN: You're holding your breath.
33 D ROSEMARY: It's the humidity.
34 D DEVLIN: Ro.
35 D ROSEMARY: He looked at her.
36 D DEVLIN: Who?
37 D ROSEMARY (low): Kieran. At Seun.
38 D DEVLIN: They're the best man and the maid of honor. They're supposed to look at each other.
39 D ROSEMARY: Not like that.
40 A ¶ Antoinette clears her throat and taps the card.
41 D ANTOINETTE: Does anyone object?
* 42 A ¶ A silence.
43 A Everyone looks at one another.
44 D LAVINIA (to the group): It's a rehearsal. No one objects.
45 D KIERAN: Actually.
* 46 A ¶ All heads turn.
47 A Kieran is looking at Seun.
48 A She stares back, wide-eyed.
49 D KIERAN [CONT'D] (to himself): Nope. Never mind.
50 D SEUN (to herself): Oh no.
* 51 A ¶ The fairy lights blaze on, all at once, and a hundred small gold stars shine above the arch.

### SCENE s00408 | EXT. APARTMENT ROOFTOP - WATER TANK - DAY
Detected names (may be incomplete or contain aliases): DANTE, REMY, ALVAREZ
* 1 A ¶ Tar paper and heat shimmer.
* 2 A A wooden water tower hunches on iron legs.
* 3 A A rusted ladder climbs its side.
* 4 A Below, a city sprawls into haze.
5 A ¶ DANTE, 17, in a stained T-shirt, scrapes flaking paint from a pipe with a putty knife.
6 A His brother REMY, 14, holds a bucket of sealant and a rag.
7 D REMY: Dante.
8 D DANTE: Yeah.
9 D REMY: Can I try?
10 D DANTE: You'll drop it.
11 D REMY: I won't.
12 D DANTE: You dropped the last one.
13 D REMY: That was a wrench.
14 D DANTE: It's the same thing.
15 A ¶ Remy sets the bucket down.
16 A He plants his hands on his hips.
17 A Dante keeps scraping.
18 D REMY: Dad said we could split it.
19 D DANTE: Dad said I could handle it.
20 D REMY: He said split.
21 D DANTE: He said it to be nice.
22 D REMY: Dante.
23 D DANTE: Remy.
24 D REMY: I'm fourteen.
25 D DANTE: You're fourteen and a half.
26 D REMY: That's what I said.
27 A ¶ Dante sighs.
28 A He hands over the knife.
29 A Remy takes it, and the metal catches the sun.
30 A He crouches by the pipe, tongue between his teeth, and scrapes.
31 D DANTE: Not that hard.
32 D REMY: It's rusty.
33 D DANTE: It's rusty, not stubborn.
34 D REMY: You don't know that.
* 35 A ¶ A chunk of paint falls away.
* 36 A Underneath, the pipe gleams, a bright silver gash.
37 A Remy beams.
38 D REMY [CONT'D]: Look!
39 D DANTE: Nice.
40 D REMY: You didn't look.
41 D DANTE: I looked.
42 D REMY: You didn't.
43 A ¶ Dante turns.
* 44 A The pipe shines.
45 A Something in his face changes.
46 A He reaches out, as if to touch it, and then the ladder rattles.
47 A Both freeze.
48 A ¶ A head pokes over the edge of the roof: MRS. ALVAREZ, from 4C, an old woman in a housecoat, hauling a laundry basket.
49 D DANTE [CONT'D] (under his breath): No.
50 D REMY: She's going to see.
51 D DANTE: She won't see.
52 D REMY: She's looking right at it.
53 A ¶ Mrs. Alvarez squints, adjusts her glasses, and sets the basket on the tar paper.
54 A She says nothing.
55 A Dante and Remy stare at her.
56 A She stares back, and then, slowly, she turns and begins to hang a towel on the line.
57 D REMY [CONT'D] (whispering): She's not going to say anything.
58 D DANTE (whispering): Don't talk.
59 A ¶ They crouch together behind the tank.
60 A Remy hands Dante the knife.
61 A Dante hands Remy the rag.
62 A They go back to work, shoulder to shoulder, trading the tools without looking.
63 A ¶ Dante drops the knife.
* 64 A It clatters.
65 A They both freeze again.
66 D REMY (grinning): You dropped it.
67 D DANTE: Shut up.
68 D REMY: You dropped it, Dante.
69 D DANTE: It slipped.
70 D REMY: It slipped.
71 A ¶ Dante shoves him.
72 A Remy shoves back.
73 A They tumble into the bucket, which tips, and sealant oozes across the roof in a black tongue.
74 A Mrs. Alvarez, at the line, calmly continues hanging her wash.
75 D DANTE: Look what you did.
76 D REMY: Look what you did!
77 A ¶ They both scramble for the spill, rags and hands, then laugh, because there is nothing else to do.
