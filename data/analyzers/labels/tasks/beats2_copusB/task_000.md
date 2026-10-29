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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_copusB/group_09000.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s05066 | INT. MARRIOTT SUITES - 4TH FLOOR CORRIDOR - NIGHT
Detected names (may be incomplete or contain aliases): COREY, DANI, BEX, MARCUS, LENA, GREG
1 A ¶ fluorescent light. carpet the colour of a bruise. a room service cart abandoned outside 412.
2 A COREY, DANI, BEX, MARCUS and LENA stand in a loose knot outside the conference suite, lanyards still on, name tags crooked, the team retreat is in its third hour of "synergy".
3 D COREY: ok but nobody says anything to Greg.
4 D DANI: nobody's saying anything to Greg.
5 D COREY: because last time somebody said something to Greg we all got a mindfulness seminar.
6 D BEX: i liked the mindfulness seminar.
7 D MARCUS: Bex, they made us hold hands with the interns.
8 D BEX: it was grounding. also i'm allowed to like things.
9 D LENA: Bex is allowed to like things.
10 D BEX: thank you Lena. they are the only one who gets it.
11 A ¶ ON PHONE: A message from "GREG (VP)" lights up Corey's screen. "great energy team!! back in 5 for the breakout"
12 D COREY: he said breakout. Dani. he said breakout.
13 D DANI: no. no no no. we did the breakout.
14 D MARCUS: that was the pre-breakout.
15 D LENA: what's the difference between a breakout and a pre-breakout
16 D MARCUS: the pre-breakout has snacks.
17 D BEX: i'm not going back in. i'm going to stay in the hall and become a plant.
18 D DANI: Bex you literally can't. you're presenting the deck.
19 D BEX: Dani, they, i mean i, i have never once presented the deck. you're confusing me with the other Bex.
20 D COREY: there's another Bex?
21 D BEX: no. i just wanted to see if you'd check.
22 A ¶ ON PHONE: A second message, group chat "RETREAT 2K24 (DO NOT MUTE)".
23 A Lena: "dont look but greg is at the elevator".
24 A Marcus: "he's crying???"
25 A Dani: "happy crying or layoff crying"
26 A ¶ They all turn at once.
27 A At the far end of the corridor, the elevator dings.
28 A GREG, 50s, vest, lanyard, a laminated agenda, steps out wiping his eyes with a tiny hotel napkin.
29 D LENA (whispering): Layoff crying.
30 D MARCUS: Happy crying doesn't wear a vest.
31 D COREY: Everybody act normal. Dani, normal.
32 D DANI: i'm so normal. i am the normalest.
33 D BEX (slowly raising a hand): hi Greg.
34 A ¶ Greg looks up.
35 A A beat.
36 A He sniffles.
37 D GREG: Team. Great. Love it. Love the energy.
38 A ¶ He walks past them into the suite and the door sighs shut.
39 A They stand in the corridor in silence.
40 D MARCUS: So. Breakout.
41 D COREY: Breakout.
42 A ¶ They don't move.
43 A The cart rattles faintly as the building settles.

### SCENE s05109 | INT. FOOD TRUCK - "BIG DAVE'S BAPS" - MORNING
Detected names (may be incomplete or contain aliases): MO, RECORDED VOICE
1 A ¶ A grey Tuesday, drizzle on the awning.
2 A The griddle ticks as it warms.
3 A Condensation on every surface.
4 A Somewhere outside, a gull has opinions.
5 A ¶ MO, 40s, in a stained apron and a flat cap, cracks eggs one-handed, humming something tuneless.
6 A The queue outside, five or six commuters under umbrellas, shuffles forward.
7 A ¶ His mobile buzzes on the counter.
8 A He wipes his hand on his apron and answers on speaker.
9 D MO: Morning. Bap's Place. Go on.
10 D RECORDED VOICE [V.O.]: This is an automated message from Harbour Borough Council Environmental Health. Your inspection for today has been brought forward. An officer will arrive at your location in approximately two minutes.
11 A ¶ Mo stares at the phone.
12 A A pause.
13 A The kettle, left to its own devices, begins to whistle.
14 D MO: Right. Lovely. Marvellous.
15 A ¶ He turns the griddle off, then on, then off again.
16 A He sweeps a tray of something suspiciously orange into the bin and hides the bin behind the fridge.
17 A Through the hatch, a man in a hi-vis jacket with a clipboard is crossing the car park, and the queue sees him too.
18 A ¶ The queue scatters.
19 A Mo and the kettle both freeze.
20 A Rain.
21 A A single gull lands on the awning.
22 D MO [CONT'D] (quietly, to himself): Not ideal.

### SCENE s05060 | INT. RIDESHARE CAR - NIGHT
Detected names (may be incomplete or contain aliases): THE WOMAN, MO, TAMSIN
1 A ¶ The Corolla smells of pine air freshener and old fries.
2 A The dashboard clock says 2:04 and the wipers drag across a windshield that is barely wet, a drizzle that cant decide to become rain.
3 A Mo has been driving eleven hours.
4 A He keeps the radio low, some call-in show about gardening, because silence in this car has a way of getting loud.
5 A ¶ The back door opens.
6 A A woman folds herself into the seat behind him with a duffel bag held against her chest like something that might be taken from her.
7 A She does not say hello.
8 A She is maybe forty, her coat is too light for the season, and there is a smear of dried mascara she hasnt noticed or has stopped caring about.
9 D THE WOMAN: Fourteen Alder Court.
10 D MO: That's what the app says. You're, uh, Rhea?
11 D THE WOMAN: Whatever it says.
12 A ¶ He checks the mirror.
13 A She is looking out of the window at nothing, at the shuttered laundromat and the one bright gas station, and he recognises the look, he has seen it on fathers outside delivery rooms and on men outside courtrooms.
14 A It is the look of someone rehearsing.
15 A ¶ He pulls out.
16 A The gardening show talks about slugs.
17 D MO: Long night?
18 D THE WOMAN: Don't do that.
19 D MO: Do what?
20 D THE WOMAN: The thing where you're nice so I'll talk. I'm paying for a ride. Not a conversation.
21 A ¶ He lets that sit.
22 A In the mirror her jaw works.
23 A She unzips the duffel an inch, looks inside, zips it again.
24 A It is a small movement and he files it away the way he files away everything, the plates that linger behind him, the bars that empty out at the wrong time.
25 A Twelve years of this has made him a reluctant expert in other peoples bad nights.
26 D MO: Okay. Radio's yours if you want it.
27 A ¶ She doesn't want it.
28 A The car rolls under a yellow light that blinks and blinks for no one.
29 D THE WOMAN: Is it far? From here.
30 D MO: Nine minutes. Maybe ten.
31 D THE WOMAN: Can you make it twelve.
32 A ¶ He glances back.
33 A She holds his eyes in the mirror for the first time and there is something so naked in it that he looks away first.
34 D MO: I can drive slow.
35 D THE WOMAN: Thank you.
36 A ¶ He takes the long way along the river road.
37 A Black water to the left, the shapes of warehouses to the right.
38 A She counts something under her breath, streetlights maybe, or the days.
39 A He cannot tell.
40 D MO: My daughter's about your age. Well. Younger. Twenty-six.
41 D THE WOMAN: I said not a conversation.
42 D MO: You did. Sorry.
43 D THE WOMAN: Does she call you?
44 A ¶ He doesnt answer right away.
45 A His thumb taps the wheel.
46 D MO: Sundays. Mostly.
47 D THE WOMAN: Mostly.
48 D MO: Mostly.
49 A ¶ She nods slowly, as if he has confirmed a theory.
50 A Then her phone lights up in her lap and she flinches like it burned her.
51 A She turns it face down.
52 A It lights up again through her fingers, a pale glow around the edges of her hand, and again, and she presses her whole palm over it.
53 D MO [CONT'D]: You can pick up. I don't mind.
54 D THE WOMAN: It's my brother.
55 D MO: Bad news kind of brother?
56 D THE WOMAN: The kind that's right.
57 A ¶ That lands somewhere in him.
58 A He slows for no reason at an empty crosswalk.
59 D THE WOMAN [CONT'D]: He said don't come. He said she wouldn't want it. Our mother. That after nine years she's not going to want me standing in her hallway at two in the morning with a bag.
60 D MO: Is that what's in the bag?
61 D THE WOMAN: Her things. What I took. I took a lot.
62 A ¶ He nods like he understands, and it surprises him to find that he does, a little, that there is a version of him in a different car on a different night carrying a different bag up a different driveway.
63 A ¶ The phone buzzes again.
64 A She finally turns it over and reads and her face does something complicated.
65 D THE WOMAN [CONT'D]: He says the porch light's on.
66 D MO: Is that good?
67 D THE WOMAN: She leaves it on every night. He says she always has. Since I left.
68 A ¶ She laughs, one cracked note, and then she is crying, quietly and efficiently, the way people cry who have practiced it alone in cars.
69 A He keeps his eyes on the road.
70 A He reaches across and pulls a napkin from the glovebox without looking and holds it back between the seats.
71 A She takes it.
72 D THE WOMAN [CONT'D]: Rhea's not my name. It's my sisters. I use hers on the app.
73 D MO: Okay.
74 D THE WOMAN: It's Tamsin. I'm Tamsin.
75 D MO: I'm Mo.
76 D TAMSIN: I know. It says on the app. Your picture's older than you.
77 D MO: It's from a better year.
78 A ¶ She almost smiles.
79 A The river road bends away from the water and the houses start, porch after porch, dark windows and sleeping cars.
80 A Alder Court is two turns ahead and they both know it.
81 A He takes the first turn very slowly.
82 D TAMSIN: What if I get out and I can't walk to the door.
83 D MO: Then you sit in the car a while. The meter's not running. I'll say it's broke.
84 D TAMSIN: Is it broke?
85 D MO: It's whatever you need it to be.
86 A ¶ He turns onto Alder Court.
87 A Number fourteen is a narrow house with green shutters and, over the door, a single yellow bulb, burning, with moths turning around it like slow thoughts.
88 A He stops the car a little short of it and puts it in park.
89 A The engine ticks.
90 A The gardening man says goodnight.
91 A ¶ She does not move.
92 A He does not make her.
93 A Her hand finds the door handle and rests there, and for a long time that is all that happens in the car, two people and a yellow light, until upstairs in the house a curtain shifts.
94 D TAMSIN: Oh god. She's up.
95 D MO: Maybe she never went to bed.
96 A ¶ Tamsin picks up the duffel.
97 A Her hands are shaking so badly the zipper rattles.
98 A She opens the door and the cold comes in and the drizzle, finally, begins to be rain.
99 D TAMSIN: Wait here? Just till I'm inside.
100 D MO: I'll wait till the light goes off. Or you tell me to go.
101 A ¶ She steps out.
102 A She looks at the house.
103 A Then she leans back down to the window, rain on her face, and for a second she looks about twenty, a girl in a doorway of her own making.
104 D TAMSIN: Five stars.
105 D MO: Go on.
106 A ¶ She goes up the path.
107 A The front door opens before she reaches it and a small gray figure stands in the yellow light with one hand over her mouth, and Mo, who has seen a lot of doors, looks away to give them the dignity of it, and turns the radio off.

### SCENE s05126 | EXT. THE MARGARET ANN - NORTH SEA - DAY
Detected names (may be incomplete or contain aliases): SAL, JEN, MO, RO, BIG DAVE
1 A ¶ Grey water.
2 A Grey sky.
3 A Gulls.
4 A ¶ A restored 1890s sailing smack, brown sails patched, bobbing hard.
5 A The crew wear wool jerseys and oilskins of the period, a living-history charter for tourists.
6 A ¶ SAL, 60, skipper, white beard, stands at the tiller.
7 A Weather in every wrinkle.
8 A ¶ JEN, 25, pulls a net hand over hand.
9 A MO, 19, coils rope badly.
10 A ¶ Between them, near the mast, a WOMAN sits on an upturned crate.
11 A Mid-30s.
12 A A city coat, no oilskin.
13 A Dry shoes.
14 A She watches the horizon like she's counting something.
15 A ¶ Spray.
16 D JEN (to Mo): Not like that. Over, under.
17 D MO: That's what I did.
18 D JEN: It's not.
19 A ¶ Mo tries again.
20 A Worse.
21 D SAL: Leave him, Jen. Sea'll teach him.
22 D JEN: Sea'll drown him.
23 D SAL: Same lesson.
24 A ¶ The Woman almost smiles.
25 A ¶ Wind.
26 A Canvas SNAPS.
27 D SAL [CONT'D] (to the Woman): You'll want to move, miss. Boom's coming round.
28 D THE WOMAN: I'm fine.
29 D SAL: You're not.
30 A ¶ She doesn't move.
31 A ¶ Silence.
32 A ¶ A gull.
33 A Then another.
34 A ¶ The boom swings.
35 A Fast.
36 A ¶ Jen dives.
37 A Catches the Woman by the collar.
38 A They roll across the deck.
39 A ¶ The boom sails over, an inch above.
40 A ¶ Quiet.
41 A Everyone breathing.
42 D JEN (shaking): Are you out of your mind?
43 D THE WOMAN (flat): Probably.
44 A ¶ Sal lashes the boom.
45 A Hard hands, hard face.
46 D SAL: What's your name, miss?
47 D THE WOMAN: Ro.
48 D SAL: Rosalind?
49 D RO: Just Ro.
50 D MO (staring): You weren't scared.
51 D RO: I was.
52 A ¶ Another engine, from behind the fog.
53 A ¶ Out of the mist comes a harbour patrol launch.
54 A At the rail, BIG DAVE, 50s, enormous in a yellow slicker, peaked cap, a clipboard in a fist like a shovel.
55 D BIG DAVE (through a megaphone): Margaret Ann! Permit check!
56 D SAL (muttering): Of course.
57 A ¶ Big Dave looks across the water.
58 A Finds Ro.
59 A His expression softens.
60 D BIG DAVE (not on the megaphone): Rosalind. Your mother's been calling the harbour all morning.
61 A ¶ Ro closes her eyes.
62 D JEN (to Ro, quietly): Your mother?
63 D RO: I wanted to see where she grew up.
64 A ¶ Mo goes back to his rope.
65 A Over, under.
66 A Right this time.
67 A ¶ Rain begins.

### SCENE s05012 | EXT. MOONDUST TACOS FOOD TRUCK - NIGHT
Detected names (may be incomplete or contain aliases): ZIP, LUCY, BIG MO, GRANDMA TESS
1 A ¶ A silver food truck sits on a gravel lot under three moons.
2 A Steam curls from the grill, and a tiny robot named ZIP wobbles along the counter on caster wheels, juggling a lime, a squeeze bottle and a napkin while LUCY the cook flips tortillas without looking and BIG MO, her towering brother, lifts a crate of glowing peppers over a sleepy dog that snores by the generator.
3 A Two teenagers in shiny silver jackets lean on the window and argue about which moon is the best moon.
4 D LUCY (to everyone): Okay team, last orders, then we blast off for the next planet!
5 D ZIP (muttering to self): Lime, lime, where is the lime... oh. I am holding the lime.
6 D BIG MO (to Lucy): Boss, the engine is making that noise again. The sad one.
7 D LUCY (shrugging): Then sing it a happy song.
8 A ¶ A phone buzzes on the counter.
9 A Lucy taps it, and a hologram of GRANDMA TESS flickers above the grill.
10 D GRANDMA TESS [V.O.]: Lucy, sweetheart, are you eating? You sound thin.
11 D LUCY (to the phone): Grandma, you can't hear thin.
12 D GRANDMA TESS [V.O.]: I can hear everything. Tell Mo to stop lifting with his back.
13 D BIG MO (calling out): I heard that!
14 D ZIP (to the dog, whispering): Everybody is so loud tonight.
15 A ¶ The dog opens one eye, sighs, and goes back to sleep.

### SCENE s05177 | INT. MERCY GENERAL - NIGHT SHIFT NURSES' STATION - NIGHT
Detected names (may be incomplete or contain aliases): KOFI, TARA, PIP, NAKAMURA, THE WOMAN, SCREEN
1 A ¶ Open-plan.
2 A Too many monitors.
3 A A drooping fern and a laminated sign: PLEASE DON'T MICROWAVE FISH.
4 A ¶ KOFI (30s, scrubs, headset) taps at a laptop with a video call open.
5 A TARA (20s, lanyard bursting with pins) wheels over on a stool and PIP (intern, 22) hovers behind her with a clipboard held like a shield, while a janitor mops slowly in the background and a drip pole in the corner, for no reason, slowly rotates by itself.
6 A ¶ On Kofi's screen: a Slack channel, #night-shift-chaos.
7 A ¶ ON SCREEN: ORRIN: has anyone seen the thing in room 6
8 A ¶ ON SCREEN: ORRIN: the glowing thing
9 D KOFI: Orrin's on his break and he's already losing it.
10 D TARA: Orrin's always losing it. Last week he said the fridge was talking.
11 D KOFI: The fridge was talking. That was the fridge's night-shift voice.
12 A ¶ On the laptop, DR. NAKAMURA's face fills a Zoom window, pixelated, ceiling fan behind him.
13 D DR. NAKAMURA [V.O.] (over video): Team, can you hear me? Admissions says there's a patient in six who isn't on the board.
14 D PIP: Is that bad?
15 D DR. NAKAMURA [V.O.]: It's a patient who isn't on the board.
16 D TARA: So, yes.
17 A ¶ THE WOMAN (60s, nightgown, barefoot, faintly luminous) steps out of the corridor and stands at the end of the desk, perfectly calm.
18 D PIP: Ma'am? Are you looking for someone?
19 D THE WOMAN: Good evening. I'm told this is where the others wait.
20 A ¶ Kofi shuts the laptop lid, hard.
21 A Dr. Nakamura's voice is cut off mid-word.
22 D KOFI: Others?
23 D THE WOMAN: My name is Elspeth. I was admitted four hundred years ago. Is there still a form?
24 A ¶ Silence.
25 A The mop stops.
26 A The drip pole stops.
27 A ¶ ON SCREEN (Kofi's phone, face up): ORRIN: told u
28 D TARA (very quiet): Kofi, get the clipboard.
29 A ¶ ELSPETH smiles, patient, and holds out her hand.

### SCENE s05163 | EXT. ABERNETHY GREEN - REENACTMENT CAMPGROUND - DAY
Detected names (may be incomplete or contain aliases): PHILIPPA, THADDEUS, WICK
1 A ¶ A muddy field of canvas tents.
2 A Smoke from a cookfire.
3 A Thaddeus Pell, 40s, in a full 1776 militia coat and tricorn, sits on a barrel holding a laptop wrapped in a burlap sack.
4 A He is very aware of the modern world and very hopeful nobody sees it.
5 A ¶ Philippa Voight, 30s, in a plain linen gown and apron, walks up carrying a wooden bucket.
6 A She stops.
7 A Squints.
8 D PHILIPPA: Are you ColonelHuzzah88?
9 D THADDEUS: Are you Mistress_Quill?
10 D PHILIPPA: Yes, hi. Thaddeus. Hi.
11 D THADDEUS: Philippa! In the flesh! Well, in the flax.
12 A ¶ She sets down the bucket.
13 A They shake hands, awkwardly, formally, as period requires.
14 A ¶ ON LAPTOP SCREEN: a Slack channel titled #the-1776-crew.
15 A The newest message reads:
16 A ¶ ON SCREEN: wick_the_unbothered: are u 2 there yet or what
17 D THADDEUS [CONT'D]: Wick's online. They said they'd join by video, they couldn't get off work.
18 A ¶ Thaddeus unwraps the burlap and turns the laptop so both can see.
19 A A video window opens: a cluttered cubicle, a lanyard, a fluorescent light.
20 A WICK, 20s, wears a headset and a cheap tricorn made of black construction paper.
21 D WICK [V.O.] (through laptop speakers): Oh my god, you're real. Hi! Is that the real mud?
22 D PHILIPPA: It's the real mud.
23 D WICK [V.O.]: I'm so sorry I'm not there, my manager is literally behind me, they keep walking past. One sec.
24 A ¶ Wick quickly minimizes a spreadsheet and sits very straight.
25 D THADDEUS (to Wick): You look very serious.
26 D WICK [V.O.]: I'm in a meeting. Technically. I'm muted, I think? Am I muted?
27 D PHILIPPA: No.
28 D WICK [V.O.]: Oh no. (muttering) Okay. Okay. It's fine.
29 A ¶ Philippa sits on the grass, tucks her skirts.
30 A Thaddeus offers her a hard biscuit from a leather pouch.
31 D PHILIPPA: Is it period?
32 D THADDEUS: It's from Costco. But I dipped it in tea so it looks old.
33 D PHILIPPA: That's the most you thing I've ever heard and I've known you for two years in text.
34 D WICK [V.O.]: Aw, you guys are cute. This is cute. I'm gonna cry at my desk.
35 D THADDEUS: Please don't cry at your desk, Wick.
36 D WICK [V.O.]: I use they/them, Thaddeus, not "cry at your desk," come on.
37 A ¶ A beat.
38 A Then all three laugh.
39 A A distant musket goes off POP over the tents.
40 A Philippa bites the biscuit and winces.
41 D PHILIPPA: Okay. That's definitely Costco.

### SCENE s05105 | INT. HOLLOWAY FERTILITY CLINIC - CONSULT ROOM - DAY
Detected names (may be incomplete or contain aliases): DR. HAQ, DANA, WES
1 A ¶ ON CAMERA: handheld, a crew of one.
2 A A consult room, beige, a poster of a cross-section nobody asked for.
3 A Dana, 30s, sits on the exam bench with a paper gown over her jeans, thumbs hovering over her phone.
4 A Dr. Imran Haq, 50s, tablet in hand, takes the stool in front of her.
5 D DR. HAQ: Dana, before we start, you're fine with the camera?
6 D DANA: Wes thinks it's a bad idea. Wes thinks everything is a bad idea this month.
7 D DR. HAQ: Understood. We can stop at any point.
8 A ¶ Dana's phone buzzes.
9 A We see the screen.
10 A ¶ ON PHONE: where r u
11 A ¶ ON PHONE: is it done yet
12 A ¶ ON PHONE: call me
13 D DANA: He's in the parking lot. He wouldn't come in.
14 D DR. HAQ: Would you like to call him?
15 D DANA (beat): Put him on speaker. Maybe he'll listen to you.
16 A ¶ She dials.
17 A It rings twice.
18 D WES [V.O.]: Hey. Hey. Is the doctor there? Can he hear me?
19 D DR. HAQ: I can hear you, Wes. I'm going to share the results with Dana, and I'd like you to hear them too.
20 D WES [V.O.]: Fine. Just say it fast.
21 D DR. HAQ: The third cycle did not take. I'm sorry.
22 D DANA: It's fine.
23 D WES [V.O.]: It's not fine, Dana.
24 D DANA (smiling, brittle): It's fine, Wes.
25 A ¶ Dr. Haq glances at the camera, then away.
26 D DR. HAQ: There is a fourth option. A different protocol. But you should know the odds are lower, and the cost is not small, and I would never push you either way.
27 D DANA: You're not pushing.
28 D WES [V.O.]: You are pushing, though, kind of, I mean the whole place is a push.
29 D DANA: Wes, I'm going to hang up now.
30 D DR. HAQ: Dana, take a moment.
31 D DANA: I don't need a moment. I need him to stop talking.
32 D WES [V.O.]: I'm just saying we already spent
33 D DANA: I know what we spent.
34 A ¶ She ends the call.
35 A Silence.
36 A The poster hums its bright pink hum.
37 A Dana looks into the lens for the first time.
38 D DANA [CONT'D]: You can put that in the film.
39 D DR. HAQ: Let's talk about the fourth option.
40 D DANA: Okay.
41 A ¶ Her phone buzzes once more.
42 A She does not look.
43 A A new message sits on the dark screen.
44 A ¶ ON PHONE: sorry. im coming in

### SCENE s05129 | INT. GOLDEN LOTUS NAIL SALON - DAY
Detected names (may be incomplete or contain aliases): CUSTOMERS, KID, MARISOL, CORINNE
1 A ¶ SUPER: "CHICAGO.
2 A 2:14 PM."
3 A ¶ Pastel walls.
4 A Acetone in the air.
5 A A wall of polish bottles in every colour.
6 A A TV in the corner plays a muted boxing replay.
7 A ¶ Two CUSTOMERS in the next chairs chat in Vietnamese.
8 A A KID in a school uniform does homework by the register.
9 A ¶ THE WOMAN, 40s, sunglasses, tailored coat, sits at the manicure station.
10 A Her phone lies face down.
11 A Across the table, MARISOL, 30s, white smock, files her nails.
12 A ¶ The file SCRAPES.
13 A A drier HUMS.
14 D THE WOMAN: You do a lovely job.
15 D MARISOL (not looking up): Thank you.
16 D THE WOMAN: I mean it. Steady hands.
17 D MARISOL (smiling): Practice.
18 A ¶ She dips a brush.
19 A Paints a stripe of red.
20 A ¶ INSERT - THE BOTTLE
21 A ¶ Label: "Knockout."
22 A ¶ BACK TO SCENE
23 D THE WOMAN: Funny name.
24 D MARISOL: It sells.
25 A ¶ The Woman glances at the TV.
26 A The replay shows a boxer going down in the ninth.
27 D THE WOMAN: You watch the fights?
28 D MARISOL: My father did.
29 D THE WOMAN (carefully): Did?
30 D MARISOL: Every Saturday. He had a favourite. Danny Kessler.
31 A ¶ The Woman goes still.
32 D THE WOMAN: Kessler retired.
33 D MARISOL: He was told to.
34 A ¶ The brush keeps moving.
35 A Steady.
36 A Steady.
37 D THE WOMAN: I'm not sure what you mean.
38 D MARISOL (mild): My father bet the house on Danny. Round nine. Everybody knew it was fixed except him. He found out when the referee stopped it too early. A small man, tan suit, glasses. He looked at the floor so nobody could see his eyes.
39 A ¶ (beat)
40 A ¶ I was twelve.
41 A I remember my father holding the TV remote like it was a gun.
42 A I remember him saying one word, over and over.
43 A "Why."
44 A And then he stopped saying it.
45 A ¶ The drier HUMS.
46 A The Kid turns a page.
47 D MARISOL [CONT'D]: Years later I found the referee. Gambling debts. He'd been told to stop the fight, or lose his daughter's school fees. The man in the tan suit was a coward. But the man who told him? He was the coward's boss.
48 A ¶ (beat)
49 A ¶ That boss has a very good manicurist.
50 A She says he comes every second Tuesday.
51 D THE WOMAN (very still): Does she.
52 D MARISOL: She does.
53 A ¶ The Woman's hand, flat on the table, does not move.
54 A ¶ A DOOR BELL RINGS.
55 A Two men in dark jackets enter.
56 A They look around, then settle near the entrance.
57 A ¶ The Woman watches them in the mirror.
58 D THE WOMAN: You're quite sure of this.
59 D MARISOL: I have his receipts. Every one.
60 D THE WOMAN: You're not a manicurist.
61 D MARISOL: I'm a very good manicurist.
62 A ¶ She caps the bottle.
63 A CLICK.
64 D MARISOL [CONT'D]: My name is Marisol Kessler.
65 A ¶ The Woman takes off her sunglasses.
66 A Her eyes are old and tired.
67 D THE WOMAN: Danny's daughter.
68 D MARISOL: Yes.
69 D THE WOMAN: Then you know my name.
70 D MARISOL: Corinne Vale.
71 D CORINNE (a breath): He deserved a better life than he got.
72 D MARISOL: So did my father.
73 A ¶ Corinne looks at the red nails, her hands under the lamp.
74 D CORINNE: The men at the door. They're not mine.
75 D MARISOL: No.
76 D CORINNE: Yours?
77 A ¶ Marisol nods slightly.
78 D CORINNE [CONT'D] (a faint laugh): I came here for a manicure.
79 D MARISOL: And you got one.
80 A ¶ The TV roars.
81 A A crowd chanting a name that isn't Danny's.
82 A ¶ Corinne's phone BUZZES on the table.
83 A She doesn't touch it.
84 A ¶ It stops.
85 A ¶ The Kid looks up from his homework.

### SCENE s05180 | INT. HARBORVIEW VETERINARY CLINIC - NIGHT
Detected names (may be incomplete or contain aliases): RUIZ, THE SQUAD, OKAFOR
1 D RUIZ [V.O.]: Every war leaves a trail of paperwork. Nobody tells you the paperwork is the part that gets people killed.
2 A ¶ Fluorescent tubes buzz over a waiting room that smells of bleach and wet dog, and Detective Mara Ruiz, fifties, rain on her shoulders, stands at the reception desk with a manila folder pressed to her chest while Dr. Femi Okafor, forties, blood on his scrubs, pulls a shutter down over the front window, and behind them four uniformed soldiers in damp fatigues fan out through the kennel hall, boots squeaking on the linoleum, rifles low, checking cages full of sleeping beagles and one furious cat.
3 D RUIZ [V.O.]: Three tours, one medal, and now a vet clinic at two in the morning. That's how it ends for the kind of man we came to find.
4 D THE SQUAD: Hall's clear!
5 D RUIZ: Dr. Okafor, I'm going to ask you once.
6 D OKAFOR: You have been asking since you walked in.
7 D RUIZ: Where is Sergeant Hale?
8 D OKAFOR: Sedated. Surgery two. He walked in with a shrapnel wound and a dog that was bleeding worse than he was.
9 D RUIZ: A dog.
10 D OKAFOR: A Belgian Malinois. Military issue, tag filed off. I stitched the dog first. The man made me.
11 D RUIZ: And you didn't think to call anyone.
12 D OKAFOR: I thought a dying animal outranked a phone call. Was I wrong?
13 D RUIZ: You're harboring a deserter who is wanted in connection with eleven deaths.
14 D OKAFOR: I'm harboring a patient. He has a pulse. That's all my license asks me to check.
15 D RUIZ: Your license is going to be the least of your problems.
16 D OKAFOR: Then arrest me after he wakes up. I'd like him to wake up.
17 D RUIZ: You think he's innocent.
18 D OKAFOR: I think he talks in his sleep. Under anesthesia he kept saying the same name, over and over, and it wasn't a woman's name and it wasn't a place.
19 D RUIZ: Whose name?
20 D OKAFOR: Yours.
21 D RUIZ [V.O.]: There it was. Twenty years of keeping my past in a locked drawer, and a veterinarian hands me the key.
22 D RUIZ: He's lying to you.
23 D OKAFOR: Sedatives don't let you lie, Detective. That's rather the point of them.
24 D THE SQUAD: Detective, we have movement in surgery two!
25 D RUIZ: Nobody touches that door until I say.
26 D OKAFOR: He'll tear his sutures if he stands.
27 D RUIZ: Then he should have thought about that before he ran.
28 D OKAFOR: Ran from what? Tell me that much. Tell me what a man like that runs from.
29 D RUIZ: From me.
30 A ¶ Silence.
31 A The cat hisses.
32 A Somewhere in the back, a steel tray CLATTERS to the floor, and Ruiz, hand on her holster, shoulders through the swinging doors as the Squad closes in behind her, lamps swinging across the kennels, Okafor following with his palms raised, and on the operating table the blanket lies empty, the window above it open to the rain, the Malinois sitting upright beneath it, waiting, staring at her as if it had been told she would come.
33 D RUIZ [V.O.]: He didn't run from me. He ran to me. The dog was the message. The dog was always the message.
34 D OKAFOR: What does that mean?
35 D RUIZ: It means we are standing in exactly the place he wanted us to be.
36 D THE SQUAD: Contact! Front entrance!
37 A ¶ The lights die.
38 A Rain.
39 A Boots.
40 A Dark.

### SCENE s05068_0 | INT. COUNTY PAROLE OFFICE - WAITING AREA - MORNING
Detected names (may be incomplete or contain aliases): WORLD'S OKAYEST GRANDMA, THE MAN, DEB
1 A ¶ Fluorescent lights.
2 A A row of molded chairs.
3 A A ficus that died years ago and has not been told.
4 A ¶ Deb, 60s, reception, bifocals, a mug that says WORLD'S OKAYEST GRANDMA, taps at a keyboard behind scratched plexiglass.
5 A She doesn't look up when the door opens.
6 A ¶ A man comes in.
7 A He is tall, late forties, a gray work jacket zipped to the throat, a folder pressed to his ribs like a shield.
8 A He stands very still just inside the door, as if the room might reject him.
9 A THE MAN waits.
10 D DEB: Name?
11 D THE MAN: I have a nine o'clock.
12 D DEB: Name.
13 A ¶ He says nothing for a second.
14 A She finally looks at him.
15 D THE MAN: Is Officer Okafor in?
16 D DEB: Honey, everybody's in. It's nine in the morning. Sit.
17 A ¶ He sits.
18 A He keeps the folder on his knees.
19 A Across the room, a clock ticks, slower than a clock should.

### SCENE s05150_0 | INT. STORAGE FACILITY - OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): WOMAN, PHONE
1 A ¶ SERIES OF SHOTS:
2 A ¶ -- Rain on the corrugated roof.
3 A Orange sodium light bleeding through the blinds.
4 A ¶ -- A keypad gate.
5 A Its red light blinks, blinks, blinks.
6 A ¶ -- THE WOMAN, 30s, soaked coat, a bolt cutter bag over her shoulder, walks the long corridor of roll-up doors.
7 A Her boots squeak on the concrete.
8 A ¶ ON PHONE (TEXT FROM NELL): where r u
9 A ¶ ON PHONE (TEXT FROM NELL): mum's flat is empty u said you'd be done by 9
10 A ¶ -- The woman thumbs the screen dark.
11 A Doesnt reply.
12 A ¶ -- Fluorescent tubes flicker overhead.
13 A One dies.
14 A Another takes over.

### SCENE s05171_1 | INT. BANK - LOADING DOCK - CONTINUOUS
Detected names (may be incomplete or contain aliases): BEA, RENA
1 A ¶ Concrete.
2 A Cold.
3 A A single camera in the corner, its red light blinking.
4 A ¶ Rena looks up at it.
5 A Bea is already holding the backpack open.
6 D BEA: Don't look at it.
7 D RENA: I'm not looking at it.
8 D BEA: You're looking at it.
9 A ¶ Rena turns away.
10 A Beyond the wall, faintly, the crowd keeps chanting.
11 A Pay for it.
12 A Pay for it.

### SCENE s05064_0 | INT. HOLLOWAY VETERINARY CLINIC - WAITING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): NATE DUNN
1 A ¶ HANDHELD.
2 A A phone camera, held at arm's length, swinging.
3 A The picture is grainy, overexposed by the buzzing tube lights.
4 A A timestamp burns in the corner: 11:47 PM.
5 A ¶ NATE DUNN, 28, lanky, a beanie, a hoodie with the sleeves pushed up, holds the camera on himself, grinning too hard, a kid doing a bit he has done a hundred times for a channel with four hundred subscribers.
6 D NATE: Okay so we're live. Not live live. Recording live. If you're new, I'm Nate, and tonight we are doing what the comments asked for, which is the abandoned vet clinic on Route 9.
7 A ¶ He turns the camera.
8 A The waiting room is wide, low-ceilinged, and wrong.
9 A Plastic chairs bolted in rows.
10 A A reception desk with a dead phone and a bowl of petrified dog biscuits.
11 A On the wall, a faded poster, "Have You Hugged Your Pet Today?", a cartoon beagle smiling in a way that has gone sour.
12 D NATE [CONT'D]: So, lore. This place closed in 2009. Owner just kind of walked out one day. Left the files, left the meds, left, and this is the part I love, the animals.
13 A ¶ He laughs.
14 A It dies fast.
15 D NATE [CONT'D]: I mean not the animals. Obviously. Not the. Anyway.
16 A ¶ The camera pushes toward a hallway on the far side of the desk.
17 A At the mouth of it, a rusted gurney.
18 A Beyond that, dark.
19 A ¶ ON PHONE: A text banner drops from the top of the frame.
20 A "MO: ur not seriously there rn"
21 D NATE [CONT'D] (to the camera): That's my buddy Mo. He's scared of everything. Mo, I see you, I'm okay.
22 A ¶ He types with one thumb, camera shaking, and we see over his shoulder the reply go out: "im fine. go to bed."
23 A ¶ ON PHONE: "MO: nate. its midnight. come home."
24 A ¶ He pockets the phone.
25 A In the glass of the front door, behind him, there's a reflection of the empty lot outside, the van, the moon, and for a half second something low and pale moving past the van, something about the size of a dog.
26 A ¶ He doesn't see it.
27 A The camera does.
28 D NATE [CONT'D]: Okay! Hallway.

### SCENE s05150_3 | INT. UNIT 214 - LATER
Detected names (may be incomplete or contain aliases): PHONE, PRIYA, TOBY
1 A ¶ Boxes stacked by the door.
2 A The woman sits on the rocking horse crate, calm, scrolling.
3 A ¶ ON PHONE (TEXT FROM NELL): hello??
4 A Priya answer me
5 D PRIYA (into phone, flat): I found it, Nell. All of it.
6 A ¶ Toby leans on the doorframe, watching the rain.
7 D TOBY: You want me to turn the light back on in the hall?
8 D PRIYA: Leave it.
9 A ¶ Rain.
10 A The drip in the bucket.
11 A The mirror, quiet.
12 A ¶ SMASH CUT TO BLACK.

### SCENE s05064_2 | INT. HOLLOWAY VETERINARY CLINIC - WAITING ROOM - CONTINUOUS
Detected names (may be incomplete or contain aliases): NATE, TEENAGERS
1 A ¶ The camera whips around, a smear of light and floor and ceiling.
2 A He is running now, the image jerking with each stride, his breathing a bellows, the chairs flashing past in rows.
3 A Behind him claws skitter, closer, wet and hungry.
4 D NATE: Go go go go go
5 A ¶ He hits the front door and it doesn't open.
6 A He hits it again.
7 A He slams his shoulder into it and the glass shivers but holds, a deadbolt turned from the outside, a padlock hung on the other side by someone he never heard.
8 A ¶ Through the glass he sees the lot, the van, and two TEENAGERS in matching letterman jackets standing at the edge of the pavement with their phones raised, filming him, one laughing, one not.
9 D NATE [CONT'D]: Hey! HEY! Open the door! Please! Open the door!
10 A ¶ The laughing one waves.
11 A The other lowers his phone slowly, and his face goes slack.
12 A ¶ Behind Nate, the camera catches the reflection in the glass: the pale dog, in the center of the waiting room, standing on its hind legs.
13 D NATE [CONT'D] (barely audible): Oh no.
14 A ¶ ON PHONE: A final text drops, ignored, as the lens falls to the floor and tumbles.
15 A "MO: im coming"
16 A ¶ The picture rolls once, twice, and comes to rest at an angle, showing the ceiling tiles and one hand reaching, then a long dragging sound, then black.
17 A ¶ TIMESTAMP: 12:09 AM.
18 A The recording continues for nine more minutes with no picture.
19 A Only sound.
20 T FADE OUT.

### SCENE s05144 | INT. COUNTY PAROLE OFFICE - WAITING AREA - MORNING
Detected names (may be incomplete or contain aliases): JEN, BIG DAVE, MO
1 A ¶ Plastic chairs bolted in rows.
2 A A water cooler gurgles.
3 A Behind the glass, a clerk types, never looking up.
4 A ¶ Big Dave, 50s, broad, in a suit that fits like it was lent to him, sits with his hands folded.
5 A Beside him, Jen Park, 40s, parole officer, flips through a file with her thumb.
6 D JEN (to the room, not looking up): Everybody sign the sheet. Even if you've signed it before. Especially if you've signed it before.
7 A ¶ Two teenagers by the vending machine laugh at something on a phone.
8 A A man with a toddler on his knee shushes the child, who cries anyway.
9 D BIG DAVE (standing, to Jen): I've been out eleven months. I've been on time every Tuesday. Every Tuesday, Jen.
10 D JEN (beat): I know.
11 D BIG DAVE (quieter): Then why am I looking at a new condition on my own paper?
12 D JEN (closing the file): Dave. Sit.
13 D BIG DAVE (not sitting): I did what you said. I took the job. I stayed at Mo's place. I stayed away from the old crowd.
14 A ¶ Mo, 30s, in the next chair over with a hi-vis vest in her lap, stares at the floor.
15 D MO (muttering): Don't drag me into this.
16 D BIG DAVE (to Mo): You're the one who said they'd write the letter.
17 D MO (to nobody): I said I'd think about it.
18 D JEN (to the whole room): Folks, give us a minute. Please.
19 A ¶ The two teenagers drift off down the hall.
20 A The man with the toddler picks up the child and leaves.
21 A The clerk behind the glass finally looks up.
22 D BIG DAVE (beat): You want to tell me who made the call?
23 D JEN (firmly): No.
24 D BIG DAVE (louder): Somebody called. Somebody told you where I was on the fourteenth.
25 D JEN (rising): Dave, I can't discuss it here.
26 D BIG DAVE (lunges across the chair): Then where?
27 A ¶ Jen and Big Dave collide and both stumble into the water cooler.
28 A The jug SLOSHES and tips.
29 A Mo jumps up and the three of them freeze.
30 D MO (very quietly): It was me.
31 A ¶ Silence.
32 A The cooler glugs once, and stops.
33 D BIG DAVE (beat): Say that again.
34 D MO (to Jen): You said if I told you, he would only get a warning.
35 D JEN (to herself): God help me.
36 A ¶ Big Dave sits.
37 A Slowly, like a man lowering something heavy.
38 A The clerk behind the glass quietly turns off her screen.

### SCENE s05093 | INT. SUBBASS SOUND - STUDIO B - DAY
Detected names (may be incomplete or contain aliases): LINUS, MO, WREN, DENISE, PRIYA
1 A ¶ CLOSE ON a mixing console, faders crawling up and down by themselves.
2 A Pull back to find Mo Delgado, 30s, producer, hoodie, three coffees deep, chewing a pen cap.
3 A ¶ Through the glass, in the vocal booth, Linus Thorne, 50s, a former one-hit wonder in a leather vest, stands before a mic with his eyes closed, singing very gently about a sandwich.
4 D LINUS [V.O.] (through talkback, sincere): "Oh, ham, you were never mine..."
5 A ¶ Mo presses the talkback button.
6 D MO: That's great, Linus. Another take. Maybe less ham.
7 A ¶ Wren Okoye, 20s, the engineer, slumped at the second chair with a laptop, doesn't look up.
8 D WREN (to the room): We've done forty-one takes.
9 D MO (muttering, to himself): Forty-two, with feeling. Forty-two.
10 A ¶ Mo's phone lights up on the desk.
11 A ¶ ANGLE ON PHONE SCREEN
12 A ¶ "LABEL - DENISE".
13 A ¶ Mo answers on speaker.
14 D DENISE [V.O.]: Mo. Tell me the single is done.
15 D MO: It's, uh, ripening.
16 D DENISE [V.O.]: It's a song about lunch meat. Is it done.
17 A ¶ Wren mouths "No" at the phone.
18 A Mo waves her off.
19 D MO (to everyone, bright): Okay team! Quick huddle, we're gonna just, vibe.
20 A ¶ Priya Ramanathan, 20s, the assistant, enters with a tray of tea, nods at nobody, sets it down, and sits.
21 A ¶ WE SEE Linus through the glass, tapping the window, mouthing something.
22 A Everyone ignores him.
23 D PRIYA (to Mo only): He's asking if the lunch meat is "emotionally honest" enough.
24 D MO (to Priya): Tell him it's the most honest ham I've ever heard.
25 A ¶ BACK TO SCENE
26 D WREN (to herself, typing): I'm updating my resume.
27 D DENISE [V.O.]: I heard that.
28 A ¶ Mo sinks into his chair.
29 A Nobody speaks.
30 A The faders keep creeping.
31 A Take forty-three begins, soft and sincere and terrible.

### SCENE s05111_1 | EXT. NIGHTBIRD STUDIOS - STREET - CONTINUOUS
Detected names (may be incomplete or contain aliases): 
1 A ¶ They tumble out into the rain.
2 A ¶ Behind them, the windows blow out in a shower of light.
3 A ¶ Silence.
4 A ¶ Riley's phone BUZZES.
5 A ¶ ON PHONE: take twelve
6 A ¶ He drops it into a puddle.

### SCENE s05174 | INT. THE ROYAL OAK FUNCTION ROOM - WEDDING AFTERPARTY - NIGHT
Detected names (may be incomplete or contain aliases): MO, JEN
1 A ¶ Half-deflated balloons.
2 A A disco ball turns, one mirror missing.
3 A Somewhere a slow song limps to its end.
4 A ¶ MO (50s, lanyard still around his neck under his dicky bow) holds a plastic cup of warm prosecco and has the look of a man cornered by a sofa.
5 A JEN (40s, heels in one hand) lowers herself into the chair opposite and says nothing for a good ten seconds.
6 D JEN: Congratulations, by the way.
7 D MO: Cheers. I'm not the groom.
8 D JEN: No, but you did the seating plan.
9 D MO: Technically, I did the spreadsheet.
10 A ¶ Jen nods, slowly.
11 D JEN: You sat Big Dave next to his ex.
12 D MO: I wasn't told.
13 D JEN: You were. In a meeting. Eleven times.
14 A ¶ He opens his mouth.
15 A Closes it.
16 A Studies the carpet.
17 D MO: Right.
18 A ¶ A door SLAMS somewhere out in the car park.
19 A They both flinch.
20 D JEN: That'll be Dave.
21 D MO: Probably.
22 A ¶ Jen sets her shoes on the table.
23 A She looks at them, and then at him, and something in her shoulders gives.
24 D JEN: Honestly? It's the best wedding I've been to in years.
25 D MO: Is it?
26 D JEN: Mrs K cried at the vows. Dave cried at the buffet. Nobody's cried at work all year and I thought, there, that's a company away day.
27 A ¶ He lets out a breath.
28 A Almost a laugh.
29 D MO: I did write that in the risk assessment.
30 A ¶ His phone BUZZES on the table.
31 A He reads it.
32 A Turns it face down.
33 D JEN: Who's that?
34 D MO: HR. They want a word about Monday.
35 D JEN: Tell them it's a Saturday.
36 A ¶ He smiles.
37 A She picks up her shoes.
38 A For the first time in eleven years, they stay for the last song.

### SCENE s05058 | EXT. FISHING TRAWLER "MARGIT ANN" - DECK - DAWN
Detected names (may be incomplete or contain aliases): ANIKA, ROY, TEO
1 A ¶ Grey sea.
2 A Grey sky.
3 A Gulls wheel overhead.
4 A ¶ Two deckhands haul nets, whistling.
5 A A third coils rope and is bored out of his mind.
6 A Everything is fine.
7 A ¶ Captain Roy Dunmore, 50s, leans on the rail with a mug, watching the horizon.
8 A Beside him, Dr. Anika Rao, 30s, sits on an upturned crate, clipboard on her knee.
9 A She is the ship's medic by contract and by accident.
10 D ANIKA: Quietest trip I've had in months.
11 D ROY: Don't say that.
12 D ANIKA: Why not?
13 D ROY: You know why not.
14 A ¶ The deckhands laugh at something.
15 A A gull lands on the winch.
16 A ¶ WHAM.
17 A ¶ A net swings loose.
18 A It slams into the deckhand's back.
19 A He goes down hard.
20 A ¶ TEO, 20s, a deckhand, lies on the planks, face grey, one arm pinned.
21 D ANIKA: Don't move him!
22 D ROY: Get the line off him!
23 A ¶ The two deckhands scramble.
24 A The gulls scatter.
25 A Roy and Anika drop to their knees at the same time and almost collide.
26 D ANIKA: Teo. Teo, look at me. Can you feel your hands?
27 D TEO (strained): No.
28 D ANIKA: Okay. That's okay. Roy, I need the board and I need it flat.
29 D ROY: Board's in the wheelhouse. Two minutes.
30 D ANIKA: You don't have two minutes.
31 D ROY: Then tell me what to do.
32 D ANIKA: Hold his head. Gently. Like it's glass.
33 A ¶ Roy does.
34 A Anika's hands move fast, over the neck, the ribs, the pulse.
35 D TEO: Doc. Am I
36 D ANIKA: You're not going anywhere. I promise.
37 D ROY (low): You can't promise that.
38 D ANIKA: Watch me.
39 A ¶ This is the last time any of them will take the sea for granted.
40 A ¶ The deckhands return with the board.
41 A Together, they roll him.

### SCENE s05118_0 | INT. HAPPY PAWS VET CLINIC - NIGHT
Detected names (may be incomplete or contain aliases): AIDEN, SASHA, MARLON
1 A ¶ CLOSE ON a keypad.
2 A A gloved finger types four numbers.
3 A A light turns green.
4 A CLICK.
5 A ¶ The front door swings open.
6 A The clinic is dark and empty, except for the soft glow of a fish tank and a sleeping beagle in a cage.
7 A ¶ AIDEN, 20s, in a black hoodie, leads the way.
8 A Behind them comes SASHA, 20s, they/them, carrying a duffel bag, and MARLON, 30s, nervous, carrying a flashlight that he keeps pointing at his own face.
9 D AIDEN (whispering): Marlon, the light.
10 D MARLON: Sorry. Sorry.
11 A ¶ WE SEE the three of them cross the waiting room.
12 A Aiden checks a hand-drawn map.
13 A Sasha stops at the fish tank and taps the glass, and Marlon trips on a chew toy that SQUEAKS loudly, and the beagle lifts its head, and all three freeze.
14 A ¶ ANGLE ON the beagle.
15 A It looks at them.
16 A It yawns.
17 A It goes back to sleep.
18 D SASHA: They're not even mad.
19 D AIDEN: Good. The safe is in Dr. Okafor's office. Down the hall, second door.
20 D MARLON: Why would a vet clinic have a safe?
21 D AIDEN: Because Okafor keeps the old man's ring in it. The one worth sixty thousand dollars.
22 D SASHA: You mean the ring he's been telling everyone is his dead wife's.
23 D AIDEN: Which it isn't. He bought it from the jeweler's two weeks after she left him. I have the receipt.
24 D MARLON: So we're not stealing it. We're, like, returning it.
25 D SASHA: To who?
26 D MARLON: To the universe.
27 D SASHA: That is the worst plan I have ever heard, and I helped build the plan.
28 D AIDEN: Shh. Both of you.
29 A ¶ They move down the hall.
30 A Aiden pushes a door open, and Sasha slips inside.
31 A Marlon waits at the threshold with the flashlight pointing at the floor like a good boy.

### SCENE s05150_2 | INT. UNIT 214 - CONTINUOUS
Detected names (may be incomplete or contain aliases): THE WOMAN, TEENAGE BOY, TOBY
1 A ¶ Cardboard boxes.
2 A A rocking horse under a sheet.
3 A A dressing mirror turned to face the wall.
4 A Everything neat, too neat, like someone arranged it for a visit.
5 A ¶ She pulls a box open.
6 A Photographs.
7 A Her own face at ten years old, then at twelve, then at fourteen.
8 A Every one with the eyes scratched out.
9 D THE WOMAN (quiet): Okay.
10 A ¶ Behind her the corridor lights go out one by one, towards her.
11 A Click.
12 A Click.
13 A Click.
14 A ¶ A TEENAGE BOY, TOBY, 17, hi-vis vest two sizes too big, stands in the open doorway holding a torch.
15 D TOBY: Sorry! Sorry. Odell sent me. Said you might need a hand carrying.
16 D THE WOMAN: Carrying what.
17 D TOBY (looking past her): ...the mirror?
18 A ¶ She turns.
19 A The mirror is facing the room now.
20 A Nobody touched it.
21 A ¶ TIME CUT:

### SCENE s05027 | EXT. RIVERSIDE PARK - FOUNTAIN - DAY
Detected names (may be incomplete or contain aliases): KIKI, KAI, JADA, STRANGER, MARCUS, SQUEAL
1 A ¶ Kiki, 19, ring light clipped to her phone, stands on the fountain's edge in a yellow jacket.
2 A Kai, her cousin, holds the tripod.
3 A Jada, 17, stands off to the side eating chips.
4 D KIKI [V.O.]: Everyone thinks the camera shows the truth. It shows what you point it at. That's the whole trick.
5 D KIKI: Okay, okay, take four. Kai, don't breathe on the mic.
6 D KAI: I'm not breathing on it.
7 D JADA: He's breathing on it.
8 D KAI: I'm literally holding my breath.
9 A ¶ The phone BUZZES on the tripod.
10 A ¶ ON PHONE: unknown number: stop filming. go home.
11 A ¶ Kiki laughs.
12 A Shows Kai.
13 A Kai doesn't laugh.
14 D KAI: That's a bit.
15 D KIKI: It's a bit. Some bot. Rolling.
16 A ¶ She starts the dance.
17 A Two bars in, a man in a grey coat walks into the frame behind her, and does not walk out.
18 D KIKI [CONT'D]: Excuse me, sir? We're filming!
19 D STRANGER: You're filming me.
20 D JADA: Nobody's filming you.
21 D KAI: Dude, you're in the shot, step back.
22 D STRANGER: You posted this fountain at nine this morning. Caption said "no one ever comes here."
23 D KIKI: It's a caption!
24 A ¶ ON PHONE: unknown number: he's not joking. walk away.
25 A ¶ Kiki's smile goes.
26 A The tripod light blinks red.
27 A A pigeon bursts off the fountain, SCREAMING away over the trees.
28 D KAI: Who is texting you?
29 D KIKI: Jada?
30 D JADA: It's not me! I'm right here!
31 D STRANGER: My name is Marcus. I'm the one who texted you. Look behind you, Kiki.
32 D KIKI [V.O.]: Funny. I only said "Kiki" in the video. Never my last name. Never where we live.
33 D MARCUS (to Kai, calm): Put the phone down.
34 D KAI: What? No!
35 D JADA: Kiki, we should go.
36 D KIKI: Go where, Jada, he's--
37 A ¶ A black van pulls up on the gravel path with a SQUEAL of tires.
38 A The side door SLIDES open.
39 D MARCUS: Now, please. All three.

### SCENE s05036 | EXT. FISHING TRAWLER "MARGARET ANN" - DECK - NIGHT
Detected names (may be incomplete or contain aliases): SKIPPER BRODIE FENN, STRANGER, MARCUS, THE CREW
1 A ¶ A rusted forty-foot trawler wallows in black swell off the breakwater, nets heaped in wet coils, a single work lamp swinging on its cable.
2 A Diesel and salt in the air.
3 A ¶ SKIPPER BRODIE FENN, 50s, weathered, a gold tooth he shows when he lies, leans against the winch.
4 A Beside him stands a STRANGER in a clean dry anorak, far too neat for a boat, holding a tablet in a waterproof sleeve.
5 D STRANGER: You're the captain? I was told the catch would be on ice by midnight.
6 D BRODIE: Catch is in the hold. Ice is a figure of speech.
7 A ¶ The STRANGER taps the tablet.
8 A ¶ ON TABLET: UNIT 4 - HARBOUR CUSTOMS - INSPECTION 06:00 - CLEAR
9 D STRANGER: Customs clear at six. That gives us six hours to move forty crates of "cod" off this deck and into a van that does not officially exist.
10 D BRODIE (grinning, tooth flashing): And who might you be, friend, to know about vans?
11 A ¶ The STRANGER glances up, finally, and unzips the anorak.
12 A Underneath: a badge, a vest, a holstered sidearm.
13 D MARCUS: Detective Marcus Hale, Maritime Task Force. And I'd stop smiling.
14 D THE CREW [O.S.] (three voices, shouting, nearly overlapping): Cap'n! Cap'n, there's lights on the water!
15 A ¶ Searchlights sweep across the swell, white and enormous.
16 A A bullhorn crackles.
17 D MARCUS (into his collar): All units, this is Hale. Boarding in ninety seconds. Nobody leaves this deck.
18 D BRODIE (very quiet): You were on my boat for three weeks. You gutted my fish.
19 D MARCUS (beat): You make a lovely chowder, Skipper.
20 A ¶ The work lamp SWINGS and shatters against the winch.
21 A Darkness, then the harsh white of the searchlights on every face.

### SCENE s05150_1 | INT. STORAGE FACILITY - CORRIDOR C - CONTINUOUS
Detected names (may be incomplete or contain aliases): INTERCOM, THE WOMAN, ODELL
1 A ¶ She stops at Unit 214.
2 A A padlock the size of her fist.
3 A She sets down the bag.
4 D INTERCOM [V.O.] (crackling): Unit two fourteen is on the lease til the end of the month ma'am. Just so you know.
5 A ¶ The woman looks up at a small speaker grille above the door.
6 D THE WOMAN: You're still here. Its past midnight.
7 D ODELL [V.O.]: Night manager. Odell. I do the walkthroughs whether anyone's here or not.
8 A ¶ MONTAGE - THE LOCK
9 A ¶ -- Bolt cutters.
10 A Jaws bite.
11 A Nothing.
12 A ¶ -- Bolt cutters again.
13 A A SNAP.
14 A The padlock drops.
15 A ¶ -- Rain.
16 A Rain.
17 A A drip falling from a pipe into a bucket somewhere far off.
18 A ¶ -- The door rattles upward on its track.
19 A Cold air rolls out.

### SCENE s05181 | INT. ST. ALDWYN'S HOSPITAL - MAIN CORRIDOR - NIGHT
Detected names (may be incomplete or contain aliases): MARISOL VEGA, PHONE, HELEN TEAGUE, BRAM OKONKWO, JUNO
1 A ¶ Victorian brick.
2 A Gas-lamp fittings bolted to bare wiring.
3 A Long and green and empty.
4 A ¶ Rain hammers the tall windows.
5 A ¶ Wind HOWLS through a cracked pane.
6 A ¶ MARISOL VEGA, 30s, night nurse, pushes a squeaking cart.
7 A Her badge swings.
8 A Her eyes don't.
9 A ¶ ON PHONE (TEXT): where r u
10 A ¶ She doesn't answer.
11 A Pockets it.
12 A ¶ DR. HELEN TEAGUE, 50s, surgeon, strides out of the stairwell.
13 A Coat open.
14 A Coffee in a shaking fist.
15 D TEAGUE: You're late with the rounds.
16 D MARISOL: You're early for the shift.
17 A ¶ Teague shrugs.
18 A Drinks.
19 A ¶ The radiators CLANK.
20 A Pipes GROAN.
21 A A lamp flickers.
22 A ¶ Overhead, thunder ROLLS across the roof like furniture.
23 A ¶ BRAM OKONKWO, 20s, orderly, jogs in from the east wing.
24 A Wet sneakers.
25 A Wide eyes.
26 D BRAM: Ward Six. Bed nine. He's gone.
27 D TEAGUE: Gone how?
28 D BRAM: Gone gone. Bed's empty. Window's open.
29 A ¶ Marisol and Teague trade a look.
30 A She nods.
31 A She nods.
32 A ¶ Marisol's phone BUZZES.
33 A ¶ ON PHONE (TEXT): pick up. now.
34 A ¶ She answers.
35 A Speaker on.
36 D JUNO [V.O.] (filtered, tinny): Marisol, tell me you're still in the building.
37 D MARISOL: I'm in the corridor. With Teague.
38 D JUNO [V.O.]: Is she wearing the grey coat?
39 A ¶ Marisol looks.
40 A Teague looks down at her coat.
41 A Grey.
42 D MARISOL: Yes.
43 D JUNO [V.O.]: Then walk away from her. Slowly.
44 A ¶ Teague sets her coffee down.
45 A Slowly.
46 D TEAGUE: Who is that?
47 D MARISOL: Nobody.
48 A ¶ Pipes CLANK.
49 A The lamp DIES.
50 A Rain.
51 A Dark.
52 A A single emergency bulb hums red.
53 A ¶ Bram steps back.
54 A Teague steps forward.
55 A Marisol steps between.
56 D BRAM: Somebody tell me what's happening.
57 A ¶ Nobody does.

### SCENE s05088 | INT. LAKEVIEW BANQUET HALL - WEDDING AFTERPARTY - NIGHT
Detected names (may be incomplete or contain aliases): DJ, WAITER, TEENAGERS, NORA, CALLUM, DEVON, MARIN
1 A ¶ Streamers.
2 A Half-eaten cake.
3 A A DJ plays something slow to a nearly empty floor.
4 A A WAITER carries a tray of champagne flutes between tables.
5 A Two TEENAGERS in matching rented suits hide behind a pillar, sharing a vape.
6 A A small WHITE DOG in a bow tie trots under the head table, hunting for crumbs.
7 A ¶ At a corner table, NORA, 28, bridesmaid, grips her clutch.
8 A Across from her sits CALLUM, 30s, the groom's cousin, loosening his tie.
9 D NORA (low, smiling for the room): Don't look at the bar.
10 D CALLUM (looking at the bar): Which one is he?
11 D NORA (sips water): Grey suit. Left of the cake.
12 D CALLUM (squints): That's the best man.
13 D NORA: That's not the best man.
14 A ¶ A beat.
15 A The Waiter passes.
16 A Nora lifts a flute.
17 A Sets it down untouched.
18 A ¶ DEVON arrives, 30s, the real best man, grinning, a bit sweaty, and slides into the chair next to Callum.
19 D DEVON (clapping Callum on the shoulder): There you are! Where were you during the toast?
20 D CALLUM (stiff): Parking.
21 D DEVON (to Nora): And you owe me a dance.
22 D NORA (too bright): Later.
23 D DEVON (leaning in): You okay? You look pale.
24 D NORA (squeezing the clutch): Long day.
25 A ¶ The Dog yips under the table.
26 A One of the Teenagers giggles.
27 A The other shushes him.
28 A ¶ MARIN, 50s, the bride's mother in a silver dress, glides up behind them.
29 D MARIN (tapping Devon's arm): Dev, the photographer needs you. Now.
30 D DEVON (rising, to Callum): Don't leave. We're doing shots at midnight.
31 A ¶ He goes.
32 A Marin lingers, her eyes on Nora.
33 D MARIN (softly): He is lovely, isn't he?
34 D NORA (nodding, tight): Very.
35 D MARIN (turning to Callum): And you. You'll keep an eye on her?
36 D CALLUM (a beat): Yes, ma'am.
37 A ¶ Marin smiles and drifts away.
38 A Nora exhales.
39 A Callum turns to her.
40 D CALLUM [CONT'D] (whispering): Your clutch. What's in it?
41 D NORA (eyes on the dance floor): Not here.
42 A ¶ The DJ fades out the slow song.
43 A The room claps, thinly.
44 A The Waiter returns for the flute Nora never touched.
45 A She hands it to him with a smile that does not reach her eyes.

### SCENE s05056 | INT. SELF-STORAGE UNIT 114 - DAY
Detected names (may be incomplete or contain aliases): HOLLIS, THE WOMAN, WADE, ODALYS, CAL
1 A ¶ ON CAMERA: a roll-up door half open, daylight on concrete.
2 A The camera operator's breathing is audible.
3 A ¶ Hollis, 60s, in a sweat-stained Stetson, kneels over a trunk.
4 A Behind him, boxes stacked to the ceiling, saddles, a dented tin lantern.
5 A ¶ A woman stands in the doorway with her arms crossed.
6 A She does not give her name.
7 A She has a leather satchel and a very flat voice.
8 D HOLLIS: Told the office it was all family stuff. Photographs. My granddad's saddle.
9 D THE WOMAN: And the brand book.
10 D HOLLIS: Didn't say a word about no brand book.
11 D THE WOMAN: You didn't have to.
12 A ¶ Hollis opens the trunk.
13 A Nothing.
14 A Dust.
15 D HOLLIS: Well, it ain't here.
16 A ¶ Hollis's phone RINGS.
17 A He answers on speaker.
18 D WADE [V.O.] (tinny): Pa? You in there yet? Don't open nothing till I get there.
19 D HOLLIS: Too late, son.
20 D WADE [V.O.]: Is somebody with you?
21 A ¶ Hollis looks at the woman.
22 A She looks at the camera.
23 A For a long time none of them say anything.
24 D THE WOMAN: Tell him it's Odalys. Tell him I came the long way round.
25 D HOLLIS (into the phone): It's Odalys.
26 D WADE [V.O.] (a pause, then flat): I'm ten minutes out. Stay put.
27 A ¶ The line goes dead.
28 A Hollis puts the phone in his pocket and does not look up.
29 D HOLLIS: He ain't gonna be happy.
30 D ODALYS: No.
31 D HOLLIS: You gonna wait?
32 D ODALYS: I have waited thirty years, Mr. Hollis. Ten minutes is nothing.
33 D CAL (behind the camera): Are we still rolling?
34 A ¶ Nobody answers him.

### SCENE s05081 | INT. SELF-STORAGE FACILITY - UNIT 214 - NIGHT
Detected names (may be incomplete or contain aliases): TICKS, VESPER, OKAFOR, DEL
1 A ¶ A roll-up door, half raised.
2 A Cold light leaks under it.
3 A Somewhere down the corridor a vent TICKS, TICKS, stops, and the silence after it is worse, and VESPER crouches at a stack of boxes while OKAFOR holds a flashlight on a padlock and DEL stands at the door with his back to them, listening to the building.
4 D VESPER (sets down the bolt cutters, slow): Okafor. Light.
5 D OKAFOR (steadies the beam, whispers): It's on, Vesper. It's on.
6 D DEL (without turning): Something moved on the stairs.
7 D VESPER (freezes mid-reach): Del, it's a pipe. Say it's a pipe.
8 D DEL (a long pause): Okafor, kill the light.
9 D OKAFOR (clicks it off): 
10 A ¶ Dark.
11 D DEL (barely breathing): Nobody move.
12 D VESPER (a whisper, close to a laugh): We're not.
13 A ¶ Far down the hall, a door SHUTS.
14 A Soft.
15 A Careful.

### SCENE s05148_0 | INT. NEW BEGINNINGS FERTILITY CLINIC - WAITING ROOM - DAY
Detected names (may be incomplete or contain aliases): NURSE, MAYA, DEV, THE WOMAN
1 A ¶ We see a quiet waiting room with beige chairs and a fish tank.
2 A The power has been out for three days after the storm, and the clinic is running on one generator.
3 A We can tell this because the lights are dim and the fish tank is not bubbling.
4 A ¶ CLOSE ON a clock on the wall.
5 A It reads 2:14.
6 A It is not moving.
7 A ¶ Maya, 30s, sits very straight with her purse in her lap.
8 A Beside her, Dev, 30s, is tapping his knee.
9 A They are not talking.
10 A We can tell they are not talking because there is no talking.
11 A ¶ ON PHONE: Mom - where r u guys?? is it happening
12 A ¶ Maya turns her phone face down on her thigh without answering.
13 A ¶ A NURSE enters.
14 A We see that she is carrying a clipboard.
15 A She is young and looks like she has not slept since the storm began.
16 D NURSE: Maya Rosen?
17 D MAYA: Yes. That's me.
18 D NURSE: Dr. Okafor will see you now. Only you, though. Generator rules.
19 D DEV (standing): I'm her husband.
20 D NURSE: I know, Mr. Rosen. I'm sorry.
21 A ¶ Dev sits back down.
22 A He does not say anything.
23 A His hand is still on Maya's arm.
24 D MAYA: Dev. It's okay.
25 D DEV (not meaning it): Yeah. Okay.
26 A ¶ Maya stands and follows the nurse through a swinging door.
27 A We see the door swing shut behind her.
28 A ¶ Dev is alone.
29 A He pulls out his phone and we see the screen.
30 A ¶ ON PHONE: Dev: they only let her in. what do i do
31 A ¶ ON PHONE: Mom: sit. be there. thats the job
32 A ¶ He looks at the fish tank.
33 A One fish is hanging at the surface, mouth opening and closing.
34 A ¶ A WOMAN in a green raincoat enters from the street door.
35 A She is soaked.
36 A She looks at the empty reception desk, then at Dev, then back at the desk.
37 A She does not sign in.
38 D DEV [CONT'D]: They're, uh... generator only. You might wait outside.
39 D THE WOMAN: I'm not a patient.
40 D DEV: Oh.
41 D THE WOMAN: I'm here for the freezer.
42 D DEV: What freezer?
43 A ¶ She does not answer.
44 A She walks past him toward the hallway marked STAFF ONLY.
45 A ¶ We see Dev watch her go.
46 A He stands, unsure, then follows at a distance.
