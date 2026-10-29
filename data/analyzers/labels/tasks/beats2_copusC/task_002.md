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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_copusC/group_39002.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

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

### SCENE s05058 | EXT. FISHING TRAWLER "MARGIT ANN" - DECK - DAWN
Detected names (may be incomplete or contain aliases): ANIKA, ROY, TEO
1 A ¶ Grey sea.
2 A Grey sky.
3 A Gulls wheel overhead.
4 A ¶ Two deckhands haul nets, whistling.
5 A A third coils rope and is bored out of his mind.
6 A Everything is fine.
7 A ¶ Captain Roy Dunmore, 50s, leans on the rail with a mug, watching the horizon.
8 A Beside him, Dr. Anika Rao, 30s, sits on an upturned crate, clipboard on her knee.
9 A She is the ship's medic by contract and by accident.
10 D ANIKA: Quietest trip I've had in months.
11 D ROY: Don't say that.
12 D ANIKA: Why not?
13 D ROY: You know why not.
14 A ¶ The deckhands laugh at something.
15 A A gull lands on the winch.
16 A ¶ WHAM.
17 A ¶ A net swings loose.
18 A It slams into the deckhand's back.
19 A He goes down hard.
20 A ¶ TEO, 20s, a deckhand, lies on the planks, face grey, one arm pinned.
21 D ANIKA: Don't move him!
22 D ROY: Get the line off him!
23 A ¶ The two deckhands scramble.
24 A The gulls scatter.
25 A Roy and Anika drop to their knees at the same time and almost collide.
26 D ANIKA: Teo. Teo, look at me. Can you feel your hands?
27 D TEO (strained): No.
28 D ANIKA: Okay. That's okay. Roy, I need the board and I need it flat.
29 D ROY: Board's in the wheelhouse. Two minutes.
30 D ANIKA: You don't have two minutes.
31 D ROY: Then tell me what to do.
32 D ANIKA: Hold his head. Gently. Like it's glass.
33 A ¶ Roy does.
34 A Anika's hands move fast, over the neck, the ribs, the pulse.
35 D TEO: Doc. Am I
36 D ANIKA: You're not going anywhere. I promise.
37 D ROY (low): You can't promise that.
38 D ANIKA: Watch me.
39 A ¶ This is the last time any of them will take the sea for granted.
40 A ¶ The deckhands return with the board.
41 A Together, they roll him.
