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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_opusT/group_00001.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01837 | INT. RETIREMENT HOME RECREATION HALL - DAY
Detected names (may be incomplete or contain aliases): MAX, OKONKWO-BELL, DESMOND, VISITOR, FLO, ABERNATHY, FRONT DESK, MOVER
1 A ¶ A long room with a linoleum floor the color of weak tea.
2 A A bingo cage in one corner, a folding table of sad cookies in another.
3 A On the wall, a banner reads "SPRING FLING" and has read so since the previous spring.
4 A ¶ Three people occupy the room.
5 A ¶ MAXINE "MAX" OKONKWO-BELL, 70s, a retired stunt performer in a velvet tracksuit, sits at the center table with a deck of cards fanned in one hand.
6 A Beside her, a dozing oxygen tank on wheels and a bowl of butterscotch.
7 A Across from her, her grandson DESMOND, 20s, thin, pressed shirt, a lanyard that says VISITOR, reads a text message with his thumb stuck in his mouth.
8 A And by the cookie table, hunched over a tray, is the nurse's aide FLORENCE "FLO" ABERNATHY, 50s, teal scrubs, hair under a net, who has been listening to the whole room for years and revealing nothing.
9 A ¶ A phone on the wall buzzes.
10 A Nobody answers it.
11 A It buzzes again.
12 D MAX: Desmond, your telephone is ringing.
13 D DESMOND: It's a text, Nana.
14 D MAX: That's the wall phone.
15 D DESMOND: Oh.
16 A ¶ He glances at it.
17 A It buzzes.
18 A He looks at Max, who raises one eyebrow so high it nearly leaves her face.
19 A He sighs, crosses the room, and lifts the receiver.
20 A Flo watches him.
21 A Max shuffles.
22 A The cards ride a bridge, snap, and settle.
23 A Desmond holds the phone out from his ear as a voice squawks.
24 D FRONT DESK [V.O.] (over the wall phone): Good morning, Mr. Okonkwo-Bell. Your grandmother has a delivery.
25 D DESMOND: My grandmother has a what?
26 D FRONT DESK [V.O.]: A delivery. Two men are bringing it up.
27 D DESMOND (turning): Nana, what did you order?
28 D MAX: Nothing.
29 D DESMOND: They say it's a delivery.
30 D MAX: Then it's a surprise. Hang up.
31 D DESMOND: It's from the front desk.
32 D MAX: Then hang up on the front desk.
33 A ¶ He hangs up.
34 A At once the double doors swing open and two movers in blue coveralls wheel in a crate the size of a refrigerator, strapped to a hand truck.
35 A They park it in the middle of the floor.
36 A Without a word they unstrap it, tip it forward, and peel away the cardboard.
37 A Beneath is a vintage motorcycle, gleaming chrome, a leather jacket draped across the seat.
38 A ¶ Desmond walks around it twice.
39 A Flo sets down her tray.
40 A Max does not rise.
41 D DESMOND: Nana.
42 D MAX: Hm?
43 D DESMOND: Is this yours?
44 D MAX: Was.
45 D DESMOND: Nana, you said you sold it in 1994.
46 D MAX: I said a lot of things in 1994.
47 A ¶ Flo approaches the bike, runs a thumb along the handlebar, and glances back at Max.
48 D FLO: Miss Max, it's not on the activity calendar.
49 D MAX: Flo, I will tell you what's on my calendar.
50 D FLO: You're due for your pills at noon.
51 D MAX: My calendar says I'm due for a ride at noon.
52 D DESMOND: You cannot ride it.
53 D MAX: I can sit on it.
54 D DESMOND: You can't sit on it either. Dr. Pruitt specifically--
55 D MAX: Dr. Pruitt isn't here, and the man on the bike, in the photograph over there, was the best looking thing in the state of Ohio.
56 A ¶ She nods at a framed photograph on the wall, a younger Max in a leather jacket mid-leap over a line of cars.
57 A Desmond looks at the photograph, then at the bike, then at the movers, who have stepped back and are clutching a clipboard.
58 D FLO (to the movers): Who sent this?
59 D MOVER (shrugging): Sign here, ma'am.
60 D FLO: Who's the sender?
61 D MOVER: It says "Harlan."
62 A ¶ Max's hand stops on the cards.
63 A The room goes quiet.
64 A A small, amused crinkle appears at the corner of her eye, then spreads.
65 D MAX: That son of a gun.
66 D DESMOND: Who's Harlan?
67 D MAX: Your grandfather's brother. He died in the spring.
68 D DESMOND: Then who sent it?
69 D MAX: He did, Desmond. He did. He always said he'd send me something nice when he got where he was going.
70 A ¶ She gets up.
71 A She walks to the bike.
72 A Flo hurries to steady the oxygen tank on its wheels.
73 A Max lays her hand on the seat and strokes it with two fingers.
74 D MAX [CONT'D]: Desmond. Fetch the helmet.
75 D DESMOND: There's a helmet?
76 D MAX: There's always a helmet.
77 A ¶ He lifts the leather jacket and finds one beneath it.
78 A He holds it out.
79 A Max puts it on, buckles the strap, and swings a leg over the seat with a fluency that stops everyone's breath.
80 D FLO (quietly): Miss Max.
81 D MAX: Flo, if you tell Dr. Pruitt, I'll haunt you.
82 D FLO: He'll see the tank.
83 D MAX: Then I'll leave the tank.
84 A ¶ She unhooks the oxygen tube, hands it to Flo, and grips the handlebars.
85 A Desmond covers his face with both hands.
86 A Flo stares at the tube.
87 A ¶ The bike does not start.
88 A It doesn't have a key.
89 A Max grins, rests her forehead against the tank, and begins to laugh until the laughing turns to a wheeze, then a cough.
90 A Flo is at her side in an instant with the tube.
91 D FLO [CONT'D]: Breathe, Miss Max.
92 D MAX (between breaths): I am. I am. I'm breathing.
93 D DESMOND: Nana.
94 D MAX: Desmond, I want to sit here for a minute.
95 A ¶ He pulls a chair beside the bike and sits.
96 A Flo sits on the other side.
97 A Max rests her hands on the handlebars, eyes closed, and for a while none of them says anything.
98 A The movers back out of the room.

### SCENE s01384 | INT. SCRAPYARD OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): ROLAND FAYE, NINA SZABO, DUKE HARTWELL
1 A ¶ A trailer on cinder blocks.
2 A A single bulb.
3 A A safe with its door hanging open and empty.
4 A ¶ ROLAND FAYE, 50s, scrapyard owner, sits behind the desk with his hands flat on the blotter.
5 A Across from him, NINA SZABO, 30s, leather jacket, a revolver on her knee, sits very straight.
6 D ROLAND: You were my best driver.
7 D NINA: That's why you sent a stranger to my house?
8 D ROLAND: I didn't send anyone.
9 D NINA: He knew my dog's name.
10 D ROLAND: Everybody knows your dog's name.
11 D NINA: You sold me out for sixty thousand.
12 D ROLAND: I sold you out for a roof.
13 D NINA: Same thing, Roland.
14 D ROLAND: You never had to build a business from a hole in the ground.
15 D NINA: I've been in the hole. I know what it costs.
16 A ¶ The trailer door opens behind her.
17 A ¶ DUKE HARTWELL, 40s, fedora, wet shoulders, one hand in his coat, leans in the frame.
18 A He does not smile.
19 D DUKE: Evening.
20 A ¶ Nina doesn't turn.
21 A Her thumb finds the hammer.
22 D NINA: You're late.
23 D DUKE: Traffic.
24 D ROLAND: Duke, don't.
25 D DUKE: Sorry, Roland. The bill's come due.

### SCENE s01672 | INT. TAXIDERMY WORKSHOP - DAY
Detected names (may be incomplete or contain aliases): INSPECTOR NELL BARROWMAN, CONSTABLE JUNO ADEYEMI, MARGUERITE HOLLIS, ALFRED PETTIGREW
1 A ¶ Glass eyes in trays.
2 A A stuffed heron.
3 A Dust in the skylight.
4 A ¶ INSPECTOR NELL BARROWMAN (40s, notebook) circles a workbench.
5 A Beside her, CONSTABLE JUNO ADEYEMI (20s) scribbles.
6 A ¶ Behind the counter, MARGUERITE HOLLIS (60s, leather apron) polishes a badger.
7 A ¶ At the back, ALFRED PETTIGREW (70s, cardigan) sits very still.
8 A A suspect, or furniture.
9 D MARGUERITE: Nobody touched the owl.
10 D NELL: Somebody did. The base is cracked.
11 D ALFRED: It was always cracked.
12 D JUNO: Sir, the report says --
13 D NELL: Juno. Later.
14 D MARGUERITE: She dropped it in March, Alfred.
15 D ALFRED: She did not. She said she did.
16 D NELL: Who is "she" now?
17 D MARGUERITE (over Nell): Her. The girl from the post office.
18 D ALFRED (over Marguerite): Nobody. There's no girl.
19 D JUNO: She told me there was a ledger.
20 A ¶ Nell lifts the heron's wing.
21 A A key glints in the feathers.

### SCENE s01310 | EXT. DRY RIVERBED - NOON
Detected names (may be incomplete or contain aliases): MARSHAL JEDEDIAH CROW, DUTCH MALONE, LILA
1 A ¶ Cracked mud.
2 A A single dead cottonwood.
3 A Heat rises in sheets.
4 A Two horses stand tied to a wagon wheel, flicking flies.
5 A ¶ MARSHAL JEDEDIAH CROW, 50s, leathered, tin star dulled by dust, stands at the edge of the bank.
6 A He holds a Winchester loosely.
7 A He does not blink.
8 A ¶ Across forty feet of baked clay, DUTCH MALONE, 30s, in a black duster, crouches behind the wagon.
9 A He holds a pistol in each hand.
10 D MARSHAL: Dutch.
11 D DUTCH: Marshal.
12 D MARSHAL: Time to come out.
13 D DUTCH: Time to come in, you mean.
14 A ¶ A long breath.
15 A The wind picks up.
16 A A tumbleweed rolls between them.
17 A ¶ A woman's voice from behind the cottonwood, off-screen.
18 D LILA [O.S.]: Jed, don't.
19 A ¶ He doesn't turn.
20 A His jaw tightens.
21 D MARSHAL: Lila, go home.
22 D LILA [O.S.]: He's my brother.
23 D DUTCH: Lila, stay out of this.
24 D LILA [O.S.]: I'm in it already.
25 A ¶ The Marshal lowers the Winchester one inch.
26 A Dutch rises, slow, arms wide.
27 A They stand in the sun, each waiting for the other.
28 A ¶ Then both move.
29 A The Marshal swings the rifle up; Dutch drops to one knee and fires.
30 A Two shots crack as one.
31 A The horses bolt.
32 A Dust blooms.
33 A Dutch falls on his back.
34 A The Marshal staggers a step.
35 A He looks down at his vest, at the dark flower spreading there.
36 A Then he sits, hard, against the bank.
37 A ¶ Lila runs in.
38 A She falls to her knees between them, a hand on each man's chest.
39 D LILA [CONT'D]: Idiots.

### SCENE s01364 | INT. NEONATAL ICU - NIGHT
Detected names (may be incomplete or contain aliases): GUNNAR ASPLUND, FATIMA HADDAD, SEUN, ADEBOYE, MARIBEL SOTELO
1 A ¶ Soft blue light.
2 A Incubators like glass bread boxes.
3 A Every monitor beats in a different key.
4 A ¶ GUNNAR ASPLUND, 50s, charge nurse, moves between the cribs checking tubes.
5 A FATIMA HADDAD, 30s, neonatologist, writes on a chart with a stub of pencil.
6 A OLUWASEUN "SEUN" ADEBOYE, 20s, resident, sips from a paper cup.
7 A MARIBEL SOTELO, 40s, a mother in a hospital gown, sits motionless beside incubator six, her hand pressed flat to the glass.
8 A ¶ Gunnar adjusts a drip.
9 A Fatima checks a number, writes it, checks it again.
10 A Seun yawns into the cup.
11 A Maribel hums, tuneless.
12 D GUNNAR: Bed six, stable.
13 D FATIMA: Bed six, thank you.
14 D SEUN: Is she asleep?
15 D GUNNAR: She's looking.
16 D SEUN: She's not allowed to look at the monitor.
17 D FATIMA (over Seun): Let her.
18 D MARIBEL (over Fatima): He moved his foot.
19 D GUNNAR: He did.
20 D FATIMA: He did, Mrs. Sotelo. That's very good.
21 D SEUN (to Gunnar): Do I say it's good?
22 D GUNNAR: It's good.
23 D SEUN (to Maribel): It's very good.
24 A ¶ Maribel presses her forehead to the glass.
25 A Her breath fogs it.
26 A Gunnar reaches over and wipes the fog away with his sleeve.
27 A ¶ He crosses to bed four.
28 A She studies the chart again.
29 A He yawns again.
30 A The monitors continue their small, stubborn song.
31 A Fatima glances up at the mother, then at the baby, then writes one more number in the corner of the chart and underlines it twice.

### SCENE s00894 | INT. GENERATION SHIP "HALCYON REACH" - ARBORETUM DECK - SHIP'S NIGHT
Detected names (may be incomplete or contain aliases): COMMANDER ISOLDE PRAKASH, HENRIK AALTO, TECH ORVILLE BANKS, MERIDIAN
1 A ¶ A cathedral of green.
2 A Fifty metres of curved ceiling arch overhead, strung with sunlamps dimmed to amber.
3 A Rows of apple trees run into the distance, their branches heavy with fruit that never rots.
4 A A brook trickles along a polished steel channel.
5 A The air smells of loam, of rain that never fell.
6 A ¶ COMMANDER ISOLDE PRAKASH, 50s, in a charcoal uniform with silver epaulettes, sits on a bench beneath a gnarled old tree, her boots off, her feet in the stream.
7 A Close-cropped silver hair, calm, ancient eyes.
8 A ¶ DR. HENRIK AALTO, 40s, tall, thin, a ship's physician with a stoop, stands at the edge of the path with a datapad.
9 A His white coat is too short in the sleeves.
10 A ¶ TECH ORVILLE BANKS, 20s, a lanky engineer in grease-streaked coveralls, perches on the brook's stone lip, eating an apple with the loud contentment of someone who has not eaten all day.
11 D PRAKASH: Sit, Henrik. You look like a fence.
12 D AALTO: I prefer to stand.
13 D PRAKASH: It wasn't a request.
14 A ¶ He sits, stiffly, on the far end of the bench.
15 A Orville chews.
16 A The brook chuckles.
17 D AALTO: You've seen the numbers.
18 D PRAKASH: I have.
19 D AALTO: Then you know.
20 D PRAKASH: I know the water reclamation is down four percent.
21 D AALTO: It's down nine.
22 D PRAKASH: It was four in the briefing.
23 D AALTO: It was four in the briefing because the engineer in the briefing was afraid of you.
24 D ORVILLE (through apple): Hey.
25 D AALTO: You were.
26 D ORVILLE: I was a little afraid.
27 D PRAKASH: Orville, how afraid should we be?
28 D ORVILLE: On a scale?
29 D PRAKASH: On any scale.
30 D ORVILLE: Seven. Possibly eight.
31 D PRAKASH: Of ten?
32 D ORVILLE: Of twelve.
33 A ¶ A pause.
34 A The brook trickles on.
35 A Prakash lifts one foot from the water and studies her toes.
36 D PRAKASH: How long?
37 D AALTO: At this rate, the fourth ring goes dry in forty years.
38 D PRAKASH: Forty years.
39 D AALTO: Give or take.
40 D PRAKASH: I will be dead in twenty.
41 D AALTO: So will I.
42 D PRAKASH: And Orville?
43 D ORVILLE: Hey, I'm twenty-six.
44 D PRAKASH: Then it's your problem.
45 D ORVILLE: Thanks a lot.
46 D MERIDIAN [V.O.] (soft, genderless, from the air): Commander, if I may. The reclamation shortfall can be offset by a seventeen percent reduction in decorative irrigation.
47 D PRAKASH: Meridian, we are sitting in the decorative irrigation.
48 D MERIDIAN [V.O.]: I am aware.
49 D AALTO: You want to drain the arboretum.
50 D MERIDIAN [V.O.]: I want to keep the passengers alive.
51 D PRAKASH: The passengers are alive because of the arboretum. They come here to remember what the sky looks like.
52 D MERIDIAN [V.O.]: That is a sentimental argument, Commander.
53 D PRAKASH: It's the only kind we have.
54 D ORVILLE (muttering): Can I keep the apples?
55 D PRAKASH: You may keep the apples.
56 D AALTO: Isolde.
57 D PRAKASH: Yes, Henrik.
58 D AALTO: There is another option.
59 D PRAKASH: There is always another option.
60 D AALTO: We could wake the sleepers early.
61 A ¶ A long silence.
62 A The brook, the trees, the perfect false twilight.
63 A Prakash looks up at the ceiling as if she could see through it to the eleven thousand frozen sleepers in the lower decks.
64 D PRAKASH: How many?
65 D AALTO: A hundred. Perhaps two.
66 D PRAKASH: They won't thank us.
67 D AALTO: No.
68 D PRAKASH: They'll wake into a ship that's dying.
69 D AALTO: They'll wake into a ship that needs them.
70 D MERIDIAN [V.O.]: Commander, the vote is yours.
71 D PRAKASH: It's never been mine. It's all of ours.
72 A ¶ She stands.
73 A Her bare feet leave dark prints on the stone.
74 A She reaches up to a low branch, plucks an apple, and polishes it against her sleeve.
75 D PRAKASH [CONT'D]: Wake them.
76 A ¶ She bites.
77 A The sound is bright and clean.

### SCENE s00026 | INT. PIGEON LOFT, ROOFTOP - DAWN
Detected names (may be incomplete or contain aliases): STASYS BIRKAVS, DONNIE FUSCO, FAT LEO ARMBRUSTER
1 A ¶ Cooing.
2 A Feathers.
3 A Three men in a cage of chicken wire.
4 A ¶ STASYS BIRKAVS (50s, flat cap, careful) feeds grain from a tin.
5 A DONNIE FUSCO (30s, tracksuit) and FAT LEO ARMBRUSTER (40s, enormous, quiet) sit on upturned buckets.
6 D STASYS: Nobody here is angry. Understand?
7 D DONNIE: Nobody's angry.
8 D STASYS: The money is a number on paper. I like birds more than numbers.
9 D LEO (muttering): Birds don't lend.
10 D STASYS: No. They return. That is the difference.
11 D DONNIE (to the room): So we're square? Everyone square?
12 D STASYS (smiling): Of course. Leo, the bucket.
13 A ¶ Leo lifts his bucket.
14 A Underneath, a revolver, and beneath that, an envelope fat with cash.
15 A Donnie's smile slides off his face.

### SCENE s02393 | INT. FERRY TERMINAL WAITING ROOM - IMPROVISED CLINIC - NIGHT
Detected names (may be incomplete or contain aliases): SOLVEIG ABIODUN, OLD MAN, NURSE PRAKASH IYENGAR, PARAMEDIC LUCIA FERREIRA-HOLT
1 A ¶ A blizzard rattles the windows.
2 A Rows of molded plastic chairs have been pushed aside to make room for six camp cots.
3 A A vending machine glows in the corner.
4 A Blankets, IV poles borrowed from a stalled ambulance, a whiteboard on which someone has written TRIAGE in red marker.
5 A ¶ DR. SOLVEIG ABIODUN, forties, in a parka over green scrubs, kneels beside a cot where an OLD MAN lies grey-faced under three blankets.
6 A Behind her, NURSE PRAKASH IYENGAR, thirties, tapes a gauze pad to a young woman's arm.
7 A At the doorway, PARAMEDIC LUCIA FERREIRA-HOLT, twenties, stamps snow from her boots and drops an equipment bag.
8 D SOLVEIG (to the room): I need quiet. All of you. Quiet.
9 A ¶ The room hushes.
10 A Wind howls.
11 A A vending machine hums.
12 D LUCIA: Road's closed. Plow can't get through before dawn.
13 D SOLVEIG: How long is that?
14 D LUCIA: Nine hours. Maybe ten.
15 D SOLVEIG (to herself): Ten.
16 D PRAKASH: Doctor, I'm out of saline.
17 D SOLVEIG: How many bags?
18 D PRAKASH: Two.
19 D SOLVEIG: Use one on him. Save the last.
20 D PRAKASH: For?
21 D SOLVEIG: For whoever's worse.
22 A ¶ She stands.
23 A Her knees crack.
24 A She crosses the room to the whiteboard and writes a number beside the first name.
25 D SOLVEIG [CONT'D] (to Lucia): Pressure?
26 D LUCIA: Ninety over fifty.
27 D SOLVEIG: Pulse?
28 D LUCIA: One-thirty.
29 D SOLVEIG: That's not a stable man.
30 D LUCIA: He was fine an hour ago.
31 D SOLVEIG: They always are.
32 D PRAKASH (low, to Solveig): Doctor, there's something you should see.
33 A ¶ She follows him to the corner cot.
34 A The young woman Prakash was tending lifts her sleeve.
35 A Under the gauze, the skin is bruised black from elbow to wrist.
36 D SOLVEIG: How long has she been like this?
37 D PRAKASH: She says since the bus.
38 D SOLVEIG: What bus?
39 D LUCIA (from across the room): The one that skidded on the bridge. She walked here.
40 D SOLVEIG: She walked here on that arm?
41 D LUCIA: Four miles.
42 D SOLVEIG (shaking her head): Everyone in this room is lying about how bad it is.
43 D PRAKASH: Including you.
44 D SOLVEIG: Including me.
45 A ¶ The lights flicker.
46 A Everyone looks up.
47 A The vending machine goes dark.
48 A A groan from the old man's cot.
49 A Lucia runs to him.
50 A Solveig stays where she is, watching the ceiling lights hum back to life.
51 D SOLVEIG [CONT'D] (to the whole room): Nobody panic. We have generators. We have blankets. We have each other, and I know that sounds like a poster.
52 A ¶ A weak laugh from one of the cots.
53 D SOLVEIG [CONT'D] (quiet, to Prakash): Get me the last bag.
54 D PRAKASH: For her?
55 D SOLVEIG: For him.
56 D LUCIA (calling): Doctor! His pressure's dropping!
57 A ¶ Solveig is already moving.

### SCENE s00467 | INT. FARMHOUSE KITCHEN - MORNING
Detected names (may be incomplete or contain aliases): GRANDMOTHER AGATHA TSVETKOVA-BELL, DAMIEN OKAFOR-LINDSAY, NOELLE, BOY
1 A ¶ A long scrubbed-pine table.
2 A Sunlight through gingham curtains.
3 A A cast-iron stove ticks as it warms.
4 A Four people, four chairs, one pot of oatmeal between them.
5 A ¶ GRANDMOTHER AGATHA TSVETKOVA-BELL (70s, apron, silver bun) ladles porridge.
6 A At her left sits her son-in-law DAMIEN OKAFOR-LINDSAY (40s, work shirt, reading the paper).
7 A Across from him, his wife NOELLE (40s, hair still wet from the shower) butters toast.
8 A And at the end, in a chair too big for him, sits a quiet BOY (8, striped pajamas) who has not touched his bowl.
9 D AGATHA: Eat, child.
10 D BOY: Not hungry.
11 D NOELLE: Just a little.
12 D BOY: Not hungry.
13 A ¶ The two voices overlap, hers soft and his small.
14 A Damien lowers the paper.
15 D DAMIEN: Let him be.
16 D AGATHA: He was up all night. I heard him on the stairs.
17 D NOELLE: Was he sleepwalking?
18 D AGATHA: He was talking.
19 A ¶ Damien turns a page.
20 A Noelle sets the knife down.
21 A The Boy stirs his oatmeal with one finger.
22 D NOELLE: Who were you talking to, sweetheart?
23 D BOY: The man.
24 D DAMIEN: What man?
25 D BOY: The one at the end of the hall. He said you'd be angry.
26 A ¶ Agatha's ladle stops in the air.
27 A Damien sets the paper on the table.
28 A Noelle looks at the stove, and then at her mother.
29 D AGATHA (to the table): Eat your breakfast.
30 A ¶ She resumes ladling, and nobody speaks again.

### SCENE s00979 | INT. WAX MUSEUM - AFTER HOURS
Detected names (may be incomplete or contain aliases): INSPECTOR CALLOWAY, MADAME ZELENKA, PERCIVAL, LADY MARGUERITE, TOMMASO
1 A ¶ Rows of figures in fading finery.
2 A A single lantern.
3 A Dust on the Duke of Wellington's boots.
4 A ¶ INSPECTOR CALLOWAY (50s, rumpled overcoat, notebook) stands beside a plinth.
5 A MADAME ZELENKA (60s, turban, jeweled fingers) sits stiffly on a chaise.
6 A PERCIVAL (30s, curator's smock) wrings a handkerchief.
7 A LADY MARGUERITE (40s, widow's veil) holds a fan.
8 A TOMMASO (20s, night guard's cap) fidgets by the door.
9 D CALLOWAY: Let us review. The Duke was found at midnight with his head missing.
10 D PERCIVAL: It is the wax, Inspector. Wax is delicate.
11 D CALLOWAY: It is also not usually missing.
12 D MARGUERITE: I was admiring the Duke at eleven. He was whole.
13 D ZELENKA: I felt a presence. A cold one. It lingered.
14 D TOMMASO: I locked the doors at ten. No one came in.
15 D CALLOWAY: Then no one went out. Which means the head is here.
16 D PERCIVAL: You can't think one of us...
17 D CALLOWAY: I think a head cannot walk. Madame Zelenka, your turban looks heavy.
18 D ZELENKA: It is Persian silk, Inspector.
19 D CALLOWAY: It is lumpy.
20 A ¶ She hesitates.
21 A Unwinds the cloth.
22 A Inside, nothing but hair.
23 A She smiles thinly.
24 D MARGUERITE: Inspector, my fan.
25 D CALLOWAY: Lady Marguerite, your veil has stopped moving.
26 A ¶ She stiffens.
27 A Tommaso drops his cap.
28 A Percival laughs, high and tinny.
29 D PERCIVAL: It's under the chaise, I'm afraid. I only meant to repair the nose.

### SCENE s01472_2 | INT. SALT MINE - SEALED DRIFT - LATER
Detected names (may be incomplete or contain aliases): TOBIAS, MOUSE, RAFF, KITE
1 A ¶ A wall of grey-white salt.
2 A A rusted door half buried in it.
3 A ¶ Tobias taps the wall.
4 A Listens.
5 D TOBIAS: Here.
6 D MOUSE: Raff, I need ten minutes.
7 D RAFF: You have six.
8 D MOUSE: Raff.
9 D RAFF: Mouse. Six.
10 A ¶ She kneels.
11 A Unrolls a canvas kit.
12 A Brushes, a stethoscope, a tiny hammer.
13 A ¶ Tobias takes a position at the corner.
14 A Raff paces.
15 D RAFF [CONT'D] (into radio, low): Kite. Status.
16 D KITE [V.O.] (radio): Cage is fine. I'm fine. Everyone's fine. Why do you ask?
17 D RAFF: Stay on the line.
18 D KITE [V.O.] (radio): Raff, there's a light coming down the main shaft.
19 A ¶ Raff stops pacing.
20 A Tobias turns.
21 D RAFF: How far?
22 D KITE [V.O.] (radio): Forty meters, maybe. The second cage is dropping.
23 D TOBIAS: Haul run. It's early.
24 D RAFF: Mouse!
25 D MOUSE: Four minutes!
26 D RAFF: You have two!
27 A ¶ Mouse bites down on the stethoscope.
28 A Turns a dial by feel.
29 A Click.
30 A Click.
31 A Click-CLUNK.
32 A ¶ The door sags inward.
33 A Behind it: a steel cabinet, a stack of velvet cases.
34 D MOUSE: Open!
35 A ¶ Tobias and Raff haul the door wide.
36 A Mouse scoops cases into a duffel.
37 A Tobias checks the corridor.
38 D TOBIAS: Raff! Alarm!
39 A ¶ An alarm BLARES down the drift.
40 A Strobes pulse white on the salt.
41 D RAFF (grabbing the duffel): Run!
42 A ¶ They scatter down the drift, lamps swinging wildly, salt dust boiling up behind them.

### SCENE s02446 | INT. ROADSIDE WAX MUSEUM - HALL OF PRESIDENTS - NIGHT
Detected names (may be incomplete or contain aliases): ONE ONLY, HARLAN BOONE, DOLORES KIM, KIT ABERNATHY, MASON TREVELYAN, YVETTE DUBOIS
1 A ¶ Dim corridor.
2 A Red velvet ropes.
3 A Wax figures stand on low platforms in dusty suits, their glass eyes catching the flashlight beams.
4 A A faded banner: "ONE DAY ONLY - FOREVER."
5 A ¶ HARLAN BOONE (40s, museum owner, ring of keys, bathrobe over pajamas) leads four visitors down the hall, lantern swinging.
6 A Behind him: DOLORES KIM (50s, schoolteacher, tote bag), KIT ABERNATHY (20s, backpacker, headlamp), MASON TREVELYAN (30s, salesman, loosened tie), and YVETTE DUBOIS (30s, nurse, scrubs under a parka).
7 D HARLAN: Right this way, folks. The museum closes at six, but I make exceptions for storms.
8 D DOLORES: Thank you, Mr. Boone. We were nearly in a ditch.
9 D HARLAN: Best place to be nearly in a ditch is my front door.
10 D KIT: Are these all real people?
11 D HARLAN: Wax, miss. All wax.
12 D MASON: They look awfully real.
13 D HARLAN: That's the craft.
14 A ¶ Yvette stops at a figure of Abraham Lincoln.
15 A She reaches out, touches its sleeve, and pulls back.
16 D YVETTE: It's warm.
17 D HARLAN: That's the lamp.
18 D YVETTE: There's no lamp.
19 A ¶ Harlan keeps walking.
20 A The visitors exchange glances.
21 D KIT: Is anyone else getting a weird vibe?
22 D DOLORES: ^Is that wax supposed to be breathing?
23 D MASON: ^Is that wax supposed to be breathing?
24 A ¶ Dolores and Mason speak at once, then look at each other in alarm.
25 A All four turn toward the Lincoln figure.
26 A ¶ Its head swivels slowly toward them.
27 D YVETTE: Oh no.
28 A ¶ Harlan stops at the end of the hall.
29 A Turns.
30 A His smile has changed.
31 A It is wider and wrong.
32 D HARLAN: Don't be rude, folks. They've been waiting a very long time for company.
33 A ¶ All along the hall, the wax figures stir.
34 A A hand lifts.
35 A A jaw clicks.
36 A A glass eye rolls forward.

### SCENE s00772 | INT. FISH MARKET - WALK-IN FREEZER - NIGHT
Detected names (may be incomplete or contain aliases): MAURA KESSLER-DIAZ, TIB, NAGY
1 A ¶ Frost on everything.
2 A Hanging tuna like pale bells.
3 A Breath clouds.
4 A ¶ MAURA KESSLER-DIAZ, 40s, black parka, lockpick case, crouches at a floor safe.
5 A ¶ The heavy door SCRATCHES open.
6 A Light slices in.
7 A ¶ She kills her penlight.
8 A Flattens against the shelving.
9 A ¶ Boots.
10 A Slow.
11 A ¶ TIBOR "TIB" NAGY, 50s, market night manager, rubber apron, a gaff hook in one fist, walks in.
12 A ¶ He stops.
13 A Smells the air.
14 D TIB: I know somebody's in here.
15 A ¶ Silence.
16 A Drip.
17 A Fans.
18 D TIB [CONT'D]: Cameras went dark an hour ago. That's not luck.
19 D MAURA (stepping out): Hello, Tib.
20 A ¶ He doesn't flinch.
21 A Raises the hook.
22 D TIB: Maura. You left your hair dye in my sink last time.
23 D MAURA: Brown. Not my color.
24 D TIB: You're stealing from the wrong man.
25 D MAURA: Everybody says that.
26 A ¶ They circle.
27 A Tuna swing between them.
28 D TIB: Put the picks down.
29 D MAURA: Put the hook down.
30 A ¶ Neither does.
31 D TIB: Your brother used to say you talk too much.
32 D MAURA: My brother used to say a lot of things. Then he said nothing.
33 A ¶ Tib's jaw tightens.
34 D TIB: That wasn't me.
35 D MAURA: It was your safe.
36 A ¶ He lunges.
37 A She drops the case.
38 A They collide.
39 A The shelving rattles.
40 A Fish rain.
41 A ¶ They grapple, hook against forearm, her knee into his ribs.
42 D TIB [CONT'D] (grunting): Stop it!
43 D MAURA: You stop it!
44 A ¶ Tib slams her into a shelf.
45 A Ice cracks loose.
46 A They both slide to the floor.
47 A ¶ Both freeze.
48 A A distant sound: a truck engine.
49 D TIB: That's my deliveries.
50 D MAURA: You have deliveries at two a.m.?
51 D TIB: Fish don't keep hours.
52 A ¶ The engine idles.
53 A Voices outside, muffled.
54 A ¶ They look at each other.
55 A At the safe.
56 A At the door.
57 D MAURA: Who's out there, Tib?
58 D TIB (low): Not mine.
59 D MAURA: Then whose?
60 A ¶ Tib lowers the hook.
61 A A fraction.
62 D TIB: The man who owns the safe.
63 D MAURA: You said it was yours.
64 D TIB: I lied. Everybody does.
65 A ¶ The door handle turns.
66 A They both dive behind the tuna rack.
67 A ¶ They crouch shoulder to shoulder.
68 A Her breath on his collar.
69 A His hand over her mouth.
70 A ¶ She bites it.
71 D TIB [CONT'D] (whisper-yelling): Ow!
72 D MAURA (whisper): Quiet!
73 A ¶ A shadow crosses the frosted glass.
74 A Stops.
75 A ¶ They go still.
76 A Fans hum.
77 A A fish drips onto Maura's hood.
78 D TIB [CONT'D] (barely audible): When he opens the door, you take the left.
79 D MAURA: Why would I take anything from you?
80 D TIB: Because he kills us both if you don't.
81 A ¶ The shadow leans in.
82 A A knuckle taps the glass.
83 A Twice.
84 A ¶ Tib and Maura exchange a look.
85 A Then, together, they stand.
86 D MAURA: On three.
87 D TIB: One.
88 D MAURA: Two.
89 A ¶ The door swings wide.
90 A ¶ They launch.

### SCENE s01295 | INT. COURTHOUSE ELEVATOR - DAY
Detected names (may be incomplete or contain aliases): ATTORNEY RENATA OKONKWO-VASS, CLERK
1 A ¶ Brass walls.
2 A A cracked floor indicator.
3 A The car hums between floors.
4 A ¶ ATTORNEY RENATA OKONKWO-VASS, 40s, sharp grey suit, briefcase at her ankle, presses her back against the rail.
5 A She stares at the floor numbers.
6 A Her jaw is tight.
7 A ¶ The elevator jolts.
8 A Stops.
9 A The lights flicker.
10 A ¶ She sighs.
11 A Jabs the call button.
12 D CLERK [V.O.] (through the speaker): Maintenance.
13 D RENATA: I'm in car three. Between six and seven.
14 D CLERK [V.O.]: Yes, ma'am. We see you.
15 D RENATA: I'm due in Courtroom 7 in four minutes.
16 D CLERK [V.O.]: The judge has been informed.
17 A ¶ She exhales.
18 A Sets down her briefcase.
19 A Rubs her temples.
20 D RENATA: Is he angry?
21 D CLERK [V.O.]: Ma'am?
22 D RENATA: The judge.
23 D CLERK [V.O.]: He said, and I quote, "Let her be late. She's earned it."
24 A ¶ She blinks.
25 A Then, for the first time all day, she laughs.
26 D RENATA: I won, didn't I?
27 D CLERK [V.O.]: The jury came back ten minutes ago.
28 A ¶ She leans her head against the wall.
29 A Closes her eyes.
30 D RENATA: Then take your time.

### SCENE s02284 | INT. SHARK TANK TUNNEL, MARINE AQUARIUM - NIGHT
Detected names (may be incomplete or contain aliases): MAN IN OVERALLS, WOMAN, DIVE SUIT, TAMSIN VOLK, LOOKOUT, DESHAWN, TEODORO
1 A ¶ Blue gloom.
2 A Sharks glide overhead.
3 A The tunnel's acrylic arch glows.
4 A ¶ A MAN IN OVERALLS crouches at a maintenance panel, drill whining.
5 A A WOMAN IN A DIVE SUIT, TAMSIN VOLK, swims past outside the glass, signalling.
6 A The third, a LOOKOUT in a guard uniform, DESHAWN, leans on the rail, watching the corridor.
7 D MAN IN OVERALLS: Panel's open.
8 D TAMSIN [O.S.] (through earpiece): Clock's running. Two minutes.
9 D DESHAWN: Quiet. Footsteps.
10 A ¶ A torch beam sweeps the far wall.
11 A All three freeze.
12 A A hammerhead drifts across the glass.
13 D MAN IN OVERALLS: Seal's cut. Pearl case is behind it.
14 D TAMSIN [O.S.]: Don't touch the alarm bar.
15 D TEODORO (whispering): I never touch the bar.
16 D DESHAWN: Teodoro, hurry.
17 D TEODORO: Got it.

### SCENE s00321 | INT. PICKLE BRINING CELLAR - DAY
Detected names (may be incomplete or contain aliases): FELIX BRANDT, MABEL TOOMEY, SOL KAPLAN
1 A ¶ Oak barrels stacked to the rafters.
2 A A single bare bulb swings on a cord.
3 A The smell is dill, vinegar and old secrets.
4 A ¶ FELIX BRANDT, fifties, a deli owner in a stained apron and a bow tie he refuses to remove, stands guard over a barrel with both arms spread wide.
5 A ¶ MABEL TOOMEY, thirties, a health inspector with a clipboard and a face like a closed door, taps her pen against the barrel lid.
6 A ¶ SOL KAPLAN, sixties, Felix's brother-in-law, sits on an upturned crate eating a pickle with great concentration.
7 D MABEL: Open the barrel, Mr. Brandt.
8 D FELIX: It's a pickle barrel. You've seen one. They're all the same.
9 D MABEL: Open it.
10 D FELIX (to the room): Folks, nobody panic, the lady wants to see a pickle.
11 A ¶ Sol chews.
12 A Nobody moves.
13 A The bulb sways.
14 D SOL (to himself): Forty years. Forty years and she wants to see a pickle.
15 D MABEL: I heard a noise from this barrel when I came in.
16 D FELIX: That's fermentation. It's alive. Like all of us.
17 D MABEL: It said "Felix."
18 D FELIX: Then it's a very friendly pickle.
19 A ¶ Mabel reaches for the lid.
20 A Felix steps in front of it.
21 A Sol quietly slides his crate three feet to the left, to block the door.
22 D FELIX [CONT'D]: Mabel, may I call you Mabel, the cellar is cold, your hands are cold, come upstairs, have a bagel.
23 D MABEL: Mr. Brandt, one thing at a time.
24 D FELIX: I'll give you two bagels.
25 D SOL (to nobody): Three. She looks like a three.
26 D MABEL: I do not take bribes.
27 D FELIX: Nobody said bribe. We said bagels.
28 D FELIX: It's a family recipe, you understand!
29 D MABEL: I understand a violation when I smell one!
30 A ¶ The lid thumps from inside.
31 A All three stare at it.
32 A Sol takes another bite.
33 D SOL (to the group): Nice acoustics down here.
34 A ¶ Felix puts a hand on the lid and presses down, smiling so hard his bow tie quivers.
35 D FELIX: Sol. The jar of the good relish. Upstairs. Now.
36 D SOL (rising, not hurrying): She'll want it with mustard.
37 D MABEL: I want the barrel open.
38 D FELIX: And I want a bigger deli. We don't always get.
39 A ¶ The lid thumps again.
40 A Mabel, without taking her eyes off Felix, writes one word on her clipboard and underlines it twice.

### SCENE s00710 | INT. TRELAWNEY HOUSE - FRONT HALL - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): AGNES TRELAWNEY
1 A ¶ A long hallway, floored in black-and-white tile, lined with portraits of unsmiling ancestors.
2 A A grandfather clock.
3 A Dust in the window light.
4 A A telephone table with an old answering machine blinking red.
5 A ¶ The machine clicks.
6 A Whirs.
7 D AGNES [V.O.] (recorded, bright): You've reached the Trelawney residence. We can't come to the phone right now. Leave a message and we'll ring you back.
8 A ¶ BEEP.
9 D AGNES [V.O., CONT'D] (recorded, older, hoarse): Hello? It's me. It's Agnes. I know you're there. Pick up.
10 A ¶ Silence.
11 A The machine clicks off.
12 A ¶ The front door opens.
13 A AGNES TRELAWNEY, 70s, in a long wool coat, rain on her shoulders, steps in.
14 A A battered leather suitcase in one hand, a key on a lanyard around her neck.
15 A She shuts the door slowly and stands listening to the house.
16 D AGNES: Hello?
17 A ¶ The clock ticks.
18 A She sets down the suitcase and crosses to the telephone table.
19 D AGNES [CONT'D] (to herself): Four messages. Who calls a house that has been empty for a year?
20 A ¶ She presses the button.
21 D AGNES [V.O.] (recorded, young): Mother, it's me. Please call me back.
22 A ¶ She stops the machine.
23 A Presses it again.
24 D AGNES [V.O.] (recorded, young): Mother, it's me.
25 A ¶ She stops it.
26 A Her hand trembles on the casing.
27 D AGNES: That was my voice.
28 A ¶ She lifts the receiver, listens to the dial tone, and sets it back.
29 A In the mirror above the table, the hall behind her is empty.
30 D AGNES [CONT'D] (softly): It's me, mother. I'm home.
31 A ¶ Somewhere upstairs a door closes, gently, as if in answer.

### SCENE s01372 | EXT. GLASS ORCHARD - DUSK
Detected names (may be incomplete or contain aliases): BRIAR, TAMSIN, KESTREL VANE
1 A ¶ Trees of blown glass.
2 A Fruit that hums.
3 A Wind makes them chime.
4 A ¶ BRIAR, 40s, a pruner in a moss-colored coat, works a ladder.
5 A Snip.
6 A Snip.
7 A She doesn't look down.
8 A ¶ At the base, TAMSIN, 20s, holds the ladder.
9 A Her knuckles are white.
10 D TAMSIN: You said you'd stop at dusk.
11 D BRIAR: It's not dusk.
12 A ¶ Tamsin looks west.
13 A The sun is a thumbnail above the hills.
14 D TAMSIN: It's nearly.
15 A ¶ Snip.
16 A A glass pear drops.
17 A Tamsin catches it.
18 A It sings in her palm, one thin note.
19 D BRIAR: Put it in the basket.
20 A ¶ She doesn't.
21 A She holds it.
22 A Closes her fingers around it.
23 A ¶ A shadow moves between the trees.
24 A Slow.
25 A Wrong-shaped.
26 A ¶ KESTREL VANE, 60s, a crown of brass antlers, steps into the lane.
27 A Bare feet.
28 A No sound on the gravel.
29 A ¶ Briar stops cutting.
30 A The chimes die.
31 D KESTREL: Evening, sisters.
32 D BRIAR: Not your orchard anymore.
33 D KESTREL: Not yours either.
34 A ¶ Tamsin's fist tightens.
35 A The pear cracks.
36 A A hairline of light runs through it.
37 D TAMSIN: Briar.
38 D BRIAR: Hold the ladder.
39 A ¶ The pear shatters.
40 A Every tree in the orchard rings at once, a scream of glass.

### SCENE s00693 | INT. CASTLE HOTEL - TOWER SUITE - NIGHT
Detected names (may be incomplete or contain aliases): OTTILIE PRAHL, MAN, CALDER
1 A ¶ A round room papered in faded roses.
2 A A four-poster bed, a dark window, a candle guttering on the sill.
3 A ¶ OTTILIE PRAHL, 30s, in a travel-stained dress, sits on the edge of the bed with her hands pressed between her knees.
4 A A MAN, 40s, in a doorman's greatcoat, stands in the doorway, his face half in shadow.
5 D MAN: Your room, madam.
6 D OTTILIE: It's the wrong room.
7 D MAN: It is the room you were given.
8 A ¶ She says nothing.
9 A She looks at the window, then at his hands, which are clean.
10 D OTTILIE: You carried my bag up four flights and you're not out of breath.
11 D MAN: I am used to stairs.
12 D OTTILIE: What's your name?
13 A ¶ He considers.
14 D MAN: Calder.
15 D OTTILIE: Calder. And is there someone else in the hotel tonight?
16 D CALDER: Only the guest in the east wing.
17 D OTTILIE: Who is that?
18 A ¶ Calder steps inside and closes the door.
19 A The candle leans.
20 D CALDER: Someone who has been asking for you since Tuesday.
21 A ¶ Ottilie rises.
22 A She does not rush.
23 A She crosses to the window and lifts the latch.
24 D OTTILIE: Tell him I've been here all along.
25 D CALDER: He knows.
26 A ¶ Behind him, in the hall, a floorboard creaks under a heavy tread.

### SCENE s00997 | INT. CRYSTAL GLASSHOUSE - REGENCY MASQUERADE, 1815
Detected names (may be incomplete or contain aliases): LORD ASHBY, PHILIPPA, RENWICK, SIOBHAN, QUENTIN, MADAME DUPRE
1 A ¶ A cathedral of iron and glass, lush with orchids and palm.
2 A Lanterns swing among the leaves.
3 A Masked guests drift through the greenery.
4 A A string quartet saws in a bower.
5 A ¶ LORD ASHBY (50s, silver domino mask, jeweled cane) leans on a pillar and watches the dance floor without blinking.
6 A PHILIPPA (30s, green gown, peacock-feather mask) waits by a fern, gloved hands clasped.
7 A RENWICK (40s, black mask, scarred knuckles) tops up his glass and wanders toward the quartet.
8 A SIOBHAN (20s, servant's apron beneath a borrowed shawl) carries a tray of champagne.
9 A QUENTIN (20s, harlequin mask, nervous laugh) pretends to admire an orchid.
10 A MADAME DUPRE (60s, fan, gold wig) moves between the guests, whispering, never looking at any of them.
11 A ¶ Ashby taps his cane twice.
12 A Renwick sets down his glass and drifts toward the doors, Philippa slides behind a palm and takes a folded note from her glove, Siobhan lowers the tray, and Quentin, laughing a half-second too loud, bumps into Madame Dupre, who drops her fan and does not stoop to pick it up.
13 A The quartet falters.
14 D ASHBY: Madame Dupre. You are unsteady.
15 D MADAME DUPRE: It is the heat, Lord Ashby.
16 D ASHBY: Is it?
17 D PHILIPPA (low, to Siobhan): Take it to the gardener's door.
18 D SIOBHAN: Yes, miss.
19 A ¶ She pockets the note and slips between two guests.
20 A Renwick turns at the doorway, sees her, and steps into her path.
21 A Quentin snatches an orchid, snaps its stem, and tucks it behind his ear.
22 A Ashby crosses the floor with the cane tapping once for every step.
23 D RENWICK: Where are you going, girl?
24 D SIOBHAN: To fetch more wine, sir.
25 D RENWICK: The wine is that way.
26 A ¶ She lifts the tray like a shield.
27 A He plucks a glass, drains it, sets it back on the tray.
28 A She does not blink.
29 A Philippa emerges from behind the palm.
30 A Madame Dupre has stopped whispering.
31 A Ashby arrives.
32 D ASHBY: Philippa, my dear. You've been missed.
33 D PHILIPPA: I was admiring the orchids.
34 D ASHBY: You are always admiring something.
35 A ¶ Quentin takes three quick steps back.
36 A Renwick takes one forward.
37 A The quartet stops altogether.
38 A In the hush, a glass shatters.
39 A Siobhan's tray is on the floor.
40 A She and Renwick stare at the shards.
41 A Ashby offers Philippa his arm.
42 A She takes it.
43 A Madame Dupre retrieves her fan and fans herself slowly.
44 A Quentin laughs once, then thinks better of it.
45 D ASHBY [CONT'D]: Shall we dance?
46 D PHILIPPA: Of course.
47 A ¶ The quartet resumes.
48 A Couples reform.
49 A Siobhan kneels among the broken glass and, under the cover of the music, closes her fist around a small gold key.

### SCENE s01830 | INT. VICTORIAN PARLOR - EVENING
Detected names (may be incomplete or contain aliases): LADY CORDELIA ASHWORTH, SIR REGINALD ASHWORTH, PHILIPPA MARLOWE, EZEKIEL FROST, HARGREAVES, CAPTAIN JULIAN VANE
1 A ¶ 1893.
2 A Gaslight, heavy drapes, a piano no one has touched in years.
3 A A dinner is being given and nothing has been eaten.
4 A ¶ LADY CORDELIA ASHWORTH, 50s, black silk, sits very straight at the head of a small table.
5 A Beside her, her husband SIR REGINALD ASHWORTH, 60s, whiskers waxed, studies a fork.
6 A Opposite, their niece PHILIPPA MARLOWE, 20s, pale blue gown, turns her water glass a quarter turn and back.
7 A Next to her, the family solicitor MR. EZEKIEL FROST, 50s, spectacles, holds a folded paper he has not yet unfolded.
8 A By the sideboard stands the butler HARGREAVES, 60s, white gloves, expressionless.
9 A And at the foot of the table, hat still on, sits CAPTAIN JULIAN VANE, 30s, in a regimental coat with one button missing.
10 A ¶ A clock ticks.
11 A Nobody lifts a spoon.
12 D LADY CORDELIA: Hargreaves. The soup is cold.
13 D HARGREAVES: It was cold when it was served, madam.
14 D LADY CORDELIA: Then take it away.
15 A ¶ Hargreaves does not move.
16 A Sir Reginald sets the fork down.
17 A Philippa stares at the captain's missing button.
18 D SIR REGINALD: Frost. You had something to read.
19 D MR. FROST: I had, Sir Reginald. After dinner.
20 D SIR REGINALD: There is no dinner.
21 D MR. FROST: Quite.
22 A ¶ Mr. Frost unfolds the paper.
23 A He smooths it twice.
24 A Captain Vane takes off his hat and sets it, crown down, beside his plate.
25 A Philippa lifts her eyes to the ceiling.
26 A ¶ A bell rings in the hall.
27 A The house telephone, a new brass horn on the wall, rattles.
28 A ¶ Hargreaves slips out to the hall.
29 A The receiver is lifted.
30 A His voice carries back through the open door.
31 D HARGREAVES [O.S.]: Yes. Yes. I will convey it.
32 A ¶ The receiver is set down with great care.
33 A He returns.
34 D LADY CORDELIA: Well?
35 D HARGREAVES: The constable, madam. He is at the gate.
36 A ¶ Captain Vane stands.
37 A His chair scrapes.
38 A Sir Reginald does not look at him.
39 D PHILIPPA (low): Julian.
40 D CAPTAIN VANE: Sit down, Pippa.
41 A ¶ She does not sit down, because she has not stood.
42 A She holds the glass.
43 A Lady Cordelia dabs her mouth with a napkin that has touched nothing.
44 D LADY CORDELIA: Reginald, the paper.
45 D SIR REGINALD: Frost.
46 D MR. FROST (reading): "I, Hartley Ashworth, being of sound mind--"
47 D CAPTAIN VANE: Stop.
48 D MR. FROST: Captain, I must.
49 D CAPTAIN VANE: Not that one. The other.
50 A ¶ Mr. Frost turns the page over.
51 A There is a second sheet beneath it.
52 A He reads it silently.
53 A His face loses color.
54 A He passes it to Sir Reginald, who reads and passes it to his wife.
55 A ¶ Lady Cordelia folds it into a square, then a smaller square, then places it in the candle flame.
56 A ¶ The paper curls and blackens.
57 A Nobody breathes.
58 D HARGREAVES (at the door, quietly): Shall I admit the constable, madam?
59 D LADY CORDELIA: Not yet.
60 A ¶ She takes up her spoon.
61 A She tastes the cold soup.
62 A She sets the spoon down.
63 D LADY CORDELIA [CONT'D]: Now.

### SCENE s01395 | INT. CLOCKTOWER - MECHANISM ROOM - NIGHT
Detected names (may be incomplete or contain aliases): TOMASZ REDDING, DISPATCHER, LEONIDAS PARK, MIRA VASQUEZ-TANAKA
1 A ¶ Brass gears the size of cartwheels grind overhead.
2 A Pendulum weights swing in the dark.
3 A A single caged lamp throws shadows across oak beams.
4 A ¶ TOMASZ REDDING, 40s, ex-cop, rain-soaked, hunches over a battered radio on a workbench.
5 A He twists the dial.
6 A Static.
7 A A woman's voice breaks through, thin and urgent.
8 D DISPATCHER [V.O.] (over radio): Redding, are you in position?
9 D TOMASZ: Three flights up. It's colder than a morgue.
10 D DISPATCHER [V.O.] (over radio): Is the package there?
11 A ¶ He scans the room.
12 A A steel case sits in the shadow beneath the great gear.
13 A He crosses and lifts it.
14 A Heavier than it looks.
15 D TOMASZ: Got it.
16 D DISPATCHER [V.O.] (over radio): Don't open it.
17 D TOMASZ: Wasn't going to.
18 D DISPATCHER [V.O.] (over radio): Redding. Someone knows you're there.
19 A ¶ Tomasz freezes.
20 A Slowly sets the case down.
21 A Draws a pistol from his coat, thumbs the safety.
22 A ¶ The trapdoor in the floor creaks.
23 A A hand appears on the rim, then a head.
24 A He aims.
25 A Does not fire.
26 A ¶ LEONIDAS PARK, 30s, climbs up out of the stairwell in a delivery uniform, breathing hard, both hands raised.
27 A He is soaked to the skin.
28 D LEONIDAS: Don't shoot. I work here.
29 D TOMASZ: At midnight?
30 D LEONIDAS: Maintenance. Somebody has to oil the gears.
31 A ¶ From the dark beyond the pendulum, a woman's laugh.
32 A ¶ MIRA VASQUEZ-TANAKA, 30s, in a black raincoat, steps from behind a beam.
33 A She holds a small silver gun, steady as a surgeon.
34 A She is smiling.
35 D MIRA: That's very good, Leo.
36 A ¶ Leonidas lowers his hands.
37 A Smiles back.
38 A He turns to Tomasz.
39 D LEONIDAS: Sorry, friend.
40 D TOMASZ (to the radio): Dispatcher. You hearing this?
41 A ¶ Static.
42 A Nothing.
43 A The radio has been switched off, and somewhere in the shadows, Mira's thumb rests on a small black remote.
44 A ¶ The great gear above them shifts and drops one tooth.
45 A The whole tower shudders.

### SCENE s00096 | INT. DEEP-SEA HABITAT "THRESHOLD" - MAIN CABIN - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): NADIRA SHARIFOVA, PETRUS VAN DER LINDE, QUILL
1 A ¶ A curved steel cylinder lined with cables, plastic crates, and pipe.
2 A Portholes the size of dinner plates show nothing but black water.
3 A A single red emergency lamp pulses at the far bulkhead.
4 A ¶ NADIRA SHARIFOVA (40s, habitat commander, close-cropped hair, a mug that reads WORLD'S OKAYEST BOSS) stands at the central console.
5 A PETRUS VAN DER LINDE (50s, pressure technician, ginger beard gone grey at the chin) kneels beside an open floor panel, a wrench in each hand.
6 A QUILL (20s, oceanographer, real name Quillon Adeyemi, dreadlocks tied up in a net) bends over a bank of sonar monitors, headphones around his neck.
7 D NADIRA (to the room): Eyes up, everyone. Status report.
8 D PETRUS: Seal four is weeping.
9 D QUILL: Sonar's reading something big.
10 D NADIRA: How big?
11 D QUILL: Bigger than us.
12 A ¶ Nadira sets down her mug.
13 D NADIRA (to Quill): Define "something."
14 D QUILL: It's moving. Slowly. Circling.
15 D PETRUS (muttering, to himself): Not today. Not today. Not today.
16 A ¶ He tightens a bolt.
17 A A thin jet of water hisses at his wrist, and he curses and clamps a hand over it.
18 A Nadira drops beside him and slaps a patch over the leak.
19 D NADIRA: Hold it.
20 D PETRUS: I am holding it.
21 D NADIRA: Hold it harder.
22 A ¶ The emergency lamp pulses faster.
23 A Quill removes his headphones, puts them back on, and removes them again.
24 D QUILL: It's gone.
25 D NADIRA: Gone where?
26 D QUILL: Just gone. Vanished off the screen.
27 A ¶ The hull shudders.
28 A A deep, resonant note rolls through the walls, like a cello string the size of a whale.
29 A Everyone freezes.
30 A Dust drifts from the ceiling.
31 A Petrus lets go of the patch, and it holds.
32 D PETRUS (whispering): That was no engine.
33 D QUILL (whispering): That was a song.
34 D NADIRA (to everyone, quietly): Nobody panic.
35 A ¶ She looks at the nearest porthole.
36 A A vast, pale eye slides past the glass, unblinking, then drifts into the dark.
37 D QUILL (grinning, helpless): That's a sperm whale.
38 D PETRUS: It's enormous.
39 D NADIRA (to herself): Of course it is.
40 A ¶ She retrieves her mug and takes a long, slow sip.
41 A Her hand shakes only a little.

### SCENE s02069 | INT. SCRIVENER'S SHOP - FLORENCE - 1503 - DAY
Detected names (may be incomplete or contain aliases): MAN, WOMAN, SCRIVENER
1 A ¶ A cramped room lined with ledgers and inkpots.
2 A A high slanted desk by the window.
3 A Sunlight cuts a gold bar across the floorboards.
4 A Dust motes turn.
5 A ¶ A MAN in a stained smock bends over a vellum sheet, quill scratching.
6 A He is thin, quick, and does not look up when the bell above the door jingles.
7 A ¶ A woman enters.
8 A Dark cloak, veil.
9 A She closes the door softly and stands with her hands clasped.
10 D WOMAN: I was told you write letters for those who cannot.
11 D MAN: I write for those who will not.
12 D WOMAN: That is a distinction.
13 D MAN: It is the whole of my profession.
14 A ¶ He lifts his head.
15 A Studies her.
16 A She does not raise the veil.
17 D MAN [CONT'D]: Your name?
18 D WOMAN: Not yet.
19 D MAN: Then I cannot write you a letter.
20 D WOMAN: A letter does not need my name. Only his.
21 D MAN: Whose?
22 A ¶ She crosses to the desk and lays a ring on the vellum.
23 A A small gold band, set with a dark stone.
24 A He picks it up.
25 A Turns it in the light.
26 A His quill stops.
27 D MAN [CONT'D] (quietly): Messer Giuliano.
28 D WOMAN: You know him.
29 D MAN: Everyone knows him.
30 A ¶ She lifts her veil at last.
31 A A young face, pale, composed.
32 A Her eyes do not leave his.
33 D WOMAN: Then you know why I need a letter that will arrive after I am gone.
34 A ¶ The scrivener sets down the ring.
35 A Dips his quill.
36 A Begins to write.
37 D SCRIVENER (without looking up): Dictate, Madonna. I am listening.
38 A ¶ Outside, a church bell tolls the hour.
39 A She draws a breath, and begins.

### SCENE s01413 | INT. LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): NORMAN BELLWETHER, LEOCADIA
1 A ¶ Rows of washers churning.
2 A A flickering sign in the window.
3 A The smell of detergent and hot lint.
4 A ¶ NORMAN BELLWETHER, 50s, in pajama pants and a trench coat, folds a towel with military precision.
5 A Two machines over, his daughter, LEOCADIA, 20s, stares at a spinning drum with a duffel bag at her feet.
6 D NORMAN (to himself): Corners to corners.
7 D LEOCADIA: Dad.
8 D NORMAN: Mm.
9 D LEOCADIA: Why are you here?
10 D NORMAN: Your mother said you were.
11 D LEOCADIA: That's not why.
12 D NORMAN: My machine broke.
13 D LEOCADIA: It's two in the morning.
14 D NORMAN: I couldn't sleep.
15 A ¶ She watches the drum.
16 A He folds the towel again, makes a perfect square, sets it on top of a stack.
17 D LEOCADIA: You don't have to follow me around.
18 D NORMAN: I wasn't.
19 D LEOCADIA: You were in the car outside my apartment last night.
20 A ¶ He stops folding.
21 A Looks at the towel as though it might help him.
22 D NORMAN: It was on my way.
23 D LEOCADIA: To what?
24 D NORMAN (to the room): Nowhere. Everywhere.
25 A ¶ The machine beeps.
26 A Spin cycle ending.
27 A Leocadia opens the door, pulls out a damp bundle, and begins to load a dryer.
28 A Norman moves to help.
29 A She stops him with a look.
30 D LEOCADIA: I'm leaving Friday.
31 D NORMAN: I know.
32 D LEOCADIA: Mom told you?
33 D NORMAN: She didn't have to.
34 A ¶ He takes a sock off the pile, turns it right side out, hands it to her.
35 A She takes it, and he lets his fingers rest against hers a moment too long.
36 D LEOCADIA: Dad.
37 D NORMAN: I'm fine.
38 D LEOCADIA: You're crying.
39 D NORMAN: It's the lint.
40 A ¶ She laughs through her nose.
41 A He turns away, pulls a handkerchief from the trench coat, and blows it with great dignity.
42 D NORMAN [CONT'D] (muttering): Damn lint.
43 A ¶ She loads the rest of the clothes, closes the dryer door, and feeds in quarters one at a time.
44 A The drum begins to turn.
45 D LEOCADIA: Sit with me.
46 A ¶ They sit on the long bench in front of the dryer.
47 A The clothes tumble in warm circles.
48 D NORMAN: Do you have enough socks?
49 D LEOCADIA: Dad.
50 D NORMAN: I'm only asking.
51 A ¶ Her head tips onto his shoulder.
52 A He freezes, then slowly lets his cheek rest against her hair.

### SCENE s02054 | INT. FAMILY DINING ROOM - SUNDAY DINNER
Detected names (may be incomplete or contain aliases): BEATRICE MONTGOMERY-AKINYEMI, TEDDY
1 A ¶ A long table, a good cloth, a roast chicken half carved.
2 A Two places set.
3 A Six empty chairs.
4 A Steam rises from a gravy boat nobody has touched.
5 A ¶ BEATRICE MONTGOMERY-AKINYEMI (60s, pearls, apron over her Sunday dress) carves with unnecessary force.
6 A Across the table, her son THEODORE "TEDDY" MONTGOMERY-AKINYEMI (30s, tie loosened, jaw tight) stirs his peas.
7 D BEATRICE: Everyone's welcome to begin.
8 D TEDDY: Mama, there's no one else.
9 D BEATRICE (to the room): Then no one shall be offended.
10 A ¶ She serves him a slice.
11 A Sets the platter down.
12 A Sits.
13 D BEATRICE [CONT'D]: Your father always said grace.
14 D TEDDY: I'm aware.
15 D BEATRICE: Someone should.
16 D TEDDY: Fine. Bless this food.
17 D BEATRICE: Amen.
18 A ¶ They eat.
19 A Forks clink.
20 A The clock ticks.
21 D BEATRICE [CONT'D] (to herself): Too dry.
22 D TEDDY: It's fine.
23 D BEATRICE: It is not fine. I overcooked it.
24 D TEDDY: Mama.
25 D BEATRICE: I overcooked it because I was thinking about your sister.
26 A ¶ Teddy sets down his fork.
27 D TEDDY: Don't.
28 D BEATRICE: Eight years, Theodore. Eight years she has not sat in that chair.
29 D TEDDY: She has her reasons.
30 D BEATRICE: She has a grudge.
31 D TEDDY: She has a reason!
32 A ¶ His voice cracks across the table.
33 A Beatrice flinches.
34 A A pause.
35 A Teddy pushes back his chair.
36 D TEDDY [CONT'D]: You want to know why she doesn't come? Because every Sunday you set six empty places and call it hope.
37 D BEATRICE: It is hope.
38 D TEDDY: It's a stage set!
39 D BEATRICE: How dare you.
40 D TEDDY: How dare I?
41 A ¶ He stands.
42 A The cloth drags.
43 A Gravy slops.
44 D BEATRICE: Sit down.
45 D TEDDY: No.
46 D BEATRICE: Sit down, Theodore.
47 D TEDDY: I'm thirty-four years old.
48 A ¶ He walks out.
49 A The front door slams.
50 A Beatrice sits alone, staring at the empty chairs.

### SCENE s00541 | INT. SHUTTERED BOWLING ALLEY - IMPROVISED ARBITRATION HALL - DAY
Detected names (may be incomplete or contain aliases): ARBITRATOR ODETTE MARCHAND, COUNSEL ELLIOT VESPER, KHALID RAHMAN
1 A ¶ Lanes polished to a dull glow.
2 A A folding table placed at the foul line, three chairs, a pitcher of water.
3 A Behind them, the pin deck, bare.
4 A Dust floats in light from the high windows.
5 A ¶ ARBITRATOR ODETTE MARCHAND, 60s, in a charcoal suit, sits at the head with a fountain pen and a legal pad.
6 A She hasn't blinked in a minute.
7 A ¶ COUNSEL ELLIOT VESPER, 40s, sleeves rolled, stands at the lane's edge with a stack of exhibits.
8 A His client sits across from him: KHALID RAHMAN, 50s, a contractor's work boots and a clean white shirt, hands folded.
9 D VESPER: Mr. Rahman, you signed the original contract in March.
10 D RAHMAN: Yes.
11 D VESPER: And you understood that it covered the demolition and remediation of the east wing.
12 D RAHMAN: I understood that it covered what I was told it covered.
13 D VESPER: Told by whom?
14 D RAHMAN: By you.
15 A ¶ Marchand's pen scratches.
16 A Vesper smiles thinly.
17 D VESPER: Mr. Rahman, we have a signature on page nineteen.
18 D RAHMAN: You have a signature on page nineteen. You do not have a signature on page twenty. Because page twenty does not exist.
19 A ¶ Vesper's smile stays.
20 A His shoulders tighten.
21 D VESPER: Madam Arbitrator, the witness is characterizing.
22 D MARCHAND: Overruled. Continue.
23 D VESPER: Mr. Rahman. Is it your testimony that the contract was never finalized?
24 D RAHMAN: It's my testimony that the contract you handed me was a draft, and the one you filed with this panel is a forgery.
25 A ¶ The word drops into the lane like a ball.
26 A Nothing rolls.
27 D MARCHAND (quietly): Counsel, that is a serious accusation.
28 D VESPER: Madam Arbitrator, I must --
29 D RAHMAN: Seven years I have built hospitals. Seven. I have never once been accused of cutting corners. And you come here with a paper that says I did.
30 D VESPER: Sit down, Mr. Rahman.
31 D RAHMAN: I am sitting.
32 D VESPER: Then be quiet.
33 D RAHMAN: Or what?
34 A ¶ Vesper leans over the table, close.
35 A Marchand puts down her pen with a click that rings off the pins.
36 D MARCHAND: Counsel. Step back.
37 A ¶ He steps back.
38 A Slow.
39 A He adjusts his cuffs, a tic.
40 D MARCHAND [CONT'D]: Mr. Vesper. How long have you been practicing?
41 D VESPER: Eighteen years.
42 D MARCHAND: And in those eighteen years, have you ever once been handed a document that you knew to be incomplete?
43 D VESPER: Never, Madam.
44 D MARCHAND: Then why does the metadata on exhibit twelve show it was created on Tuesday?
45 A ¶ Vesper does not answer.
46 A Rahman looks at him, then at the arbitrator, then at his own hands.
47 D RAHMAN: I did not want to say.
48 D MARCHAND: Say it.
49 D RAHMAN: I do not care about the money. I care that he is not ashamed.
50 A ¶ Marchand folds her hands.
51 A The high windows glow.
52 A A single bowling ball, stranded on the return rack, catches the light.
53 D MARCHAND: Mr. Vesper. I am suspending this hearing. I am referring exhibit twelve to the bar.
54 D VESPER (barely): Yes, Madam.
55 A ¶ He gathers his papers.
56 A They shake.
57 A The sound of paper is the loudest thing in the building.
