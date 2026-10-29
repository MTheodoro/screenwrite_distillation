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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_opusT/group_00018.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s02104 | INT. GRAIN SILO - BASE LEVEL - NIGHT
Detected names (may be incomplete or contain aliases): DEVAKI RAMANATHAN, HARISH, MAGPIE, LONGSTREET, THADDEUS BELL
1 A ¶ A concrete cylinder, ninety feet of dark above.
2 A Dust hangs in the flashlight beams.
3 A A rusted auger runs up the wall like a spine.
4 A Underfoot, a drift of old grain crunches.
5 A ¶ FOUR TEENAGERS stand in a loose ring: DEVAKI RAMANATHAN, 17, in a puffer jacket, a camcorder on her shoulder; her brother HARISH, 15, with a flashlight in each fist; MARGUERITE "MAGPIE" LONGSTREET, 16, in a leather jacket with a patch on the sleeve; and THADDEUS BELL, 17, in a school letterman's jacket, shivering.
6 D HARISH (to the group): Okay. We're in. Can we go now?
7 D MAGPIE: We just got here.
8 D THADDEUS: There's a rule. You stay until midnight.
9 D DEVAKI (muttering): There's no rule.
10 D MAGPIE: There's always a rule.
11 A ¶ A noise comes from above: a slow, scraping drag, like something heavy pulled across a floor.
12 A The four of them tilt their heads back together, flashlights swinging up to catch only dust.
13 D HARISH: It's the wind.
14 D THADDEUS: There's no wind.
15 D DEVAKI (quietly, into the camcorder): Note the time. Eleven forty-one. Strange sounds in the silo.
16 A ¶ The scraping stops.
17 A The silence that follows is worse.
18 A Thaddeus laughs, brittle.
19 A Magpie takes a step toward the ladder at the wall, puts a hand on the cold rung, and the whole silo hums with a faint metallic ring.
20 D MAGPIE: Don't touch the ladder.
21 D DEVAKI: I'm not touching it.
22 D MAGPIE: I was telling myself.
23 A ¶ Dust sifts down from above.
24 A Harish switches off one flashlight.
25 A Thaddeus scoots closer to Devaki.
26 A She keeps the camera trained on the dark, steady, her breath fogging.
27 A Magpie stays at the ladder, jaw clenched.
28 A Harish clicks the second flashlight on and off, on and off.
29 D HARISH (whispering): Stop it.
30 D DEVAKI: I'm not doing anything.
31 D HARISH: Not you. Him.
32 A ¶ He points the flashlight at Thaddeus.
33 A Thaddeus is looking up, mouth open, face washed white, and he points too.
34 A ¶ Above them, high on the curved wall, something shifts.
35 A A long pale shape.
36 A Folded limbs, a head tilted wrong, hanging in the shadow.
37 A It does not move again.
38 D THADDEUS (a whisper): That's a person.
39 D MAGPIE: That's not a person.
40 D DEVAKI (into the camcorder): It's not moving.
41 D HARISH: Everyone, back to the door. Slowly.
42 A ¶ They begin to back away, all four, hands out, flashlights trembling, the grain crunching underfoot with each step.
43 A Devaki keeps filming, walking backwards, and trips.
44 A The camcorder falls.
45 A The light on it swings wildly across the wall.
46 A ¶ For one half-second it catches the shape.
47 A It is not hanging.
48 A It is crouching.
49 A Its head has turned.
50 D THADDEUS: Run.
51 A ¶ They scatter.

### SCENE s00118 | INT. APOTHECARY SHOP - EVENING - 1794
Detected names (may be incomplete or contain aliases): MASTER EZEKIEL ARTHURSEN-OKAFOR, YOUNG PHILIPPA BRANDT-NWOSU, MADAME ODETTE LACROIX-ADEYEMI, CONSTABLE HENDRICK VAN DER MEER-OLUWA, MADAME LACROIX
1 A ¶ Shelves of blue glass bottles.
2 A Dried herbs hang from the rafters.
3 A A brass scale.
4 A Low light from a single oil lamp, and a wet street beyond the bowed windows.
5 A ¶ MASTER EZEKIEL ARTHURSEN-OKAFOR, the apothecary, grinds powder in a mortar behind the counter.
6 A He is stout and gentle, with spectacles pushed up on his forehead.
7 A His apprentice, YOUNG PHILIPPA BRANDT-NWOSU, no more than sixteen, sweeps the floor.
8 A At a small table by the window, MADAME ODETTE LACROIX-ADEYEMI, a widow in black silk, sits with a cup of tea she has not touched.
9 A And by the door, snow on his hat, stands CONSTABLE HENDRICK VAN DER MEER-OLUWA, huge and slow, a lantern at his belt.
10 A ¶ He nods to the apothecary.
11 A The apothecary nods back.
12 D EZEKIEL: Constable.
13 D HENDRICK: Master Arthursen.
14 D EZEKIEL: Tea?
15 D HENDRICK: Thank you, no.
16 A ¶ He remains by the door.
17 A Philippa sweeps around his boots.
18 A Madame Lacroix stirs her cup, the spoon clinking against the china.
19 D EZEKIEL: You are out late.
20 D HENDRICK: It's a cold night.
21 D EZEKIEL: It is.
22 D HENDRICK: There was a death on Pearl Street.
23 A ¶ Ezekiel does not stop grinding.
24 A Philippa's broom pauses a fraction of a second, then continues.
25 D EZEKIEL: Terrible.
26 D HENDRICK: A gentleman. Sixty years. Found in his chair.
27 D EZEKIEL: Terrible.
28 D HENDRICK: His wife says he took a draught for the cough.
29 A ¶ Ezekiel sets the pestle down.
30 D EZEKIEL: Many do.
31 D HENDRICK: From this shop.
32 A ¶ Madame Lacroix lifts her gaze from the cup.
33 A Her eyes find the constable, then the apothecary, then the floor.
34 A Ezekiel wipes his hands on his apron.
35 D EZEKIEL: I make no poisons, Constable.
36 D HENDRICK: I did not say poison.
37 A ¶ A pause.
38 A The lamp flickers.
39 A Philippa stands completely still.
40 A Madame Lacroix sets the cup on its saucer, with extraordinary gentleness.
41 D MADAME LACROIX: I believe I can help.
42 D HENDRICK: Madame?
43 D MADAME LACROIX: It was my husband.
44 A ¶ Hendrick turns, slowly.
45 A Ezekiel stops breathing.
46 A Philippa lets the broom fall.
47 D MADAME LACROIX [CONT'D]: The draught was mine. I mixed it. I brought him the cup.
48 D HENDRICK: Madame, you cannot--
49 D MADAME LACROIX: I can. I did.
50 A ¶ She rises, smooths her black silk, and crosses to the constable.
51 A She offers him her wrists.
52 A He looks at them.
53 A He does not take them.
54 D HENDRICK: I should like to hear why.
55 D MADAME LACROIX: You would not.
56 D HENDRICK: Try me.
57 A ¶ She considers.
58 A Then she sits again.
59 A The constable removes his hat.
60 A Ezekiel pours two cups of tea.
61 A In the corner, Philippa picks up the broom, and under the old oil lamp, with the snow falling in the street outside, the widow begins to speak.

### SCENE s02453 | INT. OCEAN LINER - WIRELESS ROOM - NIGHT (1912)
Detected names (may be incomplete or contain aliases): OTTOLINE FARRINGTON-ADE, PERCIVAL SUTTON-KAGAN, CAPTAIN WEXFORD, CARPATHIA OPERATOR
1 A ¶ A cramped cabin lined with brass dials and copper coils.
2 A A single lamp swings on a chain.
3 A The sound of the sea is a low roar beyond the bulkhead.
4 A ¶ OTTOLINE FARRINGTON-ADE (20s, wireless operator, jacket too large, headphones clamped over her ears) taps a telegraph key.
5 A She is thin, pale, her fingers raw from hours of work.
6 A ¶ PERCIVAL SUTTON-KAGAN (30s, junior officer, his collar loosened) sits beside her, a stack of messages on his knee.
7 A ¶ CAPTAIN WEXFORD (60s, white beard, frayed cap) stands in the doorway, filling it.
8 A ¶ She keys a final burst and listens.
9 A Static.
10 A A long hiss.
11 D PERCIVAL: Anything?
12 D OTTOLINE: Not yet.
13 D CAPTAIN WEXFORD: Keep sending.
14 A ¶ She nods and taps again.
15 A SOS.
16 A SOS.
17 A The key clicks.
18 A Percival watches her hand.
19 A ¶ He glances at the captain.
20 A The captain says nothing.
21 A ¶ A new sound in the headphones.
22 A A thin, far voice.
23 A Ottoline stiffens.
24 D OTTOLINE (whisper): Someone's answering.
25 A ¶ She presses the headset tighter.
26 A Her eyes widen.
27 D CARPATHIA OPERATOR [V.O.] (over wireless, faint): Titanic, this is Carpathia. We are coming. Hold on.
28 A ¶ Percival gasps.
29 A Captain Wexford closes his eyes.
30 A Ottoline bursts into tears and laughs at the same time.
31 D OTTOLINE: Four hours!
32 D PERCIVAL: Four hours!
33 D CAPTAIN WEXFORD: Tell them to hurry.
34 A ¶ Ottoline taps the reply.
35 A Her fingers steady.
36 A When she finishes, she leans back and shuts her eyes.
37 A ¶ The lamp stops swinging.
38 A For the first time that night, the room is still.

### SCENE s00444 | EXT. ABANDONED BOWLING ALLEY - ROOF - DAY
Detected names (may be incomplete or contain aliases): MINA SUNDARESAN, JASPER, HOLLIS WADE
1 A ¶ Tar paper and a rusted neon sign shaped like a pin.
2 A Three kids sit on the edge, legs swinging, passing a warm soda.
3 A ¶ MINA SUNDARESAN (16, ponytail, skateboard on her lap).
4 A Her brother JASPER (14, braces) beside her.
5 A Their neighbor HOLLIS WADE (17, varsity jacket) stretched out behind them.
6 D MINA: Okay, truth or dare.
7 D HOLLIS: Truth.
8 D MINA: Do you actually like Priscilla, or are you just doing it because everyone expects you to?
9 D HOLLIS: That's two questions.
10 D JASPER: It's one question with two parts.
11 D HOLLIS: Shut up, Jasper.
12 D MINA: Answer.
13 D HOLLIS: I don't know. Maybe I like the idea of her.
14 D JASPER: That's what Dad said about the boat.
15 D MINA: Jasper.
16 D JASPER: What? He sold it.
17 D HOLLIS: Your dad sold the boat?
18 D MINA: Last week. Don't tell anyone.
19 D HOLLIS: I won't.
20 D JASPER: Mina cried.
21 D MINA: I did not.
22 D HOLLIS: It's okay if you did.
23 D MINA: Truth or dare, Hollis. Your turn.
24 D HOLLIS: Dare.
25 D MINA: Jump off the roof.
26 D HOLLIS: Funny.
27 D MINA: Dare you to tell her the truth.
28 A ¶ He grins, takes the soda, and finishes it.
29 A She smiles.
30 A Jasper looks back and forth between them and stays quiet.
31 D HOLLIS: Fine.

### SCENE s00613 | INT. NIGHT TRAIN DINING CAR - MOVING
Detected names (may be incomplete or contain aliases): VERA KOSTOVA, LENNOX BRADSHAW, DMITRI SOKOLOV, QUINN
1 A ¶ Candlelit tables, white cloths, silver trays.
2 A Rain streaks the black windows.
3 A The car sways.
4 A ¶ VERA KOSTOVA, 40s, in a charcoal suit, stirs her tea with unnatural calm.
5 A Across the aisle, LENNOX BRADSHAW, 50s, drums fingers on his knife.
6 A Two tables away, DMITRI SOKOLOV, 30s, bulky in a fur-collared coat, studies the menu.
7 A A waitress carrying a tray: QUINN, 20s, red-haired, black apron, noticing everything.
8 A ¶ She sets the tray down at Vera's table.
9 A Their eyes meet.
10 A Quinn straightens a napkin that doesn't need straightening.
11 D QUINN: Anything else, ma'am?
12 D VERA: Just the check.
13 D LENNOX: The check, please.
14 D QUINN: Of course, sir.
15 A ¶ Neither woman moves.
16 A Dmitri closes the menu, slides one hand beneath the table.
17 A Vera's fingers tighten around the spoon.
18 A ¶ The train hits a switch.
19 A The car lurches.
20 A A glass tips, shatters on the floor.
21 A ¶ Everyone looks down, then up.
22 A Quinn is already gone.
23 A Dmitri lifts a silenced pistol onto the cloth.
24 A Lennox lifts a revolver from his coat.
25 A Vera lifts nothing, but she has risen, spoon in hand, between the two of them.
26 D VERA: Gentlemen.
27 D DMITRI: Vera.
28 D LENNOX: Move, Vera.
29 D VERA: Not a chance.
30 A ¶ He fires.
31 A She falls sideways.
32 A The candle goes out.

### SCENE s00790 | INT. COURTHOUSE ELEVATOR - DAY
Detected names (may be incomplete or contain aliases): CORDELIA FAIRCHILD-NWOSU, TOBIAS REINHOLT, DESHAWN KOROMA, DISPATCHER YBARRA
1 A ¶ Brass.
2 A Mirrored walls.
3 A A floor indicator that blinks between three and four.
4 A ¶ CORDELIA FAIRCHILD-NWOSU, 40s, defense attorney, navy suit, files hugged to her chest, rides in silence.
5 A Beside her, TOBIAS REINHOLT, 30s, her client, tie knotted wrong, sweats through his shirt.
6 A In the corner, bailiff DESHAWN KOROMA, 50s, stands like a statue, arms crossed.
7 A ¶ The elevator shudders.
8 A Stops.
9 A The lights dip.
10 D TOBIAS: Is it supposed to do that?
11 D CORDELIA: Yes.
12 D DESHAWN: No.
13 A ¶ Cordelia glances at him.
14 A He shrugs.
15 A A buzz crackles from the speaker panel.
16 D DISPATCHER YBARRA [V.O.]: Elevator two, status?
17 D DESHAWN (into panel): Stuck. Third and fourth.
18 D YBARRA [V.O.]: Technician's twenty minutes out.
19 D CORDELIA: Twenty? I've got a verdict at ten.
20 D YBARRA [V.O.]: Ma'am, I don't control the building.
21 A ¶ Cordelia faces the mirror.
22 A Tobias watches her in reflection.
23 D TOBIAS: Miss Fairchild. Before we go in.
24 D CORDELIA: Not now.
25 D TOBIAS: I lied to you.
26 A ¶ She does not turn.
27 D CORDELIA: I know.
28 D TOBIAS: You know?
29 D CORDELIA: I read the file. I read the lab report you didn't mention. I've known since Tuesday.
30 A ¶ Deshawn stares at the ceiling with great concentration.
31 D TOBIAS: Then why did you stay?
32 D CORDELIA: Because everyone deserves a defense. Even you.
33 A ¶ The lights flicker.
34 A The elevator drops six inches and catches.
35 A Tobias grabs the rail.
36 A Cordelia finally turns and puts a hand on his.
37 D CORDELIA [CONT'D]: When the doors open, you say nothing. Not one word.
38 D YBARRA [V.O.]: Elevator two, repairs arriving.
39 A ¶ The doors groan apart.
40 A Light from the hallway.
41 A Cordelia steps out first.

### SCENE s01478 | INT. DEEP-SEA SURVEY HABITAT "KELP-9" - COMMON ROOM - NIGHT
Detected names (may be incomplete or contain aliases): CAPTAIN HENRIETTA VOSS-LIANG, TAMSIN ODUYA, ENGINEER PIOTR NAKAMURA-BELL, TOPSIDE, GROAN
1 A ¶ A cramped steel room with a single round viewport.
2 A Beyond it, blackness and drifting silt.
3 A Bunks along one wall.
4 A A galley table bolted to the floor.
5 A A wall speaker with a dented grille.
6 A ¶ Three crew members sit at the table playing cards.
7 A A fourth voice lives in the speaker.
8 A ¶ CAPTAIN HENRIETTA VOSS-LIANG (50s, gray braid, reading glasses on a cord) deals.
9 A DR. TAMSIN ODUYA (30s, tall, a bandaged hand) arranges her cards slowly.
10 A ENGINEER PIOTR NAKAMURA-BELL (40s, heavy, oil under his nails) eats from a foil pouch with a plastic spoon.
11 D VOSS-LIANG: Your bid, Doctor.
12 D TAMSIN: Pass.
13 D PIOTR: She always passes.
14 D TAMSIN: I always win.
15 D PIOTR: When?
16 D TAMSIN: Eventually.
17 A ¶ A low, slow GROAN passes through the hull.
18 A Nobody looks up.
19 D VOSS-LIANG: That's the third time today.
20 D PIOTR: It's the sediment settling. Pressure shifts. It's nothing.
21 D TAMSIN: Nothing makes a very specific sound.
22 A ¶ The speaker crackles.
23 D TOPSIDE [V.O.] (over speaker): Kelp-9, Topside. Weather's picking up. We'll hold the surface buoy another twelve hours, then we're sending the lift. Over.
24 D VOSS-LIANG (toward speaker): Copy, Topside. All quiet down here. Out.
25 A ¶ She sets her cards face-down.
26 D VOSS-LIANG [CONT'D]: That's the longest any of us has gone without an alarm.
27 D PIOTR: Don't say that.
28 D VOSS-LIANG: Why not?
29 D PIOTR: Because the habitat listens.
30 D TAMSIN: It does not listen. It's a tin can with a sandwich in it.
31 A ¶ The GROAN comes again, closer.
32 A A pipe overhead ticks.
33 A The silt outside the viewport swirls, as if something huge has moved behind it.
34 A ¶ Tamsin stands slowly.
35 A Walks to the viewport.
36 A Presses her bandaged hand to the glass.
37 D TAMSIN [CONT'D]: Captain.
38 D VOSS-LIANG: Doctor?
39 D TAMSIN: The silt isn't settling.
40 A ¶ Piotr drops his spoon.
41 A He goes to the viewport.
42 A Voss-Liang is already there.
43 A All three stare out at a patch of black that is slightly blacker than the rest, and that is rising.
44 D TOPSIDE [V.O.] (over speaker, distorted): Kelp-9, Topside, we're showing a seismic spike. Repeat, seismic spike. Get out of there. Get out of there now.
45 A ¶ The lights flicker.
46 A The hull begins to SHRIEK.

### SCENE s02395 | INT. LIGHTHOUSE KEEPER'S COTTAGE - KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR WILHELMINA CROSS, YOUNG MAN, TOBIAS
1 A ¶ A pot of tea between them on a scarred table.
2 A Oil lamp.
3 A Rain on the glass.
4 A ¶ INSPECTOR WILHELMINA CROSS, fifties, sits with her coat still on.
5 A Across from her, a YOUNG MAN in a fisherman's jersey, hands round his cup.
6 D CROSS: You said you were alone that night.
7 D YOUNG MAN: I was.
8 D CROSS: The log says three lamps were lit.
9 D YOUNG MAN: I lit one.
10 D CROSS: Then who lit the other two?
11 D YOUNG MAN: The wind, maybe.
12 D CROSS: Lamps don't catch on wind.
13 D YOUNG MAN: Then I don't know.
14 D CROSS: Mr. Penhallow. I've been doing this a long time. In my experience, a man who says "I don't know" three times in a row knows exactly.
15 D YOUNG MAN: I'm not Penhallow.
16 D CROSS: No?
17 D YOUNG MAN: Penhallow's my uncle. He's the keeper. I'm Tobias. I came up on the supply boat on Tuesday.
18 D CROSS (after a long pause): Tobias.
19 D TOBIAS: Yes.
20 D CROSS: Then where is your uncle, Tobias?
21 D TOBIAS: Out on the rocks. He goes every night. To watch for ships.
22 D CROSS: There are no ships tonight.
23 D TOBIAS: He doesn't believe that.
24 D CROSS: And the third lamp?
25 D TOBIAS: That's for the ones who don't come back.
26 A ¶ A beat.
27 A Rain.
28 A The kettle ticks.
29 D CROSS: Tobias. I think you should tell me everything.

### SCENE s00473 | INT. TOLL PLAZA - BOOTH 4 - NIGHT
Detected names (may be incomplete or contain aliases): WEN DAI, PRAKASH NAIR, MRS. OKAFOR
1 A ¶ A glass cubicle on an empty highway.
2 A A space heater ticks.
3 A A thermos, a paperback, a laminated sign reading EXACT CHANGE.
4 A ¶ WEN DAI (50s, reading glasses on a beaded chain) marks her page and slides the window open as headlights arrive.
5 A ¶ PRAKASH NAIR (30s, rumpled suit, a sleeping toddler visible in the car seat behind him) hands her a twenty.
6 A She makes change slowly, counting it out coin by coin.
7 D WEN: Long drive?
8 D PRAKASH: Not too bad.
9 A ¶ His hands stay on the wheel at ten and two.
10 A She hands him the coins.
11 A He puts them in the cup holder one at a time.
12 A ¶ A phone rings in the booth.
13 A Wen picks it up.
14 D MRS. OKAFOR [V.O.] (through the receiver, tinny): Wen, it's Ngozi at the state barracks. Is a grey Corolla at your gate?
15 A ¶ Wen looks at the grey Corolla.
16 A She looks at the toddler.
17 A She looks at Prakash's hands.
18 D WEN (into phone): No. Quiet night. I'll call you back.
19 A ¶ She hangs up.
20 A Prakash has not moved.
21 D WEN [CONT'D]: Your tail light is out. Take the service road. The patrol doesn't run it.
22 A ¶ He stares at her.
23 A She slides the window shut and opens her paperback.

### SCENE s00994 | INT. PARIS CATACOMBS - OSSUARY CHAMBER, 1793
Detected names (may be incomplete or contain aliases): CITIZEN AUGUSTIN, CELESTINE
1 A ¶ Walls of stacked skulls.
2 A A single torch.
3 A Water drips from the vaulted ceiling.
4 A ¶ CITIZEN AUGUSTIN (40s, revolutionary sash, unpowdered hair, stiff with fear) stands alone at a stone table, copying names into a ledger.
5 A He mutters as he writes.
6 D AUGUSTIN: Lefèvre. Marchand. Girard.
7 A ¶ A footstep echoes.
8 A He freezes.
9 A Slowly closes the ledger.
10 D AUGUSTIN [CONT'D]: Who goes there?
11 A ¶ CELESTINE (30s, cloaked, hood up, a lantern shielded under her arm) steps out from behind a pillar of bones.
12 D CELESTINE: A friend of the dead.
13 D AUGUSTIN: There are no friends in the Republic.
14 D CELESTINE: Then I am no friend. Only a sister.
15 D AUGUSTIN: Whose sister?
16 D CELESTINE: The one you have on that list.
17 A ¶ He glances at the ledger.
18 A She comes closer.
19 A The light catches her face.
20 D AUGUSTIN: You should not be down here.
21 D CELESTINE: Neither should you.
22 D AUGUSTIN: I am an officer of the Committee.
23 D CELESTINE: You are a clerk with a candle.
24 D AUGUSTIN: Madame...
25 D CELESTINE: Citizen. Celestine Duval.
26 D AUGUSTIN: Citizen Duval, I could have you arrested.
27 D CELESTINE: Then do it. Call the guards. They are above, drinking wine from your cellar.
28 A ¶ He says nothing.
29 A Wipes his palms on his coat.
30 D CELESTINE [CONT'D]: My brother's name is on that page. Pierre Duval.
31 D AUGUSTIN: I do not control the lists.
32 D CELESTINE: You hold the pen.
33 D AUGUSTIN: The pen obeys.
34 D CELESTINE: So does the guillotine. Until someone stops it.
35 A ¶ Water drips.
36 A He opens the ledger.
37 A Finds the page.
38 A Looks at her.
39 A Looks at the page.
40 D AUGUSTIN: Pierre Duval. Printer.
41 D CELESTINE: Yes.
42 D AUGUSTIN: Condemned for a pamphlet.
43 D CELESTINE: For an opinion.
44 A ¶ He tears the page out.
45 A Folds it.
46 A Hands it to her.
47 D AUGUSTIN: There is a carriage at the Barrière d'Enfer at midnight.
48 D CELESTINE: Why?
49 D AUGUSTIN: Because I am tired of counting skulls.

### SCENE s01956 | EXT. SCHOOL ROOFTOP - PIGEON COOP - DAWN
Detected names (may be incomplete or contain aliases): MARISOL QUINONES, ELI ABRAMOWITZ
1 A ¶ Tar paper and chimney pots.
2 A A lean-to coop of chicken wire and scrap plywood, thick with the soft burble of birds.
3 A Behind it, the city blushes pink under a rising sun.
4 A ¶ MARISOL QUINONES, 16, in a school sweater with the sleeves pushed up, kneels beside the coop and shakes seed into a tin tray.
5 A ELI ABRAMOWITZ, 16, thin, round glasses, tries to climb through the roof hatch with a cardboard box held above his head.
6 A A single pigeon sits in the box, unimpressed.
7 D ELI: Marisol. I brought the injured one.
8 D MARISOL: You brought Gerald?
9 D ELI: His name is Clementine.
10 A ¶ The hatch slams on his foot.
11 A He hops.
12 A The box tips and the pigeon bursts out in a flurry of feathers.
13 A Marisol lunges and catches it against her chest while Eli topples back down the hatch, and a distant thump rises from the stairwell.
14 D MARISOL: Eli?
15 D ELI [O.S.]: I'm fine.
16 A ¶ She cradles the bird.
17 A It coos.
18 A She smooths its wing with a thumb, and a tiny smile creeps over her face.

### SCENE s00333 | INT. CAROUSEL WORKSHOP - NIGHT
Detected names (may be incomplete or contain aliases): MINA, TEDDY, OSRIC, LOLA
1 A ¶ A cavernous barn of splintered painted horses, hanging by chains from the rafters, their glass eyes catching a single lantern.
2 A Sawdust drifts like snow.
3 A ¶ MINA, twenties, a documentary photographer, raises a camera.
4 A TEDDY, thirties, her guide, grips a crowbar.
5 A OSRIC, sixties, the caretaker, stands rigid in the doorway with a ring of keys.
6 A LOLA, ten, Osric's granddaughter, clutches a plush rabbit.
7 D MINA: Teddy, did you hear that?
8 D TEDDY: It's the wind.
9 D OSRIC: No wind in here.
10 D LOLA: Grandpa, the horses are looking at me.
11 D TEDDY: Lola, honey, they're wood.
12 D MINA: Teddy, look up.
13 D OSRIC: Lola, come here.
14 A ¶ A chain clinks.
15 A One painted horse swings, slow.
16 A Another turns its head.
17 D TEDDY: Mina, back up.
18 D MINA: I'm trying.
19 D LOLA: Grandpa!
20 A ¶ The lantern gutters.
21 A All the horses begin to descend at once on their chains, slamming into the floor, shrieking, wheels turning, the whole carousel lurching into motion in the dark.

### SCENE s00373_0 | INT. FERRIS WHEEL LOST-AND-FOUND BOOTH - DAY
Detected names (may be incomplete or contain aliases): BARNABY, DOT, STRANGER
1 A ¶ Cramped.
2 A Unclaimed teddy bears.
3 A One prosthetic leg.
4 A ¶ BARNABY, 50s, attendant, mustache, sits behind a counter.
5 A DOT, 70, hands on hips, stands before him.
6 D DOT: I lost a hat.
7 D BARNABY: Describe it.
8 D DOT: Big. Green. A bird on it.
9 A ¶ A STRANGER, 40s, slides into frame behind Dot, wearing a green hat with a bird on it.
10 A He tips it.
11 D BARNABY: That one?
12 D DOT: That's mine!
13 A ¶ The Stranger bolts.
14 A Barnaby vaults the counter.
15 A Dot swings her purse and misses.

### SCENE s01135 | INT. APARTMENT BUILDING - STAIRWELL - NIGHT
Detected names (may be incomplete or contain aliases): NADIA, ISAAC, OKORO
1 A ¶ Concrete steps.
2 A A buzzing bulb on a timer.
3 A Graffiti on the rail.
4 A ¶ NADIA (30s, grocery bags, headphones) climbs, humming.
5 A She pauses on the fourth-floor landing.
6 A The bulb clicks off.
7 A Dark.
8 A ¶ She fumbles for the switch.
9 A Finds it.
10 A Click.
11 A Light.
12 A ¶ Standing three steps above her: ISAAC (40s, her neighbor, bathrobe, bare feet).
13 A He is perfectly still.
14 A He stares straight ahead.
15 D NADIA: Isaac? You scared me.
16 A ¶ He says nothing.
17 A She lowers her bags.
18 D NADIA [CONT'D]: Isaac, are you okay?
19 A ¶ He turns his head.
20 A Slowly.
21 A His eyes are blank, rolled back.
22 A ¶ She steps down.
23 A He steps down.
24 A She backs against the rail.
25 A He keeps coming, his lips moving.
26 D ISAAC (a whisper): Don't turn the light off.
27 D NADIA: What?
28 A ¶ The bulb buzzes.
29 A Clicks.
30 A Dark.
31 A A wet breath in her ear.
32 A ¶ The light snaps on.
33 A MR. OKORO (70s, building super, toolbelt, flashlight) stands on the landing below, thumb on the switch.
34 D MR. OKORO: Nadia! Why are you two standing in the dark?
35 A ¶ Isaac blinks.
36 A Sways.
37 A Looks around, bewildered, as if waking.
38 D ISAAC: Sleepwalking again. I'm sorry.
39 A ¶ He climbs back up the stairs, slow and sheepish.
40 A Nadia exhales, shaking.
41 D MR. OKORO: You okay?
42 D NADIA: Fine.
43 A ¶ She grabs her bags and, without turning around, takes the stairs two at a time.

### SCENE s00208 | EXT. BAMBOO FOREST - RAINY AFTERNOON
Detected names (may be incomplete or contain aliases): HANNELORE BECK, MARISOL AGUILAR, THABO NKOSI-WILLIAMS
1 A ¶ Tall green stalks creak in the wind.
2 A Mud everywhere.
3 A A trail disappears into fog.
4 A ¶ HANNELORE BECK, 50s, a botanist, leads, machete in hand.
5 A Behind her trudges MARISOL AGUILAR, 20s, a student with a heavy pack.
6 A Last comes THABO NKOSI-WILLIAMS, 30s, their guide, who limps and carries a radio.
7 D HANNELORE (to all): We stop at the next clearing.
8 D MARISOL (to Hannelore): How far is that?
9 D HANNELORE: Not far.
10 D THABO (to himself): It is far.
11 A ¶ Rain thickens.
12 A Marisol slips and grabs a stalk.
13 A It cracks.
14 D MARISOL: Sorry!
15 D THABO: Careful, it carries sound.
16 D HANNELORE: Sound is fine. It's silence that worries me.
17 D MARISOL: Why?
18 D HANNELORE: Because it means something is listening.
19 A ¶ They stop.
20 A All three listen.
21 A The rain pauses.
22 A A distant rustle.
23 D MARISOL: Is that the wind?
24 D THABO (low): No.
25 D HANNELORE: Keep walking.
26 D MARISOL: But which way?
27 D THABO: Forward.
28 D HANNELORE: Not forward. Left. Left!
29 D MARISOL: Which left?
30 D THABO: Mine.
31 A ¶ Marisol veers right by mistake.
32 A Thabo yanks her back.
33 A She bumps into Hannelore.
34 A The three tangle for a second, then break apart.
35 D MARISOL: Sorry, sorry.
36 D HANNELORE (to all): Stay together.
37 D THABO (into radio, muttering): This is Thabo. We are lost.
38 A ¶ Static answers.
39 A He shakes the radio.
40 A It stays dead.
41 A He tucks it away.
42 D THABO [CONT'D] (to the group): We keep moving.
43 D HANNELORE: She knows.
44 D THABO: She does?
45 D MARISOL: I do?
46 D HANNELORE: We keep moving.
47 A ¶ They push on.
48 A The rustle follows.
49 A It never gets closer.
50 A It never gets farther.

### SCENE s02220 | EXT. WHALEBONE TOLL BRIDGE - DUSK
Detected names (may be incomplete or contain aliases): BRANNOCH, STRANGER, TAVI, ILSEWYN
1 A ¶ A bridge made from the ribs of a dead sea-beast arches over a grey gorge.
2 A A tin lantern hangs at the midpoint.
3 A ¶ BRANNOCH, fifties, broad, in a patched toll-keeper's coat, sits on a stool beside a rope barrier.
4 A He counts copper coins into a bowl.
5 A ¶ A STRANGER in a travel-stained cloak walks up from the east road.
6 A Hood up.
7 A A staff in one hand.
8 D BRANNOCH: Toll is two coppers. Four if you've a cart.
9 D STRANGER: No cart.
10 A ¶ Brannoch holds out a hand.
11 A The Stranger drops two coins in it.
12 A Brannoch bites one.
13 D BRANNOCH: Good. Name for the ledger?
14 D STRANGER: Do I need one?
15 D BRANNOCH: Ledger likes a name. Keeps the dead from being counted twice.
16 A ¶ The Stranger thinks.
17 A Pushes the hood back.
18 A A young woman, weathered, a scar through one eyebrow.
19 D STRANGER: Tavi.
20 A ¶ Brannoch writes it in a thick book.
21 D BRANNOCH: Tavi. Where to?
22 D TAVI: Over. Then the salt towns.
23 D ILSEWYN [O.S.] (from below the bridge): Brannoch! The rope's slipped again!
24 A ¶ Brannoch sighs and leans over the rail.
25 D BRANNOCH: Hold it, then! I'm busy!
26 D ILSEWYN [O.S.]: I am holding it! It's holding me!
27 D BRANNOCH (to Tavi): My sister. She keeps the ferry cables.
28 D TAVI: She sounds tired.
29 D ILSEWYN [O.S.]: I am! And I can hear you!
30 D BRANNOCH: She's been tired since our mother died.
31 A ¶ Brannoch lifts the rope barrier.
32 A Tavi steps toward the span, then stops.
33 D TAVI: Is it true the ribs sing at night?
34 D BRANNOCH: When the wind comes from the north.
35 D ILSEWYN [O.S.]: It does not sing, Brannoch, it whistles.
36 D BRANNOCH: It sings, and always has.
37 D ILSEWYN [O.S.]: It whistles, and always has.
38 A ¶ Tavi looks from one to the other, almost smiling.
39 D TAVI: Then I'll listen on the way across.
40 A ¶ She walks onto the bridge.
41 A Brannoch watches her go, then sits and takes up the coins again.
42 D BRANNOCH: Mind the third rib. It's loose.

### SCENE s00413 | EXT. GLACIER CAVE MOUTH - DAWN
Detected names (may be incomplete or contain aliases): MORWENNA, IVAR
1 A ¶ A cathedral of blue ice.
2 A Cold fire glints along its roof.
3 A Wind keens through a crack as tall as a house.
4 A Snow whips past the entrance.
5 A ¶ MORWENNA, 30s, a ranger in a hooded sealskin cloak with a spear, plants her feet at the cave mouth.
6 A IVAR, 70s, her mentor, white-bearded, leaning on a staff of driftwood, wheezes beside her.
7 D MORWENNA: It's in there.
8 D IVAR: It's always been in there.
9 A ¶ She steps forward.
10 A The ice floor groans.
11 A A low note thrums from deep inside the cave, a note too big for a throat.
12 A They both freeze.
13 A The crack in the ceiling widens by a finger's width, and a skein of powder sifts down on their shoulders.
14 D IVAR [CONT'D]: It knows you.
15 D MORWENNA: It doesn't.
16 A ¶ Out of the dark, an eye opens, pale as a moon, vertically slit.
17 A It regards them.
18 A Morwenna lifts her spear.
19 A Ivar grabs her wrist.
20 A They struggle, once, hard, until the spear clatters on the ice.
21 D IVAR [CONT'D]: No weapons. Never weapons.
22 A ¶ The eye blinks.
23 A The wind falls away.
24 A Morwenna looks at the old man, then at the eye, and slowly, she kneels.

### SCENE s00860 | INT. COMMUNITY POTTERY STUDIO, KILN SHED - DUSK
Detected names (may be incomplete or contain aliases): GIDEON ROSS, MARTA ROSS
1 A ¶ A low brick room with a roaring gas kiln at one end.
2 A The air shimmers.
3 A Shelves of unfired mugs line the walls.
4 A Bags of clay are stacked like sandbags.
5 A ¶ GIDEON ROSS, fifties, in a stained apron, kneels by the kiln peeking through a spy hole.
6 A MARTA ROSS, fifties, his ex-wife, stands by the door holding a cardboard box.
7 D MARTA: I brought your things.
8 D GIDEON: Leave them by the door.
9 D MARTA: I'd rather hand them to you.
10 D GIDEON: I'm firing.
11 D MARTA: I can see that.
12 A ¶ He doesn't turn.
13 A She sets the box on a stool and takes out a framed photograph, a coat, a paperback with a cracked spine.
14 A She places each item on the table, one by one, with the care of someone laying out a corpse.
15 D GIDEON: What's the coat for?
16 D MARTA: It's your coat.
17 D GIDEON: It's July.
18 D MARTA: It'll be winter eventually.
19 A ¶ He closes the spy hole, stands, wipes his hands on his apron.
20 A Neither looks at the other.
21 A The kiln roars on.
22 A A mug cracks inside with a faint, sharp tick.
23 D GIDEON: That's one gone.
24 D MARTA: Only one?
25 D GIDEON: So far.
26 A ¶ She laughs without humor, then stops.
27 A He walks to the table and picks up the photograph.
28 A In it, two young people squint into the sun on a beach.
29 D MARTA: I couldn't throw it out.
30 D GIDEON: ^I couldn't keep it.
31 A ¶ They say it at once.
32 A Both freeze.
33 A The kiln's glow washes the room orange.
34 A Marta takes a step back, sits on the stool, and puts her hands over her face.
35 D GIDEON [CONT'D]: Marta.
36 D MARTA: Don't. Please. Just let me have a minute.
37 A ¶ He puts the photograph down gently, face up, between the coat and the book.
38 A He goes back to the kiln and kneels.
39 A He waits.
40 A The fire waits with him.
41 D MARTA [CONT'D]: How long till it's done?
42 D GIDEON: Eleven hours.
43 D MARTA: That's a long time.
44 D GIDEON: It is.
45 A ¶ She lowers her hands.
46 A She stands, takes the stool he's been using as a seat, and moves it beside him.
47 D MARTA: I can stay till the first one cracks.

### SCENE s00781 | INT. CAR WASH CONTROL ROOM - NIGHT
Detected names (may be incomplete or contain aliases): NADIA ROSTOVA-BELL
1 A ¶ Cinderblock.
2 A Buzzing fluorescents.
3 A Soap suds crawl down a window.
4 A Beyond it, a dark tunnel of brushes, still.
5 A ¶ NADIA ROSTOVA-BELL, 30s, courier jacket, sits on an overturned crate.
6 A A phone in her hand.
7 A A duffel at her feet.
8 A ¶ She presses play.
9 D NADIA [V.O.] (recorded, steady): Memo one. Tuesday. If you hear this, the handoff went fine.
10 A ¶ Nadia winces.
11 D NADIA [V.O., CONT'D]: Package is in the blue duffel. Do not open it.
12 A ¶ She looks at the duffel.
13 A Doesn't move.
14 D NADIA [V.O., CONT'D]: Memo two. Wednesday. Someone followed me from the depot.
15 A ¶ She pauses it.
16 A Breathes.
17 A Presses again.
18 D NADIA [V.O., CONT'D] (recorded, thinner): Memo three. They know the car wash. I don't know how.
19 A ¶ Nadia stands.
20 A Checks the door.
21 A The deadbolt.
22 A The window.
23 A The tunnel.
24 A ¶ A drip.
25 A A distant clank.
26 A ¶ She freezes.
27 A ¶ Nothing.
28 A ¶ She sits again.
29 D NADIA [V.O., CONT'D] (recorded): Memo four. I'm going to open the duffel. Whoever you are, I'm sorry.
30 A ¶ Nadia stares at the phone.
31 D NADIA (whisper): I never recorded this one.
32 A ¶ She scrolls.
33 A The memo is dated tomorrow.
34 A ¶ The voice continues, gentler.
35 D NADIA [V.O., CONT'D] (recorded): It's just a hard drive. It's always been just a hard drive. Walk away.
36 A ¶ Nadia lifts the duffel.
37 A Unzips it.
38 A A small black drive, a Post-it: "SORRY."
39 A ¶ She laughs.
40 A Short.
41 A Hollow.
42 A Then not.
43 A ¶ She pockets the drive.
44 A Shoulders the duffel.
45 A ¶ At the door she hesitates.
46 A Presses delete.
47 D NADIA [CONT'D] (to the phone): Memo five.
48 A ¶ She exits.
49 A The brushes begin to spin behind her.

### SCENE s00211 | INT. FUNERAL PARLOR - VIEWING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE MARISOL OKAFOR-DUMAS, LEOPOLD GRIMSBY, PHILOMENA TEAGUE-ABARA, CALEB NASH
1 A ¶ Carpet muffles footfalls.
2 A Lilies in tall vases.
3 A A closed casket on a draped stand.
4 A A single lamp.
5 A ¶ DETECTIVE MARISOL OKAFOR-DUMAS, 40s, in a black blazer, stands near the casket, hands behind her back.
6 A She watches the door.
7 A MR. LEOPOLD GRIMSBY, 60s, the funeral director, stands rigid in a dark suit.
8 A A mourner, PHILOMENA TEAGUE-ABARA, 50s, sits in the front row, handkerchief twisted in her fist.
9 A In the back, a young usher named CALEB NASH, 20s, fidgets with his cufflinks.
10 D LEOPOLD: The family asked for privacy, Detective.
11 D MARISOL: I won't be long.
12 D PHILOMENA (without turning): She was my sister.
13 D MARISOL: I know.
14 D PHILOMENA: Then you know she wasn't well.
15 D MARISOL: I know she was poisoned.
16 A ¶ Caleb drops a cufflink.
17 A It rolls under a pew.
18 A He doesn't pick it up.
19 D LEOPOLD: That is a serious accusation.
20 D MARISOL: It's a finding.
21 D PHILOMENA: By whom?
22 D MARISOL: The lab. It came back this afternoon.
23 A ¶ Philomena finally turns.
24 A Her eyes are dry.
25 A Her mouth is steady.
26 D PHILOMENA: And who do you think did it?
27 D MARISOL: Someone who had access to her tea.
28 A ¶ Leopold shifts his weight.
29 A Caleb takes a step toward the exit.
30 A Marisol raises one hand.
31 D MARISOL [CONT'D]: Mr. Nash. Stay.
32 D CALEB: I was just getting air.
33 D MARISOL: The air is fine here.
34 A ¶ The lamp flickers.
35 A Marisol steps to the casket and lays a hand on the lid.
36 D MARISOL [CONT'D]: Mrs. Teague-Abara. Tell me about the tea.
37 D PHILOMENA: It was chamomile.
38 D MARISOL: Who bought it?
39 D PHILOMENA: I did.
40 D MARISOL: Who poured it?
41 D PHILOMENA: I did.
42 A ¶ A pause.
43 A The lilies sway.
44 A Caleb breathes out.
45 D MARISOL: Thank you.
46 D PHILOMENA: Is that all?
47 D MARISOL: For tonight.
48 A ¶ She nods to Leopold, then to Caleb.
49 A Philomena rises, smooths her skirt, and walks out.
50 A The door sighs shut behind her.
51 A Marisol lifts the lid of the casket just a crack and looks at something inside.

### SCENE s00143 | INT. TOWN HALL - EVENING
Detected names (may be incomplete or contain aliases): MAYOR GWENDOLYN ARDITO, BARNABAS KOWALCZYK, TILLIE OSEI, DOT PELLEGRINI, STRANGER, IRVING
1 A ¶ Folding chairs.
2 A A banner reads "SAVE THE HARBOR FERRY."
3 A A coffee urn leaks in the corner.
4 A Rain on the windows.
5 A ¶ MAYOR GWENDOLYN ARDITO, 50s, stands at a podium.
6 A Three citizens remain: BARNABAS KOWALCZYK, 60s, in a fisherman's sweater; TILLIE OSEI, 20s, with a clipboard; DOT PELLEGRINI, 70s, in a raincoat, knitting; and, in the back, a STRANGER in a damp suit, notebook closed on his knee.
7 D GWENDOLYN: The council voted six to one. The ferry stops running on the first.
8 D BARNABAS: Six to one.
9 D TILLIE (to the room): We can still petition.
10 D DOT (without looking up): We petitioned in 1998.
11 D TILLIE: We could pray.
12 D BARNABAS: Pray on your own time.
13 D GWENDOLYN (wearily): I fought for this ferry, Barnabas.
14 D BARNABAS: Then fight harder.
15 A ¶ She says nothing.
16 A Dot's needles click.
17 A ¶ The Stranger raises a hand.
18 D STRANGER: If I might.
19 D GWENDOLYN: And you are?
20 D STRANGER: Irving Tse. Regional transit.
21 A ¶ A murmur.
22 A Tillie sits up.
23 A Barnabas folds his arms.
24 D IRVING: I'm not here to close it.
25 D TILLIE: Then why?
26 D IRVING (mutters, to himself): Because somebody has to say the numbers out loud.
27 D TILLIE: Say them.
28 D IRVING: It costs four hundred thousand a year. It carries eleven people a day.
29 D DOT (still knitting): Twelve, when I'm visiting my sister.
30 A ¶ Laughter, thin and tired.
31 A Gwendolyn rubs her eyes.
32 D IRVING (to the room): I can keep it running one more year, if the town raises forty thousand.
33 D BARNABAS: We don't have forty thousand.
34 D TILLIE: We can have it.
35 D BARNABAS (grudging): Amen.
36 A ¶ Dot ties off her stitch, rises, and drops a knitted scarf in the middle of the table.
37 D DOT: Starting bid. Sell it.
38 A ¶ One by one, they reach for their wallets.

### SCENE s00185 | EXT. SINKING FISHING TRAWLER - DECK - DAWN
Detected names (may be incomplete or contain aliases): CAPTAIN IMELDA DRAGOMIR, DEACON PRICE, OLU ABIODUN, SANTI, VEGA, LIN HUANG
1 A ¶ The boat tilts at ten degrees.
2 A Gray water sloshes at the rails.
3 A A radio mast leans.
4 A ¶ CAPTAIN IMELDA DRAGOMIR, 50s, leathery, in yellow oilskins, stands at the wheelhouse door, counting heads with her finger.
5 A DEACON PRICE, 20s, deckhand, drags a blue cooler across the planks.
6 A OLU ABIODUN, 40s, engineer, slumps against a winch, hands black with oil.
7 A SANTIAGO "SANTI" VEGA, 30s, cook, bails with a saucepan.
8 A A girl, LIN HUANG, 12, the captain's niece, sits cross-legged on a coil of rope with a life vest two sizes too big.
9 D IMELDA: Raft's inflated. Ten minutes.
10 D DEACON: We said that twenty minutes ago.
11 D OLU: Pump's dead.
12 D SANTI: Saucepan's not.
13 A ¶ Lin tightens a strap.
14 A Nobody hurries.
15 A Imelda hands Lin a granola bar.
16 D IMELDA: Eat. It's a long wait.

### SCENE s01951 | INT. PERFUMERY - PARIS - AFTERNOON
Detected names (may be incomplete or contain aliases): ARMAND LAFORGUE, ISIDORE BEAUCAIRE
1 A ¶ 1768.
2 A A shop of glass and brass.
3 A Rows of tiny bottles glow in the amber light.
4 A Orange blossom and jasmine hang thick in the air.
5 A ¶ ARMAND LAFORGUE, 50s, the master perfumer, stirs a vial at the counter.
6 A He does not look up.
7 A The bell above the door chimes, and ISIDORE BEAUCAIRE, 40s, a courtier in a powdered wig, steps in, shaking rain from his coat.
8 D ISIDORE: Armand. You look well.
9 D ARMAND: I am not well, Isidore. I am merely alive.
10 A ¶ He sets down the vial.
11 A He pours a measure into a crystal stopper and offers it.
12 A The courtier sniffs, smiles, and hands it back.
13 D ISIDORE: Violet and cedar.
14 D ARMAND: And?
15 D ISIDORE: And something I cannot name.
16 D ARMAND: Bitter almond.
17 A ¶ Isidore's smile dies.
18 A He steps back.
19 A His hand drifts to his coat.
20 A Armand watches it go, then lifts the stopper to his own lips and drinks it down.
21 D ARMAND [CONT'D]: You see? Harmless.
22 A ¶ The courtier stares.
23 A Armand sets the empty stopper on the counter and places both hands flat on the wood.
24 D ARMAND [CONT'D]: The other bottle, however, is in your pocket.
25 A ¶ He lunges across the counter and seizes the wrist.
26 A They struggle among the vials.
27 A Glass breaks.
28 A The scent of a hundred flowers erupts at once.
29 A Isidore breaks free and runs for the door.
30 A He yanks it open.
31 A Armand sags against the shelves, laughing quietly.

### SCENE s01854 | INT. COURTHOUSE CONFERENCE ROOM - DAY
Detected names (may be incomplete or contain aliases): DEFENSE ATTORNEY LEONOR ASTURIAS, PROSECUTOR, DESMOND TULLY, DEPUTY OWEN PRATT, ^OWEN
1 A ¶ A windowless room.
2 A A long table scarred by decades of folders.
3 A A water pitcher beading with sweat.
4 A Fluorescent light hums like a distant insect.
5 A ¶ DEFENSE ATTORNEY LEONOR ASTURIAS, 40s, charcoal suit, reading glasses pushed into her hair, shuffles exhibits into a neat pile.
6 A Across from her, a PROSECUTOR, 30s, crisp, a pen behind his ear, taps a laptop.
7 A Between them, at the end of the table, sits their client MR. DESMOND TULLY, 50s, in an ill-fitting suit that smells of mothballs, hands clasped.
8 A ¶ The prosecutor, DEPUTY DA OWEN PRATT, looks at the clock.
9 D OWEN: We have ten minutes before the judge.
10 D LEONOR: We have as long as it takes.
11 D DESMOND: Can I say something?
12 D LEONOR (simultaneously): No.
13 D ^OWEN (simultaneously): Please.
14 A ¶ They look at each other.
15 A Desmond looks at both.
16 D DESMOND: I was going to say I'd like some water.
17 A ¶ Leonor pours.
18 A Her hand is steady.
19 A Owen's pen is not.
20 D OWEN: Ms. Asturias. The offer is five years.
21 D LEONOR: My client doesn't accept.
22 D OWEN: It's a fair number.
23 D LEONOR: It's a number.
24 D DESMOND: Ten minutes, he said?
25 D OWEN: Nine.
26 D LEONOR: Mr. Pratt, I'd like a word with my client.
27 D OWEN: Of course.
28 A ¶ He doesn't move.
29 A She does not either.
30 A The pitcher drips.
31 A Desmond sips from the paper cup, studies the rim, and sets it down very carefully.
32 D DESMOND: I didn't do it.
33 D LEONOR (quietly): We know.
34 D OWEN (also quietly): The evidence says otherwise.
35 D DESMOND: Then the evidence is wrong.
36 D OWEN: It's a very strong file, Mr. Tully.
37 D DESMOND: My wife says you can make a file say anything.
38 D OWEN (a flicker of something): Your wife testified.
39 D DESMOND: She said what she saw.
40 D LEONOR: She said what she believed.
41 D OWEN: That's the same thing in a courtroom.
42 A ¶ Leonor pulls a single sheet from the middle of her pile and slides it across the table.
43 A Owen reads it.
44 A The pen stops tapping.
45 A His color changes by degrees.
46 D OWEN [CONT'D]: Where did you get this?
47 D LEONOR: It was in your discovery.
48 D OWEN: It wasn't.
49 D LEONOR: Page four hundred and twelve.
50 D OWEN: That's not possible.
51 D DESMOND (to no one): Is it good?
52 D LEONOR: Mr. Tully, it's very good.
53 A ¶ Owen reaches for his laptop.
54 A His fingers hover over the keys.
55 A Outside, a bailiff's voice calls a case number, and a door slams.
56 D OWEN: Give me a minute.
57 D LEONOR: Take nine.

### SCENE s00861 | INT. LAKESIDE CABIN, LIVING ROOM - EVENING
Detected names (may be incomplete or contain aliases): EVANDER, CLARISSA, BEATRIX, HAMID
1 A ¶ A woodstove glows.
2 A Mismatched armchairs, a bookshelf of paperbacks, a window that frames the dark lake.
3 A A board game sits half-played on the coffee table.
4 A ¶ EVANDER, sixties, the host, in a fisherman's sweater, pours wine from a dusty bottle.
5 A CLARISSA, forties, his daughter, sits beside her sister BEATRIX, forties, who holds a game piece between two fingers.
6 A HAMID, thirties, Clarissa's quiet husband, reads the rules aloud.
7 D EVANDER: Everyone's glass full?
8 D CLARISSA: Yes, Papa.
9 D BEATRIX: Mine's not.
10 D EVANDER: Because you don't drink.
11 D BEATRIX: I can still hold it.
12 A ¶ He tops hers off.
13 A She sets it on the table and doesn't touch it.
14 A Clarissa watches her, then looks away.
15 A Hamid rolls the dice, slow, careful.
16 D HAMID: Six.
17 D CLARISSA: Seven! You moved seven.
18 D HAMID: I moved six.
19 D BEATRIX: He moved six, Clarissa.
20 D CLARISSA: She always sides with him.
21 D EVANDER: Girls, please.
22 D BEATRIX: Papa, I need to tell you something.
23 D CLARISSA: Not now, Bea.
24 D EVANDER: What is it?
25 D BEATRIX: I
26 D CLARISSA: She's not feeling well.
27 D BEATRIX: I'm perfectly well, Clarissa, I'm trying to
28 D HAMID (quietly): Maybe we let her speak.
29 A ¶ Everyone stops.
30 A The woodstove ticks.
31 A Evander puts down the bottle and the cork rolls off the table.
32 D EVANDER: Beatrix.
33 A ¶ She pushes her glass an inch away.
34 A She meets her father's eyes for the first time that night.
35 D BEATRIX: I sold the cabin.
36 A ¶ Clarissa lets out a sound that is half laugh, half breath.
37 A Evander does not move at all.

### SCENE s00219 | INT. PAWNSHOP BACK ROOM - NIGHT
Detected names (may be incomplete or contain aliases): ROZ, VANTERPOOL, VINNIE, OKAFOR
1 A ¶ Shelves of guitars, clocks, and cameras.
2 A A caged bulb.
3 A A safe, door ajar.
4 A ¶ ROSALIND "ROZ" VANTERPOOL, 40s, in a trench coat, holds a gun on VINCENT "VINNIE" OKAFOR, 50s, behind a desk.
5 A He raises both hands, a cigar still smoldering between his fingers.
6 D ROZ: Open it.
7 D VINNIE: It's open.
8 D ROZ: All the way.
9 D VINNIE: It's a good safe. It doesn't go all the way.
10 D ROZ: Vinnie.
11 D VINNIE: Roz.
12 A ¶ They speak together, then both stop.
13 A Roz tightens her grip.
14 A Vinnie ashes the cigar on the desk.
15 D VINNIE [CONT'D]: You hired me, remember?
16 D ROZ: I remember.
17 A ¶ She steps forward and slams the safe door wide.
18 A Inside: a single sheet of paper.
19 A She grabs it.
20 A He grabs her wrist.
21 A They struggle, knocking a lamp off the desk.
22 A The bulb swings.
23 A The gun goes off, shattering a clock.
24 A ¶ They freeze.
25 D ROZ [CONT'D] (reading): This is a receipt.
26 D VINNIE: For what you paid me.
27 D ROZ: That's all there is?
28 D VINNIE: That's all there ever was.
29 A ¶ She lowers the gun.
30 A The clock keeps ticking, in pieces.

### SCENE s00449 | INT. ROOFTOP GREENHOUSE - APARTMENT BLOCK - DAWN
Detected names (may be incomplete or contain aliases): DETECTIVE OSWALDO PEREIRA-LANE, SABINA KOWALCZYK, THADDEUS BRIGHTWATER, MISS HYACINTH LOVELACE
1 A ¶ A glass lean-to bolted to a tar roof, crowded with tomato vines and orchid pots.
2 A Gray light.
3 A Condensation drips from the panes.
4 A A fan turns slowly overhead.
5 A ¶ DETECTIVE OSWALDO PEREIRA-LANE (50s, rumpled raincoat, thermos) stands over a body slumped between the tomato racks.
6 A The victim wears a gardener's apron and rubber boots.
7 A ¶ At the door, patrolwoman SABINA KOWALCZYK (20s, rain cape) guards the entrance.
8 A Next to her stands the building super, MR. THADDEUS BRIGHTWATER (60s, keys on a ring, cardigan), wringing his cap.
9 A ¶ On the far side of the glass, a nervous tenant, MISS HYACINTH LOVELACE (30s, silk robe, bare feet), watches from the stairwell.
10 D OSWALDO: Who found him?
11 D THADDEUS: I did, Detective. Came up to check the pipes.
12 D OSWALDO: What time?
13 D THADDEUS: Half past five.
14 A ¶ Oswaldo crouches.
15 A A small trowel lies beside the body, clean.
16 A He lifts the victim's hand.
17 A The fingernails are packed with fresh soil.
18 D OSWALDO (to Sabina): The roof door. Locked or unlocked?
19 D SABINA: Unlocked, sir.
20 D OSWALDO: Who has a key?
21 D THADDEUS: Just me. And Miss Lovelace. She waters the orchids.
22 A ¶ All eyes shift to the stairwell.
23 A Hyacinth steps back into the shadows, then slowly forward again.
24 D HYACINTH: I was asleep.
25 D OSWALDO: Miss Lovelace, your feet are muddy.
26 A ¶ She looks down.
27 A Pale mud streaks both soles.
28 A Oswaldo pours coffee from the thermos into its cap, sips, and says nothing for a long moment.

### SCENE s00842 | INT. GRAND MERIDIAN HOTEL - SUBLEVEL LAUNDRY - NIGHT
Detected names (may be incomplete or contain aliases): CALLOWAY, SECURITY, SABINE DUMAS, REUBEN OKAFOR, TANSY BRIGHT
1 A ¶ Industrial washers thunder in rows.
2 A Steam curls along pipes.
3 A Carts of white linen stand in the aisles like silent ghosts.
4 A ¶ CALLOWAY, fifties, a quiet man in a charcoal suit with a hotel badge that says SECURITY, leans on a dryer reading a folded newspaper.
5 A SABINE DUMAS, thirties, in a laundry uniform, loads sheets into a washer, never faster than necessary.
6 A REUBEN OKAFOR, twenties, a bellhop, sits on a laundry cart eating a sandwich.
7 A TANSY BRIGHT, forties, in a conference lanyard, hovers near the stairs.
8 A ¶ He turns a page.
9 A She slams a washer door.
10 A Reuben chews.
11 D TANSY: Excuse me. I think I took a wrong turn.
12 D SABINE: Guests aren't allowed down here.
13 D TANSY: I know. I'm sorry. I was looking for the ice machine.
14 D CALLOWAY: Third floor.
15 D TANSY: I'm on the third floor.
16 A ¶ Calloway folds his newspaper.
17 A Sabine finishes loading and stands straight.
18 A Reuben sets down his sandwich.
19 D REUBEN: Sabine, the thing from the Hartley party.
20 D SABINE: Not now.
21 D REUBEN: He'll want to know where
22 D SABINE: Reuben, not now.
23 A ¶ He swings off the cart.
24 A Calloway takes a step toward Tansy, hands open, friendly.
25 D CALLOWAY: Ma'am, I can walk you up.
26 D TANSY: That's not necessary.
27 D CALLOWAY: I insist.
28 A ¶ Tansy turns toward the stairs.
29 A Sabine moves to block her.
30 A The washers pound on.
31 D TANSY: Please move.
32 D SABINE: ^Please wait.
33 A ¶ Two voices, one beat.
34 A Calloway sighs and slides the newspaper into his jacket.
35 D CALLOWAY: Tansy Bright. Conference B. You gave a talk on supply chain integrity this afternoon.
36 D TANSY: How did you
37 D CALLOWAY: We read the program.
38 A ¶ She glances from him to Sabine to Reuben.
39 A Her hand finds the stair rail.
40 D TANSY: I'd like to leave now.
41 D REUBEN: Sure. We just want to ask one thing.
42 D SABINE: What did you see in the east elevator this afternoon?
43 D TANSY: Nothing.
44 D CALLOWAY: That's a very fast answer.
45 D TANSY: It's the true one.
46 D REUBEN: Ms. Bright, we're not the police.
47 D TANSY: That's what worries me.
48 A ¶ Calloway nods slowly.
49 A He crosses to a washer and pulls the handle.
50 A The door swings open, and steam rolls out.
51 A Inside, among the sheets, a conference lanyard hangs from a hook.
52 D SABINE: Is that yours?
53 A ¶ Tansy looks at her own lanyard.
54 A Then at the one in the machine.
55 A The numbers match.
56 D TANSY: I don't understand.
57 D CALLOWAY: Neither did the last one.
58 A ¶ He closes the door.
59 A The washers keep running.
60 A Nobody moves.

### SCENE s01948 | INT. MILL OWNER'S PARLOR - NIGHT
Detected names (may be incomplete or contain aliases): JOSEPHINE MBATHA, CYRUS ALDERWICK, CONSTANCE YOON
1 A ¶ 1903.
2 A A candle.
3 A A ledger.
4 A A decanter.
5 A ¶ JOSEPHINE MBATHA, 30s, in a plain gray dress, stands before the desk.
6 A CYRUS ALDERWICK, 50s, the owner, writes without looking up.
7 A CONSTANCE YOON, 20s, a weaver, trembles at the door.
8 A ¶ She sets a paper on the ledger.
9 A He reads it.
10 A He sets down the pen.
11 D CYRUS: You'd strike over this?
12 D JOSEPHINE: We'd strike over less.
13 A ¶ She steps forward.
14 A She places her hand over the ledger.
15 A Constance flinches.
16 A He stands.
17 A Josephine does not.
18 D CYRUS: Constance, did you put your name to this?
19 D CONSTANCE: I did, sir.
20 D JOSEPHINE: She did, and so did two hundred others.
21 A ¶ He sags into his chair.
22 A He pours a glass.
23 A He drinks.
24 D CYRUS: Tell your people we'll talk in the morning.
25 A ¶ She nods.
26 A She steps back.
27 A She takes the girl's arm.
28 A Together they go out into the dark corridor.

### SCENE s02230 | INT. WINE CELLAR BENEATH A CASINO - NIGHT
Detected names (may be incomplete or contain aliases): TEO, FERRIS, LEV, NADIA, WOMAN IN GREEN, IMANI, KESSLER
1 A ¶ Brick arches.
2 A Oak racks.
3 A A security camera in a corner, its red light dead.
4 A ¶ TEO crouches at a steel vault door with a thermal lance.
5 A FERRIS stands lookout at the stairs.
6 A LEV unrolls a canvas bag.
7 A NADIA reads a tablet.
8 A ¶ A WOMAN IN GREEN, thirties, silk dress, heels in her hand, comes down the stairs.
9 A She is not part of the crew.
10 A Everyone sees it.
11 A ¶ He draws a pistol.
12 A She raises her free hand.
13 D WOMAN IN GREEN: Don't. I'm the one who killed the camera.
14 A ¶ Nadia shrugs at Teo.
15 A He keeps working.
16 D FERRIS: Who sent you?
17 D WOMAN IN GREEN: Nobody. I work upstairs.
18 D NADIA: Upstairs as in--
19 D WOMAN IN GREEN: Cage cashier. Eleven years.
20 A ¶ He stops unrolling the bag and studies her.
21 D LEV: Why help us?
22 D WOMAN IN GREEN: Because the owner is walking down these stairs in four minutes.
23 A ¶ Ferris's jaw tightens.
24 A He lowers the pistol.
25 D NADIA: Name.
26 D WOMAN IN GREEN: Does it matter?
27 D NADIA: It does to me.
28 A ¶ She sets her shoes on a barrel.
29 D IMANI: Imani.
30 A ¶ Nadia nods once.
31 A Teo's lance sputters and dies.
32 A He sits back.
33 D TEO: Door's open.
34 A ¶ The vault swings out.
35 A Inside, stacked bills.
36 A Lev starts loading.
37 A Ferris backs toward the stairs, listening.
38 D IMANI: You have three minutes.
39 D FERRIS (quiet): Faster.
40 A ¶ Lev doubles his pace.
41 A She drops the tablet and helps.
42 A Teo takes the door.
43 A Footsteps above.
44 A A cough.
45 A A chair scrapes.
46 D KESSLER [O.S.] (from the stairwell, old and wheezing): Imani? Is that you down there?
47 A ¶ She freezes.
48 A So does everyone.
49 D IMANI: Yes, Mr. Kessler. Counting the reserve.
50 D KESSLER [O.S.]: At this hour?
51 D IMANI: Audit.
52 A ¶ Ferris raises the pistol toward the stairs.
53 A She puts a hand on his wrist.
54 D IMANI [CONT'D] (whispering): No guns. He's old. He'll have a heart attack and then we all hang.
55 D FERRIS: What do you suggest?
56 D IMANI: I'll talk to him.
57 A ¶ She picks up her shoes, straightens her dress, and climbs.
58 A Behind her, the crew holds still.
59 A He listens as she greets the old man in a voice honey-smooth.
60 A ¶ Lev zips the bag.
61 A They trade a look.
62 A Ferris does not lower the gun.
63 D LEV (whispering): She'd better be good.
64 D TEO: She's very good.
65 A ¶ Above, a door closes.
66 A Muffled laughter, an old man's.
67 A Then nothing.
68 A ¶ Ferris exhales and waves the others toward the service tunnel.
69 A They go, the bag swinging, as footsteps fade overhead.

### SCENE s00699 | EXT. SHELLED FARMHOUSE - DAWN
Detected names (may be incomplete or contain aliases): BRANDT, ACHTERBERG, YOUNG SOLDIER, KOWALSKI
1 A ¶ Smoke.
2 A Rubble.
3 A A dead cow.
4 A Ahead, a treeline hums with distant engines.
5 A ¶ SGT. BRANDT, 40s, crouches behind a half-wall, rifle across his knees.
6 A LT. ACHTERBERG, 30s, studies a map, mud on his glasses.
7 A A YOUNG SOLDIER, 19, trembles beside them, helmet too big.
8 D BRANDT (to everyone): Heads down. Listen.
9 A ¶ The engines swell.
10 A The Young Soldier lifts his head.
11 D BRANDT [CONT'D]: Down!
12 A ¶ Achterberg folds the map.
13 D ACHTERBERG: Armor. Two, maybe three.
14 D BRANDT: Our guns?
15 D ACHTERBERG: Dead.
16 D YOUNG SOLDIER (to himself): Mama. Mama. Mama.
17 D BRANDT: What's your name, son?
18 D YOUNG SOLDIER: Kowalski.
19 D BRANDT: Kowalski. Look at me. On my word, you run for the ditch. You don't stop.
20 D KOWALSKI: Sergeant, I can't --
21 D BRANDT: You can.
22 A ¶ A shell lands close.
23 A Dirt rains on all three of them.
24 D ACHTERBERG (to Brandt): Now?
25 D BRANDT: Now!

### SCENE s02312 | INT. HOUSEBOAT, DINING TABLE - NIGHT
Detected names (may be incomplete or contain aliases): ROSALEEN FITZPATRICK, THADDEUS FITZPATRICK, CILLIAN, YASMIN FITZPATRICK
1 A ¶ A narrow cabin lit by a hurricane lamp.
2 A A pot of stew steams.
3 A The hull knocks gently against a pier.
4 A ¶ ROSALEEN FITZPATRICK, sixty, her hair pinned up, ladles stew.
5 A Her husband THADDEUS FITZPATRICK, sixty-two, bearded, tears bread in silence.
6 A Their son CILLIAN, thirty-four, in a city jacket, stares at his bowl.
7 A And his wife YASMIN FITZPATRICK, thirty, folds her napkin into smaller and smaller squares.
8 D ROSALEEN: Eat.
9 D CILLIAN: I'm not hungry.
10 D ROSALEEN: You drove four hours.
11 D CILLIAN: I had a sandwich.
12 D THADDEUS: Where?
13 D CILLIAN: A service station.
14 D THADDEUS: They'll charge you three pounds for a sandwich.
15 D CILLIAN: It was four.
16 D THADDEUS: Robbery.
17 D ROSALEEN: Yasmin, more stew?
18 D YASMIN: I'm fine, thank you.
19 D ROSALEEN: You didn't finish.
20 D YASMIN: I'm full.
21 D ROSALEEN: You're thin.
22 D YASMIN: I'm what I always am.
23 A ¶ A pause.
24 A Thaddeus sets down the bread.
25 D THADDEUS: Your mother made this stew.
26 D CILLIAN: It's good.
27 D THADDEUS: It's the same as last year.
28 D CILLIAN: That's what makes it good.
29 D THADDEUS: Then why do you look like that?
30 D CILLIAN: Like what?
31 D THADDEUS: Like a man who's sold the boat.
32 A ¶ Silence.
33 A Rosaleen sets down the ladle.
34 A Yasmin's napkin is a tiny white square.
35 D CILLIAN: Dad.
36 D THADDEUS: Did you sell the boat?
37 D CILLIAN: I haven't sold anything.
38 D THADDEUS: You've had a man to look at her.
39 D CILLIAN: That was a surveyor. For the bank.
40 D THADDEUS: The bank.
41 D ROSALEEN: Thaddeus.
42 D THADDEUS: The bank, Rosaleen.
43 D CILLIAN: The mortgage is three months behind. I didn't know how to say it.
44 D THADDEUS: So you brought a surveyor.
45 D CILLIAN: I brought help.
46 D THADDEUS: I don't need help.
47 A ¶ He rises.
48 A The chair scrapes, the lamp swings, shadows slide across the walls.
49 A He goes up the stairs and out onto the deck, and the hull rocks under his boots.
50 A Nobody moves.
