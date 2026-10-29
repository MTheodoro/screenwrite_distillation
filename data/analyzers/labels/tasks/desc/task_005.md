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
Write the scenes as JSON Lines (one object per line) in THREE files with the Write tool: scenes 1-30 to /home/user/screenwrite-analyzers/data/analyzers/labels/desc/part_005_a.jsonl, 31-60 to /home/user/screenwrite-analyzers/data/analyzers/labels/desc/part_005_b.jsonl, the rest to /home/user/screenwrite-analyzers/data/analyzers/labels/desc/part_005_c.jsonl. No other text in the files. Reply only with "done N".

## Scenes

### SCENE s00482 | INT. HAND CAR WASH - BAY 2 - NIGHT
Characters: VIC, ALMEIDA, LORETTA SPENCE, PAULIE OKAFOR-REYES, MAN
[beat 0] A concrete tunnel hosed down for the night. Squeegees on hooks, foam drying on the walls, a radio playing low cumbia. A black sedan is parked in the middle, suds still sliding off its hood. VICTOR "VIC" ALMEIDA (40s, rubber apron, tattoo of a swallow on his neck) wrings out a chamois. LORETTA SPENCE (50s, owner, reading glasses, bank bag on her hip) counts bills on an upturned bucket. PAULIE OKAFOR-REYES (20s, new kid, headphones around his neck) dries the rims one at a time.
[beat 1] VIC: Loretta, you want me to lock the front? LORETTA: In a minute.
[beat 2] PAULIE: Boss, is this guy coming back for his car? VIC: Mind your rims. PAULIE: He left it two hours ago. He said ten minutes.
[beat 3] LORETTA: Paulie, count the tip jar for me. PAULIE: There's only eleven bucks. VIC: That's eleven more than the last time.
[beat 4] Loretta looks up, smiling, folds the bills into the bag, snaps it shut.
[beat 5] Paulie opens the trunk to wipe the seals. Vic hangs a squeegee on its hook and crosses to the door and drops the latch; Loretta watches him do it and laughs lightly at a joke only she remembers; Paulie freezes with a rag in one hand and stares into the trunk.
[beat 6] PAULIE: Vic. VIC: What? PAULIE: Vic, there's a guy in here.
[beat 7] Loretta stops laughing. Vic walks back, slow. The three of them look down into the dark trunk.
[beat 8] Inside, a MAN in a suit lies on his side, eyes open, a neat hole in his collar.
[beat 9] LORETTA: Close it. PAULIE: He's dead. Boss, he's dead. VIC: Paulie. Close it.
[beat 10] LORETTA: Vic, you said Dominguez would pick it up in the morning. VIC: That's what he told me. LORETTA: Then why is it in my bay?
[beat 11] PAULIE: Whose guy is that? LORETTA: Nobody's.
[beat 12] Headlights sweep the front window. A car idles outside. The radio plays on.
[beat 13] Loretta lays the bank bag on the bucket, wipes her hands on her slacks, and turns to face the door.

### SCENE s00483 | INT. PLANETARIUM - DOME CHAMBER - NIGHT
Characters: FIGURE ONE, TEO
[beat 0] Concrete ring under a hemispherical ceiling. Tilted seats. A star projector crouches in the center like a black insect.
[beat 1] A FIGURE in coveralls, faceless behind a balaclava, clips a harness to the projector's rail. Quick, practiced. A radio crackles at his hip.
[beat 2] A second FIGURE (a woman, short, headlamp off) climbs the access ladder with a canvas bag. FIGURE ONE: Eleven minutes. FIGURE TWO: Ten.
[beat 3] She unzips the bag. Inside, a glass cylinder wrapped in foam: the meteorite on loan from Geneva.
[beat 4] Footsteps in the corridor outside. A key ring jingles. Both freeze. Her hand lands on his sleeve.
[beat 5] Neither moves. His breathing slows. Her thumb presses his wrist, once, twice.
[beat 6] The footsteps recede. They exhale together.
[beat 7] FIGURE ONE: Name's Teo. Since we're doing this. FIGURE TWO: Marisol. TEO: Don't tell me the rest.
[beat 8] She wraps the cylinder. He doesn't look at it. He looks at the dome, where a single painted star glows, forgotten by the maintenance crew.

### SCENE s00484 | INT. CORPORATE OFFICE - SEVENTH-FLOOR CONFERENCE ROOM - DAY
Characters: DEBORAH QUILL, RAJ PATWARDHAN, CHLOE BEAUMONT
[beat 0] A glass box overlooking a parking structure. A whiteboard reads SYNERGY SPRINT in three colors of marker. A bowl of untouched fruit. DEBORAH QUILL (40s, VP of Culture, lanyard, smile fixed) stands at the head of the table. RAJ PATWARDHAN (30s, analyst, laptop open, tie loosened) sits halfway down. CHLOE BEAUMONT (20s, intern, notebook on her knee) sits at the far end, as if hoping to be forgotten.
[beat 1] DEBORAH: So. We're all aligned that the new initiative is a game-changer. RAJ: Which initiative? DEBORAH: The one in the email. RAJ: There were four emails. DEBORAH: The one with the rocket emoji. RAJ: That was a typo. It was supposed to be a calendar. DEBORAH: The rocket stays. The rocket is the brand.
[beat 2] RAJ: Deborah, with respect, the rocket is a tool that reassigns three departments to a platform we have not purchased. DEBORAH: Which is why we're being proactive. RAJ: We are being fictional. DEBORAH: We are being agile. RAJ: We are being laid off. In five weeks. By the rocket. DEBORAH: Raj, I'd love for you to hear yourself. RAJ: I hear myself. I've heard myself since Q2. Nobody else seems to.
[beat 3] DEBORAH: Chloe, what do you think? CHLOE: Is the bowl of fruit for us? DEBORAH: It's for morale. CHLOE: It has been there since Monday. DEBORAH: Fruit takes time to work.
[beat 4] RAJ: Deborah. DEBORAH: Yes, Raj.
[beat 5] RAJ: I'm resigning. DEBORAH: You can't, we have a retrospective. RAJ: That's the best argument for it. DEBORAH: Then let's do the retrospective first, and you can resign after as a, quote, learning. RAJ: I'll take the fruit. DEBORAH: Take two.
[beat 6] Raj picks up the bowl and walks out. Deborah stares at the door. Chloe slowly raises her hand.
[beat 7] CHLOE: Can I go with him? DEBORAH: Please. Take notes.

### SCENE s00485 | INT. ROLLER DERBY ARENA - HOME LOCKER ROOM - NIGHT
Characters: ROSIE RIOT, DUARTE, JUNE, ABARA, ZEKE, WARDELL, BIX, HOLLANDER-SINGH
[beat 0] Cinderblock walls painted purple. Metal lockers, dented. Skates in a heap, laces knotted. A boombox plays muffled brass from the rink upstairs. CAPTAIN ROSALIE "ROSIE RIOT" DUARTE (30s, shoulders like a door, fishnet sleeves) paces the room with her helmet under one arm. JUNE "JUNEBUG" ABARA (20s, jammer, a half-eaten banana in her fist) sits cross-legged on a bench. COACH EZEKIEL "ZEKE" WARDELL (60s, cardigan, bad knee) props himself against a locker and consults a clipboard. BEATRIX "BIX" HOLLANDER-SINGH (40s, the team's blocker, mouthguard hung on her neck) kneels to lace a skate, while Rosie stops, looks at Junebug, looks at Zeke, and starts pacing again, and June takes a bite of banana and offers Bix the other half, which Bix waves off without lifting her eyes from her laces.
[beat 1] ZEKE: They're quick but they're not smart. First jam, don't engage. ROSIE: We don't engage? ZEKE: You hold the line. June skates. JUNE: I skate. ROSIE: Hold the line. BIX: Hold the line. ROSIE: Hold the line. BIX: Hold the line.
[beat 2] They laugh. Zeke does not.
[beat 3] ZEKE: Rosie. A word.
[beat 4] She crosses to him. They step into the corridor. A pipe drips. He does not look at her for a while, then he takes his glasses off and rubs the bridge of his nose.
[beat 5] ZEKE: My knee's done after tonight. ROSIE: I know.
[beat 6] ZEKE: You're getting the whistle next season.
[beat 7] She stands very straight. Her gloved hand finds the doorframe. ROSIE: Win first. ZEKE: Win first.
[beat 8] Down the hall, the brass band reaches its finale. Bix calls from inside. BIX: Captain! They're announcing us!
[beat 9] Rosie squares her shoulders. Zeke tucks the clipboard under his arm. Together they go in.

### SCENE s00486 | INT. ROOFTOP RADIO SHACK - NIGHT
Characters: TEDDY, LINDGREN, VOICE, GUNNAR
[beat 0] A tarpaper hut on a flat roof above a laundromat. Antenna wire runs out the window like a clothesline. A ham-radio rig glows green. A desk lamp, a scatter of QSL cards, a cracked globe.
[beat 1] THEODORA "TEDDY" LINDGREN (16, braids, headphones around her neck) leans over the microphone, one foot tucked under her. She's been here for hours.
[beat 2] She presses the key. TEDDY: CQ, CQ. This is Whiskey Two Tango Lima. Anyone out there?
[beat 3] Static rolls. She turns the dial. A faint voice surfaces. VOICE: Whiskey Two Tango Lima, this is Kilo Nine Echo. I read you, three by three.
[beat 4] Teddy grins. She grabs the mic. TEDDY: Kilo Nine Echo! Where are you?
[beat 5] VOICE: Outside Reykjavik. Fishing boat. You're my first contact this month. TEDDY: Seriously? I'm on a roof in Newark. VOICE: Newark. Lovely. What's your name, Newark?
[beat 6] TEDDY: Teddy. VOICE: Teddy. I'm Gunnar. Her smile grows.
[beat 7] Then, from below, a door slams. Footsteps on the stairwell. A heavy knock on the roof hatch, twice.
[beat 8] She freezes, mic in hand. The green light flickers on her face.
[beat 9] TEDDY: Gunnar, I gotta go. My dad's home. GUNNAR: Come back tomorrow? TEDDY: Maybe.
[beat 10] Another knock, louder. She switches the rig off. The glow dies. She sits in the dark, hand on the dial, listening to the quiet.
[beat 11] Then, softly, she clicks the lamp back on and taps out three beeps on the key. Dit dit dit. Dah dah dah. Dit dit dit. TEDDY: See you tomorrow, Gunnar.
[beat 12] She grabs her headphones and heads for the door.

### SCENE s00487 | INT. BOOKMOBILE - PARKED AT LAKE OVERLOOK - DUSK
Characters: MAEVE O'DONNELL-KAUR, SULLY, ADEBAYO
[beat 0] A converted school bus lined floor to ceiling with paperbacks. Fairy lights strung along the roof. A foldout desk by the driver's seat. Through the windshield: a lake the color of brass.
[beat 1] MAEVE O'DONNELL-KAUR (30s, librarian, cardigan with a pen in the pocket) stamps a stack of returns. Fast. Tidy.
[beat 2] A knock on the door glass. SULLY: You still open?
[beat 3] The door hisses open. SULLIVAN "SULLY" ADEBAYO (30s, rain-wet jacket, a duffel on one shoulder) steps up. He holds a paperback against his chest.
[beat 4] MAEVE: You're eleven years late. SULLY: That's fair.
[beat 5] He sets the paperback on the desk. A dog-eared Neruda. She looks at the cover and then at him.
[beat 6] MAEVE: That's mine. SULLY: It is.
[beat 7] Her phone buzzes on the desk. She lifts it, stares at the screen, declines the call. It buzzes again. She silences it. Sully watches the phone go dark.
[beat 8] SULLY: You married. MAEVE: Seven years in June. SULLY: Good. That's good. MAEVE: Don't say good like that. SULLY: Like what? MAEVE: Like you're being brave about it.
[beat 9] He laughs, then stops. The lake light turns his face gold.
[beat 10] SULLY: I wrote in the margins. Page forty. I never knew how to send it.
[beat 11] She opens the book. Page forty. A line in his handwriting, faded, underlined twice. She reads. Her mouth moves slightly, silent.
[beat 12] The phone buzzes a third time. She lets it.
[beat 13] MAEVE: It's overdue. SULLY: How much do I owe? MAEVE: Eleven years. Fifty cents a day. SULLY: That's, what, two thousand dollars? MAEVE: Two thousand and change. SULLY: I'll pay in installments.
[beat 14] She closes the book against her chest, the same way he held it. The fairy lights flicker.
[beat 15] She picks up the phone. Holds the power button until the screen goes black. Then she sits on the edge of the desk, the book in both hands, and does not tell him to leave.

### SCENE s00488 | EXT. HEDGE MAZE - WEDDING VENUE - AFTERNOON
Characters: PRU, SHETTY, SANTANA-REYES, JOAQUÍN, ODALYS FONTENOT, OFFICIANT DESMOND VANTERPOOL, FLOWER GIRL, TILLY BRANDT
[beat 0] Eight-foot yew walls. Gravel paths. A white tent glimpsed over the green. A string quartet drifts in from somewhere unseen.
[beat 1] PRUDENCE "PRU" SHETTY (30s, bridesmaid in sage satin, flats in her hand) strides down a corridor of hedge, scanning left and right. PRU: Joaquín? Joaquín!
[beat 2] She reaches a fork. A pair of legs in tuxedo trousers sticks out from under a bench at the end of a dead-end.
[beat 3] JOAQUÍN SANTANA-REYES (30s, groom, tie undone, a flask in his fist) is lying there, staring at the underside of the bench.
[beat 4] PRU: You are forty minutes late to your own wedding. JOAQUÍN: I'm not late. I'm lost. PRU: It's the same thing with a bow tie.
[beat 5] She drops to her knees beside him. He offers the flask. She takes a swig and grimaces. PRU: That's cough syrup. JOAQUÍN: It was all I could find.
[beat 6] Gravel crunches.
[beat 7] ODALYS FONTENOT (20s, bride, veil pinned to her wrist like a bracelet, running shoes under the gown) rounds the corner and halts. ODALYS: There you are. JOAQUÍN: Odalys.
[beat 8] ODALYS: I've been through this maze eleven times. PRU: Eleven? ODALYS: Well, nine. Two were the same dead end.
[beat 9] JOAQUÍN: I can't remember the vows. ODALYS: I wrote them down. JOAQUÍN: I lost the card. ODALYS: I have a copy. PRU: Jo, breathe. JOAQUÍN: I'm breathing. ODALYS: You are not breathing, you're panicking, which is different, and it's adorable.
[beat 10] A new voice, deep and calm, cuts in from behind the hedge.
[beat 11] OFFICIANT DESMOND VANTERPOOL (60s, black robe, rain boots) strides around the corner with a clipboard, a walkie-talkie squawking at his belt. DESMOND: Found them. Both of them. And the maid of honor. PRU: Bridesmaid. DESMOND: Bridesmaid. Of course.
[beat 12] A FLOWER GIRL, TILLY BRANDT (7, petals in her fist, grass-stained knees), skids in behind him and points at everyone in turn. TILLY: Is this the wedding? DESMOND: It's the pre-wedding.
[beat 13] He looks at the four of them in the gravel. He checks his watch.
[beat 14] DESMOND: The guests are on their third appetizer. I can do this right here, if you'd like. JOAQUÍN: Here? DESMOND: There's a bench.
[beat 15] ODALYS: Pru, hold the veil. PRU: I'm the witness? ODALYS: You're the witness.
[beat 16] Joaquín scrambles out from under the bench. Odalys takes his hands. Desmond opens a small book. Pru, still holding her shoes, raises one in the air like a toast.
[beat 17] DESMOND: Dearly beloved, and also hedge.

### SCENE s00489 | EXT. PIGEON LOFT - ROOFTOP - EVENING
Characters: AUGIE, MBEKI, TOMMY, NOWAK, ZUZU, NADEEM ABBASI
[beat 0] A rickety wooden coop on a tenement roof. Wire mesh. Birds shifting and cooing. Laundry lines snap in the wind. Behind it, a skyline washed orange.
[beat 1] AUGUSTINE "AUGIE" MBEKI (70s, flat cap, hands gnarled as roots) kneels at the coop door feeding corn from a coffee can. TOMASZ "TOMMY" NOWAK (40s, his son-in-law, hospital badge still clipped on) stands behind him, jacket slung over a shoulder. Beside the water trough, ZUZANNA "ZUZU" NOWAK (12, Tommy's daughter, school uniform, backpack at her feet) holds a gray pigeon against her chest. NADEEM ABBASI (30s, neighbor, tool belt) leans on the stairwell door frame with a beer.
[beat 2] TOMMY: Augie, we have to talk about Friday. AUGIE: Nothing to talk about. TOMMY: The building's being sold. AUGIE: I know what the building is.
[beat 3] NADEEM: Council gave the tenants sixty days. AUGIE: Nadeem. Drink your beer. NADEEM: I'm only saying.
[beat 4] ZUZU: Grandpa, what happens to the birds?
[beat 5] Augie tips the last corn from the can. He closes the coop door with a soft click.
[beat 6] AUGIE: They fly home. ZUZU: But home is here. AUGIE: Then they'll come back and find the roof empty.
[beat 7] Silence. Tommy puts a hand on Augie's shoulder. Augie does not shrug it off.
[beat 8] TOMMY: We'll find another roof. AUGIE: Where? In Queens? They'd never find their way. NADEEM: Augie, they've done it before. You said so. AUGIE: Mm.
[beat 9] Zuzu lifts the pigeon high. It flaps once, twice, and lifts out of her hands into the orange sky. They all watch. It circles the roof. Settles on the antenna.
[beat 10] ZUZU: Grandpa. Look.
[beat 11] Augie nods slowly. He tilts his cap back. AUGIE: That one's called Hope. Your grandmother named her.

### SCENE s00490 | INT. FLOODED TELEGRAPH OFFICE - RIVER TOWN - DAY
Characters: TOBIAS FINCH, BILLIE, STRAND, KITTREDGE, OPERATOR
[beat 0] Brown water stands six inches deep across the plank floor. The counter has been propped on crates. A potbelly stove sits cold. Outside the single window, the main street is a slow brown river with a drowned wagon in the middle of it.
[beat 1] TOBIAS FINCH (60s, sleeve garters, spectacles on a string) perches on the counter with his boots tucked under him, working the telegraph key with two fingers. He hums a hymn without a tune.
[beat 2] The door bangs open. SHERIFF WILHELMINA "BILLIE" STRAND (40s, dripping slicker, silver star pinned crooked) wades in, dragging a man by the chain between his wrists. The man, KITTREDGE (30s, split lip, hat gone), stumbles in her wake and falls to his knees in the water.
[beat 3] BILLIE: Up. KITTREDGE: It's cold. BILLIE: So is the grave. Up.
[beat 4] He climbs onto a crate by the wall. She hooks the chain on a ring bolted to the plank. She sits across from him on an overturned bucket, rifle across her lap.
[beat 5] TOBIAS: Sheriff. I wasn't told you were coming. BILLIE: The bridge went out at noon. We didn't have a choice. TOBIAS: Is that Kittredge? KITTREDGE: In the flesh. BILLIE: Quiet.
[beat 6] Tobias looks from one to the other, then back at the key. He taps out a few dots and dashes. A fainter tapping answers from the line, and then a voice, thin and metallic, speaks from a brass horn on the wall.
[beat 7] OPERATOR: Dry Fork office. Dry Fork. Do you copy, Finch? TOBIAS: I copy.
[beat 8] OPERATOR: Judge Maddox says hold the prisoner. He rides in the morning. BILLIE: Tell him there's no morning if this river keeps rising. TOBIAS: Sheriff says the river is up. OPERATOR: Judge says the river is the Lord's business. Hold the prisoner.
[beat 9] Billie stands. She crosses the flooded floor and takes the horn from its hook. She speaks into it low and flat.
[beat 10] BILLIE: This is Strand. I have a man in irons and a foot of water in the room. If the judge wants him in the morning, he can come get him. OPERATOR: I'll relay that. BILLIE: Relay it exactly.
[beat 11] She hangs the horn on its hook. Kittredge laughs, a wet, cracked sound. She turns to him.
[beat 12] KITTREDGE: You'd have made a fine judge. BILLIE: I'd have made a fine hangman, but they wouldn't give me the job.
[beat 13] Tobias stops tapping. The river laps the stove legs. A wagon wheel knocks against the building from outside, slow and steady, like someone asking to be let in.
[beat 14] KITTREDGE: How long before the water gets to the chain? BILLIE: Long enough. KITTREDGE: And if it doesn't?
[beat 15] She steps close. She crouches. She looks him full in the face and he looks back, and neither blinks. Between them, the water ripples with the rhythm of the wheel.
[beat 16] BILLIE: Then you and I and Tobias have one night to find out what each of us believes in.
[beat 17] Tobias takes off his spectacles and polishes them on his sleeve. His hands shake slightly.
[beat 18] TOBIAS: I believe in coffee, Sheriff. BILLIE: You've got a stove? TOBIAS: Cold. BILLIE: You've got matches?
[beat 19] He opens a drawer under the counter, rummages, and holds up a damp box. She takes it, shakes it, listens. A faint rattle. She nods once.
[beat 20] She wades to the stove, opens its door, pulls a handful of kindling from the crate beside it, and piles it inside. She strikes a match. It sputters. Strikes another. It catches.
[beat 21] For the first time in the room, there is warmth. Kittredge leans toward it as far as the chain allows. Tobias slides down off the counter into the water with a gasp, gathers his coat, and carries a pot to the stove.
[beat 22] The horn on the wall crackles once more. OPERATOR: Strand. Message from the judge. BILLIE: Go on. OPERATOR: He says: "Understood."
[beat 23] Billie almost smiles. She sits back down on the bucket and lays the rifle across her knees.
[beat 24] KITTREDGE: That's all? BILLIE: That's plenty.
[beat 25] Outside, the drowned wagon shifts and begins, slowly, to turn downstream.

### SCENE s00491 | EXT. JUNKYARD - ABANDONED SCHOOL BUS - NIGHT
Characters: NOMI, ESKANDARI, INEZ BRAND, DAISY, OMONDI, WADE KOWALCZYK
[beat 0] A yellow bus nosed into a heap of tires, its windows long gone, its seats stuffed with sleeping bags and fairy lights run off a car battery. Beyond the fence, a refinery burns orange against the sky.
[beat 1] NAOMI "NOMI" ESKANDARI (17, hoodie, cigarette she doesn't smoke) sits on the bus steps flicking a lighter. INEZ BRANDÃO (16, her cousin, buzz cut, arms crossed) paces the gravel. DESHI "DAISY" OMONDI (17, the youngest-looking, glasses, a tote bag stuffed with chips) sits on an upturned bucket.
[beat 2] And inside the bus, hidden in the dark, a fourth shape stirs under a blanket.
[beat 3] INEZ: Where's Wade? NOMI: He said nine. DAISY: It's nine-forty. INEZ: He's not coming. NOMI: He is. He said he'd bring the speaker. DAISY: He said a lot of things. INEZ: He said a lot of things last time, too. NOMI: Can we not?
[beat 4] The shape under the blanket sits up. WADE KOWALCZYK (18, bleary, a speaker the size of a brick in his lap) pulls the blanket off his head.
[beat 5] WADE: I've been here since seven. NOMI: Wade. WADE: I fell asleep. INEZ: You fell asleep in the bus we told you not to sleep in. WADE: It's comfortable.
[beat 6] DAISY: Wade, you smell like gasoline. WADE: The tank leaks. I patched it. NOMI: With what? WADE: Gum.
[beat 7] Daisy hands him a bag of chips. He takes it without a word. Inez kicks a hubcap across the gravel. It rings.
[beat 8] INEZ: Next week I'm not here. NOMI: What? INEZ: Mom says we're moving. Tulsa.
[beat 9] Silence. The refinery flare hisses. DAISY: Inez. WADE: Wait, seriously? NOMI: When did she tell you? INEZ: Tuesday. NOMI: It's Saturday. INEZ: I know what day it is.
[beat 10] Nomi stands. She puts the lighter in her pocket. She walks to Inez and stops.
[beat 11] NOMI: Say it again. INEZ: I said Tulsa. NOMI: Not that part. The part where you didn't tell us for four days. INEZ: Because I didn't want it to be real.
[beat 12] Wade turns on the speaker. A thin, tinny song starts, something old and dumb that they all know. Nobody tells him to stop. Daisy sings the first line under her breath.
[beat 13] Nomi lets go. She sits on the step. Inez sits beside her. Wade sets the speaker on the dashboard.
[beat 14] DAISY: Is there a bus in Tulsa? INEZ: I'll find one. WADE: I can fix it up. INEZ: You can't even fix your tank. WADE: It's gum. It holds.
[beat 15] They laugh a little. The song plays out. Over the junkyard fence, the flare finally goes dark.

### SCENE s00492 | EXT. BAKER'S YARD - PUDDING LANE, LONDON - NIGHT - 1666
Characters: THOMAS FARRINER, ALICE FARRINER, MARGERY, JEREMIAH PICKLE, WIDOW CATHERINE MOLINEUX, SIR HUGH WAINWRIGHT
[beat 0] A narrow courtyard hemmed by timber houses leaning toward each other like drunken gossips. The oven door glows red. Upwind, over the rooftops, the sky has begun to bloom a dull and sullen orange.
[beat 1] THOMAS FARRINER (50s, baker, flour to the elbow) stands at the oven mouth with a wooden peel, sliding out the last loaf of the night. His wife ALICE FARRINER (40s, shawl over a nightdress) bangs the shutters closed one by one. Their daughter MARGERY (12, barefoot, hair undone) clutches a cat to her chest by the well. The apprentice JEREMIAH PICKLE (16, soot-faced) hauls buckets across the cobbles, slopping water. Beside the gate, a neighbor, WIDOW CATHERINE MOLINEUX (60s, nightcap, rosary), stands with her mouth moving in silent prayer.
[beat 2] And out of the shadows, a stranger on a gray horse, the King's messenger, SIR HUGH WAINWRIGHT (40s, mud to the thighs, a sealed letter in his gauntlet), reins in at the gate.
[beat 3] WAINWRIGHT: Master Farriner! By the King's order, put out your oven. THOMAS: It's out, sir. Near enough. WAINWRIGHT: Near enough has burned a parish.
[beat 4] Thomas turns to Jeremiah, who has frozen with a bucket in each hand. Alice drops the last shutter-bar. Margery tightens her grip on the cat, which squirms and yowls.
[beat 5] ALICE: Thomas. THOMAS: I hear. ALICE: Look at the sky.
[beat 6] He does not look. He keeps his eyes on the horseman. The widow's rosary clicks.
[beat 7] The orange in the sky deepens; a distant bell begins to toll, then another, then three at once.
[beat 8] WAINWRIGHT: The fire is at Fish Street. It will be at the Bridge by dawn.
[beat 9] MARGERY: Papa, are we to leave? THOMAS: We are not. ALICE: Thomas. THOMAS: We are not leaving my oven.
[beat 10] WAINWRIGHT: Master Farriner, I have orders. THOMAS: Then read them.
[beat 11] Wainwright breaks the seal and reads silently. Thomas wipes his hands on his apron, and Alice, seeing it, steps forward and takes the loaf from the peel and presses it into Margery's arms beside the cat. Jeremiah sets down the buckets and begins, without being told, to untie the oven's iron door.
[beat 12] WAINWRIGHT: The order is plain. Quit the lane. All of you. THOMAS: Where do we go, sir? WAINWRIGHT: North. Moorfields.
[beat 13] Silence. The bells swell.
[beat 14] A glowing ember lands on the stones at Catherine's feet. She crosses herself and steps on it.
[beat 15] CATHERINE: God keep this house. ALICE: He will, Catherine. Come with us. CATHERINE: I'll bring my chair.
[beat 16] Thomas takes one last look at the oven. Its mouth glows like an eye closing. He lays the peel across the sill, and lifts the latch of the gate.
[beat 17] THOMAS: Jeremiah. Take the handcart. JEREMIAH: Yes, Master.
[beat 18] Thomas offers Alice his arm. She takes it. They file out into the lane, the cat wailing, the loaf warm in Margery's arms, and the orange glow licking down the rooftops behind them.

### SCENE s00493 | INT. APIARY CONVENTION - HONEY TASTING TENT - DAY
Characters: DETECTIVE INSPECTOR INGRID LARK, HORTENSE ABERNATHY, MAN IN VEIL, BEEKEEPER'S VEIL, KONSTANTIN GRIGORIEV, CLERK, PACO, LEMUS, ISOLDE VANCE
[beat 0] White canvas. Folding tables laid with jars of every color from straw to tar. Hundreds of beekeepers murmur. A glass observation hive hums beside the podium.
[beat 1] DETECTIVE INSPECTOR INGRID LARK (40s, plain suit, notebook) walks the aisle. She stops at a stall where HORTENSE ABERNATHY (60s, honey sommelier, white gloves) arranges jars.
[beat 2] LARK: Mrs. Abernathy. About Alistair Penhallow. HORTENSE: Terrible business.
[beat 3] LARK: He died at this table. HORTENSE: He tasted the buckwheat and went blue. LARK: You handed him the spoon. HORTENSE: I handed everyone a spoon.
[beat 4] A MAN IN A BEEKEEPER'S VEIL (50s, tall, gloves) drifts behind Hortense, studying the observation hive. Lark glances at him.
[beat 5] LARK: Sir. Your name? MAN IN VEIL: Ask the queen. LARK: I'll ask you.
[beat 6] The man lifts his veil. He is KONSTANTIN GRIGORIEV (50s, weathered, one blue eye, one brown).
[beat 7] KONSTANTIN: Grigoriev. I sold Alistair his bees. LARK: Then you know what killed him.
[beat 8] KONSTANTIN: Oleander nectar. A swarm that fed on it by the river.
[beat 9] HORTENSE: That's impossible. Those hives were mine. KONSTANTIN: Were they?
[beat 10] A CLERK, FRANCISCO "PACO" LEMUS (20s, convention lanyard), hurries in carrying a ledger. PACO: Inspector! The registry. Hive twelve was transferred last Thursday. LARK: To whom? PACO: Mrs. Abernathy.
[beat 11] Hortense sets down a jar. The room does not go silent, but the nearest ring of beekeepers does. She peels off her glove, finger by finger.
[beat 12] HORTENSE: Alistair planned to expose me. The adulterated honey. The syrup. LARK: So you poisoned him. HORTENSE: So I fed him his own greed.
[beat 13] DR. ISOLDE VANCE (30s, lab coat under a rain jacket, evidence bag in hand) pushes through the crowd and holds up the bag. A single dead bee lies inside. ISOLDE: Oleander residue. Confirmed. In the spoon.
[beat 14] Lark closes her notebook. Behind them, the observation hive hums louder, and something in the glass catches the light: the queen, laying, indifferent.

### SCENE s00494 | INT. MASCOT DRESSING ROOM - MINOR LEAGUE BASEBALL STADIUM - DAY
Characters: BEAR MAN, BEAR SUIT, ARCHIE, PELL, WALLY
[beat 0] Cinderblock closet. A rack of foam heads: a bear, a hot dog, a giant baseball bat. Two benches, a mini-fridge, a fan that rotates uselessly.
[beat 1] A MAN IN A BEAR SUIT (30s, head under his arm, drenched in sweat) sits on a bench staring at his hands.
[beat 2] ARCHIBALD "ARCHIE" PELL (50s, team's mascot coordinator, polo shirt, clip-on tie) enters with a clipboard.
[beat 3] ARCHIE: Walter. BEAR MAN: It's Wally. ARCHIE: It's on your contract as Walter. WALLY: Then it's Walter on paper and Wally in my heart.
[beat 4] Archie sits. The bench creaks.
[beat 5] ARCHIE: Sixth inning. The children's race. WALLY: I know.
[beat 6] ARCHIE: The hot dog was supposed to win. WALLY: I know. ARCHIE: The hot dog is a nine-year-old with a sprained wrist now. WALLY: He cut me off. ARCHIE: He's nine. WALLY: He cut me off and he looked at me. ARCHIE: Walter. WALLY: Wally. ARCHIE: He was wearing the suit. He couldn't see anything. WALLY: He saw me.
[beat 7] ARCHIE: Listen to me. I need you to apologize. WALLY: To a boy dressed as a hot dog. ARCHIE: To his mother. In person. By the concessions. WALLY: She's terrifying. ARCHIE: She's a dental hygienist. WALLY: Same thing.
[beat 8] They both stand at the same time. Archie holds the clipboard to his chest; Wally holds the bear head to his. They say the next line together, in unison.
[beat 9] WALLY: We don't have to do this. ARCHIE: We have to do this.
[beat 10] They stop. They look at each other.
[beat 11] ARCHIE: That was strange. WALLY: You first. ARCHIE: No, you.
[beat 12] They both reach for the door at the same moment. Their hands collide on the knob. Neither lets go.
[beat 13] WALLY: Archie, I'm sorry about the hot dog. ARCHIE: Walter, it's fine. WALLY: Wally. ARCHIE: Wally. It's fine.
[beat 14] He opens the door. A burst of crowd noise floods the room.
[beat 15] Wally pulls the bear head back on, and with it, becomes a different man: huge, cheerful, waving.
[beat 16] Archie shakes his head and follows him out.

### SCENE s00495 | INT. CAPSIZED SAILBOAT - UPSIDE-DOWN CABIN - NIGHT
Characters: LAKSHMI VENKAT, OTIS BRANNIGAN, HENRIK SOLBERG
[beat 0] Hull turned to ceiling. Black water at knee height, sloshing. A galley stove hangs overhead like a bat. One headlamp.
[beat 1] LAKSHMI VENKAT (30s, navigator, orange float coat) clings to a bunk rail. Water to her ribs. Breath fogging.
[beat 2] OTIS BRANNIGAN (50s, skipper, split eyebrow) wedges himself against the companionway, shoulder to the hatch.
[beat 3] Third: HENRIK SOLBERG (20s, deckhand, teeth chattering) pulls himself up on a pipe cot.
[beat 4] OTIS: Count off. LAKSHMI: One. HENRIK: Two. OTIS: Three. Good. Air?
[beat 5] LAKSHMI: We've got maybe an hour. HENRIK: Less. I can taste it.
[beat 6] Otis slams the hatch with his shoulder. Water spits through the seams. Lakshmi swings the headlamp to the porthole, where something white and heavy bobs against the glass, and Henrik grabs a boat hook off the wall and jabs at the hatch latch while Otis hauls himself up the ladder, and the whole hull rolls another few degrees, tipping a gush of black over all three of them.
[beat 7] LAKSHMI: It's moving! OTIS: Hold on! HENRIK: We're going down! LAKSHMI: We're not going down, we're settling! OTIS: Both of you, quiet!
[beat 8] They go quiet. The hull ticks.
[beat 9] Somewhere far above, faint through steel: an engine. HENRIK: Is that... OTIS: Shh. LAKSHMI: It's a ship.
[beat 10] OTIS: Bang the hull. Everyone.
[beat 11] They bang the hull with fists, with the boat hook, with a skillet from the galley. Three rhythms, three desperate voices. The engine slows. Stops.
[beat 12] Silence.
[beat 13] Then, from above: three knocks.

### SCENE s00496 | INT. COUNTY HOSPITAL - NIGHT WARD - NIGHT
Characters: WINIFRED OSEI, NURSE CARMELA BRUNO
[beat 0] A long ward at lights-low. A dozen iron beds, white curtains drawn on half. A ceiling fan turns slowly. A clock above the door reads 3:10.
[beat 1] DR. WINIFRED OSEI (40s, white coat, stethoscope slung like a scarf) sits on the edge of an empty bed, shoes off, rubbing her arch.
[beat 2] NURSE CARMELA BRUNO (50s, starched cap, cardigan over her uniform) crosses the aisle with a tray of paper cups, sets one down beside the doctor, pours her own, and sits on the next bed over; she lifts her feet onto the rail, Winifred leans back on her elbows, and the two women sit in the pool of lamplight like old friends on a porch.
[beat 3] WINIFRED: Bed nine? CARMELA: Asleep. Finally. WINIFRED: Good.
[beat 4] CARMELA: She asked for you. WINIFRED: She asks for everyone. CARMELA: She asked for you twice.
[beat 5] Winifred sips the tea. She makes a face.
[beat 6] WINIFRED: What is this? CARMELA: Chamomile. WINIFRED: It tastes like a hay bale. CARMELA: It's good for you.
[beat 7] They both look down the ward. A patient coughs behind a curtain and settles. The fan ticks.
[beat 8] Carmela raises her paper cup an inch. Winifred taps it with hers.

### SCENE s00497 | INT. PARKING GARAGE - LEVEL 3 - NIGHT
Characters: FRANKIE DELACORTE, MALIK OYELARAN, BLYTHE ARMSTRONG-LEE
[beat 0] Concrete pillars. Fluorescent tubes buzzing. A rented limousine idling with its doors open, bass pulsing faintly from a dance hall a block away.
[beat 1] FRANKIE DELACORTE (17, rented tuxedo two sizes large, corsage crushed in his fist) sits on the limo bumper. MALIK OYELARAN (17, his best friend, bow tie hanging) leans against a pillar, spinning a set of car keys on one finger. BLYTHE ARMSTRONG-LEE (17, Frankie's date, silver dress, heels in one hand) stands at the edge of the headlights, arms folded.
[beat 2] Nobody speaks for a long while.
[beat 3] MALIK: Well. That was a dance. FRANKIE: Don't. MALIK: I'm only saying. BLYTHE: He's only saying.
[beat 4] FRANKIE: Blythe. BLYTHE: You said you'd tell him. FRANKIE: I was going to. BLYTHE: You said, quote, "Tonight."
[beat 5] Malik stops spinning the keys. He looks from one to the other, then at the floor.
[beat 6] Frankie stands, brushes his knees, and takes a step toward Blythe; she steps back; Malik takes a step forward as if to separate them; and all three of them stop at once, caught in the light like three deer on a road.
[beat 7] MALIK: Tell me what? FRANKIE: Nothing.
[beat 8] BLYTHE: That he's moving to Denver.
[beat 9] MALIK: You told her first. FRANKIE: Mal. MALIK: You told her before me. FRANKIE: It was an accident.
[beat 10] MALIK: How do you accidentally tell someone you're leaving? BLYTHE: He doesn't leave till August. MALIK: August is three months. BLYTHE: Three months is a long time. MALIK: It's the length of a summer, Blythe. FRANKIE: Hey. I'm standing right here. MALIK: Then say something.
[beat 11] Frankie opens his mouth. Closes it. His corsage drops to the concrete.
[beat 12] Malik shoves him, once, in the chest, not hard. Frankie stumbles back against the limo. Neither moves.
[beat 13] Blythe sets her heels on the hood and wraps her arms around herself. A car alarm chirps somewhere on the level below.
[beat 14] FRANKIE: I didn't want it to end like this. MALIK: It's not ending. It's Denver. FRANKIE: It's the same thing. MALIK: It is not.
[beat 15] He picks up the corsage. He hands it back.
[beat 16] Frankie turns it over in his hand, then holds it out to Blythe, who looks at it, takes it, and pins it to Malik's lapel.
[beat 17] BLYTHE: There. Now we all have a flower. MALIK: I'm not wearing this. BLYTHE: You are. He lets it stay.

### SCENE s00498 | EXT. PETTING ZOO - BIRTHDAY PARTY - DAY
Characters: DARIUS FENWICK-ODOM, SOLEDAD, PAULINE, ZOO KEEPER, RIBEIRO
[beat 0] A fenced paddock, hay bales, a goat in a party hat. Kids shriek in the distance.
[beat 1] DARIUS FENWICK-ODOM (40s, host dad, apron over a polo) carries a tray of juice boxes to the pen, whistling. His wife SOLEDAD (40s, sunglasses, a phone in each hand) trails him, texting. Her mother PAULINE (70s, lawn chair, thermos) watches from the gate. The ZOO KEEPER, MR. RIBEIRO (50s, overalls, bucket), leans on a fence post.
[beat 2] He sets down the tray. She sets down a phone. Pauline lifts her thermos in salute.
[beat 3] DARIUS: Seven kids. One goat. What could go wrong? MR. RIBEIRO: Don't say that. SOLEDAD: Darius, don't. PAULINE: Let the man speak.
[beat 4] The goat lowers its head. It eyes the tray. It eyes Darius.
[beat 5] DARIUS: Nice goat. MR. RIBEIRO: That's Gerald. SOLEDAD: Gerald is wearing a party hat. PAULINE: So is the cake.
[beat 6] They all turn. Behind them, the cake sits on a hay bale, fully intact, a three-tier unicorn.
[beat 7] Gerald trots toward it. DARIUS: Gerald, no. MR. RIBEIRO: Gerald, heel! SOLEDAD: Mother, move your chair!
[beat 8] Gerald hits the hay bale at a full run. Frosting rains over all four of them.
[beat 9] Pauline, sprayed pink from head to toe, lowers her thermos and says, perfectly calm: PAULINE: Well. That's a fun party.

### SCENE s00499 | INT. DINNER THEATER - BACKSTAGE - NIGHT
Characters: BARNABY CROWE, DIANTHA FOSTER, GWEN, TAKAHASHI
[beat 0] A cramped corridor behind a painted flat. Costume racks, a mirror ringed with bulbs, a prop table covered in plastic daggers and one real turkey leg. Muffled laughter from the audience.
[beat 1] BARNABY CROWE (50s, leading man, powdered wig, gout slipper) strides in and flings his hat on the table. Behind him, DIANTHA FOSTER (30s, ingénue, corset half-laced) hurries, hem in her fist. Last in is STAGE MANAGER GWENDOLYN "GWEN" TAKAHASHI (40s, black clothes, headset, clipboard) who reads from her list as she walks.
[beat 2] BARNABY: Who moved my snuffbox? GWEN: It's on the mantle, Mr. Crowe. BARNABY: There is no mantle! GWEN: It's painted. BARNABY: I will not play Hamlet opposite a painted mantle.
[beat 3] DIANTHA: Barnaby, it's "Much Ado." BARNABY: Is it? I thought we'd done that.
[beat 4] GWEN: Five minutes, people.
[beat 5] DIANTHA: Breathe. Breathe. It's only two hundred people and a soup course.
[beat 6] BARNABY: Darling, you were magnificent in act one. DIANTHA: I forgot my line. BARNABY: Nobody noticed. DIANTHA: You said "well-played" and then walked offstage. BARNABY: It was a very good pause.
[beat 7] GWEN: Diantha, your cue is the bell. Mr. Crowe, yours is when she starts to cry. BARNABY: She's crying? DIANTHA: Not yet. GWEN: Then enter on the bell.
[beat 8] A bell tolls, loud, from the stage. All three freeze, then bolt through the curtain in a flurry of lace and a clatter of turkey bones.

### SCENE s00500 | INT. AUCTION HOUSE - BACK ROOM - DAY
Characters: CORNELIUS WREN, PHILIPPA VANTONGEREN, DETECTIVE ANSELM OBI
[beat 0] A narrow room behind the sale floor. Velvet-draped easels. A single tall window. Through the wall, the muffled voice of an auctioneer and the occasional rap of a gavel.
[beat 1] CORNELIUS WREN (60s, tweed, silk pocket square) sits at a polished table with a cup of tea, serene. Across from him, PHILIPPA VANTONGEREN (40s, tailored suit, folder in her lap) sits very upright, a pen between her fingers.
[beat 2] CORNELIUS: You'll find the provenance is impeccable. PHILIPPA: I'm sure. CORNELIUS: Painted in 1884. Single owner since 1921. Never exhibited. PHILIPPA: Never exhibited. CORNELIUS: Never.
[beat 3] He sips. She taps the pen against the folder. Her eyes stay on the cup.
[beat 4] CORNELIUS: My dear, you look unwell. PHILIPPA: I'm well. CORNELIUS: You've hardly touched your biscuit. PHILIPPA: I don't care for biscuits. CORNELIUS: No one cares for them. They are an excuse for tea.
[beat 5] She smiles, briefly. The gavel falls in the next room.
[beat 6] CORNELIUS: So. Shall we sign? PHILIPPA: Of course.
[beat 7] She opens the folder and slides a document across the table. He reads it, uncaps his fountain pen, and begins to sign.
[beat 8] The door opens. A tall man in a navy suit enters without knocking: DETECTIVE ANSELM OBI (50s, badge on his belt, hands in his pockets). He closes the door behind him.
[beat 9] ANSELM: Mr. Wren. CORNELIUS: This is a private meeting. ANSELM: I know. I've been listening to it for twenty minutes.
[beat 10] Philippa sets down her pen. She lifts the collar of her blouse and reveals a small wire.
[beat 11] CORNELIUS: You. PHILIPPA: Me.
[beat 12] Cornelius stands so fast his chair goes over. He lunges for the document; she snatches it.
[beat 13] He reaches for the window latch; Anselm catches his arm and twists it behind his back, and they stagger together against the easel, which topples, and a velvet cloth slides off a tarnished gold frame to reveal a painting of a small girl in a blue dress holding an apple.
[beat 14] Silence. The three of them stare.
[beat 15] ANSELM: That's not a Corot. CORNELIUS: It's a very good copy. PHILIPPA: It's a very good forgery.
[beat 16] In the sale room, the gavel falls again.

### SCENE s00501 | EXT. SALT FLATS - HIGH NOON
Characters: ZEB, CULLEN, MATT
[beat 0] A white plain without edges, hammered flat by heat. The horizon trembles in the glare. A dead wagon sits crooked, one wheel lost in a crust of salt. No wind. No shadow of any bird.
[beat 1] ZEBEDIAH "ZEB" CULLEN (40s, black coat bleached gray at the shoulders, a dry tongue worrying the corner of his mouth) leads a stumbling mule across the white. On the mule's back, slumped like a sack of grain, rides his boy, MATTHIAS "MATT" CULLEN (14, hat tied under his chin with twine, lips cracked red).
[beat 2] ZEB: Matt. MATT: Pa. ZEB: Eyes open. MATT: They are. ZEB: Open wider.
[beat 3] The boy grins weakly. A hard grin, with no water behind it.
[beat 4] The mule stops. Zeb pulls the lead and the mule refuses. He turns and sees the mule's legs trembling, a thin line of foam on its lip. ZEB: Not now, old girl.
[beat 5] He draws the canteen from his hip, shakes it. A slosh. A single mouthful. He holds it out to Matt.
[beat 6] MATT: You first. ZEB: Drink. MATT: Pa, you drink. ZEB: Matthias.
[beat 7] The boy takes the canteen with both hands. He drinks half the mouthful. He passes it back. Zeb tips what remains onto the mule's tongue. The animal shudders and walks on.
[beat 8] Then the sound comes: a low rumble, like thunder under a floor. The horizon darkens. A black line rises along the edge of the world, spreading wide as a mountain.
[beat 9] MATT: Pa, what is that? ZEB: Storm. MATT: There's no clouds. ZEB: Dust. It's dust. Get down. Get down, boy!
[beat 10] He drags Matt from the saddle and presses him flat into the salt, throws his coat over them both, and lies on top, bracing. The mule bolts. The wall of dust crashes over them with a howl that swallows speech, a white-brown roar that fills the sky from end to end, and for a long minute there is nothing in the world but weight and wind.
[beat 11] Then, as quickly as it came, it is gone. The sky is clear. The plain is flat. Under the coat, two breaths.
[beat 12] Zeb lifts the edge. Salt streams off his shoulders. He looks down.
[beat 13] ZEB: Matt? MATT: I'm here. ZEB: Good.
[beat 14] MATT: Did we lose the mule? ZEB: Not yet.
[beat 15] Far across the white, a small gray shape stands patient in the shimmer, waiting for them.

### SCENE s00502 | INT. CATERING VAN - PARKED OUTSIDE A WEDDING VENUE - DAY
Characters: MIRKO DELL'ORTO, TAMSIN OKPARA, BRIGITTE LACROIX-HAYES, LEONARD HAYES
[beat 0] A white panel van with a three-tier cake lashed to the floor in a plexiglass box. Crumb-dusted dashboard. A wilted bouquet in a cup holder. The engine ticks as it cools.
[beat 1] MIRKO DELL'ORTO (40s, pastry chef, chef's whites unbuttoned) sits in the driver's seat gripping the wheel. Beside him, his assistant TAMSIN OKPARA (20s, hair net, rubber gloves), holds a clipboard against her knees. In the back, wedged between trays of sugar flowers, sit the groom's mother, BRIGITTE LACROIX-HAYES (60s, mother-of-the-groom, fascinator tilted), and her husband LEONARD HAYES (60s, brown suit, hands clasped over his belly).
[beat 2] Nobody speaks. MIRKO: It's a very nice cake.
[beat 3] BRIGITTE: It's leaning. MIRKO: It is a Tower of Pisa style. BRIGITTE: It's a tower of Pisa, Mirko, in the sense that it's falling over. LEONARD: Brigitte. BRIGITTE: Don't "Brigitte" me.
[beat 4] TAMSIN: Chef, I can fix it with a toothpick. MIRKO: Tamsin. TAMSIN: Three toothpicks and a wad of buttercream. MIRKO: No toothpicks. TAMSIN: A skewer, then. MIRKO: Tamsin, no.
[beat 5] She puts down the clipboard. She reaches over the seat, pulls a long bamboo skewer from a drawer, and gives it a look.
[beat 6] BRIGITTE: What's she doing? LEONARD: She's building a cake. BRIGITTE: It's already built. LEONARD: It's been built wrongly. BRIGITTE: Leonard, do you ever listen to yourself? LEONARD: Every morning, dear.
[beat 7] Mirko turns around in his seat. He regards the cake the way a general regards a failing front.
[beat 8] MIRKO: Okay. We do this in five minutes. Tamsin, the skewer. Leonard, hold the top tier. LEONARD: Me? MIRKO: You have steady hands. LEONARD: I have a tremor. MIRKO: Then use the tremor.
[beat 9] BRIGITTE: Mirko, I swear to God. MIRKO: Madame, I have never lost a cake. BRIGITTE: You are losing this one. MIRKO: I am not losing it. I am fixing it.
[beat 10] He climbs into the back. The van rocks. Leonard, uncertain, reaches out. Tamsin kneels. The skewer slides in at an angle, slowly, and the top tier begins to straighten, one grudging degree at a time.
[beat 11] LEONARD: It's moving. TAMSIN: It's working. BRIGITTE: Mother of God. MIRKO: Hold still. LEONARD: I am still. MIRKO: You're breathing. LEONARD: It's a vital function.
[beat 12] The tier snaps into place. A little rain of sugar pearls patters to the floor. All four of them freeze, hands in the air, as though a bird has landed on them.
[beat 13] BRIGITTE: Well. MIRKO: Well. TAMSIN: It's straight. LEONARD: It's straight.
[beat 14] BRIGITTE: Thank you, Mirko. MIRKO: Madame.
[beat 15] He nods. He climbs back out. Brigitte straightens her fascinator. Leonard wipes his palms on his trousers. Tamsin sits back, flushed, still holding the skewer like a baton.
[beat 16] The back door of the van swings open. A bright, noisy hall beyond. A clipboard bangs twice on the door frame, and a bored voice somewhere says the cake team is up. MIRKO: We're ready.
[beat 17] He looks at the cake. It leans, very slightly, again. MIRKO: Don't breathe.

### SCENE s00503 | INT. OPEN-PLAN OFFICE - CUBICLE 14C - DAY
Characters: PERSEVERE, NORBERT PLUM, IMOGEN TRAVIS-OKORO
[beat 0] Grey carpet tiles. Grey partitions. A ficus, plastic, gathering dust on a filing cabinet. A motivational poster: PERSEVERE, with a kayaker in a flooded canyon.
[beat 1] NORBERT PLUM (50s, short-sleeved dress shirt, lanyard overlong) types with two fingers. He hasn't smiled since 2011.
[beat 2] IMOGEN TRAVIS-OKORO (20s, new hire, cardigan with a sticker still on the sleeve) appears at the cubicle opening with a box of donuts. IMOGEN: Hi! I'm Imogen. I'm in 14D.
[beat 3] Norbert doesn't look up. NORBERT: There's no 14D. IMOGEN: They built it this morning. NORBERT: Hm.
[beat 4] She sets the box on his desk. He finally looks at it. Then at her. Then, very slowly, he opens the lid and takes a donut.
[beat 5] NORBERT: Thank you. IMOGEN: You're welcome!
[beat 6] He bites. His eyes close. A tear slides from one of them.
[beat 7] IMOGEN: Are you okay? NORBERT: Fourteen years. Nobody has ever brought me a donut.
[beat 8] He wipes his face with the lanyard. She pulls over a chair and sits.

### SCENE s00504 | EXT. BOCCE COURT - COMMUNITY CLUB - DUSK
Characters: NONNO ALDO BARSANTI, LUCIA FERRANTE, DONOVAN BROTHERS, PADRAIC, CORMAC, REFEREE SIGNORA TESTA, KOFI ANTWI
[beat 0] Crushed oyster shell, rolled flat. String lights. Folding chairs along the rail. Final match, tied.
[beat 1] NONNO ALDO BARSANTI (80s, cardigan, one eye clouded) crouches at the foul line. His partner LUCIA FERRANTE (70s, sun hat, fierce) stands beside him. Across the court: the DONOVAN BROTHERS, PADRAIC (50s, mustache) and CORMAC (50s, mustache, identical), arms crossed. Between them, REFEREE SIGNORA TESTA (60s, whistle, a ruler in her hand) measures the gap between pallino and ball. In the front row, young KOFI ANTWI (10, orange soda, the only one not wearing white) watches.
[beat 2] Aldo rolls. The ball curves, kisses the pallino, stops.
[beat 3] LUCIA: Eh! PADRAIC: That's a touch. CORMAC: That's a foul. TESTA: Touch. Aldo's. CORMAC: Madonna.
[beat 4] Cormac hurls his ball. It cracks into Lucia's, scattering the cluster. Lucia lunges. Padraic grabs her arm. Aldo grabs Padraic's collar.
[beat 5] Testa blows the whistle, step-stepping between them with the ruler held like a sword, and Kofi stands on his chair, soda raised, and the entire club goes silent as the pallino rolls to a stop at the exact center of the court.

### SCENE s00505 | INT. ROLLER RINK - SNACK COUNTER - NIGHT
Characters: PETRA WOLANSKA, LEVI NAKASHIMA-BOYD
[beat 0] A wood-floored barn with a mirror ball turning slow. Neon palm trees on the walls. The air smells of nacho cheese and floor polish. A disco anthem thumps under the skaters' wheels.
[beat 1] PETRA WOLANSKA (15, braces, borrowed rental skates laced wrong) sits on the end of a bench, holding a paper cone of fries she isn't eating. Her eyes track the rink.
[beat 2] LEVI NAKASHIMA-BOYD (16, concession apron over a hockey jersey, wheels strapped to his work shoes with zip ties) rolls up on the other side of the counter and leans there. LEVI: You're not skating. PETRA: I'm resting. LEVI: For forty minutes? PETRA: It's a long rest.
[beat 3] He laughs. She almost does. She scoops a fry into her mouth.
[beat 4] LEVI: Come on. I'll show you. PETRA: I'll fall. LEVI: Everyone falls. PETRA: I'll fall in front of people. LEVI: Those people are eight years old.
[beat 5] She stands, wobbling, and he reaches over the counter, swings out the gate, and glides to her side. He offers an elbow. She grabs it with both hands and they shuffle out onto the boards, Petra rigid as a plank, Levi sliding backward, murmuring instructions, and a group of small children whips past like startled birds.
[beat 6] PETRA: Don't let go. LEVI: I won't. PETRA: You're letting go. LEVI: I'm not.
[beat 7] He lets go. She glides, three feet, five, ten, arms out, eyes huge. She doesn't fall.
[beat 8] PETRA: Levi! Levi, look! LEVI: I'm looking!
[beat 9] She laughs, a real laugh now, bright and cracked. The mirror ball throws spots of light across her face, one after another, like small applause.

### SCENE s00506 | EXT. SUSPENSION BRIDGE - INSPECTION GANTRY - DUSK
Characters: ASTRID MOLNAR, DAMIAN OYELOWO, INSPECTOR LUDWIG VAHL
[beat 0] Two hundred feet above a gray estuary. The bridge's main cable rises in a long sweep, wrapped in galvanized wire. A narrow steel gantry hangs beneath the deck on rails, rattling in the wind.
[beat 1] A woman and two men ride it, tethered to the rail by carabiners, as it creeps out along the span.
[beat 2] ASTRID MOLNAR (40s, structural engineer, yellow helmet, a hammer swinging from her belt) leads, tapping the cable with a small mallet. She listens to each ring as a doctor listens to a chest.
[beat 3] DAMIAN OYELOWO (30s, rope-access tech, weathered, grinning) follows, checking every shackle with a gloved thumb. His camera hangs at his hip, and he photographs every third bolt without being asked.
[beat 4] The third rides at the back: INSPECTOR LUDWIG VAHL (60s, state auditor, pressed overcoat under the harness, hat clamped under one arm). He does not look down. He does not look anywhere in particular.
[beat 5] ASTRID: Stop there. DAMIAN: Here? ASTRID: There. Eleven o'clock on the cable.
[beat 6] Damian leans out. He points his lens. The shutter clicks.
[beat 7] DAMIAN: Fretting. Maybe a broken wire. ASTRID: How many? DAMIAN: I count four.
[beat 8] Ludwig finally speaks, in a measured voice, as if reading from a script. LUDWIG: The report states the cables were replaced in 2019. ASTRID: They were wrapped in 2019. LUDWIG: Wrapped, replaced. ASTRID: Not the same.
[beat 9] He cleans his glasses with a handkerchief and looks, for the first time, at the cable. He studies it for a long minute.
[beat 10] LUDWIG: How long has she known? ASTRID: Who? LUDWIG: Whoever signed the report.
[beat 11] Damian lowers his camera. He looks at Astrid. She looks at the water. ASTRID: Since the day she signed it.
[beat 12] Ludwig puts his glasses back on. The gantry shudders as a truck crosses the deck above, the whole structure humming like a plucked string. LUDWIG: Then I will need your name on the second report. ASTRID: I thought you'd never ask.
[beat 13] She holds out the mallet. He takes it. He taps the cable once, gently, and listens to the dull tone that rings back, the sound of something old and tired and honest.
[beat 14] Beyond them, a sodium lamp flickers on at the far tower, then the next, then the next, until the whole span is a string of pale lights floating over the dark water.
[beat 15] DAMIAN: Is it going to hold? ASTRID: Tonight. DAMIAN: And tomorrow?
[beat 16] She lays her palm flat against the cable, and does not answer.
[beat 17] The gantry creaks to a halt. Ludwig glances at the straps looped around his waist, then at the two of them. Slowly, he unhooks the carabiner from the rail and re-hooks it, twice, as a man might check a lock he already knows is secure.
[beat 18] LUDWIG: Gentlemen. Madam. I am afraid of heights. DAMIAN: We know. ASTRID: You did well.
[beat 19] He nods once. They stand together on the thin steel, three small figures against an immense gray sky, until the wind drops enough for the gantry to turn back.

### SCENE s00507 | INT. VENTRILOQUIST'S ATTIC - NIGHT
Characters: MAXIMILIAN ROOK, KNOCK, WOMAN, JOURNALIST, ODELIA
[beat 0] A low, slant-roofed room under the eaves. Dozens of wooden dummies sit in rows on rickety shelves, glass eyes gleaming. A steamer trunk lies open on the floor, lined with red velvet. Rain taps the skylight.
[beat 1] MAXIMILIAN ROOK (70s, bow tie askew, dressing gown, white gloves) kneels beside the trunk, tenderly arranging the limbs of a dummy: a small boy in a sailor suit with a painted smile.
[beat 2] A KNOCK at the attic hatch. A WOMAN climbs through (30s, trench coat, a recorder in her hand), a journalist, shaking rain from her collar.
[beat 3] JOURNALIST: Mr. Rook? I rang the bell. MAXIMILIAN: The bell doesn't work. JOURNALIST: I noticed. The door was open. MAXIMILIAN: It always is.
[beat 4] She looks around, scanning the shelves. JOURNALIST: Quite the audience. MAXIMILIAN: They're my family. JOURNALIST: All of them? MAXIMILIAN: Forty-one. Forty-two, with Percy.
[beat 5] He pats the sailor-boy. Its head lolls, and the painted smile shifts in the lamplight.
[beat 6] JOURNALIST: Odelia Fairweather, from the Courier. May I? She sets her recorder on the trunk, clicks it on.
[beat 7] ODELIA: Mr. Rook, you retired in 1974. People say you stopped because you could no longer tell where your voice ended and theirs began. MAXIMILIAN: People say a great deal. ODELIA: Is it true? MAXIMILIAN: Ask Percy. ODELIA: I'd rather ask you. MAXIMILIAN: But he's the one who knows.
[beat 8] He lifts Percy onto his knee. His hand slides inside the dummy's back. Its jaw clacks. MAXIMILIAN: Hello, lady.
[beat 9] Odelia laughs, uneasy. ODELIA: Very good.
[beat 10] MAXIMILIAN: Max is old. He forgets to eat. MAXIMILIAN: Percy. MAXIMILIAN: He forgets to sleep. He forgets which of us is which. MAXIMILIAN: That is enough. MAXIMILIAN: Max, stop moving your lips.
[beat 11] Maximilian's hand withdraws. He stares at it. The dummy's jaw hangs open. Silence in the attic. Rain.
[beat 12] ODELIA: Mr. Rook? MAXIMILIAN: I did not say that. ODELIA: I know. MAXIMILIAN: I was not saying it.
[beat 13] Odelia reaches for the recorder. Her hand trembles. The little red light blinks.
[beat 14] From the shelves, one by one, the painted heads begin to turn, wood clicking against wood, until forty-one pairs of glass eyes rest upon the journalist. MAXIMILIAN: Hello, lady. Do stay.
[beat 15] Maximilian lifts his gloved hands and lets the dummy slide back into the velvet. It settles with a soft sigh. He stands, gown trailing.
[beat 16] MAXIMILIAN: Miss Fairweather. You had better go. ODELIA: Mr. Rook, I... MAXIMILIAN: Go down the stairs. Do not look at the shelves. Do not answer if anyone calls your name.
[beat 17] She snatches the recorder. She crosses to the hatch, one step at a time.
[beat 18] Behind her, in the dark, forty-two small voices begin, very quietly, to hum.
[beat 19] At the hatch she stops. ODELIA: Will you be all right? MAXIMILIAN: They've never hurt me. ODELIA: That isn't what I asked.
[beat 20] He turns to the shelves. The old man's shoulders drop, and he smiles for the first time, the exact smile painted on Percy's face. MAXIMILIAN: Goodnight, my dear.
[beat 21] She climbs down. The hatch closes on its own.

### SCENE s00508 | INT. FERRY TERMINAL - WAITING ROOM - EARLY MORNING
Characters: PERPETUA OSEI-ADJEI, MAN, JULIAN OSEI-ADJEI
[beat 0] Plastic benches bolted in rows. A vending machine glowing blue. A departures board reads CANCELLED in red beside every sailing. Fog presses at the windows like a hand.
[beat 1] PERPETUA OSEI-ADJEI (60s, camel coat, a small suitcase between her feet) sits alone with her purse on her lap. She has not taken off her gloves.
[beat 2] She watches the board. She watches the door. She watches nothing.
[beat 3] A clock ticks, loud in the silence. A gull lands on the sill, regards her, and leaves.
[beat 4] The door opens. Cold air. A MAN steps in, shaking out a wet umbrella: JULIAN OSEI-ADJEI (30s, her son, scarf, luggage on wheels). He sees her and stops dead.
[beat 5] JULIAN: Mother. PERPETUA: You came. JULIAN: You said the 6:15. PERPETUA: It's cancelled. JULIAN: I saw the board.
[beat 6] He crosses to the vending machine. He studies it without buying.
[beat 7] PERPETUA: They say it will clear by noon. JULIAN: They always say that.
[beat 8] He sits, one bench away. He sets the umbrella down. It drips on the linoleum between them.
[beat 9] PERPETUA: Your father would have liked the fog. JULIAN: Would he. PERPETUA: He said fog was honest. Everything looks the way it feels.
[beat 10] Julian says nothing. He picks at the handle of his suitcase.
[beat 11] JULIAN: Did you eat? PERPETUA: A little. JULIAN: What did you eat? PERPETUA: Toast. JULIAN: That isn't a meal. PERPETUA: It is if you are me.
[beat 12] He almost smiles. He rises, crosses to the vending machine, feeds a coin. A packet drops. He brings it to her. Biscuits.
[beat 13] She takes them, turns the packet over, reads the ingredients as though they were a letter. PERPETUA: Too much sugar. JULIAN: Eat them anyway.
[beat 14] She opens the packet. She eats one. She offers him the packet. He takes one. They chew in silence.
[beat 15] JULIAN: When did you last visit the grave? PERPETUA: Sunday. JULIAN: I haven't been in a year. PERPETUA: I know. JULIAN: I didn't know what to say to him. PERPETUA: He wouldn't have talked back. JULIAN: That's the problem.
[beat 16] A soft laugh. She folds the packet and tucks it into her purse.
[beat 17] The loudspeaker clicks on: a bored recorded voice announces a one-hour delay. JULIAN: One hour. PERPETUA: One hour.
[beat 18] JULIAN: We could go. PERPETUA: Where? JULIAN: The grave. It's ten minutes by taxi.
[beat 19] She looks at him. Her gloved hands tighten on the purse. Her eyes go to the window, where the fog is thinning. PERPETUA: I'll need to freshen my lipstick. JULIAN: Take your time.
[beat 20] She stands. She straightens her coat. She picks up her small suitcase, and he, without being asked, takes it from her hand.
[beat 21] They walk to the door together. At the threshold he holds it open, and she goes through first, into the gray.

### SCENE s00509 | INT. COURTHOUSE - BASEMENT BOILER ROOM - NIGHT
Characters: ATTORNEY NADINE KOWALSKI-BEAUFORT, CUSTODIAN, WALTER, PROSECUTOR LEOPOLD ASHWORTH
[beat 0] Pipes the width of tree trunks. A hissing furnace. A single caged bulb. On a workbench: a jar of coffee and a radio playing low jazz.
[beat 1] ATTORNEY NADINE KOWALSKI-BEAUFORT (40s, wet raincoat, briefcase) picks her way between the pipes, calling softly. NADINE: Mr. Fitch? Walter Fitch?
[beat 2] A rattle of keys. An old CUSTODIAN (60s, coveralls, ring of keys at his belt) steps from behind the boiler, wiping his hands on a rag.
[beat 3] CUSTODIAN: You're not allowed down here. NADINE: I'm Nadine Kowalski. Your daughter's attorney. CUSTODIAN: Celeste has an attorney? NADINE: She does now.
[beat 4] He sets the rag on the workbench, studies her, then pulls a second stool from the shadows. She sits. He pours coffee into a chipped mug and slides it across. CUSTODIAN: Black. Sorry. No cream. NADINE: Black's fine.
[beat 5] The jazz plays. The furnace ticks.
[beat 6] NADINE: Mr. Fitch, your daughter is on trial tomorrow. WALTER: I know. NADINE: She says she was at home the night of the break-in. She says she was with you. WALTER: I'd say the same. NADINE: Were you?
[beat 7] He rubs his jaw. The keys clink at his belt. WALTER: I'm the night janitor. I'm here nights. NADINE: So you weren't with her. WALTER: No. NADINE: Then why would she say it?
[beat 8] WALTER: Because I told her to.
[beat 9] She puts down her mug. Slowly, she folds her hands. NADINE: Mr. Fitch, I need you to repeat that very carefully.
[beat 10] WALTER: I told her to say it. I knew the judge would believe a father. NADINE: You knew she wasn't home. WALTER: I knew where she was. NADINE: Where? WALTER: Here.
[beat 11] The caged bulb swings. Shadows lurch across the pipes. Nadine stands. NADINE: Here? In the courthouse?
[beat 12] WALTER: Down here. With me. She came to fix a pipe. NADINE: Why would she— WALTER: She's a plumber, Ms. Kowalski. She works nights. She was in the east vault, patching a leak, the night someone cleaned out the evidence room upstairs.
[beat 13] NADINE: So she had access. WALTER: She had a keycard I gave her. NADINE: And you didn't tell the police. WALTER: I'm telling you. NADINE: Why now? WALTER: Why now?
[beat 14] They stop. The radio plays a soft saxophone note. He smiles, grimly.
[beat 15] WALTER: Because the man who stole it is the one prosecuting her.
[beat 16] Nadine sits down very slowly. The mug rattles on the bench.
[beat 17] High above, a door opens. Footsteps descend the iron stairs, unhurried. A silhouette stops at the bottom step: PROSECUTOR LEOPOLD ASHWORTH (50s, charcoal suit, cufflinks catching the bulb). ASHWORTH: Evening, Walter. Visitors?
[beat 18] Walter does not turn. Nadine slowly closes her briefcase.

### SCENE s00510 | INT. BANQUET HALL - QUINCEAÑERA - NIGHT
Characters: DJ, XIMENA DELGADILLO-PARK, ABUELA CONSUELO, RAMIRO
[beat 0] Crepe-paper arches. A chocolate fountain. A disco ball. Tables set with pink linen, centerpieces of plastic roses. A DJ booth sits abandoned, the music paused mid-song.
[beat 1] XIMENA DELGADILLO-PARK (15, ball gown, tiara slipping, sneakers visible beneath the hem) stands alone on the dance floor, spotlit by a single light.
[beat 2] Behind a pillar, ABUELA CONSUELO (70s, black lace, rosary bracelet) watches her.
[beat 3] Across the room by the buffet, TÍO RAMIRO (50s, shiny suit, tie loosened, wine glass in hand) leans on a table.
[beat 4] XIMENA: Where is he? Nobody answers. XIMENA: Where is my father?
[beat 5] Ramiro sets his glass down. Consuelo steps out from behind the pillar.
[beat 6] CONSUELO: Mija. XIMENA: He promised. RAMIRO: He's on his way. XIMENA: He said that at the church. RAMIRO: Traffic. XIMENA: It's a Saturday, Tío.
[beat 7] Silence. The disco ball turns. Little diamonds of light slide over the tables.
[beat 8] CONSUELO: Come. Dance with your grandmother. XIMENA: I don't want to dance. CONSUELO: Ximena. XIMENA: It's my party and he isn't here.
[beat 9] She yanks the tiara off and throws it across the floor. It skitters and spins under a table.
[beat 10] Ramiro starts forward; Consuelo raises a hand to stop him. Ximena kicks off one sneaker, then the other. They bounce off the stage.
[beat 11] RAMIRO: Don't do this. XIMENA: Do what? Embarrass him? RAMIRO: Embarrass yourself. XIMENA: Good.
[beat 12] She storms to the banquet table, grabs a tray of cupcakes, and sends it crashing to the floor. The hall freezes. Frosting splatters. A distant guest gasps.
[beat 13] Consuelo and Ramiro both advance on her. She backs against the fountain and the chocolate wobbles in its tiers. CONSUELO: Mi amor. XIMENA: Don't call me that.
[beat 14] Ramiro stops. Consuelo keeps coming. She holds out her arms, the rosary jangling.
[beat 15] XIMENA: He isn't coming. CONSUELO: No. XIMENA: He's never coming. CONSUELO: No.
[beat 16] The girl crumples into her grandmother's arms. They stand there, a small black-lace shape and a large pink one, rocking. Ramiro takes off his jacket and lays it on Ximena's shoulders.
[beat 17] The DJ booth crackles. The paused song restarts, soft and slow.
[beat 18] RAMIRO: I'll dance with you, mija. I'm a terrible dancer.
[beat 19] Ximena laughs into the lace. She wipes her face. She looks up. XIMENA: You're the worst dancer I know. RAMIRO: And yet here I am.
[beat 20] He offers his hand. She takes it. They walk onto the floor in her bare feet and his dress shoes, and Consuelo stands to the side, one hand to her heart.

### SCENE s00511 | INT. CATHEDRAL BELL TOWER - DAY
Characters: SERGEANT IRENE VASCONCELOS, PRIVATE HAMZA QURESHI, CORPORAL OTTOLINE DE WILDE
[beat 0] Stone steps spiral up into a chamber of oak beams and ancient dust. Light falls through louvered slits in thin gold bars. In the center, a bronze bell the size of a truck, tongue wrapped in canvas.
[beat 1] SERGEANT IRENE VASCONCELOS (30s, face smeared with soot, helmet netted with dry grass) lies prone at a slit window, rifle braced, a cold cup of tea beside her elbow. Below, a ruined square lies empty under the sun. PRIVATE HAMZA QURESHI (19, spotter, binoculars on a strap) kneels at the next slit, lips moving silently as he counts windows across the plaza. CORPORAL OTTOLINE DE WILDE (40s, radio operator, a darned sock peeking from her boot) sits against the bell with the handset in her lap. She is knitting something small and gray.
[beat 2] Nobody speaks for a long time.
[beat 3] Down in the square, a dog crosses, trots, stops, sniffs a boot. Hamza lowers his binoculars. Irene does not move.
[beat 4] OTTOLINE: Was a good dog, once. IRENE: Mm.
[beat 5] The dog moves on. Hamza lifts the glasses. Ottoline's needles click. The bell ticks softly as the stone cools.
[beat 6] HAMZA: Four minutes.
[beat 7] Irene breathes out, slowly, and in. She touches the cold tea with one finger, not drinking it.

### SCENE s00512 | EXT. RIVER CROSSING - DAY
Characters: DRIVER AMOS PRICKETT, LEONORA VASQUEZ-TATE, BOY, LIJAH, TATE
[beat 0] A swollen brown river, wide and quick. A stagecoach sits in the middle of it, wheels sunk to the hubs, water slapping at the doors. The horses stand with heads low, trembling.
[beat 1] DRIVER AMOS PRICKETT (50s, duster, hat tied on with a bandanna) stands on the box with the reins in both fists, staring at the far bank.
[beat 2] Inside, face pressed to the window, sits MRS. LEONORA VASQUEZ-TATE (40s, black traveling dress, hatbox in her lap). Beside her, a BOY in a derby, ELIJAH "LIJAH" TATE (12, her son), grips the leather strap.
[beat 3] AMOS: Ma'am, I'd keep still. LEONORA: We have been still for an hour. AMOS: Then you're good at it.
[beat 4] The coach shifts. The hatbox slides. Lijah catches it.
[beat 5] LIJAH: Ma, the water's coming in. LEONORA: I see it. LIJAH: Is it going to tip?
[beat 6] She doesn't answer. Her gloved hand reaches over and settles over his, over the strap, over the hatbox.
[beat 7] AMOS: Whole thing's gonna shift. When it does, you climb up here, both of you. Don't look down.
[beat 8] Leonora and Lijah both reach for the door. Amos swears, swings down onto the roof, and hooks an arm through the luggage rail; the coach lurches, the horses scream, and Leonora tumbles into her son. They tangle in the narrow seat for a second, then Amos throws open the door and hauls them up one after the other onto the box.
[beat 9] They crouch there, three figures in a row on the top of a sinking coach. The water tugs at the wheels. Somewhere on the far bank, a dog begins to bark.
[beat 10] LIJAH: Mister Prickett? AMOS: Yeah. LIJAH: I lost my hat.
[beat 11] Amos looks. The derby is floating away on the current, turning like a leaf. AMOS: Reckon it's going where we're going.
[beat 12] LEONORA: Amos. AMOS: Ma'am.
[beat 13] She opens the hatbox. Inside, folded in tissue, lies a child's christening gown. She lifts it out. She holds it to her face.
[beat 14] LEONORA: I don't want it to be ruined. AMOS: It won't be.
[beat 15] She gives it to Lijah. He tucks it inside his shirt. The coach settles, and holds.
[beat 16] The horses start forward on their own. The wheels bite the river bed. Slowly, with a groan of timber, they climb toward the bank.

### SCENE s00513 | INT. CHEESE AGING CAVE - NIGHT
Characters: INSPECTOR HONORIA WYNDHAM-LEE, FERMIN OKONKWO-DAHL, MADAME SOLANGE ARQUETTE, ROLLO PINKERTON
[beat 0] A limestone tunnel hung with lanterns. Wooden shelves stacked with wheels of cheese, each stamped with a date. The air is cold, damp, and sharp with ammonia. Somewhere, water drips.
[beat 1] INSPECTOR HONORIA WYNDHAM-LEE (50s, tailored overcoat, gloves) walks the aisle with a leather satchel, tapping the wheels with a small silver hammer.
[beat 2] Behind her trails FERMIN OKONKWO-DAHL (30s, cheesemonger, rubber apron), who holds a lantern high. Further back, the owner, MADAME SOLANGE ARQUETTE (60s, shawl, a wedge of cheese in her fist), muttering as she chews.
[beat 3] A fourth figure, ROLLO PINKERTON (40s, apprentice, nervous grin), drifts at the end of the line, tidying shelves nobody asked him to tidy.
[beat 4] HONORIA: I'll be quick. Where was Monsieur Brisard found? FERMIN: Between those two racks. Behind the Gruyère. HONORIA: Face up? FERMIN: Face down. HONORIA: In the rind? FERMIN: In the rind.
[beat 5] SOLANGE: Forty years I have made this cheese. HONORIA: Madame Arquette? SOLANGE: Forty years and never a murder. HONORIA: We aren't calling it that yet. SOLANGE: You didn't say "accident."
[beat 6] Honoria crouches by the rack. She runs a glove along the wooden slats and holds it to the light: a streak of blue-green mold.
[beat 7] HONORIA: Rollo. ROLLO: Yes, Inspector? HONORIA: When did you last wash these shelves? ROLLO: Tuesday. HONORIA: This mold is a week old. ROLLO: I might have missed a spot.
[beat 8] HONORIA: Rollo, did you see Monsieur Brisard on Tuesday? ROLLO: No.
[beat 9] FERMIN: You did. You gave him his lunch. ROLLO: That was Monday. SOLANGE: Monday, Tuesday. All the same in a cave.
[beat 10] HONORIA: Everyone stay where you are. Fermin, the lantern lower. There.
[beat 11] The light drops. On the stone floor, almost invisible, a trail of fine white powder leads away down the tunnel.
[beat 12] HONORIA: Now that is interesting.

### SCENE s00514 | INT. OBSERVATORY DOME - SÉANCE - NIGHT
Characters: MADAME ZELDA VOSKUIJLEN, PROFESSOR EDMUND HARTWELL, YOUNG WOMAN, MAN
[beat 0] A great brass telescope tilts toward a slit of stars. A round oak table fills the center of the floor, ringed by four chairs. A single candle gutters. The dome creaks as it turns.
[beat 1] MADAME ZELDA VOSKUIJLEN (60s, turban, rings on every finger) presides, palms flat on the wood. To her left sits PROFESSOR EDMUND HARTWELL (70s, astronomer, pocket watch); to her right, a YOUNG WOMAN in mourning grey (20s, veil pushed back); opposite, a MAN in a damp overcoat who has given no name (40s, gloved).
[beat 2] MADAME ZELDA: Hands joined. Breathe. Is there a presence among us?
[beat 3] The candle gutters. Hartwell clears his throat.
[beat 4] HARTWELL: My dear, is this strictly necessary? YOUNG WOMAN: Hush. MADAME ZELDA: Is there a presence?
[beat 5] The telescope creaks as though a hand had nudged it. The dome stills. A single cold breath crosses the table.
[beat 6] MAN: Adelheid?
[beat 7] The Young Woman jerks her hand free. YOUNG WOMAN: Who said that? HARTWELL: Edmund, I mean, I did not. MADAME ZELDA: Silence! Hands!
[beat 8] MAN: It's not the dead who answer. It's the clock in your pocket, Professor.
[beat 9] Hartwell pulls out the pocket watch. It is ticking backward. HARTWELL: This is not possible.
[beat 10] The Young Woman stands, ripping off her veil. She is not young.
[beat 11] She is ADELHEID HARTWELL (50s, his wife, long thought drowned), her face lit white by the candle.
[beat 12] ADELHEID: Hello, Edmund.
[beat 13] The Man removes his glove and lays a badge on the table. Hartwell sways.

### SCENE s00515 | INT. CARTOGRAPHER'S MAP ROOM - ROYAL GEOGRAPHICAL SOCIETY - DAY - 1887
Characters: SIR RUPERT ASHBY-LOVELL, MISS ANNELIESE BASU, THADDEUS OKEKE
[beat 0] A long hall lined with oak map drawers. A skylight pours soft gray light onto a drafting table the size of a rowboat. Globes in brass frames. A smell of vellum, ink, and cold tea.
[beat 1] SIR RUPERT ASHBY-LOVELL (60s, silver whiskers, frock coat) stoops over the table, magnifying glass in hand. A half-finished map of the Zambezi lies pinned open.
[beat 2] MISS ANNELIESE BASU (30s, drafting apron, spectacles pushed up into her hair) stands at his shoulder, holding a bottle of india ink. She is the only woman in the building not carrying a tray.
[beat 3] On the far side of the table, MR. THADDEUS OKEKE (40s, young curator, ink stains on his cuffs, a chart tube under his arm) fidgets with a ruler.
[beat 4] SIR RUPERT: The river bends. ANNELIESE: It does not. SIR RUPERT: I have seen the sketches. It bends east. ANNELIESE: You have seen one sketch. By a man who was never within a hundred miles.
[beat 5] THADDEUS: Sir Rupert, if I may. SIR RUPERT: You may not. ANNELIESE: He may. SIR RUPERT: Miss Basu.
[beat 6] ANNELIESE: Mr. Okeke measured it himself. THADDEUS: Three summers, sir. On foot. With a theodolite and a very bad mule.
[beat 7] Sir Rupert straightens. The magnifying glass lowers. For a moment nobody speaks. A clock ticks.
[beat 8] SIR RUPERT: Show me.
[beat 9] Thaddeus spreads the chart. The river on it runs straight, then bends west, a long soft curve. Anneliese sets the india ink beside it. Sir Rupert bends close.
[beat 10] SIR RUPERT: That is not on my map. ANNELIESE: No, sir.
[beat 11] SIR RUPERT: This will cost the Society a reprint. THADDEUS: Seven hundred pounds. SIR RUPERT: Seven hundred. ANNELIESE: It is a very small sum for being right.
[beat 12] He eyes her. She meets his eye. A long, silent, civil duel of gazes.
[beat 13] SIR RUPERT: Miss Basu, you are impertinent. ANNELIESE: Yes, sir. SIR RUPERT: Mr. Okeke, you are insubordinate. THADDEUS: Yes, sir.
[beat 14] SIR RUPERT: You are both entirely correct.
[beat 15] He takes the pen from the stand and, with a hand that trembles only slightly, strikes through the old river and begins to draw the new one.

### SCENE s00516 | INT. COURTROOM 4B - NIGHT
Characters: JUDGE HARRIET BALOGUN-REYNOLDS, ATTORNEY QUIGLEY
[beat 0] A vast oak-paneled room, dark except for the red glow of an emergency exit sign. A power outage has stopped the clocks. Benches are empty. A stenographer's chair sits angled away from the bench. The witness box stands open like an unlit stage.
[beat 1] JUDGE HARRIET BALOGUN-REYNOLDS (60s, black robe, flashlight under her chin) sits at the bench, peering through reading glasses at a conference phone placed before her. Its tiny green light is the only steady glow in the room.
[beat 2] HARRIET: For the record, we are proceeding under emergency conditions.
[beat 3] The phone crackles. ATTORNEY QUIGLEY: Your Honor, I'm in the parking structure. My signal is poor. Can you hear me? HARRIET: Barely, Counselor.
[beat 4] QUIGLEY: Your Honor, I move for a continuance. HARRIET: Denied. QUIGLEY: Your Honor, the power is out. HARRIET: The law is not.
[beat 5] She sets down her flashlight. It rolls. She chases it with two fingers, mutters.
[beat 6] HARRIET: Forty years. Never a continuance for weather. QUIGLEY: I didn't catch that. HARRIET: You weren't meant to.
[beat 7] She rubs her eyes. The sign hums. The silence stretches.
[beat 8] HARRIET: Counselor, your client has been waiting nine months for this hearing. QUIGLEY: He's waiting in the car.
[beat 9] HARRIET: Bring him up. QUIGLEY: Your Honor? HARRIET: Stairs. Eleven flights. By candlelight if necessary. QUIGLEY: Your Honor, he's seventy-eight. HARRIET: I know how old he is.
[beat 10] A pause. A long breath crackles on the line.
[beat 11] QUIGLEY: We'll be there in twenty minutes. HARRIET: Take thirty.
[beat 12] She switches off the flashlight. The red sign glows. She folds her hands, a small figure in a great black robe, and waits.

### SCENE s00517 | EXT. WATER TOWER - STALLED TRAIN - HIGH DESERT - DAY
Characters: ENGINEER SILAS DUNBAR, FIREMAN CALLUM NAKAGAWA, MARSHAL DELPHINE ARCENEAUX, CONDUCTOR BARTHOLOMEW ENGSTROM, TELEGRAPH CLERK
[beat 0] A locomotive idles at a sun-blasted siding. The wooden tank towers above, dripping from its spout. Dust. A coil of rope. A line of boxcars stretching behind into the heat.
[beat 1] ENGINEER SILAS DUNBAR (50s, striped cap, grease to the elbows) hangs from the water spout, wrestling the chain. Below him, FIREMAN CALLUM NAKAGAWA (20s, bare-chested, black with soot) braces the ladder. Standing in the shade of the tank, hand on her pistol, waits MARSHAL DELPHINE ARCENEAUX (40s, tan duster, silver badge).
[beat 2] A telegraph key chatters from the little station beside the track. Up on the first boxcar roof, CONDUCTOR BARTHOLOMEW ENGSTROM (60s, brass buttons, pocket watch) cups his hands to his mouth.
[beat 3] BARTHOLOMEW: Passengers inside! Shutters down!
[beat 4] TELEGRAPH CLERK: Marshal! Wire from Santa Fe! Riders on the ridge! DELPHINE: How many? TELEGRAPH CLERK: Eight! Maybe ten!
[beat 5] SILAS: Callum, haul! CALLUM: Hauling!
[beat 6] DELPHINE: Silas, how long for the tank? SILAS: Five minutes! DELPHINE: You have two.
[beat 7] Callum strains on the chain. The spout swings; water crashes down in a silver wall, drenching the three of them as they grab the ladder, the pipe, the pistol, and scatter in separate directions.
[beat 8] Silas drops to the ties. Callum leaps for the cab. Delphine drops to one knee and raises her rifle toward the ridge.
[beat 9] On the ridge, tiny horsemen appear against the sky.
[beat 10] DELPHINE: Callum! Full steam! CALLUM: Aye!
[beat 11] The locomotive shrieks. Steam bursts. The train lurches forward.

### SCENE s00518 | INT. FUNICULAR RAILWAY - CAR 2 - NIGHT
Characters: IMANI KARANJA-WELLS, MAN, IGNATIUS ABRAMOWITZ, ENRIQUE VALD, S-MORROW
[beat 0] A steep little tram climbing a mountain of lights. Wooden benches, brass rails, windows fogged from breath. Below, the city sprawls like spilled jewelry. The cable hums.
[beat 1] IMANI KARANJA-WELLS (30s, wool coat, camera bag) sits alone on a bench, bundled against the cold. She gazes at the city. A thermos cup warms her hands.
[beat 2] Across the aisle, at the far end, an old couple's empty seats. A conductor's bell hangs unrung. The car climbs, slow and gentle.
[beat 3] At the next stop, the doors hiss open and a MAN steps in, dusting snow from his shoulders: IGNATIUS ABRAMOWITZ (30s, big red scarf, paper bag of roasted chestnuts). He freezes at the sight of her.
[beat 4] IGNATIUS: Imani? IMANI: Ignatius. IGNATIUS: I thought you were in Lisbon. IMANI: I was in Lisbon. Then I wasn't. IGNATIUS: How long? IMANI: Three weeks.
[beat 5] He nods. He sits down, one bench across. The doors close. The car climbs on.
[beat 6] IGNATIUS: Chestnut? IMANI: Sure.
[beat 7] He passes the bag. She takes one. It burns her fingers. She tosses it from hand to hand. IGNATIUS: They're hot. IMANI: I noticed.
[beat 8] Silence. The city drops away below the windows.
[beat 9] IGNATIUS: I got your postcard. IMANI: Did you? IGNATIUS: Three of them. They all said the same thing. IMANI: Which was? IGNATIUS: "Wish you were here." IMANI: That's the whole message. IGNATIUS: It's an interesting message to send to a man you left.
[beat 10] She says nothing. She cracks the chestnut. Eats half. Offers him the rest. He takes it.
[beat 11] IMANI: I didn't leave you. IGNATIUS: You left a note. IMANI: I left a note because I couldn't say it. IGNATIUS: Say what? IMANI: That I was scared.
[beat 12] A light flickers on the car's ceiling. The funicular shudders to a halt. Silence. The cable stops humming.
[beat 13] IGNATIUS: Are we stuck? IMANI: Looks like it.
[beat 14] A third voice, rough and breathless, cuts in from the platform as the door slides open. A conductor in a gray cap, ENRIQUE VALDÉS-MORROW (60s, whistle around his neck, lantern swinging), leans into the car. ENRIQUE: Power cut, folks. Ten minutes. Sit tight. IMANI: Thank you. IGNATIUS: We're not going anywhere.
[beat 15] Enrique glances from one to the other. He tips his cap and slides the door shut.
[beat 16] IMANI: You said that on purpose. IGNATIUS: Which part? IMANI: We're not going anywhere.
[beat 17] He looks at the city. Its lights shimmer through the fogged glass. IGNATIUS: I meant it.
[beat 18] She leans her head against the window. A tiny smile. IMANI: Ten minutes. IGNATIUS: Ten minutes.
[beat 19] IMANI: Then say something.
[beat 20] He opens his mouth. Outside, all the lights in the city flicker, die, and then, one by one, come back.

### SCENE s00519 | INT. CLOCK REPAIR SHOP - DAY
Characters: CLEMENTINE HAWTHORNE-DIAZ, BLESSING OYELARAN, DETECTIVE MARCELLINE ROUX
[beat 0] A cramped shop crowded with ticking. Wall clocks, cuckoo clocks, a grandfather in a corner. Brass gears on a velvet tray. A lamp with a magnifying arm. Dust motes drift in the window light.
[beat 1] CLEMENTINE HAWTHORNE-DIAZ (50s, watchmaker's loupe on a headband, apron full of tiny tools) bends over a pocket watch, tweezers in hand. Her assistant BLESSING OYELARAN (20s, sleeves pushed up) sits at a second bench polishing a mainspring. Across the counter stands DETECTIVE MARCELLINE ROUX (40s, trench coat, notebook), who has been silent for some time.
[beat 2] CLEMENTINE: It stopped at 9:47. ROUX: I know. CLEMENTINE: Someone smashed the crystal. ROUX: I know. CLEMENTINE: And bent the hands. Somebody wanted it to stop there. ROUX: Yes.
[beat 3] She sets down the tweezers. Blessing looks up. Roux flips a page of her notebook.
[beat 4] ROUX: When did you sell it? CLEMENTINE: March. A woman came in. Tall. Hat. She paid in cash. ROUX: Name? CLEMENTINE: She didn't give one.
[beat 5] BLESSING: She did.
[beat 6] Clementine turns to her. Blessing shrinks.
[beat 7] BLESSING: When I wrote the receipt. She said Pettigrew. ROUX: Pettigrew? BLESSING: She spelled it. P-E-T-T-I-G-R-E-W.
[beat 8] ROUX: That's the victim's name.
[beat 9] A cuckoo clock chimes. The bird shoots out, crying, and retreats. Clementine waits for it to finish before she speaks.
[beat 10] CLEMENTINE: She bought her own watch. ROUX: Or someone wanted me to think so.
[beat 11] BLESSING: Why would she smash it? ROUX: Because she wasn't the one who died at 9:47.
[beat 12] Silence. The grandfather clock ticks once. Twice. Roux closes her notebook and gazes at the face of every clock in the room.
[beat 13] Every one of them shows a slightly different time.

### SCENE s00520 | INT. CHEESE AGING CAVE - NIGHT
Characters: OSEI ADJEI-BOATENG, PRIYA RAMANATHAN, RADIO, MARGUERITE, DMITRI VOLKOV
[beat 0] Limestone walls sweat. Racks of wheels, floor to ceiling. Cold. Blue work-lights hum.
[beat 1] OSEI ADJEI-BOATENG, 40s, hairnet, rubber apron, taps a wheel with a brass mallet. Listens. Moves on.
[beat 2] PRIYA RAMANATHAN, 20s, clipboard, headlamp, trails him. New hire. Overeager.
[beat 3] PRIYA: Eleven months on that one? OSEI: Fourteen. PRIYA: It sounds hollow. OSEI: It sounds fine.
[beat 4] He keeps walking. She keeps writing.
[beat 5] A rack of Alpine wheels. Humidity gauge. Everything in order.
[beat 6] PRIYA: Nobody else works nights? OSEI: Nobody else wants to. PRIYA: Why do you? OSEI: Quiet.
[beat 7] A drip. Somewhere deep in the cave, metal clicks. Soft. Regular.
[beat 8] Priya glances up. Osei does not. PRIYA: Is that -- OSEI: Pipes.
[beat 9] Beat. The clicking stops.
[beat 10] Priya relaxes. Laughs at herself. PRIYA: Sorry. First week. Everything's a ghost.
[beat 11] OSEI: There's coffee in the cold room. Go. Warm up. PRIYA: You sure? OSEI: Go.
[beat 12] She goes. Her headlamp swings away down the aisle.
[beat 13] Osei waits. Counts her footsteps. Silence.
[beat 14] He crouches. Pulls a wheel half out of the lowest rack. Behind it: a gap. Duffel bag.
[beat 15] He unzips it. Cash. Banded. Stacks of it.
[beat 16] A RADIO crackles on his belt. MARGUERITE: Osei. Dock camera shows a van. OSEI: Not mine. MARGUERITE: Nobody's on the schedule tonight. Nobody.
[beat 17] Osei zips the bag. Stands. Looks toward the cold room.
[beat 18] OSEI: The new girl. Who hired her? MARGUERITE: Nobody hired her.
[beat 19] Osei's hand goes to the mallet.
[beat 20] Footsteps. Not Priya's. Heavy. Behind him.
[beat 21] DMITRI VOLKOV, 50s, wet wool coat, gray stubble, steps out from between two racks. Hands in pockets. Smiling like a man at a funeral reception.
[beat 22] DMITRI: Osei. Good. Saved me the search. OSEI: You're early.
[beat 23] DMITRI: She's very good, no? The girl. Two weeks of paperwork. Fourteen months of cheese.
[beat 24] Priya returns. No clipboard. No headlamp.
[beat 25] A small pistol, held steady. PRIYA: Bag.
[beat 26] Osei lifts the duffel. Slowly. OSEI: Your coffee's cold. PRIYA: So are you.
[beat 27] Dmitri takes the bag. Weighs it in one hand. DMITRI: Count it. PRIYA: I did. Last Tuesday.
[beat 28] Osei looks at the mallet. At the wheel. At the exit.
[beat 29] MARGUERITE: Osei? Osei, answer me.
[beat 30] Dmitri plucks the radio off his belt. Turns it off.
[beat 31] DMITRI: She talks a lot, your wife.
[beat 32] Osei's jaw sets. OSEI: She's calling the police. DMITRI: She is calling the dock. The dock is mine.
[beat 33] Priya cocks the pistol. The click echoes down the cave. The same click from before.
[beat 34] Osei closes his eyes. OSEI: Pipes. PRIYA: Pipes.

### SCENE s00521 | INT. LAUNDROMAT - 3 A.M.
Characters: NKEM OKPARA, BART, LENNOX
[beat 0] Fluorescent hum. One dryer turning, a single red sock tumbling.
[beat 1] NKEM OKPARA, 30s, in a hospital lanyard, stares at a folded child's pajama set. BARTHOLOMEW "BART" LENNOX, 60s, mop in hand, watches from the doorway.
[beat 2] BART: You been here since midnight. Machine two's been done since one. NKEM: I know.
[beat 3] She does not move. Bart steps closer.
[beat 4] BART: Whose are they?
[beat 5] NKEM: Mine! They were -- they're mine, I'm allowed to wash them!
[beat 6] She hurls the pajamas at the dryer. They slap the glass. Bart does not flinch.
[beat 7] BART: Nobody said you weren't.
[beat 8] NKEM: Stop being nice to me. BART: Can't help it. NKEM: I SAID -- BART: Okay. NKEM: Stop!
[beat 9] Silence. The red sock turns.
[beat 10] Nkem slides down the machine to the floor.
[beat 11] NKEM: She's seven. She's fine. She's in a bed upstairs, and she's fine.
[beat 12] Bart sits on an upturned bucket. BART: Then fold the rest.

### SCENE s00522 | INT. NIGHT FERRY - CAR DECK - NIGHT
Characters: ISOLDE VANTERPOOL, RAFFERTY KANE, JUNG-HO PARK, WINNIE ASHCROFT-DELANEY, SALAZAR
[beat 0] Diesel. Chains rattling. Forty cars, bumper to bumper, under caged yellow lights. The ship rolls, barely.
[beat 1] ISOLDE VANTERPOOL, 30s, purser's vest, walks the lanes with a flashlight. She checks each windshield. Ticks a list.
[beat 2] She stops at a white delivery van. Taps the hood. Moves on.
[beat 3] RAFFERTY KANE, 50s, a trucker in a stained cap, sits on a bumper with a thermos. He raises it in greeting.
[beat 4] RAFFERTY: Evening, miss. Lovely crossing. ISOLDE: Smooth water tonight. RAFFERTY: That's what I said to my ex-wife. Look how that ended.
[beat 5] She almost smiles. Writes something down.
[beat 6] JUNG-HO PARK, 20s, headphones around his neck, leans out of a hatchback, bleary. He yawns.
[beat 7] JUNG-HO: Is there a vending machine on this deck? ISOLDE: Passenger lounge. Deck four. JUNG-HO: Of course there is.
[beat 8] He ducks back in. Isolde keeps walking.
[beat 9] WINNIE ASHCROFT-DELANEY, 70s, a tartan blanket over her knees, sits in a small hatchback, window cracked. A cat carrier on her lap.
[beat 10] WINNIE: Does anybody know if the cats are allowed out for the crossing? RAFFERTY: Rules say no. WINNIE: Rules say. Hm.
[beat 11] Isolde leans down to her window. ISOLDE: Ma'am, I'll check on her in an hour. Promise. WINNIE: It's a him. ISOLDE: I'll check on him in an hour.
[beat 12] She straightens. Her radio squawks.
[beat 13] SALAZAR: Purser to bridge. Purser to bridge. Please confirm car count. Isolde keys her radio. ISOLDE: Forty-one, Captain. Forty-one vehicles. SALAZAR: Say again. ISOLDE: Forty-one.
[beat 14] A long pause. Static. SALAZAR: Manifest says forty.
[beat 15] She stops walking. ISOLDE: Forty-one.
[beat 16] She turns slowly. Eyes down the lanes. Counting under her breath.
[beat 17] Rafferty watches her. The thermos stops halfway to his mouth. RAFFERTY: Something wrong, love? ISOLDE: Nothing. Routine.
[beat 18] She isn't convincing. She moves down the aisle, flashlight low. Stops at the white van again.
[beat 19] Plates: out of state. Not on her list. She hadn't ticked it because she hadn't noticed it. It had been there, quiet, like furniture.
[beat 20] She reaches for the rear door handle. Locked.
[beat 21] JUNG-HO: Hey, uh. That van was here when I parked. ISOLDE: Which means? JUNG-HO: Means nobody got out of it. Not once. I've been watching.
[beat 22] Rafferty sets down the thermos. Stands up. Slow.
[beat 23] RAFFERTY: Miss. Step back. ISOLDE: Why? RAFFERTY: Because I'm a driver. And I know what that engine sounds like when it's not an engine.
[beat 24] Isolde listens. Underneath the diesel and the chains, a thin electric whine. Steady. Patient.
[beat 25] She backs away. One step. Two.
[beat 26] ISOLDE: Captain. Evacuate the car deck. All hands. Now. SALAZAR: Purser, what is it?
[beat 27] Winnie rolls her window up. Clutches the carrier. WINNIE: Hush, hush, hush.
[beat 28] Jung-Ho is already out of the hatchback, running for the stairwell.
[beat 29] The van's side door slides open an inch. A single hand reaches out. Pale. Gloved. It sets a small black box on the deck. Then the door slides shut again.
[beat 30] The whine climbs.
[beat 31] RAFFERTY: EVERYBODY OUT! MOVE!
[beat 32] Isolde grabs Winnie's door. Yanks it open. ISOLDE: Ma'am. Leave the car. WINNIE: The cat -- ISOLDE: Bring the cat.
[beat 33] They run. Behind them the black box blinks once. Green.
[beat 34] Then red.

### SCENE s00523 | EXT. RICE TERRACE BUNKER - DAWN
Characters: LIEUTENANT NIKOLA VASKO, CORPORAL ABEBE TESFAYE, LINNEA STROM
[beat 0] Mud. Standing water, ankle deep. Sandbags slumped like drunks. A shell crater full of rain.
[beat 1] LIEUTENANT NIKOLA VASKO, 30s, helmet gone, one sleeve black with blood, sits against the sandbags. Staring at nothing.
[beat 2] CORPORAL ABEBE TESFAYE, 20s, kneels beside him. Rifle across his knees. Hands shaking.
[beat 3] The guns have stopped. That is the horror of it.
[beat 4] ABEBE: Sir. Sir, it's quiet. VASKO: I hear. ABEBE: Should we go? VASKO: Where?
[beat 5] Abebe has no answer. A bird starts up in the flooded trees. Another.
[beat 6] ABEBE: They're singing. VASKO: They don't know.
[beat 7] Abebe unslings his canteen. Offers it. Vasko drinks. Hands it back.
[beat 8] VASKO: How many? ABEBE: Two of us. VASKO: Three. Count the radio man. ABEBE: He's not -- sir. He's not counting.
[beat 9] Vasko closes his eyes. Nods.
[beat 10] Boots in the mud. Abebe snaps his rifle up.
[beat 11] LINNEA STROM, 30s, a red cross on her armband, comes over the dike with a canvas bag. She is soaked to the thigh. She raises both hands slowly.
[beat 12] LINNEA: Medic. Don't.
[beat 13] Abebe lowers the rifle an inch. ABEBE: Which side? LINNEA: Yours. I think.
[beat 14] She kneels at Vasko. Cuts the sleeve with scissors. He doesn't look.
[beat 15] LINNEA: Lieutenant. Stay with me. VASKO: I'm here. LINNEA: Good. Keep being here.
[beat 16] Abebe sits. The rifle slides into the water. He lets it.
[beat 17] ABEBE: Is it over? LINNEA: For today.
[beat 18] She pulls a bandage tight. Vasko hisses.
[beat 19] The sun clears the ridge. Light spills across the flooded terrace, gold on grey.
[beat 20] Nobody speaks. Birds go on singing.

### SCENE s00524 | INT. PELL & SONS CLOCKMAKERS - NIGHT
Characters: INSPECTOR FOLASADE OYELARAN, CEDRIC PELL, TELEPHONE, DELPHINE
[beat 0] A narrow shop that has outlived its century. Two hundred clocks line the walls, each a different hour, each ticking out of step, so that the room breathes like a sleeping animal. Brass, walnut, bone. A single green-shaded lamp burns on the workbench.
[beat 1] INSPECTOR FOLASADE OYELARAN, 50s, a grey raincoat dripping onto the floorboards, stands in the middle of this noise with the stillness of someone used to being the only quiet thing in a room.
[beat 2] CEDRIC PELL, 60s, watchmaker's loupe pushed up into thinning hair, sits at the bench, a half-assembled movement before him. His hands are steady. His eyes are not.
[beat 3] OYELARAN: Mr. Pell, you told the constable you were home all evening. PELL: I was home. Upstairs. I live above the shop, Inspector. OYELARAN: Yet your lamp was lit down here at nine. PELL: Clocks do not repair themselves.
[beat 4] A cuckoo bursts from a wall case. Nine-thirty on some forgotten schedule. Pell flinches. Oyelaran does not.
[beat 5] OYELARAN: You flinch at that one. PELL: It was my wife's. She wound it every morning for thirty years.
[beat 6] OYELARAN: And Mr. Hartigan? Did he wind anything? PELL: I don't know a Hartigan.
[beat 7] The cuckoo retreats. A grandfather clock tolls once, deep and wet, as though underwater.
[beat 8] Oyelaran crosses to the bench. Lifts the movement between two fingers. Turns it to the light.
[beat 9] OYELARAN: Interesting. The mainspring is brand new. The rest is a hundred years old. PELL: Restorations are mixed.
[beat 10] OYELARAN: Mr. Hartigan's watch was found in the canal this afternoon. Stopped at 8:52.
[beat 11] Pell goes very still. PELL: Water does that. OYELARAN: Water doesn't wind a mainspring backward, Mr. Pell.
[beat 12] Silence. Two hundred clocks and not one of them says the same time.
[beat 13] A TELEPHONE rings on the wall. Old rotary. Black. It rings and rings.
[beat 14] PELL: Let it. OYELARAN: No. I think you should answer.
[beat 15] Pell rises. Crosses. Lifts the receiver. Listens. His face loses its color.
[beat 16] DELPHINE: Cedric? Papa? Are they there yet? PELL: Delphine, not now.
[beat 17] DELPHINE: I did what you said. I put the watch in the canal. But Papa, it was still ticking when I --
[beat 18] Pell slams the receiver down. Too late. The line was open long enough.
[beat 19] Oyelaran has not moved. Her voice is gentle, almost tender.
[beat 20] OYELARAN: Your daughter is very honest. PELL: She is a child. OYELARAN: She is twenty-six.
[beat 21] Pell sinks onto the stool. The loupe falls from his hair and rolls across the bench, stopping against a screwdriver.
[beat 22] PELL: He came for the shop. He wanted the building. Hartigan, he said it was only a matter of time before the street -- OYELARAN: So you wound his watch backward and put him in the canal. PELL: No!
[beat 23] He stands again, trembling. The anger rises up out of him like steam. PELL: No. I did not touch the man. He fell. I swear to you, he fell, he was on the stairs, he laughed at me, Inspector, he laughed at my wife's cuckoo --
[beat 24] OYELARAN: Mr. Pell. PELL: -- and I only wanted him quiet -- OYELARAN: Cedric.
[beat 25] He stops. Breathing hard.
[beat 26] OYELARAN: Sit down.
[beat 27] He sits.
[beat 28] The cuckoo bursts again, absurd, bright. Both of them watch it. PELL: She never could stand that bird.
[beat 29] Oyelaran almost smiles. Almost.
[beat 30] OYELARAN: I will need the key to the cellar.
[beat 31] Pell's hand moves to his waistcoat. The chain. A small brass key. He holds it out across the bench.
[beat 32] She takes it. The lamp flickers.
[beat 33] The telephone begins to ring again. OYELARAN: Let it ring.

### SCENE s00525 | INT. CHURCH BELL TOWER - DAY
Characters: SERGEANT MAGNUS HADLEY, PRIVATE QUIGG, PRIVATE NASRIN KHALIL, CORPORAL TOMASZ WIERZBICKI, MOTHER AGATHE
[beat 0] Snow drifts through the broken louvres and settles on the great bronze bell like flour on a baker's arm. The wooden stair groans below. The air smells of pigeon and old rope.
[beat 1] SERGEANT MAGNUS HADLEY, 40s, a face scoured by wind, crouches at the north louvre with binoculars. PRIVATE QUIGG, 19, freckled, hugs a machine gun. PRIVATE NASRIN KHALIL, 20s, a field radio strapped to her back, picks at a frozen knot. CORPORAL TOMASZ WIERZBICKI, 30s, sits against the wall, bandaging his own hand.
[beat 2] QUIGG: They're moving in the orchard. HADLEY: Count. NASRIN: Nine? Ten -- QUIGG: Twelve. I said twelve. TOMASZ: Twelve, nine, who cares, we're up a steeple. HADLEY: Quiet. Both of you.
[beat 3] A footstep on the stair. Slow. Four rifles swing.
[beat 4] MOTHER AGATHE, 70s, a black habit and a snow-crusted shawl, climbs into the loft carrying a kettle. She is breathing hard and not remotely afraid.
[beat 5] MOTHER AGATHE: You have been in my bell tower since Tuesday. I thought you might want tea. NASRIN: Mother, you can't be up here -- QUIGG: Is it safe? Did you check it?
[beat 6] TOMASZ: She's a nun, she's not going to poison us. MOTHER AGATHE: Not before the second cup.
[beat 7] Hadley lowers the binoculars. For the first time all day, he laughs.

### SCENE s00526 | INT. STARLITE ROLLER RINK - AFTER HOURS
Characters: ODALYS FERREIRA, STARLITE STAFF, FITZ MCALLISTER, BASHIR KARIMI, DJ, JUNIPER FERREIRA
[beat 0] A cavern of scuffed maple and dead disco light. A mirror ball turns slowly, throwing coins of silver across the walls. The air smells of popcorn oil, rubber wheels, and thirty years of cheap perfume.
[beat 1] ODALYS FERREIRA, 50s, in a faded satin jacket that says STARLITE STAFF, stands at the center of the floor with a push broom. She has been sweeping the same square of wood for some time.
[beat 2] At the skate counter, FITZ MCALLISTER, 60s, owner, sorts a bin of rental skates by size. He doesn't look up. A mug of coffee steams beside a signed contract.
[beat 3] BASHIR KARIMI, 30s, a suit too good for this building, leans against the DJ booth with a briefcase. JUNIPER FERREIRA, 17, headphones around her neck, sits on the rail with her skates in her lap, pretending to lace them.
[beat 4] BASHIR: Mrs. Ferreira, I don't want to rush anyone. But the buyer needs the keys by Friday. ODALYS: I heard you the first time. FITZ: She heard you.
[beat 5] ODALYS: Thirty-one years I've swept this floor. BASHIR: And the new development will keep a plaque -- ODALYS: A plaque.
[beat 6] JUNIPER: Mom. ODALYS: Don't "Mom" me. You learned to walk on this floor. JUNIPER: I learned to fall on this floor.
[beat 7] Fitz puts down a skate. Laughs once, softly. Then louder. Then it turns into something else. He covers his face.
[beat 8] FITZ: I signed it, Odie. Tuesday. I couldn't tell you.
[beat 9] The broom drops. It clatters across the maple, a flat hollow sound that rings up into the rafters. ODALYS: You what.
[beat 10] FITZ: The roof is gone. The boiler is gone. I've been paying the electric with my pension -- ODALYS: YOU DIDN'T ASK ME. BASHIR: Please, let's all just take a breath --
[beat 11] ODALYS: Get out. JUNIPER: Get out.
[beat 12] Bashir picks up his briefcase and, for once, is quick about it. The glass door closes behind him with a polite chime.
[beat 13] The mirror ball keeps turning. Odalys sits down hard on the floor. Fitz comes around the counter and sits beside her, knees creaking. Neither speaks.
[beat 14] Juniper stands. Laces her skates properly this time. She rolls out onto the empty rink, slow, then faster, and loops the whole oval alone.
[beat 15] ODALYS: She's got your father's stride. FITZ: She's got yours.
[beat 16] Odalys wipes her cheek with the heel of her hand. Then stands, offers Fitz a hand up. He takes it.
[beat 17] ODALYS: Put on the Bee Gees. FITZ: We're closed. ODALYS: Put on the Bee Gees, Fitzgerald.
[beat 18] He crosses to the booth. Taps a button. A bass line thumps out of tired speakers. The silver light sweeps the three of them as Juniper glides past, arms out, laughing.

### SCENE s00527 | EXT. SALT FLATS TELEGRAPH RELAY - DAY
Characters: SADIE MULVANEY, ELIAS CROW, TEODORA VEGA, PIKE, WHISTLER
[beat 0] White to every horizon. A shack on stilts. A single pole line running away into heat shimmer. The sky is the color of a new nickel.
[beat 1] SADIE MULVANEY, 30s, hat low, Winchester across her lap, sits on the porch rail. She is shelling pistachios with one hand.
[beat 2] ELIAS CROW, 50s, relay operator, bald, sleeves rolled, sits on a barrel beside her, drinking from a tin cup. Calm. Too calm.
[beat 3] Inside, through the open door: the steady TAP-TAP-TAP of the key.
[beat 4] SADIE: Wire's working. ELIAS: Always does.
[beat 5] SADIE: Thought they cut the line at Dry Fork. ELIAS: They did.
[beat 6] She looks at him. He keeps drinking.
[beat 7] A dust plume. Three riders, far off, coming slow.
[beat 8] TEODORA VEGA, 20s, a bandolier and a bad limp, steps out of the shack carrying a coffeepot. She sets it down on the boards.
[beat 9] TEODORA: Riders. SADIE: I see them. TEODORA: Elias, did you -- ELIAS: Sit, Teo. Pour.
[beat 10] She pours. Sadie accepts a cup. The riders grow.
[beat 11] PIKE, 40s, a grey duster, leads them in on a bay mare. Behind him, WHISTLER, 20s, a boy with a tin whistle in his teeth, and no one else. Just two.
[beat 12] They stop at the hitching rail. Pike tips his hat.
[beat 13] PIKE: Miss Mulvaney. SADIE: Pike. PIKE: Heard you were dead. SADIE: Heard the same about you.
[beat 14] Whistler blows a thin note and grins. Teodora's hand drifts toward her hip. TEODORA: Tell the boy to quit that. WHISTLER: Tell the lady I'm sorry. PIKE: Easy, Whistle.
[beat 15] ELIAS: Gentlemen. There's coffee. There's shade. Nobody needs to die before noon. PIKE: Elias, you old rat. You look well. ELIAS: I look the same.
[beat 16] SADIE: You knew they were coming. ELIAS: Didn't know. Hoped. SADIE: That's not the same thing. TEODORA: What did you do, Elias?
[beat 17] PIKE: He sent the wire.
[beat 18] Quiet. The tapping inside goes on. No one is at the key.
[beat 19] Sadie looks at the door. Then at Teodora. Then at Elias, who sets his tin cup carefully on the rail.
[beat 20] ELIAS: Autopilot. Rig's on a timer. TEODORA: A timer for what? ELIAS: The Army, Teo. Forty men. Forty-one miles. They'll be here before dark.
[beat 21] SADIE: You sold us. ELIAS: I sold a salt shack and a dead line. And bought a year of my life.
[beat 22] Whistler's whistle drops from his mouth. WHISTLER: Pike, you said it was only -- PIKE: Shut up, Whistle.
[beat 23] SADIE: Teodora. Pike's going to draw. Left side. TEODORA: I know. PIKE: Now that's rude, Miss Mulvaney --
[beat 24] Sadie fires first. The Winchester cracks. Pike's hat goes spinning out over the flats.
[beat 25] WHISTLER: God, I'm sorry -- I'm sorry --
[beat 26] He drops his gun in the salt. Raises both hands. Pike sits in the dust, staring at his empty head.
[beat 27] PIKE: Sadie. That was my good hat.
[beat 28] ELIAS: Sadie. Let them go. Both of them. SADIE: Why should I? ELIAS: Because the Army's still coming for us. And I'd like fewer witnesses.
[beat 29] She levers another round. Lowers the barrel.
[beat 30] SADIE: Take the horses. Ride south. Don't stop.
[beat 31] Pike nods. He and Whistler mount. They go, slow at first, then not.
[beat 32] Teodora looks at Elias. Her voice is level. TEODORA: You get a head start. One hour. After that, I come looking. ELIAS: Fair.
[beat 33] He takes his hat from the porch nail. Steps off the boards into the white glare and starts walking. No horse. No bag.
[beat 34] Sadie watches until he is a speck.
[beat 35] SADIE: Teo. TEODORA: Yeah. SADIE: Cut the wire.

### SCENE s00528 | INT. VELVET HOURS FUNERAL PARLOR - BACK ROOM - NIGHT
Characters: LOU DEVEREAUX, MISS ALTHEA CROWNINSHIELD, SPATS, BRINDISI
[beat 0] Satin-lined caskets on trestles. Potted ferns. A gramophone plays a muted waltz.
[beat 1] LOU DEVEREAUX, 40s, camel overcoat, snap-brim hat, sits in a leather chair, dealing himself solitaire on the lid of a coffin.
[beat 2] MISS ALTHEA CROWNINSHIELD, 50s, the proprietor, in black crepe and pearls, pours two glasses of sherry. Her hand is perfectly steady.
[beat 3] ALTHEA: You're early, Mr. Devereaux. LOU: Early's polite. Late's a funeral. ALTHEA: You find that amusing? LOU: In this business? Everything.
[beat 4] She hands him a glass. He sips. Nods approval.
[beat 5] LOU: Good sherry. ALTHEA: My late husband's. LOU: He had taste. ALTHEA: He had a will.
[beat 6] Lou smiles. Lays a red queen on a black king.
[beat 7] LOU: About that. The boys tell me the account at First Mercantile is a little light. ALTHEA: They are mistaken. LOU: Seventeen thousand light, Miss Crowninshield. ALTHEA: Then someone has been careless with my money.
[beat 8] ANGELO "SPATS" BRINDISI, 30s, white spats, a pencil moustache, slides in from the hallway holding a ledger like a hymn book. He nods at Althea with exaggerated courtesy. SPATS: Evening, Ma'am. Boss.
[beat 9] LOU: Spats. Show the lady.
[beat 10] Spats opens the ledger on the coffin. Althea does not glance at it. ALTHEA: I know what it says. LOU: Then you know the numbers don't lie. ALTHEA: Numbers never do, Mr. Devereaux. People do.
[beat 11] She crosses to a tall ferns pot. Lifts a fern. Beneath it, a small brass bell on a cord. She rings it, once. A bright, silly chime.
[beat 12] LOU: What's that for? ALTHEA: A courtesy.
[beat 13] Every one of the coffin lids in the room creaks open an inch. A dozen gun barrels slide out, gleaming, steady.
[beat 14] Spats drops the ledger. Lou's cards scatter.
[beat 15] ALTHEA: My husband always said: never trust a man who rushes a funeral. LOU: Well. To your late husband. ALTHEA: To the late Mr. Devereaux.
[beat 16] She clinks her glass to his. The waltz plays on.

### SCENE s00529 | INT. CONSERVATORY GREENHOUSE - ORCHID SHOW - DAY
Characters: WREN ASHBY-LOVELACE, STRANGER, ABARA, TAMSIN
[beat 0] Glass and humid green. Ten thousand blossoms on risers: slipper orchids like lacquered tongues, moth orchids like frozen flight. Rain ticks on the panes overhead.
[beat 1] WREN ASHBY-LOVELACE, 30s, in a cardigan the color of moss, bends close to a speckled bloom with a magnifying glass, entirely absorbed.
[beat 2] A STRANGER, 30s, a woman in a rain-darkened trench and a scarf the red of a struck match, stops beside her. She does not look at the orchids. She looks at Wren.
[beat 3] STRANGER: That one is lying to you. WREN: Excuse me? STRANGER: The label says Paphiopedilum. But it's a hybrid. Look at the staminode.
[beat 4] Wren lowers the glass. Looks. Looks again. She laughs, low and surprised.
[beat 5] WREN: You're right. She's right. Whoever grew it, I mean. STRANGER: She'd be furious with you for guessing.
[beat 6] MR. ABARA, 60s, a show steward with a lapel rosette, glides by with a clipboard and clears his throat. MR. ABARA: Ladies, the judging begins at noon. Kindly keep to the path.
[beat 7] He moves on. The two women watch him go, then glance at each other, conspirators.
[beat 8] WREN: I'm Wren. STRANGER: Tamsin.
[beat 9] She extends her hand. Wren takes it. Neither lets go at once.
[beat 10] Above, the rain thickens.
[beat 11] TAMSIN lifts her scarf, and, shyly, shows Wren the orchid pinned beneath it: a hybrid, speckled, impossible.
[beat 12] TAMSIN: I grew it for the judging. I was going to lose on purpose. WREN: Don't. Not today.

### SCENE s00530 | INT. ABANDONED GRAIN ELEVATOR - NIGHT
Characters: DEKE MARSHALL, OLLIE, MIRIAM MARSHALL
[beat 0] Dust hangs in the flashlight beam like smoke. Rusted chutes, a floor of old husk, a ladder going up into black. DEKE MARSHALL, 40s, a farmer's jacket, grips a flashlight in one hand and OLLIE, 8, by the wrist with the other, hauling him toward the door while MIRIAM MARSHALL, 40s, Deke's wife, swings a crowbar at the ladder's base and screams at the dark above, and Ollie, crying, drops his stuffed rabbit, turns back for it, and Deke yanks him so hard the boy's shoe slides off in the grain.
[beat 1] Something heavy shifts overhead. Husk rains down.
[beat 2] DEKE: Don't look up. MIRIAM: Don't look up! OLLIE: Daddy, it knows my name!
[beat 3] The beam shakes.
[beat 4] The door is three steps away, chained from outside.
[beat 5] MIRIAM: Deke. The chain. DEKE: I see it.
[beat 6] The ladder creaks. One rung at a time. Slowly now.
[beat 7] Ollie goes silent. Stops crying. Holds his father's hand and stares at the door.

### SCENE s00531 | EXT. CABLE CAR GONDOLA - HIGH OVER A HARBOR - NIGHT
Characters: CALLUM DRUMMOND-OKAFOR, SUNITA RAO, REYES, FELIX ODUYA
[beat 0] A glass bubble swinging a hundred meters above black water. City lights fall away in every direction. Wind leans on the cabin.
[beat 1] The gondola has stopped. Dead stop. It sways.
[beat 2] CALLUM DRUMMOND-OKAFOR, 30s, rumpled tuxedo, bow tie undone, grips the handrail. SUNITA RAO, 30s, bridesmaid's dress the color of a bruised plum, heels in one hand, leans against the opposite glass.
[beat 3] CALLUM: We're fine. SUNITA: We are not fine. We are stuck. CALLUM: Stuck is a kind of fine.
[beat 4] Silence. The cabin sways. They both grab the rail. Eyes meet. Both freeze.
[beat 5] SUNITA: You look terrible. CALLUM: You left the wedding. SUNITA: You followed me. CALLUM: Also terrible, I know.
[beat 6] A speaker crackles near the ceiling.
[beat 7] REYES: Gondola four, this is control. Are you hurt? Over. CALLUM: No. Just stuck. Are we going to move? REYES: Power's out on the whole peak. Twenty minutes. Maybe thirty. Please sit down.
[beat 8] Sunita sits on the bench. Callum sits across from her. Their knees almost touch.
[beat 9] SUNITA: Twenty minutes. CALLUM: I can count to twenty minutes of anything. SUNITA: You said that about your marriage.
[beat 10] His mouth twitches. A pained half-smile. CALLUM: Twelve minutes in, I'll have thought of something good.
[beat 11] Light blooms in the next gondola, thirty feet away, swaying. A silhouette stands at the glass, waving both arms.
[beat 12] FELIX ODUYA, 30s, in a groom's white jacket, pounds on the glass of the adjacent cabin and mouths words. SUNITA: Don't look. CALLUM: Is that -- SUNITA: Don't.
[beat 13] Felix cups his hands against the glass. Shouts. Muffled, through two walls of glass and a gale. FELIX: SUNITA! I CAN EXPLAIN!
[beat 14] Callum and Sunita both stand. They crash together at the center of the cabin, arguing, then not arguing, her hand fisted in his lapel, his on her wrist, then her jaw.
[beat 15] The gondola lurches.
[beat 16] They fall back to the bench, laughing, helpless, horrified. SUNITA: I can't believe he's the groom. CALLUM: I can't believe you're the one who brought the ring.
[beat 17] REYES: Gondola four? I'm hearing a lot of shouting. Everyone okay? SUNITA: Never better.
[beat 18] The lights flicker on. The cable shudders. The gondola begins, slowly, to move, toward the shore, toward the other cabin, toward whatever comes next.
[beat 19] Callum offers her his hand. She takes it.

### SCENE s00532 | INT. NANA ROSALBA'S KITCHEN - POWER OUT - NIGHT
Characters: NANA ROSALBA, DESMOND, IMANI, KOFI, AUNT PETRA
[beat 0] Candles in jam jars. A pot of rice losing its heat on a dead stove. Rain on the tin roof, loud as applause. NANA ROSALBA, 80s, in a housecoat, ladles soup by feel. Her son DESMOND, 50s, kneels at the breaker box with a phone flashlight in his teeth. His daughter IMANI, 16, scrolls a dead phone in disgust. KOFI, 9, hides under the table with a toy truck. AUNT PETRA, 60s, wrings her hands by the window.
[beat 1] DESMOND: Everybody stay put. PETRA: We are staying put, Desmond, there is nowhere to go. IMANI: Twelve percent. I had twelve percent.
[beat 2] NANA: Bowls. Whoever is standing, get bowls. KOFI: It's too dark to find the bowls. NANA: Then find them with your hands, like Jesus. IMANI: Nana -- DESMOND: Mama, he didn't -- PETRA: It's in the Bible somewhere.
[beat 3] Thunder cracks. The candles gutter. Kofi shrieks. Everyone talks at once, and then all stop.
[beat 4] Nana places a bowl in front of her grandson, then touches his hair. NANA: Eat.

### SCENE s00533 | EXT. STOCKYARD AUCTION RING - DAY
Characters: HEIFER, HOLLIS BRADDOCK, MARIBEL BRADDOCK, TAVISH DOYLE, DOLLY, AUCTIONEER
[beat 0] Plank bleachers. Dust. A hand-lettered sign: LOT 14, HEIFER, OPEN BIDDING. Flies work the heat. HOLLIS BRADDOCK, 60s, a hat older than his marriage, sits in the third row with his hands in his lap. Beside him MARIBEL BRADDOCK, 50s, stares straight ahead, ring finger bare. Across the aisle TAVISH DOYLE, 40s, in a clean vest, a bidder's card in his fist, doesn't look at either of them. DOLLY, 12, Hollis's granddaughter, sits at the rail with her boots dangling and watches all three.
[beat 1] AUCTIONEER: Who'll give me four? Four hundred, four, I got four, now five, five, who'll give five? Tavish lifts his card. Hollis does not move. Maribel's jaw tightens. AUCTIONEER: Five, I got five from the man in the vest, now six? Six for a good milker, six?
[beat 2] Hollis shifts in his seat. Takes off his hat, turns it twice by the brim, puts it back on. Maribel slides one foot six inches away from his. Dolly picks at a splinter and keeps looking at her grandfather's hands. AUCTIONEER: Six anywhere? Going once --
[beat 3] Hollis lifts one finger. Barely. AUCTIONEER: Six, I got six! Seven?
[beat 4] Tavish glances over, nods at Hollis, once. Lifts his card.
[beat 5] MARIBEL: Eleven years. HOLLIS: Mm. AUCTIONEER: Seven, going --
[beat 6] Hollis lowers his hand. Dolly looks at Maribel. Maribel looks at Tavish.
[beat 7] Gavel.

### SCENE s00534 | INT. GENERATION SHIP "HALCYON" - SEED VAULT - NIGHT CYCLE
Characters: ENGINEER AKINYI WAMBUGU, ARCHIVIST VOSS
[beat 0] A long white corridor lined with frost-skinned drawers. Each is labeled in small black type: wheat, barley, lentil, cacao. Cold exhales from the vents. A low pump hum. ENGINEER AKINYI WAMBUGU, 40s, thermal gloves, a utility belt, checks a sensor panel. ARCHIVIST VOSS, 50s, a cardigan too thin for the temperature, stands at the end of the aisle holding a slim black case against her chest.
[beat 1] AKINYI: You're not on the roster. VOSS: I'm the Archivist. I'm always on the roster. AKINYI: Not for this deck. Not at this hour.
[beat 2] Voss does not answer. She walks the aisle, running her fingertips along the frosted drawers. Akinyi watches the case.
[beat 3] AKINYI: That's a lot of case for a woman who inventories paper. VOSS: It's only an old habit. AKINYI: Show me.
[beat 4] Voss stops at a drawer marked SOLANUM TUBEROSUM. Pulls the handle. A tray of small grey tubers slides out under glass. She sets the case on the counter. Clicks the lock. Does not open it.
[beat 5] VOSS: You know what we've lost in four generations, Akinyi? AKINYI: Eleven strains of rice. Three of coffee. VOSS: Four hundred and six varieties. I counted every one.
[beat 6] She slides the case a few centimeters toward the potatoes. Akinyi's eyes flick to the panel. The temperature reading has not changed. Neither has her breathing.
[beat 7] AKINYI: So what's in the case? VOSS: Things the Council doesn't want to be counted. AKINYI: That's contraband. VOSS: That's a library.
[beat 8] Akinyi pulls a data slate from her belt. Taps it. A tone sounds in the ceiling. VOSS: You just called them. AKINYI: I called the Captain. He asked me to.
[beat 9] Voss nods. Slow. Her hand lifts from the case, rests flat on the cold metal beside it. VOSS: Then do it. Open the drawer. Put it all in the shredder. Four hundred and six. AKINYI: I can't. VOSS: You can. You're holding the key.
[beat 10] Akinyi looks down. In her palm, a brass key. She does not know when she took it from her belt. AKINYI: You knew I'd bring it. VOSS: I knew you'd bring it.
[beat 11] The vents shudder. Steam rolls along the floor. Footsteps, far off. Many.
[beat 12] Akinyi lays the key on the counter, next to the case, carefully, as though it were something alive. AKINYI: Then you've got four minutes.
[beat 13] Voss opens the case.

### SCENE s00535 | INT. MERIDIAN PLANETARIUM - DOME CHAMBER - NIGHT
Characters: ZELDA NAKASHIMA-HOLT, MONTY, ABERNATHY, RAJESH SUBRAMANIAN, SABINE DELACROIX-ODUYA, CRISPIN
[beat 0] A hemisphere of white plaster, the ceiling curved like the inside of an egg. In the center, a Zeiss star projector crouches on its pedestal like a patient insect. Rows of reclined seats fan out below, empty, dark. ZELDA NAKASHIMA-HOLT, 40s, black coveralls, a tool roll slung across her shoulder, stands at the base of the projector with a micrometer and a face like a surgeon's. MONTGOMERY "MONTY" ABERNATHY, 60s, a former curator in a cardigan, shuffles up the aisle carrying a lantern and a clipboard he has no use for. RAJESH SUBRAMANIAN, 30s, a hacker with a backpack of laptops, kneels beside a panel in the wall. SABINE DELACROIX-ODUYA, 30s, a safecracker in a pencil skirt, taps along a seam in the plaster with a stethoscope. CRISPIN, 12, Monty's grandson, in a school blazer, sits in the front row with his chin on his knees and watches them all.
[beat 1] ZELDA: Raj. Status. RAJESH: Motion sensors off. Cameras are looping the last four minutes of Tuesday. ZELDA: Monty? MONTY: It's in the cupola, Zelda. Behind the Pleiades. The Director insisted on that. A little theatre. SABINE: Of course he did.
[beat 2] She presses her ear to the plaster. Smiles. SABINE: Found it. Seam runs vertical, eighteen inches off the Southern Cross.
[beat 3] Zelda crosses to the projector. Checks a gauge. Wipes dust off the lens with her sleeve. The star field on the dome flickers once. CRISPIN: Grandpa, is it supposed to do that? MONTY: God help us, no.
[beat 4] Rajesh freezes. A single red LED on his laptop blinks. Then another. Then every screen at once. RAJESH: Somebody just opened a remote session. ZELDA: Whose? RAJESH: Mine.
[beat 5] He slams the lid. The dome flares. Stars wheel, sweep, collapse into a single white point, and then Monty's own recorded voice, thirty years younger, booms through the speakers like the voice of God: MONTY: Welcome to the Meridian Planetarium. Tonight's program is: THE NIGHT SKY OVER AN UNSUSPECTING CITY.
[beat 6] Sabine drops the stethoscope. Monty drops the lantern. The lantern rolls across the aisle and goes out. The room falls to starlight.
[beat 7] ZELDA: Rajesh, kill it. RAJESH: I'm trying! SABINE: Is this part of the plan? MONTY: It's the Director's idea of a joke.
[beat 8] Crispin raises his hand like a good student. CRISPIN: I think I know where the switch is. All four adults turn. The boy gets up, walks to a wall panel behind the front row, lifts a flap that none of them noticed, and flips a lever.
[beat 9] The dome fades to black. The voice dies. A long beat of silence.
[beat 10] Then the projector begins to turn on its own. A new star field spins up. It is not the northern hemisphere. It is a drawing: a long line of gold pinpricks tracing the outline of a vault door.
[beat 11] MONTY: Oh, Henry. You clever old man. SABINE: He mapped it. ZELDA: He mapped it on the ceiling.
[beat 12] Rajesh scrambles for his camera. Sabine runs for the cupola ladder. Zelda grabs Monty by the arm and hauls him after her.
[beat 13] Crispin lingers in the aisle, face turned up, lit gold. CRISPIN: Grandpa. That one's you. He points at a single star, slightly brighter than the rest. MONTY: So it is.
[beat 14] Footsteps in the corridor outside. Real ones. Multiple. Heavy shoes on marble. A radio crackles.
[beat 15] Zelda and Sabine and Rajesh freeze mid-stride, then scatter: Zelda behind the projector, Sabine flat against the cupola wall, Rajesh down between two rows of seats with a laptop clutched to his chest.
[beat 16] Monty stands in the middle of the aisle, alone and lit with gold, and does the only brave thing he has done in thirty years. He turns toward the door and smiles. MONTY: Gentlemen! You're just in time for the show.

### SCENE s00536 | INT. REQUISITIONED OPERA HOUSE - FIELD HEADQUARTERS - DAY
Characters: MAJOR PATRICK HALLORAN, CAPTAIN LUCIEN BEAUMONT, LIEUTENANT THOMAS DUPREE, SERGEANT GRISWOLD, PRIVATE WIGGINS
[beat 0] Gilded boxes, a chandelier wrapped in burlap, a stage covered with maps. Plaster cherubs peer down at a long table of officers. Somewhere, a piano is out of tune. MAJOR PATRICK HALLORAN, 50s, silver at the temples, stands at the center of the stage with a pointer. CAPTAIN LUCIEN BEAUMONT, 40s, a trim moustache and a brigade tie, sits stiffly at his left. LIEUTENANT THOMAS DUPREE, 20s, pale, writes everything down. SERGEANT GRISWOLD, 40s, a boxer's nose, leans on a velvet curtain with arms crossed.
[beat 1] HALLORAN: We hold the bridge until dawn. After that, it isn't ours.
[beat 2] BEAUMONT: He'll never hold until dawn, Major. DUPREE: Which he, sir? HALLORAN: He means me. BEAUMONT: I mean the man you've put at the east end. GRISWOLD: He's mine, sir. He's the best I've got. BEAUMONT: Then God help the rest.
[beat 3] The door at the back bangs open. A scrap of daylight cuts the aisle. PRIVATE WIGGINS, 18, a mud-streaked messenger with a satchel, runs down the carpet at full tilt and salutes, panting.
[beat 4] WIGGINS: Major, sir. The bridge is gone. Silence. A cherub's plaster smile hangs over them. HALLORAN: How gone? WIGGINS: Blown, sir. From our side.
[beat 5] Beaumont slowly stands. Halloran lowers his pointer.

### SCENE s00537 | EXT. ROADSIDE DRIVE-IN THEATRE - NIGHT
Characters: ANNELIESE VOSKUIJLEN, CORINNE VASQUEZ-LEE, GABRIEL ACHTERBERG, TAKESHI NAKAMURA
[beat 0] Rain on a field of parked cars. A giant screen, torn at one corner, shows a black-and-white kiss in forty-foot faces. Speakers hang on posts like mourners. Windshield wipers keep time.
[beat 1] At the back of the lot, under the sagging eaves of the projection booth, ANNELIESE VOSKUIJLEN, 30s, a bride in a rain-soaked gown and borrowed denim jacket, stands with a lit cigarette she is not smoking. Her sister-in-law-to-be CORINNE VASQUEZ-LEE, 30s, a maid of honor with a ruined updo, holds a stolen bottle of champagne by the neck. Between them, the rain. Between them, everything.
[beat 2] CORINNE: You can't just walk out of your own wedding. ANNELIESE: I walked out of my own wedding. CORINNE: The caterer is crying. ANNELIESE: The caterer is always crying.
[beat 3] Corinne laughs, wet, despite herself. Hands over the bottle. Anneliese drinks. Hands it back.
[beat 4] ANNELIESE: He's good, Corinne. CORINNE: He's wonderful. ANNELIESE: So why does it feel like a cage? CORINNE: Maybe because it's a cage you picked.
[beat 5] A silhouette appears at the edge of the lot, umbrella tilted. GABRIEL ACHTERBERG, 30s, a groom in a ruined waistcoat, jogs toward them through the puddles, the umbrella useless. GABRIEL: Anna! Anna, I'm not here to -- ANNELIESE: Gabe.
[beat 6] CORINNE: I'll be in the car. Corinne retreats, taking the champagne. Gabriel arrives, drenched, breathless. He stops three feet away.
[beat 7] GABRIEL: Your mother is giving a speech to the empty chairs. ANNELIESE: That sounds like her. GABRIEL: I told her you needed air. ANNELIESE: I needed this.
[beat 8] She gestures at the lot: the rain, the cars, the screen. On it, the silent couple kiss again. GABRIEL: I never knew you liked the pictures. ANNELIESE: I came here with my father. Every Friday. Until he sold the Chevy. GABRIEL: You never told me. ANNELIESE: You never asked.
[beat 9] The sting lands. He takes it, nods. GABRIEL: Fair.
[beat 10] TAKESHI NAKAMURA, 70s, the projectionist, leans out of the booth window with a thermos and a skeptical eyebrow. TAKESHI: Folks, you are blocking the exit. ANNELIESE: Sorry. GABRIEL: Sorry! TAKESHI: You two the runaway wedding? ANNELIESE: Probably. TAKESHI: Good. Come in. Better view from up here.
[beat 11] Gabriel and Anneliese look at each other, uncertain, then climb the iron stair into the booth. It smells of warm dust and film. A single projector clatters in the dark, throwing a beam through a square window.
[beat 12] The old man pours three paper cups from the thermos. TAKESHI: My wife and I watched this one thirty-one years ago. She said, "He's going to leave her." GABRIEL: Does he? TAKESHI: Watch.
[beat 13] On the screen, the man walks into the rain. The woman does not call after him. The camera holds on her face.
[beat 14] Anneliese reaches for Gabriel's hand, does not take it, rests her fingers an inch from his. ANNELIESE: She's going to let him. TAKESHI: Only in this version.
[beat 15] The reel clatters. The picture jumps. In the splice, a frame goes white and then, impossibly, the man turns around.
[beat 16] Gabriel's breath catches. Anneliese's hand closes over his. GABRIEL: Is that...
[beat 17] TAKESHI: Different print. Spliced it myself, the winter she died. I couldn't stand the ending either. Rain on the roof. Three paper cups. The woman on the screen takes one step toward the man.
[beat 18] ANNELIESE: Takeshi. You're a terrible projectionist. TAKESHI: And you are a terrible bride.
[beat 19] Gabriel starts to laugh. Then Anneliese. The old man joins them, wheezing, coughing, shaking his head.
[beat 20] Outside, in the car, Corinne watches the window of the booth glow like a lantern and finishes the champagne alone.

### SCENE s00538 | INT. BRIGHTWAVE SYNERGY SOLUTIONS - OPEN-PLAN FLOOR - MORNING
Characters: TRIP HALVERSEN, LEAN, LAKSHMI PILLAI, GUS ABERNETHY, DEBORAH-LYNN FOSTER, VP, BEIGE MAN, BEIGE SUIT, KENT
[beat 0] Standing desks, kombucha taps, a neon sign that reads GOOD VIBES ONLY. In the center of the floor, a bounce house shaped like a giant inflatable castle wobbles under fluorescent light.
[beat 1] TRIP HALVERSEN, 30s, "Chief Happiness Officer," in a vest that says LEAN IN, stands on a cube with a wireless mic. LAKSHMI PILLAI, 30s, a project manager, sits at her desk with a laptop, headphones, and a thousand-yard stare. GUS ABERNETHY, 50s, a senior accountant, stands at the water cooler, holding a paper cone. DEBORAH-LYNN FOSTER, 40s, the VP of People, arranges lanyards on a folding table.
[beat 2] TRIP: Good morning, Brightwavers! Today's wellness initiative: Synergy Jump! No one moves. Lakshmi turns a page. TRIP: Everybody grab a partner and bounce toward your quarterly goals!
[beat 3] GUS: I have goals. They're not in a castle. DEBORAH-LYNN: Gus, participation is a core value. GUS: Participation is a hostage situation. LAKSHMI: Deborah-Lynn, I have a deadline. DEBORAH-LYNN: Everyone has a deadline, Lakshmi. TRIP: Great energy! Love the energy!
[beat 4] The castle's blower sputters. A cough of air. One turret sags.
[beat 5] Lakshmi finally pulls off her headphones. LAKSHMI: Is that structurally sound? TRIP: It's rated for three hundred pounds. GUS: Rated by whom? TRIP: By... the rental company.
[beat 6] A MAN IN A BEIGE SUIT, 50s, no lanyard, no smile, steps out of the elevator carrying a briefcase. He moves through the floor like a shark through kelp. Nobody stops him. DEBORAH-LYNN: Who is that? TRIP: I thought he was yours.
[beat 7] The man in the beige suit stops at the castle. Looks up at it. Looks at the mic. Looks at Trip. BEIGE MAN: Mr. Halversen? TRIP: Halverson. Trip. BEIGE MAN: Halverson. I'm from the insurance carrier.
[beat 8] The blower sputters again. Another turret sags. Gus sips his water. DEBORAH-LYNN: We're in the middle of a team-building -- BEIGE MAN: Yes. I can see. Lakshmi starts typing again, smiling now. TRIP: Sir, with respect, this is a culture initiative --
[beat 9] BEIGE MAN: My name is Kent. Kent Aldrich-Bowman. And I am here to tell you that your policy lapsed Monday. Silence. The castle exhales. Nobody speaks. TRIP: That's... that can't be right. KENT: Which is why I brought the paperwork.
[beat 10] He opens the briefcase. Takes out a stack of forms, each tabbed with little yellow flags. DEBORAH-LYNN: Great! We love paperwork! Trip, give Kent a lanyard. TRIP: Everyone, please welcome Kent from... Risk.
[beat 11] GUS: It's a trap. LAKSHMI: It's a rental.
[beat 12] The castle's front wall folds inward with a long, sad hiss. Trip, still clutching his mic, topples slowly into the collapsing fabric and vanishes.
[beat 13] KENT: Please note the time. DEBORAH-LYNN: It's 9:14. KENT: Thank you. 9:14. He writes it on a form.
[beat 14] LAKSHMI: Does that cover the kombucha? KENT: Nothing covers the kombucha.
[beat 15] Gus raises his paper cone, solemn, as to a toast. GUS: To synergy.

### SCENE s00539 | INT. ST. ELMO'S HOSPITAL - HYPERBARIC CHAMBER - NIGHT
Characters: NIAMH FENWICK, NURSE ILSE BRANDTNER, IGOR DOBROVOLSKY
[beat 0] A steel cylinder the size of a bus, portholes glowing amber. Gauges tick. Pumps breathe. A cot is bolted to the floor inside; its occupant lies under a clear oxygen hood. The room smells of rubber and warm metal.
[beat 1] DR. NIAMH FENWICK, 50s, short grey hair, scrubs washed pale, sits on a stool beside the cot. She keeps one hand on a pressure dial. NURSE ILSE BRANDTNER, 30s, ponytail, tired eyes, checks a drip bag. MR. IGOR DOBROVOLSKY, 70s, the patient, thin as a rake, a diver's tattoo on his forearm, lies back with a hissing mask over his mouth.
[beat 2] She watches the dial. He watches the ceiling. They both know the dive was a long time ago.
[beat 3] DOBROVOLSKY: Doctor. How long? FENWICK: Forty more minutes, Mr. Dobrovolsky. DOBROVOLSKY: You said that an hour ago. FENWICK: I was optimistic.
[beat 4] He chuckles. It becomes a cough. Ilse leans in and adjusts the hood. ILSE: Easy, Mr. D. Slow breaths. DOBROVOLSKY: I have been breathing for seventy-two years. ILSE: Then you should be good at it.
[beat 5] He closes his eyes, smiling faintly. She checks the line. Then glances at Fenwick. A look passes between them: this one is not going well.
[beat 6] Fenwick rises. Crosses to the porthole. Stares out at the dark corridor. FENWICK: Ilse. His carboxy levels? ILSE: Fourteen. Down from nineteen. FENWICK: That's good. ILSE: It's slow.
[beat 7] Fenwick rubs the bridge of her nose. She says nothing. Behind them the old man's chest rises and falls under the plastic.
[beat 8] DOBROVOLSKY: Doctor Fenwick? FENWICK: Yes? DOBROVOLSKY: You are not telling me something.
[beat 9] She turns. Comes back to the cot. Sits. FENWICK: No. I'm not. DOBROVOLSKY: Good. I like honesty. Say it.
[beat 10] FENWICK: The damage to your lungs is more extensive than we thought.
[beat 11] He nods slowly. His hand finds hers on the rail. DOBROVOLSKY: Is it the sea? FENWICK: It's the years of it. DOBROVOLSKY: Ah. Then I cannot complain. She was always generous.
[beat 12] Ilse turns away, adjusting a monitor that doesn't need adjusting. DOBROVOLSKY: Nurse Brandtner. Do not cry in front of a Russian. ILSE: I'm not. DOBROVOLSKY: You are. It is all right. We cry also. We just hide it in vodka.
[beat 13] Fenwick laughs. A real one, helpless, short. She presses the back of her wrist to her mouth. FENWICK: Mr. Dobrovolsky, you are impossible. DOBROVOLSKY: It is my best quality.
[beat 14] The pressure dial ticks down. A soft chime. The pumps slow. He watches the needle fall, calm, like a man watching tide.
[beat 15] DOBROVOLSKY: When I came up the first time... nineteen seventy-nine. Off Sakhalin. The light was the color of this room. I thought: I will never see anything more beautiful. FENWICK: And now? DOBROVOLSKY: Now I think the same. But I am not afraid.
[beat 16] Ilse takes his other hand. He squeezes it.
[beat 17] ILSE: Do you want us to call anyone? DOBROVOLSKY: There is a daughter in Vladivostok. She has not spoken to me in nine years. FENWICK: We'll call her. DOBROVOLSKY: She will not answer. FENWICK: Then we'll leave a message.
[beat 18] He thinks about it. The gauges tick. DOBROVOLSKY: Tell her... the sea says hello.
[beat 19] Ilse nods. Fenwick nods. The dial reaches zero.
[beat 20] A long hiss as the chamber decompresses. The hatch unseals. Cool air rolls in, and the light from the corridor falls across his face, pale and ordinary.
[beat 21] He opens his eyes. Looks at the doorway. Smiles. DOBROVOLSKY: There it is.

### SCENE s00540 | EXT. LIFE RAFT - SOUTHERN OCEAN - DAWN
Characters: CAPTAIN HAAKON LUNDQVIST, MBEKI NTULI, LUCIANA FARIAS, PIP
[beat 0] A yellow canopy bobbing on a swell the color of slate. Fog lies in the troughs. The sea has gone, for the first time in nine days, almost still.
[beat 1] CAPTAIN HAAKON LUNDQVIST, 60s, a beard crusted with salt, sits at the hatch with a flare gun across his knees. MBEKI NTULI, 30s, the first mate, bails with a plastic cup, steady as a metronome. LUCIANA FARIAS, 20s, the cook, huddles in a foil blanket, lips cracked. PIP, 16, the cabin boy, lies asleep with his head in her lap.
[beat 2] HAAKON: It's flat. MBEKI: It's flat. LUCIANA: Is that good? HAAKON: It means the storm's gone. MBEKI: It means the storm's behind us. LUCIANA: Is that different? MBEKI: Ask me tomorrow.
[beat 3] HAAKON: Water? LUCIANA: Half a cup each. I measured. HAAKON: Split Pip's. MBEKI: He's nine days younger than the rest of us. HAAKON: Give him less, then. LUCIANA: No. I'm giving him more. HAAKON: Luciana -- LUCIANA: He told me his mother's name. Last night. He thought I was asleep. He kept saying it. Over and over. Adelheid. Adelheid.
[beat 4] MBEKI: Captain, the boy's all right. HAAKON: The boy's fine. LUCIANA: You keep saying that like it's a prayer. HAAKON: It's a log entry. MBEKI: It's both.
[beat 5] Pip stirs. Murmurs. Luciana strokes his forehead. All three wait for him to settle.
[beat 6] HAAKON: Mbeki. Last night. Did you hear it? MBEKI: The engine? HAAKON: Not an engine. LUCIANA: What are you two talking about? MBEKI: A low sound. Like a drum, far off. HAAKON: I thought I dreamed it. MBEKI: We didn't both dream it. LUCIANA: Could it be a ship? HAAKON: Ships don't sound like that. LUCIANA: Then what? HAAKON: Whales. Or ice. Or --
[beat 7] He stops. The fog parts. In the trough ahead, a wall of white rises, hundreds of feet high, glittering. MBEKI: Iceberg. LUCIANA: It's beautiful. HAAKON: It's moving toward us. MBEKI: Everything moves toward us, Captain.
[beat 8] Pip sits up. Rubs his eyes. Looks at the berg and the three adults, all staring, none speaking. PIP: Is it breakfast?
[beat 9] Luciana laughs, ragged, helpless, near tears. Mbeki lowers his bailing cup. Haakon lifts the flare gun, aims into the gray sky, and fires.
[beat 10] A red star blooms above them. Four faces turn up to it, lit crimson, silent.

### SCENE s00541 | INT. SHUTTERED BOWLING ALLEY - IMPROVISED ARBITRATION HALL - DAY
Characters: ARBITRATOR ODETTE MARCHAND, COUNSEL ELLIOT VESPER, KHALID RAHMAN
[beat 0] Lanes polished to a dull glow. A folding table placed at the foul line, three chairs, a pitcher of water. Behind them, the pin deck, bare. Dust floats in light from the high windows.
[beat 1] ARBITRATOR ODETTE MARCHAND, 60s, in a charcoal suit, sits at the head with a fountain pen and a legal pad. She hasn't blinked in a minute. COUNSEL ELLIOT VESPER, 40s, sleeves rolled, stands at the lane's edge with a stack of exhibits. His client sits across from him: KHALID RAHMAN, 50s, a contractor's work boots and a clean white shirt, hands folded.
[beat 2] VESPER: Mr. Rahman, you signed the original contract in March. RAHMAN: Yes. VESPER: And you understood that it covered the demolition and remediation of the east wing. RAHMAN: I understood that it covered what I was told it covered. VESPER: Told by whom? RAHMAN: By you.
[beat 3] Marchand's pen scratches. Vesper smiles thinly.
[beat 4] VESPER: Mr. Rahman, we have a signature on page nineteen. RAHMAN: You have a signature on page nineteen. You do not have a signature on page twenty. Because page twenty does not exist. Vesper's smile stays. His shoulders tighten.
[beat 5] VESPER: Madam Arbitrator, the witness is characterizing. MARCHAND: Overruled. Continue.
[beat 6] VESPER: Mr. Rahman. Is it your testimony that the contract was never finalized? RAHMAN: It's my testimony that the contract you handed me was a draft, and the one you filed with this panel is a forgery.
[beat 7] The word drops into the lane like a ball. Nothing rolls. MARCHAND: Counsel, that is a serious accusation. VESPER: Madam Arbitrator, I must --
[beat 8] RAHMAN: Seven years I have built hospitals. Seven. I have never once been accused of cutting corners. And you come here with a paper that says I did. VESPER: Sit down, Mr. Rahman. RAHMAN: I am sitting. VESPER: Then be quiet. RAHMAN: Or what?
[beat 9] Vesper leans over the table, close. Marchand puts down her pen with a click that rings off the pins. MARCHAND: Counsel. Step back.
[beat 10] He steps back. Slow. He adjusts his cuffs, a tic.
[beat 11] MARCHAND: Mr. Vesper. How long have you been practicing? VESPER: Eighteen years. MARCHAND: And in those eighteen years, have you ever once been handed a document that you knew to be incomplete? VESPER: Never, Madam.
[beat 12] MARCHAND: Then why does the metadata on exhibit twelve show it was created on Tuesday? Vesper does not answer. Rahman looks at him, then at the arbitrator, then at his own hands.
[beat 13] RAHMAN: I did not want to say. MARCHAND: Say it. RAHMAN: I do not care about the money. I care that he is not ashamed.
[beat 14] Marchand folds her hands. The high windows glow. A single bowling ball, stranded on the return rack, catches the light.
[beat 15] MARCHAND: Mr. Vesper. I am suspending this hearing. I am referring exhibit twelve to the bar. VESPER: Yes, Madam.
[beat 16] He gathers his papers. They shake. The sound of paper is the loudest thing in the building.

### SCENE s00542 | INT. ORBITAL HYDROPONICS RING - NIGHT CYCLE
Characters: KESTREL ODUYA, IXCHEL TORRES-WAI, BRAM VANDERHOEK, OMAR EL-SAYED
[beat 0] Rows of green under violet LEDs. Nutrient mist. Tomatoes on vines the length of a bus. Everything is damp and humming.
[beat 1] KESTREL ODUYA, 30s, a botanist in a stained lab coat, pinches leaves between her fingers. Cuts a sample. Bags it. IXCHEL TORRES-WAI, 20s, her junior, trails with a tablet, scribbling. BRAM VANDERHOEK, 40s, a station tech, jogs down the central aisle, wrench in hand.
[beat 2] BRAM: Kes. The mist valves are fluctuating. KESTREL: How badly? BRAM: Row twelve is flooding.
[beat 3] She runs. Ixchel follows. The mist thickens as they go, and the LEDs flicker, a violet strobe.
[beat 4] Row twelve. A tomato plant slumps, roots exposed, water pooling at its base. Bram kneels, jams the wrench under the manifold. He grunts. Pulls.
[beat 5] The pipe bursts. Water jets across the aisle. Ixchel yelps. Kestrel ducks. Bram swears and falls backward onto the deck, drenched. KESTREL: Shut it off! BRAM: I'm trying!
[beat 6] They scramble. Kestrel finds the valve. She yanks it. The spray dies. The three of them stand soaked and breathless.
[beat 7] OMAR EL-SAYED, 40s, a surveyor in a grey jumpsuit, appears at the end of the row, a sealed data case in one hand and a badge on a lanyard. He doesn't smile. He holds out the badge. OMAR: Station Authority. Section audit. KESTREL: Tonight? OMAR: Tonight.
[beat 8] He walks down the row, stepping over puddles. His eyes find the broken pipe. The slumped plant. The sample bag. Kestrel steps in front of it. BRAM: That's not on the schedule. IXCHEL: It never is.
[beat 9] OMAR: Dr. Oduya. You've been logging Row twelve as nominal for six months. KESTREL: Because it was. OMAR: Your yield numbers say otherwise.
[beat 10] He opens the case. A screen flares to life. Columns of numbers, red.
[beat 11] Ixchel grabs Bram's sleeve. Bram sets down his wrench. Slowly, Kestrel picks up the sample bag and holds it behind her back.
[beat 12] KESTREL: The plant's mutated. OMAR: I know.
[beat 13] Silence. The mist hisses. OMAR: So does the Council. They sent me to see if it's dangerous. KESTREL: And?
[beat 14] He crouches. Touches a root. It wriggles. All four step back at once. OMAR: Doctor. Is it supposed to do that?
[beat 15] The root coils around his finger.
[beat 16] Ixchel screams. Bram lunges. Kestrel grabs her scalpel. Omar yanks back, but the root holds, and the plant lifts, slowly, from the soil, a green fist rising out of the dark.
[beat 17] KESTREL: Everybody out. Now.
[beat 18] They run, boots slapping through water, the violet lights flashing behind them, the plant unfolding into the aisle like a waking god.

### SCENE s00543 | EXT. PARKING GARAGE ROOFTOP - NIGHT
Characters: FRANCINE OYELOWO, LENNY
[beat 0] Sodium lights. Oil stains. One car left, a faded blue sedan with a flat front tire. The city glows beyond the low concrete wall.
[beat 1] FRANCINE OYELOWO, 40s, a dental hygienist's scrubs under a trench coat, kneels at the flat with a jack and a lug wrench. Her younger brother LEONARD "LENNY" OYELOWO, 30s, a rumpled courier's jacket, leans against the wall with a cigarette he hasn't lit.
[beat 2] She wrestles a lug nut. It doesn't budge. LENNY: Want me to? FRANCINE: No. LENNY: It's been twenty minutes. FRANCINE: Then it's been twenty minutes.
[beat 3] He pockets the cigarette. Watches. She grunts, adjusts her grip, tries again.
[beat 4] LENNY: Fran. FRANCINE: Don't. LENNY: I didn't say anything. FRANCINE: You said "Fran" like you were going to say something. He lets that sit. Wind carries the faint sound of a siren from the street.
[beat 5] LENNY: Mom called. She stops. The wrench hangs from her hand. FRANCINE: When? LENNY: This morning. She asked if you were coming Sunday. FRANCINE: And what did you say? LENNY: I said I'd ask. FRANCINE: Why would you ask me? LENNY: Because you won't answer her.
[beat 6] She resumes. Harder. The wrench scrapes. The lug nut turns half a rotation.
[beat 7] FRANCINE: She's been telling people I'm "away on business." LENNY: It's easier than saying you left. FRANCINE: I didn't leave. I moved. LENNY: Four hundred miles is leaving.
[beat 8] She rocks back on her heels. Looks up at him. Her face is wet, but her voice is level. FRANCINE: You want to talk about leaving? You sent a postcard for two years. LENNY: It was a good postcard. FRANCINE: It said, "Weather's nice." LENNY: It was.
[beat 9] A brittle laugh escapes her. He allows himself a half smile. Then it fades.
[beat 10] LENNY: I should've called. FRANCINE: Yes. LENNY: I should've come. FRANCINE: Yes. LENNY: I'm here now. FRANCINE: You're here because my car broke down. LENNY: No. I'm here because I got the text.
[beat 11] She stares. He takes the wrench from her hand, kneels, fits it on the lug nut. Braces. Leans his full weight.
[beat 12] It gives with a crack. FRANCINE: Show-off. LENNY: Always.
[beat 13] He keeps going. Four nuts, a flat, the spare. She hands him each tool before he asks. They work in silence for a long minute, side by side, in the rhythm of two people who learned this from the same father.
[beat 14] FRANCINE: Dad hated the way you held the wrench. LENNY: Dad hated everything I held. FRANCINE: That isn't true. LENNY: He hated the way I held you. When you cried.
[beat 15] She freezes. FRANCINE: You remember that? LENNY: Every day.
[beat 16] She turns away, looks out over the wall at the lit city. Her shoulders shake once. He doesn't touch her. He keeps working.
[beat 17] FRANCINE: Why now? LENNY: Because Mom's sick, Fran. The words hang. She does not turn. FRANCINE: How sick? LENNY: Sick.
[beat 18] She closes her eyes. Presses both hands against the cold concrete. FRANCINE: You waited till the rooftop to tell me. LENNY: You wouldn't have heard it anywhere else.
[beat 19] She nods. Slowly. A man's hand and a woman's hand finally touch on the wrench, and neither moves.
[beat 20] FRANCINE: Sunday. LENNY: Sunday.
[beat 21] She takes the wrench. Finishes the last nut herself.

### SCENE s00544 | EXT. DRAINED BACKYARD POOL - DAY
Characters: MOSES AGYEMAN, JAI KAPOOR
[beat 0] Cracked blue paint. Leaves in the deep end. Two boards leaned against the lip. Heat bends the air.
[beat 1] MOSES AGYEMAN, 15, hoodie, scabbed knees, stands at the top of the transition. JAI KAPOOR, 15, a cap on backward, a stolen helmet, grips the coping with both hands.
[beat 2] He drops in. He wobbles. He rolls out.
[beat 3] He grins. He doesn't see the other one.
[beat 4] He drops in too, harder, faster, and clips the edge of the first board. Both skate out and slam into the shallow end together, a tangle of wheels and limbs.
[beat 5] He laughs first. Then he does. Then neither can breathe.
[beat 6] He pulls himself up. He pulls him up. Blood on a palm. Dust on a cheek.
[beat 7] MOSES: You see that? JAI: I felt that. MOSES: That was clean. JAI: That was a car crash.
[beat 8] MOSES: Again? JAI: Again.
[beat 9] They climb the ladder. Side by side. Neither says it. Both are too happy to say it.

### SCENE s00545 | INT. HARROWGATE MUSEUM OF NATURAL CURIOSITIES - TAXIDERMY HALL - NIGHT
Characters: PROFESSOR ALDOUS BLYTHE, ROSALIND PEMBERTON-SHAW, CONSTABLE HARGROVE, ARCHIBALD FITCH
[beat 0] Glass cases in rows, and in every case a creature caught in the middle of a thought: a fox mid-pounce, an owl with one wing half raised, a stoat frozen beside a nest of china eggs. The gaslamps hiss. The floor smells of beeswax and arsenic.
[beat 1] PROFESSOR ALDOUS BLYTHE, 60s, in a velvet jacket and a monocle, strolls along the cases with a candle, humming, while ROSALIND PEMBERTON-SHAW, 30s, the junior curator, trails him with a notebook, writing and sneezing, and CONSTABLE HARGROVE, 40s, a heavy man in a cape, stands with his hands behind his back, studying a stuffed heron as though it has insulted him. BLYTHE: You see, Constable, the trick of the thing is not the skin. It is the eyes. HARGROVE: Glass, ain't they? BLYTHE: Glass, certainly. But placed by a hand that knew the animal.
[beat 2] ROSALIND: Professor, with respect, the Constable is here about the missing curator. BLYTHE: Ah, yes. Dear Mr. Fitch. He did so love the badgers. HARGROVE: Last seen Thursday? BLYTHE: Thursday evening. Closing time. He went down to oil the hinges on the Great Elk.
[beat 3] The three of them turn toward the end of the hall. The Great Elk stands in its alcove, antlers spread like a cathedral window, glass eyes catching the candle.
[beat 4] Something shifts behind the elk.
[beat 5] ARCHIBALD FITCH, 50s, in a rumpled waistcoat, steps from behind the elk, alive, pale, holding an oil can. He looks at them like a man waking from a dream. FITCH: I fell asleep. Silence.
[beat 6] ROSALIND: Mr. Fitch! We thought you were dead! FITCH: For four days? BLYTHE: Well. It was a very long afternoon.
[beat 7] Hargrove frowns. He looks at the elk. At Fitch. At Blythe, whose candle has begun to shake.
[beat 8] HARGROVE: Professor. There's a piece of tweed in that elk's antlers. Everyone looks up. A scrap of grey cloth. Wet, dark at one end.
[beat 9] BLYTHE: That is... decorative.

### SCENE s00546 | INT. NORTHERN LIGHTS CURLING CLUB - SHEET THREE - NIGHT
Characters: SKIP BRITTA LINDGREN-KOWALSKI, MURDOCH FINLAY, YUKI TANAKA-REID, TERRENCE ODUMODU, OLUWASEUN ADEBAYO
[beat 0] Pebbled ice, white and hard under flat lights. Red and yellow rings painted beneath the surface. A scoreboard ticks. The crowd, forty fans in parkas, hushes.
[beat 1] SKIP BRITTA LINDGREN-KOWALSKI, 40s, a wool toque and a steady squint, crouches in the house with her broom held like a rudder. At the hack, MURDOCH FINLAY, 50s, her veteran lead, gathers a stone. At the sideline, YUKI TANAKA-REID, 20s, the youngest on the team, grips a broom and bites her lip. TERRENCE ODUMODU, 30s, the vice-skip, in a quilted vest, watches the scoreboard like a hawk.
[beat 2] BRITTA: Hurry hard!
[beat 3] Murdoch releases. The stone glides. The broom crew sprints alongside it. YUKI: Hard! Hard! TERRENCE: Hard! BRITTA: HARD!
[beat 4] The stone slides, hovers at the edge of the button. Nothing moves. Forty parkas hold their breath.
[beat 5] Then it curls. A gentle arc. A sliver of daylight. It nudges the opponent's stone aside and settles dead center.
[beat 6] The crowd explodes. Yuki jumps and flings her broom in the air. Terrence hugs Murdoch so hard he lifts him. Britta stays crouched, forehead on her broom handle, shaking.
[beat 7] A woman in an official's jacket strides across the ice, clipboard in hand. OLUWASEUN ADEBAYO, 50s, the head official, wears a tight bun and a sour look. She inspects the stone with a tape measure. OLUWASEUN: Measure's confirmed. Team Lindgren takes the end.
[beat 8] Britta looks up. Eyes wide. BRITTA: We won? OLUWASEUN: You won the end. The match is Thursday.
[beat 9] Britta laughs, helpless. The crowd roars again.
[beat 10] TERRENCE: Was that real? YUKI: I think so.

### SCENE s00547 | INT. NIGHT TRAIN "ALBATROSS" - SLEEPER CAR - NIGHT
Characters: INSPECTOR ABEL STROM, MADAME VALENTINE ROUX, HESTER PRYCE, PORTER GILES
[beat 0] A narrow corridor of polished mahogany and brass fixtures. Curtains drawn over the windows. Beyond them, the dark rushes by. The carriage sways in a long steady pulse.
[beat 1] INSPECTOR ABEL STROM, 50s, a hat too small for his head, a ticket punch in one hand, walks the corridor slowly, checking doors, listening. At each cabin he pauses. At the third he knocks.
[beat 2] A door opens a crack. MADAME VALENTINE ROUX, 60s, a silk robe and a cold cream mask, peers out with an eye like a coin.
[beat 3] ROUX: Yes? STROM: Madame. A disturbance reported. Did you hear anything? ROUX: I hear the train. I hear my own pulse. I hear a gentleman in the corridor who will not let a woman sleep.
[beat 4] STROM: My apologies. Have you seen anyone pass?
[beat 5] She considers him. Behind her, a light flicks on in the next compartment. ROUX: Only the doctor. STROM: Which doctor? ROUX: The one in four.
[beat 6] She shuts the door. He moves on. Cabin four. He raises his hand to knock, hesitates, listens. A soft murmur inside, a woman's voice. He taps.
[beat 7] The door opens. DR. HESTER PRYCE, 40s, a black medical bag in one hand and a wet handkerchief in the other, regards him with sleepless composure.
[beat 8] PRYCE: Inspector. STROM: Doctor. I'm told you were attending someone. PRYCE: A porter. A faint. Nothing serious. STROM: Which porter? PRYCE: The young one. Giles. STROM: Ah.
[beat 9] He peers past her shoulder. The compartment is dim. A figure lies on the lower berth, motionless under a blanket.
[beat 10] PORTER GILES, 20s, in a half-buttoned uniform, one hand pressed to his temple, lifts his head and gives a weak, apologetic smile. GILES: Sorry for the fuss, sir. STROM: Nothing to apologize for, my boy. Rest.
[beat 11] He steps back. Pryce eases the door half closed. For a moment their eyes hold. She is calm. He is polite. Neither blinks.
[beat 12] STROM: Doctor, a curious thing. The ticket in your name was bought in Vienna. PRYCE: It was. STROM: And yet the conductor reports you boarded in Prague. PRYCE: He's mistaken. STROM: He rarely is.
[beat 13] She smiles. It is a small, tired smile. PRYCE: Inspector, would you care for tea? STROM: I would like the truth, Doctor. PRYCE: Over tea.
[beat 14] He thinks. Nods once. She opens the door wider. He enters. The compartment smells of lavender and iodine.
[beat 15] On the lower berth, Giles has gone still. His eyes are open. He is not looking at the Inspector. He is looking at Pryce.
[beat 16] STROM: Doctor. Your patient is not breathing. Pryce does not turn. PRYCE: I know.
[beat 17] She closes the door. The latch clicks.
[beat 18] In the corridor, Madame Roux's door opens again, an inch, and a single coin-bright eye peers out. It watches the door of cabin four for a long time. Then, quietly, it shuts.

### SCENE s00548 | INT. WILLOWBROOK CRICKET PAVILION - RAIN DELAY - DAY
Characters: BHASKAR VENKATARAMAN, LORD WILLOUGHBY, FANSHAWE, FLORENCE OKONKWO-BEAUFORT
[beat 0] Dark wood. A bar with brass taps. Team photographs from a century of afternoons. Rain hammers the tin roof so hard the room rings. Through the long window, the pitch is a lake.
[beat 1] BHASKAR VENKATARAMAN, 40s, the home captain, in whites stained green at the knee, stands at the window, arms crossed. He is silent. He has been silent for forty minutes.
[beat 2] LORD WILLOUGHBY "BILLY" FANSHAWE, 60s, the visiting captain, a blazer and a cravat, sits in a leather armchair with a tumbler of whisky and a newspaper. He turns a page. He sips.
[beat 3] WILLOUGHBY: Awful weather. BHASKAR: Mm. WILLOUGHBY: Might be a draw. BHASKAR: Mm.
[beat 4] WILLOUGHBY: I say, are you going to say anything other than "Mm"? BHASKAR: I am conserving words. WILLOUGHBY: For what? BHASKAR: For when you apologize.
[beat 5] Willoughby lowers the paper. Studies him over his glasses. WILLOUGHBY: Apologize? For what, pray? BHASKAR: For the run-out. WILLOUGHBY: Ah. That. BHASKAR: Yes. That.
[beat 6] WILLOUGHBY: It was a perfectly legal run-out. BHASKAR: It was a gentleman's agreement. We had it. You broke it. WILLOUGHBY: Gentlemen's agreements are a bit rich, aren't they? Between you and me?
[beat 7] Rain thunders. Somewhere a gutter overflows.
[beat 8] FLORENCE OKONKWO-BEAUFORT, 70s, the club umpire, in a white coat and a flat cap, pushes in through the side door with a golf umbrella that is not helping. She stamps her boots. FLORENCE: Gentlemen! Ground's unplayable. I've called it. BHASKAR: Thank you, Florence. WILLOUGHBY: Dreadful, Florence. Utterly dreadful.
[beat 9] FLORENCE: Don't you "dreadful" me, Billy Fanshawe. I saw that run-out. WILLOUGHBY: Madam -- BHASKAR: She saw it. WILLOUGHBY: Thank you, Bhaskar, I can speak for myself -- FLORENCE: I've umpired for thirty-one years. I've seen every kind of foul play. But I've never seen a man do it with such a smile. WILLOUGHBY: It was an honest mistake. BHASKAR: It wasn't. FLORENCE: It wasn't.
[beat 10] Willoughby sets down his glass. The ice clinks. He stands, too fast, and knocks his knee against the table. WILLOUGHBY: Very well! I concede! It was a bad piece of sportsmanship!
[beat 11] Silence. Rain. The old photographs watch from the walls.
[beat 12] BHASKAR: And? WILLOUGHBY: And... I apologize. BHASKAR: To whom? WILLOUGHBY: To you, Captain Venkataraman. BHASKAR: And? WILLOUGHBY: And to Florence. FLORENCE: And? WILLOUGHBY: And... to the game.
[beat 13] The tin roof crackles. Bhaskar's mouth twitches. Florence shakes her umbrella, spraying them both. BHASKAR: Thank you.
[beat 14] FLORENCE: Tea? WILLOUGHBY: Whisky. FLORENCE: Tea.
[beat 15] She pours three cups from a brown pot. They sit around the table, three old foes in damp white, listening to the water drown the pitch.

### SCENE s00549 | INT. LUNAR RADIO OBSERVATORY - CONTROL ROOM - DAY
Characters: COMMANDER NATHANIEL ASHBY, PRIYAMVADA LUTHRA, PETROVSKY, MISS ELLINGTON, TECH DOYLE
[beat 0] A cramped steel room lit by banks of green screens. Out the porthole, a grey plain of regolith and a dish the size of a stadium tilting toward the stars. The air tastes of recycled coffee.
[beat 1] COMMANDER NATHANIEL ASHBY, 50s, a command jacket and a weary jaw, sits in the center seat. DR. PRIYAMVADA LUTHRA, 40s, in a lab coat, stands at the main console. MR. PETROVSKY, 60s, the old engineer, eats from a tube. MISS ELLINGTON, 30s, a communications officer with a headset. TECH DOYLE, 20s, a freckled intern, hugs a clipboard.
[beat 2] ASHBY: Dr. Luthra. Report. LUTHRA: Three signals. Same source. Same frequency. Same pattern every eleven minutes. ELLINGTON: It repeats exactly. PETROVSKY: No natural source repeats exactly. DOYLE: Could it be a pulsar? LUTHRA: Pulsars drift. This doesn't.
[beat 3] ASHBY: Origin? LUTHRA: Sagittarius. Forty light years. PETROVSKY: So whoever sent it, sent it forty years ago. ELLINGTON: Or they're still sending.
[beat 4] DOYLE: Does it say anything? LUTHRA: It's a prime sequence. Two, three, five, seven, eleven. Then a gap. Then -- ASHBY: Then? LUTHRA: Then our own coordinates.
[beat 5] Silence. The dish groans outside, a long metallic sound. PETROVSKY: Our coordinates. The Moon's. LUTHRA: The Moon's. Down to the meter. ELLINGTON: Somebody knows we're here. DOYLE: Or somebody always did.
[beat 6] Ashby stands. Looks at the screens. Looks at the porthole. The dish turns another degree.
[beat 7] ASHBY: Send nothing. Log everything. Nobody leaves this room.

### SCENE s00550 | INT. MUSEUM OF LOCKS AND KEYS - GALLERY OF CURIOSITIES - NIGHT
Characters: CLEO ANTONOPOULOS, BARNABY SOUTHWORTH, GUARD ENOCH BALOGUN
[beat 0] Glass cases glow under museum spots. Padlocks shaped like hearts, a chastity belt, a Houdini handcuff, a Chubb detector from 1818. The marble floor is clean enough to eat from.
[beat 1] CLEO ANTONOPOULOS, 30s, in a cleaner's grey uniform, pushes a mop bucket along the aisle. Slow. Humming. Wringing the mop, slopping water. At the far end of the gallery a vault door waits, painted gold. Fake. Almost.
[beat 2] BARNABY SOUTHWORTH, 50s, the curator, in a cardigan and bow tie, sits at the security desk with a crossword. He is happy. The room is quiet. A radio plays softly.
[beat 3] BARNABY: Seven letters. "Opener of doors." CLEO: Key? BARNABY: Too short. CLEO: Skeleton? BARNABY: Nine. CLEO: Master. BARNABY: Six.
[beat 4] Cleo smiles. Wrings the mop. Water pools near a floor drain by the case of antique keys.
[beat 5] BARNABY: You're very diligent, Cleo. CLEO: It's a good floor. BARNABY: Most of the staff would've gone home. CLEO: Most of the staff aren't paid by the hour.
[beat 6] He laughs. She pushes the bucket another yard. The wheels squeak. He doesn't look up.
[beat 7] She taps a button on the handle of the mop. A quiet click.
[beat 8] The security camera in the corner swivels, slow, until it faces the wall. BARNABY: "Skeleton" doesn't fit, does it? CLEO: No. BARNABY: Well, I'm stuck. CLEO: I'll help.
[beat 9] She sets down the mop. Walks to the golden vault door and, from her bucket, produces a stethoscope and a small brass pick. She presses her ear to the cold gold. Turns a tumbler. Another.
[beat 10] GUARD ENOCH BALOGUN, 40s, a thick neck and a creaking belt, rounds the corner with a flashlight, whistling. He stops. Looks at Cleo. Looks at the open bucket. Looks at the camera facing the wall.
[beat 11] ENOCH: Ma'am. CLEO: Evening, Enoch. ENOCH: That's not on the schedule. CLEO: No.
[beat 12] Barnaby finally looks up, sees the guard, sees Cleo, sees the pick. His pencil stops. BARNABY: Oh, dear.
[beat 13] Enoch's hand drifts toward his radio. Cleo's hand does not leave the vault. Tumbler clicks. A heavy thunk.
[beat 14] CLEO: Enoch. Put the radio down. ENOCH: Ma'am -- CLEO: Please.
[beat 15] He considers. The radio comes down. He steps aside, and with a courtly gesture, motions toward the vault. ENOCH: After you.
[beat 16] Cleo pulls. The door swings open on an empty velvet chamber with a single card: GONE FISHING. She stares.
[beat 17] BARNABY: Seven letters. "Opener of doors." ENOCH: Trickster. BARNABY: Yes, that's it.

### SCENE s00551 | INT. ARCTIC SEAFOOD COLD STORAGE - LOADING BAY - NIGHT
Characters: SOLEDAD RIVERA, WYATT PRUITT, LINH TRAN, IGNATIUS OKORO, FERN HALLORAN-BOSE, BOONE DAKOTA
[beat 0] Minus twenty-five. Breath fogs the air like cigar smoke. Pallets of frozen cod stacked ten feet high, shrink-wrapped, glittering with frost. A forklift sleeps beside a hanging scale. Strip lights hum.
[beat 1] Six figures in white parkas move through the aisle with the quiet efficiency of a crew that has done this before. SOLEDAD RIVERA, 40s, the planner, leads, carrying a blueprint rolled in a tube. WYATT PRUITT, 30s, the driver, gnaws a toothpick and watches the door. LINH TRAN, 30s, the safecracker, drags a rolling case with a plasma cutter. IGNATIUS OKORO, 50s, the inside man, in a foreman's hard hat, jingles a ring of keys. FERN HALLORAN-BOSE, 20s, a hacker, cradles a laptop in gloved hands. BOONE DAKOTA, 40s, the muscle, carries a duffel in each fist.
[beat 2] SOLEDAD: Remember. We're out in twelve. WYATT: Van's at the dock. FERN: Cameras are looped. LINH: Vault's behind the tuna. Third freezer. IGNATIUS: That's the one with the red tag. SOLEDAD: Boone. Door. BOONE: On it.
[beat 3] He sets the duffels down and shoulders a heavy steel door, the hinge shrieking in the cold. They enter a smaller freezer. Hanging halves of beef sway. Linh crouches at a steel panel in the back wall. LINH: Here.
[beat 4] She flips a switch. The plasma cutter hisses, blue-white, and begins to draw a circle on the steel. Sparks fall like snow. Fern stands guard with the laptop open, tapping. FERN: Come on, come on, stay dumb... WYATT: Twelve minutes. SOLEDAD: Eleven.
[beat 5] IGNATIUS: Is it always this cold? BOONE: It's a freezer. IGNATIUS: I meant the vault. LINH: The vault's not cold. It's a safe room. It has a heater. IGNATIUS: Why would it have a heater? LINH: Because someone puts a person in it.
[beat 6] They all look at her. She doesn't look up. The cutter sputters.
[beat 7] SOLEDAD: Let's keep our heads. Boone, how's the watch? BOONE: Quiet. WYATT: Quiet is bad.
[beat 8] Fern's laptop chirps. A red banner scrolls across the screen. Her face drains. FERN: Sol. SOLEDAD: What? FERN: The loop broke.
[beat 9] Linh kills the cutter. The silence is enormous. SOLEDAD: How long? FERN: Ninety seconds. IGNATIUS: That's impossible. I set the loop. BOONE: Somebody else did.
[beat 10] They freeze. Down the corridor, far off, boots on concrete. Several pairs. Unhurried.
[beat 11] SOLEDAD: Positions. Wyatt slides behind a pallet. Boone pulls the door shut. Linh unsnaps a pocket. Fern closes her laptop and puts it on the floor, very gently. Ignatius backs against a hanging side of beef.
[beat 12] SOLEDAD: Ignatius. Who knew about this? IGNATIUS: Just us. SOLEDAD: Just us.
[beat 13] She stares at him. Slowly, his hand goes to his hard hat. He removes it, as if to scratch his head, and the strip light catches a small black earpiece in his ear. LINH: Oh, Ignatius.
[beat 14] The freezer door swings open on its own. Beyond it, only the dark corridor and the sound of boots, closer. FERN: It's a trap. SOLEDAD: Of course it's a trap, Fern. It's always a trap.
[beat 15] Boone raises a fist. Wyatt cocks a pistol. Linh lifts the cutter like a lance. The boots stop outside, and the frost between them seems to hold its breath.

### SCENE s00552 | INT. HOSPITAL CORRIDOR - VENDING ALCOVE - 4 A.M.
Characters: AGNES PRZYBYLSKI, WALTER OKAFOR
[beat 0] A narrow nook off the oncology ward. A humming vending machine with half its snacks sold out, a stained couch, a wall clock that has lost its minute hand. Fluorescent light falls flat across everything.
[beat 1] AGNES PRZYBYLSKI, 70s, in a cardigan buttoned wrong, feeds a dollar bill into the machine. The machine spits it back. She smooths it on the glass. Feeds it again. It spits it back.
[beat 2] WALTER OKAFOR, 70s, in a hospital gown and a pair of borrowed slippers, shuffles in with an IV pole, and settles onto the couch, wincing, and watches her fail a third time. WALTER: It doesn't like that one. AGNES: It's a dollar. WALTER: Not that dollar.
[beat 3] She tries a different bill. The machine takes it. A coil turns. A bag of pretzels falls.
[beat 4] AGNES: Thank you. WALTER: You're welcome. AGNES: I wasn't talking to you. WALTER: I know.
[beat 5] She retrieves the pretzels and sits on the other end of the couch. She opens the bag. Offers him one without looking. He takes it.
[beat 6] AGNES: My husband's in 412. WALTER: Mine's in 414. AGNES: Your husband? WALTER: My wife. I misspoke. It's the hour. AGNES: Mm.
[beat 7] They chew. The vending machine hums. A cart rattles somewhere down the hall.
[beat 8] WALTER: What's he got? AGNES: Lungs. WALTER: Mine's a pancreas. AGNES: That's a bad one. WALTER: It is. AGNES: Mine too, I suppose. WALTER: You suppose.
[beat 9] She turns the empty bag in her hands, folds it into a precise little triangle. AGNES: I'm supposed to be strong. He's the one in the bed. But I'm the one who needs to be told what to eat. WALTER: I eat nothing. I just carry the pole around. AGNES: Does it help? WALTER: Somewhat. It gives me something to hold.
[beat 10] She laughs, a real, small laugh. He smiles. They sit with that for a minute. The clock without a minute hand shows 4:00, as it has for years.
[beat 11] AGNES: What's her name? WALTER: Delia. AGNES: Delia. That's pretty. WALTER: It is. AGNES: And does she know you're out here? WALTER: She's asleep. AGNES: Does yours? WALTER: Walter?
[beat 12] AGNES: No. I'm Agnes. Your wife. WALTER: I know who you are. AGNES: You called me Delia.
[beat 13] He stops. A beat. He looks at his own hand, the cuff of the gown, the IV. He looks at her. His whole face collapses and reassembles itself.
[beat 14] WALTER: Agnes. AGNES: Yes. WALTER: You're the one in 414. AGNES: I'm the one in 412. You're 414.
[beat 15] WALTER: Then who's in 412? AGNES: My husband. WALTER: Who's your husband? AGNES: You, Walter.
[beat 16] He nods slowly. His eyes fill. She takes his hand, the one without the IV, and holds it in both of hers.
[beat 17] AGNES: It's four in the morning. Let's go back. WALTER: Can I have a pretzel first?
[beat 18] She hands him the empty bag. He holds it like a relic. WALTER: They're all gone. AGNES: We'll get more.
[beat 19] She feeds the machine another dollar.

### SCENE s00553 | INT. STRIKE ZONE LANES - LOCKER ROOM - NIGHT
Characters: COACH WENDELL HUXLEY, DEXTER MALONE-ADEYEMI, ROMEO BALDERRAMA
[beat 0] Dented lockers. A bench scarred with initials. A single bulb swings over a pile of bowling bags. The sound of the league championship, the other team cheering, drifts through the wall like a taunt.
[beat 1] COACH WENDELL HUXLEY, 60s, in a polyester team jacket and bifocals, sits on an upturned bucket, clipboard on his knee. He does not look at it. DEXTER MALONE-ADEYEMI, 30s, a gangling anchor bowler, sits on the bench, hands hanging between his knees. ROMEO BALDERRAMA, 20s, a rookie, paces in front of the lockers, rolling a ball from palm to palm.
[beat 2] HUXLEY: Gentlemen. ROMEO: Don't say it. HUXLEY: I will say it. DEXTER: He's going to say it.
[beat 3] HUXLEY: We lost. ROMEO: We lost by six pins. DEXTER: Seven. HUXLEY: Seven. Thank you, Dexter.
[beat 4] ROMEO: It was the tenth frame. DEXTER: It was always going to be the tenth frame. HUXLEY: Nothing is always going to be the tenth frame. ROMEO: Coach, I left the seven pin standing. HUXLEY: I know. ROMEO: I had it. I had the whole lane. HUXLEY: You had a lane. You didn't have the whole lane. Nobody has the whole lane.
[beat 5] DEXTER: Does anyone have a beer? HUXLEY: No. DEXTER: Because I would like a beer. HUXLEY: Dexter, you're thirty-four. Behave. DEXTER: I'm behaving. I'm behaving like a man who just threw a four-ten split in front of his mother. ROMEO: She was clapping. DEXTER: She was clapping out of pity. HUXLEY: She was clapping because you're her son. DEXTER: Same thing.
[beat 6] A beat. Romeo laughs, short and ugly. Dexter starts too. Huxley fights it. Fails.
[beat 7] HUXLEY: All right. All right. Listen. Both of you. I have coached this team for twenty-two years. ROMEO: Twenty-three. HUXLEY: Twenty-three. And I have never once lost a championship by less than ten pins. DEXTER: So this is progress. HUXLEY: This is the closest we've ever been.
[beat 8] ROMEO: That's supposed to make me feel better? HUXLEY: No. It's supposed to make you angry. ROMEO: It does. HUXLEY: Good. Hold that.
[beat 9] He stands. Hands each of them a towel from a pile. Dexter wipes his face. Romeo hangs his around his neck like a boxer.
[beat 10] HUXLEY: Next season, we come back. And we do not say sorry. We say hello. DEXTER: Hello. ROMEO: Hello. HUXLEY: Louder. DEXTER: HELLO! ROMEO: HELLO!
[beat 11] Beyond the wall, the cheering dies. A janitor starts a floor-buffer. Huxley picks up his clipboard, crosses out something, and writes, in pencil: NEXT YEAR.

### SCENE s00554 | INT. ST. AMBROSE BAKERY - OVEN TUNNEL - NIGHT
Characters: ODILE LAFARGE-MENDOZA, MARCELLUS TREMAINE, TOBIAS GR, NEWALD
[beat 0] A brick vault, black with a century of smoke. Iron doors, cooling racks, the slow smell of yesterday's bread. At the far end, a hole in the wall where the old coal chute used to be, just wide enough for a crouching man.
[beat 1] ODILE LAFARGE-MENDOZA, 40s, in a baker's apron over a black jumpsuit, kneels at the wall with a chisel and a mallet, coaxing a brick loose with a baker's patience. MARCELLUS TREMAINE, 60s, flour on his forearms, stands guard at the tunnel mouth, ear cocked toward the street. TOBIAS GRÜNEWALD, 20s, the apprentice, hugs a lantern and a tray of rolls for cover.
[beat 2] ODILE: Marcellus. Time. MARCELLUS: Eleven past. ODILE: Then we have until half.
[beat 3] TOBIAS: What happens at half? MARCELLUS: The delivery truck. TOBIAS: I thought it came at four. MARCELLUS: It does. But the driver likes to sit and smoke. ODILE: Which gives us twenty minutes. TOBIAS: To do what? ODILE: To go through a wall.
[beat 4] Tobias swallows. Sets down the tray. The tunnel is hot and the lantern is trembling.
[beat 5] Odile pries the brick free. It falls with a soft cough. Beyond: dark, a draft of cold air, a faint metallic gleam.
[beat 6] MARCELLUS: That's it. ODILE: That's it. TOBIAS: What is? MARCELLUS: The bank vault. TOBIAS: The bank is on the other side of the street. ODILE: And the bakery is on this side. And the tunnel crosses under.
[beat 7] TOBIAS: You never said it was a bank. MARCELLUS: We said it was bread. TOBIAS: This is not bread! ODILE: Hush.
[beat 8] She puts a finger to her lips. They listen. The tunnel breathes. Somewhere above them, a car passes, tires hissing on wet cobbles.
[beat 9] ODILE: Tobias. You've worked here three years. TOBIAS: Yes. ODILE: Have we ever been late with a loaf? TOBIAS: No. ODILE: Have we ever been short? TOBIAS: No. ODILE: So do you trust me? TOBIAS: ...Yes. ODILE: Then hold the lantern.
[beat 10] He holds it. His hand stops shaking. She crawls into the hole. Marcellus passes her the mallet, then the chisel, then a long, thin steel probe. She disappears into the dark.
[beat 11] A scrape. A tap. A silence. A long, long silence.
[beat 12] TOBIAS: What's she doing? MARCELLUS: Listening. TOBIAS: To what? MARCELLUS: To the lock. TOBIAS: Locks don't talk. MARCELLUS: Everything talks, lad. You just have to be quiet enough.
[beat 13] A click. A heavy mechanical sigh. Odile's voice drifts out of the hole, muffled and amused. ODILE: Gentlemen. We're in.
[beat 14] Marcellus and Tobias exchange a look. Tobias laughs, a cracked, delighted laugh, and covers his mouth with a flour-white hand. Marcellus claps him on the back. The lantern swings, throwing gold across the old brick.
[beat 15] MARCELLUS: Twenty minutes, Odile. ODILE: Eighteen. TOBIAS: What do we do? MARCELLUS: We bake.

### SCENE s00555 | INT. DEEP-SEA RESEARCH STATION "ABYSSAL ONE" - OBSERVATION DOME - NIGHT
Characters: ARUNDHATI SENGUPTA, LIEUTENANT KAVEH MORTAZAVI
[beat 0] A glass bubble on the ocean floor, three thousand meters down. Beyond the curved glass: black water, drifting snow, a lamp throwing a lonely cone. Pipes sweat. A kettle ticks on a hot plate.
[beat 1] DR. ARUNDHATI SENGUPTA, 50s, a thermal sweater and wire-rimmed glasses, sits cross-legged on the deck with a thermos. LIEUTENANT KAVEH MORTAZAVI, 30s, in a naval jumpsuit, stands at the glass, one palm flat against it.
[beat 2] KAVEH: Did you see that? SENGUPTA: See what? KAVEH: Something moved. SENGUPTA: Something always moves, Lieutenant. It's the deep sea. KAVEH: Not like that. SENGUPTA: Describe it. KAVEH: Big. Slow. Pale. It went across the lamp and then, nothing. SENGUPTA: Anglerfish. Or a squid. Or the reflection of your own eyelid. KAVEH: It was not my eyelid. SENGUPTA: Then it was a sperm whale. KAVEH: Not at this depth. SENGUPTA: No.
[beat 3] She unscrews the thermos. Pours. Offers him a cup. He doesn't take it.
[beat 4] SENGUPTA: Kaveh. When did you last sleep? KAVEH: I don't remember. SENGUPTA: Thirty-one hours. I counted. KAVEH: You counted? SENGUPTA: I count everything. It's a scientific disorder. He almost laughs.
[beat 5] Then the lamp flickers. The water beyond the glass shifts and the snow swirls into a vortex. Kaveh steps back. KAVEH: There. There it is.
[beat 6] Sengupta rises. Joins him. A vast pale shape, a flank, a curve, slides across the glass, brushing it, so close its skin leaves a smear in the silt. For a long moment the two of them simply stare.
[beat 7] SENGUPTA: Oh. KAVEH: What is it? SENGUPTA: I have no name for it. KAVEH: You always have a name. SENGUPTA: Not for this.
[beat 8] The shape rolls. An eye the size of a dinner plate regards them through the glass, wet and black, ancient, unhurried. KAVEH: It's looking at us. SENGUPTA: Yes. KAVEH: Is it dangerous? SENGUPTA: I think it's curious. KAVEH: Is that better? SENGUPTA: It depends on what it's curious about.
[beat 9] A low hum builds in the station walls, a vibration they feel in their teeth. The kettle rattles on the hot plate. The creature presses a flipper against the dome, and the glass creaks.
[beat 10] KAVEH: Doctor. SENGUPTA: I know. KAVEH: That's a stress fracture. SENGUPTA: I know. KAVEH: We should seal the dome. SENGUPTA: No. Wait.
[beat 11] She lifts one hand and, slowly, places her palm on the glass opposite the creature's flipper. The hum falls. The creak stops. The great eye blinks, and the creature drifts back, and back, until it is only a pale suggestion in the dark.
[beat 12] Kaveh lets out a breath that fogs the glass. Sengupta lowers her hand, picks up the thermos, and pours herself a cup that shakes in her grip.
[beat 13] KAVEH: You were right. SENGUPTA: About what? KAVEH: Curious. SENGUPTA: I do hate being right at depth.

### SCENE s00556 | INT. THE GILDED MIC KARAOKE BAR - TUESDAY NIGHT
Characters: JOSEFINA OLIVEIRA, DARREN FITZWILLIAM, MEI-LING CHOW, CHUKS, EZEKWESILI, ANDRE BEAUCHAMP, BETTINA KOWALSKI, DJ
[beat 0] Sticky booths. A disco ball missing half its mirrors. A screen the size of a billboard scrolls lyrics in karaoke-blue. Six strangers share one corner table, an enormous plate of fries between them.
[beat 1] JOSEFINA OLIVEIRA, 30s, a leather jacket and a cautious smile, clutches a song binder. DARREN FITZWILLIAM, 30s, a shirt with too many buttons undone, leans back, king of the booth. MEI-LING CHOW, 20s, cat-eye glasses, sips a mocktail, eyes darting. CHUKWUEMEKA "CHUKS" EZEKWESILI, 30s, in a bright print shirt, drums the table with his thumbs. ANDRE BEAUCHAMP, 40s, quiet, nursing a ginger ale. BETTINA KOWALSKI, 50s, a sequined cardigan, waves her arm at the DJ.
[beat 2] BETTINA: All right, kids. Who's going first? DARREN: Ladies first. JOSEFINA: That's sexist. DARREN: It's chivalrous. MEI-LING: It's a trap.
[beat 3] CHUKS: I'll go. ANDRE: Chuks, you've been dying to go since we sat down. CHUKS: Because I have a gift, Andre. A gift. BETTINA: Do you have a number? CHUKS: Eleven. "Dancing Queen." DARREN: Abba. Brave. JOSEFINA: He'll destroy it. CHUKS: I'll honor it.
[beat 4] He bounds to the stage. The screen lights. A familiar piano riff. He grips the mic like a torch. Sings the first line, loud, glorious, a note short of flat. The table roars.
[beat 5] BETTINA: Go on, baby! MEI-LING: Oh, he's actually good. JOSEFINA: He's terrible. MEI-LING: He's terrible and good.
[beat 6] DARREN: You should do one next. JOSEFINA: I don't sing. DARREN: Everyone sings. JOSEFINA: I sing in the shower. DARREN: Well, there's no shower here. JOSEFINA: Thank God.
[beat 7] ANDRE: Do you want to go? MEI-LING: I'd rather die. ANDRE: I'll go with you.
[beat 8] She stares at him. A small, astonished smile. MEI-LING: You would? ANDRE: Duet. Whatever you pick. MEI-LING: ...Something slow. ANDRE: Slow's good.
[beat 9] BETTINA: Look at this! Two matches and a marching band! DARREN: Bettina, you're a menace. BETTINA: That's the nicest thing you've said all night, Darren.
[beat 10] On stage, Chuks hits the chorus. The whole bar sings along, shouting, tipsy, joyous.
[beat 11] Josefina, in spite of herself, mouths the words. Darren sees. He grins. She catches him and glares, then laughs.

### SCENE s00557 | INT. CONVERTED SCHOOL BUS BEDROOM - NIGHT
Characters: ADAEZE NWOSU
[beat 0] A decommissioned yellow bus, parked on cinder blocks in an overgrown field. Inside, the seats are gone. A mattress on the floor, a milk crate for a nightstand, string lights stapled to the ceiling. A cassette recorder sits on the crate, a red light blinking.
[beat 1] No one is here. Rain ticks on the roof.
[beat 2] The recorder clicks and begins to play. A girl's voice, young, bright, trying hard to sound older. ADAEZE: Test, test. Okay. It's July the ninth. I'm fourteen. I'm recording this for me. For the older me. If you're hearing it, you're, like, thirty or something.
[beat 3] The bus door creaks open. A gust of wet air. ADAEZE NWOSU, 17, a duffel bag slung over one shoulder, a high-school graduation tassel still pinned to her jacket, climbs the steps, pushing wet braids from her face. She does not see the recorder. She drops the duffel on the mattress and sits. ADAEZE: So here are my predictions. Number one. You live somewhere with a window that opens. Number two. You're not scared of anything.
[beat 4] Adaeze stops. Looks at the crate. Looks at the recorder. ADAEZE: No way.
[beat 5] ADAEZE: Number three. You've called Mom. The words hang. Adaeze sits very still. ADAEZE: I haven't.
[beat 6] ADAEZE: Number four. You've forgiven Dad. She turns the volume down with a finger. The room goes soft. ADAEZE: That one's harder.
[beat 7] She pulls her knees up. Opens the duffel. Takes out a folded letter with a college seal. She turns it over twice. Tucks it back in. ADAEZE: Number five. You still have this tape, which means you didn't throw away anything good.
[beat 8] She picks up the recorder. Holds it like a bird. ADAEZE: I kept it.
[beat 9] She rewinds a few seconds. Plays it again. ADAEZE: Number five. You still have this tape...
[beat 10] Adaeze presses record. The little red light glows. She clears her throat, speaks into it, steady and careful. ADAEZE: Test, test. It's June the second. I'm seventeen. I'm recording this for the girl I used to be.
[beat 11] She stops. Her voice cracks, then settles. ADAEZE: Here's what happened. I got in. I'm going. I'm scared. And I called Mom.
[beat 12] She laughs, and it breaks, and she leans her forehead against the cold metal wall of the bus. ADAEZE: She said you were right about number three.
[beat 13] Rain eases. The string lights shiver. She holds the recorder close to her mouth and whispers the last line, so that only the tape and the bus can hear. ADAEZE: Number four: I'm working on it.
[beat 14] She clicks the recorder off.

### SCENE s00558 | INT. CAPE ROSS TELEGRAPH OFFICE - NIGHT - 1889
Characters: CLARENCE PENHALLOW, MABEL PENHALLOW, HOLLINGSWORTH
[beat 0] A stone hut at the edge of a cliff. A potbellied stove, a battered desk, a brass key under a green-shaded lamp. Wind howls around the shutters. A storm lantern swings from a hook.
[beat 1] CLARENCE PENHALLOW, 40s, a telegraph operator in sleeve garters and a worn waistcoat, taps the key steadily, one eye on a log book. Beside him on a stool sits MABEL PENHALLOW, 10, his daughter, bundled in a shawl and chewing a pencil, copying out letters in a copybook.
[beat 2] CLARENCE: Dash-dot-dash... dash-dash... MABEL: What does it say, Papa? CLARENCE: Ship in distress. Off the Skerries. MABEL: Is she sinking? CLARENCE: She's calling.
[beat 3] A bell rings above the door. Clarence picks up the telephone receiver, wired to a grey box on the wall, and holds it to his ear.
[beat 4] HOLLINGSWORTH: Penhallow. This is Hollingsworth at Lloyd's. Do you read me? CLARENCE: I read you, sir. HOLLINGSWORTH: The Admiralty has authorized the lifeboat. They want the coordinates relayed to Falmouth. Immediately. CLARENCE: Coordinates, sir. Fifty degrees, four minutes north. Five degrees, nineteen west. HOLLINGSWORTH: Repeat. CLARENCE: Fifty, four, north. Five, nineteen, west.
[beat 5] A pause. Static. HOLLINGSWORTH: Good man. Stay on the wire.
[beat 6] Clarence hangs up and begins to tap at the key, fast, sure, fingers dancing. Mabel watches, wide-eyed. The wind howls. The lantern sways.
[beat 7] MABEL: Papa, will they be in time? CLARENCE: Not if I stop to talk.
[beat 8] Mabel nods. Bends over her copybook. The key chatters on into the dark.

### SCENE s00559 | INT. DR. FEINBERG'S DENTAL OFFICE - WAITING ROOM - EVENING
Characters: SURPRISE, GRANDMA ROSEMARY, GLENDA PRZYBYLSKI, MARVIN, SKYLER, LAZLO KERESZTES, THADDEUS FEINBERG
[beat 0] Beige chairs, a fish tank, a wall of laminated posters of cheerful molars. The lights are dim. A banner above the receptionist's desk reads, in glitter: SURPRISE, GRANDMA!
[beat 1] Six conspirators crouch behind furniture. GLENDA PRZYBYLSKI, 40s, in a party hat, ducks behind the water cooler holding a cake; her husband MARVIN, 50s, behind the ficus with a stack of paper cups, while their teenage daughter SKYLER, 16, hides under the receptionist's desk, filming on her phone; LAZLO KERESZTES, 30s, the nervous nephew, slips behind the coat stand with a party horn, and THADDEUS FEINBERG, 60s, the dentist, in scrubs and a pointy hat, sits on the reception counter, stifling a laugh, while everyone whispers, shushes, and knocks into everyone else.
[beat 2] The front door chimes. Everyone freezes. A chair creaks. Lazlo's horn squeaks. Marvin drops a paper cup. Glenda hisses at both of them. Skyler's phone beeps. The door opens. Nobody enters.
[beat 3] THADDEUS: Where is she? GLENDA: She's coming. MARVIN: My knee is stuck. LAZLO: Mine too.
[beat 4] The door chimes again. Nobody enters. Wind moves a magazine. GLENDA: Well, that's the worst possible timing. LAZLO: It's okay. She'll be here. She always is.
[beat 5] The lights flip on. Everyone stands. In the doorway, in a flowered coat, is GRANDMA ROSEMARY, 80s, who looks at the banner, the cake, the party hats, and the open mouth of the dentist, and says, quite calmly: GRANDMA ROSEMARY: I thought the appointment was tomorrow.

### SCENE s00560 | INT. NEON PAWN & LOAN - NIGHT
Characters: DETECTIVE IRENA VALDEZ, SNOW
[beat 0] Barred windows, glass counters, a wall of guitars. A buzzing OPEN sign paints everything red.
[beat 1] DETECTIVE IRENA VALDEZ, 40s, a blazer and a tired stare, leans over the counter with a pistol held low and steady, while behind it SNOW, 30s, a bleached-blond pawnbroker in a Hawaiian shirt, backs toward a shelf of cameras with a baseball bat in one hand and a phone in the other, and a guitar slides off its hook, hits the floor, and both of them flinch, aim, freeze.
[beat 2] VALDEZ: Drop it. SNOW: You first. VALDEZ: I'm the one with the badge. SNOW: I'm the one with the lease.
[beat 3] Neither moves. The sign buzzes.
[beat 4] VALDEZ: Where's the ring? SNOW: What ring? VALDEZ: The one that came in at nine. SNOW: Lots of rings come in at nine.
[beat 5] Snow sets the bat on the counter. Valdez lowers the pistol. Both exhale.

### SCENE s00561 | INT. PETALS & STEM FLORIST - COLD ROOM - AFTERNOON
Characters: ELEANOR WYNDHAM-ROSS, THEO BRANDVOLD, MIRABEL SOUZA, JUDE ASANTE, WOMAN IN YELLOW, YELLOW RAINCOAT, SERAPHINA
[beat 0] A walk-in cooler, white and humming, banked with buckets of peonies, ranunculus, and dusty-blue hydrangeas. The air smells of cut stems and cold iron. Condensation beads the glass door.
[beat 1] ELEANOR WYNDHAM-ROSS, 60s, in a long apron, trims stems at a steel table with a hooked knife. THEO BRANDVOLD, 20s, her assistant, ties ribbons with painstaking slowness. MIRABEL SOUZA, 30s, a bride in a cardigan over her wedding dress, drifts from bucket to bucket, touching petals. JUDE ASANTE, 30s, her groom, tucks a stray hair behind her ear.
[beat 2] ELEANOR: Peonies don't love the cold. THEO: But they keep better. MIRABEL: Everything keeps better in the cold. JUDE: Even us? MIRABEL: Especially us.
[beat 3] The door opens. A WOMAN IN A YELLOW RAINCOAT, 40s, drips on the threshold. She looks at the four of them, at the flowers, at the clock.
[beat 4] WOMAN IN YELLOW: I'm sorry. I think I'm early. ELEANOR: For what, dear? WOMAN IN YELLOW: My sister's wedding. THEO: That's us.
[beat 5] MIRABEL: That's me. You're Seraphina? SERAPHINA: I took the wrong train. MIRABEL: You look like Mama.
[beat 6] Seraphina crosses the cold room in four steps. They fold into one another, the flowers shivering around them.

### SCENE s00562 | INT. NET SHED - HARBOR DOCK - DAWN
Characters: AUGUSTINE MORROW, LOTTE MORROW, DOMINIC SALVATORE
[beat 0] A long timbered shed that smells of tar and brine. Nets hang from rafters like drying ghosts. Sunlight cuts through the cracks in thin gold blades. A kettle sings on a cast-iron stove.
[beat 1] AUGUSTINE MORROW, 60s, a weathered fisherman in an oilskin, sits on an upturned crate with a netting needle, mending a rip. His daughter LOTTE MORROW, 30s, in a fisherman's sweater, sets two tin mugs on a barrel. She pours. Steam rises.
[beat 2] LOTTE: Drink. AUGUSTINE: I'm working. LOTTE: You're sulking. AUGUSTINE: That too.
[beat 3] She puts the mug in his free hand. He sips. The net rustles. Gulls cry outside.
[beat 4] LOTTE: The boat's fine, Pa. AUGUSTINE: The boat's mortgaged. LOTTE: So? We mortgage everything. It's tradition. AUGUSTINE: Your mother would've said -- LOTTE: Mama would've said "Eat your eggs."
[beat 5] He nearly smiles. The kettle whistles. She lifts it.
[beat 6] LOTTE: I got the loan. Three more seasons. AUGUSTINE: Where from? LOTTE: A man in town. AUGUSTINE: What man? LOTTE: A man who liked the boat.
[beat 7] Augustine sets down the needle. The tension in the shed changes, thick and slow. AUGUSTINE: Lotte. Which man?
[beat 8] The door scrapes open. A rectangle of light. DOMINIC SALVATORE, 50s, a long camel coat, polished shoes, and a hat in his hand, steps in, carefully avoiding a coil of rope. DOMINIC: Morning, Captain.
[beat 9] Augustine stands. The crate falls. The needle skitters across the planks.
[beat 10] Lotte steps between them, pours a third mug, and holds it out. LOTTE: Dominic. Tea? DOMINIC: Kind of you.
[beat 11] He takes it. Sips. Nods. Looks at Augustine.
[beat 12] DOMINIC: Your daughter tells me you're a stubborn man. AUGUSTINE: She tells me you're a thief. DOMINIC: She hasn't told you I hold the paper on every boat in this harbor.
[beat 13] Augustine's face closes like a door. He grabs the nearest thing, the netting needle, and Dominic does not blink. Lotte seizes her father's wrist. All three freeze, tea steaming, needle poised, the whole shed hanging on a breath.
[beat 14] AUGUSTINE: Get out of my shed. DOMINIC: Three seasons, Captain. Think on it.
[beat 15] He goes. The door bangs. The nets sway. Lotte lets go of her father's wrist.
[beat 16] LOTTE: You're welcome. AUGUSTINE: You knew. LOTTE: I knew.
[beat 17] She picks up the fallen crate, sets it upright, sits. After a long moment, he sits beside her. Neither drinks. The gulls go on screaming.

### SCENE s00563 | INT. GRAND CALDERON HOTEL - STALLED ELEVATOR - NIGHT
Characters: HARLOW BENNETT, PERPETUA ADEYEMI, RUSSELL KOVACS
[beat 0] A mirrored brass cage, lights flickering. The floor indicator is frozen between 11 and 12. A tinny recording of a hotel jingle loops through a speaker.
[beat 1] HARLOW BENNETT, 40s, a rumpled suit, clutches a leather briefcase. PERPETUA ADEYEMI, 30s, a sharp black dress and silver heels, stares at her phone: no bars. RUSSELL KOVACS, 50s, a maintenance uniform, kneels at the control panel with a screwdriver.
[beat 2] HARLOW: How long is this going to take? RUSSELL: Depends. HARLOW: On what? RUSSELL: On whether you want the truth. PERPETUA: We want the truth. RUSSELL: Then forty minutes. Maybe an hour.
[beat 3] HARLOW: An hour! PERPETUA: Harlow, breathe. HARLOW: Don't tell me to breathe, Perpetua, you know what's in this case. PERPETUA: Quiet.
[beat 4] RUSSELL: What's in the case? HARLOW: Paperwork. RUSSELL: Paperwork that ticks?
[beat 5] Silence. Harlow's grip tightens. The light flickers. Perpetua glances at the briefcase, then at Harlow, then at the screwdriver in Russell's hand.
[beat 6] RUSSELL: It's been ticking since the lobby, friend. PERPETUA: Oh, Harlow. HARLOW: It's a watch. RUSSELL: It's a bomb. HARLOW: It's a watch!
[beat 7] The ticking is loud now. Regular. Quick.
[beat 8] PERPETUA: Russell. Can you open the hatch? RUSSELL: I can. PERPETUA: Do it.

### SCENE s00564 | EXT. RAILROAD CROSSING - FIELD TRIP BUS - DAY
Characters: ROSCOE LANGSTON, PHOEBE ABERNATHY-LIU
[beat 0] A yellow school bus idles at a country crossing. Barn-red freight cars clatter by, one after another, endless. Heat shimmers over the tracks. The bus is empty but for two.
[beat 1] ROSCOE LANGSTON, 13, in a buttoned-up shirt and a tie his mother chose, sits alone in the back with a field-trip permission slip folded in his fist. Across the aisle PHOEBE ABERNATHY-LIU, 13, in a denim vest with a patch for every band she has not heard, sprawls with her boots on the seat.
[beat 2] The train rattles on. Neither speaks. He steals a look. She steals one back.
[beat 3] ROSCOE: Where's everyone? PHOEBE: Museum. ROSCOE: Why aren't we at the museum? PHOEBE: Because I threw up. ROSCOE: And me? PHOEBE: Because you volunteered to stay with me. ROSCOE: I did? PHOEBE: You raised your hand.
[beat 4] He thinks about this. His ears go red. ROSCOE: Oh.
[beat 5] She grins. Props her chin on her fist. He fiddles with his tie. The train keeps coming.
[beat 6] PHOEBE: Have you ever counted them? ROSCOE: The cars? PHOEBE: Yeah. ROSCOE: No. PHOEBE: Want to? ROSCOE: Okay.
[beat 7] They press their faces to the glass. Their lips move. Two voices, soft, almost in unison. ROSCOE: Forty-one. Forty-two. PHOEBE: Forty-three. ROSCOE: Forty-four.
[beat 8] She leans her shoulder against his. He freezes. Does not pull away. The train goes on and on.
[beat 9] PHOEBE: Sixty. ROSCOE: Sixty-one.
[beat 10] PHOEBE: Roscoe. ROSCOE: Yeah? PHOEBE: Don't lose count.
[beat 11] He doesn't. The train thunders past, the whole bus trembles, and a line of sunlit boxcars flickers over their faces like a film. ROSCOE: Eighty-eight. PHOEBE: Eighty-nine.
[beat 12] Her hand finds his on the seat. He turns his over. She laces her fingers with his. Neither looks away from the window. ROSCOE: Ninety. PHOEBE: Ninety-one.
[beat 13] The last car passes. Silence rolls in behind it, long and bright. A crossing bell stops. Gates rise.
[beat 14] ROSCOE: Ninety-three. PHOEBE: Ninety-three.
[beat 15] She does not let go. The bus engine coughs. The driver, offscreen, honks twice. They stay where they are a moment longer.

### SCENE s00565 | INT. SILVERADO HOTEL - BATHHOUSE - DAY
Characters: ABNER CALLOWAY, CALEB DREWRY, HESPER VANCE, ISAIAH RUTHERFORD
[beat 0] Steam. Brass taps, a copper tub, white tile gone yellow with age. A kettle simmers on a wood stove. A pocket-watch lies on a stool, ticking too loud.
[beat 1] ABNER CALLOWAY, 50s, a grey mustache and a hat he won't take off, sits in the tub with his arms along the rim, eyes shut. His younger partner CALEB DREWRY, 30s, rolls up his sleeves at the stove, sloshing a pot of water.
[beat 2] ABNER: You're slow. CALEB: You're hot. ABNER: That's the point of a bath, son.
[beat 3] Caleb pours. Steam billows. Abner exhales, sinks lower.
[beat 4] CALEB: He's here. ABNER: Who? CALEB: Isaiah.
[beat 5] Abner opens one eye. ABNER: Where? CALEB: Downstairs. Drinking. ABNER: Alone? CALEB: With Hesper. ABNER: Hm.
[beat 6] HESPER VANCE, 20s, in a pressed shirt and a leather vest, leans in the doorway with a cup of coffee, a silver star on her chest. ISAIAH RUTHERFORD, 40s, in a black coat, steps in behind her, hat low, holding a short shotgun by the barrel. HESPER: Don't get up, Calloway. ABNER: Wasn't planning on it. ISAIAH: You boys been busy. CALEB: Not as busy as you. ISAIAH: Hm.
[beat 7] He stands very still. The kettle sings. Hesper sips. The pocket-watch ticks.
[beat 8] Abner moves one hand, slow, under the soapy water. HESPER: Whatever's under there, leave it. ABNER: It's a bar of soap. HESPER: Leave the soap.
[beat 9] Abner raises his hand, empty. A grin splits his beard. ABNER: Sheriff, you're a hard woman. HESPER: Marshal. ABNER: Beg your pardon.
[beat 10] ISAIAH: Calloway. You know why I'm here. ABNER: Money. ISAIAH: Yes.
[beat 11] ABNER: It's in the stove. Caleb drops the pot. Hesper's eyes flick to the fire. Isaiah steps toward it.
[beat 12] In one smooth motion, Abner lunges up, soaking wet, a pistol in his fist, and fires. The lamp explodes. Darkness. Steam. A scream, a crash of copper, a gunshot, another.
[beat 13] When the smoke clears, the tub is empty. The window is open. Curtains lift. Hesper stands at the sill, coffee spilled down her vest. Isaiah picks the shotgun up off the tile.
[beat 14] ISAIAH: He took the soap.

### SCENE s00566 | EXT. RUINED WINDMILL - MINEFIELD - DAWN
Characters: SERGEANT PETER GARRITY, LUCA FERRANTE, ANSELM VOGT
[beat 0] A stone tower, sails broken and hanging. A field of tall grass ringed with rusted wire. Fog clings to the ground. A crow lands on the wire and shakes itself.
[beat 1] SERGEANT PETER GARRITY, 40s, a bandaged ear, crouches in the mill doorway with a rifle. LUCA FERRANTE, 20s, a radioman, hunches beside him, dials tuning, mouth open. ANSELM VOGT, 30s, a sapper with a prod and a headlamp, kneels in the grass ten yards out, probing the soil with infinite care.
[beat 2] GARRITY: Anselm. Talk to me. ANSELM: Clear for two meters. GARRITY: Move. ANSELM: Two meters. Don't rush me.
[beat 3] He edges forward. Prods. Prods. The grass whispers.
[beat 4] Luca checks the radio, jiggles a knob, curses. LUCA: No signal. GARRITY: Keep trying. LUCA: It's the fog. GARRITY: It's always the fog.
[beat 5] Anselm stops. His prod hits something. A soft metallic knock. He freezes. Garrity and Luca freeze too. A breath held by three men.
[beat 6] ANSELM: Contact. GARRITY: Type? ANSELM: Bounding. S-mine. GARRITY: Leave it.
[beat 7] ANSELM: I'm going around. GARRITY: Anselm. ANSELM: I'm going around.
[beat 8] He shifts, belly down, wiggles past the mine, a hand's breadth at a time. Garrity watches. Luca crosses himself with the hand not holding the radio. Fog rolls across the field.
[beat 9] A SOUND. The crow bursts off the wire in a clatter of wings. Anselm flinches. His elbow lands on a loose stone, the stone rocks, and a bootlace pulls taut. ANSELM: No. No, no, no -- GARRITY: Down!
[beat 10] Garrity and Luca drop flat. Anselm throws himself backward. The mine leaps from the soil, a black can on a column of dust, and detonates in the air with a crack that tears the dawn.
[beat 11] Silence. Ringing. Smoke. Garrity lifts his head. Luca gasps. Anselm lies on his back in the grass, headlamp askew, staring up at the grey sky, bleeding from one forearm.
[beat 12] ANSELM: I'm still here. GARRITY: Don't move! LUCA: Medic! MEDIC!
[beat 13] Garrity kneels, rips a sleeve, presses a field dressing to the gash. Luca stumbles through the grass, trips on a wire, falls. The radio flies from his hand. It lands in the weeds and crackles to life.
[beat 14] Luca scrambles for it, shaking, grinning, weeping. Garbled static resolves into a hiss of carrier tone. LUCA: This is Fox Two! Anyone! We're alive!

### SCENE s00567 | INT. DRAWBRIDGE CONTROL HOUSE - NIGHT
Characters: HARRIET LOCKWOOD, NATHANIEL BRIGHT
[beat 0] A glass booth perched high above a river, lit by a desk lamp and a bank of switches. The bridge spans a quarter-mile of black water below. Cars queue on both sides, headlights fogged. A thermos, a paperback, a radio playing low jazz.
[beat 1] HARRIET LOCKWOOD, 50s, a bridge tender in a cardigan, feet on the desk, reads by lamplight. Her hand rests on the control lever.
[beat 2] The door bangs open. A gust of rain. NATHANIEL BRIGHT, 30s, soaked, panting, a pistol in one hand and a gym bag in the other, kicks the door shut and presses his back to it.
[beat 3] NATHANIEL: Don't move. HARRIET: I wasn't going to. NATHANIEL: Put the book down. HARRIET: It's a good book. NATHANIEL: Put it down!
[beat 4] She marks her page with a bus ticket. Sets the paperback on the desk. Raises both hands. HARRIET: There. Happy?
[beat 5] NATHANIEL: Raise the bridge. HARRIET: That's a lot of cars. NATHANIEL: I said raise it!
[beat 6] HARRIET: There's an ambulance in that line, son. Third from the left. He looks. Through the glass, the pulsing blue of an ambulance in the waiting traffic. His arm wavers.
[beat 7] NATHANIEL: I don't care. HARRIET: You do. NATHANIEL: Raise it, or I swear -- HARRIET: You swear what?
[beat 8] He steps forward. The gun shakes. She stays perfectly still, hands up, face calm.
[beat 9] HARRIET: Everyone's safe up here, young man. It's only a bridge. NATHANIEL: Don't think. Don't think. HARRIET: Whoever's behind you, he's not coming for you here. NATHANIEL: Shut up. HARRIET: He's not that fast.
[beat 10] Nathaniel lowers the gym bag. Unzips it with one hand. Money, packed tight. He closes it again, hard.
[beat 11] NATHANIEL: Please. I'm asking. HARRIET: You're not asking. You're aiming. NATHANIEL: Then what do I do?
[beat 12] She lowers her hands, slow. Reaches for the thermos. Pours a cup of coffee. Holds it out. HARRIET: You drink this. NATHANIEL: Are you crazy?
[beat 13] HARRIET: Thirty-one years on this bridge. You're the fourth. He stares at the cup. The jazz plays on, a soft saxophone. Rain rattles the glass. NATHANIEL: ...What happened to the other three? HARRIET: One went to jail. One went home. One's the mayor.
[beat 14] He laughs, one broken sound. His arm sinks.
[beat 15] NATHANIEL: I'm not going to jail. HARRIET: You might. NATHANIEL: I can't. HARRIET: Then go home.
[beat 16] Headlights flare across the booth. Sirens, far off, rising. NATHANIEL: They're coming. HARRIET: They're always coming.
[beat 17] He takes the coffee. Sets down the gun on the desk beside the paperback. His hands shake so hard the cup rattles on the saucer. HARRIET: Sit. You're dripping on my floor.
[beat 18] He sits. She lowers the lever. Far below, the bridge begins to rise, a vast iron hinge turning against the night sky, and every car on both banks goes still.
[beat 19] NATHANIEL: What are you doing? HARRIET: Giving the river a minute.
[beat 20] The sirens grow. The bridge lifts. Two figures, the tender and the thief, sit side by side in the booth, drinking from the same thermos, listening to the jazz.

### SCENE s00568 | INT. COUNTY COURTHOUSE - SUBBASEMENT ARCHIVE - DAY
Characters: COUNSEL ELIAS PRESCOTT, SALMA RAHIMI-DUBOIS, EULALIE FONTAINE
[beat 0] Steel shelves in ranks, boxed files stacked to the ceiling, a bare bulb on a cord. The air smells of paper rot and lemon oil. At the end of one aisle, a folding table has been set for a deposition.
[beat 1] COUNSEL ELIAS PRESCOTT, 50s, in a rumpled navy suit, sits with a legal pad and a pen he clicks nervously. SALMA RAHIMI-DUBOIS, 30s, a court reporter, hunches over a steno machine, fingers poised. EULALIE FONTAINE, 70s, the witness, in a lace collar and sensible shoes, sits across the table with a handbag in her lap and a face like a closed book.
[beat 2] PRESCOTT: Mrs. Fontaine, please state your name for the record. EULALIE: Eulalie Marguerite Fontaine. PRESCOTT: And you were employed as the archivist here from 1988 to 2019? EULALIE: Thirty-one years. PRESCOTT: During that time, you maintained the records of all property transfers in this county. EULALIE: I maintained them. I did not alter them. PRESCOTT: No one has said you did. EULALIE: You are about to.
[beat 3] Prescott's pen stops clicking. Salma's fingers flit across the keys, catching every word.
[beat 4] PRESCOTT: Mrs. Fontaine, I'm handing you Exhibit F. Do you recognize it? EULALIE: It is a deed. PRESCOTT: For which parcel? EULALIE: Lot 14, Mill Street. PRESCOTT: Whose signature is that? EULALIE: Hmm. It appears to be Mr. Aldous Quinn's. PRESCOTT: And do you see a notary seal? EULALIE: I do. PRESCOTT: Whose? EULALIE: Mine.
[beat 5] A beat. The bulb sways. Dust floats down through its glow.
[beat 6] PRESCOTT: Did you notarize this document, ma'am? EULALIE: I did not. PRESCOTT: But it bears your seal. EULALIE: It does. PRESCOTT: Then who stamped it? EULALIE: Someone with a key to my drawer.
[beat 7] Salma stops typing. Looks up. Eulalie meets her gaze, then turns back to Prescott.
[beat 8] EULALIE: Mr. Prescott. I have kept that drawer locked for thirty-one years. I have given one key to one person. I have never regretted it until this morning. PRESCOTT: Who has the key, Mrs. Fontaine? EULALIE: Your client.
[beat 9] The pen drops. Prescott does not pick it up. His face is white. Salma's fingers resume, steadier now, taking down every syllable.
[beat 10] PRESCOTT: Madam reporter, strike that. SALMA: I can't strike it. It's on the record. PRESCOTT: Strike it. SALMA: No, sir.
[beat 11] Eulalie opens her handbag. Takes out a ring of keys. Sets it gently on the table, with a small clink that echoes through the stacks. EULALIE: There are two. Mine, and his.
[beat 12] She slides the ring toward Prescott. He stares at it. Overhead, the bulb flickers. The archive hums.

### SCENE s00569 | INT. GRAND PALMERSTON HOTEL - VENTRILOQUISTS' CONVENTION - BACKSTAGE - NIGHT
Characters: ANNUAL INTERNATIONAL CONGRESS VENTRILOQUISTS, MORTIMER PLUMLEY, BEATRICE OKONJO, HUGO VANDERKELEN, MRS. PEMBERTON
[beat 0] A cramped green room crowded with trunks of wooden dummies. Glass eyes glint from hat boxes. A sign above the door reads: ANNUAL INTERNATIONAL CONGRESS OF VENTRILOQUISTS - 47TH YEAR. Muffled applause drifts through the wall.
[beat 1] MORTIMER PLUMLEY, 50s, a tuxedo and a hairpiece, sits before a mirror, adjusting a dummy on his knee: a wooden schoolboy in a cap, grinning. BEATRICE OKONJO, 40s, in a sequined gown, tunes a puppet duck. HUGO VANDERKELEN, 30s, a nervous newcomer in a rented tux, clutches a lone lamb-shaped sock puppet.
[beat 2] MORTIMER: Quiet, Hugo. You're twitching. HUGO: I'm not twitching. BEATRICE: You are twitching. HUGO: It's a tic. MORTIMER: A tic is fine. A twitch is a tell.
[beat 3] HUGO: Mortimer, I can't do this. MORTIMER: Of course you can. HUGO: My lamb has no personality. MORTIMER: Then give it one. HUGO: How?
[beat 4] MORTIMER: Just make it sassy! The dummy's mouth clacks. Beatrice's duck quacks in agreement. Hugo's lamb droops.
[beat 5] A speaker above the door crackles. MRS. PEMBERTON: Attention, ventriloquists. The Congress will begin the Grand Finale in ten minutes. Contestants please report to the stage left wing. That includes Mr. Vanderkelen. HUGO: She said my name. BEATRICE: She says everyone's name. MORTIMER: Don't wet yourself, kid. HUGO: I'm going to be sick. BEATRICE: Not on the duck.
[beat 6] She turns the duck away. Mortimer's dummy slides off his knee and tumbles across the floor into a pile of trunks. He lunges. Hugo lunges. Beatrice lunges. All three collide, the duck squawking, the lamb flying through the air, wooden limbs rattling.
[beat 7] Mortimer lands on top of Hugo. Beatrice lands on both. The dummy lands upright on a trunk, grinning. MORTIMER: Get off. HUGO: I can't. BEATRICE: Everyone get off me! MRS. PEMBERTON: Contestants. Eight minutes.
[beat 8] They untangle. Beatrice dusts off her gown. Hugo retrieves the lamb, its ear torn. Mortimer tests the dummy's jaw.
[beat 9] HUGO: Is it broken? MORTIMER: Cheek's loose. BEATRICE: Duct tape. MORTIMER: I don't carry duct tape to a gala. BEATRICE: I do.
[beat 10] She digs into her purse and produces a roll. Together they bind the dummy's jaw, then the lamb's ear. Hugo is breathing steadier now.
[beat 11] HUGO: It looks ridiculous. MORTIMER: Ridiculous wins. BEATRICE: Ridiculous is the whole point.
[beat 12] HUGO: What if I freeze? MORTIMER: Then freeze. HUGO: That's your advice? MORTIMER: Freeze convincingly.
[beat 13] Beatrice laughs. A spotlight flares in the doorway. The applause on the other side of the wall swells.
[beat 14] MRS. PEMBERTON: Five minutes! HUGO: Five minutes! BEATRICE: You'll be fine. MORTIMER: Break a leg, lamb chop.
[beat 15] HUGO: Baa. They all stare at the lamb, which, for the first time, seems to look back. MORTIMER: There it is. BEATRICE: That's personality. HUGO: Baa!
[beat 16] He marches to the door, lamb on hand, chin up. Beatrice and Mortimer follow, one with a duck under her arm, one with a taped dummy on his shoulder. The curtain parts. Light and applause flood in. They step through.

### SCENE s00570 | INT. FUNICULAR CAR - MIDNIGHT - STUCK MID-SLOPE
Characters: DESMOND WREN, STRANGER, ODALYS
[beat 0] Rain on glass. One bulb flickers. Cable groans.
[beat 1] DESMOND WREN, 50s, ticket inspector, brass whistle on a cord, grips a clipboard. Across from him, a STRANGER in a dripping yellow poncho. Smiling.
[beat 2] DESMOND: We've been stopped eleven minutes. STRANGER: Twelve. DESMOND: You're counting.
[beat 3] STRANGER: Everyone counts, Mr. Wren. You counted the passengers at the top. Forty-one up. Forty down. DESMOND: How do you know my name? STRANGER: Same way I know about the missing one. The man who rode up and never rode down. DESMOND: Nobody's missing. The log is clean. STRANGER: You wrote the log.
[beat 4] DESMOND: Who are you? STRANGER: Who are you? DESMOND: Don't.
[beat 5] STRANGER: My name is Odalys. His sister. The whistle snaps off its cord.
[beat 6] ODALYS: Where is he, Desmond? DESMOND: Under the lower platform. God forgive me.
[beat 7] The cable SCREAMS. The car lurches.

### SCENE s00571 | INT. RIVERBOAT COURTROOM - DAY
Characters: MARGUERITE VOSS, ELIAS THORNQUIST, JUDGE PRUITT, BAILIFF KRAUSE, ILSA BRANDVOLD
[beat 0] A county courtroom built into the old gambling deck of a paddle steamer, moored permanently at the levee. Brass chandeliers. Faded green carpet stamped with playing-card suits. Through the tall windows, the brown river slides past.
[beat 1] MARGUERITE VOSS, 40s, defense counsel, navy suit, reading glasses pushed into silver-black hair, stands at the lectern. At the other table, ELIAS THORNQUIST, 60, prosecutor, rumpled, a pocket watch chain across his vest, watches her with weary patience. On the bench sits JUDGE PRUITT, 70, silver pompadour, half-moon spectacles, a gavel carved like a riverboat wheel. BAILIFF KRAUSE, 30s, broad, stands by the door with folded hands. On the stand, ILSA BRANDVOLD, 50s, a dock clerk in her Sunday best, twists a handkerchief.
[beat 2] VOSS: Miss Brandvold, you've told this court you saw the lantern at ten o'clock. BRANDVOLD: Yes, ma'am. VOSS: And that you were certain of the hour. BRANDVOLD: The ten o'clock whistle had blown. I always know by the whistle. VOSS: The whistle at the lower landing. BRANDVOLD: Yes.
[beat 3] VOSS: Which was taken out of service on the third of March. Brandvold's handkerchief stops moving. BRANDVOLD: Was it? VOSS: The county ordinance is Exhibit Fourteen. The occurrence was the ninth.
[beat 4] THORNQUIST: Your Honor, counsel is testifying. PRUITT: Sit down, Elias. She's cross-examining. It's what the lady is paid for.
[beat 5] Thornquist sits. He smiles slightly, almost to himself.
[beat 6] VOSS: Miss Brandvold, was there a different whistle? BRANDVOLD: The upriver one, maybe. From the cannery. VOSS: Which blows at a quarter past. BRANDVOLD: I may have been wrong about the time.
[beat 7] A murmur ripples through the gallery. Pruitt raps once. PRUITT: Order. Mr. Krause, the doors. Krause opens the doors; a breeze off the river lifts the papers on both tables.
[beat 8] VOSS: Miss Brandvold, I don't want to embarrass you. BRANDVOLD: You haven't, ma'am. I'd rather be wrong out loud than right and keep quiet.
[beat 9] Voss takes off her glasses. She lets that settle. VOSS: Nothing further.
[beat 10] PRUITT: Mr. Thornquist? THORNQUIST: Just one, Judge. Miss Brandvold. Whatever the hour, the lantern. You saw it. BRANDVOLD: I saw it. THORNQUIST: Where? BRANDVOLD: On the Hollis dock. Same as always. THORNQUIST: Thank you. That's all.
[beat 11] VOSS: Your Honor, in light of the testimony, the defense moves to dismiss. THORNQUIST: Your Honor, the state withdraws the second count. VOSS: You're withdrawing? THORNQUIST: I'd be a fool to hold a case together with a whistle that doesn't work.
[beat 12] PRUITT: Counsel, approach. They approach the bench. Pruitt lowers his voice, but the room is small and the wood carries it.
[beat 13] PRUITT: Marguerite, I've watched you take apart three of Elias's cases this term. VOSS: Thank you, Judge. PRUITT: It wasn't a compliment. He lets you. THORNQUIST: That's a lie, Walter. PRUITT: It's Your Honor in my courtroom. THORNQUIST: It's a boat, Walter.
[beat 14] Pruitt sighs and rubs the bridge of his nose. PRUITT: Count two is dismissed. Count one will be heard Thursday. Mr. Krause, please escort Miss Brandvold out by the forward stairs.
[beat 15] Krause crosses to the stand and offers his arm. Brandvold takes it, shaky. BRANDVOLD: I hope I didn't do harm. KRAUSE: No, ma'am. You told the truth. That's the job.
[beat 16] They exit. Pruitt gathers his robes and steps down. Voss and Thornquist remain, packing files.
[beat 17] THORNQUIST: Dinner at the Delta Queen? VOSS: You're buying. THORNQUIST: I'm always buying. VOSS: That's because you always lose. THORNQUIST: No. That's because I like the company.
[beat 18] She laughs, finally. Together they walk out into the afternoon, past the dealers' cages now stripped to their brass.
[beat 19] The river keeps moving.
