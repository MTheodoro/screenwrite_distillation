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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_sonnet/group_00038.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01748 | INT. DEPOSITION ROOM - CONVERTED BOWLING ALLEY - DAY
Detected names (may be incomplete or contain aliases): NADIA FERRANTE, ELIAS BRANDT
1 A ¶ A long laminate table has been set up across what used to be lane six.
2 A Pins are still racked at the far end behind a sheet of clear plastic.
3 A A court reporter's machine sits unattended, red light blinking.
4 A Two chairs face each other, one pushed in tight, one angled for escape.
5 A A pitcher of water sweats between them.
6 A ¶ NADIA FERRANTE (40s, attorney, charcoal suit, a legal pad she doesn't need) sits upright, pen capped.
7 A Across from her, ELIAS BRANDT (60s, retired shipping executive, rumpled blazer, thick hands folded) leans back like a man in a waiting room.
8 D NADIA: For the record, Mr. Brandt, please state your name.
9 D ELIAS: You know my name.
10 D NADIA: For the record.
11 D ELIAS: Elias Brandt.
12 D NADIA: And you understand you're under oath.
13 D ELIAS: I understand this is a bowling alley.
14 D NADIA: It's the only room the county would lend us.
15 D ELIAS: I used to bowl here. Thursdays.
16 D NADIA: Is that relevant?
17 D ELIAS: Only to me.
18 A ¶ She uncaps her pen.
19 A She writes the date at the top of the page.
20 D NADIA: Mr. Brandt, on March fourth, did you authorize the transfer of eleven million dollars from the pension fund?
21 D ELIAS: I authorized a loan.
22 D NADIA: To whom?
23 D ELIAS: To the company.
24 D NADIA: Which company?
25 D ELIAS: My company.
26 D NADIA: So you lent yourself eleven million dollars of other people's retirement.
27 D ELIAS: I lent it to the business, Ms. Ferrante. The business employs four hundred people.
28 D NADIA: Employed.
29 D ELIAS: Excuse me?
30 D NADIA: Past tense. Four hundred people were employed. Eleven thousand retirees were promised.
31 D ELIAS: Don't lecture me.
32 D NADIA: I'm not lecturing. I'm asking.
33 D ELIAS: You're performing. There's no jury.
34 D NADIA: There's a record.
35 D ELIAS: Then let it record that the market turned.
36 D NADIA: Mr. Brandt, I'm going to show you Exhibit Nine.
37 A ¶ She slides a document across the table.
38 A He doesn't touch it.
39 D NADIA [CONT'D]: That's your signature?
40 D ELIAS: Looks like it.
41 D NADIA: Is it?
42 D ELIAS: Yes.
43 D NADIA: And the date next to it?
44 D ELIAS: March fourth.
45 D NADIA: And the note in the margin. Read it aloud, please.
46 A ¶ He picks up the paper.
47 A He reads in a flat voice.
48 D ELIAS: "Do not tell the trustees until it is done."
49 A ¶ Silence.
50 A The reporter's light blinks.
51 A Down the room, behind the plastic, the pins stand frozen.
52 D NADIA: Why did you write that?
53 D ELIAS: Because they would have said no.
54 D NADIA: Because it was illegal.
55 D ELIAS: Because they were frightened men. Frightened men say no. Somebody had to say yes.
56 D NADIA: Somebody who would profit.
57 D ELIAS: Somebody who would carry it.
58 D NADIA: Eleven thousand people are carrying it now.
59 D ELIAS (rising, sharply): Don't you speak to me about carrying! I carried those people for thirty years!
60 D NADIA: Sit down, Mr. Brandt.
61 D ELIAS: I put a roof on every one of them!
62 D NADIA: Sit down.
63 A ¶ He slams his palm on the table.
64 A The pitcher jumps.
65 A Water sloshes over the lip and runs across the laminate, toward the plastic, toward the pins.
66 A ¶ Nadia does not flinch.
67 A She picks up her pen and writes one line.
68 D ELIAS [CONT'D] (quieter): What did you just write?
69 D NADIA: "Witness became agitated."
70 D ELIAS: That's not what happened.
71 D NADIA: Then what happened?
72 A ¶ Elias sits.
73 A His hand, still wet, trembles on the table.
74 A He wipes it on his blazer, slowly, and looks at the lane, at the pins he once knocked down on Thursday nights.
75 D ELIAS: I was happy here.
76 D NADIA: Mr. Brandt, that's not responsive.
77 D ELIAS: I know it isn't.
78 A ¶ He lifts his eyes to hers.
79 D ELIAS [CONT'D]: Ask your question again.

### SCENE s00743 | INT. COURTHOUSE ELEVATOR - DAY
Detected names (may be incomplete or contain aliases): NKIRU EZEIGBO, WYATT MERRIWEATHER, TOMASZ KOWAL, JUDGE REYNOSO
1 A ¶ Stainless steel.
2 A Mirrored door.
3 A Four floors of descent.
4 A ¶ NKIRU EZEIGBO, thirties, defence attorney, bangs her briefcase against her knee.
5 A WYATT MERRIWEATHER, forties, prosecutor, studies the floor numbers.
6 A TOMASZ KOWAL, fifties, bailiff, keeps both hands on his belt.
7 A ¶ The car shudders.
8 A Lights flicker.
9 A The elevator stops between floors.
10 D NKIRU: Of course.
11 D WYATT: It does this.
12 D TOMASZ: Fourth time this month.
13 A ¶ Nkiru's cell phone buzzes.
14 A She answers on speaker.
15 D JUDGE REYNOSO [V.O.] (over phone): Counsel. Where are you?
16 D NKIRU: Stuck, Your Honour.
17 D JUDGE REYNOSO [V.O.]: Both of you?
18 D WYATT: Mr. Kowal is with us.
19 D JUDGE REYNOSO [V.O.]: I'm calling the jury. You have ten minutes.
20 D NKIRU: Wyatt, we need to settle.
21 D WYATT: I know.
22 D NKIRU: Then why did you reject my offer?
23 D WYATT: Because you didn't make one.
24 D NKIRU: I'm making one now.
25 D WYATT: I'm making one now.
26 A ¶ Silence.
27 A They glare at each other in the mirror.
28 D TOMASZ: For what it's worth, I'd take it.
29 A ¶ Lights return.
30 A The elevator drops with a lurch.
31 A All three grab the rail.

### SCENE s00194_0 | EXT. MAIL-ORDER WINDMILL RANCH - DAY
Detected names (may be incomplete or contain aliases): MAGGIE, ROSALIND SOTO, COLTON PIKE, BEAU TILLMAN
1 A ¶ Wind pumps clank.
2 A Cattle low.
3 A A porch looks out on a dry creek.
4 A ¶ MAGDALENA "MAGGIE" SOTO, 40s, sits on the porch rail rolling a cigarette.
5 A Her daughter, ROSALIND SOTO, 20s, mends a bridle.
6 A A drifter, COLTON PIKE, 30s, stands at the gate with his hat in his hands.
7 A His horse, a sorry mare, waits behind him.
8 A A young ranch hand, BEAU TILLMAN, 18, stacks hay bales nearby.
9 D COLTON: Ma'am, I heard you're hiring.
10 D MAGGIE: Heard from who?
11 D COLTON: Gas station.
12 D MAGGIE: We don't have a gas station.
13 D COLTON: I made a wrong turn, then.
14 A ¶ Rosalind snorts.
15 A Beau drops a bale on his toe.
16 D BEAU (hopping): Ow!
17 D ROSALIND: Beau.
18 D BEAU: I'm fine.
19 D MAGGIE: Can you ride, Mr. ...?
20 D COLTON: Pike. Colton Pike. I can ride, rope, shoe, fix a windmill.
21 D ROSALIND: Can you cook?
22 D COLTON: Badly.
23 D MAGGIE: We've got a cook.
24 D BEAU: We've got a Rosalind.
25 D ROSALIND: He means me.
26 D MAGGIE: Rosalind, show him the bunkhouse.
27 D COLTON: Thank you, ma'am.
28 A ¶ Rosalind sets the bridle down and heads off.
29 A Colton follows.
30 A Maggie lights her cigarette.
31 D MAGGIE: Beau?
32 D BEAU: Yes, ma'am?
33 D MAGGIE: Wires on the south fence were cut last night. Watch him.
34 D BEAU: The drifter?
35 D MAGGIE: The drifter.
36 A ¶ Beau nods, swallows, and picks up another bale.
37 A Maggie exhales smoke and watches Colton cross the yard, the mare nosing at his shoulder.

### SCENE s01451 | INT. TRANSCONTINENTAL EXPRESS - DINING CAR - NIGHT
Detected names (may be incomplete or contain aliases): HELENA MARCHBANKS, CONRAD ELLIS-WHYTE, OLUWASEUN
1 A ¶ White tablecloths.
2 A Silver on linen.
3 A Brass lamps with fringed shades sway to the rhythm of the rails.
4 A Outside, black prairie slips by.
5 A ¶ HELENA MARCHBANKS (40s, evening gown, diamonds at the throat, gloves she has not removed) sits alone at a table set for two.
6 A A glass of champagne sweats before her.
7 A ¶ CONRAD ELLIS-WHYTE (50s, tuxedo, white carnation, a face of polished walnut) enters from the vestibule.
8 A He pauses.
9 A Tugs his cuffs.
10 A Crosses.
11 A ¶ FITZGERALD "FITZ" OLUWASEUN (20s, porter's uniform, tray balanced on one palm) sets down a plate of oysters, glances at both of them, and withdraws toward the pantry door, listening.
12 D CONRAD: You're early.
13 D HELENA: You're late.
14 D CONRAD: I was detained.
15 D HELENA: By whom?
16 A ¶ He takes the chair across from her.
17 A Smooths the napkin over his knee.
18 D CONRAD: By nobody. By the bar. By myself.
19 D HELENA: That's three.
20 D CONRAD: That's honest.
21 A ¶ She lifts her glass.
22 A Does not drink.
23 A Sets it down.
24 D HELENA: I got your telegram.
25 D CONRAD: Ah.
26 D HELENA: It said "Meet me in the dining car, we need to talk."
27 D CONRAD: It did.
28 D HELENA: It did not say about what.
29 D CONRAD: I thought you'd know.
30 D HELENA: I suspected.
31 A ¶ Fitz shifts by the pantry door.
32 A A tray rattles.
33 A Both look at him.
34 A He smiles brightly, bows, vanishes.
35 D CONRAD: Is that boy listening?
36 D HELENA: Everyone listens on a train. It's a very small town.
37 A ¶ Conrad leans in.
38 A Lowers his voice.
39 D CONRAD: The Havilland papers. You gave them to the Senator.
40 D HELENA: I did.
41 D CONRAD: Without telling me.
42 D HELENA: I told you in the telegram I sent first. You never answered.
43 D CONRAD: I assumed it was a joke.
44 D HELENA: I assumed you read your mail.
45 A ¶ He slaps the table.
46 A Silverware leaps.
47 A The oysters shiver in their ice.
48 A Helena doesn't blink.
49 D CONRAD: Do you realize what you have done?
50 D HELENA: I have kept a promise, Conrad. It's unfamiliar to you.
51 D CONRAD: Forty years. Forty years of this firm, and you hand it to a politician over a cup of coffee.
52 D HELENA: Over a lunch.
53 D CONRAD: Oh, a lunch! That makes it civil.
54 D HELENA: It was a good lunch.
55 A ¶ He rises.
56 A She does not.
57 A The car lurches around a curve; a glass slides, drops, shatters.
58 A Fitz appears with a brush and a dustpan, sweeps without a word, and retreats.
59 A ¶ Conrad sits down again, heavily.
60 A Reaches for her hand.
61 A She lets him.
62 D CONRAD [CONT'D]: You were always the smarter one.
63 D HELENA: I know.
64 D CONRAD: I resent it.
65 D HELENA: I know that too.
66 D CONRAD: What now?
67 D HELENA: Eat your oysters. They're getting warm.
68 A ¶ He laughs, once, a surprised bark.
69 A Picks up a fork.
70 A The train howls into the dark.

### SCENE s01160 | INT. OBSERVATORY - DOME ROOM - NIGHT
Detected names (may be incomplete or contain aliases): PROFESSOR ELLWOOD, VELMA
1 A ¶ A round chamber of brass and iron.
2 A A huge telescope tilts toward a slit in the dome.
3 A Charts pinned to the walls.
4 A A cold teapot on a drafting table.
5 A ¶ PROFESSOR ELLWOOD (60s, cardigan, ink-stained fingers) bends over a ledger, writing in small, careful figures.
6 A He hums.
7 A ¶ The floor creaks on the stair.
8 A He doesn't look up.
9 D ELLWOOD: Third night running.
10 A ¶ Nobody answers.
11 A He turns a page.
12 D ELLWOOD [CONT'D]: You needn't hover. If you've come about the missing plates, they're in the cabinet.
13 A ¶ A hand appears on the railing.
14 A VELMA (30s, long coat, a thin leather satchel, hair damp from the rain) steps into the lamplight.
15 D VELMA: Professor Ellwood?
16 D ELLWOOD: That depends on who's asking.
17 D VELMA: Velma Tran. From the Royal Society.
18 D ELLWOOD: Ah.
19 A ¶ He caps his pen.
20 A Rises.
21 A Smooths his cardigan.
22 D ELLWOOD [CONT'D]: You're early.
23 D VELMA: You were expecting me?
24 D ELLWOOD: I was expecting someone. They always send a young person to deliver bad news.
25 D VELMA: I'm not here to deliver bad news.
26 D ELLWOOD: No?
27 D VELMA: I'm here about the comet.
28 A ¶ Ellwood pauses.
29 A He crosses to the telescope and runs a hand along its brass flank.
30 D ELLWOOD: Which comet?
31 D VELMA: The one you didn't report.
32 D ELLWOOD: I report everything.
33 D VELMA: Not this one.
34 A ¶ She opens the satchel and lays three photographic plates on the drafting table beside the teapot.
35 A Ellwood doesn't look at them.
36 D ELLWOOD: Those plates were stolen.
37 D VELMA: They were mailed to us anonymously.
38 D ELLWOOD: By whom?
39 D VELMA: We were hoping you could tell us.
40 A ¶ Ellwood chuckles softly and sits on the edge of the table.
41 D ELLWOOD: Miss Tran, I have been observing this sky for forty years. I have discovered two comets, one nova, and a rather embarrassing asteroid that turned out to be a pigeon.
42 D VELMA: That's a long career.
43 D ELLWOOD: It has been a quiet one.
44 D VELMA: Until August.
45 D ELLWOOD: Until August.
46 A ¶ He picks up the nearest plate and holds it to the lamp.
47 A A tiny streak crosses the black field.
48 D ELLWOOD [CONT'D]: It was moving the wrong way.
49 D VELMA: Yes.
50 D ELLWOOD: Against everything we know about orbits.
51 D VELMA: Yes.
52 D ELLWOOD: So I assumed my instruments were broken.
53 D VELMA: Were they?
54 D ELLWOOD: No.
55 A ¶ He places the plate down.
56 A Looks at her for a long time.
57 D ELLWOOD [CONT'D]: Would you like tea?
58 D VELMA: Is it hot?
59 D ELLWOOD: It is not. But it is traditional.
60 A ¶ Velma laughs, a short surprised sound.
61 A She takes off her damp coat and sets it on the chair.
62 D VELMA: Yes, Professor. I would.

### SCENE s01612 | INT. SCHOOL BUS - EARLY MORNING
Detected names (may be incomplete or contain aliases): CASSIUS WORTHINGTON, LORRAINE PEAKE, WINNIE ABARA, DISPATCH
1 A ¶ Empty seats, green vinyl, window glass fogged with breath.
2 A The engine idles.
3 A Rain runs down the glass.
4 A ¶ CASSIUS WORTHINGTON (17, backpack, a skateboard on his lap) sits alone in the back row.
5 A He stares at his phone.
6 A A text from "Mom": "Don't forget your lunch."
7 A ¶ He thumbs a reply: "Got it."
8 A Sends.
9 A ¶ The bus driver, MS. LORRAINE PEAKE (60s, sweater, thermos), watches him in the rearview mirror.
10 D LORRAINE: You're early.
11 D CASSIUS: Couldn't sleep.
12 D LORRAINE: Big day?
13 D CASSIUS: Exam.
14 D LORRAINE: You study?
15 D CASSIUS: Some.
16 D LORRAINE: That's the best anyone can do.
17 A ¶ She pulls a lever.
18 A The door hisses open.
19 A A girl climbs aboard: WINNIE ABARA (16, braids, headphones).
20 A She nods at Lorraine, then spots Cassius and slows.
21 D WINNIE: Is anyone sitting here?
22 D CASSIUS: No.
23 A ¶ She slides in across the aisle.
24 A He turns toward the window.
25 A She pulls out a notebook.
26 A ¶ The bus lurches forward.
27 A The radio on Lorraine's dash crackles.
28 D DISPATCH [V.O.] (over radio): Bus forty-two, status?
29 D LORRAINE (into mic): En route. Two on board.
30 D DISPATCH [V.O.]: Reminder: the Hendricks Street bridge is closed. Take Birch.
31 D LORRAINE: Copy.
32 A ¶ Winnie leans over.
33 D WINNIE: You have the Calc exam too?
34 D CASSIUS: Yeah.
35 D WINNIE: I'm terrified.
36 D CASSIUS: Me too.
37 A ¶ She laughs, short and relieved.
38 A He grins.
39 A For a moment neither speaks, and the rain drums on the roof.
40 D WINNIE: Do you want to quiz each other?
41 D CASSIUS: Sure.
42 A ¶ She flips her notebook open.
43 A He sets his skateboard on the floor.
44 D WINNIE: Derivative of sine x?
45 D CASSIUS: Cosine x.
46 D WINNIE: Integral of one over x?
47 D CASSIUS: Natural log of absolute x.
48 D WINNIE (impressed): Okay, you studied more than "some."
49 D CASSIUS: Don't tell anyone.
50 A ¶ Lorraine, in the mirror, smiles.

### SCENE s02092 | EXT. GASLIT ALLEY - LONDON - NIGHT (1881)
Detected names (may be incomplete or contain aliases): TOBY ASHWORTH, FINNEGAN, CONSTABLE QUILL
1 A ¶ Fog swallows the lamps.
2 A Wet cobbles.
3 A Somewhere a dog howls.
4 A ¶ TOBY ASHWORTH, 12, a lamplighter's boy, balances on a ladder against a post, poking his long pole at a stubborn flame.
5 A MRS. FINNEGAN, 60s, a flower seller with a basket, hurries past, head down.
6 A Neither sees the third figure until it steps out of the fog: CONSTABLE QUILL, 30s, in a caped coat, whistle between his teeth.
7 D QUILL: You there. Boy.
8 A ¶ Toby fumbles.
9 A The pole slips.
10 A The lamp blazes and the three of them are suddenly lit, a tableau.
11 A Mrs. Finnegan stops.
12 A Quill stops.
13 A Toby holds the ladder with both hands.
14 D QUILL [CONT'D]: Have you seen a woman in a green shawl?
15 D TOBY (too quickly): No, sir.
16 A ¶ Mrs. Finnegan's basket tips.
17 A Violets spill.
18 A She and Toby both lunge for them, and Quill grabs her arm.
19 A The ladder tilts.
20 A Toby clings to the post and kicks free.
21 A The constable's whistle falls from his teeth.
22 A A green shawl peeks out from under the flowers.
23 D MRS. FINNEGAN (a whisper): Run.
24 A ¶ Toby drops from the ladder and bolts.
25 A Mrs. Finnegan hurls her basket at the constable.
26 A Violets fly.
27 A Quill stumbles back.
28 A All three vanish into the fog in three directions.

### SCENE s02308 | INT. ABANDONED NURSERY SCHOOL, CLASSROOM - NIGHT
Detected names (may be incomplete or contain aliases): OFFICER DWIGHT MALLORY, OFFICER SANDRA PELL, TAYLOR REEVES, MISS MARIGOLD
1 A ¶ Tiny chairs.
2 A A rocking horse with no eyes.
3 A Peeling alphabet posters in the moonlight.
4 A A music box plays three notes and stops.
5 A ¶ OFFICER DWIGHT MALLORY, forties, flashlight in hand, nudges open the door with his boot.
6 A His partner OFFICER SANDRA PELL, thirties, follows, gun low.
7 A A teenage urban explorer, TAYLOR REEVES, seventeen, trails behind with a camera, whispering.
8 A And at the back wall, so still she could be a coat on a hook, stands a girl in a yellow dress, MISS MARIGOLD, her face turned to the corner.
9 D MALLORY: Police. Anyone in here?
10 D PELL: Quiet. Listen.
11 D TAYLOR: It's just the wind, right?
12 A ¶ The music box plays again.
13 A Pell sweeps her light.
14 A Mallory crouches by the rocking horse and puts a hand on its empty socket.
15 A Taylor lifts the camera, the red light blinks, and the flashlight beam crosses the yellow dress.
16 D PELL: Dwight.
17 D MALLORY: I see her.
18 D TAYLOR: Is that, is she a kid?
19 A ¶ The girl turns.
20 A Her face is smooth and pale as a plate.
21 A She lifts one hand to her mouth, and the music box plays its three notes again.
22 D MARIGOLD (sweetly): Nap time.

### SCENE s01648 | INT. CHEESE CAVE - NIGHT
Detected names (may be incomplete or contain aliases): ZOFIA LAWNICZAK
1 A ¶ A cold limestone tunnel lined with racks of wheeled cheese.
2 A Condensation drips.
3 A A single bulb.
4 A Behind a rack, a ventilation grate half-pried loose.
5 A ¶ ZOFIA LAWNICZAK, 30s, black clothes, headlamp, crouches at the grate with a screwdriver.
6 A A dark rectangle of vault door gleams behind it.
7 A ¶ She sets down the screwdriver.
8 A Pulls a small recorder from her pocket.
9 A Presses play.
10 D ZOFIA [V.O.] (recording, her own voice): Zofia, if you're hearing this, the guard rotates at two. The grate is the third rack from the end. Do not use the main door.
11 A ¶ She clicks it off.
12 A Frowns.
13 A Looks at the rack.
14 A Counts.
15 D ZOFIA (muttering): One. Two. Three.
16 A ¶ She presses play again.
17 D ZOFIA [V.O.] (recording): The vault has a thumbprint scanner. I have the thumb. It is in the Brie.
18 A ¶ Zofia's eyes widen.
19 A She turns to the nearest wheel.
20 A Cuts into it with a pocketknife.
21 A Cheese falls away.
22 A ¶ Inside: a small plastic bag.
23 A Inside the bag, a rubber thumb.
24 A She holds it up in the beam of her headlamp.
25 D ZOFIA [CONT'D] (whispering): You are insane.
26 A ¶ She presses play a third time.
27 D ZOFIA [V.O.] (recording): Yes. Now hurry. Somewhere above you, he is awake.
28 A ¶ Zofia freezes.
29 A Overhead, a footstep, then another.
30 A A beam of light sweeps the tunnel.
31 A ¶ She switches off her headlamp.
32 A Everything goes black.
33 D ZOFIA (barely audible): Fine. Fine.
34 A ¶ She presses the thumb against the scanner.
35 A Click.
36 A The vault door sighs open.

### SCENE s00885 | EXT. JUNKYARD - BURNED-OUT SCHOOL BUS CLUBHOUSE - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): TEDDY LOWELL, PEDRO SALAZAR, RUTHIE KWAN, DANNY FITZGERALD
1 A ¶ Summer, 1974.
2 A Heat shimmers over a hill of stripped sedans.
3 A Inside the long skeleton of a yellow bus, someone has laid down carpet scraps, strung Christmas lights, and nailed a Beatles poster to the ceiling.
4 A The seats have been pulled out and replaced with milk crates.
5 A ¶ TEDDY LOWELL, 15, a girl with scabbed knees and a pencil behind her ear, sprawls on a crate with a notebook in her lap.
6 A PEDRO SALAZAR, 16, lean and quiet, tinkers with a transistor radio.
7 A RUTHIE KWAN, 14, perched on the driver's seat, spins the big steering wheel with one finger.
8 A DANNY FITZGERALD, 17, the oldest, leans in the doorway, thumbs hooked in his belt loops, a pack of cigarettes just visible in his sock.
9 A ¶ The radio crackles and settles on a pop song.
10 A They all pause to listen.
11 D TEDDY: Okay. Official meeting of the Wheel Club. Everybody sit.
12 D RUTHIE: I'm already sitting.
13 D TEDDY: Everybody who isn't Ruthie, sit.
14 D DANNY: I'll stand.
15 D TEDDY: You always stand.
16 D DANNY: That's why I'm taller.
17 D PEDRO: It's because he can't fit on the crates.
18 D DANNY: Say that again.
19 D PEDRO: You can't fit on the crates.
20 A ¶ Danny laughs and ruffles his hair.
21 A Pedro ducks, grinning.
22 D TEDDY: Item one. The summer plan.
23 D RUTHIE: We have a plan?
24 D TEDDY: We have a list.
25 D RUTHIE: Read it.
26 D TEDDY: One. Paint the bus. Two. Get the radio working. Three. Finish the map of the junkyard so nobody gets lost. Four. Never tell anyone about the bus.
27 D PEDRO: Five. Eat.
28 D TEDDY: Five. Eat.
29 D DANNY: Six. Don't get arrested.
30 D TEDDY: That one's implied.
31 D RUTHIE: What about the thing in the back?
32 A ¶ The room goes quiet.
33 A The radio hisses between stations.
34 A Danny glances at the door.
35 A Pedro puts down his screwdriver.
36 D TEDDY: Which thing?
37 D RUTHIE: You know which thing.
38 D TEDDY: We said we weren't going to talk about it.
39 D RUTHIE: You said. I didn't say.
40 D PEDRO: Ruthie.
41 D RUTHIE: It's been there since June. Someone has to say it.
42 D DANNY: It's a trunk. It's an old trunk.
43 D RUTHIE: It has a lock.
44 D DANNY: Lots of trunks have locks.
45 D RUTHIE: It has a lock and it's NEW.
46 D PEDRO: Who put a new lock on an old trunk?
47 A ¶ Nobody answers.
48 A Teddy closes her notebook with a small, careful click.
49 A She looks around the bus as if seeing it for the first time, her eyes catching on each face before settling on Danny.
50 D TEDDY: Danny.
51 D DANNY: What?
52 D TEDDY: You've been here more than anyone.
53 D DANNY: It's my brother's yard. I'm supposed to be here.
54 D TEDDY: Is the trunk yours?
55 D DANNY: No.
56 D TEDDY: Is it your brother's?
57 D DANNY: Teddy.
58 D TEDDY: Is it?
59 D DANNY: I don't know what's in it.
60 D TEDDY: That isn't what I asked.
61 A ¶ He crosses the bus in three long strides and drops to a crouch beside the trunk, his back to them.
62 A His hand rests on the lock.
63 A Pedro stands.
64 A Ruthie slides down from the driver's seat.
65 A For a moment nobody breathes.
66 D DANNY (not turning): He asked me to keep it safe. That's all he said. Keep it safe, don't open it, don't tell anyone.
67 D TEDDY: And you told us.
68 D DANNY: I didn't tell you. You found out.
69 D TEDDY: Because you left the key where Ruthie could find it.
70 D DANNY: I never did.
71 D RUTHIE (very small): It was under the radio.
72 A ¶ He turns, finally.
73 A His face, that easy older-brother face, has gone grey as the road.
74 A He looks at Ruthie, at the key in her palm, at the three of them standing close together in the strung-up lights.
75 D DANNY: Give me the key.
76 D RUTHIE: No.
77 D DANNY: Ruthie--
78 D RUTHIE: We're the Wheel Club. We decide together.
79 D PEDRO (quietly): She's right.
80 D TEDDY: Open it, Ruthie.
81 A ¶ Ruthie steps forward, fits the key, turns it.
82 A The lock pops.
83 A The lid swings up on rusted hinges and a hush falls over the bus as the afternoon light finds what is inside: not money, not guns, not anything they imagined, but row upon row of school photographs, hundreds of them, each of a child they know from town, each with a name written on the back in careful pencil, and on top, a single Polaroid of the four of them, taken that very morning, through the bus window, from outside.

### SCENE s00236 | INT. SMALL-TOWN PET FUNERAL PARLOR - DAY
Detected names (may be incomplete or contain aliases): BEA, LANGSTROM-OYELEYE, GERRY, POTTS, HECTOR MWENDA-ABERNATHY, DENNIS
1 A ¶ Pastel walls.
2 A Little urns on velvet shelves.
3 A A framed poster: "Every Goodbye Deserves Dignity."
4 A ¶ BEATRIX "BEA" LANGSTROM-OYELEYE (40s, funeral director, black pencil skirt, too-bright lipstick) stands at a small oak lectern with a sleeping ferret in a tiny casket beside her.
5 A ¶ Seated in the front row, in folding chairs: GERALDINE "GERRY" POTTS (60s, widowed, tissue in fist) and her brother-in-law HECTOR MWENDA-ABERNATHY (60s, loud tie, sunglasses on indoors).
6 D BEA: Friends. We are gathered to honor Nibbles.
7 D GERRY (weeping): Oh, Nibbles.
8 D HECTOR: He was a good ferret.
9 D BEA: He was.
10 D HECTOR: Smelled like a gym bag.
11 D GERRY: Hector!
12 D HECTOR: I'm saying it with love.
13 D BEA: Perhaps we could hold the anecdotes until the reception.
14 D HECTOR: I'm just saying he bit the mailman.
15 D GERRY: He bit the mailman once.
16 D HECTOR: Four times.
17 D GERRY: Twice.
18 D HECTOR: Four. I counted.
19 D BEA (over them): Let us bow our heads.
20 A ¶ They do.
21 A A pause.
22 A A phone rings, tinny, from Hector's pocket.
23 D HECTOR (answering): Not now, Dennis.
24 D DENNIS [O.S.] (through the phone, blaring): Hector, did you tell her about the hamster?
25 D GERRY: What hamster?
26 D HECTOR: Dennis, I'm at a funeral!
27 D DENNIS [O.S.]: Whose?
28 D BEA: Nibbles's.
29 D DENNIS [O.S.]: Oh no. He was a good ferret!
30 D HECTOR: That's what I said!
31 D GERRY: Hector, what hamster?
32 D HECTOR: Nothing! A rumor!
33 D BEA: Ladies, gentlemen, caller, please--
34 A ¶ The casket lid pops open.
35 A Nibbles sits up, yawns, stretches.
36 A ¶ Silence in every key.
37 D GERRY: He's alive.
38 D HECTOR: He was asleep.
39 D BEA (holding the lectern): It happens.
40 D DENNIS [O.S.]: What happens? Did he come back?
41 A ¶ Hector hangs up.
42 A Gerry scoops the ferret into her arms and sobs with joy.
43 D GERRY: My boy! My Nibbles!
44 D BEA (recovering): I'll prepare a refund.
45 D HECTOR: Keep the flowers.
46 A ¶ Nibbles bites Bea.
47 A She yelps.
48 A Hector nods, satisfied.
49 D HECTOR [CONT'D]: Four times.

### SCENE s01544_1 | INT. OBSERVATORY STAIRWELL - CONTINUOUS
Detected names (may be incomplete or contain aliases): NESTOR, CASS, COLETTE
1 A ¶ Concrete spiral.
2 A Dust.
3 A A single bulb swinging.
4 A ¶ Colette leads, Cass behind, Nestor between.
5 A Their footsteps ring.
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
16 A Padlock.
17 A She raises the pistol, finds the slide locked back, curses, and swings it like a hammer.
18 A The lock breaks.
19 A ¶ The door opens on a black room.
20 A Somewhere a relay clicks.
21 D COLETTE [CONT'D]: Lights?
22 D NESTOR: Third switch.
23 A ¶ Cass finds it.
24 A Fluorescent tubes flicker alive.
25 A A rack of ancient radio gear, a desk, a chair.
26 A And on the desk, a single working microphone.
27 D NESTOR [CONT'D] (whispering): There she is.
28 A ¶ Cass plugs in the drive.
29 A Nestor sits and leans toward the microphone.
30 A Colette and Cass stand on either side of him, silent, hands on his shoulders.
31 D NESTOR [CONT'D] (into the microphone): This is Nestor Pellegrini-Oyelowo, calling anyone. Anyone at all.
32 A ¶ Static.
33 A A long beat of hiss.
34 A Then, faint, from far away, a voice rises from the speaker.
35 A ¶ Colette closes her eyes.
36 A Cass lets out a breath he has been holding since the car.

### SCENE s01694 | EXT. HOLLOW OAK GLADE - TWILIGHT
Detected names (may be incomplete or contain aliases): WITCH, SIBYLLE ORMONDE, FINNEGAN BRAE
1 A ¶ An oak older than the kingdom, hollowed by lightning and furred with moss.
2 A Fireflies drift between roots as thick as cottages.
3 A The sky is violet, and the first stars hang low, like lanterns on unseen strings.
4 A ¶ An old WITCH, SIBYLLE ORMONDE (70s), sits on a stump.
5 A Her cloak is the color of crow feathers.
6 A She stirs a small iron pot hung from a tripod, and the smoke rises in spirals that briefly resemble faces.
7 A Before her stands a boy, FINNEGAN BRAE (12), barefoot, gripping a lantern with both hands.
8 A ¶ She does not look up.
9 A He clears his throat.
10 D FINNEGAN: I came for the cure.
11 D SIBYLLE: Did you.
12 A ¶ She dips a wooden spoon and tastes.
13 A Her mouth puckers.
14 A She lets him wait.
15 D FINNEGAN: My sister has a fever. The healers said you could help.
16 D SIBYLLE: The healers say a great many things.
17 A ¶ She sets the spoon aside, rises with a creak of old bones, and circles him slowly, as one circles a horse at market.
18 D SIBYLLE [CONT'D]: What have you brought?
19 D FINNEGAN: Silver. Three coins.
20 D SIBYLLE: Silver is for fools. What else?
21 A ¶ He hesitates.
22 A His fingers tighten on the lantern.
23 A Then he reaches into his tunic and draws out a small bone whistle, yellowed with age.
24 D FINNEGAN: My father's.
25 A ¶ Her eyes sharpen.
26 A She plucks it from his palm and turns it in the firelight.
27 A For a long moment, she says nothing, and the fireflies pause in the air.
28 D SIBYLLE: Where did you get this?
29 D FINNEGAN: He left it. When he went to the war.
30 D SIBYLLE: And did he return?
31 A ¶ He shakes his head.
32 A She presses the whistle back into his hand and folds his fingers over it.
33 D SIBYLLE [CONT'D]: Keep it. A cure costs less than you fear.
34 A ¶ She ladles the dark brew into a clay vial, stoppers it with wax, and presses it into his other palm.
35 A He stares at it, then at her, and bows his head.
36 D FINNEGAN: Thank you.
37 D SIBYLLE: Go home. Before the moon is full.
38 A ¶ He turns and runs.
39 A The lantern bobs between the roots and fades.
40 A She watches until the last glimmer is gone, then lowers herself onto the stump and picks up the whistle's twin from her own pocket, and holds the two together.

### SCENE s02376 | INT. MINIVAN - AUTOMATIC CAR WASH - DAY
Detected names (may be incomplete or contain aliases): ADAEZE OBI, GREG OBI, TEENAGER, SAMIR
1 A ¶ Dark.
2 A Brushes thump the roof.
3 A Soap slides down the glass.
4 A ¶ ADAEZE OBI, forties, grips the wheel.
5 A Eyes ahead.
6 A Her husband GREG OBI, forties, in the passenger seat, scrolls his phone.
7 A In the back, a TEENAGER in a hoodie stares at the ceiling.
8 D GREG: Two days. That's all I'm saying.
9 D ADAEZE: You've said it four times.
10 D GREG: Because nobody answers.
11 A ¶ The brush hits the windshield.
12 A Foam.
13 A Roar.
14 D ADAEZE: He's right here. Ask him.
15 D GREG: I'm asking you.
16 A ¶ The teenager pulls out an earbud.
17 D TEENAGER: I'm not going.
18 D GREG: Nobody asked you.
19 D TEENAGER: You literally just did.
20 D ADAEZE: Don't talk to your father like that.
21 D TEENAGER: Like what? Like I have an opinion?
22 A ¶ Greg turns in his seat.
23 A Adaeze's knuckles whiten.
24 D GREG: Samir. Look at me.
25 D SAMIR: No.
26 D GREG: Samir.
27 D SAMIR: You're not even driving!
28 A ¶ The rollers shriek.
29 A The van lurches.
30 A Adaeze slams the brake and the car wash stalls with a groan.
31 A Water drips.
32 A No one speaks.
33 D ADAEZE (low): Both of you. Out. Now.
34 A ¶ She unbuckles.
35 A Opens her door.
36 A Steps into the foam.

### SCENE s01683 | INT. FLOODED PARKING GARAGE - NIGHT
Detected names (may be incomplete or contain aliases): LUCKY, ROSSETTI, NATE, OBI, DETECTIVE MARISOL VEGA, SILAS PRINGLE
1 A ¶ Six inches of black water cover the concrete.
2 A A broken sign sparks overhead.
3 A Pillars throw long shadows.
4 A Somewhere, a pump coughs.
5 A ¶ LUCIANA "LUCKY" ROSSETTI (30s, wet leather jacket, nervous grin) wades toward a gray sedan, a duffel bag on her shoulder.
6 A At the car, her partner NATHANIEL "NATE" OBI (40s, calm, wire-rimmed glasses) checks the trunk.
7 D LUCKY: Tell me it's all there.
8 D NATE: Count it yourself.
9 D LUCKY: I trust you.
10 D NATE: You shouldn't.
11 A ¶ She drops the bag in the trunk.
12 A He slams it shut.
13 A Headlights sweep across the pillars.
14 D LUCKY: Who's that?
15 D NATE: Nobody.
16 D LUCKY: Nate. Who is that?
17 A ¶ A black van rolls to a stop.
18 A The door slides open.
19 A DETECTIVE MARISOL VEGA (40s, rain slicker, badge on her belt) steps out into the water, weapon drawn.
20 D MARISOL: Hands where I can see them! Both of you!
21 D LUCKY: Marisol, wait, I can explain --
22 D NATE: Don't say a word, Lucky.
23 D MARISOL: Away from the car, Nathaniel!
24 D NATE: It's Nate.
25 D MARISOL: I don't care what it is!
26 A ¶ SILAS PRINGLE (60s, garage attendant in a yellow poncho) peers around a pillar, flashlight shaking.
27 D SILAS: Folks? We're closed. Folks?
28 A ¶ Lucky lunges for the trunk; Nate grabs her wrist; Marisol fires a warning shot that rings off the ceiling.
29 A All three freeze, and the water ripples outward from their feet.
30 D LUCKY: You said she wasn't coming.
31 D NATE: I said she wasn't supposed to.
32 D MARISOL: Last chance. Step away.
33 A ¶ Nate lets go of Lucky.
34 A She sprints for the stairwell; Marisol swings the gun toward her, then back at Nate.
35 A He lifts his hands slowly.
36 D NATE [CONT'D] (quiet): You were always better at this than me.
37 D MARISOL: Don't flatter me. Where's she going?
38 D NATE: Up.
39 A ¶ Marisol lowers her gun an inch.
40 A Then raises it again.
41 A Footsteps splash away into the dark.

### SCENE s01500 | INT. COUNTY COURTHOUSE - SUPPLY CLOSET TURNED INTERVIEW ROOM - DAY
Detected names (may be incomplete or contain aliases): PUBLIC DEFENDER NOREEN ASANTE-WHITFIELD, ELLIS PORTILLO-ADEBAYO, DESMOND KORKMAZ-LIU, ^NOREEN
1 A ¶ A narrow room, mop buckets pushed to one side.
2 A A card table.
3 A Three folding chairs.
4 A A single window painted shut.
5 A ¶ PUBLIC DEFENDER NOREEN ASANTE-WHITFIELD (40s) sits with a file open.
6 A Across from her, the prosecutor ELLIS PORTILLO-ADEBAYO (40s) pushes a paper across the table.
7 A Between them, in the third chair, their juror-turned-witness DESMOND KORKMAZ-LIU (30s) grips the seat edge.
8 A ¶ Noreen slides the paper back.
9 D NOREEN: No.
10 D ELLIS: You haven't read it.
11 D NOREEN: I've read it.
12 D ELLIS: It's a good offer.
13 D NOREEN: It's a bad one.
14 A ¶ Ellis taps the paper.
15 A She pushes back.
16 A He lets her.
17 D ELLIS: Mr. Korkmaz-Liu, you understand why we're here?
18 D DESMOND: I was juror number six.
19 D NOREEN: You were.
20 D ELLIS: You spoke to the defendant's sister during recess.
21 D DESMOND: She spoke to me.
22 D NOREEN (to Desmond): What did she say?
23 D DESMOND: She said her brother didn't do it.
24 D ELLIS: That's inadmissible.
25 D ^NOREEN: That's inadmissible.
26 A ¶ They glare at each other.
27 A Desmond looks from one to the other.
28 D ELLIS: I didn't mean...
29 D NOREEN: Neither did I.
30 A ¶ They both lean back.
31 A The folding chairs creak.
32 A Noreen closes the file.
33 A Ellis straightens the offer.
34 A Desmond lets go of his seat.
35 A The three of them sit in silence, waiting for someone to move first.
36 D ELLIS: Mr. Korkmaz-Liu, thank you for your honesty. You may go.
37 D DESMOND: That's it?
38 D NOREEN: That's it.
39 A ¶ Desmond stands, bumps a mop bucket, and flees.
40 A Ellis and Noreen watch the door swing shut.
41 D ELLIS: Offer stands till five.
42 D NOREEN: I'll see you in court.

### SCENE s01888 | INT. MARS COLONY MESS TENT - EVENING
Detected names (may be incomplete or contain aliases): CAPTAIN BRYONY ASHWORTH, ENGINEER TAVITA FETU, BOTANIST LAILA NASSIR
1 A ¶ Plastic tables.
2 A Sand drifting under the flap.
3 A A lamp swings from the ridgepole.
4 A ¶ CAPTAIN BRYONY ASHWORTH (40s, sunburnt) deals protein bars out of a crate like cards.
5 A ENGINEER TAVITA FETU (30s, broad) leans against the pole.
6 A BOTANIST LAILA NASSIR (30s, thin, notes) writes in a ledger.
7 D ASHWORTH: Two each. Tavita, you have three coming.
8 D TAVITA: I'll take two.
9 D ASHWORTH: You'll take three. You haul the panels.
10 D TAVITA: Others haul too.
11 D LAILA (not looking up): Everyone hauls. It's tent rules.
12 D ASHWORTH: It's my rule. I'm Captain.
13 D LAILA: Then Captain, the ledger says we have eleven days of rations left.
14 A ¶ Bryony stops dealing.
15 A Tavita pushes off the pole.
16 D TAVITA: You said twenty.
17 D LAILA: Twenty was the count before the dust storm took crate six.
18 D ASHWORTH: Crate six was mine.
19 D LAILA: I noticed.
20 D ASHWORTH: Say what you mean.
21 D LAILA: I mean you dealt me two bars and kept five.
22 A ¶ Ashworth looks at the bars in her hand.
23 A She does not deny it.
24 D TAVITA: Bry.
25 D ASHWORTH: They're not for me.
26 D LAILA: Then who?
27 A ¶ Tavita steps in and takes the crate.
28 A Laila stands.
29 A Ashworth grabs the crate's other handle.
30 A They all pull, and the crate tips, bars scattering across the sand-dusted floor.
31 A ¶ They freeze.
32 A Nobody bends to gather them.
33 D ASHWORTH [CONT'D] (quietly): They're for Tavita's kid. Back on the Hab. The ration cut starts Monday.
34 A ¶ Tavita lets go.

### SCENE s00981 | INT. DRIVE-IN PROJECTION BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): RAFAELA, JUNE, KOWALCZYK
1 A ¶ A cramped brick box.
2 A An old carbon-arc projector clatters.
3 A Film cans stacked like pizza boxes.
4 A Through the slit window, a giant screen glows over an empty lot.
5 A ¶ RAFAELA (17, denim jacket, a lighter in her fist) sits on the stool.
6 A JUNE (17, cardigan, hair pinned back) stands at the door.
7 A Both are tense.
8 D JUNE: You told me it was just a smoke.
9 D RAFAELA: It is just a smoke.
10 A ¶ She flicks the lighter.
11 A A small flame.
12 A She stares at it, then at the stacked cans.
13 D JUNE: That's nitrate film, Rafaela.
14 D RAFAELA: I know.
15 D JUNE: It burns like gasoline.
16 A ¶ She clicks the lighter shut.
17 A Too late.
18 A A can on the shelf flares with a quiet whump.
19 D JUNE [CONT'D]: Oh my God.
20 A ¶ Smoke blooms.
21 A She grabs a blanket and smothers it.
22 A Rafaela stamps.
23 A They cough, eyes wide, bodies bent.
24 A ¶ The door swings open.
25 A MR. KOWALCZYK (60s, suspenders, a flashlight) stands there.
26 A Smoke curls around his head.
27 D MR. KOWALCZYK: Which one of you is on fire?
28 D RAFAELA: Nobody. It's the projector.
29 D MR. KOWALCZYK: The projector is not made of smoke.
30 D JUNE: It was an accident, sir.
31 A ¶ He sniffs.
32 A Looks at the blackened can.
33 A Then at the two of them.
34 A For a long moment, he says nothing.
35 D MR. KOWALCZYK: That was the last reel of "The Birds."
36 D RAFAELA: We're so sorry.
37 D MR. KOWALCZYK: It was a bad print anyway.
38 A ¶ He tosses the flashlight to June.
39 A She catches it.
40 D MR. KOWALCZYK [CONT'D]: Open a window. And never bring fire in here again.
41 A ¶ He leaves.
42 A They stare at each other.
43 A Then they laugh, shaky and helpless, as the screen outside goes dark.

### SCENE s00718 | EXT. MOUNTAIN PASS - SNOWBOUND BUS - DAY
Detected names (may be incomplete or contain aliases): KIT, BERNARD, YARA, LARS, PILAR, RADIO, TOBIAS
1 A ¶ A stalled coach bus lists on a white slope, wheels buried to the axles.
2 A Wind hisses across the frozen glass.
3 A Pines bend under the weight of snow.
4 A ¶ Inside, a dim cabin.
5 A Frost on the windows.
6 A Seven seats cleared in a tight circle near the driver's cab.
7 A ¶ KIT, 40s, a nurse in a puffy coat, rubs a young girl's hands.
8 A BERNARD, 60s, a retired surveyor with a thick gray scarf, studies a folded map.
9 A YARA, 20s, a student with a backpack, shivers in her sleeping bag.
10 A LARS, 50s, the bus driver, in his uniform jacket, works a hand-crank radio.
11 A PILAR, 30s, a mother, holds a thermos of soup between her palms.
12 A They are all gaunt, hollow-eyed, patient.
13 D KIT: Everyone drink something.
14 D BERNARD: We're low on water.
15 D KIT: We have snow.
16 D LARS: Snow takes heat to melt.
17 D YARA: Then we burn something.
18 D BERNARD: We burned the seat covers yesterday.
19 D PILAR (to herself): Hold on, hold on.
20 D LARS (cranking): Come on, you old brute.
21 A ¶ The radio coughs.
22 A A thin, tinny voice breaks through.
23 D RADIO [V.O.] (garbled): -- anyone -- copy --
24 A ¶ Everyone freezes.
25 A Lars twists the dial.
26 D LARS: This is the Valmont Pass bus, number twelve. We're stranded at mile forty. Do you read?
27 D RADIO [V.O.] (garbled): -- stay put -- help -- morning --
28 D LARS: Say again?
29 A ¶ The signal dies.
30 A Lars slumps.
31 A Pilar clutches the thermos.
32 D KIT: Morning. That's something.
33 D YARA: Whose morning?
34 D BERNARD: Don't start.
35 A ¶ Kit pulls her glove off and checks the girl's pulse at the wrist.
36 A The girl, who has not spoken, turns her head toward the door.
37 A ¶ The bus door hisses open.
38 A A gust of snow sweeps in.
39 A A figure stands in the stairwell, bundled in white, a rifle slung over one shoulder: TOBIAS, 40s, a ranger, ice crusted on his beard.
40 D TOBIAS: Got your signal. I'm Tobias. I'm here to get you out.
41 A ¶ Nobody moves.
42 A Then Pilar lets out a sob.
43 A Kit rises.
44 A Bernard folds the map.
45 D LARS: How many of you?
46 D TOBIAS: Just me. Sled's at the bottom. Two trips.
47 D KIT: She goes first.
48 D TOBIAS: Who?
49 D KIT (gesturing): Her. And she goes with her.
50 A ¶ Pilar nods.
51 A She stands, takes the girl's hand, and moves to the door.

### SCENE s00350 | INT. COLLAPSED MINE ELEVATOR CAGE - NIGHT
Detected names (may be incomplete or contain aliases): DEZ, HOLLOWAY, ARCHIE PENHALIGON
1 A ¶ A steel cage wedged in a vertical shaft, tilted twenty degrees, hanging by a single frayed cable.
2 A Pebbles tick down from above.
3 A A dim headlamp illuminates two men and a bucket of water.
4 A ¶ DESMOND "DEZ" HOLLOWAY, forties, a foreman with a broken arm in a makeshift sling, sits against the bars.
5 A ARCHIE PENHALIGON, twenties, a fresh-faced miner with a bleeding scalp, crouches on the opposite side, rope looped round his wrist.
6 D DEZ: Archie, kid, how's your head?
7 D ARCHIE: It's fine, Dez.
8 D DEZ: It's not fine. I can see it from here.
9 D ARCHIE: Then don't look.
10 A ¶ Dez shifts.
11 A The cage groans.
12 A The cable above pings like a plucked string.
13 A Both men go perfectly still.
14 D DEZ: Don't breathe.
15 D ARCHIE: I'm not breathing.
16 D DEZ: Good man.
17 A ¶ They hold.
18 A The cage settles.
19 A Dez lets out a ragged breath.
20 D DEZ [CONT'D]: Okay. Okay. We're okay.
21 D ARCHIE: Dez, how long have we been down here?
22 D DEZ: Nine hours.
23 D ARCHIE: They'd have come by now.
24 D DEZ: They'll come.
25 D ARCHIE: Dez. Nobody's coming.
26 A ¶ Dez does not answer.
27 A He looks at his arm.
28 A He looks at the water bucket.
29 A He looks at Archie.
30 D DEZ: Archie, you're the lightest. If you climb the cable, you can reach the ladder.
31 D ARCHIE: Climb it?
32 D DEZ: It's twenty feet. You've done worse.
33 D ARCHIE: I've never done worse.
34 D DEZ: Archie.
35 D ARCHIE: He'll cut me loose, Dez. The cable. It won't take two.
36 D DEZ: Then it won't take one either. It'll take whatever it takes.
37 A ¶ Archie loops the rope around his waist.
38 A He tests the knot.
39 A His hands shake.
40 D ARCHIE: Hold the rope.
41 D DEZ: I've got you.
42 A ¶ He rises.
43 A Dez wraps the rope around his good arm.
44 A Archie reaches for the cable, grips it, lifts one boot.
45 A The cage swings.
46 D DEZ [CONT'D]: Easy! Easy, kid!
47 D ARCHIE: I'm easy!
48 A ¶ He climbs.
49 A Three feet.
50 A Five.
51 A The cable twangs.
52 A A strand parts, then another, curling like wire hair.
53 A Dez cries out.
54 A Archie stops.
55 D ARCHIE [CONT'D]: Dez, it's going!
56 D DEZ: Keep climbing!
57 D ARCHIE: It's going, Dez!
58 D DEZ: Do not stop, Archie! Do not stop!
59 A ¶ Archie lunges.
60 A His fingers catch a rung.
61 A The cage drops six inches with a scream of metal.
62 A Dez is flung against the bars.
63 A The rope snaps taut on his arm and he roars through his teeth.
64 D DEZ [CONT'D]: Go! Go!
65 A ¶ Archie pulls himself onto the ladder.
66 A He turns, hanging there, breathing like a bellows, and stares down at Dez.
67 D ARCHIE: I'm on, Dez. I'm on!
68 D DEZ (weak laugh): Of course you are.
69 A ¶ The cable parts with a crack like a gunshot.
70 A The cage falls away into the dark and its crash echoes up the shaft, long after it has gone.
71 D ARCHIE (whisper): Dez?
72 A ¶ Nothing.
73 A Then, from impossibly far below, a faint voice.
74 D DEZ [O.S.]: Climb, Archie.

### SCENE s00150 | INT. FUNERAL PARLOR - BACK ROOM SPEAKEASY - NIGHT - 1926
Detected names (may be incomplete or contain aliases): SABINE ARCHAMBAULT, HORACE PELLETIER, TOBY, FINNEGAN, STRANGER, CALLUM
1 A ¶ Behind a velvet curtain: a card table set atop a coffin lid, a bar of embalming-fluid bottles filled with gin, a gramophone low and hissing.
2 A Gaslight.
3 A ¶ Four people.
4 A One empty chair.
5 A ¶ SABINE ARCHAMBAULT, 30s, in beads and a cloche, shuffles.
6 A HORACE PELLETIER, 50s, mortician, apron over a vest.
7 A TOBIAS "TOBY" FINNEGAN, 20s, a cop's son in a borrowed suit.
8 A And a STRANGER, in a grey coat, who sits at the table's far edge and has said nothing.
9 D SABINE: Deal's mine.
10 D HORACE: Deal's the house's.
11 D SABINE: The house is dead, Horace.
12 D HORACE: Not tonight.
13 D TOBY: Can we play?
14 D SABINE: Sit, Toby.
15 A ¶ He sits.
16 A The Stranger doesn't move.
17 D HORACE (to the Stranger): You in?
18 D STRANGER: I'm watching.
19 D HORACE: We don't have spectators.
20 D STRANGER: You do now.
21 A ¶ A beat.
22 A Sabine deals.
23 A He studies his cards.
24 A She studies him.
25 D SABINE: You have a name, friend?
26 D STRANGER: Callum Redfern.
27 D TOBY: Redfern. Like the Redfern Brewery?
28 D CALLUM: Like the Redfern Brewery's heir.
29 D HORACE: Heir to what? They shut down in '19.
30 D CALLUM: To the cellar.
31 A ¶ Horace sets down his cards.
32 A Sabine's eyebrows lift.
33 D SABINE: Callum. Is there beer in the cellar?
34 D CALLUM: Four hundred barrels.
35 D TOBY: Mr. Redfern, can I buy some?
36 D CALLUM: Mr. Finnegan, I can't sell to a policeman's son.
37 A ¶ Toby colors.
38 A Horace laughs.
39 D HORACE: He knows you.
40 D CALLUM: I know everybody. It's my cellar.
41 D SABINE: What do you want, Callum?
42 D CALLUM: Partners.
43 D HORACE: In what?
44 D CALLUM: In the thing after this.
45 A ¶ He lays down his cards.
46 A A straight flush.
47 A Nobody says a word.
48 A The gramophone skips.
49 D TOBY: He wins.
50 D SABINE: He always did.
51 A ¶ Horace pours four glasses from the embalming bottle.
52 A Slides one to each.
53 A Lifts his.
54 D HORACE: To the cellar.

### SCENE s00902 | EXT. SCHOOL ROOFTOP - SUNSET
Detected names (may be incomplete or contain aliases): JAMAL OKONKWO, SUNNY PARK
1 A ¶ Gravel, a rusted vent, a chain-link railing.
2 A The football field glows green below.
3 A ¶ JAMAL OKONKWO, 16, in a band jacket, sits cross-legged by the edge, a trombone case across his knees.
4 A SUNNY PARK, 16, arrives through the stairwell door, drops her backpack, kicks a pebble off the roof, and steps up beside him as the two of them watch it drop, Jamal tapping the case, Sunny pulling her hair into a bun, the pair silent while the marching band warms up below.
5 D SUNNY (to the field): Hey, losers!
6 A ¶ No one hears.
7 A Jamal smiles.
8 D SUNNY [CONT'D]: You're not going to practice?
9 D JAMAL (muttering): Later.
10 D SUNNY: That's what you said Tuesday.
11 D JAMAL: Tuesday was a mess.
12 A ¶ She sits.
13 A Her shoulder bumps his.
14 A He doesn't move away.
15 D SUNNY: Mr. Dalrymple asked about you.
16 D JAMAL: What did you say?
17 D SUNNY: That you're sick.
18 D JAMAL: Am I?
19 D SUNNY: You look sick.
20 A ¶ He grins.
21 A She takes a gum wrapper from her pocket and folds it into a tiny swan.

### SCENE s02429 | EXT. BACKYARD - CHICKEN COOP - AFTERNOON
Detected names (may be incomplete or contain aliases): BEA, THEO LOMBARDI, GRANDPA OSWALDO, PETRAKIS
1 A ¶ A leafy suburban yard in late summer.
2 A A hand-built chicken coop painted lemon yellow, tin-roofed, with a crooked sign: "THE HEN HOUSE."
3 A Paper streamers sag from a clothesline.
4 A A card table holds a half-eaten cake.
5 A ¶ BEATRIX "BEA" LOMBARDI (8, gap-toothed, tiara over frizzy curls) squats in front of the coop, holding a speckled hen in both arms like a baby.
6 A ¶ Her older brother THEO LOMBARDI (12, headphones around his neck, deliberately bored) leans against the fence.
7 A Their mother, JUNE LOMBARDI (40s, apron, flour on her cheek), carries out a tray of lemonade.
8 D JUNE: Bea, put Penelope down. She's not a doll.
9 D BEA: She likes it.
10 D THEO: She's literally about to peck your eye.
11 D BEA: She is not!
12 A ¶ The hen flaps.
13 A Bea squeals and drops her.
14 A Penelope lands in the dirt, ruffles, struts away with great dignity.
15 D JUNE: Theo, be nice. It's her birthday.
16 D THEO: I am nice. I came outside.
17 D JUNE: That's the minimum, honey.
18 A ¶ The gate clicks.
19 A A tall man in a straw hat strides in, a wrapped box under one arm.
20 A GRANDPA OSWALDO (70s, big white mustache, suspenders) beams across the yard.
21 D BEA: Grandpa!
22 D OSWALDO: Where is my birthday girl?
23 D BEA: ^Where is my present?
24 D OSWALDO: Where is my birthday girl?
25 A ¶ The two speak over each other, gleeful, and collapse into laughter.
26 A June sets down the tray and shakes her head.
27 D JUNE: Papa, you're early.
28 D OSWALDO: I brought a surprise. Open it, Bea.
29 A ¶ Bea tears the paper.
30 A Inside, a tiny wooden sign reading "BEA'S COOP."
31 A Her eyes shine.
32 D BEA: Grandpa, it's perfect.
33 D OSWALDO: I carved it myself. Terrible carpenter, but good heart.
34 D THEO (muttering): Great, now we're all going to cry.
35 A ¶ He is already wiping his nose.
36 A ¶ The gate clicks again.
37 A MRS. PETRAKIS (70s, next-door neighbor, enormous sun hat, a pie held out like an offering) shuffles in.
38 D MRS. PETRAKIS: I smelled cake from my kitchen. I brought apple.
39 A ¶ June pulls out her phone to photograph the moment.
40 A The hen returns, pecks at the cake, and nobody stops her.
41 D BEA: Penelope, no! That's for the guests!
42 A ¶ Penelope looks up, frosting on her beak.
43 A Everyone laughs.
44 A The afternoon goes golden.

### SCENE s01954 | INT. VANTAGEPOINT SYNERGIES - OPEN OFFICE - DAY
Detected names (may be incomplete or contain aliases): GORDON PRYCE, VP, SHANICE WHITLOCK, ANIL DESHPANDE, BETTINA KROL, FITZ MORIARTY, MS. OYEWOLE
1 A ¶ A sea of gray cubicles under a banner reading "WE ARE FAMILY."
2 A A dead plant guards the water cooler.
3 A ¶ GORDON PRYCE, 50s, regional VP, stands on a swivel chair with a megaphone, delivering a speech.
4 A SHANICE WHITLOCK, 30s, sits at her desk eating yogurt and not looking up.
5 A ANIL DESHPANDE, 40s, mouthing the words, nods along without hearing them.
6 A BETTINA KROL, 50s, in a cardigan, sorts staples by size.
7 A FITZ MORIARTY, 20s, an intern, takes photos for the company newsletter.
8 D GORDON: Team! I have an announcement!
9 D SHANICE (not looking up): Is it a layoff?
10 D GORDON: It's a realignment.
11 D ANIL: It's a layoff.
12 D GORDON: It is a strategic pivot toward efficiency!
13 A ¶ Bettina picks up the stapler and stacks three boxes in a neat pyramid.
14 A Fitz steps onto a desk for a better angle and loses his balance, then rights himself and fires off a flash straight into Gordon's eyes.
15 A Gordon staggers, flailing the megaphone, and Anil catches his chair as it rolls.
16 D MS. OYEWOLE [V.O.] (over the PA): Mr. Pryce. Corporate would like a word.
17 D GORDON (squinting): Now?
18 D MS. OYEWOLE [V.O.]: Now, Gordon.
19 A ¶ Gordon climbs down, handing the megaphone to Fitz, who points it at Bettina, who points the stapler back at him.
20 A Shanice finally lifts her head, spoon halfway to her mouth.
21 D SHANICE: Is that about us?
22 D MS. OYEWOLE [V.O.]: It's about him.
23 A ¶ Anil bursts into a coughing laugh.
24 A Gordon straightens his tie and walks toward the elevator, shoulders sagging.
25 D BETTINA (softly): Poor Gordon.
26 D SHANICE: He'll be fine.
27 D ANIL: He won't.
28 D FITZ: I got a great shot of it.

### SCENE s02022 | INT. DRIFTING SALT-HARVEST BARGE - AIRLOCK - CONTINUOUS
Detected names (may be incomplete or contain aliases): NADIR SOLOMON, SOLENNE ARQUETTE, BAX, ULLMAN
1 A ¶ Red emergency light.
2 A Frost on the walls.
3 A Pressure alarm pulsing.
4 A ¶ NADIR SOLOMON (40s, pilot) slams the inner hatch.
5 A SOLENNE ARQUETTE (20s, engineer) jams a wrench into the wheel.
6 A BAXTER "BAX" ULLMAN (50s, quartermaster) hauls a crate against the door.
7 D NADIR: It's through the hull--
8 D SOLENNE: Not through, it's--
9 D BAX: Everybody off the wall!
10 D SOLENNE: I need ten seconds--
11 D NADIR: We don't have ten!
12 D BAX: Then make it five!
13 A ¶ The hatch BANGS from outside.
14 A All three leap back, then lunge at the wheel together.
15 D SOLENNE: Hold it!
16 D NADIR: Holding!
17 D BAX: Don't hold it, turn it!
18 D SOLENNE: Turn it left! Left!
19 A ¶ The wheel locks.
20 A The alarm cuts out.
21 A They slide down the wall, breathing hard.
22 D NADIR (quiet): Whatever that was, it knows we're in here.

### SCENE s01725 | INT. CURLING CLUB - SATURDAY MORNING
Detected names (may be incomplete or contain aliases): GRETA HOLMQUIST, BJORN LUND, ILSE NAKAMURA, STRANGER, FELIX
1 A ¶ Empty sheet of ice.
2 A Rocks lined up like sleeping animals.
3 A A scoreboard that says nothing.
4 A ¶ GRETA HOLMQUIST (40s, skip, club jacket) sweeps a rock into place.
5 A BJORN LUND (50s, vice, thermos) watches from the hack.
6 A ILSE NAKAMURA (20s, newest member, brand-new broom) stands too straight.
7 A ¶ A STRANGER (30s, rental shoes, borrowed gloves) pushes open the glass door and stands at the edge of the ice.
8 D GRETA: Closed to the public.
9 D STRANGER: I called. A woman said Saturday.
10 D BJORN: That was Ilse.
11 D ILSE: I said come at noon.
12 D STRANGER: It's eleven fifty.
13 A ¶ Bjorn laughs into his thermos.
14 A Greta says nothing.
15 A She slides a rock back to the hack.
16 D GRETA: What's your name?
17 D STRANGER: Felix.
18 D GRETA: Felix. Ever held a broom?
19 D FELIX: My father curled. I never did.
20 D GRETA: That's the best kind.
21 A ¶ She hands him her broom.
22 A Felix steps onto the ice, arms out for balance.
23 A Ilse shifts to make room.
24 A Bjorn lifts the thermos, pours a fourth cup, and sets it on the boards.

### SCENE s02318 | INT. FARMHOUSE BASEMENT - NIGHT
Detected names (may be incomplete or contain aliases): DEZ, CALLUM KOWALCZYK, RHONDA
1 A ¶ Dirt floor.
2 A A single bare bulb on a cord.
3 A Shelves of mason jars.
4 A A furnace thumps like a heartbeat.
5 A ¶ DESMOND "DEZ" KOWALCZYK, thirty, and his brother CALLUM KOWALCZYK, twenty-eight, crouch by a low iron door in the far wall.
6 A Dez holds a crowbar, Callum a flashlight.
7 A Their cousin RHONDA, thirty-five, stands on the steps, arms wrapped round herself.
8 D RHONDA: Dez, don't.
9 D DEZ: We have to know.
10 D CALLUM: Dez is right.
11 D RHONDA: Callum, you're not helping.
12 D CALLUM: Rhonda, I'm trying.
13 A ¶ He aims the light at the iron door.
14 A It is covered in scratches, long and deep.
15 A Dez sets the crowbar in the seam and heaves.
16 A Nothing.
17 D DEZ: It's rusted shut.
18 D CALLUM: Together.
19 A ¶ They push.
20 A The door groans.
21 A Rhonda gasps.
22 A Something inside gives a long low hiss, and the bulb flickers, then dies.
23 A The furnace stops thumping.
24 D RHONDA (in the dark): Dez? Callum?
25 D DEZ: I'm here.
26 D CALLUM: I'm here.
27 D RHONDA: Something's breathing.
28 D DEZ: That's us.
29 D RHONDA: No. It isn't.
30 A ¶ The bulb flares back.
31 A Dez and Callum are alone on the dirt floor.
32 A The door is wide open.
33 A The steps are empty.
34 A Rhonda's voice calls from the dark behind the iron, small and cheerful.
35 D RHONDA [O.S.]: Come on in, boys!

### SCENE s00985 | INT. PICKLE CELLAR - GRANDMOTHER'S FARMHOUSE - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): NONNA FLORENTINA, EMEKA, TAMSIN, STRANGER, BARTOSZ
1 A ¶ A low, cool stone room lined with shelves of jars.
2 A Dill, vinegar, garlic.
3 A A single bulb on a cord.
4 A Dust turns in the light.
5 A ¶ NONNA FLORENTINA (80s, small, apron, forearms like rope) sorts jars by hand.
6 A Her grandson EMEKA (10, school uniform, backpack) sits on an upturned crate, swinging his legs.
7 A His mother TAMSIN (40s, scrubs, car keys in hand) stands on the bottom step.
8 A ¶ She watches the old woman.
9 A She doesn't speak.
10 D EMEKA: Nonna, why do you turn the jars?
11 D NONNA FLORENTINA: So the brine moves. Stale brine makes soft pickles.
12 D EMEKA: How do you know which ones are soft?
13 D NONNA FLORENTINA: You listen. A good jar clicks.
14 A ¶ She taps one with a fingernail.
15 A Holds it to his ear.
16 A He listens, frowns, nods.
17 D TAMSIN: Mama, I have to get back to the hospital.
18 D NONNA FLORENTINA: Then go.
19 D TAMSIN: I told the school I'd pick him up at four.
20 D NONNA FLORENTINA: And you did.
21 A ¶ She doesn't turn around.
22 A Tamsin shifts on the step.
23 A Checks her watch.
24 A Puts it away.
25 D EMEKA: Mum, can I stay for dinner?
26 D TAMSIN: You have homework.
27 D EMEKA: I can do it down here.
28 D NONNA FLORENTINA: There is no light down here.
29 D EMEKA: There's the bulb.
30 A ¶ She smiles at that.
31 A She wipes her hands on her apron.
32 A ¶ Upstairs, the screen door bangs.
33 A Footsteps cross the floor above.
34 A Dust drifts down from the beams.
35 A All three look up.
36 D TAMSIN: Who's that?
37 D NONNA FLORENTINA: Probably the man about the gutters.
38 A ¶ Heavy boots on the cellar stairs.
39 A A shadow fills the doorway.
40 A A STRANGER (50s, work jacket, cap in hands, polite) ducks under the frame.
41 D STRANGER: Sorry to bother you. Door was open.
42 D TAMSIN: Can we help you?
43 D STRANGER: I'm looking for Florentina Marchetti.
44 D NONNA FLORENTINA: You found her.
45 A ¶ He steps into the light.
46 A He looks at the jars.
47 A At the boy.
48 A At her.
49 D STRANGER: My name's Bartosz. You knew my father. Janek.
50 A ¶ She sets down the jar slowly.
51 A Her face does not change.
52 A Her hands do.
53 D NONNA FLORENTINA: Janek the tinsmith.
54 D BARTOSZ: That's the one.
55 D TAMSIN: Mama?
56 D NONNA FLORENTINA: It's all right, Tamsin.
57 A ¶ She wipes her hands again.
58 A Longer this time.
59 D NONNA FLORENTINA [CONT'D]: He used to come down here in August. Said my brine was the only thing in the county worth a hungry man's trouble.
60 D BARTOSZ: He said that about you, too.
61 D EMEKA: Who is he?
62 D NONNA FLORENTINA: Someone's son.
63 A ¶ She lifts a jar from the shelf, wipes the lid, and holds it out to Bartosz.
64 D NONNA FLORENTINA [CONT'D]: Listen.
65 A ¶ He takes it.
66 A Holds it to his ear.
67 A The cellar is very quiet.
68 D BARTOSZ: It clicks.
69 D NONNA FLORENTINA: Good. It's yours.
70 A ¶ Tamsin steps down at last.
71 A Sits beside her son on the crate.
72 A Neither of them says anything.
73 A The bulb sways a little, then settles.

### SCENE s01786_0 | EXT. FROZEN LAKE - ICE-FISHING SHACK - DAY
Detected names (may be incomplete or contain aliases): 
1 A ¶ A tin shack on a plain of white.
2 A Wind pushes snow across the lake.
3 A A thin plume of smoke rises from the stovepipe.
