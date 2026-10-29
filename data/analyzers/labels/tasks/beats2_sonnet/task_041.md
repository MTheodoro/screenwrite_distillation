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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_sonnet/group_00041.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00460 | INT. FOURTH-FLOOR LAUNDRY ROOM - APARTMENT BUILDING - NIGHT
Detected names (may be incomplete or contain aliases): ADAEZE OBI-LINDGREN, GRETCHEN VOSKUIJLEN, TEO
1 A ¶ Two washers, one broken.
2 A A folding table with a wobbly leg.
3 A Fluorescent hum.
4 A ¶ ADAEZE OBI-LINDGREN (30s, scrubs, tired) folds towels.
5 A Her neighbor GRETCHEN VOSKUIJLEN (60s, curlers, quilted robe) watches the dryer spin.
6 D GRETCHEN: You work too much, dear.
7 D ADAEZE: Somebody has to.
8 D GRETCHEN: Mm.
9 A ¶ She nods at the dryer.
10 A Adaeze keeps folding.
11 A A towel.
12 A Another towel.
13 A A baby's sleeper, tiny.
14 D GRETCHEN [CONT'D]: Is that new?
15 D ADAEZE: Hand-me-down.
16 D GRETCHEN: From your sister?
17 D ADAEZE: From a friend.
18 A ¶ The dryer buzzes.
19 A Gretchen opens the door and fishes out warm sheets.
20 A Adaeze takes one end.
21 A They fold together, corner to corner, without a word.
22 A ¶ The door opens.
23 A A tall boy of thirteen, TEO (13, hoodie, earbuds), pads in with a hamper.
24 D TEO: Mom, you said eleven.
25 D ADAEZE: I know. One more load.
26 D TEO: Hi, Mrs. Voskuijlen.
27 D GRETCHEN: Hello, Teo.
28 A ¶ He sets the hamper down and sits cross-legged on the floor.
29 A Adaeze hands him the baby's sleeper.
30 D ADAEZE: Fold that for me.
31 A ¶ He folds it.
32 A Neat.
33 A Careful.
34 A She watches.
35 A Gretchen smiles at the dryer.

### SCENE s00344 | EXT. GLACIER CREVASSE - DAY
Detected names (may be incomplete or contain aliases): INGRID HALVORSEN, SOLANGE RENARD, DAG
1 A ¶ A blue slot in the ice, forty feet deep, walls ribbed like the inside of a throat.
2 A Wind whistles across the lip.
3 A ¶ INGRID HALVORSEN, forties, a mountaineer in a red jacket, dangles from a rope at the crevasse edge, kicking for purchase.
4 A SOLANGE RENARD, thirties, her partner, lies flat on the ice above, the rope wrapped around her gloves.
5 A DAG, fifties, their guide, plants an ice axe a few feet back and hauls on the line.
6 D SOLANGE: I've got you!
7 D INGRID: You don't!
8 D SOLANGE: She's slipping, Dag!
9 D DAG: Both of you, shut up and haul.
10 A ¶ Ingrid swings her boot at the wall.
11 A The ice bites.
12 A She hangs, breathing.
13 D INGRID: Tell me when she's got the axe in.
14 D DAG: Axe is in.
15 A ¶ Solange pulls.
16 A Ingrid rises one foot, then two.
17 A She grabs the lip with a gloved hand.
18 A She looks up at Solange.
19 A She looks at Dag.
20 D INGRID: Pull.
21 A ¶ They pull.
22 A She crawls onto the ice, gasping.
23 A Nobody speaks.
24 A Dag unwraps the rope from Solange's hands, finger by finger.

### SCENE s01438 | INT. OCEAN LINER - REFRIGERATED HOLD - NIGHT
Detected names (may be incomplete or contain aliases): PROFESSOR EZEKIEL WARD, NURSE ANNELIESE KROLL, PERISHABLE
1 A ¶ Frost on iron.
2 A Hanging sides of beef sway in the dim lamplight like pendulums.
3 A The ship groans and creaks as it rolls.
4 A Steam curls from every breath.
5 A ¶ PROFESSOR EZEKIEL WARD (60s, heavy overcoat, goatee trimmed to a point, a leather medical bag) creeps between the carcasses, a lantern held high.
6 A Behind him comes NURSE ANNELIESE KROLL (30s, white cap beneath a fur collar, face scrubbed pale), clutching a tin of ether.
7 D WARD: Careful. The deck's slick.
8 D KROLL: It is the cold that frightens me, Professor, not the deck.
9 D WARD: Cold is the only honest thing aboard this vessel.
10 A ¶ He swings the lantern.
11 A The beam passes a crate stamped "PERISHABLE - HANDLE WITH CARE" and a second crate beside it, longer, narrower, its lid nailed down.
12 D KROLL: That is the one.
13 D WARD: So it is.
14 A ¶ He kneels and prods the lid with a crowbar.
15 A The nails shriek.
16 A Kroll looks over her shoulder, then back, then over her shoulder again.
17 A The ship lurches.
18 A A beef side swings into her, and she gasps, shoves it away; Ward braces on the crate, wrenches the lid, and the two of them jerk backward as it clatters to the deck and a plume of frozen air sighs out of the dark, carrying a smell of salt and old flowers.
19 D WARD [CONT'D]: Dear God.
20 A ¶ Inside lies a woman in a wedding dress of antique lace, her skin glittering with frost, her hands folded on her breast, eyes closed.
21 A Roses, black with age, lie in her hair.
22 D KROLL: She is... she has not decayed.
23 D WARD: She cannot have been dead more than a day.
24 D KROLL: The ledger says fifty years.
25 A ¶ Ward leans in, lantern trembling.
26 A The frost on her lashes begins to melt, beads sliding down her temple.
27 A Kroll takes his arm.
28 D KROLL [CONT'D]: Professor. Her eyes.
29 A ¶ The eyelids flutter.
30 A Ward drops the lantern.
31 A It shatters; the flame gutters.
32 A In the dark, a thin whisper rises from the crate, one syllable, a word like "cold."
33 A ¶ Kroll screams.
34 A Ward throws his coat over the crate, and together they heave the lid back down, hammering it with the crowbar's flat end, and then stand panting in the sudden quiet, the swaying carcasses bumping them like drunken guests.
35 D WARD: We did not hear that.
36 D KROLL: No, Professor.
37 A ¶ Behind them, from within the sealed crate, three polite knocks.

### SCENE s01649 | EXT. VAPORETTO STOP, VENICE - EVENING
Detected names (may be incomplete or contain aliases): PETRA, LEOPOLD, GIULIA, HENRIK, FATIMA, ARTHUR
1 A ¶ Gold light on green water.
2 A A floating dock.
3 A A crowd on a pier.
4 A Boats slap at their moorings.
5 A ¶ PETRA, 30s, in a red scarf and sensible boots, drags a rolling suitcase onto the dock, while LEOPOLD, 30s, in a rumpled linen suit, sprints from the opposite end holding a bouquet of crushed daisies, and GIULIA, 70s, a nonna in a black shawl, yells from a balcony, and HENRIK, 20s, a tourist with a map, steps between them and drops it, and FATIMA, 30s, a ticket seller in a blue uniform, leans from her booth to shout about the schedule, and ARTHUR, 50s, a silver-haired gentleman, sips an espresso on a bench, watching it all.
6 D PETRA: Leopold?
7 D LEOPOLD: Petra!
8 D GIULIA (from the balcony): Leopoldo! Don't let her go!
9 D FATIMA: The last boat leaves in two minutes!
10 D HENRIK: Excuse me, where is the Rialto?
11 D ARTHUR (to Henrik): Wherever they are, I'd follow them.
12 A ¶ Petra stops.
13 A Leopold stops, six feet away.
14 A The daisies drop petals on the planks.
15 D LEOPOLD: I was a fool.
16 D PETRA: You were.
17 D LEOPOLD: Stay.
18 D PETRA: The boat.
19 D FATIMA: Ninety seconds!
20 A ¶ Petra looks at the boat.
21 A At the suitcase.
22 A At the daisies.
23 D PETRA: Is that for me?
24 D LEOPOLD: It was a bouquet.
25 A ¶ She takes the daisies.
26 A Lets go of the suitcase.
27 A It rolls into the water.
28 A Nobody notices.
29 A The boat pulls away.

### SCENE s00152 | INT. FARMHOUSE KITCHEN - PRE-DAWN
Detected names (may be incomplete or contain aliases): EDMUND ABERNETHY-SOTO, LIORA ABERNETHY-SOTO, QUENTIN DUPREE
1 A ¶ A bare bulb.
2 A A pot of coffee going cold.
3 A A calendar with a date circled in red.
4 A ¶ EDMUND ABERNETHY-SOTO, 60s, sits at the table with a stack of unopened envelopes.
5 A His daughter, LIORA ABERNETHY-SOTO, 30s, stands at the sink with her back to him.
6 A A hired hand, QUENTIN DUPREE, 40s, hovers by the door, cap in his hands.
7 A ¶ He lifts one envelope.
8 A Sets it down.
9 A Lifts another.
10 A ¶ She runs the tap.
11 A Turns it off.
12 A Runs it again.
13 D QUENTIN: Mr. Abernethy, the auctioneer's truck is at the gate.
14 D EDMUND: Already?
15 D QUENTIN: Six a.m., he said.
16 D LIORA: It's four-thirty.
17 D QUENTIN: They like to get a good spot.
18 A ¶ He opens an envelope.
19 A Reads.
20 A Closes it.
21 A She turns, wipes her hands on her apron, sits across from him.
22 A Neither speaks.
23 D EDMUND: Your mother loved this kitchen.
24 D LIORA: She hated the stove.
25 D EDMUND: She hated the stove, yes.
26 D QUENTIN (awkward): I'll start with the tractor.
27 D LIORA: Quentin, wait.
28 D QUENTIN: Ma'am?
29 D EDMUND: Let him go, Liora.
30 D LIORA: He doesn't have to.
31 D EDMUND: It's his job.
32 D QUENTIN: It's all right.
33 D EDMUND: Sit down, son.
34 D QUENTIN: I'd rather stand.
35 A ¶ He stands.
36 A They sit.
37 A The kitchen clock ticks.
38 A Outside, an engine idles.
39 A A truck door slams.
40 A ¶ He pushes the stack of envelopes to the middle of the table.
41 A She takes one.
42 A Opens it.
43 A Reads.
44 A Her mouth tightens.
45 A She folds it small.
46 A ¶ She stands and fills the kettle.

### SCENE s02441 | INT. DRIVE-THROUGH TAXIDERMY SHOP - DAY
Detected names (may be incomplete or contain aliases): CLERK, CUSTOMER, DARNELL, HORTENSE, KEVIN, IMPATIENT DRIVER
1 A ¶ A window with a menu board: "MOUNTS WHILE YOU WAIT."
2 A Behind it, shelves of glassy-eyed squirrels.
3 A ¶ CLERK (19, headset, name tag hidden by a lanyard) leans out of the window.
4 A A CUSTOMER (60s, sunglasses, trucker cap) idles at the curb holding a shoebox.
5 D CLERK: Welcome to Stuff It. What can I stuff for you?
6 D CUSTOMER: My cat.
7 D CLERK: Is he deceased?
8 D CUSTOMER: She is. Hortense.
9 D CLERK: Sorry for your loss. I'm Darnell.
10 A ¶ Darnell takes the shoebox.
11 A Peeks inside.
12 A Winces.
13 D DARNELL: Rigor?
14 D HORTENSE: Three days.
15 A ¶ A phone rings behind the counter.
16 A Darnell grabs it.
17 D KEVIN [V.O.] (over phone, shouting): Darnell, did you tell the customer about the surcharge?
18 D DARNELL: What surcharge?
19 D KEVIN [V.O.]: The cat surcharge! Forty dollars!
20 A ¶ Darnell holds the phone out the window.
21 A Hortense stares at it.
22 D HORTENSE: Forty dollars to stuff my cat?
23 D DARNELL: Per whisker.
24 D HORTENSE: That's not funny.
25 D DARNELL: No, ma'am. It's company policy.
26 A ¶ A horn blares behind the truck.
27 D IMPATIENT DRIVER [O.S.]: Hey! Some of us have raccoons waiting!
28 A ¶ Hortense does not move.
29 A Neither does Darnell.

### SCENE s01577 | INT. COUNTY COURTHOUSE - STAIRWELL LANDING - DAY
Detected names (may be incomplete or contain aliases): ATTORNEY SIMONE BELLAMY-OKONKWO, DEE, PRUITT, BAILIFF OSEI TEMPLETON, DISTRICT ATTORNEY PRUDHOMME LACROIX
1 A ¶ Marble.
2 A Echo.
3 A A broken radiator ticking.
4 A ¶ ATTORNEY SIMONE BELLAMY-OKONKWO (30s, charcoal suit, briefcase like a shield) paces.
5 A Phone to ear.
6 A Voicemail again.
7 A ¶ Across the landing, her client DARNELL "DEE" PRUITT (20s, borrowed tie, handcuffs hidden under a jacket draped over his wrists) sits on a bench, jaw tight.
8 A A bailiff, BAILIFF OSEI TEMPLETON (50s, belly, patience), stands guard.
9 D SIMONE: Pick up, Judge. Pick up.
10 D DEE: He's not going to pick up.
11 D SIMONE: Be quiet and memorize your answers.
12 D DEE: I did.
13 D SIMONE: Again.
14 D DEE: I was home at nine. My cousin brought the pizza. My cousin is gone now.
15 D SIMONE: Gone where?
16 D DEE: Gone gone.
17 A ¶ Simone hangs up.
18 A Stares at him.
19 A The radiator clanks.
20 A Templeton shifts his weight, glances at his watch, clears his throat, then looks at the ceiling as if to give them privacy.
21 A ¶ The stairwell door slams open.
22 A Footsteps below, fast, then up.
23 A ¶ DISTRICT ATTORNEY PRUDHOMME LACROIX (50s, silver hair, voice like warm gravel) arrives on the landing with a file under his arm.
24 A He stops.
25 A Smiles at no one in particular.
26 D LACROIX: Counsel. A word.
27 D SIMONE: Not without a witness.
28 D LACROIX: The bailiff is a witness.
29 D TEMPLETON: I'm furniture, sir.
30 D LACROIX: We have a recording from the pizza shop.
31 A ¶ Dee goes rigid.
32 A Simone doesn't move.
33 A Lacroix slides a tablet out of his file, taps it, holds it up.
34 A Grainy footage: a delivery counter, a man in a hoodie, a timestamp at 9:14.
35 D SIMONE: That's not my client.
36 D LACROIX: Isn't it?
37 A ¶ Dee lunges up from the bench.
38 A The jacket slips.
39 A The cuffs flash.
40 A Templeton catches his elbow and Simone puts a hand flat on Dee's chest.
41 A Lacroix steps back, the tablet falling, clattering down the marble steps.
42 D SIMONE: Sit down. Now.
43 A ¶ Dee sits.
44 A Breathing hard.
45 A Simone turns to Lacroix.
46 D SIMONE [CONT'D]: That footage has no chain of custody.
47 D LACROIX: Then why did he flinch?
48 D SIMONE: Because you're standing six inches from his face, Prudhomme.
49 A ¶ A pause.
50 A Lacroix retrieves the tablet from the stairs with a wince at the cracked screen, tucks it away, and exhales.
51 D LACROIX: Plea's still on the table. Ten minutes.
52 A ¶ He exits.
53 A Templeton sighs.
54 D TEMPLETON: Never seen a man look so pleased about a broken screen.
55 A ¶ Simone sits next to Dee.
56 A For the first time, she lets her shoulders drop.

### SCENE s00633 | INT. FERRY GALLEY KITCHEN - EVENING
Detected names (may be incomplete or contain aliases): PHILOMENA OKAFOR-BRANDT, YOUNG MAN, LEO
1 A ¶ A steel counter, a rattling stockpot, windows fogged by the steam.
2 A The boat rolls gently.
3 A ¶ PHILOMENA OKAFOR-BRANDT, seventies, the ferry's cook, stirs without looking.
4 A A YOUNG MAN, twenties, stands at the galley door, soaked, holding a small suitcase against his chest.
5 D PHILOMENA: We're closed to the public.
6 D YOUNG MAN: I'm not the public.
7 A ¶ She turns.
8 A She sees his face.
9 A The ladle stays in her hand, dripping.
10 D PHILOMENA: You have your father's jaw.
11 D YOUNG MAN: That's what Mum said.
12 D PHILOMENA: Sit.
13 A ¶ He does.
14 A She ladles soup into a mug and sets it before him, her hand trembling for an instant over the rim.
15 D PHILOMENA [CONT'D]: Name.
16 D YOUNG MAN: Leo.
17 D PHILOMENA: Leopold.
18 D LEO: Leo.
19 D PHILOMENA (over him): I was going to say it's a fine name.
20 D LEO: You didn't know I existed.
21 D PHILOMENA: I knew every day.
22 A ¶ They both stop.
23 A They both stare into the soup.
24 A The ferry's horn sounds, low and long, and the cups on the shelf chime against their hooks.
25 A ¶ Leo takes up the spoon, and Philomena sits down across from him at last.
26 A Their hands meet on the counter, and neither moves away.

### SCENE s00495 | INT. CAPSIZED SAILBOAT - UPSIDE-DOWN CABIN - NIGHT
Detected names (may be incomplete or contain aliases): LAKSHMI VENKAT, OTIS BRANNIGAN, HENRIK SOLBERG
1 A ¶ Hull turned to ceiling.
2 A Black water at knee height, sloshing.
3 A A galley stove hangs overhead like a bat.
4 A One headlamp.
5 A ¶ LAKSHMI VENKAT (30s, navigator, orange float coat) clings to a bunk rail.
6 A Water to her ribs.
7 A Breath fogging.
8 A ¶ OTIS BRANNIGAN (50s, skipper, split eyebrow) wedges himself against the companionway, shoulder to the hatch.
9 A ¶ Third: HENRIK SOLBERG (20s, deckhand, teeth chattering) pulls himself up on a pipe cot.
10 D OTIS: Count off.
11 D LAKSHMI: One.
12 D HENRIK: Two.
13 D OTIS: Three. Good. Air?
14 D LAKSHMI: We've got maybe an hour.
15 D HENRIK: Less. I can taste it.
16 A ¶ Otis slams the hatch with his shoulder.
17 A Water spits through the seams.
18 A Lakshmi swings the headlamp to the porthole, where something white and heavy bobs against the glass, and Henrik grabs a boat hook off the wall and jabs at the hatch latch while Otis hauls himself up the ladder, and the whole hull rolls another few degrees, tipping a gush of black over all three of them.
19 D LAKSHMI: It's moving!
20 D OTIS: Hold on!
21 D HENRIK (overlapping): We're going down!
22 D LAKSHMI (overlapping): We're not going down, we're settling!
23 D OTIS: Both of you, quiet!
24 A ¶ They go quiet.
25 A The hull ticks.
26 A Somewhere far above, faint through steel: an engine.
27 D HENRIK: Is that...
28 D OTIS: Shh.
29 D LAKSHMI: It's a ship.
30 D OTIS: Bang the hull. Everyone.
31 A ¶ They bang the hull with fists, with the boat hook, with a skillet from the galley.
32 A Three rhythms, three desperate voices.
33 A The engine slows.
34 A Stops.
35 A ¶ Silence.
36 A Then, from above: three knocks.

### SCENE s01197 | INT. FISH CANNERY - NIGHT SHIFT - NIGHT
Detected names (may be incomplete or contain aliases): NELL PARADIS, SHAPE, CELESTINE PARADIS
1 A ¶ A steel cavern of conveyors, hooks, and wet concrete.
2 A Fluorescents hum.
3 A The belts are stopped, but the smell lingers: brine, blood, tin.
4 A ¶ NELL PARADIS (30s, hairnet, rubber apron) sweeps the floor between two conveyor lines.
5 A She works with a metronome rhythm.
6 A ¶ At the far end, a figure stands motionless in the shadow of a retort oven.
7 A A SHAPE in a rubber coat, hood up, face hidden.
8 D NELL: Hello? Shift's over. You can't be back here.
9 A ¶ The shape doesn't move.
10 A Nell stops sweeping.
11 A She lifts the broom like a staff.
12 D NELL [CONT'D]: Union rep? Inspector?
13 A ¶ The shape takes a step.
14 A Water drips from its sleeves.
15 A Nell backs up against a belt and her hand brushes a steel hook swinging on its chain.
16 D SHAPE (softly): Nell.
17 D NELL: How do you know my name?
18 D SHAPE: It's on your apron.
19 A ¶ She glances down.
20 A Yes.
21 A Embroidered across the chest.
22 A She relaxes a fraction, then stiffens again.
23 D NELL: That doesn't explain why you're standing in the dark.
24 A ¶ The shape moves into the fluorescent light.
25 A The hood falls back.
26 A A woman's face, pale, lined, eyes fixed.
27 D NELL [CONT'D] (whisper): Mama?
28 A ¶ Nell's mother, CELESTINE PARADIS (60s, drowned decades ago), stands in the aisle, water pooling at her boots.
29 D CELESTINE: Do you still sing while you work?
30 A ¶ Nell shakes her head.
31 A Her hand slides along the belt.
32 D CELESTINE [CONT'D] (a little sadly): You used to.
33 A ¶ She holds out a hand.
34 A Nell takes a step.
35 A Then she freezes.
36 A Behind the figure, a second shape detaches from the shadows.
37 A A man's.
38 A Tall, dripping.
39 A Same coat.
40 D NELL: Who is that?
41 D CELESTINE: Your father.
42 A ¶ Nell drops the broom.
43 A The belts begin to move on their own.
44 A The hooks swing.
45 A The lights flicker, then steady.
46 D NELL (shaking): You're both dead.
47 D CELESTINE: Yes. But it's still your shift.
48 A ¶ The man steps forward and she sees his face.
49 A It is hers.
50 A The same eyes, the same jaw.
51 A She stumbles back.
52 D NELL: No.
53 D CELESTINE: Nell. We were just waiting for you to come home.
54 A ¶ The belts accelerate.
55 A Nell turns and runs, boots slapping wet concrete.
56 A The hooks swing in her wake, clanging softly, and the whole cannery begins to hum with a lullaby neither of the dead is singing.

### SCENE s01546 | INT. COUNTY COURTHOUSE - BASEMENT HOLDING CELL CORRIDOR - DAY
Detected names (may be incomplete or contain aliases): ATTORNEY SABINE ROTHSCHILD-OKONJO, DEE, VASQUEZ-IBEKWE, WOMAN IN GREY, NICOLA
1 A ¶ Pipes along the ceiling.
2 A Water stains on cinderblock.
3 A A steel bench bolted to the wall.
4 A A single bulb in a cage buzzes like a trapped insect.
5 A ¶ ATTORNEY SABINE ROTHSCHILD-OKONJO, 40s, in a navy suit with a crease worn in the elbow, stands with her briefcase held against her chest.
6 A Across from her, behind a steel mesh gate, a young woman in county orange paces: DEMETRIA "DEE" VASQUEZ-IBEKWE, 20s, hair scraped back, eyes red.
7 A ¶ A third woman sits on the bench by the gate, hunched, anonymous in a grey cardigan, hands clasped.
8 A THE WOMAN IN GREY says nothing.
9 A She does not look up.
10 D SABINE: Dee. Sit.
11 D DEE: I can't.
12 D SABINE: You've been standing since six.
13 D DEE: They put me on the bench, I think about the bench.
14 D SABINE: Then think about me.
15 A ¶ Dee halts.
16 A Faces her.
17 A Her fingers curl through the mesh.
18 D DEE: She told them it was me.
19 D SABINE: Who?
20 D DEE: Her. The one who works with me. She told them I took the money.
21 D SABINE: Nicola?
22 D DEE: Nicola.
23 D SABINE: She did not tell them. She was subpoenaed.
24 D DEE: Same thing.
25 D SABINE: It is not.
26 A ¶ The Woman in Grey lifts her head.
27 A Her face is plain, composed, unreadable.
28 A She glances at Dee, then at Sabine, then away.
29 D DEE [CONT'D]: Who is she?
30 D SABINE: I don't know.
31 D DEE: Is she with you?
32 D SABINE: No.
33 D DEE: Then why is she in here?
34 A ¶ The Woman in Grey stands.
35 A Smooths her cardigan.
36 D WOMAN IN GREY: Because I've been waiting a very long time to say something to you.
37 D SABINE: This is a private consultation.
38 D WOMAN IN GREY: Then let me be private.
39 A ¶ She steps up to the gate.
40 A Dee takes a half step back.
41 A The bulb flickers.
42 D WOMAN IN GREY [CONT'D]: My name is Nicola Halloran-Eze.
43 D DEE (quietly): No.
44 D NICOLA: Yes.
45 A ¶ Sabine turns the briefcase flat against her chest like a shield.
46 D SABINE: Ms. Halloran-Eze, I must insist--
47 D NICOLA: I took the money.
48 A ¶ Silence.
49 A Pipes tick overhead.
50 A Dee's mouth opens.
51 A Nothing comes out.
52 D NICOLA [CONT'D]: I told them it was you because I thought you'd be believed. Because you were younger. You'd have time.
53 D DEE: Time.
54 D NICOLA: To recover. I was going to confess before the trial.
55 D DEE: It's Thursday.
56 D NICOLA: I know what day it is.
57 A ¶ Sabine steps between them.
58 A She holds up both palms, one to each side.
59 D SABINE: Ms. Halloran-Eze, you do not have to say another word.
60 D NICOLA: I'm done being told what I don't have to say.
61 D SABINE: This is a confession. In a holding corridor. In front of the defendant.
62 D NICOLA: In front of her counsel. That makes it legal, doesn't it?
63 D SABINE (a long beat): It makes it extraordinary.
64 A ¶ Dee slides down the mesh.
65 A Sits on the concrete floor, her orange knees drawn up.
66 D DEE (to no one): I told my mother it was a mistake.
67 D SABINE: Dee, don't speak.
68 D DEE (still to no one): I told her. I told her.
69 A ¶ Nicola presses her forehead to the steel.
70 A A guard's keys jingle somewhere beyond the corridor, and a door clangs.
71 D SABINE: Nicola. Will you repeat that to the judge?
72 D NICOLA: At two o'clock.
73 D SABINE: Will you repeat it to the prosecutor?
74 D NICOLA: If she'll listen.
75 D SABINE: She'll listen.
76 A ¶ Sabine hands her a card from her breast pocket.
77 A Nicola takes it.
78 A Reads it.
79 A Folds it into the cardigan.
80 A ¶ Dee lifts her head.
81 A The bulb steadies.
82 A For the first time since the scene began, she is still.

### SCENE s00976 | INT. SYNERGY DEPARTMENT - FORMER FUNERAL HOME - MORNING
Detected names (may be incomplete or contain aliases): PELLINGHAM, GLORIA, SPUD, ADAEZE
1 A ¶ Cubicles line the old viewing room.
2 A A faux-brass chandelier.
3 A A banner reads "WE'RE ALL FAMILY HERE."
4 A Coffins serve as supply cabinets.
5 A ¶ MR. PELLINGHAM (50s, bow tie, sweating) stands on a velvet kneeler holding a clipboard.
6 A GLORIA (40s, reading glasses on a chain) sorts paperclips.
7 A SPUD (30s, hoodie) eats cereal from a casket lid.
8 A ADAEZE (20s, headset, razor eyes) types without looking.
9 D MR. PELLINGHAM: People! People! Today we pivot.
10 D GLORIA: We pivoted yesterday, Mr. Pellingham.
11 D SPUD: Twice. Before lunch.
12 D MR. PELLINGHAM: Spud, today we pivot to a pivot.
13 D ADAEZE: Is that a metric?
14 D MR. PELLINGHAM: Adaeze, it's a mindset.
15 D GLORIA: What happened to the mindset?
16 D SPUD: It got laid off.
17 D MR. PELLINGHAM: Nobody got laid off. We are right-sizing the horizon.
18 D ADAEZE: Gloria, did he say horizon?
19 D GLORIA: He said horizon.
20 D MR. PELLINGHAM: I am going to need everyone's quarterly aspirations by noon.
21 D SPUD: Mr. Pellingham, I only have a quarterly nap.
22 D GLORIA: Spud!
23 D ADAEZE: Put it in the shared folder.
24 D MR. PELLINGHAM: Thank you, Adaeze.
25 D SPUD: He thanked her. Mark the calendar.
26 D GLORIA: Mark it. Under "Funeral".
27 A ¶ Mr. Pellingham looks at the banner.
28 A Climbs down.
29 A Sighs.
30 D MR. PELLINGHAM: Friends, let's just have cake.
31 D SPUD: Is it from the last funeral?
32 D MR. PELLINGHAM: It's... lemon.

### SCENE s01746 | INT. AIRPLANE HANGAR - ROLLER DERBY TRACK - NIGHT
Detected names (may be incomplete or contain aliases): BEX LUNDQVIST, TAMSIN FALL, KALANI AKANA, COACH RUIZ
1 A ¶ A banked oval of painted concrete.
2 A Folding chairs.
3 A A rusting 747 fuselage looms behind the bleachers.
4 A ¶ Four skaters huddle at the bench, sweating through their jerseys.
5 A BEX LUNDQVIST (30s, jammer, star on her helmet).
6 A TAMSIN FALL (20s, blocker, bruised shin).
7 A KALANI AKANA (30s, captain, scarred knuckles).
8 A COACH RUIZ (50s, gravel voice, whistle, a stopwatch) paces in front of them.
9 D COACH RUIZ: Eight seconds, Bex. Eight seconds you stood in the pack and counted your own feet.
10 D BEX: I was reading the wall.
11 D COACH RUIZ: The wall isn't moving.
12 D BEX: Neither was I.
13 D KALANI (to the team): Listen up. Down by nine. Two minutes. Tam, you take the inside. Bex, you go on my whistle.
14 D TAMSIN: Whose whistle?
15 D KALANI: Mine.
16 D TAMSIN: You don't have a whistle.
17 D COACH RUIZ (muttering): Dear God.
18 D KALANI: I will make a noise like a whistle.
19 D BEX: Can you make it loud?
20 D KALANI: I can make it louder than the coach.
21 D COACH RUIZ: That's not hard.
22 D TAMSIN (quiet, to herself): I'm gonna throw up. I'm gonna throw up on the 747.
23 D KALANI: Tamsin. Look at me.
24 D TAMSIN: I'm looking.
25 D KALANI: You're going to hit the wall at forty miles an hour, and you're going to get back up, and you're going to do it again until they stop counting.
26 D TAMSIN: And if I don't?
27 D KALANI: Then I'll hit it for you.
28 A ¶ Coach Ruiz clicks the stopwatch.
29 A The crowd, small and loud, begins to stomp.
30 D COACH RUIZ: Go. Go, go, go.
31 A ¶ They skate out in a rolling blur, wheels thunder on the concrete, and the 747 watches from the dark.

### SCENE s00817 | INT. CRUISE SHIP "SERENISSIMA" - CASINO CASHIER CAGE - NIGHT
Detected names (may be incomplete or contain aliases): HENRY GAUTHIER, WOMAN IN FEATHERED MASK, FEATHERED MASK, FINNEGAN MBATHA, ZINNIA
1 A ¶ A brass cage with a tiny window, stacks of chips behind it, a rotating security camera.
2 A Beyond, the casino floor chimes and flashes.
3 A ¶ HENRY GAUTHIER, 50s, cashier in a burgundy vest, counts chips with a practiced thumb.
4 A Behind the glass, a WOMAN IN A FEATHERED MASK, 30s, waits in a silver gown, an ornate clutch pressed to her ribs.
5 A She taps the counter twice.
6 D WOMAN IN FEATHERED MASK: Cash me out, please.
7 D HENRY: Of course, madam. How much?
8 A ¶ She slides a rack of plaques through the window.
9 A He counts.
10 A His eyebrows go up.
11 D HENRY [CONT'D]: That is... a great deal, madam.
12 D WOMAN IN FEATHERED MASK: It was a lucky night.
13 D HENRY: Very lucky. Name for the receipt?
14 A ¶ She hesitates.
15 A Her clutch shifts.
16 A A muffled cough comes from the hallway behind her.
17 A A man in a waiter's jacket is leaning there, FINNEGAN MBATHA, 30s, one hand inside his tray cloth.
18 D ZINNIA: Zinnia Delacroix-Obi.
19 D HENRY (writing): Delacroix. Spelled the usual way?
20 D ZINNIA: The only way.
21 A ¶ He slides a form through.
22 A She signs.
23 A Behind her, Finnegan nudges a service cart, rolling it quietly against the cage door, while Henry stacks bills into an envelope and licks the flap.
24 A She slips her mask up an inch, scanning the camera in the ceiling, and he steps from the doorway with the tray, the cloth peeling back from a small black pistol.
25 D FINNEGAN: Mr. Gauthier. Don't.
26 A ¶ Henry freezes mid-lick.
27 A The envelope droops.
28 D HENRY: I see.
29 D ZINNIA: He's very polite, isn't he?
30 D FINNEGAN: I try.
31 D HENRY: Madam, I have a family.
32 D ZINNIA: So did the last man.
33 A ¶ Henry's hands go up.
34 A Finnegan steps in, kicks the cart wide.
35 A Zinnia reaches through the window and takes the envelope, then the plaques, then a second tray of cash from under the counter.
36 A The camera swivels toward them.
37 D FINNEGAN: Camera.
38 A ¶ Zinnia tosses her clutch.
39 A It strikes the lens and a puff of grey fills the lens.
40 A The red light dies.
41 D ZINNIA: Two minutes.
42 D FINNEGAN: Quiet, now.
43 A ¶ They slip out.
44 A Henry sits, slowly, on his stool.
45 A Pulls a handkerchief from his vest.
46 A Dabs his brow.
47 A Then, from beneath the register, he lifts a very small silver bell and rings it twice.

### SCENE s01995 | INT. GLASSBLOWER'S FURNACE HALL, MURANO - NIGHT
Detected names (may be incomplete or contain aliases): MAESTRO ZUANNE BAROVIER-ADEYEMI, SERENELLA BAROVIER, ALVISE CONTARINI-DIAZ
1 A ¶ Venice, 1740.
2 A A low arched hall lit by the red mouth of a great furnace.
3 A Racks of blowpipes.
4 A Shelves of unfinished goblets glinting like frozen water.
5 A The air shimmers with heat.
6 A ¶ MAESTRO ZUANNE BAROVIER-ADEYEMI (50s, leather apron, burned forearms) lifts a glowing gather of glass from the furnace on the end of a pipe.
7 A Across the hall, his daughter SERENELLA BAROVIER (20, hair bound in a kerchief, steady hands) stands over a marver with a pair of jacks.
8 A Between them, trembling in the heat, stands a young NOBLEMAN: ALVISE CONTARINI-DIAZ (25, velvet coat, silk stockings, wig askew), who has no business here at this hour.
9 A ¶ Zuanne turns the pipe.
10 A Serenella shapes the neck of a half-formed vase.
11 A Alvise steps closer; she shifts her stance between him and her father without looking up.
12 D ZUANNE: You are in my light, Signor.
13 D ALVISE: I beg your pardon, Maestro.
14 D ZUANNE: Move.
15 D ALVISE: I wish to speak to your daughter.
16 D ZUANNE: She is working.
17 D ALVISE: I will wait.
18 A ¶ Serenella lowers her jacks.
19 A Zuanne lowers the pipe.
20 A They look at each other across the hall, and then, as one, they look at Alvise.
21 D SERENELLA (together): Signor, it is not wise.
22 D ZUANNE (together): Signor, it is not wise.
23 A ¶ Alvise swallows.
24 A Then, with great ceremony, he goes down on one knee in the glassworks sawdust.
25 A The furnace roars.
26 D ALVISE: Maestro. I ask for your daughter's hand.
27 A ¶ Zuanne's gather falls from the pipe and shatters on the stone in a spray of molten glass.
28 A Serenella drops the jacks.
29 A Alvise throws an arm over his face.
30 A They all scramble back as the glass pools and cools and goes opaque.
31 A ¶ Silence.
32 A A long one.
33 D ZUANNE (low): You proposed in a glassworks.
34 D ALVISE: It seemed the honest place.
35 D SERENELLA: You could have asked in the church.
36 D ALVISE: I asked in the church. Your father's apprentice said you were here.
37 D SERENELLA: I am always here.
38 D ALVISE: I know. It is why I love you.
39 A ¶ Serenella looks at her father.
40 A Zuanne looks at the floor, at the dark ruin of his gather.
41 A His mouth works.
42 A Then he picks up a new pipe and walks to the furnace and thrusts it in.
43 D ZUANNE: Hold the door.
44 D ALVISE: Maestro?
45 D ZUANNE: If you wish to marry my daughter, you will learn to hold the door.
46 A ¶ Alvise scrambles up.
47 A Serenella almost smiles.
48 A He takes the iron handle of the furnace door, and the heat strikes his face, and he does not let go.

### SCENE s00502 | INT. CATERING VAN - PARKED OUTSIDE A WEDDING VENUE - DAY
Detected names (may be incomplete or contain aliases): MIRKO DELL'ORTO, TAMSIN OKPARA, BRIGITTE LACROIX-HAYES, LEONARD HAYES
1 A ¶ A white panel van with a three-tier cake lashed to the floor in a plexiglass box.
2 A Crumb-dusted dashboard.
3 A A wilted bouquet in a cup holder.
4 A The engine ticks as it cools.
5 A ¶ MIRKO DELL'ORTO (40s, pastry chef, chef's whites unbuttoned) sits in the driver's seat gripping the wheel.
6 A Beside him, his assistant TAMSIN OKPARA (20s, hair net, rubber gloves), holds a clipboard against her knees.
7 A In the back, wedged between trays of sugar flowers, sit the groom's mother, BRIGITTE LACROIX-HAYES (60s, mother-of-the-groom, fascinator tilted), and her husband LEONARD HAYES (60s, brown suit, hands clasped over his belly).
8 A ¶ Nobody speaks.
9 D MIRKO (finally): It's a very nice cake.
10 D BRIGITTE: It's leaning.
11 D MIRKO: It is a Tower of Pisa style.
12 D BRIGITTE: It's a tower of Pisa, Mirko, in the sense that it's falling over.
13 D LEONARD: Brigitte.
14 D BRIGITTE: Don't "Brigitte" me.
15 D TAMSIN: Chef, I can fix it with a toothpick.
16 D MIRKO: Tamsin.
17 D TAMSIN: Three toothpicks and a wad of buttercream.
18 D MIRKO: No toothpicks.
19 D TAMSIN: A skewer, then.
20 D MIRKO: Tamsin, no.
21 A ¶ She puts down the clipboard.
22 A She reaches over the seat, pulls a long bamboo skewer from a drawer, and gives it a look.
23 D BRIGITTE: What's she doing?
24 D LEONARD: She's building a cake.
25 D BRIGITTE: It's already built.
26 D LEONARD: It's been built wrongly.
27 D BRIGITTE: Leonard, do you ever listen to yourself?
28 D LEONARD: Every morning, dear.
29 A ¶ Mirko turns around in his seat.
30 A He regards the cake the way a general regards a failing front.
31 D MIRKO: Okay. We do this in five minutes. Tamsin, the skewer. Leonard, hold the top tier.
32 D LEONARD: Me?
33 D MIRKO: You have steady hands.
34 D LEONARD: I have a tremor.
35 D MIRKO: Then use the tremor.
36 D BRIGITTE: Mirko, I swear to God.
37 D MIRKO: Madame, I have never lost a cake.
38 D BRIGITTE: You are losing this one.
39 D MIRKO: I am not losing it. I am fixing it.
40 A ¶ He climbs into the back.
41 A The van rocks.
42 A Leonard, uncertain, reaches out.
43 A Tamsin kneels.
44 A The skewer slides in at an angle, slowly, and the top tier begins to straighten, one grudging degree at a time.
45 D LEONARD: It's moving.
46 D TAMSIN: It's working.
47 D BRIGITTE (under her breath): Mother of God.
48 D MIRKO: Hold still.
49 D LEONARD: I am still.
50 D MIRKO: You're breathing.
51 D LEONARD: It's a vital function.
52 A ¶ The tier snaps into place.
53 A A little rain of sugar pearls patters to the floor.
54 A All four of them freeze, hands in the air, as though a bird has landed on them.
55 D BRIGITTE: Well.
56 D MIRKO: Well.
57 D TAMSIN: It's straight.
58 D LEONARD: It's straight.
59 D BRIGITTE (quietly): Thank you, Mirko.
60 D MIRKO: Madame.
61 A ¶ He nods.
62 A He climbs back out.
63 A Brigitte straightens her fascinator.
64 A Leonard wipes his palms on his trousers.
65 A Tamsin sits back, flushed, still holding the skewer like a baton.
66 A ¶ The back door of the van swings open.
67 A A bright, noisy hall beyond.
68 A A clipboard bangs twice on the door frame, and a bored voice somewhere says the cake team is up.
69 D MIRKO: We're ready.
70 A ¶ He looks at the cake.
71 A It leans, very slightly, again.
72 D MIRKO [CONT'D] (whispering): Don't breathe.

### SCENE s02083 | INT. HOTEL ASTORIA SWITCHBOARD ROOM - NIGHT (1927)
Detected names (may be incomplete or contain aliases): ADELAIDE PRUITT-ROSS, BELLHOP, FLOYD, CLARENCE, HOLCOMB
1 A ¶ A narrow room behind the lobby.
2 A A tall brass switchboard glows with a hundred tiny bulbs.
3 A A desk lamp, a half-eaten sandwich, a cup of cocoa going cold.
4 A ¶ ADELAIDE PRUITT-ROSS, 20s, a headset over her marcelled waves, plugs a cable into a jack with practiced calm.
5 A She hums.
6 A A BELLHOP named FLOYD, 17, lingers in the doorway, hat in hand, watching her.
7 D FLOYD: Miss Adelaide, the gentleman in 412 wants his bags brought up and his brandy brought down.
8 D ADELAIDE: That's the wrong way round.
9 D FLOYD: That's what he said.
10 D ADELAIDE: Then he's had too much brandy.
11 A ¶ She plugs another cable.
12 A A bulb winks out.
13 A Floyd steps into the room to see better, bumps the desk, and the cocoa cup slides to the edge.
14 A Adelaide catches it without looking, and in the same motion her other hand flicks a switch.
15 A A voice crackles on the line.
16 D CLARENCE [O.S.] (over phone): Operator? Operator, I'd like the front desk, please.
17 D ADELAIDE (smooth): One moment, sir. Connecting.
18 A ¶ She presses a key.
19 A The voice is cut off.
20 A She waits a beat, then removes her headset and sets it on the desk.
21 D FLOYD: Who was that?
22 D ADELAIDE: Nobody. A man asking for the front desk.
23 D FLOYD: Isn't that your job?
24 D ADELAIDE: Tonight, it's my pleasure to be difficult.
25 A ¶ She takes a bite of the sandwich.
26 A Floyd stares.
27 A Then the board lights up all at once, every bulb at once, a Christmas tree of demand.
28 A Adelaide stands.
29 A The headset is back on her head before she has finished chewing.
30 D ADELAIDE [CONT'D] (into the mouthpiece): Hotel Astoria, how may I direct your call?
31 D CLARENCE [O.S.] (over phone): Miss, I am the man in 412 and I would like it noted that I have been cut off three times.
32 D ADELAIDE: Noted, sir.
33 A ¶ She flips a second switch with her elbow.
34 A A new voice cuts in, dry and tired.
35 D HOLCOMB [O.S.] (over phone): Front desk. Mr. Holcomb speaking. Adelaide, is that man still complaining?
36 D ADELAIDE: He is, Mr. Holcomb. Quite warmly.

### SCENE s01263 | INT. PLANETARIUM - DOME THEATRE - NIGHT
Detected names (may be incomplete or contain aliases): LAVINIA MORROW-ESPOSITO, ELIAN TREMAINE
1 A ¶ A hushed circular hall.
2 A Rows of reclining seats fan out toward a central projector like a black beetle.
3 A Overhead, a star field turns slowly on the white dome, thousands of points of light so soft they seem to breathe.
4 A The air smells of carpet and warm dust.
5 A ¶ Rows of empty seats.
6 A Not quite empty.
7 A ¶ At the lectern at the front stands LAVINIA MORROW-ESPOSITO (30s, astronomer, wool cardigan, a laser pointer lit in her hand).
8 A She is rehearsing.
9 A She has done this speech a hundred times and has never said it right.
10 A ¶ In the back row, half in shadow, sits ELIAN TREMAINE (30s, night guard, flashlight dark in his lap).
11 A He came in to check the doors and stayed.
12 D LAVINIA (to the empty seats): Good evening, everyone. Welcome to the Southern Sky.
13 A ¶ She sweeps the laser over the dome.
14 A A red dot dances among the stars.
15 D LAVINIA [CONT'D] (to the empty seats): If you look up now, you'll see the constellation we call the Southern Cross.
16 A ¶ She stops.
17 A Lowers the pointer.
18 A Mutters.
19 D LAVINIA [CONT'D] (muttering): Too slow. They'll be asleep by the third star.
20 D ELIAN (from the dark): I wasn't.
21 A ¶ She jumps.
22 A The laser skitters across the dome.
23 A He half stands, flashlight raised like a white flag.
24 D ELIAN [CONT'D]: Sorry. I didn't mean to scare you.
25 D LAVINIA: How long have you been there?
26 D ELIAN: Since Orion.
27 D LAVINIA: That's the second slide.
28 D ELIAN: Is it?
29 D LAVINIA (drily): Then you've missed the introduction.
30 D ELIAN: I liked what I heard.
31 A ¶ She studies him: the grey uniform, the badge, the way he sits with his knees turned out, careful of the seat in front.
32 A He does not look like a man who has ever been in the way.
33 D LAVINIA: I'm supposed to give this to a hundred schoolchildren tomorrow.
34 D ELIAN: You'd be good at that.
35 D LAVINIA: You haven't heard me.
36 D ELIAN: I've heard enough.
37 A ¶ She almost smiles.
38 A Taps the lectern with the pointer.
39 A The stars drift.
40 D LAVINIA: Would you stay?
41 D ELIAN: For the rehearsal?
42 D LAVINIA: For the audience.
43 A ¶ He sits back.
44 A Lays the flashlight on the carpet.
45 D ELIAN: Go ahead.
46 A ¶ She faces the dome.
47 A Takes a long breath.
48 A Her voice, when it comes, is lower, slower, as though she were speaking to a single person.
49 D LAVINIA (to the dome): Good evening. Tonight we begin with a very old idea. That what you see up there is not above you but behind you.
50 D ELIAN (softly): Behind?
51 D LAVINIA (to Elian): The light you're looking at left its star before you were born. Some of it before anyone was born.
52 D ELIAN: So it's gone.
53 D LAVINIA: The star may be gone. The light isn't.
54 A ¶ A silence.
55 A The dome turns.
56 A A faint wash of blue drifts across their faces.
57 D LAVINIA [CONT'D] (to herself, barely): Say it. Just say it.
58 D ELIAN: What?
59 D LAVINIA: Nothing.
60 D ELIAN: You were talking to yourself.
61 D LAVINIA: It's a bad habit.
62 D ELIAN: It's a nice one.
63 A ¶ She steps out from behind the lectern.
64 A Walks up the aisle between the seats, the laser dark in her hand, until she is two rows from him.
65 A The dome throws pale constellations over her cardigan.
66 D LAVINIA: Do you know what I do, in the daytime?
67 D ELIAN: I'm guessing you look at things.
68 D LAVINIA: I look at light that's already too late.
69 D ELIAN: That sounds lonely.
70 D LAVINIA: It's the best part of the job.
71 A ¶ He smiles, a little crooked.
72 A She sits down in the row in front of his.
73 A Not beside.
74 A Not far.
75 D LAVINIA [CONT'D] (to the dome): Good evening, and welcome.
76 A ¶ Elian reclines.
77 A Folds his hands over his stomach.
78 A Looks up at the stars, and she looks up with him, and the two of them watch the sky wheel in the dark without saying anything.
79 T FADE OUT.

### SCENE s01272 | EXT. SCHOOL BUS GRAVEYARD - DUSK
Detected names (may be incomplete or contain aliases): PAKS, NAIR, WYATT BOONE, LUCIA ORTEGA
1 A ¶ Forty yellow buses rust nose to tail in a field of dead sunflowers.
2 A Windows gone.
3 A Seats full of weeds.
4 A ¶ PRAKASH "PAKS" NAIR, 16, lanky, glasses, stands on a bus roof with a stolen six-pack.
5 A ¶ WYATT BOONE, 17, buzzcut, football jacket, climbs up after him.
6 A He grins too hard.
7 A ¶ Below, LUCIA ORTEGA, 16, braids, sketchbook under her arm, watches them both.
8 D WYATT: Thought you'd chicken out.
9 D PAKS: So did I.
10 A ¶ Wyatt snatches a can.
11 A Paks grabs it back.
12 A They shove.
13 A The roof BOOMS under their boots.
14 A ¶ Both freeze.
15 A ¶ A siren, far off.
16 A Coming closer.
17 D LUCIA: Cops!
18 A ¶ Wyatt and Paks scramble, tumble down the rear emergency door.
19 A Lucia is already running.
20 A Cans spill in the dust.
21 A ¶ They hit the sunflowers, all three, laughing like idiots.

### SCENE s00153_1 | INT. GONDOLA CABIN - CONTINUOUS
Detected names (may be incomplete or contain aliases): AUGUSTIN LEFEBVRE-MBAYE, ROSALIE TANNENBAUM, KIERAN SZYMANSKI, JASMINE BEAUCHAMP-IYER
1 A ¶ Four people in a space built for ten.
2 A They have been here five hours.
3 A ¶ AUGUSTIN LEFEBVRE-MBAYE, 60s, retired cartographer, wool coat buttoned to the neck, sits in the corner with a thermos, perfectly still.
4 A Opposite him, ROSALIE TANNENBAUM, 30s, a nurse in a puffy yellow jacket, rubs her hands together and breathes into her cupped palms.
5 A ¶ On the floor: KIERAN SZYMANSKI, 20s, backpacker, his leg splinted with a ski pole and a scarf, jaw clenched.
6 A At the window, JASMINE BEAUCHAMP-IYER, 40s, in a business suit and sneakers, pounds on the glass with her fist, then stops, then pounds again.
7 A ¶ The cabin sways.
8 A Ice cracks.
9 A A slow groan runs down the cable.
10 D JASMINE: Anyone else hear that?
11 D AUGUSTIN: It is the cable.
12 D JASMINE: The cable is groaning.
13 D AUGUSTIN: It has been groaning for five hours.
14 D ROSALIE (to Kieran): Does it hurt?
15 D KIERAN: Only when I breathe.
16 D ROSALIE: Then breathe shallow.
17 D KIERAN: Thanks, doc.
18 D ROSALIE: Nurse.
19 D KIERAN: Thanks, nurse.
20 A ¶ Jasmine slumps against the window.
21 A Her breath fogs the glass.
22 A She traces a line with her finger, then wipes it away.
23 D JASMINE: The signal's dead. The radio's dead. The cable is the only thing alive.
24 D AUGUSTIN: There is the thermos.
25 A ¶ He unscrews it.
26 A Pours a capful of steaming tea.
27 A Holds it out to Kieran.
28 A Kieran takes it.
29 A Sips.
30 A Passes it to Rosalie.
31 A She sips.
32 A Passes it to Jasmine.
33 A She hesitates.
34 A Then drinks.
35 A ¶ The cabin lurches.
36 A A long metallic shriek.
37 A Everyone grabs a rail.
38 D ROSALIE: Oh, God.
39 D AUGUSTIN: Be calm.
40 D KIERAN: Is it dropping?
41 D JASMINE: It's swinging.
42 A ¶ The cabin sways wider, wider, a pendulum in the dark.
43 A Then slowly, painfully, it steadies.
44 A Far below, a river laughs.
45 D AUGUSTIN (quietly): The map of this gorge was my last. I measured it in 1974. I always wondered what it looked like from here.
46 A ¶ He pours another capful.
47 A Raises it.
48 D AUGUSTIN [CONT'D]: To the view.
49 A ¶ Nobody answers.
50 A Then Rosalie lifts her hand.
51 A Then Kieran.
52 A Then Jasmine.
53 A ¶ They drink.

### SCENE s01591 | INT. ABANDONED CARNIVAL - HALL OF MIRRORS - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE NAOMI FAIRWEATHER, DETECTIVE CASPIAN ROTH, LUCIA FERREIRA, THE CARNY
1 A ¶ Cracked glass multiplies everything.
2 A A hundred reflections of a hundred flashlights, swimming in the dark.
3 A ¶ Four silhouettes pick through the maze.
4 A DETECTIVE NAOMI FAIRWEATHER (40s, rain jacket, gun at her hip).
5 A Her partner DETECTIVE CASPIAN ROTH (30s, tall, careful).
6 A A hostage, LUCIA FERREIRA (20s, torn dress, hands bound), shoved ahead by the fourth: THE CARNY (50s, grease-stained vest, a pistol, a nervous laugh).
7 D THE CARNY: Don't come closer.
8 D NAOMI: We're not.
9 A ¶ The mirrors show otherwise.
10 A Dozens of Naomis advancing.
11 A The Carny spins, firing at a reflection.
12 A Glass explodes in a silver storm.
13 A ¶ Lucia drops to the floor.
14 A Caspian dives behind a panel.
15 A Naomi flattens against the wall.
16 A The Carny turns, turns again, lost among his own faces.
17 D NAOMI [CONT'D] (low): Caspian. Left.
18 A ¶ He crawls.
19 A The Carny fires again.
20 A Another mirror blows.
21 A Fragments rain down on Lucia, who covers her head.
22 D CASPIAN (whispering): Lucia. Stay low.
23 A ¶ The Carny laughs, high and thin.
24 A Footsteps.
25 A A hundred of them.

### SCENE s01433 | INT. MARINE AQUARIUM - SHARK TUNNEL - NIGHT
Detected names (may be incomplete or contain aliases): VESPER LOWRY, MUNGO TAKAHASHI, PIPS, ADEBAYO, ROSALIND CHEN-MARCH, DUKE ZELENSKY, ILSE VANTERPOOL
1 A ¶ Blue gloom.
2 A Silhouettes of rays drift overhead.
3 A Reflected ripples slide across black-clad figures crouched along the tunnel wall.
4 A ¶ VESPER LOWRY (30s, crew boss, earpiece) taps a panel.
5 A MUNGO TAKAHASHI (40s, safe man, fingers like a surgeon's) kneels at a locked case.
6 A "PIPS" ADEBAYO (20s, tech, tablet glowing on her forearm).
7 A ROSALIND CHEN-MARCH (50s, driver, quiet), watches the corridor.
8 A DUKE ZELENSKY (30s, muscle, nervous) checks his watch.
9 D VESPER: Eyes up. Ninety seconds on the loop.
10 D PIPS: Cameras show tank two. No movement.
11 D DUKE (muttering): Tank two. Sure. Tank two.
12 D MUNGO: Quiet. I'm in.
13 A ¶ A latch clicks.
14 A He lifts out a velvet tray.
15 A Pearls the size of marbles, gleaming.
16 D VESPER: Rosalind, status.
17 D ROSALIND: Clear.
18 A ¶ Footsteps echo.
19 A Everyone freezes.
20 A A shadow lengthens along the curved glass.
21 A ¶ ILSE VANTERPOOL (60s, security guard, cardigan under her uniform, thermos in hand) rounds the corner.
22 A She sees the crew.
23 A Sees the pearls.
24 A Sips her tea.
25 D ILSE: I don't get paid enough for this.
26 D VESPER: Nobody does. Everybody, stay calm.
27 D ILSE: Is there a plan for me?
28 D PIPS (to Vesper, low): She's not on the schedule.
29 D VESPER (to Ilse): There's a plan. You sit. We leave. You call it in in five minutes, with a good story.
30 D ILSE: I have a bad knee.
31 D DUKE: Just sit!
32 A ¶ She sits.
33 A On the floor.
34 A Shark shadows pass over her face.

### SCENE s01412 | INT. ORBITAL STATION KESTREL - AIRLOCK - CONTINUOUS
Detected names (may be incomplete or contain aliases): COMMANDER YUSUF AL-RASHID, ENGINEER PRISCA DELACROIX-NWOKO
1 A ¶ Red emergency light.
2 A The hiss of a failing seal.
3 A Frost spreads across the inner door like creeping fingers.
4 A ¶ COMMANDER YUSUF AL-RASHID, 40s, helmet off, grips a cutting torch with both hands and strains against a warped hatch.
5 A Beside him, ENGINEER PRISCA DELACROIX-NWOKO, 30s, wrenches at a valve with a pipe.
6 A Her breath fogs in the thinning air.
7 A ¶ They work together, shoulders touching, a single frantic machine.
8 A The hatch groans.
9 A A fingertip of vacuum screams through the gap.
10 D YUSUF: Pressure's dropping!
11 D PRISCA: I know!
12 A ¶ They both hit the hatch with their shoulders at the same time.
13 A It shudders but holds.
14 A Yusuf swears.
15 A Prisca swings the pipe once more at the valve and it cracks off its mount, trailing coolant in a silver arc.
16 A ¶ They freeze.
17 D PRISCA [CONT'D] (whispering): That was the last one.
18 A ¶ Yusuf drops the torch.
19 A It floats, turning slowly in the dim red light.
20 A They stare at it.
21 A At each other.
22 A The hatch sighs shut by itself, and the lights go out.

### SCENE s00890 | INT. HOSPITAL SUBBASEMENT - LAUNDRY ROOM - NIGHT
Detected names (may be incomplete or contain aliases): EZEKIEL FAIRWEATHER, PADDY GALLAGHER
1 A ¶ A low, steam-choked cavern.
2 A Industrial washers thump like slow drums.
3 A Sheet-laden carts line the walls in ghostly rows.
4 A Pipes sweat overhead, and the tiled floor is slick with soap and condensation.
5 A A single fluorescent tube buzzes.
6 A ¶ DR. EZEKIEL FAIRWEATHER, 50s, a cardiothoracic surgeon, sits on an overturned laundry bin in rumpled blue scrubs, his tie shoved in his pocket.
7 A Grey stubble.
8 A Hands folded between his knees as if praying.
9 A He has not slept in thirty hours.
10 A He stares at the drain in the floor.
11 A ¶ The doors at the far end swing open and a gurney wheel squeals.
12 A PADDY GALLAGHER, 50s, the night porter, pushes a cart of towels down the aisle.
13 A Barrel-chested, flushed, a green cap pulled over a bald crown.
14 A He stops short at the sight of the doctor.
15 D PADDY: Jesus, Mary and Joseph. Doctor?
16 D EZEKIEL: Don't mind me.
17 D PADDY: You scared the life out of me.
18 D EZEKIEL: Sorry.
19 D PADDY: It's the wrong end of the building for you, sir. The surgeons have their own lounge.
20 D EZEKIEL: I know.
21 D PADDY: Then why--
22 D EZEKIEL: It's loud here.
23 A ¶ Paddy considers this.
24 A He parks the cart.
25 A Pulls a crumpled pack of cigarettes from his pocket, glances up at the smoke detector, and puts them back.
26 D PADDY: Bad one?
27 D EZEKIEL: Seven hours. We lost him on the table.
28 D PADDY: I'm sorry.
29 D EZEKIEL: He was thirty-one.
30 D PADDY: Ah, God.
31 D EZEKIEL: He had a daughter. She was in the waiting room, drawing a horse.
32 D PADDY: Did you tell her?
33 D EZEKIEL: His wife did. I just stood there.
34 A ¶ A washer ends its cycle with a shuddering groan.
35 A Steam breathes out of the vents.
36 A Paddy drags a second bin across the tile and lowers himself onto it with a grunt, so the two men sit knee to knee in the damp.
37 D PADDY: My brother went the same way. Heart.
38 D EZEKIEL: When?
39 D PADDY: Twenty years. The doctors were very kind.
40 D EZEKIEL: That doesn't help, does it?
41 D PADDY: Not on the day.
42 D EZEKIEL (speaking at once; speaking at once): PADDY What does, then? Time, I suppose.
43 A ¶ They both stop.
44 A The ghost of a smile crosses Paddy's face.
45 A Ezekiel laughs, one dry exhale through his nose, and rubs his eyes with the heels of his hands.
46 D PADDY [CONT'D]: You want a towel? They're warm.
47 D EZEKIEL: I'm not crying.
48 D PADDY: Never said you were. They're just warm.
49 A ¶ He passes a folded towel from the cart.
50 A Ezekiel takes it, presses it to his face, and holds it there much longer than a person needs to wipe off sweat.
51 A Paddy gazes politely at a washer.
52 A Time passes in the slow rhythm of the drums.
53 D EZEKIEL (muffled): Thank you.
54 D PADDY: Aye.
55 D EZEKIEL: Does it ever stop? The... carrying it?
56 D PADDY: I wouldn't know, Doctor. I only carry the linen.
57 D EZEKIEL (lowering the towel): Then you're luckier than I am.
58 D PADDY: Maybe. Or I just do the washing so you can do the rest.
59 A ¶ Ezekiel looks at him properly for the first time.
60 A Paddy meets the look without flinching, wide-faced and unhurried.
61 D EZEKIEL: What's your name?
62 D PADDY: Paddy. Paddy Gallagher.
63 D EZEKIEL: Ezekiel.
64 D PADDY: I know. It's on the plaque in the lobby. The one with the donors.
65 D EZEKIEL: I never donated.
66 D PADDY: Your name's on it anyway.
67 A ¶ The ghost of a smile returns.
68 A Ezekiel stands.
69 A He folds the towel into a perfect square and sets it back on the cart, then stands for a moment with his hand on the metal rail.
70 D EZEKIEL: I should go up.
71 D PADDY: They'll keep.
72 D EZEKIEL: Not all of them.
73 D PADDY: No. Not all.
74 A ¶ Ezekiel nods.
75 A He straightens his scrubs, pulls his tie from his pocket, and puts it back again.
76 A At the door he pauses.
77 D EZEKIEL: Paddy.
78 D PADDY: Doctor.
79 D EZEKIEL: Thank you for the towel.
80 D PADDY: Anytime. It's what I'm for.
81 A ¶ The door sighs shut behind the surgeon.
82 A Paddy sits alone in the thrum of the machines.
83 A After a moment he takes out the cigarettes, looks at the smoke detector again, and slowly, decidedly, puts them back.

### SCENE s01793 | INT. PARKING GARAGE - LEVEL P4 - NIGHT
Detected names (may be incomplete or contain aliases): AGENT VIKTORIA NASSAR, JUDE OKAFOR-BRANDT, SILHOUETTE, MIKHAIL TOROSYAN
1 A ¶ Concrete.
2 A Sodium lights.
3 A A drip, somewhere.
4 A A lone black sedan with its engine running.
5 A ¶ AGENT VIKTORIA NASSAR, thirties, crouches behind a pillar with a pistol.
6 A Ten yards away, her partner JUDE OKAFOR-BRANDT, forties, flattens against a van with a briefcase handcuffed to his wrist.
7 A They exchange a look across the gap.
8 D JUDE (whisper): Two minutes.
9 D VIKTORIA: They're early.
10 A ¶ Footsteps.
11 A Heels on concrete.
12 A Viktoria slides back a step and Jude drops low, the briefcase scraping against the van's fender.
13 A A silhouette strides into the light from the stairwell, tall, bareheaded, arms loose.
14 A ¶ The silhouette stops at the sedan and taps on the window.
15 A The window rolls down.
16 D SILHOUETTE: Do you have it?
17 A ¶ A gloved hand passes out a thick envelope.
18 A Viktoria's eyes narrow.
19 A Jude lifts the briefcase an inch and then lowers it.
20 D VIKTORIA (whisper): That's not our guy.
21 D JUDE: Whose guy is it?
22 A ¶ The envelope disappears under the silhouette's coat.
23 A A new figure peels from the shadows behind them, a big man in a hood, MIKHAIL TOROSYAN, fifties, his pistol steady on Viktoria's pillar.
24 D MIKHAIL: Out, please. Hands where I can see them.
25 A ¶ Viktoria rises with her gun down.
26 A Jude steps out from the van with the briefcase held high, wrist chained, as the silhouette turns at last and the light reveals the face of the sedan's driver, a woman with a scar through one eyebrow, who gives them a polite, regretful smile.
27 A ¶ Then the sedan's engine roars, the headlights snap on, Viktoria dives left, Jude dives right, Mikhail fires, the first shot sparking off the pillar, and the sedan lurches forward and clips the van, spinning it into a column with a thunderous crunch.
28 A Glass rains down.
29 A Alarms scream through the garage.
30 A In the confusion, Jude drags himself behind a stack of tires, Viktoria rolls to her feet and sprints for the stairwell, and Mikhail, bleeding from the scalp, fires at both of them without hitting either.
31 A ¶ The sedan screeches up the ramp.
32 A Viktoria hits the stairwell door with her shoulder, barges through, and gone.
33 A ¶ Jude, alone and cuffed to his case, looks up at the swinging sodium lights.
34 D JUDE: Well. That went well.

### SCENE s00125 | INT. STORAGE UNIT 114 - NIGHT
Detected names (may be incomplete or contain aliases): STRANGER, BOY'S VOICE, DESMOND
1 A ¶ Corrugated walls sweat in the heat.
2 A A bare bulb swings from a cord, painting the cartons and a rolled carpet in slow, nauseous arcs.
3 A Dust has settled on everything but the one thing that matters: a battered cassette recorder, its cover scarred with a boy's initials, sitting alone on an overturned milk crate as though somebody wanted it found.
4 A ¶ A STRANGER, 40s, rain-dark coat, a crowbar hanging forgotten from his fist, stands over it.
5 A He crouches, the knees of his trousers dampening on the concrete, and turns the machine over in his hands, and the lid pops, and a tape inside spins as he presses PLAY with a thumb that has not decided whether to tremble.
6 D BOY'S VOICE [V.O.] (tape, crackling): This is Desmond Archer, age eleven, and if you found this, Dad's lock didn't hold.
7 A ¶ The Stranger goes absolutely still.
8 A His breath catches, and in the pause between the tape's hiss and the next word, the bulb steadies, the carpet seems to exhale dust, and the crowbar slips from his hand and rings on the floor.
9 D BOY'S VOICE [V.O., CONT'D] (tape): I put the key under the third brick. Take whatever's here. Just don't tell Mom.
10 A ¶ He slumps against the crate.
11 D DESMOND (a whisper): Third brick.
12 A ¶ He lifts a loose brick from the wall.
13 A Beneath it: a small brass key, bright as the day it was hidden.
14 A He closes his fist around it, rises, and walks out into the rain.

### SCENE s00662 | EXT. DRY WASH - HIGH DESERT - DAWN
Detected names (may be incomplete or contain aliases): RIDER, ABEL
1 A ¶ A dry riverbed.
2 A Sage, cracked clay, a lone cottonwood bleached white.
3 A A horse stands hobbled by the tree, nosing at the dust.
4 A A campfire has burned to a gray nest.
5 A ¶ A RIDER, fifties, hat low, sits on a flat stone with a tin cup.
6 A A graying beard.
7 A A slow way of moving, as if he'd spent a lifetime bargaining with his joints.
8 A ¶ He tilts the cup.
9 A Dregs.
10 A He tosses them on the ashes.
11 D RIDER (to the horse): Don't look at me like that. It's the last of the coffee.
12 A ¶ The horse flicks an ear.
13 A ¶ He reaches into his saddlebag and withdraws a folded sheet of paper, brown at the creases.
14 A Smooths it on his knee.
15 A Reads in silence.
16 A Then, aloud:
17 D RIDER [CONT'D]: "Dear Abel. The farm is sold. Your sister has the boy. Do not come back, for there is nothing to come back to."
18 A ¶ He lowers the letter.
19 A The wind lifts the edge of it.
20 A He holds it down with a thumb.
21 D RIDER [CONT'D] (to the horse): Abel Corrigan. That's me. You never asked.
22 A ¶ The horse snorts.
23 D ABEL: Well. Now you know.
24 A ¶ He folds the letter along its creases and tucks it into his hatband.
25 A He gets to his feet in stages.
26 D ABEL [CONT'D] (muttering): Forty miles to the river.
27 A ¶ From somewhere a long way off, down the wash, comes the thin whistle of a train.
28 D ABEL [CONT'D] (to himself): Would you listen to that.
29 A ¶ He takes the horse's reins.
30 A He leads it a few paces, stops, and stands listening until the whistle fades.
31 D ABEL [V.O.] (his own, young, reading): "Dear Father. We are well. The boy has your eyes."
32 D ABEL (softly): Hush now.
33 A ¶ He mounts, slowly, and rides out along the wash toward the east, where the sun has begun to lift itself over the ridge.
