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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_opusC/group_13002.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00014 | INT. COURTROOM ABOARD A MOORED RIVER FERRY - DAY
Detected names (may be incomplete or contain aliases): JUDGE AUGUSTINE FAIRWEATHER, MARCELLA DE LUCA, PERCY, NAKAMURA, DISTRICT ATTORNEY WENDELL OSEI, WOMAN, LIEUTENANT SABINE ARROYO
1 A ¶ A converted paddle steamer.
2 A The bench is a captain's table.
3 A Brass portholes line the walls, and the floor lifts gently with the river's swell.
4 A ¶ JUDGE AUGUSTINE FAIRWEATHER (60s, silver hair, half-moon glasses) peers down from the bench.
5 A At the defense table sit MARCELLA DE LUCA (40s, sharp suit, pearl earrings) and her client, PERCIVAL "PERCY" NAKAMURA (50s, rumpled, calm to the point of serenity).
6 A Across the aisle stands DISTRICT ATTORNEY WENDELL OSEI (50s, booming baritone, fountain pen in his breast pocket).
7 D JUDGE FAIRWEATHER: Counsel, we've been over the manifest three times. Is there any objection to its admission?
8 D DE LUCA: None, Your Honor.
9 D OSEI: None, Your Honor.
10 A ¶ They answer at the same time.
11 A Percy glances between them with polite interest.
12 D JUDGE FAIRWEATHER: Then the manifest is admitted, and I would like to thank both counsel for a refreshingly uneventful morning.
13 D OSEI: The People have nothing further.
14 D DE LUCA: Nor does the defense.
15 A ¶ The Judge removes his glasses and pinches the bridge of his nose.
16 A A gull cries outside a porthole.
17 A The ferry creaks.
18 D JUDGE FAIRWEATHER: Let the record reflect we'll adjourn for lunch.
19 A ¶ He reaches for his gavel.
20 A The courtroom door swings open.
21 A ¶ A WOMAN (30s, cargo pants, hair in a braid, a ring of keys at her belt) steps in.
22 A LIEUTENANT SABINE ARROYO, according to the badge on her chest.
23 A She carries a sealed evidence bag in both hands, and she walks the aisle with the careful posture of someone carrying something that might go off.
24 D ARROYO: Your Honor, forgive the interruption. I have a log from the engine room.
25 D OSEI: Lieutenant, I wasn't informed --
26 D ARROYO: Neither was I. I found it ten minutes ago.
27 A ¶ She sets the bag on the bench.
28 A The Judge opens it, slides out a bound ledger, and flips to a page tabbed in red.
29 A His face does not move, but his eyes do.
30 D JUDGE FAIRWEATHER: Mr. Nakamura. Were you aboard the Annabelle on the night of March ninth?
31 D PERCY: I was not.
32 D JUDGE FAIRWEATHER: Then whose signature is this at the foot of the engineer's log?
33 A ¶ He turns the ledger around.
34 A Percy leans over.
35 A Looks.
36 A Sits back with the same serene smile, though his hand has found De Luca's sleeve.
37 D DE LUCA: Your Honor, I'd like a moment with my client.
38 D OSEI: Your Honor, the People move to continue.
39 A ¶ They speak together again, but this time with an edge, neither yielding.
40 D DE LUCA: This is an ambush. ^ OSEI This is evidence.
41 A ¶ The Judge raises his gavel and brings it down once.
42 A The ferry rocks beneath it.
43 D JUDGE FAIRWEATHER: Mr. Osei, sit down. Ms. De Luca, you may confer. Lieutenant Arroyo, you will remain exactly where you are.
44 A ¶ Arroyo nods, steps back, and folds her hands.
45 A Percy whispers something to De Luca.
46 A She goes pale.
47 A She looks at the Judge, then at the porthole, then at the river beyond.
48 D DE LUCA (quietly): Percy. Who is Annabelle?
49 A ¶ Percy smiles.
50 A The ferry creaks.

### SCENE s00002 | INT. DROWNED CATHEDRAL - BEEKEEPERS' LIBRARY - DUSK
Detected names (may be incomplete or contain aliases): TAMSIN HALE, BRAM, PIP, POLLY, SERAPH VANE
1 A ¶ Knee-deep green water fills the nave.
2 A Shelves of wax-sealed books rise like reefs from it, and bees drift between the pillars in slow gold ribbons.
3 A ¶ TAMSIN HALE (20s, barefoot, hair tied with twine) wades along a shelf, tracing spines with two fingers.
4 A Behind her, old BRAM (70s, white beard stained with honey) skims comb into a bucket.
5 A Beside the font, twin girls PIP and POLLY (10, identical, freckled) float paper boats made of recipe pages.
6 D TAMSIN: This one hums.
7 D BRAM: They all hum. Leave it be.
8 D POLLY: Pip says the roof is thinking again.
9 D PIP: I said it was dreaming.
10 A ¶ High above, a pane of old glass lets in the last amber light.
11 A The bees rise toward it, then settle.
12 A ¶ A figure pushes through the west door, shaking water from a long coat of feathers: SERAPH VANE (40s, tall, ink on her lips, a lantern with no flame).
13 A She stops, hearing the hum.
14 A Smiles faintly.
15 D SERAPH: Is the keeper in?
16 D BRAM: The keeper is always in. He's just slow.
17 A ¶ Tamsin slides the humming book back into its place.
18 A The bees go quiet.

### SCENE s01052 | INT. DEEP-SPACE SURVEY CAPSULE - SLEEP CYCLE
Detected names (may be incomplete or contain aliases): TAMARA OSEI
1 A ¶ A tube the size of a van.
2 A Cramped.
3 A Every surface a panel or a cabinet.
4 A A single porthole shows a pinhole star field, motionless.
5 A ¶ TAMARA OSEI, 40s, floats in a sleeping bag strapped to the wall.
6 A Her eyes are open.
7 A She hasn't slept.
8 A ¶ She unzips.
9 A Drifts to the console.
10 A Types a command with one finger.
11 A ¶ A soft chime.
12 A A woman's recorded voice, calm, from the speaker.
13 D TAMARA [V.O.] (recording): Day four hundred and twelve. All systems nominal. Crew morale: fine.
14 A ¶ She stops the playback.
15 A Her thumb stays on the button.
16 A ¶ She opens a locker.
17 A Takes out a small paper photograph, creased.
18 A Holds it to the light.
19 A Puts it back without looking.
20 A ¶ She types again.
21 A Another chime.
22 D TAMARA [V.O., CONT'D] (recording): Day four hundred and thirteen. All systems nominal. Crew morale: fine.
23 A ¶ She plays it again.
24 A And again.
25 A Same words, same tone, same breath in the same place.
26 A ¶ She sets the recorder down.
27 A It spins slowly, tumbling in the air.
28 A ¶ She presses her palm flat to the porthole.
29 A The glass is cold.
30 A Her breath fogs it.
31 A ¶ She wipes it with her sleeve.
32 A The stars come back.
33 A ¶ She presses record.
34 D TAMARA: Day four hundred and fourteen.
35 A ¶ A long pause.
36 D TAMARA [CONT'D]: All systems nominal.
37 A ¶ She doesn't say the rest.
38 A She turns the recorder off and floats there, hand still against the glass.

### SCENE s01094 | INT. ABANDONED OBSERVATORY - DOME ROOM - NIGHT
Detected names (may be incomplete or contain aliases): HELENA VASQUEZ-MURRAY, DETECTIVE GRANT, TALL MAN
1 A ¶ A round chamber under a split copper dome.
2 A A huge brass telescope aimed at a hole in the roof where stars blink through.
3 A Dust like snow.
4 A Star charts curl on the walls.
5 A ¶ DR. HELENA VASQUEZ-MURRAY, 50s, trench coat over pajamas, mud on her boots, kneels by the telescope's base with a flashlight clenched in her teeth.
6 A She runs her fingers along the floor.
7 A Pulls up a loose board.
8 A Beneath it, a leather journal wrapped in oilcloth.
9 D HELENA (muffled by the flashlight): There you are.
10 A ¶ She takes the flashlight from her mouth.
11 A Unwraps the journal.
12 A Opens it to the first page.
13 A Reads in a whisper.
14 D HELENA [CONT'D]: "If you are reading this, I have already gone to see what the telescope shows after midnight."
15 A ¶ She turns a page.
16 A A hand-drawn sketch of the sky.
17 A Beside one star, a small red circle and the word NO.
18 D HELENA [CONT'D]: No what?
19 A ¶ Her phone buzzes in her pocket.
20 A She answers.
21 D DETECTIVE GRANT [V.O.] (over the phone): Helena, where are you?
22 D HELENA: Following the lead.
23 D DETECTIVE GRANT [V.O.]: At the observatory? I told you to wait for backup.
24 D HELENA: Backup is slow. The journal is here.
25 D DETECTIVE GRANT [V.O.]: Don't touch anything. We think Warrick didn't die alone.
26 D HELENA (shining the light across the floor): I'm not alone either.
27 A ¶ Footprints in the dust.
28 A Not hers.
29 A Wide, deliberate.
30 A They lead to the stairwell.
31 D DETECTIVE GRANT [V.O.]: Helena, did you hear me?
32 D HELENA: Stay on the line.
33 A ¶ She lays the phone on the telescope base.
34 A Rises.
35 A Follows the footprints with the light.
36 A They end at a door in the wall.
37 A Half open.
38 A A sliver of darkness behind it.
39 A ¶ A shape fills the gap.
40 A A TALL MAN in a gray overcoat, face hidden by a brimmed hat, steps into the dome.
41 A Slow.
42 A Unhurried.
43 A In one gloved hand he holds a brass key.
44 D TALL MAN: You found it before I did.
45 D HELENA (steady): You're Warrick's partner.
46 D TALL MAN: I was his student.
47 D HELENA: Did you kill him?
48 D TALL MAN (a pause): I closed the shutter. He opened it.
49 A ¶ Helena raises the journal.
50 A The Tall Man's eyes follow it.
51 D HELENA: Then tell me what the star is.
52 D TALL MAN: You already know.
53 D HELENA: Say it.
54 D DETECTIVE GRANT [V.O.] (tinny, from the telescope): Helena! Who are you talking to?
55 A ¶ The Tall Man glances at the phone.
56 A Then back at her.
57 A He lifts the key.
58 A Behind him, the dome's great shutter groans and begins to close, cutting the stars off one slice at a time.
59 D HELENA (shouting): Grant! Now!
60 A ¶ She hurls the journal across the floor.
61 A The Tall Man lunges for it.
62 A The dome slams shut.
63 A Darkness.
64 A A single crack of flashlight on the floor.
65 A ¶ Sirens, very far away.

### SCENE s00000 | INT. DRAINED ROLLER RINK - TEMPORARY COUNTY COURTROOM - DAY
Detected names (may be incomplete or contain aliases): ADAEZE OKAFOR, LEV BRANDT, JUDGE HOLLIS TRAN, CLERK
1 A ¶ A roller rink.
2 A Maple floor, warped by flood.
3 A Disco ball still hangs over the bench, wrapped in bubble wrap.
4 A ¶ Folding tables.
5 A Folding chairs.
6 A A flag on a mic stand.
7 A ¶ Courthouse is under repair.
8 A Justice is here instead.
9 A ¶ ADAEZE OKAFOR (40s, sharp navy suit, sneakers under the table, reading glasses pushed into cropped grey hair) stands at the defense table.
10 A Alone.
11 A Her client's chair is empty.
12 A ¶ Across the aisle: LEV BRANDT (50s, heavy, rumpled, a pastry crumb on his tie) shuffles exhibits.
13 A Calm.
14 A Too calm.
15 A ¶ On a raised DJ booth, now a bench: JUDGE HOLLIS TRAN (60s, silver braid over one shoulder, half-moon spectacles, a thermos of tea).
16 A She taps a gavel made from a skate wheel and a dowel.
17 A ¶ Rink speakers hiss.
18 D JUDGE TRAN: Back on the record.
19 D LEV: Your Honor, the People are ready.
20 D ADAEZE: The defense is not.
21 D JUDGE TRAN: Counsel, your client is late.
22 D ADAEZE: My client is in a hospital.
23 D LEV: Convenient.
24 D ADAEZE: Say that again.
25 D LEV: I said, convenient.
26 D JUDGE TRAN: Mr. Brandt.
27 D LEV: It is, Judge. Day three of trial. Day three of a medical emergency.
28 D ADAEZE: He had a seizure on the stairs.
29 D LEV: Which stairs?
30 D ADAEZE: The stairs of this building. The one with the leak.
31 A ¶ A drip.
32 A Somewhere.
33 A Plink.
34 A Plink.
35 A ¶ Everyone listens.
36 D JUDGE TRAN: I have a doctor's note?
37 D ADAEZE: I filed it at seven.
38 D LEV: I never received it.
39 D ADAEZE: I emailed you.
40 D LEV: My inbox says otherwise.
41 D ADAEZE: Your inbox says a lot of things.
42 D JUDGE TRAN: Enough.
43 A ¶ Silence.
44 A The disco ball turns a quarter inch in a draft.
45 A ¶ Lev smiles.
46 A Opens a folder.
47 A Slides one page onto the table.
48 D LEV: Then the People move to proceed in absentia.
49 D ADAEZE: Objection.
50 D JUDGE TRAN: Basis?
51 D ADAEZE: Every basis.
52 D LEV: She can't list one.
53 D ADAEZE: Sixth Amendment. Confrontation. Presence. Counsel of choice.
54 D LEV: He waived presence on Monday.
55 D ADAEZE: He did not.
56 D LEV: Page four of the waiver.
57 A ¶ Adaeze freezes.
58 A Hands go to her own stack.
59 A Flips.
60 A Flips.
61 D JUDGE TRAN: Ms. Okafor?
62 D ADAEZE: Page four.
63 A ¶ She finds it.
64 A Reads.
65 A Her jaw sets.
66 A ¶ A signature.
67 A Her client's.
68 A Dated Monday.
69 D ADAEZE [CONT'D]: That is not his hand.
70 D LEV: It is his hand.
71 D ADAEZE: He signs with a loop. This has no loop.
72 D LEV: People change.
73 D ADAEZE: Not in a week.
74 D JUDGE TRAN: Counsel, approach.
75 A ¶ They do.
76 A Skates of silence.
77 A Their shoes squeak on the maple.
78 D JUDGE TRAN [CONT'D] (low): Mr. Brandt. Where did you get this?
79 D LEV (low): From the clerk.
80 D ADAEZE (low): Which clerk?
81 D LEV: The one who works here.
82 D ADAEZE: There are four.
83 D LEV: The one with the lanyard.
84 D ADAEZE: They all have lanyards!
85 D JUDGE TRAN: Lower your voice.
86 D ADAEZE (hissing): You forged it.
87 D LEV: Careful.
88 D ADAEZE: Or you let someone forge it. Same thing.
89 D LEV: That is slander, counselor.
90 D JUDGE TRAN: Stop. Both of you.
91 A ¶ Beat.
92 A The drip: plink.
93 A ¶ Judge Tran lifts the page toward the light.
94 A Tilts it.
95 A Squints.
96 A ¶ Her thumb rubs the signature.
97 A Black comes away.
98 A Wet.
99 A ¶ She holds the thumb up for them to see.
100 D JUDGE TRAN [CONT'D]: Ink's still wet.
101 A ¶ Lev's smile dies.
102 D LEV: Your Honor, that's - that can't -
103 D ADAEZE: Monday, you said.
104 D LEV: The photocopier smears.
105 D JUDGE TRAN: It is a pen, Mr. Brandt. A felt-tip. Not a copier.
106 D LEV: I can explain.
107 D ADAEZE: Please. Do.
108 D LEV: It was a... a re-signing. For the file.
109 D JUDGE TRAN: By whom?
110 A ¶ Lev opens his mouth.
111 A Closes it.
112 A ¶ Behind him, the rink doors swing open.
113 A Wind.
114 A A clerk in a lanyard stands there, small, pale, holding a felt-tip pen like a dropped weapon.
115 D CLERK [O.S.]: I'm sorry. He said it was routine.
116 A ¶ Nobody moves.
117 D JUDGE TRAN (quiet): Mr. Brandt. Sit down.
118 A ¶ Lev sits.
119 A Slowly.
120 A His chair squeaks on the maple.
121 D ADAEZE: Your Honor, the defense moves for dismissal with prejudice.
122 D JUDGE TRAN: Granted.
123 A ¶ The skate-wheel gavel.
124 A One tap.
125 A Echo, bright against the rafters.
126 A ¶ Adaeze exhales.
127 A Takes off her glasses.
128 A Rubs her eyes.
129 D ADAEZE (to herself): Sneakers. Best decision I made all week.
130 A ¶ Judge Tran pours tea.
131 A Steam curls in the cold.
132 D JUDGE TRAN: Court is adjourned. Somebody turn that ball off.
133 A ¶ The disco ball stops turning.

### SCENE s01024 | INT. SMALL CLAIMS COURTROOM - FORMER SKATING RINK - DAY
Detected names (may be incomplete or contain aliases): JUDGE MARGUERITE VANCE, FELIX OYELARAN, SOLVEIG HARTMANN
1 A ¶ Bleachers for gallery.
2 A Judge's bench on a rink-side Zamboni platform.
3 A Painted lines still on the floor.
4 A ¶ JUDGE MARGUERITE VANCE, 60s, reading glasses, gavel in a fist.
5 A FELIX OYELARAN, 30s, sharp suit, stands at the plaintiff's mark.
6 A SOLVEIG HARTMANN, 40s, hands folded, at the defendant's.
7 D VANCE: Counselor, the exhibit.
8 D OYELARAN: Your Honor, my client's contract clearly states--
9 D HARTMANN: Objection. Contract was never signed.
10 D VANCE: Ms. Hartmann, let him finish.
11 D HARTMANN: He's misstating the--
12 D OYELARAN: I have it right here, page four--
13 D VANCE: Both of you.
14 A ¶ Oyelaran waves the paper.
15 A Hartmann steps toward him.
16 A Vance raises the gavel.
17 D HARTMANN: It's a forgery, Judge. He knows it.
18 D OYELARAN: That is a slander, and you know it.
19 D VANCE: Order!
20 D HARTMANN: Ask him who typed it!
21 D OYELARAN: Ask her why she hid the original!
22 A ¶ The gavel cracks.
23 A Once.
24 A Twice.
25 A A third time, splintering the handle.
26 D VANCE: Sit. Down.
27 A ¶ They sit.
28 A Silence.
29 A A skate guard coughs in the bleachers.

### SCENE s01102 | INT. WEDDING TENT IN A FLOODED MEADOW - NIGHT
Detected names (may be incomplete or contain aliases): MARISOL FERREIRA, ADEBAYO KUROSAWA, BERNADETTE, CALLUM OYELARAN, PIA
1 A ¶ Fairy lights sag.
2 A Rain drums the canvas.
3 A Muddy shoes in a pile by the dance floor.
4 A A three-tier cake leans, slightly.
5 A ¶ MARISOL FERREIRA, 30s, in a ruined white gown, stands on a chair holding a champagne bottle.
6 A Her groom, ADEBAYO KUROSAWA, 30s, soaked tux, stands below, arms raised to catch her.
7 A Aunt BERNADETTE, 60s, clutches a tray of canapés.
8 A The best man, CALLUM OYELARAN, 30s, tries to rescue the cake.
9 A The flower girl, PIA, 8, sits under a table with a kitten.
10 D MARISOL: Everyone, listen!
11 A ¶ Rain hammers louder.
12 A Nobody listens.
13 D ADEBAYO (to her): Marisol, come down.
14 D MARISOL (to herself): I will not cry. I will not cry.
15 D CALLUM (over his shoulder): Somebody help me with this cake!
16 D BERNADETTE: Not unless it floats!
17 A ¶ The canvas sags.
18 A Water pours through a seam onto the dance floor.
19 A Callum, Bernadette, and Adebayo dive for the cake as one.
20 A They collide, slide, and sit down hard in the mud.
21 A The cake tilts, hovers, then lands neatly on Callum's lap.
22 A ¶ Marisol stops.
23 A Stares.
24 A Starts to laugh.
25 D MARISOL (to the crowd, lifting the bottle): To the wettest wedding in the county!
26 A ¶ Pia crawls out from under the table, kitten in her arms.
27 A Adebayo reaches for Marisol's hand.
28 A She jumps down into his arms.

### SCENE s01091 | INT. PARKING GARAGE - LEVEL P4 - NIGHT
Detected names (may be incomplete or contain aliases): AGENT IRINA SOLOVYOV, AGENT KOFI MENSAH-BELL, LEONARD HAYES-TAKAHASHI, COURIER, HAYES
1 A ¶ Concrete pillars.
2 A Oil stains.
3 A A flickering sodium light.
4 A One car left: a dented Volvo with its trunk open.
5 A ¶ AGENT IRINA SOLOVYOV, 30s, wet hair, tactical vest, crouches behind a pillar, gun drawn.
6 A Beside her, AGENT KOFI MENSAH-BELL, 40s, headset, scans the ramp.
7 A On the far side of the Volvo, a hostage: DR. LEONARD HAYES-TAKAHASHI, 50s, hands zip-tied, mouth taped.
8 A Behind him stands THE COURIER, 30s, black jacket, a gun pressed to Hayes's neck.
9 D IRINA (whispering): Eyes on the target?
10 D KOFI: Northeast pillar. He's moving.
11 D COURIER (calling out): That's far enough!
12 A ¶ Irina and Kofi freeze.
13 A Hayes squeezes his eyes shut.
14 D COURIER [CONT'D]: Drop the weapons. Both of you.
15 D KOFI (raising his voice): We can talk about this.
16 D COURIER: We're talking now.
17 D IRINA (whispering to Kofi): Left. On three.
18 D KOFI (barely moving his lips): He's too close to Hayes.
19 D IRINA: Then we make him move.
20 A ¶ She rolls a coin across the concrete.
21 A It clinks against the Volvo's tire.
22 A The Courier whips his head toward it.
23 A Kofi fires into the pillar behind him.
24 A Concrete bursts.
25 A Irina charges.
26 A ¶ The Courier shoves Hayes forward.
27 A The three collide beside the car in a heap of limbs.
28 A A gun skitters.
29 A Kofi dives for it.
30 A The Courier punches Irina, she slams him against the Volvo, Hayes scrambles under the bumper.
31 D COURIER [CONT'D] (snarling): You don't understand!
32 D IRINA (pinning his arm): Then explain it.
33 A ¶ He heaves.
34 A She holds.
35 A Kofi seizes the loose gun, trains it on the Courier.
36 D KOFI: Down. Now.
37 A ¶ The Courier stills.
38 A His chest rises and falls.
39 A He lets his hand go slack.
40 A Irina kneels on his back and cuffs him.
41 A ¶ Hayes crawls out from under the bumper, tape half-peeled.
42 A Kofi cuts his zip ties.
43 A Hayes gasps.
44 D HAYES (coughing): He said they were coming for me.
45 D KOFI: Who?
46 D HAYES: The Directorate. He wasn't one of them. He was warning me.
47 A ¶ Irina looks at the Courier.
48 A His face is turned against the concrete, eyes wet.
49 D IRINA (quietly): Is that true?
50 D COURIER (muffled): They'll be here in four minutes.
51 A ¶ Kofi checks his watch.
52 A Irina hauls the Courier up.
53 D KOFI: Move.
54 A ¶ They run for the stairwell, the Courier between them, Hayes limping behind.
55 A Footsteps echo.
56 A Somewhere above, tires screech down a ramp.
57 D IRINA (over her shoulder): Level two exit! Go!
58 A ¶ They vanish through the steel door as headlights sweep across the pillars.

### SCENE s01041 | INT. ICE-FISHING SHANTY - LAKE SUPERIOR - NIGHT
Detected names (may be incomplete or contain aliases): HOLLIS MCINTYRE, MARGOT LEBLANC, TEDDY ORLOV, BRIGID FALLON, ANSEL
1 A ¶ A plywood box on a frozen lake, six by eight, glowing orange from a propane heater.
2 A Four holes drilled in the floor, four lines dropped into black water.
3 A Thermoses, a deck of cards, a battered radio playing country music.
4 A ¶ HOLLIS MCINTYRE, 50s, flannel, beard iced at the tips, sits on an overturned bucket.
5 A MARGOT LEBLANC, 40s, wool cap, jigs her rod in slow circles.
6 A TEDDY ORLOV, 12, her nephew, in an oversized snowmobile suit, stares into his hole.
7 A BRIGID FALLON, 30s, newcomer, borrowed boots, holds a cup of cocoa with both hands.
8 A ANSEL, 70s, Hollis's father, dozes by the door.
9 D HOLLIS: Coldest night of the year, they said.
10 D MARGOT: Warmest, if you're lucky.
11 D BRIGID: Do they bite when it's like this?
12 D HOLLIS: They bite when they feel like it.
13 D TEDDY: I got one!
14 A ¶ All four turn.
15 A Teddy's line goes taut.
16 A He heaves.
17 D MARGOT: Easy, kiddo!
18 D HOLLIS: Let him fight!
19 A ¶ The rod bends nearly double.
20 A Ice creaks.
21 A Then the line goes slack.
22 A Teddy tumbles back, laughing.
23 D TEDDY: It got away!
24 D BRIGID: That's the best part.
25 A ¶ She sips.
26 A Settles.
27 A The heater hisses.
28 A Ansel snores.
29 D MARGOT: I love this. The quiet.
30 D HOLLIS: It's not that quiet.
31 D MARGOT: It's quiet enough.
32 A ¶ For a minute, no one speaks.
33 A The radio plays a slow song.
34 A Snow ticks on the roof.
35 D BRIGID: Does the lake ever talk?
36 D HOLLIS: Talk?
37 D BRIGID: The ice. It was making a noise earlier. Like a groan.
38 D MARGOT: It does that. Expansion.
39 D HOLLIS: It's the cold working through it.
40 A ¶ The groan comes again.
41 A Longer, lower.
42 A Teddy leans closer to the hole.
43 D TEDDY: It sounds like a person.
44 D MARGOT: Teddy.
45 D TEDDY: Like someone humming.
46 D HOLLIS: Don't be silly.
47 D MARGOT: Don't be silly.
48 A ¶ They've said it at the same time, same flat tone.
49 A They look at each other and neither smiles.
50 A ¶ The humming continues.
51 A Not the radio.
52 A From under the floor.
53 A ¶ Ansel's eyes open.
54 D ANSEL (whispering): Nobody put your hand in the hole.
55 D BRIGID: What?
56 D ANSEL: Don't. Please.
57 A ¶ Teddy's fingers are already at the edge of the water.
58 A ¶ From the black circle, a pale hand rises, slow, almost tender.
59 A It takes Teddy's mitten between two fingers, holds it, as if checking the size.
60 A ¶ The heater goes out.

### SCENE s01027 | INT. STARLITE ROLLER RINK - SIX A.M.
Detected names (may be incomplete or contain aliases): DEZI ALVARADO, BOY, JUNIOR, FAIRWEATHER
1 A ¶ Carpet-walled, smelling of floor wax and old nacho cheese.
2 A A disco ball turns without light, a silent planet.
3 A The maple floor is empty and gleaming like a frozen lake.
4 A ¶ DEZI ALVARADO, 15, sits on the bench in secondhand skates, laces undone.
5 A Hoodie sleeves swallow her hands.
6 A She has been crying and has recently stopped.
7 A ¶ A figure leans against the snack counter.
8 A A BOY in a faded letterman jacket, tall, thin as a coat rack, a toothpick rolling in his mouth.
9 A He watches her without moving.
10 D BOY: You've got two left feet.
11 D DEZI: I've got one left foot and one broken heart.
12 D BOY: Which is worse?
13 D DEZI: Depends who you ask.
14 A ¶ She stands, wobbles, grabs the rail.
15 A He doesn't help.
16 A A kindness, of a kind.
17 D BOY [CONT'D]: They're saying you took your mother's car.
18 D DEZI: Borrowed.
19 D BOY: Without asking.
20 D DEZI: She was asleep.
21 D BOY: Dezi.
22 A ¶ She looks at him sharply.
23 A He shrugs, almost apologetic.
24 D BOY [CONT'D]: My name's Junior, by the way. Since you're not going to ask.
25 D JUNIOR [CONT'D]: Everyone calls me Junior. My dad's Junior too. Nobody knows who the first one was.
26 D DEZI: That's the saddest thing I've heard all week.
27 D JUNIOR: It's been a long week?
28 D DEZI: Rough.
29 A ¶ She pushes off the rail.
30 A Rolls two feet.
31 A Wavers.
32 A Falls.
33 A Hard.
34 A Sits on the floor with her palms flat.
35 A ¶ For a moment, she isn't sure if she's going to scream or laugh.
36 A ¶ She does both.
37 A ¶ The sound ricochets off the carpeted walls.
38 A Junior flinches, then, slowly, grins.
39 A He steps onto the floor in his sneakers and slides to her.
40 D JUNIOR [CONT'D]: That's it. Get it out.
41 D DEZI: I hate everyone.
42 D JUNIOR: Me too.
43 D DEZI: I hate my mother.
44 D JUNIOR: Mine's all right. But I hate my dad.
45 D DEZI: I don't hate her. I just wanted to drive somewhere nobody knew.
46 D JUNIOR: And you ended up at a roller rink.
47 D DEZI: It was the only thing open.
48 A ¶ The lights come on.
49 A All at once, bright as an operating room.
50 A The disco ball catches a beam and sprays confetti across the walls.
51 A ¶ MS. FAIRWEATHER, 60s, rink manager, a cardigan embroidered with tiny skates, comes through the swinging doors with a ring of keys and a coffee thermos.
52 A She stops dead.
53 D MS. FAIRWEATHER: We don't open for four hours.
54 D JUNIOR: Morning, Ms. Fairweather.
55 D MS. FAIRWEATHER: Junior. You are not supposed to be here. Neither is she. Whoever she is.
56 D DEZI: Dezi.
57 D MS. FAIRWEATHER: Dezi. Well. Are you hurt?
58 D DEZI: No.
59 D MS. FAIRWEATHER: Good. Skates off. Both of you. There's a pot of coffee in the back and a patched-up phone. Call your mother.
60 A ¶ Dezi looks at Junior.
61 A He lifts one shoulder.
62 A Almost a smile.
63 A ¶ She begins to unlace.

### SCENE s00004 | INT. RIVERBOAT CASINO - PRIVATE DINING SALON - NIGHT
Detected names (may be incomplete or contain aliases): HORACE VANDERMEER, NEELY, ABBOTT, MILES KOWALCZYK
1 A ¶ Red velvet.
2 A Brass lamps.
3 A A paddle wheel churns beyond the portholes, and the whole room sways with the current.
4 A ¶ A long table set for three, with a court reporter's absence conspicuous.
5 A At its head sits HORACE VANDERMEER (50s, silver temples, a gray double-breasted suit, a fountain pen he never uncaps).
6 A He is the attorney for the plaintiff.
7 A ¶ Across from him, CORNELIUS "NEELY" ABBOTT (60s, ruddy, a carnation in his lapel, a glass of bourbon sweating at his elbow).
8 A The witness.
9 A Genial.
10 A Rich.
11 A ¶ At the foot of the table, MILES KOWALCZYK (30s, lean, perfect posture, a fresh haircut) arranges his notes.
12 A He represents Abbott.
13 A ¶ A deposition, held on a boat so no one can serve a subpoena in the wrong county.
14 D HORACE: We'll keep this informal, Mr. Abbott.
15 D NEELY: Neely. Everyone calls me Neely.
16 D MILES: Mr. Abbott will answer to his name.
17 D NEELY: Miles, relax. We're among friends.
18 D HORACE: Are we?
19 D NEELY: I hope so.
20 A ¶ Horace smiles.
21 A Uncaps nothing.
22 A Turns a page.
23 D HORACE: You've owned the Gilded Heron for how long?
24 D NEELY: Eleven years. Since my father passed.
25 D MILES: Objection. Relevance.
26 D HORACE: It's a deposition, Mr. Kowalczyk. Objections are noted, not ruled upon.
27 D MILES: Noted, then.
28 D NEELY: Let him ask. I've nothing to hide.
29 A ¶ A waiter pours coffee, withdraws.
30 A The paddle wheel thuds.
31 A Glasses shiver.
32 D HORACE: And the vessel carries how many guests on a Friday?
33 D NEELY: Three hundred, maybe three-fifty.
34 D HORACE: Sprinklers?
35 D NEELY: Of course.
36 D HORACE: Inspected?
37 D NEELY: Every year.
38 D MILES: Mr. Abbott, you needn't elaborate.
39 D NEELY: He's only asking about the boat.
40 D HORACE: Only about the boat.
41 A ¶ He turns another page.
42 A Pleasant.
43 A Unhurried.
44 A He might be reading a menu.
45 D HORACE [CONT'D]: Wonderful. Then let's talk about the fire.
46 A ¶ Neely's glass stops halfway to his lips.
47 D NEELY: Which fire?
48 D HORACE: The one in the engine room, August third.
49 D NEELY: That was minor.
50 D MILES: Mr. Abbott -
51 D NEELY: - a small electrical matter. The crew handled it.
52 D HORACE: The crew locked it.
53 D NEELY: I don't follow.
54 D HORACE: The engine room door. Locked from the outside. Eleven men inside.
55 D MILES: Objection! He's testifying.
56 D HORACE: He is, in fact, answering. Mr. Abbott?
57 D NEELY (too fast): That door sticks. It's old.
58 D HORACE: It sticks from the outside only?
59 D NEELY: It - I wouldn't know.
60 D HORACE: You signed the work order.
61 D NEELY: My signature is on a great many things.
62 D HORACE: This one is dated July thirtieth. Replace latch with exterior bolt. Reason given: theft prevention.
63 A ¶ Silence.
64 A Miles stops writing.
65 A The boat creaks.
66 D MILES: Where did you get that?
67 D HORACE: From the contractor's invoice file. Delivered this morning, with a very nervous apology.
68 D NEELY: He's lying.
69 D HORACE: He's dead, Mr. Abbott. Since Tuesday. His widow brought the file.
70 A ¶ Neely sets down the glass.
71 A It trembles against the saucer.
72 D NEELY: Miles. Say something.
73 D MILES: I'd like a recess.
74 D HORACE: We are on a river, Mr. Kowalczyk. Where would you recess to?
75 D MILES: The deck.
76 D HORACE: Of course.
77 A ¶ Miles stands, then sits again.
78 A He looks at Neely.
79 A Neely won't look at anyone.
80 D NEELY (quietly): It was supposed to be empty.
81 D MILES: Neely, don't -
82 D NEELY: The insurance man said the engine room would be empty at night.
83 D HORACE: And the eleven?
84 D NEELY: They weren't on the schedule.
85 A ¶ Horace finally uncaps the fountain pen.
86 A Writes one line.
87 A The nib scratches.
88 A Loud.
89 D HORACE: That will do for today.
90 A ¶ He caps the pen.
91 A The paddle wheel thuds.
92 A The lamps sway.

### SCENE s00008 | INT. MUNICIPAL PLANETARIUM - CONTROL ROOM - NIGHT
Detected names (may be incomplete or contain aliases): JUNE, ASANTE, WALLACE PYO
1 A ¶ A cramped booth above the dome.
2 A Dials, a projector the size of an oven, a dead cup of coffee on every flat surface.
3 A ¶ JUNIPER "JUNE" ASANTE (30s, hoodie, headset, a laptop plastered with stickers) sits at a console, bored.
4 A Beside her, WALLACE PYO (60s, security guard uniform one size small, a thermos) pretends to read a paperback.
5 A ¶ Through the glass, the empty dome is lit with a slow field of artificial stars.
6 D WALLACE: You're not supposed to be up here.
7 D JUNE: Maintenance.
8 D WALLACE: At two a.m.?
9 D JUNE: Stars don't recalibrate themselves.
10 A ¶ He sips from the thermos.
11 A Turns a page without reading it.
12 D JUNE [CONT'D] (into headset, flat): Ceiling's clear. Roof hatch in four.
13 D WALLACE: Who're you talking to?
14 D JUNE: Myself. Old habit.
15 D WALLACE: You said "roof hatch."
16 D JUNE: I said "roof catch." As in, catch up on emails.
17 D WALLACE: Mm.
18 A ¶ He doesn't believe her.
19 A He doesn't move, either.
20 A ¶ June taps a key.
21 A The stars shift.
22 A The constellation of Orion slides west.
23 D WALLACE [CONT'D]: My wife loved Orion.
24 D JUNE: Everyone does.
25 D WALLACE: She said it looked like a man waiting for a bus.
26 A ¶ June laughs.
27 A Real.
28 A Surprised.
29 D JUNE: That's good.
30 D WALLACE: She was good.
31 A ¶ Quiet.
32 A The projector whirs.
33 D JUNE (under her breath, to the headset): Hold. Hold. He's talking.
34 D WALLACE: There it is again.
35 D JUNE: Hold on, I'm - (beat) - praying. Quietly. For my laptop. It crashes.
36 D WALLACE: Sure it does.
37 A ¶ He sets down the paperback, stands, and stretches until his back cracks.
38 D WALLACE [CONT'D] (to the empty booth): Everyone out of the vault when you're done, please. I lock at six.
39 A ¶ Beat.
40 A June looks at him.
41 D JUNE: You knew.
42 D WALLACE: I'm sixty-one. I know what a van looks like parked behind a dome at midnight.
43 D JUNE: And you sat here.
44 D WALLACE: I'm on break.
45 A ¶ He pours coffee.
46 A Offers her the cup.
47 A ¶ She takes it.
48 D WALLACE [CONT'D]: Don't take the telescope. It's on loan from the university.
49 D JUNE (into headset): Hear that, everybody? Leave the telescope.
50 A ¶ Overhead, the stars drift on, indifferent.

### SCENE s01023 | INT. CRAB CANNERY - NIGHT SHIFT - NIGHT
Detected names (may be incomplete or contain aliases): PAULINA RUSSO, DESMOND WALCOTT, GUS, HAND
1 A ¶ Steel tables.
2 A Hoses.
3 A Steam rising from vats.
4 A Fluorescents buzz.
5 A Everything smells of brine and bleach.
6 A ¶ PAULINA RUSSO, 40s, shift lead, hairnet, white rubber boots, sprays down a conveyor belt.
7 A DESMOND WALCOTT, 20s, headphones around his neck, stacks crates.
8 A GUS, 60s, Paulina's oldest hand, wheels a pallet jack.
9 A ¶ The line is stopped.
10 A A quiet kind of peace.
11 D PAULINA (to all): Ten minutes, everybody. Breaker's being cranky.
12 D DESMOND: It's always cranky.
13 D PAULINA: Then it's consistent.
14 A ¶ Gus parks the jack.
15 A Eases onto an upturned bucket.
16 A Pulls a sandwich from his apron.
17 D GUS (to himself): Thirty-one years. Never once got used to the cold.
18 A ¶ Desmond laughs.
19 A Pulls a phone from his pocket.
20 D DESMOND: Gus, you want to see my niece? She just learned to whistle.
21 D GUS: Sure.
22 A ¶ Desmond shows him the screen.
23 A Gus squints.
24 A Smiles.
25 A The first real smile of the night.
26 A ¶ Paulina checks her clipboard.
27 A Hums.
28 A The steam curls around her.
29 D PAULINA (under her breath): Two cases short. Where did you go, little guys.
30 A ¶ From the live tank behind the line, a soft tap.
31 A Glass on glass.
32 A ¶ Nobody notices.
33 A The humming continues.
34 D DESMOND: She's three. She calls everything "doggy."
35 D GUS: Smart kid.
36 A ¶ Tap.
37 A Tap.
38 A Tap.
39 A Slower.
40 A ¶ Paulina looks up.
41 A The tank, a long glass rectangle of dark water, hides in the shadow beyond the last light.
42 D PAULINA (to Desmond): Did you top up the tank?
43 D DESMOND: Friday.
44 D PAULINA: Then who's tapping?
45 D DESMOND: Pipes. They knock.
46 A ¶ Gus has stopped chewing.
47 A He stares at the tank.
48 D GUS (quietly): Paulina.
49 D PAULINA: What?
50 D GUS: There's no water moving.
51 A ¶ She follows his gaze.
52 A The surface is perfectly flat.
53 A Black.
54 A Nothing disturbs it.
55 A ¶ Tap.
56 A ¶ The sound comes from inside.
57 D PAULINA (to herself): Okay. Okay.
58 A ¶ She walks toward the tank.
59 A Boots squelching.
60 A Desmond rises.
61 A Gus doesn't.
62 D PAULINA [CONT'D] (over her shoulder): Both of you, stay there.
63 A ¶ She reaches the glass.
64 A Wipes the condensation with her sleeve.
65 A ¶ Pressed against the inside of the glass is a HAND.
66 A A human hand.
67 A Pale, wrinkled, fingers splayed.
68 A ¶ Paulina stumbles back.
69 A Her clipboard clatters.
70 A ¶ Under the surface, a face drifts up.
71 A Eyes open.
72 A Wearing a hairnet.
73 A ¶ It's Gus's face.
74 A ¶ Paulina turns.
75 A Gus is still on his bucket.
76 A He lifts his sandwich.
77 A Smiles.
78 A Too wide.
79 D GUS: Ten minutes, you said.
80 A ¶ Desmond's phone slips from his hand.
81 A The screen lights the floor.
82 A The breaker clunks.
83 A ¶ All the fluorescents go out.

### SCENE pd_dollhouse_4 | INT. DOLLHOUSE - CONTINUOUS
Detected names (may be incomplete or contain aliases): MRS LINDE, NORA, HELMER, RANK
1 D MRS LINDE: And your husband keeps the key?
2 D NORA: Yes, always.
3 D MRS LINDE: Krogstad must ask for his letter back unread, he must find some pretence—
4 D NORA: But it is just at this time that Torvald generally—
5 D MRS LINDE: You must delay him. Go in to him in the meantime. I will come back as soon as I can.
6 A ¶ She goes out hurriedly through the hall door.
7 A ¶ goes to HELMER’S door, opens it and peeps in.
8 D NORA: . Torvald!
9 A ¶ from the inner room.
10 D HELMER: . Well? May I venture at last to come into my own room again? Come along, Rank, now you will see—
11 A ¶ Halting in the doorway.
12 D HELMER: But what is this?
13 D NORA: What is what, dear?
14 D HELMER: Rank led me to expect a splendid transformation.
15 A ¶ in the doorway.
16 D RANK: . I understood so, but evidently I was mistaken.
17 D NORA: Yes, nobody is to have the chance of admiring me in my dress until tomorrow.
18 D HELMER: But, my dear Nora, you look so worn out. Have you been practising too much?
19 D NORA: No, I have not practised at all.
20 D HELMER: But you will need to—
21 D NORA: Yes, indeed I shall, Torvald. But I can’t get on a bit without you to help me; I have absolutely forgotten the whole thing.
22 D HELMER: Oh, we will soon work it up again.
23 D NORA: Yes, help me, Torvald. Promise that you will! I am so nervous about it—all the people—. You must give yourself up to me entirely this evening. Not the tiniest bit of business—you mustn’t even take a pen in your hand. Will you promise, Torvald dear?
24 D HELMER: I promise. This evening I will be wholly and absolutely at your service, you helpless little mortal. Ah, by the way, first of all I will just—
25 A ¶ Goes towards the hall door.
26 D NORA: What are you going to do there?
27 D HELMER: Only see if any letters have come.
28 D NORA: No, no! don’t do that, Torvald!
29 D HELMER: Why not?
30 D NORA: Torvald, please don’t. There is nothing there.
31 D HELMER: Well, let me look.
32 A ¶ Turns to go to the letter-box.
33 A NORA, at the piano, plays the first bars of the Tarantella.
34 A HELMER stops in the doorway.
35 D HELMER: Aha!
36 D NORA: I can’t dance tomorrow if I don’t practise with you.
37 A ¶ going up to her.
38 D HELMER: . Are you really so afraid of it, dear?
39 D NORA: Yes, so dreadfully afraid of it. Let me practise at once; there is time now, before we go to dinner. Sit down and play for me, Torvald dear; criticise me, and correct me as you play.
40 D HELMER: With great pleasure, if you wish me to.
41 A ¶ Sits down at the piano.
42 A ¶ takes out of the box a tambourine and a long variegated shawl.
43 A She hastily drapes the shawl round her.
44 A Then she springs to the front of the stage and calls out.
45 D NORA: . Now play for me! I am going to dance!
46 A ¶ HELMER plays and NORA dances.
47 A RANK stands by the piano behind HELMER, and looks on.
48 A ¶ as he plays.
49 D HELMER: . Slower, slower!
50 D NORA: I can’t do it any other way.

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

### SCENE s01095 | EXT. DRY GOAT PEN BEHIND A FORSAKEN CHURCH - EVENING
Detected names (may be incomplete or contain aliases): SHERIFF AUGUSTINE TREVINO, ABIGAIL FROST-MWANGI, JEREMIAH FROST
1 A ¶ 1878.
2 A Dust.
3 A A broken fence.
4 A A leaning cross.
5 A Three goats chew at nothing.
6 A ¶ SHERIFF AUGUSTINE TREVINO, 60s, tin star pinned crooked, stands over a shallow grave.
7 A Hat in his hands.
8 A ABIGAIL FROST-MWANGI, 30s, widow's black, holds a rusted shovel.
9 A Between them, a boy, JEREMIAH FROST, 10, squats by a goat and strokes its ear.
10 A ¶ The wind pushes a tumbleweed through the pen.
11 A Nobody watches it go.
12 D AUGUSTINE: Ma'am.
13 A ¶ Abigail doesn't turn.
14 A She sets the shovel against the fence.
15 A Dusts her palms on her skirt.
16 A One at a time.
17 D AUGUSTINE [CONT'D]: He'd have wanted a preacher.
18 D ABIGAIL: He'd have wanted his horse.
19 A ¶ Augustine nods.
20 A Looks at the cross.
21 A Looks at the boy.
22 A Jeremiah lifts a handful of dry grass for the goat.
23 D AUGUSTINE: I'll see to the horse.
24 D ABIGAIL: Don't trouble yourself.
25 D AUGUSTINE: No trouble.
26 A ¶ She takes the hat from his hands and sets it on the cross.
27 A The brim catches the wind.
28 A She weights it with a stone.
29 D ABIGAIL: That's his now.
30 A ¶ Augustine opens his mouth.
31 A Closes it.
32 A Pulls a folded paper from his vest and holds it out.
33 A She doesn't take it.
34 D ABIGAIL [CONT'D]: Read it to him.
35 A ¶ Augustine looks at the grave.
36 A Clears his throat.
37 A Doesn't read.
38 A He folds the paper smaller, crouches, and tucks it into the dirt beside the cross.
39 A ¶ Jeremiah stands, brushes his knees.
40 A Walks to his mother.
41 A Takes her hand.
42 A Together they look at the cross until the light turns orange.
43 A The goats wander off.

### SCENE s01061 | INT. NORTHWIND LOGISTICS - ESCAPE ROOM "THE VAULT OF SYNERGY" - DAY
Detected names (may be incomplete or contain aliases): DIRECTOR GREGOR HALVORSEN, PRIYA NAIR, TODD BEXLEY, BEATRICE KOWALSKI, HR, MARCUS ELLIOT, DELILAH OKONJO
1 A ¶ A windowless basement fitted as a movie-set bank.
2 A Brass safe doors, laser-beam strips of red tape, a ticking digital clock above the mantel: 59:12.
3 A ¶ Six employees in matching fleece vests stand in a ring around a locked chest.
4 A Lanyards.
5 A Name tags.
6 A Forced smiles.
7 A ¶ DIRECTOR GREGOR HALVORSEN, 50s, bald, a vest zipped to the chin, claps once.
8 D GREGOR: Team! Remember. There's no "I" in--
9 A ¶ PRIYA NAIR, 30s, accountant, glances at her watch.
10 D PRIYA: We've got fifty-eight minutes.
11 D GREGOR: Alignment is a journey.
12 A ¶ TODD BEXLEY, 40s, sales, taps the chest.
13 D TODD: It's a padlock. Four digits.
14 D GREGOR: Who has the clue?
15 A ¶ BEATRICE KOWALSKI, 60s, HR, lifts a laminated card with a trembling hand.
16 D BEATRICE: "The date of our greatest quarter."
17 D TODD: That's every quarter.
18 D GREGOR: Todd.
19 D TODD: I'm saying, it's every quarter.
20 A ¶ MARCUS ELLIOT, 20s, junior analyst, stares at the clock.
21 D MARCUS: Fifty-six minutes.
22 D GREGOR: Marcus, please. We don't count down. We count up.
23 A ¶ Marcus nods.
24 A Counts nothing.
25 A His left eye twitches.
26 A ¶ DELILAH OKONJO, 40s, procurement, stands with her arms crossed, in the corner.
27 D DELILAH: It's seventeen forty-two.
28 D GREGOR: Is that a guess?
29 D DELILAH: It's on the whiteboard behind you.
30 A ¶ They all turn.
31 A A whiteboard reads: FOUNDED 1742.
32 A Gregor's smile fixes in place.
33 D GREGOR: Great catch, Delilah.
34 A ¶ Priya enters the code.
35 A The padlock clicks.
36 A The chest opens.
37 A Inside, a single laminated card: CONGRATULATIONS.
38 A PLEASE COMPLETE THE SURVEY.
39 A ¶ Nobody speaks.
40 A Todd picks up the card, turns it over.
41 D TODD: There's a QR code.
42 D BEATRICE: Of course there is.
43 A ¶ They stand there, six fleece vests in a basement, while the clock beeps.
44 A 54:03.
45 A 54:02.

### SCENE s01036 | INT. THORNQUIST DRESSMAKER'S SHOP - LONDON - DAY (1893)
Detected names (may be incomplete or contain aliases): AGNES THORNQUIST, DELPHINE ARCHAMBAULT, COLONEL ASHBY-GREY, YUSUF HADDAD
1 A ¶ Bolts of silk, a cutting table, a brass dummy in half-pinned lilac.
2 A Rain at the window.
3 A ¶ AGNES THORNQUIST, 40s, pins in her mouth, kneels to a hem.
4 A DELPHINE ARCHAMBAULT, 20s, in her slip, stands on a footstool, arms out.
5 A Her eyes avoid the mirror.
6 A ¶ COLONEL ASHBY-GREY, 60s, enters in a damp greatcoat.
7 A YUSUF HADDAD, 30s, tailor's apprentice, follows with a tape over his shoulder.
8 D ASHBY-GREY: Miss Archambault. Your father sends his regards.
9 D DELPHINE: How kind.
10 A ¶ He sets his hat on the cutting table.
11 A Agnes takes the pins from her mouth.
12 D AGNES: Colonel. We weren't expecting you.
13 D ASHBY-GREY: One doesn't schedule a wedding fitting.
14 D AGNES: It's not yet a wedding.
15 D ASHBY-GREY: It will be Saturday.
16 A ¶ Delphine's arm drops an inch.
17 A Agnes taps it back up.
18 D AGNES: Steady, dear.
19 A ¶ Yusuf unrolls the tape.
20 A Measures the waist.
21 A Says nothing.
22 A His fingers tremble.
23 D ASHBY-GREY: Tighter at the bodice. The family insists.
24 D AGNES: She'll not breathe.
25 D ASHBY-GREY: She'll not need to.
26 A ¶ A silence.
27 A Rain hits the glass.
28 A ¶ Delphine looks into the mirror for the first time.
29 A At herself.
30 A At Yusuf behind her.
31 D DELPHINE: Mr. Haddad. Is the silk imported?
32 D YUSUF: From Damascus, miss.
33 D DELPHINE: How far is that?
34 D YUSUF: Very far.
35 D DELPHINE: How long would it take to go?
36 A ¶ Ashby-Grey turns.
37 A His eyes narrow.
38 D ASHBY-GREY: Miss Archambault.
39 D DELPHINE: Merely curious.
40 A ¶ Agnes rises, sets her pins down, and smooths the bodice.
41 A Her thumb brushes Delphine's wrist.
42 A A pulse passes between them.
43 A Quick, quiet.
44 D AGNES (low): I'll let out the seam tonight.
45 D ASHBY-GREY: Pardon?
46 D AGNES: I said I'll take in the seam tonight.
47 A ¶ Ashby-Grey studies her.
48 A Then Yusuf.
49 A Then the door.
50 D ASHBY-GREY: Saturday. Ten sharp.
51 A ¶ He takes his hat and leaves.
52 A The bell tinkles.
53 A The latch clicks.
54 A ¶ Nobody moves.
55 A Then Delphine steps down off the stool, slow, as if it were a scaffold.

### SCENE s01089 | INT. FIELD HOSPITAL - CONVERTED CHURCH - NIGHT
Detected names (may be incomplete or contain aliases): MAJOR SIOBHAN DELANEY-WRIGHT, SERGEANT MIKHAIL TERZIC, NURSE ROSALIND PARK-EZEIGWE, PRIVATE OSWIN FALCONER, CORPORAL TEDDY AGUILAR, RADIO
1 A ¶ Pews pushed against the walls.
2 A Cots in the nave.
3 A An altar draped with a bloody sheet.
4 A A lone candle on the pulpit.
5 A Distant artillery, fading.
6 A ¶ MAJOR SIOBHAN DELANEY-WRIGHT, 40s, surgeon, apron stiff with dried blood, writes in a ledger at a pew-desk.
7 A SERGEANT MIKHAIL TERZIC, 30s, bandaged arm, sits on a cot.
8 A NURSE ROSALIND PARK-EZEIGWE, 20s, hair pinned under a cap, adjusts an IV.
9 A PRIVATE OSWIN FALCONER, 18, sleeps in the next cot, face grey.
10 A Nearby, a radio operator, CORPORAL TEDDY AGUILAR, 20s, headphones around his neck, fiddles with a set.
11 D SIOBHAN: Corporal. Anything?
12 D TEDDY: Static, Major.
13 D SIOBHAN: Try the other band.
14 A ¶ He turns the dial.
15 A A voice comes through, clipped and tired.
16 D RADIO [V.O.]: ...say again, Dagger Six, this is Hammer. Enemy withdrawing along the river road. All units hold.
17 A ¶ Siobhan looks up.
18 A So does Mikhail.
19 A Rosalind stills with the IV bag in her hand.
20 D MIKHAIL: They're withdrawing?
21 D TEDDY: That's what it says.
22 D ROSALIND: Then it's over?
23 D SIOBHAN: It's over tonight. Not tomorrow.
24 A ¶ She closes the ledger.
25 A Stands.
26 A Wipes her palms on her apron.
27 A Crosses to Oswin's cot, checks his pulse.
28 A Nods.
29 A Draws the blanket up.
30 D ROSALIND: He'll make it?
31 D SIOBHAN: If he sleeps.
32 A ¶ Mikhail rolls his shoulder, winces, tests the bandage.
33 A Rosalind sets down the IV and crosses to him, unwraps the dressing, checks the wound.
34 A He grimaces.
35 A Teddy turns the volume up, trying for another voice.
36 D MIKHAIL: How is it?
37 D ROSALIND: Clean. You'll keep the arm.
38 D MIKHAIL: That is good. I like the arm.
39 D ROSALIND (dry): So does your wife, I imagine.
40 D MIKHAIL: She likes the other one more.
41 A ¶ They laugh, quietly, careful of the sleepers.
42 A The laugh dies.
43 A The church holds its breath.
44 A Siobhan walks down the aisle between the cots, letting her hand trail along the pews.
45 D RADIO [V.O.]: Dagger Six, copy that. Ceasefire at oh-six-hundred. Repeat, ceasefire at oh-six-hundred.
46 D TEDDY (whispering): Ma'am. Ceasefire. Six a.m.
47 D SIOBHAN (not turning): Thank you, Corporal.
48 A ¶ Teddy pulls the headphones off.
49 A Rubs his face.
50 A Rosalind sits on the end of Mikhail's cot, suddenly unable to stand.
51 A Mikhail pats her shoulder with his good hand.
52 A ¶ At the altar, Siobhan stops.
53 A Lifts the bloody sheet.
54 A Folds it, corner by corner.
55 A Lays it on the stone.
56 A Straightens it.
57 A Steps back.
58 A ¶ Behind her, Oswin stirs, murmurs, and falls still again.
59 A The candle gutters and holds.
60 D SIOBHAN [CONT'D] (to the room): Everyone rest. I'll take first watch.
61 A ¶ Rosalind and Mikhail nod.
62 A Teddy lies back on his cot, the radio on his chest, fading into static and sleep.
63 A Siobhan sits in the front pew, hands folded, eyes on the candle.

### SCENE s01100 | INT. ORBITAL GREENHOUSE RING - OBSERVATION DECK - SHIFT CHANGE
Detected names (may be incomplete or contain aliases): YASMIN HOSSAIN-RYDER, TECHNICIAN WALDEMAR OKPARA, HALCYON, COMMANDER IRIS TANAKA-LUND
1 A ¶ A curved corridor lined with hydroponic racks.
2 A Violet grow-light.
3 A A viewport shows Earth turning slowly below.
4 A The air smells of basil and recycled coolant.
5 A ¶ DR. YASMIN HOSSAIN-RYDER, 40s, sits cross-legged on the floor, a tablet balanced on her knee.
6 A She stirs a pouch of reconstituted tea.
7 A Her colleague, TECHNICIAN WALDEMAR OKPARA, 30s, wipes down a nutrient valve.
8 A Their station AI, a soft voice called HALCYON, murmurs from a speaker near the ceiling.
9 A Beside the viewport, the commander, COMMANDER IRIS TANAKA-LUND, 50s, stands with her arms folded, gazing at the planet.
10 A ¶ Yasmin sips.
11 A Waldemar wipes.
12 A Iris does not move.
13 A She hums low, tuneless.
14 D HALCYON [V.O.]: Humidity at sixty-two percent. Within tolerance.
15 D YASMIN (not looking up): Thank you, Halcyon.
16 D HALCYON [V.O.]: You are welcome. Would you like the evening readings?
17 D YASMIN: Later.
18 A ¶ She taps the tablet.
19 A Waldemar glances at her, then at the commander.
20 A He lowers his voice.
21 D WALDEMAR: Is she okay?
22 D YASMIN: She's thinking.
23 D WALDEMAR: She's been thinking for an hour.
24 D YASMIN: She's the commander. She thinks in hours.
25 A ¶ He nods and returns to the valve.
26 A A drop of nutrient solution beads on the pipe.
27 A He catches it with his thumb.
28 A ¶ Iris turns from the viewport.
29 A Looks at them both with a mild, unreadable expression.
30 D IRIS: We got the message from Mission Control.
31 D YASMIN: The extension?
32 D IRIS: Six more months.
33 A ¶ Waldemar's rag stops.
34 A Yasmin sets down the tablet.
35 A For a moment the only sound is the hum of the racks.
36 D WALDEMAR (carefully): Ma'am, the crew rotation --
37 D IRIS: Is delayed. Yes.
38 D YASMIN: And the supply drop?
39 D IRIS: Sufficient. They believe.
40 A ¶ She walks to the nearest rack, brushes the leaves of a tomato plant with two fingers, and inhales.
41 D IRIS [CONT'D]: Tomatoes should be ready by the third week.
42 A ¶ Yasmin and Waldemar exchange a look.
43 A He nods to her.
44 A She shrugs, resigned.
45 A He folds the rag and sets it by the valve.
46 D HALCYON [V.O.]: Would anyone care for a cup of tea?
47 D IRIS (a small smile): Yes, Halcyon. Four.
48 D HALCYON [V.O.]: Four, Commander? There are three of you.
49 A ¶ Iris pauses.
50 A The smile fades.
51 A She turns to the speaker.
52 D IRIS: ...Three. Of course. Three.
53 A ¶ She walks away toward the corridor, one hand trailing along the rack.
54 A Waldemar watches her go, then looks at Yasmin.
55 D WALDEMAR: Who was the fourth?
56 D YASMIN (quietly): I'll tell you later.

### SCENE s01101 | INT. DECOMMISSIONED SUBMARINE BAY - SPACE STATION - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): CAPTAIN LUCIANA MBEKI-ROSSI, ENGINEER DORIAN WESTBROOK-ANAND, MEDIC IMANI SOLBERG, SECURITY CHIEF PAVEL ORLOV-DIALLO, LINGUIST ESPERANZA BALOGUN, TEO ABERNATHY-LIU, COMMS
1 A ¶ A long dim hangar.
2 A Hull plates ticking as they cool.
3 A A flickering amber strip light.
4 A A rack of pressure suits like hanging skins.
5 A ¶ CAPTAIN LUCIANA MBEKI-ROSSI, 50s, shaved head, grease-stained flight suit, kneels beside a dark console.
6 A Next to her, ENGINEER DORIAN WESTBROOK-ANAND, 30s, arms crossed, watches a diagnostic wheel spin.
7 A Further off, MEDIC IMANI SOLBERG, 20s, hugs a first-aid case, her hands trembling.
8 A At the hatch, SECURITY CHIEF PAVEL ORLOV-DIALLO, 40s, holds a pulse rifle, eyes on the ceiling.
9 A Two more figures stand in shadow by the far bulkhead: LINGUIST ESPERANZA BALOGUN, 30s, in a pale coat, and a young cadet, TEO ABERNATHY-LIU, 19, clutching a datapad.
10 D LUCIANA: Status.
11 D DORIAN: Core's alive. Everything else is asleep.
12 D LUCIANA: Wake it.
13 D DORIAN: I'm trying.
14 D IMANI (small): Captain?
15 D LUCIANA: Not now.
16 D IMANI: The hull is making a noise.
17 A ¶ Silence.
18 A The strip light flickers.
19 A A distant, rhythmic tapping rolls through the metal.
20 A Pavel's rifle lifts.
21 D PAVEL: It's not the cooling.
22 D ESPERANZA: It's a pattern.
23 D LUCIANA: What kind of pattern?
24 D ESPERANZA (listening): Three. Pause. Three.
25 D TEO: Is that Morse?
26 D ESPERANZA: It's a countdown.
27 D COMMS [V.O.] (crackling, over the intercom): ...bay four... can anyone hear... bay four...
28 A ¶ Luciana grabs the handset from the console.
29 D LUCIANA: This is Mbeki-Rossi. Say again.
30 D COMMS [V.O.]: Captain? Thank god. We're locked in the sub bay. The door sealed itself.
31 D LUCIANA: Who is this?
32 D COMMS [V.O.]: Station Operations. We've been tapping on the hull for an hour.
33 A ¶ Pavel lowers the rifle slowly.
34 A Dorian stands.
35 A Imani lets out a breath.
36 A The tapping continues, closer now.
37 D LUCIANA (into the handset): We're in bay four.
38 D COMMS [V.O.]: No, ma'am. You're not.
39 A ¶ Luciana stares at the handset.
40 A At the others.
41 A At the ceiling, where something taps once, twice, thrice.
42 D DORIAN (whispering): If they're locked in the sub bay...
43 D PAVEL: Then what is that?
44 A ¶ The tapping stops.
45 A A long silence.
46 A The strip light dies.
47 A In the dark, a soft voice laughs, thin and delighted, from the vent above.
48 A ¶ Teo drops the datapad.
49 A It clatters.
50 A No one picks it up.

### SCENE pd_dollhouse_6 | INT. DOLLHOUSE - CONTINUOUS
Detected names (may be incomplete or contain aliases): HELMER, NORA
1 D HELMER: I have it in me to become a different man.
2 D NORA: Perhaps—if your doll is taken away from you.
3 D HELMER: But to part!—to part from you! No, no, Nora, I can’t understand that idea.
4 A ¶ going out to the right.
5 D NORA: . That makes it all the more certain that it must be done.
6 A ¶ She comes back with her cloak and hat and a small bag which she puts on a chair by the table.
7 D HELMER: Nora, Nora, not now! Wait until tomorrow.
8 A ¶ putting on her cloak.
9 D NORA: . I cannot spend the night in a strange man’s room.
10 D HELMER: But can’t we live here like brother and sister—?
11 A ¶ putting on her hat.
12 D NORA: . You know very well that would not last long.
13 A ¶ Puts the shawl round her.
14 D NORA: Goodbye, Torvald. I won’t see the little ones. I know they are in better hands than mine. As I am now, I can be of no use to them.
15 D HELMER: But some day, Nora—some day?
16 D NORA: How can I tell? I have no idea what is going to become of me.
17 D HELMER: But you are my wife, whatever becomes of you.
18 D NORA: Listen, Torvald. I have heard that when a wife deserts her husband’s house, as I am doing now, he is legally freed from all obligations towards her. In any case, I set you free from all your obligations. You are not to feel yourself bound in the slightest way, any more than I shall. There must be perfect freedom on both sides. See, here is your ring back. Give me mine.
19 D HELMER: That too?
20 D NORA: That too.
21 D HELMER: Here it is.
22 D NORA: That’s right. Now it is all over. I have put the keys here. The maids know all about everything in the house—better than I do. Tomorrow, after I have left her, Christine will come here and pack up my own things that I brought with me from home. I will have them sent after me.
23 D HELMER: All over! All over!—Nora, shall you never think of me again?
24 D NORA: I know I shall often think of you, the children, and this house.
25 D HELMER: May I write to you, Nora?
26 D NORA: No—never. You must not do that.
27 D HELMER: But at least let me send you—
28 D NORA: Nothing—nothing—
29 D HELMER: Let me help you if you are in want.
30 D NORA: No. I can receive nothing from a stranger.
31 D HELMER: Nora—can I never be anything more than a stranger to you?
32 A ¶ taking her bag.
33 D NORA: . Ah, Torvald, the most wonderful thing of all would have to happen.
34 D HELMER: Tell me what that would be!
35 D NORA: Both you and I would have to be so changed that—. Oh, Torvald, I don’t believe any longer in wonderful things happening.
36 D HELMER: But I will believe in it. Tell me! So changed that—?
37 D NORA: That our life together would be a real wedlock. Goodbye.
38 A ¶ She goes out through the hall.
39 A ¶ sinks down on a chair at the door and buries his face in his hands.
40 D HELMER: . Nora! Nora!
41 A ¶ Looks round, and rises.
42 D HELMER: Empty. She is gone.
43 A ¶ A hope flashes across his mind.
44 D HELMER: The most wonderful thing of all—?
45 A ¶ The sound of a door shutting is heard from below.
