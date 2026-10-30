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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusKT/group_0077.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s05172 | INT. JUNO'S BEDROOM - NIGHT
Detected names (may be incomplete or contain aliases): JUNO, THE BAND
* 1 A ¶ Dark.
* 2 A Fairy lights, half of them dead.
* 3 A ¶ Posters.
* 4 A A beanbag.
* 5 A Laundry in a heap that could be anything.
6 A ¶ JUNO (16) lies in bed, earbuds out, eyes open.
7 A She listens.
* 8 A ¶ Silence.
* 9 A ¶ Then, through the wall: a thud.
* 10 A A slow one.
11 A ¶ She sits up.
* 12 A ¶ Another thud.
* 13 A Wood on wood.
14 A ¶ She grabs her phone.
15 A Taps it.
* 16 A Nothing.
* 17 A Her phone.
* 18 A Dead.
* 19 A ¶ The thudding finds a rhythm.
* 20 A Four beats.
* 21 A Four beats.
* 22 A Under it, a low hum, wrong, like something breathing through a tube.
23 D JUNO (whisper): Hello?
* 24 A ¶ Nothing.
25 A ¶ She swings her legs out.
* 26 A Floorboard creaks.
27 A She freezes.
28 A Waits.
* 29 A ¶ The wall goes quiet.
* 30 A ¶ Then a voice, muffled, lazy, sung half a note flat.
31 D THE BAND [O.S.] (muffled, through wall): Wonderwall... one, two, three...
32 A ¶ Juno stares at the wall.
33 D THE BAND [O.S., CONT'D] (muffled): Sorry! Sorry! Dave, you're on the wrong key!
* 34 A ¶ A cymbal CRASHES.
* 35 A A guitar squeals.
36 A ¶ Juno exhales.
37 A Her whole body unclenches.
38 A She laughs, a short, shaky bark.
39 D JUNO (to the wall): It's one a.m.!
40 D THE BAND [O.S.] (muffled): Sorry, Juno!
* 41 A ¶ A pause.
42 A She lies back.
43 A Pulls the duvet up.
* 44 A ¶ Quiet.
* 45 A ¶ Rain on the window.
* 46 A ¶ Her closet door, which was closed, is open now.
* 47 A An inch.
48 A ¶ She doesn't see it.
49 A She closes her eyes.
* 50 A ¶ From the wall, soft, in unison:
51 D THE BAND [O.S.] (muffled, hushed): ...we're not in the garage, Juno.
52 A ¶ Her eyes snap open.
* 53 A ¶ Silence.

### SCENE s05173 | INT. SUDS & SPIN LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): LENA VOSS, STRANGER, JOSIE, ABEL, MARCUS, KANE
* 1 A ¶ Dryers TUMBLE.
* 2 A Neon BUZZES.
3 A ¶ DR. LENA VOSS (40s, scrubs under a parka) is on her knees beside a man crumpled against a washer.
4 A Gripping his wrist.
5 A Counting.
6 A ¶ A STRANGER (60s, grey stubble, bleeding from the scalp) pulls the heavy door of dryer nine shut and leans on it, panting.
7 D LENA: Stay with me. Eyes up here.
8 D STRANGER: Name's Marcus. Not that anyone asked.
9 A ¶ Lena pauses.
10 D LENA: Marcus. Good. Marcus, who did this?
11 A ¶ JOSIE (20s, hoodie, folding socks) backs away from the counter, phone raised.
* 12 A A tiny terrier on a leash YAPS at everyone.
13 D JOSIE: I'm calling nine-one-one!
* 14 A ¶ A dryer BANGS open.
15 A ABEL (50s, security vest) bursts through the back door, flashlight swinging.
16 D ABEL: Nobody move!
17 D MARCUS: Abel, he's gone out the front. Go!
18 A ¶ Abel does not go.
19 A Officer KANE shoves through the front door, gun up, rain on his shoulders.
20 D KANE: Police! Hands!
21 A ¶ Everyone raises their hands except Lena, who is still pressing a folded towel to a wound.
22 A ¶ Two teenagers by the soap machine freeze mid-chew.
* 23 A ¶ This is the last time any of them will be strangers.
* 24 A ¶ The dryer THUDS.
* 25 A Something inside it is still running.

### SCENE s05175 | INT. SUBURBAN KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): SAL, KAY, TEDDY, BIG DAVE, RUTH
* 1 A ¶ Dark.
* 2 A Candles on the counter.
* 3 A A camping lantern hisses on the table.
4 D SAL [V.O.]: Power went out at eight-fifteen. By nine, the whole street was in somebody's kitchen. That's how it works out here.
5 A ¶ SAL (40s, cardigan, tea towel on shoulder) stirs a pot on a gas ring, while KAY (60s, his mother-in-law) cuts bread at the table, TEDDY (9) kneels on a chair building a wobbly tower of mugs, and a golden retriever sleeps with its chin on Sal's slipper.
6 A Through the window, two teenagers from next door shine a phone torch over the fence, whispering and giggling.
7 A ¶ BIG DAVE (50s, huge, soaked) appears in the back doorway holding a bag of ice.
8 D BIG DAVE: Freezer's gone at ours. Is yours alright?
9 D SAL: Come in, Dave, you're letting the heat out.
10 D KAY: There's no heat, Sal.
11 D SAL: Then you're letting the cold out.
12 A ¶ Teddy's tower collapses.
* 13 A The dog lifts its head, sighs, resumes sleeping.
14 D TEDDY: It wasn't me!
15 D KAY: It's never you.
16 D BIG DAVE: Who's the lady out front?
17 D SAL: What lady?
18 D BIG DAVE: Standing on your drive. Umbrella. Been there ten minutes.
19 A ¶ They look.
20 A Through the window: a figure at the end of the path, still, umbrella dripping.
21 D SAL [V.O.]: I didn't know her. That's all I'll say about that.
22 D KAY: She looks lost.
23 D TEDDY: She looks cold.
24 D SAL: Teddy, stay put.
25 A ¶ Sal opens the front door.
26 A The Woman (50s, neat grey coat) steps in out of the rain, folds her umbrella.
27 D THE WOMAN: I'm sorry. Is this number fourteen? My sister's number fourteen.
28 D SAL: This is twelve.
29 D THE WOMAN: Oh. Ruth Aldana. Ruth. I'm so sorry.
30 D KAY: Ruth! Sit down, Ruth. Soup?
31 D BIG DAVE: Fourteen's the one with the gnome.
32 D RUTH: That's her.
33 D TEDDY: We've got bread.
34 D SAL [V.O.]: There's no manual for strangers on a night like this. You just pull out another chair.
35 A ¶ Ruth sits.
* 36 A The candle gutters and holds.
* 37 A The dog thumps its tail once on the lino.

### SCENE s05176_0 | EXT. FISHING TRAWLER "NORTHERN STAR" - NIGHT
Detected names (may be incomplete or contain aliases): 
* 1 A ¶ Black water.
* 2 A A creaking hull.
* 3 A Fog.

### SCENE s05176_1 | INT. TRAWLER - GALLEY - CONTINUOUS
Detected names (may be incomplete or contain aliases): JONAH, NELL, HALE, DR. SUN, PETE
* 1 A ¶ CLOSE ON a sat-phone on the table, its green light blinking.
2 A Beside it, JONAH (20s) lies on a bench, shirt soaked red at the ribs.
3 A ¶ NELL (30s, oilskins, shaking hands) presses a rag to the wound.
4 A HALE (60s, the captain) stands in the doorway, staring at the ceiling.
5 D NELL: Stay with me, Jonah. Cap, get Dr. Sun on that thing.
6 D HALE: Line's open.
7 A ¶ Nell grabs the phone, thumb-hits speaker.
8 D DR. SUN [V.O.] (crackling): Nell? I can barely hear you. Is the bleeding steady?
9 D NELL: Steady-ish. It's deep. Pete's the only one who's done this before.
* 10 A ¶ ANGLE ON the hatch.
11 A PETE (50s, grey beard) is on the ladder, face white, hands empty.
12 D PETE: I can't, Nell. I told you. I can't do it again.
13 D DR. SUN [V.O.]: Pete. Listen to me. You can.
* 14 A ¶ A heavy THUMP from above.
* 15 A Something drags across the deck.
16 A ¶ Everyone looks up.
17 D HALE: That wasn't the nets.
* 18 A ¶ WE SEE the hatch.
* 19 A Bolted.
* 20 A Shaking.
* 21 A ¶ BACK TO SCENE:
22 A ¶ Jonah grips Nell's wrist.
23 D JONAH: Nell... something's out there.
* 24 A ¶ The lights die.

### SCENE s05179_0 | EXT. HARBOR LOT - FOOD TRUCK "ROSA'S RUEDA" - DAY
Detected names (may be incomplete or contain aliases): ROSA, DANNY, SKYE
* 1 A ¶ Sun on chrome.
* 2 A Gulls.
* 3 A Steam rolling out of the order window.
4 A ¶ ROSA (50s, apron, forearms like cables) flips tortillas without looking.
5 A A line of customers stretches to the road.
6 A ¶ DANNY (14) leans out the window with the receipt pad.
7 D DANNY: Two al pastor, one veggie, extra lime.
8 D ROSA: Say please to the lime.
9 D DANNY: Please, lime.
10 A ¶ From the cab, SKYE (20s, they/them, braids, bandana) leans back against the dashboard with a clipboard.
11 A Skye taps the pen against their teeth.
12 D SKYE: Rosa, the health inspector's coming at noon. They've already emailed.
13 D ROSA: Let him come.
14 D SKYE: They said "her." They're a woman.
15 D ROSA: Then let her come.

### SCENE s05179_1 | INT. FOOD TRUCK - CONTINUOUS
Detected names (may be incomplete or contain aliases): CHUY, ROSA, SKYE, DANNY
* 1 A ¶ CLOSE ON the grill.
* 2 A Grease popping.
* 3 A The propane gauge ticking toward red.
4 A ¶ CHUY (70s, Rosa's father, hat low) sits on an overturned crate by the back door, peeling an orange with a pocketknife.
5 D CHUY: Mija, the tank is low.
6 D ROSA: It's fine, Papá.
7 D CHUY: It is not fine. It is whistling.
8 A ¶ Rosa listens.
* 9 A A faint hiss, thin as thread.
10 A She glances at Skye.
11 D ROSA: Skye, check the valve.
12 D SKYE: I'm bookkeeping, not plumbing.
13 D DANNY: I'll do it.
14 D ROSA: You'll do nothing. Stay by the window.
15 A ¶ Danny bangs the counter, annoyed.
16 A A customer chuckles.

### SCENE s05179_2 | EXT. HARBOR LOT - CONTINUOUS
Detected names (may be incomplete or contain aliases): INSPECTOR WELLS, ROSA, SKYE
* 1 A ¶ A white sedan pulls into the lot.
2 A INSPECTOR WELLS (40s, windbreaker, tablet) steps out and looks at the truck.
3 A At the line.
4 A At the sky.
5 D WELLS: Good afternoon! Anyone in charge?
6 A ¶ Rosa leans out the order window, wiping her hands.
7 D ROSA: Inspector. We are open for business.
8 D WELLS: You have a permit?
9 D ROSA: I have a daughter who keeps all the paperwork.
10 D SKYE (from the cab): I'm not her daughter. I'm the accountant.
11 D WELLS (not looking up): I'm sure they're lovely. I'll start with the kitchen.

### SCENE s05179_3 | INT. FOOD TRUCK - CONTINUOUS
Detected names (may be incomplete or contain aliases): WELLS, ROSA, CHUY, SKYE, DANNY, FLICKERS
1 A ¶ Wells climbs in.
2 A Eyes the grill.
3 A Sniffs.
4 D WELLS: Do you smell gas?
5 D ROSA: Only the fresh tortillas.
6 D WELLS: That's gas, ma'am.
7 D CHUY: Mija. Tell him.
8 D ROSA: Papá, please.
* 9 A ¶ ANGLE ON the hose behind the grill.
* 10 A A hairline crack.
* 11 A The hiss now audible.
12 D SKYE: Rosa. The hose.
13 D DANNY: It's been like that since Friday.
14 A ¶ Rosa freezes.
15 A Slowly turns on her son.
16 D ROSA: Since Friday?
17 D DANNY: I told Abuelo. He said it was okay.
18 D CHUY: I said it would hold.
19 D ROSA: Hold?
20 D WELLS: I'm going to need everyone out of the truck.
21 D ROSA: Nobody is leaving my truck.
22 D WELLS: Ma'am...
23 D ROSA: Thirty years. My husband built this grill. My father taught me this salsa. You don't come in here with a tablet and tell me to leave.
* 24 A ¶ INSERT - THE TANK GAUGE.
* 25 A Needle on red.
26 D SKYE (low): Rosa. Please.
27 D ROSA: Don't "please" me. You all knew.
* 28 A ¶ Silence.
* 29 A The hiss grows.
30 A Customers outside have gone quiet.
31 D DANNY: Mamá, I'm sorry.
32 A ¶ Rosa's shoulders drop.
33 A She looks at him.
34 A At Chuy.
35 A At the hose.
36 D WELLS: The ignition. The pilot's still lit.
37 A ¶ BACK TO SCENE:
38 A ¶ Rosa lunges for the shutoff valve.
39 A Wells grabs her arm.
40 D WELLS [CONT'D]: Don't touch the burner!
41 D SKYE: Everyone OUT!
42 A ¶ Chuy rises.
43 A Danny grabs his grandfather's arm.
44 A Rosa wrenches free and cranks the valve.
* 45 A ¶ The hiss stops.
46 A ¶ Everyone stands still.
* 47 A ¶ Then the pilot light FLICKERS, catches the last of the escaped gas, and the grill WHUMPS into a fireball that blows the order window across the lot.

### SCENE s05179_4 | EXT. HARBOR LOT - CONTINUOUS
Detected names (may be incomplete or contain aliases): ROSA
* 1 A ¶ Smoke boils up.
2 A Customers scatter.
* 3 A Gulls explode into the sky.
4 A ¶ Danny drags Chuy clear.
5 A Skye hauls Wells over the tailgate.
6 A Rosa staggers out last, apron smoking, a charred tortilla still in her hand.
7 A ¶ She looks at her truck.
8 A At the black smear on the asphalt.
9 D ROSA (quiet): Well. That's the inspection.
10 A ¶ Skye begins to laugh.
11 A Danny too.
12 A Wells pats out a spark on his sleeve and finally, helplessly, joins them.

### SCENE s05182 | INT. BLACKWATER SOUND - LIVE ROOM - NIGHT
Detected names (may be incomplete or contain aliases): BAND, SPARK
* 1 A ¶ A converted cannery.
* 2 A Brick, baffles, foam.
* 3 A Forty-eight channels on the console in the control room beyond the glass, every fader at unity.
* 4 A The red ON AIR light burns steadily over the door.
* 5 A ¶ Outside, a storm has been building since sunset.
* 6 A Wind leans on the roll-up door.
* 7 A Water beads along the skylight seams.
8 A ¶ THE BAND stands at their marks: drummer behind the kit, bassist with headphones half on, two guitarists sharing one tuner, a keyboardist leaning on a Rhodes.
* 9 A Take fourteen of "Low Tide."
* 10 A Slate called.
* 11 A Click track in their cans.
12 D THE BAND (counting in, together): One, two, three, four.
13 A ¶ They play.
14 A Tight.
15 A Almost right.
16 A The drummer drops a fill, the bassist drifts a hair behind the grid, and the track grinds to a halt on the bridge.
17 D THE BAND: Stop. Stop. Sorry.
* 18 A ¶ Talkback is dead.
* 19 A The glass shows only their reflection and the dark behind it.
* 20 A ¶ The click track keeps ticking in every headphone.
* 21 A Tick.
* 22 A Tick.
* 23 A Tick.
24 D THE BAND: Engineer? Can we get a playback?
* 25 A ¶ Nothing.
* 26 A The monitors hiss at -40 dB noise floor.
* 27 A The patch bay shows a row of green LEDs, then one by one they go amber.
* 28 A ¶ Rain begins to find a way through the roof.
* 29 A A drop lands on the snare.
* 30 A Another on the Rhodes lid.
31 D THE BAND: Somebody check the breaker.
32 A ¶ The guitarists unplug and cross to the panel by the loading door.
33 A The drummer lifts his sticks and freezes.
34 A The bassist freezes too.
* 35 A The click track stops.
36 A ¶ All five go still.
* 37 A ¶ Low in the walls, an electrical whine climbs.
* 38 A Pitch rising.
* 39 A Rising.
40 D THE BAND: That's the transformer. Pull the plugs. Pull everything.
41 A ¶ They scramble.
42 A The keyboardist yanks the Rhodes cable, the bassist rips his headphones off, the drummer dives for the floor tom, and two of them collide at the gear cart, tangle in a snake of XLR cables, and go down together, mics clattering around them.
43 D THE BAND: Get up! Get off the mats, it's the floor, it's wet!
* 44 A ¶ Water has pooled under the loading door and spreads across the hardwood in a thin black sheet toward the power strips.
* 45 A ¶ Silence.
* 46 A Drip.
* 47 A Drip.
* 48 A ¶ Then a hum.
* 49 A Deep.
* 50 A Everything in the room powers up at once, console, amps, monitors, and the speakers SCREAM a wall of feedback that shakes the foam from the ceiling.
51 D THE BAND: Out! Everybody out, now!
52 A ¶ They run.
53 A The group scatters for the emergency exit, one toward the stage door, two to the control room, one back for the master tape.
* 54 A The master tape wins.
55 A He grabs the reel under his arm.
* 56 A ¶ A SPARK jumps from the strip to the water.
* 57 A ¶ The overhead lights BURST one after another, glass raining down, and the whole live room goes white, then black, then white.
58 D THE BAND: Go! Go! Go!
* 59 A ¶ The fire door SLAMS open on the storm.
60 A They pour into the rain, drenched, shouting names into the wind, and behind them the cannery windows flash blue and die.
61 D THE BAND: Count heads!
62 A ¶ Five.
63 A Five.
64 A They count again to be sure.

### SCENE s05183 | INT. GRAND MERIDIAN HOTEL - 9TH FLOOR CORRIDOR - NIGHT
Detected names (may be incomplete or contain aliases): KIM LARSEN, KIP LARSEN, DETECTIVE SORA NAKAMURA, ODOM, ^KIM
1 A ¶ KIM LARSEN, 30s, wet coat, backs along the wall.
* 2 A Her phone.
* 3 A Dead.
4 D KIM [V.O.]: Eight hours since the flood took the lobby. Nobody warns you the elevators are the first to go.
* 5 A ¶ Emergency lights.
* 6 A Amber.
* 7 A Silence.
8 A ¶ KIP LARSEN, 40s, her brother, limps from the stairwell, a fire axe in one hand.
9 A Behind him, DETECTIVE SORA NAKAMURA, 50s, drags a bleeding MRS. ODOM, 70s, by the sleeve.
* 10 A ¶ A door SLAMS somewhere below.
* 11 A Water.
* 12 A Rising.
* 13 A ¶ Kim's phone flickers on for one second.
* 14 A ¶ ON PHONE: where r u
* 15 A ¶ Then black again.
* 16 A Nothing.
17 D KIM: Kip, the stairs.
18 D KIP: Kim, the stairs.
19 D ^KIM: They're flooded!
20 D KIP: They're flooded!
21 D SORA: Then we go up. The roof.
22 D MRS. ODOM: My knees.
* 23 A ¶ A pipe BURSTS.
* 24 A The lights BUZZ out.
* 25 A ¶ Dark.
* 26 A Breath.
* 27 A Rain.

### SCENE s05184 | INT. SUNSET BARN - WEDDING AFTERPARTY - NIGHT
Detected names (may be incomplete or contain aliases): DJ, GUS, BEA, BOING
* 1 A ¶ String lights sway over a dance floor littered with confetti and shoes.
* 2 A A half-eaten cake leans like a tower in Pisa.
* 3 A The DJ booth glows, empty, still thumping a bass line nobody is dancing to.
* 4 A ¶ On the cake table, a plastic bride-and-groom topper wobbles.
* 5 A Then, impossibly, climbs down.
6 A ¶ GUS, a wiry corgi in a tiny bow tie, trots in, dragging a garter in his teeth.
7 A ¶ BEA, 20s, the bride's sibling, in a rumpled suit, tie loose, hair wild, vaults a chair and skids to a stop in front of him.
8 A Bea is out of breath, and they are grinning like a person who has just won something.
9 D BEA: Gus! Drop the garter, buddy. That belongs to the bouquet relay.
10 A ¶ Gus drops it.
11 A Then snatches it back.
12 A BOING, his tail whips a candle holder, and a tower of cups topples with a CRASH.
13 D GUS: Sorry, Captain Bea! The relay's the only game I'm any good at!
14 D BEA: Nobody's saying you're not good. They're saying you cheat.
15 D GUS: I do not cheat. I take shortcuts.
16 A ¶ Bea laughs and crouches.
17 A They point to the finish line, a ribbon strung between two keg stands at the far end of the barn.
18 D BEA: Okay, Gus-Gus, ground rules. Garter in mouth, no teeth on the ribbon, and nobody bites the best man.
19 D GUS: That was ONE time!
* 20 A ¶ A starter pistol, actually a champagne cork, POPS from the balcony.
21 A The crowd, offscreen, ROARS.
22 A ¶ Bea sprints.
23 A Gus scrambles after them, paws skittering on the polished boards.
* 24 A Over a fallen chair.
* 25 A Under a table.
26 A WHOOSH past a sleeping uncle.
* 27 A The garter flutters like a flag.
28 D BEA: Left, Gus, left!
29 D GUS: I know where left is! I'm a professional!
30 A ¶ They hit the ribbon together.
* 31 A SNAP.
* 32 A Streamers rain down.
33 A Gus tumbles into Bea's arms, and they both go down laughing on a pile of discarded party hats.
34 D BEA: Photo finish. Tie game.
35 D GUS (panting): Rematch at the honeymoon?
36 D BEA: Don't push your luck, champ.
37 A ¶ Gus puts the garter on Bea's head like a crown.
38 A Bea lets him.

### SCENE s05186 | INT. HOLLOWAY FAMILY HOME - FUNERAL RECEPTION - DAY
Detected names (may be incomplete or contain aliases): JONI, JORY, AMES, PHONE
1 A ¶ SERIES OF SHOTS:
* 2 A ¶ -- A casserole dish passes from hand to hand down the hallway.
* 3 A ¶ -- Black umbrellas drip in a brass stand.
* 4 A ¶ -- A framed photo of GRANDMA LUCILLE on the piano, sunlight on the glass.
5 A ¶ -- Cousins pressed together on the stairs, plates balanced on knees.
6 A ¶ Joni Holloway, 40s, in a grey dress, ladles punch with a steady smile, while across the room her brother Jory Holloway, 40s, loosens his tie by the fireplace and Ames Okoro, 20s, their cousin, who uses they/them, drifts between the aunts with a tray, collecting cups, watching Joni and Jory the way someone watches two dogs near a bone.
7 D JONI (to the room): There's more food in the kitchen. Please. Eat.
8 A ¶ The room murmurs thanks.
* 9 A Forks clink.
10 D JORY (muttering): Eat. Sure. Like it's a holiday.
11 D AMES: They said the will's being read after dessert.
12 A ¶ Joni stiffens.
13 A Jory doesn't.
* 14 A ¶ -- LATER: The light has shifted.
* 15 A Plates stacked.
* 16 A Laughter.
17 A Someone tells a story about Lucille's terrible driving, and for a moment the whole room breathes.
18 D JORY (to Joni, easy): Remember the time she backed into the church sign?
19 D JONI (smiling): She said it was in her way.
20 A ¶ They laugh.
* 21 A It's the first real laugh of the day.
22 A Ames lowers the tray, relieved.
* 23 A ¶ Then Ames's phone BUZZES.
* 24 A ¶ ON PHONE (TEXT): did joni tell jory about the house yet
25 A ¶ Ames goes still.
26 A Joni notices.
27 A Jory notices Joni notice.
28 D JORY: What house?
29 D JONI (to herself): Not here. Not now.
30 D AMES (to the room): I think I'll get more coffee.
31 D JORY: Sit down, Ames. What house, Joni?
* 32 A ¶ The laughter dies out, one conversation at a time.
33 A Everyone is watching now.
34 D JONI: Grandma sold the house in March. To me. For a dollar.
* 35 A ¶ Silence.
* 36 A The clock on the mantel ticks.

### SCENE s05187_0 | INT. LUMENFLOW - OPEN-PLAN OFFICE - DAY
Detected names (may be incomplete or contain aliases): WAITER, TEENAGERS, DOG, TAVI BROOKS, RHEA NAKAGAWA, OSEI
* 1 A ¶ Standing desks.
* 2 A Bean bags.
* 3 A A neon sign: MOVE FAST.
4 A A WAITER in a vest sets out catered sandwiches.
5 A Two TEENAGERS on a school tour peer at a whiteboard.
6 A A DOG sleeps under a desk.
7 A ¶ TAVI BROOKS, 30s, they/them, hoodie, stares at a laptop.
8 A Across the row, RHEA NAKAGAWA, 40s, CEO, reads a printed memo upside down, as if that's how it came.
9 A ¶ OSEI, 20s, engineer, carries three monitors and sets none of them down.
10 D RHEA: Tavi. Got a sec?
11 D TAVI: Not really.
12 A ¶ Rhea waits.
* 13 A Tavi's cursor blinks.
14 D TAVI [CONT'D]: Okay.
15 A ¶ They walk to the glass room.
* 16 A The waiter's tray clinks behind them.

### SCENE s05187_1 | INT. GLASS CONFERENCE ROOM - CONTINUOUS
Detected names (may be incomplete or contain aliases): RHEA, TAVI, RECEPTIONIST, PHONE
1 A ¶ Rhea closes the door.
2 A Doesn't sit.
3 D RHEA: Series B didn't close.
4 D TAVI: I saw the Slack.
5 D RHEA: Payroll's Friday.
6 A ¶ Tavi's thumb rubs the edge of the table.
7 D TAVI: They told me they'd cover through spring.
8 D RHEA: Who did?
9 D TAVI: You did.
10 A ¶ Outside, Osei finally sets a monitor down.
11 A Picks it up again.
* 12 A ¶ The intercom CRACKLES.
13 D RECEPTIONIST [V.O.]: Rhea, there's a gentleman here from the board.
14 D RHEA (into the room): Tell him five minutes.
15 D RECEPTIONIST [V.O.]: He says he's already on his way up.
* 16 A ¶ Tavi's phone lights up on the table.
* 17 A ¶ ON PHONE (TEXT): osei: tell me u didn't sign it
18 A ¶ Tavi turns it face-down.
19 A Rhea sees.
20 D RHEA: Did you?
21 D TAVI: I put my name where it was asked for.
22 A ¶ Through the glass, the dog stands, stretches, trots toward the elevator.
* 23 A ¶ The elevator DINGS.

### SCENE s05188 | INT. CHURCH BASEMENT - NIGHT
Detected names (may be incomplete or contain aliases): PAT PELLETIER, PATSY PELLETIER, DEACON FLINT, CHOIR
* 1 A ¶ Gaslight hisses in brass sconces.
* 2 A Steam drifts off a copper kettle on a woodstove.
* 3 A Above, through the floorboards, the groan of an organ and a hundred muffled hymns.
* 4 A A winter wind rattles the high, narrow windows.
* 5 A ¶ A ring of mismatched chairs.
6 A In it sit PAT PELLETIER, a rosy, round man in suspenders, and PATSY PELLETIER, his sister, in a bonnet, knitting something that is mostly knot, and DEACON FLINT, thin as a candlestick, who holds a hymnal like a shield.
7 A ¶ Overhead, THE CHOIR launches into a hymn.
8 D THE CHOIR [O.S.] (muffled, soaring): Rock of Ages, cleft for me!
9 D PAT: Friends, we're going to begin.
10 D PATSY: Pat, we've begun. You began when you sat down.
11 D PAT: Then we're beginning again, Patsy.
12 D DEACON FLINT (to the room): Is it the custom to speak all at once, or one by one?
13 D PATSY: One by one, Deacon.
14 D PAT: Though some of us never stop.
15 D PATSY: I heard that.
16 D PAT: You were meant to.
* 17 A ¶ The kettle WHISTLES.
18 A Everyone turns.
19 D DEACON FLINT (muttering to himself): Lord, give me strength or give me a drink.
20 D PAT: Beg pardon, Deacon?
21 D DEACON FLINT: Nothing. Hymn. I was humming a hymn.
22 D PATSY: You were not humming.
23 D THE CHOIR [O.S.]: Let me hide myself in Thee!
24 D PAT (to the room, loud): Everyone, here's the rule. What's said under the floor stays under the floor.
25 D PATSY: And what's said above?
26 D PAT: Is the Lord's business, Patsy.
27 D DEACON FLINT: Hold on. Patsy, you told me last week you'd quit.
28 D PATSY: I did quit. Twice.
29 D PAT: She quit on Tuesday and again on Wednesday.
30 D PATSY: Because Tuesday didn't take!
31 D DEACON FLINT: That's three drinks in three days, then.
32 D PAT: Two. The third was medicinal.
33 D PATSY: Pat!
* 34 A ¶ The organ builds.
* 35 A The floorboards tremble.
* 36 A Dust sifts into the kettle steam.
37 D DEACON FLINT (rising): I will not sit in a room of liars!
38 D PAT: Sit down, Deacon!
39 D PATSY: Pat, stop shouting!
40 D DEACON FLINT: You're the ones who are shouting!
41 D PAT: We are discussing!
42 D THE CHOIR [O.S.]: Amen! AMEN!
* 43 A ¶ The chandelier above them SWINGS.
* 44 A A jar of pickles rolls off a shelf and SMASHES.
45 A In the silence that follows, all three stare at the pickle brine spreading across the floor.
46 D PATSY (quietly): Well. That's a sign.
47 D PAT: Of what?
48 D DEACON FLINT: That I'd like a pickle.

### SCENE s05189_0 | EXT. TRAWLER "MARGARET ANN" - NORTH ATLANTIC - DAWN
Detected names (may be incomplete or contain aliases): CAPTAIN DAVID VOSS, LIN PARK
* 1 A ¶ Grey sea.
* 2 A Grey sky.
* 3 A A rust-streaked trawler, forty years old, wallows through a swell with nets hanging from her outriggers.
* 4 A ¶ Salt.
* 5 A Wind.
* 6 A Gulls.
7 A ¶ CAPTAIN DAVID VOSS, 60s, wind-cracked face, oilskins, stands in the wheelhouse door.
8 A His hands are scarred.
9 A His eyes are the color of the water.
10 A ¶ On the deck below, LIN PARK, 20s, deckhand, in orange gear, hauls a net hand over hand.
11 A Her gloves are torn.
12 A She is on her first season.

### SCENE s05189_1 | INT. WHEELHOUSE - CONTINUOUS
Detected names (may be incomplete or contain aliases): COAST GUARD, VOSS, PHONE
* 1 A ¶ Radar glow.
* 2 A A dented thermos.
* 3 A A paper chart pinned with a wrench.
4 A ¶ Voss thumbs the radio.
5 D COAST GUARD [V.O.] (crackling): Margaret Ann, Margaret Ann, this is Station Halvard. Come back.
6 D VOSS: Halvard, Margaret Ann. Go ahead.
7 D COAST GUARD [V.O.]: Captain, we have a gale warning, force nine, bearing two-seven-zero. Recommend you return to port.
8 D VOSS: How long?
9 D COAST GUARD [V.O.]: Four hours. Maybe less.
10 A ¶ Voss sets the handset down.
* 11 A Nothing.
* 12 A ¶ The sea heaves.
* 13 A Spray.
* 14 A Silence.
* 15 A ¶ His phone on the dash lights up.
* 16 A ¶ ON PHONE (TEXT): dad. please come home.
17 A ¶ He turns it face-down.

### SCENE s05189_2 | EXT. DECK - CONTINUOUS
Detected names (may be incomplete or contain aliases): LIN, NOELLE, VOSS
1 A ¶ Lin lets the net drop, shaking out her hands.
2 D LIN: Captain says anything?
3 D NOELLE [O.S.] (from the hold): Not to me.
4 A ¶ Nobody has seen Noelle in an hour.
5 A ¶ Lin looks at the sky.
* 6 A A grey wall climbs the horizon.
* 7 A ¶ This is the last time the Margaret Ann will fish these waters.
8 D VOSS (from above): Cut the net, Lin.
9 D LIN: There's six tons in it.
10 D VOSS: Cut it.
11 A ¶ She draws her knife.
* 12 A Rope.
* 13 A Salt.
* 14 A The first drops of rain.
* 15 A ¶ The net falls away into the dark.

### SCENE s05190 | EXT. BORDER CHECKPOINT - DAY
Detected names (may be incomplete or contain aliases): VOSS, MARTA, PAVEL, BAND
* 1 A ¶ Rain.
* 2 A A striped barrier.
* 3 A A mud road choked with carts, 1948 plates on a single black sedan.
4 A ¶ Corporal Voss, 40s, wet wool coat, stamps papers without looking up.
5 A A dog sniffs the wheels of a cart.
6 A A boy in a flat cap watches it.
7 A ¶ Marta, 30s, steps up with a violin case.
8 A Pavel, her brother, 20s, hangs back, hands in pockets.
9 D VOSS: Papers.
10 D MARTA: All in order.
11 A ¶ He flips them.
12 A Stops.
13 A She holds her breath.
14 D VOSS: This stamp is from a town that doesn't exist.
15 D MARTA: It did last week.
* 16 A ¶ A beat.
17 A He nearly smiles.
* 18 A Then the barrier SLAMS down between them.
19 D VOSS: Open the case.
20 A ¶ She does.
* 21 A Violin.
22 A He lifts it, shakes it.
* 23 A Something RATTLES inside.
24 D PAVEL: Don't.
25 D VOSS: Quiet.
26 D MARTA: It's my mother's. It rattles because it is old. Please. You know what a thing like that is worth to a person. You have a mother. You had one. She stood in a line like this once, I promise you. Somebody looked at her papers and decided. That is all this is. Somebody decides. And today it is you, and you can decide to be the kind who lets a woman keep her mother's violin, or the kind who breaks it open to find nothing. There is nothing in there, Corporal. There is only the sound it made at her funeral.
27 D VOSS: You talk a lot for someone with a bad stamp.
28 D MARTA: I talk when I am afraid.
29 A ¶ He sets the violin down.
30 A Gently.
31 A ¶ From the road behind, THE BAND arrives, six brass players in muddy uniforms, instruments clutched like rifles.
32 D THE BAND (ragged, together): Let us through, Corporal!
33 A ¶ The dog BARKS.
34 A The boy bolts.
35 A Voss looks at the band, at her, at the barrier.
36 A ¶ He lifts it.
37 D VOSS: Go. Before I count.

### SCENE s05191 | INT. HOLLOWAY KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): DENISE HOLLOWAY, GAIL PRUITT, RAJ MEHTA
* 1 A ¶ Pitch black.
* 2 A A candle FLARES to life.
3 A Behind it DENISE HOLLOWAY, 40s, holds a lighter and a very large frozen turkey in the crook of one arm.
4 A At the island GAIL PRUITT, 50s, her sister-in-law, squints at a dead tablet.
* 5 A The fridge hums its last breath and stops.
6 D DENISE: Okay. Nobody panic. The turkey has eleven hours of cold left in it.
7 D GAIL: It's a bird Denise not a battery.
* 8 A ¶ CLOSE ON the oven clock.
* 9 A Blinking nothing.
* 10 A Dead.
* 11 A ¶ ANGLE ON the back door.
12 A It opens and DR. RAJ MEHTA, 50s, neighbour and a gastroenterologist, steps in holding a head torch and a casserole dish he has clearly been carrying out of habit.
13 D RAJ: Whole street is out. Transformer. I've triaged the Hendersons they're stable but the Hendersons are always stable.
14 D DENISE: Raj you can't just walk in.
15 D RAJ: Door was open. Clinically speaking that's an invitation.
16 A ¶ Gail stands to hug Denise and knocks the candle which tips toward a stack of the takeaway menus and Denise lunges with the turkey while Raj swings the torch beam across the room catching the cat on top of the cupboard and the cat leaps and lands in the sink and the tap goes off like a gun because the pressure pump has died.
* 17 A ¶ WE SEE the flame lick the first menu.
18 D DENISE: Fire fire fire
19 D GAIL: Smother it!
20 D DENISE: With what
21 A ¶ Gail points at the turkey.
22 A Denise looks at the turkey.
23 A Raj is already pouring the casserole's sauce over the flame, which hisses out.
* 24 A Silence.
* 25 A Smoke curls.
26 D DENISE [CONT'D]: That was lasagne.
27 D RAJ: It was a sacrifice.
* 28 A ¶ INSERT - the charred menu, "Golden Wok" still legible.
29 A ¶ BACK TO SCENE
30 A ¶ Gail sits heavily.
31 A Denise sits beside her.
32 A Raj stays standing, torch under his chin like a campfire storyteller.
33 D DENISE: She said she'd call about Christmas.
34 D GAIL: I was going to say that. ^ DENISE Also thanks for the lasagne.
35 D RAJ (to the dark): Seventeen years of practice and I have never once saved a menu.
* 36 A ¶ The lights come ON.
* 37 A Fridge shudders.
* 38 A Oven clock flashes 12:00.
39 A They all look up at it like a miracle.
40 D GAIL: Well.
41 D DENISE: Well.
* 42 A ¶ The turkey, forgotten, slides out of her arm and hits the floor with a THUD.

### SCENE s05192 | EXT. DUSTY MAIN STREET - DAY
Detected names (may be incomplete or contain aliases): COAL, PIKE, JUNIPER, CORBIN, SAM
* 1 A ¶ Sun-bleached false-front buildings.
* 2 A Handmade signs: NO COAL, NO FUTURE.
3 A A crowd of thirty blocks the doors of the Territorial Mining Bureau.
4 A A waiter on the saloon porch watches with a tray of untouched beer.
5 A Two teenagers on a hitching rail film it all on a phone.
* 6 A A mule brays.
7 A ¶ Sheriff Amos Pike, 50s, weathered, tin star, wide stance, stands on the steps.
8 A Beside him Deputy Lucy Ferris, 20s, nervous, thumbs hooked in her belt.
9 A ¶ At the front of the crowd, Juniper Reyes, 30s, sun-browned, in a canvas duster painted with a dying river.
10 A Next to Juniper, Sam, early 20s, they/them, buzzcut and bandanna, holding the end of a chain that runs through the Bureau's door handles.
11 A Behind them an old rancher, Walt Dunmore, 60s, hat in hands, and Corbin Hale, 40s, in an expensive suit, mine agent, sweating through his collar.
12 D PIKE: Break it up. Ten seconds.
13 D JUNIPER: You don't have ten seconds of water left in this county, Sheriff.
14 D CORBIN: Arrest them. All of them.
15 D SAM: Come try.
16 A ¶ Ferris steps forward.
17 A Walt grabs her arm, she shakes him loose, Corbin shoves Walt, and then Juniper and Corbin go at each other, fists and hats, while the crowd roars and the teenagers whoop.
18 A Sam hauls the chain tight.
19 A Pike fires into the air.
* 20 A ¶ BANG.
21 A ¶ They all freeze.
* 22 A The mule stops braying.
23 A The waiter drops the tray.
24 D PIKE: Now.
* 25 A ¶ Quiet.
26 A Sam lets the chain go slack.
27 A Juniper wipes blood from a lip and laughs.
28 D JUNIPER: He means it.
29 A ¶ The crowd scatters, slow, defeated, then regroups across the street.
30 A Sam sits in the dirt.
31 A They look at the sky.
32 D SAM: Still no rain.

### SCENE s05193 | EXT. CITY HALL PLAZA - DAY
Detected names (may be incomplete or contain aliases): GORDON, TERRENCE
* 1 A ¶ A climate march, mid-afternoon.
* 2 A Banners.
* 3 A Drums.
4 A A hundred people sitting in a slow circle on the stone.
* 5 A Overhead, a sky the colour of old dishwater.
6 A ¶ A kid in a polar bear costume walks a cardboard iceberg through the crowd.
7 A A woman with a stroller hands out oat milk.
8 A A dog in a tiny "Fossil Free" vest sniffs the leg of a bench.
9 A ¶ On the bench: Terrence Bell, 40s, rumpled trench coat, a protest sign under his arm that says nothing at all.
* 10 A Blank cardboard.
11 A ¶ A man sits down beside him.
12 A Gordon Achebe, 50s, expensive jacket pretending to be cheap.
13 A He holds a thermos.
14 A ¶ Neither looks at the other.
15 D GORDON: Nice turnout.
16 D TERRENCE: Good cover.
17 D GORDON: That's what it's for.
18 A ¶ Terrence tilts the sign so the back is visible.
* 19 A A taped floor plan of the building behind them.
20 A Gordon glances, looks away.
21 D GORDON [CONT'D]: You added the east stairwell.
22 D TERRENCE: It's the only one without a sensor.
23 D GORDON: I heard they installed one last week.
24 D TERRENCE: You heard wrong. He lied to you.
25 D GORDON: Who?
26 D TERRENCE: The contractor.
* 27 A ¶ A drum line starts up.
28 A The crowd chants something about carbon.
29 A A child shrieks with delight.
30 D GORDON: He's my cousin.
31 D TERRENCE: Then he lied to you. Family does.
* 32 A ¶ A pause.
33 A Gordon unscrews the thermos.
34 A Pours.
35 A Offers a cup.
36 A Terrence takes it.
37 D GORDON: It's tea.
38 D TERRENCE: I know. I can smell the cardamom.
39 D GORDON: My wife's.
40 D TERRENCE: She know what you're doing?
41 D GORDON: She thinks I'm at a rally.
42 D TERRENCE: You are at a rally.
43 D GORDON: Fair.
44 A ¶ The polar bear kid walks by.
45 A Terrence nods at him.
46 A The kid nods back, very seriously.
47 D TERRENCE: You ever think about how many people here actually believe it?
48 D GORDON: All of them.
49 D TERRENCE: All of them.
50 D GORDON: That's why they sit like that. It's a thing you can only do if you believe.
51 D TERRENCE: And us?
52 D GORDON: We believe in a safe in a basement on the fourth floor.
53 A ¶ Terrence laughs, quietly, into the cup.
54 A ¶ The dog trots over, sits at their feet, looks up.
55 A Gordon breaks a biscuit from his pocket in half.
56 A Gives half to the dog.
57 A Eats the other.
58 D GORDON [CONT'D]: Nine o'clock.
59 D TERRENCE: Nine.
60 D GORDON: Mayor's dinner. Everyone with a badge will be at it.
61 D TERRENCE: And the protesters?
62 D GORDON: Still sitting. They'll sit until midnight.
63 D TERRENCE: Good people.
64 D GORDON: Good enough to be useful.
65 A ¶ Terrence says nothing.
66 A He looks at the circle of bodies on the stone.
67 A He looks at his blank sign.
* 68 A ¶ This is the last time they will speak before the building.
69 D TERRENCE: You'll take the stairwell.
70 D GORDON: You'll take the elevator.
71 D TERRENCE: It's loud.
72 D GORDON: That's the point.
73 A ¶ A woman with a megaphone climbs onto a plinth.
74 A The crowd quiets.
75 A She begins to read names of drowned towns.
76 A ¶ They listen.
77 A Both of them.
78 A Longer than they planned to.
79 A ¶ Gordon stands.
80 A Screws the lid on the thermos.
81 A Pats Terrence's shoulder, once, a stranger's courtesy.
82 D GORDON [CONT'D]: Don't be late.
83 D TERRENCE: I'm never late.
84 A ¶ Gordon walks into the crowd.
85 A A teenager hands him a flyer.
86 A He takes it.
87 A Folds it.
88 A Pockets it.
89 A ¶ Terrence stays on the bench.
90 A Turns the sign face out.
* 91 A Blank.
92 A Holds it up with everyone else.
93 A ¶ The woman reads on.

### SCENE s05194 | EXT. FISHING BOAT "MARGARET JEAN" - DAWN
Detected names (may be incomplete or contain aliases): NELL, TOBY, ROSALIND, OWEN
* 1 A ¶ grey. flat. the engine ticking over.
2 A ¶ NELL, 30s, sits on a bait crate scrolling a phone.
* 3 A Her phone.
* 4 A No signal.
5 A Her brother TOBY, 30s, coils rope by the winch while their mother ROSALIND, 60s, leans in the wheelhouse door with a mug, and their dad's old deckhand, a man in a yellow slicker none of them have met before, stands at the rail.
* 6 A ¶ Silence.
7 D NELL: so who's he again
8 D TOBY: dad's guy. from before.
9 D ROSALIND: Nobody calls me back about the boat, and then somebody turns up.
10 D STRANGER: I'm just here for the nets. Don't mind me.
* 11 A ¶ Rain.
* 12 A Light.
* 13 A Then more of it.
14 D NELL: we're not selling by the way
15 D TOBY: no one said selling
16 D NELL: mum said selling
17 D ROSALIND: I said "if".
18 A ¶ Toby drops the rope, Nell stands, Rosalind sets down her mug on the winch and the stranger takes one step back, all of them tense in the little space between the net and the rail and the thing nobody's saying.
* 19 A ¶ Nothing.
20 D STRANGER: Look, I'm Owen. Owen Pruett. Your dad hired me in 'ninety-eight. He'd want me here.
21 D OWEN: He told me if it came to it I should tell you where he hid the deed.
22 D NELL: what deed
23 D TOBY: there's a deed?
24 D ROSALIND: Oh for God's sake, Owen.
* 25 A ¶ Her phone.
* 26 A Dead.
* 27 A ¶ Gulls.
* 28 A A wave slaps the hull.
29 A Nobody moves.
30 D NELL (quiet): where
31 D OWEN: Under the third plank. Forward locker.
32 A ¶ Toby looks at Nell.
33 A Nell looks at Rosalind.
34 A Rosalind looks at the water.
* 35 A ¶ Engine.
* 36 A Rain.
37 D TOBY (low): we'll check later
38 D NELL: yeah. later.

### SCENE s05195_0 | INT. IRON TEMPLE GYM - NIGHT
Detected names (may be incomplete or contain aliases): MO
* 1 A ¶ Empty.
* 2 A Dim emergency lights.
* 3 A Rows of dead treadmills.
* 4 A A neon sign above the juice bar flickers: NO PAIN NO GAIN.
* 5 A ¶ A door SLAMS somewhere deep inside the building.
* 6 A Footsteps.
7 A Then a figure comes through the locker room entrance in a black hoodie and gym bag, moving fast.
8 A ¶ Mo, 30s, wiry, nervous hands.
9 A He drops the bag onto a bench and unzips it.
* 10 A Inside: a stethoscope, a tablet, a roll of thermal paper, an old key on a lanyard.
11 A ¶ He taps the tablet.
* 12 A A blue glow lights his face.
* 13 A A text appears on screen:
* 14 A ¶ ON TABLET: "Kip's on the door.
* 15 A Kim's got the cameras.
* 16 A You've got 4 minutes."
17 D MO (to himself): Kip. Kim. Kip. Kim. Why do they both sound the same.
18 A ¶ He pockets the key.
19 A Crosses to the front desk, where a night janitor in headphones mops the floor, oblivious, humming.
20 A Mo ducks behind a rack of kettlebells.
21 A The janitor sways closer, closer, then turns away.
22 D MO [CONT'D] (whispering): Good. Go. Go home.
23 A ¶ The janitor stops.
24 A Takes off one earphone.
25 A Mo freezes.
* 26 A A phone BUZZES somewhere.
27 A The janitor answers it, laughs, wanders toward the back office, still talking.
28 A ¶ Mo exhales.
29 A Moves.
30 A ¶ At the back of the gym he finds the glass trophy case.
* 31 A Inside: a small gold dumbbell, "1987 Regional Powerlifting Champion."
32 A He reads the plaque and laughs once.
33 D MO [CONT'D]: Big Dave's dumbbell. Unbelievable.
34 A ¶ He takes out the old key.
35 A Slides it into the lock.
* 36 A It does not turn.
37 A He tries again.
* 38 A Nothing.
39 D MO [CONT'D]: Come on come on come on
40 A ¶ His thumb catches.
* 41 A The lock CLICKS.
* 42 A The glass door swings open.
43 A ¶ He lifts the dumbbell carefully.
* 44 A It's heavier than it looks.
45 A He weighs it in his hand, looking at it the way a man looks at the thing that is about to change his life.
* 46 A ¶ The tablet BUZZES again.
47 A He glances.
* 48 A ¶ ON TABLET: "Kip says there's a guy outside.
* 49 A Big.
* 50 A Beard.
* 51 A Holding a coffee."
52 D MO [CONT'D] (a whisper): Big Dave.
53 A ¶ He shoves the dumbbell into the bag.
54 A Zips it.
55 A Looks around for an exit.
* 56 A The front is out.
* 57 A The side door is alarmed.
* 58 A The only way is through the pool area, and past the janitor, who has begun to sing along to whatever is in his headphones.
59 A ¶ Mo crouches.
60 A Creeps along the wall of treadmills.
* 61 A A treadmill SCREAMS to life as he brushes the start button, belt spinning, display lights flashing.
62 A He slaps the stop button.
* 63 A It keeps going.
64 D MO [CONT'D]: No no no no.
65 A ¶ The janitor stops singing.
* 66 A Footsteps approach from the back office.
67 A Mo dives behind the juice bar, hugging the bag.
68 A The janitor appears, scratches his head at the roaring treadmill, and hits the emergency stop with the flat of his hand.
* 69 A Silence.
70 A ¶ The janitor mutters something in Spanish, puts his earphone back in, and goes back to mopping.
71 A ¶ Mo breathes.
72 A Counts to ten.
73 A Then slides out from behind the bar and makes for the pool doors, the bag bumping his hip.
74 A ¶ At the pool doors he hesitates.
75 A Through the glass: a figure in the water, swimming slow laps in the dark.
76 A A woman, silver cap, goggles.
77 A She doesn't look up.
78 A Mo slips past on the tile, one hand on the wall.
79 A ¶ He reaches the fire door.
80 A Presses the bar.
* 81 A It opens without a sound.
* 82 A ¶ The alarm does not go off.
83 D MO [CONT'D] (realising): Kim.
84 A ¶ He steps out into the cold.
* 85 A The door CLOSES softly behind him.

### SCENE s05195_1 | EXT. GYM PARKING LOT - CONTINUOUS
Detected names (may be incomplete or contain aliases): MO
* 1 A ¶ A blue van idles.
* 2 A Its back door slides open.
* 3 A Inside, nothing but darkness and the red glow of a cigarette.
4 A ¶ Mo throws the bag in.
5 A Climbs after.
6 D MO: Go.
* 7 A ¶ The van pulls away.
* 8 A In the window of the gym, the neon sign flickers once and dies.

### SCENE s05197 | EXT. CRAB BOAT "SECOND WIND" - MORNING
Detected names (may be incomplete or contain aliases): LEON, HOODIE GUY, MUM, LEO, HANNAH
* 1 A ¶ flat sea. gulls. a thermos steaming on the gunwale.
2 A ¶ THE WOMAN, 30s, in a borrowed oilskin two sizes too big, sits on a coil of line holding her phone out over the water like a fishing rod.
3 A LEON, 30s, at the wheel, pretends not to watch her.
4 A HOODIE GUY, 20s, sits on the hatch cover with his hood up eating a cold sausage roll.
5 D LEON: you wont get signal out there either
6 D THE WOMAN: Worth a try
* 7 A ¶ Her phone BUZZES.
8 A She jumps.
9 A Looks at the screen.
10 A Lifts it.
11 D THE WOMAN [CONT'D] (into phone): Hi mum
12 D MUM [V.O.] (tinny): Where ARE you. Your dad said you went off with a fisherman
13 D THE WOMAN: Its a boat trip Mum. Its fine.
14 D MUM [V.O.]: Is he nice
15 D THE WOMAN: He's a, hes got a boat
16 D MUM [V.O.]: That's not an answer
17 A ¶ Leon turns the wheel half a degree.
* 18 A The boat leans.
19 A Hoodie Guy lifts his hood back and looks at her, then at Leon, then at the sausage roll.
20 D HOODIE GUY: She's got her mum on speaker
21 D LEON: Shes not on speaker Leo
22 D THE WOMAN: Its Leo.
23 D LEON: Yeah Leo. He's my nephew. Leo, not Leon. Obviously.
24 D LEO (shrugging): Everyone gets it wrong.
25 D MUM [V.O.]: Who's Leo
26 D THE WOMAN: Nobody Mum bye
27 A ¶ She ends the call.
* 28 A Silence.
* 29 A The engine thrums.
30 D THE WOMAN [CONT'D]: Im Hannah by the way. You never asked.
31 D LEON: I didnt want to rush it
32 D HANNAH: You rushed the boat
33 D LEON: The boat was an emergency
34 D HANNAH: I was on the pier for ten minutes and you said and I quote get in
35 D LEON (smiling at the horizon): And you did.
36 D HANNAH (simultaneously, mouth full): ^ LEO Get a room.
37 A ¶ Hannah throws a glove at Leo.
38 A He catches it.
39 A Leon laughs and the boat rolls once, and Hannah steadies herself on his arm.
40 A She doesn't take her hand away.
* 41 A ¶ Gulls.

### SCENE s05198_0 | INT. NEW BEGINNINGS FERTILITY CLINIC - WAITING ROOM - DAY
Detected names (may be incomplete or contain aliases): BRENDA OKONKWO, ELLIOT VANCE, MARA FELDMAN, BRAD FELDMAN, BRETT FELDMAN
* 1 A ¶ Soft jazz.
* 2 A Beige everything.
* 3 A A fish tank with one very depressed fish.
* 4 A Applause-ready bright.
* 5 A A wall of baby photos.
6 A ¶ Behind the front desk, BRENDA OKONKWO, 50s, receptionist, queen of the clipboard.
7 A At the coffee machine, DR. ELLIOT VANCE, 40s, handsome in a way that costs money.
8 A On the couch, MARA FELDMAN, 30s, nervous, holding a stack of forms, and next to her, her husband BRAD FELDMAN, 30s, who doesn't look up from his phone.
9 A ¶ Enter BRETT FELDMAN, 30s, in a suit that doesn't fit, with a bouquet.
10 D BRETT: Honey! I came as soon as I could!
11 A ¶ Everyone turns.
12 A Brad looks up.
13 A Mara looks at Brad.
14 A Brad looks at Brett.
15 A Brett looks at the bouquet, then at Mara.
16 D BRENDA (deadpan): Well. That's a lot of husbands.
17 D MARA: Brett is Brad's brother.
18 D BRETT: I'm the fun one.
19 D BRAD: He is not the fun one.
20 D DR. VANCE (reading a clipboard): Mrs. Feldman? We're ready for you.
21 D MARA: Both of them can come?
22 D DR. VANCE (smiling too widely): Of course. The more the merrier.
23 A ¶ Mara stands.
24 A Brad stands.
25 A Brett stands.
26 A They all move toward the door, then all stop, because Brenda is holding up a hand.
27 D BRENDA: Just the one husband, hon.
28 D BRAD: I'll go.
29 D BRETT: I'll go.
30 D MARA: I'm going. Alone.
31 D DR. VANCE (brightly): Excellent.
32 A ¶ Mara exits through the inner door.
33 A Dr. Vance follows.
* 34 A It closes.
35 A Brad and Brett stand in silence.
* 36 A The fish blows a bubble.
37 D BRAD: Why are you here?
38 D BRETT: Mom said you needed support.
39 D BRAD: Mom said that?
40 D BRETT: She said you looked "fragile."
41 D BRENDA (not looking up): He does.
* 42 A ¶ ON PHONE: Brad's screen lights.
* 43 A A text from an unknown number.
* 44 A ¶ ON PHONE: "dont let him in the room. hes not who u think."
45 D BRAD (reading, pale): Oh.
46 D BRETT: What?
47 D BRAD: Nothing. Spam.
48 D BRETT: Let me see.
49 D BRAD: No.
50 D BRETT: Brad.
51 A ¶ They grapple for the phone, Brett lunges, Brad ducks, the bouquet goes flying and lands in the fish tank.
* 52 A The fish, for the first time, looks interested.
53 D BRENDA (sighs): That's a four-hundred-dollar fish.

### SCENE s05198_1 | INT. NEW BEGINNINGS FERTILITY CLINIC - EXAM ROOM - CONTINUOUS
Detected names (may be incomplete or contain aliases): MARA, DR. VANCE, BRAD, BRETT, BRENDA
1 A ¶ Mara on the table, paper gown.
2 A Dr. Vance snaps on gloves, humming.
* 3 A On the counter, a vial with a handwritten label.
4 A She squints at it.
5 D MARA: That says Feldman.
6 D DR. VANCE: It does.
7 D MARA: Which Feldman?
8 D DR. VANCE (gently): The one who's paying.
* 9 A ¶ A pause.
10 A Mara sits up.
11 D MARA: Doctor, which one is it?
12 D DR. VANCE (his smile never moves): Does it matter?
* 13 A ¶ The lights flicker.
* 14 A Out in the waiting room, the fish tank bubbles.
15 A Brenda, alone at her desk, quietly locks the front door.
* 16 A ¶ This is the last time anyone will ask that question.
17 A ¶ Brad and Brett burst through the inner door, panting, the soggy bouquet still in Brett's hand.
18 D BRAD: Mara, don't let him
19 D BRETT: Honey, it's not what
20 D DR. VANCE (overlapping): Gentlemen, please, this is a sterile environment.
21 D MARA (overlapping): Which of you?
22 D BRAD (overlapping): It wasn't me!
23 D BRETT (overlapping): It was supposed to be a gift!
24 A ¶ Mara looks at one, then the other, then at the vial, then at Dr. Vance, who has quietly slipped a hand into his coat pocket.
* 25 A A cold gleam of metal.
26 D DR. VANCE: Everyone stay very calm.
27 D BRENDA [O.S.] (through the door): Doctor, your two o'clock is here!
28 D DR. VANCE (without turning): Reschedule her.
29 D BRENDA [O.S.]: She says she's the police.
30 A ¶ Everyone freezes.
31 A Dr. Vance's smile finally falls off his face.
32 A Brett holds up the soggy bouquet like a white flag.
33 D BRETT (whispering): Can I go now?

### SCENE s05199 | INT. NGUYEN KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): KIT, JO
* 1 A ¶ Dark.
* 2 A A phone flashlight swings across the room and lands on a fridge covered in magnets.
3 A A neighbor's dog BARKS outside.
4 A Through the window, two teenagers on a trampoline in the next yard use their phones as lanterns, shrieking with laughter.
5 A ¶ Kit, 40s, pyjama bottoms and a "World's Okayest Coach" mug, stumbles in and sets down a laptop on the counter.
* 6 A It's at 4 percent.
7 A Behind him Jo, 40s, his wife, in a team fleece, carries a stack of whiteboards under one arm and a bag of frozen peas under the other.
* 8 A ¶ The laptop lights up.
* 9 A Slack, glowing, on screen.
* 10 A ¶ ON SCREEN: #coaches-all - Marcus: "Anyone got the lineup for Saturday? lights are out here too lol"
* 11 A ¶ ON SCREEN: #coaches-all - Priya: "Kit?? you're on the sheet"
12 A ¶ He winces.
13 A Taps a key.
* 14 A The screen dims.
15 D KIT: Battery saver. Battery saver.
16 D JO: You said you'd print it.
17 D KIT: The printer needs power. It's literally in the name.
18 A ¶ She slaps the peas onto the counter, sets down the boards, and starts scribbling in the dark with a marker that doesn't work.
19 A He holds the phone light over her shoulder while she draws Xs and Os and arrows pointing off the edge of the board.
20 A He frowns, she frowns, and the dog outside barks again, and the teenagers on the trampoline shout something about a penalty.
21 D JO: Left wing's a problem.
22 D KIT: Left wing's a Tuesday problem. It's a Saturday problem now.
23 A ¶ She turns, glares, and holds out the marker.
24 A He takes it.
25 A Tries it on the board.
* 26 A Nothing.
27 A Shakes it.
28 A Tries again.
* 29 A Nothing.
30 D JO: Give it here.
31 A ¶ She snatches it back.
32 A Bites the cap.
33 A Presses hard.
* 34 A A faint grey line appears, then a clean black one, bold as a gunshot.
35 D JO [CONT'D]: There.
36 D KIT: You intimidated a marker.
37 D JO: It knows who's in charge.
* 38 A ¶ The laptop blinks.
* 39 A 2 percent.
* 40 A ¶ ON SCREEN: #coaches-all - Marcus: "ok we're going with 4-4-2 unless someone objects"
* 41 A ¶ ON SCREEN: #coaches-all - Priya: "Kit?? last chance"
42 A ¶ Kit lunges.
43 A Jo lunges.
44 A Their hands collide on the keyboard and the machine makes a tiny, dying chirp.
* 45 A ¶ ON SCREEN: #coaches-all - Kit: "4-3-3 left wing Danny, subs on at 60"
* 46 A ¶ Send.
* 47 A The screen goes black.
* 48 A ¶ Silence.
* 49 A The darkness settles.
50 A Even the dog stops.
51 D KIT: Was that right?
52 D JO: No.
53 A ¶ He laughs.
54 A She laughs.
* 55 A The fridge shudders on, the overhead light blinks to life, and every magnet on the door sings a little as the compressor catches.
56 A ¶ They squint at each other in the sudden brightness.
57 A He's holding the marker.
58 A She's holding the peas.
59 D KIT: Dinner?
60 D JO: Peas.
61 D KIT: Peas.
