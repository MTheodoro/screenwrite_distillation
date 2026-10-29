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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_copusB/group_09002.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

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
