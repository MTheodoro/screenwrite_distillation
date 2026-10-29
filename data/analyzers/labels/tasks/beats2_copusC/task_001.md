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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_copusC/group_39001.json with the Write tool:
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

### SCENE s05111_0 | INT. NIGHTBIRD STUDIOS - LIVE ROOM - NIGHT
Detected names (may be incomplete or contain aliases): RILEY, PRIYA, COLE, DEZ
1 A ¶ Midnight.
2 A Rain on the roof.
3 A ¶ HISS of the tape machine.
4 A A red RECORD light.
5 A ¶ Foam panels.
6 A Cables like veins.
7 A A grand piano under a sheet.
8 A ¶ RILEY, 30s, producer, hunches over the console.
9 A He rubs his eyes.
10 A Coffee gone cold.
11 A ¶ Behind the glass, PRIYA, 20s, singer, stands at the mic.
12 A Headphones on.
13 A Eyes closed.
14 A ¶ COLE, 40s, engineer, slouches by the patch bay.
15 A He chews a pen.
16 D RILEY (into talkback): Take eleven. From the bridge.
17 D PRIYA (through speaker): Can I hear the guide?
18 D RILEY: It's in your cans.
19 D PRIYA: It's not.
20 A ¶ He checks the fader.
21 A Pushes it up.
22 A ¶ BZZZT.
23 A Feedback.
24 A ¶ Everyone flinches.
25 D COLE: That wasn't me.
26 D RILEY: Mute the room mics.
27 D COLE: They're muted.
28 A ¶ Silence.
29 A ¶ Then a soft sound in the speakers.
30 A A breath.
31 A ¶ Not Priya's.
32 D PRIYA (through speaker): Riley? Who's in here with me?
33 D RILEY: Nobody. It's the monitors.
34 A ¶ He taps the glass.
35 A She doesn't turn.
36 A ¶ PHONE BUZZES on the console.
37 A He grabs it.
38 A ¶ ON PHONE: where r u
39 A ¶ ON PHONE: the door is open
40 A ¶ He frowns.
41 A Looks at the live room door.
42 A Shut.
43 A Locked.
44 A Light off.
45 D COLE: Who is it?
46 D RILEY: Dez. He's not even in the building.
47 A ¶ He thumbs a call.
48 A Puts it on speaker.
49 A ¶ RING.
50 A RING.
51 D DEZ [V.O.] (distorted, far): Riley? Why are you calling from my house?
52 D RILEY: What? I'm at the studio.
53 D DEZ [V.O.]: I'm at the studio. I'm in the live room. Priya's with me.
54 A ¶ Beat.
55 A ¶ Riley looks through the glass.
56 A ¶ Priya is alone.
57 A Mouth open.
58 A Singing.
59 A No sound.
60 D COLE: Kill the tape.
61 D RILEY: I'm trying.
62 D COLE: Kill it!
63 D RILEY: It's not responding!
64 A ¶ BANG.
65 A ¶ The piano sheet FLIES off.
66 A ¶ The keys PLUNGE.
67 A Alone.
68 A ¶ A chord.
69 A Low.
70 A Wrong.
71 D PRIYA (through speaker): It knows my name.
72 D RILEY: Priya, come out. Now.
73 D PRIYA (through speaker): It's saying it.
74 D COLE: Saying what?
75 D DEZ [V.O.]: Don't open the door.
76 D RILEY: Dez, where are you?
77 D DEZ [V.O.]: Don't open the door don't open the door--
78 A ¶ CLICK.
79 A Dead line.
80 A ¶ A dog BARKS outside.
81 A Frantic.
82 A A delivery kid on the sidewalk ducks under an awning, phone raised, filming the building.
83 A The dog drags its leash toward the street.
84 A ¶ Inside, the lights DIE.
85 A ¶ Red RECORD light only.
86 D COLE: Where's the exit?
87 D RILEY: Behind you.
88 D COLE: There's a wall behind me!
89 D PRIYA (through speaker): Riley. Riley. Riley.
90 D RILEY: I'm coming.
91 D COLE: Don't.
92 D RILEY: She's in there!
93 D COLE: She's not alone!
94 A ¶ The glass CRACKS.
95 A A line zigzags across it.
96 A ¶ Priya turns.
97 A Slowly.
98 A ¶ Her eyes are open.
99 A They aren't hers.
100 D PRIYA (her voice, doubled): Take twelve.
101 A ¶ The speakers SCREAM.
102 A ¶ Every fader slams to the top.
103 A ¶ Riley grabs the door.
104 A It burns.
105 A ¶ He kicks it.
106 A SLAM.
107 A It gives.
108 A ¶ He drags Cole through.
109 A They hit the corridor running.
110 A ¶ The red light follows them.
111 A Down the hall.
112 A Faster.
113 A ¶ BOOM.
114 A ¶ The whole building exhales.

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

### SCENE s05131 | INT. DELIVERY WAREHOUSE - LOADING DOCK - NIGHT
Detected names (may be incomplete or contain aliases): ADRIAN, KESTREL
1 A ¶ The warehouse is very big and very cold.
2 A Yellow lamps hum over rows of brown boxes.
3 A Outside, snow falls on the empty parking lot.
4 A ¶ ADRIAN, 40s, stands next to a pallet.
5 A He holds a small black phone.
6 A A forklift is silent behind him.
7 A ¶ A side door SLAMS.
8 A KESTREL, 30s, walks in.
9 A They wear a gray coat and carry no bag.
10 D ADRIAN: You are late. I said eleven.
11 D KESTREL: Traffic was bad. Also, I do not like this place.
12 A ¶ He looks at them for a long time.
13 A His hand moves to the pallet, slowly.
14 D ADRIAN: Where is the package?
15 D KESTREL: It is safe. First you tell me who sold my name.
16 A ¶ The phone BUZZES in his hand.
17 A He does not look at it.
18 A Above them, the cold wind makes the roof metal sing.
19 D ADRIAN: Nobody sold. You make a story in your head.
20 D KESTREL: They told me you would say this.
21 A ¶ This is the last time they will trust anyone in this city.
22 A ¶ He takes one step forward.
23 A She, no, they, do not move.
24 A A truck engine RUMBLES far away.
25 D ADRIAN: Give me the package. Please.
26 D KESTREL: Give me the name.
27 A ¶ He opens his coat.
28 A A metal box CLICKS on the floor between them.

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

### SCENE s05094 | EXT. SKYLINE ROOFTOP BAR - NIGHT
Detected names (may be incomplete or contain aliases): ALANA, COLM
1 A ¶ Detective Sergeant Alana Reyes sits at a corner table with a club soda.
2 A Across from her, Assistant District Attorney Colm Brennan, in a loosened tie, nurses a bourbon.
3 A Neither has touched the appetizers.
4 A String lights sway.
5 A The city hums far below.
6 D ALANA (sliding a folder across): Chain of custody on the Delacroix evidence. Tell me what's wrong with it.
7 D COLM (not opening it): Nothing's wrong with it. It's thin, Alana. Thin is not wrong.
8 D ALANA (quietly): Thin is how it gets tossed at the suppression hearing.
9 D COLM (finally flips a page): Locker 14 was logged out at 2210 and the bag was sealed at 2305. That's fifty-five minutes where a lawyer drives a truck through.
10 D ALANA (she doesn't flinch): Officer Pak was on scene the whole time. She'll testify.
11 D COLM (shaking his head): She'll testify she was on scene. She won't testify nobody touched it.
12 A ¶ A long beat.
13 A A waiter passes.
14 A Neither speaks until he is gone.
15 A Alana picks at the label on her bottle.
16 D ALANA (low, level): I need you to file anyway. Monday. Before the defense gets wind of the gap.
17 D COLM (setting down the glass): You're asking me to walk into a courtroom knowing I might lose the whole case on a paperwork error.
18 D ALANA (meeting his eyes): I'm asking you to walk in knowing the man did it.
19 D COLM (after a pause, soft): That's not the standard. You know that's not the standard.
20 D ALANA (she stands, buttons her jacket): Then give me the standard. Tell me what I need, and I'll go get it.
21 D COLM (he looks at the folder, at the city, at her): Get me Pak's written statement. Notarized. By Friday.
22 D ALANA (a small nod): Friday.
23 A ¶ She leaves the folder.
24 A He pulls it back toward himself and finally, finally starts to read.

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

### SCENE s05165 | INT. COLDLINE DELIVERY WAREHOUSE - NIGHT
Detected names (may be incomplete or contain aliases): BOGDAN, THE WOMAN, ILSE, TWINS
1 A ¶ Water is on the floor, ankle high.
2 A The power is out.
3 A A small camping lantern stands on a shelf and gives yellow light, and BOGDAN, 50s, is moving boxes of canned food from low shelves to high shelves one by one, and in the corner near the loading door THE WOMAN, 30s, wet coat, sits on a stack of pallets with her phone in her hand and she looks at the stairs and at the water and at him, and the rain on the metal roof is loud.
4 D BOGDAN: This shelf is dry. Put your bag here.
5 D THE WOMAN: I keep my bag.
6 D BOGDAN: OK.
7 A ¶ He lifts another box.
8 A She watches him.
9 A The water moves around his boots.
10 A ¶ ON PHONE: Message failed.
11 A No signal.
12 A ¶ She puts the phone in her pocket.
13 D THE WOMAN: How long you work here?
14 D BOGDAN: Eleven years. Never this much water.
15 D THE WOMAN: The driver did not come back.
16 D BOGDAN: He will come.
17 D THE WOMAN: You say this like you do not think so.
18 A ¶ Bogdan does not answer.
19 A He gives her a can of peaches and a plastic spoon.
20 A She takes it.
21 A She does not open it.
22 A She holds it on her knee.
23 D BOGDAN: Open. Eat. We have enough.
24 D THE WOMAN: Later.
25 A ¶ Bogdan sets the lantern higher.
26 A Outside, a car horn sounds far away, two short notes, then stops.
27 A They both look at the door.
28 D THE WOMAN [CONT'D]: My name is Ilse. I should say it.
29 D BOGDAN: Bogdan.
30 D ILSE: I know. It is on your jacket.
31 A ¶ He almost smiles.
32 A He looks at the stitching on his chest as if he forgot it.
33 A ¶ Then the side door BANGS open.
34 A Water rushes in.
35 A THE TWINS, two boys about ten, soaked to the skin, in matching yellow raincoats, stand in the frame holding one backpack between them.
36 A They do not speak.
37 A They look at the lantern.
38 D BOGDAN [CONT'D] (softly): Come. Come inside. Close the door.
39 D THE TWINS (together): We are looking for our mother.
40 A ¶ Ilse stands up.
41 A She sets the can of peaches down on the shelf, open now, with the spoon in it, and she pulls off her coat and puts it over the two small shoulders.
42 D ILSE: Sit. Here. It is dry.
43 A ¶ The boys sit on the pallets.
44 A Bogdan hands them the peaches.
45 A They share the spoon.
46 A ¶ Rain.
47 A The lantern flickers, then holds.
48 A ¶ ON PHONE: one bar.
49 A A message comes through at last.
50 A ¶ ON PHONE: "Where r u?
51 A We are at the bridge.
52 A Boys with you?"
53 A ¶ Ilse reads it.
54 A She does not smile.
55 A She turns the phone so the twins can see the screen, and she keeps her hand on the nearest small wet head.

### SCENE s05082 | INT. SUBWAY CAR - EVENING RUSH
Detected names (may be incomplete or contain aliases): POPPY NAKAMURA, BISCUIT, MARCUS, DELILAH OKONKWO, CLANG, TUNNEL WALL
1 A ¶ A packed Number 6 train SCREECHES through the dark.
2 A Straphangers sway like seaweed.
3 A The lights flicker.
4 A The car smells of pizza and wet umbrellas.
5 A ¶ CLOSE ON a tiny paper bag in the arms of POPPY NAKAMURA, 9, brave, braces on her teeth.
6 A Inside the bag, a hamster peeks out.
7 D POPPY: Don't look, Biscuit. Crowds make you nervous.
8 D BISCUIT [O.S.] (muffled squeak): I'm not nervous. You're nervous.
9 A ¶ ANGLE ON Poppy's big brother, MARCUS, 15, headphones around his neck, glued to a dead phone.
10 D MARCUS: Pop, we're four stops from home. Do not name-drop the hamster in public.
11 D POPPY: He has a name, Marcus.
12 D MARCUS: He has a name that means "snack" to every cat in Queens.
13 A ¶ The train JERKS.
14 A Everybody lurches.
15 A A man's coffee flies.
16 A ¶ WE SEE the lights die.
17 A Total black.
18 A A collective GASP.
19 A ¶ The train GROANS to a stop.
20 D POPPY [CONT'D]: Marcus?
21 D MARCUS: Right here, Pop.
22 D DELILAH (from the dark, a big voice): Everybody stay calm! I've been stuck down here before!
23 A ¶ Poppy squints.
24 A A small flashlight clicks on.
25 A It shines on DELILAH OKONKWO, 60s, a transit worker's vest, a thermos the size of a fire hydrant.
26 D DELILAH [CONT'D]: Ten minutes. Tops. Y'all hold hands if you gotta.
27 D MARCUS: Is that official?
28 D DELILAH: It's a suggestion, baby.
29 D POPPY: Delilah, I think Biscuit's scared.
30 D DELILAH: Biscuit is the hamster?
31 D POPPY: He's a very brave hamster.
32 D MARCUS: He is literally shaking.
33 D POPPY: Marcus, shush!
34 D DELILAH: Both of you shush. Hear that?
35 A ¶ Silence.
36 A Then a faint CLANG, CLANG, CLANG from the tunnel ahead.
37 A ¶ INSERT - THE TUNNEL WALL, a rusty pipe trembling.
38 D POPPY (whispering): That's not a ten-minute noise.
39 D DELILAH (low): No. It is not.
40 D MARCUS: Okay. Okay. What do we do?
41 D DELILAH: You and your sister stay by me. Poppy, you keep that little fella warm.
42 D POPPY (to the bag): You hear that, Biscuit? We're a team now.
43 D BISCUIT [O.S.] (squeak): Tell Marcus I said sorry about his sneakers.
44 D MARCUS: What did he say?
45 D POPPY: Nothing.
46 A ¶ The clanging STOPS.
47 A ¶ The lights flash on.
48 A The train LURCHES forward.
49 A ¶ Everyone CHEERS.
50 A ¶ BACK TO SCENE
51 A ¶ Marcus slumps against a pole, laughing with relief.
52 A Poppy squeezes the bag.
53 A Delilah screws the cap on her thermos.
54 A ¶ This is the last time the three of them will ever be strangers.
55 D DELILAH: Next stop is yours, kids.
56 D POPPY: Thank you, Delilah.
57 D DELILAH: Thank the hamster.

### SCENE s05021 | INT. ST. MARGARET HOSPITAL - NURSES STATION - NIGHT
Detected names (may be incomplete or contain aliases): PRIYA, ALBERT, TOMASZ, GLORIA, TEENAGERS, DIRECTOR
1 A ¶ The ward is quiet.
2 A The clock on the wall shows 3:10.
3 A A cleaner pushes a mop slowly past the station and does not look at anyone.
4 A In the corner a vending machine hums.
5 A PRIYA sits with a clipboard, DR. ALBERT eats a sandwich with great care, TOMASZ is looking at his phone and GLORIA, the night manager, walks in a circle around the desk with a mug in her hand and a smile that does not move.
6 D PRIYA (she closes the clipboard): Everybody, tonight is very calm. Maybe the calmest night this year.
7 D DR. ALBERT (he chews, then points to the sandwich): Please do not say this word. Calm. It is a bad word in hospital.
8 D PRIYA (laughing, she touches the wooden desk): I am sorry. I take it back.
9 D TOMASZ (to himself, he reads the screen): Again no message from my wife. Maybe she is sleeping.
10 A ¶ ON PHONE: Tomek where r u?
11 A Come home early pls.
12 A Dog is sick.
13 D TOMASZ (he turns the phone to Priya): You see? The dog. Always the dog.
14 D PRIYA (she reads and nods): You have a dog? I thought you hate animals.
15 D TOMASZ (quietly, to the room): I hate everything at three in the morning.
16 D GLORIA (she lifts the mug to all of them): Friends, I am so happy with this team. Really. Look at this peace.
17 D DR. ALBERT (to Priya, low, he lowers the sandwich): Why is she so happy? She is never happy.
18 D PRIYA (whispering, she shrugs): Maybe she had good sleep.
19 D GLORIA (she hears and smiles wider): I heard this. I am fine. Please, continue your work.
20 A ¶ Two TEENAGERS in school jackets come through the doors, one holding a bloody paper towel to the other's chin.
21 A Nobody stands up.
22 A Priya waves them to the waiting chairs without looking, Tomasz types a reply with one thumb, and Dr. Albert hides the sandwich under a folder while Gloria walks to the window and looks down at the parking lot as if she is waiting for someone.
23 A ¶ The desk phone RINGS.
24 A Priya answers.
25 D PRIYA (into the phone): Ward four, Priya speaking.
26 D DIRECTOR [V.O.] (through the phone, calm and slow): Priya, good evening. This is the Director, from the head office. I am downstairs. I am coming up to see your ward.
27 D PRIYA (she covers the receiver, to everyone): It is the Director. He is downstairs.
28 D DR. ALBERT (he stands, the folder falls, the sandwich falls): Ah no. No, no.
29 D TOMASZ (he puts the phone away and fixes his hair): Now I understand why she smile.
30 D GLORIA (turning from the window, very quietly, to all): He has been in the building since midnight. I did not tell you because I wanted to see your real work.
31 D PRIYA (into the phone, with a very small voice): Welcome, Director. We are ready.
32 D DIRECTOR [V.O.] (the elevator DINGS behind the phone voice): I know. I saw everything on the camera.
33 A ¶ The elevator doors OPEN at the end of the corridor.
34 A The cleaner with the mop stops, takes off his cap, and looks at the four of them.
35 D TOMASZ (a whisper): Is the cleaner the Director?
36 A ¶ Nobody answers.
37 A The cleaner smiles.

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

### SCENE s05054 | EXT. HARBOUR PLAZA - CLIMATE PROTEST - DAY
Detected names (may be incomplete or contain aliases): METAPHOR, TESS, RILEY, ABE, NOOR, WAILS, RADIO, GIL
1 A ¶ Crowd.
2 A Cardboard signs.
3 A A drum somewhere.
4 A ¶ Riley, 20s, in a thrifted raincoat, is holding a sign that says THE SEA IS NOT A METAPHOR.
5 A She is also holding two coffees.
6 A ¶ Tess, 30s, arrives, out of breath, with a tote bag.
7 D TESS: sorry sorry, the train was
8 D RILEY: it's fine. you're here.
9 A ¶ Tess takes the coffee.
10 A They stand there.
11 A The drum gets louder.
12 A ¶ Abe, 60s, in a lab coat under a puffer jacket, pushes through with a megaphone he doesn't know how to hold.
13 D ABE: is this thing on? it's not on.
14 D TESS: it's the red button.
15 D ABE: which one's the red button.
16 A ¶ Noor, 19, climbs onto a bench.
17 A Everyone looks up.
18 A Nothing.
19 D NOOR (to the crowd): hey. hi. so. we're like, two hundred people, and the thing behind us
20 A ¶ She points.
21 A The harbour.
22 A The water has pulled back, way too far.
23 A ¶ Silence.
24 D RILEY (muttered): okay that's new.
25 A ¶ A horn BLARES from the ferry terminal.
26 A A siren WAILS, thin and far away.
27 D RADIO [V.O.] (from Gil's handheld, crackling): all units, all units, tide gauges are reading minus four, I repeat, minus four
28 A ¶ Gil, 40s, an event steward in a hi-vis vest, jogs over, radio to his ear.
29 D GIL: okay folks, so, quick thing, we're gonna move uphill. calmly.
30 D ABE (into the megaphone, finally working): EVERYONE PLEASE MOVE UPHILL.
31 D TESS (to Riley, quiet): this is the thing we put on the signs.
32 D RILEY: yeah.
33 D NOOR (from the bench, calling out): GIL, WHICH WAY IS UPHILL?
34 D GIL: that way! the library!
35 A ¶ The crowd starts to move.
36 A Signs drop.
37 A The drum stops mid-beat.
38 A ¶ Rain.
39 A A single raindrop on a sign.
40 D RILEY (to herself): okay okay okay.
41 A ¶ She takes Tess's hand.
42 A They run.

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

### SCENE s05148_1 | INT. NEW BEGINNINGS FERTILITY CLINIC - HALLWAY - CONTINUOUS
Detected names (may be incomplete or contain aliases): DEV, KAREN, MAYA
1 A ¶ The generator HUMS louder here.
2 A A row of steel tanks, each frosted with cold.
3 A The woman is already at the biggest one, pulling at its door.
4 D DEV: Hey. Hey! You can't touch that.
5 D THE WOMAN: The backup power's failing. Somebody has to move them.
6 D DEV: Who are you?
7 D THE WOMAN: Karen Ellis. Lab tech. Eleven years.
8 D DEV (quieter): Karen. My wife's in there right now.
9 D KAREN: Then you'd better help me lift.
10 A ¶ He looks at the tank.
11 A At her.
12 A At the dark ceiling.
13 A ¶ Dev takes off his jacket and grabs the other handle.
14 A ¶ Behind them, the swinging door opens.
15 A Maya stands there, pale, with the nurse behind her.
16 D MAYA (very still): Dev. What are you doing?
17 D DEV: Saving the thing we came here for.
18 A ¶ This is the first time all week that anyone in this building has told the truth.

### SCENE s05185 | INT. ST. BRIDGET'S CHURCH BASEMENT - NIGHT
Detected names (may be incomplete or contain aliases): DANA, ALL, WALTER, TOMAS, FATHER MORAN
1 A ¶ Folding chairs in a circle on cracked linoleum.
2 A A coffee urn sputters.
3 A Under a flickering tube light, six people sit with paper cups, and one of them is wearing a wire.
4 A ¶ Dana Whitlock, 30s, sharp-eyed, an undercover agent in a thrift-store cardigan, sits beside Walter Pruitt, 60s, a retired accountant who hasn't touched his coffee, while across the circle Rosalind Kerr, 50s, a lawyer with ink-stained fingers, grips the arm of Tomas Reyes, 20s, who bounces his knee, and Father Gil Moran, 70s, the host, folds his hands as Priya Anand, 40s, a nurse in scrubs, steps in late and closes the door too carefully.
5 A ¶ CLOSE ON Dana's cup.
6 A A pinhole lens in the rim.
7 D DANA: I'm Dana. I'm an alcoholic.
8 D ALL: Hi, Dana.
9 A ¶ ANGLE ON Walter.
10 A He watches her hands, not her face.
11 A ¶ This is the last time any of them will sit in this room together.
12 D WALTER: You sound new.
13 D DANA: Three weeks.
14 D WALTER: Funny. You smell like gun oil.
15 A ¶ Silence.
16 A The urn gurgles.
17 A Rosalind's grip on Tomas tightens.
18 A ¶ INSERT - Priya's phone, face-down on her knee.
19 A A text lights the screen: HE KNOWS.
20 A ¶ WE SEE Father Moran slowly stand, one hand sliding into his cassock.
21 A ¶ BACK TO SCENE
22 D TOMAS: Nobody move.
23 D FATHER MORAN: Sit down, son. Everyone sit. Dana, the cup, please.
24 A ¶ Dana sets it on the floor.
25 A Slowly.

### SCENE s05145 | INT. RIVERSIDE BANQUET HALL - WEDDING AFTERPARTY - NIGHT
Detected names (may be incomplete or contain aliases): DJ, GWEN, ASH
1 A ¶ Streamers.
2 A Half-eaten cake.
3 A A DJ booth abandoned mid-song.
4 A The last guests have gone.
5 A Two people remain.
6 A ¶ Gwen, 30s, in a bridesmaid dress and one shoe, drags a folding chair into the middle of the floor and drops onto it like she's been shot.
7 D GWEN: Best. Wedding. Ever.
8 A ¶ The side door SLAMS open.
9 A Ash, 30s, they/them, enters in a velvet blazer, holding a tray of leftover champagne flutes like a waiter at a very strange restaurant.
10 D ASH: You did not say that during the toast.
11 D GWEN: During the toast I was holding in a sneeze and a sob.
12 D ASH (setting down the tray): Same thing, honestly.
13 A ¶ Gwen grabs a flute.
14 A Ash takes one.
15 A They clink.
16 A Neither drinks.
17 D GWEN: Okay. Real talk. Did you see the groom's uncle?
18 D ASH: The one who made the toast to "his many wives"?
19 D GWEN: He has one wife.
20 D ASH: Then he's very ambitious.
21 A ¶ Gwen cracks up.
22 A Ash pretends not to be pleased.
23 D GWEN: You're good at this, you know that? Making people feel like they're not at a funeral.
24 D ASH: They are at a funeral. It's just a really good one.
25 A ¶ The overhead speaker CRACKLES.
26 A A distant voice, faint and metallic, comes through the PA.
27 D DJ [V.O.] (over speaker): Hey, uh, last song's still queued up. Should I play it?
28 D GWEN (to the ceiling): What song?
29 D DJ [V.O.]: It's, uh... it's labeled "DO NOT PLAY."
30 A ¶ Gwen and Ash exchange a look.
31 D ASH: Obviously play it.
32 D GWEN: Ash, no.
33 D ASH: Gwen. Yes.
34 A ¶ The speakers hum.
35 A A single piano note.
36 A Another.
37 A Then a voice, a woman's voice, soft, singing in a language neither of them knows.
38 A ¶ The room goes still.
39 A The streamers stop swaying.
40 A The candles on the tables light themselves, one by one, in a perfect ring around the dance floor.
41 D GWEN (whispering): Please tell me that's the DJ's idea of a joke.
42 D ASH (not joking): The DJ left at ten.
43 D DJ [V.O.] (over speaker, shaking): Guys... I'm still in the booth. I didn't press anything.
44 A ¶ The door at the end of the hall SWINGS open on its own.
45 A A figure in a long pale dress stands there, face hidden, hands folded in front like a bride.
46 D GWEN (small): Is that... is that Priya's grandmother?
47 D ASH: Priya's grandmother died in March.
48 D GWEN: So that's a no.
49 A ¶ The figure takes one step.
50 A The candles all lean toward it.
51 D ASH (very calm): Okay. New plan.
52 D GWEN: I love a new plan.
53 D ASH: We run.
54 D GWEN: Oh, I love that plan.
55 A ¶ They bolt for the exit together.
56 A The side door SLAMS shut behind them.
57 A The song swells.
58 A ¶ The figure lifts its veil.
59 A ¶ Underneath, grinning, is the DJ.
60 D DJ (lowering the headset): Gotcha.
61 D DJ [V.O., CONT'D] (over speaker, offended): Hey! That's my line.

### SCENE s05008 | INT. HOTEL - 9TH FLOOR CORRIDOR - NIGHT
Detected names (may be incomplete or contain aliases): CELIA VANCE, STRANGER, DAD, MARCUS, PRIYANKA
1 A ¶ Long.
2 A Carpeted.
3 A Quiet as a held breath.
4 A Brass numbers glow on doors.
5 A A housekeeping cart sits abandoned by the elevators, a room-service tray on the floor, a single shoe in the hall.
6 A ¶ CELIA VANCE, 30s, evening dress, heels in hand, walks fast with a phone to her ear.
7 A Behind her, a STRANGER in a grey suit follows at a polite distance.
8 D CELIA (into phone): Dad I told you I'm fine, the party was fine, I'm in the hallway now, I'm literally at my door.
9 D DAD [V.O.] (over phone, warm): You sound off. Is somebody with you?
10 A ¶ She glances back.
11 A The STRANGER stops, checks his watch, smiles.
12 D CELIA: No. Nobody.
13 A ¶ She reaches her door.
14 A Swipes.
15 A Red light.
16 A Swipes again.
17 A Red.
18 A ¶ ON PHONE: Front Desk: Your key has expired.
19 A Please visit reception.
20 D CELIA (muttering): Great. Perfect.
21 A ¶ The STRANGER steps closer, hands visible.
22 D STRANGER: Having trouble? I can call down. I'm in 912, just there.
23 D CELIA: I'm fine thank you
24 D STRANGER: Of course. I'm Marcus by the way. Marcus Hale. We met at the bar, I bought you the gin.
25 A ¶ Celia freezes.
26 A A beat.
27 A Her face loosens.
28 D CELIA: Oh my god. Marcus. You're the one who spilled it on my coat.
29 D MARCUS: Guilty. I've been trying to apologise all night. Honestly I followed you because I felt terrible.
30 A ¶ She laughs, relieved, the phone drooping at her side.
31 A Dad's tiny voice keeps talking.
32 D DAD [V.O.]: Celia? Celia are you there
33 D CELIA (into phone): Dad I'll call you back
34 A ¶ She hangs up.
35 A The corridor settles.
36 A Down the hall an elevator DINGS and the doors slide, and out walks a woman in a hotel blazer, name badge reading PRIYANKA, and behind her two men in dark coats who are definitely not guests.
37 D MARCUS (low, not smiling now): Don't turn around. Walk with me.
38 D CELIA: What
39 D MARCUS: Your father sold something he shouldn't have. They're here for you. I'm the one who's here to get you out.
40 A ¶ The housekeeper sets down her cart.
41 A Her hand goes to her pocket.

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

### SCENE s05087 | INT. THE BRANDT HOUSE - KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): COLLEEN, WALTER
1 A ¶ The power cut hit forty minutes ago.
2 A A single candle gutters on the granite island.
3 A Rain runs down the dark windows.
4 A Somewhere in the neighbourhood, a generator coughs and gives up.
5 A ¶ Colleen Brandt, 50s, still in her work lanyard, stands at the counter with a bottle of wine she can't open without light.
6 A Her husband's boss's wife has not yet arrived.
7 A Her son's Xbox sits uselessly on the table.
8 A ¶ Walter Pryce, 40s, in a damp suit, comes in from the garage with a flashlight.
9 D COLLEEN: You're late.
10 D WALTER: There's a tree down on Maple. I walked.
11 D COLLEEN (a beat): In those shoes.
12 D WALTER: In these shoes.
13 A ¶ He sets the flashlight on its end.
14 A It throws a pale circle at the ceiling.
15 A The refrigerator hums for a moment, then dies with a sigh.
16 A ¶ Rain.
17 D COLLEEN: I want to say something and I want you to let me finish.
18 D WALTER (beat): Okay.
19 D COLLEEN: Twenty-two years at Halvorsen. I trained every one of those people upstairs. I wrote the manual they pretend to follow. Last Thursday they put me in a room and a boy named Tyler, who is twenty-nine, told me my role was "being reimagined." He used the word "journey." He said I had been on a journey.
20 D WALTER: Colleen...
21 D COLLEEN (beat): I'm not finished. I smiled. I thanked him. I went to my desk and I alphabetised the supply cupboard because I did not know what else to do with my hands. And then I came home and made a lasagna that nobody ate, because the power went, and that's the whole of it.
22 A ¶ The candle gutters.
23 A She finally puts the wine down.
24 A ¶ This is the last evening either of them will pretend the house is fine.
25 D WALTER (quietly): I got the same email.
26 A ¶ Colleen turns.
27 A For the first time, she looks at him.
