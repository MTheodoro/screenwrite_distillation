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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_sonnetG/group_03000.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

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

### SCENE s01031 | EXT. SUNSET GARDENS RETIREMENT HOME - BOCCE COURT - DAY
Detected names (may be incomplete or contain aliases): BERTIE, MOSCATO, LOU, GENOVESE, HIRO NAKAMURA, DORIS PELLEGRINO, SKIP, TATE
1 A ¶ Crushed oyster-shell lane, green benches, a hand-painted banner: LEAGUE FINALS.
2 A Folding chairs full of cardigans.
3 A ¶ ALBERTINA "BERTIE" MOSCATO, 80, pearls, steel spine, rolls her wrist like a bishop blessing.
4 A LOU "THE HAMMER" GENOVESE, 82, undershirt, arms like cured hams, glares from the other end.
5 A ¶ Bertie lets fly.
6 A The ball skims, kisses the pallino.
7 A Applause.
8 D BERTIE: Beat that, Hammer!
9 D LOU: I've beaten better, Bertie!
10 A ¶ HIRO NAKAMURA, 78, referee, pressed shirt, kneels with a tape measure.
11 A He measures.
12 A Looks up.
13 D HIRO: Bertie leads by half an inch.
14 A ¶ DORIS PELLEGRINO, 75, Lou's partner, sun visor, mutters.
15 D DORIS: Half an inch. I've had longer lunches.
16 A ¶ Lou steps to the line.
17 A Spits on his palm.
18 A Rolls.
19 A The ball veers left, strikes Bertie's ball, scatters it.
20 A The crowd gasps.
21 D LOU: Ha!
22 D BERTIE: Cheat!
23 D HIRO: Legal. Lou leads.
24 A ¶ ORVILLE "SKIP" TATE, 85, Bertie's partner, wheelchair, a blanket across his knees, rolls up.
25 D SKIP: Bertie, you owe me three dollars if you lose.
26 D BERTIE: Skip, I never lose.
27 D SKIP: Ninety-one losses, Bertie. I counted.
28 D BERTIE: Quiet, you old goat.
29 A ¶ She picks up the last ball.
30 A Stares down the court.
31 A Quiet descends.
32 A A wind chime tinkles.
33 A ¶ She steps.
34 A Swings.
35 A Lets go.
36 A ¶ The ball curves, ticks the fence, rolls, and stops dead against the pallino.
37 A ¶ Silence.
38 A Then an uproar.
39 D DORIS: Hiro, it's wood. Look at the grain!
40 D HIRO: Bertie wins.
41 D LOU (low): Rematch.
42 D BERTIE: Next Sunday, Hammer. Bring your checkbook.

### SCENE s01081 | INT. BACK ROOM OF A TAXIDERMY SHOP - NIGHT
Detected names (may be incomplete or contain aliases): ROCCO, VANTI, SAL MAROUNI, LENA FISHBACH, TIMOTHY BLACKWOOD-ADE
1 A ¶ Glass eyes.
2 A Stuffed owls.
3 A A badger mid-snarl.
4 A A card table with four chairs and one bare bulb.
5 A ¶ ROCCO "THE BOOKKEEPER" VANTI, 50s, rolled sleeves, counts cash into neat stacks.
6 A SAL MAROUNI, 30s, tracksuit, bounces a knee.
7 A LENA FISHBACH, 40s, wire glasses, watches the door.
8 A TIMOTHY BLACKWOOD-ADE, 20s, nervous, holds a duffel bag in his lap.
9 D ROCCO: Eighty. Eighty-five. Ninety.
10 D SAL: Where's the rest?
11 D ROCCO: Counting, Sal.
12 D LENA: Timothy, put the bag on the table.
13 D TIMOTHY: It's fine here.
14 D SAL: Put it on the table.
15 D TIMOTHY: I said it's fine.
16 D LENA: Why are you sweating?
17 D TIMOTHY: It's hot.
18 D SAL: It's a taxidermy shop in November.
19 D TIMOTHY: The badger gives off heat.
20 D ROCCO (not looking up): Ninety-five. A hundred.
21 A ¶ Lena shifts her chair.
22 A A floorboard creaks somewhere above them.
23 A Timothy flinches.
24 D SAL: Who else is here?
25 D TIMOTHY: Nobody.
26 D LENA: There's a second floor?
27 D ROCCO: Storage.
28 D SAL: Check it.
29 D LENA: I'll check it.
30 D ROCCO: Sit down, Lena.
31 D LENA: Rocco, there's something up there.
32 D ROCCO: It's a possum. Frank keeps one on a branch.
33 D SAL: Dead?
34 D ROCCO: Obviously dead.
35 A ¶ The ceiling creaks again.
36 A All four look up.
37 A The bulb sways.
38 A A shadow slides across the badger's snout.
39 D TIMOTHY: That didn't sound dead.
40 D LENA: That sounded like a person.
41 D SAL: Give me the bag.
42 D TIMOTHY: No.
43 D SAL: Give me the bag, Timothy.
44 D TIMOTHY: I can't.
45 D ROCCO (slowly setting down the money): Why not?
46 D TIMOTHY: Because it's not the money.
47 A ¶ Silence.
48 A The bulb swings.
49 A Sal's hand drifts toward his jacket.
50 A Lena eases her chair back.
51 D LENA: Then what is it?
52 D TIMOTHY: I didn't have a choice. They said bring it or --
53 D ROCCO: Who said?
54 D TIMOTHY: The man upstairs.
55 A ¶ The ceiling groans.
56 A Footsteps cross to the top of the stairs.
57 A A silhouette fills the doorway above.
58 A Boots descend one step at a time.
59 D SAL (whispering): Rocco.
60 D ROCCO: Everybody stay calm.
61 D LENA: I'm calm.
62 D SAL: I'm not calm.
63 D TIMOTHY: He said don't run.
64 A ¶ The boots reach the bottom stair.
65 A A hand reaches out and flicks off the bulb.
66 A Dark.
67 A Glass eyes gleam in the red glow of an exit sign.
68 D ROCCO (a hush): Nobody move.

### SCENE s01071 | INT. LAMPLIGHTER'S WORKSHOP - DAWN
Detected names (may be incomplete or contain aliases): ADELAIDE PRYCE, TOBIAS WREN, BOY
1 A ¶ 1887.
2 A London.
3 A Brass tools.
4 A Oil cans.
5 A A cold stove.
6 A ¶ MRS. ADELAIDE PRYCE, 60s, black bombazine, stands in the doorway.
7 A Does not sit.
8 A Gloves stay on.
9 A ¶ Across the bench: TOBIAS WREN, 60s, lamplighter.
10 A Wick scissors in hand.
11 A He trims nothing.
12 A ¶ Silence.
13 A A kettle ticks as it cools.
14 D ADELAIDE: You kept the shop.
15 D TOBIAS: Rent's paid.
16 A ¶ She touches a lamp on the shelf.
17 A Dusts her glove on it.
18 A Studies the smear.
19 D ADELAIDE: Not by much, I'd say.
20 A ¶ He sets the scissors down.
21 A Picks them up again.
22 D TOBIAS: You came a long way.
23 D ADELAIDE: The cab was warm.
24 A ¶ A bell clangs in the street.
25 A A boy's voice, muffled through the wall.
26 D BOY [O.S.]: Lamps, Mr. Wren! Gas is on at Fenchurch!
27 A ¶ Tobias does not turn.
28 A Adelaide watches him not turn.
29 D ADELAIDE: Your boy?
30 D TOBIAS: Hired.
31 D ADELAIDE: He shouts like his mother.
32 A ¶ Tobias's jaw works.
33 A He crosses to the stove.
34 A Opens it.
35 A Closes it.
36 A Nothing inside.
37 D TOBIAS: Tea?
38 D ADELAIDE: No.
39 A ¶ She sits.
40 A Finally.
41 A The chair creaks.
42 A He looks at the chair, then at her gloves.
43 D TOBIAS: Take those off. You'll boil.
44 D ADELAIDE: It's November.
45 D TOBIAS: Still.
46 A ¶ A long beat.
47 A She pulls one finger loose.
48 A Stops.
49 A Pushes it back.
50 D ADELAIDE: I said what I came to say. In the letter.
51 D TOBIAS: I burned the letter.
52 D ADELAIDE: Then you know.
53 D TOBIAS: I know.
54 A ¶ The boy shouts again, further off.
55 A Fainter.
56 D BOY [O.S.]: Lamps!
57 A ¶ Adelaide rises.
58 A Smooths her skirt twice.
59 A Crosses to the door.
60 A Stops with her back to him.
61 D ADELAIDE: Light one for me. On Fenchurch.
62 D TOBIAS: It's lit.
63 D ADELAIDE: Then light it again.
64 A ¶ She leaves.
65 A The bell over the door swings.
66 A Tobias takes down the dusty lamp.
67 A Wipes the smear with his sleeve.
68 A Carefully.

### SCENE s01090 | EXT. ORCHARD BEHIND A CLOSED CANNERY - LATE SUMMER AFTERNOON
Detected names (may be incomplete or contain aliases): NELL, THEO, DUNNING
1 A ¶ Pears hang heavy on the branches.
2 A Wasps drone over fallen fruit.
3 A Beyond the trees, a corrugated roof rusts under a pale sky.
4 A ¶ NELL, 15, sits with her back against a trunk, knees drawn up.
5 A She has a transistor radio in her lap, tuned to nothing.
6 A A paper sack of pears lies beside her.
7 A Dust on her shoes.
8 A A bruise yellowing on one shin.
9 A ¶ She bites a pear.
10 A Chews.
11 A Does not taste it.
12 A ¶ A twig snaps.
13 A She looks up.
14 A A boy has stepped from between the trees, hands in his pockets.
15 A THEO, 16, tall and awkward, wearing his older brother's jacket.
16 A He stops ten paces away.
17 A ¶ He studies her.
18 A She studies the pear.
19 D THEO: You're on the Dunnings' side.
20 D NELL: Is there a side?
21 A ¶ He shrugs.
22 A Scuffs a pear into the grass with his toe.
23 A She watches the movement and then the dirt.
24 D THEO: They said you left.
25 D NELL: They said a lot.
26 A ¶ He nods slowly.
27 A She offers him a pear without looking up.
28 A He crosses, takes it, sits a careful distance away.
29 A They eat in silence.
30 A A wasp circles his hand.
31 A He lets it.
32 D THEO: My brother's gone. Since June.
33 A ¶ She says nothing.
34 A Turns the dial on the radio.
35 A Static swells, then a thin fragment of a song.
36 A She holds still, listening.
37 A He leans in a little.
38 A The song fades.
39 D THEO [CONT'D]: That was a good one.
40 D NELL: It always is. Then it goes.
41 A ¶ He half-smiles.
42 A She turns the dial again.
43 A Nothing.
44 A She sets the radio on the grass between them.
45 A ¶ A screen door bangs somewhere beyond the trees.
46 A A woman's voice calls a name that is not hers.
47 A Nell's shoulders rise.
48 A Theo watches them rise.
49 D THEO [CONT'D]: That's for you?
50 D NELL: That's for a girl I was.
51 A ¶ He nods as if this makes sense.
52 A Stands.
53 A Offers his hand.
54 A She looks at it for a long moment.
55 A Then takes it.
56 A He pulls her up.
57 A They let go at the same time.
58 A ¶ At the edge of the orchard, an older figure steps out: MRS. DUNNING, 50s, apron, arms folded.
59 A She stops when she sees them both.
60 A Her face softens.
61 A Hardens.
62 A Softens again.
63 A ¶ Nell straightens.
64 A Theo steps half a pace in front of her.
65 A Mrs. Dunning looks at his jacket, at the radio on the grass, at the pear core in Nell's hand.
66 A ¶ She turns and walks back toward the house.
67 A Leaves the door open behind her.
68 A ¶ Nell picks up the radio.
69 A Theo picks up the sack of pears.
70 A They follow, ten paces apart, then five.

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

### SCENE s01084 | INT. DRAINED SWIMMING POOL - COMMUNITY CENTER - DAWN
Detected names (may be incomplete or contain aliases): DETECTIVE CASSIUS RHEE, FORENSIC TECH BELINDA OSEI, CAPTAIN VOSS, DOLORES AMADI
1 A ¶ Cracked blue tile.
2 A A dry deep end littered with leaves.
3 A Floodlights on stands.
4 A Yellow tape across the diving board.
5 A ¶ DETECTIVE CASSIUS RHEE, 40s, rain jacket, notebook, crouches at the bottom of the deep end beside a chalk outline.
6 A FORENSIC TECH BELINDA OSEI, 30s, white suit, kneels with a camera.
7 A A tarp covers something near the drain.
8 D RHEE: Time of death?
9 D OSEI: Medical examiner says midnight. Give or take.
10 D RHEE: Who drained the pool?
11 D OSEI: Nobody. It's been empty since August.
12 D RHEE: Then how did she end up down here?
13 D OSEI: She fell. Or she was pushed.
14 A ¶ He steps over the chalk.
15 A Lifts the tarp with a pen.
16 A Underneath, a single red high-heeled shoe.
17 D RHEE: Where's the other?
18 D OSEI: Haven't found it.
19 A ¶ A phone rings.
20 A Rhee's.
21 A He answers.
22 D CAPTAIN VOSS [V.O.] (tinny, over the phone): Rhee. Anything?
23 D RHEE: A shoe, Captain. Just a shoe.
24 D CAPTAIN VOSS [V.O.]: There's a witness on her way down. Janitor. Says she saw something.
25 D RHEE: Copy.
26 A ¶ He hangs up.
27 A Footsteps on the stairs.
28 A A figure descends: MS. DOLORES AMADI, 60s, janitor's apron, mop in hand like a staff.
29 A She stops at the pool edge.
30 D DOLORES: Detective?
31 D RHEE: Ms. Amadi. Come down.
32 A ¶ She picks her way down the shallow-end steps, mop first.
33 D DOLORES: I saw a man. By the diving board. Very tall. Very quiet.
34 D OSEI: What was he wearing?
35 D DOLORES: Gray. A long coat. Like a priest.
36 D RHEE: Did he see you?
37 D DOLORES: No. But he left something.
38 A ¶ She reaches into her apron pocket.
39 A Pulls out the second red shoe, wrapped in a plastic bag.
40 A Rhee and Osei exchange a look.
41 D OSEI: You touched it?
42 D DOLORES: I wore gloves.
43 D RHEE (taking it): Thank you.
44 A ¶ A clang from the diving board.
45 A All three whip around.
46 A The tape trembles.
47 A A silhouette stands at the top of the board, backlit by dawn.
48 D RHEE [CONT'D] (low): Police! Stay where you are!
49 A ¶ The silhouette leaps.
50 A Rhee lunges.
51 A Osei drops the camera.
52 A Dolores raises the mop.
53 A They collide at the lip of the deep end in a tangle of arms, mop handle and raincoat.
54 A ¶ A bright flash from Osei's camera bursts across the tile.
55 A The man scrambles up the stairs.
56 A Rhee and Dolores sprawl together.
57 A Osei pulls herself up.
58 D OSEI: He's gone!
59 D RHEE (breathing hard): Not far.
60 A ¶ Dolores sits, hand on her chest, mop still clutched.
61 D DOLORES: Detective. I think I know that coat.

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

### SCENE pd_sisters_2 | INT. SISTERS - CONTINUOUS
Detected names (may be incomplete or contain aliases): KULIGIN, TUZENBACH, IRINA, CHEBUTIKIN, VERSHININ
1 D KULIGIN: Speaking’s a bit difficult, eh, Ivan Romanovitch!
2 A ¶ Pats him on the shoulder.
3 D KULIGIN: Good man! In vino veritas , the ancients used to say.
4 D TUZENBACH: They keep on asking me to get up a concert in aid of the sufferers.
5 D IRINA: As if one could do anything....
6 D TUZENBACH: It might be arranged, if necessary. In my opinion Maria Sergeyevna is an excellent pianist.
7 D KULIGIN: Yes, excellent!
8 D IRINA: She’s forgotten everything. She hasn’t played for three years... or four.
9 D TUZENBACH: In this town absolutely nobody understands music, not a soul except myself, but I do understand it, and assure you on my word of honour that Maria Sergeyevna plays excellently, almost with genius.
10 D KULIGIN: You are right, Baron, I’m awfully fond of Masha. She’s very fine.
11 D TUZENBACH: To be able to play so admirably and to realize at the same time that nobody, nobody can understand you!
12 A ¶ Sighs.
13 D KULIGIN: Yes.... But will it be quite all right for her to take part in a concert?
14 A ¶ Pause.
15 D KULIGIN: You see, I don’t know anything about it. Perhaps it will even be all to the good. Although I must admit that our Director is a good man, a very good man even, a very clever man, still he has such views.... Of course it isn’t his business but still, if you wish it, perhaps I’d better talk to him.
16 A ¶ CHEBUTIKIN takes a porcelain clock into his hands and examines it.
17 D VERSHININ: I got so dirty while the fire was on, I don’t look like anybody on earth.
18 A ¶ Pause.
19 D VERSHININ: Yesterday I happened to hear, casually, that they want to transfer our brigade to some distant place. Some said to Poland, others, to Chita.
20 D TUZENBACH: I heard so, too. Well, if it is so, the town will be quite empty.
21 D IRINA: And we’ll go away, too!
22 A ¶ Drops the clock which breaks to pieces.
23 D CHEBUTIKIN: To smithereens!
24 A ¶ A pause; everybody is pained and confused.
25 A ¶ Gathering up the pieces.
26 D KULIGIN: To smash such a valuable object--oh, Ivan Romanovitch, Ivan Romanovitch! A very bad mark for your misbehaviour!
27 D IRINA: That clock used to belong to our mother.
28 D CHEBUTIKIN: Perhaps.... To your mother, your mother. Perhaps I didn’t break it; it only looks as if I broke it. Perhaps we only think that we exist, when really we don’t. I don’t know anything, nobody knows anything.
29 A ¶ At the door.
30 D CHEBUTIKIN: What are you looking at? Natasha has a little romance with Protopopov, and you don’t see it.... There you sit and see nothing, and Natasha has a little romance with Protopovov....
31 A ¶ Sings.
32 D CHEBUTIKIN: Won’t you please accept this date....
33 A ¶ Exit.
34 D VERSHININ: Yes.
35 A ¶ Laughs.
36 D VERSHININ: How strange everything really is!
37 A ¶ Pause.
38 D VERSHININ: When the fire broke out, I hurried off home; when I get there I see the house is whole, uninjured, and in no danger, but my two girls are standing by the door in just their underclothes, their mother isn’t there, the crowd is excited, horses and dogs are running about, and the girls’ faces are so agitated, terrified, beseeching, and I don’t know what else. My heart was pained when I saw those faces. My God, I thought, what these girls will have to put up with if they live long! I caught them up and ran, and still kept on thinking the one thing: what they will have to live through in this world!
39 A ¶ Fire-alarm; a pause.
40 D VERSHININ: I come here and find their mother shouting and angry.
41 A ¶ MASHA enters with a pillow and sits on the sofa.
42 D VERSHININ: And when my girls were standing by the door in just their underclothes, and the street was red from the fire, there was a dreadful noise, and I thought that something of the sort used to happen many years ago when an enemy made a sudden attack, and looted, and burned.... And at the same time what a difference there really is between the present and the past! And when a little more time has gone by, in two or three hundred years perhaps, people will look at our present life with just the same fear, and the same contempt, and the whole past will seem clumsy and dull, and very uncomfortable, and strange. Oh, indeed, what a life there will be, what a life!
43 A ¶ Laughs.
44 D VERSHININ: Forgive me, I’ve dropped into philosophy again. Please let me continue. I do awfully want to philosophize, it’s just how I feel at present.
45 A ¶ Pause.

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

### SCENE s01087 | EXT. CANAL LOCK - LOWER BASIN - DUSK
Detected names (may be incomplete or contain aliases): LOCKKEEPER HOSEA DRUMMOND, CLEMENTINE DRUMMOND, CAPTAIN EZEKIEL ARDEN, MADAME PERPETUA ARDEN, OFFICER
1 A ¶ 1824.
2 A A narrow barge squeezed in a stone lock.
3 A Water churns.
4 A Lanterns swing on posts.
5 A Ropes creak.
6 A ¶ LOCKKEEPER HOSEA DRUMMOND, 50s, broad, in a tarred coat, cranks the sluice.
7 A His daughter CLEMENTINE DRUMMOND, 12, perches on the gate beam with a coil of rope.
8 A At the stern of the barge, CAPTAIN EZEKIEL ARDEN, 40s, tall hat, cane, looks displeased.
9 A His wife, MADAME PERPETUA ARDEN, 40s, silk veil, grips the rail, glaring at the churning water and murmuring to the horses on the towpath.
10 D HOSEA: Steady now. She'll rise.
11 D EZEKIEL: You said twenty minutes.
12 D HOSEA: I said it'd be about twenty.
13 D CLEMENTINE: It's been twenty-two, sir.
14 D EZEKIEL: Impertinent child.
15 D CLEMENTINE: Accurate child.
16 A ¶ Perpetua lifts her veil.
17 A Stares at Clementine.
18 A A flicker of amusement she smothers at once.
19 D PERPETUA: Ezekiel. Let the man work.
20 D EZEKIEL: I have a train to meet.
21 D HOSEA: No train this side of Wickham.
22 D EZEKIEL: There is a train.
23 D HOSEA: There's a promise of one.
24 A ¶ The water surges.
25 A The barge shudders and lifts.
26 A A rope snaps.
27 A The barge yaws toward the wall.
28 A Clementine scrambles along the beam, grabs the loose end, hauls with both hands.
29 A Hosea spins the crank backward.
30 A Ezekiel stumbles, cane clattering.
31 A Perpetua clutches the rail and shouts at the horses.
32 A They back and the barge straightens.
33 D OFFICER [V.O.] (from the towpath, distant): You there! In the lock! Halt in the Crown's name!
34 A ¶ Everyone freezes.
35 A Water keeps rising.
36 A Hosea looks at the bank.
37 A Four men in coats at the far lamp.
38 A A constable's whistle.
39 D EZEKIEL (quietly, not at all arrogant now): Hosea. Open the upper gate.
40 D HOSEA: Sir?
41 D EZEKIEL: Open it. Now.
42 D CLEMENTINE: Papa?
43 A ¶ Hosea looks at Ezekiel.
44 A At Perpetua, pale.
45 A At Clementine.
46 A He sets his jaw.
47 A Cranks the upper sluice.
48 A The gate groans open.
49 D HOSEA: Hold on to something.
50 A ¶ The water roars.
51 A The barge shoots forward into the dark channel, taking the lantern light with it, and the officers' shouts vanish behind.

### SCENE s01025 | INT. STEAMSHIP "MARIGOLD" - LOST AND FOUND OFFICE - DAY
Detected names (may be incomplete or contain aliases): FITCH, BARNABY PLUMLEY, ALOYSIUS FENN, HORTENSE VANDERWELL, NELL
1 A ¶ A narrow room below decks, shelves of forgotten hats, umbrellas, a single ukulele.
2 A A porthole shows slow gray swells.
3 A ¶ MR. FITCH, 50s, round spectacles, ledger in hand, presides behind a brass-railed counter.
4 A He is pleased with the order of the universe.
5 A ¶ The door opens.
6 A BARNABY PLUMLEY, 40s, tweed, mustache like a pushbroom, enters with the confidence of a man who has never been refused.
7 A Behind him, ALOYSIUS FENN, 40s, also in tweed, also mustached, but nervous.
8 D FITCH: Gentlemen. Something lost?
9 D BARNABY: A trunk. Brown, brass corners, initialed B.P.
10 D ALOYSIUS: Or A.F. It's our trunk.
11 D FITCH: Two sets of initials?
12 D BARNABY: We travel together.
13 D ALOYSIUS: Not that way.
14 D FITCH: I did not suggest a way.
15 A ¶ Fitch opens the ledger.
16 A Runs a finger down the page.
17 D FITCH [CONT'D]: Brown trunk, brass corners. Found on Deck C, yesterday.
18 D BARNABY: That's the one.
19 D FITCH: Did it contain anything unusual?
20 D BARNABY: Shirts.
21 D ALOYSIUS: And the Mortimer papers.
22 D BARNABY (sharp): Shirts.
23 D FITCH: Papers, you said?
24 D ALOYSIUS: Shirts and papers. Mostly shirts.
25 A ¶ Fitch produces a trunk from beneath the counter.
26 A Sets it down with ceremony.
27 A Unlatches it.
28 A ¶ Inside: shirts.
29 A Neatly folded.
30 A One small leather folio.
31 D FITCH [CONT'D]: Shirts. And a folio marked "Mortimer."
32 D BARNABY: Yes. Splendid. We'll take it.
33 D FITCH: I'll need a signature.
34 D ALOYSIUS: Of course.
35 A ¶ Fitch slides a form across.
36 A Barnaby reaches.
37 A Aloysius reaches.
38 A Their hands collide on the pen.
39 D BARNABY: After you.
40 D ALOYSIUS: No, you.
41 D BARNABY: I insist.
42 D ALOYSIUS: Then I insist more.
43 A ¶ The door swings open again.
44 A HORTENSE VANDERWELL, 60s, fur stole in the tropics, enters with NELL, 9, in a sailor dress, clutching a stuffed walrus.
45 D HORTENSE: Mr. Fitch! My daughter lost Sir Reginald!
46 D NELL: He's right here, Grandmother.
47 D HORTENSE: Then what are we doing here?
48 D NELL: You said we'd get ice cream.
49 D HORTENSE: Ah. So I did.
50 A ¶ Fitch clears his throat.
51 D FITCH: Madam, as you can see, I am engaged with two gentlemen.
52 D HORTENSE: Two? I see one and a half.
53 D BARNABY: I beg your pardon.
54 D HORTENSE: Is the other one a ghost?
55 D ALOYSIUS: I am quite solid, madam.
56 D HORTENSE: So was my late husband. Look where it got him.
57 A ¶ Silence.
58 A Fitch polishes his spectacles.
59 D FITCH: Nell, was it? What lost thing do you seek?
60 D NELL: Nothing. Grandmother told me to say we were looking for something so she could meet the two men with the matching mustaches.
61 D HORTENSE: Nell!
62 D NELL: You did.
63 D HORTENSE (to Barnaby): Children invent the most extraordinary things.
64 D BARNABY: Madam, we are not available for introductions.
65 D ALOYSIUS: We are engaged.
66 D BARNABY: To other people!
67 D ALOYSIUS: Women!
68 D HORTENSE: How very modern.
69 D FITCH: Might I suggest we resolve the trunk?
70 D BARNABY: Yes. The trunk.
71 D ALOYSIUS: Please.
72 A ¶ Fitch taps the folio.
73 D FITCH: There is a problem, gentlemen.
74 D BARNABY: Which is?
75 D FITCH: This folio does not contain papers. It contains a deed.
76 D ALOYSIUS: Barnaby.
77 D BARNABY: Don't.
78 D FITCH: To the Marigold.
79 D HORTENSE: The ship?
80 D FITCH: The ship. It appears that one of you, or perhaps both, has been selling it for some weeks, to various purchasers, on the open sea.
81 D NELL: Can you sell a boat while you're on it?
82 D HORTENSE: Apparently, dear. Apparently you can.
83 A ¶ Barnaby and Aloysius look at each other.
84 A Then at the door.
85 D BARNABY: After you.
86 D ALOYSIUS: No, you.
87 A ¶ They bolt together, wedged in the doorway.
88 A Fitch rings a brass bell.
89 A Somewhere above, a whistle blows.
90 D NELL: Grandmother, can we still get ice cream?
91 D HORTENSE: Child, we are going to buy the ship.

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

### SCENE s00011 | INT. DECOMMISSIONED GRAIN ELEVATOR - OPEN-PLAN OFFICE - DAY
Detected names (may be incomplete or contain aliases): PRUDENCE OKAFOR, BARNABY QUILL, DELPHINE ROUSSEAU-ADEYEMI
1 A ¶ Dust hangs in the shafts of light that fall through the old hopper doors.
2 A Forty desks have been dropped onto the concrete in neat rows, and every one of them faces a wall of corrugated steel painted the cheerful green of a hospital.
3 A ¶ PRUDENCE OKAFOR (50s, cardigan buttoned to the throat, lanyard heavy with laminated cards) stands before a whiteboard and caps and uncaps a marker, caps and uncaps it, as if the sound were a metronome for the room.
4 A ¶ At the front desk sit BARNABY QUILL (30s, a tie knotted tight enough to be a verdict) and DELPHINE ROUSSEAU-ADEYEMI (late 20s, headphones around her neck, one earbud in, a half-eaten yogurt sweating at her elbow).
5 D PRUDENCE: The Synergy Taskforce has decided, after consultation, that the synergy is insufficient.
6 A ¶ Barnaby nods before she finishes.
7 A Delphine peels the yogurt lid back, licks it, folds it into a perfect small square.
8 D BARNABY: Insufficient in which direction?
9 D PRUDENCE: Directionally.
10 A ¶ She writes the word DIRECTIONALLY on the whiteboard.
11 A Underlines it twice.
12 A The marker squeaks and dies mid-line.
13 A She looks at it with great tenderness, then sets it in the tray as if laying down a child.
14 D DELPHINE: Is this the meeting about the meeting?
15 D PRUDENCE: This is the meeting about the meeting about the meeting.
16 A ¶ Barnaby and Delphine both reach for the same pen at the same instant.
17 A Their fingers touch.
18 A They both withdraw, Barnaby smoothing his tie, Delphine tucking a strand of hair behind her ear, each looking determinedly at a different corner of the ceiling.
19 A ¶ Somewhere above them, a pigeon walks across a rafter and drops something.
20 A It lands on the carpet tile beside Prudence's shoe.
21 A All three look down at it.
22 A All three look up again.
23 D PRUDENCE [CONT'D]: We'll take that offline.
24 D BARNABY: I'll circulate a note.
25 D DELPHINE: I'll bring a mop.
26 D PRUDENCE: Please do not bring a mop. Mops are a Facilities line item.
27 A ¶ Delphine slowly pulls the earbud out and lays it on the desk beside the yogurt lid.
28 A She straightens it.
29 A Squares it to the edge.
30 A ¶ Prudence picks up a fresh marker.
31 A Holds it.
32 A Does not uncap it.
33 D PRUDENCE [CONT'D]: Barnaby. Your quarterly deck. Is it ready?
34 D BARNABY: It is in a state of readiness.
35 A ¶ He opens his laptop.
36 A The screen glows.
37 A On it, a single slide: a pie chart, entirely one colour.
38 A He angles the lid down a few degrees, and the three of them stand there in the green light of the hopper doors, pretending not to see it.
39 D PRUDENCE: Excellent.
40 A ¶ She writes ACTION ITEMS on the whiteboard.
41 A Under it, nothing.
42 A She stands back and admires the nothing.
43 D DELPHINE: Do I get a lanyard?
44 D PRUDENCE: After the review.
45 D DELPHINE: Which review?
46 D PRUDENCE: The one we are about to schedule.
47 A ¶ Barnaby and Delphine rise together, chairs scraping in unison, and file toward the elevator door that has not worked since 1987.
48 A They arrive at it.
49 A They stop.
50 A They stand side by side, facing steel, and wait.

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

### SCENE s00010 | INT. FUNICULAR CONTROL HUT - NIGHT
Detected names (may be incomplete or contain aliases): OKSANA VOLKOV, DEZ, ACHEBE, MARGUERITE, BOOT, TARIQ BEN-HAIM
1 A ¶ A concrete box bolted to a mountainside.
2 A One window.
3 A Below it, the cable runs down into fog.
4 A ¶ OKSANA VOLKOV (40s, lean, grease on her cuffs) stands at a bank of dials.
5 A A wrench in her fist.
6 A She hasn't blinked in a while.
7 A ¶ DESMOND "DEZ" ACHEBE (30s, soaked parka, bad limp) sits on an overturned crate.
8 A A pistol rests on his knee.
9 A Not pointed.
10 A Not far from pointed.
11 A ¶ Between them on the floor: a canvas duffel, zipped.
12 D DEZ: Stop looking at the brake.
13 D OKSANA: I'm looking at the gauge.
14 D DEZ: You're looking at the brake.
15 A ¶ She lets the wrench drop to her side.
16 A Slowly.
17 D OKSANA: Car Two is stopped at the midpoint. Eleven people inside. Two of them are kids.
18 D DEZ: Then you better start it again when I say.
19 A ¶ The radio on the desk CRACKLES.
20 D MARGUERITE [V.O.] (radio, tinny): Hut, this is Base. Oksana, come in.
21 A ¶ Dez raises the pistol an inch.
22 A Oksana looks at it.
23 A Looks at the radio.
24 D DEZ: Say everything's fine.
25 A ¶ She lifts the handset.
26 A Thumbs the key.
27 D OKSANA: Base, Hut. Everything's fine.
28 D MARGUERITE [V.O.] (radio): Your readout says Car Two is holding. Why is Car Two holding?
29 D OKSANA: Wind shear. Routine.
30 D MARGUERITE [V.O.] (radio): There's no wind at the summit station. I'm looking at the flag.
31 A ¶ Dez stands.
32 A Limps one step closer.
33 A The pistol is level now.
34 D DEZ (low): Tell her to go home.
35 D OKSANA (into handset): Marguerite, finish your shift. I've got it.
36 A ¶ Silence on the line.
37 A Fog presses at the window.
38 D MARGUERITE [V.O.] (radio): Okay.
39 A ¶ Click.
40 A Dead air.
41 A ¶ Dez exhales through his nose.
42 A Not relief.
43 A Arithmetic.
44 D DEZ: She's calling someone.
45 D OKSANA: She's calling the sheriff. Twenty minutes up the grade.
46 D DEZ: Then we have fifteen.
47 A ¶ He nudges the duffel with his boot.
48 D DEZ [CONT'D]: Open it.
49 D OKSANA: I don't want to see what's in it.
50 D DEZ: Open it.
51 A ¶ She kneels.
52 A Pulls the zipper.
53 A Inside: a hard-shell case, steel, handcuffed to a leather strap.
54 A She looks up.
55 D OKSANA: This is somebody's wrist strap.
56 D DEZ: It's somebody's problem.
57 A ¶ A BOOT scrapes outside.
58 A Both freeze.
59 A ¶ The door swings in.
60 A TARIQ BEN-HAIM (20s, uniform of the ski patrol, red jacket, wet to the skin) stands in the frame with his hands half raised.
61 A Snow in his eyebrows.
62 D TARIQ: Nobody told me the lift was down. I walked up the service road --
63 A ¶ He sees the pistol.
64 A Stops.
65 D DEZ: Close the door.
66 D TARIQ: Okay. Okay.
67 A ¶ He closes it.
68 A Stays against it.
69 D OKSANA (to Tariq, flat): Sit on the floor. Hands on your knees.
70 A ¶ Tariq sits.
71 A Careful, slow.
72 D DEZ: Who knows you're here?
73 D TARIQ: My radio's on channel six. It's always on.
74 A ¶ Dez looks at the red radio clipped to Tariq's vest.
75 A Crosses to him.
76 A Rips it free.
77 A Thumbs it off.
78 D DEZ: Now nobody does.
79 A ¶ From the desk, the base radio hisses again.
80 D MARGUERITE [V.O.] (radio): Oksana. I can see the headlights on the service road. Two sets. Don't tell me everything's fine.
81 A ¶ Dez turns.
82 A Slowly.
83 A Aims at the handset.
84 D OKSANA (quiet): Dez. If I don't answer, she calls it in as a hostage.
85 D DEZ: Then answer.
86 A ¶ She picks up the handset.
87 A Her thumb rests on the key but doesn't press it.
88 D OKSANA: What do I tell her?
89 A ¶ Dez's jaw works.
90 A Outside, far down the slope, an engine growls.
91 A Closer.
92 A Tires on gravel.
93 D DEZ: Tell her the truth. Tell her I want the car moving.
94 D OKSANA (keying): Marguerite. There's a man in the hut with a gun. He wants Car Two moving.
95 D MARGUERITE [V.O.] (radio): Copy. Then move it.
96 A ¶ Oksana stares at the handset.
97 A Tariq stares at Oksana.
98 D TARIQ: Ma'am, don't. The kids --
99 D DEZ: Shut up.
100 D OKSANA: Marguerite, say that again.
101 D MARGUERITE [V.O.] (radio): Move it. Slow. Sheriff's at the bottom station. Moving the car puts it in his hands.
102 A ¶ Dez's eyes go to the window.
103 A Headlights sweep across the fog.
104 A Then the glass goes white.
105 D DEZ: Don't.
106 A ¶ Oksana puts her palm on the lever.
107 D OKSANA: You can still walk out.
108 D DEZ: With what?
109 A ¶ He kicks the duffel toward her.
110 A Hard.
111 A It slides to her knees.
112 D DEZ [CONT'D]: Take it. Take the damn case.
113 A ¶ She doesn't move.
114 A Tariq doesn't move.
115 A The cable HUMS under load, waiting.
116 A ¶ Dez cocks the pistol.
117 D DEZ [CONT'D]: Pull it.
118 A ¶ She pulls.
119 A ¶ The whole hut SHUDDERS.
120 A Down in the fog, the cable begins to run.

### SCENE s01088 | EXT. MANGROVE SWAMP - TIDAL FLAT - DAWN
Detected names (may be incomplete or contain aliases): BEE, CALLOWAY, BRAM OKONJO, CAPTAIN HALVARD SKOGLUND
1 A ¶ Roots like fingers.
2 A Grey mud.
3 A A capsized skiff on its side.
4 A Mosquitos in clouds.
5 A ¶ BIANCA "BEE" CALLOWAY, 30s, torn shirt, drags a water jug through the mud.
6 A BRAM OKONJO, 40s, one boot missing, limps behind her.
7 A Between them, a bundled shape on a stretcher of branches: CAPTAIN HALVARD SKOGLUND, 60s, eyes closed.
8 D BEE: Bram. Pull.
9 D BRAM: I'm pulling.
10 D BEE: You're limping.
11 D BRAM: I'm limping and pulling.
12 A ¶ She stops.
13 A Wipes her face.
14 A Squats by the captain.
15 A Puts two fingers at his neck.
16 D BEE: Cap. Cap, you in there?
17 A ¶ He stirs.
18 A Mumbles.
19 A Doesn't wake.
20 D BRAM: Tide's turning.
21 D BEE: I can see.
22 D BRAM: We have maybe ten minutes before the flat goes under.
23 A ¶ She stands.
24 A Looks at the skiff.
25 A Looks at the horizon where a thin line of silver crawls toward them.
26 D BEE: Leave the jug.
27 D BRAM: That's our water.
28 D BEE: And that's his life. Choose.
29 A ¶ Bram stares at her.
30 A Drops the jug.
31 A It sinks into the mud with a slow burp.
32 A He grabs the stretcher.
33 A She grabs the other end.
34 A They lift.
35 A They stumble.
36 A A root catches Bram's foot; he falls.
37 A The stretcher tilts.
38 A The captain groans.
39 D BEE [CONT'D]: Bram!
40 D BRAM: Go on without me.
41 D BEE: Not a chance.
42 A ¶ She sets the stretcher down.
43 A Hauls him up by the belt.
44 A He leans on her.
45 A Their breath rasps.
46 D BRAM: Bee. If I --
47 D BEE: You're not going to.
48 D BRAM: If I do.
49 D BEE: Don't.
50 A ¶ The silver line is closer.
51 A The mud begins to glisten.
52 A A bird shrieks from the roots.
53 D CAPTAIN HALVARD (eyes still shut): Boys. Girls. Hold your horses.
54 D BEE: Cap!
55 D CAPTAIN HALVARD: I can walk.
56 D BRAM: You can't.
57 D CAPTAIN HALVARD: I can crawl. Let me.
58 A ¶ He pushes himself off the stretcher.
59 A Falls to hands and knees.
60 A Starts to crawl.
61 A Bee and Bram watch him go, mud to the elbows.
62 D BEE (quiet): Stubborn old man.
63 D BRAM: He taught us.
64 A ¶ They follow.
65 A The water laps their ankles.
66 A The roots rise ahead like a gate.

### SCENE s01072 | INT. MAINTENANCE CRAWLSPACE ABOVE CUBICLE FARM - DAY
Detected names (may be incomplete or contain aliases): RENATA KOWALCZYK, INTERCOM
1 A ¶ Ductwork.
2 A Dust.
3 A A folding chair wedged between pipes.
4 A A thermos.
5 A A lunch bag labeled "DO NOT TOUCH."
6 A ¶ RENATA KOWALCZYK, 40s, lanyard, cardigan, eats a sandwich.
7 A Content.
8 A A small desk fan hums.
9 A ¶ Through the vent grate below: the office.
10 A Fluorescent hum.
11 A Keyboards.
12 D INTERCOM [V.O.]: Good afternoon, team. A reminder that the quarterly synergy audit begins at three.
13 A ¶ Renata chews.
14 A Nods.
15 A Pours tea.
16 D INTERCOM [V.O., CONT'D]: Auditors will be reviewing all workstations. Including unoccupied ones.
17 A ¶ She stops chewing.
18 D INTERCOM [V.O., CONT'D]: Employee Kowalczyk's desk has been unoccupied for eleven months. Please report to Facilities.
19 A ¶ Renata sets down the sandwich.
20 A Looks through the grate.
21 A Her empty cubicle.
22 A A dead plant.
23 A Her nameplate.
24 A ¶ A flashlight beam sweeps the crawlspace behind her.
25 D RENATA (whispering): Oh, no.

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
