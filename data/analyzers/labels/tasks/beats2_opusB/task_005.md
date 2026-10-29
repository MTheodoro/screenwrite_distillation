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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_opusB/group_07005.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE pd_dollhouse_2 | INT. DOLLHOUSE - CONTINUOUS
Detected names (may be incomplete or contain aliases): THE CHILDREN, NORA, MAID, HELMER
1 D THE CHILDREN: . Mother, the stranger man has gone out through the gate.
2 D NORA: Yes, dears, I know. But, don’t tell anyone about the stranger man. Do you hear? Not even papa.
3 D CHILDREN: No, mother; but will you come and play again?
4 D NORA: No, no,—not now.
5 D CHILDREN: But, mother, you promised us.
6 D NORA: Yes, but I can’t now. Run away in; I have such a lot to do. Run away in, my sweet little darlings.
7 A ¶ She gets them into the room by degrees and shuts the door on them; then sits down on the sofa, takes up a piece of needlework and sews a few stitches, but soon stops.
8 D NORA: No!
9 A ¶ Throws down the work, gets up, goes to the hall door and calls out.
10 D NORA: Helen! bring the Tree in.
11 A ¶ Goes to the table on the left, opens a drawer, and stops again.
12 D NORA: No, no! it is quite impossible!
13 A ¶ coming in with the Tree.
14 D MAID: . Where shall I put it, ma’am?
15 D NORA: Here, in the middle of the floor.
16 D MAID: Shall I get you anything else?
17 D NORA: No, thank you. I have all I want.
18 A ¶ Exit MAID.
19 A ¶ begins dressing the tree.
20 D NORA: . A candle here-and flowers here—The horrible man! It’s all nonsense—there’s nothing wrong. The tree shall be splendid! I will do everything I can think of to please you, Torvald!—I will sing for you, dance for you—
21 A ¶ HELMER comes in with some papers under his arm.
22 D NORA: Oh! are you back already?
23 D HELMER: Yes. Has anyone been here?
24 D NORA: Here? No.
25 D HELMER: That is strange. I saw Krogstad going out of the gate.
26 D NORA: Did you? Oh yes, I forgot, Krogstad was here for a moment.
27 D HELMER: Nora, I can see from your manner that he has been here begging you to say a good word for him.
28 D NORA: Yes.
29 D HELMER: And you were to appear to do it of your own accord; you were to conceal from me the fact of his having been here; didn’t he beg that of you too?
30 D NORA: Yes, Torvald, but—
31 D HELMER: Nora, Nora, and you would be a party to that sort of thing? To have any talk with a man like that, and give him any sort of promise? And to tell me a lie into the bargain?
32 D NORA: A lie—?
33 D HELMER: Didn’t you tell me no one had been here?
34 A ¶ Shakes his finger at her.
35 D HELMER: My little songbird must never do that again. A songbird must have a clean beak to chirp with—no false notes!
36 A ¶ Puts his arm round her waist.
37 D HELMER: That is so, isn’t it? Yes, I am sure it is.
38 A ¶ Lets her go.
39 D HELMER: We will say no more about it.
40 A ¶ Sits down by the stove.
41 D HELMER: How warm and snug it is here!
42 A ¶ Turns over his papers.
43 A ¶ after a short pause, during which she busies herself with the Christmas Tree.
44 D NORA: Torvald!
45 D HELMER: Yes.

### SCENE s01074 | INT. OFFICE SUPPLY CLOSET WITH A BIRTHDAY PARTY - DAY
Detected names (may be incomplete or contain aliases): GLORIA PETROSYAN, DEZ, ADEYEMI, PRIYA NAIR, TALL MAN, BERTRAM, MAILROOM KID
1 A ¶ A closet turned party room.
2 A Paper streamers.
3 A A sheet cake on a filing box.
4 A Fluorescent hum.
5 A A banner: HAPPY 5TH ANNIVERSARY OF THE REORG.
6 A ¶ GLORIA PETROSYAN, 50s, regional manager, lanyard heavy with badges, cuts cake into identical squares.
7 A DESMOND "DEZ" ADEYEMI, 30s, tie loosened, scrolls his phone.
8 A PRIYA NAIR, 20s, intern, holds a stack of paper plates like a shield.
9 A ¶ A TALL MAN in a gray suit leans in the doorway.
10 A Clipboard.
11 A No smile.
12 A Nobody knows him.
13 D GLORIA: Cake?
14 D DEZ: I'm good.
15 D PRIYA: I'll take his. If he's not.
16 D GLORIA: Take two.
17 A ¶ Priya takes two.
18 A Eats one standing.
19 A Dez keeps scrolling.
20 D TALL MAN: Is this the Q3 alignment huddle?
21 D GLORIA: It's cake.
22 D TALL MAN: But is it a huddle?
23 D DEZ (muttering): Everything's a huddle.
24 D PRIYA: Is that bad?
25 D DEZ: It's Tuesday.
26 A ¶ The Tall Man writes something.
27 A Gloria slides a square toward him.
28 A He doesn't take it.
29 D GLORIA: You're with Compliance?
30 D TALL MAN: Efficiency.
31 D DEZ: Same floor as Compliance.
32 D TALL MAN: Different elevator.
33 A ¶ Priya laughs.
34 A Stops.
35 A Looks at Gloria.
36 A Gloria is not laughing.
37 D GLORIA: Name?
38 D TALL MAN: Hollis. Bertram Hollis.
39 D GLORIA: Mr. Hollis. Cake?
40 D BERTRAM (softening): Fine. A small one.
41 A ¶ She hands him a plate.
42 A He eats.
43 A Chews slowly.
44 A Dez finally pockets his phone.
45 D DEZ: So what's being made efficient?
46 D BERTRAM: Closets.
47 D PRIYA: This closet?
48 D BERTRAM: Any closet.
49 A ¶ Gloria and Dez trade a look.
50 A Priya stuffs the second square in her mouth whole.
51 D GLORIA: We use this one.
52 D BERTRAM: For parties.
53 D GLORIA: For morale.
54 D BERTRAM: Morale isn't a line item.
55 D DEZ: Neither is you.
56 A ¶ Silence.
57 A Priya swallows.
58 A Bertram caps his pen, uncaps it.
59 D BERTRAM: I'll note the cake.
60 D GLORIA: Note the frosting. It's lemon.
61 D BERTRAM: Lemon.
62 D PRIYA: Lemon's her mother's recipe.
63 D GLORIA: It's not.
64 D PRIYA: Oh.
65 A ¶ The door swings.
66 A A cart of toner cartridges rolls in, pushed by nobody visible.
67 A Everyone steps back.
68 A The cart bumps the cake box.
69 A Cake wobbles.
70 A ¶ All four grab at the box.
71 A Dez catches the front corner.
72 A Priya the back.
73 A Gloria the cake.
74 A Bertram the banner.
75 A Everything holds.
76 A ¶ They stand like that.
77 A Breathing.
78 D DEZ: Nobody say anything.
79 D BERTRAM: I wasn't going to.
80 D GLORIA: Mr. Hollis, you're holding a banner.
81 D BERTRAM: So I am.
82 A ¶ He doesn't let go.
83 A Neither does anyone else.
84 A The fluorescent hum fills the closet.
85 D PRIYA: Is this the huddle?
86 D BERTRAM (dry): Yes.
87 D GLORIA: Then I'd say alignment is achieved.
88 A ¶ Dez snorts.
89 A Priya giggles.
90 A Bertram, against his will, almost smiles.
91 A The cart's wheel squeaks once, and a tiny voice calls from behind the toner.
92 D MAILROOM KID [O.S.]: Sorry! Sorry. Is that Gloria's closet?
93 D GLORIA (calling): It's everyone's closet.
94 D MAILROOM KID [O.S.]: Cool. Also there's cake?
95 A ¶ Gloria hands Priya the knife.
96 D GLORIA: Cut another.

### SCENE s01116 | INT. VINEYARD CELLAR - BARREL ROOM - DUSK
Detected names (may be incomplete or contain aliases): IZABELLA ROMANO-OKAFOR, TEDDY, GALLOWAY, CAMILA ROMANO, HENRIK ABASI-LUND
1 A ¶ Oak barrels in rows.
2 A Candlelight.
3 A A tasting table with four glasses.
4 A ¶ IZABELLA ROMANO-OKAFOR, 30s, in a linen apron, pours.
5 A Across from her, THEODORE "TEDDY" GALLOWAY, 30s, her ex, swirls and sniffs.
6 A At the end of the table, her sister CAMILA ROMANO, 30s, in a sundress, studies him.
7 A And beside Camila, a quiet man, HENRIK ABASI-LUND, 40s, who has said nothing all evening.
8 A ¶ Teddy sips.
9 A Izabella watches.
10 A Camila watches Izabella.
11 A Henrik watches the wine.
12 D TEDDY: It's good.
13 D IZABELLA: It's better than good.
14 D TEDDY: It's... complex.
15 D CAMILA: He means it's sour.
16 D TEDDY: I do not.
17 D CAMILA: You do. Your nose wrinkles.
18 A ¶ Teddy touches his nose.
19 A Izabella suppresses a smile.
20 A Henrik takes a slow sip and sets down his glass.
21 D HENRIK: It's perfect.
22 A ¶ All three turn.
23 A He shrugs, unbothered.
24 D HENRIK [CONT'D]: I'm the one who sold her the grapes.
25 D IZABELLA (to Teddy): That's Henrik.
26 D TEDDY: I gathered.
27 D IZABELLA: And that's my fiance.
28 A ¶ Teddy's glass stops halfway to his mouth.
29 A Camila lowers her eyes.
30 A Henrik, calmly, takes Izabella's hand.
31 D TEDDY: ...Congratulations.
32 D IZABELLA: Thank you, Teddy.
33 A ¶ He drains the glass.
34 A Sets it down.
35 A Smooths his jacket.
36 A Camila slides the bottle toward him, tender.
37 D CAMILA: Another?
38 D TEDDY (a breath): Please.

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

### SCENE s01028 | INT. DERELICT ORBITAL STATION - OBSERVATION RING - CONTINUOUS
Detected names (may be incomplete or contain aliases): ORSOLYA, TAVI
1 A ¶ Frost on the viewport.
2 A Beyond it, a gas giant fills the sky, banded and indifferent.
3 A Emergency lights pulse amber.
4 A ¶ ORSOLYA, 40s, scavenger's patched suit, helmet clipped to her hip, drifts along a handrail.
5 A TAVI, 20s, tool belt too big for him, follows with a lantern.
6 A ¶ She stops.
7 A Taps the wall.
8 A Listens.
9 D ORSOLYA (to the empty ring): Anyone aboard. We're salvage. We mean no harm.
10 A ¶ Silence.
11 A Frost ticks on the glass.
12 D TAVI: Maybe just--
13 A ¶ She raises a hand.
14 A He stops.
15 D ORSOLYA (again, louder): Anyone aboard.
16 A ¶ A pause.
17 A Nothing.
18 A She nods once, as if she expected nothing.
19 A ¶ She opens a wall panel.
20 A Wiring shredded.
21 A Burned.
22 D ORSOLYA [CONT'D] (muttering): Not an accident.
23 D TAVI: What?
24 D ORSOLYA: Nothing. Hold the light.
25 A ¶ He holds it.
26 A His hand trembles.
27 A The beam shakes across the wires.
28 A ¶ She notices.
29 A Says nothing.
30 A Takes the lantern from him.
31 A Hands him a screwdriver instead.
32 D ORSOLYA [CONT'D]: Twelve screws. Take the plate off.
33 A ¶ He works.
34 A Slowly.
35 A His eyes keep sliding to the viewport.
36 A ¶ A thud rolls through the ring.
37 A Metal on metal, somewhere aft.
38 A ¶ Both freeze.
39 D TAVI: That was close.
40 D ORSOLYA: That was far.
41 D TAVI: It sounded close.
42 D ORSOLYA: Far things sound close in a hull.
43 A ¶ She doesn't sound sure.
44 A Her thumb strokes the edge of the lantern.
45 A ¶ The thud again.
46 A Louder.
47 A Then a long scrape.
48 A ¶ Tavi drops the screwdriver.
49 A It floats, tumbling.
50 D ORSOLYA [CONT'D] (to the ring, calm): Everyone stay where you are. This is a recovery crew. We're leaving in five minutes.
51 D TAVI: There's no one here.
52 D ORSOLYA: I know.
53 A ¶ She grabs his sleeve.
54 A Tows him toward the airlock.
55 A Her grip is gentle.
56 A Too gentle.
57 A ¶ They reach the hatch.
58 A She spins the wheel.
59 A It opens onto the cold, bright tunnel of their own ship.
60 A ¶ She pushes him through first.
61 D TAVI (over his shoulder): You okay?
62 D ORSOLYA: Fine.
63 A ¶ She follows.
64 A Looks back once.
65 A The ring is quiet, amber, still.
66 A ¶ Then, from the dark, one more knock.
67 A Small.
68 A Almost polite.
69 A ¶ She seals the hatch.
70 D ORSOLYA [CONT'D] (to herself): Five minutes.
71 A ¶ She doesn't move for a long time.
72 A Tavi picks up the lantern and sets it between them, lighting both their faces.

### SCENE s00015 | INT. OBSERVATORY DOME - NIGHT
Detected names (may be incomplete or contain aliases): HETTY, BLACKWOOD, BASTIAN ODUYA, SOLI, VARGAS, WILFRED PRATT, MEI-LING TAN
1 A ¶ A brass telescope as long as a bus points at a slit of stars.
2 A The floor is parquet, the walls lined with star charts and one tipped-over teacup.
3 A On the floor beside the eyepiece platform lies a coat, empty, its sleeves flung wide.
4 A ¶ Five people stand in a loose ring around it, and nobody wants to be the first to look down.
5 A ¶ HENRIETTA "HETTY" BLACKWOOD (60s, observatory director, tweed, a magnifying glass on a chain) stares at the coat.
6 A BASTIAN ODUYA (30s, graduate student, ink on his fingers, a wool hat pulled low).
7 A SOLEDAD "SOLI" VARGAS (40s, night technician, thermos in one hand and the dome keys in the other).
8 A WILFRED PRATT (70s, retired astronomer, a cane, a rumpled evening jacket).
9 A And MEI-LING TAN (20s, journalist, notebook, recorder held out like a candle).
10 D HETTY: Who last saw Doctor Marrow?
11 D BASTIAN: Soli did. She locked up at nine.
12 D SOLI: I locked the north door. I did not lock the dome.
13 D PRATT: Soledad, my dear, a dome has no door. It is a lid.
14 D SOLI: Then I locked the lid, Mr. Pratt.
15 D MEI-LING: Let's slow down. Soli, you said Doctor Marrow asked you for the keys?
16 D SOLI: He asked. I said no.
17 D BASTIAN: You told me you gave them to him.
18 D SOLI: I told you he asked, Bash. You heard what you wanted.
19 D HETTY: Bastian. Where were you at nine?
20 D BASTIAN: Plate room. Cataloguing.
21 D PRATT: For five hours? That's not cataloguing, it's meditation.
22 D BASTIAN: It was the Hartwell plates, Mr. Pratt. You know how many there are.
23 D PRATT: I know how many there were. I counted them in 1989.
24 D MEI-LING: Mr. Pratt, you told me earlier you hadn't been to the observatory in years.
25 D PRATT: Did I?
26 D MEI-LING: Your exact words were, "I haven't set foot on this hill since the Marrow appointment."
27 D PRATT: Then I was speaking figuratively.
28 D HETTY: Wilfred. You have a key.
29 D PRATT: Everyone has a key, Hetty. That's the tragedy of the institution.
30 D SOLI: I don't think everyone has a key.
31 D HETTY: Soli, who does?
32 D SOLI: Me. You. Doctor Marrow.
33 D BASTIAN: And Pratt, apparently.
34 D PRATT: Apparently.
35 D MEI-LING: So four keys. And a coat on the floor.
36 D HETTY: Don't touch the coat, Miss Tan.
37 D MEI-LING: I wasn't going to.
38 D SOLI: You were. You've been inching toward it for five minutes.
39 D MEI-LING: I'm a reporter. Inching is the job.
40 D PRATT: Inching is how the best of us died, my girl.
41 D HETTY: Wilfred, enough.
42 D PRATT: I'm only saying. The coat is on the floor, the lid is open, and Doctor Marrow is not in either of them. Somebody in this room is going to have to explain that. And I would very much like for it not to be me.
43 D BASTIAN: Then explain why your cane is wet.
44 A ¶ A silence.
45 A The telescope creaks.
46 D PRATT: It rained.
47 D SOLI: It hasn't rained since Tuesday.
48 D HETTY: Wilfred.
49 D PRATT: Hetty.
50 D HETTY: Where is he?

### SCENE s01072 | INT. MAINTENANCE CRAWLSPACE ABOVE CUBICLE FARM - DAY
Detected names (may be incomplete or contain aliases): RENATA KOWALCZYK, INTERCOM
1 A ¶ Ductwork.
2 A Dust.
3 A A folding chair wedged between pipes.
4 A A thermos.
5 A A lunch bag labeled "DO NOT TOUCH."
6 A ¶ RENATA KOWALCZYK, 40s, lanyard, cardigan, eats a sandwich.
7 A Content.
8 A A small desk fan hums.
9 A ¶ Through the vent grate below: the office.
10 A Fluorescent hum.
11 A Keyboards.
12 D INTERCOM [V.O.]: Good afternoon, team. A reminder that the quarterly synergy audit begins at three.
13 A ¶ Renata chews.
14 A Nods.
15 A Pours tea.
16 D INTERCOM [V.O., CONT'D]: Auditors will be reviewing all workstations. Including unoccupied ones.
17 A ¶ She stops chewing.
18 D INTERCOM [V.O., CONT'D]: Employee Kowalczyk's desk has been unoccupied for eleven months. Please report to Facilities.
19 A ¶ Renata sets down the sandwich.
20 A Looks through the grate.
21 A Her empty cubicle.
22 A A dead plant.
23 A Her nameplate.
24 A ¶ A flashlight beam sweeps the crawlspace behind her.
25 D RENATA (whispering): Oh, no.

### SCENE s01107 | EXT. ROOFTOP WATER TANK - SUBURBAN NIGHT
Detected names (may be incomplete or contain aliases): SADIE KOWALSKI-IBRAHIM, MILO BERGSTROM, RADIO
1 A ¶ A wooden tank on stilts above a flat tar roof.
2 A Cicadas.
3 A A radio plays low from an open window below.
4 A ¶ SADIE KOWALSKI-IBRAHIM, 16, sits on the ledge with her feet dangling.
5 A Her younger cousin MILO BERGSTROM, 13, climbs the last rung of the ladder, breathless.
6 A He freezes when he sees her.
7 A She doesn't turn.
8 A ¶ He climbs onto the roof.
9 A She hears him.
10 A Shifts a few inches to make room.
11 A He sits.
12 A They stare at the neighbors' lit windows.
13 D RADIO [V.O.] (muffled, from below): ...and now, the late-night countdown. Number three this week...
14 A ¶ She hums along.
15 A He taps his heel against the brick.
16 A A long moment passes.
17 A ¶ He offers her a cracker from his pocket.
18 A She takes it.
19 A They chew in the dark.
20 A ¶ She shoves him gently.
21 A He shoves back.
22 A She nearly slides off the ledge; he grabs her sleeve.
23 A They both go still.
24 A Then she laughs, and he lets go, and neither of them says what almost happened.
25 D RADIO [V.O.]: ...and the number one song in the country...
26 A ¶ She stands, brushes crumbs from her knees.
27 A Holds out her hand.
28 A He takes it.
29 A They climb down together, the song swelling behind them.

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

### SCENE pd_earnest_5 | INT. EARNEST - CONTINUOUS
Detected names (may be incomplete or contain aliases): CECILY, ALGERNON, GWENDOLEN, JACK, MERRIMAN, LADY BRACKNELL
1 D CECILY: To please me you are ready to face this fearful ordeal?
2 D ALGERNON: I am!
3 D GWENDOLEN: How absurd to talk of the equality of the sexes! Where questions of self-sacrifice are concerned, men are infinitely beyond us.
4 D JACK: We are.
5 A ¶ Clasps hands with Algernon.
6 D CECILY: They have moments of physical courage of which we women know absolutely nothing.
7 A ¶ To Jack.
8 D GWENDOLEN: Darling!
9 A ¶ To Cecily.
10 D ALGERNON: Darling!
11 A ¶ They fall into each other’s arms.
12 A ¶ Enter Merriman.
13 A When he enters he coughs loudly, seeing the situation.
14 D MERRIMAN: Ahem! Ahem! Lady Bracknell!
15 D JACK: Good heavens!
16 A ¶ Enter Lady Bracknell.
17 A The couples separate in alarm.
18 A Exit Merriman.
19 D LADY BRACKNELL: Gwendolen! What does this mean?
20 D GWENDOLEN: Merely that I am engaged to be married to Mr. Worthing, mamma.
21 D LADY BRACKNELL: Come here. Sit down. Sit down immediately. Hesitation of any kind is a sign of mental decay in the young, of physical weakness in the old.
22 A ¶ Turns to Jack.
23 D LADY BRACKNELL: Apprised, sir, of my daughter’s sudden flight by her trusty maid, whose confidence I purchased by means of a small coin, I followed her at once by a luggage train. Her unhappy father is, I am glad to say, under the impression that she is attending a more than usually lengthy lecture by the University Extension Scheme on the Influence of a permanent income on Thought. I do not propose to undeceive him. Indeed I have never undeceived him on any question. I would consider it wrong. But of course, you will clearly understand that all communication between yourself and my daughter must cease immediately from this moment. On this point, as indeed on all points, I am firm.
24 D JACK: I am engaged to be married to Gwendolen, Lady Bracknell!
25 D LADY BRACKNELL: You are nothing of the kind, sir. And now, as regards Algernon! . . . Algernon!
26 D ALGERNON: Yes, Aunt Augusta.
27 D LADY BRACKNELL: May I ask if it is in this house that your invalid friend Mr. Bunbury resides?
28 A ¶ Stammering.
29 D ALGERNON: Oh! No! Bunbury doesn’t live here. Bunbury is somewhere else at present. In fact, Bunbury is dead.
30 D LADY BRACKNELL: Dead! When did Mr. Bunbury die? His death must have been extremely sudden.
31 A ¶ Airily.
32 D ALGERNON: Oh! I killed Bunbury this afternoon. I mean poor Bunbury died this afternoon.
33 D LADY BRACKNELL: What did he die of?
34 D ALGERNON: Bunbury? Oh, he was quite exploded.
35 D LADY BRACKNELL: Exploded! Was he the victim of a revolutionary outrage? I was not aware that Mr. Bunbury was interested in social legislation. If so, he is well punished for his morbidity.
36 D ALGERNON: My dear Aunt Augusta, I mean he was found out! The doctors found out that Bunbury could not live, that is what I mean—so Bunbury died.
37 D LADY BRACKNELL: He seems to have had great confidence in the opinion of his physicians. I am glad, however, that he made up his mind at the last to some definite course of action, and acted under proper medical advice. And now that we have finally got rid of this Mr. Bunbury, may I ask, Mr. Worthing, who is that young person whose hand my nephew Algernon is now holding in what seems to me a peculiarly unnecessary manner?
38 D JACK: That lady is Miss Cecily Cardew, my ward.
39 A ¶ Lady Bracknell bows coldly to Cecily.
40 D ALGERNON: I am engaged to be married to Cecily, Aunt Augusta.
41 D LADY BRACKNELL: I beg your pardon?
42 D CECILY: Mr. Moncrieff and I are engaged to be married, Lady Bracknell.
43 A ¶ With a shiver, crossing to the sofa and sitting down.
44 D LADY BRACKNELL: I do not know whether there is anything peculiarly exciting in the air of this particular part of Hertfordshire, but the number of engagements that go on seems to me considerably above the proper average that statistics have laid down for our guidance. I think some preliminary inquiry on my part would not be out of place. Mr. Worthing, is Miss Cardew at all connected with any of the larger railway stations in London? I merely desire information. Until yesterday I had no idea that there were any families or persons whose origin was a Terminus.
45 A ¶ Jack looks perfectly furious, but restrains himself.
46 A ¶ In a clear, cold voice.
47 D JACK: Miss Cardew is the grand-daughter of the late Mr. Thomas Cardew of 149 Belgrave Square, S.W.; Gervase Park, Dorking, Surrey; and the Sporran, Fifeshire, N.B.
48 D LADY BRACKNELL: That sounds not unsatisfactory. Three addresses always inspire confidence, even in tradesmen. But what proof have I of their authenticity?

### SCENE s01070 | INT. FLOODED RICE MILL - NIGHT
Detected names (may be incomplete or contain aliases): SERGEANT OKAFOR, CORPORAL HALVORSEN, PRIVATE LIN, STRANGER, TEODOR
1 A ¶ Knee-deep brown water.
2 A Sacks float like dead cattle.
3 A SERGEANT OKAFOR, 40s, scarred jaw, holds a lantern low.
4 A CORPORAL HALVORSEN, 20s, freckled, covers the door with a rifle.
5 A PRIVATE LIN, 19, thin, shivers beside a radio set.
6 A ¶ A man in a farmer's coat wades out of the dark.
7 A Hands up.
8 A STRANGER, 50s, mud to the waist.
9 D STRANGER: Don't shoot. I live here.
10 D OKAFOR: Nobody lives here. Name.
11 D STRANGER: Teodor. Teodor Vasko. The mill is my brother's.
12 A ¶ Halvorsen steps closer.
13 A Lin keeps her eyes on the radio.
14 D HALVORSEN: Sarge, he came from the north bank. That's their side.
15 D TEODOR: The bridge is gone. I swam.
16 A ¶ Distant engines.
17 A Okafor kills the lantern.
18 A Dark.
19 D OKAFOR (whispering): Lin. Radio. Now.
20 D LIN: Static, Sergeant. Only static.
21 A ¶ The engines grow louder.
22 A Halvorsen cocks the rifle.

### SCENE pd_earnest_3 | INT. EARNEST - CONTINUOUS
Detected names (may be incomplete or contain aliases): CHASUBLE, MISS PRISM, CECILY, JACK, MERRIMAN, ALGERNON
1 D CHASUBLE: It’s pleasant, is it not, to see so perfect a reconciliation? I think we might leave the two brothers together.
2 D MISS PRISM: Cecily, you will come with us.
3 D CECILY: Certainly, Miss Prism. My little task of reconciliation is over.
4 D CHASUBLE: You have done a beautiful action to-day, dear child.
5 D MISS PRISM: We must not be premature in our judgments.
6 D CECILY: I feel very happy.
7 A ¶ They all go off except Jack and Algernon.
8 D JACK: You young scoundrel, Algy, you must get out of this place as soon as possible. I don’t allow any Bunburying here.
9 A ¶ Enter Merriman.
10 D MERRIMAN: I have put Mr. Ernest’s things in the room next to yours, sir. I suppose that is all right?
11 D JACK: What?
12 D MERRIMAN: Mr. Ernest’s luggage, sir. I have unpacked it and put it in the room next to your own.
13 D JACK: His luggage?
14 D MERRIMAN: Yes, sir. Three portmanteaus, a dressing-case, two hat-boxes, and a large luncheon-basket.
15 D ALGERNON: I am afraid I can’t stay more than a week this time.
16 D JACK: Merriman, order the dog-cart at once. Mr. Ernest has been suddenly called back to town.
17 D MERRIMAN: Yes, sir.
18 A ¶ Goes back into the house.
19 D ALGERNON: What a fearful liar you are, Jack. I have not been called back to town at all.
20 D JACK: Yes, you have.
21 D ALGERNON: I haven’t heard any one call me.
22 D JACK: Your duty as a gentleman calls you back.
23 D ALGERNON: My duty as a gentleman has never interfered with my pleasures in the smallest degree.
24 D JACK: I can quite understand that.
25 D ALGERNON: Well, Cecily is a darling.
26 D JACK: You are not to talk of Miss Cardew like that. I don’t like it.
27 D ALGERNON: Well, I don’t like your clothes. You look perfectly ridiculous in them. Why on earth don’t you go up and change? It is perfectly childish to be in deep mourning for a man who is actually staying for a whole week with you in your house as a guest. I call it grotesque.
28 D JACK: You are certainly not staying with me for a whole week as a guest or anything else. You have got to leave . . . by the four-five train.
29 D ALGERNON: I certainly won’t leave you so long as you are in mourning. It would be most unfriendly. If I were in mourning you would stay with me, I suppose. I should think it very unkind if you didn’t.
30 D JACK: Well, will you go if I change my clothes?
31 D ALGERNON: Yes, if you are not too long. I never saw anybody take so long to dress, and with such little result.
32 D JACK: Well, at any rate, that is better than being always over-dressed as you are.
33 D ALGERNON: If I am occasionally a little over-dressed, I make up for it by being always immensely over-educated.
34 D JACK: Your vanity is ridiculous, your conduct an outrage, and your presence in my garden utterly absurd. However, you have got to catch the four-five, and I hope you will have a pleasant journey back to town. This Bunburying, as you call it, has not been a great success for you.
35 A ¶ Goes into the house.
36 D ALGERNON: I think it has been a great success. I’m in love with Cecily, and that is everything.
37 A ¶ [Enter Cecily at the back of the garden.
38 A She picks up the can and begins to water the flowers.] But I must see her before I go, and make arrangements for another Bunbury.
39 A Ah, there she is.
40 D CECILY: Oh, I merely came back to water the roses. I thought you were with Uncle Jack.
41 D ALGERNON: He’s gone to order the dog-cart for me.
42 D CECILY: Oh, is he going to take you for a nice drive?
43 D ALGERNON: He’s going to send me away.
44 D CECILY: Then have we got to part?
45 D ALGERNON: I am afraid so. It’s a very painful parting.
46 D CECILY: It is always painful to part from people whom one has known for a very brief space of time. The absence of old friends one can endure with equanimity. But even a momentary separation from anyone to whom one has just been introduced is almost unbearable.
47 D ALGERNON: Thank you.

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

### SCENE s00008 | INT. MUNICIPAL PLANETARIUM - CONTROL ROOM - NIGHT
Detected names (may be incomplete or contain aliases): JUNE, ASANTE, WALLACE PYO
1 A ¶ A cramped booth above the dome.
2 A Dials, a projector the size of an oven, a dead cup of coffee on every flat surface.
3 A ¶ JUNIPER "JUNE" ASANTE (30s, hoodie, headset, a laptop plastered with stickers) sits at a console, bored.
4 A Beside her, WALLACE PYO (60s, security guard uniform one size small, a thermos) pretends to read a paperback.
5 A ¶ Through the glass, the empty dome is lit with a slow field of artificial stars.
6 D WALLACE: You're not supposed to be up here.
7 D JUNE: Maintenance.
8 D WALLACE: At two a.m.?
9 D JUNE: Stars don't recalibrate themselves.
10 A ¶ He sips from the thermos.
11 A Turns a page without reading it.
12 D JUNE [CONT'D] (into headset, flat): Ceiling's clear. Roof hatch in four.
13 D WALLACE: Who're you talking to?
14 D JUNE: Myself. Old habit.
15 D WALLACE: You said "roof hatch."
16 D JUNE: I said "roof catch." As in, catch up on emails.
17 D WALLACE: Mm.
18 A ¶ He doesn't believe her.
19 A He doesn't move, either.
20 A ¶ June taps a key.
21 A The stars shift.
22 A The constellation of Orion slides west.
23 D WALLACE [CONT'D]: My wife loved Orion.
24 D JUNE: Everyone does.
25 D WALLACE: She said it looked like a man waiting for a bus.
26 A ¶ June laughs.
27 A Real.
28 A Surprised.
29 D JUNE: That's good.
30 D WALLACE: She was good.
31 A ¶ Quiet.
32 A The projector whirs.
33 D JUNE (under her breath, to the headset): Hold. Hold. He's talking.
34 D WALLACE: There it is again.
35 D JUNE: Hold on, I'm - (beat) - praying. Quietly. For my laptop. It crashes.
36 D WALLACE: Sure it does.
37 A ¶ He sets down the paperback, stands, and stretches until his back cracks.
38 D WALLACE [CONT'D] (to the empty booth): Everyone out of the vault when you're done, please. I lock at six.
39 A ¶ Beat.
40 A June looks at him.
41 D JUNE: You knew.
42 D WALLACE: I'm sixty-one. I know what a van looks like parked behind a dome at midnight.
43 D JUNE: And you sat here.
44 D WALLACE: I'm on break.
45 A ¶ He pours coffee.
46 A Offers her the cup.
47 A ¶ She takes it.
48 D WALLACE [CONT'D]: Don't take the telescope. It's on loan from the university.
49 D JUNE (into headset): Hear that, everybody? Leave the telescope.
50 A ¶ Overhead, the stars drift on, indifferent.

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

### SCENE s01055 | INT. PHILOMENA'S KITCHEN - SUNDAY AFTERNOON
Detected names (may be incomplete or contain aliases): PHILOMENA ROSSETTI, ARTUR ROSSETTI, SOLEDAD
1 A ¶ A kitchen from another decade.
2 A Yellow linoleum, a table with a plastic cloth printed with lemons, a clock shaped like a rooster.
3 A On the stove, a pot of sauce simmers, spitting.
4 A Steam beads the windowpanes.
5 A ¶ PHILOMENA ROSSETTI, 80, sleeves pushed to the elbows, hair in a hairnet, stirs.
6 A Her hands are knotted like old rope.
7 A At the table, ARTUR ROSSETTI, 50s, her son, in a church shirt, slices bread with surgical care.
8 A His daughter SOLEDAD, 16, sits cross-legged on a chair, eyes on her phone, headphones around her neck.
9 D PHILOMENA: You never come on Sundays anymore.
10 D ARTUR: I come on Sundays, Ma.
11 D PHILOMENA: You come on the Sundays you remember.
12 D ARTUR: That's most of them.
13 D PHILOMENA: Most. Hmph.
14 A ¶ She tastes the sauce.
15 A Adds salt.
16 A Stirs.
17 D SOLEDAD: It smells good, Nonna.
18 D PHILOMENA: It smells like your grandfather's lies.
19 D SOLEDAD: What?
20 D PHILOMENA: He swore he could cook. He burned water.
21 D ARTUR: Ma, not today.
22 D PHILOMENA: Why not today?
23 D ARTUR: Because.
24 D PHILOMENA: Because what?
25 D ARTUR: Because it's Sunday.
26 A ¶ She snorts.
27 A Taps the spoon on the pot.
28 D PHILOMENA: You think I don't know why you've brought the child.
29 D ARTUR: Soledad's here because she wanted to see you.
30 D SOLEDAD: I did.
31 D PHILOMENA: You came to hold my hand while Arturo tells me something he has been practicing in the car.
32 D ARTUR: Ma.
33 D PHILOMENA: Tell me.
34 A ¶ Artur sets the knife down.
35 A Wipes his fingers.
36 A Looks at his daughter, who looks at her phone, pretending not to hear.
37 D ARTUR: The doctor called.
38 D PHILOMENA: Which doctor?
39 D ARTUR: The one with the results. For the house.
40 D PHILOMENA: The house is not sick.
41 D ARTUR: The house is not sick, Ma. You are.
42 A ¶ The clock ticks.
43 A The sauce pops.
44 A Philomena does not turn.
45 D PHILOMENA: I know that.
46 D ARTUR: You know?
47 D PHILOMENA: I am eighty. I have buried a husband, two brothers, and a dog named Salvatore. I know what a cough means.
48 D SOLEDAD: Nonna?
49 D PHILOMENA: Hush, cara.
50 D ARTUR: They want to put you somewhere. Just for a little while. Somewhere with nurses.
51 D PHILOMENA: Somewhere with nurses.
52 D ARTUR: Not forever.
53 D PHILOMENA: They never say forever. They say a little while.
54 D ARTUR: I didn't want to.
55 D PHILOMENA: You didn't want to tell me, or you didn't want to put me in a place?
56 D ARTUR: Both.
57 A ¶ She turns now.
58 A Her face is wet.
59 A It isn't steam.
60 A She wipes it on her sleeve.
61 D PHILOMENA: Sit with me. Both of you.
62 A ¶ They sit.
63 A She lifts the pot, spoons a bowl, sets it before Soledad.
64 D PHILOMENA [CONT'D]: Eat. It gets cold.
65 D SOLEDAD: I'm not hungry.
66 D PHILOMENA: You'll be hungry in a month. When I'm not here to feed you.
67 A ¶ She says it lightly.
68 A A joke.
69 A Nobody laughs.
70 D ARTUR: Ma. Please.
71 D PHILOMENA: Arturo. Your father's recipe. It's in the drawer, under the knives. Never in a book. I wrote it on the back of an electric bill.
72 D ARTUR: I know.
73 D PHILOMENA: You do not know. You think there is a secret ingredient. There isn't. There is only a woman standing here at four o'clock every Sunday for fifty-eight years.
74 A ¶ She sits.
75 A Folds her hands.
76 D PHILOMENA [CONT'D]: That's the ingredient. Now eat.
77 A ¶ Soledad takes a spoonful.
78 A Her face crumples.
79 A She keeps eating.
80 A ¶ Artur reaches across the lemons and takes his mother's hand.
81 A It is small and knotted and warm.
82 A ¶ The rooster clock ticks.
83 A On the stove, the sauce goes on simmering.

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

### SCENE s00009 | INT. GRAIN ELEVATOR - ROLLER DERBY TRACK - NIGHT
Detected names (may be incomplete or contain aliases): BRUISE, CASTILLO, TAMARA GRAY-OYELARAN, DOT KWIATKOWSKI, JONAS FELD
1 A ¶ A concrete silo floor, converted.
2 A Oval track taped on the slab, plywood bleachers, one hanging bulb per corner.
3 A Dust floats in the beams.
4 A ¶ The Harvest Hellcats are down nine in the final jam.
5 A Their jammer, MARISOL "BRUISE" CASTILLO (20s, shaved sides, mouthguard dangling), sits on the infield bench lacing her skates tight enough to hurt.
6 A ¶ Beside her, team captain TAMARA GRAY-OYELARAN (30s, tall, eye-black, taped wrist) watches the clock.
7 A Across the track, rival jammer DOT KWIATKOWSKI (40s, braids, quiet) stretches her calf, never looking over.
8 A ¶ Referee JONAS FELD (50s, striped shirt, whistle in his teeth) walks the track, checking the lines.
9 A ¶ Tamara watches Bruise.
10 A Bruise watches the floor.
11 A ¶ The clock reads 1:14.
12 D TAMARA: Left side. Don't force it.
13 D BRUISE: I wasn't going to.
14 D TAMARA: You were.
15 D BRUISE: I'm fine.
16 A ¶ Tamara slaps the bench between them.
17 A Once.
18 A Bruise nods without lifting her head.
19 A ¶ Jonas blows a short whistle.
20 A Skaters line up.
21 A Bruise stands.
22 A Dot stands.
23 A Neither looks at the other.
24 D JONAS: Jammers to the line.
25 D TAMARA (to Bruise): Four points a lap. That's all.
26 D BRUISE: I know.
27 D TAMARA: Then go.
28 A ¶ Bruise rolls to the starting line.
29 D DOT (to Bruise): You're limping.
30 D BRUISE (to Dot): You're old.
31 D DOT (to Bruise): I'm patient.
32 D BRUISE (to Dot): You're slow.
33 A ¶ Jonas raises his whistle.
34 D TAMARA: Do not watch her feet.
35 D BRUISE: Whose feet?
36 D DOT: Mine.
37 A ¶ Beat.
38 A The grain-elevator echo carries it.
39 D JONAS: Quiet on the line.
40 D TAMARA: It's a three-lap jam, Bruise.
41 D BRUISE: I said I know.
42 D DOT: Give her a minute. She's praying.
43 D BRUISE: I'm not praying.
44 D DOT: You're moving your lips.
45 D BRUISE: I'm counting.
46 D TAMARA: She counts like her mother.
47 D BRUISE: Leave my mother out of it.
48 D BRUISE: Just blow it already.
49 D DOT: Just blow it already.
50 D JONAS: Last warning. Hush.
51 A ¶ Bruise rolls her shoulders.
52 A Dot rolls hers.
53 A Their eyes finally meet.
54 A Two seconds.
55 A Three.
56 A ¶ Jonas lifts the whistle.
57 A A cold quiet drops over the whole silo.
58 A ¶ The whistle shrieks.

### SCENE s01054 | INT. ROADSIDE MOTEL - ROOM 9 - NIGHT
Detected names (may be incomplete or contain aliases): WOMAN, PROPERTY LENA MARSH
1 A ¶ Pink bedspread.
2 A Wood-paneled walls.
3 A A TV bolted to the dresser, off.
4 A A lamp with a torn shade.
5 A Rain taps the window like fingertips.
6 A ¶ A WOMAN, 30s, wet raincoat, dark circles under her eyes, locks the door.
7 A Slides the chain.
8 A Pulls the curtains shut.
9 A She is alone, and she's checking the room the way a person checks who has already been surprised once.
10 A ¶ She opens the closet.
11 A Empty hangers.
12 A The bathroom.
13 A Empty tub.
14 A Under the bed.
15 A Dust, a lost sock.
16 A ¶ She sits on the edge of the bed and takes a small tape recorder from her bag.
17 A She presses RECORD.
18 D WOMAN (into recorder): Test. Test.
19 A ¶ She stops.
20 A Plays it back.
21 A Her own voice, tinny.
22 D WOMAN [V.O.] (tape): Test. Test.
23 A ¶ She nods.
24 A Records again.
25 D WOMAN: Day one. Motel off Route 9. Nobody followed me. I think.
26 A ¶ She stops the tape.
27 A Looks at the phone on the nightstand.
28 A Beige, rotary, curly cord.
29 A She picks up the receiver.
30 A Dial tone.
31 A She sets it back.
32 A ¶ She rewinds.
33 A Hits PLAY.
34 D WOMAN [V.O.] (tape): Day one. Motel off Route 9. Nobody followed me. I think.
35 A ¶ Then, after her recorded voice, the same voice again, lower, almost tender, saying words she never spoke:
36 D WOMAN [V.O.] (tape, whispering): I'm in the room.
37 A ¶ She freezes.
38 A The tape continues to hiss.
39 A ¶ She hits STOP.
40 A Her thumb shakes.
41 A She rewinds again, plays it again.
42 A The extra line is gone.
43 A Only the first.
44 D WOMAN (quietly): Okay.
45 A ¶ She sets the recorder on the dresser.
46 A Takes off her coat.
47 A Hangs it on the doorknob.
48 A A key tag drops from the pocket and clatters to the floor.
49 A She picks it up.
50 A The tag is stamped in hand-scratched letters: PROPERTY OF LENA MARSH.
51 A ¶ She turns it over, turns it back.
52 D LENA (to herself): Right. Right. I'm Lena.
53 A ¶ She says it as if reminding herself.
54 A She says it again.
55 D LENA [CONT'D]: Lena Marsh. Thirty-four. Dental hygienist. Born in Duluth.
56 A ¶ She reaches for the lamp.
57 A Clicks it off.
58 A The room is almost black.
59 A A glow leaks around the curtain edge.
60 A ¶ On the dresser, the recorder clicks on by itself.
61 A The tape reels turn.
62 D LENA [CONT'D]: No.
63 D LENA [V.O.] (tape): Lena.
64 A ¶ She backs against the wall.
65 D LENA: That's my voice.
66 D LENA [V.O.] (tape): You taped me yesterday. In the car.
67 D LENA: I wasn't in a car yesterday.
68 D LENA [V.O.] (tape): No. But you will be.
69 A ¶ She lunges.
70 A Grabs the recorder.
71 A Rips the cassette out.
72 A Throws it across the room.
73 A It hits the TV and cracks.
74 A ¶ Silence.
75 A Rain.
76 A Breath.
77 A ¶ She slides down the wall until she's sitting on the floor.
78 A She hugs her knees.
79 A ¶ From the bathroom: a click.
80 A A drip.
81 A Another click.
82 D LENA [CONT'D] (whispering): Please.
83 A ¶ The bathroom light snaps on by itself.
84 A A thin line of yellow slides under the door.
85 D LENA [CONT'D] (barely audible): Please don't.
86 A ¶ The doorknob turns on its own.
87 A ¶ She crawls to the bed.
88 A Under it.
89 A Dust, the lost sock.
90 A Her own hand finds the cracked cassette.
91 A ¶ The bathroom door creaks.
92 D LENA [V.O.] (from the cracked cassette, gentle): Day two.
93 A ¶ She presses the cassette to her chest.
94 A Doesn't breathe.
95 A ¶ The bathroom light hums.
96 A The cassette hisses against her chest.
97 D LENA [V.O., CONT'D]: Nobody followed me.
98 D LENA (a thread of voice): I know.
99 A ¶ The lamp clicks on.

### SCENE s00014 | INT. COURTROOM ABOARD A MOORED RIVER FERRY - DAY
Detected names (may be incomplete or contain aliases): JUDGE AUGUSTINE FAIRWEATHER, MARCELLA DE LUCA, PERCY, NAKAMURA, DISTRICT ATTORNEY WENDELL OSEI, WOMAN, LIEUTENANT SABINE ARROYO
1 A ¶ A converted paddle steamer.
2 A The bench is a captain's table.
3 A Brass portholes line the walls, and the floor lifts gently with the river's swell.
4 A ¶ JUDGE AUGUSTINE FAIRWEATHER (60s, silver hair, half-moon glasses) peers down from the bench.
5 A At the defense table sit MARCELLA DE LUCA (40s, sharp suit, pearl earrings) and her client, PERCIVAL "PERCY" NAKAMURA (50s, rumpled, calm to the point of serenity).
6 A Across the aisle stands DISTRICT ATTORNEY WENDELL OSEI (50s, booming baritone, fountain pen in his breast pocket).
7 D JUDGE FAIRWEATHER: Counsel, we've been over the manifest three times. Is there any objection to its admission?
8 D DE LUCA: None, Your Honor.
9 D OSEI: None, Your Honor.
10 A ¶ They answer at the same time.
11 A Percy glances between them with polite interest.
12 D JUDGE FAIRWEATHER: Then the manifest is admitted, and I would like to thank both counsel for a refreshingly uneventful morning.
13 D OSEI: The People have nothing further.
14 D DE LUCA: Nor does the defense.
15 A ¶ The Judge removes his glasses and pinches the bridge of his nose.
16 A A gull cries outside a porthole.
17 A The ferry creaks.
18 D JUDGE FAIRWEATHER: Let the record reflect we'll adjourn for lunch.
19 A ¶ He reaches for his gavel.
20 A The courtroom door swings open.
21 A ¶ A WOMAN (30s, cargo pants, hair in a braid, a ring of keys at her belt) steps in.
22 A LIEUTENANT SABINE ARROYO, according to the badge on her chest.
23 A She carries a sealed evidence bag in both hands, and she walks the aisle with the careful posture of someone carrying something that might go off.
24 D ARROYO: Your Honor, forgive the interruption. I have a log from the engine room.
25 D OSEI: Lieutenant, I wasn't informed --
26 D ARROYO: Neither was I. I found it ten minutes ago.
27 A ¶ She sets the bag on the bench.
28 A The Judge opens it, slides out a bound ledger, and flips to a page tabbed in red.
29 A His face does not move, but his eyes do.
30 D JUDGE FAIRWEATHER: Mr. Nakamura. Were you aboard the Annabelle on the night of March ninth?
31 D PERCY: I was not.
32 D JUDGE FAIRWEATHER: Then whose signature is this at the foot of the engineer's log?
33 A ¶ He turns the ledger around.
34 A Percy leans over.
35 A Looks.
36 A Sits back with the same serene smile, though his hand has found De Luca's sleeve.
37 D DE LUCA: Your Honor, I'd like a moment with my client.
38 D OSEI: Your Honor, the People move to continue.
39 A ¶ They speak together again, but this time with an edge, neither yielding.
40 D DE LUCA: This is an ambush. ^ OSEI This is evidence.
41 A ¶ The Judge raises his gavel and brings it down once.
42 A The ferry rocks beneath it.
43 D JUDGE FAIRWEATHER: Mr. Osei, sit down. Ms. De Luca, you may confer. Lieutenant Arroyo, you will remain exactly where you are.
44 A ¶ Arroyo nods, steps back, and folds her hands.
45 A Percy whispers something to De Luca.
46 A She goes pale.
47 A She looks at the Judge, then at the porthole, then at the river beyond.
48 D DE LUCA (quietly): Percy. Who is Annabelle?
49 A ¶ Percy smiles.
50 A The ferry creaks.

### SCENE s01094 | INT. ABANDONED OBSERVATORY - DOME ROOM - NIGHT
Detected names (may be incomplete or contain aliases): HELENA VASQUEZ-MURRAY, DETECTIVE GRANT, TALL MAN
1 A ¶ A round chamber under a split copper dome.
2 A A huge brass telescope aimed at a hole in the roof where stars blink through.
3 A Dust like snow.
4 A Star charts curl on the walls.
5 A ¶ DR. HELENA VASQUEZ-MURRAY, 50s, trench coat over pajamas, mud on her boots, kneels by the telescope's base with a flashlight clenched in her teeth.
6 A She runs her fingers along the floor.
7 A Pulls up a loose board.
8 A Beneath it, a leather journal wrapped in oilcloth.
9 D HELENA (muffled by the flashlight): There you are.
10 A ¶ She takes the flashlight from her mouth.
11 A Unwraps the journal.
12 A Opens it to the first page.
13 A Reads in a whisper.
14 D HELENA [CONT'D]: "If you are reading this, I have already gone to see what the telescope shows after midnight."
15 A ¶ She turns a page.
16 A A hand-drawn sketch of the sky.
17 A Beside one star, a small red circle and the word NO.
18 D HELENA [CONT'D]: No what?
19 A ¶ Her phone buzzes in her pocket.
20 A She answers.
21 D DETECTIVE GRANT [V.O.] (over the phone): Helena, where are you?
22 D HELENA: Following the lead.
23 D DETECTIVE GRANT [V.O.]: At the observatory? I told you to wait for backup.
24 D HELENA: Backup is slow. The journal is here.
25 D DETECTIVE GRANT [V.O.]: Don't touch anything. We think Warrick didn't die alone.
26 D HELENA (shining the light across the floor): I'm not alone either.
27 A ¶ Footprints in the dust.
28 A Not hers.
29 A Wide, deliberate.
30 A They lead to the stairwell.
31 D DETECTIVE GRANT [V.O.]: Helena, did you hear me?
32 D HELENA: Stay on the line.
33 A ¶ She lays the phone on the telescope base.
34 A Rises.
35 A Follows the footprints with the light.
36 A They end at a door in the wall.
37 A Half open.
38 A A sliver of darkness behind it.
39 A ¶ A shape fills the gap.
40 A A TALL MAN in a gray overcoat, face hidden by a brimmed hat, steps into the dome.
41 A Slow.
42 A Unhurried.
43 A In one gloved hand he holds a brass key.
44 D TALL MAN: You found it before I did.
45 D HELENA (steady): You're Warrick's partner.
46 D TALL MAN: I was his student.
47 D HELENA: Did you kill him?
48 D TALL MAN (a pause): I closed the shutter. He opened it.
49 A ¶ Helena raises the journal.
50 A The Tall Man's eyes follow it.
51 D HELENA: Then tell me what the star is.
52 D TALL MAN: You already know.
53 D HELENA: Say it.
54 D DETECTIVE GRANT [V.O.] (tinny, from the telescope): Helena! Who are you talking to?
55 A ¶ The Tall Man glances at the phone.
56 A Then back at her.
57 A He lifts the key.
58 A Behind him, the dome's great shutter groans and begins to close, cutting the stars off one slice at a time.
59 D HELENA (shouting): Grant! Now!
60 A ¶ She hurls the journal across the floor.
61 A The Tall Man lunges for it.
62 A The dome slams shut.
63 A Darkness.
64 A A single crack of flashlight on the floor.
65 A ¶ Sirens, very far away.

### SCENE s01024 | INT. SMALL CLAIMS COURTROOM - FORMER SKATING RINK - DAY
Detected names (may be incomplete or contain aliases): JUDGE MARGUERITE VANCE, FELIX OYELARAN, SOLVEIG HARTMANN
1 A ¶ Bleachers for gallery.
2 A Judge's bench on a rink-side Zamboni platform.
3 A Painted lines still on the floor.
4 A ¶ JUDGE MARGUERITE VANCE, 60s, reading glasses, gavel in a fist.
5 A FELIX OYELARAN, 30s, sharp suit, stands at the plaintiff's mark.
6 A SOLVEIG HARTMANN, 40s, hands folded, at the defendant's.
7 D VANCE: Counselor, the exhibit.
8 D OYELARAN: Your Honor, my client's contract clearly states--
9 D HARTMANN: Objection. Contract was never signed.
10 D VANCE: Ms. Hartmann, let him finish.
11 D HARTMANN: He's misstating the--
12 D OYELARAN: I have it right here, page four--
13 D VANCE: Both of you.
14 A ¶ Oyelaran waves the paper.
15 A Hartmann steps toward him.
16 A Vance raises the gavel.
17 D HARTMANN: It's a forgery, Judge. He knows it.
18 D OYELARAN: That is a slander, and you know it.
19 D VANCE: Order!
20 D HARTMANN: Ask him who typed it!
21 D OYELARAN: Ask her why she hid the original!
22 A ¶ The gavel cracks.
23 A Once.
24 A Twice.
25 A A third time, splintering the handle.
26 D VANCE: Sit. Down.
27 A ¶ They sit.
28 A Silence.
29 A A skate guard coughs in the bleachers.
