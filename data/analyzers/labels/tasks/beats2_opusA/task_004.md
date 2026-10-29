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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_opusA/group_00004.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

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

### SCENE s01096 | INT. GRAND OPERA HOUSE - CATWALK ABOVE THE STAGE - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE INEZ CASTELLANO-WU, OFFICER BARNABAS FINCH, STAGE MANAGER DOROTHEA LAMBERT, TOMASZ KRAWCZYK, AUGUSTO ELEGBE, FIGURE, VIOLETTA SANTORO-REYES
1 A ¶ Ropes, sandbags, pulleys in the dark.
2 A Below, a full orchestra tunes.
3 A A chandelier the size of a car hangs motionless beside the catwalk.
4 A ¶ DETECTIVE INEZ CASTELLANO-WU, 40s, black blazer, radio clipped to her belt, creeps along the planks.
5 A Behind her: OFFICER BARNABAS FINCH, 20s, sweating through his uniform; STAGE MANAGER DOROTHEA LAMBERT, 50s, headset, whispering into her collar; and a pair of maintenance men, TOMASZ KRAWCZYK, 40s, and AUGUSTO ELEGBE, 30s, hauling a toolbox between them.
6 A At the far end of the catwalk, half in shadow, crouches a figure with a briefcase.
7 D INEZ (whispering): Everybody quiet.
8 A ¶ She raises a fist.
9 A They halt.
10 A Dorothea clamps a hand over her headset mic.
11 A Tomasz and Augusto set the toolbox down so slowly it makes no sound.
12 A Barnabas draws his sidearm and holds it at his chest.
13 D DOROTHEA (to Inez): Overture starts in four minutes.
14 D INEZ: Then we have four.
15 A ¶ She steps forward.
16 A The planks creak.
17 A The figure at the end stiffens.
18 A A hush falls over the orchestra pit below.
19 D FIGURE (without turning): I wouldn't come closer.
20 D INEZ: Put the case down.
21 D FIGURE: It's not a case. It's a promise.
22 A ¶ Barnabas swallows.
23 A Augusto crosses himself.
24 A Tomasz mutters something in Polish.
25 D TOMASZ (muttering): Boze, nie teraz.
26 D DOROTHEA (to the group): Does anyone know where the cut-off is for the chandelier cable?
27 D AUGUSTO: Stage left. Behind the fly rail.
28 D DOROTHEA: Go. Quietly.
29 A ¶ Augusto slips away.
30 A Inez keeps her eyes on the Figure.
31 D INEZ: You don't have to do this.
32 D FIGURE: Everyone says that.
33 D INEZ: Because it's true.
34 A ¶ The Figure turns.
35 A A woman, 50s, in evening dress and tennis shoes.
36 A VIOLETTA SANTORO-REYES, ex-soprano.
37 A Her face is wet.
38 A In her lap, the briefcase hums.
39 D VIOLETTA: They fired me in this house. I sang four hundred nights.
40 D INEZ: I know.
41 D VIOLETTA: Do you? Do you know what silence sounds like when you were the music?
42 D INEZ: No.
43 A ¶ Violetta nods.
44 A Her fingers drift to the clasp.
45 A Barnabas lifts his gun.
46 D OFFICER BARNABAS: Ma'am, stay still.
47 D INEZ (to Barnabas): Lower it.
48 D OFFICER BARNABAS: Detective --
49 D INEZ: Lower it, Barnabas.
50 A ¶ He lowers it.
51 A Violetta lets out a laugh, brittle and soft.
52 D VIOLETTA: Four minutes, you said.
53 D INEZ: Three.
54 D VIOLETTA: Then let me sing it one last time.
55 D DOROTHEA (into the headset, low): Hold the curtain. Hold it. Give me a spot on the catwalk.
56 A ¶ A spotlight swings up from below and finds Violetta.
57 A She blinks.
58 A Rises.
59 A The briefcase slides from her lap.
60 A It clatters empty to the planks, a few pieces of sheet music spilling out.
61 A ¶ Inez steps to it.
62 A Picks one up.
63 A It is an aria.
64 A Blank staves.
65 D INEZ (softly): There's no bomb.
66 D VIOLETTA: There never was.
67 A ¶ Below, the orchestra falls silent.
68 A Waiting.
69 A Violetta takes a breath, lifts her chin, and sings one clear note into the dark.
70 A It carries up into the rafters.
71 A Nobody on the catwalk moves.
72 D TOMASZ (whispering, awed): Matko Boska.
73 A ¶ Dorothea lowers her hand.
74 A Barnabas holsters his gun.
75 A Inez closes her eyes.

### SCENE s01097 | INT. CURLING CLUB - BAR - NIGHT
Detected names (may be incomplete or contain aliases): RAGS, ENGSTROM, TOBY, ADEKUNLE, LOLO, BEAUMONT
1 A ¶ Wood paneling.
2 A A dartboard.
3 A Brooms hung on pegs.
4 A Through the frosted glass, the ice gleams under floodlights.
5 A ¶ SKIP RAGNHILD "RAGS" ENGSTROM, 40s, tweed vest, nurses a ginger ale.
6 A Her third, TOBIAS "TOBY" ADEKUNLE, 30s, still in his team sweater, picks at a bowl of peanuts.
7 A Their lead, ELOISE "LOLO" BEAUMONT, 20s, shoes off, feet on a stool, scrolls her phone.
8 D RAGS: Lolo, put the phone down.
9 D LOLO: It's the final scores.
10 D RAGS: We lost.
11 D LOLO: By one stone.
12 D TOBY: By one stone, Rags. One.
13 D RAGS: Don't you start, Toby.
14 D TOBY: I'm just saying, if you'd called the hammer on the ninth end --
15 D RAGS: I called the hammer.
16 D TOBY: You called it late.
17 A ¶ Rags slams her glass on the bar.
18 A Lolo drops the phone.
19 A Toby freezes mid-peanut.
20 D RAGS: I called it when the ice told me to.
21 D LOLO: Rags, the ice doesn't talk.
22 D RAGS: It does if you listen.
23 A ¶ A silence.
24 A Toby slowly crunches a peanut.
25 A Lolo picks up her phone, slides it into her pocket.
26 A Rags unclenches her fist.
27 D RAGS [CONT'D] (quieter): We did well, Lolo.
28 D LOLO: We did.
29 D TOBY: We did great, Rags.
30 D RAGS: Don't suck up, Toby.
31 D TOBY: I'm sucking up with respect.
32 A ¶ Rags almost smiles.
33 A Lifts her glass.
34 D RAGS: To the ninth end.
35 D LOLO: To the ninth end.
36 D TOBY: To the hammer.
37 A ¶ They clink.
38 A Beyond the glass, the Zamboni hums across the ice, erasing everything.

### SCENE s01098 | INT. FUNERAL HOME - FAMILY ROOM - AFTERNOON
Detected names (may be incomplete or contain aliases): ROSEMARY PEMBERTON-DIALLO, BENEDICT PEMBERTON, DELPHINE ACHEBE-HART, FUNERAL DIRECTOR OSWALD PRICE
1 A ¶ Dim lamps.
2 A A mahogany casket at the front.
3 A Folding chairs in careful rows.
4 A A box of tissues on every seat.
5 A The smell of lilies and carpet cleaner.
6 A ¶ ROSEMARY PEMBERTON-DIALLO, 60s, in black wool, sits ramrod straight in the front row.
7 A Her son BENEDICT PEMBERTON, 40s, rumpled suit, fidgets beside her.
8 A Their cousin, DELPHINE ACHEBE-HART, 50s, large sunglasses indoors, stands against the back wall clutching her purse.
9 D BENEDICT: Mother, I can handle it.
10 D ROSEMARY: You can't handle a toaster.
11 D BENEDICT: That was one time.
12 D DELPHINE (from the back): It was three times, Ben.
13 D BENEDICT: Stay out of it, Delphine.
14 D DELPHINE: Don't tell me to stay out. I'm the one who found the will.
15 D ROSEMARY: The will is none of your business.
16 D DELPHINE: It's my business. I'm named in it.
17 D BENEDICT: You are not.
18 D DELPHINE: Page four. Paragraph two.
19 D ROSEMARY (rising): That paragraph was struck.
20 D DELPHINE: By who?
21 D ROSEMARY: By me.
22 D BENEDICT: Mother!
23 D ROSEMARY: Be quiet, Benedict.
24 D BENEDICT: You can't just --
25 D ROSEMARY: I can do what I please. I'm his widow.
26 D DELPHINE: And I'm his sister's daughter. Which makes me blood.
27 D ROSEMARY: Blood is overrated.
28 D DELPHINE: Says the woman who married into it.
29 A ¶ Silence.
30 A Rosemary stares at the casket.
31 A Her shoulders sag.
32 A Benedict puts a hand on her arm.
33 A She lets it stay.
34 D ROSEMARY (quiet): He would have hated this.
35 D BENEDICT: He would have loved it. The shouting.
36 D DELPHINE (wiping her eyes behind the sunglasses): He started half of it.
37 A ¶ A beat.
38 A Rosemary lets out a short, surprised laugh.
39 A Benedict follows.
40 A Delphine, last, a sob that turns into a snort.
41 A They sit in the gentle ruin.
42 A ¶ The door opens.
43 A FUNERAL DIRECTOR OSWALD PRICE, 50s, black suit, clears his throat.
44 D OSWALD: Ready, whenever you are.
45 D ROSEMARY: Give us a moment, Mr. Price.
46 D OSWALD: Of course.
47 A ¶ He retreats.
48 A Delphine crosses the room and sits on Rosemary's other side.
49 A Three of them in a row, looking at the casket.

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

### SCENE s01104 | EXT. RAILROAD WATER TOWER - HIGH PLAINS - DAWN
Detected names (may be incomplete or contain aliases): MARSHAL EZEKIEL DUNMORE, ODESSA PRATT-ADEYEMI, LAZARUS, RADIO
1 A ¶ A rusted tower on spindly legs.
2 A Dust devils on the flats.
3 A A single telegraph wire hums in the wind.
4 A ¶ MARSHAL EZEKIEL DUNMORE, 50s, hat low, rides in on a gray mare and dismounts at the base.
5 A Waiting there: ODESSA PRATT-ADEYEMI, 30s, canvas duster, rifle across her lap.
6 A Beside her, a boy, LAZARUS, 14, holds a canteen and keeps his eyes on his boots.
7 A ¶ Dunmore ties his horse.
8 A Takes his time.
9 D DUNMORE: You sent the telegram.
10 D ODESSA: I did.
11 D DUNMORE: Said you had the Whitaker brothers.
12 D ODESSA: I did, until they climbed the tower.
13 A ¶ Dunmore looks up.
14 A Two silhouettes against the pale sky, cross-legged on the catwalk.
15 D DUNMORE: They armed?
16 D ODESSA: They've got a Winchester and a jug.
17 A ¶ The telegraph wire sings.
18 A Dunmore pulls a pair of spectacles from his pocket, polishes them, puts them on.
19 A Lazarus finally looks up at him.
20 D LAZARUS: Marshal. Are you going to shoot them?
21 D DUNMORE: Not unless they ask nicely.
22 A ¶ Lazarus almost smiles.
23 A Odessa lifts her rifle a hair.
24 D RADIO [V.O.] (crackling from the saddlebag): Dunmore, this is Fort Bell. Report.
25 A ¶ Dunmore pulls a small field radio from the saddle.
26 A Raises it to his mouth.
27 D DUNMORE: Three at the tower. Two up high. Holding.
28 D RADIO [V.O.]: Copy. Reinforcements by noon.
29 D DUNMORE: They'll be too late.
30 A ¶ He clicks it off.
31 A Takes the rifle from Odessa's lap, hands it back to her, butt first.
32 A Walks to the ladder.
33 A Puts his boot on the first rung.
34 D ODESSA: Marshal.
35 A ¶ He pauses.
36 A She meets his eyes.
37 A Neither speaks.
38 A Lazarus watches both of them.
39 A Dunmore tips his hat and climbs.

### SCENE s01105 | EXT. BOMBED-OUT CINEMA - ROOFTOP - NIGHT
Detected names (may be incomplete or contain aliases): LIEUTENANT FIONNUALA BRADY-ESCOBAR, SERGEANT IKENNA ABARA, JAMSHID TAVAKOLI
1 A ¶ Half a marquee hangs by its cables.
2 A The facade is gone; the screen stands bare and cracked like a tooth.
3 A Smoke drifts across a starless sky.
4 A Below, a city of broken lamps.
5 A ¶ LIEUTENANT FIONNUALA BRADY-ESCOBAR, 30s, short dark hair, torn sleeve, crouches behind a ventilation stack with a scoped rifle across her knees.
6 A The scar on her cheek catches the glow of distant fires.
7 A Beside her, SERGEANT IKENNA ABARA, 40s, thick-armed, bleeds slowly from a bandage on his thigh.
8 A Further back, behind a toppled projector, huddles a civilian in a grease-stained coat: MR. JAMSHID TAVAKOLI, 60s, a projectionist, spectacles cracked.
9 A ¶ She lifts the scope.
10 A He presses a hand to the bandage.
11 D IKENNA: Anything?
12 D FIONNUALA: Two on the street. One on the balcony opposite.
13 D IKENNA: Ours?
14 D FIONNUALA: No.
15 A ¶ She doesn't move.
16 A The balcony light flickers.
17 A Mr. Tavakoli shifts and a piece of masonry falls from the projector.
18 A She flinches.
19 A Ikenna grabs her sleeve.
20 D IKENNA: Easy.
21 D FIONNUALA: He's making noise.
22 D IKENNA: He's old.
23 D FIONNUALA: He's loud.
24 A ¶ Tavakoli raises both hands, a gesture of apology.
25 A She exhales.
26 A Lowers the rifle an inch.
27 D MR. TAVAKOLI (whispering): I show films here thirty years. I know every board in this roof.
28 D FIONNUALA: Then tell me which ones creak.
29 D MR. TAVAKOLI: All of them. Except those.
30 A ¶ He points to a line of beams near the edge, bare against the sky.
31 D FIONNUALA: Can we reach them?
32 D MR. TAVAKOLI: If you crawl.
33 A ¶ She nods at Ikenna.
34 A He grimaces, rolls onto his stomach, begins to inch toward the beams.
35 A Blood darkens the roof where he passes.
36 A ¶ She watches him go.
37 A Then, quietly, she pulls the old man close and speaks in his ear.
38 D FIONNUALA: When he reaches the end, you follow. Do not stop.
39 D MR. TAVAKOLI: And you?
40 D FIONNUALA: I stay.
41 A ¶ He starts to protest.
42 A Her eyes silence him.
43 A A distant shell whistles in.
44 A They duck.
45 A The projectionist clings to the screen's iron frame.
46 A ¶ Ikenna reaches the beams.
47 A Raises one hand: the signal.
48 A Tavakoli crawls after him, gray hair dusted white with plaster.
49 A ¶ Fionnuala rises into a crouch.
50 A Raises the rifle.
51 A The balcony light flares.
52 A She takes aim.
53 A ¶ Below, in the bare screen's reflection, a thousand flickers of fire wink like frames of a lost film.

### SCENE s01106 | INT. FERRY CAFE - RAINY DAY
Detected names (may be incomplete or contain aliases): HAZEL OKONKWO-LARSEN, JONAH PELLEGRINI, WENDELL ACHTERBERG
1 A ¶ Steam on the windows.
2 A A chalkboard menu.
3 A Wet umbrellas in a bucket.
4 A The ferry's engine thrums through the floor.
5 A ¶ HAZEL OKONKWO-LARSEN, 30s, hair damp, sits at a corner table with a cup of tea.
6 A Across from her, JONAH PELLEGRINI, 30s, in a yellow raincoat, stirs sugar into coffee.
7 A Next to them, a stranger, WENDELL ACHTERBERG, 60s, reads a newspaper pretending not to listen.
8 D HAZEL: You said you'd be on the nine o'clock.
9 D JONAH: I missed it.
10 D HAZEL: You always miss it.
11 D JONAH: I got caught up.
12 D HAZEL: In what?
13 D JONAH: Life.
14 D WENDELL (from behind the paper): That's usually what it is.
15 D HAZEL (turning): Excuse me?
16 D WENDELL: Nothing. Carry on.
17 D JONAH: Sir, this is a private conversation.
18 D WENDELL: It's a ferry cafe. Nothing's private.
19 D HAZEL: He has a point.
20 D JONAH: Hazel.
21 D HAZEL: He does.
22 D JONAH: You're on his side now?
23 D WENDELL: I'm not on anyone's side. I'm reading about a cricket match.
24 D HAZEL (to Wendell): Who's winning?
25 D WENDELL: Nobody. It rained.
26 A ¶ Jonah laughs, despite himself.
27 A Hazel's mouth twitches.
28 A The ferry horn blasts.
29 A All three look up.
30 A Rain streams down the glass.
31 D JONAH (softly, to Hazel): I'm sorry.
32 D HAZEL (softly): I know.
33 D WENDELL (lowering the paper): And that's that.

### SCENE s01107 | EXT. ROOFTOP WATER TANK - SUBURBAN NIGHT
Detected names (may be incomplete or contain aliases): SADIE KOWALSKI-IBRAHIM, MILO BERGSTROM, RADIO
1 A ¶ A wooden tank on stilts above a flat tar roof.
2 A Cicadas.
3 A A radio plays low from an open window below.
4 A ¶ SADIE KOWALSKI-IBRAHIM, 16, sits on the ledge with her feet dangling.
5 A Her younger cousin MILO BERGSTROM, 13, climbs the last rung of the ladder, breathless.
6 A He freezes when he sees her.
7 A She doesn't turn.
8 A ¶ He climbs onto the roof.
9 A She hears him.
10 A Shifts a few inches to make room.
11 A He sits.
12 A They stare at the neighbors' lit windows.
13 D RADIO [V.O.] (muffled, from below): ...and now, the late-night countdown. Number three this week...
14 A ¶ She hums along.
15 A He taps his heel against the brick.
16 A A long moment passes.
17 A ¶ He offers her a cracker from his pocket.
18 A She takes it.
19 A They chew in the dark.
20 A ¶ She shoves him gently.
21 A He shoves back.
22 A She nearly slides off the ledge; he grabs her sleeve.
23 A They both go still.
24 A Then she laughs, and he lets go, and neither of them says what almost happened.
25 D RADIO [V.O.]: ...and the number one song in the country...
26 A ¶ She stands, brushes crumbs from her knees.
27 A Holds out her hand.
28 A He takes it.
29 A They climb down together, the song swelling behind them.

### SCENE s01109 | INT. EMPTY GYM - SCOREBOARD CONTROL CLOSET - NIGHT
Detected names (may be incomplete or contain aliases): BILLIE, ROSSITER-KAMARA, JANITOR
1 A ¶ A cramped closet with a hand-wired switchboard.
2 A Taped wires.
3 A A dusty window onto the dark court below.
4 A A folding chair.
5 A ¶ WILHELMINA "BILLIE" ROSSITER-KAMARA, 50s, former point guard, in a faded jersey and sweatpants, sits at the board with a clipboard on her lap.
6 A She taps a button.
7 A Below, the old scoreboard blinks: HOME 00 GUEST 00.
8 D BILLIE: Check, check.
9 A ¶ She taps another button.
10 A A horn blares through the empty gym.
11 A She winces, turns the volume down a notch.
12 D BILLIE [CONT'D] (to herself): Twenty-two years and I still hit the wrong one.
13 A ¶ A crackle on the intercom.
14 D JANITOR [V.O.] (over the PA): Coach? You still in there?
15 D BILLIE (leaning to the mic): Five more minutes, Eddie.
16 D JANITOR [V.O.]: Lights go off at ten.
17 D BILLIE: I know.
18 A ¶ She hangs up the mic.
19 A Looks down through the window.
20 A The court is blank hardwood, the lines worn pale.
21 A She flips a switch.
22 A A spotlight lands on center court.
23 A ¶ She sits for a while, watching the empty circle of light.
24 D BILLIE [CONT'D] (softly): Tip off.
25 A ¶ She presses the home-score button.
26 A HOME climbs: 02.
27 A She presses it again: 04.
28 A Then 06.
29 A Then 08.
30 A She presses it until it reads 99.
31 A A small, crooked smile.
32 A ¶ She hits the horn one last time.
33 A It rolls across the gym, rattling the rafters.
34 D BILLIE [CONT'D] (whispering): Good game.
35 A ¶ She clicks off the spotlight.
36 A The scoreboard goes dark.

### SCENE s01110 | INT. ANSWERING MACHINE - PARKED CAR OUTSIDE A HOSPITAL - NIGHT
Detected names (may be incomplete or contain aliases): CORNELIUS AJAYI-WHITLOCK, MACHINE
1 A ¶ Dashboard glow.
2 A A paper coffee cup.
3 A Sodium lights smearing across the windshield.
4 A The engine ticks as it cools.
5 A ¶ CORNELIUS AJAYI-WHITLOCK, 60s, tie loosened, grips the steering wheel with both hands.
6 A A phone rests in the cup holder, speaker on.
7 D MACHINE [V.O.] (electronic, cheerful): You have reached the home of the Ajayi-Whitlock family. We can't come to the phone right now. Leave a message.
8 A ¶ BEEP.
9 D CORNELIUS: Hey, Mara. It's Dad.
10 A ¶ He clears his throat.
11 D CORNELIUS [CONT'D]: I know you're not going to pick up. You haven't picked up in three years. That's fine. I'm not calling to make you.
12 A ¶ He rubs his eyes with the heel of his hand.
13 D CORNELIUS [CONT'D]: Your mother's room is on the fourth floor. Bed six. They moved her out of intensive care this afternoon. She asked about you. She asked if the flowers on her windowsill were from you. I told her yes.
14 A ¶ A long breath.
15 D CORNELIUS [CONT'D]: They weren't. I bought them. At the corner shop. But I thought, what's one more lie after thirty years of marriage. She smiled. That was enough.
16 A ¶ His voice cracks.
17 A He lets it.
18 A A nurse passes the windshield in the lot.
19 A He doesn't look.
20 D CORNELIUS [CONT'D]: The doctor says it could be days. Could be weeks. Could be a month. They don't know. They never know.
21 A ¶ He grips the wheel harder.
22 D CORNELIUS [CONT'D]: I'm not asking you to come. I'm only telling you where we are. Fourth floor. Bed six. Visiting hours until nine. After that, tell the desk you're family. They'll let you in.
23 A ¶ He reaches for the phone.
24 A Stops.
25 D CORNELIUS [CONT'D]: I did love the way you used to leave messages on this machine. Do you remember? You'd sing. Wrong notes. Every time.
26 A ¶ A pause.
27 D CORNELIUS [CONT'D]: Sing something, Mara. If you want. Anything.
28 A ¶ He waits.
29 A Only static.
30 A Then the long tone of the machine closing the line.
31 D MACHINE [V.O.] (cheerful): Your message has been saved.

### SCENE s01111 | INT. SURPRISE PARTY - APARTMENT LIVING ROOM - DARK - EVENING
Detected names (may be incomplete or contain aliases): BEA, LINDQVIST-ADE, COLM FITZGIBBON, ROZ, PELLEGRINO-OKON, YOSHIRO BAPTISTE, TIBBY, MORROW, DELIVERY GUY, ALL
1 A ¶ Balloons.
2 A A banner.
3 A A cake with too many candles.
4 A Five adults crouch behind furniture, whispering, trying not to giggle.
5 A ¶ BEATRIX "BEA" LINDQVIST-ADE, 40s, behind the couch with a noisemaker.
6 A COLM FITZGIBBON, 30s, behind the armchair holding a camera.
7 A ROSALIND "ROZ" PELLEGRINO-OKON, 50s, under the dining table with the cake.
8 A YOSHIRO BAPTISTE, 20s, crouched by the door, finger on the lights.
9 A And TIBERIUS "TIBBY" MORROW, 60s, hidden inside the coat closet.
10 D BEA (whispering): She's coming up the stairs.
11 D COLM (whispering): How do you know?
12 D BEA: I hear her keys.
13 D ROZ: She's got the wrong keys.
14 D YOSHIRO: Shh!
15 A ¶ The doorknob rattles.
16 A All five freeze.
17 A A key scrapes and fails.
18 A Another.
19 A A third.
20 D TIBBY (from the closet): Is it her?
21 D BEA: Quiet!
22 A ¶ The door swings open.
23 A A silhouette in the hall: a stranger in a delivery uniform, holding a pizza box.
24 D DELIVERY GUY: Uh. Hello?
25 A ¶ Yoshiro flips the lights.
26 A Everyone leaps up.
27 D ALL: Surprise!
28 A ¶ Roz pitches the cake into the air.
29 A Colm's flash goes off.
30 A Bea blows the noisemaker in the Delivery Guy's face.
31 A He yelps, the pizza flies, the cake lands on Tibby as he tumbles out of the closet.
32 A ¶ Silence.
33 A Frosting drips from Tibby's nose.
34 A The Delivery Guy stares at them all.
35 D DELIVERY GUY [CONT'D]: ...Does anyone here order a large pepperoni?
36 D BEA (weakly): Wrong apartment?
37 D DELIVERY GUY: Apparently.
38 A ¶ Tibby licks frosting from his lip.
39 D TIBBY: Well. I'll take the pizza.

### SCENE s01112 | EXT. ICE-CAVE MOUTH - GLACIER - DAWN
Detected names (may be incomplete or contain aliases): NADIA, VOLKOV-ASANTE, NAT, BELL-TAKAHASHI, DESMOND OKONKWO-PARR
1 A ¶ A blue gash in a field of white.
2 A Wind scours the snow into long ripples.
3 A Three tiny figures stand at the lip of a frozen lake, backs to the cave.
4 A ¶ NADEZHDA "NADIA" VOLKOV-ASANTE, 40s, orange parka, iced eyelashes, drags a sled carrying a sleeping bag.
5 A Next to her, IGNATIUS "NAT" BELL-TAKAHASHI, 30s, hood drawn, gloves split at the fingertips, winds a rope around his waist.
6 A Dragging up the rear, DESMOND OKONKWO-PARR, 20s, lagging, hobbles on one swollen ankle.
7 D NADIA: Rest stop. Ten minutes.
8 D NAT: We don't have ten.
9 D NADIA: We have what we have.
10 A ¶ She drops the sled's handle.
11 A He kneels, checking the knot on the sleeping bag, while Desmond lowers himself onto his pack.
12 A Nat pulls out a thermos, takes a swallow, hands it to Desmond.
13 A Desmond drinks, hands it to Nadia, who sips and stares across the frozen lake at a ridge of dark rock.
14 D NADIA [CONT'D]: That's the pass.
15 D NAT: How far?
16 D NADIA: Six kilometers. Maybe seven.
17 D DESMOND (quietly): I can walk.
18 D NAT: You can't.
19 D DESMOND: I can crawl.
20 D NADIA: Nobody's crawling.
21 A ¶ She stands, tightens the sled's strap.
22 A Nat rises, unwinds the rope, ties one end to the sled and the other to Desmond's pack.
23 A Desmond opens his mouth to protest.
24 A Nat holds up a hand.
25 D NAT: You're the anchor. Don't argue.
26 D DESMOND: That's backwards.
27 D NAT: Humor me.
28 A ¶ Wind gusts, whipping powder across their faces.
29 A Nadia pulls up her hood, turns toward the pass, and leans into the haul line.
30 A The sled lurches.
31 A Nat falls in beside her.
32 A Desmond, tethered, drags his foot.
33 A ¶ They walk.
34 A No one speaks.
35 A Their shadows lengthen across the ice.

### SCENE s01113 | INT. CRYO-VAULT - ORBITAL STATION - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): COMMANDER ODALYS REEVES-AKINTOLA, TECH SANTIAGO OYELARAN-WOO, DOCTOR MIRIAM BELLAMY, PIXIE
1 A ¶ Frost on steel.
2 A Rows of dark capsules.
3 A A single red indicator blinks.
4 A Breath hangs in the air.
5 A ¶ COMMANDER ODALYS REEVES-AKINTOLA, 40s, parka over her flight suit, kneels by capsule 17 and wipes frost from its window.
6 A Behind her, TECH SANTIAGO OYELARAN-WOO, 30s, scans a diagnostic panel.
7 A Over by the airlock, DOCTOR MIRIAM BELLAMY, 50s, lifts a medical scanner, and next to her a scruffy teenage stowaway, PIXIE, 15, shivers in a borrowed coat.
8 D SANTIAGO: Pod 17 is cold.
9 D ODALYS: Pod 17 is empty.
10 D MIRIAM: Then where is the occupant?
11 D PIXIE: Maybe he got up and left.
12 A ¶ Nobody laughs.
13 A Miriam lowers the scanner.
14 A Odalys stands slowly.
15 A Santiago taps the panel; the indicator blinks red.
16 D ODALYS: Open it.
17 D SANTIAGO: Ma'am --
18 D ODALYS: Open it.
19 A ¶ He presses the release.
20 A The capsule hisses.
21 A The lid lifts.
22 A Inside: a folded blanket, a child's drawing, a shut-off pulse monitor.
23 A ¶ Odalys picks up the drawing.
24 A Studies it.
25 A Her thumb smooths the paper's edge.
26 A Miriam steps closer, then stops.
27 A ¶ Pixie reaches for the monitor.
28 A Santiago catches her wrist, gently.
29 A She pulls away, embarrassed, and sits on the floor.
30 D ODALYS [CONT'D] (quiet): Seal it.
31 A ¶ Santiago closes the lid.
32 A The hiss fades.
33 A Miriam puts a hand on Odalys's shoulder.
34 A Odalys folds the drawing in half, then in half again, and slides it into her pocket.

### SCENE s01114 | INT. HOSPITAL STAIRWELL - LANDING BETWEEN FLOORS - 3 A.M.
Detected names (may be incomplete or contain aliases): ANSELMO KWAKU-REYNOLDS, OPERATOR
1 A ¶ Concrete steps.
2 A A humming exit sign.
3 A A window onto a dark parking structure.
4 A A vending machine glows at the landing.
5 A ¶ DR. ANSELMO KWAKU-REYNOLDS, 40s, scrubs, paper hat crumpled in his fist, sits on the steps with his head against the wall.
6 A A phone rests on his knee, speaker on.
7 D OPERATOR [V.O.] (distant, tired): Cardiology to Dr. Kwaku-Reynolds. Please call extension four-four-one-two.
8 D ANSELMO (to the phone): I'm on a break.
9 D OPERATOR [V.O.]: Doctor, they said it's urgent.
10 D ANSELMO: It's always urgent.
11 A ¶ He turns the phone face down on the step.
12 A The voice continues in muffled bursts.
13 A He lets it.
14 D ANSELMO [CONT'D] (to himself, steady): Forty-one patients on the unit. Three discharges at eight. Two transfers at noon. One bed that nobody gets until I sign off on a chart I haven't finished. And I'm sitting on a stair.
15 A ¶ He laughs, quietly.
16 A Wipes a hand over his face.
17 D ANSELMO [CONT'D]: When I was a student, an old attending told me: "A doctor is a man who fixes what he can and carries what he can't." I thought it was poetry.
18 A ¶ A pause.
19 A The vending machine hums.
20 D ANSELMO [CONT'D]: It's a weight limit.
21 A ¶ He stands, brushes off his scrubs, flattens the paper hat, puts it on.
22 A Picks up the phone.
23 D ANSELMO [CONT'D] (into the phone): This is Kwaku-Reynolds. Coming up.
24 D OPERATOR [V.O.]: Thank you, Doctor.
25 A ¶ He pockets the phone and climbs.

### SCENE s01115 | EXT. TREEHOUSE IN A SYCAMORE - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): WINNIE, AUGUSTINE OKORO-BAKER, KIERAN PRZYBYLSKI-DIOP, LOTTE ABERNATHY-SATO
1 A ¶ A crooked platform nailed into the branches of an old sycamore.
2 A A rope ladder.
3 A A tin sign: NO PARENTS.
4 A Golden light slanting through leaves.
5 A ¶ WINIFRED "WINNIE" OKORO-BAKER, 12, sits cross-legged with a deck of cards.
6 A Her best friend, KIERAN PRZYBYLSKI-DIOP, 12, lies on his back chewing a grass blade.
7 A On the opposite branch, her older brother AUGUSTINE OKORO-BAKER, 16, strums a ukulele with the lazy patience of someone who isn't practicing.
8 A And in the lower fork, with legs dangling, sits a new neighbor, LOTTE ABERNATHY-SATO, 13, clutching a paper bag of licorice and watching all three with wide, uncertain eyes.
9 D WINNIE: Deal me in.
10 D KIERAN: You don't know how to play.
11 D WINNIE: I know enough.
12 D AUGUSTINE (strumming): She cheats.
13 D WINNIE: I do not!
14 D AUGUSTINE: ^She cheats.
15 D KIERAN (laughing): You both said it at the same time.
16 A ¶ Winnie throws a card at Augustine.
17 A It flutters off the platform and spins to the ground.
18 A Lotte leans down to follow its path, then straightens and offers the bag.
19 D LOTTE: Licorice?
20 D WINNIE (brightening): Yes. Black or red?
21 D LOTTE: Both.
22 A ¶ Kieran sits up.
23 A Winnie plucks a red strand.
24 A Augustine, still strumming, leans across to take a black one.
25 A Lotte smiles, relieved.
26 D KIERAN: You're the new one.
27 D LOTTE: Lotte.
28 D AUGUSTINE: Where'd you move from?
29 D LOTTE: Rotterdam.
30 D WINNIE: Where's that?
31 D LOTTE: Far.
32 A ¶ Kieran shuffles the deck.
33 A Winnie takes a card, glances at it, then slides it face down.
34 A Augustine's chords slow into something sweeter.
35 A Lotte tucks her knees up.
36 A A breeze lifts the sycamore leaves.
37 A ¶ The four of them sit in the green quiet.
38 A The ukulele hums.
39 A A card drifts down from somewhere above and lands in Lotte's lap.
40 A She looks at it, then at the others, and grins.

### SCENE s01116 | INT. VINEYARD CELLAR - BARREL ROOM - DUSK
Detected names (may be incomplete or contain aliases): IZABELLA ROMANO-OKAFOR, TEDDY, GALLOWAY, CAMILA ROMANO, HENRIK ABASI-LUND
1 A ¶ Oak barrels in rows.
2 A Candlelight.
3 A A tasting table with four glasses.
4 A ¶ IZABELLA ROMANO-OKAFOR, 30s, in a linen apron, pours.
5 A Across from her, THEODORE "TEDDY" GALLOWAY, 30s, her ex, swirls and sniffs.
6 A At the end of the table, her sister CAMILA ROMANO, 30s, in a sundress, studies him.
7 A And beside Camila, a quiet man, HENRIK ABASI-LUND, 40s, who has said nothing all evening.
8 A ¶ Teddy sips.
9 A Izabella watches.
10 A Camila watches Izabella.
11 A Henrik watches the wine.
12 D TEDDY: It's good.
13 D IZABELLA: It's better than good.
14 D TEDDY: It's... complex.
15 D CAMILA: He means it's sour.
16 D TEDDY: I do not.
17 D CAMILA: You do. Your nose wrinkles.
18 A ¶ Teddy touches his nose.
19 A Izabella suppresses a smile.
20 A Henrik takes a slow sip and sets down his glass.
21 D HENRIK: It's perfect.
22 A ¶ All three turn.
23 A He shrugs, unbothered.
24 D HENRIK [CONT'D]: I'm the one who sold her the grapes.
25 D IZABELLA (to Teddy): That's Henrik.
26 D TEDDY: I gathered.
27 D IZABELLA: And that's my fiance.
28 A ¶ Teddy's glass stops halfway to his mouth.
29 A Camila lowers her eyes.
30 A Henrik, calmly, takes Izabella's hand.
31 D TEDDY: ...Congratulations.
32 D IZABELLA: Thank you, Teddy.
33 A ¶ He drains the glass.
34 A Sets it down.
35 A Smooths his jacket.
36 A Camila slides the bottle toward him, tender.
37 D CAMILA: Another?
38 D TEDDY (a breath): Please.

### SCENE s01117 | INT. FARMHOUSE KITCHEN - EARLY MORNING
Detected names (may be incomplete or contain aliases): BABCIA, KOWALCZYK-EZE, FELIX DELACROIX-ADEYEMI
1 A ¶ A big scarred table.
2 A Copper pots on hooks.
3 A A wood stove ticking.
4 A Through the window, mist lies low over a field of frosted stubble.
5 A ¶ GRANDMOTHER AGNIESZKA "BABCIA" KOWALCZYK-EZE, 70s, in a faded housedress, stands at the stove stirring a pot of porridge.
6 A Her grandson FELIX DELACROIX-ADEYEMI, 11, sits at the table in pajamas, chin on his folded arms.
7 A He watches her back with the stubborn patience of a boy who has a question.
8 D FELIX: Babcia.
9 D BABCIA: Hm.
10 D FELIX: Why did Mama leave?
11 A ¶ Babcia's spoon stops.
12 A Resumes.
13 A She doesn't turn.
14 A Steam curls around her shoulders.
15 A She adds a pinch of salt, tastes, adds another.
16 D BABCIA: Eat first.
17 D FELIX: I'm not hungry.
18 D BABCIA: You will be.
19 A ¶ She ladles porridge into a chipped bowl.
20 A Brings it to the table.
21 A Sets it before him with a spoon.
22 A Smooths his hair with one flour-dusted hand.
23 A He leans into it, then catches himself and pulls away.
24 A She sits across from him with a groan, folds her hands.
25 D BABCIA [CONT'D]: Your mother wanted a different life.
26 D FELIX: Different from what?
27 D BABCIA: From this.
28 A ¶ She gestures at the kitchen, the stove, the window.
29 A Felix looks at each in turn.
30 A He picks up the spoon and stirs the porridge without eating.
31 D FELIX: Is it that bad?
32 D BABCIA: Not to me.
33 D FELIX: Is it bad to you?
34 D BABCIA (a long pause): No, Felix. It is not bad.
35 A ¶ He eats a bite.
36 A Then another.
37 A She watches.
38 A The stove ticks.
39 A A rooster crows somewhere in the mist.
40 D FELIX: Babcia?
41 D BABCIA: Yes, my little bird?
42 D FELIX: Will she come back?
43 A ¶ Babcia reaches across the table and covers his hand with her own.
44 A Her knuckles are swollen, her skin like old paper.
45 A He turns his palm up and holds on.
46 D BABCIA: Every spring the swallows go away, and every spring they return. Nobody tells them to. They only remember where the barn is.
47 D FELIX: That's not an answer.
48 D BABCIA: No. It isn't.
49 A ¶ She smiles, tired and tender.
50 A He smiles back, small.
51 A Outside, the mist begins to lift, and the first gold light touches the frost.

### SCENE s01118 | INT. LIGHTHOUSE KEEPER'S LOG ROOM - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR GWENDOLYN ADEBAYO-HARTWELL, HARBORMASTER
1 A ¶ Cramped.
2 A A circular desk.
3 A Ship's barometer, brass lamp, rows of leather-bound logbooks.
4 A Fog presses on the window.
5 A The foghorn sounds every ninety seconds.
6 A ¶ INSPECTOR GWENDOLYN ADEBAYO-HARTWELL, 50s, oilskin coat dripping on the planks, sits at the desk with a lamp and a stack of logbooks.
7 A She flips pages with a gloved hand, jots notes in a pocket pad, taps a pen against her teeth.
8 A The foghorn sounds.
9 A She does not flinch.
10 D GWENDOLYN (to the room): October ninth. "Light functioning. Visibility poor." October tenth. "Light functioning. Visibility poor." October eleventh.
11 A ¶ She stops.
12 A Runs a finger over the ink.
13 D GWENDOLYN [CONT'D]: "Light functioning. Visibility poor. Mr. Pellew did not return."
14 A ¶ She flips back.
15 A Forward.
16 A Back again.
17 D GWENDOLYN [CONT'D]: Three entries, same handwriting. Same ink. Same hour. But the first two were written by a man who is alive, and the third by a man who isn't.
18 A ¶ She lifts the lamp and holds the page to the flame.
19 A Behind the ink, faint, a second line shows through, written in a different hand and scratched out.
20 D GWENDOLYN [CONT'D] (reading, softly): "He did not fall."
21 A ¶ Her radio crackles on the desk.
22 A She snatches it up.
23 D HARBORMASTER [V.O.] (over the radio): Inspector? You got anything yet?
24 D GWENDOLYN: I have a log that lies, Harbormaster. And a keeper who's missing.
25 D HARBORMASTER [V.O.]: Pellew's boat washed up on the rocks. Empty.
26 D GWENDOLYN: Was the lamp lit?
27 D HARBORMASTER [V.O.]: Aye. All night.
28 D GWENDOLYN: Who lit it?
29 D HARBORMASTER [V.O.]: You tell me, Inspector. You're the one in the tower.
30 A ¶ She sets the radio down.
31 A The foghorn sounds.
32 A A floorboard above her creaks.
33 A She looks at the ceiling, at the spiral stair, and then at the pen in her hand.
34 A ¶ She rises, slips the log into her coat, and climbs.

### SCENE pd_dollhouse_0 | INT. DOLLHOUSE - CONTINUOUS
Detected names (may be incomplete or contain aliases): NORA, PORTER, MAID, HELMER
1 A ¶ [SCENE.—A room furnished comfortably and tastefully, but not extravagantly.
2 A At the back, a door to the right leads to the entrance-hall, another to the left leads to Helmer’s study.
3 A Between the doors stands a piano.
4 A In the middle of the left-hand wall is a door, and beyond it a window.
5 A Near the window are a round table, arm-chairs and a small sofa.
6 A In the right-hand wall, at the farther end, another door; and on the same side, nearer the footlights, a stove, two easy chairs and a rocking-chair; between the stove and the door, a small table.
7 A Engravings on the walls; a cabinet with china and other small objects; a small book-case with well-bound books.
8 A The floors are carpeted, and a fire burns in the stove.
9 A It is winter.
10 A ¶ A bell rings in the hall; shortly afterwards the door is heard to open.
11 A Enter NORA, humming a tune and in high spirits.
12 A She is in outdoor dress and carries a number of parcels; these she lays on the table to the right.
13 A She leaves the outer door open after her, and through it is seen a PORTER who is carrying a Christmas Tree and a basket, which he gives to the MAID who has opened the door.]
14 D NORA: Hide the Christmas Tree carefully, Helen. Be sure the children do not see it until this evening, when it is dressed.
15 A ¶ To the PORTER, taking out her purse.
16 D NORA: How much?
17 D PORTER: Sixpence.
18 D NORA: There is a shilling. No, keep the change.
19 A ¶ The PORTER thanks her, and goes out.
20 A NORA shuts the door.
21 A She is laughing to herself, as she takes off her hat and coat.
22 A She takes a packet of macaroons from her pocket and eats one or two; then goes cautiously to her husband’s door and listens.
23 D NORA: Yes, he is in.
24 A ¶ Still humming, she goes to the table on the right.
25 A ¶ calls out from his room.
26 D HELMER: . Is that my little lark twittering out there?
27 A ¶ busy opening some of the parcels.
28 D NORA: . Yes, it is!
29 D HELMER: Is it my little squirrel bustling about?
30 D NORA: Yes!
31 D HELMER: When did my squirrel come home?
32 D NORA: Just now.
33 A ¶ Puts the bag of macaroons into her pocket and wipes her mouth.
34 D NORA: Come in here, Torvald, and see what I have bought.
35 D HELMER: Don’t disturb me.
36 A ¶ A little later, he opens the door and looks into the room, pen in hand.
37 D HELMER: Bought, did you say? All these things? Has my little spendthrift been wasting money again?
38 D NORA: Yes but, Torvald, this year we really can let ourselves go a little. This is the first Christmas that we have not needed to economise.
39 D HELMER: Still, you know, we can’t spend money recklessly.
40 D NORA: Yes, Torvald, we may be a wee bit more reckless now, mayn’t we? Just a tiny wee bit! You are going to have a big salary and earn lots and lots of money.
41 D HELMER: Yes, after the New Year; but then it will be a whole quarter before the salary is due.
42 D NORA: Pooh! we can borrow until then.
43 D HELMER: Nora!
44 A ¶ Goes up to her and takes her playfully by the ear.
45 D HELMER: The same little featherhead! Suppose, now, that I borrowed fifty pounds today, and you spent it all in the Christmas week, and then on New Year’s Eve a slate fell on my head and killed me, and—
46 A ¶ putting her hands over his mouth.
47 D NORA: . Oh! don’t say such horrid things.
48 D HELMER: Still, suppose that happened,—what then?
49 D NORA: If that were to happen, I don’t suppose I should care whether I owed money or not.
50 D HELMER: Yes, but what about the people who had lent it?
51 D NORA: They? Who would bother about them? I should not know who they were.
52 D HELMER: That is like a woman! But seriously, Nora, you know what I think about that. No debt, no borrowing. There can be no freedom or beauty about a home life that depends on borrowing and debt. We two have kept bravely on the straight road so far, and we will go on the same way for the short time longer that there need be any struggle.
53 A ¶ moving towards the stove.
54 D NORA: . As you please, Torvald.
55 A ¶ following her.
56 D HELMER: . Come, come, my little skylark must not droop her wings. What is this! Is my little squirrel out of temper?
57 A ¶ Taking out his purse.
58 D HELMER: Nora, what do you think I have got here?
59 A ¶ turning round quickly.

### SCENE pd_dollhouse_1 | INT. DOLLHOUSE - CONTINUOUS
Detected names (may be incomplete or contain aliases): NORA, MRS LINDE, SERVANT, KROGSTAD
1 D NORA: . Yes—someday, perhaps, after many years, when I am no longer as nice-looking as I am now. Don’t laugh at me! I mean, of course, when Torvald is no longer as devoted to me as he is now; when my dancing and dressing-up and reciting have palled on him; then it may be a good thing to have something in reserve—
2 A ¶ Breaking off.
3 D NORA: What nonsense! That time will never come. Now, what do you think of my great secret, Christine? Do you still think I am of no use? I can tell you, too, that this affair has caused me a lot of worry. It has been by no means easy for me to meet my engagements punctually. I may tell you that there is something that is called, in business, quarterly interest, and another thing called payment in installments, and it is always so dreadfully difficult to manage them. I have had to save a little here and there, where I could, you understand. I have not been able to put aside much from my housekeeping money, for Torvald must have a good table. I couldn’t let my children be shabbily dressed; I have felt obliged to use up all he gave me for them, the sweet little darlings!
4 D MRS LINDE: So it has all had to come out of your own necessaries of life, poor Nora?
5 D NORA: Of course. Besides, I was the one responsible for it. Whenever Torvald has given me money for new dresses and such things, I have never spent more than half of it; I have always bought the simplest and cheapest things. Thank Heaven, any clothes look well on me, and so Torvald has never noticed it. But it was often very hard on me, Christine—because it is delightful to be really well dressed, isn’t it?
6 D MRS LINDE: Quite so.
7 D NORA: Well, then I have found other ways of earning money. Last winter I was lucky enough to get a lot of copying to do; so I locked myself up and sat writing every evening until quite late at night. Many a time I was desperately tired; but all the same it was a tremendous pleasure to sit there working and earning money. It was like being a man.
8 D MRS LINDE: How much have you been able to pay off in that way?
9 D NORA: I can’t tell you exactly. You see, it is very difficult to keep an account of a business matter of that kind. I only know that I have paid every penny that I could scrape together. Many a time I was at my wits’ end.
10 A ¶ Smiles.
11 D NORA: Then I used to sit here and imagine that a rich old gentleman had fallen in love with me—
12 D MRS LINDE: What! Who was it?
13 D NORA: Be quiet!—that he had died; and that when his will was opened it contained, written in big letters, the instruction: “The lovely Mrs Nora Helmer is to have all I possess paid over to her at once in cash.”
14 D MRS LINDE: But, my dear Nora—who could the man be?
15 D NORA: Good gracious, can’t you understand? There was no old gentleman at all; it was only something that I used to sit here and imagine, when I couldn’t think of any way of procuring money. But it’s all the same now; the tiresome old person can stay where he is, as far as I am concerned; I don’t care about him or his will either, for I am free from care now.
16 A ¶ Jumps up.
17 D NORA: My goodness, it’s delightful to think of, Christine! Free from care! To be able to be free from care, quite free from care; to be able to play and romp with the children; to be able to keep the house beautifully and have everything just as Torvald likes it! And, think of it, soon the spring will come and the big blue sky! Perhaps we shall be able to take a little trip—perhaps I shall see the sea again! Oh, it’s a wonderful thing to be alive and be happy.
18 A ¶ A bell is heard in the hall.
19 A ¶ rising.
20 D MRS LINDE: . There is the bell; perhaps I had better go.
21 D NORA: No, don’t go; no one will come in here; it is sure to be for Torvald.
22 A ¶ at the hall door.
23 D SERVANT: . Excuse me, ma’am—there is a gentleman to see the master, and as the doctor is with him—
24 D NORA: Who is it?
25 A ¶ at the door.
26 D KROGSTAD: . It is I, Mrs Helmer.
27 A ¶ Mrs LINDE starts, trembles, and turns to the window.
28 A ¶ takes a step towards him, and speaks in a strained, low voice.
29 D NORA: . You? What is it? What do you want to see my husband about?
30 D KROGSTAD: Bank business—in a way. I have a small post in the Bank, and I hear your husband is to be our chief now—
31 D NORA: Then it is—
32 D KROGSTAD: Nothing but dry business matters, Mrs Helmer; absolutely nothing else.
33 D NORA: Be so good as to go into the study, then.
34 A ¶ She bows indifferently to him and shuts the door into the hall; then comes back and makes up the fire in the stove.
35 D MRS LINDE: Nora—who was that man?
36 D NORA: A lawyer, of the name of Krogstad.
37 D MRS LINDE: Then it really was he.
38 D NORA: Do you know the man?
39 D MRS LINDE: I used to—many years ago. At one time he was a solicitor’s clerk in our town.
40 D NORA: Yes, he was.
41 D MRS LINDE: He is greatly altered.
42 D NORA: He made a very unhappy marriage.
43 D MRS LINDE: He is a widower now, isn’t he?
44 D NORA: With several children. There now, it is burning up.
45 A ¶ Shuts the door of the stove and moves the rocking-chair aside.
