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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_opusA/group_00002.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01044 | INT. LIBRARY OF MOTHS - THE HOLLOW TOWER - NIGHT
Detected names (may be incomplete or contain aliases): ORRIN, SABLE, TAMSIN, VESPER
1 A ¶ Shelves rise into darkness, thick with bound ledgers.
2 A Pale moths cover every spine, their wings turning the pages by themselves.
3 A ¶ ORRIN, a young knight in dented mail, steps through the arch, sword half-drawn.
4 A At his side, SABLE, a thief with a hooded cloak and a crooked smile, carries a lantern whose flame burns blue.
5 D ORRIN: Quiet. They sleep.
6 D SABLE: They're moths, Orrin. They don't sleep.
7 A ¶ TAMSIN, a girl of twelve in an apprentice's smock, scurries from behind a shelf, arms full of scrolls, and nearly collides with them.
8 A All three freeze.
9 D TAMSIN: You are not supposed to be here.
10 D SABLE: No one is.
11 A ¶ The moths lift in a silent cloud.
12 A Orrin's sword rings free.
13 A Sable ducks, Tamsin shrieks, scrolls scatter, and the three tumble together into the center aisle, tangled in cloak and chain.
14 A ¶ A hush falls.
15 A ¶ VESPER, tall and thin, robed in gray, steps from between the shelves.
16 A Her face is a smooth mask of bone-white silk.
17 A She raises one hand.
18 A The moths settle.
19 D VESPER: The Archivist welcomes you. Now put down the lantern.

### SCENE s01045 | INT. GOAT YOGA STUDIO - MORNING
Detected names (may be incomplete or contain aliases): CLAUDETTE FONTENOT, LEONARD PRICE, MAMA ROSE
1 A ¶ A converted barn.
2 A Bamboo mats in neat rows, string lights, a chalkboard reading "Namaste Baa-ck."
3 A Six goats wander the floor, bored, chewing yoga straps.
4 A ¶ CLAUDETTE FONTENOT, 40s, instructor, flowing linen, sits cross-legged on a mat with a phone propped against her water bottle.
5 A LEONARD PRICE, 50s, her only student, a stockbroker in too-tight spandex, attempts a downward dog.
6 D LEONARD: Claudette, one of them is eating my sock.
7 D CLAUDETTE: That's Beyonce. She loves attention.
8 D LEONARD: It's attention with teeth.
9 D CLAUDETTE: Breathe, Leonard. In through the nose.
10 A ¶ He breathes.
11 A Beyonce chews.
12 A He breathes again.
13 A ¶ The phone rings.
14 A A photo of an elderly woman in a floppy hat.
15 A MAMA ROSE.
16 D CLAUDETTE [CONT'D]: Sorry. I have to take this.
17 A ¶ She answers on speaker.
18 D MAMA ROSE [V.O.]: Claudette! Are you on the goat farm again?
19 D CLAUDETTE: It's a studio, Mama.
20 D MAMA ROSE [V.O.]: Is it the goat that eats the shoes?
21 D LEONARD (under his breath): That's the one.
22 D MAMA ROSE [V.O.]: Who's that? A man? Are you seeing a man?
23 D CLAUDETTE: It's a client, Mama.
24 D MAMA ROSE [V.O.]: He sounds fat.
25 D LEONARD: I'm in a very difficult pose.
26 D MAMA ROSE [V.O.]: Claudette, I need you to come home. The faucet is leaking again.
27 D CLAUDETTE: I'll call a plumber.
28 D MAMA ROSE [V.O.]: Plumbers are thieves.
29 D CLAUDETTE: Mama, I love you. I have to teach.
30 D MAMA ROSE [V.O.]: Is the goat singing? I hear a goat singing.
31 A ¶ On cue, Beyonce bleats, triumphant.
32 D CLAUDETTE (to Leonard): She's proud of you.
33 D LEONARD: I'll be sure to thank her.
34 D CLAUDETTE: Goodbye, Mama.
35 A ¶ She hangs up.
36 A Smooths her linen.
37 A Resettles.
38 D CLAUDETTE [CONT'D]: Where were we?
39 D LEONARD: Paying for this.
40 D CLAUDETTE: Right. Warrior One.

### SCENE s01046 | INT. VOSSBERG & CRANE - EXECUTIVE NAP POD ROOM - DAY
Detected names (may be incomplete or contain aliases): PRUDENCE ADEYEMI, MALCOLM VOSSBERG
1 A ¶ Six sleek pods, each shaped like a lacquered egg.
2 A Soft ambient chimes.
3 A A sign on the wall: REST IS RESULTS.
4 A ¶ PRUDENCE ADEYEMI, 40s, in a pressed navy suit, stands outside pod three.
5 A She has been standing there a long time.
6 A Her phone is in her hand, screen dark.
7 A ¶ MALCOLM VOSSBERG, 50s, in shirtsleeves, tie loosened to a politician's disarray, emerges from pod four rubbing his eyes.
8 A He sees her.
9 A He smiles.
10 A He is not surprised.
11 D MALCOLM: Prudence. I thought you'd gone home.
12 D PRUDENCE: I did.
13 D MALCOLM: Then you came back.
14 D PRUDENCE: For my coat.
15 A ¶ She doesn't move toward the coat rack.
16 A He does.
17 A He lifts her coat off a hook, holds it out.
18 A She takes it.
19 A Doesn't put it on.
20 D MALCOLM: Rough week.
21 D PRUDENCE: It's Thursday.
22 D MALCOLM: Rough Thursday.
23 A ¶ He adjusts a pod's dial.
24 A The chimes change key.
25 D MALCOLM [CONT'D]: The numbers will be fine. They always are.
26 D PRUDENCE: Are they?
27 D MALCOLM: You doubt me?
28 D PRUDENCE: I doubt the spreadsheet.
29 D MALCOLM: It's your spreadsheet.
30 D PRUDENCE: It's the one you rewrote.
31 A ¶ Silence.
32 A The chimes continue.
33 A A faint hiss of oxygen from the pods.
34 D MALCOLM: I thought you'd appreciate the efficiency.
35 D PRUDENCE: Efficiency.
36 D MALCOLM: Streamlining.
37 A ¶ Prudence folds her coat over her arm.
38 A Folds it a second time.
39 A Smooths it flat with both hands, too carefully.
40 D PRUDENCE: I'll be in my office.
41 D MALCOLM: You were just leaving.
42 D PRUDENCE: I changed my mind.
43 A ¶ He nods.
44 A Looks at the pod.
45 A Looks at her.
46 D MALCOLM: Sleep on it. That's what these are for.
47 A ¶ She turns, walks to the door.
48 A Pauses with one hand on the frame.
49 D PRUDENCE: Do you sleep in there?
50 D MALCOLM: Every day.
51 D PRUDENCE: And dream?
52 D MALCOLM: Never.
53 D PRUDENCE: That's what I thought.
54 A ¶ She leaves.
55 A He watches the door close, then climbs back into pod four and seals the lid.

### SCENE s01047 | EXT. SALT FLAT - ABANDONED STAGECOACH - HIGH NOON
Detected names (may be incomplete or contain aliases): MARSHAL CULLEN BRODERICK, DUTCH, LUPE VARGAS
1 A ¶ White to the horizon.
2 A Heat shimmer bends the sky.
3 A A stagecoach tilts on a broken axle, one wheel cocked in the crust.
4 A ¶ MARSHAL CULLEN BRODERICK, 50s, tin star, dust-gray duster, steps down from the coach, rifle across his arm, while behind him DUTCH, a lean outlaw in manacles, shuffles toward the shade, and LUPE VARGAS, 30s, the driver, slaps her hat against her knee, checks the horses, and mutters at the broken wheel, all three of them squinting at a dark speck on the horizon that keeps growing.
5 D CULLEN (to the others): Nobody run. There's nowhere to run to.
6 D DUTCH (low, to Cullen): Marshal, take these off me. If that's riders, I can shoot.
7 D CULLEN: No.
8 D LUPE (to herself): Three days. Three goddamn days of salt.
9 D CULLEN: Lupe. Water.
10 A ¶ She tosses him a canteen.
11 A He drinks, passes it to Dutch.
12 A Dutch drinks, passes it back.
13 A The speck becomes a rider.
14 D DUTCH: That's a lone horse.
15 D CULLEN: Could be a lone man.
16 D LUPE: Could be a mirage.
17 A ¶ The rider slows.
18 A Stops a hundred yards out.
19 A Raises a white cloth.
20 A Waves it.
21 A ¶ Cullen lowers the rifle.
22 A Dutch exhales.
23 A Lupe pulls her hat down.

### SCENE s01048 | INT. KRVX 91.3 FM - RURAL RADIO STATION - NIGHT
Detected names (may be incomplete or contain aliases): DEE-DEE HARGROVE, ROLAND TIBBETTS, CAL PINKERTON, CALLER
1 A ¶ A cinderblock studio in a cornfield.
2 A Foam-padded walls, a mixing board with taped-over knobs, a window onto the black field.
3 A A red ON AIR light burns.
4 A ¶ DEE-DEE HARGROVE, 40s, headphones, cardigan, a thermos of tea, sits at the console.
5 A She speaks into the mic in the voice of a lifelong friend.
6 D DEE-DEE: That was Patsy Cline, and you're listening to Night Owls on KRVX. Four a.m. in Calloway County. Roads are clear and the corn is quiet.
7 A ¶ She flicks a switch.
8 A Music slides in.
9 A She leans back.
10 A ¶ ROLAND TIBBETTS, 60s, station engineer, in coveralls, enters with a toolbox and a flashlight.
11 A He sets the box down next to a cabinet of cables.
12 D ROLAND: Transmitter's running hot again.
13 D DEE-DEE: Is it going to melt?
14 D ROLAND: Not tonight.
15 D DEE-DEE: Then let it be.
16 A ¶ He snorts.
17 A Sits on a stool.
18 A Unwraps a sandwich.
19 A ¶ CAL PINKERTON, 20s, intern, lanky, sleepy, shuffles in with an armful of CDs and drops them on the console.
20 A He yawns.
21 D CAL: Request line's been quiet. Except one.
22 D DEE-DEE: Who?
23 D CAL: Doesn't give a name.
24 A ¶ The studio phone blinks.
25 A Dee-Dee pushes a button.
26 A Her mic opens to the caller, softly.
27 D DEE-DEE: KRVX, you're on the air.
28 A ¶ A pause.
29 A Static, then a thin voice, dry as paper.
30 D CALLER [V.O.]: Hello. I'd like to hear "Wild Horses."
31 D DEE-DEE: Of course. Is it for someone?
32 D CALLER [V.O.]: For the three of you.
33 A ¶ Dee-Dee looks up.
34 A Roland stops chewing.
35 A Cal looks at the window.
36 D DEE-DEE: That's very kind. May I ask your name?
37 D CALLER [V.O.]: You can see me.
38 A ¶ Out in the black field, a single flashlight clicks on.
39 A It points toward the studio.
40 A It does not move.
41 A ¶ Cal steps to the glass.
42 A Roland stands, sandwich forgotten.
43 A Dee-Dee keeps her voice steady.
44 D DEE-DEE [CONT'D] (into mic): Here's that request, folks.
45 A ¶ She slides the fader.
46 A The song begins.
47 A In the field, the flashlight goes out.

### SCENE s01049 | INT. JURY ROOM - FLOODLIT TENT - NIGHT
Detected names (may be incomplete or contain aliases): GLORIA ACHTERBERG, DEEZ, PRUITT, MIN-JUN HAN
1 A ¶ A federal courthouse flattened by a hurricane, so the court sits in a canvas tent on the parking lot.
2 A Folding table, plastic chairs, a single fan.
3 A Generator thrum outside.
4 A Rain on the roof.
5 A ¶ GLORIA ACHTERBERG, 60s, foreperson, cardigan, a stack of index cards in front of her.
6 A DWAYNE "DEEZ" PRUITT, 30s, ball cap, sits arms crossed.
7 A MIN-JUN HAN, 40s, nurse, kneads her temples.
8 D GLORIA (to the room): Let's take another vote. All in favor of conviction.
9 A ¶ Deez doesn't raise his hand.
10 A Min-Jun hesitates.
11 A Gloria raises hers.
12 D GLORIA [CONT'D]: One.
13 D MIN-JUN: Gloria, I'm not sure--
14 D GLORIA: You said yesterday you were.
15 D MIN-JUN: I said I leaned.
16 D DEEZ: I never leaned.
17 D GLORIA: Deez, with respect, you haven't opened your mouth in two days.
18 D DEEZ: I'm saving it.
19 D GLORIA: For what?
20 D DEEZ: For when it matters.
21 A ¶ He stands.
22 A The chair scrapes.
23 A He crosses to a pitcher, pours water, drinks.
24 A Then, without warning, he slams the cup down.
25 D DEEZ [CONT'D] (to himself): Twelve men on a bench and none of them looked at the kid.
26 D MIN-JUN: Deez?
27 D DEEZ: You heard me.
28 D GLORIA: We are not here to rehash the trial.
29 D DEEZ: Gloria, he's nineteen. He had a record of one parking ticket.
30 D GLORIA: He had a gun.
31 D DEEZ: He had a toy.
32 D GLORIA: The witness said it was real.
33 D DEEZ: The witness was a hundred yards away in the dark.
34 A ¶ Min-Jun rises, steps between them, hands out.
35 D MIN-JUN: Stop. Both of you.
36 D DEEZ: She keeps calling it a verdict. It's a guess.
37 D GLORIA: You think I haven't been losing sleep?
38 D DEEZ: I think you made up your mind on day one.
39 A ¶ Gloria slaps her cards down.
40 A They fan across the table.
41 A Deez knocks them to the floor with the back of his hand.
42 A Min-Jun snatches one before it's lost.
43 D MIN-JUN: Enough! We have to be unanimous!
44 D DEEZ: Then we're not leaving this tent.
45 D GLORIA (very quiet): Then we're not leaving.
46 A ¶ The generator coughs.
47 A The lights flicker.
48 A All three look up.
49 A The fan slows to a stop.
50 A ¶ In the dark, no one moves.

### SCENE s01050 | INT. CAR WASH TUNNEL - NIGHT
Detected names (may be incomplete or contain aliases): ODALYS FERRERA
1 A ¶ Dark.
2 A Foam sluices over the windshield.
3 A Spinning brushes.
4 A Sodium light bleeds through soap in slow orange waves.
5 A ¶ ODALYS FERRERA, 40s, sits behind the wheel of a dented sedan, both hands on ten and two.
6 A Funeral dress.
7 A Hair still pinned.
8 D ODALYS [V.O.]: Forty-one years. He never once washed the car.
9 A ¶ The brushes slap the roof.
10 A She doesn't flinch.
11 D ODALYS [V.O., CONT'D]: Said it would just get dirty again.
12 A ¶ She switches off the radio.
13 A The tunnel roars.
14 D ODALYS [V.O., CONT'D]: So I let it.
15 A ¶ Rinse arches fire.
16 A Water drums the glass.
17 A She leans her forehead on the wheel.
18 D ODALYS [V.O., CONT'D]: Now I'm paying six dollars to sit in here.
19 A ¶ The dryer blasts.
20 A The car shudders.
21 A She starts laughing.
22 A Then she stops.
23 A ¶ She puts the car in drive.
24 A Rolls into the light.

### SCENE s01051 | INT. HOLLOWAY CIDER MILL - PRESS ROOM - NIGHT
Detected names (may be incomplete or contain aliases): JUNIPER HOLLOWAY, RHYS DOYLE, BEATA NOWAK, COLM, OLUWASEUN ADEYEMI
1 A ¶ A long timber barn that smells of fermenting apples and wet wood.
2 A Wooden presses with iron screws, barrels stacked to the rafters.
3 A A lantern on a hook sways in a draft nobody can find.
4 A Bees drowse in the beams, drunk on sugar, their hum a low drone.
5 A ¶ JUNIPER HOLLOWAY, 50s, mill owner, apron stained russet to the elbows, ladles pulp into a cloth.
6 A Her braid is thick as a rope.
7 A ¶ RHYS DOYLE, 30s, hired hand, leans on a broom and doesn't sweep.
8 A BEATA NOWAK, 60s, Juniper's sister, sits on an upturned crate peeling an apple in one unbroken ribbon.
9 A COLM, 20s, the grandson, perches on a barrel with a harmonica he isn't playing.
10 A OLUWASEUN ADEYEMI, 40s, the buyer from the city, in a camel coat that doesn't belong here, taps a clipboard.
11 D JUNIPER (to the room): Last press of the season. Then we can all go home.
12 D RHYS: Or stay.
13 D BEATA: No one's staying.
14 D OLUWASEUN: I do need a count by midnight.
15 D JUNIPER: You'll have it.
16 A ¶ She turns the screw.
17 A Juice runs into a trough, amber and slow.
18 A The sound is oddly soft.
19 D COLM: It sounds like someone breathing.
20 D BEATA: It's the cider, Colm.
21 D COLM: Not the cider. Under it.
22 A ¶ They go still.
23 A The juice drips.
24 A The bees hum.
25 A And beneath it all, a slow, wet inhale.
26 A Then an exhale.
27 D RHYS (muttering): Pipes.
28 D JUNIPER: There are no pipes in the press room.
29 D OLUWASEUN: Is there a basement?
30 A ¶ Juniper and Beata exchange a look so quick it's nearly nothing.
31 D BEATA: No basement.
32 D JUNIPER: We don't dig here.
33 D OLUWASEUN: Why not?
34 D JUNIPER: The ground doesn't like it.
35 A ¶ Oluwaseun smiles, thinks it a joke.
36 A Nobody smiles back.
37 A ¶ The lantern swings.
38 A Its light crosses Rhys's face, Beata's hands, Colm's eyes, Juniper's braid.
39 A The hum of bees thickens.
40 A ¶ Juniper lifts a ladle to her lips.
41 A Tastes.
42 A Her face doesn't change.
43 D JUNIPER [CONT'D] (to Colm): Put your harmonica down, love.
44 D COLM: I wasn't--
45 D JUNIPER: Now.
46 A ¶ He sets it on the barrel.
47 A It rolls an inch.
48 A Stops.
49 A ¶ Beata stops peeling.
50 A The ribbon of apple skin hangs, quivering, in her fingers.
51 D BEATA (softly): It's early.
52 D JUNIPER: It's early.
53 D OLUWASEUN: What is?
54 A ¶ The breathing quickens.
55 A The barrel under Colm shudders.
56 A The staves bulge, as if something inside is leaning out.
57 A ¶ All five freeze.
58 A The bees fall silent in the rafters.
59 A ¶ Then, in one motion, Rhys drops the broom, Beata drops the apple, Colm scrambles off the barrel, Oluwaseun stumbles backward over the trough, and Juniper turns calmly, takes a mallet from a hook, and faces the barrel as if she'd been expecting it since March.
60 D JUNIPER [CONT'D] (to all): Out. Quiet. Don't run.
61 A ¶ They go.
62 A Slowly.
63 A Colm last, looking back.
64 A ¶ Juniper steps to the barrel.
65 A Raises the mallet.
66 A Waits.
67 A ¶ The staves creak.
68 A The breath hitches.
69 A Waits with her.

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

### SCENE s01053 | INT. AIR RAID WARDEN POST - SCHOOLYARD SHELTER - NIGHT (1941)
Detected names (may be incomplete or contain aliases): EDMUND HARTLEY, VERA PLUMMER, ALF DOBSON, CONTROL
1 A ¶ A concrete box dug under a playground.
2 A A hurricane lamp, a field telephone, a rack of tin helmets, sandbags to the ceiling.
3 A Muffled drone overhead.
4 A ¶ EDMUND HARTLEY, 50s, grocer by day, warden by night, white helmet, rests his hand on the phone.
5 A VERA PLUMMER, 20s, volunteer, clipboard and bicycle clips, sits on a crate with a mug of cocoa.
6 A ALF DOBSON, 60s, retired railwayman, hums a hymn to himself.
7 A ¶ The drone grows.
8 A Edmund glances at the ceiling.
9 D EDMUND: Mark it. Eleven forty.
10 D VERA: Marked.
11 D ALF (muttering): That's no Spitfire.
12 A ¶ The field telephone rings.
13 A Edmund snatches it.
14 D EDMUND: Post Seven.
15 D CONTROL [V.O.]: Post Seven, this is Control. Report.
16 D EDMUND: Nothing yet. Heard them over the canal.
17 D CONTROL [V.O.]: Hold position. Fire watch at the gasworks says they're dropping flares.
18 D EDMUND: Flares.
19 D CONTROL [V.O.]: Prepare for incendiaries.
20 A ¶ He hangs up.
21 A Looks at Vera and Alf.
22 D EDMUND [CONT'D]: Right. Helmets on. Buckets by the door.
23 A ¶ Vera sets down her cocoa.
24 A Alf rises, joints cracking.
25 D VERA: Mr. Hartley, shouldn't we stay below?
26 D EDMUND: Not for incendiaries.
27 D ALF: You'll want sand, not water.
28 D EDMUND: I know my business, Alf.
29 D ALF: Nobody said you didn't.
30 A ¶ A distant thud.
31 A Dust shivers from the ceiling.
32 A ¶ The phone rings again.
33 A Edmund picks up.
34 D CONTROL [V.O.]: Post Seven. Strike on the Albert Road. Third house from the corner.
35 A ¶ Edmund goes pale.
36 D EDMUND: That's my shop.
37 D CONTROL [V.O.]: Say again?
38 D EDMUND: That's my shop. That's my daughter's flat above it.
39 D CONTROL [V.O.]: Warden Hartley, stay at your post.
40 A ¶ He puts the phone down very carefully.
41 A Takes off his helmet.
42 A Puts it back on, tighter.
43 D VERA: Mr. Hartley--
44 D EDMUND: Vera. Take the register. Alf, you're with me.
45 D ALF: Aye.
46 D EDMUND: We're going up.
47 A ¶ He opens the door.
48 A Night, red and roaring, floods in.

### SCENE s01054 | INT. ROADSIDE MOTEL - ROOM 9 - NIGHT
Detected names (may be incomplete or contain aliases): WOMAN, PROPERTY LENA MARSH
1 A ¶ Pink bedspread.
2 A Wood-paneled walls.
3 A A TV bolted to the dresser, off.
4 A A lamp with a torn shade.
5 A Rain taps the window like fingertips.
6 A ¶ A WOMAN, 30s, wet raincoat, dark circles under her eyes, locks the door.
7 A Slides the chain.
8 A Pulls the curtains shut.
9 A She is alone, and she's checking the room the way a person checks who has already been surprised once.
10 A ¶ She opens the closet.
11 A Empty hangers.
12 A The bathroom.
13 A Empty tub.
14 A Under the bed.
15 A Dust, a lost sock.
16 A ¶ She sits on the edge of the bed and takes a small tape recorder from her bag.
17 A She presses RECORD.
18 D WOMAN (into recorder): Test. Test.
19 A ¶ She stops.
20 A Plays it back.
21 A Her own voice, tinny.
22 D WOMAN [V.O.] (tape): Test. Test.
23 A ¶ She nods.
24 A Records again.
25 D WOMAN: Day one. Motel off Route 9. Nobody followed me. I think.
26 A ¶ She stops the tape.
27 A Looks at the phone on the nightstand.
28 A Beige, rotary, curly cord.
29 A She picks up the receiver.
30 A Dial tone.
31 A She sets it back.
32 A ¶ She rewinds.
33 A Hits PLAY.
34 D WOMAN [V.O.] (tape): Day one. Motel off Route 9. Nobody followed me. I think.
35 A ¶ Then, after her recorded voice, the same voice again, lower, almost tender, saying words she never spoke:
36 D WOMAN [V.O.] (tape, whispering): I'm in the room.
37 A ¶ She freezes.
38 A The tape continues to hiss.
39 A ¶ She hits STOP.
40 A Her thumb shakes.
41 A She rewinds again, plays it again.
42 A The extra line is gone.
43 A Only the first.
44 D WOMAN (quietly): Okay.
45 A ¶ She sets the recorder on the dresser.
46 A Takes off her coat.
47 A Hangs it on the doorknob.
48 A A key tag drops from the pocket and clatters to the floor.
49 A She picks it up.
50 A The tag is stamped in hand-scratched letters: PROPERTY OF LENA MARSH.
51 A ¶ She turns it over, turns it back.
52 D LENA (to herself): Right. Right. I'm Lena.
53 A ¶ She says it as if reminding herself.
54 A She says it again.
55 D LENA [CONT'D]: Lena Marsh. Thirty-four. Dental hygienist. Born in Duluth.
56 A ¶ She reaches for the lamp.
57 A Clicks it off.
58 A The room is almost black.
59 A A glow leaks around the curtain edge.
60 A ¶ On the dresser, the recorder clicks on by itself.
61 A The tape reels turn.
62 D LENA [CONT'D]: No.
63 D LENA [V.O.] (tape): Lena.
64 A ¶ She backs against the wall.
65 D LENA: That's my voice.
66 D LENA [V.O.] (tape): You taped me yesterday. In the car.
67 D LENA: I wasn't in a car yesterday.
68 D LENA [V.O.] (tape): No. But you will be.
69 A ¶ She lunges.
70 A Grabs the recorder.
71 A Rips the cassette out.
72 A Throws it across the room.
73 A It hits the TV and cracks.
74 A ¶ Silence.
75 A Rain.
76 A Breath.
77 A ¶ She slides down the wall until she's sitting on the floor.
78 A She hugs her knees.
79 A ¶ From the bathroom: a click.
80 A A drip.
81 A Another click.
82 D LENA [CONT'D] (whispering): Please.
83 A ¶ The bathroom light snaps on by itself.
84 A A thin line of yellow slides under the door.
85 D LENA [CONT'D] (barely audible): Please don't.
86 A ¶ The doorknob turns on its own.
87 A ¶ She crawls to the bed.
88 A Under it.
89 A Dust, the lost sock.
90 A Her own hand finds the cracked cassette.
91 A ¶ The bathroom door creaks.
92 D LENA [V.O.] (from the cracked cassette, gentle): Day two.
93 A ¶ She presses the cassette to her chest.
94 A Doesn't breathe.
95 A ¶ The bathroom light hums.
96 A The cassette hisses against her chest.
97 D LENA [V.O., CONT'D]: Nobody followed me.
98 D LENA (a thread of voice): I know.
99 A ¶ The lamp clicks on.

### SCENE s01055 | INT. PHILOMENA'S KITCHEN - SUNDAY AFTERNOON
Detected names (may be incomplete or contain aliases): PHILOMENA ROSSETTI, ARTUR ROSSETTI, SOLEDAD
1 A ¶ A kitchen from another decade.
2 A Yellow linoleum, a table with a plastic cloth printed with lemons, a clock shaped like a rooster.
3 A On the stove, a pot of sauce simmers, spitting.
4 A Steam beads the windowpanes.
5 A ¶ PHILOMENA ROSSETTI, 80, sleeves pushed to the elbows, hair in a hairnet, stirs.
6 A Her hands are knotted like old rope.
7 A At the table, ARTUR ROSSETTI, 50s, her son, in a church shirt, slices bread with surgical care.
8 A His daughter SOLEDAD, 16, sits cross-legged on a chair, eyes on her phone, headphones around her neck.
9 D PHILOMENA: You never come on Sundays anymore.
10 D ARTUR: I come on Sundays, Ma.
11 D PHILOMENA: You come on the Sundays you remember.
12 D ARTUR: That's most of them.
13 D PHILOMENA: Most. Hmph.
14 A ¶ She tastes the sauce.
15 A Adds salt.
16 A Stirs.
17 D SOLEDAD: It smells good, Nonna.
18 D PHILOMENA: It smells like your grandfather's lies.
19 D SOLEDAD: What?
20 D PHILOMENA: He swore he could cook. He burned water.
21 D ARTUR: Ma, not today.
22 D PHILOMENA: Why not today?
23 D ARTUR: Because.
24 D PHILOMENA: Because what?
25 D ARTUR: Because it's Sunday.
26 A ¶ She snorts.
27 A Taps the spoon on the pot.
28 D PHILOMENA: You think I don't know why you've brought the child.
29 D ARTUR: Soledad's here because she wanted to see you.
30 D SOLEDAD: I did.
31 D PHILOMENA: You came to hold my hand while Arturo tells me something he has been practicing in the car.
32 D ARTUR: Ma.
33 D PHILOMENA: Tell me.
34 A ¶ Artur sets the knife down.
35 A Wipes his fingers.
36 A Looks at his daughter, who looks at her phone, pretending not to hear.
37 D ARTUR: The doctor called.
38 D PHILOMENA: Which doctor?
39 D ARTUR: The one with the results. For the house.
40 D PHILOMENA: The house is not sick.
41 D ARTUR: The house is not sick, Ma. You are.
42 A ¶ The clock ticks.
43 A The sauce pops.
44 A Philomena does not turn.
45 D PHILOMENA: I know that.
46 D ARTUR: You know?
47 D PHILOMENA: I am eighty. I have buried a husband, two brothers, and a dog named Salvatore. I know what a cough means.
48 D SOLEDAD: Nonna?
49 D PHILOMENA: Hush, cara.
50 D ARTUR: They want to put you somewhere. Just for a little while. Somewhere with nurses.
51 D PHILOMENA: Somewhere with nurses.
52 D ARTUR: Not forever.
53 D PHILOMENA: They never say forever. They say a little while.
54 D ARTUR: I didn't want to.
55 D PHILOMENA: You didn't want to tell me, or you didn't want to put me in a place?
56 D ARTUR: Both.
57 A ¶ She turns now.
58 A Her face is wet.
59 A It isn't steam.
60 A She wipes it on her sleeve.
61 D PHILOMENA: Sit with me. Both of you.
62 A ¶ They sit.
63 A She lifts the pot, spoons a bowl, sets it before Soledad.
64 D PHILOMENA [CONT'D]: Eat. It gets cold.
65 D SOLEDAD: I'm not hungry.
66 D PHILOMENA: You'll be hungry in a month. When I'm not here to feed you.
67 A ¶ She says it lightly.
68 A A joke.
69 A Nobody laughs.
70 D ARTUR: Ma. Please.
71 D PHILOMENA: Arturo. Your father's recipe. It's in the drawer, under the knives. Never in a book. I wrote it on the back of an electric bill.
72 D ARTUR: I know.
73 D PHILOMENA: You do not know. You think there is a secret ingredient. There isn't. There is only a woman standing here at four o'clock every Sunday for fifty-eight years.
74 A ¶ She sits.
75 A Folds her hands.
76 D PHILOMENA [CONT'D]: That's the ingredient. Now eat.
77 A ¶ Soledad takes a spoonful.
78 A Her face crumples.
79 A She keeps eating.
80 A ¶ Artur reaches across the lemons and takes his mother's hand.
81 A It is small and knotted and warm.
82 A ¶ The rooster clock ticks.
83 A On the stove, the sauce goes on simmering.

### SCENE s01056 | INT. SHUTTERED CAROUSEL PAVILION - ABANDONED AMUSEMENT PARK - NIGHT
Detected names (may be incomplete or contain aliases): DUCHESS, LAVALLE, BONES, SLIM POLLARD, PEARL
1 A ¶ Painted horses frozen mid-gallop, their gilt chipped.
2 A A pipe organ sags in the center.
3 A The roof leaks silver light.
4 A Five figures sit on the platform's edge, boots dangling.
5 A ¶ DUCHESS, 60s, tiny and elegant in a mink collar, taps a cane against a brass pole.
6 A MR. LAVALLE, 50s, dapper, pocket square, polishes a pair of rimless glasses.
7 A BONES, 30s, long and gaunt, sprawls across a bench seat with a thermos of coffee.
8 A SLIM POLLARD, 40s, round as a barrel, sits with a ledger on his knee.
9 A PEARL, 20s, the youngest, in a leather jacket with too many zippers, spins a lock-pick between her fingers.
10 D DUCHESS: Gentlemen. Miss Pearl. We are assembled.
11 D BONES: We've been assembled for an hour.
12 D DUCHESS: And now we are in session.
13 D LAVALLE: Is that a legal term?
14 D DUCHESS: It's a theatrical one.
15 D SLIM: The count is simple. Four million, in unmarked bills, locked in the carousel's center column. The man who stored it was a bad carpenter and a worse liar.
16 D PEARL: Which column? There's six.
17 D SLIM: The one that doesn't turn.
18 D LAVALLE: They all turn.
19 D SLIM: Not that one. I've watched it for three weeks.
20 D BONES: Thank God somebody watched something.
21 D PEARL: How do we get in?
22 D DUCHESS: The same way everyone gets in anywhere. We pretend we belong.
23 D LAVALLE: In a closed amusement park.
24 D DUCHESS: In a closed amusement park, at night, with permits.
25 D SLIM: Are the permits real?
26 D DUCHESS: Mr. Pollard, nothing is real. That's the pleasure of the business.
27 D BONES: Who's driving?
28 D DUCHESS: Pearl.
29 D PEARL: I thought I was the lock.
30 D DUCHESS: You are both. We are a small company.
31 D PEARL (grinning): Then I want a bigger cut.
32 D DUCHESS: You'll have a bigger bow.
33 D LAVALLE: Are we agreed on the split?
34 D SLIM: Equal shares. Five ways.
35 D BONES: Six.
36 D DUCHESS: Six?
37 D BONES: There's a sixth share in Mr. Lavalle's ledger. Somebody we've never met.
38 A ¶ Silence.
39 A The carousel lamps flicker.
40 A Slim turns the ledger toward the light.
41 A Pearl stops spinning the pick.
42 D DUCHESS (very softly): Mr. Lavalle. You told me nobody else knew.
43 D LAVALLE (polishing): I told you what you needed to hear.
44 A ¶ He puts on his glasses.

### SCENE s01057 | INT. HOSPITAL BARGE "MERCY ELEANOR" - WARD DECK - NIGHT
Detected names (may be incomplete or contain aliases): ISMAIL KARIMI, NURSE BRONWEN ACKERLEY, ORDERLY TOBIAS FINCH, LINH THAI, ODETTA WRAY
1 A ¶ A converted river freighter.
2 A Twelve cots on a steel deck, curtains on ceiling rails, an IV pole tied to a pillar with bungee cord.
3 A Through round portholes, the lights of a riverbank town drift by.
4 A ¶ DR. ISMAIL KARIMI, 50s, rumpled scrubs, reading glasses hanging from one ear, signs a chart at a card table nailed to the floor.
5 A NURSE BRONWEN ACKERLEY, 40s, tall, silver braid, checks an IV bag with a flashlight.
6 A ORDERLY TOBIAS FINCH, 20s, headphones around his neck, mops in lazy circles.
7 A DR. LINH THAI, 30s, resident, sits cross-legged on a cot, stethoscope draped, eating crackers from a sleeve.
8 A And at the end of the row, MRS. ODETTA WRAY, 70s, the only patient awake, sits up in a cot with a blanket over her knees.
9 D ISMAIL: Bed six, no change.
10 D BRONWEN: Bed six, no change.
11 D ISMAIL: Bed nine?
12 D LINH: Temp is ninety-nine point one.
13 D ISMAIL: Fine. Leave it.
14 D LINH: I was going to.
15 D TOBIAS: Do we have more mop heads?
16 D BRONWEN: Closet, port side.
17 D TOBIAS: Port is?
18 D BRONWEN: Left.
19 D TOBIAS: Thanks.
20 A ¶ The barge shifts.
21 A A low groan runs through the hull.
22 A Nobody reacts.
23 A The IV pole sways against its bungee.
24 D MRS. WRAY: Doctor.
25 D ISMAIL: Yes, Mrs. Wray.
26 D MRS. WRAY: Is it always so slow at night?
27 D ISMAIL: Usually it's slower.
28 D MRS. WRAY: Then I'm in luck.
29 D ISMAIL: Are you in pain?
30 D MRS. WRAY: Only boredom.
31 D LINH (through crackers): I can read you something.
32 D MRS. WRAY: What have you got?
33 D LINH: The back of the cracker box.
34 D MRS. WRAY: Go ahead.
35 D LINH: "Made with whole grains. Best before March."
36 D MRS. WRAY: Beautiful.
37 A ¶ Bronwen stifles a laugh.
38 A Ismail glances over his glasses, almost smiles.
39 D TOBIAS: Dr. Karimi, should I do the starboard side next?
40 D ISMAIL: If you like.
41 D TOBIAS: I do like.
42 D ISMAIL: Then carry on.
43 A ¶ The barge's horn sounds, low and soft, a note across water.
44 D BRONWEN: That's Calder Landing.
45 D ISMAIL: We dock in an hour.
46 D LINH: Do we get shore leave?
47 D ISMAIL: We get paperwork.
48 D LINH: Same thing.
49 D ISMAIL: Dr. Thai.
50 D LINH: Sorry.
51 A ¶ Mrs. Wray settles into her pillow.
52 A Her eyes close.
53 A A pulse monitor beeps in a slow, steady tick.
54 A ¶ Bronwen adjusts the blanket across her knees.
55 A Tucks it neat.
56 D BRONWEN (softly): Sleep well.
57 D MRS. WRAY (eyes closed): Everything's fine?
58 D BRONWEN: Everything's fine.
59 A ¶ She turns off the flashlight.
60 A The ward falls into amber, quiet, familiar dark.

### SCENE s01058 | INT. BARBERSHOP - SAGUARO FLATS - AFTERNOON
Detected names (may be incomplete or contain aliases): COLTER BANKS, MAGDALENA REYES
1 A ¶ One chair, one mirror, one spittoon.
2 A Sun lances through the front window.
3 A A fly drones against the glass.
4 A ¶ COLTER BANKS, 40s, barber, sleeves rolled, strops a razor.
5 A In the chair, MAGDALENA REYES, 30s, trail dust on her coat, a gun belt buckled low, lies back with a hot towel on her face.
6 D COLTER: Haircut or shave?
7 D MAGDALENA (muffled): Shave.
8 D COLTER: You've got no beard, ma'am.
9 D MAGDALENA: Then it'll be quick.
10 A ¶ He chuckles.
11 A Lifts the towel.
12 A Her eyes are closed.
13 A She doesn't smile.
14 D COLTER [CONT'D]: Nice town, isn't it?
15 D MAGDALENA: Quiet.
16 D COLTER: Quiet's good for business.
17 D MAGDALENA: Not for yours.
18 D COLTER: I don't need a crowd. Just a few regulars.
19 D MAGDALENA: Like Sheriff Haynes.
20 A ¶ His strop stops mid-stroke.
21 D COLTER: You know the sheriff?
22 D MAGDALENA: I know his boots. They're on your wall. Left side, behind the broom.
23 A ¶ Colter's eyes flick to the corner.
24 A A pair of polished boots, neat, side by side, dusty at the toes.
25 D COLTER: Left them here weeks ago. Said he'd be back.
26 D MAGDALENA: He won't.
27 D COLTER: Is that a fact.
28 D MAGDALENA: It's a fact, Colter.
29 A ¶ He sets the razor on the counter.
30 A Picks up a comb.
31 A Combs her hair with sudden care.
32 D COLTER: I never told you my name.
33 D MAGDALENA: It's on the window.
34 D COLTER: Right.
35 A ¶ He combs.
36 A She waits.
37 A The fly buzzes.
38 A Out in the street, a dog barks, stops.
39 D COLTER [CONT'D]: Is there something I should know?
40 D MAGDALENA: I'm going to ask you a question, and I want you to answer it honestly.
41 D COLTER: All right.
42 D MAGDALENA: Where's the sheriff?
43 D COLTER: Out of town.
44 D MAGDALENA: Where?
45 D COLTER: Does it matter?
46 D MAGDALENA: It's my brother who sent him.
47 A ¶ Colter's hand stops on her scalp.
48 A The comb freezes.
49 D COLTER: Your brother?
50 D MAGDALENA: Santiago Reyes. Brown horse. Left ear notched.
51 D COLTER: I don't--
52 D MAGDALENA: Sheriff Haynes rode out of here with him and his saddlebags and came back with only the horse.
53 A ¶ Colter steps away from the chair.
54 A She opens her eyes.
55 A Calm.
56 A Cold.
57 D COLTER: Ma'am, I'm only a barber.
58 D MAGDALENA: You're a man with a bad shave and a good alibi.
59 D COLTER: I don't understand.
60 D MAGDALENA: Look in the mirror.
61 A ¶ He does.
62 A Behind him, in the glass, the front door has quietly opened.
63 A A pair of boots on the threshold.
64 A The sheriff's, or the same cut.
65 D MAGDALENA [CONT'D] (without turning): Close the door, Colter. Sit down.
66 A ¶ He sits.
67 A His hands are shaking.
68 A She rises, rolls her sleeves, and takes the razor from the counter.
69 A Tests the edge with her thumb.
70 D MAGDALENA [CONT'D]: Now. Let's have that talk.

### SCENE s01059 | INT. LOGGING CAMP MESS HALL - ARBITRATION HEARING - DAY
Detected names (may be incomplete or contain aliases): PETRA ILLES, REGINALD TOLLIVER, OTTOLINE FRYE, CLERK, ABIODUN SHOLA
1 A ¶ Long pine tables pushed into a U. Axes on hooks.
2 A Snow outside the windows.
3 A A coffee urn steams in the corner.
4 A ¶ PETRA ILLES, 40s, plaid jacket over blazer, stands at the head of the U. REGINALD TOLLIVER, 50s, three-piece suit, sits opposite her with his hands steepled.
5 A OTTOLINE FRYE, 60s, the foreman, sits in the witness chair, a rifle-green parka zipped to her chin.
6 D PETRA: Ms. Frye. Who signed off on the timber survey?
7 D OTTOLINE: I did.
8 D PETRA: Did you walk the ridge?
9 D OTTOLINE: Not myself.
10 D PETRA: Then how?
11 D REGINALD: Objection. Foundation.
12 D PETRA: She's the foreman.
13 D REGINALD: She's not a surveyor.
14 D OTTOLINE: I know a tree when I see one.
15 D PETRA: Did you see this one?
16 D OTTOLINE: I saw the stump.
17 D PETRA: And the stump said?
18 D REGINALD: Objection!
19 A ¶ The door bangs.
20 A A CLERK, 20s, snow on his hat, hurries in with a folder, ducking as though the rafters were low.
21 A ABIODUN SHOLA, per the badge on his coat.
22 A Everyone looks.
23 D ABIODUN: Sorry. Sorry. Urgent filing.
24 D PETRA: Mr. Shola, we're in session.
25 D ABIODUN: It's about the ridge.
26 D REGINALD: Whose side is this?
27 D ABIODUN: Yours, I think. Or hers.
28 A ¶ He slaps the folder on the table between them.
29 A Petra and Reginald reach for it.
30 D PETRA: Give me that.
31 D REGINALD: Give me that.
32 A ¶ They stop.
33 A Both draw back.
34 A Ottoline takes the folder, opens it.
35 A Reads.
36 D OTTOLINE (slowly): That ridge was never ours.
37 A ¶ The mess hall goes quiet.
38 A Even the coffee urn seems to stop bubbling.

### SCENE s01060 | INT. LUNAR AGRICULTURAL DOME - CAFETERIA - DAY CYCLE
Detected names (may be incomplete or contain aliases): HALCYON PRYCE, TEODORO FALCONE, CHIOMA UDOH, NADEEM ROUSSEAU, COMMANDER BENEDIKT STONE
1 A ¶ A circular canteen under a clear shell.
2 A Earth hangs in the sky like a blue marble.
3 A Long tables of recycled plastic, trays of steaming something.
4 A A hum of pumps from beneath the floor.
5 A ¶ DR. HALCYON PRYCE, 50s, lead agronomist, white coat over coveralls, sits at a central table stirring something green with a spork.
6 A Across from her, TEODORO FALCONE, 40s, mechanic, grease under his nails, eats a protein bar with no pleasure.
7 A CHIOMA UDOH, 30s, hydroponics tech, tablet propped against a water pouch, scrolls a spreadsheet.
8 D HALCYON: Do you taste that?
9 D TEODORO: It's lunch.
10 D HALCYON: It's kale. Mostly.
11 D TEODORO: It's mostly lunch.
12 D CHIOMA: Cycle three yield is down four percent.
13 D HALCYON: Down from what?
14 D CHIOMA: From the last harvest.
15 D HALCYON: That's not a number. That's a mood.
16 D CHIOMA: Four percent is a number.
17 D HALCYON: It depends on who's counting.
18 D TEODORO: I'm counting calories. Mine are low.
19 D HALCYON: Teodoro, you've been quiet this week.
20 D TEODORO: I'm always quiet.
21 D HALCYON: Quiet-quiet or worried-quiet?
22 D TEODORO: Pump seven is making a sound.
23 D HALCYON: What kind of sound?
24 D TEODORO: A mean one.
25 D CHIOMA: Mean how?
26 D TEODORO: Like a dog that hasn't decided yet.
27 D HALCYON: Have you filed a ticket?
28 D TEODORO: I filed three. Maintenance said "scheduled."
29 D HALCYON: When?
30 D TEODORO: Spring.
31 D HALCYON: It's October.
32 D TEODORO: I'm aware.
33 A ¶ A figure appears at the cafeteria entrance.
34 A NADEEM ROUSSEAU, 20s, intern, lanky, glasses sliding down his nose, balances a tray with the posture of someone who has never carried a tray.
35 A He scans the room and heads toward them.
36 D NADEEM: Is this seat taken?
37 D HALCYON: Sit.
38 D NADEEM: Thank you, Doctor.
39 D HALCYON: Halcyon. Dr. is for formal complaints.
40 D NADEEM: Halcyon. Okay.
41 A ¶ He sits.
42 A Opens his mouth.
43 A Closes it.
44 A Opens it again.
45 D NADEEM [CONT'D]: Sorry. I'm new. Today's my second day.
46 D TEODORO: You'll get used to the food.
47 D NADEEM: Is it always this beige?
48 D CHIOMA: Only on days that end in Y.
49 D NADEEM: What do you do here?
50 D CHIOMA: I keep the plants alive. Teodoro keeps the plants' water alive. Halcyon keeps all of us alive.
51 D HALCYON: Aspirationally.
52 D NADEEM: That's a lot of alive.
53 D HALCYON: On a rock with no air, it's the only job.
54 D NADEEM: I read about the bio-loop in school. Water, nutrients, light. Every molecule counted.
55 D HALCYON: And?
56 D NADEEM: It's more beautiful in a textbook.
57 D HALCYON: It's less beautiful in a textbook. The textbook doesn't smell.
58 D TEODORO (muttering): Pump seven.
59 D NADEEM: Sorry?
60 D CHIOMA: Don't. He'll tell you for an hour.
61 D TEODORO: It's a good story.
62 D CHIOMA: It's a pump.
63 D TEODORO: It's a pump with a personality.
64 D NADEEM: I like pumps.
65 D TEODORO (looking up): Kid, you're hired.
66 D HALCYON: He's already hired.
67 D TEODORO: Then you're promoted.
68 D NADEEM: To what?
69 D TEODORO: To the person who gets to listen.
70 D CHIOMA: Good luck.
71 A ¶ COMMANDER BENEDIKT STONE, 60s, dome administrator, cane tapping, pauses at the end of their table with a tray of nothing but coffee.
72 D BENEDIKT: Dr. Pryce. Mr. Falcone. Is this the new hire?
73 D NADEEM: Yes, sir.
74 D BENEDIKT: Welcome to the Moon. Try not to break it.
75 A ¶ He moves on.
76 A Nadeem laughs, uncertain.
77 A He picks up his spork and tastes the green stuff.
78 A His face does something complicated.
79 D NADEEM: That's really kale.
80 D HALCYON: Told you.
81 A ¶ They eat.
82 A Pumps hum below.
83 A Overhead, Earth turns slowly, blue and white and very far away.

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

### SCENE s01062 | INT. STRANDED COACH BUS - 3 A.M.
Detected names (may be incomplete or contain aliases): NAOMI PRESCOTT, EMERY LUND
1 A ¶ A long-distance bus at the roadside, hazard lights ticking amber against a field of black.
2 A Rows of reclining seats, empty.
3 A A fine layer of frost on the inner windows.
4 A The driver's seat is vacant, door gaping open to the night.
5 A ¶ NAOMI PRESCOTT, 30s, parka and wool cap, sits in the third row from the back with a paperback she isn't reading.
6 A Across the aisle, EMERY LUND, 20s, headphones, hoodie, bounces one knee.
7 A ¶ Neither has spoken for twenty minutes.
8 D EMERY (to the bus, loud): Hello? Anyone else on here?
9 A ¶ Silence.
10 A Hazards tick.
11 D NAOMI: There's nobody else.
12 D EMERY: Right.
13 D NAOMI: The driver stepped out for the radio.
14 D EMERY: That was an hour ago.
15 D NAOMI: Forty minutes.
16 D EMERY (muttering): Felt like an hour.
17 A ¶ She pulls the headphones down around her neck.
18 A Naomi turns a page.
19 A Doesn't read it.
20 A The bus creaks, settling on its springs.
21 D EMERY [CONT'D]: Did you hear that?
22 D NAOMI: Hear what?
23 D EMERY: Like tapping.
24 D NAOMI: It's the cold.
25 D EMERY: It's not the cold.
26 D NAOMI: It's the cold.
27 A ¶ Tap.
28 A Tap.
29 A Tap-tap.
30 A ¶ Both sit very still.
31 A The sound comes from somewhere in the back of the bus.
32 A Not the engine.
33 A Not the heater.
34 A Something closer, patient.
35 D EMERY: It's in the luggage rack.
36 D NAOMI: Don't.
37 D EMERY: Someone left a bag.
38 D NAOMI: Emery.
39 D EMERY: I'm going to look.
40 A ¶ She stands.
41 A Naomi stands too, in the same moment, then sits back down, and then stands again.
42 A They both end up in the aisle, and the bus sways, and neither wants to take the first step.
43 D EMERY [CONT'D] (to Naomi, whispering): You first.
44 D NAOMI (to the bus): Whoever's there, we know you're in there.
45 D EMERY: Whoever's there, we know you're in there.
46 A ¶ They say it at the same time.
47 A They look at each other.
48 D NAOMI: Stop that.
49 D EMERY: You stop.
50 A ¶ The tapping stops.
51 A Instead, a soft, wet noise, like a hand pulled slowly out of mud.
52 A ¶ The overhead luggage rack shudders.
53 A A zipper rasps.
54 A A black duffel bag unzips by itself, one slow tooth at a time.
55 A ¶ Naomi clutches the seat.
56 A Emery clutches Naomi's arm.
57 A They back up the aisle together, step for step, until they hit the rear emergency door.
58 D NAOMI [CONT'D] (whispering): Open it.
59 D EMERY: It's locked.
60 D NAOMI: Open it!
61 D EMERY: It's a lever! It's on the floor!
62 A ¶ She drops.
63 A Gropes under the seat.
64 A Naomi keeps her eyes on the duffel.
65 A The zipper rasps another inch.
66 D EMERY [CONT'D] (to herself): Come on. Come on.
67 A ¶ Something pale slides out of the bag.
68 A Fingers, knuckled and long.
69 A They curl around the edge of the rack.
70 D NAOMI (very low): Emery. Pull it. Now.
71 A ¶ Emery pulls.
72 A The emergency door swings out with a clatter, and cold air slams into the bus.
73 A The hazards tick.
74 A The fingers withdraw.
75 D EMERY: Go! Go!
76 A ¶ Naomi shoves her out the door, tumbles after.
77 A They land in the gravel on their hands and knees, gasping.
78 A ¶ Behind them, the bus sits glowing amber, silent.
79 A The duffel, lying on the aisle floor, is zipped shut again.
80 D NAOMI (panting): Don't look back.
81 D EMERY: I'm not.
82 D NAOMI: Good.
83 A ¶ They crawl away from the road.
84 A Neither looks.
85 A Both hear it: the soft tap of a hand on the glass.

### SCENE s01063 | INT. MUSEUM OF CLOCKS - GREAT HALL - NIGHT
Detected names (may be incomplete or contain aliases): SERAPHINA VOSS, BARTHOLOMEW QUILL, KENJI AOKI, DESPINA ARVANITIS, LOOKOUT
1 A ¶ A hundred timepieces, each telling a different hour.
2 A Grandfather cases line the walls like sentries.
3 A Pendulums swing out of rhythm, ticks overlapping in a thin, endless rain.
4 A At the center, under a glass dome, a gilded astronomical clock the size of a carriage glitters, its planets frozen mid-orbit.
5 A ¶ Five minutes to midnight.
6 A The building is dark, sleeping.
7 A ¶ In the shadow of a long-case clock, four figures crouch like cats.
8 A ¶ SERAPHINA VOSS, 40s, in black from throat to ankle, headlamp dimmed to a red coin, leads.
9 A At her shoulder, BARTHOLOMEW QUILL, 60s, silk scarf, gloved fingers unscrewing the cover plate of a wall panel.
10 A KENJI AOKI, 20s, in a catering uniform with a pocketed screwdriver, carries a coil of fiber cable.
11 A DESPINA ARVANITIS, 30s, enormous eyes, a stethoscope hanging from her neck, taps a glass case with the delicacy of a safecracker.
12 A ¶ A small radio crackles from Seraphina's belt.
13 D LOOKOUT [V.O.] (whispering): Guard's on the east stairs. Two minutes.
14 D SERAPHINA (low): Understood.
15 D BARTHOLOMEW: Panel's open.
16 D KENJI: Wires are color-coded.
17 D BARTHOLOMEW: Ignore the colors. Follow the dust.
18 D KENJI: Why?
19 D BARTHOLOMEW: The ones that move are the ones they trust.
20 A ¶ Kenji nods.
21 A Pinches a wire.
22 A Clips it.
23 D DESPINA: Seraphina. The dome has a second lock.
24 D SERAPHINA: Meaning?
25 D DESPINA: Meaning it listens.
26 A ¶ She presses the stethoscope to the glass.
27 A Closes her eyes.
28 A Her whole body bends toward the sound.
29 A ¶ Tick, tick, tick, tick.
30 D DESPINA [CONT'D] (whispering): It's counting. Three seconds to a click.
31 D BARTHOLOMEW: Can you match it?
32 D DESPINA: I can try.
33 A ¶ She slides a slim tool beneath the dome's rim.
34 A Waits.
35 A A pendulum on the east wall swings out.
36 A Another answers.
37 A ¶ Tick.
38 A Click.
39 A A pin falls.
40 D LOOKOUT [V.O.]: One minute. He's at the landing.
41 D SERAPHINA: Go.
42 A ¶ Despina lifts the dome.
43 A Slow, trembling.
44 A It rises on invisible springs, a hush of glass.
45 A The planets of the clock gleam, close enough to touch.
46 A ¶ Kenji slides a velvet bag under the gilded sun and eases it free.
47 A The gears whisper once.
48 A Then still.
49 D BARTHOLOMEW (hushed): It's heavier than it looks.
50 D KENJI: They always are.
51 D LOOKOUT [V.O.]: Thirty seconds!
52 D SERAPHINA: Seal it. Back to the wall.
53 A ¶ They snap the dome back down.
54 A The pin settles.
55 A The clock gleams behind its glass, minus one small golden sun.
56 A ¶ Somewhere in the hall, a bell tolls.
57 A Midnight.
58 A Every clock in the museum begins to strike, a hundred chimes, a hundred hours, clamor and swell.
59 A ¶ The four crouch, hands over ears, as the hall rings around them like a cathedral.
60 A The guard's footsteps, if any, are drowned entirely.
61 D KENJI (laughing, shouting): That's the best alarm I ever heard!
62 D SERAPHINA: Quiet!
63 A ¶ The last chime fades.
64 A Silence, then a single tick, then a hundred.
65 D LOOKOUT [V.O.]: He's gone to the west wing. You're clear.
66 A ¶ Bartholomew exhales.
67 A Despina leans on the long-case clock, trembling and grinning.
68 A Kenji laughs without sound.
69 A Seraphina lets go of the radio.
70 D SERAPHINA: Walk. Don't run. Let's go home.

### SCENE s01064 | EXT. THE GLASS BRIDGE OF AETHERMERE - DAWN
Detected names (may be incomplete or contain aliases): QUEEN IDRISSA, SIR BALTHAZAR, FINNEGAN, MORGANA
1 A ¶ A span of living crystal between two floating islands, fog beneath it, bells ringing somewhere unseen.
2 A ¶ QUEEN IDRISSA, tall and crowned in silver thorns, stands at the middle of the bridge.
3 A Behind her, SIR BALTHAZAR, white-bearded, in bronze plate, grips a staff that hums with blue light.
4 A Before her, a ragged young WANDERER named FINNEGAN carries nothing but a cracked lute.
5 D IDRISSA: You trespass, minstrel.
6 D FINNEGAN: I'm only crossing.
7 D BALTHAZAR: Cross to what?
8 D FINNEGAN: To the far island. My brother's there.
9 D IDRISSA: There is no brother.
10 D BALTHAZAR: There is no brother.
11 A ¶ A third figure strides out of the fog: MORGANA, a woman in green, hair full of leaves, a bow slung across her back.
12 A She holds up a hand.
13 D MORGANA: Lower your staff, Balthazar. He speaks true.
14 D BALTHAZAR: How would you know?
15 D MORGANA: Because the brother is me.
16 A ¶ Finnegan drops the lute.
17 A It rings on the crystal.
18 A The bridge begins to hum.

### SCENE s01065 | INT. HOUSING COURT - COURTROOM 3 - MORNING
Detected names (may be incomplete or contain aliases): JUDGE HORTENSE ABBOTT-LUND, LANDLORD DEXTER OLUYEMI, TENANT MARISELA QUINTANILLA, CORNELIUS PRATT
1 A ¶ A cramped courtroom with a leaking ceiling tile and a plastic bucket underneath.
2 A A worn carpet, three rows of benches, a flag on a crooked pole.
3 A ¶ JUDGE HORTENSE ABBOTT-LUND, 60s, reading glasses perched on a long nose, peers over the bench.
4 A LANDLORD DEXTER OLUYEMI, 40s, cufflinks, signet ring, stands at one table.
5 A TENANT MARISELA QUINTANILLA, 30s, in her work uniform from a bakery, flour still on one sleeve, stands at the other.
6 A Beside her, ATTY.
7 A CORNELIUS PRATT, 50s, a threadbare suit, a briefcase with a broken clasp.
8 D ABBOTT-LUND: Mr. Oluyemi, you've served notice?
9 D DEXTER: Yes, Your Honor.
10 D ABBOTT-LUND: Mr. Pratt, you dispute it?
11 D PRATT: We do, Your Honor. My client wasn't informed of the rent increase.
12 D DEXTER: It was posted in the lobby.
13 D MARISELA: There's no lobby. There's a hallway.
14 D DEXTER: Same thing.
15 D MARISELA: There's a hallway with a broken light. I can't read in the dark.
16 D ABBOTT-LUND: Ms. Quintanilla, please address me.
17 D MARISELA: Sorry, Judge.
18 D ABBOTT-LUND: Mr. Pratt, any further objection?
19 D PRATT: Only that Mr. Oluyemi has been collecting rent for a unit that doesn't have a working stove for six months.
20 D DEXTER: I replaced the stove.
21 D MARISELA: With a hot plate.
22 D ABBOTT-LUND: That's enough.
23 A ¶ The bucket under the ceiling tile pings with a single drop.

### SCENE s01066 | EXT. ARCTIC ICE SHELF - LIFE RAFT CAMP - DAY
Detected names (may be incomplete or contain aliases): JOSEPHINE TALLCHIEF, DARIUS OKAFOR, BERNADETTE LACROIX, RESCUE ONE
1 A ¶ A bright white world.
2 A A yellow raft hauled up on a floe, a tarp strung from poles, a single seal-oil stove.
3 A Wind sighs.
4 A ¶ JOSEPHINE TALLCHIEF, 30s, parka hood trimmed with fur, kneels at the stove and stirs a pot.
5 A DARIUS OKAFOR, 40s, frostbitten cheeks, sits against the raft with a rifle.
6 A BERNADETTE LACROIX, 20s, in a red survival suit, stands at the edge of the floe with a radio.
7 D BERNADETTE (into radio): Rescue One, this is the Meridian. Do you copy?
8 A ¶ The radio hisses.
9 D RESCUE ONE [V.O.] (garbled): ...Meridian... position... say again...
10 D BERNADETTE: We're at seventy-eight north.
11 D RESCUE ONE [V.O.]: ...hold... coming...
12 A ¶ She grins.
13 A Turns to the others.
14 D BERNADETTE [CONT'D]: They're coming!
15 D JOSEPHINE: How long?
16 D BERNADETTE: Two hours!
17 D DARIUS (rising): Two hours. We can make two hours.
18 A ¶ The floe groans.
19 A A crack zigzags across the ice between them.
20 A Josephine and Darius lunge for the raft as the floe splits, and Bernadette leaps across the gap, landing hard in Josephine's arms.
21 A All three tumble into the raft as the ice shelf shifts and a second crack opens right where the stove had been.
22 D JOSEPHINE: Cut the line!
23 D DARIUS: Cut the line!
24 A ¶ Bernadette hacks the rope.
25 A The raft slides free.
26 A The three huddle.
27 A The stove sinks into black water.
28 D RESCUE ONE [V.O.] (clear now): Meridian, we have you. Stay put.

### SCENE s01067 | INT. VICTORIAN ICE HOUSE - ESTATE GROUNDS - EVENING (1887)
Detected names (may be incomplete or contain aliases): ABIGAIL FENWICK-HALE, TOBIAS RUSK, STRANGER, RUPERT
1 A ¶ A brick dome half-sunk in the earth.
2 A Blocks of ice stacked in straw, sawdust floor, a sharp cold that smells of wet stone.
3 A A lantern hangs from a hook.
4 A Breath clouds in the light.
5 A ¶ ABIGAIL FENWICK-HALE, 30s, housekeeper, shawl over her shoulders, counts blocks with a slate.
6 A TOBIAS RUSK, 50s, groundskeeper, canvas coat, sits on a crate, whittling.
7 A A STRANGER, 40s, in a good coat and muddy boots, stands near the entrance holding a bowler hat.
8 D ABIGAIL (to both): Forty-two blocks. Enough for the garden party.
9 D TOBIAS: Forty-two's plenty.
10 D ABIGAIL: You'll want to turn the straw before the guests arrive.
11 D TOBIAS: I'll do it, Miss Abigail.
12 A ¶ The Stranger clears his throat.
13 D STRANGER: Forgive me. I'm looking for the master of the house.
14 D TOBIAS: He's up at the manor, sir.
15 D STRANGER: I tried the door. Nobody answered.
16 D ABIGAIL: The door is closed after four.
17 D STRANGER: So I discovered.
18 D ABIGAIL: And you are?
19 D STRANGER: A friend of the family.
20 D TOBIAS (under his breath): Never seen him.
21 D ABIGAIL: Which family?
22 D STRANGER: The Ashworths.
23 A ¶ Tobias stops whittling.
24 A The shavings fall.
25 D ABIGAIL: The Ashworths left in March.
26 D STRANGER: Did they? I hadn't heard. I'm afraid I've been abroad.
27 D ABIGAIL: Where abroad?
28 D STRANGER: Calcutta.
29 D ABIGAIL: That's a long way to come for an empty house.
30 D STRANGER: I came for the cold.
31 D ABIGAIL: Pardon?
32 D STRANGER: The ice house. They kept something here, once. A sealed tin.
33 D TOBIAS: Nothing's here but ice, sir.
34 D STRANGER: Of course. I only wished to be certain.
35 A ¶ He turns his hat in his hands.
36 A Raises his eyes.
37 D STRANGER [CONT'D]: My name is Rupert Ashworth. I was supposed to have inherited.
38 A ¶ Abigail's slate slips from her fingers and clatters on the floor.
39 A Tobias rises, knife in hand.
40 D ABIGAIL: Mr. Rupert died in the Punjab. We had the letter.
41 D RUPERT: Reports of my death were premature.
42 D TOBIAS (to Abigail): Miss, I'd stand behind me.
43 A ¶ She doesn't move.
44 A The lantern flickers.
45 D RUPERT: I only want the tin.
46 D ABIGAIL (to the cold air): God help us.
47 D RUPERT: I'd settle for that, too.
48 A ¶ He smiles.
49 A A thin, apologetic, tired smile.
50 A Behind him, the ice house door creaks in the wind, and all three turn to look at it.

### SCENE s01068 | INT. DANCE MARATHON HALL - NIGHT (1932)
Detected names (may be incomplete or contain aliases): EVELYN PRATT, JACK HOLLISTER
1 A ¶ A cavernous ballroom, plank floor, paper streamers gone limp.
2 A Hour 487.
3 A A banner reads LAST COUPLE STANDING WINS $1,000.
4 A The couples have gone to their cots.
5 A A gramophone scratches out one slow waltz to an empty floor.
6 A ¶ EVELYN PRATT, 20s, in a tattered satin dress, shoes in her hand, sways alone in the middle of the boards.
7 A Eyes closed.
8 D EVELYN (to the empty hall): Anybody got a cigarette?
9 A ¶ No answer.
10 A Gramophone crackle.
11 D EVELYN [CONT'D] (muttering): Four hundred eighty-seven hours. And the only thing that moves is the record.
12 A ¶ A cot creaks in the shadows.
13 A A match flares.
14 A JACK HOLLISTER, 20s, in a wilted white shirt, pushes himself off a bench and shuffles into the light, a cigarette between his lips.
15 D JACK: Here.
16 A ¶ He offers it.
17 A She takes a drag.
18 A Gives it back.
19 D EVELYN: Thanks. You were sleeping.
20 D JACK: I was resting my eyes.
21 D EVELYN: In a dance marathon.
22 D JACK: It's called pacing.
23 A ¶ She laughs.
24 A It wakes him a little.
25 A He sets the cigarette on the edge of the gramophone and holds out one hand.
26 D JACK [CONT'D]: Fifteen minutes left on the clock.
27 D EVELYN: Then dance with me.
28 D JACK: I thought you'd never ask.
29 A ¶ She drops her shoes.
30 A Takes his hand.
31 A They begin to turn, slow, a little off the beat.
32 D EVELYN: If we win, what will you do with a thousand dollars?
33 D JACK: Buy a hat.
34 D EVELYN: That's all?
35 D JACK: A nice hat.
36 D EVELYN: And me?
37 D JACK: You'd get a better hat.
38 A ¶ They both begin to say the same line.
39 D EVELYN: I'd dance another four hundred hours for you.
40 D JACK: I'd dance another four hundred hours for you.
41 A ¶ They stop.
42 A Both startled.
43 A Then, softly, they laugh.
44 D EVELYN [CONT'D]: Don't promise. Just hold on.
45 A ¶ He holds her.
46 A The gramophone skips and keeps going.
