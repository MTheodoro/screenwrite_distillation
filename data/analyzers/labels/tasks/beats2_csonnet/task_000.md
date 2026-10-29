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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_csonnet/group_00000.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s05000 | INT. COMMUNITY GYM - EVENING
Detected names (may be incomplete or contain aliases): PRIYA OKAFOR, COACH TOBIAS REEVE, HOODIE GUY, DESMOND
1 A ¶ Fluorescent hum.
2 A A half-empty weight room.
3 A PRIYA OKAFOR, 17, wraps her hands at the mirror.
4 A COACH TOBIAS REEVE, 50s, stacks plates.
5 A In the corner, a HOODIE GUY sits on a bench, hood up, not lifting.
6 D COACH REEVE (to the room): Ten minutes, people. Anyone who isn't warm in ten minutes is a spectator, and I don't coach spectators.
7 D PRIYA (under her breath): Nobody's here but us.
8 A ¶ She tightens the tape.
9 A The HOODIE GUY doesn't move.
10 D PRIYA [CONT'D] (to Reeve): Coach, who is that? He's been sitting there since I came in.
11 D COACH REEVE: Ask him.
12 D PRIYA: I'm asking you.
13 D COACH REEVE (beat): Then I'd say he's someone waiting for the right moment. Which, at his age, is the only kind of training that matters. You wait, you watch, you tell yourself you're not ready. And then one day the whole building is empty and you're still on the bench.
14 A ¶ The front door SLAMS.
15 A Priya flinches.
16 A The HOODIE GUY stands.
17 D HOODIE GUY (pushing back his hood): Priya. It's me.
18 D PRIYA (beat): Desmond?
19 D DESMOND: Two years, Pri. Two years and you didn't even look.
20 D PRIYA: You told everyone you were moving. You told me you were done with all of this.
21 D DESMOND: I said a lot of things.
22 A ¶ A phone BUZZES on the bench.
23 A He ignores it.
24 D PRIYA (to the room, loud): Does anyone else know about this? Coach? Because it feels like everyone knew but me.
25 D COACH REEVE (quietly): I knew he'd come back. I didn't know when.
26 D PRIYA (muttering): Unbelievable.
27 D DESMOND: Say it to me. Whatever it is. I'd rather you hit me than go quiet.
28 A ¶ Silence.
29 A A weight plate RATTLES on its stand.
30 D PRIYA (beat): I was going to hit you. I practiced it. Every night I stood in front of that mirror and I practiced what I'd do, and now you're standing here with your stupid hood and I just want to know if you ate.
31 D DESMOND (laughing, wet-eyed): I ate.
32 D COACH REEVE: Right. Wraps on, both of you. Ten minutes.
33 A ¶ Priya tosses Desmond a roll of tape.
34 A He catches it.

### SCENE s05001 | INT. NIGHT BUS - MOVING - NIGHT
Detected names (may be incomplete or contain aliases): JUNO MARCHETTI, SAM OKONKWO-REID, BERNIE KOWALCZYK
1 A ¶ Route 9, last run.
2 A Sodium light strobes through rain-streaked windows.
3 A Three passengers and a driver nobody can see.
4 A ¶ CLOSE ON a gym bag on the back seat.
5 A Zipper half open.
6 A Cash.
7 A ¶ JUNO MARCHETTI, 30s, rumpled blazer, sits clutching that bag like a toddler.
8 A Beside the aisle, SAM OKONKWO-REID, late 20s, they/them, buzzcut and a vintage bomber jacket, eats cold fries and watches Juno with a grin.
9 A Across from them, BERNIE KOWALCZYK, 60s, big coat, bigger moustache, sleeps.
10 D SAM: You've been gripping that bag since Harlow Street. Are you carrying a baby or a bomb?
11 D JUNO: It's a gym bag.
12 D SAM: Sweetheart, nobody sweats that much.
13 A ¶ Juno laughs too loud.
14 A Bernie stirs.
15 A Both of them freeze, then relax when he snores again.
16 D JUNO (whispering): Look I need you to stop being charming at me. It's not helping
17 D SAM: Charming is my only setting. They gave me one setting at the factory.
18 A ¶ ANGLE ON the bus mirror.
19 A The driver's eyes, flat, watching.
20 A ¶ The bus LURCHES over a pothole.
21 A The bag tips.
22 A A brick of cash slides into the aisle.
23 A Juno dives, Sam dives, they crack heads, the bag goes sideways, fries everywhere.
24 D JUNO: Ow! Ow, ow
25 D SAM: That was my face!
26 D BERNIE (eyes closed): Kids. Keep it down. Some of us have been robbed before and we're trying to rest.
27 A ¶ Silence.
28 A Juno and Sam stare at him.
29 D BERNIE [CONT'D] (opening one eye): Relax. I'm retired. I don't care whose money it is.
30 A ¶ INSERT - Sam's phone screen: a news alert.
31 A BANK ON FERRIS AVE ROBBED, TWO SUSPECTS AT LARGE.
32 A ¶ Sam turns the screen to Juno slowly.
33 A Juno exhales, sinks into the seat.
34 D JUNO: Okay. Okay. Plan B.
35 D SAM: We had a plan A?
36 D JUNO: Barely.
37 A ¶ BACK TO SCENE.
38 A The bus slows.
39 A Blue light flickers ahead on the wet road.
40 A This is the last time the three of them will be calm.
41 D SAM (grinning anyway): Well. It's been a pleasure being your accomplice.
42 A ¶ Bernie pats the bag, closes his eye again.
43 D BERNIE: Wake me at the courthouse.

### SCENE s05002 | INT. VILLAGE HALL - FUNERAL RECEPTION - AFTERNOON
Detected names (may be incomplete or contain aliases): WAITER, TEENAGERS, HARRIET PEMBERTON, GILES PEMBERTON, THIN WOMAN, TEENAGER, NELL PEMBERTON, MARGARET, ^NELL
1 A ¶ Rain on the tin roof.
2 A Grey light through tall windows.
3 A Trestle tables, sandwiches curling at the corners, an urn of tea gone lukewarm.
4 A ¶ A WAITER circles with a tray of sherry.
5 A Two TEENAGERS in borrowed black hover by the biscuits.
6 A A spaniel sleeps under a table.
7 A ¶ HARRIET PEMBERTON, 50s, pearls and a brittle smile, pours tea.
8 A Her brother GILES PEMBERTON, 50s, tweed and tired, takes a cup.
9 D GILES (accepting the tea, not drinking it): Rather a good turnout, don't you think?
10 D HARRIET (straightening a doily): Rather. Considering Dad didn't speak to half of them.
11 A ¶ Outside, the rain thickens.
12 A A gutter gurgles.
13 D GILES (glancing at the spaniel): Whose dog is that?
14 D HARRIET (shrugging): The vicar's, I should think. Or nobody's.
15 A ¶ A THIN WOMAN in a dark mac stands by the door, dripping, a bag clutched to her chest.
16 A She looks at the room as one looks at a station timetable.
17 D GILES (low, to Harriet): Do you know her?
18 D HARRIET (not looking): Wasn't she at the church? Back pew?
19 A ¶ Thunder, distant, politely.
20 A ¶ THE WOMAN crosses the room.
21 A She stops in front of Harriet.
22 D THE WOMAN: I'm sorry to intrude. I did think about not coming.
23 D HARRIET (a small cold smile): Not at all. Do have a sandwich.
24 D THE WOMAN (taking one, holding it): That's kind.
25 A ¶ A TEENAGER giggles.
26 A The other elbows him.
27 A The waiter passes with sherry; the woman declines.
28 A ¶ NELL PEMBERTON, 20s, Harriet's daughter, arrives with an umbrella, shaking it dry.
29 D NELL (to Giles): Uncle G, the car park's flooded. Mum, who's this?
30 D HARRIET (brightly): We were just about to find out.
31 D THE WOMAN (setting the sandwich down): My name is Margaret Dunne. Your father and I were together for nineteen years.
32 A ¶ Silence.
33 A The urn ticks as it cools.
34 A The spaniel sighs.
35 D GILES (a little laugh that isn't one): I think there's been some mistake.
36 D HARRIET (very calm): Nineteen years. Dad was married to Mum for thirty-one.
37 D MARGARET (opening her bag): Yes. That's rather the difficulty.
38 D GILES (standing very still): Harriet.
39 D HARRIET (still pouring, tea overflowing the cup): Giles.
40 D ^NELL (stepping between them): Stop it, both of you, you're being appalling.
41 D GILES (to Nell, gentle): Darling, go and find your cousins.
42 D NELL (refusing): No.
43 A ¶ Margaret takes out an envelope and holds it out.
44 A Nobody takes it.
45 D MARGARET: He asked me to give this to you, Harriet. After. Not before. He was very specific.
46 D HARRIET (finally setting the pot down): That does sound like Dad.
47 A ¶ She takes the envelope.
48 A Turns it over.
49 A Her thumb finds the seal.
50 D HARRIET [CONT'D] (quiet): Giles, do be a love and see that Mrs Dunne has a proper cup of tea.
51 D GILES (beat): Of course.
52 A ¶ He pours.
53 A His hands shake.
54 A Rain on the roof, steady now.
55 D HARRIET (opening the envelope): Nineteen years. And not one word.
56 A ¶ She reads.
57 A Her face doesn't change.
58 A The teenagers have stopped giggling.
59 D NELL: Mum?
60 D HARRIET (folding the page): He's left her the house.
61 A ¶ The spaniel lifts its head.
62 A The waiter, discreetly, withdraws with his tray.

### SCENE s05003 | EXT. FISHING BOAT - DECK - DAWN
Detected names (may be incomplete or contain aliases): SEA WREN, MAYA TORRES, LUCAS TORRES, INSERT - PHONE SCREEN, JESS, THE CREW
1 A ¶ Grey sea.
2 A Grey sky.
3 A A trawler, the SEA WREN, rolling slow.
4 A Diesel.
5 A Salt.
6 A ¶ MAYA TORRES, 16, hoodie soaked, sits on an overturned crate.
7 A She holds her phone up.
8 A One bar.
9 A Flickering.
10 A ¶ Her father's boat.
11 A Her first trip out.
12 A Her last.
13 A ¶ LUCAS TORRES, 40s, at the winch, doesn't look at her.
14 A He hauls a net.
15 A She films him.
16 D MAYA: Say hi to the internet, Dad.
17 D LUCAS: No.
18 A ¶ She lowers the phone.
19 A Checks it.
20 A Notifications stacking.
21 D INSERT - PHONE SCREEN: ON PHONE: jess_wells: where r u ON PHONE: jess_wells: ur literally everywhere rn ON PHONE: jess_wells: maya answer
22 A ¶ Maya's thumb hovers.
23 A Wind.
24 A A gull.
25 D MAYA (typing, murmuring): Busy.
26 A ¶ The phone BUZZES.
27 A A call.
28 A She takes it.
29 D JESS [V.O.] (tinny, breathless): Oh my god, finally. Have you seen it?
30 D MAYA: I'm on a boat, Jess.
31 D JESS [V.O.]: Your video has two million views. Two. Million.
32 A ¶ Maya looks at Lucas.
33 A He is hauling.
34 A He didn't hear.
35 D MAYA (low): Which video?
36 D JESS [V.O.]: The one from the dock. Your dad. Yelling at the inspector.
37 A ¶ Silence.
38 A Maya's stomach drops.
39 A She turns her back to him.
40 D MAYA: I deleted that.
41 D JESS [V.O.]: Somebody reposted it. They're calling him the angriest fisherman in America. There's like a hashtag.
42 A ¶ Waves.
43 A Rope creaking.
44 D LUCAS (not turning): Who's on the phone?
45 D MAYA: Nobody.
46 D LUCAS: Maya.
47 A ¶ She ends the call.
48 A Phone dark.
49 A Heart loud.
50 A ¶ THE CREW OF THE NEIGHBOURING BOAT lines the rail, forty yards off.
51 A Phones raised.
52 A They are filming Lucas.
53 A They cheer.
54 D THE CREW (in unison, waving): Angry Fisherman! Angry Fisherman!
55 A ¶ Lucas stops.
56 A Turns.
57 A Looks at them.
58 A Then at her.
59 A ¶ Nothing.
60 D LUCAS (quiet): How long have you known?
61 D MAYA: Since the dock. I posted it. I was going to take it down.
62 D LUCAS: You posted it.
63 D MAYA: It wasn't supposed to blow up. I just thought, people should see what they do to us.
64 A ¶ He wipes his hands on his coat.
65 A Slowly.
66 A He walks toward her.
67 A She stands.
68 A He stops an arm's length away.
69 A ¶ His face.
70 A Unreadable.
71 A ¶ Rain begins.
72 A Soft, then not.
73 D LUCAS: Give me the phone.
74 A ¶ She doesn't.
75 D LUCAS [CONT'D]: Maya. The phone.
76 A ¶ She holds it out.
77 A He takes it.
78 A Looks at the screen.
79 A Her face on it.
80 A His face on it.
81 A Two million.
82 A ¶ Wind.
83 A ¶ He holds it over the rail.
84 D MAYA: Dad, don't.
85 D LUCAS (beat): Show me how to make it say something else.
86 A ¶ She stares.
87 A Then, shaking, she steps beside him, and takes the phone back.
88 D THE CREW (distant, still chanting): Angry Fisherman! Angry Fisherman!
89 A ¶ Maya raises the phone.
90 A Turns the camera on both of them.

### SCENE s05004 | INT. SUBURBAN KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): WINIFRED LAWSON, ARTHUR LAWSON, RIVER LAWSON, DOLORES FINCH, THE CHILDREN, INSERT - PHONE
1 A ¶ Dark.
2 A Candles.
3 A A power cut.
4 A Pots on the stove, stone cold.
5 A ¶ WINIFRED LAWSON, 60s, stirs a bowl of soup by torchlight.
6 A Her husband ARTHUR LAWSON, 60s, kneels at the fuse box.
7 A Their kid RIVER LAWSON, 20s, they/them, scrolls a dead phone.
8 A Their neighbour DOLORES FINCH, 70s, has wandered in with a casserole.
9 A ¶ THE CHILDREN, three nephews in matching pyjamas, sit on the counter in a row.
10 D ARTHUR: It isn't the fuse. It isn't the breaker, it isn't the meter, it is the entire street, and I have told the electricity company four times that the grid in this neighbourhood has been held together by optimism since 1987.
11 D WINIFRED: Arthur.
12 D ARTHUR (beat): I'm saying that when we moved here, there was a man who came round and said, don't worry about the cables, they're very modern. Modern! They've got moss on them.
13 D DOLORES: Mine are fine.
14 D ARTHUR: Yours is on the other transformer, Dolores. You're a different civilisation.
15 A ¶ River holds up the black phone.
16 D RIVER: Dead.
17 D WINIFRED: Then talk to us. We're the next best thing.
18 D THE CHILDREN (in unison): We're hungry.
19 A ¶ Candle flicker.
20 A A fridge hum, absent.
21 A ¶ River's phone lights up, wakes, flickers.
22 A 1 percent.
23 D INSERT - PHONE: ON PHONE: mum: are u ok?? power's out everywhere
24 D RIVER (smiling): Mum's texting. From the next room.
25 D WINIFRED: She is not.
26 A ¶ River turns the screen round.
27 A Winifred reads.
28 A Laughs.
29 A The lights snap on.
30 A Everyone blinks.
31 A Arthur stands there with a screwdriver, triumphant, wrong.

### SCENE s05005 | INT. BACK ROOM OF A BAR - NIGHT
Detected names (may be incomplete or contain aliases): ODALYS, JONAH, TAMSIN, RAFE
1 A ¶ low light, mismatched chairs. a long table. four people who have only ever typed to each other.
2 A ¶ jonah kasprzak, 30s, in a faded army jacket, gets there first. he turns a phone over and over in his hand.
3 A ¶ CLOSE ON the phone. a group chat. the name at the top reads: BRAVO 6 (reunion?).
4 A ¶ odalys pierce, 40, walks in wearing scrubs and a heavy coat. she stops. looks at him.
5 D ODALYS: you're boots.
6 D JONAH: you're mama bear.
7 D ODALYS: yeah. oh my god. hi.
8 A ¶ they hug, awkward, too long. behind them, tamsin, 20s, with a shaved head and a trembling duffel, hovers in the doorway.
9 D TAMSIN: is this the. is this where
10 D JONAH: yeah come in, come in
11 D TAMSIN: okay. cool. i'm tams. i'm. yeah.
12 D ODALYS: tams! the kid who sent the ramen pics
13 D TAMSIN: that was in basic. that was a long time ago
14 A ¶ ANGLE ON the door. rafe oyelaran, 50, sixty pounds heavier than any photo, leans on a cane. nobody says anything.
15 D RAFE: well. don't everybody get up.
16 D JONAH (standing): sarge
17 D RAFE: jonah. sit down. i'm not your sarge in a bar.
18 D ODALYS: rafe, you look
19 D RAFE: like hell. yes.
20 A ¶ everyone laughs, a little too hard. chairs scrape. nobody quite sits.
21 D TAMSIN: i didn't think i'd come. i almost didn't. i was in the car for like an hour
22 D ODALYS: we all did that
23 D JONAH: i drove past twice
24 D RAFE: three times.
25 D JONAH: you were here?
26 D RAFE: i was in the lot.
27 A ¶ this is the first time in nine years all four of them are in a room. none of them knows how to say what they mean.
28 D ODALYS: so. who's ordering. because i need a drink and i need somebody to say something about the chat
29 D TAMSIN: the chat
30 D RAFE: the thing in march
31 D JONAH (quietly): we don't have to
32 D ODALYS: yes we do. jonah. that's the whole reason
33 A ¶ a long pause. a glass clinks somewhere in the bar. tamsin sits first, then the others.
34 D TAMSIN: okay. so. i'll start

### SCENE s05006 | INT. SUBWAY CAR - MOVING - DAY
Detected names (may be incomplete or contain aliases): KENJI ABARA, JAMAL STRICKLAND, COMMUTERS, DEE ABARA
1 A ¶ ON CAMERA: handheld, shaky.
2 A Rush hour.
3 A Bodies.
4 A Breath.
5 A ¶ KENJI ABARA, 17, holds a camcorder at chest height.
6 A Narrating low to his lens.
7 D KENJI (whispering, to camera): Day three. Same car. Same guy.
8 A ¶ PAN to JAMAL STRICKLAND, 40s, suit, earbuds in, pressed against the doors.
9 A Not looking at anyone.
10 A ¶ Crowd.
11 D KENJI [CONT'D] (still whispering): He gets on at Fulton. Every day. Stands right there. Takes up the whole pole.
12 A ¶ Train lurches.
13 A Squeal of brakes.
14 A ¶ THE COMMUTERS shift as one, a wall of coats and elbows.
15 A A bag swings into Kenji.
16 D COMMUTERS (muttering): Sorry. Excuse me. Mind the door.
17 A ¶ Silence.
18 A ¶ Kenji lowers the camera.
19 A Raises it again, slightly higher.
20 D KENJI (to Jamal): Hey. Your hand's on my sister's bag.
21 D JAMAL (pulling an earbud, flat): What?
22 D KENJI (louder): Her bag. You've been touching it for three stops.
23 A ¶ Nothing.
24 A The car goes quiet around them.
25 A Someone looks at their shoes.
26 A ¶ A young woman, DEE ABARA, 15, Kenji's sister, edges forward, clutching the strap against her chest.
27 A She doesn't look up.
28 D JAMAL (smiling thinly, to the car): Kid's confused. Crowded train. It happens.
29 A ¶ Kenji's grip on the camera whitens.
30 A The light on the lens glows red.
31 D KENJI (very quiet): Say it again. Into the camera.
32 A ¶ Jamal's smile drops.
33 A He lunges for the lens, Kenji pulls back, Dee shoves between them, a briefcase hits the floor, THE COMMUTERS surge back, the pole shakes, a stranger shouts for the emergency cord.
34 A ¶ The camera tumbles.
35 A Spins.
36 A The floor.
37 A Shoes.
38 A Black.

### SCENE s05007 | INT. NEOSPORT ARENA - FINALS STAGE - NIGHT
Detected names (may be incomplete or contain aliases): HEAD REFEREE LIANG PETROV, TECHNICAL DIRECTOR AMARA SOYINKA, ADJUDICATOR FELIX BRANDT, PANEL, HOODIE PLAYER, DANTE
1 A ¶ Banks of LED.
2 A Ten thousand seats, a hush.
3 A Six chairs on a raised dais, six headsets.
4 A Stage lights low.
5 A Overhead, a countdown reads 00:04.
6 A ¶ The match has been decided.
7 A Aftermath: the winners hold position, the losers don't.
8 A ¶ HEAD REFEREE LIANG PETROV, 40s, headset and clipboard, stands at the bench with TECHNICAL DIRECTOR AMARA SOYINKA, 30s, laptop on a cart, and ADJUDICATOR FELIX BRANDT, 50s, steel-rimmed glasses and a rulebook.
9 A ¶ CLOSE ON the main screen.
10 A The final frame freezes: a character mid-leap, a glitch rippling across its sprite.
11 D PETROV (into radio): Hold the broadcast. All stations hold. Judges to the dais.
12 D SOYINKA (typing): I've got packet loss on station four. Latency spiked at one-forty-two. That's not their connection. That's us.
13 D BRANDT: Rule eleven point three. Interference by hardware fault voids the round if verified within sixty seconds. We are at fifty.
14 A ¶ THE ARBITERS' PANEL, five officials in grey blazers, file up the steps as one, tablets raised, faces unreadable.
15 A ¶ ANGLE ON station four.
16 A A competitor, a HOODIE PLAYER, lowers his hands from the keyboard and sits perfectly still, hood up, eyes down.
17 D PETROV: Who's on four?
18 D SOYINKA: Registered as Ghost_Rider. Real name's not on the sheet. He signed in under a handle.
19 D BRANDT (sharp): Under a handle? That's a violation. Players must register legal names before qualifiers.
20 A ¶ THE HOODIE PLAYER pulls back his hood.
21 A Late 20s, calm, a faint grin.
22 A DANTE VASQUEZ.
23 D DANTE (into mic, to the crowd): Dante Vasquez. Since you asked.
24 A ¶ Murmur.
25 A The ten thousand lean in.
26 A Soyinka turns her screen to Petrov.
27 A Brandt flips pages, Petrov unclips his radio, the panel exchanges glances, and the countdown ticks to zero.
28 D SOYINKA (quiet): It's not a fault, Liang. It's a patch. Someone pushed a build during the round. The signature is his.
29 A ¶ WE SEE Dante rise, step off the dais, and hand the referee a drive.
30 D DANTE: It's all on there. Every match. Every edit. I wanted somebody to ask.
31 D PETROV (taking it, exhaling): Right. Everybody sit down. We're going to do this by the book.

### SCENE s05009 | EXT. BORDER CHECKPOINT - DUSTY ROAD - DAY
Detected names (may be incomplete or contain aliases): MARSHAL ELIAS CROWE, ROSALIND BEAUMONT, SHERIFF
1 A ¶ A single wooden gate.
2 A A booth.
3 A A flag that has given up.
4 A Heat shimmer over the gravel.
5 A ¶ MARSHAL ELIAS CROWE, 50s, dust on his hat, leans out of the booth.
6 A Before him, on a mule, sits ROSALIND BEAUMONT, 40s, rifle across her lap, face like closed shutters.
7 D CROWE: Papers.
8 D ROSALIND: Ain't got none.
9 D CROWE: Then you ain't crossing.
10 D ROSALIND (beat): You know what the last man who said that to me said after?
11 D CROWE: I'd wager nothing.
12 D ROSALIND: Nothing. That's right. Funny how that works.
13 A ¶ Crowe's phone RINGS in the booth.
14 A An old landline, cord and all.
15 A He lifts it.
16 D CROWE (into receiver): Checkpoint.
17 D SHERIFF [V.O.] (crackling): Elias, hold her. Don't let her through. She's got a warrant out in three counties.
18 A ¶ Crowe looks at Rosalind.
19 A She hasn't moved.
20 A He lowers the receiver slowly.
21 D CROWE (to her): Sheriff says I should hold you.
22 D ROSALIND (softly): And what do you say?
23 D CROWE (long beat): I say it's hot. And I'm tired. And in thirty years nobody ever asked me what I wanted. Not once.
24 A ¶ He hangs up the phone.
25 A Opens the gate.
26 D CROWE [CONT'D]: Go on. Before I think better of it.
27 D ROSALIND (touching her hat): You'll regret it.
28 D CROWE: Probably. That's what the gate's for.
29 A ¶ She clicks her tongue.
30 A The mule crosses.
31 A Dust rises.
32 A Crowe watches until she is a speck, then picks the receiver up again, and tells the sheriff she never came.

### SCENE s05010 | INT. PIZZA PLACE - DAY
Detected names (may be incomplete or contain aliases): PRIYA, JAYDEN, MOONBEAM, DEVON
1 D PRIYA (checking her phone, then the door): ok its 3:02 and nobody from the chat has shown up. this is so cringe
2 D JAYDEN (sliding into the booth, hood up): Priya? Its me. Jayden. "xX_sk8rboi_Xx" lol
3 D PRIYA (staring): you're my HALF BROTHER?? you told me you were 19 and lived in Denver
4 D JAYDEN (wincing as a waiter drops a tray nearby): I said I was nineteen in the chat because everybody there was older okay
5 D PRIYA (typing furious, thumbs flying): im telling mom right now
6 D MOONBEAM [V.O.] (from Priya's phone speaker, tinny): Wait wait dont, I'm literally outside the window, look left
7 D PRIYA (turning, a dog on the sidewalk pulling its owner past the glass): omg that's Moonbeam?? they're like twelve??
8 D MOONBEAM (they push through the door, backpack sliding off one shoulder): Fifteen. And they/them thank you. Hi. Please dont yell I brought snacks
9 D PRIYA (shouting, two teenagers at the next table turning to stare): I AM NOT YELLING
10 D JAYDEN (shouting over her): YOU ARE LITERALLY YELLING
11 D DEVON (arriving breathless, helmet still on): Sorry im late guys the bus driver was a nightmare, wait. Why is everyone here a kid
12 D PRIYA (laughing despite herself, wiping her eyes): because we are ALL kids Devon. every single one of us
13 D MOONBEAM (sitting, pushing the snacks to the middle of the table): Ok so group chat is real now. Who's getting the garlic knots
14 D JAYDEN (grinning, finally pulling his hood down): Me. I'm paying. Peace offering

### SCENE s05011 | INT. HARBOR ROAD VETERINARY CLINIC - WAITING ROOM - DAY
Detected names (may be incomplete or contain aliases): MO, THE WOMAN, SAM, JEN, BIG DAVE
1 D MO (behind the desk, not looking up from the screen): Mrs. K's beagle is in room two. Dr. Sam says give her ten minutes.
2 D THE WOMAN (standing at the counter, a cat carrier held tight against her chest): I don't have ten minutes. I have a cat who hasn't eaten since Sunday and a boss who thinks I'm at a dentist.
3 D MO (beat): I'm sorry. I really am. But it's triage. Whoever's worst goes first.
4 D THE WOMAN (setting the carrier down very carefully): He is the worst. Look at him. Look. (beat) You're not looking.
5 D MO (looking now, softer): Okay. Okay, he's not great. Give me one second.
6 D SAM (coming through the swinging door, drying her hands on her scrubs): Mo, who's shouting?
7 D MO (not turning): Nobody's shouting. Yet.
8 D THE WOMAN (to Sam, quick): Are you the doctor? Please. I'll sign anything. I'll wait in the car. Just look at him.
9 D SAM (kneeling by the carrier, a long breath): Hi there, buddy. Hi. (beat) What's his name?
10 D THE WOMAN (after a moment, quieter): Biscuit. He was my husband's. Ex-husband's. He left him. He left the cat and not me, which, I mean, tells you something.
11 D SAM (a small smile, still watching the cat): It tells me he was an idiot.
12 D MO (quietly, to no one): Wow. Okay.
13 D SAM (standing, looking at Mo): Don't start.
14 D MO (finally turning): I'm not starting. I'm just saying you've been in this clinic eleven years and you've never once said "idiot" about a client's ex.
15 D THE WOMAN (to Mo, surprised): Are you two--
16 D MO (flat): No.
17 D SAM (at the same time): We were.
18 D MO (sharp): Sam.
19 D SAM (to the Woman, gentle): Her name's Jen, right? On the intake form. Jen, if you come through, I'll see Biscuit first. Mrs. K can wait.
20 D JEN (picking up the carrier, hesitating): Thank you. I didn't mean to cause--
21 D MO (cutting in): You didn't. She did.
22 D SAM (turning on Mo, low): Mo. Not here.
23 D MO (louder): Then where? In the supply closet, like last March? On the phone, at two a.m., like last June?
24 D JEN (awkward, edging back): I can wait outside, really--
25 D SAM (not looking away from Mo): Stay, Jen. Please. (beat) Mo, I was trying to be kind to her.
26 D MO (laughing, not a happy laugh): You were trying to be kind to HER. That's perfect. You've got infinite kindness for strangers and animals and nothing left over for the person who actually--
27 D BIG DAVE (pushing the front door open with his shoulder, a golden retriever on a short lead, a bandaged paw held up): Hey. Hey, folks. Sorry, is this a bad time? Roscoe cut himself on a bottle. It's not an emergency, he's just being dramatic.
28 D MO (turning, composing her face with visible effort): Hi, Dave. No. It's fine. It's a great time.
29 D BIG DAVE (looking from Mo to Sam to Jen): Is it? Because it feels like I walked in on something.
30 D JEN (to Big Dave, helpless): I just came in with a cat.
31 D BIG DAVE (nodding slowly, sitting on the bench): Sure. Sure you did.
32 D SAM (to Mo, quieter now): I should have said something. Last spring. Before it got to this.
33 D MO (her voice cracking): You should have said something in April. In May. At my sister's wedding, when you danced with me and then drove home alone.
34 D SAM (a step closer): I was scared.
35 D MO (over her): You're not scared of anything. You put your arm inside a horse.
36 D SAM (over Mo, desperate): A horse doesn't look at me like you do.
37 D JEN (whispering to Big Dave): Should we go?
38 D BIG DAVE (whispering back, not moving): Absolutely not.
39 D MO (a long beat, then, very still): Say it again.
40 D SAM (beat): A horse doesn't look at me like you do.
41 D MO (quietly): No. The other thing. The first thing.
42 D SAM (beat): I was scared. I'm still scared. I'm scared right now.
43 D MO (a breath, then a laugh that breaks into something else): God. You are such an idiot.
44 D SAM (wiping her eyes with the back of her wrist): That's what I said about him.
45 D BIG DAVE (to Jen, soft): This is better than the cat.
46 D JEN (a startled laugh, then a nod): It really is.
47 D MO (coming around the desk at last): Go see Biscuit. Both of you. I'll hold the front.
48 D SAM (not moving): And after?
49 D MO (beat): After, you buy me a coffee and you say all of it again. In daylight. Where nobody's watching.
50 D BIG DAVE (raising his hand): I'm watching.
51 D MO (not turning): Dave.
52 D BIG DAVE (lowering it): Right. Sorry. Roscoe and I will be over here. Being dramatic.

### SCENE s05013 | INT. HOLLOWAY HOUSE - KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): SAM, JULES
1 A ¶ The lights died at nine and the whole street went dark with them, and now a single candle gutters on the formica table while Sam Holloway, who has not slept properly since the summer of 1974, pours two fingers of rye into a chipped mug, and Jules, Sam's partner at the precinct, leans against the humming, silent fridge with a flashlight pointed at the floor and a cigarette burning down between two nicotine-stained fingers.
2 D SAM [V.O.]: Rule one of a blackout. Nobody trusts anybody. Not even the guy who drove you here.
3 D JULES: They cut the phone lines before the power. That's not weather, Sam.
4 D SAM (drinking): I know what it is.
5 D SAM [V.O.]: I knew the day I took the badge that every kitchen in this city would end up like this one. Quiet. Waiting for the other shoe.
6 D JULES (low): They're across the street. I counted two. Maybe three.
7 D SAM: They have a way of looking at the window. Same way my father looked at it. Like it owed him money.
8 A ¶ Jules clicks the flashlight off.
9 A The candle jumps.
10 A A car idles somewhere outside, headlights sweeping the curtains once, twice, and moving on.
11 D JULES: So we sit here and drink?
12 D SAM (setting the mug down): We sit here and listen.
13 D SAM [V.O.]: The truth about waiting is that it never ends. It just changes clothes.

### SCENE s05015 | INT. NEON ARENA - MAIN STAGE - NIGHT
Detected names (may be incomplete or contain aliases): AVA, RAY, WALT, STRANGER, MARCUS
1 A ¶ BOOM.
2 A Lights slam on.
3 A Ten thousand fans ROAR.
4 A ¶ ANGLE ON a glowing stage, two gaming rigs, a giant screen counting down from ten.
5 A ¶ Ava, 12, sits at the left rig, headset crooked, knuckles white.
6 D AVA (cracking her fingers, eyes locked on the screen): Ten seconds, Dad. Ten.
7 A ¶ Her father Ray, 40s, crouches at her side with a water bottle and a sweat-soaked T-shirt.
8 D RAY (handing her the bottle, jaw tight): Breathe, Ava. Breathe, kiddo. You've got this.
9 A ¶ BEEP.
10 A BEEP.
11 A BEEP.
12 A ¶ CLOSE ON Ava's thumbs, hovering over the controller.
13 A ¶ On the giant screen: GAME START.
14 D AVA (hammering the buttons): Left flank! Left flank! Where's Grandpa?!
15 A ¶ INSERT - PHONE SCREEN: "GRANDPA WALT CALLING."
16 A ¶ Ray's phone BUZZES on the desk.
17 A He swipes it open and props it against the monitor.
18 D WALT [V.O.] (crackling, from the phone): Is she winning? Tell me she's winning. I've got the whole bingo hall watching!
19 D RAY (shouting over the crowd): She's winning, Dad! She's down to the last round!
20 A ¶ BACK TO SCENE.
21 A ¶ On the right rig: the rival, a hooded STRANGER, face lit blue by the screen, fingers a blur.
22 D STRANGER (muttering): Not today, little one.
23 A ¶ KRAKOOM.
24 A Sparks erupt across the big screen.
25 A The crowd GASPS.
26 D AVA (jaw clenched): Dad, he's got the golden shield!
27 D RAY (leaning in): So take it from him!
28 D AVA (typing, teeth bared): I'm trying!
29 A ¶ WE SEE the Stranger's screen mirror Ava's: two avatars, one mountain, one flag.
30 D WALT [V.O.] (yelling): Ava! Remember what I taught you! Duck and weave!
31 D AVA (not looking away): It's a video game, Grandpa, not boxing!
32 A ¶ WHAM.
33 A The Stranger's avatar knocks hers back a step.
34 D STRANGER (peeling off his hood, grinning, suddenly kind): Nice one, kid. I'm Marcus, by the way. Marcus Bell. I played your dad back in the day.
35 D RAY (stunned, half-rising): Marcus?! You're THE Marcus?!
36 D MARCUS (still tapping, easy): Yep. Still got the reflexes.
37 D AVA (furious, tapping faster): Dad! Don't talk to the enemy!
38 D RAY (sitting back down fast): Sorry! Sorry, kiddo, focus!
39 A ¶ CLOSE ON the countdown: 00:09.
40 A 00:08.
41 A 00:07.
42 D WALT [V.O.] (from the phone, crackling): Seven seconds! Go, go, GO!
43 A ¶ CRASH.
44 A The big screen explodes in light.

### SCENE s05016 | EXT. BORDER CHECKPOINT - DAY
Detected names (may be incomplete or contain aliases): KIT, LEO, OKOYE, BRANDT
1 A ¶ heat coming off the asphalt. a line of cars not moving. a dog on a leash sniffs a tire while a man in a vest watches it like it might say something.
2 A ¶ Kit, 30s, sits behind the wheel of a dusty hatchback, window down, passport already in hand.
3 A Beside her, her brother Leo, 20s, picks at the seam of the seat.
4 D KIT: ok so if he asks, we're visiting our aunt
5 D LEO: we don't have an aunt
6 D KIT: we do now
7 A ¶ Officer Daria Okoye, 40s, walks up to the window, clipboard tucked under one arm.
8 D OKOYE: morning. where you headed today
9 D KIT (too fast): to see our aunt. she's, um. she's not well.
10 D OKOYE: she have a name
11 D KIT: yeah. it's. Marguerite.
12 D LEO (at the same moment): Margaret.
13 A ¶ They look at each other.
14 A Okoye does not move.
15 D OKOYE: which is it
16 D KIT: both. it's a nickname thing, she goes by both, it's a whole thing in the family
17 A ¶ Behind them, a kid in the next car presses his face to the glass.
18 A His mom pulls him back.
19 A A second officer, Brandt, 50s, drifts toward the hatchback from the other side, hand resting near his belt.
20 D BRANDT: trunk, please
21 D LEO: there's nothing in it
22 D BRANDT: then it'll be quick
23 A ¶ Kit and Leo both freeze.
24 A The dog lifts its head.
25 A Brandt and Okoye exchange a look.
26 D KIT (very quiet, to Leo): if you run i swear to god
27 D LEO (equally quiet): i'm not running. you're the one who wanted to come this way
28 A ¶ Leo pops the trunk.
29 A Brandt lifts the lid.
30 A Inside: a cooler, a sleeping bag, a framed photograph of an older woman.
31 D BRANDT (reading the back): Marguerite Margaret Vance. 1951.
32 D KIT (exhaling): told you
33 A ¶ Okoye lowers the clipboard.
34 A For a second nobody speaks.
35 A Then Okoye almost smiles.
36 D OKOYE: go on. drive safe. and say hi to your aunt for me
37 A ¶ Kit and Leo both laugh, a little too loud, as the barrier lifts and the cars behind them start to honk.

### SCENE s05018 | INT. CITY PAROLE OFFICE - RECEPTION - MORNING
Detected names (may be incomplete or contain aliases): FRANKIE, PRIYA, THE TEENAGERS, THE GUARDS, BUCKET CLANGS
1 A ¶ A beige room full of bad lighting and worse chairs.
2 A Two teenagers in the corner share earbuds and a bag of chips.
3 A A janitor's mop bucket sits unattended by the water cooler.
4 A ¶ Frankie Dunn, 30s, charming and doomed, bursts through the door with a coffee in each hand and a paper bag in his teeth.
5 A He trips over the mop bucket.
6 A Water SLOSHES across the floor.
7 D FRANKIE (through the bag): Mmf! Mmmf!
8 A ¶ He spits the bag out.
9 A Behind the desk, Officer Priya Nair, 30s, unflappable and unimpressed, looks up from a stack of files.
10 D PRIYA: Mr. Dunn. You're eleven minutes late.
11 D FRANKIE: Priya! Officer Priya! Light of my life! I brought you a latte, the good kind, with the little heart in the foam.
12 D PRIYA: It's a cortado. And I'm not a morning person.
13 D FRANKIE: I know. That's why I got two. One for you, one for me, one for the guy who's gonna ask me why I brought two.
14 D PRIYA: That's three, Frankie.
15 D FRANKIE (looking at his hands): Is it? Huh. I only have two hands.
16 A ¶ He slips on the wet floor, the coffees fly, and both cups SPLAT against the wall.
17 A The teenagers gasp.
18 A One of them films it.
19 D THE TEENAGERS (together, delighted): Whoa.
20 D PRIYA (pinching the bridge of her nose): Frankie. Sit down.
21 D FRANKIE (dripping): Yes, ma'am. Absolutely, ma'am. Sitting.
22 A ¶ He plops into a chair.
23 A It COLLAPSES with a CRACK.
24 A He lands on the floor, legs in the air.
25 D PRIYA (not even blinking): I'm adding that to the report.
26 D FRANKIE (from the floor): Priya. I need to tell you something.
27 D PRIYA: You need to give me your check-in form.
28 D FRANKIE: I have it. It's in my pocket. It's a little wet.
29 A ¶ He fishes out a soggy paper ball and holds it up like a trophy.
30 A She takes it between two fingers.
31 D PRIYA: This is a tax receipt for a hot dog.
32 D FRANKIE: It was a very good hot dog.
33 D PRIYA (finally, a crack of a smile): You are the worst parolee I have ever had.
34 D FRANKIE (sitting up, earnest): But am I your favorite?
35 D PRIYA (looking away, fighting it): That's not a thing.
36 D FRANKIE: That is totally a thing. You're smiling.
37 D PRIYA: I'm not.
38 D FRANKIE: You are! Your whole face is doing it.
39 A ¶ The door BANGS open.
40 A THE GUARDS, two enormous men in matching uniforms, stand in the frame.
41 D THE GUARDS (together, deadpan): Everything okay in here?
42 D PRIYA (straightening, all business): Fine. Mr. Dunn was just leaving.
43 D FRANKIE (scrambling up): I was? Oh. I was. Yes. Leaving. Great. Love that for me.
44 D PRIYA (stopping him with one finger): Thursday. Ten sharp. Bring a real receipt.
45 D FRANKIE (beaming): Bring you a coffee too?
46 D PRIYA (sighing, a warmth she can't hide): Just the one this time, Frankie.
47 D FRANKIE (backing out the door, bowing): One coffee, Priya. One. You got it.
48 A ¶ He steps in the mop bucket again.
49 A The BUCKET CLANGS.
50 A The door SLAMS behind him.
51 A The teenagers burst into applause.
52 D PRIYA (to the room, under her breath): Unbelievable.
53 A ¶ She picks up the soggy receipt, studies it, and tucks it into her drawer instead of the trash.

### SCENE s05019 | INT. SUDS AND SPIN LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): THE STRANGER, TOM, DANA
1 A ¶ Midnight.
2 A The street outside is empty and dark.
3 A Inside, one fluorescent light buzzes above a row of dryers, all of them still.
4 A A single machine in the back tumbles slowly, the clothes inside going around and around.
5 A ¶ Tom, 20s, sits on a plastic chair with a gym bag between his feet, a flashlight and a half-eaten granola bar in his lap.
6 A He has not spoken in a long time.
7 A ¶ On the other side of the room, a figure in a wet raincoat sits with her back to the wall, a hood pulled low.
8 A THE STRANGER has been there since the power went out two days ago.
9 A Neither of them has said why they are here.
10 D TOM (finally): Is that machine still working?
11 D THE STRANGER: Just the one. I think it's on a different circuit.
12 D TOM: Huh.
13 A ¶ A long pause.
14 A The dryer thumps.
15 A Water drips somewhere behind the wall.
16 D TOM [CONT'D]: How much food do you have left?
17 D THE STRANGER: Not a lot. Some crackers. A can of beans I can't open.
18 D TOM: I have a can opener. On my keys.
19 D THE STRANGER (a short breath that is almost a laugh): Of course you do.
20 A ¶ Tom stands, crosses the room, and holds out the keyring.
21 A She takes it without looking up.
22 A The can opens with a tiny, rusty squeak.
23 D THE STRANGER [CONT'D] (pushing back her hood): Thanks. I'm Dana, by the way.
24 D TOM: Tom.
25 D DANA: I know. It's on your bag.
26 D TOM (glancing down, almost smiling): Right.
27 A ¶ They sit in silence for a while, the only sounds the dryer and the dripping water.
28 A Dana eats a spoonful of beans, offers the can.
29 A Tom takes it, eats, hands it back.
30 D DANA: You think anyone's coming?
31 D TOM: I don't know. Eventually.
32 D DANA: Eventually is a long time.
33 D TOM (quietly): It's all we've got.
34 A ¶ The dryer finally slows.
35 A It clunks, groans, and stops.
36 A The room is utterly still.
37 A Dana looks at the dead machine, then at Tom.
38 D DANA: Well. At least the towels are warm.
39 A ¶ Tom laughs, a real one, small and cracked.
40 A Dana laughs too.
41 A Outside, far off, a single siren starts up and fades away again.

### SCENE s05020 | INT. FOOD TRUCK - NIGHT
Detected names (may be incomplete or contain aliases): KIM, KIP
1 A ¶ Grill hissing.
2 A Kim flips a patty, eyes on the window.
3 A ¶ Her phone BUZZES on the counter.
4 A She puts it on speaker.
5 D KIM: Where are you?
6 D KIP [V.O.]: Two minutes out. Is he there?
7 D KIM: Black sedan. Same spot. Engine running.
8 D KIP [V.O.]: Don't look at him.
9 D KIM: I'm not looking.
10 A ¶ She looks.
11 A Quick.
12 A Back to the grill.
13 D KIP [V.O.]: Kim.
14 D KIM: I know.
15 D KIP [V.O.]: Hand me the bag when I knock. Don't say a word.
16 D KIM: You said the bag was clean.
17 D KIP [V.O.]: It is.
18 A ¶ A beat.
19 A The sedan's door OPENS.
20 D KIM: Kip. He's walking over.
21 D KIP [V.O.]: Stall him.
22 A ¶ Kim wipes her hands.
23 A Smiles.
24 A Slides the window open.
25 D KIM: What can I get you?

### SCENE s05022 | INT. COUNTY PAROLE OFFICE - OPEN-PLAN DESK AREA - DAY
Detected names (may be incomplete or contain aliases): DANA REED, SCREEN, DAN
1 A ¶ Cubicles, a dying ficus, a laptop propped on a stack of case files.
2 A Officer DANA REED sits on a Zoom call.
3 A On screen, Dan Reyes, 40s, sits in a kitchen, mug in hand.
4 A ¶ ON SCREEN (SLACK): #parole-team - Gus: reminder, Reyes check-in at 2, pls be nice
5 D DANA: Dan, thanks for logging in. Three months clean, nice work.
6 D DAN [V.O.]: Thanks, Officer Reed. Job's going good. Warehouse hired me full time.
7 D DANA: Great. And the ankle monitor is charging overnight?
8 D DAN [V.O.]: Every night. Plugged in by the bed.
9 D DANA: Good. And you haven't been near Fulton Street?
10 D DAN [V.O.]: No, ma'am. Not once.
11 A ¶ Across the room Officer GUS PARRA's monitor BUZZES.
12 A He frowns, leans in, and goes pale.
13 A ¶ ON SCREEN (SLACK): Gus: Dana.
14 A DANA.
15 A Pull up his GPS.
16 A Now.
17 D DANA (reading, still smiling at the camera): Dan, can you hold your mug a little closer to the screen?
18 D DAN [V.O.]: Sure.
19 A ¶ Behind him, through the window, a street sign.
20 A FULTON ST. A door SLAMS somewhere in the office.
21 D DANA: Interesting kitchen.
22 D DAN [V.O.]: Officer Reed, I can explain.

### SCENE s05023 | INT. NEON ARENA - ESPORTS TOURNAMENT - NIGHT
Detected names (may be incomplete or contain aliases): WEI, JONAS, BIANCA
1 A ¶ Rain on the glass roof of the arena.
2 A Thousand of fans in the dark with glowing sticks, the casters voices loud on the speakers, blue light on every face, and under the stage Wei in a fake staff jacket is carrying a cable box past two security guards who are watching the big screen and not him while Jonas sits at the final table with his headset on, his hand perfectly steady on the mouse and Bianca stands in the back corridor with a coffee she is not drinking.
3 A ¶ Smoke machine.
4 A Bass in the floor.
5 A Somewhere a child crying from happiness.
6 D WEI (he wipes his palms on the jacket): Box is in. Two minutes.
7 D JONAS (headset on, eyes on the screen, he clicks twice): You said one minute before.
8 D WEI (he checks the watch): The guard changed. It happens.
9 D BIANCA (she puts the coffee down on a crate): Then we are not late. We are just on time slower.
10 D JONAS (a tiny nod, he does not look at either of them): Bianca your voice is too loud.
11 A ¶ The rain gets harder.
12 A A bright flash from the stage, the crowd screams, the casters say a name that is not Jonas.
13 D BIANCA (she moves closer to the door): They are looking at you. The man in the grey suit. Left side.
14 D WEI (he puts the box down very slowly): Which man.
15 D BIANCA (she does not point, she only lifts her chin): The one who is not clapping.
16 A ¶ Wind pushes at the roof.
17 A Cold air comes under the door.
18 A Far away a guard laughs at something on his phone.
19 D JONAS (he types something fast, then removes his hands from the keyboard and puts them on his knees): Done. Money is moving. Nobody stand up.
20 D WEI (he smiles with only half of his mouth): Then why is your leg shaking.
21 D JONAS (he presses the knee flat with his palm): Because I am going to win this game also.
22 D BIANCA (she opens the door a little, one finger on the handle): The grey suit is gone.
23 A ¶ Nobody speaks.
24 A On the screen the countdown goes to ten.

### SCENE s05025 | INT. NIGHT BUS - MOVING - NIGHT
Detected names (may be incomplete or contain aliases): TESS, LORNA
1 A ¶ WE SEE a half-empty bus crossing the city in heavy rain.
2 A ¶ Rain.
3 A ¶ CLOSE ON TESS, 17, forehead against the cold window.
4 A She is angry, and she is trying to hide that she is angry, which is very obvious to the audience.
5 A ¶ Her phone.
6 A Dead.
7 A ¶ Dark streets.
8 A Nothing.
9 A ¶ A woman's phone RINGS from Tess's bag.
10 A Not Tess's phone.
11 A Her mother's old phone, which she took without asking.
12 A ¶ INSERT - PHONE SCREEN: "MUM CALLING".
13 A ¶ Tess looks at it.
14 A Does not answer.
15 A It rings again.
16 A ¶ Silence.
17 A ¶ She answers.
18 D LORNA [V.O.]: Tess? Where are you? It's one in the morning!
19 D TESS: On a bus.
20 D LORNA [V.O.]: Which bus? Which road? I have been calling for hours.
21 D TESS: You were calling the other phone. The dead one.
22 A ¶ ANGLE ON Tess's hand, gripping the phone so hard her knuckles go white.
23 A This is the last time they will speak before everything changes.
24 D LORNA [V.O.]: Come home. We can talk about Dad in the morning.
25 D TESS: There is nothing to talk about. You didn't tell me, Mum. He's been gone for a month and you let me think he was on a trip.
26 A ¶ Nothing.
27 D LORNA [V.O.]: I was trying to protect you.
28 D TESS (screaming now): You were protecting YOURSELF!
29 A ¶ The other passengers turn.
30 A The driver's eyes in the mirror.
31 A ¶ BACK TO SCENE.
32 A Tess stands, the phone raised like she will throw it.
33 D TESS [CONT'D]: Don't call me again!
34 A ¶ She throws it.
35 A It SMASHES against the bus floor.
36 A ¶ Rain.
37 A Only rain.

### SCENE s05026 | INT. POPPY'S KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): POPPY, BEN, THE TWINS
1 A ¶ The whole street is dark.
2 A One candle on the counter, one torch in Poppy's mouth.
3 A She is on her knees, head inside an open cupboard.
4 D POPPY (muffled, torch in mouth): I know I have matches. I bought matches. I remember the matches.
5 D BEN (he stands in the doorway holding a bag of frozen peas against his forehead): You also remember buying a fire extinguisher and that was a dream.
6 D POPPY (she pulls out her head, spits the torch into her hand): It was a very vivid dream.
7 D BEN (he steps forward, trips on a saucepan, catches himself on the fridge): Okay. Okay. I'm fine. Who puts a saucepan on the floor?
8 D POPPY (pointing the torch at him): Someone who was making you dinner before the lights went out.
9 D BEN (he looks at the pot, then at her, then at the pot): That is soup?
10 D POPPY (she stands, wipes her hands on her jeans): That is a risotto in its early years.
11 D BEN (he laughs, then stops laughing when he sees she is not laughing): Poppy. I'm sorry. I love it. I love its early years.
12 D POPPY (she steps closer, the torch under her chin, spooky): Say it again.
13 D BEN (he steps back into the table): I love it.
14 D POPPY (softer, torch lowered): No. The other thing. From the car.
15 D BEN (a long breath, peas slipping down his face): I said I might be in love with you. Might. I said might.
16 D POPPY (she smiles, looks at the floor, then at him): You said might very quickly.
17 D BEN (nodding, with great dignity): I was driving.
18 A ¶ CLOSE ON the candle.
19 A It flickers.
20 D POPPY (whisper): Ben, I think I am also a bit of a might.
21 D BEN (he lowers the peas, finally): Good. That's a good might. We can work with that.
22 A ¶ The back door BANGS open.
23 A Cold air, flashlights swinging across the ceiling.
24 A THE TWINS, Poppy's nine-year-old nieces in matching raincoats, march in with a candle in each hand and a very large cake between them.
25 D THE TWINS: Surprise!
26 D POPPY (she jumps and hits her head on the cupboard door): Ow! It's not even my birthday!
27 D THE TWINS: It is in the dark!
28 D BEN (to Poppy, quietly, through his hand): Did you know about this?
29 D POPPY (rubbing her head, whispering back): No, but I knew about the matches. They have matches.
30 D THE TWINS (together, holding up a box of matches): We have matches!
31 D BEN (he takes a candle from one twin and lights it from the other): Then I think this is a good night.
32 A ¶ ANGLE ON the cake as the candles are lit one at a time.
33 A Poppy and Ben lean in together over the flame.
34 D POPPY (softly, only to him): Make a wish.
35 D BEN (smiling, not looking away from her): Already did.
36 A ¶ BACK TO SCENE.
37 A The twins blow out the candles.
38 A The room goes black.
39 D THE TWINS (in the dark): Again!

### SCENE s05028 | INT. DUSTY ROAD STUDIOS - RECORDING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): CAMERA, MO, BIG DAVE, THE WOMAN, JEN, LOU, WHIRS
1 A ¶ HANDHELD.
2 A A documentary crew's camera follows Mo, 30s, through the control room.
3 A Red light on.
4 A ON CAMERA, he turns and talks to the lens.
5 D MO (to camera): This is the room where it all got made. Forty years of cowboy ballads and bad decisions.
6 A ¶ Big Dave, 50s, hat the size of a dinner plate, sits at the console with his boots on the desk.
7 A Jen, 20s, stands in the booth behind glass, headphones around her neck.
8 D BIG DAVE: Tell them about the ghost, Mo.
9 D MO: There's no ghost.
10 D BIG DAVE: There's a ghost.
11 A ¶ The studio door SLAMS.
12 A A woman in a long duster coat stands in it, dripping.
13 A Nobody knows her.
14 A ¶ The camera swings.
15 A Mo and Big Dave both freeze.
16 A Jen drops her headphones.
17 D MO: Can we help you, ma'am?
18 D THE WOMAN: Looking for the tape. Nineteen ninety-four. Session nine.
19 D BIG DAVE: We don't give out tapes.
20 D THE WOMAN (stepping forward): I'm not asking.
21 A ¶ Jen runs out of the booth and the three of them end up in a clump by the console, the camera shaking, the cables tangled around everyone's boots.
22 D JEN (to camera, whispering): I don't know her. I swear to God.
23 D THE WOMAN: You will.
24 A ¶ She puts a battered cassette on the console.
25 A The label reads: LOU CALDER - DO NOT PLAY.
26 D BIG DAVE (quiet, taking off the hat): Lou. Lou Calder. That's you.
27 D LOU: Played it once, Dave. Never again. Press record.
28 A ¶ Mo reaches for the board.
29 A Jen backs against the wall.
30 A The tape machine WHIRS, and the speakers CRACKLE with a man's voice singing, far away, in a language none of them know.
31 A ¶ The camera drops.
32 A Static.
33 A Cut.

### SCENE s05029 | EXT. CITY HALL PLAZA - CLIMATE PROTEST - DAY
Detected names (may be incomplete or contain aliases): PHONE, SUNNY, MEL, TROY, RHEA, HOODIE GUY, ANSEL
1 A ¶ A sea of cardboard signs.
2 A Drums somewhere.
3 A Sunny, 20s, they/them, stands on a milk crate holding a megaphone and a coffee.
4 A Beside them, Mel checks a phone.
5 A Troy ties a banner to a lamp post.
6 A Rhea films everything.
7 A At the edge of the crowd, a figure in a black hoodie watches the steps of City Hall and does not chant.
8 A ¶ ON PHONE (SLACK): #march-ops - Mel: are we on for 2?
9 A Sunny: yes.
10 A Troy: banner is up.
11 A Rhea: live in 5.
12 D SUNNY: Okay, team, small update. Permit says we can stay until four. Which means we leave at five.
13 D MEL: Sunny.
14 D SUNNY: They said four, I said five, it's a negotiation. They'll adjust.
15 D MEL: Who is they?
16 D SUNNY: Me. I'm they. Wait, you mean the city. Sorry, the city. The city is it.
17 D TROY: Hey, Sunny, who's the hoodie guy? He's been standing there for an hour. Hasn't touched a sign.
18 D RHEA: I'm going to say it. He is giving cop.
19 D MEL: He's giving bored dad.
20 D RHEA: Bored dads wear fleece, Mel. That is a tactical hoodie.
21 D SUNNY: Okay, let's not be weird. Everyone's allowed to stand. It's a public plaza.
22 D TROY: He's been looking at your crate for ten minutes.
23 D SUNNY: That's because I'm very tall on a crate.
24 D RHEA (into phone, whispering): Hoodie guy, if you're a cop, please blink twice.
25 A ¶ The Hoodie Guy takes a step into the crowd, lowers the hood, and walks right up to the crate.
26 A He is Ansel, 30s, tired, pink-eyed, holding an envelope.
27 D HOODIE GUY: Sunny? I'm Ansel. From the water board. I'm the one who emailed you last night.
28 D SUNNY: Oh. You're the leak.
29 D ANSEL: I'm the leak. Can we walk? There are more documents. They're not going to like me after today.
30 D MEL: Is that why you're being weird in a hoodie?
31 D ANSEL: I'm not being weird. I'm being careful.
32 D TROY: Careful looks exactly like weird, man.
33 D SUNNY: Rhea, stop the livestream. Mel, take the megaphone. Troy, keep the banner up. I'll be five minutes.
34 D RHEA: It's been "five minutes" for three years.
35 D SUNNY: Then it's right on time.

### SCENE s05031 | INT. VILLAGE HALL - FUNERAL RECEPTION - DAY
Detected names (may be incomplete or contain aliases): THE CHOIR, ORSOLYA, BRAM, A VOICE
1 A ¶ Orsolya, 60s, in a black coat stitched with tiny silver thread that moves when nobody is looking, stands by the tea urn while the mourners murmur and the rain taps the leaded windows and a dog under the buffet table sighs, and across the room Bram, 30s, the dead man's nephew, holds a paper plate of untouched sandwiches and watches the coffin lid through the open vestry door as though it might speak.
2 A ¶ THE CHOIR gathers by the piano, six old women in grey, humming a note that is slightly too low for the room.
3 D ORSOLYA: You haven't asked me why I came. Everyone else has. They ask it with their eyebrows. Your uncle owed me a debt, Bram, and in my family we collect, even from the dead. Especially from the dead, who are very bad at hiding.
4 D BRAM (beat): He owed everyone. He owed the butcher. It's a funeral, not an audit.
5 D ORSOLYA: He owed me his shadow.
6 A ¶ The urn hisses.
7 A The humming from the choir climbs a half step.
8 D BRAM: That's not funny.
9 D ORSOLYA: It wasn't meant to be. Look at the floor beneath the coffin. Go on. The vicar has shuffled four times and still it hasn't moved with him.
10 A ¶ Bram looks.
11 A A dark shape lies against the vestry tiles, long and patient, pointing the wrong way from the candles.
12 D BRAM (quietly): That's the light from the door.
13 D ORSOLYA: Is it?
14 D THE CHOIR (in unison, low): Amen.
15 D A VOICE [O.S.]: Bram? Bram, love, are you in there? Your aunt wants the car brought round.
16 D BRAM (calling back): In a minute, Mrs. Pell!
17 D ORSOLYA: Do not answer him when he speaks. That is the only rule I will give you. He will use your voice, because it is the nearest one, and he will use your mother's after that.
18 D BRAM (beat): Speak. Who speaks?
19 A ¶ The vestry candles bend flat, all together, as if a door had opened onto a great cold field.
20 A The choir stops humming.
21 A The dog under the table stands up, hackles raised, and does not make a sound.
22 D A VOICE [V.O.] (in Bram's own tones, warm): Bram. It's all right. Come and help me with this lid.
23 D ORSOLYA (very still): That is the first.
24 D BRAM (whispering): How do I stop it?
25 D ORSOLYA: You give it what it is owed. And you do not flinch, boy, whatever it wears.
26 A ¶ The shadow on the tiles lifts one edge, slowly, like a hand testing a curtain.

### SCENE s05032_0 | EXT. BORDER CHECKPOINT - DAWN
Detected names (may be incomplete or contain aliases): NARRATOR, INSPECTOR HALVORSEN
1 A ¶ Fog lies on the valley like spilled milk.
2 A Two lanes of trucks idle in a row, exhaust rising straight up in the windless cold.
3 A A loudspeaker coughs somewhere, then gives up.
4 A ¶ A faded sign reads: ALL VEHICLES STOP.
5 A Under it, a stray dog sleeps against a concrete barrier, ribs rising and falling.
6 D NARRATOR [V.O.]: Eleven years at this crossing, and I can tell you how a man lies by how he holds his steering wheel. Tight means fear. Loose means practice. This one held it like a baby bird.
7 A ¶ A grey hatchback rolls to the booth.
8 A Behind the glass, INSPECTOR HALVORSEN, 50s, heavy, unhurried, a thermos steaming beside his keyboard, lifts one finger.

### SCENE s05032_1 | INT. HATCHBACK - CONTINUOUS
Detected names (may be incomplete or contain aliases): DELPHINE VASS, HALVORSEN, NARRATOR
1 A ¶ DELPHINE VASS, 30s, hair damp, scarf too bright for the hour, rolls down the window.
2 A In the back seat a child's booster seat sits empty.
3 D HALVORSEN: Passport. Purpose of travel.
4 D DELPHINE: Visiting my sister. Three days.
5 D HALVORSEN: Where does your sister live?
6 D DELPHINE: Kalmar. Near the harbour.
7 A ¶ On the dashboard her phone lights up.
8 A ¶ ON PHONE: where r u
9 A ¶ She turns it face down.
10 A Halvorsen watches her do it.
11 D NARRATOR [V.O.]: Nothing wrong with that. Everybody's got somebody who wants to know where they are.

### SCENE s05032_2 | EXT. BORDER CHECKPOINT - CONTINUOUS
Detected names (may be incomplete or contain aliases): TEENAGERS, WAITER, KESTREL OKONKWO, HALVORSEN, DELPHINE, NARRATOR, PHONE, ^DELPHINE
1 A ¶ Two TEENAGERS in a van queue take photographs of the fog on their phones, laughing.
2 A A WAITER from the roadside cafe crosses the road carrying a tray of paper cups to the guards, steam curling off them.
3 A ¶ Younger officer KESTREL OKONKWO, 20s, eager, jacket too clean, jogs over from the second booth.
4 D KESTREL: Sir, the dog unit's flagged nothing on the left lane.
5 D HALVORSEN: Good. Then we are all friends this morning.
6 A ¶ He smiles at Delphine and slides her passport back through the slot.
7 D HALVORSEN [CONT'D]: Safe travels, Ms. Vass.
8 D DELPHINE (exhaling): Thank you.
9 A ¶ The barrier arm lifts.
10 A The hatchback rolls forward ten feet, twenty.
11 A Her shoulders drop.
12 D NARRATOR [V.O.]: Here is what I know about relief. It makes people careless with their hands.
13 A ¶ Her phone buzzes again against the dash.
14 A She reaches for it without looking.
15 A ¶ ON PHONE: did u get through?
16 A ¶ She types with one thumb.
17 A ¶ ON PHONE (CONT'D): yes. dont call me again
18 A ¶ Halvorsen watches the hatchback in the mirror, thermos halfway to his lips.
19 D HALVORSEN: Kestrel. The booster seat.
20 D KESTREL: Sir?
21 D HALVORSEN: Who rides to her sister's for three days with a child seat and no child?
22 D KESTREL (beat): Maybe the kid's with the sister already?
23 D HALVORSEN: Then why is the seat belt buckled across it?
24 A ¶ Silence.
25 A The dog under the barrier lifts its head.
26 D HALVORSEN [CONT'D]: Close the arm.
27 A ¶ Kestrel hits a button.
28 A The barrier SLAMS down in front of the hatchback, fifteen feet from freedom.
29 A Brake lights flare red in the fog.
30 D NARRATOR [V.O.]: Here is the thing nobody tells you. The calm is not the quiet part. The calm is the trap.
31 A ¶ Halvorsen walks out of the booth, unhurried, and Kestrel falls into step beside him.
32 A They reach the driver's window together.
33 D HALVORSEN: Ms. Vass. A moment.
34 D KESTREL: Ma'am, please step out of the vehicle.
35 D HALVORSEN: Please step out.
36 D DELPHINE (overlapping, shaking): I have to be in Kalmar by noon. My sister is expecting me.
37 D ^DELPHINE (overlapping, shaking): I have to be in Kalmar by noon.
38 A ¶ She does not move.
39 A Her hands are tight on the wheel.
40 A Not the baby-bird grip now.
41 A Something harder.
42 D NARRATOR [V.O.]: There it is. Loose means practice. Tight means fear. Tight and then loose again, that means you have made up your mind.
43 A ¶ Delphine puts the car in reverse.
44 A ¶ Halvorsen steps back.
45 A Kestrel's hand drops to his belt.
46 D HALVORSEN (calm): Don't.
47 A ¶ The engine revs.
48 A Fog swallows the sound.
49 A Somewhere beyond the barrier, a child begins to cry, thin and far away, from a truck in the other lane.
50 A ¶ Delphine's eyes go wide.
51 A She turns her head toward it.
52 D DELPHINE (whispering): That's not -
53 A ¶ The teenagers' phones all come up at once, filming.
54 D NARRATOR [V.O.]: Eleven years. I never once saw a border. Only the people standing very close to it.
55 D HALVORSEN (quietly): Ms. Vass. Whose child is in that truck?
56 A ¶ She doesn't answer.
57 A The engine cuts out.
58 A The only sound is the dog, finally, barking.
