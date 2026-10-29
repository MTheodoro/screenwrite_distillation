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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_opusT/group_00015.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00955 | INT. ROADSIDE DINER, ROUTE 9 - NIGHT
Detected names (may be incomplete or contain aliases): LORETTA PENDERGAST-NWACHUKWU, ARTEMUS WILKES-DUBOIS, CASPIAN LEFEVRE-OYELARAN, JO, MAKINDE-HARTWELL
1 A ¶ A chrome-edged diner with a flickering OPEN sign.
2 A Rain on the windows.
3 A Red vinyl booths.
4 A A jukebox that has not played since 1994.
5 A ¶ LORETTA PENDERGAST-NWACHUKWU (50s, apron, a pencil tucked into her gray bun) wipes the counter.
6 A At a booth by the window sits ARTEMUS WILKES-DUBOIS (60s, trucker's cap, a thermos) with a crossword.
7 A In the corner booth, a young man hunches over a laptop: CASPIAN LEFEVRE-OYELARAN (20s, hoodie, headphones around his neck).
8 D LORETTA (to the room): Last call for pie, folks.
9 D ARTEMUS: Seven letters. "Unwelcome guest."
10 D LORETTA: Intruder.
11 D ARTEMUS: Eight.
12 D LORETTA: Trespasser.
13 D ARTEMUS: That fits. Thanks, Loretta.
14 A ¶ She tops off his coffee.
15 A Caspian, in the corner, types faster.
16 A His knee bounces.
17 D LORETTA (low, to Artemus): Boy's been here since noon.
18 D ARTEMUS (low): Not my business.
19 A ¶ The bell above the door jingles.
20 A A woman enters, soaked, a duffel over one shoulder.
21 A JOSEPHINE "JO" MAKINDE-HARTWELL (30s, buzz cut, a tattoo of a swallow on her neck) stops just inside the door, scanning every face.
22 D LORETTA: Sit anywhere, hon.
23 A ¶ Jo does not sit.
24 A She looks at Caspian.
25 D JO: Cass.
26 A ¶ Caspian freezes.
27 A He doesn't turn around.
28 D CASPIAN (to the screen): Jo.
29 D JO: You didn't call.
30 D CASPIAN (to himself): I was going to.
31 D ARTEMUS (to Loretta, whispering): That's not a customer.
32 D LORETTA (whispering back): No kidding.
33 A ¶ Jo crosses the room and stands at Caspian's booth, dripping on the linoleum.
34 D JO: I drove four hundred miles.
35 D CASPIAN: I know.
36 D JO: You left a note on the fridge.
37 D CASPIAN: I know.
38 D JO: It said "back soon."
39 D CASPIAN: It's been eight months.
40 D JO: Yeah, Cass. It has.
41 A ¶ Loretta clears her throat, loud enough that everyone looks.
42 D LORETTA: Pie, anyone? On the house?
43 D JO (turning, to the room): Sorry for the noise.
44 D LORETTA: Honey, this is the most interesting night I've had all year.
45 A ¶ Artemus chuckles into his thermos.
46 A Jo slides into the booth across from Caspian.
47 A She takes a fork from the napkin dispenser and eats a bite of his untouched pie.
48 D JO: Good pie.
49 D CASPIAN: You hate pie.
50 D JO: I hate being lied to.
51 A ¶ Caspian shuts the laptop.
52 D CASPIAN: Then I'll tell you the truth.
53 D JO: It better be long.
54 D CASPIAN: It's very long.
55 A ¶ Loretta fills two more cups.
56 A Artemus gives up on the crossword.
57 A The rain keeps coming, and the OPEN sign keeps blinking, and in the corner booth the two of them lean toward each other across the table.
58 D JO [CONT'D]: Start from the beginning.

### SCENE s00124 | INT. LAMPLIGHTERS' DEPOT - DAWN - 1887
Detected names (may be incomplete or contain aliases): HOBART PRYCE, TESS MALLORY
1 A ¶ Brass poles hang from iron hooks.
2 A Ladders.
3 A Oil cans.
4 A A coke stove ticking.
5 A ¶ HOBART PRYCE, 50s, ash-grey beard, sits on an overturned crate mending a wick-trimmer.
6 A Across from him, young TESS MALLORY, 19, boots too large, sorts spent matches into a tin.
7 A ¶ Neither speaks.
8 A ¶ A church bell somewhere.
9 A Six strokes.
10 D PRYCE: Poles.
11 A ¶ Tess lifts two from the rack.
12 A Hands one over.
13 A He tests the weight.
14 A Nods.
15 D PRYCE [CONT'D]: Gaslight's out on Fenwick Row.
16 D TESS: Again?
17 D PRYCE: Again.
18 A ¶ They pull on coats.
19 A Tess drops the tin.
20 A Matches scatter across the boards.
21 A They both kneel and snatch at them, knocking heads.
22 D TESS: Sorry.
23 D PRYCE: Mind the sulphur.
24 A ¶ The door bangs open.
25 A Wind.
26 A Running feet outside.
27 A Both freeze, poles half raised.
28 A ¶ Silence.
29 D TESS: Dogs?
30 D PRYCE: Constables.
31 A ¶ They glance at the window.
32 A Blue coats pass.
33 A The street goes quiet.
34 A Both exhale.
35 D PRYCE [CONT'D]: They're after the Quigley lot.
36 D TESS: Not us.
37 D PRYCE: Never us. We carry fire. Nobody arrests the man with fire.
38 A ¶ He grins.
39 A She almost does.
40 A ¶ They step into the street.
41 A The sky is the color of dishwater.
42 A Tess lifts her pole to the first lamp.
43 A Pryce lifts his to the second.
44 A Two small flames bloom in the grey.
45 D TESS: Mr. Pryce?
46 D PRYCE: Aye.
47 D TESS: What happens when they light themselves?
48 D PRYCE: Then we find something else to carry.
49 A ¶ They move on up the row, side by side, one lamp, then the next.

### SCENE s01860 | INT. BALLROOM OF THE GRAND CAPRICE HOTEL - NIGHT
Detected names (may be incomplete or contain aliases): AUGUSTUS PEMBERTON-HYDE, ODETTE FUSSELL, BARNEY, KRUPP, MISS FLORENCE LOVELACE, TALL MAN
1 A ¶ A faded ballroom in a faded resort.
2 A A crystal chandelier swings gently, missing every third bulb.
3 A Red velvet curtains droop.
4 A A banner reads "SENIOR SINGLES MIXER" in glitter.
5 A Thirty folding chairs stand in rows, nearly empty.
6 A ¶ A tall, stately man in a white dinner jacket stands at the doorway, shaking out a wet umbrella.
7 A He is MR. AUGUSTUS PEMBERTON-HYDE, 70s.
8 A He sweeps one white glove across his hair, adjusts his tie, and surveys the room as if reviewing troops.
9 A ¶ At the punch bowl, a small woman in a feathered hat and an enormous corsage ladles with great seriousness.
10 A She is MRS. ODETTE FUSSELL, 60s.
11 A She hums.
12 A ¶ Across the dance floor, a stout man in a paisley vest sits alone, tapping his foot to music only he hears.
13 A He is MR. BARTHOLOMEW "BARNEY" KRUPP, 60s.
14 A ¶ And at the piano, in a sequined gown that hasn't fit since 1985, sits MISS FLORENCE LOVELACE, 70s, who thumps a single chord and waits.
15 A ¶ The tall man clears his throat.
16 D TALL MAN: Good evening.
17 A ¶ He bows.
18 A Odette curtsies with the ladle.
19 A Barney waves.
20 A Florence thumps the chord again.
21 D ODETTE: Mr. Pemberton-Hyde! Punch?
22 D PEMBERTON-HYDE: Madam, I would be honored.
23 A ¶ He crosses the floor with his stiff, ceremonious stride.
24 A She hands him a cup.
25 A He sips.
26 A His face goes through three expressions.
27 D PEMBERTON-HYDE [CONT'D]: Is this... gravy?
28 D ODETTE: Oh, dear.
29 D BARNEY (calling): I told her it was gravy!
30 D FLORENCE (from the piano): Is anyone going to dance, or must I play to the walls?
31 A ¶ Odette takes the cup back.
32 A She and Pemberton-Hyde look at each other, and then, without a word, she takes his arm and he leads her out to the center of the floor.
33 A Florence strikes up a waltz, off-key.
34 A Barney leaps to his feet and applauds.
35 A ¶ The chandelier swings.
36 A A bulb pops.
37 A Nobody minds.

### SCENE s00767 | INT. SUBMARINE USS HALCYON - CONTROL ROOM - NIGHT
Detected names (may be incomplete or contain aliases): CAPTAIN DOMINIC ARCHER-LYLE, NOLAN, AUGUSTO
1 A ¶ Red battle lamps.
2 A Pipes sweating.
3 A Dials and valves everywhere.
4 A The hull creaks like an old ship's timbers.
5 A ¶ CAPTAIN DOMINIC ARCHER-LYLE, fifties, hands clasped behind his back, stands before the periscope well.
6 A LIEUTENANT PATRICIA "PAT" NOLAN, thirties, executive officer, checks a depth gauge.
7 A From a speaker in the bulkhead, the voice of the sonar operator, unseen.
8 D ARCHER-LYLE (to the room): Gentlemen, we hold at two hundred feet. Silent running.
9 D NOLAN: Aye, sir.
10 D ARCHER-LYLE: Mr. Nolan, report.
11 D NOLAN: All systems nominal, Captain. Battery at seventy percent.
12 D ARCHER-LYLE (muttering): Seventy. Enough for a day.
13 D AUGUSTO [V.O.] (over intercom): Control, sonar. Surface contact, bearing one-two-zero. Single screw. Slow.
14 D ARCHER-LYLE: Merchant?
15 D AUGUSTO [V.O.]: Can't say, sir. No transponder.
16 D ARCHER-LYLE: Pat, plot it.
17 D NOLAN: Plotting.
18 A ¶ She bends over a chart table.
19 A A ruler, a pencil, a quiet scratch.
20 A The sub rocks gently.
21 D ARCHER-LYLE (low): Quiet night.
22 D NOLAN: Too quiet, sir?
23 D ARCHER-LYLE: Never say that on my boat.
24 A ¶ She smiles.
25 A A drip falls from a pipe onto the chart.
26 A She wipes it.
27 D AUGUSTO [V.O.] (over intercom): Control, contact is stationary. Engines idle.
28 D ARCHER-LYLE: Odd.
29 D NOLAN: Waiting for us?
30 D ARCHER-LYLE: Or for someone else.
31 A ¶ Silence.
32 A The lamps pulse.
33 A Nolan straightens.
34 D NOLAN: Captain, request permission to raise the scope.
35 D ARCHER-LYLE: Granted. Slowly.
36 A ¶ She turns the wheel.
37 A The periscope hums up.
38 A She folds the handles and puts her eye to it.
39 A Her face tightens.
40 D ARCHER-LYLE [CONT'D]: Well?
41 D NOLAN: It's a hospital ship, sir.
42 D ARCHER-LYLE: A hospital ship.
43 D NOLAN: White hull. Red crosses. All lit up.
44 D ARCHER-LYLE (to himself): Of course.
45 D AUGUSTO [V.O.] (over intercom): Control, sonar. New contact. Fast. Bearing zero-nine-five. Closing.
46 D NOLAN: Captain!
47 D ARCHER-LYLE: Range?
48 D AUGUSTO [V.O.]: Two thousand yards.
49 D ARCHER-LYLE: Is it hostile?
50 D AUGUSTO [V.O.]: It's ours, sir. Destroyer.
51 D NOLAN: Then why is it running dark?
52 D ARCHER-LYLE (very quietly): Because it's escorting.
53 D NOLAN: Escorting what?
54 D ARCHER-LYLE: The hospital ship, Pat. Which means--
55 D AUGUSTO [V.O.] (over intercom, sharp): Torpedo in the water! Bearing one-eight-zero! Not ours!
56 D ARCHER-LYLE (to the room): Dive! Dive! Rig for impact!
57 A ¶ Klaxons.
58 A Red lamps flash.
59 A The deck tilts.
60 A Nolan grabs a rail.
61 D NOLAN: Captain, they're targeting the ship!
62 D ARCHER-LYLE: Then we are the only thing in the way.
63 D NOLAN: Sir?
64 D ARCHER-LYLE: Come to heading one-eight-zero. Full ahead.
65 D NOLAN: Sir, that's suicide!
66 D ARCHER-LYLE: That is the job.
67 A ¶ She stares at him.
68 A He stares back.
69 A She breathes in once.
70 D NOLAN: Aye aye, sir.
71 A ¶ She spins the wheel.
72 A The engines roar.
73 A The sub heels hard.
74 A In the periscope's last frame, a white hull glides unknowing through the dark, and between it and the death streaking toward it, a long grey shape cuts across.

### SCENE s01540 | EXT. ROPE FERRY ON THE SABINE RIVER - NOON
Detected names (may be incomplete or contain aliases): AMOS, TREVELYAN-BELL, JED, CORVALLIS-ODUYA
1 A ¶ A flat-bottomed ferry on a hawser strung across a brown, slow river.
2 A Cottonwoods on either bank.
3 A The sun beats on warped planks.
4 A A rusted bell hangs from a post.
5 A ¶ AMOS "OLD HICKORY" TREVELYAN-BELL, 60s, ferryman, hauls the rope hand over hand, forearms like knotted cord.
6 A His hat is pulled low.
7 A ¶ On the far end of the deck, leaning against a barrel with a rifle across his knees, sits JEDEDIAH "JED" CORVALLIS-ODUYA, 30s, in a duster gone grey with trail dust.
8 A He has not spoken since they pushed off.
9 D AMOS: Fare was two bits, Jed.
10 D JED: I paid it.
11 D AMOS: You paid it in Mexican coin.
12 D JED: Silver's silver.
13 D AMOS: Not if the marshal says otherwise.
14 A ¶ Jed shifts the rifle.
15 A The barrel catches the sun.
16 A Amos does not look at it.
17 A He hauls.
18 A The ferry creeps forward, water slapping the hull.
19 D AMOS [CONT'D]: You're a long way from Fort Smith.
20 D JED: So I'm told.
21 D AMOS: They say a man shot the sheriff there last Thursday.
22 D JED: They say a lot.
23 D AMOS: They say he had a scar on his lip.
24 A ¶ Jed touches his lip.
25 A A thin white line, old.
26 A He lowers the hand slowly.
27 D JED: Lots of men have scars, Hickory.
28 D AMOS: Lots do.
29 A ¶ Amos spits over the rail.
30 A Wipes his palm on his trousers.
31 A Reaches for the rope again, and as he does so, his other hand drifts toward a short-handled axe hung from a peg on the post, and rests there, easy, like a man steadying himself on a rail.
32 A ¶ Jed watches the hand.
33 A Jed's thumb finds the hammer of the rifle.
34 A Neither of them moves.
35 A A heron lifts from the reeds, unfolds, and passes across the sun.
36 D JED [CONT'D]: That axe for the rope?
37 D AMOS: For the rope.
38 D JED: Rope looks fine.
39 D AMOS: It's a precaution.
40 D JED: Against what?
41 D AMOS: Against men who ask a lot of questions about axes.
42 A ¶ Jed almost smiles.
43 A Thumb drops from the hammer.
44 A He rests the rifle on his knees again, barrel to the sky.
45 D JED: I never shot a sheriff, Hickory.
46 D AMOS: I never said you did.
47 D JED: You said a man with a scar.
48 D AMOS: I said a lot of things.
49 D JED: I shot his deputy.
50 A ¶ The bell on the post tolls once, nudged by a gust.
51 A Amos' hand stops on the axe.
52 D AMOS: That a confession?
53 D JED: It's a weather report.
54 D AMOS: Deputy a good man?
55 D JED: He had a wife in Muskogee. He told me so, twice, before it started.
56 D AMOS: That doesn't answer me.
57 D JED: No. It doesn't.
58 A ¶ The ferry nears midstream.
59 A The current tugs the hull.
60 A The rope hums.
61 A Amos lets it run slack, and the deck tilts slowly with the river.
62 D AMOS: You know I'd be in my rights to put you in the water.
63 D JED: You would.
64 D AMOS: You know I'd be in my rights to take that rifle.
65 D JED: You'd be in your rights to try.
66 A ¶ Amos unhooks the axe.
67 A Holds it by the head, handle down, as if offering it.
68 A Jed looks at the handle.
69 A At Amos' eyes.
70 A He does not take it.
71 D AMOS: Four hundred dollars, Jed. That's the paper on you.
72 D JED: I know the figure.
73 D AMOS: My boy's in the territorial prison. Four hundred dollars would buy him a lawyer.
74 D JED: Then you'd best cut the rope and let the river carry me back across.
75 D AMOS: And if I don't?
76 D JED: Then we both get to the far bank, and you forget my coin was Mexican.
77 A ¶ Silence.
78 A The cottonwoods hiss.
79 A The ferry drifts.
80 A Amos stares at the water, at the axe, at the bank still thirty yards off.
81 A ¶ He hangs the axe back on its peg.
82 D AMOS (quiet): Silver's silver.
83 A ¶ He bends to the rope and hauls, and the ferry begins to move again, slow and steady, toward the far shore.
84 D JED: Thank you, Hickory.
85 D AMOS: Don't thank me. Pull the rope.
86 A ¶ Jed lays the rifle across the barrel, stands, and takes hold of the line behind Amos.
87 A They haul together.
88 A The bell clangs with each pull, the sun hangs straight overhead, and the bank slides slowly nearer.
89 D JED: Where's your boy held?
90 D AMOS: Huntsville.
91 D JED: I'll send a letter. To a man I know.
92 D AMOS: Don't promise what you can't do.
93 D JED: I never do.
94 A ¶ The ferry bumps the landing.
95 A Mud sucks at the hull.
96 A Jed steps over the rail, onto the bank.
97 A He looks back once.
98 A Amos has already turned the ferry's nose toward the other side.
99 D JED [CONT'D]: So long, Hickory.
100 D AMOS: Go on, Jed. Before I change my mind.
101 A ¶ Jed walks up the bank into the cottonwoods.
102 A Amos hauls the rope home, alone.

### SCENE s01758 | INT. FOG SIGNAL STATION - NIGHT
Detected names (may be incomplete or contain aliases): DAGNY HOLM, PEREGRINE LOOMIS, SOL
1 A ¶ A stone tower on a bald rock in a gray sea.
2 A A great iron horn mounted in the wall.
3 A The room is round, cramped, lit by a hanging oil lamp that sways though the air is still.
4 A The walls are slick with condensation.
5 A The floor has been scrubbed so many times the boards are white.
6 A ¶ DAGNY HOLM (40s, keeper, oilskin coat, a wool cap pulled to her eyebrows, a thick log-book in her lap) sits at a table with a mug gone cold.
7 A PEREGRINE LOOMIS (20s, apprentice, glasses fogged, jacket too big for him) stands at the narrow window with a telescope.
8 A SOL (60s, deaf, white beard, one milky eye) rocks in a chair by the iron stove, hands knotted around a pipe.
9 A ¶ The horn sounds.
10 A A single, mournful bellow.
11 A The lamp shivers.
12 A Everyone waits for the echo.
13 A ¶ None comes.
14 D PEREGRINE: Something's out there.
15 D DAGNY: It's fog.
16 D PEREGRINE: It's moving against the fog.
17 D DAGNY: Fog moves.
18 D PEREGRINE: Not like this. Come see.
19 A ¶ She doesn't.
20 A She turns a page in the log.
21 A Sol rocks.
22 A The chair creaks.
23 A The pipe cools.
24 D PEREGRINE [CONT'D]: Dagny. It has lights.
25 D DAGNY: A ship, then.
26 D PEREGRINE: Seven lights. In a row. Low on the water.
27 D DAGNY: Count again.
28 D PEREGRINE: Eight.
29 A ¶ Dagny stands.
30 A She goes to the window, takes the telescope from his hands, puts it to her eye.
31 A A long silence.
32 A The lamp swings once.
33 D DAGNY: Ten.
34 D PEREGRINE: They're getting closer.
35 A ¶ Sol stops rocking.
36 A He stands, and the chair keeps moving without him.
37 A He crosses to the horn mechanism and puts a hand flat on the iron, feels the tremor.
38 D SOL (gravelly): They're answering it.
39 D DAGNY: Sol.
40 D SOL: It sounds back from the water. I felt it in my bones.
41 A ¶ Peregrine takes the telescope back and sweeps the sea.
42 A Dagny seizes the horn lever.
43 A Sol grips her wrist.
44 A They stare at each other across a foot of cold air, and between them the lamp swings and the shadows swing with it.
45 D PEREGRINE (whisper): Don't sound it.
46 D DAGNY: If I don't, the ships hit the rock.
47 D SOL: If you do, those ones come in.
48 D DAGNY: Which ones?
49 A ¶ The sea gives a long, low, rolling moan.
50 A The iron horn, silent, answers it, humming in the wall like a plucked string.
51 A From the dark down the stairwell comes a wet sound, one step, then another, climbing.
52 A ¶ Peregrine backs away from the window.
53 A Dagny releases the lever.
54 A Sol raises both hands and pulls the cap from his head, as if it were a church.
55 A ¶ The footsteps stop at the door.
56 A ¶ A knock, polite.
57 A ¶ Dagny, Sol, Peregrine look at each other, the same thought in all three faces.
58 A Then, from the other side of the wood, a voice, thin, patient, exactly like Peregrine's.
59 D PEREGRINE [V.O.] (through the door): Dagny? It's me. Let me in.
60 A ¶ Peregrine, at the window, has not moved his lips.

### SCENE s02101 | INT. FUNICULAR STATION - HOLDING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR MALCOLM TREVENNA, DESIREE LACROIX-ODUYA, SERGEANT BRANWELL KUTTNER, VIOLETA SANDOVAL-GRAY
1 A ¶ A tiled waiting room at the top of a cable railway, converted overnight into a police holding space.
2 A A bench, a radiator, a vending machine with an out-of-order sign.
3 A Cable machinery groans through the wall.
4 A ¶ INSPECTOR MALCOLM TREVENNA, 50s, sits on the bench with a thermos.
5 A Across from him, a handcuffed prisoner, DESIREE LACROIX-ODUYA, 30s, sits upright and calm, her coat folded in her lap.
6 A A uniformed sergeant, SERGEANT BRANWELL KUTTNER, 40s, leans on the doorframe, arms folded.
7 D TREVENNA: You can drop the act now.
8 D DESIREE: Which act is that?
9 D TREVENNA: The one where you don't know why you're here.
10 D DESIREE: I know exactly why I'm here.
11 D TREVENNA: Then say it.
12 D DESIREE: You saw a woman leave a building with a bag.
13 D TREVENNA: A bag containing sixty thousand pounds.
14 D DESIREE: A bag containing sixty thousand pounds of someone else's money. I carried it. I did not take it.
15 D TREVENNA: Distinction without difference.
16 D DESIREE: Then arrest the bag.
17 D KUTTNER: Inspector, she's baiting you.
18 D TREVENNA: I'm aware, Sergeant.
19 D DESIREE: Is the funicular running?
20 D TREVENNA: It's midnight.
21 D DESIREE: So there's no way down.
22 D TREVENNA: There's the road.
23 D DESIREE: Which you closed.
24 D TREVENNA: Which we closed.
25 D DESIREE: You don't have a car.
26 D TREVENNA: We have a Sergeant.
27 D DESIREE: Who has a car?
28 D KUTTNER: Who has a bicycle.
29 D DESIREE: I see.
30 A ¶ A door opens with a gust of cold air.
31 A VIOLETA SANDOVAL-GRAY, 60s, a silver-haired woman in a camel coat, enters carrying a briefcase.
32 A She sets it on the bench and unclasps it with a flourish.
33 D VIOLETA: Good evening, gentlemen. I'm Ms. Lacroix-Oduya's solicitor. Release her.
34 D TREVENNA: On what grounds?
35 D VIOLETA: On the grounds that I have the receipt.
36 D TREVENNA: What receipt?
37 D VIOLETA: For the sixty thousand pounds. From a registered charity. Signed this afternoon.
38 D TREVENNA: That's a forgery.
39 D VIOLETA: It is notarized.
40 D TREVENNA: By whom?
41 D VIOLETA: By me.
42 D DESIREE (softly): Oh, Violeta.
43 D VIOLETA: Hush, dear.
44 D TREVENNA: This is absurd.
45 D VIOLETA: Inspector, would you rather be absurd or wrong?
46 D KUTTNER (low): Sir, she has a point.
47 D TREVENNA: Sergeant, which side are you on?
48 D KUTTNER: The side with the bicycle.
49 A ¶ A long silence.
50 A Trevenna looks at the receipt, at the briefcase, at the radiator.
51 A He sighs.
52 A He unlocks the cuffs.
53 D TREVENNA: Take her. Go.
54 D DESIREE: Thank you, Inspector.
55 D TREVENNA: Don't thank me. Take the road.
56 D VIOLETA: We will.
57 D DESIREE: Goodnight, Sergeant.
58 D KUTTNER: Mind the ice.

### SCENE s00889 | INT. BOOKBINDER'S WORKSHOP - LISBON - EVENING
Detected names (may be incomplete or contain aliases): SOLEDAD IBARRA, ARCHIE MENDELSOHN, AUNT VELMA
1 A ¶ A narrow stone room under a vaulted ceiling.
2 A Presses, bone folders, spools of waxed linen.
3 A Every surface is stacked with half-finished volumes, their spines bare as ribs.
4 A A single window frames the red roofs of the Alfama and a tram rattling past.
5 A ¶ SOLEDAD IBARRA, 30s, in a leather apron, sits at the sewing frame with a needle in her hand, a loose braid down her back.
6 A Ink stains her fingertips.
7 A She is stitching a signature with practiced ease.
8 A ¶ ARCHIE MENDELSOHN, 30s, a tall American in a rain-spotted jacket, stands in the doorway holding a battered book against his chest like a rescued animal.
9 D SOLEDAD: You're late.
10 D ARCHIE: I got lost.
11 D SOLEDAD: You always get lost.
12 D ARCHIE: It's a very confusing city.
13 D SOLEDAD: It's a city with seven hills and one river. Even the pigeons find their way.
14 D ARCHIE: The pigeons live here.
15 D SOLEDAD: So do I. And I'm never late.
16 D ARCHIE: You're never anywhere else.
17 A ¶ She smiles despite herself, not looking up.
18 A He crosses to the workbench and sets the book down in front of her.
19 A Gently, as if it might bruise.
20 D ARCHIE [CONT'D]: That's the one.
21 D SOLEDAD (inspecting): Oh, Archie. What did you do to it?
22 D ARCHIE: I dropped it in a canal.
23 D SOLEDAD: In Venice.
24 D ARCHIE: In Venice.
25 D SOLEDAD: On purpose?
26 D ARCHIE: It jumped. I'm telling you, it jumped.
27 D SOLEDAD: Books don't jump.
28 D ARCHIE: This one has a lot of feelings.
29 A ¶ She opens the cover.
30 A The pages are warped and rippled, the ink bled into soft blue clouds.
31 A She runs a thumb along the gutter and lets out a slow breath.
32 D SOLEDAD: Whose is it?
33 D ARCHIE: My grandfather's. His diary.
34 D SOLEDAD: Then why are you giving it to me?
35 D ARCHIE: Because you're the best in Europe.
36 D SOLEDAD: Flattery.
37 D ARCHIE: Fact.
38 D SOLEDAD: It will take weeks.
39 D ARCHIE: I have weeks.
40 D SOLEDAD: You have a plane ticket.
41 D ARCHIE: I could lose the ticket.
42 D SOLEDAD: You could.
43 D ARCHIE: I could lose the whole plane.
44 D SOLEDAD (smiling): Archie.
45 D ARCHIE: Soledad.
46 A ¶ The workshop door bangs open.
47 A AUNT VELMA, 70s, a small woman in a patterned housecoat and bright orange slippers, sweeps in with a covered dish and a gust of cold air.
48 D AUNT VELMA: Soledad! You haven't eaten. I brought cod.
49 D SOLEDAD: Tia, I'm working.
50 D AUNT VELMA (to Archie): And who is this?
51 D ARCHIE: Archie Mendelsohn, ma'am. I'm a client.
52 D AUNT VELMA: A client who brings flowers?
53 A ¶ He looks down.
54 A He is, in fact, holding a very small bunch of wilted daisies in his left hand, crushed against the book.
55 A He lifts them with a helpless shrug.
56 D ARCHIE: They were fresh this morning.
57 D AUNT VELMA (to Soledad, delighted): He is a client who brings flowers.
58 D SOLEDAD: Tia.
59 D AUNT VELMA: I will leave the cod.
60 A ¶ She sets the dish on the nearest stack of paper, pats Archie's cheek once, and sweeps out.
61 A The door slams.
62 A The tram rattles by.
63 A Soledad and Archie look at each other across the ruined book.
64 D ARCHIE: She likes me.
65 D SOLEDAD: She likes everybody. She feeds the pigeons.
66 D ARCHIE: Do you?
67 D SOLEDAD: Do I what?
68 D ARCHIE: Like me.
69 A ¶ She picks up the daisies.
70 A Smooths one battered petal between thumb and finger.
71 D SOLEDAD: Come back on Tuesday. I will tell you what the book needs.
72 D ARCHIE: And the other thing?
73 D SOLEDAD (not looking up): The other thing takes longer.

### SCENE s00555 | INT. DEEP-SEA RESEARCH STATION "ABYSSAL ONE" - OBSERVATION DOME - NIGHT
Detected names (may be incomplete or contain aliases): ARUNDHATI SENGUPTA, LIEUTENANT KAVEH MORTAZAVI
1 A ¶ A glass bubble on the ocean floor, three thousand meters down.
2 A Beyond the curved glass: black water, drifting snow, a lamp throwing a lonely cone.
3 A Pipes sweat.
4 A A kettle ticks on a hot plate.
5 A ¶ DR. ARUNDHATI SENGUPTA, 50s, a thermal sweater and wire-rimmed glasses, sits cross-legged on the deck with a thermos.
6 A LIEUTENANT KAVEH MORTAZAVI, 30s, in a naval jumpsuit, stands at the glass, one palm flat against it.
7 D KAVEH: Did you see that?
8 D SENGUPTA: See what?
9 D KAVEH: Something moved.
10 D SENGUPTA: Something always moves, Lieutenant. It's the deep sea.
11 D KAVEH: Not like that.
12 D SENGUPTA: Describe it.
13 D KAVEH: Big. Slow. Pale. It went across the lamp and then, nothing.
14 D SENGUPTA (to herself): Anglerfish. Or a squid. Or the reflection of your own eyelid.
15 D KAVEH: It was not my eyelid.
16 D SENGUPTA: Then it was a sperm whale.
17 D KAVEH: Not at this depth.
18 D SENGUPTA: No.
19 A ¶ She unscrews the thermos.
20 A Pours.
21 A Offers him a cup.
22 A He doesn't take it.
23 D SENGUPTA [CONT'D]: Kaveh. When did you last sleep?
24 D KAVEH: I don't remember.
25 D SENGUPTA: Thirty-one hours. I counted.
26 D KAVEH: You counted?
27 D SENGUPTA: I count everything. It's a scientific disorder.
28 A ¶ He almost laughs.
29 A Then the lamp flickers.
30 A The water beyond the glass shifts and the snow swirls into a vortex.
31 A Kaveh steps back.
32 D KAVEH: There. There it is.
33 A ¶ Sengupta rises.
34 A Joins him.
35 A A vast pale shape, a flank, a curve, slides across the glass, brushing it, so close its skin leaves a smear in the silt.
36 A For a long moment the two of them simply stare.
37 D SENGUPTA (whispering): Oh.
38 D KAVEH: What is it?
39 D SENGUPTA (to herself): I have no name for it.
40 D KAVEH: You always have a name.
41 D SENGUPTA: Not for this.
42 A ¶ The shape rolls.
43 A An eye the size of a dinner plate regards them through the glass, wet and black, ancient, unhurried.
44 D KAVEH: It's looking at us.
45 D SENGUPTA: Yes.
46 D KAVEH: Is it dangerous?
47 D SENGUPTA (softly): I think it's curious.
48 D KAVEH: Is that better?
49 D SENGUPTA: It depends on what it's curious about.
50 A ¶ A low hum builds in the station walls, a vibration they feel in their teeth.
51 A The kettle rattles on the hot plate.
52 A The creature presses a flipper against the dome, and the glass creaks.
53 D KAVEH (low): Doctor.
54 D SENGUPTA: I know.
55 D KAVEH: That's a stress fracture.
56 D SENGUPTA: I know.
57 D KAVEH: We should seal the dome.
58 D SENGUPTA: No. Wait.
59 A ¶ She lifts one hand and, slowly, places her palm on the glass opposite the creature's flipper.
60 A The hum falls.
61 A The creak stops.
62 A The great eye blinks, and the creature drifts back, and back, until it is only a pale suggestion in the dark.
63 A ¶ Kaveh lets out a breath that fogs the glass.
64 A Sengupta lowers her hand, picks up the thermos, and pours herself a cup that shakes in her grip.
65 D KAVEH: You were right.
66 D SENGUPTA: About what?
67 D KAVEH: Curious.
68 D SENGUPTA (smiling, tired): I do hate being right at depth.

### SCENE s01774 | INT. TRAIN STATION LEFT-LUGGAGE OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): CORDELIA MBEKI, AUGUSTINE PELLETIER, RAFAELA DOMINGUES
1 A ¶ Rows of steel shelves.
2 A Suitcases, cello cases, a taxidermy owl in a crate.
3 A A clock above the counter reads 11:52.
4 A ¶ CORDELIA MBEKI, thirties, stands at the counter with a claim ticket.
5 A She slides it across.
6 A Behind the counter, AUGUSTINE PELLETIER, an older clerk, takes it without looking and shuffles away into the shelves.
7 A ¶ She waits.
8 A Then the door behind her opens and RAFAELA DOMINGUES walks in, shaking rain off her coat.
9 A She stops when she sees her.
10 A ¶ She doesn't move.
11 A Cordelia turns her head and stops as well.
12 A The rain on the roof is the only sound.
13 D RAFAELA: You came.
14 D CORDELIA: I said I would.
15 A ¶ She steps to the counter and sets down a small leather case.
16 A She doesn't open it.
17 A Cordelia looks at the case, then at her.
18 D CORDELIA [CONT'D]: That's the one?
19 D RAFAELA: That's the one.
20 A ¶ She pushes it an inch toward her.
21 A Cordelia puts a finger on the lid and takes it away again.
22 D CORDELIA: I thought you'd have thrown it into the river by now.
23 D RAFAELA: I thought about it.
24 D CORDELIA: What stopped you?
25 D RAFAELA: The river was cold.
26 A ¶ Augustine returns with a battered suitcase.
27 A He sets it on the counter and looks from one to the other.
28 A She lifts her eyes to meet his.
29 D AUGUSTINE: Ticket three-oh-seven.
30 D CORDELIA: That's mine.
31 A ¶ She grips the handle.
32 A Rafaela lays a hand on the other end of it.
33 A They stand with the suitcase between them, both holding on.
34 D RAFAELA: Your train is at midnight.
35 D CORDELIA: It is.
36 D RAFAELA: Leave it.
37 D CORDELIA: I can't.
38 A ¶ Rafaela lets go.
39 A She picks up her leather case and holds it against her chest.
40 A Cordelia drags the suitcase off the counter, and at the door she pauses with her back turned.
41 D CORDELIA [CONT'D]: Keep the case. Please.
42 A ¶ She goes out into the rain.
43 A Rafaela stays where she is until the clock reads 11:58, then lays the case on the counter in front of the clerk.
44 D RAFAELA: Could you hold this for me?
45 A ¶ Augustine takes it and writes out a ticket.

### SCENE s01702 | INT. FLOATING LIBRARY - LANTERN HALL - TWILIGHT
Detected names (may be incomplete or contain aliases): IMELDA OGUNLEYE, BARTHOLOMEW QUILL, PIP
1 A ¶ Shelves rise in spirals into a sky of drifting clouds.
2 A Books hover on invisible currents, flapping their covers like moths.
3 A Lanterns bob at the ends of long gilt chains.
4 A Rain falls upward past the windows.
5 A ¶ IMELDA OGUNLEYE (50s, patchwork robes, spectacles on a silver chain) sits at a vast oak desk, writing with a feather that dips itself into the ink.
6 A Before her stands BARTHOLOMEW QUILL (30s, travel-stained coat, a leather satchel), hat in hand.
7 A Perched on a high shelf, a small gray owl-shaped librarian called PIP watches them both with unblinking amber eyes.
8 D IMELDA: Sit.
9 D BARTHOLOMEW: I'd rather stand.
10 D IMELDA: You'll sit, or the books won't speak to you.
11 A ¶ He sits.
12 A A book drifts down and lands in his lap, spine trembling.
13 D BARTHOLOMEW: Is it always like this?
14 D IMELDA: Only on Tuesdays.
15 D BARTHOLOMEW: It's Thursday.
16 D IMELDA: Then it is worse than I thought.
17 D PIP (a soft hoot): Hoo.
18 D IMELDA: Pip says you are late.
19 D BARTHOLOMEW: I came as soon as the letter reached me.
20 D IMELDA: It reached you three weeks ago.
21 D BARTHOLOMEW: The roads were closed.
22 D IMELDA: The roads are always closed. That is what roads are for.
23 A ¶ He opens the book.
24 A The pages are blank.
25 A He turns them.
26 A Blank.
27 A Blank.
28 A A single line of ink slowly blooms on the last page, in handwriting he recognizes.
29 D BARTHOLOMEW: That's my mother's hand.
30 D IMELDA: Yes.
31 D BARTHOLOMEW: She wrote this?
32 D IMELDA: She is writing it now.
33 D BARTHOLOMEW: She's been dead for nine years.
34 D IMELDA: In this library, no one is dead until the last page is read.
35 A ¶ Silence.
36 A Rain falls up.
37 A A lantern knocks softly against a shelf.
38 D BARTHOLOMEW: What does it say?
39 D IMELDA: Read it aloud.
40 D BARTHOLOMEW: "My dear boy. If you are reading this, I have kept my promise."
41 D PIP: Hoo.
42 D IMELDA: Go on.
43 D BARTHOLOMEW: "I have kept it a very long time."
44 A ¶ His voice cracks.
45 A Imelda takes off her spectacles and polishes them on her sleeve, looking elsewhere.
46 A Pip tucks his head under one wing.
47 D BARTHOLOMEW [CONT'D]: Is there more?
48 D IMELDA: There is always more.
49 D BARTHOLOMEW: How long may I stay?
50 D IMELDA: Until the lanterns burn down.
51 D BARTHOLOMEW: And when is that?
52 D IMELDA: When you stop reading.
53 A ¶ He bends over the page.
54 A The lanterns brighten.

### SCENE s00898_1 | EXT. LONE CABIN - PORCH - CONTINUOUS
Detected names (may be incomplete or contain aliases): ELIJAH
1 A ¶ The rider reins up at the gate.
2 A Elijah steps onto the boards, shotgun low.
3 A He tips his hat, and a bright, gentle smile crosses his face.
4 D ELIJAH: Morning, Ruth.

### SCENE s00156 | INT. TRAMPOLINE PARK - PRIVATE PARTY ROOM - DAY
Detected names (may be incomplete or contain aliases): HARRY, EZEKWESILI, DOROTHEA PRZYWARA, HR, TREVOR OKONJO-LANE, MARGUERITE VOLKOV, PAXTON HALE
1 A ¶ A wall of padded foam.
2 A Neon signs: JUMP!
3 A SOAR!
4 A SURVIVE!
5 A A banner reads "SYNERGY OFFSITE 2026."
6 A A long table of untouched pizza.
7 A ¶ Five employees in matching grippy socks sit in a circle on the floor, cross-legged, as a laminated agenda card makes its way from hand to hand.
8 A ¶ HARRISON "HARRY" EZEKWESILI, 40s, VP of Operations, tie still knotted.
9 A DOROTHEA PRZYWARA, 30s, the HR manager, clipboard.
10 A TREVOR OKONJO-LANE, 20s, an intern with his sock half off.
11 A MARGUERITE VOLKOV, 50s, in a cardigan, the longest-tenured.
12 A And PAXTON HALE, 30s, from Sales, who has not stopped smiling since he arrived.
13 D DOROTHEA: Okay, everybody, let's share one fear and one trampoline goal.
14 D HARRY: I'll start. My fear is irrelevance.
15 D DOROTHEA: My fear is liability.
16 D TREVOR: My fear is... all of this.
17 D MARGUERITE: My fear is that I'll outlive the company.
18 D PAXTON: I don't have fears. I have opportunities.
19 A ¶ A beat.
20 A Everyone looks at Paxton.
21 D HARRY: Paxton, that's a fear in disguise.
22 D PAXTON: Is it?
23 D DOROTHEA: It is.
24 D TREVOR: Definitely.
25 D MARGUERITE: I'll allow it.
26 D DOROTHEA: Trampoline goals?
27 D HARRY: Backflip.
28 D DOROTHEA: No injuries.
29 D TREVOR: Escape.
30 D MARGUERITE: A nap.
31 D PAXTON: A synergistic pyramid.
32 D HARRY: Let's jump.
33 A ¶ They rise.
34 A The trampolines are a field of black.
35 A Harry steps on.
36 A Bounces once.
37 A Bounces twice.
38 A His tie flaps over his shoulder.
39 D HARRY: This isn't so bad.
40 A ¶ He bounces higher.
41 A Dorothea joins.
42 A Then Trevor.
43 A Then Marguerite, solemn as a monk.
44 A Paxton cannonballs onto the biggest trampoline, shouting.
45 D PAXTON: Pyramid!
46 A ¶ They stack awkwardly.
47 A Harry on the bottom.
48 A Dorothea on his shoulders.
49 A Trevor on hers.
50 A Marguerite on his.
51 A Paxton climbs to the top, hands overhead.
52 D PAXTON [CONT'D]: Synergy!
53 A ¶ The pyramid sways.
54 A Gasps.
55 A Dorothea's clipboard slips.
56 A Trevor loses a sock.
57 A The whole pile topples sideways into the foam pit with a majestic thump.
58 A ¶ Silence.
59 A ¶ A hand emerges, then a head.
60 A It is Marguerite.
61 A She spits out foam.
62 D MARGUERITE: That was the best meeting we have ever had.
63 A ¶ One by one, the others surface, laughing.
64 A Harry pulls off his tie and flings it into the air.
65 D HARRY: Let's do it again.
66 A ¶ They scramble.
67 A A whistle shrills from the wall speaker.
68 D DOROTHEA: Time!
69 A ¶ They sag.
70 A Harry sighs.
71 D HARRY (to Dorothea): Put that in the minutes.
72 D DOROTHEA (writing): "Synergy achieved."
73 D TREVOR: Can I go home now?
74 D MARGUERITE: Not before the pizza.
75 A ¶ They move toward the table.
76 A Paxton lingers.
77 A He looks back at the foam pit, grinning at the wreckage.
78 D PAXTON (to himself): Opportunities.

### SCENE s00909 | EXT. MONASTERY ORCHARD - TRENCH LINE - EVENING
Detected names (may be incomplete or contain aliases): HENRI DUBOIS, ALBERT QUIGLEY, SANTIAGO MORALES, JOSEPH WHITEFEATHER
1 A ¶ A line of earth cut through rows of apple trees, their blossoms falling like a slow snow into the mud.
2 A Beyond the wall, the white stones of a ruined abbey.
3 A The sky is the colour of old pewter.
4 A Everything is hushed, as though the war has paused to breathe.
5 A ¶ LT. HENRI DUBOIS, 30s, sits on an upturned crate at the lip of the trench, a bandage around his left hand, scribbling in a notebook.
6 A Thin as a rake, with a poet's brow and a smoker's cough.
7 A ¶ SGT. ALBERT QUIGLEY, 50s, a barrel-chested veteran with a drooping moustache, squats beside a battered kettle over a spirit stove.
8 A He fusses with the tea, humming under his breath.
9 A ¶ PVT.
10 A SANTIAGO MORALES, 20, round-faced, sits on the firing step with a harmonica he does not play.
11 A He turns it over and over in his hands.
12 A ¶ CPL.
13 A JOSEPH WHITEFEATHER, 30s, tall, quiet, leans against the trench wall cleaning a rifle with a rag, eyes half-closed, a long braid down his back.
14 D QUIGLEY: Tea's nearly ready.
15 D DUBOIS: Lovely.
16 D QUIGLEY: It's terrible tea.
17 D DUBOIS: Then it's British.
18 D QUIGLEY (chuckling): I'm from Leeds, sir. It's worse than British.
19 A ¶ Morales lifts the harmonica to his lips, hesitates, lowers it.
20 A Whitefeather glances over without comment, then returns to the rifle.
21 A A petal drifts into the kettle.
22 A Quigley fishes it out with a finger.
23 D MORALES: Sergeant, is it true what they say about the orchard?
24 D QUIGLEY: What do they say?
25 D MORALES: That the monks planted these trees four hundred years ago.
26 D QUIGLEY: Five hundred.
27 D DUBOIS: Closer to six, I believe. The brothers kept records.
28 D MORALES: Records of what?
29 D DUBOIS: Of every harvest. Every frost. Every war that passed through.
30 D WHITEFEATHER (quietly): Did they write about us?
31 D DUBOIS: Not yet.
32 A ¶ A rumble far off, then silence again.
33 A The four men listen.
34 A A single blackbird begins to sing from the abbey wall, and Morales finally plays three soft notes on the harmonica before dropping his hand, embarrassed, while Quigley pours the tea into dented tin mugs, hands one to Dubois, one to Whitefeather, one to Morales, and settles back on his heels with the last mug warming his palms, all of them listening to the bird as the light goes slowly copper over the blossoming wall.
35 D QUIGLEY: Funny thing.
36 D DUBOIS: Mm?
37 D QUIGLEY: I've never heard a bird sing in a war before.
38 D WHITEFEATHER: They only sing when it's over.
39 D QUIGLEY: It's not over.
40 D WHITEFEATHER: No.
41 A ¶ The blackbird sings on.
42 A Dubois closes his notebook and lifts his mug in a small salute to the trees.

### SCENE s01351 | INT. OBSERVATORY ROOF DOME - NIGHT
Detected names (may be incomplete or contain aliases): CASSIAN LOWE, LYDIA ABERNATHY-OKAFOR, MABEL
1 A ¶ A hemisphere of dark wood and brass, the great shutter slid open on a spill of stars.
2 A In the center, a telescope the size of a cannon points at the sky.
3 A The floor is a compass rose of inlaid ebony.
4 A It is cold.
5 A Everyone's breath is visible.
6 A ¶ CASSIAN LOWE, 40s, wrapped in a moth-eaten scarf, adjusts the telescope eyepiece with long inky fingers.
7 A He is an astronomer who has been alone with his work for fifteen years, and it shows in the way he does not quite look at people.
8 A ¶ LYDIA ABERNATHY-OKAFOR, 30s, in a velvet coat, hair swept up and pinned with a single silver comb, stands at the foot of the iron stair, staring up at him.
9 A She has the stillness of someone who rehearsed a speech and forgot it on the climb.
10 A ¶ And between them, curled on a worn leather chair, is MABEL, 70s, Cassian's mother, a tiny woman in knitted mittens, dozing, a cup of cold tea on her knee.
11 D LYDIA (to Cassian): You didn't answer my letters.
12 D CASSIAN (not turning): Comets keep their own hours.
13 D LYDIA: I'm not a comet.
14 D CASSIAN: No. A comet comes back.
15 A ¶ Lydia flinches.
16 A She climbs one step.
17 D LYDIA (to the dome): Seven years, and this is what it comes to. A man with his eye pressed to a hole.
18 D MABEL (half asleep): That's a fine hole, dear.
19 D CASSIAN: Mother.
20 D MABEL: Just saying.
21 A ¶ Lydia takes another step.
22 A Cassian's hand tightens on the brass.
23 A A star slides through the glass.
24 D LYDIA (to Cassian): I'm marrying Edgar in June.
25 D CASSIAN: Congratulations.
26 D LYDIA: That's all?
27 D CASSIAN: What would you like me to say?
28 D LYDIA: Something. Anything that isn't polite.
29 D CASSIAN (muttering): Edgar is a fool.
30 D LYDIA: There it is.
31 D CASSIAN: He wears spats to the beach.
32 D LYDIA: He is kind.
33 D CASSIAN: He is kind, and wears spats, and has never once looked up.
34 A ¶ Lydia reaches the platform.
35 A She faces him.
36 A He finally turns.
37 A Their faces are a foot apart.
38 D LYDIA: Cassian, look at me.
39 D CASSIAN: I am looking.
40 D LYDIA: Look at me, not past me.
41 A ¶ He does.
42 A The eyes are wet.
43 A Behind them, a meteor streaks across the open shutter.
44 A Neither notices.
45 D MABEL (waking, to the room): Did I miss something?
46 D LYDIA (not moving): Everything, Mabel.
47 D MABEL (to the room): I knew it. I always do.

### SCENE s00498 | EXT. PETTING ZOO - BIRTHDAY PARTY - DAY
Detected names (may be incomplete or contain aliases): DARIUS FENWICK-ODOM, SOLEDAD, PAULINE, ZOO KEEPER, RIBEIRO
1 A ¶ A fenced paddock, hay bales, a goat in a party hat.
2 A Kids shriek in the distance.
3 A ¶ DARIUS FENWICK-ODOM (40s, host dad, apron over a polo) carries a tray of juice boxes to the pen, whistling.
4 A His wife SOLEDAD (40s, sunglasses, a phone in each hand) trails him, texting.
5 A Her mother PAULINE (70s, lawn chair, thermos) watches from the gate.
6 A The ZOO KEEPER, MR. RIBEIRO (50s, overalls, bucket), leans on a fence post.
7 A ¶ He sets down the tray.
8 A She sets down a phone.
9 A Pauline lifts her thermos in salute.
10 D DARIUS: Seven kids. One goat. What could go wrong?
11 D MR. RIBEIRO: Don't say that.
12 D SOLEDAD (not looking up): Darius, don't.
13 D PAULINE (over her): Let the man speak.
14 A ¶ The goat lowers its head.
15 A It eyes the tray.
16 A It eyes Darius.
17 D DARIUS: Nice goat.
18 D MR. RIBEIRO: That's Gerald.
19 D SOLEDAD: Gerald is wearing a party hat.
20 D PAULINE: So is the cake.
21 A ¶ They all turn.
22 A Behind them, the cake sits on a hay bale, fully intact, a three-tier unicorn.
23 A Gerald trots toward it.
24 D DARIUS: Gerald, no.
25 D MR. RIBEIRO: Gerald, heel!
26 D SOLEDAD: Mother, move your chair!
27 A ¶ Gerald hits the hay bale at a full run.
28 A Frosting rains over all four of them.
29 A Pauline, sprayed pink from head to toe, lowers her thermos and says, perfectly calm:
30 D PAULINE: Well. That's a fun party.

### SCENE s01736 | INT. FLOATING MARKET - INSIDE THE GIANT'S RIBCAGE - DUSK
Detected names (may be incomplete or contain aliases): QUILL, SABRA, THORN, HOODED WOMAN, ZEPHYRINE, GRIMBOLD
1 A ¶ Lantern-boats drift between enormous curved bones the color of old piano keys.
2 A Stalls hang from them on ropes.
3 A Fog moves along the waterway.
4 A ¶ QUILL (30s, lean, ink-stained fingers, a satchel of maps) haggles at a stall hung with dried fish.
5 A SABRA (20s, scarred cheek, hand always near a short knife) leans on a bone.
6 A THORN (50s, barrel-chested, a pipe in his teeth) squats on the boat's stern and feeds a pair of ravens.
7 A ¶ A HOODED WOMAN (age unknowable, gray cloak) sits by herself at the edge of the water, a single candle at her knee.
8 D QUILL: Eight silver for the lot.
9 D SABRA: You said six.
10 D QUILL: The price changed when the fog came in.
11 D THORN: The fog came in at noon.
12 D HOODED WOMAN (to no one): It rises. It does not come in.
13 A ¶ They all turn.
14 A Sabra's hand tightens on the knife.
15 D SABRA: Who are you?
16 D HOODED WOMAN: Zephyrine.
17 D QUILL: Just Zephyrine?
18 D ZEPHYRINE: Just. It has been enough for six hundred years.
19 D THORN (low): Quill. Sabra. We should go.
20 D ZEPHYRINE: You have a map of the Ember Coast. I would very much like to see it.
21 A ¶ Quill's hand goes to his satchel.
22 A The ravens lift off the boat in a rush of black wings.
23 A Thorn rises, pipe falling from his teeth.
24 A ¶ A new shadow crosses the water.
25 A GRIMBOLD (40s, stooped, wearing a toll-keeper's brass chain, his lantern held very high) steps onto the stall's plank and looks at them all with weary patience.
26 D GRIMBOLD: Toll.
27 D SABRA: We paid at the gate.
28 D GRIMBOLD: That was the gate. This is the rib.
29 D THORN (dual with Quill): You can't charge for bones, you old thief.
30 D QUILL: ^You can't charge for a bone, it's the whole market.
31 D GRIMBOLD: Bones belong to the dead. The dead pay me.
32 D ZEPHYRINE (rising): Then let them pay for me, Grimbold. I am not here for the toll.
33 A ¶ Grimbold's lantern wavers.
34 A The candle at her knee gutters out.
35 A For a long beat nobody speaks.
36 A Then the old man bows, very slightly, and steps aside.
37 D GRIMBOLD: Mistress.
38 D ZEPHYRINE (to Quill): The map.
39 A ¶ Quill hands it over.
40 A Sabra exhales.
41 A Thorn retrieves his pipe from the planks and, with great care, does not relight it.

### SCENE s00199 | INT. REGENCY LIBRARY - EVENING
Detected names (may be incomplete or contain aliases): LADY CORDELIA ASHWORTH-PEMBERTON, LADY HENRIETTA VANE, LORD EDMUND FITZWILLIAM-OKAFOR, HOBSON
1 A ¶ Tall shelves, a crackling fire, a globe on a stand.
2 A Candles in sconces.
3 A Rain streaks the windowpanes.
4 A ¶ LADY CORDELIA ASHWORTH-PEMBERTON, 30s, in an emerald gown, pours sherry.
5 A Her cousin, LADY HENRIETTA VANE, 30s, in a lilac dress, stands at the fireplace, fanning herself.
6 A LORD EDMUND FITZWILLIAM-OKAFOR, 40s, in a black coat, leafs through a book.
7 A Their butler, HOBSON, 60s, stands by the door with a salver.
8 D CORDELIA: Henrietta, you are quiet tonight.
9 D HENRIETTA: I am always quiet.
10 D CORDELIA: You are never quiet.
11 D HENRIETTA: Then I am tonight.
12 D EDMUND (without looking up): She has a secret.
13 D HENRIETTA: I do not.
14 D EDMUND: Her fan has stopped. She only stops fanning when she is lying.
15 D HENRIETTA: Cordelia, tell him he is insufferable.
16 D CORDELIA: He is insufferable.
17 D EDMUND: Thank you.
18 D CORDELIA: It was not a compliment.
19 D EDMUND: It was from you.
20 D HENRIETTA: Enough. I will tell you.
21 D CORDELIA: Do.
22 D HENRIETTA: Father has accepted an offer for my hand.
23 D CORDELIA: From whom?
24 D HENRIETTA: From Lord Ravenscroft.
25 D EDMUND: Ravenscroft is sixty.
26 D HENRIETTA: Sixty-two.
27 D CORDELIA: Henrietta.
28 D HENRIETTA: He has a fine estate.
29 D EDMUND: He has a fine gout.
30 D CORDELIA: Do you wish to marry him?
31 D HENRIETTA: I do not wish to do anything.
32 D CORDELIA: Then do not.
33 D HENRIETTA: It is not so simple.
34 D EDMUND: It is exactly so simple. Tell your father no.
35 D HENRIETTA: You do not know my father.
36 D CORDELIA: I do. He is a dreadful man.
37 D HENRIETTA: Cordelia!
38 D CORDELIA: Well, he is.
39 A ¶ Hobson steps forward and presents the salver.
40 A A single letter, sealed in red.
41 D HOBSON: For Lady Henrietta, my lady.
42 A ¶ Henrietta takes it with careful fingers.
43 A She opens it.
44 A Reads.
45 A Her fan drops.
46 A Cordelia and Edmund exchange a look.
47 D HENRIETTA (whispering): He is dead.
48 D EDMUND: Who?
49 D HENRIETTA: Ravenscroft. This morning.
50 A ¶ Silence.
51 A The fire pops.
52 A Cordelia sets down the sherry.
53 A She takes Henrietta's hand.
54 D CORDELIA: Then you are free.
55 D HENRIETTA: Yes. I am.
56 A ¶ She laughs, a short, shocked sound.
57 A Then she cries.
58 A Edmund closes his book.
59 A Hobson quietly withdraws.

### SCENE s01787 | INT. FARMHOUSE KITCHEN - MORNING
Detected names (may be incomplete or contain aliases): GRANDMA ROSELLA PIPER, HAROLD PIPER, JUNIPER, MABEL, TOBY
1 A ¶ A big kitchen, yellow-walled, with a scarred oak table and a coal range ticking.
2 A Window boxes of red geraniums.
3 A A rooster clock on the wall reads six-fifty.
4 A Pancake batter on every surface.
5 A ¶ GRANDMA ROSELLA PIPER, seventies, small and iron-backed, stands at the range flipping a pancake the size of a hubcap.
6 A HAROLD PIPER, her son, forties, sits at the table in a clean work shirt and reads the paper.
7 A His wife JUNIPER, forties, ties a ribbon around their daughter MABEL's braid.
8 A MABEL, seven, kicks her feet.
9 A In the corner, an old beagle named BISCUIT sleeps on a rag rug, and the youngest, TOBY, three, sits beneath the table with a wooden spoon.
10 A ¶ Rosella flips the pancake.
11 A It lands on the floor.
12 A Biscuit wakes, Toby lunges, the beagle and the toddler scramble for it together, and Mabel shrieks.
13 D MABEL: Toby's eating off the floor!
14 D JUNIPER: Toby, no!
15 D HAROLD (not looking up): Floor pancake's the best pancake.
16 D ROSELLA: Harold!
17 A ¶ Rosella scoops Toby up with one arm and the pancake with the other.
18 A Juniper snatches the spoon.
19 A Harold folds his paper and sighs with great contentment.

### SCENE s01408 | INT. STATE SUPREME COURT - APPELLATE CHAMBER - DAY
Detected names (may be incomplete or contain aliases): CHIEF JUSTICE OKSANA PETRENKO, DESMOND CARUTHERS, NADINE ASHWORTH-KIM
1 A ¶ Marble, mahogany, a high bench.
2 A Cameras off.
3 A A single pitcher of water sweats at the lectern.
4 A ¶ CHIEF JUSTICE OKSANA PETRENKO, 60s, white hair pinned tight, sits alone on the bench with a pen balanced between two fingers.
5 A At the lectern, DESMOND CARUTHERS, 50s, rumpled suit, sweats through his notes.
6 A At the state's table, NADINE ASHWORTH-KIM, 40s, charcoal suit, a thick binder squared before her.
7 D DESMOND: Your Honor, the statute is plain.
8 D OKSANA: Plain to whom, Mr. Caruthers?
9 D DESMOND: To any reasonable reader.
10 D OKSANA: Are you reasonable?
11 D DESMOND: I try to be.
12 D OKSANA: That's not an answer.
13 D DESMOND: It's the only honest one I have.
14 A ¶ She almost smiles.
15 A Taps the pen on the bench.
16 D OKSANA: Take me through section four.
17 D DESMOND: Section four governs notice.
18 D OKSANA: And your client?
19 D DESMOND: Received none.
20 D OKSANA: Not even a letter?
21 D DESMOND: A letter was mailed. It was never delivered.
22 D OKSANA: Mailed to where?
23 D DESMOND: An address where my client hadn't lived in six years.
24 D OKSANA: Whose fault was that?
25 D DESMOND: The county's. They had the forwarding card.
26 A ¶ Nadine's pen stops moving.
27 A Oksana sees it.
28 D OKSANA: Ms. Ashworth-Kim. You have something to say?
29 D NADINE: Not yet.
30 D OKSANA: Then Mr. Caruthers continues.
31 D DESMOND: Thank you. Your Honor, if the court allows this, thousands of cases reopen.
32 D OKSANA: I'm aware of that.
33 D DESMOND: And I'd ask the court to consider whether thousands of cases were ever properly closed.
34 A ¶ A silence.
35 A Oksana sets down her pen.
36 D OKSANA: That's a bold sentence.
37 D DESMOND: It's a true one.
38 D OKSANA: Sit down, Mr. Caruthers.
39 A ¶ He gathers his papers and retreats.
40 A Nadine rises, walks to the lectern, and opens her binder.
41 A She does not look at it.
42 D NADINE: May it please the court.
43 D OKSANA: It might. Go ahead.
44 D NADINE: The forwarding card was misfiled.
45 D OKSANA: By whom?
46 D NADINE: By a clerk who no longer works for the county.
47 D OKSANA: That's not an excuse.
48 D NADINE: It's not meant as one. It's an explanation.
49 D OKSANA: They sound similar from up here.
50 D NADINE: They feel different from down here.
51 A ¶ Oksana's eyebrow lifts.
52 A Desmond, at his table, almost laughs and then stops himself.
53 D NADINE [CONT'D]: The state asks the court to apply the harmless error doctrine.
54 D DESMOND: ^ It was not harmless!
55 D NADINE: ^ It was administrative!
56 D OKSANA: Both of you.
57 A ¶ They stop.
58 A The room is very quiet.
59 D OKSANA [CONT'D]: Mr. Caruthers, your client lost his house.
60 D DESMOND: Yes.
61 D OKSANA: Ms. Ashworth-Kim. He lost his house.
62 A ¶ Nadine's hand tightens on the lectern.
63 A For a moment her composure slips.
64 D NADINE (quietly): Yes. He did.
65 A ¶ Oksana lowers her glasses.
66 A Looks at one, then the other.
67 D OKSANA: We'll take it under advisement.
68 A ¶ She raps once with her pen and rises.
69 A The two lawyers rise with her, and for a moment, across the length of the room, they look at each other like the last two people in a lifeboat.

### SCENE s01261 | INT. LAUNDROMAT PAYPHONE ALCOVE - NIGHT
Detected names (may be incomplete or contain aliases): KENDRA ABERNATHY-VOSS, FATHER
1 A ¶ Humming dryers.
2 A A bank of washers behind a glass wall.
3 A A payphone on a tile wall, its cord scarred by years of nervous fingers.
4 A ¶ KENDRA ABERNATHY-VOSS (30s, hospital badge on a lanyard, hair wet from the rain) feeds coins into the slot.
5 A She dials with trembling care.
6 A ¶ The phone rings twice.
7 A A click.
8 D FATHER [V.O.] (through the receiver, gruff): Yeah.
9 D KENDRA: Dad. It's me.
10 D FATHER [V.O.]: Kendra. Thought you'd be asleep.
11 D KENDRA: I'm on nights this week.
12 D FATHER [V.O.]: Right. Right, nights. They work you too hard.
13 D KENDRA: It's fine.
14 D FATHER [V.O.]: You eating?
15 D KENDRA: Yes.
16 D FATHER [V.O.]: Real food?
17 D KENDRA: Dad.
18 D FATHER [V.O.]: Okay, okay.
19 A ¶ Silence.
20 A On the line, a television murmurs in another room.
21 A She winds the metal cord around her finger until the tip turns white.
22 D KENDRA: How's Mom?
23 D FATHER [V.O.]: She's good. Good. She's in bed.
24 D KENDRA: She sleeping?
25 D FATHER [V.O.]: She's, uh. Yeah. She's sleeping.
26 D KENDRA: Dad.
27 D FATHER [V.O.]: What?
28 D KENDRA: You're doing the voice.
29 D FATHER [V.O.]: What voice?
30 D KENDRA: The one you used when Buster died.
31 A ¶ A long pause on the line.
32 A The television fades out.
33 A Then a breath, shaky.
34 D FATHER [V.O.]: Honey, I was going to call you.
35 D KENDRA: When?
36 D FATHER [V.O.]: In the morning. After you slept.
37 A ¶ Kendra rests her forehead against the cold tile.
38 A A dryer buzzes behind her.
39 A She doesn't turn.
40 D KENDRA: What time?
41 D FATHER [V.O.]: About nine o'clock. Just after the nurses.
42 D KENDRA: I'm coming.
43 D FATHER [V.O.]: Honey, there's nothing to...
44 D KENDRA: I'm coming, Dad.
45 A ¶ She hangs the receiver on its hook, very gently, as though it were asleep.
46 A Stands there a long moment.
47 A Then she goes to the glass wall, opens a dryer, and starts folding warm towels one by one.
48 T FADE OUT.

### SCENE s00033 | INT. LAUNDROMAT - DAY
Detected names (may be incomplete or contain aliases): PERPETUA DUNMORE, BART, CASSIDY, IMOGEN FAIRBANKS, MANAGER
1 A ¶ Rows of humming dryers.
2 A Fluorescent lights.
3 A A television bolted high on the wall plays a cooking show with the sound off.
4 A ¶ PERPETUA DUNMORE (50s, bright cardigan, folding towels with military precision) works at a table.
5 A Nearby, her nephew BARTHOLOMEW "BART" CASSIDY (20s, wrinkled hoodie, guitar case) sits on a dryer, scrolling his phone.
6 A At the vending machine, a stranger, IMOGEN FAIRBANKS (30s, crisp suit, rolling suitcase), feeds coins into the slot.
7 D PERPETUA: Bart, get off the dryer.
8 D BART: It's off.
9 D PERPETUA: The principle is on.
10 D IMOGEN (to the machine): Come on, come on.
11 A ¶ The machine rattles.
12 A A bag of pretzels hangs from the spiral, refusing to drop.
13 D BART: You have to shake it.
14 D IMOGEN: I'm not shaking a vending machine.
15 D PERPETUA: Everyone shakes the vending machine.
16 D IMOGEN: I have a flight in two hours.
17 D BART: Then shake it faster.
18 A ¶ Imogen glares, then grips the machine and rocks it.
19 A The pretzels fall.
20 A She straightens her blazer with great dignity.
21 D PERPETUA: ^Nicely done.
22 D BART: ^Nicely done.
23 A ¶ They say it at the same time and look at each other, startled.
24 A Imogen fights a smile.
25 A ¶ A voice crackles from the ceiling speaker.
26 D MANAGER [V.O.] (over intercom): Attention customers. Machine seven is on fire. Machine seven is on fire. This is not a drill.
27 A ¶ Everyone turns.
28 A Machine seven is, in fact, on fire.
29 A A thin orange flame licks the lint trap.
30 D PERPETUA: Of course it is.
31 D BART: Water?
32 D IMOGEN (heading for the door): I'm not paid for this.
33 D BART: Nobody is!
34 A ¶ Perpetua drags a bucket across the floor and dumps it in.
35 A The fire dies with a sad hiss.
36 A A single towel drifts out, charred and smoking.
37 D IMOGEN (from the doorway): Is this a regular occurrence?
38 D PERPETUA: Tuesdays.
39 A ¶ Imogen laughs despite herself, tears open her pretzels, and offers one to Bart.

### SCENE s00949 | INT. DEEP-SEA HABITAT, COMMON ROOM - SHIFT CHANGE
Detected names (may be incomplete or contain aliases): COMMANDER ASTRID LINDQVIST-OKOYE, TECHNICIAN BENEDICT ARCHAMBAULT-LI, SOLEDAD VARGAS-EZEKIEL, MONA, ABARCA-NIELSEN, ENGINEER THADDEUS MWANGI-PELLETIER, SPECIALIST KAMALA DEVI-BRANDT
1 A ¶ A cramped steel cylinder with a single porthole of black water.
2 A Bunks fold from the walls.
3 A A coffee machine gurgles.
4 A Condensation drips from the pipes in a slow, steady count.
5 A ¶ Six crew members cluster around a fold-out table playing a card game no one is winning.
6 A ¶ COMMANDER ASTRID LINDQVIST-OKOYE (50s) deals.
7 A TECHNICIAN BENEDICT ARCHAMBAULT-LI (30s) fans his cards.
8 A DR. SOLEDAD VARGAS-EZEKIEL (40s) frowns at her hand.
9 A COOK RAMONA "MONA" ABARCA-NIELSEN (30s) pours coffee.
10 A ENGINEER THADDEUS MWANGI-PELLETIER (60s) hums off-key.
11 A And the youngest, SPECIALIST KAMALA DEVI-BRANDT (20s), stares at the porthole.
12 D ASTRID (to the table): Antes in.
13 D BENEDICT: I fold.
14 D SOLEDAD: You haven't seen the cards.
15 D BENEDICT: I've seen your face.
16 D MONA (over them): Coffee's up, who wants some?
17 D THADDEUS: Me.
18 D KAMALA: Not me.
19 D SOLEDAD: Mona, put two sugars in mine, would you, and Benedict --
20 D BENEDICT: Don't tell me what to do with my own hand --
21 D ASTRID: Everyone, quiet.
22 A ¶ They stop.
23 A The pipes drip.
24 A Kamala is still looking at the porthole.
25 D ASTRID [CONT'D] (to Kamala): What is it?
26 D KAMALA (without turning): Nothing.
27 D THADDEUS (muttering): There's always something.
28 D MONA: Don't start, Thad.
29 D THADDEUS: I'm just saying --
30 D SOLEDAD (over him): He's right, though. The pressure gauge ticked.
31 D BENEDICT: It ticks all the time.
32 D SOLEDAD: Not like that.
33 D MONA (setting down the pot): Like what?
34 D ASTRID: Like a heartbeat.
35 A ¶ Everyone looks at her.
36 A She lays down her cards, face up.
37 D ASTRID [CONT'D] (to herself): I knew I'd heard it before.
38 A ¶ A long, low note rolls through the hull.
39 A The coffee ripples in the cups.
40 A Nobody moves.
41 A Nobody speaks.
42 A Then Kamala turns from the porthole and smiles.
43 D KAMALA: It's only the whales.
