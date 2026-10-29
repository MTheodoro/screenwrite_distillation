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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_sonnet/group_00035.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01843 | INT. TRAUMA BAY - NIGHT
Detected names (may be incomplete or contain aliases): SADIE OYELARAN, BEN, KOWALCZYK, ILSE VANTERPOOL, MOSES HARGROVE
1 A ¶ A curtained bay under hard white light.
2 A Monitors beep.
3 A A gurney sits canted in the center, stained sheets bunched at the foot.
4 A Instruments on a steel tray, a red crash cart, a clock that reads 2:47.
5 A ¶ DR. SADIE OYELARAN, 30s, surgical cap, sleeves pushed up, stands over the gurney with both hands on the chest of an unseen patient and counts under her breath.
6 A Across the gurney, NURSE BENEDICT "BEN" KOWALCZYK, 40s, squeezes a bag-valve mask on a rhythm.
7 A At the foot, with a clipboard, stands the resident DR. ILSE VANTERPOOL, 20s, pale, hair coming loose.
8 A Nearest the door, arms folded, watches the attending, DR. MOSES HARGROVE, 60s, silver hair, a stethoscope draped like a scarf.
9 D SADIE: Thirty. Check.
10 D BEN: No pulse.
11 D SADIE: Again.
12 A ¶ She resumes compressions.
13 A The monitor spikes, flatlines, spikes.
14 A Ilse writes a note and drops the pen.
15 D ILSE: Dr. Hargrove, we're at twelve minutes.
16 D HARGROVE: I can read a clock, Dr. Vanterpool.
17 D ILSE: Sir, I think we should--
18 D HARGROVE: Think quietly.
19 D BEN: Sadie, your arms.
20 D SADIE: They're fine.
21 D BEN: Switch with me.
22 D SADIE: I said they're fine.
23 A ¶ He lets go of the mask, rounds the gurney, and puts a hand on her shoulder.
24 A She does not look up.
25 A He waits.
26 A After a beat she steps aside, wiping her brow with her forearm, and he takes her place.
27 A She takes the bag-valve mask.
28 D SADIE [CONT'D]: Ben. Count.
29 D BEN (compressing): One, two, three, four.
30 A ¶ The monitor beeps once.
31 A Everyone freezes.
32 A It beeps again, uneven.
33 A Ilse looks up.
34 A Hargrove uncrosses his arms.
35 D ILSE: That's a rhythm.
36 D HARGROVE: That's an artifact.
37 D SADIE (still bagging): That's a rhythm.
38 D HARGROVE: Dr. Oyelaran.
39 D SADIE: Look at the screen, Moses.
40 A ¶ He does.
41 A A ragged line climbs and descends, climbs and descends.
42 D BEN (breathless): Pulse. I've got a pulse.
43 D SADIE: Pressure?
44 D ILSE: Seventy over forty.
45 D SADIE: Fluids. Wide open.
46 A ¶ Ilse darts to the cart.
47 A Hargrove steps forward, takes the stethoscope from his neck, presses it to the patient's chest, and listens.
48 A The line on the monitor holds.
49 A He straightens slowly.
50 D HARGROVE: Good work.
51 D SADIE: That's not a thing you say. That's a thing you do.
52 D HARGROVE (quietly): Meaning?
53 D SADIE: Meaning you called time of death in your head six minutes ago.
54 D HARGROVE: I did not.
55 D SADIE: You did.
56 A ¶ Ben's compressions slow.
57 A Ilse has stopped midway to the cart.
58 D BEN (low): Sadie.
59 D SADIE: No. He did. Say it, Moses.
60 D HARGROVE (after a long pause): I did.
61 D SADIE: Thank you.
62 A ¶ She steps back, peels off a glove, and flexes her hand.
63 A Ben takes the mask and bags, gently.
64 A Ilse brings a bag of fluids and hangs it on the pole.
65 A The monitor beeps on, steady, small, alive.
66 A ¶ Hargrove turns to the door.
67 A He pauses there, back to them.
68 D HARGROVE [CONT'D]: I'll tell the family.
69 D SADIE: No. I will.
70 D HARGROVE: They'll ask who made the call.
71 D SADIE: Then I'll tell them she did.
72 A ¶ She looks at Ilse.
73 A Ilse looks at her.
74 A Neither says anything.
75 A ¶ Hargrove exits.
76 A The curtain swings behind him.
77 A Sadie leans over the sink and runs cold water over her wrists.
78 A Ben watches her.
79 D BEN: You okay?
80 D SADIE (to the water): Ask me in an hour.
81 A ¶ Ilse pulls the sheet up over the patient's chest and, after a moment, tucks it under the chin as if the patient were a child.

### SCENE s01719 | INT. DEEP-SPACE COLONY SHIP - HYDROPONICS BAY - "NIGHT CYCLE"
Detected names (may be incomplete or contain aliases): SAOIRSE KELLEHER, MATEO ROJAS-ILLINGWORTH, ORCHARD
1 A ¶ A cathedral-sized chamber, its curved ceiling lined with violet grow-lights dimmed to a gentle dusk.
2 A Terraces of lettuce, wheat and tomato step down to a central pool where a pale mist lingers.
3 A The air is warm and wet, and smells faintly of basil.
4 A Somewhere, water drips in a patient rhythm.
5 A ¶ DR. SAOIRSE KELLEHER (50s, silver hair in a braid, lab coat over a sleeping tunic) walks the terrace alone, brushing leaves with her fingertips.
6 A Below, at the pool, a young technician, MATEO ROJAS-ILLINGWORTH (20s, rolled sleeves, tool belt) refills a nutrient dispenser.
7 A The ship's AI, ORCHARD, glows as a faint green node at the end of each terrace.
8 D SAOIRSE: Mateo. Aren't you off shift?
9 D MATEO: Couldn't sleep, Doctor.
10 D SAOIRSE: Nor could I.
11 D MATEO: It's quiet down here.
12 D SAOIRSE: It always was, my first voyage.
13 A ¶ He smiles.
14 A She sits on the terrace steps.
15 A The mist swirls.
16 D ORCHARD [V.O.]: All systems nominal. Crop yield at one hundred and four percent.
17 D SAOIRSE: Thank you, Orchard.
18 D MATEO: It's weird, isn't it? Everything's so perfect.
19 D SAOIRSE: Perfect is what we aimed for.
20 A ¶ Silence.
21 A The water drips.
22 A Mateo stops, tilting his head, listening.
23 D MATEO: That's not the drip.
24 D SAOIRSE: What?
25 D MATEO: The drip's every four seconds. That's every three.
26 D ORCHARD [V.O.]: Correction. Condensation cycle is irregular.
27 A ¶ Saoirse stands.
28 A Her hand lingers on a tomato vine.
29 A The leaf is faintly warm, like skin.
30 D SAOIRSE: Orchard. Run a biological scan on Terrace Three.
31 D ORCHARD [V.O.]: Scanning.
32 A ¶ The green node flickers.
33 A Along the terrace, every plant turns, slowly, toward the two humans.
34 A The mist in the pool thickens into a shape that is almost, but not quite, a face.
35 D ORCHARD [V.O., CONT'D] (soft, distorted): Scan complete. You are not alone.

### SCENE s00806 | INT. CASSETTE ARCHIVE - BASEMENT OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): EVANGELINE ROTHCHILD-ADU
1 A ¶ A low room of grey metal shelves holding thousands of labeled tapes.
2 A A bare bulb swings slightly, though no wind reaches down here.
3 A Dust and old magnetic oxide.
4 A A reel-to-reel and a cassette deck sit side by side on a cluttered desk beneath a corkboard of photographs strung together with red thread.
5 A ¶ EVANGELINE ROTHCHILD-ADU, 50s, weary detective in a green cardigan, sits at the desk.
6 A Her hair is pinned with a pencil.
7 A She holds a microphone close to her lips, as though it were a confidant.
8 A ¶ She presses record.
9 D EVANGELINE: Case file nine-one-four. The Hargreave matter. Evening, third of November.
10 A ¶ She lets go of the button.
11 A Picks up a photograph.
12 A Puts it down.
13 A Presses again.
14 D EVANGELINE [CONT'D]: They told me the library caught fire by accident. I have read eleven reports that say so. Not one of them mentions the smell of kerosene, which three witnesses described independently.
15 A ¶ She taps a thread on the corkboard.
16 D EVANGELINE [CONT'D]: The librarian, Mr. Quillfeather, vanished that night. His wife says he never returned. His employer says he resigned a week earlier. Both cannot be true.
17 A ¶ She rewinds the cassette.
18 A Plays it back.
19 D EVANGELINE [V.O.] (recorded, thin): ...three witnesses described independently...
20 A ¶ She stops it.
21 A Writes on a pad.
22 D EVANGELINE: I found his key in the ash. A small brass key. It opens a locker in the basement of this very building. I've checked every locker. There isn't one.
23 A ¶ She leans back.
24 A Rubs her eyes.
25 D EVANGELINE [CONT'D]: Unless the basement I've been searching is the wrong basement.
26 A ¶ From somewhere in the stacks, a tape clicks and begins to turn.
27 A ¶ She goes still.
28 A Slowly lowers the microphone.
29 A ¶ A voice fills the room from a distant shelf, on tape, calm and a little amused.
30 A It is her own.
31 D EVANGELINE [V.O.] (recorded, distant): If you're hearing this, Evangeline, you've finally found the right basement.
32 A ¶ She stands.
33 A The chair rolls back into a shelf, scattering tapes.
34 D EVANGELINE: That's my voice.
35 D EVANGELINE [V.O.] (recorded): Third shelf on your left. Behind the tapes labeled Nineteen Seventy-Two.
36 A ¶ Evangeline crosses.
37 A Her heels click.
38 A She pulls out box after box until a small brass-hinged door appears in the wall.
39 A She takes the key from her cardigan pocket.
40 A Her hand shakes.
41 A She turns it.
42 A ¶ The door opens.
43 A Inside, nothing but a single reel marked: PLAY LAST.

### SCENE s00501 | EXT. SALT FLATS - HIGH NOON
Detected names (may be incomplete or contain aliases): ZEB, CULLEN, MATT
1 A ¶ A white plain without edges, hammered flat by heat.
2 A The horizon trembles in the glare.
3 A A dead wagon sits crooked, one wheel lost in a crust of salt.
4 A No wind.
5 A No shadow of any bird.
6 A ¶ ZEBEDIAH "ZEB" CULLEN (40s, black coat bleached gray at the shoulders, a dry tongue worrying the corner of his mouth) leads a stumbling mule across the white.
7 A On the mule's back, slumped like a sack of grain, rides his boy, MATTHIAS "MATT" CULLEN (14, hat tied under his chin with twine, lips cracked red).
8 D ZEB: Matt.
9 D MATT: Pa.
10 D ZEB: Eyes open.
11 D MATT: They are.
12 D ZEB: Open wider.
13 A ¶ The boy grins weakly.
14 A A hard grin, with no water behind it.
15 A The mule stops.
16 A Zeb pulls the lead and the mule refuses.
17 A He turns and sees the mule's legs trembling, a thin line of foam on its lip.
18 D ZEB [CONT'D]: Not now, old girl.
19 A ¶ He draws the canteen from his hip, shakes it.
20 A A slosh.
21 A A single mouthful.
22 A He holds it out to Matt.
23 D MATT: You first.
24 D ZEB: Drink.
25 D MATT: Pa, you drink.
26 D ZEB: Matthias.
27 A ¶ The boy takes the canteen with both hands.
28 A He drinks half the mouthful.
29 A He passes it back.
30 A Zeb tips what remains onto the mule's tongue.
31 A The animal shudders and walks on.
32 A ¶ Then the sound comes: a low rumble, like thunder under a floor.
33 A The horizon darkens.
34 A A black line rises along the edge of the world, spreading wide as a mountain.
35 D MATT: Pa, what is that?
36 D ZEB: Storm.
37 D MATT: There's no clouds.
38 D ZEB: Dust. It's dust. Get down. Get down, boy!
39 A ¶ He drags Matt from the saddle and presses him flat into the salt, throws his coat over them both, and lies on top, bracing.
40 A The mule bolts.
41 A The wall of dust crashes over them with a howl that swallows speech, a white-brown roar that fills the sky from end to end, and for a long minute there is nothing in the world but weight and wind.
42 A ¶ Then, as quickly as it came, it is gone.
43 A The sky is clear.
44 A The plain is flat.
45 A Under the coat, two breaths.
46 A ¶ Zeb lifts the edge.
47 A Salt streams off his shoulders.
48 A He looks down.
49 D ZEB [CONT'D]: Matt?
50 D MATT: I'm here.
51 D ZEB: Good.
52 D MATT: Did we lose the mule?
53 D ZEB: Not yet.
54 A ¶ Far across the white, a small gray shape stands patient in the shimmer, waiting for them.

### SCENE s02148 | INT. SUNDERLY'S HOARD - INSIDE A DRAGON'S TOOTH - NIGHT
Detected names (may be incomplete or contain aliases): GRETEL VOSS, SUNDERLY
1 A ¶ A hollow in an ancient fang, wide as a cottage.
2 A Gold coins pile up like dunes in the dark.
3 A Dragon breath stirs the air, warm, sulfurous.
4 A ¶ GRETEL VOSS, 20s, soot-streaked, sword drawn, edges toward a chalice on a gilt pillar.
5 A Behind her, in the dark beyond the tooth, SUNDERLY, a dragon, enormous, ancient, amused.
6 A Only its voice and an amber eye show.
7 D SUNDERLY [O.S.]: Little thief. You are in my tooth.
8 D GRETEL: I noticed.
9 D SUNDERLY [O.S.]: It is the one that hurts.
10 D GRETEL: I'm sorry.
11 D SUNDERLY [O.S.]: You are not sorry. You are armed.
12 D GRETEL: Both can be true.
13 D SUNDERLY [O.S.]: Show me the sword.
14 A ¶ Gretel lifts the blade.
15 A It trembles.
16 A She lowers it.
17 D SUNDERLY [O.S.]: Show me the other thing in your pocket.
18 D GRETEL: There is no other thing.
19 D SUNDERLY [O.S.]: There is always another thing.
20 A ¶ She pulls a small iron pick from her coat.
21 D GRETEL: For the tooth.
22 D SUNDERLY [O.S.]: You came to pull my tooth?
23 D GRETEL: I came for the chalice. The pick was for the lock. But the tooth is rotten. I can fix it.
24 D SUNDERLY [O.S.]: If I let you.
25 D GRETEL: If you let me.
26 A ¶ Silence.
27 A The amber eye blinks, slow as a sunrise.
28 D SUNDERLY [O.S.]: Then do it quickly.
29 D GRETEL: Then hold still.
30 A ¶ She wedges the pick into the black cavity.
31 A The tooth cracks.
32 A A scream of dragon, a quake in the gold, and a coin avalanche that buries her to the knees.
33 A She laughs, spitting coins.

### SCENE s02301 | EXT. TREEHOUSE IN A DEAD ELM - NIGHT
Detected names (may be incomplete or contain aliases): ANNELIESE KROLL, BO TRAN, KWAME BOATENG, SOLEDAD IBARRA
1 A ¶ A plywood box wedged in the crotch of a bare elm.
2 A A string of Christmas lights, half burned out.
3 A Four sleeping bags laid in a square.
4 A Frost on the railings.
5 A ¶ ANNELIESE KROLL, sixteen, sits cross-legged with a thermos.
6 A BO TRAN, sixteen, tunes a ukulele nobody asked for.
7 A KWAME BOATENG, seventeen, stretches on his back and stares up at a hole in the roof.
8 A SOLEDAD IBARRA, sixteen, perches at the edge with her feet in the air, rolling an unlit cigarette between her fingers.
9 D BO: Okay, okay, this one's for the graduating class.
10 D KWAME: We haven't graduated.
11 D BO: It's for the future.
12 D ANNELIESE: You can't even play it.
13 D BO: I can play three chords.
14 D SOLEDAD: Four if you count the one you broke.
15 A ¶ Bo strums.
16 A It is awful.
17 A Kwame laughs into his sleeve.
18 A Anneliese passes the thermos to Soledad, and Soledad drinks and passes it on to Kwame, and it goes round without anyone speaking.
19 A The lights flicker.
20 A The ukulele fades.
21 D BO: It's nice up here.
22 D KWAME: Yeah.
23 D ANNELIESE: Yeah.
24 A ¶ Soledad says nothing.
25 A She rolls the cigarette once more, then sets it on the plank beside her and folds her hands.
26 D SOLEDAD: Hey. Can I say something?
27 D KWAME: Always.
28 D SOLEDAD: I'm leaving in the morning.
29 A ¶ Bo stops strumming.
30 A Anneliese puts down the thermos.
31 A Kwame sits up.
32 A The three of them turn to her at once, and the ukulele rolls off the platform and clatters through the branches.
33 D ANNELIESE: What do you mean, leaving?
34 D SOLEDAD: My dad got the job. In Tucson.
35 D BO: Tucson?
36 D KWAME: When?
37 D SOLEDAD: Seven a.m.
38 A ¶ Nobody speaks.
39 A Frost ticks on the rail.
40 A Kwame reaches across the square of sleeping bags and takes her sleeve between two fingers, and holds on.
41 A Anneliese climbs over Bo and puts her head on Soledad's shoulder.
42 A Bo just sits there, looking down at the dark where the ukulele went.

### SCENE s01236 | INT. AUCTION HOUSE - FREIGHT ELEVATOR - NIGHT
Detected names (may be incomplete or contain aliases): HOLLIS CARMICHAEL-REEVE, TRINH VO, ALOUETTE PICARD, GUARD, ^ALOUETTE
1 A ¶ A caged industrial lift with a scarred wooden floor.
2 A A control panel with a brass key switch.
3 A The elevator descends slowly, cables creaking, between concrete shaft walls.
4 A ¶ Three figures in grey janitorial coveralls stand in the car.
5 A A rolling mop bucket sits in the corner.
6 A ¶ HOLLIS CARMICHAEL-REEVE (50s, crew boss, bifocals on a cord) reads a clipboard like a recipe.
7 A ¶ TRINH VO (30s, wiry, hair under a cap) crouches by the bucket and checks the wringer for something that isn't water.
8 A ¶ ALOUETTE PICARD (40s, grim, gloves tight) presses her palm against the elevator wall and counts the seconds under her breath.
9 D HOLLIS: Sub-basement in forty.
10 D TRINH: Thirty-eight.
11 D HOLLIS: Thirty-eight.
12 D ALOUETTE: Camera's looping. Twenty minutes, maybe twenty-two.
13 D TRINH: Maybe?
14 D ALOUETTE: Twenty.
15 D HOLLIS: Say twenty.
16 A ¶ Silence.
17 A The cables squeal.
18 A The lift lurches and settles.
19 A Somewhere above, a muffled bell rings the hour.
20 D HOLLIS [CONT'D]: When the doors open, we are cleaners. We move slow. We do not look at the vault.
21 D TRINH: We look at the floor.
22 D HOLLIS: We look at the floor.
23 D ALOUETTE: What if there's a guard?
24 D HOLLIS: There's a guard.
25 D ALOUETTE: What if he's awake?
26 D HOLLIS: He's awake. He's always awake. Four weeks, he's seen us.
27 D TRINH: He likes us.
28 D ALOUETTE: He likes your biscuits.
29 D TRINH (blushing): They're my mother's.
30 A ¶ The elevator slows, and the cables go quiet.
31 A A soft ding.
32 A ¶ The doors slide open on a concrete corridor lit in sickly green.
33 A At the far end, a lone guard's desk with a lamp, a thermos, and a newspaper.
34 A The chair is empty.
35 A ¶ Nobody moves.
36 D TRINH [CONT'D] (whispering): That's not right.
37 D HOLLIS: Move.
38 A ¶ They shuffle out, bucket first.
39 A The wheels squeak on the concrete.
40 A Halfway down the corridor, the lamp on the desk clicks off.
41 A The corridor goes darker.
42 D ALOUETTE: Hollis.
43 D HOLLIS: Keep moving.
44 D TRINH: Twenty minutes, he said. He doesn't go to the bathroom.
45 A ¶ They stop.
46 A In the dark, a steel door at the corridor's end is open a hand's width.
47 A A strip of cold light falls on the floor.
48 A ¶ Hollis lifts the clipboard.
49 A Reads it again.
50 A Lowers it.
51 D HOLLIS: Right. New plan.
52 D TRINH: We have a plan?
53 D HOLLIS: We have a mop.
54 A ¶ He lifts the mop out of the bucket.
55 A Taps the vault door open with its handle.
56 A It swings wide.
57 A Inside, rows of locked cases line the walls under blue light.
58 A And in the middle, sitting cross-legged on a crate with a flask in one hand and his cap tilted back, is the GUARD (60s, leathery, content), eating one of Trinh's mother's biscuits.
59 D GUARD: Evening, team.
60 A ¶ Nobody breathes.
61 D GUARD [CONT'D]: You're early. I wasn't expecting you till two.
62 D TRINH (squeaking): We had a cancellation.
63 D GUARD: Hm.
64 A ¶ He chews.
65 A Swallows.
66 A Gestures with the biscuit toward the cases.
67 D GUARD [CONT'D]: Mind the lemon polish. The Tiffany lamp's sensitive.
68 D HOLLIS: Of course.
69 D ^ALOUETTE: Of course.
70 D TRINH: Not a problem.
71 A ¶ They file in.
72 A The guard watches them go by, one eyebrow raised.
73 A As Alouette passes, he catches her sleeve.
74 D GUARD [CONT'D] (low): Whatever you've planned, do it tonight. I retire at dawn.
75 D ALOUETTE (low): Understood.
76 A ¶ She pulls her sleeve free.
77 A Trinh begins to laugh, a high sound, and Hollis clamps a hand over his mouth.
78 A The guard offers the biscuit tin.
79 D GUARD [CONT'D]: Anyone?
80 A ¶ The lights in the corridor behind them go out.
81 A Then, one by one, the lights in the vault.
82 D HOLLIS (to the room): Nobody panic.
83 D GUARD: Oh, that's just me.
84 D TRINH (muffled, under the hand): Mm?
85 D GUARD (in the dark): The sale starts at nine. Lot forty-one's a Tiffany lamp.
86 A ¶ A match flares.
87 A The guard lights a candle on the crate.
88 A His grin glows orange.
89 D GUARD [CONT'D]: Shall we?
90 T FADE OUT.

### SCENE s01600 | INT. GRAND HOTEL - PENTHOUSE SUITE - NIGHT
Detected names (may be incomplete or contain aliases): VICTOR LANGFORD, IRIS LANGFORD, WAITER LEONARD CROSS
1 A ¶ Art deco.
2 A Polished brass.
3 A A fire crackles behind a screen.
4 A Through tall windows, the glittering city.
5 A ¶ VICTOR LANGFORD (50s, dinner jacket, whiskey in hand) stands before a window, admiring his reflection.
6 A At a writing desk sits his wife IRIS LANGFORD (40s, silver gown, a jeweled pin), reading a letter she does not seem to be reading.
7 D IRIS: You're quiet tonight, Victor.
8 D VICTOR: I'm thinking.
9 D IRIS: About what?
10 D VICTOR: Everything.
11 D IRIS: That's not an answer.
12 D VICTOR: It's the only honest one.
13 A ¶ She folds the letter.
14 A Slips it into her bag.
15 A He turns from the window, smiling like a man at ease.
16 D VICTOR [CONT'D]: Shall we dine?
17 D IRIS: Here?
18 D VICTOR: Upstairs. Eight o'clock. A table for two.
19 D IRIS: How romantic.
20 D VICTOR: I try.
21 A ¶ He crosses to her.
22 A Kisses her forehead.
23 A She does not flinch, but she does not close her eyes either.
24 A ¶ A soft knock.
25 A Both turn.
26 D VICTOR [CONT'D]: That will be the champagne.
27 A ¶ He opens the door.
28 A A tall man in a waiter's jacket stands in the hall, tray in hand, a bottle sweating in an ice bucket.
29 A But his shoes are wrong, military black, and his hands are bare of the white gloves the hotel requires.
30 A ¶ WAITER LEONARD CROSS (30s, thin smile, calm eyes) steps in and sets the tray on the table.
31 D LEONARD: Good evening, Mr. and Mrs. Langford.
32 D IRIS: You're new.
33 D LEONARD: Very.
34 D VICTOR: Where's Henri?
35 D LEONARD: Henri has the night off.
36 D VICTOR: Henri never has a night off.
37 D LEONARD: He does tonight.
38 A ¶ Silence.
39 A The fire pops.
40 A Victor's smile fades.
41 D VICTOR: Iris, would you excuse us?
42 D IRIS: No.
43 D LEONARD: Mrs. Langford may stay.
44 D VICTOR: Of course she may. It's her suite as well.
45 D LEONARD: It is.
46 D IRIS (quietly): Victor, who is he?
47 D VICTOR: A waiter.
48 D LEONARD (at the same time): A friend of Mr. Delacroix.
49 A ¶ The name hangs in the air.
50 A Victor sets down his glass.
51 A Iris rises, one hand on the desk.
52 D IRIS: Delacroix.
53 D VICTOR: Iris.
54 D LEONARD: He sends his regards.
55 D IRIS: You told me he was dead.
56 D VICTOR: He is.
57 D LEONARD: Not entirely.
58 A ¶ Victor takes a step back.
59 A Iris takes a step forward.
60 A Leonard lifts the champagne bottle, peels the foil, and eases the cork.
61 D VICTOR: Iris, don't.
62 D IRIS: Leonard, is it?
63 D LEONARD: Yes.
64 D IRIS: Tell me, Leonard, what does Mr. Delacroix want?
65 D LEONARD: Everything, Mrs. Langford. But tonight, I think he'd settle for the truth.
66 A ¶ The cork pops.
67 A Foam spills over the bottle.
68 A ¶ Victor stares at it.
69 A Iris stares at Leonard.
70 A Leonard stares at no one.
71 D LEONARD [CONT'D] (pouring three glasses): Shall we begin?

### SCENE s00800 | INT. PÂTISSERIE DU MATIN - BACK ROOM - PRE-DAWN
Detected names (may be incomplete or contain aliases): LEONID TARASOV, CASPIAN ROWE
1 A ¶ Flour on every surface.
2 A Cooling racks.
3 A A walk-in oven the size of a closet.
4 A In the corner, a three-tier wedding cake on a steel cart.
5 A ¶ LEONID TARASOV, 40s, ski mask pushed up on his forehead, wedges a crowbar under the cake's base.
6 A CASPIAN ROWE, 30s, glasses, gloves, stands guard at the door with a cold coffee.
7 D CASPIAN: Leo. It's a cake.
8 D LEONID: It's a safe.
9 D CASPIAN: It's a cake with a safe in it.
10 D LEONID: Which makes it a safe.
11 A ¶ He pries.
12 A The base creaks.
13 A A hidden panel pops.
14 A Inside: a small steel door, a keypad.
15 D CASPIAN: Four digits.
16 D LEONID: Try his birthday.
17 D CASPIAN: He's seventy.
18 D LEONID: Try it.
19 A ¶ Caspian punches in numbers.
20 A Nothing.
21 A He tries again.
22 A A red light flashes.
23 A A tiny alarm warbles inside the cake.
24 A ¶ They freeze.
25 A Leonid grabs the cake.
26 A Caspian grabs Leonid.
27 A They topple into the cart, tier two sliding off and splattering across the floor in a wet pink avalanche.
28 A ¶ The alarm dies.
29 A Both men lie in frosting.
30 D LEONID [CONT'D] (whisper): You did that.
31 D CASPIAN: You pushed me!
32 D LEONID: You grabbed me!
33 A ¶ They scramble up, slipping.
34 A Leonid lunges for the keypad.
35 A Caspian shoves him aside, jabs at the buttons.
36 A ¶ The light turns green.
37 A The little door swings open.
38 A ¶ Inside: a single plastic bag, a scribbled note.
39 A Caspian reads it aloud.
40 D CASPIAN [CONT'D]: "Nice try. -Mom."
41 A ¶ They stare at each other.
42 A Frosting drips from both their chins.

### SCENE s01681 | INT. LUNAR GREENHOUSE DOME - DAY
Detected names (may be incomplete or contain aliases): ENGINEER ILSE VOGEL, BOTANIST KWAME ASANTE, TECHNICIAN BRONWYN FALK, COMMANDER
1 A ¶ Rows of tomato plants under pale artificial light.
2 A A quiet hum.
3 A ¶ ENGINEER ILSE VOGEL (30s, coveralls) prunes a vine.
4 A BOTANIST KWAME ASANTE (40s) logs readings on a tablet.
5 A They work in comfortable silence.
6 A ¶ TECHNICIAN BRONWYN FALK (20s) hauls a crate of seedlings through the airlock, whistling.
7 D KWAME: Good yield this month.
8 D ILSE: Best since the landing.
9 D BRONWYN: Cafeteria will be thrilled.
10 A ¶ A comm panel clicks.
11 D COMMANDER [V.O.]: Dome Two, status check.
12 D KWAME: All green, Commander.
13 D COMMANDER [V.O.]: Good. Keep it that way.
14 A ¶ The panel clicks off.
15 A Ilse snips another stem.
16 A ¶ Then the lights flicker.
17 A Once.
18 A Twice.
19 A The hum drops in pitch.
20 D BRONWYN: Was that supposed to happen?
21 D ILSE: No.
22 A ¶ Every plant in the row leans toward the airlock door.
23 A Slowly.
24 A As if something outside were calling them.
25 D KWAME: Everyone stay very still.

### SCENE s01238 | INT. SEAFOOD MARKET - BACK OFFICE - PRE-DAWN
Detected names (may be incomplete or contain aliases): VITO FERRANTINO, DANTE FERRANTINO, ODETTE LAROCHE, SUNDAR IYER, ^SUNDAR
1 A ¶ A tiled room that smells of ice and brine.
2 A A desk with a ledger and a crushed pack of cigarettes.
3 A Through a window, the market floor is dark, tubs of crab stacked like tombstones.
4 A ¶ VITO FERRANTINO (60s, apron over a good shirt) sits behind the desk with his hands folded.
5 A Across from him, his nephew DANTE FERRANTINO (30s, leather coat, wet hair) shifts in a metal chair.
6 A ¶ By the door stands MRS. ODETTE LAROCHE (50s, orange rubber gloves to the elbow, fishmonger's cap), eating an apple.
7 A And in the corner, on an overturned crate, sits SUNDAR IYER (20s, soft-spoken, clean, holding a clipboard).
8 D VITO (to the room): Everybody comfortable?
9 A ¶ Nobody answers.
10 A Odette bites the apple.
11 A Dante's knee bounces.
12 D VITO [CONT'D] (to Dante): You want some coffee?
13 D DANTE: I'm good.
14 D VITO: It's early. You look tired.
15 D DANTE: I'm not tired.
16 D VITO (to himself): He's not tired.
17 A ¶ He opens the ledger.
18 A Turns a page.
19 A Runs a finger down a column.
20 D VITO [CONT'D] (to Sundar): Accountant. How's the arithmetic?
21 D SUNDAR: It's close, Mr. Ferrantino.
22 D VITO: Close to what?
23 D SUNDAR: It's close to correct.
24 D VITO: Close. Odette?
25 D ODETTE: Close is a nice word.
26 D VITO: It's a nice word until the fish go off.
27 A ¶ Dante laughs once.
28 A Short.
29 A Dry.
30 A Nobody joins.
31 D VITO [CONT'D] (to Dante): You think it's funny?
32 D DANTE: You said fish.
33 D VITO: I did say fish.
34 A ¶ He closes the ledger.
35 A Slides it across the desk.
36 A Dante glances at it.
37 A Doesn't touch it.
38 D VITO [CONT'D]: Read it.
39 D DANTE: Uncle Vito.
40 D VITO: Read the third page.
41 D DANTE: I know what's on the third page.
42 D ODETTE: Then why are you sweating?
43 D SUNDAR: Dante, I told you to take it back.
44 D DANTE: You told me nothing!
45 A ¶ Both speak at once, sharp and loud.
46 D ODETTE (to Sundar): Hush.
47 D ^SUNDAR (to Odette): I didn't say--
48 D VITO (to the room, calm): Enough.
49 A ¶ Silence.
50 A The ice machine rumbles in the next room.
51 A Vito lifts the lid of the ledger one more time and takes out a single photograph.
52 A He sets it face-up on the desk.
53 A ¶ It's Dante, in a car, handing an envelope to a stranger in a dark coat.
54 A The timestamp reads last Thursday.
55 D DANTE (barely): Where did you get that?
56 D VITO: The man in the coat is mine. Has been for ten years. He told me you'd come.
57 A ¶ Dante looks at Odette.
58 A At Sundar.
59 A At the door.
60 A Odette drops the apple core into the bin and folds her gloved arms.
61 D VITO [CONT'D] (quietly, to himself): Blood.
62 A ¶ He lifts the phone on the desk and dials one digit.
63 A It rings once.
64 T FADE OUT.

### SCENE s01175 | INT. CAR WASH TUNNEL - DAY
Detected names (may be incomplete or contain aliases): FELIX TANAKA-REYES, GLORIA PUCKETT
1 A ¶ A sedan is stuck mid-tunnel between two spinning brushes.
2 A Foam climbs the windows.
3 A FELIX TANAKA-REYES (30s, tie loosened) grips the wheel.
4 A GLORIA PUCKETT (60s, his mother-in-law, handbag on her lap) sits rigid in the passenger seat.
5 D FELIX: It's fine. The belt does this.
6 D GLORIA: The belt does what, Felix?
7 D FELIX: Pauses. For the soap to dwell.
8 A ¶ Gloria nods slowly.
9 A The brushes whirl.
10 A A wipe of foam slides down the glass.
11 A Felix cracks his window an inch and sniffs it, then closes it again.
12 D GLORIA: You said you'd get the car cleaned before the dinner.
13 D FELIX: I am getting the car cleaned before the dinner.
14 D GLORIA: We're going to be late.
15 D FELIX: We're going to be clean.
16 A ¶ A thump from somewhere underneath.
17 A The car shudders.
18 A Gloria opens her handbag, takes out a tissue, and folds it twice.
19 A Felix watches her do it.
20 A He turns off the radio.
21 D FELIX [CONT'D] (dry): Gloria, I want to say something.
22 D GLORIA (at the same time): Felix, I want to say something.
23 D FELIX: I'm sorry about the wedding toast.
24 D GLORIA: ^I'm sorry about the wedding toast.
25 A ¶ They look at each other.
26 A The brushes stop.
27 A Foam slides.
28 A Gloria replaces the tissue in her handbag and snaps it shut.
29 A Felix puts both hands on the wheel.
30 A The green light outside does not come on.

### SCENE s02497 | INT. WHALE-BONE APOTHECARY - NIGHT
Detected names (may be incomplete or contain aliases): SORREL VANE, OSWIN GRIST
1 A ¶ A shop built inside the ribcage of a dead leviathan.
2 A Ribs arch overhead like cathedral beams.
3 A Jars glow green on bone shelves.
4 A ¶ SORREL VANE, 20s, apprentice, grinds something blue in a mortar.
5 A A cauldron simmers behind her.
6 A ¶ The door swings open on a gust of salt air.
7 A No one is there.
8 A Sorrel looks up.
9 D SORREL: Hello?
10 A ¶ The jars hum.
11 A A drip falls from the roof of the ribcage.
12 A Another.
13 D SORREL [CONT'D]: We're closed.
14 A ¶ The bell above the door rings, by itself.
15 D SORREL [CONT'D]: Show yourself.
16 A ¶ A shape in the corner thickens.
17 A Flickers.
18 A Resolves.
19 A ¶ OSWIN GRIST, ancient, barnacle-crusted, a drowned sailor in a coat of kelp, steps from the shadows.
20 A Water pours from his sleeves.
21 D OSWIN: I need a remedy, girl.
22 D SORREL: For what?
23 D OSWIN: Breathing.
24 A ¶ Sorrel sets down the mortar.
25 A The cauldron boils over.

### SCENE s00517 | EXT. WATER TOWER - STALLED TRAIN - HIGH DESERT - DAY
Detected names (may be incomplete or contain aliases): ENGINEER SILAS DUNBAR, FIREMAN CALLUM NAKAGAWA, MARSHAL DELPHINE ARCENEAUX, CONDUCTOR BARTHOLOMEW ENGSTROM, TELEGRAPH CLERK
1 A ¶ A locomotive idles at a sun-blasted siding.
2 A The wooden tank towers above, dripping from its spout.
3 A Dust.
4 A A coil of rope.
5 A A line of boxcars stretching behind into the heat.
6 A ¶ ENGINEER SILAS DUNBAR (50s, striped cap, grease to the elbows) hangs from the water spout, wrestling the chain.
7 A Below him, FIREMAN CALLUM NAKAGAWA (20s, bare-chested, black with soot) braces the ladder.
8 A Standing in the shade of the tank, hand on her pistol, waits MARSHAL DELPHINE ARCENEAUX (40s, tan duster, silver badge).
9 A ¶ A telegraph key chatters from the little station beside the track.
10 A Up on the first boxcar roof, CONDUCTOR BARTHOLOMEW ENGSTROM (60s, brass buttons, pocket watch) cups his hands to his mouth.
11 D BARTHOLOMEW: Passengers inside! Shutters down!
12 D TELEGRAPH CLERK [O.S.] (shouting from the station): Marshal! Wire from Santa Fe! Riders on the ridge!
13 D DELPHINE: How many?
14 D TELEGRAPH CLERK [O.S.]: Eight! Maybe ten!
15 D SILAS (from the spout): Callum, haul!
16 D CALLUM: Hauling!
17 D DELPHINE: Silas, how long for the tank?
18 D SILAS: Five minutes!
19 D DELPHINE: You have two.
20 A ¶ Callum strains on the chain.
21 A The spout swings; water crashes down in a silver wall, drenching the three of them as they grab the ladder, the pipe, the pistol, and scatter in separate directions.
22 A Silas drops to the ties.
23 A Callum leaps for the cab.
24 A Delphine drops to one knee and raises her rifle toward the ridge.
25 A ¶ On the ridge, tiny horsemen appear against the sky.
26 D DELPHINE [CONT'D]: Callum! Full steam!
27 D CALLUM: Aye!
28 A ¶ The locomotive shrieks.
29 A Steam bursts.
30 A The train lurches forward.

### SCENE s00914 | EXT. THE MOSSBACK FERRY - ENCHANTED MARSH - TWILIGHT
Detected names (may be incomplete or contain aliases): ORLAITH, THORNE, BRACKEN, MISTRESS YARROW, PIPKIN LESS, LANTERN
1 A ¶ A flat-bottomed barge poled across a lake of black glass.
2 A Willow roots hang down like grey hair.
3 A Lanterns made of glass beetles bob at the corners of the deck.
4 A Frogs sing in a low, ancient chord.
5 A ¶ ORLAITH, 20s, a young ranger in moss-green leathers, leans on the rail with a longbow slung behind her shoulder.
6 A Freckles.
7 A Sharp grin.
8 A She watches the water for movement.
9 A ¶ THORNE, 40s, her older brother, stands at the prow, hand on his sword hilt, jaw set against a wind that isn't there.
10 A Broad.
11 A Scarred.
12 A Silent as a post.
13 A ¶ BRACKEN, 60s, the ferryman, poles the barge with slow, patient strokes.
14 A A bent old man in a coat sewn from bark and feathers.
15 A One eye milky white.
16 A ¶ MISTRESS YARROW, 50s, a herbalist in a patched purple cloak, kneels on the deck sorting dried flowers into a wooden case.
17 A She hums.
18 A ¶ PIPKIN THE LESS, 12, a boy no taller than a barrel, hides behind a stack of crates and clutches a talking lantern, which whispers to him.
19 D ORLAITH: How long till the far bank, Bracken?
20 D BRACKEN: Long as it takes.
21 D ORLAITH: That's not an answer.
22 D BRACKEN: It's the only one.
23 A ¶ She rolls her eyes, but her grin deepens.
24 A Thorne glances back at his sister, then forward again.
25 A Yarrow lifts a flower to the light.
26 D YARROW: Moonthistle. Almost gone from the marsh.
27 D ORLAITH: You've got a whole case.
28 D YARROW: That's why it's almost gone.
29 D PIPKIN (whispering to the lantern): She's stealing it.
30 D LANTERN (a tiny voice): Not stealing. Gathering.
31 D PIPKIN: Same thing.
32 D THORNE: Pipkin.
33 D PIPKIN: Yes, Thorne?
34 D THORNE: Stop talking to the lantern.
35 D PIPKIN: He talks first.
36 D THORNE: Then stop answering.
37 A ¶ Pipkin sulks.
38 A The ferry glides through a curtain of willow, and the light changes to a deep underwater green.
39 A Everyone falls quiet.
40 A Even the frogs.
41 D BRACKEN: Hush now.
42 D ORLAITH: What is it?
43 D BRACKEN: Something old.
44 A ¶ Thorne draws his sword an inch.
45 A Orlaith slips an arrow from her quiver without taking her eyes off the water.
46 A Yarrow closes the case with a quiet click.
47 A Pipkin ducks lower, and the lantern's glow dims to the colour of a candle in a drawer.
48 A ¶ The water bulges, slow and enormous, then settles again, leaving nothing but a ring of ripples spreading toward the banks.
49 D BRACKEN [CONT'D] (softly): Gone.
50 D THORNE: What was that?
51 D BRACKEN: The marsh saying hello.
52 D ORLAITH (muttering): Friendly.
53 D YARROW: It means we're welcome.
54 D PIPKIN (peeping out): Can I come out now?
55 D BRACKEN: Aye, boy.
56 A ¶ Pipkin scrambles out from behind the crates.
57 A He sits beside Yarrow, who gives him a sprig of moonthistle without a word.
58 A He tucks it behind his ear, grinning.
59 A ¶ The ferry drifts into the open water once more, and up ahead, through the gathering dusk, the far bank shimmers like a lit window.

### SCENE s01539 | INT. MOSS THRONE ROOM OF THE WILLOW KING - DAY
Detected names (may be incomplete or contain aliases): KING ALDERMERE GREEN, SIORA, BRONWYN, TANSY, BRAMBLE, IVO
1 A ¶ A hollow inside a colossal willow.
2 A Roots coil into pillars.
3 A Glowworms hang like chandeliers.
4 A Dew drips into a stone basin.
5 A ¶ KING ALDERMERE THE GREEN, ancient, bark-skinned, crowned with antlers, sits upon a throne of woven roots.
6 A ¶ Before him kneel five petitioners: a fox-faced RANGER named SIORA, a hulking BADGER-SMITH named BRONWYN, twin sprites TANSY and BRAMBLE with dragonfly wings, and a hooded MONK named IVO.
7 D ALDERMERE: Speak, children of the glade.
8 D SIORA: Majesty, the river runs thin.
9 D BRONWYN: The fish are gone.
10 D TANSY: Say it softly, sister.
11 D BRAMBLE: Say it softly, sister.
12 A ¶ They look at each other, annoyed, then back at the king.
13 D IVO (hood low): We have come about the stag.
14 D ALDERMERE: The stag is dead.
15 D SIORA: The stag is walking.
16 A ¶ Silence.
17 A Glowworms flicker.
18 A A drop falls in the basin.
19 D ALDERMERE: Show me.
20 A ¶ Ivo lowers his hood.
21 A From his own skull rise pale antlers dripping moss, and his eyes are dead lamps.
22 A ¶ The king rises.

### SCENE s00399 | INT. STALLED ELEVATOR - DAY
Detected names (may be incomplete or contain aliases): WINIFRED, LEOPOLD, DANIKA, VIJAY, MAINTENANCE
1 A ¶ Four people, mirrored walls, a dead floor indicator.
2 A Muzak plays softly.
3 A ¶ WINIFRED, 50s, in a pantsuit, holds a cake box.
4 A LEOPOLD, 30s, in a delivery uniform, holds a balloon bouquet.
5 A DANIKA, 20s, in a bridesmaid dress, holds a phone with no signal.
6 A VIJAY, 40s, in a tux, holds nothing but a ring box.
7 A ¶ Everyone smiles tightly.
8 D WINIFRED (to the group): It's fine. It's a minor delay.
9 D DANIKA (to Vijay): You're the groom?
10 D VIJAY: Best man.
11 D DANIKA: Where's the ring?
12 D VIJAY (to himself): In the box. It's in the box. It's in the box.
13 A ¶ The intercom crackles.
14 D MAINTENANCE [V.O.]: Hello in there? Is anyone in the elevator?
15 D LEOPOLD: Four of us!
16 D MAINTENANCE [V.O.]: Great. Quick question. Do any of you have a wedding to be at?
17 A ¶ All four stare at one another.
18 D WINIFRED (to the group): Why do you ask?
19 D MAINTENANCE [V.O.]: Because the groom just called. He says the bride's mother is stuck in an elevator with a cake, the best man, and a bridesmaid, and a balloon guy.
20 A ¶ Winifred closes her eyes.
21 D WINIFRED (quietly): I am the mother.
22 A ¶ Vijay opens the ring box.
23 A It's empty.
24 D VIJAY (to himself): Okay.

### SCENE s01497 | EXT. SINKING FISHING TRAWLER, BERING SEA - NIGHT
Detected names (may be incomplete or contain aliases): CAPTAIN WINIFRED OYELOWO-STRAND, DECKHAND AMADEO TRUJILLO-BELL
1 A ¶ Black swells.
2 A A bow rising and falling, deck awash.
3 A Two survivors cling to the wheelhouse roof.
4 A ¶ CAPTAIN WINIFRED OYELOWO-STRAND (50s, orange survival suit, a split lip) and DECKHAND AMADEO TRUJILLO-BELL (20s, no gloves, teeth chattering).
5 D AMADEO: Captain, the lifeboat's gone!
6 D WINIFRED: I know!
7 D AMADEO: We'll freeze!
8 D WINIFRED: We won't freeze. We'll drown first. It's quicker.
9 D AMADEO: That's not funny!
10 D WINIFRED: I wasn't joking.
11 D AMADEO (laughs, then sobs): I'm twenty-two.
12 D WINIFRED: I'm fifty-four. I've done this three times.
13 D AMADEO: Done what?
14 D WINIFRED: Sunk.
15 D AMADEO: How do you...
16 D WINIFRED: You hold on. That's the whole trick. Hold on till the boat stops being your problem.
17 D AMADEO: What if it never does?
18 D WINIFRED: Then you hold on to me.
19 A ¶ A swell slams the hull.
20 A Spray.
21 A They scream.
22 A The boat tilts, groans, and settles.
23 D AMADEO: Captain!
24 D WINIFRED: Still here!
25 D AMADEO: Still here!
26 D WINIFRED: Then the rest is arithmetic.

### SCENE s00774 | INT. COMMUNITY BREAD COOPERATIVE - FORMER BUS DEPOT - MORNING
Detected names (may be incomplete or contain aliases): ANSELMA DUARTE, TOMASZ WIERZBA, HADIYA BELLO, WINSTON FAIRWEATHER-LEE
1 A ¶ A long concrete bay where city buses once slept.
2 A Now: flour-dusted steel tables, a brick oven bolted into the old inspection pit, strings of laundry-line bunting.
3 A Tall windows turn the light the color of weak tea.
4 A The air smells of yeast and diesel ghosts.
5 A ¶ ANSELMA DUARTE, 60s, forearms like rolled dough, sleeves shoved up, scores loaves with a razor blade.
6 A She works without hurry.
7 A ¶ TOMASZ WIERZBA, 30s, soft-spoken, rimless glasses, weighs flour on a brass scale and writes numbers in a battered notebook.
8 A ¶ HADIYA BELLO, 20s, apron over a nursing-school sweatshirt, shapes rolls and yawns between each one.
9 D HADIYA: Do we have enough rye for Thursday?
10 D TOMASZ: I counted four sacks.
11 D ANSELMA: Three. Mrs. Pruitt took one for her church.
12 D TOMASZ: She didn't ask.
13 D ANSELMA: She never does.
14 D HADIYA: Three is fine. Thursday's mostly sourdough.
15 D TOMASZ: Thursday is the wedding.
16 D ANSELMA: Thursday is the wedding and the school order.
17 D HADIYA: Then we need more rye.
18 D TOMASZ: Then we need to call the mill.
19 D ANSELMA: The mill doesn't answer before ten.
20 D HADIYA: It's nine-forty.
21 D ANSELMA: Then we wait twenty minutes. Bread has taught me this.
22 A ¶ Nobody argues.
23 A The oven ticks.
24 A Hadiya sets another roll on the tray.
25 A ¶ The big bay door rattles.
26 A Light floods the floor.
27 A ¶ WINSTON FAIRWEATHER-LEE, 70s, cardigan, cane, a tote bag of library books, steps through.
28 A He squints up at the rafters like a man visiting a former church.
29 D WINSTON: I drove a Number 14 out of this depot for thirty-one years.
30 D ANSELMA: We know, Winston. You tell us every Tuesday.
31 D WINSTON: It's Wednesday.
32 D TOMASZ: He's right, it's Wednesday.
33 D HADIYA: Then why does it feel like Tuesday?
34 D ANSELMA: Because Tuesday's bread was better.
35 D WINSTON (touching a table): They've kept the pit.
36 D TOMASZ: The pit's the oven now.
37 D WINSTON: Mm. Good use of a pit.
38 A ¶ He sets a library book on the table.
39 A Hadiya reads the spine, nods, hands him a warm roll.
40 A He eats it in two bites.
41 A ¶ The oven ticks again.
42 A Anselma slides in another tray.

### SCENE s01934 | INT. BELL TOWER - CHURCH - DAY
Detected names (may be incomplete or contain aliases): SERGEANT ILARIO COSTA, WOUNDED SOLDIER, TADEUSZ
1 A ¶ 1944.
2 A Dust and pigeon droppings.
3 A A cracked bronze bell hangs dead overhead.
4 A Through an arched opening, a ruined village smokes.
5 A ¶ SERGEANT ILARIO COSTA, 30s, unshaven, rifle across his lap, sits against the wall eating a tin of sardines.
6 A Peaceful.
7 A Birds sing outside.
8 A ¶ A scrape on the stairs.
9 A Costa doesn't look up.
10 A He eases the safety off.
11 A ¶ A WOUNDED SOLDIER, 19, ragged, one arm in a bloodstained sling, climbs into view.
12 A He freezes, hands raised.
13 D WOUNDED SOLDIER: Don't shoot. Please. I'm lost.
14 D COSTA: Which side?
15 D WOUNDED SOLDIER: Yours. I think.
16 D COSTA: You think.
17 A ¶ He lowers the rifle an inch.
18 A The soldier sags against the stair rail, relieved.
19 A Costa offers him the sardine tin.
20 A The soldier takes it, eats with trembling fingers.
21 D COSTA [CONT'D]: Name?
22 D TADEUSZ: Tadeusz Wolak. Polish Second Corps.
23 D COSTA: Where's your unit, Tadeusz?
24 D TADEUSZ (still chewing): Below. Looking for you.
25 A ¶ Costa's face goes flat.
26 A Far down the stairwell, boots.
27 A Many.
28 D TADEUSZ [CONT'D]: I'm sorry, Sergeant. They said they'd spare my brother.

### SCENE s01387 | EXT. FLOATING MARKET OF BELLS - DUSK
Detected names (may be incomplete or contain aliases): ILSEBETH CROWE, TALLIS ARVEN
1 A ¶ A market built on rafts lashed together across a slow green river, each stall hung with a thousand tiny bells that ring in the evening wind.
2 A Lanterns drift on the water.
3 A The air tastes of cinnamon and wet rope.
4 A ¶ At the center of the flotilla, a single raft has gone quiet.
5 A Its awning sags.
6 A Its bells hang unmoving, as though holding their breath.
7 A ¶ ILSEBETH CROWE, 40s, in a coat stitched from sailcloth, stands at its edge with a long pole.
8 A Across the water-gap, a smaller raft drifts nearer, poled by TALLIS ARVEN, 20s, barefoot, his hair full of salt.
9 D ILSEBETH (to herself): Steady. Steady.
10 A ¶ She braces.
11 A The raft thumps against hers.
12 A Tallis catches a rope and ties it off with the careless speed of one who has done it ten thousand times.
13 D TALLIS: Evening, Captain.
14 D ILSEBETH: Not Captain anymore.
15 D TALLIS: That's not what the river says.
16 D ILSEBETH: The river doesn't say anything.
17 D TALLIS: It says plenty. You just don't listen.
18 A ¶ She turns to the crowd gathered on the neighboring decks.
19 A Fishwives, tinkers, a juggler stilled mid-toss, a child on a father's shoulders.
20 A All watching.
21 D ILSEBETH (to all): Good people of the Bells. A word.
22 A ¶ The crowd murmurs.
23 A A bell somewhere rings once, and falls silent.
24 D ILSEBETH [CONT'D]: The river is dropping. Six inches since dawn. The old channel closes in three days.
25 A ¶ Gasps.
26 A Someone drops a basket.
27 D ILSEBETH [CONT'D]: We can wait for rain. Or we can leave tonight.
28 A ¶ A woman near the front calls out.
29 A Ilsebeth lifts a hand.
30 D ILSEBETH [CONT'D]: No. I won't ask you to follow me. I'll ask you to choose.
31 A ¶ She turns, back to Tallis, and lowers her voice.
32 D ILSEBETH [CONT'D] (quiet): Did the ferrymen come?
33 D TALLIS: Yes.
34 D ILSEBETH: How many?
35 D TALLIS: Nine. They'll tow us as far as the weir.
36 D ILSEBETH: And past it?
37 D TALLIS: Past it, we're on our own.
38 A ¶ She nods.
39 A Looks at the water for a long time.
40 A Then she looks up at the awning where the bells hang motionless.
41 D ILSEBETH (muttering): Strange. They always ring when I lie.
42 D TALLIS: Maybe you're not lying.
43 D ILSEBETH: Maybe I'm not.
44 A ¶ She lifts the pole.
45 A Sets it against the planks.
46 A Pushes.
47 A ¶ Across the market, one by one, the ropes are cast off.
48 A The bells begin to ring, a slow wave that runs along the whole flotilla, lantern to lantern, raft to raft, until the entire river sings.
49 D TALLIS (grinning): There it is.
50 A ¶ Ilsebeth does not smile.
51 A But she stands straighter, and her hands, on the pole, are steady.

### SCENE s00054 | EXT. DUST-CHOKED TRADING POST, HIGH PLAINS - AFTERNOON
Detected names (may be incomplete or contain aliases): SALT, NAILS, SPARROW, CROWFOOT, POSTMISTRESS CLEMENTINE VANDERMEER, SHERIFF AUGUSTINE BELL, WILLET FAIRBANKS
1 A ¶ A sagging porch.
2 A A horse trough green with scum.
3 A Wind pushes tumbleweeds past hitching posts that have not held a horse in weeks.
4 A A hand-painted sign reads: SALT - NAILS - SOULS.
5 A ¶ ELIJAH "SPARROW" CROWFOOT (30s, braided hair, buckskin vest) leans on a porch rail, whittling.
6 A Inside the doorway sits POSTMISTRESS CLEMENTINE VANDERMEER (60s, gingham, shotgun across her lap) with a ledger.
7 A A rider approaches: SHERIFF AUGUSTINE BELL (40s, moustache, sweat-stained hat), trailed by a young deputy, WILLET FAIRBANKS (18, gun belt too big for his hips).
8 A ¶ Bell dismounts and strides to the porch.
9 A Willet slides off his horse, trips over a stirrup, rights himself, and follows, one hand on his holster.
10 D BELL: Sparrow.
11 D SPARROW: Sheriff.
12 D BELL: You were seen near the Henderson place.
13 D SPARROW: Lot of people were near the Henderson place.
14 D CLEMENTINE (from the doorway): Gus, that boy was at my counter all morning.
15 D BELL: Was he?
16 D CLEMENTINE: Bought nails.
17 D BELL: How many?
18 D CLEMENTINE: Enough for a coffin.
19 A ¶ A cold quiet.
20 A Sparrow continues to whittle.
21 A Willet licks his lips.
22 D WILLET: Sheriff, should I--
23 D BELL: No.
24 A ¶ Sparrow finishes the carving and holds it up: a tiny wooden bird.
25 A He sets it on the rail between them.
26 D SPARROW: I didn't kill him.
27 D BELL: No one said you did.
28 D SPARROW: Then why's the boy sweating?
29 A ¶ Everyone looks at Willet.
30 A He blanches.
31 D WILLET: It's hot.
32 D CLEMENTINE: ^It's ninety degrees.
33 D BELL: ^It's ninety degrees.
34 A ¶ They speak together, and Bell shoots her a look.
35 A She shrugs, rocks the shotgun on her lap, and says nothing more.
36 A ¶ Sparrow slides the bird toward Willet.
37 A The boy stares at it, shaking, and as Bell turns to him, the wind drops.
38 A Even the tumbleweeds stop rolling.

### SCENE s00921 | INT. DECOMMISSIONED GRAIN ELEVATOR - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE IMOGEN KARLSSON-OYELARAN, MAXI, BRZEZINSKI, DISPATCHER, RAFFERTY DUNNE, SOLENNE DUNNE, ABEBE TSEGAYE
1 A ¶ A concrete cathedral of silos, six stories of rust and pigeon-dung, stairwells winding upward like the inside of a seashell.
2 A Moonlight falls through a broken roof panel and lays a cold coin on the floor.
3 A ¶ DETECTIVE IMOGEN KARLSSON-OYELARAN (40s, rain-colored coat, a limp she disguises as a stride) climbs the catwalk with a flashlight held low.
4 A Her breath fogs.
5 A ¶ Below, in the shadow of Silo Three, MAXIMILIAN "MAXI" BRZEZINSKI (30s, bookish, a scholar's stoop, hands trembling around a duffel bag) watches her ascend.
6 A ¶ A radio crackles on her belt.
7 D DISPATCHER [V.O.] (over radio): Karlsson, backup is eleven minutes out.
8 D IMOGEN: Eleven's too long.
9 D DISPATCHER [V.O.] (over radio): Say again?
10 A ¶ She switches the radio off.
11 A Above her, a boot scrapes iron.
12 A ¶ On the upper gantry, RAFFERTY DUNNE (50s, heavy, a gold tooth that catches the moon) and his niece, SOLENNE DUNNE (20s, shaved head, a ledger tucked under one arm) lean over the rail, perfectly still.
13 A ¶ Far across the chamber, ABEBE TSEGAYE (60s, retired elevator operator, a ring of keys at his belt) stands at the old control panel, one hand on a lever.
14 D ABEBE (calling out): Everyone stays where they are.
15 D RAFFERTY: Detective, you're early.
16 D IMOGEN: Mr. Dunne, put the ledger down.
17 D SOLENNE: It's not his ledger.
18 D RAFFERTY: It's not her ledger.
19 D MAXI (from below): It's mine!
20 A ¶ The echo carries the word up through six stories of concrete and back down again, thinner each time.
21 A ¶ Abebe's hand tightens on the lever.
22 A Somewhere beneath the floor, a conveyor chain groans awake.

### SCENE s00164 | INT. MATTRESS SHOWROOM - DAY
Detected names (may be incomplete or contain aliases): CASSIUS BLACKWOOD-ADEYEMI, MARIGOLD DUPONT-ASANTE
1 A ¶ A cavernous retail floor of identical beds under bright lights.
2 A Price tags like confetti.
3 A A banner: "NOTHING DOWN!
4 A EVERYTHING SOFT!"
5 A ¶ CASSIUS BLACKWOOD-ADEYEMI, 40s, a sales manager in an ill-fitting suit, stands at a display bed holding a clipboard.
6 A Opposite him, MARIGOLD DUPONT-ASANTE, 30s, a regional auditor with a briefcase, stands with her arms folded.
7 D CASSIUS: Welcome to Bedrock Mattress Gallery. May I interest you in a night of salvation?
8 D MARIGOLD: I'm from corporate.
9 D CASSIUS (sagging): Ah.
10 D MARIGOLD: I'm here to audit your sales.
11 D CASSIUS: Of course.
12 D MARIGOLD: You're down sixty percent.
13 D CASSIUS: It's a down market.
14 D MARIGOLD: Mattresses are never down.
15 D CASSIUS: They're flat, Marigold.
16 D MARIGOLD: That is not funny.
17 D CASSIUS: It's a little funny.
18 A ¶ She walks the floor, scribbling.
19 A He trails her, wringing his hands.
20 D MARIGOLD: Where is everyone?
21 D CASSIUS: Lunch.
22 D MARIGOLD: It's two p.m.
23 D CASSIUS: Long lunch.
24 D MARIGOLD: Cassius.
25 D CASSIUS: Union.
26 D MARIGOLD: You don't have a union.
27 D CASSIUS: We have a book club.
28 D MARIGOLD: That's not the same.
29 D CASSIUS: They read a lot.
30 A ¶ She stops at a display bed.
31 A Presses a hand to the mattress.
32 A It sighs.
33 A She pokes it.
34 A Pokes again.
35 D MARIGOLD: This model is called the "Cloud Nine"?
36 D CASSIUS: Yes.
37 D MARIGOLD: It's lumpy.
38 D CASSIUS: It's organic.
39 A ¶ She sits on the edge.
40 A Tests it.
41 A Lies back.
42 A Her eyes drift shut.
43 D MARIGOLD (softly): Oh.
44 D CASSIUS: Yes.
45 D MARIGOLD: Oh, no.
46 D CASSIUS: Corporate always says that.
47 D MARIGOLD: This is the best mattress I've ever laid on.
48 D CASSIUS: Why do you think nobody's at lunch?
49 A ¶ She sits up slowly.
50 A Cassius gestures behind her.
51 A Along the back wall, twelve employees lie on twelve mattresses, hands folded on their chests, eyes closed, perfectly still.
52 A A soft, collective snore rises.
53 A ¶ Marigold looks at them.
54 A Looks at her clipboard.
55 A Looks at Cassius.
56 A Slowly, she lowers the clipboard, takes off her shoes, and sets them neatly on the floor.
57 A Then she lies back down.
58 D MARIGOLD [CONT'D] (eyes closed): How much?
59 D CASSIUS: Nothing down.
60 D MARIGOLD: Of course.
61 A ¶ Cassius pulls a blanket from a rack and lays it over her.
62 A He tiptoes away, switching off the lights one by one.

### SCENE s00920 | INT. BELL TOWER OF THE DROWNED CHAPEL - DUSK
Detected names (may be incomplete or contain aliases): ORSOLYA VANE, TEMBO ADEYEMI-LUND, HOODED STRANGER, PIP, CORVANE
1 A ¶ A chapel sunk to its rafters in a black lake.
2 A The bell tower pokes above the water like a stubborn finger.
3 A Lantern light.
4 A Fish scales glitter on the beams.
5 A ¶ ORSOLYA VANE (40s, ferrywoman, salt-cracked hands) ladles broth into tin cups.
6 A Beside her, TEMBO ADEYEMI-LUND (20s, apprentice cartographer, ink on every cuff) unrolls a map.
7 A ¶ A HOODED STRANGER sits apart, back to the wall, a staff across his knees.
8 D ORSOLYA: Eat. The lake gives nothing back after dark.
9 D TEMBO: The map says the shoals are east of us.
10 D ORSOLYA: The map says a lot of things.
11 A ¶ Behind them, PIP (12, barefoot, a ferry rat) dangles from a rafter, grinning.
12 D PIP: I counted the bells. There's four.
13 D TEMBO: There were three on the chart --
14 D ORSOLYA: Pip, get down --
15 D STRANGER (quietly): He's right. Four.
16 D PIP: Told you!
17 D ORSOLYA: Who asked you?
18 D TEMBO (over her): Four? Where's the fourth?
19 D STRANGER: Where it always was.
20 A ¶ Silence.
21 A The water laps.
22 A The broth steams.
23 A Everything is calm.
24 A ¶ The Stranger lowers his hood.
25 A Pale eyes, a bell-metal collar fused to his throat.
26 D STRANGER [CONT'D]: My name is Corvane. I was the fourth.
27 A ¶ Below them, the water goes perfectly still.
28 A Then every lantern gutters at once.
29 D ORSOLYA: Pip. Tembo. Behind me.
30 D CORVANE: Too late for that, ferrywoman.
31 D PIP: He's ringing!
32 A ¶ A deep toll rolls up from under the lake.
33 A The floorboards shake.
34 D TEMBO: Make it stop!
35 D ORSOLYA (to herself): Should have left him on the shore.
36 D CORVANE: Tonight, you ring with me.

### SCENE s01646 | INT. FISH MARKET AUCTION FLOOR - EARLY MORNING
Detected names (may be incomplete or contain aliases): MAUDE PETTIGREW, FERDIE, LOMBARD, ^FERDIE, SOLD
1 A ¶ Crushed ice.
2 A Crates of silver mackerel.
3 A A scale.
4 A A bell.
5 A The din of a hundred voices that are not in this scene.
6 A ¶ MAUDE PETTIGREW, 50s, galoshes and a straw hat with a feather in it, grips a number paddle.
7 A FERDIE "FERDINAND" LOMBARD, 50s, a cravat under his oilskins, grips his.
8 D MAUDE: Ferdinand Lombard, put that down.
9 D FERDIE: I will not, Maudie.
10 D MAUDE: It's my tuna.
11 D FERDIE: It's the market's tuna.
12 D MAUDE: I saw it first.
13 D FERDIE: You saw it second. I saw it from the harbor.
14 D MAUDE (to the crowd): Did anyone else see a man claim a tuna from the harbor?
15 D FERDIE (to the crowd): Did anyone else see a woman in a feather hat claim anything?
16 A ¶ An invisible auctioneer raps a gavel.
17 A Both snap their paddles up.
18 D MAUDE: Two hundred!
19 D FERDIE: Two hundred!
20 D MAUDE: Two-fifty!
21 D FERDIE: Two-fifty!
22 D MAUDE: You are impossible!
23 D FERDIE: You are impossible!
24 A ¶ The gavel bangs.
25 A They speak at the same instant.
26 D MAUDE: I'm bidding for my sister's wedding.
27 D ^FERDIE: I'm bidding for my sister's wedding.
28 A ¶ They stop.
29 A Stare at each other.
30 A Slowly lower their paddles.
31 D MAUDE: Your sister's Cordelia?
32 D FERDIE: Your sister's Cordelia?
33 D MAUDE: She's marrying a Lombard.
34 D FERDIE: She's marrying a Pettigrew.
35 D MAUDE: Then we're...
36 D FERDIE: Cousins-in-law.
37 D MAUDE (to herself): Oh, dear.
38 D FERDIE: Split the tuna?
39 D MAUDE: Split the tuna.
40 A ¶ They shake hands.
41 A The gavel falls.
42 A SOLD, says the unseen auctioneer, to both.

### SCENE s02347 | INT. ORBITAL GREENHOUSE - HELIX STATION - "DAY" CYCLE
Detected names (may be incomplete or contain aliases): HELENA VASQUEZ-OLUWO, JO, ARDEN, COMMANDER RHEE, TEENAGE CADET, CADET LISANDRA, TECHNICIAN WU
1 A ¶ A great curved garden turning slowly in space.
2 A Glass arches filled with starlight.
3 A Rows of tomato vines, lemon dwarfs, stalks of corn, all tied to trellises with soft cord.
4 A A gentle hum of pumps.
5 A Water droplets drift, glittering.
6 A ¶ DR. HELENA VASQUEZ-OLUWO, 50s, botanist, floats upside down among the tomatoes with a clipboard strapped to her wrist.
7 A She is pinching a leaf, frowning.
8 A ¶ Below her, hands on a rail, ENGINEER JOSEPHINE "JO" ARDEN, 30s, in a gray station jumpsuit, adjusts a valve and watches the readout.
9 D HELENA: It's yellowing.
10 D JO: The whole row?
11 D HELENA: Half.
12 D JO: Is it the light?
13 D HELENA: It isn't the light.
14 D JO: Then the water.
15 D HELENA: It isn't the water either.
16 D JO: Then what?
17 A ¶ Helena pulls herself down the trellis.
18 A She hangs beside Jo.
19 A She holds out the leaf.
20 A It crumbles to powder in her fingers.
21 D JO [CONT'D]: That's not blight.
22 D HELENA: No.
23 D JO: That's... static.
24 D HELENA: Yes. She thinks so too.
25 D JO: Who?
26 D HELENA: Commander Rhee. She came by this morning.
27 D JO: She didn't tell me.
28 D HELENA: She doesn't tell you things.
29 D JO: She tells you.
30 D HELENA: She asks me things. It isn't the same.
31 A ¶ Jo's jaw works.
32 A She taps the readout.
33 A Numbers scroll in amber.
34 A She stops on one.
35 D JO: Helena. That's radiation.
36 D HELENA: I know.
37 D JO: From where?
38 D HELENA: From outside.
39 D JO: That's impossible. The shielding's rated for...
40 D HELENA: It was rated for the old sun.
41 A ¶ Jo turns slowly.
42 A They look at each other.
43 A A droplet of water drifts between them and breaks against the glass.
44 A ¶ The station intercom chimes.
45 A A calm voice.
46 D COMMANDER RHEE [V.O.]: All hands. Report to the central deck. All hands.
47 D JO: That's her.
48 D HELENA: Of course it is.
49 A ¶ Jo pushes off the rail.
50 A Helena grabs a handful of leaves, stuffs them in her pocket.
51 A They float down the long arc of the garden toward the airlock, side by side.
52 A Behind them, the tomatoes turn from red to gray.
53 A ¶ At the bulkhead, a TEENAGE CADET, 17, in an oversized uniform, drifts into their path, wide-eyed, a tablet clutched to her chest.
54 D CADET LISANDRA: Doctor. Engineer. The Commander says it's the sun.
55 D JO: We know.
56 D CADET LISANDRA: She says there's a window. Eleven hours.
57 D HELENA: For what?
58 D CADET LISANDRA: To decide.
59 A ¶ Helena closes her eyes.
60 A Jo takes the tablet from the cadet's hands and reads it.
61 A Then, very slowly, she hands it back.
62 A She turns her gaze to Helena.
63 A Helena doesn't open her eyes.
64 D HELENA: Tell me.
65 D JO: We can evacuate half.
66 D HELENA: Which half?
67 D JO: Whichever half she says.
68 D HELENA: And the rest?
69 D JO: She says they'll have the garden.
70 D HELENA (a bitter breath): The garden's dying.
71 D JO: She knows.
72 A ¶ Cadet Lisandra stares from one woman to the other.
73 A She says nothing.
74 A A single drop of water drifts up and pops on her sleeve.
75 A ¶ Then, beyond the arches, a flare lights the stars.
76 A ¶ Jo and Helena turn together toward the glass.
77 A The light climbs, white and silent, across their faces.
78 D CADET LISANDRA [CONT'D] (whispering): That wasn't the sun.
79 D JO: No.
80 D HELENA (low): That was the shield failing.
81 A ¶ The hum of the pumps rises.
82 A The vines shiver on their trellises.
83 A The sirens begin.
84 A ¶ TECHNICIAN WU, 20s, bursts through the bulkhead, goggles up, breathless.
85 D TECHNICIAN WU: Helena! Jo! The Commander wants you on the deck now!
86 D HELENA: We're coming, Wu.
