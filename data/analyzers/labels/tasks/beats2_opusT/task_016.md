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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_opusT/group_00016.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00875 | INT. CATHEDRAL CRYPT - FIELD KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): SERGEANT AUGUSTIN BELLAMY, LIEUTENANT PERPETUA NWOSU
1 A ¶ Low vaulted stone, whitewashed long ago and soot-dark now.
2 A Rows of carved tombs line the walls, each with a name worn smooth.
3 A Iron cauldrons hang over a cooking fire dug into the old flagstones.
4 A Smoke finds its way up through a narrow stair.
5 A A single lantern hangs from a hook meant for something holier.
6 A ¶ SERGEANT AUGUSTIN BELLAMY, 50s, the company cook, stands at the largest cauldron with a wooden paddle.
7 A Broad, slow, a face like folded bread dough.
8 A A flour-stained apron over his uniform.
9 A He hums something that might be a hymn.
10 A ¶ LIEUTENANT PERPETUA NWOSU, 20s, enters down the stair with a map case under her arm.
11 A Tall, tired, helmet in her hand.
12 A Her boots leave wet prints on the stone.
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
38 A Far above, through yards of stone, the faint thud of artillery.
39 A Distant.
40 A Regular as a clock.
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
57 A The fire pops.
58 A A drip of water falls from the vault into a puddle, patient and slow.
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
89 A The fire murmurs.
90 A Above them, the guns go on, and below them, in their stone beds, the old bishops keep their counsel.
91 D NWOSU (not looking up): Sergeant.
92 D BELLAMY: Lieutenant.
93 D NWOSU: Thank you for the rabbit.
94 D BELLAMY: Thank the boot.
95 A ¶ She laughs again, quietly, pencil still moving.

### SCENE s00625 | INT. MUNICIPAL WATERWORKS PUMP HOUSE - NIGHT
Detected names (may be incomplete or contain aliases): SILAS, BRANNIGAN, LOLLY, DUCHAMP, MARCUS JEROME FALK, NELL PETRAKIS
1 A ¶ A cathedral of riveted iron and brass, three stories high, lit by one amber work lamp.
2 A Steam pipes sweat along the walls.
3 A The great pump wheel turns overhead with a patient, heavy rhythm, and behind a brick archway, a vault door the color of old pennies.
4 A ¶ SILAS "THE ACCOUNTANT" BRANNIGAN, fifties, silver hair, wire spectacles, wears a gray overcoat and a face like a closed ledger.
5 A He kneels at the vault, ear to the steel.
6 A ¶ LORETTA "LOLLY" DUCHAMP, forties, a redhead in a mechanic's coverall, holds a stopwatch and a flashlight.
7 A ¶ MARCUS JEROME FALK, thirties, tall and broad, wears a night watchman's cap two sizes too small, and sweats through it.
8 A ¶ NELL PETRAKIS, twenties, sits on a crate with a tool roll across her knees, pale and unblinking.
9 D SILAS: Four minutes before the watchman's round.
10 D LOLLY: Three and a half. He's early on Thursdays.
11 D MARCUS: He's early because the Missus makes him.
12 D SILAS: Hush. Nell, the drill.
13 A ¶ Nell unrolls the tools, hands him a slim steel bit.
14 A He nods once.
15 A The pump wheel overhead thumps like a heart.
16 D LOLLY (whispering): Nobody breathe.
17 A ¶ Silas turns the bit.
18 A The vault ticks.

### SCENE s00983 | INT. LOCK-KEEPER'S COTTAGE - NIGHT
Detected names (may be incomplete or contain aliases): AUGUSTINE BELLWEATHER, PRU, HALVORSEN
1 A ¶ A low stone room above a canal lock.
2 A Wet rope on hooks.
3 A A brass wall telephone.
4 A A kettle on a coal stove.
5 A Water thuds against the lock gate outside.
6 A ¶ AUGUSTINE BELLWEATHER (60s, tall, rain-soaked inspector's coat, magnifier on a cord) stands over a desk covered with tide charts.
7 A ¶ PRU (20s, lock-keeper's apprentice, mud on her boots) sits on the stool, hugging a lantern.
8 D AUGUSTINE: Say it again, from the top.
9 D PRU: I heard a splash around midnight. I went down. The gate was open and the barge was gone.
10 D AUGUSTINE: And the body?
11 D PRU: There was no body.
12 D AUGUSTINE: Then why does the captain say there was one?
13 A ¶ The phone rings.
14 A Both startle.
15 A Augustine lifts the receiver.
16 D AUGUSTINE [CONT'D]: Bellweather.
17 D HALVORSEN [V.O.] (filtered, tense): Inspector. It's Halvorsen at the harbor. We've found the barge.
18 D AUGUSTINE: Where?
19 D HALVORSEN [V.O.]: Two locks downstream. Empty. Except for a woman's boot.
20 A ¶ Pru goes pale.
21 A She drops the lantern.
22 A It rolls, flickers, and stays alight.
23 D AUGUSTINE: Whose boot?
24 D HALVORSEN [V.O.]: Size six. Leather. Mud on the heel.
25 A ¶ Augustine lowers the phone.
26 A Looks at the girl.
27 A At her feet.
28 D AUGUSTINE: Miss Pru. Please take off your boots.
29 D PRU: Sir, I can explain.
30 D AUGUSTINE: I don't doubt it.
31 A ¶ She bends.
32 A Unlaces one boot.
33 A Her hands tremble.
34 A Then she laughs, suddenly, and pulls out a second pair from under the stool.
35 D PRU: I swapped them. They're my mother's. I wanted to see how it felt to wear them.
36 A ¶ Augustine stares.
37 A The kettle whistles.
38 D HALVORSEN [V.O.]: Inspector? Are you there?
39 D AUGUSTINE (into phone): Yes. I think we've been chasing a cobbler's mistake.
40 A ¶ He hangs up.
41 A Pours the tea.

### SCENE s00380 | INT. TOLL BOOTH - HIGHWAY 9 - 3 A.M.
Detected names (may be incomplete or contain aliases): LEILANI KANE
1 A ¶ A glass box at the end of nowhere.
2 A Sodium light.
3 A A fan turns in one corner.
4 A Rain on the roof.
5 A ¶ LEILANI KANE, 50, in a reflective vest, sits with a voice recorder pressed to her mouth and a thermos steaming at her elbow.
6 D LEILANI (to recorder): Day eleven. I said I'd do this every night. I'm doing it.
7 A ¶ She sips.
8 A Sets the thermos down.
9 D LEILANI [CONT'D] (to recorder): Nobody has come through since two-forty. A truck, then nothing. I counted the trucks on the first night, you know. Eighty-one. Last night, nine. They've found another road. That's what I would do. I'd find another road.
10 A ¶ She clicks the recorder off.
11 A Clicks it on.
12 D LEILANI [CONT'D] (to recorder): Play back.
13 A ¶ She presses a button.
14 A A scratchy sound.
15 D LEILANI [V.O.] (recorded): This is Leilani Kane. If you are hearing this, either I am dead or I got brave. Probably I am neither. Probably I am in the booth with a thermos telling the dark what it already knows.
16 A ¶ She laughs, and it hurts.
17 A She stops the playback.
18 D LEILANI (to recorder): That's from March. March, Leilani. You were so sure you'd be somewhere else.
19 A ¶ A pause.
20 A Rain.
21 D LEILANI [CONT'D] (to recorder): I'm going to say a thing now. I haven't said it to anyone. When the state sold the road to the company, I thought, fine, fine, I'll stay on. They'll need somebody. And there was a letter, and the letter said my position had been eliminated, effective the first, and I read it, and I folded it, and I came to work. Seven weeks. Nobody noticed. Nobody has paid me since August.
22 A ¶ She looks at the barrier arm, a red-and-white bar pointing at the sky.
23 D LEILANI [CONT'D] (to recorder): I keep the arm up. Isn't that something? There's nothing to stop. There's no one to stop. I keep the arm up so they'll know the road is still open.
24 A ¶ She switches off the fan.
25 A In the sudden quiet she holds the recorder in both hands.
26 D LEILANI [CONT'D] (to recorder): If you're hearing this, I'm going home now. I'm going to leave the lights on. If a car comes through, it can have the road.
27 A ¶ She stands.
28 A Hangs up her vest.
29 A Leaves the recorder on the counter, red light glowing.

### SCENE s00852 | INT. NATIONAL RESPONSE CALL CENTER, FLOOR THREE - DAY
Detected names (may be incomplete or contain aliases): DUANE PRESCOTT, SHANICE WILLIAMS, KOVACS
1 A ¶ Beige cubicles.
2 A Gray carpet.
3 A A banner: "EVERY CALL IS AN OPPORTUNITY!"
4 A A wall clock ticks over a whiteboard of call counts.
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
17 A ¶ A chirp from the ceiling speaker.
18 A The intercom.
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
35 A The tape tears loose with a long squeal.
36 A Duane takes hold of the other end.
37 A They bring it down and stand there in a slump of paper, holding it between them.
38 D SHANICE: I always hated that banner.
39 D DUANE: I wrote it.
40 D SHANICE: I know.
41 A ¶ The intercom chirps again, but neither of them listens.

### SCENE s01534 | INT. CONVALESCENT HOME SOLARIUM - AFTERNOON
Detected names (may be incomplete or contain aliases): HORATIO PEMBERTON-LAW, EUPHEMIA STANHOPE-ADEYEMI
1 A ¶ A glass-walled room full of wicker chairs and ferns.
2 A Pale sun.
3 A Somewhere down the corridor, a gramophone plays a waltz.
4 A ¶ DR. HORATIO PEMBERTON-LAW, 50s, in a rumpled tweed jacket, stands by the window with his hat in his hand.
5 A ¶ MRS. EUPHEMIA STANHOPE-ADEYEMI, 80s, in a shawl and a wheelchair, faces the garden.
6 A Her hands rest on a blanket.
7 D HORATIO: Good afternoon, Mrs. Stanhope-Adeyemi.
8 D EUPHEMIA: Good afternoon, Doctor. You are late.
9 D HORATIO: The train was held up.
10 D EUPHEMIA: Trains always are.
11 A ¶ He pulls up a wicker chair.
12 A Sits.
13 A Opens his bag.
14 A Closes it again without taking anything out.
15 D HORATIO: You are looking well.
16 D EUPHEMIA: I am looking at the roses.
17 D HORATIO: They are fine roses.
18 D EUPHEMIA: They are blighted. The gardener lies.
19 D HORATIO: Perhaps he is hopeful.
20 D EUPHEMIA: Perhaps he is paid by the hour.
21 A ¶ Horatio smiles.
22 A Smooths his hat.
23 A A nurse's shoe squeaks past in the corridor and fades.
24 D HORATIO: I have the results.
25 D EUPHEMIA: I supposed you might.
26 D HORATIO: They are not what we hoped.
27 D EUPHEMIA (a pause): Are they ever?
28 A ¶ He takes a sheet of paper from his jacket.
29 A Offers it.
30 A She doesn't take it.
31 A Instead she reaches out and presses his hand, paper and all, down onto the blanket.
32 D EUPHEMIA [CONT'D]: Read it to the roses, Doctor. They've heard worse.
33 D HORATIO: Mrs. Stanhope-Adeyemi--
34 D EUPHEMIA: Euphemia. I am too old to be called anything else by a man I like.
35 A ¶ He sets the paper on his knee.
36 A Does not read it.
37 D HORATIO: I should like to come on Thursdays.
38 D EUPHEMIA: You come on Mondays.
39 D HORATIO: Then Thursdays also.
40 D EUPHEMIA: I shall tell the gardener.
41 D HORATIO: About the Thursdays?
42 D EUPHEMIA: About the roses. He ought to be told.
43 A ¶ They both go still.
44 A Horatio looks at the paper; Euphemia looks at the glass.
45 A Neither looks at the other.
46 A ¶ Down the corridor the waltz ends.
47 A The gramophone needle hisses in the empty groove.
48 A Euphemia lifts one finger, listening.
49 D EUPHEMIA [CONT'D]: They always forget to turn it over.
50 A ¶ Horatio stands, crosses to the door, and calls softly down the hall.
51 D HORATIO (calling): Would someone turn the record, please?
52 A ¶ He returns to the chair.
53 A A moment later the music resumes, soft and a little slow.

### SCENE s00113 | INT. TERRAFORMING STATION DOME - CONTROL DECK - DAY
Detected names (may be incomplete or contain aliases): ADMIRAL SELENE VOSKUIJLEN-ADEYEMI, COMMANDER RAMIRO OKONJO-TALLIS, DOCTOR YUKI HARTMANN-NWAFOR, ENGINEER BODHI LARSSON-EZE, LIEUTENANT CASSANDRA MBEKI-FROST, THE OBSERVER, CONTROL
1 A ¶ A broad glass cupola overlooks a rust-red landscape speckled with the first green.
2 A Atmospheric processors the size of cathedrals churn on the horizon.
3 A Inside, a ring of consoles, each glowing in a different color.
4 A ¶ Six people work the ring.
5 A ¶ ADMIRAL SELENE VOSKUIJLEN-ADEYEMI (60s, silver crop, high collar) paces the center.
6 A COMMANDER RAMIRO OKONJO-TALLIS (40s, shaved head, burn scar on one cheek) taps at a console.
7 A DOCTOR YUKI HARTMANN-NWAFOR (30s, braids, lab coat) studies a spectrograph.
8 A ENGINEER BODHI LARSSON-EZE (20s, sleeveless jacket, goggles on his forehead) crouches under a panel.
9 A LIEUTENANT CASSANDRA MBEKI-FROST (30s, tight bun) monitors a bank of weather maps.
10 A And last, at a small console apart from the others, THE OBSERVER, an elderly man known only by his badge, watches without touching anything.
11 D SELENE: Report.
12 D RAMIRO: Oxygen at eleven percent.
13 D YUKI: Methane trace is falling.
14 D BODHI (from under the panel): Pump six is slow.
15 D CASSANDRA: Storm cell northeast. Forty minutes out.
16 D SELENE: Can the dome hold?
17 D BODHI: It's held worse.
18 D SELENE: That is not an answer.
19 D BODHI (emerging): Yes, Admiral.
20 D CONTROL [V.O.] (over the speaker, filtered): Station, this is Earth Control. Please confirm your count.
21 D SELENE: Control, we confirm six souls.
22 D CONTROL [V.O.]: Six. Understood. Be advised, the board has questions about the Observer.
23 A ¶ The Observer's head turns.
24 A Nobody else moves.
25 D SELENE (to the speaker): Control, he has all clearances.
26 D CONTROL [V.O.]: It's not about clearances.
27 D SELENE: Then what is it about?
28 A ¶ A long silence.
29 A Static.
30 D CONTROL [V.O.]: He was registered dead in 2091.
31 A ¶ Every head turns toward the Observer.
32 A He smiles, an old, courteous smile, and stands, smoothing his badge.
33 D THE OBSERVER: It was a clerical error.
34 D SELENE (softly): Of course it was.
35 A ¶ Ramiro rises.
36 A Cassandra rises.
37 A Yuki drops her pen.
38 A Bodhi steps out from the panel and wipes his hands, slowly, on his trousers.
39 D THE OBSERVER: I am sorry to have worried you. I am here only to watch.
40 D SELENE: Watch what?
41 D THE OBSERVER: The part that comes after you.
42 A ¶ Outside, the first thin line of storm cloud crosses the red horizon.

### SCENE s01265 | INT. PAWNSHOP - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE MARLOWE-DIAZ, SOLOMON ABRAMS, TIPPER JOHNSON, CLEO, DUBOIS, VICTOR STANHOPE
1 A ¶ Cluttered shelves.
2 A Guitars hang from the ceiling.
3 A A glass counter.
4 A A cage separates the till.
5 A ¶ DETECTIVE MARLOWE-DIAZ (40s, rumpled raincoat) leans on the counter.
6 A Behind it, the owner, SOLOMON ABRAMS (60s, green eyeshade), polishes a watch.
7 A By the guitars stands TIPPER JOHNSON (20s, nervous, hands in his pockets).
8 A In the corner, a woman in a red scarf, CLEOPATRA "CLEO" DUBOIS (30s, calm), examines a ring.
9 D DET. MARLOWE-DIAZ: Evening, Solomon.
10 D SOLOMON: Detective.
11 D DET. MARLOWE-DIAZ: Heard you got a delivery.
12 D SOLOMON: I get many.
13 A ¶ The door chimes.
14 A A tall man in a trench coat enters, dripping: VICTOR STANHOPE (50s, silver hair, soft hat).
15 A He tips the hat to nobody.
16 D VICTOR: Gentlemen. Lady.
17 D MARLOWE-DIAZ: Mr. Stanhope. Out late.
18 D VICTOR: Always.
19 D TIPPER (whispering): That's him.
20 A ¶ Cleo sets down the ring.
21 A Solomon sets down the watch.
22 A Nobody moves.
23 D MARLOWE-DIAZ (quietly): Tipper. Who?
24 D TIPPER: Nobody.
25 D CLEO (to Victor): You're early.
26 D VICTOR: So are you.
27 A ¶ Marlowe-Diaz looks from one to the other, then at the safe behind the counter.
28 A The lock gleams.
29 T FADE OUT.

### SCENE s00079 | INT. DIALYSIS UNIT - NIGHT
Detected names (may be incomplete or contain aliases): HELENE MARCHETTI, ROSALIND AKINS
1 A ¶ A long, low room of reclining chairs and blinking machines.
2 A Most of the beds are empty.
3 A A rain-streaked window frames the parking lot.
4 A The machines hum a single note, patient as insects.
5 A ¶ DR. HELENE MARCHETTI (50s, grey at the temples, scrubs worn soft with washing) pulls a stool beside the last occupied chair.
6 A ROSALIND AKINS (70s, shawl, a library paperback open on her lap) does not look up from her page.
7 A Blood moves slow and dark through the tubing between her arm and the machine.
8 A ¶ She turns a page.
9 A She is not reading it.
10 D HELENE: How's the pressure?
11 D ROSALIND: You tell me.
12 A ¶ Helene checks the monitor.
13 A Taps the screen.
14 A Writes nothing.
15 D HELENE: Good enough.
16 D ROSALIND: Mm.
17 A ¶ The machine ticks.
18 A Helene folds her hands in her lap, unfolds them.
19 A She looks at the paperback.
20 D HELENE: Is it any good?
21 D ROSALIND: Third time through.
22 D HELENE: That's a yes, then.
23 A ¶ Rosalind closes the book on her finger.
24 A She looks, at last, at the doctor.
25 D ROSALIND: You've got your father's habit.
26 D HELENE: Which one?
27 D ROSALIND: Asking the thing next to the thing.
28 A ¶ Helene does not answer.
29 A A nurse's cart rattles somewhere beyond the glass.
30 A In the pause, both of them reach for the call button at the same moment, hands touching on the plastic.
31 A They pull back.
32 D HELENE: I'll get it. ROSALIND ^I'll get it.
33 A ¶ Neither moves.
34 A The machine counts down another minute.
35 A Rosalind opens the book again, and Helene, after a moment, takes it gently from her hands, finds the place, and begins to read aloud, badly, in a low voice, to no one in particular.

### SCENE s01420 | INT. UNCLAIMED UMBRELLA DEPOT - TRANSIT LOST PROPERTY BASEMENT - DAY
Detected names (may be incomplete or contain aliases): DELPHINE OKONKWO-REYES, BARNABY QUILL, TOMOKO ARAI, GUS PRZYBYLSKI, MEERA SUNDARAM-HOLT
1 A ¶ Eleven thousand umbrellas hang from the ceiling pipes like a congregation of sleeping bats, each tagged, each waiting for an owner who stopped believing in them years ago.
2 A Fluorescent tubes hum a half-tone flat.
3 A ¶ DELPHINE OKONKWO-REYES (50s, silver bob, a cardigan buttoned one hole too high) pours tea from a thermos into five paper cups with the care of a priestess.
4 A The cups match.
5 A Nothing else in the room does.
6 A ¶ BARNABY QUILL (40s, rumpled, a man who irons only the collar) sits on an overturned crate, polishing a single brass umbrella handle that no one has asked him to polish.
7 A ¶ TOMOKO ARAI (30s, sharp-eyed, hair pinned with a pencil) tallies index cards into stacks.
8 A The stacks are very straight.
9 A ¶ GUS PRZYBYLSKI (60s, broad, a retired bus driver who took this job "for the quiet") winds a wall clock that has not told the right time since March.
10 A ¶ MEERA SUNDARAM-HOLT (20s, the newest, lanyard still stiff) holds her cup with both hands and does not drink.
11 A ¶ Delphine sets the thermos down.
12 A Squares it to the table edge.
13 A Smiles at nobody.
14 D DELPHINE: Lovely to have everyone down here at once. Truly. It's been, what, since the Christmas lunch?
15 D BARNABY: The lunch was in the stairwell.
16 D DELPHINE: Cozy, though.
17 D TOMOKO: Four hundred and twelve intake forms this month. Up nine percent.
18 D DELPHINE: Nine! Wonderful. People keep losing things. It's the one thing we can count on.
19 D GUS: Count on. Right.
20 D DELPHINE: Gus, you look well. Is that a new coat?
21 D GUS: Nineteen ninety-eight.
22 D DELPHINE: Timeless.
23 D MEERA: Is there an agenda?
24 D DELPHINE: Agenda. No, no. Just a catch-up. We never catch up.
25 D BARNABY: Delphine, the elevator has been shut off since eight this morning.
26 D DELPHINE: Maintenance.
27 D BARNABY: Nobody told maintenance, I asked.
28 D DELPHINE: Then it's a surprise maintenance.
29 D TOMOKO: I've never seen the upstairs door locked from the outside.
30 D DELPHINE: Draughts. The building has draughts.
31 D GUS: Nice tea.
32 D DELPHINE: Oolong. Someone brought it in. I think it was left behind by a customer and nobody claimed it, so, technically, ours.
33 D MEERA: That's in the policy. Ninety days, then disposal or reassignment.
34 D DELPHINE: Meera knows the policy. Meera is going to go far.
35 D MEERA: Is that a promotion?
36 D DELPHINE: It's an observation.
37 D BARNABY: What's in the folder?
38 D DELPHINE: Which folder?
39 D BARNABY: The one under the thermos. Cream. Five tabs. Five names.
40 D DELPHINE: Those are the, ah, the umbrella reconciliation sheets.
41 D TOMOKO: I do the reconciliation sheets. They're green.
42 D DELPHINE: New format.
43 D GUS: They've got our names on the tabs.
44 D DELPHINE: Because we're all, you know, reconciled.
45 D BARNABY: Delphine.
46 D DELPHINE: Barnaby.
47 D BARNABY: How long have you had the cups?
48 D DELPHINE: What?
49 D BARNABY: Five matching cups. This building has never owned five matching anything.
50 D DELPHINE: I wanted it to be nice.
51 D TOMOKO: For what?
52 D DELPHINE: For whatever it is.
53 D GUS: Ninety days, then disposal or reassignment.
54 D MEERA: I said that.
55 D GUS: I know you did, love.
56 A ¶ Delphine slides the cream folder across the table.
57 A Her hand does not shake.
58 A Her thermos lid, left unscrewed, rolls in a slow half-circle and drops off the edge.
59 A ¶ Nobody picks it up.
60 A Above them, one umbrella turns on its hook in air from no vent, and every tag along the pipe begins, softly, to tick.

### SCENE s00970 | INT. DROWNED CATHEDRAL BELFRY - TIDE HOUR
Detected names (may be incomplete or contain aliases): ORSOLYA, KEZIAH
1 A ¶ Green water laps the third stair.
2 A Moonlight through broken tracery.
3 A One huge bell, furred with barnacles.
4 A ¶ ORSOLYA (30s, salt-white braid, bone-needle at her belt) crouches on a beam.
5 A Soaked.
6 A Grinning.
7 A ¶ KEZIAH (20s, half-fox ears, patched coat) hauls himself through the window.
8 A Drips everywhere.
9 D ORSOLYA: You're late, Kez.
10 D KEZIAH: The tide was early.
11 D ORSOLYA: The tide is never early. You were.
12 A ¶ He lifts a lantern.
13 A Inside, a trapped blue flame.
14 D KEZIAH: Got it. Moon-ember. Off the sleeping tax-collector himself.
15 A ¶ She snatches it.
16 A Laughs.
17 A Kisses his forehead.
18 D ORSOLYA: Kezi. You beautiful thief.
19 A ¶ The bell hums.
20 A Low.
21 A Wrong.
22 D KEZIAH: Orsolya. That's not us.
23 A ¶ She freezes.
24 A So does he.
25 A ¶ Water rises.
26 A Fast.
27 A Knee-deep.
28 A Waist.
29 D ORSOLYA: Take the rope.
30 D KEZIAH: Not without you!
31 A ¶ She shoves him.
32 A Hard.
33 A He grabs the bell-rope, swings, slams against stone.
34 A Hisses.
35 D ORSOLYA: Ring it!
36 D KEZIAH: It'll wake the whole drowned choir!
37 D ORSOLYA: Better them than the tide!
38 A ¶ He hesitates.
39 A Then pulls.
40 A ¶ DONG.
41 A The sound rolls out like thunder under glass.
42 A The water stops.
43 A Shivers.
44 A Retreats.
45 A ¶ Silence.
46 A They stare at each other.
47 A Then both burst out laughing.
48 D KEZIAH: Never again.
49 D ORSOLYA: Liar.
50 A ¶ Somewhere below, a choir begins to sing.
51 A Off-key.
52 A Furious.
53 A ¶ She grabs his hand.
54 A They run.

### SCENE s00716 | INT. PASCAL HOUSE - ATTIC - AFTERNOON
Detected names (may be incomplete or contain aliases): LEONA, PASCAL
1 A ¶ Slanted ceiling.
2 A Cardboard boxes marked in a dead man's handwriting.
3 A A mannequin with a hat on it.
4 A A small round window, dusty light.
5 A ¶ LEONA, 40s, in jeans, kneels over a trunk.
6 A Her brother PASCAL, 40s, in a work jacket, stands at the top of the stairs with his arms folded.
7 D LEONA: You took Dad's watch.
8 D PASCAL: He gave it to me.
9 D LEONA: In the hospital. When he couldn't talk.
10 D PASCAL: He pointed.
11 D LEONA: At you. Or at the window.
12 D PASCAL: At me.
13 A ¶ Leona lifts a sweater from the trunk.
14 A A box of old photographs falls out.
15 A She catches it.
16 A Pascal takes a step forward, both hands out, and they hold the box between them for a moment, each with a grip on a corner.
17 D PASCAL [CONT'D]: Give me that.
18 D LEONA: You give it.
19 A ¶ They tug.
20 A The lid pops.
21 A Photographs scatter across the floor, and both stop, crouch, and begin gathering them without a word.
22 D LEONA [CONT'D]: This one. Do you remember?
23 D PASCAL: Don't.
24 D LEONA: You were nine. You had that haircut.
25 D PASCAL: He cut it himself, with kitchen scissors.
26 D LEONA: You cried for a week.
27 D PASCAL: I did not.
28 D LEONA: You hid in the car.
29 D PASCAL: Okay. I hid in the car.
30 A ¶ She hands him the photograph.
31 A He studies it for a long time.
32 A His thumb moves over the face.
33 D PASCAL [CONT'D]: Take the watch.
34 D LEONA: I don't want the watch.
35 D PASCAL: Then why are we here?
36 D LEONA: Because I don't want to be here alone.
37 A ¶ He sits on the trunk.
38 A She sits beside him, and they look at the photographs spread across the boards like leaves.

### SCENE s00088 | EXT. WHALE-RIB BRIDGE TOLLHOUSE - DUSK
Detected names (may be incomplete or contain aliases): BRYNMOR ASHDOWN, TALLIS WREN
1 A ¶ A bridge arches across a canyon of drifting violet fog.
2 A Its span is made of the ribs of some ancient leviathan, bleached bone-white and lashed together with silver rope.
3 A At its near end stands a crooked tollhouse of driftwood and green glass, a single lantern burning in its window.
4 A ¶ BRYNMOR ASHDOWN (60s, weathered, long grey coat, a ring of keys at his belt) sits on the tollhouse step, whittling.
5 A A kettle hisses on a tiny stove at his feet.
6 A The fog below breathes in and out like a sleeping animal.
7 A ¶ Far down the bridge, a figure appears, a shape resolving from the mist, leaning on a staff.
8 A ¶ TALLIS WREN (30s, pilgrim's cloak, boots patched with cloth) walks slowly, the bone ringing softly under each step.
9 A He reaches the step and stops.
10 A He does not look at Brynmor's face.
11 D TALLIS: Is this the toll?
12 D BRYNMOR: It is a toll.
13 D TALLIS: What does he ask?
14 D BRYNMOR: A true thing. Not a large one.
15 A ¶ Tallis lowers his hood.
16 A His beard is young, his eyes tired.
17 A He considers.
18 D TALLIS: I am afraid I will not finish.
19 D BRYNMOR: Finish what?
20 D TALLIS: Anything.
21 A ¶ Brynmor puts down the knife.
22 A He pours tea into two tin cups, his hands slow and steady, and hands one up.
23 D BRYNMOR: That will do.
24 D TALLIS: It was not much.
25 D BRYNMOR: It was true. He is not greedy.
26 A ¶ Tallis takes the cup.
27 A The steam drifts between them.
28 A Behind them the fog sighs, and one of the ribs hums a long, low note in the rising wind.
29 D TALLIS: How many cross?
30 D BRYNMOR: Fewer than cross back.
31 A ¶ Tallis drinks.
32 A His eyes close.
33 A When he opens them, the lantern has brightened, and the far end of the bridge, which was dark, shows one small light.
34 D BRYNMOR [CONT'D]: Go on. He is waiting. He is not so fierce.
35 D TALLIS (setting down the cup): Thank you.
36 D BRYNMOR: Mind the fourth rib. It sings when it is lonely.

### SCENE s01817 | EXT. FERRY LANDING - MISSOURI RIVER - NOON
Detected names (may be incomplete or contain aliases): ISAAC DELAROSA, TOBY, WEATHERBY, ETHELINDA PRIEST, HOLLOWAY STROUD
1 A ¶ A flat-bottomed ferry tied to a splintered dock.
2 A Mud, cottonwoods, a warped sign: CROSSING 5 CENTS.
3 A Heat shimmers off the water.
4 A ¶ ISAAC DELAROSA, fifties, ferryman, sits on a barrel whittling a peg.
5 A TOBIAS "TOBY" WEATHERBY, twenties, a cattle driver, leans on a hitching post and fans himself with his hat.
6 A Behind them, MRS. ETHELINDA PRIEST, sixty, in black bombazine, waits with a hatbox on her knee.
7 A A silent drifter, HOLLOWAY STROUD, forties, sits on the edge of the dock with his boots hanging over the water.
8 D TOBY (to the group): Anyone else think this river's been getting wider?
9 D ISAAC: It's the same river.
10 D TOBY: I swear it's wider.
11 D MRS. PRIEST (to Isaac): Sir, when does the ferry depart?
12 D ISAAC: When it's loaded.
13 D MRS. PRIEST: It is loaded.
14 D ISAAC: It has one passenger and a hatbox.
15 D MRS. PRIEST: Then I shall speak with the other passengers.
16 A ¶ She turns to Toby and Holloway.
17 A Toby grins, puts on his hat.
18 A Holloway doesn't look up.
19 D HOLLOWAY (muttering): Won't be long now.
20 A ¶ Isaac sets down his knife.
21 A Toby's grin fades.
22 A Mrs. Priest tilts her head.
23 D MRS. PRIEST: Did you say something, sir?
24 D HOLLOWAY: Talking to the river, ma'am.
25 A ¶ The sound of hooves comes from the bluff.
26 A Three riders appear on the ridge, silhouetted against the sun.
27 A Toby straightens.
28 A Isaac stands.
29 A Holloway rises slowly, brushing off his knees.
30 D TOBY (to the group): Folks, I believe we have company.
31 D ISAAC: Mrs. Priest, get behind the barrel.
32 D MRS. PRIEST: I will do nothing of the sort.
33 D HOLLOWAY: Ma'am.
34 A ¶ She looks at him.
35 A He opens his coat.
36 A Under it, a deputy's badge.
37 D HOLLOWAY [CONT'D]: That'll be Ned Cutler and his boys. I've been waiting on them since Tuesday.
38 A ¶ Isaac and Toby stare at him.
39 A Mrs. Priest sets the hatbox on the dock, opens it, and lifts out a short-barreled revolver.
40 D MRS. PRIEST (coolly): I, too, have been waiting.
41 A ¶ The riders start down the bluff.
42 A Toby dives behind the post, Isaac drops behind the barrel, Holloway draws his pistol, and Mrs. Priest, with perfect composure, cocks the hammer and steps onto the open dock.

### SCENE s02187 | INT. COUNTRY MANOR - SMALL LIBRARY - EVENING
Detected names (may be incomplete or contain aliases): LORD EDMUND HALLORAN, LADY CATHERINE, CAPTAIN JULIAN ASHBY
1 A ¶ 1815.
2 A Candlelight.
3 A Walnut shelves.
4 A A fire in a marble grate.
5 A A chessboard stands mid-game on a table between two armchairs.
6 A ¶ LORD EDMUND HALLORAN (50s, immaculate, gout-stiffened) sits with a glass of port, one leg propped on a stool.
7 A Opposite him, his daughter LADY CATHERINE (20s, plain gown, unreadable) studies the board.
8 A Neither has spoken in some time.
9 A ¶ She moves a bishop.
10 A He looks at it.
11 A He moves a pawn.
12 A She smiles, almost, and shakes her head.
13 D LORD EDMUND: You have taken a long time to learn this game.
14 D LADY CATHERINE: I had a patient teacher.
15 D LORD EDMUND: I was not patient.
16 D LADY CATHERINE: No. But you were thorough.
17 A ¶ He sips.
18 A She reaches for a knight and holds it, not placing it.
19 D LORD EDMUND: Your mother would not have approved of the match.
20 D LADY CATHERINE: Mother would not have approved of me playing at all.
21 D LORD EDMUND: True.
22 A ¶ She sets the knight down.
23 A He studies it for a long time.
24 A The fire pops.
25 A A clock ticks somewhere in the dark.
26 A ¶ The door opens quietly.
27 A A tall young man in a mud-spattered riding coat steps in, hat in his hand.
28 A This is CAPTAIN JULIAN ASHBY (20s, officer, tired eyes, a faint limp).
29 A He waits at the threshold.
30 D LORD EDMUND [CONT'D] (without turning): Captain.
31 D ASHBY: My lord. Lady Catherine.
32 A ¶ She does not look up.
33 A Her hand tightens on a pawn until her knuckles pale.
34 D LORD EDMUND: You were expected a week ago.
35 D ASHBY: The roads were washed out, my lord. And there was a delay.
36 D LORD EDMUND: A delay.
37 D ASHBY: At Waterloo.
38 A ¶ The old man sets down his glass.
39 A It clinks on the board, and a rook topples.
40 A Catherine catches it before it rolls off the table.
41 D LORD EDMUND: Sit.
42 A ¶ Ashby crosses the room, wincing, and lowers himself onto a stool.
43 A Catherine places the rook back on its square.
44 A Her hand is perfectly steady.
45 A Her eyes are not.
46 D LADY CATHERINE: Check, I think.
47 D LORD EDMUND (quietly): So it is.

### SCENE s00480 | INT. HIGH SCHOOL GYMNASIUM - WRESTLING WEIGH-IN - MORNING
Detected names (may be incomplete or contain aliases): COACH ANTONIA BELLWETHER, DEX, MAHLER, ZAVALA, ASSISTANT, PRIYA MENON, RAMÓN
1 A ¶ Folding tables, a digital scale on a plywood riser, a banner for the Regional Qualifier.
2 A Bleachers half pulled out.
3 A The smell of floor wax and cut-up oranges.
4 A ¶ COACH ANTONIA BELLWETHER (50s, track jacket, stopwatch on a lanyard) stands beside the scale with a clipboard.
5 A Calm.
6 A Her whistle hangs unused.
7 A ¶ DEXTER "DEX" MAHLER (17, 132 pounds on a good day, hoodie soaked through) waits in line in his socks.
8 A He's been running in trash bags since five a.m.
9 A ¶ OFFICIAL RAMÓN ZAVALA (60s, striped shirt, reading glasses low) hunches over the scale display.
10 A Behind him, a young ASSISTANT, PRIYA MENON (20s, volunteer lanyard), writes weights in a ledger.
11 D RAMÓN: Next.
12 A ¶ Dex steps up.
13 A The scale hums.
14 A The digital readout flickers.
15 D RAMÓN [CONT'D]: One thirty-one point six.
16 D PRIYA: Pass.
17 A ¶ Coach Bellwether nods.
18 A She doesn't smile.
19 A She writes a tick mark.
20 D DEX: Thanks.
21 A ¶ He steps down.
22 A His legs are slightly wobbly.
23 A Bellwether hands him a banana without looking.
24 D BELLWETHER: Eat that slow. Drink the water slow. You wrestle at two.
25 D DEX: Yes, Coach.
26 D BELLWETHER: Sit.
27 A ¶ He sits on the bottom bleacher.
28 A Peels the banana.
29 A Eats a quarter of it.
30 A Closes his eyes.
31 A ¶ Priya turns a page.
32 A Ramón wipes the scale platform with a towel.
33 A Bellwether crosses to the table and pours coffee into a paper cup.
34 D PRIYA (low): He looks good.
35 D BELLWETHER: He looks like a kid who hasn't had a meal in four days.
36 D PRIYA: He made weight.
37 D BELLWETHER: He did.
38 A ¶ She sips.
39 A She watches Dex across the gym, and for a long moment she is very still.
40 D BELLWETHER [CONT'D]: Ramón. Can I see the scale certification?
41 D RAMÓN: It's on the wall.
42 D BELLWETHER: I'd like to see it. Please.
43 A ¶ Ramón looks at her over his glasses.
44 A He takes a laminated card from a clip on the table and hands it over.
45 A Bellwether reads it.
46 A Reads the date.
47 A Her thumb pauses on the line.
48 D BELLWETHER [CONT'D]: Expired in August.
49 D RAMÓN: That's a typo.
50 D BELLWETHER: Is it.
51 D PRIYA: Coach, I think the district renewed it. I can check.
52 D BELLWETHER: Do.
53 A ¶ Priya hurries out.
54 A The gym is very quiet.
55 A In the bleachers, Dex has opened his eyes.
56 A He watches the coach.
57 D DEX: Coach?
58 D BELLWETHER: Eat your banana.
59 D DEX: What's wrong?
60 D BELLWETHER: Eat.
61 A ¶ She walks to the scale and steps onto the platform in her shoes.
62 A The readout flashes: 148.
63 A She steps off.
64 A Takes a gym bag from beneath the table.
65 A Sets it on the platform.
66 A Zero.
67 A She sets a ten-pound weight from her pocket on top.
68 A The scale reads 3.
69 A ¶ Ramón's face does not change.
70 D BELLWETHER [CONT'D]: Three.
71 D RAMÓN: It drifts.
72 D BELLWETHER: It drifts by seven pounds. In whose favor, Ramón?
73 D RAMÓN: Coach, I'm just the official.
74 D BELLWETHER: You are the official who has been rejecting my kids since September.
75 A ¶ Dex stands, the banana forgotten in his fist.
76 D DEX: So I didn't make weight?
77 D BELLWETHER: You made weight. You made it four times over. Your actual weight is a hundred and thirty-eight.
78 D DEX: That's...
79 D BELLWETHER: Over. Over by six. You've been under-reported all season on this scale and over-reported on that one.
80 A ¶ She takes the clipboard and tucks it under her arm.
81 D BELLWETHER [CONT'D]: Priya is going to come back with a form. And you will not sign anything, Ramón, until a state official arrives.
82 A ¶ Priya re-enters at the door.
83 A She stops.
84 A She sees the three of them frozen in the long light from the high windows.
85 D PRIYA: It was renewed.
86 D BELLWETHER: I know.
87 D PRIYA (quietly): Coach, the district never renewed it. I called. The man said you'd been asking since August.
88 A ¶ Ramón sits down on the riser.
89 A The scale behind him gives a soft electronic chime, as if politely clearing its throat.

### SCENE s02475_0 | EXT. HOSPITAL ROOFTOP HELIPAD - NIGHT
Detected names (may be incomplete or contain aliases): NASRIN FAROUQ, BEA OYELARAN, TOMMASO RINALDI, YOUNG MAN
1 A ¶ Wind pulls at orange windsocks.
2 A Rotor noise rises.
3 A A helicopter settles on the pad in a storm of grit.
4 A ¶ DR. NASRIN FAROUQ, 40s, scrubs under a puffer jacket, crouches low beside a gurney.
5 A BEA OYELARAN, 30s, charge nurse, grips the rail.
6 A Both squint into the downwash.
7 A ¶ Doors slide open.
8 A TOMMASO RINALDI, 30s, flight medic, jumps out with a monitor in his arms, shouting over the blades.
9 D TOMMASO: Male, thirties, fall from scaffold. Two stories. BP seventy over forty, GCS ten.
10 D NASRIN: Any ID?
11 D TOMMASO: Nothing on him. Nobody came with him.
12 A ¶ They lift the patient out.
13 A A YOUNG MAN, 30s, pale, dust in his beard, eyes half-open, strapped to the board.
14 A Bea runs beside the gurney.
15 D BEA: Sir. Sir, can you hear me?
16 A ¶ The young man's lips move.
17 A Bea leans down.
18 D YOUNG MAN (faint): Where's my boy.
19 D BEA: Who's your boy?
20 D YOUNG MAN: Waiting. At the site gate.
21 D NASRIN: What's your name, sir?
22 D YOUNG MAN: Desmond. Desmond Achebe.

### SCENE s01312 | INT. SCHOOL BUS - NIGHT
Detected names (may be incomplete or contain aliases): YASMINE HADDAD, MOM, COACH TEO ABARA, COACH
1 A ¶ Empty seats.
2 A A single dome light.
3 A The bus idles at the curb of a dark football field.
4 A Rain streaks the windows.
5 A ¶ YASMINE HADDAD, 17, graduation gown over a hoodie, sits alone in the back, knees up, a diploma cover clutched in both hands.
6 A She isn't crying.
7 A She just can't leave.
8 A ¶ At the front, the driver's seat is empty.
9 A A phone on the dashboard buzzes.
10 A She ignores it.
11 A ¶ It buzzes again.
12 A She sighs, crawls up the aisle, and answers.
13 D YASMINE: Hello?
14 D MOM [V.O.] (over the phone): Habibti, where are you? Everyone's at the restaurant.
15 D YASMINE: I'm on the bus.
16 D MOM [V.O.]: What bus?
17 D YASMINE: The school bus. It's still here.
18 D MOM [V.O.]: Why?
19 D YASMINE: I don't know. I didn't want to go home yet.
20 D MOM [V.O.]: Is something wrong?
21 D YASMINE: No. Nothing.
22 A ¶ She sets the phone against her cheek.
23 A Footsteps outside.
24 A A shape under an umbrella.
25 A ¶ COACH TEO ABARA, 40s, the driver and gym teacher, climbs the steps, shakes out his umbrella, and freezes.
26 D COACH: Yasmine?
27 D YASMINE: Coach.
28 A ¶ He sets down the umbrella.
29 A Rubs his neck.
30 D COACH: I forgot my keys.
31 D YASMINE: They're on the dash.
32 A ¶ He picks them up.
33 A Doesn't leave.
34 D MOM [V.O.]: Yasmine? Who is that?
35 D YASMINE: Coach Abara, Mama.
36 D MOM [V.O.]: Tell him thank you. Tell him he was very good to you.
37 D YASMINE (to him): She says thank you.
38 D COACH: She's welcome.
39 A ¶ He sits across the aisle.
40 A They listen to rain on the roof.
41 D MOM [V.O.]: Come to the restaurant, habibti. We'll wait.
42 D YASMINE: Okay. Ten minutes.
43 A ¶ She hangs up.
44 A Puts the phone down.
45 A Looks at the empty bus.
46 D YASMINE [CONT'D]: It's smaller than I remembered.
47 D COACH: Everything is.
48 A ¶ She almost smiles.
49 A Stands.
50 A Picks up her diploma cover.
51 D YASMINE: Drive me?
52 A ¶ He nods.
53 A Takes the wheel.
54 A The bus rumbles to life and pulls away.

### SCENE s02136 | INT. BELL TELEPHONE EXCHANGE - SWITCHBOARD ROOM - NIGHT
Detected names (may be incomplete or contain aliases): ETHEL PARKER, MAUDE ABERNATHY-LOWE, HATTIE JOHNSON, MISS CALLOWAY, CALLER
1 A ¶ 1924.
2 A Three rows of operators in headsets, a wall of brass jacks and cords.
3 A After the crisis, the room is loud with quiet.
4 A Rain on the window.
5 A Someone is crying softly.
6 A ¶ ETHEL PARKER, 22, redhead, sits at position four.
7 A MAUDE ABERNATHY-LOWE, 30s, steady hands, position five.
8 A HATTIE JOHNSON, 19, new, position six, red-eyed, rubbing her wrist.
9 A Behind them, MISS CALLOWAY, 50s, supervisor, high collar, paces the line with a clipboard.
10 D ETHEL: Hattie, you did right.
11 D HATTIE: I put through the wrong call, Ethel.
12 D MAUDE: You put through a call at the right time, Hattie. The wrong number got the right warning.
13 D MISS CALLOWAY: Ladies, voices.
14 D ETHEL: Yes, Miss Calloway.
15 A ¶ A light blinks on Hattie's board.
16 A Everyone looks.
17 D MAUDE: Hattie. Plug in.
18 D HATTIE: I can't.
19 D MAUDE: You can.
20 D HATTIE: Maude, I can't.
21 D MISS CALLOWAY: Miss Johnson. Take the call.
22 A ¶ Hattie plugs in.
23 A Her hand trembles.
24 D HATTIE: Number, please.
25 D CALLER [O.S.] (over the line): Hello? Is this the exchange? This is Mrs. Whitmore on Elm Street. The river is up to our porch.
26 D HATTIE: We know, ma'am.
27 D CALLER [O.S.]: The man said to call and tell you the sirens did not sound.
28 D ETHEL (leaning in): They're ringing now, ma'am.
29 D MAUDE: Tell her to take the children upstairs.
30 D HATTIE: Mrs. Whitmore, take the children upstairs.
31 D CALLER [O.S.]: Yes. Yes, we will. Thank you, dear.
32 A ¶ The line goes dead.
33 A Hattie holds her cord a moment.
34 D MISS CALLOWAY (softly, to Hattie): That was well done.
35 D HATTIE: Thank you, Miss Calloway.
36 D ETHEL: Maude, do you think they'll be all right?
37 D MAUDE: Most of them.
38 A ¶ Another light blinks.
39 A Another.
40 A Hattie, Ethel, and Maude plug in together, calm, practiced.
41 A Miss Calloway watches, then lowers her clipboard and, for the first time all night, sits.

### SCENE s02088 | EXT. SALT-LICK STAGE STATION - NEVADA TERRITORY - DAY
Detected names (may be incomplete or contain aliases): OLD CASPER VANDERHOOF, LUPE, ESCOBEDO, JEDEDIAH HOLLOWAY, PRUDENCE LATIMER, WYATT BROOKS, TOMÁS
1 A ¶ A dusty way station with a sagging porch, a hand-pump well, and a corral.
2 A A white salt flat shimmers beyond.
3 A A stagecoach rests with its team unhitched, horses nosing at a lick of gray rock.
4 A ¶ On the porch sits OLD CASPER VANDERHOOF, 70s, in a rocker, whittling.
5 A Beside him, his granddaughter LUPE, 10, dangles bare feet off the boards.
6 A Across the yard the stagecoach driver, TOMÁS ESCOBEDO, 40s, leans against a wheel, hat tipped over his eyes.
7 A A passenger, the preacher JEDEDIAH HOLLOWAY, 50s, stands at the pump filling a canteen.
8 A Inside the open stagecoach door, the passenger MRS. PRUDENCE LATIMER, 30s, fans herself with a handkerchief.
9 A At the corral rail, a ranch hand named WYATT BROOKS, 20s, scratches a mule's ear.
10 A ¶ Nobody hurries.
11 A A hawk circles overhead.
12 A Casper's knife shaves a long curl off the stick.
13 A Lupe watches it fall.
14 D LUPE: Grandpa, what's it going to be?
15 D CASPER: A duck.
16 D LUPE: It looks like a spoon.
17 D CASPER: That's a duck in a hurry.
18 A ¶ Tomás pushes up his hat and glances at the sun.
19 A Jedediah finishes with the canteen and pumps the handle twice more just to hear it creak.
20 A Prudence steps down from the coach, shakes the dust from her skirt, and crosses to the porch, handing the handkerchief to Lupe, who wipes her nose and hands it back with great seriousness.
21 A Wyatt gives the mule a last pat and ambles over to join them, thumbs in his belt.
22 D WYATT: Will she be rolling by noon?
23 D TOMÁS: When the horses finish licking.
24 D WYATT: Shame to rush them.
25 D JEDEDIAH: The Lord rested on the seventh day.
26 D TOMÁS: The Lord didn't have a schedule from the railroad.
27 D PRUDENCE (smiling): Then let us rest, gentlemen. I have nowhere I would rather not be.
28 D CASPER: Spoken like a woman who's seen Reno.
29 D PRUDENCE: Twice.
30 A ¶ The hawk drifts lower.
31 A Lupe points.
32 A Everyone looks up.
33 A For a long moment the whole station watches the bird wheel against the bright sky, and then it banks and is gone over the flat.
34 D CASPER: That's a duck, too.
35 D LUPE: It's not.
36 D CASPER: It's a duck in a hurry.

### SCENE s01391 | INT. FARMHOUSE KITCHEN - MORNING
Detected names (may be incomplete or contain aliases): MAMA ROSALIE, TUCKER, BEN, KNOCK, MAN, AMOS
1 A ¶ Pancakes burn.
2 A Smoke curls from the pan.
3 A ¶ MAMA ROSALIE, 40s, dishtowel on her shoulder, flips the pan.
4 A Too late.
5 A Black.
6 D MAMA ROSALIE: Boys! Breakfast!
7 A ¶ Thundering feet.
8 A TUCKER, 10, and BEN, 8, skid in, socks sliding.
9 D TUCKER: It's on fire!
10 D BEN: It's not on fire. It's crispy.
11 D MAMA ROSALIE: Sit.
12 A ¶ They sit.
13 A Tucker pokes a pancake with a fork.
14 A It crunches.
15 A ¶ A KNOCK at the screen door.
16 A Everyone stops.
17 A ¶ A MAN in a rumpled suit stands on the porch, hat in hand, a battered suitcase at his feet.
18 A Forty-ish, kind eyes, sunburned nose.
19 D MAN: Morning, folks.
20 A ¶ Mama Rosalie's face goes slack.
21 D MAMA ROSALIE: Amos?
22 D TUCKER: Who's that?
23 A ¶ The man steps inside.
24 A Sets down the suitcase.
25 D AMOS: Hello, Tuck.
26 A ¶ Tucker slides off his chair.
27 A Edges behind his mother.
28 D BEN: Is that Daddy?
29 A ¶ Amos kneels, arms open.
30 A Ben looks at his mother.
31 A She nods, barely.
32 A He runs.

### SCENE s01307 | INT. HOSPITAL PARKING GARAGE - LEVEL 3 - NIGHT
Detected names (may be incomplete or contain aliases): WOMAN, MAN, PETER, DR. LINDEN
1 A ¶ Concrete.
2 A Humming lights.
3 A A lone sedan with its hazards blinking.
4 A Rain beats on the ramp.
5 A ¶ A WOMAN, 50s, in scrubs and a trench coat, sits on the bumper, face in her hands.
6 A ¶ A MAN, 30s, in a hospital badge lanyard, approaches from the stairwell with two coffees.
7 D MAN: Dr. Linden?
8 D WOMAN: Don't.
9 D MAN: I'm Peter. From the ER. You asked me to come.
10 A ¶ She lifts her head.
11 A Her mascara has run.
12 D WOMAN: I didn't ask you anything.
13 D PETER: You did. Eight minutes ago. Text message.
14 D WOMAN: I don't remember.
15 A ¶ He sets a coffee on the hood.
16 D PETER: You lost the boy in bay six.
17 D DR. LINDEN: I lost the boy in bay six.
18 D PETER: We all did.
19 A ¶ She takes the coffee.
20 A Holds it without drinking.
21 D DR. LINDEN: He was nine.
22 D PETER: I know.
23 D DR. LINDEN: He had a dog named Rocket.
24 D PETER: Dr. Linden...
25 D DR. LINDEN: He told me. While I was putting in the line.
26 A ¶ Peter sits beside her.
27 A Their shoulders touch.
28 A Rain drums on the roof.
29 D PETER: Come back inside. I'll cover your shift.
30 D DR. LINDEN: I can't.
31 D PETER: You can.
32 A ¶ She nods.
33 A Doesn't move.

### SCENE s00487 | INT. BOOKMOBILE - PARKED AT LAKE OVERLOOK - DUSK
Detected names (may be incomplete or contain aliases): MAEVE O'DONNELL-KAUR, SULLY, ADEBAYO
1 A ¶ A converted school bus lined floor to ceiling with paperbacks.
2 A Fairy lights strung along the roof.
3 A A foldout desk by the driver's seat.
4 A Through the windshield: a lake the color of brass.
5 A ¶ MAEVE O'DONNELL-KAUR (30s, librarian, cardigan with a pen in the pocket) stamps a stack of returns.
6 A Fast.
7 A Tidy.
8 A ¶ A knock on the door glass.
9 D SULLY [O.S.] (muffled, outside): You still open?
10 A ¶ The door hisses open.
11 A SULLIVAN "SULLY" ADEBAYO (30s, rain-wet jacket, a duffel on one shoulder) steps up.
12 A He holds a paperback against his chest.
13 D MAEVE: You're eleven years late.
14 D SULLY: That's fair.
15 A ¶ He sets the paperback on the desk.
16 A A dog-eared Neruda.
17 A She looks at the cover and then at him.
18 D MAEVE: That's mine.
19 D SULLY: It is.
20 A ¶ Her phone buzzes on the desk.
21 A She lifts it, stares at the screen, declines the call.
22 A It buzzes again.
23 A ¶ She silences it.
24 A Sully watches the phone go dark.
25 D SULLY: You married.
26 D MAEVE: Seven years in June.
27 D SULLY: Good. That's good.
28 D MAEVE: Don't say good like that.
29 D SULLY: Like what?
30 D MAEVE: Like you're being brave about it.
31 A ¶ He laughs, then stops.
32 A The lake light turns his face gold.
33 D SULLY: I wrote in the margins. Page forty. I never knew how to send it.
34 A ¶ She opens the book.
35 A Page forty.
36 A A line in his handwriting, faded, underlined twice.
37 A She reads.
38 A Her mouth moves slightly, silent.
39 A ¶ The phone buzzes a third time.
40 A She lets it.
41 D MAEVE: It's overdue.
42 D SULLY: How much do I owe?
43 D MAEVE: Eleven years. Fifty cents a day.
44 D SULLY: That's, what, two thousand dollars?
45 D MAEVE: Two thousand and change.
46 D SULLY: I'll pay in installments.
47 A ¶ She closes the book against her chest, the same way he held it.
48 A The fairy lights flicker.
49 A ¶ She picks up the phone.
50 A Holds the power button until the screen goes black.
51 A Then she sits on the edge of the desk, the book in both hands, and does not tell him to leave.

### SCENE s01718 | EXT. LIFEBOAT - OPEN SEA - DUSK
Detected names (may be incomplete or contain aliases): CAPTAIN HILDEGARD VOSBERG, BAXTER NNAMDI, ISOLDE FAIRWEATHER, JASPER LOCKWOOD, PILOT MARCEL DUVALIER
1 A ¶ Gray swells.
2 A A battered lifeboat rides low.
3 A A torn canvas sail sags from a broken oar.
4 A ¶ Four survivors huddle on the thwarts.
5 A CAPTAIN HILDEGARD VOSBERG (60s, oilskins) clutches the tiller, the ship's cook BAXTER NNAMDI (40s) bails with a tin cup while the stewardess ISOLDE FAIRWEATHER (30s) rations the last biscuit into crumbs, and the cabin boy JASPER LOCKWOOD (12) leans against her, shivering.
6 D HILDEGARD: Eyes on the horizon.
7 D BAXTER: There's nothing out there, Captain.
8 D ISOLDE: There's always something.
9 D JASPER: Is that a bird?
10 D BAXTER: It's a gull. Gulls mean land.
11 D HILDEGARD: Or a storm.
12 A ¶ They scan the sky.
13 A A speck wheels and vanishes.
14 A The wind drops.
15 A The boat creaks.
16 A In the silence, a distant drone grows, faint, mechanical.
17 A ¶ A small seaplane skims out of the clouds, banking low over the water.
18 A PILOT MARCEL DUVALIER (30s, leather helmet) leans from the open cockpit, waving a red flag.
19 D ISOLDE: Oh, thank God.
20 D JASPER: They see us!
21 D PILOT (shouting over the engine): Hold your positions! I'm dropping a line!
22 D HILDEGARD (softly): Stay seated. All of you.
23 A ¶ Nobody moves.
24 A Baxter lets the cup slip into the sea.

### SCENE s02489 | INT. STARLIGHT ROLLER RINK - NIGHT
Detected names (may be incomplete or contain aliases): TARIQ OKAFOR-LANE, JOJO, VARGAS, LINDQVIST
1 A ¶ Disco ball.
2 A Carpeted walls.
3 A A faded sign: LAST SKATE.
4 A The speakers play a slow song nobody asked for.
5 A ¶ TARIQ OKAFOR-LANE, 17, rental skates two sizes too big, clings to the rail.
6 A JOSEFINA "JOJO" VARGAS, 17, graceful on her own wheels, skates backward in front of him.
7 A MR. LINDQVIST, 60s, owner, apron over a windbreaker, stacks plastic baskets at the snack counter, listening.
8 D JOJO: You're doing it wrong.
9 D TARIQ: I'm doing it.
10 D JOJO: You're clutching.
11 D TARIQ: It's called balance.
12 D JOJO: It's called terror.
13 A ¶ He lets go.
14 A Windmills.
15 A Grabs the rail again.
16 A Jojo laughs and sails away, spins, comes back.
17 D JOJO [CONT'D]: Come on, Tariq. Last night in the building. Let me see you skate.
18 D TARIQ: It's closing?
19 D JOJO: Mr. Lindqvist sold it. Condos.
20 A ¶ Tariq glances at the counter.
21 A Mr. Lindqvist is wiping a spotless surface.
22 D TARIQ: Why didn't you say?
23 D JOJO: I'm saying.
24 D TARIQ: I mean before.
25 D JOJO: Before, you weren't talking to me.
26 D TARIQ: You weren't talking to me.
27 A ¶ They look at each other.
28 A Disco light slides across their faces.
29 D TARIQ [CONT'D]: I'm sorry, Jo.
30 D JOJO: For what?
31 D TARIQ: For what I said in the cafeteria.
32 D JOJO: Which part?
33 D TARIQ: All of it.
34 A ¶ She skates to him.
35 A Holds out both hands.
36 D JOJO: Come on. Let go of the wall.
37 A ¶ He lets go.
38 A Takes her hands.
39 A She backs away slowly, pulling him across the floor.
40 A He wobbles.
41 A Straightens.
42 D TARIQ: I'm doing it.
43 D JOJO: You're doing it.
44 A ¶ They circle.
45 A Behind them the song fades into a different song.
46 A Mr. Lindqvist dims the lights another notch.
47 D MR. LINDQVIST [O.S.] (calling from the counter): Five more minutes, you two.
48 D JOJO (calling back): Ten, Mr. L!
49 D MR. LINDQVIST [O.S.]: Five!
50 A ¶ Tariq grins.
51 A For a lap, his skating looks almost natural.
52 D TARIQ: Where will you go? After?
53 D JOJO: There's a rink in Eastbrook.
54 D TARIQ: That's forty minutes.
55 D JOJO: I've got a bike.
56 D TARIQ: I haven't.
57 D JOJO: Then borrow one.
58 A ¶ Tariq nods.
59 A The ball spins.
60 A They skate in silence for a long time.
61 D JOJO [CONT'D]: My dad's moving us in June.
62 D TARIQ: Where?
63 D JOJO: Tucson.
64 A ¶ He stumbles.
65 A She catches him.
66 D TARIQ: You were going to tell me?
67 D JOJO: I'm telling you.
68 D TARIQ: Same as the rink.
69 D JOJO: Same as the rink.
70 A ¶ He steadies himself.
71 A They keep circling.
72 A The song ends.
73 A ¶ The overhead lights flicker once, twice.
74 A Mr. Lindqvist's silhouette stands at the switch.
75 D MR. LINDQVIST [O.S.]: That's it, kids.
76 A ¶ Tariq doesn't let go of her hand.
77 D TARIQ: One more lap.
78 D JOJO: Mr. L!
79 D MR. LINDQVIST [O.S.] (a long beat): One more lap.
80 A ¶ He kills the music.
81 A In the silence there is only the soft rumble of two sets of wheels on old boards, going round and round.

### SCENE s00476 | INT. RUINED OPERA HOUSE - STALLS - DAY
Detected names (may be incomplete or contain aliases): SERGEANT OKONKWO, CORPORAL LINDQVIST, PRIVATE BAPTISTE, MEDIC TRAN, WOUNDED SOLDIER, PETRESCU, ACHTERBERG
1 A ¶ Roof gone.
2 A Rain falls on velvet seats.
3 A A chandelier lies shattered across the orchestra pit.
4 A Distant artillery thumps.
5 A ¶ SERGEANT OKONKWO (40s, broad, helmet strap chewed) crouches at the edge of the stage with his rifle.
6 A Hand signals.
7 A Behind him in the stalls, four soldiers go low between the seat rows.
8 A ¶ CORPORAL LINDQVIST (20s, pale, glasses taped at the hinge) scans the balcony.
9 A PRIVATE BAPTISTE (19, carrying the radio) hunches under the pit rail.
10 A MEDIC TRAN (30s, red cross on a torn sleeve) drags a bag across the aisle.
11 A ¶ Okonkwo signals: two fingers, left.
12 A They move.
13 A He moves with them.
14 A ¶ A cough from the stage-right curtain.
15 A ¶ All five freeze.
16 A Rifles swing as one.
17 A ¶ A figure staggers out.
18 A Wounded.
19 A Uniform from the wrong side, no helmet, hands raised, one hand red to the wrist.
20 D WOUNDED SOLDIER (accented, rasping): Please. Please.
21 D OKONKWO: Down! On your knees!
22 A ¶ He drops.
23 A Tran crosses the gap in three strides and tears his sleeve open.
24 A He grips her wrist; she shoves it away.
25 D TRAN: Hold still.
26 D WOUNDED SOLDIER: Petrescu. Mihai Petrescu.
27 D OKONKWO: Where's your unit?
28 D PETRESCU: Gone. Gone. Under the stairs. They are coming for the radio.
29 A ¶ Baptiste hugs the radio set to his chest.
30 A Lindqvist spins toward the exits.
31 A A shell lands somewhere close and plaster rains from the proscenium.
32 A ¶ ACHTERBERG (20s, sniper, scope cap between his teeth) is up in the dress circle, rifle braced on a brass rail.
33 D ACHTERBERG: Movement in the lobby! Boots on marble!
34 D LINDQVIST: How many?
35 D PETRESCU: Twelve. Fifteen. They have a mortar.
36 D OKONKWO: Baptiste, call it in. Tran, he walks or he stays. Lindqvist, left aisle.
37 A ¶ They break in four directions.
38 A Petrescu pulls himself up by the stage rail and Tran props him by the belt.
39 A Together they go, stumbling, toward the pit door.
40 A ¶ A second shell.
41 A The chandelier trembles in the rubble and a single crystal drops, ringing, across the stone.

### SCENE s00650 | INT. PARKING GARAGE ELEVATOR - NIGHT
Detected names (may be incomplete or contain aliases): BRYNJA LARSEN, RUFUS BELLAMY, CALLISTA MOREAU, INTERCOM
1 A ¶ Stopped.
2 A Between floors.
3 A One flickering tube.
4 A Brushed steel, scratched.
5 A ¶ BRYNJA LARSEN, forties, a lawyer's briefcase.
6 A Pressed against the wall.
7 A ¶ RUFUS BELLAMY, fifties, a janitor's jumpsuit.
8 A Mop bucket at his feet.
9 A ¶ CALLISTA MOREAU, twenties, earbuds.
10 A Texting.
11 A No signal.
12 D BRYNJA: Press the button again.
13 D RUFUS: I pressed it.
14 D BRYNJA: Again.
15 A ¶ He does.
16 A Nothing.
17 A The light flickers.
18 D INTERCOM [V.O.] (distorted): Hello? Is someone in the car?
19 D BRYNJA: Yes! Three of us!
20 D INTERCOM [V.O.]: Please remain calm. Maintenance is en route.
21 D CALLISTA: How long?
22 D INTERCOM [V.O.]: Forty minutes.
23 D RUFUS (muttering): Forty minutes.
24 D INTERCOM [V.O.]: Is anyone carrying a bag?
25 A ¶ Brynja's grip tightens on the briefcase.
26 A Rufus glances at it.
27 A Callista looks up from her phone.
28 D CALLISTA: Why?
29 A ¶ The intercom crackles.
30 A Then, very quietly:
31 D INTERCOM [V.O.]: Because the sensor says the car is heavier than it should be.
