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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_sonnet/group_00045.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01768 | INT. JURY ROOM - FLOODED COURTHOUSE - NIGHT
Detected names (may be incomplete or contain aliases): HATTIE BOONE, SUNIL RAO, BEVERLY OSEI, ROMAN VOLKOV, ESTELLE FARRIER
1 A ¶ Two inches of black water on the floor.
2 A A long mahogany table above it.
3 A Five jurors sit with their feet on rungs, trousers rolled.
4 A A single lantern on the table.
5 A ¶ HATTIE BOONE (60s, foreperson, cardigan, reading glasses) taps a verdict form.
6 A SUNIL RAO (30s, jacket on his head against the drip).
7 A BEVERLY OSEI (40s, nurse, arms crossed).
8 A ROMAN VOLKOV (50s, plumber, boots, a flask).
9 A ESTELLE FARRIER (70s, hat with a veil, hands folded).
10 D HATTIE: We've been in here nine hours.
11 D SUNIL: Ten.
12 D BEVERLY: Eleven, if you count the lunch.
13 D HATTIE: Nobody counts the lunch.
14 D ROMAN (raising the flask): I count the lunch.
15 D HATTIE: Roman.
16 D ROMAN: It's water.
17 D HATTIE: It isn't.
18 A ¶ Hattie holds out her hand.
19 A Roman gives her the flask.
20 A She sniffs, wrinkles her nose, and sets it on the table.
21 D HATTIE [CONT'D]: Show of hands. Guilty.
22 A ¶ Sunil raises his.
23 A Roman raises his.
24 A Beverly does not.
25 A Estelle does not.
26 A Hattie does, slowly.
27 D HATTIE [CONT'D]: Three to two.
28 D BEVERLY: She did it.
29 D ESTELLE: She did not.
30 D SUNIL: Who? Who did it?
31 D BEVERLY: The defendant, Sunil. The woman. She said it herself.
32 D ESTELLE: She said she was sorry. That's not the same thing.
33 A ¶ Water laps at the legs of the table.
34 A The lantern flickers.
35 A Hattie lifts her eyes, and stops.
36 D HATTIE: Where is the foreman's chair?
37 A ¶ They turn.
38 A At the head of the table, the chair is pulled out.
39 A Somebody has taken the sixth place.
40 A A wet gown lies folded on the seat.
41 A Nobody saw anyone enter.
42 D ESTELLE: Oh, dear.
43 D BEVERLY: Hattie. There's only five of us.
44 D HATTIE: Count again.
45 D SUNIL: One, two, three, four, five. Five.
46 D ESTELLE: Six, dear. You forgot yourself.
47 A ¶ Sunil looks down.
48 A His reflection in the black water, perfectly still, looks back up at him and does not blink.
49 D SUNIL: Okay. I want to change my vote.

### SCENE s02091 | INT. ST. CASIMIR CHURCH BASEMENT - BINGO NIGHT
Detected names (may be incomplete or contain aliases): LORETTA BEAUCHAMP, ELIJAH STONE, PHILOMENA OKPARA, DENNIS HALVERSEN
1 A ¶ Long tables, paper plates, a ball cage in the corner.
2 A Four people at a table near the stage, daubers beside their cards.
3 A ¶ LORETTA BEAUCHAMP, 70s, ELIJAH STONE, 40s, PHILOMENA OKPARA, 60s, and DENNIS HALVERSEN, 50s, sit with their cards between them.
4 D LORETTA: You moved my dauber.
5 D ELIJAH: I did not.
6 D LORETTA: It was by the napkin. Now it's by your elbow.
7 D ELIJAH: Because you put it in my lane.
8 D PHILOMENA: There are no lanes.
9 D DENNIS: There are lanes.
10 D PHILOMENA: Dennis, it's bingo.
11 D DENNIS: It's bingo with lanes.
12 D ELIJAH: I won't be shamed over a dauber.
13 D LORETTA: No one is shaming. I'm observing.
14 D PHILOMENA: You are doing the thing you do.
15 D LORETTA: What thing?
16 D PHILOMENA: The thing where you pretend you're not angry and you are.
17 D LORETTA: I am not angry.
18 D DENNIS: Your hand is shaking.
19 D LORETTA: It's a cold basement.
20 D ELIJAH: It's seventy-two degrees.
21 D LORETTA: It's a cold basement in my heart.
22 D PHILOMENA: Oh, for the love of God.
23 D ELIJAH: Loretta, what is this about?
24 D LORETTA: It's not about the dauber.
25 D DENNIS: We know.
26 D LORETTA: It's about Tuesday.
27 D ELIJAH: What happened Tuesday?
28 D LORETTA: You know what happened.
29 D ELIJAH: I truly don't.
30 D PHILOMENA: He truly doesn't.
31 D LORETTA: You told Father Anselm I'd been spreading rumors.
32 D ELIJAH: I said you'd been mentioning things.
33 D LORETTA: "Mentioning."
34 D ELIJAH: That's a gentler word than "spreading."
35 D LORETTA: It's a word with a knife in it.
36 D PHILOMENA: Loretta. Did you tell people about the roof fund?
37 D LORETTA: I did not tell people. I told a few people.
38 D DENNIS: How many is a few?
39 D LORETTA: Eleven.
40 D ELIJAH: Eleven.
41 D LORETTA: It's a church. Eleven is a small number.
42 D PHILOMENA: It's a congregation of forty.
43 D LORETTA: Well. They were the right eleven.
44 D DENNIS: And what did you say?
45 D LORETTA: That the roof fund had four thousand dollars less than the books said.
46 D ELIJAH: It had four thousand dollars less than the books said because of the boiler.
47 D LORETTA: The boiler was a separate line item.
48 D ELIJAH: It was not.
49 D LORETTA: It's right there in the ledger.
50 D ELIJAH: Whose ledger?
51 D LORETTA: Yours.
52 D PHILOMENA: Elijah. Is it in your ledger?
53 D ELIJAH (after a long pause): There was a clerical error.
54 D DENNIS: Ah.
55 D LORETTA: A clerical error.
56 D ELIJAH: Which I was going to correct.
57 D LORETTA: When?
58 D ELIJAH: After the Christmas pageant.
59 D PHILOMENA: That's ten months.
60 D ELIJAH: I've been very busy.
61 D LORETTA: You were too busy to correct a clerical error but not too busy to tell Father Anselm I was mentioning.
62 D ELIJAH: Loretta, I'm sorry.
63 D LORETTA: Say it again.
64 D ELIJAH: I'm sorry.
65 D LORETTA: Once more with feeling.
66 D ELIJAH: I'm sorry, Loretta. I was embarrassed. I panicked. It was a small panic.
67 D LORETTA: It was a small panic with a large consequence.
68 D DENNIS: He's apologized.
69 D PHILOMENA: Twice.
70 D LORETTA (slowly): Well.
71 D ELIJAH: Well.
72 D LORETTA: You may have your lane.
73 D ELIJAH: Thank you.
74 D PHILOMENA: Can we please play?
75 D DENNIS: I'm in. Whoever calls the first number.
76 D ELIJAH: B-nine.
77 D LORETTA: Mine.
78 D PHILOMENA: That was fast.
79 D LORETTA: I've been waiting a long time.

### SCENE s01530_0 | INT. UNDERGROUND PARKING LEVEL P4 - NIGHT
Detected names (may be incomplete or contain aliases): NADEZHDA VOLKOVA-REYNOLDS
1 A ¶ Concrete pillars.
2 A Humming strip lights.
3 A One car left: a silver sedan with its trunk open.
4 A ¶ NADEZHDA VOLKOVA-REYNOLDS, 30s, trench coat, crouches by the rear wheel.
5 A A phone in her hand, held flat like a tray.
6 A Her breath fogs.
7 A ¶ She thumbs the screen.
8 A A voice memo plays.
9 A Her own voice, recorded earlier, calm and clipped.
10 D NADEZHDA [V.O.]: If you are hearing this, level four is clear. Listen carefully. Do not skip.
11 D NADEZHDA (to the phone): I'm not skipping.
12 D NADEZHDA [V.O.]: Check the trunk.
13 A ¶ She stands.
14 A Scans the pillars.
15 A Slowly.
16 A Crosses to the sedan and looks in.
17 A Her face tightens.
18 D NADEZHDA: Empty.
19 D NADEZHDA [V.O.]: Check again.
20 A ¶ She lifts the felt lining.
21 A Under it, a small black flash drive taped to the floor.
22 A She peels it free.
23 D NADEZHDA: Got it.
24 D NADEZHDA [V.O.]: Good. Now walk to the stairwell. Do not use the elevator.
25 A ¶ She stops.
26 A Looks at the elevator.
27 A Its numbers are climbing: 1.
28 A 2.
29 A 3.
30 D NADEZHDA: Why not the elevator?
31 D NADEZHDA [V.O.]: Because I know what I know, and you do not.
32 D NADEZHDA: That's not an answer.
33 D NADEZHDA [V.O.]: It is the only one I left you.
34 A ¶ The numbers climb.
35 A 4.
36 A A ping.
37 A The doors slide open on an empty car.
38 A ¶ She backs away, heels clicking on concrete.
39 A Footsteps start somewhere behind the pillars.
40 A More than one pair.
41 A Unhurried.
42 D NADEZHDA (whisper): They're here.
43 D NADEZHDA [V.O.]: Do not turn around.
44 A ¶ She freezes.
45 A A ceiling camera swivels, tracking her.
46 D NADEZHDA: I recorded this at two a.m. I was drunk.
47 D NADEZHDA [V.O.]: You were sober. You were terrified. Walk.
48 A ¶ She drops the phone.
49 A Stamps it into splinters.
50 A Sprints for the stairwell, shoulders the steel door, and it slams behind her.

### SCENE s01630 | INT. WEATHER STATION, PACIFIC ATOLL - DAY
Detected names (may be incomplete or contain aliases): PETTY OFFICER ANSELM BOUCHARD, FENWICK
1 A ¶ A cinderblock hut.
2 A Louvered windows.
3 A Barometers, a wall of dials, a hand-cranked radio on a rough table.
4 A Heat shimmers outside.
5 A ¶ PETTY OFFICER ANSELM BOUCHARD, 30s, sunburnt, shirtless under a rain slicker, logs numbers in a ledger.
6 D BOUCHARD (muttering): Seven-oh-three. Seven-oh-two. Seven-oh-three.
7 A ¶ He taps the barometer.
8 A It does not move.
9 A ¶ The radio crackles.
10 D FENWICK [V.O.] (radio): Atoll Three, Atoll Three, this is Fleet Weather. Do you copy?
11 A ¶ Bouchard picks up the handset.
12 A Takes his time.
13 D BOUCHARD: Fleet Weather, Atoll Three. I copy.
14 D FENWICK [V.O.] (radio): Anselm, is that you?
15 D BOUCHARD: It's the only voice out here, Fenwick.
16 D FENWICK [V.O.] (radio): Give me the numbers.
17 D BOUCHARD: Seven-oh-three and steady. Wind variable, light. Seas calm. Nothing on the horizon.
18 D FENWICK [V.O.] (radio): Nothing at all?
19 D BOUCHARD: A seabird. Maybe two.
20 D FENWICK [V.O.] (radio): Understood. Hold position.
21 D BOUCHARD: We've held it eleven weeks.
22 D FENWICK [V.O.] (radio): Then you're good at it. Out.
23 A ¶ The radio clicks dead.
24 A Bouchard sets the handset in its cradle.
25 D BOUCHARD (to the room): Gentlemen, the war continues without us.
26 A ¶ No one answers.
27 A The room has no gentlemen.
28 A ¶ He goes back to the ledger.
29 A Writes: no change.
30 A Leans back.
31 A Closes his eyes.
32 D BOUCHARD [CONT'D] (to himself): Tomorrow, I swear, I'll paint the wall.
33 A ¶ Outside, a seabird calls.

### SCENE s01968 | EXT. WELL-DIGGING CAMP - DESERT - DAY
Detected names (may be incomplete or contain aliases): EZRA LOCKRIDGE, MERCY TAVARES, ANSEL WHITCOMBE
1 A ¶ A dry plain under a white sky.
2 A A scaffold of timbers stands over a deep shaft.
3 A A windlass creaks.
4 A A water barrel stands empty in the shade of a tilting wagon.
5 A ¶ EZRA LOCKRIDGE, 50s, sunburnt, sleeves rolled, hauls a bucket of rock and clay up from the shaft hand over hand.
6 A MERCY TAVARES, 30s, in a broad straw hat, stands at the lip of the pit and holds the rope steady.
7 A She is thin, tireless, and has not spoken for a long time.
8 A ¶ The bucket clears the rim.
9 A Ezra tips it.
10 A A thin trickle of mud slides out.
11 A He kneels, takes a pinch, and rubs it between his fingers.
12 D EZRA: Wet.
13 D MERCY: Wet isn't water.
14 D EZRA: It's near.
15 D MERCY: You said that yesterday.
16 A ¶ He wipes his hands on his trousers.
17 A He rises, stiff.
18 A The wind carries a dull sound from the east, the clop of a single horse.
19 A ¶ They turn.
20 A A rider approaches along the dry riverbed, slowly, a long shadow thrown ahead of him.
21 A He is tall and spare, with a black coat and a silver star on his lapel.
22 A ANSEL WHITCOMBE, 40s, a land agent, reins in at the edge of camp and dismounts.
23 D ANSEL: Morning.
24 D EZRA: It's near noon.
25 D ANSEL: So it is. I'm told you've been digging on the Culver claim.
26 D EZRA: I'm told it's nobody's claim.
27 D ANSEL: It's the bank's, as of Tuesday.
28 A ¶ Mercy lets the rope go slack.
29 A Ezra does not move.
30 A The windlass creaks as the bucket swings.
31 D MERCY: We have a filed claim.
32 D ANSEL: You have a filed claim in the wrong county.
33 D EZRA: That so.
34 D ANSEL: I'm afraid it is.
35 A ¶ He takes a folded paper from his coat and holds it out.
36 A Ezra does not take it.
37 A Ansel sets it on the windlass crank and steps back.
38 D ANSEL [CONT'D]: You have until sundown.
39 D MERCY: There's water down there.
40 D ANSEL: There's mud.
41 D MERCY: It's water, mister. Give us an hour.
42 A ¶ Ansel looks at the shaft, then at the horizon.
43 A He sighs and removes his hat.
44 A Sweat runs from his hair.
45 D ANSEL: One hour. Then I'm obliged to read it aloud.
46 A ¶ He walks to the shade of the wagon and sits on its tongue.
47 A Ezra waits.
48 A Then he climbs back down the ladder into the shaft.
49 A Mercy takes up the rope again, steady as a post, and begins to haul.

### SCENE s00073 | INT. RIVERBOAT CASINO COURTROOM - DAY
Detected names (may be incomplete or contain aliases): CLEMENTINE ASHWORTH, MAXWELL DRUMM, JUDGE ISADORA FENWICK, BAILIFF NORBERT KWASNIEWSKI
1 A ¶ A gambling hall converted into a temporary courtroom after the flood.
2 A Slot machines are draped in canvas, and brown water stains climb the walls.
3 A A judge's bench has been built from a roulette table.
4 A ¶ CLEMENTINE ASHWORTH, the defense attorney, stands at a card table with her hands folded.
5 A She is sharp, silver-haired, and never hurried.
6 A Across from her, MAXWELL DRUMM, the prosecutor, flips through a damp stack of papers.
7 A He is young and eager, and his collar is two sizes too big.
8 A At the roulette bench, JUDGE ISADORA FENWICK adjusts her glasses and glares down at both of them.
9 A Near the door, BAILIFF NORBERT KWASNIEWSKI shifts his weight, his hand resting on a holstered flashlight.
10 D JUDGE FENWICK: Mr. Drumm. You were saying.
11 A ¶ He clears his throat and rises, dropping a page.
12 A He stoops, recovers it, and comes up red.
13 D MAXWELL: Your Honor, the State maintains the defendant knowingly opened the sluice gates.
14 D CLEMENTINE: Objection. He has not yet shown a single witness who saw her touch them.
15 D JUDGE FENWICK: Sustained. Move along.
16 A ¶ Maxwell glances at his notes, then at the bailiff, who gives him nothing.
17 A He swallows.
18 D MAXWELL: Then I call the night watchman.
19 A ¶ Norbert opens the door.
20 A No one is there.
21 A He steps out, comes back, and shrugs.
22 D NORBERT: He ain't come, ma'am.
23 D JUDGE FENWICK: Of course he hasn't.
24 A ¶ Clementine rises slowly, smoothing her skirt.
25 A She walks to the center of the room and lets the silence stand.
26 D CLEMENTINE: Your Honor, the State's case is built on a man who is not here, a gate no one saw opened, and a river that has a long habit of rising.
27 A ¶ Maxwell opens his mouth, and she raises a hand.
28 A He closes it.
29 D CLEMENTINE [CONT'D]: I move to dismiss.
30 A ¶ The judge studies her over her glasses, then looks at the stained ceiling, the draped slots, the roulette wheel under her palm.
31 A She spins it.
32 A It clatters and settles.
33 D JUDGE FENWICK: Red seventeen.
34 A ¶ She lifts the gavel.
35 D JUDGE FENWICK [CONT'D]: Dismissed.

### SCENE s01254 | EXT. CANYON RIM - CAMP - DAWN
Detected names (may be incomplete or contain aliases): ELIJAH VANCE-HOLLOWAY, PEPPER, DUNLEAVY, TOBIAS MWANGI, OLD AUGUSTUS FENWICK, ^TOBIAS
1 A ¶ Red stone against a lemon sky.
2 A A thin column of smoke.
3 A Four bedrolls around a dead fire, a coffee pot on a flat rock.
4 A Horses hobbled in a stand of juniper.
5 A ¶ A tall man sits cross-legged on a saddle, rolling a cigarette.
6 A ELIJAH VANCE-HOLLOWAY (40s, black hat, a face like a closed door).
7 A He licks the paper, tucks it behind his ear, and doesn't light it.
8 A ¶ Beside him a lean woman scrapes a skillet clean with a knife.
9 A PERPETUA "PEPPER" DUNLEAVY (30s, braided hair, two pistols).
10 A She scrapes slowly, listening.
11 A ¶ The third bedroll is empty.
12 A The fourth holds a boy of fifteen, sleeping with his boots on: TOBIAS MWANGI (15, freckles, too-big shirt).
13 A He snores.
14 A ¶ At the edge of camp, a stooped man in a long grey duster watches the horizon with a spyglass: OLD AUGUSTUS FENWICK (60s, spectacles pushed up on his forehead).
15 D AUGUSTUS: Smoke.
16 D ELIJAH: Whose?
17 D AUGUSTUS: South. Two miles.
18 D ELIJAH: Ours or theirs?
19 D AUGUSTUS: Don't know. Could be anybody's.
20 A ¶ Pepper stops scraping.
21 A She sets the skillet down and wipes her knife on her trouser leg.
22 A She does not look at Elijah.
23 A He does not look at her.
24 D PEPPER: We should wake the boy.
25 D ELIJAH: Let him sleep.
26 D PEPPER: He'll want to be awake for this.
27 D ELIJAH: No, he won't.
28 A ¶ Augustus lowers the spyglass.
29 A He turns it over in his hands, studies the brass, then screws it shut.
30 D AUGUSTUS: Eleven riders.
31 D ELIJAH: You said smoke.
32 D AUGUSTUS: I said smoke. Then I counted.
33 A ¶ Elijah draws the cigarette from behind his ear.
34 A Strikes a match on his boot.
35 A The flame trembles.
36 A He holds it a long time before lighting, as if the match were something to pray to.
37 D ELIJAH: Eleven.
38 D PEPPER: We have four.
39 D ELIJAH: Three, with a child.
40 D AUGUSTUS: Four.
41 D ELIJAH: Four.
42 D PEPPER: We could ride north.
43 D ELIJAH: They'd see the dust.
44 D PEPPER: We could ride now.
45 D ELIJAH: They'd see the dust.
46 A ¶ She nods, short, like a woman agreeing to be hanged.
47 A She stands, her two pistols clinking, and crosses to the juniper where the horses stand.
48 A She runs her hand along the nearest neck.
49 A ¶ At the bedroll, the boy turns over and opens one eye.
50 D TOBIAS: Is it morning?
51 D ELIJAH: It's morning.
52 D TOBIAS: Is there coffee?
53 D ELIJAH: There will be.
54 A ¶ Tobias sits up.
55 A Rubs his face.
56 A Sees Pepper at the horses.
57 A Sees Augustus with the spyglass.
58 A Sees the match burn down to Elijah's fingers.
59 D TOBIAS: Who's coming?
60 A ¶ Nobody answers.
61 A Elijah drops the match.
62 A It dies in the dust.
63 D ELIJAH: Pepper. Saddle the boy's horse.
64 D PEPPER: I've done it.
65 D ELIJAH: Augustus. Water.
66 D AUGUSTUS: I filled it last night.
67 D ELIJAH: You always do.
68 A ¶ He stands.
69 A Dusts his knees.
70 A Hands the unlit cigarette to Tobias, who takes it, astonished.
71 D TOBIAS: What's this for?
72 D ELIJAH: For after.
73 D PEPPER: You don't say that to a boy.
74 D ELIJAH: I'm saying it.
75 A ¶ A distant sound: horses, many horses, a soft thunder rolling over the rim.
76 A Augustus puts the spyglass in his pocket.
77 A Pepper draws one pistol and spins it once on her finger.
78 A Tobias gets his boots under him.
79 D TOBIAS: Can I have a gun?
80 D ELIJAH: No.
81 D PEPPER: Give him mine.
82 D ELIJAH: Pepper.
83 D PEPPER: He's got a right.
84 D ^TOBIAS: I've got a right.
85 A ¶ They speak together, her voice dry, his voice cracking.
86 A Elijah looks from one to the other, then at the dust cloud boiling on the horizon, then at the coffee pot.
87 D ELIJAH (quietly): Put on the coffee.
88 D AUGUSTUS: Elijah...
89 D ELIJAH: If we're going to die, we'll die warm.
90 A ¶ Pepper sets the pot on the dead coals.
91 A Tobias snaps twigs into a pile.
92 A Augustus brings a match.
93 A ¶ The thunder rolls closer.
94 A The twigs catch.
95 T FADE OUT.

### SCENE s00409 | INT. BASEMENT REC ROOM - PING-PONG TOURNAMENT - NIGHT
Detected names (may be incomplete or contain aliases): SUNNY, BOOKER, MILO, FRANCESCA
1 A ¶ Wood paneling and low ceiling.
2 A A single table under a bare bulb.
3 A Folding chairs hold a dozen onlookers, cans of soda in hand.
4 A A chalkboard bracket hangs on the wall, with SUNNY and BOOKER circled at the bottom.
5 A ¶ SUNNY, 20s, a wiry woman in a headband and a retro track jacket, bounces the ball on her paddle.
6 A BOOKER, 40s, a big, slow man in a cardigan, wipes his hands on his pants.
7 A MILO, 12, the referee, sits on a stepladder with a whistle and a clipboard.
8 A FRANCESCA, 50s, Booker's wife, holds a thermos at courtside.
9 D MILO: Nine to eight, Sunny.
10 D SUNNY: I know.
11 D BOOKER: I know.
12 A ¶ They say it together.
13 A Both flinch.
14 D SUNNY: I know the score. ^BOOKER Let's finish this.
15 D MILO: Serve.
16 A ¶ Sunny serves.
17 A Booker slams it back.
18 A The ball skims the net and drops onto Sunny's side, where it rolls off the table's edge and under a chair.
19 D FRANCESCA: Point, Booker!
20 D MILO: Nine to nine. Final game point.
21 A ¶ The crowd murmurs.
22 A Sunny retrieves the ball, blows on it, and tosses it to Booker.
23 D SUNNY: Your serve.
24 D BOOKER: You sure?
25 D SUNNY: I like to win clean.
26 A ¶ Booker grins.
27 A He rolls his shoulders, steps back, and lets the ball fly.
28 A Sunny returns it with a snap.
29 A It arcs high.
30 A Booker drives it down in a smash that rings on the table.
31 A Sunny dives, paddle outstretched, and flicks it back from the floor.
32 A ¶ The ball hangs in the air.
33 A Everyone holds their breath.
34 A It lands, clips the edge, and drops.
35 D MILO: Point... Sunny.
36 A ¶ The room erupts.
37 A Sunny leaps up, fists raised.
38 A Booker bows his head, laughs, and holds out a hand.
39 D BOOKER: Well played.
40 D SUNNY: You almost had me.
41 D FRANCESCA (to Sunny): He always almost has them.

### SCENE s01425 | INT. CONVERTED CATHEDRAL CURLING HALL - NIGHT
Detected names (may be incomplete or contain aliases): BERNIE, OYELARAN, MAEVE KOWALCZYK, DESMOND TAI, RAFFI HOVSEPIAN, JUNE PELLETIER-ODUYA
1 A ¶ A deconsecrated church, nave stripped, pews gone, a pebbled sheet of ice running where the altar once stood.
2 A Stained glass throws blue and amber across the frost.
3 A Stone saints watch from niches.
4 A Condensation drips from the vaulted ceiling.
5 A ¶ Scoreboard: LIONS 6, FERRYMEN 6.
6 A Eighth end.
7 A ¶ BERNADETTE "BERNIE" OYELARAN (50s, coach's jacket, whistle she never uses) stands behind the hog line with a clipboard she hasn't looked at in an hour.
8 A ¶ MAEVE KOWALCZYK (20s, skip, braid tucked into her collar) crouches at the house, broom flat across her knees.
9 A ¶ DESMOND TAI (30s, lead, calves like fence posts) waits at the far hack, stone handle in a white-knuckled grip.
10 A ¶ RAFFI HOVSEPIAN (20s, second, perpetual grin gone tight) sweeps nothing, just to have something to do with his arms.
11 A ¶ JUNE PELLETIER-ODUYA (40s, vice, wedding ring on a chain around her neck) stands at the boards, arms folded, chewing a toothpick down to splinters.
12 D BERNIE: Last stone. Hammer's ours.
13 D MAEVE: I know.
14 D BERNIE: Draw to the button.
15 D MAEVE: I know.
16 D BERNIE: Then why are you looking at the saint?
17 A ¶ Maeve glances at a stone St. Sebastian in the wall, pierced with nine marble arrows.
18 D MAEVE: He's got a better angle than I do.
19 D DESMOND (calling down the sheet): Ready!
20 D JUNE: Ice is pulling left, maybe two inches.
21 D RAFFI: Three. It's three.
22 D JUNE: Two and a half.
23 D RAFFI: Fine. Two and a half.
24 A ¶ Desmond pushes out of the hack, glides low and long, releases the stone with a soft rotation.
25 A It slides, humming on the pebble.
26 D MAEVE: Hard! Hard!
27 A ¶ Raffi and June sweep, brooms drumming the ice, snow-frost jumping off the bristles.
28 A The stone arcs past the guard.
29 D JUNE: Off!
30 A ¶ They lift.
31 A The stone curls, slows, rests an inch from the back of the four-foot ring.
32 D BERNIE: That's yours, Desmond.
33 D DESMOND: I know.
34 D BERNIE: Everyone says "I know" tonight. I'd like one "I'm scared."
35 A ¶ A beat.
36 A Raffi laughs.
37 A June spits her toothpick onto the ice.
38 A Maeve rises, rolling her shoulders.
39 D MAEVE: I'm scared.
40 D BERNIE: Good. Go.
41 A ¶ Maeve settles into the hack.
42 A Looks down the sheet.
43 A Breathes.
44 D MAEVE [CONT'D]: Desmond, where do you want it?
45 D DESMOND: Weight of a feather. Land on the button like a kiss.
46 D MAEVE: Don't kiss anything, I'm married.
47 D JUNE: So am I.
48 D RAFFI: Everybody's married. Throw the rock.
49 A ¶ Maeve pushes.
50 A The stone leaves her hand in a perfect curve.
51 A Desmond and Raffi pick up the sweep, then drop it.
52 A June holds up a flat palm.
53 D JUNE: Leave it. Leave it.
54 A ¶ The stone drifts, rotating, down the pebbled ice, under a rose window that paints it red for one second, then amber, then blue.
55 D BERNIE (whispering): Come on, come on.
56 A ¶ It stops.
57 A A hair's width from Desmond's stone, a hair's width from the pin.
58 A ¶ Silence under the vault.
59 A Raffi drops his broom.
60 A Desmond puts both hands on his head.
61 A June exhales through her teeth.
62 D JUNE [CONT'D]: We measure.
63 A ¶ Bernie gets down on her knees on the ice, pulls a measuring stick from her jacket, and lays it across the gap between the two stones.
64 A She reads it.
65 A Looks up.
66 D BERNIE: Ferrymen's. By a quarter inch.
67 A ¶ Nobody speaks.
68 A Maeve takes off her glove, looks at her bare hand.
69 A Her fingers don't tremble.
70 D MAEVE: Good end.
71 D BERNIE: That's the end. Not the match. We play the extra end in five.
72 D DESMOND: There's an extra end?
73 D BERNIE: There's always an extra end. Sit down. Drink water. Look at a saint.

### SCENE s02182 | INT. COURTROOM 4B - SPLIT-LEVEL ANNEX - DAY
Detected names (may be incomplete or contain aliases): JUDGE EDITH WHITLOCK, ATTORNEY MARCUS DELANEY, ROSALIND PEARCE, ATTORNEY FELIX OYELOWO, NATHANIEL STROUD, BAILIFF HUGO
1 A ¶ Wood panelling, fluorescent hum.
2 A A cracked window shows a parking structure.
3 A The room is packed and silent.
4 A ¶ JUDGE EDITH WHITLOCK (60s, silver bob, half-moon glasses) presides.
5 A At the plaintiff's table, ATTORNEY MARCUS DELANEY (40s, three-piece suit) shuffles notes beside his client, ROSALIND PEARCE (50s, nurse's cardigan, wedding ring she keeps turning).
6 A At the defence table, ATTORNEY FELIX OYELOWO (30s, immaculate) sits beside his client, DR. NATHANIEL STROUD (60s, surgeon, bow tie).
7 A In the box, a nervous BAILIFF HUGO (30s, uniform too big) stands at attention.
8 D JUDGE WHITLOCK: Counsel, approach.
9 A ¶ Delaney and Oyelowo rise together, stride to the bench.
10 A She leans down, eyes narrowing.
11 D JUDGE WHITLOCK [CONT'D]: I will not have another outburst. Is that clear?
12 D DELANEY: Perfectly, Your Honour.
13 D OYELOWO: Perfectly, Your Honour.
14 A ¶ She sits back.
15 A They return to their tables.
16 A Delaney drops a folder in front of Rosalind, who squares it with both hands.
17 A Stroud leans toward Oyelowo and whispers; Oyelowo shakes his head and stares straight ahead.
18 D DELANEY: Mrs. Pearce, tell the court what you saw in the operating room.
19 D ROSALIND: I saw the anaesthesia log. It was blank.
20 D OYELOWO: Objection. Foundation.
21 D JUDGE WHITLOCK: Overruled. Continue.
22 D ROSALIND: It was blank for forty minutes.
23 D DELANEY: And who was responsible for completing that log?
24 D ROSALIND: Dr. Stroud.
25 A ¶ A murmur from the gallery.
26 A Stroud's jaw tightens.
27 A He lifts a pen, sets it down, lifts it again.
28 A Hugo shifts his weight and clears his throat.
29 D OYELOWO: Mrs. Pearce, you were the circulating nurse that day?
30 D ROSALIND: I was.
31 D OYELOWO: And the log was your responsibility as well.
32 D ROSALIND: It was not.
33 D OYELOWO: You're sure.
34 D ROSALIND: I've worked in that theatre for twenty-two years. I'm sure.
35 A ¶ Oyelowo studies her.
36 A She holds his gaze.
37 A Delaney leans back, folding his hands, a small smile at the corner of his mouth.
38 D JUDGE WHITLOCK: Mr. Oyelowo, do you have a question?
39 D OYELOWO: Several, Your Honour. But I'll start with one.
40 A ¶ He turns, crosses to the box, stands very close.
41 D OYELOWO [CONT'D]: Why did you wait eleven months to report it?
42 D ROSALIND: Because no one asked.
43 A ¶ Silence.
44 A Stroud finally looks up.
45 A For the first time, he looks at her.

### SCENE s01268 | INT. WEDDING RECEPTION - RIVERBOAT BALLROOM - NIGHT
Detected names (may be incomplete or contain aliases): IMANI LOCKHART-DEVEREUX, FERNANDO CASTELLANOS, DONA GLORIA CASTELLANOS, UNCLE ABEL
1 A ¶ Paper lanterns sway on a gilded deck.
2 A A band plays under strung lights.
3 A Champagne flutes shiver on a long white table.
4 A ¶ Four guests huddle near the cake: the bride's sister IMANI LOCKHART-DEVEREUX (30s, bridesmaid, sage-green dress), her ex-boyfriend FERNANDO CASTELLANOS (30s, best man, too-tight tie), his mother DONA GLORIA CASTELLANOS (60s, black lace, fan in hand), and an elderly cousin, UNCLE ABEL (70s, braces, cane).
5 A ¶ Imani and Fernando stand a pace apart, the way people do when they have both rehearsed a speech and forgotten it.
6 D IMANI: You look well.
7 D FERNANDO: You look... green.
8 D IMANI: It's sage.
9 A ¶ Gloria snaps her fan open.
10 A Abel leans heavily on his cane and squints at the cake.
11 A Imani and Fernando both reach for the same champagne flute, their fingers meeting on the stem.
12 A They freeze.
13 A The band hits a slow chord.
14 D FERNANDO: After you.
15 D IMANI: After you.
16 A ¶ Gloria and Abel exchange a glance, shuffle to opposite sides of the cake, and, as if on cue, begin to cut it, passing the knife between them with elaborate ceremony.
17 T FADE OUT.

### SCENE s00298 | INT. CALL CENTER - COMPLAINTS DEPARTMENT - DAY
Detected names (may be incomplete or contain aliases): CYPRIAN OYELARAN-BLOOM, AGGIE, VANTERPOOL-NKEMELU, MOE, LINDQVIST-SANTOS, ROSAMUND FEATHERSTONE-ABIOLA
1 A ¶ Cubicles.
2 A Headsets.
3 A A banner reads "WE LISTEN!" in sagging letters.
4 A ¶ CYPRIAN OYELARAN-BLOOM (30s, headset askew) slams his desk.
5 A AGATHA "AGGIE" VANTERPOOL-NKEMELU (50s, supervisor, cardigan, mug that says WORLD'S OKAYEST BOSS) strides over.
6 A MORDECAI "MOE" LINDQVIST-SANTOS (20s, intern, tie too wide) trails behind her with a notepad.
7 A ROSAMUND FEATHERSTONE-ABIOLA (60s, a customer) is audible only through the headset.
8 D CYPRIAN (into mic): Ma'am, I understand.
9 D ROSAMUND [V.O.] (tinny, furious): You do NOT understand!
10 D CYPRIAN: Ma'am, the toaster is under warranty.
11 D ROSAMUND [V.O.]: It exploded!
12 D CYPRIAN: Ma'am, "exploded" is not a covered event.
13 D AGGIE: Cyprian. Hold.
14 D CYPRIAN (muting): She says it exploded.
15 D AGGIE: Did it?
16 D CYPRIAN: She sent a photo.
17 A ¶ He tilts the monitor.
18 A A blackened ceiling, a toast-shaped hole.
19 D MOE: Is that a toast-shaped hole?
20 D AGGIE: Moe, take a note.
21 D MOE: What note?
22 D AGGIE: "Do not tell her it is covered."
23 D MOE: Why not?
24 D AGGIE: Because then we'd owe her a ceiling.
25 A ¶ Cyprian unmutes.
26 D CYPRIAN: Ma'am, we are going to send you a brand-new toaster.
27 D ROSAMUND [V.O.]: A TOASTER?
28 D CYPRIAN: A better toaster.
29 D ROSAMUND [V.O.]: I want a ceiling!
30 A ¶ Aggie snatches the headset off Cyprian.
31 A Puts it on.
32 A Smiles at the monitor.
33 D AGGIE (sweetly): Mrs. Featherstone-Abiola, it's Agatha. Have you tried the hat?
34 D ROSAMUND [V.O.]: ...What hat?
35 D AGGIE: The complimentary hat.
36 A ¶ A pause.
37 A Moe and Cyprian stare at her.
38 D ROSAMUND [V.O.] (softening): Is it a nice hat?
39 D AGGIE: It's a very nice hat.
40 A ¶ She hangs up.
41 A Takes off the headset.
42 A Cyprian and Moe watch her like she has levitated.
43 D CYPRIAN: There's no hat.
44 D AGGIE: Moe. Find a hat.

### SCENE s01144 | INT. PHOTOGRAPHER'S STUDIO - DARKROOM - NIGHT - 1893
Detected names (may be incomplete or contain aliases): ELIZA PRYCE, JASPER, WHITLOCK
1 A ¶ Red lamp.
2 A Trays of chemicals.
3 A Glass plates drying on a rack.
4 A The air smells of vinegar.
5 A ¶ ELIZA PRYCE (30s, long sleeves rolled, stained gloves) lifts a plate from the developing bath with tongs.
6 A JASPER (12, apprentice, oversized apron) stands on a stool holding a lantern shaded in red tissue.
7 A MRS. WHITLOCK (50s, widow's black, a hat pinned too firmly) waits at the door, clutching a reticule.
8 D ELIZA: Jasper, hold the light steadier.
9 D JASPER: Yes, Miss Pryce.
10 D ELIZA: Mrs. Whitlock, you may come closer. But not past the line.
11 D MRS. WHITLOCK: What line?
12 D JASPER: The chalk, ma'am.
13 A ¶ Mrs. Whitlock steps up to the chalk mark.
14 A The plate drips.
15 A In the red light, a ghostly negative: a woman at a window, and over her shoulder a faint pale shape.
16 D MRS. WHITLOCK: Is that...
17 D ELIZA: Your husband, I believe.
18 D MRS. WHITLOCK: He's been dead eleven years.
19 D ELIZA: Then he's very patient.
20 D JASPER: Miss Pryce, do you want it fixed?
21 D ELIZA: Yes, Jasper. Fix it before the lady changes her mind.
22 A ¶ Mrs. Whitlock watches the plate slide into the fixing bath.
23 A The shape stays.

### SCENE s01108_1 | INT. DORMITORY CORRIDOR - CONTINUOUS
Detected names (may be incomplete or contain aliases): LORETTA, THADDEUS, MRS. PRUDENCE, ELEANOR
1 A ¶ They tumble through the door and into the corridor, gasping.
2 A Loretta slams it shut.
3 A A heavy thud answers from the other side.
4 D LORETTA: Hold it!
5 A ¶ Thaddeus throws his shoulder against the door.
6 A Mrs. Prudence presses her back against it.
7 A The thuds come faster.
8 A Harder.
9 A Something laughs, high and child-like.
10 D THADDEUS: It's strong!
11 D LORETTA: It's a child!
12 D MRS. PRUDENCE: It's not a child anymore!
13 A ¶ The door bulges.
14 A Loretta digs in her satchel, pulls out a brass key.
15 D LORETTA: There's a lock!
16 D THADDEUS: Do it!
17 A ¶ She rams the key in, turns.
18 A The bolt clunks home.
19 A The thudding stops.
20 A In the silence, they sink to the floor, panting.
21 A ¶ A tiny voice speaks from beneath the door.
22 A Barely a whisper.
23 D ELEANOR [O.S.]: Don't leave me.
24 A ¶ None of them answer.

### SCENE s00728 | INT. SECRETARY'S OFFICE, NEW YORK INSURANCE COMPANY - NIGHT (1927)
Detected names (may be incomplete or contain aliases): MILLICENT HARGROVE
1 A ¶ A cramped office after hours.
2 A A single green-shaded lamp.
3 A Filing cabinets crowd the walls like silent clerks.
4 A On the desk, a bulky wax-cylinder dictating machine, horn pointed up.
5 A ¶ MILLICENT HARGROVE, thirties, trim in a navy dress, hair pinned firm, sits very straight.
6 A She winds the crank with a gloved hand and adjusts the horn.
7 D MILLICENT (brisk, to the machine): Testing. Millicent Hargrove, Policy Division, March the ninth, nineteen twenty-seven. If this is heard, the ledger in the lower drawer is the true one.
8 A ¶ She stops the machine.
9 A Presses a lever.
10 A The cylinder spins back, crackling.
11 D MILLICENT [V.O.] (from the machine, thin and tinny): ...the ledger in the lower drawer is the true one.
12 A ¶ She nods, satisfied.
13 A Then her eyes lift to the frosted glass of the door.
14 A A shadow passes slowly.
15 A She holds perfectly still.
16 A ¶ The shadow stops.
17 A The doorknob rattles.
18 D MILLICENT [CONT'D] (whispering, to herself): Not yet. Not yet.
19 A ¶ She snatches the cylinder from the machine and wraps it in her scarf.
20 A The knob turns again.
21 A She slides the lower drawer open, drops the bundle inside, locks it, and pockets the key in her stocking.
22 A ¶ The door opens a crack.
23 A Lamplight catches the edge of a man's hat.
24 A Millicent lifts her chin and smiles the brightest smile of her life.
25 D MILLICENT [CONT'D] (calling out): Come in, do. I've only just finished.

### SCENE s00485 | INT. ROLLER DERBY ARENA - HOME LOCKER ROOM - NIGHT
Detected names (may be incomplete or contain aliases): ROSIE RIOT, DUARTE, JUNE, ABARA, ZEKE, WARDELL, BIX, HOLLANDER-SINGH
1 A ¶ Cinderblock walls painted purple.
2 A Metal lockers, dented.
3 A Skates in a heap, laces knotted.
4 A A boombox plays muffled brass from the rink upstairs.
5 A ¶ CAPTAIN ROSALIE "ROSIE RIOT" DUARTE (30s, shoulders like a door, fishnet sleeves) paces the room with her helmet under one arm.
6 A JUNE "JUNEBUG" ABARA (20s, jammer, a half-eaten banana in her fist) sits cross-legged on a bench.
7 A COACH EZEKIEL "ZEKE" WARDELL (60s, cardigan, bad knee) props himself against a locker and consults a clipboard.
8 A BEATRIX "BIX" HOLLANDER-SINGH (40s, the team's blocker, mouthguard hung on her neck) kneels to lace a skate, while Rosie stops, looks at Junebug, looks at Zeke, and starts pacing again, and June takes a bite of banana and offers Bix the other half, which Bix waves off without lifting her eyes from her laces.
9 D ZEKE: They're quick but they're not smart. First jam, don't engage.
10 D ROSIE: We don't engage?
11 D ZEKE: You hold the line. June skates.
12 D JUNE: I skate.
13 D ROSIE: Hold the line.
14 D BIX: Hold the line.
15 D ROSIE: Hold the line.
16 D BIX: Hold the line.
17 A ¶ They laugh.
18 A Zeke does not.
19 D ZEKE: Rosie. A word.
20 A ¶ She crosses to him.
21 A They step into the corridor.
22 A A pipe drips.
23 A He does not look at her for a while, then he takes his glasses off and rubs the bridge of his nose.
24 D ZEKE [CONT'D]: My knee's done after tonight.
25 D ROSIE: I know.
26 D ZEKE: You're getting the whistle next season.
27 A ¶ She stands very straight.
28 A Her gloved hand finds the doorframe.
29 D ROSIE: Win first.
30 D ZEKE: Win first.
31 A ¶ Down the hall, the brass band reaches its finale.
32 A Bix calls from inside.
33 D BIX [O.S.]: Captain! They're announcing us!
34 A ¶ Rosie squares her shoulders.
35 A Zeke tucks the clipboard under his arm.
36 A Together they go in.

### SCENE s01466 | INT. OFFICE TOWER ELEVATOR - NIGHT
Detected names (may be incomplete or contain aliases): JOCELYN MARBURY, NADINE FOSSE, TEODORO LAVIGNE, VICTOR SANTAMARIA
1 A ¶ Brushed steel.
2 A A cracked mirror.
3 A Floor numbers glow red.
4 A Four people ride in uneasy silence.
5 A ¶ JOCELYN MARBURY (40s, trench coat, briefcase) stands near the panel.
6 A NADINE FOSSE (30s, scrubs under a puffer jacket) leans on the back rail.
7 A TEODORO LAVIGNE (50s, suit rumpled, tie pulled loose) stares at his shoes.
8 A VICTOR SANTAMARIA (20s, delivery uniform, a pizza box on his palm) taps the wall in time to a song only he hears.
9 A ¶ The elevator stops between floors 22 and 23.
10 A Lights flicker.
11 D VICTOR: Uh.
12 D JOCELYN: Don't.
13 D VICTOR: I didn't press anything.
14 D NADINE: Nobody did.
15 A ¶ Teodoro looks up.
16 A Sweat beads at his temple.
17 A He loosens his tie further.
18 D TEODORO: Somebody call security.
19 D JOCELYN: No signal.
20 D NADINE: I have bars.
21 D JOCELYN: Then she's lying.
22 D NADINE: Excuse me?
23 D TEODORO: Easy.
24 A ¶ Nadine holds up her phone.
25 A Three bars.
26 A She dials.
27 A Jocelyn lunges and swats it out of her hand; it skitters across the floor.
28 A Victor steps on it.
29 A Nobody breathes.
30 D NADINE: What is wrong with you?
31 D JOCELYN: The fewer calls, the better.
32 D VICTOR: For who?
33 A ¶ Jocelyn doesn't answer.
34 A Teodoro slumps against the wall, a hand to his chest.
35 A The lights die.
36 A In the dark, the sound of a zipper.
37 A A click.
38 A ¶ The lights return.
39 A Jocelyn holds a small black pistol.
40 A It points at Teodoro.
41 D JOCELYN: Twenty-second floor, Mr. Lavigne. You were supposed to get off.
42 D TEODORO: I was --
43 A ¶ The elevator lurches, drops six inches, and catches.
44 A Victor yelps, the pizza box flipping into the air.
45 A Nadine grabs his sleeve.
46 A Jocelyn staggers, and Teodoro lunges, wrestling her wrist as the gun fires into the ceiling.
47 A Plaster rains down.
48 A The doors judder, grind, and slide open on a blank concrete wall, the shaft's inner face.
49 A ¶ Everyone freezes.
50 A A pigeon feather drifts through the gap.

### SCENE s00617 | INT. DEEP-CRUST MINING STATION "OROPESA" - CONTROL ROOM - SHIFT CHANGE
Detected names (may be incomplete or contain aliases): OKSANA PETRENKO, BRAM VOLKOV, TAVITA FONOTI, JOSIE AMARU
1 A ¶ Low steel ceiling.
2 A Banks of amber monitors, each showing a different tunnel.
3 A Condensation drips from the pipes.
4 A A heavy vibration runs through the floor, steady as a heartbeat.
5 A ¶ OKSANA PETRENKO, 40s, shift supervisor, stands at the central console, headset pushed down around her neck, tracking the cursor across a seismic readout that is steadily, quietly climbing.
6 A BRAM VOLKOV, 30s, her second, leans on the next desk, a mug of chicory in one hand.
7 A TAVITA FONOTI, 30s, a Samoan drill foreman, rests his weight against the door frame, still in his hard hat and orange vest, covered in grey rock dust.
8 A JOSIE AMARU, 20s, a trainee, sits at a minor station in the corner, eyes huge, hands flat on her knees.
9 D OKSANA: Bram. Look at tunnel four.
10 D BRAM: I'm looking.
11 D OKSANA: Is that normal?
12 D BRAM: No.
13 D TAVITA: It's moving.
14 D OKSANA: The tunnel?
15 D TAVITA: The wall.
16 A ¶ He crosses and leans over Bram's shoulder.
17 A On the monitor, a grey seam of rock ripples gently, as if breathing.
18 A Bram sets down his mug.
19 A Oksana adjusts the zoom.
20 A Josie rises half out of her chair.
21 D JOSIE: Ma'am, should I call it in?
22 D OKSANA: Not yet.
23 D JOSIE: It's been moving for six minutes.
24 D OKSANA: I know.
25 D BRAM: Oksana, if it's a fault line, we evacuate.
26 D OKSANA: It's not a fault line.
27 D TAVITA: Then what is it?
28 D OKSANA: I don't know.
29 A ¶ A deep, wet crack runs through the walls of the room.
30 A Everyone freezes.
31 A The condensation drips faster.
32 A On the monitors, all six tunnel cameras show the same thing now: the rock seams opening, widening, a pale light pulsing behind them.
33 D TAVITA: That's not in the survey.
34 D BRAM: Nothing's in the survey.
35 D OKSANA (into the headset): All crews, this is control. Drop tools. Report to Lock Two. Repeat, drop tools and report to Lock Two.
36 A ¶ No response but static.
37 A She tries again.
38 A Bram grabs a second headset and flips switches.
39 A Tavita grips the door frame with both hands as the vibration climbs in pitch.
40 A Josie stands, shaky, and takes the emergency alarm cover in one trembling hand.
41 D JOSIE: Ma'am?
42 D OKSANA: Pull it.
43 A ¶ Josie flips the cover and presses the button.
44 A The siren shrieks.
45 A Red light floods the room.
46 A The four of them stand motionless in the strobe, hearing the walls speak.
47 D BRAM: He's right. It's breathing.
48 D TAVITA: Who's he?
49 D BRAM: The rock.
50 A ¶ On the central monitor, the seam splits wide.
51 A The pale light blooms.
52 A For one frozen second, the feed shows a vast, bright cavern beyond the tunnel, ribbed and glittering, stretching into the dark below the world.
53 A Then the camera goes dead.
54 A ¶ One by one, the others follow.
55 A ¶ Silence.
56 A The siren stops, mid-wail.
57 A The red lights hold.
58 D OKSANA (very quietly): Everybody listen to me.
59 A ¶ They look at her.
60 A She takes a breath.
61 D OKSANA [CONT'D]: Nobody goes down. Nobody. We seal the lifts, we flood the shafts, we get every person on this station topside and we stay topside until I say.
62 D TAVITA: They'll fire you.
63 D OKSANA: Let them.
64 D BRAM: Oksana. What if they're already down there?
65 A ¶ She doesn't answer.
66 A Her hand finds the lift control.
67 A Her thumb rests on the red cover.
68 A Behind them, the floor shudders again, gently, like something far below turning over in its sleep.

### SCENE s01903 | INT. SLEEPER SHIP CRYO-BAY, DECK TWELVE - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): ARCHIVIST NADIA ABERNATHY-OSEI, FELIX OYAMA-BRENNAN, ONBOARD AI
1 A ¶ Rows of frosted pods stretch into blue gloom.
2 A Mist curls along the floor.
3 A A soft chime counts the hours.
4 A ¶ ARCHIVIST NADIA ABERNATHY-OSEI (30s, close-cropped hair, wool cardigan over a ship's jumpsuit) walks the aisle with a tablet.
5 A Her assistant, DR. FELIX OYAMA-BRENNAN (40s, thin, tired eyes), trails behind with a thermos.
6 D NADIA (to the room): Everyone's temperature is nominal.
7 D FELIX: Do they hear you?
8 D NADIA: No.
9 D FELIX: Then why report?
10 D NADIA: Habit.
11 A ¶ She stops at a pod.
12 A The frost inside has thinned to a clear oval, and behind it a sleeping face is visible.
13 D NADIA [CONT'D] (murmuring): Hello, Pod Four-Eleven.
14 D ONBOARD AI [V.O.]: Pod Four-Eleven is scheduled for revival in four hundred and twelve years.
15 D FELIX: Four hundred and twelve. Time flies.
16 A ¶ Felix sips from the thermos.
17 A Nadia wipes a smear of frost from the glass.
18 A Under her thumb, the sleeper's eyelid flickers.
19 D NADIA [CONT'D]: Felix.
20 D FELIX: Hm?
21 D NADIA: Four-Eleven is dreaming.
22 D FELIX: Everyone dreams.
23 D NADIA: Not in cryo.
24 D ONBOARD AI [V.O.]: Anomaly logged. Please remain calm.
25 A ¶ Felix drops the thermos.
26 A In the pod, the eyelid opens.

### SCENE s00525 | INT. CHURCH BELL TOWER - DAY
Detected names (may be incomplete or contain aliases): SERGEANT MAGNUS HADLEY, PRIVATE QUIGG, PRIVATE NASRIN KHALIL, CORPORAL TOMASZ WIERZBICKI, MOTHER AGATHE
1 A ¶ Snow drifts through the broken louvres and settles on the great bronze bell like flour on a baker's arm.
2 A The wooden stair groans below.
3 A The air smells of pigeon and old rope.
4 A ¶ SERGEANT MAGNUS HADLEY, 40s, a face scoured by wind, crouches at the north louvre with binoculars.
5 A PRIVATE QUIGG, 19, freckled, hugs a machine gun.
6 A PRIVATE NASRIN KHALIL, 20s, a field radio strapped to her back, picks at a frozen knot.
7 A CORPORAL TOMASZ WIERZBICKI, 30s, sits against the wall, bandaging his own hand.
8 D QUIGG: They're moving in the orchard.
9 D HADLEY: Count.
10 D NASRIN: Nine? Ten --
11 D QUIGG: Twelve. I said twelve.
12 D TOMASZ (muttering): Twelve, nine, who cares, we're up a steeple.
13 D HADLEY: Quiet. Both of you.
14 A ¶ A footstep on the stair.
15 A Slow.
16 A Four rifles swing.
17 A ¶ MOTHER AGATHE, 70s, a black habit and a snow-crusted shawl, climbs into the loft carrying a kettle.
18 A She is breathing hard and not remotely afraid.
19 D MOTHER AGATHE: You have been in my bell tower since Tuesday. I thought you might want tea.
20 D NASRIN: Mother, you can't be up here --
21 D QUIGG: Is it safe? Did you check it?
22 D TOMASZ: She's a nun, she's not going to poison us.
23 D MOTHER AGATHE: Not before the second cup.
24 A ¶ Hadley lowers the binoculars.
25 A For the first time all day, he laughs.

### SCENE s02340 | INT. SPEAKEASY BEHIND ABERNETHY & SONS FUNERAL PARLOR - NIGHT (1926)
Detected names (may be incomplete or contain aliases): MADAME CELESTINE DUBOIS, SHORTY, WASHINGTON, HORATIO PELL, EUGENIA PELL, BIG DOMINIC, SAL, INSPECTOR CORNELIUS BLACKWOOD
1 A ¶ A low cellar dressed as a mourning room.
2 A Black crepe on the walls.
3 A Coffins serve as tables, lids propped for drinks.
4 A A gramophone scratches out a muffled foxtrot.
5 A Cigar smoke curls under a tin ceiling.
6 A ¶ MADAME CELESTINE DUBOIS, 50s, proprietress, in black beads and a veiled hat, sits behind the bar polishing a glass.
7 A Eyes like flint.
8 A ¶ OTIS "SHORTY" WASHINGTON, 30s, bartender, small, quick, in a white apron stained gray.
9 A He pours without looking.
10 A ¶ At a coffin table, HORATIO PELL, 40s, banker, in a bowler, nurses a whiskey.
11 A Beside him, his young wife, EUGENIA PELL, 20s, in a flapper dress, stares at the floor.
12 A ¶ In the corner, two men in dark coats: BIG DOMINIC, 30s, thick neck, and his partner, SAL, 20s, who bites his fingernails.
13 D MADAME DUBOIS (to the whole room): Another round for the mourners. On the house.
14 A ¶ A weak cheer.
15 A Horatio raises his glass.
16 A Eugenia does not.
17 D HORATIO (low, to Eugenia): Smile.
18 D EUGENIA: I am.
19 D HORATIO: Don't look at the door.
20 D EUGENIA: I wasn't.
21 A ¶ Shorty slides two drinks across.
22 A Dominic watches Horatio.
23 A Sal rubs his thumb against his knee.
24 D MADAME DUBOIS (to Shorty, quietly): Lock the cellar.
25 D SHORTY: Yes, ma'am.
26 A ¶ He moves to the stairs.
27 A A heavy tread above.
28 A Someone knocks, twice, slow, then once, fast.
29 A ¶ Everyone stops.
30 A The gramophone needle skips.
31 A ¶ A new figure descends the stairs.
32 A INSPECTOR CORNELIUS BLACKWOOD, 50s, rain on his shoulders, badge in hand, steps into the lamplight.
33 A He surveys the room, the coffins, the crepe.
34 D INSPECTOR BLACKWOOD: Evening, all. I'm told someone has died.
35 D MADAME DUBOIS (very evenly): Several, Inspector. Mostly of thirst.
36 A ¶ Dominic reaches inside his coat.
37 A Horatio's hand finds Eugenia's wrist.
38 A Sal stands, scraping his chair.
39 D INSPECTOR BLACKWOOD (to himself): Always the same room.
40 A ¶ He sets his badge on the bar.
41 A Takes off his hat.
42 A Places it beside it.
43 A Nobody breathes.
44 D INSPECTOR BLACKWOOD [CONT'D] (to the room): Gentlemen. Ladies. I'm here to pay my respects.
45 A ¶ Silence.
46 A Then Madame Dubois, slowly, pours him a glass.

### SCENE s00218 | INT. SAFEHOUSE - BASEMENT - NIGHT
Detected names (may be incomplete or contain aliases): AGENT RENATA OYEKAN-VOSS, AGENT BASTIAN HALVORSEN, TEDDIE, KAPLAN
1 A ¶ Concrete walls.
2 A Bare bulb.
3 A A card table with a laptop and a stack of cash.
4 A ¶ AGENT RENATA OYEKAN-VOSS, 40s, slumps in a chair.
5 A AGENT BASTIAN HALVORSEN, 30s, paces.
6 A The informant, THEODORA "TEDDIE" KAPLAN, 50s, rocks nervously on a stool.
7 D RENATA: You said they'd be here by midnight.
8 D BASTIAN: They will be.
9 D TEDDIE: They won't. They're never late, and they're never early. They're just there.
10 D RENATA: Teddie.
11 D TEDDIE: It's a fact.
12 D BASTIAN: You've been saying that for two hours.
13 D TEDDIE: It's been true for two hours.
14 A ¶ Renata rubs her eyes.
15 A Bastian stops pacing, then resumes.
16 A Teddie hums something tuneless.
17 D RENATA: Stop humming.
18 D TEDDIE: I'm not humming.
19 D BASTIAN: You are.
20 D TEDDIE: It's the pipes.
21 A ¶ The pipes knock.
22 A All three look up.
23 A The knocking repeats, in a pattern.
24 D RENATA: That's not pipes.
25 D BASTIAN: That's Morse.
26 D TEDDIE: It's the wind.
27 D RENATA: In a basement?
28 D TEDDIE: It's a drafty basement.
29 A ¶ Bastian crosses to the wall.
30 A Presses an ear against it.
31 A Renata draws her weapon.
32 A The knocking stops.
33 D BASTIAN (whispering): Someone's behind this wall.
34 D RENATA: That's the neighbor's.
35 D BASTIAN: We don't have a neighbor.
36 A ¶ Teddie stands.
37 A Her stool tips over.
38 A She backs toward the stairs.
39 D TEDDIE: I told you. I told both of you.
40 D RENATA: Teddie, sit down.
41 D TEDDIE: I'm leaving.
42 D BASTIAN: You're not.
43 D TEDDIE: Watch me.
44 A ¶ The wall cracks.
45 A Plaster dust sprinkles the table.
46 A A fist punches through.
47 A Renata fires.
48 A Bastian ducks.
49 A Teddie screams and bolts up the stairs, and the bulb swings wildly, throwing shadows across the concrete.
