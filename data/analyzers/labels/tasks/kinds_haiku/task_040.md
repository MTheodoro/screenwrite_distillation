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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0140.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01326 | INT. TIDE-CLOCK TOWER - INSIDE A WHALE SKELETON - DUSK
Detected names (may be incomplete or contain aliases): BRAMWELL TOLLIVER, LADY SERAPHINE VANE, PIP
* 1 A ¶ A cathedral of bone.
* 2 A Ribs arch overhead like the hull of an overturned ship, strung with lanterns and rope ladders.
* 3 A At the center, a vast brass clock whose pendulum is a swinging glass bell filled with seawater.
* 4 A Each tick sloshes a silver tide across the floor.
5 A ¶ BRAMWELL TOLLIVER, 70s, tiny and bent, in a coat patched with sailcloth, oils a gear with a feather.
6 A A brass monocle sits on his nose, one lens fogged.
* 7 A ¶ The great doors boom open.
8 A LADY SERAPHINE VANE, 40s, strides in, sea-green cloak dragging a wake of damp, silver rings on every finger.
9 A Behind her trots PIP, a clockwork heron, tall as a child, copper beak clicking.
10 D BRAMWELL: You're late, Lady Vane. The tide has turned twice.
11 D SERAPHINE: The tide turns when I command it, Bramwell.
12 D BRAMWELL: Not in my tower.
13 A ¶ Pip tips her head and clicks.
14 A Seraphine sets a gloved hand on the heron's neck, and the clicking softens.
15 D SERAPHINE: Pip, quiet. He is an old man and he is frightened.
16 D BRAMWELL: I am not frightened. I am furious.
17 D PIP (a thin, whistling voice): Furious is frightened wearing boots.
18 A ¶ Bramwell laughs despite himself, a dry bark.
* 19 A The pendulum swings.
* 20 A A silver tide washes over their feet and recedes.
21 D SERAPHINE: I have come to take the Moonweight, Bramwell.
22 D BRAMWELL: The Moonweight holds the tide in its place.
23 D SERAPHINE: The tide has held long enough. The sea is tired of being told when to rise.
24 D BRAMWELL: And when it rises with no hand upon it? What then, Lady?
25 D SERAPHINE: Then it rises. And we float.
26 A ¶ Bramwell lays the feather down on the gear.
27 A He crosses to a small iron door in a rib, thumbs a latch, and takes out a lead-grey disc the size of a dinner plate.
* 28 A It hums.
29 D BRAMWELL: Forty years I tended this. My wife is buried under that floor.
30 D SERAPHINE: I know.
31 D BRAMWELL: You know. And still you ask.
32 D SERAPHINE: I do not ask, Bramwell. I came out of courtesy.
33 D PIP: Courtesy is a polite word for a knife.
34 D SERAPHINE: Pip.
35 D PIP: I only quote.
36 A ¶ Bramwell weighs the disc in both hands.
* 37 A The pendulum bell slows.
* 38 A A lantern gutters.
* 39 A Somewhere high in the ribs, a gull cries.
40 D BRAMWELL: You were a girl when you first came up those stairs. Do you remember what you asked me?
41 D SERAPHINE: I asked if the whale was still alive.
42 D BRAMWELL: And I said?
43 D SERAPHINE: That it was only sleeping.
44 D BRAMWELL: Was I lying?
45 D SERAPHINE (softly): No.
46 A ¶ She holds out both hands.
47 A Bramwell looks at the Moonweight, then at her, and his shoulders drop.
48 D BRAMWELL: Take it. Let the sea wake what it must.
49 A ¶ Seraphine receives the disc.
* 50 A Its hum deepens.
* 51 A The silver tide climbs slowly up the ribs, quieter now, and the great bell comes to rest.
52 D PIP: Is that the last tick?
53 D BRAMWELL: For tonight, small one. For tonight.
54 A ¶ Seraphine bows her head.
* 55 A The lanterns dim one by one.

### SCENE s01327 | INT. FUNICULAR CAR, MID-SLOPE - NIGHT
Detected names (may be incomplete or contain aliases): NADIA VOSKUIJLEN, SPOON, TEMBO
* 1 A ¶ A wooden cabin the size of a tram, suspended on a steel cable over a pine-black ravine.
* 2 A At the summit, the lights of an alpine observatory glow like a lit match.
* 3 A At the bottom, a sleeping village.
* 4 A In the middle, the car has stopped.
5 A ¶ NADIA VOSKUIJLEN, 30s, sits upright on the slatted bench in a stolen maintenance coverall two sizes too large.
6 A Dark hair scraped into a bun.
7 A Eyes that do not blink often.
* 8 A A hard case rests between her boots.
9 A ¶ Across from her, "SPOON" TEMBO, 50s, round-faced, soft-spoken, a retired watchmaker with a splitting grin and a spoon-handle toothpick he rolls between his teeth.
10 A He wears the same coverall, neatly pressed.
* 11 A ¶ The car sways.
* 12 A The cable creaks.
* 13 A Outside, a lonely crow lifts off the rail.
14 D SPOON: Nadia. It stopped.
15 D NADIA: I felt it.
16 D SPOON: It is not supposed to stop.
17 D NADIA: Nothing is supposed to stop, Spoon. Everything does.
18 A ¶ He leans to the window.
* 19 A Far above, a floodlight sweeps along the cable and draws near, a white bar crossing the snow.
20 D NADIA [CONT'D]: Get down.
21 A ¶ Spoon drops to the floor.
22 A She slides off the bench beside him and pulls the case in against her ribs.
* 23 A The light washes the cabin white, holds for three terrible seconds, and moves on.
24 A ¶ Neither breathes.
* 25 A The cable creaks again.
* 26 A Then a hollow clank somewhere above, and the car lurches one foot downhill and stops.
27 D SPOON (whisper): They have cut the power.
28 D NADIA: They haven't. They don't know we're here.
29 D SPOON: Then why did it stop?
30 D NADIA: Because Eddie was supposed to hold the relay and Eddie is a coward.
31 D SPOON: Eddie is a nice young man.
32 D NADIA: Eddie is a nice young man who has probably gone home.
* 33 A ¶ A relay clunks in the machinery overhead, and a distant motor begins to cycle, a slow metal countdown.
34 A Nadia's lips part.
35 A She mouths a number at Spoon: two minutes.
36 A Spoon nods slowly, his toothpick stilled.
37 A They crouch in the dark, listening to the wind comb the pines.
38 D SPOON (barely audible): Nadia. What if the vault is empty?
39 D NADIA: Then we've climbed a mountain for nothing.
40 D SPOON: I like nothing. I have a great deal of it at home.
41 A ¶ She almost laughs.
42 A She presses the back of her hand to her mouth.
* 43 A ¶ The brake releases with a long sigh.
* 44 A The cable tightens.
* 45 A The car begins to glide uphill again, smooth as milk, and the tension in the cabin goes out of both of them like air from a bellows.
46 A Spoon sits back up on the bench.
47 A Nadia slumps against the wall.
48 D SPOON [CONT'D]: My heart, I think it left in the last minute.
49 D NADIA: Mine's in the case.
50 A ¶ She taps the lid.
51 A He chuckles, a warm sound in a cold box.
* 52 A ¶ The observatory grows larger in the window.
* 53 A Its dome opens like an eye.
54 D NADIA [CONT'D]: When we step out, you're not Spoon anymore.
55 D SPOON: No?
56 D NADIA: You're Doctor Aurelio Stahl, from the Geneva office.
57 D SPOON (a deep, pompous voice): Doctor Stahl, at your service.
58 D NADIA: Lower.
59 D SPOON (lower still): Doctor Stahl, at your very humble service.
60 A ¶ She shakes her head.
* 61 A The car glides into the station.
* 62 A Doors hiss open on yellow light and the smell of machine oil.
63 D NADIA: Shoulders back, Doctor.
64 D SPOON: Spoons are always bent, my dear. But I will try.
65 A ¶ They step out together into the light.

### SCENE s01328 | INT. VELODROME INFIELD - EVENING
Detected names (may be incomplete or contain aliases): MO, DALY, TAMSIN ROYCE, YUKI MORIMOTO
* 1 A ¶ The wooden bowl rises steeply on every side.
* 2 A A string of fluorescent tubes buzzes overhead.
* 3 A In the infield, three women huddle by a rack of carbon bikes.
4 A ¶ MAUREEN "MO" DALY, 50s, stopwatch lanyard, windbreaker faded to pink, stands with a whistle between her teeth.
5 A TAMSIN ROYCE, 20s, long braid, helmet buckled tight, grips a bike by the saddle.
6 A YUKI MORIMOTO, 20s, shorter, quicker, shakes out her legs one at a time.
7 D MO (to everyone): Listen up. Relay swap is at the red line. Not before it, not after. At the line.
8 A ¶ Tamsin nods.
9 A Yuki doesn't.
10 D MO [CONT'D] (to Yuki): You hear me, Morimoto?
11 D YUKI: I hear you.
12 D MO: Then say it.
13 D YUKI: Red line.
14 A ¶ Mo pulls the whistle out.
15 A She turns to the stopwatch and mutters at it.
16 D MO (to herself): Please, please just once, don't lie to me.
* 17 A ¶ The whistle blows.
18 A Tamsin swings a leg over and pushes off, wheels humming on the boards.
19 A Yuki clips in and rolls to the start of the swap zone.
20 D TAMSIN (shouting as she passes): Ready!
21 D YUKI: Go!
22 A ¶ Tamsin sprints a full lap, the bowl a blur behind her.
23 A Yuki pedals up the banking, eyes on her partner's back wheel.
24 A Mo clicks the watch, murmuring.
25 D MO (to herself): Come on, come on.
* 26 A ¶ The swap.
27 A Tamsin's hand lands on Yuki's hip and shoves.
28 A Yuki surges.
* 29 A For three pedal strokes everything is perfect.
30 A ¶ Then Tamsin's rear wheel clips Yuki's front.
* 31 A A shriek of carbon.
32 A The bikes tangle and both riders go down, sliding along the boards in a spray of splinters.
33 D MO [CONT'D] (to everyone, a roar): Stop! Everybody stop!
* 34 A ¶ Silence except for a wheel spinning.
35 A Tamsin sits up first, rubbing her hip.
36 A Yuki lifts her head, helmet scuffed.
37 D YUKI (laughing): I swapped on the line.
38 D TAMSIN: You swapped on my foot.
39 D MO (to Yuki): You okay?
40 D YUKI: She hit me.
41 D MO (to Tamsin): You?
42 D TAMSIN: Fine. Mostly.
43 A ¶ Mo lets out a breath and sits on the boards.
44 A She stares at the stopwatch.
45 D MO (to herself): Best time of the season. Unbelievable.

### SCENE s01329 | INT. ABANDONED PLANETARIUM, LOBBY - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR NKECHI ADEYEMI
* 1 A ¶ A dead ticket booth.
* 2 A A mural of the solar system, flaking.
* 3 A On the counter, an old answering machine with its red light blinking.
* 4 A ¶ The machine clicks.
* 5 A A tape whirs.
6 D NKECHI [V.O.] (recorded, level): If you are hearing this, the dome is unlocked. Come alone. Do not touch the projector.
* 7 A ¶ The tape ends.
* 8 A Silence.
* 9 A A fluorescent tube ticks.
* 10 A Then the heavy front door scrapes open.
11 A ¶ INSPECTOR NKECHI ADEYEMI, 40s, crosses the threshold in a dark raincoat, flashlight held low, badge clipped to her belt.
12 A Short hair.
13 A A face that wastes no expression.
14 A ¶ She stops at the counter.
15 A Looks at the machine.
16 A Presses play.
17 D NKECHI [V.O.] (recorded, level): If you are hearing this, the dome is unlocked. Come alone. Do not touch the projector.
18 A ¶ She presses stop, pockets the tape, and trains her flashlight on the doors of the dome.
19 D NKECHI (to herself): I never left this message.
20 A ¶ She pushes open the dome door.
* 21 A The beam falls across rows of empty seats.

### SCENE s01330 | INT. STALLED ICE CREAM TRUCK, BACK COMPARTMENT - AFTERNOON
Detected names (may be incomplete or contain aliases): GRAN ODALYS, RUPERT, BEANS
* 1 A ¶ A hot steel box lined with freezer lids.
* 2 A A melting puddle on the floor.
* 3 A Two stools bolted to the wall.
4 A ¶ GRAN ODALYS, 70s, big sunglasses and a flowered housedress, sits with her purse on her lap.
5 A RUPERT, 8, called BEANS, swings his legs and licks a cone gone soft.
6 D GRAN ODALYS: Beans, I told you not to touch the dials.
7 D BEANS: I only touched one.
8 D GRAN ODALYS: That's how trucks stop, baby.
9 D BEANS: Gran, the truck stopped before I touched it.
10 D GRAN ODALYS: Don't be smart with me. Your mother is smart with me enough for the whole family.
11 D BEANS: Are we gonna melt?
12 D GRAN ODALYS: We are going to wait. Mr. Delacroix is fetching a wrench.
13 D BEANS: Mr. Delacroix drives the truck and he doesn't have a wrench?
14 D GRAN ODALYS: Mr. Delacroix has many wrenches. He has lost them.
15 D BEANS: That's dumb.
16 D GRAN ODALYS: Say that to him and you walk home.
17 D BEANS: It's eleven miles.
18 D GRAN ODALYS: Then be nice.
19 D BEANS: Gran, can I tell you something?
20 D GRAN ODALYS: Always.
21 D BEANS: I didn't get the part in the play.
22 D GRAN ODALYS: Oh, Beans. Come here.
23 D BEANS: I'm not crying.
24 D GRAN ODALYS: I know you're not. I only want to hold something sticky.
25 D BEANS: I got to be the tree.
26 D GRAN ODALYS: A tree is an important part.
27 D BEANS: Trees don't talk.
28 D GRAN ODALYS: That's their secret. Everyone else is too busy talking to notice who's holding the stage up.
29 D BEANS: You're making that up.
30 D GRAN ODALYS: I'm seventy-six, baby. I'm allowed.
31 D BEANS: Okay. I'll be the best tree.
32 D GRAN ODALYS: That's my Beans.
33 D BEANS: Gran?
34 D GRAN ODALYS: Mm?
35 D BEANS: Your purse is dripping.
36 D GRAN ODALYS: Lord have mercy. Who put the pistachio in my purse?
37 D BEANS (giggling): You did, Gran!

### SCENE s01331 | INT. HOUSEBOAT GALLEY - NIGHT
Detected names (may be incomplete or contain aliases): ISADORA, CALLUM, PRUDENCE, WENDELL
* 1 A ¶ Cramped.
* 2 A Warm.
* 3 A A table set for four, lamp swaying on its chain.
* 4 A Rain ticks on the portholes.
5 A ¶ ISADORA, 30s, serves a stew.
6 A Her brother CALLUM, 30s, lopes in sock feet, loose and smiling.
7 A Their mother PRUDENCE, 60s, sits ramrod straight at the head.
8 A Her husband-in-law WENDELL, 60s, quiet, folds a napkin into thirds.
9 A ¶ They eat.
* 10 A Spoons clink.
11 A Prudence compliments the stew.
12 A Callum compliments Prudence.
13 A Wendell compliments the weather.
14 D CALLUM: Good rain.
15 D PRUDENCE: It keeps the river honest.
16 D WENDELL: Pass the bread, Callum.
17 A ¶ Callum passes it.
18 A Isadora refills a glass.
19 A Her hand is steady.
20 A She pours slow.
21 D ISADORA: Mama, I've been meaning to ask.
22 D PRUDENCE: Mm.
23 D CALLUM: How's the boat's engine, Wendell?
24 D WENDELL: Runs.
25 D ISADORA: Mama, about the deed.
26 D PRUDENCE: Not at supper.
27 D CALLUM: Dora, leave it.
28 D ISADORA: She sold it, didn't she.
29 D WENDELL: Isadora, sit down.
30 D ISADORA: I am sitting.
31 D PRUDENCE: I sold the lot. Not the boat.
32 D CALLUM: You what?
33 D PRUDENCE: It was mine to sell.
34 D ISADORA (over her): It was Daddy's.
35 D WENDELL (over Isadora): It was never Leland's.
36 D CALLUM: Wait. Wait. Who bought it?
37 D PRUDENCE: Wendell did.
* 38 A ¶ Silence.
* 39 A The lamp sways.
40 A He sets the napkin by his plate.
41 A He does not look at either of them.
42 A She picks up her glass and drinks the whole thing.
43 A He stands, goes to the porthole, and watches the rain.
44 D ISADORA: Say something, Callum.
45 D CALLUM: I'm having more stew.

### SCENE s01332 | INT. FIELD KITCHEN IN A RUINED OPERA HOUSE - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): CAPTAIN ANNELIES DE VRIES, BEL, CORPORAL EZRA PRYCE, PRIVATE LUCIEN BEAUMONT, SUNDARAM, WRÓBEL
* 1 A ¶ Plaster cherubs on the ceiling, dust on the velvet seats.
* 2 A In the orchestra pit, a canvas-covered stove ticks and hisses.
* 3 A A gaping hole in the roof lets a shaft of watery sunlight fall onto the stage, where a dozen mess tins steam in a row.
4 A ¶ CAPTAIN ANNELIES DE VRIES, 40s, reading glasses pushed up into gray-blond hair, leans on a conductor's stand with a ledger.
5 A SERGEANT IGNACY WRÓBEL, 50s, thick mustache, stirs a vat of barley soup with an oar-length spoon.
6 A CORPORAL EZRA PRYCE, 20s, peels potatoes on the lip of the stage with excruciating care.
7 A PRIVATE LUCIEN BEAUMONT, 19, sits in the first row with a rifle across his knees and a tin of cigarettes he is not allowed to open.
8 A PRIVATE "DOC" SUNDARAM, 30s, a medic with a faded red cross on his sleeve, picks his way down the aisle holding a crate of tinned peaches.
* 9 A ¶ The distant guns thud, soft as a bass drum in another building.
* 10 A Nobody reacts.
11 D DE VRIES (to the room): Mess in ten minutes. Tins out, men. Boots off the seats.
12 A ¶ Beaumont lowers his boots.
13 A Pryce nods without looking up.
14 A Wróbel taps the spoon on the rim of the vat, the rhythm of a conductor calling an overture.
15 D WRÓBEL (to Pryce): Thinner, Corporal. That peel is thick enough to roof a barn.
16 D PRYCE: Sergeant, the potatoes are rotten.
17 D WRÓBEL: Then peel the rotten out of them.
18 A ¶ Doc Sundaram sets the crate on the stage, pries off a lid with his thumbnail, lifts a peach out, and sniffs it.
19 A He glances at the captain, shrugs, and eats a piece with his fingers while Beaumont watches with open longing and Pryce holds out a hand until Doc drops a slice into it, and the sergeant pretends not to see any of it, stirring a little harder.
20 D SUNDARAM (muttering): Best thing I've eaten since Naples.
21 D DE VRIES: Doc, you'll share that with the ward.
22 D SUNDARAM: Always, Captain.
23 A ¶ She makes a mark in her ledger.
* 24 A A flake of plaster drifts down from the ceiling and lands on the page.
25 A She blows it away.
26 D BEAUMONT: Captain, is it true there's a piano under the stage?
27 D DE VRIES: There is.
28 D BEAUMONT: Does anyone play?
29 D DE VRIES: Not since the third.
30 D WRÓBEL (to the soup): I played in Kraków once. Badly.
31 D PRYCE: You, Sergeant?
32 D WRÓBEL: Everyone plays badly in Kraków. It is the national style.
33 A ¶ Pryce grins into his peel.
34 A Beaumont laughs, then covers his mouth as if it were illegal.
* 35 A Somewhere far away a shell lands, long and low.
* 36 A The chandelier overhead shivers, then stills.
37 D DE VRIES (to the room): Steady. That was ours.
38 D SUNDARAM (muttering): Always theirs when it's close.
39 D WRÓBEL: Tins! Line up. If you can't hold a tin, hold a spoon.
40 A ¶ They shuffle onto the stage, one after another, and form a ragged line in the weak sun.
41 A Wróbel ladles.
* 42 A Steam rises from each tin into the beam of light, and for a moment the whole ruined theater looks like a painting of a feast.
43 D PRYCE (quietly): Captain, what do we do when it's over?
44 D DE VRIES: Eat.
45 D PRYCE: And after that?
46 D DE VRIES: After that, Corporal, we peel more potatoes.

### SCENE s01333 | EXT. LIFEBOAT, OPEN SEA - DAWN
Detected names (may be incomplete or contain aliases): CAPTAIN HESS, YOUNG PETER, ADEBAYO, COOK, DMITRI, LENKA, TOBIAS
1 A ¶ Six figures crowd a seven-man boat.
* 2 A Grey swell.
* 3 A No land.
* 4 A A water jug sits empty at the center thwart.
5 A ¶ CAPTAIN HESS, 50s, scorched face, holds the tiller.
6 A YOUNG PETER, 15, bails with a tin cup.
7 A MRS. ADEBAYO, 60s, clutches a sodden prayer shawl.
8 A THE COOK, DMITRI, 40s, rows alone on the left oar.
9 A LENKA, 20s, lies curled in the bow with a bandaged leg.
10 A And TOBIAS, 30s, sits with his hands over his face.
11 A ¶ Dmitri pulls, the oar bows and cracks, and Hess grabs the tiller as Peter lunges for the cup, Mrs. Adebayo shifts to steady Lenka, and Tobias lifts his head.
12 D HESS: Easy, Dmitri. We lose that oar, we lose the day.
13 D DMITRI: We lost the day last night, Captain.
14 D MRS. ADEBAYO: Peter, give me the cup. You'll wear your arm off.
15 D PETER: I'm fine, Mrs. Adebayo.
16 D TOBIAS: Is that smoke, Lenka? Do you see it?
17 D LENKA: It's cloud.
18 D TOBIAS: It looks like smoke.
19 D LENKA: Then I'm sorry, Tobias.
20 D HESS: Nobody drinks seawater. Nobody.
21 D DMITRI: Captain, nobody did.
22 D HESS: Then we're alive, aren't we?
* 23 A ¶ Silence.
* 24 A The swell lifts the boat and sets it down.

### SCENE s01334 | INT. TELEGRAPH RELAY STATION, RICE-PADDY DIKE - NIGHT
Detected names (may be incomplete or contain aliases): LIEUTENANT KOJI NAKAGAWA, MWANGI, LOCAL WOMAN, MAI LIEN
* 1 A ¶ A mud-brick hut on stilts.
* 2 A Lantern.
* 3 A Wires leading out the window into the dark.
* 4 A Frogs outside.
5 A ¶ LIEUTENANT KOJI NAKAGAWA, 30s, sits at the key with a headset and a pencil behind his ear.
6 A Corporal Obuya MWANGI, 20s, squats by the door with a carbine.
7 A An old LOCAL WOMAN, MAI LIEN, 60s, sets down a pot of tea at the table and steps back into the shadows.
8 A ¶ He taps a message.
* 9 A The sounder clatters back.
10 A He writes it down.
11 A ¶ Mwangi watches the woman.
12 A She watches the floor.
13 A The lieutenant tears the page off the pad and folds it into his breast pocket.
14 D KOJI: Corporal. Tea.
15 D MWANGI: Sir.
16 A ¶ He pours two cups.
17 A He sets one in front of the lieutenant and keeps the other, cold, in his hand.
18 A He does not drink.
19 A The woman looks at the cup, then at the door, then away.
20 D KOJI (without turning): Ask her how far the next village is.
21 D MWANGI: She doesn't speak English, sir.
22 D KOJI: Ask anyway.
23 A ¶ Mwangi turns, mouths a few halting words in her language.
24 A She answers with two fingers, then three, then folds her hands.
25 A He looks back at the lieutenant.
26 D MWANGI: Two hours. Maybe three.
27 D KOJI: Thank you.
28 A ¶ He taps again.
* 29 A The sounder answers.
30 A He writes.
* 31 A Outside, the frogs stop all at once.
32 A Mwangi's thumb finds the safety on the carbine.
33 A The woman's fingers find the rim of the teapot and rest there, perfectly still.
34 D KOJI [CONT'D] (very quietly): Corporal.
35 D MWANGI: I hear it, sir.
36 D KOJI: Finish your tea.
37 A ¶ Mwangi lifts the cup and drinks it to the bottom.
38 A Koji lays down the pencil.
* 39 A The lantern flame leans, leans, and steadies.

### SCENE s01335 | EXT. ULTRAMARATHON AID STATION, MOUNTAIN PASS - NIGHT
Detected names (may be incomplete or contain aliases): BERNARD OYELARAN, SIPHO DLAMINI, DISPATCH
* 1 A ¶ A folding table under a tarp.
* 2 A Headlamps bob in the dark.
* 3 A A thermos steams.
* 4 A A radio sits on a camp chair, its antenna taped to a tent pole.
5 A ¶ BERNARD OYELARAN, 60s, volunteer, parka zipped to the chin, fills paper cups with broth.
6 A He hums.
7 A ¶ SIPHO DLAMINI, 30s, jogs into the circle of light in a reflective vest, number 112 pinned to his shirt.
8 A He is breathing easily.
9 A He stops at the table and takes a cup.
10 D BERNARD: Evening, runner. How are the legs?
11 D SIPHO: Honestly? Perfect.
12 D BERNARD: That's the broth. The broth cures everything.
13 D SIPHO: It's a good broth.
14 D BERNARD: Name and bib?
15 D SIPHO: Sipho Dlamini, one-twelve.
16 A ¶ Bernard checks his clipboard.
17 A He frowns.
18 A Then smiles, and ticks a box.
19 D BERNARD: Got you. You're fourth.
20 D SIPHO: Fourth.
21 D BERNARD: Eight minutes behind the leader.
22 D SIPHO: I'll catch her.
* 23 A ¶ The radio crackles.
24 A Both men glance at it.
25 D DISPATCH [O.S.] (a woman's voice, crisp): Station Nine, this is Control. Come in, please.
26 A ¶ Bernard picks up the handset.
27 D BERNARD: Control, Station Nine. Go ahead.
28 D DISPATCH [O.S.]: Bernard, I'm showing runner one-twelve on the shuttle manifest at mile thirty-one. Do you have him?
29 A ¶ Bernard looks at Sipho.
30 A Sipho finishes his broth.
31 A He sets the cup down, gently, as if putting down a gift.
32 D BERNARD (into radio): Control, say again?
33 D DISPATCH [O.S.]: One-twelve took the shuttle from thirty-one to thirty-eight. He's flagged for disqualification. Do you copy?
34 A ¶ Bernard lowers the handset.
* 35 A The wind pulls at the tarp.
36 D SIPHO: It was cold.
37 D BERNARD: Son.
38 D SIPHO: My knee went.
39 D BERNARD: Your knee went in the car?
40 A ¶ Sipho laughs without humor.
41 A He unpins the number from his shirt and puts it on the table.
42 A Then he reaches for a second cup of broth.
43 D SIPHO: May I?
44 D BERNARD: Take it.

### SCENE s01336 | EXT. FROZEN WATERFALL BRIDGE - DAWN
Detected names (may be incomplete or contain aliases): SIR ALARIC VENN, BRYNJOLF
* 1 A ¶ A bridge of ice spans a gorge where a waterfall hung and froze mid-fall.
* 2 A Blue light from within the ice.
* 3 A A thousand-foot drop on either side.
4 A ¶ SIR ALARIC VENN, 40s, silver cuirass, cloak crusted with frost, edges out from the south bank.
5 A At the north end stands BRYNJOLF, 40s, bear-furred, axe on his shoulder, beard threaded with icicles.
6 A ¶ They meet in the middle.
7 A Both stop.
8 D ALARIC: Brynjolf.
9 D BRYNJOLF: Alaric.
10 D ALARIC: Cold morning for a duel.
11 D BRYNJOLF: Cold men fight best.
12 D ALARIC: You came alone.
13 D BRYNJOLF: So did you.
* 14 A ¶ A silence.
* 15 A Beneath them, the ice groans, a long deep song.
16 A Neither flinches.
17 D ALARIC: I'd like to cross.
18 D BRYNJOLF: I'd like the same.
19 D ALARIC: Then you step back.
20 D BRYNJOLF (at the same time): Then you step aside.
21 A ¶ They both stop.
22 A Both smile, thinly.
23 A Alaric tilts his head.
24 A Brynjolf mirrors it.
25 D BRYNJOLF [CONT'D] (at the same time): We might freeze here.
26 D ALARIC (at the same time): We might both freeze.
27 A ¶ Brynjolf laughs, short and sharp.
28 A He lowers the axe.
29 A Alaric lowers his hand from the sword hilt.
* 30 A A crack travels beneath their feet.
31 A ¶ They freeze.
* 32 A The crack runs between them, glittering, and stops.
33 A They look down, then at each other.
34 D ALARIC [CONT'D]: That was not me.
35 D BRYNJOLF: It was not me.
36 D ALARIC: Then who?
* 37 A ¶ Above Alaric, a pillar of ice breaks loose from the cliff.
38 A Brynjolf sees it first.
39 A He lunges.
40 A He pulls Alaric down.
* 41 A The pillar shatters on the bridge where Alaric stood.
42 A The two men roll across the planks, and when they stop, each has a hand on the other's throat.
43 D ALARIC [CONT'D] (strangled): You pulled me down.
44 D BRYNJOLF (strangled): You were standing there.
45 A ¶ They let go.
46 A Both gasp in the thin air.
* 47 A Wind whistles.
48 D BRYNJOLF [CONT'D]: The bridge is breaking.
49 D ALARIC: Then we cross together.
50 A ¶ They help each other up.
* 51 A The bridge sings.

### SCENE s01337 | INT. LIGHTHOUSE KEEPER'S PARLOR - NIGHT (1888)
Detected names (may be incomplete or contain aliases): MADAME CORDELIA OSTERHOUT, COMMODORE ARCHIBALD FENN, LADY MIRIAM FENN, KEEPER ISAIAH TULL, MISS THEODORA CRANE, BARNABY
* 1 A ¶ Oil lamps.
* 2 A Wind shaking the shutters.
* 3 A A round table draped in black velvet with a candle at its heart.
* 4 A Six chairs.
5 A ¶ MADAME CORDELIA OSTERHOUT, 50s, medium, in a high-collared gown.
6 A COMMODORE ARCHIBALD FENN, 60s, whiskers, pocket watch.
7 A LADY MIRIAM FENN, 40s, his wife, gloved hands folded.
8 A KEEPER ISAIAH TULL, 50s, oilskin coat, scowling.
9 A A young MISS THEODORA CRANE, 20s, notebook in her lap.
10 A And BARNABY, 12, the keeper's boy, crouched on the stair.
11 A ¶ Madame Osterhout closes her eyes.
* 12 A The candle gutters.
* 13 A The table gives a small knock.
14 A The Commodore checks his watch.
* 15 A The knock repeats.
16 D MADAME OSTERHOUT: Is there a spirit in this room?
* 17 A ¶ Knock.
18 D COMMODORE FENN: Is that you, Edmund?
* 19 A ¶ Knock.
20 D LADY MIRIAM: Archibald, stop.
21 D COMMODORE FENN: Edmund, if it is you, rap three times.
22 D LADY MIRIAM: He is dead, Archibald. Let him be.
* 23 A ¶ Three knocks, steady.
24 A Miriam's gloves tighten.
25 A Theodora writes.
26 A Tull stares at the floorboards.
27 A Barnaby's face withdraws from the stair.
28 D KEEPER TULL: That's the tide, sir. The tide moves the rock.
29 D MADAME OSTERHOUT (eyes closed): The tide is not what moves tonight.
* 30 A ¶ The candle flame lies flat.
* 31 A A gust blows through the room.
* 32 A The lamps dim.
33 A Miriam stands, lifts her chin, and walks out onto the gallery.
* 34 A The door bangs after her.
35 A ¶ The Commodore starts to rise.
36 A Tull's hand lands on his arm.
37 A Madame opens her eyes.
38 A She looks at Theodora, who is not writing now.
39 D MADAME OSTERHOUT [CONT'D] (to Theodora, flat): You did not tell me she was your mother.
40 A ¶ Theodora lowers her pen.

### SCENE s01338 | EXT. SELF-SERVE CAR WASH - DUSK
Detected names (may be incomplete or contain aliases): PILAR MOSQUERA, ANTON
* 1 A ¶ A concrete bay, wet and humming.
* 2 A Neon over the coin box.
* 3 A Foam slides down a windshield.
4 A ¶ PILAR MOSQUERA, 30s, in a rain jacket, holds a pressure wand in one hand and her phone in the other.
5 A She is rinsing a green hatchback with great care.
6 D PILAR (into phone, light): No, it's fine. I'm rinsing. It's very dramatic.
7 D ANTON [V.O.] (warm, over the phone): Pilar, you sound happy.
8 D PILAR: I am happy. Is that suspicious?
9 D ANTON [V.O.]: It's a little suspicious.
10 A ¶ She laughs.
11 A She sprays the back bumper, then the tires.
12 D PILAR: Did you get the table?
13 D ANTON [V.O.]: Seven-thirty. The one by the window.
14 D PILAR: You remembered I like the window.
15 D ANTON [V.O.]: I remember everything.
16 A ¶ Her smile holds a half beat too long.
17 A She turns off the wand.
* 18 A Water drips.
19 D PILAR: Anton. The window table. That's where you proposed to Rosa.
* 20 A ¶ A long silence on the line.
* 21 A A distant horn.
22 D ANTON [V.O.]: I thought it'd be nice.
23 D PILAR: It would be nice. For her.
24 A ¶ She opens the car door, slides into the driver's seat, and sets the phone on the dashboard.
* 25 A Foam slides off the windshield and the world goes bright white.
26 D PILAR [CONT'D] (into phone): I'll see you at seven-thirty.

### SCENE s01339 | INT. FLORIST'S COLD ROOM - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE HARLOW QUINN, CAPTAIN WREN
* 1 A ¶ A walk-in refrigerator, ranks of white buckets, a hundred roses breathing out their sweetness.
* 2 A Frost on the shelves.
* 3 A A single bulb in a wire cage, humming.
4 A ¶ DETECTIVE HARLOW QUINN, 40s, kneels on the tile in a camel coat, breath fogging.
* 5 A A black glove is wrapped around one finger of a dead man's hand, which has been laid on a bucket of lilies like an offering.
6 A She sets a small pen torch between her teeth and parts the lilies.
* 7 A ¶ Her cell phone rings, shrill in the cold.
8 A She flinches, spits the torch into her palm, and answers.
9 D QUINN (low): Quinn.
10 D CAPTAIN WREN [V.O.] (over the phone, brisk): Where are you?
11 D QUINN: Cold room, Marlow's Flowers.
12 D CAPTAIN WREN [V.O.]: Alone?
13 D QUINN: Yes.
14 D CAPTAIN WREN [V.O.]: Get out. Now. She's on her way.
15 D QUINN: Who's on her way?
16 D CAPTAIN WREN [V.O.]: The florist. She's got a key. She's been on the phone with me for a minute, she's furious, she wants you off her property.
17 D QUINN: Captain, the body's in her fridge.
18 D CAPTAIN WREN [V.O.]: Then you've got two minutes, Harlow.
19 A ¶ Quinn snaps the torch back into her teeth.
* 20 A A latch clicks somewhere beyond the door.
21 A She goes still.
* 22 A The bulb hums.
* 23 A A shadow slides across the frosted glass.
24 D QUINN (muttering around the torch): She's already here.
* 25 A ¶ The handle turns.
* 26 A The door opens a crack.
27 A ¶ Quinn doesn't move.
* 28 A A rose petal drifts down onto the dead man's hand.
29 D CAPTAIN WREN [V.O.]: Harlow? Talk to me.
* 30 A ¶ The door swings wide.
* 31 A Light spills in.
32 A Quinn lifts the phone to her ear and does not look up.
33 D QUINN: She's here.

### SCENE s01340 | INT. GRAIN ELEVATOR, NIGHT SHIFT - NIGHT
Detected names (may be incomplete or contain aliases): ODELIA FINCH, BIG ROY MALLORY, DEZ, PARRISH
* 1 A ¶ A cathedral of concrete silos.
* 2 A Dust hangs in the lamplight like pollen.
* 3 A Belts clank.
* 4 A Somewhere deep in the dark, grain pours with a sound like breathing.
5 A ¶ ODELIA FINCH, 30s, hard hat, headlamp, clipboard, stands on a steel catwalk twenty feet up.
6 A Below her, BIG ROY MALLORY, 50s, bearded, sleeves rolled, rakes a heap of wheat from a hopper.
7 A And in the doorway of the control shed, DESMOND "DEZ" PARRISH, 20s, a new hire, grips a thermos like a rosary.
8 D ODELIA: Roy, bin four is reading empty.
9 D BIG ROY: Bin four's full. I filled it myself at six.
10 D ODELIA: The gauge says empty.
11 D BIG ROY: Gauge is lying.
12 D DEZ: Miss Finch, I heard something in four.
13 D ODELIA: What kind of something, Dez?
14 D DEZ: A knocking.
15 D BIG ROY: It's the wheat settling, kid.
16 D DEZ: It was knocking back.
* 17 A ¶ Silence.
* 18 A The grain pours in the dark.
19 A Odelia's headlamp swings across the silo hatch.
20 A Big Roy leans on the rake and does not smile.
21 D BIG ROY: Odelia. Don't open the hatch.
22 D ODELIA: Roy, why not?
23 D BIG ROY: Because I didn't fill it at six.
24 A ¶ He sets the rake against the hopper.
25 A His hands are shaking.
26 A Odelia climbs down the ladder, rung by rung, and crosses to the hatch.
27 D DEZ: Miss Finch. Please.
28 D ODELIA: Dez, go home.
29 D DEZ: The truck's at the other end of the lot.
30 D ODELIA: Then run.
31 A ¶ He doesn't.
32 A Odelia grips the wheel on the hatch.
* 33 A From inside the silo comes three slow knocks.
34 A She drops her hand.
35 A Big Roy lets out a breath that is half a sob.
36 D BIG ROY: It's been knocking since June.
37 D ODELIA: Why didn't you say?
38 D BIG ROY: Because nobody asked it what it wanted.
* 39 A ¶ The hatch wheel turns on its own.
* 40 A Slowly.
* 41 A One quarter turn.
* 42 A The headlamp flickers and goes out.

### SCENE s01341 | INT. MONASTERY WINE CELLAR - EVENING
Detected names (may be incomplete or contain aliases): STRANGER, BROTHER AMBROSE, LUKAS, SERGEANT VOGEL, CAPTAIN ISOLDE KESSLER
* 1 A ¶ Barrel vaults of ancient brick, sweating with damp.
* 2 A Rows of oaken casks stretch away into shadow like sleeping animals.
* 3 A One candle, stuck on a keg, throws a trembling gold circle onto the flagstones.
4 A ¶ A wounded soldier in a torn gray greatcoat sits slumped against a cask with his boots off and a filthy bandage around his thigh.
5 A He is a STRANGER to this place, forty, unshaven, eyes sharp even in pain.
6 A His rifle lies across his lap, its muzzle pointed at the stairs.
7 A ¶ On the stairs, a pair of old sandals descends.
8 A BROTHER AMBROSE, 70s, white-haired, in a brown habit patched at the knee, carries a bowl of broth and a loaf of black bread.
9 A He stops three steps from the bottom.
10 D BROTHER AMBROSE: I have brought supper.
11 A ¶ The Stranger does not answer.
12 A The rifle does not move.
13 D BROTHER AMBROSE [CONT'D]: You may shoot me after you eat. It would be a waste to shoot me before.
14 D STRANGER: Put it on the floor.
15 A ¶ Ambrose sets down the bowl and bread on the bottom step.
16 A He retreats.
17 A The Stranger drags himself forward, takes the bowl, drinks, hands shaking.
18 A He tears the bread with his teeth.
19 D BROTHER AMBROSE: There is a doctor in the village. He is not one of yours, but he is a good doctor.
20 D STRANGER: My own doctors are dead.
21 D BROTHER AMBROSE: All of the doctors are dead, my son. The ones left are only men.
22 A ¶ The Stranger studies him.
23 A His shoulders sag a fraction.
24 A He sets the bowl down.
25 D STRANGER: Lukas. My name is Lukas.
26 D BROTHER AMBROSE: Lukas. I am Ambrose.
27 D LUKAS: The monks, are there others?
28 D BROTHER AMBROSE: Eleven. Upstairs. Praying for rain.
29 D LUKAS: It will rain.
30 D BROTHER AMBROSE: It always does. Then the walls weep.
31 A ¶ Footsteps overhead.
32 A Boots, many pairs, ringing on flagstone.
33 A A voice barks a command in another tongue.
* 34 A Dust sifts from the ceiling into the candle.
35 A ¶ Lukas lifts the rifle.
36 A Ambrose raises both palms.
37 D BROTHER AMBROSE [CONT'D]: They are not yours.
38 D LUKAS: They are not yours either.
39 A ¶ Lukas turns to the cask beside him and puts a hand on the bung.
40 A Ambrose watches, grave.
41 A The boots stop above the cellar door.
* 42 A A latch clanks.
43 D BROTHER AMBROSE: Lukas, in the name of God, put it down.
44 D LUKAS: Ambrose, in the name of God, hide.
45 A ¶ Ambrose does not move.
46 D SERGEANT VOGEL [O.S.] (from above, gruff): Captain! The cellar door is unbarred!
* 47 A ¶ The door cracks open at the top of the stairs.
* 48 A A thin white line of lamplight falls down the steps.
49 A ¶ CAPTAIN ISOLDE KESSLER, 30s, black coat, officer's cap, steps through.
50 A A pistol in her gloved hand, held low.
51 A She descends, slowly, boots ringing, into the candlelight.
52 D KESSLER (calm, accented): Good evening, Brother. Good evening, soldier.
53 D LUKAS: Good evening, Captain.
54 D KESSLER: You are bleeding on the church's floor.
55 D LUKAS: Forgive me.
56 A ¶ She stops on the bottom step.
57 A Looks at the bowl, the bread, the rifle.
* 58 A A very long silence.
59 D KESSLER: Brother Ambrose, I came to count the casks. I find only eleven.
60 D BROTHER AMBROSE: There were twelve, Captain.
61 D KESSLER: And the twelfth?
62 D BROTHER AMBROSE: The twelfth is a man.
63 A ¶ Kessler lowers the pistol an inch.
64 A Lukas does not lower the rifle.
* 65 A The candle gutters.
* 66 A Overhead, thunder rolls.
67 D KESSLER: Soldier, it is raining.
68 D LUKAS: It always does.
69 A ¶ She turns her head to the stairs and listens.
70 A Beyond the door, her men shuffle.
71 D KESSLER (to the cellar, quietly): There is no one here. Resume the search upstairs.
72 A ¶ The boots retreat.
* 73 A The latch closes.
74 A Kessler holsters the pistol.
75 A She sits on the step, takes off her cap, and runs her hand through her hair.
76 D KESSLER [CONT'D]: Eat. All of you.

### SCENE s01342 | INT. HYDROPONIC BAY, GENERATION SHIP HALCYON - SHIP'S NIGHT
Detected names (may be incomplete or contain aliases): OKONKWO, LIRA PETROVA, HAMASAKI, TEODORO, GIRL, MBEKI, NEWT
* 1 A ¶ Green racks, pink grow-lights, mist.
* 2 A A long table of lettuces.
* 3 A Four crew in coveralls prune and murmur.
4 A ¶ OKONKWO, 40s, ties off a vine.
5 A LIRA PETROVA, 20s, weighs a tomato.
6 A DR. HAMASAKI, 60s, taps a tablet.
7 A TEODORO, 30s, wipes a lens.
* 8 A Nobody hurries.
9 D OKONKWO: Third rack's leaning.
10 D LIRA: The blue lamp's out.
11 D TEODORO: I'll fix it.
12 D DR. HAMASAKI: Don't fix it. Replace it.
* 13 A ¶ A hatch hisses.
14 A A small GIRL, 12, ship-born, hair in two buns, steps in hugging a bucket.
15 A She sets the bucket down and every head turns.
16 D OKONKWO: You're off-shift, little one.
17 D GIRL: I brought worms.
18 D TEODORO: What's your name again?
19 D GIRL: Newt.
20 A ¶ MBEKI, 50s, the bay chief, steps out from behind a rack with a pruning knife.
21 D MBEKI: Newt. Mind the mist.
22 D LIRA (over Okonkwo): Good worms.
23 D TEODORO (over Lira): How many, Newt?
24 D DR. HAMASAKI: Don't count them, Teodoro. Plant them.
25 D NEWT: They don't mind.
26 D DR. HAMASAKI: I'm sure they don't, Newt.
27 A ¶ Okonkwo smiles, ties another vine.

### SCENE s01343 | EXT. GLACIER CREVASSE - DAY
Detected names (may be incomplete or contain aliases): MARGUERITE VOSS, TOBY KANE, IZZY, BRANDT
* 1 A ¶ A blue slot in the ice, forty feet down, sheer walls glowing like glass.
* 2 A A rope runs up into white sky.
3 A ¶ MARGUERITE VOSS, 40s, dangles at the bottom, crampons biting.
4 A TOBY KANE, 30s, hangs three feet above her, rope bunched in his gloves.
5 A At the lip, IZABELLA "IZZY" BRANDT, 30s, belays, braced against an ice axe.
6 D IZZY (shouting down): Talk to me!
7 D TOBY: Her leg's pinned!
8 D MARGUERITE: I'm fine!
9 D IZZY: Which of you is talking?
10 D TOBY: Me! She means me!
* 11 A ¶ The ice groans.
* 12 A A shelf cracks above them.
* 13 A Snow hisses down.
14 A Toby swings, grabs at the wall, kicks a foothold.
15 A Marguerite hugs the ice.
16 D TOBY [CONT'D]: Cut her loose!
17 D MARGUERITE: Don't cut me loose!
18 D IZZY: Stop moving! Both of you!
* 19 A ¶ The groan fades.
* 20 A Quiet.
* 21 A Snow dribbles.
* 22 A Marguerite's breath fogs.
23 A Toby peers down at her, then up at Izzy.
24 D TOBY (whispering): She's stuck. I can reach her.
25 D IZZY (whispering): How stuck?
26 D MARGUERITE: Stuck like a stuck thing.
27 A ¶ Toby laughs once, shakily.
28 A He lowers himself another foot.
29 A His hand finds her harness.
* 30 A The ice gives a final crack and holds.
31 D IZZY: Pull!
32 A ¶ Toby pulls.
33 A Marguerite's leg comes free with a spray of ice.
34 A She cries out, grabs his wrist, and they rise together, jerked up the wall in short grunting yanks.
35 A ¶ At the lip, she hauls herself over first, then him.
36 A They collapse on the glacier, flat on their backs, staring at the sky.
37 D IZZY [CONT'D] (panting): Never again.
38 D MARGUERITE (panting): You say that every time.

### SCENE s01344 | INT. MINIVAN AT A TOLL PLAZA - DAY
Detected names (may be incomplete or contain aliases): DOLORES, MAN, WILLIE, MARISOL, FRANK
* 1 A ¶ Crumbs, juice boxes, a cracked sun visor.
* 2 A The windshield framed by a long line of brake lights.
3 A ¶ DOLORES, 40s, drives with both hands.
4 A Beside her, a MAN in a ball cap fiddles with the map, face turned away.
5 A Behind them, a boy, WILLIE, 8, kicks the seat.
6 A A girl, MARISOL, 12, plugs one earbud in.
7 A ¶ A stranger.
8 A She had never seen him before the gas station.
9 A ¶ She grips the wheel tighter.
10 A He keeps studying the map.
11 A In the mirror, Willie sticks out his tongue.
12 A Marisol rolls her eyes and shushes him.
13 A They inch forward, one car length.
* 14 A The toll booth waits, a glass cage.
15 A ¶ The stranger refolds the map.
16 A She watches his hands.
17 A He stuffs it in the glove box.
18 D WILLIE: Mom, who is he?
19 D DOLORES: Don't talk, Willie.
20 D MARISOL: Mom, he's Uncle Frank.
21 D DOLORES: Uncle Frank has a mustache.
22 D MARISOL: He shaved.
23 A ¶ The man in the ball cap turns at last.
24 A A broad smile, mustache missing, a pale stripe on his lip.
25 A He tips the cap.
26 D FRANK: Surprise, kids.
27 D WILLIE: Uncle Frank!
28 D DOLORES: Frank, you scared me half to death.
29 D FRANK: I had a plan.
30 D DOLORES: It was a bad plan.
31 A ¶ She laughs, tapping the wheel.
32 A He laughs.
33 A Marisol groans.
* 34 A The toll booth's arm lifts.
35 A Dolores hands the attendant exact change, rolls through, and merges onto the highway with a long exhale, while the boy throws his arms around Frank's seat.

### SCENE s01345 | INT. FLOODED CLINIC, SECOND-FLOOR WARD - NIGHT
Detected names (may be incomplete or contain aliases): CATALINA OROZCO, NURSE EZEKIEL BWALYA, RAJ
* 1 A ¶ Brown water laps at the stairwell below.
* 2 A Generators mutter.
* 3 A Camp beds line the corridor, each lit by a headlamp or a candle in a jar.
* 4 A The air smells of bleach and river.
5 A ¶ DR. CATALINA OROZCO, 50s, surgical cap, sleeves rolled, kneels at a bedside with a stethoscope.
6 A NURSE EZEKIEL BWALYA, 30s, long hands, steady, hangs a bag of saline from a coat hook.
7 A And RAJ, 20s, an orderly with a flashlight, stands at the head of the stairs, watching the water.
8 D DR. OROZCO (to the ward): Everyone who can sit up, please sit up. We are moving to the roof at midnight.
9 A ¶ A murmur.
* 10 A Blankets rustle.
11 D DR. OROZCO [CONT'D] (to Ezekiel): Pulse is one-twenty. Pressure?
12 D EZEKIEL: Eighty over fifty. Dropping.
13 D DR. OROZCO (to herself): Come on, little heart.
14 D RAJ (from the stairs): Doctor, it's at the fourth step.
15 D DR. OROZCO: Thank you, Raj. Keep counting.
16 D EZEKIEL (to the patient): Sir, I'm going to give you something for the pain. Squeeze my hand.
17 D DR. OROZCO (to Ezekiel): Double the dose.
18 D EZEKIEL (over her): Double the dose?
19 D DR. OROZCO: Yes. And his wife's too.
20 A ¶ Ezekiel draws up a syringe.
21 A His hands never tremble.
22 A Orozco lays the stethoscope against the patient's chest and listens, eyes closed.
23 D RAJ (calling): Fifth step!
24 D DR. OROZCO (to the ward): No one panics. Stay in your beds. We will carry you.
25 A ¶ She opens her eyes.
26 A The patient has stopped breathing.
27 A Ezekiel is already in motion.
* 28 A The headlamps shiver.

### SCENE s01346 | INT. COMMUNITY HOSPITAL, TRAUMA BAY - NIGHT
Detected names (may be incomplete or contain aliases): SAMUEL ACHTERBERG, NURSE LINH DAO, TEAGUE
* 1 A ¶ White light, steel.
* 2 A A gurney.
* 3 A Monitors beeping.
* 4 A A fan of gauze packets on a tray.
5 A ¶ DR. SAMUEL ACHTERBERG, 40s, scrubs, surgical mask pulled under his chin, wipes his hands.
6 A NURSE LINH DAO, 30s, adjusts a monitor.
7 A A bleeding man, MR. TEAGUE, 50s, in a mechanic's coveralls, sits on the gurney, one hand clamped on his forearm.
8 A ¶ Teague tries to stand.
9 A Achterberg and Dao push him back down together.
10 A Teague shoves free, swings an elbow.
11 A Dao ducks.
12 A Achterberg grabs the arm.
13 A The three of them scuffle against the gurney, a monitor lead pops loose, and the machine screams.
14 A ¶ They freeze, panting.
* 15 A Teague's arm drips onto the floor.
* 16 A A long beat.
17 D DR. ACHTERBERG: Mr. Teague, you are bleeding.
18 D TEAGUE: I know I'm bleeding.
19 D DR. ACHTERBERG: You have a lacerated radial artery. If you stand up, you will pass out.
20 D TEAGUE: I don't have time to pass out.
21 D NURSE DAO: Mr. Teague, please sit down.
22 D TEAGUE: My daughter's waiting in the parking lot. She's eleven. She doesn't have a coat. She thinks I'm getting a sandwich.
23 D DR. ACHTERBERG: We can send someone to get her.
24 D TEAGUE: She won't go with a stranger.
25 D NURSE DAO: She'll go with me. Tell me what she looks like.
26 D TEAGUE: Blue backpack. Braids. Her name is Corinne.
27 D NURSE DAO: Corinne. Blue backpack. Braids.
28 D TEAGUE: She hates broccoli.
29 D NURSE DAO: Noted.
30 D DR. ACHTERBERG: Mr. Teague, I need your arm.
31 D TEAGUE: You'll fix it?
32 D DR. ACHTERBERG: I'll fix it.
33 A ¶ Teague lies back.
34 A Dao reconnects the monitor lead.
35 A Achterberg unwraps a suture kit.
* 36 A The beep slows to a steady rhythm.

### SCENE s01347 | INT. MESS TENT, FORWARD CAMP - DAY
Detected names (may be incomplete or contain aliases): SERGEANT MORRIS HALE, PRIVATE ELLIOT QUAYLE
* 1 A ¶ A canvas tent flapping in dry wind.
* 2 A Trestle tables, tin plates, a single coffee urn.
* 3 A The distant rumble of artillery has stopped.
* 4 A Everything has stopped.
5 A ¶ SERGEANT MORRIS HALE, 50s, grizzled, sits alone at the end of a bench, writing a letter in pencil.
* 6 A A tin mug steams at his elbow.
7 A ¶ He writes.
8 A He stops.
9 A He crosses a line out.
10 A He writes again.
* 11 A ¶ The tent flap parts.
12 A PRIVATE ELLIOT QUAYLE, 19, enters, helmet off, cropped hair, a young face wrapped around old eyes.
13 A He carries a rifle by the sling and a folded paper in his teeth.
14 A He takes the paper out and stands at attention.
15 D QUAYLE: Sergeant Hale.
16 D HALE: At ease, Private.
17 D QUAYLE: Sir, I've been told to give you this.
18 A ¶ He holds out the paper.
19 A Hale does not take it.
20 A He sets down the pencil.
21 D HALE: Sit.
22 D QUAYLE: Sergeant, I'm supposed to deliver it and come straight back.
23 D HALE: Then sit and come straight back after.
24 A ¶ Quayle sits.
25 A Hale slides the mug across the table.
26 A Quayle takes it.
27 A They both watch the tent flap moving.
28 D HALE [CONT'D]: Quiet out there.
29 D QUAYLE: Yes, Sergeant.
30 D HALE: How long?
31 D QUAYLE: Since noon.
32 D HALE: Is that long?
33 D QUAYLE: Longest it's been since I got here.
34 D HALE: How long have you been here?
35 D QUAYLE: Six weeks.
36 D HALE: That's not long.
37 D QUAYLE: No, Sergeant.
38 A ¶ Hale picks up the paper, unfolds it, reads, folds it again.
39 A He sets it on the table beside his letter.
40 D HALE: Do you know what this says?
41 D QUAYLE: No, Sergeant.
42 D HALE: It says the war is over.
43 D QUAYLE: Sir?
44 D HALE: Armistice at noon. That's why it's quiet.
45 A ¶ Quayle sits very still.
46 A He sets the mug down.
47 A His hands lie flat on the table.
48 D QUAYLE: Sergeant, nobody told us.
49 D HALE: They're telling us now.
50 D QUAYLE: Is it true?
51 D HALE: It's signed.
52 D QUAYLE: Then why do we still have to stand watch?
53 D HALE: Because nobody told the other side.
54 D QUAYLE (softly): Oh.
55 D HALE: Don't take your helmet off yet.
56 D QUAYLE: No, Sergeant.
57 D HALE: You can take your boots off.
58 D QUAYLE: Sir?
59 D HALE: I've never seen a man win a war with his boots on.
60 A ¶ Quayle laughs, helpless, and puts his hands over his face.
61 A Hale lifts the pencil and finishes his sentence.
* 62 A The tent flap moves.
* 63 A The wind carries a distant bugle, very thin, very far.
64 D QUAYLE: Sergeant. Is that ours?
65 D HALE: It's somebody's.
66 D QUAYLE: What do we do now?
67 D HALE: We eat, Private.
68 D QUAYLE: And after?
69 D HALE: After, you write to your mother.
70 D QUAYLE: What do I tell her?
71 D HALE (not looking up): Tell her you were in the mess tent when it happened.

### SCENE s01348 | EXT. THE GLASSMAKERS' STAIRCASE - DAWN
Detected names (may be incomplete or contain aliases): ILSE MARROW, WYNNE ASHCROFT
* 1 A ¶ A staircase cut into a cliff of black obsidian, spiraling up toward a cloud-wrapped citadel.
* 2 A Each step is a slab of blown glass, translucent green, filled with drifting bubbles.
* 3 A Below, a mist-choked valley.
* 4 A Above, nothing.
5 A ¶ ILSE MARROW, 30s, climbs with a glass lantern slung from her pack, the glow shifting violet in the cold.
6 A Her cloak is the color of dried lavender; her boots are taped at the heel; a long scar runs along her jaw.
7 A Three steps behind her follows WYNNE ASHCROFT, 30s, pale and spare, with a crooked staff of white ash and the patient eyes of someone who has outlasted several wars.
8 D ILSE: They said it would take a day.
9 D WYNNE: They said a lot of things about the stair.
10 D ILSE: It sings.
11 D WYNNE: It does that when it wants to be crossed.
* 12 A ¶ Under Ilse's boot, a step chimes like a crystal glass.
13 A She pauses.
14 A Wynne pauses.
* 15 A A bubble drifts through the glass and bursts.
16 D ILSE: Did she come this way?
17 D WYNNE: She came this way.
18 D ILSE: Did she come back?
19 D WYNNE: She didn't say.
20 A ¶ Ilse climbs again.
* 21 A The stair rings with each step, a soft cascade of notes.
* 22 A The sky above lightens.
* 23 A Clouds tear.
* 24 A A flock of silver birds pours across the gap.
25 D ILSE: Wynne. You do not have to follow.
26 D WYNNE: I know.
27 D ILSE: She is your sister.
28 D WYNNE: She is your mother.
29 A ¶ Ilse stops.
* 30 A The next stair is cracked down the middle.
* 31 A Beneath it, the valley yawns.
32 A She places her foot on it.
* 33 A It holds.
34 D ILSE: Then we are both followers.
35 A ¶ Wynne smiles.
36 A She taps the staff against the glass, and the whole stair hums like a harp, once, twice, a third time.

### SCENE s01349 | INT. ABANDONED ARCADE, BACK ROOM - NIGHT
Detected names (may be incomplete or contain aliases): MAGDA KOWALCZYK, TWYLA BANKS, PINCH, ARRIAGA, DEVANTE ROOK
* 1 A ¶ Dead pinball machines draped in sheets.
* 2 A A card table.
* 3 A Four chairs, one empty.
4 A ¶ MAGDA KOWALCZYK, 50s, plans on a napkin.
5 A TWYLA BANKS, 30s, drums the table with a lighter.
6 A And JOSÉ "PINCH" ARRIAGA, 40s, folds the map in precise squares.
7 D MAGDA: Three minutes in, four out.
8 D TWYLA: Three in, three out.
9 D MAGDA: She wants a margin.
10 D TWYLA: She wants a lot of things.
11 D PINCH: Who's the she?
12 D TWYLA: The she who gets us paid.
* 13 A ¶ The back door scrapes.
14 A A fourth figure ducks in, pulling a hood down from a bruised face.
15 A DEVANTE ROOK, 20s, the driver.
16 A He drops into the empty chair and doesn't speak.
17 D MAGDA: You're late.
18 D DEVANTE: The truck was followed.
19 D PINCH: By who?
20 D DEVANTE: A woman. Maybe two.
21 D MAGDA: Where did you lose her?
22 D DEVANTE: I didn't.
* 23 A ¶ Silence.
* 24 A The pinball machines hum faintly under their sheets.
25 A Twyla's lighter stops clicking.
26 D TWYLA: Then she's outside.
27 D DEVANTE: She's outside.
28 D MAGDA: Then we're finished.
29 D PINCH (folding the map): No. We are retired.

### SCENE s01350 | EXT. ROOFTOP FIVES COURT, COPENHAGEN - DUSK
Detected names (may be incomplete or contain aliases): ASTRID LUNDGAARD, MATEUSZ KR, THANDI MOKOENA, RADIO
* 1 A ¶ A tarred roof above a canal.
* 2 A A white-painted court on the asphalt, four walls of corrugated steel.
* 3 A Chimney pots and TV aerials ring the horizon.
* 4 A Down in the water, a barge horn moans.
5 A ¶ ASTRID LUNDGAARD, 40s, silver braid, plays barefoot, gloved hand hitting a hard rubber ball.
6 A Across from her, MATEUSZ KRÓL, 30s, shirtless, a tattoo of a swallow across his ribs.
7 A In the corner, with a stopwatch and a radio headset, THANDI MOKOENA, 20s, referee, jots numbers on her palm.
8 A ¶ Astrid slams a backhand.
9 A The ball cracks off the steel and Mateusz dives, scrapes his knee, returns it high, and Astrid follows it back with a lunge and a swing, and he counters with a lob that lands in the corner, while Thandi shouts the score into her headset.
10 D THANDI (to the whole roof): Eleven all! Next point takes the set!
11 D RADIO [V.O.] (tinny, from the headset): Copy, referee. Broadcast is live. Keep it moving.
12 D MATEUSZ (muttering): Live. Everything's live. Nothing's alive.
13 D ASTRID (to Mateusz): You're drifting left.
14 D MATEUSZ: You always say that.
15 D ASTRID: Because you always drift.
16 A ¶ They set.
17 A Astrid serves, a vicious spinning shot.
18 A Mateusz reads it, steps in, volleys.
19 A They rally, long, ferocious.
20 A Thandi counts.
21 D THANDI (to herself): Please don't go to twelve.
22 D ASTRID (to Thandi): Girl, hush. Let us breathe.
* 23 A ¶ The ball skims the tape and drops.
* 24 A A held breath.
25 A Astrid and Mateusz stare at where it died.
26 D THANDI (to the whole roof): Point, Lundgaard! Set to Lundgaard!
27 A ¶ Mateusz drops to a knee, panting.
28 A Astrid walks to him, extends a gloved hand.
29 A He takes it.
* 30 A Down on the canal, the barge horn sounds again, longer this time.

### SCENE s01351 | INT. OBSERVATORY ROOF DOME - NIGHT
Detected names (may be incomplete or contain aliases): CASSIAN LOWE, LYDIA ABERNATHY-OKAFOR, MABEL
* 1 A ¶ A hemisphere of dark wood and brass, the great shutter slid open on a spill of stars.
* 2 A In the center, a telescope the size of a cannon points at the sky.
* 3 A The floor is a compass rose of inlaid ebony.
* 4 A It is cold.
* 5 A Everyone's breath is visible.
6 A ¶ CASSIAN LOWE, 40s, wrapped in a moth-eaten scarf, adjusts the telescope eyepiece with long inky fingers.
7 A He is an astronomer who has been alone with his work for fifteen years, and it shows in the way he does not quite look at people.
8 A ¶ LYDIA ABERNATHY-OKAFOR, 30s, in a velvet coat, hair swept up and pinned with a single silver comb, stands at the foot of the iron stair, staring up at him.
9 A She has the stillness of someone who rehearsed a speech and forgot it on the climb.
10 A ¶ And between them, curled on a worn leather chair, is MABEL, 70s, Cassian's mother, a tiny woman in knitted mittens, dozing, a cup of cold tea on her knee.
11 D LYDIA (to Cassian): You didn't answer my letters.
12 D CASSIAN (not turning): Comets keep their own hours.
13 D LYDIA: I'm not a comet.
14 D CASSIAN: No. A comet comes back.
15 A ¶ Lydia flinches.
16 A She climbs one step.
17 D LYDIA (to the dome): Seven years, and this is what it comes to. A man with his eye pressed to a hole.
18 D MABEL (half asleep): That's a fine hole, dear.
19 D CASSIAN: Mother.
20 D MABEL: Just saying.
21 A ¶ Lydia takes another step.
22 A Cassian's hand tightens on the brass.
* 23 A A star slides through the glass.
24 D LYDIA (to Cassian): I'm marrying Edgar in June.
25 D CASSIAN: Congratulations.
26 D LYDIA: That's all?
27 D CASSIAN: What would you like me to say?
28 D LYDIA: Something. Anything that isn't polite.
29 D CASSIAN (muttering): Edgar is a fool.
30 D LYDIA: There it is.
31 D CASSIAN: He wears spats to the beach.
32 D LYDIA: He is kind.
33 D CASSIAN: He is kind, and wears spats, and has never once looked up.
34 A ¶ Lydia reaches the platform.
35 A She faces him.
36 A He finally turns.
37 A Their faces are a foot apart.
38 D LYDIA: Cassian, look at me.
39 D CASSIAN: I am looking.
40 D LYDIA: Look at me, not past me.
41 A ¶ He does.
42 A The eyes are wet.
* 43 A Behind them, a meteor streaks across the open shutter.
44 A Neither notices.
45 D MABEL (waking, to the room): Did I miss something?
46 D LYDIA (not moving): Everything, Mabel.
47 D MABEL (to the room): I knew it. I always do.

### SCENE s01352 | EXT. GOBLIN MARKET UNDER THE BRIDGE - NIGHT
Detected names (may be incomplete or contain aliases): THIMBLE, SABLE OOLONG, GRIMBALD, NETTLE, PERPETUA, SIR HOLLOWAY
* 1 A ¶ Lantern-lit stalls strung beneath a river bridge.
* 2 A Jars of bottled thunder.
* 3 A Barrels of live shadows.
* 4 A Everywhere, bargaining.
5 A ¶ THIMBLE, a spindly goblin in a tin hat, hawks pocket-sized moons.
6 A SABLE OOLONG, a heron-tall witch, weighs a nightingale on a brass scale.
7 A GRIMBALD, a wide troll in an apron, stirs something orange.
8 A NETTLE, a girl of twelve in patched trousers, slips between legs with a stolen apple.
9 A PERPETUA, a thin moth-winged woman, folds her wings behind a stall of lace.
* 10 A ¶ A bell clangs.
11 A Every head turns.
12 A ¶ Down the steps comes a knight in black lacquer armor, visor down, sword drawn: SIR HOLLOWAY, helm tilted, one boot leaving silver prints on the stones.
13 A Thimble drops a moon.
14 A Sable lifts the nightingale to her shoulder.
15 A Grimbald whips the spoon like a mace.
16 D SIR HOLLOWAY (booming): By order of the Queen Under Glass, this market is closed!
17 D THIMBLE (shouting): You can't close a market!
18 D GRIMBALD: You'll close your own mouth first!
19 A ¶ Nettle darts under Holloway's arm and bites the apple.
20 A He swats.
21 A Thimble hurls a moon, which bursts in his visor in a cloud of silver dust, and Sable swings a barrel of shadows, which smacks his shoulder, and Perpetua spreads her wings and sweeps a table of lace into his face, and the knight staggers, sword flailing, as Nettle ducks and the whole market rushes in, goblins, trolls and witches piling onto the armor.
22 D NETTLE (giggling): Get his legs!
23 A ¶ The knight topples.
* 24 A A pile of stalls collapses.
* 25 A Lace, moons, shadows, apples, all in a heap.
* 26 A The bell clangs again, once, softly, and stops.
27 D SIR HOLLOWAY (muffled): You have made a grave mistake.
28 D SABLE: Sir, we make them daily.

### SCENE s01353 | EXT. WATER TOWER ON THE PLAINS - DAWN
Detected names (may be incomplete or contain aliases): GASPAR REYES, ELLIE VANCE
* 1 A ¶ A rusted tank on stilts against an empty sky.
* 2 A A rope ladder swings.
3 A ¶ He climbs it, slow, rifle across his back.
4 A At the top he kneels, takes off his hat, and peers over the rim.
5 A She is already there, sitting cross-legged, sipping from a tin cup.
6 A ¶ She doesn't look at him.
7 D GASPAR REYES: Morning.
8 D ELLIE VANCE: Morning.
9 D GASPAR REYES: You waiting on me?
10 D ELLIE VANCE: Waiting on weather.
11 A ¶ He settles beside her.
12 A She offers the cup.
13 A He drinks and hands it back.
14 D GASPAR REYES: They say the bank's closed.
15 D ELLIE VANCE: They say a lot.
16 D GASPAR REYES: Is it?
17 A ¶ She shrugs.
* 18 A Far below, a dust cloud rises on the road.
19 A Both watch it come.
20 D GASPAR REYES [CONT'D]: That's a posse.
21 D ELLIE VANCE: That's a wagon.
22 D GASPAR REYES: You sure?
23 D ELLIE VANCE: No.
24 A ¶ He reaches for the rifle.
25 A She puts a hand on his wrist.
* 26 A The dust draws closer, a hundred yards, fifty.
* 27 A A mule brays.
28 D ELLIE VANCE [CONT'D]: It's a wagon.
29 A ¶ He lets go of the rifle.
30 A She drinks the last of the tea.

### SCENE s01354 | INT. CHILDREN'S PUPPET THEATER, BACKSTAGE - NIGHT
Detected names (may be incomplete or contain aliases): MARTA OSWIN, THEO MERCER, VOICE, FIGURE, INEZ, PLATE MAN
* 1 A ¶ Dust.
* 2 A Velvet.
* 3 A Strings hanging like vines.
* 4 A Papier-mâché heads on hooks.
* 5 A One working bulb.
6 A ¶ MARTA OSWIN, 30s, cleans a marionette with a rag.
7 A THEO MERCER, 20s, the stagehand, counts stage weights.
8 A A VOICE hums from the dark above the catwalk.
9 A A FIGURE in a cloak sits in the third row, outlined by the footlights, still as a coat.
10 D MARTA: Theo, who's in the house?
11 D THEO: No one. We locked up at nine.
12 D MARTA: Then who's that?
13 D THEO: That's the coat rack.
14 D MARTA: The coat rack doesn't hum.
15 A ¶ The humming stops.
16 A The cloak turns.
17 A A long white face tilts into the footlights.
18 A It has no mouth.
19 D FIGURE (a dry whisper): Whose turn is it?
20 D THEO: Marta.
21 D MARTA: Don't move.
* 22 A ¶ The marionette in her hands twitches.
* 23 A Its strings tighten by themselves.
* 24 A The head turns toward her.
25 D MARTA [CONT'D] (whispering): Theo. Call Inez.
26 D THEO: Inez is at home.
27 D MARTA: Call her.
28 A ¶ He thumbs a phone.
* 29 A It rings, tinny.
30 D INEZ [V.O.] (sleepy, over the phone): Hello?
31 D THEO: Inez, it's Theo. At the theater. Something's in the house.
32 D INEZ [V.O.]: What kind of something?
33 D THEO: A man. A thing. It's got a face like a plate.
34 D INEZ [V.O.]: Theo. Get out of the theater.
35 D THEO: I can't. It's between me and the door.
36 A ¶ The figure rises from the seat.
37 A It steps up onto the stage, boot by boot.
* 38 A The bulb dims.
39 A Marta lets go of the puppet.
* 40 A It dangles, spinning slowly.
41 D MARTA: It's the Plate Man.
42 D THEO: The what?
43 D MARTA (backing away): My grandmother told me. He takes the last one out of the house.
44 D INEZ [V.O.]: Theo? Theo, are you there?
45 D PLATE MAN (a dry whisper): Yours.
46 A ¶ The Plate Man opens its cloak.
* 47 A Behind it, rows of small white faces.
48 A Theo screams.

### SCENE s01355 | INT. SALOON DURING A THUNDERSTORM - NIGHT
Detected names (may be incomplete or contain aliases): BARN, COLE, SUNNY WELLS, REVEREND THOMAS GRIGG, MERCEDES SOTO, JED, PIKE
* 1 A ¶ Lamplight.
* 2 A Rain drumming on the tin roof.
* 3 A Poker chips.
* 4 A A cracked mirror behind the bar.
5 A ¶ BARNABY "BARN" COLE, 40s, bartender, polishes a glass.
6 A SUNNY WELLS, 20s, deals cards in the corner.
7 A REVEREND THOMAS GRIGG, 60s, nurses a whiskey.
8 A MERCEDES SOTO, 30s, in a duster, sits alone, a rifle across her knees.
9 A Two cowhands, JED and PIKE, 20s, play with Sunny.
10 D JED: Barn, another round.
11 D BARN: Jed, you're drunk.
12 D JED: I'm thirsty.
13 D PIKE: Same thing, Jed.
14 D REVEREND GRIGG: Gentlemen, the Lord watches.
15 D JED: The Lord can watch me pay.
16 A ¶ Mercedes lifts her head.
17 A She watches Jed's hand.
18 A Jed's hand moves to his gun.
19 D MERCEDES: Jed Hawkins.
20 D JED: Who's asking?
21 D MERCEDES: Mercedes Soto. You killed my brother in Tucson.
* 22 A ¶ Silence.
* 23 A Lightning.
24 A Pike pushes back from the table.
25 A Sunny drops the deck.
26 A Barn slowly sets down the glass.
27 D BARN: Ma'am. Not in my bar.
28 D MERCEDES: Barn, step aside.
29 A ¶ Jed draws.
30 A Mercedes fires first.
31 A Jed drops, clutching his arm.
32 A Pike dives behind the table.
33 A Sunny scrambles under it.
34 A The Reverend crosses himself and kneels.
35 D BARN: Everybody stay down!
36 D REVEREND GRIGG: Lord, forgive us!
37 A ¶ Mercedes stands over Jed, rifle on his chest.
* 38 A Thunder shakes the roof.
39 D JED (through his teeth): He pulled first.
40 D MERCEDES: My brother never pulled first in his life.
41 A ¶ Barn raises his hands.
42 A Pike peeks up.
43 A Sunny crawls out.
44 A The Reverend rises and walks to Jed's side, kneels.
45 D REVEREND GRIGG: Miss Soto, let me tend him.
46 D MERCEDES: Reverend, he's yours.
47 A ¶ She lowers the rifle, turns, and walks out into the rain.

### SCENE s01356 | EXT. SHELL CRATER, NO MAN'S LAND - DAWN
Detected names (may be incomplete or contain aliases): SERGEANT BELL, CORPORAL NIKOS, PRIVATE SANDOVAL, PRISONER, HARGROVE, ANDERS
* 1 A ¶ Mud.
* 2 A Barbed wire.
* 3 A A dead tree.
4 A ¶ Five soldiers crouch in the crater.
5 A SERGEANT BELL, 40s.
6 A CORPORAL NIKOS, 20s.
7 A PRIVATE HARGROVE, 18.
8 A PRIVATE SANDOVAL, 30s.
9 A And a man in a different uniform, face down in the mud, with a bandaged shoulder: a PRISONER.
10 A ¶ Nikos shakes the Prisoner awake.
11 D BELL: Name?
12 D PRISONER: Anders.
13 D BELL: Rank?
14 D PRISONER: Nothing. I carried the bread.
15 A ¶ Hargrove laughs.
16 A Sandoval shushes him.
* 17 A Shells whistle overhead.
18 D NIKOS: Sarge, he's lying.
19 D BELL: He's hungry.
20 A ¶ Bell tosses him a hardtack.
21 A The Prisoner eats.
22 D HARGROVE: He's our enemy, Sarge.
23 D BELL: Anders is his name.
24 D ANDERS: Thank you.
* 25 A ¶ A whistle.
26 A Everyone ducks.
* 27 A The shell lands thirty yards away.
* 28 A Mud rains down.
29 A Anders crawls toward Hargrove and covers the boy's helmet with both hands.
30 D SANDOVAL (to Bell): Sarge, he saved the kid.
31 D BELL: Anders. Stay close.

### SCENE s01357 | INT. RESTAURANT KITCHEN, AFTER CLOSE - NIGHT
Detected names (may be incomplete or contain aliases): CHEF IMANI JOSEPH, SOUS-CHEF DARIUS PELL, DISHWASHER PEARL, WAITER ANSELM, STRANGER, LEOPOLD
* 1 A ¶ Steel counters.
* 2 A A hose coiled on the drain.
3 A Five people sit on overturned crates sharing a bottle.
4 A ¶ CHEF IMANI JOSEPH, 40s, still in whites.
5 A SOUS-CHEF DARIUS PELL, 30s.
6 A DISHWASHER PEARL, 50s.
7 A WAITER ANSELM, 20s.
8 A And a STRANGER in a gray coat, fifties, who wandered in through the alley door.
9 A ¶ Imani pours a round.
10 A Darius passes the bread.
11 A Pearl hums.
12 A Anselm laughs.
13 A The Stranger accepts a glass and says nothing.
14 D IMANI: So what do we call him?
15 D DARIUS: He's a health inspector.
16 D PEARL: He's not an inspector.
17 D ANSELM: He's a ghost.
18 D DARIUS (over Anselm): He ate the last of the soup.
19 D PEARL (over Darius): Hush, let the man speak.
20 D STRANGER: Leopold.
21 D IMANI: Leopold what?
22 D LEOPOLD: Just Leopold. I used to cook here.
* 23 A ¶ Silence.
24 A Imani lowers her glass.
25 A He lifts his, to her.
26 D LEOPOLD [CONT'D]: Good soup. Needs salt.
27 A ¶ Imani smiles.
28 A She stands, crosses to the stove, adds a pinch.
29 A He nods.

### SCENE s01358 | INT. AUCTION HOUSE, FREIGHT ELEVATOR - NIGHT
Detected names (may be incomplete or contain aliases): ENZO, MARCHETTI, NOOR HASHEMI, OZZIE, LIN, DARCY LUND, BASE
* 1 A ¶ A cage of scuffed steel, floor stenciled with weight limits.
* 2 A The elevator hums, descending through darkness.
* 3 A A crate the size of a coffin stands on a hand truck.
4 A ¶ LORENZO "ENZO" MARCHETTI, 50s, tuxedo, bow tie crooked, holds the truck handles.
5 A NOOR HASHEMI, 30s, in a janitor's jumpsuit, mop bucket by her ankle.
6 A OSCAR "OZZIE" LIN, 20s, headphones around his neck, crouches by a panel with a screwdriver.
7 A At the back, DARCY LUND, 60s, an auction-house guard in uniform, hums a tune.
8 A He has not noticed anything.
9 D ENZO (whispering): Floor three.
10 D NOOR: Keep humming, Darcy.
11 D DARCY (cheerfully): Always do.
* 12 A ¶ The elevator shudders.
13 A Noor grips the rail.
14 D NOOR: Ozzie, the camera.
15 D OZZIE: Looped. Eight seconds.
16 D ENZO: Eight seconds is nothing.
17 D OZZIE: It's what the tape gives.
18 D NOOR (over Ozzie): Where's the other guard?
19 D DARCY (over Noor): Which one?
20 D ENZO: Darcy, the other guard.
21 D DARCY: Oh. Lunchtime.
22 A ¶ Everyone exhales.
* 23 A The elevator stops.
* 24 A The cage door slides open on a dim lobby with a marble floor and a vault door ten feet tall.
25 D ENZO (quietly): Showtime.
26 A ¶ They roll the crate out.
* 27 A The wheels squeak.
28 A Darcy hums louder.
29 D BASE [V.O.] (a voice from Darcy's radio): Base to Darcy. Base to Darcy. Status.
30 A ¶ Darcy lifts the radio.
31 D DARCY: Base, Darcy. All clear. Just a delivery.
32 D BASE [V.O.]: Delivery? At this hour?
33 D DARCY: Antique. Very heavy.
34 D BASE [V.O.]: Copy. Stay put.
* 35 A ¶ Silence.
36 A Enzo's eyes narrow at Darcy.
37 A Noor slides a hand to her pocket.
38 D OZZIE: Eight seconds. Seven. Six.
39 D DARCY (into the radio, smiling): Base, actually, there's a problem.
40 A ¶ Everyone freezes.
41 D BASE [V.O.]: What problem?
42 D DARCY: My feet hurt.
* 43 A ¶ A long beat.
44 A Then the radio laughs.
45 D BASE [V.O.]: Roger that. Sit down, Darcy.
46 A ¶ Darcy sits on the crate and unlaces a shoe.
47 A Enzo and Noor stare.
48 A Ozzie laughs once, high, into his hand.
49 D NOOR (whispering): He's good.
50 D ENZO (whispering): He's the best liar I ever hired.
51 D OZZIE: Three. Two.
* 52 A ¶ The vault door swings open on its own, lit from within by a pale green glow.
53 A Enzo steps toward it.
54 D ENZO (under his breath): Hello, beautiful.
55 D DARCY: Mind the wheels, boss.
56 D BASE [V.O.]: Darcy, say again. Who are you talking to?
57 A ¶ Darcy looks at the radio.
58 A Then at the three of them.
59 A He sets it on the crate, very gently, and switches it off.
60 D DARCY: Nobody.

### SCENE s01359 | INT. TELEGRAPH OFFICE, LONDON - NIGHT (1912)
Detected names (may be incomplete or contain aliases): PERCIVAL ASHDOWN, MISS ROSALIND TREVETHAN, LORD ALISTAIR CROYDE, HARRIET LUCAS, OPERATOR
* 1 A ¶ Brass keys.
* 2 A Glass cases.
* 3 A A gas lamp.
* 4 A A wall of pigeonholes.
* 5 A The tick of a dozen sounders.
* 6 A Rain on the glass.
7 A ¶ MR. PERCIVAL ASHDOWN, 50s, stiff collar, spectacles, sorts slips.
8 A MISS ROSALIND TREVETHAN, 20s, clerk, hair pinned up under a cap, taps the key.
9 A LORD ALISTAIR CROYDE, 50s, in a fur-collared coat, waits at the counter, drumming gloved fingers.
10 A And a woman, HARRIET LUCAS, 30s, in a plain brown coat, stands at the far end of the counter holding an unopened envelope.
11 A ¶ Ashdown clears his throat.
12 D ASHDOWN (to the room): Ladies and gentlemen. We are experiencing delay. The Atlantic cable is busy.
13 D CROYDE (to Ashdown): How busy?
14 D ASHDOWN: Very.
15 D CROYDE: Is it the Titanic?
* 16 A ¶ Silence.
17 A Rosalind's hand stills on the key.
18 D ASHDOWN: It is, my lord.
19 A ¶ Harriet puts the envelope down.
20 D HARRIET (under her breath): My brother was a stoker.
21 D ROSALIND (to Harriet): Miss, I am so sorry.
* 22 A ¶ The sounder clatters.
23 A Rosalind leans in, writes, tears the slip.
24 D ROSALIND [CONT'D] (to the room): Message. Carpathia has picked up survivors.
* 25 A ¶ A breath goes through the office.
26 A Croyde takes off his hat.
27 A Ashdown snatches the slip and reads it.
28 D ASHDOWN (to Rosalind): Is there a list?
29 D ROSALIND: Not yet.
30 D OPERATOR [V.O.] (over the sounder, faint, relayed): Names to follow. Standby, London.
31 A ¶ Harriet takes a step forward, then stops.
32 D HARRIET (to herself): Please, Tom. Please.
33 D CROYDE (to Ashdown): Mr. Ashdown, send a message to my wife. Tell her I have an interest.
34 D ASHDOWN: My lord, there are priorities.
35 D CROYDE: I am aware of that, Ashdown.
36 A ¶ Rosalind keys again.
* 37 A The sounder answers.
38 D ROSALIND (reading): Names. First batch.
39 A ¶ The whole room leans in.
40 A Rosalind begins to read aloud, each name a stone dropped into a well.

### SCENE s01360 | INT. FAMILY LAW OFFICE, WAITING ROOM - DAY
Detected names (may be incomplete or contain aliases): FIONA KESSELL, GIDEON KESSELL, HANA OKADA, IVO BRAJOVIC, JOLENE MARCH, KASPAR
* 1 A ¶ Plastic chairs.
* 2 A A dying ficus.
* 3 A A wall clock that runs four minutes slow.
4 A ¶ FIONA KESSELL, 40s, in a suit, clutches a folder.
5 A GIDEON KESSELL, 40s, her ex, ankle on his knee, scrolls his phone.
6 A HANA OKADA, 30s, Fiona's sister, perches beside her.
7 A IVO BRAJOVIC, 60s, Gideon's father, sits stiff with his coat on.
8 A JOLENE MARCH, 30s, Gideon's new girlfriend, carries two coffees.
9 A And KASPAR, 10, Fiona and Gideon's son, swings his legs on a chair too tall.
10 A ¶ Jolene offers a coffee to Fiona.
11 A Fiona doesn't take it.
12 A Hana takes it instead.
13 A Jolene smiles and sits.
14 D HANA: Thanks.
15 D JOLENE: You're welcome.
16 A ¶ Fiona stares at the ficus.
17 A Gideon taps his screen.
18 A Ivo clears his throat.
19 D IVO: Gideon.
20 D GIDEON: Dad.
21 D IVO: Put the phone away.
22 D GIDEON: It's work.
23 D FIONA: It's never work.
24 D GIDEON (not looking up): Fiona, not here.
25 D FIONA: Where, then?
26 D GIDEON: In there. With the lawyer.
27 D KASPAR: Mom, can I have a coffee?
28 D FIONA: No.
29 D JOLENE (to Kaspar): I'll get you a hot chocolate, sweetheart.
30 D FIONA: Don't call him that.
31 D JOLENE: I'm sorry?
32 D FIONA: Sweetheart.
33 A ¶ Hana stands.
34 A Fiona stands.
35 A Jolene stands.
36 A Gideon rises last.
37 A Ivo folds his arms.
38 A Kaspar slides off the chair, backs into the corner, and the five adults square off, voices rising, hands moving, until the door opens and a receptionist leans out.
39 A ¶ Everyone freezes.
40 D HANA (quietly): Sorry.
41 A ¶ She sits.
42 A They all sit.
43 A Kaspar slips back into his chair.
44 A Fiona accepts the coffee, finally.

### SCENE s01361 | INT. TAXIDERMY SHOP, BACK ROOM - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR CALEB ROURKE, OTTOLINE PRATT
* 1 A ¶ Glass eyes in drawers.
* 2 A A stuffed owl on a shelf.
* 3 A A work lamp over a half-skinned fox on a steel table.
* 4 A Sawdust drifts like slow snow.
5 A ¶ INSPECTOR CALEB ROURKE, 50s, tweed coat, notebook, turns a jar of amber eyeballs in his hands and sets it down.
6 A Across the table, MRS. OTTOLINE PRATT, 60s, gray bob, rubber apron, scrapes a pelt with a curved knife and does not look up.
7 D ROURKE (to the room): Does anyone else work late here?
8 D PRATT: Just me, Inspector.
9 D ROURKE (to himself): Of course.
10 A ¶ He walks the length of the shelves, peering into glass.
* 11 A A badger snarls.
* 12 A A heron stares.
13 A He stops at a stuffed spaniel and tilts his head.
14 D ROURKE [CONT'D]: This is a fresh one.
15 D PRATT: He belonged to the baker.
16 D ROURKE: The baker died in March.
17 D PRATT: He left instructions.
18 A ¶ She lifts the pelt and shakes it.
* 19 A Sawdust hangs in the air.
20 A Rourke touches the spaniel's flank, then draws his fingers back and sniffs them.
21 A Pratt scrapes harder, the knife rasping, the fox on the table seeming to listen, and Rourke crosses to her side, leans on the table, plucks a glass eye from the tray, and holds it to the lamp.
22 D ROURKE [CONT'D]: Mrs. Pratt, what is this?
23 D PRATT: An eye.
24 D ROURKE: It's a human eye.
25 D PRATT: So it is.
26 A ¶ She lays down the knife.
27 A The owl on the shelf shifts on its perch, just slightly, as if the floor had breathed.
28 D ROURKE (to the room): Everyone, stay where you are.
29 D PRATT: There's no everyone, Inspector.
30 D ROURKE (to himself): That's what worries me.

### SCENE s01362 | INT. LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): YUSUF, GRETA, LAMAR, WANJIRU, BARTHOLOMEW
* 1 A ¶ Humming dryers.
* 2 A Yellow light.
* 3 A A row of plastic chairs bolted to the floor.
4 A ¶ YUSUF, 50s, folds shirts.
5 A GRETA, 40s, stares at a spinning drum.
6 A LAMAR, 20s, sleeps with his head against a machine.
7 A WANJIRU, 30s, carries a basket and a toddler's sock, looking for the toddler.
8 A And BARTHOLOMEW, 70s, sits at the end of the row reading a seed catalogue he has read forty times.
9 A ¶ Yusuf squares a sleeve.
10 A Greta stands, opens her dryer, pulls out a handful of warm towels, sniffs them, and stuffs them back.
11 A Wanjiru lifts the toddler's sock to the light, sets it on a machine, and moves to the next row while Lamar shifts in his sleep and Bartholomew turns a page.
12 D YUSUF (not looking up): Greta, your towels are done.
13 D GRETA: I know.
14 D YUSUF: You're not taking them out.
15 D GRETA: Not yet.
16 D WANJIRU: Has anyone seen a little boy? Blue shirt, no left shoe?
17 D YUSUF: Sorry.
18 D GRETA: No.
19 D BARTHOLOMEW (without looking up): Under the folding table.
20 A ¶ Wanjiru bends.
21 A Under the table, a small boy lies on his stomach, asleep, one shoe off.
22 A She lifts him.
23 A He doesn't wake.
24 A She sets the sock on his foot, balances him on her hip, and carries the basket with her other hand.
25 D WANJIRU: Thank you.
26 D BARTHOLOMEW: Tomatoes this year.
27 A ¶ Wanjiru nods at nothing and goes out.
* 28 A The door chimes.
* 29 A The dryers keep humming.

### SCENE s01363 | INT. BRIDGE OF THE SURVEY SHIP PERIHELION - SHIP'S DAY
Detected names (may be incomplete or contain aliases): COMMANDER AOIFE BRANNIGAN, TENZIN LHAMO, RUKMINI SETH, JOSEF HALVORSEN, XIMENA TORRES, ORACLE
* 1 A ¶ A circular room with a ceiling of living glass, its panes drifting from rose to amber as the star beyond brightens.
* 2 A Consoles ripple like water.
* 3 A Six stations, six people, one steady hum.
4 A ¶ COMMANDER AOIFE BRANNIGAN, 50s, white hair cropped close, stands at the central rail with her hands behind her back.
5 A Dr. TENZIN LHAMO, 40s, sits at the spectrometer, scarf wrapped against the cold of the vacuum shield.
6 A RUKMINI SETH, 30s, pilot, long fingers on the helm sphere.
7 A JOSEF HALVORSEN, 60s, chief engineer, in a stained jumpsuit, taps a gauge.
8 A XIMENA TORRES, 20s, navigator, headset askew, twirls a pencil.
9 A ¶ And the sixth is a voice that has no body: the ship's ORACLE.
10 D ORACLE [V.O.] (calm, genderless): Perihelion in four minutes.
11 D BRANNIGAN: Thank you, Oracle.
12 D TENZIN: Spectral lines are doubling.
13 D JOSEF: Hull plating's holding.
14 D XIMENA: Helm, I'm showing a ripple at point two.
15 D RUKMINI: I feel it.
16 D ORACLE [V.O.]: Thermal shield at ninety-one percent.
17 D BRANNIGAN: Josef?
18 D JOSEF: Ninety-one is a good number.
19 D TENZIN (over Josef): Commander, there's a signal in the corona.
20 D XIMENA (over Tenzin): Pattern repeats every eleven seconds.
21 D RUKMINI (over Ximena): It's not noise.
22 D BRANNIGAN: Slow down. One at a time. Tenzin.
23 D TENZIN: Eleven pulses, a pause, eleven pulses. Structured.
24 D JOSEF: Stars don't count.
25 D BRANNIGAN: Oracle. Source?
26 D ORACLE [V.O.]: Source is within the corona. Origin: unknown. Analysis: a message.
* 27 A ¶ Silence.
* 28 A The glass overhead turns from amber to a pale, searching gold.
29 D XIMENA: What does it say?
30 D ORACLE [V.O.]: Ximena Torres, it says your name.
31 A ¶ Ximena drops her pencil.
32 A Brannigan does not move.
33 D BRANNIGAN: Hold course. Hold shield. Everyone breathe.
34 D RUKMINI: Holding.
35 D JOSEF: Holding.
36 D TENZIN (softly): Holding.
* 37 A ¶ The signal pulses again.
* 38 A Eleven.
* 39 A A pause.
* 40 A Eleven.

### SCENE s01364 | INT. NEONATAL ICU - NIGHT
Detected names (may be incomplete or contain aliases): GUNNAR ASPLUND, FATIMA HADDAD, SEUN, ADEBOYE, MARIBEL SOTELO
* 1 A ¶ Soft blue light.
* 2 A Incubators like glass bread boxes.
* 3 A Every monitor beats in a different key.
4 A ¶ GUNNAR ASPLUND, 50s, charge nurse, moves between the cribs checking tubes.
5 A FATIMA HADDAD, 30s, neonatologist, writes on a chart with a stub of pencil.
6 A OLUWASEUN "SEUN" ADEBOYE, 20s, resident, sips from a paper cup.
7 A MARIBEL SOTELO, 40s, a mother in a hospital gown, sits motionless beside incubator six, her hand pressed flat to the glass.
8 A ¶ Gunnar adjusts a drip.
9 A Fatima checks a number, writes it, checks it again.
10 A Seun yawns into the cup.
11 A Maribel hums, tuneless.
12 D GUNNAR: Bed six, stable.
13 D FATIMA: Bed six, thank you.
14 D SEUN: Is she asleep?
15 D GUNNAR: She's looking.
16 D SEUN: She's not allowed to look at the monitor.
17 D FATIMA (over Seun): Let her.
18 D MARIBEL (over Fatima): He moved his foot.
19 D GUNNAR: He did.
20 D FATIMA: He did, Mrs. Sotelo. That's very good.
21 D SEUN (to Gunnar): Do I say it's good?
22 D GUNNAR: It's good.
23 D SEUN (to Maribel): It's very good.
24 A ¶ Maribel presses her forehead to the glass.
* 25 A Her breath fogs it.
26 A Gunnar reaches over and wipes the fog away with his sleeve.
27 A ¶ He crosses to bed four.
28 A She studies the chart again.
29 A He yawns again.
* 30 A The monitors continue their small, stubborn song.
31 A Fatima glances up at the mother, then at the baby, then writes one more number in the corner of the chart and underlines it twice.

### SCENE s01365 | INT. FERRY TERMINAL CAFETERIA - EVENING
Detected names (may be incomplete or contain aliases): JOSEPHINE ARDEN, RAFAEL OLIVARES, LORRAINE, OSWIN PRICKETT, MINNOW
* 1 A ¶ Formica tables, a steam counter, a window with a view of a gray harbor.
* 2 A A chalkboard menu offers soup and sandwiches.
3 A ¶ JOSEPHINE ARDEN, 30s, in a camel coat, sits at a corner table with a thermos and a small suitcase.
4 A She watches the clock.
5 A RAFAEL OLIVARES, 30s, enters from the rain, shakes his umbrella, and freezes at the door.
6 A ¶ She sees him.
7 A He sees her.
8 A Neither moves.
9 A ¶ He crosses the room, hangs his coat on the chair across from hers, and sits.
10 A She pours tea into the thermos lid and slides it to him.
11 D RAFAEL: Josephine.
12 D JOSEPHINE: Rafa.
13 D RAFAEL: You look well.
14 D JOSEPHINE: You look wet.
15 D RAFAEL: It's raining.
16 D JOSEPHINE: I noticed.
17 A ¶ He drinks the tea.
18 A She watches his throat.
19 A She looks away at the harbor, where a ferry shoulders out into the chop.
20 D RAFAEL: Is that yours?
21 D JOSEPHINE: That one's not.
22 D RAFAEL: When's yours?
23 D JOSEPHINE: Nine-forty.
24 D RAFAEL: That's two hours.
25 D JOSEPHINE: It's a long ferry.
26 A ¶ A waitress, LORRAINE, 50s, calls from the pass-through window, her voice distant, sleepy.
27 D LORRAINE [O.S.]: Last orders, folks. Kitchen closes at seven.
28 D JOSEPHINE (to the window): Two soups, please.
29 D LORRAINE [O.S.]: Tomato or pea?
30 D JOSEPHINE (to Rafael): You hate pea.
31 D RAFAEL (to the window): Pea.
32 D JOSEPHINE: Rafa.
33 D RAFAEL: I've changed.
34 A ¶ Josephine's mouth twitches.
35 A She hides it behind her hand.
36 A Their soups arrive on a tray carried by an unseen hand, set on the counter.
37 A Rafael stands, collects them, sets them down.
38 A ¶ They eat.
* 39 A Spoons clink on bowls.
* 40 A The ferry horn sounds, deep, far away.
41 A ¶ OSWIN PRICKETT, 60s, a porter in a peaked cap, stops at the table and nods at her suitcase.
42 A A small girl, MINNOW, 7, hides behind his leg.
43 D OSWIN: Miss, the nine-forty's boarding early.
44 D JOSEPHINE: Thank you, Mr. Prickett.
45 A ¶ Minnow stares at Rafael, then at Josephine, then at their joined shadows on the table.
46 A Oswin steers her away.
47 D JOSEPHINE: How is she?
48 D RAFAEL: Who?
49 D JOSEPHINE: The woman who lives in your apartment.
50 D RAFAEL: She moved out.
51 D JOSEPHINE: I'm sorry.
52 D RAFAEL: Don't be. She took the couch.
53 D JOSEPHINE: She always liked that couch.
54 D RAFAEL: Everyone did.
* 55 A ¶ Silence.
56 A He stirs the soup.
57 A She pushes a crust around her plate.
* 58 A The rain intensifies on the window.
59 D RAFAEL [CONT'D]: Is it a good job?
60 D JOSEPHINE: It's a long way off.
61 D RAFAEL: I'd like to see where.
62 D JOSEPHINE: You'd hate it.
63 D RAFAEL: Probably.
64 D LORRAINE [O.S.]: Folks, we're closing.
65 D JOSEPHINE (to the window): One more minute.
66 D LORRAINE [O.S.]: One more minute.
67 A ¶ Rafael sets his spoon down and reaches across the table.
68 A His fingers rest on the edge of her thermos lid, not touching her hand.
69 A She doesn't move hers away.
70 D JOSEPHINE: Your tea's cold.
71 D RAFAEL: I like it cold now.
72 A ¶ She almost laughs.
73 A She turns her hand over.
74 A He takes it.
75 A They sit like that, hands joined across the Formica, while the ferry lights drift out of view and the rain goes on.

### SCENE s01366 | INT. HOTEL BALLROOM, EMPTY - DAWN
Detected names (may be incomplete or contain aliases): CLEMENTINE ASHFORD, HUGO BELMONT, PROSPER, VIVIAN BELMONT
* 1 A ¶ A vast chandeliered room stripped after a wedding.
* 2 A Rows of gold chairs stacked in towers.
* 3 A Streamers on the floor.
* 4 A Pale light creeping through tall windows.
5 A ¶ CLEMENTINE ASHFORD, 30s, in a rumpled bridesmaid's gown, kicks off her heels and sits on the edge of the stage with a bottle of champagne.
6 A HUGO BELMONT, 30s, in a tuxedo with the tie undone, leans on a stack of chairs.
7 D CLEMENTINE: You stayed.
8 D HUGO: I thought someone ought to.
9 D CLEMENTINE: It's six in the morning.
10 D HUGO: Is that what the light means?
11 D CLEMENTINE: It's a very honest light.
12 D HUGO: Then I'll be honest too. I wasn't staying for the wedding.
13 D CLEMENTINE: No?
14 D HUGO: No.
15 D CLEMENTINE: Who were you staying for?
16 D HUGO: The woman who danced with the groom's grandfather for three songs.
17 D CLEMENTINE: He taught me the waltz.
18 D HUGO: He taught you well.
19 D CLEMENTINE: He taught me everything but how to leave a party.
20 D HUGO: You're doing fine.
21 D CLEMENTINE: Am I?
22 D HUGO: You're sitting in a ballroom with a stranger and a bottle.
23 D CLEMENTINE: I wouldn't call you a stranger anymore.
24 D HUGO: What would you call me?
25 D CLEMENTINE: Hugo.
26 D HUGO: That's all?
27 D CLEMENTINE: That's a great deal, Hugo.
28 A ¶ A waiter, PROSPER, 20s, wheels in a bussing cart, whistling, and stops dead.
29 D PROSPER (to the room): Ma'am, sir. We close the room at six.
30 D HUGO (to Prosper): Then close it behind us.
* 31 A ¶ A door at the back opens.
32 A VIVIAN BELMONT, 60s, in a dressing gown and curlers, stands in the doorway with a mop.
33 D VIVIAN (to the room): Everyone out! The cleaners are coming!
34 D HUGO: Mother.
35 D VIVIAN (to Hugo): Hugo, put on your tie.
36 D CLEMENTINE (to herself): Of course she's his mother.
37 D VIVIAN (to Clementine): And you, my dear, are the girl who sang flat.
38 D CLEMENTINE: I was sharp.
39 D VIVIAN: Beautifully sharp. Sit. I'll bring coffee.
40 A ¶ She goes.
41 A Hugo and Clementine stare after her.
42 A Clementine puts down the bottle.
43 D CLEMENTINE: I think I'm in love with your mother.
44 D HUGO: Everyone is. It's tiresome.

### SCENE s01367 | INT. COUNTRY HOUSE LIBRARY - NIGHT
Detected names (may be incomplete or contain aliases): AGATHA PENHALLOW
* 1 A ¶ A room of leather and dust.
* 2 A A fire gone to embers.
* 3 A An oak desk, a reel-to-reel recorder, a glass of sherry with a lipstick ring.
* 4 A The French windows are shut, the curtains drawn.
5 A ¶ AGATHA PENHALLOW, 60s, silver hair, pearls, black gloves, sits upright at the desk with her hands folded.
6 A She presses a button.
* 7 A The reels turn.
8 D AGATHA [V.O.] (recorded, younger, brisk): Tape one. Tuesday the fourteenth. I begin this record of my own free will and in sound mind.
9 A ¶ She stops the tape.
10 A Rewinds a few inches.
11 A Presses play.
12 D AGATHA [V.O.] (recorded): Tuesday the fourteenth. I begin this record of my own free will and in sound mind.
13 A ¶ She smiles faintly and stops it again.
14 D AGATHA: Nobody ever believes a woman in pearls.
15 A ¶ She pours a little sherry.
16 A Does not drink it.
17 D AGATHA [CONT'D]: Quite right. Let me begin properly.
18 A ¶ She flips a switch.
* 19 A A red light glows.
20 D AGATHA [CONT'D]: My name is Agatha Penhallow. On the night of the fourteenth, my husband Lionel was found dead in this room. The coroner said his heart. The vicar said providence. The maid said nothing at all, which is why I trusted her.
21 A ¶ She leans back.
22 D AGATHA [CONT'D]: I should say first that I did not like Lionel. I should say second that I did not kill him. And I should say third, since these things are the sort that must be said third, that I know who did.
* 23 A ¶ A beat.
* 24 A The fire ticks.
25 D AGATHA [CONT'D]: It was the sherry. Lionel's sherry, from the decanter on that shelf. He never drank mine. He thought I would poison him. Quite the joke, in the end.
26 A ¶ She nods at the glass.
27 D AGATHA [CONT'D]: Someone who knew his habits, his decanter, and his hour. Someone who stood in this room while he drank and did not call for help. Someone with a key to the cellar and a reason to forget it.
28 A ¶ She lifts the glass, turns it in the firelight.
29 D AGATHA [CONT'D]: I tell you this, whoever you are, listening to this tape, because I have no one else to tell. The police have lost interest. The family has lost heart. And I have, I regret to say, lost my husband's will.
30 A ¶ She sets the glass down.
31 A Presses stop.
* 32 A ¶ For a time, nothing.
* 33 A The embers settle.
* 34 A A clock in the hall strikes twelve.
35 A ¶ She presses play again.
36 D AGATHA [V.O.] (recorded, in a different, older voice): Agatha, if you are hearing this, it is because I have already done it. Lionel did not drink the sherry. You did.
37 A ¶ Agatha stares at the machine.
38 A Her gloved hand finds the edge of the desk.
39 D AGATHA [V.O.] (recorded): I have been recording you for twenty years, my dear. Every night after supper. You never noticed the machine under the floorboard.
40 D AGATHA (whispering): Lionel.
41 D AGATHA [V.O.] (recorded): You will want to know where it is. Look under the third book on the second shelf. It is not a book.
42 A ¶ She rises.
43 A Crosses to the shelf.
44 A Counts.
45 A Pulls the third book.
* 46 A It is a hollow box.
* 47 A Inside, a second reel, labeled in Lionel's tight script: AGATHA, THE TRUTH.
48 A ¶ She holds it.
49 A Her hands shake.
50 D AGATHA (to herself): Oh, Lionel. You clever, clever man.
51 A ¶ She carries the reel back to the desk and threads it onto the spindle.
* 52 A The machine whirs.
53 D AGATHA [V.O.] (recorded, her own voice again, younger, laughing): Lionel, you have a terrible habit of listening at keyholes.
54 A ¶ Agatha's face goes white.
55 A She reaches for the switch.
56 D AGATHA [V.O.] (recorded): Tape one, take two. Let us begin again.
57 A ¶ She presses stop.
* 58 A Silence.
59 A She looks at the glass of sherry, the lipstick ring, the dying fire.
60 A Then, very slowly, she lifts the glass to her lips and drinks.
61 D AGATHA: Tuesday the fourteenth.
