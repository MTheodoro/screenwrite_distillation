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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_opusB/group_07006.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00018 | INT. FERRYBOAT SNACK BAR - AFTERNOON
Detected names (may be incomplete or contain aliases): GRANDPA EZEKIEL, PIPPA, JUNIOR
1 A ¶ Plastic chairs bolted down.
2 A Gulls wheel past the window.
3 A GRANDPA EZEKIEL (70s, cardigan, newspaper folded in quarters) stirs his coffee while his granddaughter PIPPA (9, bandaged knee, sticker book) turns pages beside him and her older brother JUNIOR (14, hood up, one earbud in) slouches opposite, ignoring both and sliding his sandwich crust from one side of the plate to the other.
4 D PIPPA: Grandpa, did you ever fall off a boat?
5 D EZEKIEL: Twice.
6 D PIPPA: Did it hurt?
7 D EZEKIEL: The second time, no. By then I knew how.
8 D JUNIOR: That's not how that works.
9 D EZEKIEL: It is if you do it right.
10 D PIPPA: Show me.
11 D EZEKIEL: Not on this boat.
12 D JUNIOR: Can we get off at the next stop?
13 D EZEKIEL: There's no next stop. It's a ferry.
14 D PIPPA: Then we're stuck.
15 D EZEKIEL: Stuck is a strong word. We're simply committed.

### SCENE s00012 | INT. LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): BIRGITTA LUNDQVIST, TOBIAS, GIRL, NOOR, MAN
1 A ¶ Fluorescent tubes buzz over a row of dryers, half of them spinning.
2 A Rain streaks the front glass.
3 A A vending machine hums in the corner.
4 A ¶ BIRGITTA LUNDQVIST (30s, scrubs under a raincoat, tired eyes) feeds quarters into a dryer.
5 A Her son TOBIAS (8, pajamas, rain boots on the wrong feet) sits on a folding table swinging his legs and holding a plastic dinosaur.
6 A Against the wall, a GIRL (10, school uniform, backpack on both shoulders) sits alone with a library book and does not look up.
7 D TOBIAS: Mom, why is it taking so long?
8 D BIRGITTA: Because it's wet, bud.
9 D TOBIAS: Everything's wet. It's raining.
10 A ¶ Birgitta laughs, a short breath of a laugh.
11 A She shuts the dryer door and presses the button.
12 A The drum begins to turn.
13 A Tobias hops down, wanders to the vending machine, and presses his nose to the glass while Birgitta checks her phone, frowns at it, and turns the screen face-down on the table, and the Girl, without lifting her eyes from the page, turns one page over.
14 D TOBIAS [CONT'D]: Can I get the gummy ones?
15 D BIRGITTA: It's ten at night.
16 D TOBIAS: It's eleven. The clock says.
17 A ¶ Birgitta looks at the clock.
18 A He's right.
19 A She sighs and digs in her pocket for coins.
20 A ¶ Tobias carries his dinosaur over to the Girl and holds it out, nose-first, a ceremonial offering.
21 D TOBIAS [CONT'D]: This is Gary. He's a stegosaurus.
22 A ¶ The Girl looks up.
23 A A long, measuring look.
24 A Then she takes Gary and studies his plates.
25 D GIRL: Stegosaurs had tiny brains.
26 D TOBIAS: Gary's smart.
27 D GIRL: Then he's not a stegosaurus.
28 A ¶ Tobias considers this, deeply wounded, and turns to his mother for ruling.
29 A Birgitta crosses over, dropping her coins into the machine on the way, the machine clunking out a bag of gummies, and kneels between the two children.
30 D BIRGITTA: Hey. Where are your parents?
31 A ¶ The Girl closes her book on her finger.
32 D GIRL: My dad's coming. He's parking.
33 D BIRGITTA: It's been an hour.
34 D GIRL: It's a hard lot to park in.
35 A ¶ Birgitta looks toward the glass.
36 A The lot outside is empty except for her own car, rain bouncing off the hood.
37 D BIRGITTA: What's your name, sweetheart?
38 D GIRL: Noor.
39 D BIRGITTA: Noor, I'm going to call someone to help us find your dad. Okay?
40 A ¶ Noor's face changes.
41 A Her shoulders come up.
42 A She grabs her backpack straps in both fists.
43 D NOOR: Don't. He'll be mad. I'm not supposed to tell people where we live.
44 D BIRGITTA: I don't need to know where you live.
45 D NOOR: Then who are you calling?
46 A ¶ The front door BANGS open.
47 A A MAN (40s, wet work jacket, breathing hard) stands in the doorway scanning the room.
48 A He sees Noor.
49 A Everything in his posture collapses at once.
50 A Tobias, startled, drops the gummies.
51 A Birgitta rises in front of both children.
52 D MAN: Noor.
53 D NOOR: Dad.
54 A ¶ She runs to him.
55 A He drops to his knees and wraps both arms around her.
56 A Birgitta watches the two of them, her hand on Tobias's head.
57 D BIRGITTA: She's been here an hour.
58 D MAN: The truck wouldn't start. I ran all the way from the bridge. Thank you. Thank you for --
59 D BIRGITTA: Her name is Noor?
60 D MAN: Noor. Yes.
61 A ¶ He kisses the top of her head.
62 A Lifts her.
63 A She buries her face in his collar.
64 A Tobias picks up his gummies and Gary and trots back to his mother.
65 D TOBIAS: Mom? Gary says goodbye.
66 A ¶ Noor lifts her head from her father's shoulder and, very seriously, waves.

### SCENE s01103 | INT. FLOODED CELLAR OF A VICTORIAN ASYLUM - NIGHT
Detected names (may be incomplete or contain aliases): CORDELIA MAXWELL-ODUYA, ARTEMUS PIKE, VOICE
1 A ¶ Ankle-deep black water.
2 A Rusted bed frames stacked against slick brick walls.
3 A A single lantern hangs from a chain, throwing a dim yellow circle.
4 A Somewhere, dripping.
5 A ¶ DR. CORDELIA MAXWELL-ODUYA, 40s, in a tailored coat and rubber boots, moves slowly through the water with a lamp raised high.
6 A Behind her, her assistant, ARTEMUS PIKE, 20s, frightened and trying not to show it, clutches a camera.
7 D CORDELIA: Mind the step.
8 D ARTEMUS: There's a step?
9 D CORDELIA: There was. Somewhere.
10 A ¶ Water ripples around her boots.
11 A A bed frame creaks against the wall.
12 A Artemus lifts the camera, thumbs the shutter.
13 A The flash burns the room white for an instant: iron frames, wet bricks, and a figure standing against the far wall.
14 A ¶ Cordelia freezes.
15 A Artemus lowers the camera.
16 A Darkness again, the lantern small.
17 D ARTEMUS [CONT'D] (whispering): Did you see --
18 D CORDELIA: Yes.
19 D ARTEMUS: It looked like --
20 D CORDELIA: I said yes, Artemus.
21 A ¶ Another creak.
22 A The lantern chain sways.
23 A The yellow circle swings across the wall and finds nothing but brick.
24 D ARTEMUS: Doctor, I think we should go.
25 D CORDELIA: We came for a reason.
26 D ARTEMUS: I've forgotten the reason.
27 D CORDELIA: Patient forty-one. Mary Hargreave. Locked here in eighteen-ninety.
28 D ARTEMUS: For what?
29 D CORDELIA: For hearing things.
30 A ¶ A soft sound rolls through the water.
31 A A woman's voice, thin as paper, humming a lullaby.
32 A Artemus's hands tighten on the camera.
33 A Cordelia's lamp trembles.
34 D VOICE [O.S.] (humming, then singing): Hush, little one, the water's deep...
35 D ARTEMUS: Doctor.
36 D CORDELIA: Don't answer her.
37 D ARTEMUS: I wasn't going to.
38 D VOICE [O.S.]: ...hush, little one, I'll never sleep...
39 A ¶ The song comes closer.
40 A Water stirs between them.
41 A Something pale rises beneath the surface, a hand, then a wrist, then a face.
42 D CORDELIA (whispering at the same moment as Artemus): Do not look.
43 D ARTEMUS: ^Do not look.
44 A ¶ They both turn their faces.
45 A The singing stops.
46 A The hand breaks the surface a foot from Cordelia's boot, fingers open, trembling.
47 A It closes around her ankle.
48 A ¶ She screams.
49 A The lantern chain snaps.
50 A Darkness.
51 A ¶ Artemus's camera flashes.
52 A In the white blink: Cordelia on her knees, and a woman in a rotting nightgown holding her ankle, mouth open in a soundless song.
53 A ¶ Black.
54 A ¶ The water settles.
55 A The dripping resumes.

### SCENE s01038 | INT. FUNERAL HOME - VIEWING ROOM B - DAY
Detected names (may be incomplete or contain aliases): ELOISE FARNSWORTH, CAMILA BRANDAO, DOROTHEA KWAN
1 A ¶ Velvet drapes.
2 A A casket at the far end, closed, spray of lilies.
3 A Folding chairs facing a mahogany table, court reporter's stenotype ticking beside it.
4 A ¶ ELOISE FARNSWORTH, 70s, black gloves, rosary wrapped around one hand, sits very straight.
5 A On her left, CAMILA BRANDAO, 40s, her attorney, legal pad flat.
6 A Across the table, DOROTHEA KWAN, 50s, opposing counsel, reading glasses on a chain.
7 D KWAN: Mrs. Farnsworth, when did you last see your husband alive?
8 D ELOISE: Tuesday.
9 D KWAN: And the will?
10 A ¶ Eloise's rosary clicks once.
11 D ELOISE: What about it?
12 D KWAN: Did she witness it?
13 D BRANDAO: Objection. Who's "she"?
14 D KWAN: The nurse.
15 D ELOISE: Mrs. Okafor.
16 D KWAN: She told us she wasn't present.
17 A ¶ Eloise stares at the casket.
18 A Her fingers work the beads, one, two, three.
19 D BRANDAO: Let the record show my client has not been served that statement.
20 D KWAN: It's in your folder.
21 A ¶ Brandao flips pages.
22 A Stops.
23 A Her thumb presses a corner of paper until it whitens.
24 D ELOISE: I'd like some water.
25 A ¶ Kwan nods to the reporter.
26 A A pitcher is brought.
27 A Eloise's glove shakes as she lifts the cup, then stills.

### SCENE s01083 | INT. WIZARD'S LIBRARY - THE ROOM OF TURNING SHELVES - NIGHT
Detected names (may be incomplete or contain aliases): ARCHIVIST THESSALY MOORE, KESTREL DONOVAN-ABIOLA, VOICE, RAVEN-HEADED STRANGER, SCRIBE
1 A ¶ Shelves rotate on slow brass gears.
2 A Books drift between them on their own.
3 A A fire burns in a hearth with no chimney.
4 A Candles hover.
5 A ¶ ARCHIVIST THESSALY MOORE, 40s, ink-stained sleeves, spectacles on a cord, kneels at a lectern, copying a rune.
6 A Beside her, apprentice KESTREL DONOVAN-ABIOLA, 16, holds a lantern.
7 A Both ignore the voice murmuring through the walls.
8 D VOICE [V.O.] (from the stone itself): Found you.
9 A ¶ Thessaly's quill stops.
10 A Kestrel steps closer to her.
11 D KESTREL: Was that the library?
12 D THESSALY: The library doesn't speak.
13 D VOICE [V.O.]: Oh, but I do. Thessaly Moore. You took something that is mine.
14 D THESSALY (not looking up): I borrowed a book.
15 D VOICE [V.O.]: A book. Yes. Open to the last page and read me what it says.
16 A ¶ Kestrel pulls a leather volume from the shelf.
17 A It is warm in her hands.
18 A She flips to the last page.
19 D KESTREL (reading): "Whoever opens this book wakes the one who wrote it."
20 D THESSALY: Put it back. Slowly.
21 A ¶ Kestrel reaches.
22 A The shelf rotates away from her.
23 A The book will not return to its slot.
24 D VOICE [V.O.]: Do not trouble yourself. I am already awake.
25 A ¶ The candles gutter.
26 A In the center of the room, the air thickens.
27 A A tall figure forms in a coat of gray feathers.
28 A A RAVEN-HEADED STRANGER, calm, hands clasped.
29 A Its beak glints.
30 D RAVEN-HEADED STRANGER: Good evening. I am the Scribe.
31 D THESSALY: I know who you are.
32 D SCRIBE: Then you know why I came.
33 A ¶ Kestrel edges behind the lectern.
34 A Thessaly rises, quill still in hand.
35 D THESSALY: The pages were never yours. They belonged to the kingdom.
36 D SCRIBE: I wrote the kingdom. Every war. Every winter. Every funeral. It is all mine.
37 D KESTREL (quietly): Thessaly, his shadow is moving wrong.
38 A ¶ It is.
39 A The shadow on the floor writes in the air, slow letters curling in black smoke.
40 D THESSALY: Don't read it.
41 D KESTREL: I can't help it.
42 A ¶ She reads.
43 A Her eyes widen.
44 D KESTREL [CONT'D]: It says my name.
45 D SCRIBE: Kestrel Donovan-Abiola. Born in the ninth year of the drought. Died in the eleventh page of tonight.
46 D THESSALY (stepping between them): Then turn the page.
47 D SCRIBE: I would, if you could stop me.
48 A ¶ Thessaly raises the quill.
49 A The tip ignites white.
50 A She draws a line across the air.
51 A A bright barrier of light slices the room.
52 A ¶ The Scribe flinches.
53 A Feathers scatter.
54 D SCRIBE [CONT'D] (a hiss): That ink is older than I am.
55 D THESSALY: Good. It remembers you.
56 A ¶ The shelves spin faster.
57 A The book in Kestrel's hands flares gold.
58 A She slams it shut.
59 A The Scribe shrieks.
60 D SCRIBE: Give it back!
61 D KESTREL (holding it close): No.
62 A ¶ The hearth fire roars.
63 A The room tilts.
64 A Candles fall like stars.
65 D SCRIBE [V.O.] (already fading): Then I will wait. Stories do.
66 A ¶ The figure dissolves into black ink that runs down the wall and soaks into the stone.
67 A The shelves slow.
68 A The candles steady.
69 A ¶ Silence.
70 A Thessaly lowers her quill, trembling.
71 A Kestrel lets out a breath.
72 D KESTREL: Is it over?
73 D THESSALY: Not while the book is open.
74 A ¶ Kestrel looks down.
75 A The cover is warm.
76 A Something inside it beats.
