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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_opusC/group_13000.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01060 | INT. LUNAR AGRICULTURAL DOME - CAFETERIA - DAY CYCLE
Detected names (may be incomplete or contain aliases): HALCYON PRYCE, TEODORO FALCONE, CHIOMA UDOH, NADEEM ROUSSEAU, COMMANDER BENEDIKT STONE
1 A ¶ A circular canteen under a clear shell.
2 A Earth hangs in the sky like a blue marble.
3 A Long tables of recycled plastic, trays of steaming something.
4 A A hum of pumps from beneath the floor.
5 A ¶ DR. HALCYON PRYCE, 50s, lead agronomist, white coat over coveralls, sits at a central table stirring something green with a spork.
6 A Across from her, TEODORO FALCONE, 40s, mechanic, grease under his nails, eats a protein bar with no pleasure.
7 A CHIOMA UDOH, 30s, hydroponics tech, tablet propped against a water pouch, scrolls a spreadsheet.
8 D HALCYON: Do you taste that?
9 D TEODORO: It's lunch.
10 D HALCYON: It's kale. Mostly.
11 D TEODORO: It's mostly lunch.
12 D CHIOMA: Cycle three yield is down four percent.
13 D HALCYON: Down from what?
14 D CHIOMA: From the last harvest.
15 D HALCYON: That's not a number. That's a mood.
16 D CHIOMA: Four percent is a number.
17 D HALCYON: It depends on who's counting.
18 D TEODORO: I'm counting calories. Mine are low.
19 D HALCYON: Teodoro, you've been quiet this week.
20 D TEODORO: I'm always quiet.
21 D HALCYON: Quiet-quiet or worried-quiet?
22 D TEODORO: Pump seven is making a sound.
23 D HALCYON: What kind of sound?
24 D TEODORO: A mean one.
25 D CHIOMA: Mean how?
26 D TEODORO: Like a dog that hasn't decided yet.
27 D HALCYON: Have you filed a ticket?
28 D TEODORO: I filed three. Maintenance said "scheduled."
29 D HALCYON: When?
30 D TEODORO: Spring.
31 D HALCYON: It's October.
32 D TEODORO: I'm aware.
33 A ¶ A figure appears at the cafeteria entrance.
34 A NADEEM ROUSSEAU, 20s, intern, lanky, glasses sliding down his nose, balances a tray with the posture of someone who has never carried a tray.
35 A He scans the room and heads toward them.
36 D NADEEM: Is this seat taken?
37 D HALCYON: Sit.
38 D NADEEM: Thank you, Doctor.
39 D HALCYON: Halcyon. Dr. is for formal complaints.
40 D NADEEM: Halcyon. Okay.
41 A ¶ He sits.
42 A Opens his mouth.
43 A Closes it.
44 A Opens it again.
45 D NADEEM [CONT'D]: Sorry. I'm new. Today's my second day.
46 D TEODORO: You'll get used to the food.
47 D NADEEM: Is it always this beige?
48 D CHIOMA: Only on days that end in Y.
49 D NADEEM: What do you do here?
50 D CHIOMA: I keep the plants alive. Teodoro keeps the plants' water alive. Halcyon keeps all of us alive.
51 D HALCYON: Aspirationally.
52 D NADEEM: That's a lot of alive.
53 D HALCYON: On a rock with no air, it's the only job.
54 D NADEEM: I read about the bio-loop in school. Water, nutrients, light. Every molecule counted.
55 D HALCYON: And?
56 D NADEEM: It's more beautiful in a textbook.
57 D HALCYON: It's less beautiful in a textbook. The textbook doesn't smell.
58 D TEODORO (muttering): Pump seven.
59 D NADEEM: Sorry?
60 D CHIOMA: Don't. He'll tell you for an hour.
61 D TEODORO: It's a good story.
62 D CHIOMA: It's a pump.
63 D TEODORO: It's a pump with a personality.
64 D NADEEM: I like pumps.
65 D TEODORO (looking up): Kid, you're hired.
66 D HALCYON: He's already hired.
67 D TEODORO: Then you're promoted.
68 D NADEEM: To what?
69 D TEODORO: To the person who gets to listen.
70 D CHIOMA: Good luck.
71 A ¶ COMMANDER BENEDIKT STONE, 60s, dome administrator, cane tapping, pauses at the end of their table with a tray of nothing but coffee.
72 D BENEDIKT: Dr. Pryce. Mr. Falcone. Is this the new hire?
73 D NADEEM: Yes, sir.
74 D BENEDIKT: Welcome to the Moon. Try not to break it.
75 A ¶ He moves on.
76 A Nadeem laughs, uncertain.
77 A He picks up his spork and tastes the green stuff.
78 A His face does something complicated.
79 D NADEEM: That's really kale.
80 D HALCYON: Told you.
81 A ¶ They eat.
82 A Pumps hum below.
83 A Overhead, Earth turns slowly, blue and white and very far away.

### SCENE s00007 | INT. BOWLING ALLEY - AFTER HOURS - NIGHT
Detected names (may be incomplete or contain aliases): LUCKY STRIKE LANES, ROSALIND OKONKWO-HART, DEVANTE, PEARL ADEYEMI
1 A ¶ Dead neon.
2 A Sixteen lanes.
3 A The smell of old shoe spray and fryer oil.
4 A ¶ A banner over the counter, curling at one corner: LUCKY STRIKE LANES - SINCE 1974.
5 A Beneath it, a handwritten sign: CLOSED FOR GOOD.
6 A ¶ Cardboard boxes line the shoe counter.
7 A A radio plays low, a ballgame, nobody listening.
8 A ¶ ROSALIND OKONKWO-HART (40s, tired eyes, her late father's cardigan two sizes too big) wraps trophies in newspaper.
9 A Methodical.
10 A Careful.
11 A Every one gets its own page.
12 A ¶ Her brother DEVANTE (30s, leather jacket, restless hands) slouches against lane nine, flicking the lever on the ball return.
13 A Click.
14 A Click.
15 A Click.
16 A ¶ Between them, on a stool: MRS. PEARL ADEYEMI (70s, church hat, a purse held like a shield).
17 A Their father's oldest friend.
18 A She hasn't taken her coat off.
19 A ¶ Click.
20 A Click.
21 D ROSALIND: Stop that.
22 D DEVANTE: It's a lever.
23 D ROSALIND: It's loud.
24 A ¶ He stops.
25 A Picks at a splinter on the rail.
26 A Rosalind turns a trophy over in her hands.
27 A A bowler, gold paint chipped off one knee.
28 D PEARL: He bowled a 290 once.
29 D ROSALIND: I know.
30 D PEARL: Nineteen eighty-eight.
31 D DEVANTE: It was a 289.
32 D PEARL: He told me 290.
33 D DEVANTE: He rounded up.
34 D PEARL: He did not round.
35 A ¶ Rosalind sets the trophy in a box.
36 A Takes another.
37 A Wraps.
38 A The paper crackles.
39 D DEVANTE (to Rosalind): You're keeping those?
40 D ROSALIND: They're his.
41 D DEVANTE: They're junk.
42 D ROSALIND: Then leave them.
43 D DEVANTE: I'm not leaving anything. I'm just asking.
44 A ¶ He kicks a bowling ball.
45 A It rolls an inch, rocks back.
46 A He stares at it.
47 D PEARL: The buyer's coming at nine?
48 D ROSALIND: Eight.
49 D PEARL: He's turning it into a gym.
50 D ROSALIND: I know.
51 D PEARL: A gym.
52 D DEVANTE: Pearl.
53 D PEARL: I'm only saying.
54 A ¶ Devante crosses to the pin deck.
55 A Climbs over the gutter rail, and walks down lane nine toward the pins.
56 A Rosalind looks up.
57 A Pearl looks up.
58 A He walks the entire length, boots loud on the wood, and stops at the foul line, back to them.
59 D ROSALIND: Don't scuff the boards.
60 D DEVANTE: They're getting torn out.
61 D ROSALIND: Still.
62 A ¶ He steps off the lane.
63 A Picks up a ball.
64 A Weighs it.
65 A Sets it down.
66 A ¶ Rosalind tapes a box shut.
67 A The tape shrieks.
68 A Pearl flinches.
69 D PEARL: He always said you'd be the one to close up.
70 A ¶ Rosalind's hands stop.
71 A Then keep going.
72 D ROSALIND: I'm not closing anything. The bank is.
73 D PEARL: You know what I mean.
74 D ROSALIND: I don't.
75 A ¶ Devante turns.
76 A Pearl turns.
77 A Rosalind lifts the box, struggling with its weight.
78 A Devante and Pearl both step forward, then both freeze.
79 A Rosalind sets the box down herself.
80 D DEVANTE: Let me.
81 D ROSALIND: I've got it.
82 D DEVANTE: You'll hurt your back.
83 D ROSALIND: I've hurt it before.
84 A ¶ She lifts.
85 A Carries it to the door.
86 A Sets it on the step.
87 A Cold air floods the lanes.
88 D PEARL: Rosalind, honey, your coat.
89 D ROSALIND: I'm fine.
90 D PEARL: You're shaking.
91 D ROSALIND: It's cold.
92 A ¶ Pearl reaches into her purse.
93 A Pulls out a folded bowling shirt, faded green, a name embroidered on the pocket: CHUKS.
94 A ¶ She holds it out.
95 A Rosalind doesn't take it.
96 D DEVANTE (quiet): Where'd you get that?
97 D PEARL: He left it in my car. Years ago.
98 A ¶ Silence.
99 A The radio crackles: a crowd roars somewhere far away.
100 A ¶ Devante takes the shirt.
101 A Looks at it.
102 A Folds it once more, carefully, along the same creases.
103 A Walks to the box by the door.
104 A Lays it on top.
105 A ¶ He doesn't say anything.
106 A Neither does Rosalind.
107 A She tapes the flaps shut.
108 A ¶ Pearl finally stands.
109 A Buttons her coat.
110 D PEARL [CONT'D]: Eight o'clock, you said.
111 D ROSALIND: Eight.
112 D PEARL: I'll bring coffee.
113 A ¶ She goes.
114 A The door sighs closed behind her.
115 A ¶ Devante and Rosalind alone.
116 A The radio talks to nobody.
117 A ¶ He crosses to the counter.
118 A Picks up the last trophy.
119 A Offers it to her, base first.
120 A ¶ She takes it.
121 A Wraps it.
122 A Her page is today's sports section.
123 D DEVANTE: Which one's this?
124 D ROSALIND: Doubles. Nineteen ninety-one. With Mom.
125 D DEVANTE: Huh.
126 A ¶ He sets his hand on the box lid.
127 A Leaves it there a moment.
128 A ¶ Then he reaches up and kills the radio.
129 A ¶ The alley goes quiet.
130 A Only the hum of the cooler.
131 A Only the paper.

### SCENE s01049 | INT. JURY ROOM - FLOODLIT TENT - NIGHT
Detected names (may be incomplete or contain aliases): GLORIA ACHTERBERG, DEEZ, PRUITT, MIN-JUN HAN
1 A ¶ A federal courthouse flattened by a hurricane, so the court sits in a canvas tent on the parking lot.
2 A Folding table, plastic chairs, a single fan.
3 A Generator thrum outside.
4 A Rain on the roof.
5 A ¶ GLORIA ACHTERBERG, 60s, foreperson, cardigan, a stack of index cards in front of her.
6 A DWAYNE "DEEZ" PRUITT, 30s, ball cap, sits arms crossed.
7 A MIN-JUN HAN, 40s, nurse, kneads her temples.
8 D GLORIA (to the room): Let's take another vote. All in favor of conviction.
9 A ¶ Deez doesn't raise his hand.
10 A Min-Jun hesitates.
11 A Gloria raises hers.
12 D GLORIA [CONT'D]: One.
13 D MIN-JUN: Gloria, I'm not sure--
14 D GLORIA: You said yesterday you were.
15 D MIN-JUN: I said I leaned.
16 D DEEZ: I never leaned.
17 D GLORIA: Deez, with respect, you haven't opened your mouth in two days.
18 D DEEZ: I'm saving it.
19 D GLORIA: For what?
20 D DEEZ: For when it matters.
21 A ¶ He stands.
22 A The chair scrapes.
23 A He crosses to a pitcher, pours water, drinks.
24 A Then, without warning, he slams the cup down.
25 D DEEZ [CONT'D] (to himself): Twelve men on a bench and none of them looked at the kid.
26 D MIN-JUN: Deez?
27 D DEEZ: You heard me.
28 D GLORIA: We are not here to rehash the trial.
29 D DEEZ: Gloria, he's nineteen. He had a record of one parking ticket.
30 D GLORIA: He had a gun.
31 D DEEZ: He had a toy.
32 D GLORIA: The witness said it was real.
33 D DEEZ: The witness was a hundred yards away in the dark.
34 A ¶ Min-Jun rises, steps between them, hands out.
35 D MIN-JUN: Stop. Both of you.
36 D DEEZ: She keeps calling it a verdict. It's a guess.
37 D GLORIA: You think I haven't been losing sleep?
38 D DEEZ: I think you made up your mind on day one.
39 A ¶ Gloria slaps her cards down.
40 A They fan across the table.
41 A Deez knocks them to the floor with the back of his hand.
42 A Min-Jun snatches one before it's lost.
43 D MIN-JUN: Enough! We have to be unanimous!
44 D DEEZ: Then we're not leaving this tent.
45 D GLORIA (very quiet): Then we're not leaving.
46 A ¶ The generator coughs.
47 A The lights flicker.
48 A All three look up.
49 A The fan slows to a stop.
50 A ¶ In the dark, no one moves.

### SCENE s01065 | INT. HOUSING COURT - COURTROOM 3 - MORNING
Detected names (may be incomplete or contain aliases): JUDGE HORTENSE ABBOTT-LUND, LANDLORD DEXTER OLUYEMI, TENANT MARISELA QUINTANILLA, CORNELIUS PRATT
1 A ¶ A cramped courtroom with a leaking ceiling tile and a plastic bucket underneath.
2 A A worn carpet, three rows of benches, a flag on a crooked pole.
3 A ¶ JUDGE HORTENSE ABBOTT-LUND, 60s, reading glasses perched on a long nose, peers over the bench.
4 A LANDLORD DEXTER OLUYEMI, 40s, cufflinks, signet ring, stands at one table.
5 A TENANT MARISELA QUINTANILLA, 30s, in her work uniform from a bakery, flour still on one sleeve, stands at the other.
6 A Beside her, ATTY.
7 A CORNELIUS PRATT, 50s, a threadbare suit, a briefcase with a broken clasp.
8 D ABBOTT-LUND: Mr. Oluyemi, you've served notice?
9 D DEXTER: Yes, Your Honor.
10 D ABBOTT-LUND: Mr. Pratt, you dispute it?
11 D PRATT: We do, Your Honor. My client wasn't informed of the rent increase.
12 D DEXTER: It was posted in the lobby.
13 D MARISELA: There's no lobby. There's a hallway.
14 D DEXTER: Same thing.
15 D MARISELA: There's a hallway with a broken light. I can't read in the dark.
16 D ABBOTT-LUND: Ms. Quintanilla, please address me.
17 D MARISELA: Sorry, Judge.
18 D ABBOTT-LUND: Mr. Pratt, any further objection?
19 D PRATT: Only that Mr. Oluyemi has been collecting rent for a unit that doesn't have a working stove for six months.
20 D DEXTER: I replaced the stove.
21 D MARISELA: With a hot plate.
22 D ABBOTT-LUND: That's enough.
23 A ¶ The bucket under the ceiling tile pings with a single drop.

### SCENE s01053 | INT. AIR RAID WARDEN POST - SCHOOLYARD SHELTER - NIGHT (1941)
Detected names (may be incomplete or contain aliases): EDMUND HARTLEY, VERA PLUMMER, ALF DOBSON, CONTROL
1 A ¶ A concrete box dug under a playground.
2 A A hurricane lamp, a field telephone, a rack of tin helmets, sandbags to the ceiling.
3 A Muffled drone overhead.
4 A ¶ EDMUND HARTLEY, 50s, grocer by day, warden by night, white helmet, rests his hand on the phone.
5 A VERA PLUMMER, 20s, volunteer, clipboard and bicycle clips, sits on a crate with a mug of cocoa.
6 A ALF DOBSON, 60s, retired railwayman, hums a hymn to himself.
7 A ¶ The drone grows.
8 A Edmund glances at the ceiling.
9 D EDMUND: Mark it. Eleven forty.
10 D VERA: Marked.
11 D ALF (muttering): That's no Spitfire.
12 A ¶ The field telephone rings.
13 A Edmund snatches it.
14 D EDMUND: Post Seven.
15 D CONTROL [V.O.]: Post Seven, this is Control. Report.
16 D EDMUND: Nothing yet. Heard them over the canal.
17 D CONTROL [V.O.]: Hold position. Fire watch at the gasworks says they're dropping flares.
18 D EDMUND: Flares.
19 D CONTROL [V.O.]: Prepare for incendiaries.
20 A ¶ He hangs up.
21 A Looks at Vera and Alf.
22 D EDMUND [CONT'D]: Right. Helmets on. Buckets by the door.
23 A ¶ Vera sets down her cocoa.
24 A Alf rises, joints cracking.
25 D VERA: Mr. Hartley, shouldn't we stay below?
26 D EDMUND: Not for incendiaries.
27 D ALF: You'll want sand, not water.
28 D EDMUND: I know my business, Alf.
29 D ALF: Nobody said you didn't.
30 A ¶ A distant thud.
31 A Dust shivers from the ceiling.
32 A ¶ The phone rings again.
33 A Edmund picks up.
34 D CONTROL [V.O.]: Post Seven. Strike on the Albert Road. Third house from the corner.
35 A ¶ Edmund goes pale.
36 D EDMUND: That's my shop.
37 D CONTROL [V.O.]: Say again?
38 D EDMUND: That's my shop. That's my daughter's flat above it.
39 D CONTROL [V.O.]: Warden Hartley, stay at your post.
40 A ¶ He puts the phone down very carefully.
41 A Takes off his helmet.
42 A Puts it back on, tighter.
43 D VERA: Mr. Hartley--
44 D EDMUND: Vera. Take the register. Alf, you're with me.
45 D ALF: Aye.
46 D EDMUND: We're going up.
47 A ¶ He opens the door.
48 A Night, red and roaring, floods in.

### SCENE s01020 | INT. FORMER BOWLING ALLEY - EVIDENCE ANNEX - NIGHT
Detected names (may be incomplete or contain aliases): ADAEZE OKONKWO, HALVARD PEDERSEN, TECH, KOWALCZYK, OFFICER TRAN, LENNOX, BASHIR
1 A ¶ Lane 12 is a ghost of itself.
2 A Waxed maple, gutters stacked with cardboard banker's boxes.
3 A Overhead, a dead scoreboard still reads HOME 114 / GUEST 98.
4 A ¶ DET. ADAEZE OKONKWO, 40s, rain-wet trench coat, reading glasses pushed up into close-cropped hair, walks the lane like she owns the lease.
5 A ¶ At the ball return sits SGT. HALVARD PEDERSEN, 60, heavy, a thermos between his knees, pretending not to be asleep.
6 D OKONKWO: Who signed the boxes out?
7 D PEDERSEN: Nobody. That's the problem.
8 A ¶ A TECH in a paper suit kneels at the far end, photographing a box lid with a ring light.
9 A Young, narrow shoulders, earbuds in one ear only.
10 D OKONKWO: You. What's your name?
11 D TECH: Just Tech tonight. Ask the lab.
12 A ¶ She moves on.
13 A Doesn't push.
14 A ¶ By the shoe-rental counter, MRS. KOWALCZYK, 70s, cardigan buttoned wrong, clutches a handbag like a flotation device.
15 A She owned this alley for thirty years.
16 D MRS. KOWALCZYK: Strike night was Thursdays. Forty-one lanes of noise. Now listen to it.
17 A ¶ Silence.
18 A A compressor hums somewhere.
19 D OKONKWO: Ma'am, did you give anyone a key?
20 D MRS. KOWALCZYK: The city has my keys. The city has everything.
21 D PEDERSEN (into thermos): Ain't that the truth.
22 A ¶ OFFICER TRAN, 20s, stiff, enters from the lobby with a clipboard.
23 A He stops at the edge of the lane, unsure if he's allowed to step on it.
24 D OFFICER TRAN: Detective. Gate log's clean. Last entry, six forty p.m. Someone named Lennox.
25 D OKONKWO: First name?
26 D OFFICER TRAN: Just Lennox.
27 A ¶ Behind a stack of boxes, a cough.
28 A Everyone looks.
29 A ¶ LENNOX, 50s, gray ponytail, security lanyard, stands up slowly from where he's been sitting on a crate, hands visible and empty.
30 D LENNOX: I'm the night man. I was in the office.
31 D OKONKWO: Mr. Lennox. You've been in the building the whole time.
32 D LENNOX: It's a warm building.
33 A ¶ The Tech glances up, finally pulls the earbud out.
34 D TECH: Bashir. It's Bashir. Since you asked.
35 D OKONKWO: Thank you, Bashir.
36 D BASHIR: Box nineteen has been opened. Seal's cut clean. Razor, not a knife.
37 D OKONKWO: How do you know?
38 D BASHIR: Edge doesn't tear. I do this for a living.
39 A ¶ Okonkwo takes off her glasses.
40 A Folds them.
41 A Looks at Lennox for a long, unhurried moment.
42 D OKONKWO: Walk me through the office, Mr. Lennox.
43 D LENNOX: Sure.
44 A ¶ He doesn't move.
45 A Neither does she.
46 D PEDERSEN: I'll get the coffee.
47 A ¶ He doesn't move either.
48 D BASHIR: Light's good here, if anyone wants to take their time.
49 A ¶ Okonkwo sits down on the foul line, crosses her legs, and waits.

### SCENE s01069 | EXT. AUTO SALVAGE YARD - CAR CRUSHER BAY - NIGHT
Detected names (may be incomplete or contain aliases): MAN, WOMAN, KID, NINA, ELI
1 A ¶ Towers of flattened cars.
2 A A hydraulic crusher squats at the end of a gravel lane, its steel jaws open like a mouth.
3 A A sodium lamp buzzes on a pole.
4 A ¶ A MAN in a dark jacket, 40s, slams the trunk of a black sedan shut.
5 A He wipes his hands on his pants.
6 A From the passenger side, a WOMAN in a leather coat, 30s, hurries around the car, hugging herself.
7 A ¶ At the office window, a KID, 17, in a hoodie, watches from behind a curtain.
8 A ¶ The man opens the sedan's back door.
9 A A heavy gym bag sits on the seat.
10 D WOMAN: Did you check the plates?
11 D MAN: Twice.
12 D WOMAN: Did you check the plates again?
13 D MAN: Nina. They're clean.
14 D WOMAN (softly): Don't say my name.
15 D MAN: Who's going to hear?
16 A ¶ She nods toward the office.
17 A The Kid has vanished from the window.
18 D MAN [CONT'D]: That's Terrence's nephew. He doesn't count.
19 D NINA: Everyone counts.
20 A ¶ The man hauls out the gym bag.
21 A It lands on the gravel with a clink.
22 A ¶ The office door opens.
23 A The Kid steps out, hands in pockets, walking slow.
24 D KID: You guys need the crusher?
25 D MAN: Yeah. For the sedan.
26 D KID: Papers?
27 D NINA: No papers.
28 D KID: No papers, no crusher. That's Terrence's rule.
29 D MAN: Terrence is a friend.
30 D KID: Terrence is in Phoenix.
31 A ¶ The man smiles, shows teeth.
32 A He steps closer.
33 A The Kid doesn't step back.
34 D MAN: Kid. What's your name?
35 D KID: Eli.
36 D MAN: Eli. Listen to me. A man left this car here. It's got to go.
37 D ELI: Then he can come back and fill out a form.
38 D NINA: Eli, we're running behind.
39 D ELI: Then you should've been on time.
40 A ¶ The man lunges, grabs Eli by the hoodie.
41 A Eli drops his phone, kicks the man's shin, and twists free.
42 A The man staggers into the sedan's open door.
43 A Nina grabs the gym bag and swings it into the man's back.
44 A All three go down in the gravel, tangled.
45 A ¶ Eli scrambles to the crusher's control panel.
46 A Slaps a lever.
47 A The jaws groan and begin to close.
48 D NINA: Eli! Don't!
49 D ELI (shouting): You said no papers!
50 A ¶ The man rolls away.
51 A The jaws descend on the sedan with a scream of metal.
52 A The gym bag, caught half under the door, is dragged in.
53 A ¶ Nina stares, mouth open.
54 A The man gets up slowly, face bleeding.
55 D MAN (to Eli, hoarse): You have any idea what was in that bag?
56 D ELI (dead calm): Terrence's rules.
57 A ¶ The crusher bottoms out.
58 A Glass bursts.
59 A A cloud of dust and loose banknotes swirls up through the sodium light, drifting down like snow.

### SCENE s00013 | EXT. SALT FLATS - ABANDONED EVAPORATION WORKS - DAY
Detected names (may be incomplete or contain aliases): SILAS WHITTAKER, CONNIE, REYES
1 A ¶ A white plain stretches to a white sky.
2 A Rotting wooden vats lie in rows like open coffins.
3 A Heat shimmers off the crust.
4 A ¶ SILAS WHITTAKER (50s, gray beard, duster bleached by sun) kneels beside a dead horse.
5 A He runs one hand along its neck and says nothing.
6 A ¶ Behind him, a shadow lengthens.
7 A He doesn't turn.
8 A ¶ CONSTANCE "CONNIE" REYES (30s, wide-brimmed hat, rifle across her back) stands twenty feet away on the crust.
9 A She holds a canteen by its strap.
10 D CONNIE: That your horse?
11 D SILAS: Was.
12 D CONNIE: Looks like the salt got her.
13 D SILAS: Looks like a bullet got her.
14 A ¶ She walks closer.
15 A Stops short of arm's reach.
16 A He rises, brushing his knees, and finally turns.
17 A His eyes go to the canteen.
18 A Hers go to his holster.
19 D CONNIE: I'll trade you water for a name.
20 D SILAS: I'd trade you a name for a mule.
21 D CONNIE: I don't have a mule.
22 D SILAS: Then you don't have a name worth the water.
23 A ¶ She almost smiles.
24 A He almost doesn't.
25 A The wind pulls at her hat brim.
26 A She tilts the canteen.
27 A Water slaps against the metal, loud in the silence.
28 D SILAS [CONT'D]: Don't wave that around.
29 D CONNIE: It's mine to wave.
30 A ¶ He takes a step.
31 A She does not move.
32 A He takes another.
33 A Her hand drifts back to the rifle sling.
34 D SILAS: Easy.
35 D CONNIE: You first.
36 A ¶ They stand with the dead horse between them and the white sky above.
37 A Neither one blinks.
38 D SILAS: You work for Dutch Halloran?
39 D CONNIE: Never heard of him.
40 D SILAS: That's a lie, and you tell it badly.
41 D CONNIE: Then I'm in good company.
42 A ¶ He nods slowly.
43 A Looks off toward a ridge on the horizon, a thin dark line.
44 D SILAS: He's coming, you know. He's got six men and a Gatling gun on a wagon.
45 D CONNIE: I know.
46 D SILAS: Then why are you standing here?
47 A ¶ She uncaps the canteen.
48 A Drinks.
49 A Wipes her mouth with the back of her wrist.
50 A Holds it out to him at arm's length, the way one offers food to a dog.
51 D CONNIE: Same reason as you.
52 A ¶ He takes it.
53 A Drinks long.
54 A The water runs down his beard.
55 A He hands it back.
56 D SILAS: He killed my brother.
57 D CONNIE: He killed my husband.
58 D SILAS: He burned my ranch.
59 D CONNIE: He took my land.
60 A ¶ They speak at once, the words overlapping, neither stopping for the other.
61 D SILAS: I came out here to die. ^ CONNIE I came out here to finish it.
62 A ¶ A beat.
63 A They look at each other, really look, for the first time.
64 D SILAS: Can you shoot that thing?
65 D CONNIE: Better than you can shoot that.
66 A ¶ He glances at his holster.
67 A Almost laughs.
68 D SILAS: What's your plan?
69 A ¶ She points past him at the nearest vat, a long wooden trough sunk in the crust.
70 D CONNIE: Wagon comes down the old cart road. Wheels sink in the brine. Horses panic.
71 D SILAS: And the Gatling?
72 D CONNIE: Pointed at the sky, if the wagon tips.
73 A ¶ He studies the vats.
74 A The road.
75 A The ridge.
76 A The long, long distance.
77 D SILAS: That's a lot of ifs.
78 D CONNIE: You got a better one?
79 A ¶ He doesn't.
80 A He pulls the revolver from his holster and checks the cylinder.
81 A Three rounds.
82 A He sighs.
83 D SILAS: Hand me a few.
84 A ¶ She digs in her coat.
85 A Pours a small handful of cartridges into his palm.
86 A He loads them one by one.
87 A ¶ On the ridge, a plume of dust rises.
88 A A glint of brass.
89 A The faint creak of wheels.
90 D CONNIE: Time to pick a vat.
91 A ¶ She walks away toward the trough.
92 A He lingers over the dead horse for one last moment, touches its mane, and follows.

### SCENE s01043 | INT. ASSAY OFFICE - GOLD RUSH TOWN - DAY (1851)
Detected names (may be incomplete or contain aliases): THADDEUS WHIT, CORNELIA BASS
1 A ¶ A plank room, one window grimed with dust, a counter scarred by a thousand scales.
2 A Weighing pans, crucibles, a brass balance under glass.
3 A ¶ THADDEUS WHIT, 50s, spectacles, black sleeve garters, presides behind the counter.
4 A His fingers are stained yellow from nitric acid.
5 A ¶ The door bangs.
6 A CORNELIA BASS, 30s, trousers and a man's hat, strides in.
7 A Dust to her knees.
8 A A leather pouch swings from her belt.
9 D THADDEUS: We close in ten minutes, madam.
10 D CORNELIA: Then I'll be quick.
11 A ¶ She drops the pouch on the counter.
12 A It thuds.
13 D THADDEUS: What have you got?
14 D CORNELIA: Color.
15 A ¶ He unties the cord.
16 A Pours.
17 A Dull yellow dust pools on a sheet of paper.
18 A ¶ He pinches some.
19 A Rolls it between his fingers.
20 A Holds it to the light.
21 D THADDEUS: Where was this panned?
22 D CORNELIA: Dry Creek.
23 D THADDEUS: Dry Creek has been dry for a year.
24 D CORNELIA: That's why it's called Dry Creek.
25 A ¶ He gives her a thin smile.
26 A Reaches for a vial.
27 D THADDEUS: A drop of acid. For the test.
28 D CORNELIA: Go on.
29 A ¶ He doses the metal.
30 A It stays bright.
31 A He nods.
32 D THADDEUS: It's good.
33 D CORNELIA: I know.
34 D THADDEUS: Twelve dollars an ounce.
35 D CORNELIA: Twenty.
36 D THADDEUS: Fourteen.
37 D CORNELIA: Seventeen and the sack.
38 D THADDEUS: Done.
39 A ¶ He weighs it.
40 A Writes a slip.
41 A Counts bills from a strongbox.
42 A Slides them over.
43 A She doesn't count them.
44 D CORNELIA: You'll be here tomorrow?
45 D THADDEUS: Every day but Sunday.
46 D CORNELIA: Good. I'll bring more.
47 D THADDEUS: Madam, if I may. A woman alone in these hills--
48 D CORNELIA: I'm not alone.
49 D THADDEUS: Your husband?
50 D CORNELIA: My claim. A hundred yards of dirt. And a rifle.
51 D THADDEUS: Ah.
52 A ¶ She tips her hat.
53 A Heads for the door.
54 A Stops with her hand on the latch.
55 D CORNELIA [CONT'D]: Mr. Whit.
56 D THADDEUS: Yes?
57 D CORNELIA: You tested my gold with acid.
58 D THADDEUS: Standard practice.
59 D CORNELIA: And you held it to the light.
60 D THADDEUS: Also standard.
61 D CORNELIA: But you never looked at the weight.
62 A ¶ Thaddeus freezes.
63 A The pen drops from his fingers.
64 D CORNELIA [CONT'D]: That scale tilts two grains left. I've been watching it for three weeks.
65 D THADDEUS: It's properly calibrated.
66 D CORNELIA: It's not.
67 D THADDEUS: I'll ask you to leave.
68 D CORNELIA: You'll ask me nothing.
69 A ¶ She turns back.
70 A Her hand slips beneath her coat.
71 D THADDEUS: Madam.
72 D CORNELIA: Open the strongbox.
73 D THADDEUS: This is robbery.
74 D CORNELIA: It's restitution.
75 A ¶ He doesn't move.
76 A The clock ticks.
77 A Dust drifts through the light.
78 D THADDEUS: There's four hundred dollars.
79 D CORNELIA: There's four thousand. Under the false bottom.
80 A ¶ Thaddeus goes white.
81 A He kneels, trembling, lifts the strongbox's lining.
82 D THADDEUS: How?
83 D CORNELIA: I used to keep books in Sacramento.
84 A ¶ He lays a bundle on the counter.
85 A Then another.
86 A She slides them into her pouch.
87 D CORNELIA [CONT'D] (over his words): We never met.
88 D THADDEUS: We never met.
89 A ¶ They say it together.
90 A She smiles.
91 A He doesn't.
92 A ¶ She leaves.
93 A The door clacks shut.
94 A The bell above it jingles for a long time.

### SCENE s01021 | INT. LIGHTHOUSE LAMP ROOM - DAWN
Detected names (may be incomplete or contain aliases): IGNACIO, WREN
1 A ¶ Salt-streaked glass.
2 A A Fresnel lens the size of a bus shelter, still turning.
3 A Slow.
4 A Heavy.
5 A ¶ IGNACIO, 30s, keeper's wool sweater, kneels at the brass base with an oilcan.
6 A Hands black with grease.
7 A ¶ He hums.
8 A Off-key.
9 A Pleased with himself.
10 A ¶ The hatch bangs.
11 A ¶ He freezes.
12 A Listens.
13 A ¶ Boots on iron stairs.
14 A Coming up.
15 D IGNACIO (muttering): Supply boat's not till Friday.
16 A ¶ The hatch lifts.
17 A A suitcase thumps onto the floor.
18 A ¶ WREN, 30s, soaked to the bone, red scarf plastered to her neck, hauls herself up.
19 A Breathing hard.
20 A Grinning hard.
21 A ¶ He stands.
22 A Oilcan still in hand.
23 D IGNACIO [CONT'D]: No.
24 D WREN: Hello to you too.
25 D IGNACIO: You can't be here.
26 D WREN: I rowed.
27 D IGNACIO: You rowed. Eleven miles.
28 D WREN: Nine. I cut the corner.
29 A ¶ He sets the can down.
30 A Carefully.
31 A Like it might go off.
32 A ¶ She drops her bag.
33 A Wrings out the scarf.
34 A Water pools on the floor.
35 D IGNACIO: You wrote that you were done.
36 D WREN: I wrote a lot of things.
37 D IGNACIO: You wrote one letter. Four lines.
38 D WREN: It was a good four lines.
39 A ¶ He turns away.
40 A Faces the lens.
41 A It sweeps past, throwing fractured light across his face.
42 A ¶ She watches.
43 A Doesn't close the gap.
44 D WREN [CONT'D]: You kept the light on.
45 D IGNACIO: It's a lighthouse.
46 D WREN: You kept it polished.
47 D IGNACIO: It's my job.
48 D WREN (softly): Ignacio.
49 A ¶ He doesn't answer.
50 A His shoulders drop an inch.
51 A ¶ She crosses to the rail.
52 A Rain ticks against the glass.
53 A Far below, the sea is a gray animal, restless.
54 D WREN [CONT'D]: I almost didn't make it. The boat took water by the rocks.
55 D IGNACIO: You could have drowned.
56 D WREN: I know.
57 D IGNACIO: You could have drowned, and I'd have been up here. Oiling a gear.
58 A ¶ She turns.
59 A Their eyes meet.
60 A Held.
61 D WREN: Say it, then.
62 D IGNACIO: Say what?
63 D WREN: Whatever you've been rehearsing.
64 A ¶ A beat.
65 A He shakes his head.
66 A A small, defeated laugh.
67 D IGNACIO: It was better yesterday.
68 D WREN: Try me.
69 D IGNACIO: I missed you.
70 D WREN: I missed you.
71 A ¶ They say it on top of each other.
72 A Neither stops.
73 D IGNACIO: I was angry. I'm still angry.
74 D WREN: I was scared. I'm still scared.
75 A ¶ They stop.
76 A Both laugh.
77 A Short.
78 A Wet.
79 D IGNACIO: You're dripping on my floor.
80 D WREN: You're welcome.
81 A ¶ He picks up a towel from a hook.
82 A Tosses it.
83 A She catches it one-handed.
84 A ¶ She dries her face.
85 A Her hands.
86 A She's slowing down.
87 D WREN [CONT'D]: Is there tea?
88 D IGNACIO: There's a kettle.
89 D WREN: That's not what I asked.
90 D IGNACIO: There's a kettle and a tin that might be tea.
91 D WREN: Might be.
92 D IGNACIO: It's been there since March.
93 D WREN: Brave.
94 A ¶ He crosses to the hatch.
95 A Stops.
96 A Looks down the shaft.
97 D IGNACIO: Stairs are slick. Come on.
98 D WREN: Is that an invitation?
99 D IGNACIO: It's a warning.
100 A ¶ She smiles.
101 A Picks up her suitcase.
102 A He takes it from her before she can protest.
103 A ¶ They descend.
104 A His head vanishes first.
105 A Then hers.
106 A ¶ The lens keeps turning.
107 A Light sweeps the empty room.

### SCENE s01083 | INT. WIZARD'S LIBRARY - THE ROOM OF TURNING SHELVES - NIGHT
Detected names (may be incomplete or contain aliases): ARCHIVIST THESSALY MOORE, KESTREL DONOVAN-ABIOLA, VOICE, RAVEN-HEADED STRANGER, SCRIBE
1 A ¶ Shelves rotate on slow brass gears.
2 A Books drift between them on their own.
3 A A fire burns in a hearth with no chimney.
4 A Candles hover.
5 A ¶ ARCHIVIST THESSALY MOORE, 40s, ink-stained sleeves, spectacles on a cord, kneels at a lectern, copying a rune.
6 A Beside her, apprentice KESTREL DONOVAN-ABIOLA, 16, holds a lantern.
7 A Both ignore the voice murmuring through the walls.
8 D VOICE [V.O.] (from the stone itself): Found you.
9 A ¶ Thessaly's quill stops.
10 A Kestrel steps closer to her.
11 D KESTREL: Was that the library?
12 D THESSALY: The library doesn't speak.
13 D VOICE [V.O.]: Oh, but I do. Thessaly Moore. You took something that is mine.
14 D THESSALY (not looking up): I borrowed a book.
15 D VOICE [V.O.]: A book. Yes. Open to the last page and read me what it says.
16 A ¶ Kestrel pulls a leather volume from the shelf.
17 A It is warm in her hands.
18 A She flips to the last page.
19 D KESTREL (reading): "Whoever opens this book wakes the one who wrote it."
20 D THESSALY: Put it back. Slowly.
21 A ¶ Kestrel reaches.
22 A The shelf rotates away from her.
23 A The book will not return to its slot.
24 D VOICE [V.O.]: Do not trouble yourself. I am already awake.
25 A ¶ The candles gutter.
26 A In the center of the room, the air thickens.
27 A A tall figure forms in a coat of gray feathers.
28 A A RAVEN-HEADED STRANGER, calm, hands clasped.
29 A Its beak glints.
30 D RAVEN-HEADED STRANGER: Good evening. I am the Scribe.
31 D THESSALY: I know who you are.
32 D SCRIBE: Then you know why I came.
33 A ¶ Kestrel edges behind the lectern.
34 A Thessaly rises, quill still in hand.
35 D THESSALY: The pages were never yours. They belonged to the kingdom.
36 D SCRIBE: I wrote the kingdom. Every war. Every winter. Every funeral. It is all mine.
37 D KESTREL (quietly): Thessaly, his shadow is moving wrong.
38 A ¶ It is.
39 A The shadow on the floor writes in the air, slow letters curling in black smoke.
40 D THESSALY: Don't read it.
41 D KESTREL: I can't help it.
42 A ¶ She reads.
43 A Her eyes widen.
44 D KESTREL [CONT'D]: It says my name.
45 D SCRIBE: Kestrel Donovan-Abiola. Born in the ninth year of the drought. Died in the eleventh page of tonight.
46 D THESSALY (stepping between them): Then turn the page.
47 D SCRIBE: I would, if you could stop me.
48 A ¶ Thessaly raises the quill.
49 A The tip ignites white.
50 A She draws a line across the air.
51 A A bright barrier of light slices the room.
52 A ¶ The Scribe flinches.
53 A Feathers scatter.
54 D SCRIBE [CONT'D] (a hiss): That ink is older than I am.
55 D THESSALY: Good. It remembers you.
56 A ¶ The shelves spin faster.
57 A The book in Kestrel's hands flares gold.
58 A She slams it shut.
59 A The Scribe shrieks.
60 D SCRIBE: Give it back!
61 D KESTREL (holding it close): No.
62 A ¶ The hearth fire roars.
63 A The room tilts.
64 A Candles fall like stars.
65 D SCRIBE [V.O.] (already fading): Then I will wait. Stories do.
66 A ¶ The figure dissolves into black ink that runs down the wall and soaks into the stone.
67 A The shelves slow.
68 A The candles steady.
69 A ¶ Silence.
70 A Thessaly lowers her quill, trembling.
71 A Kestrel lets out a breath.
72 D KESTREL: Is it over?
73 D THESSALY: Not while the book is open.
74 A ¶ Kestrel looks down.
75 A The cover is warm.
76 A Something inside it beats.

### SCENE s01081 | INT. BACK ROOM OF A TAXIDERMY SHOP - NIGHT
Detected names (may be incomplete or contain aliases): ROCCO, VANTI, SAL MAROUNI, LENA FISHBACH, TIMOTHY BLACKWOOD-ADE
1 A ¶ Glass eyes.
2 A Stuffed owls.
3 A A badger mid-snarl.
4 A A card table with four chairs and one bare bulb.
5 A ¶ ROCCO "THE BOOKKEEPER" VANTI, 50s, rolled sleeves, counts cash into neat stacks.
6 A SAL MAROUNI, 30s, tracksuit, bounces a knee.
7 A LENA FISHBACH, 40s, wire glasses, watches the door.
8 A TIMOTHY BLACKWOOD-ADE, 20s, nervous, holds a duffel bag in his lap.
9 D ROCCO: Eighty. Eighty-five. Ninety.
10 D SAL: Where's the rest?
11 D ROCCO: Counting, Sal.
12 D LENA: Timothy, put the bag on the table.
13 D TIMOTHY: It's fine here.
14 D SAL: Put it on the table.
15 D TIMOTHY: I said it's fine.
16 D LENA: Why are you sweating?
17 D TIMOTHY: It's hot.
18 D SAL: It's a taxidermy shop in November.
19 D TIMOTHY: The badger gives off heat.
20 D ROCCO (not looking up): Ninety-five. A hundred.
21 A ¶ Lena shifts her chair.
22 A A floorboard creaks somewhere above them.
23 A Timothy flinches.
24 D SAL: Who else is here?
25 D TIMOTHY: Nobody.
26 D LENA: There's a second floor?
27 D ROCCO: Storage.
28 D SAL: Check it.
29 D LENA: I'll check it.
30 D ROCCO: Sit down, Lena.
31 D LENA: Rocco, there's something up there.
32 D ROCCO: It's a possum. Frank keeps one on a branch.
33 D SAL: Dead?
34 D ROCCO: Obviously dead.
35 A ¶ The ceiling creaks again.
36 A All four look up.
37 A The bulb sways.
38 A A shadow slides across the badger's snout.
39 D TIMOTHY: That didn't sound dead.
40 D LENA: That sounded like a person.
41 D SAL: Give me the bag.
42 D TIMOTHY: No.
43 D SAL: Give me the bag, Timothy.
44 D TIMOTHY: I can't.
45 D ROCCO (slowly setting down the money): Why not?
46 D TIMOTHY: Because it's not the money.
47 A ¶ Silence.
48 A The bulb swings.
49 A Sal's hand drifts toward his jacket.
50 A Lena eases her chair back.
51 D LENA: Then what is it?
52 D TIMOTHY: I didn't have a choice. They said bring it or --
53 D ROCCO: Who said?
54 D TIMOTHY: The man upstairs.
55 A ¶ The ceiling groans.
56 A Footsteps cross to the top of the stairs.
57 A A silhouette fills the doorway above.
58 A Boots descend one step at a time.
59 D SAL (whispering): Rocco.
60 D ROCCO: Everybody stay calm.
61 D LENA: I'm calm.
62 D SAL: I'm not calm.
63 D TIMOTHY: He said don't run.
64 A ¶ The boots reach the bottom stair.
65 A A hand reaches out and flicks off the bulb.
66 A Dark.
67 A Glass eyes gleam in the red glow of an exit sign.
68 D ROCCO (a hush): Nobody move.

### SCENE s01034 | INT. TAXIDERMY WORKSHOP - NIGHT
Detected names (may be incomplete or contain aliases): BEATRIX CALLOWAY, NICO ABARA, FENWICK
1 A ¶ Glass eyes glitter from every shelf.
2 A A stuffed owl, a lynx mid-leap, a badger with a crooked grin.
3 A ¶ BEATRIX CALLOWAY, 50s, magnifier on her forehead, kneels by an open drawer while NICO ABARA, 20s, apprentice, holds the lantern and FENWICK, 70s, owner, stands rigid at the door, fingers twitching, and all three have noticed that the fox on the counter is missing its left eye.
4 D BEATRIX: Fenwick, you said nobody came in.
5 D FENWICK: Nobody did, Beatrix.
6 D NICO: The fox, Mr. Fenwick. Look at the fox.
7 A ¶ Beatrix lifts the animal, turns it, peers into the empty socket, pulls a folded note from inside, and Nico leans in, lantern shaking, while Fenwick edges toward the back door, one hand in his coat.
8 D BEATRIX: Stop there, Fenwick.
9 D FENWICK: It's a misunderstanding.
10 D NICO: It says "the eye is in the owl."
11 A ¶ They all turn.
12 A The owl stares back.

### SCENE pd_dollhouse_3 | INT. DOLLHOUSE - CONTINUOUS
Detected names (may be incomplete or contain aliases): HELMER, NORA, RANK
1 D HELMER: That’s right. Well, we will share it, Nora, as man and wife should. That is how it shall be.
2 A ¶ Caressing her.
3 D HELMER: Are you content now? There! There!—not these frightened dove’s eyes! The whole thing is only the wildest fancy!—Now, you must go and play through the Tarantella and practise with your tambourine. I shall go into the inner office and shut the door, and I shall hear nothing; you can make as much noise as you please.
4 A ¶ Turns back at the door.
5 D HELMER: And when Rank comes, tell him where he will find me.
6 A ¶ Nods to her, takes his papers and goes into his room, and shuts the door after him.
7 A ¶ bewildered with anxiety, stands as if rooted to the spot, and whispers.
8 D NORA: . He was capable of doing it. He will do it. He will do it in spite of everything.—No, not that! Never, never! Anything rather than that! Oh, for some help, some way out of it!
9 A ¶ The door-bell rings.
10 D NORA: Doctor Rank! Anything rather than that—anything, whatever it is!
11 A ¶ She puts her hands over her face, pulls herself together, goes to the door and opens it.
12 A RANK is standing without, hanging up his coat.
13 A During the following dialogue it begins to grow dark.
14 D NORA: Good day, Doctor Rank. I knew your ring. But you mustn’t go in to Torvald now; I think he is busy with something.
15 D RANK: And you?
16 A ¶ brings him in and shuts the door after him.
17 D NORA: . Oh, you know very well I always have time for you.
18 D RANK: Thank you. I shall make use of as much of it as I can.
19 D NORA: What do you mean by that? As much of it as you can?
20 D RANK: Well, does that alarm you?
21 D NORA: It was such a strange way of putting it. Is anything likely to happen?
22 D RANK: Nothing but what I have long been prepared for. But I certainly didn’t expect it to happen so soon.
23 A ¶ gripping him by the arm.
24 D NORA: . What have you found out? Doctor Rank, you must tell me.
25 A ¶ sitting down by the stove.
26 D RANK: . It is all up with me. And it can’t be helped.
27 A ¶ with a sigh of relief.
28 D NORA: . Is it about yourself?
29 D RANK: Who else? It is no use lying to one’s self. I am the most wretched of all my patients, Mrs Helmer. Lately I have been taking stock of my internal economy. Bankrupt! Probably within a month I shall lie rotting in the churchyard.
30 D NORA: What an ugly thing to say!
31 D RANK: The thing itself is cursedly ugly, and the worst of it is that I shall have to face so much more that is ugly before that. I shall only make one more examination of myself; when I have done that, I shall know pretty certainly when it will be that the horrors of dissolution will begin. There is something I want to tell you. Helmer’s refined nature gives him an unconquerable disgust at everything that is ugly; I won’t have him in my sick-room.
32 D NORA: Oh, but, Doctor Rank—
33 D RANK: I won’t have him there. Not on any account. I bar my door to him. As soon as I am quite certain that the worst has come, I shall send you my card with a black cross on it, and then you will know that the loathsome end has begun.
34 D NORA: You are quite absurd today. And I wanted you so much to be in a really good humour.
35 D RANK: With death stalking beside me?—To have to pay this penalty for another man’s sin? Is there any justice in that? And in every single family, in one way or another, some such inexorable retribution is being exacted—
36 A ¶ putting her hands over her ears.
37 D NORA: . Rubbish! Do talk of something cheerful.
38 D RANK: Oh, it’s a mere laughing matter, the whole thing. My poor innocent spine has to suffer for my father’s youthful amusements.
39 A ¶ sitting at the table on the left.
40 D NORA: . I suppose you mean that he was too partial to asparagus and pate de foie gras, don’t you?
41 D RANK: Yes, and to truffles.
42 D NORA: Truffles, yes. And oysters too, I suppose?
43 D RANK: Oysters, of course, that goes without saying.
44 D NORA: And heaps of port and champagne. It is sad that all these nice things should take their revenge on our bones.
45 D RANK: Especially that they should revenge themselves on the unlucky bones of those who have not had the satisfaction of enjoying them.
46 D NORA: Yes, that’s the saddest part of it all.
47 A ¶ with a searching look at her.

### SCENE pd_earnest_1 | INT. EARNEST - CONTINUOUS
Detected names (may be incomplete or contain aliases): JACK, GWENDOLEN, LADY BRACKNELL
1 D JACK: You really love me, Gwendolen?
2 D GWENDOLEN: Passionately!
3 D JACK: Darling! You don’t know how happy you’ve made me.
4 D GWENDOLEN: My own Ernest!
5 D JACK: But you don’t really mean to say that you couldn’t love me if my name wasn’t Ernest?
6 D GWENDOLEN: But your name is Ernest.
7 D JACK: Yes, I know it is. But supposing it was something else? Do you mean to say you couldn’t love me then?
8 A ¶ Glibly.
9 D GWENDOLEN: Ah! that is clearly a metaphysical speculation, and like most metaphysical speculations has very little reference at all to the actual facts of real life, as we know them.
10 D JACK: Personally, darling, to speak quite candidly, I don’t much care about the name of Ernest . . . I don’t think the name suits me at all.
11 D GWENDOLEN: It suits you perfectly. It is a divine name. It has a music of its own. It produces vibrations.
12 D JACK: Well, really, Gwendolen, I must say that I think there are lots of other much nicer names. I think Jack, for instance, a charming name.
13 D GWENDOLEN: Jack? . . . No, there is very little music in the name Jack, if any at all, indeed. It does not thrill. It produces absolutely no vibrations . . . I have known several Jacks, and they all, without exception, were more than usually plain. Besides, Jack is a notorious domesticity for John! And I pity any woman who is married to a man called John. She would probably never be allowed to know the entrancing pleasure of a single moment’s solitude. The only really safe name is Ernest.
14 D JACK: Gwendolen, I must get christened at once—I mean we must get married at once. There is no time to be lost.
15 D GWENDOLEN: Married, Mr. Worthing?
16 A ¶ Astounded.
17 D JACK: Well . . . surely. You know that I love you, and you led me to believe, Miss Fairfax, that you were not absolutely indifferent to me.
18 D GWENDOLEN: I adore you. But you haven’t proposed to me yet. Nothing has been said at all about marriage. The subject has not even been touched on.
19 D JACK: Well . . . may I propose to you now?
20 D GWENDOLEN: I think it would be an admirable opportunity. And to spare you any possible disappointment, Mr. Worthing, I think it only fair to tell you quite frankly before-hand that I am fully determined to accept you.
21 D JACK: Gwendolen!
22 D GWENDOLEN: Yes, Mr. Worthing, what have you got to say to me?
23 D JACK: You know what I have got to say to you.
24 D GWENDOLEN: Yes, but you don’t say it.
25 D JACK: Gwendolen, will you marry me?
26 A ¶ Goes on his knees.
27 D GWENDOLEN: Of course I will, darling. How long you have been about it! I am afraid you have had very little experience in how to propose.
28 D JACK: My own one, I have never loved any one in the world but you.
29 D GWENDOLEN: Yes, but men often propose for practice. I know my brother Gerald does. All my girl-friends tell me so. What wonderfully blue eyes you have, Ernest! They are quite, quite, blue. I hope you will always look at me just like that, especially when there are other people present.
30 A ¶ Enter Lady Bracknell.
31 D LADY BRACKNELL: Mr. Worthing! Rise, sir, from this semi-recumbent posture. It is most indecorous.
32 D GWENDOLEN: Mamma!
33 A ¶ He tries to rise; she restrains him.
34 D GWENDOLEN: I must beg you to retire. This is no place for you. Besides, Mr. Worthing has not quite finished yet.
35 D LADY BRACKNELL: Finished what, may I ask?
36 D GWENDOLEN: I am engaged to Mr. Worthing, mamma.
37 A ¶ They rise together.
38 D LADY BRACKNELL: Pardon me, you are not engaged to any one. When you do become engaged to some one, I, or your father, should his health permit him, will inform you of the fact. An engagement should come on a young girl as a surprise, pleasant or unpleasant, as the case may be. It is hardly a matter that she could be allowed to arrange for herself . . . And now I have a few questions to put to you, Mr. Worthing. While I am making these inquiries, you, Gwendolen, will wait for me below in the carriage.
39 A ¶ Reproachfully.
40 D GWENDOLEN: Mamma!
41 D LADY BRACKNELL: In the carriage, Gwendolen!
42 A ¶ Gwendolen goes to the door.
43 A She and Jack blow kisses to each other behind Lady Bracknell’s back.
44 A Lady Bracknell looks vaguely about as if she could not understand what the noise was.
45 A Finally turns round.
46 D LADY BRACKNELL: Gwendolen, the carriage!
47 D GWENDOLEN: Yes, mamma.
48 A ¶ Goes out, looking back at Jack.

### SCENE s01042 | INT. COMMUNITY CENTER LOCKER ROOM - NIGHT
Detected names (may be incomplete or contain aliases): COACH RUTHANNE PIKE, ZEKE, DOM, MEI-LING, COACH
1 A ¶ Dented lockers, wet benches, a whiteboard with a half-erased play.
2 A The fluorescent tubes buzz.
3 A ¶ COACH RUTHANNE PIKE, 50s, whistle around her neck, paces the length of the room.
4 A ZEKE, 20s, taped wrists, sits head down.
5 A DOM, 30s, pulls on a jersey.
6 A MEI-LING, 20s, goalie, rocks on her toes.
7 D COACH (to all): Third period. We're down two.
8 D ZEKE: We're down three.
9 D COACH: Down two. The ref owes us one.
10 D DOM: He owes us two.
11 D MEI-LING (muttering): Ref owes us a kidney.
12 D COACH: Zeke, look at me. Look up.
13 A ¶ He lifts his head.
14 D COACH [CONT'D]: You're the fastest man on this ice.
15 D ZEKE: My knee.
16 D COACH: Your knee's fine.
17 D DOM: Coach, the knee isn't fine.
18 D COACH: Dom, tie your skates.
19 D DOM: They're tied.
20 D COACH: Tie them again.
21 A ¶ Mei-Ling punches her pads, twice.
22 A The sound is a heartbeat.
23 D MEI-LING: Nobody gets past me. Not one.
24 D COACH: That's what I like to hear.
25 A ¶ The horn sounds down the hall.
26 A They rise as one.
27 A Zeke limps, then doesn't.

### SCENE s00005 | INT. FUNICULAR CAR - ALPINE CLIMB - NIGHT
Detected names (may be incomplete or contain aliases): SABINE LACROIX, TEO, BIANCHI, THE MAN IN GRAY, OPERATOR, HALVARD
1 A ¶ A glass cabin crawls up a mountain in the dark, a cable humming overhead and the lights of a casino resort burning at the summit like a held breath.
2 A ¶ SABINE LACROIX (30s, black gloves, a champagne flute she hasn't touched) sits with her back to the glass.
3 A Across from her TEODORO "TEO" BIANCHI (40s, bow tie loose, a briefcase cuffed to his wrist) stares at the floor.
4 A A figure in a gray coat leans in the corner, face lost in the shadow of a hat: THE MAN IN GRAY.
5 A ¶ From a speaker above the door, a bored VOICE of the operator drones through the static.
6 D OPERATOR [V.O.]: Next stop, Summit Station. Please remain seated until the car has come to a complete halt.
7 D SABINE: Fourteen minutes. The vault door cycles at the quarter hour. Teo takes the case through the service lift, I take the lobby, and our friend in gray makes the cameras blink.
8 D TEO: You say that like it's simple.
9 D SABINE: It is simple. It's only terrifying.
10 D THE MAN IN GRAY: My cameras blink for ninety seconds. Not ninety-one.
11 D SABINE: Then we move in eighty.
12 D TEO: And if the guard on the service lift is the new one? The one who doesn't take bribes?
13 D SABINE: Then Teo recites the wine list until he cries.
14 D TEO: That is not funny.
15 D THE MAN IN GRAY: Halvard.
16 D SABINE: What?
17 D HALVARD: My name. If we're doing this, you should have it. Halvard.
18 D SABINE: Halvard. Fine. Eighty seconds, Halvard.
19 D OPERATOR [V.O.]: Summit Station in one minute.
20 D TEO: One minute.
21 D SABINE: Breathe, Teo.
22 D HALVARD: Gloves on.

### SCENE s01038 | INT. FUNERAL HOME - VIEWING ROOM B - DAY
Detected names (may be incomplete or contain aliases): ELOISE FARNSWORTH, CAMILA BRANDAO, DOROTHEA KWAN
1 A ¶ Velvet drapes.
2 A A casket at the far end, closed, spray of lilies.
3 A Folding chairs facing a mahogany table, court reporter's stenotype ticking beside it.
4 A ¶ ELOISE FARNSWORTH, 70s, black gloves, rosary wrapped around one hand, sits very straight.
5 A On her left, CAMILA BRANDAO, 40s, her attorney, legal pad flat.
6 A Across the table, DOROTHEA KWAN, 50s, opposing counsel, reading glasses on a chain.
7 D KWAN: Mrs. Farnsworth, when did you last see your husband alive?
8 D ELOISE: Tuesday.
9 D KWAN: And the will?
10 A ¶ Eloise's rosary clicks once.
11 D ELOISE: What about it?
12 D KWAN: Did she witness it?
13 D BRANDAO: Objection. Who's "she"?
14 D KWAN: The nurse.
15 D ELOISE: Mrs. Okafor.
16 D KWAN: She told us she wasn't present.
17 A ¶ Eloise stares at the casket.
18 A Her fingers work the beads, one, two, three.
19 D BRANDAO: Let the record show my client has not been served that statement.
20 D KWAN: It's in your folder.
21 A ¶ Brandao flips pages.
22 A Stops.
23 A Her thumb presses a corner of paper until it whitens.
24 D ELOISE: I'd like some water.
25 A ¶ Kwan nods to the reporter.
26 A A pitcher is brought.
27 A Eloise's glove shakes as she lifts the cup, then stills.

### SCENE s01075 | EXT. HANGING BRIDGE OF SPIDERSILK - ABOVE THE MOONLIT CHASM - NIGHT
Detected names (may be incomplete or contain aliases): QUEEN ISOLDE VANTERRE, MORVAN UNMADE, ROYAL HERALD
1 A ¶ Wind howls.
2 A A bridge of woven silver thread spans a bottomless gorge.
3 A Far below, pale lights drift like fallen stars.
4 A ¶ QUEEN ISOLDE VANTERRE, 40s, crowned in antlers of white bone, grips the rail.
5 A Her cloak snaps in the gale.
6 A Opposite her, at the far end of the span: MORVAN THE UNMADE, ageless, a figure of black smoke and one burning eye.
7 D QUEEN ISOLDE: You have no claim on this valley.
8 D MORVAN (echoing, from everywhere): The valley has no claim on you, and yet you bleed for it.
9 A ¶ She steps onto the bridge.
10 A Threads hum beneath her boots.
11 D QUEEN ISOLDE: Go back to your cold hollow, Morvan.
12 D MORVAN: Come and make me.
13 A ¶ A horn sounds from the castle far behind her.
14 A Isolde does not turn.
15 A Smoke rolls along the silver strands.
16 D ROYAL HERALD [V.O.] (distant, over the wind): Majesty! The east wall has fallen! Return at once!
17 D QUEEN ISOLDE (calling back): Hold the gate!
18 A ¶ She draws a pale sword from her belt.
19 A It blazes white.
20 A Morvan lifts a hand; the smoke thickens into a spear of shadow.
21 D MORVAN: You cannot be in two places, little queen.
22 D QUEEN ISOLDE: I am not in two places. I am here.
23 A ¶ She runs.
24 A The bridge sways.
25 A The spear hurls.
26 A Her blade meets it in a burst of light, and the gorge rings like a bell.
27 D MORVAN: Then fall here.
28 D QUEEN ISOLDE: Not while a thread holds.
29 A ¶ She drives forward.
30 A Smoke breaks around her.
31 A The silver strands blaze.
32 A Morvan roars.
33 A ¶ The wind does not let up.

### SCENE s01030 | INT. ABANDONED PLANETARIUM - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR MIRELLA STROZZI
1 A ¶ A great domed ceiling, plaster cracked like dry riverbed.
2 A Rows of reclining seats, all tilted toward a sky that no longer exists.
3 A Dust hangs in a single shaft of moonlight from a broken skylight.
4 A ¶ INSPECTOR MIRELLA STROZZI, 50s, charcoal overcoat, white glove on one hand, kneels at the base of the star projector, a black iron dumbbell of a machine.
5 A She sets a small cassette recorder on the floor and presses play.
6 D STROZZI [V.O.] (tape, hissing): Entry one. The caretaker was found here, third seat, row nine, facing south. No wound. No struggle. Only the projector, warm to the touch, though power has been cut for eleven years.
7 A ¶ She stops the tape.
8 A Lifts a lens cap.
9 A Underneath, a thumbprint in fresh grease.
10 A ¶ Slowly she stands, looks up at the dead dome.
11 A The cracks branch like constellations nobody named.
12 D STROZZI (softly): Warm.
13 A ¶ She presses record.
14 A Speaks into the recorder.
15 D STROZZI [CONT'D]: Entry two. Someone has been drawing the stars back in.
16 A ¶ Above her, tiny pinpricks of white chalk dot the plaster.
17 A Hundreds.
18 A Fresh.
19 A ¶ The projector clicks.

### SCENE s00011 | INT. DECOMMISSIONED GRAIN ELEVATOR - OPEN-PLAN OFFICE - DAY
Detected names (may be incomplete or contain aliases): PRUDENCE OKAFOR, BARNABY QUILL, DELPHINE ROUSSEAU-ADEYEMI
1 A ¶ Dust hangs in the shafts of light that fall through the old hopper doors.
2 A Forty desks have been dropped onto the concrete in neat rows, and every one of them faces a wall of corrugated steel painted the cheerful green of a hospital.
3 A ¶ PRUDENCE OKAFOR (50s, cardigan buttoned to the throat, lanyard heavy with laminated cards) stands before a whiteboard and caps and uncaps a marker, caps and uncaps it, as if the sound were a metronome for the room.
4 A ¶ At the front desk sit BARNABY QUILL (30s, a tie knotted tight enough to be a verdict) and DELPHINE ROUSSEAU-ADEYEMI (late 20s, headphones around her neck, one earbud in, a half-eaten yogurt sweating at her elbow).
5 D PRUDENCE: The Synergy Taskforce has decided, after consultation, that the synergy is insufficient.
6 A ¶ Barnaby nods before she finishes.
7 A Delphine peels the yogurt lid back, licks it, folds it into a perfect small square.
8 D BARNABY: Insufficient in which direction?
9 D PRUDENCE: Directionally.
10 A ¶ She writes the word DIRECTIONALLY on the whiteboard.
11 A Underlines it twice.
12 A The marker squeaks and dies mid-line.
13 A She looks at it with great tenderness, then sets it in the tray as if laying down a child.
14 D DELPHINE: Is this the meeting about the meeting?
15 D PRUDENCE: This is the meeting about the meeting about the meeting.
16 A ¶ Barnaby and Delphine both reach for the same pen at the same instant.
17 A Their fingers touch.
18 A They both withdraw, Barnaby smoothing his tie, Delphine tucking a strand of hair behind her ear, each looking determinedly at a different corner of the ceiling.
19 A ¶ Somewhere above them, a pigeon walks across a rafter and drops something.
20 A It lands on the carpet tile beside Prudence's shoe.
21 A All three look down at it.
22 A All three look up again.
23 D PRUDENCE [CONT'D]: We'll take that offline.
24 D BARNABY: I'll circulate a note.
25 D DELPHINE: I'll bring a mop.
26 D PRUDENCE: Please do not bring a mop. Mops are a Facilities line item.
27 A ¶ Delphine slowly pulls the earbud out and lays it on the desk beside the yogurt lid.
28 A She straightens it.
29 A Squares it to the edge.
30 A ¶ Prudence picks up a fresh marker.
31 A Holds it.
32 A Does not uncap it.
33 D PRUDENCE [CONT'D]: Barnaby. Your quarterly deck. Is it ready?
34 D BARNABY: It is in a state of readiness.
35 A ¶ He opens his laptop.
36 A The screen glows.
37 A On it, a single slide: a pie chart, entirely one colour.
38 A He angles the lid down a few degrees, and the three of them stand there in the green light of the hopper doors, pretending not to see it.
39 D PRUDENCE: Excellent.
40 A ¶ She writes ACTION ITEMS on the whiteboard.
41 A Under it, nothing.
42 A She stands back and admires the nothing.
43 D DELPHINE: Do I get a lanyard?
44 D PRUDENCE: After the review.
45 D DELPHINE: Which review?
46 D PRUDENCE: The one we are about to schedule.
47 A ¶ Barnaby and Delphine rise together, chairs scraping in unison, and file toward the elevator door that has not worked since 1987.
48 A They arrive at it.
49 A They stop.
50 A They stand side by side, facing steel, and wait.
