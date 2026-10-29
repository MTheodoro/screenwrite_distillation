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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_sonnetG/group_03006.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00016 | EXT. DRY CREEK BED BENEATH A TRESTLE BRIDGE - DAWN
Detected names (may be incomplete or contain aliases): STRANGER, YOUNG WOMAN, JEDEDIAH, ODALYS
1 A ¶ A ribbon of cracked clay winds between two banks of sage.
2 A Above, the old trestle spans the gap like the ribs of a long-dead animal, and the first light slides along its timbers in gold and rust.
3 A ¶ A STRANGER (40s, long coat the color of dried blood, hat low, a face the weather has been arguing with for years) walks his horse down the bank in no particular hurry.
4 A The animal's hooves crunch on the clay.
5 A He halts at the creek's center and swings down, loosens the cinch, and lets the horse stand, ears flicking at the early flies.
6 A ¶ Across the creek, on the opposite bank, sits a YOUNG WOMAN (20s, a man's shirt rolled at the sleeves, hair cut short with a knife, a shotgun resting across her knees) on a stump.
7 A She has been sitting there all night.
8 A A cold fire, a tin cup, a bedroll folded precisely, and a boot print the size of a dinner plate in the dirt beside her.
9 A She does not raise the shotgun.
10 A She does not lower her eyes.
11 D STRANGER: Morning.
12 D YOUNG WOMAN: That's debatable.
13 D STRANGER: I'm looking for a man named Cullen Pike.
14 D YOUNG WOMAN: Never heard of him.
15 D STRANGER: He wears a green scarf. Even in summer. Rides a gray with a split ear.
16 A ¶ The Young Woman shifts the shotgun a little.
17 A A pale hawk circles over the bridge, riding the first warm air, and the Stranger watches it for a moment instead of her.
18 D YOUNG WOMAN: What do you want with him?
19 D STRANGER: He's got something of mine.
20 D YOUNG WOMAN: Everybody's got something of somebody's.
21 A ¶ She stands.
22 A The stump creaks.
23 A She crosses the clay with the shotgun in the crook of her arm, stopping ten paces from him, and he, in answer, takes his hand away from the horse's flank and lets it hang loose and open beside his coat.
24 D YOUNG WOMAN [CONT'D]: What's your name, mister?
25 A ¶ The Stranger's eyes go to the bridge.
26 A To the hawk.
27 A To her.
28 D STRANGER: Jedediah.
29 D YOUNG WOMAN: That's a church name.
30 D JEDEDIAH: My mother had hopes.
31 A ¶ She laughs, one short breath, and it startles her more than it does him.
32 A The shotgun dips an inch.
33 A He notices.
34 A He says nothing about it.
35 D YOUNG WOMAN: I'm Odalys. Cullen was my father.
36 D JEDEDIAH: Was.
37 D ODALYS: He's under the second pier. Since Tuesday.
38 A ¶ Jedediah turns his head slowly and looks up the creek bed toward the trestle, its shadow now laid across the clay in long black bars.
39 A At the foot of the second pier, a mound of fresh-turned earth, a plank driven in at its head.
40 A ¶ He takes off his hat.
41 A Holds it against his chest.
42 A A breeze comes up and the sage whispers and the hawk screams once and swings away.
43 D JEDEDIAH: Who put him there?
44 D ODALYS: I did.
45 D JEDEDIAH: Who killed him?
46 A ¶ Odalys raises the shotgun, finally, and levels it at his belt buckle.
47 A Her hands do not shake.
48 D ODALYS: The man who sent you.

### SCENE pd_dollhouse_5 | INT. DOLLHOUSE - CONTINUOUS
Detected names (may be incomplete or contain aliases): RANK, HELMER, NORA
1 A ¶ outside.
2 D RANK: . It is I. May I come in for a moment?
3 A ¶ in a fretful whisper.
4 D HELMER: . Oh, what does he want now?
5 A ¶ Aloud.
6 D HELMER: Wait a minute!
7 A ¶ Unlocks the door.
8 D HELMER: Come, that’s kind of you not to pass by our door.
9 D RANK: I thought I heard your voice, and felt as if I should like to look in.
10 A ¶ With a swift glance round.
11 D RANK: Ah, yes!—these dear familiar rooms. You are very happy and cosy in here, you two.
12 D HELMER: It seems to me that you looked after yourself pretty well upstairs too.
13 D RANK: Excellently. Why shouldn’t I? Why shouldn’t one enjoy everything in this world?—at any rate as much as one can, and as long as one can. The wine was capital—
14 D HELMER: Especially the champagne.
15 D RANK: So you noticed that too? It is almost incredible how much I managed to put away!
16 D NORA: Torvald drank a great deal of champagne tonight too.
17 D RANK: Did he?
18 D NORA: Yes, and he is always in such good spirits afterwards.
19 D RANK: Well, why should one not enjoy a merry evening after a well-spent day?
20 D HELMER: Well spent? I am afraid I can’t take credit for that.
21 A ¶ clapping him on the back.
22 D RANK: . But I can, you know!
23 D NORA: Doctor Rank, you must have been occupied with some scientific investigation today.
24 D RANK: Exactly.
25 D HELMER: Just listen!—little Nora talking about scientific investigations!
26 D NORA: And may I congratulate you on the result?
27 D RANK: Indeed you may.
28 D NORA: Was it favourable, then?
29 D RANK: The best possible, for both doctor and patient—certainty.
30 A ¶ quickly and searchingly.
31 D NORA: . Certainty?
32 D RANK: Absolute certainty. So wasn’t I entitled to make a merry evening of it after that?
33 D NORA: Yes, you certainly were, Doctor Rank.
34 D HELMER: I think so too, so long as you don’t have to pay for it in the morning.
35 D RANK: Oh well, one can’t have anything in this life without paying for it.
36 D NORA: Doctor Rank—are you fond of fancy-dress balls?
37 D RANK: Yes, if there is a fine lot of pretty costumes.
38 D NORA: Tell me—what shall we two wear at the next?
39 D HELMER: Little featherbrain!—are you thinking of the next already?
40 D RANK: We two? Yes, I can tell you. You shall go as a good fairy—
41 D HELMER: Yes, but what do you suggest as an appropriate costume for that?
42 D RANK: Let your wife go dressed just as she is in everyday life.
43 D HELMER: That was really very prettily turned. But can’t you tell us what you will be?
44 D RANK: Yes, my dear friend, I have quite made up my mind about that.
45 D HELMER: Well?

### SCENE s01095 | EXT. DRY GOAT PEN BEHIND A FORSAKEN CHURCH - EVENING
Detected names (may be incomplete or contain aliases): SHERIFF AUGUSTINE TREVINO, ABIGAIL FROST-MWANGI, JEREMIAH FROST
1 A ¶ 1878.
2 A Dust.
3 A A broken fence.
4 A A leaning cross.
5 A Three goats chew at nothing.
6 A ¶ SHERIFF AUGUSTINE TREVINO, 60s, tin star pinned crooked, stands over a shallow grave.
7 A Hat in his hands.
8 A ABIGAIL FROST-MWANGI, 30s, widow's black, holds a rusted shovel.
9 A Between them, a boy, JEREMIAH FROST, 10, squats by a goat and strokes its ear.
10 A ¶ The wind pushes a tumbleweed through the pen.
11 A Nobody watches it go.
12 D AUGUSTINE: Ma'am.
13 A ¶ Abigail doesn't turn.
14 A She sets the shovel against the fence.
15 A Dusts her palms on her skirt.
16 A One at a time.
17 D AUGUSTINE [CONT'D]: He'd have wanted a preacher.
18 D ABIGAIL: He'd have wanted his horse.
19 A ¶ Augustine nods.
20 A Looks at the cross.
21 A Looks at the boy.
22 A Jeremiah lifts a handful of dry grass for the goat.
23 D AUGUSTINE: I'll see to the horse.
24 D ABIGAIL: Don't trouble yourself.
25 D AUGUSTINE: No trouble.
26 A ¶ She takes the hat from his hands and sets it on the cross.
27 A The brim catches the wind.
28 A She weights it with a stone.
29 D ABIGAIL: That's his now.
30 A ¶ Augustine opens his mouth.
31 A Closes it.
32 A Pulls a folded paper from his vest and holds it out.
33 A She doesn't take it.
34 D ABIGAIL [CONT'D]: Read it to him.
35 A ¶ Augustine looks at the grave.
36 A Clears his throat.
37 A Doesn't read.
38 A He folds the paper smaller, crouches, and tucks it into the dirt beside the cross.
39 A ¶ Jeremiah stands, brushes his knees.
40 A Walks to his mother.
41 A Takes her hand.
42 A Together they look at the cross until the light turns orange.
43 A The goats wander off.

### SCENE s01033 | INT. FUNICULAR CAR - MID-SLOPE - NIGHT
Detected names (may be incomplete or contain aliases): AUGUST MWANGI, SILAS DRAKEFORD, ZOFIA BR, TEN
1 A ¶ Stalled.
2 A Wooden benches, brass rails.
3 A Outside, black pines and a thousand feet of dark.
4 A Wind rocks the car on its cable.
5 A ¶ AUGUST MWANGI, 40s, charcoal coat, gloved hands folded, sits very still.
6 A Tall, calm, eyes of a chess player.
7 A ¶ Across from him, SILAS DRAKEFORD, 40s, wet hair, a bruise ripening on his cheekbone, grips a leather briefcase to his chest.
8 D SILAS: You pulled the brake.
9 D AUGUST: I pulled nothing.
10 D SILAS: Then who did?
11 D AUGUST: The cable did what cables do.
12 A ¶ Silas shifts.
13 A His hand slides toward his pocket.
14 A August watches it.
15 D AUGUST [CONT'D]: Don't.
16 D SILAS: I wasn't.
17 D AUGUST: Then he wouldn't have said I was.
18 D SILAS: Who?
19 D AUGUST: You know who.
20 A ¶ Silas swallows.
21 A His eyes dart to the window.
22 A Nothing but pine and fog.
23 D SILAS: He told you I took it.
24 D AUGUST: He told me you were smart. And that smart men carry briefcases.
25 A ¶ Silas laughs, brittle.
26 A He sets the briefcase on his knees.
27 A Clasps it shut.
28 A ¶ A scrape.
29 A On the roof.
30 A Both men look up.
31 D AUGUST [CONT'D]: Deer.
32 D SILAS: On a funicular?
33 A ¶ Another scrape, heavier.
34 A The car sways.
35 A ¶ The roof hatch slams open.
36 A A boot drops through.
37 A Then a leg.
38 A Then a woman, ZOFIA BRÅTEN, 30s, climbing gear, ice axe, headlamp blazing.
39 A She lands in a crouch, axe leveled.
40 D ZOFIA: Nobody move.
41 A ¶ Both men raise their hands.
42 A She sweeps the light across them, lands on August.
43 D ZOFIA [CONT'D]: You. Open the briefcase.
44 D AUGUST: It's his.
45 D ZOFIA (to Silas): Then you.
46 A ¶ Silas hesitates.
47 A His hand shakes.
48 A He unlatches.
49 A Flips the lid.
50 A ¶ Inside, nothing.
51 A Foam padding, cut to hold something that's no longer there.
52 D ZOFIA [CONT'D]: Where is it?
53 D SILAS: I don't know.
54 A ¶ August smiles.
55 A Slowly lowers his hands.
56 D AUGUST: He knows.
57 A ¶ He nods at the window.
58 A On the glass, a small hand-shaped print.
59 A On the outside.
60 A ¶ The car lurches.
61 A Falls ten feet and catches.
62 A ¶ All three scream.

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
