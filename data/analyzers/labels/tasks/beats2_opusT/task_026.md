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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/beats2_opusT/group_00026.json with the Write tool:
{"<scene_id>": [{"start": 1, "type": "...", "fine": "...", "actor": "...", "target": null, "mood": "...", "intensity": 3, "summary": "..."}, ...], ...}
Include every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s05086 | EXT. HARBOR PARKING LOT - FOOD TRUCK "THE GOLDEN GOBLIN" - DAY
Detected names (may be incomplete or contain aliases): BIG DAVE, MO, JEN, SAM, MRS. K
1 A ¶ A rusty purple truck with a huge cartoon goblin painted on the side.
2 A Its painted eyes blink when nobody's looking.
3 A A line of hungry customers stretches around the block.
4 A ¶ Inside the truck, a tiny kitchen.
5 A Steam, sizzle, clatter.
6 A ¶ BIG DAVE, 50s, an enormous man with an apron that reads "Kiss the Cook (Please)," flips a patty.
7 A Beside him, MO, 20s, wiry, chops onions with a nervous speed.
8 A At the window, JEN, 30s, sharp ponytail, takes orders with a grin that could cut glass.
9 A ¶ Perched on the shelf above the fryer sits SAM, a one-foot-tall goblin in a chef's hat, grumpy, covered in flour.
10 A Only the crew can see him.
11 D JEN (to the line): Next! What'll it be?
12 D BIG DAVE (to the whole kitchen): Orders up, people! Let's move!
13 D MO (to himself, muttering): Don't cut your finger. Don't cut your finger.
14 D SAM (dry): Mo, you've said that eleven times. I'm counting.
15 D MO (not looking up): You're not helping, Sam.
16 D JEN (over her shoulder): Two Goblin Specials and a side of fries!
17 D BIG DAVE (flipping): Fries are in the basket, Mo!
18 D MO (to himself): I know. I know where the fries are.
19 A ¶ Jen's phone RINGS on the counter.
20 A She answers on speaker.
21 D MRS. K [V.O.] (over the phone, crackling): Jennifer? It is Mrs. K. I am watching the line on the news. It is too long.
22 D JEN (through gritted teeth): Mrs. K, we're doing great. Lots of customers.
23 D MRS. K [V.O.]: Too many customers is no profit if you give them free pickles.
24 D BIG DAVE (quietly): Who told her about the pickles?
25 D SAM (shrugging): She has her ways.
26 D MRS. K [V.O.]: I hear everything. Mo is cutting too slow.
27 D MO (freezing): I'm not cutting too slow!
28 D MRS. K [V.O.]: Mo, speak to me when your onions are finished.
29 A ¶ Mo glances at Big Dave.
30 A Big Dave shakes his head slowly.
31 D JEN (to the group): Okay, everyone calm down.
32 A ¶ NOBODY CALMS DOWN.
33 A The fryer HISSES.
34 A Smoke curls toward the ceiling.
35 D SAM (standing on the shelf, alarmed): Dave, the oil's too hot.
36 D BIG DAVE (waving it off): It's fine.
37 D SAM: Dave.
38 D BIG DAVE: It's fine!
39 A ¶ The fryer POPS.
40 A A tiny fireball rolls up the wall.
41 D MO (shrieking): FIRE!
42 D JEN (to the phone): Mrs. K, I'll call you back!
43 D MRS. K [V.O.]: Jennifer, do not hang up on--
44 A ¶ Jen hangs up.
45 A Big Dave grabs a fire extinguisher.
46 A SPLOOSH.
47 A A cloud of white foam engulfs the kitchen.
48 A ¶ Silence.
49 A Everyone is covered in foam.
50 A Sam wipes his face with one tiny hand.
51 D SAM (deadpan): I told you.
52 A ¶ From outside, the line of customers CHEERS.

### SCENE s05089 | EXT. MAPLE HILL PARK - NEAR THE OLD FOUNTAIN - DUSK
Detected names (may be incomplete or contain aliases): JOGGER, OLD MEN, LIN, KOFI
1 A ¶ The sun is low.
2 A The park is almost empty.
3 A A JOGGER runs past with a small dog.
4 A Two OLD MEN play chess on a bench, not talking.
5 A ¶ LIN, 19, sets a phone on a tripod.
6 A She wears a bright yellow jacket.
7 A She checks the screen and fixes her hair.
8 A ¶ Beside her stands KOFI, 20, her friend.
9 A He holds a ring light.
10 A He is nervous but he does not say it.
11 D LIN: Okay. We start. Hello, my friends. Today we go to the haunted fountain.
12 D KOFI: Why are we saying haunted?
13 D LIN: Because people like it. More views.
14 D KOFI: But nobody say this fountain is haunted.
15 D LIN: Now they say.
16 A ¶ She laughs.
17 A He does not.
18 A He looks at the dry stone fountain.
19 A He turns the ring light a little.
20 A ¶ The Jogger is gone.
21 A The old men are gone too.
22 A The chessboard is still on the bench, pieces standing.
23 D LIN [CONT'D] (to the camera): Is very quiet here. Very, very quiet.
24 D KOFI: Lin. The men. They left the game.
25 D LIN: So? They are tired.
26 D KOFI: Maybe.
27 A ¶ She taps the screen.
28 A She frowns.
29 A She taps again.
30 D LIN: The video, it stops. Always the same place.
31 D KOFI: Maybe the phone is cold.
32 D LIN: Phones are not cold.
33 A ¶ A cold wind moves over the grass.
34 A The fountain makes a small sound, like a drop of water falling.
35 A But the fountain is dry.
36 A ¶ He steps back.
37 A She does not notice.
38 A She is still looking at the screen.
39 D LIN [CONT'D] (whispering): Kofi. Look.
40 A ¶ He comes closer.
41 A On the screen, behind her, there is someone in the water of the fountain.
42 A Only in the video.
43 A Not in the park.
44 D KOFI: I do not see anything.
45 D LIN (her voice thin): Yes you do.
46 A ¶ He is silent.
47 A His hands shake on the ring light.
48 A ¶ It is the last video they will make together.
49 A ¶ She turns off the phone.
50 A Fast.
51 A She takes the tripod and walks to the path.
52 A He follows her.
53 A Neither of them looks back at the fountain.
54 A ¶ The wind stops.
55 A The water drips once more.

### SCENE s05090 | INT. BRIGHTSTART FERTILITY CLINIC - WAITING ROOM - DAY
Detected names (may be incomplete or contain aliases): TESS, GORDON, ROSALIND, THE WOMAN, DR. HALLORAN, BEV
1 A ¶ SUPER: "TUESDAY.
2 A 9:47 AM."
3 A ¶ Gordon, 40s, rumpled and sweating through a pastel polo, grips a paper cup and a clipboard.
4 A Tess, 20s, behind the front desk, smiles a smile that has seen things.
5 A ¶ INSERT - CLIPBOARD
6 A ¶ Line 14: "Sample collected at home?
7 A Y / N".
8 A Gordon's pen hovers.
9 A He circles Y. Then N. Then Y.
10 A ¶ BACK TO SCENE
11 D TESS: Mr. Pruitt, Dr. Halloran will see you shortly.
12 D GORDON: Great. Fantastic. Shortly. Love shortly.
13 A ¶ His phone BUZZES.
14 A He answers, too loud.
15 D GORDON [CONT'D]: Ros? I'm here, I'm in the, I'm at the place.
16 D ROSALIND [V.O.] (tinny, speakerphone): Did you bring it. Gordon. Did you bring it.
17 D GORDON: Define "it".
18 D ROSALIND [V.O.]: The jar, Gordon. The jar in the cooler bag, in the car, in the August heat.
19 A ¶ Gordon looks at the empty cup in his hand.
20 A Looks at the door.
21 A ¶ POV - THROUGH THE WINDOW
22 A ¶ The parking lot.
23 A His Subaru.
24 A Its trunk wide open.
25 A A Seagull the size of a toddler perches on the bumper.
26 A ¶ BACK TO SCENE
27 A ¶ A woman in sunglasses and a long coat sits two chairs down, reading a pamphlet upside down.
28 A She has been there since the top of the scene.
29 A She has not blinked.
30 D GORDON (to himself): Okay. Okay okay okay.
31 A ¶ Dr. Halloran, 50s, bow tie, enters from the hallway with a tablet.
32 A He and Gordon lock eyes.
33 A He raises a hand to wave.
34 A He sees the open trunk through the window.
35 A He lowers it.
36 A ¶ ANGLE ON THE WOMAN
37 A ¶ She stands.
38 A Slowly.
39 A She opens the coat.
40 A Inside, a cooler bag, sweating, strapped to her like a bomb vest.
41 D THE WOMAN: Is this what you're looking for.
42 A ¶ Gordon and Halloran both freeze.
43 A Tess drops her stapler.
44 D GORDON: You STOLE my
45 D THE WOMAN: I RESCUED your
46 D DR. HALLORAN: Everybody stay calm, that is a biohazard and also a federal, I think, a federal something.
47 D ROSALIND [V.O.]: What's happening. Why is everyone yelling. Gordon!
48 A ¶ Gordon lunges for the bag.
49 A The woman spins away.
50 A Halloran grabs him, he grabs the coat, and all three of them crash into the pamphlet rack.
51 A Pamphlets rain down like confetti.
52 A Tess ducks under the desk.
53 A ¶ INTERCUT - PARKING LOT / WAITING ROOM
54 A ¶ The seagull hops into the trunk.
55 A It emerges with a sandwich.
56 A Nobody sees.
57 D THE WOMAN (pinned, furious): Bev! My name is Bev! I'm Rosalind's sister, you absolute walnut, she sent me to make sure you'd show up!
58 A ¶ Silence.
59 A Gordon, face down in pamphlets, slowly raises one finger.
60 D GORDON: ...Did she also send you to steal it?
61 D BEV: No. That was freelance.
62 D ROSALIND [V.O.]: Oh my god. Bev. I said WATCH him. Not ambush him.
63 A ¶ Tess pops up from behind the desk, holding the cooler bag by one strap.
64 D TESS: So, uh. Who's paying the co-pay.

### SCENE s05091 | INT. VANTAGE ARENA - BACKSTAGE GAMING PIT - NIGHT
Detected names (may be incomplete or contain aliases): JUNO KESSLER, HOODIE GUY, DEV, THE TWINS, ^JUNO
1 A ¶ Humming.
2 A A hundred fans cooling a hundred machines.
3 A Somewhere beyond the curtain the crowd roars at nothing, at a screen, at a score.
4 A ¶ JUNO KESSLER, 20s, headset around her neck, sits alone at Station 9 while the finals lobby loads, and behind her, in the half dark by the cable trunks, a figure in a gray hoodie stands very still with his face turned away, and she has not noticed him, and the monitors all glow the same dead blue.
5 A ¶ The loading bar crawls.
6 A 98%.
7 A 98%.
8 A 98%.
9 D JUNO: Nobody's supposed to be back here.
10 D HOODIE GUY (low): I know.
11 A ¶ The bar does not move.
12 A Her headset crackles at her collar, a whisper under the static, a voice that is not a teammate's.
13 D JUNO (to her mic): Coach? Dev? You hear that?
14 A ¶ Nothing.
15 A Then, very faintly, from somewhere behind the curtain, the crowd goes silent.
16 A All at once.
17 A Like a hand over a mouth.
18 A ¶ Dev Aranda, 30s, the team coach, pushes through the curtain with a lanyard and a clipboard and stops.
19 A He looks at the hoodie.
20 A He looks at Juno.
21 A The lights above the pit flicker one row at a time, front to back, toward them.
22 D DEV: Juno. Walk to me. Don't look at the screen.
23 D JUNO: It's, it's on my screen, Dev.
24 A ¶ On every monitor in the pit, in the lobby chat, one line types itself out letter by letter, slow as breathing.
25 D THE TWINS [O.S.] (whispering, in unison): We found you.
26 A ¶ Juno turns.
27 A At the far end of the pit, two identical kids in tournament jerseys stand shoulder to shoulder, too still, mouths barely moving, and neither of them is breathing.
28 D HOODIE GUY (turning at last): That's not who you think they are.
29 D DEV (over him): Get out get out get out
30 D ^JUNO: They're not on the roster
31 A ¶ Every monitor cuts to black.
32 A The fans die.
33 A In the silence the only sound is something wet and slow dragging across the concrete behind the curtain, and then the curtain moves, and the lights come back all at once, white, blinding, and the pit is empty but for three headsets still warm on the desks, and a lobby chat that reads:
34 A ¶ SUPER: "PLAYER 4 HAS JOINED."

### SCENE s05092 | INT. ST. AGNES LYING-IN HOSPITAL - CONSULTING ROOM - DAY
Detected names (may be incomplete or contain aliases): DR. WHITCOMBE, MARGARET, EDMUND, SISTER BRIGID
1 A ¶ London, 1923.
2 A Rain falls on the high windows without stopping.
3 A The gas lamp on the wall makes a small yellow light.
4 A The room smells of carbolic soap and old wood.
5 A ¶ Margaret sits on a hard chair.
6 A Her husband Edmund stands near the window and does not look at her.
7 A The doctor sits behind a big desk with many papers.
8 D DR. WHITCOMBE (he opens a file and reads slowly): Mrs. Ashworth, you have been married six years. There is no child. This is the third time you come to me.
9 D MARGARET (her hands are tight in her lap): Yes, doctor. We hope you have some new idea.
10 A ¶ The rain becomes stronger.
11 A A cart passes in the street below and its wheels make a loud noise on the stones.
12 A In the corridor a clock strikes the half hour.
13 D EDMUND (he turns from the window, his voice is cold): It is not an idea we need. It is an answer. My family asks me every Sunday. Every Sunday.
14 D DR. WHITCOMBE (he closes the file): Mr. Ashworth, I must say it plainly. The examination shows no fault in your wife.
15 A ¶ A long quiet.
16 A The lamp makes a small sound.
17 A Outside, a bell rings far away, and the grey light on the wall becomes darker.
18 D MARGARET (she looks up at him for the first time): Then the fault is not mine.
19 D EDMUND (he steps forward, his hand on the desk): You say this to me? In front of her?
20 D DR. WHITCOMBE (he stands, calm but not soft): I say what is true. Please sit down.
21 A ¶ Edmund does not sit.
22 A He walks to the door, he stops, he comes back.
23 A His face is red, and the rain is loud now, and the room feels very small.
24 A ¶ The door opens without a knock.
25 A SISTER BRIGID, a tall nurse in a starched white veil, comes in with a metal tray.
26 A She puts it down and she stands very straight beside the desk.
27 D SISTER BRIGID (her voice is quiet but it carries): Doctor, forgive me. The results you asked for from the laboratory. Both sets.
28 D DR. WHITCOMBE (he takes the paper and reads it, and his face changes): Thank you, Sister. Stay, please.
29 D EDMUND (he reaches for the paper): Give me that.
30 D SISTER BRIGID (she puts her hand flat on the tray): Sir, it is not yours to take.
31 D MARGARET (very softly): Edmund. Please. Sit.
32 D EDMUND (he turns on her, loud): Do not tell me what to do! Six years I wait. Six years my mother looks at you like you are a broken clock!
33 A ¶ Thunder, low and long, across the roofs of the city.
34 A The lamp shakes.
35 A The window glass hums.
36 D DR. WHITCOMBE (he holds up the paper): The laboratory is certain, Mr. Ashworth. The difficulty is with you. Not with her. It was never with her.
37 D EDMUND (he stops, he cannot speak, then he laughs one time): That is a lie. That is a doctor's lie to make a woman feel better.
38 D MARGARET (she stands, her chair scrapes the floor): You never once asked if it was you. Not once. You looked at me. Always at me.
39 D EDMUND (he knocks the tray from the desk, the instruments fall and ring on the floor): Enough!
40 D SISTER BRIGID (she does not move back, her chin lifts): You will leave this room now, sir. Or I will call the porters.
41 A ¶ The rain falls on.
42 A A long moment.
43 A Edmund looks at the three of them, at the paper, at the wet window, and he takes his hat from the chair and he goes out.
44 A The door shakes in its frame.
45 D MARGARET (she sits down slowly, and begins to breathe again): He will not come home tonight.
46 D DR. WHITCOMBE (gently): Then you will stay here, Mrs. Ashworth. Sister Brigid will make you tea.
47 D SISTER BRIGID (she bends and picks up the instruments one by one): Strong tea. With sugar.
48 A ¶ The clock in the corridor strikes the hour.
49 A The rain is soft again.
50 A The lamp is steady.

### SCENE s05095 | INT. CORNER DINER - BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): TOBIAS, SAGE
1 A ¶ Tobias, 30s, hunched over a milkshake, scrolls his phone.
2 A He looks up.
3 A A figure in a trench coat slides into the booth opposite.
4 A ¶ Sage, 20s, they/them, buzz cut, an enamel pin that says "SUSPECT".
5 A They set a phone face-up on the table.
6 D TOBIAS: You're "DetectiveDuck99"?
7 D SAGE: And you're "NotTheKiller".
8 D TOBIAS: That was a joke!
9 D SAGE (deadpan): It's a very bad joke, Tobias.
10 A ¶ He laughs nervously.
11 A They don't.
12 A He stops.
13 D TOBIAS: So who actualy stole Linda's casserole dish?
14 D SAGE: Someone in this group chat. Eleven suspects. Two of them are in this diner right now.
15 A ¶ Tobias looks left.
16 A Looks right.
17 A Looks at the waitress.
18 D TOBIAS: Is it her?
19 D SAGE: It's a milkshake, Tobias. Nobody commited a crime with a milkshake.
20 A ¶ They slide the phone across.
21 A The screen reads "LINDA: found it lol was in my oven".
22 A ¶ Tobias stares.
23 A Sage shrugs.
24 D SAGE [CONT'D]: Case closed. You're buying.

### SCENE s05096_0 | INT. HOLLOWAY FUNERAL HOME - RECEPTION ROOM - DAY
Detected names (may be incomplete or contain aliases): VIC, NORA, TEENAGERS, MAN
1 A ¶ Folding tables.
2 A Casserole dishes.
3 A Black dresses.
4 A A waiter circles with a tray of deviled eggs.
5 A ¶ Nora Vance, 50s, widow, stiff smile, stands by the coffee urn.
6 A Her late husband's brother, Vic, 60s, hovers too close.
7 D VIC: Nora. We need to talk about the will.
8 D NORA: Not today, Vic.
9 D VIC: It's today or it's a lawyer.
10 A ¶ Two TEENAGERS by the buffet snicker at their phones.
11 A A beagle noses under a table, steals an egg.
12 A ¶ Nora's phone RINGS.
13 A She checks it.
14 A UNKNOWN NUMBER.
15 A She answers.
16 D MAN [V.O.] (distorted, over phone): Don't let Vic near the study.
17 A ¶ Nora's eyes snap to Vic.
18 A He is already walking toward the hallway.
19 D NORA (low): Vic!
20 A ¶ THE MOURNERS turn as one.
21 A The beagle barks.
22 A Vic breaks into a run.
23 T SMASH CUT TO:

### SCENE s05096_1 | INT. HOLLOWAY FUNERAL HOME - HALLWAY - CONTINUOUS
Detected names (may be incomplete or contain aliases): 
1 A ¶ A door slams.

### SCENE s05097_0 | INT. COUNTY PAROLE OFFICE - WAITING AREA - DAY
Detected names (may be incomplete or contain aliases): CRUZ
1 A ¶ Fluorescent hum.
2 A A ticket machine.
3 A Plastic chairs bolted to the floor.
4 A Somewhere a door buzzes and does not open.
5 A ¶ Darnell Whitfield, 40s, a gray jacket two sizes too big, sits with his hands flat on his knees.
6 A Eleven years inside.
7 A He studies the floor tiles like they might shift.
8 A ¶ Officer Imelda Cruz, 30s, parole officer, appears at the inner door with a folder.
9 A Tired eyes.
10 A Kind ones.
11 D CRUZ: Mr. Whitfield. Come on back.
12 A ¶ He rises.
13 A His knees pop.
14 A He follows.

### SCENE s05097_1 | INT. COUNTY PAROLE OFFICE - CRUZ'S OFFICE - CONTINUOUS
Detected names (may be incomplete or contain aliases): CRUZ, DARNELL, GIDEON, MARISOL
1 A ¶ A cramped room.
2 A A dying ficus.
3 A A window onto a brick wall.
4 A Cruz sits.
5 A Darnell does not, until she nods.
6 A ¶ Behind the glass partition, a second desk.
7 A Gideon Pratt, 50s, supervisor, pretends to type.
8 A He is not typing.
9 D CRUZ: How's the halfway house treating you, Darnell?
10 D DARNELL: Quiet. Too quiet, some nights.
11 D CRUZ: That's normal. Sleep comes.
12 A ¶ A sound in the ceiling.
13 A A tick.
14 A A pause.
15 A Another tick.
16 A Darnell's eyes go up.
17 A Cruz's don't.
18 D DARNELL: You hear that?
19 D CRUZ: Old building. Pipes.
20 A ¶ The ticking again.
21 A Slower.
22 A Closer to the vent.
23 D GIDEON (through the glass, flat): Whitfield. Employment verification.
24 A ¶ Darnell hands over a crumpled slip.
25 A Gideon reads it without looking up.
26 D GIDEON [CONT'D]: Dock work. Nights. Forty hours.
27 D DARNELL: Yes sir.
28 D GIDEON: Don't "sir" me. Save it for the judge.
29 A ¶ Cruz shoots Gideon a look through the glass.
30 A He shrugs and goes back to not typing.
31 A ¶ The door opens.
32 A Marisol Teague, 20s, intern, leans in with a stack of forms.
33 D MARISOL: Sorry. Officer Cruz? The drug screen, it's in. He's clean.
34 D CRUZ: Thank you, Mari.
35 A ¶ Marisol lingers, eyeing Darnell with open curiosity.
36 A Cruz clears her throat.
37 A Marisol backs out.
38 A ¶ The tick in the ceiling stops.
39 A The silence that replaces it is worse.
40 D DARNELL (quiet): Ms. Cruz. Eleven years, I counted ceiling tiles. Four hundred and twelve. Same as this room.
41 D CRUZ (gently): You don't have to count anymore.
42 D DARNELL: Habit.
43 A ¶ This is the last time he will sit in a room where someone else holds the door.
44 D CRUZ: Next appointment's the fourteenth. Same time. Don't be late, Darnell.
45 D DARNELL: Wouldn't dream of it.
46 A ¶ He stands.
47 A Shakes her hand.
48 A His grip lingers a second too long.
49 D DARNELL [CONT'D]: Thank you. For not treating me like a file.
50 A ¶ Cruz smiles, small and real.
51 D CRUZ: You're a person. Go be one.
52 A ¶ A buzz.
53 A The door opens.
54 A Light from the hallway, harsh and white.
55 A He walks into it.
56 A ¶ Behind him, in the vent, one more tick.
57 A Nobody turns.
58 D GIDEON (to the empty room): Damn pipes.

### SCENE s05098 | INT. QUICKROUTE DELIVERY WAREHOUSE - NIGHT
Detected names (may be incomplete or contain aliases): TEO, ALEX, KEIKO
1 A ¶ Cavernous.
2 A Steel shelving rises into dark.
3 A Pallets stacked like gravestones.
4 A A single forklift beeps somewhere unseen.
5 A ¶ ANGLE ON a loading bay: Teo Marchetti, 40s, broad shoulders, a scar through one eyebrow, scans a package.
6 A Beside him, Alex Rowan, 17, they/them, oversized hi-vis vest, drags a box twice their size.
7 D TEO: Easy. Lift with your legs.
8 D ALEX: I am lifting with my legs, Dad.
9 A ¶ Teo hides a smile.
10 A ¶ A voice crackles over the PA.
11 D KEIKO [V.O.]: Teo, we've got a rush on bay six. Insurance audit tomorrow, so don't lose anything.
12 A ¶ Keiko Tanaka, 50s, floor manager, appears at the end of the aisle with a clipboard, gray hair under a hairnet.
13 A ¶ INSERT - THE PACKAGE LABEL
14 A ¶ "HANDLE WITH CARE.
15 A FRAGILE.
16 A THIS SIDE UP."
17 A ¶ Alex's box slips.
18 A It hits the concrete.
19 A Something inside cracks.
20 A ¶ Everyone freezes.
21 D TEO (low): Alex.
22 D ALEX (small): It was heavy.
23 A ¶ WE SEE Keiko's face harden, then soften.
24 D KEIKO (to Teo): Take the night off. Both of you.
25 A ¶ BACK TO SCENE
26 A ¶ Teo kneels, lifts the box, shakes it gently.
27 A A rattle.
28 A A sigh.
29 D TEO (to Alex, soft): Hey. Nobody's fired. It's a lamp. We'll buy the lamp.
30 A ¶ Alex wipes their eyes with a glove.
31 A Teo ruffles their hair.
32 A The forklift beeps on.

### SCENE s05099_0 | INT. NEW DAWN FERTILITY CENTER - LOBBY - MORNING
Detected names (may be incomplete or contain aliases): KARINA, KARI, PHONE, DEV, MIRA, DR. FONTAINE
1 A ¶ SERIES OF SHOTS:
2 A ¶ -- A fish tank, bubbling.
3 A Three clownfish circle a plastic castle.
4 A ¶ -- A clock on the wall: 8:02.
5 A ¶ -- Hands on a clipboard.
6 A Rings.
7 A Nervous pens.
8 A ¶ Karina Bell, 30s, stands at the reception desk in scrubs, and beside her, Kari Beal, 20s, a trainee, also in scrubs.
9 A They share a look.
10 A The name tags are a coin flip.
11 D KARINA: No, I'm Karina. You're Kari.
12 D KARI: That's what I said.
13 D KARINA: You said Karina.
14 D KARI: It's eight in the morning.
15 A ¶ Dev Anand, 30s, and his wife Mira, 30s, enter holding hands too tightly.
16 A ¶ ON PHONE (INSERT): Dev's screen.
17 A A text from his mother: "DID YOU GO YET?
18 A WE ARE PRAYING."
19 D DEV (pocketing it): She's praying.
20 D MIRA: She's always praying.
21 D DEV: Her prayers are very specific.
22 A ¶ Mira laughs.
23 A Almost.
24 A ¶ MONTAGE - THE WAITING ROOM
25 A ¶ -- 8:20.
26 A Dev reads a magazine upside down.
27 A ¶ -- 8:44.
28 A Mira scrolls her phone.
29 A ON PHONE: "How to not panic during IVF consult."
30 A ¶ -- 9:15.
31 A The clownfish.
32 A Still circling.
33 A ¶ -- 9:40.
34 A Karina and Kari argue over a chart.
35 A Karina holds it higher.
36 A Kari jumps for it.
37 D KARINA: Kari, give me the file.
38 D KARI: Karina, I'm helping.
39 D DEV (to Mira, whispering): Which one's our nurse?
40 D MIRA: Both. Neither. I can't tell.
41 A ¶ Dr. Odette Fontaine, 50s, steps out of a back room.
42 A Silver bob, calm, a stethoscope like jewelry.
43 D DR. FONTAINE: Mr. and Mrs. Anand? Come in, please.
44 A ¶ They stand.
45 A Dev is shaking.
46 D DEV: Mira, honey, I love you, and I'm scared.
47 D MIRA: Dev, I love you, and I'm also scared. Walk.
48 A ¶ They follow Dr. Fontaine.
49 A The door closes.

### SCENE s05099_1 | INT. NEW DAWN FERTILITY CENTER - HALLWAY - LATER
Detected names (may be incomplete or contain aliases): DEV, MIRA, NERVOUS COURIER, KARINA, KARI, DR. FONTAINE
1 A ¶ SUPER: "THREE WEEKS LATER."
2 A ¶ Dev and Mira stand outside the exam room.
3 A In Mira's hand, a small white stick.
4 A She turns it over.
5 A ¶ ON PHONE: Mira's text to her sister: "ITS POSITIVE!!!!
6 A DONT TELL MA"
7 A ¶ Dev reads it over her shoulder.
8 D DEV: You texted your sister before me?
9 D MIRA: You were in the bathroom.
10 D DEV: I'm always in the bathroom!
11 A ¶ Mira bursts out laughing, tears coming now.
12 A He pulls her in.
13 A ¶ Suddenly the door at the end of the hall bangs open.
14 A ¶ A man in a pharmacy delivery jacket, NERVOUS COURIER, 20s, rushes in with a cooler.
15 D COURIER: Is there a, uh, Odette? I need a signature. This thing's been in my car for six hours.
16 D KARINA [O.S.]: Don't sign! It's the wrong clinic!
17 D KARI [O.S.]: He's wearing the wrong jacket!
18 A ¶ The courier looks at Dev and Mira.
19 A Mira looks at Dev.
20 D DEV: Is that, is that our...
21 D COURIER (checking tag): Anand? Yeah?
22 D MIRA (a gasp): That's the second batch!
23 D DEV (grabbing the cooler): We've got a baby on the way and a cooler in the hall! Everybody stay calm!
24 A ¶ Karina and Kari run in from opposite ends of the hall and collide.
25 A Charts everywhere.
26 D KARINA: Kari!
27 D KARI: Karina!
28 A ¶ They both reach for the cooler.
29 A Dev holds it above his head.
30 A Dr. Fontaine steps out of the exam room, sees the chaos, folds her arms.
31 D DR. FONTAINE: Is this a delivery, or a rugby match?
32 A ¶ Everyone freezes.
33 A A beat.
34 D MIRA (softly): Both.
35 A ¶ SERIES OF SHOTS:
36 A ¶ -- The cooler, opened.
37 A Inside: a small vase of flowers and a card.
38 A ¶ -- ON CARD: "From Ma.
39 A We are praying.
40 A P.S. Congratulations."
41 A ¶ -- Dev and Mira stare.
42 A Then look at each other.
43 A Then at the ceiling.
44 A ¶ -- Karina and Kari, side by side, wiping their eyes.
45 D DEV (soft): How did she know?
46 D MIRA (wiping her eyes): My sister told her.
47 D DEV: Of course she did.
48 A ¶ Mira leans her head on his shoulder.
49 A The clownfish circle on.
50 T FADE OUT.

### SCENE s05100 | INT. SKYLINE ROOFTOP BAR - NIGHT
Detected names (may be incomplete or contain aliases): RAYMOND OKAFOR, LENA VOSS, NELL, PRIYA, MARCUS WEBB
1 A ¶ String lights.
2 A Wind.
3 A Det. RAYMOND OKAFOR, 40s, wearing his shield on his belt under a good jacket, sits at the end of the bar while Dr. LENA VOSS, 30s, still in scrubs under her coat, pretends to read the cocktail list and TOMASZ the bartender polishes the same glass he polished five minutes ago and a waitress, NELL, drifts past with a tray of empty flutes.
4 D OKAFOR: You said you'd be off at eight.
5 D LENA: Trauma doesn't read the schedule Ray. Two GSWs and a fall from a scaffold. I'm here aren't I.
6 D OKAFOR: You are.
7 D LENA: Say something nice.
8 D OKAFOR: Your chart notes are terrible. I read one once for a case. Sixteen abbreviations in a row.
9 D LENA: That's the nicest thing you've ever said to me.
10 A ¶ Her phone buzzes on the bar.
11 A Lena checks it.
12 A PRIYA's voice, small and tinny, fills the gap.
13 D PRIYA [V.O.]: Dr. Voss, it's Priya in the ED, bed six just coded again, Dr. Anand is asking for you.
14 D LENA (into phone): Tell him I'm ten minutes away. No. Tell him I'm coming now.
15 A ¶ Silence.
16 A Okafor looks at the skyline.
17 A Nothing.
18 D OKAFOR: Go. Go save him.
19 D LENA: Ray
20 D OKAFOR: I'll be here. Or I wont. Whichever.
21 A ¶ Lena stands.
22 A Her phone.
23 A Dead.
24 A ¶ A door bangs and SGT. MARCUS WEBB, 50s, in a rain-dark windbreaker, crosses the roof straight at Okafor with an evidence bag held up like a fish.
25 D WEBB: Ray. The ring from the Delacroix scene. It matches the inscription. It was never hers, it was yours.
26 A ¶ Lena stops at the elevator.
27 A Tomasz stops polishing.
28 A Music.
29 A Somebody laughs.
30 D OKAFOR (quietly): Marcus, not now.

### SCENE s05101 | INT. PAROLE OFFICE - DAY
Detected names (may be incomplete or contain aliases): KIM, KIP, JEN
1 A ¶ ON CAMERA: handheld, slightly too close, a fluorescent hum.
2 A A wall of grey filing cabinets.
3 A THE WOMAN, 30s, sits across from a desk, hands flat on her knees, avoiding the lens.
4 A KIM, 50s, parole officer, reads a folder.
5 A Beside her a plastic nameplate reads KIP DAVIS, PO II.
6 A Kim is not Kip.
7 A Kip is the one leaning in the doorway, eating a bagel.
8 D KIM: Camera stays off the client please. We agreed.
9 D KIP: Its a documentary Kim. Everybody signed.
10 D KIM: Not her.
11 D THE WOMAN: I signed.
12 D KIM: You signed a form that said "a person". You didn't know it'd be this.
13 D THE WOMAN: I didn't know a lot of things when I signed stuff.
14 D KIM: Eleven months clean, curfew met, job at the laundromat, check ins on time. Honestly Jen you're the best file I've got this quarter and I've been dreading this meeting all week.
15 D KIP: Jen. There it is. Finally a name.
16 D JEN: Dreading why?
17 D KIM: Because your sponsor called me. Because he said he wants to put his name on your housing form. As your partner.
18 D JEN: Mo.
19 D KIM: Mo Haddad. Who has a record. Who's two years out himself. Associating with known offenders is a violation, you know that, I know that, Kip knows that.
20 D KIP (mouth full): I know that.
21 D JEN: So violate me.
22 D KIM: Don't make this a joke.
23 D JEN: I'm not joking. I love him. I've never said that out loud in this building. It's the first thing I've said in here that wasn't a lie or an excuse.
24 A ¶ Silence.
25 A Kim closes the folder.
26 A The camera shakes, someone has stopped breathing behind it.
27 D KIM: Sign here. And here. I never saw the second page.
28 D KIP: Neither did the camera.

### SCENE s05104 | INT. RIDESHARE CAR - NIGHT
Detected names (may be incomplete or contain aliases): JAMAL, COLE, RUBEN, BIANCA, SHAY, MIKA
1 D JAMAL [V.O.]: Two a.m. Wet road. Empty streets. Nothing on the radio but static.
2 D JAMAL (eyes in the mirror, thumb tapping the wheel): Five stars is all I ask, folks. Everyone buckled?
3 D COLE (slumped against the window, fogging the glass): Yeah, Jamal. Drive.
4 D JAMAL [V.O.]: Four kids from a party. Three of them quiet. One of them loud. Always one.
5 D RUBEN (leaning forward between the seats, grinning): Cole, tell him what you did. Tell Jamal what you did at Tasha's.
6 D COLE (shoving Ruben's face away): Shut up Ruben.
7 D BIANCA (arms folded, not looking at either boy): He told her he loved her. Then he threw up in her mom's plant.
8 D SHAY (whispering, holding a phone dark in her lap): Bianca. Stop.
9 D JAMAL [V.O.]: Red light. Rain. Nobody talks. The wipers keep time.
10 D MIKA (from the front passenger seat, finally, softly): Jamal, can you drop me first? Please. He said he'd call and he's not going to, and I don't want him to see me cry.
11 D JAMAL (gently, to Mika): Sure thing. Anywhere you like.
12 D COLE (to Shay, low): He means me, right?
13 D SHAY (not unkindly): He means the other he, Cole.

### SCENE s05106 | INT. CORNERSTONE FITNESS - MORNING
Detected names (may be incomplete or contain aliases): CAL, BOZ, PAT, INES
1 A ¶ cal is on the leg press doing about half the weight he thinks he's doing, and boz, the trainer, is next to him counting reps in a voice that says he's counted a lot of reps, and across the floor a woman in a faded blue hoodie sits on the mat doing nothing at all and pat at the front desk is eating a banana and pretending to read the sign-in sheet.
2 D CAL: it's been like three weeks for me
3 D BOZ: it's been like three weeks for you for like six years
4 D CAL: that's fair
5 A ¶ THE WOMAN looks over from the mat.
6 A She takes her time, then goes back to staring at her shoes.
7 D BOZ (low): that's the one who comes at 6 and just sits
8 D CAL: what's her deal
9 D BOZ: didn't ask
10 D CAL: you ask everybody
11 D BOZ: not her
12 A ¶ pat leans over the desk.
13 D PAT: hey, she's got a bag. like a doctor bag. she carries it everywhere
14 D CAL: maybe she is a doctor
15 D PAT: doctors go to nicer gyms
16 A ¶ They all go quiet.
17 A The woman gets up, opens her bag, takes out a small plastic case and a folded paper, and sets them both very carefully on the bench next to cal, then sits again.
18 D CAL: uh hi?
19 D THE WOMAN: you left your pills in the locker room. i found them. i'm ines. i'm a nurse. you took a double dose today didn't you. your hands are doing that thing
20 A ¶ cal looks at his hands. boz looks at cal's hands. pat puts down the banana.
21 D CAL: i'm fine
22 D INES: okay
23 A ¶ She picks up her bag and walks out.
24 A The door sighs shut behind her.
25 A The leg press clanks, once, and stays at the bottom.
26 D BOZ (after a while): cal. sit down
27 D CAL: i am sitting
28 D BOZ: okay

### SCENE s05107 | INT. MOVING VAN - DAY
Detected names (may be incomplete or contain aliases): SAM, JEN, BIG DAVE, MO, MRS. K, LOU
1 A ¶ CLOSE ON the back of a rattling box truck, packed to the roof with old furniture wrapped in grey blankets.
2 A We see a walnut dresser from the 1920s, a mirror in a gilded frame, and a tall grandfather clock lashed with orange straps.
3 A ¶ Rain hammers on the metal roof.
4 A The road outside is wet and grey.
5 A It is a very dull morning.
6 A ¶ SAM, 30s, sits on a crate near the back door, looking worried.
7 A He checks the straps again.
8 A Next to him JEN, 20s, is writing on a clipboard.
9 A In the front, through a little window, we see BIG DAVE driving and MO in the passenger seat eating chips.
10 D SAM: Jen, are you sure the clock is secure? It's worth like ten thousand dollars.
11 D JEN: He has checked it three times, Sam. He is very sure.
12 D SAM: I'm just saying, if it falls, we all lose our jobs.
13 A ¶ The van hits a pothole.
14 A The clock RATTLES.
15 A The mirror TINKLES.
16 A She grabs the clipboard.
17 A He grabs the clock.
18 D BIG DAVE [O.S.]: Sorry about that, folks!
19 D MO [O.S.] (through the window): Dave, watch the road!
20 A ¶ Lightning FLASHES through the cracks in the door and, for a second, we see everyone's faces lit up in white.
21 A ¶ In the back, behind the dresser, a hand moves.
22 A It is an old woman's hand, wrinkled and thin, and she pushes a blanket aside.
23 A This is MRS. K, 80s, the owner of all this furniture, who has been hiding in the van the whole time.
24 D SAM (shocked): Mrs. K?
25 D MRS. K: I wasn't going to let you take Henry's clock without me.
26 D JEN: Ma'am, you can't be back here. It's not safe.
27 D MRS. K: I have been safe for eighty years. I would like to be something else.
28 A ¶ The phone in Jen's pocket BUZZES.
29 A She looks at it, he looks at her, and she answers.
30 D JEN (into phone): Hello? Yes, we have her. No, she's fine.
31 D LOU [V.O.] (over phone): Jen, it's Lou at dispatch. The client's daughter just called. Her mother is missing. Please tell me she's in the van.
32 D JEN: She is in the van.
33 D LOU [V.O.]: Oh thank God.
34 A ¶ The van HONKS and SCREECHES to a halt.
35 A Everyone slides forward.
36 A The clock tips.
37 A Sam catches it, barely.
38 A They all breathe.
39 A ¶ A pause.
40 A The rain softens.
41 A Out the back window a rainbow, small and surprised, appears over a wet parking lot.
42 D MRS. K (smiling): Henry always loved a rainbow.
43 A ¶ Sam looks at her.
44 A She looks at him.
45 A They both understand something they cannot say.
46 D BIG DAVE [O.S.]: We're here! Everybody out!
47 A ¶ The back door RATTLES OPEN.
48 A Light pours in.

### SCENE s05108 | INT. COUNTY PAROLE OFFICE - AFTERNOON
Detected names (may be incomplete or contain aliases): WENDELL PRUITT, OFFICER TANYA BELL, GLORIA
1 A ¶ The building has the smell of old carpet and burnt coffee.
2 A A radiator knocks somewhere behind the drywall.
3 A Outside, the rain has been falling since morning without conviction.
4 A Under the buzzing tube light, a waiting room of orange plastic chairs, and in them, a cardiac surgeon who used to hold hearts in his hands now holds a clipboard.
5 A ¶ WENDELL PRUITT, 58, silver-haired, hands still gentle in the way of men who've been told for decades to be careful, sits across from the desk of OFFICER TANYA BELL, 40s, who has the tired patience of someone who has read every excuse ever invented.
6 A Behind him his wife GLORIA, 50s, grips her purse.
7 A At the counter, the clerk ODELL stamps forms, and the receptionist JUNO eats her lunch from a tupperware lid.
8 D BELL: Dr Pruitt you understand the terms. No practising, no prescribing, no supervised access to patients. Not even a flu shot at the church.
9 D WENDELL: I understand the terms Officer Bell. I'm not asking to practice. I'm asking to sit with one man. His name is Alvin Reese. He has eleven days. His family called me because no one else in this county would touch his valve.
10 D GLORIA: Wendell
11 D WENDELL: No Gloria. Let me say it. Eleven years I've kept every rule they gave me. I didn't cut when the board told me not to cut. I didn't speak when the lawyers told me not to speak. A man is dying forty minutes from here and I know exactly how to stop it and I am sitting in a chair that's too small for me asking permission.
12 D BELL: That's not my decision.
13 D WENDELL: Whose is it then.
14 A ¶ The radiator knocks.
15 A Odell stops stamping.
16 A Juno stops chewing.
17 A Bell closes the file very softly, the way you close a door on a sleeping child.
18 D BELL: Mine, apparently. Doctor, I'm going to step out for ten minutes to take a phone call that I will not be able to remember in the morning. Odell. Juno. You didnt see him leave either.

### SCENE s05110 | INT. GLAMOUR NAILS - DAY
Detected names (may be incomplete or contain aliases): JEN, MO, BIG DAVE, LILY, TASHA, MRS. K, ^MO
1 A ¶ SERIES OF SHOTS:
2 A ¶ - Neon sign flickers on.
3 A OPEN.
4 A Pink light on cracked linoleum.
5 A ¶ - Rows of polish bottles, a hundred shades of nothing-to-say.
6 A Acetone haze hangs over the room like weather.
7 A ¶ MRS. K, 60, owner, tiny, reading glasses on a beaded chain, runs the front desk like an air traffic tower.
8 A Her niece JEN, 20s, ponytail and a tattoo of a swallow on her wrist, files a customer's thumbnail while MO, 30s, soft-spoken and the only one who ever sits down, paints stripes on a toddler's birthday set and BIG DAVE, 50s, a mountain of a man in a tiny salon chair, is getting his first pedicure of his life for his daughter's wedding and hating every second, and in the corner LILY, 70s, silver bob, oxygen-thin voice, flips a magazine she isn't reading, while TASHA, 30s, in scrubs, still wearing her hospital badge, waits her turn with her phone face down.
9 A ¶ MONTAGE - THE AFTERNOON
10 A ¶ - 1:15 PM.
11 A Big Dave winces.
12 A Jen laughs.
13 A ¶ - 2:40 PM.
14 A Lily's magazine slips.
15 A Tasha glances over.
16 A Looks away.
17 A ¶ - 3:30 PM.
18 A Lily's hand shakes on the armrest.
19 A Sweat on her lip.
20 A Nobody else sees.
21 D TASHA (quietly): Ma'am? You okay?
22 D LILY: Just warm.
23 D MRS. K: Jen, the fan!
24 A ¶ Jen turns the fan.
25 A The air moves.
26 A Lily's eyes don't.
27 D TASHA: Lily, right? When did you last eat?
28 D LILY: Breakfast. I think. I don't--
29 D BIG DAVE: She's grey. Why is she grey?
30 D MRS. K: Nobody panic in my shop!
31 D ^MO: Call 911. Somebody call 911!
32 A ¶ Tasha is already on her knees, two fingers at Lily's neck, and Jen grabs the phone, and Mrs. K knocks over a tray of bottles that SHATTER across the floor, red polish spreading like blood while Big Dave lifts the whole chair with Lily in it and Mo screams for room.
33 D TASHA: Get her flat! Flat! Now!
34 D MRS. K: Don't tell me what to do in my shop!
35 D TASHA: Then watch her die in it!
36 A ¶ Silence.
37 A Then Lily's chest rises.
38 A Falls.
39 A Rises.
40 A ¶ Sirens, far off, growing.

### SCENE s05112 | INT. VELVET TIPS NAIL LOUNGE - BACK ROOM - NIGHT
Detected names (may be incomplete or contain aliases): DONNA
1 A ¶ SUPER: "CORPORATE OFFSITE - DAY 3"
2 A ¶ INSERT - A LAPTOP SCREEN.
3 A Video call software.
4 A A red dot blinks: RECORDING.
5 D DONNA [O.S.] (sitting straight, clearing her throat, adjusting a headset that does not need adjusting): Hi. Okay. Is it recording? It says recording. Great. This is my statement for the Q3 culture review, and I want to begin by saying I love this company.
6 D DONNA (smiling very hard): I love the open floor plan, which is a nail salon. I love that our break room is also the supply closet, and that our wellness program is the free acetone.
7 D DONNA (laughing, not laughing): Which is a joke. That is a joke. Please mark it as humor.
8 D DONNA (picks up a bottle of polish, reads the label, puts it down): There are two people in this story. Marcy in Accounts and Marty in Facilities. Marcy sends the emails. Marty receives the emails. Except it's reversed, because the system autocorrects them, and for eleven months I have been invoicing Marty's boiler repairs to Marcy's bonus.
9 D DONNA (leans toward the camera): And Marcy knows. And Marty knows. And I know that they know. And nobody says anything, because this is a culture of respect.
10 D DONNA (whispering): This is the last time they will speak to me as a colleague.
11 D DONNA (sits back, normal voice, bright): So here are my concerns. One. The mandatory fun. We have a fun committee. It meets at six a.m. It is not fun. Two. The feedback system, in which you may give anonymous feedback, provided you sign it.
12 D DONNA (counting on fingers): Three. The word "synergy" was used forty-one times at Tuesday's all-hands, and I counted because I was told to be present.
13 D DONNA (a long breath, shoulders dropping, eyes wet and furious): And four. I have given this place nine years. I have painted forty thousand nails. Nobody has ever once asked me what colour I would choose.
14 D DONNA (reaches for a bottle at the edge of frame, a deep, ugly green; holds it up): This one. It is called "Quarterly Growth." I picked it. I would like it on the record that I picked it.
15 D DONNA (screws the cap off, looks at the camera): Marcy. Marty. If you are watching this, and I know you are, because the call is on the big screen in the lobby--
16 D DONNA (freezes; slowly turns her head toward the door; turns back, composed): Hi. We'll finish this in the all-hands.
17 D DONNA (reaches for the laptop, hand shaking, cheerful): Thank you for your time. Please rate this statement out of five.
18 A ¶ SUPER: "THIS CALL HAS BEEN RECORDED FOR TRAINING PURPOSES"

### SCENE s05113 | INT. ST. VINCENT'S - FOURTH FLOOR CORRIDOR - NIGHT
Detected names (may be incomplete or contain aliases): MARGUERITE, KIM, OZZIE, KIP, DR. HALE
1 A ¶ Fluorescent hum.
2 A A gurney wheel squeaks somewhere unseen.
3 A ¶ Kim, 40s, charge nurse, stands at the station with a chart.
4 A Kip, 20s, orderly, mops in slow circles nearby.
5 A A visitor sleeps in a chair, mouth open.
6 A ¶ Marguerite Voss, 50s, attorney in a wet trench coat, strides in with a leather folio.
7 D MARGUERITE: I need the patient in 412. Now.
8 D KIM: Visiting hours ended at nine.
9 D MARGUERITE: He signed a statement tonight. I need it witnessed before--
10 A ¶ Ozzie, 30s, night nurse, they/them, appears from a doorway, pale, pen still in hand.
11 D OZZIE: Nobody's in 412. They went down at ten.
12 D KIP: Went down where?
13 D KIM: Ozzie, what do you mean, went down?
14 D MARGUERITE: Then who signed this?
15 A ¶ She lifts the page.
16 A Wet ink.
17 A Fresh.
18 A ¶ A call light CHIMES.
19 A 412.
20 A ¶ All four look down the hall.
21 A The door is open.
22 A ¶ Dr. Hale, 60, in a rumpled white coat, steps out of 412.
23 A He wipes his hands on a towel.
24 A He does not look at them.
25 D DR. HALE (soft): He's resting.
26 A ¶ The lights flicker.
27 A Out.
28 A On.
29 A ¶ The sleeping visitor is gone.
30 A The chair still rocks.

### SCENE s05114 | INT. PRETTY PINK NAILS - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): PAM, LOU, GUS
1 A ¶ Rain taps the front window.
2 A The sign buzzes.
3 A A string of dusty Christmas lights, still up in March, blinks out of sync.
4 A ¶ PAM, 40s, nail tech, bends over a client's hand with a drill file.
5 A LOU, 50s, the client, scrolls her phone with her free hand.
6 A ¶ The smell of acetone.
7 A Of something sweeter under it.
8 D PAM: Your cuticles are in rough shape Lou.
9 D LOU: It's the dishwasher. Always the dishwasher.
10 D PAM: You need a oil. I'll put some on after.
11 A ¶ The drill WHIRS.
12 A Stops.
13 A Whirs.
14 A ¶ Outside a bus hisses past.
15 A Wet tires on wet road.
16 D LOU: Is it me or is it cold in here?
17 D PAM: Heater's been broke since Tuesday. Mrs K says shes getting a guy.
18 D LOU: A guy.
19 D PAM: A guy.
20 A ¶ Pause.
21 A The lights hum.
22 A Somewhere in the back a faucet drips.
23 A Drip.
24 A Drip.
25 D LOU: Did you hear that?
26 D PAM: The faucet?
27 D LOU: No. Under it.
28 A ¶ They listen.
29 A The faucet.
30 A The rain.
31 A The sign.
32 A ¶ Then a slow scraping, like a chair being dragged across tile in the back room.
33 D PAM (too brightly): Old building. Pipes.
34 A ¶ The bell on the front door JINGLES.
35 A ¶ GUS, 60s, a tall man in a soaked grey raincoat with no umbrella, steps in.
36 A Water runs off his sleeves onto the mat.
37 A He smiles with too many teeth.
38 D GUS: Afternoon, ladies. Is the owner in?
39 D PAM: Mrs K's out. Can I help you?
40 D GUS: I'll wait.
41 A ¶ He sits in the pedicure chair by the window.
42 A The water jets turn on by themselves.
43 A Nobody touches them.
44 D LOU (whispering): Pam.
45 D PAM: I see it.
46 A ¶ The scraping in the back stops.
47 A ¶ Rain.
48 A Rain.
49 A Rain.
50 D GUS: Nice weather for it.

### SCENE s05115 | INT. THE GRAND MERIDIAN HOTEL - SEVENTH FLOOR CORRIDOR - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE HAROLD WEEMS, CLAIRE BOSWORTH, RICKY
1 A ¶ We see a long hotel corridor with red carpet and gold wallpaper.
2 A The lights are dim and it is very quiet.
3 A Room numbers go from 701 down to 720 and we can tell this is an expensive hotel.
4 A ¶ CLOSE ON the door of room 714.
5 A It is slightly open.
6 A ¶ DETECTIVE HAROLD WEEMS, 50s, wearing a rumpled brown suit and carrying a notepad, walks down the corridor.
7 A He looks tired because he has been working all night.
8 A ¶ He stops outside 714 and pushes the door gently with his finger.
9 D WEEMS: Hello? Police.
10 A ¶ No answer.
11 A He steps inside and out of view.
12 A ¶ A moment later a door SLAMS somewhere down the hall and CLAIRE BOSWORTH, 30s, in a red evening gown, bursts out of the stairwell, out of breath.
13 A She is holding her shoes in one hand.
14 A ¶ Weems steps back out into the corridor and sees her.
15 D WEEMS: Miss Bosworth. I told you to stay in the lobby.
16 D CLAIRE: I couldn't. Not after what Ricky told me.
17 D WEEMS: Ricky?
18 D CLAIRE: The bellhop. He saw someone go into 714 at eleven o'clock, and it wasn't the man who checked in. It was a woman. A tall woman with a scar on her cheek, and she was carrying a case.
19 D WEEMS: A case. What kind of case?
20 D CLAIRE: A violin case. Or at least that's what Ricky thought, but he said it was too heavy for a violin, because she had to use both hands, and her whole arm was shaking, and then she looked straight at him and said, "I was never here," and gave him a hundred dollars.
21 D WEEMS: And he took it.
22 D CLAIRE: Of course he took it. He's twenty-two and he makes eleven dollars an hour.
23 D WEEMS: Where is Ricky now?
24 D CLAIRE: I don't know. He went to take the service elevator down to get his coat, and that was twenty minutes ago, and he hasn't answered his phone.
25 A ¶ Claire's phone BUZZES in her hand.
26 A She looks down at it.
27 A ¶ CLOSE ON the phone screen.
28 A ¶ ON PHONE: dont trust the cop
29 A ¶ ON PHONE: hes been in the room before
30 A ¶ She looks up slowly at Weems.
31 D WEEMS: What is it?
32 D CLAIRE: Nothing. It's nothing. Just my sister.
33 D WEEMS: May I see?
34 D CLAIRE: No.
35 A ¶ He reaches for the phone and she pulls it back.
36 A They both freeze.
37 A ¶ At the far end of the corridor, the service elevator DINGS.
38 A ¶ The doors slide open.
39 A RICKY, 22, in a bellhop uniform, stands there pale and shaking.
40 A He holds up one hand.
41 A There is blood on it.
42 D RICKY: Detective. You need to come with me. Please. Right now.
43 D WEEMS: What happened to your hand?
44 D RICKY: It's not my blood.
45 A ¶ Claire backs away.
46 A Weems takes a step toward Ricky.
47 A Claire turns and runs for the stairwell.
48 D WEEMS: Miss Bosworth! Stop!
49 A ¶ The stairwell door SLAMS behind her.
50 A ¶ Weems and Ricky look at each other.
51 A Neither moves.
52 D RICKY: She's not who she says she is.
53 D WEEMS: I know.
54 D RICKY: You knew?
55 D WEEMS: I've known since the lobby. But I needed to see where she'd run.
56 D RICKY: And now?
57 D WEEMS: Now we go after her, and you tell me everything on the way.
58 A ¶ They both run toward the stairwell.
59 A The corridor lights flicker and go out.
60 A ¶ In the dark, one door CLICKS open.
61 A Room 714.
62 A ¶ A tall shadow stands in the doorway.
63 A She is holding a violin case.
64 A ¶ She does not move.
65 A ¶ Her phone BUZZES.
66 A ¶ ON PHONE: found you

### SCENE s05116 | INT. MERCY GENERAL - NURSES' STATION - NIGHT
Detected names (may be incomplete or contain aliases): INES, WALLY
1 A ¶ 3 a.m.
2 A The hospital hums.
3 A Vending machine glows.
4 A A mop bucket sits abandoned.
5 A Rain on the windows.
6 A ¶ Its heritage week, so the whole floor is in costume.
7 A A banner reads "MERCY GENERAL: 100 YEARS OF CARING."
8 A ¶ INES, 50s, night nurse, wears a starched 1920s nurse's cap and a cardigan.
9 A She counts pills.
10 A Dry as toast.
11 A ¶ WALLY, 30s, resident, bursts through the doors in a full Victorian surgeon's apron and top hat.
12 A ¶ (Applause beat.)
13 D WALLY: Good evening Ines. Did you miss me?
14 D INES (not looking up): Seven hours isn't long enough.
15 A ¶ ANGLE ON Wally, who tips the hat.
16 A It falls off.
17 D WALLY: It was a very sturdy hat this morning.
18 D INES: They gave you the one with the moth.
19 A ¶ He picks it up.
20 A Looks inside.
21 A A moth flutters out.
22 D WALLY: Well. It's alive. That's more than I can say for my evening.
23 A ¶ She slides a chart across the counter without a word.
24 A ¶ INSERT - THE CHART.
25 A Room 9.
26 A Patient: M. Alder.
27 A Allergies: none.
28 A Next of kin: blank.
29 A ¶ BACK TO SCENE
30 D WALLY: Whos Mr. Alder?
31 D INES: Brought in at midnight. No visitors. No calls.
32 D WALLY: Maybe he's shy.
33 D INES: Maybe.
34 A ¶ She sorts the pills again.
35 A Same pills.
36 A Same order.
37 D WALLY: You've counted those three times.
38 D INES: Four.
39 A ¶ He looks at her.
40 A She doesn't look back.
41 A The vending machine HUMS.
42 D WALLY: Ines. Is something
43 D INES: Pass me the pen.
44 A ¶ He passes the pen.
45 A She writes "Alder" and then crosses it out and writes it again, slower.
46 A ¶ WE SEE through the glass of Room 9, a man's hand resting on the blanket, a wedding ring catching the light.
47 D WALLY (softly): You know him.
48 D INES: I know a lot of people.
49 D WALLY: Ines.
50 D INES: He was a medic. In the old days. We worked a flood together in '09. He carried me out of a basement.
51 A ¶ She puts the pen down very carefully, like it might break.
52 D WALLY: Shall I
53 D INES: No. I'll go.
54 A ¶ She straightens her cap.
55 A Walks to Room 9.
56 A At the door she pauses, one hand on the frame, and for a second the whole floor is silent.
57 A Even the rain.
58 A ¶ CLOSE ON Wally, who takes off his ridiculous hat and holds it against his chest.
59 A ¶ She goes in.
60 A The door closes.
61 A ¶ The monitor beeps once.
62 A Then again, faster.

### SCENE s05117 | INT. NEW DAWN FERTILITY CLINIC - RECEPTION - NIGHT
Detected names (may be incomplete or contain aliases): JO, RAY, FREEZER DOOR SLAMS, BEA, RADIO, VIC
1 A ¶ Empty waiting room.
2 A Soft jazz on a dead speaker.
3 A Rain streaks the windows.
4 A ¶ Orchids.
5 A Glossy brochures.
6 A A wall of baby photos.
7 A ¶ JO, 30s, receptionist, locks the front drawer.
8 A Hurries.
9 A ¶ Her phone BUZZES.
10 A ¶ She snatches it.
11 A Reads.
12 A Pales.
13 A ¶ RAY, 40s, night security, strolls in with a flashlight and a donut.
14 D RAY: Working late, Jo?
15 D JO: Just leaving.
16 D RAY: Door's alarmed. Nobody leaves till eleven.
17 A ¶ She backs toward the hall.
18 D JO: Ray. Please.
19 A ¶ BEEP-BEEP-BEEP.
20 A The alarm panel blinks red.
21 A ¶ Ray's smile dies.
22 A He drops the donut.
23 D RAY: What did you take?
24 A ¶ Down the hall, a FREEZER DOOR SLAMS.
25 A ¶ Both turn.
26 A ¶ BEA, 30s, lab tech, sprints out of the lab with a steel canister in her arms.
27 A Frost pours off it.
28 A Her scrubs are soaked.
29 D BEA: Go! Go! Go!
30 D RAY: Put it down!
31 D BEA: Those are eleven families, Ray!
32 D JO: She's right. Look at the logs. Somebody's been selling them.
33 A ¶ Ray hesitates.
34 A His radio CRACKLES.
35 D RADIO [V.O.]: Unit four, status?
36 A ¶ A shadow fills the glass front doors.
37 A ¶ VIC, 50s, in a black coat, a clinic director's badge swinging from his neck, raises a keycard.
38 A The lock CLICKS.
39 D VIC: Nobody move.
40 A ¶ Jo grabs the canister.
41 A Bea shoves Ray.
42 A The alarm SCREAMS.
43 A ¶ They bolt for the fire exit.

### SCENE s05119 | INT. SUBWAY CAR - MORNING RUSH
Detected names (may be incomplete or contain aliases): PIP, ZED, MABEL
1 A ¶ Packed.
2 A Elbows.
3 A Umbrellas.
4 A A tuba case.
5 A ¶ Fluorescent lights flicker green.
6 A The train rumbles through the dark.
7 A ¶ PIP, 10, a girl in a yellow raincoat, clutches a strap too high for her.
8 A She hums.
9 A ¶ At her feet, a lumpy backpack with a zipper mouth.
10 A It wiggles.
11 D ZED [V.O.] (muffled, from the bag): Pip. Pip. Are we there?
12 D PIP (whispering): Not yet, Zed.
13 D ZED: You said five stops. I counted nine.
14 A ¶ Pip's phone buzzes.
15 A ¶ ON PHONE: mom: where r u
16 A ¶ ON PHONE: mom: ANSWER ME
17 A ¶ Pip stares at it.
18 A She taps the screen.
19 A ¶ ON PHONE: no signal
20 A ¶ Her phone.
21 A Dead.
22 A ¶ Across the aisle, MABEL, 70s, in a purple scarf, knits something long and glittering.
23 A She watches Pip over her glasses.
24 A ¶ Silence.
25 A ¶ The train slows.
26 A Brakes squeal.
27 D MABEL: That's a loud bag, dear.
28 D PIP: It's, um. A toy.
29 D MABEL: Toys don't ask how many stops.
30 A ¶ The lights go out.
31 A ¶ Darkness.
32 A Nothing.
33 A ¶ Then a soft blue glow.
34 A The backpack unzips by itself.
35 A ¶ Zed climbs out.
36 A A little round robot, one antenna bent.
37 D ZED: Hello, Mabel.
38 D MABEL: Hello, Zed. You're late.
39 A ¶ Pip's jaw drops.

### SCENE s05120 | INT. HOLLOWAY VETERINARY CLINIC - NIGHT
Detected names (may be incomplete or contain aliases): CAL BRANNIGAN, COLE CALLOWAY, MARSHAL TUCKER
1 A ¶ Rain on the tin roof.
2 A One lamp burning.
3 A ¶ ANGLE ON the front desk.
4 A A cracked leather saddle bag sits on it, open.
5 A ¶ CAL BRANNIGAN, 50s, sun-cured and slow, stands over a sleeping hound on the steel exam table.
6 A He strokes its ear with two rough fingers.
7 D CAL: There. Easy, old man.
8 A ¶ He hums.
9 A Something half-remembered.
10 A ¶ The back door CREAKS.
11 A He doesn't turn.
12 D COLE [O.S.]: Still got that dog's leg looked at?
13 D CAL: Sutured an hour ago.
14 D COLE [O.S.]: Good.
15 D CAL: Coffee's on the stove, Cole.
16 A ¶ COLE CALLOWAY, 40s, enters from the dark of the kennel hall.
17 A Duster coat.
18 A Dripping.
19 A He smiles like a man at a funeral that went well.
20 D COLE: You're a hard man to find.
21 D CAL: Not hard. Just ain't been looking.
22 A ¶ Cole sets his hat on the counter.
23 A Takes his time.
24 D CAL [CONT'D]: Sit.
25 D COLE: I'll stand.
26 D CAL: Suit yourself.
27 A ¶ He pours two tin cups.
28 A Slides one across.
29 A Cole doesn't take it.
30 A ¶ CLOSE ON the cup, steam curling.
31 D COLE: Remember when we pulled that mare out of the Platte?
32 D CAL: Spring of '09.
33 D COLE: She had a foal in her.
34 D CAL: Dead already.
35 D COLE: You cried anyway.
36 A ¶ Cal almost laughs.
37 A He looks at the hound instead.
38 D CAL: I was young.
39 D COLE: You were thirty-eight.
40 A ¶ A beat.
41 A The rain softens.
42 A Nothing but the clock.
43 D COLE [CONT'D]: Nice quiet place you've made.
44 D CAL: It does the job.
45 D COLE: Folks bring you strays? Hurt things?
46 D CAL: Mostly.
47 D COLE: And you fix them.
48 D CAL: When I can.
49 A ¶ Cole nods.
50 A He walks the length of the counter, one hand trailing along it.
51 A He stops at the saddle bag.
52 A ¶ INSERT - THE BAG
53 A ¶ A leather pouch inside.
54 A Tied with red twine.
55 A ¶ BACK TO SCENE
56 A ¶ Cole doesn't touch it.
57 A He just looks.
58 D COLE: Heavier than it ought to be.
59 D CAL: Feed money.
60 D COLE: Is that right.
61 D CAL: That's right.
62 A ¶ Cole smiles.
63 A Cal does not.
64 A ¶ A phone RINGS on the wall.
65 A Old black rotary.
66 A Neither man moves.
67 A It rings five times, six.
68 D CAL [CONT'D]: Let it ring.
69 D COLE: Could be somebody's sick animal.
70 D CAL: Could be.
71 A ¶ He lifts the receiver anyway.
72 A Holds it between them so both can hear.
73 D MARSHAL TUCKER [V.O.] (tinny, through the line): Cal? That you? Got a rider heading your way. Cole Calloway. Armed, and he ain't alone.
74 A ¶ Silence.
75 A Cole's smile hasn't moved.
76 D CAL (into the phone): He's here.
77 D MARSHAL TUCKER [V.O.]: Cal, get out of there.
78 A ¶ Cal hangs up.
79 A Gently.
80 D COLE: You knew.
81 D CAL: Saw your horse. Tied behind the feed store.
82 D COLE: And you made coffee.
83 D CAL: Seemed polite.
84 A ¶ WE SEE Cole's hand drift to his coat.
85 A Slow.
86 A ¶ ANGLE ON Cal's other hand, under the counter.
87 D CAL [CONT'D]: That hound on the table.
88 D COLE: What of him?
89 D CAL: You shot him. Day before yesterday. Outside Dunmore.
90 A ¶ Cole's hand stops.
91 D CAL [CONT'D]: Took me three hours to dig the lead out.
92 D COLE (quiet): He was on my trail.
93 D CAL: He was a dog.
94 A ¶ The hound stirs.
95 A Lifts his head.
96 A Looks at Cole.
97 A ¶ A low growl, half asleep.
98 D COLE: Hell.
99 D CAL: Said you'd come for him.
100 D COLE: Who said?
101 D CAL: Nobody. He just kept looking at the door.
102 A ¶ Cole laughs, short.
103 A Then he doesn't.
104 D COLE: What's under that counter, Cal?
105 D CAL: Same thing that was under it in '09.
106 A ¶ Rain.
107 A Nothing else.
108 A ¶ Cole lets his hand fall away from the coat.
109 D COLE: I'll be damned.
110 D CAL: Likely.
111 A ¶ Cole picks up his hat.
112 A Puts it on.
113 A Turns for the door.
114 D CAL [CONT'D]: Cole.
115 A ¶ He stops.
116 D CAL [CONT'D]: Leave the pouch.
117 D COLE: It ain't yours.
118 D CAL: Not asking for me.
119 A ¶ Cole looks at the dog.
120 A Then at the bag.
121 A He lays the twine-tied pouch on the counter, gentle as a newborn.
122 A ¶ He goes out into the rain.
123 A ¶ Cal lets out a long breath.
124 A Brings his hand out from under the counter.
125 A ¶ It's holding a tin of dog biscuits.
126 A ¶ He gives the hound one.
