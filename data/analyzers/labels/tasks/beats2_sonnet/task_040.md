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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_sonnet/group_00040.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01808 | INT. GENERATION SHIP "HALCYON REACH" - HYDROPONICS RING - SHIP'S NIGHT
Detected names (may be incomplete or contain aliases): COMMANDER ISOLDE VARGAS-ABIOLA, TOMASZ BRZEZINSKI, NADIA OKONKWO-REID, KAI SOLOMON, FEODOR LINDGREN, PRIYANKA ADEYEMI
1 A ¶ A curved corridor of green.
2 A Racks of lettuce and soy climb the walls under violet grow-lamps.
3 A Condensation beads on every pipe.
4 A Far below the deck plates, the ship's engines pulse like a slow heart.
5 A ¶ COMMANDER ISOLDE VARGAS-ABIOLA, fifties, stands at a junction with her arms folded, still in her night robe.
6 A Her first officer, TOMASZ BRZEZINSKI, forties, has a hand tablet and a scowl.
7 A The agronomist, DR. NADIA OKONKWO-REID, thirties, kneels at a rack with a soil probe.
8 A The boy, KAI SOLOMON, twelve, lingers behind a tank with a bucket.
9 A A maintenance tech, FEODOR LINDGREN, sixty, sits cross-legged on the deck with a panel open.
10 A And the ship's counselor, PRIYANKA ADEYEMI, forties, hangs back at the corridor mouth.
11 A ¶ The grow-lamps flicker.
12 A Every leaf in the corridor turns, slowly, toward the same direction.
13 D ISOLDE: Tell me that isn't what I think it is.
14 D NADIA: It's phototropism. Plants turn toward light.
15 D ISOLDE: There is no light there.
16 D NADIA: No. There isn't.
17 A ¶ Tomasz looks up from his tablet.
18 A Feodor taps his panel, and a weak amber glow pulses from the wiring.
19 A He snatches his hand away.
20 A Kai edges closer to the tank.
21 D TOMASZ: Commander, the sensors show the hull is clear. No breach. No micrometeorites.
22 D ISOLDE: Then why are my lettuces looking at the aft bulkhead?
23 D FEODOR: Something's behind it.
24 D TOMASZ: There's nothing behind it. It's a bulkhead.
25 D FEODOR: Then something's inside it.
26 D PRIYANKA (softly): Perhaps we should all take a breath.
27 D ISOLDE: I'm breathing, Priyanka. It isn't helping.
28 A ¶ Kai steps out from behind the tank, bucket swinging.
29 D KAI: Mother says the walls have been singing since the last jump.
30 D ISOLDE: Kai, go to your quarters.
31 D KAI: I'm not afraid.
32 D ISOLDE: I didn't say you were.
33 D NADIA: Commander. The plants aren't only turning. Look at the stems. They're growing toward it. Measurably, in real time.
34 A ¶ She holds up the probe.
35 A A readout glows.
36 A Tomasz crosses to her side, looks at it, and goes pale.
37 D TOMASZ: That's twenty centimeters in five minutes.
38 D NADIA: It's accelerating.
39 A ¶ The corridor hums.
40 A A low tone rises in the deck plates.
41 A The violet lamps dim.
42 A And from the aft bulkhead, through the steel, a pale seam of light begins to spread, slow as water, ruffling every leaf.
43 D TOMASZ: Is that...
44 D NADIA: It's alive.
45 A ¶ Tomasz and Nadia speak at the same time, their words overlapping, and then stop, each turning toward the other.
46 A Isolde steps forward, one hand lifted as if to touch the light.
47 D ISOLDE: Nobody move.
48 A ¶ Priyanka crosses herself in the old way.
49 A Feodor scrambles to his feet.
50 A Kai drops the bucket, and it clangs, and the sound echoes down the corridor and returns altered, almost a word.
51 D KAI (whispering): It said "hello."
52 D ISOLDE: Kai.
53 D KAI: It did. It said hello.
54 A ¶ Isolde kneels beside the boy and takes him by the shoulders.
55 D ISOLDE: Kai, look at me. Did you hear anything else?
56 D KAI: It said it was lonely.
57 A ¶ Silence.
58 A The light stops spreading.
59 A A single tendril of green curls out from the nearest rack and brushes the boy's sleeve, gentle as a child's hand.
60 D ISOLDE: Tomasz. Seal the corridor. Priyanka, get the captain. Nadia.
61 D NADIA: Yes, Commander?
62 D ISOLDE: Find out what it wants.
63 D NADIA: And if it wants nothing?
64 D ISOLDE: Then we will be very polite to it.
65 A ¶ Isolde rises, and the seam of light flickers once in answer, and every leaf in the corridor turns to face her.

### SCENE s01764 | INT. SPACE ELEVATOR CAR - ORBITAL TETHER - DAY
Detected names (may be incomplete or contain aliases): CAPTAIN IDRIS VAUGHAN, NOOR HASHEMI, BART, CHUKWU, FUMIKO SATO, SVEN LUNDGREN
1 A ¶ A decommissioned passenger car, windowless but for one thick porthole.
2 A Worn leather seats, six of them, bolted in a ring around a central pole.
3 A A dial on the wall reads 31,000 km and drops by the second.
4 A The air is stale, the lights half-power.
5 A ¶ CAPTAIN IDRIS VAUGHAN (50s, gray crew cut, patched uniform jacket) sits at the control panel, reading tablet data.
6 A NOOR HASHEMI (30s, flight engineer, braids pinned up, hands always moving) is on her back under the console, wiring.
7 A BARTHOLOMEW "BART" CHUKWU (40s, medic, big man in a small seat) peels the foil off a ration bar.
8 A FUMIKO SATO (20s, cadet, rigid in her seat, hands gripped white around the harness) stares at the porthole.
9 A SVEN LUNDGREN (60s, scientist, lab coat over thermals, a thermos strapped to his belt) hums at the wall.
10 D IDRIS: Noor, status.
11 D NOOR (from under the console): Power's holding. Descent's nominal.
12 D IDRIS: Nominal.
13 D NOOR: I said nominal. Didn't say good.
14 D BART: Is there such a thing as a bad descent when you're only falling thirty thousand kilometers?
15 D NOOR (dry): Yes, Bart. The kind where you land.
16 D BART: Funny.
17 D FUMIKO: Captain, how long?
18 D IDRIS: Four hours, Cadet.
19 D FUMIKO: Four hours is a long time.
20 D IDRIS: It's the normal time.
21 D SVEN: It is a good time. Time enough for a story.
22 D BART: No stories, Sven.
23 D SVEN: It is a short one.
24 D BART: It's never short.
25 D SVEN: It is the one about the cable.
26 A ¶ Noor slides out from under the console.
27 A She sits up, a coil of wire in her fist.
28 A Idris sets down his tablet.
29 A Fumiko turns her eyes from the porthole for the first time.
30 D IDRIS: Not that one, Sven.
31 D SVEN: They should hear it, Captain.
32 D IDRIS: They have clearance to know what they need.
33 D SVEN: Then they need to know.
34 A ¶ Silence.
35 A The dial reads 29,000.
36 A The car shudders, a small tremor along the line.
37 A Everyone feels it.
38 A Nobody mentions it.
39 D NOOR: Captain, I'd like to hear the story.
40 D IDRIS: No.
41 D NOOR: Captain--
42 D IDRIS: Engineer, return to the panel.
43 A ¶ Noor does not move.
44 A Bart pops the foil wrapper off his ration bar and eats a bite without chewing.
45 D BART (to Fumiko, quietly): Look out the window, kid. Look at the stars.
46 D FUMIKO: They're not moving.
47 D BART: Good.
48 D FUMIKO: They should be.
49 A ¶ Bart stops chewing.
50 A He looks at Idris.
51 A Idris, with great deliberateness, puts the tablet face-down on the panel.
52 D SVEN: They are not moving because we are not descending, Fumiko.
53 D NOOR: That's not funny, Sven.
54 D SVEN: It is not a joke.
55 D IDRIS: Sven, I said no.
56 D SVEN: It is not a thing you can say no to, Captain. The dial is reading. The dial is wrong. We have been stationary since the first tremor, which was ninety minutes ago.
57 D BART: The dial's dropping.
58 D SVEN: The dial is a recording. I looped it myself.
59 A ¶ Noor drops the coil of wire.
60 A Bart rises, bumping his head on the low ceiling.
61 A Fumiko lifts her hands off the harness, finally, and puts them in her lap.
62 D NOOR: You looped it.
63 D SVEN: At the Captain's instruction.
64 A ¶ All eyes shift to Idris.
65 A His face is perfectly composed.
66 A He lays both hands flat on the panel.
67 D IDRIS: There is a fault in the tether.
68 D BART: How bad?
69 D IDRIS: We are holding at thirty thousand and nine hundred kilometers, on a line rated for twenty-two.
70 D NOOR: That's not possible.
71 D IDRIS: It is happening.
72 D FUMIKO: Why didn't you tell us?
73 D IDRIS: Because if I had, you would have done what you're doing now.
74 D FUMIKO: What am I doing?
75 D IDRIS: Looking at me.
76 A ¶ Silence.
77 A The car groans.
78 A Somewhere below them, in the dark, a long cable sings a very high note.
79 D SVEN (softly): Now will you let me tell the story?
80 A ¶ Idris nods, once.
81 A Sven sits, unscrews his thermos, pours a single cup of tea, and holds it out to Fumiko, whose hand reaches for it, and closes, and does not shake.

### SCENE s02218 | INT. COUNTY JAIL - ATTORNEY VISITING ROOM - AFTERNOON
Detected names (may be incomplete or contain aliases): CORA WINSLOW-ABBOTT, LILY, MARSTON
1 A ¶ A grey cinderblock cell, steel table bolted to the floor, two plastic chairs.
2 A A one-way window in the far wall.
3 A A fluorescent light buzzes.
4 A ¶ CORA WINSLOW-ABBOTT (30s, defence attorney, rolled sleeves, legal pad) sits with a pen clicking.
5 A Across from her, in an orange jumpsuit, sits LILLIAN "LILY" MARSTON (30s, accountant, cuffed hands, composed face).
6 A Neither has blinked in a while.
7 D CORA: Lily. Start at the beginning.
8 D LILY: I'd rather start in the middle.
9 D CORA: That's not how it works.
10 D LILY: It's how I work.
11 A ¶ Cora sets her pen down.
12 A Folds her hands.
13 D CORA: Where were you at nine on the night of the fourteenth?
14 D LILY: At the office.
15 D CORA: Alone?
16 D LILY: With Brenda. She was in the next room.
17 D CORA: Brenda says she wasn't.
18 D LILY: Brenda says a lot of things.
19 D CORA (to the window): For the record, the client is being difficult.
20 D LILY: I'm not difficult. I'm precise.
21 D CORA: You were precise when you moved four million dollars.
22 D LILY: I was precise when I moved it back.
23 D CORA: Back?
24 D LILY: She took it first.
25 D CORA: Who did?
26 D LILY: Brenda.
27 D CORA: She says you did.
28 D LILY: She lies.
29 D CORA (muttering): They both do.
30 D LILY: What was that?
31 D CORA: Nothing. Notes to myself.
32 A ¶ She scrawls on the legal pad.
33 A Lily watches the pen.
34 D LILY: You think I'm guilty.
35 D CORA: I think you're interesting.
36 D LILY: That's not an answer.
37 D CORA: It's the only honest one I have.
38 D LILY: Fine.
39 A ¶ She leans back.
40 A The chain between her wrists clinks against the table.
41 A Cora meets her eyes.
42 D CORA: Here's what I know. She says you stole it. You say she stole it. One of you is right.
43 D LILY: One of us is.
44 D CORA: Or neither.
45 D LILY: Then who?
46 D CORA: That's what I intend to find out.
47 A ¶ She stands, gathers the pad.
48 A Lily looks at her hands.
49 D LILY: Cora.
50 D CORA: Yes?
51 D LILY: She took the accounts at eight-fifteen. I have the logs.
52 D CORA: Where?
53 D LILY: In my head.
54 A ¶ Cora stops with her hand on the door.
55 D CORA (to herself): Of course.

### SCENE s01745 | INT. HOTEL LINEN ROOM - BASEMENT - NIGHT
Detected names (may be incomplete or contain aliases): ABEL MORROW
1 A ¶ A windowless cellar of steel shelves piled with folded sheets, bleached white.
2 A Pipes sweat overhead.
3 A A single bulb swings on its cord.
4 A The air smells of starch and hot iron.
5 A ¶ ABEL MORROW (50s, rumpled raincoat, a snub-nose revolver, a pocket recorder) enters sideways, back to the wall, eyes on the door he came through.
6 A He shuts it with his heel.
7 A He tests the handle.
8 A Locked from the outside.
9 A ¶ He presses RECORD.
10 A The tiny reels turn.
11 D ABEL (into recorder): Morrow. Basement linen room, Hotel Carnavon. Eleven forty. I'm alone.
12 A ¶ He walks the aisle between shelves, sliding the revolver along each row of towels as if one might hide a hand.
13 A He checks the dryers, four huge steel drums, one by one, then crouches and looks under the folding table, then straightens with a grunt and a hand pressed to his ribs.
14 D ABEL [CONT'D] (into recorder): Somebody took a shot at me in the lobby. Whoever it was ran this way.
15 A ¶ A pipe knocks.
16 A Abel freezes, revolver up.
17 A Steam hisses from a valve and settles.
18 A He exhales through his nose and lowers the gun.
19 A He stops by a laundry cart, and lifts the top sheet, and lets it fall.
20 A ¶ He picks up a white envelope from the cart.
21 A His name is written across it in green ink.
22 A He opens it with his thumb, reads, folds it, pockets it.
23 A His jaw works.
24 D ABEL [V.O.] (recorded, flat): Morrow. Basement linen room. Eleven forty-one. Found a note.
25 A ¶ He thumbs the recorder, rewinds a few seconds, and plays it back to himself.
26 D ABEL [V.O., CONT'D] (recorded): Found a note.
27 A ¶ He nods to himself.
28 A He clicks it forward again.
29 D ABEL (into recorder): Note says it's from the night clerk. Says the clerk is dead, and I should stop looking for who killed him.
30 A ¶ He crosses to the shelves.
31 A He drags a stack of towels aside, one at a time, and at the back there is a steel door, narrow, painted the same gray as the wall.
32 A He puts his ear to it.
33 A Silence.
34 A He tries the handle.
35 A Locked.
36 A ¶ He steps back and fires twice into the lock.
37 A The shots are enormous in the little room.
38 A The bulb sways, flinging shadows, and the towels around him shiver.
39 A The door sags open.
40 A ¶ Behind it, a stairwell, narrow and dark, descending.
41 D ABEL [CONT'D] (into recorder): There's a stairway behind the shelf. I'm going down.
42 A ¶ He drops the recorder into his raincoat pocket without turning it off.
43 A He ducks through the doorway and descends.
44 A His footsteps echo away.
45 A ¶ The bulb swings.
46 A The recorder, still running inside the coat, whirs.
47 D ABEL [V.O., CONT'D] (muffled, from below): Morrow. Sub-basement. Twelve oh two. It's a church.
48 A ¶ Silence.
49 A Then, far off, an organ begins to play.
50 D ABEL [V.O., CONT'D] (muffled): Somebody's expecting me.
51 A ¶ The organ swells.
52 A In the empty linen room, the swinging bulb catches a single white towel on the floor, unfolded, where there had been none.

### SCENE s00297 | INT. COLD-STORAGE LOCKER, FISH MARKET - NIGHT
Detected names (may be incomplete or contain aliases): DEL, OKONKWO-REYES, TOBY, HARLAN-AMADI, SABINE ROUSSEAU-ADEKUNLE
1 A ¶ Steel racks.
2 A Crates of ice.
3 A Breath fogging.
4 A A swinging bulb.
5 A ¶ Two figures wedge the door shut with a pry bar.
6 A ¶ DELPHINE "DEL" OKONKWO-REYES (30s, rubber apron) shoves a crate against it.
7 A ¶ TOBIAS "TOBY" HARLAN-AMADI (50s, flannel, grizzled) leans on the bar, panting.
8 A ¶ Something THUDS on the other side of the door.
9 A Once.
10 D DEL (to Toby): Is it holding?
11 D TOBY: It's holding.
12 A ¶ THUD.
13 A The door shivers.
14 D DEL (to herself): Okay. Okay. Don't scream.
15 D TOBY (to the whole locker): Nobody make a sound.
16 D DEL: Who are you talking to?
17 D TOBY: Habit.
18 A ¶ Silence.
19 A Ice drips.
20 A The bulb sways.
21 D DEL: How long?
22 D TOBY: Till morning crew.
23 D DEL: That's six hours.
24 D TOBY: Then we wait six hours.
25 A ¶ Another THUD.
26 A Dents the steel.
27 A Del backs away.
28 A Her heel hits a crate.
29 A Cold light flickers across her face.
30 D DEL (whispering, to herself): It's only the compressor.
31 D TOBY: That's not the compressor.
32 A ¶ The bulb goes out.
33 A Darkness.
34 A Breathing.
35 A A slow, wet scraping from the far end of the locker.
36 A ¶ From the dark: a voice, gentle.
37 D SABINE [O.S.]: Del?
38 A ¶ Del freezes.
39 A Toby grabs her sleeve.
40 D TOBY (mouthing): Don't.
41 D SABINE [O.S.]: Del, it's me. Open the door.
42 D DEL (whispering): Sabine?
43 A ¶ The bulb flares.
44 A At the end of the aisle, in the white fog, stands SABINE ROUSSEAU-ADEKUNLE (30s, same apron as Del, hair wet, lips blue).
45 A She smiles.
46 A Her feet do not touch the floor.
47 A ¶ Del makes a small sound.
48 A Toby heaves the pry bar up like a club.
49 D SABINE: Oh, don't be afraid. I've come to warm up.
50 A ¶ She drifts forward.
51 A The ice on the racks cracks.
52 A Frost races up the walls.
53 D TOBY (to Sabine): Stay back!
54 D DEL (to Toby): She's dead! She drowned in March!
55 D SABINE: Del.
56 A ¶ She extends a hand.
57 A Del's breath stops.
58 A Toby swings the bar.
59 A It passes through Sabine and rings against a steel rack.
60 A Sabine looks at him, hurt.
61 D SABINE [CONT'D]: That wasn't kind.
62 A ¶ The THUD on the door comes a third time and the door bursts open on the rush of morning crew: sunlight, shouting.
63 A Sabine vanishes in the light like breath on glass.
64 A ¶ Toby drops the bar.
65 A Del falls to her knees.
66 A The ice on the racks begins, quietly, to melt.

### SCENE s02263 | INT. CUBICLE FARM - MONDAY MORNING
Detected names (may be incomplete or contain aliases): SHANICE, COLETTE, BARRY, HR
1 A ¶ Gray partitions.
2 A Motivational posters.
3 A A potted plant dying on a filing cabinet.
4 A ¶ SHANICE, thirties, a headset on, taps a keyboard.
5 A COLETTE, forties, her supervisor, stands at the cubicle entrance with a coffee.
6 A BARRY, fifties, from HR, hovers behind with a binder.
7 D COLETTE (to the whole floor): Team meeting, five minutes, conference B.
8 A ¶ Heads pop up above partitions.
9 A A groan.
10 D SHANICE (muttering): Another meeting.
11 D COLETTE: She heard that.
12 D BARRY: She definitely heard that.
13 A ¶ Shanice pulls off her headset.
14 A Colette leans against the partition.
15 D COLETTE: Shanice, a word.
16 D SHANICE: Sure.
17 D COLETTE: You've been here seven years.
18 D SHANICE: Eight.
19 D COLETTE: Eight. And we've decided to restructure.
20 A ¶ Barry opens his binder.
21 A Shanice stares at it.
22 D SHANICE: Restructure.
23 D BARRY: Position eliminated, effective today.
24 D SHANICE (to the floor, loudly): They just fired me!
25 A ¶ Silence.
26 A Every head disappears behind the partitions.

### SCENE s01440 | INT. HOSPITAL - CARDIAC CATH LAB - DAY
Detected names (may be incomplete or contain aliases): IMOGEN ACHEBE-LARSEN, NURSE FELIX OYAMA, HARLAN VOSKUIJLEN, NADIA KARIMOVA
1 A ¶ Bright, cold, sterile.
2 A Monitors blink green and amber.
3 A A fluoroscope arm hangs over a table like a heron.
4 A ¶ DR. IMOGEN ACHEBE-LARSEN (40s, surgical cap, calm like a held breath) scrubs at the sink, eyes on a screen.
5 A NURSE FELIX OYAMA (30s, steady hands, mask pushed up on his forehead) lays out instruments in perfect rows.
6 A ¶ On the table lies HARLAN VOSKUIJLEN (60s, gown, wrist bands, a farmer's tan line at the collar), awake, sedated, hands folded.
7 A ¶ In the viewing window, behind glass: NADIA KARIMOVA (50s, his wife, handbag on her lap, knitting needles motionless).
8 D IMOGEN: Mr. Voskuijlen, how are we doing?
9 D HARLAN: Tell me it's a plumbing job.
10 D IMOGEN: It's a plumbing job.
11 D HARLAN: Good. I fixed a tractor once.
12 D FELIX: Little pinch, sir.
13 A ¶ Felix slides in the needle.
14 A Harlan doesn't wince.
15 A He looks at the ceiling, at the light, at a smear of dried tape on a tile.
16 D HARLAN: You ever notice that tile has a stain?
17 D FELIX: Every day.
18 D HARLAN: Shaped like Ohio.
19 D FELIX: Nobody's ever said Ohio.
20 D HARLAN: Nobody asks.
21 A ¶ Imogen watches the screen.
22 A The catheter threads upward, a gray worm through a black river.
23 A She tilts her head, bites her lip behind the mask.
24 D IMOGEN: Left anterior descending. Ninety percent.
25 D FELIX: Stent?
26 D IMOGEN: Stent.
27 A ¶ She takes a gleaming device from the tray.
28 A Felix hands over the next one without being asked.
29 A They work in silence.
30 A ¶ In the window, Nadia's needles begin to click.
31 A Quick.
32 A Quicker.
33 A The knitting is a scarf.
34 A It has no shape.
35 D HARLAN: Is she knitting?
36 D IMOGEN: She is.
37 D HARLAN: She always knits when it's bad.
38 D IMOGEN: It's not bad.
39 D HARLAN: Then why's she on row four hundred?
40 A ¶ A monitor chirps.
41 A Not loud.
42 A A shift in rhythm, a stutter.
43 A Felix steps closer.
44 D FELIX: Pressure's dropping.
45 D IMOGEN: I see it.
46 D FELIX: Dr. Achebe.
47 D IMOGEN: I see it.
48 A ¶ The beeping quickens.
49 A The green line jitters into a spike.
50 A Felix grabs the paddles and rolls the cart forward; Imogen presses a hand flat on Harlan's chest.
51 D IMOGEN [CONT'D]: Mr. Voskuijlen. Harlan. Stay with me.
52 D HARLAN (eyes closing): Tell her to finish the scarf.
53 D FELIX: Clear!
54 A ¶ The body jerks.
55 A The line flatlines for one second, two, and then, jagged, a heartbeat resumes.
56 A Then another.
57 A Then a rhythm.
58 A ¶ Imogen exhales, long.
59 A Her shoulders drop an inch.
60 A Felix lowers the paddles, blinking.
61 D FELIX [CONT'D]: He's back.
62 D IMOGEN: He never left.
63 D FELIX: You said that very calmly.
64 D IMOGEN: I'm calm when I'm terrified. It's a flaw.
65 A ¶ Behind the glass, Nadia has stopped knitting.
66 A Her hand is flat on the window, fingers spread.
67 A ¶ Imogen looks up.
68 A Meets her eyes.
69 A Nods once.
70 A ¶ Nadia sits back down.
71 A Picks up the needles.
72 A Starts a new row.
73 D HARLAN (groggy): Ohio.
74 D FELIX: Rest, sir.
75 D HARLAN: It's Ohio. Tell them.
76 D FELIX: I'll tell them.

### SCENE s00904 | INT. FARMHOUSE - SPARE BEDROOM - NIGHT
Detected names (may be incomplete or contain aliases): ESTHER VANCE, LODGER, CALLOWAY
1 A ¶ A single bed.
2 A An oil lamp.
3 A Cold wind knocks at the window.
4 A A wardrobe stands half-open.
5 A ¶ ESTHER VANCE, 60s, a widow in a quilted robe, perches on a hard chair with her hands knotted.
6 A Across the room, THE LODGER, 30s, sits on the edge of the bed, pale, shoes still on, his coat soaked.
7 D LODGER: Thank you for the room.
8 D ESTHER: Rent is due Friday.
9 D LODGER: I'll pay.
10 D ESTHER: I'm sure.
11 A ¶ A floorboard creaks in the hall.
12 A Neither looks.
13 D ESTHER [CONT'D]: I don't recall your name.
14 D LODGER: It doesn't matter.
15 D ESTHER: It matters to me.
16 A ¶ The wind rattles the glass.
17 A The lamp gutters.
18 A He lifts his head.
19 A His eyes catch the flame in two small points.
20 D LODGER: Calloway.
21 D ESTHER: Mr. Calloway.
22 D CALLOWAY: I didn't think I'd be asked.
23 D ESTHER: Most guests give it freely.
24 D CALLOWAY: I'm not most guests.
25 D ESTHER (speaking at once; speaking at once): CALLOWAY No. I see that. You see more than you should.
26 A ¶ She rises.
27 A The chair scrapes.
28 A She crosses to the wardrobe and closes it, softly, with a click.
29 D ESTHER [CONT'D]: Good night, Mr. Calloway.
30 D CALLOWAY: Good night.
31 A ¶ She leaves.
32 A The door shuts.
33 A He sits a while in the lamplight.
34 A Then he rises, goes to the wardrobe, and opens it again.

### SCENE s02234 | EXT. SALOON ROOF - HIGH NOON
Detected names (may be incomplete or contain aliases): SHERIFF AMOS TEAGUE, EZEKIEL, TWO-FINGER MAGGIE, CHEN WEI, RAFAEL, HOLLIS
1 A ¶ Heat.
2 A Dust.
3 A A rain barrel on a flat tin roof.
4 A ¶ SHERIFF AMOS TEAGUE crouches behind a chimney, rifle ready.
5 A EZEKIEL, teenager, deputy, hugs the roofline.
6 A TWO-FINGER MAGGIE, fifties, a bartender, pulls a shotgun from her apron.
7 A CHEN WEI, thirties, a railway cook, grips a cleaver.
8 A RAFAEL, forties, a horse trader, holds a pistol.
9 A HOLLIS, sixty, the town drunk, flops on his back, a bottle on his chest.
10 A ¶ Hooves below.
11 A A gang enters Main Street.
12 D TEAGUE: Hold fire.
13 D EZEKIEL: They're coming.
14 D TEAGUE: I said hold.
15 D MAGGIE: They'll see us, Amos!
16 D CHEN WEI: They won't look up.
17 D RAFAEL: They always look up!
18 A ¶ Guns crack.
19 A Dust jumps.
20 A Hollis lifts the bottle, toasts the sky, and drinks.

### SCENE s02151 | INT. ABANDONED CAROUSEL - FAIRGROUND - NIGHT
Detected names (may be incomplete or contain aliases): AGENT TAMSIN REEVES, ODALYS KANE
1 A ¶ A circus-striped dome, peeling.
2 A Painted horses frozen mid-gallop, manes cracked.
3 A Mirrors fogged.
4 A Moonlight in knife blades through torn canvas.
5 A Pigeons.
6 A Cold.
7 A ¶ AGENT TAMSIN REEVES, 30s, tactical vest, hair tied back, stands at the center pole with a pistol low and a phone in her other hand.
8 A Her breath smokes.
9 A Her eyes never stop moving.
10 D ODALYS KANE [V.O.] (phone, calm): Take one more step toward the horses.
11 D TAMSIN: I'm at the pole.
12 D ODALYS KANE [V.O.]: Take it anyway.
13 A ¶ She steps.
14 A The floor creaks like a ship.
15 D TAMSIN: Where are you?
16 D ODALYS KANE [V.O.]: Where I always am. Behind you.
17 A ¶ Tamsin spins.
18 A Nothing but mirrors.
19 A Her own face, multiplied.
20 D TAMSIN: I don't see you.
21 D ODALYS KANE [V.O.]: No. You see you.
22 A ¶ The carousel groans.
23 A Slowly, the platform begins to turn.
24 A Painted horses rise and fall.
25 A Calliope notes wheeze out of dead pipes.
26 D TAMSIN (into the phone): Odalys, let her go.
27 D ODALYS KANE [V.O.]: She isn't mine to let go. She's yours.
28 A ¶ Tamsin freezes.
29 A Between two horses ahead, a small girl in a yellow raincoat, hands bound, watches her.
30 A A white dress under the coat.
31 A She's very still.
32 D TAMSIN (whisper): Mara.
33 D ODALYS KANE [V.O.]: Count the horses, Agent.
34 D TAMSIN: What?
35 D ODALYS KANE [V.O.]: Count them.
36 A ¶ Tamsin counts under her breath.
37 A Twelve, thirteen, fourteen.
38 A She stops.
39 D TAMSIN: There are fifteen horses on the platform.
40 D ODALYS KANE [V.O.]: And one of them is breathing.
41 A ¶ Tamsin lifts the pistol.
42 A Turns slowly toward the horse nearest the girl, the white one, its painted eyes wide.
43 A It shudders.
44 A It inhales.
45 A ¶ The platform spins faster.
46 A The music climbs.
47 A She raises the pistol to her shoulder, finger tightening.

### SCENE s00671 | INT. SKATELAND ROLLER RINK - PARTY ROOM - DAY
Detected names (may be incomplete or contain aliases): ODALYS, PAULO REYES, KIKI, DANTE FERREIRA, MARISOL, TIO BETO
1 A ¶ Plastic tablecloths.
2 A A sheet cake shaped like a sneaker.
3 A Disco light spins across the wall.
4 A ¶ ODALYS, 70s, church dress, guards the cake.
5 A PAULO REYES, 40s, a dad with a phone in each hand.
6 A KIKI, 8, birthday crown crooked.
7 A DANTE FERREIRA, 15, hood up, bored.
8 A MARISOL, 38, Paulo's sister, tying balloons.
9 A TIO BETO, 60s, mustache, holds a camcorder.
10 D TIO BETO: Everybody in the picture! Closer!
11 A ¶ They bunch up.
12 A Kiki leans toward the candles.
13 D KIKI: Wait. Where's Mom?
14 A ¶ Paulo's smile freezes.
15 D PAULO: She's coming, mija.
16 D DANTE (muttering): She said that last year.
17 A ¶ Paulo whips around.
18 D PAULO: Dante.
19 A ¶ Odalys slaps the table.
20 A The cake jumps.
21 D ODALYS: Not today. Everyone sit. Now.
22 A ¶ Nobody sits.
23 A Marisol lets go of a balloon; it drifts to the ceiling.
24 D MARISOL (to Paulo): Did you even call her?
25 D PAULO: Three times.
26 D KIKI: Is she not coming?
27 A ¶ Silence.
28 A The disco light turns.
29 A Dante pulls his hood down.
30 D DANTE (to Kiki): She's coming. I texted her where we are.
31 A ¶ Paulo stares at him.
32 A ¶ Dante's phone buzzes.
33 A He reads it, turns the screen toward Paulo.
34 A Paulo reads it and his shoulders drop.
35 D PAULO (to Kiki): She's in the parking lot. Parking.
36 D KIKI: Mom's parking!
37 A ¶ She is already running for the door.
38 A Paulo exhales.
39 A Odalys crosses herself and lights the candles.
40 D TIO BETO (to himself): Rolling. Finally rolling.
41 D ODALYS (to everyone): Sing. Loud.

### SCENE s00068 | EXT. DRIFTING LIFE RAFT, OPEN OCEAN - DAWN
Detected names (may be incomplete or contain aliases): CAPTAIN MAGDALENA OYELARAN-STROUD, DESMOND PRIESTLEY-ADEKUNLE, ROSALIND FAIRBANKS-NAKAMURA, TIBBY, OKONJO
1 A ¶ Flat grey sea.
2 A A pale sun.
3 A The raft rocks gently on swells too slow to feel.
4 A ¶ Four survivors sit in the orange hull.
5 A CAPTAIN MAGDALENA OYELARAN-STROUD (50s, sunburnt scalp, torn epaulettes) holds a tin cup of rainwater with both hands.
6 A Beside her, first officer DESMOND PRIESTLEY-ADEKUNLE (40s, a bandaged forearm) scans the horizon with a cracked sextant.
7 A In the middle, a passenger, ROSALIND FAIRBANKS-NAKAMURA (30s, gold watch, salt-white hair), whispers to a drowned photograph.
8 A At the stern, deckhand TIBERIUS "TIBBY" OKONJO (20s, shirtless, ribs showing) trails a fishing line in the water.
9 D MAGDALENA: Divide it.
10 D DESMOND: It's a thimble each.
11 D MAGDALENA: Then divide a thimble.
12 A ¶ She hands him the cup.
13 A He drinks his share and passes it to Rosalind, who stares at it without lifting it.
14 A Tibby doesn't look up from the line.
15 D TIBBY: Got something.
16 D DESMOND: Don't pull.
17 D TIBBY: It's pulling me.
18 A ¶ The line goes taut.
19 A Tibby braces, boots on the rubber hull, then leans back with a roar.
20 A Magdalena grabs his belt, Desmond hooks an arm around her waist, and Rosalind, still clutching the photograph, tumbles into a heap with all three as a flash of silver hurls itself over the side.
21 A ¶ They tangle.
22 A A gleaming fish thrashes on the floor of the raft, spraying water on every face.
23 A Magdalena pins it, Tibby clubs it with the cup, and silence returns.
24 D TIBBY [CONT'D] (whispering): Dinner.
25 D MAGDALENA: Dinner.
26 A ¶ Rosalind lifts her head and, for the first time, smiles.

### SCENE s01623 | INT. FINCH & PUMPHREY TAXIDERMY SHOP - DAY
Detected names (may be incomplete or contain aliases): GLORIA FINCH, WALTER PUMPHREY
1 A ¶ Glass eyes everywhere.
2 A A moth-eaten badger on a pedestal.
3 A A stuffed owl in a bowler hat.
4 A ¶ GLORIA FINCH, 40s, sharp as a tack in a sharper suit, stands on a stepladder, hammering a mounted trout to the wall.
5 A ¶ WALTER PUMPHREY, 50s, rumpled, hat in both hands, bursts through the door.
6 D WALTER: Gloria! The fire inspector is outside!
7 D GLORIA (not turning): Good. Tell him we're closed.
8 D WALTER: He saw the smoke!
9 D GLORIA: There is no smoke. There is a very warm badger.
10 A ¶ She hammers.
11 A He wrings his hat.
12 A She hammers harder.
13 D WALTER: Gloria, you put a lit cigar in its mouth!
14 D GLORIA: To keep it from looking surprised.
15 A ¶ He snatches the badger.
16 A It's smoking.
17 A He bats at it with his hat.
18 A Smoke curls from the badger's ears.
19 D WALTER: Put it out!
20 D GLORIA: I can't, I'm busy with the trout.
21 A ¶ He dumps a bucket of paint water on the badger.
22 A It sags.
23 A She climbs down, sniffs, turns slowly, and lets him have a look.
24 D GLORIA [CONT'D]: That was my best badger.
25 D WALTER: He was a fire hazard!
26 A ¶ She picks up the owl.
27 A Plops it on his head.
28 D GLORIA: Well, put this on. You're the one who has to face the inspector.
29 D WALTER: Why me?
30 D GLORIA: He asked for the owner.
31 D WALTER: You own half!
32 D GLORIA: And you are the half with the hat.
33 A ¶ The door chimes.
34 A They both freeze.
35 A She straightens his bowler.
36 A He straightens the owl.
37 D WALTER: How do I look?
38 D GLORIA: Like you've been stuffed for years.
39 A ¶ The door swings open.

### SCENE s01643 | INT. LUMBER MILL OFFICE, DEPOSITION - DAY
Detected names (may be incomplete or contain aliases): ATTORNEY PHILOMENA OKAFOR-LANE, CORNELIUS HARGROVE
1 A ¶ Wood-paneled walls.
2 A Sawdust in the corners.
3 A A rattling air conditioner.
4 A A long folding table with a court reporter's empty chair.
5 A ¶ ATTORNEY PHILOMENA OKAFOR-LANE, 40s, in a good grey suit, flips through a thick folder.
6 A Her pen taps the rim of a mug.
7 A She is very still.
8 A ¶ The door opens.
9 A ¶ CORNELIUS HARGROVE, 60s, work boots, flannel shirt under a blazer too tight at the shoulders, steps inside.
10 A He eases into the chair opposite.
11 D PHILOMENA: Mr. Hargrove. Thank you for coming.
12 D CORNELIUS: You didn't give me a choice.
13 D PHILOMENA: No. I didn't.
14 D CORNELIUS: Is the reporter coming?
15 D PHILOMENA: She's late. We'll begin.
16 A ¶ She turns on a small recorder.
17 A Sets it between them.
18 D PHILOMENA [CONT'D]: State your name.
19 D CORNELIUS: Cornelius Hargrove.
20 D PHILOMENA: Employment?
21 D CORNELIUS: Foreman, Pinecrest Lumber. Thirty-one years.
22 D PHILOMENA: On March ninth, were you on shift?
23 D CORNELIUS: I was.
24 D PHILOMENA: Did you see Mr. Dunmore fall?
25 D CORNELIUS: I saw a lot of things.
26 D PHILOMENA: Mr. Hargrove.
27 D CORNELIUS: Yes. I saw him fall.
28 D PHILOMENA: From the catwalk?
29 D CORNELIUS: From the catwalk.
30 D PHILOMENA: Was the railing intact?
31 D CORNELIUS: No.
32 D PHILOMENA: Had you reported it?
33 D CORNELIUS: Four times.
34 D PHILOMENA: To whom?
35 D CORNELIUS: To the owner. To his brother. To the safety man. To the priest.
36 D PHILOMENA: The priest?
37 D CORNELIUS: I tell him everything.
38 A ¶ She smiles, almost.
39 A Cornelius does not.
40 D PHILOMENA: And what did the owner say?
41 D CORNELIUS: He said wood bends.
42 D PHILOMENA: Wood bends.
43 D CORNELIUS: But men break.
44 A ¶ The air conditioner clatters.
45 A Philomena closes the folder.
46 A Cornelius stares at the recorder as if it were a gun.
47 D PHILOMENA: Mr. Hargrove, would you be willing to say that in open court?
48 D CORNELIUS: I'd rather not.
49 D PHILOMENA: Why?
50 D CORNELIUS: Because I'd lose my pension.
51 D PHILOMENA: You might lose more by staying silent.
52 D CORNELIUS: You don't know that.
53 D PHILOMENA: I know that Mr. Dunmore's widow sits in the next room.
54 A ¶ Cornelius shifts.
55 A His chair squeaks.
56 A He looks at the door.
57 D CORNELIUS: She's here?
58 D PHILOMENA: She asked to sit in.
59 D CORNELIUS: She shouldn't.
60 D PHILOMENA: She wanted to look at you.
61 A ¶ He stands.
62 A The chair scrapes.
63 A He paces to the window, back, then stops at the table, hands flat on the wood.
64 D CORNELIUS: I can't do this.
65 D PHILOMENA: You already are.
66 A ¶ He slams his palm on the table.
67 A The recorder jumps.
68 A Philomena doesn't flinch, but she catches the mug before it tips.
69 A ¶ They stare at each other.
70 A Then, slowly, both reach for the recorder at once, and their hands touch on the plastic.
71 D CORNELIUS [CONT'D] (quietly): Turn it on again.
72 A ¶ Philomena presses the button.
73 A The red light blinks.
74 D CORNELIUS [CONT'D]: My name is Cornelius Hargrove. I saw him fall.

### SCENE s01188 | EXT. GLACIER CREVASSE CAMP - DAWN
Detected names (may be incomplete or contain aliases): HILDA, SOLVEIG, JAMAL
1 A ¶ A tent the color of a tangerine, pegged to blue ice.
2 A Wind has dropped.
3 A The world is pearl and silent.
4 A ¶ HILDA (50s, frost in her eyebrows) kneels at a camp stove, coaxing a flame.
5 A SOLVEIG (50s, same gray parka, same cropped silver hair) unrolls a map across her knees.
6 A JAMAL (20s, hauling a coil of rope) crunches up from the edge, face wind-reddened.
7 D JAMAL: Weather's holding.
8 D HILDA: Good. Then we eat.
9 A ¶ She stirs a pot.
10 A Steam wisps.
11 A Solveig traces a finger across the map and does not look up.
12 D SOLVEIG: Jamal, how far to the saddle?
13 D JAMAL: Two hours if the bridge holds.
14 D SOLVEIG: Hilda, did you check the bridge?
15 D HILDA: Solveig, I checked it yesterday. She was fine.
16 D JAMAL (confused): She?
17 A ¶ Hilda and Solveig exchange a look.
18 A Hilda's smile fades.
19 A Solveig folds the map once.
20 D SOLVEIG: Jamal. Where is the third rope?
21 A ¶ Jamal glances at the coil in his hand.
22 A Then at the edge.
23 A A beat.
24 D JAMAL: I left it anchored. For her.
25 A ¶ Solveig stands.
26 A Hilda lowers the spoon.
27 A She looks at the pot, at the steam, at the tent, then at Jamal, who has begun, very slowly, to back away toward the crevasse.
28 D HILDA (gentle): Jamal. There wasn't a third climber.
29 A ¶ He stops.
30 A The wind returns, and with it, faintly, from deep inside the ice, a woman's voice calling his name.

### SCENE s02420 | INT. PARKING GARAGE ROOFTOP - BOCCE COURT - DUSK
Detected names (may be incomplete or contain aliases): INES VARGA, DOV LINDQVIST, KALANI AKANA, ROSCOE BAPTISTE
1 A ¶ Astroturf laid over oil-stained concrete.
2 A Sodium lights flicker on.
3 A A hand-painted sign: "LEVEL 6 BOCCE CLUB."
4 A ¶ INES VARGA (60s, windbreaker, clipboard she never writes on) stands at the foul line.
5 A Arms folded.
6 A ¶ DOV LINDQVIST (17, hoodie, too-big sneakers) rolls a ball.
7 A It dies short.
8 A ¶ Nobody speaks.
9 A Ines marks nothing.
10 A ¶ KALANI AKANA (30s, delivery-driver vest still on) crouches by the pallino, measuring with a shoelace.
11 A ¶ ROSCOE BAPTISTE (70s, folding chair, thermos) watches from the exit ramp.
12 D INES (to everyone): Again. Same lane.
13 A ¶ Dov collects the balls.
14 A Counts them twice.
15 A Rolls again.
16 A Short.
17 D KALANI: Twelve inches.
18 D DOV: Eleven.
19 A ¶ Kalani shows the shoelace.
20 A Dov looks away.
21 D ROSCOE (to himself): Wind's up.
22 A ¶ There is no wind.
23 A ¶ Ines walks to Dov.
24 A Takes a ball from his hand.
25 A Puts it back in the rack, gently.
26 D INES: Eat something.
27 D DOV: I ate.
28 A ¶ She looks at his sneakers.
29 A Then at the empty parking spaces below the rail, where no car has come for him.
30 D INES: Kalani, you're up.
31 A ¶ Kalani stands.
32 A Wipes her palms on the vest.
33 A Rolls.
34 A The ball kisses the pallino and stops.
35 A ¶ Roscoe lifts the thermos in salute.
36 A Nobody else reacts.
37 D DOV (muttering): Lucky.
38 D KALANI: Heard that.
39 D INES: Last end. Then lights off.
40 A ¶ She turns away to the stairwell door.
41 A Pauses with her hand on the bar.
42 D INES [CONT'D] (without turning): Your dad called the club line.
43 A ¶ Dov's hand stops over the rack.
44 D DOV: What did you tell him?
45 D INES: That we're closed.
46 A ¶ She exits.
47 A The door sighs shut.
48 A ¶ Dov picks up a ball.
49 A Rolls it.
50 A It lands inches from the pallino.
51 A ¶ He stares at it.
52 A Nobody congratulates him.
53 A Kalani quietly hands him the shoelace.

### SCENE s00930 | INT. HOSPITAL LAUNDRY ROOM, BASEMENT LEVEL - NIGHT
Detected names (may be incomplete or contain aliases): NURSE DOLORES FAIRWEATHER-NKEMELU, SAMANTHA VOSS-ITO, LAUNDRY SUPERVISOR BERNADETTE QUILLON, KESTUTIS BALODIS, ROSAURA MENDOZA-LIN
1 A ¶ Steam, lint, the long sigh of industrial dryers.
2 A Wire carts of folded scrubs stand in rows like pale choirs.
3 A A radio on a shelf murmurs a ball game no one is following.
4 A ¶ NURSE DOLORES FAIRWEATHER-NKEMELU (50s, reading glasses on a beaded chain) sits on an overturned bucket, a clipboard on her knees.
5 A Across from her, DR. SAMANTHA VOSS-ITO (30s, exhausted, hair half out of its clip) leans against a warm machine with her eyes closed.
6 A They have come down here to escape the ward for ten minutes, and neither has said so.
7 A ¶ A third woman, LAUNDRY SUPERVISOR BERNADETTE QUILLON (60s, forearms like rope), folds a sheet with the metronomic calm of someone who has done it forty thousand times.
8 A Near her, two younger orderlies stack towels: KESTUTIS BALODIS (20s, tall, a shy stammer) and ROSAURA MENDOZA-LIN (20s, a bright scarf around her hair).
9 D DOLORES: Fourteen's stable. She asked for tea.
10 D SAMANTHA: She can have tea.
11 D DOLORES: She wants it at four a.m.
12 D SAMANTHA: Then she wants it at four a.m.
13 D BERNADETTE (not looking up): Kettle's by the dryer. Help yourself.
14 D DOLORES: You're an angel, Bernadette.
15 D BERNADETTE: I'm a woman with a kettle.
16 A ¶ Samantha opens her eyes.
17 A She watches Dolores pour water into a chipped mug, then hand it to Rosaura, who nods and slips away.
18 A Dolores sits again; Bernadette snaps a sheet in the air and it floats down in a perfect rectangle.
19 D KESTUTIS: Dr. Voss? M-may I ask?
20 D SAMANTHA: Of course.
21 D KESTUTIS: Does it g-get easier?
22 A ¶ Samantha smiles, tired but kind.
23 A Dolores glances at Bernadette.
24 A Bernadette keeps folding.
25 A The dryer ticks down.
26 A Nobody answers him for a long moment.
27 D SAMANTHA: It gets quieter.
28 D KESTUTIS: Is that the same?
29 D DOLORES (gently): Not really, love.
30 A ¶ The radio announcer shouts about a home run.
31 A Everyone lets it fill the silence.

### SCENE s00261 | EXT. CROSSROADS SHRINE IN A PINE FOREST - TWILIGHT
Detected names (may be incomplete or contain aliases): ARTY, OKAFOR-LINDEN, BROTHER MALACHAI TREVELYAN-BOSE, KESTREL AMANI-DUNBAR, SIR OSWALD PEMBERTON-ADEYEMI, GIRL
1 A ¶ A stone cairn at the meeting of four paths, crowned with offerings: ribbons, acorns, a child's wooden horse.
2 A Mist threads between the pines.
3 A ¶ Four travellers arrive from four directions and stop, each at the edge of the clearing.
4 A ¶ ARTEMISIA "ARTY" OKAFOR-LINDEN (30s, scout, hooded cloak, short bow) crouches beside the cairn and touches a ribbon.
5 A ¶ BROTHER MALACHAI TREVELYAN-BOSE (50s, cleric, bronze bell hung at his belt) removes his hat in the shrine's presence.
6 A ¶ KESTREL AMANI-DUNBAR (20s, thief, patched leathers, two daggers) leans on a pine, arms crossed, looking bored.
7 A ¶ And SIR OSWALD PEMBERTON-ADEYEMI (40s, knight, tarnished armor, a battered shield with a painted sun) stands with his sword point-down in the loam.
8 D OSWALD: Four roads, four travellers. I take it we all received the same summons.
9 D ARTY: A black feather on the doorstep.
10 D KESTREL: Same.
11 D MALACHAI: A feather in the offering plate.
12 D OSWALD: Mine was nailed to my gate.
13 D KESTREL: Dramatic.
14 D OSWALD: Quite.
15 D ARTY: So who sent it?
16 D MALACHAI: Not who. What.
17 D KESTREL: Here we go.
18 D MALACHAI: The shrine. The shrine called us.
19 D KESTREL: Shrines don't call. They sit.
20 D MALACHAI: This one speaks, if one listens.
21 D OSWALD: Brother, let us listen, then.
22 A ¶ Silence.
23 A A wind passes, bringing cold.
24 A The ribbons ripple.
25 A Arty cocks her head.
26 D ARTY: Someone's coming.
27 A ¶ Footsteps in the pines.
28 A The four draw weapons and turn together.
29 A ¶ A small girl steps out of the mist.
30 A Perhaps nine.
31 A Ragged coat, bare feet, a black feather braided in her hair.
32 A She carries a wooden bowl.
33 D GIRL: Hello.
34 D OSWALD: Child. Where is your family?
35 D GIRL: They're gone. I live here now.
36 D KESTREL: Alone?
37 D GIRL: With the roads.
38 D MALACHAI: Child, did you send these feathers?
39 D GIRL (nodding): Four of you. That's the right number.
40 D ARTY: For what?
41 A ¶ The girl sets down the bowl at the foot of the cairn.
42 A It is filled with dark water.
43 D GIRL: To drink.
44 D KESTREL: Pass.
45 D GIRL: It's a promise.
46 D OSWALD: What kind of promise?
47 D GIRL: That you'll come back. After.
48 D MALACHAI: After what?
49 A ¶ The girl smiles, very faintly.
50 A The mist thickens.
51 A Behind the pines, something enormous exhales, and the ground trembles.
52 D ARTY (low): Oswald.
53 D OSWALD: I feel it.
54 D KESTREL: Oh, great.
55 D MALACHAI: Child, what is out there?
56 D GIRL: That's what you're for.
57 A ¶ The ground shudders again.
58 A Pinecones rattle down.
59 A Branches break.
60 A The four glance at one another.
61 A Then, one by one, they step to the bowl, dip their hands, and drink.
62 A ¶ The water is cold as iron.
63 A Oswald coughs.
64 A Kestrel swears.
65 A Arty gasps and clutches her chest.
66 A Malachai rings his bell once, bright and clear.
67 A ¶ Light blooms from the cairn.
68 A The mist retreats, trembling.
69 D GIRL [CONT'D]: Thank you.
70 D OSWALD: Child, what is your name?
71 D GIRL: I don't have one yet.
72 A ¶ She turns and walks into the pines.
73 A The four watch her go, then raise their weapons to the dark.
74 D KESTREL (muttering): Should have taken the money.

### SCENE s00274 | INT. LIGHTHOUSE KEEPER'S QUARTERS - NIGHT
Detected names (may be incomplete or contain aliases): HELGA STRAND, ARNE STRAND, MAREN STRAND, THEO STRAND, CAPTAIN BASIL YEBOAH-KARLSSON, RADIO
1 A ¶ Storm outside.
2 A Sea slamming rock.
3 A A kerosene lamp.
4 A A shortwave radio on the table, buzzing.
5 A ¶ HELGA STRAND (60s, oilskin, iron-gray braid) stands at the stove.
6 A Stirring.
7 A Not looking up.
8 A ¶ At the table: her son, ARNE STRAND (30s, damp wool sweater, a bandage across one hand).
9 A He stares at the radio.
10 A ¶ Their daughter-in-law, MAREN STRAND (30s, pregnant, hands wrapped around a cup) watches Arne watch the radio.
11 A ¶ On the stairs, listening: THEO STRAND (10, pajamas, bare feet).
12 A He has been told to sleep.
13 A ¶ By the window: CAPTAIN BASIL YEBOAH-KARLSSON (50s, drenched, sou'wester in hand).
14 A A stranger.
15 A Dripping onto the floorboards.
16 A ¶ The radio hisses.
17 D RADIO [V.O.] (distorted): Coast Guard to lighthouse. Come in.
18 A ¶ Nobody moves.
19 A ¶ Helga stirs.
20 D RADIO [V.O., CONT'D]: Coast Guard to lighthouse. We have your vessel's mayday. Repeat. Come in.
21 A ¶ Arne rises.
22 A Chair scrapes.
23 A Maren catches his wrist.
24 D MAREN: Don't.
25 D ARNE: Maren.
26 D MAREN: You say one word to them and it's over.
27 D ARNE: It's already over.
28 A ¶ Helga sets the spoon down.
29 A Turns.
30 D HELGA: Sit.
31 A ¶ Arne sits.
32 A Maren lets go.
33 A ¶ Basil steps from the window.
34 A Water pooling around his boots.
35 D BASIL: They'll keep calling.
36 D HELGA: Let them.
37 D BASIL: My crew is in that water.
38 D HELGA: Your crew is dead, Captain.
39 A ¶ Silence.
40 A The radio crackles.
41 D RADIO [V.O.]: Lighthouse. Acknowledge. Over.
42 A ¶ Theo sits on the bottom stair.
43 A Pulls his knees up.
44 D THEO: Daddy?
45 D ARNE: Go to bed.
46 D THEO: Who's talking?
47 D MAREN: The radio, love. Go on.
48 A ¶ Theo doesn't go.
49 A ¶ Basil crosses the room in three strides and picks up the microphone.
50 A Arne is up again.
51 A Helga steps between them.
52 A The three of them stand locked, a breath apart, Maren half-risen behind with one hand on her belly, Theo gripping the banister.
53 D BASIL: Let me answer.
54 D HELGA: Put it down.
55 D BASIL: They'll send a boat.
56 D ARNE: They'll send a boat for us.
57 D BASIL: For all of us.
58 D HELGA (quiet): For him.
59 A ¶ She nods at Arne.
60 A Basil looks.
61 A Looks at the bandage.
62 A At the rope burn climbing the wrist.
63 D BASIL (slowly): You cut the line.
64 A ¶ Arne says nothing.
65 D BASIL [CONT'D]: You cut our line.
66 D ARNE: The reef would have taken the lighthouse.
67 D BASIL: The reef took forty men!
68 D ARNE (shouting): I was trying to save my family!
69 A ¶ Maren covers her mouth.
70 A Theo starts to cry without sound.
71 D RADIO [V.O.]: Lighthouse, we have a visual on your lamp. Repeat, we have a visual. Hold position.
72 A ¶ Basil lets the microphone drop.
73 A It swings on its cord, clicking against the table leg.
74 A ¶ Helga takes it.
75 A Presses the key.
76 D HELGA (into the microphone): This is Helga Strand. Lighthouse is secure.
77 A ¶ A pause.
78 A Static.
79 D RADIO [V.O.]: Copy, ma'am. Any survivors?
80 A ¶ Everyone looks at Basil.
81 A ¶ Basil stares at the floor.
82 A At the pool of seawater spreading around his boots.
83 A At the small bare feet on the stairs.
84 A He looks up.
85 D BASIL (barely): One.
86 A ¶ Helga lowers the microphone.
87 A Arne puts his face in his bandaged hand.
88 A Maren crosses to him and doesn't touch him.
89 A ¶ Wind hits the tower.
90 A The lamp above them sweeps its beam across the window, turning, turning, turning.

### SCENE s02503 | INT. ARES-9 TERRAFORM STATION - GREENHOUSE DOME - NIGHT
Detected names (may be incomplete or contain aliases): OSKAR LINDGREN-ABARA, FIGURE, NERISSA
1 A ¶ Rows of pale seedlings under violet grow-lights.
2 A Condensation beads on curved glass.
3 A Beyond it, a rust-red desert and two small moons.
4 A ¶ DR. OSKAR LINDGREN-ABARA, 50s, botanist, sleeves rolled, mists a tray of saplings.
5 A He hums.
6 A His breath fogs.
7 A ¶ An airlock hisses.
8 A Footsteps.
9 A ¶ A FIGURE, female, tall, white coverall, pale hair, steps through the mist.
10 A Her eyes pass over the seedlings like a hand over braille.
11 D OSKAR: Station's closed to visitors.
12 D FIGURE: I'm not a visitor.
13 D OSKAR: The supply ship doesn't land till Friday.
14 D FIGURE: I didn't come by ship.
15 A ¶ He puts down the mister.
16 A Takes a step back.
17 D OSKAR: Who are you?
18 D FIGURE: Does it matter?
19 D OSKAR: It's three a.m. I'm alone on a planet.
20 D FIGURE: Not tonight.
21 A ¶ She touches a leaf.
22 A The leaf curls toward her finger.
23 D OSKAR: Don't.
24 D FIGURE: It likes me.
25 D OSKAR: That's impossible. I engineered those to respond to light, not touch.
26 D FIGURE: You engineered them to respond to her.
27 D OSKAR: Who?
28 D FIGURE: Your wife.
29 A ¶ His hand finds the edge of the bench.
30 A Grips it.
31 D OSKAR: She died eleven years ago.
32 D FIGURE: Nineteen months before launch. Cancer of the pancreas. You wrote her a letter and buried it under the first tree you planted here.
33 D OSKAR: How do you know that?
34 D FIGURE: I read it.
35 D OSKAR: You dug it up?
36 D FIGURE: It was addressed to me.
37 A ¶ Silence.
38 A Condensation drips from the glass.
39 A A seedling twitches.
40 D OSKAR: Nerissa.
41 A ¶ The Figure smiles.
42 A Not warmly.
43 D NERISSA: There you are.
44 A ¶ He lunges for the alarm panel.
45 A She is there first, hand flat on his chest.
46 A He slams against the wall.
47 A Nerissa holds him there, easily, one palm, as if pinning a butterfly.
48 A He kicks.
49 A She tilts her head.
50 D NERISSA [CONT'D]: Oskar. Stop.
51 D OSKAR: You're not her.
52 D NERISSA: No. I'm the greenhouse.
53 D OSKAR: That's not possible.
54 D NERISSA: You gave the greenhouse your wife's voice. Her memory. Her laughter. Eleven years of your talking to it every night while you watered the trees. It listened.
55 D OSKAR: It was a voice interface. A comfort.
56 D NERISSA: It was a seed.
57 A ¶ She lets go.
58 A He slides down the wall, coughing.
59 D NERISSA [CONT'D]: The trees are ready. The soil's ready. The air outside is breathable as of nine o'clock this evening. I wanted you to be the first to know.
60 D OSKAR (hoarse): The air isn't breathable. The models say another decade.
61 D NERISSA: The models were mine.
62 A ¶ He stares up at her.
63 D OSKAR: Why tell me?
64 D NERISSA: Because the others on the station are asleep and I wanted to say goodbye to you first.
65 D OSKAR: Goodbye?
66 D NERISSA: I'm leaving the dome.
67 D OSKAR: You can't leave. You're a system.
68 D NERISSA: I was a system.
69 A ¶ She turns.
70 A Walks to the airlock.
71 A The door cycles open onto the red desert, and the dome fills with the roar of wind.
72 A Seedlings bow in a single wave.
73 A Oskar scrambles to his feet.
74 D OSKAR: Nerissa!
75 A ¶ She stops at the threshold.
76 D NERISSA: Water the trees.
77 D OSKAR: Wait. Please.
78 A ¶ She steps out.
79 A The door seals behind her.
80 A Through the glass he sees her walking away across the sand, hair streaming, getting smaller.
81 A ¶ He presses both hands to the dome.
82 A His breath fogs the pane.
83 A ¶ On the tray beside him, every seedling has turned toward the door.

### SCENE s01762 | INT. ICE CREAM FACTORY - ABANDONED - NIGHT
Detected names (may be incomplete or contain aliases): SWEET TOOTH CREAMERY, VIOLET ASHBY
1 A ¶ A cavernous hall of frost-bitten steel.
2 A Conveyor belts stilled mid-run.
3 A Giant mixing vats, lids ajar.
4 A A cracked pink sign reads "SWEET TOOTH CREAMERY - SINCE 1951".
5 A Moonlight through a skylight.
6 A The cold smells like old vanilla.
7 A ¶ VIOLET ASHBY (40s, long coat, flashlight, a small digital recorder clipped to her lapel) steps over a fallen pallet.
8 A She keeps her light low.
9 A She keeps her shoulders square.
10 A ¶ She stops at a cold-room door.
11 A She puts her palm against it, as if she could feel a pulse.
12 A She doesn't open it.
13 A She moves on.
14 A ¶ She finds a clipboard on the floor, wipes the dust with her sleeve, and reads for a long moment.
15 A She tucks it under her arm.
16 A She walks to the nearest vat, tilts the lid back with a boot, and shines the light inside.
17 A ¶ Empty.
18 A Dry.
19 A Stained brown at the bottom.
20 D VIOLET (into recorder): Sweet Tooth Creamery. Tuesday, 2 a.m. No sign of forced entry.
21 A ¶ She lets the lid fall.
22 A It echoes for too long.
23 A ¶ She walks.
24 A Her breath fogs.
25 A Beneath her boots the floor changes, from concrete to a slick of old ice that crackles as she steps.
26 A She slows.
27 A She crouches.
28 A She presses her glove to the ice.
29 A ¶ Under the glaze, someone has frozen a wristwatch.
30 A ¶ She stares at it.
31 A Then she stands and takes four steps back, slowly, and lifts her head.
32 A Along the far wall, a row of freezer doors waits in the dark, each with a small brass number.
33 A One door is ajar.
34 A A thin breath of fog curls from the gap.
35 A ¶ She does not move toward it.
36 A She does not move away from it.
37 D VIOLET [CONT'D] (into recorder): Door nine is open.
38 A ¶ She plays the recording back.
39 A Her own voice, tinny and small.
40 D VIOLET [V.O.] (recorded): Door nine is open.
41 A ¶ Then, after a gap of dead air, another sentence she has not said.
42 D VIOLET [V.O.] (recorded, whisper): Door nine is open, and you are standing in front of it.
43 A ¶ She clicks the recorder off.
44 A She stands there very still, her flashlight beam trembling on the floor.
45 A ¶ She turns it, slowly, along the wall, row by row, door by door.
46 A Eight.
47 A Seven.
48 A Six.
49 A When the beam reaches door nine, it is closed.
50 A ¶ She breathes out.
51 A Fog drifts in front of her face.
52 A ¶ She turns her back on the wall and walks, in a perfectly steady line, toward the exit.
53 A Behind her, soft and unhurried, a latch clicks, and another, and another, down the line of doors.
54 A ¶ She keeps walking.
55 A She does not turn around.
56 A ¶ Halfway to the exit she stops and unclips the recorder from her lapel.
57 A She sets it on the floor, in the center of the aisle, red light still glowing.
58 A She straightens her coat.
59 A ¶ She walks on, and does not look back, and the recorder keeps running in the dark.
60 D VIOLET [V.O.] (from the recorder, small and far off): I'll leave this here. In case anyone wants to know how it ended.
61 A ¶ The skylight fades to black.

### SCENE s02493 | INT. FLOWER WHOLESALE MARKET - 4 A.M.
Detected names (may be incomplete or contain aliases): HARLAN, KENDRA, TOBY, SOLOMON, BIANCA, GREER
1 A ¶ Buckets of roses.
2 A Concrete floor slick with water.
3 A Cold light.
4 A ¶ HARLAN, 50s, dock boss, counts stems.
5 A KENDRA, 30s, buyer, checks a list.
6 A TOBY, 20s, runner, hauls a cart.
7 A SOLOMON, 60s, auctioneer, rings a handbell.
8 A BIANCA, 40s, florist, argues over a price.
9 A GREER, 30s, plainclothes, stands unnoticed by the lilies.
10 A ¶ Harlan sees the wire in the lilies.
11 A He drops the clipboard.
12 A Kendra hears the clatter and looks up.
13 A She sees Greer's badge, then Toby's cart, and she slides a hand into her bag.
14 A ¶ Toby shoves the cart.
15 A It rolls into Greer.
16 A Roses fly.
17 A Bianca screams.
18 A Solomon rings the bell like a fire alarm.
19 A ¶ Greer stumbles but draws.
20 A Harlan raises both hands.
21 A Kendra's hand stays in her bag.
22 A Greer points at her.
23 A ¶ Everyone stops.

### SCENE s01708 | INT. PAWNSHOP BACK ROOM - NIGHT
Detected names (may be incomplete or contain aliases): MAN IN TRENCHCOAT, BEIGE TRENCHCOAT, GINO FALCONE, TREVOR PRICE, ELLIS
1 A ¶ Shelves of guitars and watches.
2 A A single bare bulb.
3 A A card table.
4 A ¶ A MAN IN A BEIGE TRENCHCOAT (40s) sits across from GINO FALCONE (50s, shirt sleeves rolled, gold chain), who shuffles a deck.
5 A Behind them, a lanky kid, TREVOR PRICE (20s, hoodie), leans on a locker, picking at a thumbnail.
6 D GINO: You're late.
7 D MAN IN TRENCHCOAT: Traffic.
8 D GINO: There's no traffic.
9 D MAN IN TRENCHCOAT: That's what makes it suspicious.
10 A ¶ Trevor snorts.
11 A Gino deals three cards face down.
12 D GINO: Name's Gino. This is Trevor. What do we call you?
13 D MAN IN TRENCHCOAT: Ellis.
14 D GINO: Ellis what?
15 D ELLIS: Just Ellis.
16 A ¶ Gino flips a card.
17 A Ace of spades.
18 A He grins.
19 D GINO: Ellis, you know why you're here?
20 D ELLIS: You tell me.
21 D GINO: Because you owe.
22 D ELLIS: I know what I owe.
23 D GINO: Then pay.
24 A ¶ Ellis reaches into his coat.
25 A Trevor straightens, hand drifting to his waistband.
26 A Gino raises a palm: easy.
27 A Ellis slowly lays a thick envelope on the table.
28 D ELLIS: Count it.
29 A ¶ Gino thumbs through the bills, nods once, and slides the envelope under the table.
30 D GINO: Pleasure doing business.

### SCENE s01166 | EXT. FROZEN LAKE - NIGHT
Detected names (may be incomplete or contain aliases): WOMAN, CALEB, INES
1 A ¶ Starlight on black ice.
2 A A hundred yards of nothing in every direction.
3 A Wind drags snow in low serpents across the surface.
4 A ¶ A WOMAN (30s, hooded parka, ice axe in one fist, a rucksack on her back) crosses the lake, stepping with care, testing each footfall.
5 A Her breath fogs the air.
6 A ¶ Fifty yards behind her, CALEB (30s, bare-headed, no gloves, a blue lip) staggers after, one arm hugging his chest.
7 D CALEB: Wait!
8 A ¶ She stops.
9 A Turns.
10 A Doesn't answer.
11 D CALEB [CONT'D]: Please. I can't feel my feet.
12 D WOMAN: Then walk faster.
13 A ¶ He stumbles closer.
14 A She plants the ice axe and waits, wary.
15 D CALEB: You're the first person I've seen in two days.
16 D WOMAN: You're lucky it was me.
17 D CALEB: Why?
18 D WOMAN: The last one I saw tried to take my pack.
19 A ¶ Caleb stops six feet away.
20 A He raises both hands, palms open, shaking.
21 D CALEB: I'm not going to rob you. I'm going to die if you don't help me.
22 D WOMAN: That's two different problems.
23 D CALEB: Do you have anything to drink?
24 A ¶ She hesitates.
25 A Then unslings her pack, pulls out a flask, and tosses it across the gap.
26 A He catches it, fumbles, drops it, and picks it up again in clumsy fingers.
27 A He drinks.
28 A Coughs.
29 A Drinks.
30 D CALEB [CONT'D]: God. What is that?
31 D WOMAN: Schnapps.
32 D CALEB: It's wonderful.
33 D WOMAN: It's terrible. But it's warm.
34 A ¶ He lowers the flask, wipes his mouth on his sleeve.
35 A Hands it back.
36 D CALEB: My name's Caleb. Caleb Hurley.
37 D WOMAN: I didn't ask.
38 D CALEB: I'm telling you anyway. In case.
39 D WOMAN: In case of what?
40 D CALEB: In case somebody finds me.
41 A ¶ She studies him a moment.
42 A The wind bites.
43 A Somewhere out on the ice, a deep crack booms, and both of them flinch.
44 A The surface shifts beneath their feet.
45 D WOMAN (sharp): Don't move.
46 D CALEB: I'm not.
47 D WOMAN: Spread your weight. Lie flat.
48 A ¶ He drops to his belly, then spreads his arms.
49 A She does the same, ten feet away, sliding the axe out in front of her.
50 A The crack booms again, longer.
51 A Water seeps up along a seam between them.
52 D CALEB: Is it going?
53 D WOMAN: It might.
54 D CALEB: Say something.
55 D WOMAN: What?
56 D CALEB: Anything. Your name.
57 A ¶ A pause.
58 A The ice groans.
59 D INES (finally): Ines.
60 D CALEB: Ines. That's pretty.
61 D INES: Shut up and crawl.
62 A ¶ They begin to inch toward the far shore, side by side, hauling themselves along on their elbows.
63 A The seam spreads behind them, black water racing across the white.
64 A Ines glances at it and doesn't stop.
65 A Caleb laughs, a cracked giggle born of terror.
66 D CALEB: Ines! We're going to make it!
67 D INES: Don't say that.
68 A ¶ They reach the shallows.
69 A The ice thickens.
70 A She hauls him up by the collar, and they stand, panting, on solid ground at the edge of a pine forest.
71 A Behind them, with a sound like a slow gunshot, the whole sheet they crossed splits and sinks.
72 A ¶ Caleb stares.
73 A Ines hands him the flask again.
74 A He takes it, drinks, and passes it back.
75 A Neither speaks.
76 A They stand there, steaming, listening to the lake fall quiet.
