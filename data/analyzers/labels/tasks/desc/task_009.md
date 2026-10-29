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
Write the scenes as JSON Lines (one object per line) in THREE files with the Write tool: scenes 1-30 to /home/user/screenwrite-analyzers/data/analyzers/labels/desc/part_009_a.jsonl, 31-60 to /home/user/screenwrite-analyzers/data/analyzers/labels/desc/part_009_b.jsonl, the rest to /home/user/screenwrite-analyzers/data/analyzers/labels/desc/part_009_c.jsonl. No other text in the files. Reply only with "done N".

## Scenes

### SCENE s00845 | INT. FIELD BAKERY IN A RUINED CATHEDRAL - NIGHT, 1944
Characters: SERGEANT ELIAS MWANGI, CORPORAL TADEUSZ BIELSKI, PRIVATE LACHLAN MUIR, LIEUTENANT HARUKO TANAKA
[beat 0] Ovens burn where the altar once stood. Stained glass lies in colored shards along the nave. Flour sacks form a low wall. Distant artillery thumps like a slow heart. SERGEANT ELIAS MWANGI, forties, sleeves rolled, kneads dough on a pew. CORPORAL TADEUSZ BIELSKI, twenties, sits against a pillar rubbing his boot. PRIVATE LACHLAN MUIR, nineteen, feeds wood into an oven. LIEUTENANT HARUKO TANAKA, thirties, a quartermaster with a notebook, stands at the door reading a list by candlelight. He lifts the dough, slaps it down. She turns a page. The private fans the fire with his cap.
[beat 1] HARUKO: Eleven hundred loaves by dawn. Sergeant Mwangi, will that be possible? ELIAS: Possible, ma'am. Pleasant, no.
[beat 2] TADEUSZ: Sergeant, the flour is damp. ELIAS: Flour is always damp in this country. Everything is.
[beat 3] LACHLAN: Sergeant, do you think the cathedral minds? ELIAS: Minds what? LACHLAN: Us. Baking in it. ELIAS: Private, it's the warmest room for fifty miles. If God wanted it empty He should've kept the roof on.
[beat 4] TADEUSZ: My grandmother would have crossed herself. HARUKO: Mine would have asked for the recipe. LACHLAN: What did she bake? HARUKO: Rice cakes. Very patiently. She said bread was for people in a hurry. ELIAS: She was right.
[beat 5] TADEUSZ: Then what are we doing? ELIAS: Hurrying. Badly.
[beat 6] A shell lands somewhere far off. Dust sifts from the vault. Nobody looks up.
[beat 7] LACHLAN: Lieutenant, do you ever write home? HARUKO: Every Sunday. LACHLAN: What do you say? HARUKO: That the bread is excellent.
[beat 8] ELIAS: It is. TADEUSZ: It is not. It is edible. ELIAS: Edible is excellent, Corporal. Ask anyone who's been hungry.
[beat 9] Tadeusz nods slowly. Lachlan adds a log. The fire pops. Haruko tears out a page, folds it, and slips it into her pocket.
[beat 10] HARUKO: Gentlemen, what time is it? ELIAS: Nearly three.
[beat 11] HARUKO: Then you have two hours to make a thousand loaves. ELIAS: And what will you do, ma'am? HARUKO: Pray the bread is excellent.

### SCENE s00846 | INT. SUDSY'S 24-HOUR CAR WASH, TUNNEL BAY - NIGHT
Characters: THE MAN, DUKE, RHODA FENWICK, CITY INSPECTOR, BOONE
[beat 0] Brushes hang like giant sleeping spiders. Neon pink water pools on the concrete. A radio plays soft country from a plastic shelf. The tunnel is empty.
[beat 1] THE MAN, forties, in a camel coat and gloves, enters on foot from the rain, a briefcase held tight against his chest. He glances at the exit, then at the cash window. DUKE, sixty, the night attendant, sits on an upturned bucket with a thermos between his knees, doing a crossword. RHODA FENWICK, thirties, in a navy suit with a lanyard that says CITY INSPECTOR, steps out of the office with a clipboard, pen already uncapped.
[beat 2] Duke fills in a word and looks up. The Man edges along the wall, trying to keep out of the light. Rhoda follows him with her eyes, then with her pen, and writes something on the clipboard, and walks toward him at an even pace.
[beat 3] RHODA: Evening. You here for a wash? THE MAN: I walked. RHODA: That's an odd way to get a car washed. THE MAN: I'm between cars.
[beat 4] Duke pours coffee into the thermos cap and drinks. He doesn't take his eyes off the briefcase.
[beat 5] DUKE: Eleven letters. "Unwelcome visitor." RHODA: Trespasser. DUKE: That's ten. RHODA: Intruder. Eight. Well, I tried.
[beat 6] The Man lets the briefcase drop to his side. It swings, heavy, and thuds against his knee. Rhoda's pen stops.
[beat 7] RHODA: Sir, what's your name? THE MAN: Does it matter? RHODA: I like to put a name on my forms. THE MAN: Boone.
[beat 8] Duke chuckles into his thermos. DUKE: Boone like Daniel? BOONE: Boone like Walter. Walter Boone.
[beat 9] Rhoda writes it down. Duke fills in four more squares of the puzzle. Boone sets the briefcase on the floor and slides it, with his foot, a few inches toward the drain.
[beat 10] RHODA: Mr. Boone, would you open that for me? BOONE: It's just papers. RHODA: Then it won't take a minute.
[beat 11] Boone looks at Duke. Duke looks at the crossword. Boone kneels, thumbs the latches, and lifts the lid.
[beat 12] Inside, stacked in rubber bands, is a thick wall of cash.
[beat 13] Rhoda lowers the clipboard and says nothing for a long moment. RHODA: That's a lot of papers. BOONE: I'm a very organized man.
[beat 14] Duke drains his thermos, caps it, and rises with a grunt. He slides a squeegee off its rack and holds it like a cane.
[beat 15] DUKE: Seven across. "Fair deal." RHODA: Hush. DUKE: Eight letters. Starts with a G.
[beat 16] Boone and Rhoda both turn to stare at him.

### SCENE s00847 | INT. SELF-STORAGE FACILITY, UNIT 214 - NIGHT
Characters: MERCER, LINN, OTTO, SABA
[beat 0] A concrete corridor lined with orange roll-up doors. A buzzing fluorescent tube. A single padlock hangs open. MERCER, 40s, in a black windbreaker, hauls up the door of unit 214. LINN, 30s, her partner, in a hooded parka, holds a flashlight. OTTO, 60s, a gaunt night manager in a security fleece, stands behind them, jangling keys. SABA, 20s, a rental clerk, hangs back at the corner with her phone raised.
[beat 1] Inside the unit: a card table, one folding chair, and a wall of photographs pinned and strung with red thread. LINN: Jesus.
[beat 2] MERCER: That's his handwriting. OTTO: I told them it was rented to an accountant.
[beat 3] SABA: I'm recording this, by the way. MERCER: Delete it. SABA: ^It's for my own protection. OTTO: ^Let her.
[beat 4] Mercer sighs and steps into the unit. Linn follows with the beam.

### SCENE s00848 | INT. DESALINATION PLATFORM "KESTREL REEF," DORMITORY GALLEY - NIGHT
Characters: PERPETUA LOWE, YOSHIRO ABE, THE STRANGER, ADEBOLA
[beat 0] A steel room bolted to the open sea. Portholes show black water and the white scrawl of waves. A table, three stools, a kettle that screams on a hotplate. Everything slightly damp. PERPETUA LOWE, fifties, platform superintendent, scrapes burnt toast over the sink. YOSHIRO ABE, thirties, the pump engineer, sits slumped at the table with his boots off. Across from him sits a young woman in a borrowed hoodie, her hair wet, a blanket around her shoulders: THE STRANGER, early twenties. She holds a mug with both hands and has not spoken since the supply boat left her here.
[beat 1] PERPETUA: Tea or something stronger? The stranger shakes her head. YOSHIRO: She hasn't said a word. PERPETUA: She doesn't have to. She's drinking our tea.
[beat 2] The kettle shrieks. Perpetua lifts it off the plate. The platform groans against a swell, and the tea in the mug trembles in rings.
[beat 3] YOSHIRO: Supply boat's not back till Thursday. PERPETUA: Then she's our guest till Thursday. YOSHIRO: Perp, we don't have a bunk. PERPETUA: Take mine. YOSHIRO: I can't take PERPETUA: Yoshiro.
[beat 4] He raises both hands in surrender.
[beat 5] The stranger sets down her mug and, for the first time, looks up at them. THE STRANGER: Adebola. Perpetua and Yoshiro turn. The word hangs in the steam.
[beat 6] PERPETUA: Pardon? ADEBOLA: My name. Adebola Nwosu. YOSHIRO: Nice to meet you, Adebola.
[beat 7] ADEBOLA: I should say I did not fall off the boat. PERPETUA: Did anyone say you did? ADEBOLA: I think you wondered.
[beat 8] Perpetua sets down the toast and wipes her hands on her trousers, slowly, one finger at a time. PERPETUA: We wondered.
[beat 9] ADEBOLA: I walked off it. YOSHIRO: Walked off a moving boat. ADEBOLA: Into the sea, and then I swam here. It took a long time.
[beat 10] The room is very quiet. A pipe knocks in the wall. Yoshiro opens his mouth, closes it again.
[beat 11] PERPETUA: Why? Adebola turns the mug a quarter-turn on the table.
[beat 12] ADEBOLA: I wanted to see if the platform was real. If anyone really lived out here. YOSHIRO: And? ADEBOLA: Someone made me tea.
[beat 13] Perpetua laughs, a startled bark. Then she pulls up a stool and sits.
[beat 14] PERPETUA: Yoshiro, pour her another cup. He fills it. Steam rises. The kettle ticks as it cools. Outside, the sea keeps its slow business.
[beat 15] PERPETUA: Adebola, you're going to want to eat something. ADEBOLA: I would like that. YOSHIRO: We have toast. PERPETUA: It's burnt. ADEBOLA: I will eat it burnt.

### SCENE s00849 | INT. CENTRAL TELEPHONE EXCHANGE, SWITCHBOARD ROOM - 1912 - NIGHT
Characters: CLEMENTINE VOSS, ASHWORTH
[beat 0] Rows of brass jacks. Cords dangle like vines. A gas lamp hisses.
[beat 1] CLEMENTINE VOSS, twenty, headset clamped over a bun, plugs a cord into a jack. Pulls another. Hands blur. CLEMENTINE: Number, please. She listens. Smiles, small. Connects the call. CLEMENTINE: Go ahead, caller.
[beat 2] A light flares on the board. Another. She works faster.
[beat 3] The door opens. MR. ASHWORTH, fifties, supervisor, in a stiff collar and pince-nez, steps in with a folded paper. He doesn't greet her.
[beat 4] ASHWORTH: Miss Voss. CLEMENTINE: Number, please. Yes, sir?
[beat 5] ASHWORTH: You were seen leaving the building with a gentleman on Tuesday. She plugs a cord, fingers steady, eyes on the board. CLEMENTINE: My brother, sir. ASHWORTH: You have no brother on the register. CLEMENTINE: Then the register is wrong.
[beat 6] He sets the paper on her desk. She does not look at it. Another light flares. She answers it.
[beat 7] CLEMENTINE: Number, please. ASHWORTH: Miss Voss. I am speaking to you. CLEMENTINE: And I am speaking to Mrs. Delaney, sir. Her husband is in hospital.
[beat 8] He takes a breath. Straightens his pince-nez. Then he reaches past her, takes the cord, and gently pulls it out of the jack.

### SCENE s00850 | INT. ICE FISHING HUT ON FROZEN LAKE - DAY
Characters: WENDELL, BRODSKY, TOBY, RAY
[beat 0] A shack the size of a closet. Bare wood benches. A hole in the floor with black water and a bobbing line. A propane heater ticks. WENDELL "PA" BRODSKY, sixties, in a quilted vest, sits hunched over the hole with a short rod. His grandson TOBY, ten, in a puffy snowsuit, kneels across from him holding a thermos he can barely lift. RAYLENE "RAY" BRODSKY, sixteen, plugs one ear with an earbud and sulks on the far bench.
[beat 1] TOBY: Pa, is it a bite? WENDELL: Not yet, bud. TOBY: How do you know? WENDELL: The line would twitch.
[beat 2] Toby stares at the line. It floats. He unscrews the thermos, pours cocoa onto his mitten, and licks it. Ray rolls her eyes and turns up her music.
[beat 3] RAY: This is so boring. WENDELL: It's supposed to be. RAY: Then why do it? WENDELL: Because it's quiet. RAY: It's not quiet. Toby's slurping. TOBY: I'm not slurping. RAY: You are slurping.
[beat 4] Wendell lays a hand on the rod. He does not look at either of them. Toby slides closer and pushes the thermos into his grandfather's lap. TOBY: Pa, have some. WENDELL: Thank you, bud.
[beat 5] He sips. Wipes his mustache with the back of his glove. The heater ticks. A breath of wind pushes at the door, and the hut shivers.
[beat 6] RAY: Pa, how long did Grandma fish with you? WENDELL: Forty years. RAY: Did she think it was boring? WENDELL: Every winter. RAY: Then why'd she come? WENDELL: Because I did.
[beat 7] Ray lowers the earbud. She looks at the hole in the floor, the black circle, and the line sitting in the middle of it like a thin white thread.
[beat 8] TOBY: Pa. Pa! It twitched. WENDELL: Hold on, bud. TOBY: It did! I saw!
[beat 9] Ray slides off her bench onto her knees beside him and Toby, and the three of them lean over the hole, nearly touching heads. The line dips once. Then goes still.
[beat 10] RAY: False alarm. TOBY: It twitched. WENDELL: It's thinking about it.
[beat 11] They wait. The heater ticks. Toby's head sinks onto Wendell's shoulder. Ray lets the earbud dangle.
[beat 12] RAY: Pa? WENDELL: Mm. RAY: This isn't that boring.
[beat 13] He doesn't answer. He just watches the line, and the corner of his mustache moves.

### SCENE s00851 | INT. STALLED ELEVATOR, GRANDVIEW HOTEL - DAY
Characters: BART, KWIATKOWSKI, YOLANDA PRICE, CHEN WEI, FIONNUALA DOYLE
[beat 0] A mirrored box, brass rails. A tiered wedding cake in a white box sits on a luggage cart in the center. The floor indicator is stuck between 14 and 15. BARTHOLOMEW "BART" KWIATKOWSKI, fifties, pastry chef in whites, grips the cart with both hands. YOLANDA PRICE, thirties, the wedding planner, in a headset and heels, stabs the alarm button. CHEN WEI, twenties, the bellhop, leans against the rail eating a granola bar. FIONNUALA DOYLE, sixties, the bride's grandmother, sits on a folding stool she has brought from somewhere, knitting.
[beat 1] YOLANDA: Okay. Everyone remain calm. BART: I am calm. This cake is not calm. CHEN: It's a cake. BART: It is forty-eight hours of fondant.
[beat 2] The elevator shudders. The cake tiers slide an inch. Bart and Yolanda lunge at the same time and bump foreheads. YOLANDA: Ow! BART: Ow!
[beat 3] Fionnuala keeps knitting. FIONNUALA: Always the same with the young. You rush and then you bleed.
[beat 4] YOLANDA: The ceremony starts in thirty minutes. CHEN: I can call someone. YOLANDA: Please do.
[beat 5] He pulls a walkie-talkie from his belt, presses the key, and hears only static. He taps it against his palm. Bart watches the cake like a man watching a cliff. BART: Don't tilt. Don't tilt.
[beat 6] FIONNUALA: Chen, dear, is there a phone number on the wall? CHEN: Yes, ma'am. FIONNUALA: Then why on earth aren't we using it?
[beat 7] Everyone turns to the wall. A small door in the panel reads EMERGENCY PHONE. Yolanda yanks it open. Inside is a handset and a sticker: OUT OF ORDER. YOLANDA: Of course.
[beat 8] The elevator drops two inches. The cake slides. Bart and Chen and Yolanda all dive for it, and the three of them end up in a pile on top of the cart, holding the box together like a family hugging.
[beat 9] Fionnuala turns a row on her needles and does not look up. FIONNUALA: Well. That's one way to do it.

### SCENE s00852 | INT. NATIONAL RESPONSE CALL CENTER, FLOOR THREE - DAY
Characters: DUANE PRESCOTT, SHANICE WILLIAMS, KOVACS
[beat 0] Beige cubicles. Gray carpet. A banner: "EVERY CALL IS AN OPPORTUNITY!" A wall clock ticks over a whiteboard of call counts. DUANE PRESCOTT, 40s, in a headset and a tie loosened to the second button, sits at a cube with a script taped to the monitor. SHANICE WILLIAMS, 30s, in the next cube, fills out a form in tiny block letters, never glancing up.
[beat 1] DUANE: Thank you for calling National Response, my name is Duane. How may I... He stops. Listens. Writes a line. Crosses it out. DUANE: Yes, ma'am, I understand your frustration.
[beat 2] Shanice lowers her pen. SHANICE: Duane. You've said "I understand" eleven times. DUANE: Because I do understand. SHANICE: You've been transferred to nobody.
[beat 3] A chirp from the ceiling speaker. The intercom. KOVACS: Attention, floor three. This is a reminder that average handle time is up four percent. Please be mindful. DUANE: Mindful. I'm mindful. SHANICE: Four percent. We're a ship and it's four percent.
[beat 4] A few muffled snorts from nearby cubes. Duane slides his chair back. Shanice stands. They look at each other over the cubicle wall, then at the clock.
[beat 5] KOVACS: Also, Duane. Shanice. Please remember that personal conversations are logged.
[beat 6] Duane takes off his headset and places it in the middle of his desk. Shanice does the same. Together they push back their chairs, which squeal on the carpet.
[beat 7] DUANE: Mr. Kovacs, I have a question. KOVACS: Please direct it to your supervisor. DUANE: You are my supervisor. KOVACS: Then please direct it to a future me.
[beat 8] Shanice walks to the banner and takes a corner in each fist. The tape tears loose with a long squeal. Duane takes hold of the other end. They bring it down and stand there in a slump of paper, holding it between them.
[beat 9] SHANICE: I always hated that banner. DUANE: I wrote it. SHANICE: I know.
[beat 10] The intercom chirps again, but neither of them listens.

### SCENE s00853 | INT. SMALL CLAIMS COURT, STRIKE ZONE LANES ANNEX - DAY
Characters: JUDGE FAIRCLOTH, ELSPETH MORROW, ABERNATHY
[beat 0] A bowling alley, daytime. A folding table stands at the end of lane four. The pins are still set. A hand-lettered sign: "COURT IN SESSION. NO SHOES, NO SERVICE." JUDGE FAIRCLOTH, sixties, in a black robe over a bowling shirt, sits on a high stool. ELSPETH MORROW, forties, the plaintiff, stands with a binder. MR. ABERNATHY, seventies, the defendant, sits in a plastic chair clutching a trophy.
[beat 1] FAIRCLOTH: Ms. Morrow, you allege Mr. Abernathy broke your window with a bowling ball. ELSPETH: I allege it, Your Honor. Lane six, left-hand hook, two a.m.
[beat 2] ABERNATHY: It wasn't two. It was one-forty. FAIRCLOTH: Mr. Abernathy, you'll have your turn. ABERNATHY: One-forty. I wrote it down.
[beat 3] ELSPETH: The ball came through my bathroom window, Your Honor. FAIRCLOTH: From the alley? ELSPETH: From the parking lot. He was bowling in the parking lot.
[beat 4] Abernathy grips the trophy. Faircloth leans down from the stool and gestures with his gavel to the empty lanes beyond, as if the gallery were full.
[beat 5] FAIRCLOTH: Let the record show we have no jury, no clerk, and no coffee.
[beat 6] He taps the gavel. It bounces off the table and rolls under lane four.

### SCENE s00854 | EXT. THE MARKET ON MOSSBACK'S SHELL - NIGHT
Characters: IXCHEL VANTH, BRAM OSSERY, THISBE, ULAANA KHAN, MOSSBACK
[beat 0] A giant tortoise the size of a hill wades through a silver-grass plain under three moons. Lanterns hang from its shell ridges like fruit. Stalls of woven reeds, hanging spices, strings of glowing beetles. The air smells of smoke and honey. IXCHEL VANTH, thirties, a spice merchant in a feathered shawl, weighs saffron on a brass scale. BRAM OSSERY, twenties, a young knight with a scuffed breastplate, leans on her counter pretending to browse. THISBE, ageless, a street-musician, plays a hollow-bone flute under a lantern. ULAANA KHAN, forties, in a fur-lined cloak, inspects a jar of black pepper held to the light.
[beat 1] IXCHEL: Three silver for the saffron. BRAM: Two. IXCHEL: Three, and you pay for the staring.
[beat 2] Bram drops his eyes to the scale. Ulaana lowers the jar and watches him across the stall. Thisbe's flute dips into a minor key.
[beat 3] ULAANA: You're far from the capital, sir knight. BRAM: I'm on holiday. ULAANA: Wearing the king's crest.
[beat 4] He shifts. His cloak falls over the crest. Ixchel slides the scale an inch to the left, away from his hand.
[beat 5] IXCHEL: Ulaana. He's a boy. ULAANA: He's a boy with a king's seal in his pocket.
[beat 6] Bram's fingers move toward his belt. Thisbe stops playing. For a moment the market's murmur is the only sound.
[beat 7] A deep note rolls beneath their feet, the long slow call of the tortoise itself. MOSSBACK: I feel four hearts quicken on my back. Who has a secret?
[beat 8] Everyone stills. Lanterns sway. Thisbe lowers the flute and bows to the ground. THISBE: Great One. Nobody speaks. MOSSBACK: Then I will walk slower.
[beat 9] The ground shudders and settles. Ixchel moves first, slowly, and sets the scale on the counter.
[beat 10] IXCHEL: Two silver and a half. BRAM: That's robbery. IXCHEL: That's the price of silence.
[beat 11] He pays. She wraps the saffron in a leaf, holds it out. He takes it without meeting her eyes.
[beat 12] Ulaana sets down the pepper jar and turns away, her cloak flaring, and walks into the crowd.
[beat 13] Thisbe lifts the flute and begins a new tune, bright and quick, as if nothing had happened.

### SCENE s00855 | INT. BOTANICAL GARDEN, ORCHID HOUSE - NIGHT
Characters: FENN, CALLIOPE
[beat 0] Mist hangs in humid air. Violet and white blooms spill from hanging baskets. A path of wet gravel winds between benches. FENN, 40s, in a damp raincoat, crouches beside a bench and runs a gloved thumb along a stem. CALLIOPE, 30s, the greenhouse curator, stands over him, arms folded, with a keyring that jingles at her hip.
[beat 1] He lifts a petal with tweezers. She watches his hands.
[beat 2] FENN: This one's been cut. CALLIOPE: Orchids are cut all the time. FENN: Not at the root. Not with a scalpel.
[beat 3] She says nothing. He bags the stem and places it carefully in a case.
[beat 4] CALLIOPE: You won't find anything here. FENN: You're sure? CALLIOPE: I'm certain.
[beat 5] He stands. The mist parts around him. He looks up at the glass ceiling, then back at her, and his eyes stop on her gloved hand.
[beat 6] FENN: Who taught you to hold a scalpel like that? CALLIOPE: ^Who taught you to ask?
[beat 7] They speak in perfect unison. A drop of water falls from a leaf onto the gravel. Neither moves.

### SCENE s00856 | INT. GRAND PLAZA HOTEL, BALLROOM B - ARBITRATION HEARING - DAY
Characters: HARGREAVE, OTTOLINE, RAFFERTY, SUNITA, LORCAN
[beat 0] A long table with water pitchers and legal pads. A banner for a dental convention is still hanging on the wall. Five people sit with their binders open.
[beat 1] HARGREAVE: Ms. Ottoline, for the record, your client signed the second addendum on the fourteenth. OTTOLINE: My client signed a draft on the fourteenth. A draft is not an addendum. RAFFERTY: It had a signature page. OTTOLINE: It had a signature line, Mr. Rafferty. There's a distinction.
[beat 2] SUNITA: Arbitrator, may I interject? HARGREAVE: You may, Ms. Desai. SUNITA: The addendum was circulated by email, acknowledged by email, and acted on within forty-eight hours. Whatever Ms. Ottoline calls it, her client behaved as if it were binding. OTTOLINE: Behaved. Not agreed.
[beat 3] LORCAN: If I may, Arbitrator. The payments began on the sixteenth. OTTOLINE: Mr. Lorcan, with respect, you are a witness, not counsel. LORCAN: I'm both. It's a small firm. HARGREAVE: Order, please.
[beat 4] RAFFERTY: Arbitrator, the payments are the point. Our client sent fifteen thousand dollars each month for six months.
[beat 5] OTTOLINE: Under protest. SUNITA: Under what protest? There's no letter. OTTOLINE: There's a voicemail. RAFFERTY: A voicemail. OTTOLINE: Time-stamped and transcribed.
[beat 6] HARGREAVE: Is the transcript in evidence? OTTOLINE: Exhibit nine.
[beat 7] LORCAN: Exhibit nine is blank. OTTOLINE: It is not blank, it is redacted. SUNITA: Redacted by whom? OTTOLINE: By the court reporter.
[beat 8] HARGREAVE: Ms. Ottoline, the court reporter works for me. OTTOLINE: Then I suspect she followed instructions. HARGREAVE: Mine? OTTOLINE: I didn't say yours.
[beat 9] Nobody speaks. The banner behind them sags a little on its tape.
[beat 10] A dental hygienist pokes her head through the door, takes one look at the room, and withdraws.

### SCENE s00857 | INT. ASHER GOLDBERG'S APARTMENT, KITCHEN - NIGHT
Characters: LEONIE GOLDBERG, ASHER
[beat 0] A narrow galley kitchen with stacked dishes, peeling wallpaper, a calendar from a plumbing company dated three years ago. Rain on the window. LEONIE GOLDBERG, thirties, in her work blazer and a coat still buttoned, stands at the counter unpacking a paper bag of groceries. She sets down a loaf, a carton of milk, a box of pills, reads the label, and shelves it with the others in a row she has clearly arranged many times before.
[beat 1] From the bedroom down the hall comes a cough, deep and rough. Then a man's voice.
[beat 2] ASHER: Leonie? LEONIE: I'm here, Papa. ASHER: Did you bring the soup? LEONIE: I brought the other soup. ASHER: Not the tomato. LEONIE: Mushroom. ASHER: Bah.
[beat 3] She turns on the stove, fills a pot, and breaks the can open with a bright little clack. She stirs. Steam rises.
[beat 4] The cough comes again from the bedroom and this time lasts, and she stops stirring and stands with the spoon above the pot, listening to every second of it. LEONIE: Papa, are you all right? ASHER: Fine. I'm fine. Where's your brother?
[beat 5] She sets the spoon on the rest, wipes her hands on a dish towel, folds it in half, and folds it again. LEONIE: Danny's in Phoenix. He said he'd call. ASHER: He says a lot of things. LEONIE: I know.
[beat 6] She walks down the hallway, past a wall of framed photographs, past the bathroom with its door open, past a pair of slippers on the carpet. She stops at the bedroom door. The light inside is dim. She raises her hand to knock, then lowers it, and instead rests her palm flat against the wood.
[beat 7] ASHER: Leonie, are you standing there? LEONIE: No. ASHER: I can see your shadow under the door.
[beat 8] She laughs, brief and wet, and pushes the door open. LEONIE: Mushroom or nothing, Papa. ASHER: Mushroom.

### SCENE s00858 | INT. DEVEREAUX NATURAL HISTORY MUSEUM, TAXIDERMY HALL - AFTER HOURS
Characters: MONTAGUE FINCH, PHILIPPA HOLT, DASHIELL WREN, XIMENA ROJAS, LUDO PETRIE
[beat 0] Glass cases in long, shadowed rows: a snarling bear, a heron on one leg, a family of foxes frozen mid-pounce. A moth circles the one working lamp. Dust lies in a fine gray veil across everything. MONTAGUE FINCH, sixties, the museum director, stands under the lamp with a gold pocket watch in his hand and a smudge of dust on his cuff. PHILIPPA HOLT, forties, a private detective in a green overcoat, kneels beside the heron's case, shining a penlight on the lock. DASHIELL WREN, thirties, the night guard, stands in the doorway with a baton and a sour expression. XIMENA ROJAS, twenties, the intern, clutches a sheaf of loan forms against her chest. LUDO PETRIE, fifties, the taxidermist, sits on a stool in the corner with a sleeve of his cardigan unraveling in his fingers.
[beat 1] PHILIPPA: The lock wasn't forced. MONTAGUE: Then someone had a key. DASHIELL: Only three keys exist. Mine. Mr. Finch's. And the taxidermist's. LUDO: Mine's in my pocket.
[beat 2] He proves it by pulling out a ring, jingling it, and returning it. Montague turns his watch over in his palm. Philippa lifts the lid of the case, takes out a single feather with a pair of tweezers, and holds it up to the lamp. Dashiell shifts his weight and reaches for a handkerchief. Ximena sets the loan forms on a bench, then picks them up again, as though they might be needed. Ludo winds the loose thread of his cardigan around his finger until it goes white.
[beat 3] PHILIPPA: This isn't a heron feather. It's from an ibis. MONTAGUE: I beg your pardon? PHILIPPA: Someone swapped the specimen. The ibis is worth forty times the heron.
[beat 4] XIMENA: I catalogued it last month. It was an ibis, in case nine. DASHIELL: Case nine is empty.
[beat 5] LUDO: It was never empty.
[beat 6] Everyone turns to look at him. He lets the thread fall.

### SCENE s00859 | INT. DEEP-SEA HABITAT "ABYSSAL FIVE," COMMAND CABIN - NIGHT
Characters: CAPTAIN OKONJO ADEYEMI, BIRGIT SOLBERG, RAVI NAIR, SURFACE
[beat 0] A cramped steel cylinder lined with gauges. A single porthole shows blackness lit by the drifting glow of jellyfish. A radio crackles on a bracket over the main console. CAPTAIN OKONJO ADEYEMI, fifties, sits at the console with his hand hovering over a red switch. BIRGIT SOLBERG, thirties, the geologist, floats against a bulkhead, her face lit green by a monitor. RAVI NAIR, twenties, the comms tech, kneels by an open panel with a soldering iron.
[beat 1] OKONJO: How long until the pressure seal gives? BIRGIT: Nine minutes. Maybe ten. RAVI: I can reroute the main to the secondary. OKONJO: Then do it.
[beat 2] He sparks the iron and hunches. She watches the gauge. The radio hisses.
[beat 3] SURFACE: Abyssal Five, this is Surface Control. Do you read? Okonjo grabs the mic. OKONJO: Surface, Okonjo. We read you. SURFACE: Captain, we are seeing a pressure anomaly on your hull. Advise. OKONJO: We know. We're working it.
[beat 4] SURFACE: Recommend immediate ascent. BIRGIT: Ascent? That's three hours of decompression. OKONJO: Surface, negative on ascent. We're working it.
[beat 5] The hull groans. A rivet pops and rolls across the deck, ringing. Ravi's iron hovers over the circuit board. RAVI: Almost. Almost.
[beat 6] He touches the iron down. A bright blue arc snaps. The lights flicker, hold, and steady. The groaning stops. The gauge needle sinks slowly out of the red.
[beat 7] BIRGIT: It's holding. SURFACE: Abyssal Five, do you copy? We show pressure normalizing.
[beat 8] Okonjo lets out a breath so long it fogs the glass of a dial. Ravi sits back on his heels and laughs, high and cracked. Birgit presses a palm to the bulkhead and shuts her eyes.
[beat 9] OKONJO: Surface, Abyssal Five. We copy. Stand by. He releases the key. The radio hisses. Silence fills the cabin, filled only by the soft tick of cooling metal.

### SCENE s00860 | INT. COMMUNITY POTTERY STUDIO, KILN SHED - DUSK
Characters: GIDEON ROSS, MARTA ROSS
[beat 0] A low brick room with a roaring gas kiln at one end. The air shimmers. Shelves of unfired mugs line the walls. Bags of clay are stacked like sandbags. GIDEON ROSS, fifties, in a stained apron, kneels by the kiln peeking through a spy hole. MARTA ROSS, fifties, his ex-wife, stands by the door holding a cardboard box.
[beat 1] MARTA: I brought your things. GIDEON: Leave them by the door. MARTA: I'd rather hand them to you. GIDEON: I'm firing. MARTA: I can see that.
[beat 2] He doesn't turn. She sets the box on a stool and takes out a framed photograph, a coat, a paperback with a cracked spine. She places each item on the table, one by one, with the care of someone laying out a corpse.
[beat 3] GIDEON: What's the coat for? MARTA: It's your coat. GIDEON: It's July. MARTA: It'll be winter eventually.
[beat 4] He closes the spy hole, stands, wipes his hands on his apron. Neither looks at the other. The kiln roars on.
[beat 5] A mug cracks inside with a faint, sharp tick. GIDEON: That's one gone. MARTA: Only one? GIDEON: So far.
[beat 6] She laughs without humor, then stops. He walks to the table and picks up the photograph. In it, two young people squint into the sun on a beach.
[beat 7] MARTA: I couldn't throw it out. GIDEON: ^I couldn't keep it.
[beat 8] They say it at once. Both freeze. The kiln's glow washes the room orange.
[beat 9] Marta takes a step back, sits on the stool, and puts her hands over her face. GIDEON: Marta. MARTA: Don't. Please. Just let me have a minute.
[beat 10] He puts the photograph down gently, face up, between the coat and the book. He goes back to the kiln and kneels. He waits. The fire waits with him.
[beat 11] MARTA: How long till it's done? GIDEON: Eleven hours. MARTA: That's a long time. GIDEON: It is.
[beat 12] She lowers her hands. She stands, takes the stool he's been using as a seat, and moves it beside him. MARTA: I can stay till the first one cracks.

### SCENE s00861 | INT. LAKESIDE CABIN, LIVING ROOM - EVENING
Characters: EVANDER, CLARISSA, BEATRIX, HAMID
[beat 0] A woodstove glows. Mismatched armchairs, a bookshelf of paperbacks, a window that frames the dark lake. A board game sits half-played on the coffee table. EVANDER, sixties, the host, in a fisherman's sweater, pours wine from a dusty bottle. CLARISSA, forties, his daughter, sits beside her sister BEATRIX, forties, who holds a game piece between two fingers. HAMID, thirties, Clarissa's quiet husband, reads the rules aloud.
[beat 1] EVANDER: Everyone's glass full? CLARISSA: Yes, Papa. BEATRIX: Mine's not. EVANDER: Because you don't drink. BEATRIX: I can still hold it.
[beat 2] He tops hers off. She sets it on the table and doesn't touch it. Clarissa watches her, then looks away.
[beat 3] Hamid rolls the dice, slow, careful. HAMID: Six.
[beat 4] CLARISSA: Seven! You moved seven. HAMID: I moved six. BEATRIX: He moved six, Clarissa. CLARISSA: She always sides with him. EVANDER: Girls, please.
[beat 5] BEATRIX: Papa, I need to tell you something. CLARISSA: Not now, Bea. EVANDER: What is it? BEATRIX: I CLARISSA: She's not feeling well. BEATRIX: I'm perfectly well, Clarissa, I'm trying to
[beat 6] HAMID: Maybe we let her speak.
[beat 7] Everyone stops. The woodstove ticks. Evander puts down the bottle and the cork rolls off the table. EVANDER: Beatrix.
[beat 8] She pushes her glass an inch away. She meets her father's eyes for the first time that night.
[beat 9] BEATRIX: I sold the cabin.
[beat 10] Clarissa lets out a sound that is half laugh, half breath. Evander does not move at all.

### SCENE s00862 | INT. DEFUNCT ICE RINK, "SYNERGY KICKOFF" - DAY
Characters: COLM, ANNELIESE, DORCAS, VIKRAM, PENROSE, YUSRA
[beat 0] A chilly arena with dead floodlights and a Zamboni parked in the corner like a retired elephant. Folding chairs in a semicircle. A banner: "WE ARE ONE TEAM." A podium with a microphone that squeals. Six people sit with lukewarm coffee and laminated agendas. On the ice-less floor, where the center circle once glowed, a flip chart waits on a tripod.
[beat 1] COLM: Okay, welcome everybody. Can everyone hear me? ANNELIESE: Yes. COLM: Great. Anneliese, you can hear me? ANNELIESE: I said yes. DORCAS: We could hear you in the car park.
[beat 2] COLM: Wonderful. So today's theme is... VIKRAM: Alignment. COLM: Alignment, exactly, Vikram, thank you for that. VIKRAM: It's on the banner. Well, "one team" is. Alignment is on the agenda.
[beat 3] PENROSE: I thought today's theme was resilience. COLM: It's both. PENROSE: They're different words. COLM: They're complementary words.
[beat 4] YUSRA: Can I ask something? COLM: Of course, Yusra, we love questions. YUSRA: Why are we here? In the rink? COLM: It's a neutral space. DORCAS: It's a cold space. COLM: It builds character. ANNELIESE: My feet have no character left.
[beat 5] PENROSE: I read the invitation twice. It said "off-site." COLM: It is off-site. VIKRAM: From what? COLM: From our usual site. YUSRA: Which is across the street. COLM: Which is a bit literal, Yusra. YUSRA: I'm literal on Mondays. DORCAS: It's Friday. YUSRA: I'm literal in general.
[beat 6] COLM: Okay, let's move to the first exercise. ANNELIESE: Is there a second exercise? COLM: There are four.
[beat 7] PENROSE: I have a flight. COLM: Penrose, your flight is at eight. PENROSE: This morning. COLM: No, tonight. PENROSE: It says eight a.m. on the ticket. COLM: I'm sure you misread it. PENROSE: I'm sure I didn't.
[beat 8] VIKRAM: Could we maybe start with a break? DORCAS: We've only just started. VIKRAM: That's why we need a break. COLM: Let's table that. ANNELIESE: Where? There's no table.
[beat 9] YUSRA: Colm, I think the Zamboni is leaking. COLM: It's a feature. PENROSE: It's a hazard. COLM: Everything's a hazard if you look at it right. DORCAS: Then maybe don't make us look. COLM: Dorcas. DORCAS: I'm only saying.
[beat 10] ANNELIESE: Colm, can we have a vote? COLM: On what? ANNELIESE: On whether to leave. COLM: That's not on the agenda. VIKRAM: Neither is the cold.
[beat 11] YUSRA: I vote leave. PENROSE: Leave. DORCAS: Leave. VIKRAM: Leave. ANNELIESE: Leave, obviously.
[beat 12] COLM: Okay. Okay. Show of hands for staying? COLM: Just me, then. DORCAS: We'll tell them you were wonderful.

### SCENE s00863 | INT. ABANDONED OBSERVATORY, MAIN DOME - NIGHT
Characters: CASPIAN ROTH, ODETTE LACROIX
[beat 0] A great copper dome, its slit open to the stars, hangs overhead like the underside of a bell. A brass telescope as long as a bus rests on a cracked iron mount. Dead leaves cover the floor. A single lantern burns on a crate. CASPIAN ROTH, fifties, in a long gray coat, sits on an overturned bucket with a laptop open on his knees. He types, stops, types again. His face glows pale blue. Beside him, a satellite phone lies on the crate, its screen dark.
[beat 1] He lifts his head. The dome creaks in a wind that shouldn't be there. CASPIAN: Come on. Come on. He types.
[beat 2] The telescope's great eye twitches an inch to the left, and a gear somewhere shrieks. He freezes. The dome is still. CASPIAN: That's not me.
[beat 3] He closes the laptop slowly and reaches for the phone. As he does, a shape detaches itself from the shadow beneath the telescope and walks forward into the light: ODETTE LACROIX, forties, in a black raincoat, bare hands, no bag. She is soaked to the skin. A thin line of water drips from her hem onto the dead leaves with every step.
[beat 4] ODETTE: Don't touch the phone. CASPIAN: How long have you been here? ODETTE: Since before you. CASPIAN: That's impossible. I locked the door. ODETTE: Which door?
[beat 5] He looks at the entrance, a heavy oak slab bolted from inside. Then at the slit overhead. Then at her wet coat.
[beat 6] CASPIAN: Who sent you? ODETTE: Nobody sends me. I'm the one who stays.
[beat 7] She crosses to the crate and looks down at the dead phone, then at the laptop, then at him. Her eyes are tired, not unkind.
[beat 8] ODETTE: You came here to upload something. CASPIAN: Data. Just data. ODETTE: Data about the star? CASPIAN: How do you ODETTE: I'm the last person who could read it.
[beat 9] A long silence. A gust of cold air sweeps through the dome. The lantern gutters, steadies.
[beat 10] CASPIAN: Is anyone else here? ODETTE: Only the telescope. CASPIAN: It moved. ODETTE: It does that when someone looks.
[beat 11] He sets the laptop on the crate and stands. She doesn't step back. Their shadows overlap on the leaf-strewn floor.
[beat 12] CASPIAN: Miss, I don't know what ODETTE: Caspian. Sit down. You'll want to hear this sitting.
[beat 13] He stays standing. Then, slowly, as if all his joints have turned to paper, he lowers himself back onto the bucket.
[beat 14] She picks up the lantern and holds it between them, so that each of them is lit and neither is. ODETTE: Tell me what you saw.

### SCENE s00864 | INT. HESTER'S KITCHEN, FARMHOUSE - EARLY EVENING
Characters: HESTER VANDERBILT, BAXTER, IMOGEN, KENJI, ROSALBA, TAVISH
[beat 0] A low-beamed room, copper pots on hooks, a scrubbed pine table crowded with mismatched plates. Steam fogs the window. A cat sleeps on the radiator. HESTER VANDERBILT, eighties, hunched in a flowered apron, stirs a pot with a wooden spoon. At the table sit her grandchildren: BAXTER, forty, in a rumpled suit; IMOGEN, thirty-five, with a toddler's drawing pinned to her cardigan; KENJI, thirty, fresh off a plane, backpack still on. Her great-grandchildren ROSALBA, eight, and TAVISH, five, kneel on their chairs, arranging peas into a pattern.
[beat 1] HESTER: Everyone sit properly. ROSALBA: We are, Granny Hess. TAVISH: I'm sitting with my knees. IMOGEN: Tavish, honey, on your bottom.
[beat 2] He turns around, grinning, and sits on his bottom. Rosalba rolls her eyes and slides a pea toward him.
[beat 3] Baxter looks at his phone. Kenji glances at Baxter, then at the phone, then at his plate. Hester sets down the pot with a thump.
[beat 4] HESTER: Baxter. The phone. BAXTER: Granny, it's work. HESTER: It's Sunday. BAXTER: It's always work.
[beat 5] KENJI: Bax, give it to me. He holds out his hand. Baxter hesitates, then drops the phone in it. Kenji slips it into his backpack and zips it closed. Nobody says anything.
[beat 6] Imogen reaches for the potatoes. IMOGEN: I'll serve. HESTER: Imogen, sit. I'll serve. IMOGEN: Granny HESTER: Sit.
[beat 7] She sits. Hester ladles stew into bowls, one by one, her hands shaking slightly. Tavish watches, wide-eyed.
[beat 8] Rosalba stands and takes the ladle gently from her great-grandmother's hands and finishes the serving herself, with the solemn care of a priest. ROSALBA: Granny Hess, you sit too.
[beat 9] Hester lowers herself into the chair at the head of the table. The family looks at her, then at one another, and no one reaches for a spoon.
[beat 10] TAVISH: Are we saying thank you? HESTER: We are.
[beat 11] She folds her hands. Around the table, the others do the same, even Kenji, even Baxter, and the cat on the radiator opens one eye.

### SCENE s00865 | INT. SUBURBAN KITCHEN - MORNING
Characters: MINA, GUS, ROWAN
[beat 0] Cereal boxes, a half-eaten banana, a school permission slip stuck under a magnet. The radio plays traffic. MINA, forties, tosses a lunch bag onto the counter. GUS, her father, seventies, stands at the sink drying a mug. ROWAN, eleven, her son, sits on a stool with a backpack on his lap, hands tight on the straps.
[beat 1] She checks her watch. He sets down the mug. The boy stares at the table.
[beat 2] MINA: Rowan, shoes. ROWAN: They're on. MINA: Other shoes.
[beat 3] He does not move. She walks around the counter and crouches in front of him. She puts a hand on his knee. He pulls it away.
[beat 4] GUS: Mina. Let him. MINA: Dad, we're late. GUS: He's not ready.
[beat 5] She looks up at her father, then at her son, then at the clock. She opens her mouth, closes it, and takes a breath.
[beat 6] MINA: Rowan, is it the test? He shakes his head. She waits. The radio moves on to the weather.
[beat 7] Gus takes the backpack from the boy's lap, sets it on the floor, and sits beside him. GUS: I'll walk you in.
[beat 8] Rowan nods once. Mina stands, picks up the lunch bag, and holds it out. He takes it.
[beat 9] MINA: I'll pick you up. ROWAN: Okay.
[beat 10] She leans in to kiss his hair, and for the first time he lets her.

### SCENE s00866 | INT. PRESTON & VALE ENTERPRISES, OPEN OFFICE - DAY
Characters: TEAM PLAYER, LYLE FENWICK, NGOZI ADEYEMI, PRESTON VALE
[beat 0] Two hundred identical desks stretch toward a wall of frosted glass. Fluorescent lights hum a note somewhere between boredom and dread. Beige carpet. A potted fern with a sign: "THIS PLANT IS A TEAM PLAYER." In the corner, a lone water cooler. LYLE FENWICK, fifties, pot-bellied, in short sleeves and a clip-on tie, stands at the head of a cluster of desks with a binder. NGOZI ADEYEMI, thirties, sharp and unsmiling, sits at her workstation, arms crossed. PRESTON VALE, sixties, the CEO, tanned and silver-haired, enters from the glass wall and stands behind Lyle, hands in pockets.
[beat 1] LYLE: So, Ngozi, as I was saying, we're just looking at some streamlining. NGOZI: You said that last quarter. LYLE: And it's still true.
[beat 2] NGOZI: Last quarter you streamlined Marcia. LYLE: Marcia chose to leave. NGOZI: Marcia was escorted out by security with a box of her plants. LYLE: There was a transition.
[beat 3] PRESTON: Lyle, let me. LYLE: Of course, sir. PRESTON: Ngozi. May I call you Ngozi? NGOZI: It's what's on my badge.
[beat 4] PRESTON: Good. Good. I'd like to speak candidly. We're a family here. NGOZI: Families don't have headcounts. PRESTON: Some do. NGOZI: Not the good ones. LYLE: Ngozi. PRESTON: It's fine, Lyle. I appreciate directness.
[beat 5] NGOZI: Then I'll be direct. Is my job gone? PRESTON: Your role is being reimagined. NGOZI: By whom? PRESTON: By leadership. NGOZI: Which of you? PRESTON: Both of us. LYLE: Well PRESTON: Both of us, Lyle.
[beat 6] NGOZI: So I'll be reimagined into the parking lot. PRESTON: That's not how I'd put it. NGOZI: How would you put it? PRESTON: As an opportunity. NGOZI: For whom? PRESTON: For growth. NGOZI: Mine, or yours?
[beat 7] Preston does not answer. Lyle clears his throat. The fern's sign flutters in the air conditioning.
[beat 8] NGOZI: Say it plainly. PRESTON: Effective Friday. NGOZI: Thank you.
[beat 9] LYLE: Ngozi, there's a severance package NGOZI: How generous. LYLE: Two weeks. NGOZI: For eleven years. PRESTON: It's competitive. NGOZI: With what? A coupon?
[beat 10] LYLE: Please keep your voice NGOZI: Down? Why? LYLE: People are watching. NGOZI: Good.
[beat 11] She stands. The desks around them have gone silent. Dozens of heads have turned.
[beat 12] She looks at her colleagues, then at Preston, then at Lyle, and picks up the fern.

### SCENE s00867 | INT. COLD STORAGE WAREHOUSE, LOADING DOCK - NIGHT
Characters: VALENTIN MOROZOV, CORINNE ABBOTT, MATEUS SOARES, HANA PARK
[beat 0] Frost on steel. Fog from the freezer doors. A forklift idles with its lights on. Pallets of boxed fish stacked to the ceiling. VALENTIN MOROZOV, 40s, in a parka, checks a manifest. CORINNE ABBOTT, 30s, in a black ski jacket, stands beside a pallet, tapping a tablet. MATEUS SOARES, 30s, a forklift driver in a reflective vest, leans on a pole. HANA PARK, 20s, a nervous clerk, clutches a clipboard.
[beat 1] He glances at his watch. She glances at him.
[beat 2] He whispers to the clerk. She goes pale. CORINNE: Something wrong? VALENTIN: Paperwork.
[beat 3] A truck horn sounds outside. He signals to the driver. The driver nods.
[beat 4] Mateus climbs onto the forklift. Hana steps back. HANA: Mr. Soares, that pallet isn't on the list. MATEUS: It's on mine.
[beat 5] He lifts the pallet. A box slips.
[beat 6] It splits on the concrete, and ice-wrapped bricks of white powder spill out.
[beat 7] Silence. Valentin's hand goes to his jacket.
[beat 8] Corinne looks at the powder. She looks at him. She steps in front of Hana. CORINNE: Hana. Behind me.
[beat 9] Valentin draws. She raises her tablet like a shield. He fires. The tablet shatters.
[beat 10] She dives, rolls, and kicks the forklift's emergency stop. Mateus tumbles from the seat. Hana screams. The lights flicker.
[beat 11] He scrambles toward a pallet. Valentin pursues him through the stacked boxes.
[beat 12] She grabs Hana's wrist and drags her toward the dock door. A shot rings. Plaster dust rains.
[beat 13] At the door, she rips it open. Cold night air rushes in. Red and blue lights flash across the lot. Sirens rise.
[beat 14] Valentin stops in the middle of the aisle. He lowers his gun slowly, looking at the lights.

### SCENE s00868 | EXT. CARNIVAL OF DUST, ABANDONED PRAIRIE FAIRGROUND - DUSK
Characters: EZEKIEL TOLLIVER, SORREL, JUBAL CREED, PEARL
[beat 0] A rusted Ferris wheel stands against a bruised orange sky, its gondolas swaying and groaning. Wind rolls tumbleweeds between the empty tents. A torn banner snaps: "GRAND JUBILEE." EZEKIEL TOLLIVER, fifties, in a long black coat and a battered hat, sits on a barrel by the shooting gallery, a revolver across his knee. SORREL McCREA, thirties, in a split riding skirt and a man's vest, stands twenty paces away with her thumbs hooked in her belt. JUBAL CREED, young, nervous, crouches behind a barrel with a rifle.
[beat 1] EZEKIEL: You've come a long way, Sorrel. SORREL: Not as long as you. EZEKIEL: It never is.
[beat 2] The wheel groans. A gondola swings loose and clangs against its frame. Jubal flinches and the rifle barrel rises an inch.
[beat 3] SORREL: Tell your boy to put it down. EZEKIEL: Jubal. Put it down. JUBAL: Mr. Tolliver, I EZEKIEL: Down.
[beat 4] Jubal lowers the rifle. Dust blows between them. In the silence, a distant bell chimes from the abandoned chapel, three notes.
[beat 5] PEARL, a girl of twelve in a patched dress, steps out from behind the tilt-a-whirl with a bucket of water in each hand. She sees the three of them, stops, and sets down the buckets without a sound.
[beat 6] Ezekiel's eyes go to her. Sorrel's hand opens at her side. SORREL: Pearl. Go back.
[beat 7] Pearl does not move.

### SCENE s00869 | EXT. ENCHANTED ORCHARD, STONE WELL - DAWN
Characters: ALARIC THORNE, PERCIVAL ASHDOWN
[beat 0] Apple trees hang heavy with silver fruit. Mist curls over the grass. A moss-green well stands at the center, its rim carved with runes that faintly glow. ALARIC THORNE, thirties, a wandering knight in a travel-stained cloak, kneels at the well's edge, lowering a leather bucket on a rope. His horse grazes nearby.
[beat 1] The bucket rises. He tips it and drinks from his hands. The water glitters.
[beat 2] A branch snaps behind him. He spins, hand on his hilt.
[beat 3] PERCIVAL ASHDOWN, thirties, in a scholar's gray robe, steps out of the trees with a satchel over one shoulder and a book in his hand. He raises his empty palm. PERCIVAL: Peace, friend. I mean no harm. ALARIC: Most who say that do. PERCIVAL: Then I shall say it quietly.
[beat 4] Alaric lowers his hand. Percival smiles, steps to the well, and peers over the rim.
[beat 5] PERCIVAL: You've drunk from it. ALARIC: I was thirsty. PERCIVAL: Of course. Everyone is. He closes his book and tucks it into the satchel.
[beat 6] ALARIC: What does it do? PERCIVAL: It shows you what you've lost. ALARIC: I've lost nothing. PERCIVAL: Then you won't mind looking.
[beat 7] He nods at the well. Alaric hesitates, then bends over the rim. The water stills. Something pale rises in it. He watches it for a long moment, and his shoulders go slack.
[beat 8] He turns away from the well and wipes his face with his sleeve. He does not look at the scholar, who has the decency to look at the trees.
[beat 9] ALARIC: How far is the nearest village? PERCIVAL: Half a day. I will walk with you, if you like. ALARIC: I prefer to walk alone. PERCIVAL: Then I shall walk very far behind.
[beat 10] Alaric almost smiles. He gathers his horse's reins and starts across the orchard. Percival waits until the knight is a dozen paces ahead, then follows, whistling softly.

### SCENE s00870 | INT. PARKING GARAGE LEVEL P4 - "SYNERGY SOCIAL" TENT - DAY
Characters: DESMOND PRUITT, ANOUK VAN DER BERG, TAKESHI ONO, LOLA FERREIRA
[beat 0] A pop-up gazebo between two oil stains. Banner: MANDATORY FUN. Folding table. Sheet cake, sweating. DESMOND PRUITT, 50s, lanyard heavy as a medal. Clipboard. Smiles at nobody. ANOUK VAN DER BERG, 30s, auditor. Stabs cake with a plastic knife. Doesn't look up. TAKESHI ONO, 20s, intern. Hoodie. Holding a balloon he was told to hold. LOLA FERREIRA, 40s, HR. Headset. Always mid-sentence.
[beat 1] DESMOND: Welcome, team. Who's having fun?
[beat 2] Silence. A car alarm chirps two floors up. DESMOND: Let's circle back on that.
[beat 3] ANOUK: Is this billable? LOLA: No, I'm listening, I'm just also here.
[beat 4] Takeshi's balloon drifts toward a sprinkler. He catches it. Desmond and Takeshi both freeze.
[beat 5] DESMOND: That's a safety balloon. TAKESHI: It's a regular balloon. DESMOND: Compliance says safety.
[beat 6] Anouk slides a slice of cake onto a paper plate. Lola and Desmond reach for it at once. They fight over the plate. Frosting on a lanyard.
[beat 7] LOLA: Wellness incident. I'm logging it. ANOUK: You're the logger. LOLA: I'm logging that I logged.
[beat 8] A forklift beeps in reverse. Everyone looks. It goes nowhere.
[beat 9] TAKESHI: Do we get to leave? DESMOND: Leave is a strong word.
[beat 10] ANOUK: Ten minutes of fun, then my report. DESMOND: What's in the report? ANOUK: Cake. Mostly cake.
[beat 11] The group scatters toward their cars, then stops. Nobody has the right keys. They drift back to the table.
[beat 12] LOLA: Same time next quarter.
[beat 13] Desmond raises the clipboard like a toast. Nobody joins him.

### SCENE s00871 | INT. NIGHT FERRY - CAR DECK - NIGHT
Characters: INES VARELA, SEUN ADEYEMI, HARLAN COOPER-REID, PRIYA NAIR, DMITRI SOKOLOV, GRANDMA ZOFIA
[beat 0] Engines thrum. Six figures around a rusted minivan. INES VARELA, 40s, SEUN ADEYEMI, 30s, HARLAN COOPER-REID, 60s, PRIYA NAIR, 20s, DMITRI SOKOLOV, 50s, and GRANDMA ZOFIA, 80s, in a folding chair.
[beat 1] She clutches an urn. He pretends not to see. They all stare at the lid.
[beat 2] INES: We scatter it at the island, like she said. HARLAN: She said the harbor. SEUN: She said both. She said a lot of things.
[beat 3] Zofia laughs at nothing. Priya takes the urn from Ines, gently, and Ines lets go too fast. PRIYA: Okay. Okay.
[beat 4] DMITRI: Someone opened this. Silence. He holds up the lid, tape peeled. Harlan studies the floor. Ines reaches for the urn again.
[beat 5] INES: Who opened it?
[beat 6] HARLAN: She asked me to look. SEUN: You looked? You LOOKED? DMITRI: Seun, quiet.
[beat 7] INES: There's nothing in it, is there.
[beat 8] Priya tips the urn. Ash, grey, real. Everyone exhales. Zofia stops laughing.
[beat 9] ZOFIA: That is not Marta.
[beat 10] They turn as one.

### SCENE s00872 | EXT. FLOODED RICE PADDY - PUMP HOUSE ROOF - DUSK
Characters: KOSTAS VLAHOS, ELIAS TREMBLAY, HANA YOSHIDA
[beat 0] Sky bruised orange. Frogs. Somewhere, far off, the thump of mortars. Not close. Not yet. SGT. KOSTAS VLAHOS, 40s, lies prone behind a sandbag. Rifle across his forearms. He hasn't blinked in a minute. PVT. ELIAS TREMBLAY, 19, crouches beside him. Boots soaked. He chews a strip of dry rice cake. CPL. HANA YOSHIDA, 30s, the radio operator, sits cross-legged under a tarp. Headset on one ear.
[beat 1] TREMBLAY: How long do we sit here? VLAHOS: Till he says.
[beat 2] Tremblay glances at the radio. She shakes her head. He sinks back.
[beat 3] YOSHIDA: Static. Nothing but static.
[beat 4] Frogs go quiet. All three freeze. He lifts a hand. She stops breathing. The boy stops chewing.
[beat 5] A beat. The frogs start again.
[beat 6] TREMBLAY: Was that us? VLAHOS: Wind. He doesn't believe it. Neither do they.
[beat 7] She slides the headset off, lays it on her knee. YOSHIDA: They moved the line. VLAHOS: How far? YOSHIDA: Behind us.
[beat 8] Silence. The mortars are louder now.
[beat 9] Tremblay reaches for his rifle, fumbles it. It clatters on tin. They duck. All three. Eyes up.
[beat 10] Across the paddy, a flashlight blinks once. Twice.
[beat 11] VLAHOS: Get down. TREMBLAY: Sarge-- VLAHOS: DOWN.
[beat 12] The water around the pump house shivers. Then the roof lifts.
[beat 13] A white flash swallows everything.

### SCENE s00873 | INT. TAXIDERMY SHOP - BACK ROOM - NIGHT
Characters: MAG SOLBERG, ISAIAH TWOBEARS, NADIA KHALIL, GUS
[beat 0] Glass eyes in a coffee tin. A badger mid-snarl. A half-stuffed owl on the workbench, wings pinned. MAG SOLBERG, 60s, rubber gloves, stitches the owl without looking at her visitors. A landline phone sits next to her, cord stretched. ISAIAH TWOBEARS, 30s, leather jacket, stands too near the door. His hands are in his pockets. He hasn't taken off his gloves either. DET. NADIA KHALIL, 40s, drifts along a shelf of foxes. Touches nothing.
[beat 1] KHALIL: Nice work. MAG: Thanks. KHALIL: You do the owl for the bar on Delancey? MAG: Does it look like I do bars?
[beat 2] Khalil lifts a fox. Puts it back facing the wall.
[beat 3] ISAIAH: We should go. KHALIL: We just got here.
[beat 4] The phone RINGS. Mag lets it. Three rings. Four. Isaiah shifts his weight. KHALIL: Get that.
[beat 5] Mag peels off one glove. Answers. MAG: Solberg's.
[beat 6] GUS: Mags. They find the thing yet?
[beat 7] Mag looks at Khalil. Khalil smiles. Mag looks at the owl.
[beat 8] MAG: Wrong number. GUS: Mags--
[beat 9] She hangs up. Picks up the needle again. The thread trembles, once.
[beat 10] KHALIL: Who was that? MAG: Somebody's husband.
[beat 11] Isaiah steps out through the back door. Cold air rushes in. Khalil watches him go and does nothing.
[beat 12] KHALIL: Finish the owl, Mag. Mag pulls the thread tight.

### SCENE s00874 | INT. PLANETARIUM - DOME HALL - NIGHT
Characters: WINIFRED PARRISH, STRANGER, ABERNATHY, JULIAN
[beat 0] The star projector hums, throwing a slow ocean of light across a curved ceiling. The seats recline. Most are empty. WINIFRED PARRISH, 30s, a sensible coat and a sensible umbrella, sits alone in row F. She watches Orion rise.
[beat 1] A STRANGER, 30s, in a rumpled raincoat, slides into the seat beside her. He carries a paper cup of coffee and an apologetic smile. STRANGER: Is this seat taken? WINIFRED: There are two hundred seats. STRANGER: I like this one.
[beat 2] She considers him, then looks back at the stars. He sips his coffee. Neither speaks for a while.
[beat 3] WINIFRED: Betelgeuse is late tonight. STRANGER: It's always late. It's a very old star.
[beat 4] MR. ABERNATHY, 70s, the caretaker in a navy cardigan, shuffles down the aisle with a flashlight. He pauses at row F. MR. ABERNATHY: Last show's over, folks. Ten minutes. WINIFRED: Thank you, Mr. Abernathy.
[beat 5] MR. ABERNATHY: Who's your friend? WINIFRED: Yes. Who are you? STRANGER: Julian. Julian Hale.
[beat 6] Mr. Abernathy nods, satisfied, and shuffles on.
[beat 7] JULIAN: You come here often? WINIFRED: Every Thursday. JULIAN: Then I'll see you Thursday.
[beat 8] She smiles at the ceiling, not at him. Overhead, a comet drifts across the dome.
[beat 9] MR. ABERNATHY: Lights in five! JULIAN: Stay for the comet.
[beat 10] She does.

### SCENE s00875 | INT. CATHEDRAL CRYPT - FIELD KITCHEN - NIGHT
Characters: SERGEANT AUGUSTIN BELLAMY, LIEUTENANT PERPETUA NWOSU
[beat 0] Low vaulted stone, whitewashed long ago and soot-dark now. Rows of carved tombs line the walls, each with a name worn smooth. Iron cauldrons hang over a cooking fire dug into the old flagstones. Smoke finds its way up through a narrow stair. A single lantern hangs from a hook meant for something holier. SERGEANT AUGUSTIN BELLAMY, 50s, the company cook, stands at the largest cauldron with a wooden paddle. Broad, slow, a face like folded bread dough. A flour-stained apron over his uniform. He hums something that might be a hymn.
[beat 1] LIEUTENANT PERPETUA NWOSU, 20s, enters down the stair with a map case under her arm. Tall, tired, helmet in her hand. Her boots leave wet prints on the stone.
[beat 2] NWOSU: Evening, Sergeant. BELLAMY: Lieutenant. You're early for stew. NWOSU: I'm early for everything. It's a character flaw. BELLAMY: Sit. Rest your feet. The dead won't mind.
[beat 3] She sets the map case on a tomb lid. Hesitates. Sits on the next one down.
[beat 4] NWOSU: Whose is this? BELLAMY: Bishop somebody. Fourteenth century. I asked him if I could use his lid for chopping. He said nothing. NWOSU: Polite of him. BELLAMY: They always are.
[beat 5] He tastes the stew from the paddle. Frowns. Reaches for a tin of salt.
[beat 6] NWOSU: What's in it tonight? BELLAMY: Barley. Onion. Something that was a rabbit when I met it. NWOSU: Where'd you meet it? BELLAMY: Behind the bell tower. Poor thing ran into my boot.
[beat 7] She laughs, once, surprised at herself. He smiles into the pot.
[beat 8] NWOSU: It's quiet down here. BELLAMY: It's a crypt, Lieutenant. NWOSU: I mean the guns. BELLAMY: Ah.
[beat 9] He listens. Far above, through yards of stone, the faint thud of artillery. Distant. Regular as a clock.
[beat 10] BELLAMY: That's the new quiet. You get used to it. NWOSU: Do you? BELLAMY: No. But you get good at pretending.
[beat 11] He ladles stew into a tin bowl and hands it to her. She wraps both hands around it. NWOSU: Thank you. BELLAMY: Eat before it gets cold. Or before it gets interesting.
[beat 12] She tries it. Chews. Considers. NWOSU: It tastes like rabbit. BELLAMY: Told you. NWOSU: It's good, Sergeant. BELLAMY: It's hot. That's the whole recipe.
[beat 13] She eats. He stirs. The fire pops. A drip of water falls from the vault into a puddle, patient and slow.
[beat 14] NWOSU: Do you write home? BELLAMY: My wife. Every Sunday. NWOSU: What do you tell her? BELLAMY: That the food is terrible and the company is worse. NWOSU: Is that true? BELLAMY: The food, yes.
[beat 15] A small smile from her. She sets down the bowl and draws a letter from her breast pocket. Folds and unfolds it.
[beat 16] NWOSU: I have one I can't finish. BELLAMY: To whom? NWOSU: My brother. BELLAMY: What won't it say? NWOSU: That I'm scared. BELLAMY: Of what? NWOSU: Of being good at this.
[beat 17] He sets down the paddle. Wipes his hands on the apron. Takes a long, careful look at her in the lantern light.
[beat 18] BELLAMY: Then write that. NWOSU: He'd worry. BELLAMY: He's your brother. He's already worried.
[beat 19] She smooths the letter against her knee. Takes a pencil stub from her pocket. Writes a line. Stops. Writes another. BELLAMY: Good. Now more.
[beat 20] She keeps writing. He returns to the pot. The fire murmurs. Above them, the guns go on, and below them, in their stone beds, the old bishops keep their counsel.
[beat 21] NWOSU: Sergeant. BELLAMY: Lieutenant. NWOSU: Thank you for the rabbit. BELLAMY: Thank the boot.
[beat 22] She laughs again, quietly, pencil still moving.

### SCENE s00876 | EXT. ABANDONED SALT WORKS - EVAPORATION FLATS - LATE AFTERNOON
Characters: TOBIAS WREN, ESPERANZA QUINTERO, LUKA
[beat 0] A white country, flat to the edge of the sky. Shallow ponds, each a different shade of rose and bone, are cut by crumbling wooden sluice gates. The wind carries a taste of brine. At the far end, a long shed with a sagging tin roof, its door hanging off one hinge. TOBIAS WREN, 60s, kneels at a pond's edge, scooping salt crystals into a sack. Weathered as a fence post, his hat brim stiff with old sweat, his beard a pale yellow like old piano keys. His hands are cracked from decades of brine. He works without hurry.
[beat 1] A figure approaches along the causeway. ESPERANZA QUINTERO, 30s, rides a grey mule, a rifle slung across her back and a canvas satchel on her hip. Dust-coloured coat. Black braid. She stops the mule a polite distance away.
[beat 2] ESPERANZA: You Wren? TOBIAS: Depends who's asking. ESPERANZA: Esperanza Quintero. I bought the claim at the other end of the flats. TOBIAS: That's a lot of nothing to buy. ESPERANZA: It's cheap nothing.
[beat 3] He almost smiles. Drops another handful of salt into the sack.
[beat 4] TOBIAS: Water's bad on your side. ESPERANZA: I figured. TOBIAS: Good on mine. If you ask nicely.
[beat 5] She slides down from the mule. Boots crunch on the crust. She looks across the flats, then at him. ESPERANZA: I'm asking.
[beat 6] A boy emerges from the shed, barefoot, nine or ten, LUKA, thin as a rope and just as strong. He carries a bucket almost as big as his torso.
[beat 7] LUKA: Grandpa, the pump's stuck again. TOBIAS: Then unstick it. LUKA: I tried. TOBIAS: Try harder.
[beat 8] Luka notices Esperanza. Stares at the rifle. Stares at the mule.
[beat 9] LUKA: Is that a real gun? ESPERANZA: It's a real mule. LUKA: Can I touch him? ESPERANZA: Her. Be gentle.
[beat 10] He sets down the bucket and approaches the mule with both palms out, whispering. The mule allows it. Tobias watches the boy, then the woman, then the horizon.
[beat 11] TOBIAS: Sit. There's coffee. It's terrible. ESPERANZA: I've had worse. TOBIAS: Not out here.
[beat 12] She smiles, ties the mule to a post, and follows him toward the shed. Behind them the salt shines like a field of broken glass under the long low sun.

### SCENE s00877 | INT. STADIUM CONCOURSE - IMPROVISED TRIAGE - NIGHT
Characters: SAOIRSE KELLEHER, BARTOSZ NOWAK, LIN WEI, ODALYS MERCEDES, FINN ASHFORD
[beat 0] A concrete ring under flickering sodium lights. Hot-dog stands turned into supply desks. Cots in rows where the beer lines used to be. The air smells of antiseptic and popcorn. DR. SAOIRSE KELLEHER, 40s, scrubs smeared with someone else's blood, kneels at a cot. Red hair under a surgical cap. Her eyes never stop moving. BARTOSZ NOWAK, 50s, a stocky nurse with a grey ponytail, wrestles an IV pole across the cracked floor.
[beat 1] LIN WEI, 20s, paramedic in a drenched jacket, runs a gurney in, rain streaming off her shoulders. On the gurney: ODALYS MERCEDES, 60s, grey-faced, one hand clamped on her chest. Her lips are blue. FINN ASHFORD, 20s, a first-year resident with a nervous goatee, trails behind, clutching a chart he can't read.
[beat 2] LIN WEI: Sixty-two female, chest pain, pulse thready, pressure seventy over forty! SAOIRSE: Put her here. Bart, line. BARTOSZ: Working on it. FINN: Should I call cardiology? Is cardiology even here?
[beat 3] SAOIRSE: Finn, no. Get the crash cart. ODALYS: I'm fine. I'm fine, I just need to sit. SAOIRSE: Mrs. Mercedes, you are sitting. Stay with me. LIN WEI: She's been like this since the underpass! BARTOSZ: Line's in. Pushing fluids.
[beat 4] FINN: Crash cart's in the lobby, I'll-- SAOIRSE: Run. He runs.
[beat 5] Odalys's eyes roll back. The monitor squeals into a flatline. LIN WEI: Doctor!
[beat 6] SAOIRSE: Compressions. Bart, count! BARTOSZ: One, two, three--
[beat 7] Saoirse locks her hands over the old woman's chest and pushes. Ribs crack. Nobody blinks.
[beat 8] FINN: Cart! SAOIRSE: Charge to two hundred. LIN WEI: Clear!
[beat 9] The body jumps. The monitor stays flat.
[beat 10] SAOIRSE: Again.
[beat 11] A long beat. A blip. Another. A rhythm stumbles back to life.
[beat 12] BARTOSZ: Sinus. We have sinus.
[beat 13] Saoirse sits back on her heels. Lin Wei laughs, a wet, startled sound. Finn lowers the paddles, shaking.
[beat 14] ODALYS: Told you. Fine.

### SCENE s00878 | INT. CURLING RINK - ICE LEVEL - NIGHT
Characters: COACH GRETA LINDQVIST, DOC HOLLIS, JUNIOR ABIODUN, MATEO CRUZ, SIGRID, DOC
[beat 0] A cold hush. Brooms squeak. Scoreboard: 7-7, last end. COACH GRETA LINDQVIST, 50s, in a parka, paces behind the hog line. DOC HOLLIS, 60s, the team physio, hovers with a thermos. JUNIOR ABIODUN, 19, kneels in the hack, stone in hand. MATEO CRUZ, 30s, sweeper, and SIGRID, 20s, sweeper, hold their brooms like rifles.
[beat 1] GRETA: Breathe. Everybody breathe. JUNIOR: Don't blow it. Don't blow it. DOC: You've got it, kid. MATEO: Line's perfect. SIGRID: Line's slow.
[beat 2] GRETA: Sigrid, call it. SIGRID: Hard! Hard! Hard!
[beat 3] Junior releases. The stone glides. Mateo and Sigrid sweep, brooms a blur.
[beat 4] MATEO: Off! Off! Off! SIGRID: No, leave it! GRETA: Leave it, leave it, leave it!
[beat 5] Doc turns away, can't watch. The stone creeps toward the button. Stops. A hair short of the rival stone.
[beat 6] Silence. Then the horn. DOC: It's good. JUNIOR: Is it good?
[beat 7] The rink erupts. Mateo hurls his broom. Sigrid sobs into Greta's parka.
[beat 8] GRETA: Thank God.

### SCENE s00879 | INT. GRAIN ELEVATOR - TOP FLOOR - NIGHT
Characters: BEATRIX ALLCOTT, REUBEN STOLTZFUS, PAULINA ARRIAGA, SOUND
[beat 0] Dust. Moonlight through slatted boards. A rusted conveyor hums, empty. BEATRIX ALLCOTT, 30s, flashlight in her teeth, crawls along a catwalk. REUBEN STOLTZFUS, 50s, follows, clutching a pitchfork like a prayer. PAULINA ARRIAGA, 20s, brings up the rear with a camera. Her hands shake.
[beat 1] BEATRIX: Stay close. Nobody splits up. REUBEN: Wasn't planning on it. PAULINA: This is a bad idea. This is a very bad idea.
[beat 2] A SOUND below. Wet. Dragging. They freeze.
[beat 3] Beatrix swings the flashlight down into the dark hopper, where something pale uncoils from the corn, Reuben jabs the pitchfork toward it, Paulina stumbles back and the camera flashes white, and the thing lunges for her ankle before Beatrix hauls her up by the collar and all three scramble toward the ladder.
[beat 4] REUBEN: You said it was empty! BEATRIX: I said I THOUGHT. PAULINA: It's slower. It's slower now.
[beat 5] They reach the ladder. Reuben climbs first. Beatrix pushes Paulina after him, then turns to look back.
[beat 6] Nothing in the hopper. Just a ripple in the grain, settling.
[beat 7] BEATRIX: It's gone. REUBEN: Beatrix. Come on.
[beat 8] She climbs. Stops halfway. Looks down once more. The grain is perfectly flat.
[beat 9] BEATRIX: Goodnight.

### SCENE s00880 | INT. BOWLING ALLEY PAWN SHOP - NIGHT
Characters: VINNIE CASSANO, ODETTA BRIGHTWATER, KEMAL DURAN, TRISH MALONEY, LEVI SZABO
[beat 0] Behind the shoe counter, a cage of guitars and cameras. Lanes rumble beyond the wall. VINNIE CASSANO, 50s, sweating through a bowling shirt. ODETTA BRIGHTWATER, 40s, in a trench coat, a revolver low at her hip. KEMAL DURAN, 30s, hands up, backed against the glass. TRISH MALONEY, 20s, behind the counter, phone in hand. LEVI SZABO, 60s, an old man in the shoe line, frozen with a pair of size nines.
[beat 1] ODETTA: Everybody stay calm. VINNIE: I'm calm. I'm very calm. KEMAL: It's not what it looks like. TRISH: Should I call somebody?
[beat 2] ODETTA: Put the phone down. LEVI: I only wanted bowling.
[beat 3] Kemal drops a bag. Cash spills. Odetta nods at it.
[beat 4] ODETTA: You were going to run. KEMAL: I was going to tell you. VINNIE: Tell her what?
[beat 5] KEMAL: That it's his.
[beat 6] All eyes swing to Vinnie. VINNIE: Don't look at me.
[beat 7] Odetta lowers the gun. A long breath. A pin falls somewhere down the lane.
[beat 8] ODETTA: Strike.

### SCENE s00881 | EXT. RIVER CROSSING - FERRY LANDING - DAY
Characters: AMOS PIKE, CORA LEIGHTON, SHERIFF WALT DRUMMOND, MIGUEL ARROYO
[beat 0] A cable-drawn raft waits on a brown river. A shack. A hitching rail. AMOS PIKE, 40s, ferryman, coils rope on the dock. He keeps one eye on the road.
[beat 1] CORA LEIGHTON, 30s, a schoolteacher in a travelling coat, arrives with a trunk and sets it down hard. She watches him work.
[beat 2] CORA: How much for the crossing? AMOS: Two bits. She pays. He pockets it without looking.
[beat 3] Dust rises on the road. Two riders. SHERIFF WALT DRUMMOND, 50s, and MIGUEL ARROYO, 20s, in handcuffs, slumped over his saddle.
[beat 4] AMOS: Morning, Sheriff. DRUMMOND: Amos.
[beat 5] He dismounts. Pulls the prisoner down. Miguel's lip is split. He keeps his eyes on the water.
[beat 6] CORA: Is he hurt? DRUMMOND: Not badly. CORA: He looks hurt. DRUMMOND: Ma'am, it ain't your business.
[beat 7] She turns to Amos. CORA: Is it?
[beat 8] Amos looks at the river. At the raft. He chews a long moment.
[beat 9] AMOS: Raft only holds four. And a horse. DRUMMOND: Then we'll make two trips. AMOS: Then you wait.
[beat 10] Drummond's jaw tightens. Miguel lifts his head and meets Cora's eyes. He mouths something. She nods, barely.
[beat 11] DRUMMOND: Something to say, boy? Miguel shakes his head.
[beat 12] Cora steps between them, calm as a church. CORA: Sheriff, I'll ride with the prisoner. The ferryman will take the horses first. DRUMMOND: That wasn't the plan. CORA: It is now.
[beat 13] Amos grins at the rope. Drummond glares. Then, slowly, he unbuckles his gun belt and hangs it from his saddle horn.
[beat 14] DRUMMOND: Lead on.

### SCENE s00882 | INT. ROLLER RINK - AFTER HOURS - NIGHT
Characters: INGRID BOSTROM, SKATER, NIKO PAPADAKIS, CLEO
[beat 0] Disco ball turning slowly, scattering dull stars across a vast wooden floor. Neon trim hums. Rental skates in cubbies, laces tangled. The air smells of nacho cheese and old sweat. DET. INGRID BOSTROM, 40s, trench coat, sensible shoes, stands at the rail. Her notebook is closed. She watches a lone skater glide in wide, lazy circles. THE SKATER, 30s, a woman in a sequined jacket, moves like she's ice rather than wheels. Hair pinned up. A split lip she's trying not to touch.
[beat 1] BOSTROM: You skate well. SKATER: Thanks. BOSTROM: Better than my partner. SKATER: He fell?
[beat 2] BOSTROM: He died.
[beat 3] The Skater keeps gliding. Her left wheel clicks once on a board seam. She doesn't look at Bostrom.
[beat 4] BOSTROM: Where were you Thursday night? SKATER: Here. I'm always here. BOSTROM: Someone said that. SKATER: Someone's right.
[beat 5] A door bangs at the far end. NIKO PAPADAKIS, 17, skinny, in a rental-desk polo, drags in a mop and bucket. He freezes at the sight of the detective.
[beat 6] NIKO: Sorry. I didn't know anyone-- BOSTROM: It's fine. What's your name? NIKO: Niko.
[beat 7] BOSTROM: Niko, do you know this woman? He glances at the Skater, then at the floor.
[beat 8] NIKO: That's Cleo. She teaches Tuesday nights.
[beat 9] CLEO: Niko, go home. NIKO: Cleo, I-- CLEO: Go home.
[beat 10] He goes. The door swings shut. The disco ball keeps turning.
[beat 11] Bostrom opens her notebook.
[beat 12] BOSTROM: Cleo what? CLEO: Mbeki.
[beat 13] Bostrom writes it down.
[beat 14] Cleo glides to the rail, takes hold of it, and for the first time looks her in the eye. CLEO: He was going to tell you. BOSTROM: Who was? CLEO: The boy.
[beat 15] Bostrom closes the notebook.

### SCENE s00883 | INT. LOST PROPERTY OFFICE - NIGHT
Characters: INSPECTOR TOMAS ECHEVERRIA, MIRIAM VOLKOV
[beat 0] Shelves of umbrellas. A single desk lamp.
[beat 1] INSPECTOR TOMAS ECHEVERRIA: You've kept everything. MIRIAM VOLKOV: Everything that's ever been left. INSPECTOR TOMAS ECHEVERRIA: Even this? MIRIAM VOLKOV: Especially that. It's a green glove.
[beat 2] INSPECTOR TOMAS ECHEVERRIA: It's a woman's green glove. Left hand. MIRIAM VOLKOV: Left on the 9:14 from Aldgate. March, I think.
[beat 3] INSPECTOR TOMAS ECHEVERRIA: The day Lady Harcourt vanished. MIRIAM VOLKOV: I don't read the papers.
[beat 4] INSPECTOR TOMAS ECHEVERRIA: You wrote the date on the tag. MIRIAM VOLKOV: I write the date on every tag. INSPECTOR TOMAS ECHEVERRIA: The ink is fresh. MIRIAM VOLKOV: It's a fresh tag. INSPECTOR TOMAS ECHEVERRIA: You rewrote it. MIRIAM VOLKOV: Tags fade, Inspector. INSPECTOR TOMAS ECHEVERRIA: Not in a drawer. MIRIAM VOLKOV: It wasn't in a drawer.
[beat 5] INSPECTOR TOMAS ECHEVERRIA: Where was it? MIRIAM VOLKOV: In my coat pocket. INSPECTOR TOMAS ECHEVERRIA: For how long? MIRIAM VOLKOV: Since the morning after.
[beat 6] INSPECTOR TOMAS ECHEVERRIA: Why? MIRIAM VOLKOV: I wanted to give it back. INSPECTOR TOMAS ECHEVERRIA: To whom? MIRIAM VOLKOV: To her.
[beat 7] INSPECTOR TOMAS ECHEVERRIA: Lady Harcourt was on that train. MIRIAM VOLKOV: I know.
[beat 8] INSPECTOR TOMAS ECHEVERRIA: You saw her. MIRIAM VOLKOV: I was on that train. INSPECTOR TOMAS ECHEVERRIA: You never said. MIRIAM VOLKOV: Nobody asked. INSPECTOR TOMAS ECHEVERRIA: I'm asking now.
[beat 9] MIRIAM VOLKOV: She sat opposite me. Green gloves. She was crying. INSPECTOR TOMAS ECHEVERRIA: Why was she crying? MIRIAM VOLKOV: She didn't say. INSPECTOR TOMAS ECHEVERRIA: Did she say anything? MIRIAM VOLKOV: She asked me what the time was. INSPECTOR TOMAS ECHEVERRIA: What time was it? MIRIAM VOLKOV: 9:31.
[beat 10] INSPECTOR TOMAS ECHEVERRIA: And then? MIRIAM VOLKOV: She got off at Whitechapel. INSPECTOR TOMAS ECHEVERRIA: Alone?
[beat 11] MIRIAM VOLKOV: A man held the door for her. INSPECTOR TOMAS ECHEVERRIA: Describe him. MIRIAM VOLKOV: Tall. Grey coat. A scar on his chin. INSPECTOR TOMAS ECHEVERRIA: You remember a scar. MIRIAM VOLKOV: I remember everything left behind.
[beat 12] INSPECTOR TOMAS ECHEVERRIA: Did he leave anything? MIRIAM VOLKOV: A newspaper. A hat. INSPECTOR TOMAS ECHEVERRIA: Where are they? MIRIAM VOLKOV: Shelf C. Second row. INSPECTOR TOMAS ECHEVERRIA: You've had them all this time. MIRIAM VOLKOV: They were never claimed.
[beat 13] INSPECTOR TOMAS ECHEVERRIA: Miss Volkov. Why come forward now? MIRIAM VOLKOV: Because you finally asked the right question. INSPECTOR TOMAS ECHEVERRIA: Which was? MIRIAM VOLKOV: What was left behind.
[beat 14] INSPECTOR TOMAS ECHEVERRIA: And what was? MIRIAM VOLKOV: Her. INSPECTOR TOMAS ECHEVERRIA: I don't follow.
[beat 15] MIRIAM VOLKOV: She never reached the platform. She's in the lost property. INSPECTOR TOMAS ECHEVERRIA: Miss Volkov-- MIRIAM VOLKOV: Locker nine. Behind the umbrellas. Key's on the hook.
[beat 16] INSPECTOR TOMAS ECHEVERRIA: You're confessing. MIRIAM VOLKOV: I'm returning.
[beat 17] INSPECTOR TOMAS ECHEVERRIA: Sit down. MIRIAM VOLKOV: I'd rather stand. It's my office. INSPECTOR TOMAS ECHEVERRIA: Not for much longer. MIRIAM VOLKOV: No. That's the sad part.
[beat 18] INSPECTOR TOMAS ECHEVERRIA: Why did you do it? MIRIAM VOLKOV: She asked what the time was. I told her it was too late. INSPECTOR TOMAS ECHEVERRIA: That's not a reason. MIRIAM VOLKOV: It's the only one I have.
[beat 19] INSPECTOR TOMAS ECHEVERRIA: Take the key down. MIRIAM VOLKOV: Gladly. INSPECTOR TOMAS ECHEVERRIA: Slowly. MIRIAM VOLKOV: I have always been slow, Inspector. It's why I never lose anything.

### SCENE s00884 | INT. DROWNED CATHEDRAL - LIBRARY NAVE - TWILIGHT
Characters: KAELEN ASHDOWN, SELUNE ORRIN, OLD BRAM
[beat 0] Water laps at the knees of marble saints. Long shelves rise out of the green dark, their books swollen and glowing faintly with lichen light. Shafts of drowned moonlight fall through a broken rose window, and in them drift motes like slow fish. KAELEN ASHDOWN, 20s, wades chest-deep with a lantern held high. A scholar's coat floats around her like a jellyfish. Her braid is plastered to her neck.
[beat 1] SELUNE ORRIN, 30s, pale as milk, surfaces from the water by the pulpit without a ripple. She wears a grey shift that moves as if underwater even when she is not. Her eyes are the colour of old pearl. OLD BRAM, 80s, sits on a toppled bookshelf above the waterline, whittling a reed pipe, one bare foot dangling.
[beat 2] KAELEN: You are not supposed to be awake. SELUNE: You are not supposed to be here.
[beat 3] KAELEN: I've come for the Index. SELUNE: You've come to steal it. KAELEN: SELUNE It belongs to the living. It belongs to the drowned.
[beat 4] OLD BRAM: You both sound very sure.
[beat 5] They stop. A silence, thick as water. Selune drifts closer, circling Kaelen, her shift trailing silt. Kaelen lifts the lantern between them. The flame shivers but does not die.
[beat 6] KAELEN: Then let me read it. One page. SELUNE: Which? KAELEN: My mother's.
[beat 7] Selune's expression changes, something old and tender breaking through the stillness. OLD BRAM: Aye, there it is.
[beat 8] Selune reaches under the water and draws out a book, black with age and fat with brine. She offers it. Kaelen takes it. Their fingers touch and both flinch, as if from cold.
[beat 9] They stand a long moment, the book between them, the lantern light swaying across the ruined nave.
[beat 10] Then Kaelen opens it. The pages are blank except for one line, written in a hand she knows.
[beat 11] KAELEN: She waited. SELUNE: Every night.
[beat 12] Old Bram tucks the whittled pipe behind his ear and slides down off the shelf, landing with a splash. OLD BRAM: Right. Tea?

### SCENE s00885 | EXT. JUNKYARD - BURNED-OUT SCHOOL BUS CLUBHOUSE - LATE AFTERNOON
Characters: TEDDY LOWELL, PEDRO SALAZAR, RUTHIE KWAN, DANNY FITZGERALD
[beat 0] Summer, 1974. Heat shimmers over a hill of stripped sedans. Inside the long skeleton of a yellow bus, someone has laid down carpet scraps, strung Christmas lights, and nailed a Beatles poster to the ceiling. The seats have been pulled out and replaced with milk crates. TEDDY LOWELL, 15, a girl with scabbed knees and a pencil behind her ear, sprawls on a crate with a notebook in her lap. PEDRO SALAZAR, 16, lean and quiet, tinkers with a transistor radio. RUTHIE KWAN, 14, perched on the driver's seat, spins the big steering wheel with one finger. DANNY FITZGERALD, 17, the oldest, leans in the doorway, thumbs hooked in his belt loops, a pack of cigarettes just visible in his sock.
[beat 1] The radio crackles and settles on a pop song. They all pause to listen. TEDDY: Okay. Official meeting of the Wheel Club. Everybody sit. RUTHIE: I'm already sitting. TEDDY: Everybody who isn't Ruthie, sit. DANNY: I'll stand. TEDDY: You always stand. DANNY: That's why I'm taller. PEDRO: It's because he can't fit on the crates. DANNY: Say that again. PEDRO: You can't fit on the crates. Danny laughs and ruffles his hair. Pedro ducks, grinning.
[beat 2] TEDDY: Item one. The summer plan. RUTHIE: We have a plan? TEDDY: We have a list. RUTHIE: Read it. TEDDY: One. Paint the bus. Two. Get the radio working. Three. Finish the map of the junkyard so nobody gets lost. Four. Never tell anyone about the bus. PEDRO: Five. Eat. TEDDY: Five. Eat. DANNY: Six. Don't get arrested. TEDDY: That one's implied.
[beat 3] RUTHIE: What about the thing in the back? The room goes quiet. The radio hisses between stations. Danny glances at the door. Pedro puts down his screwdriver. TEDDY: Which thing? RUTHIE: You know which thing. TEDDY: We said we weren't going to talk about it. RUTHIE: You said. I didn't say. PEDRO: Ruthie. RUTHIE: It's been there since June. Someone has to say it. DANNY: It's a trunk. It's an old trunk. RUTHIE: It has a lock. DANNY: Lots of trunks have locks. RUTHIE: It has a lock and it's NEW. PEDRO: Who put a new lock on an old trunk?
[beat 4] Nobody answers. Teddy closes her notebook with a small, careful click. She looks around the bus as if seeing it for the first time, her eyes catching on each face before settling on Danny. TEDDY: Danny. DANNY: What? TEDDY: You've been here more than anyone. DANNY: It's my brother's yard. I'm supposed to be here. TEDDY: Is the trunk yours? DANNY: No. TEDDY: Is it your brother's? DANNY: Teddy. TEDDY: Is it? DANNY: I don't know what's in it. TEDDY: That isn't what I asked.
[beat 5] He crosses the bus in three long strides and drops to a crouch beside the trunk, his back to them. His hand rests on the lock. Pedro stands. Ruthie slides down from the driver's seat. For a moment nobody breathes. DANNY: He asked me to keep it safe. That's all he said. Keep it safe, don't open it, don't tell anyone. TEDDY: And you told us. DANNY: I didn't tell you. You found out. TEDDY: Because you left the key where Ruthie could find it. DANNY: I never did. RUTHIE: It was under the radio.
[beat 6] He turns, finally. His face, that easy older-brother face, has gone grey as the road. He looks at Ruthie, at the key in her palm, at the three of them standing close together in the strung-up lights. DANNY: Give me the key. RUTHIE: No. DANNY: Ruthie-- RUTHIE: We're the Wheel Club. We decide together. PEDRO: She's right. TEDDY: Open it, Ruthie.
[beat 7] Ruthie steps forward, fits the key, turns it. The lock pops.
[beat 8] The lid swings up on rusted hinges and a hush falls over the bus as the afternoon light finds what is inside: not money, not guns, not anything they imagined, but row upon row of school photographs, hundreds of them, each of a child they know from town, each with a name written on the back in careful pencil, and on top, a single Polaroid of the four of them, taken that very morning, through the bus window, from outside.

### SCENE s00886 | INT. CLIFFSIDE BARBERSHOP - DAY
Characters: JEDEDIAH CROWE, COLTON MAYHEW, AGNES BELLWETHER
[beat 0] A single chair bolted to a plank floor, facing a wide window that opens onto a canyon. The wind whistles through a crack in the frame. A mirror. A strop. A pot of lather. JEDEDIAH CROWE, 60s, the barber, stands behind the chair in a clean white apron. Gentle hands. Soft voice. He hums as he whisks the lather. COLTON MAYHEW, 30s, lies back in the chair with a towel across his throat. Dusty hat on his knee. Revolver on his hip, strap loose. AGNES BELLWETHER, 50s, a widow in black, sits on a bench by the door with a sewing basket and does not look at either man.
[beat 1] JEDEDIAH: A little off the sides? COLTON: Just the beard. JEDEDIAH: Quiet morning. COLTON: Suits me. JEDEDIAH: Rode far? COLTON: Far enough.
[beat 2] Jedediah strops the razor. The leather slaps. Agnes pricks her finger with the needle and doesn't flinch. JEDEDIAH: Miss Agnes, you want coffee? AGNES: No, thank you, Jed. JEDEDIAH: Mr. Mayhew? COLTON: Not before I'm shaved.
[beat 3] Jedediah smiles, spreads the lather, and begins to draw the razor along Colton's jaw. Slow. Deliberate. The canyon wind rises.
[beat 4] COLTON: You know my name. JEDEDIAH: Everybody does, since Tuesday. Colton's eyes open. COLTON: JEDEDIAH What did you hear? Not much. Just that you killed my son.
[beat 5] The razor rests at Colton's throat. Agnes sets down her sewing. AGNES: Jed. JEDEDIAH: It's all right, Agnes. COLTON: I never-- JEDEDIAH: You never were sorry. I know. I read the report.
[beat 6] A very long moment. The wind drops. The only sound is Colton's heartbeat, loud in his throat. JEDEDIAH: But I'm a patient man, Mr. Mayhew. And Miss Agnes has a pie in the oven.
[beat 7] He lifts the razor away. Wipes it on the towel. Folds it shut.
[beat 8] JEDEDIAH: The sheriff's on his way. He'll be here before the lather dries. Colton lies perfectly still, as if one breath might cost him everything.

### SCENE s00887 | INT. MAYFAIR CORSETRY SHOP - FITTING ROOM - DAY
Characters: LADY EUGENIA THORNCROFT, BRIDGET MULVANEY
[beat 0] 1911. Mirrors in gilt frames. A velvet curtain. Fashion plates pinned to the walls. The air is thick with lavender and the smell of hot irons. LADY EUGENIA THORNCROFT, 40s, imperious, stands on a small platform in her underthings, arms raised, jaw set. Her hair is a monument of pins. BRIDGET MULVANEY, 20s, the seamstress, kneels at her feet with a mouthful of pins and a tape measure around her neck. Her sleeves are rolled. Her knuckles are raw.
[beat 1] BRIDGET: If you'd just breathe in, my lady. EUGENIA: I am breathing in. BRIDGET: Further. EUGENIA: There is no further.
[beat 2] Bridget pulls the laces tight. Eugenia gasps. They freeze, eye to eye in the mirror, each daring the other to speak first.
[beat 3] EUGENIA: Is no one else on duty in this establishment? No answer. The gas lamp hisses. Bridget plucks a pin from her mouth. BRIDGET: It's only me today, my lady. The others went to the suffrage march. EUGENIA: Good heavens.
[beat 4] She turns her head. She tries to look at her back in the mirror, wobbling on the platform. Bridget catches her arm. BRIDGET: Steady. EUGENIA: Do not touch me. BRIDGET: You were falling. EUGENIA: I was NOT.
[beat 5] She steps down, stiff as a flagpole, and sweeps toward the curtain. Bridget stands. She grabs her scissors. She grips them hard. BRIDGET: You're not finished, my lady. EUGENIA: I am entirely finished. BRIDGET: Then you'll leave with the hem undone.
[beat 6] Eugenia stops. She says nothing for a long moment. Then she turns around and, with great dignity, climbs back onto the platform and raises her arms. EUGENIA: Proceed.
[beat 7] Bridget kneels. She spits a pin into her palm. She does not smile. She very nearly does.

### SCENE s00888 | EXT. CORPORATE ROOFTOP - APIARY - MORNING
Characters: MARGOT FENWICK, OSKAR LINDGREN, PETRA IONESCU, NEW HIRE, KWAME
[beat 0] Above the thirty-first floor of Halcyon Dynamics, a sea of glass towers glitters in the sun. Between the air-conditioning units and a ruined yoga mat, someone has set up six white beehives in a neat row. Bees drift in lazy loops, indifferent to the quarterly earnings. MARGOT FENWICK, 50s, Vice President of People Experience, glides across the gravel in a silk blouse and veil, as perfectly composed as a chess piece. She carries a clipboard in one hand and a smoking tin in the other. OSKAR LINDGREN, 40s, the company beekeeper, whose title on his badge is Chief Pollination Officer, adjusts a hive lid with a wooden tool. Tall, rumpled, a beard going silver at the edges. He moves slowly so the bees won't notice him. PETRA IONESCU, 30s, Facilities, stands at the roof door with a walkie-talkie, glancing at her watch. She wears hi-vis over a cardigan.
[beat 1] A NEW HIRE, 20s, steps out onto the gravel in a brand-new suit still creased from its packaging, a lanyard around his neck and a reusable cup of oat latte in his hand. He squints at the hives and takes one hesitant step backward. MARGOT: Ah, there he is. Our new Vice Assistant of Synergy. NEW HIRE: Hi. I think there's a mistake. My badge says "Analyst." MARGOT: Titles are fluid at Halcyon. OSKAR: Don't make sudden movements, son. NEW HIRE: What kind of movements are sudden? OSKAR: Most of them.
[beat 2] PETRA: He's here. No, he's fine. Yes, I'll tell him. MARGOT: Petra, thank you. You may go. PETRA: I'd rather stay, actually. MARGOT: That was not a request. Petra glares at Margot, lowers the walkie-talkie, and takes a slow, deliberate seat on an overturned bucket.
[beat 3] MARGOT: Today is your onboarding. At Halcyon we believe in rooting our people in something larger than themselves. NEW HIRE: Like bees? MARGOT: Like hives. OSKAR: Like stings, mostly.
[beat 4] He hands the New Hire a veil. The young man puts it on, slightly crooked, the netting hanging in his eyes. A single bee lands on his shoulder. He freezes. NEW HIRE: Is it going to-- OSKAR: It's just curious. Breathe out slowly. He does. The bee lifts off.
[beat 5] Margot makes a note on the clipboard. MARGOT: You handle pressure well. I'll mention that in your file. NEW HIRE: I haven't actually got a file yet. MARGOT: Everyone has a file. PETRA: Everyone has two.
[beat 6] Margot ignores her. She approaches the nearest hive and lifts the lid with a flourish. A hum rises, soft and grave. MARGOT: This is the queen's chamber. You'll note the order. The discipline. The harmony of purpose. I like to think of our fifth-floor sales team in precisely this way. OSKAR: The sales team is not a queen. MARGOT: The sales team is a metaphor, Oskar. OSKAR: The sales team is a wasp's nest. Petra snorts. Margot closes the lid a little harder than she means to.
[beat 7] NEW HIRE: Can I ask something? MARGOT: Please. NEW HIRE: Why bees? A beat. Margot looks at Oskar. Oskar looks at the sky. Petra studies her boots.
[beat 8] OSKAR: Margot's husband kept bees. MARGOT: Oskar. OSKAR: He died in March. She had the hives lifted here from the farm. MARGOT: That is private. OSKAR: It's rooftop. Nothing's private on a rooftop.
[beat 9] For a moment, nobody speaks. The wind lifts the edge of Margot's veil. She smooths it with one hand, her fingers not quite steady.
[beat 10] PETRA: Margot, the VP call. MARGOT: Yes. Of course.
[beat 11] She hands the clipboard to the New Hire without ceremony. MARGOT: Kwame. Welcome to Halcyon. KWAME: You know my name? MARGOT: I read your file. KWAME: I thought I didn't have one. MARGOT: Now you do.
[beat 12] She sweeps toward the roof door, Petra a half-step behind her. At the threshold she pauses, one hand on the frame, and speaks without turning. MARGOT: Oskar. Teach him everything. OSKAR: Everything about what? MARGOT: Everything he'll need.
[beat 13] She goes. The door sighs shut. Kwame lifts the veil from his eyes and looks at Oskar, who has already turned back to the hives. KWAME: Is she always like that? OSKAR: No. Sometimes she's worse.
[beat 14] He hands Kwame the smoker. It's warm and heavy, and a thin white thread curls from its spout. OSKAR: Squeeze the bellows. Gently. Like you're asking a question. Kwame squeezes. The smoke drifts across the hive. The humming softens, lowers, and one by one the bees settle into the quiet.

### SCENE s00889 | INT. BOOKBINDER'S WORKSHOP - LISBON - EVENING
Characters: SOLEDAD IBARRA, ARCHIE MENDELSOHN, AUNT VELMA
[beat 0] A narrow stone room under a vaulted ceiling. Presses, bone folders, spools of waxed linen. Every surface is stacked with half-finished volumes, their spines bare as ribs. A single window frames the red roofs of the Alfama and a tram rattling past. SOLEDAD IBARRA, 30s, in a leather apron, sits at the sewing frame with a needle in her hand, a loose braid down her back. Ink stains her fingertips. She is stitching a signature with practiced ease.
[beat 1] ARCHIE MENDELSOHN, 30s, a tall American in a rain-spotted jacket, stands in the doorway holding a battered book against his chest like a rescued animal. SOLEDAD: You're late. ARCHIE: I got lost. SOLEDAD: You always get lost. ARCHIE: It's a very confusing city. SOLEDAD: It's a city with seven hills and one river. Even the pigeons find their way. ARCHIE: The pigeons live here. SOLEDAD: So do I. And I'm never late. ARCHIE: You're never anywhere else.
[beat 2] She smiles despite herself, not looking up. He crosses to the workbench and sets the book down in front of her. Gently, as if it might bruise. ARCHIE: That's the one. SOLEDAD: Oh, Archie. What did you do to it? ARCHIE: I dropped it in a canal. SOLEDAD: In Venice. ARCHIE: In Venice. SOLEDAD: On purpose? ARCHIE: It jumped. I'm telling you, it jumped. SOLEDAD: Books don't jump. ARCHIE: This one has a lot of feelings.
[beat 3] She opens the cover. The pages are warped and rippled, the ink bled into soft blue clouds. She runs a thumb along the gutter and lets out a slow breath.
[beat 4] SOLEDAD: Whose is it? ARCHIE: My grandfather's. His diary. SOLEDAD: Then why are you giving it to me? ARCHIE: Because you're the best in Europe. SOLEDAD: Flattery. ARCHIE: Fact.
[beat 5] SOLEDAD: It will take weeks. ARCHIE: I have weeks. SOLEDAD: You have a plane ticket. ARCHIE: I could lose the ticket. SOLEDAD: You could. ARCHIE: I could lose the whole plane. SOLEDAD: Archie. ARCHIE: Soledad.
[beat 6] The workshop door bangs open. AUNT VELMA, 70s, a small woman in a patterned housecoat and bright orange slippers, sweeps in with a covered dish and a gust of cold air. AUNT VELMA: Soledad! You haven't eaten. I brought cod. SOLEDAD: Tia, I'm working. AUNT VELMA: And who is this? ARCHIE: Archie Mendelsohn, ma'am. I'm a client. AUNT VELMA: A client who brings flowers?
[beat 7] He looks down. He is, in fact, holding a very small bunch of wilted daisies in his left hand, crushed against the book. He lifts them with a helpless shrug. ARCHIE: They were fresh this morning. AUNT VELMA: He is a client who brings flowers. SOLEDAD: Tia. AUNT VELMA: I will leave the cod.
[beat 8] She sets the dish on the nearest stack of paper, pats Archie's cheek once, and sweeps out. The door slams. The tram rattles by. Soledad and Archie look at each other across the ruined book.
[beat 9] ARCHIE: She likes me. SOLEDAD: She likes everybody. She feeds the pigeons. ARCHIE: Do you? SOLEDAD: Do I what? ARCHIE: Like me.
[beat 10] She picks up the daisies. Smooths one battered petal between thumb and finger. SOLEDAD: Come back on Tuesday. I will tell you what the book needs. ARCHIE: And the other thing? SOLEDAD: The other thing takes longer.

### SCENE s00890 | INT. HOSPITAL SUBBASEMENT - LAUNDRY ROOM - NIGHT
Characters: EZEKIEL FAIRWEATHER, PADDY GALLAGHER
[beat 0] A low, steam-choked cavern. Industrial washers thump like slow drums. Sheet-laden carts line the walls in ghostly rows. Pipes sweat overhead, and the tiled floor is slick with soap and condensation. A single fluorescent tube buzzes. DR. EZEKIEL FAIRWEATHER, 50s, a cardiothoracic surgeon, sits on an overturned laundry bin in rumpled blue scrubs, his tie shoved in his pocket. Grey stubble. Hands folded between his knees as if praying. He has not slept in thirty hours. He stares at the drain in the floor.
[beat 1] The doors at the far end swing open and a gurney wheel squeals. PADDY GALLAGHER, 50s, the night porter, pushes a cart of towels down the aisle. Barrel-chested, flushed, a green cap pulled over a bald crown. He stops short at the sight of the doctor. PADDY: Jesus, Mary and Joseph. Doctor? EZEKIEL: Don't mind me. PADDY: You scared the life out of me. EZEKIEL: Sorry. PADDY: It's the wrong end of the building for you, sir. The surgeons have their own lounge. EZEKIEL: I know. PADDY: Then why-- EZEKIEL: It's loud here.
[beat 2] Paddy considers this. He parks the cart. Pulls a crumpled pack of cigarettes from his pocket, glances up at the smoke detector, and puts them back.
[beat 3] PADDY: Bad one? EZEKIEL: Seven hours. We lost him on the table. PADDY: I'm sorry. EZEKIEL: He was thirty-one. PADDY: Ah, God. EZEKIEL: He had a daughter. She was in the waiting room, drawing a horse. PADDY: Did you tell her? EZEKIEL: His wife did. I just stood there.
[beat 4] A washer ends its cycle with a shuddering groan. Steam breathes out of the vents. Paddy drags a second bin across the tile and lowers himself onto it with a grunt, so the two men sit knee to knee in the damp. PADDY: My brother went the same way. Heart. EZEKIEL: When? PADDY: Twenty years. The doctors were very kind. EZEKIEL: That doesn't help, does it? PADDY: Not on the day. EZEKIEL: PADDY What does, then? Time, I suppose.
[beat 5] They both stop. The ghost of a smile crosses Paddy's face. Ezekiel laughs, one dry exhale through his nose, and rubs his eyes with the heels of his hands.
[beat 6] PADDY: You want a towel? They're warm. EZEKIEL: I'm not crying. PADDY: Never said you were. They're just warm. He passes a folded towel from the cart. Ezekiel takes it, presses it to his face, and holds it there much longer than a person needs to wipe off sweat. Paddy gazes politely at a washer. Time passes in the slow rhythm of the drums. EZEKIEL: Thank you. PADDY: Aye.
[beat 7] EZEKIEL: Does it ever stop? The... carrying it? PADDY: I wouldn't know, Doctor. I only carry the linen. EZEKIEL: Then you're luckier than I am. PADDY: Maybe. Or I just do the washing so you can do the rest.
[beat 8] Ezekiel looks at him properly for the first time. Paddy meets the look without flinching, wide-faced and unhurried.
[beat 9] EZEKIEL: What's your name? PADDY: Paddy. Paddy Gallagher. EZEKIEL: Ezekiel. PADDY: I know. It's on the plaque in the lobby. The one with the donors. EZEKIEL: I never donated. PADDY: Your name's on it anyway. The ghost of a smile returns.
[beat 10] Ezekiel stands. He folds the towel into a perfect square and sets it back on the cart, then stands for a moment with his hand on the metal rail. EZEKIEL: I should go up. PADDY: They'll keep. EZEKIEL: Not all of them. PADDY: No. Not all.
[beat 11] Ezekiel nods. He straightens his scrubs, pulls his tie from his pocket, and puts it back again. At the door he pauses. EZEKIEL: Paddy. PADDY: Doctor. EZEKIEL: Thank you for the towel. PADDY: Anytime. It's what I'm for.
[beat 12] The door sighs shut behind the surgeon. Paddy sits alone in the thrum of the machines. After a moment he takes out the cigarettes, looks at the smoke detector again, and slowly, decidedly, puts them back.

### SCENE s00891 | INT. BELL TOWER - SNIPER NEST - DAWN
Characters: MOSES TEMBO, FERGAL ROURKE, ANTON VASQUEZ
[beat 0] A stone shaft, open to the weather. Cracked bell hangs silent overhead, green with age. Pigeon droppings crust the floor. Through the louvres, a ruined village burns in slow grey ribbons. SGT. MOSES TEMBO, 40s, huge, patient, lies flat behind a rifle. Scar across his eyebrow. Every breath measured. PVT. FERGAL ROURKE, 19, freckled, trembling, crouches at the rim of the stairwell with a field phone. CAPT. ANTON VASQUEZ, 30s, in a dented helmet, studies a map pinned to the wall with a bayonet.
[beat 1] ROURKE: Nothing on the line. TEMBO: Keep trying. VASQUEZ: They've cut it. ROURKE: Then who do I call? VASQUEZ: Nobody. ROURKE: We're stuck up here! TEMBO: Shut your mouth, boy. VASQUEZ: Quiet. Both of you.
[beat 2] Silence. Pigeons shift on the beams. Tembo's eye stays glued to the scope.
[beat 3] TEMBO: Movement. Left of the well. Vasquez drops beside him. He raises binoculars. He holds them very still. VASQUEZ: How many? TEMBO: Three. Maybe four.
[beat 4] Rourke drops the phone. It clatters. All three freeze. ROURKE: Sorry. VASQUEZ: Pick it up. Slowly. He does.
[beat 5] Below, a boot scrapes stone. Closer than any of them wants. TEMBO: They're in the church. VASQUEZ: Then they're under us.
[beat 6] Tembo shifts the rifle. He exhales. The great bell shivers, ever so slightly, as if remembering. ROURKE: Sarge-- TEMBO: Not now.
[beat 7] Wood creaks on the stair. Rourke raises his rifle with both hands. The barrel wavers. Vasquez rests a hand on his shoulder. VASQUEZ: Easy, son.
[beat 8] Light from the stairwell. Then a shape in the light.
[beat 9] Tembo fires.

### SCENE s00892 | INT. ROADSIDE MOTEL - ICE MACHINE ALCOVE - NIGHT
Characters: LORRAINE PETTIGREW, DOT HOLLANDER, GIDEON MARSH, HIRAM BECK
[beat 0] A concrete nook behind the lobby. A humming ice machine, a flickering vending machine, a bulb in a wire cage. Rain hammers the tin roof. The ice machine shudders as if something moves inside. LORRAINE PETTIGREW, 50s, in a bathrobe and mismatched slippers, clutches an empty plastic bucket. Her eyes keep drifting to the machine. DOT HOLLANDER, 60s, in a nightgown and a hairnet, leans against the vending machine with a bag of pretzels. She doesn't open it. GIDEON MARSH, 30s, the night clerk, stands with his arms folded and a ring of keys on his belt. He chews gum, too fast.
[beat 1] HIRAM BECK, 40s, a trucker in a green flannel, enters from the rain, shaking out his hood. HIRAM: Whole parking lot's flooded. What's going on? GIDEON: Nothing. Go back to your room, sir. LORRAINE: It's the machine. HIRAM: What about it? DOT: It's been making that sound for an hour. HIRAM: Machines hum. That's what they do. LORRAINE: It isn't humming. Listen.
[beat 2] They listen. Under the rain, under the thrum of the motor, a slow, wet knocking from inside the steel. HIRAM: Pipes. GIDEON: It's pipes. Old pipes.
[beat 3] DOT: Then why did Mr. Alvarez in 12 say he heard his name? GIDEON: Mr. Alvarez is eighty-nine. DOT: And Mrs. Pruitt in 4 heard hers. GIDEON: She's a drinker.
[beat 4] LORRAINE: I heard mine. Silence. The bulb flickers. The machine knocks again, three slow beats. HIRAM: What did it say? LORRAINE: It said "Lorraine." DOT: That's not unusual. It's your name.
[beat 5] LORRAINE: It said it in my mother's voice. HIRAM: Ma'am-- LORRAINE: She's been dead for nine years.
[beat 6] The machine knocks again, closer to the door. Gideon spits his gum into his palm. He pulls the keys off his belt and holds them in a white-knuckled fist.
[beat 7] GIDEON: I'm going to open it. DOT: Don't. GIDEON: It's a machine, Dot. DOT: Don't. HIRAM: Let him. DOT: Hiram, no.
[beat 8] He steps forward. Fits a key. The lock turns with a click like a gunshot. For a moment nothing happens.
[beat 9] Then the door swings open on a bin of clear, perfect ice, and in the ice, packed tight and glistening, are the eyes of a woman, open and unblinking, staring up at the cage light. LORRAINE: Mama?
[beat 10] The eyes blink.

### SCENE s00893 | INT. VFW HALL KITCHEN - NIGHT
Characters: ARLO PENDERGAST, BILLIE STOKES, CEDRIC NAKAMURA, FATHER ANSELM
[beat 0] A wake in the next room: muffled laughter, clinking glasses. Here, under buzzing fluorescents, a steel counter holds trays of cold cuts, a coffee urn, and a single untouched casserole with a foil lid. ARLO PENDERGAST, 60s, in a dark suit gone shiny at the elbows, stands at the sink scrubbing a pot far past clean. His son's funeral program is folded in his breast pocket. BILLIE STOKES, 50s, his sister, in a black dress and sneakers, leans against the fridge with a plastic cup of wine. Her eyes are swollen but dry. CEDRIC NAKAMURA, 30s, Arlo's nephew, comes through the swinging door with a tray of empties. Loosened tie. Fresh shaving cut.
[beat 1] CEDRIC: They're asking for a speech. ARLO: Who is? CEDRIC: Everybody. BILLIE: Tell them he's busy. CEDRIC: Doing what? Dishes? BILLIE: Don't. ARLO: Somebody has to do them. CEDRIC: Uncle Arlo, it's Danny's wake. ARLO: I know whose wake it is. CEDRIC: Then come out. Please. ARLO: After the pot. BILLIE: It's been clean for ten minutes. ARLO: It's not clean. BILLIE: Arlo. ARLO: It is not clean.
[beat 2] He scrubs harder. The sponge squeals. Cedric sets the tray on the counter and glances at Billie, who gives a tiny shake of her head. CEDRIC: He's been like this since the service. BILLIE: He's been like this since March. ARLO: I can hear you. BILLIE: Good.
[beat 3] The swinging door opens. FATHER ANSELM, 70s, enters in his black clerical collar, a dinner roll in one hand and a napkin in the other. Round-faced, kind, tired. FATHER ANSELM: There you are, Arlo. I wondered where you'd gone. ARLO: Washing. FATHER ANSELM: So I see. BILLIE: Father, he doesn't want to talk.
[beat 4] FATHER ANSELM: That's quite all right. I'll talk. Cedric, would you fetch more ice? CEDRIC: Sure. He goes. The door flaps shut. Anselm eases onto a stool, sets the roll on the counter, and folds his hands.
[beat 5] FATHER ANSELM: Danny was a good boy. ARLO: Was he? FATHER ANSELM: Arlo. ARLO: He was a good boy until he wasn't. BILLIE: Don't do this here. ARLO: Where, then? In front of the whole town? BILLIE: Not now.
[beat 6] ARLO: He called me from the highway. Did you know that? BILLIE: No. ARLO: He called me from the highway at two in the morning and said "Dad, I'm sorry." And I said, "For what?" And he said "For all of it." And I said "Go home and sleep." FATHER ANSELM: You couldn't have known. ARLO: That's what you all keep saying. BILLIE: Because it's true. ARLO: It's not true. I knew. I knew and I said go home and sleep.
[beat 7] The pot clatters into the sink. Billie crosses the kitchen, takes his wet hands in hers, and holds them against her black dress. BILLIE: Arlo. Look at me. ARLO: I can't. BILLIE: Look at me.
[beat 8] He does. His face crumples like paper in a fist. He doesn't make a sound. Anselm lowers his gaze to the roll. The wake rumbles on through the wall, a hundred voices pretending.
[beat 9] The kitchen door swings open again. Cedric stands with an ice bucket in both hands, pale. CEDRIC: Uncle Arlo. There's someone here. ARLO: Who?
[beat 10] CEDRIC: A kid. About Danny's age. He says he was with him. That night. Everyone goes still. The coffee urn ticks.
[beat 11] BILLIE: Let him in.

### SCENE s00920 | INT. BELL TOWER OF THE DROWNED CHAPEL - DUSK
Characters: ORSOLYA VANE, TEMBO ADEYEMI-LUND, HOODED STRANGER, PIP, CORVANE
[beat 0] A chapel sunk to its rafters in a black lake. The bell tower pokes above the water like a stubborn finger. Lantern light. Fish scales glitter on the beams. ORSOLYA VANE (40s, ferrywoman, salt-cracked hands) ladles broth into tin cups. Beside her, TEMBO ADEYEMI-LUND (20s, apprentice cartographer, ink on every cuff) unrolls a map. A HOODED STRANGER sits apart, back to the wall, a staff across his knees.
[beat 1] ORSOLYA: Eat. The lake gives nothing back after dark. TEMBO: The map says the shoals are east of us. ORSOLYA: The map says a lot of things.
[beat 2] Behind them, PIP (12, barefoot, a ferry rat) dangles from a rafter, grinning. PIP: I counted the bells. There's four. TEMBO: There were three on the chart -- ORSOLYA: Pip, get down --
[beat 3] STRANGER: He's right. Four. PIP: Told you! ORSOLYA: Who asked you? TEMBO: Four? Where's the fourth? STRANGER: Where it always was.
[beat 4] Silence. The water laps. The broth steams. Everything is calm.
[beat 5] The Stranger lowers his hood. Pale eyes, a bell-metal collar fused to his throat. STRANGER: My name is Corvane. I was the fourth.
[beat 6] Below them, the water goes perfectly still. Then every lantern gutters at once.
[beat 7] ORSOLYA: Pip. Tembo. Behind me. CORVANE: Too late for that, ferrywoman. PIP: He's ringing!
[beat 8] A deep toll rolls up from under the lake. The floorboards shake. TEMBO: Make it stop! ORSOLYA: Should have left him on the shore.
[beat 9] CORVANE: Tonight, you ring with me.

### SCENE s00921 | INT. DECOMMISSIONED GRAIN ELEVATOR - NIGHT
Characters: DETECTIVE IMOGEN KARLSSON-OYELARAN, MAXI, BRZEZINSKI, DISPATCHER, RAFFERTY DUNNE, SOLENNE DUNNE, ABEBE TSEGAYE
[beat 0] A concrete cathedral of silos, six stories of rust and pigeon-dung, stairwells winding upward like the inside of a seashell. Moonlight falls through a broken roof panel and lays a cold coin on the floor.
[beat 1] DETECTIVE IMOGEN KARLSSON-OYELARAN (40s, rain-colored coat, a limp she disguises as a stride) climbs the catwalk with a flashlight held low. Her breath fogs. Below, in the shadow of Silo Three, MAXIMILIAN "MAXI" BRZEZINSKI (30s, bookish, a scholar's stoop, hands trembling around a duffel bag) watches her ascend.
[beat 2] A radio crackles on her belt. DISPATCHER: Karlsson, backup is eleven minutes out. IMOGEN: Eleven's too long. DISPATCHER: Say again?
[beat 3] She switches the radio off. Above her, a boot scrapes iron.
[beat 4] On the upper gantry, RAFFERTY DUNNE (50s, heavy, a gold tooth that catches the moon) and his niece, SOLENNE DUNNE (20s, shaved head, a ledger tucked under one arm) lean over the rail, perfectly still. Far across the chamber, ABEBE TSEGAYE (60s, retired elevator operator, a ring of keys at his belt) stands at the old control panel, one hand on a lever.
[beat 5] ABEBE: Everyone stays where they are. RAFFERTY: Detective, you're early. IMOGEN: Mr. Dunne, put the ledger down. SOLENNE: It's not his ledger. RAFFERTY: It's not her ledger.
[beat 6] MAXI: It's mine! The echo carries the word up through six stories of concrete and back down again, thinner each time.
[beat 7] Abebe's hand tightens on the lever. Somewhere beneath the floor, a conveyor chain groans awake.

### SCENE s00922 | INT. ABANDONED SALT-LICK CHAPEL - DAY
Characters: HOLLIS BRANDT-OKAFOR, MERCY, ELI
[beat 0] A tin-roofed chapel on the edge of the alkali flats. Pews pulled out and stacked against the wall. In the middle of the floor, a block of rock salt the size of a coffin, glittering where the light finds it. HOLLIS BRANDT-OKAFOR stands in the doorway, dust to his knees. He is lean, sunburned, and carries a rifle like it weighs nothing. He lets his eyes adjust. Across the room, a woman sits on the altar rail with her boots swinging. She does not look up when he enters. She is peeling an orange with a skinning knife. At the back, in the pulpit, a boy no older than fifteen crouches with a canvas sack in his arms. He is trying to be invisible.
[beat 1] HOLLIS: Mercy Calloway. MERCY: Marshal Brandt. You're a long way from a courthouse. HOLLIS: Forty miles. The horse died twenty back. She cuts a slice of orange and eats it. MERCY: Then you walked into the one place I know you'd come.
[beat 2] HOLLIS: The boy. MERCY: He's not mine. HOLLIS: That's not what the telegraph said. MERCY: Telegraph says a lot.
[beat 3] HOLLIS: It said you took his father's payroll. It said you took the father, too. MERCY: It said that. HOLLIS: Did you? MERCY: Do you want me to say yes so you can hang me, or no so you can call me a liar? HOLLIS: I want the truth. MERCY: Then you're the first man in this territory who does.
[beat 4] She finally looks at the boy. He shrinks. MERCY: Tell him, Eli. Tell him what you saw. ELI: I -- my pa -- HOLLIS: Easy, son.
[beat 5] ELI: My pa shot first. HOLLIS: At who? ELI: At her. She was only standing there. HOLLIS: Standing where? ELI: By the well. She had the sack, she was giving it back. MERCY: I told you, boy, that's enough. HOLLIS: No, let him finish. ELI: My pa wanted it for himself. He wanted all of it. He said if she lived, she'd talk.
[beat 6] HOLLIS: And the father? ELI: He fell in the well. MERCY: He fell. Not pushed. Fell. HOLLIS: Eli, did she push him? ELI: No, sir. HOLLIS: Then why did you run? ELI: Because everybody said she did.
[beat 7] A long silence. Salt ticks in the heat. Outside, wind starts pulling at the tin roof.
[beat 8] HOLLIS: I walked forty miles for a killer. MERCY: And now? HOLLIS: Now I've got a witness and a thief and a sack of money that belongs to a dead man's widow. MERCY: That sounds like a mess, Marshal. HOLLIS: It sounds like a trial. MERCY: You'd put a fifteen-year-old on a stand against his own blood? HOLLIS: I'd put the truth on a stand. He's just how it gets there.
[beat 9] ELI: I'll do it. MERCY: Eli -- ELI: I'll do it, Miss Mercy. Somebody ought to say it out loud.
[beat 10] Mercy slides off the altar rail. She folds the knife and sets it on the salt block, handle toward Hollis. MERCY: Then I suppose I'm in your custody. HOLLIS: I suppose you are.
[beat 11] She holds out her wrists. He doesn't take them. He lifts the rifle, turns, and opens the chapel door to a white and blinding sky. HOLLIS: Walk with me. It's forty miles. MERCY: And the boy? HOLLIS: He walks too.
[beat 12] The three of them step out into the glare.

### SCENE s00923 | INT. BEEKEEPING DIVISION, MERIDIAN LOGISTICS ROOFTOP - DAY
Characters: DESMOND PRYCE-ADEBAYO, LUCINDA HOLT, GREG, SALAZAR, WINIFRED OKONKWO
[beat 0] Forty hives. One mandatory synergy workshop. Everybody in veils.
[beat 1] DESMOND PRYCE-ADEBAYO (40s, VP of Alignment) paces with a clicker. He clicks it at nothing. DESMOND: Our bees are our people. Our people are our bees.
[beat 2] His assistant, LUCINDA HOLT (20s), scribbles. She is already stung twice. She keeps writing.
[beat 3] Across the hives, GREGORIO "GREG" SALAZAR (50s, warehouse lead) glares through mesh. Beside him, WINIFRED OKONKWO (30s, HR) holds a smoker like a weapon. GREG: Nobody asked for bees. WINIFRED: Everyone voted for bees. DESMOND: Thank you both. Circle back offline.
[beat 4] A hive hums louder. He grins. It is not a grin of confidence.
[beat 5] LUCINDA: Q3 goals: don't die.

### SCENE s00924 | EXT. TELEGRAPH OFFICE, PRAIRIE JUNCTION - DAY
Characters: ZEKE, MORROW, TOMAS ESQUIVEL, BILLIE, TATE, DISPATCHER
[beat 0] A single-room telegraph shack beside the railroad water tower, its porch sagging. Heat shimmers off the tracks. A pinto horse is tied to the rail, flicking flies.
[beat 1] Inside the open door, EZEKIEL "ZEKE" MORROW (50s, stationmaster, sleeve garters, thick spectacles) sits at the key. The sounder chatters. He copies down a message, then looks up as hoofbeats thunder in.
[beat 2] TOMAS ESQUIVEL (20s, deputy, hat low) swings off his horse, ties it badly, and bursts onto the porch, while behind him a lean stranger, WILHELMINA "BILLIE" TATE (30s, drover's coat, a rifle in the crook of her arm) rides up slowly and stays in the saddle, watching the street. TOMAS: Zeke! Is it true? ZEKE: Sit down, son. TOMAS: Is it true they're coming here?
[beat 3] The sounder chatters again. Zeke raises a hand for quiet, writes, and then reads aloud. ZEKE: Tower says the Harlan gang crossed the river an hour ago. DISPATCHER: Hold the junction. Do not engage. Repeat, do not engage. TOMAS: Do not engage? They'll burn the depot.
[beat 4] Billie dismounts, walks up the steps, and without a word takes the telegram from Zeke's hand and reads it. Tomas stares at her rifle. Zeke takes off his spectacles and wipes them on his sleeve.
[beat 5] BILLIE: Where's the sheriff? TOMAS: Dead. Fever, three days back. BILLIE: Then you're the law. TOMAS: I'm twenty-two. BILLIE: Today you're the law.
[beat 6] A rider appears at the end of the street, then another, then five. Dust rises behind them. Tomas draws his pistol and his hand shakes. Zeke slides under the desk.
[beat 7] Billie raises the rifle, levels it, and fires once. The lead horse rears, and the riders scatter behind the water tower.
[beat 8] TOMAS: You hit him! BILLIE: I hit the horse. Don't thank me yet.
[beat 9] Silence. Then a white handkerchief appears on a rifle barrel from behind the tower. ZEKE: Is that what I think it is? BILLIE: Somebody wants to talk.
[beat 10] Tomas lets out a breath that is almost a laugh. Billie lowers the rifle but does not unload it.

### SCENE s00925 | EXT. CHURCH BELFRY, HOLLOWED VILLAGE - DAY
Characters: SERGEANT NIKOLAI VASSILIEV, PRIVATE ANNELIESE BRANDSTETTER, PRIVATE YUSUF DEMIR, CORPORAL HARLAN PIKE, SERGEANT
[beat 0] A shattered belfry overlooking a flooded field. A stagnant afternoon. Rain has stopped but the sky has not made up its mind.
[beat 1] SERGEANT NIKOLAI VASSILIEV (30s, tired, frost in his beard) sits on an ammunition crate, cleaning a rifle bolt with a rag, while PRIVATE ANNELIESE BRANDSTETTER (20s, a nurse's armband stitched crooked over her sleeve) rewraps a bandage and a fresh-faced boy, PRIVATE YUSUF DEMIR (19), watches the field through a gap in the stones and a radioman, CORPORAL HARLAN PIKE (40s, headset askew), lights a cigarette, drags on it, hands it to Yusuf, and takes the binoculars back without looking.
[beat 2] A scrap of white cloth drifts across the flooded field, snagged on a pole that bobs and turns in the current. Beneath it, something pale struggles in the water.
[beat 3] SERGEANT: Hold your fire. Let it come. YUSUF: It's a dog, Sergeant. NIKOLAI: It's a dog with a cloth round its neck. Wait. ANNELIESE: It's limping. PIKE: Could be a trick. ANNELIESE: Could be a leg.
[beat 4] The dog stumbles in the water. Anneliese rises, but Nikolai catches her sleeve. NIKOLAI: Wait.
[beat 5] She waits. Pike mutters into the handset, lowers it, and shrugs. Yusuf passes the cigarette back. Nikolai sets his rifle bolt on the crate, wipes his hands, and nods once.
[beat 6] NIKOLAI: Go and get it.
[beat 7] Anneliese and Yusuf start down the stone steps together. Pike watches them go. Nikolai goes back to the bolt.
[beat 8] PIKE: You'd have let it drown. SERGEANT: I'd have let it choose.
[beat 9] He slides the bolt home. It clicks.

### SCENE s00926 | INT. SIGNAL BUNKER, MOUNTAIN PASS - NIGHT
Characters: CAPTAIN ISADORA REYES-WINTHROP, LIEUTENANT KOFI ASANTE-BRIGGS, COMMAND
[beat 0] A concrete cell the size of a freight elevator. One bare bulb. A field radio on a shelf, its dial glowing amber. Frost feathers the inside of a rifle slit.
[beat 1] CAPTAIN ISADORA REYES-WINTHROP (30s, grey streak in black hair, eyes like cold coins) sits on an ammo box with her boots off, rubbing her feet. Opposite her, LIEUTENANT KOFI ASANTE-BRIGGS (20s, still wearing his helmet, as if afraid to take it off) stares at the radio.
[beat 2] It hisses. A voice breaks through. COMMAND: All stations, cease fire. Repeat, cease fire. It's over.
[beat 3] Neither moves. KOFI: Captain? ISADORA: I heard. KOFI: Is it a trick? ISADORA: Probably not.
[beat 4] She pulls her socks back on, slowly. He finally removes his helmet. His hair is wet with sweat.
[beat 5] COMMAND: Acknowledge, bunker seven.
[beat 6] Isadora lifts the handset, lets her thumb hover, and sets it down again. ISADORA: Give me a minute.

### SCENE s00927 | INT. COUNTY COURTHOUSE, SMALL CLAIMS - DAY
Characters: MAN, JUDGE PRISCILLA OYELOWO-HART, JUDGE, FELIPE ARRIAGA, DUTCH, CLERK BARNABY SKOLNICK
[beat 0] Fluorescent lights. A radiator knocking. Four chairs and a table.
[beat 1] A MAN in a rumpled tan jacket sits alone at the defendant's table, studying his own thumbs.
[beat 2] JUDGE PRISCILLA OYELOWO-HART (60s) enters, sits, and bangs the gavel once. JUDGE: We're on the record. Counsel for the plaintiff?
[beat 3] FELIPE ARRIAGA (30s, bright tie) rises. FELIPE: Felipe Arriaga, Your Honor. JUDGE: And the defendant? MAN: Just me, ma'am. JUDGE: Name for the record. MAN: Dutch Halloran.
[beat 4] JUDGE: Mr. Halloran, you're unrepresented? DUTCH: Yes, ma'am. I figured the truth doesn't need a lawyer. JUDGE: It usually needs one.
[beat 5] At the back of the room, CLERK BARNABY SKOLNICK (50s) stifles a laugh. Felipe sits and Dutch rises at the same moment.
[beat 6] FELIPE: Your Honor, my client withdraws the claim. DUTCH: Your Honor, I'd like to pay it.
[beat 7] The Judge looks from one to the other. She sighs and lowers the gavel. JUDGE: Nobody leaves until I understand why.

### SCENE s00928 | INT. MUNICIPAL CLOCK TOWER, MECHANISM ROOM - NIGHT
Characters: SPARROW, OKONKWO-REID, PATSY, VELLACOTT
[beat 0] Brass wheels the size of wagon tires turn in the dark, each tooth polished by a century of oil. A catwalk skirts the gears. Below, behind a steel grate, the vault of the Merchants' Exchange sleeps.
[beat 1] SILAS "SPARROW" OKONKWO-REID (40s, silver mustache, gloves the color of old cream) works a hand drill into the vault grate with the patience of a watchman. Beside him, a canvas roll of tools. Behind him, the great pendulum swings. SPARROW: Three and a half minutes, old girl. Don't fail me now.
[beat 2] The drill bites through. He blows the dust away and lifts the grate. He smiles.
[beat 3] Footsteps on the stair. Quick, light. Sparrow freezes, drops the drill, and slides a hand toward his coat.
[beat 4] PATRICIA "PATSY" VELLACOTT (30s, bobbed wig, a pearl-handled revolver at her hip) appears on the landing, unhurried, and gives him a small wave. SPARROW: Patsy! You were meant to be at the bank. PATSY: The bank was dull, Sparrow. You were slowing. SPARROW: I'm precise. It is a different thing. PATSY: The watchman makes his round in four minutes. SPARROW: Then we have three and a half.
[beat 5] She crouches beside the open grate and peers into the dark. PATSY: Sparrow, you beautiful old crook. SPARROW: Flattery will cost you ten percent.
[beat 6] The pendulum swings. The great clock begins to chime midnight, deafening in the cramped room. They freeze. PATSY: That's not on the schedule! SPARROW: Nothing is on the schedule, Patsy!
[beat 7] Below, in the vault, a light snaps on. A heavy door opens. Boots.
[beat 8] PATSY: Sparrow, tell me that's the watchman. SPARROW: It's the watchman. PATSY: You're lying. SPARROW: Yes.
[beat 9] She draws the pearl-handled revolver at last, grinning like a girl at a fair. PATSY: Ten percent off the top, then. SPARROW: Naturally. Run.

### SCENE s00929 | INT. FROZEN FOOD WAREHOUSE, WALK-IN FREEZER - NIGHT
Characters: DELPHINE KOWALCZYK-ABARA, TOBY, FENWICK
[beat 0] Minus twenty. Breath clouds. Pallets of frozen pierogi stacked to the rafters.
[beat 1] DELPHINE KOWALCZYK-ABARA (30s, parka, safecracker's fingertips) kneels at a steel floor safe. Stethoscope on the dial.
[beat 2] Click. Click. Click. She stops. Listens. Click.
[beat 3] The heavy door groans. TOBIAS "TOBY" FENWICK (20s, lookout, ski mask rolled up) slips in, hopping from foot to foot. TOBY: My toes are gone. DELPHINE: You've got more. TOBY: How long? DELPHINE: Quiet.
[beat 4] Click. TOBY: This is going well. DELPHINE: It's going fine. TOBY: Too well. Nobody's here. DELPHINE: Nobody's here because it's a freezer.
[beat 5] She turns the dial. The safe door swings open.
[beat 6] Inside, empty. Just a single index card. DELPHINE: "Sorry. -- Management." TOBY: They knew! DELPHINE: They knew.
[beat 7] The freezer lights snap off. Dark. Then back on, bright. The heavy door is closed.
[beat 8] Outside, a latch clicks. A padlock.
[beat 9] TOBY: Delphine? DELPHINE: Don't. TOBY: We're locked in. DELPHINE: I said don't.
[beat 10] She pockets the card. Pulls her hood tight. Looks up at the pierogi. DELPHINE: At least we won't starve.

### SCENE s00930 | INT. HOSPITAL LAUNDRY ROOM, BASEMENT LEVEL - NIGHT
Characters: NURSE DOLORES FAIRWEATHER-NKEMELU, SAMANTHA VOSS-ITO, LAUNDRY SUPERVISOR BERNADETTE QUILLON, KESTUTIS BALODIS, ROSAURA MENDOZA-LIN
[beat 0] Steam, lint, the long sigh of industrial dryers. Wire carts of folded scrubs stand in rows like pale choirs. A radio on a shelf murmurs a ball game no one is following.
[beat 1] NURSE DOLORES FAIRWEATHER-NKEMELU (50s, reading glasses on a beaded chain) sits on an overturned bucket, a clipboard on her knees. Across from her, DR. SAMANTHA VOSS-ITO (30s, exhausted, hair half out of its clip) leans against a warm machine with her eyes closed. They have come down here to escape the ward for ten minutes, and neither has said so. A third woman, LAUNDRY SUPERVISOR BERNADETTE QUILLON (60s, forearms like rope), folds a sheet with the metronomic calm of someone who has done it forty thousand times. Near her, two younger orderlies stack towels: KESTUTIS BALODIS (20s, tall, a shy stammer) and ROSAURA MENDOZA-LIN (20s, a bright scarf around her hair).
[beat 2] DOLORES: Fourteen's stable. She asked for tea. SAMANTHA: She can have tea. DOLORES: She wants it at four a.m. SAMANTHA: Then she wants it at four a.m.
[beat 3] BERNADETTE: Kettle's by the dryer. Help yourself. DOLORES: You're an angel, Bernadette. BERNADETTE: I'm a woman with a kettle.
[beat 4] Samantha opens her eyes. She watches Dolores pour water into a chipped mug, then hand it to Rosaura, who nods and slips away. Dolores sits again; Bernadette snaps a sheet in the air and it floats down in a perfect rectangle.
[beat 5] KESTUTIS: Dr. Voss? M-may I ask? SAMANTHA: Of course. KESTUTIS: Does it g-get easier?
[beat 6] Samantha smiles, tired but kind. Dolores glances at Bernadette. Bernadette keeps folding. The dryer ticks down. Nobody answers him for a long moment.
[beat 7] SAMANTHA: It gets quieter. KESTUTIS: Is that the same? DOLORES: Not really, love.
[beat 8] The radio announcer shouts about a home run. Everyone lets it fill the silence.

### SCENE s00931 | INT. PARKING STRUCTURE, LEVEL P4 - NIGHT
Characters: KAZ, DRAGOMIR, LEO, MARCHETTI, AGENT CALLUM BRIGHTWATER, AGENT PRIYA RAMAKRISHNAN, CONSULTANT, OSWALD PELL, BULLHORN
[beat 0] Concrete ramps spiral up into the dark. Sodium lights hum. Rain falls through the open side of the structure and pools in the drains.
[beat 1] A black sedan idles at the far end, headlights off. KAZIMIERZ "KAZ" DRAGOMIR (40s, black overcoat, a briefcase handcuffed to his wrist) stands beside it, checking his watch. A step behind him, his driver, LEOPOLDINA "LEO" MARCHETTI (30s, earpiece, one hand inside her jacket).
[beat 2] A second car rolls up the ramp. Stops. Its doors open. AGENT CALLUM BRIGHTWATER (30s, FBI windbreaker under a coat) climbs out, followed by AGENT PRIYA RAMAKRISHNAN (30s, a notebook she isn't writing in) and a third man, a CONSULTANT named OSWALD PELL (60s, cardigan, cane).
[beat 3] KAZ: You're early, Agent Brightwater. CALLUM: You're late, Mr. Dragomir. LEO: Kaz, we should go. KAZ: We're fine, Leo.
[beat 4] PRIYA: Cal, where's the exchange? CALLUM: Be patient, Pri.
[beat 5] OSWALD: There is no exchange.
[beat 6] Priya turns to stare at him. Callum's hand closes slowly on the grip of his sidearm. PRIYA: Say that again. OSWALD: The briefcase is empty, my dear. It's always been empty. KAZ: That's a lie -- LEO: Kaz, he's --
[beat 7] CALLUM: Everybody, hands where I can see them! KAZ: Leo, don't! LEO: Drop it, Brightwater! CALLUM: Priya, back off! PRIYA: Cal, I'm not --
[beat 8] A dozen heartbeats. Rain drums. Then Oswald taps his cane twice on the concrete, almost courteously. OSWALD: Thirty seconds.
[beat 9] Above them, engines start. Headlights flare on every level, blinding, a cathedral of white. Dozens of silhouettes line the railings. A bullhorn crackles. BULLHORN: Federal agents. Drop your weapons.
[beat 10] PRIYA: Cal, those aren't ours. CALLUM: Whose are they? OSWALD: Mine.
[beat 11] Kaz laughs. It is a short, cracked laugh. He unlocks the handcuff, opens the briefcase, and tilts it toward them.
[beat 12] Inside: a single brass key. KAZ: Gentlemen, ladies. Last chance to leave.
[beat 13] Nobody moves. Leo steps toward Priya. Callum keeps his gun on Oswald.
[beat 14] PRIYA: Who do you work for? LEO: Whoever pays. CALLUM: And you? OSWALD: Whoever pays more.
[beat 15] The headlights go dark all at once. Gunfire.

### SCENE s00932 | INT. OBSERVATORY DOME, COPPER-ROOFED - NIGHT
Characters: NADIA, ORLOVA-SUTTON, RAFAEL TORRES-IBEKWE, INSPECTOR AUGUSTINE LEBLANC
[beat 0] The great telescope has been dead for decades, a gutted whale of brass and glass pointing at a slot of stars. Rain ticks against the copper. The air smells of mouse and old oil.
[beat 1] NADEZHDA "NADIA" ORLOVA-SUTTON (40s) kneels on the iron floor with a tablet glowing in her hands. She wears a lab coat over a wool jumper, and her hair is wet. She types fast, then stops, then types again. Beside her, RAFAEL TORRES-IBEKWE (30s) holds a flashlight in his teeth and a cable in each fist, feeding wire into the telescope's mouth.
[beat 2] He spits the flashlight into his palm. RAFAEL: Two minutes. NADIA: Everyone stays quiet. Nothing on the radio.
[beat 3] There is no one else. She says it anyway, to the dome, to the ghosts of astronomers. Rafael glances at her but says nothing. NADIA: Come on, come on, come on.
[beat 4] He hauls himself up onto the telescope's housing and tightens a clamp. She taps the tablet. A green bar crawls across the screen.
[beat 5] RAFAEL: Eighty percent? NADIA: Seventy-eight. RAFAEL: That's not eighty. NADIA: Rafa, I know what it is.
[beat 6] He climbs down, wipes his palms on his trousers. Overhead, rain gathers force. She does not look up. He does.
[beat 7] Metal rings on the spiral stair outside. Slowly, deliberately, someone is climbing. RAFAEL: Nadia. NADIA: I hear it.
[beat 8] He kills the flashlight. The dome goes dark except for the glowing tablet and a thin blade of starlight. Her thumb hovers over the screen.
[beat 9] The door at the foot of the stair swings open. A figure fills it: INSPECTOR AUGUSTINE LEBLANC (60s, a long coat dripping rainwater, a lantern in one hand). He sets the lantern on the floor and holds up both palms. AUGUSTINE: You'll want to finish that. I'm only here to watch.
[beat 10] She looks at Rafael. Rafael looks at her. Neither lowers the cable. NADIA: Don't trust him. RAFAEL: Of course I don't.
[beat 11] Ninety percent. Ninety-five. He stands very still, the way a man does in front of a dog he has not yet decided about. AUGUSTINE: When it's done, I'll walk you out. Not before.
[beat 12] The bar fills. The tablet chimes once.
[beat 13] Above them, the telescope shudders and, for the first time in forty years, begins to turn.

### SCENE s00933 | EXT. GLASS ORCHARD ON THE EDGE OF THE WORLD - DAWN
Characters: OLD MARGUERITE THORNBURY-ANYANWU, KNIGHT, SIR DESMOND ALDERWICK-OKAFOR, LYRA FAIRCHILD, THE COLLECTOR
[beat 0] Trees of blown glass stand in orderly rows, each leaf a thin pane of green, each fruit a drop of amber light. A pale sun climbs the horizon and the whole orchard begins to sing, a thin high note like a wet finger on a goblet.
[beat 1] At the center of the orchard stands the last living gardener, OLD MARGUERITE THORNBURY-ANYANWU (80s, a patchwork cloak, gnarled fingers wrapped in silk). She tends a single tree with a pair of silver shears.
[beat 2] A cart creaks down the row. In it sits a young KNIGHT, SIR DESMOND ALDERWICK-OKAFOR (20s, dented armor, a bandaged shoulder) with a girl in a blue cloak beside him, LYRA FAIRCHILD (10s, a glass lantern in her lap). The cart stops. Marguerite does not turn.
[beat 3] MARGUERITE: You're early. The fruit isn't ripe. DESMOND: We didn't come for fruit. MARGUERITE: Everyone comes for fruit.
[beat 4] LYRA: We came for the key.
[beat 5] Marguerite sets down her shears. Slowly, she faces them. She studies the girl, then the knight, then the girl again.
[beat 6] MARGUERITE: She has your grandmother's eyes. DESMOND: Whose? MARGUERITE: Hers.
[beat 7] Lyra climbs down from the cart. The orchard hums. A single glass leaf falls and shatters on the ground.
[beat 8] LYRA: My mother said you would know. MARGUERITE: Your mother was a clever child. And a foolish one. DESMOND: Careful, gardener. MARGUERITE: I am always careful, boy. That is why I am still alive.
[beat 9] A shadow slides across the orchard. The glass trees dim. Everything falls quiet, even the song.
[beat 10] Down the far row, wading through a thicket of shards, comes a tall figure in a cloak of crows: THE COLLECTOR (ageless, face half hidden by a mask of white bone). He walks without a sound, and every glass fruit turns toward him as he passes. THE COLLECTOR: Marguerite. You said I was not welcome. MARGUERITE: You are not. THE COLLECTOR: Yet here I am.
[beat 11] He lifts a hand. The glass trees shiver.
[beat 12] Desmond draws his sword and steps between the girl and the stranger, but the Collector's fingers close, and the sword shatters in the knight's hand. LYRA: Desmond!
[beat 13] Desmond staggers. Lyra runs to him and drops the lantern.
[beat 14] It cracks open, and a thin bright flame spills out onto the grass. Marguerite and the Collector both freeze. MARGUERITE: Child, don't -- THE COLLECTOR: Careful, little one.
[beat 15] The flame climbs a glass tree. The tree rings like a bell. Every leaf catches light. Marguerite and the Collector both stagger back as the orchard blazes with color.
[beat 16] They scatter. Desmond hauls Lyra into the cart. Marguerite throws her cloak over her head. The Collector, for the first time, steps back.
[beat 17] THE COLLECTOR: What have you done? MARGUERITE: Reminded it who it belongs to.
[beat 18] The song swells, joyous now. The Collector's bone mask cracks across the brow. He turns and walks back the way he came, crows streaming from his cloak.
[beat 19] Silence. The fire gutters out. The trees stand untouched, brighter than before. DESMOND: Is it over? MARGUERITE: For today.
[beat 20] Lyra picks up the empty lantern, examines it, and holds it out to Marguerite. LYRA: I'm sorry. MARGUERITE: Don't be. It was ready.
[beat 21] She takes the lantern, tucks it under her cloak, and picks up her shears.

### SCENE s00934 | INT. STAGECOACH WAY STATION, DINING ROOM - NIGHT
Characters: AMOS GRISWOLD-TAYLOR, CLEMENTINE ROSSITER, ISIDRO VALDEZ, TOBIAS WREN, NELL HAWTHORNE-BEAR
[beat 0] A low adobe room. A long plank table, a kerosene lamp, five tin plates. Rain drums the roof.
[beat 1] AMOS GRISWOLD-TAYLOR (60s, station keeper) ladles stew. At the table sit the evening's passengers: CLEMENTINE ROSSITER (30s, a widow's veil pushed back), ISIDRO VALDEZ (40s, a drummer with a sample case), and TOBIAS WREN (20s, a seminarian, his collar a size too big). At the head of the table, apart, sits a woman in a trail-worn duster, NELL HAWTHORNE-BEAR (40s). She has not touched her stew.
[beat 2] CLEMENTINE: Is it always this wet in the territory? AMOS: Only when somebody's about to die. ISIDRO: Mr. Griswold, that's not funny. AMOS: Wasn't meant to be.
[beat 3] TOBIAS: Is there a church within fifty miles? AMOS: There's a hole. Used to be a church.
[beat 4] CLEMENTINE: Does anyone here carry a firearm? NELL: I do.
[beat 5] They all look at her. She lifts the lid of her stew bowl, peers inside, and sets it down again. ISIDRO: For what purpose, ma'am? NELL: The usual.
[beat 6] AMOS: More bread, anyone? NELL: Sit down, Amos. He does.
[beat 7] NELL: The man who sold you this stew is not the man whose name is on the door. AMOS: I don't know what you --
[beat 8] NELL: I buried the real Amos Griswold in March. Wasn't a pretty burying.
[beat 9] Nobody moves. The lamp gutters. Isidro's hand slides slowly toward his sample case.
[beat 10] NELL: Don't. ISIDRO: Madam, I -- NELL: I've no quarrel with the three of you. It's only him.
[beat 11] Amos laughs, a dry hoarse sound, and reaches under the table. Nell is faster. A single shot, loud as a door slamming, and the gun in his hand skitters across the floor.
[beat 12] He sits very still, clutching his wrist, and for the first time he looks his real age.
[beat 13] AMOS: Who sent you? NELL: Nobody. I came on my own.
[beat 14] She stands, holsters the revolver, and turns to the others. NELL: Finish your supper. The stage leaves at dawn.

### SCENE s00935 | INT. MENDOZA-FAIRCLOUGH FAMILY KITCHEN - DUSK
Characters: GRANDMOTHER EULALIA MENDOZA, HECTOR FAIRCLOUGH-MENDOZA, NOEMI, TEODORO
[beat 0] A narrow galley kitchen in a house built for a bigger family. Yellowed curtains, a fridge covered in magnets from places no one has visited in years. On the counter, a cake with one candle already melted.
[beat 1] GRANDMOTHER EULALIA MENDOZA (70s, cardigan buttoned wrong) arranges forks into a fan. She stops, straightens them, arranges them again. Her son, HECTOR FAIRCLOUGH-MENDOZA (40s, shirt sleeves rolled, a ring of sweat at the collar) stands at the stove, stirring a pot that has long since stopped needing it. His daughter, NOEMI (16, headphones round her neck, thumbnail polish chipped to nubs), sits at the table peeling a label off a jar in one long unbroken strip. At the end of the table, TEODORO (9, in a school tie knotted too tight) draws a small, careful circle on a napkin, and then another, and then another.
[beat 2] HECTOR: Dinner in five. No one answers. Eulalia moves a fork a quarter-inch.
[beat 3] NOEMI: Is Dad coming? HECTOR: He said he'd try. EULALIA: He always says that.
[beat 4] Teodoro finishes a circle. He draws a line connecting it to the others.
[beat 5] NOEMI: Teo, what is that? TEODORO: It's the table. NOEMI: We're five. There's four chairs. TEODORO: I know.
[beat 6] The label tears. Noemi drops it and leaves the jar on the table. Hector turns off the burner and the pot ticks as it cools.
[beat 7] Eulalia sets down the last fork, and all of them, one by one, look at the empty chair.
[beat 8] NOEMI: Can we please just eat. HECTOR: Noemi -- NOEMI: I said, can we please just eat!
[beat 9] She shoves her chair back. It scrapes. Eulalia flinches. Teodoro does not.

### SCENE s00936 | INT. ICE RINK ZAMBONI GARAGE - EARLY MORNING
Characters: RUDY, OYELARAN-STACK, MARISOL ECHEVERRIA-TANAKA, COACH DAHLIA FENWICK-ABARA, COACH, PHOEBE NAKAMURA-DELACROIX
[beat 0] A cinderblock garage that smells of diesel and frozen rubber. A Zamboni, huge and patient, sits in the center like a sleeping bull. Hockey sticks hang on pegs along the wall, taped blades pointing at the floor.
[beat 1] RUTHERFORD "RUDY" OYELARAN-STACK (60s) sits on an upturned bucket by the machine, a thermos between his knees. He is a big man gone soft, with a face like weathered oak and eyes that have watched ten thousand early mornings. He pours coffee into the thermos lid and offers it to no one in particular.
[beat 2] The side door opens. MARISOL ECHEVERRIA-TANAKA (17) comes in carrying a hockey bag nearly as big as she is. She wears a faded junior-league jersey and holds her skates by the laces.
[beat 3] She sets down the bag. He nods. She nods back. Neither says anything. It is a ritual.
[beat 4] RUDY: Ice is good today. MARISOL: Good how? RUDY: Hard. Fast. Clean.
[beat 5] She laces her skates, standing one foot on the Zamboni's bumper. He sips the coffee and lets her work.
[beat 6] A third figure leans in the doorway: COACH DAHLIA FENWICK-ABARA (40s, quilted parka, a clipboard held like a hymnal). She watches Marisol lace for a moment, then glances at Rudy, who shrugs. COACH: You're early. MARISOL: So are you. COACH: I'm always early. MARISOL: So am I.
[beat 7] The Coach smiles, almost. She sets the clipboard on the hood of the Zamboni.
[beat 8] At the far end of the garage, a second girl is already sitting on the bench, tying her own skates in silence: PHOEBE NAKAMURA-DELACROIX (16). She does not look up. Marisol sees her, and her shoulders tighten, then ease. MARISOL: Hey, Phoebe. PHOEBE: Hey.
[beat 9] That's all.
[beat 10] Rudy puts the lid back on the thermos. He climbs onto the Zamboni and the engine coughs awake, roaring in the low room. The big door rolls up, and a gray light pours across the ice.
[beat 11] Marisol steps out onto the surface first. Phoebe follows. Nobody speaks. The blades cut their lines in the fresh ice.

### SCENE s00937 | EXT. ABANDONED DRIVE-IN SCREEN, ROOFTOP OF THE CONCESSION STAND - NIGHT
Characters: JUNE, OKAFOR-LINDQVIST, DEX, ALVARADO-CHEN, MAEVE O'DONNELL-BASU, TOM, REYNOLDS
[beat 0] A cracked concrete rooftop under a vast, wheeling sky. Below, the lot is a field of rusted speaker posts. Above them, the screen towers, blank and enormous, a white rectangle hung against the stars.
[beat 1] Four teenagers sprawl on the tar paper with a cooler and a boombox playing something tinny and joyous. JUNIPER "JUNE" OKAFOR-LINDQVIST (17, scraped knees, a purple streak in her hair) balances on the parapet with her arms out like wings. DEXTER "DEX" ALVARADO-CHEN (18, glasses, a sunburn in the shape of a watch) sits cross-legged, aiming a laser pointer at the screen. MAEVE O'DONNELL-BASU (17, a denim jacket three sizes too big) drums a beat on the cooler. And TOMASZ "TOM" REYNOLDS (18, a letterman jacket without a letter) lies flat on his back, eyes closed, a grin spreading slowly across his face.
[beat 2] JUNE: We are the last people on Earth! DEX: You're going to fall. JUNE: I'm going to fly. MAEVE: Please don't fly.
[beat 3] TOM: Everyone shut up. This is the best night of my life. DEX: You said that last week. TOM: It was true last week too.
[beat 4] The laser dot dances across the white screen, a red comet looping among the stars. June leaps from the parapet to the roof, landing in a crouch, whooping.
[beat 5] JUNE: Nobody's ever going to know we were here! MAEVE: Is that supposed to be sad? DEX: No. I think it's the opposite.
[beat 6] June grabs Maeve's hands and spins her. The boombox swells. Tom sits up, laughing, and throws a can of soda. Dex ducks. It bursts against the screen's concrete foot below, a tiny sticky firework.
[beat 7] TOM: Direct hit! MAEVE: Please never end. DEX: It won't, not for us.
[beat 8] They fall quiet, laughing still, panting, four small figures on a roof beneath the enormous empty screen.

### SCENE s00970 | INT. DROWNED CATHEDRAL BELFRY - TIDE HOUR
Characters: ORSOLYA, KEZIAH
[beat 0] Green water laps the third stair. Moonlight through broken tracery. One huge bell, furred with barnacles.
[beat 1] ORSOLYA (30s, salt-white braid, bone-needle at her belt) crouches on a beam. Soaked. Grinning.
[beat 2] KEZIAH (20s, half-fox ears, patched coat) hauls himself through the window. Drips everywhere.
[beat 3] ORSOLYA: You're late, Kez. KEZIAH: The tide was early. ORSOLYA: The tide is never early. You were.
[beat 4] He lifts a lantern. Inside, a trapped blue flame. KEZIAH: Got it. Moon-ember. Off the sleeping tax-collector himself.
[beat 5] She snatches it. Laughs. Kisses his forehead. ORSOLYA: Kezi. You beautiful thief.
[beat 6] The bell hums. Low. Wrong.
[beat 7] KEZIAH: Orsolya. That's not us. She freezes. So does he.
[beat 8] Water rises. Fast. Knee-deep. Waist.
[beat 9] ORSOLYA: Take the rope. KEZIAH: Not without you!
[beat 10] She shoves him. Hard. He grabs the bell-rope, swings, slams against stone. Hisses.
[beat 11] ORSOLYA: Ring it! KEZIAH: It'll wake the whole drowned choir! ORSOLYA: Better them than the tide!
[beat 12] He hesitates. Then pulls.
[beat 13] DONG. The sound rolls out like thunder under glass. The water stops. Shivers. Retreats.
[beat 14] Silence. They stare at each other. Then both burst out laughing.
[beat 15] KEZIAH: Never again. ORSOLYA: Liar.
[beat 16] Somewhere below, a choir begins to sing. Off-key. Furious.
[beat 17] She grabs his hand. They run.

### SCENE s00971 | INT. HOLLOWED ASTEROID ORCHARD - SHIFT NIGHT
Characters: TAVITA, NELL, ISAAK, MEI-LIN, OSEI
[beat 0] A cavern of rock lit by amber grow-lamps. Rows of dwarf apple trees bolted to drifting soil trays. Pollen-drones hum like tired insects.
[beat 1] TAVITA (50s, broad, vacuum-scarred hands) stands at a control stump. NELL (20s, sharp, ink-stained fingers) clutches a tablet. ISAAK (60s, wiry, one cloudy eye) leans on a ladder. MEI-LIN (30s, braided cables in her hair) hovers upside down. OSEI (teen, oversized pressure jacket) grips a pruning rod.
[beat 2] TAVITA: Hull pressure's dropping in the north orchard. Everyone stays calm.
[beat 3] NELL: Calm is a luxury. The seal's gone, Tavita. I can hear it. ISAAK: Then shut the bulkhead. Trees can bloom again.
[beat 4] MEI-LIN: Not if we're on the wrong side of it. Osei's still holding row nine. OSEI: I can let go. I can run. TAVITA: You'll run when I say run.
[beat 5] NELL: Forty seconds of air at that leak rate. Maybe thirty.
[beat 6] ISAAK: Then thirty is what we use. Mei-Lin, drones to the breach. Nell, patch kit. Osei, row nine, now.
[beat 7] MEI-LIN: Drones are going. They won't hold it. TAVITA: They don't have to hold it. They only have to buy us the walk.

### SCENE s00972 | INT. FERRY CAFETERIA - NIGHT CROSSING
Characters: DOLORES, PAZ, HENRIK
[beat 0] Orange plastic booths. A coffee urn rattles with the engine. Rain on the windows. Nobody else aboard.
[beat 1] DOLORES (60s, black cardigan, rosary wound around her wrist) sits stiff. Across from her, PAZ (40s, leather jacket, same jaw) peels a label off a water bottle.
[beat 2] HENRIK (50s, rumpled suit, folder under his arm) arrives with two paper cups. Sets one down. Hesitates. Sets the other down too.
[beat 3] She doesn't touch hers. She watches her sister.
[beat 4] HENRIK: Your mother's will is short. DOLORES: Mine, she says. My mother. Not yours.
[beat 5] Paz stops peeling. She looks up. PAZ: Our mother.
[beat 6] She slides the label across the table. A small, damp scrap.
[beat 7] HENRIK: It leaves the house to one of you.
[beat 8] She laughs. Short. Ugly. The other stays silent.
[beat 9] DOLORES: Which one. HENRIK: The one who stayed.
[beat 10] Paz stands. Sits again. Her knee bounces under the table.
[beat 11] PAZ: Twenty years she called me every Sunday. DOLORES: And I washed her every morning.
[beat 12] She slams a palm on the Formica. The urn rattles louder. Henrik flinches, opens the folder, closes it.
[beat 13] HENRIK: There's a letter. She asked me to read it only if you both were present. DOLORES: Read it, then.
[beat 14] He unfolds the page. Clears his throat. Her eyes are already wet. The other's are not.
[beat 15] HENRIK: "Neither of you gets the house."
[beat 16] Silence. The ferry horn sounds, long and low.
[beat 17] She reaches for the cup. Her hands shake. Paz takes the other cup, drinks, and nods once at the window.
[beat 18] PAZ: She never could make a decision. DOLORES: She made this one.

### SCENE s00973 | INT. GLASS-FOREST APIARY TOWER - DUSK
Characters: WYNFRED, SABLE, LUCAN
[beat 0] Hexagonal windows hum with ten thousand bees. WYNFRED, an old beekeeper in a veil of moth silk, pours smoke into a brass censer. SABLE, a young storm-witch with wet hair, sits on the hive-table. LUCAN, a knight with a cracked pauldron, stands by the stairs.
[beat 1] WYNFRED: You came a long way for honey.
[beat 2] LUCAN: I came for the queen. SABLE: He means the hive's queen. Not the crown. WYNFRED: Does he? LUCAN: I mean what I said. SABLE: You mean what you were told to say.
[beat 3] LUCAN: The king is dying. WYNFRED: Kings do. LUCAN: His physician says only royal jelly can hold the fever.
[beat 4] SABLE: And the physician is lying. LUCAN: You don't know that. SABLE: I know the smell of a man who wants a hive burned. WYNFRED: Quiet, child. Let him say it.
[beat 5] LUCAN: I was told to take the queen. Alive if she'd come. Dead if not. WYNFRED: And you believed it. LUCAN: I believed the king. SABLE: The king hasn't spoken in a month.
[beat 6] LUCAN: Then who sent me? WYNFRED: Ask the hive.
[beat 7] The humming deepens. Wynfred sets down the censer.
[beat 8] LUCAN: I won't kill a queen of bees. SABLE: Then what will you do? LUCAN: I'll warn the king. WYNFRED: He can't hear you.
[beat 9] LUCAN: Then I'll make the palace hear! SABLE: Then I will! LUCAN: Then I will!
[beat 10] WYNFRED: Both of you, stop. LUCAN: He is my king. SABLE: And this is my home.
[beat 11] WYNFRED: Then go together. Fire answers fire. Bees answer storm.

### SCENE s00974 | INT. PARKING GARAGE STAIRWELL - NIGHT
Characters: LOTTE VANTERPOOL
[beat 0] Concrete. Flickering tube light. A door slams two floors below.
[beat 1] LOTTE VANTERPOOL (30s, trench coat, press badge) freezes mid-step. Phone in hand.
[beat 2] Footsteps. Climbing. Fast.
[beat 3] She jabs the screen. Voice memo. LOTTE: If you hear this, I'm already in the stairwell of Level B. The ledger is in the glovebox of the grey Fiat.
[beat 4] She kills it. Backs up. Hits the rail. Whispers. LOTTE: Come on, come on.
[beat 5] The footsteps stop. Right below her. Waiting.
[beat 6] She doesn't breathe. A key jingles.
[beat 7] Then a little girl's laugh echoes up. A father's voice, humming.
[beat 8] They pass. Door opens. Closes. Gone.
[beat 9] Lotte slides down the wall. Laughs. Wipes her eyes. LOTTE: Idiot.
[beat 10] She replays the memo. Deletes it. Stands. Walks on.

### SCENE s00975 | INT. ROLLER RINK - AFTER CLOSING
Characters: DEZ, MARISOL, TOBY
[beat 0] Disco ball still turning. Chairs up on tables. Carpet-covered walls.
[beat 1] DEZ (16) sits on the skate counter in one rental skate. He holds the other. MARISOL (16) leans on the rail, arms crossed. TOBY (15) lies flat on the floor, staring at the ceiling.
[beat 2] DEZ: So that's it. Last night. MARISOL: Dez, the rink is closing. Not you. TOBY: It's basically you. You were born here.
[beat 3] DEZ: Rink rat. That's what Mr. Pruitt called me. MARISOL: He called me that too. TOBY: He called everyone that.
[beat 4] DEZ: My first kiss was by the snack bar. MARISOL: It was me. DEZ: It was a hot dog. I was kissing a hot dog. TOBY: I was there. It was sad.
[beat 5] MARISOL: We'll find somewhere else. DEZ: There isn't anywhere else. TOBY: There's the parking lot. MARISOL: The parking lot has no music. TOBY: I'll bring a speaker.
[beat 6] He sits up. Grins. She lets her arms drop.
[beat 7] DEZ: Fine. Parking lot. Saturdays. MARISOL: Saturdays.
[beat 8] Dez slides the second skate on. Stands. Wobbles. Rolls one slow lap, alone, while the ball keeps turning.

### SCENE s00976 | INT. SYNERGY DEPARTMENT - FORMER FUNERAL HOME - MORNING
Characters: PELLINGHAM, GLORIA, SPUD, ADAEZE
[beat 0] Cubicles line the old viewing room. A faux-brass chandelier. A banner reads "WE'RE ALL FAMILY HERE." Coffins serve as supply cabinets.
[beat 1] MR. PELLINGHAM (50s, bow tie, sweating) stands on a velvet kneeler holding a clipboard. GLORIA (40s, reading glasses on a chain) sorts paperclips. SPUD (30s, hoodie) eats cereal from a casket lid. ADAEZE (20s, headset, razor eyes) types without looking.
[beat 2] MR. PELLINGHAM: People! People! Today we pivot. GLORIA: We pivoted yesterday, Mr. Pellingham. SPUD: Twice. Before lunch. MR. PELLINGHAM: Spud, today we pivot to a pivot.
[beat 3] ADAEZE: Is that a metric? MR. PELLINGHAM: Adaeze, it's a mindset. GLORIA: What happened to the mindset? SPUD: It got laid off.
[beat 4] MR. PELLINGHAM: Nobody got laid off. We are right-sizing the horizon. ADAEZE: Gloria, did he say horizon? GLORIA: He said horizon.
[beat 5] MR. PELLINGHAM: I am going to need everyone's quarterly aspirations by noon. SPUD: Mr. Pellingham, I only have a quarterly nap. GLORIA: Spud!
[beat 6] ADAEZE: Put it in the shared folder. MR. PELLINGHAM: Thank you, Adaeze. SPUD: He thanked her. Mark the calendar. GLORIA: Mark it. Under "Funeral".
[beat 7] Mr. Pellingham looks at the banner. Climbs down. Sighs.
[beat 8] MR. PELLINGHAM: Friends, let's just have cake. SPUD: Is it from the last funeral? MR. PELLINGHAM: It's... lemon.

### SCENE s00977 | INT. LIGHTHOUSE GALLEY - POTLUCK NIGHT
Characters: ROSALIND, EDMUND, CHIKA, DMITRI, BEA, AUNT FENELLA
[beat 0] A cramped round kitchen at the base of a lighthouse. Casserole dishes crowd every surface. A foghorn blares every ten seconds.
[beat 1] ROSALIND (60s, apron, vengeful smile) guards a bundt cake. EDMUND (60s, golf shirt) carves a ham. CHIKA (30s, nose ring, crisp linen) pours wine. DMITRI (40s, ponytail, guitar case) leans on the counter. BEA (20s, headphones around neck) scrolls her phone.
[beat 2] ROSALIND: I'm only saying that some of us brought homemade.
[beat 3] EDMUND: Rosalind, it's the same casserole you brought to the last four potlucks. ROSALIND: It's a family recipe. CHIKA: It's from a can. DMITRI: Cream of mushroom. I smelled it in the parking lot.
[beat 4] BEA: Aunt Rosalind, are you aware you're yelling? ROSALIND: I am explaining. EDMUND: Over the foghorn.
[beat 5] ROSALIND: Because I'm tired of being the villain in this lighthouse! CHIKA: Nobody said villain.
[beat 6] DMITRI: I said cannibal. The cake looks human. ROSALIND: It's a bundt!
[beat 7] EDMUND: Honey, put the knife down. ROSALIND: This is a cake server! BEA: It's honestly a very sharp cake server.
[beat 8] The door bangs open. AUNT FENELLA (80s, fur stole, cane held like a spear) sweeps in, trailing mist. Everyone stops.
[beat 9] AUNT FENELLA: I'm told someone has been slandering my casserole. ROSALIND: Your casserole? AUNT FENELLA: Cream of mushroom, 1974. I invented it at this very counter.
[beat 10] EDMUND: Nobody told us that. CHIKA: Why would anyone tell us that? DMITRI: Because they're afraid of her. AUNT FENELLA: Quite right.
[beat 11] BEA: I'm getting cake. ROSALIND: Nobody touch the cake.

### SCENE s00978 | EXT. LEVIATHAN BACK MARKET - DAWN
Characters: YARROW, CINDERMAE, BRISK, SEUN
[beat 0] A sleeping sea-beast the size of an island. Stalls on its spine. Rigging lashed to ribs. The skin breathes slowly.
[beat 1] YARROW (20s, sea-glass eyes, ragged oilskin) crouches by a stall of bottled winds. CINDERMAE (70s, silver teeth, coal-black shawl) presides behind the counter.
[beat 2] BRISK (teen, gull on his shoulder) scrambles up a rope ladder. Out of breath. SEUN (40s, copper armor, spear of whalebone) lurks at the edge, watching.
[beat 3] BRISK: Yarrow! They're coming! YARROW: Who? BRISK: The tide-wardens! CINDERMAE: Quiet, boy. You'll wake the beast.
[beat 4] The leviathan's skin ripples. Stalls shudder. Bottles clink.
[beat 5] YARROW: How many? BRISK: Six. Maybe seven.
[beat 6] SEUN: Eight.
[beat 7] They turn. Seun steps forward, spear lowered. SEUN: And I am the first.
[beat 8] CINDERMAE: Seun. You were a friend of this market. SEUN: I was a friend of the market. The sea-king is the market's master.
[beat 9] YARROW: You swore an oath to the wind. CINDERMAE: She swore an oath to the wind. YARROW: She swore an oath to the wind. SEUN: Oaths bend.
[beat 10] BRISK: The gull says run.
[beat 11] Seun hurls the spear. It bursts a jar of tempest. Wind howls out. The leviathan groans awake. The whole market tilts.
[beat 12] YARROW: Hold on!
[beat 13] Everyone grabs rope.

### SCENE s00979 | INT. WAX MUSEUM - AFTER HOURS
Characters: INSPECTOR CALLOWAY, MADAME ZELENKA, PERCIVAL, LADY MARGUERITE, TOMMASO
[beat 0] Rows of figures in fading finery. A single lantern. Dust on the Duke of Wellington's boots.
[beat 1] INSPECTOR CALLOWAY (50s, rumpled overcoat, notebook) stands beside a plinth. MADAME ZELENKA (60s, turban, jeweled fingers) sits stiffly on a chaise. PERCIVAL (30s, curator's smock) wrings a handkerchief. LADY MARGUERITE (40s, widow's veil) holds a fan. TOMMASO (20s, night guard's cap) fidgets by the door.
[beat 2] CALLOWAY: Let us review. The Duke was found at midnight with his head missing. PERCIVAL: It is the wax, Inspector. Wax is delicate. CALLOWAY: It is also not usually missing.
[beat 3] MARGUERITE: I was admiring the Duke at eleven. He was whole. ZELENKA: I felt a presence. A cold one. It lingered. TOMMASO: I locked the doors at ten. No one came in.
[beat 4] CALLOWAY: Then no one went out. Which means the head is here. PERCIVAL: You can't think one of us...
[beat 5] CALLOWAY: I think a head cannot walk. Madame Zelenka, your turban looks heavy. ZELENKA: It is Persian silk, Inspector. CALLOWAY: It is lumpy.
[beat 6] She hesitates. Unwinds the cloth. Inside, nothing but hair. She smiles thinly.
[beat 7] MARGUERITE: Inspector, my fan.
[beat 8] CALLOWAY: Lady Marguerite, your veil has stopped moving.
[beat 9] She stiffens. Tommaso drops his cap. Percival laughs, high and tinny.
[beat 10] PERCIVAL: It's under the chaise, I'm afraid. I only meant to repair the nose.

### SCENE s00980 | EXT. SALT FLAT STAGE STATION - NOON
Characters: SILAS MORROW, CATALINA VEGA
[beat 0] White ground, white sky. A lone shack. A dead well. Heat shimmer.
[beat 1] SILAS MORROW (50s, dusty duster, gray stubble) sits on a bench with a rifle across his knees. CATALINA VEGA (30s, wide hat, twin pistols) stands in the road ten paces away.
[beat 2] CATALINA: You're a long way from Tucson, Silas. SILAS: I was told you'd be here. CATALINA: By who? SILAS: By a man who owed me. CATALINA: He owed you what? SILAS: A reason.
[beat 3] She smiles. Steps forward. He doesn't move.
[beat 4] CATALINA: You killed my brother. SILAS: I did. CATALINA: Why? SILAS: He drew first. CATALINA: He was nineteen. SILAS: So was I, once.
[beat 5] The wind stops. Both of them listen.
[beat 6] CATALINA: Stand up. SILAS: My knees won't allow it.
[beat 7] She draws one pistol. He lifts the rifle. They both freeze, muzzles level.
[beat 8] CATALINA: Last words? SILAS: Tell the boy's mother I'm sorry.
[beat 9] A gunshot. Both flinch. Both dive for cover.
[beat 10] On the ridge, a distant rider tumbles from a horse. The two lie in the salt, breathing. They look at each other.

### SCENE s00981 | INT. DRIVE-IN PROJECTION BOOTH - NIGHT
Characters: RAFAELA, JUNE, KOWALCZYK
[beat 0] A cramped brick box. An old carbon-arc projector clatters. Film cans stacked like pizza boxes. Through the slit window, a giant screen glows over an empty lot.
[beat 1] RAFAELA (17, denim jacket, a lighter in her fist) sits on the stool. JUNE (17, cardigan, hair pinned back) stands at the door. Both are tense.
[beat 2] JUNE: You told me it was just a smoke. RAFAELA: It is just a smoke.
[beat 3] She flicks the lighter. A small flame. She stares at it, then at the stacked cans.
[beat 4] JUNE: That's nitrate film, Rafaela. RAFAELA: I know. JUNE: It burns like gasoline.
[beat 5] She clicks the lighter shut. Too late.
[beat 6] A can on the shelf flares with a quiet whump. JUNE: Oh my God.
[beat 7] Smoke blooms. She grabs a blanket and smothers it. Rafaela stamps. They cough, eyes wide, bodies bent.
[beat 8] The door swings open. MR. KOWALCZYK (60s, suspenders, a flashlight) stands there. Smoke curls around his head.
[beat 9] MR. KOWALCZYK: Which one of you is on fire? RAFAELA: Nobody. It's the projector. MR. KOWALCZYK: The projector is not made of smoke. JUNE: It was an accident, sir.
[beat 10] He sniffs. Looks at the blackened can. Then at the two of them. For a long moment, he says nothing.
[beat 11] MR. KOWALCZYK: That was the last reel of "The Birds." RAFAELA: We're so sorry. MR. KOWALCZYK: It was a bad print anyway.
[beat 12] He tosses the flashlight to June. She catches it. MR. KOWALCZYK: Open a window. And never bring fire in here again.
[beat 13] He leaves. They stare at each other. Then they laugh, shaky and helpless, as the screen outside goes dark.

### SCENE s00983 | INT. LOCK-KEEPER'S COTTAGE - NIGHT
Characters: AUGUSTINE BELLWEATHER, PRU, HALVORSEN
[beat 0] A low stone room above a canal lock. Wet rope on hooks. A brass wall telephone. A kettle on a coal stove. Water thuds against the lock gate outside.
[beat 1] AUGUSTINE BELLWEATHER (60s, tall, rain-soaked inspector's coat, magnifier on a cord) stands over a desk covered with tide charts. PRU (20s, lock-keeper's apprentice, mud on her boots) sits on the stool, hugging a lantern.
[beat 2] AUGUSTINE: Say it again, from the top. PRU: I heard a splash around midnight. I went down. The gate was open and the barge was gone. AUGUSTINE: And the body? PRU: There was no body. AUGUSTINE: Then why does the captain say there was one?
[beat 3] The phone rings. Both startle. Augustine lifts the receiver. AUGUSTINE: Bellweather.
[beat 4] HALVORSEN: Inspector. It's Halvorsen at the harbor. We've found the barge. AUGUSTINE: Where? HALVORSEN: Two locks downstream. Empty. Except for a woman's boot.
[beat 5] Pru goes pale. She drops the lantern. It rolls, flickers, and stays alight.
[beat 6] AUGUSTINE: Whose boot? HALVORSEN: Size six. Leather. Mud on the heel.
[beat 7] Augustine lowers the phone. Looks at the girl. At her feet.
[beat 8] AUGUSTINE: Miss Pru. Please take off your boots. PRU: Sir, I can explain. AUGUSTINE: I don't doubt it.
[beat 9] She bends. Unlaces one boot. Her hands tremble.
[beat 10] Then she laughs, suddenly, and pulls out a second pair from under the stool. PRU: I swapped them. They're my mother's. I wanted to see how it felt to wear them.
[beat 11] Augustine stares. The kettle whistles.
[beat 12] HALVORSEN: Inspector? Are you there? AUGUSTINE: Yes. I think we've been chasing a cobbler's mistake.
[beat 13] He hangs up. Pours the tea.

### SCENE s00984 | INT. MATTRESS SHOWROOM - MIDNIGHT
Characters: WANDA, GUS, KIT
[beat 0] Rows of beds under spotlights. A banner: "24-HOUR SLEEP-OFF!" A single clock ticks.
[beat 1] WANDA (50s, silk robe, sleep mask pushed up) lies stiffly on a king-size, hands folded like a corpse. GUS (60s, store manager, tie loosened) hovers with a clipboard. KIT (20s, intern, pajama pants) kneels at the bedside holding a tiny stopwatch.
[beat 2] GUS: Wanda, you've been lying there for nineteen hours. WANDA: Eighteen hours, forty minutes, Gus. KIT: She's right. I've been counting. GUS: Kit, you shouldn't be encouraging her. KIT: She's very peaceful, Mr. Gus.
[beat 3] WANDA: The prize is a lifetime supply of pillows. GUS: It's one pillow. You'd get one pillow. WANDA: A good pillow.
[beat 4] Gus sighs. Sits on the next mattress. Yawns. Kit yawns. Wanda smiles, eyes closed.
[beat 5] WANDA: Gus, dear. Don't lie down. GUS: I'm just resting my back. KIT: Mr. Gus, you're horizontal. GUS: I'm... diagonal.
[beat 6] Wanda sits up with a crisp snap. Pulls a gleaming trophy from under the sheets.
[beat 7] WANDA: Three days ago I faked that bed rule. The contest only requires you to stay in the store. GUS: You were never asleep? WANDA: Not for a second.
[beat 8] Kit slumps to the floor, snoring.

### SCENE s00985 | INT. PICKLE CELLAR - GRANDMOTHER'S FARMHOUSE - LATE AFTERNOON
Characters: NONNA FLORENTINA, EMEKA, TAMSIN, STRANGER, BARTOSZ
[beat 0] A low, cool stone room lined with shelves of jars. Dill, vinegar, garlic. A single bulb on a cord. Dust turns in the light.
[beat 1] NONNA FLORENTINA (80s, small, apron, forearms like rope) sorts jars by hand. Her grandson EMEKA (10, school uniform, backpack) sits on an upturned crate, swinging his legs. His mother TAMSIN (40s, scrubs, car keys in hand) stands on the bottom step.
[beat 2] She watches the old woman. She doesn't speak.
[beat 3] EMEKA: Nonna, why do you turn the jars? NONNA FLORENTINA: So the brine moves. Stale brine makes soft pickles. EMEKA: How do you know which ones are soft? NONNA FLORENTINA: You listen. A good jar clicks.
[beat 4] She taps one with a fingernail. Holds it to his ear. He listens, frowns, nods.
[beat 5] TAMSIN: Mama, I have to get back to the hospital. NONNA FLORENTINA: Then go. TAMSIN: I told the school I'd pick him up at four. NONNA FLORENTINA: And you did.
[beat 6] She doesn't turn around. Tamsin shifts on the step. Checks her watch. Puts it away.
[beat 7] EMEKA: Mum, can I stay for dinner? TAMSIN: You have homework. EMEKA: I can do it down here. NONNA FLORENTINA: There is no light down here. EMEKA: There's the bulb.
[beat 8] She smiles at that. She wipes her hands on her apron.
[beat 9] Upstairs, the screen door bangs. Footsteps cross the floor above. Dust drifts down from the beams. All three look up.
[beat 10] TAMSIN: Who's that? NONNA FLORENTINA: Probably the man about the gutters.
[beat 11] Heavy boots on the cellar stairs. A shadow fills the doorway. A STRANGER (50s, work jacket, cap in hands, polite) ducks under the frame.
[beat 12] STRANGER: Sorry to bother you. Door was open. TAMSIN: Can we help you? STRANGER: I'm looking for Florentina Marchetti. NONNA FLORENTINA: You found her.
[beat 13] He steps into the light. He looks at the jars. At the boy. At her.
[beat 14] STRANGER: My name's Bartosz. You knew my father. Janek.
[beat 15] She sets down the jar slowly. Her face does not change. Her hands do.
[beat 16] NONNA FLORENTINA: Janek the tinsmith. BARTOSZ: That's the one. TAMSIN: Mama? NONNA FLORENTINA: It's all right, Tamsin.
[beat 17] She wipes her hands again. Longer this time. NONNA FLORENTINA: He used to come down here in August. Said my brine was the only thing in the county worth a hungry man's trouble. BARTOSZ: He said that about you, too.
[beat 18] EMEKA: Who is he? NONNA FLORENTINA: Someone's son.
[beat 19] She lifts a jar from the shelf, wipes the lid, and holds it out to Bartosz. NONNA FLORENTINA: Listen.
[beat 20] He takes it. Holds it to his ear. The cellar is very quiet. BARTOSZ: It clicks. NONNA FLORENTINA: Good. It's yours.
[beat 21] Tamsin steps down at last. Sits beside her son on the crate. Neither of them says anything. The bulb sways a little, then settles.
