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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_sonnet/group_00026.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s02219 | INT. LAUNDROMAT - DAWN
Detected names (may be incomplete or contain aliases): MARTHA OYELARAN-COLE, KAYLA, ARTURO VEGA, DESIREE BLANCHARD, OKONKWO-PRICE, SOLANGE DELACROIX
1 A ¶ Humming machines, a bank of dryers.
2 A A flickering neon sign reads OPEN 24 HRS.
3 A Rain-streaked windows.
4 A A vending machine glows in the corner.
5 A ¶ MARTHA OYELARAN-COLE (60s, thick glasses, cardigan) folds sheets with practised precision.
6 A At the next table, her granddaughter KAYLA (16, headphones, school hoodie) sorts socks without looking up.
7 A Beside them, ARTURO VEGA (40s, delivery driver, wet jacket) feeds quarters into a washer.
8 A DESIREE BLANCHARD (30s, nurse in scrubs) dozes in a plastic chair.
9 A And the attendant, MR. OKONKWO-PRICE (70s, bowtie, name tag), mops by the door.
10 A ¶ Quiet.
11 A Only machines.
12 D MARTHA: You'll want the warm cycle for those.
13 D KAYLA: They're socks, Gran.
14 D MARTHA: Warm.
15 A ¶ Kayla pulls out an earbud and drops a bundle into the machine.
16 A Arturo glances at her, then at Martha.
17 D ARTURO (to Martha): I'm sorry, is this machine free?
18 D MARTHA: That one's broken.
19 D ARTURO: It took my quarters.
20 D MARTHA: It does that.
21 D MR. OKONKWO-PRICE (from the door): I'll refund you, sir.
22 D ARTURO: Thank you.
23 A ¶ The bell above the door jingles.
24 A A woman in a black dress and mud-streaked heels enters, a garbage bag of clothing in her arms, mascara tracks on her cheeks.
25 A This is SOLANGE DELACROIX (30s, composed but wrecked).
26 A Everyone looks at her and then pretends they didn't.
27 D SOLANGE: Is there a free machine?
28 D MARTHA: Number six.
29 D SOLANGE: Thank you.
30 A ¶ She crosses to number six.
31 A Loads the bag.
32 A Pours detergent from a bottle she takes out of her purse.
33 A Starts it with a shaking hand.
34 A Stands there, watching it fill.
35 A ¶ Desiree stirs.
36 A Her eyes open on the dress, on the heels.
37 D DESIREE: Rough night?
38 D SOLANGE: Rough morning.
39 D DESIREE: I'm sorry.
40 D SOLANGE: Don't be.
41 A ¶ Kayla puts the earbuds in her pocket.
42 A Martha folds a pillowcase, then another.
43 A She places one on top of Solange's bag, quietly.
44 D MARTHA: For your head.
45 A ¶ Solange stares at it.
46 A Then at Martha.
47 A She sits on the bench beside her, folds her hands, and for the first time looks up, directly at the old woman.
48 D SOLANGE: Thank you.
49 D MARTHA: Everyone ends up in a laundromat eventually.
50 A ¶ The machines hum.
51 A Somewhere a dryer buzzes, and no one moves to open it.

### SCENE s00061 | EXT. TRENCH LINE, RAIN-SOAKED FIELD - NIGHT
Detected names (may be incomplete or contain aliases): PENROSE, SERGEANT BAPTISTE ONWUACHI, PRIVATE ELIAS FJELDSTAD-MORENO
1 A ¶ A sheet of rain.
2 A Barbed wire sags in the flare light.
3 A Mud sucks at every boot.
4 A ¶ LIEUTENANT ARCHIBALD "ARCHIE" PENROSE (30s, helmet strap loose, flashlight taped) crouches with a map.
5 A SERGEANT BAPTISTE ONWUACHI (40s, thick forearms, helmet dented) checks his rifle.
6 A PRIVATE ELIAS FJELDSTAD-MORENO (19, trembling, bayonet fixed) hugs the trench wall.
7 D PENROSE: Sergeant, status?
8 D ONWUACHI: Half the men are asleep.
9 D FJELDSTAD-MORENO: I'm not asleep.
10 D ONWUACHI: Nobody said you were.
11 D PENROSE: Elias, keep your head down.
12 D FJELDSTAD-MORENO: Yes sir.
13 D ONWUACHI (to the trench): Fix bayonets! On my word!
14 A ¶ A whistle shrieks.
15 A Penrose and Onwuachi look up as one.
16 A Elias presses his forehead to the mud.
17 D PENROSE (muttering): Dear God.
18 D ONWUACHI: Now!
19 A ¶ The whole trench erupts.
20 A Men climb out of the earth.
21 A Elias stays frozen until Onwuachi hauls him up by the collar and drags him into the dark.

### SCENE s00884 | INT. DROWNED CATHEDRAL - LIBRARY NAVE - TWILIGHT
Detected names (may be incomplete or contain aliases): KAELEN ASHDOWN, SELUNE ORRIN, OLD BRAM
1 A ¶ Water laps at the knees of marble saints.
2 A Long shelves rise out of the green dark, their books swollen and glowing faintly with lichen light.
3 A Shafts of drowned moonlight fall through a broken rose window, and in them drift motes like slow fish.
4 A ¶ KAELEN ASHDOWN, 20s, wades chest-deep with a lantern held high.
5 A A scholar's coat floats around her like a jellyfish.
6 A Her braid is plastered to her neck.
7 A ¶ SELUNE ORRIN, 30s, pale as milk, surfaces from the water by the pulpit without a ripple.
8 A She wears a grey shift that moves as if underwater even when she is not.
9 A Her eyes are the colour of old pearl.
10 A ¶ OLD BRAM, 80s, sits on a toppled bookshelf above the waterline, whittling a reed pipe, one bare foot dangling.
11 D KAELEN: You are not supposed to be awake.
12 D SELUNE: You are not supposed to be here.
13 D KAELEN: I've come for the Index.
14 D SELUNE: You've come to steal it.
15 D KAELEN (speaking at once; speaking at once): SELUNE It belongs to the living. It belongs to the drowned.
16 D OLD BRAM (not looking up): You both sound very sure.
17 A ¶ They stop.
18 A A silence, thick as water.
19 A Selune drifts closer, circling Kaelen, her shift trailing silt.
20 A Kaelen lifts the lantern between them.
21 A The flame shivers but does not die.
22 D KAELEN: Then let me read it. One page.
23 D SELUNE: Which?
24 D KAELEN: My mother's.
25 A ¶ Selune's expression changes, something old and tender breaking through the stillness.
26 D OLD BRAM (muttering): Aye, there it is.
27 A ¶ Selune reaches under the water and draws out a book, black with age and fat with brine.
28 A She offers it.
29 A Kaelen takes it.
30 A Their fingers touch and both flinch, as if from cold.
31 A ¶ They stand a long moment, the book between them, the lantern light swaying across the ruined nave.
32 A Then Kaelen opens it.
33 A The pages are blank except for one line, written in a hand she knows.
34 D KAELEN [CONT'D] (whispering): She waited.
35 D SELUNE: Every night.
36 A ¶ Old Bram tucks the whittled pipe behind his ear and slides down off the shelf, landing with a splash.
37 D OLD BRAM: Right. Tea?

### SCENE s01863 | INT. INTERROGATION ROOM - NIGHT
Detected names (may be incomplete or contain aliases): AGENT MAREN SOLOMON, THEO VANCE, ^THEO
1 A ¶ A bare room.
2 A A steel table bolted to the floor.
3 A A one-way mirror.
4 A A single chair on each side.
5 A ¶ AGENT MAREN SOLOMON, 40s, sits with a manila folder squared in front of her and does not open it.
6 A Her sleeves are pressed.
7 A Her face gives nothing.
8 A ¶ Opposite her, wrists in plastic ties, a man in a gray hoodie.
9 A THEO VANCE, 30s.
10 A He studies the table, then the mirror, then her hands.
11 D MAREN: Do you want water?
12 D THEO: No.
13 D MAREN: Coffee?
14 D THEO: No.
15 D MAREN: You've been here six hours.
16 D THEO: Eight.
17 A ¶ She glances at her watch.
18 A He is right.
19 A She makes no remark.
20 D MAREN [CONT'D]: Eight.
21 D THEO: You don't believe me.
22 D MAREN: I believe your watch is better than mine.
23 A ¶ He tilts his head, almost smiling.
24 A He lifts his bound wrists to scratch his nose.
25 A She watches the movement closely, then looks away.
26 D MAREN [CONT'D]: Tell me about the drive.
27 D THEO: What drive?
28 D MAREN: The one in your sock.
29 A ¶ His smile goes.
30 A He lowers his hands.
31 A Under the table, a shoe taps twice and stops.
32 D THEO: I don't have a drive.
33 D MAREN: We have a photograph of the drive.
34 D THEO: Then you don't need me.
35 A ¶ She opens the folder at last.
36 A Slides a single glossy photo across the steel.
37 A He doesn't look at it.
38 A His eyes stay on her.
39 D MAREN: Who gave it to you?
40 D THEO: Nobody.
41 D MAREN (simultaneously): Who gave it to you?
42 D ^THEO (simultaneously): Nobody gave it.
43 A ¶ Silence.
44 A The ventilation fan clicks on, then off.
45 A ¶ Maren reaches across and, slowly, takes his hand in both of hers, as if comforting him.
46 A Turns it over.
47 A Examines the palm.
48 A A faint blue smear of ink on the heel of it.
49 A ¶ She lets go.
50 A He pulls the hand back, and tucks it under his other arm.
51 D MAREN [CONT'D]: That's from the stamp at the locker.
52 A ¶ Theo says nothing.
53 A The shoe starts tapping again.
54 A ¶ Maren closes the folder.
55 A She stands, tucks her chair beneath the table, and goes to the door.
56 A At the threshold she turns.
57 D MAREN [CONT'D]: Eight hours, Mr. Vance. I think you'd like a coffee now.
58 D THEO (low): Black.

### SCENE s01163 | INT. EMERGENCY ROOM - TRAUMA BAY ONE - NIGHT
Detected names (may be incomplete or contain aliases): AGNES FALK, NURSE DESHAWN, PARAMEDIC LU, RESIDENT OTTO, BELLWEATHER, ASHFORD
1 A ¶ Harsh light.
2 A Beeping monitors.
3 A A gurney in the center, a man under a blood-soaked sheet.
4 A ¶ DR. AGNES FALK (40s, scrubs, loupes pushed up on her head) cuts away a sleeve.
5 A NURSE DESHAWN (30s, gloves to the elbow) hangs a bag of saline.
6 A PARAMEDIC LU (30s, vest, radio on shoulder) pumps the chest.
7 A RESIDENT OTTO (20s, pale, shaking) fumbles with a central line kit.
8 A The patient, MR. BELLWEATHER (70s, gray stubble, oxygen mask), gasps.
9 D FALK: Pressure?
10 D DESHAWN: Seventy over forty.
11 D FALK: Otto, line.
12 D OTTO: Yes, Doctor. Trying.
13 D FALK: Try faster.
14 D LU: Sinus tach. He's crashing.
15 D BELLWEATHER (muffled): Don't... let me...
16 D FALK: Stay with us, Mr. Bellweather.
17 A ¶ Alarm.
18 A The monitor flatlines.
19 A Lu's hands lock on the chest.
20 A Falk grabs the paddles.
21 D FALK [CONT'D]: Charge to two hundred. Clear.
22 A ¶ Everyone steps back.
23 A The body jolts.
24 A The line wobbles.
25 A Wobbles.
26 A Steadies.
27 D DESHAWN: We have a rhythm.
28 D OTTO (exhaling): Oh, thank God.
29 D LU: Doctor, he's coding again.
30 D FALK: Again.
31 A ¶ Another jolt.
32 A The curtain parts.
33 A DR. ASHFORD (50s, silver hair, a surgeon's cap, calm as ice) steps in, tying a mask behind his head.
34 D ASHFORD: I'll take over, Dr. Falk.
35 D FALK: Dr. Ashford? He's mine.
36 D ASHFORD: Not anymore. Otto, step aside.
37 A ¶ Otto drops the line kit and flattens himself against the wall.
38 A Ashford takes the paddles from Falk with a gentle but absolute hand.
39 D ASHFORD [CONT'D]: Charge three-sixty.
40 D DESHAWN: Charged.
41 D ASHFORD: Clear.
42 A ¶ The body arches.
43 A The monitor sings.
44 A Falk lets out a breath, and for the first time looks at her own trembling hands.

### SCENE s01278 | INT. FERRY TICKET BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): ODETTE ARMSTRONG
1 A ¶ A glass box at the end of a pier.
2 A A single brass lamp.
3 A Rain slides down the windows.
4 A Outside, the last ferry's lights shrink into fog.
5 A ¶ ODETTE ARMSTRONG, 60s, uniform cap, spectacles on a chain, sits at a worn desk.
6 A Before her: a cassette recorder, the kind with piano keys.
7 A A thermos.
8 A ¶ She presses PLAY.
9 D ODETTE [V.O.] (recorded, younger, warm): Testing. Testing. This is Odette Armstrong, ticket agent, Pier Nine. If you're hearing this, I've either retired or I've lost my mind.
10 A ¶ She smiles.
11 A Stops the tape.
12 A Rewinds a little.
13 A Plays again.
14 D ODETTE [V.O., CONT'D] (recorded): Thirty years on this pier. I want to record what I remember. The first fare I ever sold was a dollar twenty.
15 A ¶ She pours tea.
16 A Her hand trembles slightly.
17 D ODETTE [V.O., CONT'D] (recorded): The worst winter was '88. The ice stopped everything. I slept in this booth for three nights. I was happier than I'd ever been.
18 A ¶ She stops the tape.
19 D ODETTE (to herself): Happier.
20 A ¶ She looks at the empty pier.
21 A At the dark water.
22 A ¶ She presses PLAY.
23 D ODETTE [V.O., CONT'D] (recorded): If I could tell the person listening one thing, it would be this. Don't wait for the boat. The boat always leaves.
24 A ¶ The thermos lid falls.
25 A Rolls across the floor.
26 A She doesn't pick it up.
27 D ODETTE [V.O., CONT'D] (recorded): Go to the pier before the boat. Go to the sea before the pier.
28 A ¶ Her jaw tightens.
29 A She stabs the STOP key.
30 A The click echoes.
31 A ¶ She stands.
32 A Pulls the uniform cap from her head.
33 A Looks at it.
34 D ODETTE: Thirty years.
35 A ¶ She hurls the cap against the glass.
36 A It bounces off.
37 A Falls.
38 A ¶ She tears the cassette from the machine, raises it to smash it, and stops.
39 A Her chest heaves.
40 A ¶ Slowly, she slides it into her breast pocket.
41 A Picks up the cap.
42 A Sets it on the desk.
43 A ¶ She switches off the lamp.
44 A Dark.
45 A Rain.
46 D ODETTE [CONT'D]: Go to the sea.
47 A ¶ She pushes open the door.
48 A Fog pours in.
49 A She steps out onto the pier.

### SCENE s00317 | INT. REGIONAL SWIM CENTER - POOL DECK - EARLY MORNING
Detected names (may be incomplete or contain aliases): COACH MARISOL TREVELYAN-ADEWALE, ISAURA PRZYBYLSKI-MBEKI
1 A ¶ Chlorine haze.
2 A Lane ropes bobbing.
3 A Rows of empty bleachers.
4 A A single swimmer cuts lengths in lane four.
5 A ¶ COACH MARISOL TREVELYAN-ADEWALE (50s, whistle, towel round her neck) crouches at the pool edge with a stopwatch.
6 A On the starting block, soaked, goggles pushed up on her forehead, waits ISAURA PRZYBYLSKI-MBEKI (17, racing suit, shoulders too narrow for her ambitions).
7 D MARISOL: Again.
8 D ISAURA: I just did two hundred.
9 D MARISOL: And you'll do another.
10 D ISAURA: Coach.
11 D MARISOL: Isaura.
12 D ISAURA: My arms are lead.
13 D MARISOL: Lead floats if you move fast enough.
14 A ¶ Isaura laughs, breath ragged.
15 A Lowers her goggles.
16 D MARISOL [CONT'D]: On my whistle.
17 D ISAURA: On your whistle.
18 A ¶ Marisol raises it.
19 D MARISOL: Go.
20 A ¶ Isaura launches.
21 A The water folds around her.
22 A Marisol clicks the watch.
23 A Walks the deck beside the lane, keeping pace.
24 A ¶ At the wall, Isaura tumbles, pushes off.
25 A Marisol bends lower.
26 D MARISOL [CONT'D]: Long. Long.
27 D ISAURA [O.S.] (gasping): I'm trying!
28 D MARISOL: Long, Isaura!
29 A ¶ Isaura touches the far wall.
30 A Surfaces.
31 A Breathes.
32 A Marisol stops the watch.
33 A Looks at it.
34 D MARISOL [CONT'D]: Better.
35 D ISAURA: How much?
36 D MARISOL: Two-tenths.
37 D ISAURA: That's all?
38 D MARISOL: That's everything.
39 A ¶ Isaura grins.
40 A Pulls herself onto the deck and sits, legs dangling.
41 A Marisol sits beside her.
42 A They both stare at the water.
43 D ISAURA: Can I ask something?
44 D MARISOL: You can ask.
45 D ISAURA: Did you ever want to quit?
46 D MARISOL: Every day.
47 D ISAURA: But you didn't.
48 D MARISOL: I got up. That's the whole trick.
49 D ISAURA: That's not a trick. That's just getting up.
50 D MARISOL: Yes. Exactly.
51 A ¶ They say the next line together.
52 D MARISOL: Again?
53 D ISAURA: Again.
54 A ¶ They laugh.
55 A Isaura stands.
56 A Marisol rises.
57 A The water settles into stillness, waiting for them.

### SCENE s00075 | INT. CHEESE-AGING CAVE - NIGHT
Detected names (may be incomplete or contain aliases): MARISOL FUENTES, CASPIAN DUBOIS, IGGY BRANNIGAN, SUNITA RAO, MADAME ELOISE THIBAULT
1 A ¶ Limestone walls, wooden racks of wheels, a fog of ammonia and mold.
2 A A single bulb swings on a cord.
3 A ¶ MARISOL FUENTES (30s, climbing harness, headlamp) lowers herself off a ladder while CASPIAN DUBOIS (40s, careful hands, white coat stolen from a cheesemonger) checks a humidity gauge and IGGY BRANNIGAN (20s, nervous, duffel bag) props open the freight door with a wheel of Gruyere.
4 A SUNITA RAO (50s, retired locksmith, reading glasses on a chain) kneels at a steel cabinet at the back, picks in hand.
5 D MARISOL: Eleven minutes. That's the guard's loop.
6 D CASPIAN: Nine. I counted.
7 D IGGY: It smells like feet in here.
8 D SUNITA: It smells like money. Hush.
9 A ¶ The cabinet clicks.
10 A Sunita pulls the door.
11 A Inside, velvet-lined shelves cradle a row of small glass jars.
12 A Marisol reaches in.
13 D MARISOL: Starter cultures.
14 D CASPIAN: Four hundred years old. Worth more than gold.
15 D IGGY: It's cheese mold.
16 D SUNITA: It's the cheese mold.
17 A ¶ Iggy lifts a jar.
18 A Caspian takes the next one.
19 A Marisol begins loading the duffel.
20 A Everything is calm, almost gentle, like four people in a pantry.
21 A ¶ A flashlight beam sweeps across the entrance.
22 A ¶ MADAME ELOISE THIBAULT (70s, nightgown, wellington boots, a shotgun held like an umbrella) steps through the freight door.
23 A She does not look surprised.
24 D MADAME THIBAULT: Put them back.
25 D IGGY: We were just--
26 D MARISOL: Madame, we can explain.
27 D CASPIAN: Don't explain.
28 D SUNITA: She's holding a shotgun, Caspian, explain something.
29 D MADAME THIBAULT: Put them back. Every one. Then you may leave.
30 A ¶ The four of them glance at each other.
31 A Marisol sets the duffel down.
32 A Caspian nudges a jar back with one finger.
33 A Iggy sobs quietly.
34 A Sunita sighs and replaces the cabinet door.
35 D MADAME THIBAULT [CONT'D]: The key is in the left pocket of my robe. It always was.
36 A ¶ Sunita peers at her.
37 D SUNITA: You left it unlocked.
38 D MADAME THIBAULT: I left it for the mice. You, I did not expect.

### SCENE s02511 | INT. SKI PATROL HUT - SUMMIT - NIGHT
Detected names (may be incomplete or contain aliases): THORVALD EKLUND, ELOISE MAKINDE, KAMAU NJOROGE, ISADORA VANCE, NANDI
1 A ¶ A cedar-lined cabin clinging to a ridge.
2 A Frost patterns bloom on the windows.
3 A A woodstove glows orange.
4 A Skis in racks, avalanche probes in a barrel, a first-aid sled by the door.
5 A Wind presses against the walls.
6 A ¶ THORVALD EKLUND, 50s, patrol chief, weathered, beard crusted with ice, pours coffee at the stove.
7 A ELOISE MAKINDE, 30s, a doctor in a red jacket, adjusts a radio.
8 A KAMAU NJOROGE, 20s, rookie patroller, laces a boot.
9 A ISADORA VANCE, 40s, a guest in a designer parka, sits by the stove with a thermos, her gloves still on.
10 A ¶ The mood is warm.
11 A Sleepy.
12 A A deck of cards lies half-dealt on the table.
13 D THORVALD: Last run's clear. We close at ten.
14 D KAMAU: Big storm tomorrow?
15 D THORVALD: Big one.
16 D ISADORA: I can't believe you let me stay. I'm grateful.
17 D ELOISE: You were stuck.
18 D ISADORA: I was lost.
19 D KAMAU: You were on the wrong side of the ridge.
20 D ISADORA: Somebody put the sign in the wrong place.
21 D THORVALD: Nobody touched the sign.
22 D ISADORA: Then it fell.
23 A ¶ The radio crackles.
24 D NANDI [V.O.]: Base to summit. Come in, summit.
25 A ¶ Eloise lifts the handset.
26 D ELOISE: Summit.
27 D NANDI [V.O.]: Doctor, I need a headcount.
28 D ELOISE: Four in the hut. Thorvald, me, Kamau, and a guest.
29 D NANDI [V.O.]: A guest?
30 D ELOISE: Lost skier. Isadora Vance.
31 A ¶ Silence on the line.
32 A Static.
33 A The stove ticks.
34 A Thorvald sets down his coffee.
35 D NANDI [V.O.]: Doctor. The only Isadora Vance on the lift manifest checked out at noon.
36 D ELOISE: Say again?
37 D NANDI [V.O.]: She went down at noon. She's in the bar.
38 A ¶ Isadora's smile doesn't change.
39 A The thermos in her lap clicks as she turns the lid.
40 D KAMAU: Maybe there's two.
41 D THORVALD: There's not two.
42 D ISADORA: There is, actually.
43 A ¶ She stands.
44 A Her glove slips.
45 A Beneath it: a wrist wrapped in a hospital bracelet, the name blacked out.
46 D ISADORA [CONT'D]: I'd hoped to rest longer.
47 D ELOISE: Who are you?
48 D ISADORA: The woman who didn't make it down.
49 A ¶ Thorvald draws the avalanche probe from the barrel.
50 A Kamau backs against the wall.
51 A Eloise drops the handset.
52 A It swings on its cord.
53 D ISADORA [CONT'D] (gentle): Thorvald. Eleven years ago. The east chute.
54 A ¶ His knuckles go white on the probe.
55 D THORVALD (hoarse): You were dead.
56 D ISADORA: And you were the one who dug.
57 A ¶ The wind drops.
58 A The stove goes out.

### SCENE s01570 | INT. TAXIDERMY SHOP - BACK ROOM - DAWN
Detected names (may be incomplete or contain aliases): INSPECTOR ADAEZE OKAFOR, ELIAS VANTERPOOL
1 A ¶ Glass eyes.
2 A Hundreds.
3 A Foxes, owls, one bewildered ostrich.
4 A ¶ INSPECTOR ADAEZE OKAFOR (50s, raincoat, tired eyes) stands over a workbench.
5 A A half-stuffed heron.
6 A Fresh stitches.
7 A ¶ ELIAS VANTERPOOL (60s, apron, ink-stained thumbs) wipes his hands.
8 A Slowly.
9 A Too slowly.
10 D OKAFOR: Nice heron.
11 D ELIAS: Customer's. Collects Thursday.
12 D OKAFOR: Thursday.
13 A ¶ She lifts the heron's wing.
14 A Peers inside.
15 A Sets it down.
16 D OKAFOR [CONT'D]: Mr. Vanterpool, where were you Sunday night?
17 D ELIAS: Here. Working.
18 D OKAFOR: Alone?
19 D ELIAS: Always alone. Animals don't gossip.
20 D OKAFOR: Mrs. Delacroix did. Before she vanished.
21 D ELIAS: Mrs. Delacroix gossiped about everyone.
22 D OKAFOR: She said you kept a second ledger.
23 D ELIAS: Everyone keeps a second ledger.
24 D OKAFOR: Not everyone keeps it inside a badger.
25 A ¶ Silence.
26 A Elias glances at the shelf.
27 A Okafor follows his look.
28 A Back to him.
29 D ELIAS: You've no warrant.
30 D OKAFOR: Door was open.
31 D ELIAS: Door was closed.
32 D OKAFOR: Then someone opened it. Funny, that.
33 D ELIAS: Get out of my shop.
34 D OKAFOR: She paid you for the badger. Didn't she? Forty years of payments. For something that isn't a badger at all.
35 D ELIAS: Get out.
36 D OKAFOR: Where is she, Elias?
37 A ¶ Elias lunges for the shelf.
38 A Okafor tackles him.
39 A They crash into the workbench.
40 A The heron topples.
41 A Glass eyes rattle.
42 A ¶ They roll.
43 A Elias grabs a scalpel.
44 A Okafor pins his wrist.
45 A They freeze, nose to nose, breath ragged.
46 A ¶ The badger falls from the shelf.
47 A Splits open.
48 A Paper spills across the floor.
49 A ¶ Both stare at it.
50 A Neither moves.

### SCENE s00341 | INT. BELL TOWER OBSERVATION POST - DAWN
Detected names (may be incomplete or contain aliases): MBEKI, ARNAUD, HOSSEINI, MAJOR TULLY
1 A ¶ A narrow stone chamber under the bells.
2 A Sandbags in the arched window.
3 A Mist below.
4 A ¶ SGT. MBEKI, forties, binoculars up, kneels at the window.
5 A PVT.
6 A ARNAUD, nineteen, clutches a rifle.
7 A CPL.
8 A HOSSEINI, thirties, sits against the wall working a field radio.
9 A They are silent.
10 A He adjusts the dial.
11 A He lowers the binoculars.
12 A Arnaud's knuckles go white.
13 D MAJOR TULLY [O.S.] (over radio): Bell Tower, this is Command. Status report. Over.
14 D MBEKI (whisper): Tell him nothing moves.
15 D HOSSEINI (into radio): Command, Bell Tower. Nothing moves. Over.
16 D MAJOR TULLY [O.S.] (over radio): Keep it that way. Over.
17 A ¶ Hosseini sets down the handset.
18 A Below, in the fog, something metal clinks.
19 A Mbeki holds up a flat hand.
20 A Arnaud's rifle trembles.
21 A Hosseini slides the radio away from the wall.
22 D ARNAUD (barely audible): Sergeant. It's coming from the church.
23 D MBEKI: It's the church that's ours.
24 A ¶ A single bell above them swings and sounds, once, deep and sudden.

### SCENE s01246 | INT. FAMILY KITCHEN - MORNING
Detected names (may be incomplete or contain aliases): ROSEMARY ALDRIDGE, BARNABY ALDRIDGE, GRANDMA
1 A ¶ Pancakes burn.
2 A Smoke curls from the pan.
3 A A cat watches from the refrigerator top.
4 A ¶ Mum, ROSEMARY ALDRIDGE (40s, bathrobe, phone against her shoulder), flips a pancake.
5 A It lands on the floor.
6 A She leaves it.
7 A ¶ Her son, BARNABY ALDRIDGE (10, school jumper, one shoe), sits at the table, staring at his cereal.
8 D BARNABY: It's soggy.
9 D ROSEMARY (into phone): Yes. I'm here. Hold on.
10 A ¶ She covers the receiver.
11 D ROSEMARY [CONT'D]: Barnaby, shoes.
12 D BARNABY: I'm not going.
13 D ROSEMARY: Barnaby.
14 D BARNABY: I'm not going.
15 D ROSEMARY (into phone): No, not you. Go on.
16 D GRANDMA [V.O.] (tinny, through the phone): Rosemary, put the boy on. Put him on.
17 D ROSEMARY: Mum, he's eating.
18 D GRANDMA [V.O.]: He's not eating. I can hear he's not eating.
19 A ¶ Barnaby's spoon clinks against the bowl.
20 A He pushes cereal in a circle.
21 D ROSEMARY: Barnaby. Grandma wants a word.
22 A ¶ He takes the phone.
23 A Holds it away from his ear like a dead fish.
24 D BARNABY: Hi.
25 D GRANDMA [V.O.]: Barnaby, my darling. Do you know what day it is?
26 D BARNABY: Tuesday.
27 D GRANDMA [V.O.]: It's your sports day, isn't it?
28 A ¶ His shoulders hunch.
29 A The spoon goes still.
30 D BARNABY: I'm not doing the race.
31 D GRANDMA [V.O.]: Why not?
32 D BARNABY: Because I always lose.
33 A ¶ Rosemary stops with the spatula in the air.
34 A She looks at him.
35 A He looks at the table.
36 D GRANDMA [V.O.]: Your grandfather lost every race he ever ran.
37 D BARNABY: Really?
38 D GRANDMA [V.O.]: Every one. He'd come in last and hold his arms up like he'd won. Everyone cheered. You know why?
39 D BARNABY: Why?
40 D GRANDMA [V.O.]: Because he was the only one who looked like he was enjoying it.
41 A ¶ Barnaby lifts his head.
42 A A corner of his mouth moves.
43 D BARNABY: Grandpa did that?
44 D GRANDMA [V.O.]: Put your mother back on.
45 A ¶ He hands the phone to Rosemary.
46 A She takes it, breath held.
47 D ROSEMARY: Mum?
48 D GRANDMA [V.O.]: Burn another pancake. He likes them burned.
49 A ¶ Rosemary laughs, a wet cracked sound.
50 A She wipes her eyes with the back of her wrist.
51 D ROSEMARY: I love you.
52 D GRANDMA [V.O.]: Hush. Go and flip.
53 A ¶ The line clicks.
54 A Rosemary puts the phone down on the counter.
55 A She picks up the burnt pancake from the pan, slides it onto a plate, and sets it in front of Barnaby.
56 D BARNABY: It's black.
57 D ROSEMARY: Eat.
58 A ¶ He takes a bite.
59 A Chews.
60 A Nods.
61 D BARNABY: It's okay.
62 A ¶ He picks up his other shoe.
63 T FADE OUT.

### SCENE s00100 | INT. FARMHOUSE KITCHEN - AUCTION DAY
Detected names (may be incomplete or contain aliases): IVO LANDRY, PETRA SZABO, DOLORES NKRUMAH, ANSELM WHITFIELD, KIRSTEN BJORNSEN
1 A ¶ Oilcloth on the table.
2 A Ladder-back chairs.
3 A A wall clock that ran slow for fifty years.
4 A Outside, through the screen door, trucks and auctioneer chatter in the yard.
5 A ¶ Five siblings crowd the room.
6 A IVO LANDRY (50s, eldest, Sunday jacket, no tie) stands at the counter packing a box of cutlery.
7 A PETRA SZABO (40s, nurse's clogs, keys in a fist) leans on the sink, arms crossed.
8 A DOLORES NKRUMAH (late 30s, silk blouse, phone face-down on the table) sits in their mother's chair.
9 A ANSELM WHITFIELD (30s, work boots, farm cap) rolls a pencil between his fingers by the stove.
10 A KIRSTEN BJORNSEN (20s, youngest, bare feet, a cardboard box in her arms) hovers in the doorway to the hall.
11 D IVO: The clock goes to me.
12 D PETRA: It goes to whoever's here.
13 D ANSELM: I'm here.
14 D DOLORES: I'm here too.
15 D IVO: You're on your phone.
16 D DOLORES: I'm on my phone in the chair.
17 A ¶ Anselm sets the pencil on the table.
18 A Dolores picks it up and sets it back where it was.
19 A Petra jingles her keys.
20 A Ivo wraps a fork in newspaper, then another, working quickly, like a man counting something.
21 D KIRSTEN (from the doorway): I took the quilt.
22 D PETRA: Which quilt?
23 D KIRSTEN: The blue one.
24 D IVO: That's Ma's quilt.
25 D KIRSTEN: She told me.
26 D ANSELM: When?
27 D KIRSTEN: In March.
28 D DOLORES: Of course she told you.
29 D PETRA: That's not fair.
30 D DOLORES: I didn't say it was fair.
31 A ¶ Kirsten shifts the box.
32 A Under the lid, a corner of blue appears.
33 A Ivo sees it.
34 A Looks away.
35 A A truck engine roars past the screen door and fades.
36 A Ivo puts down the fork and lowers himself, slowly, onto the last free chair.
37 D IVO: The clock goes to whoever winds it.
38 D PETRA: Nobody winds it.
39 D ANSELM: I wind it.
40 A ¶ Silence.
41 A Dolores lifts her head, surprised.
42 A Anselm picks the pencil up again, rolls it between finger and thumb.
43 A Petra's hand loosens on the keys, and Kirsten sets the box on the table and, with the care of someone handling an egg, unfolds the quilt.
44 A She lays it over the oilcloth.
45 A The five of them look at it, a field of faded blue squares.
46 D DOLORES: That's the barn.
47 D ANSELM: That's the pump house.
48 D PETRA: That's the pump house, Ivo.
49 D IVO (softly): That's the barn.
50 A ¶ Nobody argues.
51 A Outside the auctioneer cries a number, and another, and the clock on the wall, for no reason, ticks once and falls silent.

### SCENE s00466 | INT. VICTORIAN CHEMIST SHOP - AFTER HOURS - NIGHT
Detected names (may be incomplete or contain aliases): EZEKIEL FAIRBROTHER, NELLIE QUINTANILLA-GRAY, AUGUSTUS HELLEBORE
1 A ¶ Rows of blue glass bottles gleam like sleeping eyes.
2 A Mahogany drawers labeled in copperplate.
3 A A brass scale, a mortar and pestle.
4 A A single gas lamp hisses above the counter.
5 A ¶ MR. EZEKIEL FAIRBROTHER (60s, black apron, half-moon spectacles) stands behind the counter, wiping a pipette with a cloth.
6 A His apprentice, NELLIE QUINTANILLA-GRAY (teens, ink-stained cuffs, a braid pinned up), sweeps the floor too slowly.
7 A And by the door, shaking rain from his umbrella, stands DR. AUGUSTUS HELLEBORE (50s, silk hat, black bag).
8 D AUGUSTUS: Fairbrother. A word.
9 D EZEKIEL: Doctor. We are closed.
10 D AUGUSTUS: I am aware.
11 D EZEKIEL: Then you will understand if I say good night.
12 D AUGUSTUS: I want to know about the foxglove.
13 A ¶ Nellie stops sweeping.
14 A Ezekiel folds the cloth in thirds and lays it on the counter.
15 D EZEKIEL: Foxglove is a common remedy.
16 D AUGUSTUS: In the quantity you dispensed to Mrs. Pennywhistle?
17 D EZEKIEL: I dispensed what was prescribed.
18 D AUGUSTUS: By whom?
19 D EZEKIEL: By you.
20 D AUGUSTUS: I prescribed a pinch.
21 D EZEKIEL: You prescribed a teaspoon, Doctor. In your own hand.
22 D AUGUSTUS: I did no such thing.
23 D NELLIE (quietly): I have the slip, sir.
24 A ¶ Both men turn.
25 A Nellie reaches under the counter and draws out a folded paper.
26 A Her hand is steady.
27 A She lays it flat.
28 D AUGUSTUS: That is a forgery.
29 D NELLIE: It is your signature.
30 D AUGUSTUS: Child, you do not know what you are saying.
31 D NELLIE: I know my letters, sir. I learned them from Mr. Fairbrother.
32 A ¶ Ezekiel nods, slowly.
33 A Augustus's face changes, the polite mask slipping, and beneath it something older and colder looks out.
34 A His fingers close around the handle of his black bag.
35 D AUGUSTUS: Fairbrother, you will regret this.
36 D EZEKIEL: Doctor, I have regretted many things. This is not one of them.
37 A ¶ Augustus stares at the paper.
38 A Then he snaps up his umbrella, turns, and strides out into the rain.
39 A The door slams.
40 A The bell above it jangles for a long time.
41 A ¶ Nellie lets out a breath.
42 A Ezekiel takes up his cloth again and resumes wiping the pipette.
43 D EZEKIEL [CONT'D]: You were right to keep it.
44 D NELLIE: You taught me that, too.

### SCENE s02204 | INT. AMBULANCE BAY - RURAL HOSPITAL - NIGHT
Detected names (may be incomplete or contain aliases): AMARA NWOSU, BEN, HOLLOWAY, PARAMEDIC FIONA GALLAGHER, MARCEL DUPRE, DISPATCH
1 A ¶ Sodium lights, wet pavement.
2 A The bay doors yawn open to a rainy road.
3 A Gurneys and oxygen tanks line the wall.
4 A A radio on a shelf murmurs static.
5 A ¶ DR. AMARA NWOSU (40s, ER attending, damp scrubs) paces.
6 A NURSE BENEDICT "BEN" HOLLOWAY (30s, steady hands) checks a crash cart.
7 A PARAMEDIC FIONA GALLAGHER (30s, reflective jacket) stands by the doors, watching the road.
8 A ¶ Ben spots lights on the wet road.
9 A He nods at Fiona.
10 D BEN: They're here.
11 A ¶ An ambulance backs in, rear doors swinging.
12 A A gurney comes out fast.
13 A On it lies MARCEL DUPRE (50s, farmer, soaked flannel), pale and sweating.
14 A ¶ A radio on Fiona's shoulder crackles.
15 D DISPATCH [V.O.]: Unit Four, status on your patient? Over.
16 D FIONA (into radio): Unit Four. Arrived. Transferring now.
17 D DISPATCH [V.O.]: Copy, Four.
18 D AMARA: Fiona, what do you have?
19 D FIONA: Fifty-one-year-old male, chest pain, diaphoretic. BP eighty over fifty. Nitro given. No relief.
20 D AMARA: Ben, get a twelve-lead.
21 D BEN: On it, Doctor.
22 A ¶ He attaches the leads in four fast movements.
23 A The monitor shows a ragged line.
24 D BEN [CONT'D]: He's in V-fib.
25 D AMARA: Charge to two hundred.
26 D BEN: Charging.
27 D AMARA: Everybody clear.
28 D FIONA: Everybody clear.
29 A ¶ The shock lifts Marcel's back off the gurney.
30 A The monitor squeals.
31 A Flat.
32 D AMARA: Again.
33 D BEN: Charging. Three hundred.
34 D AMARA: Clear!
35 A ¶ Another shock.
36 A Marcel convulses.
37 A The monitor shows nothing.
38 A Then a blip.
39 A Another.
40 A The line settles into a ragged rhythm.
41 D BEN: We have a pulse.
42 D AMARA: Ben, breathe.
43 D BEN: I am breathing.
44 D AMARA: Then stop saying it out loud.
45 A ¶ Fiona, hands on her knees, lets out a short laugh.
46 A Ben wipes his forehead.
47 A The radio crackles again.
48 D DISPATCH [V.O.]: Unit Four, we have another call, motor vehicle collision, route nine. Can you respond? Over.
49 A ¶ Fiona looks at Amara.
50 A Amara looks at Fiona.
51 A Neither says anything.
52 A Rain drums on the bay roof.
53 D FIONA (into radio): Dispatch, Unit Four. Responding.
54 D AMARA: Fiona, you've been up thirty hours.
55 D FIONA: Thirty-one. Who's counting?
56 D AMARA: Ben is. Aren't you, Ben?
57 D BEN: Thirty-two, actually.
58 A ¶ Fiona grins, tired.
59 A She grabs her kit and jogs for the ambulance.
60 A The doors slam.
61 A The siren wails.
62 A The headlights swing across the bay and are gone.
63 A ¶ Amara turns to the gurney.
64 A Marcel's eyes flutter open.
65 A He grips her sleeve.
66 D MARCEL (faint): I'm sorry for the trouble.
67 D AMARA: No trouble, Mr. Dupre.
68 A ¶ She nods to Ben.
69 A Together they wheel him inside.

### SCENE s01676 | INT. ORBITAL GREENHOUSE RING - CONTINUOUS
Detected names (may be incomplete or contain aliases): CAPTAIN ISADORA QUILL, HIRO TANABE, ENSIGN PELL OKONKWO, MARIGOLD SENN, BARNABY CROSS, UNIT SEVEN
1 A ¶ A curved corridor of hydroponic racks, lit violet.
2 A Vines trail from brackets.
3 A Condensation drips from the ceiling in slow, floating beads.
4 A ¶ CAPTAIN ISADORA QUILL (50s, severe, silver crop) grips a handrail.
5 A Behind her, DR. HIRO TANABE (40s, lab coat), ENSIGN PELL OKONKWO (20s), and the ring's botanist, MARIGOLD SENN (30s, soil-stained gloves), crowd the hatch.
6 A At the far end, the old engineer BARNABY CROSS (60s) and a maintenance bot, UNIT SEVEN, stand beside a red warning light.
7 D ISADORA: Status.
8 D HIRO: Spore bloom in Racks Four through Nine --
9 D MARIGOLD: It's not a bloom, it's a --
10 D PELL: Captain, the seal on Nine is --
11 D ISADORA: One at a time!
12 D BARNABY: Seal's gone. Nine's venting.
13 D UNIT SEVEN (synthetic): Atmospheric loss at six percent and climbing.
14 D HIRO: We have minutes.
15 D MARIGOLD: Less if the roots reach the coolant.
16 D PELL: Then we cut Nine loose!
17 D ISADORA: Do it.
18 A ¶ Barnaby slams a lever.
19 A The red light dies.
20 A Everyone exhales together.

### SCENE s01511 | INT. OPEN-PLAN OFFICE, "SYNERGY SOLUTIONS" - MORNING
Detected names (may be incomplete or contain aliases): KEN, ADEBAYO-LINDQVIST, BEATRIX OKONKWO-PETROV, MANNY, TORRES-NGUYEN, ^MANNY
1 A ¶ Gray cubicles in rows.
2 A A motivational poster of a kayaker.
3 A A ficus dying politely.
4 A Overhead fluorescent tubes.
5 A Somewhere, a printer groans.
6 A ¶ KENNETH "KEN" ADEBAYO-LINDQVIST (50s, regional manager, short-sleeved dress shirt, a lanyard shaped like a lightning bolt) stands at the front of the room holding a laminated sign that reads: SYNERGY.
7 A Behind him sit his two lone employees.
8 A BEATRIX OKONKWO-PETROV (30s, headset around her neck) types without looking.
9 A EMMANUEL "MANNY" TORRES-NGUYEN (20s, hoodie, one earbud in) stares at nothing.
10 D KEN (to the room): Team! Good morning, team!
11 A ¶ No one answers.
12 A Ken reaches for the sign and smacks it against the whiteboard.
13 D KEN [CONT'D] (to himself): Ok. Quiet room.
14 D BEATRIX: We're two people, Ken.
15 D KEN: Two is a team.
16 D MANNY: Two is a couple.
17 D KEN: Manny!
18 D MANNY: Sorry.
19 D KEN: We have a very exciting update from corporate.
20 D BEATRIX: We're being acquired.
21 D BEATRIX: We're being closed.
22 D ^MANNY: We're being closed.
23 A ¶ Ken's smile locks into place.
24 A He lifts the sign.
25 D KEN: We are being realigned.
26 D BEATRIX: Into what?
27 D KEN: A hybrid model.
28 D MANNY: What's hybrid?
29 D KEN: Some of you will be here, and some of you will be... not.
30 D BEATRIX: Which some?
31 D KEN (to himself): Don't say it, Ken. Don't say it.
32 A ¶ He fumbles with the sign.
33 A Drops it.
34 A Bends to pick it up at the same moment that Beatrix leans down to help, and their foreheads collide.
35 A Manny rises to catch Ken's elbow and trips on the ficus.
36 A All three tumble to the carpet in a heap of sign, lanyard, and leaves.
37 A ¶ Silence.
38 A The printer groans.
39 D MANNY (from the floor): Does this count as team-building?
40 D KEN (also from the floor): It's a start.

### SCENE s02287 | INT. ELEVATOR HOISTWAY, OFFICE TOWER - NIGHT
Detected names (may be incomplete or contain aliases): ISAAC MBEKI, CELESTE ARNAUD, RADIO
1 A ¶ A concrete shaft lit by a single work lamp.
2 A Greasy cables hang in the dark.
3 A Far below, a pit.
4 A Far above, a rectangle of light.
5 A ¶ ISAAC MBEKI, thirties, an elevator mechanic, clings to a ladder bolted to the wall.
6 A He wears a headlamp and a harness that does not look new.
7 A A radio crackles at his hip.
8 A ¶ He glances up.
9 A A set of boots has appeared in the light above him.
10 A ¶ CELESTE ARNAUD, forties, in a good coat, stands on the landing with a pistol held low.
11 A She has the posture of a woman who has done this before.
12 A She does not speak.
13 A ¶ His breath catches.
14 A He takes a step down the ladder.
15 A She takes one down after him.
16 A The cable between them hums.
17 D RADIO [V.O.] (tinny): Isaac, you there? Control room. We've lost the car on four.
18 A ¶ He keeps his eyes on her and unclips the radio.
19 D ISAAC: Say again.
20 D RADIO [V.O.]: Car's stuck between four and five. Don't move the cab.
21 A ¶ She raises the pistol a few inches.
22 A He hears the safety click.
23 D ISAAC (into the radio, calm): Copy. Hold the car. I'm coming up.
24 D RADIO [V.O.]: Who are you talking to?
25 A ¶ He does not answer.
26 A He drops the radio.
27 A It falls forty feet, bouncing off the guide rails, then shatters on the pit floor.
28 A ¶ She fires.
29 A The round whines off a rail.
30 A He kicks away from the ladder, swings on the cable, and lets go.
31 A A moving counterweight rises out of the dark and he lands on it hard, flat, wind knocked from him.
32 A ¶ She leans over the edge, searching the black.
33 A The counterweight sinks.
34 A Her face shrinks in the rectangle of light.
35 A ¶ He lies there, shaking, laughing silently, and does not move for a very long time.

### SCENE s00900 | INT. COUNTING HOUSE - SECOND FLOOR - NIGHT
Detected names (may be incomplete or contain aliases): HENRIETTA PLUMB, CONSTABLE OAKES, GENTLEMAN, BLACKWOOD
1 A ¶ London, 1858.
2 A Gaslight, brown and thick.
3 A High desks lined with ledgers.
4 A A tall window veiled by fog.
5 A The smell of ink and coal.
6 A ¶ HENRIETTA PLUMB, 40s, a bookkeeper in grey wool, sits upright at a slanted desk, her pen scratching steadily.
7 A A pince-nez perches on her nose.
8 A Her spine is straight as a rule.
9 A ¶ CONSTABLE OAKES, 20s, bulky and young, stands at the door with a lantern, shifting from foot to foot.
10 A ¶ A GENTLEMAN, 50s, sits in the visitors' chair with his hat on his knee.
11 A Silk cravat, a watch-chain, hands that have never lifted anything heavy.
12 D OAKES: Evening, Mrs. Plumb.
13 D HENRIETTA: Constable.
14 D OAKES: This gentleman says he has an appointment.
15 D HENRIETTA: Does he.
16 D GENTLEMAN: I wrote.
17 D HENRIETTA: I received no letter.
18 D GENTLEMAN: I'm sure it was lost in the fog.
19 D HENRIETTA: Everything is.
20 A ¶ She sets down the pen.
21 A Squares the ledger.
22 A Looks at him for a long time over the pince-nez.
23 D HENRIETTA [CONT'D]: Your name, sir?
24 D GENTLEMAN: Blackwood. Asher Blackwood.
25 D HENRIETTA: And your business?
26 D BLACKWOOD: Your employer owes me a sum.
27 D HENRIETTA: Mr. Tarrant owes many people many sums.
28 D BLACKWOOD: Mine is larger.
29 D HENRIETTA: Then I would like to see your paperwork.
30 A ¶ Blackwood draws a folded paper from his coat and sets it on her desk.
31 A She unfolds it with two fingers, as if it were a dead moth.
32 A Her eyes travel down the page.
33 D OAKES: Is it genuine, ma'am?
34 D HENRIETTA: It is very well forged.
35 D BLACKWOOD: I beg your pardon.
36 D HENRIETTA: Mr. Tarrant never signs with a loop on the T.
37 A ¶ Blackwood's smile does not falter, but his hand drifts toward his coat.
38 A Oakes lifts the lantern.
39 A The light jumps across the ledgers.
40 D OAKES: Sir, I'd keep your hands where I can see them.
41 D BLACKWOOD: Naturally.
42 A ¶ He lifts both palms.
43 A Henrietta folds the paper in thirds and slides it into a drawer.
44 A She locks it.
45 D HENRIETTA: Constable, you may escort Mr. Blackwood to the door.
46 D OAKES: Yes, ma'am.
47 D BLACKWOOD: We'll meet again, Mrs. Plumb.
48 D HENRIETTA: I do hope not. I have the books to close.
49 A ¶ They go.
50 A The door shuts.
51 A She takes up her pen and writes the date at the top of a clean page, and the nib does not tremble once.

### SCENE s02065 | INT. PINNACLE DYNAMICS - CONFERENCE ROOM 12 - DAY
Detected names (may be incomplete or contain aliases): CHRISTABEL ODUYA-HARTMANN, VP, MARCELLUS ABIOLA-BRANDT, NADIA FAIRWEATHER-OSEI, EUSTACE KRUGER-ADEYEMI, PENELOPE OKAFOR-LINDQVIST, HR, BARTHOLOMEW KWAME-ASANTE
1 A ¶ A glass-walled room.
2 A A long table.
3 A A whiteboard crowded with arrows.
4 A A plate of untouched croissants.
5 A A speaker phone blinks.
6 A ¶ CHRISTABEL ODUYA-HARTMANN (40s, VP, black blazer) sits at the head.
7 A To her right, MARCELLUS ABIOLA-BRANDT (30s, sales, shiny tie).
8 A Across from him, NADIA FAIRWEATHER-OSEI (20s, product, laptop plastered with stickers).
9 A Further down, EUSTACE KRUGER-ADEYEMI (50s, finance, calculator).
10 A In the corner, PENELOPE OKAFOR-LINDQVIST (30s, HR, a binder).
11 D CHRISTABEL: Let's get started.
12 D MARCELLUS: I'd like to start with a win.
13 D CHRISTABEL: Please.
14 D MARCELLUS: We closed Halverson.
15 D NADIA: Halverson's a pilot.
16 D MARCELLUS: It's a win.
17 D EUSTACE: It's a pilot. With no budget.
18 D MARCELLUS: It has momentum.
19 D EUSTACE: Momentum does not pay invoices.
20 D PENELOPE (quietly): Can we please stay respectful?
21 D CHRISTABEL: We are being respectful.
22 D PENELOPE: Okay.
23 A ¶ She writes in her binder.
24 A Nadia leans over to read it, and Penelope covers the page.
25 D CHRISTABEL [CONT'D]: Nadia, the roadmap.
26 D NADIA: We're on track.
27 D EUSTACE: For what?
28 D NADIA: For Q3.
29 D EUSTACE: Q3 was last quarter.
30 D NADIA: Q3 next year.
31 D CHRISTABEL: We have the number?
32 D NADIA: We have a number.
33 A ¶ The conference room door swings open.
34 A A man in a rumpled suit leans in: BARTHOLOMEW KWAME-ASANTE (60s, CEO, a coffee stain on his tie, a stack of paper held like a loaf of bread).
35 D BARTHOLOMEW: Is this the strategy meeting?
36 D CHRISTABEL: It is, Bart.
37 D BARTHOLOMEW: Wonderful. Is there coffee?
38 D MARCELLUS: There are croissants.
39 D BARTHOLOMEW: Croissants are not coffee.
40 A ¶ He steps in.
41 A Sits at the foot of the table.
42 A Everyone sits taller.
43 D BARTHOLOMEW [CONT'D]: So. Go on. Who's winning?
44 A ¶ A silence.
45 A Eustace taps his calculator.
46 A Penelope clutches her binder.
47 A Nadia looks at the ceiling.
48 D CHRISTABEL: We're all winning, Bart.
49 D BARTHOLOMEW: Splendid. Splendid.
50 A ¶ He takes a croissant, bites it, chews.
51 A Everyone watches.
52 D BARTHOLOMEW [CONT'D] (through crumbs): Now. About the layoffs.

### SCENE s02197 | EXT. FLOATING MARKET ABOVE THE CLOUDS - DAWN
Detected names (may be incomplete or contain aliases): CALLISTA WREN, ROOK
1 A ¶ A cluster of rope-slung gondolas drifts on a sea of cloud.
2 A Lanterns bob.
3 A Between two of them, a plank bridge sways in the wind.
4 A The sun rises like a coin.
5 A ¶ CALLISTA WREN (40s, sky-pirate captain, sheepskin coat, one glove missing) stands braced at a railing with a spyglass.
6 A Behind her, ROOK (teen, deckhand, rope-burned palms) coils line.
7 D ROOK: Captain, the Duskmaw is two points off the port bow.
8 D CALLISTA: I see her, Rook.
9 D ROOK: She's turning.
10 D CALLISTA: They always turn at dawn. It's the only time the clouds agree.
11 A ¶ She lowers the glass.
12 A Rook comes to the rail.
13 A Together they watch a black-sailed ship unfurl like a bat through the mist.
14 D ROOK: We could run.
15 D CALLISTA: We could.
16 D ROOK: Will we?
17 D CALLISTA: Rook, have you ever known me to run?
18 D ROOK: Once.
19 D CALLISTA: That wasn't running. That was a tactical re-evaluation.
20 A ¶ Rook grins.
21 A Callista takes his shoulder and steers him toward the helm.
22 A The ropes sing in the wind.
23 D CALLISTA [CONT'D]: Hard to starboard. Let her come close. Then drop the ballast.
24 D ROOK: All of it?
25 D CALLISTA: All of it.
26 D ROOK: Captain, that's the cargo.
27 D CALLISTA: That's the idea.
28 A ¶ He swallows.
29 A Then runs for the lever, laughing, as the Duskmaw looms.

### SCENE s01904 | INT. DRAGON'S LIBRARY, MOUNTAIN KEEP - DUSK
Detected names (may be incomplete or contain aliases): QUEEN ISOLDE VANTERPOOL, THADDEUS WINNOWMERE, PRINCESS ASTRID VANTERPOOL, OLD MARROW
1 A ¶ Shelves climb into darkness.
2 A A fire the size of a cart burns in a hearth carved like a mouth.
3 A Scrolls curl like sleeping snakes.
4 A ¶ QUEEN ISOLDE VANTERPOOL (50s, gray-braided, scholar's robe) sits at a reading desk.
5 A Beside her, her scribe THADDEUS WINNOWMERE (30s, ink-stained fingers, glasses on a cord) copies lines from a vellum sheet.
6 A Her daughter, PRINCESS ASTRID VANTERPOOL (20, sword at her hip, boots caked in mud), strides in from the stairs, and behind her limps OLD MARROW (70s, one-eyed, a bundle of dried herbs), the keep's gardener.
7 D ASTRID: Mother. I've come from the northern gate.
8 D ISOLDE: So I see.
9 A ¶ She does not look up.
10 A Astrid lays a muddy glove on the desk.
11 A Thaddeus shifts his ink pot an inch to the left.
12 D ASTRID: They say the dragon has not slept in nine years.
13 D ISOLDE: Nine years, four months, and three days.
14 D ASTRID: You've been counting.
15 D ISOLDE: Somebody must.
16 A ¶ Marrow sets the herbs on the hearthstone and stirs them with a finger.
17 A The fire hisses.
18 A Astrid's jaw works.
19 D ASTRID: I thought you were going to speak with him today.
20 D ISOLDE: I did.
21 D ASTRID: And?
22 D ISOLDE: He asked me to read to him.
23 D ASTRID: Read what?
24 D ISOLDE: The ledgers.
25 A ¶ Astrid blinks.
26 A Thaddeus coughs behind his hand.
27 A Marrow, at the fire, begins to hum.
28 D ASTRID: Mother, he has burned villages.
29 D ISOLDE: He has also asked after your sister every day for nine years.
30 D ASTRID: I don't have a sister.
31 D ISOLDE (finally looking up): No. You don't.
32 A ¶ The hum stops.
33 A Marrow turns his one good eye on Isolde, then on Astrid, then, slowly, toward the fire.
34 A Thaddeus lays down his pen.
35 A The flames shrink a shade, as though listening.
36 D ASTRID: What does that mean?
37 D ISOLDE: It means sit down, child. And bring the ledger. It's a long story, and the dragon says you ought to hear it from me.

### SCENE s00077 | INT. SILVER STAR ROLLER RINK - AFTER CLOSING
Detected names (may be incomplete or contain aliases): NELL ABERNATHY, SOLEDAD IBARRA, HASHIMOTO
1 A ¶ The rink is a long amber oval of varnished maple, scuffed grey where a thousand wheels have turned.
2 A Disco light dribbles over the empty benches.
3 A The carpeted walls smell of popcorn and old rubber.
4 A A single overhead fan ticks.
5 A ¶ NELL ABERNATHY (16, long-limbed, a cast on one wrist) sits on the bench lacing a skate with her good hand.
6 A SOLEDAD IBARRA (16, braids tied up, a jersey two sizes big) circles the floor in slow, practiced loops, trailing one hand along the rail.
7 A At the snack counter, MR. HASHIMOTO (70s, cardigan, reading glasses on his forehead) counts the till, never looking up.
8 A ¶ She crosses the rink and stops in front of the bench.
9 A She looks down at her.
10 A She doesn't smile.
11 D SOLEDAD: You said you'd tell me.
12 D NELL: I know.
13 D SOLEDAD: That was Tuesday.
14 D NELL: It's complicated.
15 A ¶ She pushes off again, harder this time, a loop, then another.
16 A Nell watches her go.
17 A The fan ticks.
18 A At the counter, Mr. Hashimoto slides a stack of bills into a bag and does not look up.
19 D MR. HASHIMOTO (to the till): Eleven dollars short.
20 D SOLEDAD (skating, not stopping): It's Nell's thing, it's always Nell's thing.
21 D NELL: My thing?
22 D SOLEDAD: You and your cast and your secret.
23 A ¶ She skates past the bench, close enough that the wind of it lifts the hair on Nell's neck.
24 A Nell stands.
25 A Her laces hang loose.
26 D NELL: You don't know what happened.
27 D SOLEDAD: Then tell me.
28 D NELL: I'm leaving.
29 A ¶ The word hangs in the air.
30 A Soledad stops.
31 A The skates scrape, and the sound seems very loud.
32 A Across the rink, the till slams shut.
33 D MR. HASHIMOTO: Girls. Lights in five.
34 A ¶ Soledad pulls off a skate and throws it.
35 A It skids across the maple and clatters against the wall.
36 A Nell flinches, then crosses the floor in her socks, stoops, and picks the skate up.
37 A She holds it out.
38 A Soledad does not take it.

### SCENE s02401 | INT. CAMPER VAN - DRIVE-IN LOT - NIGHT
Detected names (may be incomplete or contain aliases): JOJO, MARISOL, DEV, ANSEL, MOTHER
1 A ¶ Cramped.
2 A Cassette deck.
3 A A bulb on a cord.
4 A Through the open back doors, a giant screen flickers silently in the dark.
5 A ¶ JOJO, seventeen, drives a fork through a can of beans.
6 A MARISOL, her sister, sixteen, paints her toenails.
7 A DEV, Jojo's boyfriend, strums a ukulele.
8 A ANSEL, twelve, the kid brother, lies on the floor under a sleeping bag.
9 D JOJO: Four more minutes, then we leave.
10 D MARISOL: You said that at nine.
11 D JOJO: I said it at nine-thirty.
12 D MARISOL: Whatever.
13 D DEV: Play it again, Ans?
14 D ANSEL: No.
15 D DEV: Please?
16 D ANSEL (muffled): It's my song.
17 A ¶ The ukulele stops.
18 A Everyone is quiet.
19 A Jojo sets down the fork.
20 A The screen goes dark.
21 A A phone buzzes on the dash.
22 D JOJO: Don't pick that up.
23 D MARISOL: I'm not.
24 A ¶ It buzzes again.
25 A Marisol picks it up.
26 A Sighs.
27 A Puts it on speaker.
28 D MOTHER [V.O.] (over phone): Girls? Where are you?
29 D JOJO: At the movie, Mom.
30 D MOTHER [V.O.]: Which movie?
31 D MARISOL (quickly): The one with the dog.
32 D MOTHER [V.O.]: The one with the dog died in the last one.
33 D MARISOL: It's a sequel.
34 D MOTHER [V.O.]: Is Ansel with you?
35 A ¶ Silence.
36 A Jojo looks at the floor.
37 A Marisol looks at the screen.
38 A Dev puts his hand over the ukulele strings.
39 A From under the sleeping bag comes the smallest voice in the van.
40 D ANSEL: Hi, Mom.
41 D MOTHER [V.O.]: Ansel Mbeki-Dunmore. Home. Now.
42 A ¶ Click.
43 A Dial tone.
44 A The four of them sit in the bulb's weak light, and then, all at once, Jojo starts to laugh, and so does Marisol, and so does Dev, helplessly, and even Ansel's shoulders begin to shake under the nylon.

### SCENE s00119 | INT. BAKERY DELIVERY TRUCK - CARGO AREA - PRE-DAWN
Detected names (may be incomplete or contain aliases): MARI, BENNETT-OKORO, HECTOR DELACROIX-ASANTE, PRIYA RAMASWAMY-LINDQVIST, THE STRANGER, JULIAN
1 A ¶ Steel racks of bread trays.
2 A Flour hangs in the air.
3 A A single dome light.
4 A The truck rocks gently over a country road.
5 A ¶ Three crew members and a stranger sit among the loaves.
6 A ¶ MARISOL "MARI" BENNETT-OKORO (30s, flour-dusted overalls, driver's cap) kneels in the aisle with a wrench.
7 A HECTOR DELACROIX-ASANTE (40s, forearms like hams, a neat moustache) sorts baguettes into bags.
8 A PRIYA RAMASWAMY-LINDQVIST (20s, hairnet, earbuds) counts a stack of invoices.
9 A And in the corner, wedged between two racks with a bakery apron over his suit, sits THE STRANGER (50s, polished shoes, a briefcase handcuffed to his wrist).
10 D MARI: Radio check.
11 D PRIYA (into collar): One.
12 D HECTOR: Two.
13 D MARI: Three. Stranger?
14 D THE STRANGER: I'm not on the radio.
15 D MARI: You're on now.
16 D THE STRANGER: I'm a delivery.
17 D HECTOR: Pastry delivery.
18 D THE STRANGER (wearily): Very funny.
19 A ¶ He tugs at the handcuff.
20 A It doesn't give.
21 A Priya pulls out an earbud.
22 D PRIYA: How long do we hold him?
23 D MARI: Until the bank opens.
24 D PRIYA: That's four hours.
25 D MARI: So we'll have fresh bread.
26 A ¶ Hector chuckles.
27 A The truck turns onto gravel.
28 A Loaves shift.
29 A The stranger lowers his head.
30 D THE STRANGER: You know I can pay.
31 D HECTOR: Everybody can pay.
32 D THE STRANGER: Double what they're giving you.
33 D MARI: That's what they all say.
34 D PRIYA (low, to Mari): Is it a lot?
35 D MARI (low): Not enough.
36 A ¶ Hector pushes aside a tray to reach the stranger's briefcase.
37 A The man jerks it away.
38 A Hector slaps the man's wrist, once, and the case springs open.
39 A Inside, a silver dossier.
40 A Hector flips it open.
41 D HECTOR: Mari.
42 D MARI: What.
43 D HECTOR: His name is Julian Ashworth-Mbeki.
44 A ¶ Marisol freezes.
45 A Priya drops her invoices.
46 A The stranger lifts his chin.
47 A His face, in the dome light, is perfectly composed.
48 D JULIAN: That is my name.
49 D MARI (softly): You're the auditor.
50 D JULIAN: I am.
51 D MARI: Hector, we grabbed the wrong man.
52 D HECTOR: We grabbed the right man.
53 D PRIYA: He's the auditor!
54 D HECTOR: The auditor with the files.
55 A ¶ They look at each other.
56 A Julian smiles.
57 A The truck bounces over a pothole and a tray of croissants slides off its rack and scatters across the floor.
58 D JULIAN: Well. Shall we eat?

### SCENE s02399 | INT. GRANDMOTHER'S SEWING ROOM - AFTERNOON
Detected names (may be incomplete or contain aliases): GRANDMA WINNIFRED, JASPER, LOTTE
1 A ¶ A small sunlit room of buttons, bobbins and bolts of cloth, with a treadle sewing machine under the window.
2 A A cat sleeps in a basket of scraps.
3 A Dust floats in the light.
4 A ¶ GRANDMA WINNIFRED, seventies, in a lilac cardigan, sits at the machine feeding a seam under the needle, while her grandson JASPER, ten, sprawls on the rug sorting buttons by colour and sorting them again by size, and his sister LOTTE, thirteen, perches on the windowsill, picking at a loose thread on her sleeve and watching a bird on the wire outside, and nobody says a word for a long, pleasant minute.
5 D WINNIFRED: Jasper, hand me the blue.
6 D JASPER: Which blue?
7 D WINNIFRED: The blue that looks like the sea in July.
8 A ¶ He holds up a spool.
9 A She squints.
10 A Nods.
11 A He crawls across the floor to deliver it.
12 D LOTTE: Gran, can I borrow the green scissors?
13 D WINNIFRED: They're in the drawer.
14 D LOTTE: Which drawer?
15 D WINNIFRED: The one that squeaks.
16 A ¶ Lotte slides off the sill and finds it.
17 A Takes the scissors.
18 A Cuts the thread on her sleeve.
19 A Sits back down.
20 D JASPER: Gran, how long have you had this machine?
21 D WINNIFRED: Since before your mother was born.
22 D JASPER: That's old.
23 D WINNIFRED: So am I.
24 A ¶ Nobody laughs.
25 A Winnifred smiles.
26 A The needle thuds.
27 A The cat stretches in its basket and resettles, and outside the bird takes off from the wire.

### SCENE s01481 | INT. FIELD POST OFFICE - A REQUISITIONED SCHOOLROOM - DAY
Detected names (may be incomplete or contain aliases): PRIVATE ELIAS WEATHERBY-NDLOVU
1 A ¶ A schoolroom stripped for the war.
2 A Desks pushed to the walls and stacked with canvas mail sacks.
3 A A blackboard still carries a half-erased multiplication table.
4 A Dust slants through high windows.
5 A Somewhere beyond the walls, distant guns thump at the slow pace of a heart at rest.
6 A ¶ PRIVATE ELIAS WEATHERBY-NDLOVU (40s, spectacles mended with wire, gray at the temples) sits at the teacher's desk with a pile of letters.
7 A He sorts them into pigeonholes made from egg crates.
8 A His hands are careful.
9 A He does not hurry.
10 A ¶ He picks up a letter.
11 A Reads the name.
12 A Pauses.
13 A Puts it face-down at the edge of the desk.
14 A ¶ He picks up the next.
15 A Sorts it.
16 A The next.
17 A Sorts it.
18 A Then he returns to the face-down letter.
19 A Turns it over.
20 A Turns it back.
21 A ¶ Elias does not read it aloud.
22 A Someone else's handwriting does, in his head.
23 D ELIAS [V.O.] (reading, flat): "...and the pear tree has finally put out fruit. Tell Papa. Tell him I kept my word."
24 A ¶ He sets the letter down.
25 A Squares its edge against the desk.
26 A ¶ He takes a pencil from behind his ear.
27 A Flips the face-down letter once more.
28 A On the back, in neat capitals, he writes a single word: RETURNED.
29 A Then, after a moment, he erases it.
30 A ¶ He gets up.
31 A Walks to the blackboard.
32 A Takes a rag.
33 A Wipes the multiplication table away, row by row, until only the nines remain.
34 A He stands there a moment, looking at them.
35 A ¶ He sits again.
36 A Takes the letter.
37 A Places it, gently, in the highest pigeonhole, the one nobody can reach without a chair.
38 A ¶ Elias looks at the highest pigeonhole.
39 A Then at the egg crates.
40 A Then at the door.
41 D ELIAS (to the empty room): Not today.

### SCENE s01572 | INT. LAUNDROMAT - SUNDAY AFTERNOON
Detected names (may be incomplete or contain aliases): PRIYA NAIR, DEV, STRANGER, KOFI, ABERNATHY
1 A ¶ Yellow light.
2 A Eight dryers turning.
3 A A wall of mismatched plastic chairs, a cracked vending machine selling tiny detergent boxes.
4 A ¶ PRIYA NAIR (40s, scrubs, hair in a clip) folds towels with military precision.
5 A Her son DEV (9, oversized hoodie) sits on a dryer, swinging his legs.
6 A ¶ Beside him, a boy of fifteen slouches over a phone.
7 A He is a STRANGER to Priya.
8 A Headphones, buzz cut, one untied shoe.
9 D DEV: Mom, he says he's my cousin.
10 D PRIYA: You don't have a cousin here.
11 D STRANGER: I'm Kofi. Aunt Lena's kid. From Accra.
12 A ¶ Priya stops folding.
13 D PRIYA: Lena's boy? You were this tall.
14 D KOFI: Yeah. I grew.
15 A ¶ Dev kicks the dryer door gently.
16 A A sock thumps inside.
17 A ¶ An elderly woman, MRS. ABERNATHY (80s, cardigan, a cart of laundry), wheels past and nods at all three.
18 D MRS. ABERNATHY: Lovely family.
19 D PRIYA (smiling, tired): Thank you.
20 A ¶ Kofi pulls off his headphones.
21 D KOFI: Mom's going to call you tonight. She wants me to stay a week.
22 D PRIYA: We'll make room.
23 A ¶ Dev grins.
24 A The dryers keep turning.
