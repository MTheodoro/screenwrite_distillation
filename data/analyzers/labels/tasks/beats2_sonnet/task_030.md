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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_sonnet/group_00030.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00922 | INT. ABANDONED SALT-LICK CHAPEL - DAY
Detected names (may be incomplete or contain aliases): HOLLIS BRANDT-OKAFOR, MERCY, ELI
1 A ¶ A tin-roofed chapel on the edge of the alkali flats.
2 A Pews pulled out and stacked against the wall.
3 A In the middle of the floor, a block of rock salt the size of a coffin, glittering where the light finds it.
4 A ¶ HOLLIS BRANDT-OKAFOR stands in the doorway, dust to his knees.
5 A He is lean, sunburned, and carries a rifle like it weighs nothing.
6 A He lets his eyes adjust.
7 A ¶ Across the room, a woman sits on the altar rail with her boots swinging.
8 A She does not look up when he enters.
9 A She is peeling an orange with a skinning knife.
10 A ¶ At the back, in the pulpit, a boy no older than fifteen crouches with a canvas sack in his arms.
11 A He is trying to be invisible.
12 D HOLLIS: Mercy Calloway.
13 D MERCY: Marshal Brandt. You're a long way from a courthouse.
14 D HOLLIS: Forty miles. The horse died twenty back.
15 A ¶ She cuts a slice of orange and eats it.
16 D MERCY: Then you walked into the one place I know you'd come.
17 D HOLLIS: The boy.
18 D MERCY: He's not mine.
19 D HOLLIS: That's not what the telegraph said.
20 D MERCY: Telegraph says a lot.
21 D HOLLIS: It said you took his father's payroll. It said you took the father, too.
22 D MERCY: It said that.
23 D HOLLIS: Did you?
24 D MERCY: Do you want me to say yes so you can hang me, or no so you can call me a liar?
25 D HOLLIS: I want the truth.
26 D MERCY: Then you're the first man in this territory who does.
27 A ¶ She finally looks at the boy.
28 A He shrinks.
29 D MERCY [CONT'D]: Tell him, Eli. Tell him what you saw.
30 D ELI: I -- my pa --
31 D HOLLIS: Easy, son.
32 D ELI: My pa shot first.
33 D HOLLIS: At who?
34 D ELI: At her. She was only standing there.
35 D HOLLIS: Standing where?
36 D ELI: By the well. She had the sack, she was giving it back.
37 D MERCY: I told you, boy, that's enough.
38 D HOLLIS: No, let him finish.
39 D ELI: My pa wanted it for himself. He wanted all of it. He said if she lived, she'd talk.
40 D HOLLIS: And the father?
41 D ELI: He fell in the well.
42 D MERCY: He fell. Not pushed. Fell.
43 D HOLLIS: Eli, did she push him?
44 D ELI: No, sir.
45 D HOLLIS: Then why did you run?
46 D ELI: Because everybody said she did.
47 A ¶ A long silence.
48 A Salt ticks in the heat.
49 A Outside, wind starts pulling at the tin roof.
50 D HOLLIS: I walked forty miles for a killer.
51 D MERCY: And now?
52 D HOLLIS: Now I've got a witness and a thief and a sack of money that belongs to a dead man's widow.
53 D MERCY: That sounds like a mess, Marshal.
54 D HOLLIS: It sounds like a trial.
55 D MERCY: You'd put a fifteen-year-old on a stand against his own blood?
56 D HOLLIS: I'd put the truth on a stand. He's just how it gets there.
57 D ELI: I'll do it.
58 D MERCY: Eli --
59 D ELI: I'll do it, Miss Mercy. Somebody ought to say it out loud.
60 A ¶ Mercy slides off the altar rail.
61 A She folds the knife and sets it on the salt block, handle toward Hollis.
62 D MERCY: Then I suppose I'm in your custody.
63 D HOLLIS: I suppose you are.
64 A ¶ She holds out her wrists.
65 A He doesn't take them.
66 A He lifts the rifle, turns, and opens the chapel door to a white and blinding sky.
67 D HOLLIS [CONT'D]: Walk with me. It's forty miles.
68 D MERCY: And the boy?
69 D HOLLIS: He walks too.
70 A ¶ The three of them step out into the glare.

### SCENE s00408 | EXT. APARTMENT ROOFTOP - WATER TANK - DAY
Detected names (may be incomplete or contain aliases): DANTE, REMY, ALVAREZ
1 A ¶ Tar paper and heat shimmer.
2 A A wooden water tower hunches on iron legs.
3 A A rusted ladder climbs its side.
4 A Below, a city sprawls into haze.
5 A ¶ DANTE, 17, in a stained T-shirt, scrapes flaking paint from a pipe with a putty knife.
6 A His brother REMY, 14, holds a bucket of sealant and a rag.
7 D REMY: Dante.
8 D DANTE: Yeah.
9 D REMY: Can I try?
10 D DANTE: You'll drop it.
11 D REMY: I won't.
12 D DANTE: You dropped the last one.
13 D REMY: That was a wrench.
14 D DANTE: It's the same thing.
15 A ¶ Remy sets the bucket down.
16 A He plants his hands on his hips.
17 A Dante keeps scraping.
18 D REMY: Dad said we could split it.
19 D DANTE: Dad said I could handle it.
20 D REMY: He said split.
21 D DANTE: He said it to be nice.
22 D REMY: Dante.
23 D DANTE: Remy.
24 D REMY: I'm fourteen.
25 D DANTE: You're fourteen and a half.
26 D REMY: That's what I said.
27 A ¶ Dante sighs.
28 A He hands over the knife.
29 A Remy takes it, and the metal catches the sun.
30 A He crouches by the pipe, tongue between his teeth, and scrapes.
31 D DANTE: Not that hard.
32 D REMY: It's rusty.
33 D DANTE: It's rusty, not stubborn.
34 D REMY: You don't know that.
35 A ¶ A chunk of paint falls away.
36 A Underneath, the pipe gleams, a bright silver gash.
37 A Remy beams.
38 D REMY [CONT'D]: Look!
39 D DANTE: Nice.
40 D REMY: You didn't look.
41 D DANTE: I looked.
42 D REMY: You didn't.
43 A ¶ Dante turns.
44 A The pipe shines.
45 A Something in his face changes.
46 A He reaches out, as if to touch it, and then the ladder rattles.
47 A Both freeze.
48 A ¶ A head pokes over the edge of the roof: MRS. ALVAREZ, from 4C, an old woman in a housecoat, hauling a laundry basket.
49 D DANTE [CONT'D] (under his breath): No.
50 D REMY: She's going to see.
51 D DANTE: She won't see.
52 D REMY: She's looking right at it.
53 A ¶ Mrs. Alvarez squints, adjusts her glasses, and sets the basket on the tar paper.
54 A She says nothing.
55 A Dante and Remy stare at her.
56 A She stares back, and then, slowly, she turns and begins to hang a towel on the line.
57 D REMY [CONT'D] (whispering): She's not going to say anything.
58 D DANTE (whispering): Don't talk.
59 A ¶ They crouch together behind the tank.
60 A Remy hands Dante the knife.
61 A Dante hands Remy the rag.
62 A They go back to work, shoulder to shoulder, trading the tools without looking.
63 A ¶ Dante drops the knife.
64 A It clatters.
65 A They both freeze again.
66 D REMY (grinning): You dropped it.
67 D DANTE: Shut up.
68 D REMY: You dropped it, Dante.
69 D DANTE: It slipped.
70 D REMY: It slipped.
71 A ¶ Dante shoves him.
72 A Remy shoves back.
73 A They tumble into the bucket, which tips, and sealant oozes across the roof in a black tongue.
74 A Mrs. Alvarez, at the line, calmly continues hanging her wash.
75 D DANTE: Look what you did.
76 D REMY: Look what you did!
77 A ¶ They both scramble for the spill, rags and hands, then laugh, because there is nothing else to do.

### SCENE s02210 | INT. FUNERAL PARLOUR - SIDE ROOM - AFTERNOON
Detected names (may be incomplete or contain aliases): MAEVE FINNEGAN, DECLAN, BRENDAN, AOIFE, THADDEUS KRANE
1 A ¶ A narrow room of dusty velvet.
2 A A tea urn steams in the corner.
3 A The funeral next door has just ended; muffled organ music drifts through the wall.
4 A On a cloth-draped table, a photograph of an elderly man in a fishing hat.
5 A ¶ Five mourners remain.
6 A ¶ MAEVE FINNEGAN (70s, widow, black dress, chin high) stands at the photograph, straightening it for the third time.
7 A Her sons: DECLAN (40s, suit too tight, tie pulled loose) leans on the urn and drinks from a styrofoam cup, and BRENDAN (40s, rumpled, red-eyed) sits on a folding chair staring at his shoes.
8 A Their cousin AOIFE (30s, bright scarf) pours milk into her tea with great concentration.
9 A And a stranger, a man in a rain-darkened trench coat, lingers by the door: MR. THADDEUS KRANE (60s, thin, polite).
10 A ¶ Nobody speaks.
11 D DECLAN: Ma. Sit down.
12 D MAEVE: I'm fine standing.
13 D DECLAN: You've been on your feet since seven.
14 D MAEVE: So has he.
15 A ¶ She nods at the photograph.
16 A Declan lowers the cup.
17 A Brendan lets out a small, wet laugh and wipes his nose with his wrist.
18 D AOIFE: Would anyone like a biscuit?
19 D BRENDAN: I would.
20 D DECLAN: They're stale.
21 D BRENDAN: I don't care.
22 A ¶ She brings him the plate.
23 A He takes one, holds it, doesn't eat.
24 A Maeve turns from the photograph and looks at the stranger by the door.
25 D MAEVE: You're not family.
26 D KRANE: No, madam.
27 D MAEVE: Then who are you?
28 D KRANE: I worked with your husband. Years ago. At the shipyard.
29 D MAEVE: Frank never said.
30 D KRANE: He wouldn't have. We weren't friends.
31 D DECLAN: Then why are you here?
32 D KRANE: Because he did me a kindness once. And I never repaid it.
33 A ¶ Maeve crosses the room, slowly, shoes clicking.
34 A She stops in front of him, studies his face, and takes his hands in both of hers.
35 D MAEVE: Take your coat off. You'll catch your death.
36 D KRANE: Madam, I really should go.
37 D MAEVE: You'll have tea.
38 A ¶ It isn't a question.
39 A Krane lets her pull the coat off his shoulders.
40 A She hands it to Aoife, who hangs it carefully.
41 A Declan and Brendan exchange a glance.
42 A Then Brendan, abruptly, pushes the plate of biscuits across the table toward the stranger.
43 D BRENDAN: They're stale.
44 D KRANE (a small smile): So I understand.
45 A ¶ He takes one.
46 A Maeve pours a cup, hands it to him, and for a moment the only sound is the muffled organ from next door, carrying one slow chord after another, and the clink of five spoons in five cups.
47 A ¶ Then the music stops.
48 A A door opens somewhere in the building.
49 A Footsteps, voices, laughter.
50 A The funeral is over.
51 A They stand in the quiet and do not go out.

### SCENE s01892 | INT. FREIGHT ELEVATOR, MUSEUM OF CLOCKS - NIGHT
Detected names (may be incomplete or contain aliases): VERA KOLOSOVA, PETRA LINDGREN-HAYES, BOLT, UCHENNA
1 A ¶ Cage steel.
2 A Brass fittings.
3 A Descending.
4 A ¶ VERA KOLOSOVA (40s, black coveralls) and PETRA LINDGREN-HAYES (40s, black coveralls) share a tool case.
5 A Between them, in a silk-lined crate, ticks a golden carriage clock.
6 A BARRY "BOLT" UCHENNA (30s, headset, earpiece) crouches with a laptop.
7 D VERA: Hold it level.
8 D PETRA: I am holding it level.
9 D VERA: She is not holding it level.
10 D BOLT: Hey. Hey. She's right. Ladies, please.
11 D PETRA: Which she?
12 D BOLT: Either one.
13 A ¶ A floor counter flickers.
14 A B2.
15 A B3.
16 D VERA (whispering): Guard's rounds at three-fifteen. We have forty seconds.
17 D PETRA: Thirty-eight now.
18 D BOLT: Thirty-seven.
19 A ¶ The elevator shudders.
20 A Stops.
21 A Lights die.
22 A ¶ Silence.
23 A A single tick from the clock.
24 D VERA: Don't breathe.
25 D PETRA: ^Don't breathe.
26 D BOLT: I never breathe, ladies. It's a professional habit.
27 A ¶ Footsteps overhead.
28 A Slow.
29 A A flashlight beam slides down the shaft.
30 A The three freeze.
31 A The clock ticks.
32 A Louder.
33 A Louder.
34 D PETRA: Cover it.
35 A ¶ Vera drapes her jacket over the crate.
36 A The ticking muffles.
37 A The beam drifts, hesitates, fades.
38 A Footsteps walk away.
39 A ¶ Lights hum back to life.
40 A The floor counter reads B4.
41 D BOLT: Forty seconds.
42 D VERA: Twenty-two.
43 D PETRA: Fifteen.
44 A ¶ The doors open on a loading dock.
45 A Moonlight.
46 A A van.

### SCENE s02168 | INT. LEVINE & SON PAWN - DAY
Detected names (may be incomplete or contain aliases): ABRAHAM LEVINE, JOSHUA, WOMAN, ROSALIE
1 A ¶ A narrow shop crammed with guitars, wristwatches, stuffed marlin, a rack of wedding rings behind glass.
2 A A bell over the door.
3 A Dusty sun through barred windows.
4 A ¶ ABRAHAM LEVINE, 70, pawnbroker, green visor, rolled sleeves, polishes a trumpet.
5 A His son JOSHUA, 40s, in a suit that doesn't fit, tallies receipts at the end of the counter.
6 A ¶ The bell rings.
7 A A WOMAN, 30s, enters.
8 A Raincoat, wet hair, a small velvet pouch gripped in both hands.
9 A She stands just inside the door as though the floor might give way.
10 D ABRAHAM: Good afternoon.
11 D WOMAN: Is it?
12 D ABRAHAM: For some of us.
13 A ¶ She crosses to the counter.
14 A Sets the pouch down.
15 A Pulls the drawstring.
16 A A gold locket slides out.
17 A Joshua stops tallying.
18 D JOSHUA: Dad.
19 D ABRAHAM: I see it.
20 D WOMAN: It was my mother's.
21 D ABRAHAM: It's beautiful.
22 D JOSHUA: It's worth four hundred, easy.
23 D WOMAN: Eight.
24 D JOSHUA: Four.
25 D WOMAN: It has a picture inside.
26 D ABRAHAM: May I?
27 A ¶ She nods.
28 A Abraham opens it with a thumbnail.
29 A Stares.
30 A Closes it.
31 D ABRAHAM [CONT'D]: Joshua. Look at this.
32 D JOSHUA: What?
33 D ABRAHAM: Just look.
34 A ¶ Joshua takes the locket, opens it.
35 A His face changes.
36 D JOSHUA: Dad. That's...
37 D ABRAHAM: Rosalie Pinsky.
38 D WOMAN: I'm Rosalie.
39 D ABRAHAM: No. The locket belonged to...
40 D ROSALIE: My mother. Hannah Pinsky. She pawned it here in 1991.
41 D ABRAHAM: She did. And she never came back.
42 D ROSALIE: She died.
43 D JOSHUA: We're sorry.
44 D ROSALIE: Don't be. I'm here to buy it back.
45 D ABRAHAM: It's yours.
46 D JOSHUA: Dad, it's inventory.
47 D ABRAHAM: Joshua, a locket this old isn't inventory. It's a promise.
48 D JOSHUA: We have a business.
49 D ABRAHAM: We have a mother.
50 A ¶ Joshua looks at the locket.
51 A At Rosalie.
52 A At his father.
53 A He closes the drawer.
54 D JOSHUA: Take it.
55 D ROSALIE: I'll pay for it.
56 D ABRAHAM: You already did.
57 A ¶ Rosalie closes her fingers around the locket.
58 A The bell above the door rings softly as a draft touches it.

### SCENE s01296 | INT. BEEKEEPER'S SHED - NIGHT
Detected names (may be incomplete or contain aliases): ONDINE HAWTHORNE, MORDECAI
1 A ¶ A low, windowless hut of unplaned planks.
2 A Rows of honey jars glow amber in the lantern light.
3 A From the hives outside, a drone, deep and constant.
4 A The walls tremble with it.
5 A ¶ ONDINE HAWTHORNE, 30s, in a veil and cotton gloves, sets a jar on the shelf and wipes her hands, never turning from the door.
6 A Her brother MORDECAI, 40s, bearded, bare-armed, stands in the doorway with a smoker in one hand and a bucket in the other.
7 A Neither has spoken for some time.
8 A He steps inside; she steps back.
9 A The bucket slips from his fingers and spills a thick gold river across the floor, and as she reaches for a rag he catches her wrist.
10 A The lantern gutters.
11 A Behind them the humming rises, and the tallest hive outside begins, very quietly, to speak her name.
12 D ONDINE: Let go.
13 D MORDECAI: They want you back.
14 D ONDINE: They want what's in me.
15 A ¶ He releases her.
16 A She backs against the shelf.
17 A The jars chime against each other.
18 A The humming stops.
19 A ¶ In the new silence, a single bee crawls from the neck of her veil and walks across her cheek.

### SCENE s00254 | INT. DEEP-SEA RESEARCH HABITAT "THALASSA-9," MESS HALL - SHIP NIGHT
Detected names (may be incomplete or contain aliases): COMMANDER ILSE VARGA-OKONJO, MBALI NKOSI-ARRINGTON, ENGINEER DEWEY HOLLOWAY-SATO, PRIYA, DESAI-BRANDT, NEWCOMER, ARTHUR
1 A ¶ Low ceiling.
2 A Portholes show black water.
3 A A table bolted to the floor.
4 A Steam from five bowls of reconstituted soup.
5 A ¶ Five crew eat in tired silence.
6 A ¶ COMMANDER ILSE VARGA-OKONJO (50s, grey crewcut, flight jacket) cuts a biscuit in half.
7 A ¶ DR. MBALI NKOSI-ARRINGTON (30s, marine biologist, spectacles on a string) stirs her soup without drinking.
8 A ¶ ENGINEER DEWEY HOLLOWAY-SATO (40s, wrench in his belt) scrapes his bowl.
9 A ¶ TECH PRIYANKA "PRIYA" DESAI-BRANDT (20s, tablet in one hand, spoon in the other) scrolls through readings.
10 A ¶ And a quiet man, face smudged with grease, who has not given his name: A NEWCOMER (30s, orange vest, new boots).
11 D ILSE: Anyone want to say anything?
12 A ¶ Silence.
13 A A pipe knocks somewhere.
14 D MBALI: The trench is warmer than yesterday.
15 D DEWEY: Everything's warmer than yesterday.
16 D PRIYA: Not everything. Pressure's flat.
17 D NEWCOMER: Flat is good.
18 D DEWEY: Flat is boring.
19 D ILSE: I like boring.
20 D PRIYA: I like flat.
21 D MBALI: I like soup.
22 A ¶ They eat.
23 A A porthole flickers: a pale shape drifts past and is gone.
24 D MBALI [CONT'D]: Did anyone see that?
25 D PRIYA: What?
26 D DEWEY: Fish.
27 D MBALI: It was larger than fish.
28 D ILSE: Dr. Nkosi-Arrington, the instruments say nothing.
29 D MBALI: The instruments aren't looking out the window.
30 D NEWCOMER: It's the lights. They attract plankton.
31 D DEWEY: Plankton doesn't look back.
32 D PRIYA: Did it look back?
33 D MBALI: I don't know.
34 A ¶ The table goes quiet.
35 A Priya sets down her tablet, face up.
36 A Everyone leans in.
37 D ILSE: Priya. Readings.
38 D PRIYA: Nothing. A small thermal bloom, two hundred meters out.
39 D DEWEY: Heat means life.
40 D MBALI: Or a vent.
41 D NEWCOMER: Or us.
42 A ¶ Ilse looks at him.
43 A He looks at her.
44 A After a moment she nods and resumes cutting her biscuit.
45 D ILSE: Eat. We have a shift in an hour.
46 A ¶ They eat.
47 A Nobody speaks.
48 A The pipe knocks again.
49 A ¶ Then the newcomer says, softly, to no one:
50 D ARTHUR: Name's Arthur.
51 D ILSE: Welcome, Arthur.
52 D DEWEY: Welcome.
53 D PRIYA: Welcome.
54 D MBALI: Welcome. Your boots are very new.
55 D ARTHUR: They're the only thing I own.
56 A ¶ Mbali smiles for the first time.
57 A The others do too.
58 A Outside, the porthole darkens again.

### SCENE s00023 | INT. FREIGHT ELEVATOR, CANNERY - NIGHT
Detected names (may be incomplete or contain aliases): SAUL VERHOEVEN, NADIA PRUITT, EMEKA OSEI
1 A ¶ Steel cage.
2 A Flickering bulb.
3 A Stuck between floors.
4 A ¶ SAUL VERHOEVEN (50s, grey suit, bleeding sleeve) leans on the wall.
5 A NADIA PRUITT (30s, tactical vest, gun lowered) watches the hatch.
6 A Beside her, a young courier, EMEKA OSEI (20s, backpack hugged tight).
7 D NADIA (to everyone): Nobody touches the panel.
8 D EMEKA (quiet, to Saul): Is it bad? Your arm?
9 D SAUL: It's fine, kid.
10 A ¶ Nadia cranes toward the ceiling.
11 A Dust drifts down.
12 D NADIA (under her breath): Come on, come on. Not now.
13 A ¶ Boots thump overhead.
14 A Then stop.
15 A Then nothing.
16 D EMEKA: They're gone?
17 D NADIA (to Emeka): Be still.
18 A ¶ Saul slides the backpack from Emeka's arms.
19 A Emeka lets him.
20 D SAUL (to himself): Should've taken the stairs.
21 A ¶ The cage lurches.
22 A Slowly, it starts to rise.

### SCENE s00060 | INT. SLEEPING CAR, NIGHT TRAIN - NIGHT
Detected names (may be incomplete or contain aliases): BARNABAS HOLT, LEOPOLD VANCE, ISADORA FEYERABEND
1 A ¶ Brass lamps swing with the rails.
2 A Rain beads the window.
3 A On the table between the seats, a chess set mid-game and an untouched bottle of wine.
4 A ¶ BARNABAS HOLT (50s, silver beard) leans back with his hands folded.
5 A Opposite him sits LEOPOLD VANCE (50s, silver moustache), staring at the board.
6 A At the door, the conductor, ISADORA FEYERABEND (30s, brass buttons), has just finished punching tickets.
7 D BARNABAS: Your move.
8 D LEOPOLD: I know.
9 D ISADORA: Gentlemen, we reach Vienna at dawn.
10 D LEOPOLD: Plenty of time to lose.
11 D BARNABAS: Time for you to lose.
12 D ISADORA: You've both been playing since Prague.
13 D LEOPOLD: He cheats.
14 D BARNABAS: He sulks.
15 D ISADORA: One of you left this on the floor.
16 A ¶ She holds up a small brass key.
17 A Barnabas reaches for it.
18 A Leopold reaches too.
19 A They both stop, hands in the air.
20 A He looks at the key.
21 A He looks at the other man.
22 A He knows.
23 D LEOPOLD: That opens the trunk in the baggage car.
24 D BARNABAS: Does it?
25 D ISADORA: It does. And the trunk is empty.
26 A ¶ She closes the door behind her.
27 A The train rattles on through the dark.

### SCENE s01749 | INT. FUNERAL HOME - CASKET SHOWROOM - DAY
Detected names (may be incomplete or contain aliases): AUGUSTUS PEMBROKE, SALESMAN, PERCIVAL
1 A ¶ Mahogany, pine, brushed steel.
2 A Satin linings in six shades of cream.
3 A A single armchair for the grieving.
4 A A small fountain gurgles in the corner.
5 A ¶ AUGUSTUS PEMBROKE (50s, widower in training, black suit too tight at the shoulder) walks the room with his hat in both hands.
6 A He stops at the cheapest casket and touches it with one finger, as though it might be hot.
7 A ¶ A SALESMAN (40s, shiny shoes, a lapel pin shaped like a dove) appears out of nowhere at his elbow.
8 D SALESMAN: Good morning, sir. Have you lost someone?
9 D AUGUSTUS: Not yet.
10 D SALESMAN: Ah. A planner. I admire a planner.
11 D AUGUSTUS: My wife's still alive. She's in the car.
12 D SALESMAN: In the car.
13 D AUGUSTUS: She's got a cold. She wanted to wait.
14 D SALESMAN: Of course. We offer a drive-through option, sir, for the living.
15 D AUGUSTUS: Really?
16 D SALESMAN: No.
17 A ¶ Augustus nods slowly.
18 A The Salesman leans on the pine casket and pats it, as a man pats a horse.
19 D SALESMAN [CONT'D]: This is our Starter. Pine, plain handles, a one-year warranty.
20 D AUGUSTUS: On a casket?
21 D SALESMAN: If it fails, we replace it. Free of charge.
22 D AUGUSTUS: How would you know it failed?
23 D SALESMAN: Sir, that is exactly the question my own father asked.
24 D AUGUSTUS: What did you tell him?
25 D SALESMAN: That we have a very friendly staff. My name is Percival, by the way.
26 D AUGUSTUS: Augustus.
27 D PERCIVAL: Augustus. May I ask what your wife would want?
28 D AUGUSTUS: She'd want me to stop pricing things.
29 D PERCIVAL: She sounds lovely.
30 D AUGUSTUS: She's insufferable. She's alive.
31 D PERCIVAL: Then why are you here?
32 D AUGUSTUS: Because she told me to. She said, Gus, pick something so I don't have to hear about it.
33 D PERCIVAL: Ah. A woman who delegates. I'd like to meet her.
34 D AUGUSTUS: She'd like to meet you too. She's been waiting forty minutes.
35 D PERCIVAL: In the car?
36 D AUGUSTUS: In the car.
37 A ¶ Percival straightens.
38 A He glances at the door, then back, and for the first time he looks worried.
39 D PERCIVAL: Sir, you left her in a parked vehicle with a cold?
40 D AUGUSTUS: With the heater on.
41 D PERCIVAL: How long?
42 D AUGUSTUS: I told you. Forty minutes.
43 D PERCIVAL: Forty minutes in a car with the engine running?
44 D AUGUSTUS (beat): Oh.
45 A ¶ They look at each other.
46 A Then they both run for the door, Augustus knocking over the fountain, Percival clutching his dove pin, a pair of grown men in dark suits sprinting through a showroom of empty beds.

### SCENE s00540 | EXT. LIFE RAFT - SOUTHERN OCEAN - DAWN
Detected names (may be incomplete or contain aliases): CAPTAIN HAAKON LUNDQVIST, MBEKI NTULI, LUCIANA FARIAS, PIP
1 A ¶ A yellow canopy bobbing on a swell the color of slate.
2 A Fog lies in the troughs.
3 A The sea has gone, for the first time in nine days, almost still.
4 A ¶ CAPTAIN HAAKON LUNDQVIST, 60s, a beard crusted with salt, sits at the hatch with a flare gun across his knees.
5 A MBEKI NTULI, 30s, the first mate, bails with a plastic cup, steady as a metronome.
6 A LUCIANA FARIAS, 20s, the cook, huddles in a foil blanket, lips cracked.
7 A PIP, 16, the cabin boy, lies asleep with his head in her lap.
8 D HAAKON: It's flat.
9 D MBEKI: It's flat.
10 D LUCIANA: Is that good?
11 D HAAKON: It means the storm's gone.
12 D MBEKI: It means the storm's behind us.
13 D LUCIANA: Is that different?
14 D MBEKI: Ask me tomorrow.
15 D HAAKON: Water?
16 D LUCIANA: Half a cup each. I measured.
17 D HAAKON: Split Pip's.
18 D MBEKI: He's nine days younger than the rest of us.
19 D HAAKON: Give him less, then.
20 D LUCIANA: No. I'm giving him more.
21 D HAAKON: Luciana --
22 D LUCIANA: He told me his mother's name. Last night. He thought I was asleep. He kept saying it. Over and over. Adelheid. Adelheid.
23 D MBEKI: Captain, the boy's all right.
24 D HAAKON: The boy's fine.
25 D LUCIANA: You keep saying that like it's a prayer.
26 D HAAKON: It's a log entry.
27 D MBEKI: It's both.
28 A ¶ Pip stirs.
29 A Murmurs.
30 A Luciana strokes his forehead.
31 A All three wait for him to settle.
32 D HAAKON (low): Mbeki. Last night. Did you hear it?
33 D MBEKI: The engine?
34 D HAAKON: Not an engine.
35 D LUCIANA: What are you two talking about?
36 D MBEKI: A low sound. Like a drum, far off.
37 D HAAKON: I thought I dreamed it.
38 D MBEKI: We didn't both dream it.
39 D LUCIANA: Could it be a ship?
40 D HAAKON: Ships don't sound like that.
41 D LUCIANA: Then what?
42 D HAAKON: Whales. Or ice. Or --
43 A ¶ He stops.
44 A The fog parts.
45 A In the trough ahead, a wall of white rises, hundreds of feet high, glittering.
46 D MBEKI: Iceberg.
47 D LUCIANA: It's beautiful.
48 D HAAKON: It's moving toward us.
49 D MBEKI: Everything moves toward us, Captain.
50 A ¶ Pip sits up.
51 A Rubs his eyes.
52 A Looks at the berg and the three adults, all staring, none speaking.
53 D PIP: Is it breakfast?
54 A ¶ Luciana laughs, ragged, helpless, near tears.
55 A Mbeki lowers his bailing cup.
56 A Haakon lifts the flare gun, aims into the gray sky, and fires.
57 A ¶ A red star blooms above them.
58 A Four faces turn up to it, lit crimson, silent.

### SCENE s00472 | INT. NATURAL HISTORY MUSEUM - TAXIDERMY HALL - NIGHT
Detected names (may be incomplete or contain aliases): SUNNIVA HALVORSEN, MERIEM AIT-OUDIA, BASEMENT
1 A ¶ A long gallery with a ceiling lost in dark.
2 A Glass cases run down both walls like the windows of a train that stopped decades ago.
3 A Inside them: foxes mid-stride, owls with wings half-raised, a heron balanced on one leg in painted reeds.
4 A Dust lies over everything in a soft grey fur.
5 A ¶ Two flashlight beams cross the threshold and wander.
6 A ¶ SUNNIVA HALVORSEN (30s, cropped hair, a surveyor's vest with too many pockets) steps in first.
7 A She runs her light across the cases the way a person reads a menu in a language she half knows.
8 A ¶ MERIEM AIT-OUDIA (40s, heavy coat, an old camera strapped across her chest) follows two paces behind, breathing through her mouth.
9 D SUNNIVA: Council wants an inventory by Friday.
10 D MERIEM: Of what?
11 D SUNNIVA: Everything with a tag.
12 D MERIEM: Everything here has a tag.
13 A ¶ Sunniva crouches before a case of badgers.
14 A Their glass eyes catch the light and hold it a half-second too long.
15 A She tilts her beam and the shine slides away.
16 A ¶ Meriem lifts the camera.
17 A She frames the heron.
18 A She does not press the shutter.
19 A She lowers it, wipes the lens with her sleeve, and lifts it again.
20 D SUNNIVA: You can take the picture.
21 D MERIEM: I'm waiting for the light.
22 D SUNNIVA: It's a flashlight. It's not going to change.
23 A ¶ Meriem lowers the camera.
24 A She looks at the heron, then at the floor in front of its case.
25 A A line of small, clean prints crosses the dust there, pale and even, as if something had walked the length of the hall on bare feet.
26 A ¶ Sunniva sees them a moment after.
27 A She stands.
28 A She sets her light on the floor, pointing along the trail.
29 A It runs to the end of the gallery and into the dark between two cases.
30 D SUNNIVA [CONT'D]: Night guard.
31 D MERIEM: There is no night guard.
32 D SUNNIVA: Then somebody from the cleaning contract.
33 D MERIEM: No one has cleaned this hall in eleven years.
34 A ¶ The beam trembles.
35 A Neither of them says whose hand is holding it.
36 A ¶ Sunniva follows the prints a few steps.
37 A Meriem follows her.
38 A Between the cases there is a narrow service door, painted the same green as the wall.
39 A It is open an inch.
40 A Cold air breathes out of it, smelling of camphor and rain.
41 A ¶ Meriem reaches past her and pushes the door wider.
42 A She leans her light into the gap.
43 A Stairs, going down.
44 A On the third stair, a single wet footprint, still shining.
45 D SUNNIVA (quietly): That one's new.
46 D MERIEM: Yes.
47 A ¶ They stand together at the lip of the stairwell.
48 A Behind them, in the hall, something small and dry settles in one of the cases: a click, like a claw on glass.
49 A Neither turns around.
50 A ¶ Sunniva takes out her clipboard.
51 A She writes a line.
52 A She shows it to Meriem.
53 A ¶ The page says: BASEMENT - NOT ON INVENTORY.
54 A ¶ Meriem nods.
55 A She lifts the camera and, for the first time, presses the shutter.
56 A The flash fills the stairwell white.
57 A In the afterimage, the stairs are exactly as they were.
58 A The wet print is gone.
59 D MERIEM [CONT'D]: Friday.
60 D SUNNIVA: Friday.
61 A ¶ She pulls the green door shut.
62 A It latches with a sound like a held breath let go.
63 A Both of them go back down the long gallery, past the badgers, past the owls.
64 A They do not hurry.
65 A Behind them, every glass eye in the hall has turned a few degrees toward the door.
66 A ¶ Sunniva stops at the exit and puts her hand flat against the wall.
67 A She switches off her light.
68 A Meriem switches off hers.
69 A ¶ In the dark, the prints continue to cross the dust, one after another, toward the place where the two women had been standing.
70 D SUNNIVA [CONT'D] (whispering): Don't look back.
71 D MERIEM: I wasn't going to.
72 A ¶ She opens the door to the street.
73 A Rain falls through the streetlight, ordinary and loud.
74 A They step out into it side by side, and the door swings shut on its own, slow, with the patience of a thing that has all night.

### SCENE s01300 | INT. CONVERTED GRAIN SILO - ARBITRATION HALL - DAY
Detected names (may be incomplete or contain aliases): JUDGE PHAEDRA LOMAX, SIMONE DUCHAMP, TARIQ NASSAR, CLETUS WREN, FOREMAN, HIRAM
1 A ¶ A round concrete chamber, forty feet across, with a ladder bolted to the wall and a hopper chute high above.
2 A A plank bench for the public.
3 A A folding table for the court.
4 A Dust floats in a single shaft of light.
5 A ¶ JUDGE PHAEDRA LOMAX, 60s, in a rumpled black robe over a flannel shirt, sits behind the table.
6 A She keeps a thermos of tea at her elbow and a gavel carved from a fence post.
7 A ¶ SIMONE DUCHAMP, 40s, lead counsel for the farmers, in a tailored green suit, rises, a stack of exhibits hugged to her chest.
8 A ¶ TARIQ NASSAR, 40s, counsel for the agribusiness, in a charcoal suit and silk tie, taps his pen against his notepad.
9 A ¶ CLETUS WREN, 60s, the bailiff, stands at the ladder with his thumbs hooked in his belt.
10 A He has not smiled since the Carter administration.
11 A ¶ In a single armchair at the side sits the FOREMAN, 50s, a man in overalls and a seed-company cap, with a clipboard in his lap.
12 A He chews a toothpick.
13 D LOMAX: We are on the record. Ms. Duchamp.
14 D DUCHAMP: Your Honour, we ask the jury for a verdict on count one.
15 D LOMAX: There is no jury, Ms. Duchamp. There is Mr. Foreman.
16 D DUCHAMP: Then we ask the Foreman.
17 D FOREMAN: Ma'am, I got a question first.
18 D LOMAX: Proceed.
19 D FOREMAN: Do I have to say it out loud?
20 D LOMAX: That is how verdicts work.
21 D FOREMAN: Even if it makes someone mad?
22 D LOMAX: Especially then.
23 A ¶ He removes the cap.
24 A Smooths his hair.
25 A Puts the cap back on.
26 D NASSAR: Your Honour, I object. The witness is stalling.
27 D LOMAX: He is not a witness, Mr. Nassar. Sit down.
28 D NASSAR: I'd like it noted for the record that--
29 D LOMAX: Noted. Sit.
30 A ¶ He sits.
31 A Duchamp's grip on her exhibits tightens.
32 D DUCHAMP: Mr. Foreman, take your time.
33 D FOREMAN: Don't need it, ma'am.
34 A ¶ He stands.
35 A Clears his throat.
36 A The toothpick rolls to the side of his mouth.
37 D FOREMAN [CONT'D]: On count one, the soil contamination, we find for the farmers.
38 A ¶ A murmur on the bench.
39 A Nassar's pen stops.
40 A Duchamp closes her eyes.
41 D LOMAX: Order.
42 D NASSAR: Your Honour, I demand the jury be polled.
43 D LOMAX: There is one man, Mr. Nassar. He just spoke.
44 D NASSAR: Then I demand he be re-sworn.
45 D LOMAX: Mr. Wren, please re-swear Mr. Foreman.
46 D WREN: Raise your right hand.
47 A ¶ The Foreman raises his hand.
48 A Wren raises his, solemn.
49 D WREN [CONT'D]: Do you swear to render a true verdict according to the evidence?
50 D FOREMAN: I do.
51 D WREN: State your name for the record.
52 D FOREMAN: Hiram Stroud.
53 D HIRAM: Hiram Stroud, Dutch Creek. Third generation on the same acres.
54 D LOMAX: Thank you, Mr. Stroud. Please repeat your verdict.
55 D HIRAM: On count one we find for the farmers.
56 D NASSAR: He's biased. His own land is in the class.
57 D HIRAM: It is. And it's poisoned, sir. I tested it myself.
58 A ¶ Nassar half rises, shoulders squared.
59 A Hiram does not move.
60 A Wren steps forward.
61 A Duchamp slides between them.
62 A The shaft of light falls across all four faces.
63 D LOMAX: Sit down, Mr. Nassar.
64 A ¶ He does.
65 A He opens his notepad.
66 A Closes it.
67 A Opens it again.
68 D LOMAX [CONT'D]: Ms. Duchamp. Count two.
69 D DUCHAMP: The farmers move for punitive damages.
70 D HIRAM: We find for the farmers on count two.
71 D NASSAR: You haven't heard the evidence!
72 D HIRAM: I've heard four weeks of it. My ears are tired.
73 D LOMAX (to herself): God bless the plain-spoken.
74 A ¶ Wren shifts his weight and says nothing.
75 A The gavel comes down once.
76 D LOMAX [CONT'D]: We stand adjourned. Mr. Wren, open the doors.
77 A ¶ He hauls on the silo's iron door.
78 A Light pours in, wheat-gold.
79 A The farmers on the bench rise and file out, caps in their hands.

### SCENE s01322 | INT. PARKING GARAGE, LEVEL 3 - EARLY MORNING
Detected names (may be incomplete or contain aliases): IRINA VASK, COACH BOONE
1 A ¶ Concrete.
2 A Oil stains.
3 A Orange cones set in a tight oval.
4 A A roller derby track, taped on the floor.
5 A ¶ IRINA VASK, 20s, helmet under one arm, laces her skates on the hood of a dead Buick.
6 A COACH BOONE, 50s, whistle, bad knee, leans on a pillar with a clipboard and a paper cup of coffee.
7 A ¶ Boone clicks his pen.
8 A Irina stands, rolls a slow lap past him, scuffs a wheel on a crack in the slab, curses under her breath, circles back, and Boone sips the coffee, checks the clipboard, and nods at nothing as she drifts to a stop at the cones.
9 D IRINA: You're early, Coach.
10 D BOONE: You're earlier, Irina.
11 D IRINA: Couldn't sleep.
12 D BOONE: Nobody sleeps before a bout.
13 A ¶ She pulls on the helmet.
14 A He watches the ceiling.
15 A A pigeon shifts on a pipe.
16 A Somewhere below, a car door slams, an engine starts, and Boone and Irina both pretend not to hear it echo before she kicks off the pillar and takes a second lap, easy, unhurried, while he flips a page.
17 D IRINA [CONT'D]: Count my laps, Coach.
18 D BOONE: Already counting, kid.

### SCENE s02238 | EXT. LIFEBOAT ON OPEN SEA - DAY
Detected names (may be incomplete or contain aliases): RUTH, GUSTAVO, ANNELIESE, DWAYNE
1 A ¶ A steel-grey sea under a flat white sky.
2 A The boat is a sealed orange cabin with a hatch left open.
3 A Four survivors sit shoulder to shoulder on the benches.
4 A ¶ RUTH, sixties, a retired purser, wears a stained uniform jacket and holds the emergency kit in her lap.
5 A GUSTAVO, thirties, a deckhand, has a gash across one palm wrapped in a sock.
6 A ANNELIESE, fifties, a passenger in a torn evening dress, rocks a little, eyes closed.
7 A DWAYNE, twenties, the youngest, stares at the hatch, jaw clenched.
8 A ¶ Nobody has spoken for a long time.
9 D RUTH: All right. Listen up, everybody. Rations. One cracker each at noon, one at dusk. Water twice a day. I'll mark the bottle.
10 D GUSTAVO: Who made you captain?
11 D RUTH: I'm the one holding the kit.
12 D DWAYNE (muttering): Doesn't make it fair.
13 D RUTH: Say it louder, young man.
14 D DWAYNE: I said nothing.
15 D ANNELIESE (eyes still closed): Please don't fight. It makes the boat feel smaller.
16 D GUSTAVO: The boat is small.
17 D ANNELIESE: I know it is.
18 D RUTH (to Gustavo): Show me the hand.
19 A ¶ He holds it out.
20 A She unwraps the sock, inspects the cut, wrinkles her nose.
21 D RUTH [CONT'D]: Clean it with salt water. Then wrap it again.
22 D GUSTAVO: Salt will sting.
23 D RUTH: It will.
24 A ¶ She hands him the bandage roll.
25 A He takes it and does as told, hissing.
26 D DWAYNE (to himself): Three days. They said three days.
27 D GUSTAVO: Who said?
28 D DWAYNE: The radio, before it went dead. Three days till a ship.
29 D RUTH: Then we have two more.
30 D DWAYNE: If they're coming.
31 D ANNELIESE: They are coming. I dreamed it.
32 D DWAYNE: Oh, great. A dream.
33 D RUTH: Dwayne.
34 D DWAYNE: Sorry. Sorry.
35 A ¶ Ruth opens the kit and counts crackers into four small piles.
36 A She hands them out.
37 A Gustavo eats his in one bite.
38 A Anneliese holds hers in her palm without tasting.
39 A Dwayne breaks his in half, saves one half in his pocket.
40 D GUSTAVO: Smart.
41 D DWAYNE: Not smart. Scared.
42 D RUTH: Same thing, out here.
43 A ¶ The sea slaps the hull.
44 A The boat lifts and settles.
45 D ANNELIESE (opening her eyes): Does anyone know a song?
46 A ¶ Nobody answers.
47 A Then Gustavo, quietly, hums three notes.
48 A Dwayne picks it up.
49 A Ruth, to her own surprise, joins in.
50 A They hum it, thin and cracked, over the empty water.

### SCENE s00621 | INT. TELEGRAPH OFFICE, CANAL LOCK HOUSE - NIGHT
Detected names (may be incomplete or contain aliases): ELIAS VANTERPOOL, TOBIAS GRILL, WINIFRED HALE, PRUDENCE
1 A ¶ 1868.
2 A Lamplight, wet floorboards, a brass key clicking on the long oak counter.
3 A Rain hammers the shutters.
4 A Water is coming under the door in a slow, steady sheet.
5 A ¶ ELIAS VANTERPOOL, forties, stout, the clerk in charge, bends over the key.
6 A TOBIAS GRILL, twenties, his junior, stacks ledgers onto a high shelf.
7 A WINIFRED HALE, fifties, the lockkeeper's widow, stands by the stove with a shawl over her head.
8 A A girl, PRUDENCE, ten, sits on the counter with her boots held up out of the wet.
9 A ¶ He taps out a line, stops, and taps it again.
10 A He does not look up.
11 D ELIAS (to the room): Upstream station says the gates at Marlow are gone. Everyone move your things up.
12 D TOBIAS: Gone how?
13 D ELIAS: Gone like gone.
14 A ¶ He grabs a ledger from the lower drawer and hands it up.
15 A He takes it, but it is heavy and he nearly drops it.
16 D TOBIAS (muttering): Forty years of figures. Forty years, and we save the figures.
17 D WINIFRED: Prue, up on the shelf with you. Now, please.
18 D PRUDENCE: It's wet up there too.
19 A ¶ She is lifted anyway.
20 A He sets her next to the ledgers and she hugs her knees.
21 D ELIAS: Winifred, how long before it reaches the sill?
22 D WINIFRED: An hour. Less if the Anderton sluice stays open.
23 A ¶ He keeps tapping.
24 A She watches him tap, and neither of them says what both know about the sluice.
25 D TOBIAS (to Elias): Sir, I could run to the lock house and shut it.
26 D ELIAS: You could drown at the lock house.
27 D TOBIAS: I could.
28 A ¶ He pulls his coat on regardless.
29 A He is stopped at the door by a hand on his sleeve.
30 D WINIFRED: Not you, boy. I know the wheel. I'll go.
31 D ELIAS: Winifred --
32 D WINIFRED: Elias, send your message.
33 A ¶ She wraps the shawl tighter and opens the door.
34 A The rain comes in like a thrown bucket.
35 A She is gone.
36 A ¶ Elias bends to the key.
37 A His hand is steady.
38 A His jaw is not.
39 D TOBIAS (to himself): Should've been me.
40 D PRUDENCE (to everyone): Is she coming back?
41 A ¶ Elias taps.
42 A Tobias stares at the door.
43 A Nobody answers.

### SCENE s02492 | INT. COMMUNITY CENTRE - POTTERY CLASS - EVENING
Detected names (may be incomplete or contain aliases): YETUNDE ADEBAYO, EPHRAIM PRUITT, MARISKA JANSEN, WILFRED TANG
1 A ¶ Four wheels spin.
2 A Slip splashes the floor.
3 A A kiln sighs in the corner.
4 A ¶ YETUNDE ADEBAYO, 50s, instructor, stands at the front with a clay bowl held aloft.
5 A EPHRAIM PRUITT, 70, retired, hunches over a collapsing vase.
6 A MARISKA JANSEN, 30s, dyed blue hair, flicks clay off her fingers.
7 A WILFRED TANG, 40s, accountant, wears a plastic apron over a three-piece suit.
8 D YETUNDE (to the class): Centre your clay, everyone. Centre!
9 D MARISKA (to Ephraim): Yours looks like a hat.
10 D EPHRAIM: It's meant to.
11 D WILFRED (muttering, to himself): Not my best vase. Not my best vase at all.
12 D YETUNDE: Wilfred, pressure with the heel of your hand.
13 D WILFRED: That's what I'm doing.
14 A ¶ His vase leans, folds, and slides off the wheel.
15 D EPHRAIM (to Wilfred): Better luck.
16 D YETUNDE (to the room): Take a breath. Pottery is patience.
17 A ¶ The kiln timer BUZZES.
18 A Everyone jumps.
19 A Mariska flings a handful of slip across Ephraim's shirt.
20 D MARISKA: Sorry!
21 D EPHRAIM (to himself): Should've taken up golf.
22 A ¶ Yetunde sets down her bowl.
23 A Sighs.
24 A Looks at the wreckage.
25 A Wilfred looks at the vase on the floor.
26 D WILFRED (soft): Would anyone mind if I just threw it out?

### SCENE s02047 | INT. FAMILY FUNERAL HOME - VIEWING ROOM - DAY
Detected names (may be incomplete or contain aliases): DELACROIX-OWUSU, DELACROIX-KRAMER, BEATRIX FAIRCHILD-ANYANWU, OYELOWO-FAIRCHILD
1 A ¶ Gray carpet, a bank of white lilies, a closed walnut casket at the far wall.
2 A Folding chairs in three rows.
3 A A tissue box on every sixth chair.
4 A The air conditioning hums like an apology.
5 A ¶ MARGARET "MAGGIE" DELACROIX-OWUSU (50s, black dress, hair pinned tight) stands at the casket, one hand flat on the lid.
6 A She does not speak.
7 A Her sister, JOSEPHINE "JOJO" DELACROIX-KRAMER (40s, same dress, cheaper shoes) hovers three feet behind with a clutch purse she keeps opening and closing.
8 A ¶ On the front row, their elderly aunt, BEATRIX FAIRCHILD-ANYANWU (80s, hat with a small black veil) knits something shapeless.
9 A Beside her, her grandson, NATHANIEL "NATE" OYELOWO-FAIRCHILD (20s, tie too short, a phone he keeps checking and pocketing) sits stiffly.
10 A ¶ She straightens the lilies.
11 A She straightens them again.
12 A The other one stands behind her and watches her do it, purse snapping shut.
13 A ¶ Maggie turns.
14 A Looks past Jojo, at the door.
15 A ¶ Jojo follows her eyes.
16 A No one there.
17 A ¶ Beatrix's needles click.
18 A Nate checks his phone.
19 A Puts it away.
20 A Checks it.
21 A ¶ Maggie crosses to the front row and sits, one chair apart from Beatrix.
22 A She smooths her skirt.
23 A Jojo remains standing.
24 A After a long moment, she sits too, on the other side of her, so that she is flanked by her sister and her aunt.
25 A Maggie reaches over without looking and takes Jojo's hand.
26 A Jojo squeezes once.
27 A Neither lets go.
28 A ¶ Beatrix's needles stop.
29 A She lays them in her lap.
30 A ¶ At the back of the room, the door swings open on its own and settles.
31 A The four of them turn at the same time.

### SCENE s01308 | INT. BOOKBINDERY - EDWARDIAN LONDON - MORNING
Detected names (may be incomplete or contain aliases): EDWIN ASHCROFT, MISS ADELAIDE FOX
1 A ¶ A narrow workshop, three floors above a cobbled lane.
2 A Presses of black iron and polished oak.
3 A Racks of calf and morocco leather in every shade of brown.
4 A Gold leaf trembles on its tissue by the window.
5 A Sunlight falls on piles of unbound folios, tied with string.
6 A ¶ MR. EDWIN ASHCROFT, 60s, the master binder, stands at the bench in a leather apron, his spectacles pushed up on his forehead.
7 A Grey whiskers, ink-stained thumbs.
8 A He cradles a half-bound volume with reverent hands.
9 A ¶ MISS ADELAIDE FOX, 20s, his new apprentice, in a plain grey dress with the sleeves rolled back, stands rigid at the opposite end.
10 A Her hair is pinned beneath a cap.
11 A She has been up since four.
12 D ASHCROFT: Miss Fox.
13 D ADELAIDE: Yes, Mr. Ashcroft.
14 D ASHCROFT: You have been with me three weeks.
15 D ADELAIDE: Yes, sir.
16 D ASHCROFT: In three weeks you have sewn twelve signatures, trimmed four boards, and burned the edge of a very costly sheepskin.
17 D ADELAIDE: I am sorry about the sheepskin.
18 D ASHCROFT: You should be.
19 A ¶ He lays the volume on the bench.
20 A Opens it.
21 A Turns three pages.
22 A Stops.
23 D ASHCROFT [CONT'D]: This is yours.
24 D ADELAIDE: My stitching?
25 D ASHCROFT: Your stitching.
26 A ¶ She steps forward.
27 A Her breath quickens.
28 A He taps the spine.
29 D ASHCROFT [CONT'D]: Uneven.
30 D ADELAIDE: I know, sir.
31 D ASHCROFT: Here. And here.
32 D ADELAIDE: I counted forty. I only had thirty-seven.
33 D ASHCROFT: You counted forty because you hurried.
34 D ADELAIDE: Yes, sir.
35 D ASHCROFT: Why?
36 D ADELAIDE: Because I was afraid you'd send me away.
37 A ¶ He considers her.
38 A Takes off his spectacles.
39 A Folds them.
40 A Slips them into his apron pocket.
41 D ASHCROFT: Miss Fox, this volume is a Bible. It was commissioned by the Bishop of Winchester. It shall sit on an altar for two hundred years.
42 D ADELAIDE: Then I must unpick it.
43 D ASHCROFT: You must unpick it.
44 D ADELAIDE: Now?
45 D ASHCROFT: Now.
46 A ¶ She takes a needle.
47 A A pair of fine shears.
48 A She bends over the volume.
49 A Her hands shake once and then do not.
50 D ASHCROFT [CONT'D]: Slower.
51 D ADELAIDE: Yes, sir.
52 D ASHCROFT: Do not hurry what will outlive you.
53 A ¶ She snips a thread.
54 A Another.
55 A The room is silent save for the tick of a pocket-watch on the shelf.
56 D ASHCROFT [CONT'D]: When you finish, you will sew it again.
57 D ADELAIDE: Properly.
58 D ASHCROFT: Properly. And if it is not properly done you will unpick it again.
59 D ADELAIDE: How many times?
60 D ASHCROFT: As many as it takes.
61 A ¶ Adelaide looks up.
62 A For the first time, she sees something in his face she had not expected: a small, grim, unmistakable kindness.
63 D ADELAIDE: Thank you, sir.
64 D ASHCROFT: Do not thank me. Thread your needle.

### SCENE s01555 | INT. DISTRICT COURTHOUSE - CORRIDOR OUTSIDE COURTROOM 4B - DAY
Detected names (may be incomplete or contain aliases): WOMAN, DONNELLY-ADEYEMI, MAN, HAROLD OSEI-BRANDT, DONNELLY
1 A ¶ Bench seating.
2 A A water cooler.
3 A A television mounted high plays the news without sound.
4 A ¶ A WOMAN in a black suit paces with a folder.
5 A Her badge reads P. A. DONNELLY-ADEYEMI, Assistant District Attorney.
6 A ¶ A MAN in a rumpled blazer stands near the cooler, tapping his phone.
7 A The placard on his briefcase reads "HAROLD OSEI-BRANDT, ESQ."
8 D DONNELLY: Harold.
9 D OSEI-BRANDT: Priscilla.
10 D DONNELLY: You filed the motion at five a.m.
11 D OSEI-BRANDT: Insomnia.
12 D DONNELLY: It had a cover letter.
13 D OSEI-BRANDT: I take pride in my cover letters.
14 A ¶ She stops pacing.
15 A Stares at the TV.
16 A The ticker reads "BREAKING: LOCAL JUDGE RECUSES."
17 D DONNELLY (to herself): Of course.
18 D OSEI-BRANDT: Something?
19 D DONNELLY: Nothing. Talking to the weather.
20 A ¶ He chuckles.
21 A She does not.
22 D DONNELLY [CONT'D] (louder, to the whole corridor): Anyone with a four o'clock in 4B should know it's been moved.
23 A ¶ Nobody answers.
24 A A janitor wheels a mop bucket past, whistling.
25 D OSEI-BRANDT: Wasted breath.
26 D DONNELLY: Habit.
27 D OSEI-BRANDT: Moved to where?
28 D DONNELLY: Courtroom 7. New judge.
29 D OSEI-BRANDT: Who?
30 D DONNELLY: Judge Kowalczyk.
31 D OSEI-BRANDT (sinking onto the bench): No.
32 D DONNELLY: Yes.
33 D OSEI-BRANDT: He hates me.
34 D DONNELLY: He hates everyone. That's the beauty.
35 D OSEI-BRANDT: Priscilla, I need a continuance.
36 D DONNELLY: Harold, I need a miracle.
37 A ¶ She sits beside him.
38 A Their briefcases touch.
39 A The TV flickers to a weather map: a hurricane swirl.
40 D OSEI-BRANDT (quietly): Priscilla, if I say please.
41 D DONNELLY: Don't.
42 D OSEI-BRANDT: Please.
43 D DONNELLY (sighing): Fine. A week.
44 A ¶ He stands, extends a hand.
45 A She shakes it.
46 A Then she looks at the placard on his case, and at her own badge, and the cue in her notes.
47 D DONNELLY [CONT'D] (to herself): Priscilla Anne. Not Priscilla.
48 D OSEI-BRANDT: What?
49 D DONNELLY: Nothing, Harold. Go.
50 A ¶ He goes.
51 A She remains on the bench, watching the hurricane turn.

### SCENE s00840 | INT. FORMER MATTRESS SHOWROOM - ESCAPE ROOM "THE SLEEPLESS VAULT" - DAY
Detected names (may be incomplete or contain aliases): GRANT PELLEGRINO, WANJIRU KAMAU, FRANCINE DUBOIS
1 A ¶ A warehouse of bare walls painted dark purple.
2 A A countdown clock glows on a screen: 60:00.
3 A Dozens of mattress boxes sit stacked to the ceiling, and a single door has a combination lock on it.
4 A ¶ GRANT PELLEGRINO, forties, regional manager in a quarter-zip, stands in the center of the room with his arms crossed.
5 A WANJIRU KAMAU, thirties, his analyst, sits on a mattress crate holding the instruction card.
6 A FRANCINE DUBOIS, fifties, accounts payable, leans against the wall in orthopedic shoes.
7 A ¶ He claps his hands once, a sound like a pistol.
8 A She does not look up.
9 A The other woman does, slowly.
10 D GRANT: Okay, team! The clock is ticking!
11 D WANJIRU: It's an hour.
12 D GRANT: And we'll need every minute of it.
13 A ¶ He strides to the lock, tries four numbers, and grunts when it doesn't open.
14 A She flips the card over.
15 A It says only: "THE CODE IS WHERE YOU SLEEP."
16 D FRANCINE: That's a bed.
17 D GRANT: Francine, don't be literal.
18 D FRANCINE: It's a literal room.
19 A ¶ He rips a lid off a mattress box.
20 A Inside: nothing.
21 A He tears off another.
22 A Then another.
23 A Foam peanuts spill across the floor like snow.
24 A She watches him with the patience of someone who has been through budget season.
25 D WANJIRU: Grant, maybe we should read the clues first.
26 D GRANT: I'm reading them with my hands.
27 A ¶ The clock hits 52:00.
28 A Wanjiru stands, crosses to the wall, and runs her fingers along a row of numbered pillows.
29 D WANJIRU: One to nine. Someone's arranged these.
30 D FRANCINE: Count them again.
31 A ¶ She does.
32 A Her lips move.
33 A She stops at six, frowns, lifts pillow six and finds a brass key taped underneath.
34 A She holds it up.
35 A Grant lunges.
36 A She steps back and his hand closes on air.
37 D GRANT: Give me that.
38 D WANJIRU: It's a team game, Grant.
39 D GRANT: I'm the team lead.
40 D FRANCINE: Then lead.
41 A ¶ Nobody speaks.
42 A The clock ticks.
43 A Grant lowers his hand and looks at the floor, at the peanuts clinging to his shoes.
44 A Then at the key, shining in Wanjiru's palm.
45 A He drags a hand down his face.
46 D GRANT [CONT'D]: Fine. Fine. What do you want to do?
47 A ¶ Wanjiru offers the key to Francine, who studies it, turns it over, and tucks it into the pocket of her cardigan.
48 D FRANCINE: First, we eat lunch.
49 D GRANT: Lunch? The clock
50 D FRANCINE: It's twelve-fifteen. I've missed lunch every Thursday for nine years.
51 A ¶ She takes a Tupperware out of her purse, sits on a mattress, and opens it.
52 A The smell of curry fills the room.
53 A Wanjiru grins and sits beside her.
54 A Grant stares, then slowly lowers himself to a crate.
55 A She hands him a plastic fork.
56 A ¶ The clock drops to 49:00.
57 A For a long minute nobody does anything but chew.
58 A Then Grant begins to laugh, short, helpless bursts, until he's wiping his eyes with the quarter-zip.
59 A She laughs too, quietly, and so does Francine.
60 D GRANT: I've been so tired.
61 D WANJIRU: We know.
62 A ¶ He pulls off his lanyard and lets it fall onto the mattress.
63 A Then he picks it back up, folds it, and puts it in his pocket.
64 A Francine hands him a second fork.
65 A He takes a bite.
66 D GRANT: This is really good.
67 D FRANCINE: It's my mother's.
68 A ¶ The clock goes on counting down above their heads, and none of them looks at it.

### SCENE s01414 | EXT. DRY CREEKBED - HIGH NOON
Detected names (may be incomplete or contain aliases): SHERIFF ABNER TOLLIVER, PERCY, DUNMORE, ESPERANZA QUILLAN, SILAS DEARBORN-FLYNT
1 A ¶ Cracked mud.
2 A A burnt wagon tilts on its axle.
3 A Buzzards circle high above.
4 A A single dead cottonwood throws a thin ribbon of shade.
5 A ¶ SHERIFF ABNER TOLLIVER, 50s, gray mustache, sits on a flat rock and cleans his revolver with a bandanna.
6 A He is in no hurry.
7 A Nearby, his deputy, PERCIVAL "PERCY" DUNMORE, 20s, paces with a rifle across his shoulder, sweating through his shirt.
8 A ¶ Across the dry creek, a woman crouches by the wagon, sifting ash through her fingers.
9 A ESPERANZA QUILLAN, 30s, in a man's hat and a dusty duster, doesn't look up.
10 D PERCY: Sheriff, we've been here an hour.
11 D ABNER: Two.
12 D PERCY: She hasn't moved.
13 D ABNER: Neither have I.
14 D PERCY: She's looking for something.
15 D ABNER: Everyone is.
16 A ¶ Percy shifts the rifle to the other shoulder.
17 A Esperanza stands, brushes her hands, and crosses the creekbed to them with an unhurried step.
18 D ESPERANZA: Afternoon.
19 D ABNER: Ma'am.
20 D ESPERANZA: This your wagon?
21 D ABNER: Used to be.
22 D ESPERANZA: It's a shame.
23 D ABNER: It's the cost of doing business.
24 D ESPERANZA: Whose business?
25 D ABNER: Mine, until Tuesday.
26 A ¶ She nods slowly.
27 A Pulls a folded paper from her pocket, hands it to him.
28 A He reads it, his mustache twitching.
29 A Then he laughs, once, without joy.
30 D ABNER [CONT'D]: Well, I'll be.
31 D PERCY: What is it?
32 D ABNER: Deed to the whole valley.
33 D PERCY: Whose name's on it?
34 D ABNER: Hers.
35 A ¶ A new sound.
36 A Hooves in the distance.
37 A All three turn.
38 A ¶ A rider emerges from the heat shimmer, big black horse lathered white, a rifle across his saddle.
39 A He reins in at the edge of the creekbed.
40 A SILAS DEARBORN-FLYNT, 60s, face like a hatchet, tips his hat.
41 D SILAS: Sheriff.
42 D ABNER: Silas.
43 D SILAS: You've got my property.
44 D ABNER: Do I?
45 D SILAS: Her.
46 A ¶ Esperanza steps forward, one boot at a time.
47 A She meets his eyes without flinching.
48 D ESPERANZA: I'm not property.
49 D SILAS: That paper says different.
50 D ESPERANZA: That paper says I own what you thought you did.
51 A ¶ Silas looks at the sheriff.
52 A The sheriff looks at the sky.
53 A A buzzard cries.
54 D ABNER: Percy.
55 D PERCY: Sir?
56 D ABNER: Go home.
57 D PERCY: But, Sheriff--
58 D ABNER: Go home, son.
59 A ¶ Percy lowers the rifle.
60 A Backs up three steps.
61 A Then turns and walks off down the creekbed, boots kicking up dust.
62 A ¶ Silas turns the horse in a slow half circle.
63 A Spits.
64 D SILAS: This isn't over.
65 D ESPERANZA: It is for today.
66 A ¶ He spurs the horse away.
67 A Dust follows him.
68 A Abner folds the deed along its old creases and hands it back, tipping his hat.

### SCENE s01856 | INT. COUNTRY HOUSE LIBRARY - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR HORACE LANGLEY, LADY PRUDENCE WHITMORE
1 A ¶ Leather, mahogany, a banked fire.
2 A A grandfather clock strikes eleven.
3 A Rain beats at the French windows.
4 A ¶ INSPECTOR HORACE LANGLEY, 50s, trench coat draped over a chair, stands at the mantelpiece studying a small bronze statue.
5 A At the desk by the window sits LADY PRUDENCE WHITMORE, 60s, black dress, hands folded over a closed ledger.
6 A A telephone sits between them.
7 D LANGLEY: A lovely piece.
8 D PRUDENCE: My late husband's.
9 D LANGLEY: He had taste.
10 D PRUDENCE: He had money.
11 D LANGLEY: They're not always the same.
12 A ¶ She does not smile.
13 A He sets the statue down and turns it a quarter inch, so its face looks toward the door.
14 D LANGLEY [CONT'D]: The butler says he found the body at seven.
15 D PRUDENCE: He did.
16 D LANGLEY: And you were?
17 D PRUDENCE: In the conservatory. Watering the orchids.
18 D LANGLEY: At seven in the evening.
19 D PRUDENCE: Orchids keep their own hours.
20 A ¶ The telephone rings.
21 A Both look at it.
22 A It rings again.
23 A Prudence lifts the receiver, listens, and holds it out to Langley.
24 D PRUDENCE [CONT'D]: For you.
25 A ¶ Langley takes the receiver and carries it, on its long cord, out through the door into the hall.
26 A Prudence listens.
27 A She cannot see him, and his voice reaches her only in pieces.
28 D LANGLEY [O.S.]: Langley. Yes. The gardener. He saw whom?
29 A ¶ A pause.
30 D LANGLEY [O.S., CONT'D]: Lady Whitmore. In the garden, at half past six. Carrying a spade. Thank you, Sergeant.
31 A ¶ The receiver is replaced.
32 A He returns, trailing the cord, and sets the telephone down.
33 A The clock ticks.
34 A The fire pops.
35 A Prudence folds her hands over the ledger, a little tighter.
36 D PRUDENCE: Orchids need potting, Inspector.
37 D LANGLEY: So they do.
38 A ¶ He lifts the bronze statue and weighs it in his palm.
39 D LANGLEY [CONT'D]: Lady Whitmore. I think we should begin again.
