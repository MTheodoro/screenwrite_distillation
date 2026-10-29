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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_opusT/group_00009.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01607 | INT. FRONT PORCH - SUMMER EVENING
Detected names (may be incomplete or contain aliases): ARCHIE, TURNBULL, PENELOPE, BARNABY
1 A ¶ A wooden porch with a creaky swing, a pitcher of lemonade sweating on a side table, a glow of fireflies in the yard beyond.
2 A ¶ GRANDPA ARCHIBALD "ARCHIE" TURNBULL (70s, suspenders, a straw hat) rocks in a wicker chair and whittles a small wooden bird.
3 A His granddaughter PENELOPE (10, scraped knees, a net) sits cross-legged on the boards.
4 A Her cousin BARNABY (8, a jar with holes punched in the lid) kneels at the porch rail.
5 D ARCHIE: Easy with the net, Penny.
6 D PENELOPE: I'm being easy.
7 D ARCHIE: You're swinging it like a baseball bat.
8 D PENELOPE: It's the only way to catch one.
9 D BARNABY: I caught three already!
10 D PENELOPE: You did not.
11 D BARNABY: I did too.
12 D PENELOPE: Show me.
13 A ¶ Barnaby holds up the jar.
14 A It glows faintly.
15 A Penelope leans in, then leaps up, swings the net, and tumbles into the lemonade table.
16 A The pitcher wobbles.
17 A Archie reaches out and steadies it.
18 A Barnaby drops the jar, which rolls off the porch and into the grass.
19 A Penelope scrambles after it, net flailing.
20 A Barnaby follows.
21 A Archie sets down the whittling knife and chuckles.
22 D PENELOPE [CONT'D] (from the yard): It got out!
23 D BARNABY (from the yard): Three got out!
24 D ARCHIE: Let them go, children. They know the way home.
25 A ¶ Penelope and Barnaby stand in the dark yard, surrounded by tiny flickering lights, their faces turned upward.
26 D PENELOPE (softly): Wow.
27 D BARNABY (softly): Yeah.
28 A ¶ Archie picks up his whittling again.
29 A The swing creaks.
30 A The fireflies drift.

### SCENE s02424 | INT. HYPERBARIC CLINIC - CHAMBER ROOM - DAY
Detected names (may be incomplete or contain aliases): SIGRID LUND, NURSE TEMBO ADEYEMI, BARRY QUILL, ARAM VOSKANIAN, LENKA VOSKANIAN, IMAI
1 A ¶ A converted cannery on a grey harbor.
2 A Inside, a steel hyperbaric chamber the size of a school bus squats on the old conveyor floor, its portholes fogged, its rivets painted a cheerful hospital blue.
3 A Pipes bundle along the ceiling like the ribs of something sleeping.
4 A ¶ Gulls scream beyond the high windows.
5 A The room hums with compressors and the faint metronome tick of a pressure gauge.
6 A ¶ DR. SIGRID LUND (50s, silver braid, reading glasses pushed into her hair) stands at the control console.
7 A She moves with unhurried care, as though the machine might wake if she is careless.
8 A A mug of tea sits cooling beside the dials.
9 A ¶ NURSE TEMBO ADEYEMI (30s, scrubs the color of lichen, a pencil through her bun) checks a chart on a clipboard.
10 A She hums something.
11 A She is the only one who hums.
12 A ¶ BARRY QUILL (40s, technician, oil on his knuckles, a lanyard of tiny brass keys) taps a gauge with one finger and frowns.
13 A He taps it again, softer.
14 A ¶ Through the nearest porthole: ARAM VOSKANIAN (70s), reclined on a padded gurney inside the chamber, a clear hood over his white hair.
15 A He lifts a hand to the glass, as if to wave at a passing train.
16 A His daughter LENKA VOSKANIAN (40s, tailored coat, phone clutched like a rosary) sits beside the porthole in the antechamber.
17 D TEMBO: He's at two atmospheres. Pulse is steady. He asked if we have any radio in there.
18 D SIGRID: Tell him no. The static makes the oxygen worse.
19 D TEMBO (smiling): I told him that. He said he doesn't mind static if it's honest.
20 A ¶ Sigrid almost laughs.
21 A She sips the tea.
22 A It is cold.
23 A She sips anyway.
24 D LENKA (through the glass slot): How long?
25 D SIGRID: Ninety minutes. We run the whole protocol. He is doing wonderfully.
26 D LENKA: He hasn't done anything wonderfully since my mother died.
27 A ¶ Sigrid says nothing.
28 A Tembo glances up from the chart, then away.
29 D BARRY (low, to the gauge): Come on, old girl. Hold the line.
30 A ¶ The needle trembles and holds.
31 A Barry exhales.
32 A He wipes his hands on a rag.
33 A ¶ In the chamber, Aram closes his eyes.
34 A Beneath the hood, his lips move.
35 A He may be praying.
36 A He may be singing.
37 A Lenka watches him and presses her palm flat against the glass.
38 D TEMBO (softly): He's lucky to have you.
39 D LENKA: He doesn't know I'm here.
40 D TEMBO: He knows.
41 A ¶ The compressor cycles.
42 A A long breath of air rushes through the pipes.
43 A Everyone in the room unconsciously matches it, inhaling and holding.
44 A ¶ Then the gauge ticks.
45 A Once.
46 A Twice.
47 A Barry stops breathing.
48 D BARRY: Doctor.
49 D SIGRID: I see it.
50 D BARRY: That's not the chamber. That's the supply line.
51 D SIGRID: I said I see it, Barry.
52 A ¶ She sets down the mug.
53 A Her hand does not shake.
54 A Her eyes do not leave the needle.
55 A ¶ A speaker crackles on the wall.
56 A DR. IMAI (V.O.) speaks from the control room upstairs, voice thin and tired.
57 D DR. IMAI [V.O.] (over speaker): Lund, the oxygen reservoir is reading low. Do you copy?
58 D SIGRID: Copy, Imai. We're checking.
59 D DR. IMAI [V.O.] (over speaker): Check faster.
60 A ¶ Sigrid releases a valve.
61 A Tembo steps in to help without being asked.
62 A They work side by side, silent, practiced, their sleeves brushing.
63 D LENKA: What's happening?
64 D TEMBO: ^Nothing to worry about.
65 D SIGRID: Routine adjustment.
66 A ¶ They say it at the same instant, to the same person, with the same smile.
67 A Lenka looks from one face to the other.
68 A She doesn't believe either.
69 A ¶ In the chamber, Aram opens his eyes.
70 A He sees the three of them moving fast beyond the glass.
71 A He smiles gently, as if he already knows.
72 A ¶ The gauge climbs.
73 A Barry kneels, finds the leaking coupling, and clamps it with bare hands.
74 A Steam hisses against his palms.
75 A He does not let go.
76 D BARRY: Got it. Got it. Hold on.
77 A ¶ His voice cracks.
78 A Sigrid turns the main valve.
79 A The hiss stops.
80 A The needle steadies.
81 A ¶ Silence.
82 A Then, slowly, gulls again.
83 A ¶ Tembo rests her forehead against the cold steel of the console.
84 A Sigrid lays a hand on her shoulder.
85 A Neither moves.
86 A ¶ Barry unclamps his burned hands, stares at them, laughs once, helplessly.
87 D LENKA (whisper): Is he all right?
88 A ¶ Sigrid walks to the porthole.
89 A Aram raises one thumb, slow, deliberate.
90 D SIGRID: He's perfect.
91 A ¶ Lenka sinks into the chair, finally letting the phone drop to her lap.
92 A It buzzes.
93 A Nobody reaches for it.
94 A ¶ The tea, forgotten, tips off the console and shatters on the cannery floor.

### SCENE s01190 | INT. TELEPHONE EXCHANGE - 1924 - NIGHT
Detected names (may be incomplete or contain aliases): CORDELIA ASHWORTH-BELL, FENWICK, CAPTAIN WARRINGTON
1 A ¶ Brass jacks, cord pairs, a wall of blinking lamps.
2 A Gaslight on mahogany.
3 A The air smells of hot wire.
4 A ¶ CORDELIA ASHWORTH-BELL (20s, headset, high collar) stands at the board plugging cords with practiced speed.
5 A Her supervisor, MRS. FENWICK (50s, iron-gray bun, pince-nez), watches from behind with a pocket watch.
6 D CORDELIA: Number, please.
7 D CAPTAIN WARRINGTON [V.O.] (over line, crackling): Connect me to the Admiralty. At once.
8 D CORDELIA: One moment, sir.
9 D MRS. FENWICK: Cordelia, that line is reserved.
10 D CORDELIA: Mrs. Fenwick, he said at once.
11 A ¶ She plugs the cord.
12 A A lamp flares red.
13 D CAPTAIN WARRINGTON [V.O.] (over line): Miss, are you there? I hear nothing.
14 D CORDELIA: Sir, the Admiralty is not answering.
15 D MRS. FENWICK (sharp): Then you disconnect, child.
16 D CORDELIA: But he'll hear the line go dead, Mrs. Fenwick.
17 D CAPTAIN WARRINGTON [V.O.] (over line, urgent): Miss, there is a fire at the harbor. Do you understand? Ring everyone.
18 A ¶ Cordelia looks at Mrs. Fenwick.
19 A Mrs. Fenwick lowers the watch.
20 D MRS. FENWICK: Ring everyone.
21 A ¶ Cordelia seizes a bundle of cords and begins to plug, plug, plug, as the lamps all blaze at once.

### SCENE s01339 | INT. FLORIST'S COLD ROOM - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE HARLOW QUINN, CAPTAIN WREN
1 A ¶ A walk-in refrigerator, ranks of white buckets, a hundred roses breathing out their sweetness.
2 A Frost on the shelves.
3 A A single bulb in a wire cage, humming.
4 A ¶ DETECTIVE HARLOW QUINN, 40s, kneels on the tile in a camel coat, breath fogging.
5 A A black glove is wrapped around one finger of a dead man's hand, which has been laid on a bucket of lilies like an offering.
6 A She sets a small pen torch between her teeth and parts the lilies.
7 A ¶ Her cell phone rings, shrill in the cold.
8 A She flinches, spits the torch into her palm, and answers.
9 D QUINN (low): Quinn.
10 D CAPTAIN WREN [V.O.] (over the phone, brisk): Where are you?
11 D QUINN: Cold room, Marlow's Flowers.
12 D CAPTAIN WREN [V.O.]: Alone?
13 D QUINN: Yes.
14 D CAPTAIN WREN [V.O.]: Get out. Now. She's on her way.
15 D QUINN: Who's on her way?
16 D CAPTAIN WREN [V.O.]: The florist. She's got a key. She's been on the phone with me for a minute, she's furious, she wants you off her property.
17 D QUINN: Captain, the body's in her fridge.
18 D CAPTAIN WREN [V.O.]: Then you've got two minutes, Harlow.
19 A ¶ Quinn snaps the torch back into her teeth.
20 A A latch clicks somewhere beyond the door.
21 A She goes still.
22 A The bulb hums.
23 A A shadow slides across the frosted glass.
24 D QUINN (muttering around the torch): She's already here.
25 A ¶ The handle turns.
26 A The door opens a crack.
27 A ¶ Quinn doesn't move.
28 A A rose petal drifts down onto the dead man's hand.
29 D CAPTAIN WREN [V.O.]: Harlow? Talk to me.
30 A ¶ The door swings wide.
31 A Light spills in.
32 A Quinn lifts the phone to her ear and does not look up.
33 D QUINN: She's here.

### SCENE s00037 | INT. NATURAL HISTORY MUSEUM, DINOSAUR HALL - NIGHT
Detected names (may be incomplete or contain aliases): CASSIUS OBAYOMI, RENATA VOSKUIJLEN, FONZ, MARBURY, PALOMA TREVINO-HALE, GUSTAV LINDQVIST, QUINCY ABERNATHY, GUARD, ROLAND PIKE
1 A ¶ A cathedral of bones.
2 A A Diplodocus skeleton arches over the central floor.
3 A Moonlight pours through high windows.
4 A Somewhere a pipe drips.
5 A ¶ A service door clicks open.
6 A Six figures in black filter in, silent as cats: CASSIUS OBAYOMI (40s, crew boss, headset), RENATA VOSKUIJLEN (30s, safecracker, tool roll), ILDEFONSO "FONZ" MARBURY (20s, climber, harness), PALOMA TREVINO-HALE (30s, hacker, laptop bag), GUSTAV LINDQVIST (60s, forger, silk gloves), and QUINCY ABERNATHY (20s, driver, nervy).
7 D CASSIUS (whispering): Clock's running. Eleven minutes.
8 A ¶ Renata crosses to a glass case under the skeleton's ribs, where a fossilized egg sits on velvet.
9 A Fonz clips a line to the beam above and begins to ascend.
10 A Paloma kneels beside a wall panel, jacks in, and her screen scrolls green code.
11 A Gustav circles the display, comparing the egg to a photograph in his palm, while Quincy hovers at the doorway, watching the corridor with his heart in his throat.
12 D PALOMA: Cameras are looped.
13 D CASSIUS: Fonz?
14 D FONZ (from above): Almost. Bone's slick.
15 A ¶ Renata pries the lock.
16 A It pops.
17 A She lifts the lid and Gustav, with trembling gloved hands, swaps the real egg for a copy, but a sharp CLICK echoes from the corridor and Quincy swallows, Fonz freezes in mid-swing, Paloma shuts her laptop, and Renata drops flat behind the case.
18 D QUINCY (hissing): Guard. Coming this way.
19 D CASSIUS: Positions.
20 A ¶ Fonz hauls himself up onto the Diplodocus ribs.
21 A Gustav tucks the real egg inside his coat and melts behind a pillar.
22 A Paloma and Renata slide under a bench, and Cassius presses against the wall beside the door as a flashlight beam swings across the floor.
23 A ¶ A GUARD, a heavyset man in his fifties named ROLAND PIKE, strolls in humming.
24 A He pauses at the case.
25 A He sweeps his light along the glass.
26 A A beat.
27 A Another.
28 A Cassius raises a fist, ready.
29 D ROLAND (muttering): Dang pigeons.
30 A ¶ He wanders off.
31 A His footsteps fade.
32 A The crew exhales as one.
33 A Fonz drops silently to the floor and the six of them regroup near the door.
34 A Cassius counts heads with a finger.
35 D CASSIUS: Out. Now.
36 A ¶ They file through the service door, one by one, Gustav last, cradling the egg like a newborn.
37 A ¶ The Diplodocus watches them go.

### SCENE s01223 | EXT. SALT FLAT - MIDDAY
Detected names (may be incomplete or contain aliases): BELLAMY, JUNIOR AKINTOLA, OLD DASH, CORAZÓN
1 A ¶ White to every horizon.
2 A The heat doesn't shimmer so much as hum.
3 A A pickup truck lies on its side, one wheel still turning, as if the world hadn't told it to stop.
4 A ¶ Three figures sit in the narrow shadow of the chassis, barely a hand's width of shade.
5 A ¶ CORAZÓN BELLAMY (50s, geologist, wide hat, lips cracked white) holds a canteen to the light and shakes it.
6 A Almost nothing sloshes.
7 A ¶ JUNIOR AKINTOLA (20s, driver, one sleeve torn off and wrapped around a swollen wrist) rocks in place, breathing through his teeth.
8 A ¶ OLD DASH, a woman of seventy known to everyone as DASH (rancher's daughter, braided silver hair, eyes narrowed to cracks), cuts a strip from her shirt with a pocketknife and does not look up.
9 D JUNIOR: It's six miles.
10 D DASH: It's nine.
11 D CORAZÓN: It's eleven if we drift north.
12 D JUNIOR: We can do eleven.
13 D DASH: You can't do three.
14 A ¶ He opens his mouth.
15 A Closes it.
16 A The wrapped wrist twitches against his chest.
17 D CORAZÓN: We wait for dusk.
18 D JUNIOR: Dusk, we're dead.
19 D DASH: Dusk, we're alive and walking.
20 D JUNIOR: Dusk, nobody comes. Nobody even knows.
21 D CORAZÓN: Somebody knows.
22 A ¶ A silence in which the metal ticks.
23 A Dash ties the strip around his wrist in a tight, practical knot.
24 A He yelps.
25 A She pats the knot twice, as if it were a dog.
26 A ¶ A sound.
27 A High, thin.
28 A Not wind.
29 A Not metal.
30 A ¶ All three go still.
31 A The sound again, rising.
32 A A pinprick of glare on the horizon, moving.
33 D JUNIOR (whispers): Is that...
34 D CORAZÓN: Don't.
35 D DASH: Mirror. Corazón, your mirror.
36 A ¶ Corazón scrabbles in her vest.
37 A Pulls out a cracked compact.
38 A Flips it open.
39 A Catches the sun and throws a white coin of light across the flat.
40 D JUNIOR: Left. Left, left!
41 D CORAZÓN: I know!
42 D DASH: Slow. Don't flash it. Hold it steady.
43 A ¶ The glare grows.
44 A A quad bike, kicking a plume of white.
45 A It slows.
46 A Stops fifty yards off.
47 A A hand rises from the rider.
48 A ¶ Junior breaks.
49 A Laughs, a wet cracked sound.
50 A Slides down against the wheel and lets his head fall back.
51 A ¶ Corazón lowers the mirror.
52 A Her hand is shaking now, finally.
53 A Dash lays her palm over it, firm, and holds it there.
54 D DASH [CONT'D]: Good girl.
55 D CORAZÓN: Don't call me that.
56 D DASH (almost a smile): Drink.
57 A ¶ She passes the canteen.
58 A Corazón drinks the last of it.
59 A Hands it to Junior first.
60 T FADE OUT.

### SCENE s02208 | INT. OFFICE PARKING LOT - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): AUDREY KOLLMAN, NATHANIEL PARK, BO, LAFAYETTE, PRUDENCE TRAN, HR
1 A ¶ Rows of cars.
2 A A cloud of exhaust.
3 A An orange sunset hits the glass tower above.
4 A A corporate banner reads SYNERGY AWAITS.
5 A ¶ AUDREY KOLLMAN (50s, VP of Operations, severe bun) sits in her sedan with the window down, a cardboard box in the passenger seat.
6 A Next to the car, her former assistant NATHANIEL PARK (20s, lanyard, nervous) holds a sad potted fern.
7 A In the next row, security guard BEAUREGARD "BO" LAFAYETTE (60s, reflective vest) leans on his golf cart.
8 A And PRUDENCE TRAN (40s, HR, cardigan) walks up, clipboard in hand.
9 D PRUDENCE: Audrey. I'm sorry.
10 D AUDREY: Don't be sorry. Be efficient.
11 D NATHANIEL: I brought your fern.
12 D AUDREY: Thank you, Nathaniel.
13 D BO: Ma'am, is there anything I can carry?
14 D AUDREY: No. Thank you, Beauregard.
15 D BO: It's Bo.
16 D AUDREY: Bo. Of course.
17 A ¶ Nathaniel sets the fern on the roof of her car.
18 A Prudence flips a page on her clipboard.
19 D PRUDENCE: There are a few forms.
20 D AUDREY: There are always forms.
21 D NATHANIEL: I can fill them out for you.
22 D PRUDENCE: Nathaniel, no.
23 D NATHANIEL: Sorry.
24 D BO (low): It's a shame.
25 D PRUDENCE: It's company policy.
26 D BO: I know. It's still a shame.
27 A ¶ Audrey starts the engine.
28 A It idles.
29 A She doesn't put the car in gear.
30 A The four of them stand in the long amber light, none of them moving.
31 D AUDREY: Well. This has been a long twelve years.
32 D NATHANIEL: It was an honour.
33 D AUDREY: Was it?
34 D NATHANIEL: It was a lot of things.
35 A ¶ She laughs, a quick, surprised sound.
36 A Prudence smiles.
37 A Bo tips his cap.
38 A Audrey puts the car in gear, takes the fern from the roof, and sets it on the passenger seat on top of the box.
39 D AUDREY [CONT'D]: Water it on Thursdays.
40 D NATHANIEL: It's yours.
41 D AUDREY: It was always yours.
42 A ¶ She drives away.
43 A They watch her go, three small figures in the light.

### SCENE s01217 | INT. FLORIST'S COLD ROOM - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE IMANI BRAITHWAITE-SOTO, TOBY, ABERNETHY-KWON, SERAFINA MOREAU-ODE, CALLUM DRAYTON
1 A ¶ Buckets of white lilies, rows of roses in plastic sleeves.
2 A Breath fogs.
3 A A compressor hums.
4 A ¶ DETECTIVE IMANI BRAITHWAITE-SOTO (40s, long coat) stands at the doorway, gun lowered.
5 A Across the aisle, TOBIAS "TOBY" ABERNETHY-KWON (30s, florist's apron, shears in hand) stands motionless among the lilies.
6 A Behind him, half hidden by a rack, SERAFINA MOREAU-ODE (30s, wedding dress under a parka) crouches.
7 A And in the corner, CALLUM DRAYTON (50s, wet suit jacket), the groom, lies on the floor, hand pressed to his side.
8 D IMANI: Put down the shears.
9 D TOBY: I'm not holding them against anyone.
10 D SERAFINA (from behind the rack): He's telling the truth.
11 D IMANI: Then who stabbed him?
12 D CALLUM (through his teeth): She did.
13 A ¶ Everyone looks at the rack.
14 A Serafina rises slowly, empty-handed.
15 A Toby steps in front of her.
16 D TOBY: He came at her. She was defending herself.
17 D IMANI: Mr. Abernethy-Kwon, step aside.
18 D TOBY: No.
19 D IMANI (to Serafina): Ms. Moreau-Ode, is that true?
20 D SERAFINA: Yes.
21 D CALLUM (to Imani): She's lying.
22 D IMANI: Mr. Drayton, don't move. Help is coming.
23 A ¶ Callum lets his head fall back among the lilies.
24 A Toby lowers the shears and lays them on a bucket.
25 A He takes Serafina's hand.
26 A Imani holsters her gun and kneels beside Callum, pressing her palm over his hand to hold the wound.
27 D IMANI [CONT'D] (quietly): Stay with me.
28 A ¶ Far off, a siren rises.

### SCENE s00769 | EXT. SLED-DOG CHECKPOINT - ALASKAN WILDERNESS - DAWN
Detected names (may be incomplete or contain aliases): MUSHER HALVARD OKONKWO-REID, VET IMELDA TORRES-BAIRD, GRAHAM FELLOWES, RACE CONTROL
1 A ¶ A log cabin half-buried in drift.
2 A Sled dogs asleep in curled rows.
3 A Smoke rises from a chimney.
4 A Race flags snap in a thin wind.
5 A ¶ MUSHER HALVARD OKONKWO-REID, thirties, sits on his sled, dog booties in his lap.
6 A Beside him, VET IMELDA TORRES-BAIRD, fifties, listens to a husky's chest with a stethoscope.
7 A Official GRAHAM FELLOWES, sixties, stands at the checkpoint with a clipboard.
8 D GRAHAM: You're twelve minutes ahead.
9 D HALVARD: That's good.
10 D GRAHAM: That's very good.
11 D IMELDA: He's sound. Lungs are clear.
12 D HALVARD: Thank you.
13 D IMELDA: She's your lead dog?
14 D HALVARD: Aurora. Eight years.
15 D IMELDA: She's tired.
16 D HALVARD: She's always tired. She never shows it.
17 A ¶ A radio on Graham's belt hisses.
18 D RACE CONTROL [V.O.] (over radio): Checkpoint Four, Race Control. Be advised: Musher Delacroix is withdrawn. Repeat, withdrawn.
19 D GRAHAM: Copy.
20 D HALVARD: Delacroix? He was my main rival.
21 D GRAHAM: Was.
22 D HALVARD: What happened?
23 D GRAHAM: His team went through the ice.
24 A ¶ Silence.
25 A Halvard lowers the booties.
26 A Imelda lifts her stethoscope from Aurora's chest.
27 D IMELDA: Oh, no.
28 D HALVARD: Is he--
29 D GRAHAM: Alive. Frostbite. Two dogs lost.
30 D HALVARD: I'm sorry.
31 D GRAHAM: You can go.
32 D HALVARD: I think I should stop.
33 D GRAHAM: Now?
34 D IMELDA: Now?
35 D HALVARD: If the ice is bad ahead--
36 D GRAHAM: It's not bad. He cut a corner. He was in a hurry.
37 A ¶ Halvard stares at Aurora.
38 A Aurora stares at him.
39 A She yawns.
40 A Slowly he laces the booties.
41 D HALVARD: Then I won't be in a hurry.
42 A ¶ He rises and calls the team.
43 A One by one the huskies stand and shake out their coats.
44 A The sled creaks.
45 A Halvard steps onto the runners.
46 D HALVARD [CONT'D] (softly): Hike.

### SCENE s00916 | INT. COUNTRY MANOR - LIBRARY - DAWN
Detected names (may be incomplete or contain aliases): INSPECTOR HAMISH LOGAN, CONSTABLE RHIANNON DAVIES, ODILE FAURE
1 A ¶ Grey light through lead windows.
2 A A body-shaped hush over the room.
3 A A fallen chair.
4 A A wine glass shattered on the hearth.
5 A ¶ INSPECTOR HAMISH LOGAN, 50s, tweed and a tired moustache, stoops over a rug stained dark.
6 A CONSTABLE RHIANNON DAVIES, 20s, hovers with a notebook, pencil pressed so hard the lead snaps.
7 A MS. ODILE FAURE, 40s, the housekeeper, stands in the doorway with a lantern, upright as a candle.
8 D LOGAN: Who found him?
9 D ODILE: I did.
10 D DAVIES (overlapping): She says she heard a crash.
11 D ODILE (overlapping): At three. I came down in my robe.
12 D LOGAN: And the door?
13 D ODILE: Locked from inside.
14 D DAVIES: Locked from inside, sir. We had to break it.
15 D LOGAN: Who has the key?
16 D ODILE: Sir Percival.
17 D LOGAN: Where's the key now?
18 A ¶ Odile says nothing.
19 A Logan straightens, looks at the constable, who looks at the hearth.
20 A Odile steps into the room, sets down her lantern on the mantel, Davies wipes her pencil on her sleeve, Logan crouches again beside the rug, and the three of them move in slow, careful circles around the same dead space, until Davies suddenly freezes and points at the shattered glass.
21 D DAVIES: Sir. There's a key.
22 A ¶ Logan follows her finger.
23 A In the splintered crystal, glinting in the grey light, lies a small brass key.
24 D LOGAN (softly): Well, well.
25 A ¶ He looks at Odile.
26 A She does not blink.

### SCENE s00946 | INT. FUNICULAR CAR, MID-ASCENT - NIGHT
Detected names (may be incomplete or contain aliases): ODALYS FERREIRA-MBEKI, MARCELLUS HOLLINGWORTH-NAKAMURA
1 A ¶ A tiny wooden cabin, varnished the color of old violins, climbing a steep rail through black pine forest.
2 A Brass lamps sway on their hooks.
3 A Rain hammers the glass.
4 A Below, the lights of a mountain town shrink to a handful of sparks.
5 A ¶ A woman sits upright on the forward bench, her coat buttoned to the throat.
6 A ODALYS FERREIRA-MBEKI is forty, with a face carved from patience and a leather satchel clutched in both hands.
7 A She watches the man across from her, and she never blinks.
8 A ¶ He is MARCELLUS HOLLINGWORTH-NAKAMURA, sixty, silver at the temples, gloves of fine kid.
9 A A cane lies across his lap.
10 A He smiles with his mouth only.
11 D ODALYS: You're late.
12 D MARCELLUS: The weather.
13 D ODALYS: It's always the weather with you.
14 A ¶ He taps the cane once against the floor.
15 A She flinches, barely.
16 A He notices.
17 D MARCELLUS: You have it?
18 A ¶ She does not answer.
19 A She lifts the satchel an inch, lets it fall back.
20 D MARCELLUS [CONT'D]: Show me.
21 D ODALYS: Not until the top.
22 D MARCELLUS: We are not going to the top.
23 A ¶ The car shudders.
24 A Something groans beneath the floor, steel on steel, and the lamps swing hard.
25 A Odalys grips the bench.
26 A He doesn't move at all.
27 D ODALYS: What did you do?
28 D MARCELLUS: Nothing yet.
29 A ¶ The cabin stops.
30 A Dead in the middle of the slope.
31 A Rain on the glass.
32 A Wind in the cables.
33 A ¶ He leans forward, resting both hands on the cane.
34 D MARCELLUS [CONT'D]: Now. Show me.
35 A ¶ Her hand slides inside the satchel.
36 A It comes out holding a small brass revolver, aimed at his chest.
37 A He looks at it, and for the first time, his smile changes.
38 D MARCELLUS [CONT'D]: Ah. There she is.
39 D ODALYS: Cut the cable, Marcellus.
40 D MARCELLUS: That isn't how it works.
41 D ODALYS: Cut it.
42 A ¶ He lifts the cane.
43 A Twists the silver handle.
44 A A thin blade slides out, gleaming.
45 A He turns it in the lamplight, almost fondly.
46 D MARCELLUS: It's a long way down, Odalys.
47 A ¶ She cocks the hammer.

### SCENE s00966 | INT. BOOTH OF AN ABANDONED RADIO STATION - NIGHT
Detected names (may be incomplete or contain aliases): HORATIA KESSELRING-OLUMIDE
1 A ¶ Dust.
2 A Dead tubes.
3 A A single working microphone on a bent boom arm, a red ON AIR light that flickers when it feels like it.
4 A HORATIA KESSELRING-OLUMIDE (60s), a retired host with a voice like warm gravel, sits at the console in a green velvet jacket.
5 D HORATIA: Good evening, listeners. If there are any of you left.
6 A ¶ This is Horatia Kesselring, and this is the last broadcast of Midnight Confessional.
7 A Tonight, we confess one thing.
8 A Just one.
9 A ¶ (beat)
10 A ¶ Thirty-one years ago, a young man called this station from a phone booth on Delaney Street.
11 A He said he had done something terrible.
12 A He said he needed to tell somebody.
13 A And I, in my infinite wisdom, said, "Call back tomorrow, honey.
14 A We're out of time."
15 A ¶ He never called back.
16 A The next morning, police found a body on Delaney Street.
17 A A girl.
18 A Her name was Marian Pruitt.
19 A ¶ (beat)
20 A ¶ I kept the tape.
21 A Every call, every night, thirty-one years.
22 A I have never played this one for anyone.
23 A Tonight I will.
24 A ¶ She presses a key on the console.
25 A Tape hiss.
26 D HORATIA [V.O.] (recorded, thirty-one years ago): Midnight Confessional, you're on the air.
27 D HORATIA: Listen. That's me, at thirty. So bright. So certain.
28 D HORATIA [V.O.] (recorded, thirty-one years ago): Go ahead, caller. You're among friends.
29 D HORATIA: He doesn't speak, you see. The tape is nineteen seconds of breathing. Nineteen. I counted them every night for thirty-one years.
30 A ¶ (beat)
31 A ¶ So I'll say what I should have said.
32 A I'm sorry, Marian.
33 A I'm sorry, whoever you were.
34 A I should have stayed on the line.
35 A ¶ (beat)
36 A ¶ This has been Horatia Kesselring.
37 A Good night, Delaney Street.

### SCENE s02112 | INT. CHEESEWORKS HEADQUARTERS - ELEVATOR - DAY
Detected names (may be incomplete or contain aliases): INTERN, GUEST, NADEZHDA FAIRBANKS, BART, OKONKWO-REYES, WINNIE TRAN, PERCIVAL STONE, HOLLOWELL, FRANCESCA
1 A ¶ A glass elevator lined with laminated posters of cheddar wheels.
2 A A speaker plays soft jazz.
3 A Six employees stand shoulder to shoulder, each holding a coffee cup.
4 A ¶ An INTERN, 20s, with a lanyard that reads GUEST, holds a clipboard.
5 A NADEZHDA FAIRBANKS, 40s, VP of Curds, adjusts her blazer.
6 A BARTHOLOMEW "BART" OKONKWO-REYES, 50s, Director of Rind, stares at the ceiling.
7 A Beside them, WINNIE TRAN, 30s, and PERCIVAL STONE, 30s, the Brie Brothers, share a single earbud.
8 A The sixth, MR. HOLLOWELL, 60s, the CEO, holds a golden wedge of cheese like a clutch purse.
9 A ¶ The doors close.
10 A The elevator does not move.
11 D NADEZHDA: Floor six, please.
12 D BART: Floor six, please.
13 D NADEZHDA (to the intern): Press six.
14 D INTERN: I did.
15 D WINNIE: It's stuck.
16 D PERCIVAL: It's thinking.
17 D MR. HOLLOWELL: Everyone stay calm. The cheese is not in danger.
18 A ¶ The lights flicker.
19 A Nobody breathes.
20 A The intern takes a half step back and presses herself against a poster of gouda.
21 A The jazz cuts out.
22 D MR. HOLLOWELL: Who are you, young lady?
23 D INTERN: My name is Francesca. I've been an intern for three days.
24 D MR. HOLLOWELL: Francesca. Do you know how to fix an elevator?
25 D FRANCESCA: No, sir. I know how to fill out a form.
26 D MR. HOLLOWELL: Then fill it out.
27 A ¶ She opens the clipboard.
28 A Winnie and Percival hold up the earbud between them, and a tiny song leaks out.

### SCENE s02464 | EXT. SKI GONDOLA - MIDWAY - DUSK
Detected names (may be incomplete or contain aliases): RAVENNA OKONKWO-DALE, LORENZO BIANCHI-RAO, KWAME ASANTE, LOTTE HOLMGREN, PEARL WAKEFIELD, CONTROL
1 A ¶ A six-seat gondola cabin dangling in the blue hour, stalled between two pylons over a canyon of pines.
2 A Wind taps the glass.
3 A Snow dusts the roof.
4 A The cable above is dead still.
5 A ¶ Inside, five people sit in silence, knees almost touching.
6 A ¶ RAVENNA OKONKWO-DALE (40s, ski patrol jacket, radio on her chest) watches the pylon.
7 A LORENZO BIANCHI-RAO (60s, fur-trimmed parka, fake smile) clutches a thermos.
8 A KWAME ASANTE (20s, snowboarder, beanie, headphones) stares at his boots.
9 A LOTTE HOLMGREN (30s, ski instructor, red jacket) cradles her phone.
10 A And in the corner, curled around a school backpack, PEARL WAKEFIELD (10, pink helmet, wide eyes) hugs her knees.
11 A ¶ Nobody speaks.
12 A The cabin sways once, then holds.
13 D RAVENNA: Everybody stay seated.
14 D LORENZO: We are seated.
15 D RAVENNA: I'm saying it so it's said.
16 A ¶ The radio on her chest crackles.
17 A CONTROL (V.O.) comes through, flat and distant.
18 D CONTROL [V.O.] (over radio): Gondola Seven, this is Base. We have a generator fault. Estimated restart forty minutes.
19 D RAVENNA (into radio): Copy, Base. We have five on board, one minor.
20 D CONTROL [V.O.] (over radio): Copy. Keep them calm.
21 A ¶ Ravenna lowers the radio.
22 A Looks around.
23 A Everyone has heard.
24 D LOTTE: Forty minutes.
25 D KWAME: Forty minutes is nothing.
26 D LORENZO: It is cold.
27 A ¶ Pearl lifts her head.
28 D PEARL: Can I have my mom?
29 A ¶ Lotte reaches across.
30 A Pearl shrinks back, then lets her take one hand.
31 D LOTTE: Hey. I'm Lotte. I teach kids how to ski.
32 D PEARL: I'm not good.
33 D LOTTE: Nobody's good at first.
34 A ¶ Lorenzo unscrews the thermos.
35 A Pours a little into the cap.
36 A Offers it to Pearl.
37 A Ravenna intercepts.
38 D RAVENNA: Cocoa?
39 D LORENZO: Brandy.
40 D RAVENNA: No.
41 D LORENZO: It is only a little.
42 D RAVENNA: She's ten.
43 A ¶ He sighs and drinks it himself.
44 A Kwame watches the pylon; the wind picks up and the cabin rocks.
45 A Everyone grabs a bar, a seat, a knee.
46 A Pearl yelps.
47 A ¶ The rocking eases.
48 A A hush falls.
49 A Kwame lowers his head and begins to hum, low, tuneless.
50 A One by one, they listen.
51 D LOTTE (softly): That's nice. Keep going.
52 A ¶ Lorenzo shifts.
53 A His fur collar rustles.
54 A He leans forward and, for the first time, speaks without the smile.
55 D LORENZO: I am afraid of heights.
56 A ¶ Nobody answers.
57 A Ravenna lays a hand on his knee.
58 A Kwame removes one earbud and offers it to Pearl without looking.
59 A ¶ Pearl hesitates, then puts it in.
60 A Her eyes widen.
61 D PEARL: It's loud.
62 D KWAME: Yeah.
63 D PEARL: I like it.
64 A ¶ Something clanks overhead.
65 A All five look up.
66 A A wire hums.
67 A The gondola shudders, then drops six inches and catches.
68 A ¶ Pearl screams.
69 A Lotte grabs her.
70 A Lorenzo grips the bar.
71 A Kwame's humming rises.
72 D RAVENNA (into radio): Base! Base, we just dropped!
73 D CONTROL [V.O.] (over radio): Gondola Seven, say again?
74 D RAVENNA: We dropped six inches!
75 D CONTROL [V.O.] (over radio): Copy. Stand by.
76 A ¶ The cabin trembles.
77 A Nobody breathes.
78 A ¶ The cable twitches.
79 A A creak runs down it like a bowstring.
80 A The gondola lurches forward, one foot, two, then stops again.
81 D KWAME: We're moving.
82 D LOTTE: We're moving!
83 A ¶ Kwame's humming swells.
84 A Lorenzo closes his eyes.
85 A Pearl takes out the earbud and hands it back, solemn.
86 D PEARL: Thanks.
87 D KWAME: Anytime.
88 A ¶ The gondola glides, smooth and certain, down toward the lights of the valley.
89 A ¶ Ravenna lowers the radio.
90 A Closes her eyes.
91 A Exhales for the first time in forty minutes.

### SCENE s02332 | INT. RUINED OPERA HOUSE - FIELD HOSPITAL - NIGHT
Detected names (may be incomplete or contain aliases): SISTER AGNIESZKA, SERGEANT HOLLIS BRANTLEY
1 A ¶ The stage is a ward.
2 A Cots under gilded boxes.
3 A Candles in wine bottles.
4 A Above, a painted ceiling of cherubs, half of it fallen onto the stalls.
5 A ¶ SISTER AGNIESZKA, 30s, moves between the cots with a basin and a rag.
6 A Her habit is gray with dust.
7 A She stops at the last bed.
8 A ¶ SERGEANT HOLLIS BRANTLEY, 20s, lies on the final cot.
9 A His left arm is bandaged to the shoulder.
10 A He has been awake for hours.
11 A ¶ She sets the basin down.
12 A He watches her wring the rag.
13 D BRANTLEY: Is it quiet out there?
14 D AGNIESZKA: It has been since midnight.
15 A ¶ He nods.
16 A She presses the cloth to his forehead, and he flinches, then lets her.
17 D BRANTLEY: You have a kind hand, Sister.
18 D AGNIESZKA: I have a tired hand.
19 A ¶ She smiles slightly.
20 A He almost does.
21 A The candle flames lean in a draft and straighten.
22 D BRANTLEY: I haven't heard a bomb in four hours.
23 D AGNIESZKA: Don't say it aloud.
24 D BRANTLEY: Why?
25 D AGNIESZKA: Because the building listens.
26 A ¶ He laughs, then winces.
27 A She adjusts the blanket.
28 A Her fingers brush the dog tags at his throat.
29 A She holds them a moment, turned to the candle.
30 A ¶ Her face does not change.
31 A Her hand does not move.
32 D AGNIESZKA [CONT'D] (quietly): Brantley.
33 D BRANTLEY: Yes?
34 D AGNIESZKA: That is an English name.
35 D BRANTLEY: It's my name.
36 A ¶ She lets go of the tags.
37 A Straightens.
38 A Takes up the basin.
39 D AGNIESZKA: I will bring you water.
40 D BRANTLEY: Sister, I'm in the right ward, aren't I?
41 A ¶ She stops.
42 A She does not turn.
43 D AGNIESZKA: It is the only ward there is.
44 A ¶ She walks away, careful not to hurry.
45 A At the proscenium she sets down the basin, steps behind the curtain, and presses her back to the wall.
46 A ¶ Her hand goes inside her habit.
47 A It comes out holding a pistol.

### SCENE s00345 | EXT. FLOODED RICE PADDY DIKE - DAWN
Detected names (may be incomplete or contain aliases): HARGREAVE, DOC, BIANCHI, LIN TRAN, OKAFOR
1 A ¶ A narrow earthen dike cuts across a drowned paddy, mist lying on the water like a sheet.
2 A A single banyan tree stands at the far end.
3 A Distant mortar thuds roll across the flat.
4 A ¶ LT. HARGREAVE, thirties, a young officer with a map case, crouches at the dike's edge.
5 A SGT. "DOC" BIANCHI, forties, a medic with a red-cross satchel, crouches beside him.
6 A PVT.
7 A LIN TRAN, twenty, a scout, lies prone in the mud at the lead.
8 A CPL.
9 A OKAFOR, thirties, the radioman, hunkers behind them with the set on his back, the antenna bending as he twists to look behind.
10 D HARGREAVE: Doc, keep it down.
11 D DOC: I am down, Lieutenant. I'm lying in a rice paddy.
12 D LIN: Contact, left.
13 A ¶ Hargreave lifts his head, Doc grabs the satchel, Okafor drops the handset, and all four of them flatten as a burst of fire stitches the water twenty feet away and sends up silver fans.
14 D HARGREAVE: Okafor, call it in.
15 D OKAFOR: Sir, I can't call it in. They're listening.
16 D HARGREAVE: Then talk in code.
17 D DOC: What code?
18 D OKAFOR: The cornflakes code.
19 D HARGREAVE: OKAFOR, do not say cornflakes.
20 D OKAFOR: Sir, cornflakes is the code!
21 D DOC: Gentlemen, I would like to survive the morning.
22 D LIN: They're moving.
23 A ¶ Hargreave raises a hand.
24 A Lin crawls back, drags the radio, thumbs the key twice.
25 A Static pops.
26 A A voice crackles, faint.
27 D HARGREAVE: Everyone on me. We go in three.
28 D DOC: Three what?
29 D HARGREAVE: Three, Doc.
30 A ¶ They rise as one, bent double, and splash down the dike toward the banyan with the fog swallowing them, all four of them running.

### SCENE s01001 | INT. ORBITAL LAUNDERETTE - ZERO-G - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): PAXTON, REN, ULLA, VASHTI
1 A ¶ A drum-shaped room on a space station.
2 A Washing machines turn in the walls like portholes.
3 A Loose socks drift like jellyfish.
4 A Magnetic benches hold a few late-shift residents.
5 A ¶ PAXTON (40s, patched coverall, braided beard) floats near the dryer bank with a sack of laundry.
6 A REN (20s, hoodie, cheap vac-boots) types on a handheld.
7 A ULLA (60s, silver hair in a net, folded newspaper) reads upside down.
8 A VASHTI (30s, clean uniform, security patch) stands by the door, hand on a holster.
9 D PAXTON: Ren, that's the third load you've started.
10 D REN: It's a long week.
11 D ULLA: You're running a hot cycle. It's against regs.
12 D REN: It's one sock.
13 D VASHTI: Everyone remain calm.
14 A ¶ A siren whoops.
15 A Red light pulses.
16 A The machines shudder.
17 A Socks scatter.
18 A Paxton and Ren grab the same handhold.
19 A Ulla folds her newspaper and tucks it under her arm.
20 D VASHTI [CONT'D]: That's a hull breach klaxon.
21 D PAXTON: Where?
22 D VASHTI: Dryer six.
23 A ¶ All four look at dryer six.
24 A Its door bulges outward like a bubble.
25 A Something is knocking from inside.
26 D REN: It's just the sock.
27 D ULLA: That is not a sock.
28 A ¶ The door bursts.
29 A A flood of foam and lost clothing gushes out, followed by a gasping, soapy cat.
30 A It twists in midair, lands on Vashti's chest, and clings.
31 D VASHTI (deadpan): I'm going to need a bigger form.
32 A ¶ The siren stops.
33 A The lights return to white.
34 A The four of them hover in the foam, staring at the cat.

### SCENE s01359 | INT. TELEGRAPH OFFICE, LONDON - NIGHT (1912)
Detected names (may be incomplete or contain aliases): PERCIVAL ASHDOWN, MISS ROSALIND TREVETHAN, LORD ALISTAIR CROYDE, HARRIET LUCAS, OPERATOR
1 A ¶ Brass keys.
2 A Glass cases.
3 A A gas lamp.
4 A A wall of pigeonholes.
5 A The tick of a dozen sounders.
6 A Rain on the glass.
7 A ¶ MR. PERCIVAL ASHDOWN, 50s, stiff collar, spectacles, sorts slips.
8 A MISS ROSALIND TREVETHAN, 20s, clerk, hair pinned up under a cap, taps the key.
9 A LORD ALISTAIR CROYDE, 50s, in a fur-collared coat, waits at the counter, drumming gloved fingers.
10 A And a woman, HARRIET LUCAS, 30s, in a plain brown coat, stands at the far end of the counter holding an unopened envelope.
11 A ¶ Ashdown clears his throat.
12 D ASHDOWN (to the room): Ladies and gentlemen. We are experiencing delay. The Atlantic cable is busy.
13 D CROYDE (to Ashdown): How busy?
14 D ASHDOWN: Very.
15 D CROYDE: Is it the Titanic?
16 A ¶ Silence.
17 A Rosalind's hand stills on the key.
18 D ASHDOWN: It is, my lord.
19 A ¶ Harriet puts the envelope down.
20 D HARRIET (under her breath): My brother was a stoker.
21 D ROSALIND (to Harriet): Miss, I am so sorry.
22 A ¶ The sounder clatters.
23 A Rosalind leans in, writes, tears the slip.
24 D ROSALIND [CONT'D] (to the room): Message. Carpathia has picked up survivors.
25 A ¶ A breath goes through the office.
26 A Croyde takes off his hat.
27 A Ashdown snatches the slip and reads it.
28 D ASHDOWN (to Rosalind): Is there a list?
29 D ROSALIND: Not yet.
30 D OPERATOR [V.O.] (over the sounder, faint, relayed): Names to follow. Standby, London.
31 A ¶ Harriet takes a step forward, then stops.
32 D HARRIET (to herself): Please, Tom. Please.
33 D CROYDE (to Ashdown): Mr. Ashdown, send a message to my wife. Tell her I have an interest.
34 D ASHDOWN: My lord, there are priorities.
35 D CROYDE: I am aware of that, Ashdown.
36 A ¶ Rosalind keys again.
37 A The sounder answers.
38 D ROSALIND (reading): Names. First batch.
39 A ¶ The whole room leans in.
40 A Rosalind begins to read aloud, each name a stone dropped into a well.

### SCENE s02439 | EXT. SALT FLATS - DUSK
Detected names (may be incomplete or contain aliases): AMOS QUARLES
1 A ¶ Blinding white ground.
2 A A lone wagon with a broken wheel.
3 A Heat shimmer.
4 A ¶ AMOS QUARLES (50s, sunburned, hat brim torn) sits on the tailgate with a pencil stub and a crumpled sheet of paper.
5 A He writes.
6 A Stops.
7 A Rereads.
8 D AMOS [V.O.]: Dear Ruth. The wheel went at noon. The water went at two.
9 A ¶ He licks the pencil.
10 D AMOS [V.O., CONT'D]: I walked to the ridge. Nothing there but wind.
11 A ¶ He stands.
12 A Shades his eyes.
13 A Nothing in any direction.
14 A ¶ Amos kicks the dead wheel.
15 A It rolls an inch, falls over.
16 D AMOS [V.O., CONT'D]: I think I'll wait for the stars. They never lied to me yet.
17 A ¶ He sits back down.
18 A Folds the letter into his hat.
19 A ¶ Far off, a faint metallic ring.
20 A A bell.
21 A ¶ Amos looks up.
22 D AMOS (whispering): Well, now.
23 A ¶ He stands.
24 A Picks up his canteen.
25 A Shakes it.
26 A Empty.
27 A He walks toward the sound anyway.

### SCENE s01619 | INT. SEASIDE BOARDING HOUSE - ATTIC - NIGHT
Detected names (may be incomplete or contain aliases): ODELIA PRINGLE, HORACE BLACKWOOD-ADE, MISS CONSTANCE TAMBLYN, FERDINAND OKORO-STRAND, THOMAS
1 A ¶ Slanted beams.
2 A A cracked skylight.
3 A Moonlight on trunks, hatboxes, a headless dressmaker's dummy.
4 A The air smells of salt and mildew.
5 A ¶ Five guests have climbed the narrow stair with lanterns.
6 A ¶ MRS. ODELIA PRINGLE (60s, shawl, a ring of keys) leads.
7 A DR. HORACE BLACKWOOD-ADE (50s, black bag, bowler hat) follows.
8 A Then MISS CONSTANCE TAMBLYN (20s, nightgown under a coat), clutching a candle.
9 A Behind her, MR. FERDINAND OKORO-STRAND (40s, braces, a revolver he clearly does not know how to hold), and last, young THOMAS (12, nightshirt, wide-eyed, a tin whistle).
10 D ODELIA (to the group): Stay close. The floor is rotten in places.
11 D HORACE: Mrs. Pringle, what precisely are we looking for?
12 D ODELIA: The thing that has been tapping.
13 D CONSTANCE (whispering): It tapped again last night.
14 D FERDINAND (to himself): Nerves. Nothing but nerves.
15 D THOMAS: It's not nerves.
16 D ODELIA: Quiet, boy.
17 A ¶ A single tap from behind the dummy.
18 A Everyone freezes.
19 A Constance's candle trembles.
20 A Ferdinand raises the revolver, then lowers it, then raises it again.
21 A ¶ A second tap.
22 A A third.
23 A A scrape, as of fingernails on wood.
24 D HORACE (low): Who is there?
25 A ¶ The dummy topples.
26 A Dust billows.
27 A A dark shape lunges across the trunks.
28 A Constance screams.
29 A Ferdinand fires wildly, the shot punching a hole in the skylight.
30 A Horace dives behind a hatbox.
31 A Odelia swings her lantern.
32 A Thomas blows a shrill note on his whistle.
33 A ¶ The shape hisses, springs up through the broken glass, and disappears into the night.
34 A ¶ Silence.
35 A Glass tinkles.
36 A Moonlight pours through the new hole.
37 A The five of them stand panting among the trunks, one by one lowering their lanterns.
38 D THOMAS (softly): It was a gull.
39 D FERDINAND (shakily): A gull.
40 D HORACE: A very large gull.
41 A ¶ Odelia lifts the dummy upright with one hand and straightens its collar.
42 D ODELIA: Back to bed, all of you.
43 A ¶ She turns.
44 A One by one they file down the stairs.
45 A Thomas is last.
46 A He pauses at the top, tin whistle in hand, and looks back at the skylight.
47 A ¶ Something taps.
48 A Once.

### SCENE s00305 | INT. NIGHT-SHIFT BAKERY - BACK ROOM - 4 AM
Detected names (may be incomplete or contain aliases): TEODORICO ABARA-LINDBERG, PENNY, NAKASHIMA-OKOYE, STRANGER, QUINCY ADEYEMI-HALVORSEN, PERPETUA
1 A ¶ Flour dust.
2 A Steel tables.
3 A Racks of dough rising under damp cloths.
4 A A radio plays something soft and unidentifiable.
5 A ¶ MR. TEODORICO ABARA-LINDBERG (60s, apron, gentle) kneads.
6 A His assistant, PENELOPE "PENNY" NAKASHIMA-OKOYE (20s, hairnet), oils pans.
7 A At the doorway, a STRANGER in a rain-soaked coat stands with a baguette-shaped package.
8 A Behind her, hiding behind the oven door, is a small, wide-eyed apprentice, QUINCY ADEYEMI-HALVORSEN (12, flour on his nose).
9 D STRANGER: Good morning. Are you the baker?
10 D TEODORICO: Everyone here is the baker.
11 D STRANGER: I mean the baker who makes the seeded rye.
12 D TEODORICO: Ah. That's Penny.
13 D PENNY: That's me.
14 D STRANGER: Then I owe you an apology.
15 D PENNY: For what?
16 D STRANGER: I left a one-star review.
17 D PENNY (not looking up): I remember.
18 D STRANGER: I was in a mood.
19 D PENNY: You called it "a brick with ambitions."
20 D STRANGER: It was a very good brick.
21 A ¶ Teodorico chuckles into the dough.
22 D STRANGER [CONT'D]: My name is Perpetua.
23 D PERPETUA (correcting): Perpetua Chen-Oyelowo. I'm the reviewer.
24 D PENNY: We know. You've been in the paper.
25 D PERPETUA: Then you know I'm contractually obliged to review again.
26 D TEODORICO: Of course.
27 D PERPETUA: I came to taste it. Before I write.
28 A ¶ Quincy peeks around the oven.
29 D QUINCY: It's still rising.
30 D PERPETUA: Then I'll wait.
31 D TEODORICO: Penny, make her tea.
32 D PENNY: I'm making her toast first.
33 A ¶ She slides a loaf from the rack and slices it.
34 A Perpetua sits on an overturned crate.
35 A Quincy tiptoes to sit beside her.
36 A The radio hums.
37 A Nobody, for a while, says anything.

### SCENE s01821 | INT. DISUSED CURLING RINK - NIGHT
Detected names (may be incomplete or contain aliases): COACH HALVORSEN, DEE, OKORO, NADIA PETROVIC, REYES, WINNIE CHO, LUCAS BRANDT, BIG TOMÁS
1 A ¶ Half the lights are dead.
2 A A sheet of ice gone gray, scarred by years of rental hockey.
3 A Folding chairs along the boards.
4 A A cooler.
5 A A speaker on a bucket playing nothing.
6 A ¶ Six people wait for a seventh who is late.
7 A ¶ COACH HALVORSEN, 50s, whistle on a shoelace, sits on the penalty box bench and pares an apple with a pocketknife.
8 A DESHAWN "DEE" OKORO, 30s, goalie pads already strapped, stares at his own skates.
9 A NADIA PETROVIC, late 20s, captain's C stitched crooked on her jersey, tapes a stick that is already taped.
10 A BIG TOMÁS REYES, 40s, enormous, eats sunflower seeds one at a time.
11 A WINNIE CHO, 19, new, sits straighter than the others.
12 A And LUCAS BRANDT, 30s, sponsor's nephew, wears a pressed team jacket and nothing else that says he plays.
13 A ¶ Nobody speaks.
14 A Tomás spits a shell into a cup.
15 D COACH HALVORSEN: Ice time ends at ten.
16 D NADIA: It's nine-forty.
17 D COACH HALVORSEN: So.
18 A ¶ Nadia stands, skates onto the ice, and does one lap alone.
19 A Winnie watches her.
20 A Lucas watches Winnie.
21 D LUCAS: Is she always like this?
22 A ¶ Tomás turns his head slowly.
23 D BIG TOMÁS: Like what.
24 D LUCAS: Intense.
25 A ¶ Tomás goes back to his seeds.
26 D DEE (not looking up): You're in Winnie's spot.
27 D LUCAS: It's a bench.
28 D DEE: She sits there.
29 A ¶ Lucas does not move.
30 A Winnie does not ask him to.
31 A She takes her helmet off the floor and puts it on, chin strap clicked slowly.
32 D COACH HALVORSEN: Dee. You're starting.
33 D DEE: I'm starting every game.
34 D COACH HALVORSEN: I know.
35 A ¶ He folds the knife.
36 A Eats the apple core and all.
37 A ¶ Nadia finishes her lap and stops at the boards in front of Lucas, close enough that her breath fogs his jacket.
38 D NADIA: Who gave you a roster spot?
39 D LUCAS: My uncle owns the sponsor.
40 D NADIA: Right. And who gave him a tax break?
41 D LUCAS: I didn't come here to fight.
42 D NADIA: You didn't come here to play either.
43 D WINNIE: Leave it.
44 D NADIA: He took your minutes.
45 D WINNIE: I said leave it.
46 A ¶ Silence.
47 A The speaker crackles and cuts out again.
48 A ¶ Tomás stands.
49 A He is very tall standing.
50 A He picks up Lucas's stick from the rack, studies it, and hands it back blade first.
51 D BIG TOMÁS: Tape's wrong.
52 D LUCAS: I taped it this morning.
53 D BIG TOMÁS: That's what I said.
54 A ¶ Lucas takes the stick.
55 A His hand shakes a little on the shaft and he hides it by gripping tighter.
56 A ¶ Coach Halvorsen blows his whistle once.
57 A Everyone stops.
58 D COACH HALVORSEN: Lucas. Line one.
59 D NADIA: Coach.
60 D COACH HALVORSEN: Line one, with Winnie and Tomás.
61 D NADIA: That's my line.
62 D COACH HALVORSEN: Then you'll be on the bench.
63 A ¶ Nadia looks at him.
64 A At Lucas.
65 A At Winnie.
66 A She takes the C off her chest in one hard tear and drops it on the ice, where it sits, a small crooked patch.
67 A ¶ Nobody moves to pick it up.
68 D DEE (low): Nadia.
69 D NADIA: Don't.
70 A ¶ She skates off to the far end.
71 A Slams the boards with her stick.
72 A The sound goes up into the dead lights and comes back.
73 A ¶ Winnie steps onto the ice.
74 A Lucas follows, wobbles, catches himself on her sleeve.
75 A She lets him hold it for a second, then removes his hand.
76 D WINNIE: Skate wide. Don't touch anyone.
77 D LUCAS: Why not?
78 D WINNIE: Because she's waiting for you to.
79 A ¶ At the far end Nadia has stopped.
80 A She turns.
81 A Her stick comes up.
82 D TOMÁS (under his breath): Here we go.
83 A ¶ Dee pulls his mask down.
84 A The puck drops by itself, dropped from Coach's fist onto the ice with a click, and then there is only the sound of blades.
85 A ¶ Nadia is already moving.
86 A Lucas tries to turn and cannot.
87 A She hits him hip-first into the boards and the whole rink shakes.
88 A He goes down.
89 A She stands over him, breathing, her stick lifted to the height of her shoulder.
90 A ¶ Tomás is on her in two strides, wrapping her arms.
91 A Winnie is between them.
92 A Dee has left the net and is standing at the blue line, mask pushed up, pads dripping frost.
93 D NADIA (through teeth): Let go of me.
94 D BIG TOMÁS: When you drop it.
95 A ¶ She doesn't.
96 A He doesn't.
97 A The stick shakes between them.
98 D COACH HALVORSEN (from the bench, calm): Ten o'clock.
99 A ¶ The lights above the far end click off, one bank after another, until the only light left is over the six of them, and then that one goes too.

### SCENE s01228 | INT. REHEARSAL STUDIO - FORMER BELL FOUNDRY - AFTERNOON
Detected names (may be incomplete or contain aliases): OZZIE, TREMBLAY, DELPHINE MARCHAND, HIRO TANABE, MARGIT
1 A ¶ A long brick hall that smells of cold metal and dust.
2 A Sunlight slants through high windows onto a row of bronze bells hung on a rack like sleeping bats.
3 A A single upright piano, lid open.
4 A ¶ OSWALDO "OZZIE" TREMBLAY (60s, choirmaster, silk scarf, a frail dignity) stands at the piano, turning pages of a score that does not need turning.
5 A ¶ Three chairs.
6 A Only two are filled.
7 A ¶ DELPHINE MARCHAND (30s, soprano, beautiful in a distracted way) hums a scale under her breath.
8 A ¶ HIRO TANABE (30s, baritone, sleeves rolled, forearm tattoo of a tide chart) studies his phone.
9 A ¶ The third chair is empty.
10 A Ozzie glances at it.
11 A Glances away.
12 D OZZIE: Shall we start from the Agnus Dei?
13 D DELPHINE: Ozzie, Margit isn't here.
14 D OZZIE: She's running late.
15 D HIRO: She's been running late for six weeks.
16 D OZZIE: Hiro.
17 D HIRO: I'm only saying.
18 D DELPHINE: She texted me. She said she'd be here.
19 D OZZIE: There. You see?
20 A ¶ He sets the score on the piano.
21 A Presses a chord.
22 A It rings in the hall for a long moment and slowly dies against the bronze.
23 D DELPHINE: It's nice. The light. It's nice in here today.
24 D OZZIE: It is.
25 A ¶ He smiles at her.
26 A It is a kind smile and it takes nearly everything he has.
27 A ¶ The telephone at the back of the hall rings.
28 A An old black rotary.
29 A Everyone looks.
30 A Nobody rises.
31 A It rings six times.
32 A Ozzie crosses at last and lifts the receiver.
33 D OZZIE [CONT'D]: Foundry. Yes.
34 A ¶ He listens.
35 A His hand tightens on the cord.
36 D MARGIT [V.O.] (through the receiver, thin): Ozzie. It's me. I'm at the hospital.
37 D OZZIE: Where, Margit?
38 D MARGIT [V.O.]: St. Anne's. They said it's... They said it's quiet. They said you'd want to know before the others.
39 D OZZIE (softly): Thank you, my dear.
40 A ¶ He hangs up.
41 A For a moment he doesn't turn.
42 A Then he does, and the two of them look at his face, and they know.
43 D HIRO: Ozzie?
44 D DELPHINE: Who was it?
45 D OZZIE: The thing about a bell is that it doesn't ring because you strike it.
46 D HIRO: Ozzie.
47 D OZZIE: It rings because of what it's shaped like on the inside.
48 A ¶ He takes a mallet from the rack.
49 A Lifts it.
50 A The largest bell swings gently, and he strikes it once.
51 A The note fills the hall, enormous and golden, and the two singers stand slowly as it fades.
52 T FADE OUT.

### SCENE s01931 | INT. AUCTION HOUSE VIEWING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): NADIA FAIRWEATHER, GRAHAM OSTRANDER, LUCINDA PASCOE, EMEKA ROWE
1 A ¶ Velvet ropes.
2 A Glass cases of antique clocks, each ticking out of step.
3 A A single chandelier left on.
4 A ¶ NADIA FAIRWEATHER, 40s, in a grey cashmere coat, circles a case holding a mantel clock.
5 A GRAHAM OSTRANDER, 50s, the auctioneer, stands at the door with a ring of keys.
6 A LUCINDA PASCOE, 30s, in a catalog-girl blazer, arranges lot cards that are already straight.
7 A EMEKA ROWE, 50s, a security guard, stands by the fire exit with his arms folded.
8 D NADIA: Lot forty-one has a new ticket.
9 D GRAHAM: We reprinted them.
10 D NADIA: Reprinted.
11 A ¶ Graham jingles his keys.
12 A Lucinda straightens a card that doesn't need it.
13 A Emeka looks at the ceiling.
14 D NADIA [CONT'D] (to the room): Does anyone remember what the old ticket said?
15 A ¶ Nobody answers.
16 A A clock chimes the quarter hour.
17 A Another follows, late.
18 D LUCINDA: It said, um, "attributed to."
19 D NADIA: And the new one?
20 D LUCINDA: "Signed."
21 A ¶ Nadia opens her handbag.
22 A She takes out a small brass loupe and bends over the case.
23 A She studies the dial for a long moment.
24 A When she straightens, her face gives away nothing.
25 D NADIA (low, to herself): Twelve years.
26 D GRAHAM: Nadia, it's late. We can discuss it in the morning.
27 D NADIA: I'd rather discuss it now, with Emeka present.
28 A ¶ Emeka unfolds his arms.
29 A Graham's keys stop jingling.
30 D EMEKA: Ma'am.
31 D NADIA: Emeka, what time did the courier leave?
32 D EMEKA: Six forty.
33 D NADIA: And who signed him out?
34 A ¶ Lucinda lets a lot card fall.
35 A She doesn't pick it up.
36 D GRAHAM: That's enough.
37 D NADIA: Is it?
38 A ¶ She slips the loupe back into the handbag and snaps it shut.
39 A The sound carries.
40 A She walks the length of the room, her heels clicking in time with no clock, and stops at the door beside Graham.
41 D NADIA [CONT'D]: I'll be bidding on forty-one tomorrow. I suggest the ticket stay as it is.
42 D GRAHAM: Of course.
43 D NADIA: Good night, everyone.
44 A ¶ She goes out.
45 A The door closes with a soft click.
46 A For a long while, no one moves.
47 D LUCINDA (barely audible): She knows.
48 D EMEKA: Keep your voice down.
49 D GRAHAM (to himself): Twelve years. Twelve years.

### SCENE s00609 | EXT. RUINED CHURCH TOWER - NORMANDY - DAY (1944)
Detected names (may be incomplete or contain aliases): KAMAU NJOROGE, DUVALL, SANTOS, REYES, BAR
1 A ¶ A shattered bell tower, half the roof torn open to the sky.
2 A Pigeons nest in broken beams.
3 A Stone dust sifts on a floor strewn with prayer books.
4 A Beyond the shell of the nave, a dim valley of poplars and burned barns.
5 A ¶ LT. KAMAU NJOROGE, 30s, a Kenyan serving with the British, kneels at an arrow slit with binoculars, his helmet pushed back, a streak of soot across his forehead.
6 A Beside him, CPL.
7 A DUVALL, 20s, a Louisiana man with a drawl and a mouth full of chewing tobacco, cradles a Browning automatic rifle.
8 A In the corner, PVT.
9 A SANTOS, 18, shivers under a blanket, a field radio on his lap, headset askew.
10 D KAMAU: Quiet on the ground.
11 D DUVALL: Ground's always quiet till it isn't.
12 D SANTOS: Sir, Captain Reyes on the net.
13 A ¶ Kamau crosses and takes the headset.
14 A Santos hands it over with both hands, like a sacrament.
15 D KAMAU: Tower Six, Lieutenant Njoroge.
16 D REYES [V.O.] (through static): Njoroge. Status?
17 D KAMAU: Two hundred meters. No movement. Barn on the left is empty. I'd say they've pulled back.
18 D REYES [V.O.]: I'd say they're resting. Hold your position. We push at fourteen hundred.
19 D KAMAU: Understood.
20 D REYES [V.O.]: Njoroge. Make sure the boy eats.
21 D KAMAU: Yes, sir.
22 A ¶ He lowers the headset.
23 A Turns to Santos, who is pale and trying not to look it.
24 D KAMAU [CONT'D]: Eat.
25 D SANTOS: I'm not hungry.
26 D KAMAU: Private, that wasn't a request.
27 A ¶ Santos unwraps a ration bar with trembling fingers.
28 A Duvall spits tobacco over the ledge, and the three of them listen to the valley breathe.
29 A Somewhere below, wind rattles through the splintered pews.
30 D DUVALL: Sir, you ever think about what happens after?
31 D KAMAU: After what?
32 D DUVALL: After this.
33 D KAMAU: I think about my mother's farm.
34 D DUVALL: Mine's got a pecan orchard.
35 D SANTOS: I just want a hot bath.
36 A ¶ Duvall chuckles.
37 A Kamau almost smiles.
38 A ¶ Then, far away, a single muffled THUMP.
39 A Another.
40 A Mortar shells.
41 A ¶ All three men freeze.
42 A Dust trickles from the beams.
43 A Santos covers his head.
44 A Duvall rolls toward the slit, raising the BAR.
45 D KAMAU (low): Hold.
46 D DUVALL: Sir?
47 D KAMAU: Not at us. They're shelling the road.
48 A ¶ They wait.
49 A The thumps continue, rhythmic, distant.
50 A The tower trembles.
51 A No shell comes near.
52 A ¶ At last Duvall lets his breath out.
53 D DUVALL: Hell of a thing, waiting.
54 D KAMAU: Yes.
55 A ¶ Santos slowly lowers his hands from his head.
56 A Looks up.
57 D SANTOS: Is that a hot bath coming?
58 D KAMAU (smiling, finally): Possibly. In the next war.
