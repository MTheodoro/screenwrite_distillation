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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_sonnet/group_00025.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01932 | INT. CANAL LOCK-KEEPER'S COTTAGE - NIGHT
Detected names (may be incomplete or contain aliases): AGNES THORNBURY, MAN, THE STRANGER, JULIAN
1 A ¶ 1841.
2 A A single room: iron stove, rough table, a rain-black window.
3 A The canal sloshes against the lock gates outside.
4 A ¶ AGNES THORNBURY, 40s, widow, plain brown dress, sits at the table peeling a potato.
5 A A hard knock at the door.
6 A She sets down the knife, crosses the room, and opens it a crack.
7 A ¶ A MAN, 30s, drenched, hatless, bleeding from one temple, stands in the rain.
8 A He holds a canvas satchel against his chest like a child.
9 D THE STRANGER: Forgive me. My boat has sunk below your lock.
10 D AGNES: Then you'll want the bank, not my door.
11 D THE STRANGER: I'll want a fire, if you've one to spare.
12 A ¶ She considers him.
13 A She steps back.
14 A He enters, dripping, and kneels at the stove.
15 A She locks the door behind him and slides the bolt.
16 A He notices.
17 A He says nothing.
18 D AGNES: Your head.
19 D THE STRANGER: A gate struck me. It's nothing.
20 D AGNES: It is something. Sit.
21 A ¶ He sits.
22 A She takes a rag from a peg, wets it from the kettle, and presses it against his temple.
23 A He flinches, then goes still.
24 A His eyes fix on the satchel in his lap.
25 A Hers do the same.
26 D THE STRANGER: You're kind.
27 D AGNES: I'm careful. There's a difference.
28 D THE STRANGER: Which are you being now?
29 D AGNES: Both.
30 A ¶ He laughs, once, and winces.
31 A She steps back, folds the rag, and crosses to the shelf.
32 A From behind a tin of tea she takes a long hunting knife and lays it on the table between them, blade toward him.
33 D AGNES [CONT'D]: My husband kept that for poachers.
34 D THE STRANGER: Then I am glad not to be one.
35 D AGNES: What's in the satchel?
36 D THE STRANGER: Letters.
37 D AGNES: Whose?
38 D THE STRANGER: My brother's. He drowned in this canal in March. I came to see where.
39 D AGNES: The Haverty boy?
40 D THE STRANGER: You knew him.
41 D AGNES: I pulled him out. I buried him myself.
42 A ¶ The Stranger rises so fast the chair falls over.
43 A Agnes takes up the knife in one smooth motion.
44 A They face each other across the table, breathing hard.
45 D THE STRANGER: Where?
46 D AGNES: Behind the lock, under the willow.
47 D THE STRANGER: Take me there.
48 D AGNES: In this weather?
49 D THE STRANGER: Now.
50 A ¶ She lowers the knife.
51 A Her shoulders drop.
52 A She takes a lantern from the wall and lights it with a taper from the stove.
53 A The Stranger picks up the fallen chair, sets it right, and stands waiting, hat in hand though he has no hat.
54 D AGNES [CONT'D]: What do I call you?
55 D JULIAN: Julian Haverty.
56 D AGNES: Julian. I am Agnes.
57 D JULIAN: I know. He wrote of you.
58 D AGNES: He wrote of me?
59 D JULIAN: Every letter. He loved you.
60 A ¶ Agnes sets down the lantern.
61 A Her hand covers her mouth.
62 A For the first time she looks at the satchel not with suspicion but with grief.
63 D AGNES: He never said.
64 D JULIAN: He meant to.
65 A ¶ She nods.
66 A She picks the lantern up again.
67 A They go out together into the rain.
68 A The door swings in the wind.

### SCENE s02506 | INT. SURVEILLANCE VAN - NIGHT
Detected names (may be incomplete or contain aliases): COLM BRADSHAW, OFFICER JUNE ALVAREZ-PARK, WOMAN, FELICITY
1 A ¶ Cramped.
2 A Monitors.
3 A Cold coffee in paper cups.
4 A A rain-streaked windshield looks out on a street of shuttered shops.
5 A Across the road, a dry cleaner's sign glows pink: DAN'S EXPRESS.
6 A ¶ DET. COLM BRADSHAW, 50s, rumpled coat, eats a gas-station sandwich.
7 A OFFICER JUNE ALVAREZ-PARK, 20s, headphones around her neck, monitors a camera feed.
8 D COLM: Anything?
9 D JUNE: A cat.
10 D COLM: That counts?
11 D JUNE: It's more than we had at midnight.
12 A ¶ He chews.
13 A Looks at the clock.
14 A 2:07.
15 D COLM: You eaten?
16 D JUNE: Granola bar.
17 D COLM: That's not eating.
18 D JUNE: It's got nuts.
19 D COLM (shrugging): Fair.
20 A ¶ Silence.
21 A Rain on the roof.
22 D JUNE: Does it always take this long?
23 D COLM: Always.
24 D JUNE: How do you not go crazy?
25 D COLM: I do. Slowly. Over thirty years.
26 A ¶ She laughs.
27 A He sips cold coffee.
28 A Winces.
29 A ¶ A knock on the side window.
30 A Both freeze.
31 A June drops a hand to her holster.
32 A Colm slides the window open an inch.
33 A ¶ A WOMAN, 40s, umbrella, rain jacket, stands there holding a plastic bag.
34 D WOMAN: Excuse me. Is this your van?
35 D COLM: Can I help you, ma'am?
36 D WOMAN: It's been parked here three nights. My husband says it's a stakeout.
37 A ¶ June stares at Colm.
38 A Colm stares at the Woman.
39 D COLM: We're from the gas company.
40 D WOMAN: At two in the morning?
41 D COLM: Emergency leak.
42 D WOMAN: Smells fine to me.
43 D COLM: That's the problem.
44 A ¶ She lifts the bag.
45 D WOMAN: I brought you sandwiches.
46 A ¶ June blinks.
47 D JUNE: Sandwiches?
48 D WOMAN: Egg salad. You looked hungry.
49 A ¶ Colm takes the bag.
50 A Peers in.
51 A Two wrapped sandwiches, a thermos.
52 D COLM: Thank you.
53 D WOMAN: I'm Felicity. I run the florist next door.
54 D COLM: Colm.
55 D FELICITY: Is it going to be a long night, Colm?
56 D COLM: Could be.
57 D FELICITY: Then I'll bring tea at four.
58 A ¶ She turns.
59 A Walks off, umbrella bobbing, and disappears into the rain.
60 A ¶ June looks at the sandwiches.
61 D JUNE: She made us.
62 D COLM: Of course she did. It's a florist.
63 D JUNE: Do we move the van?
64 D COLM: No.
65 D JUNE: Why not?
66 D COLM: Because she's bringing tea.
67 A ¶ June laughs.
68 A Unwraps a sandwich.
69 A Takes a bite.
70 A Passes the other one to Colm.
71 A ¶ On the monitor, a light goes on in the dry cleaner's back window.
72 A They both look up.
73 A The sandwich hovers.
74 D JUNE (sighing): Four a.m.
75 D COLM: Four a.m.
76 A ¶ June eats.
77 A Colm adjusts the zoom.
78 A Rain falls.
79 A The sign glows.
80 A Nothing happens.
81 D JUNE: She's right about the smell, though.
82 D COLM: What smell?
83 D JUNE: Egg salad.
84 D COLM: It's a stakeout. Open a window.
85 A ¶ She cracks the window.
86 A Cold wet air fills the van.
87 A Colm shuts it.
88 D COLM [CONT'D]: Not that much.

### SCENE s01927 | INT. SLEEP SHACK MATTRESS SHOWROOM - DAY
Detected names (may be incomplete or contain aliases): LEN HASHIMOTO, MILTON VOSS, PHYLLIS
1 A ¶ A beige warehouse of identical beds under cheap track lights.
2 A A banner reads "EVERYTHING MUST GO."
3 A Soft elevator music plays from a ceiling speaker.
4 A ¶ LEN HASHIMOTO, 40s, salesman, short-sleeved dress shirt and a tie with a stain.
5 A He's laid out across a king-size mattress, eyes closed, arms folded like a pharaoh.
6 A ¶ MILTON VOSS, 60s, the owner, bald, sweater vest, enters from the back office.
7 A He stops at the foot of the bed.
8 D MILTON: Len.
9 D LEN (eyes closed): I'm testing the product.
10 D MILTON: It's ten in the morning.
11 D LEN: It's a firm that doesn't feel firm. That takes research.
12 A ¶ Milton sighs and sits on the next bed.
13 A He bounces once.
14 A A spring groans.
15 A ¶ The store phone RINGS.
16 A Milton lifts the cordless handset and holds it away from his ear.
17 A A tiny, cheerful voice chirps from the speaker.
18 D PHYLLIS [V.O.]: Is this Sleep Shack? I'd like to return the mattress.
19 D MILTON: Of course, Phyllis. Which one?
20 D PHYLLIS [V.O.]: The one you sold me in 1998.
21 A ¶ Milton covers the phone.
22 A Len opens one eye.
23 D LEN: She's calling again?
24 D MILTON: She says it's lumpy.
25 D LEN: It's a bed, Milt. It's supposed to be lumpy. It's an emotional lump.
26 A ¶ Milton uncovers the phone.
27 D MILTON: Phyllis, we have a lifetime guarantee. Bring it in and we'll look at it.
28 D PHYLLIS [V.O.]: I'm calling from the mattress.
29 A ¶ Silence.
30 A Len sits up.
31 A Milton stares at the handset.
32 D LEN: Where's she calling from?
33 D MILTON (muted): She says the mattress.
34 D LEN: Tell her we'll send a truck.
35 D MILTON (into phone): We'll send a truck.
36 D PHYLLIS [V.O.]: Please hurry. It's very soft in here.

### SCENE s01130 | INT. BREWERY - COPPER VAT ROOM - NIGHT
Detected names (may be incomplete or contain aliases): WREN, KOJO, MAEVE, HOLT
1 A ¶ Gleaming copper.
2 A Pipes.
3 A Steam.
4 A A catwalk overhead.
5 A ¶ WREN (30s, black coveralls, hair under a cap) drops from a ceiling hatch.
6 A Soft landing.
7 A Duffel on her shoulder.
8 A ¶ KOJO (40s, heavy, brewery uniform stolen from a locker) holds the vault dolly.
9 A Sweat down his neck.
10 D WREN: Status.
11 D KOJO: Vault's open. Bag's full. Too easy.
12 D WREN: Easy is the plan.
13 A ¶ An earpiece crackles.
14 A A radio on Kojo's belt hisses.
15 D MAEVE [V.O.] (radio): Wren, Kojo. Guard's on his round. Four minutes to the east door.
16 D WREN: Copy, Maeve. Where's the van?
17 D MAEVE [V.O.] (radio): Loading dock. Engine warm. Nobody within a block.
18 D KOJO: Told you. Easy.
19 D WREN: Stop saying that.
20 A ¶ They wheel the dolly toward the exit.
21 A Cash bags stacked like grain sacks.
22 A Behind them, a vat gurgles, lazy.
23 D KOJO: We're done. Home by one.
24 D WREN: Quiet.
25 A ¶ The east door rattles.
26 A A key in the lock.
27 A ¶ Wren and Kojo freeze.
28 A The dolly stops mid-roll.
29 D MAEVE [V.O.] (radio): He's early. Two minutes early. Wren, move.
30 D KOJO (whispering): Where?
31 D WREN: Behind the vat.
32 A ¶ They duck behind the copper belly.
33 A The door swings open.
34 A HOLT (50s, security guard, flashlight, thermos) shuffles in, whistling.
35 A ¶ He sweeps the beam across the floor.
36 A Stops on the dolly tracks in the dust.
37 A Follows them.
38 A Stops at the vat.
39 D HOLT: Evening, folks.
40 A ¶ Wren steps out, hands raised, slow.
41 D WREN: Evening.
42 D HOLT: I've been working this shift eleven years. You're the first people to bother with the copper.
43 A ¶ Kojo steps out too.
44 A Hands high.
45 D KOJO: We can explain.
46 D HOLT: I'd hope not.
47 A ¶ He sets the thermos down.
48 A Sits on a crate.
49 A Pours himself a cup.
50 D HOLT [CONT'D]: My pension got cut last spring. Did you know that?
51 D WREN: No.
52 D HOLT: They never tell a man until he's already counted on it.
53 D MAEVE [V.O.] (radio): Wren? What's happening in there?
54 A ¶ Wren looks at Holt.
55 A Holt sips his coffee.
56 A Looks at the bags.
57 A Looks at the open east door.
58 D HOLT: I'm going to finish this cup. Slowly. Then I'm going to walk the north corridor. It takes twelve minutes.
59 A ¶ Wren lowers her hands.
60 D WREN: Thank you.
61 D HOLT: Go.
62 A ¶ They grab the dolly and run.
63 A The east door clicks shut behind them.
64 A Holt drinks.
65 D MAEVE [V.O.] (radio, faint): Wren? Anyone?
66 A ¶ Holt picks up the dropped radio from the floor, thumbs the switch.
67 D HOLT (into radio): They're on their way, miss. Drive carefully.

### SCENE s01465 | INT. MUNICIPAL ARCHIVE - SUBBASEMENT VAULT - NIGHT
Detected names (may be incomplete or contain aliases): CLEO ARMSTRONG-NG, SILAS PRAGER
1 A ¶ A steel door the thickness of a man's chest stands open on a room of gray filing cabinets.
2 A Dust.
3 A A ceiling lamp swings slightly, though the air is still.
4 A ¶ CLEO ARMSTRONG-NG (30s, black turtleneck, hair under a cap, gloves) walks the aisle, running a flashlight beam over drawer labels.
5 A SILAS PRAGER (50s, security guard's uniform, key ring heavy on his belt) follows, humming, his shoes squeaking on the linoleum.
6 D SILAS: Quiet night.
7 D CLEO: Always is.
8 D SILAS: That's why I like it. Nobody wants old paper.
9 D CLEO: Nobody but us.
10 D SILAS: Us?
11 D CLEO: Archive staff.
12 A ¶ She smiles.
13 A He returns it, unsuspecting, and unlocks a cabinet marked 1974-1981.
14 A The drawer slides out with a whine.
15 D SILAS: Whose file?
16 D CLEO: Municipal land transfers.
17 D SILAS: Boring.
18 D CLEO: Valuable.
19 A ¶ She flips through folders, flat thumbs quick.
20 A Silas leans on the cabinet, humming something tuneless.
21 A A minute passes.
22 A Two.
23 A She finds a manila envelope, thick, tied with twine, sets it in her bag.
24 D SILAS: That's not the one you came for.
25 D CLEO: No?
26 D SILAS: The one you came for is in the next drawer. Third folder from the back. Tied in red.
27 A ¶ Cleo freezes.
28 A Slowly lifts her head.
29 A He straightens, no longer humming, the squeak gone from his shoe.
30 A His hand slides to his belt, not to a gun, but to the ring of keys, which he lifts and unclips, and drops into her palm.
31 D SILAS [CONT'D]: Take it. Take them all.
32 D CLEO: Who are you?
33 D SILAS: I was in the room in seventy-nine when they signed it. I've been waiting forty years for somebody to come take it back.
34 A ¶ Cleo stares at him.
35 A At the keys.
36 A She opens the next drawer, finds the third folder from the back, tied in red, and presses it against her chest, a breath leaving her like a long-held secret.
37 D CLEO: Why didn't you do it yourself?
38 D SILAS: Because I'm the guard. Guards don't steal. They get robbed.
39 A ¶ He holds out his wrists, grinning.
40 A She laughs, helpless, and for a moment they stand together in the swaying lamplight, two conspirators in a room full of ghosts, and then she kisses his cheek and runs.

### SCENE s00553 | INT. STRIKE ZONE LANES - LOCKER ROOM - NIGHT
Detected names (may be incomplete or contain aliases): COACH WENDELL HUXLEY, DEXTER MALONE-ADEYEMI, ROMEO BALDERRAMA
1 A ¶ Dented lockers.
2 A A bench scarred with initials.
3 A A single bulb swings over a pile of bowling bags.
4 A The sound of the league championship, the other team cheering, drifts through the wall like a taunt.
5 A ¶ COACH WENDELL HUXLEY, 60s, in a polyester team jacket and bifocals, sits on an upturned bucket, clipboard on his knee.
6 A He does not look at it.
7 A DEXTER MALONE-ADEYEMI, 30s, a gangling anchor bowler, sits on the bench, hands hanging between his knees.
8 A ROMEO BALDERRAMA, 20s, a rookie, paces in front of the lockers, rolling a ball from palm to palm.
9 D HUXLEY: Gentlemen.
10 D ROMEO: Don't say it.
11 D HUXLEY: I will say it.
12 D DEXTER: He's going to say it.
13 D HUXLEY: We lost.
14 D ROMEO (to himself): We lost by six pins.
15 D DEXTER: Seven.
16 D HUXLEY: Seven. Thank you, Dexter.
17 D ROMEO: It was the tenth frame.
18 D DEXTER: It was always going to be the tenth frame.
19 D HUXLEY: Nothing is always going to be the tenth frame.
20 D ROMEO: Coach, I left the seven pin standing.
21 D HUXLEY: I know.
22 D ROMEO: I had it. I had the whole lane.
23 D HUXLEY: You had a lane. You didn't have the whole lane. Nobody has the whole lane.
24 D DEXTER (to the room): Does anyone have a beer?
25 D HUXLEY: No.
26 D DEXTER: Because I would like a beer.
27 D HUXLEY: Dexter, you're thirty-four. Behave.
28 D DEXTER: I'm behaving. I'm behaving like a man who just threw a four-ten split in front of his mother.
29 D ROMEO: She was clapping.
30 D DEXTER: She was clapping out of pity.
31 D HUXLEY: She was clapping because you're her son.
32 D DEXTER: Same thing.
33 A ¶ A beat.
34 A Romeo laughs, short and ugly.
35 A Dexter starts too.
36 A Huxley fights it.
37 A Fails.
38 D HUXLEY: All right. All right. Listen. Both of you. I have coached this team for twenty-two years.
39 D ROMEO: Twenty-three.
40 D HUXLEY: Twenty-three. And I have never once lost a championship by less than ten pins.
41 D DEXTER: So this is progress.
42 D HUXLEY: This is the closest we've ever been.
43 D ROMEO: That's supposed to make me feel better?
44 D HUXLEY: No. It's supposed to make you angry.
45 D ROMEO: It does.
46 D HUXLEY: Good. Hold that.
47 A ¶ He stands.
48 A Hands each of them a towel from a pile.
49 A Dexter wipes his face.
50 A Romeo hangs his around his neck like a boxer.
51 D HUXLEY [CONT'D] (to the room, as to a crowd): Next season, we come back. And we do not say sorry. We say hello.
52 D DEXTER: Hello.
53 D ROMEO: Hello.
54 D HUXLEY: Louder.
55 D DEXTER: HELLO!
56 D ROMEO: HELLO!
57 A ¶ Beyond the wall, the cheering dies.
58 A A janitor starts a floor-buffer.
59 A Huxley picks up his clipboard, crosses out something, and writes, in pencil: NEXT YEAR.

### SCENE s02240 | INT. FAMILY KITCHEN - FLOOR ABOVE A LAUNDROMAT - EVENING
Detected names (may be incomplete or contain aliases): INES, BOYD, LITTLE TUAN, SERAPHINA, GIDEON
1 A ¶ A small table.
2 A A pot of boiled dumplings.
3 A A cracked ceiling fan.
4 A Rain on the window.
5 A ¶ INES, forties, stands at the stove.
6 A Her son BOYD, twelve, slumps at the table with his phone.
7 A LITTLE TUAN, six, kneels on a chair, drawing a dog.
8 D BOYD: Why does Aunt Seraphina always call during dinner?
9 D INES: Because she knows I'll answer.
10 A ¶ The phone on the counter rings.
11 A Ines wipes her hands, answers, sets it on speaker.
12 D SERAPHINA [V.O.] (tinny): Ines? Is that you? Are the children eating?
13 D INES: We're all here, Seraphina.
14 D SERAPHINA [V.O.]: Good. Boyd, are you wearing the scarf I knitted?
15 D BOYD: It's June, Aunt Sera.
16 D SERAPHINA [V.O.]: Scarves are for every month.
17 D TUAN: Aunt Sera, I drew a dog.
18 D SERAPHINA [V.O.]: Does the dog have a scarf?
19 D TUAN: He does now.
20 A ¶ He scribbles one in red crayon.
21 A The front door downstairs bangs.
22 A ¶ GIDEON, fifties, wet to the skin, an umbrella turned inside out, trudges into the kitchen.
23 A Ines stiffens.
24 A Boyd lowers his phone.
25 D GIDEON: Sorry I'm late. The bus broke down.
26 D INES: You said you'd be home Friday.
27 D GIDEON: It's Friday.
28 D INES: It's Sunday, Gideon.
29 A ¶ A silence.
30 A Seraphina's voice trickles from the phone.
31 D SERAPHINA [V.O.]: Gideon? Is that Gideon? Put him on!
32 A ¶ Nobody moves.
33 A Tuan holds up the dog.
34 D TUAN: Papa, look.

### SCENE s00809 | INT. NIGHT BUS 47 - MOVING - NIGHT
Detected names (may be incomplete or contain aliases): ELDON MCPHAIL, SORAYA KHALILI, BENNETT OLUMIDE
1 A ¶ Near-empty.
2 A Overhead lights hum.
3 A Rain drags sideways across the windows.
4 A Wipers tick.
5 A ¶ ELDON MCPHAIL, 50s, driver, hat low, one hand on the wheel and the other around a cold thermos.
6 A In the mirror: two passengers.
7 A ¶ SORAYA KHALILI, 30s, backpack on her lap, sits halfway back, glued to her phone.
8 A Behind her, BENNETT OLUMIDE, 40s, in a damp raincoat, stares out at the passing dark.
9 A ¶ Eldon clears his throat.
10 D ELDON (to the bus): Next stop, Harbor and Fifth. Mind the gap.
11 A ¶ Nobody reacts.
12 D ELDON [CONT'D] (to himself): Nobody ever minds the gap.
13 A ¶ Soraya looks up.
14 D SORAYA: Is this the 47?
15 D ELDON: It's the 47.
16 D SORAYA: It's not going to Eastgate?
17 D ELDON: Not tonight.
18 D SORAYA: Since when?
19 D ELDON: Since the flood.
20 A ¶ Soraya sighs.
21 A Pockets her phone.
22 A Bennett turns his head, slowly.
23 D BENNETT: You're the third bus tonight.
24 D ELDON: Third what?
25 D BENNETT: Third driver who didn't say where we're going.
26 D ELDON: I said Harbor and Fifth.
27 D BENNETT: And after that?
28 D ELDON: After that, nothing. Last stop.
29 A ¶ Bennett nods, slowly, as though it explains something he's been wondering about.
30 D SORAYA (to Eldon): Can you let me off before Harbor?
31 D ELDON: Not an official stop.
32 D SORAYA: I'll pay extra.
33 D ELDON: It's not about the fare, miss.
34 D SORAYA: Then what is it about?
35 D ELDON: Rules.
36 D SORAYA (muttering): Great.
37 A ¶ The bus slows.
38 A Brakes sigh.
39 A The doors fold open to rain.
40 D ELDON: Harbor and Fifth.
41 A ¶ Soraya stands.
42 A Bennett doesn't.
43 D SORAYA: Are you coming?
44 D BENNETT: No.
45 D SORAYA: This is your stop.
46 D BENNETT: It's his stop.
47 A ¶ He nods at Eldon.
48 D ELDON (to the empty bus): Everybody out, please.
49 A ¶ Soraya freezes.
50 A Looks at Bennett.
51 A At Eldon.
52 A At the empty seats behind them.
53 D SORAYA (whisper): Who is he talking to?
54 D BENNETT: The ones who stayed.
55 A ¶ Eldon closes the doors.
56 A The wipers resume.
57 A The bus pulls out, carrying all three of them into the dark.

### SCENE s01773 | EXT. DRIVE-IN THEATER - CONCESSION ROOF - NIGHT
Detected names (may be incomplete or contain aliases): DEWEY HALLORAN, LONNIE VASQUEZ, FRANKIE DUBOIS
1 A ¶ A flat tar roof above the snack bar.
2 A Beyond the low parapet, rows of parked cars face a giant screen flickering with a western none of them are watching.
3 A Moths swarm the projector beam.
4 A ¶ DEWEY HALLORAN, seventeen, lean, in a rented bow tie, sits cross-legged with a flashlight in his teeth.
5 A LONNIE VASQUEZ, seventeen, stocky, in a usher's jacket two sizes too small, sits beside him eating popcorn from a paper tub.
6 A FRANKIE DUBOIS, sixteen, wiry, with grease under his nails, stands at the edge and looks down.
7 D DEWEY: Everybody got their cut of the money?
8 D LONNIE: I got mine. I got it in my sock.
9 D FRANKIE: Why's it in your sock?
10 D LONNIE: Because that's where my mother never looks.
11 D DEWEY: Fine. Frankie, you're sure about the key?
12 D FRANKIE: I made it myself. It'll open any projection booth in the county.
13 D LONNIE: The county? Frankie, we've got one booth.
14 D FRANKIE: It's a figure of speech.
15 D DEWEY: It's a good key, Lonnie. Leave him alone.
16 D LONNIE: I'm only saying.
17 D FRANKIE: You're always only saying.
18 D DEWEY: All right, listen. Tonight we show them the thing we made. Everybody's out there, the whole school, my father, Mr. Paget. After the intermission cartoon, it plays. Three minutes. That's all.
19 D LONNIE: My mother will see it.
20 D DEWEY: Your mother will love it.
21 D LONNIE: She's going to see me in it, Dewey. Me, with the cape.
22 D FRANKIE: You look great in the cape.
23 D LONNIE: I look like a tablecloth.
24 D DEWEY: You look like a hero.
25 D LONNIE: A tablecloth hero.
26 A ¶ Lonnie stuffs a fistful of popcorn into his mouth.
27 A Dewey takes the flashlight from his teeth and clicks it off.
28 D FRANKIE: What if it doesn't work?
29 D DEWEY: It'll work.
30 D FRANKIE: What if the reel jams?
31 D LONNIE: What if it plays backward?
32 D DEWEY: Then it'll be a different movie.
33 D FRANKIE: You always say that.
34 D DEWEY: Because it's always true.
35 A ¶ Below them, the western reaches a gunfight.
36 A A hundred car horns honk in approval, and the roof hums with it.
37 D LONNIE: That's not even a good one.
38 D FRANKIE: Mine's better.
39 D DEWEY: Ours is better.
40 D LONNIE: Ours.
41 A ¶ Frankie turns from the edge and sits between them.
42 A The three of them look out over the lot.
43 A Somewhere a screen door bangs.
44 D FRANKIE: What do we do after?
45 D DEWEY: After what?
46 D FRANKIE: After they see it.
47 D DEWEY: We go home.
48 D LONNIE: We go home and pretend we weren't here.
49 D FRANKIE: And then?
50 D DEWEY: Then we make another one.
51 D LONNIE (through popcorn): A longer one.
52 D FRANKIE: With real stunts.
53 D DEWEY: With no capes.
54 D LONNIE: No, no, the cape stays.
55 A ¶ The western ends.
56 A The screen goes white, then black.
57 A A tinny voice from the loudspeakers announces the intermission.
58 A A dancing hot dog appears on screen, singing.
59 A ¶ Dewey stands.
60 A Lonnie stands.
61 A Frankie is already on his feet.
62 D DEWEY [CONT'D]: Frankie. The booth.
63 D FRANKIE: Going.
64 D LONNIE: I'm coming with you.
65 D DEWEY: Both of you, go. I'll watch the lot.
66 D FRANKIE: Don't let anybody leave.
67 D DEWEY: They won't.
68 A ¶ Frankie vaults over the roof's far edge to the ladder.
69 A Lonnie is on his heels.
70 A Dewey stays at the parapet, shoulders squared, watching a hundred cars and the dancing hot dog.
71 A He lifts the flashlight and holds it like a torch.
72 D DEWEY [CONT'D] (softly): Now.
73 A ¶ The loudspeakers crackle.
74 A The screen flickers and goes dark.
75 A For one long second the whole lot is silent, a hundred windshields reflecting nothing.
76 A ¶ Then a projector lamp flares in the booth and a ragged, hand-cut image leaps up on the screen: a boy in a tablecloth cape, running.
77 A ¶ Dewey grins.
78 A Down in the lot, a horn honks.
79 A Then another.
80 A Then all of them.

### SCENE s01568 | INT. NIGHT TRAIN SLEEPER COMPARTMENT - NIGHT
Detected names (may be incomplete or contain aliases): WENDELL ODUYA-FENWICK, CLEMENTINE ACHEBE-LINDQVIST, LAVINIA BELLINI-OKORO, ANATOLE KOWALCZYK-ADEYEMI
1 A ¶ Rhythmic clatter.
2 A A reading lamp swings on its hook.
3 A Rain streaks the window.
4 A Two bunks, one folded away.
5 A ¶ WENDELL ODUYA-FENWICK, 40s, sits by the window in shirtsleeves, tie loosened.
6 A His wife CLEMENTINE ACHEBE-LINDQVIST, 40s, on the bunk, braids her hair without looking.
7 A ¶ Her sister LAVINIA BELLINI-OKORO, 30s, stands in the doorway with a suitcase.
8 A And a conductor, ANATOLE KOWALCZYK-ADEYEMI, 50s, hovers in the corridor, punching tickets.
9 A ¶ He glances at the others.
10 A She doesn't glance back.
11 A They have not spoken for a long time.
12 D LAVINIA: Is there room?
13 D CLEMENTINE: There's always room.
14 D LAVINIA: For a suitcase?
15 D WENDELL: For a suitcase, yes.
16 A ¶ She enters.
17 A He shifts.
18 A Their knees brush.
19 A He pulls his away.
20 D ANATOLE: Tickets, please.
21 A ¶ He punches two.
22 A Hesitates at the third.
23 A Clementine hands it over without a word.
24 A He nods, moves on.
25 A ¶ The door slides shut.
26 A The train rocks.
27 A Lavinia sits on the lower bunk, opposite Clementine.
28 D LAVINIA: You look tired.
29 D CLEMENTINE: You look thin.
30 D LAVINIA: I've been travelling.
31 D CLEMENTINE: So have we.
32 D WENDELL: Where to?
33 D LAVINIA: Anywhere with a sea.
34 D CLEMENTINE: There's a sea at the end of this line.
35 D LAVINIA: That's what I heard.
36 D WENDELL: Who told you?
37 D LAVINIA: A man at the station. He said the sea turns green in September.
38 D CLEMENTINE: It does.
39 D LAVINIA: Have you seen it?
40 D CLEMENTINE: Once. A long time ago.
41 D WENDELL: With me.
42 D CLEMENTINE: With you.
43 A ¶ A pause.
44 A The train sways.
45 A Lavinia looks at her hands.
46 A Wendell looks at the rain.
47 A Clementine finishes the braid and ties it off.
48 D LAVINIA: I should have written.
49 D CLEMENTINE: You should have.
50 D LAVINIA: I'm sorry.
51 D CLEMENTINE: So am I.
52 D WENDELL: Shall I open a window?
53 D LAVINIA: It's raining.
54 D WENDELL: It's close in here.
55 D CLEMENTINE: Leave it.
56 D WENDELL: All right.
57 D LAVINIA: I met someone.
58 D CLEMENTINE: Good.
59 D LAVINIA: It didn't end well.
60 D CLEMENTINE: They rarely do.
61 D WENDELL: Clementine.
62 D CLEMENTINE: What? It's true.
63 D LAVINIA: No, she's right. They don't.
64 D WENDELL: Do you want tea?
65 D LAVINIA: Please.
66 A ¶ He rises.
67 A Opens the door.
68 A Disappears into the corridor.
69 A The two sisters sit across from each other, alone, the rain tapping the glass.
70 D CLEMENTINE: He's changed.
71 D LAVINIA: Has he?
72 D CLEMENTINE: He lets me braid my own hair.
73 A ¶ They share a smile.
74 A Small.
75 A Then bigger.
76 A Lavinia wipes her eye with the back of her hand.
77 D LAVINIA: I missed you.
78 D CLEMENTINE: I know.
79 A ¶ She reaches across, pulls her sister close, and holds her.
80 A Over Lavinia's shoulder she watches the door.
81 A ¶ Wendell returns with three cups.
82 A He stops in the doorway, sees them.
83 A Sets the tray down gently on the bunk and quietly steps back out.

### SCENE s02247 | INT. FARMHOUSE KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): OTTILIE, RASMUS
1 A ¶ A wood stove, a kerosene lamp, a table scarred by decades of use.
2 A Snow ticks at the window.
3 A ¶ OTTILIE, sixty, in a wool cardigan, stirs a pot.
4 A Her son RASMUS, thirty-five, a duffel bag still on his shoulder, stands in the doorway with snow on his boots.
5 D RASMUS: Mama.
6 D OTTILIE: You didn't write.
7 D RASMUS: I wrote, Mama. Three times.
8 D OTTILIE: Not one letter came.
9 D RASMUS: Then the post is broken.
10 A ¶ She keeps stirring.
11 A He steps in, sets the bag down.
12 D OTTILIE: Wash your hands. There's soup.
13 D RASMUS: I'm not hungry.
14 D OTTILIE: You're thin.
15 D RASMUS: I'm the same as I was.
16 D OTTILIE: You were never this thin, Rasmus.
17 A ¶ He sits.
18 A She ladles soup into a bowl, sets it before him, and sits across the table.
19 A Neither touches a spoon.
20 D RASMUS: I sold the boat.
21 D OTTILIE: I know.
22 D RASMUS: Who told you?
23 D OTTILIE: Hennie at the church. Her husband bought the nets.
24 D RASMUS: Mama, I had to.
25 D OTTILIE: Your father built that boat.
26 D RASMUS: And it was sinking us, Mama. Debts. Three years of debts.
27 D OTTILIE: You could have asked.
28 D RASMUS: Asked who? You? With what?
29 D OTTILIE (rising): With a little respect, Rasmus!
30 D RASMUS: I'm trying, Mama!
31 D OTTILIE: You sold your father's boat and you come home thin and you don't write!
32 D RASMUS: I wrote!
33 A ¶ She strikes the table with the flat of her hand.
34 A The lamp jumps.
35 A Silence, heavy and total.
36 D RASMUS [CONT'D] (quietly): I wrote, Mama. I wrote every week. I think someone has been keeping them from you.
37 D OTTILIE: Who?
38 D RASMUS: Who collects the post?
39 A ¶ Ottilie goes pale.
40 A She turns to the dresser and opens a drawer.
41 A In it, a bundle of envelopes tied with twine.
42 A ¶ She holds them a long moment.
43 A Then she places them on the table between them.
44 D OTTILIE: I could not read them. My eyes. I was ashamed.
45 D RASMUS: Oh, Mama.
46 A ¶ He reaches across and covers her hand with his.
47 A The soup steams between them, ignored.

### SCENE s00838 | INT. CAROUSEL FACTORY, PAINTING LOFT - NIGHT
Detected names (may be incomplete or contain aliases): FOX, MABEL OSEI, KWAME, ISOLDE
1 A ¶ Wooden horses hang from the rafters on hooks, half-painted, mouths open.
2 A Brass poles in racks.
3 A Smell of varnish.
4 A ¶ FOX, 30s, crew boss, kneels at a floor safe behind a stacked pile of tarps.
5 A MABEL OSEI, 50s, safecracker, presses a stethoscope to the dial.
6 A KWAME, 20s, wheelman, stands at the window watching the street.
7 A ISOLDE, 30s, the inside woman, in a cleaner's smock, holds a mop she does not use.
8 D FOX: Three minutes, people.
9 D MABEL (muttering): Left. Right. Come on, baby.
10 D KWAME: Cop car. Slow roll.
11 D ISOLDE: They check this block every night.
12 D FOX: Kwame, lights.
13 A ¶ He kills the lamp.
14 A Dark, except for a wedge of streetlight on the horses.
15 D MABEL: Two clicks.
16 D KWAME: They're stopping.
17 D ISOLDE: They're not stopping, they're
18 D FOX: Quiet!
19 D MABEL: Three clicks. I've got it. I
20 D KWAME: They stopped!
21 A ¶ Everyone freezes.
22 A A flashlight beam crosses a painted horse, pauses on its glass eye, and moves on.
23 A Footsteps outside.
24 A A radio squawk.
25 A Then the car pulls away, tires hissing.
26 A ¶ Fox exhales.
27 A Kwame laughs once, a cracked bark.
28 D MABEL: Safe's open.
29 D ISOLDE (to herself): Thank God.
30 D FOX (to all): Grab the bags, we go in ninety.

### SCENE s01158 | INT. FISH PROCESSING PLANT - OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE RAFFERTY, TULLY, HALVORSEN, WOMAN, AGENT CORVO
1 A ¶ A glassed-in office above the processing floor.
2 A Below, conveyor belts, hoses, steel tables slick with scales.
3 A The office smells of brine and cigarettes.
4 A A desk lamp.
5 A A ledger.
6 A ¶ DETECTIVE RAFFERTY (40s, gray overcoat, a face like a closed door) sits across from TULLY (50s, plant owner, rubber apron over a silk shirt, gold chain, hands thick as hams).
7 A On the wall, a mounted marlin with a dust-covered eye.
8 A Between them: a plastic bag holding a small silver watch.
9 D RAFFERTY: You recognize it?
10 D TULLY: Never seen it.
11 D RAFFERTY: It's engraved. "To D, with love, M."
12 D TULLY: Lots of D's in the world.
13 D RAFFERTY: Lots of M's.
14 A ¶ HALVORSEN (30s, plant foreman, hairnet, boots, scales on his forearms) leans on the doorframe, arms crossed.
15 A He doesn't enter.
16 D HALVORSEN: Boss, you want me to stay?
17 D TULLY: Go back to the floor.
18 D HALVORSEN: Yes, sir.
19 A ¶ He doesn't move.
20 A Rafferty notices.
21 D RAFFERTY: Mr. Halvorsen. Stay. I have a question for you.
22 D HALVORSEN (to Tully): Boss?
23 D TULLY (tight): Answer him.
24 D RAFFERTY: The night shift on the eleventh. You were on?
25 D HALVORSEN: I'm always on.
26 D RAFFERTY: And you saw nothing unusual.
27 D HALVORSEN: Fish.
28 D RAFFERTY: Fish.
29 A ¶ He turns to Tully, still polite.
30 D RAFFERTY [CONT'D]: Mr. Tully, I'll be straight with you. I've got a body in the harbor. Male. Late thirties. No wallet, no ring. This was in his hand.
31 D TULLY: Terrible.
32 D RAFFERTY: He had your cigarette brand in his teeth. He had fish scales under his nails. He had a chemical burn on his wrist that I'd say comes from a brine pump.
33 D TULLY: You're making it fit.
34 D RAFFERTY: I'm just listing it.
35 A ¶ From below, a hiss of steam and a sudden clang.
36 A Tully stiffens.
37 A Halvorsen glances at the window.
38 A A WOMAN (50s, in a trench coat and rain hat, a briefcase in her hand) is walking across the floor toward the stairs.
39 D TULLY: Who the hell is that?
40 D HALVORSEN: No idea.
41 A ¶ The Woman climbs.
42 A The office door opens without a knock.
43 A She sets her briefcase on the desk, opens it, and takes out a badge: AGENT CORVO, FEDERAL BUREAU.
44 D CORVO: Mr. Tully. I'd like to talk about the shipment of eleven tons of cocaine hidden in your tuna.
45 A ¶ Tully stands slowly.
46 A Rafferty doesn't.
47 A He picks up the watch bag, studies the engraving, and slides it across the desk to Corvo.
48 D RAFFERTY: Agent. He's all yours.
49 D TULLY (hoarse): You told me she was a cop.
50 D RAFFERTY: I did.
51 D TULLY: You said she was local.
52 D RAFFERTY: She is. She just works for a bigger office.
53 A ¶ Tully turns to the foreman.
54 A Halvorsen backs out of the doorway and takes the stairs two at a time.
55 A Down on the floor, the belts keep running.

### SCENE s00965 | INT. PAWNSHOP BACK OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): BUNNY, OKAFOR-STANWYCK, DELIA VOSS-MBEKI, GUS, PELLEGRINI-ADE
1 A ¶ Fluorescent tube.
2 A A steel desk.
3 A Shelves of watches, guitars, wedding rings in velvet trays.
4 A A safe the size of a refrigerator, door ajar.
5 A ¶ BERNICE "BUNNY" OKAFOR-STANWYCK (50s) counts cash into stacks, reading glasses on her nose.
6 A Her partner, DELIA VOSS-MBEKI (40s), leans on the desk eating an orange.
7 A A boy of twenty, AUGUSTUS "GUS" PELLEGRINI-ADE, sits on a stool by the door, one knee bouncing.
8 D BUNNY: Fifteen thousand. All there.
9 D DELIA: Told you.
10 D GUS: Can I go now?
11 D BUNNY: You're not going anywhere.
12 D GUS: You said, once the count --
13 D DELIA: Gus, honey. Sit.
14 A ¶ He sits.
15 A He was sitting.
16 A He sits harder.
17 D BUNNY (counting): Sixteen. Seventeen.
18 D DELIA: You nervous, Gus?
19 D GUS: No.
20 D DELIA: You look nervous.
21 D GUS: It's a pawnshop. I'm fine.
22 A ¶ She smiles at him.
23 A Peels the orange, a long unbroken spiral.
24 A Hands him a segment.
25 A He takes it and does not eat it.
26 D BUNNY: Eighteen. Nineteen.
27 A ¶ The shop bell rings out front.
28 A All three freeze.
29 D DELIA (quietly): We're closed.
30 A ¶ Through the wall, a truck door slams.
31 A Gus goes white.
32 D GUS (whispering): That's my dad's truck.
33 D BUNNY: You told us he was in Phoenix.
34 D GUS (whispering): He was!
35 D DELIA: Bunny.
36 D BUNNY: I know.
37 A ¶ Bunny rises and, slowly, takes a small revolver from the drawer.
38 A Delia sets the orange peel on the desk.
39 A The shop bell rings again.

### SCENE s01530_1 | INT. STAIRWELL - CONTINUOUS
Detected names (may be incomplete or contain aliases): NADEZHDA
1 A ¶ Bare concrete.
2 A A flight up, a flight down.
3 A She stops.
4 A Breathing hard.
5 A Listens.
6 A ¶ Below, a door opens.
7 A Above, a door opens.
8 D NADEZHDA: Okay. Okay. Think.
9 A ¶ She turns the flash drive over.
10 A A tiny label, handwritten, in her own script.
11 A She reads it.
12 A Her eyes widen.
13 D NADEZHDA [CONT'D]: No. No, no.
14 A ¶ Footsteps from both directions, converging.
15 A She backs against the wall and slides down until she sits, the drive clutched to her chest.
16 A ¶ A cracked air vent above the landing.
17 A She notices it.
18 A Stares.
19 D NADEZHDA [CONT'D]: Of course it's a vent.
20 A ¶ She climbs onto the rail.
21 A Tests the grille.
22 A It gives.
23 A She hauls herself up and in, scraping her coat, legs vanishing just as two pairs of boots reach the landing below.

### SCENE s00151 | INT. CAR WASH - TUNNEL - NIGHT
Detected names (may be incomplete or contain aliases): RAY, OYELOWO, TANISHA BEAUMONT, MARCUS DELACROIX-WU
1 A ¶ Blue foam.
2 A Spinning brushes.
3 A A conveyor drags a black sedan through the dark.
4 A The attendant booth glows at the end.
5 A ¶ RAYMUNDO "RAY" OYELOWO, 40s, uniform, towel on shoulder, waits at the exit.
6 A At his side, TANISHA BEAUMONT, 20s, trainee, holds a squeegee like a baton.
7 A ¶ A second man leans on the booth wall: MARCUS DELACROIX-WU, 50s, leather jacket, thumb in his belt.
8 A ¶ The sedan emerges, dripping.
9 D RAY: Marcus.
10 D MARCUS: Ray.
11 D RAY: Car's clean.
12 D MARCUS: Is it?
13 A ¶ Tanisha wipes the windshield, too fast.
14 D TANISHA: Spotless, sir.
15 D MARCUS: Easy, kid. You'll rub off the paint.
16 A ¶ She stops.
17 A He opens the trunk.
18 A Looks inside.
19 A Closes it.
20 D MARCUS [CONT'D]: Ray. Come here.
21 A ¶ Ray steps close.
22 A Marcus puts a hand on his shoulder.
23 A Squeezes.
24 A Smiles.
25 D MARCUS [CONT'D]: Good work.
26 A ¶ He pulls three twenties from his jacket.
27 A Tucks them into Ray's breast pocket.
28 A Pats it.
29 D TANISHA (whispering to Ray): What was in the trunk?
30 D RAY: Nothing.
31 D MARCUS (already in the car): Exactly.
32 A ¶ The sedan rolls out into the rain.
33 A Tanisha looks at the three twenties poking from Ray's pocket.
34 A Ray's hand trembles once.
35 A Then he folds the bills away and turns on the hose.

### SCENE s02380 | INT. WINTER FORGE - UNDER THE MOUNTAIN - NIGHT
Detected names (may be incomplete or contain aliases): SER ALDRIC VANE, BRODA STONEHEART, TIBB
1 A ¶ A cavern lit by one banked fire.
2 A Hammers hang on iron pegs.
3 A Frost grows in the corners, even here.
4 A Anvils stand in a half-circle like old gravestones.
5 A ¶ SER ALDRIC VANE, fifties, grey in the beard, in a cloak stiff with ice, stands very straight in the doorway.
6 A He has not removed his gloves.
7 A At the anvil, BRODA STONEHEART, a stout smith with soot on her cheeks, hammers a blade she does not look at.
8 A Beside the fire, a boy of ten, TIBB, feeds scraps of kindling into the embers with the care of a priest.
9 A Against the far wall, in a chair too large for her, LADY MERROWEN sits with her hands in her lap, her eyes closed, her breath making small clouds.
10 D BRODA: The sword's not ready.
11 D ALDRIC: I did not ask for the sword.
12 D BRODA: Everyone asks for the sword.
13 A ¶ He takes one step into the room.
14 A The fire flares, then settles.
15 A Tibb looks up at him and then, quickly, at the floor.
16 D ALDRIC: How long has she slept?
17 D BRODA: Since the snow came.
18 D ALDRIC: And the boy?
19 D BRODA: He sits with her. Feeds the fire. Doesn't speak.
20 A ¶ Aldric crosses to the chair.
21 A He kneels.
22 A He unclasps one glove and lays the bare hand against the Lady's cheek, and she does not stir.
23 A He holds it there far longer than courtesy allows.
24 A ¶ Broda sets down her hammer.
25 A The sound rings off the stone.
26 D BRODA [CONT'D]: You came a long way for a woman who won't wake.
27 D ALDRIC: I came to keep a promise.
28 D BRODA: To her?
29 A ¶ He draws the glove back on, finger by finger.
30 D ALDRIC: To the man who gave me the sword.
31 A ¶ Tibb reaches into the fire with his bare hand and lifts out a coal.
32 A It does not burn him.
33 A He holds it up in the palm of his hand, glowing, a small red sun.
34 A ¶ Broda looks at the coal.
35 A Looks at Aldric.
36 A Slowly, she lifts the blade from the anvil and points it at the door.
37 D BRODA [CONT'D]: Then you had better ask for the sword.

### SCENE s01701 | INT. VICTORIAN OBSERVATORY - NIGHT (1887)
Detected names (may be incomplete or contain aliases): YOUNG WOMAN, PROFESSOR EUSTACE PEMBERTON, PROFESSOR, OTTOLINE
1 A ¶ A copper dome open to the stars.
2 A A great brass telescope on a creaking mount, its tube pointing at a smear of the Milky Way.
3 A Chalk equations cover a slate board.
4 A ¶ A YOUNG WOMAN in a plain gray dress (20s) stands at the eyepiece, a notebook clutched to her chest.
5 A She has slipped in through the coal door.
6 A Behind her, from the stairwell, a lantern rises.
7 A ¶ An old man, PROFESSOR EUSTACE PEMBERTON (70s, nightshirt, dressing gown, white whiskers), emerges, glaring.
8 D PROFESSOR: Who is there? Show yourself!
9 A ¶ She spins, notebook falling.
10 A He lifts the lantern.
11 A The light finds her face.
12 D YOUNG WOMAN: Professor, please. I only wished to see.
13 D PROFESSOR: This is a private instrument.
14 D YOUNG WOMAN: I am Ottoline Marsh, sir. I wrote to you eleven times.
15 A ¶ He lowers the lantern a little.
16 A His beard trembles.
17 D PROFESSOR: The scullery girl's cousin? The one who counts comets?
18 D OTTOLINE: I do not count them, sir. I find them.
19 A ¶ He stares at her.
20 A Then at the telescope.
21 A Then at the sky through the open dome.
22 D PROFESSOR: Show me.
23 A ¶ She hesitates, steps to the eyepiece, adjusts a brass knob with practiced fingers.
24 A He peers in after her.
25 A A long silence.
26 D PROFESSOR [CONT'D]: God in heaven.
27 D OTTOLINE: Yes, sir.

### SCENE s00786 | INT. HOTEL ROOM - GRAND PACIFIC - NIGHT, 1951
Detected names (may be incomplete or contain aliases): VIVIENNE LAROCHE-STANTON
1 A ¶ Art deco lamp.
2 A A rain-streaked window.
3 A A wire recorder on the writing desk, its spools motionless.
4 A ¶ VIVIENNE LAROCHE-STANTON, 30s, evening gown, unpinned hair, sits on the edge of the bed.
5 A She stares at the recorder as though it might speak first.
6 A ¶ She stands.
7 A Crosses.
8 A Presses PLAY.
9 D VIVIENNE [V.O.] (recorded, bright): Darling, it's me. If you're hearing this, I've made it to San Francisco and the hotel has the most dreadful wallpaper.
10 A ¶ Vivienne smiles at the wallpaper.
11 A It is dreadful.
12 D VIVIENNE [V.O., CONT'D]: I'll see you at the Cliff House at nine. Wear the blue tie.
13 A ¶ She stops it.
14 A Crosses to the window.
15 A Checks her wristwatch.
16 A 11:40.
17 D VIVIENNE (quiet): Nine.
18 A ¶ She returns.
19 A Rewinds.
20 A Plays again.
21 D VIVIENNE [V.O., CONT'D] (recorded, bright): Darling, it's me.
22 A ¶ She snaps it off.
23 A Paces.
24 A Picks up the telephone receiver.
25 A Puts it down.
26 A ¶ She opens the closet.
27 A A blue tie hangs there, tags still on.
28 A She pulls it free.
29 A Holds it.
30 D VIVIENNE [CONT'D]: You said you'd come.
31 A ¶ She wraps the tie around her fist.
32 D VIVIENNE [CONT'D]: You said you'd come, and you didn't, and I wore the dress.
33 A ¶ She flings the tie across the room.
34 A It slaps the wall.
35 A She picks up the recorder, lifts it above her head, and hurls it at the wardrobe mirror.
36 A ¶ CRASH.
37 A The mirror shatters.
38 A The spools unspool in long brown ribbons.
39 A ¶ Silence.
40 A Rain.
41 A She stands among the shards, breathing.
42 A ¶ Then, from the broken machine, a last crackle of voice.
43 D VIVIENNE [V.O., CONT'D] (recorded): ...and darling, whatever happens, I'll wait.
44 A ¶ Vivienne sinks to the floor.
45 A The lamp flickers.

### SCENE s00938 | INT. FAIRBANKS FAMILY DINING ROOM - EVENING
Detected names (may be incomplete or contain aliases): LAWRENCE FAIRBANKS-ODUYA, MARGARET, CLAUDIA, TEDDY
1 A ¶ A formal dining room in a house that is slightly too large.
2 A A chandelier.
3 A A mahogany table set for four, with a fifth chair pushed against the wall.
4 A A grandfather clock ticks.
5 A ¶ LAWRENCE FAIRBANKS-ODUYA (60s, three-piece suit, silver hair brushed back) carves a roast with exacting care.
6 A At the other end of the table, MARGARET (60s, pearls, a smile on a timer) arranges napkins.
7 A Between them sit their grown children: CLAUDIA (30s, tailored, a wedding ring she keeps turning) and THEODORE "TEDDY" (30s, a rumpled blazer, no tie).
8 A ¶ The roast is placed.
9 A Lawrence serves Claudia first, then Margaret, then himself.
10 A Teddy's plate stays empty.
11 D LAWRENCE: Claudia. Your promotion. Tell us.
12 D CLAUDIA: It's nothing, Father. Just a title.
13 D LAWRENCE: Don't undersell it.
14 D MARGARET: Lawrence, let her eat.
15 A ¶ Teddy takes a roll from the basket.
16 A He tears it in half and lays both halves on his plate.
17 D LAWRENCE: And you, Theodore?
18 D TEDDY: I'm fine.
19 D LAWRENCE: That wasn't the question.
20 D TEDDY: It was an answer.
21 A ¶ Margaret refills her water glass.
22 A She does not drink.
23 A Claudia glances at her brother; he glances back.
24 A The clock ticks.
25 D LAWRENCE: Your mother and I were discussing the lease.
26 D TEDDY: What lease?
27 D LAWRENCE: The office. Downtown. It expires in June.
28 D TEDDY: I know when it expires.
29 D LAWRENCE: Then you know we won't renew.
30 A ¶ Teddy sets the roll down.
31 A He wipes his fingers on the napkin, folds it into a neat square, and places it on the table.
32 D CLAUDIA: Father, can we not do this tonight?
33 D LAWRENCE: When, then?
34 D MARGARET (brightly): More potatoes, anyone?
35 D TEDDY: Thank you, Mother. No.
36 A ¶ Lawrence sets down the knife and fork, side by side, at precisely five o'clock.
37 A He looks at his son for a long, patient moment.
38 D LAWRENCE: You've had five years.
39 D TEDDY: I've had five years of you watching.
40 A ¶ Claudia stands.
41 A She begins clearing plates that have barely been touched.
42 A Margaret rises, takes the potato dish, and goes to the kitchen without a word.
43 A The door swings shut behind her.
44 A ¶ Teddy pushes his chair back, takes his blazer from the chair, and stands there with it hanging from one hand.
45 D LAWRENCE: Sit down.
46 D TEDDY: No.
47 A ¶ For the first time, Lawrence's hand trembles on the table.
48 A He closes it into a fist and holds it there.

### SCENE s02214 | INT. LOCKED PENTHOUSE OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): KENNETH ADLER-MOSS, NADINE CRUZ, VOICE
1 A ¶ Glass walls over a rain-slick city.
2 A A desk the size of a pool table.
3 A A bank of five monitors, three dark.
4 A On the carpet, a spilled glass of scotch and a pair of reading glasses, one lens cracked.
5 A ¶ KENNETH ADLER-MOSS (60s, tycoon, silk shirt open at the throat) sits behind the desk with a phone gripped in both hands.
6 A Sweat beads at his hairline.
7 A A pistol lies on the blotter, six inches from his right hand.
8 A He has not touched it.
9 A ¶ Across the desk, in the visitor's chair, a woman.
10 A NADINE CRUZ (30s, black coat, patient eyes) rests her chin on folded hands.
11 A She hasn't spoken in minutes.
12 A ¶ A speakerphone on the desk crackles.
13 D VOICE [V.O.]: Mr. Adler-Moss? Mr. Adler-Moss, it's the front desk. We have police in the lobby.
14 D ADLER-MOSS: Tell them. Tell them to come up.
15 D VOICE [V.O.]: Sir, the elevator is out. They'll take the stairs.
16 D ADLER-MOSS: How many floors?
17 D VOICE [V.O.]: Forty-one, sir.
18 D ADLER-MOSS: Forty-one. Christ.
19 A ¶ Nadine unfolds her hands.
20 A Adler-Moss flinches.
21 A She reaches into her coat, slowly, and pulls out a folded sheet of paper.
22 A She slides it across the desk.
23 A He doesn't take it.
24 D NADINE: Read it.
25 D ADLER-MOSS: What is it?
26 D NADINE: Your signature.
27 D ADLER-MOSS: I don't sign things I haven't read.
28 D NADINE: You signed this one.
29 A ¶ He picks it up with two fingers.
30 A Reads.
31 A His colour drains.
32 A He reads it again.
33 D ADLER-MOSS: This is forged.
34 D NADINE: It's notarised.
35 D ADLER-MOSS: By whom?
36 D NADINE: By a man who's very sorry.
37 A ¶ The speakerphone crackles.
38 A The lobby voice is shaking now.
39 D VOICE [V.O.]: Sir? Sir, are you there?
40 D NADINE (to the phone, calm): He's here.
41 D VOICE [V.O.]: Who is that?
42 D NADINE: The reason you won't need the police.
43 A ¶ She lifts her hand, finger hovering over the disconnect key.
44 A Adler-Moss lunges for the pistol.
45 A Nadine slams the button.
46 A Static.
47 A The line goes dead.
48 A ¶ The pistol is in his hand, shaking.
49 A She doesn't move.
50 D ADLER-MOSS: I'll shoot.
51 D NADINE: You won't.
52 D ADLER-MOSS: I will.
53 D NADINE: You can't. It isn't loaded.
54 A ¶ He stares at the gun.
55 A Checks the chamber.
56 A Empty.
57 A Checks the magazine.
58 A Empty.
59 D NADINE [CONT'D]: I took them out at seven.
60 D ADLER-MOSS: You were here at seven?
61 D NADINE: I've been here since lunch.
62 A ¶ Below them, very faintly, boots on concrete.
63 A A distant door slamming.
64 A Voices.
65 A Coming up.
66 A ¶ Nadine stands, buttons her coat, and for the first time smiles.

### SCENE s00221 | INT. CLOSED PLANETARIUM - NIGHT
Detected names (may be incomplete or contain aliases): WOMAN, STRANGER, DESMOND
1 A ¶ A domed room.
2 A Rows of empty reclining seats.
3 A A projector hums in the center, casting a slow field of stars across the ceiling.
4 A ¶ A man in a damp raincoat stands at the control console.
5 A He wipes his hands on a handkerchief, one finger at a time.
6 A ¶ A WOMAN enters from the lobby door, keys in her hand.
7 A She stops.
8 A She does not turn on the lights.
9 D STRANGER: Evening.
10 A ¶ She sets her keys on the nearest seat, carefully, so they make no sound.
11 D WOMAN: We're closed.
12 D STRANGER: So I see.
13 A ¶ He nudges a dial.
14 A The stars drift.
15 A A comet crosses the dome.
16 D WOMAN: Door was locked.
17 D STRANGER: It was.
18 A ¶ He smiles at the ceiling.
19 A She watches his hands.
20 D WOMAN: You want something to drink? There's a kettle in the office.
21 D STRANGER: Kind of you.
22 A ¶ She does not move toward the office.
23 A Neither does he.
24 D WOMAN: Your coat's wet.
25 D STRANGER: It's been a long walk.
26 D WOMAN: From where?
27 A ¶ He lets the question hang.
28 A The comet fades.
29 D STRANGER: You kept the Orion show. They told me you'd cut it.
30 D WOMAN: Who told you?
31 D STRANGER: Man at the ticket window. Years ago.
32 A ¶ She takes one step down the aisle.
33 A He takes one up.
34 A They stop level with the fourth row.
35 D WOMAN: I don't think I know you.
36 D STRANGER: No. But your husband did.
37 A ¶ Her jaw sets.
38 A She glances at the exit sign, then back.
39 D WOMAN: My husband's dead.
40 D STRANGER: That's what I said. Did.
41 A ¶ She reaches slowly into her coat pocket.
42 A He watches it.
43 A She pulls out a small brass key and holds it up between two fingers.
44 D WOMAN: Basement. Where he kept the film reels.
45 D STRANGER (softly): I thought so.
46 D WOMAN: He wrote a name on every can. Yours is on the third shelf.
47 A ¶ He doesn't answer.
48 A The stars wheel overhead.
49 D WOMAN [CONT'D]: Tell me your name and I'll hand you the key.
50 A ¶ A long beat.
51 A He folds the handkerchief into a square.
52 D STRANGER: Desmond Pryce.
53 D WOMAN: Thank you, Mr. Pryce.
54 A ¶ She places the key on the armrest between them.
55 A He doesn't reach for it.
56 D DESMOND: Aren't you going to ask what's on the reel?
57 D WOMAN: No.
58 A ¶ She picks up her own keys again.
59 A Turns toward the lobby.
60 A Stops with her back to him.
61 D WOMAN [CONT'D]: The lights come on at eleven. You have twenty minutes.
62 A ¶ She leaves.
63 A The door sighs shut.
64 A ¶ He stands alone beneath Orion.
65 A Then he takes the key.

### SCENE s00927 | INT. COUNTY COURTHOUSE, SMALL CLAIMS - DAY
Detected names (may be incomplete or contain aliases): MAN, JUDGE PRISCILLA OYELOWO-HART, JUDGE, FELIPE ARRIAGA, DUTCH, CLERK BARNABY SKOLNICK
1 A ¶ Fluorescent lights.
2 A A radiator knocking.
3 A Four chairs and a table.
4 A ¶ A MAN in a rumpled tan jacket sits alone at the defendant's table, studying his own thumbs.
5 A ¶ JUDGE PRISCILLA OYELOWO-HART (60s) enters, sits, and bangs the gavel once.
6 D JUDGE: We're on the record. Counsel for the plaintiff?
7 A ¶ FELIPE ARRIAGA (30s, bright tie) rises.
8 D FELIPE: Felipe Arriaga, Your Honor.
9 D JUDGE: And the defendant?
10 D MAN: Just me, ma'am.
11 D JUDGE: Name for the record.
12 D MAN: Dutch Halloran.
13 D JUDGE: Mr. Halloran, you're unrepresented?
14 D DUTCH: Yes, ma'am. I figured the truth doesn't need a lawyer.
15 D JUDGE: It usually needs one.
16 A ¶ At the back of the room, CLERK BARNABY SKOLNICK (50s) stifles a laugh.
17 A Felipe sits and Dutch rises at the same moment.
18 D FELIPE: Your Honor, my client withdraws the claim.
19 D DUTCH: Your Honor, I'd like to pay it.
20 A ¶ The Judge looks from one to the other.
21 A She sighs and lowers the gavel.
22 D JUDGE: Nobody leaves until I understand why.

### SCENE s01556_4 | EXT. HOMESTEAD - CONTINUOUS
Detected names (may be incomplete or contain aliases): NELL
1 A ¶ She mounts the mule.
2 A Looks at the house one last time.
3 A The windmill creaks.
4 A The wheel leans against the door.
5 A ¶ She turns the mule toward the road.
6 A Not Cheyenne.
7 A The other way.
8 D NELL: Come on.
9 A ¶ They go.
10 A The grass closes behind them.
11 D NELL [V.O.] (reading, fading): "Yours, always. Thomas."
12 A ¶ The windmill turns.
13 A The yard is empty.

### SCENE s00615 | INT. COACHING INN - COMMON ROOM - NIGHT (1815)
Detected names (may be incomplete or contain aliases): PETTIGREW, CRABTREE, GOODY VANE, SOLDIER, ELIJAH
1 A ¶ Low beams.
2 A A roaring fire.
3 A Pewter mugs, wet cloaks steaming on pegs.
4 A ¶ MRS. PETTIGREW, 50s, the innkeeper, wipes the counter with her apron.
5 A MR. CRABTREE, 60s, a stout merchant, snores in the corner settle, his hat over his face.
6 A GOODY VANE, 70s, shawled, sips a thin soup.
7 A A SOLDIER in a mud-caked red coat sits by the fire with his boots off, staring into the flames, one arm bandaged to the elbow.
8 D PETTIGREW: More ale, sir?
9 D SOLDIER: Please.
10 A ¶ She pours.
11 A He drinks in one gulp.
12 D VANE (to the room): They say Bonaparte's loose again.
13 D CRABTREE (waking, muttering): They always say that.
14 D PETTIGREW: Hush, both of you. The man is tired.
15 D SOLDIER: I am. But I'll answer.
16 A ¶ He stands.
17 A The room goes quiet.
18 A The fire pops.
19 D SOLDIER [CONT'D]: My name is Elijah Rowe. Sergeant, Thirty-third Foot. I walked from Brussels in four days.
20 D VANE (softly): Brussels?
21 D ELIJAH: Yes, mother. And I will tell you one thing true. The Emperor is not loose. He is beaten.
22 D CRABTREE (sitting up, awed): Beaten?
23 D ELIJAH: At a place called Waterloo. Yesterday.
24 A ¶ The room breathes out all at once.
25 A Pettigrew crosses herself.
26 A Vane lets her spoon fall.
27 A Crabtree rises, takes off his hat and holds it to his chest.
28 D ELIJAH [CONT'D] (to himself): I wish it felt like a victory.

### SCENE s00532 | INT. NANA ROSALBA'S KITCHEN - POWER OUT - NIGHT
Detected names (may be incomplete or contain aliases): NANA ROSALBA, DESMOND, IMANI, KOFI, AUNT PETRA
1 A ¶ Candles in jam jars.
2 A A pot of rice losing its heat on a dead stove.
3 A Rain on the tin roof, loud as applause.
4 A ¶ NANA ROSALBA, 80s, in a housecoat, ladles soup by feel.
5 A Her son DESMOND, 50s, kneels at the breaker box with a phone flashlight in his teeth.
6 A His daughter IMANI, 16, scrolls a dead phone in disgust.
7 A KOFI, 9, hides under the table with a toy truck.
8 A AUNT PETRA, 60s, wrings her hands by the window.
9 D DESMOND (around the phone): Everybody stay put.
10 D PETRA: We are staying put, Desmond, there is nowhere to go.
11 D IMANI (to herself): Twelve percent. I had twelve percent.
12 D NANA (to the room): Bowls. Whoever is standing, get bowls.
13 D KOFI (from under the table): It's too dark to find the bowls.
14 D NANA: Then find them with your hands, like Jesus.
15 D IMANI: Nana --
16 D DESMOND: Mama, he didn't --
17 D PETRA: It's in the Bible somewhere.
18 A ¶ Thunder cracks.
19 A The candles gutter.
20 A Kofi shrieks.
21 A Everyone talks at once, and then all stop.
22 A ¶ Nana places a bowl in front of her grandson, then touches his hair.
23 D NANA (softly): Eat.

### SCENE s00936 | INT. ICE RINK ZAMBONI GARAGE - EARLY MORNING
Detected names (may be incomplete or contain aliases): RUDY, OYELARAN-STACK, MARISOL ECHEVERRIA-TANAKA, COACH DAHLIA FENWICK-ABARA, COACH, PHOEBE NAKAMURA-DELACROIX
1 A ¶ A cinderblock garage that smells of diesel and frozen rubber.
2 A A Zamboni, huge and patient, sits in the center like a sleeping bull.
3 A Hockey sticks hang on pegs along the wall, taped blades pointing at the floor.
4 A ¶ RUTHERFORD "RUDY" OYELARAN-STACK (60s) sits on an upturned bucket by the machine, a thermos between his knees.
5 A He is a big man gone soft, with a face like weathered oak and eyes that have watched ten thousand early mornings.
6 A He pours coffee into the thermos lid and offers it to no one in particular.
7 A ¶ The side door opens.
8 A MARISOL ECHEVERRIA-TANAKA (17) comes in carrying a hockey bag nearly as big as she is.
9 A She wears a faded junior-league jersey and holds her skates by the laces.
10 A ¶ She sets down the bag.
11 A He nods.
12 A She nods back.
13 A Neither says anything.
14 A It is a ritual.
15 D RUDY: Ice is good today.
16 D MARISOL: Good how?
17 D RUDY: Hard. Fast. Clean.
18 A ¶ She laces her skates, standing one foot on the Zamboni's bumper.
19 A He sips the coffee and lets her work.
20 A ¶ A third figure leans in the doorway: COACH DAHLIA FENWICK-ABARA (40s, quilted parka, a clipboard held like a hymnal).
21 A She watches Marisol lace for a moment, then glances at Rudy, who shrugs.
22 D COACH: You're early.
23 D MARISOL: So are you.
24 D COACH: I'm always early.
25 D MARISOL: So am I.
26 A ¶ The Coach smiles, almost.
27 A She sets the clipboard on the hood of the Zamboni.
28 A ¶ At the far end of the garage, a second girl is already sitting on the bench, tying her own skates in silence: PHOEBE NAKAMURA-DELACROIX (16).
29 A She does not look up.
30 A Marisol sees her, and her shoulders tighten, then ease.
31 D MARISOL [CONT'D] (quietly): Hey, Phoebe.
32 D PHOEBE: Hey.
33 A ¶ That's all.
34 A Rudy puts the lid back on the thermos.
35 A He climbs onto the Zamboni and the engine coughs awake, roaring in the low room.
36 A The big door rolls up, and a gray light pours across the ice.
37 A ¶ Marisol steps out onto the surface first.
38 A Phoebe follows.
39 A Nobody speaks.
40 A The blades cut their lines in the fresh ice.
