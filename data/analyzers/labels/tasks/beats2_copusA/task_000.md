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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_copusA/group_28000.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s05087 | INT. THE BRANDT HOUSE - KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): COLLEEN, WALTER
1 A ¶ The power cut hit forty minutes ago.
2 A A single candle gutters on the granite island.
3 A Rain runs down the dark windows.
4 A Somewhere in the neighbourhood, a generator coughs and gives up.
5 A ¶ Colleen Brandt, 50s, still in her work lanyard, stands at the counter with a bottle of wine she can't open without light.
6 A Her husband's boss's wife has not yet arrived.
7 A Her son's Xbox sits uselessly on the table.
8 A ¶ Walter Pryce, 40s, in a damp suit, comes in from the garage with a flashlight.
9 D COLLEEN: You're late.
10 D WALTER: There's a tree down on Maple. I walked.
11 D COLLEEN (a beat): In those shoes.
12 D WALTER: In these shoes.
13 A ¶ He sets the flashlight on its end.
14 A It throws a pale circle at the ceiling.
15 A The refrigerator hums for a moment, then dies with a sigh.
16 A ¶ Rain.
17 D COLLEEN: I want to say something and I want you to let me finish.
18 D WALTER (beat): Okay.
19 D COLLEEN: Twenty-two years at Halvorsen. I trained every one of those people upstairs. I wrote the manual they pretend to follow. Last Thursday they put me in a room and a boy named Tyler, who is twenty-nine, told me my role was "being reimagined." He used the word "journey." He said I had been on a journey.
20 D WALTER: Colleen...
21 D COLLEEN (beat): I'm not finished. I smiled. I thanked him. I went to my desk and I alphabetised the supply cupboard because I did not know what else to do with my hands. And then I came home and made a lasagna that nobody ate, because the power went, and that's the whole of it.
22 A ¶ The candle gutters.
23 A She finally puts the wine down.
24 A ¶ This is the last evening either of them will pretend the house is fine.
25 D WALTER (quietly): I got the same email.
26 A ¶ Colleen turns.
27 A For the first time, she looks at him.

### SCENE s05014 | INT. LUMEN NAIL BAR - AFTERNOON
Detected names (may be incomplete or contain aliases): NORA, THE WOMAN, VIVIAN, THE TWINS, DEV, ILSA
1 A ¶ The salon smells of acetone and jasmine, and under that of something else, something nobody in the room has named yet; the dryers hum in a steady chord, the television above the pedicure chairs plays a cooking show on mute, and at the third station a woman in a grey hoodie sits with both hands flat on the table as though she were waiting for them to be read.
2 D NORA (filing, not looking up): Any plans for the weekend, hon?
3 D THE WOMAN (voice flat, eyes on the window): Not really. Maybe visit my sister. She lives out past the reservoir.
4 D NORA (brightly): Oh that's nice. Family is everything.
5 D THE WOMAN (beat): Is it.
6 A ¶ Nora glances up.
7 A Behind the counter, VIVIAN rings up a customer, tucking a stray lock behind her ear, and at the far chair THE TWINS, identical in matching pink smocks, murmur to each other in a rhythm too even to be conversation.
8 D THE TWINS (together, softly): Do you smell it? Do you smell it?
9 D VIVIAN (not turning, counting change): Girls, enough with the perfume jokes.
10 D THE TWINS (together): Not perfume.
11 D NORA (forcing a laugh): They get like this when it rains. Ignore them.
12 D THE WOMAN (finally looking at Nora): It's not raining.
13 A ¶ A silence.
14 A The cooking show on the television flickers, goes to static, comes back.
15 A In the corner, DEV the new tech, who has been sweeping the same square of floor for ten minutes, stops.
16 D DEV (low, to Vivian): The wifi's dropped again. And the card reader. Everything just--
17 D VIVIAN (sharply, not turning): Dev. Floor.
18 D DEV (obeying, quieter): Sorry. Sorry.
19 D NORA (trying again, painting a clear coat): So, what do you do, hon? For work?
20 D THE WOMAN (a thin smile): I count things. How many people, how many exits. How long the lights stay on.
21 D NORA (her brush stilling): That's a strange job.
22 D THE WOMAN (beat): It's a strange week.
23 A ¶ The Twins stop murmuring.
24 A Both rise from their chairs at the same instant, smocks rustling, and the room tilts toward them.
25 D THE TWINS (together, calm): She is early.
26 D VIVIAN (finally turning, color draining): Who is early?
27 D THE TWINS (together, pointing at the hoodie): Her. She was not supposed to come until Thursday.
28 D NORA (whispering, to the woman): Hon, what are they talking about?
29 D THE WOMAN (pushing back her hood to reveal pale, almost translucent skin): My name is Ilsa. And I am so sorry. I wanted one last manicure before the end.
30 D DEV (dropping the broom): The end of what?
31 D ILSA (rising, her hands beginning to glow faintly under the dryer lamps): Of this. All of it. They said you'd want to know.
32 D VIVIAN (very quiet): Nobody here asked.
33 D ILSA (gently): Nobody ever does.
34 A ¶ The television goes black.
35 A Every dryer in the salon stops at once, and in the sudden quiet a single drop of polish falls from Nora's brush and rings against the tabletop like a bell.

### SCENE s05148_1 | INT. NEW BEGINNINGS FERTILITY CLINIC - HALLWAY - CONTINUOUS
Detected names (may be incomplete or contain aliases): DEV, KAREN, MAYA
1 A ¶ The generator HUMS louder here.
2 A A row of steel tanks, each frosted with cold.
3 A The woman is already at the biggest one, pulling at its door.
4 D DEV: Hey. Hey! You can't touch that.
5 D THE WOMAN: The backup power's failing. Somebody has to move them.
6 D DEV: Who are you?
7 D THE WOMAN: Karen Ellis. Lab tech. Eleven years.
8 D DEV (quieter): Karen. My wife's in there right now.
9 D KAREN: Then you'd better help me lift.
10 A ¶ He looks at the tank.
11 A At her.
12 A At the dark ceiling.
13 A ¶ Dev takes off his jacket and grabs the other handle.
14 A ¶ Behind them, the swinging door opens.
15 A Maya stands there, pale, with the nurse behind her.
16 D MAYA (very still): Dev. What are you doing?
17 D DEV: Saving the thing we came here for.
18 A ¶ This is the first time all week that anyone in this building has told the truth.

### SCENE s05017 | INT. COUNTY PAROLE OFFICE - WAITING AREA - DAY
Detected names (may be incomplete or contain aliases): ROWAN, MARCUS, HALE, OFFICER VANCE
1 A ¶ Rain taps the high windows.
2 A A fluorescent tube flickers over a row of orange plastic chairs.
3 A The radiator ticks.
4 A Somewhere a vending machine hums to itself.
5 A ¶ Marcus Doyle, 30s, sits with his hands between his knees, a manila folder resting in his lap.
6 A Across from him, Rowan Pierce, 20s, slouches in a chair, scrolling a cracked phone.
7 A Rowan uses they/them pronouns and wears a battered denim jacket.
8 D ROWAN (not looking up): You're early.
9 D MARCUS: Habit. They count it against you if you're late.
10 D ROWAN: Everybody counts everything against you.
11 A ¶ The fluorescent tube buzzes, dims, steadies.
12 A Wind pushes at the glass.
13 A ¶ ANGLE ON the reception desk.
14 A MRS. HALE, 60s, sits behind a wall of plexiglass, glasses low on her nose, stamping a stack of forms.
15 D MRS. HALE: Doyle. Marcus. You're up in five. Pierce, you're after.
16 D MARCUS: Thank you, ma'am.
17 D ROWAN (muttering): Ma'am. Jesus.
18 A ¶ The intercom on the wall CRACKLES.
19 A A man's voice, thin and wrong.
20 D OFFICER VANCE [V.O.]: Hale, send Doyle back now. Skip the line.
21 D MRS. HALE (leaning to the intercom): Officer Vance, he's not on until--
22 D OFFICER VANCE [V.O.]: Now.
23 A ¶ Mrs. Hale hesitates.
24 A The tube overhead goes out entirely.
25 A The room is grey and green with rain-light.
26 D MARCUS (rising slowly): That's not his voice.
27 D ROWAN (finally looking up): What do you mean it's not his voice?
28 D MARCUS: Vance has a limp in his voice. I mean he whistles on his s's. That was somebody doing him.
29 A ¶ CLOSE ON the intercom's red light.
30 A It blinks.
31 A Once.
32 A Twice.
33 D OFFICER VANCE [V.O.]: Doyle. Don't make me ask again.
34 D ROWAN (standing, voice low): Don't go.
35 D MARCUS: I have to. If I don't show, it's a violation.
36 D ROWAN: It's a trap.
37 D MARCUS: It's always a trap.
38 A ¶ WE SEE the hallway door behind Mrs. Hale.
39 A It is open an inch.
40 A Beyond it, only darkness.
41 D MRS. HALE (very quietly, not looking at either of them): Don't go in there, honey.
42 A ¶ INSERT - the desk calendar.
43 A Today's date is circled in red.
44 A Under it, in handwriting: "THEY COME BACK."
45 D MARCUS (reading it): Who wrote that?
46 D MRS. HALE (a thin, brittle smile): I did. Thirty years ago.
47 A ¶ The radiator stops ticking.
48 A The rain stops.
49 A Even the vending machine goes silent.
50 D ROWAN (whispering): Marcus. Look at the window.
51 A ¶ BACK TO SCENE.
52 A ¶ Reflected in the dark glass: the three of them, and a fourth shape standing in the open hallway door behind them, tall and still.
53 D OFFICER VANCE [V.O.] (from the intercom, from the hallway, from everywhere): Doyle. Pierce. Hale. Come in. Come in. Come in.

### SCENE s05109 | INT. FOOD TRUCK - "BIG DAVE'S BAPS" - MORNING
Detected names (may be incomplete or contain aliases): MO, RECORDED VOICE
1 A ¶ A grey Tuesday, drizzle on the awning.
2 A The griddle ticks as it warms.
3 A Condensation on every surface.
4 A Somewhere outside, a gull has opinions.
5 A ¶ MO, 40s, in a stained apron and a flat cap, cracks eggs one-handed, humming something tuneless.
6 A The queue outside, five or six commuters under umbrellas, shuffles forward.
7 A ¶ His mobile buzzes on the counter.
8 A He wipes his hand on his apron and answers on speaker.
9 D MO: Morning. Bap's Place. Go on.
10 D RECORDED VOICE [V.O.]: This is an automated message from Harbour Borough Council Environmental Health. Your inspection for today has been brought forward. An officer will arrive at your location in approximately two minutes.
11 A ¶ Mo stares at the phone.
12 A A pause.
13 A The kettle, left to its own devices, begins to whistle.
14 D MO: Right. Lovely. Marvellous.
15 A ¶ He turns the griddle off, then on, then off again.
16 A He sweeps a tray of something suspiciously orange into the bin and hides the bin behind the fridge.
17 A Through the hatch, a man in a hi-vis jacket with a clipboard is crossing the car park, and the queue sees him too.
18 A ¶ The queue scatters.
19 A Mo and the kettle both freeze.
20 A Rain.
21 A A single gull lands on the awning.
22 D MO [CONT'D] (quietly, to himself): Not ideal.

### SCENE s05118_1 | INT. DR. OKAFOR'S OFFICE - CONTINUOUS
Detected names (may be incomplete or contain aliases): SASHA, AIDEN, MARLON, DR. OKAFOR
1 A ¶ CLOSE ON the safe.
2 A A small grey box behind a framed diploma.
3 A ¶ Sasha works the dial with a stethoscope pressed against the metal.
4 A Aiden holds the flashlight steady.
5 A Marlon stands in the door and watches the hall.
6 D SASHA (whispering): Twelve. Twenty-six. Three.
7 A ¶ CLICK.
8 A ¶ The safe swings open.
9 A Inside, on a velvet cushion, sits a small box.
10 A ¶ INSERT - THE BOX.
11 A Sasha opens it.
12 A Inside is a plain gold ring and a folded note.
13 A ¶ Aiden unfolds the note and reads.
14 D AIDEN (quietly): "If you are reading this, you found out I never told her I was sorry."
15 A ¶ Silence.
16 A Sasha takes the note, reads it, and passes it to Marlon.
17 D MARLON: I don't think we should take it.
18 D AIDEN: Neither do I.
19 D SASHA: Put it back.
20 A ¶ Aiden closes the box.
21 A Places it in the safe.
22 A Spins the dial.
23 A They tiptoe out of the office as the front door CREAKS and a flashlight beam sweeps across the waiting room.
24 D DR. OKAFOR [O.S.]: Hello?
25 A ¶ BACK TO SCENE
26 A ¶ The three of them freeze in the hallway.
27 A Aiden puts a finger to his lips.
28 A The beagle barks once.
29 A ¶ DR. OKAFOR, 60s, in a raincoat, steps into the beam.
30 A He sees them.
31 D DR. OKAFOR: You found it.
32 D AIDEN: We put it back.
33 D DR. OKAFOR (after a long moment): Good. Come in and have some tea.

### SCENE s05094 | EXT. SKYLINE ROOFTOP BAR - NIGHT
Detected names (may be incomplete or contain aliases): ALANA, COLM
1 A ¶ Detective Sergeant Alana Reyes sits at a corner table with a club soda.
2 A Across from her, Assistant District Attorney Colm Brennan, in a loosened tie, nurses a bourbon.
3 A Neither has touched the appetizers.
4 A String lights sway.
5 A The city hums far below.
6 D ALANA (sliding a folder across): Chain of custody on the Delacroix evidence. Tell me what's wrong with it.
7 D COLM (not opening it): Nothing's wrong with it. It's thin, Alana. Thin is not wrong.
8 D ALANA (quietly): Thin is how it gets tossed at the suppression hearing.
9 D COLM (finally flips a page): Locker 14 was logged out at 2210 and the bag was sealed at 2305. That's fifty-five minutes where a lawyer drives a truck through.
10 D ALANA (she doesn't flinch): Officer Pak was on scene the whole time. She'll testify.
11 D COLM (shaking his head): She'll testify she was on scene. She won't testify nobody touched it.
12 A ¶ A long beat.
13 A A waiter passes.
14 A Neither speaks until he is gone.
15 A Alana picks at the label on her bottle.
16 D ALANA (low, level): I need you to file anyway. Monday. Before the defense gets wind of the gap.
17 D COLM (setting down the glass): You're asking me to walk into a courtroom knowing I might lose the whole case on a paperwork error.
18 D ALANA (meeting his eyes): I'm asking you to walk in knowing the man did it.
19 D COLM (after a pause, soft): That's not the standard. You know that's not the standard.
20 D ALANA (she stands, buttons her jacket): Then give me the standard. Tell me what I need, and I'll go get it.
21 D COLM (he looks at the folder, at the city, at her): Get me Pak's written statement. Notarized. By Friday.
22 D ALANA (a small nod): Friday.
23 A ¶ She leaves the folder.
24 A He pulls it back toward himself and finally, finally starts to read.

### SCENE s05150_0 | INT. STORAGE FACILITY - OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): WOMAN, PHONE
1 A ¶ SERIES OF SHOTS:
2 A ¶ -- Rain on the corrugated roof.
3 A Orange sodium light bleeding through the blinds.
4 A ¶ -- A keypad gate.
5 A Its red light blinks, blinks, blinks.
6 A ¶ -- THE WOMAN, 30s, soaked coat, a bolt cutter bag over her shoulder, walks the long corridor of roll-up doors.
7 A Her boots squeak on the concrete.
8 A ¶ ON PHONE (TEXT FROM NELL): where r u
9 A ¶ ON PHONE (TEXT FROM NELL): mum's flat is empty u said you'd be done by 9
10 A ¶ -- The woman thumbs the screen dark.
11 A Doesnt reply.
12 A ¶ -- Fluorescent tubes flicker overhead.
13 A One dies.
14 A Another takes over.

### SCENE s05129 | INT. GOLDEN LOTUS NAIL SALON - DAY
Detected names (may be incomplete or contain aliases): CUSTOMERS, KID, MARISOL, CORINNE
1 A ¶ SUPER: "CHICAGO.
2 A 2:14 PM."
3 A ¶ Pastel walls.
4 A Acetone in the air.
5 A A wall of polish bottles in every colour.
6 A A TV in the corner plays a muted boxing replay.
7 A ¶ Two CUSTOMERS in the next chairs chat in Vietnamese.
8 A A KID in a school uniform does homework by the register.
9 A ¶ THE WOMAN, 40s, sunglasses, tailored coat, sits at the manicure station.
10 A Her phone lies face down.
11 A Across the table, MARISOL, 30s, white smock, files her nails.
12 A ¶ The file SCRAPES.
13 A A drier HUMS.
14 D THE WOMAN: You do a lovely job.
15 D MARISOL (not looking up): Thank you.
16 D THE WOMAN: I mean it. Steady hands.
17 D MARISOL (smiling): Practice.
18 A ¶ She dips a brush.
19 A Paints a stripe of red.
20 A ¶ INSERT - THE BOTTLE
21 A ¶ Label: "Knockout."
22 A ¶ BACK TO SCENE
23 D THE WOMAN: Funny name.
24 D MARISOL: It sells.
25 A ¶ The Woman glances at the TV.
26 A The replay shows a boxer going down in the ninth.
27 D THE WOMAN: You watch the fights?
28 D MARISOL: My father did.
29 D THE WOMAN (carefully): Did?
30 D MARISOL: Every Saturday. He had a favourite. Danny Kessler.
31 A ¶ The Woman goes still.
32 D THE WOMAN: Kessler retired.
33 D MARISOL: He was told to.
34 A ¶ The brush keeps moving.
35 A Steady.
36 A Steady.
37 D THE WOMAN: I'm not sure what you mean.
38 D MARISOL (mild): My father bet the house on Danny. Round nine. Everybody knew it was fixed except him. He found out when the referee stopped it too early. A small man, tan suit, glasses. He looked at the floor so nobody could see his eyes.
39 A ¶ (beat)
40 A ¶ I was twelve.
41 A I remember my father holding the TV remote like it was a gun.
42 A I remember him saying one word, over and over.
43 A "Why."
44 A And then he stopped saying it.
45 A ¶ The drier HUMS.
46 A The Kid turns a page.
47 D MARISOL [CONT'D]: Years later I found the referee. Gambling debts. He'd been told to stop the fight, or lose his daughter's school fees. The man in the tan suit was a coward. But the man who told him? He was the coward's boss.
48 A ¶ (beat)
49 A ¶ That boss has a very good manicurist.
50 A She says he comes every second Tuesday.
51 D THE WOMAN (very still): Does she.
52 D MARISOL: She does.
53 A ¶ The Woman's hand, flat on the table, does not move.
54 A ¶ A DOOR BELL RINGS.
55 A Two men in dark jackets enter.
56 A They look around, then settle near the entrance.
57 A ¶ The Woman watches them in the mirror.
58 D THE WOMAN: You're quite sure of this.
59 D MARISOL: I have his receipts. Every one.
60 D THE WOMAN: You're not a manicurist.
61 D MARISOL: I'm a very good manicurist.
62 A ¶ She caps the bottle.
63 A CLICK.
64 D MARISOL [CONT'D]: My name is Marisol Kessler.
65 A ¶ The Woman takes off her sunglasses.
66 A Her eyes are old and tired.
67 D THE WOMAN: Danny's daughter.
68 D MARISOL: Yes.
69 D THE WOMAN: Then you know my name.
70 D MARISOL: Corinne Vale.
71 D CORINNE (a breath): He deserved a better life than he got.
72 D MARISOL: So did my father.
73 A ¶ Corinne looks at the red nails, her hands under the lamp.
74 D CORINNE: The men at the door. They're not mine.
75 D MARISOL: No.
76 D CORINNE: Yours?
77 A ¶ Marisol nods slightly.
78 D CORINNE [CONT'D] (a faint laugh): I came here for a manicure.
79 D MARISOL: And you got one.
80 A ¶ The TV roars.
81 A A crowd chanting a name that isn't Danny's.
82 A ¶ Corinne's phone BUZZES on the table.
83 A She doesn't touch it.
84 A ¶ It stops.
85 A ¶ The Kid looks up from his homework.

### SCENE s05177 | INT. MERCY GENERAL - NIGHT SHIFT NURSES' STATION - NIGHT
Detected names (may be incomplete or contain aliases): KOFI, TARA, PIP, NAKAMURA, THE WOMAN, SCREEN
1 A ¶ Open-plan.
2 A Too many monitors.
3 A A drooping fern and a laminated sign: PLEASE DON'T MICROWAVE FISH.
4 A ¶ KOFI (30s, scrubs, headset) taps at a laptop with a video call open.
5 A TARA (20s, lanyard bursting with pins) wheels over on a stool and PIP (intern, 22) hovers behind her with a clipboard held like a shield, while a janitor mops slowly in the background and a drip pole in the corner, for no reason, slowly rotates by itself.
6 A ¶ On Kofi's screen: a Slack channel, #night-shift-chaos.
7 A ¶ ON SCREEN: ORRIN: has anyone seen the thing in room 6
8 A ¶ ON SCREEN: ORRIN: the glowing thing
9 D KOFI: Orrin's on his break and he's already losing it.
10 D TARA: Orrin's always losing it. Last week he said the fridge was talking.
11 D KOFI: The fridge was talking. That was the fridge's night-shift voice.
12 A ¶ On the laptop, DR. NAKAMURA's face fills a Zoom window, pixelated, ceiling fan behind him.
13 D DR. NAKAMURA [V.O.] (over video): Team, can you hear me? Admissions says there's a patient in six who isn't on the board.
14 D PIP: Is that bad?
15 D DR. NAKAMURA [V.O.]: It's a patient who isn't on the board.
16 D TARA: So, yes.
17 A ¶ THE WOMAN (60s, nightgown, barefoot, faintly luminous) steps out of the corridor and stands at the end of the desk, perfectly calm.
18 D PIP: Ma'am? Are you looking for someone?
19 D THE WOMAN: Good evening. I'm told this is where the others wait.
20 A ¶ Kofi shuts the laptop lid, hard.
21 A Dr. Nakamura's voice is cut off mid-word.
22 D KOFI: Others?
23 D THE WOMAN: My name is Elspeth. I was admitted four hundred years ago. Is there still a form?
24 A ¶ Silence.
25 A The mop stops.
26 A The drip pole stops.
27 A ¶ ON SCREEN (Kofi's phone, face up): ORRIN: told u
28 D TARA (very quiet): Kofi, get the clipboard.
29 A ¶ ELSPETH smiles, patient, and holds out her hand.

### SCENE s05174 | INT. THE ROYAL OAK FUNCTION ROOM - WEDDING AFTERPARTY - NIGHT
Detected names (may be incomplete or contain aliases): MO, JEN
1 A ¶ Half-deflated balloons.
2 A A disco ball turns, one mirror missing.
3 A Somewhere a slow song limps to its end.
4 A ¶ MO (50s, lanyard still around his neck under his dicky bow) holds a plastic cup of warm prosecco and has the look of a man cornered by a sofa.
5 A JEN (40s, heels in one hand) lowers herself into the chair opposite and says nothing for a good ten seconds.
6 D JEN: Congratulations, by the way.
7 D MO: Cheers. I'm not the groom.
8 D JEN: No, but you did the seating plan.
9 D MO: Technically, I did the spreadsheet.
10 A ¶ Jen nods, slowly.
11 D JEN: You sat Big Dave next to his ex.
12 D MO: I wasn't told.
13 D JEN: You were. In a meeting. Eleven times.
14 A ¶ He opens his mouth.
15 A Closes it.
16 A Studies the carpet.
17 D MO: Right.
18 A ¶ A door SLAMS somewhere out in the car park.
19 A They both flinch.
20 D JEN: That'll be Dave.
21 D MO: Probably.
22 A ¶ Jen sets her shoes on the table.
23 A She looks at them, and then at him, and something in her shoulders gives.
24 D JEN: Honestly? It's the best wedding I've been to in years.
25 D MO: Is it?
26 D JEN: Mrs K cried at the vows. Dave cried at the buffet. Nobody's cried at work all year and I thought, there, that's a company away day.
27 A ¶ He lets out a breath.
28 A Almost a laugh.
29 D MO: I did write that in the risk assessment.
30 A ¶ His phone BUZZES on the table.
31 A He reads it.
32 A Turns it face down.
33 D JEN: Who's that?
34 D MO: HR. They want a word about Monday.
35 D JEN: Tell them it's a Saturday.
36 A ¶ He smiles.
37 A She picks up her shoes.
38 A For the first time in eleven years, they stay for the last song.

### SCENE s05148_0 | INT. NEW BEGINNINGS FERTILITY CLINIC - WAITING ROOM - DAY
Detected names (may be incomplete or contain aliases): NURSE, MAYA, DEV, THE WOMAN
1 A ¶ We see a quiet waiting room with beige chairs and a fish tank.
2 A The power has been out for three days after the storm, and the clinic is running on one generator.
3 A We can tell this because the lights are dim and the fish tank is not bubbling.
4 A ¶ CLOSE ON a clock on the wall.
5 A It reads 2:14.
6 A It is not moving.
7 A ¶ Maya, 30s, sits very straight with her purse in her lap.
8 A Beside her, Dev, 30s, is tapping his knee.
9 A They are not talking.
10 A We can tell they are not talking because there is no talking.
11 A ¶ ON PHONE: Mom - where r u guys?? is it happening
12 A ¶ Maya turns her phone face down on her thigh without answering.
13 A ¶ A NURSE enters.
14 A We see that she is carrying a clipboard.
15 A She is young and looks like she has not slept since the storm began.
16 D NURSE: Maya Rosen?
17 D MAYA: Yes. That's me.
18 D NURSE: Dr. Okafor will see you now. Only you, though. Generator rules.
19 D DEV (standing): I'm her husband.
20 D NURSE: I know, Mr. Rosen. I'm sorry.
21 A ¶ Dev sits back down.
22 A He does not say anything.
23 A His hand is still on Maya's arm.
24 D MAYA: Dev. It's okay.
25 D DEV (not meaning it): Yeah. Okay.
26 A ¶ Maya stands and follows the nurse through a swinging door.
27 A We see the door swing shut behind her.
28 A ¶ Dev is alone.
29 A He pulls out his phone and we see the screen.
30 A ¶ ON PHONE: Dev: they only let her in. what do i do
31 A ¶ ON PHONE: Mom: sit. be there. thats the job
32 A ¶ He looks at the fish tank.
33 A One fish is hanging at the surface, mouth opening and closing.
34 A ¶ A WOMAN in a green raincoat enters from the street door.
35 A She is soaked.
36 A She looks at the empty reception desk, then at Dev, then back at the desk.
37 A She does not sign in.
38 D DEV [CONT'D]: They're, uh... generator only. You might wait outside.
39 D THE WOMAN: I'm not a patient.
40 D DEV: Oh.
41 D THE WOMAN: I'm here for the freezer.
42 D DEV: What freezer?
43 A ¶ She does not answer.
44 A She walks past him toward the hallway marked STAFF ONLY.
45 A ¶ We see Dev watch her go.
46 A He stands, unsure, then follows at a distance.

### SCENE s05064_1 | INT. HOLLOWAY VETERINARY CLINIC - HALLWAY - CONTINUOUS
Detected names (may be incomplete or contain aliases): NATE, BELLA
1 A ¶ The camera follows him in.
2 A The beam of a small flashlight taped to the phone throws a white circle ahead, trembling.
3 A Linoleum, cracked.
4 A Doors on both sides with brass plates.
5 A EXAM 1.
6 A EXAM 2.
7 A SURGERY.
8 A A smell, faint, of old iodine and something sweeter, wetter underneath.
9 D NATE: Smell that? That's the, uh, that's just a building. Buildings smell.
10 A ¶ He pushes open the door of EXAM 1.
11 A Steel table.
12 A A cage on a counter, door ajar, a faded collar lying in it.
13 A He pans to a blackboard, still chalked: "BELLA - 2PM - DO NOT FEED."
14 D NATE [CONT'D]: That's creepy, right? That's, okay, chat, that's creepy.
15 A ¶ His voice is quieter.
16 A He steps closer to the table.
17 A The light catches long parallel scratches in the steel, deep, as if made by something that did not want to be held.
18 D NATE [CONT'D]: Those are scratches. Those are from, you know. Animals.
19 A ¶ From the far end of the hallway, a sound.
20 A A single tap.
21 A Claws on tile.
22 A ¶ He freezes.
23 A The camera freezes, but his breath comes through the mic, ragged.
24 D NATE [CONT'D] (whisper): Did you hear that.
25 A ¶ A pause.
26 A Tap.
27 A Tap.
28 A Tap-tap.
29 A ¶ He swings the camera down the hall.
30 A The beam finds nothing at first, then, at its very edge, a shape.
31 A A dog, he thinks.
32 A A big pale dog, standing at the end of the corridor, head low, perfectly still.
33 A Its eyes throw back the light, two coins of green.
34 D NATE [CONT'D]: Oh. Oh, hey. Hey buddy. Where'd you come from?
35 A ¶ The dog does not move.
36 D NATE [CONT'D]: Are you somebody's? Are you lost? Hey. Hey, boy.
37 A ¶ He holds out his free hand, palm down, the way you are supposed to.
38 A The dog's head lifts a fraction.
39 A Its lips peel back, and the teeth beneath are far too many, too small, too evenly spaced.
40 A ¶ ON PHONE: "MO: nate"
41 A ¶ ON PHONE: "MO: nate answer"
42 A ¶ Nate takes one step backward.
43 A His heel hits the gurney, which rolls and clangs against the wall, and the sound goes through the building like a gunshot.
44 A ¶ The dog runs.

### SCENE s05165 | INT. COLDLINE DELIVERY WAREHOUSE - NIGHT
Detected names (may be incomplete or contain aliases): BOGDAN, THE WOMAN, ILSE, TWINS
1 A ¶ Water is on the floor, ankle high.
2 A The power is out.
3 A A small camping lantern stands on a shelf and gives yellow light, and BOGDAN, 50s, is moving boxes of canned food from low shelves to high shelves one by one, and in the corner near the loading door THE WOMAN, 30s, wet coat, sits on a stack of pallets with her phone in her hand and she looks at the stairs and at the water and at him, and the rain on the metal roof is loud.
4 D BOGDAN: This shelf is dry. Put your bag here.
5 D THE WOMAN: I keep my bag.
6 D BOGDAN: OK.
7 A ¶ He lifts another box.
8 A She watches him.
9 A The water moves around his boots.
10 A ¶ ON PHONE: Message failed.
11 A No signal.
12 A ¶ She puts the phone in her pocket.
13 D THE WOMAN: How long you work here?
14 D BOGDAN: Eleven years. Never this much water.
15 D THE WOMAN: The driver did not come back.
16 D BOGDAN: He will come.
17 D THE WOMAN: You say this like you do not think so.
18 A ¶ Bogdan does not answer.
19 A He gives her a can of peaches and a plastic spoon.
20 A She takes it.
21 A She does not open it.
22 A She holds it on her knee.
23 D BOGDAN: Open. Eat. We have enough.
24 D THE WOMAN: Later.
25 A ¶ Bogdan sets the lantern higher.
26 A Outside, a car horn sounds far away, two short notes, then stops.
27 A They both look at the door.
28 D THE WOMAN [CONT'D]: My name is Ilse. I should say it.
29 D BOGDAN: Bogdan.
30 D ILSE: I know. It is on your jacket.
31 A ¶ He almost smiles.
32 A He looks at the stitching on his chest as if he forgot it.
33 A ¶ Then the side door BANGS open.
34 A Water rushes in.
35 A THE TWINS, two boys about ten, soaked to the skin, in matching yellow raincoats, stand in the frame holding one backpack between them.
36 A They do not speak.
37 A They look at the lantern.
38 D BOGDAN [CONT'D] (softly): Come. Come inside. Close the door.
39 D THE TWINS (together): We are looking for our mother.
40 A ¶ Ilse stands up.
41 A She sets the can of peaches down on the shelf, open now, with the spoon in it, and she pulls off her coat and puts it over the two small shoulders.
42 D ILSE: Sit. Here. It is dry.
43 A ¶ The boys sit on the pallets.
44 A Bogdan hands them the peaches.
45 A They share the spoon.
46 A ¶ Rain.
47 A The lantern flickers, then holds.
48 A ¶ ON PHONE: one bar.
49 A A message comes through at last.
50 A ¶ ON PHONE: "Where r u?
51 A We are at the bridge.
52 A Boys with you?"
53 A ¶ Ilse reads it.
54 A She does not smile.
55 A She turns the phone so the twins can see the screen, and she keeps her hand on the nearest small wet head.

### SCENE s05064_2 | INT. HOLLOWAY VETERINARY CLINIC - WAITING ROOM - CONTINUOUS
Detected names (may be incomplete or contain aliases): NATE, TEENAGERS
1 A ¶ The camera whips around, a smear of light and floor and ceiling.
2 A He is running now, the image jerking with each stride, his breathing a bellows, the chairs flashing past in rows.
3 A Behind him claws skitter, closer, wet and hungry.
4 D NATE: Go go go go go
5 A ¶ He hits the front door and it doesn't open.
6 A He hits it again.
7 A He slams his shoulder into it and the glass shivers but holds, a deadbolt turned from the outside, a padlock hung on the other side by someone he never heard.
8 A ¶ Through the glass he sees the lot, the van, and two TEENAGERS in matching letterman jackets standing at the edge of the pavement with their phones raised, filming him, one laughing, one not.
9 D NATE [CONT'D]: Hey! HEY! Open the door! Please! Open the door!
10 A ¶ The laughing one waves.
11 A The other lowers his phone slowly, and his face goes slack.
12 A ¶ Behind Nate, the camera catches the reflection in the glass: the pale dog, in the center of the waiting room, standing on its hind legs.
13 D NATE [CONT'D] (barely audible): Oh no.
14 A ¶ ON PHONE: A final text drops, ignored, as the lens falls to the floor and tumbles.
15 A "MO: im coming"
16 A ¶ The picture rolls once, twice, and comes to rest at an angle, showing the ceiling tiles and one hand reaching, then a long dragging sound, then black.
17 A ¶ TIMESTAMP: 12:09 AM.
18 A The recording continues for nine more minutes with no picture.
19 A Only sound.
20 T FADE OUT.

### SCENE s05008 | INT. HOTEL - 9TH FLOOR CORRIDOR - NIGHT
Detected names (may be incomplete or contain aliases): CELIA VANCE, STRANGER, DAD, MARCUS, PRIYANKA
1 A ¶ Long.
2 A Carpeted.
3 A Quiet as a held breath.
4 A Brass numbers glow on doors.
5 A A housekeeping cart sits abandoned by the elevators, a room-service tray on the floor, a single shoe in the hall.
6 A ¶ CELIA VANCE, 30s, evening dress, heels in hand, walks fast with a phone to her ear.
7 A Behind her, a STRANGER in a grey suit follows at a polite distance.
8 D CELIA (into phone): Dad I told you I'm fine, the party was fine, I'm in the hallway now, I'm literally at my door.
9 D DAD [V.O.] (over phone, warm): You sound off. Is somebody with you?
10 A ¶ She glances back.
11 A The STRANGER stops, checks his watch, smiles.
12 D CELIA: No. Nobody.
13 A ¶ She reaches her door.
14 A Swipes.
15 A Red light.
16 A Swipes again.
17 A Red.
18 A ¶ ON PHONE: Front Desk: Your key has expired.
19 A Please visit reception.
20 D CELIA (muttering): Great. Perfect.
21 A ¶ The STRANGER steps closer, hands visible.
22 D STRANGER: Having trouble? I can call down. I'm in 912, just there.
23 D CELIA: I'm fine thank you
24 D STRANGER: Of course. I'm Marcus by the way. Marcus Hale. We met at the bar, I bought you the gin.
25 A ¶ Celia freezes.
26 A A beat.
27 A Her face loosens.
28 D CELIA: Oh my god. Marcus. You're the one who spilled it on my coat.
29 D MARCUS: Guilty. I've been trying to apologise all night. Honestly I followed you because I felt terrible.
30 A ¶ She laughs, relieved, the phone drooping at her side.
31 A Dad's tiny voice keeps talking.
32 D DAD [V.O.]: Celia? Celia are you there
33 D CELIA (into phone): Dad I'll call you back
34 A ¶ She hangs up.
35 A The corridor settles.
36 A Down the hall an elevator DINGS and the doors slide, and out walks a woman in a hotel blazer, name badge reading PRIYANKA, and behind her two men in dark coats who are definitely not guests.
37 D MARCUS (low, not smiling now): Don't turn around. Walk with me.
38 D CELIA: What
39 D MARCUS: Your father sold something he shouldn't have. They're here for you. I'm the one who's here to get you out.
40 A ¶ The housekeeper sets down her cart.
41 A Her hand goes to her pocket.

### SCENE s05111_1 | EXT. NIGHTBIRD STUDIOS - STREET - CONTINUOUS
Detected names (may be incomplete or contain aliases): 
1 A ¶ They tumble out into the rain.
2 A ¶ Behind them, the windows blow out in a shower of light.
3 A ¶ Silence.
4 A ¶ Riley's phone BUZZES.
5 A ¶ ON PHONE: take twelve
6 A ¶ He drops it into a puddle.

### SCENE s05102 | INT. MOON COLONY FUNERAL RECEPTION - EVENING
Detected names (may be incomplete or contain aliases): PIM, PIP, AUNT NEBULA
1 A ¶ Grey dust drifts past the big round window.
2 A Earth hangs there, small and blue and very far away.
3 A Under the dome, a long table of nutrient cakes nobody is touching.
4 A ¶ PIM, a squat round robot the size of a beach ball with two floppy antenna ears, rolls up to the cake table.
5 A Next to him bobs PIP, a thin silver drone with a single blinking eye.
6 A Everyone says they are the same model.
7 A They are not.
8 D PIM (to everyone): Thank you all for coming to say goodbye to Captain Barnaby Tumbleton, who was the best captain of the best crater on the whole moon!
9 A ¶ Dust.
10 A Hush.
11 A A distant air pump going whoosh.
12 D PIP (to Pim): Pim, you said "best" twice and he was the only captain.
13 D PIM (muttering): Then he was twice as best.
14 A ¶ The dome lights flicker low.
15 A A tiny sad chime plays from the speakers, and the cake's candle gutters in the thin air.
16 D PIP: Pim I miss him.
17 D PIM: Me too Pip. (sniff) My antenna ears are leaking.
18 A ¶ The airlock hisses.
19 A In rolls AUNT NEBULA, an enormous fluffy purple dust-bunny robot in a black veil, humming slowly.
20 A She stops.
21 A Everything goes still.
22 D AUNT NEBULA (to the room): Nobody told me I was late. Is there cake left? Is he still dead?
23 D PIM (softly): Yes. To both.

### SCENE s05171_1 | INT. BANK - LOADING DOCK - CONTINUOUS
Detected names (may be incomplete or contain aliases): BEA, RENA
1 A ¶ Concrete.
2 A Cold.
3 A A single camera in the corner, its red light blinking.
4 A ¶ Rena looks up at it.
5 A Bea is already holding the backpack open.
6 D BEA: Don't look at it.
7 D RENA: I'm not looking at it.
8 D BEA: You're looking at it.
9 A ¶ Rena turns away.
10 A Beyond the wall, faintly, the crowd keeps chanting.
11 A Pay for it.
12 A Pay for it.

### SCENE s05196 | INT. ROOFTOP BAR - NIGHT
Detected names (may be incomplete or contain aliases): JESS, THEO
1 A ¶ String lights.
2 A A city that does not care.
3 A Two stools at the far corner, away from the party.
4 D JESS (pulling her sleeves over her hands): You came.
5 D THEO (not looking at her, turning a glass): You said it was important.
6 D JESS (laughs, too fast): I said there was free food.
7 D THEO (sets the glass down, slides it an inch away): There isn't any.
8 D JESS (looks at the glass, then the skyline): No. There isn't.
9 A ¶ This is the last summer they will be two people who share a hometown.
10 D THEO (finally meeting her eyes, then not): Are you still going?
11 D JESS (picks at a label): My flight's Thursday.
12 D THEO (nods slowly, counts something on the bar with his finger): Right. Thursday.
13 D JESS (quiet): You could say something.
14 D THEO (shrugs, a shrug with a lot of weight in it): What would I say.
15 D JESS (a short breath): I don't know. Anything. You used to say everything.
16 D THEO (pushes his stool back, an inch, two): I used to think it would change something.
17 D JESS (stands, stool scraping): That's not fair.
18 D THEO (standing too, voice tight): Fair. You decided this in March. You told your mum before you told me.
19 D JESS (hands shaking, grabs her jacket): Because I knew you'd do this. Go quiet. Make it my fault.
20 D THEO (louder, a head turns at the next table): It is your fault!
21 D JESS (throws the jacket down, not caring who looks): Then say it! Say you don't want me to go!
22 D THEO (a long beat. He breathes. His whole face gives): I don't want you to go.
23 D JESS (whispering, the fight draining out of her): Okay.
24 D THEO (picks up the jacket, holds it out): Okay.
25 D JESS (takes it. Doesn't put it on): I'm still going.
26 D THEO (smiles, wet-eyed): I know.

### SCENE s05066 | INT. MARRIOTT SUITES - 4TH FLOOR CORRIDOR - NIGHT
Detected names (may be incomplete or contain aliases): COREY, DANI, BEX, MARCUS, LENA, GREG
1 A ¶ fluorescent light. carpet the colour of a bruise. a room service cart abandoned outside 412.
2 A COREY, DANI, BEX, MARCUS and LENA stand in a loose knot outside the conference suite, lanyards still on, name tags crooked, the team retreat is in its third hour of "synergy".
3 D COREY: ok but nobody says anything to Greg.
4 D DANI: nobody's saying anything to Greg.
5 D COREY: because last time somebody said something to Greg we all got a mindfulness seminar.
6 D BEX: i liked the mindfulness seminar.
7 D MARCUS: Bex, they made us hold hands with the interns.
8 D BEX: it was grounding. also i'm allowed to like things.
9 D LENA: Bex is allowed to like things.
10 D BEX: thank you Lena. they are the only one who gets it.
11 A ¶ ON PHONE: A message from "GREG (VP)" lights up Corey's screen. "great energy team!! back in 5 for the breakout"
12 D COREY: he said breakout. Dani. he said breakout.
13 D DANI: no. no no no. we did the breakout.
14 D MARCUS: that was the pre-breakout.
15 D LENA: what's the difference between a breakout and a pre-breakout
16 D MARCUS: the pre-breakout has snacks.
17 D BEX: i'm not going back in. i'm going to stay in the hall and become a plant.
18 D DANI: Bex you literally can't. you're presenting the deck.
19 D BEX: Dani, they, i mean i, i have never once presented the deck. you're confusing me with the other Bex.
20 D COREY: there's another Bex?
21 D BEX: no. i just wanted to see if you'd check.
22 A ¶ ON PHONE: A second message, group chat "RETREAT 2K24 (DO NOT MUTE)".
23 A Lena: "dont look but greg is at the elevator".
24 A Marcus: "he's crying???"
25 A Dani: "happy crying or layoff crying"
26 A ¶ They all turn at once.
27 A At the far end of the corridor, the elevator dings.
28 A GREG, 50s, vest, lanyard, a laminated agenda, steps out wiping his eyes with a tiny hotel napkin.
29 D LENA (whispering): Layoff crying.
30 D MARCUS: Happy crying doesn't wear a vest.
31 D COREY: Everybody act normal. Dani, normal.
32 D DANI: i'm so normal. i am the normalest.
33 D BEX (slowly raising a hand): hi Greg.
34 A ¶ Greg looks up.
35 A A beat.
36 A He sniffles.
37 D GREG: Team. Great. Love it. Love the energy.
38 A ¶ He walks past them into the suite and the door sighs shut.
39 A They stand in the corridor in silence.
40 D MARCUS: So. Breakout.
41 D COREY: Breakout.
42 A ¶ They don't move.
43 A The cart rattles faintly as the building settles.

### SCENE s05145 | INT. RIVERSIDE BANQUET HALL - WEDDING AFTERPARTY - NIGHT
Detected names (may be incomplete or contain aliases): DJ, GWEN, ASH
1 A ¶ Streamers.
2 A Half-eaten cake.
3 A A DJ booth abandoned mid-song.
4 A The last guests have gone.
5 A Two people remain.
6 A ¶ Gwen, 30s, in a bridesmaid dress and one shoe, drags a folding chair into the middle of the floor and drops onto it like she's been shot.
7 D GWEN: Best. Wedding. Ever.
8 A ¶ The side door SLAMS open.
9 A Ash, 30s, they/them, enters in a velvet blazer, holding a tray of leftover champagne flutes like a waiter at a very strange restaurant.
10 D ASH: You did not say that during the toast.
11 D GWEN: During the toast I was holding in a sneeze and a sob.
12 D ASH (setting down the tray): Same thing, honestly.
13 A ¶ Gwen grabs a flute.
14 A Ash takes one.
15 A They clink.
16 A Neither drinks.
17 D GWEN: Okay. Real talk. Did you see the groom's uncle?
18 D ASH: The one who made the toast to "his many wives"?
19 D GWEN: He has one wife.
20 D ASH: Then he's very ambitious.
21 A ¶ Gwen cracks up.
22 A Ash pretends not to be pleased.
23 D GWEN: You're good at this, you know that? Making people feel like they're not at a funeral.
24 D ASH: They are at a funeral. It's just a really good one.
25 A ¶ The overhead speaker CRACKLES.
26 A A distant voice, faint and metallic, comes through the PA.
27 D DJ [V.O.] (over speaker): Hey, uh, last song's still queued up. Should I play it?
28 D GWEN (to the ceiling): What song?
29 D DJ [V.O.]: It's, uh... it's labeled "DO NOT PLAY."
30 A ¶ Gwen and Ash exchange a look.
31 D ASH: Obviously play it.
32 D GWEN: Ash, no.
33 D ASH: Gwen. Yes.
34 A ¶ The speakers hum.
35 A A single piano note.
36 A Another.
37 A Then a voice, a woman's voice, soft, singing in a language neither of them knows.
38 A ¶ The room goes still.
39 A The streamers stop swaying.
40 A The candles on the tables light themselves, one by one, in a perfect ring around the dance floor.
41 D GWEN (whispering): Please tell me that's the DJ's idea of a joke.
42 D ASH (not joking): The DJ left at ten.
43 D DJ [V.O.] (over speaker, shaking): Guys... I'm still in the booth. I didn't press anything.
44 A ¶ The door at the end of the hall SWINGS open on its own.
45 A A figure in a long pale dress stands there, face hidden, hands folded in front like a bride.
46 D GWEN (small): Is that... is that Priya's grandmother?
47 D ASH: Priya's grandmother died in March.
48 D GWEN: So that's a no.
49 A ¶ The figure takes one step.
50 A The candles all lean toward it.
51 D ASH (very calm): Okay. New plan.
52 D GWEN: I love a new plan.
53 D ASH: We run.
54 D GWEN: Oh, I love that plan.
55 A ¶ They bolt for the exit together.
56 A The side door SLAMS shut behind them.
57 A The song swells.
58 A ¶ The figure lifts its veil.
59 A ¶ Underneath, grinning, is the DJ.
60 D DJ (lowering the headset): Gotcha.
61 D DJ [V.O., CONT'D] (over speaker, offended): Hey! That's my line.

### SCENE s05068_1 | INT. COUNTY PAROLE OFFICE - OFFICER OKAFOR'S OFFICE - LATER
Detected names (may be incomplete or contain aliases): RUTH, THE MAN, CALVIN
1 A ¶ Ruth Okafor, 50s, reading glasses pushed up into gray braids, sits behind a desk piled with files, a cactus, a photograph of a boy in a graduation gown turned slightly away from the visitor's chair.
2 A She is calm, almost bored.
3 A She has done this four thousand times.
4 A ¶ The man sits.
5 A He puts the folder on the desk.
6 D RUTH: Mr. Voss. How's the job?
7 D THE MAN: Fine.
8 D RUTH: The apartment?
9 D THE MAN: Fine.
10 D RUTH: You've been fine for six weeks. I'm starting to think you're a fine person.
11 A ¶ He doesn't smile.
12 A She turns a page.
13 D RUTH [CONT'D]: Says here you missed your Thursday check-in.
14 D THE MAN: I called.
15 D RUTH: You left a message with Deb. Deb doesn't write things down. Deb is a lovely woman and a terrible secretary.
16 D THE MAN: I was at work. They put me on a double.
17 D RUTH: Did you bring a pay stub?
18 A ¶ He slides the folder across.
19 A She opens it, flips, and stops.
20 A Her eyebrows lift very slightly.
21 D RUTH [CONT'D]: This isn't a pay stub.
22 A ¶ It's a photograph.
23 A A school photo, a boy of about eight, missing a front tooth.
24 A She looks at it a long time.
25 A When she looks up, her voice is lower.
26 D RUTH [CONT'D]: Where did you get this?
27 D THE MAN: Mailbox. Yesterday.
28 D RUTH: It's not allowed. You know it's not allowed. The order says no contact.
29 D THE MAN: I didn't contact anybody. It came in the mail. I didn't do a thing.
30 A ¶ He leans forward.
31 A For the first time his voice shakes, not much, just enough.
32 D THE MAN [CONT'D]: Somebody wants me to violate. That's all this is. Somebody wants me back inside.
33 D RUTH: Who?
34 A ¶ He doesn't answer.
35 A His hands, on his knees, have begun to tremble, and he presses them flat.
36 D RUTH [CONT'D]: Mr. Voss, I need a name.
37 D THE MAN: Calvin.
38 D RUTH: Excuse me?
39 D THE MAN: Calvin. My name's Calvin. Everybody calls me Voss like I'm a case number. I'd like, once, for somebody in this building to say it.
40 A ¶ She sets the photograph down, gently, and for a moment the whole office seems to hold its breath.
41 A Deb's keyboard has stopped.
42 A Somewhere a printer jams.
43 D RUTH: Calvin.
44 A ¶ He closes his eyes.
45 D RUTH [CONT'D]: I'm going to make a call. You're going to sit right here. You are not in trouble.
46 D CALVIN (opening his eyes): That's what they said last time.
47 A ¶ She stands, takes the photograph, and walks to the door, and in the doorway she hesitates, and does not look back, and this is the last time the two of them will sit in the same room as strangers.

### SCENE s05082 | INT. SUBWAY CAR - EVENING RUSH
Detected names (may be incomplete or contain aliases): POPPY NAKAMURA, BISCUIT, MARCUS, DELILAH OKONKWO, CLANG, TUNNEL WALL
1 A ¶ A packed Number 6 train SCREECHES through the dark.
2 A Straphangers sway like seaweed.
3 A The lights flicker.
4 A The car smells of pizza and wet umbrellas.
5 A ¶ CLOSE ON a tiny paper bag in the arms of POPPY NAKAMURA, 9, brave, braces on her teeth.
6 A Inside the bag, a hamster peeks out.
7 D POPPY: Don't look, Biscuit. Crowds make you nervous.
8 D BISCUIT [O.S.] (muffled squeak): I'm not nervous. You're nervous.
9 A ¶ ANGLE ON Poppy's big brother, MARCUS, 15, headphones around his neck, glued to a dead phone.
10 D MARCUS: Pop, we're four stops from home. Do not name-drop the hamster in public.
11 D POPPY: He has a name, Marcus.
12 D MARCUS: He has a name that means "snack" to every cat in Queens.
13 A ¶ The train JERKS.
14 A Everybody lurches.
15 A A man's coffee flies.
16 A ¶ WE SEE the lights die.
17 A Total black.
18 A A collective GASP.
19 A ¶ The train GROANS to a stop.
20 D POPPY [CONT'D]: Marcus?
21 D MARCUS: Right here, Pop.
22 D DELILAH (from the dark, a big voice): Everybody stay calm! I've been stuck down here before!
23 A ¶ Poppy squints.
24 A A small flashlight clicks on.
25 A It shines on DELILAH OKONKWO, 60s, a transit worker's vest, a thermos the size of a fire hydrant.
26 D DELILAH [CONT'D]: Ten minutes. Tops. Y'all hold hands if you gotta.
27 D MARCUS: Is that official?
28 D DELILAH: It's a suggestion, baby.
29 D POPPY: Delilah, I think Biscuit's scared.
30 D DELILAH: Biscuit is the hamster?
31 D POPPY: He's a very brave hamster.
32 D MARCUS: He is literally shaking.
33 D POPPY: Marcus, shush!
34 D DELILAH: Both of you shush. Hear that?
35 A ¶ Silence.
36 A Then a faint CLANG, CLANG, CLANG from the tunnel ahead.
37 A ¶ INSERT - THE TUNNEL WALL, a rusty pipe trembling.
38 D POPPY (whispering): That's not a ten-minute noise.
39 D DELILAH (low): No. It is not.
40 D MARCUS: Okay. Okay. What do we do?
41 D DELILAH: You and your sister stay by me. Poppy, you keep that little fella warm.
42 D POPPY (to the bag): You hear that, Biscuit? We're a team now.
43 D BISCUIT [O.S.] (squeak): Tell Marcus I said sorry about his sneakers.
44 D MARCUS: What did he say?
45 D POPPY: Nothing.
46 A ¶ The clanging STOPS.
47 A ¶ The lights flash on.
48 A The train LURCHES forward.
49 A ¶ Everyone CHEERS.
50 A ¶ BACK TO SCENE
51 A ¶ Marcus slumps against a pole, laughing with relief.
52 A Poppy squeezes the bag.
53 A Delilah screws the cap on her thermos.
54 A ¶ This is the last time the three of them will ever be strangers.
55 D DELILAH: Next stop is yours, kids.
56 D POPPY: Thank you, Delilah.
57 D DELILAH: Thank the hamster.

### SCENE s05105 | INT. HOLLOWAY FERTILITY CLINIC - CONSULT ROOM - DAY
Detected names (may be incomplete or contain aliases): DR. HAQ, DANA, WES
1 A ¶ ON CAMERA: handheld, a crew of one.
2 A A consult room, beige, a poster of a cross-section nobody asked for.
3 A Dana, 30s, sits on the exam bench with a paper gown over her jeans, thumbs hovering over her phone.
4 A Dr. Imran Haq, 50s, tablet in hand, takes the stool in front of her.
5 D DR. HAQ: Dana, before we start, you're fine with the camera?
6 D DANA: Wes thinks it's a bad idea. Wes thinks everything is a bad idea this month.
7 D DR. HAQ: Understood. We can stop at any point.
8 A ¶ Dana's phone buzzes.
9 A We see the screen.
10 A ¶ ON PHONE: where r u
11 A ¶ ON PHONE: is it done yet
12 A ¶ ON PHONE: call me
13 D DANA: He's in the parking lot. He wouldn't come in.
14 D DR. HAQ: Would you like to call him?
15 D DANA (beat): Put him on speaker. Maybe he'll listen to you.
16 A ¶ She dials.
17 A It rings twice.
18 D WES [V.O.]: Hey. Hey. Is the doctor there? Can he hear me?
19 D DR. HAQ: I can hear you, Wes. I'm going to share the results with Dana, and I'd like you to hear them too.
20 D WES [V.O.]: Fine. Just say it fast.
21 D DR. HAQ: The third cycle did not take. I'm sorry.
22 D DANA: It's fine.
23 D WES [V.O.]: It's not fine, Dana.
24 D DANA (smiling, brittle): It's fine, Wes.
25 A ¶ Dr. Haq glances at the camera, then away.
26 D DR. HAQ: There is a fourth option. A different protocol. But you should know the odds are lower, and the cost is not small, and I would never push you either way.
27 D DANA: You're not pushing.
28 D WES [V.O.]: You are pushing, though, kind of, I mean the whole place is a push.
29 D DANA: Wes, I'm going to hang up now.
30 D DR. HAQ: Dana, take a moment.
31 D DANA: I don't need a moment. I need him to stop talking.
32 D WES [V.O.]: I'm just saying we already spent
33 D DANA: I know what we spent.
34 A ¶ She ends the call.
35 A Silence.
36 A The poster hums its bright pink hum.
37 A Dana looks into the lens for the first time.
38 D DANA [CONT'D]: You can put that in the film.
39 D DR. HAQ: Let's talk about the fourth option.
40 D DANA: Okay.
41 A ¶ Her phone buzzes once more.
42 A She does not look.
43 A A new message sits on the dark screen.
44 A ¶ ON PHONE: sorry. im coming in

### SCENE s05163 | EXT. ABERNETHY GREEN - REENACTMENT CAMPGROUND - DAY
Detected names (may be incomplete or contain aliases): PHILIPPA, THADDEUS, WICK
1 A ¶ A muddy field of canvas tents.
2 A Smoke from a cookfire.
3 A Thaddeus Pell, 40s, in a full 1776 militia coat and tricorn, sits on a barrel holding a laptop wrapped in a burlap sack.
4 A He is very aware of the modern world and very hopeful nobody sees it.
5 A ¶ Philippa Voight, 30s, in a plain linen gown and apron, walks up carrying a wooden bucket.
6 A She stops.
7 A Squints.
8 D PHILIPPA: Are you ColonelHuzzah88?
9 D THADDEUS: Are you Mistress_Quill?
10 D PHILIPPA: Yes, hi. Thaddeus. Hi.
11 D THADDEUS: Philippa! In the flesh! Well, in the flax.
12 A ¶ She sets down the bucket.
13 A They shake hands, awkwardly, formally, as period requires.
14 A ¶ ON LAPTOP SCREEN: a Slack channel titled #the-1776-crew.
15 A The newest message reads:
16 A ¶ ON SCREEN: wick_the_unbothered: are u 2 there yet or what
17 D THADDEUS [CONT'D]: Wick's online. They said they'd join by video, they couldn't get off work.
18 A ¶ Thaddeus unwraps the burlap and turns the laptop so both can see.
19 A A video window opens: a cluttered cubicle, a lanyard, a fluorescent light.
20 A WICK, 20s, wears a headset and a cheap tricorn made of black construction paper.
21 D WICK [V.O.] (through laptop speakers): Oh my god, you're real. Hi! Is that the real mud?
22 D PHILIPPA: It's the real mud.
23 D WICK [V.O.]: I'm so sorry I'm not there, my manager is literally behind me, they keep walking past. One sec.
24 A ¶ Wick quickly minimizes a spreadsheet and sits very straight.
25 D THADDEUS (to Wick): You look very serious.
26 D WICK [V.O.]: I'm in a meeting. Technically. I'm muted, I think? Am I muted?
27 D PHILIPPA: No.
28 D WICK [V.O.]: Oh no. (muttering) Okay. Okay. It's fine.
29 A ¶ Philippa sits on the grass, tucks her skirts.
30 A Thaddeus offers her a hard biscuit from a leather pouch.
31 D PHILIPPA: Is it period?
32 D THADDEUS: It's from Costco. But I dipped it in tea so it looks old.
33 D PHILIPPA: That's the most you thing I've ever heard and I've known you for two years in text.
34 D WICK [V.O.]: Aw, you guys are cute. This is cute. I'm gonna cry at my desk.
35 D THADDEUS: Please don't cry at your desk, Wick.
36 D WICK [V.O.]: I use they/them, Thaddeus, not "cry at your desk," come on.
37 A ¶ A beat.
38 A Then all three laugh.
39 A A distant musket goes off POP over the tents.
40 A Philippa bites the biscuit and winces.
41 D PHILIPPA: Okay. That's definitely Costco.

### SCENE s05064_0 | INT. HOLLOWAY VETERINARY CLINIC - WAITING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): NATE DUNN
1 A ¶ HANDHELD.
2 A A phone camera, held at arm's length, swinging.
3 A The picture is grainy, overexposed by the buzzing tube lights.
4 A A timestamp burns in the corner: 11:47 PM.
5 A ¶ NATE DUNN, 28, lanky, a beanie, a hoodie with the sleeves pushed up, holds the camera on himself, grinning too hard, a kid doing a bit he has done a hundred times for a channel with four hundred subscribers.
6 D NATE: Okay so we're live. Not live live. Recording live. If you're new, I'm Nate, and tonight we are doing what the comments asked for, which is the abandoned vet clinic on Route 9.
7 A ¶ He turns the camera.
8 A The waiting room is wide, low-ceilinged, and wrong.
9 A Plastic chairs bolted in rows.
10 A A reception desk with a dead phone and a bowl of petrified dog biscuits.
11 A On the wall, a faded poster, "Have You Hugged Your Pet Today?", a cartoon beagle smiling in a way that has gone sour.
12 D NATE [CONT'D]: So, lore. This place closed in 2009. Owner just kind of walked out one day. Left the files, left the meds, left, and this is the part I love, the animals.
13 A ¶ He laughs.
14 A It dies fast.
15 D NATE [CONT'D]: I mean not the animals. Obviously. Not the. Anyway.
16 A ¶ The camera pushes toward a hallway on the far side of the desk.
17 A At the mouth of it, a rusted gurney.
18 A Beyond that, dark.
19 A ¶ ON PHONE: A text banner drops from the top of the frame.
20 A "MO: ur not seriously there rn"
21 D NATE [CONT'D] (to the camera): That's my buddy Mo. He's scared of everything. Mo, I see you, I'm okay.
22 A ¶ He types with one thumb, camera shaking, and we see over his shoulder the reply go out: "im fine. go to bed."
23 A ¶ ON PHONE: "MO: nate. its midnight. come home."
24 A ¶ He pockets the phone.
25 A In the glass of the front door, behind him, there's a reflection of the empty lot outside, the van, the moon, and for a half second something low and pale moving past the van, something about the size of a dog.
26 A ¶ He doesn't see it.
27 A The camera does.
28 D NATE [CONT'D]: Okay! Hallway.

### SCENE s05024 | INT. HOLLOWAY HOUSE - DRAWING ROOM - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): ODILE VANCE, HARLAN, PRU, TEODOR, ROWAN
1 A ¶ Rain has been falling since the cemetery and now it ticks against the tall windows like something asking to be let in.
2 A Lamps are lit too early.
3 A The room smells of lilies, wet wool and the kind of coffee that is made in urns.
4 A ¶ ODILE VANCE, sixty, stands by the sideboard with a plate she will never finish, and she watches her late husband's brother HARLAN pour himself a third whisky with a steadiness that is almost an accusation.
5 A Across the room, PRU, the dead man's daughter, folds and unfolds a funeral program until it has no shape, while TEODOR, the family lawyer, drifts behind her saying nothing in a very organised way.
6 A Near the piano, ROWAN, the dead man's nurse, who is wearing a borrowed black cardigan and who uses they and them, stands alone with their hands in their pockets, and they are the only one in the room who has noticed the study door is open.
7 D ODILE (low, to Harlan): You told the police you were in Dover that night.
8 D HARLAN: I told them what was true, Odile.
9 A ¶ The landline in the hall RINGS.
10 A Nobody moves.
11 A It rings again.
12 D TEODOR: I'll go.
13 A ¶ He goes.
14 A His voice carries back, flat and polite, through the open door.
15 D TEODOR [O.S.]: Holloway residence. ... No, he is not available. ... Who is this, please?
16 A ¶ Rowan turns toward the sound.
17 A Pru stops folding.
18 D PRU (very quietly): Who is it?
19 D TEODOR [O.S.] (a long pause, then no longer polite): Say that again.
20 A ¶ Harlan sets down the glass.
21 A The lilies shiver in a draught from the study.
22 A Rowan takes one step toward the hall, and Odile, without turning her head, says their name like a warning.
23 D ODILE: Rowan.
