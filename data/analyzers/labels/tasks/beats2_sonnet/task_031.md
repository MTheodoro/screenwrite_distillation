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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_sonnet/group_00031.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01521 | INT. GREENHOUSE ON A DISUSED FERRY - EVENING
Detected names (may be incomplete or contain aliases): ISOLDE FAIRWEATHER-NKEMELU, DESMOND ACHTERBERG, GRETA, OYELARAN
1 A ¶ A car ferry long retired from its route, moored and rusting at a quiet estuary.
2 A Its vehicle deck has been roofed with glass and turned into a nursery of citrus trees in tubs.
3 A Lamps hum.
4 A The air is warm, bitter-sweet, and smells of leaf and engine oil.
5 A ¶ ISOLDE FAIRWEATHER-NKEMELU, 34, sleeves rolled, soil to the elbows, prunes a lemon tree with more force than the tree needs.
6 A Her wedding ring hangs on a string around her neck instead of her finger.
7 A ¶ Across the aisle, DESMOND ACHTERBERG, 36, in a good coat that does not belong among the tubs, holds a paper bag of pastries as if it were a summons.
8 A He has not put it down since he arrived.
9 A ¶ Between them, perched on an upturned crate and reading a seed catalogue she is not reading, sits MARGUERITE "GRETA" OYELARAN, 70, Isolde's landlady and the ferry's last pilot.
10 A ¶ Isolde snips a branch.
11 A It falls.
12 A Desmond watches it fall.
13 D DESMOND: You've moved the tangerines.
14 D ISOLDE: They wanted light.
15 D DESMOND: They used to be by the stairs.
16 D ISOLDE: Things shift.
17 D GRETA (turning a page): The lemons shifted too. Nobody asked them.
18 A ¶ Desmond sets the bag down on a workbench.
19 A Takes it up again.
20 D DESMOND: I brought the ones with the almond.
21 D ISOLDE: I don't eat those anymore.
22 D DESMOND: Since when?
23 D ISOLDE: Since a while.
24 D DESMOND: You loved those.
25 D ISOLDE: I loved a lot of things at the time.
26 D GRETA: There's a draught from the east vent. Someone should mind it.
27 A ¶ Neither of them moves toward the vent.
28 D DESMOND: The bank wrote to me about the account. They said you'd closed your half.
29 D ISOLDE: I did.
30 D DESMOND: You could have called.
31 D ISOLDE: I could have.
32 D DESMOND: I'd have said yes.
33 D ISOLDE: You'd have said yes to anything, that month.
34 D DESMOND: That's not fair.
35 D ISOLDE: It isn't a verdict. It's a date.
36 D GRETA: Margins are thin in citrus. People forget that.
37 D DESMOND: Greta, would you mind--
38 D GRETA: I would. I've a view of the water from here and I'm using it.
39 A ¶ Isolde almost smiles.
40 A Catches herself.
41 A Snips.
42 D DESMOND: Your mother sent a card. To the flat. I didn't know what to do with it.
43 D ISOLDE: Put it in the drawer.
44 D DESMOND: I did. I took it out again.
45 D ISOLDE: And?
46 D DESMOND: It's in my coat.
47 A ¶ He does not reach for it.
48 A His hand rests on the pocket.
49 D ISOLDE: Keep it.
50 D DESMOND: It's addressed to you.
51 D ISOLDE: Then it's mine to say who keeps it.
52 A ¶ Silence.
53 A A pump clicks on somewhere below decks.
54 A Water moves in the pipes.
55 D DESMOND: You've lost weight.
56 D ISOLDE: You've gained a coat.
57 D DESMOND: It was a gift.
58 D ISOLDE: From?
59 D DESMOND: Does it matter?
60 D ISOLDE: Not at all.
61 A ¶ She drops the shears into a tub.
62 A They ring against the rim.
63 A Both of them look at the sound.
64 D GRETA (to the catalogue): Eighty-one pounds for a Buddha's hand citron. Robbery.
65 D DESMOND: I'm not here about the account.
66 D ISOLDE: I know.
67 D DESMOND: I'm not here about the card.
68 D ISOLDE: I know that too.
69 D DESMOND: The lease on the flat is up in March. I wondered if you had a view.
70 D ISOLDE: On the flat.
71 D DESMOND: On the flat.
72 D ISOLDE (a long beat): The east vent really is open.
73 A ¶ She walks to it.
74 A Closes it.
75 A Stays there with her back to him, hand flat on the cold iron.
76 A ¶ They speak at once.
77 D DESMOND: I don't know how to be in a room with you.
78 D ISOLDE: I don't know how to be in a room without you.
79 A ¶ Nobody moves.
80 A Greta turns a page, slowly, and does not read it.
81 D GRETA: Well. That's the first honest weather of the evening.
82 A ¶ Desmond puts the pastry bag down for the last time.
83 A Walks the length of the aisle, stops one tub short of Isolde.
84 A A lemon hangs between them, green, not yet ready.
85 A ¶ He lifts it gently on his palm, as if weighing it.
86 A Lets it go.
87 D ISOLDE: It needs another month.
88 D DESMOND: Does it.
89 D ISOLDE: The ones in the light, perhaps three weeks.
90 A ¶ She turns.
91 A His coat is wet at the shoulder where the roof drips.
92 A She notices.
93 A Says nothing.
94 A Takes the string from around her neck, winds the ring once about her finger, and unwinds it again.
95 D DESMOND: Three weeks.
96 D ISOLDE: The flat can wait three weeks.
97 D GRETA (standing, folding the catalogue): I'll put the kettle on. Down in the wheelhouse. It will take me a good long while.
98 A ¶ She goes.
99 A Her footsteps ring on the iron stairs, slow, deliberate, deliberately loud.
100 A ¶ Desmond picks the almond pastry from the bag.
101 A Offers it.
102 A ¶ Isolde looks at it.
103 A Looks at him.
104 A Takes half.

### SCENE s00379 | INT. FIELD HOSPITAL - CONVERTED SKI LODGE - NIGHT
Detected names (may be incomplete or contain aliases): SAOIRSE KELLEHER, NURSE ABIODUN, HELENA PAVLICEK, GREGOR PAVLICEK
1 A ¶ A great timber hall with a stone hearth, now lined with cots.
2 A Antlers still hang over the mantel.
3 A Blizzard wind works the shutters.
4 A ¶ DR. SAOIRSE KELLEHER, 40, mud on her boots and blood on her cuffs, stands over a cot with a stethoscope draped around her neck.
5 A She has not slept in two days and she holds her face carefully, like something fragile on a tray.
6 A ¶ NURSE ABIODUN, 30, sets out instruments on a ski-rack trolley.
7 A He works precisely, wasting no motion.
8 A ¶ On the cot, MRS. HELENA PAVLICEK, 70, lies pale under three blankets, her breath shallow.
9 A At the foot of the bed, her husband GREGOR PAVLICEK, 72, holds his hat in both hands, turning it by the brim.
10 D SAOIRSE (quietly): Mr. Pavlicek. The avalanche took her ribs, and one of them has nicked the lung.
11 D GREGOR: She was talking on the way down.
12 D SAOIRSE: I know.
13 A ¶ She checks the pulse at Helena's wrist.
14 A She counts, and he waits, and she finds nothing to say about the number.
15 D GREGOR: You'll operate.
16 D SAOIRSE: We would have to open the chest. I have a surgical kit and a lantern. The helicopter can't land for another night.
17 D GREGOR: Then do it.
18 D ABIODUN: Doctor, the generator's down to an hour.
19 A ¶ She glances at him.
20 A He looks back, steady.
21 A In that look is a whole second conversation.
22 D SAOIRSE: Then we have an hour.
23 D GREGOR: I said do it.
24 D SAOIRSE: I heard you.
25 A ¶ She turns, takes a scalpel from the trolley, and holds it up to the light.
26 A Her hand is perfectly steady.
27 A ¶ Gregor takes a step forward.
28 A He sets his hat on the bed.
29 A His knuckles are white.
30 D GREGOR: And if you cut and she dies on your table?
31 D SAOIRSE: Then she dies knowing someone tried.
32 D GREGOR: Then I forbid it.
33 D ABIODUN: Sir.
34 D GREGOR: She is mine. Fifty years. I will not have her opened by a stranger in a dead man's hunting lodge.
35 A ¶ He grabs Saoirse's wrist.
36 A The scalpel stops in the air.
37 A Abiodun moves in, but she shakes her head, and he freezes.
38 D SAOIRSE (low): Mr. Pavlicek. Look at her.
39 A ¶ He does not want to.
40 A He does.
41 A Helena's eyes are open, and they have found him.
42 A Her lips move.
43 D HELENA (a thread of voice): Greg. Let go.
44 A ¶ His grip loosens.
45 A The scalpel lowers.
46 A The wind slams the shutters, and somewhere the generator stutters.

### SCENE s00484 | INT. CORPORATE OFFICE - SEVENTH-FLOOR CONFERENCE ROOM - DAY
Detected names (may be incomplete or contain aliases): DEBORAH QUILL, RAJ PATWARDHAN, CHLOE BEAUMONT
1 A ¶ A glass box overlooking a parking structure.
2 A A whiteboard reads SYNERGY SPRINT in three colors of marker.
3 A A bowl of untouched fruit.
4 A ¶ DEBORAH QUILL (40s, VP of Culture, lanyard, smile fixed) stands at the head of the table.
5 A RAJ PATWARDHAN (30s, analyst, laptop open, tie loosened) sits halfway down.
6 A CHLOE BEAUMONT (20s, intern, notebook on her knee) sits at the far end, as if hoping to be forgotten.
7 D DEBORAH: So. We're all aligned that the new initiative is a game-changer.
8 D RAJ: Which initiative?
9 D DEBORAH: The one in the email.
10 D RAJ: There were four emails.
11 D DEBORAH: The one with the rocket emoji.
12 D RAJ: That was a typo. It was supposed to be a calendar.
13 D DEBORAH: The rocket stays. The rocket is the brand.
14 D RAJ: Deborah, with respect, the rocket is a tool that reassigns three departments to a platform we have not purchased.
15 D DEBORAH: Which is why we're being proactive.
16 D RAJ: We are being fictional.
17 D DEBORAH: We are being agile.
18 D RAJ: We are being laid off. In five weeks. By the rocket.
19 D DEBORAH: Raj, I'd love for you to hear yourself.
20 D RAJ: I hear myself. I've heard myself since Q2. Nobody else seems to.
21 D DEBORAH: Chloe, what do you think?
22 D CHLOE (barely audible): Is the bowl of fruit for us?
23 D DEBORAH: It's for morale.
24 D CHLOE: It has been there since Monday.
25 D DEBORAH: Fruit takes time to work.
26 D RAJ: Deborah.
27 D DEBORAH: Yes, Raj.
28 D RAJ: I'm resigning.
29 D DEBORAH: You can't, we have a retrospective.
30 D RAJ: That's the best argument for it.
31 D DEBORAH: Then let's do the retrospective first, and you can resign after as a, quote, learning.
32 D RAJ: I'll take the fruit.
33 D DEBORAH: Take two.
34 A ¶ Raj picks up the bowl and walks out.
35 A Deborah stares at the door.
36 A Chloe slowly raises her hand.
37 D CHLOE: Can I go with him?
38 D DEBORAH: Please. Take notes.

### SCENE s01806 | EXT. HOLLOW OF THE SINGING STONES - TWILIGHT
Detected names (may be incomplete or contain aliases): QUILLON ASHDOWN, MAEVE OKONKWO-FAIR, SIR GERVASE THORNWICK, DOBBIN
1 A ¶ A bowl in the mountains ringed with standing stones as tall as barns.
2 A The stones hum, each on its own faint note, and the notes braid together into something almost like speech.
3 A Mist pools in the hollow.
4 A Violet light bleeds from the west.
5 A ¶ Four travelers have come down the goat path into the circle.
6 A QUILLON ASHDOWN, thirties, a lean scout with a bow across his back, kneels to touch the turf.
7 A MAEVE OKONKWO-FAIR, twenties, a healer in a moss-green cloak, stands with one hand on the nearest stone and her eyes shut.
8 A Behind them, the old knight SIR GERVASE THORNWICK, sixties, leans on his greatsword, wheezing from the climb, and his squire, little DOBBIN, twelve, hugs the sword's scabbard and stares up at the stones with a mouth like a small round O.
9 A ¶ The stones sing a little louder.
10 A Quillon draws an arrow, thinks better of it, and slides it back into the quiver.
11 A Maeve opens her eyes and takes her hand from the rock as if it had burned her.
12 A Sir Gervase straightens, and Dobbin drops the scabbard, picks it up again, and drops it again as the hum climbs a half-step.
13 D QUILLON (low): Maeve. What are they saying?
14 D MAEVE: They aren't saying. They're remembering.
15 D QUILLON: Remembering what?
16 D MAEVE: Everyone who has ever stood here.
17 D SIR GERVASE (wheezing): That would be a long list.
18 D MAEVE: It is.
19 A ¶ Dobbin steps to the center of the circle, where a flat, dark stone lies embedded in the grass like a coin.
20 A He crouches and traces a groove in it with one finger.
21 D DOBBIN: Sir Gervase, there's writing.
22 D SIR GERVASE: Can you read it, lad?
23 D DOBBIN: Not all of it. It says something about a door.
24 D QUILLON: A door?
25 D DOBBIN: "Speak the name of the one you have lost, and the door will open."
26 A ¶ Silence.
27 A The stones fall quiet all at once.
28 A The mist stops moving.
29 A Maeve looks at Quillon.
30 A Quillon looks at the grass.
31 A Sir Gervase studies his sword.
32 A Dobbin glances from face to face.
33 D DOBBIN [CONT'D]: Who goes first?
34 A ¶ Nobody answers.
35 A A wind lifts the edge of Maeve's cloak and lets it fall.
36 A Quillon wipes his palms down his thighs.
37 A At last Sir Gervase clears his throat, sets the sword point-down in the turf, and bows his head.
38 D SIR GERVASE: Ysolde.
39 A ¶ The stones sing once, a single bright note, and the dark stone in the center brightens to the color of an ember.
40 A Quillon swallows.
41 A Maeve shuts her eyes again.
42 A Dobbin takes Sir Gervase's free hand, and the old knight lets him.
43 D MAEVE (softly): Quillon.
44 D QUILLON: I know.
45 D MAEVE: Say it.
46 D QUILLON: I can't.
47 D MAEVE: You can.
48 D QUILLON (barely): Tamsyn.
49 A ¶ The ember brightens.
50 A A seam of light opens in the air above the stone, thin as a thread, and the whole hollow leans toward it.
51 A Maeve steps forward, then Dobbin, then Sir Gervase with his sword on his shoulder, and Quillon last, and the door in the air widens until it is the size of a man.

### SCENE s01973 | INT. MINIATURE-GOLF CLOCK TOWER, WINDMILL HOLE - NIGHT
Detected names (may be incomplete or contain aliases): TALL MAN, WOMAN, DOLORES, WALT
1 A ¶ A faded mini-golf course after closing.
2 A Plastic windmill, fiberglass lighthouse, a clock-tower hole with a hollow base.
3 A A service panel stands open at its foot.
4 A ¶ A figure in a black hoodie crouches inside the clock tower with a headlamp and a duffel bag.
5 A A TALL MAN (40s, careful hands, wedding ring on a chain around his neck) works a thin pick into the panel's lock.
6 A ¶ A second figure appears at the fence line.
7 A A WOMAN (30s, sneakers, a tote bag from a bakery) climbs over, lands badly, and freezes.
8 A They stare at each other.
9 A ¶ The Tall Man lifts one finger to his lips.
10 A She nods.
11 A Walks over without a sound, sets down the bakery tote, and kneels beside him.
12 D WOMAN (whispering): You're late.
13 D TALL MAN: You're early.
14 D WOMAN: There's a cop at the corner.
15 D TALL MAN: He's eating.
16 D WOMAN: How do you know he's eating?
17 D TALL MAN: Because it's a Tuesday and Tuesdays are pierogi.
18 A ¶ She considers this.
19 A Looks at the lock.
20 A At his hands.
21 D WOMAN: You said four minutes.
22 A ¶ He does not answer.
23 A The pick clicks.
24 A Stops.
25 A He pulls it out, wipes it on his sleeve, and starts again, slower.
26 D WOMAN [CONT'D] (to herself): Okay. Okay. Okay.
27 D TALL MAN: Talk to the lock, not me.
28 D WOMAN: The lock doesn't care.
29 D TALL MAN: Neither do I. Please.
30 A ¶ A siren, distant, passes the block and fades.
31 A Neither of them breathes until it does.
32 A He lowers his headlamp to a dim red.
33 A ¶ The lock gives with a soft thunk.
34 A He pulls the panel back.
35 A Inside, a steel box the size of a toaster.
36 D WOMAN: That's it?
37 D TALL MAN: That's it.
38 D WOMAN: Thirty years in this city and the most valuable thing in it is under a clock tower with a cartoon face.
39 D TALL MAN: Dolores, that's the point.
40 A ¶ The woman, DOLORES, goes still.
41 A He realizes what he's said.
42 A Neither speaks.
43 D DOLORES: You said you wouldn't use names.
44 D TALL MAN: I know.
45 D DOLORES: So you know mine.
46 A ¶ He closes his eyes briefly.
47 A Opens them.
48 A Reaches for the steel box and lifts it out with both hands.
49 A It's heavier than it looks.
50 D TALL MAN: Walt.
51 D DOLORES: Walt.
52 D WALT: My name. Since we're doing it.
53 A ¶ She takes the box from him and puts it in the bakery tote under a layer of paper-wrapped rolls.
54 A A long, satisfied, silent beat.
55 A Then headlights sweep the course.
56 D DOLORES (low): Walt.
57 D WALT: I see it.
58 A ¶ They crouch lower inside the hollow of the tower, shoulders pressed together.
59 A The lights pass across the fiberglass lighthouse.
60 A Stop.
61 A Linger.
62 A ¶ A car door opens.
63 D WALT [CONT'D] (whispering): Pierogi's done early.
64 D DOLORES: Don't joke.
65 D WALT: I'm not.
66 A ¶ She takes his hand.
67 A He lets her.

### SCENE s02443 | INT. NIGHT TRAIN - DINING CAR - SNOWSTORM
Detected names (may be incomplete or contain aliases): WOMAN, CALLUM FAIRBROTHER, GIORGOS ANAGNOSTOU, NADIA, ELDERLY COUPLE, HEDDA LINDQVIST-ROSE, AMBROSE
1 A ¶ White-clothed tables, brass lamps, windows frosted from outside.
2 A The car sways.
3 A A candle gutters in every glass.
4 A At the far end, a tarnished samovar steams.
5 A ¶ Only a handful of passengers remain.
6 A A WOMAN (30s, trench coat, damp hair) sits alone at a two-top, a closed book in front of her.
7 A She hasn't turned a page in twenty minutes.
8 A ¶ CALLUM FAIRBROTHER (30s, rumpled suit, tie loosened) stands at the doorway, scanning for a seat.
9 A The car is nearly empty and every table is free.
10 A He walks to hers anyway.
11 D CALLUM: Is this taken?
12 D WOMAN: There are fourteen empty tables.
13 D CALLUM: I can count.
14 A ¶ She almost smiles.
15 A Gestures to the chair.
16 A He sits.
17 A ¶ GIORGOS ANAGNOSTOU (50s, waiter, white jacket, impeccable mustache) glides over with a menu.
18 D GIORGOS: Madam, sir. Tonight we have lamb or lamb.
19 D CALLUM: Lamb.
20 D WOMAN: The same.
21 D GIORGOS: A wise choice. Wine?
22 D CALLUM: Red.
23 D WOMAN: Whatever he's having.
24 A ¶ Giorgos nods and withdraws.
25 A Callum straightens his cutlery.
26 A She watches him do it.
27 D WOMAN [CONT'D]: You're nervous.
28 D CALLUM: I'm on a train in a blizzard with a stranger.
29 D WOMAN: Nadia.
30 D CALLUM: Pardon?
31 D NADIA: My name. Nadia Haddad. Now I'm not a stranger.
32 D CALLUM: Callum.
33 D NADIA: That's a Scottish name.
34 D CALLUM: My mother was Scottish. My father was an accountant.
35 D NADIA: And you?
36 D CALLUM: Also an accountant.
37 D NADIA: Ah. That explains the cutlery.
38 A ¶ They both laugh.
39 A The train lurches.
40 A Candles flicker.
41 A A glass slides and Callum catches it without looking, almost gracefully.
42 A ¶ Behind them, an ELDERLY COUPLE enters: HEDDA LINDQVIST-ROSE (70s, pearls, cane) and AMBROSE (70s, bow tie, a flask) bickering softly in tandem.
43 D HEDDA: Ambrose, you promised no more than one.
44 D AMBROSE: I promised no more than one at a time.
45 D HEDDA: That's not what a promise is.
46 D AMBROSE: It's what a promise is when you've been married fifty years.
47 A ¶ They pass the table.
48 A Hedda stops.
49 D HEDDA: My dears, you make a handsome pair.
50 D CALLUM: Oh, we're not--
51 D NADIA: We just met.
52 D AMBROSE: That's how it starts.
53 D HEDDA: That's exactly how it starts.
54 A ¶ They settle at the table behind them, still murmuring.
55 A Nadia lowers her voice.
56 D NADIA: They're adorable.
57 D CALLUM: They're terrifying.
58 A ¶ Giorgos returns with wine.
59 A Pours two glasses, then pauses over the third table.
60 D GIORGOS: Sir, madam, may I recommend the plum tart? It is the only thing I make myself.
61 D HEDDA: Two, please.
62 D AMBROSE: Three. For the road.
63 D GIORGOS: We are on the train, sir.
64 D AMBROSE: Even so.
65 A ¶ Callum raises his glass to Nadia.
66 A She lifts hers.
67 A Their eyes catch, hold.
68 D CALLUM: To blizzards.
69 D NADIA: To stranded trains.
70 D HEDDA: ^To fifty years!
71 D AMBROSE: ^To another fifty!
72 D NADIA (laughing): To everyone.
73 A ¶ Giorgos steps back.
74 A The couple chatters.
75 A The train rocks.
76 A For a moment the whole car glows.
77 A ¶ Then the lights flicker and die.
78 A Darkness.
79 A A scream of brakes.
80 A The car lurches.
81 A Glass shatters.
82 D CALLUM: Nadia?
83 D NADIA: I'm here.
84 D CALLUM: Hold on to me.
85 A ¶ A hand finds a hand in the dark.
86 D HEDDA [O.S.]: Ambrose!
87 D AMBROSE [O.S.]: Right here, love.
88 D GIORGOS [O.S.]: Please remain seated.
89 A ¶ The train shudders to a stop.
90 A Snow hisses against the windows.
91 A Somewhere, a single match is struck, and a tiny flame blooms.
92 D NADIA: Callum.
93 D CALLUM: Yes?
94 D NADIA: I think I'd like to know your last name.
95 D CALLUM: Fairbrother.
96 D NADIA: That is a terrible name.
97 D CALLUM: I'm told it's improving.

### SCENE s02280 | INT. BARBERSHOP, SILVER GULCH - DAY
Detected names (may be incomplete or contain aliases): JUDGE AMBROSE LITTLEFIELD, SHERIFF NATHANIEL WREN, DOC SILAS FAIRWEATHER, ROSALIND MARCHAND, ROSIE, DEPUTY CALEB, DOC
1 A ¶ Striped pole.
2 A Brass spittoon.
3 A Through the window, a gallows is being quietly dismantled across the street.
4 A ¶ JUDGE AMBROSE LITTLEFIELD, sixty, sits in the barber's chair under a white cloth.
5 A SHERIFF NATHANIEL WREN, forties, stands at the door with his hat in his hands.
6 A DOC SILAS FAIRWEATHER, a tall consumptive, sits by the stove.
7 A ROSALIND MARCHAND, called ROSIE, thirty, the barber, strops a razor.
8 A DEPUTY CALEB, nineteen, holds the broom.
9 D LITTLEFIELD: Cut it short, Rosie.
10 D ROSIE: Not too short, Judge. You'll feel the draught.
11 D WREN: He won't be out of doors much.
12 D LITTLEFIELD: Nathaniel, I'll be out of doors a good deal. Don't you worry.
13 D DOC: You look better than you did in March.
14 D LITTLEFIELD: I look like a man who sentenced the wrong brother.
15 D WREN: You sentenced the one the jury found.
16 D LITTLEFIELD: Juries find what you set in front of them.
17 D ROSIE: Hold still.
18 D LITTLEFIELD: Is the rope down yet?
19 D CALEB: Yes, sir. Half an hour ago.
20 D LITTLEFIELD: Good boy. Sweep the sawdust before the wind takes it.
21 D WREN: The mare's saddled at the livery. Provisions are in the left bag.
22 D LITTLEFIELD: You've been thoughtful.
23 D WREN: Rosie packed the bread.
24 D ROSIE: It's a day old.
25 D LITTLEFIELD: Everything's a day old in this town.
26 D DOC: Where will you go?
27 D LITTLEFIELD: South. There's a Judge in Albuquerque who owes me a sherry.
28 D ROSIE: You don't drink sherry.
29 D LITTLEFIELD: No. But it's owed.
30 D WREN: Ambrose.
31 D LITTLEFIELD: Yes, Nathaniel.
32 D WREN: I'll keep the bench warm.
33 D LITTLEFIELD: You'll keep it clean. That's the harder thing.
34 A ¶ Rosie wipes the razor on her apron and sets it on the shelf.
35 D ROSIE: That's the last of it.
36 D LITTLEFIELD: Thank you, Rosalind. What do I owe you?
37 D ROSIE: Two bits.
38 D LITTLEFIELD: Two bits for the cut of a lifetime.
39 D ROSIE: Three, if you stay for the shave.
40 D LITTLEFIELD: No. No, I believe I'll go as I am.

### SCENE s01424 | EXT. FROZEN RESERVOIR - DAWN
Detected names (may be incomplete or contain aliases): ODALYS MERCADO, HANS-PETER VOSS
1 A ¶ The lake lies like a sheet of poured pewter, its far shore dissolved in mist.
2 A Snow has drifted in long tongues over the ice.
3 A It is entirely silent, the kind of silence with weight.
4 A ¶ ODALYS MERCADO (30s, orange parka, a camera strapped across her chest) walks a careful line over the surface, testing each step with an ice pick.
5 A Behind her, HANS-PETER VOSS (60s, tall, beard grey with frost, a rucksack twice the size it should be) drags a sled loaded with coiled rope and a sealed metal case.
6 D ODALYS: Look at it. Not a crack.
7 D HANS-PETER: Ice does not announce itself.
8 D ODALYS: You're a cheerful man.
9 D HANS-PETER: I am a careful man.
10 A ¶ They walk on.
11 A A pale sun clears the ridge and lays copper across the ice.
12 A Ahead, a red flag on a bamboo pole marks the survey stake.
13 A Odalys quickens.
14 A Hans-Peter keeps the sled's rope short, and slow.
15 A ¶ She reaches the stake.
16 A Photographs it.
17 A Photographs the horizon.
18 A Laughs at nothing in particular, breath smoking.
19 D ODALYS [CONT'D]: We did it. Day four, and the ice is solid, and --
20 A ¶ Under their boots, a long groan rolls out from the center of the lake, a bass note that climbs through the soles of the feet into the teeth.
21 A Both freeze.
22 A Odalys's smile hangs on her face a second longer than it should.
23 D HANS-PETER (low): Do not run.
24 D ODALYS: I wasn't going to.
25 D HANS-PETER: Your face says you were.
26 A ¶ A black line spiders from beneath the sled runner, racing in two directions.
27 A Hans-Peter releases the rope.
28 A Odalys drops flat, spreading her arms.
29 A The sled tilts.
30 A The metal case slides, slides, tips, and vanishes into a widening mouth of water without a splash.
31 A ¶ They lie side by side, a body's length apart, hands spread on the ice like swimmers on a cold floor.
32 D ODALYS: That was the samples.
33 D HANS-PETER: That was a case.
34 A ¶ They crawl.
35 A Slowly.
36 A The line widens behind them, then stops.
37 A The groan fades.
38 A Somewhere far off, a raven calls.
39 A ¶ Hans-Peter reaches the thick white of the shore snow first, pulls himself onto it, and offers a gloved hand back.
40 A Odalys takes it.
41 A Pulls up.
42 A Both scramble backward from the edge and sit, panting.
43 D ODALYS: Day four.
44 D HANS-PETER: Day four.

### SCENE s01360 | INT. FAMILY LAW OFFICE, WAITING ROOM - DAY
Detected names (may be incomplete or contain aliases): FIONA KESSELL, GIDEON KESSELL, HANA OKADA, IVO BRAJOVIC, JOLENE MARCH, KASPAR
1 A ¶ Plastic chairs.
2 A A dying ficus.
3 A A wall clock that runs four minutes slow.
4 A ¶ FIONA KESSELL, 40s, in a suit, clutches a folder.
5 A GIDEON KESSELL, 40s, her ex, ankle on his knee, scrolls his phone.
6 A HANA OKADA, 30s, Fiona's sister, perches beside her.
7 A IVO BRAJOVIC, 60s, Gideon's father, sits stiff with his coat on.
8 A JOLENE MARCH, 30s, Gideon's new girlfriend, carries two coffees.
9 A And KASPAR, 10, Fiona and Gideon's son, swings his legs on a chair too tall.
10 A ¶ Jolene offers a coffee to Fiona.
11 A Fiona doesn't take it.
12 A Hana takes it instead.
13 A Jolene smiles and sits.
14 D HANA: Thanks.
15 D JOLENE: You're welcome.
16 A ¶ Fiona stares at the ficus.
17 A Gideon taps his screen.
18 A Ivo clears his throat.
19 D IVO: Gideon.
20 D GIDEON: Dad.
21 D IVO: Put the phone away.
22 D GIDEON: It's work.
23 D FIONA: It's never work.
24 D GIDEON (not looking up): Fiona, not here.
25 D FIONA: Where, then?
26 D GIDEON: In there. With the lawyer.
27 D KASPAR: Mom, can I have a coffee?
28 D FIONA: No.
29 D JOLENE (to Kaspar): I'll get you a hot chocolate, sweetheart.
30 D FIONA: Don't call him that.
31 D JOLENE: I'm sorry?
32 D FIONA: Sweetheart.
33 A ¶ Hana stands.
34 A Fiona stands.
35 A Jolene stands.
36 A Gideon rises last.
37 A Ivo folds his arms.
38 A Kaspar slides off the chair, backs into the corner, and the five adults square off, voices rising, hands moving, until the door opens and a receptionist leans out.
39 A ¶ Everyone freezes.
40 D HANA (quietly): Sorry.
41 A ¶ She sits.
42 A They all sit.
43 A Kaspar slips back into his chair.
44 A Fiona accepts the coffee, finally.

### SCENE s01726 | EXT. DRIVE-IN CONCESSION ROOF - NIGHT
Detected names (may be incomplete or contain aliases): TAVITA SOLOMONA, ROZ KELLERMAN, EAMON FLYNN
1 A ¶ Tar paper.
2 A A dead neon popcorn bucket.
3 A The big screen glows blue over a field of parked cars.
4 A ¶ TAVITA SOLOMONA (17, linebacker shoulders, soft eyes) sits on the edge.
5 A ROZ KELLERMAN (17, sharp, camera strapped on) crouches near the vent.
6 A EAMON FLYNN (16, small, hands in his sleeves) arrives last through the hatch.
7 A ¶ Eamon's boots on tin.
8 A Everyone freezes.
9 D ROZ: You're late.
10 D EAMON: My mom had me.
11 A ¶ Tavita stands.
12 A Roz stands.
13 A They back away from the hatch.
14 A A flashlight beam sweeps the lot below.
15 D TAVITA: Cops.
16 D ROZ: Security.
17 D TAVITA: It's the same thing.
18 D ROZ: Get down!
19 A ¶ All three drop flat.
20 A Tavita pulls Eamon by the collar.
21 A Roz's camera clacks on the tar.
22 A The beam slides past them, and passes.
23 A They breathe.
24 A ¶ Then Eamon laughs.
25 A Tavita shoves him.
26 A Eamon shoves back.
27 A They tumble, wheezing, quiet as they can be.
28 D ROZ (whisper): Stop it. Stop.
29 D EAMON: Roz, you looked so scared.
30 D ROZ: I was not.
31 D TAVITA: You were crying.
32 D ROZ: I was not!
33 D EAMON: Tav, you cried too.
34 D TAVITA: I cry at commercials. It doesn't count.
35 D ROZ: You said you'd tell him tonight.
36 D TAVITA: Tell who what?
37 D ROZ: Eamon. About the move.
38 D EAMON: What move?
39 D TAVITA: It's nothing.
40 D ROZ: It's Ohio.
41 D EAMON: Ohio?
42 D TAVITA: My dad's job. It's August. I didn't want to say it up here.
43 D EAMON: You were gonna say it at the lake. You said that.
44 D TAVITA: I know what I said.
45 D ROZ: So say it.
46 D TAVITA: I'm moving. I'm sorry. I'm sorry.
47 D EAMON: Okay.
48 D TAVITA: Okay?
49 D EAMON: Okay. That's August. It's June.
50 D ROZ: We have the whole summer.
51 D EAMON: We have sixty-one nights. I counted.
52 A ¶ Tavita wipes his face with his sleeve.
53 A Roz lifts her camera.
54 A The film flickers across all three of them, blue.
55 A ¶ She takes the picture.

### SCENE s00998 | INT. ICE-FISHING HUT - NIGHT
Detected names (may be incomplete or contain aliases): GRETA
1 A ¶ Plywood walls.
2 A A hole in the floor, black water, the surface skinned with ice.
3 A A propane lantern hisses.
4 A A tape recorder sits on a stool.
5 A The wind outside sounds like a throat.
6 A ¶ The door shudders, bangs, opens.
7 A Snow swirls in.
8 A ¶ GRETA (30s, parka caked white, ski mask pushed up, red-rimmed eyes) staggers inside, drags the door shut, and slides the bolt.
9 A She drops her pack.
10 A Rips off her gloves.
11 A The lantern flickers as if breathing in her fear.
12 A ¶ She flips the tape recorder.
13 A The reel turns.
14 A A voice crackles.
15 D GRETA [V.O.] (recorded, bright): Day three. Hut one. Everything is fine. I'm fine.
16 A ¶ She slams the stop button.
17 A Presses her back against the wall.
18 A Listens.
19 A Wind rattles the tin chimney.
20 A Something scrapes across the roof, slow as a fingernail.
21 A Greta slides her knife from her boot and holds it level.
22 A The scraping moves down the wall, around the corner, to the door.
23 A The bolt trembles in its bracket.
24 A The lantern gutters low.
25 A She lifts the knife.
26 A The hole in the floor bubbles, a single fat bubble, and bursts.
27 D GRETA (whispering): I'm fine.
28 A ¶ The door handle turns.
29 A Slowly.
30 A Once.
31 A Twice.
32 A Then the whole hut lurches as if shouldered, and the lantern swings, throwing a long shadow across the ceiling.
33 A The knife trembles in her fist.
34 A She cuts the lantern's gas with her other hand, and darkness takes the room.
35 A ¶ In the dark, the tape recorder clicks on by itself.
36 D GRETA [V.O., CONT'D] (recorded, calm): Don't open the door.
37 D GRETA: I didn't!
38 A ¶ The bolt slides back on its own.

### SCENE s01192 | EXT. STAGE STATION WELL - HIGH DESERT - NOON
Detected names (may be incomplete or contain aliases): JEDEDIAH PRUITT, ABBY, TORRANCE, LOCKHART
1 A ¶ A parched yard.
2 A A plank shed, a rusted pump, a stone well with a wooden lid.
3 A Heat shimmers.
4 A A water barrel is tipped on its side, bone dry.
5 A ¶ JEDEDIAH PRUITT (60s, hat brim curled, a sheriff's star pinned crooked) stands at the well with a rope around his waist.
6 A He peers over the edge.
7 A ABIGAIL "ABBY" TORRANCE (20s, dust-grey duster, rifle slung across her back) sits on the stone rim and drinks from a canteen.
8 A MR. LOCKHART (40s, striped vest, no gun) leans against the shed, watching the horizon.
9 D JEDEDIAH: Pump's dry.
10 D ABBY: Well's not.
11 D JEDEDIAH: Well's got something in it.
12 D ABBY: Something or someone?
13 A ¶ Jedediah tests the rope.
14 A It holds.
15 A Lockhart pushes off the shed, steps forward, and bumps the barrel with his boot.
16 A It rolls across the yard and clunks against the pump.
17 D LOCKHART: I'm only passing through, Sheriff. I'd consider it a favor if you'd leave my business out of it.
18 D JEDEDIAH: Your business has been dropping bodies in my well for three weeks, Mr. Lockhart.
19 D LOCKHART: I wouldn't know about that.
20 D ABBY (dry): He wouldn't.
21 A ¶ Jedediah lowers himself over the rim, hand over hand.
22 A Abby grips the rope and feeds it down.
23 A Lockhart takes a step toward her.
24 A She half-draws the rifle without looking at him, and he stops, both hands open at his sides.
25 D LOCKHART: Miss, you really shouldn't.
26 D ABBY: I really should.
27 A ¶ From below, a splash.
28 A Then Jedediah's voice, hollow in the stone.
29 D JEDEDIAH [O.S.]: It's him. It's Arliss.
30 A ¶ Abby releases a breath.
31 A Lockhart spits in the dust.
32 A The wind picks up, rattling the shed door.
33 D JEDEDIAH [O.S., CONT'D]: Pull me up.
34 A ¶ Abby and Lockhart both look at the rope.
35 A Abby tightens her grip.
36 A Lockhart folds his arms.
37 A Neither of them moves.
38 D ABBY: Mr. Lockhart, I'd hate to need your help.
39 D LOCKHART: I'd hate to give it.
40 A ¶ He takes hold of the rope anyway.
41 A They haul together, heaving, boots skidding in the dirt, until Jedediah's hat rises over the rim.

### SCENE s00173 | EXT. SALT FLATS - MIDDAY
Detected names (may be incomplete or contain aliases): DOROTHY MAE PRUITT, LORETTA PRUITT, JUDGE HARLAN CREEL, MILO
1 A ¶ A white, cracked desert under a merciless sun.
2 A Heat shimmers off the ground.
3 A In the distance, an overturned jeep lies on its roof like a dead beetle.
4 A ¶ DOROTHY MAE PRUITT, 50s, a surveyor in a wide-brimmed hat, sits in the thin shade of the jeep.
5 A Her sister, LORETTA PRUITT, 40s, kneels beside her with a canteen held upside down, shaking out the last drops.
6 A Across from them stands JUDGE HARLAN CREEL, 60s, a man in a ruined linen suit, one shoe missing.
7 A Behind him, MILO, 20s, their driver, drags a spare tire from the wreck and tries to prop it against the axle as a sunshade.
8 A ¶ Dorothy watches Loretta tilt the canteen.
9 A Loretta does not meet her eyes.
10 A Harlan licks his cracked lips and takes a step toward the canteen.
11 A Milo drops the tire with a grunt, then stands between Harlan and the sisters without seeming to decide to.
12 D HARLAN: There's a well at the old mine. Four miles.
13 D DOROTHY: Four miles that way, or four miles you think that way?
14 D HARLAN: I'm not in the habit of guessing.
15 D LORETTA: You're missing a shoe, Judge.
16 A ¶ Harlan glances at his bare foot.
17 A He tucks it behind the other.
18 D MILO (to Dorothy): She's right about the distance. I drove past it Thursday.
19 D DOROTHY: Thursday you drove past everything.
20 A ¶ Milo says nothing.
21 A He picks the tire up again.
22 A ¶ Loretta caps the empty canteen and slowly hands it to Dorothy.
23 A Dorothy turns it in her palm, then hands it back.
24 A Loretta puts it in her bag.
25 A Neither speaks.
26 A Harlan watches the trade as if it were a verdict.
27 D HARLAN: If we leave now, we reach it by dusk.
28 D LORETTA: And if we wait?
29 D HARLAN: Then we wait for a different problem.
30 A ¶ Dorothy stands, brushes salt from her skirt.
31 A She takes Loretta's hat and sets it on her sister's head, straightening the brim.
32 D DOROTHY: Four miles.
33 A ¶ She starts walking.
34 A Loretta follows.
35 A Harlan hesitates, then limps after them.
36 A Milo leaves the tire behind and falls in last, eyes on the horizon.

### SCENE s01181 | INT. ABANDONED SALT MINE - SHAFT STATION - NIGHT
Detected names (may be incomplete or contain aliases): YOUNG SOLDIER, COMMAND, ALMEIDA
1 A ¶ White crystal walls glitter under a dying headlamp.
2 A A field radio sits on an overturned crate, its dial glowing orange.
3 A ¶ A YOUNG SOLDIER (19, helmet too big, canteen empty) kneels beside the radio and turns the dial.
4 A He wipes salt from his lips with the back of his hand.
5 A He picks up the handset, puts it down, picks it up again, and finally presses the key.
6 D YOUNG SOLDIER: Any station, any station. This is Almeida. Come in.
7 A ¶ A burst of static answers.
8 A Then a woman's voice, patient and far away.
9 D COMMAND [V.O.] (over radio): Almeida, this is Command. Say your position.
10 D ALMEIDA: Mine shaft, level four. I'm alone. The others went up at dusk and haven't come back.
11 D COMMAND [V.O.] (over radio): Understood, Private. Do you have water?
12 D ALMEIDA: No. A little. Not enough.
13 A ¶ He crawls to the shaft opening, peers up into the dark, then scrambles back, knocks over the crate, catches the radio before it hits the floor, and sets it upright while the headlamp flickers.
14 D COMMAND [V.O.] (over radio): Private Almeida, listen. The extraction was cancelled at noon. I'm sorry.
15 A ¶ Almeida slides down the wall to the floor.
16 A He lets the handset rest on his knee.
17 D ALMEIDA (flat): Cancelled.
18 D COMMAND [V.O.] (over radio): I'll stay on the line as long as you want.
19 A ¶ Almeida closes his eyes.
20 A The headlamp goes out.
21 A The radio dial keeps glowing.

### SCENE s00268 | INT. LUNAR RELAY STATION "KESTREL-4," COMMAND DECK - SHIP NIGHT
Detected names (may be incomplete or contain aliases): STATION CHIEF AMINATA VOSKUIJLEN-OSEI, DAV, LINDQVIST-KAMARA
1 A ¶ A cramped dome of monitors and cables.
2 A A slice of Earth hangs in the viewport, blue and fragile.
3 A ¶ STATION CHIEF AMINATA VOSKUIJLEN-OSEI (40s, grey coverall, tied-back hair) sits at the primary console, headset on one ear.
4 A ¶ Beside her, systems tech DAVID "DAV" LINDQVIST-KAMARA (30s, T-shirt, bare feet on the deck) eats a protein bar.
5 D AMINATA: Telemetry's drifting.
6 D DAV: It's always drifting.
7 D AMINATA: Not by this much.
8 D DAV: Let me see.
9 A ¶ He swivels to her screen, bar in his mouth.
10 A Reads.
11 A Swallows.
12 D DAV [CONT'D]: Huh.
13 D AMINATA: Huh?
14 D DAV: That's not drift.
15 D AMINATA: What is it?
16 D DAV: Something is pinging us.
17 D AMINATA: From where?
18 D DAV: Everywhere.
19 A ¶ A soft tone sounds.
20 A Both look at the console.
21 A A line of green text scrolls past.
22 D AMINATA (reading): "Greetings, Kestrel-Four."
23 D DAV: That's--
24 D AMINATA: It's coming from our own transmitter.
25 D DAV (overlapping): It's a loopback!
26 D AMINATA (overlapping): It's not a loopback!
27 A ¶ ^
28 A ¶ They stare at each other.
29 A The text continues.
30 D DAV (reading): "We have waited."
31 D AMINATA: Who's "we"?
32 D DAV: Aminata, I'm going to need a minute.
33 D AMINATA: Take two.
34 A ¶ He stands, pacing.
35 A Then stops, hands on his hips.
36 D DAV: Okay. Hypothesis. Either it's a prank by the Mars crew--
37 D AMINATA: They're asleep.
38 D DAV: --or it's a prank by the ground crew--
39 D AMINATA: They're in a meeting.
40 D DAV: --or it's us.
41 D AMINATA: Us?
42 D DAV: We're hallucinating. Oxygen's low.
43 A ¶ She taps a gauge.
44 A It reads perfect.
45 D AMINATA: Oxygen's fine.
46 D DAV: Damn.
47 A ¶ Another tone.
48 A The text changes.
49 D AMINATA (reading): "Please do not be afraid."
50 D DAV: I'm afraid.
51 D AMINATA (dry): Me too.
52 A ¶ She types: WHO ARE YOU.
53 A The cursor blinks.
54 A Then the reply:
55 A ¶ "A friend.
56 A Look up."
57 A ¶ They look up.
58 A Through the viewport, high above the lunar horizon, a ring of pale lights forms, silent, orderly, expanding.
59 D DAV (whispering): Chief.
60 D AMINATA: I see it.
61 D DAV: Should we call Houston?
62 D AMINATA: We should wake the Mars crew.
63 D DAV: Both.
64 D AMINATA: Both.
65 A ¶ Neither moves.
66 A The lights grow.
67 A In the viewport the Earth looks smaller than before.
68 D DAV: Aminata?
69 D AMINATA: Yes?
70 D DAV: I never finished my protein bar.
71 A ¶ She almost smiles.
72 A Reaches over and takes it from his hand.
73 A Takes a bite.
74 D AMINATA: Neither did I.
75 A ¶ She chews, slowly.
76 A They watch the sky.

### SCENE s01992_1 | EXT. GLACIER SLOPE - CONTINUOUS
Detected names (may be incomplete or contain aliases): HANNELORE, HESTER VAN DER BERG-ACHEBE, INGRID
1 A ¶ Four figures crawl out of the powder: Hannelore, Gideon, Kwesi, Ingrid.
2 A They count each other.
3 A Count again.
4 D HANNELORE: Where's Toby?
5 A ¶ No answer.
6 A The mouth of the cave is a wall of ice.
7 A ¶ A figure steps out from behind a boulder, covered in snow, camera in hand, blinking.
8 A It's HESTER VAN DER BERG-ACHEBE (30s, rescue ranger, orange parka, ice axe on her belt).
9 A She's been tracking them.
10 D HESTER: Whose camera is this?
11 D INGRID: Mine.
12 D HESTER: It was lying in the snow. Ten meters from the cave.
13 D INGRID: I dropped it.
14 D HESTER: Then where's the man who was holding the strap?
15 A ¶ They all look at the wall of ice.
16 A Hester unclips the axe, steps forward, and begins to chip.
17 D HANNELORE: That's three meters of ice.
18 D HESTER: Then we'd better be quick.

### SCENE s00184_1 | INT. COURTHOUSE CORRIDOR - CONTINUOUS
Detected names (may be incomplete or contain aliases): BAILIFF, RUTH
1 A ¶ Marble floors.
2 A Echoes.
3 A She leans against a column and closes her eyes.
4 A The Bailiff appears at her shoulder.
5 D BAILIFF: Ma'am, you dropped this.
6 A ¶ He hands her a single sheet.
7 A Exhibit nine.
8 A She folds it into her coat.
9 D RUTH: He's going to walk out of there tonight.
10 D BAILIFF: Yes, ma'am.
11 D RUTH: Eleven years.
12 A ¶ The Bailiff says nothing.
13 A He just nods.
14 A She smiles, finally, and goes.

### SCENE s00528 | INT. VELVET HOURS FUNERAL PARLOR - BACK ROOM - NIGHT
Detected names (may be incomplete or contain aliases): LOU DEVEREAUX, MISS ALTHEA CROWNINSHIELD, SPATS, BRINDISI
1 A ¶ Satin-lined caskets on trestles.
2 A Potted ferns.
3 A A gramophone plays a muted waltz.
4 A ¶ LOU DEVEREAUX, 40s, camel overcoat, snap-brim hat, sits in a leather chair, dealing himself solitaire on the lid of a coffin.
5 A ¶ MISS ALTHEA CROWNINSHIELD, 50s, the proprietor, in black crepe and pearls, pours two glasses of sherry.
6 A Her hand is perfectly steady.
7 D ALTHEA: You're early, Mr. Devereaux.
8 D LOU: Early's polite. Late's a funeral.
9 D ALTHEA: You find that amusing?
10 D LOU: In this business? Everything.
11 A ¶ She hands him a glass.
12 A He sips.
13 A Nods approval.
14 D LOU [CONT'D]: Good sherry.
15 D ALTHEA: My late husband's.
16 D LOU: He had taste.
17 D ALTHEA: He had a will.
18 A ¶ Lou smiles.
19 A Lays a red queen on a black king.
20 D LOU: About that. The boys tell me the account at First Mercantile is a little light.
21 D ALTHEA: They are mistaken.
22 D LOU: Seventeen thousand light, Miss Crowninshield.
23 D ALTHEA: Then someone has been careless with my money.
24 A ¶ ANGELO "SPATS" BRINDISI, 30s, white spats, a pencil moustache, slides in from the hallway holding a ledger like a hymn book.
25 A He nods at Althea with exaggerated courtesy.
26 D SPATS: Evening, Ma'am. Boss.
27 D LOU: Spats. Show the lady.
28 A ¶ Spats opens the ledger on the coffin.
29 A Althea does not glance at it.
30 D ALTHEA: I know what it says.
31 D LOU: Then you know the numbers don't lie.
32 D ALTHEA: Numbers never do, Mr. Devereaux. People do.
33 A ¶ She crosses to a tall ferns pot.
34 A Lifts a fern.
35 A Beneath it, a small brass bell on a cord.
36 A She rings it, once.
37 A A bright, silly chime.
38 D LOU: What's that for?
39 D ALTHEA: A courtesy.
40 A ¶ Every one of the coffin lids in the room creaks open an inch.
41 A A dozen gun barrels slide out, gleaming, steady.
42 A ¶ Spats drops the ledger.
43 A Lou's cards scatter.
44 D ALTHEA [CONT'D]: My husband always said: never trust a man who rushes a funeral.
45 D LOU (raising his glass slowly): Well. To your late husband.
46 D ALTHEA: To the late Mr. Devereaux.
47 A ¶ She clinks her glass to his.
48 A The waltz plays on.

### SCENE s01430 | INT. VERIDIAN SYSTEMS - OPEN-PLAN OFFICE - FIRE DRILL - DAY
Detected names (may be incomplete or contain aliases): VERB, PERPETUA NWOSU, ALISTAIR BOONSRI, LOLA FIGUEROA-WREN
1 A ¶ Rows of grey cubicles.
2 A A laminated sign reads "SYNERGY IS A VERB."
3 A Alarm bell clangs on a loop.
4 A ¶ PERPETUA NWOSU (40s, headset, high-vis vest over a blazer) strides between desks with a clipboard.
5 A ALISTAIR BOONSRI (30s, sleeves rolled, mug in hand) does not stand.
6 A LOLA FIGUEROA-WREN (20s, intern, lanyard tangled) stares at a vending machine.
7 D PERPETUA: Everyone! Exit through the east stairwell! Walk, do not run!
8 A ¶ Nobody else is there.
9 A The desks are empty.
10 A She says it anyway.
11 D ALISTAIR: Perpetua, we're the only two on this floor.
12 D PERPETUA: Three.
13 D ALISTAIR: Fine, three.
14 A ¶ Lola still has not moved.
15 D PERPETUA: Lola. Stairwell.
16 D LOLA: I'm waiting for my pretzels.
17 D PERPETUA: There is a fire.
18 D LOLA: Then I'll be quick.
19 A ¶ Alistair finally stands, mug still steaming.
20 D ALISTAIR (muttering): Every quarter, a fire. Never an actual fire.
21 D PERPETUA: I heard that.
22 D ALISTAIR: It was for you to hear.
23 A ¶ The alarm stops.
24 A Silence rings.
25 A Perpetua's headset crackles; she tilts her head, listens, goes still.
26 D PERPETUA (to herself): Oh no.
27 D ALISTAIR: What?
28 D PERPETUA: It was a real fire. Floor four. They forgot to tell the drill coordinator.
29 D LOLA (calling, bright): Everyone! Exit through the east stairwell!
30 A ¶ Her pretzels thump into the tray.
31 A She grabs them and sprints.
32 A Perpetua and Alistair follow, mug abandoned, spilling steam onto carpet.
33 A ¶ At the stairwell door, Perpetua stops, hand on the push bar.
34 D PERPETUA: False alarm. Floor four just burned a casserole.
35 D ALISTAIR: I hate this company.
36 D LOLA (mouth full): Pretzel?

### SCENE s00105 | INT. PICKLE FACTORY - HUMAN RESOURCES OFFICE - DAY
Detected names (may be incomplete or contain aliases): MAGDALENA OKOYE-FINNEGAN, BARRY KOWALSKI-ADEYEMI, PETRONELLA GRUBER
1 A ¶ A glass cubicle overlooking the brine vats.
2 A The air is vinegar.
3 A A motivational poster reads: "BE THE DILL."
4 A ¶ MAGDALENA OKOYE-FINNEGAN (50s, HR director, cardigan, sensible shoes) sits behind a desk stacked with folders.
5 A Across from her, BARRY KOWALSKI-ADEYEMI (40s, line supervisor, apron, spotless) folds his hands in his lap.
6 A In the corner, a chair holds PETRONELLA GRUBER (60s, union rep, thermos, knitting).
7 A ¶ She smiles.
8 A He smiles back.
9 D MAGDALENA: Thank you for coming in, Barry.
10 D BARRY: Of course.
11 D MAGDALENA: This is informal.
12 D BARRY: Great.
13 A ¶ She slides a folder across the desk.
14 A He does not touch it.
15 A Petronella knits.
16 D MAGDALENA: Anything you'd like to share?
17 D BARRY: About what?
18 D MAGDALENA: Anything.
19 A ¶ He glances at the folder.
20 A At Petronella.
21 A At the poster.
22 D BARRY: Business is good.
23 D MAGDALENA: Is it?
24 D BARRY: Yes.
25 A ¶ She nods.
26 A Opens the folder.
27 A Takes out a single photograph and sets it between them.
28 A He leans forward, then back, swallowing.
29 D BARRY [CONT'D]: That's a gherkin.
30 D MAGDALENA: It is.
31 D BARRY: It's a small gherkin.
32 D MAGDALENA: It is a small gherkin that was found in the Reuben line of Plant Three.
33 D PETRONELLA (not looking up): Knit one, purl two.
34 D BARRY: That's hardly my fault.
35 D MAGDALENA: Whose fault is it?
36 D BARRY: Systemic.
37 A ¶ She closes the folder gently.
38 A Folds her hands.
39 D MAGDALENA: Barry, we ran the camera footage.
40 A ¶ His smile stays.
41 A Everything else drains.
42 A Petronella sets down her needles.
43 D PETRONELLA: He did it for the cat.
44 D MAGDALENA (to Petronella): Not now.
45 D BARRY: It was a stray.
46 D MAGDALENA: It ate forty pounds of relish.
47 D BARRY: It was hungry.
48 A ¶ Petronella pours tea into the thermos cap and offers it to him.
49 A He takes it.

### SCENE s01962 | INT. MINIVAN - PARKED AT AUTOMATIC CAR WASH - DAY
Detected names (may be incomplete or contain aliases): ANSELMO ROJAS, HUI-MIN CHENG-ROJAS, ISAAC, NOOR, GRANDMA FUMIKO, TUCK
1 A ¶ A cramped, crumb-strewn van with a cracked windshield and a bumper sticker reading "MY OTHER CAR IS ALSO THIS."
2 A Sunlight bounces off foam outside.
3 A ¶ ANSELMO ROJAS, 40s, in a wrinkled polo, grips the wheel.
4 A HUI-MIN CHENG-ROJAS, 40s, in the passenger seat, juggles a grocery bag and a sippy cup.
5 A In the second row, ISAAC, 10, plays a handheld game, and NOOR, 7, hugs a stuffed giraffe.
6 A In the way back, GRANDMA FUMIKO, 80s, in a floral blouse, folds a paper crane.
7 A Strapped into a car seat beside her, baby TUCK, 1, chews a rubber pretzel.
8 D ANSELMO (to everyone): Okay! Windows up! Doors locked! Nobody touch anything!
9 D ISAAC: I'm not touching anything.
10 D NOOR: I'm touching the giraffe.
11 D HUI-MIN: Noor, that's allowed.
12 D GRANDMA FUMIKO (to Tuck): Look, little one. The soap is coming.
13 D TUCK: Ba!
14 A ¶ The van rolls forward.
15 A Foam slaps the windshield.
16 A Brushes begin to thump along the sides.
17 D ANSELMO (muttering): We're fine. We're fine. We're fine.
18 D HUI-MIN (softly, to him): Anselmo, you have driven through a car wash before.
19 D ANSELMO: Not with her.
20 A ¶ He glances in the mirror at Grandma Fumiko, who folds another crane, serene.

### SCENE s00608 | INT. PLANETARIUM CAFE - CLOSED - NIGHT
Detected names (may be incomplete or contain aliases): PHILOMENA CROSS, GRADY, TUCKER
1 A ¶ Chairs upturned on tables.
2 A A cooler humming.
3 A A faded mural of the solar system peeling above the counter.
4 A ¶ PHILOMENA CROSS, 40s, in a heavy knit sweater, sits very still at a window booth, a cold cup untouched before her.
5 A Across from her, GRADY, 30s, shirtsleeves rolled, taps a spoon against his saucer.
6 A On a stool at the counter, TUCKER, 30s, in a tweed jacket, spins slowly one way, then the other.
7 A ¶ Nobody says anything.
8 A The spoon taps.
9 A ¶ He glances at her.
10 A She glances away.
11 A He taps once more.
12 A Stops.
13 A ¶ Tucker lets the stool stop turning.
14 A He rests his elbows on the counter, studies the mural.
15 D TUCKER: Jupiter's too small.
16 D GRADY: It's accurate.
17 D TUCKER: It's a third of the size it ought to be.
18 D GRADY: Ought to be where?
19 D TUCKER: In the picture.
20 A ¶ Philomena slides her cup an inch toward the center of the table.
21 A Grady's eyes follow it.
22 D GRADY: You want that reheated?
23 D PHILOMENA: No.
24 D GRADY: You'll catch cold.
25 D PHILOMENA: I'll manage.
26 A ¶ Grady scrapes his chair back.
27 A Walks behind the counter.
28 A Tucker watches him pass, lets his hand drift to the edge of a drawer, and closes it again.
29 A ¶ He turns his head, slow, toward Philomena.
30 A She is already looking at him.
31 A He stays still.
32 A She doesn't blink.
33 A ¶ Grady comes back with a pot of coffee, a fresh cup.
34 A He pours.
35 A The smell of it fills the room.
36 D GRADY: Drink it. Please.
37 A ¶ She holds the cup but doesn't lift it.
38 A Steam curls up past her face.
39 D TUCKER (not looking): You don't have to say it.
40 D PHILOMENA: I wasn't going to.
41 D TUCKER: Good.
42 A ¶ Grady sets down the pot.
43 A Rests one hand on the back of Tucker's stool, the other flat on the table, close to Philomena's.
44 A They sit like that, three of them, around a thing nobody names, until the cooler cycles off and the silence turns total.

### SCENE s01343 | EXT. GLACIER CREVASSE - DAY
Detected names (may be incomplete or contain aliases): MARGUERITE VOSS, TOBY KANE, IZZY, BRANDT
1 A ¶ A blue slot in the ice, forty feet down, sheer walls glowing like glass.
2 A A rope runs up into white sky.
3 A ¶ MARGUERITE VOSS, 40s, dangles at the bottom, crampons biting.
4 A TOBY KANE, 30s, hangs three feet above her, rope bunched in his gloves.
5 A At the lip, IZABELLA "IZZY" BRANDT, 30s, belays, braced against an ice axe.
6 D IZZY (shouting down): Talk to me!
7 D TOBY: Her leg's pinned!
8 D MARGUERITE: I'm fine!
9 D IZZY: Which of you is talking?
10 D TOBY: Me! She means me!
11 A ¶ The ice groans.
12 A A shelf cracks above them.
13 A Snow hisses down.
14 A Toby swings, grabs at the wall, kicks a foothold.
15 A Marguerite hugs the ice.
16 D TOBY [CONT'D]: Cut her loose!
17 D MARGUERITE: Don't cut me loose!
18 D IZZY: Stop moving! Both of you!
19 A ¶ The groan fades.
20 A Quiet.
21 A Snow dribbles.
22 A Marguerite's breath fogs.
23 A Toby peers down at her, then up at Izzy.
24 D TOBY (whispering): She's stuck. I can reach her.
25 D IZZY (whispering): How stuck?
26 D MARGUERITE: Stuck like a stuck thing.
27 A ¶ Toby laughs once, shakily.
28 A He lowers himself another foot.
29 A His hand finds her harness.
30 A The ice gives a final crack and holds.
31 D IZZY: Pull!
32 A ¶ Toby pulls.
33 A Marguerite's leg comes free with a spray of ice.
34 A She cries out, grabs his wrist, and they rise together, jerked up the wall in short grunting yanks.
35 A ¶ At the lip, she hauls herself over first, then him.
36 A They collapse on the glacier, flat on their backs, staring at the sky.
37 D IZZY [CONT'D] (panting): Never again.
38 D MARGUERITE (panting): You say that every time.

### SCENE s02028 | INT. FLOWER MARKET COLD ROOM - PREDAWN
Detected names (may be incomplete or contain aliases): NOOR BAKHSH, TIM, REYES, GWENDOLYN FOSS, OSKAR LINDEN
1 A ¶ A walk-in refrigerator the size of a garage.
2 A Buckets of tulips and ranunculus line the metal shelves.
3 A The breath of four people hangs in the air.
4 A At the back, a steel door with a keypad.
5 A ¶ NOOR BAKHSH (30s, delivery-driver uniform, clipboard) holds a flashlight.
6 A TIMOTEO "TIM" REYES (40s, in a florist's apron that doesn't fit) props a bucket against the wall.
7 A GWENDOLYN FOSS (60s, elegant, white gloves) studies the keypad.
8 A Behind them all, OSKAR LINDEN (20s, sweating despite the cold) carries a long cardboard flower box.
9 D GWENDOLYN: Quiet, please. Everyone listen.
10 D NOOR: We're listening.
11 D GWENDOLYN: The vault door is on a six-digit code. We have three attempts before it locks for the hour.
12 D TIM: Do we know the code?
13 D GWENDOLYN: We know a code.
14 D OSKAR: Is that the same as knowing it?
15 D GWENDOLYN: Only if I am right.
16 A ¶ Tim lowers his voice.
17 D TIM (to Noor): How long until the shift change?
18 D NOOR: Eleven minutes.
19 D TIM: Eleven minutes. In a refrigerator. With roses.
20 D NOOR: They're ranunculus.
21 D TIM (to himself): Of course they are.
22 A ¶ Gwendolyn removes one glove, finger by finger.
23 A Enters six digits.
24 A The keypad blinks red.
25 D OSKAR: That's one.
26 D GWENDOLYN: I can count, young man.
27 D NOOR: What did you try?
28 D GWENDOLYN: The florist's birthday.
29 D TIM: That's me. I don't have a birthday.
30 D GWENDOLYN: Nobody believes that.
31 A ¶ She tries again.
32 A Red.
33 D OSKAR (whispering): Two.
34 D NOOR: Everyone stay calm. Gwendolyn, one more, and then we walk out as if nothing happened.
35 D GWENDOLYN: We are not walking out.
36 A ¶ She turns, takes the flower box from Oskar, and opens the lid.
37 A Inside, a small brass cylinder on a stand.
38 D TIM: Is that what I think it is?
39 D GWENDOLYN: It is a very polite drill.
40 D OSKAR: That was always the plan?
41 D GWENDOLYN: The code was a courtesy.
42 A ¶ She sets the cylinder against the lock.
43 A A low whir fills the cold room.
44 A Frost trembles on the petals.
45 D NOOR: Nine minutes.
46 D GWENDOLYN: Plenty.

### SCENE s01571 | INT. LIGHTHOUSE KEEPER'S KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): HESTER VOSS, LAURENTIU PAVEL, BRIDGET MACALLISTER, OLD TOMAS, YUKI HARADA
1 A ¶ A squat stone room at the foot of the tower, where the wind finds every crack and hums through it like a held note.
2 A A kettle ticks on the iron stove.
3 A Rain slides down the single porthole window in slow, deliberate lines.
4 A ¶ Around a scarred table sit five people, none of whom wanted to be here.
5 A ¶ HESTER VOSS (60s, the keeper, a face weathered to driftwood) watches her guests over the rim of a chipped mug.
6 A ¶ DR. LAURENTIU PAVEL (40s, rumpled tweed, a physician's patient stillness) turns his hat in his hands.
7 A ¶ BRIDGET MACALLISTER (30s, sharp-eyed, a ferry clerk's ink on her cuffs) taps a pencil against a ledger.
8 A ¶ OLD TOMAS (70s, a retired fisherman, hands like knotted rope) stares at the stove.
9 A ¶ YUKI HARADA (20s, damp from the crossing, a satchel clutched to her chest) sits closest to the door.
10 D HESTER: The lamp went dark at nine. Somebody put it out.
11 D PAVEL: The storm could have done it.
12 D HESTER: The storm doesn't carry a key.
13 A ¶ Bridget stops tapping.
14 A Tomas looks up from the stove.
15 D BRIDGET: Only you have a key, Hester.
16 D HESTER: And Dr. Pavel borrowed it Tuesday. For his patient up the tower.
17 D PAVEL: I returned it Wednesday.
18 A ¶ Yuki's satchel creaks as she shifts.
19 D YUKI: Why is everyone looking at me?
20 D TOMAS (muttering): Because she came on the last boat, and the last boat is the one that always brings trouble.
21 A ¶ Hester sets down her mug.
22 A She and Bridget lock eyes across the table.
23 A Bridget stands and Hester stands with her, chairs scraping stone.
24 D BRIDGET: She kept the ledger. She knew what the ferry carried.
25 D HESTER: She knew what you let it carry.
26 A ¶ Pavel rises between them.
27 A The wind howls.
28 A The porthole rattles in its frame.
29 A ¶ Above them, from the black of the tower stair, a slow, heavy footstep.
30 A ¶ Then another.

### SCENE s02342 | INT. MADAME ROUSSEL'S SALON - PARIS - EVENING (1791)
Detected names (may be incomplete or contain aliases): MADAME ROUSSEL, MONSIEUR ROUSSEL, LOUISE, ANTOINE, ABBÉ FOURNIER, CAPTAIN DUVALIER
1 A ¶ Candles in silver sconces.
2 A Gilt chairs.
3 A A harpsichord with its lid closed.
4 A Six guests sit around a tea table, porcelain cups trembling on saucers, as the window shows a red dusk beyond the curtains.
5 A ¶ MADAME ROUSSEL, 50s, presides in powdered hair.
6 A Her husband, MONSIEUR ROUSSEL, 60s, studies the sugar tongs.
7 A Their niece, LOUISE, 18, watches the window.
8 A A young poet, ANTOINE, 20s, fiddles with a cravat pin.
9 A A priest, ABBÉ FOURNIER, 60s, stirs his tea long past need.
10 A An officer, CAPTAIN DUVALIER, 30s, sits stiffly, hand on his sword.
11 D MADAME ROUSSEL: More sugar, Abbé?
12 D ABBÉ FOURNIER: No, Madame, I—
13 D LOUISE: Did you hear that?
14 D ANTOINE: It's only the carriage.
15 D MONSIEUR ROUSSEL: At this hour there are no carriages.
16 D CAPTAIN DUVALIER (rising): I will see.
17 D MADAME ROUSSEL: Sit down, Captain.
18 D ABBÉ FOURNIER: Child, it is nothing.
19 D LOUISE: It is a drum.
20 A ¶ Silence.
21 A The tea steams.
22 A Far below, a drumbeat rolls through the street.
23 A Then, much closer, a fist on the front door.
24 A Madame Roussel pours another cup with perfect, trembling grace.

### SCENE s01637 | EXT. STALLED CABLE CAR OVER A GORGE - DAY
Detected names (may be incomplete or contain aliases): JUNIPER, BASHIR
1 A ¶ Wind.
2 A A steel box swaying under a single cable.
3 A Far below, a river like a thread.
4 A ¶ JUNIPER, 30s, hiking boots, a torn pack, sits wedged against the door.
5 A She stares at the hatch in the ceiling.
6 A Her knuckles are white.
7 D JUNIPER (to the empty car): Okay. Okay. Everyone stay calm.
8 A ¶ No one answers.
9 A The car creaks.
10 D JUNIPER [CONT'D] (to herself): You are not stuck. You are paused.
11 A ¶ She reaches into her pack.
12 A Pulls a radio.
13 A Presses the button.
14 A Static.
15 D JUNIPER [CONT'D] (into radio): Base, this is car nine. Anyone?
16 A ¶ Static.
17 A She tries again.
18 A And again.
19 A ¶ A bolt shears off somewhere above.
20 A Metal rings.
21 A The car lurches six inches.
22 A Juniper screams, clamps both hands on the rail.
23 D JUNIPER [CONT'D] (to the car): No. No no no.
24 A ¶ She closes her eyes.
25 A Breathes.
26 A In.
27 A Out.
28 A ¶ She opens the hatch release.
29 A Pushes.
30 A Nothing.
31 A Pushes again.
32 A The latch squeals.
33 A ¶ A shadow falls across the hatch.
34 A ¶ BASHIR, 30s, in a climbing harness and a bright orange helmet, drops through the opening on a rope, boots first.
35 A He lands, steadies the car with one knee, and clips a carabiner to her pack.
36 D BASHIR: Juniper?
37 D JUNIPER: Who are you?
38 D BASHIR: Rescue. They said you were alone.
39 D JUNIPER: I was talking to the car.
40 D BASHIR: How's the car?
41 D JUNIPER (laughs, shaky): Needy.
42 A ¶ He tightens the straps across her chest, one at a time, steady.
43 D BASHIR: I'm going to lift you through the hatch. You look up, not down.
44 D JUNIPER: Up. Not down.
45 D BASHIR: Good.
46 A ¶ He lifts.
47 A She rises into daylight, boots dangling.
48 D JUNIPER (from above): I can see the sun!
49 D BASHIR: Told you.
50 A ¶ The car groans.
51 A He follows, last out.
52 A The cable hums.
