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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusKT/group_0055.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01836_0 | EXT. TELEGRAPH OFFICE - HIGH DESERT TOWN - DAY
Detected names (may be incomplete or contain aliases): 
* 1 A ¶ A single-street town of sun-bleached boards.
* 2 A A telegraph pole leans over the roof of a squat office.
* 3 A Heat shimmers above the road.
* 4 A The hitching rail holds one horse and nothing else.

### SCENE s01836_1 | INT. TELEGRAPH OFFICE - CONTINUOUS
Detected names (may be incomplete or contain aliases): CLEM, ODOM, MARCUS, VOICE ON THE WIRE
* 1 A ¶ A narrow room.
* 2 A A counter with brass grille.
* 3 A A key and sounder on a desk, silent.
* 4 A A wall clock stopped at 4:10.
* 5 A Dust motes hang in a bar of light from the lone window.
6 A ¶ CLEMENTINE "CLEM" ODOM, 40s, sits behind the counter in a sleeve garter and green eyeshade.
7 A Lean, quiet, careful with her hands.
8 A She is sorting tickets into pigeonholes when the bell on the door jingles.
9 A ¶ A STRANGER enters.
10 A Late thirties, a long gray coat patched at the elbow, a hat pulled low over a face the sun has worked on for years.
11 A He carries a saddlebag over one shoulder and does not take it off.
12 D STRANGER: Afternoon.
13 D CLEM: Afternoon.
14 D STRANGER: You the operator?
15 D CLEM: I am.
16 D STRANGER: I need to send a wire.
17 D CLEM: Where to?
18 D STRANGER: Cheyenne.
19 A ¶ She slides a form across the counter and a pencil beside it.
20 A He looks at the pencil, then at her, and picks it up with his left hand.
21 A Clem notes this and says nothing.
22 D CLEM: Fifteen words for a quarter. Each one after is two cents.
23 D STRANGER: I'll keep it short.
24 A ¶ He writes slowly.
25 A Clem returns to her pigeonholes, but watches him sidelong.
* 26 A The saddlebag shifts on his shoulder with a faint metallic clink.
27 D CLEM: That heavy?
28 D STRANGER: Some.
29 D CLEM: You can set it down.
30 D STRANGER: I'm fine.
31 A ¶ He finishes, pushes the form back.
32 A She reads it, lips barely moving.
33 D CLEM: "Arrived. Will wait. Send word by Tuesday." No name.
34 D STRANGER: No name.
35 D CLEM: They'll want to know who it's from.
36 D STRANGER: They'll know.
* 37 A ¶ A silence.
* 38 A The sounder on the desk begins to chatter, a rapid stutter of clicks.
39 A Clem turns, listens, takes up a pencil, and writes on a pad as the code runs.
40 A Her face changes by degrees.
41 A The Stranger watches her pencil.
42 D CLEM [CONT'D] (without turning): You want to tell me your name, mister?
43 D STRANGER: Why?
44 D CLEM: Because this just came over the line for a man matching your description.
45 A ¶ She tears off the sheet, holds it up between two fingers.
46 A He doesn't take it.
47 D STRANGER: What's it say?
48 D CLEM: It says "Deputy Marcus Reyes, lawman, last seen heading north with a stolen payroll."
49 A ¶ The Stranger's right hand drifts toward his coat.
50 A Clem's drifts under the counter.
51 D STRANGER: Ma'am.
52 D CLEM: Marcus.
53 A ¶ He stops.
54 D MARCUS: Put your hand where I can see it.
55 D CLEM: I will when you've shown me yours.
56 A ¶ He slowly lifts both hands away from his coat.
* 57 A The saddlebag slides to the floor with a heavy chunk.
58 D MARCUS [CONT'D]: That's not the payroll.
59 D CLEM: Then what is it?
60 D MARCUS: Evidence.
61 D CLEM: Of what?
62 D MARCUS: Of who took it.
63 A ¶ Clem's hand comes up from beneath the counter, empty.
64 A She lays the sheet down on the grille.
65 D CLEM: Then you'd best read the rest of this.
66 A ¶ He steps up, reads.
67 A His lips tighten.
* 68 A The sounder chatters again.
69 D VOICE ON THE WIRE [V.O.] (telegraph operator, Cheyenne; read aloud by Clem): Marshal's office confirms. Reyes is clean. Hold him. Dangerous man trails.
70 A ¶ Marcus lifts his eyes from the page and meets Clem's.
* 71 A Outside, at the end of the street, the clatter of hooves begins and grows.
72 D CLEM: That'd be your dangerous man.
73 D MARCUS: Lock the door.
74 A ¶ She does.
75 A He pulls the shade.
76 A In the dim, they stand a pace apart, listening, while the hoofbeats come on and the sounder, on its desk, goes quiet.

### SCENE s01837 | INT. RETIREMENT HOME RECREATION HALL - DAY
Detected names (may be incomplete or contain aliases): MAX, OKONKWO-BELL, DESMOND, VISITOR, FLO, ABERNATHY, FRONT DESK, MOVER
* 1 A ¶ A long room with a linoleum floor the color of weak tea.
* 2 A A bingo cage in one corner, a folding table of sad cookies in another.
* 3 A On the wall, a banner reads "SPRING FLING" and has read so since the previous spring.
4 A ¶ Three people occupy the room.
5 A ¶ MAXINE "MAX" OKONKWO-BELL, 70s, a retired stunt performer in a velvet tracksuit, sits at the center table with a deck of cards fanned in one hand.
* 6 A Beside her, a dozing oxygen tank on wheels and a bowl of butterscotch.
7 A Across from her, her grandson DESMOND, 20s, thin, pressed shirt, a lanyard that says VISITOR, reads a text message with his thumb stuck in his mouth.
8 A And by the cookie table, hunched over a tray, is the nurse's aide FLORENCE "FLO" ABERNATHY, 50s, teal scrubs, hair under a net, who has been listening to the whole room for years and revealing nothing.
* 9 A ¶ A phone on the wall buzzes.
10 A Nobody answers it.
* 11 A It buzzes again.
12 D MAX: Desmond, your telephone is ringing.
13 D DESMOND: It's a text, Nana.
14 D MAX: That's the wall phone.
15 D DESMOND: Oh.
16 A ¶ He glances at it.
* 17 A It buzzes.
18 A He looks at Max, who raises one eyebrow so high it nearly leaves her face.
19 A He sighs, crosses the room, and lifts the receiver.
20 A Flo watches him.
21 A Max shuffles.
22 A The cards ride a bridge, snap, and settle.
23 A Desmond holds the phone out from his ear as a voice squawks.
24 D FRONT DESK [V.O.] (over the wall phone): Good morning, Mr. Okonkwo-Bell. Your grandmother has a delivery.
25 D DESMOND: My grandmother has a what?
26 D FRONT DESK [V.O.]: A delivery. Two men are bringing it up.
27 D DESMOND (turning): Nana, what did you order?
28 D MAX: Nothing.
29 D DESMOND: They say it's a delivery.
30 D MAX: Then it's a surprise. Hang up.
31 D DESMOND: It's from the front desk.
32 D MAX: Then hang up on the front desk.
33 A ¶ He hangs up.
34 A At once the double doors swing open and two movers in blue coveralls wheel in a crate the size of a refrigerator, strapped to a hand truck.
35 A They park it in the middle of the floor.
36 A Without a word they unstrap it, tip it forward, and peel away the cardboard.
* 37 A Beneath is a vintage motorcycle, gleaming chrome, a leather jacket draped across the seat.
38 A ¶ Desmond walks around it twice.
39 A Flo sets down her tray.
40 A Max does not rise.
41 D DESMOND: Nana.
42 D MAX: Hm?
43 D DESMOND: Is this yours?
44 D MAX: Was.
45 D DESMOND: Nana, you said you sold it in 1994.
46 D MAX: I said a lot of things in 1994.
47 A ¶ Flo approaches the bike, runs a thumb along the handlebar, and glances back at Max.
48 D FLO: Miss Max, it's not on the activity calendar.
49 D MAX: Flo, I will tell you what's on my calendar.
50 D FLO: You're due for your pills at noon.
51 D MAX: My calendar says I'm due for a ride at noon.
52 D DESMOND: You cannot ride it.
53 D MAX: I can sit on it.
54 D DESMOND: You can't sit on it either. Dr. Pruitt specifically--
55 D MAX: Dr. Pruitt isn't here, and the man on the bike, in the photograph over there, was the best looking thing in the state of Ohio.
56 A ¶ She nods at a framed photograph on the wall, a younger Max in a leather jacket mid-leap over a line of cars.
57 A Desmond looks at the photograph, then at the bike, then at the movers, who have stepped back and are clutching a clipboard.
58 D FLO (to the movers): Who sent this?
59 D MOVER (shrugging): Sign here, ma'am.
60 D FLO: Who's the sender?
61 D MOVER: It says "Harlan."
62 A ¶ Max's hand stops on the cards.
* 63 A The room goes quiet.
64 A A small, amused crinkle appears at the corner of her eye, then spreads.
65 D MAX: That son of a gun.
66 D DESMOND: Who's Harlan?
67 D MAX: Your grandfather's brother. He died in the spring.
68 D DESMOND: Then who sent it?
69 D MAX: He did, Desmond. He did. He always said he'd send me something nice when he got where he was going.
70 A ¶ She gets up.
71 A She walks to the bike.
72 A Flo hurries to steady the oxygen tank on its wheels.
73 A Max lays her hand on the seat and strokes it with two fingers.
74 D MAX [CONT'D]: Desmond. Fetch the helmet.
75 D DESMOND: There's a helmet?
76 D MAX: There's always a helmet.
77 A ¶ He lifts the leather jacket and finds one beneath it.
78 A He holds it out.
79 A Max puts it on, buckles the strap, and swings a leg over the seat with a fluency that stops everyone's breath.
80 D FLO (quietly): Miss Max.
81 D MAX: Flo, if you tell Dr. Pruitt, I'll haunt you.
82 D FLO: He'll see the tank.
83 D MAX: Then I'll leave the tank.
84 A ¶ She unhooks the oxygen tube, hands it to Flo, and grips the handlebars.
85 A Desmond covers his face with both hands.
86 A Flo stares at the tube.
* 87 A ¶ The bike does not start.
* 88 A It doesn't have a key.
89 A Max grins, rests her forehead against the tank, and begins to laugh until the laughing turns to a wheeze, then a cough.
90 A Flo is at her side in an instant with the tube.
91 D FLO [CONT'D]: Breathe, Miss Max.
92 D MAX (between breaths): I am. I am. I'm breathing.
93 D DESMOND: Nana.
94 D MAX: Desmond, I want to sit here for a minute.
95 A ¶ He pulls a chair beside the bike and sits.
96 A Flo sits on the other side.
97 A Max rests her hands on the handlebars, eyes closed, and for a while none of them says anything.
98 A The movers back out of the room.

### SCENE s01838 | EXT. LAKESIDE BOATHOUSE - DUSK
Detected names (may be incomplete or contain aliases): TEDDY, LUND, ARMAND BELLWETHER, CORINNE
* 1 A ¶ A weathered boathouse leaning over green water.
* 2 A Paper lanterns hang from the rafters, half of them unlit.
* 3 A A phonograph on an upturned crate turns a record, scratchy and slow.
4 A ¶ THEODORA "TEDDY" LUND, 30s, in a yellow dress that has seen better summers, sits on the dock with her feet in the water.
5 A Next to her, ARMAND BELLWETHER, 30s, a rower's shoulders under a rumpled linen shirt, holds two glasses and a bottle without a label.
6 A Behind them on the boathouse porch stand her sister CORINNE, 40s, arms folded, and Armand's father OLD MR. BELLWETHER, 70s, in a cardigan, who has said nothing since they arrived.
7 D TEDDY: Armand, you're going to drop it.
8 D ARMAND: I'm not going to drop it.
9 D TEDDY: You're holding it like a baby.
10 D ARMAND: A baby wouldn't have a cork.
11 D CORINNE: Teddy. Dinner.
12 D TEDDY: In a minute, Cor.
13 D CORINNE: You said that an hour ago.
14 D TEDDY: I meant it then too.
15 A ¶ Armand pours.
* 16 A The wine is pale.
17 A They clink.
18 A Old Mr. Bellwether coughs once and turns toward the water.
19 D ARMAND: Father, you want some?
20 D OLD MR. BELLWETHER: I want to know why my son is sitting on a dock in a good shirt.
21 D ARMAND: Because I've been meaning to ask her something.
22 D TEDDY (smiling): Then ask.
23 A ¶ He sets his glass down.
* 24 A A dragonfly lands on its rim.
25 A Corinne's arms unfold.

### SCENE s01839 | INT. THRONE ROOM OF THE GLASS KING - NIGHT
Detected names (may be incomplete or contain aliases): KING ORIVEN CLEAR, LADY MYRRHEN, SER BRANDOLF GRAYMANE, GRIMBOLD STONEHAND, THISTLE, BROTHER ANSELM, ^SER BRANDOLF
* 1 A ¶ A hall of translucent pillars lit from within by drifting blue flame.
* 2 A Snow falls indoors from a ceiling that has no ceiling.
* 3 A At the far end, a crystalline throne.
4 A ¶ KING ORIVEN THE CLEAR, 60s, crowned in frost, sits motionless upon it.
5 A At his right stands his sorceress sister LADY MYRRHEN, 50s, hooded.
6 A To his left, the captain of his guard, SER BRANDOLF GRAYMANE, 40s, in silver plate.
7 A Before the throne, kneeling on cold stone, are three travelers: a tattooed dwarf-smith named GRIMBOLD STONEHAND, a young archer with a green scarf named THISTLE, and a robed monk named BROTHER ANSELM.
* 8 A ¶ Snowflakes catch on their shoulders.
9 D KING ORIVEN: Rise.
10 A ¶ They rise.
11 A Thistle stumbles.
12 A Grimbold steadies her.
13 D KING ORIVEN [CONT'D]: You carry the Ember.
14 D GRIMBOLD: We carry nothing.
15 D THISTLE: We carry a letter.
16 D BROTHER ANSELM: We carry a request.
17 D LADY MYRRHEN (simultaneously): They carry the Ember.
18 D ^SER BRANDOLF: They carry a lie.
19 A ¶ King Oriven raises one hand.
* 20 A Silence.
* 21 A A flake lands on his open palm and does not melt.
22 D KING ORIVEN: Show me the letter.
23 A ¶ Thistle fumbles at her satchel.
24 A Grimbold holds up his hand to stop her.
25 D GRIMBOLD: It's not for you.
26 D SER BRANDOLF: You speak to a king.
27 D GRIMBOLD: I speak to a man with a very cold hall.
28 D THISTLE: Grimbold.
29 D BROTHER ANSELM: Peace, friends. Majesty, the letter is for the Queen of the Ash Court.
30 D LADY MYRRHEN: There is no Queen of the Ash Court.
31 D BROTHER ANSELM: There was.
32 D SER BRANDOLF: The Ash Court burned.
33 D THISTLE: That's why we need her.
34 D KING ORIVEN (softly): Enough.
35 A ¶ Everyone stops.
36 A He stands, slowly, his crown ringing like a struck bell.
37 A He descends one step, then another.
38 A He stops in front of Thistle and looks into her scarf, her face, her quiver.
39 D KING ORIVEN [CONT'D]: Child. Who gave you that scarf?
40 D THISTLE: My mother.
41 D KING ORIVEN: And her name?
42 D THISTLE: Ashlyn.
43 A ¶ Lady Myrrhen's hood falls back.
44 A Ser Brandolf's hand lowers from his sword.
45 A King Oriven closes his eyes.
46 D KING ORIVEN [CONT'D]: Then the letter is for me.

### SCENE s01840 | INT. MIDNIGHT BOWLING ALLEY - NIGHT
Detected names (may be incomplete or contain aliases): RICO VALDEZ, DAISY MORALES
* 1 A ¶ Lane 14.
* 2 A Neon pins.
* 3 A The ball return coughs.
* 4 A A scoreboard overhead flickers and shows two names: RICO and BLANK.
5 A ¶ RICO VALDEZ, 40s, a heavy man in a purple league shirt, sits on the bench retying his shoes.
6 A His ball is a scuffed black orb with initials in gold.
7 A He has bowled a perfect game twice in his life, and tonight he is eleven frames in.
* 8 A ¶ On the lane beside him, no one.
* 9 A The scoreboard says BLANK.
* 10 A The seat is empty.
11 A ¶ He rises, takes the ball, steps to the line.
12 A He breathes.
13 A Rolls.
* 14 A The ball hooks gently and blasts the pocket.
* 15 A Strike.
* 16 A The scoreboard dings.
17 A ¶ He does not celebrate.
18 A He walks to the ball return and waits.
* 19 A ¶ A shadow falls across the approach.
20 A A figure stands in the doorway of the lane, small, a tiny silhouette.
21 A A girl, maybe nine, in a pink hoodie, holds a ball two sizes too heavy for her.
22 A ¶ The girl is DAISY MORALES, and she has been looking at him since the ninth frame.
23 D RICO: Closed to the public.
24 D DAISY: I'm not the public.
25 D RICO: Who are you, then?
26 D DAISY: The next frame.
27 D RICO: That's not a thing.
28 D DAISY: It is on your scoreboard.
29 A ¶ He turns.
* 30 A The scoreboard above reads BLANK.
* 31 A As he watches, the letters rearrange.
* 32 A DAISY.
33 D RICO: Somebody typed that.
34 D DAISY: Somebody did.
35 D RICO: Who?
36 D DAISY: My dad. He said you'd show me how.
37 D RICO: Your dad.
38 D DAISY: He bowled here. Before.
39 D RICO (slowly): Before what?
40 D DAISY: Before you took the last frame.
41 A ¶ Rico stares.
* 42 A The ball return rumbles.
* 43 A His ball rolls up and bumps against his hand, and he does not pick it up.
44 D RICO: Kid. What's your father's name?
45 D DAISY: Manuel.
46 D RICO: Manny Morales.
47 D DAISY: Yes.
48 D RICO: Manny's dead.
49 D DAISY: I know.
50 D RICO: He had a seven-ten split in the tenth. Twenty-three years ago. I bowled against him.
51 D DAISY: He said you let him have it.
52 D RICO: I didn't let him.
53 D DAISY: He said you did.
54 D RICO: He missed. He missed the seven.
55 D DAISY: He didn't miss. You moved the pin.
56 A ¶ Rico laughs, a dry bark.
57 A Then he stops.
58 D RICO: Who told you that?
59 D DAISY: My dad. In a letter. He wrote it before.
60 D RICO: Before.
61 D DAISY: He wanted me to ask you why.
62 A ¶ Rico sinks onto the bench.
* 63 A The neon buzzes.
64 A Daisy walks the length of the lane toward him, ball dragging, until she stands in front of him.
65 D RICO: Because I was twenty-two, kid. Because I wanted to be the guy who bowled a three hundred in the state final. And he was better, and I knew it.
66 D DAISY: So you cheated.
67 D RICO: I did.
68 D DAISY: Did you win?
69 D RICO: I won.
70 D DAISY: Did you bowl three hundred?
71 D RICO (barely audible): No. Two seventy-one.
72 D DAISY: Dad said you'd say two seventy-one.
* 73 A ¶ Silence.
74 A Rico looks at her, at the ball, at the empty lane.
75 D RICO: What do you want from me?
76 D DAISY: Show me how to throw.
77 D RICO: That's all?
78 D DAISY: That's all.
79 A ¶ He rises.
80 A He places her fingers in the holes.
81 A He adjusts her wrist.
82 D RICO: Don't look at the pins. Look at the arrow.
83 D DAISY: Which arrow?
84 D RICO: The one in the middle.
85 A ¶ She rolls.
86 A The ball wobbles down the lane, drifts left, and drops into the gutter.
87 A Daisy deflates.
88 D DAISY: That's bad.
89 D RICO: That's a start.
90 D DAISY: Again?
91 A ¶ He fetches her ball.
92 A She rolls.
* 93 A It strikes three pins.
94 A She jumps.
95 A Rico, for the first time in the scene, smiles, and the scoreboard dings.

### SCENE s01841 | INT. FISH MARKET OFFICE - EARLY MORNING
Detected names (may be incomplete or contain aliases): MIRIAM KOSKI, DETECTIVE ANSEL WOO, DETECTIVE RUTH DELACROIX, ENZO FERRARA
* 1 A ¶ A glass-walled office above the ice floor.
* 2 A Fluorescent hum.
* 3 A A wall calendar of tuna.
4 A ¶ MIRIAM KOSKI, 50s, the market's bookkeeper, sits at a steel desk.
5 A Her ledger is open.
6 A Her cardigan smells faintly of brine.
7 A ¶ Across from her sits DETECTIVE ANSEL WOO, 40s, notebook out.
8 A He smiles pleasantly.
9 A Behind him, leaning on the filing cabinet, is his partner DETECTIVE RUTH DELACROIX, 30s, silent, chewing gum.
10 A ¶ Near the door stands the owner, ENZO FERRARA, 60s, in rubber boots, wiping his hands on a rag.
11 A He has been wiping them for some time.
12 D WOO: Quiet morning.
13 D MIRIAM: They start at four.
14 D WOO: And the books balance.
15 D MIRIAM: They always balance.
16 A ¶ Ruth pushes off the cabinet and drifts to the window.
17 A Enzo steps aside to let her pass, and as she goes by she picks a pen off the desk, rolls it in her fingers, sets it back.
18 A Miriam watches the pen.
19 A Woo flips a page of the notebook.
20 A Enzo tosses the rag onto a chair, crosses the room to the door, and locks it, quietly, with a click that makes Miriam's shoulders lift.
21 A Ruth turns from the window.
22 D RUTH: Miriam. Where's the second ledger?
23 D MIRIAM: There isn't a second.
24 D RUTH: She says there isn't.
25 D WOO (to Enzo): He says there isn't, too.
26 D ENZO (tight smile): There isn't.
27 A ¶ Miriam lowers her eyes to the ledger.
28 A Her finger finds a column, and a drop of sweat falls onto the page.

### SCENE s01842 | EXT. WAGON CIRCLE - DUSK
Detected names (may be incomplete or contain aliases): WALT BREDEN, DOROTHEA, HENRY, LUIS ARRIAGA, CATHERINE MULDOON, ABEL
* 1 A ¶ Six wagons drawn into a ring on a wind-scoured flat.
* 2 A A fire burns low in the center.
* 3 A The sky is bruise-colored.
* 4 A Far off, a coyote starts and stops.
5 A ¶ The company is at supper.
6 A WALT BREDEN, 50s, the wagon master, sits on an upturned barrel with a tin plate on his knee.
7 A His wife DOROTHEA, 40s, stirs the pot and slaps a fly off her arm.
8 A Their son HENRY, 13, whittles a stick to nothing.
9 A The scout LUIS ARRIAGA, 30s, squats by the fire with a coffee pot, pouring into mismatched cups for the others.
10 A The widow CATHERINE MULDOON, 60s, rocks in a canvas chair, knitting, her needles clicking.
11 A And the stranger they picked up two days back, a heavy-set man with a limp who calls himself ABEL, 40s, sits a little way off with his plate untouched.
* 12 A ¶ Nobody says much.
* 13 A The knitting needles click.
14 D WALT (to everyone): We make the river by Thursday if the oxen hold.
15 D LUIS: They'll hold. It's the wheels I'd worry about.
16 D DOROTHEA (to Henry): Eat your beans.
17 D HENRY: I'm not hungry.
18 D DOROTHEA: Eat them anyway.
19 A ¶ Walt sets his plate aside, rises, and walks the length of the circle with his thumbs in his belt, checking each wagon's brake.
20 A Luis fills his own cup.
21 A Catherine knits.
22 A Henry flips the stick into the fire.
23 A Dorothea snatches the plate from his hands and hands it to Abel instead, who accepts it with a nod and begins to eat.
24 A Walt, at the far wagon, stops and mutters to himself.
25 D WALT (muttered): Third spoke's cracked.
26 D LUIS (from the fire): What's that?
27 D WALT: Nothing.
28 A ¶ He kneels to inspect it.
29 A Catherine's needles stop.
30 D CATHERINE (to no one in particular): There's a rider.
31 A ¶ Everyone turns.
32 A Far across the flat, a single horseman crests a low rise and halts, black against the afterglow.
33 D HENRY (whispering): Is it Indians?
34 D DOROTHEA: Hush.
35 D LUIS (low, to Walt): He's alone.
36 D WALT (rising): Then he's no trouble. Henry, fetch the rifle.
37 D HENRY: Yes, sir.
38 A ¶ He scrambles to the wagon, rummages, returns with it.
39 A Walt takes it, checks the chamber, and lays it across his arm.
40 A Abel has stopped eating.
41 A He has set his plate on the ground and is looking, not at the rider, but at Luis, who is looking back.
42 A ¶ Catherine resumes her knitting.
* 43 A The rider does not move.
* 44 A The fire pops.
45 D ABEL (to himself): Told him not to follow.
46 A ¶ Nobody hears him but Luis.

### SCENE s01843 | INT. TRAUMA BAY - NIGHT
Detected names (may be incomplete or contain aliases): SADIE OYELARAN, BEN, KOWALCZYK, ILSE VANTERPOOL, MOSES HARGROVE
* 1 A ¶ A curtained bay under hard white light.
* 2 A Monitors beep.
* 3 A A gurney sits canted in the center, stained sheets bunched at the foot.
* 4 A Instruments on a steel tray, a red crash cart, a clock that reads 2:47.
5 A ¶ DR. SADIE OYELARAN, 30s, surgical cap, sleeves pushed up, stands over the gurney with both hands on the chest of an unseen patient and counts under her breath.
6 A Across the gurney, NURSE BENEDICT "BEN" KOWALCZYK, 40s, squeezes a bag-valve mask on a rhythm.
7 A At the foot, with a clipboard, stands the resident DR. ILSE VANTERPOOL, 20s, pale, hair coming loose.
8 A Nearest the door, arms folded, watches the attending, DR. MOSES HARGROVE, 60s, silver hair, a stethoscope draped like a scarf.
9 D SADIE: Thirty. Check.
10 D BEN: No pulse.
11 D SADIE: Again.
12 A ¶ She resumes compressions.
* 13 A The monitor spikes, flatlines, spikes.
14 A Ilse writes a note and drops the pen.
15 D ILSE: Dr. Hargrove, we're at twelve minutes.
16 D HARGROVE: I can read a clock, Dr. Vanterpool.
17 D ILSE: Sir, I think we should--
18 D HARGROVE: Think quietly.
19 D BEN: Sadie, your arms.
20 D SADIE: They're fine.
21 D BEN: Switch with me.
22 D SADIE: I said they're fine.
23 A ¶ He lets go of the mask, rounds the gurney, and puts a hand on her shoulder.
24 A She does not look up.
25 A He waits.
26 A After a beat she steps aside, wiping her brow with her forearm, and he takes her place.
27 A She takes the bag-valve mask.
28 D SADIE [CONT'D]: Ben. Count.
29 D BEN (compressing): One, two, three, four.
* 30 A ¶ The monitor beeps once.
31 A Everyone freezes.
* 32 A It beeps again, uneven.
33 A Ilse looks up.
34 A Hargrove uncrosses his arms.
35 D ILSE: That's a rhythm.
36 D HARGROVE: That's an artifact.
37 D SADIE (still bagging): That's a rhythm.
38 D HARGROVE: Dr. Oyelaran.
39 D SADIE: Look at the screen, Moses.
40 A ¶ He does.
* 41 A A ragged line climbs and descends, climbs and descends.
42 D BEN (breathless): Pulse. I've got a pulse.
43 D SADIE: Pressure?
44 D ILSE: Seventy over forty.
45 D SADIE: Fluids. Wide open.
46 A ¶ Ilse darts to the cart.
47 A Hargrove steps forward, takes the stethoscope from his neck, presses it to the patient's chest, and listens.
* 48 A The line on the monitor holds.
49 A He straightens slowly.
50 D HARGROVE: Good work.
51 D SADIE: That's not a thing you say. That's a thing you do.
52 D HARGROVE (quietly): Meaning?
53 D SADIE: Meaning you called time of death in your head six minutes ago.
54 D HARGROVE: I did not.
55 D SADIE: You did.
56 A ¶ Ben's compressions slow.
57 A Ilse has stopped midway to the cart.
58 D BEN (low): Sadie.
59 D SADIE: No. He did. Say it, Moses.
60 D HARGROVE (after a long pause): I did.
61 D SADIE: Thank you.
62 A ¶ She steps back, peels off a glove, and flexes her hand.
63 A Ben takes the mask and bags, gently.
64 A Ilse brings a bag of fluids and hangs it on the pole.
* 65 A The monitor beeps on, steady, small, alive.
66 A ¶ Hargrove turns to the door.
67 A He pauses there, back to them.
68 D HARGROVE [CONT'D]: I'll tell the family.
69 D SADIE: No. I will.
70 D HARGROVE: They'll ask who made the call.
71 D SADIE: Then I'll tell them she did.
72 A ¶ She looks at Ilse.
73 A Ilse looks at her.
74 A Neither says anything.
75 A ¶ Hargrove exits.
* 76 A The curtain swings behind him.
77 A Sadie leans over the sink and runs cold water over her wrists.
78 A Ben watches her.
79 D BEN: You okay?
80 D SADIE (to the water): Ask me in an hour.
81 A ¶ Ilse pulls the sheet up over the patient's chest and, after a moment, tucks it under the chin as if the patient were a child.

### SCENE s01844 | INT. SWIM STADIUM - STARTING BLOCKS - MORNING
Detected names (may be incomplete or contain aliases): KEIKO TANAKA
* 1 A ¶ Chlorine haze.
* 2 A A thousand empty seats.
* 3 A A pool lit like a jewel, eight lanes, seven of them still.
4 A ¶ KEIKO TANAKA, 20s, in a black racing suit, swim cap tight, stands behind block four shaking out her arms.
5 A A waterproof earbud sits in one ear.
6 A She presses it and her own voice, recorded the night before, plays back thin and steady.
7 D KEIKO [V.O.] (voice memo): Hands loose. Shoulders down. You've done this ten thousand times.
8 A ¶ She steps up.
9 A Toes curl over the edge.
10 A She bounces once on her heels, flexes her fingers, rolls her neck, glances at the empty stands, then at the water, then at the clock above lane eight that reads zero.
* 11 A Her breath fogs in the cold air.
12 A She presses the earbud again.
13 D KEIKO [V.O.] (voice memo): Don't think about her. Think about the wall.
14 A ¶ She pulls the goggles down, snaps the strap, and tucks the earbud deeper.
15 A She lowers into a crouch.
16 D KEIKO (whispering): Breathe.
* 17 A ¶ A beat.
* 18 A A horn blares from nowhere.
19 A She dives.
* 20 A Under the surface there is silence, and then only the sound of her own heart.

### SCENE s01845 | INT. CHEESE CAVE - DAY
Detected names (may be incomplete or contain aliases): BARNABY QUILL, INGRID SOLBERG, ^INGRID
* 1 A ¶ Damp stone.
* 2 A Wheels of cheese on wooden racks stretch into the dark.
* 3 A A single bare bulb.
4 A ¶ BARNABY QUILL, 40s, in a hairnet and white coat, taps a wheel with a wooden mallet and listens.
5 A Behind him stands INGRID SOLBERG, 30s, an inspector in a lanyard, with a clipboard and a thermometer.
6 D INGRID: Mr. Quill. Your humidity's at ninety-four percent.
7 D BARNABY: That's the idea.
8 D INGRID: The code says ninety.
9 D BARNABY: The cheese says ninety-four.
10 D INGRID: The cheese doesn't write the code.
11 D BARNABY: The cheese is older than the code.
12 A ¶ She checks her clipboard.
13 A He taps another wheel.
14 D INGRID: There's mold on the north wall.
15 D BARNABY: That's a feature.
16 D INGRID: It's black.
17 D BARNABY: That's a deluxe feature.
18 D INGRID: It's growing on the cheese.
19 D BARNABY: That's the cheese.
20 D INGRID (flat): Mr. Quill.
21 D BARNABY: Ms. Solberg.
22 A ¶ She thrusts the thermometer into the nearest wheel.
* 23 A A long beat.
24 A She pulls it out and reads it.
25 D INGRID: Fifty-four degrees.
26 D BARNABY: Perfect.
27 D INGRID: It should be fifty.
28 D BARNABY: Perfect plus four.
29 D INGRID: I'm writing you up.
30 D BARNABY: You're writing me up for being warm?
31 D INGRID: For several things.
32 D BARNABY: Name three.
33 D INGRID: Humidity. Temperature. Mold.
34 D BARNABY: Name a fourth.
35 D INGRID (pausing, scanning the room): Smell.
36 D BARNABY (delighted): Now you're getting it.
37 D INGRID: It's not a compliment.
38 D BARNABY (simultaneously): It's not a crime.
39 D ^INGRID (simultaneously): It's not a compliment.
40 A ¶ They stare at each other.
* 41 A The bulb flickers.
* 42 A A drop of water lands on her clipboard.
43 D BARNABY: Ms. Solberg, would you like to taste?
44 D INGRID: No.
45 D BARNABY: Just a sliver.
46 D INGRID: I am an inspector. I cannot be bribed.
47 D BARNABY: It's not a bribe. It's an appetizer.
48 A ¶ She hesitates.
49 A He cuts a thin wedge with a wire, offers it on the blade.
50 A She takes it between two fingers, sniffs, and chews once.
51 A Her eyes close.
52 D INGRID (muffled): Oh, no.
53 D BARNABY: Yes.
54 D INGRID: Oh, that's unfair.
55 D BARNABY: Ninety-four percent.
56 A ¶ She sits down on a wheel of cheese, still chewing, and writes a single line on the clipboard.
57 D INGRID: "Approved with reservations."
58 D BARNABY: What reservations?
59 D INGRID: That I get another piece.

### SCENE s01846 | INT. DERELICT TERRAFORMING STATION - ATRIUM - DAY
Detected names (may be incomplete or contain aliases): SERAFINA KOWALSKI, ISAAC WREN
* 1 A ¶ A vast greenhouse dome, cracked, vines pushing through.
* 2 A Rust-red dust drifts in sunbeams.
* 3 A Rows of dead hydroponic trays, a collapsed gantry, a fountain that flows blue, impossibly, in the center.
4 A ¶ SERAFINA KOWALSKI, 40s, weathered pressure suit, helmet cradled under one arm, steps through a broken airlock.
5 A She stops.
6 A Scans.
* 7 A A scanner on her wrist pings.
8 A ¶ Ten meters behind her, ISAAC WREN, 20s, her tech, ducks through the same gap.
9 A He is thin, too young for the suit, visor fogged.
10 D SERAFINA: Don't touch anything.
11 D ISAAC: I wasn't.
12 A ¶ She walks on.
13 A He follows, hands visibly clasped behind his back.
14 A She crouches by a tray and brushes dust from a withered plant.
15 A He peers over her shoulder.
16 D ISAAC [CONT'D]: That's not possible.
17 D SERAFINA: It's dead.
18 D ISAAC: It's dead and still green.
19 A ¶ She turns it over.
* 20 A The underside is rough, silvery, almost metal.
21 A She snaps a leaf.
* 22 A It rings.
23 D ISAAC [CONT'D]: That's a bell.
24 D SERAFINA: It's a plant.
25 D ISAAC: It's a bell with roots.
26 A ¶ She stands.
* 27 A Her boot scrapes.
* 28 A The whole dome hums, one low note, like a struck glass.
29 A Isaac freezes.
30 A She raises a hand.
* 31 A The note builds.
32 D SERAFINA (whispering): Back to the airlock.
33 D ISAAC: I'm trying.
34 A ¶ He steps back and bumps a tray.
* 35 A A hundred leaves ring at once, a chord that rolls across the atrium and returns.
36 A Both of them cover their helmets with their hands.
* 37 A The fountain's blue turns white, then green.
38 A ¶ She grabs his arm.
39 A They run.
* 40 A Behind them the plants begin to bend toward the sound, every dead stalk leaning like a congregation.
41 A ¶ At the airlock she shoves him through and follows, slamming the hatch.
42 A They stand panting in the cramped chamber.
* 43 A Outside the viewport, the dome glows.
44 D ISAAC [CONT'D]: Are we going back?
45 D SERAFINA: No.
46 D ISAAC: Good.
47 A ¶ She watches the glow.
48 A A faint smile.
49 D SERAFINA: We're going to need a bigger microphone.

### SCENE s01847 | INT. LOCKER ROOM - DAY
Detected names (may be incomplete or contain aliases): COACH ELLIOT PRUITT, RAFI, DELGADO, DUKE ANDERSON, MARCUS WYNN
* 1 A ¶ A cinderblock locker room under a low ceiling.
* 2 A Benches bolted to the floor.
* 3 A A whiteboard with a play half erased.
* 4 A The air smells of liniment and wet tape.
* 5 A They lost by one point, and nobody has moved to the showers.
6 A ¶ COACH ELLIOT PRUITT, 50s, sits on the bench by the door with his cap in his hands.
7 A At the far locker, still in uniform, sits RAFAEL "RAFI" DELGADO, 24, the point guard, staring into his open locker.
8 A His backup, DUKE ANDERSON, 22, towers over the bench with a towel around his neck.
9 A And the team captain, MARCUS WYNN, 28, leans against the whiteboard with his arms crossed over a ruined jersey.
10 D COACH PRUITT (to all of them): Listen up.
11 A ¶ Nobody does.
12 A Rafi pulls his shoe off, studies it, puts it back on.
13 D COACH PRUITT [CONT'D] (louder): I said listen up.
14 D DUKE: We're listening.
15 D MARCUS: We're listening, Coach.
16 D RAFI (muttering to himself): Should've passed.
17 D COACH PRUITT: What was that, Rafi?
18 D RAFI: Nothing.
19 D MARCUS: He said he should've passed.
20 D RAFI: I said nothing.
21 D DUKE: You had Marcus open.
22 D RAFI: Marcus was not open.
23 D MARCUS: I was wide open.
24 D RAFI: You were covered.
25 D MARCUS: By a guy half my size.
26 D COACH PRUITT: Enough.
27 D DUKE (overlapping): He had the lane.
28 D RAFI (overlapping): It was a double team.
29 D MARCUS (overlapping): It was one guy.
30 D COACH PRUITT: I said enough!
31 A ¶ His voice cracks against the cinderblock.
32 A The three of them go still.
33 A Coach Pruitt puts his cap on, takes it off, sets it on his knee.
34 D COACH PRUITT [CONT'D] (quietly): That was my call. The last play. I drew it up. Not Rafi's.
35 A ¶ Rafi looks at him.
36 A Marcus uncrosses his arms.
37 D MARCUS: Coach.
38 D COACH PRUITT: Nobody's showering yet. We sit here for five minutes and nobody says one word.
39 D DUKE: Five minutes?
40 D COACH PRUITT: Duke, that's a word.
41 A ¶ Duke sits.
42 A Rafi takes off the other shoe.
43 A Marcus slides down the whiteboard until he is on the floor.
44 A Coach Pruitt looks at the clock.
45 D COACH PRUITT [CONT'D] (to himself): Four fifty-eight.

### SCENE s01848_0 | EXT. DUST STORM - FRONTIER MAIN STREET - DAY
Detected names (may be incomplete or contain aliases): SHERIFF AUGUSTA PIKE
* 1 A ¶ Wind.
* 2 A Grit.
* 3 A A hanging sign banging.
* 4 A Visibility ten feet.
5 A ¶ A figure in a duster walks down the center of the street.
6 A Head down.
7 A Hand on a holster.
8 A This is SHERIFF AUGUSTA PIKE, 40s.
9 A ¶ She stops outside the saloon.
10 A ¶ She listens.
* 11 A ¶ Inside the saloon, a piano plays one bar.
* 12 A Stops.
13 A ¶ She pushes through the swinging doors.

### SCENE s01848_1 | INT. SALOON - CONTINUOUS
Detected names (may be incomplete or contain aliases): SHERIFF PIKE, CRANE, BARKEEP, JONAH PIKE
* 1 A ¶ Dim.
* 2 A Empty tables.
3 A A man at the bar, his back to her.
4 A Black hat.
5 A Long coat.
6 A He does not turn.
7 A ¶ She steps in.
* 8 A Boots on boards.
* 9 A Slow.
10 A ¶ He lifts a glass.
11 A Drinks.
12 D SHERIFF PIKE: Mr. Crane.
13 D CRANE: Sheriff.
14 D SHERIFF PIKE: You're a long way from Laramie.
15 D CRANE: He's longer.
16 D SHERIFF PIKE: Who?
17 D CRANE: The man you're looking for.
18 A ¶ She moves to the bar.
19 A Stands two stools down.
20 D SHERIFF PIKE: That so?
21 D CRANE: Ask the barkeep.
22 A ¶ She looks.
23 A Behind the bar a man slumps on the floor, hands tied, mouth gagged.
24 A The BARKEEP, 50s.
25 A His eyes plead.
26 A ¶ She keeps her face still.
27 D SHERIFF PIKE: Untie him.
28 D CRANE: Don't think so.
29 D SHERIFF PIKE: I wasn't asking.
30 A ¶ He turns, finally.
31 A Pale eyes.
32 A A thin smile.
33 D CRANE: Augusta. We both know who's in the back room.
34 A ¶ Her hand tightens on the holster.
35 D SHERIFF PIKE: Say it.
36 D CRANE: Your brother.
37 A ¶ She says nothing.
* 38 A The storm howls against the shutters.
* 39 A A floorboard groans overhead.
40 D CRANE [CONT'D]: He wants to talk.
41 D SHERIFF PIKE: Does he.
42 D CRANE: Before the hanging.
43 A ¶ She draws.
44 A So does he.
45 A Both guns level.
* 46 A Neither fires.
47 A The barkeep whimpers.
* 48 A ¶ From the back stair, a voice, rough and tired.
49 D JONAH [O.S.]: Gus. Put it down.
50 A ¶ She doesn't.
51 A Crane doesn't.
* 52 A The piano, somewhere, plays the same bar again.
53 A ¶ Then she lowers the gun.
54 A Crane smiles.
55 A She turns to the stair.
56 D SHERIFF PIKE (softly): Jonah.
* 57 A ¶ The stair creaks.
58 A JONAH PIKE, 40s, her brother, descends out of the dark.
59 A Shackles on his wrists.
60 A A gaunt, unshaven man.

### SCENE s01849 | INT. HOSPITAL ROOM 412 - NIGHT
Detected names (may be incomplete or contain aliases): AMINA FAROUK, WALTER NKEMELU
* 1 A ¶ A single bed.
* 2 A An IV pole.
* 3 A A window onto a dark parking lot.
* 4 A The monitor's green line crawls.
5 A ¶ DR. AMINA FAROUK, 40s, rumpled scrubs, white coat over her arm, sits on the edge of a chair, a tablet balanced on her knee.
6 A In the bed lies WALTER NKEMELU, 70s, a retired bus driver, oxygen cannula in his nose, one hand taped to a board.
7 A ¶ Amina scrolls through the chart.
8 A Walter watches the ceiling tile.
9 D AMINA: Your numbers are better than yesterday.
10 D WALTER (hoarse): I'm a bus driver. I know what that means.
11 D AMINA: It means better.
12 D WALTER: It means you're being polite.
13 D AMINA: I'm being accurate.
14 D WALTER: That's the same thing in your line of work.
15 A ¶ She sets the tablet down.
16 D AMINA (to the room, softly): Okay.
17 D WALTER: Who are you talking to?
18 D AMINA: Nobody. Habit.
19 A ¶ He turns his head on the pillow.
20 D WALTER: You say that when you're about to tell me something I won't like.
21 D AMINA: I do not.
22 D WALTER: You do. Last Tuesday. Before you said the word "biopsy."
23 A ¶ She picks at the cuff of her coat.
24 D AMINA: The scan came back.
25 D WALTER: And?
26 D AMINA: And it's not what we hoped.
27 A ¶ Walter says nothing.
* 28 A The monitor beeps.
29 A She speaks without looking at him.
30 D AMINA [CONT'D] (to herself): Come on, Amina.
31 D WALTER: Say it plain.
32 D AMINA: It's spread. To the liver.
33 A ¶ Walter closes his eyes.
34 A His fingers curl on the board, the tape pulling.
35 D WALTER: How long?
36 D AMINA: I don't want to guess.
37 D WALTER: Guess.
38 D AMINA: Months. Maybe six.
39 D WALTER: Maybe.
40 D AMINA: I'm sorry.
41 D WALTER: Don't apologize. You didn't give it to me.
42 D AMINA: No.
43 D WALTER: Sit closer. I can't see you.
44 A ¶ She slides the chair to the bed.
45 A He opens his eyes and finds her face.
46 D WALTER [CONT'D]: My daughter's flying in Thursday.
47 D AMINA: I'll make sure the visiting hours are flexible.
48 D WALTER: I'd like to tell her myself.
49 D AMINA: Of course.
50 D WALTER: Not on the phone.
51 D AMINA: Not on the phone.
52 A ¶ He nods.
53 A Then, quietly, to the empty air:
54 D WALTER [CONT'D] (muttered): Six months. Might as well finish the route.
55 A ¶ Amina laughs, a short wet sound, and wipes her eye with her sleeve.
56 A Walter pats her hand with the one that isn't taped.
57 D WALTER [CONT'D] (to the room): All right, then.
58 D AMINA: All right.

### SCENE s01850 | INT. RIVERBOAT STATEROOM - NIGHT
Detected names (may be incomplete or contain aliases): CAPTAIN SILAS BARROW, MADAME CELESTINE ROUX, ^CELESTINE, MARGUERITE
* 1 A ¶ 1871.
* 2 A A cramped cabin lit by a swaying oil lamp.
* 3 A A trunk, a washstand, a narrow bunk.
* 4 A The paddlewheel thuds somewhere beneath the floor.
* 5 A Rain streaks the porthole.
6 A ¶ CAPTAIN SILAS BARROW, 50s, in a rumpled blue coat, sits on the trunk with a ledger on his knee.
7 A Across from him, in the only chair, sits MADAME CELESTINE ROUX, 40s, black lace, a small valise in her lap.
8 A She has not taken her gloves off.
9 D SILAS: You've paid for passage to Natchez, Madame Roux.
10 D CELESTINE: I have.
11 D SILAS: We reach Natchez at dawn.
12 D CELESTINE: I am aware.
13 D SILAS: Then I wonder why you ask to speak with me at midnight.
14 D CELESTINE (to herself): Because midnight is when truths wake.
15 D SILAS: I beg your pardon?
16 D CELESTINE: Nothing, Captain. A habit of mine.
17 A ¶ He closes the ledger.
* 18 A The lamp swings.
* 19 A Shadows run across the walls and back.
20 D SILAS: Madame, I run a respectable boat.
21 D CELESTINE: No one doubts it.
22 D SILAS: Then you'll understand that when a lady boards with no luggage but a valise, and a name that is not the one on her papers, I am obliged to ask.
23 D CELESTINE: Ask.
24 D SILAS: Who are you?
25 D CELESTINE: I am the sister of the man you hanged in Vicksburg.
26 A ¶ Silas stands.
* 27 A The ledger slides to the floor.
28 A Celestine does not move.
* 29 A The paddlewheel thuds on.
30 D SILAS (simultaneously): I did not hang him.
31 D ^CELESTINE (simultaneously): You signed the paper.
32 A ¶ They stare.
33 A Silas lowers himself back onto the trunk.
34 D SILAS: That was war, Madame.
35 D CELESTINE: War ended in sixty-five.
36 D SILAS: He was a spy.
37 D CELESTINE: He was a boy of nineteen with a letter.
38 D SILAS: Madame Roux--
39 D CELESTINE: You may call me Marguerite. That is my name.
40 D SILAS (slowly): Marguerite.
41 A ¶ She opens the valise.
* 42 A Inside, on a bed of black velvet, lie a revolver and a folded paper.
43 A Silas looks at them for a long moment.
44 D SILAS [CONT'D] (muttering): So it ends.
45 D MARGUERITE: No. That is for you to choose.
46 A ¶ She takes out the paper, unfolds it, and lays it on his knee.
47 A He reads it.
48 A His lips move.
49 A He finishes.
50 A He looks up.
51 D SILAS: This is a confession.
52 D MARGUERITE: It is yours to sign.
53 D SILAS: And if I do not?
54 A ¶ She lifts the revolver from the velvet and sets it beside the paper on his knee, butt first.
55 D MARGUERITE: Then you will have both.
* 56 A ¶ Rain hammers the porthole.
* 57 A The lamp steadies.
58 A Silas reaches slowly for the pen on the washstand.

### SCENE s01851 | INT. NIGHT TRAIN DINING CAR - NIGHT
Detected names (may be incomplete or contain aliases): POLLY, SCHRADER, MISS VERONIKA HAAS, KAZ, BLUME
* 1 A ¶ A narrow dining car, white tablecloths, brass lamps.
* 2 A The rails clack beneath.
* 3 A Outside the window, the dark country streams by.
4 A ¶ CAPTAIN LEOPOLD "POLLY" SCHRADER, 50s, stout, a retired customs officer in a three-piece suit, cuts into a steak with ceremony.
5 A Across from him, MISS VERONIKA HAAS, 30s, silver cigarette holder, sips from a thin glass and watches him over the rim.
6 A At the next table, alone, sits their waiter-turned-witness, KAZIMIR "KAZ" BLUME, 20s, in a white jacket, polishing the same spoon for the fourth time.
7 D POLLY: You don't eat, Miss Haas.
8 D VERONIKA: I never do at night.
9 D POLLY: A woman who doesn't eat at night is a woman with something on her mind.
10 D VERONIKA: Or on her conscience.
* 11 A ¶ The train lurches.
* 12 A Her glass slides an inch.
13 A Polly catches it before it falls, and holds it a moment too long in his hand.
14 D POLLY: Careful.
15 D VERONIKA: Thank you, Captain.
16 D KAZ (from the next table): Sir, if I may. The steak. Is it satisfactory?
17 D POLLY: Kaz, my boy, the steak is excellent.
18 D KAZ: I'm glad, sir. I prepared it myself.
19 A ¶ Polly's knife stops.
20 D POLLY: Did you.
21 D KAZ: It was the last of the lot. The cook was indisposed.
22 A ¶ Veronika sets her glass down very softly.
* 23 A The lamps shake.
* 24 A The knife rests on the plate.
25 A Polly dabs his lips with a napkin, rises to his full, unsteady height, and clutches the table.
26 D POLLY [CONT'D]: Veronika. I feel--
27 A ¶ She is already on her feet.
28 A She catches his arm as he buckles, easing him into the chair.
29 A Kaz has put down the spoon.
30 D VERONIKA: Kaz. The window.
31 D KAZ: Yes, miss.
32 A ¶ He slides the sash up.
* 33 A Night air floods the car.
34 A Polly breathes, hard, his eyes on her.
35 D POLLY (whispering): Veronika. The steak.
36 D VERONIKA: I know, Polly.
37 D POLLY: You?
38 D VERONIKA: Not me, darling.
39 A ¶ She turns, slowly, to Kaz, who stands in the open window with the spoon in his hand and a different expression than before.
40 D KAZ (quietly): Miss Haas. You weren't meant to be at this table.

### SCENE s01852 | INT. ARCHIVE READING ROOM - DAY
Detected names (may be incomplete or contain aliases): IMOGEN HARCOURT, THADDEUS HARCOURT, ROSALIE, OSWALD BRIGHT, CALLUM FINCH
* 1 A ¶ A high-ceilinged room of old oak tables and green-shaded lamps.
* 2 A Dust turns in the light from tall windows.
* 3 A Shelves of cloth-bound volumes rise into shadow.
* 4 A A clock above the door ticks like a patient animal.
5 A ¶ Five people sit scattered through the room, none of them looking at each other.
6 A ¶ At the center table, a woman in her fifties named IMOGEN HARCOURT turns pages of a parish register with a gloved finger.
7 A She reads with her lips slightly parted, and each time she reaches the bottom of a page she touches the corner of her eye.
8 A Across the room, her estranged husband THADDEUS HARCOURT, sixty, pretends to study a map at the window, though his eyes follow her reflection in the glass.
9 A At the long table by the door, their daughter ROSALIE, twenty-six, builds a tower of index cards and knocks it down by accident, and builds it again.
10 A Two tables over, the archivist OSWALD BRIGHT, forty, in sleeve garters and half-moon glasses, stamps slips with a dry rhythm.
11 A And in the far corner sits a young man named CALLUM FINCH, twenty-eight, a stranger to the family, with a laptop he never opens.
12 A ¶ Imogen reaches the bottom of another page.
13 A She sighs, and the sound carries.
14 A ¶ Thaddeus turns from the window.
15 A He crosses the room, slowly, as if wading, and stops at her table.
16 A She does not look up.
17 A He draws out the chair opposite, and she lets him.
18 A ¶ He sits.
19 A He folds his hands on the table, then unfolds them.
20 A She turns another page.
21 A He watches her thumb smooth the margin.
22 A ¶ When he finally speaks, it is quiet, and the archivist's stamp falters.
23 D THADDEUS: You found it, then.
24 D IMOGEN: I found a name.
25 D THADDEUS: Which?
26 D IMOGEN: Not yours.
27 A ¶ He nods, as if this is the answer he expected and the one he dreaded.
28 A Across the room, Rosalie has stopped building.
29 A She watches her parents through the glass of the index-card tower, and Callum, at the corner table, finally opens his laptop and then closes it again.
30 A Oswald sets down his stamp, takes off his glasses, and polishes them on his sleeve, a private courtesy.
31 D IMOGEN [CONT'D]: Thaddeus, why did you come?
32 D THADDEUS: To see if you'd read it.
33 D IMOGEN: I'm reading it.
34 D THADDEUS: And?
35 A ¶ She turns the register around on the table so he can read.
36 A He leans in.
37 A His finger finds the line.
38 A His mouth moves.
39 A When he looks up, his eyes are wet.
40 D THADDEUS [CONT'D]: That's my mother's hand.
41 D IMOGEN: Yes.
42 D THADDEUS: She never said.
43 D IMOGEN: No.
* 44 A ¶ The clock ticks.
45 A Rosalie rises, crosses to them, and stands behind her mother's chair with one hand on its back.
46 A Imogen reaches up without turning and covers it with her own.
47 A ¶ Callum, in the corner, slips his laptop into its bag and stands.
48 A He leaves, quietly, the door sighing shut behind him.
49 A Oswald resumes his stamping, softer than before.

### SCENE s01853 | INT. DEEP SPACE RELAY STATION - CONTROL ROOM - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): COMMANDER EVELYN ADEYEMI, LIEUTENANT PIERRE DUMONT, ENSIGN TAMSIN BELL, VOICE, TRAVELER
* 1 A ¶ Brass-toned consoles, curved glass, a chart table out of some earlier century's idea of the future.
* 2 A Soft music plays from a hidden speaker.
* 3 A A blue star turns slowly beyond the viewport.
4 A ¶ COMMANDER EVELYN ADEYEMI, 50s, in a crisp gray uniform, stands at a console with a cup of tea.
5 A Beside her, the station's navigator LIEUTENANT PIERRE DUMONT, 30s, leans on the chart table over a spread of star maps.
6 A At the communications desk, the young radio operator ENSIGN TAMSIN BELL, 20s, wears a headset and absentmindedly twirls a pencil.
* 7 A ¶ A soft chime.
8 A Tamsin sits up.
9 D TAMSIN: Commander. Incoming signal on the long channel.
10 D EVELYN: Source?
11 D TAMSIN: Unknown. Wide beam, no authentication.
12 D PIERRE: Probably a drifter.
13 D EVELYN: Probably.
14 A ¶ Tamsin flips a switch.
* 15 A A hush of static fills the room, and out of it a voice, warm, old, faintly amused, as if from the bottom of a well.
16 D VOICE [V.O.] (over speaker): Relay Station Nine, this is a friend. Please do not be alarmed.
17 A ¶ Pierre and Tamsin exchange a look.
18 A Evelyn sets her tea down.
19 D EVELYN: Identify yourself.
20 D VOICE [V.O.]: Names are a luxury. Call me the Traveler.
21 D PIERRE (whispering): That's not a ship's name.
22 D TRAVELER [V.O.]: I am not a ship.
* 23 A ¶ The lights dim.
* 24 A A shape begins to resolve in the viewport, a tall, indistinct column of pale light rising out of the star's glare.
25 A Tamsin takes off her headset.
26 D EVELYN: Ensign. Raise the shields.
27 D TAMSIN: They're up, Commander. They've been up.
28 D TRAVELER [V.O.]: There is no need. I am here only to deliver a warning.
* 29 A ¶ The pale shape leans closer to the glass.
30 A Pierre steps back and knocks a star map to the floor.
31 A Evelyn does not blink.
32 D EVELYN: What warning?
33 A ¶ The shape raises what might be a hand.
* 34 A In the viewport, the blue star flickers once, twice.
35 D TRAVELER [V.O.]: Your sun is not what you think.
* 36 A ¶ Silence.
* 37 A The music, absurdly, continues.
38 A Evelyn crosses to the speaker, finds the knob, and turns it off.
39 D EVELYN: Go on.
* 40 A ¶ The Traveler's voice, when it comes, is very gentle.
41 D TRAVELER [V.O.]: It is a door. And somebody is knocking.
42 A ¶ Evelyn looks at Pierre and Tamsin.
43 A Neither speaks.
* 44 A Beyond the glass, the blue star flickers a third time, and the whole station groans like a ship in a swell.
45 D TAMSIN (small voice): Commander, I think we should go home.
46 D EVELYN (quietly): We are home.
47 A ¶ The shape in the window lowers its hand, and the star goes dark.

### SCENE s01854 | INT. COURTHOUSE CONFERENCE ROOM - DAY
Detected names (may be incomplete or contain aliases): DEFENSE ATTORNEY LEONOR ASTURIAS, PROSECUTOR, DESMOND TULLY, DEPUTY OWEN PRATT, ^OWEN
* 1 A ¶ A windowless room.
* 2 A A long table scarred by decades of folders.
* 3 A A water pitcher beading with sweat.
* 4 A Fluorescent light hums like a distant insect.
5 A ¶ DEFENSE ATTORNEY LEONOR ASTURIAS, 40s, charcoal suit, reading glasses pushed into her hair, shuffles exhibits into a neat pile.
6 A Across from her, a PROSECUTOR, 30s, crisp, a pen behind his ear, taps a laptop.
7 A Between them, at the end of the table, sits their client MR. DESMOND TULLY, 50s, in an ill-fitting suit that smells of mothballs, hands clasped.
8 A ¶ The prosecutor, DEPUTY DA OWEN PRATT, looks at the clock.
9 D OWEN: We have ten minutes before the judge.
10 D LEONOR: We have as long as it takes.
11 D DESMOND: Can I say something?
12 D LEONOR (simultaneously): No.
13 D ^OWEN (simultaneously): Please.
14 A ¶ They look at each other.
15 A Desmond looks at both.
16 D DESMOND: I was going to say I'd like some water.
17 A ¶ Leonor pours.
18 A Her hand is steady.
19 A Owen's pen is not.
20 D OWEN: Ms. Asturias. The offer is five years.
21 D LEONOR: My client doesn't accept.
22 D OWEN: It's a fair number.
23 D LEONOR: It's a number.
24 D DESMOND: Ten minutes, he said?
25 D OWEN: Nine.
26 D LEONOR: Mr. Pratt, I'd like a word with my client.
27 D OWEN: Of course.
28 A ¶ He doesn't move.
29 A She does not either.
* 30 A The pitcher drips.
31 A Desmond sips from the paper cup, studies the rim, and sets it down very carefully.
32 D DESMOND: I didn't do it.
33 D LEONOR (quietly): We know.
34 D OWEN (also quietly): The evidence says otherwise.
35 D DESMOND: Then the evidence is wrong.
36 D OWEN: It's a very strong file, Mr. Tully.
37 D DESMOND: My wife says you can make a file say anything.
38 D OWEN (a flicker of something): Your wife testified.
39 D DESMOND: She said what she saw.
40 D LEONOR: She said what she believed.
41 D OWEN: That's the same thing in a courtroom.
42 A ¶ Leonor pulls a single sheet from the middle of her pile and slides it across the table.
43 A Owen reads it.
44 A The pen stops tapping.
45 A His color changes by degrees.
46 D OWEN [CONT'D]: Where did you get this?
47 D LEONOR: It was in your discovery.
48 D OWEN: It wasn't.
49 D LEONOR: Page four hundred and twelve.
50 D OWEN: That's not possible.
51 D DESMOND (to no one): Is it good?
52 D LEONOR: Mr. Tully, it's very good.
53 A ¶ Owen reaches for his laptop.
54 A His fingers hover over the keys.
* 55 A Outside, a bailiff's voice calls a case number, and a door slams.
56 D OWEN: Give me a minute.
57 D LEONOR: Take nine.

### SCENE s01855 | INT. OPERA HOUSE - FLY GALLERY - NIGHT
Detected names (may be incomplete or contain aliases): DELPHINE ARCHAMBAULT, MONTY, PRYCE, JIN-HO BAEK, ^JIN-HO
* 1 A ¶ Catwalks and ropes in the dark above the stage.
* 2 A Below, far down, a soprano rehearses a long note, and the sound rises through the grating.
* 3 A Canvas drops hang like sails.
4 A ¶ Three figures work their way along a narrow gantry.
5 A The first, a woman in a stagehand's black, carries a coil of rope across her shoulder and does not look down.
6 A The second, a short man in a tuxedo with his collar undone, grips the rail with both hands, his knuckles pale, and mouths a count of the steps.
7 A The third, a lean figure in a hooded sweatshirt, walks backward along the plank, scanning the dark behind them.
8 A ¶ The woman is DELPHINE ARCHAMBAULT, 40s.
9 A The short man is MONTGOMERY "MONTY" PRYCE, 50s.
10 A The hooded figure is JIN-HO BAEK, 20s.
11 D DELPHINE (whispering): Chandelier winch is on the left.
12 D MONTY (simultaneously): I can't do heights.
13 D ^JIN-HO (simultaneously): Left or my left?
14 A ¶ Delphine stops.
15 A She lays the rope on the plank, takes Monty's hand off the rail, and places it on her shoulder.
16 A He grips.
17 A She walks on, with the little man shuffling behind her and the hooded boy turning to follow, still facing backward.
* 18 A ¶ Below, the soprano finishes.
* 19 A Applause, scattered.
* 20 A A voice calls "Take ten."
* 21 A The lights on the stage flicker down.
22 A The three on the gantry freeze, then move again, faster.
23 D MONTY: Where's the box?
24 D JIN-HO: Under the winch.
25 D DELPHINE: It's not under it. It's inside it.
26 A ¶ They reach the winch, a squat iron drum with a hand crank.
27 A Delphine kneels, runs her fingers along its housing, and finds a latch.
* 28 A It clicks.
* 29 A A panel swings open.
* 30 A Inside, wrapped in velvet, a jeweled mask the size of a dinner plate gleams in the dark.
31 A ¶ Monty exhales.
32 A Jin-ho whistles softly.
33 A Delphine lifts the mask, turns it over, and holds it up to the glow of the stage light below.
34 D JIN-HO: It's smaller than I thought.
35 D MONTY: It's bigger than I feared.
36 D DELPHINE: It's exactly right.
* 37 A ¶ A footstep, distant, rings on iron.
* 38 A A flashlight beam swings along the far end of the gantry.
39 A All three duck.
40 A Monty presses himself to the plank.
41 A Jin-ho slides the panel shut with one finger.
42 A Delphine tucks the mask inside her jacket and unspools the rope.
* 43 A ¶ The flashlight comes nearer and stops, a long way below the gantry, searching.
44 A Delphine looks at Monty.
45 A Monty looks at Jin-ho.
46 A Jin-ho shrugs and cups his hands.
47 D JIN-HO (in a gruff voice): Just rigging, boss!
* 48 A ¶ The beam lingers, then turns away.
* 49 A Footsteps recede.
50 A Monty lets out a laugh that is half sob.
51 D MONTY: Don't fall. He said don't fall.
52 D DELPHINE (grinning): Good advice.
53 A ¶ She ties the rope to a rail, tosses the free end into the dark, and swings a leg over the edge.

### SCENE s01856 | INT. COUNTRY HOUSE LIBRARY - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR HORACE LANGLEY, LADY PRUDENCE WHITMORE
* 1 A ¶ Leather, mahogany, a banked fire.
* 2 A A grandfather clock strikes eleven.
* 3 A Rain beats at the French windows.
4 A ¶ INSPECTOR HORACE LANGLEY, 50s, trench coat draped over a chair, stands at the mantelpiece studying a small bronze statue.
5 A At the desk by the window sits LADY PRUDENCE WHITMORE, 60s, black dress, hands folded over a closed ledger.
* 6 A A telephone sits between them.
7 D LANGLEY: A lovely piece.
8 D PRUDENCE: My late husband's.
9 D LANGLEY: He had taste.
10 D PRUDENCE: He had money.
11 D LANGLEY: They're not always the same.
12 A ¶ She does not smile.
13 A He sets the statue down and turns it a quarter inch, so its face looks toward the door.
14 D LANGLEY [CONT'D]: The butler says he found the body at seven.
15 D PRUDENCE: He did.
16 D LANGLEY: And you were?
17 D PRUDENCE: In the conservatory. Watering the orchids.
18 D LANGLEY: At seven in the evening.
19 D PRUDENCE: Orchids keep their own hours.
* 20 A ¶ The telephone rings.
21 A Both look at it.
* 22 A It rings again.
23 A Prudence lifts the receiver, listens, and holds it out to Langley.
24 D PRUDENCE [CONT'D]: For you.
25 A ¶ Langley takes the receiver and carries it, on its long cord, out through the door into the hall.
26 A Prudence listens.
* 27 A She cannot see him, and his voice reaches her only in pieces.
28 D LANGLEY [O.S.]: Langley. Yes. The gardener. He saw whom?
* 29 A ¶ A pause.
30 D LANGLEY [O.S., CONT'D]: Lady Whitmore. In the garden, at half past six. Carrying a spade. Thank you, Sergeant.
* 31 A ¶ The receiver is replaced.
32 A He returns, trailing the cord, and sets the telephone down.
* 33 A The clock ticks.
* 34 A The fire pops.
35 A Prudence folds her hands over the ledger, a little tighter.
36 D PRUDENCE: Orchids need potting, Inspector.
37 D LANGLEY: So they do.
38 A ¶ He lifts the bronze statue and weighs it in his palm.
39 D LANGLEY [CONT'D]: Lady Whitmore. I think we should begin again.

### SCENE s01857 | INT. PARKING GARAGE LEVEL P4 - NIGHT
Detected names (may be incomplete or contain aliases): NORA VESS, ELISE MARCHETTI
* 1 A ¶ Concrete.
* 2 A Sodium light.
* 3 A A single car, hood up.
4 A ¶ NORA VESS, 30s, journalist.
5 A Leather jacket.
6 A She stands behind a pillar.
7 A ¶ Thirty feet away, in the car's glow, a woman waits.
8 A DR. ELISE MARCHETTI, 50s.
9 A Raincoat.
10 A A briefcase.
11 A ¶ Nora steps out.
12 D NORA: You're early.
13 D ELISE: So are you.
14 D NORA: You said midnight.
15 D ELISE: I said when it was safe.
16 A ¶ Nora walks closer.
* 17 A Her heels echo.
18 A Elise watches.
19 D NORA: Is it safe?
20 D ELISE: No.
21 D NORA: Then why are we here?
22 D ELISE: Because it won't get safer.
23 A ¶ Elise sets the briefcase on the hood.
24 A Her hands tremble.
25 A She lifts the latches.
26 D ELISE [CONT'D]: Before I open this. One condition.
27 D NORA: Name it.
28 D ELISE: My name stays out of it.
29 D NORA: Your name is the story.
30 D ELISE: Then there's no story.
31 A ¶ Nora folds her arms.
32 A Elise doesn't blink.
33 D NORA: You called me.
34 D ELISE: I know.
35 D NORA: You said they'd kill you.
36 D ELISE: I said they might.
37 D NORA: Does that change the condition?
38 D ELISE: It makes it firm.
* 39 A ¶ A car engine growls somewhere above.
40 A Both women look up.
* 41 A The sound passes.
42 D NORA: Where do they park?
43 D ELISE: Level two. Executive spaces.
44 D NORA: Then we have time.
45 D ELISE: We have fifteen minutes.
46 A ¶ Nora pulls a recorder from her jacket and sets it on the hood beside the case.
47 A She presses record.
* 48 A A red light glows.
49 D NORA: Say it for the tape.
50 D ELISE: I can't.
51 D NORA: Then show me.
52 A ¶ Elise opens the lid.
* 53 A Papers, hundreds of them, and a small drive.
54 A She lifts a page and holds it under the light.
55 D ELISE: Lot four-four-one-seven. The shipment dates are wrong.
56 D NORA: Wrong how?
57 D ELISE: Backdated. All of them.
58 D NORA: By how long?
59 D ELISE: Six months.
60 D NORA: That's fraud.
61 D ELISE: It's worse.
62 A ¶ She hands the page across.
63 A Nora reads.
64 A Her lips move.
65 A She looks up.
66 D NORA: Those are drug trials.
67 D ELISE: Yes.
68 D NORA: Patients died.
69 D ELISE: Eleven.
70 D NORA: And they knew.
71 D ELISE: They knew in March.
72 A ¶ Nora lets the page fall to the hood.
73 A Her face is pale.
74 D NORA: You signed the reports.
75 D ELISE: I did.
76 D NORA: Then you're in it.
77 D ELISE: I know.
78 D NORA: So why come to me?
79 D ELISE: Because I'd rather go down with the truth than up with the lie.
80 A ¶ Nora studies her.
* 81 A The light buzzes overhead.
* 82 A In the distance, a second engine starts.
83 D NORA: Keep talking.
84 D ELISE: Not here.
85 D NORA: Where?
86 D ELISE: Take the case. Go.
87 D NORA: And you?
88 D ELISE (a thin smile): I'll be right behind you.
89 A ¶ Nora snaps the case shut, lifts it, and backs toward the ramp.
90 A Elise watches her go.
* 91 A The engine closes in.

### SCENE s01858 | INT. JUNKYARD OFFICE TRAILER - NIGHT
Detected names (may be incomplete or contain aliases): TESSA MORRIS, DEKE MORRIS, ^TESSA
* 1 A ¶ A cramped trailer office.
* 2 A A fluorescent tube buzzes over a metal desk piled with receipts.
* 3 A A space heater glows orange.
* 4 A On the wall, a calendar from 2009.
* 5 A An old CB radio crackles on a shelf.
6 A ¶ TESSA MORRIS, 16, in a hoodie too big for her, sits on a broken office chair, knees up, a Polaroid camera in her lap.
7 A Across from her, perched on the desk, is her older cousin DEKE MORRIS, 19, hoodie of his own, a rolled cigarette behind his ear.
8 D DEKE: You don't have to do this.
9 D TESSA: Yes I do.
10 D DEKE: Mom's not gonna know.
11 D TESSA: That's not why.
12 D DEKE: Then why?
13 D TESSA: Because he said I couldn't.
14 D DEKE: Who said?
15 D TESSA: Dad.
16 D DEKE: Uncle Roy said a lot of things.
17 D TESSA: He said I couldn't take a picture worth keeping. He said I'd quit.
18 D DEKE: You've been at it two years.
19 D TESSA: That's quitting to him.
20 A ¶ She winds the camera.
21 A Deke picks at the cuff of his hoodie.
* 22 A ¶ Outside, headlights sweep across the window.
* 23 A An engine growls, idles, and cuts out.
24 A Both of them freeze.
* 25 A A truck door slams.
* 26 A Boots crunch on gravel.
27 D DEKE (whispering): It's not him.
28 D TESSA: It could be.
29 D DEKE: Roy doesn't drive a rig.
30 D TESSA: He borrows one.
31 A ¶ Deke slides off the desk and eases the trailer door open a crack.
32 A He peers out, then slips through it and pulls it shut behind him.
33 A Tessa sits alone, camera clutched in both hands, listening to the buzz of the tube.
34 D DEKE [O.S.] (muffled, calling out): Hey! Gate's closed! Come back tomorrow!
35 A ¶ A heavy voice answers, too low to understand.
36 A Deke laughs, a nervous bark.
37 D DEKE [O.S., CONT'D]: Nah, man, he doesn't work here anymore!
38 A ¶ Tessa's knuckles whiten on the camera.
* 39 A A long silence.
* 40 A The engine starts again, backs, and fades up the road.
* 41 A ¶ The door opens.
42 A Deke leans in, grinning with relief, and Tessa raises the camera and the flash pops white.
43 D DEKE: Hey!
44 D TESSA (smiling at last): Keeper.
45 A ¶ He wipes the spots from his eyes.
46 A She waves the Polaroid until the picture begins to bloom.
47 D DEKE: Let me see.
48 D TESSA: Not yet.
49 A ¶ They both lean over it, shoulders touching, as his face slowly appears out of the gray.
50 D DEKE (simultaneously): That's terrible.
51 D ^TESSA (simultaneously): That's perfect.

### SCENE s01859 | INT. LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): LUCY, TEO REYES
* 1 A ¶ Twenty-four-hour laundromat on a dead corner.
* 2 A Fluorescent tubes buzz.
* 3 A Rows of dryers tumble in the dark.
* 4 A A row of orange plastic chairs faces a window onto the empty street.
5 A ¶ LUCINDA "LUCY" REYES, 30s, scrubs under a coat, sits slumped in the nearest chair watching a dryer turn.
6 A Beside her, her younger brother TEO REYES, 22, thin, new haircut, holds a plastic basket of folded shirts on his lap like a shield.
7 A At the change machine, feeding quarters one at a time, stands their mother ADELA REYES, 60s, in a church dress and sneakers.
* 8 A ¶ The coins ring in the dispenser.
9 D ADELA: Teo. Come help me.
10 D TEO: I'm busy.
11 D ADELA: With what?
12 D TEO: Sitting.
13 D LUCY: He's being a man.
14 D TEO: Lucy.
15 D LUCY: Sorry. Being a grown-up.
16 A ¶ Adela collects the quarters in her cupped hands and carries them over.
17 D ADELA: Two loads. Forty minutes.
18 D LUCY: Mom, it's midnight.
19 D ADELA: So? We have forty minutes.
20 A ¶ She sits between them.
21 A She sets the quarters on her knee and counts them.
22 A Teo sets down the basket.
23 A Lucy tilts her head back against the wall.
24 D TEO: I got the job.
25 A ¶ Adela's fingers stop.
26 D LUCY: What job?
27 D TEO: The one in Tucson.
28 D LUCY (sitting up): Tucson?
29 D TEO: I leave Friday.
* 30 A ¶ Silence.
* 31 A The dryers hum.
32 A Adela resumes counting.
33 D ADELA: That's good.
34 D TEO: You're not mad?
35 D ADELA: Why would I be?
36 D TEO: Because you said--
37 D ADELA: I said a lot of things.
38 D LUCY: Teo, Mom's crying.
39 D ADELA: I'm not crying.
40 D LUCY: You are.
41 D ADELA: It's the lint.
42 A ¶ Teo takes the quarters from his mother's knee and puts them in her palm, and she closes her fingers around his hand.

### SCENE s01860 | INT. BALLROOM OF THE GRAND CAPRICE HOTEL - NIGHT
Detected names (may be incomplete or contain aliases): AUGUSTUS PEMBERTON-HYDE, ODETTE FUSSELL, BARNEY, KRUPP, MISS FLORENCE LOVELACE, TALL MAN
* 1 A ¶ A faded ballroom in a faded resort.
* 2 A A crystal chandelier swings gently, missing every third bulb.
* 3 A Red velvet curtains droop.
* 4 A A banner reads "SENIOR SINGLES MIXER" in glitter.
* 5 A Thirty folding chairs stand in rows, nearly empty.
6 A ¶ A tall, stately man in a white dinner jacket stands at the doorway, shaking out a wet umbrella.
7 A He is MR. AUGUSTUS PEMBERTON-HYDE, 70s.
8 A He sweeps one white glove across his hair, adjusts his tie, and surveys the room as if reviewing troops.
9 A ¶ At the punch bowl, a small woman in a feathered hat and an enormous corsage ladles with great seriousness.
10 A She is MRS. ODETTE FUSSELL, 60s.
11 A She hums.
12 A ¶ Across the dance floor, a stout man in a paisley vest sits alone, tapping his foot to music only he hears.
13 A He is MR. BARTHOLOMEW "BARNEY" KRUPP, 60s.
14 A ¶ And at the piano, in a sequined gown that hasn't fit since 1985, sits MISS FLORENCE LOVELACE, 70s, who thumps a single chord and waits.
15 A ¶ The tall man clears his throat.
16 D TALL MAN: Good evening.
17 A ¶ He bows.
18 A Odette curtsies with the ladle.
19 A Barney waves.
20 A Florence thumps the chord again.
21 D ODETTE: Mr. Pemberton-Hyde! Punch?
22 D PEMBERTON-HYDE: Madam, I would be honored.
23 A ¶ He crosses the floor with his stiff, ceremonious stride.
24 A She hands him a cup.
25 A He sips.
26 A His face goes through three expressions.
27 D PEMBERTON-HYDE [CONT'D]: Is this... gravy?
28 D ODETTE: Oh, dear.
29 D BARNEY (calling): I told her it was gravy!
30 D FLORENCE (from the piano): Is anyone going to dance, or must I play to the walls?
31 A ¶ Odette takes the cup back.
32 A She and Pemberton-Hyde look at each other, and then, without a word, she takes his arm and he leads her out to the center of the floor.
33 A Florence strikes up a waltz, off-key.
34 A Barney leaps to his feet and applauds.
* 35 A ¶ The chandelier swings.
* 36 A A bulb pops.
* 37 A Nobody minds.

### SCENE s01861 | EXT. ROOFTOP WATER TOWER - DAWN
Detected names (may be incomplete or contain aliases): JUNE WEBER, OSCAR PELL, KID
* 1 A ¶ A rusted water tower on a flat tar roof above a sleeping town.
* 2 A Pigeons.
* 3 A A pink smear of sky.
4 A ¶ JUNE WEBER, 17, fraying denim jacket, climbs the last rung.
5 A Chewed fingernails.
6 A A paper bag in her teeth.
7 A ¶ She hauls over the lip.
8 A Looks around.
* 9 A ¶ Nobody.
10 A ¶ She sits.
11 A Takes a donut from the bag.
* 12 A ¶ A scrape behind her.
13 A ¶ She spins.
14 A ¶ OSCAR PELL, 17, skinny, dyed-blond hair, up the other ladder.
15 A Out of breath.
16 A Grinning.
17 D OSCAR: Told you I'd beat you.
18 D JUNE: You didn't.
19 D OSCAR: I got here at five.
20 D JUNE: Then why were you climbing?
21 D OSCAR: I went down for coffee.
22 A ¶ He holds up two paper cups.
23 A Hands her one.
24 A She takes it, suspicious.
25 D JUNE: It's cold.
26 D OSCAR: It's iced.
27 D JUNE: It's November.
28 D OSCAR: It's committed.
29 A ¶ She laughs despite herself.
30 A Drinks.
* 31 A ¶ Below, a milk truck rattles down Main Street.
* 32 A The light spreads.
* 33 A ¶ A third voice, below, thin and sharp.
* 34 A A kid's.
35 D KID [O.S.]: Oscar! Mom says come home!
36 A ¶ Oscar closes his eyes.
37 D OSCAR: Ten minutes!
38 D KID [O.S.]: She says now!
39 D JUNE: Who's that?
40 D OSCAR: My sister.
41 D JUNE: How old?
42 D OSCAR: Nine. Terrifying.
43 A ¶ He stands.
44 A Offers June a hand.
45 A She takes it.
46 D JUNE: Tomorrow?
47 D OSCAR: Same tower.
48 D JUNE: Bring hot coffee.
49 D OSCAR: Bring a better donut.

### SCENE s01862 | INT. TRAIN COMPARTMENT - NIGHT
Detected names (may be incomplete or contain aliases): STRANGER, CLAUDINE, REYNARD
* 1 A ¶ A first-class compartment, 1938.
* 2 A Plush seats, brass fittings, a lamp with a fringed shade.
* 3 A The wheels beat out a steady rhythm.
4 A ¶ A young woman in a dark traveling suit sits very straight with a small suitcase on her knees.
5 A Across from her, a man in his forties in a gray overcoat sits behind a newspaper, the paper lowering by degrees.
6 D STRANGER: Forgive me. You're traveling alone?
7 D CLAUDINE: I am.
8 D STRANGER: A long way to go alone.
9 D CLAUDINE: I have been going a long way for some time.
10 A ¶ He folds the newspaper and sets it aside.
11 A She keeps her hands on the suitcase.
12 D STRANGER: You'll pardon an old man's curiosity. Your gloves. They're a man's.
13 D CLAUDINE: They were my father's.
14 D STRANGER: And where is your father?
15 D CLAUDINE: That is the question I am traveling to answer.
16 A ¶ He studies her.
* 17 A The lamp sways.
18 D STRANGER: Then perhaps I can help you.
19 D CLAUDINE: Why would you?
20 D STRANGER (a thin smile): Because I knew him.
21 A ¶ She does not move.
22 A The suitcase lid trembles under her fingers.
23 D CLAUDINE: What was his name?
24 D STRANGER: Anton Rieux.
25 D CLAUDINE: And yours?
26 D STRANGER: Mine?
27 D CLAUDINE: You know his name. I would like to know yours.
28 D STRANGER (after a long pause): Reynard.
29 D CLAUDINE: Mr. Reynard.
30 D REYNARD: Just Reynard.
31 D CLAUDINE: Then, Reynard, tell me where he is.
32 D REYNARD: Mademoiselle. He is in the next car.
* 33 A ¶ The train rattles through a tunnel.
* 34 A The lamp flickers out, and for three seconds there is only the sound of wheels.
35 A When it flares back, Claudine has opened the suitcase.
36 A Her hand rests on what is inside it.

### SCENE s01863 | INT. INTERROGATION ROOM - NIGHT
Detected names (may be incomplete or contain aliases): AGENT MAREN SOLOMON, THEO VANCE, ^THEO
* 1 A ¶ A bare room.
* 2 A A steel table bolted to the floor.
* 3 A A one-way mirror.
* 4 A A single chair on each side.
5 A ¶ AGENT MAREN SOLOMON, 40s, sits with a manila folder squared in front of her and does not open it.
6 A Her sleeves are pressed.
7 A Her face gives nothing.
8 A ¶ Opposite her, wrists in plastic ties, a man in a gray hoodie.
9 A THEO VANCE, 30s.
10 A He studies the table, then the mirror, then her hands.
11 D MAREN: Do you want water?
12 D THEO: No.
13 D MAREN: Coffee?
14 D THEO: No.
15 D MAREN: You've been here six hours.
16 D THEO: Eight.
17 A ¶ She glances at her watch.
* 18 A He is right.
19 A She makes no remark.
20 D MAREN [CONT'D]: Eight.
21 D THEO: You don't believe me.
22 D MAREN: I believe your watch is better than mine.
23 A ¶ He tilts his head, almost smiling.
24 A He lifts his bound wrists to scratch his nose.
25 A She watches the movement closely, then looks away.
26 D MAREN [CONT'D]: Tell me about the drive.
27 D THEO: What drive?
28 D MAREN: The one in your sock.
29 A ¶ His smile goes.
30 A He lowers his hands.
31 A Under the table, a shoe taps twice and stops.
32 D THEO: I don't have a drive.
33 D MAREN: We have a photograph of the drive.
34 D THEO: Then you don't need me.
35 A ¶ She opens the folder at last.
36 A Slides a single glossy photo across the steel.
37 A He doesn't look at it.
38 A His eyes stay on her.
39 D MAREN: Who gave it to you?
40 D THEO: Nobody.
41 D MAREN (simultaneously): Who gave it to you?
42 D ^THEO (simultaneously): Nobody gave it.
* 43 A ¶ Silence.
* 44 A The ventilation fan clicks on, then off.
45 A ¶ Maren reaches across and, slowly, takes his hand in both of hers, as if comforting him.
46 A Turns it over.
47 A Examines the palm.
* 48 A A faint blue smear of ink on the heel of it.
49 A ¶ She lets go.
50 A He pulls the hand back, and tucks it under his other arm.
51 D MAREN [CONT'D]: That's from the stamp at the locker.
52 A ¶ Theo says nothing.
53 A The shoe starts tapping again.
54 A ¶ Maren closes the folder.
55 A She stands, tucks her chair beneath the table, and goes to the door.
56 A At the threshold she turns.
57 D MAREN [CONT'D]: Eight hours, Mr. Vance. I think you'd like a coffee now.
58 D THEO (low): Black.

### SCENE s01864 | INT. SYNERGY PARTNERS - OPEN OFFICE - MORNING
Detected names (may be incomplete or contain aliases): DEBORAH PRZYBYLSKI, VP, SANJAY RAO, KENDRA OYELOWO, BRAD, FITCH, MR. LYLE, ^BRAD
* 1 A ¶ A sea of gray cubicles.
* 2 A A foosball table nobody uses.
* 3 A A neon sign reads "BE THE CHANGE."
* 4 A A printer in the corner beeps in distress.
5 A ¶ DEBORAH PRZYBYLSKI, 40s, regional VP, strides in carrying a laptop and a green smoothie.
6 A Behind her trail four employees: SANJAY RAO, 30s; KENDRA OYELOWO, 20s; BRADLEY "BRAD" FITCH, 30s; and a thin man in an ill-fitting suit.
7 D DEBORAH: Team! Huddle!
8 A ¶ They gather.
9 A The thin man hangs back.
10 D DEBORAH [CONT'D]: Q3 numbers are in. We are crushing it. Crushing. Is anyone not crushing?
* 11 A ¶ Nobody speaks.
* 12 A The printer beeps.
13 D SANJAY (muttering): We missed target by thirty percent.
14 D DEBORAH: What was that?
15 D SANJAY: I said we're... trending.
16 D DEBORAH: Good word. Trending.
17 D KENDRA (to Brad): Who is that guy?
18 D BRAD (whispering): HR, I think.
19 D KENDRA: He's been here an hour.
20 D BRAD: He's been in the printer room.
21 D DEBORAH: Team. I want to introduce someone.
22 A ¶ She gestures at the thin man, who steps forward and clutches his clipboard.
23 D DEBORAH [CONT'D]: This is Mr. Lyle, from Corporate.
24 D MR. LYLE: Hello.
25 D DEBORAH: Mr. Lyle is here to help us optimize.
26 D MR. LYLE: I'm here to make cuts.
* 27 A ¶ Silence.
28 A Deborah's smile does not move.
29 A Sanjay's eyes widen.
30 A Kendra covers her mouth.
31 A Brad slowly raises his hand.
32 D BRAD: Is that a joke?
33 D MR. LYLE: No.
34 D DEBORAH: It's a figure of speech.
35 D MR. LYLE: It is not.
36 D DEBORAH (through teeth): Mr. Lyle, may I have a word.
37 D MR. LYLE: Certainly.
38 A ¶ They step aside.
39 A The three employees watch.
40 A Lyle speaks, quietly, and Deborah's face cracks.
41 A She snatches her smoothie, takes a long pull through the straw, and, finding it empty, sucks on air.
42 A ¶ Lyle returns, alone.
43 A Deborah remains by the foosball table, staring at it.
44 D MR. LYLE [CONT'D]: Ms. Przybylski has decided to take personal leave.
45 D SANJAY: Indefinitely?
46 D MR. LYLE: Effective immediately.
47 D KENDRA (simultaneously): Who's in charge?
48 D ^BRAD (simultaneously): Who's in charge?
49 A ¶ Lyle looks at them.
50 A He glances at the clipboard.
51 D MR. LYLE: Mr. Rao.
52 D SANJAY: Me?
53 D MR. LYLE: Congratulations. You're trending.

### SCENE s01865 | INT. REPAIR SHOP - DAY
Detected names (may be incomplete or contain aliases): PRIYA DESAI, HIRAM PELL, ZEKE, ^ZEKE
* 1 A ¶ A cramped clock repair shop.
* 2 A Hundreds of ticking clocks on every wall, none in agreement.
* 3 A A bell on the door.
* 4 A A workbench cluttered with gears.
5 A ¶ At the counter, a young woman named PRIYA DESAI, 20s, taps her fingers, glancing at the wall of clocks.
6 D HIRAM [O.S.] (from the back room): Be right with you!
7 D PRIYA: Take your time.
8 A ¶ A delivery man named ZEKE, brown uniform, 30s, crashes through the door with a huge box and trips on the rug.
9 A HIRAM PELL, 60s, in a leather apron and jeweler's loupe, bursts through the beaded curtain with a pocket watch in his fist, just as the box flies.
10 A Hiram throws up his arms.
11 A Priya ducks.
12 A Zeke sprawls across the floor.
* 13 A The box lands on the counter with a crash.
* 14 A A hundred clocks chime at once.
15 D HIRAM (shouting over it): My cuckoos!
16 D ZEKE (shouting back): Sorry!
17 A ¶ Priya covers her ears.
18 A Hiram lunges for the box.
19 A Zeke scrambles to his feet.
20 A They both grab the lid at the same time and tug.
* 21 A It pops open, and a spring-loaded cuckoo bird flies out and hits Priya in the forehead.
22 A She yelps.
23 A Hiram and Zeke look at her, then at each other, then at the bird.
* 24 A The chimes die away.
25 D PRIYA (rubbing her head): I came in to pick up my grandfather's watch.
26 D HIRAM (simultaneously): Which watch?
27 D ^ZEKE (simultaneously): Sign here, please.
28 D PRIYA (into the silence): The one that stopped.
29 A ¶ Hiram lifts the pocket watch from the bench and holds it up by its chain.
* 30 A It swings.
* 31 A It ticks.
32 D HIRAM: It's running.

### SCENE s01866 | INT. APARTMENT - KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): IRIS LENNOX
* 1 A ¶ A small kitchen.
* 2 A One lamp.
* 3 A A kettle gone cold on the stove.
* 4 A A phone propped against a bowl of fruit, its screen dark.
5 A ¶ IRIS LENNOX, 30s, sits at the table in a cardigan, a mug between her hands, a letter folded beside it.
6 A She stares at the phone.
7 A ¶ She picks it up.
8 A Puts it down.
9 A Picks it up again.
10 A Thumbs the screen.
11 A Holds it to her ear.
12 A ¶ She unfolds the letter and reads the first line under her breath.
13 D IRIS [V.O.] (reading, as if remembered): "Dear Iris. I have started this letter nine times."
* 14 A ¶ It rings, tinnily, three times.
* 15 A Four.
* 16 A Then a flat electronic beep, no greeting at all.
17 D IRIS: Hi. It's me.
18 A ¶ She stops.
19 A Closes her eyes.
20 D IRIS [CONT'D]: That's a stupid way to start. You know it's me. You've always known.
21 A ¶ She laughs, once, and wipes her eye.
22 D IRIS [CONT'D]: I got your letter. I read it standing up in the hallway because I couldn't make it to the kitchen. I read it four times. It's a very good letter. You always did write better than you talked.
23 A ¶ She turns the letter over.
24 D IRIS [CONT'D]: You said you were sorry. You said it three times, actually. I counted. Sorry for leaving. Sorry for the way you left. Sorry for the Thursday.
* 25 A ¶ A long pause.
26 A Her thumb moves along the mug's rim.
27 D IRIS [CONT'D]: I want to tell you I'm not angry. That would be easier. But I am a little. Not at you. At the Thursday. At whoever decided Thursday was a good day for a person to decide something like that.
28 A ¶ She sets the phone on the table, on speaker, and leans toward it.
29 D IRIS [CONT'D]: You asked if I'd call. I said I wouldn't. I've been sitting here for forty minutes not calling. So.
30 A ¶ She drinks the cold tea.
31 A Grimaces.
32 D IRIS [CONT'D]: Here's what I wanted to say. I wanted to say that the dog is fine. He's fat. He misses you. He sits by the door at six. I know that's not fair to tell you but I'm telling you.
* 33 A ¶ The line hisses softly.
34 D IRIS [CONT'D]: And I wanted to say that I forgive you, but I'm not ready to say it out loud, so I'm saying it into a machine, which is a little like a church, if you think about it. Nobody answers but you feel lighter.
35 A ¶ She laughs again, wetter.
36 D IRIS [CONT'D]: I'm going to hang up now. Or you'll have to listen to all the rest. There's a lot of rest.
37 A ¶ She reaches for the screen, then pulls her hand back.
38 D IRIS [CONT'D]: Daniel. Call me on Sunday. Or don't. But the porch light will be on.
39 A ¶ She ends the call.
* 40 A The kitchen is very quiet.
41 A Slowly, deliberately, she gets up, goes to the window, and flicks on the porch light.

### SCENE s01867 | INT. FINISHING SCHOOL DRAWING ROOM - AFTERNOON
Detected names (may be incomplete or contain aliases): MISS EUGENIA THORNE, LADY ARABELLA FENWICK, MISS CLARA PENROSE, THEODORE ABERCROMBIE, MARTHA GRUBB, MADAME ODILE VASSEUR
* 1 A ¶ 1912.
* 2 A A high-ceilinged drawing room in a draughty English manor.
* 3 A Chintz sofas, a tea service on a mahogany trolley, a portrait of a long-dead headmistress above the cold hearth.
* 4 A A grandfather clock ticks with ostentatious calm.
* 5 A Pale spring light slants through lace curtains.
* 6 A ¶ Six figures occupy the room.
7 A ¶ MISS EUGENIA THORNE, 50s, headmistress, steel-gray hair, a cameo brooch at her throat, presides from a wing chair with her teacup on her knee.
8 A To her right, on a settee, sit two of her pupils: LADY ARABELLA FENWICK, 17, ringlets, bored, and her cousin MISS CLARA PENROSE, 16, plain and watchful, her hands folded.
9 A Standing by the window, hands clasped behind his back, is MR. THEODORE ABERCROMBIE, 40s, the visiting music master, in a tweed jacket with a violin case at his feet.
10 A Beside the tea trolley, pouring, is the maid MARTHA GRUBB, 20s, in cap and apron, eyes lowered.
11 A And in the corner, half hidden behind a potted fern, sits MADAME ODILE VASSEUR, 60s, the French instructress, with a book she isn't reading.
12 D EUGENIA: Martha, the milk.
13 D MARTHA: Yes, Miss Thorne.
14 D EUGENIA: Arabella, sit up.
15 D ARABELLA: I am up.
16 D EUGENIA: You are slumped.
17 A ¶ Arabella straightens by a quarter inch.
18 A Clara stifles a smile.
19 D THEODORE: I thought we might begin with the Schubert.
20 D EUGENIA: We shall begin with tea, Mr. Abercrombie. Music follows digestion.
21 D THEODORE: Of course.
22 A ¶ He bends to the violin case, thinks better of it, and straightens.
23 A Martha hands Eugenia the milk jug.
24 A Their fingers brush.
25 A Martha steps back.
26 D MADAME VASSEUR (from behind the fern): Mademoiselle Clara. Your posture is excellent.
27 D CLARA: Thank you, Madame.
28 D ARABELLA (low): Teacher's pet.
29 D CLARA (lower): Ninny.
30 A ¶ Eugenia sets down her cup.
* 31 A The saucer rings.
* 32 A The room stills.
33 D EUGENIA: Is there something the young ladies wish to share?
34 D ARABELLA: No, Miss Thorne.
35 D CLARA: No, Miss Thorne.
36 D EUGENIA: Splendid.
* 37 A ¶ The clock strikes four.
* 38 A A carriage rattles on the gravel outside.
39 A Martha crosses to the window, parts the lace, and looks out.
40 A She stiffens.
41 D EUGENIA [CONT'D]: Martha?
42 D MARTHA: A boy on a bicycle, ma'am. He's left a telegram on the step.
* 43 A ¶ The room holds its breath.
44 A Madame Vasseur lowers her book.
45 A Theodore turns from the window.
46 A Eugenia rises to her full height, smooths her skirt, and walks to the door without a word.
47 A ¶ She opens it.
* 48 A Beyond, in the hall, a small envelope lies on the silver salver, left there by a messenger who has already gone.
49 D EUGENIA [CONT'D]: For me?
50 A ¶ She turns it over, reads the name, and holds the envelope out to Arabella, who has come up behind her.
51 A ¶ Arabella takes it.
52 A She tears it open.
53 A She reads.
54 A The color drains from her ringlets down to her collar.
55 D ARABELLA (very small): Father.
56 D CLARA: Bella?
57 D ARABELLA: He's coming. Tonight.
58 A ¶ Eugenia places a hand on the girl's shoulder.
* 59 A Behind them, the clock ticks on.

### SCENE s01868 | INT. ER NURSES' STATION - 3 A.M.
Detected names (may be incomplete or contain aliases): NKECHI ADEBAYO, LUIS FERNANDEZ, HENRY WU, NURSE GRACE TOLLIVER
* 1 A ¶ Fluorescent lights.
* 2 A A whiteboard of patient names.
* 3 A A coffee pot at its last inch.
4 A ¶ DR. NKECHI ADEBAYO, 30s, charts.
5 A Orderly LUIS FERNANDEZ, 20s, mops.
6 A Dr. HENRY WU, 40s, drinks from a mug that reads WORLD'S OKAYEST DOC.
* 7 A ¶ The overhead speaker clicks.
8 A It is Nurse Grace Tolliver at triage.
9 D GRACE [V.O.]: Code blue, bay six. Code blue, bay six.
10 A ¶ Nkechi drops her pen.
11 D NKECHI (to the room): Bay six. Go.
12 A ¶ NURSE GRACE TOLLIVER, 50s, bursts around the corner pushing the crash cart.
13 D GRACE: Got the cart.
14 D HENRY: Who's in six?
15 D LUIS: The kid. Car accident.
16 D NKECHI (already moving): Luis, ambu bag.
17 D LUIS: On it.
18 A ¶ They sprint.
19 A Henry, lingering, mutters to himself.
20 D HENRY (under his breath): Please be the dog. Please be the dog.
21 A ¶ He sets down the mug and follows.
* 22 A The whiteboard marker rolls off the ledge and clatters on the floor.
* 23 A ¶ At the end of the hall a curtain whips open.
* 24 A A small, familiar bark.
25 D NKECHI [O.S.]: It's a dog!
26 D GRACE [O.S.]: It's a golden retriever!
27 D LUIS [O.S.]: Doc, he's waking up!
28 D HENRY (sagging): Thank God.

### SCENE s01869 | INT. PEDIATRIC WARD NURSES' STATION - NIGHT
Detected names (may be incomplete or contain aliases): CAMILLE ROUSSEAU, NURSE ISAAC OBI, TATIANA VOLKOV
* 1 A ¶ Soft lights.
* 2 A A mural of cartoon whales.
* 3 A The ward is hushed.
4 A ¶ DR. CAMILLE ROUSSEAU, 40s.
5 A Tired eyes.
6 A Hair in a clip.
7 A She stands at the desk, flipping a chart.
8 A ¶ NURSE ISAAC OBI, 30s, across from her.
9 A Scrubs with cartoon bears.
10 A He is tapping at a keyboard.
11 A ¶ Between them, a parent: MRS. TATIANA VOLKOV, 30s.
12 A Coat still on.
13 A Purse clutched.
14 D CAMILLE: Mrs. Volkov. Please. Sit.
15 D TATIANA: I'll stand.
16 D CAMILLE: It's about Misha.
17 D TATIANA: I know it's about Misha.
18 D ISAAC: Can I get you water?
19 D TATIANA: No.
20 A ¶ Isaac steps back.
21 A Camille closes the chart.
22 D CAMILLE: His fever broke at two.
23 D TATIANA: Thank God.
24 D CAMILLE: That's good news.
25 D TATIANA: Then why do you look like that?
26 D CAMILLE: Like what?
27 D TATIANA: Like you have more.
28 A ¶ Camille glances at Isaac.
29 A He nods, almost invisibly.
30 D CAMILLE: The blood work came back.
31 D TATIANA: And?
32 D CAMILLE: There are some numbers I don't like.
33 D TATIANA: Which numbers?
34 D CAMILLE: His white count.
35 D TATIANA: What does that mean?
36 D CAMILLE: It could mean a lot of things. Infection. A reaction to the medication.
37 D TATIANA: Or?
38 D CAMILLE: Or something we need to look at more closely.
39 D TATIANA: Say it.
40 D CAMILLE: I'd like to run more tests before I say anything.
41 D TATIANA: You are saying something.
42 D CAMILLE: Mrs. Volkov.
43 D TATIANA: You're a doctor. You said "more closely." That is a doctor word for a bad word.
44 A ¶ Camille sets her hands flat on the desk.
45 D CAMILLE: We don't know yet. I promise you. When we know, you will know, first, from me.
46 D TATIANA: When?
47 D CAMILLE: Tomorrow afternoon.
48 D TATIANA: That's sixteen hours.
49 D CAMILLE: I know.
50 D TATIANA: What do I do for sixteen hours?
51 D CAMILLE: Sit with him. Hold his hand. Be his mother.
52 A ¶ Tatiana looks at the whale mural, as if to read it.
53 D TATIANA: He likes whales.
54 D CAMILLE: I know. He told me.
55 D TATIANA: He told you?
56 D CAMILLE: Nine whale facts. At the bedside. Before I took his temperature.
57 A ¶ Tatiana smiles, a small crooked smile.
58 A She puts down her purse.
59 D TATIANA: Which is his favorite?
60 D CAMILLE: The blue whale. Its heart is the size of a car.
61 D TATIANA (softly): Then it's big enough.
62 A ¶ She sits at last.
63 A Isaac pulls a chair beside her.
64 A Camille leans on the desk.
65 D ISAAC: Mrs. Volkov, I'll get you that water now.
66 D TATIANA: Yes. Please.
67 A ¶ He crosses to the water cooler.
* 68 A The cup fills with a slow gurgle.
69 A Tatiana holds her hands out for it, and they are steady.

### SCENE s01870 | INT. DEFUNCT BOWLING ALLEY - SHOE COUNTER - NIGHT
Detected names (may be incomplete or contain aliases): IMANI OKAFOR, TEDDY BRANCA, LUIS VARGA, OLD PIM, WEN ZHAO, DAG LINDQVIST
* 1 A ¶ Dust.
* 2 A Dead neon.
3 A SGT. IMANI OKAFOR (40s, wet coat) stands over a cash drawer pried open and empty.
4 A ¶ TEDDY BRANCA (50s, tracksuit, split lip) sits on the counter.
5 A LUIS VARGA (30s, thin, shaking) leans on the ball return beside him.
6 D OKAFOR: Who hit who?
7 D TEDDY: He hit me.
8 D LUIS: He swung first.
9 D OKAFOR: Which he?
10 A ¶ Neither answers.
11 A In the lanes, OLD PIM (70s, janitor's cap) pushes a mop through nothing.
12 D PIM (without looking up): Both of them. Then he took it.
13 A ¶ WEN ZHAO (20s, rain jacket, ticket stub in hand) steps out from behind the shoe cubbies.
14 D WEN: He took it. I saw him put it in the ball bag.
15 A ¶ CONST.
16 A DAG LINDQVIST (20s) lifts a red bag from under the counter, unzips it.
* 17 A Cash.
* 18 A A lot of it.
19 D DAG: Sarge. It's all here.
20 A ¶ Okafor exhales.
21 A Sits on a stool.
22 D OKAFOR: Then somebody get me coffee.

### SCENE s01871 | EXT. FLOODED RICE PADDY DIKE - DAWN
Detected names (may be incomplete or contain aliases): SERGEANT NIKOLAI BRZEZINSKI, CORPORAL ADAEZE OBI, SPARROW, LANGE, PRIVATE HARUTO KAWASAKI
* 1 A ¶ Mist on brown water.
* 2 A A narrow dike, the only dry line for a mile.
* 3 A Four soldiers crouch behind a collapsed water buffalo shed.
4 A ¶ SERGEANT NIKOLAI BRZEZINSKI (40s, gray stubble, field radio on his back) counts heads.
5 A CORPORAL ADAEZE OBI (20s, medic's bag) wraps a bandage around PRIVATE TOMMY "SPARROW" LANGE (19, freckled, pale).
6 A PRIVATE HARUTO KAWASAKI (30s, glasses taped at the hinge) watches the treeline through a rifle scope.
* 7 A ¶ The shooting has stopped.
* 8 A Somewhere, a duck complains.
9 D BRZEZINSKI: That's the last of it. Report.
10 D OBI: Sparrow's through-and-through, left arm.
11 D SPARROW: It's fine, it's--
12 D OBI: It's not fine, hold still.
13 D KAWASAKI: Treeline is quiet. Nothing moving.
14 D BRZEZINSKI: Quiet is not nothing.
15 D SPARROW: Sarge, are we gonna wait for the--
16 D OBI: Stop talking.
17 D KAWASAKI: I count two. Maybe three. Walking away.
18 D BRZEZINSKI: Away?
19 D KAWASAKI: Away. Rifles slung.
20 D OBI (tying off): They're done too.
21 D SPARROW: How do you know?
22 D BRZEZINSKI: Because they're walking.
* 23 A ¶ A long pause.
24 A Brzezinski unslings the radio, thumbs the handset.
25 D BRZEZINSKI [CONT'D]: Tango Two, this is Tango Four. Hold fire. Say again, hold fire.
26 D KAWASAKI: Sergeant, I can see their faces. They're kids.
27 D OBI: So is Sparrow.
28 D SPARROW: I'm twenty in March.
29 D BRZEZINSKI: Nobody is anything in March. Obi, finish. Kawasaki, keep the glass on them till they're gone.
30 D KAWASAKI: Gone.
31 A ¶ He lowers the scope.
32 A Exhales.
33 A Brzezinski sits down hard in the mud.
34 D OBI: Sarge. You're bleeding too.
35 D BRZEZINSKI: Am I?
36 A ¶ He looks at his sleeve.
37 A Surprised, almost polite.
