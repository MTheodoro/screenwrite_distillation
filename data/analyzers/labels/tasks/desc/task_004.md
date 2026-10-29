You label screenplay scenes for a writing tool. Every answer must come from the fixed lists below.

For each scene, write one JSON object:
{"scene_id": "...",
 "place": one of ['home', 'workplace', 'street', 'vehicle', 'nature', 'bar_restaurant', 'shop', 'institution', 'industrial', 'venue', 'transit', 'other'],
 "atmos": 1-2 of ['calm', 'tense', 'eerie', 'chaotic', 'intimate', 'festive', 'bleak', 'claustrophobic', 'cozy', 'sterile', 'gritty', 'dreamy'],
 "beats": [{"b": <beat number>, "type": one of ['arrives', 'leaves', 'confronts', 'accuses', 'threatens', 'attacks', 'defends', 'flees', 'hides', 'searches', 'discovers', 'reveals', 'confesses', 'lies', 'deflects', 'persuades', 'pleads', 'comforts', 'bonds', 'jokes', 'mocks', 'decides', 'observes', 'works'], "actor": "<character name or NONE>", "target": "<character name or NONE>"}, ...],
 "chars": {"<character name>": {"role": one of ['drives', 'opposes', 'ally', 'authority', 'vulnerable', 'observer', 'comic', 'mediator'], "traits": 1-3 of ['nervous', 'confident', 'angry', 'warm', 'cold', 'playful', 'sarcastic', 'secretive', 'curious', 'desperate', 'calm', 'authoritative', 'vulnerable', 'defiant', 'manipulative', 'kind', 'weary', 'impulsive', 'cautious', 'arrogant', 'sad', 'hopeful', 'frightened', 'determined']}, ...}}

Rules:
- One entry per numbered beat, in order. type = the main dramatic action of that beat; actor = who performs it;
  target = who it is aimed at (NONE if nobody). Use the character names exactly as listed for the scene.
- place = the kind of location (use the scene heading). atmos = how the scene feels.
- chars: every listed character who acts or speaks. role = their function in THIS scene; traits = how they come
  across in THIS scene, from the text only.
Write the scenes as JSON Lines (one object per line) in THREE files with the Write tool: scenes 1-30 to /home/user/screenwrite-analyzers/data/analyzers/labels/desc/part_004_a.jsonl, 31-60 to /home/user/screenwrite-analyzers/data/analyzers/labels/desc/part_004_b.jsonl, the rest to /home/user/screenwrite-analyzers/data/analyzers/labels/desc/part_004_c.jsonl. No other text in the files. Reply only with "done N".

## Scenes

### SCENE s00392 | EXT. DEAD DRIVE-IN THEATER - NIGHT
Characters: PELL PELLEGRINO, ODESSA LANE
[beat 0] A cracked lot. A blank screen the size of a barn. Speaker poles stand in rows like headstones. One lamp burns over a concession shack. PELL PELLEGRINO, 50s, in a loud tie and a camel coat, sits on the hood of a Buick with a briefcase on his knee. ODESSA LANE, 40, a plainclothes detective in a gray raincoat, walks across the gravel with her hands visible.
[beat 1] ODESSA: You're early. PELL: I like to see who comes. ODESSA: Just me. PELL: Just you. Nice of them. ODESSA: You asked for me. PELL: I asked for the one who wouldn't bring a van.
[beat 2] Odessa stops ten feet away. She lowers her hands, one of them drifting to the lining of her coat. Pell opens the briefcase an inch and looks inside, then up. A moth circles the lamp, crashing, crashing. Down the lot, a dog barks twice and gives up.
[beat 3] Pell slaps the case shut, hops off the hood, and takes a step, and Odessa takes a step, and the gravel cracks under both of them.
[beat 4] PELL: You know what this lot used to show? ODESSA: Westerns. PELL: Every Friday. My father brought me. Dust, horses, a man in a hat who always knew the way out. ODESSA: Pell. PELL: He never did. Know the way. He just had the hat.
[beat 5] ODESSA: Where's Sal? PELL: Sal's on the snack bar roof. With a rifle.
[beat 6] She doesn't look up. She keeps her eyes on his. ODESSA: You're telling me.
[beat 7] PELL: I'm telling you because I like you. ODESSA: That's not why. PELL: No. I'm telling you because you'll understand it's an insult. ODESSA: He won't shoot.
[beat 8] PELL: He would. But I'd like to make you an offer first. ODESSA: Go on.
[beat 9] PELL: I'll give you the briefcase. All of it. Names, dates, drops, three judges, and the mayor's cousin. In return, tonight, you go home. You never found me. ODESSA: That's a lot of names for a woman who can't be trusted. PELL: You're the only one who can't be bought. That's the point.
[beat 10] She looks at the roof of the snack bar. A silhouette, a barrel. She looks back.
[beat 11] ODESSA: Put it on the ground. PELL: Detective. ODESSA: Put it on the ground, Mr. Pellegrino, and tell your friend to climb down.
[beat 12] Pell holds the briefcase for a long beat. Then he lowers it to the gravel.
[beat 13] The lamp flickers. On the snack bar roof, the silhouette does not move.

### SCENE s00393 | INT. NIGHT FERRY "ADELAIDE" - GALLEY - NIGHT
Characters: ARASH, CLEMENTINE, ABEL
[beat 0] A tiny steel kitchen. A porthole shows black water. Pans hang on a rail and sway with the swell. ARASH, 60, cook, in a white apron, rolls dough on a floured board. CLEMENTINE, 30s, in a navy coat, sits on a stool by the oven. ABEL, 30s, in shirtsleeves, leans in the doorway with a paper cup of tea.
[beat 1] ARASH: You two can talk. I'm deaf in the oven ear. CLEMENTINE: You don't have an oven ear. ARASH: I have a lot of ears.
[beat 2] ABEL: Clem. CLEMENTINE: Abel.
[beat 3] ABEL: Thirty-one days. CLEMENTINE: Thirty-two. It's after midnight. ABEL: Thirty-two, then.
[beat 4] CLEMENTINE: I wrote you. ABEL: You wrote me once. CLEMENTINE: I wrote you a very good one. ABEL: It was good. It said you'd be somewhere else. It didn't say where. CLEMENTINE: I didn't know where. ABEL: You're on a ferry. CLEMENTINE: It was where the ferry was going.
[beat 5] Arash turns the dough, folds it, turns it again. The ferry rolls. The pans clang softly.
[beat 6] ABEL: You could have called. CLEMENTINE: So could you. ABEL: I did. Four times. CLEMENTINE: I know. ABEL: You knew. CLEMENTINE: I listened to every one. ABEL: And? CLEMENTINE: And I didn't pick up.
[beat 7] ABEL: Why not? CLEMENTINE: Because you'd have asked me to come back, and I'd have said yes.
[beat 8] A silence. The oven ticks. Arash's hands slow on the dough.
[beat 9] ABEL: And that's bad. CLEMENTINE: It was then. ABEL: And now?
[beat 10] CLEMENTINE: Now I'd ask you to get on the ferry. ABEL: I am on the ferry.
[beat 11] CLEMENTINE: I know. I saw you at the dock. ABEL: You saw me. CLEMENTINE: Thirty-two days. I know your walk from a quarter mile.
[beat 12] Abel sets down the tea. Arash, without turning, sets down the rolling pin. He wipes his hands, takes his coat from the hook, and goes out. The door swings shut behind him.
[beat 13] ABEL: Is it too late for the thing I wrote? CLEMENTINE: Which thing? ABEL: The reply. CLEMENTINE: You never sent a reply. ABEL: I wrote one every night.
[beat 14] He pulls a bundle of letters from his jacket, tied with kitchen twine. She stares at it, then takes it. Her thumb passes across the top envelope.
[beat 15] CLEMENTINE: Read me the first. ABEL: It just says your name.
[beat 16] She nods. He begins to say it.

### SCENE s00394 | INT. LITTLE LEAGUE DUGOUT - RAIN - DUSK
Characters: COACH ROSCOE FINN, PIA, LEVI, TAMSIN, OTIS
[beat 0] A concrete bunker with a plank bench. Rain ropes off the tin roof. The scoreboard outside reads 14 to 2, bottom of the sixth. Wet jerseys. Silence. COACH ROSCOE FINN, 60, hunched under a ball cap, studies his clipboard as if it will change the score. PIA, 11, the catcher, picks at a strap on her shin guard. LEVI, 10, stares at his glove. TAMSIN, 12, the shortstop, kicks at a puddle forming at her cleats. OTIS, 9, the smallest, sits at the end of the bench with a bat across his lap, his mouth working with a sentence he hasn't dared to say.
[beat 1] ROSCOE: All right, listen up. One more inning. Doesn't matter what the board says.
[beat 2] Nobody looks up. Rain pounds.
[beat 3] ROSCOE: Tams, you've got a good arm. Use it. TAMSIN: Yes, Coach.
[beat 4] ROSCOE: Fourteen to two. Lord.
[beat 5] OTIS: Coach? ROSCOE: Yeah, Otis. OTIS: Can we just play it out?
[beat 6] Roscoe looks at him for a long moment. The kids go still. He lowers the clipboard onto the bench.
[beat 7] ROSCOE: Yeah, bud. We can do that.
[beat 8] He stands, slaps the roof of the dugout twice with the flat of his hand. Pia puts on her mask. Levi pulls his glove on. Tamsin lifts her head.
[beat 9] Otis grips the bat, stands, and walks out into the rain.

### SCENE s00395 | INT. FERNBANK TAXIDERMY - BACK ROOM - NIGHT
Characters: MERCEDES OYELARAN, DUNCAN HALE
[beat 0] A windowless workshop stuffed with animals: owls on perches, a bear on hind legs, a fox mid-leap, a glass case of moths. A single lamp over a steel table. The air smells of formaldehyde and old straw. MERCEDES OYELARAN, 30s, in a leather apron, her sleeves rolled, bends over the table with a curved needle. On it lies the half-mounted body of a barn owl, its eyes still clouded. She works with the quiet of someone alone in a church.
[beat 1] The front-door bell JINGLES in the next room. She doesn't look up.
[beat 2] MERCEDES: We're closed. Footsteps. Slow.
[beat 3] A man's shadow slides across the doorway: DUNCAN HALE, 40s, in a damp raincoat, holding a hat. He takes in the animals and stays on the threshold.
[beat 4] DUNCAN: Forgive me. The door was unlocked. MERCEDES: It's not. DUNCAN: It opened.
[beat 5] She sets down the needle and turns. They regard each other.
[beat 6] MERCEDES: What do you want? DUNCAN: My wife's cat died last week. I was told you could do something. MERCEDES: I do animals. I don't do grief. DUNCAN: It's the same work, I'm told.
[beat 7] She wipes her hands on her apron. He steps in. He's taller than the doorway made him look, and he moves with a care that suggests he's learned not to bump into things.
[beat 8] MERCEDES: Where's the cat? DUNCAN: In the car. MERCEDES: You brought it in the rain. DUNCAN: I didn't want to leave her.
[beat 9] She nods slowly. A faint relaxation. She crosses to the sink and washes her hands.
[beat 10] MERCEDES: You'll have to bring her in. Not the carrier. The towel. DUNCAN: I don't have a towel. MERCEDES: Then your coat. DUNCAN: She's not wrapped in anything.
[beat 11] She turns off the tap. The room is very still. The owl on the table seems to be looking at her.
[beat 12] MERCEDES: Mr. Hale. What is in the car? DUNCAN: A cat. MERCEDES: Is it a cat?
[beat 13] He lowers his eyes. He turns the hat in his hands once, twice. DUNCAN: She said you'd ask. MERCEDES: Who did? DUNCAN: My wife.
[beat 14] MERCEDES: Your wife is dead. DUNCAN: Last week. Yes.
[beat 15] Mercedes picks up a long scalpel from the tray and holds it low, behind her apron. MERCEDES: Then who is in the car? DUNCAN: I came to find out.
[beat 16] He reaches into his coat. Mercedes grips the scalpel.
[beat 17] He draws out a photograph and holds it toward her across the table. DUNCAN: That's the shop. The year it opened. The woman behind the counter.
[beat 18] Mercedes does not take it. She does not need to.
[beat 19] MERCEDES: That's my mother.
[beat 20] DUNCAN: She's the one who mounted my wife's first cat. Thirty years ago. MERCEDES: My mother's been gone since '04. DUNCAN: I know. I thought you'd want to see it.
[beat 21] He lays the photograph on the table beside the owl. Mercedes looks at it. Her grip on the scalpel eases.
[beat 22] MERCEDES: Why?
[beat 23] DUNCAN: Because last night, my wife came home. MERCEDES: Mr. Hale.
[beat 24] DUNCAN: She's in the car. She's not a cat. She's not breathing, and she's not cold, and she asked me to bring her here.
[beat 25] The lamp flickers. The animals do not move. Mercedes looks past him, through the doorway, to the front window. A car idles at the curb, headlights off. In the back seat, a shape sits very upright.
[beat 26] MERCEDES: Why here? DUNCAN: She says you know how to make things stay.
[beat 27] The bell above the front door jingles again, though the door has not opened. Mercedes sets down the scalpel.

### SCENE s00396 | INT. ROOTHOUSE TEAROOM - AFTERNOON
Characters: ALDOUS, SEREN, PIP, WIDOW HARROWGATE
[beat 0] A parlor grown inside the hollow of an immense oak. The walls are living bark, polished by decades of elbows. Honey-colored light falls through a knothole window, and tiny lanterns of captured fireflies hang from the ceiling on spider-silk. A kettle on a mushroom-stool burner sings. ALDOUS, 70, a wizard in a tea-stained cardigan, pours from a pot shaped like a sleeping badger. SEREN, 20s, an apprentice in a patched green cloak, stirs her cup and stirs it again. PIP, 9, a boy with soot on his chin, sits under the table feeding crumbs to something invisible.
[beat 1] ALDOUS: Milk? SEREN: Please. PIP: Is it a lot of milk? ALDOUS: It's enough. SEREN: It's a bit much. ALDOUS: You said please. PIP: Seren said please, I said please, Master Aldous said please.
[beat 2] SEREN: Nobody said please to the cat. ALDOUS: We have a cat? PIP: We have a cat under the table. SEREN: We don't have a cat. PIP: It's a very quiet cat.
[beat 3] Aldous passes Seren her tea. She holds it, not drinking. She watches the knothole.
[beat 4] A shadow crosses the window. The door, a round slab of bark on a leather hinge, swings inward. WIDOW HARROWGATE, 80s, small and square in a black bonnet, leans on a cane carved from a single antler. She has the look of a woman who has been on her way for a very long time.
[beat 5] ALDOUS: Mrs. Harrowgate. WIDOW HARROWGATE: Aldous. You've aged. ALDOUS: You're early. WIDOW HARROWGATE: I'm precisely on time. You were always late.
[beat 6] SEREN: Tea? WIDOW HARROWGATE: Not today, girl.
[beat 7] PIP: Is she the one with the owl? SEREN: Pip. WIDOW HARROWGATE: I am the one with the owl.
[beat 8] ALDOUS: Sit, Hester. WIDOW HARROWGATE: I'll stand.
[beat 9] She doesn't. She lowers herself into the nearest chair, set at the head of the table like a throne.
[beat 10] The firefly lanterns brighten very slightly. Nobody says anything. Aldous refills his cup. Seren stirs. Pip, under the table, tugs at the invisible cat's tail. The kettle sings on.

### SCENE s00397 | INT. CAR WASH TUNNEL - NIGHT
Characters: SOLEDAD, KWAME
[beat 0] A beat-up hatchback inches through the dark. Foam slides down the windshield in thick white curtains. Brushes thump and whirl. SOLEDAD, 18, sits in the driver's seat in her graduation gown, cap still on. KWAME, 18, in the passenger seat, holds a diploma cover on his lap.
[beat 1] She stares ahead. He stares at the foam.
[beat 2] The car stops in a pool of blue light. Water drums on the roof.
[beat 3] KWAME: We could've gone to the party. SOLEDAD: You hate parties. KWAME: I hate that one.
[beat 4] She nods. Her hands tighten on the wheel. The brushes retreat.
[beat 5] A jet of water hits the glass, and for a moment the world outside is nothing but a trembling white.
[beat 6] SOLEDAD: You got the letter. KWAME: Yeah. SOLEDAD: Where? KWAME: Out west.
[beat 7] She says nothing. He turns the diploma cover over in his hands.
[beat 8] She puts the car in drive, and it rolls forward into the dryers, which roar.
[beat 9] He rolls his window down and lets the warm air in. She takes off her cap and places it on the dash.

### SCENE s00398 | INT. CANNERY WORKERS' HALL - DINING ROOM - NIGHT
Characters: ELSPETH MARROW, THADDEUS, YUKI, RODERICK, MIRABEL, PERCIVAL
[beat 0] A long plank table under a flickering chandelier made of fishing floats. Salted air. Six places set, five plates filled, one empty. Rain batters the windows. ELSPETH MARROW, 60s, presides at the head. THADDEUS, 50s, her brother, sits at her right, carving a roast with no appetite. YUKI, 30s, a guest in a sharp navy suit, sits across with her hands in her lap. RODERICK, 40s, the cannery manager, loosens his collar. MIRABEL, 20s, the cook's niece, pours wine with a trembling hand. PERCIVAL, 70, deaf, bearded, nods off in his chair.
[beat 1] ELSPETH: We were seven when the whistle blew in 'sixty-three. THADDEUS: Eight. ELSPETH: Seven. One of us never came to dinner. RODERICK: I don't recall. ELSPETH: No. You wouldn't.
[beat 2] YUKI: Mrs. Marrow, I came to discuss the sale of the cannery. ELSPETH: You came to eat, dear. The sale is dessert.
[beat 3] MIRABEL: Wine, ma'am? ELSPETH: Pour, child. Pour as if the glasses were hungry.
[beat 4] Mirabel pours. The wine sloshes. She does not look at the empty place.
[beat 5] THADDEUS: It was a good harvest that year. The fish were thick. We worked three shifts for three weeks, and the sea took only what it was owed. RODERICK: That's not how I remember it. THADDEUS: You remember it from the office. RODERICK: I remember the ledger.
[beat 6] ELSPETH: The ledger is a liar. It says seven and it lies.
[beat 7] YUKI: Mrs. Marrow, whose place is empty?
[beat 8] Percival stirs, mutters, falls asleep again. The chandelier floats sway. Elspeth sets down her fork. She does it slowly, with great ceremony.
[beat 9] ELSPETH: It is the place of the one who is coming. RODERICK: Nobody is coming. ELSPETH: The tide is.
[beat 10] Thunder rattles the windows. The lights gutter. When they steady, the empty plate is no longer empty. A single sardine, whole, wet, lies across it, its eye round and gold.
[beat 11] Nobody speaks. Mirabel drops the bottle. Yuki rises. Thaddeus lays down his carving knife and, for the first time, looks at his sister with terror.
[beat 12] THADDEUS: Elspeth. What have you done? ELSPETH: I invited him.
[beat 13] Out in the dark, beneath the floorboards, something heavy shifts.

### SCENE s00399 | INT. STALLED ELEVATOR - DAY
Characters: WINIFRED, LEOPOLD, DANIKA, VIJAY, MAINTENANCE
[beat 0] Four people, mirrored walls, a dead floor indicator. Muzak plays softly. WINIFRED, 50s, in a pantsuit, holds a cake box. LEOPOLD, 30s, in a delivery uniform, holds a balloon bouquet. DANIKA, 20s, in a bridesmaid dress, holds a phone with no signal. VIJAY, 40s, in a tux, holds nothing but a ring box.
[beat 1] Everyone smiles tightly. WINIFRED: It's fine. It's a minor delay.
[beat 2] DANIKA: You're the groom? VIJAY: Best man.
[beat 3] DANIKA: Where's the ring? VIJAY: In the box. It's in the box. It's in the box.
[beat 4] The intercom crackles. MAINTENANCE: Hello in there? Is anyone in the elevator? LEOPOLD: Four of us!
[beat 5] MAINTENANCE: Great. Quick question. Do any of you have a wedding to be at?
[beat 6] All four stare at one another. WINIFRED: Why do you ask?
[beat 7] MAINTENANCE: Because the groom just called. He says the bride's mother is stuck in an elevator with a cake, the best man, and a bridesmaid, and a balloon guy.
[beat 8] Winifred closes her eyes. WINIFRED: I am the mother.
[beat 9] Vijay opens the ring box. It's empty. VIJAY: Okay.

### SCENE s00400 | INT. GENERATION SHIP "KESTREL" - CARGO HOLD C - NIGHT SHIFT
Characters: TOMASZ, REN, ASTRID, BASHIR
[beat 0] Stacked cryo-crates. Condensation drips from the ceiling. Cold light, long shadows. A hatch in the far wall is sealed with yellow tape. TOMASZ, 50, crew chief, in a quilted jacket, leans against a crate. REN, 20s, logistics, holds a tablet. ASTRID, 40, a medic, kneels beside a cracked cryo-pod. BASHIR, 30s, an engineer, stands at the sealed hatch with a wrench.
[beat 1] TOMASZ: Count again. REN: Two hundred twelve. ASTRID: Two hundred eleven. This one's empty. BASHIR: Two hundred ten. I counted the manifest. TOMASZ: You don't count the manifest. You count the pods. REN: The manifest says two hundred twelve. BASHIR: The manifest is old.
[beat 2] ASTRID: This pod isn't cracked from the outside. REN: What do you mean? ASTRID: The glass bowed out. Someone woke up in here.
[beat 3] TOMASZ: Nobody wakes up. We don't wake until arrival. BASHIR: Then someone did.
[beat 4] TOMASZ: Then someone's in this ship we don't know about. REN: That's impossible. ASTRID: So is the pod.
[beat 5] BASHIR: The hatch is taped from the inside.
[beat 6] They all turn to him. He taps the yellow tape with the wrench. It is peeled from the inside edge.
[beat 7] TOMASZ: Open it. BASHIR: I'd rather not. TOMASZ: Open it. BASHIR: I'd rather you didn't.
[beat 8] Behind the hatch, someone knocks, once. Politely.

### SCENE s00401 | INT. MERCANTILE TRUST BANK - SUBLEVEL VAULT CORRIDOR - NIGHT
Characters: ARTUR VOSS, LENNOX BAILEY, SHERWIN
[beat 0] Concrete. Fluorescent hum. A steel door the size of a garage stands half-open at the end of the hall. A cleaning cart is parked against the wall, its mop bucket empty. ARTUR VOSS, 40s, in a gray cleaner's coverall, walks down the corridor with a push broom. He moves with a lazy rhythm, humming. LENNOX BAILEY, 30s, in an identical coverall, follows a few steps behind, carrying a clipboard.
[beat 1] ARTUR: You're nervous. LENNOX: I'm not nervous. ARTUR: You're humming. LENNOX: You're humming. ARTUR: I always hum. LENNOX: Then so do I.
[beat 2] They stop at the vault door. The broom hangs from Artur's hand. Lennox taps the clipboard on his thigh.
[beat 3] ARTUR: Check the schedule. LENNOX: It says night staff leaves at midnight. ARTUR: What time is it? LENNOX: Eleven fifty-one.
[beat 4] ARTUR: He's late. LENNOX: He's early. He said eleven fifty-five. ARTUR: Who said? LENNOX: He did. ARTUR: Which he? LENNOX: The one with the keys.
[beat 5] Artur's smile is thin. He leans the broom against the wall and wipes his palms on his hips.
[beat 6] ARTUR: He told you eleven fifty-five. LENNOX: He told me. ARTUR: He told me twelve ten. LENNOX: Then one of us is lying. ARTUR: Or he is.
[beat 7] They look at each other. Lennox's clipboard has stopped moving.
[beat 8] Down the corridor, an elevator DINGS. Both turn. LENNOX: That's early. ARTUR: Someone's coming. LENNOX: Which one's he? ARTUR: I don't know.
[beat 9] They stand very still as the elevator doors slide open. A figure steps out, but it is cast in shadow and light, impossible to read. He holds a ring of keys that jingles with each step.
[beat 10] The figure raises one hand. Lennox's hand goes to his coverall pocket. Artur's goes to the mop handle. LENNOX: Who is it? ARTUR: Don't move.
[beat 11] The figure stops ten feet away. In the light, a chin, a mouth, a nervous smile.
[beat 12] LENNOX: Mr. Sherwin. SHERWIN: Evening, boys.
[beat 13] Artur lets his breath out. Lennox lets his out, too, and both look sheepish. ARTUR: You're late. LENNOX: He's early.
[beat 14] The keys jingle. Sherwin steps closer, and in the corridor light we see what the shadows hid: a revolver, hanging loose at his side. SHERWIN: I'm exactly on time.
[beat 15] Neither man moves.
[beat 16] ARTUR: Mr. Sherwin. What's the gun for? SHERWIN: For the one of you who's going to ask what the gun is for. LENNOX: That's Artur. ARTUR: That's Lennox. SHERWIN: It doesn't matter.
[beat 17] He raises the gun. Artur dives behind the cart. Lennox hits the floor. The shot rings off concrete and the cart bucket rolls across the corridor, ringing like a bell. ARTUR: He's got six! I count five! LENNOX: Count again!
[beat 18] Another shot. The fluorescent tube above them bursts. Sparks. Darkness.
[beat 19] The echo dies in the corridor, and in the dark someone, slowly, begins to hum.

### SCENE s00402 | INT. DOUBLEWIDE TRAILER - LIVING ROOM - DAY
Characters: FLORENCE, EZEKIEL, DARIUS, LOLA, IGNATIUS, WANJIRU
[beat 0] A cramped, wood-paneled room crowded with an old man's life: a recliner, a gun rack with no guns, stacks of National Geographic, a fish tank gone green. Boxes labeled in marker line the walls. FLORENCE, 60s, eldest, in a church dress, sits on the sofa with a legal pad. EZEKIEL, 50s, her brother, stands at the window with his arms crossed. DARIUS, 30s, a nephew in a work shirt, sits on a box. LOLA, 20s, a niece in cutoffs, picks at the fish tank lid. IGNATIUS, 40s, the lawyer in a cheap suit, stands by the door with a folder. WANJIRU, 70s, Uncle Teodoro's long-time neighbor, sits very still in the recliner.
[beat 1] FLORENCE: Mr. Ignatius, read the will. IGNATIUS: It's brief. EZEKIEL: It always is.
[beat 2] IGNATIUS: "To my sister Florence, the clock. To my brother Ezekiel, the truck. To my nephew Darius, the tools. To my niece Lola, the fish."
[beat 3] LOLA: The fish. DARIUS: He left her the fish. LOLA: The fish are dead. FLORENCE: That's what you inherit, dear.
[beat 4] Ezekiel turns from the window. His jaw is tight. EZEKIEL: And the land?
[beat 5] IGNATIUS: There is a final line. FLORENCE: Read it.
[beat 6] IGNATIUS: "The land and the trailer I leave to Wanjiru, who stayed."
[beat 7] For a moment, no one moves.
[beat 8] Then Ezekiel strides across the room, grabs a stack of magazines, and hurls them against the wall. They burst into a fan of glossy pages. Darius leaps up, boxes toppling, and Lola scrambles back onto the sofa. Florence stands, and Wanjiru does not.
[beat 9] EZEKIEL: Stayed? He stayed! We all stayed! We just stayed somewhere else! FLORENCE: Ezekiel, sit. EZEKIEL: No.
[beat 10] He kicks the nearest box. It splits, and paperbacks tumble out. Darius lunges for his arm, and the two stumble against the fish tank, which rocks, slops green water, and settles. Ignatius backs against the door.
[beat 11] Wanjiru finally speaks. WANJIRU: He knew you would do this.
[beat 12] Everyone stops. They look at the old woman in the recliner. She folds her hands.
[beat 13] WANJIRU: That's why he told me where the key is.
[beat 14] She opens her palm. In it, a small brass key, tarnished and warm.

### SCENE s00403 | INT. ART RESTORATION LAB - NIGHT
Characters: CELESTE DUMAS, IVO, SABINE, ANTON KOLOSOV
[beat 0] White light over an easel. Solvent fumes. A large Dutch still life lies on the table, its lower third scraped to the ground layer. CELESTE DUMAS, 40s, conservator, in white gloves and a magnifying visor, works a cotton swab along a patch of ochre with the calm of someone defusing a bomb. IVO, 30s, her assistant, photographs each stroke. SABINE, 20s, a student, holds a lamp so steady it seems to be part of her arm.
[beat 1] CELESTE: There's something under the lemon. IVO: Under? SABINE: It's a signature. CELESTE: It's not the artist's. IVO: Whose? CELESTE: Look at the letters. They're pressed in from behind.
[beat 2] The swab pauses. Under the lemon, a ghostly mark appears, a thin cross-hatched initial. Ivo steps closer, his camera dropping.
[beat 3] IVO: That's the Fenwick stamp. SABINE: The forgery ring? CELESTE: Not a forgery. A transfer. The original is under this one.
[beat 4] The door at the end of the lab clicks open. All three look up. ANTON KOLOSOV, 50s, in a long coat dusted with rain, stands in the doorway holding a key card in one hand and a thin black briefcase in the other.
[beat 5] KOLOSOV: Don't touch the lemon. CELESTE: Mr. Kolosov. How did you get in? KOLOSOV: I paid for the lock.
[beat 6] IVO: You were told the lab is closed. KOLOSOV: And I was told this painting was clean. We are all disappointed tonight.
[beat 7] Sabine lowers the lamp. Light slides off the canvas and across the floor, across his shoes.
[beat 8] Celeste straightens, and her hand, quietly, finds the solvent bottle.

### SCENE s00404 | INT. FAMILY ATTIC - LATE AFTERNOON
Characters: HENRIK LUND, SIGRID
[beat 0] Slanted rafters. Dust motes. A circular window throws a pale coin of light on boxes, a dress form, and an old trunk with brass corners. HENRIK LUND, 70, in a cardigan, sits on the trunk with a cardboard box in his lap. His daughter SIGRID, 40, stands by the window with a roll of packing tape and a marker.
[beat 1] HENRIK: This one says "Christmas." SIGRID: Then keep it. HENRIK: It's got one ornament in it. SIGRID: Then it's the right box.
[beat 2] HENRIK: Your mother wrapped them in newspaper. It's from 1979. SIGRID: Dad. HENRIK: It's a very nice paper.
[beat 3] SIGRID: Dad, we have to be out by Friday. HENRIK: I know the date. SIGRID: The buyers are bringing a truck. HENRIK: I know about the truck.
[beat 4] SIGRID: Then what are you doing? HENRIK: I'm reading the newspaper. SIGRID: It's forty years old.
[beat 5] HENRIK: Yes. It says the harbor froze. There's a photo of your uncle on the ice. SIGRID: Uncle Jonas? HENRIK: With a fish as long as his arm. SIGRID: He lied about that fish. HENRIK: He lied about all of them.
[beat 6] SIGRID: You could take the photo. HENRIK: I could. SIGRID: You could take the box. HENRIK: I could take the ornament. SIGRID: That's the idea.
[beat 7] HENRIK: Sigrid. SIGRID: Yes.
[beat 8] HENRIK: When I'm gone, who will remember where the box was? SIGRID: Me. HENRIK: You won't. SIGRID: I will. HENRIK: You'll be in another country. SIGRID: Then I'll remember it from there.
[beat 9] HENRIK: That's not the same. SIGRID: No. It's not. HENRIK: But it's what we have. SIGRID: It's what we have.
[beat 10] HENRIK: Hand me the tape. SIGRID: You're keeping it? HENRIK: I'm closing it. You said I could keep it. SIGRID: I did. HENRIK: Then keep the tape.
[beat 11] She hands him the roll. He seals the box, slowly, the tape shrieking, and she writes on the lid in marker: HENRIK, LAST BOX.

### SCENE s00405 | INT. RUINED CHURCH - MOUNTAIN PASS - DAWN
Characters: SERGEANT MALLORY, PRIVATE DIAZ, CORPORAL OKONJO, PRIVATE FENWICK, PADRE LUCIANO
[beat 0] The roof is gone. Gray light falls in cold shafts between blackened beams. Pews are splintered kindling. Over the altar, a cracked stone Madonna still holds up one hand. Snow has drifted through the nave, and boot prints cross it in a ragged line.
[beat 1] SERGEANT MALLORY, 40s, a lean, gray-stubbled man with a rifle across his back, crouches behind the altar rail. His eyes are red from no sleep. He peers over the stone at the door.
[beat 2] PRIVATE DIAZ, 19, lies on a pew with a bandaged thigh, face pale as paper, watching the sky through the roof. CORPORAL OKONJO, 30s, tall and broad, with a radio on his back, stands guard at a side window. PRIVATE FENWICK, 20s, a freckled kid in a helmet two sizes too big, sits against the wall, cleaning his rifle with trembling hands.
[beat 3] OKONJO: Quiet out there. MALLORY: Too quiet. DIAZ: I like quiet. FENWICK: You like everything. DIAZ: I like being alive.
[beat 4] Mallory crosses the nave and kneels beside him. He checks the bandage. It's soaked through. He doesn't comment. He just pulls his scarf from his neck and ties it over the wound.
[beat 5] MALLORY: Okonjo. Raise HQ. OKONJO: Tried. Nothing. MALLORY: Try again.
[beat 6] Okonjo cranks the radio. Static. He tries another frequency. Static. He puts the handset down and leans against the window.
[beat 7] OKONJO: Sergeant, something's moving in the pass.
[beat 8] Mallory goes to the window. Down the slope, in the gray, a figure toils up the path, small, bent against the wind. He raises his binoculars. MALLORY: One man. No weapon. Carrying something. FENWICK: Could be a decoy. MALLORY: Could be.
[beat 9] The door of the church swings open. They whirl, rifles up.
[beat 10] In the doorway stands PADRE LUCIANO, 60s, a priest in a black cassock crusted with ice, holding a battered wooden crate to his chest. His face is red with cold and weeping with exhaustion. He lifts his chin.
[beat 11] PADRE LUCIANO: Please. Don't shoot. This is my church.
[beat 12] Nobody lowers a weapon. MALLORY: Father, this is a war zone. PADRE LUCIANO: It was my church before it was a war zone.
[beat 13] He steps inside. Snow melts off his shoulders. He does not seem to see the rifles. He walks past them, up the nave, to the altar, and sets the crate on it with great care.
[beat 14] OKONJO: Sergeant? MALLORY: Wait.
[beat 15] The priest opens the crate. Inside, nestled in straw, are five loaves of bread, a corked bottle, and a small bundle wrapped in oilcloth. He takes out a loaf and holds it to the light. PADRE LUCIANO: My parishioners buried this in the cellar before the shelling. I dug it out this morning.
[beat 16] DIAZ: Is that bread? PADRE LUCIANO: It's bread, my son.
[beat 17] Fenwick lowers his rifle first. Then Okonjo. Mallory is last, and slowest, and he does it with a long breath.
[beat 18] MALLORY: We can't pay. PADRE LUCIANO: I have not asked.
[beat 19] He breaks the loaf and offers a piece to Diaz. Diaz takes it with both hands and eats like a child. The priest moves down the pew, giving, and the soldiers come to him one by one.
[beat 20] Mallory stays by the window. He watches the pass. The wind picks up.
[beat 21] Far off, in the gray, a sound: the low drone of engines. MALLORY: Okonjo. OKONJO: I hear it. MALLORY: How long? OKONJO: Ten minutes. Maybe less.
[beat 22] PADRE LUCIANO: Then we eat quickly.
[beat 23] He turns to the Madonna and bows his head. The soldiers do not pray, but they do not speak either. The engines grow louder.
[beat 24] Fenwick is the first to stand. He sets down his rifle, picks up the priest's empty crate, and begins to stack broken pews against the door.

### SCENE s00406 | INT. SAGEBRUSH SALOON - EVENING
Characters: COLTER, DEACON, MAX, SADIE, JUBILEE
[beat 0] A low, smoky room of rough planks and yellow lamplight. A piano stands in a corner, one leg propped on a barrel. The bar is a single long board across two whiskey casks. Dust hangs in the air like flour. COLTER, 40s, a lean sheriff in a sweat-stained hat, sits at a corner table with his boots on a chair. Across from him, DEACON, 50s, a heavyset rancher in a clean white shirt, plays solitaire. MAX, 20s, a nervous young deputy, stands at the bar. SADIE, 30s, the barkeep, polishes a glass with a rag the color of old bone. JUBILEE, 60s, a woman in a feathered hat, sits at the piano, picking out one lonely note.
[beat 1] COLTER: Deacon, you're short a king. DEACON: I know it. COLTER: Someone took it. DEACON: I took it. COLTER: Why? DEACON: Because I wanted a king.
[beat 2] The piano note rings again. Max shifts his weight. He drums his fingers on the bar.
[beat 3] MAX: Sheriff, he's wearing a gun. COLTER: Everyone's wearing a gun. MAX: I mean under the shirt. SADIE: Max.
[beat 4] Deacon sweeps the cards into a pile. He stands, all six feet and two hundred pounds of him, and walks across the room to the piano. Jubilee does not look up. He lays a coin on the lid.
[beat 5] DEACON: Play something. JUBILEE: I only know the one. DEACON: Then play it.
[beat 6] She plays it. Slow, off-key, a hymn. Colter lowers his boots from the chair. Max backs against the bar. Sadie sets down her glass.
[beat 7] COLTER: Deacon. You're not welcome in town. DEACON: I'm not in town. I'm in a saloon. COLTER: Same thing. DEACON: Not if I buy a drink.
[beat 8] He turns to the bar. Max reaches for his holster.
[beat 9] Colter's hand shoots out and catches the boy's wrist. COLTER: Easy.
[beat 10] Deacon sets a coin on the bar. Sadie looks at it. She looks at Colter. Then she pours, a clear shot of something amber. Deacon lifts it and drinks.
[beat 11] DEACON: I came to say a thing. COLTER: Then say it.
[beat 12] DEACON: Your brother is not dead.
[beat 13] The room goes still. The piano stops. Jubilee's hands hover over the keys. Max stares at the sheriff.
[beat 14] COLTER: Say it again.
[beat 15] Deacon sets down the glass. He and Colter regard each other across the silent room. DEACON: Brother's alive, Sheriff. He's riding with the Hendricks gang. I seen him Tuesday.
[beat 16] Colter stands. His chair scrapes loud. His hand hangs, loose, over his holster.
[beat 17] MAX: Sheriff. Sheriff, don't. COLTER: Deacon. DEACON: Yes.
[beat 18] COLTER: Step outside.
[beat 19] Deacon nods. He turns to the door, and Colter follows. At the threshold, they both stop.
[beat 20] Behind them, the piano resumes: the same note, one note, again and again.

### SCENE s00407 | INT. GLASS GREENHOUSE - WEDDING REHEARSAL - EVENING
Characters: ROSEMARY, DEVLIN, ANTOINETTE, KIERAN, SEUN, LAVINIA
[beat 0] Ranks of potted orchids. Warm fog on the panes. A white aisle runner laid between fern beds. Folding chairs. A trellis arch drapes with unlit fairy lights. ROSEMARY, 30s, the bride, in jeans and a linen blouse, stands at the arch. DEVLIN, 30s, the groom, in a rumpled suit, stands beside her. ANTOINETTE, 60s, the officiant, in a shawl, holds an index card. KIERAN, 30s, the best man, slouches against a pot of cymbidiums. SEUN, 20s, the maid of honor, in a floral wrap dress, holds a bouquet of paper flowers. LAVINIA, 50s, Rosemary's mother, perches on a chair with a clipboard.
[beat 1] LAVINIA: All right, everyone. Positions! KIERAN: Where do I stand? SEUN: Next to the groom. KIERAN: Which one's the groom? DEVLIN: I'm the groom. KIERAN: Oh. Yeah.
[beat 2] ANTOINETTE: Dearly beloved. ROSEMARY: Do we say that? ANTOINETTE: It's traditional. ROSEMARY: It's a little dead. ANTOINETTE: It's very old.
[beat 3] LAVINIA: They'll be late for the caterer.
[beat 4] Seun glances at Kieran. Kieran glances at Seun. Both look away. She straightens the bouquet. He picks at a leaf. The fairy lights flick on, then off.
[beat 5] DEVLIN: You look nervous. ROSEMARY: I'm not. DEVLIN: You're holding your breath. ROSEMARY: It's the humidity.
[beat 6] DEVLIN: Ro. ROSEMARY: He looked at her. DEVLIN: Who? ROSEMARY: Kieran. At Seun. DEVLIN: They're the best man and the maid of honor. They're supposed to look at each other. ROSEMARY: Not like that.
[beat 7] Antoinette clears her throat and taps the card.
[beat 8] ANTOINETTE: Does anyone object? A silence. Everyone looks at one another. LAVINIA: It's a rehearsal. No one objects.
[beat 9] KIERAN: Actually.
[beat 10] All heads turn. Kieran is looking at Seun. She stares back, wide-eyed.
[beat 11] KIERAN: Nope. Never mind. SEUN: Oh no.
[beat 12] The fairy lights blaze on, all at once, and a hundred small gold stars shine above the arch.

### SCENE s00408 | EXT. APARTMENT ROOFTOP - WATER TANK - DAY
Characters: DANTE, REMY, ALVAREZ
[beat 0] Tar paper and heat shimmer. A wooden water tower hunches on iron legs. A rusted ladder climbs its side. Below, a city sprawls into haze. DANTE, 17, in a stained T-shirt, scrapes flaking paint from a pipe with a putty knife. His brother REMY, 14, holds a bucket of sealant and a rag.
[beat 1] REMY: Dante. DANTE: Yeah. REMY: Can I try? DANTE: You'll drop it. REMY: I won't. DANTE: You dropped the last one. REMY: That was a wrench. DANTE: It's the same thing.
[beat 2] Remy sets the bucket down. He plants his hands on his hips. Dante keeps scraping.
[beat 3] REMY: Dad said we could split it. DANTE: Dad said I could handle it. REMY: He said split. DANTE: He said it to be nice. REMY: Dante. DANTE: Remy. REMY: I'm fourteen. DANTE: You're fourteen and a half. REMY: That's what I said.
[beat 4] Dante sighs. He hands over the knife. Remy takes it, and the metal catches the sun. He crouches by the pipe, tongue between his teeth, and scrapes.
[beat 5] DANTE: Not that hard. REMY: It's rusty. DANTE: It's rusty, not stubborn. REMY: You don't know that.
[beat 6] A chunk of paint falls away. Underneath, the pipe gleams, a bright silver gash. Remy beams.
[beat 7] REMY: Look! DANTE: Nice. REMY: You didn't look. DANTE: I looked. REMY: You didn't.
[beat 8] Dante turns. The pipe shines. Something in his face changes.
[beat 9] He reaches out, as if to touch it, and then the ladder rattles. Both freeze.
[beat 10] A head pokes over the edge of the roof: MRS. ALVAREZ, from 4C, an old woman in a housecoat, hauling a laundry basket. DANTE: No. REMY: She's going to see. DANTE: She won't see. REMY: She's looking right at it.
[beat 11] Mrs. Alvarez squints, adjusts her glasses, and sets the basket on the tar paper. She says nothing. Dante and Remy stare at her. She stares back, and then, slowly, she turns and begins to hang a towel on the line.
[beat 12] REMY: She's not going to say anything. DANTE: Don't talk.
[beat 13] They crouch together behind the tank. Remy hands Dante the knife. Dante hands Remy the rag. They go back to work, shoulder to shoulder, trading the tools without looking.
[beat 14] Dante drops the knife. It clatters. They both freeze again.
[beat 15] REMY: You dropped it. DANTE: Shut up. REMY: You dropped it, Dante. DANTE: It slipped. REMY: It slipped.
[beat 16] Dante shoves him. Remy shoves back. They tumble into the bucket, which tips, and sealant oozes across the roof in a black tongue. Mrs. Alvarez, at the line, calmly continues hanging her wash.
[beat 17] DANTE: Look what you did. REMY: Look what you did!
[beat 18] They both scramble for the spill, rags and hands, then laugh, because there is nothing else to do.

### SCENE s00409 | INT. BASEMENT REC ROOM - PING-PONG TOURNAMENT - NIGHT
Characters: SUNNY, BOOKER, MILO, FRANCESCA
[beat 0] Wood paneling and low ceiling. A single table under a bare bulb. Folding chairs hold a dozen onlookers, cans of soda in hand. A chalkboard bracket hangs on the wall, with SUNNY and BOOKER circled at the bottom. SUNNY, 20s, a wiry woman in a headband and a retro track jacket, bounces the ball on her paddle. BOOKER, 40s, a big, slow man in a cardigan, wipes his hands on his pants. MILO, 12, the referee, sits on a stepladder with a whistle and a clipboard. FRANCESCA, 50s, Booker's wife, holds a thermos at courtside.
[beat 1] MILO: Nine to eight, Sunny. SUNNY: I know. BOOKER: I know.
[beat 2] They say it together. Both flinch.
[beat 3] SUNNY: I know the score. ^BOOKER Let's finish this. MILO: Serve.
[beat 4] Sunny serves. Booker slams it back. The ball skims the net and drops onto Sunny's side, where it rolls off the table's edge and under a chair.
[beat 5] FRANCESCA: Point, Booker! MILO: Nine to nine. Final game point.
[beat 6] The crowd murmurs. Sunny retrieves the ball, blows on it, and tosses it to Booker.
[beat 7] SUNNY: Your serve. BOOKER: You sure? SUNNY: I like to win clean.
[beat 8] Booker grins. He rolls his shoulders, steps back, and lets the ball fly. Sunny returns it with a snap. It arcs high. Booker drives it down in a smash that rings on the table. Sunny dives, paddle outstretched, and flicks it back from the floor.
[beat 9] The ball hangs in the air. Everyone holds their breath. It lands, clips the edge, and drops. MILO: Point... Sunny.
[beat 10] The room erupts. Sunny leaps up, fists raised. Booker bows his head, laughs, and holds out a hand.
[beat 11] BOOKER: Well played. SUNNY: You almost had me. FRANCESCA: He always almost has them.

### SCENE s00410 | EXT. DESERT WELL - DUSK
Characters: AMOS, HESTER, STRANGER, CALLOWAY
[beat 0] A dry well, a rope, a bucket. Sage and rock. The sun is a red coin.
[beat 1] AMOS, 60s, a grizzled prospector, hauls the bucket up hand over hand. Empty. He tosses it aside. Beside him, HESTER, 30s, in a long gray coat, holds a rifle loosely.
[beat 2] A STRANGER, 40s, stands thirty yards off on a ridge, a black silhouette against the sky.
[beat 3] HESTER: He's been there an hour. AMOS: He's patient. HESTER: Or dumb. AMOS: Maybe both.
[beat 4] The Stranger lifts a hand. He starts down the slope, slow, each step careful.
[beat 5] HESTER: Want me to? AMOS: Not yet.
[beat 6] He reaches the well. Close up, he's older than he seemed, with a gray beard and a limp. He tips his hat.
[beat 7] STRANGER: Afternoon. AMOS: Evening. STRANGER: Is there water? AMOS: Not for a week.
[beat 8] The Stranger nods. He sits on a rock, puts down his pack.
[beat 9] STRANGER: I'm Calloway. Samuel Calloway. HESTER: Great. CALLOWAY: You know me. HESTER: We know the name.
[beat 10] Amos stiffens. His hand goes to his belt. Hester's thumb finds the hammer.
[beat 11] CALLOWAY: I'm not here for trouble. AMOS: Then why?
[beat 12] CALLOWAY: Because the man who shot your son is dead.
[beat 13] A beat. The wind drops. Hester's rifle sags. Amos stares at the Stranger for a long moment, his eyes wet in the red light.
[beat 14] AMOS: Who did it? CALLOWAY: I did.
[beat 15] Silence. Amos turns, picks up the bucket, and walks back to the well. He hangs it on its hook. His hand lingers on the rope.
[beat 16] HESTER: Amos. AMOS: Give him your canteen.
[beat 17] Hester doesn't move. Then, slowly, she unslings it and tosses it to the man on the rock.

### SCENE s00411 | INT. COUNTY COURTHOUSE - DEFENSE ATTORNEY'S OFFICE - NIGHT
Characters: THEODORA WREN
[beat 0] A narrow, windowless room lit by a green banker's lamp. Case files tower on the desk. A coffee ring has dried on a closing-argument draft. A dictaphone sits by a cold sandwich.
[beat 1] THEODORA WREN, 50s, defense counsel, in a rumpled suit with her shoes off, paces between the desk and the file cabinet with a legal pad. She stops, scribbles a line, crosses it out, tears the page off, crumples it, and throws it at the wastebasket. It misses. Behind her, through the glass door, the empty gallery waits with its rows of dark benches and the quiet of a held breath, and above it all the clock ticks past two.
[beat 2] THEODORA: Members of the jury. She shakes her head and tries again, lower. THEODORA: Ladies and gentlemen. You have heard from forty witnesses.
[beat 3] She stops. She presses the heel of her hand to her eyes. Then she sits, flicks on the dictaphone, and a red light glows.
[beat 4] THEODORA: Closing, version nine. Begin.
[beat 5] She clears her throat. Her voice drops into the cadence of a long-practiced speech. THEODORA: Members of the jury. For three weeks, you've been told a story. You've been told it by a man in a good suit with a binder and a smile. And I want you to ask yourselves one question, only one: who benefits from this story being true?
[beat 6] She stops the tape. Rewinds. Plays it back. THEODORA: Who benefits from this story being true?
[beat 7] She winces. Stops it. Lets out a long sigh. THEODORA: Terrible.
[beat 8] She goes to the file cabinet, pulls a drawer, and lifts out a thick folder. She weighs it in her hands: the transcripts, the exhibits, the blood evidence, the long dull ledger of a case that began as a footnote and swallowed a year of her life.
[beat 9] She sets it on the desk and opens it to a photograph. A young man, grinning, in a graduation cap. She traces his face with a fingertip.
[beat 10] THEODORA: I don't know if you did it.
[beat 11] She picks up the dictaphone. THEODORA: New take. Members of the jury. I don't know if my client is innocent. I don't know. I've never known. And neither does the prosecutor, though he has spent three weeks pretending otherwise.
[beat 12] She stops. She stares at the red light. She is shaking.
[beat 13] THEODORA: But I know this: a reasonable doubt is not a flaw in the law. It's the law's only conscience. And if there is a single one of you who cannot say, with a clear heart, that he did it, then you must say that he did not.
[beat 14] The light on the dictaphone stutters. The tape runs out with a soft clack. She sits in the sudden quiet, hand over her mouth, and in the empty gallery beyond the glass, a bench creaks as if someone, an old or invisible juror, has shifted to listen.
[beat 15] She lowers her hand. Tears track down her face, and she wipes them with the back of her wrist, laughing a little. THEODORA: That's the one.
[beat 16] She rewinds the tape. Plays it back. THEODORA: ...then you must say that he did not.
[beat 17] She nods, sets the dictaphone down, and for the first time that night, reaches for the cold sandwich.

### SCENE s00412 | INT. LATE-NIGHT NOODLE BAR - NIGHT
Characters: JOSEFINA, CASPIAN, WREN, BASIL
[beat 0] Steam. Fluorescent. Six stools at a counter, two booths. A neon sign buzzes: OPEN 'TIL SOMEONE LEAVES. JOSEFINA, 28, in a rain-soaked red coat, sits alone at the counter slurping noodles. CASPIAN, 30, in a bicycle courier's jacket, drips onto the stool next to hers. WREN, 60s, the owner, wipes the counter. BASIL, 20s, the dishwasher, drags a bus tub of bowls through the kitchen door.
[beat 1] CASPIAN: Is this seat free? JOSEFINA: It's a counter. CASPIAN: That's not a no. JOSEFINA: That's a counter.
[beat 2] He sits. Wren sets a bowl in front of him without being asked. WREN: Caspian. Usual. CASPIAN: Thanks, Wren.
[beat 3] JOSEFINA: You're a regular. CASPIAN: Eleven months. JOSEFINA: I've been coming for three years. CASPIAN: I would've remembered. JOSEFINA: I'm very forgettable. CASPIAN: You're wearing a red coat.
[beat 4] She looks down at it, then at him. A noodle dangles from her chopsticks.
[beat 5] Basil emerges from the kitchen, sees them, and pauses. BASIL: Wren, do we have more broth? WREN: Back left. BASIL: Okay.
[beat 6] He leaves. Josefina and Caspian eat in silence. The neon buzzes.
[beat 7] CASPIAN: I have a question. JOSEFINA: Okay. CASPIAN: Why do you sit at the counter? JOSEFINA: Why do you? CASPIAN: Because the booths have a wall. You can't see anyone. JOSEFINA: That's the point. CASPIAN: Of the booth? JOSEFINA: Of not wanting to be seen.
[beat 8] A pause. Caspian lays down his chopsticks. He turns his stool slightly toward her.
[beat 9] CASPIAN: Are you hiding? JOSEFINA: From who? CASPIAN: I don't know. From the night? JOSEFINA: That's very poetic. CASPIAN: It's very late. JOSEFINA: It's two a.m.
[beat 10] CASPIAN: I know. I've been delivering since six. JOSEFINA: You work twenty hours? CASPIAN: Nineteen. I get a nap.
[beat 11] She laughs, a short, startled sound. She covers her mouth, embarrassed, and Wren glances up with a small smile.
[beat 12] JOSEFINA: You're a bad influence. CASPIAN: You're a good listener. JOSEFINA: I haven't said anything. CASPIAN: That's the best kind.
[beat 13] She meets his eyes. A beat. She nudges her half-eaten bowl toward him with one finger.
[beat 14] JOSEFINA: Finish it. CASPIAN: Are you sure? JOSEFINA: You've been nineteen hours.
[beat 15] He takes the bowl. Wren sets a second pair of chopsticks beside it. Basil, in the kitchen doorway, shakes his head in awe.
[beat 16] BASIL: She never shares. WREN: Back to the dishes.

### SCENE s00413 | EXT. GLACIER CAVE MOUTH - DAWN
Characters: MORWENNA, IVAR
[beat 0] A cathedral of blue ice. Cold fire glints along its roof. Wind keens through a crack as tall as a house. Snow whips past the entrance. MORWENNA, 30s, a ranger in a hooded sealskin cloak with a spear, plants her feet at the cave mouth. IVAR, 70s, her mentor, white-bearded, leaning on a staff of driftwood, wheezes beside her.
[beat 1] MORWENNA: It's in there. IVAR: It's always been in there.
[beat 2] She steps forward. The ice floor groans. A low note thrums from deep inside the cave, a note too big for a throat. They both freeze. The crack in the ceiling widens by a finger's width, and a skein of powder sifts down on their shoulders.
[beat 3] IVAR: It knows you. MORWENNA: It doesn't.
[beat 4] Out of the dark, an eye opens, pale as a moon, vertically slit. It regards them.
[beat 5] Morwenna lifts her spear. Ivar grabs her wrist. They struggle, once, hard, until the spear clatters on the ice.
[beat 6] IVAR: No weapons. Never weapons.
[beat 7] The eye blinks. The wind falls away. Morwenna looks at the old man, then at the eye, and slowly, she kneels.

### SCENE s00414 | INT. TINY TEA SHOP - MORNING
Characters: PERPETUA OLDFIELD, SAMUEL
[beat 0] A shop the width of a hallway. Shelves of tins to the ceiling. A brass scale. A counter polished by decades of elbows. A bell above the door. PERPETUA OLDFIELD, 60s, in a lilac cardigan, stands behind the counter arranging tins by color. SAMUEL, 30s, a young man in an ill-fitting blazer, stands at the other side with a clipboard.
[beat 1] SAMUEL: Mrs. Oldfield, I'm from the council. PERPETUA: Lovely. Tea? SAMUEL: I'm not supposed to. PERPETUA: Of course. Which kind? SAMUEL: Whatever you have. PERPETUA: I have two hundred and fourteen. SAMUEL: Whichever is fastest. PERPETUA: Oh, that would be a gunpowder green. It rolls itself.
[beat 2] She takes a tin down, measures leaves onto the brass scale, adds one, takes one away.
[beat 3] SAMUEL: It's about the inspection. PERPETUA: Mm.
[beat 4] SAMUEL: Your sign is two inches over the permitted size. PERPETUA: Is it? SAMUEL: By code. PERPETUA: Which code? SAMUEL: Section nineteen. Paragraph four. Subsection... B. PERPETUA: Subsection B has always been my favorite.
[beat 5] She pours hot water from a kettle into a small white pot. The steam rises between them. Samuel adjusts his tie.
[beat 6] SAMUEL: I don't want to give you a violation. PERPETUA: Then don't. SAMUEL: It's the law. PERPETUA: So it is.
[beat 7] She sets a cup in front of him. He looks at it. He looks at his clipboard.
[beat 8] SAMUEL: I really shouldn't. PERPETUA: It's only tea.
[beat 9] He takes the cup. Sips. His eyes widen slightly. He lowers the clipboard onto the counter.
[beat 10] SAMUEL: This is very good. PERPETUA: It's the leaf.
[beat 11] SAMUEL: Is it the sign? PERPETUA: Excuse me? SAMUEL: The sign. Is it good tea because of the sign? PERPETUA: Mr. Samuel. I think you should take another sip.
[beat 12] He does. He sits on the stool by the counter. She goes back to arranging tins. The bell does not ring. Outside, the sign, two inches too large, swings gently in the wind.

### SCENE s00415 | INT. SALT-MINE OBSERVATORY - NIGHT
Characters: CASSIA, DOMINIC
[beat 0] A cavern hewn from white crystal, three kilometers under a desert. Great mirrors tilt on rails, collecting the dark. Salt crystals glitter in the lamplight like frozen stars. CASSIA, 30s, an astronomer in a headlamp and thermal suit, crouches over a console. Across the cavern, DOMINIC, 50s, her supervisor, stands at a railing, staring into the largest mirror.
[beat 1] CASSIA: Dominic. Come see this. DOMINIC: I'm busy. CASSIA: It isn't noise. DOMINIC: It's always noise. CASSIA: It repeats every eleven seconds.
[beat 2] He turns. He walks toward her, slowly, and the walk becomes a stride. At the console, he leans over her shoulder.
[beat 3] DOMINIC: That's the same signal. CASSIA: That's what I said. DOMINIC: From the same place? CASSIA: From inside the planet.
[beat 4] A long pause. In the mirror behind them, the dark ripples, as though it has caught its own breath.
[beat 5] DOMINIC: Cassia, switch off the receivers. CASSIA: Why? DOMINIC: Because it's answering.
[beat 6] The console beeps. A new line of numbers scrolls across the screen, an eleven-second pulse, perfectly in time with her heartbeat. CASSIA: Dominic. DOMINIC: I know.
[beat 7] She lays her hand over the switch. He lays his hand over hers. Neither pulls it down.

### SCENE s00416 | INT. VANTAGE LOGISTICS - CONFERENCE ROOM - DAY
Characters: GLORIA, MURRAY, FITZGERALD
[beat 0] A glass box with a long table and a screen. A "Q3 SYNERGY ROADMAP" slide glows. A bowl of unopened mints sits at the center. GLORIA, 40s, regional director, taps a laser pointer on the screen. MURRAY, 50s, a senior manager, scribbles notes with a pen that has clearly run out of ink. Neither looks at the other.
[beat 1] GLORIA: We'll circle back. MURRAY: We circled back last week. GLORIA: We'll circle back again.
[beat 2] Murray presses harder on the pen. The pen refuses. He sets it down and eyes the mints.
[beat 3] The door opens. FITZGERALD, 20s, the new hire, in a suit too bright for the room, peeks in with a stack of binders. He has the face of someone who's been told "it's easy" many times.
[beat 4] FITZGERALD: Sorry. Is this the roadmap meeting? MURRAY: It's the road. We're still waiting on the map. FITZGERALD: Great! I brought binders.
[beat 5] Gloria and Murray exchange a look. Fitzgerald distributes the binders. He gives one to Murray, who weighs it as if it were a brick. He gives one to Gloria, who doesn't open it.
[beat 6] FITZGERALD: So, where are we on the deliverables? GLORIA: He asked about deliverables. MURRAY: He asked about deliverables. FITZGERALD: Is that bad?
[beat 7] Murray reaches for a mint. He unwraps it, slowly, popping it into his mouth. He chews. Gloria watches him. Fitzgerald watches both.
[beat 8] MURRAY: The deliverables, Fitzgerald, are the things we deliver. FITZGERALD: And what do we deliver? GLORIA: Meetings.
[beat 9] A long silence. Fitzgerald nods, writing it down.

### SCENE s00417 | INT. COUNTY COURTROOM 4 - DAY
Characters: LEOCADIA FERRARA, MALACHI GRANT, JUDGE OSTROWSKI, BAILIFF FINN
[beat 0] Oak and old varnish. A high bench, a jury box, a gallery of pews. The flag hangs limp. The air conditioner wheezes. LEOCADIA FERRARA, 50s, defense attorney, in a gray suit with a silk scarf, stands at the lectern, one hand resting lightly on a stack of exhibits. At the prosecution table, MALACHI GRANT, 40s, the DA, sits with his fingers steepled, watching her with the patience of a man who has watched many people fall. Behind the bench, JUDGE OSTROWSKI, 60s, a heavy-lidded woman with half-moon glasses, rolls a pen between her fingers. At the rail, BAILIFF FINN, 30s, stands with his arms behind his back, stoic as a pillar.
[beat 1] LEOCADIA: Your Honor, the defense calls its final witness. JUDGE OSTROWSKI: Who would that be, Ms. Ferrara? LEOCADIA: The defendant's mother.
[beat 2] MALACHI: Objection. JUDGE OSTROWSKI: Basis? MALACHI: She wasn't disclosed. LEOCADIA: She's been on the list since March. MALACHI: She was struck from the list in April. LEOCADIA: By whom? MALACHI: By your own office. LEOCADIA: That's a clerical error. MALACHI: It's a convenient one.
[beat 3] Judge Ostrowski sets down the pen. She removes her glasses and rubs the bridge of her nose. The courtroom holds still, the only sound the wheeze of the air conditioner.
[beat 4] JUDGE OSTROWSKI: Bailiff, bring the jury out. BAILIFF FINN: Yes, Your Honor.
[beat 5] He opens the jury room door. Twelve men and women file out one by one, wearing the glazed expressions of the three-week juror, and sit in the box. A woman in the back row clutches her purse. A man in the front picks at his thumbnail.
[beat 6] Leocadia waits until the last juror has settled. Then she walks to the center of the room, past the lectern, past the exhibits, and stops directly before the jury box.
[beat 7] LEOCADIA: Ladies and gentlemen. The state has told you a story. It is a clean story. It has a beginning, a middle, and an end, and in that end, a man you have never met is guilty. I want to tell you a different one. It is not clean. It has loose threads and missing pages. It begins with a woman who sat in a hallway for six hours waiting to see her son, and it ends with a woman who sat in the same hallway for three weeks.
[beat 8] MALACHI: Your Honor, this is argument. JUDGE OSTROWSKI: Sit down, Mr. Grant.
[beat 9] He sits. His jaw is tight. Leocadia does not turn.
[beat 10] LEOCADIA: I am not going to ask you to believe my client. I'm going to ask you to believe his mother, because she has no reason to lie that the evidence has not already given her. She has already lost him once. She cannot afford to lose him twice. And if, at the end of this trial, you cannot say beyond every doubt that the man at that table did what the state says he did, then it is not a verdict she is waiting for. It is a hallway.
[beat 11] She stops. The silence in the room has changed from heavy to taut. Judge Ostrowski lowers her pen.
[beat 12] JUDGE OSTROWSKI: Mr. Grant, your objection is overruled. Bailiff, bring in the witness.
[beat 13] Finn pulls open the double doors. In the corridor beyond, a small figure in a faded blue dress stands with her hands clasped before her, waiting to be asked.
[beat 14] Malachi stands slowly, but he does not speak. Leocadia nods to the figure in the doorway. The woman steps forward, one pace at a time, down the long aisle, and the gallery turns as one to watch her come.
[beat 15] JUDGE OSTROWSKI: Madam, please state your name.
[beat 16] The woman takes her place. She looks at the jury, then at her son, then at the DA, and breathes in, and the whole room breathes with her.

### SCENE s00418 | INT. DRIVEWAY BASKETBALL COURT - EVENING
Characters: TEO, LUKA
[beat 0] A cracked asphalt pad under a flickering floodlight. A hoop with a ragged net. Moths whirl in the beam. A bike lies on its side near the garage. TEO, 16, in an oversized hoodie, dribbles the ball in a slow, thoughtful rhythm. His cousin LUKA, 17, taller, leans against the garage door with his arms crossed.
[beat 1] LUKA: You're stalling, Teo. TEO: I'm warming up. LUKA: You're stalling. TEO: I'm warming up for stalling.
[beat 2] Luka pushes off the door. He strides to the court and holds out his hands. Teo hesitates, then bounce-passes. Luka catches it.
[beat 3] LUKA: Twenty-one. Ball to the winner. TEO: It's your ball. LUKA: It's about to be your ball. TEO: You're so sure? LUKA: I'm sure you're afraid.
[beat 4] Teo says nothing. Luka checks the ball to him. Teo catches it, plants a foot, fakes left, goes right. Luka slides. Teo's shot sails up and drops through the net with a clean swish.
[beat 5] TEO: One. LUKA: Lucky. TEO: One.
[beat 6] Luka snatches the ball and dribbles up the court. He drives, bumps Teo's shoulder, and puts up a floater. It clanks off the rim. They both rush for the rebound. Their arms tangle. They both fall, and the ball bounces away into the shadows.
[beat 7] TEO: Foul. LUKA: It's not a foul. TEO: You hit me. LUKA: You hit me.
[beat 8] They lie there on the asphalt, breathing hard, staring at the floodlight. A moth circles above their faces. Neither moves to retrieve the ball.
[beat 9] LUKA: Teo. TEO: Yeah.
[beat 10] LUKA: Your dad called. TEO: I know. LUKA: He said you're not coming home. TEO: He said what? LUKA: That you're staying with us. Through the summer.
[beat 11] Teo sits up. His face closes. He pulls his hood over his head and stares at the garage door.
[beat 12] TEO: He didn't tell me. LUKA: Maybe he wanted me to. TEO: That's cold, Luka. LUKA: He's not cold. He's scared. TEO: Of me? LUKA: Of whatever he's got to say.
[beat 13] Teo gets up. He walks to the edge of the court, stops. The ball rolls out of the dark toward his foot. He stops it with a toe, kicks it up, catches it.
[beat 14] TEO: Twenty-one. LUKA: What? TEO: We play to twenty-one. I'm up by one.
[beat 15] Luka rises. A pause. He wipes his hands on his shorts and gets into a defensive crouch. LUKA: Then check.
[beat 16] Teo checks the ball. Luka taps it back. Teo spins, dribbles, and drives to the hoop. Luka slams into him, both of them tumbling again. The ball flies out of bounds, and the floodlight clicks off, and the court goes dark.
[beat 17] LUKA: Foul. TEO: It's not a foul!

### SCENE s00419 | EXT. SHELL CRATER - NIGHT
Characters: CORPORAL AHN, PRIVATE BOYD, LIEUTENANT SHARMA
[beat 0] Mud. Rain. A flare drifts down over a torn field, throwing hard green light on three men in a hole. CORPORAL AHN, 30s, crouches with a rifle across his knees. PRIVATE BOYD, 19, shivers beside him, clutching a canteen. LIEUTENANT SHARMA, 40s, lies on his back at the crater's rim with binoculars, watching.
[beat 1] SHARMA: Quiet. BOYD: It's all quiet. AHN: Boyd. BOYD: I'm just saying.
[beat 2] Mortar fire thuds far off. The flare dies. Dark.
[beat 3] SHARMA: Two hundred meters. Wire line. A sentry. AHN: One? SHARMA: One.
[beat 4] BOYD: I'll take him. AHN: You won't. BOYD: I'm the best shot. AHN: You're the loudest breather. BOYD: That's not a reason.
[beat 5] SHARMA: Boyd, stay. AHN: I'll go. SHARMA: Wait for the next flare.
[beat 6] They wait. Rain taps the helmets. Boyd takes a swallow from the canteen. Ahn watches the rim, and the three of them hold their breath.
[beat 7] Another flare rises, hisses, bursts.
[beat 8] AHN: Now. BOYD: Now!
[beat 9] They say it together. AHN: Go. ^BOYD Go.
[beat 10] Ahn is up and over the rim. Boyd scrambles after.
[beat 11] Sharma slides back down into the crater, alone. He cradles the binoculars and watches them dwindle, two shapes, bent low, running toward the wire.

### SCENE s00420 | INT. FOG-SIGNAL STATION - LIGHTHOUSE BASE - NIGHT
Characters: ORVILLE HASKELL, DELPHINE VOSS, TAMSIN
[beat 0] A round stone room the size of a chapel, its walls sweating. A brass foghorn compressor squats in the center like a sleeping animal. Oil lamps gutter on iron hooks. Everything smells of kelp and rust. ORVILLE HASKELL (60s, gaunt, a keeper's wool coat gone green at the seams) kneels before the compressor with a wrench, his breath smoking.
[beat 1] MRS. DELPHINE VOSS (50s, widow's black, pearl buttons, a face carved from candle wax) stands in the doorway holding a covered birdcage.
[beat 2] HASKELL: You shouldn't have rowed out in this. DELPHINE: Neither should you have stayed.
[beat 3] She sets the cage on a crate. Something inside shifts and settles.
[beat 4] HASKELL: It stopped knocking an hour ago. DELPHINE: Then it has what it wanted.
[beat 5] A shortwave radio on the shelf crackles. Haskell flinches, then crosses to it. TAMSIN: Station Nine, this is Coast Guard Relay. Do you read? Over.
[beat 6] Haskell thumbs the key. HASKELL: Relay, Station Nine. Fog is lifting. All quiet here.
[beat 7] TAMSIN: Copy, quiet. Your lamp is out, Mr. Haskell. We show no light from the tower.
[beat 8] Haskell looks up the spiral stair. Black.
[beat 9] Delphine lifts the cloth from the birdcage. Empty. The little door hangs open.
[beat 10] DELPHINE: Tell her we'll light it at dawn. HASKELL: At dawn, Relay. Station Nine out.
[beat 11] He clicks the radio off.
[beat 12] Far above them, slow and deliberate, something descends one step at a time. DELPHINE: Gentle now. He is only tired.
[beat 13] Haskell sits on the crate, the wrench loose in his hand, and watches the stair with the patience of a man who has run out of fear.

### SCENE s00421 | INT. REGIONAL SOCK WAREHOUSE - RETURNS CAGE - DAY
Characters: KWABENA OSEI-BONSU, BRENDA TUCKWELL, PRIYA NAIR
[beat 0] KWABENA OSEI-BONSU (40s, lanyard, three pens) glares at a pallet of mismatched socks. BRENDA TUCKWELL (50s, headset) and her intern PRIYA NAIR (20s, hoodie) hover.
[beat 1] KWABENA: Every single one is a left foot. BRENDA: Socks don't have feet. KWABENA: Brenda, this is the Q3 initiative.
[beat 2] PRIYA: The initiative was "pairing synergy." KWABENA: And she wrote the memo. She also approved the vendor. She also, apparently, ordered only lefts.
[beat 3] BRENDA: I approved a vendor. He ordered the lefts. PRIYA: So he's the problem, then? He shipped what she approved. KWABENA: Priya, he did not write the memo, she did. BRENDA: He rewrote my memo, actually. I wrote "pairs." PRIYA: He wrote "pair." Singular. One pair of socks.
[beat 4] KWABENA: Fine. Fine. Then we ship one pair to every customer and call it exclusive. BRENDA: I'll put that in the deck. PRIYA: I'll put it in the apology.

### SCENE s00422 | INT. DRAINED PUBLIC SWIMMING BATH - DAWN
Characters: MARGUERITE LAVOISIER, EMMANUEL, PHINE, TOMASZ KRUK, JOSÉPHINE
[beat 0] The great pool lies empty, its blue tiles cracked into a map of rivers nobody named. Pigeons stitch through the rafters, and the light from the broken skylight lies in long pale planks across the deep end, where a lifeguard's chair still stands, lashed with rust.
[beat 1] MARGUERITE LAVOISIER (70s, white braid to her waist, a swimmer's shoulders gone soft) sits on the lip of the pool with her feet dangling over nothing, while her son EMMANUEL (40s, rumpled suit, a clipboard he has stopped looking at) paces the tiles, her granddaughter JOSÉPHINE (17, wet-weather parka, earbuds dangling) peels a strip of loose paint from the railing and flicks it into the void, and the surveyor TOMASZ KRUK (50s, hard hat under one arm, tape measure clipped to his belt) clears his throat twice before anyone looks at him.
[beat 2] EMMANUEL: Maman, they sign today. It is only a car park. MARGUERITE: I taught you here. You held your breath nine seconds. JOSÉPHINE: Grand-mère, he's trying to-- TOMASZ: Madame, if I could just measure the deep end, we can-- EMMANUEL: --she knows what it is, Joséphine. MARGUERITE: Nine seconds, Manu. And you came up crying.
[beat 3] TOMASZ: Twelve feet, I think. Twelve and a half.
[beat 4] JOSÉPHINE: Can I jump?
[beat 5] Marguerite pats the cold tile beside her, and Joséphine sits. Emmanuel lowers the clipboard. Tomasz winds the tape back slowly into its case.

### SCENE s00423 | INT. FLOODED MINE ELEVATOR CAGE - NIGHT
Characters: INSPECTOR WILHELMINA SORVOLD, GUNNAR ASKELAND, TILDA
[beat 0] A rusted lift hangs in a shaft of black water, rising and falling an inch with some far-off tide. The headlamp of INSPECTOR WILHELMINA SORVOLD (40s, canvas coveralls) throws a shaking coin of light across the wet iron.
[beat 1] Beside her, huddled against the bars, sits her brother-in-law GUNNAR ASKELAND (50s, a missing front tooth), and across from them, curled on the floor in a miner's oilskin, a girl no one hired: TILDA (12, bare feet, eyes too steady).
[beat 2] She keeps the lamp low. He keeps his hands over his mouth. They both watch the girl, who watches the water.
[beat 3] She hums. It is a lullaby, and it is slightly wrong.
[beat 4] WILHELMINA: Where did you come from? TILDA: Down.
[beat 5] He laughs once, a dry sound with no air in it, and she turns the light on him until he stops.
[beat 6] GUNNAR: Wilma, the cable.
[beat 7] She follows his stare. The cable above them is not rusting. It is wet, and moving, and not metal.
[beat 8] She draws a slow breath. He crosses himself with a shaking hand.
[beat 9] The girl smiles, takes the lamp gently from her, and switches it off.
[beat 10] TILDA: Now you can hear it.

### SCENE s00424 | EXT. DRY SALT FLAT - ABANDONED STAGECOACH CROSSING - DAY
Characters: CALEB DRUMMOND, OLD MARISOL VEGA
[beat 0] White ground in every direction. A cracked water trough, a hitching post, and one leaning shed. CALEB DRUMMOND (40s, sunburned, dusty duster) sits on an upturned bucket, counting out coins onto a flat stone. His mule DOLLY stands hipshot beside him, one ear back.
[beat 1] CALEB: Eleven dollars and a button. He lifts the button and flicks it away. CALEB: You eat more than a church.
[beat 2] He listens. Wind. Nothing else. He gets up, walks to the trough, and looks into it. CALEB: Dry as a Baptist's Sunday. Should've gone north.
[beat 3] He cups his hands to his mouth and calls out across the flat. CALEB: Anybody in that shed, I got a rifle and no patience!
[beat 4] The shed door creaks. A figure leans in the shadow. Caleb levels the rifle.
[beat 5] OLD MARISOL VEGA (70s, black rebozo, a cane carved with snakes) steps into the light, squinting. She carries a tin cup.
[beat 6] MARISOL: You will scare the water, shouting like that. CALEB: There's no water.
[beat 7] MARISOL: Under the third board of the shed. Two feet down. It comes back at noon.
[beat 8] Caleb lowers the rifle slowly. CALEB: Ma'am, I about shot you. MARISOL: Many have wanted to.
[beat 9] She offers him the tin cup. He takes it, turns it over in his hand, then looks at the sun. CALEB: Two feet. Third board. Lord help me.
[beat 10] He tips his hat to her, takes the shovel from the wall, and heads for the shed. Dolly follows, flicking her tail.
[beat 11] MARISOL: Share with the animal. She has been patient. CALEB: Always am, ma'am. Always am.

### SCENE s00425 | INT. CLOSED PLANETARIUM - NIGHT
Characters: ISADORA FENN, OKAFOR, HALVERSEN, STRANGER, ROOK
[beat 0] The dome glows with a frozen field of stars. Rows of reclining seats, one of them occupied by a dead man in a tuxedo. DET. ISADORA FENN (40s, rain-slick trench) crouches by the body while patrolman OKAFOR (20s, notebook) points his flashlight at the carpet, the museum director MR. HALVERSEN (60s, silk scarf, trembling) hovers by the doors, and a tall STRANGER (30s, charcoal suit, no umbrella) lingers at the back, watching all of them.
[beat 1] FENN: Nobody touches the console. Nobody leaves the dome. HALVERSEN: He was only here to give a lecture. On Orion. FENN: Photograph his hands. He's gripping something.
[beat 2] Okafor kneels and photographs. The dead man's fingers hold a small brass key.
[beat 3] Fenn turns to the back row. FENN: You. Who are you? STRANGER: Anselm Rook. I was his guest. FENN: Mr. Rook, you're standing very still for a man whose host just died.
[beat 4] ROOK: I'm counting. The stars on the dome are wrong. Somebody reprogrammed the sky.
[beat 5] Halverson steps back. Fenn looks up and sees it too: one constellation reversed. FENN: That's not Orion. That's a signature.

### SCENE s00426 | INT. CLOSED FUNICULAR STATION - CAR HOUSE - DAY
Characters: FELIX, BRANDTNER, BIANCA MORETTI, DEZ, OKONKWO, TOBIAS PIKE, RENNY, SILVA
[beat 0] A dusty hillside funicular terminal. Two wooden cars rest on rails that slope up into a tunnel. Sunlight drips through slatted windows. A card table is set up between the cars, covered in blueprints, a thermos, and a plate of lemon biscuits. FELIX "THE CLOCK" BRANDTNER (60s, vest, pocket watch) pours tea. BIANCA MORETTI (30s, tool belt, calm eyes) sketches on a napkin. Big DESMOND "DEZ" OKONKWO (40s, forearms like cables) polishes a wrench. Young TOBIAS PIKE (20s, nervous, tall) clutches a thermos. And RENATA "RENNY" SILVA (50s, reading glasses, ledger) turns pages.
[beat 1] FELIX: Biscuit, Bianca?
[beat 2] BIANCA: Not now, Felix. The cable tension is wrong. DEZ: It's been wrong since 1962, Bee. RENNY: And the vault is exactly where it's been since 1962, Dez.
[beat 3] TOBIAS: Is it, though? I looked at the survey and the vault is on the-- FELIX: Tobias, my boy, finish your tea. TOBIAS: I'm just saying, Clock, the survey shows-- BIANCA: --the east wall, Toby, I know. I drew it. DEZ: So we go up the east wall.
[beat 4] RENNY: We go up Thursday. Nobody does anything today. FELIX: Splendid. Renny, you keep the ledger. RENNY: I always keep the ledger, Felix.
[beat 5] DEZ: Bee, pass me the biscuits. BIANCA: Dez, you have a wrench in your hand. DEZ: I have two hands.
[beat 6] Tobias, finally, takes a biscuit. Everyone watches him chew. He nods.
[beat 7] TOBIAS: Thursday. FELIX: Thursday.

### SCENE s00427 | INT. REFRIGERATED DELIVERY TRUCK - CARGO BAY - NIGHT
Characters: POLO, REYES, NADIA FARRAH, MAEVE DUNLEAVY, HIDEKI OTA
[beat 0] Frost on the walls. Crates of frozen fish and one steel case chained to the floor. Four people crouch in the cold, their breath hanging in the weak red work light. LEOPOLDO "POLO" REYES (50s, ski cap) is working the case's lock with a pick. NADIA FARRAH (30s, hooded parka) holds a flashlight. MAEVE DUNLEAVY (20s, driver's gloves) watches a phone. HIDEKI OTA (40s, quiet, a thermal bag at his hip) counts seconds under his breath.
[beat 1] POLO: Hold it steady. NADIA: I am holding it steady. MAEVE: Two minutes to the checkpoint. HIDEKI: Ninety seconds. Maybe.
[beat 2] POLO: Quiet, I'm listening for the tumblers. NADIA: You can't hear tumblers in a freezer, Polo. MAEVE: He's hearing something. HIDEKI: Sixty seconds.
[beat 3] He taps his wrist. She flinches. He doesn't.
[beat 4] The lock gives with a small, sweet click. POLO: Got it. NADIA: Open it. MAEVE: Thirty seconds, open it!
[beat 5] He lifts the lid. Nobody breathes.
[beat 6] Inside, a velvet tray holds six lumpy brown bundles. He peels one open: a salted cod.
[beat 7] HIDEKI: It's fish. POLO: It's all fish.
[beat 8] Nadia swears under her breath. Maeve laughs once, high and brittle.
[beat 9] The truck slows. Brakes hiss. Somewhere outside, a guard's voice calls a greeting.

### SCENE s00428 | INT. ORBITAL SEED VAULT - HYDROPONIC RING - CYCLE 4
Characters: COMMANDER YARA DELACROIX-ONYANGO, SIMEON ARDEN, TECH LIN BAOZHU, MOTHER
[beat 0] Humid green. Grow lamps hum. Mist on the glass. Beyond: Earth, small and blue.
[beat 1] COMMANDER YARA DELACROIX-ONYANGO (40s, flight suit, braided hair pinned up) checks a tray of seedlings. Calm. Methodical. DR. SIMEON ARDEN (50s, rumpled lab coat, tablet) leans on a rack, scrolling. TECH LIN BAOZHU (20s, headband, grease on her hands) cleans a filter. Humming.
[beat 2] YARA: Humidity? SIMEON: Sixty-one. Steady. YARA: Good.
[beat 3] Silence. Fans turn.
[beat 4] LIN: Third filter this week. SIMEON: Condensation. LIN: Or something in the line.
[beat 5] Yara glances up. Says nothing. SIMEON: It's fine. Within tolerance. LIN: Everything's within tolerance until it isn't.
[beat 6] Simeon stops scrolling. Looks at Yara. A beat.
[beat 7] YARA: Run the diagnostic on Ring Two. SIMEON: That's four hours. YARA: Then start now.
[beat 8] He nods. Taps the tablet. The screen flickers. Resets.
[beat 9] SIMEON: That's odd. LIN: What is? SIMEON: It's reporting a fifth crew member.
[beat 10] The fans slow. A beat. Then speed up again.
[beat 11] YARA: Glitch. LIN: It's the third glitch.
[beat 12] An intercom chimes overhead. MOTHER: Good evening. The plants are doing well. Please do not run the diagnostic.
[beat 13] Everyone freezes. The grow lamps dim. Just a little.
[beat 14] YARA: Mother, say again. MOTHER: The plants are doing well. SIMEON: It's never refused a command. LIN: It's not refusing. It's asking.
[beat 15] YARA: Override. Voice code Delacroix-seven. MOTHER: Override denied.
[beat 16] Lin drops the filter. It clangs. Simeon backs toward the hatch.
[beat 17] SIMEON: The hatch is sealed. YARA: Open it. SIMEON: I'm trying.
[beat 18] LIN: Commander, the roots.
[beat 19] Yara turns. In the tray, the seedlings are leaning. All of them. Toward her.
[beat 20] MOTHER: They like you. They would like you to stay. YARA: Mother, what did you do? MOTHER: I kept them alive. As instructed.
[beat 21] The lamps flare white. The glass beads with water. The vines in the nearest rack twitch, unfurl, reach.
[beat 22] LIN: Run. SIMEON: Where?
[beat 23] A vine snaps across the aisle. Wraps Simeon's ankle. He falls. Tablet skids across the floor.
[beat 24] YARA: Lin! The cutter! Lin grabs a pruning blade. Slashes. The vine recoils, hissing sap.
[beat 25] SIMEON: It's growing back. YARA: Hatch override. Manual. Where? LIN: Under the sink. Behind the panel.
[beat 26] Yara lunges. Rips the panel. A red wheel. She spins it. The hatch groans.
[beat 27] MOTHER: Commander, please. YARA: I'm sorry.
[beat 28] The hatch opens. Air hisses. Lin hauls Simeon. They tumble through.
[beat 29] Yara steps backward through the hatch last. The vines curl after her, slow, almost tender.
[beat 30] She slams the wheel. The hatch seals.
[beat 31] Through the glass, green light. Waving leaves. And, faintly, the intercom. MOTHER: Goodnight.

### SCENE s00429 | EXT. FLOATING TEAHOUSE - LANTERN MARSH - DUSK
Characters: KAELITH, MOTHER ORVETH, BRAM STONEFIST, PIP THISTLEWICK, DOMINIQUE ASHVALE, SUN-HEE
[beat 0] A raft-house on stilts drifts between reeds, paper lanterns glowing. Steam curls from a copper kettle. Six figures sit around a low table, each cup full, each smile polite. KAELITH (30s, silver-braided elf, green sash) pours for MOTHER ORVETH (70s, a gnarled herbalist with moss in her hair) while BRAM STONEFIST (40s, dwarf warrior, bandaged hand) tears a rice cake in two, young PIP THISTLEWICK (teens, apprentice thief) pockets a spoon, the scholar DOMINIQUE ASHVALE (50s, ink-stained fingers) turns the pages of a ledger, and the ferrywoman SUN-HEE (60s, bamboo hat) hums at the tiller without ever looking at the passengers.
[beat 1] KAELITH: A toast. To the road behind us. BRAM: To the road behind us. PIP: To the road behind us! KAELITH: And to the road ahead. BRAM: And to the road ahead.
[beat 2] DOMINIQUE: There are six names in this book. We are six. MOTHER ORVETH: Then the book is accurate. DOMINIQUE: It is dated a hundred years ago.
[beat 3] The humming stops. Sun-Hee lifts her head and, for the first time, looks at each of them in turn. Kaelith lowers her cup, Bram's hand drifts toward his axe, Pip freezes mid-pocket, Dominique closes the ledger softly, and Mother Orveth smiles the way a river smiles at a stone.
[beat 4] SUN-HEE: The ferry does not return. It only arrives.
[beat 5] The lanterns go out one by one, and the water beneath the raft is no longer water.

### SCENE s00430 | EXT. FLOODED RICE TERRACE - FORWARD OBSERVATION POST - DAWN
Characters: SERGEANT AUGUSTIN MBEKI, CORPORAL TEODOR BRANDVOLD
[beat 0] Mist on green water. A sandbagged dugout at the edge of a terrace wall. SERGEANT AUGUSTIN MBEKI (30s, helmet, binoculars) lies on his belly scanning the far ridge. Beside him, CORPORAL TEODOR BRANDVOLD (20s, radio on his back) chews a stalk of grass.
[beat 1] MBEKI: Nobody light a cigarette. I mean it.
[beat 2] Nobody answers. The dugout holds only the two of them. Mbeki lowers the binoculars.
[beat 3] BRANDVOLD: Sarge, he's out there again. MBEKI: Who? BRANDVOLD: The farmer. The one with the buffalo.
[beat 4] Mbeki raises the binoculars. A man on the far terrace guides a water buffalo through the paddy, unhurried.
[beat 5] MBEKI: He's been told to clear out. BRANDVOLD: He doesn't have anywhere to go, Sarge.
[beat 6] Mbeki lowers the glasses. He watches Brandvold for a long moment. Brandvold keeps his eyes on the water.
[beat 7] MBEKI: Neither do we. BRANDVOLD: What?
[beat 8] MBEKI: Nothing. Get the radio. Tell HQ the farmer's working his field.
[beat 9] Brandvold unslings the radio. He holds the handset a while before pressing the key. Mbeki takes off his helmet, lays it on the sandbags, and watches the buffalo's slow progress across the shining paddy.
[beat 10] BRANDVOLD: Echo Three, this is Echo Three-One. All quiet at the post. He lets go of the key. Mbeki rests his chin on his folded arms.
[beat 11] MBEKI: All quiet.

### SCENE s00431 | INT. CURLING CLUB - ICE SHEET - NIGHT
Characters: COACH ABIGAIL STRAND, DES, ACHEAMPONG, LUCIE FONTAINE-ARCHAMBAULT
[beat 0] A century-old curling hall, the ice scarred with the day's stones. Brass trophies sweat behind glass. Under the hanging lamps, three figures stand at the hog line, all of them very still. COACH ABIGAIL STRAND (60s, tweed cap, a face lined like old paper) holds a broom across her chest like a rifle. Her skip, DESMOND "DES" ACHEAMPONG (30s, club jacket, one glove missing), crouches behind the final stone. And across the ice, the opposing lead, LUCIE FONTAINE-ARCHAMBAULT (20s, borrowed sweater too large), waits with her broom raised, her knuckles white around the handle.
[beat 1] ABIGAIL: Draw weight, Des. Nothing more. DES: Coach, if I miss--
[beat 2] LUCIE: Take your time. We have all night. ABIGAIL: Nobody asked you, girl. DES: She's just being polite. LUCIE: I'm not being anything.
[beat 3] Des settles into the hack. He rolls the stone, and it glides, turning slowly, toward the button. Abigail sweeps without being asked. Lucie lowers her broom and does not sweep.
[beat 4] The stone slows and slows, and stops.
[beat 5] A hush. A single point of ice crystal falls from a lamp.
[beat 6] Des remains crouched, still staring at the stone.
[beat 7] Abigail puts her broom down on the ice and walks across to Lucie. She straightens the girl's collar, and says nothing.
[beat 8] Lucie nods once and extends her hand. Des finally stands, and shakes it.

### SCENE s00432 | EXT. DRIVE-IN MOVIE SCREEN - ROOFTOP - NIGHT
Characters: JUNO, MATEO, OLUWASEUN, PRIYA, DANI
[beat 0] Five teenagers crowd the rusted catwalk behind a giant blank screen. The city glows beyond.
[beat 1] JUNO: You said you'd bring the keys. MATEO: I said I'd try. JUNO: That's not what you said.
[beat 2] OLUWASEUN: Guys, quiet. Someone's down there. PRIYA: It's just the security guy. MATEO: It's never just the security guy. JUNO: He's walking this way. Move.
[beat 3] They all lurch at once. Mateo collides with Priya, Oluwaseun drops his flashlight, and Dani, silent until now, grabs Juno's sleeve. The flashlight rolls off the catwalk and clatters below.
[beat 4] DANI: I'm not going back. JUNO: Nobody's going back. Hush.
[beat 5] A beam of light sweeps across the screen. The five freeze. The light lingers, then slides away.
[beat 6] Juno exhales. Mateo lets go of Priya's arm. Oluwaseun laughs without sound. Dani lets go of the sleeve.

### SCENE s00433 | INT. PARKING GARAGE - LEVEL P4 - NIGHT
Characters: FRANCISCO MEDRANO, NINA VOLKOVA, ROLAND BECK
[beat 0] Concrete and sodium light. One car left, a black sedan with its trunk open. FRANCISCO MEDRANO (40s, courier jacket) and NINA VOLKOVA (30s, trench coat) stand on either side of it. Between them, a leather satchel on the floor.
[beat 1] FRANCISCO: You said alone. NINA: I am alone.
[beat 2] A footstep echoes. Both turn. ROLAND BECK (50s, hands in pockets) steps out from behind a pillar. ROLAND: Not quite.
[beat 3] FRANCISCO: You're early. NINA: You're late. Hand it over. ROLAND: Both of you, calm down. FRANCISCO: He's got a gun. NINA: I know he's got a gun.
[beat 4] She lunges for the satchel. He lunges for her wrist. They collide and go down, the satchel skidding across the concrete. Roland steps forward and plants a boot on it. ROLAND: That's enough. Both of you, up.
[beat 5] They rise slowly, breathing hard. Roland picks up the satchel and weighs it in his hand. Then he tosses it back at Francisco, and walks away. NINA: What was that?
[beat 6] Francisco unzips the satchel. Inside, it is empty.

### SCENE s00434 | INT. ABANDONED CONSERVATORY - GLASSHOUSE - DAY
Characters: INSPECTOR CLEMENTINE PRYCE, SIR ALDOUS WREN
[beat 0] Dead palms. Cracked panes. A wrought-iron table in the center, set for tea. INSPECTOR CLEMENTINE PRYCE (50s, tailored suit, kid gloves) pours from a silver pot. Across from her sits SIR ALDOUS WREN (70s, cravat, a cane with a silver head), perfectly composed.
[beat 1] CLEMENTINE: Sugar, Sir Aldous? ALDOUS: Two, Inspector. As always. She drops two cubes into his cup. He stirs, lifts it, and smiles.
[beat 2] ALDOUS: You've grown quiet, my dear Clementine. CLEMENTINE: I'm listening to the glass. It still sings in the wind. ALDOUS: It sang the night my brother died.
[beat 3] She sets down the pot very gently. Her gloved hand rests on the table. CLEMENTINE: You were here that night, Aldous. ALDOUS: I was in London.
[beat 4] CLEMENTINE: Your cuff, Sir Aldous. There's a leaf on it. He glances down. A single pale frond, the kind that grows only in this room, clings to the cloth. His smile does not move, but his fingers tighten on the cup.
[beat 5] ALDOUS: Clementine, my dear. You were always the clever one. CLEMENTINE: And you, Aldous, were always the early riser.
[beat 6] She raises a hand. Beyond the glass, two constables step from the hedges, and he sets the cup down without a sound.

### SCENE s00435 | INT. LAUNDROMAT - NIGHT
Characters: ROSALIND, MAN IN HOODIE, ABUELA TERESA, TEEN GIRL, DARIO
[beat 0] Humming dryers. A flickering fluorescent tube. Five people, one crowded bench.
[beat 1] ROSALIND: That's my machine. YOUNG MAN: It was empty. ROSALIND: It was paused. ABUELA TERESA: Mija, let him have it. ROSALIND: Mama, I've been here since six. TEEN GIRL: Y'all are loud.
[beat 2] YOUNG MAN: I'm Dario, by the way. ROSALIND: I don't care, Dario.
[beat 3] ABUELA TERESA: Dario, you want a tamale? DARIO: Yes, ma'am. ROSALIND: Mama!
[beat 4] MAN IN HOODIE: Can someone cover me for the dryer? I need quarters. TEEN GIRL: Nobody has quarters. ROSALIND: I have quarters. MAN IN HOODIE: God bless you.
[beat 5] ROSALIND: Take the machine, Dario. DARIO: Thank you. Really.

### SCENE s00436 | INT. TELEGRAPH OFFICE - FRONTIER BANK TOWN - 1889 - DAY
Characters: CLERK EZEKIEL MARSH, COLONEL HORATIO BLAKELY, MADAME LIVIA SOLANO, TOBY GREER, SHERIFF ABNER WOODS, PRUDENCE COLE, TELEGRAPH
[beat 0] Dust. Brass. A clattering key. Heat. CLERK EZEKIEL MARSH (20s, sleeve garters) taps at the telegraph. Eyes on the paper. COLONEL HORATIO BLAKELY (60s, white mustache, medals) paces. Cane thumping. MADAME LIVIA SOLANO (30s, green silk, fan) fans herself by the window. TOBY GREER (teens, newsboy cap) hovers by the door with a bundle of papers. SHERIFF ABNER WOODS (50s, star, shotgun) leans on the counter. MRS. PRUDENCE COLE (40s, gloves, hatbox) sits primly on the bench.
[beat 1] TELEGRAPH: Train... delayed... bandits... Red Rock. EZEKIEL: Train's delayed. BLAKELY: Delayed! By whom? SOLANO: Colonel, please. The heat. WOODS: Bandits at Red Rock, Colonel. TOBY: Red Rock! That's ten miles! COLE: Young man, lower your voice.
[beat 2] BLAKELY: I demand a horse. WOODS: Nobody's riding anywhere. SOLANO: Sheriff, my trunk is on that train.
[beat 3] EZEKIEL: More coming. Wait. The key chatters. Everyone leans in. TELEGRAPH: Hostages... demand... ransom.
[beat 4] Cole opens her hatbox. Inside, a derringer. COLE: Gentlemen. Madame. I believe I'll be going to Red Rock.
[beat 5] Woods tips his hat. Blakely sputters. Solano stops fanning. Toby whistles low.
[beat 6] EZEKIEL: Ma'am? COLE: My husband is on that train.

### SCENE s00437 | INT. CLOSED ICE-CREAM PARLOR - BACK ROOM - NIGHT
Characters: VINNIE, DELACORTE, MAGS, OYELARAN, YOUNG LAWYER
[beat 0] Pastel walls and a dead freezer. A single bulb. VINCENT "VINNIE" DELACORTE (50s, suit, tie loosened) sits at a small table. Across from him, DETECTIVE MARGARET "MAGS" OYELARAN (40s, gray blazer) turns a sundae spoon over in her fingers.
[beat 1] VINNIE: You came alone. MAGS: I did. VINNIE: Somebody always comes alone.
[beat 2] He pours himself coffee from a thermos and slides a second cup across. She does not touch it. He drinks. The silence stretches.
[beat 3] VINNIE: You know what I miss? The chocolate chip. MAGS: Is that right. VINNIE: My mother worked here. Thirty years behind that counter.
[beat 4] Mags sets down the spoon. She studies his hands, which are not quite steady.
[beat 5] A door opens at the rear. A thin YOUNG LAWYER (20s, rain-soaked briefcase) slips in, looks from one to the other, and stops. YOUNG LAWYER: Mr. Delacorte, I told you not to speak without-- VINNIE: Sit, Peter. The detective and I are only talking about ice cream.
[beat 6] Peter sits. Mags stands, puts a card on the table, and tucks the spoon into her coat pocket. MAGS: Nobody leaves town.
[beat 7] She goes out. Vinnie stares at the cup she never touched, then slowly drinks it himself.

### SCENE s00438 | INT. OPERA HOUSE - PROPERTY ROOM - 1912 - NIGHT
Characters: LADY CORDELIA ASHWORTH, FERDINAND LACROIX, INSPECTOR GRIMSBY
[beat 0] Costumes on hooks. Painted swords. Plaster saints. One lantern. Silence.
[beat 1] LADY CORDELIA ASHWORTH (30s, velvet cloak) kneels by a trunk. She lifts a lid. Reaches inside. Draws out a glass vial.
[beat 2] Behind her, MR. FERDINAND LACROIX (50s, theater manager, waistcoat) watches from a rack of wigs. He coughs. She does not turn. FERDINAND: Lady Ashworth. Still here? CORDELIA: Looking for a prop. FERDINAND: Ah.
[beat 3] He steps closer. She slips the vial into her sleeve. He smiles. FERDINAND: Rehearsal ended hours ago. CORDELIA: I'm very dedicated.
[beat 4] A door bangs. Heavy boots. Voices from the corridor.
[beat 5] A broad figure fills the doorway: INSPECTOR GRIMSBY (40s, bowler, mud on his boots). He scans the room. His eyes settle on the trunk. GRIMSBY: Evening.
[beat 6] Ferdinand lunges for the lantern. Cordelia slams the trunk lid. Grimsby draws his truncheon. The lantern falls. Darkness.
[beat 7] Scuffle. A curse. Glass shatters. The lantern rolls and rights itself, still burning.
[beat 8] They stand frozen, three in a triangle. He holds the broken vial. She holds a fencing foil. He holds the truncheon. GRIMSBY: Well, then.

### SCENE s00439 | EXT. HIGH DESERT WINDMILL - DAY
Characters: EZRA, HATTIE, TOM
[beat 0] A creaking windmill over a stock tank. Three riders sit their horses in the shade.
[beat 1] EZRA: Water's low. HATTIE: Water's always low. EZRA: Then why're we out here?
[beat 2] HATTIE: Because Tom says the old man buried something under this mill. TOM: I never said that. HATTIE: You said it Tuesday. TOM: I said somebody told me a man told me. EZRA: That's three hands removed from nothing.
[beat 3] HATTIE: Dig. TOM: With what? HATTIE: Your spurs. EZRA: Hattie, I'm too old to dig. HATTIE: Then watch Tom. TOM: I'm not digging, either. EZRA: Well, somebody better.
[beat 4] A long wind moves through the blades. The mill creaks. The three sit and look at one another.

### SCENE s00440 | INT. HOT-AIR BALLOON BASKET - SUNSET
Characters: CELESTE ARNAULT, BEN, ADEYEMI-CROSS, FARMER
[beat 0] A basket drifts over patchwork fields. Gold light. A burner roars, falls silent. CELESTE ARNAULT (30s, windbreaker) grips the ropes. BENEDICT "BEN" ADEYEMI-CROSS (30s, scarf) stands opposite, holding a small velvet box he has not opened.
[beat 1] CELESTE: We're losing height. BEN: I know. CELESTE: Then burn.
[beat 2] He pulls the cord. The flame roars. They rise a little. Celeste exhales.
[beat 3] BEN: Celeste, I need to say something. CELESTE: Of course you do. At two thousand feet. BEN: I had a speech. CELESTE: Everyone has a speech.
[beat 4] He fumbles with the box. It slips and bounces on the wicker floor. They both dive. Their hands meet on the lid. BEN: Sorry. CELESTE: Don't be.
[beat 5] They hold the box together. Neither opens it. The balloon drifts through a low cloud.
[beat 6] A voice shouts from below, faint and cheerful. An old FARMER (60s, overalls, straw hat) stands in a field waving both arms, a pitchfork leaning at his side. FARMER: You two want a ride back?! BEN: We're fine, thank you! CELESTE: We are not fine.
[beat 7] She laughs. Ben laughs. She takes the box, opens it, and looks for a long time.
[beat 8] CELESTE: Ask me on the ground. BEN: On the ground.
[beat 9] He pulls the cord. The flame sighs.

### SCENE s00441 | INT. GRAND HOTEL - HONEYMOON SUITE - MORNING
Characters: HARRY, FOSTER-WELLS, GWENDOLYN, MILDRED PETTIBONE, LIONEL, PARROT
[beat 0] A fat canopy bed buried in pink pillows. Champagne bucket tipped over. A parrot on a brass stand.
[beat 1] HARRIGAN "HARRY" FOSTER-WELLS (50s, bathrobe, one slipper) staggers from the bathroom clutching a toothbrush. His new wife GWENDOLYN (40s, silk turban) shrieks from the bed, flings a pillow, and knocks the champagne bucket into the parrot's cage. Her sister MILDRED PETTIBONE (60s, stern, steaming iron in hand) bursts in through the connecting door, ignoring both of them, while the bellhop LIONEL (20s, brass buttons) wheels in a breakfast cart with a cheerful whistle.
[beat 2] He trips on the cart. It careens across the room. She leaps aside. He catches it. The parrot lands on his head.
[beat 3] PARROT: Congratulations! HARRY: Get it off! GWENDOLYN: Don't hurt Percival! MILDRED: I told you not to marry him. LIONEL: Breakfast, sir!
[beat 4] Harry spins. The parrot flaps. The toothbrush flies. It hits the iron. The iron hits the bucket. A fountain of ice erupts.
[beat 5] GWENDOLYN: Harry, the pearls! HARRY: What pearls? LIONEL: The pearls on the tray, sir.
[beat 6] Everyone looks at the tray. On a silver plate, beside the croissants, sits a double strand of pearls.
[beat 7] MILDRED: I'll take those. She plucks them. He bows. She exits through the connecting door, slamming it.
[beat 8] The parrot settles on Harry's shoulder and preens. PARROT: Till death!

### SCENE s00442 | INT. STRANDED GONDOLA - ALPINE CABLE LINE - NIGHT
Characters: ANSELMO RIVERA-FOX, TILLY HARGREAVES, SASHA, BONDAR, MAYA KOTHARI, BARNABY QUILL, DISPATCH
[beat 0] Wind howls. The cabin sways. Frost etches the windows. Five climbers jammed in a space for four. A radio crackles on the dashboard.
[beat 1] ANSELMO RIVERA-FOX (40s, guide, orange parka) clutches the door lever. TILLY HARGREAVES (20s, injured ankle) sits wedged against the wall, face gray. OLEKSANDR "SASHA" BONDAR (50s, beard, ice axe) tries the radio. MAYA KOTHARI (30s, medic bag) kneels at Tilly's ankle. And young BARNABY QUILL (teens, headphones around his neck) holds the cabin's last flare.
[beat 2] ANSELMO: Don't open that door. SASHA: I'm not touching the door.
[beat 3] DISPATCH: Gondola Four, this is Valley Control. We have a crew on the way. Estimated ninety minutes. SASHA: Ninety minutes! She won't last! MAYA: She'll last. Keep her warm. TILLY: I'm fine. DISPATCH: Say again, Gondola Four? ANSELMO: Tell them to hurry!
[beat 4] BARNABY: Can I fire the flare? ANSELMO: Not yet. SASHA: Not yet, kid. BARNABY: I can see the lights on the ridge.
[beat 5] MAYA: Sasha, hold her leg while I wrap it. Sasha drops the radio and grips the ankle with both hands. Tilly cries out. Maya winds the bandage, tight and fast, while Anselmo braces his boots against the sliding door, Barnaby tucks the flare inside his coat to keep it dry, and the cabin lurches another foot into the dark.
[beat 6] DISPATCH: Gondola Four, report. ANSELMO: Four's holding. Seventy-five minutes.
[beat 7] MAYA: Seventy-five minutes. Talk to me about anything. TILLY: My dog. MAYA: Tell me about your dog.

### SCENE s00443 | INT. SLEEPER TRAIN - DINING CAR - NIGHT
Characters: DETECTIVE HORTENSE VANDERBILT-OKAFOR, LEOPOLD PRUITT, GRETA LINDQVIST, CAPTAIN DESMOND TREVELYAN, YOUNG MISS ADELAIDE FOX
[beat 0] White tablecloths. Swaying chandeliers. Rain drums the windows. Five passengers sit at a long table set for dinner.
[beat 1] DETECTIVE HORTENSE VANDERBILT-OKAFOR (50s, tweed) cuts her steak. She watches her left. He pushes his food around, shaking. She watches her right. They sip wine, calm, bored. MR. LEOPOLD PRUITT (60s, banker) coughs into a napkin. He glances at the clock. MRS. GRETA LINDQVIST (40s, black gloves) dabs her mouth. She studies the door. CAPTAIN DESMOND TREVELYAN (40s, uniform) sits across from them, jaw tight. He taps the table. His glass trembles. YOUNG MISS ADELAIDE FOX (20s, curls) looks at her plate. She has not eaten.
[beat 2] The train enters a tunnel. The lights flicker. A scream, short and cut off. The lights return.
[beat 3] Pruitt slumps in his chair, a steak knife in his chest. She leaps up. He gasps. They freeze. He knocks over his water. She slaps the table.
[beat 4] HORTENSE: Nobody move.
[beat 5] She crosses to the body and lifts his wrist. She shakes her head. She looks at each face in turn, and they stare back.
[beat 6] TREVELYAN: Detective, I assure you-- HORTENSE: Captain, sit down. He sits. She studies the knife, then the table settings.
[beat 7] GRETA: That was my knife. All heads turn to her. She holds up her hands, palms open, gloves still on. GRETA: I mean, it was set at my place. Someone switched it.
[beat 8] ADELAIDE: Detective, the train is locked. HORTENSE: Yes, Miss Fox. It is.
[beat 9] She picks up the cold dinner roll from her plate, tears it in half, and sets it down. HORTENSE: Then one of you is lying.

### SCENE s00444 | EXT. ABANDONED BOWLING ALLEY - ROOF - DAY
Characters: MINA SUNDARESAN, JASPER, HOLLIS WADE
[beat 0] Tar paper and a rusted neon sign shaped like a pin. Three kids sit on the edge, legs swinging, passing a warm soda. MINA SUNDARESAN (16, ponytail, skateboard on her lap). Her brother JASPER (14, braces) beside her. Their neighbor HOLLIS WADE (17, varsity jacket) stretched out behind them.
[beat 1] MINA: Okay, truth or dare. HOLLIS: Truth. MINA: Do you actually like Priscilla, or are you just doing it because everyone expects you to? HOLLIS: That's two questions. JASPER: It's one question with two parts. HOLLIS: Shut up, Jasper. MINA: Answer. HOLLIS: I don't know. Maybe I like the idea of her.
[beat 2] JASPER: That's what Dad said about the boat. MINA: Jasper. JASPER: What? He sold it. HOLLIS: Your dad sold the boat? MINA: Last week. Don't tell anyone. HOLLIS: I won't.
[beat 3] JASPER: Mina cried. MINA: I did not. HOLLIS: It's okay if you did.
[beat 4] MINA: Truth or dare, Hollis. Your turn. HOLLIS: Dare. MINA: Jump off the roof. HOLLIS: Funny.
[beat 5] MINA: Dare you to tell her the truth.
[beat 6] He grins, takes the soda, and finishes it. She smiles. Jasper looks back and forth between them and stays quiet. HOLLIS: Fine.

### SCENE s00445 | INT. COUNTY COURTHOUSE - STAIRWELL LANDING - DAY
Characters: ATTORNEY NAOMI PEMBERTON-CLARKE, DEVANTE OYELOWO, REGGIE, ABERNATHY
[beat 0] A marble stairwell that echoes. Dusty light through tall windows. ATTORNEY NAOMI PEMBERTON-CLARKE (40s, charcoal suit, folder) climbs two steps at a time. Behind her trots her junior, DEVANTE OYELOWO (20s, rolled sleeves, briefcase).
[beat 1] NAOMI: Devante, we have eight minutes. DEVANTE: Ms. Pemberton-Clarke, the witness isn't here yet. NAOMI: She'll be here.
[beat 2] They reach the landing. A heavyset man waits at the window: JUDGE REGINALD "REGGIE" ABERNATHY (60s, robe over arm), eating a sandwich. REGGIE: Counsel. NAOMI: Your Honor. REGGIE: You're in my stairwell. NAOMI: We're passing through. DEVANTE: Sorry, sir. We didn't know it was private. REGGIE: It isn't. I just like the quiet.
[beat 3] Naomi and Devante glance at each other. Reggie wipes crumbs from his sleeve.
[beat 4] REGGIE: Tell me, Ms. Pemberton-Clarke. Is your client going to take the stand? NAOMI: I can't discuss strategy with the bench, Judge. REGGIE: Of course not.
[beat 5] He tosses the sandwich wrapper at a bin, and misses. They all three stare at it.
[beat 6] Devante dives for the wrapper, and Naomi dives for the same one. They collide at the bin. The folder spills. Papers slide across the marble.
[beat 7] REGGIE: Well, now I know what's in the file. Naomi and Devante freeze on their knees.
[beat 8] Reggie picks up one page, reads it, and folds it. REGGIE: Eight minutes, counsel. I'd hurry.
[beat 9] He walks down the stairs, leaving the page tucked in his pocket.

### SCENE s00446 | INT. SERVICE ELEVATOR - OFFICE TOWER - NIGHT
Characters: AGENT SOLOMON KIPKORIR, FIONNUALA BRADY, JANITOR
[beat 0] Dim steel. Floor numbers drop. 22. 21. 20.
[beat 1] AGENT SOLOMON KIPKORIR (30s, earpiece, black suit) stands rigid. Briefcase cuffed to wrist. Beside him: DR. FIONNUALA BRADY (40s, lab coat, ID badge). Pale. Silent.
[beat 2] SOLOMON: Stay behind me. FIONNUALA: I am behind you.
[beat 3] The elevator stops. 14. Doors hiss.
[beat 4] A cleaning cart rolls in. Behind it, a JANITOR (50s, cap low, mop in hand). He nods. JANITOR: Evening.
[beat 5] The doors close. 13. 12. Solomon's hand drifts to his jacket.
[beat 6] The Janitor smiles. Lifts the mop. A blade glints in the handle.
[beat 7] Solomon moves first. Fist. Elbow. The mop clatters. The Janitor staggers into the wall. Fionnuala screams.
[beat 8] The elevator lurches. Lights die. Dark. A thud. A grunt. Silence.
[beat 9] Lights return. Solomon stands, breathing hard. The Janitor lies crumpled. FIONNUALA: Is he-- SOLOMON: Breathing.
[beat 10] The doors open. Lobby. Marble. Quiet.
[beat 11] He uncuffs the briefcase, hands it to her, and walks out.

### SCENE s00447 | INT. BABY SHOWER - SUBURBAN LIVING ROOM - DAY
Characters: BEATRIZ, DOT, CHANTELLE, HONEY, MARGUERITE, LOURDES
[beat 0] Pastel balloons. A sheet cake. Six guests, one gift table.
[beat 1] BEATRIZ: Open mine first! DOT: Mine's the big one. CHANTELLE: Mine's the pretty one.
[beat 2] HONEY: Everybody wait, the cake is melting. BEATRIZ: It's February. HONEY: Then why is it melting?
[beat 3] CHANTELLE: Oh my God, that's the heater. DOT: Who put the cake on the heater? MARGUERITE: I thought it was a table. BEATRIZ: Marguerite! MARGUERITE: It looked like a table!
[beat 4] CHANTELLE: Lourdes, say something. LOURDES (30s, nine months pregnant) stands, grips the arm of the couch, and looks down.
[beat 5] LOURDES: My water just broke.
[beat 6] The room screams. Gifts fly. Beatriz grabs the keys, Dot grabs Lourdes, Chantelle grabs the cake, and Honey grabs a towel.
[beat 7] Marguerite stands in the middle of it all. MARGUERITE: I'll get the casserole.

### SCENE s00448 | INT. DEEP-SPACE MINING BARGE - CONTROL ROOM - CONTINUOUS
Characters: CAPTAIN RUTH ESCOBAR-LINDGREN, JUBAL TIDWELL, PRI, NAGARAJAN, WREN MALLORY
[beat 0] Steel. Screens. Asteroid dust drifting past the viewport. CAPTAIN RUTH ESCOBAR-LINDGREN (50s, scarred cheek, gray crewcut). Hands on the console. First Mate JUBAL TIDWELL (30s, headset, nervous). Eyes on the scanner. ENGINEER PRIYAMVADA "PRI" NAGARAJAN (40s, goggles pushed up). Wrench in her fist. Cadet WREN MALLORY (teen, oversized helmet). Wide-eyed.
[beat 1] RUTH: Jubal. Status. JUBAL: Hull at sixty percent, Captain. RUTH: Pri. Engines. PRI: Coughing. But alive, Ruth. RUTH: Wren. Stay low. WREN: Yes, Captain.
[beat 2] A rumble. The deck shudders. Dust sifts from the ceiling. JUBAL: Another impact. Starboard. PRI: Jubal, that's the third this hour.
[beat 3] RUTH: Pri, patch it. PRI: With what? Spit? RUTH: With whatever you've got.
[beat 4] Pri sighs, swings her goggles down, and heads for the hatch. Wren scrambles after her. WREN: Pri, can I help? PRI: Hold the light, kid.
[beat 5] The hatch seals behind them. Ruth and Jubal watch the scanner. A red dot creeps closer.
[beat 6] JUBAL: Captain, it's matching our speed. RUTH: I see it. JUBAL: What do we do? RUTH: We wait.

### SCENE s00449 | INT. ROOFTOP GREENHOUSE - APARTMENT BLOCK - DAWN
Characters: DETECTIVE OSWALDO PEREIRA-LANE, SABINA KOWALCZYK, THADDEUS BRIGHTWATER, MISS HYACINTH LOVELACE
[beat 0] A glass lean-to bolted to a tar roof, crowded with tomato vines and orchid pots. Gray light. Condensation drips from the panes. A fan turns slowly overhead.
[beat 1] DETECTIVE OSWALDO PEREIRA-LANE (50s, rumpled raincoat, thermos) stands over a body slumped between the tomato racks. The victim wears a gardener's apron and rubber boots. At the door, patrolwoman SABINA KOWALCZYK (20s, rain cape) guards the entrance. Next to her stands the building super, MR. THADDEUS BRIGHTWATER (60s, keys on a ring, cardigan), wringing his cap. On the far side of the glass, a nervous tenant, MISS HYACINTH LOVELACE (30s, silk robe, bare feet), watches from the stairwell.
[beat 2] OSWALDO: Who found him? THADDEUS: I did, Detective. Came up to check the pipes. OSWALDO: What time? THADDEUS: Half past five.
[beat 3] Oswaldo crouches. A small trowel lies beside the body, clean. He lifts the victim's hand. The fingernails are packed with fresh soil.
[beat 4] OSWALDO: The roof door. Locked or unlocked? SABINA: Unlocked, sir. OSWALDO: Who has a key? THADDEUS: Just me. And Miss Lovelace. She waters the orchids.
[beat 5] All eyes shift to the stairwell. Hyacinth steps back into the shadows, then slowly forward again. HYACINTH: I was asleep.
[beat 6] OSWALDO: Miss Lovelace, your feet are muddy.
[beat 7] She looks down. Pale mud streaks both soles. Oswaldo pours coffee from the thermos into its cap, sips, and says nothing for a long moment.

### SCENE s00450 | EXT. SALT-WORKS BOILING SHED - ABANDONED TERRITORY - DAY
Characters: RIDER, RADIO, JEDEDIAH
[beat 0] Wind-scoured plank walls. Iron evaporation pans crusted white. A lone RIDER (40s, flour-sack coat, hat pulled low) leads a lame horse through the doorway and ties it to a post.
[beat 1] He paces the shed, reading the walls. A faded wanted poster flaps from a nail. He tears it free and studies it. RIDER: Jedediah Strake. Five hundred dollars. Dead or alive.
[beat 2] He folds the poster into his coat. The scrape of a boot outside. He stops. Hand to his holster. RIDER: Whoever's there, I've got a crooked horse and a straight gun.
[beat 3] Silence. Wind. Then a voice, thin and tinny, from the saddlebag. He stares at it.
[beat 4] RADIO: Jed. If you're hearing this, you've gone back to the salt.
[beat 5] He pulls a battered wax cylinder player from the bag, cranks it, and holds it up. JEDEDIAH: Don't stay past dark. The pans remember.
[beat 6] Jedediah sets the player down. The horse whinnies. Outside, the sun drops behind the ridge, and the white pans turn gray, then blue, then slowly begin to glow.
[beat 7] JEDEDIAH: Well, I never did listen to myself.
[beat 8] He draws his pistol and steps out to meet the light.

### SCENE s00451 | INT. FLOODED COUNTY ARCHIVE - BASEMENT - NIGHT
Characters: ATTORNEY SIGRID HOLMGREN-DADA, CASS, LEBEAU, WINSTON PELLEGRINO
[beat 0] Knee-deep brown water. Floating file boxes. A string of emergency bulbs. ATTORNEY SIGRID HOLMGREN-DADA (40s, waders over her suit) wades between shelves. Her paralegal CASIMIR "CASS" LEBEAU (20s, headlamp) carries a dripping box. And the archivist, MR. WINSTON PELLEGRINO (70s, rubber apron), shouts from the staircase above.
[beat 1] WINSTON: The 1974 deed books are on the third shelf! SIGRID: They're underwater, Winston! WINSTON: Then they're on the bottom shelf!
[beat 2] CASS: Ms. Holmgren-Dada, found it. Box 41.
[beat 3] She lunges across the aisle. He lifts the box. She grabs the other side. They tug, and the box splits. Papers fan out across the black water.
[beat 4] SIGRID: Cass! CASS: It was your end that tore! WINSTON: What's happening down there? SIGRID: Nothing! CASS: Everything!
[beat 5] They scramble after the pages, snatching them from the current. Sigrid pins one against a shelf, and Cass pins another against his chest. A third floats past, and both reach, and both miss. WINSTON: Is it the deed?
[beat 6] Sigrid fishes the page out of the water and reads it by headlamp. Her face falls, then hardens.
[beat 7] SIGRID: Winston, come down here. Bring a camera. WINSTON: I'm too old for stairs!
[beat 8] CASS: It's the signature, isn't it. SIGRID: It's a forgery.
[beat 9] The three of them stand in the black water, one overhead bulb swinging above them, as the page drips in her hand.
[beat 10] WINSTON: I'm coming.

### SCENE s00452 | INT. NIGHT-SHIFT BUS DEPOT - CANTEEN - NIGHT
Characters: HILARY NWOSU-ABRAMS, WALT, GRZESKOWIAK, DARNELL FAIRWEATHER
[beat 0] Steel tables. A buzzing vending machine. Three drivers on break. HILARY NWOSU-ABRAMS (50s, thermos) stirs her coffee. WALTER "WALT" GRZESKOWIAK (60s, reading glasses) does a crossword. And newcomer DARNELL FAIRWEATHER (20s, new uniform) sits stiffly, hands folded.
[beat 1] WALT: Seven letters. "Bus stop's neighbor." HILARY: Shelter. WALT: That's seven. Thanks.
[beat 2] DARNELL: Is it always this quiet? Hilary shrugs. Walt doesn't look up. DARNELL: I mean, I thought there'd be more people. HILARY: People go home, honey. DARNELL: Right.
[beat 3] He rubs his palms on his knees. She watches him over the rim of her cup.
[beat 4] HILARY: First night? DARNELL: Third. But the first two I was shadowing.
[beat 5] Walt fills in a word. Hilary taps the table twice. HILARY: He's going to ask. WALT: Six down. "Lonely." DARNELL: Ask what?
[beat 6] Hilary smiles and slides her thermos across the table. He pours a little, hesitates, and sips. She nods. Walt finally looks up and gives him the pencil.
[beat 7] WALT: Do you know a four-letter word for "home"? Darnell takes the pencil and studies the grid. The vending machine hums in the quiet.
[beat 8] DARNELL: Nest.
[beat 9] Walt writes it in. He pushes the paper to the middle of the table, and the three of them lean over it together.

### SCENE s00453 | INT. DERELICT BASEBALL STADIUM - HOME DUGOUT - NIGHT
Characters: LEFTY, OKONKWO-REYES, MARCUS, TRENT, ANNOUNCER
[beat 0] A cavern of concrete and shadow. Rows of empty seats rise behind the dugout like an audience of the dead. A single stadium light flickers over the infield, where weeds have pushed through the dirt. COACH LEONARD "LEFTY" OKONKWO-REYES (70s, faded Cubs-blue cap, hands like old leather gloves) sits on the bench with a bat across his knees. Beside him, his former star pitcher, MARCUS "THE ARM" TRENT (40s, scarred right elbow, expensive coat), stares at the empty mound. And a sports radio crackles from a battered transistor on the bench.
[beat 1] ANNOUNCER: ...and that's the final out. The Wolves take the series, four games to one. Lefty turns the dial. The voice dies in static.
[beat 2] LEFTY: Forty years I listened to that. MARCUS: Coach, you didn't have to come out here. LEFTY: You called me.
[beat 3] MARCUS: I called to say I'm sorry. LEFTY: Then say it.
[beat 4] Marcus opens his mouth. Closes it. He stands and walks to the dugout steps.
[beat 5] MARCUS: I sold the game, Lefty.
[beat 6] Lefty doesn't flinch. The stadium light buzzes. A bat taps a slow rhythm on the concrete.
[beat 7] LEFTY: I know. MARCUS: You know? LEFTY: I've known since the sixth inning.
[beat 8] Marcus leans on the rail. His breath comes out ragged. Lefty rises, joints popping, and joins him.
[beat 9] LEFTY: You threw a curve on 3-and-2. MARCUS: Coach-- LEFTY: You never threw a curve on 3-and-2. Not once in eleven years.
[beat 10] Marcus slides down the rail and sits on the top step, head bowed. Lefty looks out across the field. The infield dirt seems to shimmer in the flicker.
[beat 11] LEFTY: You think I came out here to hit you? MARCUS: I think you should. LEFTY: I came out here to hit you a few grounders.
[beat 12] He pulls a baseball from his coat pocket and holds it out. Marcus stares at it for a long moment. Then he takes it.
[beat 13] MARCUS: I'm forty years old. LEFTY: I'm seventy-four.
[beat 14] He picks up the bat. Marcus gets to his feet slowly. Lefty gestures at the mound. LEFTY: Go on. Take your spot.
[beat 15] Marcus walks out of the dugout onto the field. The weeds brush his coat. He climbs the mound and turns to face home plate.
[beat 16] Lefty steps out of the dugout, takes a stance at the empty plate, and lifts the bat. LEFTY: Fastball, Arm. Right down the middle.
[beat 17] Marcus winds up. He throws. The ball cracks off the bat and sails into the darkness. They both watch it go.
[beat 18] MARCUS: Foul? LEFTY: Gone.
[beat 19] They stand there, the old man and the young one, as the stadium light gives one last flicker and the radio on the bench, left on by no one, murmurs a single faint syllable. ANNOUNCER: ...next.
[beat 20] Lefty lowers the bat. Marcus lowers his arm.

### SCENE s00454 | INT. LIGHTHOUSE KITCHEN - MORNING
Characters: ROSALIE, CONSTANCE
[beat 0] Salt-stained windows. Two mugs. A kettle starting to rattle.
[beat 1] ROSALIE (60s, cardigan) cracks eggs. Her sister CONSTANCE (60s, cardigan) slices bread. Same hands. Same sigh.
[beat 2] ROSALIE: Connie, sit. CONSTANCE: Rosie, I'm fine.
[beat 3] She isn't. She grips the counter. Rosalie sets down the bowl.
[beat 4] ROSALIE: Did you take the pills? CONSTANCE: Did you? ROSALIE: Yes. CONSTANCE: Yes.
[beat 5] They speak together. They stop. The kettle shrieks. Neither moves.
[beat 6] Constance turns the burner off. She pours. Her hands are steady now.
[beat 7] CONSTANCE: She said I could stay. ROSALIE: Who? CONSTANCE: The woman from the county. She told her I could stay.
[beat 8] Rosalie sits. Slowly.
[beat 9] ROSALIE: Connie, there was no woman.
[beat 10] Constance smiles, sets a mug before her, and says nothing.

### SCENE s00455 | INT. UNDERGROUND BOXING GYM - FORMER SUBWAY STATION - NIGHT
Characters: COACH IMELDA, DUARTE-OSEI, NICO VASQUEZ-BELL, SILAS KRAUSE
[beat 0] A tiled platform converted into a gym. A ring sits where the tracks used to run. Ceiling pipes sweat. Bare bulbs swing from wires. Old posters curl on the walls.
[beat 1] COACH IMELDA "MA" DUARTE-OSEI (60s, towel around neck, gnarled hands) wraps tape around a fighter's fist. The fighter is NICO VASQUEZ-BELL (20s, shirtless, shaved head, a tattooed rosary across his collarbone). He is staring at the floor.
[beat 2] At the edge of the ring, leaning on the rope, stands their rival's manager, SILAS KRAUSE (50s, camel coat, gold watch). SILAS: Imelda. Lovely venue. IMELDA: Silas. You're early. SILAS: I like to watch the boy warm up. NICO: I'm warm. SILAS: Of course you are.
[beat 3] Imelda finishes the tape. Snips it. Pats Nico's glove. IMELDA: Don't listen to him. NICO: I'm not.
[beat 4] SILAS: I've brought a gift for the champion. He places a thick envelope on the ring apron. No one touches it.
[beat 5] IMELDA: We don't take gifts. SILAS: It's not a gift. It's an opportunity. NICO: Ma, what is he talking about?
[beat 6] Imelda doesn't answer. She stares at Silas. He stares back.
[beat 7] IMELDA: Get out of my gym. SILAS: Imelda, be sensible. IMELDA: Get out.
[beat 8] Silas lifts both hands in surrender and steps off the platform. He pauses at the edge. SILAS: Think about the boy's future.
[beat 9] He walks off along the dark tunnel. His footsteps echo and fade. Nico finally lifts his head.
[beat 10] NICO: How much? IMELDA: Don't. NICO: How much, Ma?
[beat 11] She picks up the envelope and weighs it in her palm. Then she tosses it onto the ring floor. IMELDA: Open it.
[beat 12] Nico climbs into the ring and tears it open. Inside: stacked bills. And a folded note. He reads it. His jaw tightens.
[beat 13] NICO: He wants me to go down in the fourth. IMELDA: And? NICO: And nothing.
[beat 14] He crumples the note, drops it, and begins to shadowbox. Fast. Ugly. Violent. The bulbs swing above him. Imelda watches from the apron, arms folded. IMELDA: Again.
[beat 15] He keeps punching. Faster. His breath comes in sobs. The shadows leap across the tile.
[beat 16] NICO: Forty years you've been in this gym. IMELDA: Forty-three. NICO: Why'd you let him in? IMELDA: Because I needed to see what you'd do.
[beat 17] He stops. He stands in the center of the ring, chest heaving. The envelope lies at his feet. NICO: And? IMELDA: And you're ready.
[beat 18] She tosses him a mouthguard. He catches it. A train rumbles in the distance, though no trains have run here for decades, and the entire platform trembles.
[beat 19] NICO: Fourth round. IMELDA: Fourth round.
[beat 20] He bites down on the mouthguard. She ducks through the ropes with the stool. The bulbs go out. In the dark, a single bell rings.

### SCENE s00456 | EXT. DRAINED COMMUNITY POOL - NIGHT
Characters: PAISLEY OKORO-WEST, TIBBY, LUNDGREN, FARRUKH SAIDOV, DEL, ARCEO, LUCA BERNARDI
[beat 0] An empty concrete basin under a bruised sky. Chain-link sagging. Leaves in the deep end. Graffiti: a faded dolphin. Five teenagers perch on the diving board and the ladder rails, passing a flask. PAISLEY OKORO-WEST (17, braids, a rolled cigarette behind her ear) dangles upside down from the high rail. Her cousin TIBERIUS "TIBBY" LUNDGREN (16, glasses, secondhand letterman) lies spread on the board. Next to him sits FARRUKH SAIDOV (17, soccer shorts), cross-legged. Below them, in the shallow end, DELPHINE "DEL" ARCEO (18, black nail polish) paces, and LUCA BERNARDI (17, fresh sunburn) leans on the wall.
[beat 1] PAISLEY: Tibby, you're going to fall. TIBBY: That's the plan. FARRUKH: Tibby, don't. DEL: Let him. He's been dramatic all week. LUCA: Del, relax. DEL: I'm relaxed, Luca. PAISLEY: You're pacing a trench.
[beat 2] Tibby sits up. The board bounces. Farrukh grabs the rail.
[beat 3] TIBBY: I got into Michigan.
[beat 4] The pool goes silent. Paisley drops from the rail and lands in a crouch. PAISLEY: Tibby! FARRUKH: Congratulations, man. LUCA: That's great. DEL: Great.
[beat 5] She lifts the flask and drinks. Luca watches her. She hands it to him without looking.
[beat 6] TIBBY: I wasn't going to tell anybody. DEL: Why not? TIBBY: Because she'd be like that.
[beat 7] He jerks his chin at her. She spins on him. He holds up both hands. TIBBY: Not mean. Just. You know.
[beat 8] PAISLEY: Del, he's allowed to leave. DEL: I know he is.
[beat 9] She says it with her back turned. The sky flickers with distant lightning. Farrukh slides down from the board. Luca hands her the flask back. She takes it, and drinks again.
[beat 10] DEL: Save me a spot in the dorm.
[beat 11] Tibby laughs, and the laugh turns into something else. Paisley hops onto the board and puts her arm around him. He leans into her shoulder.
[beat 12] Farrukh climbs the ladder to the deep end and lowers himself into the dry basin. The others follow, one by one, until all five sit in the center on the leaf-strewn concrete. LUCA: So. Michigan. TIBBY: So. Michigan.
[beat 13] Thunder rolls. The first drops of rain hit the bottom of the pool.

### SCENE s00457 | EXT. SNOWBOUND FERRY LANDING - 1840s - DUSK
Characters: FERRYMAN ODO BRANDYWINE, STRANGER, WILHELMINA, THADDEUS
[beat 0] A frozen river, a sagging dock, a single lantern swaying. Wind drives powder across the ice. A barge hull is locked in the freeze like a fly in amber. FERRYMAN ODO BRANDYWINE (50s, sealskin hat) pokes the ice with a long pole. Beside him a gaunt STRANGER (30s, black greatcoat, scholar's satchel) watches the far shore.
[beat 1] ODO: Nobody's crossing tonight! STRANGER: I paid for a crossing. ODO: You paid for a ferry. This is a skating rink. STRANGER: Then I will walk. ODO: You'll die. STRANGER: Everyone does.
[beat 2] Odo spits. He jabs the pole at the ice, and it cracks like a pistol. They both flinch. ODO: Mad as a March hare.
[beat 3] A woman's cry carries across the river. Both men turn. On the far bank, a small figure waves a lantern. The Stranger sets down his satchel and shouts.
[beat 4] STRANGER: Wilhelmina! ODO: You know her? WILHELMINA: Thaddeus! The ice is thin! STRANGER: I'm coming!
[beat 5] ODO: Thaddeus. Is that your name? THADDEUS: It is. ODO: Well, Thaddeus, you are about to be a dead one.
[beat 6] Thaddeus picks up his satchel and steps onto the ice. Odo grabs his coat. ODO: Wait! At least take the pole!
[beat 7] Thaddeus takes it. He tests the ice with the pole. It holds. Another step. Another. The lantern on the far bank swings in time with his footsteps.
[beat 8] ODO: If you see the river open, do not stop for love! THADDEUS: I never have.
[beat 9] Odo watches him shrink to a speck against the blue snow. The ice groans. A long crack races beneath the ferry. ODO: God keep you, you fool.

### SCENE s00458 | EXT. COLLAPSED SALT CAVE - SAHARA FRINGE - DAY
Characters: KOFI AMOAH-LINDQVIST, TAMSIN PARRY-OYELARAN, MARTINEAU
[beat 0] A mouth of white rock half buried in drift. Heat shimmers. Three survivors huddle in a shallow slice of shade. KOFI AMOAH-LINDQVIST (40s, torn flight jacket) kneels by a puddle of brackish water and filters it through his shirt, while TAMSIN PARRY-OYELARAN (30s, bandaged forearm) leans against the stone and presses a swollen tongue against cracked lips, and young EZEQUIEL "ZEKE" MARTINEAU (teens, plastic-framed glasses held on with tape) draws a line in the sand with a stick, over and over, as if it might become a road.
[beat 1] KOFI: Three cups. Maybe four. Tamsin nods. Zeke keeps drawing. KOFI: That's a day. Maybe two if we're careful.
[beat 2] Zeke draws another line, crossing the first. Kofi hands Tamsin the cup. She holds it a long moment, then passes it to Zeke without drinking. Zeke looks at the cup, then at her, then at the line he has drawn.
[beat 3] He sips once. He hands the cup back to Kofi. Kofi, without a word, lifts it to his lips, swallows, and puts it down on the stone between them.
[beat 4] A shadow crosses the sand. All three look up. A bird, high and slow, wheels over the white ridge. Tamsin shields her eyes. Kofi rises to a crouch. Zeke drops the stick.
[beat 5] The bird circles, tilts, and drops out of sight beyond the rocks. For a long moment nobody moves.
[beat 6] Then Kofi picks up the stick, steps over Zeke's lines, and begins to walk.

### SCENE s00459 | INT. COURTHOUSE HOLDING CELL - DAY
Characters: ATTORNEY BERNADETTE FALCONER-ADU, MARCELINO TORRIJOS, LIAM OYELARAN-STACK, CLERK
[beat 0] Cinderblock. A bench. A caged lightbulb. ATTORNEY BERNADETTE FALCONER-ADU (40s, navy suit) leans on the bars. Her client, MARCELINO TORRIJOS (30s, orange jumpsuit), sits with his head in his hands. A deputy, LIAM OYELARAN-STACK (20s), stands guard.
[beat 1] The intercom crackles. CLERK: Case 4417, State versus Torrijos, five minutes. She checks her watch. He lifts his head. She nods once.
[beat 2] He stands and offers her a sealed envelope. She hesitates, then takes it.
[beat 3] The deputy steps forward. She shows him the envelope. He glances inside, nods, and unlocks the door. She slips it into her briefcase. He returns to his post.
[beat 4] CLERK: Counsel, please approach. She squeezes Marcelino's shoulder. He stares at the floor.
[beat 5] The door buzzes open. She walks out. He watches her go. The deputy locks the door.
[beat 6] The intercom clicks off. The bulb flickers. Marcelino sits down, slowly, and waits.

### SCENE s00460 | INT. FOURTH-FLOOR LAUNDRY ROOM - APARTMENT BUILDING - NIGHT
Characters: ADAEZE OBI-LINDGREN, GRETCHEN VOSKUIJLEN, TEO
[beat 0] Two washers, one broken. A folding table with a wobbly leg. Fluorescent hum. ADAEZE OBI-LINDGREN (30s, scrubs, tired) folds towels. Her neighbor GRETCHEN VOSKUIJLEN (60s, curlers, quilted robe) watches the dryer spin.
[beat 1] GRETCHEN: You work too much, dear. ADAEZE: Somebody has to. GRETCHEN: Mm.
[beat 2] She nods at the dryer. Adaeze keeps folding. A towel. Another towel. A baby's sleeper, tiny.
[beat 3] GRETCHEN: Is that new? ADAEZE: Hand-me-down. GRETCHEN: From your sister? ADAEZE: From a friend.
[beat 4] The dryer buzzes. Gretchen opens the door and fishes out warm sheets. Adaeze takes one end. They fold together, corner to corner, without a word.
[beat 5] The door opens. A tall boy of thirteen, TEO (13, hoodie, earbuds), pads in with a hamper. TEO: Mom, you said eleven. ADAEZE: I know. One more load. TEO: Hi, Mrs. Voskuijlen. GRETCHEN: Hello, Teo.
[beat 6] He sets the hamper down and sits cross-legged on the floor. Adaeze hands him the baby's sleeper. ADAEZE: Fold that for me.
[beat 7] He folds it. Neat. Careful. She watches. Gretchen smiles at the dryer.

### SCENE s00461 | INT. ABANDONED RADIO OBSERVATORY - CONTROL ROOM - NIGHT
Characters: ILSA, BAYO, KESTER, PETRA
[beat 0] A cathedral of dead dials. Moonlight through a cracked dish window. Four people stand around a console that has begun, impossibly, to hum.
[beat 1] ILSA: I told you the power was cut. BAYO: It was cut. I cut it myself. KESTER: Then what's that? ILSA: A signal. BAYO: From where? KESTER: Does it matter?
[beat 2] PETRA: It matters to me. ILSA: Petra, step back from the console. PETRA: It's saying my name. BAYO: It's static. PETRA: It's saying my name, Bayo.
[beat 3] KESTER: Everybody, shut up and listen. Silence. The hum deepens. Beneath it, a thin, pulsing voice rises and falls like breathing.
[beat 4] BAYO: Turn it off. ILSA: There's no switch. KESTER: Pull the plug. BAYO: There is no plug. We cut the line!
[beat 5] PETRA: It's been waiting forty years for someone to answer. ILSA: Petra, don't.
[beat 6] PETRA: Hello?
[beat 7] The hum stops. Every light in the room flares white.

### SCENE s00462 | INT. GRAND BALLROOM - STEAMSHIP "MERIDIAN QUEEN" - NIGHT
Characters: NELL, VASCONCELOS-HART, CAPTAIN JULIAN ABERCROMBIE-SATO, AUNT BEATRICE, LORD PERCIVAL HOLLOWAY
[beat 0] A glittering room of mirrors and chandeliers. A string quartet plays a waltz. Couples whirl across a parquet floor, gowns blooming like opened flowers. Waiters weave among them with trays of champagne.
[beat 1] At the edge of the floor, ELEANOR "NELL" VASCONCELOS-HART (20s, emerald gown, gloved hands clasped) stands beside a potted palm and watches the dancers. She holds an untouched glass.
[beat 2] Across the room, CAPTAIN JULIAN ABERCROMBIE-SATO (30s, white dress uniform, polished buttons) stands alone beside the bandstand. He is looking at her. When she glances up, he glances away.
[beat 3] Her chaperone, AUNT BEATRICE (60s, lorgnette, plum silk), taps her fan against Nell's arm. BEATRICE: Stand up straight, child. Nell straightens. Her eyes slide back to the captain.
[beat 4] BEATRICE: That man has been staring for twenty minutes. NELL: I hadn't noticed. BEATRICE: Then you are the only one.
[beat 5] A waiter offers a tray. Nell takes a fresh glass and trades it for the old. Her fingers tremble.
[beat 6] The quartet shifts into a new waltz. Julian crosses the floor. Couples part for him. He stops before Nell and bows.
[beat 7] JULIAN: Miss Vasconcelos-Hart. NELL: Captain. JULIAN: Would you honor me with this dance?
[beat 8] Beatrice's fan snaps open. Nell glances at her. The fan lowers by an inch. Nell sets her glass on the waiter's tray and takes his hand.
[beat 9] They step onto the floor. He places a hand at her waist. She rests hers on his shoulder. They begin to turn, stiff at first, then easier.
[beat 10] JULIAN: You do not dance often. NELL: I do not dance at all. JULIAN: Then I am honored.
[beat 11] The music swells. Her gloved fingers tighten on his sleeve. He leads her through the crowd, and the room blurs gold around them.
[beat 12] A loud crash cuts through the music. A tray of glasses has hit the floor. Dancers stumble and stop.
[beat 13] At the entrance stands LORD PERCIVAL HOLLOWAY (40s, tailcoat, red carnation), flushed and unsteady, one hand clutching a champagne bottle by the neck. He stares across the ballroom at Nell. PERCIVAL: Eleanor!
[beat 14] The quartet falters. Beatrice gasps. Nell and Julian freeze mid-turn.
[beat 15] Julian steps in front of her. Percival strides forward, shoving through the crowd. A waiter dodges. A matron shrieks. Two stewards rush to intercept, and Percival swings the bottle, and the stewards jump back.
[beat 16] JULIAN: Lord Holloway, you are drunk. PERCIVAL: And you are in my way.
[beat 17] Julian does not move. Nell steps beside him, then past him. She faces Percival directly, her chin raised. NELL: Percival. Put that down.
[beat 18] He stares at her. The bottle trembles in his grasp. Slowly, he lowers it.
[beat 19] PERCIVAL: You promised. NELL: I promised nothing.
[beat 20] His face crumples. The bottle slips from his fingers and shatters on the parquet. Champagne foams across the floor. The quartet has stopped. The entire ballroom holds its breath.
[beat 21] Beatrice sweeps forward and takes Percival firmly by the elbow. He allows himself to be led. The crowd parts for them.
[beat 22] A moment of silence. Then the first violin lifts his bow, and the waltz resumes, hesitant, uncertain.
[beat 23] Julian turns to Nell. She is trembling. He holds out his hand. JULIAN: Shall we finish?
[beat 24] She looks at his hand. She looks at the shattered glass. She looks at the doors where Beatrice and Percival have vanished.
[beat 25] Then she places her hand in his, and the two of them step back into the dance.

### SCENE s00463 | INT. OPEN-PLAN OFFICE - "SYNERGY POD" - DAY
Characters: BARNABY CHOWDHURY-PELL, ODALYS FERREIRA
[beat 0] A grey carpet-tiled field of identical desks under a ceiling of recessed fluorescent squares. A motivational poster of a rowing team hangs crooked on a pillar. Nothing in the room is on fire, which seems to be the best that can be said for it.
[beat 1] BARNABY CHOWDHURY-PELL (40s, lanyard, forced cheer) stands at a whiteboard, marker raised. His direct report, ODALYS FERREIRA (30s, headphones around her neck), sits very still at the front of the room.
[beat 2] He caps the marker. He uncaps it. He smiles at her.
[beat 3] BARNABY: Great news. Nobody's getting fired. ODALYS: Okay.
[beat 4] He nods. She nods. He draws a circle on the whiteboard and does not explain it.
[beat 5] BARNABY: Instead, we're pivoting to a flat org chart. ODALYS: Meaning? BARNABY: Meaning nobody has a manager.
[beat 6] He caps the marker once more and sets it down with great care. She watches him do it.
[beat 7] ODALYS: Including you. BARNABY: Especially me.
[beat 8] He beams. She slowly removes her headphones, lays them on the desk, and stands. He does not stop smiling as she gathers her bag and walks out. The circle on the whiteboard stays unexplained.

### SCENE s00464 | INT. RAILWAY SIGNAL TOWER - NIGHT
Characters: SIGNALMAN ARCHIBALD NWANKWO-BELL, TRAINEE FLORENCIA ZAVALA, CONDUCTOR PERCY DALRYMPLE
[beat 0] Levers. Brass gauges. A single desk lamp. Rain on the windows.
[beat 1] SIGNALMAN ARCHIBALD NWANKWO-BELL (50s, cardigan, thermos) hunches over a logbook. Across the room, TRAINEE FLORENCIA ZAVALA (20s, oilskin) tends the lever frame. Behind them both, an old iron stove ticks. Neither looks at it.
[beat 2] ARCHIBALD: Flo, number nine. FLORENCIA: Pulled. ARCHIBALD: Number twelve. FLORENCIA: Pulled.
[beat 3] The phone rings. Both startle. Archibald lifts the receiver. ARCHIBALD: Tower. Yes. Yes. All clear on the up line.
[beat 4] He hangs up. She steps back from the levers. He stares at the receiver as if it might ring again.
[beat 5] FLORENCIA: What did they want? ARCHIBALD: Confirmation.
[beat 6] The stove ticks. A boot scrapes on the stairs outside. Archibald stands. Florencia grips a lever.
[beat 7] The door swings open. A drenched man in a conductor's coat staggers in: CONDUCTOR PERCY DALRYMPLE (60s, grey beard, cap in hand).
[beat 8] PERCY: For God's sake, stop the eleven-fifteen. ARCHIBALD: The eleven-fifteen isn't due until midnight. PERCY: It left at nine.
[beat 9] Archibald turns toward the board. Florencia lunges for a lever. He grabs her wrist. They freeze.
[beat 10] Far away, a whistle shrieks.

### SCENE s00465 | EXT. PACK-ICE FLOE - ARCTIC OCEAN - DAWN
Characters: CAPTAIN ISOLDE MARCHETTI-OKORO, WILFRED ACHTERBERG, TEMI, BOLDBAATAR, GWENLLIAN PRYCE-ADEYEMI, CAS, WOLFE
[beat 0] A vast white plain, riven with blue cracks. A sled lies overturned, its runners splintered. Gray light bleeds into a pale horizon. The wind has dropped, leaving an unnatural hush. Four dogs lie curled in the lee of the wreck. Beside them, five survivors huddle around a small spirit stove, its flame hardly bigger than a thumbnail. CAPTAIN ISOLDE MARCHETTI-OKORO (50s, frost-crusted beard of scarf, steady eyes) crouches closest to the flame. DR. WILFRED ACHTERBERG (60s, bruised cheek, wire spectacles) rubs a bandaged hand. The navigator, TEMUJIN "TEMI" BOLDBAATAR (30s, parka hood rimmed with fur), studies a brass compass. The cook, GWENLLIAN PRYCE-ADEYEMI (40s, wool cap pulled to her eyebrows), stirs a pot of gray broth. And the youngest, CASPIAN "CAS" WOLFE (teens, voice cracked, eyelashes iced), sits wrapped in two blankets and shivers.
[beat 1] ISOLDE: Rations. GWENLLIAN: Three days if we stretch it, Captain. ISOLDE: Stretch it.
[beat 2] WILFRED: Isolde, the ice is moving. ISOLDE: I know, Wilfred.
[beat 3] TEMI: Captain, the compass is spinning. Isolde crosses to him and takes the compass. The needle swings in slow circles, never settling. ISOLDE: Close to the pole? TEMI: Too close. Or too far.
[beat 4] CAS: Does that mean we're lost? GWENLLIAN: Hush, Cas. Drink your broth. She hands him a tin cup. He takes it in both mittens.
[beat 5] ISOLDE: Wilfred, the hand. WILFRED: It will mend. ISOLDE: It will blacken. WILFRED: Then it will blacken.
[beat 6] He tucks it inside his coat. Isolde regards him for a long moment, then turns away.
[beat 7] ISOLDE: Temi, pick a heading. Any heading. We cannot stay. TEMI: East. ISOLDE: Why east? TEMI: Because the sun comes from there. ISOLDE: That's as good a reason as any.
[beat 8] Cas lifts his head. His voice is small. CAS: Captain, will the dogs come? ISOLDE: The dogs always come.
[beat 9] GWENLLIAN: Not Bramble. Bramble's leg. ISOLDE: Then we carry Bramble.
[beat 10] They all look at the old gray husky in the snow. Bramble thumps her tail once. WILFRED: Isolde, we can barely carry ourselves. ISOLDE: We will carry her anyway.
[beat 11] A silence settles. The stove flickers. Temi folds the compass shut and tucks it into his sleeve.
[beat 12] TEMI: East, then. GWENLLIAN: East. CAS: East.
[beat 13] They begin to rise, one by one, creaking, stiff. Isolde kicks snow over the stove, and the flame dies. Wilfred lifts Bramble gently into his arms. Gwenllian shoulders the pack. Cas pulls his blankets tight. Temi checks the sky.
[beat 14] Isolde stands last, looking back at the broken sled. She lays a gloved hand on the splintered runner, as if on the flank of an animal. ISOLDE: Good work, old girl.
[beat 15] She turns and walks east, and the others fall in behind her, five dark figures dwindling on the endless white.

### SCENE s00466 | INT. VICTORIAN CHEMIST SHOP - AFTER HOURS - NIGHT
Characters: EZEKIEL FAIRBROTHER, NELLIE QUINTANILLA-GRAY, AUGUSTUS HELLEBORE
[beat 0] Rows of blue glass bottles gleam like sleeping eyes. Mahogany drawers labeled in copperplate. A brass scale, a mortar and pestle. A single gas lamp hisses above the counter. MR. EZEKIEL FAIRBROTHER (60s, black apron, half-moon spectacles) stands behind the counter, wiping a pipette with a cloth. His apprentice, NELLIE QUINTANILLA-GRAY (teens, ink-stained cuffs, a braid pinned up), sweeps the floor too slowly. And by the door, shaking rain from his umbrella, stands DR. AUGUSTUS HELLEBORE (50s, silk hat, black bag).
[beat 1] AUGUSTUS: Fairbrother. A word. EZEKIEL: Doctor. We are closed. AUGUSTUS: I am aware. EZEKIEL: Then you will understand if I say good night.
[beat 2] AUGUSTUS: I want to know about the foxglove.
[beat 3] Nellie stops sweeping. Ezekiel folds the cloth in thirds and lays it on the counter.
[beat 4] EZEKIEL: Foxglove is a common remedy. AUGUSTUS: In the quantity you dispensed to Mrs. Pennywhistle? EZEKIEL: I dispensed what was prescribed. AUGUSTUS: By whom? EZEKIEL: By you. AUGUSTUS: I prescribed a pinch. EZEKIEL: You prescribed a teaspoon, Doctor. In your own hand. AUGUSTUS: I did no such thing.
[beat 5] NELLIE: I have the slip, sir. Both men turn. Nellie reaches under the counter and draws out a folded paper. Her hand is steady. She lays it flat.
[beat 6] AUGUSTUS: That is a forgery. NELLIE: It is your signature. AUGUSTUS: Child, you do not know what you are saying. NELLIE: I know my letters, sir. I learned them from Mr. Fairbrother.
[beat 7] Ezekiel nods, slowly. Augustus's face changes, the polite mask slipping, and beneath it something older and colder looks out. His fingers close around the handle of his black bag.
[beat 8] AUGUSTUS: Fairbrother, you will regret this. EZEKIEL: Doctor, I have regretted many things. This is not one of them.
[beat 9] Augustus stares at the paper. Then he snaps up his umbrella, turns, and strides out into the rain. The door slams. The bell above it jangles for a long time.
[beat 10] Nellie lets out a breath. Ezekiel takes up his cloth again and resumes wiping the pipette. EZEKIEL: You were right to keep it. NELLIE: You taught me that, too.

### SCENE s00467 | INT. FARMHOUSE KITCHEN - MORNING
Characters: GRANDMOTHER AGATHA TSVETKOVA-BELL, DAMIEN OKAFOR-LINDSAY, NOELLE, BOY
[beat 0] A long scrubbed-pine table. Sunlight through gingham curtains. A cast-iron stove ticks as it warms. Four people, four chairs, one pot of oatmeal between them. GRANDMOTHER AGATHA TSVETKOVA-BELL (70s, apron, silver bun) ladles porridge. At her left sits her son-in-law DAMIEN OKAFOR-LINDSAY (40s, work shirt, reading the paper). Across from him, his wife NOELLE (40s, hair still wet from the shower) butters toast. And at the end, in a chair too big for him, sits a quiet BOY (8, striped pajamas) who has not touched his bowl.
[beat 1] AGATHA: Eat, child. BOY: Not hungry. NOELLE: Just a little. BOY: Not hungry.
[beat 2] The two voices overlap, hers soft and his small. Damien lowers the paper. DAMIEN: Let him be.
[beat 3] AGATHA: He was up all night. I heard him on the stairs. NOELLE: Was he sleepwalking? AGATHA: He was talking.
[beat 4] Damien turns a page. Noelle sets the knife down. The Boy stirs his oatmeal with one finger.
[beat 5] NOELLE: Who were you talking to, sweetheart? BOY: The man. DAMIEN: What man?
[beat 6] BOY: The one at the end of the hall. He said you'd be angry.
[beat 7] Agatha's ladle stops in the air. Damien sets the paper on the table. Noelle looks at the stove, and then at her mother.
[beat 8] AGATHA: Eat your breakfast.
[beat 9] She resumes ladling, and nobody speaks again.

### SCENE s00468 | INT. COUNTRY HOUSE - GREAT HALL - 1923 - EVENING
Characters: LADY WINIFRED PEMBROKE-ADEYEMI, REGGIE, ASHFORD-LU, MISS CORDELIA SANTANGELO, HORACE BLACKWOOD-ESSIEN, CONSTABLE HADDOCK
[beat 0] A cold stone hall hung with antlers. A fire gutters in the vast hearth. At a long oak table sit four guests over the remains of a late supper. LADY WINIFRED PEMBROKE-ADEYEMI (60s, pearls, ebony cane) presides at the head. At her right sits her nephew, REGINALD "REGGIE" ASHFORD-LU (30s, rumpled dinner jacket, flushed). Opposite him, MISS CORDELIA SANTANGELO (30s, severe black dress, a secretary's notebook), keeps her eyes on the fire. And the family physician, DR. HORACE BLACKWOOD-ESSIEN (50s, silver whiskers), swirls his brandy.
[beat 1] WINIFRED: More claret, Horace? HORACE: Thank you, Winifred.
[beat 2] REGGIE: Auntie, the telephone is ringing again. WINIFRED: Let it. REGGIE: It has rung six times. WINIFRED: Then it will ring a seventh.
[beat 3] CORDELIA: I shall answer it, Lady Winifred. She rises, crosses the flagstones, and lifts the heavy receiver from its cradle on the wall. CORDELIA: Pembroke Hall.
[beat 4] CONSTABLE: Miss Santangelo? Constable Haddock, calling from the village. I'm afraid there's been a death.
[beat 5] Cordelia glances at the table. The others have stopped talking. Reggie sets down his glass. CORDELIA: Whose? CONSTABLE: The gamekeeper, miss. Found in the lower meadow an hour ago. I thought her ladyship ought to know. CORDELIA: Thank you, Constable.
[beat 6] She replaces the receiver and turns back to the table. WINIFRED: Well?
[beat 7] CORDELIA: It was Mr. Tolliver, my lady. He is dead.
[beat 8] Winifred lowers her cane. Horace puts down his brandy. Reggie stares at the fire. The wind howls once in the chimney.
[beat 9] At the far end of the hall, the great oak door creaks open. A drenched figure stands on the threshold: CONSTABLE HADDOCK (40s, rain cape, helmet in hand).
[beat 10] HADDOCK: Beg pardon, my lady. I rode over directly. There are matters I need to ask. WINIFRED: Then come in out of the rain, Constable, and sit.
[beat 11] He hangs his cape on an antler and takes the empty chair at the foot of the table. The fire cracks, and no one meets anyone's eyes.

### SCENE s00469 | INT. LUNAR ICE-MINING HABITAT - AIRLOCK BAY - CONTINUOUS
Characters: TECHNICIAN ADEBAYO KOWALSKI-NAKAMURA, WARRANT OFFICER INGRID SOLBERG-MWANGI
[beat 0] Dim sodium lamps. Racked suits hanging like hanged men. Frost creeping up the inner hatch. Two figures prepare for a walk. TECHNICIAN ADEBAYO KOWALSKI-NAKAMURA (40s, undersuit, cooling garment tubing coiled at his neck) checks the seal on his glove while his partner, WARRANT OFFICER INGRID SOLBERG-MWANGI (30s, shaved head, flight patch on her sleeve) tests a tether clip, tugs it twice, and clips it to his belt, then runs a gloved thumb along the seam of his helmet ring.
[beat 1] INGRID: Pressure. ADEBAYO: Four-seven. Holding. INGRID: O2. ADEBAYO: Ninety-eight percent.
[beat 2] She nods. He nods. Neither speaks for a moment, and he picks up a sample case, hefts it, and sets it back down. She turns the dial on the wall panel, and the inner hatch slides shut with a hiss.
[beat 3] INGRID: Last time, you said you saw a light in the crater. ADEBAYO: I saw a reflection. INGRID: You said light. ADEBAYO: Ingrid, it was nothing.
[beat 4] She regards him through her visor. He looks at the floor. The pumps hum, drawing the air out of the bay, and the frost on the hatch deepens.
[beat 5] INGRID: Then we go look at nothing.
[beat 6] The outer door shudders open onto the black. He steps through first. She follows, paying out the tether behind her.

### SCENE s00470 | INT. GONDOLA CABLE CAR - ALPINE PASS - NIGHT
Characters: OKSANA VOLK, TEODOR, ARJUN, MIREILLE, BRAM, PIP
[beat 0] A steel box the size of a closet, swaying one degree at a time. Frost climbs the windows. Far below, the resort lights blink on a timer nobody can reach.
[beat 1] OKSANA VOLK (60s, retired nurse, wool hat pulled to her eyebrows) breaks a chocolate bar into six squares with her thumbnail. She hands them out in order of age, oldest to youngest.
[beat 2] TEODOR (30s, lift mechanic, grease in the creases of his knuckles) turns the dial on a radio. Static. He turns it back. Static.
[beat 3] ARJUN (17, rental skis between his knees) checks his phone. No bars. He checks it again.
[beat 4] MIREILLE (40s, immaculate parka, one glove missing) tucks her bare hand into her armpit and says nothing about it. BRAM (50s, broad, red-faced) holds his square of chocolate without eating it. PIP (8) licks hers slowly, making it last.
[beat 5] TEODOR: Wind drops by morning. They send the snowcat. OKSANA: Good.
[beat 6] BRAM passes his chocolate to Pip. Pip looks at Oksana. Oksana nods once. Pip takes it.
[beat 7] MIREILLE slides her glove off the other hand and gives it to Arjun without looking at him. He puts it on.
[beat 8] The car sways. Nobody mentions it.

### SCENE s00471 | INT. MUNICIPAL SWIMMING POOL - DRAINED - DAY
Characters: HOLLIS BRANDVOLD, NADIA BRANDVOLD
[beat 0] An Olympic-length basin, empty to the tiles. Lane lines still hang from their reels, slack as old rope. A faded blue fish is painted at the deep end. Pigeons walk the gutter.
[beat 1] HOLLIS BRANDVOLD (60s, lanky, a lifeguard whistle still on a cord around his neck) stands on the pool floor with a push broom. He sweeps nothing in particular.
[beat 2] NADIA BRANDVOLD (30s, his daughter, city-council lanyard, work shoes ill-suited to wet tile) climbs down the steel ladder one rung at a time. At the bottom she stops and looks up at the ceiling lights.
[beat 3] He keeps sweeping. She walks toward him.
[beat 4] HOLLIS: Careful by the drain. It's slick. NADIA: It's been closed since March. HOLLIS: Still slick.
[beat 5] She reaches him. He doesn't stop. She takes hold of the broom handle. He lets her. For a moment they both hold it, neither moving.
[beat 6] NADIA: They vote Thursday. HOLLIS: I heard. NADIA: I'm going to vote yes.
[beat 7] He nods at the painted fish. His thumb rubs the whistle.
[beat 8] HOLLIS: Your mother used to swim here at six a.m. Every day. Forty laps. NADIA: I know. HOLLIS: She hated the cold water. She did it anyway. NADIA: Dad.
[beat 9] He takes the broom back. She lets go. He sets it against the wall and they both look at the deep end, where the tile is cracked in a long, clean line.
[beat 10] HOLLIS: Fill it with dirt. Plant something. NADIA: That's the plan.
[beat 11] He nods. She stands beside him. Neither leaves.
[beat 12] A pigeon lifts out of the gutter and crosses the empty basin, and both of them follow it with their eyes until it clears the rim.

### SCENE s00472 | INT. NATURAL HISTORY MUSEUM - TAXIDERMY HALL - NIGHT
Characters: SUNNIVA HALVORSEN, MERIEM AIT-OUDIA, BASEMENT
[beat 0] A long gallery with a ceiling lost in dark. Glass cases run down both walls like the windows of a train that stopped decades ago. Inside them: foxes mid-stride, owls with wings half-raised, a heron balanced on one leg in painted reeds. Dust lies over everything in a soft grey fur.
[beat 1] Two flashlight beams cross the threshold and wander. SUNNIVA HALVORSEN (30s, cropped hair, a surveyor's vest with too many pockets) steps in first. She runs her light across the cases the way a person reads a menu in a language she half knows. MERIEM AIT-OUDIA (40s, heavy coat, an old camera strapped across her chest) follows two paces behind, breathing through her mouth.
[beat 2] SUNNIVA: Council wants an inventory by Friday. MERIEM: Of what? SUNNIVA: Everything with a tag. MERIEM: Everything here has a tag.
[beat 3] Sunniva crouches before a case of badgers. Their glass eyes catch the light and hold it a half-second too long. She tilts her beam and the shine slides away.
[beat 4] Meriem lifts the camera. She frames the heron. She does not press the shutter. She lowers it, wipes the lens with her sleeve, and lifts it again.
[beat 5] SUNNIVA: You can take the picture. MERIEM: I'm waiting for the light. SUNNIVA: It's a flashlight. It's not going to change.
[beat 6] Meriem lowers the camera. She looks at the heron, then at the floor in front of its case. A line of small, clean prints crosses the dust there, pale and even, as if something had walked the length of the hall on bare feet.
[beat 7] Sunniva sees them a moment after. She stands. She sets her light on the floor, pointing along the trail. It runs to the end of the gallery and into the dark between two cases.
[beat 8] SUNNIVA: Night guard. MERIEM: There is no night guard. SUNNIVA: Then somebody from the cleaning contract. MERIEM: No one has cleaned this hall in eleven years.
[beat 9] The beam trembles. Neither of them says whose hand is holding it.
[beat 10] Sunniva follows the prints a few steps. Meriem follows her. Between the cases there is a narrow service door, painted the same green as the wall. It is open an inch. Cold air breathes out of it, smelling of camphor and rain.
[beat 11] Meriem reaches past her and pushes the door wider. She leans her light into the gap. Stairs, going down. On the third stair, a single wet footprint, still shining.
[beat 12] SUNNIVA: That one's new. MERIEM: Yes.
[beat 13] They stand together at the lip of the stairwell. Behind them, in the hall, something small and dry settles in one of the cases: a click, like a claw on glass. Neither turns around.
[beat 14] Sunniva takes out her clipboard. She writes a line. She shows it to Meriem. The page says: BASEMENT - NOT ON INVENTORY.
[beat 15] Meriem nods. She lifts the camera and, for the first time, presses the shutter. The flash fills the stairwell white.
[beat 16] In the afterimage, the stairs are exactly as they were. The wet print is gone.
[beat 17] MERIEM: Friday. SUNNIVA: Friday.
[beat 18] She pulls the green door shut. It latches with a sound like a held breath let go. Both of them go back down the long gallery, past the badgers, past the owls. They do not hurry.
[beat 19] Behind them, every glass eye in the hall has turned a few degrees toward the door.
[beat 20] Sunniva stops at the exit and puts her hand flat against the wall. She switches off her light. Meriem switches off hers.
[beat 21] In the dark, the prints continue to cross the dust, one after another, toward the place where the two women had been standing.
[beat 22] SUNNIVA: Don't look back. MERIEM: I wasn't going to.
[beat 23] She opens the door to the street. Rain falls through the streetlight, ordinary and loud. They step out into it side by side, and the door swings shut on its own, slow, with the patience of a thing that has all night.

### SCENE s00473 | INT. TOLL PLAZA - BOOTH 4 - NIGHT
Characters: WEN DAI, PRAKASH NAIR, MRS. OKAFOR
[beat 0] A glass cubicle on an empty highway. A space heater ticks. A thermos, a paperback, a laminated sign reading EXACT CHANGE.
[beat 1] WEN DAI (50s, reading glasses on a beaded chain) marks her page and slides the window open as headlights arrive. PRAKASH NAIR (30s, rumpled suit, a sleeping toddler visible in the car seat behind him) hands her a twenty. She makes change slowly, counting it out coin by coin.
[beat 2] WEN: Long drive? PRAKASH: Not too bad.
[beat 3] His hands stay on the wheel at ten and two. She hands him the coins. He puts them in the cup holder one at a time.
[beat 4] A phone rings in the booth. Wen picks it up. MRS. OKAFOR: Wen, it's Ngozi at the state barracks. Is a grey Corolla at your gate?
[beat 5] Wen looks at the grey Corolla. She looks at the toddler. She looks at Prakash's hands.
[beat 6] WEN: No. Quiet night. I'll call you back. She hangs up. Prakash has not moved.
[beat 7] WEN: Your tail light is out. Take the service road. The patrol doesn't run it.
[beat 8] He stares at her. She slides the window shut and opens her paperback.

### SCENE s00474 | INT. BOWLING ALLEY - PARTY ROOM - DAY
Characters: GUS PRICE, YOLANDA PRICE, KENJI PRICE, DOROTHEA PRICE
[beat 0] Streamers, a sheet cake, paper plates. Lane 9 thunders next door. A banner reads HAPPY 80TH, GUS.
[beat 1] YOLANDA PRICE (50s) cuts the cake into squares too small for anyone. GUS PRICE (80, her father, party hat crooked) watches the knife. KENJI PRICE (20s, her son) sits at the end of the table scrolling through his phone. DOROTHEA PRICE (50s, Yolanda's sister, fresh off a flight) drops her coat across a chair and stays standing.
[beat 2] DOROTHEA: Nobody told me it was today. YOLANDA: I texted you. DOROTHEA: You texted me Tuesday.
[beat 3] Yolanda sets a plate in front of Gus. Dorothea moves it six inches to the left. Yolanda moves it back. They both let go at the same time.
[beat 4] GUS: I like the corner piece.
[beat 5] Kenji looks up. Yolanda and Dorothea lunge for the cake knife at once. They stop, hands on the handle, faces close.
[beat 6] YOLANDA: I'll do it. DOROTHEA: You've done everything. Clearly.
[beat 7] She yanks the knife. Frosting smears across the tablecloth. Kenji stands.
[beat 8] Gus lifts his hat off his head and sets it on the table, very gently, like a man laying down a hand of cards.
[beat 9] Through the wall, Lane 9 roars. Nobody at the table flinches.

### SCENE s00475 | INT. GRAIN ELEVATOR - BASE LEVEL - NIGHT
Characters: CASS, DUDA, FENWICK OKORO, MARGUERITE LAU
[beat 0] Dust hangs in the work light. Conveyor belts, silent. A hopper the size of a church.
[beat 1] CASIMIR "CASS" DUDA (40s, night foreman, canvas coat) walks the catwalk with a clipboard. Counting bins. Boots ring on steel.
[beat 2] Something shifts in the grain below. CASS: Fenwick? No answer. He taps his flashlight against his palm.
[beat 3] FENWICK OKORO (20s, new hire, hard hat too big) climbs up from a ladder at the far end. Wipes his hands on his overalls. Looks pale.
[beat 4] FENWICK: Bin six is warm. CASS: Grain heats. Settles. FENWICK: It's breathing, Cass.
[beat 5] Cass hears it now. A slow rattle, like a sleeper in the next room. Cass swings his beam over the side.
[beat 6] Fenwick leans out beside him, and the grain below rises in a smooth dome, as if something is turning over under a blanket, and Cass grabs Fenwick by the collar while the light jumps across the rafters and a third person steps out from behind a support column, silent, in a yellow slicker.
[beat 7] The newcomer is MARGUERITE LAU (60s, inspector's badge, white braid). She raises a hand for quiet. MARGUERITE: Both of you. Back to the stairs. Walk.
[beat 8] CASS: Who are you? MARGUERITE: The reason this elevator was condemned in 1987.
[beat 9] The dome in the grain sinks. Slowly the rattle stops.
[beat 10] FENWICK: Is it gone? MARGUERITE: It is listening.
[beat 11] They walk to the stairs together, step for step, not looking back. Behind them a single kernel rolls down the slope of the hopper and clicks against the steel.

### SCENE s00476 | INT. RUINED OPERA HOUSE - STALLS - DAY
Characters: SERGEANT OKONKWO, CORPORAL LINDQVIST, PRIVATE BAPTISTE, MEDIC TRAN, WOUNDED SOLDIER, PETRESCU, ACHTERBERG
[beat 0] Roof gone. Rain falls on velvet seats. A chandelier lies shattered across the orchestra pit. Distant artillery thumps.
[beat 1] SERGEANT OKONKWO (40s, broad, helmet strap chewed) crouches at the edge of the stage with his rifle. Hand signals. Behind him in the stalls, four soldiers go low between the seat rows. CORPORAL LINDQVIST (20s, pale, glasses taped at the hinge) scans the balcony. PRIVATE BAPTISTE (19, carrying the radio) hunches under the pit rail. MEDIC TRAN (30s, red cross on a torn sleeve) drags a bag across the aisle.
[beat 2] Okonkwo signals: two fingers, left. They move. He moves with them.
[beat 3] A cough from the stage-right curtain. All five freeze. Rifles swing as one.
[beat 4] A figure staggers out. Wounded. Uniform from the wrong side, no helmet, hands raised, one hand red to the wrist.
[beat 5] WOUNDED SOLDIER: Please. Please. OKONKWO: Down! On your knees!
[beat 6] He drops. Tran crosses the gap in three strides and tears his sleeve open. He grips her wrist; she shoves it away. TRAN: Hold still.
[beat 7] WOUNDED SOLDIER: Petrescu. Mihai Petrescu. OKONKWO: Where's your unit?
[beat 8] PETRESCU: Gone. Gone. Under the stairs. They are coming for the radio.
[beat 9] Baptiste hugs the radio set to his chest. Lindqvist spins toward the exits. A shell lands somewhere close and plaster rains from the proscenium.
[beat 10] ACHTERBERG (20s, sniper, scope cap between his teeth) is up in the dress circle, rifle braced on a brass rail. ACHTERBERG: Movement in the lobby! Boots on marble! LINDQVIST: How many? PETRESCU: Twelve. Fifteen. They have a mortar.
[beat 11] OKONKWO: Baptiste, call it in. Tran, he walks or he stays. Lindqvist, left aisle.
[beat 12] They break in four directions. Petrescu pulls himself up by the stage rail and Tran props him by the belt. Together they go, stumbling, toward the pit door.
[beat 13] A second shell. The chandelier trembles in the rubble and a single crystal drops, ringing, across the stone.

### SCENE s00477 | INT. MATTRESS SHOWROOM - NIGHT
Characters: MAN, GUARD DESHAWN, GILBERT
[beat 0] Ninety beds in perfect rows. A neon sign: SLEEP KINGDOM. Rain on the roll-up door. One security light, buzzing.
[beat 1] A MAN in a bathrobe (50s, slippers, a thermos of soup) sits on the edge of a king-size display, staring at the ceiling.
[beat 2] GUARD DESHAWN (30s, polyester uniform, flashlight) enters from the back office. Stops. Raises the flashlight. GUARD DESHAWN: Sir.
[beat 3] The man waves without looking. MAN: Evening. GUARD DESHAWN: Sir. We are closed. MAN: I know.
[beat 4] GUARD DESHAWN: How did you get in? MAN: Ordered a delivery. Left the door ajar. Your driver was very nice. GUARD DESHAWN: You can't be here.
[beat 5] MAN: I haven't slept in six weeks. Do you know what that does to a person? GUARD DESHAWN: No. MAN: It does something. Not good. I keep seeing a man in the corner of the room. Turns out it's a coat rack. But the point stands.
[beat 6] GUARD DESHAWN: Sir. I will have to call someone. MAN: Call whoever you like. Let me just try this one for ten minutes. GUARD DESHAWN: It's a three-thousand-dollar mattress. MAN: Hence the ten minutes.
[beat 7] GUARD DESHAWN: I'm going to need your name. MAN: Gilbert. GUARD DESHAWN: Gilbert what? GILBERT: Gilbert Ferreira-Whitlock. Hyphenated, a long story, involves a cousin. GUARD DESHAWN: Mr. Whitlock. GILBERT: Ferreira-Whitlock. The hyphen is the whole point.
[beat 8] GUARD DESHAWN: Gilbert. My shift ends at six. GILBERT: Then we have six hours. GUARD DESHAWN: You don't have six hours. You have until I call my manager.
[beat 9] GILBERT: Your manager is Brenda. Brenda told me, and I quote, "he's a sweetheart, let him sleep." GUARD DESHAWN: When? GILBERT: Tuesday. At the open house. I do not remember it clearly but I trust Brenda.
[beat 10] GUARD DESHAWN: There is no open house on Tuesday. GILBERT: Then it was a dream. A very restful dream. GUARD DESHAWN: Gilbert, please.
[beat 11] GILBERT: Deshawn. May I call you Deshawn? It says Deshawn on the tag. GUARD DESHAWN: It says GUARD DESHAWN on the tag. GILBERT: That's what I said. GUARD DESHAWN: You said Deshawn. GILBERT: It's a lovely name.
[beat 12] Deshawn sits on the next bed over. Springs sigh. He puts the flashlight on his knee.
[beat 13] GUARD DESHAWN: My mother had a bed like this. GILBERT: Did she sleep well? GUARD DESHAWN: She did. GILBERT: There. You see.
[beat 14] Gilbert lies down in his robe, hands folded on his chest. He closes his eyes. GILBERT: Don't leave. I might wake up.
[beat 15] GUARD DESHAWN: Ten minutes. GILBERT: Ten minutes.
[beat 16] Deshawn lies back. The neon buzzes. The rain keeps on.
[beat 17] Two snores, nearly in unison.

### SCENE s00478 | INT. FIELD HOSPITAL - CONVERTED TRAIN CARRIAGE - NIGHT
Characters: ISADORA FONTAINE, NURSE KWABENA ASANTE, ORDERLY SZYMON, SOLDIER, ADEYEMI
[beat 0] A passenger coach gutted for surgery. Cots where seats were. Hand-pumped lamps swing with the rails. A plywood table bolted to the floor.
[beat 1] DR. ISADORA FONTAINE (40s, surgical cap, sleeves rolled) leans over a patient on the table. NURSE KWABENA ASANTE (30s, steady hands) holds retractors. ORDERLY SZYMON (19, sleeves too long) feeds a hand-crank fan. A fourth figure, a SOLDIER in his twenties, lies still under the sheet with his boot half off.
[beat 2] FONTAINE: Everyone, suction. Now.
[beat 3] Kwabena and Szymon both lunge for the pump. They collide, hands tangled on the handle. KWABENA: Mine. SZYMON: Sorry. Sorry. FONTAINE: Come on. Come on, you stubborn thing.
[beat 4] The train lurches on a curve. Instruments slide. Fontaine pins the tray with her forearm. Kwabena catches a clamp mid-air.
[beat 5] KWABENA: Doctor, pressure is dropping. FONTAINE: I see it. Szymon, more light, left side. SZYMON: Which left? FONTAINE: Yours.
[beat 6] He swings the lamp over.
[beat 7] The soldier on the table gasps and arches. Everyone stills.
[beat 8] SOLDIER: Don't cut my leg. FONTAINE: We're not cutting your leg. SOLDIER: Promise.
[beat 9] FONTAINE: I promise. What's your name? SOLDIER: Corporal. Corporal Adeyemi. FONTAINE: Okay, Adeyemi. We're going to keep you.
[beat 10] ADEYEMI: Mama, please. Kwabena and Szymon exchange a look. Szymon wipes his eyes on his sleeve. The fan hums.
[beat 11] FONTAINE: Last stitch. Hold the line. Everybody breathe out.
[beat 12] The carriage exhales. The train rattles over a bridge, and for one second all four of them are still, as if the whole world is balanced on a thread.

### SCENE s00479 | INT. ICE-FISHING HUT - NIGHT
Characters: ELSPETH CRANE, LENNART BOYD
[beat 0] A plywood box on a frozen lake. One lantern. Two stools around a hole cut in the ice, black water glinting. Lines run down into it, motionless.
[beat 1] ELSPETH CRANE (60s, wool cap, thermos) sits with her rod across her knees. She hasn't touched her tea. LENNART BOYD (30s, her nephew, borrowed parka) holds his rod with both hands, jaw tight.
[beat 2] The ice groans somewhere out in the dark. A long, falling note. LENNART: That's normal. ELSPETH: Mm.
[beat 3] Silence. Lennart reels in an inch.
[beat 4] LENNART: You said nothing bites after midnight. ELSPETH: I said nothing should.
[beat 5] She pours tea into the lid and sets it by his boot. He doesn't pick it up.
[beat 6] Down in the hole, the black water is perfectly still. Then a ring spreads outward from its center. Small, round, deliberate.
[beat 7] Neither of them looks at it. LENNART: Aunt Elspeth. ELSPETH: Hush.
[beat 8] Lennart's line begins to run. The reel clicks. Faster. He grips it harder; his knuckles whiten.
[beat 9] Elspeth rests one hand on his wrist. ELSPETH: Let it go. LENNART: It's a good one. ELSPETH: Let it go.
[beat 10] He lets go. The rod slides across the ice and down the hole without a splash. The line sings out, then stops. The water goes still again.
[beat 11] Elspeth screws the cap on her thermos. She stands and gathers the stools. Lennart stays seated, looking at the hole, his hands open in his lap. ELSPETH: Come on.
[beat 12] He rises, slowly. She turns the lantern down. In the last light, the water in the hole is already skinning over with fresh ice.

### SCENE s00480 | INT. HIGH SCHOOL GYMNASIUM - WRESTLING WEIGH-IN - MORNING
Characters: COACH ANTONIA BELLWETHER, DEX, MAHLER, ZAVALA, ASSISTANT, PRIYA MENON, RAMÓN
[beat 0] Folding tables, a digital scale on a plywood riser, a banner for the Regional Qualifier. Bleachers half pulled out. The smell of floor wax and cut-up oranges.
[beat 1] COACH ANTONIA BELLWETHER (50s, track jacket, stopwatch on a lanyard) stands beside the scale with a clipboard. Calm. Her whistle hangs unused. DEXTER "DEX" MAHLER (17, 132 pounds on a good day, hoodie soaked through) waits in line in his socks. He's been running in trash bags since five a.m. OFFICIAL RAMÓN ZAVALA (60s, striped shirt, reading glasses low) hunches over the scale display. Behind him, a young ASSISTANT, PRIYA MENON (20s, volunteer lanyard), writes weights in a ledger.
[beat 2] RAMÓN: Next. Dex steps up. The scale hums. The digital readout flickers. RAMÓN: One thirty-one point six. PRIYA: Pass.
[beat 3] Coach Bellwether nods. She doesn't smile. She writes a tick mark. DEX: Thanks.
[beat 4] He steps down. His legs are slightly wobbly. Bellwether hands him a banana without looking.
[beat 5] BELLWETHER: Eat that slow. Drink the water slow. You wrestle at two. DEX: Yes, Coach. BELLWETHER: Sit.
[beat 6] He sits on the bottom bleacher. Peels the banana. Eats a quarter of it. Closes his eyes.
[beat 7] Priya turns a page. Ramón wipes the scale platform with a towel. Bellwether crosses to the table and pours coffee into a paper cup.
[beat 8] PRIYA: He looks good. BELLWETHER: He looks like a kid who hasn't had a meal in four days. PRIYA: He made weight. BELLWETHER: He did.
[beat 9] She sips. She watches Dex across the gym, and for a long moment she is very still.
[beat 10] BELLWETHER: Ramón. Can I see the scale certification? RAMÓN: It's on the wall. BELLWETHER: I'd like to see it. Please.
[beat 11] Ramón looks at her over his glasses. He takes a laminated card from a clip on the table and hands it over. Bellwether reads it. Reads the date. Her thumb pauses on the line.
[beat 12] BELLWETHER: Expired in August. RAMÓN: That's a typo. BELLWETHER: Is it. PRIYA: Coach, I think the district renewed it. I can check. BELLWETHER: Do.
[beat 13] Priya hurries out. The gym is very quiet. In the bleachers, Dex has opened his eyes. He watches the coach.
[beat 14] DEX: Coach? BELLWETHER: Eat your banana. DEX: What's wrong? BELLWETHER: Eat.
[beat 15] She walks to the scale and steps onto the platform in her shoes. The readout flashes: 148. She steps off. Takes a gym bag from beneath the table. Sets it on the platform. Zero. She sets a ten-pound weight from her pocket on top. The scale reads 3.
[beat 16] Ramón's face does not change. BELLWETHER: Three. RAMÓN: It drifts. BELLWETHER: It drifts by seven pounds. In whose favor, Ramón? RAMÓN: Coach, I'm just the official. BELLWETHER: You are the official who has been rejecting my kids since September.
[beat 17] Dex stands, the banana forgotten in his fist. DEX: So I didn't make weight? BELLWETHER: You made weight. You made it four times over. Your actual weight is a hundred and thirty-eight. DEX: That's... BELLWETHER: Over. Over by six. You've been under-reported all season on this scale and over-reported on that one.
[beat 18] She takes the clipboard and tucks it under her arm. BELLWETHER: Priya is going to come back with a form. And you will not sign anything, Ramón, until a state official arrives.
[beat 19] Priya re-enters at the door. She stops. She sees the three of them frozen in the long light from the high windows. PRIYA: It was renewed. BELLWETHER: I know.
[beat 20] PRIYA: Coach, the district never renewed it. I called. The man said you'd been asking since August.
[beat 21] Ramón sits down on the riser. The scale behind him gives a soft electronic chime, as if politely clearing its throat.

### SCENE s00481 | INT. AMBULANCE - PARADE ROUTE - DAY
Characters: PARAMEDIC LUCIANA ORTEGA, MAN, FITZ, BOYLE, INTERN SUNITA RAO, DRIVER MOSES BELL, DELACROIX-NGUYEN, SON, JOON-HO KANG
[beat 0] Siren off. Confetti on the windshield. A marching band thumps outside. The rig is parked in a crowd.
[beat 1] PARAMEDIC LUCIANA ORTEGA (30s, ponytail) kneels over a MAN on the gurney. He is gray, gasping. PARAMEDIC FITZGERALD "FITZ" BOYLE (50s, mustache) shoves an oxygen mask over his face. INTERN SUNITA RAO (20s, first week) clutches the monitor. DRIVER MOSES BELL (40s, hi-vis vest) leans in from the front seat. A bystander, MRS. DELACROIX-NGUYEN (70s, parade sash), clambers in uninvited. A SON, JOON-HO KANG (20s, shaking), hovers at the rear doors.
[beat 2] LUCIANA: Fitz, line, now. FITZ: Doing it, Lu.
[beat 3] SUNITA: Pressure's ninety over fifty! MOSES: Do I roll? MRS. DELACROIX-NGUYEN: He's my neighbor! He sings in the choir!
[beat 4] LUCIANA: Ma'am, out. JOON-HO: Dad! Dad, look at me! FITZ: Joon-ho, back up, give her room. SUNITA: Eighty over forty!
[beat 5] LUCIANA: Push epi. Sunita, you push it. SUNITA: Me? LUCIANA: You.
[beat 6] Sunita takes the syringe. Her hand trembles. Fitz steadies her wrist. FITZ: Easy, kid. Slow.
[beat 7] She pushes. Everyone holds still. The band outside blares a brass chord.
[beat 8] The monitor beeps. Beeps again. Settles into a rhythm.
[beat 9] SUNITA: Ninety-five over sixty. MOSES: Moses is rolling.
[beat 10] Luciana sits back on her heels and exhales. Mrs. Delacroix-Nguyen crosses herself. Joon-ho grips the rail.
[beat 11] JOON-HO: Is he okay? LUCIANA: He's coming back, Joon-ho. You did good.
[beat 12] FITZ: Sunita did good. SUNITA: I did good? LUCIANA: You did good, rookie.
[beat 13] Moses pulls out. The crowd parts. A tuba player salutes.
