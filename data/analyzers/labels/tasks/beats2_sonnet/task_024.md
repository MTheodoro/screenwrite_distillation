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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_sonnet/group_00024.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01439 | INT. BOOKBINDERY - SUNDAY AFTERNOON
Detected names (may be incomplete or contain aliases): LIORA MENDELSOHN, MATEUS FARIA, SEVERINE ACHARD, ODELL BRIGHT
1 A ¶ Quiet.
2 A Presses stand like iron monks.
3 A Spools of linen thread, bone folders, glue pots.
4 A Sun slants through dusty skylights.
5 A ¶ LIORA MENDELSOHN (30s) trims a spine with a knife.
6 A MATEUS FARIA (30s) presses a stack of pages under a brass weight.
7 A SEVERINE ACHARD (50s), the owner, sorts paper by tone.
8 A ODELL BRIGHT (20s) sweeps.
9 D LIORA: Mateus, hand me the paste.
10 D MATEUS: Which paste?
11 D LIORA: The wheat.
12 D MATEUS: There are two wheats.
13 D SEVERINE: The older one, dear. It's more patient.
14 A ¶ Mateus passes her a pot.
15 A Their fingers touch.
16 A Both glance away.
17 D ODELL: Should I do the back room?
18 D SEVERINE: You did it Friday.
19 D ODELL: It got dusty.
20 D SEVERINE: It's a bookbindery.
21 D LIORA: Odell, come hold this.
22 D MATEUS: Odell, come hold this.
23 D LIORA: ^I asked first.
24 D MATEUS: ^I only asked second because you were slow.
25 A ¶ Odell, caught between them, stands with his broom like a flagpole.
26 D ODELL: I'll hold his.
27 D LIORA: Traitor.
28 D SEVERINE: Children. The glue is setting.
29 A ¶ All four go quiet and return to their benches.
30 A Scissors snip.
31 A Paper whispers.
32 A Outside a church bell rings four.
33 D MATEUS (low, to Liora): Dinner?
34 D LIORA (low): Maybe.
35 D SEVERINE: I heard that.
36 D LIORA: You weren't meant to.
37 D SEVERINE: Everything in this room was meant to be heard. It's a very small room.

### SCENE s01696 | INT. PIE-BAKING CONTEST TENT - DAY
Detected names (may be incomplete or contain aliases): CHLOE BANKS, HORACE PINKERTON, DOLORES FINCH, BIRDIE KAPOOR, RAJIV KAPOOR
1 A ¶ Gingham tablecloths.
2 A Fans stirring warm air.
3 A Judges' scorecards flutter in the draft.
4 A ¶ CHLOE BANKS (30s, apron, flour on her cheek) lifts a lattice-topped pie and carries it to the judges, passing her rival HORACE PINKERTON (60s, chef's whites, ego like a thundercloud), who turns his own pie a precise quarter inch.
5 A Meanwhile the host, DOLORES FINCH (50s, sequin blazer), twirls her microphone cord.
6 A Two tables over, nine-year-old BIRDIE KAPOOR (9) licks a spoon, and her father RAJIV KAPOOR (40s) tries gently to take it away.
7 D DOLORES: Contestants, five minutes!
8 D HORACE: Five? We were promised ten!
9 D CHLOE: We were not promised ten.
10 D RAJIV: Birdie, spoon.
11 D BIRDIE: It's evidence.
12 D HORACE: Evidence of what?
13 D BIRDIE: That your pie is dry.
14 A ¶ Horace turns the color of rhubarb.
15 A Chloe sets her pie down and presses her lips together very hard.
16 D DOLORES: Folks, folks, let's keep it friendly!
17 A ¶ Horace seizes his tin and thrusts it forward, but the crust slides and his whole filling lands on the floor in a perfect round puddle.
18 A Nobody speaks.
19 A The fans whir.
20 D BIRDIE: Told you.

### SCENE s01533 | INT. HOSPITAL ROOFTOP HELIPAD - NIGHT
Detected names (may be incomplete or contain aliases): EMEKA BALOGUN-HARTE, NURSE ILSE VANDERMEER, ORDERLY DESHAWN PALMQUIST
1 A ¶ Wind.
2 A City lights below.
3 A A windsock snaps.
4 A ¶ DR. EMEKA BALOGUN-HARTE, 50s, scrubs under a parka, sits on a bench with a paper cup.
5 A Alone.
6 A Steam rises from the coffee.
7 A ¶ The stairwell door clangs.
8 A A young woman steps out, hood up.
9 A ¶ NURSE ILSE VANDERMEER, 20s, badge swinging.
10 A She sits beside him without asking.
11 D ILSE: Quiet night.
12 D EMEKA: Don't say that.
13 D ILSE: Sorry.
14 A ¶ She pulls her hands into her sleeves.
15 A They watch the city.
16 D EMEKA: Mrs. Okoro's husband brought her flowers.
17 D ILSE: Bed twelve.
18 D EMEKA: Yes.
19 D ILSE: They're pretty.
20 D EMEKA: Tulips.
21 D ILSE: Her favourite, he said.
22 A ¶ He nods.
23 A Sips.
24 A Sets the cup down on the bench.
25 A Turns it a quarter turn.
26 A ¶ The stairwell door bangs.
27 A ORDERLY DESHAWN PALMQUIST, 20s, scrubs, out of breath, leans out.
28 D DESHAWN: Doctor, they're asking for you on twelve.
29 A ¶ A pager chirps.
30 A Neither Emeka nor Ilse moves.
31 D ILSE [CONT'D]: That's yours.
32 D EMEKA: I know.
33 D ILSE: Aren't you going to--
34 D EMEKA: In a minute.
35 A ¶ The pager chirps again.
36 A Louder.
37 A He silences it.
38 A Folds his hands.
39 D ILSE: Doctor?
40 D EMEKA: Twenty-two years. I still can't tell them on a bad night. I wait for a good one.
41 D ILSE: Tell them what?
42 A ¶ He doesn't answer.
43 A Looks at her.
44 A Then at the stairwell door.
45 D ILSE [CONT'D]: Doctor Balogun-Harte. What did the scan show?
46 D EMEKA: Not on the rooftop.
47 D ILSE: Is it her?
48 D EMEKA: Ilse.
49 D ILSE: Is it Mrs. Okoro?
50 A ¶ He stands.
51 A Picks up the cup.
52 A Drops it into the bin without drinking.
53 A The coffee splashes the rim.
54 D EMEKA: She asked me this afternoon whether she could go home Friday.
55 D ILSE: And you said?
56 D EMEKA: I said we would see.
57 D ILSE (a beat): You said "we would see."
58 D EMEKA: I said it very kindly.
59 A ¶ Ilse stands too.
60 A Her hands emerge from her sleeves, one tucking a lock of hair behind her ear, the other gripping the bench rail.
61 D ILSE: Does the husband know?
62 D EMEKA: Not yet.
63 D ILSE: Those tulips.
64 D EMEKA: I know.
65 A ¶ The windsock snaps.
66 A The wind rises.
67 A Down in the city a siren begins and fades.
68 A ¶ He opens the stairwell door and holds it for her.
69 A She walks through without a word.
70 A He follows.
71 A The door closes on the rooftop, the bench, the bin with the spilled coffee.

### SCENE s00443 | INT. SLEEPER TRAIN - DINING CAR - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE HORTENSE VANDERBILT-OKAFOR, LEOPOLD PRUITT, GRETA LINDQVIST, CAPTAIN DESMOND TREVELYAN, YOUNG MISS ADELAIDE FOX
1 A ¶ White tablecloths.
2 A Swaying chandeliers.
3 A Rain drums the windows.
4 A Five passengers sit at a long table set for dinner.
5 A ¶ DETECTIVE HORTENSE VANDERBILT-OKAFOR (50s, tweed) cuts her steak.
6 A She watches her left.
7 A He pushes his food around, shaking.
8 A She watches her right.
9 A They sip wine, calm, bored.
10 A ¶ MR. LEOPOLD PRUITT (60s, banker) coughs into a napkin.
11 A He glances at the clock.
12 A MRS. GRETA LINDQVIST (40s, black gloves) dabs her mouth.
13 A She studies the door.
14 A ¶ CAPTAIN DESMOND TREVELYAN (40s, uniform) sits across from them, jaw tight.
15 A He taps the table.
16 A His glass trembles.
17 A ¶ YOUNG MISS ADELAIDE FOX (20s, curls) looks at her plate.
18 A She has not eaten.
19 A ¶ The train enters a tunnel.
20 A The lights flicker.
21 A A scream, short and cut off.
22 A The lights return.
23 A ¶ Pruitt slumps in his chair, a steak knife in his chest.
24 A She leaps up.
25 A He gasps.
26 A They freeze.
27 A He knocks over his water.
28 A She slaps the table.
29 D HORTENSE: Nobody move.
30 A ¶ She crosses to the body and lifts his wrist.
31 A She shakes her head.
32 A She looks at each face in turn, and they stare back.
33 D TREVELYAN: Detective, I assure you--
34 D HORTENSE: Captain, sit down.
35 A ¶ He sits.
36 A She studies the knife, then the table settings.
37 D GRETA (barely a whisper): That was my knife.
38 A ¶ All heads turn to her.
39 A She holds up her hands, palms open, gloves still on.
40 D GRETA [CONT'D]: I mean, it was set at my place. Someone switched it.
41 D ADELAIDE: Detective, the train is locked.
42 D HORTENSE: Yes, Miss Fox. It is.
43 A ¶ She picks up the cold dinner roll from her plate, tears it in half, and sets it down.
44 D HORTENSE [CONT'D]: Then one of you is lying.

### SCENE s01124 | INT. CHURCH BASEMENT - BINGO NIGHT - EVENING
Detected names (may be incomplete or contain aliases): WILHELMINA OKAFOR-DUNN, DOV KESSLER, ANSELM PRICE, CANDACE LOWE, RUTENDO MOYO
1 A ¶ A low room of folding tables and fluorescent tubes.
2 A Cards, daubers, a coffee urn.
3 A A raffle drum sits on a stage made of risers.
4 A Above it hangs a banner: ST. ANSELM'S ROOF FUND.
5 A ¶ WILHELMINA OKAFOR-DUNN (70s, church-lady hat, a ring of keys) holds the microphone.
6 A DOV KESSLER (60s, cardigan, the treasurer, anxious hands) counts bills at the cash table.
7 A ANSELM PRICE (40s, big man, usher's lanyard) stacks chairs by the wall.
8 A CANDACE LOWE (30s, nurse's scrubs under a coat, new in the parish) sits alone with a single card.
9 A RUTENDO MOYO (20s, sharp, laptop bag, a visitor from the diocese) stands at the stairs, watching them all.
10 D WILHELMINA: Good evening, everyone. Welcome. We'll begin in two minutes.
11 A ¶ Dov glances up at Rutendo, then down at his cash again.
12 D DOV (to himself): Four hundred. Four hundred and ten.
13 D RUTENDO: Mr. Kessler, I'd like to see the ledger before the draw.
14 D DOV: It's bingo night. The books are in the office.
15 D RUTENDO: Then let's go to the office.
16 D DOV: After the game.
17 A ¶ Wilhelmina lowers the mic.
18 D WILHELMINA: Dov, is there a problem?
19 D DOV: No problem, Willie.
20 D ANSELM (to the room): Folks, take your seats, please. We're starting soon.
21 A ¶ Candace moves to a different table, nearer the stairs.
22 A Rutendo notices.
23 D RUTENDO: You're new, aren't you?
24 D CANDACE: Three months.
25 D RUTENDO: Why bingo?
26 D CANDACE: It's quiet. I work nights. Sometimes I need quiet.
27 A ¶ Dov stuffs the cash into a metal box and locks it.
28 A His hands are shaking.
29 D RUTENDO: Mr. Kessler. The ledger.
30 D DOV (louder): I said after the game!
31 A ¶ Heads turn.
32 A The urn hisses.
33 A Wilhelmina steps off the riser, keys jingling.
34 D WILHELMINA: Dov Kessler. Look at me.
35 D DOV: Willie, don't.
36 D WILHELMINA: I have known you thirty-one years. Look at me.
37 A ¶ Dov looks.
38 A His face crumples.
39 D DOV (barely audible): The roof isn't getting fixed.
40 D ANSELM: What did he say?
41 D WILHELMINA (to Anselm, flat): Sit down.
42 D ANSELM: Wilhelmina, what did he say?
43 D WILHELMINA: He said the roof isn't getting fixed.
44 A ¶ A long silence.
45 A Candace puts down her dauber.
46 D CANDACE (to the room): How much?
47 D DOV: Eleven thousand. Over two years.
48 D ANSELM (to himself, muttering): Eleven thousand. Eleven thousand dollars.
49 D RUTENDO: Where did it go, Mr. Kessler?
50 D DOV: My wife's treatments. The insurance wouldn't...
51 A ¶ He can't finish.
52 A Wilhelmina takes the metal box from the table and holds it against her chest.
53 D WILHELMINA (to everyone): Nobody leaves. Nobody calls anyone. We are going to have this out like a family.
54 D ANSELM (rising, loud): Family? He stole from us!
55 D CANDACE: Anselm, sit.
56 D ANSELM: Don't tell me what to do. You've been here ninety days.
57 D CANDACE: I've been here long enough to know a man in trouble when I see one.
58 D ANSELM: He lied to every person in this room!
59 D DOV (weeping): I know. I know I did.
60 D RUTENDO (to Wilhelmina): Mrs. Okafor-Dunn, I have a report due to the bishop.
61 D WILHELMINA: Then write that the church of St. Anselm found its own answer.
62 D RUTENDO: What answer?
63 A ¶ Wilhelmina walks to the riser, sets the cash box on the raffle drum and opens it.
64 A She takes out the whole stack of bills and holds it up.
65 D WILHELMINA (to the crowd): Tonight's pot goes to Dov's wife. All of it.
66 D ANSELM: That's the roof money!
67 D WILHELMINA: The roof can leak another winter. Dov can't.
68 A ¶ Anselm opens his mouth.
69 A Closes it.
70 A He drags his hand down his face.
71 D ANSELM (to himself): Lord, give me patience.
72 A ¶ He walks to the cash table, pulls out his wallet, and drops two twenties on the pile.
73 D ANSELM [CONT'D]: That's mine.
74 D CANDACE (softly): Mine too.
75 A ¶ She adds a ten.
76 A Rutendo stares at them.
77 A Then, with a long breath, she closes her laptop bag.
78 D RUTENDO: My report will say the ledger was in order.
79 A ¶ Dov covers his face.
80 A Wilhelmina lifts the microphone.
81 D WILHELMINA: B-seven. B, seven.
82 A ¶ The room breathes.
83 A Daubers lift.
84 A Dov sits, shoulders shaking, as the first ball rattles in the drum.

### SCENE s01535 | INT. FARMHOUSE KITCHEN - EARLY MORNING
Detected names (may be incomplete or contain aliases): ANNELIESE FOSSEGARD-MBEKI, ANDREAS FOSSEGARD
1 A ¶ A low-beamed room that smells of woodsmoke and old bread.
2 A Frost climbs the window glass.
3 A The range ticks as it warms.
4 A A pot of porridge sits uncovered at the back of the stove, a skin forming.
5 A ¶ At the table, ANNELIESE FOSSEGARD-MBEKI, 17, in a school coat buttoned to the chin, sits upright with her satchel on her knees.
6 A Her boots are already laced.
7 A A rucksack waits by the door.
8 A ¶ Her father, ANDREAS FOSSEGARD, 50s, thick-fingered, in his barn jacket, stands at the stove and stirs the porridge with a wooden spoon, round and round, long past the point of need.
9 D ANDREAS: There's honey.
10 D ANNELIESE: I'm fine.
11 D ANDREAS: You'll want something in you for the bus.
12 D ANNELIESE: I had toast.
13 D ANDREAS: Toast isn't food.
14 D ANNELIESE: It's what Mum used to say.
15 A ¶ The spoon stops.
16 A Starts again.
17 A He lifts the pot and tips porridge into a bowl, sets it before her, and sits across, facing the door instead of her.
18 D ANDREAS: Eat, Annie.
19 A ¶ She lifts the spoon.
20 A Lowers it.
21 A A clock above the dresser ticks, loud as a hammer.
22 D ANNELIESE: The coach leaves at seven.
23 D ANDREAS: I know when it leaves.
24 D ANNELIESE: It's twenty past six.
25 D ANDREAS: I can tell time.
26 D ANNELIESE (muttering, to the porridge): Could have fooled me.
27 A ¶ He doesn't ask her to repeat it.
28 A His jaw works.
29 A Outside, a cow lows, and a gate bangs in the wind.
30 D ANDREAS: Calves'll want feeding.
31 D ANNELIESE: Jonas will do it.
32 D ANDREAS: Jonas is eleven.
33 D ANNELIESE: He's good with them.
34 D ANDREAS: He's eleven, Annie.
35 D ANNELIESE: I was eleven.
36 D ANDREAS: And look what it got you.
37 A ¶ She stands.
38 A The chair scrapes.
39 A She slings the satchel over her shoulder, crosses to the door, and picks up the rucksack.
40 A Her hand on the latch.
41 D ANNELIESE (to the empty hall, quietly): Be ready, Annie.
42 D ANDREAS: What did you say?
43 D ANNELIESE: Nothing. I said I'll write.
44 D ANDREAS: You won't.
45 D ANNELIESE: I will.
46 D ANDREAS: Your mother said she'd write.
47 A ¶ The word lands.
48 A Anneliese stands very still with her back to him.
49 A The range ticks.
50 A The porridge sits, untouched.
51 D ANNELIESE: She did write, Dad.
52 D ANDREAS: Three letters in nine years.
53 D ANNELIESE: You burned two.
54 D ANDREAS: I did not.
55 D ANNELIESE: I found the ash.
56 A ¶ He is on his feet.
57 A The spoon clatters to the floor.
58 A Neither of them moves to pick it up.
59 D ANDREAS: You've got your mother's mouth.
60 D ANNELIESE: You've got her coat.
61 A ¶ His eyes drop.
62 A He is wearing, under the barn jacket, a grey cardigan with a darned elbow.
63 A Her cardigan.
64 D ANDREAS: Get out.
65 D ANNELIESE: I'm going.
66 D ANDREAS: Then go.
67 D ANNELIESE (opening the door): Dad.
68 D ANDREAS: Go, Annie. Go on.
69 A ¶ She stands in the doorway, the white morning on her face.
70 A Doesn't turn.
71 D ANNELIESE: Eat the porridge.
72 A ¶ She steps out.
73 A The door swings shut.
74 A He stands in the silence, then lowers himself into her chair, takes up her spoon, and eats.

### SCENE s00896 | INT. DUMPLING KITCHEN - BACK TABLE - NIGHT
Detected names (may be incomplete or contain aliases): CELESTE MARCHAND, RORY BANERJEE, NONNA LUCIA, TOMASZ WISNIEWSKI
1 A ¶ Steam curls from bamboo baskets.
2 A A wall of orange tiles, a radio murmuring in Cantonese.
3 A Four people crowd a stainless counter, pleating dumplings by hand.
4 A ¶ CELESTE MARCHAND, 30s, silk blouse, sleeves rolled, pleats each one with great concentration.
5 A RORY BANERJEE, 30s, sits across from her, flour on his glasses.
6 A NONNA LUCIA, 80s, wiry, in a faded apron, oversees them with a wooden spoon.
7 A TOMASZ WISNIEWSKI, 50s, the chef, passes behind with a tray, wiping his hands on his hip.
8 D NONNA LUCIA (to the table): Too much filling. You will burst them.
9 D CELESTE: I like them fat.
10 D RORY (softly): She does.
11 A ¶ Celeste's hands pause.
12 A She doesn't look up.
13 A He reaches for a wrapper, their fingers brush the flour, and neither of them moves for a beat.
14 D TOMASZ: Everyone eat! Plates are coming!
15 D NONNA LUCIA (to Rory): You. You are the one from the letters.
16 D RORY: Which letters?
17 D NONNA LUCIA: The ones she does not send.
18 A ¶ Celeste drops a dumpling.
19 A It lands on the tile with a wet slap.
20 A Tomasz glides by and stoops to retrieve it, humming.
21 D CELESTE (to herself): Okay.
22 D RORY: Celeste--
23 D CELESTE: It's fine. Tell Tomasz the soy is low.
24 A ¶ She stands, wipes her hands, and walks out through the swinging door.
25 A Rory watches it swing.
26 A Nonna Lucia pats the empty chair.
27 D NONNA LUCIA: Sit. Pleat. It is always better in the second hour.

### SCENE s00389 | INT. HOLLOWAY & SONS FUNERAL HOME - CATERING KITCHEN - DAY
Detected names (may be incomplete or contain aliases): ROSALIND, BART, NGOZI, HECTOR, AGNES
1 A ¶ Steel counters, sheet pans of sandwiches, a coffee urn the size of a toddler.
2 A Through the swinging door, organ music murmurs.
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
34 A ¶ A quiet settles.
35 A Rosalind lays down her knife.
36 A Bart straightens a napkin that is already straight.
37 A Hector stops scrubbing.
38 D ROSALIND: Is it a good one?
39 D AGNES: It's not finished.
40 A ¶ Rosalind wipes her hands on her apron and crouches to look under the table.
41 A Hector sets down the pot.
42 A Ngozi opens the swinging door a crack.
43 A The organ music swells.
44 A ¶ Agnes holds up the book.
45 A On the page, a very large crayon man in a very large crayon hat, and next to him, a smaller crayon girl holding his hand.
46 A Both are bright orange.
47 D AGNES [CONT'D]: He liked orange.
48 A ¶ Rosalind nods.
49 A She stands, takes a sandwich, and puts it on a plate.
50 A Then another.
51 A Then another.
52 D ROSALIND: Forty.
53 D BART: Forty.
54 A ¶ He picks up the tray.

### SCENE s00139 | INT. DRIVING SCHOOL - SIMULATOR ROOM - DAY
Detected names (may be incomplete or contain aliases): JUNE, ABARA, MATEO FUENTES, IGNACIO HOLLOWAY, GRETA SOLBERG
1 A ¶ Four mock cockpits in a row, each facing a flickering screen.
2 A Pedals taped with duct tape.
3 A A poster: "SIGNAL EARLY.
4 A SIGNAL OFTEN."
5 A ¶ JUNIPER "JUNE" ABARA, 16, braces, grips the wheel with white knuckles.
6 A Next to her, MATEO FUENTES, 17, leans back, one foot on the dash.
7 A Behind them, IGNACIO HOLLOWAY, 16, scribbles on his palm.
8 A Beside him, GRETA SOLBERG, 17, eats gummy worms and watches the road on his screen instead of her own.
9 A ¶ A tinny voice from the simulator: "Merge ahead."
10 D MATEO: Merge, merge, merge.
11 D JUNE: I'm merging.
12 A ¶ He tips his chair.
13 A She hits the brakes.
14 A The screen flashes red.
15 D JUNE [CONT'D] (whisper): Mateo.
16 A ¶ He grins.
17 A She swats him.
18 A Behind them, Ignacio snickers.
19 D IGNACIO: Nice, June. Pedestrian down.
20 D GRETA: She hit a mailbox.
21 D IGNACIO: Same thing.
22 A ¶ June reboots.
23 A Her hands steady.
24 A She breathes out, picks the road back up, and cruises.
25 A The screen glows green.
26 A ¶ She turns to Greta, triumphant.
27 A Greta offers a gummy worm.
28 A June takes it.
29 D MATEO: My turn.
30 A ¶ He throws himself into the seat.
31 A Slaps the wheel.
32 A Floors it.
33 A The screen explodes into a crash.
34 D IGNACIO: Mateo!
35 D MATEO: It's a simulator!
36 A ¶ Greta laughs so hard she snorts.
37 A Ignacio cracks up.
38 A June, red-faced, tries not to, fails.
39 A ¶ Then the door opens.
40 A They all turn.
41 A The instructor's clipboard appears first, then his face, grim.
42 A ¶ Four hands go up.
43 A Then three come down, pointing at Mateo.
44 D GRETA: School bus. He killed the school bus.

### SCENE s01565 | INT. ROOFTOP GREENHOUSE RESTAURANT - NIGHT
Detected names (may be incomplete or contain aliases): ARCHIE, ISADORA ADEYEMI-VANCE, THAD, KOWALCZYK-OSEI, MADAME LUCRETIA FAIRWEATHER-NNAMDI
1 A ¶ A glass pavilion on top of a skyscraper.
2 A Tomato vines climb strings overhead.
3 A Candles on white tablecloths.
4 A The city glitters below like spilled sequins.
5 A Only one table is occupied.
6 A ¶ At it sit four people.
7 A ¶ ARCHIBALD "ARCHIE" ADEYEMI-VANCE, 60s, silver hair, bespoke suit, ring on every finger.
8 A He swirls wine and watches no one.
9 A ¶ His daughter, ISADORA ADEYEMI-VANCE, 30s, in a red dress, sits straight, hands on the cloth.
10 A Her smile is not a smile.
11 A ¶ Opposite her, THADDEUS "THAD" KOWALCZYK-OSEI, 40s, a lawyer, loosens his tie and sweats.
12 A His briefcase rests under his chair.
13 A ¶ And at the head, quiet as a stone: MADAME LUCRETIA FAIRWEATHER-NNAMDI, 70s, black lace gloves, who has not spoken since the soup.
14 D ARCHIE: The tomatoes are from the vine above us.
15 D THAD: Impressive.
16 D ISADORA: He says that every year.
17 D ARCHIE: Because it's true every year.
18 D LUCRETIA (softly): The knife, Archibald.
19 A ¶ Archie glances at the steak knife by his plate.
20 A Slowly pushes it away from him.
21 D ARCHIE: Of course.
22 D THAD: Mr. Adeyemi-Vance, if we could return to the papers--
23 D ISADORA: Papers.
24 D THAD: The transfer of shares.
25 D ARCHIE: After dessert.
26 D ISADORA: ^After dessert, Thad. Always after dessert.
27 A ¶ Neither of them looks at the other.
28 A Lucretia lifts a finger, and the candles flicker as a gust finds the vents.
29 D LUCRETIA: My late husband built this building. On a handshake.
30 D THAD: So I've heard.
31 D LUCRETIA: He would have disliked the tomatoes.
32 D ARCHIE: Lucretia, we all have our vices.
33 D LUCRETIA: Yours cost him forty million.
34 A ¶ Silence.
35 A A tomato vine sways.
36 A Archie sets down his glass.
37 A Isadora folds her napkin into a neat square.
38 A Thad reaches under his chair for the briefcase.
39 D THAD: Madame, I'm only here to--
40 D LUCRETIA: Sit, young man.
41 A ¶ He sits.
42 D LUCRETIA [CONT'D]: Isadora, my dear. You may open the window.
43 D ISADORA: Which one?
44 D LUCRETIA: The big one.
45 A ¶ Isadora rises.
46 A Crosses to the glass wall.
47 A Flips a latch.
48 A A section slides back and night air pours in, cold and loud with traffic far below.
49 D ARCHIE: What are you doing?
50 D ISADORA: Letting in a draught.
51 A ¶ She returns to the table.
52 A Resumes her seat.
53 A Takes the steak knife from beside her father's plate and lays it across her own, perfectly aligned.
54 D LUCRETIA: Archibald. The papers.
55 A ¶ Archie's mouth tightens.
56 A He reaches into his jacket, draws out a folded envelope, and slides it across the cloth.

### SCENE s01911 | EXT. BRIDGE OF BONES, MISTY GORGE - DAWN
Detected names (may be incomplete or contain aliases): SIR GARRICK WYNDHAM-ADEYEMI, HEDDA STORMCALLER-BRAND, TICK, FENWICK
1 A ¶ A narrow span of lashed ribs and vertebrae across a chasm.
2 A Fog boils below.
3 A Ravens circle.
4 A ¶ SIR GARRICK WYNDHAM-ADEYEMI (40s, dented plate armor, a notched longsword) steps onto the bridge.
5 A Behind him, HEDDA STORMCALLER-BRAND (30s, furs, a bow across her back) and the boy TOBIN "TICK" FENWICK (14, oversized helmet, a lantern) wait at the edge.
6 D GARRICK: Stay close.
7 D HEDDA: I always do.
8 D TICK: It creaks.
9 D GARRICK: It's meant to.
10 A ¶ They step out, single file.
11 A Ribs groan.
12 A A raven lands on a post and croaks.
13 A Hedda draws an arrow.
14 A Tick clutches the lantern.
15 A ¶ From beneath the bridge, a long, wet rattle.
16 A Everything stops.
17 A ¶ The span lurches.
18 A Ribs snap loose and tumble into the fog.
19 A Garrick seizes Tick by the collar while Hedda throws her bow across the gap, hooks a post, and hauls herself and the boy forward by the string.
20 A Tick screams, drops the lantern, and scoops it back up.
21 A Garrick hacks at a lashing that has caught his boot, and the bridge sags behind them.
22 A ¶ They freeze, panting.
23 A The bridge rocks once, then settles.
24 D TICK: Is it dead?
25 D HEDDA: It was already dead.
26 D GARRICK: It's gone. Move.
27 A ¶ They run across, boots thundering on bone, and leap the final gap to solid ground.
28 A All three collapse, laughing and gasping.

### SCENE s02369 | INT. CASINO BASEMENT - COUNTING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): NOVA, FELIX
1 A ¶ A windowless vault of stainless steel counters and humming money counters.
2 A Stacks of bills in rubber bands.
3 A A camera dome on the ceiling blinks green.
4 A ¶ NOVA, 30s, in a black security uniform with a mismatched badge, pushes a cart of laundry through the door.
5 A Her gait is bored and easy.
6 A She parks the cart, picks up a clipboard, and begins to count towels.
7 A ¶ At the far counter, FELIX, 50s, the night supervisor, sits in a swivel chair eating a sandwich.
8 A He glances at her once, then returns to his sandwich.
9 A ¶ She does not look at him.
10 A She walks the length of the room, adjusts a stack of towels, nudges a bill-counter's cover straight, checks the clipboard.
11 A She is just a woman doing a dull job.
12 D FELIX: You're new.
13 D NOVA: Third week.
14 D FELIX: They don't send laundry down this late.
15 D NOVA: They do when the fountain overflows.
16 A ¶ He considers this.
17 A Swivels, chews.
18 A She keeps counting.
19 D FELIX: Which one of the fountains?
20 D NOVA: Lobby. The big one.
21 D FELIX: The big one doesn't overflow.
22 D NOVA: Tell that to the lobby.
23 A ¶ Felix puts down the sandwich.
24 A He wipes his fingers on a napkin, one at a time.
25 A His hand drifts toward a desk phone and stops.
26 A She notices, and for an instant her bored mask slips and slides back.
27 A ¶ She walks to the cart, reaches under the towels, and withdraws not a towel but a short black cylinder.
28 A She turns, thumb on a pin, smiling at him as one smiles at a toddler.
29 D NOVA [CONT'D]: Felix. Don't.
30 D FELIX (very still): How do you know my name?
31 D NOVA: It's on your lanyard.
32 A ¶ His eyes drop to the lanyard.
33 A They come up again.
34 A He lifts both hands slowly from the desk, and Nova steps closer, the cylinder held low, almost gently, as the camera dome on the ceiling blinks from green to red.
35 D FELIX [CONT'D]: That camera...
36 D NOVA: I know. I've been waiting for it.
37 A ¶ She tosses the cylinder underhand onto his desk.
38 A It rolls to a stop against the sandwich, and Felix flinches.
39 A Nothing happens.
40 A It is only a flashlight.
41 A ¶ Nova laughs, quietly, and wheels the cart toward the vault door, which clicks open from the other side.

### SCENE s00085 | INT. CAROUSEL WORKSHOP - NIGHT
Detected names (may be incomplete or contain aliases): KALINDA RUSSO, OSCAR TREMBLAY, MOSES BELLAMY
1 A ¶ Painted horses hang from chains.
2 A Gilded poles.
3 A A calliope under a tarp.
4 A Dust in lamplight.
5 A ¶ KALINDA RUSSO (30s, black jumpsuit, tool roll) crouches at a floor panel.
6 A OSCAR TREMBLAY (50s, ex-clockmaker, magnifier on one eye) holds a flashlight steady.
7 A MOSES BELLAMY (20s, lookout, earbud) hovers by the door.
8 D KALINDA: Pry bar.
9 A ¶ Oscar hands it over.
10 A She slides the bar under the panel.
11 A Wood groans.
12 A A compartment opens.
13 A Inside, a velvet satchel.
14 D OSCAR: There she is.
15 D MOSES (whispering): Guys. Headlights.
16 A ¶ Both freeze.
17 A A white beam sweeps the window, slides across the horses, and passes on.
18 D KALINDA (exhaling): Keep breathing.
19 D MOSES: I am breathing!
20 D OSCAR: Quietly.
21 A ¶ Kalinda lifts the satchel.
22 A Weighs it in her palm.
23 A Frowns.
24 D KALINDA: Light.
25 D OSCAR: What?
26 D KALINDA: It's too light.
27 A ¶ She opens it.
28 A Inside lies a single brass key and a note.
29 A Oscar reads over her shoulder.
30 D OSCAR: "Try the horse."
31 D KALINDA: ^"Try the third horse."
32 A ¶ They speak the same line at the same instant.
33 A Moses stares from one to the other.
34 D MOSES: What third horse?
35 A ¶ All three turn.
36 A Above them, a carousel horse with a chipped blue mane.
37 A Kalinda climbs onto the platform.
38 A Oscar follows.
39 A Moses bolts after.
40 A They gather around the animal, and she turns the key in a hidden lock at the saddle.
41 A The belly pops open.
42 A Gold coins pour into her arms.
43 A ¶ A siren starts up outside.
44 D MOSES: Oh no.
45 D OSCAR: Oh yes.
46 A ¶ They scatter.
47 A Moses dives under the calliope tarp.
48 A Oscar slides behind a stack of poles.
49 A Kalinda leaps from the platform, hugging the coins, and vanishes between two rows of horses as the doors burst open.

### SCENE s00788 | INT. AGING CAVE - ALPINE CHEESE VAULT - NIGHT
Detected names (may be incomplete or contain aliases): MARGUERITE LOUVEL, JUNIOR TWOMBLY, DEL, WRAY, OSCAR PELLEGRINI-OKAFOR, MAN IN WHITE APRON, WHITE APRON, BERTRAND
1 A ¶ Carved stone.
2 A Wheels of cheese on spruce shelves, rows upon rows, rind blooming white and grey.
3 A A single gas lamp.
4 A The air tastes of salt and earth.
5 A ¶ MARGUERITE LOUVEL, 40s, immaculate trench coat, strolls the aisle with her hands behind her back.
6 A She might be visiting an aunt.
7 A ¶ JUNIOR TWOMBLY, 30s, safecracker, sweater too warm for the cave, kneels at a steel door set into the rock.
8 A He listens, ear to the dial.
9 A ¶ DELPHINE "DEL" WRAY, 20s, getaway driver, sits cross-legged on a barrel, a thermos on her knee.
10 A She watches the entrance.
11 A ¶ OSCAR PELLEGRINI-OKAFOR, 50s, the inside man, wears a cheesemonger's smock and sweats through it.
12 A He hovers by the door and checks his watch every few seconds.
13 D MARGUERITE: How long?
14 D JUNIOR: Ten minutes.
15 D OSCAR: He said ten minutes at midnight.
16 D MARGUERITE: Oscar. Breathe.
17 D OSCAR: I am breathing. I'm breathing very hard.
18 D DEL: He said that ten minutes ago.
19 D JUNIOR: He is a patient man.
20 D MARGUERITE: Del, the road?
21 D DEL: Quiet. Too quiet.
22 A ¶ Marguerite touches a wheel of cheese.
23 A Leaves a fingerprint in the rind.
24 A She looks at it.
25 A Wipes it carefully.
26 D MARGUERITE: Gloves.
27 D JUNIOR: I'm wearing gloves.
28 D MARGUERITE: Del.
29 D DEL (holds up hands): Bare. Sorry.
30 A ¶ She pulls on gloves.
31 A Junior turns the dial.
32 A A click.
33 A Another.
34 A ¶ A shape detaches itself from the shadow between shelves.
35 A ¶ A MAN IN A WHITE APRON, 60s, holds a cheese iron like a sword.
36 D MAN IN WHITE APRON: You're in my cave.
37 A ¶ Everyone freezes.
38 A Del slides off the barrel.
39 A Marguerite doesn't flinch.
40 D MARGUERITE: We're expected.
41 D MAN IN WHITE APRON: By who?
42 D MARGUERITE: By the cheese.
43 A ¶ His eyes narrow.
44 A The cheese iron drops a few inches.
45 D JUNIOR (whisper): Marguerite.
46 D MARGUERITE (quietly, to him): Keep dialing.
47 D MAN IN WHITE APRON: What do you want?
48 D MARGUERITE: The Reserve. 1978.
49 A ¶ He studies her.
50 A She holds his eyes.
51 A The lamp hisses.
52 D BERTRAND: I am Bertrand Blanchet. I have been guarding that wheel for forty years.
53 D MARGUERITE: Then you know it was never meant to be sold.
54 D BERTRAND: It was not.
55 D DEL: Mr. Blanchet, with respect, it's two million dollars of dairy.
56 D BERTRAND: It is two million dollars of my wife.
57 A ¶ Silence.
58 A The lamp.
59 A A drip somewhere.
60 A ¶ Junior stops turning the dial.
61 D JUNIOR: Marguerite. Your call.
62 A ¶ Marguerite takes a long breath.
63 A Walks toward Bertrand.
64 A Stops an arm's length away.
65 D MARGUERITE: What if we only take half?
66 D BERTRAND: Half?
67 D MARGUERITE: You keep half. We sell half. You buy a new roof.
68 D BERTRAND: The roof is fine.
69 D DEL: It's not, though. I saw the leak by the entrance.
70 D BERTRAND: That is a decorative leak.
71 D JUNIOR: Is anybody else confused?
72 D MARGUERITE: Quiet, Junior.
73 A ¶ She holds out her gloved hand.
74 A Bertrand looks at it.
75 A Lowers the cheese iron.
76 D BERTRAND: Half.
77 A ¶ He shakes.
78 A The safe door clicks open behind them.
79 A ¶ Junior pulls it wide.
80 A Inside, nestled in straw: a single, enormous, dark wheel.
81 A ¶ Everyone stares.
82 A Del lifts her thermos.
83 D DEL: To the wife.
84 A ¶ They raise nothing, because they have nothing.
85 A Bertrand takes the thermos, drinks, hands it back.

### SCENE s00031 | INT. CLOCKMAKER'S GUILD VAULT ANTECHAMBER - NIGHT
Detected names (may be incomplete or contain aliases): SECOND MAN, JANITOR, GUARD, DWYER, STRANGER
1 A ¶ Marble floor.
2 A Brass pendulums under glass domes, swinging out of sync.
3 A A time lock gleams on a steel door.
4 A ¶ A MAN in a janitor's coverall mops, eyes down.
5 A He is tall, mid-40s, with a limp.
6 A Behind him, a second MAN in a security blazer, younger, wide-shouldered, scrolls a tablet.
7 A ¶ The janitor stops mopping and glances at the guard.
8 A The guard doesn't look up.
9 D JANITOR: Quiet shift.
10 D GUARD: Don't talk to me while I'm working.
11 D JANITOR: Right.
12 A ¶ He mops closer to the door.
13 A His mop handle taps the lock panel, twice, a soft tick.
14 D GUARD: Hey. What was that?
15 D JANITOR: Nothing. Sorry.
16 A ¶ The guard approaches, tablet lowered.
17 A The janitor straightens.
18 A Their eyes meet.
19 D GUARD: I don't think I know you.
20 D JANITOR: Third week. Night crew.
21 D GUARD: Name?
22 A ¶ A beat.
23 A Somewhere, a pendulum clicks.
24 A The janitor's hand slips into his bucket.
25 D JANITOR: Cormac Dwyer.
26 D GUARD (reading from tablet): There's no Dwyer on the roster.
27 D DWYER (calmly): No. There isn't.
28 A ¶ He pulls a taser from the bucket and fires.
29 A The guard drops.
30 A Dwyer kneels, takes his keycard, and turns to the pendulums.
31 A ¶ At the far end of the room, a SECOND MAN has stood watching from the shadows the entire time: a thin figure in a clockmaker's apron, silver hair, spectacles.
32 A He steps forward.
33 D STRANGER: You're early.
34 D DWYER (not surprised): You said midnight.
35 D STRANGER: I said twelve-oh-three. He walks the floor at twelve-oh-two.
36 D DWYER: Then he's dead on schedule.
37 A ¶ The stranger smiles, tucks a loupe into his pocket, and removes a key from around his neck.
38 D STRANGER: Call me Aurelio.
39 A ¶ AURELIO inserts the key.
40 A The vault door sighs open on a room of ticking gold.

### SCENE s01609 | EXT. RANCH - BUNKHOUSE PORCH - EVENING
Detected names (may be incomplete or contain aliases): AMOS PRUITT, DELFINA RIVAS, HANK SORENSEN, YOUNG TOBIAS, CLEO, JAMES
1 A ¶ Long shadows.
2 A Cicadas.
3 A A line of horses at a trough, tails switching.
4 A The sun sinks behind a ridge the color of rust.
5 A ¶ Five ranch hands sit on the porch.
6 A Nobody has said much in an hour.
7 A ¶ AMOS PRUITT (60s, foreman, gray beard) smokes a pipe.
8 A DELFINA RIVAS (30s, braid, work gloves tucked in her belt) mends a bridle.
9 A HANK SORENSEN (40s, big, quiet) peels an apple with a pocketknife.
10 A YOUNG TOBIAS (17, hat too big) plays three notes on a harmonica, over and over.
11 A And old CLEOPHAS "CLEO" JAMES (70s, one eye clouded) rocks in a battered chair.
12 A ¶ The harmonica stops.
13 A Tobias studies the horizon.
14 A ¶ Delfina ties off a knot.
15 A Hank halves the apple and hands a piece to Tobias without a word.
16 A Tobias takes it.
17 A Amos taps out his pipe against the rail.
18 A ¶ Cleo lifts his chin.
19 A Sniffs the air.
20 D AMOS: Rain?
21 D CLEO: Maybe.
22 A ¶ Neither says anything else.
23 A The first star shows in the east.

### SCENE s00500 | INT. AUCTION HOUSE - BACK ROOM - DAY
Detected names (may be incomplete or contain aliases): CORNELIUS WREN, PHILIPPA VANTONGEREN, DETECTIVE ANSELM OBI
1 A ¶ A narrow room behind the sale floor.
2 A Velvet-draped easels.
3 A A single tall window.
4 A Through the wall, the muffled voice of an auctioneer and the occasional rap of a gavel.
5 A ¶ CORNELIUS WREN (60s, tweed, silk pocket square) sits at a polished table with a cup of tea, serene.
6 A Across from him, PHILIPPA VANTONGEREN (40s, tailored suit, folder in her lap) sits very upright, a pen between her fingers.
7 D CORNELIUS: You'll find the provenance is impeccable.
8 D PHILIPPA: I'm sure.
9 D CORNELIUS: Painted in 1884. Single owner since 1921. Never exhibited.
10 D PHILIPPA: Never exhibited.
11 D CORNELIUS: Never.
12 A ¶ He sips.
13 A She taps the pen against the folder.
14 A Her eyes stay on the cup.
15 D CORNELIUS [CONT'D]: My dear, you look unwell.
16 D PHILIPPA: I'm well.
17 D CORNELIUS: You've hardly touched your biscuit.
18 D PHILIPPA: I don't care for biscuits.
19 D CORNELIUS: No one cares for them. They are an excuse for tea.
20 A ¶ She smiles, briefly.
21 A The gavel falls in the next room.
22 D CORNELIUS [CONT'D]: So. Shall we sign?
23 D PHILIPPA: Of course.
24 A ¶ She opens the folder and slides a document across the table.
25 A He reads it, uncaps his fountain pen, and begins to sign.
26 A ¶ The door opens.
27 A A tall man in a navy suit enters without knocking: DETECTIVE ANSELM OBI (50s, badge on his belt, hands in his pockets).
28 A He closes the door behind him.
29 D ANSELM: Mr. Wren.
30 D CORNELIUS: This is a private meeting.
31 D ANSELM: I know. I've been listening to it for twenty minutes.
32 A ¶ Philippa sets down her pen.
33 A She lifts the collar of her blouse and reveals a small wire.
34 D CORNELIUS: You.
35 D PHILIPPA: Me.
36 A ¶ Cornelius stands so fast his chair goes over.
37 A He lunges for the document; she snatches it.
38 A He reaches for the window latch; Anselm catches his arm and twists it behind his back, and they stagger together against the easel, which topples, and a velvet cloth slides off a tarnished gold frame to reveal a painting of a small girl in a blue dress holding an apple.
39 A ¶ Silence.
40 A The three of them stare.
41 D ANSELM: That's not a Corot.
42 D CORNELIUS (strangled): It's a very good copy.
43 D PHILIPPA: It's a very good forgery.
44 A ¶ In the sale room, the gavel falls again.

### SCENE s01373 | INT. DROWNED CATHEDRAL - NAVE - TWILIGHT
Detected names (may be incomplete or contain aliases): NERISSA, BARNABY, ODALYS
1 A ¶ Seawater fills the cathedral to the height of a man's knee, black and perfectly still.
2 A Through the shattered rose window a violet sky bleeds in.
3 A Pews rise from the flood like the ribs of some enormous animal, and pale lantern-fish drift between them, trailing threads of cold light.
4 A ¶ A flat-bottomed boat noses between the pillars.
5 A In the stern, a woman poles steadily, her coat the green of old copper.
6 A In the bow sits a man with a ledger across his knees, and between them, a girl hugs a birdcage covered in cloth.
7 D NERISSA (calling ahead): Mind the altar rail. It bites.
8 D BARNABY: It does not bite. It is a rail.
9 D NERISSA: It took my last pole in half.
10 D BARNABY: Because you steered it into the rail.
11 A ¶ The girl has not spoken.
12 A She watches the water as though something might rise out of it.
13 A Under the cloth, something in the cage shifts and murmurs.
14 D ODALYS: It's awake.
15 D NERISSA: It's not awake.
16 D BARNABY: It is certainly awake.
17 D ODALYS: It wants out.
18 D NERISSA: They always want out, love. That's the nature of--
19 D BARNABY: We agreed that it stays covered until the choir loft.
20 D NERISSA: We agreed nothing. You agreed. I poled.
21 A ¶ He closes the ledger with a snap.
22 A She leans harder into the pole.
23 A The boat glides through a drift of drowned hymn-books, their pages spread like pale hands.
24 A ¶ At the far end of the nave, the water begins to move.
25 A A slow ring spreads from the base of the pulpit, then another.
26 A The lantern-fish scatter.
27 A ¶ Odalys sees it first.
28 A Her grip tightens on the cage.
29 A She says nothing.
30 D BARNABY: Nerissa.
31 D NERISSA: I see it.
32 D BARNABY: You are not looking at it.
33 D NERISSA: I am looking at everything. That is the point of looking.
34 D ODALYS: It's under us.
35 A ¶ The pole stops mid-stroke.
36 A Water drips off the end and sets small circles ringing outward.
37 A Under the boat, something enormous and unhurried turns over in the dark.
38 D BARNABY (very softly): Give it the bird.
39 D ODALYS: No.
40 D NERISSA: Odalys--
41 D ODALYS: It's mine. It sings for me.
42 D BARNABY: Child, I am asking you--
43 D NERISSA: Don't ask her, Barnaby, you'll only make it worse--
44 D BARNABY: I am being perfectly reasonable!
45 D NERISSA: You are shouting in a church!
46 A ¶ The boat lifts.
47 A Not much.
48 A Enough that the water slides off the hull in a sheet.
49 A Odalys pulls the cloth from the cage in a single sweep.
50 A ¶ Inside, a small gray wren opens its beak and sings a single, impossible note.
51 A Every pane left in the rose window answers it.
52 A ¶ The water goes still.
53 A ¶ Barnaby lowers the ledger.
54 A Nerissa lowers the pole.
55 A Odalys, eyes shut, holds the cage up toward the light.
56 A ¶ Slowly, the boat settles.

### SCENE s01933_1 | INT. ICE-FISHING HUT - CONTINUOUS
Detected names (may be incomplete or contain aliases): NANA PHILOMENA DUBOIS, ARJUN CHAUDHRY, TEDDY LINDGREN, UNCLE SIONE TAUFA, MEI-LING DUBOIS-CHAUDHRY, BEATRIZ
1 A ¶ Six people crowd a space meant for two.
2 A A stove glows orange in one corner.
3 A Four holes bored in the plank floor reveal black water below.
4 A ¶ NANA PHILOMENA DUBOIS, 70s, sits in a lawn chair in a quilted parka, a fishing line wrapped around her gloved finger like a ring.
5 A Beside her, ARJUN CHAUDHRY, 40s, her son-in-law, tends the stove with the grim pride of a man who has built his first fire.
6 A TEDDY LINDGREN, 9, kneels on an overturned bucket, nose to the water.
7 A UNCLE SIONE TAUFA, 50s, enormous in a down jacket, wedges himself on a cooler, fiddling with a transistor radio.
8 A MEI-LING DUBOIS-CHAUDHRY, 35, hands out thermoses.
9 A And BEATRIZ, 5, lies on her stomach on the plank floor, one mitten dipping toward a hole.
10 D MEI-LING: Beatriz, away from the water.
11 D BEATRIZ: It's looking at me.
12 D NANA PHILOMENA: That is a fish, child. They look at everyone.
13 D UNCLE SIONE: Nana, don't scare her. It could be a very friendly fish.
14 D TEDDY: It's not a fish. It's a muskrat.
15 D ARJUN (from the stove): It can't be a muskrat. They don't live under ice.
16 D TEDDY: This one does.
17 A ¶ A tug on Nana's line.
18 A She sits bolt upright.
19 A Everyone stills.
20 A The line twitches again.
21 D NANA PHILOMENA: Hush, all of you. Hush.
22 D ARJUN: Philomena, I think you've got something.
23 D MEI-LING: Mama, pull!
24 D UNCLE SIONE: Pull, Nana, pull!
25 A ¶ Nana hauls on the line with both hands.
26 A A silver fish the length of her forearm bursts through the hole, flops across the plank, and lands in Beatriz's lap.
27 A Beatriz shrieks.
28 A Teddy dives for it.
29 A Mei-Ling grabs Beatriz.
30 A Arjun knocks over the bucket.
31 A Uncle Sione catches the radio before it hits the stove.
32 D BEATRIZ: It's alive!
33 D TEDDY: It's a pike!
34 D NANA PHILOMENA: It is dinner.
35 A ¶ The fish flaps.
36 A Teddy pins it with both hands, grinning.
37 A Arjun kneels beside him, awkward, and takes the pliers from his belt.
38 D ARJUN: Hold still. Hold still, little guy.
39 D MEI-LING: Do you know how to do this?
40 D ARJUN: I watched a video.
41 D UNCLE SIONE: Give me the pliers, brother.
42 A ¶ Arjun surrenders the pliers.
43 A Uncle Sione works the hook free in one practiced twist, then lifts the fish high in the cramped air for everyone to see.
44 A They cheer.
45 A The little hut rings with it.

### SCENE s02159 | INT. NORTHSTAR WEATHER STATION - COMMON ROOM - NIGHT
Detected names (may be incomplete or contain aliases): GUNNAR BERG, PALOMA REYES, REGGIE OYELOWO, BASE
1 A ¶ Steel walls, wool blankets, a single heater ticking.
2 A Frost on the window.
3 A Instruments blink on a long table.
4 A Wind howls round the corners of the building.
5 A ¶ GUNNAR BERG, 50s, beard, captain's cap, sits at the radio.
6 A PALOMA REYES, 30s, climatologist, parka zipped to the chin, turns pages in a logbook.
7 A REGGIE OYELOWO, 25, mechanic, sits on the floor and wraps his hands in a tea towel.
8 D GUNNAR (to the room): Right. Rations. We have six days of food.
9 D PALOMA: Gunnar, it's seven.
10 D GUNNAR: Six, if Reggie eats.
11 D REGGIE: Reggie is standing right here.
12 D GUNNAR: Reggie is sitting right there.
13 D PALOMA: Reggie, how are your hands?
14 D REGGIE: Cold.
15 D PALOMA: Frostbite?
16 D REGGIE: Just cold. I think.
17 D PALOMA: Let me see.
18 D REGGIE: Leave it, Paloma.
19 D PALOMA: Reggie.
20 A ¶ He unwraps the towel and shows her.
21 A Pink, swollen, but sound.
22 A She nods.
23 D PALOMA [CONT'D] (to herself): Okay. Okay. Not yet.
24 D GUNNAR (into the radio): Base, Northstar. Do you read?
25 D BASE [V.O.] (radio, static): ...Northstar... storm... hold position...
26 D GUNNAR: We're holding. How long?
27 D BASE [V.O.] (radio): ...seventy-two hours...
28 D GUNNAR: Seventy-two. Understood.
29 A ¶ He switches off the set.
30 A Silence.
31 A Even the wind seems to listen.
32 D GUNNAR [CONT'D]: Three days.
33 D REGGIE: Is that bad?
34 D GUNNAR: It's three days.
35 D PALOMA: Gunnar, you said six days of food.
36 D GUNNAR: Then it's three days of waiting and three days of margin.
37 D PALOMA: That's thin.
38 D GUNNAR: It's what we have.
39 A ¶ Reggie hugs his knees.
40 D REGGIE: Does anybody want to play cards?
41 A ¶ Paloma looks at Gunnar.
42 A Gunnar looks at Reggie.
43 A He takes off his cap.
44 D GUNNAR: Deal.

### SCENE s01512 | INT. LEGAL AID OFFICE, FORMER DENTIST'S SUITE - EVENING
Detected names (may be incomplete or contain aliases): ATTORNEY OLIVIA OYELARAN-BRENNAN, PARALEGAL MARCO TRAN-ASHWORTH, CLIENT HAROLD BEAUMONT-ADEYEMI, INTERPRETER LUCIA FERREIRA-DAS
1 A ¶ A reception desk with a dental chair behind it, used as a client seat.
2 A Beige carpet.
3 A A dusty fish tank.
4 A Diplomas of a man who is no longer here.
5 A ¶ Four people around a conference table made of two card tables pushed together.
6 A ¶ ATTORNEY OLIVIA OYELARAN-BRENNAN (40s, cardigan, reading glasses on her head).
7 A PARALEGAL MARCO TRAN-ASHWORTH (20s, laptop).
8 A CLIENT HAROLD BEAUMONT-ADEYEMI (60s, an old coat, scarred hands).
9 A INTERPRETER LUCIA FERREIRA-DAS (50s, a notebook).
10 D OLIVIA: Mr. Beaumont-Adeyemi, I'd like to go through the eviction notice again.
11 D HAROLD: I've read it.
12 D OLIVIA: I know. But I'd like to hear what you think it says.
13 D HAROLD: It says I owe four months.
14 D OLIVIA: Do you?
15 D HAROLD: I paid in cash.
16 D MARCO: Do you have receipts?
17 D HAROLD: She wrote them by hand.
18 D OLIVIA: Who is "she"?
19 D HAROLD: Mrs. Okonkwo. The landlady.
20 D LUCIA (translating): La casera. Okonkwo.
21 D OLIVIA: Do you have copies?
22 D HAROLD: She keeps the originals. I keep the carbon.
23 D MARCO: Carbon copies?
24 D HAROLD: I'm sixty-three, young man.
25 D MARCO: I'm sorry.
26 D HAROLD: Don't be. They were the best thing she ever did for me.
27 D OLIVIA: Where are the carbons?
28 D HAROLD: In the freezer.
29 D OLIVIA: The freezer?
30 D HAROLD: That's where I keep the important things.
31 D LUCIA (to Olivia, aside): He means it.
32 D OLIVIA: Can you bring them tomorrow?
33 D HAROLD: Bring them? I'd have to defrost them.
34 D MARCO: That's allowed.
35 D HAROLD: Is it?
36 D OLIVIA: Mr. Beaumont-Adeyemi, you are going to win this case.
37 D HAROLD: You haven't seen the carbons.
38 D OLIVIA: I don't need to.
39 D HAROLD: Why not?
40 D OLIVIA: Because the notice names the wrong tenant.
41 A ¶ Harold blinks.
42 A Marco looks up.
43 A Lucia stops writing.
44 D HAROLD: What?
45 D OLIVIA: It says "Beaumont-Adeyemi, Harold J." Your middle initial is R.
46 D HAROLD: That's my brother's.
47 D OLIVIA: Then they're evicting your brother.
48 D HAROLD (slowly): He's been dead since 'ninety-four.
49 D OLIVIA: Then they're evicting a ghost.

### SCENE s01875 | EXT. DRIVE-IN SCREEN, ABANDONED - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): KES, WILLOW ODUYA, BASTIEN LEROUX
1 A ¶ A rusted frame stands over a field gone to goldenrod.
2 A KESTREL "KES" ODUYA (16) lies flat on the hood of a hatchback, shoes off.
3 A His sister WILLOW ODUYA (13) sits on the bumper, kicking gravel.
4 A Their cousin BASTIEN LEROUX (17) arrives on a bicycle, one wheel ticking.
5 A ¶ He drops the bike.
6 A She watches him come.
7 A Kes doesn't turn his head.
8 D BASTIEN: You said four.
9 D KES: It's four.
10 D BASTIEN: It's four-twenty.
11 D WILLOW: He's been lying there since three.
12 D KES: Thinking.
13 D BASTIEN: About what?
14 D KES: Nothing. That's the point of it.
15 D WILLOW: You said you'd teach me to drive today.
16 D KES: I said maybe.
17 D WILLOW: You said Saturday, and it's Saturday.
18 D BASTIEN: She's got a point.
19 D KES: Nobody asked you.
20 D BASTIEN: You're the one who asked me to come.
21 D KES (a long pause): I know.
22 D WILLOW: Is this about Dad?
23 D KES: No.
24 D WILLOW: It's about Dad.
25 D BASTIEN: Willow.
26 D WILLOW: What? He moved out in April. We're allowed to say it.
27 D KES: It's not about Dad. It's about the screen. They used to show movies on it. Did you know that? Mom said they'd park here and nobody watched. They'd just sit.
28 D BASTIEN: Sounds nice.
29 D KES: That's what I mean. It sounds nice.
30 D WILLOW: Can I still sit behind the wheel?
31 D KES (sitting up, finally): Come on. Keys are in the visor.
32 D BASTIEN: Do I get a turn?
33 D KES: After her.
34 D WILLOW: Ha.

### SCENE s02447 | INT. BOXING GYM - FORMER CHURCH SANCTUARY - EARLY MORNING
Detected names (may be incomplete or contain aliases): BERNARD OYELOWE-STEIN, LUZ MERCADO, KOFI ASARE
1 A ¶ Stained glass above the ring.
2 A Pews stacked against the wall.
3 A A speed bag thuds in a corner.
4 A ¶ BERNARD OYELOWE-STEIN (60s, trainer, towel over shoulder) holds the pads.
5 A LUZ MERCADO (20s, boxer, hand wraps frayed) slams a combination into them.
6 A Left.
7 A Right.
8 A Left.
9 A ¶ KOFI ASARE (20s, sparring partner, headgear) waits on the ropes, bouncing slowly.
10 A ¶ Bernard says nothing.
11 A Luz throws again.
12 A Harder.
13 A ¶ Bernard lowers the pads.
14 D BERNARD: Again.
15 A ¶ She throws.
16 A He tilts his head, listening to the snap.
17 D BERNARD [CONT'D]: Again.
18 A ¶ Luz exhales through her nose.
19 A Throws.
20 A Her shoulder is rigid.
21 A Bernard watches her elbow.
22 A ¶ Kofi climbs through the ropes.
23 A Offers his gloves.
24 A Luz doesn't look at him.
25 D BERNARD [CONT'D]: Three rounds.
26 A ¶ Luz tapes a wrist.
27 A Kofi taps his headgear twice.
28 A A bell rings somewhere above.
29 A Light through the glass lays red and blue across the canvas.
30 A ¶ They circle.

### SCENE s00385 | INT. ICE-DRILL RIG "CALLISTO ONE" - CONTROL CAGE - NIGHT
Detected names (may be incomplete or contain aliases): NASRIN, JOSEPH, NAKAMURA
1 A ¶ A steel box bolted to a frozen moon.
2 A Gauges flicker.
3 A A tiny window shows black sky and a bruised planet.
4 A ¶ NASRIN, 38, mission engineer, holds a pressure valve with both hands.
5 A JOSEPH, 50, geologist, lies on the floor with a bleeding scalp and a laugh like a cough.
6 A ¶ The radio SQUEALS.
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
18 A The gauges climb.
19 A Alarms scream.
20 A Then, all at once, every needle drops to zero.
21 A Silence.
22 D NAKAMURA [V.O.]: Callisto One, say again.
23 A ¶ Nasrin looks at Joseph.
24 A He is staring at the floor, where a pale blue light is rising through the grating, and he is smiling.
25 D NASRIN (into radio): Nakamura. We're through.

### SCENE s01507 | INT. CORPORATE TEAM-BUILDING ESCAPE ROOM - DAY
Detected names (may be incomplete or contain aliases): ARNOLD KOWALCZYK-ABARA, DESMOND PETROVA-OKAFOR, PRUDENCE LINDQVIST-ADEYEMI, NORMAN HOLLOWAY-LEE
1 A ¶ A fake dungeon with plywood walls painted to look like stone.
2 A A locked chest.
3 A A plastic skull on a pedestal.
4 A A digital clock on the wall counts down from 60:00.
5 A It reads 03:12.
6 A ¶ Four coworkers are trapped in the room, every one of them wearing a lanyard.
7 A ARNOLD KOWALCZYK-ABARA (40s, rumpled shirt) kicks the chest.
8 A DESMOND PETROVA-OKAFOR (30s, red-faced, sweating) dumps a bag of plastic coins on the floor.
9 A PRUDENCE LINDQVIST-ADEYEMI (50s, reading glasses, a pen behind her ear) paces.
10 A NORMAN HOLLOWAY-LEE (30s, the intern) stares at the skull, hopeful.
11 A ¶ He kicks the chest again.
12 A He shouts.
13 A He sits on it.
14 A He gets up and checks the other side, while he stares at the coins, then at him, and then at the clock.
15 D ARNOLD: We're going to be late for the all-hands.
16 D DESMOND: We're going to be dead, Arnold.
17 D PRUDENCE: We're going to be fired.
18 D NORMAN: Is it possible the skull is the key?
19 D ARNOLD: It's plastic.
20 D NORMAN: But keys can be plastic.
21 D DESMOND: That's a skull, Norman!
22 A ¶ Norman picks up the skull.
23 A Turns it over.
24 A Inside, taped to the cranium, a key.
25 A He holds it out.
26 A For a moment nobody breathes.
27 D PRUDENCE: Well. Don't just stand there.
28 A ¶ He fits it in the chest.
29 A The lid creaks open.
30 A Inside lies a laminated card: "CONGRATULATIONS!
31 A YOU HAVE ESCAPED.
32 A PLEASE RETURN YOUR LANYARDS."
33 A ¶ The clock stops at 02:05.

### SCENE s01475_0 | EXT. FLOODED SUGAR MILL - DUSK
Detected names (may be incomplete or contain aliases): CAPTAIN RUTH OYELOWO-KAUFMANN, SERGEANT BASHIR AL-HAMDANI, MEDIC, CAPTAIN, SERGEANT
1 A ¶ A war-wrecked sugar mill on a river plain.
2 A The ground floor stands in knee-deep brown water.
3 A Chimney broken.
4 A Rain has thinned to drizzle.
5 A ¶ Three soldiers wade between iron vats, rifles above their heads.
6 A All three are exhausted and trying not to show it.
7 A ¶ CAPTAIN RUTH OYELOWO-KAUFMANN (40s, steady, carries a map case) goes first, testing each step with a pole.
8 A SERGEANT BASHIR AL-HAMDANI (30s, broad shoulders, a limp he hides) follows, watching the ridge line.
9 A A young MEDIC (20s, red cross armband, boots gone) brings up the rear, carrying a pack too big for him.
10 D CAPTAIN: Stairs on the left. We take the second floor and dry out.
11 D SERGEANT: Dry out, Captain? With what?
12 D CAPTAIN: With hope, Sergeant.
13 A ¶ The Medic stumbles on a submerged rail.
14 A The Sergeant catches him by the strap and sets him upright without a word, and the Captain stops, turns, and watches the boy catch his breath before she moves on.

### SCENE s02221 | INT. ABANDONED BOWLING ALLEY - NIGHT
Detected names (may be incomplete or contain aliases): DOT, FITZ, OGUNLEYE, GUNNY, INTERCOM, PRU
1 A ¶ Dead neon.
2 A Lane 6 still has pins.
3 A A birthday banner droops: HAPPY 40TH, KEVIN.
4 A ¶ DOT, forties, event planner, clipboard clamped to her chest, shoves a cake onto the ball return while FITZ, thirties, in a rented shark costume, trips over his own fin and takes down a rack of house shoes and OGUNLEYE, "GUNNY" to all, sixties, a retired lane mechanic with a toolbox, drops to one knee to catch the cake before it slides off, and the ball return rumbles, and the cake shoots down Lane 6 like a torpedo.
5 A ¶ Silence.
6 A A single pin wobbles.
7 D DOT: Nobody saw that.
8 D FITZ (muffled, in the shark head): I saw it. I'm a shark. We see everything.
9 D GUNNY: That cake had eighty dollars of fondant on it.
10 D DOT: Kevin arrives in ten minutes. Ten.
11 A ¶ Fitz yanks the shark head off, sweaty, hair plastered.
12 D FITZ: I can't breathe in this thing. Why am I a shark?
13 D DOT: Kevin loves sharks.
14 D FITZ: Kevin loves SHARKS. Not men inside sharks.
15 A ¶ Gunny walks down the lane, picks up the ruined cake with both hands like an infant, and carries it back, frosting to the elbows.
16 D GUNNY: I can fix it. Give me a spatula and a prayer.
17 D DOT: I have neither. I have a clipboard.
18 A ¶ An INTERCOM crackles overhead.
19 D PRU [V.O.] (over intercom, bored): Attention, party in Lane 6. Your guest of honor is in the parking lot and he's on the phone with his mother.
20 D DOT: How long?
21 D PRU [V.O.]: His mother is Greek. I'd say forty minutes.
22 A ¶ Dot exhales for the first time in an hour.
23 A She sits on the ball return.
24 D FITZ: So we have time.
25 D DOT: We have time.
26 D GUNNY (scraping frosting): Then somebody hand me a spatula.
27 A ¶ Fitz offers a bowling shoe.
28 A Gunny takes it, considers it, and uses it.
29 D PRU [V.O.] (over intercom): For the record, the shark is good.
30 A ¶ Fitz bows.
31 A His fin knocks over the last pin.

### SCENE s00372_0 | INT. ROLLER RINK - AFTER CLOSING - NIGHT
Detected names (may be incomplete or contain aliases): JUNE ABARA, CALVIN, RAFA, PRIYA, DUBOIS
1 A ¶ Half the lights are off.
2 A The disco ball turns slowly over an empty floor.
3 A Rental skates hang in pairs along a wall.
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
