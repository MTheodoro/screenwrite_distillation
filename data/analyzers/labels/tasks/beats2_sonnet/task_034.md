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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_sonnet/group_00034.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00744 | INT. NORMANDY FARMHOUSE - CELLAR - NIGHT (1944)
Detected names (may be incomplete or contain aliases): MARGUERITE LEBLANC
1 A ¶ Stone steps.
2 A Sacks of seed potatoes.
3 A Wine racks lie smashed.
4 A A single oil lamp throws a trembling circle on the floor.
5 A Above, the rhythmic thud of distant artillery sifts dust from the beams.
6 A ¶ MARGUERITE LEBLANC, thirties, war correspondent, trench coat torn at the shoulder, kneels over a wire recorder balanced on a crate.
7 A Her hands are steady.
8 A Her face is not.
9 A ¶ She threads the wire through the reel.
10 A Listens upward.
11 A Threads it again.
12 A ¶ She presses the record lever.
13 A A red light glows.
14 D MARGUERITE (into the microphone, low): This is Marguerite LeBlanc. The ninth of June, nineteen forty-four. I am in a cellar outside Carentan. The Germans are in the next field.
15 A ¶ A shell lands close.
16 A Dust rains.
17 A She flinches, covers the recorder with her body, then straightens.
18 D MARGUERITE [CONT'D] (into the microphone): They have been shelling for six hours. I have no food. I have a notebook and this machine.
19 A ¶ She stops.
20 A Rewinds.
21 A Plays it back.
22 D MARGUERITE [V.O.] (from the machine, tinny): "...I have no food. I have a notebook and this machine."
23 A ¶ She grimaces.
24 A Presses stop.
25 A Presses record again.
26 D MARGUERITE [CONT'D] (into the microphone): Correction. I have a notebook, this machine, and half a tin of sardines.
27 A ¶ A wry twist of her mouth.
28 A She opens the tin with her penknife.
29 A Eats one fish with her fingers.
30 A ¶ Upstairs, a door BANGS.
31 A Boots on boards.
32 A She goes still.
33 A She slides the tin under the crate.
34 A She extinguishes the lamp with her palm.
35 A ¶ Darkness.
36 A Only the faint red glow of the recorder.
37 A She smothers it with her coat.
38 A ¶ Boots cross the floor above, step by step.
39 A Dust trickles.
40 A Her breath is shallow and quick.
41 A ¶ The boots stop directly overhead.
42 A A floorboard creaks.
43 A She does not move.
44 A She does not blink.
45 A ¶ A voice mutters in German.
46 A A second answers, lower.
47 A A laugh.
48 A The boots move away toward the front door.
49 A ¶ She exhales, long and slow.
50 A Lifts the coat.
51 A The recorder's red eye glows, defiant.
52 A ¶ She relights the lamp with trembling fingers.
53 A She pulls the microphone to her mouth.
54 D MARGUERITE [CONT'D] (whispering): They have gone. For now.
55 A ¶ She winds the wire back.
56 A Plays.
57 D MARGUERITE [V.O., CONT'D] (from the machine): "They have gone. For now."
58 A ¶ She stares at the spinning reel.
59 A Then she reaches for her notebook and begins to write, fast, the pencil scratching in time with the shells.
60 A ¶ Another shell lands.
61 A Closer.
62 A Plaster falls from the ceiling and settles in her hair.
63 A ¶ She keeps writing.
64 D MARGUERITE [CONT'D] (into the microphone, steady): The cellar door is the only way out. It is locked from the outside.
65 A ¶ She stops.
66 A Looks at the stairs.
67 A The top step is bright with a thin line of lamplight from under the door.
68 A ¶ She rises, climbs three steps, and tests the handle.
69 A It does not give.
70 D MARGUERITE [CONT'D] (to herself): Naturally.
71 A ¶ She descends.
72 A Sits again at the recorder.
73 A Presses record.
74 D MARGUERITE [CONT'D] (into the microphone): If this recording is found, please send it to the Daily Courier, London. Tell them I filed on time.
75 A ¶ She smiles at that.
76 A It does not last.
77 A ¶ The ceiling groans.
78 A A crack runs along the central beam.
79 A Sand drips in a steady stream.
80 A ¶ She gathers the notebook and the reel into her satchel.
81 A She slings it across her chest.
82 A She climbs the stairs, braces her shoulder against the door, and shoves.
83 A Once.
84 A Twice.
85 A ¶ The wood creaks but holds.
86 A ¶ She steps back, breathing hard, and looks for something.
87 A Anything.
88 A Her eyes land on the broken wine rack.
89 A She grabs a splintered post.
90 A ¶ She wedges it under the latch.
91 A She leans her whole weight on it.
92 A ¶ The door cracks.
93 A Light spills down the steps.
94 A She shoves harder, teeth bared.
95 A ¶ The door gives.
96 A She tumbles into a kitchen with half a roof, and lies on the floor for one breath, two, in the red glow of a burning barn through the window.
97 A ¶ She sits up.
98 A Checks the satchel.
99 A The reel is intact.
100 D MARGUERITE [CONT'D] (a whisper, almost a laugh): Filed.
101 A ¶ She stands, pulls the coat tight, and walks out into the firelight.

### SCENE s01796 | INT. RED CANYON TRADING POST - AFTERNOON
Detected names (may be incomplete or contain aliases): EZEKIEL TALLCHIEF-ROURKE, WILEY BARNES, JOSIAH COLTRANE, ABEL MOREHOUSE
1 A ¶ A long adobe room with a plank counter and shelves of flour, tobacco, and tin cups.
2 A Shafts of afternoon light cross the dust.
3 A A stuffed buffalo head looks down from the back wall, one glass eye missing.
4 A A stove burns low.
5 A ¶ Behind the counter stands EZEKIEL TALLCHIEF-ROURKE, sixty, the proprietor, gray-bearded, with sleeves rolled to the elbow.
6 A At a corner table sit two cowhands, WILEY BARNES, thirties, long and sunburned, playing solitaire, and JOSIAH COLTRANE, twenties, round-faced and quiet, whittling.
7 A A fourth man, REV. ABEL MOREHOUSE, fifties, sits by the window in a dusty black coat, reading from a small Bible without looking at the words.
8 A ¶ A clock ticks.
9 A The whittling stops.
10 D EZEKIEL: Coffee's on if you want it.
11 D WILEY: I'd take a cup.
12 D EZEKIEL: Josiah?
13 D JOSIAH: No, thank you, sir.
14 D EZEKIEL: Reverend?
15 D REV. MOREHOUSE: I'm well, Mr. Rourke.
16 A ¶ Ezekiel pours Wiley a cup and sets it on the table.
17 A Wiley turns a card, grunts.
18 D WILEY: Hot enough to scald a snake.
19 D EZEKIEL: That's how you know it's coffee.
20 D JOSIAH: My ma used to say a man who drinks cold coffee has nothing to hurry for.
21 D EZEKIEL: Your ma sounds like a sensible woman.
22 D JOSIAH: She was, sir.
23 A ¶ Wiley glances at Josiah, then at the reverend, then down at his cards.
24 A He lays down another.
25 A The clock ticks louder.
26 D WILEY: Reverend, you've been on that same page for twenty minutes.
27 D REV. MOREHOUSE: It's a long verse.
28 D WILEY: It's one line.
29 D REV. MOREHOUSE: Then it has a lot to say.
30 A ¶ Ezekiel wipes the counter with a gray rag, slow, circular.
31 A Outside, a horse nickers.
32 A He looks toward the window and then back at his rag.
33 D EZEKIEL: Wiley, I don't believe I've asked where you're headed.
34 D WILEY: South.
35 D EZEKIEL: South's a big direction.
36 D WILEY: It's the only one I've got.
37 D JOSIAH: We're delivering cattle to Dalton.
38 D WILEY (sharp): Josiah.
39 D JOSIAH: Sorry, Wiley.
40 A ¶ Silence.
41 A The reverend turns a page.
42 A The stove ticks.
43 D EZEKIEL: Dalton's a fine town. I knew a man there once. Tall fella. Scar on his lip. Went by Cutter.
44 A ¶ Wiley does not move.
45 A Josiah's knife hangs in the air over the wood.
46 D EZEKIEL [CONT'D]: Funny thing. He used to come in here and play solitaire. Same as you. Always laid the black eight on the red nine.
47 A ¶ Wiley looks down at the table.
48 A The black eight lies on the red nine.
49 D WILEY: Coincidence.
50 D EZEKIEL: That's what I told myself.
51 A ¶ The reverend closes his Bible.
52 A He slips a hand inside his coat.
53 A Josiah drops the knife and rises, hands wide.
54 A Ezekiel does not stop wiping the counter.
55 A He bends, as if reaching for a bottle, and comes up with a double-barreled shotgun pointed at the table.
56 D EZEKIEL [CONT'D]: Gentlemen. There's a marshal in the next room. He's been listening.
57 D REV. MOREHOUSE (softly): Mr. Rourke. I am the marshal.
58 A ¶ He opens his coat to reveal a star pinned to the lining.
59 A Wiley slowly lays down his cards.
60 D WILEY: Well, I'll be.
61 D EZEKIEL: You may be, son. The trial's in Dalton.

### SCENE s02205 | INT. WEDDING CAKE BAKERY - BACK KITCHEN - DAY
Detected names (may be incomplete or contain aliases): CORKY, BANKS, PRIYANKA SHAH-WILLIAMS, DEMI, OKORO, VALENTINA CRESPO
1 A ¶ Flour in the air.
2 A Sheet pans, piping bags, a six-tier cake in the middle of the floor leaning ever so slightly to the left.
3 A A clock says 2:14.
4 A The wedding is at 3:00.
5 A ¶ CORNELIUS "CORKY" BANKS (50s, head baker, flour-dusted apron) holds his head in his hands.
6 A His sous-chef PRIYANKA SHAH-WILLIAMS (30s, hairnet, eyes of steel) circles the cake with a ruler.
7 A Their apprentice DESMOND "DEMI" OKORO (teen, oversized chef whites) holds a piping bag like a weapon.
8 A And the bride's mother, MRS. VALENTINA CRESPO (60s, hat the size of a hubcap), stands in the doorway with her arms crossed.
9 D CORKY: It's fine. It's totally fine.
10 D PRIYANKA: It's leaning, Corky.
11 D CORKY: Everything leans. The Tower of Pisa leans.
12 D PRIYANKA: The Tower of Pisa isn't going to be eaten by two hundred guests.
13 D MRS. CRESPO: Is something wrong with my daughter's cake?
14 D CORKY: No, Mrs. Crespo.
15 D PRIYANKA: Yes.
16 D CORKY (to Priyanka): Stop helping.
17 D DEMI: Chef, I can fix it.
18 D CORKY: No, Demi.
19 D DEMI: With dowels.
20 D PRIYANKA: He's actually right.
21 D CORKY: Demi has never used a dowel in his life.
22 D DEMI: I've used toothpicks.
23 D CORKY: Toothpicks are not dowels.
24 A ¶ Mrs. Crespo marches in.
25 A She stops at the cake, takes off her hat, puts it on the counter, and rolls her sleeves.
26 D MRS. CRESPO: Show me where the dowels are.
27 D CORKY: Mrs. Crespo, please.
28 D MRS. CRESPO: Cornelius. I raised four children and buried two husbands. I can handle a dowel.
29 A ¶ Priyanka hands her a bundle.
30 A Corky sits down on a flour sack and puts his head back in his hands.
31 A Demi steps in, holds the cake steady with both palms, and braces his feet.
32 D DEMI: Is this how they do it in movies?
33 D PRIYANKA: No.
34 D DEMI: What do they do?
35 D PRIYANKA: They hire a better apprentice.
36 A ¶ He grins.
37 A She grins back, almost.
38 A Mrs. Crespo drives the first dowel through the top three tiers with a surgeon's precision.
39 A The cake groans.
40 A Settles.
41 A Straightens.
42 A All four of them hold their breath.
43 D MRS. CRESPO: There.
44 D CORKY (not looking up): Is it straight?
45 D PRIYANKA: It's straight.
46 D CORKY: Tell me honestly.
47 D DEMI: It's very straight, Chef.
48 A ¶ Corky lifts his head.
49 A The cake stands tall and perfect.
50 A He lowers his hands, stunned.
51 D CORKY: Mrs. Crespo, I owe you my career.
52 D MRS. CRESPO: You owe me a slice.
53 D PRIYANKA: That's actually the bride's slice.
54 D MRS. CRESPO: Then you owe me two.
55 A ¶ The clock ticks to 2:20.
56 A Priyanka claps once, sharply.
57 D PRIYANKA: Frosting touch-ups. Demi, the roses. Corky, the transport van.
58 D CORKY: The van is in the shop.
59 D PRIYANKA: You told me it was fixed.
60 D CORKY: I told you it was fixed in my heart.
61 A ¶ Silence.
62 A Mrs. Crespo lifts her hat from the counter, puts it back on her head, and picks up her car keys.
63 D MRS. CRESPO: I have a station wagon.
64 D CORKY: Mrs. Crespo, it's a six-tier cake.
65 D MRS. CRESPO: Cornelius, I have a very large station wagon.
66 A ¶ He looks at her.
67 A At the cake.
68 A At Priyanka, who shrugs, and at Demi, who is already carrying a tray of roses toward the back door.
69 D CORKY: Fine. We're doing this.
70 D PRIYANKA: We're doing this.
71 D DEMI: We're doing this!
72 D MRS. CRESPO: Somebody open the door.

### SCENE s02382 | INT. WIRELESS HUT - ATLANTIC COAST - NIGHT, 1941
Detected names (may be incomplete or contain aliases): CORPORAL EMMELINE ROSKILLY
1 A ¶ A low shed of sandbags and corrugated iron.
2 A A single oil lamp swings from a hook.
3 A The sea batters the rocks outside.
4 A On a deal table, a wire recorder spins slowly beside a heavy radio set with a brass key.
5 A ¶ CORPORAL EMMELINE ROSKILLY, twenties, in a greatcoat and a woollen cap, sits upright on a crate.
6 A A headset is clamped over one ear.
7 A Her pencil moves steadily over a message pad.
8 A She has not blinked in some time.
9 A ¶ The radio crackles.
10 A Over it, a steady drone: enemy bombers, far off, growing nearer.
11 D EMMELINE (to herself): Steady, girl.
12 A ¶ She taps the key.
13 A Pauses.
14 A Taps again.
15 A The recorder spins, catching her.
16 D EMMELINE [V.O.] (recording): Station Albatross to all vessels. Enemy aircraft sighted bearing two-seven-zero. Repeat, two-seven-zero. Take cover.
17 A ¶ The lamp swings.
18 A A distant thump shakes dust from the rafters.
19 A She does not look up.
20 A She taps the key again.
21 D EMMELINE [CONT'D] (into mouthpiece): Albatross to convoy. Confirm receipt.
22 A ¶ Nothing.
23 A Static.
24 A The drone rises to a roar.
25 A ¶ She reaches for the recorder and rewinds it a few inches.
26 A Plays it back.
27 A Her own voice again, steady.
28 D EMMELINE [V.O., CONT'D] (recording): Take cover.
29 A ¶ Another thump, closer.
30 A The lamp goes out.
31 A In the dark, her hands keep working the key, tap, tap, tap, as the walls shake around her.
32 D EMMELINE [CONT'D] (whispering): Confirm receipt. Confirm receipt. Confirm...
33 A ¶ A ragged voice breaks through the static, faint, hers alone in the room, played from the spinning spool.
34 D EMMELINE [V.O., CONT'D] (recording): Take cover.
35 A ¶ She keeps tapping.

### SCENE s01416 | INT. FAMILY COURT - CORRIDOR - DAY
Detected names (may be incomplete or contain aliases): FERN, ALCANTARA, CORDELIA WASHINGTON-PRICE, BRONWEN ALCANTARA-HUGHES, ISAAC FELDSTEIN, MARISELA TRUJILLO, BAILIFF
1 A ¶ A scuffed hallway with benches along both walls.
2 A A vending machine hums.
3 A Fluorescent light flattens every face.
4 A ¶ On one bench: FERNANDO "FERN" ALCANTARA, 40s, in his only suit, and his lawyer, CORDELIA WASHINGTON-PRICE, 50s, flipping a file.
5 A On the opposite bench: BRONWEN ALCANTARA-HUGHES, 40s, his ex-wife, rigid, flanked by her attorney, ISAAC FELDSTEIN, 30s, and her sister, MARISELA TRUJILLO, 40s, who glares across the aisle.
6 D CORDELIA: Fern. Look at me.
7 D FERN: I'm looking.
8 D CORDELIA: You say nothing in there. Understood?
9 D FERN: Understood.
10 D CORDELIA: Even if she provokes you.
11 D FERN: She always provokes me.
12 D CORDELIA: Then you say nothing twice.
13 A ¶ Across the aisle, Marisela leans to whisper in Bronwen's ear.
14 A Bronwen shakes her head.
15 D MARISELA (loud): He's a liar, Bron.
16 D ISAAC: Marisela.
17 D MARISELA: He is.
18 D ISAAC: Please.
19 A ¶ Fern stands, fists clenched.
20 A Cordelia seizes his sleeve.
21 A Marisela stands too.
22 A Isaac steps between them, hands out, and Bronwen rises last, pale, her palms pressed flat against her skirt.
23 D FERN: She said that in front of my kids?
24 D BRONWEN: Fern, sit down.
25 D FERN: Don't tell me what to do, Bronwen.
26 D BRONWEN: I'm asking.
27 D FERN: You've never asked me anything in your life.
28 D BRONWEN: I'm asking now.
29 A ¶ He stops.
30 A Searches her face.
31 A The vending machine hums.
32 D CORDELIA (quietly): Fern.
33 A ¶ He sits.
34 A Slowly.
35 A Marisela sits too, sulking.
36 A Isaac exhales and returns to his folder.
37 A ¶ The courtroom door opens.
38 A A BAILIFF leans out.
39 D BAILIFF: Alcantara versus Alcantara-Hughes.
40 A ¶ All five of them stand.
41 A They file toward the door, and in the narrow frame Fern and Bronwen end up shoulder to shoulder, neither willing to go first.
42 D BRONWEN: After you.
43 D FERN: No. After you.
44 A ¶ Cordelia, behind them, rolls her eyes and shoves them both through the door.

### SCENE s01224 | INT. ABANDONED CARNIVAL HOUSE OF MIRRORS - NIGHT
Detected names (may be incomplete or contain aliases): MARISOL QUINTANA, CATALINA QUINTANA, LIAM FAIRWEATHER
1 A ¶ Cracked glass everywhere.
2 A A flashlight beam jitters across a hundred reflections.
3 A ¶ MARISOL QUINTANA (20s, hoodie, camera on a strap) walks backward, panning.
4 A Her sister CATALINA QUINTANA (20s, same hoodie, different colour) holds the light.
5 A ¶ Between them, LIAM FAIRWEATHER (20s, rental-car keys in a fist) steps on glass and swears under his breath.
6 D MARISOL: Stay close.
7 D CATALINA: I am close.
8 D LIAM: She's closer than you.
9 A ¶ Something thumps on the other side of the glass.
10 A All three freeze.
11 A Catalina swings the light.
12 A Nothing.
13 A Only their own faces, split into pieces.
14 D MARISOL (whispering): Count.
15 D CATALINA: Three.
16 D LIAM: Count the reflections.
17 A ¶ She does.
18 A Her lips move.
19 A She gets to a number and stops.
20 A ¶ A breath, not theirs, fogs the mirror at the end of the corridor.
21 A A shape steps out of it that is not one of them.
22 A ¶ Marisol lifts the camera.
23 A Her hands don't shake.
24 A She presses record.
25 A ¶ Liam drops the keys.
26 A They ring on the floor like a bell.
27 A ¶ The light dies.
28 T CUT TO BLACK.

### SCENE s01348 | EXT. THE GLASSMAKERS' STAIRCASE - DAWN
Detected names (may be incomplete or contain aliases): ILSE MARROW, WYNNE ASHCROFT
1 A ¶ A staircase cut into a cliff of black obsidian, spiraling up toward a cloud-wrapped citadel.
2 A Each step is a slab of blown glass, translucent green, filled with drifting bubbles.
3 A Below, a mist-choked valley.
4 A Above, nothing.
5 A ¶ ILSE MARROW, 30s, climbs with a glass lantern slung from her pack, the glow shifting violet in the cold.
6 A Her cloak is the color of dried lavender; her boots are taped at the heel; a long scar runs along her jaw.
7 A Three steps behind her follows WYNNE ASHCROFT, 30s, pale and spare, with a crooked staff of white ash and the patient eyes of someone who has outlasted several wars.
8 D ILSE: They said it would take a day.
9 D WYNNE: They said a lot of things about the stair.
10 D ILSE: It sings.
11 D WYNNE: It does that when it wants to be crossed.
12 A ¶ Under Ilse's boot, a step chimes like a crystal glass.
13 A She pauses.
14 A Wynne pauses.
15 A A bubble drifts through the glass and bursts.
16 D ILSE: Did she come this way?
17 D WYNNE: She came this way.
18 D ILSE: Did she come back?
19 D WYNNE: She didn't say.
20 A ¶ Ilse climbs again.
21 A The stair rings with each step, a soft cascade of notes.
22 A The sky above lightens.
23 A Clouds tear.
24 A A flock of silver birds pours across the gap.
25 D ILSE: Wynne. You do not have to follow.
26 D WYNNE: I know.
27 D ILSE: She is your sister.
28 D WYNNE: She is your mother.
29 A ¶ Ilse stops.
30 A The next stair is cracked down the middle.
31 A Beneath it, the valley yawns.
32 A She places her foot on it.
33 A It holds.
34 D ILSE: Then we are both followers.
35 A ¶ Wynne smiles.
36 A She taps the staff against the glass, and the whole stair hums like a harp, once, twice, a third time.

### SCENE s01536 | INT. OFFSHORE OIL RIG CONTROL ROOM - NIGHT
Detected names (may be incomplete or contain aliases): TOBIAS HALVORSEN-ABIOLA, ROSIE, ENGSTROM, COMMS
1 A ¶ A bank of dim monitors.
2 A Rain hammers the porthole.
3 A A kettle on a hotplate.
4 A The structure creaks.
5 A ¶ TOBIAS HALVORSEN-ABIOLA, 40s, rig supervisor, in a grease-stained coverall, reads a gauge.
6 A His thumbnail taps the glass.
7 A The needle isn't moving.
8 A ¶ At the next console, ROSALIE "ROSIE" ENGSTROM, 20s, hard hat on the back of her head, logs numbers on a clipboard.
9 A She hums under her breath.
10 D TOBIAS: Rosie. Pressure on well three.
11 D ROSIE: Steady at four-ten.
12 D TOBIAS: It was four-twenty an hour ago.
13 D ROSIE: Sensor drift. It does that.
14 D TOBIAS: Does it?
15 D ROSIE: Sometimes.
16 A ¶ He crosses to her console.
17 A Looks over her shoulder.
18 A She tilts the clipboard toward him.
19 D TOBIAS: Your numbers say four-ten for six hours.
20 D ROSIE: Because it's been four-ten for six hours.
21 D TOBIAS: And the live gauge?
22 A ¶ She looks at the screen.
23 A Her humming stops.
24 D ROSIE: Four-oh-five.
25 D TOBIAS: Four-oh-five.
26 D ROSIE: It's within tolerance.
27 D TOBIAS: Is it?
28 D COMMS [V.O.] (crackling): Control, this is Deck Two. We have a smell down here. Over.
29 A ¶ Tobias lifts the handset from its cradle.
30 D TOBIAS: What kind of smell, Deck Two?
31 D COMMS [V.O.]: Like eggs, Toby. Like rotten eggs. Over.
32 A ¶ Tobias freezes.
33 A Rosie sets the clipboard down very slowly.
34 D ROSIE: Hydrogen sulphide.
35 D TOBIAS: Don't say it.
36 D ROSIE: Toby, that's--
37 D TOBIAS: I know what it is. Don't say it out loud.
38 A ¶ He thumbs the handset.
39 D TOBIAS [CONT'D]: Deck Two, evacuate your station. Use the breathing apparatus. Do not run.
40 D COMMS [V.O.]: Copy. Evacuating. Over.
41 A ¶ He hangs up.
42 A Turns.
43 A Rosie is already at the alarm panel, hand over the glass.
44 D ROSIE: Do I pull it?
45 D TOBIAS: Not yet.
46 D ROSIE: Toby!
47 D TOBIAS: If we pull it, a hundred and twenty men run for the lifeboats, and the lifeboats take sixty.
48 D ROSIE: Then we do it in order.
49 D TOBIAS: In order.
50 A ¶ He steps to the wall mic.
51 A Takes a breath that shakes only a little.
52 D TOBIAS [CONT'D] (into the mic): All hands, this is Halvorsen. We have a gas alert on Deck Two. Muster at stations. Walk, do not run. Repeat, walk.
53 A ¶ A distant clang.
54 A Boots on steel.
55 A Voices rising.
56 D ROSIE: You said "walk."
57 D TOBIAS: They'll walk fast.
58 D ROSIE: Toby, the gauge.
59 A ¶ He looks.
60 A The needle on well three leaps, quivers, and plunges.
61 D TOBIAS: Pull it.
62 A ¶ She smashes the glass and pulls the lever.
63 A ¶ Sirens howl through the whole structure.
64 A The lights go red.
65 D TOBIAS [CONT'D] (not loud, to himself): Please let the lines hold.
66 D ROSIE: They'll hold.
67 D TOBIAS: How do you know?
68 D ROSIE: Because I checked them this morning.
69 A ¶ He closes his eyes for one second.
70 A Opens them.
71 A Grabs the clipboard, her pen, her sleeve.
72 D TOBIAS: Come on.
73 A ¶ They run into the red corridor.

### SCENE s00690 | INT. MARLOW FARMHOUSE - KITCHEN - EARLY MORNING
Detected names (may be incomplete or contain aliases): CONSTANCE, HATTIE, WALTER
1 A ¶ A cold stove.
2 A A table with three mismatched chairs.
3 A A single teacup, unwashed, on the sill.
4 A ¶ CONSTANCE, 40s, stands at the sink with her coat still buttoned.
5 A She does not turn on the tap.
6 A Her sister HATTIE, 30s, enters from the hall in a nightgown and bare feet, hugging her elbows.
7 A At the table, WALTER, 70s, their father, sits upright in his Sunday collar, a folded newspaper in front of him that he has not opened.
8 A ¶ She watches the back of her sister's head.
9 A She says nothing.
10 A Hattie crosses to the stove, strikes a match, and stands holding it until the flame reaches her fingers.
11 D CONSTANCE: You'll burn yourself.
12 D HATTIE: I know.
13 A ¶ She shakes it out.
14 A The smoke curls toward the ceiling.
15 D WALTER: Sit down, both of you.
16 A ¶ Neither sits.
17 A Constance finally turns on the tap, and the water runs over a plate she isn't washing.
18 D HATTIE: She came back last night.
19 D CONSTANCE: Who did?
20 D HATTIE: You know who.
21 A ¶ Walter unfolds the paper, folds it again, smoother this time.
22 A He sets it square on the table.
23 D WALTER: Your mother is in the churchyard. We buried her Tuesday.
24 A ¶ She does not look at him.
25 A She keeps her eyes on her sister's hands, shaking now, the matchbox rattling in them.
26 A Hattie slides it across the counter, away from herself, toward the sink.
27 D CONSTANCE (turning off the tap): Take that outside.
28 D HATTIE: Why?
29 D CONSTANCE: Because Father is looking at it.
30 A ¶ Walter is.
31 A He is looking at the matchbox as if it were an animal.
32 A Slowly he reaches out and lays his big, spotted hand over it.
33 A Neither daughter moves.
34 A Outside, a rooster crows, late.

### SCENE s01838 | EXT. LAKESIDE BOATHOUSE - DUSK
Detected names (may be incomplete or contain aliases): TEDDY, LUND, ARMAND BELLWETHER, CORINNE
1 A ¶ A weathered boathouse leaning over green water.
2 A Paper lanterns hang from the rafters, half of them unlit.
3 A A phonograph on an upturned crate turns a record, scratchy and slow.
4 A ¶ THEODORA "TEDDY" LUND, 30s, in a yellow dress that has seen better summers, sits on the dock with her feet in the water.
5 A Next to her, ARMAND BELLWETHER, 30s, a rower's shoulders under a rumpled linen shirt, holds two glasses and a bottle without a label.
6 A Behind them on the boathouse porch stand her sister CORINNE, 40s, arms folded, and Armand's father OLD MR. BELLWETHER, 70s, in a cardigan, who has said nothing since they arrived.
7 D TEDDY: Armand, you're going to drop it.
8 D ARMAND: I'm not going to drop it.
9 D TEDDY: You're holding it like a baby.
10 D ARMAND: A baby wouldn't have a cork.
11 D CORINNE: Teddy. Dinner.
12 D TEDDY: In a minute, Cor.
13 D CORINNE: You said that an hour ago.
14 D TEDDY: I meant it then too.
15 A ¶ Armand pours.
16 A The wine is pale.
17 A They clink.
18 A Old Mr. Bellwether coughs once and turns toward the water.
19 D ARMAND: Father, you want some?
20 D OLD MR. BELLWETHER: I want to know why my son is sitting on a dock in a good shirt.
21 D ARMAND: Because I've been meaning to ask her something.
22 D TEDDY (smiling): Then ask.
23 A ¶ He sets his glass down.
24 A A dragonfly lands on its rim.
25 A Corinne's arms unfold.

### SCENE s02036 | EXT. FROZEN LAKE - WHITEOUT - DAY
Detected names (may be incomplete or contain aliases): ASHER VANTERPOOL, RANGER
1 A ¶ Wind.
2 A Nothing but wind and white.
3 A A lone figure kneels on a sheet of gray ice around a hole cut with a hand auger.
4 A ¶ ASHER VANTERPOOL (30s, parka crusted with frost, one glove missing) hauls a line.
5 A He wedges his heels against the ice.
6 A A walkie-talkie sits by his knee, crackling.
7 D RANGER [V.O.] (broken, windy): ...lake team...do you...ice thinning...south shore...
8 A ¶ Asher grabs the walkie.
9 A Does not answer.
10 A Lets it fall back onto the ice.
11 D RANGER [V.O., CONT'D]: ...move...north...now...
12 A ¶ The line goes taut.
13 A Something enormous tugs.
14 A He hauls.
15 A Ice groans.
16 A A hairline crack races outward from the hole.
17 A ¶ He keeps pulling.
18 D ASHER (under his breath): Come on.
19 D RANGER [V.O.]: ...Asher...do you copy...
20 D ASHER: Not yet.
21 A ¶ The crack widens.
22 A His boots slide.
23 A He braces.
24 A Pulls.
25 A ¶ The fish breaks the surface: a gray, glistening length of lake trout, fat as a man's thigh.
26 A It flops on the ice.
27 A ¶ He stares at it.
28 A Takes his bare hand and presses it to the cold flank, once, gently.
29 A Then he cuts the line, lifts the trout against his chest like something fragile, and stands.
30 A ¶ The ice groans again, deeper.
31 A He picks up the walkie.
32 D ASHER [CONT'D] (into radio): Heading north.
33 A ¶ He walks.

### SCENE s01614 | EXT. ROOFTOP WATER TANK - SUNSET
Detected names (may be incomplete or contain aliases): MO, JOHNSON, GABBY, ORTEGA-NG, SI, DELACROIX-ODUYA
1 A ¶ A battered rooftop, tar-papered and patched.
2 A A wooden water tank on stilts casts a long shadow.
3 A Pigeons coo.
4 A Beyond the parapet, the city glows orange.
5 A ¶ Three teenagers sit with their legs hanging over the edge: MALIK "MO" JOHNSON (17, backwards cap), GABRIELA "GABBY" ORTEGA-NG (16, cut-off jean jacket), and SIMON "SI" DELACROIX-ODUYA (17, oversized glasses, a handheld camera).
6 D MO: So that's it. Last summer.
7 D GABBY: It's not the last summer.
8 D MO: It's the last summer we're all in the same city.
9 D SI: You don't know that.
10 D MO: Gabby's going to Toronto.
11 D GABBY: Maybe.
12 D MO: You got the letter.
13 D GABBY: I got a letter.
14 D SI: What did it say?
15 D GABBY: It said yes.
16 D MO: Then it's Toronto.
17 D GABBY: It's a maybe, Mo.
18 D SI (filming): Say it again for the camera.
19 D GABBY: Si, turn that off.
20 D SI: It's my documentary.
21 D GABBY: It's my life.
22 D SI (lowering the camera): Sorry.
23 D MO: You could stay.
24 D GABBY: And do what?
25 D MO: Same as always.
26 D GABBY: That's the problem.
27 A ¶ A long beat.
28 A A pigeon lands on the tank, bobs its head, flies away.
29 D SI: I got into film school.
30 D MO: You what?
31 D SI: In L.A. I haven't told my parents.
32 D MO: Si! That's huge!
33 D SI: It's a thousand miles away.
34 D GABBY: So is Toronto.
35 D MO: So you're both leaving.
36 D SI: I didn't say that.
37 D GABBY: You did.
38 D SI: I said I got in.
39 D MO: What about me?
40 D GABBY: What about you?
41 D MO: I'm not going anywhere.
42 D SI: You could.
43 D MO: To where?
44 D GABBY: Anywhere.
45 D MO: I don't want anywhere. I want here.
46 D SI: Here is changing, Mo.
47 D MO: Here is fine.
48 D GABBY: Here is a rooftop.
49 D MO: It's a good rooftop.
50 A ¶ They laugh, thin and tired.
51 A The sun slides lower.
52 A Their shadows stretch across the tar.
53 D SI: Let's film the sunset.
54 D GABBY: Then it's real.
55 D SI: It's already real.
56 D MO: Do it.
57 A ¶ Si lifts the camera.
58 A Pans across the skyline.
59 A Settles on the two of them.
60 D SI: Say something. For the archive.
61 D GABBY: Hi. We were here.
62 D MO (softly): We were here.
63 A ¶ The sun touches the horizon.
64 A The camera keeps rolling.

### SCENE s00128 | INT. CURLING CLUB - DAWN
Detected names (may be incomplete or contain aliases): COACH GREER WALLENBERG, STRANGER, MARGIT
1 A ¶ Empty ice, grey-blue under the rafters.
2 A A frost-fogged scoreboard.
3 A COACH GREER WALLENBERG, 50s, thermos in hand, walks the sheet checking pebble, shoulders tight, a man with a final tomorrow.
4 A ¶ A STRANGER stands at the rail, an elderly woman in a green scarf, hands tucked in her sleeves.
5 A She has slipped in out of the cold.
6 A ¶ He sees her.
7 A He stops.
8 D GREER: Rink's closed, ma'am.
9 D STRANGER: So is the door you came through.
10 A ¶ He glances back.
11 A It is.
12 A He turns again, wary, and she steps onto the ice in soft shoes, steady as if she has done it all her life.
13 D GREER: Who let you in?
14 D STRANGER: Nobody. I'm just early.
15 A ¶ She stops beside a stone and nudges it with her toe.
16 A He bristles.
17 D GREER: That's the championship stone.
18 D STRANGER: It pulls left. You know it does.
19 A ¶ He says nothing.
20 A She smiles.
21 D STRANGER [CONT'D]: Margit Lindqvist. I won this club's first trophy in 1961.
22 D GREER: Greer. I coach the rink that wants the next one.
23 D MARGIT: Then listen, Greer. You grind that stone on the left side, and your girls will thank you tomorrow.
24 A ¶ He stares at her, then at the stone.
25 A He crouches, runs a thumb along the running band.
26 A A burr.
27 A Small.
28 A Real.
29 D GREER: How did you know?
30 D MARGIT: It pulled left in 1961, too.
31 A ¶ He looks up.
32 A She has already turned for the door, scarf trailing, leaving a line of small wet prints on the ice.

### SCENE s01407 | INT. VICTORIAN SEANCE PARLOR - NIGHT
Detected names (may be incomplete or contain aliases): MADAME ODILE FONTAINE-VANCE, ALISTAIR DRAKE, PRUDENCE MILLWARD, VOICE
1 A ¶ Velvet drapes, a round table, a crystal ball veiled in black gauze.
2 A A single candle gutters.
3 A Rain taps the windows.
4 A ¶ MADAME ODILE FONTAINE-VANCE, 50s, turban and shawl, sits with her palms flat on the table, eyes closed.
5 A Across from her, ALISTAIR DRAKE, 40s, widower, grips the edge of his chair.
6 A And in the corner, her assistant, a nervous girl of twenty, PRUDENCE MILLWARD, tends a hidden gramophone.
7 D ODILE: Spirits of the beyond. We call upon you.
8 A ¶ The candle flickers.
9 A A low moan sounds from beyond the drapes.
10 D ALISTAIR (whispering): Is it her?
11 D ODILE: Hush.
12 A ¶ The moan rises.
13 A The table shudders.
14 A Alistair's knuckles whiten.
15 D VOICE [V.O.] (hollow, distant): Alistair...
16 A ¶ He gasps.
17 A Half rises.
18 D ALISTAIR: Margaret?
19 D VOICE [V.O.] (hollow, distant): I am here, my love.
20 A ¶ Prudence, in the corner, goes pale.
21 A She mouths at Odile, shaking her head.
22 A Not me.
23 A Odile's eyes snap open.
24 A She stares at the gramophone, which is silent.
25 A ¶ The voice comes again, deeper, nearer.
26 D VOICE [V.O.] (hollow, distant): Tell the fraud to stop.
27 A ¶ Odile's hands fly from the table.
28 A Prudence knocks over her stool.
29 D ALISTAIR (slowly): That's not funny, Madame.
30 D ODILE: It is not me.
31 A ¶ The candle blows out.
32 A Darkness.
33 A Somewhere a window bangs open, and the drapes snap like sails.

### SCENE s00794 | INT. EMPTY COURTROOM - EVENING
Detected names (may be incomplete or contain aliases): ALISTAIR VAN TONGEREN, ROXANNE KIPCHOGE
1 A ¶ Rows of oak benches.
2 A The jury box sits dark.
3 A A single banker's lamp glows on the bench.
4 A ¶ ALISTAIR VAN TONGEREN, 50s, prosecutor, rehearses before the empty jury box, one hand on the rail.
5 A ROXANNE KIPCHOGE, 40s, defense counsel, sits in the gallery eating sunflower seeds from a paper cone.
6 A She does not interrupt.
7 D ALISTAIR: Ladies and gentlemen of the jury.
8 A ¶ He pauses to let them settle.
9 A No one is there.
10 A He lets them settle anyway.
11 D ALISTAIR [CONT'D]: You will hear that my opponent's client is a good man. A family man. A man who coaches Little League.
12 A ¶ Roxanne cracks a seed.
13 D ROXANNE (to herself): Twelve years.
14 D ALISTAIR (not turning): You're not allowed to heckle the dress rehearsal.
15 D ROXANNE: I'm not heckling. I'm counting.
16 A ¶ He turns.
17 A Leans against the rail.
18 D ALISTAIR: You're early.
19 D ROXANNE: So are you.
20 D ALISTAIR: I'm an early man.
21 D ROXANNE: You're a nervous man.
22 A ¶ Alistair straightens his tie.
23 A Looks at the empty seats.
24 D ALISTAIR: Ladies and gentlemen. The evidence will show...
25 D ROXANNE (over him): The evidence will show a boy with a wrench and a bad alibi.
26 D ALISTAIR: Roxanne.
27 D ROXANNE: Alistair.
28 A ¶ Silence.
29 A She drops the cone.
30 A Stands.
31 D ROXANNE [CONT'D]: My client didn't do it.
32 D ALISTAIR: Then prove it.
33 D ROXANNE: That's your job to disprove, remember?
34 D ALISTAIR (under his breath): God help us both.
35 A ¶ He gathers his notes.
36 A She walks to the defense table and sits.
37 A He sits at the prosecution's.
38 A The lamp hums between them.

### SCENE s01651 | INT. DECOMMISSIONED SUBMARINE, CORPORATE RETREAT - DAY
Detected names (may be incomplete or contain aliases): BRANDEN, KIMBERLEIGH, DEVONTE, PRUNELLA, GUNNAR
1 A ¶ A cramped steel corridor.
2 A Pipes.
3 A Condensation.
4 A A banner: SYNERGY AT DEPTH.
5 A ¶ BRANDEN, 40s, a regional director in a fleece vest, holds a clipboard.
6 A KIMBERLEIGH, 30s, in a pastel blazer, adjusts her lanyard.
7 A DEVONTE, 20s, an intern, hugs a thermos.
8 A PRUNELLA, 50s, finance, stares at a pressure gauge.
9 A GUNNAR, 60s, the museum guide, leans against a torpedo tube.
10 D BRANDEN: Team! Gather round!
11 A ¶ Nobody moves.
12 A There's nowhere to gather.
13 D KIMBERLEIGH: Branden, there are five of us.
14 D BRANDEN: Five is a team.
15 D DEVONTE: Is that gauge supposed to be on red?
16 D PRUNELLA: It's a museum. Nothing is supposed to be anything.
17 D GUNNAR: That gauge hasn't worked since 1974.
18 D BRANDEN: Great. Ice-breaker. Everybody say one word that describes our Q3.
19 D KIMBERLEIGH: Dynamic.
20 D DEVONTE: Damp.
21 D PRUNELLA: Overdue.
22 D GUNNAR: Submerged.
23 D BRANDEN: Beautiful. Mine is "Lean."
24 D PRUNELLA: Of course it is.
25 D BRANDEN: Next: trust fall.
26 D DEVONTE: Where?
27 D BRANDEN: Backwards. Off the ladder.
28 D GUNNAR: Please don't.
29 D KIMBERLEIGH: Branden, I'd rather do the spreadsheet.
30 D BRANDEN: That's the spirit!
31 A ¶ He climbs the ladder.
32 A Turns.
33 A Falls.
34 A The others do not move.
35 A A very loud clang echoes through the sub.
36 D BRANDEN [CONT'D] (from the floor): Okay. That's on me.

### SCENE s02154 | INT. SUDS & BUBBLES LAUNDROMAT - 3 A.M.
Detected names (may be incomplete or contain aliases): MARISOL VEGA
1 A ¶ Fluorescent hum.
2 A Twelve dryers, one running.
3 A A bulletin board of faded flyers.
4 A Rain on the window.
5 A A broken vending machine glows.
6 A ¶ MARISOL VEGA, 40s, scrubs, tired eyes, sits on a plastic chair with a phone in one hand, a crumpled envelope in the other.
7 A A laundry basket at her feet.
8 A She stares at the tumbling dryer as though it owes her money.
9 A ¶ She sets the phone on her knee.
10 A Taps the screen.
11 A A voice memo plays.
12 D MARISOL [V.O.] (recording, shaky): Hi, Mami. It's me. I know it's late.
13 A ¶ Marisol closes her eyes.
14 D MARISOL [V.O.] (recording): I got the results today. I wanted to tell you in person but I couldn't. I'm sorry.
15 A ¶ She stops the playback.
16 A Opens her eyes.
17 A Looks at the envelope in her hand.
18 A Turns it over.
19 A Turns it back.
20 A She does not open it.
21 D MARISOL (to herself): Open it.
22 A ¶ She doesn't.
23 A ¶ The dryer buzzes.
24 A She stands.
25 A Opens the door.
26 A Pulls out a bundle of warm towels.
27 A Buries her face in them.
28 A Breathes.
29 A ¶ Behind her, the vending machine flickers.
30 A She folds a towel.
31 A Another.
32 A Her hands move fast, as if folding were a prayer she knows by heart.
33 D MARISOL [CONT'D] (to the empty room): Okay.
34 A ¶ She puts the envelope on top of the stack.
35 A Presses the stack flat with both hands.
36 A Stands there, shoulders high, not breathing, until the dryer clicks off.
37 A ¶ She picks up the phone.
38 A Taps the screen.
39 A Holds it to her ear.
40 D MARISOL [V.O.] (recording, shaky): I love you, Mami.
41 A ¶ Marisol presses a button.
42 A The recording starts over.

### SCENE s01356 | EXT. SHELL CRATER, NO MAN'S LAND - DAWN
Detected names (may be incomplete or contain aliases): SERGEANT BELL, CORPORAL NIKOS, PRIVATE SANDOVAL, PRISONER, HARGROVE, ANDERS
1 A ¶ Mud.
2 A Barbed wire.
3 A A dead tree.
4 A ¶ Five soldiers crouch in the crater.
5 A SERGEANT BELL, 40s.
6 A CORPORAL NIKOS, 20s.
7 A PRIVATE HARGROVE, 18.
8 A PRIVATE SANDOVAL, 30s.
9 A And a man in a different uniform, face down in the mud, with a bandaged shoulder: a PRISONER.
10 A ¶ Nikos shakes the Prisoner awake.
11 D BELL: Name?
12 D PRISONER: Anders.
13 D BELL: Rank?
14 D PRISONER: Nothing. I carried the bread.
15 A ¶ Hargrove laughs.
16 A Sandoval shushes him.
17 A Shells whistle overhead.
18 D NIKOS: Sarge, he's lying.
19 D BELL: He's hungry.
20 A ¶ Bell tosses him a hardtack.
21 A The Prisoner eats.
22 D HARGROVE: He's our enemy, Sarge.
23 D BELL: Anders is his name.
24 D ANDERS: Thank you.
25 A ¶ A whistle.
26 A Everyone ducks.
27 A The shell lands thirty yards away.
28 A Mud rains down.
29 A Anders crawls toward Hargrove and covers the boy's helmet with both hands.
30 D SANDOVAL (to Bell): Sarge, he saved the kid.
31 D BELL: Anders. Stay close.

### SCENE s00550 | INT. MUSEUM OF LOCKS AND KEYS - GALLERY OF CURIOSITIES - NIGHT
Detected names (may be incomplete or contain aliases): CLEO ANTONOPOULOS, BARNABY SOUTHWORTH, GUARD ENOCH BALOGUN
1 A ¶ Glass cases glow under museum spots.
2 A Padlocks shaped like hearts, a chastity belt, a Houdini handcuff, a Chubb detector from 1818.
3 A The marble floor is clean enough to eat from.
4 A ¶ CLEO ANTONOPOULOS, 30s, in a cleaner's grey uniform, pushes a mop bucket along the aisle.
5 A Slow.
6 A Humming.
7 A Wringing the mop, slopping water.
8 A At the far end of the gallery a vault door waits, painted gold.
9 A Fake.
10 A Almost.
11 A ¶ BARNABY SOUTHWORTH, 50s, the curator, in a cardigan and bow tie, sits at the security desk with a crossword.
12 A He is happy.
13 A The room is quiet.
14 A A radio plays softly.
15 D BARNABY: Seven letters. "Opener of doors."
16 D CLEO: Key?
17 D BARNABY: Too short.
18 D CLEO: Skeleton?
19 D BARNABY: Nine.
20 D CLEO: Master.
21 D BARNABY: Six.
22 A ¶ Cleo smiles.
23 A Wrings the mop.
24 A Water pools near a floor drain by the case of antique keys.
25 D BARNABY [CONT'D]: You're very diligent, Cleo.
26 D CLEO: It's a good floor.
27 D BARNABY: Most of the staff would've gone home.
28 D CLEO: Most of the staff aren't paid by the hour.
29 A ¶ He laughs.
30 A She pushes the bucket another yard.
31 A The wheels squeak.
32 A He doesn't look up.
33 A She taps a button on the handle of the mop.
34 A A quiet click.
35 A ¶ The security camera in the corner swivels, slow, until it faces the wall.
36 D BARNABY (still filling the crossword): "Skeleton" doesn't fit, does it?
37 D CLEO: No.
38 D BARNABY: Well, I'm stuck.
39 D CLEO: I'll help.
40 A ¶ She sets down the mop.
41 A Walks to the golden vault door and, from her bucket, produces a stethoscope and a small brass pick.
42 A She presses her ear to the cold gold.
43 A Turns a tumbler.
44 A Another.
45 A ¶ GUARD ENOCH BALOGUN, 40s, a thick neck and a creaking belt, rounds the corner with a flashlight, whistling.
46 A He stops.
47 A Looks at Cleo.
48 A Looks at the open bucket.
49 A Looks at the camera facing the wall.
50 D ENOCH: Ma'am.
51 D CLEO (without turning): Evening, Enoch.
52 D ENOCH: That's not on the schedule.
53 D CLEO: No.
54 A ¶ Barnaby finally looks up, sees the guard, sees Cleo, sees the pick.
55 A His pencil stops.
56 D BARNABY: Oh, dear.
57 A ¶ Enoch's hand drifts toward his radio.
58 A Cleo's hand does not leave the vault.
59 A Tumbler clicks.
60 A A heavy thunk.
61 D CLEO: Enoch. Put the radio down.
62 D ENOCH: Ma'am --
63 D CLEO: Please.
64 A ¶ He considers.
65 A The radio comes down.
66 A He steps aside, and with a courtly gesture, motions toward the vault.
67 D ENOCH: After you.
68 A ¶ Cleo pulls.
69 A The door swings open on an empty velvet chamber with a single card: GONE FISHING.
70 A She stares.
71 D BARNABY (softly): Seven letters. "Opener of doors."
72 D ENOCH: Trickster.
73 D BARNABY: Yes, that's it.

### SCENE s02509 | INT. GRAND HOTEL BALLROOM - MASQUERADE - NIGHT - 1961
Detected names (may be incomplete or contain aliases): LADY VERA STANHOPE, MAXIMILIAN VOSS, COLETTE DUPRE, HOBBS, PERCIVAL, ROSARIO ESPINOZA
1 A ¶ Crystal chandeliers.
2 A A twenty-piece orchestra.
3 A Guests in feathered masks spin across a marble floor.
4 A ¶ LADY VERA STANHOPE, 50s, in peacock silk, holds court by the champagne tower.
5 A MAXIMILIAN VOSS, 40s, in a Venetian bauta, waltzes with COLETTE DUPRE, 30s, in a cat mask.
6 A HOBBS, 60s, a butler, balances a tray.
7 A PERCIVAL, 30s, a young footman, stands by the cloakroom.
8 A ROSARIO ESPINOZA, 20s, a waitress, offers canapes.
9 A ¶ All is calm.
10 A Violins swell.
11 A ¶ Lady Vera lifts her glass.
12 A Maximilian dips Colette.
13 A The orchestra hits a crescendo.
14 A The lights flicker once.
15 A ¶ The chandeliers go dark.
16 A Gasps.
17 A A single beam of moonlight from the skylight falls on Lady Vera's neck.
18 A Her diamond necklace is gone.
19 D LADY VERA: My necklace!
20 A ¶ Everyone freezes.
21 A Maximilian lets Colette fall.
22 A Hobbs drops the tray.
23 A Percival bolts for the door.
24 A Rosario hurls a canape.
25 A It splats against the chandelier.
26 A The lights flick on.
27 A ¶ The necklace dangles from Colette's cat mask like a fish on a hook.
28 A She stands, mask askew, smiling.
29 D COLETTE: Evening, Aunt Vera.

### SCENE s01305 | INT. LUNAR ELEVATOR - CAR 4 - CONTINUOUS
Detected names (may be incomplete or contain aliases): CAPTAIN IRENE VOSS, TAMSIN OKORO
1 A ¶ A narrow steel cabin, ribbed with cable housing, one round window.
2 A Earth hangs beyond it, impossibly bright.
3 A Warning lights pulse amber.
4 A ¶ CAPTAIN IRENE VOSS, 40s, in a pressure suit with the helmet clipped at her hip, braces against the wall with one hand, a tablet in the other.
5 A Her partner TAMSIN OKORO, 30s, in the same suit, hangs from the ceiling rail, trying to rewire a panel with a screwdriver in her teeth.
6 A A bolt snaps.
7 A The car lurches.
8 A Tamsin swings out, catches Irene by the shoulder, and both women slam against the window.
9 A The tablet floats loose.
10 A Irene grabs it.
11 A Tamsin spits out the screwdriver and clamps it to her chest.
12 A The lights go red.
13 D IRENE: Status!
14 D TAMSIN: Cable two's gone. We're on three and four.
15 D IRENE: Can they hold us?
16 D TAMSIN: For nine minutes.
17 D IRENE (to herself): Nine minutes.
18 D TAMSIN: Eight and a half.
19 D IRENE: Everyone in the cabin, seat belts!
20 D TAMSIN: There's only you and me.
21 D IRENE: I know. It's a figure of speech.
22 A ¶ A thunk.
23 A A groan from the housing.
24 A Then a soft chime.
25 A The lights return to amber.
26 A The car steadies.
27 A ¶ They stare at each other.
28 A Tamsin starts to laugh.
29 A Irene joins her.
30 A They drift apart in the microgravity, still laughing, still holding hands.

### SCENE s01302 | INT. FUNERAL PARLOUR - SIDE ROOM - DAY
Detected names (may be incomplete or contain aliases): DOROTHY WAKEFIELD, VICTOR WAKEFIELD, TABITHA CROWE, LEONTYNE BASS, FATHER OSWALD QUINN
1 A ¶ Tapestried chairs.
2 A A sideboard of sherry glasses.
3 A Five people stand in a half circle around a closed casket.
4 A ¶ DOROTHY WAKEFIELD, 70s, the widow.
5 A VICTOR WAKEFIELD, 40s, her son.
6 A TABITHA CROWE, 30s, the nurse.
7 A LEONTYNE BASS, 50s, the lawyer.
8 A FATHER OSWALD QUINN, 60s, the priest.
9 D DOROTHY: He didn't fall.
10 D VICTOR: Mother.
11 D DOROTHY: He didn't fall, Victor. He was pushed.
12 D TABITHA: Mrs. Wakefield, the coroner said--
13 D DOROTHY: The coroner said what he was paid to say.
14 D LEONTYNE: Dorothy, I advise you not to make accusations in front of witnesses.
15 D DOROTHY: Witnesses to what? Five people, one dead man, and a staircase.
16 D FATHER QUINN: Dorothy, grief makes a person see monsters.
17 D DOROTHY: Father, forty years I have heard you talk of mercy. Tell me, where was mercy at two in the morning on Sunday?
18 D VICTOR: I was home.
19 D TABITHA: I was on shift.
20 D LEONTYNE: I was at my club.
21 D FATHER QUINN: I was at prayers.
22 D DOROTHY: And I was asleep. So who was it?
23 A ¶ Silence.
24 A The clock ticks.
25 A A sherry glass trembles on the sideboard.
26 D TABITHA (very quietly): He called me at one-forty. Said he'd heard someone in the house.
27 D VICTOR: You never told us.
28 D TABITHA: I didn't think it mattered.
29 D DOROTHY: Who did he say it was?
30 D TABITHA: He said it was someone from this room.

### SCENE s02384 | INT. ROLLER RINK - 2 A.M.
Detected names (may be incomplete or contain aliases): DANI, KOFI, MEI, RAFA, LAZLO, DJ
1 A ¶ Disco ball dead.
2 A Floor lights low.
3 A Speakers hiss.
4 A ¶ DANI, seventeen, laces her skates on the carpeted bench.
5 A Beside her, KOFI sits with his helmet in his lap.
6 A MEI leans on the rail, chewing a straw.
7 A RAFA, the baby of the group, sits cross-legged on the floor.
8 A ¶ She stands.
9 A Wobbles.
10 A He catches her elbow.
11 D DANI: Don't.
12 D KOFI: I'm not.
13 A ¶ He lets go.
14 A She rolls out onto the maple.
15 A Slow.
16 A Steady.
17 A Then faster.
18 D MEI (to the others): We're not supposed to be here.
19 D RAFA: The door was open.
20 D MEI: Doors open when you break them.
21 A ¶ Dani circles the rink and spins.
22 A Her arms go wide.
23 A For a moment she's lit by the red EXIT sign alone.
24 A ¶ A light snaps on in the booth.
25 A A hand slams a switch.
26 A The music blares: a polka.
27 A ¶ MR. LAZLO, seventies, in a bathrobe and a rink-guard jacket, lumbers out of the DJ booth.
28 A He holds a bat.
29 D LAZLO: Who's closing this place?
30 D DANI: Nobody, sir.
31 D LAZLO: Then who's skating?
32 A ¶ Kofi raises a hand.
33 A Mei raises a hand.
34 A Rafa, after a beat, raises both.
35 D LAZLO [CONT'D] (lowering the bat): Eight dollars a head. Cash.

### SCENE s01556_0 | EXT. HOMESTEAD - DAWN
Detected names (may be incomplete or contain aliases): NELL TREMAINE-ADEYEMI
1 A ¶ A sod house on an empty plain.
2 A Wind combs the grass.
3 A A broken wagon wheel leans against the door.
4 A A lone windmill creaks.
5 A ¶ NELL TREMAINE-ADEYEMI, 40s, stands in the yard in a man's coat and a faded bonnet.
6 A A rifle rests against the fence post beside her.
7 A A saddlebag, half packed, lies in the dirt at her feet.
8 A She does not look at the road.
9 A ¶ She crouches.
10 A Pulls a letter from her pocket.
11 A Smooths it against her knee.
12 D NELL [V.O.] (reading, as if written): "Dear Nell. By the time you read this, I'll be in Cheyenne."
13 A ¶ She lowers the letter.
14 A Looks at the horizon.
15 A Raises it again.
16 D NELL [V.O., CONT'D]: "The claim is yours. The mule, too. I never did like him."
17 A ¶ A small, dry breath, almost a laugh.
18 A She tucks the letter into her coat.
19 A ¶ She stands.
20 A Walks to the well.
21 A Lowers the bucket on its rope.
22 A The rope creaks.
23 A She draws it up slowly, hand over hand, never taking her eyes off the plain.
24 A ¶ Drinks from her cupped palm.
25 A Wipes her chin.

### SCENE s01393 | INT. SAFE HOUSE - BASEMENT - NIGHT
Detected names (may be incomplete or contain aliases): AGENT NADEZHDA KOVACS, LUCIEN BRASSARD, TAVITA SEFO, MARGOT FENWICK, UNKNOWN MALE, HANDLER
1 A ¶ A bare concrete room.
2 A A table, six folding chairs, a bank of dead monitors.
3 A A phone sits in the center on speaker.
4 A ¶ AGENT NADEZHDA KOVACS, 40s, at the head.
5 A LUCIEN BRASSARD, 50s, beside her.
6 A Across, three more: TAVITA SEFO, 30s; MARGOT FENWICK, 60s; and a nervous young man in a stolen hoodie, UNKNOWN MALE, 20s, who has not given a name.
7 D HANDLER [V.O.] (over speaker): Status.
8 D NADEZHDA: All present. The package is secure.
9 D HANDLER [V.O.] (over speaker): Is he talking?
10 D NADEZHDA: Not yet.
11 D HANDLER [V.O.] (over speaker): Make him.
12 A ¶ She mutes the line.
13 A Turns to the young man.
14 D NADEZHDA [CONT'D]: They won't wait much longer. You understand that.
15 D UNKNOWN MALE: I understand I didn't do anything.
16 D LUCIEN: Everyone in this room did something.
17 D UNKNOWN MALE: I drove a car.
18 D MARGOT: To where?
19 D UNKNOWN MALE: A warehouse. Pier nine. I didn't ask what was inside.
20 D TAVITA: Who told you to drive?
21 D UNKNOWN MALE: A guy. Short. Gold tooth.
22 D NADEZHDA: His name?
23 D UNKNOWN MALE: Dmitri. Everybody called him Dmitri.
24 D LUCIEN: Dmitri Volkov.
25 D UNKNOWN MALE: That's him.
26 A ¶ Lucien and Nadezhda exchange a look.
27 A Margot rises and pours water into a paper cup, sets it in front of the boy.
28 D MARGOT: Drink.
29 D TAVITA: Tell us about the pier.
30 D UNKNOWN MALE: There were crates. Eight. Stenciled with a bird.
31 D NADEZHDA: What kind of bird?
32 D UNKNOWN MALE: A heron. No. A crane.
33 D LUCIEN: Crane.
34 D UNKNOWN MALE: And there was a woman.
35 D NADEZHDA: Describe her.
36 D UNKNOWN MALE: Red coat. She never spoke. Dmitri was scared of her.
37 A ¶ The phone crackles.
38 A Nadezhda unmutes.
39 D HANDLER [V.O.] (over speaker): Kovacs. We have a name.
40 D NADEZHDA: Go ahead.
41 D HANDLER [V.O.] (over speaker): The woman in the red coat. Margot Fenwick.
42 A ¶ Silence.
43 A Everyone turns.
44 A ¶ Margot sets down the pitcher.
45 A Folds her hands.
46 A Smiles, almost tenderly.
47 D MARGOT: Oh, dear.

### SCENE s02362 | INT. LIGHTHOUSE LAMP ROOM - STORM - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR HOLLOWAY BRAITHWAITE, KEEPER MARIGOLD FINCH, ANSELM OYEDELE, SISTER CORDELIA, DESDEMONA QUILL, COASTGUARD
1 A ¶ A circular room of glass and brass.
2 A The great lens turns slowly, throwing beams across black water.
3 A Rain slaps the windows.
4 A Five people crowd the narrow gallery, wet coats steaming.
5 A ¶ INSPECTOR HOLLOWAY BRAITHWAITE, 50s, trench coat, notebook, studies the room.
6 A KEEPER MARIGOLD FINCH, 60s, grips a lantern.
7 A DR. ANSELM OYEDELE, 40s, holds a medical bag.
8 A SISTER CORDELIA, 30s, fingers a rosary.
9 A And the boat captain, DESDEMONA QUILL, 50s, arms folded by the stairs.
10 A ¶ A body lies under a tarp at the center of the floor.
11 D BRAITHWAITE (to the room): Nobody leaves until I say.
12 D QUILL: The tide says otherwise.
13 D BRAITHWAITE: Then the tide can wait.
14 D FINCH (muttering): Fourteen years and not one drowned. Now this.
15 D OYEDELE (to Braithwaite): He wasn't drowned.
16 D BRAITHWAITE: How do you know?
17 D OYEDELE: Because there's no water in his lungs.
18 A ¶ A beat.
19 A The lens beam sweeps across the faces, one by one.
20 D CORDELIA (to herself): I saw nothing.
21 A ¶ A radio on the wall crackles.
22 D COASTGUARD [V.O.] (over radio, thin): Lighthouse, this is Coastguard. Storm has closed the channel. Repeat, no boats until dawn.
23 D BRAITHWAITE (to the radio): Understood. Hold position.
24 D COASTGUARD [V.O.] (over radio): Is anyone injured?
25 D BRAITHWAITE (glancing at the tarp): Not anymore.
26 A ¶ He switches off the radio.
27 A The beam sweeps again.
28 A This time he is watching Finch.
29 D BRAITHWAITE [CONT'D] (to the whole room): I'll ask once. Who was at the lamp when it went dark?
30 A ¶ Nobody answers.
31 A Then, far above, the lens stops turning.

### SCENE s01250 | INT. UNDERTAKER'S PARLOUR - BACK ROOM - NIGHT - 1927
Detected names (may be incomplete or contain aliases): MAUDE PELLETIER, CYRIL OSGOOD, OTTOLINE VANTERPOOL, BRAM HOLLIDAY, STRANGER, NOLAN, ^NOLAN
1 A ¶ Behind a velvet curtain, a secret card game.
2 A Six coffins stand in a row against the wall, lids propped open as stools.
3 A A card table in the middle.
4 A Smoke hangs under a green-shaded lamp.
5 A A gramophone plays a tinny foxtrot.
6 A ¶ MAUDE PELLETIER (50s, owner, black bombazine, rings on every finger) deals cards with a flick of her wrist.
7 A ¶ CYRIL OSGOOD (30s, bookkeeper, spectacles, sweat on his lip) arranges his hand in a fan.
8 A ¶ OTTOLINE VANTERPOOL (20s, flapper, fur collar, cigarette holder) leans back in a coffin as if it were a chaise longue.
9 A ¶ BRAM HOLLIDAY (40s, bootlegger, pinstripes, a pistol bulge under his arm) drinks gin out of a tin funeral urn.
10 A ¶ The curtain parts.
11 A A man in a rain-soaked fedora steps through.
12 A A STRANGER (30s, slim, quiet, hands in his pockets).
13 D MAUDE: We're closed, mister.
14 D STRANGER: The door said open.
15 D MAUDE: The door says a lot of things.
16 D STRANGER: I heard there was a game.
17 D BRAM: You heard wrong.
18 D OTTOLINE: Oh, let him sit, Bram. He's pretty.
19 D CYRIL (swallowing): Is he police?
20 D STRANGER: No.
21 D BRAM: You'd say that.
22 D STRANGER: I would.
23 A ¶ He takes a seat in the empty coffin, folding his coat over his knees.
24 A Maude deals him in without waiting for permission.
25 A He turns up his cards, studies them, and sets them face-down.
26 D MAUDE: What's your name?
27 D STRANGER: Does it matter?
28 D MAUDE: Everyone who sits here has one.
29 A ¶ Ottoline blows smoke at the lamp.
30 A Cyril clears his throat, drops a chip.
31 A Bram watches the Stranger over the rim of the urn.
32 D STRANGER: Nolan.
33 D MAUDE: Just Nolan?
34 D NOLAN: It's what the boys at the dock call me.
35 A ¶ Bram's urn stops halfway to his mouth.
36 D BRAM: Which dock?
37 D NOLAN: Pier nine.
38 D BRAM: Pier nine's mine.
39 D NOLAN: I know.
40 A ¶ The gramophone needle hits the end of the record and ticks.
41 A Nobody gets up to change it.
42 A Cyril's hand goes to the little pearl-handled derringer in his boot.
43 A He thinks better of it.
44 D OTTOLINE: Oh, I do love a scene.
45 D BRAM: Shut it, Otty.
46 D OTTOLINE: You shut it. I'm having a lovely time.
47 D NOLAN (to the table): Nobody has to get hurt.
48 D MAUDE: Good. I've hurt enough people this week.
49 D BRAM: You think you can walk in here and--
50 D CYRIL: I think we should all calm down--
51 D OTTOLINE: I think he should deal--
52 D MAUDE: Quiet!
53 A ¶ They stop.
54 A Maude lays down the deck.
55 A Slides one coffin lid shut with a bang that makes the lamp swing.
56 D MAUDE [CONT'D] (to Nolan): Say your piece.
57 D NOLAN: Mr. Holliday's been shorting Pier nine for six months. The Chief says the count's off by forty crates.
58 D BRAM: Who's the Chief?
59 D NOLAN: The man whose pier it really is.
60 D BRAM: That's a lie.
61 D ^NOLAN: That's a receipt.
62 A ¶ He lays a folded paper on the felt.
63 A Maude picks it up, scans it, passes it to Cyril.
64 A Cyril reads and goes grey.
65 D CYRIL (whispering): Bram. It's your signature.
66 D BRAM: It's forged.
67 D CYRIL: It's got the thumb.
68 D BRAM: Give me that!
69 A ¶ He lunges.
70 A Chips fly.
71 A The urn clatters off.
72 A Ottoline shrieks with laughter and scrambles backward.
73 A Nolan doesn't move from his coffin.
74 A Bram's pistol is in his hand now, shaking, aimed at Nolan's chest.
75 D MAUDE: Bram, put it down.
76 D BRAM: He's not leaving.
77 D NOLAN: Not through the door, no.
78 A ¶ Bram blinks.
79 A The curtain behind him moves.
80 A A shadow stretches along the wall.
81 A ¶ Maude stands.
82 A Her chair scrapes.
83 D MAUDE: Bram. Behind you.
84 A ¶ He half turns.
85 A Maude's ringed hand takes the pistol out of his grip, neat as a waiter lifting a plate.
86 A She holds it by the barrel.
87 A ¶ The gramophone needle skips.
88 A Silence.
89 D OTTOLINE (delighted): Oh, Maude's the Chief!
90 A ¶ Nolan collects his cards.
91 A Turns them over.
92 A A full house.
93 D NOLAN: Maude. Your deal.
94 D MAUDE (dryly): Of course it is.
95 T FADE OUT.
