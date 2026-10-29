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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_copusA/group_28002.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s05131 | INT. DELIVERY WAREHOUSE - LOADING DOCK - NIGHT
Detected names (may be incomplete or contain aliases): ADRIAN, KESTREL
1 A ¶ The warehouse is very big and very cold.
2 A Yellow lamps hum over rows of brown boxes.
3 A Outside, snow falls on the empty parking lot.
4 A ¶ ADRIAN, 40s, stands next to a pallet.
5 A He holds a small black phone.
6 A A forklift is silent behind him.
7 A ¶ A side door SLAMS.
8 A KESTREL, 30s, walks in.
9 A They wear a gray coat and carry no bag.
10 D ADRIAN: You are late. I said eleven.
11 D KESTREL: Traffic was bad. Also, I do not like this place.
12 A ¶ He looks at them for a long time.
13 A His hand moves to the pallet, slowly.
14 D ADRIAN: Where is the package?
15 D KESTREL: It is safe. First you tell me who sold my name.
16 A ¶ The phone BUZZES in his hand.
17 A He does not look at it.
18 A Above them, the cold wind makes the roof metal sing.
19 D ADRIAN: Nobody sold. You make a story in your head.
20 D KESTREL: They told me you would say this.
21 A ¶ This is the last time they will trust anyone in this city.
22 A ¶ He takes one step forward.
23 A She, no, they, do not move.
24 A A truck engine RUMBLES far away.
25 D ADRIAN: Give me the package. Please.
26 D KESTREL: Give me the name.
27 A ¶ He opens his coat.
28 A A metal box CLICKS on the floor between them.

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
