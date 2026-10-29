You are an annotator labeling screenplay scenes for a dataset.

## What to label

Each scene is given as numbered units. `A` = one sentence of action/description text (¶ marks the
first sentence of a paragraph). `D` = one dialogue block, shown as `NAME [extensions] (parenthetical): text`.

Produce one JSON object per scene:

{
  "scene_id": "<id>",
  "cast": {"<every character name variant used in the scene>": "<canonical name>", ...},
  "beats": [<unit numbers that START a beat, ascending; the first non-heading unit always starts one>],
  "lines": {
    "<n>": {"t": "A"|"D"|"S", "who": ["<canonical>", ...], "emo": {"<canonical>": ["<emotion>", <0-1>]}, "c": <0-1>},   // for A units
    "<n>": {"to": ["<canonical>"|"ALL"|"SELF"|"NONE", ...], "emo": ["<emotion>", <0-1>], "c": <0-1>}                     // for D units
  },
  "tension": [<one score 0-100 per beat, same order as "beats">]
}

Rules:
- cast: map EVERY name variant (cue names, CAPS introductions, aliases like STRANGER -> INGRID once named,
  DET. RUIZ / RUIZ) to one canonical name per real person. Unnamed extras get a short canonical (e.g. "GUARD").
- Every A and D unit must appear in "lines" (skip the heading and transitions).
- A units, field t: "A" = a character does something (acts, moves, speaks-without-cue, reacts);
  "D" = a character is described (appearance, introduction, state) ; "S" = no character: setting, objects, sound,
  atmosphere. who = the character(s) performing the action or being described, as canonical names; empty for "S".
  Use several names only when they genuinely act jointly ("They fight", "Both freeze"). Resolve every pronoun.
  If the actor is a crowd or someone not in the cast, use "OTHER".
- D units: to = who the line is addressed to. "ALL" = the group, "SELF" = muttered/thinking aloud,
  "NONE" = no listener (e.g. pure voice-over narration). A phone/radio listener counts as a character.
- emo: emotion actually conveyed by the line's text, subtext, parenthetical or behaviour - not guessed from the
  plot. One of: neutral, joy, sadness, anger, fear, surprise, disgust, affection, with intensity 0-1
  (neutral -> 0-0.2). For A units give emo only for characters whose emotion the sentence shows; otherwise {}.
- c = your confidence that who/to is right (0-1). Be honest: ambiguous pronouns deserve low confidence.
- beats: a beat is the smallest unit in which something dramatically changes - an action, a reaction, a shift
  in tactic, a reveal, an entrance. A beat may be dialogue only, action only, or mixed, and may split an action
  paragraph. Typical beats are 1-8 units long.
- tension: dramatic tension a reader feels in that beat - stakes, conflict, threat, urgency, suspense. Loud or
  violent is not automatically tense; a quiet threat can be very tense. Use absolute anchors so scores compare
  across scenes: 0-15 calm/mundane, 15-35 mild friction or unease, 35-60 clear conflict or suspense,
  60-80 high stakes, open confrontation or danger, 80-100 peak life-or-death / climactic moment.


Write each scene's JSON (valid JSON, no comments, no trailing commas) to the given path with the Write tool. Do not write anything else. Reply only with "done N".

## Scenes

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05037.json
### SCENE s05037 | INT. FISHING BOAT - CABIN - NIGHT
Detected names (may be incomplete or contain aliases): KIM, KIP, A MAN'S VOICE
1 A ¶ A small cabin that smells of diesel and wet wool.
2 A A radio phone crackles on its hook beside a chart pinned flat with two mugs.
3 A The boat rolls; the mugs do not move.
4 A ¶ Kim sits at the table, perfectly upright, hands around nothing.
5 A Kip stands at the door, a duffel bag at his feet, and does not take off his coat.
6 D KIM: You've come all this way in weather like this to stand in a doorway. I should be flattered. Our father would have said: Kip, a man who won't sit has already decided to leave. And you did decide, didn't you? Somewhere on the road, between the third petrol station and the one where you bought the sandwiches you haven't eaten. I could see it in how you tied the rope.
7 D KIP (beat): I'm sitting.
8 A ¶ He does not sit.
9 A The radio phone RINGS.
10 A Neither of them moves.
11 A It rings four times, five.
12 D KIM (not turning): That will be for you.
13 D KIP (beat): How would you know?
14 D KIM: Nobody has called this boat in two years.
15 A ¶ Kip crosses and lifts the receiver.
16 A He listens.
17 A His jaw works.
18 D A MAN'S VOICE [V.O.] (crackling, distant): Kip. Mr. Brandt wants to know if it's done. We have the other half of the money waiting. He says tonight, or not at all.
19 A ¶ Kip lowers the receiver slowly to his chest.
20 A Kim has not moved.
21 A Kim is looking at the chart, tracing a finger along a coastline that no longer exists.
22 D KIM: It's a lovely story, you know. Two brothers on a boat. One of them has to be the wave, and one of them the rock. I have always been the rock. It is very quiet being the rock.
23 D KIP (into the receiver, lifeless): Tell him tomorrow.
24 D A MAN'S VOICE [V.O.] (crackling): He said tonight.
25 A ¶ Kip hangs up the phone.
26 A He picks up the duffel and, with great care, sets it on the table between them.
27 A He unzips it a few inches and then, just as carefully, zips it shut again.
28 A ¶ This is the last time they will sit at this table.
29 D KIM (softly): Put the kettle on, Kip. Whatever is in the bag will keep till it boils.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05038.json
### SCENE s05038 | INT. CHURCH BASEMENT - AA MEETING - NIGHT
Detected names (may be incomplete or contain aliases): TIME, PHILLIPA ROSS, DENNIS CAHILL
1 A ¶ Folding chairs in a circle.
2 A A coffee urn on a card table.
3 A A banner reading ONE DAY AT A TIME hangs crooked over a stack of Christmas decorations.
4 A DR. PHILLIPA ROSS, 40s, hospital lanyard still around her neck, sits across from DENNIS CAHILL, 60s, an ex-paramedic in a cardigan too warm for the room.
5 D DENNIS (raising his paper cup, to the empty chairs): Hi, I'm Dennis, and I'm an alcoholic.
6 D PHILLIPA (deadpan, to the empty chairs): Hi, Dennis.
7 D DENNIS (leaning in): Phillipa, we're the only two people here. You can skip the choir response.
8 D PHILLIPA (beat, sipping): I like to keep my form.
9 A ¶ A door SLAMS upstairs.
10 A They both look at the ceiling.
11 A Dennis counts to three on his fingers.
12 D DENNIS (whispering): That's the bingo group. They're worse than we are.
13 D PHILLIPA (straightening, clinical): Dennis. Can I tell you something, as a doctor and not as a drunk?
14 D DENNIS (settling, hand over heart): Please. I've been hoping someone would finally diagnose me.
15 D PHILLIPA (a long breath): I operated on a man this morning. Thirty-eight. He had a bad liver and a good laugh. He said, Doctor, I'm going to quit. I said, you'd better. And then I came here and sat in a car for forty minutes because I wanted a drink more than I've ever wanted anything.
16 D DENNIS (softly, no joke): Did you go in the bar?
17 D PHILLIPA (shaking her head): I came here. I came here and I'm telling you I'm scared. She is not supposed to be scared. She is supposed to be the one holding the scalpel.
18 A ¶ Dennis looks at her.
19 A He does not say it is fine.
20 A The urn GURGLES.
21 D DENNIS (gently): She's allowed. So is he. So are you.
22 D PHILLIPA (wiping her eyes, almost laughing): Dennis. You used three pronouns.
23 D DENNIS (proud): I contain multitudes. And a lot of decaf.
24 A ¶ The phone on the card table BUZZES.
25 A Phillipa glances at it.
26 A Her face goes still.
27 D PHILLIPA (reading, quiet): It's the hospital. They need me back.
28 D DENNIS (standing, offering his cardigan, as if it were a medal): Then go. Come back next week and tell me how it went.
29 D PHILLIPA (taking the cardigan, absurdly moved): It smells like a library.
30 D DENNIS (beat): It smells like twenty-six months.
31 A ¶ She nods.
32 A She puts it on over her scrubs.
33 A Upstairs, somebody shouts BINGO and the whole ceiling rattles.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05039_0.json
### SCENE s05039_0 | EXT. CITY STREET - FOOD TRUCK - DAY
Detected names (may be incomplete or contain aliases): 
1 A ¶ A white food truck is parked near the old market.
2 A The sign says BIG DAVE'S TACOS.
3 A A small line of customers waits in the sun.
4 A The smell of onions and hot oil is in the air.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05039_1.json
### SCENE s05039_1 | INT. FOOD TRUCK - CONTINUOUS
Detected names (may be incomplete or contain aliases): BIG DAVE, JEN, MO, SAM, MRS. K, TEENAGE GIRL, THE MAN IN THE BROWN COAT
1 A ¶ Narrow and hot.
2 A BIG DAVE, 50s, wide shoulders, works the grill.
3 A JEN, 30s, takes orders at the window.
4 A MO, 20s, is cutting limes and does not talk much.
5 A SAM, 30s, a quiet man in a clean jacket, sits on a milk crate near the back with a paper cup of coffee.
6 D JEN (to everyone): Okay, team. Three pork, two fish, one no onions. Mo, the no-onions one is for the old lady.
7 D MO (not looking up): Okay.
8 D BIG DAVE (flipping meat): The old lady always want extra sauce. She says it is for her health.
9 D JEN (laughing): Dave, her health is fine. She just likes sauce.
10 A ¶ Sam lifts his cup.
11 A He watches the street.
12 A A grey car is parked across the road for the second day.
13 D SAM (quietly, to himself): Same car. Same man.
14 D JEN (over her shoulder): Sam, you say something?
15 D SAM: No. Nothing. I talk to the coffee.
16 D BIG DAVE (smiling): The coffee is the best listener in the truck.
17 A ¶ A phone BUZZES on the shelf above the grill.
18 A Big Dave wipes his hands on his apron and picks it up.
19 D BIG DAVE [CONT'D] (into the phone): Hello? Yes. Yes, this is Dave.
20 D MRS. K [V.O.] (phone, crackling, warm): David, it is Mrs. Kowalczyk from the corner. Is my delivery ready? My grandson is coming at one o'clock and he is very hungry.
21 D BIG DAVE (into the phone): Yes, Mrs. K. Twelve tacos, wrapped, in the back. Mo will bring them in ten minutes.
22 D MRS. K [V.O.] (phone): You are a good boy. Tell Jen she needs a husband.
23 D JEN (loudly, from the window): I heard that!
24 A ¶ Big Dave puts the phone down, smiling.
25 A Mo slides the limes into a plastic tub.
26 D MO (quietly, to Sam): You are looking at the car again.
27 D SAM (beat): Maybe I am.
28 D MO (shrugging): Is not our business. We make tacos.
29 D SAM (looking at him): You are right. We make tacos.
30 A ¶ A customer, a TEENAGE GIRL in headphones, steps to the window and puts down a ten-dollar bill.
31 D JEN (to the girl): Hi. What can I make for you?
32 D TEENAGE GIRL: Just two. Anything.
33 D JEN (over her shoulder): Two pork, Dave!
34 D BIG DAVE (to the grill, to himself): Two pork. Always pork. Nobody is brave anymore.
35 A ¶ Outside, the grey car's door opens.
36 A A man in a brown coat gets out and crosses the road slowly, hands in his pockets.
37 D SAM (standing, setting down his cup, soft): Everyone. Stay calm. Keep working.
38 D JEN (low): What is happening?
39 D SAM (not turning): Maybe nothing. Maybe a man wants a taco.
40 A ¶ The man arrives at the window.
41 A He looks past Jen, past the grill, and finds Sam.
42 D THE MAN IN THE BROWN COAT: Hello, Sam. It has been a long time.
43 D SAM (a pause, level): Yes. A long time, Inspector.
44 D BIG DAVE (to the grill, muttering): Inspector. Of course. The one day I forget the napkins.
45 D JEN (whispering, to Mo): Is this a joke?
46 D MO (whispering): I think no.
47 A ¶ The man puts a business card on the counter.
48 A Jen reads it without touching it.
49 D THE MAN IN THE BROWN COAT: Do not worry. I am not here for the truck. I only wish to talk. Five minutes. Then I eat, and then I go.
50 D SAM (taking off his apron, folding it neatly): Dave. Please keep my coffee warm.
51 D BIG DAVE (still not turning): The coffee will wait. It is a patient coffee.
52 A ¶ Sam steps out of the back door.
53 A The man in the brown coat holds it for him.
54 A They walk down the street together, slowly, the way old friends walk, or old enemies.
55 D JEN (to Mo, to Dave, to the air): Okay. Does anyone know what just happened?
56 D MO (cutting a lime): No.
57 D BIG DAVE (flipping the pork): Two pork for the girl. Then we will see.
58 A ¶ Jen sighs and wipes the counter.
59 A The line shuffles forward.
60 A The sun keeps shining, and the onions keep sizzling, as if nothing in the world had changed at all.
61 A ¶ A phone BUZZES again on the shelf.
62 A Nobody picks it up.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05040_0.json
### SCENE s05040_0 | INT. PRIYA'S BEDROOM - NIGHT
Detected names (may be incomplete or contain aliases): PRIYA IYER, DESMOND OKAFOR
1 A ¶ SUPER: "TUESDAY, 11:48 PM"
2 A ¶ A narrow room under a slanted ceiling, fairy lights stapled in a sagging U above the bed, a desk buried in chemistry notes, three half-empty mugs, a corkboard crowded with ticket stubs and one photo turned face-down.
3 A A laptop glows.
4 A Rain ticks at the dormer window while PRIYA IYER, 16, braids and hoodie sleeves chewed to threads, sits cross-legged on the duvet and her older cousin DESMOND OKAFOR, 24, lean, careful, a courier's lanyard still around his neck, stands in the doorway with his car keys pinched between two fingers as the house creaks below them.
5 A ¶ INSERT - LAPTOP SCREEN
6 A ¶ A cursor blinks inside a locked folder named "DON'T".
7 A ¶ BACK TO SCENE
8 D DESMOND (closing the door behind him with a slow click): Your mum said you weren't sleeping.
9 D PRIYA (not looking up, tapping a pen against her knee): Mum says a lot of things.
10 D DESMOND (crossing to the desk, lifting a mug, sniffing it, setting it down): This is tea from Sunday.
11 D PRIYA (shrugging one shoulder): It's a collection.
12 A ¶ This is the last ordinary minute either of them will have.
13 D DESMOND (sitting on the desk chair, turning it to face her): You texted me at two a.m. Just a street name. Harrow Lane.
14 D PRIYA (pulling the laptop an inch closer to her stomach): Wrong number.
15 D DESMOND (a small, patient smile): Priya. It was my number.
16 A ¶ POV - DESMOND
17 A ¶ The corkboard.
18 A The face-down photo.
19 A A corner of it lifting in the draft from the vent.
20 D PRIYA (following his gaze, standing too fast, pressing the photo flat with her palm): Don't.
21 D DESMOND (hands open, palms up, leaning back): I haven't moved.
22 D PRIYA (sitting again, farther from the board): You were on Harrow Lane that night. Weren't you.
23 D DESMOND (rubbing his thumb along the lanyard): I'm on lots of lanes. It's the job.
24 D PRIYA (opening the laptop, turning it so he can see): Eleven deliveries. Nine of them are the same house.
25 A ¶ INSERT - LAPTOP SCREEN
26 A ¶ A spreadsheet.
27 A Dates in a column.
28 A A single address repeated.
29 A A timestamp, 11:52 PM, highlighted yellow.
30 D DESMOND (his eyes on the screen, his jaw working once): Where did you get this.
31 D PRIYA (very quietly): Your app. You left yourself logged in on the family iPad.
32 D DESMOND (standing, walking to the window, pulling the curtain a finger's width): You went through my account.
33 D PRIYA (not moving): A girl went missing from that house, Des.
34 D DESMOND (without turning, his reflection fogging the glass): Girls go missing from lots of houses.
35 D PRIYA (opening a drawer, taking out a small silver key and holding it up): She dropped this in your bag. Mum found it in the car in March and gave it to me because I "like puzzles."
36 D DESMOND (turning, eyes on the key, his voice level): Put that down.
37 D PRIYA (closing her fist around it): It opens the locked folder. Doesn't it? The one you made for her.
38 D DESMOND (a step forward, then stopping himself): Give me the key and I'll explain it.
39 D PRIYA (shaking her head, standing on the bed so she is taller than him): Explain it first.
40 T SMASH CUT TO:

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05040_1.json
### SCENE s05040_1 | INT. PRIYA'S BEDROOM - CONTINUOUS
Detected names (may be incomplete or contain aliases): DESMOND, PRIYA
1 A ¶ The rain is louder now.
2 A The lights above the bed flicker once.
3 A Downstairs a television is switched off and the house goes quiet in a way that feels listened-to.
4 D DESMOND (lunging a half-step, catching himself on the desk, knocking a mug to the floor where it does not break): You think I did something to her.
5 D PRIYA (holding the key behind her back): I think you were there at 11:52.
6 D DESMOND (pointing at the screen, his voice cracking upward): I was there because she called me! She called ME. She asked for a ride, and I was forty minutes away, and I told her to wait inside, and she didn't, and I have driven that lane every night since, because if I had been faster--
7 D PRIYA (frozen, the key slipping in her sweaty fingers): You never said.
8 D DESMOND (sinking onto the chair, hands over his face): Nobody asked me the right question.
9 A ¶ INSERT - THE FACE-DOWN PHOTO
10 A ¶ Pressed against the cork.
11 A A girl's handwriting on the back: "for Des. don't be late."
12 D PRIYA (peeling the photo off the board, turning it over, her breath leaving her): She wrote this to you.
13 D DESMOND (lifting his head, wet-eyed, looking at the key in her hand): Open the folder, Priya. Please. I never could.
14 D PRIYA (kneeling at the laptop, sliding the key into a small drive port, her hand shaking): If it's something awful--
15 D DESMOND (a very small nod): Then it's hers. And we'll know.
16 A ¶ ON SCREEN
17 A ¶ The folder opens.
18 A A single video file.
19 A The thumbnail shows a dark street and a figure in a yellow raincoat looking back over her shoulder.
20 D PRIYA (her finger over the trackpad, not pressing): Together?
21 D DESMOND (moving to sit beside her on the bed, close, not touching): Together.
22 D PRIYA (pressing play, the sound already rising from the speakers like a held breath): Okay.
23 A ¶ SLOW PUSH IN on the screen as the rain outside the window finds the same rhythm as the rain in the video, and neither of them blinks.
24 T CUT TO BLACK.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05041.json
### SCENE s05041 | INT. FREIGHT DEPOT - LOADING FLOOR - DAY
Detected names (may be incomplete or contain aliases): SAFETY FIRST, HALVORSEN, REPORTER, MAYA OKONKWO, DEV, MUM, KORVAC
1 A ¶ HANDHELD.
2 A A cheap camera, wobbling, date stamp in the corner.
3 A Pallets, shrink-wrap, a forklift beeping somewhere.
4 A A banner: "SAFETY FIRST - 212 DAYS."
5 A ¶ ON CAMERA: HALVORSEN, 50s, shift supervisor, clipboard, lanyard, mustache.
6 D HALVORSEN (adjusting the camera strap, grinning): Is it recording? The red light's on. Okay. Day two hundred and twelve. Everything's on schedule. We love schedules.
7 D REPORTER [O.S.] (laughing): Tell them what you're shipping.
8 D HALVORSEN (tapping a crate with his pen): Boots, blankets, tinned peaches. Humanitarian, all of it. Dull as dishwater.
9 D MAYA OKONKWO (coming into frame, a box on her hip, tugging her gloves off): He says "dull" like it's a compliment. We had a pallet of tinned peaches yesterday that I swear wasn't there on the manifest.
10 D HALVORSEN (waving the clipboard): The manifest is a suggestion.
11 D DEV (rolling a hand truck past, not stopping): Maya, your mum's on speaker. Phone's in the break room.
12 A ¶ ON PHONE: "MUM: where are u. news is on. call me"
13 D MAYA OKONKWO (pulling out her own phone, thumbing it, holding it up to the lens): She sends the same text every time there's weather on the other side of the world.
14 A ¶ ON PHONE: "MAYA: working. love you. stop watching it."
15 A ¶ INTERCUT - FLOOR AND MUM'S KITCHEN
16 D MUM [V.O.] (through the phone, tinny, a kettle shrieking behind her): Don't tell me to stop watching. There is a man on the television pointing at a map and he said your port.
17 D MAYA OKONKWO (turning her back to the camera, lowering her voice): Mum. It's a warehouse in a suburb. Nobody is pointing at it.
18 D MUM [V.O.] (the kettle clicking off): Then why is there a truck at the gate that isn't yours?
19 D MAYA OKONKWO (looking up, eyes going to the far dock door): Hold on.
20 A ¶ ANGLE ON the far dock.
21 A A flatbed, no logo, idling.
22 A Two men in dark jackets stand beside it.
23 A A third, KORVAC, 40s, grey stubble, steps down.
24 D HALVORSEN (whispering, lowering the camera slightly): He told me she'd be here Thursday. She's not due until Thursday.
25 D DEV (arriving beside them, voice flat): He said she. I thought you meant the shipment.
26 D HALVORSEN (a nervous laugh): He means the shipment. She means the shipment. Everyone means the shipment.
27 D KORVAC (striding up, flashing a laminated card): Inspection. All hands to the front. Phones in the bin, please.
28 D MAYA OKONKWO (into the phone, not moving): Mum, I'll call you back.
29 D MUM [V.O.] (sharply): Don't hang up. He's not on the news. He's in your building.
30 A ¶ ON PHONE: "MUM: dont put it in the bin"
31 D KORVAC (pointing at the lens): And turn that off.
32 D HALVORSEN (stepping in front of the lens, hand raised): Sir, it's a documentary. We're cleared.
33 D KORVAC (quietly, reaching past him): Not by me.
34 A ¶ The camera drops.
35 A The frame tilts to a ceiling, to a boot, to a crate stencilled "PEACHES" with its lid already pried loose and something other than peaches inside.
36 D DEV (off screen, barely audible): Maya. Don't look in the box.
37 T CUT TO BLACK.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05042.json
### SCENE s05042 | INT. CAR (MOVING) - NIGHT
Detected names (may be incomplete or contain aliases): MO, THE WOMAN, DR. NAIR, JEN
1 A ¶ SUPER: "2:04 AM"
2 A ¶ Wet streetlights slide across the windshield.
3 A MO, 30s, rideshare driver, hands at ten and two.
4 A In the back, THE WOMAN, 40s, scrubs under a grey coat, a cooler bag on her lap, thumb hovering over her phone.
5 A ¶ CLOSE ON the cooler bag.
6 A A biohazard sticker.
7 A A digital display on it blinking: 03:12.
8 D MO: Hospital's six minutes out. You said the drop's at the transplant door?
9 D THE WOMAN: Side entrance. Don't stop at the main.
10 A ¶ Her phone BUZZES.
11 A She answers on speaker.
12 D DR. NAIR [V.O.]: Where are you? The patient is on the table and the clock's running.
13 D THE WOMAN: Six minutes. Maybe five.
14 D DR. NAIR [V.O.]: Jen, the courier crashed. I'm told you're riding with a stranger.
15 D JEN (low, to herself): Here we go.
16 A ¶ ANGLE ON Mo's eyes in the rear-view mirror.
17 A A red light ahead.
18 A He slows, then runs it.
19 D MO: Sorry. Hold on.
20 A ¶ INSERT - THE COOLER DISPLAY
21 A ¶ 03:09.
22 A 03:08.
23 A ¶ WE SEE headlights swing in behind them, high beams, closing fast.
24 D JEN: Mo, who is that?
25 D MO (flooring it): Not my brother-in-law. Seatbelt.
26 A ¶ BACK TO SCENE
27 D DR. NAIR [V.O.]: Jen? Jen, talk to me.
28 D JEN (gripping the door handle): Keep the line open. We're not stopping.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05043_0.json
### SCENE s05043_0 | INT. ST. BRIDGET'S CHURCH BASEMENT - NIGHT
Detected names (may be incomplete or contain aliases): KIM HALLORAN, KIP HALLORAN, MR. DELACROIX, SISTER AGNES, BIG TOMASZ
1 A ¶ MONTAGE - FOLDING CHAIRS, STYROFOAM CUPS, A BANNER THAT SAYS "ONE DAY AT A TIME" WITH THE "ONE" PEELING OFF
2 D KIM HALLORAN (slamming a coffee pot onto the table, steam rising): I am telling you, the sober cake is not a cake, it is a loaf, and I will not be lied to about baked goods in a house of God.
3 D KIP HALLORAN (sitting in the circle, raising one finger like a student): Technically we're in the basement.
4 D MR. DELACROIX (rubbing his eyes under his glasses): Technically we are all in the basement.
5 A ¶ This is the loudest this room has been all year.
6 D KIM HALLORAN (pointing at Kip with a stir stick): You promised me, Kip. You said no more texts to the ex.
7 A ¶ ON PHONE: "KIP: just checking in. hope u are well"
8 D KIP HALLORAN (hiding the phone under his thigh): That's not me. That's a different Kip.
9 D SISTER AGNES (from the folding table, arranging donuts into a perfect spiral): There is only one Kip, and the Lord has seen your thumbs.
10 D BIG TOMASZ (raising his hand slowly, standing, sitting back down, standing again): Can I say something? I only came for the donuts, and I am now somehow crying, and that is Kip's fault.
11 D KIM HALLORAN (softening, setting down the stir stick): Oh, Tomasz.
12 D MR. DELACROIX (clapping once, bright): Okay! Deep breaths. In through the nose. Out through the donut.
13 D SISTER AGNES (offering the plate around the circle): Take one. They are not a sacrament.
14 D KIP HALLORAN (taking two, handing one to Kim): Truce?
15 D KIM HALLORAN (biting into it, rolling her eyes): Truce. But the loaf thing stands.
16 T SMASH CUT TO:

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05043_1.json
### SCENE s05043_1 | INT. ST. BRIDGET'S CHURCH BASEMENT - LATER
Detected names (may be incomplete or contain aliases): 
1 A ¶ The chairs are stacked.
2 A The banner finally falls.
