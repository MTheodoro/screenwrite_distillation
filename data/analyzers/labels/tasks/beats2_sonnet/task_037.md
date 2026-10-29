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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_sonnet/group_00037.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00456 | EXT. DRAINED COMMUNITY POOL - NIGHT
Detected names (may be incomplete or contain aliases): PAISLEY OKORO-WEST, TIBBY, LUNDGREN, FARRUKH SAIDOV, DEL, ARCEO, LUCA BERNARDI
1 A ¶ An empty concrete basin under a bruised sky.
2 A Chain-link sagging.
3 A Leaves in the deep end.
4 A Graffiti: a faded dolphin.
5 A ¶ Five teenagers perch on the diving board and the ladder rails, passing a flask.
6 A ¶ PAISLEY OKORO-WEST (17, braids, a rolled cigarette behind her ear) dangles upside down from the high rail.
7 A Her cousin TIBERIUS "TIBBY" LUNDGREN (16, glasses, secondhand letterman) lies spread on the board.
8 A Next to him sits FARRUKH SAIDOV (17, soccer shorts), cross-legged.
9 A Below them, in the shallow end, DELPHINE "DEL" ARCEO (18, black nail polish) paces, and LUCA BERNARDI (17, fresh sunburn) leans on the wall.
10 D PAISLEY: Tibby, you're going to fall.
11 D TIBBY: That's the plan.
12 D FARRUKH: Tibby, don't.
13 D DEL: Let him. He's been dramatic all week.
14 D LUCA: Del, relax.
15 D DEL: I'm relaxed, Luca.
16 D PAISLEY: You're pacing a trench.
17 A ¶ Tibby sits up.
18 A The board bounces.
19 A Farrukh grabs the rail.
20 D TIBBY: I got into Michigan.
21 A ¶ The pool goes silent.
22 A Paisley drops from the rail and lands in a crouch.
23 D PAISLEY: Tibby!
24 D FARRUKH: Congratulations, man.
25 D LUCA: That's great.
26 D DEL (flat): Great.
27 A ¶ She lifts the flask and drinks.
28 A Luca watches her.
29 A She hands it to him without looking.
30 D TIBBY: I wasn't going to tell anybody.
31 D DEL: Why not?
32 D TIBBY: Because she'd be like that.
33 A ¶ He jerks his chin at her.
34 A She spins on him.
35 A He holds up both hands.
36 D TIBBY [CONT'D]: Not mean. Just. You know.
37 D PAISLEY: Del, he's allowed to leave.
38 D DEL: I know he is.
39 A ¶ She says it with her back turned.
40 A The sky flickers with distant lightning.
41 A Farrukh slides down from the board.
42 A Luca hands her the flask back.
43 A She takes it, and drinks again.
44 D DEL [CONT'D] (quietly): Save me a spot in the dorm.
45 A ¶ Tibby laughs, and the laugh turns into something else.
46 A Paisley hops onto the board and puts her arm around him.
47 A He leans into her shoulder.
48 A ¶ Farrukh climbs the ladder to the deep end and lowers himself into the dry basin.
49 A The others follow, one by one, until all five sit in the center on the leaf-strewn concrete.
50 D LUCA: So. Michigan.
51 D TIBBY: So. Michigan.
52 A ¶ Thunder rolls.
53 A The first drops of rain hit the bottom of the pool.

### SCENE s02228 | INT. FLOODED PARISH CRYPT - NIGHT
Detected names (may be incomplete or contain aliases): DESSA OYELARAN, BARN, HOLLIS
1 A ¶ Knee-deep black water.
2 A Stone coffins break the surface like islands.
3 A A lantern bobs on a plank.
4 A ¶ DESSA OYELARAN, thirties, soaked, clutches a crowbar.
5 A Beside her, BARNABY "BARN" HOLLIS, forties, a church sexton, grips the lantern with a shaking hand.
6 D BARN: Dessa, don't move.
7 D DESSA: I'm not moving.
8 D BARN: Something touched my leg.
9 D DESSA: That's the plank.
10 D BARN: The plank is under my other leg.
11 A ¶ The water ripples.
12 A Both freeze.
13 A A pale hand rises from the nearest coffin lid, fingers spread, and lowers again.
14 D DESSA: Barn, run.
15 A ¶ They bolt.
16 A The lantern swings.
17 A The water erupts behind them.
18 A A tall, pale shape surges after, its mouth open.
19 A Dessa swings the crowbar and catches it across the jaw.
20 A Barn grabs her sleeve, drags her up the steps.
21 A They tumble through the iron door together and slam it.
22 A ¶ Silence.
23 A Water laps behind the door.
24 D BARN [CONT'D]: Dessa. That was the vicar.
25 D DESSA: Yes, Barn. I know.

### SCENE s02299 | INT. COURTHOUSE STAIRWELL - DAY
Detected names (may be incomplete or contain aliases): ATTORNEY NADIA FAROUQ, DARRELL OKAFOR
1 A ¶ Concrete steps.
2 A A buzzing light.
3 A Muffled voices from above.
4 A ¶ ATTORNEY NADIA FAROUQ, forties, stands against the wall with a briefcase.
5 A Her client, DARRELL OKAFOR, thirty, stands one step below, suit too big at the shoulders.
6 D NADIA: Say the date again.
7 D DARRELL: March fourth.
8 D NADIA: And the time.
9 D DARRELL: Nine-fifteen.
10 A ¶ She nods.
11 A She straightens his tie.
12 A He lets her.
13 A His hand is steady.
14 A Hers is not.
15 A She puts it in her pocket.
16 D NADIA: If they ask about the knife.
17 D DARRELL: I never saw a knife.
18 D NADIA: Good.
19 A ¶ Above them a door opens and closes.
20 A She picks up her briefcase and goes up one step.
21 A He doesn't move.
22 D DARRELL: You believe me?
23 D NADIA: I believe the record.
24 A ¶ She goes up another step.
25 A He follows.

### SCENE s01823 | INT. ORBITAL FERRY AIRLOCK - CONTINUOUS
Detected names (may be incomplete or contain aliases): TECHNICIAN YUSUF BELLAMY, CONTROL, COMMANDER ISOLDE RAINES
1 A ¶ A cramped airlock.
2 A Red warning strip lights pulse on the walls.
3 A ¶ TECHNICIAN YUSUF BELLAMY, 30s, pressure suit, helmet off, bangs on the inner hatch with a gloved fist.
4 D YUSUF: Control, I've got seal failure on lock two. Repeat, seal failure.
5 D CONTROL [V.O.] (over radio): Copy lock two. Do not cycle the outer door.
6 D YUSUF: I'm not cycling anything. Something's cycling it for me.
7 A ¶ The outer door groans a hand's width open.
8 A Air shrieks out.
9 A Yusuf clips his tether to a rail and grabs the manual lever with both hands.
10 A ¶ Behind him, the inner hatch pops.
11 A COMMANDER ISOLDE RAINES, 50s, bare-headed and furious, shoulders in and slaps a patch over the leak in one move.
12 A The shriek stops.
13 A The outer door shudders closed.
14 A ¶ Silence.
15 A Both breathe.
16 D ISOLDE: Stop shouting at the radio.
17 D YUSUF: It was loud.
18 D CONTROL [V.O.]: Lock two, status?
19 D ISOLDE (into her collar): Sealed. Tell maintenance their gasket is a joke.
20 A ¶ She hauls Yusuf upright by the harness.
21 A He laughs, shaky.
22 A She does not.

### SCENE s01371_2 | INT. LIGHTHOUSE COTTAGE - KITCHEN - CONTINUOUS
Detected names (may be incomplete or contain aliases): PENNY, FATHER
1 A ¶ Penny grabs the radio and presses the button.
2 D PENNY: Papa! I'm here! Somebody came! Mister Tully rowed over and he's all wet!
3 A ¶ Static.
4 A Then the father's voice, tight.
5 D FATHER [V.O.] (over radio): Who?
6 D PENNY: Mister Tully. From Skerry Point. He knew about the salt.
7 A ¶ A long pause.
8 A The storm howls.
9 D FATHER [V.O.] (over radio): Penny. Ezra Tully died in March.
10 A ¶ Penny turns, slowly.
11 A Ezra stands in the doorway, smiling gently.
12 A The water dripping from his coat makes no sound on the floor.
13 A ¶ The lantern in her hand goes out.
14 D PENNY (barely a whisper): Papa?
15 D FATHER [V.O.] (over radio): Stay where you are. Keep the lamp turning. I'm coming.
16 A ¶ Above them, the great lamp swings its beam across the window.
17 A One flash.
18 A Ezra is gone.
19 A Only the wet footprints remain.
20 A ¶ Penny holds the radio to her chest.
21 A Starts counting.
22 D PENNY: One. Two. Three...

### SCENE s00661 | INT. ABANDONED PLANETARIUM GIFT SHOP - NIGHT
Detected names (may be incomplete or contain aliases): ODELIA PEMBERTON-ROSS, ISAIAH TUPOU, MINA, CARVALHO, COLM DRISCOLL, NERI, GREGORY HALLORAN, MAN
1 A ¶ The shelves are half empty: plastic telescopes, glow-in-the-dark star charts, a bin of rubber moons.
2 A A velvet curtain hangs open onto the dark dome beyond.
3 A Moonlight pours through a skylight and lays a pale blue rectangle on the tile.
4 A ¶ Five teenagers have broken in and are pretending not to be nervous.
5 A ¶ ODELIA PEMBERTON-ROSS, seventeen, braids bound in a red scarf, sits on the checkout counter swinging her legs.
6 A ISAIAH TUPOU, eighteen, a rugby player's shoulders and a poet's quiet, stands by the curtain staring into the dark.
7 A WILHELMINA "MINA" CARVALHO, sixteen, tiny, fierce, rifles through a drawer of keychains.
8 A COLM DRISCOLL, seventeen, plugs a portable speaker into an outlet that has no power.
9 A And NERISSA "NERI" HALLORAN, seventeen, the host, sits cross-legged on the floor with a candle.
10 D ODELIA: It's so quiet.
11 D ISAIAH: It's a planetarium.
12 D MINA: It's a tomb.
13 D COLM: It's a gift shop.
14 D NERI: It's mine for the night. Dad's the caretaker.
15 D ODELIA: Neri, you said he was at his sister's.
16 D NERI: He is.
17 D COLM (quietly): Then who's making that noise?
18 A ¶ They listen.
19 A A slow metallic hum, from inside the dome.
20 A They look at the curtain.
21 D ISAIAH: It's the cooling system.
22 D MINA: There's no power.
23 D ISAIAH: Backup, then.
24 D NERI (too brightly): Backup. Obviously.
25 A ¶ Isaiah pulls the curtain wider.
26 A Inside, the dome's seats climb in dark rings, and at its center the old projector gleams, slowly turning on its pedestal, though nothing has turned it on.
27 A ¶ Beside it, in a work jacket and a flashlight beam, a MAN stands motionless, watching them: GREGORY HALLORAN, fifties, Neri's father, caretaker.
28 D GREGORY: Hello, Nerissa.
29 D NERI (small): Dad.
30 D GREGORY: Your aunt called. She says you told her I was there.
31 D NERI: I didn't --
32 D GREGORY: Hello, everybody. I'm Mr. Halloran. Would you like to see the stars properly?
33 A ¶ Nobody moves.
34 A Odelia slides off the counter.
35 A Colm unplugs the speaker.
36 A Mina shuts the drawer, slowly.
37 A ¶ The projector hums higher.
38 A The dome goes dark, and then, all at once, it fills with light: ten thousand stars wheeling in a perfect, impossible sky.
39 D ISAIAH (whispering): Oh.
40 D GREGORY: Sit. Sit. You've got till dawn.

### SCENE s00147 | INT. RADIO TELESCOPE CONTROL ROOM - NIGHT
Detected names (may be incomplete or contain aliases): SOLVEIG ABERNATHY-OKAFOR
1 A ¶ A concrete room at the end of a dirt road, humming with machines.
2 A Banks of dials.
3 A A wall of monitors showing a single flat grey line.
4 A ¶ DR. SOLVEIG ABERNATHY-OKAFOR, 40s, in a sweater and fingerless gloves, sits at the main console with a voice recorder and a cold cup of tea.
5 A She hasn't slept.
6 A ¶ She presses RECORD.
7 D SOLVEIG: Log entry, hour sixty. Signal is still there.
8 A ¶ She plays back the clip.
9 A A pulse, faint, like a heartbeat, from a speaker.
10 A ¶ She rewinds.
11 D SOLVEIG [V.O.] (recording): Log entry, hour fifty-two. It repeats every eleven minutes.
12 D SOLVEIG: Eleven minutes.
13 A ¶ She leans closer, listening, and her hand slips to the console edge.
14 A The pulse thumps.
15 A The monitors flicker.
16 A The lights dim for a heartbeat, then recover.
17 A ¶ She exhales and lifts the recorder again.
18 D SOLVEIG [CONT'D]: Hour sixty-one. The pulse has changed. It now repeats every ten.
19 A ¶ She pauses.
20 A Her voice drops.
21 D SOLVEIG [CONT'D]: Ten minutes.
22 A ¶ She plays it back.
23 D SOLVEIG [V.O., CONT'D] (recording): Hour sixty-one. The pulse has changed.
24 D SOLVEIG: Stop.
25 A ¶ She stops it.
26 A Silence.
27 A Then, faintly, from the speaker, the pulse resumes.
28 A A beat.
29 A Another.
30 D SOLVEIG [CONT'D]: That's not mine.
31 A ¶ She turns slowly.
32 A The speaker is off.
33 A The monitors show the grey line.
34 A The pulse continues.
35 A ¶ It's coming from the recorder.
36 D SOLVEIG [CONT'D] (a whisper): Hello?
37 A ¶ She holds the recorder up.
38 A The pulse quickens.
39 D SOLVEIG [V.O., CONT'D] (recording, but wrong, slow, deeper): Hello.
40 A ¶ She drops the recorder.
41 A It clatters.
42 A She stands, backs away.
43 A The lights flicker.
44 A The console hums.
45 A The recorder lies on its side, spinning its reels.
46 D SOLVEIG [V.O., CONT'D] (recording, patient): Solveig. Come here.
47 A ¶ She does not move.
48 A Tears gather at her eyes.
49 D SOLVEIG: No.
50 D SOLVEIG [V.O., CONT'D] (recording): Come here. I have been waiting eleven minutes.
51 D SOLVEIG: Ten.
52 D SOLVEIG [V.O., CONT'D] (recording): Ten.
53 A ¶ A long silence.
54 A The pulse slows.
55 A The lights steady.
56 A The grey line on the monitors becomes a single, perfect, ordinary wave.
57 A ¶ She picks up the recorder.
58 A Her hand is still.
59 A She looks at it.
60 D SOLVEIG: It's gone.
61 A ¶ She stops the machine.
62 A The room is silent.
63 A She sets the recorder down on the console, very gently, like a bird she has learned to trust.
64 A ¶ She picks up her tea.
65 A It's warm.

### SCENE s01235 | INT. COIN LAUNDRY - NIGHT
Detected names (may be incomplete or contain aliases): FRANKIE DOLAN, MEI-LING WONG, OBI NWANKWO, SABINE ARCAND, RUFUS BELL, TAMSIN PRICE, ^RUFUS
1 A ¶ Dryers tumble.
2 A Plastic chairs.
3 A A vending machine hums.
4 A ¶ Six regulars huddle around a folding table.
5 A They're holding a wake for the shop's owner.
6 A He's laid out in a framed photo between the detergent boxes.
7 A ¶ FRANKIE DOLAN lifts a paper cup.
8 A MEI-LING WONG nods.
9 A OBI NWANKWO wipes his eyes.
10 A SABINE ARCAND folds a towel without looking.
11 A RUFUS BELL stares at the floor.
12 A The youngest, TAMSIN PRICE, taps her phone.
13 D FRANKIE: To Gus.
14 D MEI-LING: To Gus.
15 D OBI: Sixty years of quarters.
16 D RUFUS: He never gave me change once.
17 D SABINE: He gave me change twice.
18 D TAMSIN: He gave me a free sock.
19 A ¶ They all look at her.
20 D OBI: A sock?
21 D TAMSIN: One. He said the other would turn up.
22 D FRANKIE: It always does.
23 D MEI-LING: Never.
24 A ¶ They laugh, quietly, then stop.
25 A The dryers keep turning.
26 D FRANKIE: I'll miss him.
27 D ^RUFUS: I'll miss him.
28 A ¶ They glance at one another, startled by the echo.
29 A She puts her phone away.
30 A He swallows.
31 A The vending machine thuds out a bag of chips.
32 T FADE OUT.

### SCENE s00239 | EXT. BRIDGE OF BONES OVER THE GREY GORGE - DAWN
Detected names (may be incomplete or contain aliases): AELFWYN THORNBURY, GRIM, OKORO-SHALE, THISTLE-WREN, BROTHER CASSIAN VELLACOTT
1 A ¶ A bridge strung between two cliffs, built from the ribs of some long-dead leviathan.
2 A Fog fills the gorge below.
3 A Mountain wind pulls at cloaks.
4 A ¶ A party of four stands at the near end.
5 A ¶ AELFWYN THORNBURY (30s, ranger, bow across her back, scar through one eyebrow) tests the first rib with her boot.
6 A ¶ GRIMBALD "GRIM" OKORO-SHALE (50s, dwarf-born, braided beard, iron-shod staff) leans on the staff and glares at the fog.
7 A ¶ THISTLE-WREN (late teens, half-fey, hair like dandelion down) hops from foot to foot, humming.
8 A ¶ BROTHER CASSIAN VELLACOTT (40s, wandering monk, wooden prayer beads, travel-worn robe) kneels briefly, touches the stone, rises.
9 D AELFWYN (to the group): We cross single file. Spacing of three paces. Anyone who stumbles, the others hold.
10 D GRIM (muttering): Three paces. As if the fog will respect it.
11 D THISTLE-WREN: It will! I asked it nicely!
12 D AELFWYN: Thistle, you don't ask fog.
13 D THISTLE-WREN: That's why it listens.
14 D CASSIAN (quietly, to Aelfwyn): The ribs are old. Older than the oldest prayer I know.
15 D AELFWYN: Will they hold?
16 D CASSIAN: They have so far.
17 A ¶ Aelfwyn nods.
18 A Steps out onto the bridge.
19 A The bone creaks, then settles.
20 A She takes three paces and stops.
21 A Grim follows.
22 A Thistle-Wren follows Grim, humming louder.
23 A Cassian takes the rear, counting his beads.
24 A ¶ Halfway across, a gust slams the bridge sideways.
25 A The party freezes.
26 A Thistle-Wren grabs Grim's belt.
27 A Grim drops his staff to the rib to steady himself.
28 A Aelfwyn kneels, one hand on the bone, the other signaling Cassian to hold.
29 A The fog thickens until none of them can see more than an arm's length ahead.
30 D GRIM (to himself): Idiot dwarf. Never trust a bridge made of something that died.
31 D CASSIAN (calling): Everyone, breathe. Let the wind pass through you.
32 D THISTLE-WREN: I'm trying! My lungs are very small!
33 D AELFWYN: Quiet, all of you. Listen.
34 A ¶ They listen.
35 A Far below, in the white, something large exhales.
36 D THISTLE-WREN (whispering): It's the leviathan.
37 D GRIM: It's dead.
38 D THISTLE-WREN: Its ghost isn't.
39 D CASSIAN (softly): Then we cross as guests.
40 A ¶ The wind drops.
41 A The fog parts for a moment, revealing the far side: a cairn, a green slope, a thin road winding into pines.
42 D AELFWYN: Move. Now. Quick and quiet.
43 A ¶ They run, three paces apart, bone ringing under their boots like a xylophone of the dead.
44 A Thistle-Wren giggles.
45 A Grim wheezes.
46 A Cassian's beads clack.
47 A Aelfwyn counts, lips tight.
48 A ¶ They reach the far cliff and tumble onto grass.
49 A Grim lies flat, staring at the sky.
50 D GRIM (to the sky): Never again.
51 D THISTLE-WREN: We have to cross back.
52 D GRIM (to himself): I'll sleep here.
53 A ¶ Behind them, the bridge sighs and sways.
54 A The fog closes over it like a lid.
55 D CASSIAN (to the group): We should keep moving. The road is long.
56 D AELFWYN (offering her hand to Grim): Up, old friend.
57 A ¶ He takes it.
58 A She hauls him upright.
59 A The four stand in a row, looking down the road.
60 D THISTLE-WREN: Where does it go?
61 D AELFWYN: Wherever we go.
62 A ¶ They start walking.
63 A The wind follows at their heels, gentle now, almost apologetic.

### SCENE s01269 | INT. GLOBEX HOLDINGS - OPEN-PLAN OFFICE - MORNING
Detected names (may be incomplete or contain aliases): HORATIO PEMBERTON-ADEYEMI, CORDELIA VANTERPOOL-OKONKWO, REGGIE FITZWILLIAM, BRIGITTE SOLANKI, DEZ, OKAMOTO, IT, INTERCOM, BARNABY CRANSTON-LEE, VP
1 A ¶ A sea of beige cubicles under a drop ceiling.
2 A A motivational poster of a rowing eight hangs crooked above the water cooler.
3 A A sign: SYNERGY IS OUR MIDDLE NAME.
4 A ¶ Five employees stand at their desks, holding paper cups of lukewarm coffee, waiting.
5 A ¶ HORATIO PEMBERTON-ADEYEMI (50s, manager, short-sleeve shirt, tie clip like a tiny sword) clears his throat by the whiteboard.
6 A ¶ CORDELIA VANTERPOOL-OKONKWO (30s, senior analyst, silent, immaculate) stirs her coffee without drinking it.
7 A ¶ REGGIE FITZWILLIAM (40s, sales, loud shirt, over-whitened teeth) sprawls on the corner of a desk.
8 A ¶ BRIGITTE SOLANKI (20s, HR coordinator, lanyard heavy with badges) clutches a binder.
9 A ¶ DESMOND "DEZ" OKAMOTO (30s, IT, headphones round his neck, three days' growth) leans against a filing cabinet, unimpressed.
10 A ¶ Overhead, a speaker crackles.
11 D INTERCOM [V.O.] (female, bright): Good morning, Globex! A reminder that today is Casual Friday, and also Mandatory Fun Day.
12 D HORATIO (to the room): Okay, team. Quick huddle.
13 D REGGIE: We are huddled.
14 D HORATIO: Properly huddled.
15 D CORDELIA: We're standing four feet apart.
16 D HORATIO: Three, please.
17 A ¶ They shuffle a foot closer.
18 A Brigitte raises her binder like a shield.
19 A Dez rolls his eyes.
20 D HORATIO [CONT'D]: As you know, Corporate has asked us to find twelve percent in efficiencies.
21 D REGGIE: Twelve?
22 D BRIGITTE: It's in the memo.
23 D REGGIE: There's a memo?
24 D DEZ: There's always a memo.
25 D HORATIO: I want to be clear: nobody is being let go.
26 D CORDELIA: Good.
27 D HORATIO: Today.
28 A ¶ A silence.
29 A The intercom clicks.
30 D INTERCOM [V.O.] (female, bright): Reminder: the Efficiency Pizza Party begins at noon in the Collaboration Zone!
31 D BRIGITTE (muttering): Efficiency Pizza.
32 D HORATIO: What was that, Brigitte?
33 D BRIGITTE: Nothing. Nothing at all.
34 D HORATIO: Because if there's something you'd like to share with the group...
35 D BRIGITTE: I'd like to share that I've been here six years and I still don't know what we do.
36 A ¶ Nobody laughs.
37 A Reggie's grin falters.
38 A Dez takes his headphones from around his neck and puts them on.
39 A Cordelia sets her coffee down on the desk with a click.
40 D CORDELIA: We process claims.
41 D BRIGITTE: Which claims?
42 D CORDELIA: Claims.
43 D HORATIO: Let's not go off-topic.
44 D REGGIE: I sell the claims. I think.
45 D DEZ (removing one earphone): You sell the claims? To whom?
46 D REGGIE: To people who have claims.
47 D DEZ: People with claims don't need to buy claims.
48 D REGGIE: Dez, buddy, you don't understand sales.
49 D DEZ: I understand there's no product.
50 A ¶ A new figure appears at the end of the aisle.
51 A A tall man in an immaculate grey suit, hair slicked back, folder under one arm.
52 A MR. BARNABY CRANSTON-LEE (50s, regional VP, eyes like glass).
53 A The room freezes.
54 D CRANSTON-LEE: Don't stop on my account.
55 D HORATIO: Mr. Cranston-Lee! We didn't expect you.
56 D CRANSTON-LEE: That is the point of the visit.
57 A ¶ He walks down the aisle.
58 A His shoes click.
59 A He stops by Cordelia's desk and picks up her coffee.
60 A Sniffs.
61 A Sets it down.
62 D CRANSTON-LEE [CONT'D]: Lukewarm.
63 D CORDELIA: It's been a long morning.
64 D CRANSTON-LEE: Of course it has.
65 A ¶ He opens the folder.
66 A Takes out a single sheet of paper.
67 A Holds it up.
68 D CRANSTON-LEE [CONT'D]: Twelve percent.
69 D REGGIE: We were just discussing...
70 D CRANSTON-LEE: I know what you were discussing. Brigitte. How many years?
71 D BRIGITTE: Six, sir.
72 D CRANSTON-LEE: Dez.
73 D DEZ: Four.
74 D CRANSTON-LEE: Cordelia.
75 D CORDELIA: Nine.
76 D CRANSTON-LEE: Reggie.
77 D REGGIE: Fifteen! Fifteen glorious years, sir!
78 D CRANSTON-LEE: Horatio.
79 D HORATIO (swallowing): Twenty-two.
80 D CRANSTON-LEE: Twenty-two years. And in that time, none of you has produced a single claim.
81 A ¶ The intercom crackles.
82 D INTERCOM [V.O.] (female, bright): Mandatory Fun Day will now begin!
83 A ¶ Cranston-Lee lowers the page.
84 A Looks around at five stricken faces.
85 A Then, to everyone's astonishment, he smiles.
86 D CRANSTON-LEE: Don't worry. Neither has anyone else. That's why the company's been so profitable.
87 D HORATIO: Sir?
88 D CRANSTON-LEE: Efficiencies, Horatio. I want twelve percent more nothing.
89 A ¶ He tucks the folder under his arm and strides out.
90 A Nobody breathes.
91 A Reggie, slowly, raises his paper cup.
92 D REGGIE: To nothing.
93 D DEZ: To nothing.
94 D CORDELIA: To nothing.
95 D BRIGITTE (muttering): Efficiency pizza.
96 T FADE OUT.

### SCENE s01330 | INT. STALLED ICE CREAM TRUCK, BACK COMPARTMENT - AFTERNOON
Detected names (may be incomplete or contain aliases): GRAN ODALYS, RUPERT, BEANS
1 A ¶ A hot steel box lined with freezer lids.
2 A A melting puddle on the floor.
3 A Two stools bolted to the wall.
4 A ¶ GRAN ODALYS, 70s, big sunglasses and a flowered housedress, sits with her purse on her lap.
5 A RUPERT, 8, called BEANS, swings his legs and licks a cone gone soft.
6 D GRAN ODALYS: Beans, I told you not to touch the dials.
7 D BEANS: I only touched one.
8 D GRAN ODALYS: That's how trucks stop, baby.
9 D BEANS: Gran, the truck stopped before I touched it.
10 D GRAN ODALYS: Don't be smart with me. Your mother is smart with me enough for the whole family.
11 D BEANS: Are we gonna melt?
12 D GRAN ODALYS: We are going to wait. Mr. Delacroix is fetching a wrench.
13 D BEANS: Mr. Delacroix drives the truck and he doesn't have a wrench?
14 D GRAN ODALYS: Mr. Delacroix has many wrenches. He has lost them.
15 D BEANS: That's dumb.
16 D GRAN ODALYS: Say that to him and you walk home.
17 D BEANS: It's eleven miles.
18 D GRAN ODALYS: Then be nice.
19 D BEANS: Gran, can I tell you something?
20 D GRAN ODALYS: Always.
21 D BEANS: I didn't get the part in the play.
22 D GRAN ODALYS: Oh, Beans. Come here.
23 D BEANS: I'm not crying.
24 D GRAN ODALYS: I know you're not. I only want to hold something sticky.
25 D BEANS: I got to be the tree.
26 D GRAN ODALYS: A tree is an important part.
27 D BEANS: Trees don't talk.
28 D GRAN ODALYS: That's their secret. Everyone else is too busy talking to notice who's holding the stage up.
29 D BEANS: You're making that up.
30 D GRAN ODALYS: I'm seventy-six, baby. I'm allowed.
31 D BEANS: Okay. I'll be the best tree.
32 D GRAN ODALYS: That's my Beans.
33 D BEANS: Gran?
34 D GRAN ODALYS: Mm?
35 D BEANS: Your purse is dripping.
36 D GRAN ODALYS: Lord have mercy. Who put the pistachio in my purse?
37 D BEANS (giggling): You did, Gran!

### SCENE s01421 | EXT. SALT FLATS WAY STATION - DAY
Detected names (may be incomplete or contain aliases): TUCKER HALE, ISAAC BROOKS, BILLIE, STRAND
1 A ¶ White ground.
2 A White sky with a seam of heat across it.
3 A One adobe hut, roof half gone.
4 A A windmill with no blades, only the hub, rusted and ticking.
5 A ¶ TUCKER HALE (40s, lean, sun-cracked lips, a hat stained black at the band) sits on an upturned barrel.
6 A Rifle across his knees.
7 A Not aiming it.
8 A Not putting it down.
9 A ¶ ISAAC BROOKS (50s, heavy, one eye clouded) crouches by a dead fire, poking ash with a stick.
10 A He wears a preacher's coat, two sizes small, buttons mismatched.
11 A ¶ Between them, a mule.
12 A Grey.
13 A Chewing nothing.
14 D TUCKER: Water.
15 D ISAAC: Barrel's dry.
16 D TUCKER: I didn't ask the barrel.
17 A ¶ Isaac lifts a canteen.
18 A Shakes it.
19 A A small sound.
20 A He tosses it.
21 A Tucker catches it without looking.
22 D TUCKER [CONT'D]: Half.
23 D ISAAC: Drink your half.
24 A ¶ Tucker drinks.
25 A Caps it.
26 A Sets it on the sand between them.
27 A ¶ WILHELMINA "BILLIE" STRAND (30s, wiry, a rope-burn scar across one cheek, dust to the knees) steps out of the hut doorway.
28 A She carries a tin plate with three strips of jerky.
29 A Her boots are two sizes too big.
30 A Men's boots.
31 D BILLIE: Supper.
32 D TUCKER: It's noon.
33 D BILLIE: Supper's when you eat it.
34 A ¶ She puts the plate down on the barrel top.
35 A Takes one strip.
36 A Chews.
37 A Looks at the horizon.
38 D ISAAC: He's late.
39 D TUCKER: He's always late.
40 D BILLIE: Who's late?
41 D TUCKER: The man with the wagon.
42 D BILLIE: I thought it was a train.
43 D ISAAC: No train. Ground's too soft for rail.
44 D BILLIE (muttering): Everything's too soft for something.
45 A ¶ Isaac stands.
46 A Knees pop.
47 A He walks to the windmill, puts a palm on the post, closes his good eye.
48 D ISAAC (to himself): Lord, I will not ask for rain. Lord, I will ask for shade.
49 A ¶ Tucker watches him.
50 A Says nothing.
51 A Billie sits on the hut step, pulls her too-big boots off, empties them.
52 A Salt crystals pour out like sugar.
53 D BILLIE: Everybody listen. If we're still here at dark, we sleep in shifts.
54 D TUCKER: We won't be here at dark.
55 D BILLIE: Then it costs nothing to agree.
56 D ISAAC: I'll take first.
57 D BILLIE: You'll take middle. You snore on first.
58 D ISAAC: I do not.
59 D TUCKER: You do.
60 A ¶ Isaac looks at Tucker.
61 A Tucker shrugs.
62 A ¶ A mile out, a smudge of dust rises.
63 A Not a wagon.
64 A Wind, maybe.
65 A All three watch it anyway.
66 D TUCKER [CONT'D] (low, to Isaac): You still got the paper?
67 D ISAAC (low): Inside my coat.
68 D TUCKER: Keep it there.
69 D BILLIE: I can hear you.
70 D TUCKER: Then hear this. Nobody does anything till I say.
71 D BILLIE: Yes, sir, Marshal.
72 D TUCKER: I'm not a marshal.
73 D BILLIE: That's why it's funny.
74 A ¶ The dust smudge thins and dies.
75 A Nothing behind it.
76 A The mule shifts its weight, sighs through its nose.
77 A ¶ Isaac settles back by the dead fire.
78 A Pokes.
79 A Tucker leans the rifle against the barrel.
80 A Billie lies back on the step, hat over her face.
81 D BILLIE [CONT'D] (from under the hat): Wake me when it's supper.
82 D TUCKER (to the mule): She's right, you know.

### SCENE s01660 | INT. SHUTTERED CAROUSEL FACTORY - NIGHT
Detected names (may be incomplete or contain aliases): INEZ MARQUARDT, CARMINE, DOROTHEA, VLAD, REGGIE
1 A ¶ A cavernous workshop under a rusted skylight.
2 A Painted horses hang from chains, half-carved, half-gilded, their glass eyes catching the moon.
3 A Sawdust drifts like old snow.
4 A A single bare bulb swings over a workbench.
5 A ¶ INEZ MARQUARDT, 40s, a detective in a wet raincoat, leans against a pillar.
6 A Her hair is tied back with a rubber band.
7 A Her face is calm, but her fingers drum.
8 A ¶ CARMINE, 50s, a carver with a chisel scar across his left cheek, sits at the bench with a half-finished stallion.
9 A He is huge and slow and gentle.
10 A ¶ DOROTHEA, 60s, the factory's owner, stands in the doorway of a glass-walled office, a cigarette burning down in her hand.
11 A VLAD, 30s, her nephew, lurks at her shoulder in a leather jacket.
12 A REGGIE, 20s, a rawboned kid in a yellow slicker, hovers near the big double doors as if ready to run.
13 A ¶ Inez takes her time.
14 A She walks along the line of hanging horses.
15 A She touches one.
16 A It swings.
17 A ¶ She doesn't look at him when she speaks.
18 D INEZ: He says you knew the girl.
19 D CARMINE: He says a lot.
20 D INEZ: He says you carved her a pony.
21 D CARMINE: He says that.
22 D INEZ: Did you?
23 A ¶ Carmine turns the chisel over in his hands.
24 A He looks at it, not at her.
25 D CARMINE: She liked the grey ones.
26 D INEZ: She's been missing nine days.
27 D CARMINE: It's a long time.
28 A ¶ Dorothea steps out of the office.
29 A Her heels click on the concrete.
30 A She draws on the cigarette and exhales a long, thin line of smoke.
31 D DOROTHEA: Detective, my carver is a gentle man. He works. He eats. He goes home.
32 D INEZ: Where's home?
33 D DOROTHEA: Upstairs.
34 D INEZ: In this building?
35 D DOROTHEA: He has no other.
36 A ¶ Vlad shifts.
37 A His boots scuff.
38 A He shoves his hands into his jacket pockets, then pulls them out again.
39 A ¶ Inez notices.
40 A She says nothing.
41 A She walks to the bench.
42 A Looks at the stallion, then at Carmine's hands.
43 A Then she picks up a small grey pony, perfect, half-finished, from the shavings.
44 A ¶ She holds it up to the light.
45 A A tiny name is carved on its belly.
46 D INEZ (reading): "For Wren."
47 A ¶ Silence.
48 A Nobody breathes.
49 A The bulb swings.
50 A ¶ Reggie bolts for the double doors.
51 A Hauls one open.
52 A Rain pours in.
53 A He is through, running, the yellow slicker vanishing into the dark.
54 A ¶ Vlad lunges after him.
55 A Dorothea screams his name.
56 A Inez drops the pony and draws her revolver in one smooth move, but Carmine is already on his feet, huge, quiet, between her and the door, the chisel hanging at his side like a thing he's forgotten he's holding.
57 D CARMINE (softly): Not the boy.
58 A ¶ Inez does not lower the gun.
59 A She does not fire.
60 D INEZ: Where is she, Carmine?
61 A ¶ He tilts his head toward the ceiling.
62 A Up, past the beams, to a trapdoor in the rafters.
63 A A rope ladder hangs, swaying.
64 D CARMINE: She's been waiting for her pony.
65 A ¶ Inez lowers the gun an inch.
66 A She looks at the ladder.
67 A She looks at the grey pony on the floor.
68 A And she begins to climb.

### SCENE s01422 | INT. COURTHOUSE PARKING GARAGE - LEVEL P3 - DAWN
Detected names (may be incomplete or contain aliases): LENORE VASQUITH, RUFUS AMOAH, CLERK
1 A ¶ Concrete.
2 A Sodium light.
3 A One sedan, engine ticking.
4 A ¶ LENORE VASQUITH (40s, charcoal suit, burner-thin patience) leans on the driver's door, phone pressed to her ear.
5 A In the passenger seat, RUFUS AMOAH (30s, borrowed tie, hands gripping his knees) stares at the dashboard.
6 D CLERK [V.O.] (phone, tinny): Judge Barrow moved you to eight-fifteen.
7 D LENORE: Moved me from nine?
8 D CLERK [V.O.] (phone): Prosecution's witness flew in early.
9 D LENORE: Then I want the exhibit list stipulated before we go on the record.
10 D CLERK [V.O.] (phone): Take it up with the judge.
11 A ¶ Lenore ends the call.
12 A Knocks on the glass.
13 A Rufus lowers the window two inches.
14 D RUFUS: That the clerk?
15 D LENORE: We go early. You say nothing. Not "good morning," not "thank you." Nothing.
16 D RUFUS: What if the judge asks me something?
17 D LENORE: Then I object.
18 D RUFUS: And if you can't?
19 D LENORE: Rufus. Look at me.
20 A ¶ He does.
21 A She does not blink.
22 D LENORE [CONT'D]: I can.

### SCENE s01697 | INT. NEONATAL ICU - NIGHT
Detected names (may be incomplete or contain aliases): AMARA OKELLO, NURSE WOJTEK BIALEK
1 A ¶ Dim.
2 A Incubators glow like small aquariums.
3 A Monitors beep in patient intervals.
4 A ¶ DR. AMARA OKELLO (40s, surgical mask pulled under her chin) checks a chart.
5 A Beside her, NURSE WOJTEK BIALEK (30s, soft-voiced) adjusts a tube.
6 A ¶ She lifts the baby's tiny wrist.
7 A He holds a dosage syringe to the light.
8 A Both are quiet.
9 D AMARA: Heart rate steady?
10 D WOJTEK: Steady.
11 A ¶ She nods.
12 A He adjusts the monitor.
13 A She smiles, a little.
14 D AMARA: Go home, Wojtek.
15 D WOJTEK: After my shift.
16 D AMARA: It's three a.m.
17 D WOJTEK: After my shift.
18 A ¶ He moves to the next incubator.
19 A She follows.
20 A They check, they chart, they check again.
21 A ¶ An alarm shrills.
22 A Both spin.
23 A The monitor on bed four flatlines.
24 D WOJTEK [CONT'D]: Doctor!
25 D AMARA: I see it.
26 A ¶ She reaches in; he pulls the cover.
27 A She tilts the baby's chin, begins tiny compressions with two fingers.
28 A He hands her a syringe; she pushes it.
29 A Nothing.
30 A She compresses again.
31 D WOJTEK [CONT'D]: Come on.
32 D AMARA: Come on, little one.
33 A ¶ A blip.
34 A Another.
35 A A rhythm.
36 A Both freeze, listening.
37 A The alarm cuts out.
38 A ¶ She lets out a shaky breath.
39 A He sets the syringe down.
40 A Neither of them moves.
41 A She looks at him; he nods.
42 D AMARA [CONT'D]: That was close.
43 D WOJTEK: Too close.
44 A ¶ He pulls a stool over and sits.
45 A She takes the chart off its hook and, without a word, starts writing.

### SCENE s01652 | INT. HOUSEBOAT GALLEY - CHRISTMAS EVE - NIGHT
Detected names (may be incomplete or contain aliases): OLD MAN, CHIARA, LUCA, NONNA SABINA, ENZO, ^SABINA
1 A ¶ A tiny kitchen rocking gently on a canal.
2 A Steam on the window.
3 A A pot of tomato sauce.
4 A Strings of paper lanterns.
5 A ¶ An OLD MAN, 80s, a cardigan, a wooden spoon, stirs the pot with a trembling hand.
6 A He hums something Neapolitan.
7 A ¶ CHIARA, 40s, in a coat, steps through the hatch, shaking rain off.
8 A She stops.
9 A Looks at him.
10 D CHIARA: Papa, you're not supposed to be cooking.
11 D OLD MAN: I'm not cooking. I'm supervising.
12 D CHIARA: The sauce is boiling.
13 D OLD MAN: It is supposed to boil.
14 A ¶ She crosses and takes the spoon.
15 A He lets her.
16 A She stirs, tastes, smiles.
17 D CHIARA: Salt.
18 D OLD MAN: It has salt.
19 D CHIARA: More.
20 D OLD MAN: Chiara, I made this sauce before you could walk.
21 D CHIARA: I know. That's how I know it needs more.
22 A ¶ LUCA, 12, her son, bursts in carrying a plastic reindeer.
23 A He wears a Santa hat two sizes too big.
24 D LUCA: Mamma! Nonno! I found the reindeer!
25 D CHIARA: Luca, shoes.
26 D LUCA: They're on.
27 D CHIARA: They're wet.
28 D LUCA: It's raining!
29 D OLD MAN (to Luca): Come here. Give me the reindeer.
30 A ¶ Luca hands it over.
31 A The old man turns it, examines it with great seriousness.
32 D OLD MAN [CONT'D]: This reindeer has one antler.
33 D LUCA: It's a one-antler reindeer.
34 D OLD MAN: Then he must be very brave.
35 A ¶ Luca grins.
36 A A voice carries from the hatch.
37 A ¶ NONNA SABINA, 80s, in a black headscarf, climbs down slowly, a tray of pastries held out in front of her.
38 D SABINA: Enzo! You are in my kitchen!
39 D ENZO (the Old Man, caught): Sabina, it is a houseboat. It is no one's kitchen.
40 D SABINA: It is mine when I say it is.
41 D CHIARA: Mamma, he's only supervising.
42 D SABINA: He is always supervising. Forty years of supervising.
43 D ENZO: And forty years you ate well.
44 D SABINA: I ate when I cooked.
45 A ¶ Enzo laughs.
46 A She sets the tray down.
47 A She puts her hand to his cheek, briefly, and he turns his face into her palm.
48 D CHIARA (to Luca, softly): Go see if Zio Tomaso has docked.
49 D LUCA: Can I take the reindeer?
50 D CHIARA: Take it.
51 A ¶ Luca runs out.
52 A Enzo and Sabina stand very still.
53 D ENZO: It's been a good year, Sabina.
54 D SABINA: It has.
55 D ENZO: The doctor says --
56 D SABINA: I know what the doctor says.
57 D ENZO: I'd like to be at the table.
58 D SABINA: You will be.
59 D ENZO: I'd like to carve.
60 D SABINA: You'll supervise.
61 A ¶ Chiara, who has been pretending not to listen, wipes her eyes with the back of her wrist.
62 D SABINA [CONT'D] (without turning): And you. Don't cry in my sauce.
63 D CHIARA: Mamma, I wasn't --
64 D SABINA: Cry on the pasta. It needs the salt.
65 D ENZO (simultaneously): Cry on the pasta.
66 D ^SABINA: Cry on the pasta.
67 A ¶ Chiara laughs, wet and sudden.
68 A The boat sways.
69 A The lanterns bob.
70 A Outside, someone starts to sing.

### SCENE s01404 | INT. PAWNSHOP - BACK ROOM - NIGHT
Detected names (may be incomplete or contain aliases): MOE, LASALLE, ZOFIA KRAWCZYK, RECORDING
1 A ¶ Shelves of guitars, watches, and wedding rings under a single hanging bulb.
2 A A poker table with a half-played hand still on it.
3 A ¶ MORDECAI "MOE" LASALLE, 50s, pawnbroker, shuffles a deck, humming.
4 A Across from him, a young woman, ZOFIA KRAWCZYK, 20s, drums her fingers.
5 D MOE: Zofia. Sweetheart. You came alone.
6 D ZOFIA: Like you said.
7 D MOE: Good girl.
8 D ZOFIA: I'm not your girl, Moe.
9 D MOE: Everyone's somebody's girl.
10 A ¶ He deals.
11 A She doesn't touch her cards.
12 D MOE [CONT'D] (to the empty room): Anyone else want in?
13 A ¶ Silence.
14 A She smiles, thin.
15 D ZOFIA: You think I'm stupid.
16 D MOE: I think you're tired.
17 D ZOFIA: I'm tired of you, Moe.
18 A ¶ She reaches under the table.
19 A Moe's shuffling stops.
20 D MOE (muttering): Oh, don't.
21 A ¶ Zofia lays a small recorder on the felt.
22 A Presses play.
23 D RECORDING [V.O.]: ...and I told him, if the Kessler job goes wrong, it's on Zofia.
24 A ¶ Moe stares at the recorder.
25 A Then, very slowly, he laughs.
26 D MOE: Smart girl.

### SCENE s01446 | INT. CENTRAL TELEPHONE EXCHANGE - SWITCHBOARD ROOM - NIGHT, 1924
Detected names (may be incomplete or contain aliases): EUNICE PRUITT, MISS LAVINIA CROFT, HARCOURT
1 A ¶ Rows of operators in shirtwaists sit at a wall of brass jacks.
2 A Cords hang like ivy.
3 A A wall clock ticks.
4 A ¶ EUNICE PRUITT (20s, headset, pencil in her hair) works her board with quick wrists.
5 A Behind her, MISS LAVINIA CROFT (50s, supervisor, high collar, spectacles on a ribbon) watches over her shoulder.
6 D EUNICE: Number, please.
7 D HARCOURT [V.O.] (phone, crackling): Operator, I want Elmwood two-two-one.
8 D EUNICE: One moment, sir.
9 D MISS CROFT: Plug it in.
10 D EUNICE: I am.
11 D HARCOURT [V.O.] (phone): Hello? Hello?
12 D MISS CROFT: Pinch it, Miss Pruitt, don't push.
13 D EUNICE: I am pinching it.
14 D HARCOURT [V.O.] (phone): I have been waiting two minutes!
15 D EUNICE: Sir, I assure you, it's two seconds.
16 D MISS CROFT: Do not argue with a customer.
17 D EUNICE: He is not a customer, Miss Croft, he is a bellow.
18 D HARCOURT [V.O.] (phone): What did you say?
19 D EUNICE: Elmwood two-two-one, sir. Connecting now.
20 A ¶ She jabs the cord home.
21 A A lamp flickers green.
22 A Miss Croft nods, a barely perceptible quiver of approval.
23 D MISS CROFT: Better.

### SCENE s01472_1 | INT. SALT MINE - MAIN DRIFT - CONTINUOUS
Detected names (may be incomplete or contain aliases): MOUSE, TOBIAS, RAFF
1 A ¶ A tunnel.
2 A Rails.
3 A An abandoned ore cart.
4 A ¶ Tobias leads.
5 A Mouse behind.
6 A Raff last.
7 A Their lamps carve white cones in the dark.
8 D MOUSE: Tobias, how deep is the vault wall?
9 D TOBIAS: Two meters. Salt. Soft, but it carries sound.
10 D MOUSE: Then no drill.
11 D TOBIAS: No drill.
12 A ¶ Raff stops.
13 A Holds up a fist.
14 A The other two freeze.
15 A ¶ A distant HUM.
16 A A headlight sweeps across the far end of the tunnel.
17 A An automatic ore train, no driver.
18 D RAFF (whisper): Ore train. Down.
19 A ¶ All three drop behind the ore cart.
20 A Lamps off.
21 A Tobias presses a hand over Mouse's shoulder.
22 A She flinches, then steadies.
23 A ¶ The train grinds past.
24 A Its headlight slides over the cart.
25 A Stops.
26 D TOBIAS (barely audible): Don't breathe.
27 A ¶ The beam holds, searching.
28 A Mouse's eyes are huge.
29 A Raff's hand eases toward a rubber mallet at his belt.
30 A ¶ A relay CLACKS.
31 A The track switches.
32 A ¶ The beam swings away.
33 A The train recedes.
34 A The three exhale together.
35 D MOUSE: That was...
36 D RAFF: Still on schedule. Move.
37 A ¶ They rise.
38 A They move faster.

### SCENE s01734 | INT. BAGGAGE CLAIM - REGIONAL AIRPORT - NIGHT
Detected names (may be incomplete or contain aliases): CASSIAN MOORE, MIRELLE DUPONT, OBADIAH FLYNN
1 A ¶ A dead carousel.
2 A A single fluorescent tube flickers.
3 A The rubber flaps hang like black tongues.
4 A ¶ CASSIAN MOORE (40s, rumpled suit, a battered suitcase at his feet) stands beside the carousel and does not look at it.
5 A MIRELLE DUPONT (30s, airport security, radio on her shoulder) enters from the staff door.
6 A OBADIAH FLYNN (60s, janitor, a mop and a yellow bucket) is already there, mopping where nothing has been spilled.
7 A ¶ Mirelle drops her hand to her holster.
8 A Cassian lifts his palms.
9 A Obadiah keeps mopping, but slower.
10 D MIRELLE: Sir, this area is closed.
11 D CASSIAN: I was told to wait here.
12 D MIRELLE: By whom?
13 D CASSIAN: That's the problem. I don't know.
14 D MIRELLE: Is that your bag?
15 D CASSIAN: It came out of the last flight. The tag has my name. I don't remember packing it.
16 D OBADIAH (not looking up): Nobody does.
17 D MIRELLE: Sir, step away from the bag.
18 D CASSIAN: I would love to, believe me. It keeps ticking.
19 A ¶ Mirelle steps back.
20 A Obadiah lets go of the mop.
21 A It falls, and all three of them flinch at the clatter.
22 D OBADIAH: Evening, Cassian.
23 D CASSIAN: Do I know you?
24 D OBADIAH: You will. Take your time. It's a long night.
25 D MIRELLE (into radio): Control, I have a possible device in baggage claim, requesting a bomb squad.
26 A ¶ Her radio answers with static, then a click, then silence.
27 D MIRELLE [CONT'D]: Control? Control, do you copy?
28 D OBADIAH: They can't hear you. The line's been cut since nine o'clock.
29 D CASSIAN: Who are you?
30 D OBADIAH: Just the janitor.
31 D MIRELLE: Then why do you know the line is cut?
32 D OBADIAH: Because I'm the one that cut it.
33 A ¶ Mirelle draws.
34 A Cassian drops flat.
35 A Obadiah does not move, hands wide, smiling the way you smile at the end of a long shift.
36 D OBADIAH [CONT'D]: Lower that, Miss Dupont. Nobody's getting hurt. We're going to have a conversation, the three of us, and when it's done, the bag will stop ticking.
37 D MIRELLE: What conversation?
38 D OBADIAH: About the flight you both worked on, eleven years ago.
39 D CASSIAN: I never worked a flight.
40 D OBADIAH: You didn't. You were a passenger. She was the gate agent who let you board.
41 A ¶ Mirelle's gun hand wavers.
42 D MIRELLE: That flight was...
43 D OBADIAH: Go on.
44 D MIRELLE: That flight was cancelled.
45 D OBADIAH: Not for everyone.
46 A ¶ The carousel lurches.
47 A It starts to turn.
48 A A single object rides out of the dark flap, a child's red shoe, and rotates slowly past the three of them before it vanishes again.

### SCENE s01772 | INT. LIGHTHOUSE LAMP ROOM - NIGHT (1887)
Detected names (may be incomplete or contain aliases): SILAS PENHALLOW, THADDEUS MARROW, HOBART VANE
1 A ¶ A brass and glass chamber at the top of a stone tower, the great lens turning slowly above.
2 A Wind hums in the lantern panes.
3 A ¶ SILAS PENHALLOW, fifties, the head keeper, stands at the logbook with a pen.
4 A THADDEUS MARROW, twenties, his assistant, kneels at the lens with an oilcan.
5 A HOBART VANE, forties, a Trinity House inspector in a wet greatcoat, stands in the doorway with his hat in his hands.
6 D SILAS: Mr. Vane, you've climbed a hundred and forty steps in a gale to tell me my lamp is dim.
7 D HOBART: I climbed them to see whether it was.
8 D THADDEUS: It's not dim, sir. Silas trims the wick every hour.
9 D SILAS: Thaddeus, you needn't defend me.
10 D HOBART: He needn't, but he does, Mr. Marrow. That's a good habit in a young man.
11 A ¶ Thaddeus wipes the oilcan on his sleeve and does not look up.
12 A Silas closes the logbook.
13 D SILAS: Hobart, you'll take tea before you go down.
14 D HOBART: I'll take it standing.
15 A ¶ Silas and Hobart face each other.
16 A Neither moves toward the kettle.
17 A Thaddeus stands, crosses to it, and lights the spirit stove.
18 A Behind him the lens turns, and the beam sweeps the three of them with white light, and goes out over the black water.

### SCENE s02406 | INT. HARGREAVE MANOR - KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): CONSTANCE HARGREAVE, VOICE, ELIOT PEMBERTON
1 A ¶ Black range, copper pans, a scrubbed oak table.
2 A A dumbwaiter hatch in the wall, shut.
3 A A single gaslight hisses.
4 A ¶ MRS. CONSTANCE HARGREAVE, fifties, in black bombazine, stands at the table, her hands on its edge.
5 A The house is silent.
6 A The cook has gone to bed.
7 A ¶ The dumbwaiter rope creaks.
8 A She freezes.
9 D MRS. HARGREAVE: Who is hauling that?
10 A ¶ The rope creaks again.
11 A The hatch shudders.
12 A A VOICE drifts down the shaft, thin and echoing.
13 D VOICE [V.O.]: Constance?
14 A ¶ Mrs. Hargreave goes white.
15 D MRS. HARGREAVE: That isn't possible.
16 D VOICE [V.O.]: Constance, it's cold up here.
17 D MRS. HARGREAVE: Be quiet.
18 A ¶ The hatch slides open an inch, on its own.
19 A Black beyond.
20 A A smell of damp earth.
21 A ¶ The kitchen door swings in.
22 A DR. ELIOT PEMBERTON, sixties, in a travelling coat, shakes snow from his hat and stops.
23 D PEMBERTON: Good Lord. What's happened?
24 A ¶ Mrs. Hargreave points at the hatch with a trembling hand.
25 D MRS. HARGREAVE: My husband is in the wall.
26 A ¶ The gaslight gutters out.

### SCENE s02127 | EXT. FROZEN SEA - STRANDED WHALING SHIP - DAY
Detected names (may be incomplete or contain aliases): ANNIKA LUND, OLEG VARGA, PELL, STRANGER, HOLLIS
1 A ¶ The hull of a three-masted whaler locked in pack ice.
2 A Rigging furred with rime.
3 A A gale is dying.
4 A The light is low and silver.
5 A ¶ On the listing deck, ANNIKA LUND, 30s, wrapped in oilskins, tends a tin stove.
6 A OLEG VARGA, 50s, harpooner's shoulders, gaunt, feeds splinters into the flame.
7 A DR. PELL, 60s, round spectacles, shivers under a sealskin blanket and counts tins of beans.
8 A ¶ A figure appears on the ice, dragging a sled.
9 A He stops at the rail.
10 A Tall, bearded, hollow-cheeked, frost in his beard.
11 D STRANGER: Is there room by the fire?
12 D ANNIKA (rifle half-lifted): Who are you?
13 D STRANGER: A man who walked a long way.
14 D OLEG: No one walks on this ice.
15 D STRANGER: I did.
16 D DR. PELL: Annika, let him up. He's half dead.
17 A ¶ Annika lowers the rifle.
18 A Oleg throws down a rope.
19 A The stranger climbs, crumples on the deck.
20 A Annika drapes a coat over him.
21 D ANNIKA: Do you have a name?
22 D STRANGER: Hollis. Matthew Hollis. Third mate of the Albatross.
23 D DR. PELL: The Albatross went down in March.
24 D HOLLIS: Four of us got to the ice. I'm what's left.
25 D OLEG: Four? Where are the others?
26 A ¶ Hollis stares into the stove.
27 A Does not answer.
28 D DR. PELL: Beans, Mr. Hollis?
29 D HOLLIS: Please.
30 A ¶ Pell hands him a tin and a spoon.
31 A Hollis eats slowly, like a man learning how.
32 D ANNIKA: Oleg. Make room.
33 A ¶ Oleg shifts over without a word.
34 A Hollis settles against the mast, eyes half shut, the fire on his face.
35 D OLEG: How far is the coast?
36 D HOLLIS: Two weeks. If the ice holds.
37 D DR. PELL: And if it doesn't?
38 D HOLLIS: Then you've already had your supper.
39 A ¶ Annika almost laughs.
40 A Oleg looks away.
41 A The stove ticks.

### SCENE s01273 | INT. FUNERAL HOME EMBALMING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): HOLLIS PRUITT, MARGUERITE DUBOIS, KENJI SAITO, ABIGAIL TRENT, SEUN, ADEBAYO, REVEREND CALDER MOSS, BODY
1 A ¶ White tile.
2 A Steel table.
3 A A single fluorescent tube hums over a sheeted body.
4 A The wall clock reads 3:12.
5 A ¶ HOLLIS PRUITT, 50s, the funeral director, stands at the table in a rubber apron.
6 A He is calm.
7 A He has done this thousands of times.
8 A ¶ MARGUERITE DUBOIS, 30s, his apprentice, holds a clipboard.
9 A She watches the sheet.
10 A ¶ KENJI SAITO, 40s, the night janitor, mops the corner.
11 A He keeps his eyes on the floor.
12 A ¶ ABIGAIL TRENT, 60s, the widow, sits on a folding chair by the door.
13 A A black purse in her lap.
14 A ¶ OLUWASEUN "SEUN" ADEBAYO, 20s, her grandson, leans on the wall beside her.
15 A Arms crossed.
16 A ¶ REVEREND CALDER MOSS, 70s, stands in the doorway, Bible pressed to his chest.
17 D MARGUERITE: Mrs. Trent, you really shouldn't be in here.
18 D ABIGAIL: I want to see him.
19 D HOLLIS: He isn't ready, ma'am.
20 D ABIGAIL: I said I want to see him.
21 A ¶ Hollis glances at the Reverend.
22 A The Reverend nods.
23 A Hollis lifts the sheet to the chin.
24 A ¶ The face is grey.
25 A Peaceful.
26 A She leans in and touches his cheek.
27 A ¶ The finger comes away wet.
28 D ABIGAIL [CONT'D]: He's warm.
29 D HOLLIS: That's the lights, Mrs. Trent.
30 D SEUN: Grandma, come on.
31 A ¶ She doesn't move.
32 A Kenji's mop stops.
33 A ¶ The body's chest rises.
34 A ¶ Marguerite drops the clipboard.
35 A It CLATTERS across the tile.
36 D MARGUERITE: Did you see that?
37 D HOLLIS: Nobody breathe.
38 A ¶ They don't.
39 A The fluorescent tube FLICKERS.
40 A ¶ The chest rises again.
41 A Slowly.
42 A The sheet slides off the shoulder.
43 A ¶ The Reverend begins to pray, fast, under his breath.
44 A Seun backs into the wall.
45 A Kenji drops the mop and edges toward the door.
46 A ¶ Hollis presses two fingers to the neck.
47 A His face goes blank.
48 A He pulls back.
49 D HOLLIS [CONT'D]: No pulse.
50 D MARGUERITE: Then what's moving?
51 A ¶ The mouth opens.
52 A A long, wet exhale.
53 A Then a whisper, dry as paper.
54 D BODY [O.S.]: Abigail.
55 A ¶ She stands.
56 A The purse falls.
57 A She is smiling.
58 D ABIGAIL: Walter.
59 D SEUN: Grandma, don't.
60 A ¶ The lights die.
61 A Total dark.
62 A Footsteps.
63 A A scrape of metal.
64 A ¶ Light snaps back.
65 A The table is empty.
66 A The sheet lies folded at the foot.
67 A ¶ Kenji laughs, high and cracked.
68 A Hollis grabs him by the shoulder.
69 A He stops.
70 A ¶ The Reverend lowers his Bible.
71 A Marguerite is staring at the wet footprints that lead across the tile to the open back door.
72 A ¶ Abigail is gone.
73 A Seun runs after her into the night.

### SCENE s01861 | EXT. ROOFTOP WATER TOWER - DAWN
Detected names (may be incomplete or contain aliases): JUNE WEBER, OSCAR PELL, KID
1 A ¶ A rusted water tower on a flat tar roof above a sleeping town.
2 A Pigeons.
3 A A pink smear of sky.
4 A ¶ JUNE WEBER, 17, fraying denim jacket, climbs the last rung.
5 A Chewed fingernails.
6 A A paper bag in her teeth.
7 A ¶ She hauls over the lip.
8 A Looks around.
9 A ¶ Nobody.
10 A ¶ She sits.
11 A Takes a donut from the bag.
12 A ¶ A scrape behind her.
13 A ¶ She spins.
14 A ¶ OSCAR PELL, 17, skinny, dyed-blond hair, up the other ladder.
15 A Out of breath.
16 A Grinning.
17 D OSCAR: Told you I'd beat you.
18 D JUNE: You didn't.
19 D OSCAR: I got here at five.
20 D JUNE: Then why were you climbing?
21 D OSCAR: I went down for coffee.
22 A ¶ He holds up two paper cups.
23 A Hands her one.
24 A She takes it, suspicious.
25 D JUNE: It's cold.
26 D OSCAR: It's iced.
27 D JUNE: It's November.
28 D OSCAR: It's committed.
29 A ¶ She laughs despite herself.
30 A Drinks.
31 A ¶ Below, a milk truck rattles down Main Street.
32 A The light spreads.
33 A ¶ A third voice, below, thin and sharp.
34 A A kid's.
35 D KID [O.S.]: Oscar! Mom says come home!
36 A ¶ Oscar closes his eyes.
37 D OSCAR: Ten minutes!
38 D KID [O.S.]: She says now!
39 D JUNE: Who's that?
40 D OSCAR: My sister.
41 D JUNE: How old?
42 D OSCAR: Nine. Terrifying.
43 A ¶ He stands.
44 A Offers June a hand.
45 A She takes it.
46 D JUNE: Tomorrow?
47 D OSCAR: Same tower.
48 D JUNE: Bring hot coffee.
49 D OSCAR: Bring a better donut.

### SCENE s00310 | INT. ORBITAL STATION "HALCYON" - OBSERVATION RING - SHIP NIGHT
Detected names (may be incomplete or contain aliases): COMMANDER YUSUF ADEWUNMI-LINDGREN, HELENA OKONKWO-BRANDT, ENGINEER TOMASZ NAKASHIMA-AMADI, TECH IRIS MBEKI-HALVORSEN
1 A ¶ A curved window onto a gray world.
2 A Four crew in thermal suits sit at a low table around a flickering screen.
3 A ¶ COMMANDER YUSUF ADEWUNMI-LINDGREN (50s) speaks first.
4 A DR. HELENA OKONKWO-BRANDT (40s) answers.
5 A ENGINEER TOMASZ NAKASHIMA-AMADI (30s) interrupts.
6 A And the youngest, TECH IRIS MBEKI-HALVORSEN (20s), says nothing.
7 D YUSUF: Final report. Oxygen reserves at eleven percent.
8 D HELENA: That's four days.
9 D TOMASZ: Four days if nobody breathes.
10 D YUSUF: Nobody's counting breaths, Tomasz.
11 D TOMASZ: I am.
12 D HELENA: Commander, the relief ship?
13 D YUSUF: Nine days out.
14 D HELENA: Then we're five short.
15 D TOMASZ: Five.
16 D YUSUF: We are going to be fine.
17 D IRIS (quietly): No, we're not.
18 A ¶ They look at her.
19 A She looks at the window.
20 D IRIS [CONT'D]: But we can say it like we are.
21 A ¶ Yusuf nods.
22 A Helena reaches across the table and takes Iris's hand.
23 A Tomasz folds his arms and stares at the gray world turning below.

### SCENE s01642 | INT. MORDECAI'S PAWN SHOP - CLOSING SALE - NIGHT
Detected names (may be incomplete or contain aliases): PAWNBROKER MORDECAI, GINA, TREY, ROSALIND, DUKE
1 A ¶ Shelves of guitars, watches, tuba cases.
2 A A red banner: EVERYTHING MUST GO.
3 A ¶ PAWNBROKER MORDECAI, 60s, cash apron, stands behind the counter.
4 A GINA, 30s, a regular, waves a ticket at him.
5 A TREY, 20s, a skinny kid in a hoodie, edges toward the display case.
6 A ROSALIND, 40s, a plainclothes cop, pretends to look at saxophones.
7 A DUKE, 50s, a large man in a leather vest, blocks the door.
8 D MORDECAI: We're closed!
9 D GINA: The banner says sale!
10 D TREY: I just want the ring.
11 D ROSALIND: Which ring?
12 D TREY: The one in the case.
13 D DUKE: Nobody leaves.
14 D MORDECAI: Nobody enters, Duke! We're closed!
15 D GINA: Mordecai, my grandmother's locket --
16 D TREY: It's not for sale, it's for me --
17 D MORDECAI: Everybody shut up!
18 A ¶ Silence.
19 A Then Rosalind flashes her badge.
20 D ROSALIND: Police. Everybody hands up.
21 A ¶ Mordecai lifts his hands.
22 A Gina lifts her ticket.
23 A Trey lunges for the case.
24 A Duke steps aside to let Rosalind through.
25 D MORDECAI: Duke!
26 D GINA (overlapping): TREY!
27 D DUKE (simultaneously): She's a cop!
28 A ¶ Trey smashes the glass.
29 A Grabs the ring.
30 A Bolts.
31 D ROSALIND (over her shoulder): Duke, stop him!
32 A ¶ Duke grins and sits down on the nearest tuba case.

### SCENE s02242 | INT. DERELICT TERRAFORMING STATION - AIRLOCK CORRIDOR - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): CAPTAIN ORRIN VASK, HALCYON, UNKNOWN CREW MEMBER, PAVLINA
1 A ¶ Pale emergency lights.
2 A Condensation beads on the walls.
3 A A bulkhead door at one end stamped SECTOR 9 in peeling yellow.
4 A ¶ CAPTAIN ORRIN VASK, forties, steady, in a rust-colored flight suit, leads.
5 A Behind him, a hooded figure in an environment suit, face hidden behind a dark visor, walks with a slight limp.
6 A ¶ A speaker in the ceiling crackles.
7 D HALCYON [V.O.]: Captain Vask. Atmospheric integrity at sixty percent. Two crew members aboard.
8 D ORRIN: Two?
9 D HALCYON [V.O.]: Yourself, and one unregistered.
10 D ORRIN (turning): Who are you?
11 A ¶ The figure stops.
12 A Reaches up.
13 A Unlocks the helmet.
14 A Lifts it away.
15 A A woman, thirties, ash-blond, pale.
16 D UNKNOWN CREW MEMBER: My name doesn't matter. You needed an engineer.
17 D ORRIN: I needed Chief Dahl.
18 D UNKNOWN CREW MEMBER: Dahl is in cryo, three decks down. She sent me.
19 D HALCYON [V.O.]: Verification pending.
20 D ORRIN: Halcyon, scan her.
21 D HALCYON [V.O.]: Scan complete. Pavlina Rusk. Engineer, second class. Dismissed from the colony in the year eighty-one.
22 D PAVLINA: Dismissed for telling the truth.
23 D ORRIN: About what?
24 D PAVLINA: About the reactor. It was never safe.
25 A ¶ They stand in the humming corridor.
26 A The lights flicker.
27 D ORRIN: Then why come back?
28 D PAVLINA: Because it's going to blow in four hours, and I'm the only one who knows how to stop it.
29 D HALCYON [V.O.]: Calculating. Probability of that claim being true: seventy-three percent.
30 D PAVLINA: Rounded up, that's enough.
31 D ORRIN: Can we trust her?
32 D HALCYON [V.O.]: Trust is not a computable quantity, Captain.
33 D ORRIN: Thanks for nothing.
34 A ¶ Pavlina almost smiles.
35 A She walks to the bulkhead, thumbs the keypad.
36 A It beeps red.
37 D PAVLINA: Override code?
38 D ORRIN: Nine-two-seven.
39 D PAVLINA: Nine-two-seven.
40 D ORRIN: You knew it already.
41 D PAVLINA: Everyone in Sector 9 knew it. That's why it's a bad code.
42 A ¶ The door slides open.
43 A Beyond: a vast chamber with a pulsing blue core.
44 A Heat on their faces.
45 D HALCYON [V.O.]: Four hours, thirty-eight minutes.
46 D ORRIN: Four hours is plenty.
47 D PAVLINA: For a good engineer.
48 A ¶ She steps through.
49 A Orrin follows.
