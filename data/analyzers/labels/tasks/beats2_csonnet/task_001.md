You segment screenplay scenes into DRAMATIC BEATS for a screenwriting tool (timeline, mood track, outline).

A dramatic beat is one exchange of action and reaction around a single intention: a character pursues something with
one tactic, and the beat ends when the tactic, the power balance, the subject or the situation changes (a reveal, an
entrance or exit, a decision, a turn in the argument, a new attempt after a failure). Scenes usually have 3-8 beats;
a short scene can have 1-2, a long one up to ~12.
- A beat usually spans SEVERAL paragraphs and dialogue blocks. Do NOT start a beat at every paragraph or speaker change.
- Keep the setup (setting and introductions before anything is at stake) inside the first beat unless it is long
  and self-contained.
- A beat may start in the middle of an action paragraph if the turn happens there.

For each beat give:
- "start": unit number where it starts (the first content unit starts beat 1)
- "type": the coarse beat type and "fine": the best phrase for it, from this list (coarse: [fine phrases]):
  arrives: ["arrives", "bursts in", "slips in", "returns", "is introduced", "makes an entrance", "shows up unannounced", "is ushered in", "drifts in"]
  leaves: ["leaves", "storms out", "slips away", "walks out on", "is sent away", "excuses themself", "is escorted out", "abandons", "exits quietly"]
  confronts: ["confronts", "interrogates", "corners", "calls out", "challenges", "stares down", "demands answers from", "presses", "faces off with"]
  accuses: ["accuses", "blames", "implicates", "points the finger at", "charges", "exposes", "condemns", "suspects", "turns on"]
  threatens: ["threatens", "intimidates", "warns", "blackmails", "issues an ultimatum to", "menaces", "holds at gunpoint", "coerces", "looms over"]
  attacks: ["attacks", "strikes", "grabs", "shoves", "ambushes", "fights", "wrestles", "shoots at", "lunges at"]
  defends: ["defends", "protects", "shields", "stands up for", "justifies themself to", "denies to", "pushes back on", "holds the line against", "covers for"]
  flees: ["flees", "runs", "escapes", "bolts", "retreats", "hides from", "evades", "scrambles away", "slips out"]
  hides: ["hides", "conceals something", "ducks out of sight", "pockets evidence", "covers up", "keeps a secret", "lies low", "masks a feeling", "plays dead"]
  searches: ["searches", "investigates", "snoops", "rummages", "tracks", "looks for", "examines", "questions witnesses", "scans the room"]
  discovers: ["discovers", "finds a clue", "realizes", "notices", "uncovers", "stumbles on", "recognizes", "pieces it together", "catches"]
  reveals: ["reveals", "drops a bombshell on", "shows", "unmasks", "lets slip to", "breaks news to", "comes clean to", "exposes a secret to", "presents evidence to"]
  confesses: ["confesses to", "apologizes to", "admits guilt to", "opens up to", "breaks down to", "unburdens to", "owns up to", "begs forgiveness from", "comes clean to"]
  lies: ["lies to", "deceives", "bluffs", "covers a story for", "misleads", "feigns innocence to", "plays along with", "cons", "fakes it with"]
  deflects: ["deflects", "dodges", "changes the subject on", "stonewalls", "brushes off", "evades", "stalls", "shrugs off", "plays dumb with"]
  persuades: ["persuades", "convinces", "pitches to", "bargains with", "negotiates with", "recruits", "seduces", "flatters", "talks down"]
  pleads: ["pleads with", "begs", "appeals to", "asks for help from", "implores", "bargains for mercy with", "pleads innocence to", "calls for", "prays"]
  comforts: ["comforts", "reassures", "consoles", "calms", "tends to", "embraces", "encourages", "forgives", "steadies"]
  bonds: ["bonds with", "reconnects with", "confides in", "shares a moment with", "flirts with", "trusts", "reminisces with", "thanks", "teams up with"]
  jokes: ["jokes with", "teases", "banters with", "lightens the mood for", "pranks", "plays with", "charms", "amuses", "riffs with"]
  mocks: ["mocks", "taunts", "belittles", "humiliates", "provokes", "insults", "patronizes", "needles", "dismisses"]
  decides: ["decides", "commits", "makes a plan", "chooses", "refuses", "gives an order", "resigns", "accepts", "changes course"]
  observes: ["watches", "listens to", "waits", "spies on", "studies", "eavesdrops on", "keeps watch", "hesitates", "takes it in"]
  works: ["works", "cooks", "cleans", "repairs something", "drives", "prepares", "packs", "writes", "goes through routine"]
- "actor": the character driving the beat (cue name) or null; "target": who it is aimed at, or null
- "mood": the TONE of the beat as an audience feels it, one of: calm, tender, playful, joyful, hopeful, awkward, melancholy, grief, tense, suspense, ominous, fear, hostile, chaotic, triumphant, bittersweet
- "intensity": 1 (faint) to 5 (overwhelming)
- "summary": 6-15 words, present tense, what happens in the beat (names, no quotes)

Units: `A` = action sentence (¶ = first sentence of a paragraph), `D` = dialogue block.

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_csonnet/group_00001.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s05033 | INT. NIGHT BUS - MOVING - NIGHT
Detected names (may be incomplete or contain aliases): DOG, NARRATOR, RUSS DOLAN, NINA FALLOWS, DESMOND PIKE, OLD WOMAN, MAUREEN
1 A ¶ The 47 night bus, half empty, yellow light flickering over torn seats and a floor sticky with old rain.
2 A Windows fogged.
3 A A drunk TEENAGER asleep against the glass, another one eating chips from a paper bag, a DOG on a leash tucked under a seat beside its sleeping owner.
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
23 A ¶ The bus brakes, hissing.
24 A Chips-teenager drops the bag.
25 D RUSS (low, almost kind): You wired her, did you. Her. A nurse.
26 D DESMOND (standing, badge out, slow): Nobodys wired, Russ. Sit down. Everyone else is going to get off at Carver, and then you and me and Nina are going to ride to the end of the line.
27 D RUSS (reaching into the bag): No. No, I dont think we are.
28 A ¶ The OLD WOMAN screams.
29 A The dog barks, the owner jerks awake.
30 A Maureen slams the brakes and the whole bus lurches, bodies thrown, the bag skidding across the floor and spilling, not money, but a long black shape wrapped in a towel.
31 D NARRATOR [V.O.]: It always ends in the aisle. Every story on a night bus ends in the aisle.
32 D NINA (shouting, diving low): Gun! Desmond, gun!
33 D DESMOND (drawing, steady): Russ. Put it down. Put it down now.
34 D RUSS (unwrapping the towel, trembling): She took everything. Everything. You think I wanted this?
35 A ¶ The overhead light dies.
36 A The bus is dark except for the streetlamps stuttering past the windows, and in the pulse of them nobody moves, nobody breathes, and the dog will not stop barking.

### SCENE s05035_0 | EXT. CITY HALL PLAZA - CLIMATE PROTEST - DAY
Detected names (may be incomplete or contain aliases): CITY MAP, MIRA ADEYEMI, TOBIAS WREN, JUNO PARK, RAFA DELACROIX
1 A ¶ SUPER: "THURSDAY, 2:14 PM"
2 A ¶ A river of banners and drums and kids on shoulders pours across the plaza, whistles shrieking and a brass band somewhere playing something almost like a hymn, and at the edge of the crowd under a dead plane tree four people in orange vests drift together, not looking at one another, while a police helicopter chops overhead and a woman on a megaphone leads a chant that rolls back and forth like surf.
3 A ¶ INSERT - A CITY MAP on a phone, the bank across the plaza circled in red.
4 A ¶ SUPER: "ARCHIVE VAULT, FLOOR B2"
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
16 A ¶ The brass band swells.
17 A A drum thunders.
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
28 A ¶ The chant swells.
29 A Rain begins, thin and sudden.
30 A The four melt into the crowd one by one.

### SCENE s05035_1 | EXT. CITY HALL PLAZA - LATER
Detected names (may be incomplete or contain aliases): 
1 A ¶ Banners droop.
2 A The brass band packs its cases.
3 A A single cardboard sun lies face down in a puddle, its stick snapped in half.

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

### SCENE s05039_0 | EXT. CITY STREET - FOOD TRUCK - DAY
Detected names (may be incomplete or contain aliases): 
1 A ¶ A white food truck is parked near the old market.
2 A The sign says BIG DAVE'S TACOS.
3 A A small line of customers waits in the sun.
4 A The smell of onions and hot oil is in the air.

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

### SCENE s05043_1 | INT. ST. BRIDGET'S CHURCH BASEMENT - LATER
Detected names (may be incomplete or contain aliases): 
1 A ¶ The chairs are stacked.
2 A The banner finally falls.

### SCENE s05044 | INT. RIDESHARE - NIGHT
Detected names (may be incomplete or contain aliases): THE WOMAN, TOBIAS, INES, PIP, HOLLIS, MARA
1 A ¶ SUPER: "2:07 AM.
2 A ROUTE 9.
3 A NO STREETLIGHTS."
4 A ¶ A battered hatchback, air freshener swinging, dashboard mounted phone glowing with a map that shows a road that does not exist on any other map.
5 A Rain of a strange silver colour hangs in the headlights without falling.
6 A ¶ Tobias Wren, 50s, driver, tired kind eyes, a thermos wedged between the seats, drives with one hand.
7 A In the back seat sits the hooded passenger, THE WOMAN, face hidden, a long coat soaked at the hem, hands folded very still on a wooden box in her lap.
8 A ¶ Next to her slumps Pip, 19, student, earbuds in, a backpack clutched like a pillow.
9 A In the far seat is Hollis Grey, 60s, in a pressed suit, not touching the upholstery, and beside Tobias in the front sits Ines, 30s, a nurse in scrubs, scrolling her phone with a frown.
10 A ¶ CLOSE ON the dashboard clock.
11 A 2:07.
12 A It does not change.
13 D TOBIAS (glancing in the mirror): Everyone good back there? I can turn the heat up.
14 A ¶ Nobody answers.
15 A THE WOMAN tilts her head, listening to something far away.
16 D INES: Your app says four minutes to Birchmont. We've been four minutes for twenty.
17 D TOBIAS: Road's long tonight.
18 A ¶ ANGLE ON Pip pulling out an earbud, blinking at the window.
19 D PIP: There's a tree out there. Same tree. Left side, three times now.
20 D HOLLIS (smoothing his tie): A man learns to stop counting trees.
21 D TOBIAS (a short laugh that doesn't land): Okay, that's not a thing people say.
22 A ¶ WE SEE the wooden box in THE WOMAN's lap.
23 A A faint light seams its edges.
24 A Her fingers tighten.
25 D INES (turning in her seat): Ma'am? You okay? You haven't said anything since you got in.
26 D THE WOMAN (a low, even voice): I have been saying it. You have not been listening.
27 A ¶ INSERT - THE BOX
28 A ¶ Carved into the lid: a small door, and a keyhole shaped like a crescent.
29 A ¶ BACK TO SCENE
30 A ¶ Tobias taps the brakes.
31 A The car does not slow.
32 A The silver rain begins to fall upward.
33 D PIP (hands flat on the seat in front of him): Tobias. Dude. The brakes.
34 D TOBIAS (knuckles whitening): I'm pressing them.
35 D HOLLIS (quietly, to nobody): She's come for the debt. It was always going to be tonight.
36 D INES: What debt? Whose debt?
37 A ¶ THE WOMAN lifts her hood.
38 A Her face is a girl's face, maybe sixteen, silver-eyed, tired, very old.
39 D THE WOMAN: Hollis took the key from my mother. He promised to bring it back before the moon turned.
40 D HOLLIS (rising from the seat, bumping the roof): Mara. Please. I was young.
41 D MARA (opening the box, a pale blaze filling the car): You were forty-one.
42 A ¶ The light swallows the dashboard, the map, the unmoving clock.
43 A Tobias shouts.
44 A Pip's earbud falls to the floor.
45 A Ines grabs for the door handle and finds it gone.
46 A ¶ CLOSE ON Hollis's hand, a crescent-shaped key trembling in his palm.
47 D HOLLIS (extending it, voice breaking): Take it. Take it and let them out.
48 D MARA (taking the key, setting it in the lid): They were never held. Only you.
49 A ¶ The car stops.
50 A All at once.
51 A The rain falls down again.
52 A ¶ Silence.
53 A The hatchback sits in an empty field under a normal moon.
54 A The seat beside Mara is empty, a pressed suit folded neatly on the cushion.
55 D TOBIAS (barely breathing): Where did he go?
56 D MARA (closing the box, stepping out into the grass): Home.
57 A ¶ She walks away into the dark.
58 A The dashboard clock finally clicks to 2:08.

### SCENE s05045 | INT. FUNERAL RECEPTION - COMMUNITY HALL - DAY
Detected names (may be incomplete or contain aliases): LUIS, RAY
1 A ¶ Trays of sandwiches, a slideshow looping on a projector.
2 A Coach Frank Dunleavy's face, forty years of whistles and clipboards, fills the wall.
3 A ¶ Two teenagers in oversized suits fight over the last deviled egg while a waiter weaves past them with a tray of lukewarm coffee and a little brown dog sneaks under the buffet table.
4 A ¶ Ray Pruitt, 50s, former star pitcher, stands by the window with a paper cup.
5 A Across the room Luis Navarro, 50s, his old catcher, enters, spots him, and stops dead.
6 A ¶ INSERT - THE SLIDESHOW
7 A ¶ A photo of both men, young, arms around each other, a championship trophy between them.
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
1 A ¶ We see a long hallway with flickering fluorescent lights, which is a metaphor for how the main character feels inside.
2 A It is 3 AM.
3 A CLOSE ON a clock on the wall.
4 A ¶ THE NEW GIRL, 19, sits at the station in oversized scrubs, her badge flipped backwards.
5 A She is clearly nervous and has never worked a night shift before, which we can tell because she keeps looking at her phone.
6 D THE NEW GIRL (straightening a stack of charts that are already straight, then knocking them over): Okay. Okay. Breathe.
7 A ¶ A voice crackles from the intercom.
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
20 A ¶ The intercom crackles again.
21 D CHARGE NURSE [V.O.]: Priya, you still there? Your mom's on line two. She says you left your lunch in the car.
22 D PRIYA (burying her face in her hands, shoulders shaking with laughter): I'm going to quit. I'm going to quit tonight.
23 D KESSLER [O.S.] (warmly): You won't.
24 T CUT TO:

### SCENE s05046_1 | INT. NURSES' STATION - LATER
Detected names (may be incomplete or contain aliases): 
1 A ¶ Priya sits back down.
2 A For the first time all night she doesn't check her phone.

### SCENE s05047 | INT. THE HARGREAVES KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): ROSALIND HARGREAVES, TOM
1 A ¶ Rain against the window, steady and unremarkable.
2 A The fridge hum has died.
3 A Somewhere down the road a transformer has given up, and the whole street has gone the colour of weak tea.
4 A ¶ A single candle on the table.
5 A A cold pot of something on the hob.
6 A A mug, a second mug, a phone face-up between them.
7 A ¶ ROSALIND HARGREAVES, 50s, cardigan, reading glasses on a string, stands at the sink with her back to the room.
8 A Her son, TOM, 17, sits at the table in a school blazer he has not taken off.
9 A ¶ The clock on the wall has stopped at ten past nine.
10 D ROSALIND (rinsing a cup that is already clean): You're back early.
11 D TOM (turning the phone over, then back): Not really.
12 A ¶ Outside, a dog barks twice and thinks better of it.
13 A ¶ ON PHONE: "DAD: Spoke to your mum.
14 A We'll sort it.
15 A Don't be daft."
16 D ROSALIND (without turning): He texted you as well, did he?
17 D TOM (a very small nod): Said not to be daft.
18 D ROSALIND (drying her hands slowly on a tea towel): That does sound like him.
19 A ¶ The candle gutters.
20 A A gust finds the back door and goes away again.
21 A Neither of them moves to fix it.
22 D TOM (picking at the edge of the table): I got the letter from Durham.
23 D ROSALIND (her shoulders very slightly tightening): Did you.
24 D TOM (a breath out through his nose): They've offered me a place.
25 D ROSALIND (finally turning, the towel in both hands): Well. That's marvellous.
26 D TOM (not looking up): You don't sound it.
27 D ROSALIND (a small, brittle laugh): I'm told it's the done thing, to sound it.
28 A ¶ The rain eases for a moment.
29 A In the quiet, the house ticks as it cools.
30 A ¶ This is the last evening the three of them will pretend to be a family under this roof.
31 D TOM (standing, the chair scraping the tiles): I've not even said I'll go yet.
32 D ROSALIND (folding the towel, setting it down, squaring its corners): You've said it. You said it when you came in with your coat still on.
33 A ¶ ON PHONE: "DAD: pick up. please."
34 D TOM (snatching the phone, thumb over the screen, a crack in his voice): Mum, I'm not leaving you here on your own.
35 D ROSALIND (crossing the kitchen, taking the phone from his hand, setting it face-down on the table): Thomas. You will go. And I shall be perfectly all right. It's only a power cut.
36 A ¶ The candle burns on.
37 A Somewhere across the road, a generator coughs and catches, and one lit window blinks into being.

### SCENE s05048 | INT. JUNE'S BEDROOM - NIGHT
Detected names (may be incomplete or contain aliases): JUNE PARK, WESLEY, BEN, MOM, AUNT LIN
1 A ¶ Posters, fairy lights, a pile of laundry that is definitely not just laundry.
2 A JUNE PARK, 16, sits on the bed in pajamas with her best friend WESLEY, 17, and her little brother BEN, 9, who is holding a flashlight he was told not to touch.
3 D JUNE (whispering, tugging a blanket over all three of them): Okay so the rule is nobody screams. If somebody screams we all die.
4 D WESLEY (also whispering, much louder): That is not how that works.
5 D BEN (clicking the flashlight on and off): It is exactly how that works.
6 A ¶ The phone BUZZES on the nightstand.
7 A June jumps.
8 A Wesley shrieks and ducks under a pillow.
9 D JUNE (snatching it, glaring at him): You screamed!
10 D WESLEY (muffled): I did not scream I sneezed in a very high register.
11 A ¶ ON PHONE: "MOM: Honey are you asleep?
12 A Door's locked right?"
13 D JUNE (texting back with her thumbs flying): Mom is checking on me. Act asleep.
14 D BEN (flopping dramatically onto the pillow): Zzzz. Zzzz. Why am I the one doing the snoring?
15 D WESLEY (jabbing a finger at him): Because you're the most convincing.
16 A ¶ A door SLAMS somewhere in the house.
17 A All three freeze.
18 D MOM [V.O.] (through the phone, tinny, on speaker now): June? Is that you in the hall?
19 D JUNE (going pale, the phone trembling in her hand): Mom, I'm in my room.
20 D MOM [V.O.] (slowly): Then who just walked past my door?
21 A ¶ The closet door CREAKS open.
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
2 A ¶ Dark.
3 A Candle flames.
4 A The fridge, silent.
5 A ¶ Desmond, her husband, 40s, stands at the window with his phone held up like a lantern, and he is not looking at the sky.
6 A He is looking at the street.
7 A Every house on it is dark in exactly the same way.
8 A ¶ Rosalind, 16, sits on the counter swinging her heels.
9 A Beside the stove, Ilya, Hannah's father, 70s, hums something tuneless and kind.
10 A Nothing wrong.
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
22 A Wax.
23 A Tea.
24 A The smell of home.
25 A ¶ Outside, above the roofline, the stars are wrong.
26 A Too many.
27 A Too still.
28 A And one of them is moving toward the house.
29 A ¶ Silence.
30 A ¶ Her phone.
31 A Dead.
32 D BECK: That is not a transformer.
33 D ROSALIND: Mom?
34 D THE TWINS: Is it the visitors?
35 A ¶ Nobody breathes.
36 A Hannah turns, slowly, and sees that Ilya has stopped humming, and that her father is smiling at the window like a man whose train has finally come in.
37 D ILYA (softly): They said it would be in the evening.

### SCENE s05051 | INT. NIGHT BUS - MOVING - NIGHT
Detected names (may be incomplete or contain aliases): NELL, HOODIE GUY, BARROW, IRIS, SHRIEK
1 A ¶ Rain on glass.
2 A Neon smears past.
3 A ¶ A battered double-decker, half empty, rattling through a city that does not appear on any map.
4 A Flickering strip lights.
5 A Vinyl seats slashed and taped.
6 A A bell that rings by itself.
7 A ¶ Two teenagers share earbuds in the back row.
8 A A scruffy terrier sleeps under a seat.
9 A ¶ Up front, NELL (20s, soot on her cheek, a sword wrapped in a rain poncho) grips the pole.
10 A ¶ HOODIE GUY sits across the aisle.
11 A Grey hood.
12 A No face.
13 A Just a slow, steady grin in the dark.
14 A ¶ The engine COUGHS.
15 D NELL (to the whole bus): Nobody panic. We're ahead of them.
16 D BARROW (a hulking man in a bus-driver's cap, hauling the wheel): Define ahead.
17 A ¶ BELL.
18 A DING.
19 A DING.
20 D NELL (muttered): Come on, come on.
21 A ¶ The lights DIE.
22 A Back on.
23 A Silence.
24 A ¶ Rain.
25 A Nothing.
26 D IRIS (clutching a lantern, eyes on the roof): Something just landed up there.
27 A ¶ THUMP.
28 A THUMP.
29 A THUMP.
30 A ¶ The teenagers pull out their earbuds.
31 A The dog lifts its head.
32 D BARROW (hands off the wheel, cracking his knuckles): Hold this thing steady.
33 D NELL (drawing the sword, glaring at the ceiling): You're not steering?
34 D BARROW (grinning): Not anymore.
35 A ¶ CRUNCH.
36 A A claw punches through the roof.
37 D HOODIE GUY (rising, pushing back his hood, calm): Let me.
38 A ¶ A flash of silver light.
39 A A SHRIEK from above.
40 A Then a heavy body slides off the roof and is gone.
41 A ¶ Silence.
42 A Rain.
43 D IRIS (whispering): Who are you?
44 D HOODIE GUY (sitting back down): Cass. Once upon a time, I was the one they sent you to find.
45 D NELL (lowering the sword, to herself): Of course you were.
46 A ¶ The bus hums on into the dark.
47 A The dog goes back to sleep.

### SCENE s05052 | EXT. DUSTY HITCHING POST OUTSIDE THE GENERAL STORE - DAY
Detected names (may be incomplete or contain aliases): JO, KIP, KIM
1 A ¶ Heat.
2 A A tumbleweed rolls by like it has somewhere to be.
3 A ¶ Kip, 17, leans on the rail with his hat pulled low.
4 A He is staring at his phone like it owes him money.
5 A Two steps away, Kim, 17, doing the exact same thing, is not looking at him.
6 A ¶ CLOSE ON Kip's screen.
7 A INSERT - the group chat.
8 A ¶ ON PHONE: @Kip_Rides: so ur the one thats always online ON PHONE: @KimInTheSaddle: ur the one who left me on read for 3 weeks
9 A ¶ Neither of them move.
10 A ¶ ANGLE ON the road.
11 A A third rider trots up, Jo, 18, in a duster two sizes too big.
12 A He ties the horse and takes a long time doing it.
13 D JO: So. That's the whole group then.
14 D KIP: Guess so.
15 D KIM: Guess so.
16 A ¶ Silence.
17 A A fly buzzes.
18 D JO: We could get a soda. Theres a place.
19 D KIP: Its closed.
20 D JO: Its a saloon, it's always closed in the day.
21 A ¶ She laughs, short and cracked, and looks at her boots.
22 A He kicks the dirt.
23 A Neither one says what they are thinking.
24 A She types something, deletes it, types something else.
25 A ¶ WE SEE Kip's phone light up.
26 A ¶ INSERT - ON PHONE: @KimInTheSaddle: ok this is weird
27 A ¶ Kip glances up.
28 A Kim glances up.
29 A They both look away at the same time.
30 D KIP (low): Yeah.
31 D JO: You two want me to leave or
32 D KIM: No.
33 D KIP: No, stay.
34 A ¶ He shifts his weight.
35 A She pulls her sleeve over her hand.
36 A It stays quiet for a while, the way a long road does.
37 A ¶ BACK TO SCENE
38 D JO: Okay, soda, I'll buy. Come on.
39 A ¶ He walks first.
40 A They follow, a few steps apart, phones dark in their hands.

### SCENE s05053 | INT. WESTFIELD HIGH SCHOOL - BOYS' BATHROOM - DAY
Detected names (may be incomplete or contain aliases): SAM, MO, BIG DAVE, JEN, MRS. K
1 A ¶ ON CAMERA: handheld, shaky, filming through a gap between two stalls.
2 A Fluorescent hum.
3 A A dripping tap.
4 A ¶ Sam, 17, leans on the sink, phone in hand, in a hoodie.
5 A Next to him, Mo, 17, washes his hands for far too long.
6 A ¶ The documentary crew is not supposed to be here.
7 A They are here anyway.
8 D SAM (to camera, quiet): You said you wouldn't film this part.
9 D MO: Turn it off. Seriously.
10 A ¶ The tap runs.
11 A Nobody turns anything off.
12 A ¶ This is the last time they will all be in the same room before the hearing.
13 A ¶ A stall door SLAMS.
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
33 A ¶ The phone BUZZES in Sam's hand.
34 A He stares at it.
35 D MRS. K [O.S.] (through the door): Samuel? Time.
36 A ¶ Nobody moves.
37 A The tap drips.
38 A Sam sets the phone on the sink, face down.
39 D SAM (barely a whisper): I'm telling them.

### SCENE s05055 | INT. SUBWAY CAR - EVENING
Detected names (may be incomplete or contain aliases): DASHA, IVO, PAVEL
1 A ¶ The train is very full and it is hot and a man named Ivo, 30s, with a blue bag between his feet, holds the pole with one hand and looks at the floor while a girl, Dasha, 20s, is pressed against him by the crowd and tries to read her phone over a shoulder, and at the far end of the car a thin man in a grey coat, Pavel, 40s, watches them both and does not look at anything else.
2 A ¶ ON PHONE: Dasha - where r u
3 A ¶ Dasha types with one thumb.
4 A She looks up.
5 A Ivo looks away.
6 A ¶ ON PHONE: Dasha - i see u. wave
7 A ¶ Ivo does not wave.
8 A His knuckles are white on the pole.
9 D DASHA (quiet): You have what I need?
10 D IVO (quiet): Not here.
11 A ¶ The train brakes.
12 A Everybody leans together.
13 A Pavel moves two steps closer through the crowd, one hand in his coat pocket, and a woman with shopping bags says something sharp in another language that nobody answers.
14 D DASHA: He is coming.
15 D IVO: I know.
16 A ¶ ON PHONE: Dasha - dont turn around
17 A ¶ Ivo turns around.
18 A Pavel is very close now.
19 A The doors open.
20 A Nobody gets off.
21 D PAVEL (smiling): You are in my seat, I think.
22 D IVO: There is no seat.

### SCENE s05057 | INT. ST. AGATHA'S CLINIC - EXAMINATION ROOM - NIGHT (1957)
Detected names (may be incomplete or contain aliases): DR. HALE, EDITH, MARGARET, PRUITT
1 A ¶ Gaslight.
2 A The walls sweat.
3 A Somewhere, a pipe knocks.
4 A ¶ Edith, 30s, in a pale dressing gown, sits on the edge of the table, hands folded.
5 A Margaret, 40s, the matron, stands at the instrument tray with her back turned, and in the dark corridor beyond them both a trolley rolls slowly and stops.
6 A ¶ Silence.
7 A ¶ Dr. Hale, 50s, enters with a lamp.
8 A Behind him comes Mr. Pruitt, 60s, the clinic's night porter, hat in hand, who will not meet anyone's eye.
9 D DR. HALE: You are comfortable, Mrs. Ashby?
10 D EDITH: Yes, Doctor.
11 A ¶ Margaret hands him something under a cloth.
12 A She watches her hand, then Edith's, then the door.
13 A ¶ Knock.
14 A Knock.
15 A Knock.
16 A ¶ It comes from inside the wall.
17 D MARGARET (low): Doctor.
18 D DR. HALE: The pipes.
19 D MARGARET: Those are not the pipes.
20 A ¶ Edith slides off the table.
21 A She takes one step and stops.
22 A The lamp gutters.
23 A In the corner, Pruitt's hat has fallen from his hand and he is looking at the floor, where something dark spreads along the boards toward her feet.
24 D PRUITT (a whisper): It's been listening since the third floor.
25 D DR. HALE: Pruitt, enough.
26 A ¶ The knocking stops.
27 A Nothing.
28 A The lamp steadies.
29 A She lets out a breath and he lets out a breath and for one long moment no one moves.
30 A ¶ Then the trolley in the corridor rolls away, quietly, and is gone.
31 D EDITH (very small): Is it finished?
32 A ¶ Dr. Hale sets down the cloth.
33 A Underneath is only a thermometer.
34 D DR. HALE: Yes. Quite finished.
35 A ¶ Margaret turns the lamp down.
36 A She tries to smile.

### SCENE s05059 | INT. NORTHERN CHECKPOINT - INSPECTION BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): OFFICER OKAFOR, THE TRAVELER, SUPERVISOR DUNNE, MIRELA, LUKAS
1 A ¶ A booth of steel and glass.
2 A A scanner hums.
3 A Beyond the window, a line of vehicles stretches into fog.
4 A ¶ OFFICER OKAFOR, 40s, sits behind the desk.
5 A Opposite her, a figure stands in a long coat, face hidden by a respirator mask.
6 D OKAFOR: Papers.
7 D THE TRAVELER (sliding a card across): They are all there.
8 D OKAFOR (reading, a long beat): This card was issued in a year that has not happened yet.
9 D THE TRAVELER (beat): Then it is early. I apologise.
10 D OKAFOR (setting it down): Remove the mask.
11 D THE TRAVELER (beat): I would prefer not to.
12 D OKAFOR: That was not a request.
13 A ¶ SUPERVISOR DUNNE, 50s, enters from the back office, jacket over one arm.
14 D DUNNE (low, to Okafor): Problem?
15 D OKAFOR (not turning): The scanner says there is nobody inside the coat.
16 D DUNNE (glancing at the screen): The scanner is old.
17 D OKAFOR (beat): The scanner is new.
18 D THE TRAVELER (slowly, lifting the mask with both hands): Please. Do not be frightened.
19 D OKAFOR (rising, hand on her holster): Step back.
20 D DUNNE (raising a hand): Officer. Easy.
21 A ¶ The mask comes away.
22 A Underneath is a woman of perhaps thirty, tired, ordinary, with a scar through one eyebrow.
23 D THE TRAVELER (quietly): My name is Mirela. I was born in this booth.
24 D OKAFOR (a laugh, no humour): That is not possible.
25 D MIRELA (beat): My mother stood where you are standing. She was a guard, and she told me, one day a woman will come with a card from tomorrow.
26 D DUNNE (carefully): And what did she say to do?
27 D MIRELA (beat): She said to let me through.
28 D OKAFOR (to Dunne): She is lying.
29 D DUNNE (to Mirela): Who is your mother?
30 D MIRELA (simply): Your wife.
31 D OKAFOR (stunned): Sir?
32 D DUNNE (very still): My wife has no children.
33 D LUKAS [V.O.] (over the intercom, crackling): Booth three, we have a breach on the east lane. Repeat, east lane.
34 D OKAFOR (into the radio): Hold position, Lukas.
35 D DUNNE (at the same time): Send everyone to the east gate.
36 D OKAFOR (overlapping, sharp): Sir, you cannot order that.
37 D DUNNE (softly, to Mirela): Tell me what she looked like.
38 D MIRELA (beat, gentle): Like you, but she laughed.
39 D DUNNE (a long silence, then hoarse): Open the barrier.
40 D OKAFOR (beat): Sir.
41 D DUNNE (turning on her, gently): Open it.
42 D OKAFOR (after a long moment, pressing a button): Barrier is open.
43 D MIRELA (lifting the mask, but not wearing it): Thank you. Both of you.
44 D DUNNE (beat): Will I see her?
45 D MIRELA (at the door, a small smile): You already did. That is why it is a loop.
46 A ¶ She exits.
47 A Okafor and Dunne stand side by side, watching the barrier rise into the fog.

### SCENE s05061 | INT. BRIGHTWATER ANIMAL CLINIC - EXAM ROOM - DAY
Detected names (may be incomplete or contain aliases): PRIYA NAIR, TOMAS REYES, WENDY OKAFOR
1 A ¶ CLOSE ON a stainless steel table, a tabby cat on a towel, a stethoscope sliding across its ribs.
2 A Fluorescent hum.
3 A ¶ DR. PRIYA NAIR, 34, sharp-eyed, hair in a hasty knot, scrubs with a faded cartoon dog on the pocket, works the stethoscope while TOMAS REYES, 36, a carpenter in a flannel shirt with sawdust still in the seams, holds the cat's head with both hands as if it were a bird's egg, and the whole small white room, the poster of canine dental anatomy, the jar of tongue depressors, the window onto a parking lot where rain is just beginning, waits for her verdict.
4 D PRIYA: Heart's fine. Lungs are clear. She's just old, Tomas.
5 D TOMAS: She's thirteen.
6 D PRIYA: That's old for a cat who eats my pens.
7 A ¶ ANGLE ON Tomas.
8 A He almost laughs.
9 D TOMAS: She ate one pen.
10 D PRIYA: It was a Montblanc.
11 A ¶ INSERT - THE CAT'S CHART.
12 A Name: BISCUIT.
13 A Owner: T. REYES.
14 A Last visit: eleven months ago.
15 A A sticky note in Priya's handwriting reads, "Ask him about the dinner."
16 A ¶ BACK TO SCENE
17 A ¶ Priya sees him see it.
18 A She flips the chart closed.
19 A This is the last time they will be alone in this room, though neither of them knows it yet.
20 D TOMAS: You wrote that after I cancelled.
21 D PRIYA: I write a lot of things.
22 D TOMAS: Priya.
23 D PRIYA: It's fine. I got over it. I have a very busy schedule of getting over things.
24 A ¶ WE SEE her hand shaking just slightly as she caps the stethoscope, and him noticing, and neither of them saying so.
25 D TOMAS: My mother was sick. That's why I cancelled. I should have called.
26 D PRIYA: You did call. Three months later.
27 D TOMAS: I know.
28 A ¶ A beat.
29 A Biscuit purrs, loud, unashamed.
30 D PRIYA: Is your mother okay?
31 D TOMAS: She passed in March.
32 A ¶ Priya's face changes.
33 A All the armor goes out of it at once.
34 D PRIYA: Tomas. I'm so sorry.
35 D TOMAS: I wasn't telling you for sympathy. I was telling you because you should have been told. A long time ago.
36 A ¶ The door swings open without a knock and WENDY OKAFOR, 20s, vet tech, bleach-blond ponytail, a clipboard hugged to her chest and a golden retriever puppy on a leash tugging her sideways, pulls up short at the sight of the two of them standing a foot apart.
37 D WENDY: Oh. Sorry. Dr. Nair, Mrs. Halloran's here with the Great Dane and she says it's an emergency but it's the same emergency as Tuesday.
38 D PRIYA: Give me two minutes.
39 D WENDY: She said that's what you said on Tuesday.
40 D PRIYA: Wendy.
41 D WENDY: Going. I'm going.
42 A ¶ The puppy scrambles in a circle, tangling the leash around Tomas's boots.
43 A He crouches to free it, and Wendy stands there a second too long, reading the room the way a young person reads a room, with enormous obviousness.
44 D WENDY [CONT'D] (to the puppy): Come on, Waffles. Let's give the grown-ups the room.
45 A ¶ She tows the puppy out.
46 A The door clicks.
47 A CLOSE ON the doorknob, still turning, then still.
48 A ¶ Tomas stands with a tangle of leash in his hand that no one is holding anymore.
49 D TOMAS: Have dinner with me. Not a date. Just dinner. I'll pay and I'll answer anything you ask.
50 D PRIYA: Anything?
51 D TOMAS: Anything.
52 D PRIYA: Why did you take eleven months to bring her back in?
53 D TOMAS: Because every time I picked up the carrier I thought about walking in here and seeing you, and I didn't know what face I had.
54 A ¶ Silence.
55 A Rain on the window now, steady.
56 A Biscuit stretches a paw toward the edge of the table and Priya catches her without looking.
57 D PRIYA: Thursday. I get off at seven.
58 D TOMAS: Thursday.
59 D PRIYA: Bring the cat. She's the only one who ever told me the truth about you.
60 A ¶ He smiles, finally, a real one, tired and relieved, and scoops Biscuit into the carrier as Priya holds the door.
61 A For a moment they both stand in the doorway, too close, the narrow frame making them one shape, and in the hallway behind them Mrs. Halloran's Great Dane begins, mournfully, to howl.
62 D PRIYA [CONT'D]: That's my emergency.
63 D TOMAS: Go.
64 A ¶ She goes.
65 A He stays a moment longer in the empty exam room, looking at the wet window, at the last line of the chart, at the sticky note he has not been supposed to read, and he is smiling at nothing.

### SCENE s05063 | INT. MOVING VAN - NIGHT
Detected names (may be incomplete or contain aliases): KIM, KIP, MO
1 A ¶ Dark.
2 A The cargo hold.
3 A Boxes, stacked.
4 A A single dome light, flickering.
5 A ¶ KIM and KIP crouch among the crates, breath fogging.
6 A Rain on the roof.
7 A A drum.
8 A ¶ Tick.
9 A Tick.
10 D KIP: You hear that?
11 D KIM: Its the engine.
12 D KIP: Not the engine.
13 A ¶ Silence.
14 A ¶ Something under the floor.
15 A A scrape.
16 A Slow.
17 D KIM: Mo said the vault was empty. Mo said nobody's in the back.
18 A ¶ Dripping.
19 A Somewhere behind the boxes.
20 D KIP: Kim. Look at the lock.
21 A ¶ The rear door latch.
22 A Turning.
23 A By itself.
24 A ¶ Nothing.
25 A Then a long metal groan.
26 A ¶ MO, 50s, soaked, gray stubble, a crowbar in one hand and a flashlight in the other, steps through the opening into the dome light, grinning like a man whos won something.
27 D MO: Told you I'd catch up. Miss me?
28 A ¶ Kim and Kip look at each other.
29 A Neither moves.
30 D KIM: Mo is up front. Driving.
31 A ¶ Mo's grin stays.
32 A The scraping starts again, from his side of the van.
33 A ¶ Black.
