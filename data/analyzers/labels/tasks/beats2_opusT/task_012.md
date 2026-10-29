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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_opusT/group_00012.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00422 | INT. DRAINED PUBLIC SWIMMING BATH - DAWN
Detected names (may be incomplete or contain aliases): MARGUERITE LAVOISIER, EMMANUEL, PHINE, TOMASZ KRUK, JOSÉPHINE
1 A ¶ The great pool lies empty, its blue tiles cracked into a map of rivers nobody named.
2 A Pigeons stitch through the rafters, and the light from the broken skylight lies in long pale planks across the deep end, where a lifeguard's chair still stands, lashed with rust.
3 A ¶ MARGUERITE LAVOISIER (70s, white braid to her waist, a swimmer's shoulders gone soft) sits on the lip of the pool with her feet dangling over nothing, while her son EMMANUEL (40s, rumpled suit, a clipboard he has stopped looking at) paces the tiles, her granddaughter JOSÉPHINE (17, wet-weather parka, earbuds dangling) peels a strip of loose paint from the railing and flicks it into the void, and the surveyor TOMASZ KRUK (50s, hard hat under one arm, tape measure clipped to his belt) clears his throat twice before anyone looks at him.
4 D EMMANUEL: Maman, they sign today. It is only a car park.
5 D MARGUERITE: I taught you here. You held your breath nine seconds.
6 D JOSÉPHINE: Grand-mère, he's trying to--
7 D TOMASZ: Madame, if I could just measure the deep end, we can--
8 D EMMANUEL: --she knows what it is, Joséphine.
9 D MARGUERITE: Nine seconds, Manu. And you came up crying.
10 D TOMASZ: Twelve feet, I think. Twelve and a half.
11 D JOSÉPHINE (to her grandmother): Can I jump?
12 A ¶ Marguerite pats the cold tile beside her, and Joséphine sits.
13 A Emmanuel lowers the clipboard.
14 A Tomasz winds the tape back slowly into its case.

### SCENE s01864 | INT. SYNERGY PARTNERS - OPEN OFFICE - MORNING
Detected names (may be incomplete or contain aliases): DEBORAH PRZYBYLSKI, VP, SANJAY RAO, KENDRA OYELOWO, BRAD, FITCH, MR. LYLE, ^BRAD
1 A ¶ A sea of gray cubicles.
2 A A foosball table nobody uses.
3 A A neon sign reads "BE THE CHANGE."
4 A A printer in the corner beeps in distress.
5 A ¶ DEBORAH PRZYBYLSKI, 40s, regional VP, strides in carrying a laptop and a green smoothie.
6 A Behind her trail four employees: SANJAY RAO, 30s; KENDRA OYELOWO, 20s; BRADLEY "BRAD" FITCH, 30s; and a thin man in an ill-fitting suit.
7 D DEBORAH: Team! Huddle!
8 A ¶ They gather.
9 A The thin man hangs back.
10 D DEBORAH [CONT'D]: Q3 numbers are in. We are crushing it. Crushing. Is anyone not crushing?
11 A ¶ Nobody speaks.
12 A The printer beeps.
13 D SANJAY (muttering): We missed target by thirty percent.
14 D DEBORAH: What was that?
15 D SANJAY: I said we're... trending.
16 D DEBORAH: Good word. Trending.
17 D KENDRA (to Brad): Who is that guy?
18 D BRAD (whispering): HR, I think.
19 D KENDRA: He's been here an hour.
20 D BRAD: He's been in the printer room.
21 D DEBORAH: Team. I want to introduce someone.
22 A ¶ She gestures at the thin man, who steps forward and clutches his clipboard.
23 D DEBORAH [CONT'D]: This is Mr. Lyle, from Corporate.
24 D MR. LYLE: Hello.
25 D DEBORAH: Mr. Lyle is here to help us optimize.
26 D MR. LYLE: I'm here to make cuts.
27 A ¶ Silence.
28 A Deborah's smile does not move.
29 A Sanjay's eyes widen.
30 A Kendra covers her mouth.
31 A Brad slowly raises his hand.
32 D BRAD: Is that a joke?
33 D MR. LYLE: No.
34 D DEBORAH: It's a figure of speech.
35 D MR. LYLE: It is not.
36 D DEBORAH (through teeth): Mr. Lyle, may I have a word.
37 D MR. LYLE: Certainly.
38 A ¶ They step aside.
39 A The three employees watch.
40 A Lyle speaks, quietly, and Deborah's face cracks.
41 A She snatches her smoothie, takes a long pull through the straw, and, finding it empty, sucks on air.
42 A ¶ Lyle returns, alone.
43 A Deborah remains by the foosball table, staring at it.
44 D MR. LYLE [CONT'D]: Ms. Przybylski has decided to take personal leave.
45 D SANJAY: Indefinitely?
46 D MR. LYLE: Effective immediately.
47 D KENDRA (simultaneously): Who's in charge?
48 D ^BRAD (simultaneously): Who's in charge?
49 A ¶ Lyle looks at them.
50 A He glances at the clipboard.
51 D MR. LYLE: Mr. Rao.
52 D SANJAY: Me?
53 D MR. LYLE: Congratulations. You're trending.

### SCENE s00412 | INT. LATE-NIGHT NOODLE BAR - NIGHT
Detected names (may be incomplete or contain aliases): JOSEFINA, CASPIAN, WREN, BASIL
1 A ¶ Steam.
2 A Fluorescent.
3 A Six stools at a counter, two booths.
4 A A neon sign buzzes: OPEN 'TIL SOMEONE LEAVES.
5 A ¶ JOSEFINA, 28, in a rain-soaked red coat, sits alone at the counter slurping noodles.
6 A CASPIAN, 30, in a bicycle courier's jacket, drips onto the stool next to hers.
7 A WREN, 60s, the owner, wipes the counter.
8 A BASIL, 20s, the dishwasher, drags a bus tub of bowls through the kitchen door.
9 D CASPIAN: Is this seat free?
10 D JOSEFINA: It's a counter.
11 D CASPIAN: That's not a no.
12 D JOSEFINA: That's a counter.
13 A ¶ He sits.
14 A Wren sets a bowl in front of him without being asked.
15 D WREN: Caspian. Usual.
16 D CASPIAN: Thanks, Wren.
17 D JOSEFINA: You're a regular.
18 D CASPIAN: Eleven months.
19 D JOSEFINA: I've been coming for three years.
20 D CASPIAN: I would've remembered.
21 D JOSEFINA: I'm very forgettable.
22 D CASPIAN: You're wearing a red coat.
23 A ¶ She looks down at it, then at him.
24 A A noodle dangles from her chopsticks.
25 A Basil emerges from the kitchen, sees them, and pauses.
26 D BASIL: Wren, do we have more broth?
27 D WREN: Back left.
28 D BASIL: Okay.
29 A ¶ He leaves.
30 A Josefina and Caspian eat in silence.
31 A The neon buzzes.
32 D CASPIAN: I have a question.
33 D JOSEFINA: Okay.
34 D CASPIAN: Why do you sit at the counter?
35 D JOSEFINA: Why do you?
36 D CASPIAN: Because the booths have a wall. You can't see anyone.
37 D JOSEFINA: That's the point.
38 D CASPIAN: Of the booth?
39 D JOSEFINA: Of not wanting to be seen.
40 A ¶ A pause.
41 A Caspian lays down his chopsticks.
42 A He turns his stool slightly toward her.
43 D CASPIAN: Are you hiding?
44 D JOSEFINA: From who?
45 D CASPIAN: I don't know. From the night?
46 D JOSEFINA: That's very poetic.
47 D CASPIAN: It's very late.
48 D JOSEFINA: It's two a.m.
49 D CASPIAN: I know. I've been delivering since six.
50 D JOSEFINA: You work twenty hours?
51 D CASPIAN: Nineteen. I get a nap.
52 A ¶ She laughs, a short, startled sound.
53 A She covers her mouth, embarrassed, and Wren glances up with a small smile.
54 D JOSEFINA: You're a bad influence.
55 D CASPIAN: You're a good listener.
56 D JOSEFINA: I haven't said anything.
57 D CASPIAN: That's the best kind.
58 A ¶ She meets his eyes.
59 A A beat.
60 A She nudges her half-eaten bowl toward him with one finger.
61 D JOSEFINA: Finish it.
62 D CASPIAN: Are you sure?
63 D JOSEFINA: You've been nineteen hours.
64 A ¶ He takes the bowl.
65 A Wren sets a second pair of chopsticks beside it.
66 A Basil, in the kitchen doorway, shakes his head in awe.
67 D BASIL (to Wren): She never shares.
68 D WREN (to Basil): Back to the dishes.

### SCENE s00032 | EXT. SALT FLATS WAGON STOP - NOON
Detected names (may be incomplete or contain aliases): HANNAH DELACROIX, ZEKE, MARSHAL TOBIAS GRAINGER
1 A ¶ White ground.
2 A White sky.
3 A A single wagon with a cracked wheel.
4 A A water barrel under a tarp.
5 A The heat shimmers like paper held over a flame.
6 A ¶ HANNAH DELACROIX (30s, dust-caked bonnet, rifle across her knees) sits on the wagon tongue.
7 A Her husband EZEKIEL "ZEKE" DELACROIX (30s, bandaged hand) paces the barrel.
8 A Across the flats, a lone rider approaches slowly, leading a second horse: MARSHAL TOBIAS GRAINGER (50s, gray duster, tin star scratched with age).
9 A ¶ Grainger reins up, tips his hat.
10 D GRAINGER: Afternoon.
11 D HANNAH: Marshal.
12 D ZEKE: Afternoon.
13 D GRAINGER: Looks like a wheel gave out.
14 D HANNAH: It did.
15 D GRAINGER: I could help.
16 D ZEKE: We're fine.
17 A ¶ Grainger swings down.
18 A He pats his horse.
19 A He looks at the barrel, the rifle, Zeke's bandaged hand.
20 D GRAINGER (to Zeke): Cut yourself?
21 D ZEKE: Rope.
22 D GRAINGER: Funny. Rope burns look different from teeth.
23 A ¶ Hannah's finger moves toward the trigger.
24 A Zeke's jaw works.
25 D HANNAH: Marshal, you're welcome to water.
26 D GRAINGER: That's kind. I'm not thirsty.
27 A ¶ He walks to the back of the wagon and lifts the tarp.
28 A Underneath: a canvas sack, dark with dried stains.
29 D GRAINGER [CONT'D] (to himself): Well, now.
30 D ZEKE: Let it be, Marshal.
31 D HANNAH: Let it be.
32 A ¶ They say it together, flat and fast.
33 D ZEKE [CONT'D]: ^We didn't kill him for the money.
34 D HANNAH: ^He came for the children.
35 A ¶ Grainger lets the tarp fall.
36 A The wind lifts a thin curtain of salt.
37 D GRAINGER (to the flats): Hell of a place to find out you were right.
38 A ¶ He unbuckles his gun belt and drops it in the dust.
39 D GRAINGER [CONT'D] (to Hannah): Put that rifle down, ma'am. I'm only going to sit.
40 A ¶ She doesn't.
41 A He sits anyway.

### SCENE s02282 | INT. PRINTING SHOP, MANCHESTER - EVENING (1838)
Detected names (may be incomplete or contain aliases): EZEKIEL FARTHING, PRUDENCE ASHWORTH
1 A ¶ Ink-black presses.
2 A Racks of lead type.
3 A A single tallow candle gutters beside a chalkboard of tomorrow's handbills.
4 A ¶ EZEKIEL FARTHING, thirties, compositor, in a leather apron, sets type with quick, practised fingers.
5 A Ink stains him to the elbow.
6 A ¶ A knock.
7 A The door opens, letting in cold and the smell of coal smoke.
8 A ¶ PRUDENCE ASHWORTH, twenties, a mill-girl in a patched shawl, steps in clutching a folded paper.
9 D PRUDENCE: Mr. Farthing? They said you'd print for a penny.
10 D EZEKIEL: Depends what it says.
11 D PRUDENCE: It says we want ten hours. No more.
12 D EZEKIEL: Who is "we"?
13 D PRUDENCE: The women at Greaves Mill. All three hundred.
14 D EZEKIEL: And who signs it?
15 D PRUDENCE: Nobody. That's the point. If nobody signs it, nobody's turned out.
16 A ¶ Ezekiel wipes his hands on his apron.
17 A He takes the paper and reads it by the candle.
18 A His lips move.
19 D EZEKIEL: It's a good bill.
20 D PRUDENCE: Will you print it?
21 D EZEKIEL: I'll print it. Come back Thursday.
22 D PRUDENCE: Thursday's too late. The vote is tomorrow.
23 D EZEKIEL: Then I'd best set it tonight.

### SCENE s00469 | INT. LUNAR ICE-MINING HABITAT - AIRLOCK BAY - CONTINUOUS
Detected names (may be incomplete or contain aliases): TECHNICIAN ADEBAYO KOWALSKI-NAKAMURA, WARRANT OFFICER INGRID SOLBERG-MWANGI
1 A ¶ Dim sodium lamps.
2 A Racked suits hanging like hanged men.
3 A Frost creeping up the inner hatch.
4 A Two figures prepare for a walk.
5 A ¶ TECHNICIAN ADEBAYO KOWALSKI-NAKAMURA (40s, undersuit, cooling garment tubing coiled at his neck) checks the seal on his glove while his partner, WARRANT OFFICER INGRID SOLBERG-MWANGI (30s, shaved head, flight patch on her sleeve) tests a tether clip, tugs it twice, and clips it to his belt, then runs a gloved thumb along the seam of his helmet ring.
6 D INGRID: Pressure.
7 D ADEBAYO: Four-seven. Holding.
8 D INGRID: O2.
9 D ADEBAYO: Ninety-eight percent.
10 A ¶ She nods.
11 A He nods.
12 A Neither speaks for a moment, and he picks up a sample case, hefts it, and sets it back down.
13 A She turns the dial on the wall panel, and the inner hatch slides shut with a hiss.
14 D INGRID [CONT'D]: Last time, you said you saw a light in the crater.
15 D ADEBAYO: I saw a reflection.
16 D INGRID: You said light.
17 D ADEBAYO: Ingrid, it was nothing.
18 A ¶ She regards him through her visor.
19 A He looks at the floor.
20 A The pumps hum, drawing the air out of the bay, and the frost on the hatch deepens.
21 D INGRID: Then we go look at nothing.
22 A ¶ The outer door shudders open onto the black.
23 A He steps through first.
24 A She follows, paying out the tether behind her.

### SCENE s02175 | INT. GREENHOUSE ABOVE A CLOSED TRAIN STATION - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): IMELDA CORREIA, NOOR HASSAN, CORREIA-HASSAN, FATHER ANSELMO, GRETA VOLKOV
1 A ¶ The glass roof has been mended in panes of different greens.
2 A Tomato vines climb strings tied to old signal wires.
3 A Down below, a freight train sighs through where no passenger train has stopped in years.
4 A The floor trembles gently.
5 A ¶ IMELDA CORREIA (70s, small, hands like roots) kneels in the dirt, tying a vine.
6 A Her daughter-in-law, NOOR HASSAN (40s, good coat, car keys held too long) stands at the doorway and does not step in.
7 D IMELDA: Shoes.
8 A ¶ Noor looks at her shoes, clean leather, and takes them off.
9 A Sets them side by side on the threshold.
10 A Walks in on stocking feet.
11 D NOOR: It's warm in here.
12 D IMELDA: It is a greenhouse.
13 A ¶ Noor touches a leaf.
14 A Rubs it between finger and thumb.
15 A Smells it.
16 A Imelda watches her without turning her head.
17 D NOOR: Teo says you haven't been answering.
18 D IMELDA: The telephone is in the kitchen. I am not in the kitchen.
19 D NOOR: He's worried.
20 D IMELDA: He is busy.
21 A ¶ Noor smiles at that, thin and brief.
22 A At the far end of the greenhouse, a boy of about twelve, TEODORO "TEO" CORREIA-HASSAN (12, serious, glasses taped at the hinge), sits cross-legged between two rows of lettuce, sorting seed packets by colour and not looking up.
23 D NOOR: He came with me.
24 D IMELDA: I saw him.
25 D NOOR: He wouldn't come over.
26 D IMELDA: He is where he is supposed to be.
27 A ¶ A long silence.
28 A The freight train hushes the room, then passes.
29 A Noor lowers herself onto an overturned bucket.
30 D NOOR: Marcos called.
31 A ¶ Imelda ties a knot.
32 A Pulls it tight.
33 A Snips the string with her teeth.
34 D IMELDA: How is the weather in Lisbon?
35 D NOOR: He didn't say.
36 D IMELDA: Then he did not call for long.
37 D NOOR: He called for four minutes. He asked about the house.
38 D IMELDA: The house is standing.
39 D NOOR: He asked whether you were thinking of selling.
40 A ¶ Imelda reaches for a tomato, turns it in her palm, and lets it go.
41 A She picks another.
42 A Presses it.
43 A Hard.
44 A Green.
45 A She leaves it.
46 D IMELDA: It is a little early for these.
47 D NOOR: Imelda.
48 D IMELDA: Three more weeks. I will make the sauce for the church supper. Father Anselmo likes it with basil. I told him I would bring basil.
49 D NOOR: You don't have to answer me.
50 D IMELDA: No.
51 A ¶ She gets up slowly, one hand on her knee.
52 A Crosses the greenhouse.
53 A Takes a clay pot from a shelf and carries it back to Noor, who takes it without being asked.
54 A A basil plant, small and fierce.
55 D IMELDA [CONT'D]: Put that in your window. It does not like the dark.
56 A ¶ Noor holds the pot in both hands like something warm.
57 D NOOR: There isn't much window in the apartment.
58 D IMELDA: Then it will grow toward what there is.
59 A ¶ Across the glass, Teo has lined up all the packets in a spectrum.
60 A He pushes his glasses up with one knuckle and looks at the two women for the first time.
61 A Then back to his seeds.
62 A ¶ The door rattles.
63 A FATHER ANSELMO (60s, round, cassock under a windbreaker) leans in with a bag of potting soil on his shoulder, and behind him GRETA VOLKOV (50s, neighbour, gardening gloves, loud scarf).
64 D FATHER ANSELMO: Imelda, the basil?
65 D IMELDA: On the shelf. Shoes.
66 D GRETA: We already took them off. Hello, Noor.
67 A ¶ Noor nods.
68 A Father Anselmo sets down the soil and goes straight to the shelf, humming.
69 D NOOR: I should go. He has school tomorrow.
70 D IMELDA: He has school tomorrow.
71 A ¶ Neither moves.
72 D IMELDA [CONT'D]: Wait.
73 A ¶ She goes to the end of a row and snaps off a tomato vine with two small green fruits on it.
74 A Wraps the stem in a wet paper towel.
75 A Holds it out.
76 D IMELDA [CONT'D]: For his windowsill. Not for eating.
77 A ¶ Noor takes it.
78 A Their fingers touch.
79 A Neither pulls back at once.
80 D NOOR: Thank you.
81 D IMELDA: Take your shoes.
82 A ¶ Noor goes to the threshold, steps into her shoes, and turns once to look at the rows of green.
83 A Then she crosses to Teo and crouches beside him.
84 A He holds out one packet, wordless.
85 A She reads the label, nods, tucks it in her coat.
86 A ¶ Imelda has already turned back to the vines.
87 A She hums something under her breath, badly, and ties another knot.
88 A ¶ The next freight train begins to build, far off, in the rails.

### SCENE s02007 | INT. OFFICE KITCHENETTE, MID-SIZED LOGISTICS FIRM - DAY
Detected names (may be incomplete or contain aliases): MARGUERITE OBIORA-HASKELL, ISAAC BRANDT-MWANGI, LEOPOLD ZIMMERMAN-OKAFOR
1 A ¶ A fluorescent-lit kitchenette.
2 A A laminated sign over the microwave: PLEASE COVER YOUR FOOD.
3 A A second sign below it: THIS MEANS YOU.
4 A A coffee machine beeps its low-water warning.
5 A ¶ MARGUERITE OBIORA-HASKELL (40s, cardigan, sensible shoes) stares at the coffee machine.
6 A At the table, ISAAC BRANDT-MWANGI (30s, lanyard, microwave burrito) eats without looking at anything.
7 A ¶ The machine beeps again.
8 D MARGUERITE (to the room): Does anyone know who's supposed to refill this?
9 D ISAAC: Not me.
10 D MARGUERITE: I didn't say you.
11 D ISAAC: You said anyone.
12 D MARGUERITE: I said anyone.
13 D ISAAC: I'm part of anyone.
14 D MARGUERITE (muttering): Everyone's anyone.
15 A ¶ She lifts the carafe, peers into it, sets it down.
16 A Isaac turns a page of his newspaper.
17 A The machine beeps.
18 A ¶ The door swings open.
19 A A man steps in, hands in his pockets: LEOPOLD ZIMMERMAN-OKAFOR (50s, suit, new badge on a new lanyard), the kind of calm that comes from a very large check.
20 D LEOPOLD: Good morning.
21 D MARGUERITE: Good morning.
22 D ISAAC: Hey.
23 D LEOPOLD: I'm Leopold. I'm the new consultant.
24 D MARGUERITE: For what?
25 D LEOPOLD: Efficiency.
26 A ¶ Marguerite and Isaac exchange the longest look in the history of the break room.
27 D ISAAC: We're very efficient.
28 D LEOPOLD: That's what everyone says.
29 A ¶ He walks to the coffee machine, studies it as a surgeon studies a lung, lifts the carafe, and sighs.
30 D LEOPOLD [CONT'D] (to himself): Out of water.
31 D MARGUERITE: We were just discussing that.
32 D LEOPOLD: Who's responsible?
33 D MARGUERITE: Nobody.
34 D LEOPOLD: That's the problem.
35 D ISAAC: That's the solution. If nobody's responsible, nobody's blamed.
36 D LEOPOLD: Fascinating.
37 A ¶ He opens a notebook.
38 A Writes.
39 A Closes it.
40 D LEOPOLD [CONT'D] (to the room): I'll be observing for two weeks. Please carry on as normal.
41 D MARGUERITE: Normal what?
42 D LEOPOLD: Whatever you usually do.
43 A ¶ Marguerite looks at Isaac.
44 A Isaac looks at his burrito.
45 A Neither of them moves.
46 A The machine beeps.

### SCENE s00529 | INT. CONSERVATORY GREENHOUSE - ORCHID SHOW - DAY
Detected names (may be incomplete or contain aliases): WREN ASHBY-LOVELACE, STRANGER, ABARA, TAMSIN
1 A ¶ Glass and humid green.
2 A Ten thousand blossoms on risers: slipper orchids like lacquered tongues, moth orchids like frozen flight.
3 A Rain ticks on the panes overhead.
4 A ¶ WREN ASHBY-LOVELACE, 30s, in a cardigan the color of moss, bends close to a speckled bloom with a magnifying glass, entirely absorbed.
5 A ¶ A STRANGER, 30s, a woman in a rain-darkened trench and a scarf the red of a struck match, stops beside her.
6 A She does not look at the orchids.
7 A She looks at Wren.
8 D STRANGER: That one is lying to you.
9 D WREN: Excuse me?
10 D STRANGER: The label says Paphiopedilum. But it's a hybrid. Look at the staminode.
11 A ¶ Wren lowers the glass.
12 A Looks.
13 A Looks again.
14 A She laughs, low and surprised.
15 D WREN: You're right. She's right. Whoever grew it, I mean.
16 D STRANGER: She'd be furious with you for guessing.
17 A ¶ MR. ABARA, 60s, a show steward with a lapel rosette, glides by with a clipboard and clears his throat.
18 D MR. ABARA: Ladies, the judging begins at noon. Kindly keep to the path.
19 A ¶ He moves on.
20 A The two women watch him go, then glance at each other, conspirators.
21 D WREN: I'm Wren.
22 D STRANGER (after a beat): Tamsin.
23 A ¶ She extends her hand.
24 A Wren takes it.
25 A Neither lets go at once.
26 A ¶ Above, the rain thickens.
27 A TAMSIN lifts her scarf, and, shyly, shows Wren the orchid pinned beneath it: a hybrid, speckled, impossible.
28 D TAMSIN: I grew it for the judging. I was going to lose on purpose.
29 D WREN: Don't. Not today.

### SCENE s00101 | INT. RADIO STATION BROADCAST BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): OSWALD FERRIS-MBEKI, LAVINIA CRUZ-HOLLANDER, DEREK PUTNAM-ADEBAYO, MARGUERITE LACROIX, HAZEL OKONKWO-DREW, NIGEL STRAND, VOICE, AIR
1 A ¶ A glass-walled booth lined with egg-crate foam.
2 A Dials, faders, a microphone on a swan neck.
3 A Beyond the glass, a dim studio and a bank of dead windows.
4 A A red ON AIR sign glows above the door.
5 A ¶ Six people sit around a small round table in the booth, hands flat on the wood.
6 A A single candle burns in the center.
7 A ¶ OSWALD FERRIS-MBEKI (60s, station manager, cardigan, pipe unlit) presides.
8 A LAVINIA CRUZ-HOLLANDER (40s, medium, shawl, silver rings on every finger) closes her eyes.
9 A DEREK PUTNAM-ADEBAYO (30s, sound engineer, headphones round his neck) rests a hand on the mixing board.
10 A MARGUERITE LACROIX (70s, retired host, silk scarf, oxygen tank) watches the flame.
11 A HAZEL OKONKWO-DREW (20s, intern, notebook) writes furiously.
12 A NIGEL STRAND (50s, owner's lawyer, damp raincoat) stares at the exit.
13 D LAVINIA (eyes closed): We are here to hear what was never aired.
14 D OSWALD: Hush, everyone.
15 D NIGEL: This is absurd.
16 D MARGUERITE: Let her work, dear.
17 A ¶ The candle flame bows.
18 A Derek glances at the board.
19 A Every needle is dead.
20 D DEREK: Nothing's powered.
21 D HAZEL (whispering): That's what I wrote.
22 D LAVINIA: He is close. A man with a heavy voice. He says...
23 A ¶ A crackle on the monitor speaker.
24 D VOICE [V.O.] (distorted, from the speaker): ...ten minutes to air.
25 A ¶ Oswald drops his pipe.
26 A Marguerite covers her mouth.
27 A Derek leans toward the board.
28 A Nigel pushes his chair back.
29 D NIGEL: That's a recording. Someone's playing a tape.
30 D DEREK: There's no tape. Nothing's plugged in.
31 D VOICE [V.O.] (from the speaker): ...cut the lights, Marguerite.
32 A ¶ Marguerite is staring at the speaker.
33 A Her hand shakes.
34 A The oxygen tank hisses.
35 D MARGUERITE: That is Vincent.
36 D OSWALD: Vincent is dead, Marguerite.
37 D MARGUERITE: Thirty years.
38 D VOICE [V.O.] (from the speaker): ...tell them what you did.
39 A ¶ Lavinia's eyes fly open.
40 A She is not looking at the speaker.
41 A She is looking at Nigel.
42 D LAVINIA: It's you.
43 D NIGEL: I beg your pardon?
44 D LAVINIA: He is saying your name.
45 D NIGEL: He is not.
46 D VOICE [V.O.] (from the speaker): ...Nigel.
47 A ¶ Nigel slams a palm onto the table.
48 A The candle gutters.
49 A The ON AIR sign flashes.
50 A Hazel scribbles.
51 A Derek lunges for the board.
52 A Oswald stands, knocking over his chair.
53 A The whole booth goes black.
54 A ¶ In the dark, a single click.
55 A A match is lit.
56 A Marguerite's face floats above the flame, calm, steady, ancient.
57 D MARGUERITE: Sit down, Mr. Strand.
58 D NIGEL (whispering): Please.
59 D MARGUERITE: Vincent kept very good notes.
60 A ¶ She holds up a small cassette.
61 A The match burns her finger.
62 A She doesn't flinch.
63 A In the glow, five faces stare at the sixth, who is no longer looking at the exit at all.

### SCENE s01403 | INT. CATERING TRUCK - PARKED BEHIND A WEDDING TENT - DAY
Detected names (may be incomplete or contain aliases): CHEF BARNABUS TSUKAMOTO, PETRONELLA VOSKUIJLEN, DEXTER IYAMU, LAVINIA CROFT, REGGIE, PRIMROSE
1 A ¶ Steel counters.
2 A Trays of canapés.
3 A A cake in four tiers lashed to the floor with bungee cords.
4 A ¶ CHEF BARNABUS TSUKAMOTO, 50s, tall white hat, stands at the center of it all.
5 A Sweat drips off his nose into a bowl of crab dip.
6 A Nobody mentions it.
7 A ¶ He pushes the bowl across the counter to his sous-chef, PETRONELLA VOSKUIJLEN, 30s, who takes it with a face like stone.
8 A ¶ Behind them, bartender DEXTER IYAMU, 20s, shakes a shaker with the dead-eyed rhythm of a metronome.
9 A And at the door, the wedding planner, MS. LAVINIA CROFT, 40s, taps her earpiece, eyes darting.
10 D LAVINIA (tight smile): Is the cake ready?
11 D BARNABUS: It's ready.
12 D LAVINIA: Is it level?
13 A ¶ Barnabus looks at the cake.
14 A The cake leans, slightly, toward the door.
15 A Dexter stops shaking.
16 D BARNABUS: Level enough.
17 A ¶ Petronella sets the dip down and, without a word, slides a wooden spoon under the bottom tier.
18 A Barnabus clears his throat.
19 D LAVINIA: I'm hearing ten minutes.
20 D BARNABUS: We'll be there in nine.
21 D LAVINIA: Ten.
22 D BARNABUS: Nine and a half.
23 A ¶ Lavinia nods.
24 A Taps her earpiece.
25 A Her eyes flick to the cake again, and then to Barnabus, and she goes out.
26 A The door swings shut.
27 A ¶ Silence.
28 A Then Dexter exhales.
29 D DEXTER: She knows.
30 D PETRONELLA: She doesn't know.
31 D DEXTER: She knows.
32 D BARNABUS: She suspects.
33 A ¶ Petronella jams another spoon under the tier.
34 A The cake groans.
35 A A sugar rose slides off the top and drops onto the floor.
36 A ¶ Everyone stares at it.
37 A Dexter picks it up.
38 A Eats it.
39 D BARNABUS [CONT'D]: Dexter.
40 D DEXTER: Evidence.
41 A ¶ Barnabus closes his eyes.
42 A Pinches the bridge of his nose.
43 A His hat has slumped sideways.
44 A ¶ A KNOCK.
45 A The door cracks open and a head pops in.
46 A THEODORE "REGGIE" PRIMROSE, 30s, the groom, white tuxedo, a flushed and dazzled grin.
47 D REGGIE: Hey! Just wondering how's it going?
48 D PETRONELLA: Fine.
49 D DEXTER: Wonderful.
50 D BARNABUS: Magnificent.
51 A ¶ Reggie beams.
52 A Looks at the cake.
53 A His smile slowly falters.
54 D REGGIE: Is it... meant to lean?
55 A ¶ Nobody breathes.
56 A The cake sags another inch.
57 D BARNABUS: It's a Pisan reference.
58 A ¶ Reggie considers this.
59 A Then nods, slowly, delighted.
60 D REGGIE: Oh. Oh, that's brilliant.
61 A ¶ He gives them two thumbs up and withdraws.
62 A The door closes.
63 A ¶ They stare at each other.
64 A Dexter reaches for a bottle.
65 A Petronella reaches for a spoon.
66 A And together, they lift the cake.

### SCENE s01730 | INT. HOSPITAL VENDING ALCOVE - NIGHT
Detected names (may be incomplete or contain aliases): WOMAN, LUCIA REYNOSO, ARLO, NORBERT, DELPHINE
1 A ¶ A humming machine.
2 A Bad light.
3 A A bench bolted to the wall.
4 A ¶ A WOMAN (40s, wrinkled scrubs under a trench coat) stands at the machine, a dollar bill in her hand that the slot keeps spitting back.
5 A LUCIA REYNOSO (30s, her younger sister, cardigan buttoned wrong) sits on the bench.
6 A ARLO (9, in pajamas, shoes without socks) sits beside Lucia, swinging his legs.
7 A ¶ The Woman smooths the bill on her thigh.
8 A Tries again.
9 A It spits back.
10 D LUCIA: Let me.
11 D WOMAN: It's fine.
12 A ¶ Lucia takes the bill from her.
13 A The machine accepts it on the first try.
14 A The Woman watches the coil turn and a bag of pretzels drop.
15 D LUCIA: It likes me.
16 D WOMAN: It always did.
17 A ¶ Lucia hands her the pretzels.
18 A She hands them to Arlo.
19 A His legs stop swinging.
20 A ¶ Her phone buzzes on the bench.
21 A Lucia picks it up and holds it out.
22 A The Woman takes it, puts it on speaker, sets it on the machine.
23 D NORBERT [V.O.] (over phone): Delphine? Delphine, are you there?
24 D DELPHINE: I'm here, Norbert.
25 D NORBERT [V.O.] (over phone): They said it was quick. They said she didn't wake up.
26 A ¶ Delphine closes her eyes.
27 A Lucia puts a hand over her mouth.
28 A Arlo opens the pretzels and holds out the bag to nobody.
29 D DELPHINE: Thank you for calling.
30 A ¶ She ends the call.
31 A Nobody speaks.
32 A Then Arlo slides the bag toward her, one pretzel poking out like a small, brave offering.
33 D ARLO: Aunt Delphine? You can have the first one.

### SCENE s00595 | INT. FARMHOUSE KITCHEN - EVENING
Detected names (may be incomplete or contain aliases): CORDELIA ASHWORTH, MAEVE ASHWORTH
1 A ¶ A big square table, worn pale by decades of elbows.
2 A A pot of soup on the stove, forgotten.
3 A A rotary phone on the wall.
4 A The window shows a field gone blue with dusk.
5 A ¶ CORDELIA ASHWORTH, 58, the elder sister, ironing a tablecloth with slow, deliberate strokes, watches her younger sister MAEVE ASHWORTH, 54, who sits at the far end of the table with a suitcase already packed beside her chair, her coat folded neatly across her lap.
6 A ¶ The iron hisses.
7 A Cordelia reaches the corner of the cloth, smooths it, folds it once, and begins another pass.
8 D CORDELIA: You don't have to go tonight.
9 D MAEVE: The bus leaves at nine.
10 D CORDELIA: There's a bus at six tomorrow.
11 D MAEVE: I'd rather not wait.
12 A ¶ Cordelia sets the iron down on its heel.
13 A Crosses to the stove.
14 A Lifts the lid on the soup and stirs, not tasting.
15 D CORDELIA: Mother's will is in the drawer. You haven't looked at it.
16 D MAEVE: I don't need to.
17 D CORDELIA: It says the house is ours.
18 D MAEVE: It says the house is yours. I've read it.
19 D CORDELIA: You said you hadn't.
20 D MAEVE: I lied.
21 A ¶ Cordelia puts the spoon down so softly it doesn't clink.
22 A She wipes her hands on her apron, one finger at a time, then turns, and for a long moment looks at her sister's face, the tight jaw, the rim of red around the eyes that Maeve will not let fall.
23 A She was always the stubborn one, and she is stubborn now, and she is leaving the way she did at eighteen, with her coat on her lap and her chin high, and Cordelia knows that if she says what she wants to say she will shatter the entire table, so she picks up the iron again.
24 D CORDELIA [CONT'D]: Then go.
25 D MAEVE: That's it?
26 D CORDELIA: What did you want?
27 D MAEVE: I wanted you to say stay.
28 D CORDELIA: I did. Twice.
29 D MAEVE: You said I didn't have to go.
30 D CORDELIA: That's the same thing.
31 D MAEVE: It's not. It's never been the same thing.
32 A ¶ She stands.
33 A Lifts the suitcase.
34 A Holds it with both hands, like something borne from a flood.
35 D MAEVE [CONT'D]: Goodbye, Cordie.
36 A ¶ The nickname lands.
37 A Cordelia's hand tightens on the iron.
38 A A thin trail of steam rises, curling past her face.
39 A Behind her the soup begins to boil over, hissing on the burner.
40 A She doesn't turn.
41 D CORDELIA: Don't let the door slam.
42 A ¶ Maeve closes the door gently behind her.
43 A The latch clicks.
44 A ¶ Cordelia lets the iron fall onto the tablecloth.
45 A The smell of scorched cotton rises.
46 A She stands there, watching it burn.

### SCENE s02178 | INT. TELEGRAPH OFFICE - DUST CREEK - DAY
Detected names (may be incomplete or contain aliases): CALEB MARROW, OPAL TREVINO, WILLIS PRUITT
1 A ¶ A cramped frontier room.
2 A Wanted posters, a potbellied stove gone cold, a telegraph key on a scarred desk.
3 A Dust in the slanting light.
4 A ¶ CALEB MARROW (40s, sheriff, tin star dented, sun-creased eyes) stands at the window with his rifle.
5 A At the desk, OPAL TREVINO (20s, telegraph operator, ink on her cuffs) taps the key.
6 A In the corner, tied to a chair, sits WILLIS PRUITT (30s, outlaw, grin, split lip).
7 D PRUITT: You can wire all the way to Denver, Sheriff. They won't send help.
8 D CALEB: Opal, keep tapping.
9 D OPAL: I am. Nobody answers.
10 D PRUITT: Told you.
11 D CALEB: You told me nothing, Willis. You talked.
12 A ¶ Boots crunch on gravel outside.
13 A Many.
14 A Pruitt turns his head toward the window and raises his voice.
15 D PRUITT (calling out): Alive and patient, boys!
16 D CALEB: Quiet.
17 A ¶ Caleb racks the lever on his rifle.
18 A Opal's hand flutters at her throat and she turns back to the key.
19 D OPAL: It's not going through. Wire's cut.
20 D CALEB: Then we do it slow.
21 D PRUITT: You could just let me go. Save the trouble.
22 D CALEB: Trouble's already here.
23 A ¶ Opal looks up.
24 A Caleb meets her eye.
25 A A beat of understanding.
26 D CALEB [CONT'D]: Opal. Back door. Take the mule.
27 D OPAL: I'm not leaving you.
28 D CALEB: Ride to Fort Hale. Tell the major.
29 D PRUITT: That's forty miles.
30 D OPAL: Thirty-eight.
31 D PRUITT: It's a poor plan, darlin'.
32 D OPAL: You mind your mouth.
33 D CALEB: You mind your mouth.
34 A ¶ Silence.
35 A Even Pruitt grins.
36 D OPAL (softly): We say it together now?
37 D CALEB: Seems we do.
38 A ¶ Opal pulls her shawl tight, tucks a pencil behind her ear, and slips through the back door.
39 A Hinges squeak.
40 A A mule snorts in the yard.
41 D OPAL [O.S.]: Don't you die before I'm back, Caleb Marrow!
42 A ¶ Hoofbeats fade.
43 D PRUITT: She'll be dead by supper.
44 D CALEB: Not that one.
45 A ¶ He settles the rifle on the sill.
46 A Outside, the boots stop.
47 D CALEB [CONT'D]: Willis, you still talking?
48 D PRUITT: Only when it helps.
49 D CALEB: Then tell your friends to come in one at a time.

### SCENE s00624 | INT. SUBMERGED BELL TOWER - UNDERWATER CHAPEL - NIGHT
Detected names (may be incomplete or contain aliases): KESTREL VANE, MORWENNA ASH, OLD CINDER, HOLLIS PRYCE, STRANGER, AMBROSE
1 A ¶ Green light through drowned stained glass.
2 A Air pockets shiver beneath the vaulted ceiling.
3 A A rope ladder hangs into the dark.
4 A ¶ KESTREL VANE, 30s, hooded, perches on a pew back, a lantern of glowing moss in her lap.
5 A Four figures wade in from the nave.
6 A ¶ MORWENNA ASH, 50s, the Reeve, wears the keys of a dead town on her belt.
7 A Behind her, OLD CINDER, 70s, leans on a staff of coral.
8 A HOLLIS PRYCE, 20s, shield-bearer, carries nothing.
9 A And the STRANGER, hooded, no age, walks in last and drips nothing.
10 D MORWENNA: You're late.
11 D KESTREL: Tide's late.
12 A ¶ Cinder lowers himself onto a pew.
13 A Hollis stays standing, jaw working.
14 D STRANGER: Is this the place where the oath was broken?
15 D KESTREL (not looking up): Depends who's asking.
16 A ¶ The Stranger crosses to the altar.
17 A A single bell rope hangs there, wet and green.
18 A He lifts a hand toward it.
19 A Hollis steps in his path.
20 D HOLLIS: Don't.
21 D STRANGER: You flinch like a man who has already rung it.
22 A ¶ Hollis says nothing.
23 A His hand drifts to the empty place where a sword should be.
24 D CINDER (mild): Let him, Hollis.
25 D HOLLIS: Cinder --
26 D CINDER: Let. Him.
27 A ¶ Hollis steps aside.
28 A The Stranger takes the rope.
29 A He does not pull.
30 D MORWENNA: You were named at the drowning. I remember your face.
31 D STRANGER: Then you remember I was kind to you.
32 A ¶ Morwenna's hand closes around her keys until her knuckles go white.
33 D KESTREL (quietly): Say your name, and I'll let you ring it.
34 A ¶ The Stranger lowers his hood.
35 A A lean face, old scars like river-maps.
36 A He smiles at her the way one smiles at a debt.
37 D STRANGER: Ambrose Thale.
38 D KESTREL (setting down the lantern): Good.
39 D AMBROSE (over his shoulder): And now you must all stand very still.
40 A ¶ He pulls the rope.
41 A ¶ No sound.
42 A The water in the nave goes flat as glass.
43 A Every flame in the room leans toward the bell, and then, together, all of them go out, and in the dark Hollis exhales for the first time in a year.
44 A ¶ A long beat.
45 A A single drip, somewhere.
46 A ¶ Cinder laughs, soft and cracked.
47 D CINDER: Well. That's that.
48 A ¶ Kestrel relights the lantern.
49 A Morwenna is already unbuckling her keys.

### SCENE s01400 | INT. FUNERAL HOME - VIEWING ROOM - AFTERNOON
Detected names (may be incomplete or contain aliases): THEODORA ACHTERBERG, GABRIEL ACHTERBERG, SEBASTIAN ACHTERBERG, MAEVE KIRWAN-SOTO, ARCHIBALD PELLEGRINI
1 A ¶ Pale carpet, folding chairs in rows, a coffin at the front under a spray of white lilies.
2 A Muffled organ music from a hidden speaker.
3 A A table of finger sandwiches no one has touched.
4 A ¶ THEODORA ACHTERBERG, 60s, black dress, stands at the casket with one hand on its edge, her face composed in the way of someone who has practiced.
5 A Her sons stand apart: the elder, GABRIEL ACHTERBERG, 40s, rigid in a dark suit, jaw clenched, by the guest book; the younger, SEBASTIAN ACHTERBERG, 30s, unshaven, tie askew, near the exit with his phone in his hand.
6 A In the second row, a stranger in a rain-soaked coat, MAEVE KIRWAN-SOTO, 30s, sits very straight with a toddler asleep against her shoulder.
7 A And at the back, leaning on a cane, the old family friend ARCHIBALD PELLEGRINI, 80s, watches them all with milky, intelligent eyes.
8 A ¶ Sebastian glances at the stranger, and at the toddler.
9 A Gabriel follows his gaze and the muscle in his cheek jumps.
10 A Theodora does not turn her head.
11 A She smooths a ribbon on the casket with her thumb, and her other hand drifts to the edge of the lilies, crushing a petal between two fingers.
12 D GABRIEL: Who invited her?
13 D SEBASTIAN: Nobody.
14 D GABRIEL: She can't be here.
15 D SEBASTIAN: She's already here, Gabe.
16 A ¶ Gabriel crosses the aisle in three long strides.
17 A Maeve looks up, calm.
18 A The child stirs and settles.
19 D GABRIEL: I'm going to have to ask you to leave.
20 D MAEVE: I came to pay respects.
21 D GABRIEL: You didn't know him.
22 D MAEVE: I did.
23 D GABRIEL (low): Not like that.
24 D MAEVE: Exactly like that.
25 A ¶ Theodora crosses the room, heels silent on the carpet.
26 A She stops between them.
27 A Looks at Maeve, then at the toddler, a long and unreadable look, and then she touches the child's hair with the back of one finger.
28 D THEODORA: What is her name?
29 D MAEVE: Dorothea.
30 A ¶ Theodora closes her eyes.
31 A When she opens them, they are wet and furious and kind all at once.
32 D THEODORA: After his mother.
33 D GABRIEL: ^ Mother, don't.
34 D SEBASTIAN: ^ Mom, let it go.
35 D THEODORA (to the room): Sit down. All of you.
36 A ¶ They sit, one by one.
37 A Archibald, by the door, lowers himself slowly into a chair and sets his cane across his knees.
38 A The organ music swells and then fades.
39 A Theodora takes the empty seat beside Maeve, and puts her arm around the sleeping child's back.

### SCENE s00801 | EXT. HOT-AIR BALLOON - THREE THOUSAND FEET - DAWN
Detected names (may be incomplete or contain aliases): PERPETUA VANCE-OLUWOLE, ARABELLA HOLT, MURDOCH ABERNETHY, FITZ
1 A ¶ A wicker basket the size of a small closet swings under a great striped envelope of orange and teal.
2 A Fields below are a quilt of green.
3 A The burner roars, rests, roars again.
4 A ¶ PERPETUA VANCE-OLUWOLE, 50s, pilot, leather cap and a scarf the length of a river, works the valve and looks at no one.
5 A Beside her, ARABELLA HOLT, 40s, passenger in a sequined jacket, clutches the rim with white knuckles.
6 A At the far side MURDOCH ABERNETHY, 60s, her father-in-law, dozes upright against a sandbag, and FITZ, 20s, deckhand, practically a vine, clings to a rigging line with a grin that will not stay on.
7 D PERPETUA (to the basket, all of them): We're at altitude, folks. Enjoy the view.
8 A ¶ Arabella lets out a very small scream.
9 A Fitz applauds.
10 D MURDOCH (waking): Is it over?
11 D ARABELLA: No, Murdoch.
12 D MURDOCH: Then why am I awake?
13 D PERPETUA (to herself): Three thousand feet, two idiots, and a prayer.
14 A ¶ Arabella glares at her.
15 A Perpetua fires the burner with a cheerful roar.
16 D ARABELLA: Excuse me?
17 D PERPETUA: Nothing.
18 D FITZ (to Murdoch): You can see your house from here!
19 D MURDOCH: I sold my house.
20 D FITZ: You can see the new owner's house!
21 A ¶ Murdoch peers over the rim.
22 A Squints.
23 A Nods slowly.
24 D MURDOCH: He mowed the lawn badly.
25 D ARABELLA (to everyone, brittle): Can we land now? Please?
26 D PERPETUA: Landing's a negotiation, dear.
27 D ARABELLA: With whom?
28 D PERPETUA: The wind.
29 A ¶ A gust shoves the basket sideways.
30 A Arabella shrieks and drops to her knees.
31 A Murdoch grabs her sequined shoulder, delighted.
32 A Fitz whoops.
33 A Perpetua, unbothered, adjusts the valve.

### SCENE s00110 | EXT. QUARRY DIVING PLATFORM - DAWN
Detected names (may be incomplete or contain aliases): WOMAN, ISOLDE
1 A ¶ A ten-meter steel tower above a flooded granite pit.
2 A Mist hangs on the green water.
3 A Pigeons burst from the cliff-face at the clap of a distant gate.
4 A ¶ A WOMAN (30s, black swimsuit, towel around her neck, a handheld voice recorder in her fist) climbs the last rung and walks to the lip of the platform.
5 A Her bare feet leave wet prints on the grating.
6 A She is lean and focused, with the stillness of someone who has done something ten thousand times and is afraid of the ten-thousand-and-first.
7 A ¶ She clicks the recorder on.
8 D WOMAN: Dive log, ninth of June. Wind, nothing. Water, sixty-one degrees. Platform, dry, mostly.
9 A ¶ She breathes in.
10 A Out.
11 D WOMAN [CONT'D]: Today's the one. Reverse three and a half, tuck. I've hit it in the pool. I haven't hit it here.
12 A ¶ She sets the recorder on the grating.
13 A It records her silence, then her voice.
14 D WOMAN [CONT'D]: You hit it by letting go of the thought of hitting it. That's what Coach said. That's what the last coach said. That's what the first coach said, and she was lying, because nobody ever lets go of that.
15 A ¶ A gull shrieks.
16 A She tips her head back, closes her eyes.
17 D WOMAN [CONT'D]: My name is Isolde Vantongeren. Twenty-nine. Six years since the last medal. I don't know if I'm doing this for the medal or for the girl who got it.
18 A ¶ The recorder blinks.
19 A A clock ticks inside it.
20 D ISOLDE (opening her eyes): Okay. Okay.
21 A ¶ She picks up the recorder.
22 A Rewinds.
23 A Presses play.
24 D WOMAN [V.O.] (recording, thinner): ...you hit it by letting go of the thought of hitting it.
25 D ISOLDE (smiling, tired): Liar.
26 A ¶ She sets it down again.
27 A Walks backward to the rear edge of the platform, then forward, two steps, three, springing, and lifts into the air.
28 A The water takes her without a sound.
29 A Rings spread across the surface and the mist shivers.
30 A ¶ The recorder, abandoned on the grating, goes on running.
31 A In the silence it picks up only the dripping tower, the pigeons settling, and a long, delighted shout from the water.

### SCENE s00153_0 | EXT. ALPINE GONDOLA CABLE CAR - HIGH ABOVE A GORGE - DUSK
Detected names (may be incomplete or contain aliases): 
1 A ¶ A steel cabin hangs from a single cable.
2 A Beneath: a thousand feet of air and a river like a silver thread.
3 A The cable runs taut toward a far station that never seems to arrive.
4 A Wind.
5 A Ice on the glass.

### SCENE s00427 | INT. REFRIGERATED DELIVERY TRUCK - CARGO BAY - NIGHT
Detected names (may be incomplete or contain aliases): POLO, REYES, NADIA FARRAH, MAEVE DUNLEAVY, HIDEKI OTA
1 A ¶ Frost on the walls.
2 A Crates of frozen fish and one steel case chained to the floor.
3 A Four people crouch in the cold, their breath hanging in the weak red work light.
4 A ¶ LEOPOLDO "POLO" REYES (50s, ski cap) is working the case's lock with a pick.
5 A NADIA FARRAH (30s, hooded parka) holds a flashlight.
6 A MAEVE DUNLEAVY (20s, driver's gloves) watches a phone.
7 A HIDEKI OTA (40s, quiet, a thermal bag at his hip) counts seconds under his breath.
8 D POLO: Hold it steady.
9 D NADIA: I am holding it steady.
10 D MAEVE: Two minutes to the checkpoint.
11 D HIDEKI: Ninety seconds. Maybe.
12 D POLO: Quiet, I'm listening for the tumblers.
13 D NADIA: You can't hear tumblers in a freezer, Polo.
14 D MAEVE: He's hearing something.
15 D HIDEKI: Sixty seconds.
16 A ¶ He taps his wrist.
17 A She flinches.
18 A He doesn't.
19 A The lock gives with a small, sweet click.
20 D POLO: Got it.
21 D NADIA: Open it.
22 D MAEVE: Thirty seconds, open it!
23 A ¶ He lifts the lid.
24 A Nobody breathes.
25 A Inside, a velvet tray holds six lumpy brown bundles.
26 A He peels one open: a salted cod.
27 D HIDEKI: It's fish.
28 D POLO: It's all fish.
29 A ¶ Nadia swears under her breath.
30 A Maeve laughs once, high and brittle.
31 A The truck slows.
32 A Brakes hiss.
33 A Somewhere outside, a guard's voice calls a greeting.

### SCENE s01508 | INT. ASTEROID MINING SKIFF "TALLOW-4" - COCKPIT - CONTINUOUS
Detected names (may be incomplete or contain aliases): TAMARA OKONKWO-HESS, PILOT
1 A ¶ A cramped steel bubble, instrument lights glowing amber.
2 A Beyond the canopy, a tumbling field of black rock, each boulder glinting where the sun hits an ore seam.
3 A A coffee bulb floats beside a headrest, trembling.
4 A ¶ A lone figure in a patched flight suit.
5 A TAMARA OKONKWO-HESS (40s, shaved head, calm).
6 A She pilots with one hand, adjusts a thruster dial with the other, and scans the radar, with her boot against the bulkhead for balance and her eyes tracking three rocks at once.
7 A ¶ A beep.
8 A A proximity warning.
9 A She taps it away without looking.
10 D TAMARA: Easy, girl.
11 A ¶ She nudges the stick.
12 A The skiff drifts left, grazing a boulder that spins lazily past.
13 A ¶ The radio chirps.
14 A A thin voice, hers, recorded and looped, comes through the speaker.
15 D PILOT [V.O.] (recording): Tallow Four, Control. Say status. Say status.
16 A ¶ Tamara snorts and silences the loop with a flick of a switch.
17 D TAMARA: Status is lonely.
18 A ¶ Another beep.
19 A Another rock, the size of a house, looms ahead.
20 A She bites her lip, rolls the skiff, and slips through the gap with a hand's breadth to spare.
21 D PILOT [V.O.] (recording): Tallow Four, you are out of range. Return to course. Return to course.
22 D TAMARA (softly, to the canopy): There is no course.
23 A ¶ She switches the loop off for good.
24 A The cockpit is silent save for the hiss of air.
25 A Out ahead, the field opens, and the sun lights a long vein of silver in a distant rock.

### SCENE s01900 | EXT. FROZEN LAKE, YUKON - DAWN
Detected names (may be incomplete or contain aliases): STRANGER, COLLEEN MACRAE, NATHALIE, NAT
1 A ¶ White to every horizon.
2 A A snowmobile lies on its side, engine ticking as it cools.
3 A Two small figures on the ice.
4 A ¶ STRANGER (30s, orange parka, face wrapped in a scarf) crawls from the wreckage, dragging a pack.
5 A A woman, COLLEEN MACRAE (50s, ranger's jacket, a bleeding temple) kneels over the broken sled.
6 A Both are bundled to the eyes.
7 D STRANGER: Hey! Are you hurt?
8 D COLLEEN: Don't come closer.
9 D STRANGER: I'm just trying to help.
10 D COLLEEN: The ice is cracking. Stay low.
11 D STRANGER: Okay. Okay. I'm down.
12 A ¶ She flattens herself, inching forward on elbows.
13 A Colleen does the same from the other side.
14 D COLLEEN: What's your name?
15 D STRANGER: Nathalie.
16 D COLLEEN: Nathalie what?
17 D NATHALIE: Okafor-Lindqvist. Nat.
18 D COLLEEN: Nat. You were on the sled when it went?
19 D NAT: I was driving.
20 D COLLEEN (a pause): Then it's your fault we're out here.
21 D NAT: Yes, ma'am.
22 D COLLEEN: Don't ma'am me. I'm Colleen.
23 D NAT: Colleen. I can see a cabin. Maybe four hundred yards.
24 D COLLEEN: That's the old trapper's lodge. It's empty. No stove.
25 D NAT: Better than ice.
26 D COLLEEN: Better than nothing.
27 A ¶ She reaches toward Colleen.
28 A A hairline crack races between them with a sound like a rifle shot.
29 A They freeze, hands inches apart.
30 D COLLEEN [CONT'D]: Don't move.
31 D NAT: I'm not.
32 D COLLEEN: Slide your pack. Slowly. Toward me.
33 A ¶ Nat pushes it.
34 A It slides across the ice, stops beside her knee.
35 A She pulls it in and unzips it.
36 A Inside: a coil of rope, a flare gun, a thermos.
37 A She pulls the rope out and knots a loop.
38 D COLLEEN [CONT'D]: I'll throw this. You tie it around your waist. Then I pull.
39 D NAT: And if the ice breaks?
40 D COLLEEN: Then you'll be glad I tied a good knot.
41 A ¶ Colleen throws.
42 A Nat catches.
43 A She ties it.
44 A The crack widens.
45 D NAT: Ready.
46 D COLLEEN: Don't look down. Look at me.
47 A ¶ Colleen pulls.
48 A Nat slides, ice groaning beneath.
49 A Water seeps up in black ribbons.
50 A Three feet.
51 A Two.
52 A One.
53 A ¶ Colleen's gloved hand closes around Nat's.
54 A They crawl together toward the shore.

### SCENE s01602 | INT. FIELD HOSPITAL TENT - NIGHT
Detected names (may be incomplete or contain aliases): SOLEDAD ARRIAGA, SISTER AGNES KOWALSKI, COLONEL AUGUSTIN RENARD
1 A ¶ Canvas walls breathing in the wind.
2 A A generator rattles outside.
3 A Kerosene lamps cast long shadows over a row of cots, most empty.
4 A ¶ DR. SOLEDAD ARRIAGA (40s, sleeves rolled to the elbow, hair clipped under a cap) leans over a cot where a young soldier lies unconscious, his chest rising in shallow, uneven breaths.
5 A Her hands move with the economy of long practice: a pulse at the wrist, a lifted eyelid, a pressed palm on the sternum.
6 A ¶ Opposite her, a nurse, SISTER AGNES KOWALSKI (50s, wimple, a rosary peeking from her apron pocket), wrings out a cloth in a basin and lays it on the boy's forehead.
7 D SOLEDAD: How long since the last dose?
8 D AGNES: Forty minutes.
9 D SOLEDAD: And his pressure?
10 D AGNES: Falling.
11 A ¶ Soledad takes a breath.
12 A Straightens.
13 A Her gaze drifts to the tent flap, where the wind has begun to tug at the canvas ties.
14 D SOLEDAD: Prepare the table. We're opening him.
15 D AGNES: Doctor, without plasma...
16 D SOLEDAD: Then without plasma.
17 A ¶ Agnes hesitates, her fingers at the rosary.
18 A Then she moves, quick and quiet, to the instrument tray.
19 A ¶ The tent flap tears open.
20 A A gust of cold air swirls through the tent, snuffing two of the lamps.
21 A In the doorway stands a tall, soaked figure, rain streaming from the brim of his helmet.
22 A ¶ COLONEL AUGUSTIN RENARD (50s, medals dulled by mud, one arm in a sling) takes a step inside.
23 A Behind him, nothing but darkness and the sound of far-off guns.
24 D RENARD: Doctor Arriaga.
25 D SOLEDAD: Colonel. This is not a good moment.
26 D RENARD: It is the only moment I have.
27 A ¶ He glances at the boy on the cot.
28 A His jaw tightens.
29 D RENARD [CONT'D]: That one is mine.
30 D SOLEDAD: Then you may watch.
31 A ¶ Agnes holds out the scalpel.
32 A Soledad takes it.
33 A Renard removes his helmet and stands very still while the generator coughs and the lamps flicker, and the first incision is made.

### SCENE s00987 | INT. DIVING BELL - CHANNEL FLOOR, 1861
Detected names (may be incomplete or contain aliases): ARCHIBALD PENHALLOW, TOBIAS FENWICK, CORNELIUS VANE
1 A ¶ A riveted iron bell, six feet across.
2 A Two brass portholes.
3 A A hissing air hose.
4 A Green water presses against the glass.
5 A A candle burns in a sealed lantern.
6 A ¶ ARCHIBALD PENHALLOW (50s, engineer, mutton-chop whiskers) crouches at the air valve.
7 A DR. TOBIAS FENWICK (40s, naturalist, spectacles fogged) clutches a specimen jar.
8 A CORNELIUS VANE (30s, company agent, pinstripe suit ruined by damp) sits rigid on the bench.
9 D ARCHIBALD: Forty feet. Pressure steady.
10 D TOBIAS: Marvelous. Marvelous. Look at the light.
11 D CORNELIUS: I am looking at the water, Doctor. It is looking back.
12 D ARCHIBALD: Keep your voice down. Sound travels.
13 D CORNELIUS: Where would it travel to?
14 D ARCHIBALD: The surface. Where the men on the pump are listening for trouble.
15 A ¶ A tap on the glass.
16 A All three look.
17 A A pale fish, huge and slow, drifts past.
18 D TOBIAS: Lophius. Oh, Cornelius, you must see this.
19 D CORNELIUS: I have no wish to see it.
20 D TOBIAS: It's a monkfish. A giant.
21 A ¶ He holds up the jar.
22 A Fogs the porthole with his breath.
23 A Wipes it.
24 A He leans so close his nose touches the glass.
25 D ARCHIBALD: Get back from the window.
26 D TOBIAS: It's only a fish.
27 D ARCHIBALD: It's the pressure on the glass I'm worried about.
28 D CORNELIUS: You said it was safe.
29 D ARCHIBALD: I said it was safe if we keep still.
30 A ¶ The bell shudders.
31 A A low groan from the iron seams.
32 A The candle gutters.
33 D CORNELIUS: What was that?
34 D ARCHIBALD: The sea settling.
35 D TOBIAS: Is it settling, or moving?
36 D ARCHIBALD: Be quiet. Both of you.
37 A ¶ He unhooks a speaking tube and listens.
38 A Nothing.
39 A He taps it.
40 A Nothing.
41 D ARCHIBALD [CONT'D]: The line's dead.
42 D CORNELIUS: Then we're lost.
43 D ARCHIBALD: We are not lost. The pump men have a signal. Three tugs on the cord.
44 A ¶ He seizes the cord.
45 A Pulls three times.
46 A Waits.
47 A Pulls again.
48 A ¶ Silence.
49 A Tobias lowers the jar.
50 A His hand trembles.
51 A He sets it on the floor.
52 D TOBIAS: I have always wanted to die in the name of science. I merely hadn't pictured it so damp.
53 D CORNELIUS: Doctor, please.
54 D ARCHIBALD: Nobody is dying. Cornelius, hand me that wrench.
55 D CORNELIUS: This one?
56 D ARCHIBALD: The long one.
57 A ¶ Cornelius passes it.
58 A Archibald hammers the iron wall.
59 A Once.
60 A Twice.
61 A Three times.
62 A A pause.
63 A ¶ Three muffled knocks answer from above.
64 A All three exhale at once.
65 D TOBIAS: They heard.
66 D ARCHIBALD: They always hear.
67 A ¶ The bell lurches.
68 A Rises.
69 A Slowly.
70 A The water in the porthole begins to lighten from green to gray.
71 D CORNELIUS: Archibald?
72 D ARCHIBALD: Yes?
73 D CORNELIUS: When we are up, I intend to be sick.
74 D ARCHIBALD: Hold on to the bench.

### SCENE s01368 | INT. SURGICAL OBSERVATION GALLERY - DAY
Detected names (may be incomplete or contain aliases): ELEANOR WHITLOCK, VIKRAM RAO, NURSE SINEAD DUFFY, RESIDENT TAKUMI IKEDA, INTERN PALOMA RIVERA, LESZEK BUKOWSKI
1 A ¶ A tiered room above an operating theater, glass wall onto green tiles and white light.
2 A Folding chairs on a stepped floor.
3 A A pot of lukewarm coffee, untouched.
4 A Beyond the glass, a quiet operation unfolds without a sound.
5 A ¶ DR. ELEANOR WHITLOCK, 60s, chief of surgery, silver bob and half-moon glasses, sits front and center with a clipboard on her knee.
6 A DR. VIKRAM RAO, 40s, lean, in a charcoal sweater, stands with his arms folded at the glass.
7 A NURSE SINEAD DUFFY, 30s, freckled, ties off a supply bag.
8 A RESIDENT TAKUMI IKEDA, 20s, hollow-eyed, nods over a clipboard.
9 A INTERN PALOMA RIVERA, 20s, bright-eyed, takes notes with great seriousness.
10 A And Mr. LESZEK BUKOWSKI, 70s, an elderly volunteer observer in a corduroy jacket and a hospital visitor's badge, sits in the back row with a paper bag of lemon drops.
11 A ¶ Below, the surgeons work.
12 A Nothing seems to happen.
13 A A hand moves.
14 A A suture is pulled.
15 D WHITLOCK: Dr. Rao, how long has the cardiac been under?
16 D RAO: Three hours and ten minutes.
17 D WHITLOCK: Is that long?
18 D RAO: For this one, it's average.
19 D PALOMA (writing): Three hours, ten minutes, average.
20 D TAKUMI (muttering): It feels longer.
21 D SINEAD: It always does from up here.
22 A ¶ Bukowski unwraps a lemon drop and pops it in his mouth.
23 A The wrapper crackles.
24 A Everyone turns.
25 A He holds up the bag.
26 D BUKOWSKI: Anyone?
27 D WHITLOCK: Mr. Bukowski, this is a sterile gallery.
28 D BUKOWSKI: It's a lemon drop.
29 D RAO: Let him have it, Eleanor.
30 D WHITLOCK: I will, Vikram. Provided he does not choke.
31 D BUKOWSKI: I'm seventy-three. I've outlived four cardiologists.
32 D SINEAD: That's not the comfort you think it is, Mr. Bukowski.
33 A ¶ Paloma giggles, claps a hand over her mouth.
34 A Takumi's head sinks lower.
35 A Below, the surgeon gestures; a monitor beeps; a gloved hand lifts a clamp.
36 D PALOMA: Is that the valve?
37 D RAO: That's the valve.
38 D PALOMA: It's beautiful.
39 D RAO: It's a pump with a door, Paloma.
40 D PALOMA: A beautiful pump with a door.
41 D WHITLOCK: Intern, you're learning.
42 A ¶ Bukowski offers the bag to Takumi.
43 A Takumi, half asleep, takes a lemon drop without looking.
44 A Sinead catches Paloma's eye and rolls her own.
45 A Rao paces to the end of the glass, turns, comes back.
46 A Whitlock marks something on her sheet.
47 D TAKUMI (waking): Did I miss something?
48 D SINEAD: Only the valve.
49 D TAKUMI: Damn.
50 D WHITLOCK: Dr. Ikeda.
51 D TAKUMI: Sorry, Chief.
52 D RAO: He'll watch the closing.
53 D TAKUMI: I'll watch the closing.
54 D BUKOWSKI: What closes?
55 D SINEAD: The chest.
56 D BUKOWSKI: How long does that take?
57 D SINEAD: About as long as it takes you to finish that bag.
58 A ¶ Bukowski regards the bag, shakes it, counts, and sighs.
59 D BUKOWSKI: Then I'd better ration.
60 A ¶ The monitor below settles into a long, even rhythm.
61 A In the gallery, five of them turn to watch the closing, and one, Bukowski, puts the bag away.

### SCENE s00943 | INT. ORBITAL AGRICULTURE RING, SECTOR NINE - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): CAPTAIN ISOLDE VANTERPOOL-NWOSU, BART, KOWALSKI-DIAZ, ZAINAB HAKIMI-OSEI, QUARTERMASTER FIONNUALA BRANAGH-SATO, MERCATOR, PERRY, OLUWASEUN
1 A ¶ Rows of hydroponic wheat curve up and over the ceiling, a green horizon bent into a loop.
2 A Grow lights hum at a violet pitch.
3 A A lone maintenance drone ticks along a rail.
4 A ¶ CAPTAIN ISOLDE VANTERPOOL-NWOSU (50s, close-cropped silver hair, a mechanic's gloves tucked into her belt) crouches over an open irrigation panel while ENSIGN BARTHOLOMEW "BART" KOWALSKI-DIAZ (20s, freckled, a tool belt that sags on one hip) holds the flashlight and DR. ZAINAB HAKIMI-OSEI (40s, lab coat, a tablet she hasn't looked up from) paces the aisle between the rows, all three listening to the same faint knocking in the walls.
5 A Down the far end, QUARTERMASTER FIONNUALA BRANAGH-SATO (30s, a clipboard under her arm) and a taciturn engineer called MERCATOR (60s, mechanical left hand, a cigar he never lights) stand at the lock, arguing in low voices about whose shift this was, while a nervous seed technician, PERPETUA "PERRY" OLUWASEUN (20s, a tray of seedlings hugged to her chest), hovers between the two groups.
6 D BART: Captain, it's coming from the north wall.
7 D ISOLDE: It's coming from the wheat.
8 D ZAINAB (without looking up): Wheat doesn't knock.
9 A ¶ The knocking stops.
10 A They all freeze.
11 A Bart lowers the flashlight, Zainab lifts her head, Isolde stills with a wrench in her hand, and at the far end of the aisle Fionnuala and Mercator turn together.
12 D FIONNUALA: Did you hear that?
13 D MERCATOR: Hear what?
14 D PERRY: I told you the wheat was strange!
15 A ¶ The lights go out.
16 A A beat of perfect dark, then emergency amber floods up from the floor.
17 A The wheat rows rustle, though there is no wind.
18 D ISOLDE: Everyone to the hatch, now.
19 A ¶ They scatter.
20 A Bart drops the flashlight and runs.
21 A Zainab fumbles the tablet into her coat and follows.
22 A Isolde backs away from the panel with the wrench raised.
23 A Fionnuala drops the clipboard and Mercator grabs her sleeve, and together they stumble toward the lock as the north wall bulges inward, plates bending like wet paper.
24 D BART (shouting): What is that?
25 D ZAINAB (shouting): Don't look at it!
26 A ¶ Too late.
27 A Bart stops dead and stares.
28 A Zainab catches his collar and hauls him around the corner, and Isolde slams the bulkhead shut behind all six of them, panting.
29 A The knocking resumes on the other side, patient and rhythmic.
30 A ¶ Mercator, for the first time, takes the cigar out of his mouth.
31 D MERCATOR: That's not wheat.
32 D ISOLDE: No.
33 A ¶ Fionnuala starts to laugh, high and thin.
34 A Nobody joins her.
