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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0128.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00842 | INT. GRAND MERIDIAN HOTEL - SUBLEVEL LAUNDRY - NIGHT
Detected names (may be incomplete or contain aliases): CALLOWAY, SECURITY, SABINE DUMAS, REUBEN OKAFOR, TANSY BRIGHT
* 1 A ¶ Industrial washers thunder in rows.
* 2 A Steam curls along pipes.
* 3 A Carts of white linen stand in the aisles like silent ghosts.
4 A ¶ CALLOWAY, fifties, a quiet man in a charcoal suit with a hotel badge that says SECURITY, leans on a dryer reading a folded newspaper.
5 A SABINE DUMAS, thirties, in a laundry uniform, loads sheets into a washer, never faster than necessary.
6 A REUBEN OKAFOR, twenties, a bellhop, sits on a laundry cart eating a sandwich.
7 A TANSY BRIGHT, forties, in a conference lanyard, hovers near the stairs.
8 A ¶ He turns a page.
9 A She slams a washer door.
10 A Reuben chews.
11 D TANSY: Excuse me. I think I took a wrong turn.
12 D SABINE: Guests aren't allowed down here.
13 D TANSY: I know. I'm sorry. I was looking for the ice machine.
14 D CALLOWAY: Third floor.
15 D TANSY: I'm on the third floor.
16 A ¶ Calloway folds his newspaper.
17 A Sabine finishes loading and stands straight.
18 A Reuben sets down his sandwich.
19 D REUBEN: Sabine, the thing from the Hartley party.
20 D SABINE: Not now.
21 D REUBEN: He'll want to know where
22 D SABINE: Reuben, not now.
23 A ¶ He swings off the cart.
24 A Calloway takes a step toward Tansy, hands open, friendly.
25 D CALLOWAY: Ma'am, I can walk you up.
26 D TANSY: That's not necessary.
27 D CALLOWAY: I insist.
28 A ¶ Tansy turns toward the stairs.
29 A Sabine moves to block her.
* 30 A The washers pound on.
31 D TANSY: Please move.
32 D SABINE: ^Please wait.
33 A ¶ Two voices, one beat.
34 A Calloway sighs and slides the newspaper into his jacket.
35 D CALLOWAY: Tansy Bright. Conference B. You gave a talk on supply chain integrity this afternoon.
36 D TANSY: How did you
37 D CALLOWAY: We read the program.
38 A ¶ She glances from him to Sabine to Reuben.
39 A Her hand finds the stair rail.
40 D TANSY: I'd like to leave now.
41 D REUBEN: Sure. We just want to ask one thing.
42 D SABINE: What did you see in the east elevator this afternoon?
43 D TANSY: Nothing.
44 D CALLOWAY: That's a very fast answer.
45 D TANSY: It's the true one.
46 D REUBEN: Ms. Bright, we're not the police.
47 D TANSY: That's what worries me.
48 A ¶ Calloway nods slowly.
49 A He crosses to a washer and pulls the handle.
* 50 A The door swings open, and steam rolls out.
* 51 A Inside, among the sheets, a conference lanyard hangs from a hook.
52 D SABINE: Is that yours?
53 A ¶ Tansy looks at her own lanyard.
54 A Then at the one in the machine.
* 55 A The numbers match.
56 D TANSY: I don't understand.
57 D CALLOWAY: Neither did the last one.
58 A ¶ He closes the door.
* 59 A The washers keep running.
* 60 A Nobody moves.

### SCENE s00843_0 | EXT. DRAINED RESERVOIR BED - DUSK
Detected names (may be incomplete or contain aliases): 
* 1 A ¶ Gray fog.
* 2 A Cracked mud.
* 3 A A yellow school bus sits dead in the middle of the dry lakebed, hazards ticking.

### SCENE s00843_1 | INT. SCHOOL BUS - CONTINUOUS
Detected names (may be incomplete or contain aliases): MARGIT, DEX, LOLA, PELL
* 1 A ¶ Seats torn, windows fogged.
2 A MARGIT, 17, in a track jacket, crouches in the aisle with a flashlight.
3 A DEX, 18, driver's license barely dry, grips the wheel.
4 A LOLA, 12, his sister, sits in the first seat, knees to chest.
5 D DEX: Engine's dead.
6 D MARGIT: Try again.
7 A ¶ He turns the key.
* 8 A Click.
* 9 A Click.
10 D LOLA: Dex. I don't like this.
11 D DEX: Lola, it's a bus. We're fine.
12 D MARGIT: Dex. Look.
* 13 A ¶ Out the windshield, shapes in the fog.
* 14 A Tall.
* 15 A Still.
16 A A row of figures standing on the lakebed, facing the bus.
17 D DEX: Scarecrows.
18 D MARGIT: Not scarecrows.
19 D LOLA: They're closer.
20 A ¶ Dex slaps the wheel.
21 A He locks the door and cranks the key.
* 22 A Click.
* 23 A Click.
24 A Margit kills the flashlight.
25 A The figures do not move.
* 26 A The fog thickens.
* 27 A ¶ A tap on the glass.
28 A MR. PELL, sixty, their old bus driver, in his gray uniform, stands at the door with a lantern.
29 A His lips are blue.
30 D MR. PELL: Kids. Open up.
31 D DEX: Mr. Pell? You retired.
32 D MR. PELL: I did.
33 A ¶ Margit looks at his boots.
34 A They are covered in dry mud, but his footprints end at the bus step.
* 35 A No prints behind him.
36 D MARGIT (whispering): Dex. Don't.
37 A ¶ Lola grabs her sleeve.
38 A Dex's hand hovers over the door lever.
39 D MR. PELL: It's cold, Dex. Open up.

### SCENE s00844 | INT. POLAR STATION HALLEY-9, MEDICAL BAY - NIGHT
Detected names (may be incomplete or contain aliases): SUNNIVA ERIKSEN, IBRAHIM TARAWNEH, LAKSHMI
* 1 A ¶ A cramped clinic: one exam bed, one monitor, one satellite screen glowing blue on the wall.
* 2 A Wind howls at the walls.
3 A ¶ DR. SUNNIVA ERIKSEN, 40s, the station physician, stands at the screen with her arms crossed.
4 A IBRAHIM TARAWNEH, 30s, a mechanic, sits on the bed with a bandaged hand and a gray face.
5 D SUNNIVA: Dr. Lakshmi, can you hear me?
6 D LAKSHMI [V.O.]: I can. Go ahead, Sunniva. Describe the wound.
7 D SUNNIVA: Laceration across the palm, six centimeters. Clean edges. He's been bleeding for an hour.
8 D IBRAHIM: It's fine.
9 D LAKSHMI [V.O.]: Mr. Tarawneh, I need you to keep your hand elevated.
10 D IBRAHIM: It's elevated.
11 D SUNNIVA: It's on your knee.
12 D IBRAHIM: I'm resting it on my knee.
13 D LAKSHMI [V.O.]: Sunniva, what's his heart rate?
14 D SUNNIVA: One-ten. Pressure ninety over sixty.
15 D LAKSHMI [V.O.]: That's low for a hand wound.
16 D IBRAHIM: I'm cold.
17 D SUNNIVA: You're not cold, you're pale.
18 D LAKSHMI [V.O.]: Mr. Tarawneh, how did you cut it?
19 D IBRAHIM: Generator. A panel slipped.
20 D SUNNIVA: That's not what you told me.
21 D IBRAHIM: It's what happened.
22 D LAKSHMI [V.O.]: Ibrahim, I'm going to ask you directly. Did you take anything for the pain?
23 D IBRAHIM: No.
24 D SUNNIVA: Ibrahim.
25 D IBRAHIM: A few of the white ones. Maybe six.
26 D LAKSHMI [V.O.]: Six what?
27 D SUNNIVA: Oxycodone. The stock bottle. It's empty.
28 D LAKSHMI [V.O.]: The stock bottle held sixty tablets.
29 D IBRAHIM: I had a long winter.
30 D SUNNIVA: Ibrahim, how many?
31 D IBRAHIM: All of them. Since October.
32 D LAKSHMI [V.O.]: Sunniva, this is no longer a hand injury.
33 D SUNNIVA: I know.
34 D IBRAHIM: Please don't tell the crew.
35 D LAKSHMI [V.O.]: We will talk about that after we keep you alive.

### SCENE s00845 | INT. FIELD BAKERY IN A RUINED CATHEDRAL - NIGHT, 1944
Detected names (may be incomplete or contain aliases): SERGEANT ELIAS MWANGI, CORPORAL TADEUSZ BIELSKI, PRIVATE LACHLAN MUIR, LIEUTENANT HARUKO TANAKA
* 1 A ¶ Ovens burn where the altar once stood.
* 2 A Stained glass lies in colored shards along the nave.
* 3 A Flour sacks form a low wall.
* 4 A Distant artillery thumps like a slow heart.
5 A ¶ SERGEANT ELIAS MWANGI, forties, sleeves rolled, kneads dough on a pew.
6 A CORPORAL TADEUSZ BIELSKI, twenties, sits against a pillar rubbing his boot.
7 A PRIVATE LACHLAN MUIR, nineteen, feeds wood into an oven.
8 A LIEUTENANT HARUKO TANAKA, thirties, a quartermaster with a notebook, stands at the door reading a list by candlelight.
9 A ¶ He lifts the dough, slaps it down.
10 A She turns a page.
11 A The private fans the fire with his cap.
12 D HARUKO: Eleven hundred loaves by dawn. Sergeant Mwangi, will that be possible?
13 D ELIAS: Possible, ma'am. Pleasant, no.
14 D TADEUSZ: Sergeant, the flour is damp.
15 D ELIAS: Flour is always damp in this country. Everything is.
16 D LACHLAN: Sergeant, do you think the cathedral minds?
17 D ELIAS: Minds what?
18 D LACHLAN: Us. Baking in it.
19 D ELIAS: Private, it's the warmest room for fifty miles. If God wanted it empty He should've kept the roof on.
20 D TADEUSZ: My grandmother would have crossed herself.
21 D HARUKO: Mine would have asked for the recipe.
22 D LACHLAN: What did she bake?
23 D HARUKO: Rice cakes. Very patiently. She said bread was for people in a hurry.
24 D ELIAS: She was right.
25 D TADEUSZ: Then what are we doing?
26 D ELIAS: Hurrying. Badly.
* 27 A ¶ A shell lands somewhere far off.
* 28 A Dust sifts from the vault.
* 29 A Nobody looks up.
30 D LACHLAN: Lieutenant, do you ever write home?
31 D HARUKO: Every Sunday.
32 D LACHLAN: What do you say?
33 D HARUKO: That the bread is excellent.
34 D ELIAS: It is.
35 D TADEUSZ: It is not. It is edible.
36 D ELIAS: Edible is excellent, Corporal. Ask anyone who's been hungry.
37 A ¶ Tadeusz nods slowly.
38 A Lachlan adds a log.
* 39 A The fire pops.
40 A Haruko tears out a page, folds it, and slips it into her pocket.
41 D HARUKO: Gentlemen, what time is it?
42 D ELIAS: Nearly three.
43 D HARUKO: Then you have two hours to make a thousand loaves.
44 D ELIAS: And what will you do, ma'am?
45 D HARUKO: Pray the bread is excellent.

### SCENE s00846 | INT. SUDSY'S 24-HOUR CAR WASH, TUNNEL BAY - NIGHT
Detected names (may be incomplete or contain aliases): THE MAN, DUKE, RHODA FENWICK, CITY INSPECTOR, BOONE
* 1 A ¶ Brushes hang like giant sleeping spiders.
* 2 A Neon pink water pools on the concrete.
* 3 A A radio plays soft country from a plastic shelf.
* 4 A The tunnel is empty.
5 A ¶ THE MAN, forties, in a camel coat and gloves, enters on foot from the rain, a briefcase held tight against his chest.
6 A He glances at the exit, then at the cash window.
7 A ¶ DUKE, sixty, the night attendant, sits on an upturned bucket with a thermos between his knees, doing a crossword.
8 A RHODA FENWICK, thirties, in a navy suit with a lanyard that says CITY INSPECTOR, steps out of the office with a clipboard, pen already uncapped.
9 A ¶ Duke fills in a word and looks up.
10 A The Man edges along the wall, trying to keep out of the light.
11 A Rhoda follows him with her eyes, then with her pen, and writes something on the clipboard, and walks toward him at an even pace.
12 D RHODA: Evening. You here for a wash?
13 D THE MAN: I walked.
14 D RHODA: That's an odd way to get a car washed.
15 D THE MAN: I'm between cars.
16 A ¶ Duke pours coffee into the thermos cap and drinks.
17 A He doesn't take his eyes off the briefcase.
18 D DUKE: Eleven letters. "Unwelcome visitor."
19 D RHODA: Trespasser.
20 D DUKE: That's ten.
21 D RHODA: Intruder. Eight. Well, I tried.
22 A ¶ The Man lets the briefcase drop to his side.
* 23 A It swings, heavy, and thuds against his knee.
24 A Rhoda's pen stops.
25 D RHODA [CONT'D]: Sir, what's your name?
26 D THE MAN: Does it matter?
27 D RHODA: I like to put a name on my forms.
28 D THE MAN: Boone.
29 A ¶ Duke chuckles into his thermos.
30 D DUKE: Boone like Daniel?
31 D BOONE: Boone like Walter. Walter Boone.
32 A ¶ Rhoda writes it down.
33 A Duke fills in four more squares of the puzzle.
34 A Boone sets the briefcase on the floor and slides it, with his foot, a few inches toward the drain.
35 D RHODA: Mr. Boone, would you open that for me?
36 D BOONE: It's just papers.
37 D RHODA: Then it won't take a minute.
38 A ¶ Boone looks at Duke.
39 A Duke looks at the crossword.
40 A Boone kneels, thumbs the latches, and lifts the lid.
* 41 A Inside, stacked in rubber bands, is a thick wall of cash.
42 A ¶ Rhoda lowers the clipboard and says nothing for a long moment.
43 D RHODA [CONT'D]: That's a lot of papers.
44 D BOONE: I'm a very organized man.
45 A ¶ Duke drains his thermos, caps it, and rises with a grunt.
46 A He slides a squeegee off its rack and holds it like a cane.
47 D DUKE: Seven across. "Fair deal."
48 D RHODA: Hush.
49 D DUKE: Eight letters. Starts with a G.
50 A ¶ Boone and Rhoda both turn to stare at him.

### SCENE s00847 | INT. SELF-STORAGE FACILITY, UNIT 214 - NIGHT
Detected names (may be incomplete or contain aliases): MERCER, LINN, OTTO, SABA
* 1 A ¶ A concrete corridor lined with orange roll-up doors.
* 2 A A buzzing fluorescent tube.
* 3 A A single padlock hangs open.
4 A ¶ MERCER, 40s, in a black windbreaker, hauls up the door of unit 214.
5 A LINN, 30s, her partner, in a hooded parka, holds a flashlight.
6 A OTTO, 60s, a gaunt night manager in a security fleece, stands behind them, jangling keys.
7 A SABA, 20s, a rental clerk, hangs back at the corner with her phone raised.
* 8 A ¶ Inside the unit: a card table, one folding chair, and a wall of photographs pinned and strung with red thread.
9 D LINN: Jesus.
10 D MERCER: That's his handwriting.
11 D OTTO: I told them it was rented to an accountant.
12 D SABA: I'm recording this, by the way.
13 D MERCER: Delete it.
14 D SABA: ^It's for my own protection.
15 D OTTO: ^Let her.
16 A ¶ Mercer sighs and steps into the unit.
17 A Linn follows with the beam.

### SCENE s00848 | INT. DESALINATION PLATFORM "KESTREL REEF," DORMITORY GALLEY - NIGHT
Detected names (may be incomplete or contain aliases): PERPETUA LOWE, YOSHIRO ABE, THE STRANGER, ADEBOLA
* 1 A ¶ A steel room bolted to the open sea.
* 2 A Portholes show black water and the white scrawl of waves.
* 3 A A table, three stools, a kettle that screams on a hotplate.
* 4 A Everything slightly damp.
5 A ¶ PERPETUA LOWE, fifties, platform superintendent, scrapes burnt toast over the sink.
6 A YOSHIRO ABE, thirties, the pump engineer, sits slumped at the table with his boots off.
7 A Across from him sits a young woman in a borrowed hoodie, her hair wet, a blanket around her shoulders: THE STRANGER, early twenties.
8 A She holds a mug with both hands and has not spoken since the supply boat left her here.
9 D PERPETUA: Tea or something stronger?
10 A ¶ The stranger shakes her head.
11 D YOSHIRO: She hasn't said a word.
12 D PERPETUA: She doesn't have to. She's drinking our tea.
* 13 A ¶ The kettle shrieks.
14 A Perpetua lifts it off the plate.
* 15 A The platform groans against a swell, and the tea in the mug trembles in rings.
16 D YOSHIRO: Supply boat's not back till Thursday.
17 D PERPETUA: Then she's our guest till Thursday.
18 D YOSHIRO: Perp, we don't have a bunk.
19 D PERPETUA: Take mine.
20 D YOSHIRO: I can't take
21 D PERPETUA: Yoshiro.
22 A ¶ He raises both hands in surrender.
23 A The stranger sets down her mug and, for the first time, looks up at them.
24 D THE STRANGER: Adebola.
25 A ¶ Perpetua and Yoshiro turn.
* 26 A The word hangs in the steam.
27 D PERPETUA: Pardon?
28 D ADEBOLA: My name. Adebola Nwosu.
29 D YOSHIRO: Nice to meet you, Adebola.
30 D ADEBOLA: I should say I did not fall off the boat.
31 D PERPETUA: Did anyone say you did?
32 D ADEBOLA: I think you wondered.
33 A ¶ Perpetua sets down the toast and wipes her hands on her trousers, slowly, one finger at a time.
34 D PERPETUA: We wondered.
35 D ADEBOLA: I walked off it.
36 D YOSHIRO: Walked off a moving boat.
37 D ADEBOLA: Into the sea, and then I swam here. It took a long time.
* 38 A ¶ The room is very quiet.
* 39 A A pipe knocks in the wall.
40 A Yoshiro opens his mouth, closes it again.
41 D PERPETUA: Why?
42 A ¶ Adebola turns the mug a quarter-turn on the table.
43 D ADEBOLA: I wanted to see if the platform was real. If anyone really lived out here.
44 D YOSHIRO: And?
45 D ADEBOLA: Someone made me tea.
46 A ¶ Perpetua laughs, a startled bark.
47 A Then she pulls up a stool and sits.
48 D PERPETUA: Yoshiro, pour her another cup.
49 A ¶ He fills it.
* 50 A Steam rises.
* 51 A The kettle ticks as it cools.
* 52 A Outside, the sea keeps its slow business.
53 D PERPETUA [CONT'D]: Adebola, you're going to want to eat something.
54 D ADEBOLA: I would like that.
55 D YOSHIRO: We have toast.
56 D PERPETUA: It's burnt.
57 D ADEBOLA: I will eat it burnt.

### SCENE s00849 | INT. CENTRAL TELEPHONE EXCHANGE, SWITCHBOARD ROOM - 1912 - NIGHT
Detected names (may be incomplete or contain aliases): CLEMENTINE VOSS, ASHWORTH
* 1 A ¶ Rows of brass jacks.
* 2 A Cords dangle like vines.
* 3 A A gas lamp hisses.
4 A ¶ CLEMENTINE VOSS, twenty, headset clamped over a bun, plugs a cord into a jack.
5 A Pulls another.
* 6 A Hands blur.
7 D CLEMENTINE: Number, please.
8 A ¶ She listens.
9 A Smiles, small.
10 A Connects the call.
11 D CLEMENTINE [CONT'D]: Go ahead, caller.
* 12 A ¶ A light flares on the board.
* 13 A Another.
14 A She works faster.
* 15 A ¶ The door opens.
16 A MR. ASHWORTH, fifties, supervisor, in a stiff collar and pince-nez, steps in with a folded paper.
17 A He doesn't greet her.
18 D ASHWORTH: Miss Voss.
19 D CLEMENTINE: Number, please. Yes, sir?
20 D ASHWORTH: You were seen leaving the building with a gentleman on Tuesday.
21 A ¶ She plugs a cord, fingers steady, eyes on the board.
22 D CLEMENTINE: My brother, sir.
23 D ASHWORTH: You have no brother on the register.
24 D CLEMENTINE: Then the register is wrong.
25 A ¶ He sets the paper on her desk.
26 A She does not look at it.
* 27 A Another light flares.
28 A She answers it.
29 D CLEMENTINE [CONT'D]: Number, please.
30 D ASHWORTH: Miss Voss. I am speaking to you.
31 D CLEMENTINE: And I am speaking to Mrs. Delaney, sir. Her husband is in hospital.
32 A ¶ He takes a breath.
33 A Straightens his pince-nez.
34 A Then he reaches past her, takes the cord, and gently pulls it out of the jack.

### SCENE s00850 | INT. ICE FISHING HUT ON FROZEN LAKE - DAY
Detected names (may be incomplete or contain aliases): WENDELL, BRODSKY, TOBY, RAY
* 1 A ¶ A shack the size of a closet.
* 2 A Bare wood benches.
* 3 A A hole in the floor with black water and a bobbing line.
* 4 A A propane heater ticks.
5 A ¶ WENDELL "PA" BRODSKY, sixties, in a quilted vest, sits hunched over the hole with a short rod.
6 A His grandson TOBY, ten, in a puffy snowsuit, kneels across from him holding a thermos he can barely lift.
7 A RAYLENE "RAY" BRODSKY, sixteen, plugs one ear with an earbud and sulks on the far bench.
8 D TOBY: Pa, is it a bite?
9 D WENDELL: Not yet, bud.
10 D TOBY: How do you know?
11 D WENDELL: The line would twitch.
12 A ¶ Toby stares at the line.
* 13 A It floats.
14 A He unscrews the thermos, pours cocoa onto his mitten, and licks it.
15 A Ray rolls her eyes and turns up her music.
16 D RAY: This is so boring.
17 D WENDELL: It's supposed to be.
18 D RAY: Then why do it?
19 D WENDELL: Because it's quiet.
20 D RAY: It's not quiet. Toby's slurping.
21 D TOBY: I'm not slurping.
22 D RAY: You are slurping.
23 A ¶ Wendell lays a hand on the rod.
24 A He does not look at either of them.
25 A Toby slides closer and pushes the thermos into his grandfather's lap.
26 D TOBY: Pa, have some.
27 D WENDELL: Thank you, bud.
28 A ¶ He sips.
29 A Wipes his mustache with the back of his glove.
* 30 A The heater ticks.
* 31 A A breath of wind pushes at the door, and the hut shivers.
32 D RAY: Pa, how long did Grandma fish with you?
33 D WENDELL: Forty years.
34 D RAY: Did she think it was boring?
35 D WENDELL: Every winter.
36 D RAY: Then why'd she come?
37 D WENDELL: Because I did.
38 A ¶ Ray lowers the earbud.
39 A She looks at the hole in the floor, the black circle, and the line sitting in the middle of it like a thin white thread.
40 D TOBY: Pa. Pa! It twitched.
41 D WENDELL: Hold on, bud.
42 D TOBY: It did! I saw!
43 A ¶ Ray slides off her bench onto her knees beside him and Toby, and the three of them lean over the hole, nearly touching heads.
* 44 A The line dips once.
* 45 A Then goes still.
46 D RAY: False alarm.
47 D TOBY: It twitched.
48 D WENDELL: It's thinking about it.
49 A ¶ They wait.
* 50 A The heater ticks.
51 A Toby's head sinks onto Wendell's shoulder.
52 A Ray lets the earbud dangle.
53 D RAY: Pa?
54 D WENDELL: Mm.
55 D RAY: This isn't that boring.
56 A ¶ He doesn't answer.
57 A He just watches the line, and the corner of his mustache moves.

### SCENE s00851 | INT. STALLED ELEVATOR, GRANDVIEW HOTEL - DAY
Detected names (may be incomplete or contain aliases): BART, KWIATKOWSKI, YOLANDA PRICE, CHEN WEI, FIONNUALA DOYLE
* 1 A ¶ A mirrored box, brass rails.
* 2 A A tiered wedding cake in a white box sits on a luggage cart in the center.
* 3 A The floor indicator is stuck between 14 and 15.
4 A ¶ BARTHOLOMEW "BART" KWIATKOWSKI, fifties, pastry chef in whites, grips the cart with both hands.
5 A YOLANDA PRICE, thirties, the wedding planner, in a headset and heels, stabs the alarm button.
6 A CHEN WEI, twenties, the bellhop, leans against the rail eating a granola bar.
7 A FIONNUALA DOYLE, sixties, the bride's grandmother, sits on a folding stool she has brought from somewhere, knitting.
8 D YOLANDA: Okay. Everyone remain calm.
9 D BART: I am calm. This cake is not calm.
10 D CHEN: It's a cake.
11 D BART: It is forty-eight hours of fondant.
* 12 A ¶ The elevator shudders.
* 13 A The cake tiers slide an inch.
14 A Bart and Yolanda lunge at the same time and bump foreheads.
15 D YOLANDA: Ow!
16 D BART: Ow!
17 A ¶ Fionnuala keeps knitting.
18 D FIONNUALA: Always the same with the young. You rush and then you bleed.
19 D YOLANDA (muttering): The ceremony starts in thirty minutes.
20 D CHEN: I can call someone.
21 D YOLANDA: Please do.
22 A ¶ He pulls a walkie-talkie from his belt, presses the key, and hears only static.
23 A He taps it against his palm.
24 A Bart watches the cake like a man watching a cliff.
25 D BART (to himself): Don't tilt. Don't tilt.
26 D FIONNUALA: Chen, dear, is there a phone number on the wall?
27 D CHEN: Yes, ma'am.
28 D FIONNUALA: Then why on earth aren't we using it?
29 A ¶ Everyone turns to the wall.
* 30 A A small door in the panel reads EMERGENCY PHONE.
31 A Yolanda yanks it open.
* 32 A Inside is a handset and a sticker: OUT OF ORDER.
33 D YOLANDA: Of course.
* 34 A ¶ The elevator drops two inches.
* 35 A The cake slides.
36 A Bart and Chen and Yolanda all dive for it, and the three of them end up in a pile on top of the cart, holding the box together like a family hugging.
37 A ¶ Fionnuala turns a row on her needles and does not look up.
38 D FIONNUALA: Well. That's one way to do it.

### SCENE s00852 | INT. NATIONAL RESPONSE CALL CENTER, FLOOR THREE - DAY
Detected names (may be incomplete or contain aliases): DUANE PRESCOTT, SHANICE WILLIAMS, KOVACS
* 1 A ¶ Beige cubicles.
* 2 A Gray carpet.
* 3 A A banner: "EVERY CALL IS AN OPPORTUNITY!"
* 4 A A wall clock ticks over a whiteboard of call counts.
5 A ¶ DUANE PRESCOTT, 40s, in a headset and a tie loosened to the second button, sits at a cube with a script taped to the monitor.
6 A SHANICE WILLIAMS, 30s, in the next cube, fills out a form in tiny block letters, never glancing up.
7 D DUANE: Thank you for calling National Response, my name is Duane. How may I...
8 A ¶ He stops.
9 A Listens.
10 A Writes a line.
11 A Crosses it out.
12 D DUANE [CONT'D]: Yes, ma'am, I understand your frustration.
13 A ¶ Shanice lowers her pen.
14 D SHANICE: Duane. You've said "I understand" eleven times.
15 D DUANE: Because I do understand.
16 D SHANICE: You've been transferred to nobody.
* 17 A ¶ A chirp from the ceiling speaker.
* 18 A The intercom.
19 D KOVACS [O.S.]: Attention, floor three. This is a reminder that average handle time is up four percent. Please be mindful.
20 D DUANE (muttering): Mindful. I'm mindful.
21 D SHANICE (to the room): Four percent. We're a ship and it's four percent.
22 A ¶ A few muffled snorts from nearby cubes.
23 A Duane slides his chair back.
24 A Shanice stands.
25 A They look at each other over the cubicle wall, then at the clock.
26 D KOVACS [O.S.]: Also, Duane. Shanice. Please remember that personal conversations are logged.
27 A ¶ Duane takes off his headset and places it in the middle of his desk.
28 A Shanice does the same.
29 A Together they push back their chairs, which squeal on the carpet.
30 D DUANE (to the ceiling): Mr. Kovacs, I have a question.
31 D KOVACS [O.S.]: Please direct it to your supervisor.
32 D DUANE: You are my supervisor.
33 D KOVACS [O.S.]: Then please direct it to a future me.
34 A ¶ Shanice walks to the banner and takes a corner in each fist.
* 35 A The tape tears loose with a long squeal.
36 A Duane takes hold of the other end.
37 A They bring it down and stand there in a slump of paper, holding it between them.
38 D SHANICE: I always hated that banner.
39 D DUANE: I wrote it.
40 D SHANICE: I know.
* 41 A ¶ The intercom chirps again, but neither of them listens.

### SCENE s00853 | INT. SMALL CLAIMS COURT, STRIKE ZONE LANES ANNEX - DAY
Detected names (may be incomplete or contain aliases): JUDGE FAIRCLOTH, ELSPETH MORROW, ABERNATHY
* 1 A ¶ A bowling alley, daytime.
* 2 A A folding table stands at the end of lane four.
* 3 A The pins are still set.
* 4 A A hand-lettered sign: "COURT IN SESSION.
* 5 A NO SHOES, NO SERVICE."
6 A ¶ JUDGE FAIRCLOTH, sixties, in a black robe over a bowling shirt, sits on a high stool.
7 A ELSPETH MORROW, forties, the plaintiff, stands with a binder.
8 A MR. ABERNATHY, seventies, the defendant, sits in a plastic chair clutching a trophy.
9 D FAIRCLOTH: Ms. Morrow, you allege Mr. Abernathy broke your window with a bowling ball.
10 D ELSPETH: I allege it, Your Honor. Lane six, left-hand hook, two a.m.
11 D ABERNATHY: It wasn't two. It was one-forty.
12 D FAIRCLOTH: Mr. Abernathy, you'll have your turn.
13 D ABERNATHY (muttering): One-forty. I wrote it down.
14 D ELSPETH: The ball came through my bathroom window, Your Honor.
15 D FAIRCLOTH: From the alley?
16 D ELSPETH: From the parking lot. He was bowling in the parking lot.
17 A ¶ Abernathy grips the trophy.
18 A Faircloth leans down from the stool and gestures with his gavel to the empty lanes beyond, as if the gallery were full.
19 D FAIRCLOTH (to the room): Let the record show we have no jury, no clerk, and no coffee.
20 A ¶ He taps the gavel.
* 21 A It bounces off the table and rolls under lane four.

### SCENE s00854 | EXT. THE MARKET ON MOSSBACK'S SHELL - NIGHT
Detected names (may be incomplete or contain aliases): IXCHEL VANTH, BRAM OSSERY, THISBE, ULAANA KHAN, MOSSBACK
* 1 A ¶ A giant tortoise the size of a hill wades through a silver-grass plain under three moons.
* 2 A Lanterns hang from its shell ridges like fruit.
* 3 A Stalls of woven reeds, hanging spices, strings of glowing beetles.
* 4 A The air smells of smoke and honey.
5 A ¶ IXCHEL VANTH, thirties, a spice merchant in a feathered shawl, weighs saffron on a brass scale.
6 A BRAM OSSERY, twenties, a young knight with a scuffed breastplate, leans on her counter pretending to browse.
7 A THISBE, ageless, a street-musician, plays a hollow-bone flute under a lantern.
8 A ULAANA KHAN, forties, in a fur-lined cloak, inspects a jar of black pepper held to the light.
9 D IXCHEL: Three silver for the saffron.
10 D BRAM: Two.
11 D IXCHEL: Three, and you pay for the staring.
12 A ¶ Bram drops his eyes to the scale.
13 A Ulaana lowers the jar and watches him across the stall.
14 A Thisbe's flute dips into a minor key.
15 D ULAANA: You're far from the capital, sir knight.
16 D BRAM: I'm on holiday.
17 D ULAANA: Wearing the king's crest.
18 A ¶ He shifts.
19 A His cloak falls over the crest.
20 A Ixchel slides the scale an inch to the left, away from his hand.
21 D IXCHEL (low): Ulaana. He's a boy.
22 D ULAANA: He's a boy with a king's seal in his pocket.
23 A ¶ Bram's fingers move toward his belt.
24 A Thisbe stops playing.
* 25 A For a moment the market's murmur is the only sound.
* 26 A ¶ A deep note rolls beneath their feet, the long slow call of the tortoise itself.
27 D MOSSBACK [V.O.] (vast, unhurried): I feel four hearts quicken on my back. Who has a secret?
28 A ¶ Everyone stills.
* 29 A Lanterns sway.
30 A Thisbe lowers the flute and bows to the ground.
31 D THISBE: Great One. Nobody speaks.
32 D MOSSBACK [V.O.]: Then I will walk slower.
* 33 A ¶ The ground shudders and settles.
34 A Ixchel moves first, slowly, and sets the scale on the counter.
35 D IXCHEL: Two silver and a half.
36 D BRAM: That's robbery.
37 D IXCHEL: That's the price of silence.
38 A ¶ He pays.
39 A She wraps the saffron in a leaf, holds it out.
40 A He takes it without meeting her eyes.
41 A Ulaana sets down the pepper jar and turns away, her cloak flaring, and walks into the crowd.
42 A Thisbe lifts the flute and begins a new tune, bright and quick, as if nothing had happened.

### SCENE s00855 | INT. BOTANICAL GARDEN, ORCHID HOUSE - NIGHT
Detected names (may be incomplete or contain aliases): FENN, CALLIOPE
* 1 A ¶ Mist hangs in humid air.
* 2 A Violet and white blooms spill from hanging baskets.
* 3 A A path of wet gravel winds between benches.
4 A ¶ FENN, 40s, in a damp raincoat, crouches beside a bench and runs a gloved thumb along a stem.
5 A CALLIOPE, 30s, the greenhouse curator, stands over him, arms folded, with a keyring that jingles at her hip.
6 A ¶ He lifts a petal with tweezers.
7 A She watches his hands.
8 D FENN: This one's been cut.
9 D CALLIOPE: Orchids are cut all the time.
10 D FENN: Not at the root. Not with a scalpel.
11 A ¶ She says nothing.
12 A He bags the stem and places it carefully in a case.
13 D CALLIOPE: You won't find anything here.
14 D FENN: You're sure?
15 D CALLIOPE: I'm certain.
16 A ¶ He stands.
* 17 A The mist parts around him.
18 A He looks up at the glass ceiling, then back at her, and his eyes stop on her gloved hand.
19 D FENN: Who taught you to hold a scalpel like that?
20 D CALLIOPE: ^Who taught you to ask?
21 A ¶ They speak in perfect unison.
* 22 A A drop of water falls from a leaf onto the gravel.
23 A Neither moves.

### SCENE s00856 | INT. GRAND PLAZA HOTEL, BALLROOM B - ARBITRATION HEARING - DAY
Detected names (may be incomplete or contain aliases): HARGREAVE, OTTOLINE, RAFFERTY, SUNITA, LORCAN
* 1 A ¶ A long table with water pitchers and legal pads.
* 2 A A banner for a dental convention is still hanging on the wall.
3 A Five people sit with their binders open.
4 D HARGREAVE: Ms. Ottoline, for the record, your client signed the second addendum on the fourteenth.
5 D OTTOLINE: My client signed a draft on the fourteenth. A draft is not an addendum.
6 D RAFFERTY: It had a signature page.
7 D OTTOLINE: It had a signature line, Mr. Rafferty. There's a distinction.
8 D SUNITA: Arbitrator, may I interject?
9 D HARGREAVE: You may, Ms. Desai.
10 D SUNITA: The addendum was circulated by email, acknowledged by email, and acted on within forty-eight hours. Whatever Ms. Ottoline calls it, her client behaved as if it were binding.
11 D OTTOLINE: Behaved. Not agreed.
12 D LORCAN: If I may, Arbitrator. The payments began on the sixteenth.
13 D OTTOLINE: Mr. Lorcan, with respect, you are a witness, not counsel.
14 D LORCAN: I'm both. It's a small firm.
15 D HARGREAVE: Order, please.
16 D RAFFERTY: Arbitrator, the payments are the point. Our client sent fifteen thousand dollars each month for six months.
17 D OTTOLINE: Under protest.
18 D SUNITA: Under what protest? There's no letter.
19 D OTTOLINE: There's a voicemail.
20 D RAFFERTY: A voicemail.
21 D OTTOLINE: Time-stamped and transcribed.
22 D HARGREAVE: Is the transcript in evidence?
23 D OTTOLINE: Exhibit nine.
24 D LORCAN: Exhibit nine is blank.
25 D OTTOLINE: It is not blank, it is redacted.
26 D SUNITA: Redacted by whom?
27 D OTTOLINE: By the court reporter.
28 D HARGREAVE: Ms. Ottoline, the court reporter works for me.
29 D OTTOLINE: Then I suspect she followed instructions.
30 D HARGREAVE: Mine?
31 D OTTOLINE: I didn't say yours.
* 32 A ¶ Nobody speaks.
* 33 A The banner behind them sags a little on its tape.
34 A A dental hygienist pokes her head through the door, takes one look at the room, and withdraws.

### SCENE s00857 | INT. ASHER GOLDBERG'S APARTMENT, KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): LEONIE GOLDBERG, ASHER
* 1 A ¶ A narrow galley kitchen with stacked dishes, peeling wallpaper, a calendar from a plumbing company dated three years ago.
* 2 A Rain on the window.
3 A ¶ LEONIE GOLDBERG, thirties, in her work blazer and a coat still buttoned, stands at the counter unpacking a paper bag of groceries.
4 A She sets down a loaf, a carton of milk, a box of pills, reads the label, and shelves it with the others in a row she has clearly arranged many times before.
* 5 A ¶ From the bedroom down the hall comes a cough, deep and rough.
* 6 A Then a man's voice.
7 D ASHER [O.S.]: Leonie?
8 D LEONIE: I'm here, Papa.
9 D ASHER [O.S.]: Did you bring the soup?
10 D LEONIE: I brought the other soup.
11 D ASHER [O.S.]: Not the tomato.
12 D LEONIE: Mushroom.
13 D ASHER [O.S.]: Bah.
14 A ¶ She turns on the stove, fills a pot, and breaks the can open with a bright little clack.
15 A She stirs.
* 16 A Steam rises.
17 A The cough comes again from the bedroom and this time lasts, and she stops stirring and stands with the spoon above the pot, listening to every second of it.
18 D LEONIE [CONT'D]: Papa, are you all right?
19 D ASHER [O.S.]: Fine. I'm fine. Where's your brother?
20 A ¶ She sets the spoon on the rest, wipes her hands on a dish towel, folds it in half, and folds it again.
21 D LEONIE: Danny's in Phoenix. He said he'd call.
22 D ASHER [O.S.]: He says a lot of things.
23 D LEONIE: I know.
24 A ¶ She walks down the hallway, past a wall of framed photographs, past the bathroom with its door open, past a pair of slippers on the carpet.
25 A She stops at the bedroom door.
* 26 A The light inside is dim.
27 A She raises her hand to knock, then lowers it, and instead rests her palm flat against the wood.
28 D ASHER [O.S.]: Leonie, are you standing there?
29 D LEONIE: No.
30 D ASHER [O.S.]: I can see your shadow under the door.
31 A ¶ She laughs, brief and wet, and pushes the door open.
32 D LEONIE: Mushroom or nothing, Papa.
33 D ASHER [O.S.]: Mushroom.

### SCENE s00858 | INT. DEVEREAUX NATURAL HISTORY MUSEUM, TAXIDERMY HALL - AFTER HOURS
Detected names (may be incomplete or contain aliases): MONTAGUE FINCH, PHILIPPA HOLT, DASHIELL WREN, XIMENA ROJAS, LUDO PETRIE
* 1 A ¶ Glass cases in long, shadowed rows: a snarling bear, a heron on one leg, a family of foxes frozen mid-pounce.
* 2 A A moth circles the one working lamp.
* 3 A Dust lies in a fine gray veil across everything.
4 A ¶ MONTAGUE FINCH, sixties, the museum director, stands under the lamp with a gold pocket watch in his hand and a smudge of dust on his cuff.
5 A PHILIPPA HOLT, forties, a private detective in a green overcoat, kneels beside the heron's case, shining a penlight on the lock.
6 A DASHIELL WREN, thirties, the night guard, stands in the doorway with a baton and a sour expression.
7 A XIMENA ROJAS, twenties, the intern, clutches a sheaf of loan forms against her chest.
8 A LUDO PETRIE, fifties, the taxidermist, sits on a stool in the corner with a sleeve of his cardigan unraveling in his fingers.
9 D PHILIPPA: The lock wasn't forced.
10 D MONTAGUE: Then someone had a key.
11 D DASHIELL: Only three keys exist. Mine. Mr. Finch's. And the taxidermist's.
12 D LUDO: Mine's in my pocket.
13 A ¶ He proves it by pulling out a ring, jingling it, and returning it.
14 A Montague turns his watch over in his palm.
15 A Philippa lifts the lid of the case, takes out a single feather with a pair of tweezers, and holds it up to the lamp.
16 A Dashiell shifts his weight and reaches for a handkerchief.
17 A Ximena sets the loan forms on a bench, then picks them up again, as though they might be needed.
18 A Ludo winds the loose thread of his cardigan around his finger until it goes white.
19 D PHILIPPA: This isn't a heron feather. It's from an ibis.
20 D MONTAGUE: I beg your pardon?
21 D PHILIPPA: Someone swapped the specimen. The ibis is worth forty times the heron.
22 D XIMENA: I catalogued it last month. It was an ibis, in case nine.
23 D DASHIELL: Case nine is empty.
24 D LUDO (quietly): It was never empty.
25 A ¶ Everyone turns to look at him.
26 A He lets the thread fall.

### SCENE s00859 | INT. DEEP-SEA HABITAT "ABYSSAL FIVE," COMMAND CABIN - NIGHT
Detected names (may be incomplete or contain aliases): CAPTAIN OKONJO ADEYEMI, BIRGIT SOLBERG, RAVI NAIR, SURFACE
* 1 A ¶ A cramped steel cylinder lined with gauges.
* 2 A A single porthole shows blackness lit by the drifting glow of jellyfish.
* 3 A A radio crackles on a bracket over the main console.
4 A ¶ CAPTAIN OKONJO ADEYEMI, fifties, sits at the console with his hand hovering over a red switch.
5 A BIRGIT SOLBERG, thirties, the geologist, floats against a bulkhead, her face lit green by a monitor.
6 A RAVI NAIR, twenties, the comms tech, kneels by an open panel with a soldering iron.
7 D OKONJO: How long until the pressure seal gives?
8 D BIRGIT: Nine minutes. Maybe ten.
9 D RAVI: I can reroute the main to the secondary.
10 D OKONJO: Then do it.
11 A ¶ He sparks the iron and hunches.
12 A She watches the gauge.
* 13 A The radio hisses.
14 D SURFACE [V.O.]: Abyssal Five, this is Surface Control. Do you read?
15 A ¶ Okonjo grabs the mic.
16 D OKONJO: Surface, Okonjo. We read you.
17 D SURFACE [V.O.]: Captain, we are seeing a pressure anomaly on your hull. Advise.
18 D OKONJO: We know. We're working it.
19 D SURFACE [V.O.]: Recommend immediate ascent.
20 D BIRGIT: Ascent? That's three hours of decompression.
21 D OKONJO: Surface, negative on ascent. We're working it.
* 22 A ¶ The hull groans.
* 23 A A rivet pops and rolls across the deck, ringing.
24 A Ravi's iron hovers over the circuit board.
25 D RAVI: Almost. Almost.
26 A ¶ He touches the iron down.
* 27 A A bright blue arc snaps.
* 28 A The lights flicker, hold, and steady.
* 29 A The groaning stops.
* 30 A The gauge needle sinks slowly out of the red.
31 D BIRGIT: It's holding.
32 D SURFACE [V.O.]: Abyssal Five, do you copy? We show pressure normalizing.
33 A ¶ Okonjo lets out a breath so long it fogs the glass of a dial.
34 A Ravi sits back on his heels and laughs, high and cracked.
35 A Birgit presses a palm to the bulkhead and shuts her eyes.
36 D OKONJO: Surface, Abyssal Five. We copy. Stand by.
37 A ¶ He releases the key.
* 38 A The radio hisses.
* 39 A Silence fills the cabin, filled only by the soft tick of cooling metal.

### SCENE s00860 | INT. COMMUNITY POTTERY STUDIO, KILN SHED - DUSK
Detected names (may be incomplete or contain aliases): GIDEON ROSS, MARTA ROSS
* 1 A ¶ A low brick room with a roaring gas kiln at one end.
* 2 A The air shimmers.
* 3 A Shelves of unfired mugs line the walls.
* 4 A Bags of clay are stacked like sandbags.
5 A ¶ GIDEON ROSS, fifties, in a stained apron, kneels by the kiln peeking through a spy hole.
6 A MARTA ROSS, fifties, his ex-wife, stands by the door holding a cardboard box.
7 D MARTA: I brought your things.
8 D GIDEON: Leave them by the door.
9 D MARTA: I'd rather hand them to you.
10 D GIDEON: I'm firing.
11 D MARTA: I can see that.
12 A ¶ He doesn't turn.
13 A She sets the box on a stool and takes out a framed photograph, a coat, a paperback with a cracked spine.
14 A She places each item on the table, one by one, with the care of someone laying out a corpse.
15 D GIDEON: What's the coat for?
16 D MARTA: It's your coat.
17 D GIDEON: It's July.
18 D MARTA: It'll be winter eventually.
19 A ¶ He closes the spy hole, stands, wipes his hands on his apron.
20 A Neither looks at the other.
* 21 A The kiln roars on.
* 22 A A mug cracks inside with a faint, sharp tick.
23 D GIDEON: That's one gone.
24 D MARTA: Only one?
25 D GIDEON: So far.
26 A ¶ She laughs without humor, then stops.
27 A He walks to the table and picks up the photograph.
* 28 A In it, two young people squint into the sun on a beach.
29 D MARTA: I couldn't throw it out.
30 D GIDEON: ^I couldn't keep it.
31 A ¶ They say it at once.
32 A Both freeze.
* 33 A The kiln's glow washes the room orange.
34 A Marta takes a step back, sits on the stool, and puts her hands over her face.
35 D GIDEON [CONT'D]: Marta.
36 D MARTA: Don't. Please. Just let me have a minute.
37 A ¶ He puts the photograph down gently, face up, between the coat and the book.
38 A He goes back to the kiln and kneels.
39 A He waits.
* 40 A The fire waits with him.
41 D MARTA [CONT'D]: How long till it's done?
42 D GIDEON: Eleven hours.
43 D MARTA: That's a long time.
44 D GIDEON: It is.
45 A ¶ She lowers her hands.
46 A She stands, takes the stool he's been using as a seat, and moves it beside him.
47 D MARTA: I can stay till the first one cracks.

### SCENE s00861 | INT. LAKESIDE CABIN, LIVING ROOM - EVENING
Detected names (may be incomplete or contain aliases): EVANDER, CLARISSA, BEATRIX, HAMID
* 1 A ¶ A woodstove glows.
* 2 A Mismatched armchairs, a bookshelf of paperbacks, a window that frames the dark lake.
* 3 A A board game sits half-played on the coffee table.
4 A ¶ EVANDER, sixties, the host, in a fisherman's sweater, pours wine from a dusty bottle.
5 A CLARISSA, forties, his daughter, sits beside her sister BEATRIX, forties, who holds a game piece between two fingers.
6 A HAMID, thirties, Clarissa's quiet husband, reads the rules aloud.
7 D EVANDER: Everyone's glass full?
8 D CLARISSA: Yes, Papa.
9 D BEATRIX: Mine's not.
10 D EVANDER: Because you don't drink.
11 D BEATRIX: I can still hold it.
12 A ¶ He tops hers off.
13 A She sets it on the table and doesn't touch it.
14 A Clarissa watches her, then looks away.
15 A Hamid rolls the dice, slow, careful.
16 D HAMID: Six.
17 D CLARISSA: Seven! You moved seven.
18 D HAMID: I moved six.
19 D BEATRIX: He moved six, Clarissa.
20 D CLARISSA: She always sides with him.
21 D EVANDER: Girls, please.
22 D BEATRIX: Papa, I need to tell you something.
23 D CLARISSA: Not now, Bea.
24 D EVANDER: What is it?
25 D BEATRIX: I
26 D CLARISSA: She's not feeling well.
27 D BEATRIX: I'm perfectly well, Clarissa, I'm trying to
28 D HAMID (quietly): Maybe we let her speak.
29 A ¶ Everyone stops.
* 30 A The woodstove ticks.
31 A Evander puts down the bottle and the cork rolls off the table.
32 D EVANDER: Beatrix.
33 A ¶ She pushes her glass an inch away.
34 A She meets her father's eyes for the first time that night.
35 D BEATRIX: I sold the cabin.
36 A ¶ Clarissa lets out a sound that is half laugh, half breath.
37 A Evander does not move at all.

### SCENE s00862 | INT. DEFUNCT ICE RINK, "SYNERGY KICKOFF" - DAY
Detected names (may be incomplete or contain aliases): COLM, ANNELIESE, DORCAS, VIKRAM, PENROSE, YUSRA
* 1 A ¶ A chilly arena with dead floodlights and a Zamboni parked in the corner like a retired elephant.
* 2 A Folding chairs in a semicircle.
* 3 A A banner: "WE ARE ONE TEAM."
* 4 A A podium with a microphone that squeals.
5 A ¶ Six people sit with lukewarm coffee and laminated agendas.
* 6 A On the ice-less floor, where the center circle once glowed, a flip chart waits on a tripod.
7 D COLM: Okay, welcome everybody. Can everyone hear me?
8 D ANNELIESE: Yes.
9 D COLM: Great. Anneliese, you can hear me?
10 D ANNELIESE: I said yes.
11 D DORCAS: We could hear you in the car park.
12 D COLM: Wonderful. So today's theme is...
13 D VIKRAM: Alignment.
14 D COLM: Alignment, exactly, Vikram, thank you for that.
15 D VIKRAM: It's on the banner. Well, "one team" is. Alignment is on the agenda.
16 D PENROSE: I thought today's theme was resilience.
17 D COLM: It's both.
18 D PENROSE: They're different words.
19 D COLM: They're complementary words.
20 D YUSRA: Can I ask something?
21 D COLM: Of course, Yusra, we love questions.
22 D YUSRA: Why are we here? In the rink?
23 D COLM: It's a neutral space.
24 D DORCAS: It's a cold space.
25 D COLM: It builds character.
26 D ANNELIESE: My feet have no character left.
27 D PENROSE: I read the invitation twice. It said "off-site."
28 D COLM: It is off-site.
29 D VIKRAM: From what?
30 D COLM: From our usual site.
31 D YUSRA: Which is across the street.
32 D COLM: Which is a bit literal, Yusra.
33 D YUSRA: I'm literal on Mondays.
34 D DORCAS: It's Friday.
35 D YUSRA: I'm literal in general.
36 D COLM: Okay, let's move to the first exercise.
37 D ANNELIESE: Is there a second exercise?
38 D COLM: There are four.
39 D PENROSE: I have a flight.
40 D COLM: Penrose, your flight is at eight.
41 D PENROSE: This morning.
42 D COLM: No, tonight.
43 D PENROSE: It says eight a.m. on the ticket.
44 D COLM: I'm sure you misread it.
45 D PENROSE: I'm sure I didn't.
46 D VIKRAM: Could we maybe start with a break?
47 D DORCAS: We've only just started.
48 D VIKRAM: That's why we need a break.
49 D COLM: Let's table that.
50 D ANNELIESE: Where? There's no table.
51 D YUSRA: Colm, I think the Zamboni is leaking.
52 D COLM: It's a feature.
53 D PENROSE: It's a hazard.
54 D COLM: Everything's a hazard if you look at it right.
55 D DORCAS: Then maybe don't make us look.
56 D COLM: Dorcas.
57 D DORCAS: I'm only saying.
58 D ANNELIESE: Colm, can we have a vote?
59 D COLM: On what?
60 D ANNELIESE: On whether to leave.
61 D COLM: That's not on the agenda.
62 D VIKRAM: Neither is the cold.
63 D YUSRA: I vote leave.
64 D PENROSE: Leave.
65 D DORCAS: Leave.
66 D VIKRAM: Leave.
67 D ANNELIESE: Leave, obviously.
68 D COLM: Okay. Okay. Show of hands for staying?
69 D COLM [CONT'D]: Just me, then.
70 D DORCAS: We'll tell them you were wonderful.

### SCENE s00863 | INT. ABANDONED OBSERVATORY, MAIN DOME - NIGHT
Detected names (may be incomplete or contain aliases): CASPIAN ROTH, ODETTE LACROIX
* 1 A ¶ A great copper dome, its slit open to the stars, hangs overhead like the underside of a bell.
* 2 A A brass telescope as long as a bus rests on a cracked iron mount.
* 3 A Dead leaves cover the floor.
* 4 A A single lantern burns on a crate.
5 A ¶ CASPIAN ROTH, fifties, in a long gray coat, sits on an overturned bucket with a laptop open on his knees.
6 A He types, stops, types again.
7 A His face glows pale blue.
* 8 A Beside him, a satellite phone lies on the crate, its screen dark.
9 A ¶ He lifts his head.
* 10 A The dome creaks in a wind that shouldn't be there.
11 D CASPIAN (to himself): Come on. Come on.
12 A ¶ He types.
* 13 A The telescope's great eye twitches an inch to the left, and a gear somewhere shrieks.
14 A He freezes.
* 15 A The dome is still.
16 D CASPIAN [CONT'D]: That's not me.
17 A ¶ He closes the laptop slowly and reaches for the phone.
18 A As he does, a shape detaches itself from the shadow beneath the telescope and walks forward into the light: ODETTE LACROIX, forties, in a black raincoat, bare hands, no bag.
19 A She is soaked to the skin.
* 20 A A thin line of water drips from her hem onto the dead leaves with every step.
21 D ODETTE: Don't touch the phone.
22 D CASPIAN: How long have you been here?
23 D ODETTE: Since before you.
24 D CASPIAN: That's impossible. I locked the door.
25 D ODETTE: Which door?
26 A ¶ He looks at the entrance, a heavy oak slab bolted from inside.
27 A Then at the slit overhead.
28 A Then at her wet coat.
29 D CASPIAN: Who sent you?
30 D ODETTE: Nobody sends me. I'm the one who stays.
31 A ¶ She crosses to the crate and looks down at the dead phone, then at the laptop, then at him.
32 A Her eyes are tired, not unkind.
33 D ODETTE [CONT'D]: You came here to upload something.
34 D CASPIAN: Data. Just data.
35 D ODETTE: Data about the star?
36 D CASPIAN: How do you
37 D ODETTE: I'm the last person who could read it.
* 38 A ¶ A long silence.
* 39 A A gust of cold air sweeps through the dome.
* 40 A The lantern gutters, steadies.
41 D CASPIAN (low, to the room): Is anyone else here?
42 D ODETTE: Only the telescope.
43 D CASPIAN: It moved.
44 D ODETTE: It does that when someone looks.
45 A ¶ He sets the laptop on the crate and stands.
46 A She doesn't step back.
* 47 A Their shadows overlap on the leaf-strewn floor.
48 D CASPIAN: Miss, I don't know what
49 D ODETTE: Caspian. Sit down. You'll want to hear this sitting.
50 A ¶ He stays standing.
51 A Then, slowly, as if all his joints have turned to paper, he lowers himself back onto the bucket.
52 A She picks up the lantern and holds it between them, so that each of them is lit and neither is.
53 D ODETTE [CONT'D]: Tell me what you saw.

### SCENE s00864 | INT. HESTER'S KITCHEN, FARMHOUSE - EARLY EVENING
Detected names (may be incomplete or contain aliases): HESTER VANDERBILT, BAXTER, IMOGEN, KENJI, ROSALBA, TAVISH
* 1 A ¶ A low-beamed room, copper pots on hooks, a scrubbed pine table crowded with mismatched plates.
* 2 A Steam fogs the window.
* 3 A A cat sleeps on the radiator.
4 A ¶ HESTER VANDERBILT, eighties, hunched in a flowered apron, stirs a pot with a wooden spoon.
5 A At the table sit her grandchildren: BAXTER, forty, in a rumpled suit; IMOGEN, thirty-five, with a toddler's drawing pinned to her cardigan; KENJI, thirty, fresh off a plane, backpack still on.
6 A Her great-grandchildren ROSALBA, eight, and TAVISH, five, kneel on their chairs, arranging peas into a pattern.
7 D HESTER: Everyone sit properly.
8 D ROSALBA: We are, Granny Hess.
9 D TAVISH: I'm sitting with my knees.
10 D IMOGEN: Tavish, honey, on your bottom.
11 A ¶ He turns around, grinning, and sits on his bottom.
12 A Rosalba rolls her eyes and slides a pea toward him.
13 A ¶ Baxter looks at his phone.
14 A Kenji glances at Baxter, then at the phone, then at his plate.
15 A Hester sets down the pot with a thump.
16 D HESTER: Baxter. The phone.
17 D BAXTER: Granny, it's work.
18 D HESTER: It's Sunday.
19 D BAXTER: It's always work.
20 D KENJI: Bax, give it to me.
21 A ¶ He holds out his hand.
22 A Baxter hesitates, then drops the phone in it.
23 A Kenji slips it into his backpack and zips it closed.
* 24 A Nobody says anything.
25 A Imogen reaches for the potatoes.
26 D IMOGEN: I'll serve.
27 D HESTER: Imogen, sit. I'll serve.
28 D IMOGEN: Granny
29 D HESTER: Sit.
30 A ¶ She sits.
31 A Hester ladles stew into bowls, one by one, her hands shaking slightly.
32 A Tavish watches, wide-eyed.
33 A Rosalba stands and takes the ladle gently from her great-grandmother's hands and finishes the serving herself, with the solemn care of a priest.
34 D ROSALBA: Granny Hess, you sit too.
35 A ¶ Hester lowers herself into the chair at the head of the table.
36 A The family looks at her, then at one another, and no one reaches for a spoon.
37 D TAVISH: Are we saying thank you?
38 D HESTER: We are.
39 A ¶ She folds her hands.
40 A Around the table, the others do the same, even Kenji, even Baxter, and the cat on the radiator opens one eye.

### SCENE s00865 | INT. SUBURBAN KITCHEN - MORNING
Detected names (may be incomplete or contain aliases): MINA, GUS, ROWAN
* 1 A ¶ Cereal boxes, a half-eaten banana, a school permission slip stuck under a magnet.
* 2 A The radio plays traffic.
3 A ¶ MINA, forties, tosses a lunch bag onto the counter.
4 A GUS, her father, seventies, stands at the sink drying a mug.
5 A ROWAN, eleven, her son, sits on a stool with a backpack on his lap, hands tight on the straps.
6 A ¶ She checks her watch.
7 A He sets down the mug.
8 A The boy stares at the table.
9 D MINA: Rowan, shoes.
10 D ROWAN: They're on.
11 D MINA: Other shoes.
12 A ¶ He does not move.
13 A She walks around the counter and crouches in front of him.
14 A She puts a hand on his knee.
15 A He pulls it away.
16 D GUS: Mina. Let him.
17 D MINA: Dad, we're late.
18 D GUS: He's not ready.
19 A ¶ She looks up at her father, then at her son, then at the clock.
20 A She opens her mouth, closes it, and takes a breath.
21 D MINA: Rowan, is it the test?
22 A ¶ He shakes his head.
23 A She waits.
* 24 A The radio moves on to the weather.
25 A Gus takes the backpack from the boy's lap, sets it on the floor, and sits beside him.
26 D GUS: I'll walk you in.
27 A ¶ Rowan nods once.
28 A Mina stands, picks up the lunch bag, and holds it out.
29 A He takes it.
30 D MINA: I'll pick you up.
31 D ROWAN: Okay.
32 A ¶ She leans in to kiss his hair, and for the first time he lets her.

### SCENE s00866 | INT. PRESTON & VALE ENTERPRISES, OPEN OFFICE - DAY
Detected names (may be incomplete or contain aliases): TEAM PLAYER, LYLE FENWICK, NGOZI ADEYEMI, PRESTON VALE
* 1 A ¶ Two hundred identical desks stretch toward a wall of frosted glass.
* 2 A Fluorescent lights hum a note somewhere between boredom and dread.
* 3 A Beige carpet.
* 4 A A potted fern with a sign: "THIS PLANT IS A TEAM PLAYER."
* 5 A In the corner, a lone water cooler.
6 A ¶ LYLE FENWICK, fifties, pot-bellied, in short sleeves and a clip-on tie, stands at the head of a cluster of desks with a binder.
7 A NGOZI ADEYEMI, thirties, sharp and unsmiling, sits at her workstation, arms crossed.
8 A PRESTON VALE, sixties, the CEO, tanned and silver-haired, enters from the glass wall and stands behind Lyle, hands in pockets.
9 D LYLE: So, Ngozi, as I was saying, we're just looking at some streamlining.
10 D NGOZI: You said that last quarter.
11 D LYLE: And it's still true.
12 D NGOZI: Last quarter you streamlined Marcia.
13 D LYLE: Marcia chose to leave.
14 D NGOZI: Marcia was escorted out by security with a box of her plants.
15 D LYLE: There was a transition.
16 D PRESTON: Lyle, let me.
17 D LYLE: Of course, sir.
18 D PRESTON: Ngozi. May I call you Ngozi?
19 D NGOZI: It's what's on my badge.
20 D PRESTON: Good. Good. I'd like to speak candidly. We're a family here.
21 D NGOZI: Families don't have headcounts.
22 D PRESTON: Some do.
23 D NGOZI: Not the good ones.
24 D LYLE: Ngozi.
25 D PRESTON: It's fine, Lyle. I appreciate directness.
26 D NGOZI: Then I'll be direct. Is my job gone?
27 D PRESTON: Your role is being reimagined.
28 D NGOZI: By whom?
29 D PRESTON: By leadership.
30 D NGOZI: Which of you?
31 D PRESTON: Both of us.
32 D LYLE: Well
33 D PRESTON: Both of us, Lyle.
34 D NGOZI: So I'll be reimagined into the parking lot.
35 D PRESTON: That's not how I'd put it.
36 D NGOZI: How would you put it?
37 D PRESTON: As an opportunity.
38 D NGOZI: For whom?
39 D PRESTON: For growth.
40 D NGOZI: Mine, or yours?
41 A ¶ Preston does not answer.
42 A Lyle clears his throat.
* 43 A The fern's sign flutters in the air conditioning.
44 D NGOZI [CONT'D]: Say it plainly.
45 D PRESTON: Effective Friday.
46 D NGOZI: Thank you.
47 D LYLE: Ngozi, there's a severance package
48 D NGOZI: How generous.
49 D LYLE: Two weeks.
50 D NGOZI: For eleven years.
51 D PRESTON: It's competitive.
52 D NGOZI: With what? A coupon?
53 D LYLE: Please keep your voice
54 D NGOZI: Down? Why?
55 D LYLE: People are watching.
56 D NGOZI: Good.
57 A ¶ She stands.
* 58 A The desks around them have gone silent.
59 A Dozens of heads have turned.
60 A She looks at her colleagues, then at Preston, then at Lyle, and picks up the fern.

### SCENE s00867 | INT. COLD STORAGE WAREHOUSE, LOADING DOCK - NIGHT
Detected names (may be incomplete or contain aliases): VALENTIN MOROZOV, CORINNE ABBOTT, MATEUS SOARES, HANA PARK
* 1 A ¶ Frost on steel.
* 2 A Fog from the freezer doors.
* 3 A A forklift idles with its lights on.
* 4 A Pallets of boxed fish stacked to the ceiling.
5 A ¶ VALENTIN MOROZOV, 40s, in a parka, checks a manifest.
6 A CORINNE ABBOTT, 30s, in a black ski jacket, stands beside a pallet, tapping a tablet.
7 A MATEUS SOARES, 30s, a forklift driver in a reflective vest, leans on a pole.
8 A HANA PARK, 20s, a nervous clerk, clutches a clipboard.
9 A ¶ He glances at his watch.
10 A She glances at him.
11 A ¶ He whispers to the clerk.
12 A She goes pale.
13 D CORINNE: Something wrong?
14 D VALENTIN: Paperwork.
* 15 A ¶ A truck horn sounds outside.
16 A He signals to the driver.
17 A The driver nods.
18 A ¶ Mateus climbs onto the forklift.
19 A Hana steps back.
20 D HANA: Mr. Soares, that pallet isn't on the list.
21 D MATEUS: It's on mine.
22 A ¶ He lifts the pallet.
* 23 A A box slips.
* 24 A It splits on the concrete, and ice-wrapped bricks of white powder spill out.
* 25 A ¶ Silence.
26 A Valentin's hand goes to his jacket.
27 A ¶ Corinne looks at the powder.
28 A She looks at him.
29 A She steps in front of Hana.
30 D CORINNE: Hana. Behind me.
31 A ¶ Valentin draws.
32 A She raises her tablet like a shield.
33 A He fires.
* 34 A The tablet shatters.
35 A She dives, rolls, and kicks the forklift's emergency stop.
36 A ¶ Mateus tumbles from the seat.
37 A Hana screams.
* 38 A The lights flicker.
39 A ¶ He scrambles toward a pallet.
40 A Valentin pursues him through the stacked boxes.
41 A ¶ She grabs Hana's wrist and drags her toward the dock door.
* 42 A A shot rings.
* 43 A Plaster dust rains.
44 A ¶ At the door, she rips it open.
* 45 A Cold night air rushes in.
* 46 A Red and blue lights flash across the lot.
* 47 A Sirens rise.
48 A ¶ Valentin stops in the middle of the aisle.
49 A He lowers his gun slowly, looking at the lights.

### SCENE s00868 | EXT. CARNIVAL OF DUST, ABANDONED PRAIRIE FAIRGROUND - DUSK
Detected names (may be incomplete or contain aliases): EZEKIEL TOLLIVER, SORREL, JUBAL CREED, PEARL
* 1 A ¶ A rusted Ferris wheel stands against a bruised orange sky, its gondolas swaying and groaning.
* 2 A Wind rolls tumbleweeds between the empty tents.
* 3 A A torn banner snaps: "GRAND JUBILEE."
4 A ¶ EZEKIEL TOLLIVER, fifties, in a long black coat and a battered hat, sits on a barrel by the shooting gallery, a revolver across his knee.
5 A SORREL McCREA, thirties, in a split riding skirt and a man's vest, stands twenty paces away with her thumbs hooked in her belt.
6 A JUBAL CREED, young, nervous, crouches behind a barrel with a rifle.
7 D EZEKIEL: You've come a long way, Sorrel.
8 D SORREL: Not as long as you.
9 D EZEKIEL: It never is.
* 10 A ¶ The wheel groans.
* 11 A A gondola swings loose and clangs against its frame.
12 A Jubal flinches and the rifle barrel rises an inch.
13 D SORREL: Tell your boy to put it down.
14 D EZEKIEL: Jubal. Put it down.
15 D JUBAL: Mr. Tolliver, I
16 D EZEKIEL: Down.
17 A ¶ Jubal lowers the rifle.
* 18 A Dust blows between them.
* 19 A In the silence, a distant bell chimes from the abandoned chapel, three notes.
20 A ¶ PEARL, a girl of twelve in a patched dress, steps out from behind the tilt-a-whirl with a bucket of water in each hand.
21 A She sees the three of them, stops, and sets down the buckets without a sound.
22 A ¶ Ezekiel's eyes go to her.
23 A Sorrel's hand opens at her side.
24 D SORREL: Pearl. Go back.
25 A ¶ Pearl does not move.

### SCENE s00869 | EXT. ENCHANTED ORCHARD, STONE WELL - DAWN
Detected names (may be incomplete or contain aliases): ALARIC THORNE, PERCIVAL ASHDOWN
* 1 A ¶ Apple trees hang heavy with silver fruit.
* 2 A Mist curls over the grass.
* 3 A A moss-green well stands at the center, its rim carved with runes that faintly glow.
4 A ¶ ALARIC THORNE, thirties, a wandering knight in a travel-stained cloak, kneels at the well's edge, lowering a leather bucket on a rope.
* 5 A His horse grazes nearby.
* 6 A ¶ The bucket rises.
7 A He tips it and drinks from his hands.
* 8 A The water glitters.
* 9 A ¶ A branch snaps behind him.
10 A He spins, hand on his hilt.
11 A ¶ PERCIVAL ASHDOWN, thirties, in a scholar's gray robe, steps out of the trees with a satchel over one shoulder and a book in his hand.
12 A He raises his empty palm.
13 D PERCIVAL: Peace, friend. I mean no harm.
14 D ALARIC: Most who say that do.
15 D PERCIVAL: Then I shall say it quietly.
16 A ¶ Alaric lowers his hand.
17 A Percival smiles, steps to the well, and peers over the rim.
18 D PERCIVAL [CONT'D]: You've drunk from it.
19 D ALARIC: I was thirsty.
20 D PERCIVAL: Of course. Everyone is.
21 A ¶ He closes his book and tucks it into the satchel.
22 D ALARIC: What does it do?
23 D PERCIVAL: It shows you what you've lost.
24 D ALARIC: I've lost nothing.
25 D PERCIVAL: Then you won't mind looking.
26 A ¶ He nods at the well.
27 A Alaric hesitates, then bends over the rim.
* 28 A The water stills.
* 29 A Something pale rises in it.
30 A He watches it for a long moment, and his shoulders go slack.
31 A ¶ He turns away from the well and wipes his face with his sleeve.
32 A He does not look at the scholar, who has the decency to look at the trees.
33 D ALARIC [CONT'D]: How far is the nearest village?
34 D PERCIVAL: Half a day. I will walk with you, if you like.
35 D ALARIC: I prefer to walk alone.
36 D PERCIVAL: Then I shall walk very far behind.
37 A ¶ Alaric almost smiles.
38 A He gathers his horse's reins and starts across the orchard.
39 A Percival waits until the knight is a dozen paces ahead, then follows, whistling softly.

### SCENE s00870 | INT. PARKING GARAGE LEVEL P4 - "SYNERGY SOCIAL" TENT - DAY
Detected names (may be incomplete or contain aliases): DESMOND PRUITT, ANOUK VAN DER BERG, TAKESHI ONO, LOLA FERREIRA
* 1 A ¶ A pop-up gazebo between two oil stains.
* 2 A Banner: MANDATORY FUN.
* 3 A Folding table.
* 4 A Sheet cake, sweating.
5 A ¶ DESMOND PRUITT, 50s, lanyard heavy as a medal.
6 A Clipboard.
7 A Smiles at nobody.
8 A ¶ ANOUK VAN DER BERG, 30s, auditor.
9 A Stabs cake with a plastic knife.
10 A Doesn't look up.
11 A ¶ TAKESHI ONO, 20s, intern.
12 A Hoodie.
13 A Holding a balloon he was told to hold.
14 A ¶ LOLA FERREIRA, 40s, HR.
15 A Headset.
16 A Always mid-sentence.
17 D DESMOND: Welcome, team. Who's having fun?
* 18 A ¶ Silence.
* 19 A A car alarm chirps two floors up.
20 D DESMOND [CONT'D]: Let's circle back on that.
21 D ANOUK: Is this billable?
22 D LOLA (into headset): No, I'm listening, I'm just also here.
* 23 A ¶ Takeshi's balloon drifts toward a sprinkler.
24 A He catches it.
25 A Desmond and Takeshi both freeze.
26 D DESMOND: That's a safety balloon.
27 D TAKESHI: It's a regular balloon.
28 D DESMOND: Compliance says safety.
29 A ¶ Anouk slides a slice of cake onto a paper plate.
30 A Lola and Desmond reach for it at once.
31 A They fight over the plate.
* 32 A Frosting on a lanyard.
33 D LOLA: Wellness incident. I'm logging it.
34 D ANOUK: You're the logger.
35 D LOLA: I'm logging that I logged.
* 36 A ¶ A forklift beeps in reverse.
37 A Everyone looks.
* 38 A It goes nowhere.
39 D TAKESHI: Do we get to leave?
40 D DESMOND: Leave is a strong word.
41 D ANOUK: Ten minutes of fun, then my report.
42 D DESMOND: What's in the report?
43 D ANOUK: Cake. Mostly cake.
44 A ¶ The group scatters toward their cars, then stops.
* 45 A Nobody has the right keys.
46 A They drift back to the table.
47 D LOLA (whispering): Same time next quarter.
48 A ¶ Desmond raises the clipboard like a toast.
* 49 A Nobody joins him.

### SCENE s00871 | INT. NIGHT FERRY - CAR DECK - NIGHT
Detected names (may be incomplete or contain aliases): INES VARELA, SEUN ADEYEMI, HARLAN COOPER-REID, PRIYA NAIR, DMITRI SOKOLOV, GRANDMA ZOFIA
* 1 A ¶ Engines thrum.
2 A Six figures around a rusted minivan.
3 A INES VARELA, 40s, SEUN ADEYEMI, 30s, HARLAN COOPER-REID, 60s, PRIYA NAIR, 20s, DMITRI SOKOLOV, 50s, and GRANDMA ZOFIA, 80s, in a folding chair.
4 A ¶ She clutches an urn.
5 A He pretends not to see.
6 A They all stare at the lid.
7 D INES: We scatter it at the island, like she said.
8 D HARLAN: She said the harbor.
9 D SEUN: She said both. She said a lot of things.
10 A ¶ Zofia laughs at nothing.
11 A Priya takes the urn from Ines, gently, and Ines lets go too fast.
12 D PRIYA (to herself): Okay. Okay.
13 D DMITRI: Someone opened this.
* 14 A ¶ Silence.
15 A He holds up the lid, tape peeled.
16 A Harlan studies the floor.
17 A Ines reaches for the urn again.
18 D INES: Who opened it?
19 D HARLAN: She asked me to look.
20 D SEUN (over Harlan): You looked? You LOOKED?
21 D DMITRI: Seun, quiet.
22 D INES (over both): There's nothing in it, is there.
23 A ¶ Priya tips the urn.
* 24 A Ash, grey, real.
25 A Everyone exhales.
26 A Zofia stops laughing.
27 D ZOFIA: That is not Marta.
28 A ¶ They turn as one.

### SCENE s00872 | EXT. FLOODED RICE PADDY - PUMP HOUSE ROOF - DUSK
Detected names (may be incomplete or contain aliases): KOSTAS VLAHOS, ELIAS TREMBLAY, HANA YOSHIDA
* 1 A ¶ Sky bruised orange.
* 2 A Frogs.
* 3 A Somewhere, far off, the thump of mortars.
* 4 A Not close.
* 5 A Not yet.
6 A ¶ SGT. KOSTAS VLAHOS, 40s, lies prone behind a sandbag.
7 A Rifle across his forearms.
8 A He hasn't blinked in a minute.
9 A ¶ PVT.
10 A ELIAS TREMBLAY, 19, crouches beside him.
11 A Boots soaked.
12 A He chews a strip of dry rice cake.
13 A ¶ CPL.
14 A HANA YOSHIDA, 30s, the radio operator, sits cross-legged under a tarp.
15 A Headset on one ear.
16 D TREMBLAY: How long do we sit here?
17 D VLAHOS: Till he says.
18 A ¶ Tremblay glances at the radio.
19 A She shakes her head.
20 A He sinks back.
21 D YOSHIDA: Static. Nothing but static.
* 22 A ¶ Frogs go quiet.
23 A All three freeze.
24 A He lifts a hand.
25 A She stops breathing.
26 A The boy stops chewing.
* 27 A ¶ A beat.
* 28 A The frogs start again.
29 D TREMBLAY (whispering): Was that us?
30 D VLAHOS: Wind.
31 A ¶ He doesn't believe it.
32 A Neither do they.
33 A She slides the headset off, lays it on her knee.
34 D YOSHIDA: They moved the line.
35 D VLAHOS: How far?
36 D YOSHIDA: Behind us.
* 37 A ¶ Silence.
* 38 A The mortars are louder now.
39 A Tremblay reaches for his rifle, fumbles it.
* 40 A It clatters on tin.
41 A ¶ They duck.
42 A All three.
43 A Eyes up.
* 44 A ¶ Across the paddy, a flashlight blinks once.
* 45 A Twice.
46 D VLAHOS: Get down.
47 D TREMBLAY: Sarge--
48 D VLAHOS: DOWN.
* 49 A ¶ The water around the pump house shivers.
* 50 A Then the roof lifts.
* 51 A ¶ A white flash swallows everything.

### SCENE s00873 | INT. TAXIDERMY SHOP - BACK ROOM - NIGHT
Detected names (may be incomplete or contain aliases): MAG SOLBERG, ISAIAH TWOBEARS, NADIA KHALIL, GUS
* 1 A ¶ Glass eyes in a coffee tin.
* 2 A A badger mid-snarl.
* 3 A A half-stuffed owl on the workbench, wings pinned.
4 A ¶ MAG SOLBERG, 60s, rubber gloves, stitches the owl without looking at her visitors.
* 5 A A landline phone sits next to her, cord stretched.
6 A ¶ ISAIAH TWOBEARS, 30s, leather jacket, stands too near the door.
7 A His hands are in his pockets.
8 A He hasn't taken off his gloves either.
9 A ¶ DET. NADIA KHALIL, 40s, drifts along a shelf of foxes.
10 A Touches nothing.
11 D KHALIL: Nice work.
12 D MAG: Thanks.
13 D KHALIL: You do the owl for the bar on Delancey?
14 D MAG: Does it look like I do bars?
15 A ¶ Khalil lifts a fox.
16 A Puts it back facing the wall.
17 D ISAIAH: We should go.
18 D KHALIL: We just got here.
* 19 A ¶ The phone RINGS.
20 A Mag lets it.
* 21 A Three rings.
* 22 A Four.
23 A Isaiah shifts his weight.
24 D KHALIL [CONT'D]: Get that.
25 A ¶ Mag peels off one glove.
26 A Answers.
27 D MAG: Solberg's.
28 D GUS [V.O.] (through the receiver): Mags. They find the thing yet?
29 A ¶ Mag looks at Khalil.
30 A Khalil smiles.
31 A Mag looks at the owl.
32 D MAG: Wrong number.
33 D GUS [V.O.]: Mags--
34 A ¶ She hangs up.
35 A Picks up the needle again.
* 36 A The thread trembles, once.
37 D KHALIL: Who was that?
38 D MAG: Somebody's husband.
39 A ¶ Isaiah steps out through the back door.
* 40 A Cold air rushes in.
41 A Khalil watches him go and does nothing.
42 D KHALIL: Finish the owl, Mag.
43 A ¶ Mag pulls the thread tight.

### SCENE s00874 | INT. PLANETARIUM - DOME HALL - NIGHT
Detected names (may be incomplete or contain aliases): WINIFRED PARRISH, STRANGER, ABERNATHY, JULIAN
* 1 A ¶ The star projector hums, throwing a slow ocean of light across a curved ceiling.
* 2 A The seats recline.
* 3 A Most are empty.
4 A ¶ WINIFRED PARRISH, 30s, a sensible coat and a sensible umbrella, sits alone in row F. She watches Orion rise.
5 A ¶ A STRANGER, 30s, in a rumpled raincoat, slides into the seat beside her.
6 A He carries a paper cup of coffee and an apologetic smile.
7 D STRANGER: Is this seat taken?
8 D WINIFRED: There are two hundred seats.
9 D STRANGER: I like this one.
10 A ¶ She considers him, then looks back at the stars.
11 A He sips his coffee.
12 A Neither speaks for a while.
13 D WINIFRED (to herself): Betelgeuse is late tonight.
14 D STRANGER: It's always late. It's a very old star.
15 A ¶ MR. ABERNATHY, 70s, the caretaker in a navy cardigan, shuffles down the aisle with a flashlight.
16 A He pauses at row F.
17 D MR. ABERNATHY: Last show's over, folks. Ten minutes.
18 D WINIFRED: Thank you, Mr. Abernathy.
19 D MR. ABERNATHY: Who's your friend?
20 D WINIFRED (to the Stranger): Yes. Who are you?
21 D STRANGER: Julian. Julian Hale.
22 A ¶ Mr. Abernathy nods, satisfied, and shuffles on.
23 D JULIAN: You come here often?
24 D WINIFRED: Every Thursday.
25 D JULIAN: Then I'll see you Thursday.
26 A ¶ She smiles at the ceiling, not at him.
* 27 A Overhead, a comet drifts across the dome.
28 D MR. ABERNATHY (calling, to the empty hall): Lights in five!
29 D JULIAN (softly, to Winifred): Stay for the comet.
30 A ¶ She does.

### SCENE s00875 | INT. CATHEDRAL CRYPT - FIELD KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): SERGEANT AUGUSTIN BELLAMY, LIEUTENANT PERPETUA NWOSU
* 1 A ¶ Low vaulted stone, whitewashed long ago and soot-dark now.
* 2 A Rows of carved tombs line the walls, each with a name worn smooth.
* 3 A Iron cauldrons hang over a cooking fire dug into the old flagstones.
* 4 A Smoke finds its way up through a narrow stair.
* 5 A A single lantern hangs from a hook meant for something holier.
6 A ¶ SERGEANT AUGUSTIN BELLAMY, 50s, the company cook, stands at the largest cauldron with a wooden paddle.
7 A Broad, slow, a face like folded bread dough.
8 A A flour-stained apron over his uniform.
9 A He hums something that might be a hymn.
10 A ¶ LIEUTENANT PERPETUA NWOSU, 20s, enters down the stair with a map case under her arm.
11 A Tall, tired, helmet in her hand.
* 12 A Her boots leave wet prints on the stone.
13 D NWOSU: Evening, Sergeant.
14 D BELLAMY: Lieutenant. You're early for stew.
15 D NWOSU: I'm early for everything. It's a character flaw.
16 D BELLAMY: Sit. Rest your feet. The dead won't mind.
17 A ¶ She sets the map case on a tomb lid.
18 A Hesitates.
19 A Sits on the next one down.
20 D NWOSU: Whose is this?
21 D BELLAMY: Bishop somebody. Fourteenth century. I asked him if I could use his lid for chopping. He said nothing.
22 D NWOSU: Polite of him.
23 D BELLAMY: They always are.
24 A ¶ He tastes the stew from the paddle.
25 A Frowns.
26 A Reaches for a tin of salt.
27 D NWOSU: What's in it tonight?
28 D BELLAMY: Barley. Onion. Something that was a rabbit when I met it.
29 D NWOSU: Where'd you meet it?
30 D BELLAMY: Behind the bell tower. Poor thing ran into my boot.
31 A ¶ She laughs, once, surprised at herself.
32 A He smiles into the pot.
33 D NWOSU (quietly): It's quiet down here.
34 D BELLAMY: It's a crypt, Lieutenant.
35 D NWOSU: I mean the guns.
36 D BELLAMY: Ah.
37 A ¶ He listens.
* 38 A Far above, through yards of stone, the faint thud of artillery.
* 39 A Distant.
* 40 A Regular as a clock.
41 D BELLAMY [CONT'D]: That's the new quiet. You get used to it.
42 D NWOSU: Do you?
43 D BELLAMY: No. But you get good at pretending.
44 A ¶ He ladles stew into a tin bowl and hands it to her.
45 A She wraps both hands around it.
46 D NWOSU: Thank you.
47 D BELLAMY: Eat before it gets cold. Or before it gets interesting.
48 A ¶ She tries it.
49 A Chews.
50 A Considers.
51 D NWOSU: It tastes like rabbit.
52 D BELLAMY: Told you.
53 D NWOSU: It's good, Sergeant.
54 D BELLAMY: It's hot. That's the whole recipe.
55 A ¶ She eats.
56 A He stirs.
* 57 A The fire pops.
* 58 A A drip of water falls from the vault into a puddle, patient and slow.
59 D NWOSU: Do you write home?
60 D BELLAMY: My wife. Every Sunday.
61 D NWOSU: What do you tell her?
62 D BELLAMY: That the food is terrible and the company is worse.
63 D NWOSU: Is that true?
64 D BELLAMY: The food, yes.
65 A ¶ A small smile from her.
66 A She sets down the bowl and draws a letter from her breast pocket.
67 A Folds and unfolds it.
68 D NWOSU: I have one I can't finish.
69 D BELLAMY: To whom?
70 D NWOSU: My brother.
71 D BELLAMY: What won't it say?
72 D NWOSU: That I'm scared.
73 D BELLAMY: Of what?
74 D NWOSU: Of being good at this.
75 A ¶ He sets down the paddle.
76 A Wipes his hands on the apron.
77 A Takes a long, careful look at her in the lantern light.
78 D BELLAMY: Then write that.
79 D NWOSU: He'd worry.
80 D BELLAMY: He's your brother. He's already worried.
81 A ¶ She smooths the letter against her knee.
82 A Takes a pencil stub from her pocket.
83 A Writes a line.
84 A Stops.
85 A Writes another.
86 D BELLAMY [CONT'D]: Good. Now more.
87 A ¶ She keeps writing.
88 A He returns to the pot.
* 89 A The fire murmurs.
* 90 A Above them, the guns go on, and below them, in their stone beds, the old bishops keep their counsel.
91 D NWOSU (not looking up): Sergeant.
92 D BELLAMY: Lieutenant.
93 D NWOSU: Thank you for the rabbit.
94 D BELLAMY: Thank the boot.
95 A ¶ She laughs again, quietly, pencil still moving.

### SCENE s00876 | EXT. ABANDONED SALT WORKS - EVAPORATION FLATS - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): TOBIAS WREN, ESPERANZA QUINTERO, LUKA
* 1 A ¶ A white country, flat to the edge of the sky.
* 2 A Shallow ponds, each a different shade of rose and bone, are cut by crumbling wooden sluice gates.
* 3 A The wind carries a taste of brine.
* 4 A At the far end, a long shed with a sagging tin roof, its door hanging off one hinge.
5 A ¶ TOBIAS WREN, 60s, kneels at a pond's edge, scooping salt crystals into a sack.
6 A Weathered as a fence post, his hat brim stiff with old sweat, his beard a pale yellow like old piano keys.
7 A His hands are cracked from decades of brine.
8 A He works without hurry.
9 A ¶ A figure approaches along the causeway.
10 A ESPERANZA QUINTERO, 30s, rides a grey mule, a rifle slung across her back and a canvas satchel on her hip.
11 A Dust-coloured coat.
12 A Black braid.
13 A She stops the mule a polite distance away.
14 D ESPERANZA: You Wren?
15 D TOBIAS: Depends who's asking.
16 D ESPERANZA: Esperanza Quintero. I bought the claim at the other end of the flats.
17 D TOBIAS: That's a lot of nothing to buy.
18 D ESPERANZA: It's cheap nothing.
19 A ¶ He almost smiles.
20 A Drops another handful of salt into the sack.
21 D TOBIAS: Water's bad on your side.
22 D ESPERANZA: I figured.
23 D TOBIAS: Good on mine. If you ask nicely.
24 A ¶ She slides down from the mule.
* 25 A Boots crunch on the crust.
26 A She looks across the flats, then at him.
27 D ESPERANZA: I'm asking.
28 A ¶ A boy emerges from the shed, barefoot, nine or ten, LUKA, thin as a rope and just as strong.
29 A He carries a bucket almost as big as his torso.
30 D LUKA: Grandpa, the pump's stuck again.
31 D TOBIAS: Then unstick it.
32 D LUKA: I tried.
33 D TOBIAS: Try harder.
34 A ¶ Luka notices Esperanza.
35 A Stares at the rifle.
36 A Stares at the mule.
37 D LUKA: Is that a real gun?
38 D ESPERANZA: It's a real mule.
39 D LUKA (grinning): Can I touch him?
40 D ESPERANZA: Her. Be gentle.
41 A ¶ He sets down the bucket and approaches the mule with both palms out, whispering.
* 42 A The mule allows it.
43 A Tobias watches the boy, then the woman, then the horizon.
44 D TOBIAS: Sit. There's coffee. It's terrible.
45 D ESPERANZA: I've had worse.
46 D TOBIAS: Not out here.
47 A ¶ She smiles, ties the mule to a post, and follows him toward the shed.
* 48 A Behind them the salt shines like a field of broken glass under the long low sun.

### SCENE s00888 | EXT. CORPORATE ROOFTOP - APIARY - MORNING
Detected names (may be incomplete or contain aliases): MARGOT FENWICK, OSKAR LINDGREN, PETRA IONESCU, NEW HIRE, KWAME
* 1 A ¶ Above the thirty-first floor of Halcyon Dynamics, a sea of glass towers glitters in the sun.
* 2 A Between the air-conditioning units and a ruined yoga mat, someone has set up six white beehives in a neat row.
* 3 A Bees drift in lazy loops, indifferent to the quarterly earnings.
4 A ¶ MARGOT FENWICK, 50s, Vice President of People Experience, glides across the gravel in a silk blouse and veil, as perfectly composed as a chess piece.
5 A She carries a clipboard in one hand and a smoking tin in the other.
6 A ¶ OSKAR LINDGREN, 40s, the company beekeeper, whose title on his badge is Chief Pollination Officer, adjusts a hive lid with a wooden tool.
7 A Tall, rumpled, a beard going silver at the edges.
8 A He moves slowly so the bees won't notice him.
9 A ¶ PETRA IONESCU, 30s, Facilities, stands at the roof door with a walkie-talkie, glancing at her watch.
10 A She wears hi-vis over a cardigan.
11 A ¶ A NEW HIRE, 20s, steps out onto the gravel in a brand-new suit still creased from its packaging, a lanyard around his neck and a reusable cup of oat latte in his hand.
12 A He squints at the hives and takes one hesitant step backward.
13 D MARGOT: Ah, there he is. Our new Vice Assistant of Synergy.
14 D NEW HIRE: Hi. I think there's a mistake. My badge says "Analyst."
15 D MARGOT: Titles are fluid at Halcyon.
16 D OSKAR (not looking up): Don't make sudden movements, son.
17 D NEW HIRE: What kind of movements are sudden?
18 D OSKAR: Most of them.
19 D PETRA (into the walkie-talkie): He's here. No, he's fine. Yes, I'll tell him.
20 D MARGOT: Petra, thank you. You may go.
21 D PETRA: I'd rather stay, actually.
22 D MARGOT: That was not a request.
23 A ¶ Petra glares at Margot, lowers the walkie-talkie, and takes a slow, deliberate seat on an overturned bucket.
24 D MARGOT [CONT'D] (to the New Hire): Today is your onboarding. At Halcyon we believe in rooting our people in something larger than themselves.
25 D NEW HIRE: Like bees?
26 D MARGOT: Like hives.
27 D OSKAR: Like stings, mostly.
28 A ¶ He hands the New Hire a veil.
29 A The young man puts it on, slightly crooked, the netting hanging in his eyes.
* 30 A A single bee lands on his shoulder.
31 A He freezes.
32 D NEW HIRE (whispering): Is it going to--
33 D OSKAR: It's just curious. Breathe out slowly.
34 A ¶ He does.
* 35 A The bee lifts off.
36 A Margot makes a note on the clipboard.
37 D MARGOT: You handle pressure well. I'll mention that in your file.
38 D NEW HIRE: I haven't actually got a file yet.
39 D MARGOT: Everyone has a file.
40 D PETRA (dry): Everyone has two.
41 A ¶ Margot ignores her.
42 A She approaches the nearest hive and lifts the lid with a flourish.
* 43 A A hum rises, soft and grave.
44 D MARGOT: This is the queen's chamber. You'll note the order. The discipline. The harmony of purpose. I like to think of our fifth-floor sales team in precisely this way.
45 D OSKAR: The sales team is not a queen.
46 D MARGOT: The sales team is a metaphor, Oskar.
47 D OSKAR: The sales team is a wasp's nest.
48 A ¶ Petra snorts.
49 A Margot closes the lid a little harder than she means to.
50 D NEW HIRE: Can I ask something?
51 D MARGOT: Please.
52 D NEW HIRE: Why bees?
* 53 A ¶ A beat.
54 A Margot looks at Oskar.
55 A Oskar looks at the sky.
56 A Petra studies her boots.
57 D OSKAR: Margot's husband kept bees.
58 D MARGOT: Oskar.
59 D OSKAR: He died in March. She had the hives lifted here from the farm.
60 D MARGOT (very still): That is private.
61 D OSKAR: It's rooftop. Nothing's private on a rooftop.
* 62 A ¶ For a moment, nobody speaks.
* 63 A The wind lifts the edge of Margot's veil.
64 A She smooths it with one hand, her fingers not quite steady.
65 D PETRA (gently): Margot, the VP call.
66 D MARGOT: Yes. Of course.
67 A ¶ She hands the clipboard to the New Hire without ceremony.
68 D MARGOT [CONT'D]: Kwame. Welcome to Halcyon.
69 D KWAME (startled): You know my name?
70 D MARGOT: I read your file.
71 D KWAME: I thought I didn't have one.
72 D MARGOT (a thin smile): Now you do.
73 A ¶ She sweeps toward the roof door, Petra a half-step behind her.
74 A At the threshold she pauses, one hand on the frame, and speaks without turning.
75 D MARGOT [CONT'D]: Oskar. Teach him everything.
76 D OSKAR: Everything about what?
77 D MARGOT: Everything he'll need.
78 A ¶ She goes.
* 79 A The door sighs shut.
80 A Kwame lifts the veil from his eyes and looks at Oskar, who has already turned back to the hives.
81 D KWAME: Is she always like that?
82 D OSKAR: No. Sometimes she's worse.
83 A ¶ He hands Kwame the smoker.
* 84 A It's warm and heavy, and a thin white thread curls from its spout.
85 D OSKAR [CONT'D]: Squeeze the bellows. Gently. Like you're asking a question.
86 A ¶ Kwame squeezes.
* 87 A The smoke drifts across the hive.
* 88 A The humming softens, lowers, and one by one the bees settle into the quiet.

### SCENE s00889 | INT. BOOKBINDER'S WORKSHOP - LISBON - EVENING
Detected names (may be incomplete or contain aliases): SOLEDAD IBARRA, ARCHIE MENDELSOHN, AUNT VELMA
* 1 A ¶ A narrow stone room under a vaulted ceiling.
* 2 A Presses, bone folders, spools of waxed linen.
* 3 A Every surface is stacked with half-finished volumes, their spines bare as ribs.
* 4 A A single window frames the red roofs of the Alfama and a tram rattling past.
5 A ¶ SOLEDAD IBARRA, 30s, in a leather apron, sits at the sewing frame with a needle in her hand, a loose braid down her back.
6 A Ink stains her fingertips.
7 A She is stitching a signature with practiced ease.
8 A ¶ ARCHIE MENDELSOHN, 30s, a tall American in a rain-spotted jacket, stands in the doorway holding a battered book against his chest like a rescued animal.
9 D SOLEDAD: You're late.
10 D ARCHIE: I got lost.
11 D SOLEDAD: You always get lost.
12 D ARCHIE: It's a very confusing city.
13 D SOLEDAD: It's a city with seven hills and one river. Even the pigeons find their way.
14 D ARCHIE: The pigeons live here.
15 D SOLEDAD: So do I. And I'm never late.
16 D ARCHIE: You're never anywhere else.
17 A ¶ She smiles despite herself, not looking up.
18 A He crosses to the workbench and sets the book down in front of her.
* 19 A Gently, as if it might bruise.
20 D ARCHIE [CONT'D]: That's the one.
21 D SOLEDAD (inspecting): Oh, Archie. What did you do to it?
22 D ARCHIE: I dropped it in a canal.
23 D SOLEDAD: In Venice.
24 D ARCHIE: In Venice.
25 D SOLEDAD: On purpose?
26 D ARCHIE: It jumped. I'm telling you, it jumped.
27 D SOLEDAD: Books don't jump.
28 D ARCHIE: This one has a lot of feelings.
29 A ¶ She opens the cover.
* 30 A The pages are warped and rippled, the ink bled into soft blue clouds.
31 A She runs a thumb along the gutter and lets out a slow breath.
32 D SOLEDAD: Whose is it?
33 D ARCHIE: My grandfather's. His diary.
34 D SOLEDAD: Then why are you giving it to me?
35 D ARCHIE: Because you're the best in Europe.
36 D SOLEDAD: Flattery.
37 D ARCHIE: Fact.
38 D SOLEDAD: It will take weeks.
39 D ARCHIE: I have weeks.
40 D SOLEDAD: You have a plane ticket.
41 D ARCHIE: I could lose the ticket.
42 D SOLEDAD: You could.
43 D ARCHIE: I could lose the whole plane.
44 D SOLEDAD (smiling): Archie.
45 D ARCHIE: Soledad.
* 46 A ¶ The workshop door bangs open.
47 A AUNT VELMA, 70s, a small woman in a patterned housecoat and bright orange slippers, sweeps in with a covered dish and a gust of cold air.
48 D AUNT VELMA: Soledad! You haven't eaten. I brought cod.
49 D SOLEDAD: Tia, I'm working.
50 D AUNT VELMA (to Archie): And who is this?
51 D ARCHIE: Archie Mendelsohn, ma'am. I'm a client.
52 D AUNT VELMA: A client who brings flowers?
53 A ¶ He looks down.
54 A He is, in fact, holding a very small bunch of wilted daisies in his left hand, crushed against the book.
55 A He lifts them with a helpless shrug.
56 D ARCHIE: They were fresh this morning.
57 D AUNT VELMA (to Soledad, delighted): He is a client who brings flowers.
58 D SOLEDAD: Tia.
59 D AUNT VELMA: I will leave the cod.
60 A ¶ She sets the dish on the nearest stack of paper, pats Archie's cheek once, and sweeps out.
* 61 A The door slams.
* 62 A The tram rattles by.
63 A Soledad and Archie look at each other across the ruined book.
64 D ARCHIE: She likes me.
65 D SOLEDAD: She likes everybody. She feeds the pigeons.
66 D ARCHIE: Do you?
67 D SOLEDAD: Do I what?
68 D ARCHIE: Like me.
69 A ¶ She picks up the daisies.
70 A Smooths one battered petal between thumb and finger.
71 D SOLEDAD: Come back on Tuesday. I will tell you what the book needs.
72 D ARCHIE: And the other thing?
73 D SOLEDAD (not looking up): The other thing takes longer.

### SCENE s00890 | INT. HOSPITAL SUBBASEMENT - LAUNDRY ROOM - NIGHT
Detected names (may be incomplete or contain aliases): EZEKIEL FAIRWEATHER, PADDY GALLAGHER
* 1 A ¶ A low, steam-choked cavern.
* 2 A Industrial washers thump like slow drums.
* 3 A Sheet-laden carts line the walls in ghostly rows.
* 4 A Pipes sweat overhead, and the tiled floor is slick with soap and condensation.
* 5 A A single fluorescent tube buzzes.
6 A ¶ DR. EZEKIEL FAIRWEATHER, 50s, a cardiothoracic surgeon, sits on an overturned laundry bin in rumpled blue scrubs, his tie shoved in his pocket.
7 A Grey stubble.
8 A Hands folded between his knees as if praying.
9 A He has not slept in thirty hours.
10 A He stares at the drain in the floor.
* 11 A ¶ The doors at the far end swing open and a gurney wheel squeals.
12 A PADDY GALLAGHER, 50s, the night porter, pushes a cart of towels down the aisle.
13 A Barrel-chested, flushed, a green cap pulled over a bald crown.
14 A He stops short at the sight of the doctor.
15 D PADDY: Jesus, Mary and Joseph. Doctor?
16 D EZEKIEL: Don't mind me.
17 D PADDY: You scared the life out of me.
18 D EZEKIEL: Sorry.
19 D PADDY: It's the wrong end of the building for you, sir. The surgeons have their own lounge.
20 D EZEKIEL: I know.
21 D PADDY: Then why--
22 D EZEKIEL: It's loud here.
23 A ¶ Paddy considers this.
24 A He parks the cart.
25 A Pulls a crumpled pack of cigarettes from his pocket, glances up at the smoke detector, and puts them back.
26 D PADDY: Bad one?
27 D EZEKIEL: Seven hours. We lost him on the table.
28 D PADDY: I'm sorry.
29 D EZEKIEL: He was thirty-one.
30 D PADDY: Ah, God.
31 D EZEKIEL: He had a daughter. She was in the waiting room, drawing a horse.
32 D PADDY: Did you tell her?
33 D EZEKIEL: His wife did. I just stood there.
* 34 A ¶ A washer ends its cycle with a shuddering groan.
* 35 A Steam breathes out of the vents.
36 A Paddy drags a second bin across the tile and lowers himself onto it with a grunt, so the two men sit knee to knee in the damp.
37 D PADDY: My brother went the same way. Heart.
38 D EZEKIEL: When?
39 D PADDY: Twenty years. The doctors were very kind.
40 D EZEKIEL: That doesn't help, does it?
41 D PADDY: Not on the day.
42 D EZEKIEL (speaking at once; speaking at once): PADDY What does, then? Time, I suppose.
43 A ¶ They both stop.
44 A The ghost of a smile crosses Paddy's face.
45 A Ezekiel laughs, one dry exhale through his nose, and rubs his eyes with the heels of his hands.
46 D PADDY [CONT'D]: You want a towel? They're warm.
47 D EZEKIEL: I'm not crying.
48 D PADDY: Never said you were. They're just warm.
49 A ¶ He passes a folded towel from the cart.
50 A Ezekiel takes it, presses it to his face, and holds it there much longer than a person needs to wipe off sweat.
51 A Paddy gazes politely at a washer.
* 52 A Time passes in the slow rhythm of the drums.
53 D EZEKIEL (muffled): Thank you.
54 D PADDY: Aye.
55 D EZEKIEL: Does it ever stop? The... carrying it?
56 D PADDY: I wouldn't know, Doctor. I only carry the linen.
57 D EZEKIEL (lowering the towel): Then you're luckier than I am.
58 D PADDY: Maybe. Or I just do the washing so you can do the rest.
59 A ¶ Ezekiel looks at him properly for the first time.
60 A Paddy meets the look without flinching, wide-faced and unhurried.
61 D EZEKIEL: What's your name?
62 D PADDY: Paddy. Paddy Gallagher.
63 D EZEKIEL: Ezekiel.
64 D PADDY: I know. It's on the plaque in the lobby. The one with the donors.
65 D EZEKIEL: I never donated.
66 D PADDY: Your name's on it anyway.
67 A ¶ The ghost of a smile returns.
68 A Ezekiel stands.
69 A He folds the towel into a perfect square and sets it back on the cart, then stands for a moment with his hand on the metal rail.
70 D EZEKIEL: I should go up.
71 D PADDY: They'll keep.
72 D EZEKIEL: Not all of them.
73 D PADDY: No. Not all.
74 A ¶ Ezekiel nods.
75 A He straightens his scrubs, pulls his tie from his pocket, and puts it back again.
76 A At the door he pauses.
77 D EZEKIEL: Paddy.
78 D PADDY: Doctor.
79 D EZEKIEL: Thank you for the towel.
80 D PADDY: Anytime. It's what I'm for.
* 81 A ¶ The door sighs shut behind the surgeon.
82 A Paddy sits alone in the thrum of the machines.
83 A After a moment he takes out the cigarettes, looks at the smoke detector again, and slowly, decidedly, puts them back.

### SCENE s00891 | INT. BELL TOWER - SNIPER NEST - DAWN
Detected names (may be incomplete or contain aliases): MOSES TEMBO, FERGAL ROURKE, ANTON VASQUEZ
* 1 A ¶ A stone shaft, open to the weather.
* 2 A Cracked bell hangs silent overhead, green with age.
* 3 A Pigeon droppings crust the floor.
* 4 A Through the louvres, a ruined village burns in slow grey ribbons.
5 A ¶ SGT. MOSES TEMBO, 40s, huge, patient, lies flat behind a rifle.
6 A Scar across his eyebrow.
7 A Every breath measured.
8 A ¶ PVT.
9 A FERGAL ROURKE, 19, freckled, trembling, crouches at the rim of the stairwell with a field phone.
10 A ¶ CAPT. ANTON VASQUEZ, 30s, in a dented helmet, studies a map pinned to the wall with a bayonet.
11 D ROURKE: Nothing on the line.
12 D TEMBO: Keep trying.
13 D VASQUEZ: They've cut it.
14 D ROURKE: Then who do I call?
15 D VASQUEZ: Nobody.
16 D ROURKE (overlapping): We're stuck up here!
17 D TEMBO (overlapping): Shut your mouth, boy.
18 D VASQUEZ (overlapping, to both): Quiet. Both of you.
* 19 A ¶ Silence.
* 20 A Pigeons shift on the beams.
21 A Tembo's eye stays glued to the scope.
22 D TEMBO: Movement. Left of the well.
23 A ¶ Vasquez drops beside him.
24 A He raises binoculars.
25 A He holds them very still.
26 D VASQUEZ: How many?
27 D TEMBO: Three. Maybe four.
28 A ¶ Rourke drops the phone.
* 29 A It clatters.
30 A All three freeze.
31 D ROURKE (whispering): Sorry.
32 D VASQUEZ: Pick it up. Slowly.
33 A ¶ He does.
* 34 A Below, a boot scrapes stone.
* 35 A Closer than any of them wants.
36 D TEMBO: They're in the church.
37 D VASQUEZ: Then they're under us.
38 A ¶ Tembo shifts the rifle.
39 A He exhales.
* 40 A The great bell shivers, ever so slightly, as if remembering.
41 D ROURKE: Sarge--
42 D TEMBO: Not now.
* 43 A ¶ Wood creaks on the stair.
44 A Rourke raises his rifle with both hands.
45 A The barrel wavers.
46 A Vasquez rests a hand on his shoulder.
47 D VASQUEZ: Easy, son.
* 48 A ¶ Light from the stairwell.
49 A Then a shape in the light.
50 A ¶ Tembo fires.
