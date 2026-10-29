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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_sonnetG/group_03003.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

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

### SCENE s01035 | INT. QUARANTINED CRUISE SHIP - GIFT SHOP - NIGHT
Detected names (may be incomplete or contain aliases): RENATA KOVAC, MILES TOBIN, ADEBAYO ROSS, CAPTAIN HALE
1 A ¶ Shelves of magnets, snow globes, sunscreen.
2 A The registers are dark.
3 A Emergency strips light the floor.
4 A Through the glass storefront, an empty promenade deck rocks gently at anchor.
5 A ¶ RENATA KOVAC, 40s, ship's purser, hair in a messy bun, uniform jacket unbuttoned, sits behind the counter with a radio on her knee.
6 A MILES TOBIN, 30s, ship's doctor, mask around his chin, leans on a shelf.
7 A ADEBAYO ROSS, 50s, passenger, bathrobe, paper slippers, pretends to read a paperback.
8 A ¶ The radio crackles.
9 D CAPTAIN HALE [V.O.]: Shop, this is the bridge. Status.
10 D RENATA (into radio): Three souls, sir. All calm.
11 D CAPTAIN HALE [V.O.]: Keep them there. We've got a boat coming at dawn.
12 D RENATA: Understood.
13 A ¶ She sets the radio down.
14 A The silence returns.
15 D ADEBAYO (to no one): Two weeks on a boat, and the one thing they sell me is snow globes.
16 D MILES: You can have mine.
17 D ADEBAYO: Does it come with a cure?
18 D MILES: It comes with a mild placebo effect.
19 A ¶ Adebayo laughs, then coughs.
20 A Miles straightens, watches him.
21 D MILES [CONT'D] (quietly): Sir, how long has that been going?
22 D ADEBAYO: It's a tickle.
23 D MILES: How long?
24 D ADEBAYO: Since Tuesday.
25 A ¶ Renata stiffens.
26 A She slides her hand slowly toward the radio.
27 D RENATA (to all): Everyone stay exactly where you are.
28 D MILES: Renata.
29 D RENATA: Don't.
30 D MILES: He's not necessarily--
31 D RENATA: You said no one on this deck was symptomatic.
32 A ¶ Miles opens his mouth.
33 A Closes it.
34 D ADEBAYO (muttering): I should've stayed in the cabin.
35 A ¶ The storefront lights flicker.
36 A Outside, a searchlight sweeps the promenade.
37 A Then a second.
38 A Then a third, from a hull that isn't theirs.
39 D RENATA: That's not the dawn boat.
40 D MILES: No.
41 A ¶ She lifts the radio.
42 D RENATA [CONT'D]: Bridge, we have lights on the promenade.
43 A ¶ Static.
44 A Nothing.
45 A She tries again.
46 D RENATA [CONT'D]: Bridge?
47 D CAPTAIN HALE [V.O.] (whispering): Don't open the door. They're not ours.

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

### SCENE s01043 | INT. ASSAY OFFICE - GOLD RUSH TOWN - DAY (1851)
Detected names (may be incomplete or contain aliases): THADDEUS WHIT, CORNELIA BASS
1 A ¶ A plank room, one window grimed with dust, a counter scarred by a thousand scales.
2 A Weighing pans, crucibles, a brass balance under glass.
3 A ¶ THADDEUS WHIT, 50s, spectacles, black sleeve garters, presides behind the counter.
4 A His fingers are stained yellow from nitric acid.
5 A ¶ The door bangs.
6 A CORNELIA BASS, 30s, trousers and a man's hat, strides in.
7 A Dust to her knees.
8 A A leather pouch swings from her belt.
9 D THADDEUS: We close in ten minutes, madam.
10 D CORNELIA: Then I'll be quick.
11 A ¶ She drops the pouch on the counter.
12 A It thuds.
13 D THADDEUS: What have you got?
14 D CORNELIA: Color.
15 A ¶ He unties the cord.
16 A Pours.
17 A Dull yellow dust pools on a sheet of paper.
18 A ¶ He pinches some.
19 A Rolls it between his fingers.
20 A Holds it to the light.
21 D THADDEUS: Where was this panned?
22 D CORNELIA: Dry Creek.
23 D THADDEUS: Dry Creek has been dry for a year.
24 D CORNELIA: That's why it's called Dry Creek.
25 A ¶ He gives her a thin smile.
26 A Reaches for a vial.
27 D THADDEUS: A drop of acid. For the test.
28 D CORNELIA: Go on.
29 A ¶ He doses the metal.
30 A It stays bright.
31 A He nods.
32 D THADDEUS: It's good.
33 D CORNELIA: I know.
34 D THADDEUS: Twelve dollars an ounce.
35 D CORNELIA: Twenty.
36 D THADDEUS: Fourteen.
37 D CORNELIA: Seventeen and the sack.
38 D THADDEUS: Done.
39 A ¶ He weighs it.
40 A Writes a slip.
41 A Counts bills from a strongbox.
42 A Slides them over.
43 A She doesn't count them.
44 D CORNELIA: You'll be here tomorrow?
45 D THADDEUS: Every day but Sunday.
46 D CORNELIA: Good. I'll bring more.
47 D THADDEUS: Madam, if I may. A woman alone in these hills--
48 D CORNELIA: I'm not alone.
49 D THADDEUS: Your husband?
50 D CORNELIA: My claim. A hundred yards of dirt. And a rifle.
51 D THADDEUS: Ah.
52 A ¶ She tips her hat.
53 A Heads for the door.
54 A Stops with her hand on the latch.
55 D CORNELIA [CONT'D]: Mr. Whit.
56 D THADDEUS: Yes?
57 D CORNELIA: You tested my gold with acid.
58 D THADDEUS: Standard practice.
59 D CORNELIA: And you held it to the light.
60 D THADDEUS: Also standard.
61 D CORNELIA: But you never looked at the weight.
62 A ¶ Thaddeus freezes.
63 A The pen drops from his fingers.
64 D CORNELIA [CONT'D]: That scale tilts two grains left. I've been watching it for three weeks.
65 D THADDEUS: It's properly calibrated.
66 D CORNELIA: It's not.
67 D THADDEUS: I'll ask you to leave.
68 D CORNELIA: You'll ask me nothing.
69 A ¶ She turns back.
70 A Her hand slips beneath her coat.
71 D THADDEUS: Madam.
72 D CORNELIA: Open the strongbox.
73 D THADDEUS: This is robbery.
74 D CORNELIA: It's restitution.
75 A ¶ He doesn't move.
76 A The clock ticks.
77 A Dust drifts through the light.
78 D THADDEUS: There's four hundred dollars.
79 D CORNELIA: There's four thousand. Under the false bottom.
80 A ¶ Thaddeus goes white.
81 A He kneels, trembling, lifts the strongbox's lining.
82 D THADDEUS: How?
83 D CORNELIA: I used to keep books in Sacramento.
84 A ¶ He lays a bundle on the counter.
85 A Then another.
86 A She slides them into her pouch.
87 D CORNELIA [CONT'D] (over his words): We never met.
88 D THADDEUS: We never met.
89 A ¶ They say it together.
90 A She smiles.
91 A He doesn't.
92 A ¶ She leaves.
93 A The door clacks shut.
94 A The bell above it jingles for a long time.

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

### SCENE pd_dollhouse_2 | INT. DOLLHOUSE - CONTINUOUS
Detected names (may be incomplete or contain aliases): THE CHILDREN, NORA, MAID, HELMER
1 D THE CHILDREN: . Mother, the stranger man has gone out through the gate.
2 D NORA: Yes, dears, I know. But, don’t tell anyone about the stranger man. Do you hear? Not even papa.
3 D CHILDREN: No, mother; but will you come and play again?
4 D NORA: No, no,—not now.
5 D CHILDREN: But, mother, you promised us.
6 D NORA: Yes, but I can’t now. Run away in; I have such a lot to do. Run away in, my sweet little darlings.
7 A ¶ She gets them into the room by degrees and shuts the door on them; then sits down on the sofa, takes up a piece of needlework and sews a few stitches, but soon stops.
8 D NORA: No!
9 A ¶ Throws down the work, gets up, goes to the hall door and calls out.
10 D NORA: Helen! bring the Tree in.
11 A ¶ Goes to the table on the left, opens a drawer, and stops again.
12 D NORA: No, no! it is quite impossible!
13 A ¶ coming in with the Tree.
14 D MAID: . Where shall I put it, ma’am?
15 D NORA: Here, in the middle of the floor.
16 D MAID: Shall I get you anything else?
17 D NORA: No, thank you. I have all I want.
18 A ¶ Exit MAID.
19 A ¶ begins dressing the tree.
20 D NORA: . A candle here-and flowers here—The horrible man! It’s all nonsense—there’s nothing wrong. The tree shall be splendid! I will do everything I can think of to please you, Torvald!—I will sing for you, dance for you—
21 A ¶ HELMER comes in with some papers under his arm.
22 D NORA: Oh! are you back already?
23 D HELMER: Yes. Has anyone been here?
24 D NORA: Here? No.
25 D HELMER: That is strange. I saw Krogstad going out of the gate.
26 D NORA: Did you? Oh yes, I forgot, Krogstad was here for a moment.
27 D HELMER: Nora, I can see from your manner that he has been here begging you to say a good word for him.
28 D NORA: Yes.
29 D HELMER: And you were to appear to do it of your own accord; you were to conceal from me the fact of his having been here; didn’t he beg that of you too?
30 D NORA: Yes, Torvald, but—
31 D HELMER: Nora, Nora, and you would be a party to that sort of thing? To have any talk with a man like that, and give him any sort of promise? And to tell me a lie into the bargain?
32 D NORA: A lie—?
33 D HELMER: Didn’t you tell me no one had been here?
34 A ¶ Shakes his finger at her.
35 D HELMER: My little songbird must never do that again. A songbird must have a clean beak to chirp with—no false notes!
36 A ¶ Puts his arm round her waist.
37 D HELMER: That is so, isn’t it? Yes, I am sure it is.
38 A ¶ Lets her go.
39 D HELMER: We will say no more about it.
40 A ¶ Sits down by the stove.
41 D HELMER: How warm and snug it is here!
42 A ¶ Turns over his papers.
43 A ¶ after a short pause, during which she busies herself with the Christmas Tree.
44 D NORA: Torvald!
45 D HELMER: Yes.

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

### SCENE pd_sisters_5 | INT. SISTERS - CONTINUOUS
Detected names (may be incomplete or contain aliases): CHARLOTTA, LUBOV ANDREYEVNA, VARYA, PISCHIN, TROFIMOV, YASHA
1 D CHARLOTTA: Ein, zwei, drei .
2 A ¶ She quickly lifts up the shawl, which is hanging down.
3 A ANYA is standing behind it; she bows and runs to her mother, hugs her and runs back to the drawing-room amid general applause.
4 A ¶ Applauds.
5 D LUBOV: Bravo, bravo!
6 D CHARLOTTA: Once again! Ein, zwei, drei !
7 A ¶ Lifts the shawl.
8 A VARYA stands behind it and bows.
9 A ¶ Astonished.
10 D PISCHIN: Think of that, now.
11 D CHARLOTTA: The end!
12 A ¶ Throws the shawl at PISCHIN, curtseys and runs into the drawing-room.
13 A ¶ Runs after her.
14 D PISCHIN: Little wretch.... What? Would you?
15 A ¶ Exit.
16 D LUBOV: Leonid hasn’t come yet. I don’t understand what he’s doing so long in town! Everything must be over by now. The estate must be sold; or, if the sale never came off, then why does he stay so long?
17 A ¶ Tries to soothe her.
18 D VARYA: Uncle has bought it. I’m certain of it.
19 A ¶ Sarcastically.
20 D TROFIMOV: Oh, yes!
21 D VARYA: Grandmother sent him her authority for him to buy it in her name and transfer the debt to her. She’s doing it for Anya. And I’m certain that God will help us and uncle will buy it.
22 D LUBOV: Grandmother sent fifteen thousand roubles from Yaroslav to buy the property in her name--she won’t trust us--and that wasn’t even enough to pay the interest.
23 A ¶ Covers her face with her hands.
24 D LUBOV: My fate will be settled to-day, my fate....
25 A ¶ Teasing VARYA.
26 D TROFIMOV: Madame Lopakhin!
27 A ¶ Angry.
28 D VARYA: Eternal student! He’s already been expelled twice from the university.
29 D LUBOV: Why are you getting angry, Varya? He’s teasing you about Lopakhin, well what of it? You can marry Lopakhin if you want to, he’s a good, interesting man.... You needn’t if you don’t want to; nobody wants to force you against your will, my darling.
30 D VARYA: I do look at the matter seriously, little mother, to be quite frank. He’s a good man, and I like him.
31 D LUBOV: Then marry him. I don’t understand what you’re waiting for.
32 D VARYA: I can’t propose to him myself, little mother. People have been talking about him to me for two years now, but he either says nothing, or jokes about it. I understand. He’s getting rich, he’s busy, he can’t bother about me. If I had some money, even a little, even only a hundred roubles, I’d throw up everything and go away. I’d go into a convent.
33 D TROFIMOV: How nice!
34 A ¶ To TROFIMOV.
35 D VARYA: A student ought to have sense!
36 A ¶ Gently, in tears.
37 D VARYA: How ugly you are now, Peter, how old you’ve grown!
38 A ¶ To LUBOV ANDREYEVNA, no longer crying.
39 D VARYA: But I can’t go on without working, little mother. I want to be doing something every minute.
40 A ¶ Enter YASHA.
41 A ¶ Nearly laughing.
42 D YASHA: Epikhodov’s broken a billiard cue!
43 A ¶ Exit.
44 D VARYA: Why is Epikhodov here? Who said he could play billiards? I don’t understand these people.
45 A ¶ Exit.
46 D LUBOV: Don’t tease her, Peter, you see that she’s quite unhappy without that.
47 D TROFIMOV: She takes too much on herself, she keeps on interfering in other people’s business. The whole summer she’s given no peace to me or to Anya, she’s afraid we’ll have a romance all to ourselves. What has it to do with her? As if I’d ever given her grounds to believe I’d stoop to such vulgarity! We are above love.

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
