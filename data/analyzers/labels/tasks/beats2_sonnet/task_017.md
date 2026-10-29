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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_sonnet/group_00017.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00886 | INT. CLIFFSIDE BARBERSHOP - DAY
Detected names (may be incomplete or contain aliases): JEDEDIAH CROWE, COLTON MAYHEW, AGNES BELLWETHER
1 A ¶ A single chair bolted to a plank floor, facing a wide window that opens onto a canyon.
2 A The wind whistles through a crack in the frame.
3 A A mirror.
4 A A strop.
5 A A pot of lather.
6 A ¶ JEDEDIAH CROWE, 60s, the barber, stands behind the chair in a clean white apron.
7 A Gentle hands.
8 A Soft voice.
9 A He hums as he whisks the lather.
10 A ¶ COLTON MAYHEW, 30s, lies back in the chair with a towel across his throat.
11 A Dusty hat on his knee.
12 A Revolver on his hip, strap loose.
13 A ¶ AGNES BELLWETHER, 50s, a widow in black, sits on a bench by the door with a sewing basket and does not look at either man.
14 D JEDEDIAH: A little off the sides?
15 D COLTON: Just the beard.
16 D JEDEDIAH: Quiet morning.
17 D COLTON: Suits me.
18 D JEDEDIAH: Rode far?
19 D COLTON: Far enough.
20 A ¶ Jedediah strops the razor.
21 A The leather slaps.
22 A Agnes pricks her finger with the needle and doesn't flinch.
23 D JEDEDIAH: Miss Agnes, you want coffee?
24 D AGNES: No, thank you, Jed.
25 D JEDEDIAH: Mr. Mayhew?
26 D COLTON: Not before I'm shaved.
27 A ¶ Jedediah smiles, spreads the lather, and begins to draw the razor along Colton's jaw.
28 A Slow.
29 A Deliberate.
30 A The canyon wind rises.
31 D COLTON [CONT'D]: You know my name.
32 D JEDEDIAH: Everybody does, since Tuesday.
33 A ¶ Colton's eyes open.
34 D COLTON (speaking at once; speaking at once): JEDEDIAH What did you hear? Not much. Just that you killed my son.
35 A ¶ The razor rests at Colton's throat.
36 A Agnes sets down her sewing.
37 D AGNES: Jed.
38 D JEDEDIAH: It's all right, Agnes.
39 D COLTON: I never--
40 D JEDEDIAH: You never were sorry. I know. I read the report.
41 A ¶ A very long moment.
42 A The wind drops.
43 A The only sound is Colton's heartbeat, loud in his throat.
44 D JEDEDIAH [CONT'D]: But I'm a patient man, Mr. Mayhew. And Miss Agnes has a pie in the oven.
45 A ¶ He lifts the razor away.
46 A Wipes it on the towel.
47 A Folds it shut.
48 D JEDEDIAH [CONT'D]: The sheriff's on his way. He'll be here before the lather dries.
49 A ¶ Colton lies perfectly still, as if one breath might cost him everything.

### SCENE s02483 | INT. GRANDMOTHER'S SEWING ROOM - AFTERNOON
Detected names (may be incomplete or contain aliases): ROSALBA GRIECO, CARMELINA GRIECO, ISOTTA
1 A ¶ A narrow room at the back of a Calabrian apartment, sun slanting through yellowed lace.
2 A Bolts of fabric lean in corners like tired dancers.
3 A A black Singer sits under a crocheted cloth, a pincushion shaped like a tomato beside it.
4 A ¶ ROSALBA GRIECO, 80, tiny, black dress, hair in a white bun, kneels on a cushion pinning a hem.
5 A CARMELINA GRIECO, 50s, her daughter, stands on the fitting stool in a half-finished wedding dress, arms out like a scarecrow.
6 A ISOTTA, 22, the granddaughter, sits cross-legged on the bed, picking at the chenille.
7 D ROSALBA: You've lost weight.
8 D CARMELINA: I haven't.
9 D ROSALBA: The hips are loose.
10 D CARMELINA: It's the way you cut it.
11 D ROSALBA: I cut it for the bride. Not for you. For Isotta.
12 D ISOTTA: It's not my dress, Nonna.
13 D ROSALBA: Of course it is. You're the one marrying.
14 D ISOTTA: I'm not marrying anyone.
15 D CARMELINA: Isotta.
16 D ISOTTA: I told Lorenzo in March. I told you both in April. You pretended you'd misheard.
17 D ROSALBA (through pins): I heard.
18 D CARMELINA: Mamma, you did not.
19 D ROSALBA: I heard. I said to myself: she'll change her mind by June.
20 D ISOTTA: It's August.
21 D ROSALBA: So I made the dress in August.
22 D CARMELINA: You made it for me to wear!
23 D ROSALBA: For you to stand in. So I could see how it hangs.
24 D ISOTTA: That is the saddest thing I have ever heard.
25 D CARMELINA: It's not sad, it's how she is. She sews against reality.
26 D ROSALBA: Where do you want me to put the lace?
27 A ¶ Carmelina steps off the stool.
28 A The skirt catches on a pin.
29 A A thin tearing sound.
30 A ¶ Rosalba holds up the torn hem to the window light.
31 A She does not look at either of them.

### SCENE s02313 | EXT. FRONT-LINE TRENCH, FLANDERS - DAWN (1916)
Detected names (may be incomplete or contain aliases): CORPORAL ALISTAIR BRODIE, PRIVATE EMMANUEL DUBOIS
1 A ¶ Mud to the knee.
2 A A duckboard path vanishes into fog.
3 A Somewhere, rifle fire pops like distant twigs.
4 A ¶ CORPORAL ALISTAIR BRODIE, thirty, sits on an ammunition crate with a chessboard balanced on a sandbag.
5 A Across from him PRIVATE EMMANUEL DUBOIS, twenty, a French-Canadian volunteer, rubs a pawn between finger and thumb.
6 D BRODIE: Your move.
7 D DUBOIS: I know.
8 A ¶ Neither moves.
9 A A shell whistles overhead and bursts a hundred yards away.
10 A They flinch together, hunch, and glance up, then back at the board.
11 A Dust sifts from the revetment onto the pieces.
12 A Brodie blows it off.
13 A Dubois nudges his bishop forward with a trembling hand.
14 D BRODIE: Good.
15 D DUBOIS: Is it?
16 A ¶ Brodie takes the bishop with a knight.
17 A Dubois stares at the empty square.
18 A Neither speaks.
19 A Then Dubois reaches into his tunic, draws out a creased photograph, and sets it on the board beside the captured piece.
20 D BRODIE: Who's that?
21 D DUBOIS: My sister.
22 A ¶ Brodie looks at it for a long moment.
23 A He lifts his own king, tips it on its side, and lays it next to the photograph.

### SCENE s00851 | INT. STALLED ELEVATOR, GRANDVIEW HOTEL - DAY
Detected names (may be incomplete or contain aliases): BART, KWIATKOWSKI, YOLANDA PRICE, CHEN WEI, FIONNUALA DOYLE
1 A ¶ A mirrored box, brass rails.
2 A A tiered wedding cake in a white box sits on a luggage cart in the center.
3 A The floor indicator is stuck between 14 and 15.
4 A ¶ BARTHOLOMEW "BART" KWIATKOWSKI, fifties, pastry chef in whites, grips the cart with both hands.
5 A YOLANDA PRICE, thirties, the wedding planner, in a headset and heels, stabs the alarm button.
6 A CHEN WEI, twenties, the bellhop, leans against the rail eating a granola bar.
7 A FIONNUALA DOYLE, sixties, the bride's grandmother, sits on a folding stool she has brought from somewhere, knitting.
8 D YOLANDA: Okay. Everyone remain calm.
9 D BART: I am calm. This cake is not calm.
10 D CHEN: It's a cake.
11 D BART: It is forty-eight hours of fondant.
12 A ¶ The elevator shudders.
13 A The cake tiers slide an inch.
14 A Bart and Yolanda lunge at the same time and bump foreheads.
15 D YOLANDA: Ow!
16 D BART: Ow!
17 A ¶ Fionnuala keeps knitting.
18 D FIONNUALA: Always the same with the young. You rush and then you bleed.
19 D YOLANDA (muttering): The ceremony starts in thirty minutes.
20 D CHEN: I can call someone.
21 D YOLANDA: Please do.
22 A ¶ He pulls a walkie-talkie from his belt, presses the key, and hears only static.
23 A He taps it against his palm.
24 A Bart watches the cake like a man watching a cliff.
25 D BART (to himself): Don't tilt. Don't tilt.
26 D FIONNUALA: Chen, dear, is there a phone number on the wall?
27 D CHEN: Yes, ma'am.
28 D FIONNUALA: Then why on earth aren't we using it?
29 A ¶ Everyone turns to the wall.
30 A A small door in the panel reads EMERGENCY PHONE.
31 A Yolanda yanks it open.
32 A Inside is a handset and a sticker: OUT OF ORDER.
33 D YOLANDA: Of course.
34 A ¶ The elevator drops two inches.
35 A The cake slides.
36 A Bart and Chen and Yolanda all dive for it, and the three of them end up in a pile on top of the cart, holding the box together like a family hugging.
37 A ¶ Fionnuala turns a row on her needles and does not look up.
38 D FIONNUALA: Well. That's one way to do it.

### SCENE s01464 | INT. SUNKEN CATHEDRAL OF THE DRAGON-KINGS - NIGHT
Detected names (may be incomplete or contain aliases): TAMSIN BRIGHTWELL, UDO HARTSHORN, WARDEN
1 A ¶ A vaulted nave drowned to the knees in black water.
2 A Columns of fossil bone rise into shadow.
3 A Crystal lanterns drift in the air, spilling cold green light on scales as large as shields, set into the floor like tiles of an immense mosaic.
4 A ¶ TAMSIN BRIGHTWELL (30s, mercenary, chainmail and a ragged scarlet cloak, a notched longsword on her back) wades along the central aisle, torch sputtering.
5 A Behind her, UDO HARTSHORN (60s, a priest's grey robe hitched to his thighs, a holy book wrapped in oilcloth) clutches the hem of his habit above the waterline.
6 D TAMSIN: Stay close.
7 D UDO: I could hardly stray.
8 D TAMSIN: The last priest strayed.
9 D UDO: And?
10 D TAMSIN: We didn't find him.
11 A ¶ Udo stops.
12 A Looks down.
13 A A scale shifts under the water, patient as a sleeping thing turning over.
14 D UDO (to himself): Lord, steady these old knees.
15 A ¶ Tamsin lifts the torch.
16 A At the aisle's end stands an altar, black basalt, its top a shallow bowl.
17 A In the bowl floats a single burning flame, small as a candle, steady in the still, cold air.
18 D TAMSIN: That's the Ember.
19 D UDO: It's smaller than the legends.
20 D TAMSIN: Everything is.
21 A ¶ She advances.
22 A Udo follows.
23 A The water ripples.
24 A Not from them.
25 D WARDEN [V.O.] (a voice like gravel in a bell): Who comes to the Hall of Ash?
26 A ¶ Tamsin stops.
27 A Draws her sword in one smooth rasp.
28 A Udo clutches his book.
29 D TAMSIN (to the nave): We seek the Ember.
30 D WARDEN [V.O.]: Many have sought it.
31 D UDO (low, to Tamsin): Do not provoke it.
32 D TAMSIN (low): I'm not provoking.
33 D WARDEN [V.O.]: You carry iron. You carry prayer. Which will you offer?
34 D TAMSIN: Neither.
35 D UDO: Tamsin.
36 D TAMSIN: I offer a trade.
37 A ¶ Silence.
38 A The lanterns stop drifting.
39 D WARDEN [V.O.]: Speak.
40 D TAMSIN: My name for your fire. A true one. The first thing I was ever called.
41 A ¶ Udo gasps.
42 A She doesn't look at him.
43 D UDO: Child, no. A name is a life.
44 D TAMSIN: It's a word.
45 D WARDEN [V.O.]: Words are life.
46 A ¶ The water stills completely.
47 A A great shape moves under the floor of scales, a ripple traveling the length of the nave, until the whole cathedral seems to breathe in.
48 D WARDEN [V.O., CONT'D]: Accepted.
49 A ¶ Tamsin lets her sword drop to her side.
50 A Opens her mouth.
51 A Whispers a single syllable that neither the audience nor Udo can hear.
52 A ¶ The flame leaps from the bowl, a tongue of white fire twisting through the air, and settles in her open palm.
53 A It does not burn.
54 A It purrs.
55 A ¶ Udo falls to his knees in the water, tears in his eyes.
56 A Tamsin stares at the flame, then at him.
57 D TAMSIN [CONT'D]: Say it back to me.
58 D UDO: I cannot.
59 D TAMSIN: Say what you heard.
60 D UDO: I heard nothing.
61 D TAMSIN (softly): Good.
62 A ¶ The Warden's laughter rolls across the vault, and the water rises.
63 D UDO: Run!
64 A ¶ They run.
65 A Behind them the scales rise from the floor one by one, glittering, and the nave ceiling cracks.
66 D TAMSIN (shouting over the thunder, to no one): I'll miss it!
67 D WARDEN [V.O.]: You will not even remember.
68 A ¶ The doors slam shut behind them.
69 A Silence.
70 A The torch hisses out, and in the new dark, a very faint voice, half sob, half laugh, whispers from the stairwell, "What was my name?"

### SCENE s01523 | INT. DRAINED PUBLIC SWIMMING POOL - NIGHT
Detected names (may be incomplete or contain aliases): CAZ, REYES-MORROW, LUDDY, KOVAC, TOMAS
1 A ¶ Empty deep end.
2 A Cracked blue tiles.
3 A A single work light on a stand.
4 A Rain taps the skylights.
5 A ¶ CASPIAN "CAZ" REYES-MORROW, 40s, rumpled suit, sits on the pool ladder, briefcase on his lap.
6 A Waiting.
7 A ¶ Footsteps echo above.
8 A A woman descends the shallow-end stairs, hands visible.
9 A ¶ LUDMILA "LUDDY" KOVAC, 30s, leather jacket, calm to the point of insult.
10 D LUDDY: Caz.
11 D CAZ: Luddy. You're early.
12 D LUDDY: You're sweating.
13 D CAZ: It's a pool. Humidity.
14 D LUDDY: It's empty.
15 A ¶ She tilts her head at the briefcase.
16 A He tightens his grip.
17 D LUDDY [CONT'D]: Where's Tomas?
18 D CAZ: Parking.
19 D LUDDY: Tomas doesn't drive.
20 A ¶ A beat.
21 A The rain gets louder.
22 A Somewhere a pipe knocks.
23 D CAZ: He learned.
24 D LUDDY: Caz.
25 D CAZ: Luddy, don't.
26 A ¶ She walks the slope of the pool floor, slow, boots squeaking on old algae.
27 A Caz stands, the ladder clanking, and sets the briefcase between them on the tile.
28 A He steps back.
29 A She does not step forward.
30 A Above, a shadow slides across the skylight and is gone, and Caz looks up while Luddy looks at him.
31 D LUDDY [CONT'D]: That's not Tomas.
32 D CAZ: It's the wind.
33 D LUDDY: It's Dutch Maren. I can smell the cigarettes.
34 D CAZ: Luddy, I had no choice.
35 D LUDDY: Everyone says that at the end.
36 A ¶ A metal door bangs open above.
37 A Heavy steps.
38 A A voice, thick and amused, rolls down the tiles.
39 D TOMAS [O.S.]: Caz, my friend. You were supposed to be quiet.
40 A ¶ Caz drops.
41 A Luddy draws a pistol from her jacket, spins, fires at the light stand.
42 A Glass bursts.
43 A Darkness, except the faint blue of the skylights.
44 A Caz crawls behind the ladder, hugging the briefcase, while Luddy slides down the wall of the deep end and Tomas' boots clatter on the steps, unhurried, a man descending to a party.
45 D TOMAS [O.S., CONT'D]: Luddy. You always did love a dramatic entrance.
46 D LUDDY (whisper): Caz, open the case.
47 D CAZ: There's nothing in it.
48 D LUDDY: What?
49 D CAZ: There was never anything in it!
50 A ¶ Tomas laughs in the dark.
51 A A lighter flicks.
52 A A small flame shows his face at the lip of the pool, smiling.

### SCENE s01754 | INT. FIRE LOOKOUT TOWER - MOUNTAIN SUMMIT - DAY
Detected names (may be incomplete or contain aliases): NOELLE BEAUCHAMP, BARRETT
1 A ¶ A glass-walled cabin on stilts above a sea of pines.
2 A A cot, a stove, a Osborne fire finder bolted to a table, a radio on a shelf.
3 A The wind sings in the guy-wires.
4 A ¶ NOELLE BEAUCHAMP (17, first summer job, sunburned nose, binoculars on a cord) sits on the cot, eating peanut butter from the jar.
5 A She has not changed her shirt in four days.
6 A The radio on the shelf crackles.
7 D BARRETT [V.O.] (over radio): Tower Nine, this is Dispatch. Noelle, you there?
8 A ¶ She leaps, drops the jar, grabs the mic.
9 D NOELLE: I'm here. I'm here, Barrett.
10 D BARRETT [V.O.] (over radio): You sound out of breath.
11 D NOELLE: I was eating.
12 D BARRETT [V.O.] (over radio): Good. Eat. How's the view?
13 D NOELLE: It's green.
14 D BARRETT [V.O.] (over radio): Anything else?
15 D NOELLE: No. Just green. And sky.
16 D BARRETT [V.O.] (over radio): That's the best kind of day, kid.
17 A ¶ She picks up the jar, wipes a smear of peanut butter from her wrist, sits.
18 A The cabin creaks in the wind.
19 D NOELLE: Barrett?
20 D BARRETT [V.O.] (over radio): Yeah?
21 D NOELLE: Can I ask you something?
22 D BARRETT [V.O.] (over radio): I'm not going anywhere. Go ahead.
23 D NOELLE: Were you ever scared up here?
24 D BARRETT [V.O.] (over radio): Every summer for twenty-two years.
25 D NOELLE: Of what?
26 D BARRETT [V.O.] (over radio): The first time I saw smoke and wasn't sure.
27 A ¶ She nods at the radio, though he can't see.
28 A She lifts the binoculars and sweeps the horizon.
29 A Her hand stops.
30 D NOELLE: There's a gray thing.
31 D BARRETT [V.O.] (over radio): Gray thing?
32 D NOELLE: West ridge. A column. Maybe a mile.
33 D BARRETT [V.O.] (over radio): Take a bearing. Use the finder.
34 A ¶ She moves to the fire finder, bends, sights down the brass ring.
35 A She reads the number with her lips.
36 D NOELLE: Two ninety-one. Two ninety-one degrees.
37 D BARRETT [V.O.] (over radio): Distance?
38 D NOELLE: Eleven hundred yards, maybe. I can't tell.
39 D BARRETT [V.O.] (over radio): You're doing great. Say it again, slow.
40 D NOELLE (dual with Barrett): Two ninety-one degrees, west ridge, column of gray smoke, eleven hundred--
41 D BARRETT [V.O.] (over radio, dual): ^Two ninety-one, west ridge, gray smoke, copy, I've got a crew rolling.
42 A ¶ They stop at the same moment.
43 A Static hums.
44 D BARRETT [V.O.] (over radio): Was that your first call?
45 D NOELLE: Yes.
46 D BARRETT [V.O.] (over radio): It was a good one.
47 D NOELLE: Is it real?
48 D BARRETT [V.O.] (over radio): We'll know in twenty minutes.
49 D NOELLE: Twenty minutes is forever.
50 D BARRETT [V.O.] (over radio): That's the job. Twenty minutes of forever, and then you eat.
51 A ¶ She laughs.
52 A She laughs again.
53 A She sets the binoculars on the table, sits on the cot, and pulls the peanut butter back onto her lap.
54 D NOELLE: Barrett?
55 D BARRETT [V.O.] (over radio): Yeah, kid.
56 D NOELLE: Stay on the line.
57 D BARRETT [V.O.] (over radio): Wasn't planning on going anywhere.
58 A ¶ She eats a spoonful.
59 A The radio breathes.
60 A Outside, a hawk drifts past the glass, and the smoke on the ridge thins and tears apart in the wind.
61 D NOELLE: It's going out.
62 D BARRETT [V.O.] (over radio): Is it?
63 D NOELLE: It was a cloud.
64 D BARRETT [V.O.] (over radio): Everybody's first call is a cloud.
65 D NOELLE: You could have told me.
66 D BARRETT [V.O.] (over radio): And ruin it?
67 A ¶ She puts her face in her hands.
68 A She is shaking, and she is laughing, and the tears are real.
69 D NOELLE: I'm so embarrassed.
70 D BARRETT [V.O.] (over radio): Don't be. You were right to call it. A cloud's a cloud until you prove it.
71 D NOELLE: I called it fast.
72 D BARRETT [V.O.] (over radio): That's what you're for.
73 A ¶ She wipes her eyes with the back of her wrist.
74 A She presses the mic.
75 D NOELLE: Tower Nine to Dispatch. False alarm. Stand down.
76 D BARRETT [V.O.] (over radio): Copy, Tower Nine. Good work, Noelle.
77 A ¶ She hangs the mic on its hook.
78 A The wind sings in the guy-wires.
79 A She picks up the jar again, and this time she offers a spoonful to the empty room.

### SCENE s02074 | INT. ROLLER RINK - AFTER HOURS - NIGHT
Detected names (may be incomplete or contain aliases): NNEKA OBI, RAFAEL OBI-MENDES, SOLEDAD, JUNIPER, BASIL
1 A ¶ A family reunion banner sags over the snack bar.
2 A Folding tables, foil trays, a disco ball turning slowly without its light.
3 A The floor shines.
4 A ¶ NNEKA OBI, 70s, sits on a bench in a lavender tracksuit, skates unlaced, a paper plate balanced on her knee.
5 A Across the floor, her son RAFAEL OBI-MENDES, 40s, bends over a speaker cable with a phone flashlight in his teeth.
6 A His wife SOLEDAD, 40s, hovers behind him with a cake knife she has forgotten she is holding.
7 A ¶ The grandchildren have gone to ground.
8 A JUNIPER, 9, is under a table in full skates.
9 A BASIL, 6, sits cross-legged on the rink's center circle, holding one wheel he has pulled off a skate.
10 D SOLEDAD: Rafa. He's not going to come out because you fixed the music.
11 D RAFAEL (around the flashlight): Then he stays there.
12 A ¶ He tugs the cable.
13 A The speaker coughs, then plays three notes of a slow song.
14 A She puts down the knife.
15 A He drops the flashlight into his palm.
16 A ¶ Nneka sets the plate aside and leans forward.
17 A She says nothing.
18 A She taps the bench beside her twice with two fingers.
19 A ¶ Juniper crawls out first.
20 A She skates a wobbling line over to the bench, arms wide, and drops beside her grandmother without a word.
21 A Basil does not move.
22 A He turns the wheel over in his hands and spins it, listening to it tick.
23 D JUNIPER: He didn't mean it.
24 D SOLEDAD: Who didn't?
25 D JUNIPER: Dad. About selling the house.
26 A ¶ Rafael looks at the ceiling.
27 A He rubs his eyes with the heel of his hand, the way he did at nine, and lowers it.
28 A Soledad moves to him and touches his elbow, and he lets her.
29 A Nneka stays where she is.
30 D NNEKA: Basil. Come here and show me what you broke.
31 D BASIL: I didn't break it. It came off.
32 D NNEKA: Then show me what came off.
33 A ¶ He gets up slowly and shuffles over in his socks, holding out the wheel.
34 A She takes it.
35 A She turns it.
36 A She hands it back and presses it into his small fist, closing his fingers over it.
37 D NNEKA [CONT'D]: Keep that. It's yours now.
38 A ¶ Rafael crosses the floor, his steps loud on the maple.
39 A He stops in front of his mother.
40 A Soledad follows a pace behind, and the slow song drifts around the four of them.
41 D RAFAEL: Mama. We can talk about it tomorrow.
42 D NNEKA: Tomorrow I'll be eating your cake and not listening.
43 A ¶ He laughs, once, surprised, and sits.
44 A She hands him her plate.

### SCENE s01906_0 | EXT. HIGH DESERT ROADHOUSE, NEW MEXICO TERRITORY - DUSK (1880)
Detected names (may be incomplete or contain aliases): 
1 A ¶ A shuttered adobe at the end of a long road.
2 A A tied post with no horse.
3 A Tumbleweeds crossing and recrossing a yard of cracked clay.
4 A The wind that comes before weather.
5 A ¶ Nothing moves.
6 A A shutter taps.
7 A A tin sign squeals on one hinge.

### SCENE s01119_0 | INT. CORSET MAKER'S SHOP - BACK ROOM - NIGHT
Detected names (may be incomplete or contain aliases): MADAME CLEMENTINE ROUSSEAU-ADEYEMI
1 A ¶ 1893.
2 A A single gas lamp.
3 A Bolts of silk.
4 A Whalebone stays arranged by length.
5 A A mannequin in half-finished brocade.
6 A ¶ MADAME CLEMENTINE ROUSSEAU-ADEYEMI, 50s, pins fabric to the mannequin by lamplight.
7 A The shop bell rings in the front.
8 A She sighs, sets down her pins, and goes through the curtain.

### SCENE s02059 | INT. HOUSEBOAT SALON - CANAL AMSTERDAM - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR LEOPOLD VAN DER MEULEN-OSEI, MADAME CATHERINE ABERNATHY-DUPRE, TOBY, NGUYEN-HARTMANN, CLEMENTINE ODUYA-BRANDT, BRUNO ADELEKE-FISCHER, SISTER IMOGEN FAIRBANKS-TEMBO
1 A ¶ A narrow wooden cabin crammed with antique clocks.
2 A A potbellied stove.
3 A A low table with a half-eaten cheese board.
4 A Rain drums on the roof.
5 A Candles.
6 A Six people, one body in the corner under a tablecloth.
7 A ¶ INSPECTOR LEOPOLD VAN DER MEULEN-OSEI (50s, pipe, a fold of paper in his pocket) paces the length of the room.
8 A At the stove, MADAME CATHERINE ABERNATHY-DUPRE (60s, rings, silk robe) warms her hands.
9 A On the sofa, TOBIAS "TOBY" NGUYEN-HARTMANN (30s, in his socks, a glass of whiskey).
10 A Beside him, CLEMENTINE ODUYA-BRANDT (20s, long braids, a shoebox on her knees).
11 A In the armchair, BRUNO ADELEKE-FISCHER (50s, a sleeping cap pushed back).
12 A At the window, SISTER IMOGEN FAIRBANKS-TEMBO (40s, habit, rosary).
13 D LEOPOLD: Ladies and gentlemen, I would like silence.
14 D TOBY: You've had silence for an hour.
15 D BRUNO: You've had it and you've done nothing with it.
16 D LEOPOLD: I have been thinking.
17 D CATHERINE: We could hear you thinking. You hum.
18 D LEOPOLD (to the room): Everyone, please, remain where you are.
19 D CLEMENTINE: Why would anyone move?
20 D IMOGEN: There is a body, child.
21 D CLEMENTINE: I know there's a body, Sister.
22 D TOBY: Can we talk about the body?
23 D BRUNO: No.
24 D CATHERINE: Yes.
25 D LEOPOLD: Madame Abernathy-Dupre, you found him.
26 D CATHERINE: I did.
27 D LEOPOLD: And you screamed.
28 D CATHERINE: Of course I screamed.
29 D LEOPOLD: Mr. Ngu-- Mr. Nguyen-Hartmann, you ran in first.
30 D TOBY: I was in the kitchen.
31 D BRUNO: You were in the hallway.
32 D TOBY: I was walking through the hallway to the kitchen.
33 D CLEMENTINE: He had his shoes on.
34 D TOBY: So?
35 D CLEMENTINE: Now he's in his socks.
36 A ¶ Silence.
37 A The stove ticks.
38 A A clock chimes, then another, a few seconds out of step.
39 D LEOPOLD: Mr. Nguyen-Hartmann, where are your shoes?
40 D TOBY (low): By the door.
41 D LEOPOLD: Then why did you take them off?
42 D TOBY: Because they were wet.
43 D IMOGEN: Wet from what?
44 D TOBY: The deck. Rain.
45 D CATHERINE (to herself): The deck. The deck. Of course.
46 D LEOPOLD: Sister Imogen, you were at the window.
47 D IMOGEN: I was praying.
48 D LEOPOLD: For how long?
49 D IMOGEN: Until I heard the scream.
50 D LEOPOLD: And what did you see?
51 D IMOGEN: The canal.
52 D BRUNO: There's nothing to see on the canal at night.
53 D IMOGEN: There was a boat.
54 D LEOPOLD: What boat?
55 D IMOGEN: A small one. With one oar.
56 A ¶ The clocks chime again, all together, a ragged, solemn chord.
57 A Clementine opens her shoebox, lifts out a single wet shoe.
58 A Everyone stares at it.
59 D CLEMENTINE: It was on the deck. I found it.
60 D TOBY: That's not mine.
61 D CLEMENTINE: It's a man's. Size eleven.
62 D BRUNO (sitting up): That's mine.
63 D LEOPOLD: Mr. Adeleke-Fischer.
64 D BRUNO: It's mine. I lost it last week.
65 D LEOPOLD: You said you were asleep.
66 D BRUNO: I was asleep.
67 D LEOPOLD: In one shoe.
68 D BRUNO: It's a very old habit.
69 A ¶ Nobody laughs.
70 A The rain slows.
71 D LEOPOLD: Everyone, please, stay calm.
72 D CATHERINE (quietly): I am very calm.
73 A ¶ She picks up the poker from the stove and holds it loosely, like a conductor's baton.
74 D LEOPOLD: Madame, put that down.
75 D CATHERINE: Of course.
76 A ¶ She doesn't.

### SCENE s00097 | INT. RETROFITTED SCHOOL BUS BRIDAL SHOP - DAY
Detected names (may be incomplete or contain aliases): PHILOMENA TRASK, GWENDOLYN OSEI-MARTINSEN, LUCIEN FAURE, IMANI REYNOLDS, BARTHOLOMEW FINCH, AUNT CORDELIA
1 A ¶ A yellow school bus gutted and rebuilt as a boutique: tulle hung from the luggage racks, chandeliers swaying from the ceiling, a three-way mirror bolted where the driver's seat used to be.
2 A Sunlight falls through the stop-sign window in a red octagon on the floor.
3 A ¶ PHILOMENA TRASK (30s, bride, hair half-pinned, bare feet) stands on a milk crate in a billowing gown.
4 A GWENDOLYN OSEI-MARTINSEN (60s, shop owner, pins in her mouth, measuring tape like a stole) kneels at the hem.
5 A LUCIEN FAURE (30s, best man, tuxedo jacket over jeans) lounges on a bench seat eating a muffin.
6 A IMANI REYNOLDS (20s, maid of honor, phone in hand) paces the aisle.
7 A BARTHOLOMEW FINCH (70s, bus driver, still in uniform, newspaper) sits at the wheel, pretending to read.
8 D GWENDOLYN (around the pins): Arms up.
9 D PHILOMENA: They are up.
10 D GWENDOLYN: Up like you mean it.
11 A ¶ Philomena raises her arms.
12 A The dress gapes.
13 A Imani gasps.
14 D IMANI: It's too big!
15 D LUCIEN (mouth full): It's perfect.
16 A ¶ Imani and Philomena speak together.
17 D IMANI: It's not perfect!
18 D PHILOMENA: ^I love it!
19 A ¶ They stop.
20 A Look at each other.
21 A Imani's phone rings.
22 A She answers, thumb flying.
23 D AUNT CORDELIA [V.O.] (over speaker, crackling): Is she in the dress? I want a photo. Don't let her cry. She'll cry.
24 D PHILOMENA: I'm not crying.
25 D AUNT CORDELIA [V.O.]: Is she crying?
26 D IMANI: A little.
27 D PHILOMENA: I'm not!
28 A ¶ She is.
29 A Gwendolyn stands, spits the pins into her palm, and wipes the bride's cheek with the measuring tape.
30 D GWENDOLYN: Hush, child.
31 A ¶ Bartholomew lowers the newspaper.
32 D BARTHOLOMEW: Are we leaving, or what?
33 D GWENDOLYN (to the room): We are fitting a bride!
34 D BARTHOLOMEW (to his paper): Fitting a bride in a bus. My mother would never.
35 A ¶ Lucien licks muffin from his thumb.
36 D LUCIEN: Phil, honestly. You look like a lighthouse.
37 D PHILOMENA: That's not a compliment.
38 D LUCIEN: It is where I'm from.
39 A ¶ Everything seems fine.
40 A The chandeliers tinkle.
41 A The sun burns the floor.
42 A Philomena steps off the crate and walks the aisle, the gown dragging behind her like a wake.
43 A ¶ Then the bus lurches.
44 A The engine coughs and catches.
45 A Bartholomew is leaning on the wheel, and one foot is flat on the accelerator.
46 D BARTHOLOMEW (with great calm): Hold on.
47 A ¶ Everyone stumbles.
48 A The bus rolls forward.
49 A Gwendolyn grabs a rack.
50 A Imani drops the phone.
51 A Lucien's muffin lands in Philomena's veil.
52 A The bus rolls through the garage doors and into the street, a wedding on wheels, tulle streaming out the windows like a flag.
53 D AUNT CORDELIA [V.O.] (from the phone, on the floor): Hello? Is the bus moving?

### SCENE s01946 | EXT. SWAMP FERRY - NIGHT
Detected names (may be incomplete or contain aliases): MORVAN, HESPER, BRIAR, SABLE, THE DROWNED KING
1 A ¶ Black water.
2 A Dead trees.
3 A A flat barge poled through reeds.
4 A One lantern.
5 A ¶ MORVAN, 70s, ferryman, bent, poles in silence.
6 A HESPER, 20s, a cloaked wanderer, sits cross-legged at the prow.
7 A BRIAR, 12, wild-haired, trails a hand in the water.
8 A SABLE, 30s, a hooded archer, keeps watch at the stern.
9 D BRIAR: It's cold.
10 D MORVAN: Pull your hand in.
11 D BRIAR: It's not that cold.
12 D MORVAN: Pull it in.
13 A ¶ Briar sulks.
14 A Sable says nothing.
15 A Hesper does not look up.
16 A ¶ A bubble rises beside the barge.
17 A Then another.
18 D THE DROWNED KING [O.S.] (from beneath the water, hollow): Ferryman. You've brought me guests.
19 A ¶ Morvan stops poling.
20 A His knuckles whiten.
21 D MORVAN: No guests, Majesty. Just cargo.
22 D THE DROWNED KING [O.S.]: Cargo has hands. I count eight.
23 A ¶ Briar yanks her arm out.
24 A Water streams from it, black and thick.
25 A Sable draws an arrow.
26 A Hesper lifts her gaze.
27 D HESPER: Poles, Morvan. Faster.
28 D SABLE: Don't.
29 D THE DROWNED KING [O.S.]: You may go. The child stays.
30 A ¶ Briar clings to Hesper's cloak.
31 A Sable nocks the arrow.
32 A Morvan breathes through his teeth.
33 D MORVAN (low): I never agreed to this.
34 D HESPER: Neither did she.
35 A ¶ The barge shudders.
36 A A pale hand grips the gunwale beside Briar.
37 A Then another.
38 A Sable looses the arrow.
39 A It sinks without a splash.

### SCENE s01008 | INT. CHEESE CAVE - DAWN
Detected names (may be incomplete or contain aliases): GASTON, HELOISE, IGNATIUS, JOSEPHINE
1 A ¶ A cool limestone vault lined with shelves of wheels, rinds blooming blue.
2 A A single dripping spigot.
3 A The air is thick with ammonia and earth.
4 A ¶ GASTON (60s, rubber apron) crouches over an overturned wheel.
5 A HELOISE (30s, health inspector, clipboard) holds a penlight.
6 A IGNATIUS (50s, owner's cousin, silk scarf) hovers.
7 A JOSEPHINE (20s, apprentice, smock) fills a pail.
8 A ¶ Gaston turns the wheel over.
9 A A man's wristwatch is baked into the rind.
10 D HELOISE: Is that normal?
11 D GASTON: Not for this cheese.
12 D IGNATIUS: Heloise, we should call the owner.
13 D HELOISE: The owner is missing.
14 A ¶ Ignatius flinches.
15 A Josephine sets the pail down very, very carefully.
16 D JOSEPHINE: I ought to wash my hands.
17 D HELOISE: Stay where you are.
18 A ¶ Josephine laughs, too high, too quick.
19 A Gaston stands.
20 A Sniffs the air.
21 A His eyes go to the far wall, to the oldest shelf, the one nobody touches.
22 D GASTON: Ignatius. When did your cousin last visit?
23 D IGNATIUS: Tuesday.
24 D GASTON: And you were here.
25 D IGNATIUS: No. I mean yes. I mean I was only passing.
26 A ¶ Heloise shines her light on the old shelf.
27 A A boot protrudes from the rind of the largest wheel.

### SCENE s00667 | INT. WAREHOUSE ROLLER DERBY RINK - NIGHT
Detected names (may be incomplete or contain aliases): BRUTAL BRON, SANTOS-WEBB, MAYHEM MO, OYELOWO, RAZOR, VASQUEZ
1 A ¶ A banked track marked in tape.
2 A Folding chairs, a beer cooler, a hand-lettered scoreboard.
3 A A hundred spectators in leather and sequins roar.
4 A ¶ Three skaters.
5 A One jam left.
6 A ¶ BRONWYN "BRUTAL BRON" SANTOS-WEBB, thirties, jammer, star on her helmet.
7 A Fast.
8 A Bleeding from the lip.
9 A ¶ MONIQUE "MAYHEM MO" OYELOWO, forties, blocker.
10 A Wide as a door.
11 A ¶ RENATA "RAZOR" VASQUEZ, twenties, blocker.
12 A Small.
13 A Dangerous.
14 A ¶ Whistle.
15 A ¶ Bron charges.
16 A Mo steps in.
17 A Razor sweeps low.
18 A Bron hops, spins, and slams into Mo's shoulder.
19 A Razor's elbow takes her in the ribs.
20 A All three go down in a clattering heap, helmets cracking, wheels spinning in the air.
21 A ¶ The crowd shrieks.
22 D BRON (from the floor): Is she okay?
23 D MO: I'm fine!
24 D RAZOR: Not her. Her.
25 A ¶ She points.
26 A Bron sits up.
27 A She is clutching her wrist.
28 A ¶ Mo and Razor look at each other.
29 A They roll away at the same moment, and she gets up first, holding a hand down to Bron.
30 D MO: Time out.
31 A ¶ The crowd chants.
32 A Bron laughs through the pain, takes the hand, and lets herself be hauled up.
33 A Razor, grinning, high-fives her with the good one.

### SCENE s00649 | EXT. ROPE BRIDGE OVER GORGE - DAY
Detected names (may be incomplete or contain aliases): JOJO, TAN, EMEKA OBI, DARIUS WHITTAKER, SOLVEIG ENGSTROM
1 A ¶ A plank bridge slung across a mile-wide chasm in the Andes.
2 A Wind howls.
3 A Clouds drift below, bone white.
4 A The planks are gray and gapped.
5 A At the middle, four hikers stand frozen on the sagging span, packs on their backs.
6 A ¶ JOSEPHINE "JOJO" TAN, thirties, leads, one hand on the rope rail.
7 A EMEKA OBI, forties, a doctor, follows.
8 A DARIUS WHITTAKER, twenties, a photographer, clutches a camera case to his chest.
9 A SOLVEIG ENGSTROM, sixties, a retired geologist, brings up the rear, step by careful step.
10 D JOJO: Everyone stay on the center line.
11 D DARIUS: There is no center line, Jojo.
12 D JOJO: Then pretend.
13 A ¶ Wind slaps the bridge.
14 A The whole span lurches.
15 A Emeka grips the rail.
16 A Darius shrieks.
17 A Solveig plants her trekking poles and stands like a tree.
18 D SOLVEIG (muttering): Don't look down, don't look down, don't look down.
19 D EMEKA: Solveig, can you keep moving?
20 D SOLVEIG: I can keep moving. I choose not to.
21 A ¶ A plank cracks and drops away into the cloud.
22 A Jojo leaps over the gap and lands badly.
23 A Darius lunges after her, Emeka catches his pack strap, and for a moment all three are a tangle at the edge of a missing board, the camera case swinging wild.
24 D JOJO: Hold! Hold!
25 D DARIUS: I'm holding!
26 D EMEKA: You're holding the camera!
27 A ¶ Darius looks down at his own hand, clamped on the case, and his other hand, empty, flailing.
28 A He drops the case.
29 A It tumbles, small and square, into the white.
30 A He grabs the rope.
31 D DARIUS (whispering): That was ten years of work.
32 D SOLVEIG (to the others): We cross now. Single file. Quickly.
33 D JOJO: Agreed.
34 A ¶ They move.
35 A The bridge sways like a hammock.
36 A Jojo steps across the gap first, then Emeka, then Darius, who is weeping silently, then Solveig, steady as a metronome, until they all stand together on solid rock on the far side.
37 A ¶ Nobody speaks.
38 A Solveig lowers herself onto a boulder.
39 A Jojo laughs, once, a short astonished sound.
40 A Emeka puts a hand on Darius's shoulder, and Darius, finally, nods.

### SCENE s01475_1 | INT. SUGAR MILL - SECOND FLOOR - NIGHT
Detected names (may be incomplete or contain aliases): SERGEANT, CAPTAIN, MEDIC, IBRAHIM
1 A ¶ A long room of rotted grain sacks and a cold boiler.
2 A A hole in the roof lets in the rain.
3 A The three of them drop their packs.
4 A ¶ The Captain spreads her map on a barrel and studies it with a pencil stub.
5 A The Sergeant props his rifle at the window, rubs his knee, then looks out at the dark plain.
6 A The Medic sits against the wall, unlaces his sodden boots, and winces as he peels them off.
7 D SERGEANT: How far to the bridge?
8 D CAPTAIN: Fourteen kilometers.
9 D SERGEANT: In the morning?
10 D CAPTAIN: At dawn. If the river lets us.
11 D MEDIC (small voice): The river's already let us. It came up to meet us.
12 A ¶ The Sergeant almost smiles.
13 A The Captain doesn't look up from her map.
14 D CAPTAIN: You'll want those feet dry, Medic.
15 D MEDIC: Yes, ma'am.
16 D CAPTAIN: Then dry them. That's an order.
17 A ¶ The Medic wrings out a sock.
18 A The Sergeant sits beside him and hands over a rag from his own kit.
19 D SERGEANT: Use this. It's clean. Mostly.
20 D MEDIC: Thank you.
21 D SERGEANT: What's your name, son? I've been calling you Medic for six days.
22 D MEDIC: Ibrahim, Sergeant. Ibrahim Osei.
23 D SERGEANT: Ibrahim. Good. A man needs a name in the dark.
24 A ¶ The Captain finally looks up.
25 A A beat.
26 A Something eases in her face.
27 D CAPTAIN: Ibrahim, how old are you?
28 D IBRAHIM: Nineteen, ma'am.
29 D CAPTAIN: Nineteen.
30 A ¶ She says it softly, as if turning the word over to find out what it weighs.
31 A Then she folds the map, takes a tin from her pocket, and pries it open.
32 D CAPTAIN [CONT'D]: Rations. One tin of peaches. We split it three ways.
33 D SERGEANT: Peaches? Where did you get peaches?
34 D CAPTAIN: I've carried them since the coast. I was saving them.
35 D SERGEANT: For what?
36 D CAPTAIN: For a night like this one. When nothing else was left to save them for.
37 A ¶ She passes the tin.
38 A The Sergeant takes a slice and passes it on.
39 A Ibrahim takes a slice and holds it up to the dim light like a jewel before he eats it.
40 D IBRAHIM: It's sweet.
41 D SERGEANT: It is.
42 D CAPTAIN: Eat the syrup too. We'll want the sugar tomorrow.
43 A ¶ They drink the syrup in turns, silently.
44 A Rain ticks on the sacks.
45 A Below them the water slaps against the vats.
46 A ¶ The Sergeant takes the first watch at the window.
47 A The Captain lies down with her pack for a pillow, her eyes open.
48 A Ibrahim curls on his side, hands tucked between his knees.
49 D IBRAHIM (half-asleep): Sergeant? Do you think we'll make the bridge?
50 D SERGEANT (not turning): Sleep, Ibrahim.
51 D IBRAHIM: But do you think...
52 D SERGEANT: I think the bridge has waited this long. It can wait for you.
53 A ¶ Ibrahim's breath slows.
54 A The Captain closes her eyes.
55 A The Sergeant stays at the window, a shape against the gray, listening to the rain and the river and, beyond them, nothing at all.

### SCENE s01867 | INT. FINISHING SCHOOL DRAWING ROOM - AFTERNOON
Detected names (may be incomplete or contain aliases): MISS EUGENIA THORNE, LADY ARABELLA FENWICK, MISS CLARA PENROSE, THEODORE ABERCROMBIE, MARTHA GRUBB, MADAME ODILE VASSEUR
1 A ¶ 1912.
2 A A high-ceilinged drawing room in a draughty English manor.
3 A Chintz sofas, a tea service on a mahogany trolley, a portrait of a long-dead headmistress above the cold hearth.
4 A A grandfather clock ticks with ostentatious calm.
5 A Pale spring light slants through lace curtains.
6 A ¶ Six figures occupy the room.
7 A ¶ MISS EUGENIA THORNE, 50s, headmistress, steel-gray hair, a cameo brooch at her throat, presides from a wing chair with her teacup on her knee.
8 A To her right, on a settee, sit two of her pupils: LADY ARABELLA FENWICK, 17, ringlets, bored, and her cousin MISS CLARA PENROSE, 16, plain and watchful, her hands folded.
9 A Standing by the window, hands clasped behind his back, is MR. THEODORE ABERCROMBIE, 40s, the visiting music master, in a tweed jacket with a violin case at his feet.
10 A Beside the tea trolley, pouring, is the maid MARTHA GRUBB, 20s, in cap and apron, eyes lowered.
11 A And in the corner, half hidden behind a potted fern, sits MADAME ODILE VASSEUR, 60s, the French instructress, with a book she isn't reading.
12 D EUGENIA: Martha, the milk.
13 D MARTHA: Yes, Miss Thorne.
14 D EUGENIA: Arabella, sit up.
15 D ARABELLA: I am up.
16 D EUGENIA: You are slumped.
17 A ¶ Arabella straightens by a quarter inch.
18 A Clara stifles a smile.
19 D THEODORE: I thought we might begin with the Schubert.
20 D EUGENIA: We shall begin with tea, Mr. Abercrombie. Music follows digestion.
21 D THEODORE: Of course.
22 A ¶ He bends to the violin case, thinks better of it, and straightens.
23 A Martha hands Eugenia the milk jug.
24 A Their fingers brush.
25 A Martha steps back.
26 D MADAME VASSEUR (from behind the fern): Mademoiselle Clara. Your posture is excellent.
27 D CLARA: Thank you, Madame.
28 D ARABELLA (low): Teacher's pet.
29 D CLARA (lower): Ninny.
30 A ¶ Eugenia sets down her cup.
31 A The saucer rings.
32 A The room stills.
33 D EUGENIA: Is there something the young ladies wish to share?
34 D ARABELLA: No, Miss Thorne.
35 D CLARA: No, Miss Thorne.
36 D EUGENIA: Splendid.
37 A ¶ The clock strikes four.
38 A A carriage rattles on the gravel outside.
39 A Martha crosses to the window, parts the lace, and looks out.
40 A She stiffens.
41 D EUGENIA [CONT'D]: Martha?
42 D MARTHA: A boy on a bicycle, ma'am. He's left a telegram on the step.
43 A ¶ The room holds its breath.
44 A Madame Vasseur lowers her book.
45 A Theodore turns from the window.
46 A Eugenia rises to her full height, smooths her skirt, and walks to the door without a word.
47 A ¶ She opens it.
48 A Beyond, in the hall, a small envelope lies on the silver salver, left there by a messenger who has already gone.
49 D EUGENIA [CONT'D]: For me?
50 A ¶ She turns it over, reads the name, and holds the envelope out to Arabella, who has come up behind her.
51 A ¶ Arabella takes it.
52 A She tears it open.
53 A She reads.
54 A The color drains from her ringlets down to her collar.
55 D ARABELLA (very small): Father.
56 D CLARA: Bella?
57 D ARABELLA: He's coming. Tonight.
58 A ¶ Eugenia places a hand on the girl's shoulder.
59 A Behind them, the clock ticks on.

### SCENE s00755 | EXT. BOCCE COURT - SUNSET LODGE RETIREMENT HOME - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): CONNIE, PAPADAKIS, ELMER HOLLINGSWORTH, VIOLA REARDON
1 A ¶ A clay court framed by weathered boards, bordered by hydrangeas gone brown at the edges.
2 A The sun is low and gold.
3 A A radio plays something slow from an open window.
4 A ¶ CONSTANTINE "CONNIE" PAPADAKIS, seventies, white shirt, braces, crouches with a green ball cupped in his palm.
5 A Across the court ELMER HOLLINGSWORTH, seventies, in a flat cap, leans on a cane and studies the pallino.
6 A Between them, seated on a folding chair with a clipboard, VIOLA REARDON, eighties, referee, in a lavender cardigan, watches both with equal indifference.
7 A ¶ Connie rolls.
8 A The ball curves, slows, kisses the pallino, and stops.
9 A Elmer's cane taps once against the boards.
10 A Viola writes down a number without a word.
11 A ¶ Elmer picks up his own ball, weighs it, sets his feet, and rolls.
12 A It rolls wide, wobbles, and dies a hand's breadth from the line.
13 A Connie nods, folds his arms, and gazes at the sky.
14 A Viola capitalises something on her clipboard.
15 A Neither man looks at the other.
16 A ¶ Connie takes his second ball from the bucket and turns it over twice, and Elmer, from the far end, produces a handkerchief and blots his forehead with the slow ceremony of a man not in a hurry.
17 A Viola lowers the clipboard and takes a long sip of her iced tea.
18 D VIOLA: Four to two.
19 D CONNIE: Thank you, Viola.
20 D ELMER: Two's not bad.
21 D VIOLA: It's two.
22 A ¶ Connie rolls again.
23 A Another kiss, another stop.
24 A Elmer watches it settle and for a moment his cane trembles.
25 A He reaches into his cardigan, fingers a folded photograph, then thinks better of it and tucks it back.
26 D CONNIE: You all right, Elmer?
27 D ELMER: Sun's in my eyes.
28 D CONNIE: Sun's behind you.
29 D ELMER: Then it's the other one.
30 A ¶ Viola caps her pen.
31 A She rises, brushes clay from her cardigan, and walks the length of the court at her own pace, bends, and measures with a short string.
32 A She straightens.
33 D VIOLA: Game.
34 D CONNIE: Good game.
35 D ELMER: Hm.
36 A ¶ They shake hands over the boards, a dry brief shake.
37 A Viola gathers the balls into the bucket.
38 A Connie holds the gate for Elmer.
39 A Elmer goes through it and does not say thank you, and Connie does not seem to expect it, and the radio drifts on.

### SCENE s02371 | INT. 24-HOUR LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): WREN, TEO, STRANGER, ABARA, BAZ
1 A ¶ Fluorescent hum.
2 A Dryers turning, nobody watching.
3 A ¶ WREN, thirties, sits on a folding table with a paperback open.
4 A She hasn't turned a page in ten minutes.
5 A Across the room, TEO, nineteen, feeds quarters into a machine that doesn't need them.
6 A ¶ A STRANGER in a wet raincoat enters.
7 A Sets a duffel on the counter.
8 A Looks at neither of them.
9 D STRANGER: Machine four broken?
10 D WREN: Eats quarters.
11 A ¶ He nods.
12 A Doesn't move.
13 A She turns a page.
14 A Teo drops a coin.
15 A It rolls.
16 A Nobody picks it up.
17 A ¶ MRS. ABARA, seventies, folds towels behind the counter, slow and exact.
18 D MRS. ABARA: Eleven-forty. Dryers lock at midnight.
19 D STRANGER: Plenty of time.
20 A ¶ He unzips the duffel one inch.
21 A Zips it again.
22 A Wren watches the zipper, then the book.
23 D WREN: You're Baz.
24 D BAZ: Who's asking.
25 D WREN: Nobody. Machine four's yours.
26 A ¶ He takes the duffel to machine four.
27 A Opens the door.
28 A Climbs the stool.
29 A Reaches behind the drum.
30 A ¶ Teo, still not looking, feeds in another quarter.

### SCENE s01225 | INT. DRIVING SCHOOL CAR - PARKING LOT - DAY
Detected names (may be incomplete or contain aliases): GRETCHEN LUND, GUSTAVO PEREIRA, GUSTAVO'S MOTHER, TIMA, FÁTIMA
1 A ¶ A dented Corolla with a roof sign and a dual brake pedal.
2 A Cones in a tight figure-eight.
3 A ¶ GRETCHEN LUND (60s, instructor, clipboard, whistle) rides shotgun.
4 A GUSTAVO PEREIRA (30s, nervous student) grips the wheel.
5 A In the back seat, GUSTAVO'S MOTHER, DONA FÁTIMA (60s, handbag on her lap), watches both.
6 D GRETCHEN: Mirror, signal, ease off.
7 D GUSTAVO: Mirror, signal...
8 D FÁTIMA: Signal, filho.
9 A ¶ He nudges the stalk.
10 A Wipers start.
11 A He tries again.
12 A Washer fluid sprays.
13 D GRETCHEN: Other one.
14 D FÁTIMA: Your father also never knew his stalks.
15 D GRETCHEN: Ma'am, I'd ask you not to comment.
16 A ¶ Fátima presses her lips together.
17 A Gustavo finds the indicator.
18 A It ticks.
19 A ¶ He takes the first cone.
20 A Clips it.
21 A It rolls under the bumper with a thunk.
22 D GRETCHEN [CONT'D]: That's a fail. Reset.
23 D FÁTIMA: It was a very small cone.
24 D GRETCHEN: It was a regulation cone!
25 A ¶ She snaps the clipboard against her knee.
26 A He flinches.
27 A His foot slips off the clutch.
28 A The Corolla bucks, stalls.
29 A ¶ Silence.
30 A The indicator ticks.
31 A He leans his forehead against the wheel.
32 D FÁTIMA (sweetly): Maybe I should drive.
33 A ¶ Both look at her.
34 A She smiles.
35 A Gretchen slowly takes a whistle from her mouth.
36 T FADE OUT.

### SCENE s01636 | EXT. FROZEN LAKE LANDSDAL - BONSPIEL RINK - DAY
Detected names (may be incomplete or contain aliases): ASTRID NYGAARD, TORVALD, INGE, HALVOR, LINNEA, REFEREE ODDMUND, OFFICIAL
1 A ¶ A white plain under a lower white sky.
2 A Eight sheets of curling ice scraped clean.
3 A Flags snapping.
4 A Crowds in wool, breath rising.
5 A ¶ At the far house, ASTRID NYGAARD, 30s, skip, tall, ice in her braid, crouches behind the button, broom raised.
6 A Her three teammates wait down the sheet: TORVALD, 50s, burly, thick gloves; INGE, 20s, whip-thin, the lead; and HALVOR, 60s, slow-moving, the veteran.
7 A ¶ At the hack, LINNEA, 20s, her youngest sweeper, adjusts her grip on a stone.
8 A ¶ The score reads 6-6.
9 A Final end.
10 D ASTRID (calling): Linnea! Heavy! Heavy!
11 D LINNEA: Heavy?
12 D ASTRID: Draw to the button. One more.
13 D LINNEA: Right.
14 A ¶ Linnea pushes off.
15 A Slides.
16 A The stone glides.
17 A A hush spreads.
18 A Even the wind seems to listen.
19 D TORVALD: Left, Inge! Sweep!
20 D INGE: I am sweeping!
21 D HALVOR: Harder!
22 D TORVALD: Harder!
23 D INGE: Harder than hard!
24 A ¶ The stone creeps down the ice.
25 A Their brooms hiss.
26 A It curls toward the house -- and stops, a hair short.
27 A ¶ Groans from the crowd.
28 A Astrid hangs her head.
29 D TORVALD: Short.
30 D HALVOR: Short by a hair.
31 D INGE: That was my sweeping.
32 D TORVALD: It wasn't you.
33 D HALVOR: It was the ice.
34 D ASTRID: It was me.
35 A ¶ A heavy silence.
36 A Down the sheet, the other team's final stone is already gliding home.
37 A It is perfect.
38 A It hits the button.
39 A The crowd cheers.
40 A ¶ A whistle.
41 A REFEREE ODDMUND, 60s, in a parka marked OFFICIAL, strides out across the ice with a measuring tape, grim as a judge.
42 D ODDMUND: Measurement! Measurement on the stones!
43 A ¶ The crowd falls quiet.
44 A Oddmund kneels.
45 A Unrolls the tape.
46 A Measures.
47 A Measures again.
48 D ODDMUND [CONT'D] (looking up): Nygaard stone. Four centimeters. Their stone. Four-point-one.
49 D INGE: We won?
50 D TORVALD: We won!
51 D HALVOR: We won by a tenth!
52 D LINNEA: By a tenth of what?
53 D HALVOR: Of anything!
54 D ASTRID (breathless): Oddmund. Measure again.
55 D ODDMUND: I've measured twice.
56 D ASTRID: Then measure again.
57 A ¶ Oddmund sighs, kneels, measures a third time.
58 A The crowd leans in.
59 A Wind turns the flags.
60 D ODDMUND (softly): Four-point-one. Four-point-one. Nygaard stone, four.
61 A ¶ A beat.
62 A Then the roar goes up.
63 A Torvald lifts Astrid off the ice.
64 A Halvor sits down on his broom.
65 A Inge dances.
66 A Linnea stares at her own gloves.
67 D ASTRID (to Linnea): You pushed it.
68 D LINNEA: It stopped short.
69 D ASTRID: It was exactly enough.
70 A ¶ Down the sheet, the other team's stones sit silent on the ice.
71 A Wind drifts snow across them.
72 D TORVALD: They threw a perfect last stone.
73 D HALVOR: Not perfect enough.
74 D ASTRID: Then they'll be back.

### SCENE s01327 | INT. FUNICULAR CAR, MID-SLOPE - NIGHT
Detected names (may be incomplete or contain aliases): NADIA VOSKUIJLEN, SPOON, TEMBO
1 A ¶ A wooden cabin the size of a tram, suspended on a steel cable over a pine-black ravine.
2 A At the summit, the lights of an alpine observatory glow like a lit match.
3 A At the bottom, a sleeping village.
4 A In the middle, the car has stopped.
5 A ¶ NADIA VOSKUIJLEN, 30s, sits upright on the slatted bench in a stolen maintenance coverall two sizes too large.
6 A Dark hair scraped into a bun.
7 A Eyes that do not blink often.
8 A A hard case rests between her boots.
9 A ¶ Across from her, "SPOON" TEMBO, 50s, round-faced, soft-spoken, a retired watchmaker with a splitting grin and a spoon-handle toothpick he rolls between his teeth.
10 A He wears the same coverall, neatly pressed.
11 A ¶ The car sways.
12 A The cable creaks.
13 A Outside, a lonely crow lifts off the rail.
14 D SPOON: Nadia. It stopped.
15 D NADIA: I felt it.
16 D SPOON: It is not supposed to stop.
17 D NADIA: Nothing is supposed to stop, Spoon. Everything does.
18 A ¶ He leans to the window.
19 A Far above, a floodlight sweeps along the cable and draws near, a white bar crossing the snow.
20 D NADIA [CONT'D]: Get down.
21 A ¶ Spoon drops to the floor.
22 A She slides off the bench beside him and pulls the case in against her ribs.
23 A The light washes the cabin white, holds for three terrible seconds, and moves on.
24 A ¶ Neither breathes.
25 A The cable creaks again.
26 A Then a hollow clank somewhere above, and the car lurches one foot downhill and stops.
27 D SPOON (whisper): They have cut the power.
28 D NADIA: They haven't. They don't know we're here.
29 D SPOON: Then why did it stop?
30 D NADIA: Because Eddie was supposed to hold the relay and Eddie is a coward.
31 D SPOON: Eddie is a nice young man.
32 D NADIA: Eddie is a nice young man who has probably gone home.
33 A ¶ A relay clunks in the machinery overhead, and a distant motor begins to cycle, a slow metal countdown.
34 A Nadia's lips part.
35 A She mouths a number at Spoon: two minutes.
36 A Spoon nods slowly, his toothpick stilled.
37 A They crouch in the dark, listening to the wind comb the pines.
38 D SPOON (barely audible): Nadia. What if the vault is empty?
39 D NADIA: Then we've climbed a mountain for nothing.
40 D SPOON: I like nothing. I have a great deal of it at home.
41 A ¶ She almost laughs.
42 A She presses the back of her hand to her mouth.
43 A ¶ The brake releases with a long sigh.
44 A The cable tightens.
45 A The car begins to glide uphill again, smooth as milk, and the tension in the cabin goes out of both of them like air from a bellows.
46 A Spoon sits back up on the bench.
47 A Nadia slumps against the wall.
48 D SPOON [CONT'D]: My heart, I think it left in the last minute.
49 D NADIA: Mine's in the case.
50 A ¶ She taps the lid.
51 A He chuckles, a warm sound in a cold box.
52 A ¶ The observatory grows larger in the window.
53 A Its dome opens like an eye.
54 D NADIA [CONT'D]: When we step out, you're not Spoon anymore.
55 D SPOON: No?
56 D NADIA: You're Doctor Aurelio Stahl, from the Geneva office.
57 D SPOON (a deep, pompous voice): Doctor Stahl, at your service.
58 D NADIA: Lower.
59 D SPOON (lower still): Doctor Stahl, at your very humble service.
60 A ¶ She shakes her head.
61 A The car glides into the station.
62 A Doors hiss open on yellow light and the smell of machine oil.
63 D NADIA: Shoulders back, Doctor.
64 D SPOON: Spoons are always bent, my dear. But I will try.
65 A ¶ They step out together into the light.

### SCENE s00520 | INT. CHEESE AGING CAVE - NIGHT
Detected names (may be incomplete or contain aliases): OSEI ADJEI-BOATENG, PRIYA RAMANATHAN, RADIO, MARGUERITE, DMITRI VOLKOV
1 A ¶ Limestone walls sweat.
2 A Racks of wheels, floor to ceiling.
3 A Cold.
4 A Blue work-lights hum.
5 A ¶ OSEI ADJEI-BOATENG, 40s, hairnet, rubber apron, taps a wheel with a brass mallet.
6 A Listens.
7 A Moves on.
8 A ¶ PRIYA RAMANATHAN, 20s, clipboard, headlamp, trails him.
9 A New hire.
10 A Overeager.
11 D PRIYA: Eleven months on that one?
12 D OSEI: Fourteen.
13 D PRIYA: It sounds hollow.
14 D OSEI: It sounds fine.
15 A ¶ He keeps walking.
16 A She keeps writing.
17 A ¶ A rack of Alpine wheels.
18 A Humidity gauge.
19 A Everything in order.
20 D PRIYA: Nobody else works nights?
21 D OSEI: Nobody else wants to.
22 D PRIYA: Why do you?
23 D OSEI: Quiet.
24 A ¶ A drip.
25 A Somewhere deep in the cave, metal clicks.
26 A Soft.
27 A Regular.
28 A ¶ Priya glances up.
29 A Osei does not.
30 D PRIYA: Is that --
31 D OSEI: Pipes.
32 A ¶ Beat.
33 A The clicking stops.
34 A ¶ Priya relaxes.
35 A Laughs at herself.
36 D PRIYA: Sorry. First week. Everything's a ghost.
37 D OSEI: There's coffee in the cold room. Go. Warm up.
38 D PRIYA: You sure?
39 D OSEI: Go.
40 A ¶ She goes.
41 A Her headlamp swings away down the aisle.
42 A ¶ Osei waits.
43 A Counts her footsteps.
44 A Silence.
45 A ¶ He crouches.
46 A Pulls a wheel half out of the lowest rack.
47 A Behind it: a gap.
48 A Duffel bag.
49 A ¶ He unzips it.
50 A Cash.
51 A Banded.
52 A Stacks of it.
53 A ¶ A RADIO crackles on his belt.
54 D MARGUERITE [V.O.] (over radio): Osei. Dock camera shows a van.
55 D OSEI (low): Not mine.
56 D MARGUERITE [V.O.] (over radio): Nobody's on the schedule tonight. Nobody.
57 A ¶ Osei zips the bag.
58 A Stands.
59 A Looks toward the cold room.
60 D OSEI (into radio): The new girl. Who hired her?
61 D MARGUERITE [V.O.] (over radio): Nobody hired her.
62 A ¶ Osei's hand goes to the mallet.
63 A ¶ Footsteps.
64 A Not Priya's.
65 A Heavy.
66 A Behind him.
67 A ¶ DMITRI VOLKOV, 50s, wet wool coat, gray stubble, steps out from between two racks.
68 A Hands in pockets.
69 A Smiling like a man at a funeral reception.
70 D DMITRI: Osei. Good. Saved me the search.
71 D OSEI: You're early.
72 D DMITRI: She's very good, no? The girl. Two weeks of paperwork. Fourteen months of cheese.
73 A ¶ Priya returns.
74 A No clipboard.
75 A No headlamp.
76 A A small pistol, held steady.
77 D PRIYA (flat): Bag.
78 A ¶ Osei lifts the duffel.
79 A Slowly.
80 D OSEI: Your coffee's cold.
81 D PRIYA: So are you.
82 A ¶ Dmitri takes the bag.
83 A Weighs it in one hand.
84 D DMITRI: Count it.
85 D PRIYA: I did. Last Tuesday.
86 A ¶ Osei looks at the mallet.
87 A At the wheel.
88 A At the exit.
89 D MARGUERITE [V.O.] (over radio): Osei? Osei, answer me.
90 A ¶ Dmitri plucks the radio off his belt.
91 A Turns it off.
92 D DMITRI: She talks a lot, your wife.
93 A ¶ Osei's jaw sets.
94 D OSEI: She's calling the police.
95 D DMITRI: She is calling the dock. The dock is mine.
96 A ¶ Priya cocks the pistol.
97 A The click echoes down the cave.
98 A The same click from before.
99 A ¶ Osei closes his eyes.
100 D OSEI: Pipes.
101 D PRIYA: Pipes.

### SCENE s02515 | INT. FIREHOUSE KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): CAPTAIN LORETTA BAXTER, DMITRI VOLKOV, FAYE MCALLISTER, CASPIAN ROURKE, YOLANDA DEVEREAUX
1 A ¶ A long steel table scarred by forty years of dinners.
2 A Pots hang from a rack.
3 A A framed photo of a fire engine hangs crooked over the stove.
4 A The scanner on the shelf murmurs in a low, sleepy voice.
5 A ¶ CAPTAIN LORETTA BAXTER, 50s, iron-grey crop, broad shoulders, stirs a pot of chili.
6 A DMITRI VOLKOV, 30s, firefighter, sits at the table in a station t-shirt, peeling an orange.
7 A FAYE MCALLISTER, 20s, the probie, mops the floor with great, nervous strokes.
8 A CASPIAN ROURKE, 40s, driver, slumps in a chair with his boots on the table.
9 A YOLANDA DEVEREAUX, 30s, EMT, cleans her glasses on the hem of her shirt.
10 D LORETTA: Chili in five.
11 D CASPIAN: You said that an hour ago.
12 D LORETTA: It's been four minutes.
13 D DMITRI: She's right. I've been watching.
14 D FAYE: Captain, I finished the floor.
15 D LORETTA: Do it again.
16 D FAYE: But it's finished.
17 D LORETTA: Then do it better.
18 A ¶ Faye looks at the mop.
19 A At Loretta.
20 A Wrings it out.
21 A Starts again.
22 A ¶ The scanner crackles.
23 A A tone.
24 A A flat dispatch voice reads out: Engine Six, structure fire, forty-one Maple.
25 A Everyone stops.
26 A ¶ Chairs scrape.
27 A Dmitri drops the orange.
28 A Caspian's boots hit the floor.
29 A Yolanda shoves her glasses on.
30 A Faye flings the mop and it clatters against the stove.
31 A Loretta turns off the burner, and in one motion drags the pot to the back.
32 D LORETTA [CONT'D]: Rolling!
33 A ¶ They run, boots pounding, through the swinging door and into the bay.
34 A The kitchen empties.
35 A The pot ticks.
36 A The scanner murmurs on to nobody.
37 A ¶ A moment passes.
38 A Then Faye reappears at the door, panting, mop in hand.
39 A She sees the empty room.
40 A Sets down the mop gently, with the tenderness of a person who has run out of reasons to be afraid.
41 D FAYE (to the empty kitchen): Bring them home.
42 A ¶ She follows them out.
43 A The scanner crackles again.
44 A The chili simmers.
