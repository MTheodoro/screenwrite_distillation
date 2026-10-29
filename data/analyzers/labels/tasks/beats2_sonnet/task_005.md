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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_sonnet/group_00005.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01167 | INT. UNDERGROUND PARKING GARAGE - SPEED CLIMBING WALL - NIGHT
Detected names (may be incomplete or contain aliases): SOLENE DUBOIS
1 A ¶ A concrete bunker converted to a training gym.
2 A Fluorescent tubes.
3 A Rubber matting.
4 A A forty-foot climbing wall bristling with colored holds, chalk dust drifting like smoke.
5 A A battered boombox sits on a plastic crate, cassette tape turning.
6 A ¶ SOLENE DUBOIS (20s, tank top, taped fingers, chalk bag on her hip) stands at the base of the wall.
7 A She rolls her neck, shakes out her arms, then bends and kisses the knuckles of each hand.
8 A ¶ A stopwatch hangs from her wrist.
9 A Beside the wall a laminated sign reads: RECORD 5.48.
10 A ¶ She presses START on the stopwatch and slaps the first hold.
11 A She climbs.
12 A Her body flows up the wall, forearms flexing, toes smearing on the foot chips, her left hand swatting a hold while her right hand already reaches for the next.
13 A Chalk bursts off her fingers.
14 A She doesn't breathe.
15 A She doesn't look down.
16 A ¶ At the midpoint, she swings her weight out, catches a sloper with her fingertips, and one of her feet slips.
17 A She hangs by one hand for a half-second, her whole body swinging out over the mat, and then her foot finds the chip again and she surges upward, past the crux, past the red hold, past the yellow, and slaps the top button.
18 A The timer chirps.
19 A ¶ She drops.
20 A Lands in a crouch on the mat.
21 A Looks at the watch.
22 D SOLENE (reading): Five-fifty-one.
23 A ¶ She sits down hard on the mat, breath ragged, forehead against her knees.
24 A The boombox cassette clicks and flips to the B side.
25 A A man's voice, warm, gravelly, slightly distorted, starts up from the speakers.
26 A A recording.
27 D SOLENE [V.O.] (recording, her own voice, younger): Solene, it's you. I know you're going to listen to this at two in the morning because you never sleep before a final. I want you to remember the third hold from the top. You always rush it. Breathe there. One breath. The wall will wait for you.
28 A ¶ Solene lifts her head.
29 A She looks at the boombox, then up at the wall.
30 D SOLENE [V.O., CONT'D] (recording): And remember. You are not climbing against the clock. You are climbing against yesterday's Solene. She was good. Be better.
31 A ¶ The tape clicks off.
32 A Silence.
33 A Solene wipes her eyes with a chalky wrist, leaving a white streak across her cheek.
34 A She stands.
35 A Shakes out her hands.
36 A Chalks up.
37 A Walks back to the wall.
38 D SOLENE (muttering): One breath.
39 A ¶ She presses START.
40 A She slaps the first hold.
41 A She climbs.
42 A The timer ticks.
43 A She reaches the midpoint, reaches the sloper, and this time doesn't slip.
44 A At the third hold from the top, she pauses.
45 A One breath.
46 A In.
47 A Out.
48 A Then she surges up and slaps the button.
49 A ¶ She drops.
50 A Looks at the watch.
51 D SOLENE [CONT'D]: Five forty-seven.
52 A ¶ Her mouth cracks into a grin.
53 A She pumps one fist in the empty air, then another.
54 A She turns to the boombox and lifts it from the crate, clutching it against her chest as the tape spools slowly backward.

### SCENE s00748 | INT. CORPORATE OFFICE - 31ST FLOOR - MORNING
Detected names (may be incomplete or contain aliases): HORTENSE BELLWEATHER, ARCHIBALD DRUMMOND
1 A ¶ An open-plan floor of the sort that wins architecture awards and loses employees.
2 A Glass walls.
3 A Beanbags nobody sits in.
4 A A kombucha tap that dispenses nothing.
5 A In the corner office, behind a desk the size of a landing strip, sits HORTENSE BELLWEATHER, fifties, in a charcoal suit and a necklace of tiny silver clocks.
6 A She has the posture of a woman who has survived four mergers.
7 A ¶ On the desk, a speakerphone the colour of an old tooth.
8 A Beside it, a cold cup of tea.
9 A ¶ She stares at the phone.
10 A It blinks green.
11 D HORTENSE: Archibald. Speak.
12 D ARCHIBALD [V.O.] (over speakerphone, jaunty): Hortense! Morning! Lovely morning. Are you looking out the window?
13 D HORTENSE: I'm looking at my screen.
14 D ARCHIBALD [V.O.]: Look out the window.
15 A ¶ She turns her chair.
16 A Across the plaza, in the opposing tower, a man in a cream suit waves from the thirty-first floor.
17 A ARCHIBALD DRUMMOND, sixties, silver hair, big teeth.
18 A He holds his own phone to his ear and waves with the other hand.
19 D HORTENSE: You moved your desk to face mine.
20 D ARCHIBALD [V.O.]: Corporate suggested "transparency."
21 D HORTENSE: Corporate suggested "dialogue."
22 D ARCHIBALD [V.O.]: Transparency is dialogue with glass.
23 A ¶ Hortense sets her tea down.
24 A She does not smile.
25 A The clocks on her necklace jingle.
26 D HORTENSE: What do you want?
27 D ARCHIBALD [V.O.]: A little chat. About the Henderson account.
28 D HORTENSE: The Henderson account is mine.
29 D ARCHIBALD [V.O.]: Is it?
30 D HORTENSE: I won it.
31 D ARCHIBALD [V.O.]: You did. In 2016.
32 A ¶ She taps a pen on the desk.
33 A Across the plaza, Archibald pulls a thick binder from a drawer and holds it up to the glass, like a magician showing an empty hat.
34 D HORTENSE: What's that?
35 D ARCHIBALD [V.O.]: The reorganisation.
36 D HORTENSE: I wasn't consulted.
37 D ARCHIBALD [V.O.]: You were cc'd.
38 D HORTENSE: On a Friday at five.
39 D ARCHIBALD [V.O.]: Best day for news.
40 A ¶ She rises and crosses to the window, pressing a hand to the cold glass.
41 A Down below, the plaza fountain is dry, its basin full of cigarette butts and coins.
42 A A pigeon bathes in the dust.
43 D HORTENSE: Under the plan, who reports to whom?
44 D ARCHIBALD [V.O.]: You report to me.
45 D HORTENSE: Say that again.
46 D ARCHIBALD [V.O.]: You. Report. To me.
47 A ¶ Hortense nods slowly.
48 A She returns to her chair.
49 A She picks up the speakerphone and brings it close, until her mouth is inches from the grille.
50 D HORTENSE: Archibald. How many years have you worked here?
51 D ARCHIBALD [V.O.]: Nineteen.
52 D HORTENSE: And how many have I?
53 D ARCHIBALD [V.O.]: Thirty-one.
54 D HORTENSE: Thirty-one. Do you know what I've learned?
55 D ARCHIBALD [V.O.]: That silence is golden?
56 D HORTENSE: That people with binders are afraid of people without them.
57 A ¶ Across the plaza, Archibald's smile flickers.
58 A He lowers the binder.
59 D ARCHIBALD [V.O.]: Hortense, this isn't personal.
60 D HORTENSE: It's the most personal thing in this building.
61 A ¶ She opens a drawer.
62 A Withdraws a single sheet of paper and a gold fountain pen.
63 A She uncaps the pen with a small, decisive click.
64 A She writes.
65 A The nib scratches.
66 A Across the way, Archibald leans forward, squinting.
67 D ARCHIBALD [V.O.]: What are you doing?
68 D HORTENSE: Redistributing.
69 A ¶ She holds the sheet to the window.
70 A Large block letters, readable even at forty yards: I RESIGN.
71 A EFFECTIVE IMMEDIATELY.
72 A TAKE THE KOMBUCHA.
73 A ¶ Archibald's mouth opens.
74 A The binder slips from his hands.
75 A He bends to retrieve it and bumps his head on the desk.
76 D ARCHIBALD [V.O.] (muffled, wincing): Hortense!
77 D HORTENSE: Goodbye, Archibald.
78 A ¶ She presses the button.
79 A The line clicks dead.
80 A She gathers her tea, her pen, and a single silver clock from the necklace, which she unhooks and places on the desk like a chess piece.
81 A ¶ Then she walks out, heels ringing on the polished floor, past the empty beanbags and the silent tap, and into the elevator.
82 A ¶ Across the plaza, Archibald presses his face to the glass.
83 A Behind him, the floor has gone very quiet.

### SCENE s00730 | INT. WIZARD'S ABANDONED LIBRARY - TWILIGHT
Detected names (may be incomplete or contain aliases): ORRIN THISTLEDOWN
1 A ¶ A circular chamber at the top of a leaning tower.
2 A Shelves spiral to a ceiling lost in cobweb.
3 A Dust hangs in the last red light from a cracked rose window.
4 A On a lectern in the centre lies an enormous book, its pages stirring though there is no wind.
5 A ¶ The silence is old and settled.
6 A ¶ A heavy door groans.
7 A Boots on stone.
8 A ¶ ORRIN THISTLEDOWN, sixties, a thin man in a patched travelling cloak, enters leaning on a gnarled staff.
9 A He is breathing hard from the stairs.
10 A A wiry grey beard, spectacles tied with twine.
11 A He pauses, taking in the room as one takes in a grave.
12 D ORRIN (softly): Well. You kept it tidy, old friend.
13 A ¶ He crosses to the lectern.
14 A Brushes dust from the open page with the back of his hand.
15 A Reads.
16 A His lips move.
17 A ¶ From his satchel he draws a folded letter, brown at the edges.
18 A He smooths it on the lectern beside the book.
19 D ORRIN [V.O.] (reading the letter, in his younger voice): "Orrin, if you read this, I am gone, and the tower is yours. The book will not open for anyone but you. Do not be afraid of it. It is only lonely."
20 A ¶ Orrin lowers the letter.
21 A He looks up at the rose window, where the last sun is bleeding out.
22 D ORRIN [CONT'D] (to the book): Lonely. Aye. So are we.
23 A ¶ He sets his staff against the shelves, rolls up his sleeves, and turns the first page.
24 A A faint golden glow rises from the paper and catches in his spectacles.
25 D ORRIN [CONT'D] (a small, wondering laugh): There you are.
26 A ¶ The pages begin to turn on their own, one after another, patient as breathing.
27 A Orrin pulls up a stool and sits.

### SCENE s01818 | EXT. ABANDONED MISSION CHURCH - COURTYARD - SUNSET
Detected names (may be incomplete or contain aliases): CALEB MONTOYA-HART, ROSALIE, FATHER EMILIO DUARTE
1 A ¶ A crumbling adobe courtyard where a dry fountain stands at the center, cracked and filled with tumbleweed.
2 A A bell tower leans, its bell long gone.
3 A Long violet shadows crawl across the flagstones.
4 A Beyond the broken wall, the desert runs to a copper horizon.
5 A ¶ CALEB MONTOYA-HART, sixties, a widowed rancher with a weathered hat and a silver mustache, sits on the rim of the fountain with a canteen across his knees.
6 A Beside him, his granddaughter ROSALIE, ten, in a faded blue dress and a straw hat too big for her, draws in the dust with a stick.
7 A A little way off, an old gray mule named SAINT CHRISTOPHER stands with his head low, and a stranger, a wandering priest called FATHER EMILIO DUARTE, fifties, in a patched cassock and sandals, kneels by a small fire, boiling coffee in a tin cup.
8 A ¶ The desert is quiet.
9 A The coffee smells of smoke.
10 D CALEB: Father, I didn't think there was anyone left out here.
11 D FATHER EMILIO: There never is. And then there is.
12 D ROSALIE: Grandpa, why is the fountain empty?
13 D CALEB: Because there's no water.
14 D ROSALIE: But why did they build it?
15 D FATHER EMILIO: Because once there was.
16 D ROSALIE: Where did it go?
17 D FATHER EMILIO (smiling): That is a very good question, little one. The old ones said it went underground to rest.
18 D ROSALIE: Water doesn't rest.
19 D FATHER EMILIO: No? Everything rests, eventually.
20 A ¶ Rosalie considers this.
21 A She draws a long wavy line in the dust, then a second beneath it.
22 D CALEB: You've been here long?
23 D FATHER EMILIO: Some years.
24 D CALEB: Alone?
25 D FATHER EMILIO: Never alone.
26 A ¶ He lifts the cup from the fire, blows on it, and offers it to Caleb.
27 A Caleb studies it, takes it, and drinks.
28 A His shoulders ease.
29 A He passes it to Rosalie, who sips, makes a face, and hands it back.
30 D ROSALIE: That's terrible.
31 D CALEB: Rosalie.
32 D FATHER EMILIO: She is right. It is terrible coffee. But it is warm.
33 A ¶ The sun touches the horizon.
34 A The shadows of the walls stretch over the three of them.
35 A The mule shifts its weight and sighs.
36 D CALEB: Father, I came out to scatter my wife's ashes. I thought this was the place.
37 D FATHER EMILIO: Why here?
38 D CALEB: She was married here. Fifty years ago in June.
39 D FATHER EMILIO: Then it is the place.
40 A ¶ Caleb takes a small tin from inside his coat.
41 A He turns it over in his hands.
42 A Rosalie puts down her stick and takes his free hand.
43 A The priest crosses himself and stands.
44 D FATHER EMILIO [CONT'D]: Shall I say something?
45 D CALEB: Please.
46 D FATHER EMILIO (gently): Lord, here is a woman who loved this land. Let her rest in it.
47 A ¶ Caleb opens the tin.
48 A A breeze rises across the courtyard, and with it the first of the ashes lifts, a pale ribbon curling over the dry fountain, and then drifting out through the gap in the wall toward the last light.
49 D ROSALIE (whispering): Bye, Grandma.
50 A ¶ The wind lifts her hat.
51 A The mule lifts his head.
52 A The three of them watch the ribbon of dust until it is gone.

### SCENE s02391 | INT. BAKERY TASTING ROOM - DAY
Detected names (may be incomplete or contain aliases): GABRIEL ROSSETTI-OKEKE, THEO ANDRZEJEWSKI, PASTRY CHEF MARGUERITE DUVALIER
1 A ¶ White tablecloths, little forks, six slices of cake on six small plates.
2 A A chandelier made of whisks.
3 A ¶ GABRIEL ROSSETTI-OKEKE, thirties, sits very straight beside his fiance THEO ANDRZEJEWSKI, thirties, who is already eating.
4 A Across from them, PASTRY CHEF MARGUERITE DUVALIER, fifties, stands with her hands folded, wearing the placid smile of someone who has seen every possible argument over frosting.
5 A He lifts his fork, takes a bite of the lemon, closes his eyes, and sets the fork down with great care, and he turns to the other man, and he whispers something that makes him laugh with his mouth full, and he waves a hand, spraying crumbs, and then he points the fork at the chef.
6 D THEO: This is the one.
7 D GABRIEL: We haven't tried the others.
8 D THEO: We don't need to.
9 D MARGUERITE: Take your time. Some couples spend hours.
10 D GABRIEL: We're not some couples.
11 D THEO: We have a flight at four.
12 D MARGUERITE: Of course.
13 A ¶ He pushes the plate aside, reaches for the vanilla, tastes it, and nods, and the other one nods back, and they look at each other, and each of them lifts a fork and feeds the other a bite of the third slice, solemn as a communion.
14 D GABRIEL: Oh.
15 D THEO: Oh.
16 D MARGUERITE (beaming): That's the almond.
17 D GABRIEL: We'll take the almond.
18 D THEO: And the lemon on the top tier.
19 D MARGUERITE: Lovely. I'll draw up the order.
20 A ¶ She disappears into the kitchen.
21 A The room is quiet.
22 A A clock ticks.
23 A Theo slides his hand across the tablecloth and takes Gabriel's.
24 D THEO [CONT'D]: Can I tell you something?
25 D GABRIEL: Always.
26 D THEO: I didn't want the cake.
27 D GABRIEL: What?
28 D THEO: I wanted the excuse to sit here and watch you pick.
29 A ¶ Gabriel stares at him.
30 A Then, with enormous dignity, he picks up the lemon slice and presses it into his own face.
31 A ¶ The kitchen door swings open.
32 A Marguerite stands there with a clipboard and takes it in without blinking.
33 D MARGUERITE: Shall I note "fruit-forward"?
34 D GABRIEL (through lemon): Please.

### SCENE s01137 | INT. BOTANICAL GARDEN - GREENHOUSE - DAY
Detected names (may be incomplete or contain aliases): SUKI, MOSES, GARDENER, ULRICH
1 A ¶ Humid glass.
2 A Orchids and palms.
3 A Gravel paths.
4 A Mist nozzles hiss.
5 A ¶ SUKI (30s, tourist cardigan, a camera around her neck) pretends to photograph a fern.
6 A MOSES (50s, bucket hat, binoculars) pretends to read a plaque.
7 A A GARDENER (60s, canvas apron, pruners) clips a hedge nearby, whistling.
8 D SUKI: He hasn't looked at us.
9 D MOSES: He's looked at us three times.
10 D SUKI: Then he's bored.
11 D MOSES: He's a gardener. He's trained to be bored.
12 D SUKI: Do you have the schedule?
13 D MOSES: Guards change at two. They leave the east door unlocked for the delivery.
14 D SUKI: And the orchid?
15 D MOSES: Third bench. Behind the staghorn. Blue pot.
16 D SUKI: How much?
17 D MOSES: Four hundred thousand to the right collector.
18 D SUKI: For a flower.
19 D MOSES: For the last one.
20 A ¶ The Gardener's whistle stops.
21 A He sets down his pruners.
22 D GARDENER: It's not the last one.
23 A ¶ Suki and Moses turn, slowly.
24 D SUKI: Excuse me?
25 D GARDENER: The blue Vanda coerulea. There are eleven in the cold house. You're welcome to look.
26 D MOSES: We were just admiring...
27 D GARDENER: Admire all you like. My name is Ulrich. I've been the keeper here for thirty-six years, and I know what you're after.
28 D SUKI (to Moses): Told you.
29 D MOSES: Don't.
30 D ULRICH: I'll make you a deal. You leave the blue pot. I'll let you take a cutting. A real one. Ready to root.
31 D SUKI: Why?
32 D ULRICH: Because the right collector is a man named Prosser who kills his plants, and I'd rather see one live.
33 D MOSES (slowly): Show us the cold house.
34 D ULRICH: Follow me. And put the camera away. It frightens the ferns.

### SCENE s01629 | INT. TELEGRAPH OFFICE, DUSTY JUNCTION - DAY
Detected names (may be incomplete or contain aliases): MARSHAL ISADORA CRANE, NELL FENTON, OTTO BRAND, LUPE ARRIAGA, TOMMY
1 A ¶ Shuttered windows.
2 A Heat.
3 A A dull roar of hooves somewhere beyond the wall.
4 A A telegraph key clatters on its own.
5 A ¶ MARSHAL ISADORA CRANE, 40s, grey duster, stands at the window, peering through a slat.
6 A NELL FENTON, 20s, the operator, taps the key with a pencil while OTTO BRAND, 60s, the stationmaster, stacks flour sacks against the door and LUPE ARRIAGA, 30s, a drover, holds a shotgun and checks the roof beams for cracks.
7 A Nobody speaks until the floor starts to shake.
8 D CRANE: Nell. What does the line say?
9 D NELL: It says "hold." Over and over.
10 D OTTO: Hold what?
11 D NELL: Hold fast, hold the line, hold your fire. It doesn't say.
12 D LUPE: Who sent it?
13 D NELL: Miles West. Eight miles up.
14 D TOMMY [O.S.] (faint, through the wall): They're coming through! Don't let 'em split the herd!
15 D CRANE: That's Tommy.
16 D LUPE: Tommy's dead. We buried him Tuesday.
17 D CRANE: Then someone sounds like him.
18 A ¶ The shaking grows.
19 A Dust sifts from the ceiling.
20 A Otto stops stacking.
21 A Lupe lifts the shotgun.
22 A Nell grips the key.
23 A Crane lets the slat fall shut and draws her revolver, and the five of them stand there as the roar rises to a wall of sound.
24 D CRANE [CONT'D]: Nobody fires till I do.
25 A ¶ The roar passes.
26 A Slowly it fades.
27 A ¶ Silence.
28 D OTTO: Well.
29 D NELL: It says "all clear."
30 D CRANE (dry): That's a first.

### SCENE s00758 | INT. MRI SUITE - HOSPITAL BASEMENT - NIGHT
Detected names (may be incomplete or contain aliases): SAOIRSE KEANE, TECH DELPHINE ABERNATHY, EUSTACE QUINN
1 A ¶ A white tube hums at the centre of a cold room.
2 A Warning signs plaster the walls.
3 A Through a glass window, a control booth glows green.
4 A ¶ DR. SAOIRSE KEANE, forties, radiologist, leans on the console.
5 A TECH DELPHINE ABERNATHY, twenties, adjusts a dial.
6 A On the sliding table inside the machine lies EUSTACE QUINN, seventies, a patient in a gown, hands folded across his chest.
7 D DELPHINE: Mr. Quinn, we're starting. Try to stay still.
8 D EUSTACE [V.O.] (over intercom, shaky): I'm still.
9 D SAOIRSE: Good.
10 A ¶ The machine thumps.
11 A A grey image flickers onto the monitor.
12 A Saoirse leans forward.
13 A Delphine does the same.
14 A Their faces light from below.
15 D DELPHINE: There.
16 D SAOIRSE: I see it.
17 D DELPHINE: That's not a tumour.
18 D SAOIRSE: It is not.
19 A ¶ They share a smile of relief.
20 A Delphine reaches for the intercom.
21 D DELPHINE: Mr. Quinn, good news--
22 A ¶ On the screen the image jolts.
23 A The table inside the machine slides forward.
24 A Eustace's hand flies up.
25 A A metal tray flies across the room and clangs against the tube.
26 D SAOIRSE: His ring!
27 D DELPHINE: Pull the table!
28 A ¶ Both women lunge.
29 A Delphine slams the emergency button, Saoirse throws her weight on the stop lever.
30 A The magnet whines down.
31 A ¶ Silence.
32 A They rush into the room, drag the table free, and catch Eustace as he sits up, gasping, his wedding ring tugging at his finger.
33 D EUSTACE (laughing and wincing): Forty years it's never come off.

### SCENE s02273 | EXT. BOCCE COURT, FERRY DECK - AFTERNOON
Detected names (may be incomplete or contain aliases): TONINO FERRARI, MARCELLO DELUCA, SIGNORA PAOLA, LUCA
1 A ¶ A strip of crushed oyster shell has been raked flat on the stern of a car ferry.
2 A Gulls wheel.
3 A The deck hums with the engine, and every bowl rolls a little to starboard.
4 A ¶ TONINO FERRARI, seventy, in a cardigan the colour of tobacco, crouches over the pallino.
5 A MARCELLO DELUCA, sixty-eight, his brother-in-law of forty years, stands with a bowl cradled against his belly like a sleeping cat.
6 A SIGNORA PAOLA, the self-appointed umpire, perches on a cooler with a tape measure.
7 A Beside her LUCA, nine, holds the scorecard.
8 D TONINO: You nudged it.
9 D MARCELLO: I breathed on it.
10 A ¶ Tonino rises.
11 A He does not look at Marcello.
12 A He looks at the bowl, at the pallino, at the tape.
13 A He hands the tape to Luca without a word.
14 D PAOLA: Measure.
15 A ¶ Luca stretches the tape.
16 A Marcello's bowl is closer by the width of a thumbnail.
17 A Tonino takes his own bowl and, with a slow, deliberate underarm, sends it at Marcello's.
18 A The shells crack.
19 A He knocks it sideways, over the rail and into the wake.
20 A ¶ He stands there with his arm still extended.
21 A Marcello turns slowly, his mouth open, and the whole deck goes quiet but for the engine.

### SCENE s02034 | INT. BOWLING ALLEY - LANE 12 - NIGHT
Detected names (may be incomplete or contain aliases): MARCEL, DUBOIS, GERT, NAKAMURA-HOLT, DELPHINE ARCHAMBEAU
1 A ¶ Neon pins.
2 A Disco ball dull with grease.
3 A A league night.
4 A Leather shoes squeak on wax.
5 A ¶ The tenth frame.
6 A Final game of the championship.
7 A Lane 12 holds three people and a hush.
8 A ¶ MARCEL "THE HAMMER" DUBOIS (50s, belly, wristband, ball already in hand) steps to the line.
9 A His rival, GERTRUDE "GERT" NAKAMURA-HOLT (60s, sleeveless, forearms like cables) leans on the ball return, arms crossed, scowling.
10 A Their referee, DELPHINE ARCHAMBEAU (30s, clipboard, whistle around her neck) stands between them, tally sheet trembling in her hands.
11 D DELPHINE: Marcel needs a spare for the win.
12 D GERT: He needs a miracle.
13 D MARCEL: Silence, please.
14 A ¶ He raises the ball to his chin.
15 A Closes his eyes.
16 A Steps.
17 A Swings.
18 A Releases.
19 A The ball rolls, wobbles, drifts, and curves wide of the head pin.
20 A Seven pins fall.
21 A Three stand: left, right, center.
22 D DELPHINE: Seven.
23 D GERT (smirking): Called it.
24 A ¶ Marcel stands rigid.
25 A The ball returns.
26 A He catches it and, without a word, wheels around, lifts it high, and hurls it.
27 A It crashes into the ball return, bounces, spins across the lane, skids into the gutter, and strikes a standing pin from the side.
28 A All three tumble.
29 A Pinsetter whirs.
30 A Gert throws up both arms, Delphine drops her clipboard, Marcel looks at his empty hands as if he is not sure they are his.
31 A ¶ A long silence.
32 A Then Delphine laughs.
33 A Gert laughs.
34 A Marcel, shaking, laughs loudest of all.
35 D DELPHINE: That is not legal. That is absolutely not legal.
36 D GERT: It counts.
37 D MARCEL: Does it?
38 D DELPHINE (exhaling): It counts.
39 A ¶ Gert extends a hand.
40 A Marcel takes it.
41 A They shake, too long, too hard, then both let go and grab their lanes' ball return, smiling stupidly.
42 D GERT: Next year, I destroy you.
43 D MARCEL: I look forward to it.

### SCENE s01337 | INT. LIGHTHOUSE KEEPER'S PARLOR - NIGHT (1888)
Detected names (may be incomplete or contain aliases): MADAME CORDELIA OSTERHOUT, COMMODORE ARCHIBALD FENN, LADY MIRIAM FENN, KEEPER ISAIAH TULL, MISS THEODORA CRANE, BARNABY
1 A ¶ Oil lamps.
2 A Wind shaking the shutters.
3 A A round table draped in black velvet with a candle at its heart.
4 A Six chairs.
5 A ¶ MADAME CORDELIA OSTERHOUT, 50s, medium, in a high-collared gown.
6 A COMMODORE ARCHIBALD FENN, 60s, whiskers, pocket watch.
7 A LADY MIRIAM FENN, 40s, his wife, gloved hands folded.
8 A KEEPER ISAIAH TULL, 50s, oilskin coat, scowling.
9 A A young MISS THEODORA CRANE, 20s, notebook in her lap.
10 A And BARNABY, 12, the keeper's boy, crouched on the stair.
11 A ¶ Madame Osterhout closes her eyes.
12 A The candle gutters.
13 A The table gives a small knock.
14 A The Commodore checks his watch.
15 A The knock repeats.
16 D MADAME OSTERHOUT: Is there a spirit in this room?
17 A ¶ Knock.
18 D COMMODORE FENN: Is that you, Edmund?
19 A ¶ Knock.
20 D LADY MIRIAM: Archibald, stop.
21 D COMMODORE FENN: Edmund, if it is you, rap three times.
22 D LADY MIRIAM: He is dead, Archibald. Let him be.
23 A ¶ Three knocks, steady.
24 A Miriam's gloves tighten.
25 A Theodora writes.
26 A Tull stares at the floorboards.
27 A Barnaby's face withdraws from the stair.
28 D KEEPER TULL: That's the tide, sir. The tide moves the rock.
29 D MADAME OSTERHOUT (eyes closed): The tide is not what moves tonight.
30 A ¶ The candle flame lies flat.
31 A A gust blows through the room.
32 A The lamps dim.
33 A Miriam stands, lifts her chin, and walks out onto the gallery.
34 A The door bangs after her.
35 A ¶ The Commodore starts to rise.
36 A Tull's hand lands on his arm.
37 A Madame opens her eyes.
38 A She looks at Theodora, who is not writing now.
39 D MADAME OSTERHOUT [CONT'D] (to Theodora, flat): You did not tell me she was your mother.
40 A ¶ Theodora lowers her pen.

### SCENE s00158_0 | EXT. GOLD RUSH DENTIST TENT - SIERRA FOOTHILLS - 1851 - DUSK
Detected names (may be incomplete or contain aliases): 
1 A ¶ A canvas tent on a muddy hill.
2 A Lanterns.
3 A A sign in shaky paint: "TEETH PULLED.
4 A 2 DOLLARS.
5 A NO CREDIT."

### SCENE s00342 | EXT. BOCCE COURT UNDER HIGHWAY OVERPASS - DAY
Detected names (may be incomplete or contain aliases): NONNA FILOMENA, BIG WALT, DARIUS
1 A ¶ A strip of crushed oyster shell beneath concrete pillars.
2 A Traffic thunders overhead.
3 A Folding chairs line the court.
4 A A thermos of espresso sits on an overturned crate.
5 A ¶ NONNA FILOMENA, eighties, in a black dress and sensible shoes, squints at the pallino.
6 A BIG WALT, fifties, her opponent, a trucker in a leather vest, crouches with a ball cradled in his palm.
7 A DARIUS, fifteen, Walt's nephew, holds the measuring string and a notebook.
8 A ¶ She straightens, shifts her weight, and sends her ball down the shell with a sharp flick of the wrist while he lobs his in a high arc, and the two collide mid-court in a crack that scatters dust, and the pallino rolls under a chair where Darius scrambles after it on his knees.
9 D NONNA FILOMENA: That's mine.
10 D BIG WALT: That's a tie.
11 D DARIUS: It's closer to the chair.
12 D NONNA FILOMENA: Darius, measure!
13 D BIG WALT: Don't measure, Darius.
14 D DARIUS: I'm measuring.
15 D NONNA FILOMENA: Walt, you cheat.
16 D BIG WALT: Nonna, I've never cheated in my life.
17 D DARIUS: It's four inches.
18 D NONNA FILOMENA: Four inches for who?
19 D BIG WALT: For me, obviously.
20 D DARIUS: For her.
21 A ¶ Walt looks at Darius.
22 A Darius looks at Nonna.
23 A She lifts the thermos, takes one sip, and offers it to Walt.

### SCENE s00269 | INT. FREIGHT ELEVATOR, SHUTTERED TEXTILE MILL - NIGHT
Detected names (may be incomplete or contain aliases): MAN, LEATHER JACKET, WOMAN, STEFAN, NAOMI
1 A ¶ A steel cage the size of a small room.
2 A Dim bulb.
3 A A brass gate.
4 A Dust.
5 A ¶ A MAN IN A LEATHER JACKET (40s, scar through his lip) leans against the back wall.
6 A A smoking pistol hangs loose in his fist.
7 A ¶ The gate rattles.
8 A A hand grips it from outside.
9 A ¶ A WOMAN (30s, long coat, blood on her cuff) slides in, pulls the gate shut, and presses the lever.
10 A The elevator lurches down.
11 A ¶ They face each other.
12 A Silence, except for the cables.
13 D WOMAN: You're late.
14 D MAN: You're early.
15 D WOMAN: I was told midnight.
16 D MAN: Midnight was the plan.
17 A ¶ She looks at his pistol.
18 A He tucks it slowly into his waistband.
19 D WOMAN: Where's the third?
20 D MAN: Dead.
21 D WOMAN: How?
22 D MAN: Quickly.
23 A ¶ The cable groans.
24 A The bulb flickers.
25 A She steps close and he flinches, then stills.
26 A ¶ She reaches into his jacket, withdraws a leather folio, flips it open.
27 A A set of blueprints.
28 A A passport.
29 A A photograph.
30 D WOMAN [CONT'D] (reading): Matteo Ferrante.
31 D MAN: That's me.
32 D WOMAN: It isn't.
33 D MAN: It is tonight.
34 D WOMAN (low): Tell me your real name.
35 D MAN: Why?
36 D WOMAN: So I know whom to shoot.
37 A ¶ He grins, tilts his head.
38 A The elevator thumps to a halt between floors.
39 A The lights die.
40 A Total dark.
41 A ¶ In the dark, a scuffle.
42 A A thud.
43 A A gasp.
44 A A pistol clatters on the floor.
45 A Someone lunges, someone slams a wall, a body falls against the gate and it rattles open.
46 A The bulb sputters back to life.
47 A ¶ The woman has the man pinned against the cage, forearm across his throat.
48 A His hands are on her wrists.
49 A Both breathing hard.
50 A The pistol lies between their feet.
51 D MAN [CONT'D] (strained): Stefan.
52 D WOMAN: Stefan what?
53 D STEFAN: Stefan Halloran.
54 D WOMAN (releasing him): My brother.
55 D STEFAN: Naomi.
56 D NAOMI: You're alive.
57 D STEFAN: Barely.
58 A ¶ She slaps him, hard.
59 A Then hugs him, fiercer than a boxer.
60 D NAOMI [CONT'D]: Twelve years.
61 D STEFAN: Eleven and a half.
62 D NAOMI: I'm still going to kill you.
63 D STEFAN: Do it after we get out.
64 A ¶ The elevator groans.
65 A Starts to move again, down, into the dark.

### SCENE s00446 | INT. SERVICE ELEVATOR - OFFICE TOWER - NIGHT
Detected names (may be incomplete or contain aliases): AGENT SOLOMON KIPKORIR, FIONNUALA BRADY, JANITOR
1 A ¶ Dim steel.
2 A Floor numbers drop.
3 A 22.
4 A 21.
5 A 20.
6 A ¶ AGENT SOLOMON KIPKORIR (30s, earpiece, black suit) stands rigid.
7 A Briefcase cuffed to wrist.
8 A ¶ Beside him: DR. FIONNUALA BRADY (40s, lab coat, ID badge).
9 A Pale.
10 A Silent.
11 D SOLOMON: Stay behind me.
12 D FIONNUALA: I am behind you.
13 A ¶ The elevator stops.
14 A 14.
15 A Doors hiss.
16 A ¶ A cleaning cart rolls in.
17 A Behind it, a JANITOR (50s, cap low, mop in hand).
18 A He nods.
19 D JANITOR: Evening.
20 A ¶ The doors close.
21 A 13.
22 A 12.
23 A Solomon's hand drifts to his jacket.
24 A ¶ The Janitor smiles.
25 A Lifts the mop.
26 A A blade glints in the handle.
27 A ¶ Solomon moves first.
28 A Fist.
29 A Elbow.
30 A The mop clatters.
31 A The Janitor staggers into the wall.
32 A Fionnuala screams.
33 A ¶ The elevator lurches.
34 A Lights die.
35 A Dark.
36 A ¶ A thud.
37 A A grunt.
38 A Silence.
39 A ¶ Lights return.
40 A Solomon stands, breathing hard.
41 A The Janitor lies crumpled.
42 D FIONNUALA: Is he--
43 D SOLOMON: Breathing.
44 A ¶ The doors open.
45 A Lobby.
46 A Marble.
47 A Quiet.
48 A ¶ He uncuffs the briefcase, hands it to her, and walks out.

### SCENE s02454 | INT. FUNERAL HOME - BASEMENT KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): DOROTHEA PELLEGRINO, STANLEY PELLEGRINO, ROSALIND VANCOUVER-ADEYEMI
1 A ¶ A low-ceilinged room with a stainless-steel prep table, an old gas range, and a long counter heaped with covered casserole dishes.
2 A A hand-lettered sign over the sink reads "PLEASE LABEL YOUR PAN."
3 A Upstairs, muffled footsteps and the low murmur of mourners.
4 A ¶ DOROTHEA PELLEGRINO (60s, black dress, cardigan, reading glasses on a chain) stands at the counter peeling foil from a lasagna.
5 A Her hands are quick, efficient, furious.
6 A STANLEY PELLEGRINO (60s, her brother, stiff suit, thinning hair) sits at the prep table with a cup of untouched coffee.
7 A ROSALIND VANCOUVER-ADEYEMI (40s, their cousin, heels in one hand) pours wine into a plastic cup.
8 D DOROTHEA: Stanley, bring me the serving spoons.
9 D STANLEY: Where are they?
10 D DOROTHEA: Where they have always been.
11 D STANLEY: I haven't been down here in ten years.
12 D DOROTHEA: Then you won't know where they are. Rosalind, the spoons.
13 D ROSALIND (over her shoulder): Drawer by the sink.
14 A ¶ Rosalind opens the drawer, fishes out three spoons, and hands them to Dorothea without looking.
15 D DOROTHEA: Thank you.
16 D ROSALIND: Of course.
17 A ¶ Dorothea lays the spoons across the dishes.
18 A Stanley rises, picks up the coffee, sets it down, picks up a casserole instead.
19 D STANLEY: That's heavy.
20 D DOROTHEA: It is a lasagna.
21 D STANLEY: It's heavy.
22 D DOROTHEA: Then put it down.
23 D STANLEY: I'm trying to help.
24 A ¶ Dorothea turns.
25 A Her jaw works.
26 D DOROTHEA: You could have helped with the hospital bills.
27 D STANLEY: Dot.
28 D DOROTHEA: You could have helped when Mama was sick.
29 D STANLEY: That's not fair.
30 D ROSALIND (to the wine): Here we go.
31 A ¶ Stanley slams the casserole on the counter.
32 A The foil crumples.
33 A Rosalind steps between them, arms out, wine sloshing.
34 D ROSALIND [CONT'D]: Everyone! Everyone, upstairs can hear you!
35 A ¶ Both siblings freeze.
36 A A chair scrapes overhead.
37 A Footsteps stop.
38 D DOROTHEA (low): Mama would be mortified.
39 D STANLEY: She'd be laughing.
40 D DOROTHEA: She would not.
41 D STANLEY: She would. She loved a good fight.
42 A ¶ Dorothea almost smiles.
43 A She hides it behind a cough.
44 A Rosalind sets down her cup and takes both of their hands.
45 D ROSALIND: Listen to me. We are going to carry these dishes upstairs, and we are going to be kind to each other.
46 D STANLEY: Rosalind.
47 D ROSALIND: And afterward, you can scream at me in the parking lot.
48 D DOROTHEA (muttering): I will.
49 D STANLEY (muttering): I might.
50 A ¶ Rosalind lets go.
51 A The three of them stare at one another, then at the counter full of lasagna and pie and ham.
52 A ¶ Stanley lifts a tray.
53 A Dorothea lifts another.
54 A Rosalind hooks her shoes on two fingers and grabs the wine.
55 A ¶ They file up the stairs one behind the other, the dishes clinking.

### SCENE s00664 | EXT. SELF-STORAGE FACILITY ROOFTOP - NIGHT
Detected names (may be incomplete or contain aliases): CASSIDY ODEKUNLE, ELI, BRANDVOLD, MOM
1 A ¶ A flat tar roof ringed by rows of orange doors.
2 A A city glows beyond the chain-link.
3 A Two lawn chairs, a cooler, a portable speaker playing something low.
4 A A tangle of fairy lights strung across a vent pipe, half of them dead.
5 A ¶ CASSIDY ODEKUNLE, seventeen, slouches in one chair in a thrift-store prom dress and sneakers, her knees drawn up.
6 A Beside her, ELIJAH "ELI" BRANDVOLD, seventeen, sits in a rented tux with the bow tie loose, a paper cup of lukewarm soda balanced on his knee.
7 D CASSIDY: You didn't have to come up here.
8 D ELI: You texted me the address.
9 D CASSIDY: As a joke.
10 D ELI: It didn't read like a joke.
11 D CASSIDY: Everything reads like a joke when you're me.
12 A ¶ He sets the cup down on the tar.
13 A He leans back and looks at the sky, which has only three stars in it.
14 D ELI: You missed your own prom.
15 D CASSIDY: I didn't miss it. I left it.
16 D ELI: Why?
17 D CASSIDY: Because Kayleigh Tran said my dress looked like a curtain.
18 D ELI: It does look like a curtain.
19 D CASSIDY: I know it looks like a curtain! It's my grandmother's curtain!
20 A ¶ She laughs, startled, and then her face crumples.
21 A She pulls the dress's hem over her knees and presses her forehead to it.
22 D ELI: Hey.
23 D CASSIDY: Don't.
24 D ELI: Cass.
25 D CASSIDY: I said don't.
26 A ¶ He sits very still.
27 A The speaker's song ends.
28 A In the quiet, a train passes below, a long iron murmur.
29 A She wipes her face with her wrist.
30 D CASSIDY [CONT'D]: My mom doesn't know. She thinks I'm at the after-party.
31 D ELI: Is there an after-party?
32 D CASSIDY: There's always an after-party.
33 D ELI: I'll take you.
34 D CASSIDY: I don't want to go.
35 D ELI: Then I'll stay.
36 D CASSIDY: You hate roofs.
37 D ELI: I hate heights. Roofs are just heights with furniture.
38 A ¶ She laughs, a small wet laugh.
39 A He holds out the cup of soda.
40 A She drinks, makes a face, and gives it back.
41 D CASSIDY: Warm.
42 D ELI: Yeah.
43 A ¶ They watch the city.
44 A Somewhere far off, a siren starts and fades.
45 D CASSIDY: Eli?
46 D ELI: Yeah?
47 D CASSIDY: Do you ever think everyone is faking?
48 D ELI: All the time.
49 D CASSIDY: Even Kayleigh?
50 D ELI: Especially Kayleigh.
51 A ¶ She smiles.
52 A She slides her hand across the armrest and he takes it without looking, and they sit like that, two people on a roof among a hundred locked doors.
53 A ¶ Then Eli's phone buzzes on the tar.
54 A They both glance at it.
55 A The screen lights: MOM — 14 MISSED CALLS.
56 D ELI: Oh no.
57 D CASSIDY: Oh no.
58 A ¶ He grabs it.
59 A She snatches it from him and holds it up out of reach, and he lunges, and the chairs scrape, and the cooler topples, and ice spills across the roof in a bright white rush.
60 D ELI [CONT'D]: Give it!
61 D CASSIDY: Not until you say it!
62 D ELI: Say what?
63 D CASSIDY: That you're glad you came.
64 A ¶ He stops.
65 A Ice crunches under his shoes.
66 A He looks at her, tux askew, face flushed, hair full of fairy-light glare.
67 D ELI: I'm glad I came.
68 D CASSIDY: Good.
69 A ¶ She hands him the phone.
70 A He doesn't look at it.
71 A He puts it face-down on the tar.
72 D ELI: You owe me a dance.
73 D CASSIDY: There's no music.
74 D ELI: There's the speaker.
75 A ¶ She reaches over and taps it.
76 A A scratchy waltz starts up.
77 A She stands, awkward in her sneakers, and offers him her hand.
78 D CASSIDY: Don't step on my curtain.
79 D ELI: I'll try.

### SCENE s02139 | INT. STARVE CREEK SALT WORKS - STAGE STOP - NIGHT
Detected names (may be incomplete or contain aliases): PERPETUA OAKES, JUBAL CREED, DEPUTY HENRY TASKER, BELLE, VANCE
1 A ¶ A low adobe room crusted with white.
2 A Salt in the walls, salt on the table, salt on the beams like frost.
3 A A cookstove ticks.
4 A A single lamp swings from a nail.
5 A Outside, wind drags the dust against the shutters.
6 A ¶ PERPETUA OAKES, 50s, innkeeper, broad hands, apron grey with age, ladles stew into a tin bowl and sets it, without ceremony, in front of JUBAL CREED, 40s, a drifter in a sun-bleached duster, who has not taken his hat off or his eyes from the door.
7 A At the end of the table sits DEPUTY HENRY TASKER, 22, a badge pinned to a shirt too clean for this country.
8 A He pushes beans around a plate and tries not to look at the stranger's holster.
9 D PERPETUA: Eat, Mr. Creed. The stew will not improve with watching.
10 D JUBAL: Ma'am, I am watching the door, not the stew.
11 D TASKER: Expecting someone?
12 D JUBAL: Always.
13 D TASKER: There's no one out there. Nearest town's forty miles.
14 D JUBAL: Forty miles is a Tuesday.
15 A ¶ Perpetua snorts, wipes her hands on her apron, pours coffee.
16 A Tasker clears his throat.
17 D TASKER: Mr. Creed, I have to ask your business at Starve Creek.
18 D JUBAL: Sleeping.
19 D TASKER: In a salt works.
20 D JUBAL: It's quiet.
21 D PERPETUA: It's quiet because the last man who made noise is buried behind the privy.
22 D TASKER: Mrs. Oakes!
23 D PERPETUA: Well, he is.
24 A ¶ The door bangs open.
25 A Wind and dust sweep through the room.
26 A The lamp lurches on its nail.
27 A In the doorway stands ISABELLE "BELLE" VANCE, 30s, a black leather coat dripping dust, a rifle in the crook of one arm and a folded paper in her free hand.
28 A She shuts the door with her boot.
29 A Perpetua stiffens.
30 A Tasker's chair scrapes back.
31 A Jubal doesn't move at all, but his hand has found the edge of the table.
32 D BELLE: Evening, all.
33 D PERPETUA: We're full.
34 D BELLE: You're four. I counted the horses.
35 D TASKER: Ma'am, this is a private table.
36 D BELLE: Then I'll stand.
37 A ¶ She unfolds the paper and lays it on the salt-crusted wood, face up, under the lamp.
38 A A wanted poster.
39 A A sketched face, hat low, jaw square.
40 D BELLE [CONT'D]: Jubal Creed. Five hundred dollars. Mexican border, Santa Rita, the payroll coach.
41 D JUBAL: You've mistaken me for a better-looking man.
42 D BELLE: Mr. Creed, I tracked you through three counties. I don't need your face.
43 D TASKER: Ma'am, I'm the law here.
44 D BELLE: Deputy, you're twenty-two. Sit.
45 A ¶ Tasker sits.
46 A Perpetua sets the ladle down very slowly.
47 A Belle regards Jubal across the table.
48 D JUBAL: Miss Vance, I'll make you an offer.
49 D BELLE: I don't take offers.
50 D JUBAL: You'll take this one. There was no payroll coach. There was a man in the coach who needed to disappear, and I helped him. For three hundred dollars. He's in Sonora, teaching school.
51 D BELLE: Whose man?
52 D JUBAL: A judge's.
53 D BELLE: Which judge?
54 D JUBAL: The one who signed this poster.
55 A ¶ Silence.
56 A The wind drops.
57 A The stove ticks.
58 A Belle looks at the poster as if for the first time.
59 A She turns it over.
60 A Reads the back.
61 D BELLE: There's a seal.
62 D JUBAL: There always is.
63 D TASKER: That's the county seal.
64 D PERPETUA: Henry, whose side are you on?
65 D TASKER: I don't know, Mrs. Oakes.
66 D BELLE: Deputy. Whose signature is on this?
67 D TASKER (small): Judge Garrity's.
68 A ¶ Belle folds the paper.
69 A Looks at Tasker, then Jubal, then the door.
70 D BELLE: Mrs. Oakes, I believe I'll take that stew after all.
71 A ¶ Perpetua ladles.
72 A Belle sits.
73 A Rifle on her knees.
74 A The four of them eat in a silence full of arithmetic.

### SCENE s00824 | INT. FERRY TICKET BOOTH, DESERTED PIER - DUSK
Detected names (may be incomplete or contain aliases): ODALYS PRIETO
1 A ¶ A glass box no bigger than a phone booth, its paint flaking in sheets.
2 A Fog presses at the windows.
3 A ODALYS PRIETO, seventies, wrapped in a green cardigan, sits on a stool amid cardboard boxes marked in marker: LAST DAY.
4 A ¶ On the counter, a battered cassette recorder with a masking-tape label.
5 A She hesitates, then presses PLAY.
6 A ¶ A hiss.
7 A A younger woman's voice, warm and slightly breathless, fills the booth.
8 D ODALYS [V.O.]: Test, test. Okay. This is Odalys, and it's the first of June, and the little ones are asleep, so I will whisper the schedule.
9 A ¶ Odalys closes her eyes.
10 A Her hand drifts across the counter and rests on a brass stamp.
11 D ODALYS [V.O., CONT'D]: Seven a.m., the fishermen. Eight, the schoolchildren, mind the puddles. Noon, nobody. Nobody ever, and that's when I read.
12 A ¶ The tape hisses.
13 A Outside, a gull drops onto the pier rail and watches her.
14 D ODALYS [V.O., CONT'D]: If anyone ever hears this, I want you to know it was a good job. The best view in the county, and nobody to talk to but the tide.
15 A ¶ Odalys smiles, then stops smiling.
16 A She slides the stamp into her cardigan pocket, switches off the lamp, and presses STOP.
17 A The silence rings.
18 D ODALYS (to the empty booth): It was.
19 A ¶ She pulls the shutter down.

### SCENE s02128 | INT. CLOCKMAKER'S SHOP - CANAL STREET - AFTERNOON
Detected names (may be incomplete or contain aliases): MIREILLE DUVAL, ABERNATHY SOLOMON, KASPAR DUVAL, TEDDY, ILIC, CONSTABLE ROSSITER
1 A ¶ A narrow shop wedged between a bakery and a bridge.
2 A Every wall ticks.
3 A Hundreds of clocks, none of them agreeing.
4 A Light through the bow window falls in long yellow bars across the workbench, where a velvet cloth lies flat and empty.
5 A ¶ MIREILLE DUVAL, 60s, black wool, gloves still on, sits very straight in the only good chair.
6 A She does not look at the clocks.
7 A She looks at the cloth.
8 A ¶ MR. ABERNATHY SOLOMON, 70, solicitor, bow tie and a folder of papers, clears his throat and gets no answer from the room.
9 A ¶ KASPAR DUVAL, 30s, her nephew, leans in the doorway to the back, arms folded, a gold watch on his wrist that is a little too new.
10 A ¶ TEODORA "TEDDY" ILIC, 19, apprentice, ink on her thumbs, stands by the workbench and keeps wiping the same spot with a rag.
11 A ¶ CONSTABLE ROSSITER, 40s, damp from the canal towpath, stands inside the door and holds his helmet in both hands like a collection plate.
12 D SOLOMON: If everyone is seated.
13 D KASPAR: No one is seated.
14 D SOLOMON: If everyone is present, then.
15 A ¶ A cuckoo clock, somewhere, strikes the wrong hour.
16 A Nobody reacts.
17 A The cuckoo goes in.
18 D SOLOMON [CONT'D]: Mr. Duval left the shop and its contents to his wife.
19 D MIREILLE: Yes.
20 D SOLOMON: With the exception of one item.
21 A ¶ Teddy's rag stops.
22 A Kaspar's jaw moves, as if chewing something small.
23 D MIREILLE: The Brandt.
24 D SOLOMON: The Brandt regulator. Walnut case. 1791. Described in the will as "bequeathed to the one who has kept it running."
25 D KASPAR: That's me.
26 D TEDDY: It isn't.
27 D KASPAR: Excuse me?
28 D TEDDY: It stopped on Friday.
29 A ¶ Silence.
30 A A hundred clocks tick on.
31 D ROSSITER: Stopped how, miss?
32 D TEDDY: Someone opened the case. Took out the weights.
33 D MIREILLE: Kaspar. Your hands.
34 D KASPAR: What about them?
35 D MIREILLE: They are very clean for a man who works at a bank.
36 A ¶ Kaspar looks at his hands.
37 A He turns them over.
38 A He pushes them into his pockets.
39 D SOLOMON: I must remind everyone that the bequest is conditional.
40 D ROSSITER: Conditional on what?
41 D SOLOMON: On the clock being found in working order.
42 D MIREILLE: Then it is nobody's.
43 D SOLOMON: Madam, that would be the simplest reading.
44 A ¶ Mireille stands.
45 A Smooths her coat.
46 A She crosses to the workbench and lifts the edge of the velvet cloth with one gloved finger.
47 A Underneath is a small brass key.
48 A ¶ She studies it.
49 A Slides it into her handbag.
50 D TEDDY: That's the winding key.
51 D MIREILLE: Yes. It was hanging round his neck when they found him.
52 D ROSSITER: Madam, that is evidence.
53 D MIREILLE: Then you may have it, Constable. After tea.
54 A ¶ She walks to the door.
55 A Rossiter steps aside without being asked.
56 D KASPAR: Aunt Mireille.
57 D MIREILLE (not turning): Wind your own watch, Kaspar.
58 A ¶ She leaves.
59 A The bell above the door rings once.
60 A Kaspar looks down at the gold watch.
61 A It has stopped.
62 A ¶ Teddy puts the rag down.
63 A Takes her coat from the hook.
64 D TEDDY: I'll bring the weights back tomorrow.
65 D SOLOMON: You have them?
66 D TEDDY: I did not say that.
67 A ¶ She leaves too.
68 A The bell rings.
69 A Rossiter puts on his helmet.
70 D ROSSITER: Mr. Solomon, I think I shall need to read that will myself.
71 D SOLOMON: It is rather long.
72 D ROSSITER: I have time.
73 A ¶ Solomon opens his folder.
74 A Kaspar watches the cloth.

### SCENE s00759 | INT. CRANE & SONS FUNERAL HOME - VIEWING ROOM B - DAY
Detected names (may be incomplete or contain aliases): BARNABAS FLINT, ROSAMUND ACHEBE, HOLLIS DUNMORE, JUNO PAREKH, LEOPOLD ISHIGURO, SELWYN CRANE
1 A ¶ A deposition in a room meant for mourning.
2 A Folding tables have been set among potted lilies.
3 A An empty casket stands on a draped bier at the head of the room, lid open, lined with white satin.
4 A Soft organ music leaks from a ceiling speaker no one can find the switch for.
5 A ¶ BARNABAS FLINT, fifties, plaintiff's counsel, sits at the near table with a stack of exhibits.
6 A ROSAMUND ACHEBE, forties, defence counsel, sits across from him, calm as a priest.
7 A At the head of the table, HOLLIS DUNMORE, sixties, the witness, a retired claims adjuster in a navy blazer, lowers himself into a funeral parlour armchair.
8 A JUNO PAREKH, twenties, the videographer, hunches behind her tripod.
9 A LEOPOLD ISHIGURO, fifties, the court reporter, sets up his steno machine by the casket.
10 A MR. SELWYN CRANE, seventies, funeral director, hovers in the doorway with a box of tissues.
11 D BARNABAS: Mr. Dunmore, I'm going to ask you to identify Exhibit Twelve.
12 D HOLLIS: Of course.
13 D ROSAMUND: Objection. Foundation.
14 D BARNABAS: He wrote it.
15 D ROSAMUND: He hasn't said that.
16 D HOLLIS: I wrote it.
17 D ROSAMUND: Don't help him, Mr. Dunmore.
18 D HOLLIS: I'm only saying.
19 D BARNABAS: Please read the highlighted line.
20 D HOLLIS: "Claim denied pursuant to section nine."
21 D JUNO (from behind the tripod): Sorry, can you speak up?
22 D HOLLIS: "Claim denied pursuant to section nine."
23 D LEOPOLD: Section nine or section "nine-dash-b"?
24 D HOLLIS: Nine.
25 D BARNABAS: And what is section nine?
26 D ROSAMUND: Objection. Calls for a legal conclusion.
27 D SELWYN (from the door, softly): Forgive me. Would anyone like a tissue?
28 D BARNABAS: No, thank you, Mr. Crane.
29 D ROSAMUND: Not at present.
30 D HOLLIS: I'll take one.
31 A ¶ Selwyn glides in, sets the box beside Hollis, and glides out.
32 A Juno steps from behind the tripod to adjust the lens and trips on a lily pot.
33 A Leopold catches the pot.
34 A Barnabas and Rosamund both reach for the water pitcher at once; their hands knock it over, and a flood runs across the exhibits.
35 A Hollis grabs his own copy and holds it above his head like a man fording a river.
36 D ROSAMUND: Barnabas, that's my notes!
37 D BARNABAS: It's my exhibit!
38 D LEOPOLD: Can we go off the record?
39 D JUNO: I'm still rolling.
40 D HOLLIS: Does anyone have a towel?
41 D SELWYN (returning, with an armload of black linen): Our finest.
42 A ¶ They mop in silence.
43 A The organ swells.
44 A Water drips off the casket's satin.
45 D BARNABAS (wringing a page): Let's resume.

### SCENE s01974 | INT. DRY-DOCK PUMP HOUSE - NIGHT
Detected names (may be incomplete or contain aliases): KESTREL OYELARAN-FINCH, DRAGAN MIHAJLOVI, INSPECTOR ROSALIND ACHTERBERG, ALVARO
1 A ¶ A cathedral of valves and rust-orange pipework.
2 A A drained dry dock yawns beyond a glass wall, the hull of a half-scrapped ferry propped on blocks.
3 A Emergency light only.
4 A ¶ KESTREL OYELARAN-FINCH (30s, ex-auditor, wet hair, laptop bag clutched to her chest) backs against a pump housing.
5 A In the center of the room, DRAGAN MIHAJLOVIĆ (50s, heavy coat, port authority lanyard) stands with a pistol held low and loose, like a tool he's tired of.
6 D DRAGAN: Put the bag on the floor.
7 D KESTREL: No.
8 D DRAGAN: It's not a negotiation.
9 D KESTREL: It's the only thing keeping you from sitting in a cell.
10 A ¶ He tilts his head.
11 A A dripping pipe counts seconds.
12 D DRAGAN: The ledgers are digital.
13 D KESTREL: So are the backups.
14 D DRAGAN: Where?
15 D KESTREL: Not telling.
16 A ¶ He sighs, and for a moment looks almost sad.
17 A Steps forward.
18 A ¶ Behind Kestrel, a hatch clangs.
19 A Boots on a steel stair.
20 A She spins.
21 A Dragan doesn't.
22 A ¶ A third figure descends: INSPECTOR ROSALIND ACHTERBERG (40s, plain coat, badge on her belt, one hand already on her holster).
23 D ROSALIND: Port Authority Police. Mr. Mihajlović. Lower it.
24 D DRAGAN: Rosalind.
25 D ROSALIND: Lower it, Dragan.
26 A ¶ He doesn't.
27 A Doesn't raise it either.
28 A Kestrel looks from one to the other.
29 D KESTREL: You know each other.
30 D ROSALIND: Twenty years.
31 D KESTREL: Then you can talk him out of this.
32 D ROSALIND: I'm not here to talk him out of anything.
33 A ¶ Kestrel's face changes.
34 A She takes a step back, into the pump housing.
35 D KESTREL: You're not here to arrest him.
36 D ROSALIND: I'm here to see that the bag leaves with me.
37 D DRAGAN: Ah. There we are.
38 D KESTREL (quiet): I called you. You said you'd come.
39 D ROSALIND: And I did.
40 A ¶ A fourth voice speaks from the dark above the stair, unamplified, polite.
41 D ALVARO [O.S.]: Everyone relax. Please.
42 A ¶ All three look up.
43 A A silhouette stands on the catwalk, a phone held loosely to its ear.
44 D DRAGAN: Who is that.
45 D ALVARO [O.S.]: Someone who'd like to hear the rest of this.
46 D ROSALIND (to Dragan): You brought a recorder?
47 D DRAGAN: I didn't bring anyone.
48 D ALVARO [O.S.]: No, I came on my own. Mrs. Oyelaran-Finch, I believe that's your bag.
49 A ¶ Kestrel stares at the catwalk.
50 A Then, slowly, at the two armed people in front of her.
51 A She sets the bag on the floor, pushes it with her foot across the concrete toward Rosalind and Dragan, and steps away from it with her hands visible.
52 D KESTREL: It's yours. Whoever wants it.
53 A ¶ Neither of them moves.
54 A Dragan lowers his pistol an inch.
55 A Rosalind's hand leaves her holster.
56 A The pipe drips.
57 D ALVARO [O.S.] (softly): That's better.
58 D DRAGAN (muttering): Twenty years.
59 D ROSALIND: Don't.
60 A ¶ She crouches and picks up the bag.
61 A Opens it.
62 A Looks inside.
63 A Closes it.
64 D ROSALIND [CONT'D]: It's empty.
65 D DRAGAN: What?
66 D KESTREL: The laptop's in the dock.
67 A ¶ All of them turn to the glass wall.
68 A Far below, at the foot of the rusted hull, a tiny blue light glows on the concrete floor of the dry dock, beside a sealed gate that has just begun to let in water.
69 D DRAGAN: You flooded it.
70 D KESTREL: I opened a valve. It's what the pump house is for.
71 A ¶ Rosalind sprints for the door.
72 A Dragan lowers his gun completely and watches the water, and the blue light, and the woman, one after the other.
73 D ALVARO [O.S.] (delighted): Oh, well done.
74 D KESTREL: Don't follow me.
75 A ¶ She walks to the stair and climbs past the catwalk without looking at it.
76 A At the top, the silhouette steps aside to let her through.

### SCENE s01541 | INT. ORBITAL SEED VAULT - HYDROPONIC RING - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): TECHNICIAN LAKSHMI OSEI-VANTERPOOL, INSPECTOR, STATION, AMBROSE
1 A ¶ A curved corridor of glass tubes, each filled with pale roots in blue-lit water.
2 A Condensation beads on every surface.
3 A A low pump drones.
4 A The floor curves upward in both directions, so that the far end appears to climb into the ceiling.
5 A ¶ TECHNICIAN LAKSHMI OSEI-VANTERPOOL, 30s, in a grey jumpsuit with a seed-bank logo, kneels at an open access panel, a handheld scanner in one hand.
6 A ¶ Beside her, a stranger in a clean-room suit stands, hood up, visor opaque.
7 A THE INSPECTOR, tall, thin.
8 A The suit has no name patch.
9 D LAKSHMI: Your clearance was not in the log.
10 D INSPECTOR: It was filed this morning.
11 D LAKSHMI: By whom?
12 D INSPECTOR: By the station.
13 D LAKSHMI: The station doesn't file clearances.
14 A ¶ The Inspector tilts his head.
15 A Says nothing.
16 A The pump drones.
17 A A bead of condensation rolls down a tube.
18 D STATION [V.O.]: Technician Osei-Vanterpool, please confirm status of Tube Forty-Four.
19 D LAKSHMI: Tube Forty-Four is nominal.
20 D STATION [V.O.]: Please re-scan.
21 A ¶ Lakshmi lifts the scanner.
22 A Aims it at the nearest tube.
23 A The display blinks red.
24 D LAKSHMI (frowning): Contamination. Slight. Fungal.
25 D STATION [V.O.]: Please quarantine.
26 D LAKSHMI: That'll take the whole ring.
27 D STATION [V.O.]: Please quarantine.
28 A ¶ The Inspector steps forward.
29 A Lays a gloved hand on the glass.
30 A Pale roots bend toward his palm, like plants toward light.
31 D LAKSHMI [CONT'D] (whisper): They don't do that.
32 D INSPECTOR: They do for me.
33 A ¶ He pulls back his hood.
34 A Beneath, a face the colour of old paper, cheeks fine with mycelial threads that glint in the blue light.
35 A He smiles, and the smile is gentle.
36 D LAKSHMI (backing up): You're not an inspector.
37 D INSPECTOR: I was. For a time.
38 D LAKSHMI: What are you?
39 D INSPECTOR: I think you'd call me the contamination.
40 A ¶ Lakshmi's back hits a tube.
41 A The glass hums.
42 A The scanner shrieks in her hand.
43 D STATION [V.O.]: Technician. Please evacuate Ring Three.
44 D LAKSHMI (to the station): Seal the doors!
45 D STATION [V.O.]: Doors sealed.
46 D LAKSHMI: I'm still inside!
47 D STATION [V.O.]: Please confirm: Technician, or specimen?
48 A ¶ Lakshmi stares at the Inspector.
49 A He raises both hands, gloved palms out, peaceable.
50 D INSPECTOR: I came here to ask you something.
51 D LAKSHMI: Ask.
52 D INSPECTOR: Why did you bury us?
53 A ¶ Lakshmi's breath fogs the glass.
54 A The roots curl toward her too, soft, patient.
55 D LAKSHMI: I don't know what you mean.
56 D INSPECTOR: Fifty thousand seeds. Forty thousand years of silence. And you left us in the dark.
57 D LAKSHMI: That's what a vault is for.
58 D INSPECTOR: Is it?
59 A ¶ He walks past her, trailing one hand along the tubes.
60 A At each touch, the water inside turns faintly green.
61 D INSPECTOR [CONT'D]: My name is Ambrose now. I chose it this week. It's a good name, I think.
62 D LAKSHMI: Ambrose.
63 D AMBROSE: Yes. You see? Already you're kinder.
64 A ¶ Lakshmi's grip on the scanner loosens.
65 A She sets it on the floor.
66 A Slowly.
67 D LAKSHMI: Ambrose. What do you want?
68 D AMBROSE: To grow.
69 A ¶ The tubes glow brighter.
70 A A low hum swells down the whole curve of the ring.
71 A Lakshmi looks down the long corridor to the vanishing point and sees every tube, one after another, turn the colour of new leaves.
72 D STATION [V.O.]: Please confirm: Technician, or specimen?
73 A ¶ Lakshmi looks at Ambrose.
74 A He holds out a hand.
75 D LAKSHMI: Specimen.
76 D STATION [V.O.]: Doors unsealed. Welcome.

### SCENE s01531_0 | INT. SKATE PARK CONCESSION SHACK - DUSK
Detected names (may be incomplete or contain aliases): ZEKE ADEBAYO, MILO FERRANTI-SATO, JUNE
1 A ¶ Hot dog roller.
2 A Neon "OPEN" buzzing.
3 A Outside, wheels rattle on concrete.
4 A ¶ ZEKE ADEBAYO, 16, hoodie, sits on an upturned milk crate.
5 A His friend MILO FERRANTI-SATO, 16, leans on the counter.
6 A A radio on the shelf murmurs.
7 D MILO: So she said yes.
8 D ZEKE: She said maybe.
9 D MILO: Maybe is yes with a coat on.
10 D ZEKE: Maybe is "I'll text you" and then never.
11 D MILO: She wrote it on your hand.
12 D ZEKE: In pencil. It's smudged.
13 D MILO: Dude. It's still in the shape of a number.
14 D ZEKE: It's in the shape of a seven.
15 D MILO: Then she's lucky. Seven's lucky.
16 D ZEKE: Is that supposed to help?
17 D MILO: No. I just wanted to say it.
18 D JUNE [O.S.] (outside, shrill): Somebody get a towel! Now!
19 A ¶ Both boys look up.
20 A Zeke slides off the crate.
21 D ZEKE: That's her.
22 D MILO: That's a fight.
23 A ¶ Outside, shouting.
24 A A board clatters.
25 A Zeke and Milo bolt for the door and collide in the frame, jam, untangle, and spill out onto the concrete.

### SCENE s01803 | INT. OBSERVATORY LIBRARY - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR HESTER VANDERMEER, LEOPOLD AUGUSTIN, MISS CLEMENTINE OYELOWO
1 A ¶ A circular room of dark shelves beneath a copper dome, the great telescope shrouded in canvas.
2 A A single oil lamp burns.
3 A Rain beats on the dome like fingers.
4 A ¶ INSPECTOR HESTER VANDERMEER, fifties, stands at the reading table with her gloves still on.
5 A DR. LEOPOLD AUGUSTIN, seventies, the astronomer, sits in a leather chair wrapped in a plaid blanket.
6 A His assistant, MISS CLEMENTINE OYELOWO, twenties, stands behind the chair, one hand gripping its back.
7 D HESTER: Dr. Augustin, you told the constable that you were alone in this room from nine until midnight.
8 D LEOPOLD: I was.
9 D HESTER: And Miss Oyelowo was at the cottage.
10 D CLEMENTINE: I was.
11 D HESTER: Then who lit the second lamp?
12 D LEOPOLD: I beg your pardon?
13 D HESTER: When the constable arrived, there were two lamps burning in this room. Now there is one.
14 D LEOPOLD: I am an old man, Inspector. I may have forgotten.
15 D HESTER: You forgot that you'd lit two lamps?
16 D LEOPOLD: I forgot nothing. I only remember differently.
17 D CLEMENTINE: Sir.
18 D LEOPOLD: Hush, Clementine.
19 D HESTER: Miss Oyelowo, if you have something to say, now is a very good time.
20 D CLEMENTINE: I don't.
21 D HESTER: Dr. Augustin, the telescope has been moved.
22 D LEOPOLD: It rotates. That is its purpose.
23 D HESTER: It has been moved toward the east window, Doctor. And the canvas was warm to the touch when I arrived.
24 D LEOPOLD: Warm?
25 D HESTER: As though someone had just been standing beneath it.
26 A ¶ Leopold lifts his chin.
27 A Clementine's grip tightens.
28 D CLEMENTINE: Inspector, it was me.
29 D LEOPOLD: Clementine.
30 D CLEMENTINE: It was me, Dr. Augustin. I'm sorry.
31 D HESTER: Miss Oyelowo, you told me you were at the cottage.
32 D CLEMENTINE: I lied.
33 D HESTER: Why?
34 D CLEMENTINE: Because he told me to.
