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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusKT/group_0073.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s05006 | INT. SUBWAY CAR - MOVING - DAY
Detected names (may be incomplete or contain aliases): KENJI ABARA, JAMAL STRICKLAND, COMMUTERS, DEE ABARA
* 1 A ¶ ON CAMERA: handheld, shaky.
* 2 A Rush hour.
* 3 A Bodies.
* 4 A Breath.
5 A ¶ KENJI ABARA, 17, holds a camcorder at chest height.
6 A Narrating low to his lens.
7 D KENJI (whispering, to camera): Day three. Same car. Same guy.
8 A ¶ PAN to JAMAL STRICKLAND, 40s, suit, earbuds in, pressed against the doors.
9 A Not looking at anyone.
* 10 A ¶ Crowd.
11 D KENJI [CONT'D] (still whispering): He gets on at Fulton. Every day. Stands right there. Takes up the whole pole.
* 12 A ¶ Train lurches.
* 13 A Squeal of brakes.
14 A ¶ THE COMMUTERS shift as one, a wall of coats and elbows.
* 15 A A bag swings into Kenji.
16 D COMMUTERS (muttering): Sorry. Excuse me. Mind the door.
* 17 A ¶ Silence.
18 A ¶ Kenji lowers the camera.
19 A Raises it again, slightly higher.
20 D KENJI (to Jamal): Hey. Your hand's on my sister's bag.
21 D JAMAL (pulling an earbud, flat): What?
22 D KENJI (louder): Her bag. You've been touching it for three stops.
* 23 A ¶ Nothing.
24 A The car goes quiet around them.
25 A Someone looks at their shoes.
26 A ¶ A young woman, DEE ABARA, 15, Kenji's sister, edges forward, clutching the strap against her chest.
27 A She doesn't look up.
28 D JAMAL (smiling thinly, to the car): Kid's confused. Crowded train. It happens.
29 A ¶ Kenji's grip on the camera whitens.
* 30 A The light on the lens glows red.
31 D KENJI (very quiet): Say it again. Into the camera.
32 A ¶ Jamal's smile drops.
33 A He lunges for the lens, Kenji pulls back, Dee shoves between them, a briefcase hits the floor, THE COMMUTERS surge back, the pole shakes, a stranger shouts for the emergency cord.
* 34 A ¶ The camera tumbles.
* 35 A Spins.
* 36 A The floor.
* 37 A Shoes.
* 38 A Black.

### SCENE s05007 | INT. NEOSPORT ARENA - FINALS STAGE - NIGHT
Detected names (may be incomplete or contain aliases): HEAD REFEREE LIANG PETROV, TECHNICAL DIRECTOR AMARA SOYINKA, ADJUDICATOR FELIX BRANDT, PANEL, HOODIE PLAYER, DANTE
* 1 A ¶ Banks of LED.
* 2 A Ten thousand seats, a hush.
* 3 A Six chairs on a raised dais, six headsets.
* 4 A Stage lights low.
* 5 A Overhead, a countdown reads 00:04.
* 6 A ¶ The match has been decided.
* 7 A Aftermath: the winners hold position, the losers don't.
8 A ¶ HEAD REFEREE LIANG PETROV, 40s, headset and clipboard, stands at the bench with TECHNICAL DIRECTOR AMARA SOYINKA, 30s, laptop on a cart, and ADJUDICATOR FELIX BRANDT, 50s, steel-rimmed glasses and a rulebook.
* 9 A ¶ CLOSE ON the main screen.
* 10 A The final frame freezes: a character mid-leap, a glitch rippling across its sprite.
11 D PETROV (into radio): Hold the broadcast. All stations hold. Judges to the dais.
12 D SOYINKA (typing): I've got packet loss on station four. Latency spiked at one-forty-two. That's not their connection. That's us.
13 D BRANDT: Rule eleven point three. Interference by hardware fault voids the round if verified within sixty seconds. We are at fifty.
14 A ¶ THE ARBITERS' PANEL, five officials in grey blazers, file up the steps as one, tablets raised, faces unreadable.
* 15 A ¶ ANGLE ON station four.
16 A A competitor, a HOODIE PLAYER, lowers his hands from the keyboard and sits perfectly still, hood up, eyes down.
17 D PETROV: Who's on four?
18 D SOYINKA: Registered as Ghost_Rider. Real name's not on the sheet. He signed in under a handle.
19 D BRANDT (sharp): Under a handle? That's a violation. Players must register legal names before qualifiers.
20 A ¶ THE HOODIE PLAYER pulls back his hood.
21 A Late 20s, calm, a faint grin.
22 A DANTE VASQUEZ.
23 D DANTE (into mic, to the crowd): Dante Vasquez. Since you asked.
* 24 A ¶ Murmur.
25 A The ten thousand lean in.
26 A Soyinka turns her screen to Petrov.
27 A Brandt flips pages, Petrov unclips his radio, the panel exchanges glances, and the countdown ticks to zero.
28 D SOYINKA (quiet): It's not a fault, Liang. It's a patch. Someone pushed a build during the round. The signature is his.
29 A ¶ WE SEE Dante rise, step off the dais, and hand the referee a drive.
30 D DANTE: It's all on there. Every match. Every edit. I wanted somebody to ask.
31 D PETROV (taking it, exhaling): Right. Everybody sit down. We're going to do this by the book.

### SCENE s05009 | EXT. BORDER CHECKPOINT - DUSTY ROAD - DAY
Detected names (may be incomplete or contain aliases): MARSHAL ELIAS CROWE, ROSALIND BEAUMONT, SHERIFF
* 1 A ¶ A single wooden gate.
* 2 A A booth.
* 3 A A flag that has given up.
* 4 A Heat shimmer over the gravel.
5 A ¶ MARSHAL ELIAS CROWE, 50s, dust on his hat, leans out of the booth.
6 A Before him, on a mule, sits ROSALIND BEAUMONT, 40s, rifle across her lap, face like closed shutters.
7 D CROWE: Papers.
8 D ROSALIND: Ain't got none.
9 D CROWE: Then you ain't crossing.
10 D ROSALIND (beat): You know what the last man who said that to me said after?
11 D CROWE: I'd wager nothing.
12 D ROSALIND: Nothing. That's right. Funny how that works.
* 13 A ¶ Crowe's phone RINGS in the booth.
* 14 A An old landline, cord and all.
15 A He lifts it.
16 D CROWE (into receiver): Checkpoint.
17 D SHERIFF [V.O.] (crackling): Elias, hold her. Don't let her through. She's got a warrant out in three counties.
18 A ¶ Crowe looks at Rosalind.
19 A She hasn't moved.
20 A He lowers the receiver slowly.
21 D CROWE (to her): Sheriff says I should hold you.
22 D ROSALIND (softly): And what do you say?
23 D CROWE (long beat): I say it's hot. And I'm tired. And in thirty years nobody ever asked me what I wanted. Not once.
24 A ¶ He hangs up the phone.
25 A Opens the gate.
26 D CROWE [CONT'D]: Go on. Before I think better of it.
27 D ROSALIND (touching her hat): You'll regret it.
28 D CROWE: Probably. That's what the gate's for.
29 A ¶ She clicks her tongue.
* 30 A The mule crosses.
* 31 A Dust rises.
32 A Crowe watches until she is a speck, then picks the receiver up again, and tells the sheriff she never came.

### SCENE s05013 | INT. HOLLOWAY HOUSE - KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): SAM, JULES
1 A ¶ The lights died at nine and the whole street went dark with them, and now a single candle gutters on the formica table while Sam Holloway, who has not slept properly since the summer of 1974, pours two fingers of rye into a chipped mug, and Jules, Sam's partner at the precinct, leans against the humming, silent fridge with a flashlight pointed at the floor and a cigarette burning down between two nicotine-stained fingers.
2 D SAM [V.O.]: Rule one of a blackout. Nobody trusts anybody. Not even the guy who drove you here.
3 D JULES: They cut the phone lines before the power. That's not weather, Sam.
4 D SAM (drinking): I know what it is.
5 D SAM [V.O.]: I knew the day I took the badge that every kitchen in this city would end up like this one. Quiet. Waiting for the other shoe.
6 D JULES (low): They're across the street. I counted two. Maybe three.
7 D SAM: They have a way of looking at the window. Same way my father looked at it. Like it owed him money.
8 A ¶ Jules clicks the flashlight off.
* 9 A The candle jumps.
* 10 A A car idles somewhere outside, headlights sweeping the curtains once, twice, and moving on.
11 D JULES: So we sit here and drink?
12 D SAM (setting the mug down): We sit here and listen.
13 D SAM [V.O.]: The truth about waiting is that it never ends. It just changes clothes.

### SCENE s05015 | INT. NEON ARENA - MAIN STAGE - NIGHT
Detected names (may be incomplete or contain aliases): AVA, RAY, WALT, STRANGER, MARCUS
* 1 A ¶ BOOM.
* 2 A Lights slam on.
* 3 A Ten thousand fans ROAR.
* 4 A ¶ ANGLE ON a glowing stage, two gaming rigs, a giant screen counting down from ten.
5 A ¶ Ava, 12, sits at the left rig, headset crooked, knuckles white.
6 D AVA (cracking her fingers, eyes locked on the screen): Ten seconds, Dad. Ten.
7 A ¶ Her father Ray, 40s, crouches at her side with a water bottle and a sweat-soaked T-shirt.
8 D RAY (handing her the bottle, jaw tight): Breathe, Ava. Breathe, kiddo. You've got this.
* 9 A ¶ BEEP.
* 10 A BEEP.
* 11 A BEEP.
12 A ¶ CLOSE ON Ava's thumbs, hovering over the controller.
* 13 A ¶ On the giant screen: GAME START.
14 D AVA (hammering the buttons): Left flank! Left flank! Where's Grandpa?!
* 15 A ¶ INSERT - PHONE SCREEN: "GRANDPA WALT CALLING."
* 16 A ¶ Ray's phone BUZZES on the desk.
17 A He swipes it open and props it against the monitor.
18 D WALT [V.O.] (crackling, from the phone): Is she winning? Tell me she's winning. I've got the whole bingo hall watching!
19 D RAY (shouting over the crowd): She's winning, Dad! She's down to the last round!
20 A ¶ BACK TO SCENE.
21 A ¶ On the right rig: the rival, a hooded STRANGER, face lit blue by the screen, fingers a blur.
22 D STRANGER (muttering): Not today, little one.
* 23 A ¶ KRAKOOM.
* 24 A Sparks erupt across the big screen.
* 25 A The crowd GASPS.
26 D AVA (jaw clenched): Dad, he's got the golden shield!
27 D RAY (leaning in): So take it from him!
28 D AVA (typing, teeth bared): I'm trying!
* 29 A ¶ WE SEE the Stranger's screen mirror Ava's: two avatars, one mountain, one flag.
30 D WALT [V.O.] (yelling): Ava! Remember what I taught you! Duck and weave!
31 D AVA (not looking away): It's a video game, Grandpa, not boxing!
* 32 A ¶ WHAM.
* 33 A The Stranger's avatar knocks hers back a step.
34 D STRANGER (peeling off his hood, grinning, suddenly kind): Nice one, kid. I'm Marcus, by the way. Marcus Bell. I played your dad back in the day.
35 D RAY (stunned, half-rising): Marcus?! You're THE Marcus?!
36 D MARCUS (still tapping, easy): Yep. Still got the reflexes.
37 D AVA (furious, tapping faster): Dad! Don't talk to the enemy!
38 D RAY (sitting back down fast): Sorry! Sorry, kiddo, focus!
* 39 A ¶ CLOSE ON the countdown: 00:09.
* 40 A 00:08.
* 41 A 00:07.
42 D WALT [V.O.] (from the phone, crackling): Seven seconds! Go, go, GO!
* 43 A ¶ CRASH.
* 44 A The big screen explodes in light.

### SCENE s05016 | EXT. BORDER CHECKPOINT - DAY
Detected names (may be incomplete or contain aliases): KIT, LEO, OKOYE, BRANDT
* 1 A ¶ heat coming off the asphalt. a line of cars not moving. a dog on a leash sniffs a tire while a man in a vest watches it like it might say something.
2 A ¶ Kit, 30s, sits behind the wheel of a dusty hatchback, window down, passport already in hand.
3 A Beside her, her brother Leo, 20s, picks at the seam of the seat.
4 D KIT: ok so if he asks, we're visiting our aunt
5 D LEO: we don't have an aunt
6 D KIT: we do now
7 A ¶ Officer Daria Okoye, 40s, walks up to the window, clipboard tucked under one arm.
8 D OKOYE: morning. where you headed today
9 D KIT (too fast): to see our aunt. she's, um. she's not well.
10 D OKOYE: she have a name
11 D KIT: yeah. it's. Marguerite.
12 D LEO (at the same moment): Margaret.
13 A ¶ They look at each other.
14 A Okoye does not move.
15 D OKOYE: which is it
16 D KIT: both. it's a nickname thing, she goes by both, it's a whole thing in the family
* 17 A ¶ Behind them, a kid in the next car presses his face to the glass.
18 A His mom pulls him back.
19 A A second officer, Brandt, 50s, drifts toward the hatchback from the other side, hand resting near his belt.
20 D BRANDT: trunk, please
21 D LEO: there's nothing in it
22 D BRANDT: then it'll be quick
23 A ¶ Kit and Leo both freeze.
* 24 A The dog lifts its head.
25 A Brandt and Okoye exchange a look.
26 D KIT (very quiet, to Leo): if you run i swear to god
27 D LEO (equally quiet): i'm not running. you're the one who wanted to come this way
28 A ¶ Leo pops the trunk.
29 A Brandt lifts the lid.
* 30 A Inside: a cooler, a sleeping bag, a framed photograph of an older woman.
31 D BRANDT (reading the back): Marguerite Margaret Vance. 1951.
32 D KIT (exhaling): told you
33 A ¶ Okoye lowers the clipboard.
* 34 A For a second nobody speaks.
35 A Then Okoye almost smiles.
36 D OKOYE: go on. drive safe. and say hi to your aunt for me
37 A ¶ Kit and Leo both laugh, a little too loud, as the barrier lifts and the cars behind them start to honk.

### SCENE s05018 | INT. CITY PAROLE OFFICE - RECEPTION - MORNING
Detected names (may be incomplete or contain aliases): FRANKIE, PRIYA, THE TEENAGERS, THE GUARDS, BUCKET CLANGS
* 1 A ¶ A beige room full of bad lighting and worse chairs.
2 A Two teenagers in the corner share earbuds and a bag of chips.
* 3 A A janitor's mop bucket sits unattended by the water cooler.
4 A ¶ Frankie Dunn, 30s, charming and doomed, bursts through the door with a coffee in each hand and a paper bag in his teeth.
5 A He trips over the mop bucket.
* 6 A Water SLOSHES across the floor.
7 D FRANKIE (through the bag): Mmf! Mmmf!
8 A ¶ He spits the bag out.
9 A Behind the desk, Officer Priya Nair, 30s, unflappable and unimpressed, looks up from a stack of files.
10 D PRIYA: Mr. Dunn. You're eleven minutes late.
11 D FRANKIE: Priya! Officer Priya! Light of my life! I brought you a latte, the good kind, with the little heart in the foam.
12 D PRIYA: It's a cortado. And I'm not a morning person.
13 D FRANKIE: I know. That's why I got two. One for you, one for me, one for the guy who's gonna ask me why I brought two.
14 D PRIYA: That's three, Frankie.
15 D FRANKIE (looking at his hands): Is it? Huh. I only have two hands.
16 A ¶ He slips on the wet floor, the coffees fly, and both cups SPLAT against the wall.
17 A The teenagers gasp.
18 A One of them films it.
19 D THE TEENAGERS (together, delighted): Whoa.
20 D PRIYA (pinching the bridge of her nose): Frankie. Sit down.
21 D FRANKIE (dripping): Yes, ma'am. Absolutely, ma'am. Sitting.
22 A ¶ He plops into a chair.
* 23 A It COLLAPSES with a CRACK.
24 A He lands on the floor, legs in the air.
25 D PRIYA (not even blinking): I'm adding that to the report.
26 D FRANKIE (from the floor): Priya. I need to tell you something.
27 D PRIYA: You need to give me your check-in form.
28 D FRANKIE: I have it. It's in my pocket. It's a little wet.
29 A ¶ He fishes out a soggy paper ball and holds it up like a trophy.
30 A She takes it between two fingers.
31 D PRIYA: This is a tax receipt for a hot dog.
32 D FRANKIE: It was a very good hot dog.
33 D PRIYA (finally, a crack of a smile): You are the worst parolee I have ever had.
34 D FRANKIE (sitting up, earnest): But am I your favorite?
35 D PRIYA (looking away, fighting it): That's not a thing.
36 D FRANKIE: That is totally a thing. You're smiling.
37 D PRIYA: I'm not.
38 D FRANKIE: You are! Your whole face is doing it.
* 39 A ¶ The door BANGS open.
40 A THE GUARDS, two enormous men in matching uniforms, stand in the frame.
41 D THE GUARDS (together, deadpan): Everything okay in here?
42 D PRIYA (straightening, all business): Fine. Mr. Dunn was just leaving.
43 D FRANKIE (scrambling up): I was? Oh. I was. Yes. Leaving. Great. Love that for me.
44 D PRIYA (stopping him with one finger): Thursday. Ten sharp. Bring a real receipt.
45 D FRANKIE (beaming): Bring you a coffee too?
46 D PRIYA (sighing, a warmth she can't hide): Just the one this time, Frankie.
47 D FRANKIE (backing out the door, bowing): One coffee, Priya. One. You got it.
48 A ¶ He steps in the mop bucket again.
* 49 A The BUCKET CLANGS.
* 50 A The door SLAMS behind him.
51 A The teenagers burst into applause.
52 D PRIYA (to the room, under her breath): Unbelievable.
53 A ¶ She picks up the soggy receipt, studies it, and tucks it into her drawer instead of the trash.

### SCENE s05019 | INT. SUDS AND SPIN LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): THE STRANGER, TOM, DANA
* 1 A ¶ Midnight.
* 2 A The street outside is empty and dark.
* 3 A Inside, one fluorescent light buzzes above a row of dryers, all of them still.
* 4 A A single machine in the back tumbles slowly, the clothes inside going around and around.
5 A ¶ Tom, 20s, sits on a plastic chair with a gym bag between his feet, a flashlight and a half-eaten granola bar in his lap.
6 A He has not spoken in a long time.
7 A ¶ On the other side of the room, a figure in a wet raincoat sits with her back to the wall, a hood pulled low.
8 A THE STRANGER has been there since the power went out two days ago.
* 9 A Neither of them has said why they are here.
10 D TOM (finally): Is that machine still working?
11 D THE STRANGER: Just the one. I think it's on a different circuit.
12 D TOM: Huh.
* 13 A ¶ A long pause.
* 14 A The dryer thumps.
* 15 A Water drips somewhere behind the wall.
16 D TOM [CONT'D]: How much food do you have left?
17 D THE STRANGER: Not a lot. Some crackers. A can of beans I can't open.
18 D TOM: I have a can opener. On my keys.
19 D THE STRANGER (a short breath that is almost a laugh): Of course you do.
20 A ¶ Tom stands, crosses the room, and holds out the keyring.
21 A She takes it without looking up.
* 22 A The can opens with a tiny, rusty squeak.
23 D THE STRANGER [CONT'D] (pushing back her hood): Thanks. I'm Dana, by the way.
24 D TOM: Tom.
25 D DANA: I know. It's on your bag.
26 D TOM (glancing down, almost smiling): Right.
* 27 A ¶ They sit in silence for a while, the only sounds the dryer and the dripping water.
28 A Dana eats a spoonful of beans, offers the can.
29 A Tom takes it, eats, hands it back.
30 D DANA: You think anyone's coming?
31 D TOM: I don't know. Eventually.
32 D DANA: Eventually is a long time.
33 D TOM (quietly): It's all we've got.
* 34 A ¶ The dryer finally slows.
* 35 A It clunks, groans, and stops.
* 36 A The room is utterly still.
37 A Dana looks at the dead machine, then at Tom.
38 D DANA: Well. At least the towels are warm.
39 A ¶ Tom laughs, a real one, small and cracked.
40 A Dana laughs too.
* 41 A Outside, far off, a single siren starts up and fades away again.

### SCENE s05020 | INT. FOOD TRUCK - NIGHT
Detected names (may be incomplete or contain aliases): KIM, KIP
* 1 A ¶ Grill hissing.
2 A Kim flips a patty, eyes on the window.
* 3 A ¶ Her phone BUZZES on the counter.
4 A She puts it on speaker.
5 D KIM: Where are you?
6 D KIP [V.O.]: Two minutes out. Is he there?
7 D KIM: Black sedan. Same spot. Engine running.
8 D KIP [V.O.]: Don't look at him.
9 D KIM: I'm not looking.
10 A ¶ She looks.
11 A Quick.
12 A Back to the grill.
13 D KIP [V.O.]: Kim.
14 D KIM: I know.
15 D KIP [V.O.]: Hand me the bag when I knock. Don't say a word.
16 D KIM: You said the bag was clean.
17 D KIP [V.O.]: It is.
* 18 A ¶ A beat.
19 A The sedan's door OPENS.
20 D KIM: Kip. He's walking over.
21 D KIP [V.O.]: Stall him.
22 A ¶ Kim wipes her hands.
23 A Smiles.
24 A Slides the window open.
25 D KIM: What can I get you?

### SCENE s05022 | INT. COUNTY PAROLE OFFICE - OPEN-PLAN DESK AREA - DAY
Detected names (may be incomplete or contain aliases): DANA REED, SCREEN, DAN
* 1 A ¶ Cubicles, a dying ficus, a laptop propped on a stack of case files.
2 A Officer DANA REED sits on a Zoom call.
3 A On screen, Dan Reyes, 40s, sits in a kitchen, mug in hand.
* 4 A ¶ ON SCREEN (SLACK): #parole-team - Gus: reminder, Reyes check-in at 2, pls be nice
5 D DANA: Dan, thanks for logging in. Three months clean, nice work.
6 D DAN [V.O.]: Thanks, Officer Reed. Job's going good. Warehouse hired me full time.
7 D DANA: Great. And the ankle monitor is charging overnight?
8 D DAN [V.O.]: Every night. Plugged in by the bed.
9 D DANA: Good. And you haven't been near Fulton Street?
10 D DAN [V.O.]: No, ma'am. Not once.
* 11 A ¶ Across the room Officer GUS PARRA's monitor BUZZES.
12 A He frowns, leans in, and goes pale.
* 13 A ¶ ON SCREEN (SLACK): Gus: Dana.
* 14 A DANA.
15 A Pull up his GPS.
* 16 A Now.
17 D DANA (reading, still smiling at the camera): Dan, can you hold your mug a little closer to the screen?
18 D DAN [V.O.]: Sure.
* 19 A ¶ Behind him, through the window, a street sign.
* 20 A FULTON ST. A door SLAMS somewhere in the office.
21 D DANA: Interesting kitchen.
22 D DAN [V.O.]: Officer Reed, I can explain.

### SCENE s05023 | INT. NEON ARENA - ESPORTS TOURNAMENT - NIGHT
Detected names (may be incomplete or contain aliases): WEI, JONAS, BIANCA
* 1 A ¶ Rain on the glass roof of the arena.
2 A Thousand of fans in the dark with glowing sticks, the casters voices loud on the speakers, blue light on every face, and under the stage Wei in a fake staff jacket is carrying a cable box past two security guards who are watching the big screen and not him while Jonas sits at the final table with his headset on, his hand perfectly steady on the mouse and Bianca stands in the back corridor with a coffee she is not drinking.
* 3 A ¶ Smoke machine.
* 4 A Bass in the floor.
* 5 A Somewhere a child crying from happiness.
6 D WEI (he wipes his palms on the jacket): Box is in. Two minutes.
7 D JONAS (headset on, eyes on the screen, he clicks twice): You said one minute before.
8 D WEI (he checks the watch): The guard changed. It happens.
9 D BIANCA (she puts the coffee down on a crate): Then we are not late. We are just on time slower.
10 D JONAS (a tiny nod, he does not look at either of them): Bianca your voice is too loud.
* 11 A ¶ The rain gets harder.
* 12 A A bright flash from the stage, the crowd screams, the casters say a name that is not Jonas.
13 D BIANCA (she moves closer to the door): They are looking at you. The man in the grey suit. Left side.
14 D WEI (he puts the box down very slowly): Which man.
15 D BIANCA (she does not point, she only lifts her chin): The one who is not clapping.
* 16 A ¶ Wind pushes at the roof.
* 17 A Cold air comes under the door.
* 18 A Far away a guard laughs at something on his phone.
19 D JONAS (he types something fast, then removes his hands from the keyboard and puts them on his knees): Done. Money is moving. Nobody stand up.
20 D WEI (he smiles with only half of his mouth): Then why is your leg shaking.
21 D JONAS (he presses the knee flat with his palm): Because I am going to win this game also.
22 D BIANCA (she opens the door a little, one finger on the handle): The grey suit is gone.
* 23 A ¶ Nobody speaks.
* 24 A On the screen the countdown goes to ten.

### SCENE s05025 | INT. NIGHT BUS - MOVING - NIGHT
Detected names (may be incomplete or contain aliases): TESS, LORNA
* 1 A ¶ WE SEE a half-empty bus crossing the city in heavy rain.
* 2 A ¶ Rain.
3 A ¶ CLOSE ON TESS, 17, forehead against the cold window.
4 A She is angry, and she is trying to hide that she is angry, which is very obvious to the audience.
* 5 A ¶ Her phone.
* 6 A Dead.
* 7 A ¶ Dark streets.
* 8 A Nothing.
* 9 A ¶ A woman's phone RINGS from Tess's bag.
* 10 A Not Tess's phone.
* 11 A Her mother's old phone, which she took without asking.
* 12 A ¶ INSERT - PHONE SCREEN: "MUM CALLING".
13 A ¶ Tess looks at it.
14 A Does not answer.
* 15 A It rings again.
* 16 A ¶ Silence.
17 A ¶ She answers.
18 D LORNA [V.O.]: Tess? Where are you? It's one in the morning!
19 D TESS: On a bus.
20 D LORNA [V.O.]: Which bus? Which road? I have been calling for hours.
21 D TESS: You were calling the other phone. The dead one.
22 A ¶ ANGLE ON Tess's hand, gripping the phone so hard her knuckles go white.
* 23 A This is the last time they will speak before everything changes.
24 D LORNA [V.O.]: Come home. We can talk about Dad in the morning.
25 D TESS: There is nothing to talk about. You didn't tell me, Mum. He's been gone for a month and you let me think he was on a trip.
* 26 A ¶ Nothing.
27 D LORNA [V.O.]: I was trying to protect you.
28 D TESS (screaming now): You were protecting YOURSELF!
29 A ¶ The other passengers turn.
30 A The driver's eyes in the mirror.
31 A ¶ BACK TO SCENE.
32 A Tess stands, the phone raised like she will throw it.
33 D TESS [CONT'D]: Don't call me again!
34 A ¶ She throws it.
* 35 A It SMASHES against the bus floor.
* 36 A ¶ Rain.
* 37 A Only rain.

### SCENE s05026 | INT. POPPY'S KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): POPPY, BEN, THE TWINS
* 1 A ¶ The whole street is dark.
* 2 A One candle on the counter, one torch in Poppy's mouth.
3 A She is on her knees, head inside an open cupboard.
4 D POPPY (muffled, torch in mouth): I know I have matches. I bought matches. I remember the matches.
5 D BEN (he stands in the doorway holding a bag of frozen peas against his forehead): You also remember buying a fire extinguisher and that was a dream.
6 D POPPY (she pulls out her head, spits the torch into her hand): It was a very vivid dream.
7 D BEN (he steps forward, trips on a saucepan, catches himself on the fridge): Okay. Okay. I'm fine. Who puts a saucepan on the floor?
8 D POPPY (pointing the torch at him): Someone who was making you dinner before the lights went out.
9 D BEN (he looks at the pot, then at her, then at the pot): That is soup?
10 D POPPY (she stands, wipes her hands on her jeans): That is a risotto in its early years.
11 D BEN (he laughs, then stops laughing when he sees she is not laughing): Poppy. I'm sorry. I love it. I love its early years.
12 D POPPY (she steps closer, the torch under her chin, spooky): Say it again.
13 D BEN (he steps back into the table): I love it.
14 D POPPY (softer, torch lowered): No. The other thing. From the car.
15 D BEN (a long breath, peas slipping down his face): I said I might be in love with you. Might. I said might.
16 D POPPY (she smiles, looks at the floor, then at him): You said might very quickly.
17 D BEN (nodding, with great dignity): I was driving.
* 18 A ¶ CLOSE ON the candle.
* 19 A It flickers.
20 D POPPY (whisper): Ben, I think I am also a bit of a might.
21 D BEN (he lowers the peas, finally): Good. That's a good might. We can work with that.
* 22 A ¶ The back door BANGS open.
* 23 A Cold air, flashlights swinging across the ceiling.
24 A THE TWINS, Poppy's nine-year-old nieces in matching raincoats, march in with a candle in each hand and a very large cake between them.
25 D THE TWINS: Surprise!
26 D POPPY (she jumps and hits her head on the cupboard door): Ow! It's not even my birthday!
27 D THE TWINS: It is in the dark!
28 D BEN (to Poppy, quietly, through his hand): Did you know about this?
29 D POPPY (rubbing her head, whispering back): No, but I knew about the matches. They have matches.
30 D THE TWINS (together, holding up a box of matches): We have matches!
31 D BEN (he takes a candle from one twin and lights it from the other): Then I think this is a good night.
* 32 A ¶ ANGLE ON the cake as the candles are lit one at a time.
33 A Poppy and Ben lean in together over the flame.
34 D POPPY (softly, only to him): Make a wish.
35 D BEN (smiling, not looking away from her): Already did.
36 A ¶ BACK TO SCENE.
37 A The twins blow out the candles.
* 38 A The room goes black.
39 D THE TWINS (in the dark): Again!

### SCENE s05028 | INT. DUSTY ROAD STUDIOS - RECORDING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): CAMERA, MO, BIG DAVE, THE WOMAN, JEN, LOU, WHIRS
* 1 A ¶ HANDHELD.
2 A A documentary crew's camera follows Mo, 30s, through the control room.
* 3 A Red light on.
4 A ON CAMERA, he turns and talks to the lens.
5 D MO (to camera): This is the room where it all got made. Forty years of cowboy ballads and bad decisions.
6 A ¶ Big Dave, 50s, hat the size of a dinner plate, sits at the console with his boots on the desk.
7 A Jen, 20s, stands in the booth behind glass, headphones around her neck.
8 D BIG DAVE: Tell them about the ghost, Mo.
9 D MO: There's no ghost.
10 D BIG DAVE: There's a ghost.
* 11 A ¶ The studio door SLAMS.
12 A A woman in a long duster coat stands in it, dripping.
* 13 A Nobody knows her.
* 14 A ¶ The camera swings.
15 A Mo and Big Dave both freeze.
16 A Jen drops her headphones.
17 D MO: Can we help you, ma'am?
18 D THE WOMAN: Looking for the tape. Nineteen ninety-four. Session nine.
19 D BIG DAVE: We don't give out tapes.
20 D THE WOMAN (stepping forward): I'm not asking.
21 A ¶ Jen runs out of the booth and the three of them end up in a clump by the console, the camera shaking, the cables tangled around everyone's boots.
22 D JEN (to camera, whispering): I don't know her. I swear to God.
23 D THE WOMAN: You will.
24 A ¶ She puts a battered cassette on the console.
* 25 A The label reads: LOU CALDER - DO NOT PLAY.
26 D BIG DAVE (quiet, taking off the hat): Lou. Lou Calder. That's you.
27 D LOU: Played it once, Dave. Never again. Press record.
28 A ¶ Mo reaches for the board.
29 A Jen backs against the wall.
* 30 A The tape machine WHIRS, and the speakers CRACKLE with a man's voice singing, far away, in a language none of them know.
* 31 A ¶ The camera drops.
* 32 A Static.
33 A Cut.

### SCENE s05029 | EXT. CITY HALL PLAZA - CLIMATE PROTEST - DAY
Detected names (may be incomplete or contain aliases): PHONE, SUNNY, MEL, TROY, RHEA, HOODIE GUY, ANSEL
* 1 A ¶ A sea of cardboard signs.
* 2 A Drums somewhere.
3 A Sunny, 20s, they/them, stands on a milk crate holding a megaphone and a coffee.
4 A Beside them, Mel checks a phone.
5 A Troy ties a banner to a lamp post.
6 A Rhea films everything.
7 A At the edge of the crowd, a figure in a black hoodie watches the steps of City Hall and does not chant.
* 8 A ¶ ON PHONE (SLACK): #march-ops - Mel: are we on for 2?
* 9 A Sunny: yes.
* 10 A Troy: banner is up.
* 11 A Rhea: live in 5.
12 D SUNNY: Okay, team, small update. Permit says we can stay until four. Which means we leave at five.
13 D MEL: Sunny.
14 D SUNNY: They said four, I said five, it's a negotiation. They'll adjust.
15 D MEL: Who is they?
16 D SUNNY: Me. I'm they. Wait, you mean the city. Sorry, the city. The city is it.
17 D TROY: Hey, Sunny, who's the hoodie guy? He's been standing there for an hour. Hasn't touched a sign.
18 D RHEA: I'm going to say it. He is giving cop.
19 D MEL: He's giving bored dad.
20 D RHEA: Bored dads wear fleece, Mel. That is a tactical hoodie.
21 D SUNNY: Okay, let's not be weird. Everyone's allowed to stand. It's a public plaza.
22 D TROY: He's been looking at your crate for ten minutes.
23 D SUNNY: That's because I'm very tall on a crate.
24 D RHEA (into phone, whispering): Hoodie guy, if you're a cop, please blink twice.
25 A ¶ The Hoodie Guy takes a step into the crowd, lowers the hood, and walks right up to the crate.
26 A He is Ansel, 30s, tired, pink-eyed, holding an envelope.
27 D HOODIE GUY: Sunny? I'm Ansel. From the water board. I'm the one who emailed you last night.
28 D SUNNY: Oh. You're the leak.
29 D ANSEL: I'm the leak. Can we walk? There are more documents. They're not going to like me after today.
30 D MEL: Is that why you're being weird in a hoodie?
31 D ANSEL: I'm not being weird. I'm being careful.
32 D TROY: Careful looks exactly like weird, man.
33 D SUNNY: Rhea, stop the livestream. Mel, take the megaphone. Troy, keep the banner up. I'll be five minutes.
34 D RHEA: It's been "five minutes" for three years.
35 D SUNNY: Then it's right on time.

### SCENE s05031 | INT. VILLAGE HALL - FUNERAL RECEPTION - DAY
Detected names (may be incomplete or contain aliases): THE CHOIR, ORSOLYA, BRAM, A VOICE
1 A ¶ Orsolya, 60s, in a black coat stitched with tiny silver thread that moves when nobody is looking, stands by the tea urn while the mourners murmur and the rain taps the leaded windows and a dog under the buffet table sighs, and across the room Bram, 30s, the dead man's nephew, holds a paper plate of untouched sandwiches and watches the coffin lid through the open vestry door as though it might speak.
2 A ¶ THE CHOIR gathers by the piano, six old women in grey, humming a note that is slightly too low for the room.
3 D ORSOLYA: You haven't asked me why I came. Everyone else has. They ask it with their eyebrows. Your uncle owed me a debt, Bram, and in my family we collect, even from the dead. Especially from the dead, who are very bad at hiding.
4 D BRAM (beat): He owed everyone. He owed the butcher. It's a funeral, not an audit.
5 D ORSOLYA: He owed me his shadow.
* 6 A ¶ The urn hisses.
* 7 A The humming from the choir climbs a half step.
8 D BRAM: That's not funny.
9 D ORSOLYA: It wasn't meant to be. Look at the floor beneath the coffin. Go on. The vicar has shuffled four times and still it hasn't moved with him.
10 A ¶ Bram looks.
* 11 A A dark shape lies against the vestry tiles, long and patient, pointing the wrong way from the candles.
12 D BRAM (quietly): That's the light from the door.
13 D ORSOLYA: Is it?
14 D THE CHOIR (in unison, low): Amen.
15 D A VOICE [O.S.]: Bram? Bram, love, are you in there? Your aunt wants the car brought round.
16 D BRAM (calling back): In a minute, Mrs. Pell!
17 D ORSOLYA: Do not answer him when he speaks. That is the only rule I will give you. He will use your voice, because it is the nearest one, and he will use your mother's after that.
18 D BRAM (beat): Speak. Who speaks?
* 19 A ¶ The vestry candles bend flat, all together, as if a door had opened onto a great cold field.
20 A The choir stops humming.
* 21 A The dog under the table stands up, hackles raised, and does not make a sound.
22 D A VOICE [V.O.] (in Bram's own tones, warm): Bram. It's all right. Come and help me with this lid.
23 D ORSOLYA (very still): That is the first.
24 D BRAM (whispering): How do I stop it?
25 D ORSOLYA: You give it what it is owed. And you do not flinch, boy, whatever it wears.
* 26 A ¶ The shadow on the tiles lifts one edge, slowly, like a hand testing a curtain.

### SCENE s05032_0 | EXT. BORDER CHECKPOINT - DAWN
Detected names (may be incomplete or contain aliases): NARRATOR, INSPECTOR HALVORSEN
* 1 A ¶ Fog lies on the valley like spilled milk.
* 2 A Two lanes of trucks idle in a row, exhaust rising straight up in the windless cold.
* 3 A A loudspeaker coughs somewhere, then gives up.
* 4 A ¶ A faded sign reads: ALL VEHICLES STOP.
* 5 A Under it, a stray dog sleeps against a concrete barrier, ribs rising and falling.
6 D NARRATOR [V.O.]: Eleven years at this crossing, and I can tell you how a man lies by how he holds his steering wheel. Tight means fear. Loose means practice. This one held it like a baby bird.
* 7 A ¶ A grey hatchback rolls to the booth.
8 A Behind the glass, INSPECTOR HALVORSEN, 50s, heavy, unhurried, a thermos steaming beside his keyboard, lifts one finger.

### SCENE s05032_1 | INT. HATCHBACK - CONTINUOUS
Detected names (may be incomplete or contain aliases): DELPHINE VASS, HALVORSEN, NARRATOR
1 A ¶ DELPHINE VASS, 30s, hair damp, scarf too bright for the hour, rolls down the window.
* 2 A In the back seat a child's booster seat sits empty.
3 D HALVORSEN: Passport. Purpose of travel.
4 D DELPHINE: Visiting my sister. Three days.
5 D HALVORSEN: Where does your sister live?
6 D DELPHINE: Kalmar. Near the harbour.
* 7 A ¶ On the dashboard her phone lights up.
* 8 A ¶ ON PHONE: where r u
9 A ¶ She turns it face down.
10 A Halvorsen watches her do it.
11 D NARRATOR [V.O.]: Nothing wrong with that. Everybody's got somebody who wants to know where they are.

### SCENE s05032_2 | EXT. BORDER CHECKPOINT - CONTINUOUS
Detected names (may be incomplete or contain aliases): TEENAGERS, WAITER, KESTREL OKONKWO, HALVORSEN, DELPHINE, NARRATOR, PHONE, ^DELPHINE
1 A ¶ Two TEENAGERS in a van queue take photographs of the fog on their phones, laughing.
2 A A WAITER from the roadside cafe crosses the road carrying a tray of paper cups to the guards, steam curling off them.
3 A ¶ Younger officer KESTREL OKONKWO, 20s, eager, jacket too clean, jogs over from the second booth.
4 D KESTREL: Sir, the dog unit's flagged nothing on the left lane.
5 D HALVORSEN: Good. Then we are all friends this morning.
6 A ¶ He smiles at Delphine and slides her passport back through the slot.
7 D HALVORSEN [CONT'D]: Safe travels, Ms. Vass.
8 D DELPHINE (exhaling): Thank you.
* 9 A ¶ The barrier arm lifts.
* 10 A The hatchback rolls forward ten feet, twenty.
11 A Her shoulders drop.
12 D NARRATOR [V.O.]: Here is what I know about relief. It makes people careless with their hands.
* 13 A ¶ Her phone buzzes again against the dash.
14 A She reaches for it without looking.
* 15 A ¶ ON PHONE: did u get through?
16 A ¶ She types with one thumb.
* 17 A ¶ ON PHONE (CONT'D): yes. dont call me again
18 A ¶ Halvorsen watches the hatchback in the mirror, thermos halfway to his lips.
19 D HALVORSEN: Kestrel. The booster seat.
20 D KESTREL: Sir?
21 D HALVORSEN: Who rides to her sister's for three days with a child seat and no child?
22 D KESTREL (beat): Maybe the kid's with the sister already?
23 D HALVORSEN: Then why is the seat belt buckled across it?
* 24 A ¶ Silence.
* 25 A The dog under the barrier lifts its head.
26 D HALVORSEN [CONT'D]: Close the arm.
27 A ¶ Kestrel hits a button.
* 28 A The barrier SLAMS down in front of the hatchback, fifteen feet from freedom.
* 29 A Brake lights flare red in the fog.
30 D NARRATOR [V.O.]: Here is the thing nobody tells you. The calm is not the quiet part. The calm is the trap.
31 A ¶ Halvorsen walks out of the booth, unhurried, and Kestrel falls into step beside him.
32 A They reach the driver's window together.
33 D HALVORSEN: Ms. Vass. A moment.
34 D KESTREL: Ma'am, please step out of the vehicle.
35 D HALVORSEN: Please step out.
36 D DELPHINE (overlapping, shaking): I have to be in Kalmar by noon. My sister is expecting me.
37 D ^DELPHINE (overlapping, shaking): I have to be in Kalmar by noon.
38 A ¶ She does not move.
39 A Her hands are tight on the wheel.
40 A Not the baby-bird grip now.
* 41 A Something harder.
42 D NARRATOR [V.O.]: There it is. Loose means practice. Tight means fear. Tight and then loose again, that means you have made up your mind.
43 A ¶ Delphine puts the car in reverse.
44 A ¶ Halvorsen steps back.
45 A Kestrel's hand drops to his belt.
46 D HALVORSEN (calm): Don't.
* 47 A ¶ The engine revs.
* 48 A Fog swallows the sound.
* 49 A Somewhere beyond the barrier, a child begins to cry, thin and far away, from a truck in the other lane.
50 A ¶ Delphine's eyes go wide.
51 A She turns her head toward it.
52 D DELPHINE (whispering): That's not -
53 A ¶ The teenagers' phones all come up at once, filming.
54 D NARRATOR [V.O.]: Eleven years. I never once saw a border. Only the people standing very close to it.
55 D HALVORSEN (quietly): Ms. Vass. Whose child is in that truck?
56 A ¶ She doesn't answer.
* 57 A The engine cuts out.
* 58 A The only sound is the dog, finally, barking.

### SCENE s05033 | INT. NIGHT BUS - MOVING - NIGHT
Detected names (may be incomplete or contain aliases): DOG, NARRATOR, RUSS DOLAN, NINA FALLOWS, DESMOND PIKE, OLD WOMAN, MAUREEN
* 1 A ¶ The 47 night bus, half empty, yellow light flickering over torn seats and a floor sticky with old rain.
* 2 A Windows fogged.
* 3 A A drunk TEENAGER asleep against the glass, another one eating chips from a paper bag, a DOG on a leash tucked under a seat beside its sleeping owner.
4 D NARRATOR [V.O.]: Three in the morning is when the city tells the truth. Everyone left on this bus is running from somethin or towards it.
5 A ¶ In the back row sits RUSS DOLAN, 40s, broad, grey stubble, a gym bag between his boots he keeps touching with one foot.
6 A Three rows ahead, NINA FALLOWS, 20s, nurses uniform under a parka, scrolls her phone with a tired thumb.
7 D RUSS (low, leaning forward, tapping the seat): Hey. Nina. Dont turn around.
8 D NINA (not turning, a breath): Russ. Jesus. I told you, not here.
9 D RUSS (sliding the bag with his foot): Your brother says you've got something that belongs to me. Thats all. Hand it over, and I'm off at Carver Street. No fuss.
10 D NINA (typing, steady): My brother says alot of things when hes scared.
11 A ¶ Two rows up, a young man in a courier jacket, DESMOND PIKE, 30s, takes off his headphones.
12 A He has been listening for a while.
13 D DESMOND (to nobody, mild): Sorry. Is this a private conversation, or can anyone join?
14 D RUSS (without looking): Mind your business, pal.
15 D DESMOND (smiling, pulling out his own phone): Ill try. Its difficult. This bus is only forty feet long.
16 D NARRATOR [V.O.]: Desmond Pike was a patient man. Desmond Pike was also a cop, and he had been following Russ Dolan for nine weeks.
17 A ¶ Across the aisle, an OLD WOMAN with a shopping trolley mutters in Polish and crosses herself.
18 A The driver, MAUREEN, 50s, glances in the mirror and turns the radio down a notch.
19 D MAUREEN (over the intercom, flat): Next stop Carver Street. Mind the doors please.
20 D NINA (finally turning, quiet): Russ, theres a pen drive in my left pocket and its staying there. You want it, you can explain to the man in the courier jacket why.
21 D RUSS (freezing, tight): What man.
22 D DESMOND (raising a hand, cheerful): Hi.
* 23 A ¶ The bus brakes, hissing.
24 A Chips-teenager drops the bag.
25 D RUSS (low, almost kind): You wired her, did you. Her. A nurse.
26 D DESMOND (standing, badge out, slow): Nobodys wired, Russ. Sit down. Everyone else is going to get off at Carver, and then you and me and Nina are going to ride to the end of the line.
27 D RUSS (reaching into the bag): No. No, I dont think we are.
28 A ¶ The OLD WOMAN screams.
* 29 A The dog barks, the owner jerks awake.
30 A Maureen slams the brakes and the whole bus lurches, bodies thrown, the bag skidding across the floor and spilling, not money, but a long black shape wrapped in a towel.
31 D NARRATOR [V.O.]: It always ends in the aisle. Every story on a night bus ends in the aisle.
32 D NINA (shouting, diving low): Gun! Desmond, gun!
33 D DESMOND (drawing, steady): Russ. Put it down. Put it down now.
34 D RUSS (unwrapping the towel, trembling): She took everything. Everything. You think I wanted this?
* 35 A ¶ The overhead light dies.
* 36 A The bus is dark except for the streetlamps stuttering past the windows, and in the pulse of them nobody moves, nobody breathes, and the dog will not stop barking.

### SCENE s05035_0 | EXT. CITY HALL PLAZA - CLIMATE PROTEST - DAY
Detected names (may be incomplete or contain aliases): CITY MAP, MIRA ADEYEMI, TOBIAS WREN, JUNO PARK, RAFA DELACROIX
* 1 A ¶ SUPER: "THURSDAY, 2:14 PM"
2 A ¶ A river of banners and drums and kids on shoulders pours across the plaza, whistles shrieking and a brass band somewhere playing something almost like a hymn, and at the edge of the crowd under a dead plane tree four people in orange vests drift together, not looking at one another, while a police helicopter chops overhead and a woman on a megaphone leads a chant that rolls back and forth like surf.
* 3 A ¶ INSERT - A CITY MAP on a phone, the bank across the plaza circled in red.
* 4 A ¶ SUPER: "ARCHIVE VAULT, FLOOR B2"
5 A ¶ The four close ranks.
6 A MIRA ADEYEMI, 30s, sunglasses pushed up, holds a placard that says THERE IS NO PLANET B. Beside her, TOBIAS WREN, 50s, the team's old safe man, carries a cardboard sun on a stick.
7 D MIRA (low, smiling for the crowd): Everybody breathe. We hold the crowd until the alarm trips, the guards come out, and then we walk in through the loading dock like we're delivering pamphlets. Forty seconds. That's the whole plan.
8 D TOBIAS (waving the cardboard sun): You said that about the last one.
9 D MIRA (beat): The last one had a dog.
10 A ¶ JUNO PARK, 20s, in a hand-knit hat, scrolls through a message thread on her phone, a chant in her ears.
11 D JUNO (typing): Dock crew says the guards changed shift early. Two minutes ago. They won't be where we mapped them.
12 D MIRA (lowering her voice): Which means we move now, not later. Tobias, the code?
13 D TOBIAS (patting his coat): Right here in my pocket, same as it's been for eleven years, and if you look at it, Mira, I swear on my mother's pension I will fall apart.
14 D JUNO (quietly, not looking up): The sun's wobbling.
15 D TOBIAS (adjusting the stick): It's a very old sun.
* 16 A ¶ The brass band swells.
* 17 A A drum thunders.
18 A The crowd surges left, a wall of orange and green flags.
19 A ¶ RAFA DELACROIX, 40s, ear-piece in, drifts into the circle from the back, face grey, shoulder-checking the crowd.
20 D RAFA (under his breath): We have a problem. One of the vests across the plaza has a radio and a plain jacket underneath. They're not guards. They're federal.
21 D MIRA (a long beat, lips barely moving): Then they are here for someone else.
22 D RAFA (shaking his head): Mira. They are here for us.
23 D TOBIAS (lowering the cardboard sun slowly): Well. That is a very short plan.
24 D JUNO (reading, voice flat): Message from the dock. It says: WHERE ARE YOU. IT'S NOT SAFE. LEAVE NOW.
25 D MIRA (closing her eyes, then opening them, quiet): Everybody walk. Don't run. Join the march, lose the vests, and meet at the van. Nobody looks back.
26 D RAFA (softly): And the vault?
27 D MIRA (gently, to the crowd, the sky, to herself): The vault has waited a hundred years. It can wait another one.
* 28 A ¶ The chant swells.
* 29 A Rain begins, thin and sudden.
30 A The four melt into the crowd one by one.

### SCENE s05035_1 | EXT. CITY HALL PLAZA - LATER
Detected names (may be incomplete or contain aliases): 
* 1 A ¶ Banners droop.
* 2 A The brass band packs its cases.
* 3 A A single cardboard sun lies face down in a puddle, its stick snapped in half.

### SCENE s05037 | INT. FISHING BOAT - CABIN - NIGHT
Detected names (may be incomplete or contain aliases): KIM, KIP, A MAN'S VOICE
* 1 A ¶ A small cabin that smells of diesel and wet wool.
* 2 A A radio phone crackles on its hook beside a chart pinned flat with two mugs.
* 3 A The boat rolls; the mugs do not move.
4 A ¶ Kim sits at the table, perfectly upright, hands around nothing.
5 A Kip stands at the door, a duffel bag at his feet, and does not take off his coat.
6 D KIM: You've come all this way in weather like this to stand in a doorway. I should be flattered. Our father would have said: Kip, a man who won't sit has already decided to leave. And you did decide, didn't you? Somewhere on the road, between the third petrol station and the one where you bought the sandwiches you haven't eaten. I could see it in how you tied the rope.
7 D KIP (beat): I'm sitting.
8 A ¶ He does not sit.
* 9 A The radio phone RINGS.
10 A Neither of them moves.
* 11 A It rings four times, five.
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

### SCENE s05038 | INT. CHURCH BASEMENT - AA MEETING - NIGHT
Detected names (may be incomplete or contain aliases): TIME, PHILLIPA ROSS, DENNIS CAHILL
* 1 A ¶ Folding chairs in a circle.
* 2 A A coffee urn on a card table.
* 3 A A banner reading ONE DAY AT A TIME hangs crooked over a stack of Christmas decorations.
4 A DR. PHILLIPA ROSS, 40s, hospital lanyard still around her neck, sits across from DENNIS CAHILL, 60s, an ex-paramedic in a cardigan too warm for the room.
5 D DENNIS (raising his paper cup, to the empty chairs): Hi, I'm Dennis, and I'm an alcoholic.
6 D PHILLIPA (deadpan, to the empty chairs): Hi, Dennis.
7 D DENNIS (leaning in): Phillipa, we're the only two people here. You can skip the choir response.
8 D PHILLIPA (beat, sipping): I like to keep my form.
* 9 A ¶ A door SLAMS upstairs.
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
* 20 A The urn GURGLES.
21 D DENNIS (gently): She's allowed. So is he. So are you.
22 D PHILLIPA (wiping her eyes, almost laughing): Dennis. You used three pronouns.
23 D DENNIS (proud): I contain multitudes. And a lot of decaf.
* 24 A ¶ The phone on the card table BUZZES.
25 A Phillipa glances at it.
26 A Her face goes still.
27 D PHILLIPA (reading, quiet): It's the hospital. They need me back.
28 D DENNIS (standing, offering his cardigan, as if it were a medal): Then go. Come back next week and tell me how it went.
29 D PHILLIPA (taking the cardigan, absurdly moved): It smells like a library.
30 D DENNIS (beat): It smells like twenty-six months.
31 A ¶ She nods.
32 A She puts it on over her scrubs.
33 A Upstairs, somebody shouts BINGO and the whole ceiling rattles.

### SCENE s05039_0 | EXT. CITY STREET - FOOD TRUCK - DAY
Detected names (may be incomplete or contain aliases): 
* 1 A ¶ A white food truck is parked near the old market.
* 2 A The sign says BIG DAVE'S TACOS.
3 A A small line of customers waits in the sun.
* 4 A The smell of onions and hot oil is in the air.

### SCENE s05039_1 | INT. FOOD TRUCK - CONTINUOUS
Detected names (may be incomplete or contain aliases): BIG DAVE, JEN, MO, SAM, MRS. K, TEENAGE GIRL, THE MAN IN THE BROWN COAT
* 1 A ¶ Narrow and hot.
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
* 12 A A grey car is parked across the road for the second day.
13 D SAM (quietly, to himself): Same car. Same man.
14 D JEN (over her shoulder): Sam, you say something?
15 D SAM: No. Nothing. I talk to the coffee.
16 D BIG DAVE (smiling): The coffee is the best listener in the truck.
* 17 A ¶ A phone BUZZES on the shelf above the grill.
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
* 35 A ¶ Outside, the grey car's door opens.
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
* 60 A The sun keeps shining, and the onions keep sizzling, as if nothing in the world had changed at all.
* 61 A ¶ A phone BUZZES again on the shelf.
* 62 A Nobody picks it up.

### SCENE s05040_0 | INT. PRIYA'S BEDROOM - NIGHT
Detected names (may be incomplete or contain aliases): PRIYA IYER, DESMOND OKAFOR
1 A ¶ SUPER: "TUESDAY, 11:48 PM"
* 2 A ¶ A narrow room under a slanted ceiling, fairy lights stapled in a sagging U above the bed, a desk buried in chemistry notes, three half-empty mugs, a corkboard crowded with ticket stubs and one photo turned face-down.
* 3 A A laptop glows.
4 A Rain ticks at the dormer window while PRIYA IYER, 16, braids and hoodie sleeves chewed to threads, sits cross-legged on the duvet and her older cousin DESMOND OKAFOR, 24, lean, careful, a courier's lanyard still around his neck, stands in the doorway with his car keys pinched between two fingers as the house creaks below them.
5 A ¶ INSERT - LAPTOP SCREEN
* 6 A ¶ A cursor blinks inside a locked folder named "DON'T".
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
* 17 A ¶ The corkboard.
* 18 A The face-down photo.
* 19 A A corner of it lifting in the draft from the vent.
20 D PRIYA (following his gaze, standing too fast, pressing the photo flat with her palm): Don't.
21 D DESMOND (hands open, palms up, leaning back): I haven't moved.
22 D PRIYA (sitting again, farther from the board): You were on Harrow Lane that night. Weren't you.
23 D DESMOND (rubbing his thumb along the lanyard): I'm on lots of lanes. It's the job.
24 D PRIYA (opening the laptop, turning it so he can see): Eleven deliveries. Nine of them are the same house.
25 A ¶ INSERT - LAPTOP SCREEN
* 26 A ¶ A spreadsheet.
* 27 A Dates in a column.
* 28 A A single address repeated.
* 29 A A timestamp, 11:52 PM, highlighted yellow.
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

### SCENE s05040_1 | INT. PRIYA'S BEDROOM - CONTINUOUS
Detected names (may be incomplete or contain aliases): DESMOND, PRIYA
* 1 A ¶ The rain is louder now.
* 2 A The lights above the bed flicker once.
* 3 A Downstairs a television is switched off and the house goes quiet in a way that feels listened-to.
4 D DESMOND (lunging a half-step, catching himself on the desk, knocking a mug to the floor where it does not break): You think I did something to her.
5 D PRIYA (holding the key behind her back): I think you were there at 11:52.
6 D DESMOND (pointing at the screen, his voice cracking upward): I was there because she called me! She called ME. She asked for a ride, and I was forty minutes away, and I told her to wait inside, and she didn't, and I have driven that lane every night since, because if I had been faster--
7 D PRIYA (frozen, the key slipping in her sweaty fingers): You never said.
8 D DESMOND (sinking onto the chair, hands over his face): Nobody asked me the right question.
9 A ¶ INSERT - THE FACE-DOWN PHOTO
* 10 A ¶ Pressed against the cork.
* 11 A A girl's handwriting on the back: "for Des. don't be late."
12 D PRIYA (peeling the photo off the board, turning it over, her breath leaving her): She wrote this to you.
13 D DESMOND (lifting his head, wet-eyed, looking at the key in her hand): Open the folder, Priya. Please. I never could.
14 D PRIYA (kneeling at the laptop, sliding the key into a small drive port, her hand shaking): If it's something awful--
15 D DESMOND (a very small nod): Then it's hers. And we'll know.
16 A ¶ ON SCREEN
* 17 A ¶ The folder opens.
* 18 A A single video file.
* 19 A The thumbnail shows a dark street and a figure in a yellow raincoat looking back over her shoulder.
20 D PRIYA (her finger over the trackpad, not pressing): Together?
21 D DESMOND (moving to sit beside her on the bed, close, not touching): Together.
22 D PRIYA (pressing play, the sound already rising from the speakers like a held breath): Okay.
* 23 A ¶ SLOW PUSH IN on the screen as the rain outside the window finds the same rhythm as the rain in the video, and neither of them blinks.
24 T CUT TO BLACK.

### SCENE s05041 | INT. FREIGHT DEPOT - LOADING FLOOR - DAY
Detected names (may be incomplete or contain aliases): SAFETY FIRST, HALVORSEN, REPORTER, MAYA OKONKWO, DEV, MUM, KORVAC
1 A ¶ HANDHELD.
* 2 A A cheap camera, wobbling, date stamp in the corner.
* 3 A Pallets, shrink-wrap, a forklift beeping somewhere.
* 4 A A banner: "SAFETY FIRST - 212 DAYS."
5 A ¶ ON CAMERA: HALVORSEN, 50s, shift supervisor, clipboard, lanyard, mustache.
6 D HALVORSEN (adjusting the camera strap, grinning): Is it recording? The red light's on. Okay. Day two hundred and twelve. Everything's on schedule. We love schedules.
7 D REPORTER [O.S.] (laughing): Tell them what you're shipping.
8 D HALVORSEN (tapping a crate with his pen): Boots, blankets, tinned peaches. Humanitarian, all of it. Dull as dishwater.
9 D MAYA OKONKWO (coming into frame, a box on her hip, tugging her gloves off): He says "dull" like it's a compliment. We had a pallet of tinned peaches yesterday that I swear wasn't there on the manifest.
10 D HALVORSEN (waving the clipboard): The manifest is a suggestion.
11 D DEV (rolling a hand truck past, not stopping): Maya, your mum's on speaker. Phone's in the break room.
* 12 A ¶ ON PHONE: "MUM: where are u. news is on. call me"
13 D MAYA OKONKWO (pulling out her own phone, thumbing it, holding it up to the lens): She sends the same text every time there's weather on the other side of the world.
* 14 A ¶ ON PHONE: "MAYA: working. love you. stop watching it."
15 A ¶ INTERCUT - FLOOR AND MUM'S KITCHEN
16 D MUM [V.O.] (through the phone, tinny, a kettle shrieking behind her): Don't tell me to stop watching. There is a man on the television pointing at a map and he said your port.
17 D MAYA OKONKWO (turning her back to the camera, lowering her voice): Mum. It's a warehouse in a suburb. Nobody is pointing at it.
18 D MUM [V.O.] (the kettle clicking off): Then why is there a truck at the gate that isn't yours?
19 D MAYA OKONKWO (looking up, eyes going to the far dock door): Hold on.
20 A ¶ ANGLE ON the far dock.
* 21 A A flatbed, no logo, idling.
22 A Two men in dark jackets stand beside it.
23 A A third, KORVAC, 40s, grey stubble, steps down.
24 D HALVORSEN (whispering, lowering the camera slightly): He told me she'd be here Thursday. She's not due until Thursday.
25 D DEV (arriving beside them, voice flat): He said she. I thought you meant the shipment.
26 D HALVORSEN (a nervous laugh): He means the shipment. She means the shipment. Everyone means the shipment.
27 D KORVAC (striding up, flashing a laminated card): Inspection. All hands to the front. Phones in the bin, please.
28 D MAYA OKONKWO (into the phone, not moving): Mum, I'll call you back.
29 D MUM [V.O.] (sharply): Don't hang up. He's not on the news. He's in your building.
* 30 A ¶ ON PHONE: "MUM: dont put it in the bin"
31 D KORVAC (pointing at the lens): And turn that off.
32 D HALVORSEN (stepping in front of the lens, hand raised): Sir, it's a documentary. We're cleared.
33 D KORVAC (quietly, reaching past him): Not by me.
* 34 A ¶ The camera drops.
* 35 A The frame tilts to a ceiling, to a boot, to a crate stencilled "PEACHES" with its lid already pried loose and something other than peaches inside.
36 D DEV (off screen, barely audible): Maya. Don't look in the box.
37 T CUT TO BLACK.

### SCENE s05042 | INT. CAR (MOVING) - NIGHT
Detected names (may be incomplete or contain aliases): MO, THE WOMAN, DR. NAIR, JEN
1 A ¶ SUPER: "2:04 AM"
* 2 A ¶ Wet streetlights slide across the windshield.
3 A MO, 30s, rideshare driver, hands at ten and two.
4 A In the back, THE WOMAN, 40s, scrubs under a grey coat, a cooler bag on her lap, thumb hovering over her phone.
5 A ¶ CLOSE ON the cooler bag.
* 6 A A biohazard sticker.
* 7 A A digital display on it blinking: 03:12.
8 D MO: Hospital's six minutes out. You said the drop's at the transplant door?
9 D THE WOMAN: Side entrance. Don't stop at the main.
* 10 A ¶ Her phone BUZZES.
11 A She answers on speaker.
12 D DR. NAIR [V.O.]: Where are you? The patient is on the table and the clock's running.
13 D THE WOMAN: Six minutes. Maybe five.
14 D DR. NAIR [V.O.]: Jen, the courier crashed. I'm told you're riding with a stranger.
15 D JEN (low, to herself): Here we go.
16 A ¶ ANGLE ON Mo's eyes in the rear-view mirror.
* 17 A A red light ahead.
18 A He slows, then runs it.
19 D MO: Sorry. Hold on.
20 A ¶ INSERT - THE COOLER DISPLAY
* 21 A ¶ 03:09.
* 22 A 03:08.
* 23 A ¶ WE SEE headlights swing in behind them, high beams, closing fast.
24 D JEN: Mo, who is that?
25 D MO (flooring it): Not my brother-in-law. Seatbelt.
26 A ¶ BACK TO SCENE
27 D DR. NAIR [V.O.]: Jen? Jen, talk to me.
28 D JEN (gripping the door handle): Keep the line open. We're not stopping.

### SCENE s05043_0 | INT. ST. BRIDGET'S CHURCH BASEMENT - NIGHT
Detected names (may be incomplete or contain aliases): KIM HALLORAN, KIP HALLORAN, MR. DELACROIX, SISTER AGNES, BIG TOMASZ
1 A ¶ MONTAGE - FOLDING CHAIRS, STYROFOAM CUPS, A BANNER THAT SAYS "ONE DAY AT A TIME" WITH THE "ONE" PEELING OFF
2 D KIM HALLORAN (slamming a coffee pot onto the table, steam rising): I am telling you, the sober cake is not a cake, it is a loaf, and I will not be lied to about baked goods in a house of God.
3 D KIP HALLORAN (sitting in the circle, raising one finger like a student): Technically we're in the basement.
4 D MR. DELACROIX (rubbing his eyes under his glasses): Technically we are all in the basement.
* 5 A ¶ This is the loudest this room has been all year.
6 D KIM HALLORAN (pointing at Kip with a stir stick): You promised me, Kip. You said no more texts to the ex.
* 7 A ¶ ON PHONE: "KIP: just checking in. hope u are well"
8 D KIP HALLORAN (hiding the phone under his thigh): That's not me. That's a different Kip.
9 D SISTER AGNES (from the folding table, arranging donuts into a perfect spiral): There is only one Kip, and the Lord has seen your thumbs.
10 D BIG TOMASZ (raising his hand slowly, standing, sitting back down, standing again): Can I say something? I only came for the donuts, and I am now somehow crying, and that is Kip's fault.
11 D KIM HALLORAN (softening, setting down the stir stick): Oh, Tomasz.
12 D MR. DELACROIX (clapping once, bright): Okay! Deep breaths. In through the nose. Out through the donut.
13 D SISTER AGNES (offering the plate around the circle): Take one. They are not a sacrament.
14 D KIP HALLORAN (taking two, handing one to Kim): Truce?
15 D KIM HALLORAN (biting into it, rolling her eyes): Truce. But the loaf thing stands.
16 T SMASH CUT TO:

### SCENE s05043_1 | INT. ST. BRIDGET'S CHURCH BASEMENT - LATER
Detected names (may be incomplete or contain aliases): 
* 1 A ¶ The chairs are stacked.
* 2 A The banner finally falls.

### SCENE s05044 | INT. RIDESHARE - NIGHT
Detected names (may be incomplete or contain aliases): THE WOMAN, TOBIAS, INES, PIP, HOLLIS, MARA
1 A ¶ SUPER: "2:07 AM.
2 A ROUTE 9.
3 A NO STREETLIGHTS."
* 4 A ¶ A battered hatchback, air freshener swinging, dashboard mounted phone glowing with a map that shows a road that does not exist on any other map.
* 5 A Rain of a strange silver colour hangs in the headlights without falling.
6 A ¶ Tobias Wren, 50s, driver, tired kind eyes, a thermos wedged between the seats, drives with one hand.
7 A In the back seat sits the hooded passenger, THE WOMAN, face hidden, a long coat soaked at the hem, hands folded very still on a wooden box in her lap.
8 A ¶ Next to her slumps Pip, 19, student, earbuds in, a backpack clutched like a pillow.
9 A In the far seat is Hollis Grey, 60s, in a pressed suit, not touching the upholstery, and beside Tobias in the front sits Ines, 30s, a nurse in scrubs, scrolling her phone with a frown.
10 A ¶ CLOSE ON the dashboard clock.
* 11 A 2:07.
* 12 A It does not change.
13 D TOBIAS (glancing in the mirror): Everyone good back there? I can turn the heat up.
* 14 A ¶ Nobody answers.
15 A THE WOMAN tilts her head, listening to something far away.
16 D INES: Your app says four minutes to Birchmont. We've been four minutes for twenty.
17 D TOBIAS: Road's long tonight.
18 A ¶ ANGLE ON Pip pulling out an earbud, blinking at the window.
19 D PIP: There's a tree out there. Same tree. Left side, three times now.
20 D HOLLIS (smoothing his tie): A man learns to stop counting trees.
21 D TOBIAS (a short laugh that doesn't land): Okay, that's not a thing people say.
* 22 A ¶ WE SEE the wooden box in THE WOMAN's lap.
* 23 A A faint light seams its edges.
24 A Her fingers tighten.
25 D INES (turning in her seat): Ma'am? You okay? You haven't said anything since you got in.
26 D THE WOMAN (a low, even voice): I have been saying it. You have not been listening.
27 A ¶ INSERT - THE BOX
* 28 A ¶ Carved into the lid: a small door, and a keyhole shaped like a crescent.
29 A ¶ BACK TO SCENE
30 A ¶ Tobias taps the brakes.
* 31 A The car does not slow.
* 32 A The silver rain begins to fall upward.
33 D PIP (hands flat on the seat in front of him): Tobias. Dude. The brakes.
34 D TOBIAS (knuckles whitening): I'm pressing them.
35 D HOLLIS (quietly, to nobody): She's come for the debt. It was always going to be tonight.
36 D INES: What debt? Whose debt?
37 A ¶ THE WOMAN lifts her hood.
38 A Her face is a girl's face, maybe sixteen, silver-eyed, tired, very old.
39 D THE WOMAN: Hollis took the key from my mother. He promised to bring it back before the moon turned.
40 D HOLLIS (rising from the seat, bumping the roof): Mara. Please. I was young.
41 D MARA (opening the box, a pale blaze filling the car): You were forty-one.
* 42 A ¶ The light swallows the dashboard, the map, the unmoving clock.
43 A Tobias shouts.
44 A Pip's earbud falls to the floor.
45 A Ines grabs for the door handle and finds it gone.
46 A ¶ CLOSE ON Hollis's hand, a crescent-shaped key trembling in his palm.
47 D HOLLIS (extending it, voice breaking): Take it. Take it and let them out.
48 D MARA (taking the key, setting it in the lid): They were never held. Only you.
* 49 A ¶ The car stops.
* 50 A All at once.
* 51 A The rain falls down again.
* 52 A ¶ Silence.
* 53 A The hatchback sits in an empty field under a normal moon.
* 54 A The seat beside Mara is empty, a pressed suit folded neatly on the cushion.
55 D TOBIAS (barely breathing): Where did he go?
56 D MARA (closing the box, stepping out into the grass): Home.
57 A ¶ She walks away into the dark.
* 58 A The dashboard clock finally clicks to 2:08.

### SCENE s05045 | INT. FUNERAL RECEPTION - COMMUNITY HALL - DAY
Detected names (may be incomplete or contain aliases): LUIS, RAY
* 1 A ¶ Trays of sandwiches, a slideshow looping on a projector.
* 2 A Coach Frank Dunleavy's face, forty years of whistles and clipboards, fills the wall.
3 A ¶ Two teenagers in oversized suits fight over the last deviled egg while a waiter weaves past them with a tray of lukewarm coffee and a little brown dog sneaks under the buffet table.
4 A ¶ Ray Pruitt, 50s, former star pitcher, stands by the window with a paper cup.
5 A Across the room Luis Navarro, 50s, his old catcher, enters, spots him, and stops dead.
6 A ¶ INSERT - THE SLIDESHOW
* 7 A ¶ A photo of both men, young, arms around each other, a championship trophy between them.
8 A ¶ BACK TO SCENE
9 A ¶ Luis crosses the room slowly.
10 A Ray doesn't turn.
11 D LUIS: You came.
12 D RAY: He was my coach too.
13 D LUIS: He was his coach more than he was yours. After what you did to him he barley spoke your name.
14 D RAY (finally turning): What I did to him. Okay.
15 A ¶ CLOSE ON Ray's hand tightening around the cup, coffee spilling over his knuckles.
16 D LUIS: You threw that game. Everybody knew. Frank knew. he took it to his grave and so did I untill today.
17 D RAY: You want to do this at his funeral.
18 D LUIS: You wanted to do it at his funeral. You wore the ring.
19 A ¶ A teenager drops a plate.
20 A The waiter freezes.
21 A The dog yips.
22 A The whole room turns, and the slideshow flips to the next photo, Frank holding a trophy over his head.
23 D RAY (very quietly): I'm sorry.
24 D LUIS (blinking, his anger leaving all at once): Say it to him.
25 A ¶ Ray sets the cup on the sill, walks to the projector, and stands in its beam so Frank's smile falls across his chest.

### SCENE s05046_0 | INT. MERCY GENERAL HOSPITAL - NURSES' STATION - NIGHT
Detected names (may be incomplete or contain aliases): CHARGE NURSE, KESSLER, PRIYA
* 1 A ¶ We see a long hallway with flickering fluorescent lights, which is a metaphor for how the main character feels inside.
* 2 A It is 3 AM.
* 3 A CLOSE ON a clock on the wall.
4 A ¶ THE NEW GIRL, 19, sits at the station in oversized scrubs, her badge flipped backwards.
5 A She is clearly nervous and has never worked a night shift before, which we can tell because she keeps looking at her phone.
6 D THE NEW GIRL (straightening a stack of charts that are already straight, then knocking them over): Okay. Okay. Breathe.
* 7 A ¶ A voice crackles from the intercom.
8 D CHARGE NURSE [V.O.]: Station, it's Bea. Are you there?
9 D THE NEW GIRL (grabbing the handset too hard, nearly dropping it): Yes! Here! Station! Hi!
10 D CHARGE NURSE [V.O.]: Room 12's call light is on. Can you check on Mr. Kessler?
11 D THE NEW GIRL (standing, tripping on her own lanyard): Totally. Absolutely. Going now.
12 A ¶ We see her walk down the hallway to Room 12, past a vending machine that hums.
13 A She stops outside the door.
14 D KESSLER [O.S.]: Who's that? Is that Kim?
15 D THE NEW GIRL (sighing, opening the door a crack): It's not Kim, Mr. Kessler. It's... it's me. The new one.
16 D KESSLER [O.S.]: Oh. Kip said you'd be shorter.
17 D THE NEW GIRL (laughing, wiping her eyes with the back of her hand): Kip is the other night nurse. He says a lot of things.
18 D KESSLER [O.S.] (softly): You've got kind hands. I can hear it in your steps.
19 D THE NEW GIRL (pausing in the doorway, pressing a hand to her chest): Thank you. I think that's the nicest thing anyone has said all week.
* 20 A ¶ The intercom crackles again.
21 D CHARGE NURSE [V.O.]: Priya, you still there? Your mom's on line two. She says you left your lunch in the car.
22 D PRIYA (burying her face in her hands, shoulders shaking with laughter): I'm going to quit. I'm going to quit tonight.
23 D KESSLER [O.S.] (warmly): You won't.
24 T CUT TO:

### SCENE s05047 | INT. THE HARGREAVES KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): ROSALIND HARGREAVES, TOM
* 1 A ¶ Rain against the window, steady and unremarkable.
* 2 A The fridge hum has died.
* 3 A Somewhere down the road a transformer has given up, and the whole street has gone the colour of weak tea.
* 4 A ¶ A single candle on the table.
* 5 A A cold pot of something on the hob.
* 6 A A mug, a second mug, a phone face-up between them.
7 A ¶ ROSALIND HARGREAVES, 50s, cardigan, reading glasses on a string, stands at the sink with her back to the room.
8 A Her son, TOM, 17, sits at the table in a school blazer he has not taken off.
* 9 A ¶ The clock on the wall has stopped at ten past nine.
10 D ROSALIND (rinsing a cup that is already clean): You're back early.
11 D TOM (turning the phone over, then back): Not really.
* 12 A ¶ Outside, a dog barks twice and thinks better of it.
* 13 A ¶ ON PHONE: "DAD: Spoke to your mum.
* 14 A We'll sort it.
* 15 A Don't be daft."
16 D ROSALIND (without turning): He texted you as well, did he?
17 D TOM (a very small nod): Said not to be daft.
18 D ROSALIND (drying her hands slowly on a tea towel): That does sound like him.
* 19 A ¶ The candle gutters.
* 20 A A gust finds the back door and goes away again.
21 A Neither of them moves to fix it.
22 D TOM (picking at the edge of the table): I got the letter from Durham.
23 D ROSALIND (her shoulders very slightly tightening): Did you.
24 D TOM (a breath out through his nose): They've offered me a place.
25 D ROSALIND (finally turning, the towel in both hands): Well. That's marvellous.
26 D TOM (not looking up): You don't sound it.
27 D ROSALIND (a small, brittle laugh): I'm told it's the done thing, to sound it.
* 28 A ¶ The rain eases for a moment.
* 29 A In the quiet, the house ticks as it cools.
30 A ¶ This is the last evening the three of them will pretend to be a family under this roof.
31 D TOM (standing, the chair scraping the tiles): I've not even said I'll go yet.
32 D ROSALIND (folding the towel, setting it down, squaring its corners): You've said it. You said it when you came in with your coat still on.
* 33 A ¶ ON PHONE: "DAD: pick up. please."
34 D TOM (snatching the phone, thumb over the screen, a crack in his voice): Mum, I'm not leaving you here on your own.
35 D ROSALIND (crossing the kitchen, taking the phone from his hand, setting it face-down on the table): Thomas. You will go. And I shall be perfectly all right. It's only a power cut.
* 36 A ¶ The candle burns on.
* 37 A Somewhere across the road, a generator coughs and catches, and one lit window blinks into being.

### SCENE s05048 | INT. JUNE'S BEDROOM - NIGHT
Detected names (may be incomplete or contain aliases): JUNE PARK, WESLEY, BEN, MOM, AUNT LIN
* 1 A ¶ Posters, fairy lights, a pile of laundry that is definitely not just laundry.
2 A JUNE PARK, 16, sits on the bed in pajamas with her best friend WESLEY, 17, and her little brother BEN, 9, who is holding a flashlight he was told not to touch.
3 D JUNE (whispering, tugging a blanket over all three of them): Okay so the rule is nobody screams. If somebody screams we all die.
4 D WESLEY (also whispering, much louder): That is not how that works.
5 D BEN (clicking the flashlight on and off): It is exactly how that works.
* 6 A ¶ The phone BUZZES on the nightstand.
7 A June jumps.
8 A Wesley shrieks and ducks under a pillow.
9 D JUNE (snatching it, glaring at him): You screamed!
10 D WESLEY (muffled): I did not scream I sneezed in a very high register.
* 11 A ¶ ON PHONE: "MOM: Honey are you asleep?
* 12 A Door's locked right?"
13 D JUNE (texting back with her thumbs flying): Mom is checking on me. Act asleep.
14 D BEN (flopping dramatically onto the pillow): Zzzz. Zzzz. Why am I the one doing the snoring?
15 D WESLEY (jabbing a finger at him): Because you're the most convincing.
* 16 A ¶ A door SLAMS somewhere in the house.
17 A All three freeze.
18 D MOM [V.O.] (through the phone, tinny, on speaker now): June? Is that you in the hall?
19 D JUNE (going pale, the phone trembling in her hand): Mom, I'm in my room.
20 D MOM [V.O.] (slowly): Then who just walked past my door?
* 21 A ¶ The closet door CREAKS open.
22 A From the shadows, a tall figure in a shower curtain hobbles out, dragging one foot, groaning.
23 A ¶ AUNT LIN, 40s, June's aunt, ghoul makeup smeared, grinning.
24 D AUNT LIN (throwing off the curtain): Surprise! Happy Halloween eve!
25 D WESLEY (throwing the pillow, shrieking): I hate this family!
26 D JUNE (laughing, hitting her with the blanket): Aunt Lin! You almost killed us!
27 D BEN (shining the flashlight in her face): You look dead. It's great.
28 D AUNT LIN (accepting a pillow to the face): I've been rehearsing since Tuesday.
29 D MOM [V.O.] (sighing): I told her not to. Goodnight, everyone.

### SCENE s05050 | INT. HOLLOWAY KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): HANNAH, BECK, THE TWINS, ROSALIND, ILYA, DESMOND
1 A ¶ The power has been out for eleven minutes, and in that time Hannah Voss has built a small, ordinary world out of candles and tea lights, the way she once built forts out of couch cushions, certain that if the room looks cozy enough then nothing outside it can be wrong.
* 2 A ¶ Dark.
* 3 A Candle flames.
* 4 A The fridge, silent.
5 A ¶ Desmond, her husband, 40s, stands at the window with his phone held up like a lantern, and he is not looking at the sky.
6 A He is looking at the street.
* 7 A Every house on it is dark in exactly the same way.
8 A ¶ Rosalind, 16, sits on the counter swinging her heels.
9 A Beside the stove, Ilya, Hannah's father, 70s, hums something tuneless and kind.
* 10 A Nothing wrong.
11 A ¶ Beck, the neighbour, 50s, leans in the back doorway with a flashlight pointed politely at the floor.
12 D HANNAH: Grid's down to the coast, Beck says. Probably a transformer.
13 D BECK: Probably. Probably a transformer.
14 D THE TWINS (together, from under the table): Can we have the marshmallows now?
15 D ROSALIND: You had marshmallows.
16 D THE TWINS: That was before.
17 D ILYA: Before what? Before what?
18 D DESMOND (not turning): Hannah. Come here.
19 D HANNAH: In a second, Des, the girls are...
20 D DESMOND: Now.
21 A ¶ She crosses the kitchen.
* 22 A Wax.
* 23 A Tea.
* 24 A The smell of home.
* 25 A ¶ Outside, above the roofline, the stars are wrong.
* 26 A Too many.
* 27 A Too still.
* 28 A And one of them is moving toward the house.
* 29 A ¶ Silence.
* 30 A ¶ Her phone.
* 31 A Dead.
32 D BECK: That is not a transformer.
33 D ROSALIND: Mom?
34 D THE TWINS: Is it the visitors?
* 35 A ¶ Nobody breathes.
36 A Hannah turns, slowly, and sees that Ilya has stopped humming, and that her father is smiling at the window like a man whose train has finally come in.
37 D ILYA (softly): They said it would be in the evening.

### SCENE s05051 | INT. NIGHT BUS - MOVING - NIGHT
Detected names (may be incomplete or contain aliases): NELL, HOODIE GUY, BARROW, IRIS, SHRIEK
* 1 A ¶ Rain on glass.
* 2 A Neon smears past.
* 3 A ¶ A battered double-decker, half empty, rattling through a city that does not appear on any map.
* 4 A Flickering strip lights.
* 5 A Vinyl seats slashed and taped.
* 6 A A bell that rings by itself.
7 A ¶ Two teenagers share earbuds in the back row.
8 A A scruffy terrier sleeps under a seat.
9 A ¶ Up front, NELL (20s, soot on her cheek, a sword wrapped in a rain poncho) grips the pole.
10 A ¶ HOODIE GUY sits across the aisle.
11 A Grey hood.
12 A No face.
13 A Just a slow, steady grin in the dark.
* 14 A ¶ The engine COUGHS.
15 D NELL (to the whole bus): Nobody panic. We're ahead of them.
16 D BARROW (a hulking man in a bus-driver's cap, hauling the wheel): Define ahead.
* 17 A ¶ BELL.
* 18 A DING.
* 19 A DING.
20 D NELL (muttered): Come on, come on.
* 21 A ¶ The lights DIE.
* 22 A Back on.
* 23 A Silence.
* 24 A ¶ Rain.
* 25 A Nothing.
26 D IRIS (clutching a lantern, eyes on the roof): Something just landed up there.
* 27 A ¶ THUMP.
* 28 A THUMP.
* 29 A THUMP.
30 A ¶ The teenagers pull out their earbuds.
31 A The dog lifts its head.
32 D BARROW (hands off the wheel, cracking his knuckles): Hold this thing steady.
33 D NELL (drawing the sword, glaring at the ceiling): You're not steering?
34 D BARROW (grinning): Not anymore.
* 35 A ¶ CRUNCH.
* 36 A A claw punches through the roof.
37 D HOODIE GUY (rising, pushing back his hood, calm): Let me.
* 38 A ¶ A flash of silver light.
* 39 A A SHRIEK from above.
* 40 A Then a heavy body slides off the roof and is gone.
* 41 A ¶ Silence.
* 42 A Rain.
43 D IRIS (whispering): Who are you?
44 D HOODIE GUY (sitting back down): Cass. Once upon a time, I was the one they sent you to find.
45 D NELL (lowering the sword, to herself): Of course you were.
* 46 A ¶ The bus hums on into the dark.
47 A The dog goes back to sleep.

### SCENE s05052 | EXT. DUSTY HITCHING POST OUTSIDE THE GENERAL STORE - DAY
Detected names (may be incomplete or contain aliases): JO, KIP, KIM
* 1 A ¶ Heat.
* 2 A A tumbleweed rolls by like it has somewhere to be.
3 A ¶ Kip, 17, leans on the rail with his hat pulled low.
4 A He is staring at his phone like it owes him money.
5 A Two steps away, Kim, 17, doing the exact same thing, is not looking at him.
6 A ¶ CLOSE ON Kip's screen.
7 A INSERT - the group chat.
* 8 A ¶ ON PHONE: @Kip_Rides: so ur the one thats always online ON PHONE: @KimInTheSaddle: ur the one who left me on read for 3 weeks
9 A ¶ Neither of them move.
10 A ¶ ANGLE ON the road.
11 A A third rider trots up, Jo, 18, in a duster two sizes too big.
12 A He ties the horse and takes a long time doing it.
13 D JO: So. That's the whole group then.
14 D KIP: Guess so.
15 D KIM: Guess so.
* 16 A ¶ Silence.
* 17 A A fly buzzes.
18 D JO: We could get a soda. Theres a place.
19 D KIP: Its closed.
20 D JO: Its a saloon, it's always closed in the day.
21 A ¶ She laughs, short and cracked, and looks at her boots.
22 A He kicks the dirt.
23 A Neither one says what they are thinking.
24 A She types something, deletes it, types something else.
* 25 A ¶ WE SEE Kip's phone light up.
* 26 A ¶ INSERT - ON PHONE: @KimInTheSaddle: ok this is weird
27 A ¶ Kip glances up.
28 A Kim glances up.
29 A They both look away at the same time.
30 D KIP (low): Yeah.
31 D JO: You two want me to leave or
32 D KIM: No.
33 D KIP: No, stay.
34 A ¶ He shifts his weight.
35 A She pulls her sleeve over her hand.
* 36 A It stays quiet for a while, the way a long road does.
37 A ¶ BACK TO SCENE
38 D JO: Okay, soda, I'll buy. Come on.
39 A ¶ He walks first.
40 A They follow, a few steps apart, phones dark in their hands.

### SCENE s05053 | INT. WESTFIELD HIGH SCHOOL - BOYS' BATHROOM - DAY
Detected names (may be incomplete or contain aliases): SAM, MO, BIG DAVE, JEN, MRS. K
* 1 A ¶ ON CAMERA: handheld, shaky, filming through a gap between two stalls.
* 2 A Fluorescent hum.
* 3 A A dripping tap.
4 A ¶ Sam, 17, leans on the sink, phone in hand, in a hoodie.
5 A Next to him, Mo, 17, washes his hands for far too long.
6 A ¶ The documentary crew is not supposed to be here.
7 A They are here anyway.
8 D SAM (to camera, quiet): You said you wouldn't film this part.
9 D MO: Turn it off. Seriously.
* 10 A ¶ The tap runs.
* 11 A Nobody turns anything off.
12 A ¶ This is the last time they will all be in the same room before the hearing.
* 13 A ¶ A stall door SLAMS.
14 A Big Dave, 18, steps out, shoulders filling the frame.
15 D BIG DAVE: Who's talking? Who's talking about me?
16 D SAM: Nobody.
17 D MO: We're not.
18 D JEN (from the doorway, a girl in a blazer, clipboard clutched): You're all still here? The hearing's in ten minutes.
19 D BIG DAVE: You think I don't know that?
20 D SAM: Jen, you shouldn't be in here.
21 D JEN: Mrs. K said to find you.
22 D MO: She said what?
23 D BIG DAVE: She said it's fine, they said it's fine, it's all fine.
24 D JEN: Nobody said it's fine, Dave.
25 D SAM: Can we just
26 D MO: Let her finish.
27 D JEN: The statement has to match. Word for word. If one of you changes one thing.
28 D BIG DAVE: I'm not changing anything.
29 D MO: You already did. You said it was a door.
30 D BIG DAVE: It WAS a door.
31 D SAM: It wasn't a door, man.
32 D JEN: Stop. Everyone stop.
* 33 A ¶ The phone BUZZES in Sam's hand.
34 A He stares at it.
35 D MRS. K [O.S.] (through the door): Samuel? Time.
* 36 A ¶ Nobody moves.
* 37 A The tap drips.
38 A Sam sets the phone on the sink, face down.
39 D SAM (barely a whisper): I'm telling them.

### SCENE s05055 | INT. SUBWAY CAR - EVENING
Detected names (may be incomplete or contain aliases): DASHA, IVO, PAVEL
1 A ¶ The train is very full and it is hot and a man named Ivo, 30s, with a blue bag between his feet, holds the pole with one hand and looks at the floor while a girl, Dasha, 20s, is pressed against him by the crowd and tries to read her phone over a shoulder, and at the far end of the car a thin man in a grey coat, Pavel, 40s, watches them both and does not look at anything else.
* 2 A ¶ ON PHONE: Dasha - where r u
3 A ¶ Dasha types with one thumb.
4 A She looks up.
5 A Ivo looks away.
* 6 A ¶ ON PHONE: Dasha - i see u. wave
7 A ¶ Ivo does not wave.
8 A His knuckles are white on the pole.
9 D DASHA (quiet): You have what I need?
10 D IVO (quiet): Not here.
* 11 A ¶ The train brakes.
12 A Everybody leans together.
13 A Pavel moves two steps closer through the crowd, one hand in his coat pocket, and a woman with shopping bags says something sharp in another language that nobody answers.
14 D DASHA: He is coming.
15 D IVO: I know.
* 16 A ¶ ON PHONE: Dasha - dont turn around
17 A ¶ Ivo turns around.
18 A Pavel is very close now.
* 19 A The doors open.
* 20 A Nobody gets off.
21 D PAVEL (smiling): You are in my seat, I think.
22 D IVO: There is no seat.

### SCENE s05057 | INT. ST. AGATHA'S CLINIC - EXAMINATION ROOM - NIGHT (1957)
Detected names (may be incomplete or contain aliases): DR. HALE, EDITH, MARGARET, PRUITT
* 1 A ¶ Gaslight.
* 2 A The walls sweat.
* 3 A Somewhere, a pipe knocks.
4 A ¶ Edith, 30s, in a pale dressing gown, sits on the edge of the table, hands folded.
5 A Margaret, 40s, the matron, stands at the instrument tray with her back turned, and in the dark corridor beyond them both a trolley rolls slowly and stops.
* 6 A ¶ Silence.
7 A ¶ Dr. Hale, 50s, enters with a lamp.
8 A Behind him comes Mr. Pruitt, 60s, the clinic's night porter, hat in hand, who will not meet anyone's eye.
9 D DR. HALE: You are comfortable, Mrs. Ashby?
10 D EDITH: Yes, Doctor.
11 A ¶ Margaret hands him something under a cloth.
12 A She watches her hand, then Edith's, then the door.
* 13 A ¶ Knock.
* 14 A Knock.
* 15 A Knock.
* 16 A ¶ It comes from inside the wall.
17 D MARGARET (low): Doctor.
18 D DR. HALE: The pipes.
19 D MARGARET: Those are not the pipes.
20 A ¶ Edith slides off the table.
21 A She takes one step and stops.
* 22 A The lamp gutters.
23 A In the corner, Pruitt's hat has fallen from his hand and he is looking at the floor, where something dark spreads along the boards toward her feet.
24 D PRUITT (a whisper): It's been listening since the third floor.
25 D DR. HALE: Pruitt, enough.
* 26 A ¶ The knocking stops.
* 27 A Nothing.
* 28 A The lamp steadies.
29 A She lets out a breath and he lets out a breath and for one long moment no one moves.
* 30 A ¶ Then the trolley in the corridor rolls away, quietly, and is gone.
31 D EDITH (very small): Is it finished?
32 A ¶ Dr. Hale sets down the cloth.
* 33 A Underneath is only a thermometer.
34 D DR. HALE: Yes. Quite finished.
35 A ¶ Margaret turns the lamp down.
36 A She tries to smile.
