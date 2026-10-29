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
Write the scenes as JSON Lines (one object per line) in THREE files with the Write tool: scenes 1-30 to /home/user/screenwrite-analyzers/data/analyzers/labels/desc/part_007_a.jsonl, 31-60 to /home/user/screenwrite-analyzers/data/analyzers/labels/desc/part_007_b.jsonl, the rest to /home/user/screenwrite-analyzers/data/analyzers/labels/desc/part_007_c.jsonl. No other text in the files. Reply only with "done N".

## Scenes

### SCENE s00662 | EXT. DRY WASH - HIGH DESERT - DAWN
Characters: RIDER, ABEL
[beat 0] A dry riverbed. Sage, cracked clay, a lone cottonwood bleached white. A horse stands hobbled by the tree, nosing at the dust. A campfire has burned to a gray nest.
[beat 1] A RIDER, fifties, hat low, sits on a flat stone with a tin cup. A graying beard. A slow way of moving, as if he'd spent a lifetime bargaining with his joints.
[beat 2] He tilts the cup. Dregs. He tosses them on the ashes.
[beat 3] RIDER: Don't look at me like that. It's the last of the coffee. The horse flicks an ear.
[beat 4] He reaches into his saddlebag and withdraws a folded sheet of paper, brown at the creases. Smooths it on his knee. Reads in silence. Then, aloud:
[beat 5] RIDER: "Dear Abel. The farm is sold. Your sister has the boy. Do not come back, for there is nothing to come back to."
[beat 6] He lowers the letter. The wind lifts the edge of it. He holds it down with a thumb.
[beat 7] RIDER: Abel Corrigan. That's me. You never asked. The horse snorts. ABEL: Well. Now you know.
[beat 8] He folds the letter along its creases and tucks it into his hatband. He gets to his feet in stages. ABEL: Forty miles to the river.
[beat 9] From somewhere a long way off, down the wash, comes the thin whistle of a train. ABEL: Would you listen to that.
[beat 10] He takes the horse's reins. He leads it a few paces, stops, and stands listening until the whistle fades.
[beat 11] ABEL: "Dear Father. We are well. The boy has your eyes." ABEL: Hush now.
[beat 12] He mounts, slowly, and rides out along the wash toward the east, where the sun has begun to lift itself over the ridge.

### SCENE s00663 | INT. GENERATION SHIP - SEED VAULT - CYCLE 4,112
Characters: ENGINEER NAKIA OKORO-VEGA, ARCHIVIST EZRA HADDAD
[beat 0] A circular chamber lined with frost-white drawers, each etched with a Latin name. Cold air hisses from vents. A single catwalk crosses the center, lit by thin blue strips.
[beat 1] ENGINEER NAKIA OKORO-VEGA, fifties, climbs the ladder to the catwalk, a tool belt clanking at her hip. Below, in a nest of cables, sits ARCHIVIST EZRA HADDAD, seventies, with a data slate propped on his knees.
[beat 2] She reaches the top and looks down at him. He doesn't look up.
[beat 3] NAKIA: Temperature's drifting. EZRA: I know. NAKIA: Drawer forty-one is already warm. EZRA: I know.
[beat 4] She descends. He closes the slate. She kneels beside him and puts a hand on his shoulder, and he leans into it, barely.
[beat 5] NAKIA: How many are gone? EZRA: Eleven thousand. Roughly. NAKIA: Of how many? EZRA: All of them, if she isn't fixed in a week.
[beat 6] She stands. She crosses to the nearest drawer, wipes frost from the label with her sleeve, and slides it open. Inside, tiny glass vials gleam in their rows, many clouded.
[beat 7] NAKIA: We can save the grains. EZRA: The grains aren't the loss. NAKIA: No?
[beat 8] EZRA: It's the orchids. The lilacs. The ones nobody needs.
[beat 9] She closes the drawer. She doesn't argue.
[beat 10] NAKIA: I'll start with the orchids. EZRA: Thank you.
[beat 11] She climbs back to the catwalk, reaches into the ceiling panel, and begins to work.
[beat 12] Below, he opens the slate and begins to read aloud the names of the dying, one by one.

### SCENE s00664 | EXT. SELF-STORAGE FACILITY ROOFTOP - NIGHT
Characters: CASSIDY ODEKUNLE, ELI, BRANDVOLD, MOM
[beat 0] A flat tar roof ringed by rows of orange doors. A city glows beyond the chain-link. Two lawn chairs, a cooler, a portable speaker playing something low. A tangle of fairy lights strung across a vent pipe, half of them dead.
[beat 1] CASSIDY ODEKUNLE, seventeen, slouches in one chair in a thrift-store prom dress and sneakers, her knees drawn up. Beside her, ELIJAH "ELI" BRANDVOLD, seventeen, sits in a rented tux with the bow tie loose, a paper cup of lukewarm soda balanced on his knee.
[beat 2] CASSIDY: You didn't have to come up here. ELI: You texted me the address. CASSIDY: As a joke. ELI: It didn't read like a joke. CASSIDY: Everything reads like a joke when you're me.
[beat 3] He sets the cup down on the tar. He leans back and looks at the sky, which has only three stars in it.
[beat 4] ELI: You missed your own prom. CASSIDY: I didn't miss it. I left it. ELI: Why?
[beat 5] CASSIDY: Because Kayleigh Tran said my dress looked like a curtain. ELI: It does look like a curtain. CASSIDY: I know it looks like a curtain! It's my grandmother's curtain!
[beat 6] She laughs, startled, and then her face crumples. She pulls the dress's hem over her knees and presses her forehead to it.
[beat 7] ELI: Hey. CASSIDY: Don't. ELI: Cass. CASSIDY: I said don't.
[beat 8] He sits very still. The speaker's song ends. In the quiet, a train passes below, a long iron murmur. She wipes her face with her wrist.
[beat 9] CASSIDY: My mom doesn't know. She thinks I'm at the after-party. ELI: Is there an after-party? CASSIDY: There's always an after-party.
[beat 10] ELI: I'll take you. CASSIDY: I don't want to go. ELI: Then I'll stay. CASSIDY: You hate roofs. ELI: I hate heights. Roofs are just heights with furniture.
[beat 11] She laughs, a small wet laugh. He holds out the cup of soda. She drinks, makes a face, and gives it back. CASSIDY: Warm. ELI: Yeah.
[beat 12] They watch the city. Somewhere far off, a siren starts and fades.
[beat 13] CASSIDY: Eli? ELI: Yeah? CASSIDY: Do you ever think everyone is faking? ELI: All the time. CASSIDY: Even Kayleigh? ELI: Especially Kayleigh.
[beat 14] She smiles. She slides her hand across the armrest and he takes it without looking, and they sit like that, two people on a roof among a hundred locked doors.
[beat 15] Then Eli's phone buzzes on the tar. They both glance at it. The screen lights: MOM — 14 MISSED CALLS. ELI: Oh no. CASSIDY: Oh no.
[beat 16] He grabs it. She snatches it from him and holds it up out of reach, and he lunges, and the chairs scrape, and the cooler topples, and ice spills across the roof in a bright white rush. ELI: Give it!
[beat 17] CASSIDY: Not until you say it! ELI: Say what? CASSIDY: That you're glad you came.
[beat 18] He stops. Ice crunches under his shoes. He looks at her, tux askew, face flushed, hair full of fairy-light glare. ELI: I'm glad I came. CASSIDY: Good.
[beat 19] She hands him the phone. He doesn't look at it. He puts it face-down on the tar.
[beat 20] ELI: You owe me a dance. CASSIDY: There's no music. ELI: There's the speaker.
[beat 21] She reaches over and taps it. A scratchy waltz starts up. She stands, awkward in her sneakers, and offers him her hand.
[beat 22] CASSIDY: Don't step on my curtain. ELI: I'll try.

### SCENE s00665 | EXT. LIFE RAFT - OPEN OCEAN - DAY
Characters: CAPTAIN LUCIAN BRACKENRIDGE, MARIANNE DELACROIX-SOTO, ANDERS TELLEFSEN
[beat 0] A yellow raft on a flat blue sea. The sun is a hammer. A tattered canopy offers a stripe of shade. Three castaways sit in a triangle, rationing silence.
[beat 1] CAPTAIN LUCIAN BRACKENRIDGE, fifties, sits at the bow with a sextant he no longer needs, his white uniform gone gray. At the stern, MARIANNE DELACROIX-SOTO, thirties, ship's doctor, tends a water pouch with the care of a priest. Between them, hunched over his knees, is ANDERS TELLEFSEN, twenties, deckhand, lips cracked, eyes fixed on a point on the horizon that isn't there.
[beat 2] Lucian holds out a hand. Marianne passes the pouch. He sips, and passes it to Anders. Anders holds it and does not drink.
[beat 3] LUCIAN: Drink, son. ANDERS: Later. LUCIAN: Now. ANDERS: Later, Captain.
[beat 4] Marianne watches. She says nothing. A wave slaps the hull, and spray flies over their faces and dries almost at once.
[beat 5] MARIANNE: Anders. LUCIAN: Anders.
[beat 6] Anders looks up at them both, then down at the pouch. He lifts it, slowly, as if lifting a weight, and drinks. Only a sip. He hands it back.
[beat 7] Marianne takes it. She tilts it to the light. It is almost empty.
[beat 8] She looks at Lucian. He looks at the sea.
[beat 9] MARIANNE: Two days. LUCIAN: Two days.
[beat 10] ANDERS: You're lying.
[beat 11] Silence. A gull circles overhead, wheeling in the cloudless blue. ANDERS: There's one day. Maybe less. LUCIAN: Anders -- ANDERS: You both knew.
[beat 12] Marianne starts to answer. Lucian puts a hand on her wrist. She stops.
[beat 13] Anders is on his knees now, the raft rocking dangerously under him, and he lunges for the pouch. Marianne pulls it away. Lucian seizes his arm. The three of them crash together in a tangle, and the pouch splits, and the last of the water spills into the bottom of the raft and is gone.
[beat 14] Nobody moves.
[beat 15] Anders slumps back. Marianne stares at the dark stain on the rubber. Lucian lets go of Anders's arm and, very gently, closes his own eyes. LUCIAN: Well.
[beat 16] The gull wheels overhead, close now. Marianne tilts her head back and looks up at it for a long time.

### SCENE s00666 | INT. ROADSIDE MOTEL ICE MACHINE ALCOVE - NIGHT
Characters: DARNELL WITHERSPOON, ODESSA WITHERSPOON-LU, LITTLE MILO WITHERSPOON
[beat 0] A concrete nook under a buzzing sodium lamp. A rusted ice machine hums, its chute dripping. Behind it, a stairwell to a second-floor gallery of doors. Moths bomb the light.
[beat 1] DARNELL WITHERSPOON, thirties, a trucker in a stained jacket, fills a plastic bucket at the chute while his sister, ODESSA WITHERSPOON-LU, thirties, leans on the railing with a cigarette. Between them, a third figure: LITTLE MILO WITHERSPOON, nine, Darnell's son, who sits on the bottom stair with a handheld game, eyes down.
[beat 2] The machine coughs.
[beat 3] A block of ice crashes into the bin and, as Darnell leans in, he pulls back his hand and stares at the bucket. Something dark swirls in the meltwater, slow as smoke.
[beat 4] Odessa takes a drag and looks at the sky.
[beat 5] Milo, absorbed in his game, lifts his foot onto the second step, and from the gallery above comes the creak of a door none of them heard open.
[beat 6] Darnell tips the bucket out onto the pavement. The water runs black and then clear.
[beat 7] DARNELL: Milo. Come here. MILO: I'm on level six. DARNELL: Now, bud.
[beat 8] Milo looks up. Past his father. Up the stairs. His face goes slack.
[beat 9] MILO: Dad? Who's the lady in the window?
[beat 10] Odessa drops her cigarette. Darnell does not turn around.

### SCENE s00667 | INT. WAREHOUSE ROLLER DERBY RINK - NIGHT
Characters: BRUTAL BRON, SANTOS-WEBB, MAYHEM MO, OYELOWO, RAZOR, VASQUEZ
[beat 0] A banked track marked in tape. Folding chairs, a beer cooler, a hand-lettered scoreboard. A hundred spectators in leather and sequins roar.
[beat 1] Three skaters. One jam left.
[beat 2] BRONWYN "BRUTAL BRON" SANTOS-WEBB, thirties, jammer, star on her helmet. Fast. Bleeding from the lip.
[beat 3] MONIQUE "MAYHEM MO" OYELOWO, forties, blocker. Wide as a door.
[beat 4] RENATA "RAZOR" VASQUEZ, twenties, blocker. Small. Dangerous.
[beat 5] Whistle.
[beat 6] Bron charges. Mo steps in. Razor sweeps low.
[beat 7] Bron hops, spins, and slams into Mo's shoulder. Razor's elbow takes her in the ribs. All three go down in a clattering heap, helmets cracking, wheels spinning in the air.
[beat 8] The crowd shrieks.
[beat 9] BRON: Is she okay? MO: I'm fine! RAZOR: Not her. Her.
[beat 10] She points. Bron sits up. She is clutching her wrist.
[beat 11] Mo and Razor look at each other. They roll away at the same moment, and she gets up first, holding a hand down to Bron.
[beat 12] MO: Time out.
[beat 13] The crowd chants. Bron laughs through the pain, takes the hand, and lets herself be hauled up. Razor, grinning, high-fives her with the good one.

### SCENE s00668 | INT. CORPORATE TEAM-BUILDING ESCAPE ROOM - DAY
Characters: FEE, ADEYEMI-CROSS, GAVIN HOLLOWAY-PRICE
[beat 0] A fake dungeon. Rubber chains, plastic torches, a countdown clock mounted above a locked iron door. The clock reads 47:00. A speaker in the ceiling plays a looped, ominous drone.
[beat 1] Two coworkers stand in the center of the stone-effect floor. FIONNUALA "FEE" ADEYEMI-CROSS, forties, a senior accountant in a blazer. Clipboard. No shoes. GAVIN HOLLOWAY-PRICE, thirties, a product lead in a company hoodie. Earnest. Sweating.
[beat 2] A laminated sign reads: THERE IS NO "I" IN ESCAPE.
[beat 3] FEE: The clue is on the wall. GAVIN: The wall has seventeen clues. FEE: Then it's one of seventeen. GAVIN: That's not how clues work. FEE: That's exactly how clues work.
[beat 4] She taps a rubber torch. It falls off its bracket. She sighs, replaces it, and it falls again.
[beat 5] GAVIN: Okay. Okay. Think. FEE: Gavin, you're muttering. GAVIN: I'm brainstorming. FEE: Out loud, to nobody. GAVIN: I'm brainstorming to the room.
[beat 6] The clock ticks: 44:12. Something in the ceiling crackles, and then falls quiet. FEE: Oh, God.
[beat 7] Gavin immediately begins searching the floor on his hands and knees. Fee watches him.
[beat 8] FEE: It's a hotel conference room with a rug over it, Gavin. The key's in the rug. GAVIN: How do you know? FEE: Because I've been in forty of these. GAVIN: Forty? FEE: It's called "culture."
[beat 9] He lifts a corner of the rug. A brass key lies on the concrete. He holds it up like a medal.
[beat 10] GAVIN: Fee! FEE: Don't celebrate. It's the cheapest one.
[beat 11] He fits the key into the iron door. It turns. The door groans open and reveals a second room, identical to the first, with a clock reading 40:00.
[beat 12] GAVIN: It resets. FEE: Of course it resets. GAVIN: Is it always like this? FEE: It's always like this.
[beat 13] She sets down the clipboard. She sits cross-legged on the floor in the second room, and after a moment, he sits too.
[beat 14] FEE: Gavin, do you actually like working here? GAVIN: I... don't know. FEE: Neither do I. GAVIN: You've been here nineteen years. FEE: It feels like a hobby I never chose.
[beat 15] He laughs, a surprised bark. The room hums.
[beat 16] FEE: We know!
[beat 17] GAVIN: Should we try? FEE: Try what? GAVIN: The puzzle.
[beat 18] She considers him. Then the room. Then the clock.
[beat 19] FEE: No. GAVIN: No? FEE: I'd like to sit here and not escape. GAVIN: For how long? FEE: Till they open the door.
[beat 20] He nods slowly. He takes off his hoodie, folds it, and sets it on the floor like a cushion. GAVIN: Can I sit on yours? FEE: Be my guest.
[beat 21] They sit side by side. The clock ticks. The drone loops.
[beat 22] After a while, Fee gets out her phone, and Gavin, hesitantly, opens his lunch. GAVIN: Pretzel? FEE: Please.
[beat 23] FEE: We're fine, Brad. Stop checking.
[beat 24] The drone resumes. Gavin snorts. Fee, who has not smiled since the room began, tips her head back against the plastic wall and closes her eyes.
[beat 25] FEE: This is the best day I've had in years.

### SCENE s00669 | INT. VETERINARY CLINIC WAITING ROOM - MEDIATION - DAY
Characters: SEBASTIAN OYELARAN-PRICE, ANTONIA REYES-HOLLOWAY
[beat 0] Plastic chairs. A scale for large dogs. A poster: ARE YOUR PET'S TEETH TELLING YOU SOMETHING? A rack of leashes. A mediator's empty chair sits between two others, its owner stepped out to find a pen.
[beat 1] SEBASTIAN OYELARAN-PRICE, forties, in a camel coat, sits rigidly with a folder on his knees. ANTONIA REYES-HOLLOWAY, forties, in a tracksuit, clutches a cat carrier on her lap.
[beat 2] SEBASTIAN: Biscuit is a Maine Coon. ANTONIA: Biscuit is a cat. SEBASTIAN: I paid for the vaccinations. ANTONIA: I clean the box.
[beat 3] The carrier shifts. A paw pokes through the grille. Antonia looks down, and her face softens. ANTONIA: Hello, my love.
[beat 4] SEBASTIAN: Don't baby him. He's eleven. ANTONIA: He's a baby.
[beat 5] SEBASTIAN: Six months each. Alternating. That's what she's going to propose.
[beat 6] ANTONIA: He gets carsick because you drive like a lunatic. SEBASTIAN: I drive like a person! ANTONIA: You drive like a person who's late for his own cat.
[beat 7] The carrier jolts. Both lunge for it. Antonia pulls it to her chest, Sebastian grabs the handle, and for a moment the two of them are bent over it like surgeons, each with a hand on it.
[beat 8] The latch pops.
[beat 9] Biscuit, enormous and orange, steps out.
[beat 10] Both freeze. The cat looks at one, then the other. It walks to the scale, hops on, and settles. The readout flickers: 19.4.
[beat 11] SEBASTIAN: Nineteen pounds. ANTONIA: Because you feed him cheese. SEBASTIAN: Because you feed him tuna.
[beat 12] Neither moves toward the cat. Then, slowly, Sebastian crouches and holds out a finger. Antonia kneels beside him. Biscuit sniffs, and begins to purr.

### SCENE s00670 | INT. BRANDVOLD TAXIDERMY - BACK ROOM - NIGHT
Characters: OTTO BRANDVOLD, SILAS KEANE, TOM PELLETIER, MAUDE ARCHIBALD, RUBY LAMB, ALL, FENWICK
[beat 0] Glass eyes glitter from every shelf: owls, a badger, a stuffed marlin mounted over the door. Under a green lamp, a poker game is winding down.
[beat 1] OTTO BRANDVOLD, 60s, round and genial, shuffles with slow pride. Across from him sits SILAS KEANE, 40s, lean, in a good suit gone shiny at the elbows. TOM PELLETIER, 50s, a bruiser in a too-small vest, stacks his chips like bricks. MAUDE ARCHIBALD, 50s, silver hair, pearl earrings, knits between hands. RUBY LAMB, 20s, sharp-eyed, deals herself a cigarette and nothing else.
[beat 2] OTTO: Gentlemen. Ladies. A toast before the last hand. To friends who stay friends. He pours amber into five small glasses. TOM: Never turn down Otto's brandy.
[beat 3] MAUDE: Dear, you're not drinking. RUBY: I'm pacing myself.
[beat 4] Silas lifts his glass, studies it against the lamp, sets it down untouched. SILAS: Nobody pours that generous for free. OTTO: Something wrong, Silas? SILAS: Just admiring the craftsmanship. Of the glass.
[beat 5] Tom drains his and thumps the table. Maude's needles click. The marlin's shadow crawls across the felt.
[beat 6] OTTO: Last hand. Everybody in? ALL: In.
[beat 7] Otto deals. Tom sways, blinks hard, and tries to speak. Nothing comes. He slides sideways off his chair and lands among the sawdust.
[beat 8] Maude's needles stop. Ruby stands, calm, and pockets the cards.
[beat 9] RUBY: You didn't drink it. SILAS: Neither did you.
[beat 10] OTTO: Two out of five. Not bad for a Tuesday.
[beat 11] The back door opens. FENWICK, 30s, rain on his shoulders, a badge in his raised hand and a revolver in the other. FENWICK: Nobody touch the glasses. Otto, I've been waiting a year for this.
[beat 12] Otto smiles and sets down the bottle. OTTO: So has Maude.
[beat 13] Maude lays her knitting aside. Beneath it, a small pistol.

### SCENE s00671 | INT. SKATELAND ROLLER RINK - PARTY ROOM - DAY
Characters: ODALYS, PAULO REYES, KIKI, DANTE FERREIRA, MARISOL, TIO BETO
[beat 0] Plastic tablecloths. A sheet cake shaped like a sneaker. Disco light spins across the wall.
[beat 1] ODALYS, 70s, church dress, guards the cake. PAULO REYES, 40s, a dad with a phone in each hand. KIKI, 8, birthday crown crooked. DANTE FERREIRA, 15, hood up, bored. MARISOL, 38, Paulo's sister, tying balloons. TIO BETO, 60s, mustache, holds a camcorder.
[beat 2] TIO BETO: Everybody in the picture! Closer! They bunch up. Kiki leans toward the candles.
[beat 3] KIKI: Wait. Where's Mom?
[beat 4] Paulo's smile freezes. PAULO: She's coming, mija.
[beat 5] DANTE: She said that last year. Paulo whips around. PAULO: Dante.
[beat 6] Odalys slaps the table. The cake jumps. ODALYS: Not today. Everyone sit. Now.
[beat 7] Nobody sits. Marisol lets go of a balloon; it drifts to the ceiling.
[beat 8] MARISOL: Did you even call her? PAULO: Three times. KIKI: Is she not coming?
[beat 9] Silence. The disco light turns. Dante pulls his hood down.
[beat 10] DANTE: She's coming. I texted her where we are. Paulo stares at him.
[beat 11] Dante's phone buzzes. He reads it, turns the screen toward Paulo. Paulo reads it and his shoulders drop.
[beat 12] PAULO: She's in the parking lot. Parking. KIKI: Mom's parking!
[beat 13] She is already running for the door. Paulo exhales. Odalys crosses herself and lights the candles.
[beat 14] TIO BETO: Rolling. Finally rolling. ODALYS: Sing. Loud.

### SCENE s00672 | INT. PLUMLEY'S CLOCK REPAIR - BACK WORKROOM - DAY
Characters: HORACE PLUMLEY, CHESTER VOSS, WINNIFRED
[beat 0] Forty ticking clocks, none agreeing. HORACE PLUMLEY, 60s, bow tie, loupe on his eye, bends over a gutted grandfather clock.
[beat 1] CHESTER VOSS, 50s, a rival dealer in a camel coat, tiptoes in by the rear door. WINNIFRED, 60s, Horace's sister, sets down a tea tray.
[beat 2] CHESTER: Horace, old friend. I'll give you five hundred for the Lindqvist clock. HORACE: It's not for sale. CHESTER: Everything is.
[beat 3] He reaches for the clock. Horace grabs the pendulum. Chester grabs the other end. They tug, nose to nose.
[beat 4] WINNIFRED: Gentlemen! Both men freeze. The pendulum swings between them and clangs a bell.
[beat 5] They let go, then both lunge for the clock again and topple into a heap on the floor.
[beat 6] HORACE: He started it! WINNIFRED: He did not. He's sitting on your hat.
[beat 7] Chester pulls the hat from under him and offers it with a weak smile. Horace snatches it.
[beat 8] Winnifred pours tea into three cups and hands one down to each of them.
[beat 9] WINNIFRED: Now. Five hundred? HORACE: Make it six.

### SCENE s00673 | EXT. NIGHT FERRY - UPPER DECK - NIGHT
Characters: GIRL, IGNACIO, WREN
[beat 0] Wind drags the black water past the rail in long, unbroken sheets. The ferry's lamps throw a weak yellow circle on the planks, and past that circle there is nothing but weather.
[beat 1] A GIRL, ten, sits on an overturned lifebuoy crate with her knees pulled to her chest. Her coat is two sizes too big and has belonged to someone else. Beside her, upright as a post, stands IGNACIO, seventies, a hat clamped in both fists against the gusts.
[beat 2] GIRL: You said we'd be there by dark. IGNACIO: It is dark. GIRL: You know what I mean.
[beat 3] He turns the hat in his hands, a slow revolution, as if he could find the right side of it by feel. IGNACIO: The captain says the crossing is slower tonight. Currents. GIRL: You always say the captain. IGNACIO: Because the captain always says.
[beat 4] A swell lifts the ferry and sets it down hard. The girl's hand shoots out and grips his sleeve. He does not look at it. He lets it stay.
[beat 5] IGNACIO: What is your name? Your whole name. Tell it to me once more. GIRL: You know it. IGNACIO: I want to hear how you say it.
[beat 6] Her chin lifts against the wind. GIRL: Wren Salazar-Imbert. IGNACIO: Again. Slower. WREN: Wren Salazar-Imbert. Wren. Like the bird. Like the small one that makes the loud noise. IGNACIO: Good. When they ask at the dock, you say it like that.
[beat 7] WREN: Who is going to ask?
[beat 8] He does not answer. The foghorn sounds, once, long enough to shake the rail. Wren tightens her grip on his sleeve, and neither of them looks toward the dark where the shore should be.
[beat 9] WREN: Ignacio. Will you be there? IGNACIO: I am here now. WREN: That is not what I asked.
[beat 10] The ferry rolls. The lamp swings.
[beat 11] Ignacio sets his hat on her head, pulling it down over her ears, and she lets him.

### SCENE s00674 | INT. HARTWIG OBSERVATORY - DOME CHAMBER - NIGHT
Characters: PROFESSOR EMIL HARTWIG, CORA BELLINGHAM
[beat 0] A great brass telescope tilts toward a slit of stars. Star charts blanket every wall. A desk lamp, a cold teapot, a black intercom box on the wall.
[beat 1] PROFESSOR EMIL HARTWIG, 60s, rumpled tweed, ink on his cuffs, sits hunched over a ledger. He looks up at the intercom as it crackles.
[beat 2] CORA: Professor? Are you still up there? HARTWIG: Who is that? CORA: The night porter's niece. They let me in at the gate. I need to ask you about the Calloway disappearance.
[beat 3] Hartwig closes the ledger very carefully. HARTWIG: I don't discuss that. Good night.
[beat 4] CORA: Your assistant was last seen climbing these stairs. Eleven years ago tonight. HARTWIG: Is that what the papers say? CORA: That is what the logbook says. The one in your hand.
[beat 5] Hartwig's fingers tighten on the ledger. He glances at the dome door. HARTWIG: The door at the bottom is locked. CORA: I know. I'm calling from the landing.
[beat 6] A knock, three soft raps, echoes up the iron staircase. Hartwig stands. His chair scrapes.
[beat 7] HARTWIG: How did you get a key? CORA: I didn't. It was never locked from my side.
[beat 8] The dome door swings open. CORA BELLINGHAM, 30s, rain-soaked trench coat, a brass key on a chain around her neck, steps into the lamplight. She holds a small handset against her ear and clicks it off.
[beat 9] CORA: Hello, Professor. HARTWIG: You're not the porter's niece. CORA: No. HARTWIG: Then who?
[beat 10] CORA: Daniel Calloway was my brother.
[beat 11] Hartwig takes a step back and bumps the telescope. It swings an inch and groans.
[beat 12] HARTWIG: I was cleared. There was an inquiry. CORA: There was. It asked the wrong questions.
[beat 13] She walks to the desk and puts the brass key on the ledger. CORA: That's the key to the sub-basement. Daniel's key. It was in his coat, in the river. HARTWIG: That proves nothing. CORA: It proves he had a reason to go down there. Why would an astronomer go down? HARTWIG: Cora--
[beat 14] CORA: You said my name. I didn't give it.
[beat 15] Hartwig stops. The lamp hums. A moth circles it.
[beat 16] HARTWIG: Heard it from the porter. At the gate. CORA: The porter retired in March.
[beat 17] Silence. Hartwig sits slowly in his chair.
[beat 18] HARTWIG: He fell, you understand. There was an instrument case on the stair. A terrible accident. CORA: Then why hide it?
[beat 19] HARTWIG: Because he wasn't alone on the stair.
[beat 20] He opens the ledger and turns it toward her. A page of neat handwriting, and below it a second hand, shakier. HARTWIG: Read the last line. Not mine.
[beat 21] Cora leans over the page. Her face does not change, but her hand finds the edge of the desk. CORA: "I pushed him. Forgive me. - T. Wexler."
[beat 22] HARTWIG: The old director. He died that winter. I've kept this page for eleven years, because I didn't know who to hand it to.
[beat 23] CORA: You could have handed it to the police. HARTWIG: And be asked why I waited? CORA: Yes. Why did you wait?
[beat 24] Hartwig looks up at the slit of sky, where a single bright star hangs. HARTWIG: Because I was afraid he would come back and ask me the same thing.

### SCENE s00675 | INT. FUNICULAR CAR - NIGHT
Characters: MIRABEL STROUD, JUNIOR OKAFOR, LUCAS PIERRE
[beat 0] A little wooden car climbs a steep rail through pine forest toward a sleeping hotel. Brass lamps, velvet benches, a locked steel case strapped to the floor.
[beat 1] MIRABEL STROUD, 40s, sleek in a conductor's uniform that does not quite fit, stands at the brake lever. JUNIOR OKAFOR, 20s, in porter's livery, perches on the case with a thermos. LUCAS PIERRE, 50s, a quiet man in a traveling coat, sits at the far end with a newspaper.
[beat 2] JUNIOR: Smooth ride, Mirabel. Real smooth. MIRABEL: Don't jinx it. LUCAS: Nothing to jinx. Two minutes to the top, one case, three honest people. JUNIOR: Four if you count the case.
[beat 3] MIRABEL: Junior, the cable. JUNIOR: What about it?
[beat 4] Mirabel's eyes go to the cable humming in its groove. Junior unscrews the thermos, takes a sip, offers it to Lucas, who shakes his head, folds the newspaper in half, and tucks it under his arm, while Mirabel slides one hand off the brake lever and into her jacket, and the car creaks past a lantern marking the halfway pole.
[beat 5] LUCAS: Tell me, Mirabel. Who's at the top? MIRABEL: Night clerk. Maybe a guest or two. JUNIOR: The clerk's asleep.
[beat 6] LUCAS: How would you know? JUNIOR: I did the schedule. MIRABEL: You did the schedule? JUNIOR: I did a schedule. Not the schedule. LUCAS: Interesting.
[beat 7] Junior stands. The thermos slips from his hand and rolls to Lucas's shoe.
[beat 8] Lucas stops it with a toe, picks it up, unscrews the cap, and tips the contents onto the floor. It is not coffee. It is a thin pool of clear oil that spreads toward the case.
[beat 9] MIRABEL: That's brake fluid. JUNIOR: It's not what it looks like.
[beat 10] LUCAS: It's exactly what it looks like. Mirabel, stop the car. MIRABEL: If I stop here, we slide. LUCAS: Then slide gently.
[beat 11] Mirabel draws a pistol from her jacket and levels it at Junior.
[beat 12] Lucas stands, opens his traveling coat, and shows a badge. LUCAS: Funicular Authority, Inspector Pierre. Which of you wants to explain the oil?

### SCENE s00676 | INT. GENERATION SHIP HELIOS-9 - SEED VAULT DECK - SHIP NIGHT
Characters: TEODORA VASK, IMANI QUILL
[beat 0] A low arched chamber lined with frosted drawers of seed. Pale green grow lights hum. Condensation beads on steel.
[beat 1] TEODORA VASK, 50s, a quiet botanist in a faded gray jumpsuit, walks the aisle with a tablet, touching each drawer as she passes. TEODORA: Barley, two hundred and eleven. Barley, two hundred and twelve. You're all still here. Good.
[beat 2] She stops at a drawer that is slightly open, closes it with a click, and makes a note. TEODORA: Humidity at point four. Slightly high. Always slightly high.
[beat 3] The hatch hisses. IMANI QUILL, 20s, in the white sash of a ship's archivist, steps in with a stack of data slates against her chest. She looks lost.
[beat 4] IMANI: Is this the vault? They said Deck Nine, but all the doors say Deck Nine. TEODORA: It's the vault. You're the new archivist. IMANI: I'm Imani. I'm sorry, I didn't know anyone would be here at this hour. TEODORA: Nobody is, ever. That's why I come.
[beat 5] Imani lays her slates on a workbench and glances at the drawers.
[beat 6] IMANI: How many seeds are in here? TEODORA: Eleven million, give or take. She says that, the ship, in her reports. I say it feels like more when you count them by hand.
[beat 7] IMANI: She doesn't mean the ship. She means the Registrar, the one who wrote the index. TEODORA: Ah. Then she's wrong, too. She never came down here.
[beat 8] They share a small, tired smile. Teodora hands Imani a spare tablet.
[beat 9] TEODORA: Start at drawer one. Read me the label on each, slowly. IMANI: Just read? TEODORA: Just read. I listen better than I count.
[beat 10] Imani sits on the stool, props the tablet on her knee, and reads aloud. IMANI: Wheat, hard red winter. Wheat, soft white. Rye.
[beat 11] Teodora closes her eyes and listens.

### SCENE s00677 | INT. SUDS-N-GO LAUNDROMAT - NIGHT
Characters: ROSALIND, JUDE, NELL
[beat 0] Humming dryers. Buzzing tube light. Rain on glass.
[beat 1] ROSALIND, 40s, folds towels hard. Snap. Snap. JUDE, 12, sits on a washer, sneakers swinging, doing homework nobody asked about. NELL, 70s, in a quilted coat, watches both of them from a plastic chair.
[beat 2] Rosalind snaps a sheet. JUDE: You folded that one already. ROSALIND: No. NELL: She did, dear. Twice. ROSALIND: I'm not talking to you, Mom.
[beat 3] Nell nods, patient, as if this were weather. A dryer buzzes. Nobody moves.
[beat 4] JUDE: Mr. Pruitt said I could stay with Grandma if -- ROSALIND: Don't. JUDE: I'm just saying. NELL: He could. It's a big house.
[beat 5] Rosalind drops a towel. Picks it up. Folds it a third time.
[beat 6] ROSALIND: Where's the other sock? JUDE: Dad took it.
[beat 7] Rosalind's hands stop. A long beat. The tube light flickers.
[beat 8] NELL: Honey, get me a cup of cocoa from the machine. JUDE: It doesn't take dollars. NELL: Then go find quarters.
[beat 9] Jude slides off the washer, slow, watching. He leaves. Rosalind keeps folding, fast now, jaw tight.
[beat 10] NELL: You can stop the towels. ROSALIND: I can't.
[beat 11] Nell stands, crosses to the table, lays her hand flat over Rosalind's. The towel goes still between them. Rosalind's shoulders shake once, silently.
[beat 12] JUDE: Got one! Wait, it's a button.
[beat 13] Rosalind laughs once, wet, and wipes her face on the towel.

### SCENE s00678 | INT. STRIKE ZONE LANES - LANE 14 - NIGHT
Characters: SPUD, NOWAK, LORETTA VANCE, DUTCH AMARI, PEARL, GIDEON, MINNOW
[beat 0] The neon pins glow pink over a pile of cash on the scoring table. Six people stand frozen under the haze of cigarette smoke.
[beat 1] KAZIMIERZ "SPUD" NOWAK, 50s, shoes untied, grips a ball like a grenade. LORETTA VANCE, 40s, red lipstick, holds the money. DUTCH AMARI, 30s, tall, leans on the ball return. PEARL, 60s, the lane attendant, polishes a shoe with great calm. GIDEON, 20s, nervously jingles car keys. MINNOW, 12, drops under the table.
[beat 2] SPUD: Loretta, put the cash down and nobody gets scuffed. LORETTA: Scuffed? Spud, you rented these shoes.
[beat 3] DUTCH: Pearl, whose side are you on? PEARL: Lane 14's.
[beat 4] Gideon bolts. Spud hurls the ball; it thunders down the lane and scatters the pins, and Gideon, mid-stride, hops and screams as his keys skid into the gutter.
[beat 5] MINNOW: Strike!

### SCENE s00679 | INT. ICE-FISHING HUT - DAWN
Characters: HALVARD EIDE, SUNNIVA ROE, BROCK DILLARD, INES CALLOWAY, TEAGUE
[beat 0] A plywood shack on a frozen lake, thick with the smell of wet wool and diesel. Five holes have been drilled in the floor, and the black water in each one barely moves.
[beat 1] HALVARD EIDE, 60s, hunched on an upturned bucket, jigs a line and hums. SUNNIVA ROE, 30s, sits opposite, a thermos between her boots. BROCK DILLARD, 40s, leans against the door with arms crossed, steam rising off his shoulders, while INES CALLOWAY, 50s, rummages in a tackle box and TEAGUE, 20s, ties a lure with numb fingers.
[beat 2] Halvard pours coffee into the cap of the thermos and hands it to Sunniva, who passes it to Brock, who sips, grimaces, and passes it on to Ines, who takes it without looking up, and for a long minute nothing in the hut moves but the lines trembling in the holes.
[beat 3] HALVARD: Sixty years on this lake. Never a morning like it. SUNNIVA: Quiet. INES: Too quiet.
[beat 4] Teague stops tying.
[beat 5] Brock shifts against the door and the latch, which has been hooked from the outside, does not lift.

### SCENE s00680 | INT. ASHWORTH HOUSE - GLASS CONSERVATORY - DAY (1887)
Characters: PRUDENCE ASHWORTH
[beat 0] Rain taps the glazed roof. Ferns crowd the brick walls, and a wrought-iron table holds a gas lamp, an inkwell, and a half-written letter.
[beat 1] PRUDENCE ASHWORTH, 30s, in a gray morning dress with ink on her second finger, sits with a pen poised. She dips the nib, hesitates, and sets it down again.
[beat 2] She picks up the letter and reads it to the empty air. PRUDENCE: My dear Edmund. The orchids you left have bloomed, the white ones, as you said they would. I did not water them as you instructed. I let the rain do it.
[beat 3] She smooths the page, gazes at a fern, and turns back to the page. PRUDENCE: Mrs. Pell asks whether you will be home for the Harvest supper. I told her I did not know. That is the truth. I know very little these days, except the names of plants.
[beat 4] A drop of water falls from a cracked pane onto the paper. She does not blot it. It spreads and blurs the word "plants."
[beat 5] PRUDENCE: Well. There it is.
[beat 6] She lifts the pen, holds it over the page for a long moment, and then, very gently, puts it down in the inkwell and leaves the letter unsigned.

### SCENE s00681 | INT. HOLLOW OAK TAVERN - NIGHT
Characters: KAELEN MOSSWELL, MOTHER YSOLDE, BRANNOCH, PIP, VEYRA
[beat 0] A tavern built inside the trunk of a dead oak the size of a cathedral. Lanterns hang from root-beams. The bar is a single slab of petrified heartwood, worn silver by centuries of elbows.
[beat 1] KAELEN MOSSWELL, 20s, a ranger with a bowstring scar across one cheek, nurses a mug at the bar. MOTHER YSOLDE, 70s, a bent innkeeper with moth-wing earrings, wipes the same cup over and over. BRANNOCH, 50s, a barrel-chested dwarf in a miner's leather, sits in the corner with an axe across his lap. PIP, 10, a stable-hand, sweeps near the door. VEYRA, 30s, hooded, a gray cloak pooled around her chair, sits alone with an untouched bowl.
[beat 2] KAELEN: Quiet tonight. MOTHER YSOLDE: It's always quiet when the root-winds turn. BRANNOCH: Quiet's what you get when the road's closed.
[beat 3] Pip stops sweeping. Veyra's spoon clinks against the bowl.
[beat 4] KAELEN: Closed since when? BRANNOCH: Since someone burned the toll-bridge. Three nights back.
[beat 5] MOTHER YSOLDE: Don't start, Brannoch. BRANNOCH: I'm only saying what everyone's thinking.
[beat 6] He lifts his eyes toward Veyra. Kaelen follows his gaze. The hood does not move.
[beat 7] KAELEN: You came in on the north road. Did you see anything? VEYRA: Smoke. KAELEN: Smoke from where? VEYRA: From the bridge.
[beat 8] PIP: She's lying. The bridge is south.
[beat 9] Brannoch's chair scrapes. His hands tighten on the axe. BRANNOCH: Speak, hooded one. Who sent you? VEYRA: No one sent me.
[beat 10] BRANNOCH: Then why is your cloak dry?
[beat 11] Everyone looks at the floor. Rain is pooling under the door, but the gray cloak is perfectly dry, and where its hem touches the boards, small pale flowers are blooming. MOTHER YSOLDE: Gods in the roots.
[beat 12] Veyra rises. The hood falls back to show eyes like green fire.
[beat 13] VEYRA: The bridge was mine. The road is mine. Everything that grows under this oak is mine.
[beat 14] Brannoch charges. The axe bites the table where she stood, and the tavern erupts in roots.

### SCENE s00682 | INT. LORNE HOUSE - LIBRARY - NIGHT
Characters: AUGUSTIN LORNE, BEATRIX, CEDRIC MOWBRAY, HESTER QUAYLE
[beat 0] A fire dying in a marble hearth. Four chairs in a half-circle. A decanter, four glasses, a ledger left open on the reading stand. AUGUSTIN LORNE, 60s, shrunken in a velvet smoking jacket, sits nearest the fire. His niece BEATRIX, 30s, stands behind his chair. CEDRIC MOWBRAY, 40s, the family solicitor, occupies a leather wingback. HESTER QUAYLE, 50s, the housekeeper, hovers at the door with her hands folded.
[beat 1] Beatrix pours for the men and does not pour for herself. AUGUSTIN: Cedric, the clause. CEDRIC: The clause is clear. BEATRIX: Clear to whom? CEDRIC: To anyone who reads. HESTER: I read it twice. AUGUSTIN: Of course you did, Hester.
[beat 2] BEATRIX: She was in the room when you signed. HESTER: I was in the hall. BEATRIX: Then you heard it through the door. HESTER: The door was open. CEDRIC: Doors are often open in this house. AUGUSTIN: Not the study door. BEATRIX: No. The study door is always locked.
[beat 3] HESTER: It was open on Thursday. CEDRIC: Thursday? HESTER: When the ledger went missing. AUGUSTIN: The ledger is here. BEATRIX: Because someone put it back. CEDRIC: Or because it was never gone.
[beat 4] HESTER: Mr. Augustin, I told you I saw it on Thursday. Pages torn. Four of them. AUGUSTIN: Four. BEATRIX: There are four of us.
[beat 5] A silence. The fire pops. CEDRIC: Surely you are not suggesting -- BEATRIX: I'm suggesting nothing. I'm counting.
[beat 6] AUGUSTIN: Hester. The pages. Where? HESTER: In the second drawer of the hall cabinet. Under the umbrellas. CEDRIC: You looked? HESTER: I clean.
[beat 7] AUGUSTIN: Beatrix, fetch them.
[beat 8] Beatrix does not move. Cedric slowly sets his glass on the table, Hester's eyes find the carpet, and Augustin lifts the poker from its stand and holds it across his knees.
[beat 9] AUGUSTIN: Whoever fetches them first.

### SCENE s00683 | EXT. SALT FLAT - DAY
Characters: NAOMI, WOMAN, ELSPETH
[beat 0] White to the horizon. Heat shimmer. A burnt-out van tilts in the distance like a toy.
[beat 1] NAOMI, 30s, sunburned, drags a jerry can by its handle. Her canteen is empty. She stops, swaying. NAOMI: Keep walking. Keep walking.
[beat 2] A figure on the horizon. Naomi shades her eyes. A WOMAN, 40s, in a ragged parka, wobbles closer. She carries a water jug. She sees Naomi and stops.
[beat 3] WOMAN: Is that water? NAOMI: Gas. WOMAN: Damn.
[beat 4] Naomi sets down the can. The woman does the same with her jug. They stare across ten feet of white.
[beat 5] NAOMI: Where'd you come from? WOMAN: East. A bus. I'm told there was a bus. NAOMI: There was. It left.
[beat 6] The woman sits in the salt. Naomi sits too. Neither speaks. The wind scrapes the flat. NAOMI: Anybody want to explain this?
[beat 7] WOMAN: What's your name? NAOMI: Naomi. WOMAN: Elspeth. My friends call me Elsie.
[beat 8] ELSPETH nudges the jug across the salt. ELSPETH: Half each. You carry the gas. I carry the rest.
[beat 9] Naomi takes the jug. She drinks, passes it back, and nods.
[beat 10] NAOMI: She'd have hated this, my mother. Heat. ELSPETH: Mine too.
[beat 11] They stand, shoulder to shoulder, and start toward the van.

### SCENE s00684 | INT. ASHGROVE MANOR - GREEN DRAWING ROOM - EVENING
Characters: BARNABY CREWE, LADY PHILOMENA ASHGROVE, ANSELM ROTH
[beat 0] Rain on tall windows. A grandfather clock. A tea service on a low table. A bust of a long-dead general on the mantel.
[beat 1] BARNABY CREWE, 40s, a private inquirer in a rumpled coat, stands at the window with his back to the room. LADY PHILOMENA ASHGROVE, 70s, upright in a wing chair, regards him over the rim of her cup. DR. ANSELM ROTH, 50s, the family physician, sits on the settee with a black bag between his feet.
[beat 2] She sets down her cup. He turns. LADY PHILOMENA: You've been staring at that glass for ten minutes, Mr. Crewe. CREWE: It's an interesting pane. LADY PHILOMENA: It is a pane.
[beat 3] He moves to the mantel and runs his thumb over the bust, then wipes the dust on his handkerchief. She watches with disapproval. Roth shifts and she glances at him.
[beat 4] ROTH: Philomena, if Mr. Crewe has questions, let him ask. CREWE: Thank you, Doctor. LADY PHILOMENA: Ask, then.
[beat 5] CREWE: Who last saw Lord Ashgrove alive? LADY PHILOMENA: I did. ROTH: I did. CREWE: Both of you?
[beat 6] They look at each other. He leans forward, she lifts her chin. LADY PHILOMENA: At dinner. ROTH: At the stairs, afterward. CREWE: Which was first? LADY PHILOMENA: Dinner. ROTH: He was already tired.
[beat 7] She frowns at him. He studies the bag between his feet. Crewe takes the poker from its stand, turns it over, and replaces it exactly where it was.
[beat 8] CREWE: Doctor, what's in the bag? ROTH: Medical instruments. CREWE: And the brown bottle?
[beat 9] Roth's hand drops to the bag. She sets her cup down so softly it does not click.
[beat 10] The clock begins to strike the hour, and in the third chime Crewe walks to the settee, kneels, and lifts the clasp.
[beat 11] CREWE: Foxglove. Prepared. LADY PHILOMENA: It was for his heart. ROTH: It was for his heart.
[beat 12] They stop. The clock finishes. Crewe stands with the bottle in his hand and looks from one to the other.
[beat 13] CREWE: Strange. You rehearsed the same sentence.

### SCENE s00685 | INT. TOWER OF THE LAST STAIR - NIGHT
Characters: ALDRIC, THESSALY, GORM, MIRREN
[beat 0] A circular stone chamber at the top of a thousand steps. A cracked crystal on a pedestal pulses faintly. Rain lashes the narrow windows.
[beat 1] ALDRIC, 40s, a battered knight in dented plate, leans on his sword. THESSALY, 30s, a sorceress in midnight blue, traces runes in the dust with a fingertip. GORM, 50s, a heavy-set dwarf with a braided beard, sits on the top stair, catching his breath. MIRREN, 18, a thief in a patched green cloak, circles the pedestal and eyes the crystal.
[beat 2] ALDRIC: Thessaly, how long before the seal gives? THESSALY: Before dawn, if I'm right. Before midnight, if I'm wrong.
[beat 3] GORM: What do you think the odds are, Mirren? MIRREN: Don't ask me. I'm the one who stole the map. ALDRIC: We've all stolen something, little one.
[beat 4] THESSALY: Mirren, step back from the crystal. MIRREN: I'm only looking. THESSALY: Looking is how it begins. GORM: Thessaly's right. My grandfather looked at a gem like that once. Went blind in one eye. Then the other.
[beat 5] MIRREN: Gorm, your grandfather went blind from drinking. GORM: That too.
[beat 6] ALDRIC: Enough. We climbed a thousand stairs for this. We say what we came to say. THESSALY: What did we come to say, Aldric? ALDRIC: That we will not let the King's witch-hunters have it.
[beat 7] GORM: We'd have been better off smashing it and going home.
[beat 8] THESSALY: Smash it and the city drowns. MIRREN: You never told me that. THESSALY: You never asked, Mirren.
[beat 9] ALDRIC: I did not tell either of you because I did not want you to leave. GORM: Then you're a fool, knight. Or a liar. ALDRIC: Perhaps both.
[beat 10] MIRREN: Then why are we fighting over it? THESSALY: We're not. GORM: Speak for yourself.
[beat 11] ALDRIC: Gorm. Put down your axe. GORM: I didn't pick it up. MIRREN: You did. It's in your hand.
[beat 12] Gorm looks down. The axe is there. His hand is trembling. The crystal pulses brighter.
[beat 13] THESSALY: It's speaking to you. To all of us. Close your ears. GORM: I hear it. It says Aldric lied. ALDRIC: Gorm--
[beat 14] The crystal flares. The windows blow in on a wave of white light.

### SCENE s00686 | INT. NORTHBEAM SYNERGIES - OPEN OFFICE - MORNING
Characters: BRENDA KOWALCZYK, TREVOR NAKAMURA, PRIYA VENKATARAMAN, GUS TILLMAN
[beat 0] Rows of identical desks. A motivational banner reads "TOGETHER WE ALIGN." A broken printer wheezes in the corner.
[beat 1] BRENDA KOWALCZYK, 50s, regional VP in a power blazer, stands on a chair with a clicker. TREVOR NAKAMURA, 30s, middle manager, holds a coffee like a shield. PRIYA VENKATARAMAN, 30s, a senior analyst with a headset around her neck, scrolls through a spreadsheet. GUS TILLMAN, 20s, an intern in a too-big tie, takes notes.
[beat 2] BRENDA: Team! Huddle up! Nobody huddles. Trevor drifts closer.
[beat 3] BRENDA: Today we pivot. From synergy to hypersynergy.
[beat 4] TREVOR: Pivot where? We don't have a chair. BRENDA: Trevor, I heard that. TREVOR: I said "we don't have a chair." For the new hire. BRENDA: We hire the person, not the chair.
[beat 5] PRIYA: Brenda, our Q3 numbers are down forty percent. BRENDA: Which is why we pivot. PRIYA: It would be easier to fix the number. BRENDA: We don't fix numbers, Priya. We reframe them.
[beat 6] GUS: Can I ask a question? BRENDA: Gus. Welcome to the conversation. GUS: What does hypersynergy mean? BRENDA: It means synergy, but faster.
[beat 7] TREVOR: It means layoffs. BRENDA: I heard that too. TREVOR: I know. I wanted you to.
[beat 8] Brenda climbs down from the chair, slowly, crosses to Trevor, and lowers her voice to a whisper that carries across the entire floor. BRENDA: You're on a performance improvement plan. TREVOR: For what? BRENDA: For saying "layoffs" out loud.
[beat 9] PRIYA: Seven words. A new record. GUS: Does the plan come with a chair?
[beat 10] Priya snorts. Trevor stares at Brenda. Brenda stares back.
[beat 11] BRENDA: Everyone back to your desks. We're going to have a very productive day. Nobody moves. The printer coughs and dies.
[beat 12] TREVOR: I'm not on a plan. BRENDA: You are now.
[beat 13] TREVOR: Then I quit. PRIYA: Seconded. GUS: Does that include interns?
[beat 14] Brenda looks at the banner, then at the three of them, then at the dead printer. Her smile has not moved at all. BRENDA: Everybody take fifteen. In fifteen minutes, we circle back to this.
[beat 15] She steps back up onto the chair.

### SCENE s00687 | INT. CORBIN FARMHOUSE - CELLAR - NIGHT
Characters: CORBIN, ALMA, JONAH PIKE, SADIE
[beat 0] Dirt floor. Jars of preserves. One bare bulb on a cord, swinging.
[beat 1] CORBIN, 50s, in a sweat-stained flannel, holds a lantern high. ALMA, 40s, his wife, grips the cellar ladder. JONAH PIKE, 20s, the hired hand, backs against a shelf. SADIE, 9, hugs a doll and stares at the far wall.
[beat 2] Something scratches. Behind the wall.
[beat 3] Corbin lowers the lantern. CORBIN: Rats. ALMA: Rats don't knock.
[beat 4] Three slow knocks. From the other side.
[beat 5] Jonah slides along the shelf. A jar tips. Smashes. JONAH: Sir. We should go up. CORBIN: Quiet.
[beat 6] Sadie walks to the wall. Presses her ear to the dirt. ALMA: Sadie. Come here. Sadie doesn't turn.
[beat 7] SADIE: It knows my name.
[beat 8] Alma lets go of the ladder. Corbin swings the lantern toward the sound. A thin crack runs up the plaster.
[beat 9] The bulb goes out.
[beat 10] Darkness. Breathing. Four of them.
[beat 11] Something wet drags along the floor.

### SCENE s00688 | INT. BAYVIEW DINER - BOOTH - NIGHT
Characters: YUSUF, BEA, LENNY
[beat 0] Empty except for one booth. Rain on the window. Fry oil smell.
[beat 1] YUSUF, 30s, sits stiffly with his hands in his lap. BEA, 30s, slides in opposite. LENNY, 60s, their father, shuffles over with a coffee pot.
[beat 2] BEA: Yusuf. You came. YUSUF: You said Dad was sick.
[beat 3] LENNY: Not sick. Old. BEA: Lenny, sit down. LENNY: It's my diner.
[beat 4] YUSUF: Then why is it for sale?
[beat 5] Lenny sets the pot down. It rattles. LENNY: Because your sister doesn't want it.
[beat 6] BEA: Because you were never going to give it to him!
[beat 7] Yusuf stands. Bea grabs his wrist. BEA: Yusuf. Please.
[beat 8] He sits.
[beat 9] Lenny pours coffee, three cups, his hand steady. LENNY: Eat something, both of you.

### SCENE s00689 | INT. MUSEUM OF CLOCKS - VAULT CORRIDOR - NIGHT
Characters: VESPER, ANTON KROL, ^ANTON KROL
[beat 0] Marble, silence, a thousand brass hearts ticking behind glass. A single laser, thin as a pencil line, hums across the corridor at ankle height.
[beat 1] VESPER, 30s, in black from throat to boot, crouches before a keypad with a gloved thumb on her lip. ANTON KROL, 50s, her partner, broad and patient, kneels beside her holding a stethoscope against the vault door as if listening to a sleeping animal.
[beat 2] VESPER: Seven. Four. One. ANTON KROL: Seven. Four. One.
[beat 3] ^ANTON KROL: Eight. VESPER: Eight? ANTON KROL: The clock in the second room. It runs eight minutes fast.
[beat 4] The keypad flickers green. Then red.
[beat 5] The ticking in the walls goes still, all at once. VESPER: Anton. Every clock just stopped.
[beat 6] Anton lifts the stethoscope from the door and holds out his open hand, palm flat, as if testing for rain. ANTON KROL: Then somebody else is in here.
[beat 7] Vesper slides her pistol out.
[beat 8] The laser along the floor blinks off.

### SCENE s00690 | INT. MARLOW FARMHOUSE - KITCHEN - EARLY MORNING
Characters: CONSTANCE, HATTIE, WALTER
[beat 0] A cold stove. A table with three mismatched chairs. A single teacup, unwashed, on the sill.
[beat 1] CONSTANCE, 40s, stands at the sink with her coat still buttoned. She does not turn on the tap. Her sister HATTIE, 30s, enters from the hall in a nightgown and bare feet, hugging her elbows. At the table, WALTER, 70s, their father, sits upright in his Sunday collar, a folded newspaper in front of him that he has not opened.
[beat 2] She watches the back of her sister's head. She says nothing.
[beat 3] Hattie crosses to the stove, strikes a match, and stands holding it until the flame reaches her fingers. CONSTANCE: You'll burn yourself. HATTIE: I know.
[beat 4] She shakes it out. The smoke curls toward the ceiling.
[beat 5] WALTER: Sit down, both of you. Neither sits.
[beat 6] Constance finally turns on the tap, and the water runs over a plate she isn't washing.
[beat 7] HATTIE: She came back last night. CONSTANCE: Who did? HATTIE: You know who.
[beat 8] Walter unfolds the paper, folds it again, smoother this time. He sets it square on the table.
[beat 9] WALTER: Your mother is in the churchyard. We buried her Tuesday.
[beat 10] She does not look at him. She keeps her eyes on her sister's hands, shaking now, the matchbox rattling in them. Hattie slides it across the counter, away from herself, toward the sink.
[beat 11] CONSTANCE: Take that outside. HATTIE: Why? CONSTANCE: Because Father is looking at it.
[beat 12] Walter is. He is looking at the matchbox as if it were an animal.
[beat 13] Slowly he reaches out and lays his big, spotted hand over it. Neither daughter moves.
[beat 14] Outside, a rooster crows, late.

### SCENE s00691 | EXT. THE WHISPER MARSH - DUSK
Characters: SORREL, TAMSIN, ORRIN, BRIGID
[beat 0] Black water, white reeds, and a mist that clings to the knees. Fireflies the size of thumbs drift between rotted posts. A narrow plank path winds out of sight.
[beat 1] SORREL, 30s, a marsh-guide in oilcloth and thigh boots, leads with a long pole, testing each plank. TAMSIN, 20s, an apprentice healer with a satchel clutched across her chest, follows two steps behind. ORRIN, 50s, a one-eared merchant in a fur-lined cloak, labors in the middle with a heavy pack. BRIGID, 30s, a sell-sword with a cracked breastplate, brings up the rear and watches the reeds.
[beat 2] SORREL: Stay on the planks. If you slip, don't thrash. TAMSIN: What do I do? SORREL: Hold still and call my name. ORRIN: And if you can't hold still? SORREL: Then call louder.
[beat 3] They walk.
[beat 4] A heron lifts out of the reeds, and Brigid's hand goes to her hilt. BRIGID: We're being followed. ORRIN: By what? BRIGID: I don't know. It's quiet. TAMSIN: Quiet is good. BRIGID: Quiet is never good.
[beat 5] Sorrel stops. Tamsin bumps into her. TAMSIN: Sorry. Is something wrong?
[beat 6] SORREL: The plank ahead is missing. ORRIN: Missing how? SORREL: Gone. Someone took it. BRIGID: Or something did.
[beat 7] They peer ahead. The path ends in four feet of dark water, and past it, the plank resumes.
[beat 8] ORRIN: We can jump that. SORREL: Not with that pack. ORRIN: Then I'll leave the pack.
[beat 9] BRIGID: You'll leave nothing. The pack is why we're here.
[beat 10] TAMSIN: What's in the pack? ORRIN: Medicine. For the village at the far shore. TAMSIN: You said it was cloth. ORRIN: I said a lot of things. BRIGID: Orrin.
[beat 11] Orrin sighs and unbuckles the pack. Inside, wrapped in oilcloth, sits a small iron box with a hand-drawn seal.
[beat 12] SORREL: That's not medicine. TAMSIN: It's humming. ORRIN: It always hums near water.
[beat 13] BRIGID: Drop it in the marsh. ORRIN: No. BRIGID: It's what took the plank.
[beat 14] Orrin closes the pack.
[beat 15] In the reeds, something large and slow begins to move toward them, parting the white stalks without a sound.

### SCENE s00692 | INT. CARGO WAREHOUSE - LOADING BAY 6 - NIGHT
Characters: AGENT FOLASADE ADEBAYO, REUBEN MARSH, PD, FOLA, STRANGER, IMELDA DRAY, NIKOLAI
[beat 0] Concrete. Pallets. Sodium lights buzzing. A forklift idles.
[beat 1] AGENT FOLASADE ADEBAYO, 30s, FBI jacket under a rain slicker, moves between shipping crates with her weapon low. Behind her, REUBEN MARSH, 50s, local PD, wheezes, flashlight in hand.
[beat 2] REUBEN: Fola, wait. FOLA: Keep your voice down. REUBEN: Nobody's here.
[beat 3] FOLA: Somebody dropped this. She holds up a ring of keys. Reuben shines the light on them.
[beat 4] A STRANGER, 40s, in a dark wool coat, stands motionless at the end of the aisle. Both swing their guns toward him. STRANGER: Easy. Easy.
[beat 5] FOLA: Hands where I can see them. STRANGER: They're empty. REUBEN: Name. STRANGER: You first.
[beat 6] Fola takes a step forward. The Stranger smiles.
[beat 7] STRANGER: Agent Adebayo. You look tired. FOLA: How do you know my name? STRANGER: I've read your reports. REUBEN: What reports? FOLA: Reuben, don't.
[beat 8] STRANGER: Detective Marsh. You should ask her about Lagos. Reuben's light wavers on Fola's face.
[beat 9] REUBEN: What's in Lagos? FOLA: Nothing. He's playing us. STRANGER: Or I'm the only honest one here.
[beat 10] IMELDA DRAY, 50s, steps out of the shadow behind Reuben, a silenced pistol pressed to the back of his neck. She is in a janitor's smock, calm as a clerk. IMELDA: Drop it, Detective.
[beat 11] Reuben drops the flashlight. It rolls.
[beat 12] FOLA: Imelda. Walk away. IMELDA: I can't. Not until I get the ledger. FOLA: I don't have it.
[beat 13] IMELDA: No. He does.
[beat 14] All three look at the Stranger. He taps his coat. STRANGER: My name is Nikolai Orlov. I'd like to hand it over, if you'll all stop pointing things at me.
[beat 15] NIKOLAI: The ledger names every one of you. REUBEN: Fola, what does he mean every one of us?
[beat 16] FOLA: It means somebody in this room is on the take. IMELDA: Or two. NIKOLAI: Or three.
[beat 17] Silence. Rain on the roof.
[beat 18] REUBEN: I didn't do anything. NIKOLAI: Not yet.
[beat 19] Imelda cocks the pistol.

### SCENE s00693 | INT. CASTLE HOTEL - TOWER SUITE - NIGHT
Characters: OTTILIE PRAHL, MAN, CALDER
[beat 0] A round room papered in faded roses. A four-poster bed, a dark window, a candle guttering on the sill.
[beat 1] OTTILIE PRAHL, 30s, in a travel-stained dress, sits on the edge of the bed with her hands pressed between her knees. A MAN, 40s, in a doorman's greatcoat, stands in the doorway, his face half in shadow.
[beat 2] MAN: Your room, madam. OTTILIE: It's the wrong room. MAN: It is the room you were given.
[beat 3] She says nothing. She looks at the window, then at his hands, which are clean.
[beat 4] OTTILIE: You carried my bag up four flights and you're not out of breath. MAN: I am used to stairs.
[beat 5] OTTILIE: What's your name? He considers. MAN: Calder.
[beat 6] OTTILIE: Calder. And is there someone else in the hotel tonight? CALDER: Only the guest in the east wing. OTTILIE: Who is that?
[beat 7] Calder steps inside and closes the door. The candle leans.
[beat 8] CALDER: Someone who has been asking for you since Tuesday.
[beat 9] Ottilie rises. She does not rush. She crosses to the window and lifts the latch.
[beat 10] OTTILIE: Tell him I've been here all along. CALDER: He knows.
[beat 11] Behind him, in the hall, a floorboard creaks under a heavy tread.

### SCENE s00694 | INT. FENN & SON UPHOLSTERY - REAR LOADING DOCK - NIGHT
Characters: LAZLO FENN, RAY OBUYA
[beat 0] Bolts of fabric stacked to the rafters. A single hanging bulb. The roll-up door is half open to the rain.
[beat 1] LAZLO FENN, 50s, a heavy-set man in suspenders, counts bills at a workbench. RAY OBUYA, 30s, in a leather jacket, leans against a stack of velvet, thumbing a lighter on and off.
[beat 2] RAY: It's short. LAZLO: It isn't. RAY: Count it again.
[beat 3] Lazlo does not look up. He finishes the stack, squares the edges against the bench, and starts a second.
[beat 4] LAZLO: Your boss has a long memory. So do I. RAY: My boss said four. That's three-eight. LAZLO: It's four.
[beat 5] Ray pushes off the velvet and takes one step. He is close enough now to see the sweat on the other man's collar.
[beat 6] RAY: Then why are you counting like a man who got robbed? LAZLO: Because I'm careful. RAY: You've been careful for twenty years and I never once saw you count twice.
[beat 7] Lazlo stops. He lays both hands flat on the money. Behind him, a roll of fabric slumps on its stand.
[beat 8] RAY: Who's behind the roll? LAZLO: Nobody.
[beat 9] RAY: He's smaller than you. He's breathing too hard. LAZLO: Ray. Let it go.
[beat 10] Ray draws a revolver from the small of his back and lowers it, slowly, toward the floor. RAY: Come out of there and I won't ask where the other two hundred went.
[beat 11] The roll shifts. A boy, thin, no more than sixteen, steps out into the light with a fistful of cash held against his chest.

### SCENE s00695 | INT. FONTAINE & BOATENG - BREAK ROOM - MORNING
Characters: MARGUERITE FONTAINE, KWAME BOATENG, SLOANE RIDGEWAY, PHIL LINDQVIST, INTERN, DEWEY
[beat 0] A vending machine hums. A fruit bowl holds three plastic lemons. A whiteboard says "CULTURE IS KING" under a doodle of a crown with a frown.
[beat 1] MARGUERITE FONTAINE, 50s, the managing partner, in a cream suit, pours tea from a silver pot nobody else is allowed to touch. KWAME BOATENG, 40s, the other partner, in shirtsleeves, leans on the fridge. SLOANE RIDGEWAY, 30s, head of People & Culture, in athleisure, holds an iPad up like a shield. PHIL LINDQVIST, 50s, the accountant, sorts sweetener packets by color. In the doorway, an INTERN, 20s, holds a tray of pastries and wears a lanyard that says "INTERN."
[beat 2] MARGUERITE: Lovely morning. KWAME: Lovely. SLOANE: Lovely! We're so aligned. PHIL: Pink, yellow, blue.
[beat 3] INTERN: I brought croissants. MARGUERITE: Of course you did. You're our little sunbeam.
[beat 4] The Intern sets down the tray. Everyone takes one. Everyone chews. A long, pleasant silence.
[beat 5] KWAME: Marguerite and I wanted to thank you all for your hard work. SLOANE: Amazing work. PHIL: Sweetener's low.
[beat 6] MARGUERITE: Phil, your numbers this quarter are impeccable. PHIL: Are they? MARGUERITE: Impeccable. Isn't that the word, Kwame? KWAME: It is.
[beat 7] The Intern smiles wider. Sloane taps her iPad.
[beat 8] SLOANE: So, as part of our culture refresh, we'll be transitioning a few roles. PHIL: Which roles? KWAME: Phil. PHIL: Which?
[beat 9] MARGUERITE: Yours, dear.
[beat 10] Phil sets down the packets. The Intern's smile slips.
[beat 11] INTERN: I'm sorry, did you say transition? SLOANE: Offboarding, practically speaking. INTERN: Mine too?
[beat 12] MARGUERITE: Not at all. You'll be taking Phil's desk.
[beat 13] INTERN: I'm sorry. What's my name? KWAME: Pardon? INTERN: You've called me intern for six months. I told you my name on day one. MARGUERITE: Did you? I'm sure it was lovely.
[beat 14] INTERN: It's Dewey. DEWEY: Dewey Park. I'm the one who built your billing system.
[beat 15] Silence. The fridge clicks. Phil, still holding a pink packet, looks at Dewey for the first time.
[beat 16] PHIL: He did. KWAME: We know.
[beat 17] DEWEY: Then you know the system doesn't run without me. MARGUERITE: We have a plan for that. DEWEY: Do you.
[beat 18] He takes off the lanyard. Sets it on the tray.
[beat 19] DEWEY: Then enjoy the croissants.

### SCENE s00696 | EXT. ICE CAVE ENTRANCE - GLACIER - DAWN
Characters: ZEKE, TALLMAN, ANNELIESE VOSS-HARTE, RAFFERTY, MAHINA, SURVIVOR, CORWIN
[beat 0] Blue-white. Wind. Cliffs of ice stacked like cathedral organ pipes.
[beat 1] Five figures in orange survival suits crawl from a snow tunnel. Frost in their beards. Smoke from a flare rising behind them.
[beat 2] EZEKIEL "ZEKE" TALLMAN, 40s, leader, hauls a rope. ANNELIESE VOSS-HARTE, 30s, glaciologist, clutches a sample case. RAFFERTY, 50s, a gruff guide, checks his compass. MAHINA, 20s, the youngest, coughs into her glove. A SURVIVOR, 40s, who joined them on the ice, trails behind in a torn red anorak.
[beat 3] ZEKE: Rest. Ten minutes. ANNELIESE: We can't. Whiteout's coming. RAFFERTY: She's right. ZEKE: Ten.
[beat 4] Mahina sits. Anneliese opens the case. ANNELIESE: Cores are intact. MAHINA: Good.
[beat 5] The Survivor limps up. Stops. Looks at their faces.
[beat 6] SURVIVOR: You have food? ZEKE: A little. SURVIVOR: Water? RAFFERTY: Melt snow. SURVIVOR: Lighter?
[beat 7] Rafferty tosses one. The man catches it, thanks him with a nod, and sits apart.
[beat 8] ZEKE: What's your name? SURVIVOR: Corwin. ZEKE: How'd you end up out here, Corwin?
[beat 9] CORWIN: Plane. Two days ago. Engines quit. MAHINA: There were others? CORWIN: Yes. ANNELIESE: Where?
[beat 10] Corwin gestures north. CORWIN: Gone.
[beat 11] RAFFERTY: No wreck on the radar. I checked.
[beat 12] Zeke studies Corwin. The man is feeding twigs to a tiny fire, humming.
[beat 13] ZEKE: Show me your hands. CORWIN: Why? ZEKE: Humor me.
[beat 14] Corwin opens his gloves. His fingers are clean, unfrostbitten, pink as a child's.
[beat 15] MAHINA: He's been out here two days?
[beat 16] Corwin's humming stops. He closes his hands, rises smoothly, and the limp is gone. CORWIN: Not two days.

### SCENE s00697 | INT. VERONA GARDEN CENTER - GREENHOUSE - DAY
Characters: LUCIA ROSSI, MATTEO BELLINI, GWEN PRITCHARD, DEV MALHOTRA, AUNT FABIOLA, STAN
[beat 0] Humid. Rows of potted ferns and trays of seedlings. A hand-painted sign: "WEDDING SEASON SALE!" Dust motes in the sun through fogged glass.
[beat 1] LUCIA ROSSI, 30s, in a green apron, lifts a tray of orchids. MATTEO BELLINI, 30s, in a suit, stands frozen with a bouquet of white roses. GWEN PRITCHARD, 30s, Matteo's fiancee, wears a sundress and sunglasses on her head. DEV MALHOTRA, 30s, Lucia's ex, leans against a potting bench. AUNT FABIOLA, 70s, in a floral housecoat, supervises from a folding chair. STAN, 50s, the garden center owner, holds a hose and a clipboard.
[beat 2] MATTEO: Lucia. LUCIA: Matteo.
[beat 3] GWEN: You two know each other? DEV: Know is a strong word.
[beat 4] AUNT FABIOLA: They were engaged. Eight years ago. She threw a plate at him. LUCIA: It was a saucer.
[beat 5] STAN: Folks, I've got a delivery of mulch at two. Can we speed this up?
[beat 6] GWEN: Matteo, why didn't you tell me? MATTEO: I didn't think it mattered. DEV: It matters.
[beat 7] LUCIA: Dev, stay out of it. DEV: I'm standing in it.
[beat 8] AUNT FABIOLA: Stan, hose them. STAN: I'm not hosing customers.
[beat 9] GWEN: I want the white roses. Just the roses. LUCIA: They're not for sale. GWEN: I'm the customer. LUCIA: They're mine. I grew them.
[beat 10] MATTEO: Lucia, the wedding is Saturday. LUCIA: Then you'd better pick another florist.
[beat 11] DEV: Or another bride.
[beat 12] Gwen takes off her sunglasses, slowly. GWEN: Say that again. DEV: I said --
[beat 13] AUNT FABIOLA: Enough! This is a greenhouse, not a telenovela. STAN: Actually, ma'am, the ficus are getting stressed.
[beat 14] Lucia sets down the orchids. Matteo steps toward her, and the roses fall from his hands.
[beat 15] MATTEO: I never stopped. GWEN: Matteo! LUCIA: Don't. DEV: Finally.
[beat 16] Aunt Fabiola reaches into her housecoat, draws out a saucer, and holds it up like a trophy.

### SCENE s00698 | EXT. BRIDGE OF MOSS - TWILIGHT
Characters: EIRWEN, BRAM, OLD NETTLE
[beat 0] A stone bridge arches over a stream that runs upward, against gravity, into a pink sky. Lanterns drift like soap bubbles.
[beat 1] EIRWEN, 30s, a ferrywoman with silver-streaked braids, sits on the parapet mending a net. BRAM, 20s, in a tunic too thin for the evening, stands at the near end with a satchel. OLD NETTLE, 80s, a toad-faced hermit, squats on the far end and eats a pear.
[beat 2] Bram steps onto the bridge. The stones hum under his boot.
[beat 3] EIRWEN: You are early. BRAM: I walked all night. EIRWEN: You are still early.
[beat 4] He reaches the middle. Nettle chews.
[beat 5] OLD NETTLE: Toll.
[beat 6] Bram opens the satchel. Takes out a small bell. Holds it out. Nettle looks at it without touching it.
[beat 7] OLD NETTLE: That's not what she took last time. EIRWEN: Last time was not him.
[beat 8] Bram lowers the bell. The stream runs up through the air behind them.
[beat 9] BRAM: Is it enough?
[beat 10] Eirwen finishes a knot. Bites the thread.
[beat 11] EIRWEN: Ask again at dawn.

### SCENE s00699 | EXT. SHELLED FARMHOUSE - DAWN
Characters: BRANDT, ACHTERBERG, YOUNG SOLDIER, KOWALSKI
[beat 0] Smoke. Rubble. A dead cow. Ahead, a treeline hums with distant engines.
[beat 1] SGT. BRANDT, 40s, crouches behind a half-wall, rifle across his knees. LT. ACHTERBERG, 30s, studies a map, mud on his glasses. A YOUNG SOLDIER, 19, trembles beside them, helmet too big.
[beat 2] BRANDT: Heads down. Listen.
[beat 3] The engines swell. The Young Soldier lifts his head. BRANDT: Down!
[beat 4] Achterberg folds the map.
[beat 5] ACHTERBERG: Armor. Two, maybe three. BRANDT: Our guns? ACHTERBERG: Dead.
[beat 6] YOUNG SOLDIER: Mama. Mama. Mama.
[beat 7] BRANDT: What's your name, son? YOUNG SOLDIER: Kowalski.
[beat 8] BRANDT: Kowalski. Look at me. On my word, you run for the ditch. You don't stop. KOWALSKI: Sergeant, I can't -- BRANDT: You can.
[beat 9] A shell lands close. Dirt rains on all three of them.
[beat 10] ACHTERBERG: Now? BRANDT: Now!

### SCENE s00700 | INT. MOREAU CONSERVATORY OF GLASS - OBSERVATION GALLERY - NIGHT
Characters: CALISTA MOREAU, BART, QUINCE, NAVEEN RAO, LUDMILA, FERRIS, ZHOU MEI
[beat 0] A great glass dome shelters a jungle of tropical plants. Above, rain on the panes. Below, a long dining table laid with candles, crystal, and silver, at which six guests have gathered for a gala dinner.
[beat 1] CALISTA MOREAU, 50s, the hostess, in a ruby gown, presides at the head. BARTHOLOMEW "BART" QUINCE, 60s, the collector, red-faced and jovial, sits at her right. NAVEEN RAO, 40s, the insurance assessor, taps a pen against his wine glass. LUDMILA, 30s, a violinist, waits in her chair with the instrument in her lap. FERRIS, 40s, the butler, stands behind with a silver tray. ZHOU MEI, 30s, a restorer, studies the centerpiece, a small bronze sculpture on a pedestal of black marble.
[beat 2] CALISTA: Ladies and gentlemen. Dinner. BART: At last.
[beat 3] NAVEEN: Before we eat, Mrs. Moreau, I'd like to confirm the sculpture's appraisal. CALISTA: Four million. NAVEEN: Four and a half, I believe, by the last estimate. CALISTA: You are very precise. NAVEEN: It is my profession.
[beat 4] ZHOU MEI: It's very beautiful.
[beat 5] BART: It is a fraud. LUDMILA: Excuse me? BART: The original is in a private vault in Zurich. I bought it myself. This is the copy.
[beat 6] CALISTA: You are wrong, Bartholomew. BART: I am never wrong about bronzes.
[beat 7] FERRIS: Shall I pour, madam? CALISTA: Please. FERRIS: Very good.
[beat 8] NAVEEN: If it is a copy, the insurance is void. ZHOU MEI: It is not a copy. NAVEEN: How would you know?
[beat 9] ZHOU MEI: I restored it. I know every scratch. BART: Then you are in on it. ZHOU MEI: I am not in on anything.
[beat 10] LUDMILA: Someone play me a waltz. This is unbearable.
[beat 11] CALISTA: Ludmila, hush. Zhou Mei, if you restored it, what did you find on the base? ZHOU MEI: A maker's mark. Three letters. CALISTA: And what were they? ZHOU MEI: C. M. R.
[beat 12] CALISTA: Calista Moreau, Restorer. My own mark. BART: You made it. Yourself. CALISTA: Thirty years ago. In this conservatory.
[beat 13] NAVEEN: Mrs. Moreau, do you understand what you're saying? CALISTA: Perfectly. The Zurich bronze is the forgery, Bartholomew.
[beat 14] Bart stands. His chair crashes behind him.
[beat 15] BART: You sold me a fake. CALISTA: Forty years ago. For a very good price.
[beat 16] FERRIS: Shall I call the police, madam? CALISTA: Not yet, Ferris. Pour the wine.

### SCENE s00701 | INT. WESTSIDE MINI-GOLF - WINDMILL HOLE - SUNSET
Characters: JAMAL, SKYE, MARCUS, DOLORES, PIM, ^MARCUS
[beat 0] Fake turf, a creaking windmill, a sign: "HOLE 9 - PAR 3." Plastic gnomes line the rail.
[beat 1] JAMAL, 16, in a faded band tee, leans on his putter. SKYE, 16, purple streaks in her hair, chews gum. MARCUS, 17, stands too close to her. DOLORES, 60s, the attendant in a visor, perches on a stool with a clipboard. PIM, 12, Skye's little brother, crouches to peer into the windmill.
[beat 2] DOLORES: Last group. Hole nine closes in five.
[beat 3] JAMAL: Skye, you're up. SKYE: I know. ^MARCUS: I know.
[beat 4] They glance at each other. Marcus looks away first.
[beat 5] Skye lines up the putt.
[beat 6] PIM: Don't hit it too hard! The blade will smack it back! SKYE: Pim, back off. He takes two steps back.
[beat 7] She putts. The ball rolls, enters the windmill, and clatters out the wrong side.
[beat 8] Marcus laughs. Skye glares. Jamal hands her another ball without a word.
[beat 9] DOLORES: That's a six.

### SCENE s00702 | INT. THRONE ROOM OF OSRIC - DAY
Characters: KING OSRIC, ^LADY VANETH, PIBBLE
[beat 0] A hall of cracked marble and tattered banners. Dust in the shafts of light.
[beat 1] KING OSRIC, 60s, slumped on a tarnished throne, tugs his gray beard. LADY VANETH, 40s, in a mourning gown, stands rigid at the foot of the dais. PIBBLE, the court fool, 30s, juggles three wooden spoons on the steps.
[beat 2] KING OSRIC: Vaneth. Another harvest report? LADY VANETH: The fields lie fallow, Majesty.
[beat 3] PIBBLE: The fields lie fallow, Majesty. ^LADY VANETH: The fields lie fallow, Majesty.
[beat 4] Both stop. Pibble catches a spoon and bows. Lady Vaneth does not.
[beat 5] KING OSRIC: You rehearse together, I see. PIBBLE: We have a duet, sire. LADY VANETH: We have no such thing.
[beat 6] KING OSRIC: Pibble, play me a song.
[beat 7] Pibble tucks the spoons under his arm and hums. The King nods slowly.

### SCENE s00703 | INT. TRENCH DUGOUT - NIGHT
Characters: CAPTAIN OSTRANDER, LT. PRUITT
[beat 0] Timber props, a guttering candle, a field radio crackling on an ammo crate. Shells thump overhead and dust sifts down.
[beat 1] CAPTAIN OSTRANDER, 40s, sits against the wall with his helmet in his lap. He reaches for the handset, lifts it, and puts it down. He lifts it again.
[beat 2] OSTRANDER: Battalion, this is Fox Two. Do you read? LT. PRUITT: Fox Two, Battalion. We read you. Say your status.
[beat 3] He closes his eyes. When he opens them he is steadier.
[beat 4] OSTRANDER: We are holding. Half the company is gone. He wants us to fall back. PRUITT: Negative, Fox Two. Hold position. Reinforcements at oh-four-hundred.
[beat 5] Ostrander laughs, short and dry. He wipes his face with a gloved hand.
[beat 6] A shell lands closer. The candle gutters out.
[beat 7] OSTRANDER: They'll be late. PRUITT: Say again?
[beat 8] He sets the handset in its cradle, and in the dark, listens.

### SCENE s00704 | EXT. DEAD MULE CREEK - HOMESTEAD PORCH - DAWN
Characters: SHERIFF AMOS TULL, JOSEPHINE CRANE
[beat 0] A sagging cabin of sun-bleached cedar. A rusted washtub. A windmill ticks in the thin wind. The prairie runs flat to the horizon, gold and empty.
[beat 1] SHERIFF AMOS TULL, 60s, gray mustache, dusty duster, sits on the top step with his hat in his hands. JOSEPHINE CRANE, 40s, sunburned, in a man's shirt and canvas trousers, stands at the screen door with a shotgun cradled like a baby.
[beat 2] AMOS: Morning, Josephine. JOSEPHINE: Sheriff.
[beat 3] AMOS: Coffee on? JOSEPHINE: Not for you. AMOS: Fair enough.
[beat 4] JOSEPHINE: You ride all night? AMOS: Most of it. JOSEPHINE: For what?
[beat 5] AMOS: For your husband. JOSEPHINE: He's not here.
[beat 6] AMOS: I know. I found his horse at the creek. JOSEPHINE: That mare throws riders. AMOS: She does. Wasn't thrown, though. Wasn't anything. Just standing there, saddle empty.
[beat 7] JOSEPHINE: Then he walked off. AMOS: Without his boots? JOSEPHINE: He doesn't like boots.
[beat 8] AMOS: Josephine. JOSEPHINE: I said he doesn't like boots.
[beat 9] AMOS: I'm too old and too tired to argue. Is he in the cellar? JOSEPHINE: No. AMOS: The well, then.
[beat 10] She doesn't answer. The windmill ticks.
[beat 11] He rises, puts his hat on, and she lowers the shotgun until the barrels touch the porch boards.

### SCENE s00705 | INT. FINCH & DAUGHTERS PIANO MOVERS - TRUCK BED - DAY
Characters: BARRY FINCH, LOLA SANTANGELO, KENJI MORI, GLORIA DUPREE
[beat 0] A grand piano wrapped in blankets and straps, wedged against a ramp. Daylight spills in the open back.
[beat 1] BARRY FINCH, 50s, sweating through a company polo, pushes from behind. LOLA SANTANGELO, 30s, in work gloves, pulls from the front. KENJI MORI, 20s, the new hire, stands on the ramp holding a clipboard and no idea.
[beat 2] BARRY: On three. One. Two -- LOLA: Not on three. After three. BARRY: That's what I said. KENJI: You said "on." BARRY: Thank you, Kenji.
[beat 3] They heave. The piano rolls three feet and stops.
[beat 4] Barry slips; Lola grabs the strap; the piano rocks. They both freeze as it teeters and then settles.
[beat 5] LOLA: Nobody breathe. BARRY: I'm breathing. LOLA: Breathe quieter.
[beat 6] GLORIA DUPREE, 60s, the customer, in a silk robe and curlers, strides up the driveway with a pastry box. GLORIA: Is that my Steinway? KENJI: Yes, ma'am.
[beat 7] GLORIA: It's backward.
[beat 8] Barry and Lola look at each other. Both groan.
[beat 9] Kenji drops the clipboard. It clatters down the ramp, and the piano, as if answering, begins to roll.
[beat 10] LOLA: Kenji! BARRY: Catch it!
[beat 11] All three dive. The piano stops two inches from Gloria's slippers.
[beat 12] She opens the pastry box and offers a donut. GLORIA: Anyone?

### SCENE s00706 | INT. ALBRECHT HOUSE - KITCHEN - MORNING
Characters: MINA, RAYMOND
[beat 0] Yellow curtains, a toaster with a sticker of a cat on it, a calendar with a drawing of the sun. Cereal bowls in a sink.
[beat 1] MINA, 8, in rain boots and pajamas, stands on a chair at the counter. She holds a spoon like a microphone.
[beat 2] A cordless phone on the table rings. She picks it up.
[beat 3] MINA: Hello? This is Mina. RAYMOND: Mina-bean. It's Dad.
[beat 4] MINA: Where are you? RAYMOND: Airport. The plane is late. MINA: Again?
[beat 5] RAYMOND: Again. Is Grandma there? MINA: She's in the garden. She's yelling at the tomatoes. RAYMOND: Tell her I said hi. MINA: I will.
[beat 6] She sets the spoon down. Looks at the calendar.
[beat 7] MINA: Dad? Can you still make my recital? RAYMOND: Wouldn't miss it.
[beat 8] She nods and hangs up.
[beat 9] Outside, a voice calls over the tomatoes. Mina grins.

### SCENE s00707 | INT. CASTELLANO'S LAUNDRY & DRY CLEANING - BACK ROOM - NIGHT
Characters: VINCE CASTELLANO, DOLLY, MOE ZIELINSKI, NADIA, ^DOLLY
[beat 0] Steam. Rows of plastic-wrapped suits. A pressing machine hisses.
[beat 1] VINCE CASTELLANO, 50s, in an undershirt, stands over a table of cash. DOLLY, 40s, in a pressed blouse, folds a sheet with great care. MOE ZIELINSKI, 60s, a hulking presser, sets down the iron. NADIA, 20s, new to the shop, feeds a collar into the machine.
[beat 2] Vince counts. Dolly folds. Nobody speaks.
[beat 3] Nadia glances at the door.
[beat 4] VINCE: Moe. MOE: Yeah? VINCE: Whose turn was it to lock up?
[beat 5] MOE: Mine. ^DOLLY: Hers.
[beat 6] They look at each other. Dolly's fold goes crooked.
[beat 7] VINCE: Which? MOE: I locked it. DOLLY: I saw him. He locked it.
[beat 8] Vince sets down the cash. Nadia presses the machine. It hisses. Steam hides her face.
[beat 9] VINCE: Kid, you got somewhere to be? NADIA: No, sir. VINCE: You keep looking at that door.
[beat 10] Nadia lets go of the machine. A beat. Moe picks up the iron again.
[beat 11] Behind her, the front bell chimes.

### SCENE s00708 | INT. BLACKWOOD LODGE - GREAT ROOM - NIGHT
Characters: PROFESSOR QUENTIN LAIRD, ODETTE, BASIL, NGOZI, HARLAN
[beat 0] A hunting lodge in deep snow. Antlers on every wall. A fire roars in a stone hearth. Outside, a blizzard howls.
[beat 1] PROFESSOR QUENTIN LAIRD, 60s, in a cardigan, stands before the fire. ODETTE, 30s, a journalist, sits cross-legged on a rug with a notebook. BASIL, 40s, the caretaker, nurses a whiskey at the bar. NGOZI, 30s, a doctor, stares at her phone, which shows no bars. HARLAN, 50s, in a camouflage vest, paces behind the sofa.
[beat 2] QUENTIN: I appreciate your patience. As you can see, we are snowed in. ODETTE: For how long? BASIL: Two days. Maybe three. NGOZI: No signal. Of course.
[beat 3] HARLAN: Who called us here? QUENTIN: I did. HARLAN: You said it was a reunion. QUENTIN: It was.
[beat 4] HARLAN: Then why are we missing someone?
[beat 5] Nobody answers. The fire cracks.
[beat 6] ODETTE: You said the sixth guest would come at nine. QUENTIN: He will. BASIL: It's past eleven. QUENTIN: He is very punctual, when he wants to be.
[beat 7] Ngozi pockets her phone. Harlan's pacing stops.
[beat 8] NGOZI: Quentin, who is he? QUENTIN: Someone we all knew, a long time ago. HARLAN: Name.
[beat 9] QUENTIN: Teddy Marsh.
[beat 10] Basil drops his glass. It shatters. Odette stops writing.
[beat 11] BASIL: Teddy died. Twenty years ago. QUENTIN: Did he?
[beat 12] The front door rattles. Everyone turns. The wind howls, and the rattling stops. Quentin smiles faintly into the fire.
[beat 13] ODETTE: Stay calm. Stay calm.
[beat 14] NGOZI: Basil. Check the door. BASIL: Why me? NGOZI: Because you're the caretaker. BASIL: It's not in my contract.
[beat 15] Harlan crosses the room and lays his hand on the latch. The rattling begins again, softer, and he draws back. HARLAN: Does anyone else hear that?
[beat 16] Odette closes her notebook. Quentin sits, finally, in the leather chair, and folds his hands.
[beat 17] QUENTIN: That would be him.

### SCENE s00709 | INT. COLLAPSED MINE SHAFT - SIDE CHAMBER - NIGHT
Characters: LIV ARNESEN
[beat 0] Rock walls dripping. A headlamp on the ground throws a ragged yellow cone. A first-aid kit, half open. A small digital recorder on a flat stone.
[beat 1] LIV ARNESEN, 30s, caked in dust, one leg stretched stiffly in front of her, props herself against the wall. She presses the recorder's red button and holds it close.
[beat 2] LIV: Day two. Or night two. Hard to say. Battery's at twenty percent. Water's gone. I have three granola bars and a flare.
[beat 3] She coughs, long, into her sleeve. LIV: My name is Liv Arnesen. If someone finds this, tell my mother I wasn't scared. That's a lie, but tell her anyway.
[beat 4] She clicks it off. Clicks it on. LIV: Day one. I'm okay. The ceiling came down fast. The west tunnel's blocked. Fine, I'll try the north.
[beat 5] She listens with her eyes closed. Her recorded voice breaks off with a muffled crash, then silence, then breathing.
[beat 6] LIV: That was the part where I fell. She clicks it off.
[beat 7] LIV: The truth is, I keep hearing a drip. And I keep hoping it's a river. But it's just a pipe. A leaking pipe. She moves her leg. Winces.
[beat 8] LIV: Okay. Let's make a plan. One. Don't die. Two. Don't panic. Three. If you panic, see one.
[beat 9] A faint scraping sounds from above. She freezes. Waits. Nothing. She lets out a breath.
[beat 10] LIV: Rats. Probably rats. Or a rescue team with very bad manners.
[beat 11] She laughs. The laugh turns into a sob. She presses the heel of her hand to her mouth until it passes.
[beat 12] LIV: Sorry. Sorry. Recording. Where was I?
[beat 13] She clicks the button again. LIV: If I get out, I'm taking up pottery. Something slow. Something that doesn't fall on me.
[beat 14] Liv smiles at it, tired and cracked. LIV: You know, that was a good plan.
[beat 15] Overhead, the scraping returns. Louder. A thin shaft of white light falls through a crack in the rock.
[beat 16] LIV: Hello?
[beat 17] She reaches for the flare, and the rock above her begins to shift.

### SCENE s00710 | INT. TRELAWNEY HOUSE - FRONT HALL - LATE AFTERNOON
Characters: AGNES TRELAWNEY
[beat 0] A long hallway, floored in black-and-white tile, lined with portraits of unsmiling ancestors. A grandfather clock. Dust in the window light. A telephone table with an old answering machine blinking red.
[beat 1] The machine clicks. Whirs. AGNES: You've reached the Trelawney residence. We can't come to the phone right now. Leave a message and we'll ring you back.
[beat 2] BEEP. AGNES: Hello? It's me. It's Agnes. I know you're there. Pick up.
[beat 3] Silence. The machine clicks off.
[beat 4] The front door opens. AGNES TRELAWNEY, 70s, in a long wool coat, rain on her shoulders, steps in. A battered leather suitcase in one hand, a key on a lanyard around her neck. She shuts the door slowly and stands listening to the house.
[beat 5] AGNES: Hello? The clock ticks.
[beat 6] She sets down the suitcase and crosses to the telephone table. AGNES: Four messages. Who calls a house that has been empty for a year?
[beat 7] She presses the button. AGNES: Mother, it's me. Please call me back.
[beat 8] She stops the machine. Presses it again. AGNES: Mother, it's me.
[beat 9] She stops it. Her hand trembles on the casing.
[beat 10] AGNES: That was my voice.
[beat 11] She lifts the receiver, listens to the dial tone, and sets it back. In the mirror above the table, the hall behind her is empty.
[beat 12] AGNES: It's me, mother. I'm home.
[beat 13] Somewhere upstairs a door closes, gently, as if in answer.

### SCENE s00711 | INT. DEEP-SPACE STATION KESTREL - HYDROPONICS RING - STATION NIGHT
Characters: SOLEDAD MARSH, PAVEL IONESCU, COMMANDER HANNE LINDGREN
[beat 0] A curved corridor of glass tubes, each holding a glowing green column of algae. The air is thick and humid and smells faintly of cut grass. Beyond the observation glass, a gas giant turns, banded in rust and ochre.
[beat 1] DR. SOLEDAD MARSH, 40s, in a lab coat with its sleeves rolled, kneels at a sample port and draws a vial of green fluid. PAVEL IONESCU, 30s, a technician with a shaved head and a tool belt, stands on a ladder adjusting a pump housing, his headlamp swinging as he talks.
[beat 2] PAVEL: Flow's down again. Eight percent. SOLEDAD: It's always eight percent. PAVEL: Which is why it's not a coincidence.
[beat 3] She caps the vial and holds it to the light. Pavel climbs down, wipes his hands on a rag, and joins her at the port, and for a moment they both look into the green column as it breathes, slow, bubbling, almost alive, while the gas giant's light slides across their faces.
[beat 4] SOLEDAD: Pavel. Do you hear that? PAVEL: The pump? SOLEDAD: Under the pump.
[beat 5] He tilts his head. Beneath the hum of machinery, a faint rhythmic tapping, like fingers on glass.
[beat 6] The hatch at the end of the corridor opens. COMMANDER HANNE LINDGREN, 50s, in a gray jacket with silver epaulettes, a tablet in her hand, steps through. Her face is composed. Her eyes move over the tubes.
[beat 7] HANNE: Doctor Marsh. Mister Ionescu. Please stop what you're doing. SOLEDAD: Commander. We were just --
[beat 8] HANNE: I know what you were doing. I read your logs. PAVEL: Is something wrong? HANNE: Yes.
[beat 9] She lifts the tablet. On its screen, a schematic of the ring pulses red.
[beat 10] HANNE: The culture in tube nine is not algae. It stopped being algae three days ago. SOLEDAD: Then what is it? HANNE: We were hoping you would tell us.
[beat 11] At the far end, the tapping on the glass grows louder. All three turn.

### SCENE s00712 | INT. PRECINCT 9 - INTERVIEW ROOM - NIGHT
Characters: OFFICER TAMAR HAIM, UNKNOWN MAN, DISPATCH, DESMOND
[beat 0] Cinderblock. A table bolted to the floor. A two-way mirror. A fluorescent tube with a wasp trapped inside it.
[beat 1] OFFICER TAMAR HAIM, 30s, in uniform, sits with a legal pad. Across from her, an UNKNOWN MAN, 40s, in a damp jacket, holds a paper cup he has not drunk from.
[beat 2] TAMAR: Name. UNKNOWN MAN: You tell me. TAMAR: That's not how this works. UNKNOWN MAN: Then I'm waiting.
[beat 3] A radio on Tamar's shoulder crackles. DISPATCH: Unit Nine, prints came back on your guy.
[beat 4] Tamar thumbs the mic. TAMAR: Go ahead, Dispatch.
[beat 5] DISPATCH: Desmond Pryce. Forty-one. Two priors. Last known address, a storage unit off Route 6.
[beat 6] She glances at the man. He keeps his eyes on the table.
[beat 7] TAMAR: Mr. Pryce. DESMOND: Don't. TAMAR: That's your name? DESMOND: It was my father's.
[beat 8] TAMAR: Mr. Pryce, why are you holding the cup? DESMOND: Because my hands shake.
[beat 9] DISPATCH: Unit Nine, also, the storage unit's been flagged. Smell reported.
[beat 10] Desmond sets the cup down very carefully.
[beat 11] TAMAR: What's in unit one-forty? DESMOND: Nothing you want. TAMAR: That isn't a no.

### SCENE s00713 | INT. PROUTY COTTAGE - PARLOR - LATE AFTERNOON
Characters: ELEANOR PROUTY, GERALD, CONSTABLE IDRIS
[beat 0] A low-ceilinged room. A mantel crowded with china figurines. A shawl on the arm of a chair. A grandfather's walking stick leaning by the door. Rain taps the windows.
[beat 1] ELEANOR PROUTY, 60s, in a gray cardigan, sits in the straight-backed chair with her hands folded. GERALD, 60s, her brother-in-law, stands at the window with his back to her. CONSTABLE IDRIS, 30s, young and awkward, perches on the edge of the settee with a notebook on his knee.
[beat 2] IDRIS: Mrs. Prouty. I'm sorry to trouble you. ELEANOR: It's no trouble. IDRIS: I only have a few questions. ELEANOR: Of course.
[beat 3] Gerald does not turn. His hand rests on the curtain.
[beat 4] IDRIS: When did you last see your husband? ELEANOR: Tuesday morning. At breakfast. IDRIS: And he went to the allotment? ELEANOR: He always goes to the allotment. IDRIS: Did he mention anyone? ELEANOR: No.
[beat 5] Idris writes. The pen scratches in the silence. A clock chimes the quarter hour.
[beat 6] IDRIS: Was he in good spirits? ELEANOR: He was quiet.
[beat 7] Gerald lets the curtain fall. GERALD: Henry was always quiet.
[beat 8] IDRIS: Mr. Prouty, you live next door? GERALD: Forty years.
[beat 9] IDRIS: And you didn't see him Tuesday? GERALD: I saw him walk past. Around nine. IDRIS: Which direction? GERALD: Toward the river.
[beat 10] Eleanor looks down at her hands. She turns her wedding ring a single quarter turn.
[beat 11] IDRIS: The allotment is the other way.
[beat 12] Nobody speaks. Idris closes the notebook.
[beat 13] Gerald crosses to the mantel and straightens a china shepherdess that did not need straightening. GERALD: Perhaps he went for a walk. IDRIS: Perhaps.
[beat 14] ELEANOR: Would you like tea, Constable? IDRIS: That would be kind.
[beat 15] She rises and goes to the kitchen. Gerald watches her go.
[beat 16] When the kettle clatters in the other room, he turns to Idris with an expression that is almost relief. GERALD: She has not slept since Tuesday. IDRIS: No. I should think not.
[beat 17] Idris tucks the notebook into his pocket. He glances at the walking stick by the door. It is wet. Rain, perhaps. Or river.

### SCENE s00714 | INT. MARLIN HEIGHTS HIGH SCHOOL - GYMNASIUM - NIGHT
Characters: COACH RUSTY CALHOUN, TAMIKA BOONE, DMITRI VOLKOV
[beat 0] Bleachers half full. A banner: "STATE SEMIFINAL." The scoreboard reads 58-58 with 0:04 left. A buzzer hangs in the air.
[beat 1] COACH RUSTY CALHOUN, 50s, in a windbreaker and clipboard, crouches at the sideline in the huddle. TAMIKA BOONE, 17, the point guard, sweat-soaked jersey, kneels beside him. DMITRI VOLKOV, 18, the center, towers over both, towel around his neck.
[beat 2] COACH CALHOUN: Four seconds. Ball goes in at half-court. Tamika, you take it. Dmitri, screen.
[beat 3] TAMIKA: Coach, they'll double me. DMITRI: They'll double her. ^COACH CALHOUN: They'll double you.
[beat 4] All three stop. Dmitri grins. Tamika laughs, short, nervous.
[beat 5] COACH CALHOUN: Then Dmitri slips the screen. Roll to the basket. Tamika, you hit him.
[beat 6] DMITRI: Over three defenders? COACH CALHOUN: Over a hundred. You're seven feet of Ukrainian pride. DMITRI: I'm six-eight. COACH CALHOUN: And pride.
[beat 7] The horn sounds. They break the huddle.
[beat 8] Calhoun grips Tamika's shoulder. COACH CALHOUN: Whatever happens, I'm proud of you. TAMIKA: That's what you say before we lose. COACH CALHOUN: That's what I say before we win, too.
[beat 9] The referee blows the whistle. Dmitri steps up.
[beat 10] Tamika takes the ball at midcourt, faces the double team, and for one second looks at the rafters.
[beat 11] She whips the pass over the defenders' heads. Dmitri catches it at the rim, rises, and jams it through just as the horn blares.
[beat 12] The gym explodes. Calhoun drops his clipboard.
[beat 13] COACH CALHOUN: Nobody tell them I cried.

### SCENE s00715 | INT. STRAND FARMHOUSE - KITCHEN - NIGHT
Characters: HAZEL STRAND, EWAN BLYTHE, MAGS DELANEY, DEPUTY CUTTER
[beat 0] A big country kitchen: scarred oak table, iron range, a window onto black fields. A hurricane lamp. A radio on the counter.
[beat 1] HAZEL STRAND, 40s, in a flannel nightgown with a shawl, stands at the sink pumping water. Her brother-in-law EWAN BLYTHE, 50s, leans against the pantry door with a shotgun broken over his arm. At the table, MAGS DELANEY, 12, the neighbor's girl, sits wrapped in a quilt, her feet drawn up under her.
[beat 2] HAZEL: Mags, drink your milk. MAGS: It's cold. HAZEL: It's meant to be.
[beat 3] Ewan peers through the window curtains. EWAN: Nothing yet. HAZEL: There won't be. EWAN: You don't know that. HAZEL: I do.
[beat 4] The radio crackles. A man's voice, thin with static. DEPUTY CUTTER: Strand place, this is Cutter. Come in.
[beat 5] Ewan snaps the shotgun shut and crosses to the radio.
[beat 6] Hazel lifts Mags's chin with one finger and checks her eyes. Mags pulls away and tucks the quilt up to her ears.
[beat 7] EWAN: Cutter. Go ahead.
[beat 8] DEPUTY CUTTER: Roads are washed out. I can't get to you till morning. EWAN: Can't or won't? DEPUTY CUTTER: Can't. The bridge is gone.
[beat 9] Hazel sets down the pail. Ewan turns the dial a quarter turn. Static swells. HAZEL: Ewan, don't.
[beat 10] EWAN: Cutter, you hear anything out there? DEPUTY CUTTER: Like what? EWAN: Like something in the corn.
[beat 11] Silence on the radio. Then a long, wet scraping sound comes through the speaker. It is not coming from the speaker. It is coming from outside the kitchen window.
[beat 12] MAGS: It's the same sound as at our house. HAZEL: What sound, sweetheart? MAGS: When they took my mom.
[beat 13] Ewan raises the shotgun. Hazel snuffs the lamp with a pinch of her fingers. The kitchen goes black. Moonlight picks out the window.
[beat 14] DEPUTY CUTTER: Strand place? Strand place, do you copy?
[beat 15] Something taps the glass, once, with a long fingernail.
[beat 16] EWAN: Hazel, get her under the table. HAZEL: Already there.
[beat 17] Hazel pulls Mags beneath the oak, and the three of them hold their breath as the tapping travels along the window, around the corner, toward the door.

### SCENE s00716 | INT. PASCAL HOUSE - ATTIC - AFTERNOON
Characters: LEONA, PASCAL
[beat 0] Slanted ceiling. Cardboard boxes marked in a dead man's handwriting. A mannequin with a hat on it. A small round window, dusty light.
[beat 1] LEONA, 40s, in jeans, kneels over a trunk. Her brother PASCAL, 40s, in a work jacket, stands at the top of the stairs with his arms folded.
[beat 2] LEONA: You took Dad's watch. PASCAL: He gave it to me. LEONA: In the hospital. When he couldn't talk. PASCAL: He pointed. LEONA: At you. Or at the window. PASCAL: At me.
[beat 3] Leona lifts a sweater from the trunk. A box of old photographs falls out. She catches it.
[beat 4] Pascal takes a step forward, both hands out, and they hold the box between them for a moment, each with a grip on a corner. PASCAL: Give me that. LEONA: You give it.
[beat 5] They tug. The lid pops. Photographs scatter across the floor, and both stop, crouch, and begin gathering them without a word.
[beat 6] LEONA: This one. Do you remember? PASCAL: Don't. LEONA: You were nine. You had that haircut. PASCAL: He cut it himself, with kitchen scissors. LEONA: You cried for a week. PASCAL: I did not. LEONA: You hid in the car. PASCAL: Okay. I hid in the car.
[beat 7] She hands him the photograph. He studies it for a long time. His thumb moves over the face.
[beat 8] PASCAL: Take the watch. LEONA: I don't want the watch.
[beat 9] PASCAL: Then why are we here? LEONA: Because I don't want to be here alone.
[beat 10] He sits on the trunk. She sits beside him, and they look at the photographs spread across the boards like leaves.

### SCENE s00717 | INT. COUNTY COURTHOUSE - COURTROOM 4B - DAY
Characters: DELIA WHITCOMBE, JUDGE HORATIO NG
[beat 0] A cavernous room of dark oak and brass. A ceiling fan turns lazily. Afternoon light angles through tall, dusty windows onto a worn gallery bench. The gallery is empty. The jury box is empty. A court reporter's stenograph sits unmanned.
[beat 1] DELIA WHITCOMBE, 40s, in a charcoal suit that has been pressed too many times, stands alone at the defense table with a stack of file folders. Her reading glasses hang from a chain. Her jaw is set. On the bench above her, JUDGE HORATIO NG, 70s, white-haired, with a face carved of patience and old tobacco, peers down through half-moon spectacles.
[beat 2] JUDGE NG: Ms. Whitcombe, your motion is untimely. DELIA: Your Honor, the evidence was only disclosed yesterday.
[beat 3] JUDGE NG: By whom? DELIA: By the prosecution. In a box. Left on my doorstep. JUDGE NG: At what hour? DELIA: Ten past midnight. JUDGE NG: And who delivered it? DELIA: No one signed for it.
[beat 4] The judge removes his spectacles and polishes them on his sleeve. The ceiling fan creaks.
[beat 5] JUDGE NG: Ms. Whitcombe, I have sat on this bench for thirty-one years. I have heard a great many motions. This is the first one that arrived by phantom.
[beat 6] DELIA: The contents are not phantom, Your Honor. They are bank records. They show the victim's account was emptied three weeks before the alleged crime. JUDGE NG: By whom? DELIA: By my client's accuser.
[beat 7] JUDGE NG: Do you have a witness? DELIA: I have the documents. JUDGE NG: Documents do not testify.
[beat 8] DELIA: Then let me call the bank. JUDGE NG: Today? DELIA: Now.
[beat 9] He sets his glasses back on his nose. For a long moment he studies her, and the silence stretches. Delia does not blink.
[beat 10] JUDGE NG: You understand that if I allow this, and it fails, your client's sentence will be harsher. DELIA: I understand. JUDGE NG: And you still wish to proceed? DELIA: I have never wished anything more.
[beat 11] Judge Ng nods once, slowly. He lifts his gavel, looks at it, and sets it down without striking.
[beat 12] JUDGE NG: Then bring in the bank.

### SCENE s00718 | EXT. MOUNTAIN PASS - SNOWBOUND BUS - DAY
Characters: KIT, BERNARD, YARA, LARS, PILAR, RADIO, TOBIAS
[beat 0] A stalled coach bus lists on a white slope, wheels buried to the axles. Wind hisses across the frozen glass. Pines bend under the weight of snow.
[beat 1] Inside, a dim cabin. Frost on the windows. Seven seats cleared in a tight circle near the driver's cab.
[beat 2] KIT, 40s, a nurse in a puffy coat, rubs a young girl's hands. BERNARD, 60s, a retired surveyor with a thick gray scarf, studies a folded map. YARA, 20s, a student with a backpack, shivers in her sleeping bag. LARS, 50s, the bus driver, in his uniform jacket, works a hand-crank radio. PILAR, 30s, a mother, holds a thermos of soup between her palms. They are all gaunt, hollow-eyed, patient.
[beat 3] KIT: Everyone drink something. BERNARD: We're low on water. KIT: We have snow. LARS: Snow takes heat to melt. YARA: Then we burn something. BERNARD: We burned the seat covers yesterday.
[beat 4] PILAR: Hold on, hold on. LARS: Come on, you old brute.
[beat 5] The radio coughs. A thin, tinny voice breaks through. RADIO: -- anyone -- copy --
[beat 6] Everyone freezes. Lars twists the dial.
[beat 7] LARS: This is the Valmont Pass bus, number twelve. We're stranded at mile forty. Do you read? RADIO: -- stay put -- help -- morning -- LARS: Say again?
[beat 8] The signal dies. Lars slumps. Pilar clutches the thermos.
[beat 9] KIT: Morning. That's something. YARA: Whose morning? BERNARD: Don't start.
[beat 10] Kit pulls her glove off and checks the girl's pulse at the wrist. The girl, who has not spoken, turns her head toward the door.
[beat 11] The bus door hisses open. A gust of snow sweeps in. A figure stands in the stairwell, bundled in white, a rifle slung over one shoulder: TOBIAS, 40s, a ranger, ice crusted on his beard.
[beat 12] TOBIAS: Got your signal. I'm Tobias. I'm here to get you out.
[beat 13] Nobody moves. Then Pilar lets out a sob. Kit rises. Bernard folds the map.
[beat 14] LARS: How many of you? TOBIAS: Just me. Sled's at the bottom. Two trips.
[beat 15] KIT: She goes first. TOBIAS: Who? KIT: Her. And she goes with her.
[beat 16] Pilar nods. She stands, takes the girl's hand, and moves to the door.

### SCENE s00719 | INT. STARSHIP ARGENT DAWN - ENGINE CORE - SHIP NIGHT
Characters: COMMANDER HALLORAN, XIMENA ROJAS-VANCE, BOSUN TUCK, ENSIGN RAVI
[beat 0] A cathedral of glowing pipes and throbbing coils. A yellow warning lamp spins.
[beat 1] COMMANDER HALLORAN, 50s, in a gold-trimmed uniform, grips a rail. DR. XIMENA ROJAS-VANCE, 40s, a physicist with wild gray hair, taps a console. BOSUN TUCK, 60s, a grizzled engineer in oil-stained overalls, hauls on a valve wheel.
[beat 2] HALLORAN: Doctor, how long? XIMENA: Eleven minutes before the core goes critical.
[beat 3] TUCK: Eleven? I said nine. XIMENA: Your instruments are older than my daughter, Tuck. TUCK: They've never lied to me.
[beat 4] ENSIGN RAVI, 20s, in a crisp blue jumpsuit, bursts through the hatch, breathless. RAVI: Commander! The aft shields are failing!
[beat 5] HALLORAN: Ensign, take the other console. RAVI: Sir, I haven't been trained -- HALLORAN: Neither was I, when I started.
[beat 6] Ravi darts to the console.
[beat 7] Ximena and Tuck both reach for the same lever. Their hands collide. They glare at each other and then, as one, push.
[beat 8] The lamp flares white. The pipes shudder. Halloran braces, Ravi ducks, Tuck is thrown against the wall.
[beat 9] XIMENA: It's working! TUCK: Don't say that. Saying it jinxes it.
[beat 10] HALLORAN: Bosun. Doctor. Ensign. If we get through this, I'm buying the first round. RAVI: Sir, is that a promise? HALLORAN: It's an order.
[beat 11] The core's hum drops to a purr. The warning lamp dims. All four slump, grinning.

### SCENE s00720 | INT. MUNICIPAL PIGEON CENSUS OFFICE - SUBBASEMENT - DAY
Characters: GWENDOLYN PRATT, TOBIAS NKEMELU, ANJALI VERMA, OSKAR LINDQVIST, MARISOL DUARTE, INTERCOM, LEONARD
[beat 0] A windowless room under City Hall, lit by one fluorescent tube that has been dying since the last administration. Clipboards hang from nails like pelts. On every wall, laminated maps of the city are stuck with coloured pins, each pin a flock nobody has visited in years.
[beat 1] GWENDOLYN PRATT, fifties, Regional Avian Statistics Director, stands on a wobbling chair in a cardigan the colour of weak tea. She holds a single grey feather aloft like a verdict.
[beat 2] Around the long table, the team has gone still. TOBIAS NKEMELU, thirties, the only person in the office with a tan, lowers his sandwich. ANJALI VERMA, twenties, sharp-eyed, clicks her pen once, twice. OSKAR LINDQVIST, sixties, a man built entirely of corduroy, does not look up from his crossword. MARISOL DUARTE, forties, the department's tired heart, sits with her coat still on.
[beat 3] GWENDOLYN: Colleagues. The Mayor's office wants the Q3 count by four o'clock. We have counted, by my reckoning, eleven pigeons. TOBIAS: Eleven in total? In the city?
[beat 4] GWENDOLYN: Eleven that are confirmed to be pigeons and not, as Oskar's report suggested, "a mood."
[beat 5] OSKAR: Seven letters. "Regret, in a hat."
[beat 6] ANJALI: Ma'am, I've been telling you since March. The spreadsheet's counting the same bird. Reginald. He's got a limp. GWENDOLYN: Reginald is a limp. Reginald is not a flock.
[beat 7] Gwendolyn steps down from the chair. It rocks, then forgives her. She smooths the cardigan and, for the first time, looks tired. GWENDOLYN: Thirty years. Thirty years of pins.
[beat 8] An INTERCOM crackles on the wall above the door, a beige box with a tongue of dust. LEONARD: Hello, subbasement! Leonard from Facilities. Quick heads up, the four o'clock deadline has been moved to "whenever." The Mayor has discovered squirrels.
[beat 9] The room exhales as one body. Tobias resumes his sandwich. Anjali caps her pen.
[beat 10] MARISOL: Thank you, Leonard.
[beat 11] LEONARD: Also, someone's been leaving feathers in the lift. Just flagging.
[beat 12] Gwendolyn looks at the feather in her hand. She walks to the nearest map and, with great ceremony, pins it to the middle of the city.
[beat 13] GWENDOLYN: Put that down as twelve. MARISOL: It's a feather. GWENDOLYN: It's a pigeon in spirit.
[beat 14] Oskar fills in a word. He nods, satisfied, at no one at all. OSKAR: Hat.

### SCENE s00721 | INT. ALL-NIGHT LAUNDROMAT - 3 A.M.
Characters: CATALINA SOTO-MERCADO, EZEKIEL
[beat 0] Forty dryers turn like slow, patient moons. The windows have gone to black mirrors. In the one plastic chair that isn't cracked, CATALINA SOTO-MERCADO, seventies, sits guarding a wicker basket on her lap as if it were a sleeping child.
[beat 1] Across the aisle, her grandson EZEKIEL, sixteen, all elbows and hood, stares at his phone and refuses to be in the building.
[beat 2] EZEKIEL: You said an hour, Abuela. It's been three. CATALINA: Then sit. Fold something. EZEKIEL: There's nothing to fold. It's all in the dryer. Mom's stuff. Dad's stuff.
[beat 3] Catalina's hand tightens on the basket. A dryer thuds to a stop behind them. Neither moves.
[beat 4] CATALINA: That is not your father's stuff.
[beat 5] Ezekiel pockets the phone and crosses the aisle in four strides. He reaches for the basket. She pulls it to her chest. For a moment they hold opposite ends of it, nose to nose, a wicker tug-of-war under the buzzing light.
[beat 6] EZEKIEL: He left it. It's a shirt, it's a stupid shirt. CATALINA: It is the shirt he was wearing the day he taught you to ride. EZEKIEL: That I don't remember!
[beat 7] The basket tips. A faded blue shirt slides out and lands between them, half open on the tile. They both freeze, breath held, staring at it as if it might stand up.
[beat 8] Ezekiel kneels first. Catalina follows, knees cracking, and together they lift it by the sleeves, like folding a flag with no ceremony.
[beat 9] CATALINA: Hold your end.

### SCENE s00722 | EXT. SALT-FLAT FERRY LANDING - NOON
Characters: DEACON CROWE, BIRDIE PRUETT
[beat 0] White. Everything white. Heat shimmer. A rotting dock jutting into a lake that dried up a decade ago. A ferry sits stranded on cracked crust, hull tilted.
[beat 1] DEACON CROWE, forties, sits on an upturned bucket by the ramp. Black coat, grey with salt. Rifle across his knees. He doesn't aim it. He just keeps it.
[beat 2] Hoofbeats, slow. A shape resolves in the glare. Rider. Mule.
[beat 3] BIRDIE PRUETT, thirties, wide hat, rolled sleeves. Sunburnt nose. She dismounts without hurry. Ties the mule to a piling.
[beat 4] He watches. Doesn't rise. BIRDIE: Deacon. DEACON: Birdie.
[beat 5] She takes a canteen off the saddle. Drinks. Holds it out. He considers it. Takes it.
[beat 6] BIRDIE: You're a long way from anybody. DEACON: That's the idea.
[beat 7] She sits on the ramp's edge. Boots dangling over dry crust. He caps the canteen, passes it back. Neither says anything for a while.
[beat 8] A gull cries. Where it came from, no one knows. Both look up. Both look down again.
[beat 9] DEACON: They say the lake'll come back. BIRDIE: They say a lot.
[beat 10] He grins. Small. It leaves quick.
[beat 11] She pulls a folded paper from her vest. Turns it over in her fingers. He sees it. Eyes narrow. Rifle shifts a half inch on his knees.
[beat 12] They both go still. Wind hushes the dock timbers.
[beat 13] DEACON: That mine? BIRDIE: Was yours. It's a telegram now. DEACON: Who from?
[beat 14] BIRDIE: Your sister. Says come home. DEACON: Don't have one. BIRDIE: Then somebody's lying, Deacon.
[beat 15] He stares at the ferry. Her eyes stay on him. The heat hums.
[beat 16] She unfolds the paper. Holds it up between them like a card she doesn't want to play. BIRDIE: Read it with me.
[beat 17] He doesn't take it. He doesn't leave.
[beat 18] After a long moment he sets the rifle down on the planks. Slides over on the bucket. She shifts toward him, paper between them. They read.
[beat 19] DEACON: Hell. BIRDIE: Yeah.
[beat 20] Salt glitters. Neither moves.

### SCENE s00723 | INT. FERRIS WHEEL GONDOLA 14 - COMPLAINTS DEPARTMENT - DAY
Characters: PRIYA RAMANATHAN, HUGH BELLAMY, CORKY, WASHINGTON, MS. FENWICK-ADEYEMI
[beat 0] A decommissioned gondola bolted to a service platform. Two desks. One window. One fire extinguisher nobody trusts.
[beat 1] PRIYA RAMANATHAN, thirties, headset, ironed blouse. Armour.
[beat 2] HUGH BELLAMY, fifties, comb-over, mug reading WORLD'S OKAYEST BOSS. He leans in the doorway.
[beat 3] HUGH: Priya. Quarterly numbers. PRIYA: Good. HUGH: Good?
[beat 4] PRIYA: Complaints are down forty percent. HUGH: Brilliant.
[beat 5] PRIYA: Because the phone line's been unplugged since June.
[beat 6] Hugh freezes. Smile stuck. HUGH: Unplugged. PRIYA: By you. For "restructuring."
[beat 7] Hugh enters. Sits on the desk. Sighs like a man in a hot-air balloon.
[beat 8] HUGH: Okay. Okay. Nobody tells Corporate. PRIYA: Corporate's in the next gondola.
[beat 9] CORDELL "CORKY" WASHINGTON, twenties, pops up from under the other desk. Headphones. Cheese puff dust on his lip. CORKY: Morning! HUGH: You live here? CORKY: Gondola's got Wi-Fi.
[beat 10] The gondola sways. All three grab something. PRIYA: Why are we moving? CORKY: Wheel's on. Maintenance said "test." HUGH: Test what? CORKY: Whether it still goes.
[beat 11] The gondola lifts. Rises. Through the window the city tilts into view. Hugh's mug slides. He catches it.
[beat 12] An old PHONE on the wall RINGS. Everyone stares. PRIYA: That's connected? HUGH: That's not supposed to be connected. Ring. Ring.
[beat 13] Priya answers. Puts it on speaker. PRIYA: Complaints. Priya.
[beat 14] MS. FENWICK-ADEYEMI: Ms. Ramanathan. Marjorie Fenwick-Adeyemi. Head of Customer Experience. Hugh mouths: Corporate. Corky mouths: In the next gondola.
[beat 15] MS. FENWICK-ADEYEMI: I'm told your department has had no complaints in four months. PRIYA: That's correct. MS. FENWICK-ADEYEMI: It's the most impressive thing I've ever seen.
[beat 16] Hugh straightens. Smiles. Corky gives a thumbs-up.
[beat 17] MS. FENWICK-ADEYEMI: I'd like to put you in charge of the whole company. PRIYA: What? HUGH: Say yes.
[beat 18] MS. FENWICK-ADEYEMI: Mr. Bellamy is, of course, being let go.
[beat 19] Hugh's mug hits the floor. HUGH: What?! CORKY: Oh, wow.
[beat 20] PRIYA: Can I call you back? MS. FENWICK-ADEYEMI: I'm in the next gondola.
[beat 21] They all turn. Through the window, ten feet away, a woman in a grey suit lifts a phone. Waves.
[beat 22] The wheel stops. Hangs. Wind. Silence.
[beat 23] Hugh drops onto the desk. HUGH: Priya. I trained you. PRIYA: You taught me where the mute button was. HUGH: That's training!
[beat 24] CORKY: I can see her lunch.
[beat 25] Priya hangs up. Looks at Hugh. At the extinguisher. At the city below.
[beat 26] PRIYA: I have a condition. HUGH: Anything. PRIYA: Plug the phones back in. HUGH: Why? PRIYA: So we can hear what people actually think.
[beat 27] Hugh gulps. The wheel jolts. It starts to descend.
[beat 28] CORKY: That's going to be loud. HUGH: How loud? CORKY: Gondola loud.
[beat 29] The wheel carries them down into the noise of the city.

### SCENE s00724 | INT. CURLING RINK - 5 A.M.
Characters: INGRID SOLBERG, KAMALA JOSHI
[beat 0] Empty ice. Frost smoke on the boards. A zamboni hums somewhere far off.
[beat 1] INGRID SOLBERG, thirties, national-team jacket, sits on the hack with a polishing cloth. She buffs one granite stone. Slow circles. Calm.
[beat 2] She sets it down. Picks up another.
[beat 3] A door CLANKS at the far end. Footsteps on rubber matting. Ingrid doesn't look up.
[beat 4] KAMALA JOSHI, twenties, rookie, duffel bag, bright eyes. Too bright. She stops at the boards.
[beat 5] KAMALA: You're early. INGRID: Always. KAMALA: Coach said six. INGRID: Coach says a lot.
[beat 6] Kamala steps onto the ice. Slides carefully. Settles on a bench near the house.
[beat 7] KAMALA: I watched your Oslo final. Eleven times. INGRID: Then you know the ending. KAMALA: She misses the draw. You win.
[beat 8] INGRID: She doesn't miss. I did.
[beat 9] Kamala laughs. Ingrid doesn't. The cloth keeps circling.
[beat 10] KAMALA: I'm second skip. They told me last night.
[beat 11] Ingrid's hand stops. A breath. She sets the stone down gently.
[beat 12] INGRID: Did they say whose spot? KAMALA: No. Just that it's open. INGRID: It's not open.
[beat 13] She stands. Walks to the sheet. Her jacket reads CAPTAIN in small stitching.
[beat 14] INGRID: I signed the release at midnight.
[beat 15] Kamala's face falls. KAMALA: You quit? INGRID: I was cut. She was told to keep it quiet until you'd arrived.
[beat 16] KAMALA: Who told you? INGRID: Coach. Same one who said six.
[beat 17] She holds out the stone's handle to Kamala. INGRID: Throw it. KAMALA: I don't-- INGRID: Throw it. I want to see what they chose.
[beat 18] Kamala takes the handle. Sets her feet. Pushes. The stone glides, long and clean, to the button.
[beat 19] Ingrid watches it stop. A small nod. INGRID: Good.
[beat 20] She picks up her bag and walks off the ice.

### SCENE s00725 | INT. BOWLING ALLEY - LANE 9 - ARBITRATION HEARING - DAY
Characters: ARBITRATOR HELENA MBEKI, SUNITA KAPOOR, CONRAD ASHWORTH, DMITRI VOLKOV, PAULINA ZAJAC
[beat 0] A defunct bowling alley, repurposed. Folding tables over the gutters. A pin-setting machine looms behind the panel like a sleeping beast.
[beat 1] ARBITRATOR HELENA MBEKI, sixties, reading glasses on a chain, presides from the scoring desk. At the left table: attorney SUNITA KAPOOR, forties, crisp navy suit. At the right: attorney CONRAD ASHWORTH, fifties, rumpled tweed. In the witness chair, a plastic bowling seat: DMITRI VOLKOV, sixties, retired foreman, hands folded. At a small side table, court reporter PAULINA ZAJAC, twenties, fingers poised.
[beat 2] Quiet. Pins rattle faintly somewhere behind a wall.
[beat 3] HELENA: We are on the record. Mr. Volkov, you've been sworn. DMITRI: I have.
[beat 4] SUNITA: Mr. Volkov, thank you for coming. I'd like to ask about the night of the fourteenth. DMITRI: Of course.
[beat 5] SUNITA: You were foreman on the closing shift at the Calloway plant? DMITRI: Twenty-two years. SUNITA: And that night, you signed the safety log? DMITRI: I did. As I always did.
[beat 6] SUNITA: Was the lockout valve on press four engaged? DMITRI: It was.
[beat 7] CONRAD: Objection. Leading. HELENA: Overruled, Mr. Ashworth. She is asking for a fact. CONRAD: Then I'll hold my fire, Madam Arbitrator.
[beat 8] SUNITA: Mr. Volkov. Was the valve engaged? DMITRI: Yes. SUNITA: You're certain. DMITRI: I checked it with my own hand.
[beat 9] SUNITA: And yet the incident report states that press four cycled at eleven forty. DMITRI: It did. SUNITA: How is that possible if the valve was engaged?
[beat 10] DMITRI: Because I disengaged it at eleven thirty-five.
[beat 11] PAULINA: Could the witness repeat that? DMITRI: I disengaged it at eleven thirty-five.
[beat 12] CONRAD: Madam Arbitrator, may we have a moment?
[beat 13] HELENA: No. Mr. Volkov, why would you do that? DMITRI: Because Mr. Calloway's son told me to. He said the order was behind. He said nobody would be near it.
[beat 14] SUNITA: Was anyone near it? DMITRI: My nephew. Nikolai. He was cleaning the die.
[beat 15] HELENA: Ms. Kapoor, do you have further questions?
[beat 16] SUNITA: Only one. Mr. Volkov, why did you sign the log? DMITRI: Because they said they would pay for his hospital. And I did not know how to say no.
[beat 17] CONRAD: I withdraw my objection. And I withdraw my client's motion. HELENA: Mr. Ashworth? CONRAD: My client wishes to settle.
[beat 18] HELENA: Ms. Zajac, strike nothing. PAULINA: Yes, ma'am.
[beat 19] HELENA: We are adjourned.

### SCENE s00726 | INT. CHURCH BASEMENT - ROLLER DERBY LOCKER ROOM - NIGHT
Characters: TAMSIN FAIRWEATHER, NANA OKONKWO, ROSA ESPINOZA, KIT HALVORSEN, YUKI TANABE
[beat 0] Folding chairs. A Sunday-school felt board still reading LOVE THY NEIGHBOUR. Five women lace skates under a flickering bulb.
[beat 1] TAMSIN FAIRWEATHER, thirties, captain, tapes her wrist. NANA OKONKWO, twenties, jammer, bounces a knee. ROSA ESPINOZA, forties, blocker, eats a banana. KIT HALVORSEN, nineteen, rookie, stares at her laces. YUKI TANABE, thirties, ref in stripes, sits apart with a clipboard.
[beat 2] TAMSIN: Kit, you're good? KIT: Fine.
[beat 3] NANA: She's not fine. She's looking at her shoes. ROSA: Leave her, Nana. NANA: I'm just saying. First bout.
[beat 4] Kit pulls a lace tight. Snaps it.
[beat 5] KIT: It's a church basement. How scary can it be?
[beat 6] YUKI: Last month somebody lost a tooth in the nave.
[beat 7] Silence. Rosa chews her banana.
[beat 8] TAMSIN: Alright, listen. Keep your heads up and your elbows in. No heroics. NANA: No heroics. ROSA: Some heroics.
[beat 9] Tamsin grins. Stands. The felt board rattles on its easel.
[beat 10] TAMSIN: Let's go.

### SCENE s00727 | INT. ORBITAL GREENHOUSE RING - NIGHT CYCLE
Characters: CAPTAIN ADEOLA NWOSU, LEIF ARNARSON, ENGINEER MIRA SOLANKI
[beat 0] Curved rows of tomato vines under violet grow-light. Condensation beads on the inside of the viewports. Earth hangs in the glass like a bruised plum.
[beat 1] CAPTAIN ADEOLA NWOSU, fifties, grey at the temples, sits on an upturned crate, peeling an orange with a care that suggests she has no intention of eating it. Opposite, botanist LEIF ARNARSON, forties, kneels at a tray of seedlings, misting them one by one. ENGINEER MIRA SOLANKI, thirties, leans on a pipe rack with a wrench she isn't using.
[beat 2] Nobody speaks for a long time. A pump ticks. Leif counts leaves under his breath.
[beat 3] ADEOLA: Mira, the coolant loop. MIRA: Holding. ADEOLA: Good.
[beat 4] Leif sprays the last seedling and wipes his hands on his trousers, slowly, one finger at a time. Mira turns the wrench over, sets it on the rack, picks it up again. Adeola finishes the orange, lays the peel in a single unbroken spiral on her knee, and does not look at either of them.
[beat 5] LEIF: You'll be fine. You'll all be fine. MIRA: Leif. LEIF: I'm talking to the plants.
[beat 6] ADEOLA: Everyone is fine. Dinner at nineteen hundred.
[beat 7] She stands. The peel falls. Mira steps over it without comment. Leif reaches for it, then stops, hand hovering.
[beat 8] A soft chime from the wall panel. Amber light slides across all three faces. Nobody moves toward it.
[beat 9] LEIF: That's the pressure alert. MIRA: It's been doing that. ADEOLA: I know.
[beat 10] Mira finally crosses to the panel. Reads it. Her thumb presses the screen, once, as if testing for a pulse.
[beat 11] She turns, and her face gives away what she doesn't say. Leif sees it.
[beat 12] He sits down on the floor between the trays, knees up.
[beat 13] Adeola walks to the viewport, her reflection laid over the Earth. ADEOLA: Eleven days.
[beat 14] Mira picks up the peel from the floor and holds it out to Leif. He takes it. They look at each other, and then at the captain's back, and no one asks.

### SCENE s00728 | INT. SECRETARY'S OFFICE, NEW YORK INSURANCE COMPANY - NIGHT (1927)
Characters: MILLICENT HARGROVE
[beat 0] A cramped office after hours. A single green-shaded lamp. Filing cabinets crowd the walls like silent clerks. On the desk, a bulky wax-cylinder dictating machine, horn pointed up.
[beat 1] MILLICENT HARGROVE, thirties, trim in a navy dress, hair pinned firm, sits very straight. She winds the crank with a gloved hand and adjusts the horn.
[beat 2] MILLICENT: Testing. Millicent Hargrove, Policy Division, March the ninth, nineteen twenty-seven. If this is heard, the ledger in the lower drawer is the true one.
[beat 3] She stops the machine. Presses a lever. The cylinder spins back, crackling. MILLICENT: ...the ledger in the lower drawer is the true one.
[beat 4] She nods, satisfied.
[beat 5] Then her eyes lift to the frosted glass of the door. A shadow passes slowly. She holds perfectly still.
[beat 6] The shadow stops. The doorknob rattles. MILLICENT: Not yet. Not yet.
[beat 7] She snatches the cylinder from the machine and wraps it in her scarf. The knob turns again. She slides the lower drawer open, drops the bundle inside, locks it, and pockets the key in her stocking.
[beat 8] The door opens a crack. Lamplight catches the edge of a man's hat.
[beat 9] Millicent lifts her chin and smiles the brightest smile of her life. MILLICENT: Come in, do. I've only just finished.

### SCENE s00729 | EXT. CABLE CAR - ABOVE A GORGE - DUSK
Characters: BRONWYN DAVIES, TEO, BIANCHI, SAMIRA HADDAD, KWAME BOATENG, ASTRID NYGAARD, HIRO, KAWAGUCHI
[beat 0] A steel gondola dangles over a mile of nothing. Wind. Fog beneath. Six strangers are packed inside, breathing hard.
[beat 1] BRONWYN DAVIES, fifties, retired nurse. TEODORO "TEO" BIANCHI, twenties, backpacker. SAMIRA HADDAD, forties, mother, clutching a thermos. KWAME BOATENG, sixties, engineer, calm. ASTRID NYGAARD, thirties, runner. HIROSHI "HIRO" KAWAGUCHI, eighties, quiet, folded into the corner.
[beat 2] The car swings once. Settles.
[beat 3] KWAME: Everyone breathe. It's a power cut. The backup will come on. SAMIRA: How long? KWAME: Twenty minutes. Maybe thirty.
[beat 4] TEO: It's been forty. KWAME: Then it's coming.
[beat 5] ASTRID: I run this gorge every Sunday. There's a ranger hut on the north side. If we climb out-- BRONWYN: We are not climbing out. ASTRID: It's four hundred feet to the ridge. BRONWYN: It's four hundred feet in the wrong direction.
[beat 6] HIRO: Please. The car rocks. SAMIRA: He's right. Nobody move.
[beat 7] TEO: I have a radio on my phone. No bars. KWAME: Try the emergency channel. TEO: It's not that kind of phone. ASTRID: Then why do you have it? TEO: For music. BRONWYN: Lord.
[beat 8] SAMIRA: There is water in the thermos. Tea. We share. KWAME: Small sips. SAMIRA: Hiro, you first. HIRO: Thank you.
[beat 9] BRONWYN: Hiro, how are you feeling?
[beat 10] HIRO: I am eighty-four. I have been in worse. In fifty-eight, I was in a cave for two days. TEO: What happened? HIRO: We sang. ASTRID: Sang what? HIRO: Whatever we knew. Bad songs. Many verses.
[beat 11] SAMIRA: Let's do that then. KWAME: Singing in a swaying car is not-- BRONWYN: Kwame, let the man have his song. KWAME: Fine. But quietly.
[beat 12] HIRO: I know one. TEO: Go.
[beat 13] HIRO: "Hotaru no hikari..." SAMIRA: I know this one! It's the school tune. BRONWYN: Auld Lang Syne. We all know it.
[beat 14] ASTRID: "Should auld acquaintance be forgot..." TEO: I don't know the words. KWAME: Hum.
[beat 15] All six now. Low. Wind carries them across the dark.
[beat 16] A groan from above. The cable shudders. Everyone stops.
[beat 17] ASTRID: Did that-- KWAME: Don't say it. TEO: It's the wheel. It's coming back on.
[beat 18] BRONWYN: Or it's the other thing. SAMIRA: What other thing? KWAME: There's no other thing. HIRO: There is always another thing.
[beat 19] The car lurches. A hiss, a clunk. The lights stutter on. Motor whirs.
[beat 20] TEO: YES! ASTRID: Oh thank God. SAMIRA: Hiro, you did it. HIRO: The song did it.
[beat 21] The gondola begins to move. Slow. Steady. Toward the lit station.
[beat 22] BRONWYN: Funny. It's going the wrong way. KWAME: That's not the station.
[beat 23] The lights ahead are a ranger hut. A single window. A figure with a rifle.
[beat 24] SAMIRA: Kwame? KWAME: Nobody say anything.

### SCENE s00730 | INT. WIZARD'S ABANDONED LIBRARY - TWILIGHT
Characters: ORRIN THISTLEDOWN
[beat 0] A circular chamber at the top of a leaning tower. Shelves spiral to a ceiling lost in cobweb. Dust hangs in the last red light from a cracked rose window. On a lectern in the centre lies an enormous book, its pages stirring though there is no wind. The silence is old and settled.
[beat 1] A heavy door groans. Boots on stone.
[beat 2] ORRIN THISTLEDOWN, sixties, a thin man in a patched travelling cloak, enters leaning on a gnarled staff. He is breathing hard from the stairs. A wiry grey beard, spectacles tied with twine. He pauses, taking in the room as one takes in a grave.
[beat 3] ORRIN: Well. You kept it tidy, old friend.
[beat 4] He crosses to the lectern. Brushes dust from the open page with the back of his hand. Reads. His lips move.
[beat 5] From his satchel he draws a folded letter, brown at the edges. He smooths it on the lectern beside the book.
[beat 6] ORRIN: "Orrin, if you read this, I am gone, and the tower is yours. The book will not open for anyone but you. Do not be afraid of it. It is only lonely."
[beat 7] Orrin lowers the letter. He looks up at the rose window, where the last sun is bleeding out.
[beat 8] ORRIN: Lonely. Aye. So are we.
[beat 9] He sets his staff against the shelves, rolls up his sleeves, and turns the first page.
[beat 10] A faint golden glow rises from the paper and catches in his spectacles. ORRIN: There you are.
[beat 11] The pages begin to turn on their own, one after another, patient as breathing. Orrin pulls up a stool and sits.

### SCENE s00731 | INT. FUNICULAR TICKET HOUSE - NIGHT
Characters: LOLA ITURBE, JULIAN ASANTE-WRIGHT
[beat 0] Closed for the season. Rain on the glass. A brass ticket machine. A space heater ticking orange.
[beat 1] LOLA ITURBE, thirties, wool coat, soaked hair, sits on the counter with a thermos. Alone. She stares at the dead cable car through the window.
[beat 2] She sips. Checks her watch. Sips.
[beat 3] The door BANGS open. Wind. Wet leaves.
[beat 4] JULIAN ASANTE-WRIGHT, late thirties, rain-slicked trench, a suitcase in one hand. He stops dead.
[beat 5] JULIAN: You're not supposed to be here. LOLA: Neither are you.
[beat 6] He shuts the door. It takes two tries. She watches him fight it. He doesn't say thanks.
[beat 7] JULIAN: The last train left at nine. LOLA: Eight forty. JULIAN: Eight forty.
[beat 8] He sets the suitcase on the floor. Looks at the heater. She slides the thermos along the counter. He doesn't take it.
[beat 9] JULIAN: Is that coffee? LOLA: Tea. JULIAN: Right.
[beat 10] He takes it. Sips. Grimaces.
[beat 11] JULIAN: That's awful. LOLA: It's chamomile. It's meant to be.
[beat 12] She smiles. Barely. He almost does.
[beat 13] He sits on the bench by the wall. She stays on the counter. Rain drums.
[beat 14] JULIAN: How long have you been here? LOLA: Since six. JULIAN: Why? LOLA: I had a ticket. JULIAN: For the nine o'clock?
[beat 15] LOLA: For the one last year.
[beat 16] He looks at her. Slowly she takes a crumpled ticket from her pocket. Holds it up, a stub, brown at the corners.
[beat 17] He recognises it. His jaw tightens.
[beat 18] JULIAN: Lola. LOLA: You never came. JULIAN: I wrote.
[beat 19] LOLA: You wrote a postcard. Of a lighthouse. JULIAN: It was a nice lighthouse.
[beat 20] She laughs, short and sharp. He doesn't.
[beat 21] LOLA: It's a year, Julian. A year since I stood on that platform. JULIAN: I know. LOLA: No, you don't. You were in Lisbon.
[beat 22] JULIAN: I was in a hospital.
[beat 23] Silence. The heater ticks. LOLA: What?
[beat 24] JULIAN: My mother. She had a stroke the night before. I couldn't-- LOLA: You never said. JULIAN: You never asked.
[beat 25] She slides off the counter. Crosses to him. He stands.
[beat 26] LOLA: I waited here. Alone. I thought you'd-- JULIAN: Stop. LOLA: I thought you'd chosen not to-- JULIAN: Lola, stop.
[beat 27] She doesn't. He steps closer. Her hands are shaking. So are his.
[beat 28] LOLA: You could have called. JULIAN: She was dying. I was holding her hand! LOLA: And I was holding a ticket!
[beat 29] The words hang. Rain slams the glass. Both breathe hard.
[beat 30] He reaches out. She slaps his hand away. He catches her wrist anyway. Neither pulls back.
[beat 31] JULIAN: She's alive. LOLA: What? JULIAN: She recovered. She asks about you every week.
[beat 32] Lola's face crumples. She sags against him, forehead to his collar. His arms close around her. The suitcase tips over. Neither notices.
[beat 33] LOLA: Idiot. JULIAN: Yes.
[beat 34] He rests his chin on her hair. She grips his coat in both fists.
[beat 35] The funicular lights flicker. A distant mechanical hum starts up. The cable car, far above, begins to move.
[beat 36] They both lift their heads and stare. JULIAN: That's not scheduled. LOLA: Then let's see where it goes.

### SCENE s00732 | EXT. OPEN OCEAN - INFLATABLE DINGHY - DAY
Characters: GUNNAR PEDERSEN, FELIX ODUYA, TARIQ MANSOOR
[beat 0] A grey swell lifts the orange raft and lets it fall again, patient as a hand. The sky has no edges. Three men lie in the bottom of the boat like fish nobody wanted.
[beat 1] GUNNAR PEDERSEN, fifties, sunburnt to the colour of brick, tends a bailing cup. FELIX ODUYA, thirties, the youngest, stares at his own cracked palms. TARIQ MANSOOR, forties, the engineer, sits upright against the pontoon with the last water jug cradled in his lap.
[beat 2] GUNNAR: Give him some. TARIQ: He had his share. GUNNAR: He is shaking. TARIQ: He is cold. He is not thirsty.
[beat 3] Felix lifts his head. His lips are split. FELIX: I can hear it. Listen. A motor. Gunnar and Tariq both go still. Wind. Slap of water on rubber. Nothing. TARIQ: You hear the sea. FELIX: It's a motor.
[beat 4] He lurches to his knees, rocking the raft. Gunnar grabs the rope. Tariq clutches the jug. Felix stands, arms high, waving at the empty horizon, shouting a name nobody recognises. GUNNAR: Sit, boy. Sit.
[beat 5] Felix collapses. The jug tilts. A mouthful of water spills across Tariq's knees. He stares at it, soaking into the cloth.
[beat 6] Then, very slowly, he lifts the jug and offers it across the raft. His hand shakes. He is not looking at either of them. TARIQ: Drink.

### SCENE s00733 | INT. SALT MINE - SEALED CHAMBER, DEPTH 600 FEET - NIGHT SHIFT
Characters: FOREMAN AUGUSTIN BRANDT, PETRU VASILE, HANNELORE KRUG, JIN-HO PARK, MBALI DLAMINI
[beat 0] A cathedral of white. Walls of rock salt rise forty feet, glittering where the lamps touch them. Iron rails vanish into a black tunnel to the east, now choked with rubble. The air is dry as paper.
[beat 1] FOREMAN AUGUSTIN BRANDT, fifties, broad as a doorway, stands with his back to the rubble, his lamp swinging. Around him, four miners have gathered: young PETRU VASILE, nineteen, still clutching a lunch tin; veteran HANNELORE KRUG, sixties, a woman with a face like a closed fist; JIN-HO PARK, thirties, the surveyor, unrolling a map; and the new hire, MBALI DLAMINI, twenties, who has not yet been told she is useful.
[beat 2] AUGUSTIN: We are not in danger. We are in a pause. PETRU: How long is a pause? AUGUSTIN: Until they dig.
[beat 3] JIN-HO: The east shaft is gone. But the old ventilation line runs north. HANNELORE: Old is the word. JIN-HO: I'm only saying it exists.
[beat 4] Mbali sets her pack down. Takes out a thermos. Sets it on a salt block. Her hand does not shake, and the others notice it does not. MBALI: There's water for three days if we're careful. AUGUSTIN: Three days is plenty.
[beat 5] He smiles. It does not reach his eyes. Hannelore sees it. Jin-ho sees her seeing.
[beat 6] Petru offers his lunch tin around. Everyone declines. He tucks it back in his jacket and pats it twice, as if it were a pet.
[beat 7] Behind them, a low crack. A thin seam opens in the wall. Salt dust drifts like snow. All five heads turn. All five stop breathing.
[beat 8] AUGUSTIN: That's the rock settling. HANNELORE: Rock does not settle at six hundred feet. JIN-HO: It does if it's being told to.
[beat 9] They scatter, five lamps flinching in five directions, then regroup at the far wall. Mbali is the first to speak.
[beat 10] MBALI: Foreman. How many were in the east tunnel when it came down? Augustin looks at her. The seam widens, a soft hiss of wind from somewhere that should not have wind.
[beat 11] AUGUSTIN: Eight. Silence.
[beat 12] PETRU: But we counted five. AUGUSTIN: Yes.
[beat 13] Hannelore takes a slow step back. Mbali's lamp catches the seam. Behind it, something pale shifts, and a hand, human, reaches out and curls around the salt.

### SCENE s00734 | INT. SKI LODGE - IMPROVISED TRIAGE ROOM - NIGHT
Characters: ELSPETH VANTERPOOL, WILLA PETTIGREW, NURSE BUNMI OYELARAN, JOAQUIM PINTO, STRANGER, DAMIAN
[beat 0] Blizzard shakes the shutters. The dining hall has been cleared, tables pushed to the walls, a stretcher laid across the cloth of the nearest. DR. ELSPETH VANTERPOOL, fifties, in a borrowed fleece, leans over WILLA PETTIGREW, thirties, a skier with a deformed shin who clenches a lodge napkin in her teeth. NURSE BUNMI OYELARAN, twenties, cuts the ski boot with trauma shears while ski patroller JOAQUIM PINTO, forties, braces Willa's shoulders and murmurs nonsense about the weather.
[beat 1] In the corner, a STRANGER in a soaked parka stands by the fireplace. Nobody asked him in. He watches the leg, not the face.
[beat 2] ELSPETH: Pulse in the foot? BUNMI: Faint. JOAQUIM: She's going white. ELSPETH: Joaquim, keep her talking. Bunmi, traction splint.
[beat 3] The Stranger steps forward, takes the splint from the cabinet, and unfolds it in one smooth motion. Bunmi blinks. Elspeth glares.
[beat 4] ELSPETH: Who the hell are you? STRANGER: Damian Kowalczyk. Paramedic. Truck's buried at the pass.
[beat 5] He kneels. Elspeth studies him a second, nods once, and shifts her hands to make room.
[beat 6] Willa spits out the napkin. WILLA: Is he going to cut it off? DAMIAN: No. I'm going to pull. You're going to hate me.
[beat 7] Together the three of them lock the leg and take the weight. The room holds its breath.

### SCENE s00735 | INT. MINIVAN - INSIDE AN AUTOMATIC CAR WASH TUNNEL - DAY
Characters: DESMOND, PRU, ROXY, POP-POP
[beat 0] Dark suds slide down the windshield in sheets. Blue light, pink light, a roar of brushes. The Okafor-Lindgren family sits sealed inside a rocking cocoon: DESMOND, fifties, gripping the wheel at ten and two though the van is on rails; his wife PRUDENCE "PRU", fifties, turned sideways in the front seat; their daughter ROXANNE "ROXY", sixteen, wedged in back with her knees against her chest; and Pru's father BARTHOLOMEW "POP-POP", eighties, queen of the back seat, tucked in a plaid blanket and a hat.
[beat 1] DESMOND: Nobody touch the doors. PRU: Nobody is touching the doors. ROXY: Mom, I'm literally nowhere near the doors.
[beat 2] POP-POP: Is it raining? PRU: No, Daddy, it's a car wash. POP-POP: Whose car? DESMOND: Ours. POP-POP: I thought it was Desmond's. DESMOND: It is mine. Ours. It's our car.
[beat 3] ROXY: Pop-Pop, you've been in a car wash before. POP-POP: Not with a family in it.
[beat 4] PRU: Desmond, the foam's coming in the vent. DESMOND: It is not coming in the vent. ROXY: It's coming in the vent. DESMOND: Roxy, don't help. ROXY: I'm not helping, I'm reporting.
[beat 5] POP-POP: Roxanne, you look like your grandmother when you frown. ROXY: Is that good? POP-POP: She frightened me in the nineteen-sixties and I married her. PRU: Daddy, we've heard.
[beat 6] DESMOND: Pru, tell your father not to say "frightened me" while I'm in a tunnel. PRU: He can say what he wants. POP-POP: I'm eighty-four.
[beat 7] ROXY: You're eighty-four and you're the reason we're in here. You said the van smelled like soup. POP-POP: It did smell like soup.
[beat 8] DESMOND: It smelled like Pru's lasagne. PRU: Excuse me? DESMOND: I like the lasagne! PRU: You said it smelled. DESMOND: Everything smells! It's a van!
[beat 9] ROXY: Dad, the sign says "Put in neutral." DESMOND: I know what it says. PRU: Are you in neutral? DESMOND: I am in neutral. POP-POP: Is it neutral? DESMOND: It's neutral, Bartholomew. POP-POP: Don't take that tone.
[beat 10] ROXY: Dad, you're supposed to be in neutral and also not touching the brakes. DESMOND: I'm not touching the brakes! PRU: Your foot is on the brake. DESMOND: My foot is hovering. ROXY: Hovering on the brake.
[beat 11] POP-POP: Is that why the brushes are stuck? Everyone falls silent. The brushes slap the roof, steady, thudding, oddly intimate. PRU: Desmond. DESMOND: It's fine. ROXY: Is it fine? DESMOND: It's fine!
[beat 12] The brushes lift. A wave of warm air blows through the tunnel. Pop-Pop begins to laugh, a wheeze that grows and grows, and one by one the others join him, helpless, water running down the glass.

### SCENE s00736 | INT. HEDGE-WITCH'S COTTAGE - KITCHEN - EVENING
Characters: SERAPHINA QUILL
[beat 0] A low-beamed room. Bunches of dried thyme and nettle hang from the rafters. A kettle sings on a cast-iron stove. Through a small window, an orchard is going dark.
[beat 1] SERAPHINA: I know you are in there! I can hear you chewing!
[beat 2] Thumping on the stairs. SERAPHINA QUILL, seventies, small and broad, in a flour-dusted apron, stumps into the kitchen with a broom in one hand. She stops. The kitchen is empty. She looks under the table, behind the door, in the wood-bin.
[beat 3] She scowls. She lowers the broom. SERAPHINA: Fine. Keep it.
[beat 4] She goes to the stove and moves the kettle off the heat. She finds a clay cup on the shelf and pours something dark and steaming. She drinks. She pulls a stool to the table and sits heavily.
[beat 5] Her eyes drift to a stoppered bottle on the sill. Inside, a pale blue light pulses once, then dims. She watches it for a while. SERAPHINA: Thirty years, you stubborn thing.
[beat 6] She takes the bottle down and holds it in both hands. The light brightens at her touch. She smiles, tired but real.
[beat 7] SERAPHINA: Go on, then. I'm too old to keep a ghost in a bottle.
[beat 8] She pulls the stopper. The blue light drifts out in a slow curl, circles the kitchen once, kisses the dried thyme, and slips through the glass of the window into the dusk.
[beat 9] She sits there until the cup has gone cold. Then she gets up, wipes her hands on her apron, and starts to chop an onion.

### SCENE s00737 | INT. FAMILY HOME - DINING ROOM - AFTER THE FUNERAL
Characters: AUGUSTINE PELLEGRINI, PHILIPPA
[beat 0] Casserole dishes crowd the long walnut table, foil peeled back, forks standing in them like flags in captured ground. The guests have gone. Only the photographs remain, a hundred faces watching from the sideboard.
[beat 1] AUGUSTINE PELLEGRINI, seventies, stiff in his black suit, stands at the head of the table counting plates. His daughter PHILIPPA, forties, leans in the doorway still wearing her coat and her black gloves, keys in her fist like a dagger.
[beat 2] AUGUSTINE: Thank you all for coming. Truly. Your kindness is a comfort. PHILIPPA: Dad. They've left. AUGUSTINE: Eddie, will you have more of the ham?
[beat 3] Philippa pulls her gloves off one finger at a time. Her father stacks two plates, sets down a third, picks up a fourth, and arranges them in a tower that shivers under his shaking hand.
[beat 4] She crosses to him. He steps aside, and she takes the stack and slides it back onto the table. He takes it again. She takes it back. They stand, hands on china, eye to eye, neither letting go.
[beat 5] PHILIPPA: She isn't coming home, Dad. AUGUSTINE: Two years of pills in the green bowl. PHILIPPA: Dad.
[beat 6] AUGUSTINE: You were in Denver!
[beat 7] The plates slip. They crash. The sound rolls through the house and out into the quiet street, and neither of them moves to pick up a single shard.

### SCENE s00738 | EXT. HOT-AIR BALLOON BASKET - 2,000 FEET - SUNRISE
Characters: GERALDINE PLUMMER, PERCIVAL
[beat 0] A wicker basket the size of a closet drifts over a patchwork of farmland. Gold light. Cows like grains of rice.
[beat 1] GERALDINE PLUMMER, sixties, floral scarf, holds a flask of champagne. Her husband PERCIVAL, sixties, straw hat, grips the burner cord with the stiff calm of a man who doesn't know what it does.
[beat 2] GERALDINE: It's lovely. PERCIVAL: It is. GERALDINE: Forty years, and you finally took me up. PERCIVAL: Forty-one. GERALDINE: Forty-one.
[beat 3] She pours two paper cups. They clink. They sip. Silence. The burner hisses.
[beat 4] PERCIVAL: Geraldine. There's something I should tell you. GERALDINE: Oh?
[beat 5] PERCIVAL: The pilot didn't come. GERALDINE: What do you mean? PERCIVAL: The man at the field. He had a cold. He said, "You can manage." GERALDINE: Percival. PERCIVAL: I read the manual. GERALDINE: Percival! PERCIVAL: It's a very short manual.
[beat 6] The basket tilts. A gust. Geraldine grabs the rope.
[beat 7] GERALDINE: How do we land? PERCIVAL: It says: "Gently." PERCIVAL: Don't panic! GERALDINE: I'm not panicking!
[beat 8] They both scream as the balloon lurches toward a barn.

### SCENE s00739 | EXT. ALPINE BIVOUAC LEDGE - NIGHT
Characters: LUCIEN DUMONT, ODALYS FERRAND
[beat 0] A narrow shelf of rock, two thousand feet above a sleeping valley. Snow hisses against a tiny orange tent pitched at an angle that argues with gravity. A stove burns blue.
[beat 1] LUCIEN DUMONT, forties, bearded, ice in his moustache, stirs a pot of soup. Beside him, ODALYS FERRAND, thirties, wrapped in a sleeping bag, her knees drawn up, sips from a battered tin mug.
[beat 2] ODALYS: It's quiet, Lucien. LUCIEN: Too quiet, Oddy? ODALYS: No. Just quiet. LUCIEN: Good. We deserve it.
[beat 3] He ladles soup into her mug. She smiles, small and grateful. They sit watching the stars come out above the ridge. Far below, tiny lights flicker in a village.
[beat 4] ODALYS: Tomorrow, the summit. LUCIEN: Tomorrow, the summit. ODALYS: And a hot bath. LUCIEN: And a hot bath.
[beat 5] She leans her head on his shoulder. He lets her. For a moment, nothing in the world is wrong.
[beat 6] Then a thin hiss. Not the stove. Odalys lifts her head. Lucien freezes, ladle in the air. Both listen. The ice above them creaks.
[beat 7] ODALYS: Lucien-- LUCIEN: Don't move.
[beat 8] They both look up. A crack runs across the overhang, bright and fine as a hair. LUCIEN: We have to go. ODALYS: We have to go.
[beat 9] They scramble. He grabs the rope, she grabs the pack. The tent lurches. Soup spills, hissing on the stove. LUCIEN: Clip in! Clip in, Oddy! ODALYS: I'm clipped, I'm clipped!
[beat 10] They tumble out of the tent together and dive into the snow at the ledge's edge as the overhang breaks free and thunders past. The tent is gone in a white roar.
[beat 11] The avalanche dies into silence. They lie panting, tangled in the rope, their breath mingling in clouds. ODALYS: Well. That was quiet. LUCIEN: Very.

### SCENE s00740 | INT. SYNERGY CLOSET - OFFICE SUPPLY ROOM - DAY
Characters: MORTIMER GRAY, LAKSHMI IYER, DUNCAN OKORO
[beat 0] A converted broom closet with a laminated sign reading SYNERGY CLOSET: THINK BIG. Shelves of sticky notes and toner. Three colleagues stand shoulder to shoulder with nowhere to put their elbows: MORTIMER GRAY, fifties, regional director; LAKSHMI IYER, thirties, project lead; DUNCAN OKORO, twenties, intern.
[beat 1] MORTIMER: Right. Let's circle back on the circle-back. LAKSHMI: We circled back last week. MORTIMER: And what did we learn? LAKSHMI: That we should circle back.
[beat 2] DUNCAN: Sorry, can I ask what the project is? MORTIMER: The project is alignment. DUNCAN: Aligned with what? MORTIMER: With the vision. LAKSHMI: Which is? MORTIMER: It's in the deck.
[beat 3] LAKSHMI: The deck is forty slides and slide nine is a picture of a canoe. MORTIMER: It's a metaphor. DUNCAN: For what? MORTIMER: For paddling. LAKSHMI: Together. MORTIMER: Exactly. Thank you, Lakshmi.
[beat 4] DUNCAN: I thought we were going to cancel the thing. MORTIMER: What thing? DUNCAN: The thing that the other thing replaced. LAKSHMI: Duncan, that was the original thing. DUNCAN: Oh.
[beat 5] MORTIMER: We don't cancel things. We sunset them. LAKSHMI: Sunset them how? MORTIMER: Gently. With a runway. DUNCAN: What's at the end of the runway? MORTIMER: Another meeting. LAKSHMI: Of course it is.
[beat 6] DUNCAN: Do you have to be in the closet for this? MORTIMER: The conference room is booked. LAKSHMI: For what? MORTIMER: A meeting about the closet.
[beat 7] DUNCAN: I need to get toner. MORTIMER: Take whatever you need. This is a safe space. LAKSHMI: It's a closet. MORTIMER: A safe closet.
[beat 8] DUNCAN: Is anyone writing this down? MORTIMER: No. That's the beauty of it.

### SCENE s00741 | INT. RAILWAY WAITING ROOM - NIGHT (1884)
Characters: HARRIET COLLINGWOOD, MAN, ELIAS
[beat 0] A cold hall of benches and a cast-iron stove. Gaslight hisses. Snow has stopped the last train.
[beat 1] MRS. HARRIET COLLINGWOOD, sixties, in black bombazine, knits by the stove. A MAN in a worn greatcoat sits on the far bench, hat low, a carpetbag between his boots.
[beat 2] MAN: Good evening, ma'am. HARRIET: It is not, sir. It is snowing. MAN: So it is.
[beat 3] She knits. The needles click. He rubs his hands.
[beat 4] MAN: Are you waiting for the Dover connection? HARRIET: I am waiting for my nephew. He is meant to meet me. MAN: In this? HARRIET: He is a very unreliable young man. The man laughs, a short warm sound.
[beat 5] HARRIET: And you, sir? You have the look of a person who has been waiting longer than a night. MAN: Twenty years, ma'am. My name is Elias Fairchild.
[beat 6] Harriet's needles stop. She looks up for the first time.
[beat 7] HARRIET: Fairchild. You are Charles's brother. ELIAS: I am. HARRIET: He spoke of you with great bitterness. ELIAS: He had cause.
[beat 8] She resumes knitting. After a moment she pats the bench beside her. Elias crosses the hall and sits.

### SCENE s00742 | INT. COUNTY COURTHOUSE - ATTORNEY-CLIENT ROOM - MORNING
Characters: ARTEMIS CROSS, ROLLY, PEARCE
[beat 0] A grey cube. Metal table. Two chairs. A buzzing fluorescent.
[beat 1] ARTEMIS CROSS, forties, public defender, sits with a thick file, pen clicking. She doesn't look up.
[beat 2] The door buzzes and swings open. Chains. A shuffle.
[beat 3] ROLLAND "ROLLY" PEARCE, twenties, county orange, cuffs front, wide shoulders, thin voice, enters. The door slams behind him.
[beat 4] ARTEMIS: Sit down, Rolly. ROLLY: Ms. Cross. ARTEMIS: Artemis is fine. ROLLY: Ms. Cross is fine.
[beat 5] He sits. She slides a photograph across the table. He doesn't look at it.
[beat 6] ARTEMIS: Do you know that man? ROLLY: No. ARTEMIS: He says he knows you. ROLLY: People say things.
[beat 7] ARTEMIS: He said you were at the Dockside on the twelfth. ROLLY: I was home. ARTEMIS: Alone? ROLLY: With my cat. ARTEMIS: Rolly, the cat can't testify. ROLLY: Then you're in trouble.
[beat 8] She stops clicking. Locks eyes with him. ARTEMIS: Listen to me. The DA offers eight years. Eight, Rolly. If we go to trial and lose, it's twenty. ROLLY: And if we win? ARTEMIS: You walk. ROLLY: Then we win. ARTEMIS: That's not how it works. ROLLY: That's how I want it to work.
[beat 9] She flips a page. Reads. Turns another.
[beat 10] ARTEMIS: The man in the photo recanted this morning. ROLLY: What? ARTEMIS: The witness changed his story. ROLLY: That's good.
[beat 11] ARTEMIS: It's complicated, because someone leaned on him. And I think you know who. Rolly stares at the table. The fluorescent buzzes.
[beat 12] ROLLY: Ms. Cross. If I say a name, can you keep it in this room? ARTEMIS: That's the whole point of the room.
[beat 13] He leans forward. She lays down the pen.

### SCENE s00743 | INT. COURTHOUSE ELEVATOR - DAY
Characters: NKIRU EZEIGBO, WYATT MERRIWEATHER, TOMASZ KOWAL, JUDGE REYNOSO
[beat 0] Stainless steel. Mirrored door. Four floors of descent.
[beat 1] NKIRU EZEIGBO, thirties, defence attorney, bangs her briefcase against her knee. WYATT MERRIWEATHER, forties, prosecutor, studies the floor numbers. TOMASZ KOWAL, fifties, bailiff, keeps both hands on his belt.
[beat 2] The car shudders. Lights flicker. The elevator stops between floors. NKIRU: Of course. WYATT: It does this. TOMASZ: Fourth time this month.
[beat 3] Nkiru's cell phone buzzes. She answers on speaker. JUDGE REYNOSO: Counsel. Where are you? NKIRU: Stuck, Your Honour. JUDGE REYNOSO: Both of you? WYATT: Mr. Kowal is with us. JUDGE REYNOSO: I'm calling the jury. You have ten minutes.
[beat 4] NKIRU: Wyatt, we need to settle. WYATT: I know. NKIRU: Then why did you reject my offer? WYATT: Because you didn't make one. NKIRU: I'm making one now. WYATT: I'm making one now.
[beat 5] Silence. They glare at each other in the mirror.
[beat 6] TOMASZ: For what it's worth, I'd take it.
[beat 7] Lights return. The elevator drops with a lurch. All three grab the rail.

### SCENE s00744 | INT. NORMANDY FARMHOUSE - CELLAR - NIGHT (1944)
Characters: MARGUERITE LEBLANC
[beat 0] Stone steps. Sacks of seed potatoes. Wine racks lie smashed. A single oil lamp throws a trembling circle on the floor. Above, the rhythmic thud of distant artillery sifts dust from the beams.
[beat 1] MARGUERITE LEBLANC, thirties, war correspondent, trench coat torn at the shoulder, kneels over a wire recorder balanced on a crate. Her hands are steady. Her face is not.
[beat 2] She threads the wire through the reel. Listens upward. Threads it again.
[beat 3] She presses the record lever. A red light glows. MARGUERITE: This is Marguerite LeBlanc. The ninth of June, nineteen forty-four. I am in a cellar outside Carentan. The Germans are in the next field.
[beat 4] A shell lands close. Dust rains. She flinches, covers the recorder with her body, then straightens. MARGUERITE: They have been shelling for six hours. I have no food. I have a notebook and this machine.
[beat 5] She stops. Rewinds. Plays it back. MARGUERITE: "...I have no food. I have a notebook and this machine."
[beat 6] She grimaces. Presses stop. Presses record again. MARGUERITE: Correction. I have a notebook, this machine, and half a tin of sardines.
[beat 7] A wry twist of her mouth. She opens the tin with her penknife. Eats one fish with her fingers.
[beat 8] Upstairs, a door BANGS. Boots on boards. She goes still. She slides the tin under the crate. She extinguishes the lamp with her palm.
[beat 9] Darkness. Only the faint red glow of the recorder. She smothers it with her coat.
[beat 10] Boots cross the floor above, step by step. Dust trickles. Her breath is shallow and quick.
[beat 11] The boots stop directly overhead. A floorboard creaks. She does not move. She does not blink.
[beat 12] A voice mutters in German. A second answers, lower. A laugh. The boots move away toward the front door.
[beat 13] She exhales, long and slow. Lifts the coat. The recorder's red eye glows, defiant.
[beat 14] She relights the lamp with trembling fingers. She pulls the microphone to her mouth. MARGUERITE: They have gone. For now.
[beat 15] She winds the wire back. Plays. MARGUERITE: "They have gone. For now."
[beat 16] She stares at the spinning reel. Then she reaches for her notebook and begins to write, fast, the pencil scratching in time with the shells.
[beat 17] Another shell lands. Closer. Plaster falls from the ceiling and settles in her hair.
[beat 18] She keeps writing. MARGUERITE: The cellar door is the only way out. It is locked from the outside.
[beat 19] She stops. Looks at the stairs. The top step is bright with a thin line of lamplight from under the door.
[beat 20] She rises, climbs three steps, and tests the handle. It does not give. MARGUERITE: Naturally.
[beat 21] She descends. Sits again at the recorder. Presses record. MARGUERITE: If this recording is found, please send it to the Daily Courier, London. Tell them I filed on time.
[beat 22] She smiles at that. It does not last.
[beat 23] The ceiling groans. A crack runs along the central beam. Sand drips in a steady stream.
[beat 24] She gathers the notebook and the reel into her satchel. She slings it across her chest. She climbs the stairs, braces her shoulder against the door, and shoves. Once. Twice.
[beat 25] The wood creaks but holds.
[beat 26] She steps back, breathing hard, and looks for something. Anything. Her eyes land on the broken wine rack. She grabs a splintered post.
[beat 27] She wedges it under the latch. She leans her whole weight on it.
[beat 28] The door cracks. Light spills down the steps. She shoves harder, teeth bared.
[beat 29] The door gives. She tumbles into a kitchen with half a roof, and lies on the floor for one breath, two, in the red glow of a burning barn through the window.
[beat 30] She sits up. Checks the satchel. The reel is intact. MARGUERITE: Filed.
[beat 31] She stands, pulls the coat tight, and walks out into the firelight.

### SCENE s00745 | INT. PLANETARIUM DOME - AFTER HOURS
Characters: IMOGEN VASSEUR, TAVIAN OKONJO
[beat 0] The false sky hangs overhead, a hush of ten thousand painted stars. Reclined seats form concentric rings below. The projector at the centre hums like a sleeping animal.
[beat 1] IMOGEN VASSEUR, thirties, in a green coat, sits in the third row with her shoes off, one foot tucked beneath her. Beside her, TAVIAN OKONJO, thirties, tie loosened, holds a paper bag of roasted chestnuts, steam curling from the top.
[beat 2] TAVIAN: Orion. IMOGEN: That's Cassiopeia. TAVIAN: It has a belt. IMOGEN: It has a W.
[beat 3] They laugh and reach into the bag at the same moment. Their hands collide inside it. They both freeze, fingers touching chestnut shells, the heat of the paper between them. Neither pulls away.
[beat 4] Overhead, the sky rotates one degree. A meteor streaks across the dome, projected, perfect.
[beat 5] IMOGEN: Tavian. I got the fellowship.
[beat 6] His fingers loosen. The bag tilts. Chestnuts roll out across the seat and fall one by one into the dark. He does not catch them.
[beat 7] TAVIAN: Where? IMOGEN: Santiago.
[beat 8] They both look up at a sky that suddenly seems very large.

### SCENE s00746 | EXT. JUNGLE CLEARING - CRASHED BUSH PLANE - DAY
Characters: CORA, MALABANAN, IFEOMA NNADI, GRETCHEN HOLM
[beat 0] The fuselage lies like a dead insect, one wing crumpled against a kapok tree. Steam rises from the earth. Insects drone.
[beat 1] CORAZON "CORA" MALABANAN, forties, pilot, sits on the wing with her leg splinted in a map. IFEOMA NNADI, thirties, geologist, kneels at a stream, filling bottles. GRETCHEN HOLM, twenties, intern, paces with a hand over her mouth.
[beat 2] CORA: Gretchen, sit. GRETCHEN: I can't. CORA: You can. You're just choosing not to.
[beat 3] IFEOMA: Water's clean. I tested it. GRETCHEN: How do you test water? IFEOMA: I drank a mouthful an hour ago. I'm still here. CORA: Practical.
[beat 4] IFEOMA: Cora, how long until the beacon pings? CORA: Two days. Maybe three. GRETCHEN: Maybe four! CORA: Maybe four.
[beat 5] Ifeoma crosses and hands Cora a bottle. Cora drinks and passes it to Gretchen, who drinks and hands it back, shaking.
[beat 6] GRETCHEN: It's so quiet. IFEOMA: It isn't. Listen.
[beat 7] They listen. The drone swells. Under it, something rhythmic. Wood on wood.
[beat 8] CORA: That's a drum. GRETCHEN: Is that good? IFEOMA: Possibly. CORA: Possibly not.
[beat 9] They look at each other. The drumming stops. A hush falls, absolute.
[beat 10] GRETCHEN: What does that mean? CORA: It means they know we're here. IFEOMA: It means they've been watching us.
[beat 11] Both women speak at once, voices overlapping. Gretchen backs toward the plane. GRETCHEN: Who are "they"?
[beat 12] The bushes part. A line of figures in painted masks emerges silently. The three women stand shoulder to shoulder.
[beat 13] CORA: Nobody run.

### SCENE s00747 | INT. VENDING MACHINE REPAIR DEPOT - WAREHOUSE FLOOR - MORNING
Characters: DELIA ACHTERBERG, NORBERT PIMM
[beat 0] Rows of dead snack machines stand against the corrugated walls, dozens of glass faces glowing faintly with the light of nothing. A forklift idles in an aisle. The air smells of cold coffee and burnt wiring.
[beat 1] DELIA ACHTERBERG, forties, in an orange safety vest two sizes too big, perches on a stool among the machines with a clipboard on her knee. She has been counting the same row for an hour. Her pen taps once for each machine, a metronome of grievance.
[beat 2] The service door clangs open. Sunlight cuts across the floor. NORBERT PIMM, fifties, regional quality manager, enters in a pressed suit and shiny brogues, carrying a leather folio and the faint air of a man who has never once been in a warehouse. He stops. He sees the machines. He sees Delia. He smiles.
[beat 3] NORBERT: Delia! There you are. DELIA: Here I am. NORBERT: I come bearing news. DELIA: You always do.
[beat 4] Norbert advances through the aisle, picking his way between puddles of oil, and sets the folio on a machine labelled OUT OF ORDER. Delia lifts her pen and sets it down on the clipboard without a sound. Norbert opens the folio, closes it, opens it again, and places a single sheet of paper in her lap.
[beat 5] NORBERT: Your position has been reclassified. DELIA: To what? NORBERT: Synergy Associate. DELIA: That's not a job. NORBERT: It's a journey.
[beat 6] She stands. The clipboard slides to the floor. She takes a step toward him and he takes one back, bumping a machine, which dispenses a lone packet of crisps with a mechanical sigh. Both of them look at it in silence.
[beat 7] DELIA: Eleven years, Norbert. NORBERT: And we value every one of them.
[beat 8] She picks up the crisps. Tears the packet. Eats one, slowly, looking at him, and drops the empty bag at his feet.
[beat 9] DELIA: That machine has been broken since 2019. NORBERT: Then it's an exciting time for it.
[beat 10] Delia laughs, a low terrible sound, and then she is not laughing, and the forklift beeps in the distance like a heart monitor in the quiet.

### SCENE s00748 | INT. CORPORATE OFFICE - 31ST FLOOR - MORNING
Characters: HORTENSE BELLWEATHER, ARCHIBALD DRUMMOND
[beat 0] An open-plan floor of the sort that wins architecture awards and loses employees. Glass walls. Beanbags nobody sits in. A kombucha tap that dispenses nothing.
[beat 1] In the corner office, behind a desk the size of a landing strip, sits HORTENSE BELLWEATHER, fifties, in a charcoal suit and a necklace of tiny silver clocks. She has the posture of a woman who has survived four mergers.
[beat 2] On the desk, a speakerphone the colour of an old tooth. Beside it, a cold cup of tea.
[beat 3] She stares at the phone. It blinks green.
[beat 4] HORTENSE: Archibald. Speak. ARCHIBALD: Hortense! Morning! Lovely morning. Are you looking out the window? HORTENSE: I'm looking at my screen. ARCHIBALD: Look out the window.
[beat 5] She turns her chair. Across the plaza, in the opposing tower, a man in a cream suit waves from the thirty-first floor. ARCHIBALD DRUMMOND, sixties, silver hair, big teeth. He holds his own phone to his ear and waves with the other hand.
[beat 6] HORTENSE: You moved your desk to face mine. ARCHIBALD: Corporate suggested "transparency." HORTENSE: Corporate suggested "dialogue." ARCHIBALD: Transparency is dialogue with glass.
[beat 7] Hortense sets her tea down. She does not smile. The clocks on her necklace jingle.
[beat 8] HORTENSE: What do you want? ARCHIBALD: A little chat. About the Henderson account. HORTENSE: The Henderson account is mine. ARCHIBALD: Is it? HORTENSE: I won it. ARCHIBALD: You did. In 2016.
[beat 9] She taps a pen on the desk. Across the plaza, Archibald pulls a thick binder from a drawer and holds it up to the glass, like a magician showing an empty hat. HORTENSE: What's that? ARCHIBALD: The reorganisation.
[beat 10] HORTENSE: I wasn't consulted. ARCHIBALD: You were cc'd. HORTENSE: On a Friday at five. ARCHIBALD: Best day for news.
[beat 11] She rises and crosses to the window, pressing a hand to the cold glass. Down below, the plaza fountain is dry, its basin full of cigarette butts and coins. A pigeon bathes in the dust.
[beat 12] HORTENSE: Under the plan, who reports to whom? ARCHIBALD: You report to me. HORTENSE: Say that again. ARCHIBALD: You. Report. To me.
[beat 13] Hortense nods slowly. She returns to her chair. She picks up the speakerphone and brings it close, until her mouth is inches from the grille.
[beat 14] HORTENSE: Archibald. How many years have you worked here? ARCHIBALD: Nineteen. HORTENSE: And how many have I? ARCHIBALD: Thirty-one. HORTENSE: Thirty-one. Do you know what I've learned? ARCHIBALD: That silence is golden? HORTENSE: That people with binders are afraid of people without them.
[beat 15] Across the plaza, Archibald's smile flickers. He lowers the binder. ARCHIBALD: Hortense, this isn't personal. HORTENSE: It's the most personal thing in this building.
[beat 16] She opens a drawer. Withdraws a single sheet of paper and a gold fountain pen. She uncaps the pen with a small, decisive click. She writes. The nib scratches. Across the way, Archibald leans forward, squinting.
[beat 17] ARCHIBALD: What are you doing? HORTENSE: Redistributing.
[beat 18] She holds the sheet to the window. Large block letters, readable even at forty yards: I RESIGN. EFFECTIVE IMMEDIATELY. TAKE THE KOMBUCHA.
[beat 19] Archibald's mouth opens. The binder slips from his hands. He bends to retrieve it and bumps his head on the desk.
[beat 20] ARCHIBALD: Hortense! HORTENSE: Goodbye, Archibald.
[beat 21] She presses the button. The line clicks dead. She gathers her tea, her pen, and a single silver clock from the necklace, which she unhooks and places on the desk like a chess piece.
[beat 22] Then she walks out, heels ringing on the polished floor, past the empty beanbags and the silent tap, and into the elevator.
[beat 23] Across the plaza, Archibald presses his face to the glass. Behind him, the floor has gone very quiet.

### SCENE s00749 | INT. TAXIDERMIST'S WORKSHOP - NIGHT
Characters: BASTIAN VOLKERS, SOLENE, MERIEL, ROYSTON, GIRL, PIA
[beat 0] A long room of glass eyes. Foxes, owls, a stag with one antler snapped. Moonlight crawls over the benches. A power cut has stopped the wall clock at 2:14.
[beat 1] Five people stand in the dark with a single torch: BASTIAN VOLKERS, forties, who owns the place; his sister SOLENE, thirties; their cousin MERIEL, twenties; the neighbour ROYSTON, sixties; and a GIRL, perhaps ten, in a nightgown, whom no one has invited.
[beat 2] BASTIAN: Who let you in? The Girl says nothing. She stares at the stag.
[beat 3] SOLENE: Bas, she's soaked. Look at her feet. MERIEL: Where are your parents, sweetheart?
[beat 4] The Girl lifts a hand and points. Not at any of them. At the stag. Her fingers tremble.
[beat 5] ROYSTON: Child, that's a dead deer.
[beat 6] GIRL: He said I could sleep in him. They freeze. The torch jerks. Light skates across the glass eyes, and every one seems to turn.
[beat 7] BASTIAN: Who said? GIRL: My name is Pia.
[beat 8] Behind her, the stag's head slowly lowers. PIA: He's very warm.

### SCENE s00750 | INT. CITY BANK - SUBTERRANEAN VAULT - NIGHT
Characters: SABINE ARROWOOD
[beat 0] A cathedral of steel. Rows of safe-deposit boxes climb the walls, thousands of little brass doors. Cold light from a single emergency strip. The great round door stands ajar, its locking bolts retracted like the fingers of a sleeper.
[beat 1] Empty. Silent. A single security camera turns on its bracket and finds nothing.
[beat 2] A footfall on the stairs. Another. Then the quiet scrape of a crowbar being laid down.
[beat 3] SABINE ARROWOOD, forties, enters in a black jumpsuit, gloves tucked in her belt, a canvas bag over one shoulder. Dark hair under a cap. She pauses at the door, looks at the open bolts, and smiles slightly as if at a private joke. SABINE: Sloppy.
[beat 4] She crosses the vault, runs a gloved finger along the boxes. Stops at number 4417.
[beat 5] She reaches into her bag and takes out a small recorder. She clicks it on.
[beat 6] SABINE: "If you're hearing this, Sabine, the door will be open, and the box will be empty. Don't panic. That's the plan."
[beat 7] Sabine stares at the recorder. Her smile fades. She clicks it off.
[beat 8] She slides the key into 4417. Turns. The door swings open. Nothing inside but a folded note.
[beat 9] She unfolds it. Reads. SABINE: Clever girl.
[beat 10] She pockets the note, shoulders the bag, and strides to the open vault door. Alarms stay silent. She pauses at the threshold, glances back at the shining wall of boxes, and shuts the great door behind her.

### SCENE s00751 | INT. ABANDONED CANNERY - PROCESSING FLOOR - NIGHT
Characters: IVO HARTLEY-SPAN, PUSHPA RANA, LEOPOLDO MENDES, QUILLA ASHFORD, CEDRIC FAIRBANKS, MAEVE O'DWYER
[beat 0] A hangar of rust and rain. Long steel conveyors run the length of the building like the ribs of a drowned whale. Windows are blind with salt. Somewhere beneath the planks, the tide breathes in and out through broken pilings, and the whole floor sighs with it. A string of work lights, powered by a coughing generator outside, strings pale yellow beads down the aisle.
[beat 1] A documentary crew has made camp among the vats. Six people, six camp chairs, a scatter of cables.
[beat 2] IVO HARTLEY-SPAN, fifties, director, a vast man in a linen coat, sits with a clipboard balanced on his belly. PUSHPA RANA, thirties, sound recordist, holds a boom mic like a fishing rod and listens to the dark with half-closed eyes. LEOPOLDO MENDES, twenties, camera operator, wipes a lens with a spotless cloth he has wiped it with already. QUILLA ASHFORD, thirties, producer, has a phone pressed to her ear and a frown carved between her brows. CEDRIC FAIRBANKS, sixties, the historian, wears a tweed cap and quotes from a leather notebook. MAEVE O'DWYER, forties, the local guide, stands apart with her arms crossed, looking at nothing.
[beat 3] IVO: Let's roll on the long shot. Leo, can you keep the conveyor in frame? LEOPOLDO: It's in frame. IVO: Beautiful. Pushpa? PUSHPA: Room tone's good. There's a hum. IVO: The generator? PUSHPA: Lower.
[beat 4] Ivo lowers the clipboard. Pushpa tilts the boom toward the floorboards, then toward the rafters, then back to the floor, as if tracking a small animal. Leopoldo pans slowly across the vats, and Cedric, noticing the lens, straightens his cap and clears his throat for the camera. Quilla drops the phone into her lap and rubs her eyes with the heel of her hand.
[beat 5] QUILLA: No signal. Again.
[beat 6] CEDRIC: "The Hallam Cannery closed in nineteen fifty-three, following an accident on the lower line in which nine workers were lost."
[beat 7] MAEVE: Eleven. CEDRIC: I beg your pardon? MAEVE: Eleven were lost. Nine is what the paper said.
[beat 8] Cedric blinks. He flips the page of his notebook, finds nothing to correct her, and closes it. CEDRIC: Local knowledge. Invaluable. MAEVE: It isn't knowledge. It's my grandmother.
[beat 9] IVO: Maeve, would you be willing to say that on camera? MAEVE: Not tonight. IVO: Tomorrow, then.
[beat 10] MAEVE: We won't be here tomorrow.
[beat 11] Silence. The tide sighs under the floor. The generator coughs outside, catches, coughs again. Pushpa turns slowly and looks at Maeve over the boom.
[beat 12] PUSHPA: Why not? MAEVE: Because nobody stays past three. QUILLA: That's marvellous. We'll put that in the trailer.
[beat 13] LEOPOLDO: What happens at three? MAEVE: Nothing. That's what they say. Nothing happens.
[beat 14] Ivo sets the clipboard on the floor. He rises with an effort, takes a torch from his bag, and walks to the nearest conveyor. He runs the beam along its length. Rust. Dust. A single glove, small, stiff, grey with age. IVO: Well. Somebody's been here.
[beat 15] He bends to pick it up.
[beat 16] Before his fingers touch it, the work lights flicker. Cedric steadies his cap. Quilla stands. Pushpa lowers the boom. Leopoldo turns the camera toward the dark end of the hall, and for a long moment all six of them listen to the building listening back.
[beat 17] The lights steady. Nothing has changed. Only the glove, now, is on the other side of the conveyor.
[beat 18] LEOPOLDO: Did anyone see that move?
[beat 19] Nobody answers. Ivo straightens, wipes his hand on his coat, and walks back to his chair with the careful tread of a man pretending not to hurry.
[beat 20] IVO: Right. Let's get the interviews done by two. CEDRIC: Two? IVO: Just in case.
[beat 21] Maeve looks at him for the first time with something like approval. Quilla sits. Pushpa lifts the boom. The hum of the generator rises, falls, rises again, like breath.
