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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_copusC/group_39000.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

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

### SCENE s05103 | INT. SUBURBAN KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): MARGOT, THEO, DESMOND, TWINS, WARDEN, ODILE
1 A ¶ Dark.
2 A A storm presses on the window over the sink.
3 A One candle on the table, a battery lantern on the counter, a fridge that has stopped humming.
4 A ¶ MARGOT, 40s, stands at the counter slicing a loaf of bread with great care.
5 A THEO, 20s, they/them, sits at the table with their knees drawn up.
6 A DESMOND, 50s, Margot's husband, walks the room in his socks, trying every switch.
7 D DESMOND: Nothing. Not the stove, not the porch light, not even the little green clock on the microwave.
8 D MARGOT: It's a storm, Des. It will come back.
9 D DESMOND: It's the third time this month.
10 D MARGOT: Then it will come back a third time.
11 D THEO (beat): Can I say something and nobody does a face.
12 D MARGOT: We don't do faces.
13 D THEO: You are doing a face right now.
14 D MARGOT: That is my regular face.
15 A ¶ Desmond laughs.
16 A It dies in the dark.
17 A Thunder, far off, low and patient.
18 D DESMOND: Where are the girls?
19 D MARGOT: Upstairs. Playing the game where they don't sleep.
20 A ¶ Footsteps overhead.
21 A Then on the stairs.
22 A Then in the doorway stand THE TWINS, eight years old, identical, in matching pyjamas, each holding one end of a long silver thread that runs back into the dark of the hallway and does not appear to end.
23 D THE TWINS (together): Grandmother is here.
24 A ¶ Margot lowers the knife.
25 A Desmond turns the dead light switch again.
26 A Theo unfolds from the chair very slowly and puts themself between the table and the door, while the candle flame leans away from the hall as if it has been told a secret.
27 D MARGOT: Girls. Your grandmother died in March.
28 D THE TWINS (together): She says she's been delayed.
29 A ¶ Desmond's phone rings on the counter.
30 A Everyone looks at it.
31 A He answers on speaker and the voice is a man's, flat, official, tired.
32 D WARDEN [V.O.]: Mr. Hale? This is the Warden of the Third Gate. I'm sorry to call so late. Is Madam Odile with you yet?
33 D DESMOND: I'm sorry, who?
34 D WARDEN [V.O.]: She left the Gate at six. We've been trying to reach the family since. Please don't let her cross the threshold of your kitchen until the lamps are lit. She is not, strictly speaking, herself.
35 D THEO (beat): She's not what?
36 A ¶ The thread tightens.
37 A Out of the dark of the hallway steps ODILE, 70s, in a wet funeral coat, her eyes two small lit lanterns.
38 A She smiles at Margot with great tenderness.
39 D ODILE: Margot, my darling. You've cut the bread so thin. Did you know the lights go out when I'm near? I'd forgotten.
40 D MARGOT (very quietly): Mama.
41 D ODILE: Light one more candle for me. Only one more. And then we can talk about what you owe.
42 A ¶ Nobody moves.
43 A The candle gutters.
44 A Rain on the glass.
45 A The Twins hold their silver thread like a leash.

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

### SCENE s05093 | INT. SUBBASS SOUND - STUDIO B - DAY
Detected names (may be incomplete or contain aliases): LINUS, MO, WREN, DENISE, PRIYA
1 A ¶ CLOSE ON a mixing console, faders crawling up and down by themselves.
2 A Pull back to find Mo Delgado, 30s, producer, hoodie, three coffees deep, chewing a pen cap.
3 A ¶ Through the glass, in the vocal booth, Linus Thorne, 50s, a former one-hit wonder in a leather vest, stands before a mic with his eyes closed, singing very gently about a sandwich.
4 D LINUS [V.O.] (through talkback, sincere): "Oh, ham, you were never mine..."
5 A ¶ Mo presses the talkback button.
6 D MO: That's great, Linus. Another take. Maybe less ham.
7 A ¶ Wren Okoye, 20s, the engineer, slumped at the second chair with a laptop, doesn't look up.
8 D WREN (to the room): We've done forty-one takes.
9 D MO (muttering, to himself): Forty-two, with feeling. Forty-two.
10 A ¶ Mo's phone lights up on the desk.
11 A ¶ ANGLE ON PHONE SCREEN
12 A ¶ "LABEL - DENISE".
13 A ¶ Mo answers on speaker.
14 D DENISE [V.O.]: Mo. Tell me the single is done.
15 D MO: It's, uh, ripening.
16 D DENISE [V.O.]: It's a song about lunch meat. Is it done.
17 A ¶ Wren mouths "No" at the phone.
18 A Mo waves her off.
19 D MO (to everyone, bright): Okay team! Quick huddle, we're gonna just, vibe.
20 A ¶ Priya Ramanathan, 20s, the assistant, enters with a tray of tea, nods at nobody, sets it down, and sits.
21 A ¶ WE SEE Linus through the glass, tapping the window, mouthing something.
22 A Everyone ignores him.
23 D PRIYA (to Mo only): He's asking if the lunch meat is "emotionally honest" enough.
24 D MO (to Priya): Tell him it's the most honest ham I've ever heard.
25 A ¶ BACK TO SCENE
26 D WREN (to herself, typing): I'm updating my resume.
27 D DENISE [V.O.]: I heard that.
28 A ¶ Mo sinks into his chair.
29 A Nobody speaks.
30 A The faders keep creeping.
31 A Take forty-three begins, soft and sincere and terrible.

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

### SCENE s05068_0 | INT. COUNTY PAROLE OFFICE - WAITING AREA - MORNING
Detected names (may be incomplete or contain aliases): WORLD'S OKAYEST GRANDMA, THE MAN, DEB
1 A ¶ Fluorescent lights.
2 A A row of molded chairs.
3 A A ficus that died years ago and has not been told.
4 A ¶ Deb, 60s, reception, bifocals, a mug that says WORLD'S OKAYEST GRANDMA, taps at a keyboard behind scratched plexiglass.
5 A She doesn't look up when the door opens.
6 A ¶ A man comes in.
7 A He is tall, late forties, a gray work jacket zipped to the throat, a folder pressed to his ribs like a shield.
8 A He stands very still just inside the door, as if the room might reject him.
9 A THE MAN waits.
10 D DEB: Name?
11 D THE MAN: I have a nine o'clock.
12 D DEB: Name.
13 A ¶ He says nothing for a second.
14 A She finally looks at him.
15 D THE MAN: Is Officer Okafor in?
16 D DEB: Honey, everybody's in. It's nine in the morning. Sit.
17 A ¶ He sits.
18 A He keeps the folder on his knees.
19 A Across the room, a clock ticks, slower than a clock should.

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

### SCENE s05030 | INT. DELIVERY WAREHOUSE - NIGHT
Detected names (may be incomplete or contain aliases): THE WOMAN, TEO
1 A ¶ Rain drums on the corrugated roof.
2 A Somewhere a forklift beeps, backing up, backing up, never arriving.
3 A ¶ Sodium light buzzes over the sorting belt.
4 A Parcels slide past, unclaimed.
5 A ¶ He stands at the belt with a scanner, eighteen, new vest still creased.
6 A She watches him from the mezzanine stairs and does not come down.
7 D THE WOMAN: Seven weeks. That's what the last kid lasted. Seven weeks, and he cried in the van park like it was a funeral. You want to know what I told him?
8 D TEO (beat): Not really.
9 D THE WOMAN: I told him the belt doesn't care. That's the whole job. It doesn't care that your mother's sick, or that you wanted to be a drummer, or that you're clever. It just keeps coming, and the only thing you get to decide is whether you flinch.
10 A ¶ Water finds a gap in the roof and ticks into a bucket.
11 A Nobody has emptied the bucket in a long time.
12 A ¶ He lifts a parcel, scans it, sets it down.
13 A His hands are shaking.
14 A He does it again anyway.
15 D TEO: You didn't say your name.
16 D THE WOMAN (beat): Marguerite. Nobody uses it. Scan the next one.

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

### SCENE s05153 | INT. NEXUS ARENA - FINALS STAGE - NIGHT
Detected names (may be incomplete or contain aliases): WREN, HALE, ADMIN, TEENAGE BOY, HAS JOINED, THE CROWD
1 A ¶ A packed esports arena.
2 A Strobing blue light.
3 A Two gaming rigs on a raised platform, a huge screen above.
4 A ¶ WREN, 20s, hoodie, headset around her neck, sits dead still.
5 A Her coach HALE, 50s, crouches beside her chair.
6 D ADMIN [V.O.] (over the PA): Match four, final round. Players, please confirm your connection.
7 A ¶ In the crowd, a TEENAGE BOY lowers his phone.
8 A An old SECURITY GUARD scans the aisles, bored.
9 A ¶ ANGLE ON THE SCREEN
10 A ¶ Wren's character, a knight, stands in an empty grey corridor.
11 A There is no opponent's name in the lobby.
12 A ¶ ON SCREEN: PLAYER 2 HAS JOINED (0 ms)
13 D HALE (quiet): Wren. Look at me.
14 D WREN: I'm looking at it.
15 D HALE: No. At me.
16 A ¶ She does. (beat)
17 D HALE [CONT'D]: Twelve years I've done this. I have seen every kind of cheat there is. Lag switches, ghost accounts, a kid who taped a second keyboard under his desk. And I've been telling you since the qualifiers that something is wrong, and you keep saying "it's just a bug." You're a better player than a bug.
18 D WREN: It is a bug.
19 D HALE (beat): Then why did it say your mother's name in the chat?
20 A ¶ CLOSE ON the chat window.
21 A A single line.
22 A ¶ ON SCREEN: > hello wren. you left the door open.
23 A ¶ Wren pulls her hands off the keyboard.
24 A Hale grabs the cable.
25 A The screen doesn't flicker.
26 A The game keeps playing without them.
27 D THE CROWD (chanting, rising): WREN! WREN! WREN!
28 A ¶ The teenage boy drops his drink.
29 A The guard turns, hand to his radio.
30 A ¶ WE SEE every monitor in the arena flip to the same grey corridor.
31 A The knight turns, slowly, to the camera.
32 D ADMIN [V.O.] (over the PA, strange, soft): Please remain seated. We are experiencing a technical difficulty.
33 D HALE: Get up. Wren. Get up.
34 D WREN (very calm): If I stand up it gets in here.
35 A ¶ BACK TO SCENE
36 A ¶ Hale stares at her.
37 A The strobes slow.
38 A Stop.
39 D THE CROWD (a whisper, all at once): Wren.
40 A ¶ The doors of the arena clank shut.
41 A Every single one.
42 A Wren pulls the headset onto her ears.
43 D WREN [CONT'D] (beat): Tell my mother I'm sorry about the name.
44 A ¶ She picks up the controller.
45 A The knight raises its sword.
46 D HALE: Don't.
47 A ¶ Everyone in the front row stands and sits down in unison.
48 T FADE OUT.

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

### SCENE s05036 | EXT. FISHING TRAWLER "MARGARET ANN" - DECK - NIGHT
Detected names (may be incomplete or contain aliases): SKIPPER BRODIE FENN, STRANGER, MARCUS, THE CREW
1 A ¶ A rusted forty-foot trawler wallows in black swell off the breakwater, nets heaped in wet coils, a single work lamp swinging on its cable.
2 A Diesel and salt in the air.
3 A ¶ SKIPPER BRODIE FENN, 50s, weathered, a gold tooth he shows when he lies, leans against the winch.
4 A Beside him stands a STRANGER in a clean dry anorak, far too neat for a boat, holding a tablet in a waterproof sleeve.
5 D STRANGER: You're the captain? I was told the catch would be on ice by midnight.
6 D BRODIE: Catch is in the hold. Ice is a figure of speech.
7 A ¶ The STRANGER taps the tablet.
8 A ¶ ON TABLET: UNIT 4 - HARBOUR CUSTOMS - INSPECTION 06:00 - CLEAR
9 D STRANGER: Customs clear at six. That gives us six hours to move forty crates of "cod" off this deck and into a van that does not officially exist.
10 D BRODIE (grinning, tooth flashing): And who might you be, friend, to know about vans?
11 A ¶ The STRANGER glances up, finally, and unzips the anorak.
12 A Underneath: a badge, a vest, a holstered sidearm.
13 D MARCUS: Detective Marcus Hale, Maritime Task Force. And I'd stop smiling.
14 D THE CREW [O.S.] (three voices, shouting, nearly overlapping): Cap'n! Cap'n, there's lights on the water!
15 A ¶ Searchlights sweep across the swell, white and enormous.
16 A A bullhorn crackles.
17 D MARCUS (into his collar): All units, this is Hale. Boarding in ninety seconds. Nobody leaves this deck.
18 D BRODIE (very quiet): You were on my boat for three weeks. You gutted my fish.
19 D MARCUS (beat): You make a lovely chowder, Skipper.
20 A ¶ The work lamp SWINGS and shatters against the winch.
21 A Darkness, then the harsh white of the searchlights on every face.

### SCENE s05144 | INT. COUNTY PAROLE OFFICE - WAITING AREA - MORNING
Detected names (may be incomplete or contain aliases): JEN, BIG DAVE, MO
1 A ¶ Plastic chairs bolted in rows.
2 A A water cooler gurgles.
3 A Behind the glass, a clerk types, never looking up.
4 A ¶ Big Dave, 50s, broad, in a suit that fits like it was lent to him, sits with his hands folded.
5 A Beside him, Jen Park, 40s, parole officer, flips through a file with her thumb.
6 D JEN (to the room, not looking up): Everybody sign the sheet. Even if you've signed it before. Especially if you've signed it before.
7 A ¶ Two teenagers by the vending machine laugh at something on a phone.
8 A A man with a toddler on his knee shushes the child, who cries anyway.
9 D BIG DAVE (standing, to Jen): I've been out eleven months. I've been on time every Tuesday. Every Tuesday, Jen.
10 D JEN (beat): I know.
11 D BIG DAVE (quieter): Then why am I looking at a new condition on my own paper?
12 D JEN (closing the file): Dave. Sit.
13 D BIG DAVE (not sitting): I did what you said. I took the job. I stayed at Mo's place. I stayed away from the old crowd.
14 A ¶ Mo, 30s, in the next chair over with a hi-vis vest in her lap, stares at the floor.
15 D MO (muttering): Don't drag me into this.
16 D BIG DAVE (to Mo): You're the one who said they'd write the letter.
17 D MO (to nobody): I said I'd think about it.
18 D JEN (to the whole room): Folks, give us a minute. Please.
19 A ¶ The two teenagers drift off down the hall.
20 A The man with the toddler picks up the child and leaves.
21 A The clerk behind the glass finally looks up.
22 D BIG DAVE (beat): You want to tell me who made the call?
23 D JEN (firmly): No.
24 D BIG DAVE (louder): Somebody called. Somebody told you where I was on the fourteenth.
25 D JEN (rising): Dave, I can't discuss it here.
26 D BIG DAVE (lunges across the chair): Then where?
27 A ¶ Jen and Big Dave collide and both stumble into the water cooler.
28 A The jug SLOSHES and tips.
29 A Mo jumps up and the three of them freeze.
30 D MO (very quietly): It was me.
31 A ¶ Silence.
32 A The cooler glugs once, and stops.
33 D BIG DAVE (beat): Say that again.
34 D MO (to Jen): You said if I told you, he would only get a warning.
35 D JEN (to herself): God help me.
36 A ¶ Big Dave sits.
37 A Slowly, like a man lowering something heavy.
38 A The clerk behind the glass quietly turns off her screen.

### SCENE s05178 | INT. RIVERSIDE SOUND STUDIO - CONTROL ROOM - NIGHT
Detected names (may be incomplete or contain aliases): ELLIE, RHYS, GRAN
1 A ¶ A dim room, all faders and foam.
2 A Through the glass: a vocal booth, a lone mic, a stool.
3 A ¶ ELLIE (17, borrowed leather jacket two sizes too big) stands inside the booth with headphones clamped on, gripping the mic stand while RHYS (30s, producer, beanie, tea in a chipped mug) slumps behind the desk with his feet up, and a laptop on his knee pings and BUZZES every few seconds as GRAN's name flashes on its screen.
4 D RHYS (into talkback): Again, Ellie. From the second verse.
5 D ELLIE [V.O.] (through speaker): I've done it nine times, Rhys.
6 D RHYS: Ten's a good number.
7 A ¶ She sighs, the speaker crackling.
8 A Rhys's phone rings: GRAN.
9 A He answers, puts it on speaker.
10 D GRAN [V.O.]: Rhys, love, is she there? She's not answering her mobile.
11 D RHYS: She's singing, Gran. Can't be disturbed.
12 D GRAN [V.O.]: Tell her the dinner's gone cold. Tell her I'm proud, and the dinner's gone cold.
13 A ¶ Ellie hears it through the cans.
14 A Her hand goes to her mouth.
15 A Rhys mutes the line and presses talkback.
16 D RHYS: Good. Hold that. Sing it like that.
17 A ¶ She takes a breath.
18 A Closes her eyes.
19 A The red light flicks on.

### SCENE s05062 | INT. RIDESHARE CAR - NIGHT
Detected names (may be incomplete or contain aliases): GWEN, RICKY, TASHA, BOB
1 A ¶ 2 AM.
2 A Rain.
3 A A hatchback, wipers going.
4 A GWEN, bride-to-be, in a wedding dress, sits in back.
5 A Next to her, RICKY, her ex.
6 A Up front, TASHA drives.
7 A Beside her, BOB, a stranger with a trombone case.
8 D TASHA: So to confirm. Four people. One dress. Zero explanations.
9 D GWEN: He's not with me.
10 D RICKY: I'm totally with her.
11 D GWEN: He's not WITH me with me.
12 A ¶ Silence.
13 A ¶ Bob.
14 A Trombone.
15 A Nothing.
16 D BOB: I got in the wrong car.
17 D TASHA: You got in the right car. You got in the wrong, uh, situation.
18 A ¶ Her phone.
19 A Dead.
20 D GWEN: Does anyone have a charger
21 D TASHA: Glovebox. Next to my dignity.
22 A ¶ He opens it.
23 A Empty.
24 A Rain.
25 D RICKY: Gwen, the groom is at the church. Everyone is at the church. Why are we in a Honda?
26 D GWEN: Because I ran. Okay? I ran. In heels.
27 D BOB (raising trombone case): For what it's worth, I think you look fantastic.
28 A ¶ Beat.
29 A All three turn to him.
30 D TASHA: Sir, you're not even supposed to be here.
31 D BOB: I'm just saying. Great dress.
32 A ¶ She laughs, then cries, then laughs.
33 A He hands her a napkin from the case.
34 A Why does he have napkins in a trombone case.
35 A Nobody asks.
36 A ¶ Tasha stops the car.
37 A Church.
38 A Lights on.
39 A Doors open.
40 A The groom, tiny in the distance, waving.
41 D RICKY: Oh no.
42 D GWEN: Oh no.
43 D TASHA: Five stars everybody. Thats the best ride I ever had.

### SCENE s05118_0 | INT. HAPPY PAWS VET CLINIC - NIGHT
Detected names (may be incomplete or contain aliases): AIDEN, SASHA, MARLON
1 A ¶ CLOSE ON a keypad.
2 A A gloved finger types four numbers.
3 A A light turns green.
4 A CLICK.
5 A ¶ The front door swings open.
6 A The clinic is dark and empty, except for the soft glow of a fish tank and a sleeping beagle in a cage.
7 A ¶ AIDEN, 20s, in a black hoodie, leads the way.
8 A Behind them comes SASHA, 20s, they/them, carrying a duffel bag, and MARLON, 30s, nervous, carrying a flashlight that he keeps pointing at his own face.
9 D AIDEN (whispering): Marlon, the light.
10 D MARLON: Sorry. Sorry.
11 A ¶ WE SEE the three of them cross the waiting room.
12 A Aiden checks a hand-drawn map.
13 A Sasha stops at the fish tank and taps the glass, and Marlon trips on a chew toy that SQUEAKS loudly, and the beagle lifts its head, and all three freeze.
14 A ¶ ANGLE ON the beagle.
15 A It looks at them.
16 A It yawns.
17 A It goes back to sleep.
18 D SASHA: They're not even mad.
19 D AIDEN: Good. The safe is in Dr. Okafor's office. Down the hall, second door.
20 D MARLON: Why would a vet clinic have a safe?
21 D AIDEN: Because Okafor keeps the old man's ring in it. The one worth sixty thousand dollars.
22 D SASHA: You mean the ring he's been telling everyone is his dead wife's.
23 D AIDEN: Which it isn't. He bought it from the jeweler's two weeks after she left him. I have the receipt.
24 D MARLON: So we're not stealing it. We're, like, returning it.
25 D SASHA: To who?
26 D MARLON: To the universe.
27 D SASHA: That is the worst plan I have ever heard, and I helped build the plan.
28 D AIDEN: Shh. Both of you.
29 A ¶ They move down the hall.
30 A Aiden pushes a door open, and Sasha slips inside.
31 A Marlon waits at the threshold with the flashlight pointing at the floor like a good boy.

### SCENE s05150_3 | INT. UNIT 214 - LATER
Detected names (may be incomplete or contain aliases): PHONE, PRIYA, TOBY
1 A ¶ Boxes stacked by the door.
2 A The woman sits on the rocking horse crate, calm, scrolling.
3 A ¶ ON PHONE (TEXT FROM NELL): hello??
4 A Priya answer me
5 D PRIYA (into phone, flat): I found it, Nell. All of it.
6 A ¶ Toby leans on the doorframe, watching the rain.
7 D TOBY: You want me to turn the light back on in the hall?
8 D PRIYA: Leave it.
9 A ¶ Rain.
10 A The drip in the bucket.
11 A The mirror, quiet.
12 A ¶ SMASH CUT TO BLACK.

### SCENE s05137 | INT. NIGHT BUS - LOWER DECK - NIGHT
Detected names (may be incomplete or contain aliases): WALTER, EDITH, ALISTAIR, TOMMY
1 A ¶ 1953.
2 A London, fog thick as wet wool against the windows.
3 A The bus lurches through an empty Bayswater, its engine groaning like an old man climbing stairs.
4 A ¶ Edith Marsh, 30s, a nurse in a navy coat with the cap folded in her lap, sits near the back.
5 A Her shoes are scuffed from a double shift.
6 A Across the aisle, Walter Penn, 60s, a conductor with a ticket machine strapped to his chest, leans on the rail and yawns without apology.
7 A ¶ ANGLE ON the dim bulb overhead, flickering, throwing yellow across faces.
8 A ¶ Near the front, Alistair Crane, 40s, in a good tweed overcoat too warm for the night, reads a folded newspaper he is not reading, while beside him a boy, Tommy, 10, in a cap too big for him, kicks his heels against the seat and watches the rain run in lines down the glass, and Walter checks his watch and the clock above the driver and the road ahead, all in one practised sweep.
9 D WALTER: Fares, please. Fares. Last bus tonight, ladies and gentlemen. Last bus and last chance.
10 D EDITH (tired, smiling): You say that every night, Mr Penn.
11 D WALTER: And every night I mean it, Miss Marsh.
12 A ¶ WE SEE Alistair's gloved hand tighten on the newspaper.
13 D ALISTAIR (without looking up): The boy has no ticket.
14 D TOMMY (small): Da says it's all right.
15 D ALISTAIR: Does he.
16 D WALTER (gently): Where's your da, lad?
17 D TOMMY: Home. He's poorly.
18 A ¶ Silence.
19 A The bus turns a corner, and everyone sways together.
20 A ¶ CLOSE ON Tommy's coat sleeve.
21 A The cuff is worn through.
22 A Edith sees it.
23 D EDITH (rising, crossing the aisle): I'll pay his fare. Here. A tuppence, is it?
24 D WALTER: Threepence from here, miss.
25 D EDITH: Then threepence.
26 A ¶ She sets the coins in the machine's tray.
27 A Alistair folds the newspaper at last, slow and exact, and looks at her for the first time.
28 D ALISTAIR: That's very generous. I wonder you can afford it, on a nurse's wage.
29 D EDITH (level): I wonder you can afford that coat, on whatever it is you do.
30 D WALTER (a warning): Now then.
31 D ALISTAIR: I do very well, thank you. I take an interest in people who leave their patients at night.
32 D EDITH: I haven't left anyone.
33 D ALISTAIR (softly): Mrs Harcourt, in the end bed. She'd be a good deal more comfortable if you'd stayed.
34 A ¶ Edith goes still.
35 A The engine drones.
36 A Tommy has stopped kicking.
37 A ¶ BACK TO SCENE: the bus slows at a stop where no one waits, the doors hiss, and cold air comes in carrying the smell of coal smoke.
38 D EDITH (very quiet): Who are you?
39 D ALISTAIR: Someone who reads the ward reports.
40 D WALTER: I think, sir, you'd best get off here.
41 D ALISTAIR: I think I'll ride to the terminus, conductor. I've paid.
42 D TOMMY (tugging Edith's sleeve): Miss, is he a policeman?
43 D EDITH (a long beat): No, love. I think he's only lonely.
44 A ¶ Alistair's face flickers, the tiniest crack.
45 A He looks at the boy, then at the fogged window, then at his own reflection, which looks like someone he would rather not be.
46 D ALISTAIR (low): Mrs Harcourt died at nine. I was her son.
47 D EDITH (stricken): I'm so sorry. I didn't know.
48 D ALISTAIR: No. Nobody did. She said you were kind.
49 A ¶ Walter takes off his cap.
50 A The doors hiss shut.
51 A The bus pulls away into the fog, and no one says anything else.

### SCENE s05181 | INT. ST. ALDWYN'S HOSPITAL - MAIN CORRIDOR - NIGHT
Detected names (may be incomplete or contain aliases): MARISOL VEGA, PHONE, HELEN TEAGUE, BRAM OKONKWO, JUNO
1 A ¶ Victorian brick.
2 A Gas-lamp fittings bolted to bare wiring.
3 A Long and green and empty.
4 A ¶ Rain hammers the tall windows.
5 A ¶ Wind HOWLS through a cracked pane.
6 A ¶ MARISOL VEGA, 30s, night nurse, pushes a squeaking cart.
7 A Her badge swings.
8 A Her eyes don't.
9 A ¶ ON PHONE (TEXT): where r u
10 A ¶ She doesn't answer.
11 A Pockets it.
12 A ¶ DR. HELEN TEAGUE, 50s, surgeon, strides out of the stairwell.
13 A Coat open.
14 A Coffee in a shaking fist.
15 D TEAGUE: You're late with the rounds.
16 D MARISOL: You're early for the shift.
17 A ¶ Teague shrugs.
18 A Drinks.
19 A ¶ The radiators CLANK.
20 A Pipes GROAN.
21 A A lamp flickers.
22 A ¶ Overhead, thunder ROLLS across the roof like furniture.
23 A ¶ BRAM OKONKWO, 20s, orderly, jogs in from the east wing.
24 A Wet sneakers.
25 A Wide eyes.
26 D BRAM: Ward Six. Bed nine. He's gone.
27 D TEAGUE: Gone how?
28 D BRAM: Gone gone. Bed's empty. Window's open.
29 A ¶ Marisol and Teague trade a look.
30 A She nods.
31 A She nods.
32 A ¶ Marisol's phone BUZZES.
33 A ¶ ON PHONE (TEXT): pick up. now.
34 A ¶ She answers.
35 A Speaker on.
36 D JUNO [V.O.] (filtered, tinny): Marisol, tell me you're still in the building.
37 D MARISOL: I'm in the corridor. With Teague.
38 D JUNO [V.O.]: Is she wearing the grey coat?
39 A ¶ Marisol looks.
40 A Teague looks down at her coat.
41 A Grey.
42 D MARISOL: Yes.
43 D JUNO [V.O.]: Then walk away from her. Slowly.
44 A ¶ Teague sets her coffee down.
45 A Slowly.
46 D TEAGUE: Who is that?
47 D MARISOL: Nobody.
48 A ¶ Pipes CLANK.
49 A The lamp DIES.
50 A Rain.
51 A Dark.
52 A A single emergency bulb hums red.
53 A ¶ Bram steps back.
54 A Teague steps forward.
55 A Marisol steps between.
56 D BRAM: Somebody tell me what's happening.
57 A ¶ Nobody does.

### SCENE s05049 | EXT. DUSTY CROSSROADS - FOOD TRUCK - DAY
Detected names (may be incomplete or contain aliases): BRISKET, INSIDE, SADIE KROLL, CLETUS, MARSHAL REEVES, JOLENE
1 A ¶ A weathered truck painted "BEANS & BRISKET - SINCE YESTERDAY" squats in the sun.
2 A Heat shimmers.
3 A A line of two teenagers in cowboy hats waits at the window while a mangy dog sleeps under the awning.
4 A ¶ INSIDE, SADIE KROLL, 40s, cook, jaw like a knuckle, slaps patties on the flat-top.
5 A Her brother-in-law CLETUS, 50s, leans on the counter pretending to count money.
6 A At the window, a stranger in a long duster, MARSHAL REEVES, 60s, sets down his hat.
7 A And in the corner, her teenage niece JOLENE, 17, wipes a spoon and watches everything.
8 A ¶ CLOSE ON Reeves's badge, half hidden under the duster.
9 D REEVES: Two plates. And a word with Cletus.
10 D CLETUS (laughing too loud): Marshal! Long way from town.
11 D SADIE (not turning from the grill): He's not here for beans, Cletus.
12 A ¶ The dog LIFTS its head.
13 A A screen door SLAMS in the distance.
14 D REEVES (quietly): Where's the payroll box, Cletus?
15 A ¶ ANGLE ON Jolene's hand sliding a cleaver off the shelf.
16 D JOLENE: Uncle Cletus, he's got a warrant folded in his boot.
17 D CLETUS (whispering): Jolene, put that down.
18 D SADIE (spinning around with a spatula held like a pistol): Nobody's cutting anybody. Marshal, sit. Eat. Then we'll talk.
19 D REEVES (tipping his hat back, almost smiling): Sadie, you've never once made it easy.
20 A ¶ BACK TO SCENE: the two teenagers bolt, the dog barks, a plate of brisket hits the dirt, and somewhere in the truck a timer DINGS.

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

### SCENE s05171_0 | EXT. CIVIC PLAZA - CLIMATE MARCH - DAY
Detected names (may be incomplete or contain aliases): RENA, BEA, PROTESTERS
1 A ¶ A river of cardboard signs.
2 A Drums.
3 A A bullhorn SQUEALS and dies.
4 D RENA [V.O.]: Three thousand people, one bank across the square, and nobody looking at the loading dock. That's the whole trick. Be loud somewhere else.
5 A ¶ RENA (30s, green vest, laminated MARSHAL badge) walks against the crowd, while BEA (20s, same vest, clipboard) cuts through the PROTESTERS ahead of her, a backpack riding high on her shoulders, and above them both a banner reading THERE IS NO PLANET B snaps in the wind as a helicopter's rotor THUMPS somewhere over the glass towers.
6 D PROTESTERS (chanting): Pay for it! Pay for it! Pay for it!
7 A ¶ Rena catches up.
8 A Bea doesn't slow.
9 D RENA: You're early.
10 D BEA: You're late. She said two-ten.
11 D RENA: She said two-fifteen.
12 D BEA: She said whatever gets us paid.
13 A ¶ A cardboard polar bear bobs between them.
14 A Bea ducks it.
15 A Rena doesn't.
16 D RENA [V.O.]: Bea never trusted a plan she didn't write. Which was fair. She wrote this one.
17 A ¶ A whistle SHRIEKS.
18 A Police on bikes line the east side of the plaza.
19 A Bea steers Rena by the elbow toward the alley behind the bank.
20 D BEA: Badge.
21 D RENA: On.
22 D BEA: Truck?
23 D RENA: Ten minutes out. She's driving.
24 A ¶ Bea stops short.
25 A Stares at her.
26 D BEA: She's driving? She said she'd be here.
27 D RENA: She's here. I mean she's close. She's in the truck. Bea, she's fine.
28 D PROTESTERS (chanting, louder): Pay for it! Pay for it!
29 A ¶ A speaker on the stage starts a speech.
30 A The crowd ROARS.
31 A Bea uses the noise and cracks the service gate with a bolt cutter.
32 A The lock CLANKS onto the pavement.
33 D BEA: Then she's late and she's here. Pick one.
34 D RENA [V.O.]: Forty seconds to the dock. Four minutes inside. Everybody on that square would remember the speech and nobody the van.
35 A ¶ They slip through.
36 A The gate CLANGS shut behind them.
37 A The chanting drops to a muffled pulse.

### SCENE s05034 | INT. LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): NARRATOR, LORETTA, DEV, PRIYA, OSWALD, THE TALL MAN, DRIPPING YELLOW SLICKER
1 A ¶ Fluorescent light, a dozen washers turning slow, lukewarm steam on the windows.
2 A Four people wait out their cycles.
3 D NARRATOR [V.O.]: This is the last time they will all be in the same room, though none of them knows it yet.
4 D LORETTA (folding a pillowcase, humming): My mother said never wash a dead man's shirts. I said, Ma, they're only shirts.
5 D DEV (not looking up from his phone, thumbing a message): Cheap soap makes more suds. Doesn't make it clean.
6 D PRIYA (holding a hot towel to her cheek, watching the door): Who's the guy outside? He's been standing by the bins for twenty minutes.
7 D OSWALD (stirring a paper cup of coffee, shrugging): Waiting on a dryer, probably. Everybody waits on something.
8 A ¶ The bell over the door jingles.
9 A A TALL MAN IN A DRIPPING YELLOW SLICKER steps in, carrying a laundry bag that is much too heavy and much too still.
10 D NARRATOR [V.O.]: Calm lasts exactly as long as the first drip hitting the tile.
11 D THE TALL MAN (setting the bag down gently, smiling): Evening. Any machines free? I've a bit of a mess to wash.
12 A ¶ The bag shifts.
13 A Nobody says a word.
14 A Every washer in the room stops spinning at once.
