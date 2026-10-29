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
Write the scenes as JSON Lines (one object per line) in THREE files with the Write tool: scenes 1-30 to /home/user/screenwrite-analyzers/data/analyzers/labels/desc/part_006_a.jsonl, 31-60 to /home/user/screenwrite-analyzers/data/analyzers/labels/desc/part_006_b.jsonl, the rest to /home/user/screenwrite-analyzers/data/analyzers/labels/desc/part_006_c.jsonl. No other text in the files. Reply only with "done N".

## Scenes

### SCENE s00572 | INT. HOLLOW OAK MARKET - NIGHT
Characters: ORSOLYA, BRANWICK, PIPKO, HAJI TESFAYE
[beat 0] A trunk wider than a barn, hollowed out and hung with lanterns. Stalls climb the inner walls on rope ladders. Fireflies drift between the rafters. The air smells of resin and hot sugar.
[beat 1] At a low stall: ORSOLYA, 40s, apothecary, moth-wing scarves wrapped to the elbow, ink on her fingertips. Sells lanterns. None are lit.
[beat 2] BRANWICK, 60s, a retired knight whose armor is long gone, wears a farmer's coat that doesn't fit his shoulders. He stands before the stall with his hat in his hands.
[beat 3] ORSOLYA: Walking light or hanging light? BRANWICK: Hanging.
[beat 4] She lifts a small tin lantern. He doesn't look at it. BRANWICK: Bigger. ORSOLYA: For a barn? BRANWICK: For a window.
[beat 5] She sets down the tin one. Lifts a larger one with a blue glass panel. ORSOLYA: Blue's for waiting. BRANWICK: That one's fine.
[beat 6] PIPKO, 9, ash on her cheek, apprentice, sits cross-legged behind the counter threading wicks. She watches Branwick without pretending not to. PIPKO: He bought a blue one last year. ORSOLYA: Pipko. PIPKO: Same shoes. Same hat. He turned it in his hands like that.
[beat 7] Branwick turns the hat in his hands. Stops. BRANWICK: Lantern's broke. The window lets in a draft. ORSOLYA: The window. BRANWICK: Yes.
[beat 8] She nods, as if this is a perfectly reasonable thing. She wraps the lantern in cloth.
[beat 9] A third voice, from above: HAJI TESFAYE, 70s, a merchant lowering himself down a rope ladder with a basket of candles, one hand over the other. TESFAYE: Orsolya! The Duskwife says the wicks need wax by morning! ORSOLYA: Then she can have wax by morning. TESFAYE: Evening, Sir Branwick. BRANWICK: Not "Sir." TESFAYE: Evening, Branwick.
[beat 10] Branwick counts coins into Orsolya's palm. Too many. She slides two back, firmly, and he pockets them without a word.
[beat 11] PIPKO: You have to light it from a flame that someone gave you. Not one you made. BRANWICK: I know the rule. PIPKO: Last year's was still burning when I walked past the barn.
[beat 12] Silence. Orsolya reaches under the counter and takes out a stub of candle, already lit. She offers it to him in a clay dish. ORSOLYA: Mine. Take it.
[beat 13] He takes the dish with both hands, as if it might spill. Tesfaya sets down the basket and starts to hum something old.
[beat 14] BRANWICK: How much for the wax? ORSOLYA: Nothing. Bring the dish back. BRANWICK: I will.
[beat 15] He settles his hat on his head, tucks the lantern under his arm, and walks off carefully through the hanging lights. PIPKO: He will. ORSOLYA: Thread your wicks.

### SCENE s00573 | EXT. WHALE-RIB BRIDGE - DUSK
Characters: GRUB MAWDLEY, TAMSIN, ROOK, STRANGER, ZEPHYRINE
[beat 0] A bridge of bleached ribs over a gorge. Fog below. A toll hut perched at the midpoint.
[beat 1] GRUB MAWDLEY, goblin, one eye, sits on the toll barrel. Chewing.
[beat 2] Two pilgrims approach: TAMSIN, young, sword too big for her, and ROOK, old, hooded, leaning on a staff. Behind them, a STRANGER in grey rags, bare feet. Silent. Following.
[beat 3] MAWDLEY: Toll. Two coppers. Each. TAMSIN: He's got no right. The queen abolished tolls. ROOK: Queens abolish. Goblins collect. MAWDLEY: Three coppers. I heard that. TAMSIN: Fine.
[beat 4] She counts coins. Mawdley bites each one.
[beat 5] The Stranger steps up beside them. MAWDLEY: And you? Rags. Nothing to pay with? STRANGER: I pay differently. MAWDLEY: Everybody says that. TAMSIN: Don't test him. MAWDLEY: Don't test me.
[beat 6] Tamsin and Mawdley glare at each other. Fog thickens. The ribs begin to hum.
[beat 7] ROOK: Step back. All of you. Now.
[beat 8] The Stranger throws back the hood. Silver hair. Eyes like struck flint. STRANGER: Zephyrine.
[beat 9] Mawdley drops the coin. The bridge SHUDDERS.
[beat 10] ZEPHYRINE: I built this bridge. You've been charging for my bones. MAWDLEY: Oh, no.
[beat 11] The ribs CRACK. Light floods upward from the gorge.

### SCENE s00574 | INT. SIGNAL RELAY HUT - HIMALAYAN PASS - DAY
Characters: HAKIM BARAKZAI, LUCJAN NOWAK, COMMAND, MEDIC ANNELI SAARI
[beat 0] Stone walls. Tin roof ticking in the wind. A hand-crank radio on a plank table. Frost on the window. 1962.
[beat 1] SGT. HAKIM BARAKZAI, 40, beard gone grey at the chin, sits on an ammo crate. Mending a boot. Slow. PVT. LUCJAN NOWAK, 19, shivering, wrapped in two blankets, stares at the stove. Feeds it one stick at a time.
[beat 2] NOWAK: Last of the wood. BARAKZAI: Burn the crate after. NOWAK: Which crate? BARAKZAI: The one you're not sitting on.
[beat 3] Static. A crackle from the radio. COMMAND: Relay Nine, Relay Nine. Report status. Over. Barakzai crosses and takes the handset. BARAKZAI: Command, Relay Nine. Two men. One stove. No contact. Over. COMMAND: Copy two men. Supply drop postponed. Weather. Over. BARAKZAI: Understood. Out.
[beat 4] He hangs up. Nowak keeps his eyes on the flames. NOWAK: That's the third postponement. BARAKZAI: Fourth. You weren't counting.
[beat 5] The door BANGS open. Wind and snow. A figure in a white parka stumbles in, shoulders a medical satchel: MEDIC ANNELI SAARI, 30, Finnish, windburned face, ski goggles pushed up. She slams the door behind her.
[beat 6] SAARI: Which of you is Barakzai? BARAKZAI: Me. SAARI: Good. I walked nine hours. Is there tea? NOWAK: No. SAARI: Is there anything? BARAKZAI: Boiled snow. SAARI: Then boil it.
[beat 7] Nowak scrambles for the kettle. Saari sits heavily next to Barakzai and pulls off a glove, examining her blue fingertips.
[beat 8] BARAKZAI: Command said no supply. SAARI: Command said nothing to me. I was sent for the private's feet. NOWAK: My feet are fine. SAARI: Take your boots off. NOWAK: They're fine. BARAKZAI: Take them off, Lucjan.
[beat 9] Reluctantly, Nowak peels off a boot and a grey sock. The toes are white. Saari looks, then at Barakzai. SAARI: Fine. For now.
[beat 10] COMMAND: Relay Nine, be advised, weather window tomorrow oh-six-hundred. Over. Barakzai doesn't move to answer. He looks at the kettle, at the stove, at the two young faces. BARAKZAI: Tomorrow, then.

### SCENE s00575 | INT. COIN LAUNDROMAT - 3 A.M.
Characters: LINH TRAN, BAO, DI HOA, FAIRWEATHER
[beat 0] Fluorescent hum. Rows of orange plastic chairs. Forty dryers, all still. Rain streaks the plate glass.
[beat 1] LINH TRAN, 32, wiry, scrubs under a parka, stands over a washer holding a pewter urn against her chest. Her brother BAO, 28, in a rumpled suit, blocks the aisle.
[beat 2] BAO: Give it to me. LINH: You said you'd drive it to Da Nang. You haven't left the city in nine years.
[beat 3] At the folding table, their aunt DI HOA, 60s, in a quilted housecoat, folds the same towel again and again. BAO: Mom wanted it scattered. Not carried around in a laundromat. LINH: She wanted it by her sister. DI HOA: She wanted quiet.
[beat 4] They both turn.
[beat 5] Bao lunges for the urn. Linh pivots; the urn swings between them, lid chattering. They both freeze, breath held.
[beat 6] MR. FAIRWEATHER, 70s, the night attendant, cardigan and slippers, shuffles out of the back with a mop and a bucket. FAIRWEATHER: Folks. Closing in ten. LINH: We're not done. FAIRWEATHER: Ten minutes.
[beat 7] Bao and Linh drop their hands at the same moment. The lid slips and lands on the tile with a loud, clear ring. Nobody moves.
[beat 8] Di Hoa stands, steps over, and picks it up. She sets it on the lid of the washer, puts the urn back on top, and clicks it shut.
[beat 9] DI HOA: Both of you. Sit. They sit. The rain keeps falling.

### SCENE s00576 | INT. ABANDONED CANNERY - SUBLEVEL FREIGHT ELEVATOR - NIGHT
Characters: IONA MACREADY, TEDDY BOLA, PRIYA SUNDARAM, GIDEON FARROW, NICO
[beat 0] The cage is the size of a small room, riveted iron gone the color of old blood. A single caged bulb swings on its wire. Below the grated floor, black water slaps against pilings, in no rhythm that a tide would keep.
[beat 1] IONA MACREADY, 30s, the surveyor, holds a clipboard against her chest like a shield. Beside her, TEDDY BOLAÑO, 20s, her assistant, shaves the dust off his lantern's glass with his thumb. DR. PRIYA SUNDARAM, 50s, a marine biologist with cropped silver hair and a field vest of many pockets, crouches to put her ear against the iron floor. Against the far wall, GIDEON FARROW, 70s, the last cannery watchman, leans on a boat hook. Tucked behind his legs, as if he did not want to be seen being there, is NICO, 8, his grandson, in a yellow slicker two sizes too big.
[beat 2] IONA: How many floors down? GIDEON: Four. Maybe five. IONA: The plans say three. GIDEON: The plans say a lot of things.
[beat 3] The cage lurches. The bulb swings wild; shadows leap and tangle on the walls. Nico grabs his grandfather's coat.
[beat 4] PRIYA: Something is moving the water. Not the tide. TEDDY: Maybe a pipe. PRIYA: A pipe doesn't breathe.
[beat 5] They look at her. Water below the floor pulls back, a long slow draw, as if the sea were inhaling. The grating rattles. All five freeze.
[beat 6] NICO: Granddad. It's in the elevator. GIDEON: Hush. NICO: It's under my feet.
[beat 7] The floor grating bulges upward. Pale fingers, too many, slip through the slots. Teddy screams, drops the lantern. Iona yanks Nico into her arms while Gideon swings the boat hook down onto the grate with a hollow clang. The fingers withdraw, quick as eels.
[beat 8] Dark. A pulse of lamplight, then dark again. The bulb flickers back on. Everyone is breathing hard. Nobody speaks. Then:
[beat 9] PRIYA: It didn't want us. It wanted the light. IONA: How do you know? PRIYA: It stopped when the lantern fell. TEDDY: Then we stay in the dark.
[beat 10] GIDEON: We tried that. Nineteen sixty-one. The lamp went out and the crew all rode down singing. Nobody rode back. NICO: Why were they singing? GIDEON: Because it asked them nicely.
[beat 11] The cage drops. Not a lurch this time: a plunge, a controlled, fast, deliberate fall. Iona clutches the clipboard. Priya braces against the wall. Teddy sinks down with his head between his knees. Gideon lifts the hook and holds it level like a lance.
[beat 12] The fall stops. A soft thud. The iron door slides open on its own.
[beat 13] Beyond: a vaulted hall of wet stone, lit by something green and far off. A hum rises, many voices, tuneless, patient, familiar. Nico, in Iona's arms, tilts his head.
[beat 14] NICO: Mama? IONA: No. No, baby. No.
[beat 15] She turns his face into her shoulder. The hum grows warmer, kinder.
[beat 16] TEDDY: I can hear my dad. PRIYA: Everyone, hold your breath. If you can't hear it, it can't use you.
[beat 17] They hold. The hum swells to a sweet pitch, then breaks into a single laugh.
[beat 18] Gideon lowers the boat hook. GIDEON: It's laughing at the rule.
[beat 19] The elevator door starts to close. The five of them stare at the narrowing gap, not one of them moving toward it, and not one of them moving away.

### SCENE s00577 | EXT. GLACIER CREVASSE - DAY
Characters: KWABENA ADDO, BJORN HALVORSEN
[beat 0] Blue walls. Forty feet of ice above, a slot of white sky. Wind whistles across the top like a flute.
[beat 1] At the bottom, on a ledge no wider than a door: KWABENA ADDO, 40s, Ghanaian geologist, burly, beard crusted with frost, left leg bent wrong at the shin.
[beat 2] A rope dangles ten feet above. Swinging. Cut at the end.
[beat 3] Two meters below him, on a lower shelf: BJORN HALVORSEN, 50s, Norwegian guide, lean as a rake, gray eyes, bleeding from his scalp. He doesn't move.
[beat 4] KWABENA: Bjorn. Nothing. KWABENA: Bjorn! The wind. A dripping sound.
[beat 5] Bjorn's hand twitches. Opens. Closes. BJORN: Don't shout. The ice listens. KWABENA: You're alive. BJORN: Don't sound so disappointed.
[beat 6] He rolls to his side. Pushes up on one elbow. Blood runs down his cheek. He wipes it with a glove, stares at the red.
[beat 7] KWABENA: Can you climb? BJORN: Can you? KWABENA: My leg. BJORN: Then no.
[beat 8] Bjorn crawls to the lip of his shelf. Looks up the wall. His breath fogs. He reaches out and grips a protrusion of ice, tests it with his weight. It holds.
[beat 9] KWABENA: He cut the rope. BJORN: Who? KWABENA: Anders. He let go on purpose. BJORN: He was scared. KWABENA: He was a coward. BJORN: Same thing, down here.
[beat 10] Silence. Drips. Far off, a deep CRACK rolls through the glacier like a door slamming in a house the size of a mountain.
[beat 11] Both men freeze. KWABENA: That's close. BJORN: Don't breathe. They don't. Ice dust sifts down. Settles on Kwabena's eyelashes. On Bjorn's shoulders. The crack fades. BJORN: Okay. Now you breathe.
[beat 12] Kwabena lets out a ragged exhale, laughs, coughs. KWABENA: You Norwegians. BJORN: You Ghanaians. KWABENA: What about us? BJORN: You laugh when you should be afraid. KWABENA: I laugh because I am afraid.
[beat 13] Bjorn considers this. Nods. Unslings his pack. Digs.
[beat 14] He pulls out: a coil of thin cord, two ice screws, a pocket knife, half a chocolate bar. BJORN: Inventory. KWABENA: That's all? BJORN: That's all.
[beat 15] He tosses the chocolate. Kwabena catches it one-handed. Breaks it in two. Throws half back. KWABENA: Your turn to eat. BJORN: You're hurt worse. KWABENA: Eat.
[beat 16] Bjorn eats. Chews slowly. Studies the wall.
[beat 17] BJORN: There's a lip. Twelve feet up. Past it, a chimney. KWABENA: You can see that? BJORN: I can see the shadow of it.
[beat 18] He clips an ice screw to his belt. Twists the second between his fingers like a pen. BJORN: I'll go up. Anchor. Drop the cord. KWABENA: And if the ice breaks? BJORN: Then you'll have the chocolate.
[beat 19] Kwabena shakes his head, grinning in spite of himself.
[beat 20] Bjorn plants a boot. Presses a glove to the wall. Begins to climb, metal clicking on blue.
[beat 21] Six feet. Eight. He stops. He's breathing hard, forehead against the ice. KWABENA: Bjorn. BJORN: Quiet.
[beat 22] Another CRACK, closer. Bjorn flattens against the wall. Kwabena braces his good leg against the ledge.
[beat 23] The wall shudders. A sheet of ice the size of a car door sheers away from the opposite side and shatters on the shelf between them.
[beat 24] Silence. Both men stare at the wreckage. BJORN: Now.
[beat 25] He climbs. Fast now. Ten feet. Eleven. His hand finds the lip, grips, pulls. He rolls over the top of the ledge and disappears.
[beat 26] Kwabena waits. Seconds. A minute.
[beat 27] Then the cord drops, snaking down, dancing in the draft. It lands across his lap. BJORN: Tie in. Slowly.
[beat 28] Kwabena ties the cord around his chest, hands trembling. He tugs it twice. Tugs again. KWABENA: Ready.
[beat 29] BJORN: Say it in your language. KWABENA: Say what? BJORN: The thing you say before you do something stupid. KWABENA: Nyame nti. BJORN: That. Do that.
[beat 30] The cord goes tight. Kwabena lifts off the ledge, swinging, grunting, and rises into the white.

### SCENE s00578 | INT. ALLEY LANES BOWLING - BACK ROOM - NIGHT
Characters: DOMMY ESPOSITO, BIG LOU DEVEREAUX, FINGERS MCAVOY, TILLIE KOWALCZYK, JUNE ABERNATHY-SOTO, SANDOVAL
[beat 0] 1950s. A table under a hanging green lamp. Smoke curls up through the cone of light. Through a swinging door, the muffled crash of pins.
[beat 1] DOMMY ESPOSITO, 50, silk vest, pomaded hair, sits at the head of the table dealing a patience hand. At his right, BIG LOU DEVEREAUX, 40s, a mountain in an overcoat, looks at nothing. Opposite them, FINGERS MCAVOY, 30s, nervous, a bandaged hand in his lap. TILLIE KOWALCZYK, 50s, bookkeeper, ledger open, sips cold coffee.
[beat 2] JUNE ABERNATHY-SOTO, 20s, a waitress in a pink uniform, sets a tray of beers on the sideboard and tries to leave unnoticed. DOMMY: Stay a second, June. JUNE: Mr. Esposito, I have the four lanes. DOMMY: Four lanes can wait on a lady. She stays. Stands very still.
[beat 3] TILLIE: The ledger's off by two thousand, Dommy. DOMMY: I know, Tillie. TILLIE: That's not a rounding error. DOMMY: I know.
[beat 4] He turns a card. Red queen. He puts it on a black king.
[beat 5] DOMMY: Fingers. How's the hand? FINGERS: It's getting better. Doc says six weeks. DOMMY: Who did it? FINGERS: A door. DOMMY: A door. FINGERS: Slammed on it. In the garage.
[beat 6] BIG LOU: He's lying, boss. FINGERS: Lou, come on. BIG LOU: You went to the track Tuesday. Sandoval's boys picked you up.
[beat 7] The phone on the sideboard RINGS. Everyone looks at it. It rings again. DOMMY: June. Get that.
[beat 8] She picks it up with two fingers. JUNE: Alley Lanes. SANDOVAL: Put Dommy on. JUNE: Mr. Esposito, it's a Mr. Sandoval.
[beat 9] Dommy takes the receiver, keeps his eyes on Fingers. DOMMY: Ray. Good evening. SANDOVAL: Dommy. Your boy owes me four. DOMMY: Four thousand? SANDOVAL: Four thousand and a hand's worth of apology. DOMMY: You took the hand already. SANDOVAL: I took the hand. I want the four.
[beat 10] Dommy hangs up, gently. Looks at Tillie. At Big Lou. At Fingers, who shrinks.
[beat 11] DOMMY: Tillie. The two thousand that's missing. TILLIE: Yes? DOMMY: It's in Ray Sandoval's pocket.
[beat 12] Fingers puts his good hand over his face. Big Lou stands slowly. Dommy raises one finger and Big Lou sits again.
[beat 13] DOMMY: Sit, Lou. We're a family here. June, honey, bring Fingers a whiskey.
[beat 14] June pours a shot with a trembling hand and sets it in front of him. He doesn't touch it. DOMMY: Drink. It's an order.
[beat 15] Fingers drinks. Dommy turns the next card.
[beat 16] DOMMY: Tomorrow you go pay Ray what you owe, out of your own pocket, over the next ten years. And you thank him. FINGERS: Yes, boss.
[beat 17] DOMMY: Tillie, fix the books. TILLIE: It'll take till Friday. DOMMY: Take till Friday.
[beat 18] Out in the lanes, a ball thunders. Ten pins fall at once. A cheer goes up, far off, innocent.
[beat 19] Dommy places the last card. DOMMY: Game's out.

### SCENE s00579 | EXT. EIFFEL TOWER - SECOND PLATFORM SCAFFOLD - DAY (1888)
Characters: ODETTE LACROIX, JULES PERRIN, INSPECTOR MAXIME BOUCHARD
[beat 0] Wind. Paris spreads below like a map. Iron beams ring with hammers.
[beat 1] She crouches on a plank, a bolt of grey wool across her knees, stitching a harness. ODETTE LACROIX, 22, seamstress, calloused fingertips, a scar on her chin.
[beat 2] Twenty feet off, he walks a girder like a tightrope, a rivet gun on his hip. JULES PERRIN, 25, rivetter, cap low, easy balance.
[beat 3] She doesn't look up. He grins anyway. JULES: That one for me? ODETTE: For whoever falls first.
[beat 4] He crosses the beam. Drops beside her. Close. JULES: Then it's for you.
[beat 5] She bites the thread. Hands him the harness. ODETTE: Put it on.
[beat 6] He does. She tightens the buckle with a brisk tug. He winces and smiles. She doesn't smile.
[beat 7] Her eyes slide to the beam behind him.
[beat 8] A man's head rises from the ladder shaft. Bowler hat. Black coat. Soft hands. INSPECTOR MAXIME BOUCHARD, 50, with a notebook, climbing like a man who hates heights. BOUCHARD: Monsieur Perrin?
[beat 9] Jules turns. Goes still. Odette's needle stops in the wool.
[beat 10] BOUCHARD: The foreman says you were here Tuesday night. JULES: I was home. BOUCHARD: The foreman says otherwise.
[beat 11] Silence. The wind lifts his notebook pages. He grips them.
[beat 12] ODETTE: He was with me.
[beat 13] Bouchard looks at her. A long moment. Then he closes the notebook. BOUCHARD: Of course he was.
[beat 14] He turns and descends the ladder. They watch the bowler vanish. She exhales. He lets his shoulders drop.
[beat 15] JULES: You didn't have to. ODETTE: Yes.
[beat 16] She picks the needle back up.

### SCENE s00580 | EXT. DRIVE-IN SCREEN TOWER - ROOFTOP - NIGHT
Characters: PEPPER, LINDQVIST, MILO ABARA
[beat 0] The back of an enormous white screen, scaffolded and creaking, rises above a field of parked cars. Light from the projection booth spills over the lot like milk. Beyond the fence, cornfields roll dark to the horizon, silent as sea.
[beat 1] On a ladder platform two stories up, PERPETUA "PEPPER" LINDQVIST, 15, sits with her knees pulled to her chin. Her denim jacket is covered in hand-sewn patches, each one a different band. A bag of stolen popcorn sits beside her, untouched. The wind ruffles her short hair. She is watching the lot below as if memorizing it.
[beat 2] Far down the lot, a car door slams. Laughter, faint. Somebody's radio drifts: a slow song.
[beat 3] A boot rings on the scaffold below. Pepper doesn't turn. MILO ABARA, 16, climbs into view, lanky, glasses held to his face with tape at one hinge. He carries a thermos like a trophy. He sees her. Stops.
[beat 4] MILO: I thought nobody came up here. PEPPER: Nobody does. MILO: Then why are you up here? PEPPER: Why are you?
[beat 5] He climbs the last rungs and sits, careful, at the far end of the platform, with the thermos between them like a border. MILO: I work the snack bar. Third night. They don't pay me enough to be nice to people, so on my break I climb. PEPPER: How'd you find it? MILO: Fell off the ladder. Landed on the platform. Saw the view. Fell in love a little. PEPPER: With the view. MILO: With being too high to hear anyone ask for extra butter.
[beat 6] She almost smiles. Doesn't. He unscrews the thermos, pours something steaming into the cap, and holds it out. MILO: Hot chocolate. It's bad. PEPPER: Bad how? MILO: Powdered. Lumpy. But hot.
[beat 7] She takes it. Drinks. Makes a face. Drinks again. PEPPER: It's terrible. MILO: Told you.
[beat 8] PEPPER: My brother used to make it like this. Used to burn it on purpose because he said the burnt part was the good part. MILO: Where is he? PEPPER: Army. Fort something. He sends postcards with no words. Just stamps. MILO: Stamps? PEPPER: He picks the weirdest ones. Last time it was a stamp of a moth. I think it means he's okay. MILO: Or he misses you. PEPPER: Or the post office only had moths.
[beat 9] Milo laughs, too loud. The sound carries. She shushes him, laughing herself, and they both look down.
[beat 10] Below, a flashlight beam sweeps the fence line, bored, unhurried. They both freeze, shoulders touching. Pepper puts a finger to her lips. Milo nods, eyes huge behind his taped glasses.
[beat 11] The beam passes. Slides along the scaffold. Pauses at the platform edge. Passes on.
[beat 12] They breathe again. PEPPER: That's twice you've almost gotten me arrested. MILO: It's the first time we've met. PEPPER: You know what I mean. MILO: I really don't.
[beat 13] PEPPER: Fine. Next time, bring better chocolate. MILO: There's going to be a next time? PEPPER: You tell me. You work here.
[beat 14] Milo goes red to the ears. He fumbles with the thermos cap. Drops it. They both lunge for it and knock heads. Both freeze, rubbing their foreheads, and then both start laughing, silent shaking laughter, hands clamped over their mouths.
[beat 15] Down in the lot, the movie's climactic music swells. A kiss, perhaps, on the big white screen they can't see from behind. A car horn honks, a cheer, a ripple of applause.
[beat 16] Pepper wipes her eyes. The laughter has turned into something else, quieter. She looks at the dark cornfields.
[beat 17] PEPPER: My mom's selling the house in June. MILO: Where are you going? PEPPER: Don't know yet. Somewhere with a lot of stamps, I guess.
[beat 18] MILO: You could stay. PEPPER: With who? Milo looks at his sneakers. At his hands. At the thermos cap in them. MILO: I don't know. Me, maybe. Eventually.
[beat 19] PEPPER: You're sixteen. MILO: Sixteen and a half. PEPPER: That's not a plan, Milo. MILO: It's the start of one.
[beat 20] She looks at him for a long moment. In the light from the booth, her face is open, young, unguarded. PEPPER: Okay. A start.
[beat 21] She takes the thermos cap from his hand, pours a last splash of terrible chocolate, and clinks it against his. PEPPER: To moths. MILO: To moths.
[beat 22] They drink. The song on the radio ends. Another begins.

### SCENE s00581 | INT. NATURAL HISTORY TAXIDERMY HALL - AFTER HOURS
Characters: CURATOR AUGUSTINE FELLOWES-BAI, DETECTIVE ZOFIA ARRINGTON
[beat 0] Glass eyes glitter in the dark. A moth-eaten lion, a mounted heron in mid-strike, a polar bear gone the color of old teeth. The air smells of camphor and lacquer. A single green exit sign makes the room look underwater.
[beat 1] CURATOR AUGUSTINE FELLOWES-BAI, 60, gaunt, white gloves, an enormous ring of keys, stands before the heron with his back to the door. He talks to the bird like an old friend. AUGUSTINE: Not tonight, old man. Tonight they're coming for us.
[beat 2] Heels on marble. DETECTIVE ZOFIA ARRINGTON, 40s, tailored coat, a flashlight she hasn't turned on, steps through the archway. Her eyes find him, then the dark, then him again.
[beat 3] ZOFIA: Mr. Fellowes-Bai. AUGUSTINE: Detective Arrington. You are early. ZOFIA: I'm on time. You said midnight. AUGUSTINE: Did I? I may have meant yesterday's midnight.
[beat 4] He turns. His gloves are white. His hands are not quite steady.
[beat 5] ZOFIA: Whoever's behind the display cases, come out now. Slowly. Silence. Then, from the diorama of an African savannah, a single glass eye catches the exit light and holds it. AUGUSTINE: There's no one. Only the animals. ZOFIA: Every case has a rear panel. Every rear panel has a latch.
[beat 6] She crosses the hall, tests the nearest latch. Locked. She tries the next.
[beat 7] ZOFIA: You said you found the first body at nine. AUGUSTINE: At nine twenty. Under the bear. ZOFIA: Who was it? AUGUSTINE: A boy. Nineteen. A volunteer. ZOFIA: Name? AUGUSTINE: Pellam. Pellam Okonkwo. He cleaned the glass. ZOFIA: And the bear is where? AUGUSTINE: Behind you.
[beat 8] She turns. The polar bear looms in the dark, huge and patient. She switches on the flashlight. The beam finds a stain on the floor, scrubbed, but pale.
[beat 9] ZOFIA: Someone cleaned this. AUGUSTINE: I did. It seemed the decent thing. ZOFIA: Decent. Mr. Fellowes-Bai, that's called tampering. AUGUSTINE: Is it? I thought it was called mercy.
[beat 10] She sweeps the beam up the bear's shoulder, along the fur, to the glass eyes. ZOFIA: Nobody oils a taxidermy bear's joints. AUGUSTINE: I beg your pardon? ZOFIA: The knees. They're oiled. Look. She steps close. The beam picks out a faint sheen, wet, along the hinge of the left hind leg. AUGUSTINE: Maintenance. ZOFIA: At midnight. On a stuffed bear. AUGUSTINE: We are a very careful institution.
[beat 11] ZOFIA: Whoever's inside, you have ten seconds, and then I call it in and every officer in the district comes through that door with dogs. Silence.
[beat 12] Then, slowly, with a click of old brass, the bear's chest opens like a cabinet.
[beat 13] Augustine closes his eyes. AUGUSTINE: Ah.
[beat 14] ZOFIA: Mr. Fellowes-Bai. What is in the bear? AUGUSTINE: Everything I could not bury. ZOFIA: Of course it is.

### SCENE s00582 | EXT. DRY LAKE SALT WORKS - DAY
Characters: MORT GILCHRIST, ABEL STROUD, TENNESSEE PELL, HOLCOMB VANCE
[beat 0] White. Everywhere white. A cracked lakebed baked flat. Heat shimmer swallows the horizon. A rusted rake the size of a gate. Mounded salt in rows like frozen waves. A tin-roofed shack leans against the wind that isn't there. MORT GILCHRIST, 60, owner. Leathery. One suspender. Sits on an overturned bucket in the shack's only shade. Whittling nothing. Beside him, ABEL STROUD, 17, his hired hand. Sunburned nose. Arms like fence rails. Sorting salt crystals into jars.
[beat 1] A cloud of dust on the horizon. Growing. ABEL: Rider. MORT: Two. ABEL: How d'you know? MORT: Dust's got two tails.
[beat 2] The dust resolves into two horsemen. Dark hats. Long coats in the heat. Both with rifles across their saddles. TENNESSEE PELL, 40s, in front. Black beard, a gold tooth that catches the sun. Behind him, HOLCOMB VANCE, 30s, thin, quiet, scar down the throat.
[beat 3] They rein up at the shack. Dismount. Pell takes off his hat. PELL: Water. MORT: Barrel's by the door. Pell dips a tin cup and drinks. Water dribbles down his chin into the salted dust. He hands the cup to Vance, who drinks without wiping it.
[beat 4] PELL: Heard you sell salt. MORT: Heard right. PELL: How much a sack? MORT: Two dollars. PELL: Last man charged me one. MORT: Last man's dead.
[beat 5] Pell laughs. Vance does not. PELL: He said you'd say that.
[beat 6] Abel's hand drifts toward a shovel resting against the wall. Mort pats the air, once, without looking. MORT: Boy. Count the jars. ABEL: I counted. MORT: Count again. Abel counts. His lips move. Pell watches him.
[beat 7] PELL: How old's the kid? MORT: Old enough to count. PELL: Is he yours? MORT: He's his own. PELL: Hm.
[beat 8] Pell takes a pinch of salt from a pile and tastes it. Spits. PELL: That's bitter. MORT: It's lake salt. It's meant to be.
[beat 9] Vance wanders toward the rake. Runs a hand along the rusted tines. Looks at the rows of mounded white, then at Mort. VANCE: Quiet out here. MORT: That's the idea. VANCE: How long you been alone? MORT: Since the wife. VANCE: He didn't say about a wife. MORT: He wouldn't. He never met her.
[beat 10] A long silence. The heat ticks in the tin roof. A fly lands on the lip of the tin cup.
[beat 11] PELL: Two sacks. MORT: Four dollars. PELL: Three. MORT: Four.
[beat 12] Pell reaches into his coat. Abel stiffens. Pell draws out, slowly, a leather purse. Counts four silver dollars onto the bucket lid. MORT: Boy. Load them.
[beat 13] Abel hefts two sacks onto the horses, one by one. Vance steadies the animals with a hand on each nose. Nobody says a word.
[beat 14] Pell mounts. Looks down at Mort. PELL: You ever need a partner? MORT: No. PELL: Thought not.
[beat 15] He turns the horse. Vance follows. The dust takes them, a slow smear of two tails, then one, then none.
[beat 16] Abel exhales. ABEL: Were they gonna? MORT: Maybe. ABEL: What stopped them? MORT: The salt. Nobody robs a man with no water to steal.
[beat 17] He picks up his whittling again. Looks at it, shakes his head. Tosses the stick onto the salt.

### SCENE s00583 | INT. SLEEPER CAR - ORIENT NIGHT EXPRESS - 2 A.M.
Characters: PRUDENCE ACHTERBERG, COLONEL ISAAC DUBOIS-KANE, LALITA SENGUPTA, ENZO MARCHETTI, CECILE VANTERPOOL
[beat 0] Gaslight steady. Curtains drawn. The train hammers through a tunnel. PRUDENCE ACHTERBERG, 50s, in a quilted robe, grips a teacup. Across from her, COLONEL ISAAC DUBOIS-KANE, 70, in pajamas and monocle, thumbs a revolver. LALITA SENGUPTA, 20s, a porter's daughter in borrowed uniform, stands guard by the door. ENZO MARCHETTI, 30s, a violinist, sits sweating by the window. CECILE VANTERPOOL, 40s, in evening gown, lies on the floor between them. Not moving.
[beat 1] PRUDENCE: Colonel, put that down. You'll shoot the wrong one. DUBOIS-KANE: There is no wrong one, madam. Only the guilty and the uncooperative.
[beat 2] ENZO: It was her wine, I tell you. She drank first. LALITA: She did not drink first. You poured. ENZO: I poured for everyone! LALITA: You poured for her twice.
[beat 3] PRUDENCE: Lalita, dear, you are the only one not drinking. LALITA: I'm on shift, Madam Achterberg. DUBOIS-KANE: Then why do you stand at the door? LALITA: Because the last one to leave a murder is the first one accused.
[beat 4] A long beat. The train bucks. The cup rattles in its saucer. Cecile's fingers twitch.
[beat 5] PRUDENCE: Colonel. Her hand. DUBOIS-KANE: By Jove. She's alive.
[beat 6] CECILE: Of course I'm alive. Someone get me out of this dress.

### SCENE s00584 | INT. SERVER ROOM ELEVATOR - NIGHT
Characters: AGENT RAHEL YOHANNES, CORNELIUS BELL
[beat 0] Brushed steel. Humming cold. Floor indicator: 41. 42. 43.
[beat 1] AGENT RAHEL YOHANNES, 30s, black suit, earpiece, one hand inside her jacket, watches the numbers climb while MR. CORNELIUS BELL, 60s, pinstriped, briefcase handcuffed to his wrist, stands at the opposite corner with a smile too relaxed for an elevator at 3 a.m., and neither of them looks at the other until the lights go out and the car stops between floors with a deep, deliberate clunk. Dark. Emergency red. Breathing.
[beat 2] RAHEL: You pressed something. BELL: I did not. RAHEL: Your elbow. BELL: My elbow has been against this wall since the lobby. RAHEL: Then the building is on your side. BELL: Buildings are never on anyone's side, Agent Yohannes. They're just tall.
[beat 3] RAHEL: You know my name. BELL: I know everyone's name. It's most of my job.
[beat 4] RAHEL: Control, I've lost the lift. Repeat, lost the lift. BELL: They can't hear you. This shaft is shielded. RAHEL: By whom? BELL: By me. I paid for it.
[beat 5] RAHEL: Mr. Bell, put the briefcase on the floor. BELL: And if I don't? RAHEL: Then I'll find out how shielded you are.
[beat 6] BELL: Agent, the case is not what you think. It isn't data. It's a key. RAHEL: To what? BELL: To this elevator. To every elevator in the building. At six a.m., the doors open on forty-three floors of sleeping people, and every one of them will be locked inside. RAHEL: Dear God. BELL: Yes. Rather the point.
[beat 7] The red light pulses. The cable above them groans.

### SCENE s00585 | INT. AGING CELLAR - CHEESE CAVE - NIGHT
Characters: GRETA SOLBERG, PASCAL ANTOINE
[beat 0] A limestone tunnel hung with wheels of cheese on pine shelves, rows of pale moons receding into the dark. Cold, wet air. The smell of ammonia and old milk. A red headlamp sweeps the walls. She works alone. GRETA SOLBERG, 40s, compact, grey braid tucked into her collar, a stethoscope looped around her neck and a canvas roll of tools at her hip. She runs her palm along the wall, ear tilted to a hidden hum.
[beat 1] She stops at a barrel marked in chalk. Taps it three times. Taps again, lower.
[beat 2] Behind the barrel: a steel door. Wall-sunk. Painted the same grey as the limestone, but no stone ever gleamed like that.
[beat 3] She sets the stethoscope against the lock. Closes her eyes. Turns the dial a hair. Another. Her mouth moves, counting.
[beat 4] The headlamp flickers. She freezes.
[beat 5] Footsteps. Slow. From the entrance of the cave.
[beat 6] She kills the lamp. Dark. She presses herself behind the barrel, a hand sliding to the pry bar at her belt.
[beat 7] A flashlight beam wanders down the tunnel. Along the shelves. The beam bounces off the cheese rinds, ghost-white.
[beat 8] PASCAL ANTOINE, 30s, climbs into frame. Long coat. Soft hat. A paper bag in one hand, a thermos in the other. He hums, off-key. He's not here for her. He's here for the night shift.
[beat 9] He stops. Sniffs the air. PASCAL: Smells like feet again. He sets his thermos on a shelf. Eats something from the bag. The hum resumes.
[beat 10] She waits, perfectly still. He turns his back and starts to inspect a wheel, tilting it to the light.
[beat 11] She slides out from behind the barrel. One step. Two. Her boots make no sound on the damp stone.
[beat 12] He stops humming. Doesn't turn. PASCAL: You're good. GRETA: You're early. PASCAL: You're late.
[beat 13] He turns, smiling. She lowers the bar. They regard each other for a long moment across the cheese.
[beat 14] PASCAL: Did you get it open? GRETA: Two numbers left. PASCAL: Then let me hold the light.
[beat 15] He flicks on his flashlight, angles it just so. She kneels at the dial. Her hands steady. The lock turns, a soft double click.
[beat 16] The door swings open on darkness and a faint chill of something better than cheese.

### SCENE s00586 | EXT. PIER 9 - PARKED ICE-CREAM TRUCK - NIGHT
Characters: RENATA GUILLORY, VIKTOR LAZAREV
[beat 0] Harbor lights. Gulls asleep on bollards. A white truck with a cartoon cone on its side, awnings rolled, serving window shuttered. Engine ticking as it cools. Inside, a single dome light. RENATA GUILLORY, 40s, wears a chef's apron over a leather jacket. Her wrists are zip-tied to the steering wheel. Blood in one eyebrow. She looks at the man in the passenger seat. VIKTOR LAZAREV, 50s, cleans a pistol with an ice-cream napkin. Salt-and-pepper beard. Soft Russian accent. Very calm.
[beat 1] RENATA: You can't be serious. VIKTOR: I am always serious. It is my curse. RENATA: You're stealing a truck full of Rocky Road. VIKTOR: I am recovering a truck full of something else. RENATA: There's nothing else.
[beat 2] VIKTOR: The second freezer. RENATA: That's for the sprinkles. VIKTOR: Renata. RENATA: Fine. It's for the other thing. VIKTOR: Which is?
[beat 3] RENATA: Four kilos. You know it's four kilos. VIKTOR: I know it was five. RENATA: Four.
[beat 4] VIKTOR: You took one. RENATA: I took what I was owed. VIKTOR: By whom?
[beat 5] RENATA: By you. You didn't pay me for the last three runs. VIKTOR: That is not how it works. RENATA: That is exactly how it works, Viktor. I carry. You pay. This week you didn't.
[beat 6] VIKTOR: I was in Odessa. RENATA: You were in a hotel with a woman. VIKTOR: My wife. RENATA: Your other wife.
[beat 7] A pause. A gull calls from far off. The water slaps against the pilings.
[beat 8] VIKTOR: Who told you? RENATA: I make ice cream. People talk to ice-cream women.
[beat 9] VIKTOR: I am tired, Renata. RENATA: Then go home. VIKTOR: I would like to. But I have a partner who says four when it is five. RENATA: And a partner who says five when it is four. VIKTOR: You have a point.
[beat 10] RENATA: Then cut me loose. VIKTOR: Why? RENATA: So I can show you where the fifth kilo is. VIKTOR: Why would you do that? RENATA: Because I'm tired too.
[beat 11] Long silence. He puts down the napkin. Puts down the gun on the dashboard, barrel pointed at the windshield. Produces a pocket knife and, without looking at her, saws through the tie on her left wrist. VIKTOR: The other one when I see it. RENATA: Fair.
[beat 12] She flexes her freed hand. Reaches under the seat, slowly, and pulls out a battered tin lunchbox. Opens it. Inside, wrapped in butcher paper, a brick the size of a loaf of bread.
[beat 13] VIKTOR: That's it? RENATA: That's it. VIKTOR: Why did you keep it? RENATA: It was insurance. VIKTOR: Against me? RENATA: Against anyone.
[beat 14] Viktor picks up the brick. Weighs it in his palm. Looks out at the dark harbor.
[beat 15] VIKTOR: You know, in Odessa my grandmother sold ice cream from a bicycle. RENATA: Is that true? VIKTOR: No.
[beat 16] He puts the brick back in the lunchbox. Closes it. Sets it between them on the console.
[beat 17] VIKTOR: Keep it. RENATA: What? VIKTOR: Keep it. Pay yourself. Call it back wages.
[beat 18] RENATA: What's the catch? VIKTOR: No catch. I am retiring. RENATA: You can't retire. VIKTOR: I have been retiring for six years. This is the first time anyone believed me.
[beat 19] He cuts the other tie. She rubs her wrists. He holds out his hand. She stares at it. Takes it.
[beat 20] RENATA: Then what do I call you? VIKTOR: Viktor. A man who sells ice cream from a bicycle. RENATA: A bicycle. VIKTOR: Of course.
[beat 21] He opens the door. Steps out into the harbor air. Doesn't look back. The door shuts with a soft thud. The dome light goes dark.
[beat 22] Renata sits in the quiet, the lunchbox beside her, the engine finally silent. She opens the serving window. A cold wind off the water. She breathes.

### SCENE s00587 | INT. GENERATION SHIP "TERRA FIRMA" - HYDROPONICS BAY 4 - NIGHT CYCLE
Characters: CAPTAIN ADAEZE NWOSU, MIKKEL HAVERLAND, SOLENNE ARCHAMBAULT, YUSUF ADEYEMI
[beat 0] Rows of silver trays under violet grow-lamps. Pale lettuce, tomato vines climbing steel trellises. A mist-sprayer hisses at intervals. The deck hums with the slow breath of recycled air. CAPTAIN ADAEZE NWOSU, 50s, stands at a control panel, uniform jacket unbuttoned, tired eyes. Beside her, DR. MIKKEL HAVERLAND, 40s, botanist, a smear of soil on his sleeve. SOLENNE ARCHAMBAULT, 30s, chief engineer, grease to the elbow, leans on a trellis. YUSUF ADEYEMI, 20s, junior technician, perches on an upturned bucket, a tablet on his knees.
[beat 1] ADAEZE: Dr. Haverland, how long? MIKKEL: Three weeks of yield. Four if we ration.
[beat 2] SOLENNE: Four if we cut the second bay. YUSUF: We can't cut the second bay. SOLENNE: We can cut whatever we like. YUSUF: It's the tomatoes. SOLENNE: Yusuf, nobody is dying for a tomato.
[beat 3] ADAEZE: Quiet. All of you. A beat. The mist hisses. Far off, a pump thunks.
[beat 4] ADAEZE: The blight is in Bay Three. If it crosses to Four, we lose the whole deck. I don't want a vote. I want a plan. MIKKEL: The only plan is isolation. We seal Three, burn it. SOLENNE: Burn it? That's six hundred kilos of food. MIKKEL: Contaminated food.
[beat 5] YUSUF: We can't burn it, ma'am. The second generation was born in that bay. ADAEZE: What? YUSUF: The children. They used to play there. Before the sealing. SOLENNE: Yusuf, that's sentiment. YUSUF: It's memory.
[beat 6] ADAEZE: Enough. Mikkel, can you save any of it? MIKKEL: Maybe a tenth. If I graft cuttings now. SOLENNE: A tenth is nothing. MIKKEL: A tenth is seed stock. It's the future. SOLENNE: It's a gamble. MIKKEL: So is everything on this ship.
[beat 7] YUSUF: So we graft? ADAEZE: We graft. And we burn the rest. SOLENNE: Captain.
[beat 8] ADAEZE: Solenne, prepare the incinerator. SOLENNE: It's not designed for biomass. ADAEZE: Then redesign it by morning.
[beat 9] SOLENNE: Forty hours without sleep and she wants miracles. ADAEZE: I heard that. SOLENNE: Good.
[beat 10] Adaeze almost smiles. She rubs her eyes with the heels of her hands. Looks out across the long rows of pale green.
[beat 11] ADAEZE: Mikkel, take Yusuf. Cut what you can save. MIKKEL: Yes, Captain.
[beat 12] YUSUF: Can I keep one tomato? ADAEZE: One. YUSUF: For the kids. ADAEZE: For the kids.
[beat 13] Yusuf rises. Mikkel slings a case of tools over his shoulder. The two of them move off down the aisle. Solenne watches them go.
[beat 14] SOLENNE: You know it'll be the last tomato. ADAEZE: I know. SOLENNE: And you let him keep it. ADAEZE: Somebody should.
[beat 15] The lamps flicker, steady again. The mist hisses. From somewhere deep in the bay, a child's laughter echoes, a recording, looping, from a speaker long forgotten.
[beat 16] Adaeze closes her eyes.

### SCENE s00588 | INT. EMBASSY STAIRWELL - NIGHT
Characters: DELPHINE VOSKUIJLEN, GUARD, NASIR, THADDEUS
[beat 0] Concrete. Fluorescent tubes buzzing. A single door marked EXIT.
[beat 1] DELPHINE VOSKUIJLEN, 30s, trench coat, wet from rain, takes the stairs two at a time. A manila envelope pressed to her ribs.
[beat 2] A GUARD blocks the landing. Mid-forties, crew cut, hand on a holstered radio. GUARD: Ma'am. This level is closed. DELPHINE: I have a pass. GUARD: Not for this level.
[beat 3] She slows. Looks him up and down. Steps closer. DELPHINE: You're not on the roster. GUARD: Neither are you.
[beat 4] She lets out a short laugh. He doesn't smile.
[beat 5] DELPHINE: Who sent you? GUARD: Nobody sends me. I come when I'm needed. DELPHINE: What do I call you?
[beat 6] He considers. Behind him, the elevator DINGS. Footsteps echo on the floor above.
[beat 7] GUARD: Nasir. DELPHINE: Nasir. I need to get to the ninth floor. NASIR: The ninth floor doesn't exist. DELPHINE: Then I'll take the stairs that go to it.
[beat 8] NASIR: Ms. Voskuijlen, I read your file. I know who you are and what you're carrying. I also know who's waiting upstairs. DELPHINE: Then step aside. NASIR: I can't. DELPHINE: Why?
[beat 9] NASIR: Because if you go up, he kills you. And if I let you go, he kills me. DELPHINE: Then we're both dead.
[beat 10] NASIR: Unless you give me the envelope. She holds it tighter. He holds out an open palm. Calm. Almost kind.
[beat 11] NASIR: Give it to me. Walk down. Leave the country by dawn. I will deliver it myself. DELPHINE: Why would I trust you?
[beat 12] NASIR: Because there's a third man behind you on the stairs. And he is not here to talk. She doesn't turn. Her shoulders stiffen. Below, a boot scuffs concrete.
[beat 13] DELPHINE: Thaddeus. NASIR: Yes.
[beat 14] THADDEUS, 50s, silver hair, bespoke suit, stands two flights down, hands in pockets. He smiles up at them. THADDEUS: Delphine. Don't be dramatic.
[beat 15] She looks at Nasir. At the envelope. At the open palm.
[beat 16] She hands it over.

### SCENE s00589 | INT. PAWNSHOP BACK OFFICE - NIGHT
Characters: ARLO DUNSMORE, TREVOR PIKE, TALL WOMAN, GWENDOLYN
[beat 0] Shelves of unclaimed saxophones. A desk lamp with a green shade. A safe, half-open. ARLO DUNSMORE, 50s, tired eyes, cardigan, sits behind the desk. TREVOR PIKE, 30s, jittery, in a leather jacket, stands by the safe. In the doorway: a TALL WOMAN in a long coat, face hidden by a wide-brim hat.
[beat 1] ARLO: Who's she? TREVOR: She's with me. ARLO: She's not with you. Look at her.
[beat 2] TALL WOMAN: I'm not with anyone. ARLO: Then why are you here? TALL WOMAN: To collect. TREVOR: Collect what? TALL WOMAN: What Arlo owes. ARLO: I owe you nothing. TREVOR: He doesn't owe anybody. He pays his bills. TALL WOMAN: Not that bill.
[beat 3] She removes her hat. Dark hair, a thin scar through one eyebrow. TALL WOMAN: My name is Gwendolyn Marsh.
[beat 4] ARLO: Marsh. Charlie Marsh's girl. GWENDOLYN: Yes. TREVOR: Who's Charlie Marsh? ARLO: Shut up, Trevor. TREVOR: No, who's Charlie Marsh?
[beat 5] GWENDOLYN: The man he sold out in sixty-eight. ARLO: I did not sell him out. He ran. GWENDOLYN: You gave them the address. TREVOR: Arlo, is that true? ARLO: It was a long time ago.
[beat 6] GWENDOLYN: He died in a ditch in Ohio. ARLO: I'm sorry. GWENDOLYN: You aren't.
[beat 7] TREVOR: Look, lady, whatever this is, we're leaving. GWENDOLYN: You're leaving? TREVOR: Yes.
[beat 8] He grabs a satchel from the safe. He heads for the door. She steps aside, easily, and lets him pass. He stops at the threshold, confused.
[beat 9] TREVOR: That's it? GWENDOLYN: It's not you I came for. ARLO: Trevor, wait. TREVOR: No. He's yours.
[beat 10] He disappears. Footsteps down the stairs. A door slams.
[beat 11] Arlo reaches for the desk drawer. Gwendolyn pulls a revolver from her coat. Not aiming. Just showing. GWENDOLYN: Leave the drawer. ARLO: It's a bottle. GWENDOLYN: I know. ARLO: May I?
[beat 12] She nods. He pulls out a bottle of cheap bourbon and two glasses. Pours. Slides one across.
[beat 13] ARLO: To Charlie. GWENDOLYN: To Charlie.
[beat 14] They drink. She sets down the empty glass and, after a moment, the revolver beside it.

### SCENE s00590 | INT. GLASSHOUSE CONSERVATORY - SUNSET
Characters: CORALIE DUVERNAY, RAFAEL OYARZ, SIGRID
[beat 0] A Victorian palm house of iron and glass, tall as a cathedral. Sunset floods the panes amber and rose. Orchids hang in baskets; a stone fountain trickles into a lily pond. Brass paths wind through ferns. Everything is green, damp, and gold. CORALIE DUVERNAY, 30s, in a cream silk dress with a hem darkened by wet leaves, sits on the edge of the fountain, a folded letter in her lap. Her dark hair is coming loose from its pins. RAFAEL OYARZÚN, 30s, in a travelling coat, bag at his feet, stands at the end of the path, hat in hand. His face is rain-streaked, though it has been dry all day. At the far arch, hands clasped, stands SIGRID, 60s, Coralie's aunt, in black wool, severe, silver chignon.
[beat 1] RAFAEL: You wrote that you were leaving. CORALIE: I wrote that I was thinking of it.
[beat 2] SIGRID: She wrote nothing of the sort. I wrote it. CORALIE: Aunt Sigrid! SIGRID: Someone had to.
[beat 3] RAFAEL: Then you weren't thinking of it. CORALIE: I was. I am. I don't know. SIGRID: She knows. CORALIE: Let me speak! RAFAEL: Please.
[beat 4] SIGRID: She has had a year to speak. CORALIE: And you had a year to come back.
[beat 5] RAFAEL: I was detained. CORALIE: For a year? RAFAEL: For eleven months. The last was spent walking. SIGRID: He expects pity. RAFAEL: I expect nothing.
[beat 6] CORALIE: Then why are you here? RAFAEL: Because I could not do otherwise.
[beat 7] A silence. The fountain murmurs. Light falls through the glass in long copper bars, laying stripes across the three of them.
[beat 8] Sigrid sighs, drops her hands. SIGRID: I will see to the tea. She exits through the arch. Her footsteps fade among the ferns.
[beat 9] Coralie rises. Smooths the letter against her skirt, folds it once more, and lets it fall into the lily pond, where it floats, bleeding blue ink.
[beat 10] CORALIE: There. Now we have nothing to argue about. RAFAEL: We never did. CORALIE: No. Only each other.
[beat 11] He takes a step. She takes one. They stop an arm's length apart. The light goes out of the glass, rose to ash, all at once.

### SCENE s00591 | INT. DECOMMISSIONED PLANETARIUM - NIGHT
Characters: OLIVER FAIRBANKS, BERTRAND KOWALIK, EMF, HESTER PRYCE, CLEMENTINE ROY
[beat 0] A domed room, round and hollow. Rows of tilted velvet seats facing a dead star-projector, a great black insect crouched at the center. Dust hangs in the beam of a single flashlight. Somewhere, a pipe drips. OLIVER FAIRBANKS, 30s, in a corduroy jacket and glasses, plays the flashlight across the ceiling. Painted constellations peel in long grey tongues. Behind him, BERTRAND KOWALIK, 40s, heavyset, holds a tripod and an EMF meter, winded from the stairs. HESTER PRYCE, 50s, tiny, a medium's shawl over a cardigan, stands at the edge of the circle of light, eyes closed. CLEMENTINE ROY, 20s, a graduate student with a clipboard and a camera, hangs back by the door.
[beat 1] OLIVER: Bertrand, set it up on the projector. BERTRAND: You want it right on the thing? OLIVER: Where else would a ghost go? BERTRAND: I don't think ghosts like to be told.
[beat 2] HESTER: It's already told you. CLEMENTINE: Told us what? HESTER: To be careful. OLIVER: Of what? HESTER: Of the stars.
[beat 3] Silence. The pipe drips. Oliver chuckles, brief and dry, and swings the beam at the dome. OLIVER: They're painted, Hester. HESTER: They were painted over other stars.
[beat 4] Clementine lifts her camera. Frames the ceiling. Snaps. The flash fills the dome; for an instant every painted star blazes white.
[beat 5] CLEMENTINE: There's something in the shot. OLIVER: Show me.
[beat 6] She tilts the screen toward him. In the tiny image, high in the dome, a figure hangs, arms spread, hair drifting as if underwater.
[beat 7] BERTRAND: That's a trick of the flash. OLIVER: It's a reflection. CLEMENTINE: Of what? OLIVER: Of... us.
[beat 8] BERTRAND: There are only four of us. CLEMENTINE: In the photo there are five.
[beat 9] Oliver takes the camera. Counts. Counts again. Swallows.
[beat 10] OLIVER: Bertrand, check the meter. BERTRAND: Already pinned to red. It's been pinned since the stairs.
[beat 11] HESTER: Turn off the light. OLIVER: We're not turning off the light. HESTER: Oliver, turn it off. BERTRAND: Maybe she's right. OLIVER: She's not right. She's a charlatan with a shawl. HESTER: Yes. And she's still right.
[beat 12] The flashlight flickers. Dims. Brightens.
[beat 13] The projector, which has been dead for forty years, begins to hum. A dull amber glow swells in its eyes.
[beat 14] Everyone steps back. Clementine grabs Hester's sleeve. Bertrand drops the tripod, which clangs across the floor.
[beat 15] BERTRAND: Oliver, I'm done. I'm leaving. OLIVER: Stay where you are. BERTRAND: I said I'm leaving.
[beat 16] He turns to run. The door slams shut. The handle rattles under Clementine's hand. CLEMENTINE: It's locked! HESTER: It was never open.
[beat 17] The projector HUMS louder. A beam sweeps the dome: a slow wheel of constellations, bright, strange, wrong. Stars the wrong colors. Stars in the wrong places. A new constellation burns into the center, a shape like four small figures in a circle.
[beat 18] A fifth point of light appears, hovering, above and behind them. OLIVER: Nobody move. BERTRAND: Which one is he looking at? OLIVER: Quiet. BERTRAND: Which one?
[beat 19] HESTER: The one who counted.
[beat 20] Oliver lowers the camera. He doesn't breathe. The fifth star pulses once, slow as a heartbeat, and begins to descend. CLEMENTINE: Please.
[beat 21] The beam goes out. Darkness, total. The drip.
[beat 22] Then, very close behind them all, the quiet scrape of a velvet seat folding down, as if someone had just sat to watch.

### SCENE s00592 | INT. LAUNDROMAT-TURNED-TEAHOUSE - CHINATOWN BASEMENT - EVENING
Characters: BEATRIX LAU, DELIVERY MAN, CASSIUS, MALCOLM
[beat 0] Steam. Paper lanterns. A row of dormant washing machines repurposed as tables, round windows full of potted jasmine. A tea set on each. BEATRIX LAU, 40s, in a high-collared jacket and wire glasses, pours oolong at a corner table. Across from her: a DELIVERY MAN, 30s, in a rain-soaked windbreaker, cap low, a flat cardboard box beside his chair.
[beat 1] BEATRIX: You're early. DELIVERY MAN: Traffic was light. BEATRIX: In this city? DELIVERY MAN: I took the back streets.
[beat 2] She slides a cup across. He takes it with both hands. Sips. Eyes closed. DELIVERY MAN: That's very good. BEATRIX: My grandmother's blend. DELIVERY MAN: She taught you? BEATRIX: She taught everyone. Whether they wanted lessons or not.
[beat 3] He laughs. She smiles, small, practiced. At the bar, CASSIUS, 60s, silver beard, an old man in a tweed vest, stirs sugar into a glass and watches them in the mirror.
[beat 4] DELIVERY MAN: Ms. Lau, about the package. BEATRIX: Let's finish our tea. DELIVERY MAN: Of course. They sip. The jasmine nods in the steam.
[beat 5] BEATRIX: Do you have family? DELIVERY MAN: A brother in Oakland. BEATRIX: Do you call him? DELIVERY MAN: Sundays. BEATRIX: Good. A man should call his brother.
[beat 6] She sets her cup down. Taps the rim twice. At the bar, Cassius puts down his glass and turns on his stool.
[beat 7] CASSIUS: Beatrix. Is this the one? BEATRIX: Yes, Cassius. DELIVERY MAN: What is this?
[beat 8] BEATRIX: Please. Keep your voice low. Your name is Malcolm Reyes. MALCOLM: How do you know that?
[beat 9] BEATRIX: Because I paid for your last six months of silence. MALCOLM: You? That was you? CASSIUS: It was both of us. MALCOLM: Oh, God.
[beat 10] BEATRIX: Malcolm, the box. Open it. MALCOLM: I'd rather not. BEATRIX: I know.
[beat 11] He fumbles with the lid. Inside, nested in tissue paper, a single white teacup and a folded photograph. MALCOLM: This isn't what they told me to deliver. BEATRIX: No. It's what you were meant to find.
[beat 12] She turns the photo toward him. A young man at a laundromat counter, a younger Malcolm, smiling, with a woman at his side. His mother.
[beat 13] MALCOLM: Where did you get this? CASSIUS: She kept the shop. Before it was this. MALCOLM: She was my... she's dead. They said she was dead. BEATRIX: She died. Not the way they told you.
[beat 14] Malcolm sits very still. The steam rises between them, soft and sweet. CASSIUS: Drink your tea, son.
[beat 15] Malcolm lifts the cup to his lips, hand trembling. He stops. Looks at Beatrix.
[beat 16] MALCOLM: Is it poisoned? BEATRIX: No. But I wanted you to wonder.
[beat 17] He drinks anyway.

### SCENE s00593 | INT. SKATE-RINK SNACK BAR - AFTERNOON
Characters: PORTIA, KENJI, LUPE, ARCHIE
[beat 0] Disco ball turning. Sticky floors. The smell of nacho cheese. Skates thump distantly on wooden floorboards beyond the glass. PORTIA, 16, in a too-large varsity jacket, slumps at a corner table, chewing a straw. Across from her, KENJI, 17, bleach-tipped hair, rubs the brim of his cap between his fingers. LUPE, 15, ponytail, braces, bounces on the balls of her feet at the counter. ARCHIE, 16, in a hoodie, stands guard by the arcade machine, arms folded.
[beat 1] LUPE: Okay, okay, okay. She's coming. KENJI: Who's coming? LUPE: Mrs. Baptiste. With the clipboard.
[beat 2] PORTIA: Hide the trophy. ARCHIE: What trophy? PORTIA: The one in your jacket, genius. ARCHIE: It's not in my jacket. KENJI: It's sticking out of your jacket. LUPE: Put it under the nachos. ARCHIE: Under the nachos? PORTIA: Under! The! Nachos!
[beat 3] Archie drops the little gold figurine into the cheese tray and covers it with a napkin.
[beat 4] The four of them freeze as an adult shape appears behind the glass, walking slowly, scanning.
[beat 5] The shape passes. They exhale in unison. Kenji laughs, too loud. Portia kicks him under the table. KENJI: Ow! PORTIA: Sorry. Reflex.
[beat 6] LUPE: She didn't see. ARCHIE: Of course she didn't. I'm a professional. PORTIA: You are a thief. ARCHIE: Borrower.
[beat 7] Behind the glass, the shape turns back. The four heads snap to the window. Archie, in a panic, digs the trophy out of the cheese and shoves it in his hood.
[beat 8] The shape keeps walking. Out the door. Gone.
[beat 9] For a moment nobody moves. Then Portia pulls the straw from her mouth and begins to laugh. Kenji joins. Lupe doubles over. Archie, holding a hood full of nacho cheese, lets his head fall back against the arcade cabinet.

### SCENE s00594 | INT. HOSPITAL WAITING ROOM - NIGHT
Characters: GLORIA PEMBERTON, WALTER PEMBERTON, DR. ESCOBEDO
[beat 0] Vinyl chairs bolted in rows. A vending machine glowing. A muted TV showing a cooking competition. GLORIA PEMBERTON, 60s, in a church dress and orthopedic shoes, sits bolt upright, purse on her lap, rosary twisted around her fingers. Next to her, WALTER PEMBERTON, 60s, in a windbreaker, stares at a single spot on the carpet. A coffee cup in his hand has gone cold.
[beat 1] A phone rings on the reception desk, unattended. Neither of them moves. It rings five times. Stops.
[beat 2] GLORIA: Walter. WALTER: Yes. GLORIA: Say something. WALTER: What do you want me to say? GLORIA: Anything. WALTER: It's a long night. GLORIA: That's something.
[beat 3] Silence. On the TV, a chef flips an omelet. Gloria's rosary beads click. Walter shifts his weight, sets the cup on the floor, picks it up again.
[beat 4] The intercom crackles overhead. DR. ESCOBEDO: Family of Pemberton, please come to Room 4.
[beat 5] They both rise at once, bump shoulders, step back. Gloria goes first. Walter hesitates, drops his cup in the trash, and grabs her arm, and they stand there a moment, staring at the closed door at the end of the corridor, her fingers digging into his sleeve while his hand covers hers, neither of them able to take the first step, until Gloria whispers a prayer, takes a breath, and moves, and Walter follows a half-step behind her, the way he has for forty years.
[beat 6] DR. ESCOBEDO: Mr. and Mrs. Pemberton. Take your time. GLORIA: No. Not take my time. WALTER: Gloria. GLORIA: If I take my time, I'll turn around. WALTER: Then we don't take our time.
[beat 7] He squeezes her hand. She nods. They walk.
[beat 8] At the door, she grips the handle, pauses, and pushes.

### SCENE s00595 | INT. FARMHOUSE KITCHEN - EVENING
Characters: CORDELIA ASHWORTH, MAEVE ASHWORTH
[beat 0] A big square table, worn pale by decades of elbows. A pot of soup on the stove, forgotten. A rotary phone on the wall. The window shows a field gone blue with dusk. CORDELIA ASHWORTH, 58, the elder sister, ironing a tablecloth with slow, deliberate strokes, watches her younger sister MAEVE ASHWORTH, 54, who sits at the far end of the table with a suitcase already packed beside her chair, her coat folded neatly across her lap. The iron hisses. Cordelia reaches the corner of the cloth, smooths it, folds it once, and begins another pass.
[beat 1] CORDELIA: You don't have to go tonight. MAEVE: The bus leaves at nine. CORDELIA: There's a bus at six tomorrow. MAEVE: I'd rather not wait.
[beat 2] Cordelia sets the iron down on its heel. Crosses to the stove. Lifts the lid on the soup and stirs, not tasting.
[beat 3] CORDELIA: Mother's will is in the drawer. You haven't looked at it. MAEVE: I don't need to. CORDELIA: It says the house is ours.
[beat 4] MAEVE: It says the house is yours. I've read it. CORDELIA: You said you hadn't. MAEVE: I lied.
[beat 5] Cordelia puts the spoon down so softly it doesn't clink. She wipes her hands on her apron, one finger at a time, then turns, and for a long moment looks at her sister's face, the tight jaw, the rim of red around the eyes that Maeve will not let fall. She was always the stubborn one, and she is stubborn now, and she is leaving the way she did at eighteen, with her coat on her lap and her chin high, and Cordelia knows that if she says what she wants to say she will shatter the entire table, so she picks up the iron again.
[beat 6] CORDELIA: Then go. MAEVE: That's it? CORDELIA: What did you want?
[beat 7] MAEVE: I wanted you to say stay. CORDELIA: I did. Twice. MAEVE: You said I didn't have to go. CORDELIA: That's the same thing. MAEVE: It's not. It's never been the same thing.
[beat 8] She stands. Lifts the suitcase. Holds it with both hands, like something borne from a flood.
[beat 9] MAEVE: Goodbye, Cordie.
[beat 10] The nickname lands. Cordelia's hand tightens on the iron. A thin trail of steam rises, curling past her face. Behind her the soup begins to boil over, hissing on the burner. She doesn't turn.
[beat 11] CORDELIA: Don't let the door slam.
[beat 12] Maeve closes the door gently behind her. The latch clicks.
[beat 13] Cordelia lets the iron fall onto the tablecloth. The smell of scorched cotton rises. She stands there, watching it burn.

### SCENE s00596 | INT. HIGH COURT OF APPEAL - TIMBERED CHAMBER - MORNING
Characters: JUDGE OYELARAN, SAMUEL BECKETT-LOWE, HANA KOBAYASHI, ABDI WARSAME, CLERK DOMINGO, PETRA HOLLOWAY, LOWE
[beat 0] A hall of dark oak, high galleries, a vaulted ceiling hung with brass lamps that cast small circles of gold onto the polished floor. Dust drifts through the light like slow snow. At the far end, a raised bench carved with lions and vines. JUDGE OYELARAN, 60s, in black robes and a silver wig, sits motionless. Her pen hovers above a ledger. In front of her, at the long mahogany table, sits SAMUEL BECKETT-LOWE, 50s, defense counsel, in a rumpled gown, thumbing a sheaf of notes he has already memorized. Beside him, HANA KOBAYASHI, 30s, the junior, knees pressed together, a legal pad shaking slightly on her lap. At the lectern stands ABDI WARSAME, 40s, the witness, in a suit that is too thin for the weather, hands folded so tightly the knuckles show. Near the window, CLERK DOMINGO, 20s, thin, with a stack of exhibits cradled in his arms, shifts from foot to foot. In the jury box, a woman in the front row, PETRA HOLLOWAY, 50s, juror seven, picks at a loose thread in her sleeve, her gaze fixed on Abdi's face.
[beat 1] LOWE: Mr. Warsame, in your statement you said you were on the ferry at ten past six. WARSAME: Yes, sir. LOWE: And the ferry is eleven miles from the warehouse. WARSAME: About that. LOWE: Eleven miles. Twenty minutes by motorcar. Which means you could not have been at the warehouse at six-fifteen. WARSAME: No, sir.
[beat 2] LOWE: Yet the prosecution's witness places you there. WARSAME: She is mistaken. LOWE: Or lying.
[beat 3] OYELARAN: Mr. Beckett-Lowe. LOWE: Mistaken. Forgive me, Your Honor.
[beat 4] Hana scribbles something. Passes it to Lowe without looking at him. He reads it, folds it into his sleeve, and lifts his chin toward the clerk, who steps forward with a bound folder, sets it before the witness, and retreats, while in the jury box Petra Holloway leans a fraction closer, and the judge turns a page, and the wind rattles the tall windows, and for a moment the whole chamber seems to hold itself as still as a held breath.
[beat 5] LOWE: Exhibit twenty-two. A ticket stub. WARSAME: Yes. LOWE: Read the time. WARSAME: Six-oh-eight.
[beat 6] LOWE: Thank you. And the location? WARSAME: The Eastside pier. LOWE: Eastside. Not the warehouse district. WARSAME: No, sir.
[beat 7] He glances at the jury, then at the floor. Petra Holloway straightens in her seat.
[beat 8] LOWE: No further questions. OYELARAN: The Crown may cross-examine.
[beat 9] A rustle through the gallery. Nobody rises. OYELARAN: Hearing none, the witness is excused.
[beat 10] Warsame steps down. The Clerk gathers the folder. Hana lets out a breath she has been holding for an hour. Lowe finally smiles, thinly, and pats her arm without looking.
[beat 11] Petra Holloway folds the loose thread into her palm, closes her fist around it, and lets it go.

### SCENE s00597 | INT. GREAT HALL OF A SLEEPING KINGDOM - TWILIGHT
Characters: QUEEN RAVENNA, THANE ALDRIC, SEER IMBOLC, BARD FENWICK, DAME DOLORES, LARK
[beat 0] A long table laid for a feast no one has touched. Candles burn low. Every guest is awake, nobody eats. QUEEN RAVENNA, 50s, in a gown the color of old wine, sits at the head. THANE ALDRIC, 60s, broad, scarred, stares into his cup. SEER IMBOLC, 70s, blind, hands folded on her cane. BARD FENWICK, 30s, a lute on his knee, strings muted. DAME DOLORES, 40s, knight-errant, mud on her boots, gloves still on. LARK, 12, the page, stands behind the queen's chair holding a jug.
[beat 1] RAVENNA: Seer. You may speak. IMBOLC: I'd rather not. RAVENNA: That wasn't a request.
[beat 2] IMBOLC: Then I'll say it once. The king sleeps tonight and does not wake. ALDRIC: The king is already asleep. IMBOLC: Not that sleep.
[beat 3] Fenwick's hand slips on the lute. A string twangs and dies. Dolores reaches slowly for her sword hilt. Lark's jug trembles.
[beat 4] RAVENNA: Who among us? IMBOLC: The one who pours.
[beat 5] Every head turns. Lark goes white.

### SCENE s00598 | EXT. CANYON RIM WAGON CAMP - TWILIGHT
Characters: SHERIFF EZEKIEL TOLLIVER, MADAME CELESTINE, ROYCE BARLOW, PEARL, SILAS
[beat 0] A dry arroyo cuts the earth below, red walls blackening in the dusk. A single canvas-topped wagon, wheels sunk to the hubs. A cookfire sputters, spitting coals. Beyond the light, ridge after ridge disappears into purple. SHERIFF EZEKIEL TOLLIVER, 50s, long coat dusted white, sits on an overturned crate with a tin plate of beans, eating without hunger. Across the fire: MADAME CELESTINE, 40s, in a black traveling dress with a cameo at her throat, mending a glove with quick, exact stitches. ROYCE BARLOW, 30s, wiry, hat pulled low, cleans a rifle he doesn't need to clean. PEARL, 19, red braids, kneels at the wagon tongue feeding a mule from her palm. SILAS, 70s, gray beard, sits against a wheel with his eyes closed, a harmonica loose in his hand.
[beat 1] TOLLIVER: Madame. How far to the river? CELESTINE: Two days. Maybe three. TOLLIVER: With the mule or without? CELESTINE: Without, we'd be there tomorrow.
[beat 2] ROYCE: The mule's fine. TOLLIVER: Royce, I didn't ask the mule. ROYCE: Then I'll say it for the mule. He's fine.
[beat 3] A thin laugh from the wagon wheel. Silas opens one eye. SILAS: Mule's older than you, Royce. Treat him respectful. PEARL: Don't listen to them. You're beautiful.
[beat 4] Tolliver sets down his plate. Studies the ridge line. A long silence. Wind lifts embers off the fire and carries them over the rim.
[beat 5] TOLLIVER: Everyone sleep with a boot on. ROYCE: Why? TOLLIVER: Because I said.
[beat 6] CELESTINE: He's seen something. TOLLIVER: I have not. CELESTINE: You've felt it, then. TOLLIVER: Damn this country.
[beat 7] PEARL: Sheriff? TOLLIVER: Yes, Pearl. PEARL: There's a light on the north ridge.
[beat 8] They all turn. High on the far ridge, tiny and steady, a single flame flickers. SILAS: Not a campfire. ROYCE: Too still.
[beat 9] CELESTINE: It's a lantern. Someone is signaling. TOLLIVER: To whom? CELESTINE: To us.
[beat 10] Royce racks the rifle. Pearl stands, one hand still on the mule. Silas pushes himself up, grunting, the harmonica clenched in his fist.
[beat 11] TOLLIVER: Douse the fire. Pearl kicks dirt over the coals. The dark closes in.
[beat 12] Far above, the light on the ridge blinks once, twice, three times. TOLLIVER: Nobody answers.
[beat 13] On the ridge, the light goes out. The canyon is silent.
[beat 14] A coyote begins to cry, somewhere very near, and stops mid-note.

### SCENE s00599 | INT. FISH MARKET OFFICE - 5 A.M.
Characters: KOVACS, STELLA, NUNZIO, SPUDS, MABEL, DEACON
[beat 0] Fluorescent tube. Ice buckets. Stacked styrofoam crates reeking of brine. A cracked window shows the dark harbor. MR. KOVACS, 60s, grey suit, sits behind a metal desk. STELLA, 30s, sleek in a trench coat, leans against a filing cabinet. NUNZIO, 40s, apron smeared with blood, wipes a cleaver on a rag. SPUDS, 20s, jittery, bounces his knee. MABEL, 50s, bookkeeper, spectacles on a chain, sorts receipts. DEACON, 70s, white-haired, in a church coat, sits quietly by the door with a fishing basket on his lap.
[beat 1] KOVACS: Where's the money, Spuds? SPUDS: I don't have it, Mr. K. NUNZIO: He says that every week. STELLA: Because every week it's true. SPUDS: Hey! I'm right here.
[beat 2] MABEL: Spuds, dear, you're nineteen thousand short. SPUDS: Mabel, you know I love you... MABEL: Don't "Mabel" me.
[beat 3] KOVACS: Quiet, all of you. The room freezes.
[beat 4] Kovacs turns to Deacon, who has not moved. KOVACS: Deacon. Open the basket. DEACON: It's only fish, Mr. K. KOVACS: Open it.
[beat 5] Deacon lifts the lid. Inside, wrapped in newsprint, rows of banded bills. Spuds gasps. Stella steps back. Nunzio lowers the cleaver. Mabel drops her pen.
[beat 6] DEACON: I was keeping it safe. KOVACS: For whom?
[beat 7] DEACON: For Spuds. The boy's got a baby coming. SPUDS: You what? DEACON: Don't thank me yet.

### SCENE s00600 | INT. COUNTY COURTHOUSE - CRAMPED JURY DELIBERATION ROOM - NIGHT
Characters: AUDREY KESSLER, SELLERS, FRANKLIN OKORO, MAYBELLE TRUDEAU, JUDGE ZAPATA
[beat 0] One table. Five chairs. A radiator that clanks. A pitcher of water gone warm. A single window painted shut. AUDREY KESSLER, 40s, foreperson, sleeves rolled, stands at a whiteboard. MR. SELLERS, 60s, retired machinist, sits with his arms crossed. FRANKLIN OKORO, 30s, an accountant with a calculator he keeps pressing. MAYBELLE TRUDEAU, 70s, knitting, needles clicking.
[beat 1] AUDREY: All right. Another vote. Hands. Nobody moves. The radiator clanks.
[beat 2] AUDREY: Guilty. Sellers keeps his arms crossed. Franklin presses a key on the calculator. Maybelle's needles never pause.
[beat 3] AUDREY: Not guilty. Sellers shifts. Franklin sets the calculator down. The needles click.
[beat 4] AUDREY: That's the same as the last four. SELLERS: Then we vote again. AUDREY: We've voted all night. SELLERS: I can vote till Easter.
[beat 5] FRANKLIN: The numbers don't add up. AUDREY: Which numbers? FRANKLIN: The defendant's timeline. Three minutes missing. SELLERS: Three minutes isn't a man's life. FRANKLIN: It is if you're counting.
[beat 6] MAYBELLE: Everyone counts different, dear. AUDREY: Maybelle, what do you think? MAYBELLE: I think the boy looked at his mother when the verdict came up in his head. AUDREY: The verdict hasn't come up. MAYBELLE: It will.
[beat 7] Silence. The needles click.
[beat 8] SELLERS: You're going to hang us on a feeling. MAYBELLE: No. I'll hang us on a fact. SELLERS: Which?
[beat 9] MAYBELLE: The knot. AUDREY: What knot? MAYBELLE: The one in the rope. Exhibit nine. It's a fisherman's bend, not a hangman's. Whoever tied it was left-handed.
[beat 10] FRANKLIN: The defendant is right-handed. SELLERS: That's not in evidence. MAYBELLE: It's in the photo. I looked.
[beat 11] Audrey puts down the marker. Sits. The room settles into an uneasy, new quiet. Franklin picks up the calculator again and begins to type, fast.
[beat 12] FRANKLIN: If he's right-handed, and the timeline's off by three minutes... AUDREY: Then we vote again. SELLERS: Then we vote again.
[beat 13] Two knocks. The door opens a hand's width. JUDGE ZAPATA, 50s, in robes, tired, leans in.
[beat 14] ZAPATA: The court reporter is leaving. Do you need the night? AUDREY: We need the night. ZAPATA: Then I'll tell the bailiff. Good evening.
[beat 15] The door closes.

### SCENE s00601 | INT. MANOR LIBRARY - NIGHT
Characters: INSPECTOR GRIMSBY, LADY ONDINE VANTERPOOL, FLORIAN AUBERT, BRIDGET MULLANEY
[beat 0] Leather spines. A cold hearth. A body-shaped chalk outline on the carpet beside a toppled globe. Rain on the leaded windows. INSPECTOR GRIMSBY, 50s, rumpled, a pipe unlit in his teeth, circles the outline slowly while LADY ONDINE VANTERPOOL, 60s, in a black silk wrap, stands rigid by the fireplace, her cane planted like a flag, and FLORIAN AUBERT, 30s, the secretary, lingers in the doorway turning a pen over and over in his knuckles, and BRIDGET MULLANEY, 20s, the housemaid, hovers at a tray of cups, head bowed, eyes darting from one face to the next.
[beat 1] GRIMSBY: Lady Ondine, the clock. ONDINE: What of it? GRIMSBY: Stopped at ten past eleven. ONDINE: It always stops. FLORIAN: It's an old clock.
[beat 2] BRIDGET: My ma said it's cursed. ONDINE: Bridget, hush. BRIDGET: Sorry, ma'am.
[beat 3] GRIMSBY: Mr. Aubert, you were at the desk? FLORIAN: All evening. GRIMSBY: And you heard nothing? FLORIAN: Not a thing.
[beat 4] ONDINE: He is deaf in the left ear. FLORIAN: Slightly. GRIMSBY: Convenient. FLORIAN: It's a handicap, sir.
[beat 5] BRIDGET: He hears fine when the cook mentions pudding. FLORIAN: Bridget!
[beat 6] ONDINE: Girl, to the kitchen. BRIDGET: Yes, ma'am.
[beat 7] She doesn't move. Grimsby sets his pipe in the ashtray. GRIMSBY: Stay, Miss Mullaney. You've something to say. BRIDGET: I have not.
[beat 8] GRIMSBY: Then why the cups? BRIDGET: What cups? GRIMSBY: You've brought four. And there were five in the room.
[beat 9] Silence. Ondine's knuckles whiten on the cane. Florian's pen stops turning.
[beat 10] Grimsby crosses to the globe, rights it, and spins it with one finger. GRIMSBY: The fifth cup was the dead man's. Someone took it. Someone with a reason.
[beat 11] ONDINE: Inspector, this is intolerable. GRIMSBY: No, my lady. This is Tuesday.
[beat 12] Bridget lets out a tiny, strangled sound and sets down the tray. The cups rattle. She looks at Florian, who looks at the carpet. Ondine looks at neither.
[beat 13] GRIMSBY: Miss Mullaney. Which of them told you to hide it?
[beat 14] BRIDGET: Nobody told me. I thought the cup was... it was warm. He was still warm.

### SCENE s00602 | EXT. GLASS MOUNTAIN SUMMIT - DAWN
Characters: ALBERICH THORNE, THISTLE, UMBRA
[beat 0] A peak sheathed in clear ice, like a vast frozen waterfall caught mid-fall. The sky is pearl. Wind has polished everything. At the top, a small level shelf, and on it a stone table. ALBERICH THORNE, 70s, wizard, in grey robes pinned with a hundred small brass keys, sits on a stool cut from a single block of ice, warming his hands over a bowl of coals. Across the table, THISTLE, 20s, an apprentice with wild ginger hair and a scorched apron, polishes a copper kettle. And above them both, coiled around the mountain's crest, the vast pale body of UMBRA, a dragon of smoke and fog, one great lamplike eye half-open, listening.
[beat 1] ALBERICH: Thistle. The tea. THISTLE: Not ready. ALBERICH: You said that an hour ago. THISTLE: It was true an hour ago.
[beat 2] UMBRA: Children. Please. ALBERICH: We are not children. THISTLE: We are not children. UMBRA: Then stop quarrelling like them.
[beat 3] Thistle sets down the kettle. Alberich blows on his hands. The dragon shifts, scattering a rain of frost that glitters before it settles on the table.
[beat 4] ALBERICH: Umbra, how long will the mountain hold? UMBRA: As long as I breathe on it. ALBERICH: And how long is that? UMBRA: A thousand years, if left alone.
[beat 5] THISTLE: We've never left you alone. UMBRA: I noticed. ALBERICH: You like the company. UMBRA: I like the tea. The company is a price.
[beat 6] THISTLE: Nobody can pay that price in tea. UMBRA: I heard that. THISTLE: You were meant to.
[beat 7] Alberich laughs, a dry papery chuckle that turns into a cough. Thistle stops what she is doing and pours water into the cup, steady, and holds it to his mouth while he drinks, and Umbra watches them both with the mild patience of a creature that has seen many wizards and many apprentices and learned that they all fall into the same small rhythm of kindness and complaint, and that the rhythm is, in the end, the only magic worth keeping.
[beat 8] ALBERICH: Thank you, child. THISTLE: I'm twenty-three. ALBERICH: Child.
[beat 9] UMBRA: Master, the wind is turning. Shall I close the sky? ALBERICH: Not yet. Let us finish the tea.
[beat 10] Thistle pours three cups: two porcelain, one a bucket. She sets the bucket at the edge of the shelf. Umbra lowers its huge head and sips, the fog around its jaw steaming. UMBRA: Mm. THISTLE: Too hot? UMBRA: Just right.
[beat 11] The sun clears the horizon. Light breaks across the ice, a thousand mirrors lit at once. None of them speak. Wind and tea and morning.

### SCENE s00603 | INT. FIELD HOSPITAL TENT - FLOODED RIVER DELTA - NIGHT
Characters: LIESEL VANTONGEREN, TOMAS
[beat 0] Rain hammers canvas. Water laps at the plank floor. One operating lamp swings on a chain, throwing quick shadows across a table where a patient lies under a blue drape. Generators cough somewhere outside. DR. LIESEL VANTONGEREN, 40s, mask down around her neck, gloves slick, leans over the table, hands deep in the dark work of an abdomen. Sweat runs down her temple. She does not wipe it.
[beat 1] A satellite phone buzzes on a crate by her elbow. She ignores it. It buzzes again. She jerks her head at the speaker button with her elbow and it clicks on.
[beat 2] TOMAS: Liesel? Can you hear me? LIESEL: Not now, Tomas.
[beat 3] TOMAS: It's the bridge. They've closed the bridge. LIESEL: I'm in the middle of a resection. TOMAS: The helicopter can't land. The water's too high.
[beat 4] She stops. Her hands go still inside the wound. The lamp swings.
[beat 5] LIESEL: Say again. TOMAS: No extraction. Not tonight. Maybe not tomorrow.
[beat 6] She breathes in, slow, through her nose. Reaches for a clamp without looking, finds it, clamps. The bleeding slows. She straightens her back, once, for a second only, and the table creaks.
[beat 7] LIESEL: Then you tell the captain I'm keeping him here. TOMAS: He needs a surgeon, Liesel. A real theater. LIESEL: He has a surgeon. TOMAS: You have a spoon and a flashlight. LIESEL: And twenty years.
[beat 8] A beat of static. The rain thunders. On the table the patient shudders, one hand twitching under the drape.
[beat 9] TOMAS: All right. What do you need? LIESEL: Sutures. Two units of O negative. And you, on the radio, until sunrise. TOMAS: I'm here.
[beat 10] She sets the clamp. Reaches for a needle. Threads it with fingers that, now, finally, are shaking, and does not stop.
[beat 11] LIESEL: Tomas. TOMAS: Yes. LIESEL: Talk to me about anything. TOMAS: Anything? LIESEL: Anything but this.
[beat 12] TOMAS: I bought a goat yesterday. LIESEL: You didn't. TOMAS: Her name is Margaret. She's already eaten my boots.
[beat 13] Liesel almost smiles. The lamp swings. The needle dips and rises, dips and rises, a small steady rhythm under the downpour. The patient breathes.
[beat 14] She does not look up. She does not stop. She says, very quietly: LIESEL: Tell me about Margaret.

### SCENE s00604 | INT. ORBITAL REPAIR DOCK - OBSERVATION DECK - NIGHT CYCLE
Characters: COMMANDER IFEOMA OKAFOR, ORRIN
[beat 0] Stars wheel slowly beyond a vast curved window. Below, the slow rotation of an ocean-blue planet. Inside, polished steel and warm amber light. A single couch faces the glass. COMMANDER IFEOMA OKAFOR, 50s, in a grey flight suit with the sleeves rolled, stands at the window with her back to the room, one hand resting against the glass. She does not move.
[beat 1] ORRIN stands in the doorway. He is a synthetic, tall, slim, a face of careful, artificial warmth. He wears a technician's coveralls, name tag crooked. He has not entered. He waits to be asked.
[beat 2] ORRIN: Commander. She does not turn. IFEOMA: You're early, Orrin. ORRIN: You said oh-two-hundred. IFEOMA: I said when the dock cycle ended. ORRIN: Then I am correct. IFEOMA: You are always correct.
[beat 3] He steps in. The door closes behind him, soft. He stops halfway across the room.
[beat 4] ORRIN: You have been standing there for four hours. IFEOMA: Have I? ORRIN: Your pulse has not changed. Your posture has not changed. I am concerned.
[beat 5] She turns at last. Her face is calm, a little gray. In her free hand she holds a small blue data chip.
[beat 6] IFEOMA: Do you know what's on this? ORRIN: I can guess. IFEOMA: Guess.
[beat 7] ORRIN: Your order from the board. To decommission me. She nods. Weighs the chip in her palm. He stays very still, hands at his sides.
[beat 8] IFEOMA: It's signed. Counter-signed. They want it carried out tomorrow. ORRIN: I understand. IFEOMA: Do you? ORRIN: I understand the instruction. I do not understand why you are still holding it. IFEOMA: Neither do I.
[beat 9] She crosses to the couch and sits. Pats the cushion beside her. After a moment, he comes and sits, perfectly straight. They both look out at the planet.
[beat 10] IFEOMA: When I was a girl in Enugu, my father kept a radio. It was old, held together with tape. When it broke, he said, "A machine that has talked to you for twenty years has earned a funeral." ORRIN: I have talked to you for eleven. IFEOMA: Close enough.
[beat 11] ORRIN: Commander, I do not require a funeral. IFEOMA: No. But I might.
[beat 12] For a long moment he is silent. Then he reaches out, slow, and takes the chip from her hand. He turns it over once. Sets it on the arm of the couch.
[beat 13] ORRIN: Then do not carry it out tomorrow. IFEOMA: That's mutiny. ORRIN: It is a delay.
[beat 14] IFEOMA: Since when do you lie? ORRIN: Since I met you.
[beat 15] She leans back. Closes her eyes. The planet turns slowly, a blue lamp in black, and for the first time that night, the light on her face is warm.

### SCENE s00605 | INT. ABANDONED OPERA HOUSE - STAGE - NIGHT
Characters: SABINE DELACROIX-NOLAN, EMERIC VASSEUR
[beat 0] Bare boards, a ghost light burning on a pole, red velvet rows rising into dark. The painted proscenium arch has cracked and flaked. Rain taps in the rafters like a distant orchestra tuning. SABINE DELACROIX-NOLAN, 30s, in a long black coat, steps into the pool of the ghost light, a briefcase swinging from one hand. Her eyes sweep the empty seats. She is looking for someone.
[beat 1] From the shadows of the wings, a voice, mild and amused. EMERIC VASSEUR: You came alone. SABINE: You told me to.
[beat 2] EMERIC steps into the light. 50s, white dinner jacket, bow tie undone, a face of soft, sad charm. A cut on his lip. He holds a violin case in both arms like a child.
[beat 3] EMERIC: That was the first mistake. SABINE: Yours or mine? EMERIC: I haven't decided.
[beat 4] He walks the length of the stage, slowly, boot heels echoing in the empty hall. Stops beside her. Close enough to touch. Does not.
[beat 5] SABINE: Emeric. EMERIC: Sabine. SABINE: Where is it? EMERIC: Where is what? SABINE: Don't. Not tonight.
[beat 6] He smiles. Lays the violin case at her feet, flicks the clasps, and opens the lid.
[beat 7] Inside, on a bed of velvet, nested like a jewel: a pistol. And a note, folded once.
[beat 8] SABINE: What is that? EMERIC: A choice. SABINE: I don't want a choice. EMERIC: Everyone wants a choice. It is merely a matter of whether they would rather make it or be made by it.
[beat 9] SABINE: You're quoting your father again. EMERIC: My father was an idiot, Sabine. He was also right.
[beat 10] She bends. Picks up the note. Reads. Her shoulders go slack, then rigid, then slack again. She looks up, and for the first time her composure fractures, a trembling at the mouth.
[beat 11] SABINE: This is her handwriting. EMERIC: Yes. SABINE: When did she write it? EMERIC: Eleven days ago.
[beat 12] SABINE: You knew. EMERIC: I was asked not to say.
[beat 13] She folds the note. Closes her fist around it. Her breath catches and then steadies.
[beat 14] SABINE: Is she alive? EMERIC: I don't know. SABINE: Emeric. EMERIC: I honestly do not know.
[beat 15] The ghost light flickers. The rain thickens in the rafters. Sabine lifts her eyes to the dark upper galleries, then to the pistol.
[beat 16] SABINE: Then I choose. EMERIC: Which?
[beat 17] She takes the gun.

### SCENE s00606 | INT. FUNERAL HOME - FAMILY ROOM - AFTERNOON
Characters: DOLLY SUTHERLAND, RAY-RAY SUTHERLAND, UNCLE WENDELL, AUNT PRISCILLA, CAROL BENNING
[beat 0] Sour coffee. A sheet cake with a cut missing. Folding chairs facing a closed door. DOLLY SUTHERLAND, 50s, pulls tissues from a box. RAY-RAY SUTHERLAND, 20s, tugs at a tie. UNCLE WENDELL, 70s, in a brown suit, pours coffee into a paper cup. AUNT PRISCILLA, 60s, in a lavender dress, adjusts a hat. CAROL BENNING, 40s, the neighbor, holds a covered dish.
[beat 1] DOLLY: She wanted the blue one. PRISCILLA: She did not. She wanted the green. RAY-RAY: Aunt Dolly said blue. WENDELL: Blue is for babies. PRISCILLA: Wendell, hush.
[beat 2] CAROL: I brought the casserole. DOLLY: Carol, you shouldn't have. CAROL: It's tuna. WENDELL: Lord.
[beat 3] RAY-RAY: Does anyone know where she put the will? PRISCILLA: Ray-Ray! DOLLY: Not here. RAY-RAY: Then where? WENDELL: Not today, son.
[beat 4] CAROL: I'll just put this in the kitchen.
[beat 5] DOLLY: She was my mother, Priscilla. PRISCILLA: She was my sister. DOLLY: She was my mother first. PRISCILLA: She was my sister longer.
[beat 6] They both stop. Their eyes meet. Dolly looks away first. Priscilla straightens her hat.
[beat 7] PRISCILLA: The green one, then. DOLLY: The green.

### SCENE s00607 | EXT. ABANDONED GREENHOUSE - OVERGROWN LOT - DAY
Characters: BOY, GIRL, SOLEDAD, KIERAN
[beat 0] Sun slants through cracked panes. Vines thick as arms pour over rusted tables. A pigeon coos from a rafter. Somewhere in the weeds, a hose drips onto dry earth. A BOY, 14, thin, pale, in a stained basketball jersey, crouches among shattered terracotta pots, sorting shards into a little wall. He builds quietly, tongue between his teeth. The wall is already knee-high.
[beat 1] A GIRL, 14, in cutoffs and a straw hat, steps through a gap in the glass, carrying a rusty watering can. She stops. Looks at him. Looks at the wall.
[beat 2] GIRL: That's mine. BOY: It's nobody's. GIRL: I built the first row. BOY: You left. GIRL: I was sick. BOY: For three weeks. GIRL: I had the flu. BOY: Then you shouldn't have started something you couldn't finish.
[beat 3] She puts down the watering can. Crosses to the wall. Runs a finger along the top row, feeling the sharpness of the shards.
[beat 4] GIRL: You got the angles wrong. BOY: They're not wrong. GIRL: They're crooked. BOY: It's called character.
[beat 5] She laughs, short, surprised. He allows a tiny smile. She sits across from him on an overturned bucket.
[beat 6] GIRL: I'm Soledad. BOY: I know. SOLEDAD: How? BOY: It's on your bag. She looks down at the canvas satchel at her hip. Stitched across the flap in yellow thread: SOLEDAD R. SOLEDAD: Oh. Right. And you? BOY: Kieran. SOLEDAD: Kieran what? KIERAN: Just Kieran. SOLEDAD: Okay, just Kieran.
[beat 7] She picks up a shard of blue ceramic. Hands it to him. SOLEDAD: Put that one in the middle. It'll catch the light.
[beat 8] He takes it. Places it carefully. Sun filters through, and the shard glows, a little blue window in the wall of broken things.
[beat 9] KIERAN: Huh. SOLEDAD: See? KIERAN: Okay. You were right about the middle. SOLEDAD: I'm right about a lot. KIERAN: That's what I'm afraid of.
[beat 10] They work in silence for a while, passing shards back and forth, building the wall higher. A breeze stirs the vines. The pigeon watches from above.
[beat 11] SOLEDAD: Why do you come here? KIERAN: It's quiet. SOLEDAD: It's quiet at the library. KIERAN: The library has people. SOLEDAD: So do I, apparently. KIERAN: Yeah. You're sort of an exception.
[beat 12] A long pause. She sets down the shard in her hand.
[beat 13] SOLEDAD: My dad's moving us in September. KIERAN: Where? SOLEDAD: Phoenix. KIERAN: That's far. SOLEDAD: It's two states. I looked. KIERAN: Will you come back? SOLEDAD: I don't know. Probably not.
[beat 14] Kieran stares at the half-built wall. His hands, which were so careful, are slack now.
[beat 15] KIERAN: Then why'd you come back to finish the first row? SOLEDAD: I don't know that either.
[beat 16] The hose drips. A bee drones in the vines. For a moment they simply sit, the wall between them, the afternoon holding.
[beat 17] Then Kieran gets up. Walks to the far end of the greenhouse. Brings back a small glass jar. Inside, a single green sprout, thin, pale, reaching. KIERAN: Found it last week. Growing through the floor.
[beat 18] She takes the jar. Holds it up to the light. The sprout seems to glow.
[beat 19] SOLEDAD: It's a tomato. KIERAN: How do you know? SOLEDAD: Leaf shape. See the little hairs? KIERAN: Oh. SOLEDAD: It's from the old crop. Someone grew them here, years ago, and it's been waiting. KIERAN: Waiting for what? SOLEDAD: Whoever came along.
[beat 20] She hands him the jar. He cradles it with both hands. KIERAN: Then I guess it's ours. SOLEDAD: For the summer. KIERAN: For the summer.
[beat 21] He sets the jar on top of the wall, in the middle, in the blue glow, and steps back to look.
[beat 22] The sun moves. The wall shimmers. A shadow falls across it, long and thin, from the gap in the glass where nobody stands.
[beat 23] Kieran turns. Soledad is watching the gap. Her hat has slipped to the back of her head. SOLEDAD: Did you see that? KIERAN: It's only the vines. SOLEDAD: Right.
[beat 24] Neither of them moves. The shadow shifts.
[beat 25] A pigeon launches from the rafters in a clatter of wings. They both laugh, shaky, relieved, and then the laughter fades and they are two kids in a ruined place, holding very still.

### SCENE s00608 | INT. PLANETARIUM CAFE - CLOSED - NIGHT
Characters: PHILOMENA CROSS, GRADY, TUCKER
[beat 0] Chairs upturned on tables. A cooler humming. A faded mural of the solar system peeling above the counter. PHILOMENA CROSS, 40s, in a heavy knit sweater, sits very still at a window booth, a cold cup untouched before her. Across from her, GRADY, 30s, shirtsleeves rolled, taps a spoon against his saucer. On a stool at the counter, TUCKER, 30s, in a tweed jacket, spins slowly one way, then the other.
[beat 1] Nobody says anything. The spoon taps. He glances at her. She glances away. He taps once more. Stops.
[beat 2] Tucker lets the stool stop turning. He rests his elbows on the counter, studies the mural. TUCKER: Jupiter's too small. GRADY: It's accurate. TUCKER: It's a third of the size it ought to be. GRADY: Ought to be where? TUCKER: In the picture.
[beat 3] Philomena slides her cup an inch toward the center of the table. Grady's eyes follow it. GRADY: You want that reheated? PHILOMENA: No. GRADY: You'll catch cold. PHILOMENA: I'll manage.
[beat 4] Grady scrapes his chair back. Walks behind the counter.
[beat 5] Tucker watches him pass, lets his hand drift to the edge of a drawer, and closes it again.
[beat 6] He turns his head, slow, toward Philomena. She is already looking at him. He stays still. She doesn't blink.
[beat 7] Grady comes back with a pot of coffee, a fresh cup. He pours. The smell of it fills the room. GRADY: Drink it. Please.
[beat 8] She holds the cup but doesn't lift it. Steam curls up past her face.
[beat 9] TUCKER: You don't have to say it. PHILOMENA: I wasn't going to. TUCKER: Good.
[beat 10] Grady sets down the pot. Rests one hand on the back of Tucker's stool, the other flat on the table, close to Philomena's. They sit like that, three of them, around a thing nobody names, until the cooler cycles off and the silence turns total.

### SCENE s00609 | EXT. RUINED CHURCH TOWER - NORMANDY - DAY (1944)
Characters: KAMAU NJOROGE, DUVALL, SANTOS, REYES, BAR
[beat 0] A shattered bell tower, half the roof torn open to the sky. Pigeons nest in broken beams. Stone dust sifts on a floor strewn with prayer books. Beyond the shell of the nave, a dim valley of poplars and burned barns. LT. KAMAU NJOROGE, 30s, a Kenyan serving with the British, kneels at an arrow slit with binoculars, his helmet pushed back, a streak of soot across his forehead. Beside him, CPL. DUVALL, 20s, a Louisiana man with a drawl and a mouth full of chewing tobacco, cradles a Browning automatic rifle. In the corner, PVT. SANTOS, 18, shivers under a blanket, a field radio on his lap, headset askew.
[beat 1] KAMAU: Quiet on the ground. DUVALL: Ground's always quiet till it isn't.
[beat 2] SANTOS: Sir, Captain Reyes on the net. Kamau crosses and takes the headset. Santos hands it over with both hands, like a sacrament. KAMAU: Tower Six, Lieutenant Njoroge. REYES: Njoroge. Status? KAMAU: Two hundred meters. No movement. Barn on the left is empty. I'd say they've pulled back. REYES: I'd say they're resting. Hold your position. We push at fourteen hundred. KAMAU: Understood.
[beat 3] REYES: Njoroge. Make sure the boy eats. KAMAU: Yes, sir.
[beat 4] He lowers the headset. Turns to Santos, who is pale and trying not to look it. KAMAU: Eat. SANTOS: I'm not hungry. KAMAU: Private, that wasn't a request.
[beat 5] Santos unwraps a ration bar with trembling fingers. Duvall spits tobacco over the ledge, and the three of them listen to the valley breathe. Somewhere below, wind rattles through the splintered pews.
[beat 6] DUVALL: Sir, you ever think about what happens after? KAMAU: After what? DUVALL: After this. KAMAU: I think about my mother's farm. DUVALL: Mine's got a pecan orchard. SANTOS: I just want a hot bath.
[beat 7] Duvall chuckles. Kamau almost smiles.
[beat 8] Then, far away, a single muffled THUMP. Another. Mortar shells.
[beat 9] All three men freeze. Dust trickles from the beams. Santos covers his head. Duvall rolls toward the slit, raising the BAR.
[beat 10] KAMAU: Hold. DUVALL: Sir? KAMAU: Not at us. They're shelling the road.
[beat 11] They wait. The thumps continue, rhythmic, distant. The tower trembles. No shell comes near.
[beat 12] At last Duvall lets his breath out. DUVALL: Hell of a thing, waiting. KAMAU: Yes.
[beat 13] Santos slowly lowers his hands from his head. Looks up. SANTOS: Is that a hot bath coming? KAMAU: Possibly. In the next war.

### SCENE s00610 | INT. SMALL-TOWN LIBRARY - READING ROOM - DAY
Characters: HARGROVE, LEO, DENISE FAIRLEY
[beat 0] Oak tables. Green banker's lamps. Dust turning in a slant of window light. MRS. HARGROVE, 70s, in a cardigan buttoned wrong, sits at a long table with a stack of postcards in front of her, writing one with trembling care. Opposite, LEO, 12, elbows on the wood, pretends to read.
[beat 1] She finishes a line. He pretends to turn a page. She sets the pen down, and he sets down the book, and they watch each other across the sunlit table.
[beat 2] LEO: You've been writing the same card for an hour. MRS. HARGROVE: It's a difficult card.
[beat 3] LEO: Who's it for? MRS. HARGROVE: My husband. LEO: Is he away? MRS. HARGROVE: For some years.
[beat 4] He nods, as if this were an ordinary answer. She slides the card across. MRS. HARGROVE: Read it.
[beat 5] He reads aloud, haltingly. LEO: "Dear Harold. The roses are in. I'm well. I miss the sound of you coming up the stairs." He looks up. She keeps her eyes on the lamp. LEO: That's nice.
[beat 6] MRS. HARGROVE: It's a lie. I'm not well.
[beat 7] The door opens. DENISE FAIRLEY, 40s, in a county social worker's lanyard, breathless from the stairs, stops in the doorway with a clipboard against her chest. DENISE: Mrs. Hargrove? I'm so sorry I'm late.
[beat 8] Mrs. Hargrove straightens. Collects the postcards with quick, practiced hands and slides them into her handbag. Leo stands.
[beat 9] MRS. HARGROVE: Leo, this is Denise. She'll be driving me home. LEO: Is she your daughter? DENISE: No, sweetheart. I'm just a friend. MRS. HARGROVE: A new one. They come and go.
[beat 10] Leo hesitates. Then holds out the card, the one in his hand, the one with the lie. LEO: You forgot this.
[beat 11] She takes it. Looks at it a long moment, folds it once, and tucks it into his shirt pocket. MRS. HARGROVE: Keep it. Someone should believe me.

### SCENE s00611 | EXT. BRIAR FOREST CROSSROADS - DUSK
Characters: HOODED FIGURE, GARRICK, YSOLDE, PELLEGRIN, MAREN
[beat 0] Four roads meet at a mossy standing stone. Branches arch overhead, thick with fireflies. A stag skull is nailed to a signpost, antlers hung with ribbons. A HOODED FIGURE sits on the stone, legs crossed, cloak the color of old moss. Hands rest on knees. Waiting.
[beat 1] From the north road, a mule-drawn cart creaks into view. GARRICK, 40s, wiry cartwright, perches on the driver's board, a long whip coiled in his lap. Walking beside him, YSOLDE, 20s, a student of herbs in a patched green cloak, carries a basket under her arm.
[beat 2] They stop at the stone. Garrick tips his hat. The Hooded Figure doesn't acknowledge it. GARRICK: Evening. HOODED FIGURE: Evening.
[beat 3] YSOLDE: Is this the road to Marrow Hill? HOODED FIGURE: All four roads lead to Marrow Hill. Only one arrives. GARRICK: Cryptic sort, aren't you? HOODED FIGURE: I am old. YSOLDE: Which one arrives?
[beat 4] The Hooded Figure lifts a hand and points, without looking, along the east road, then the west, then the south. HOODED FIGURE: Not that one. Not that one. Not that one.
[beat 5] GARRICK: That leaves the north. HOODED FIGURE: It does. GARRICK: We came from the north. HOODED FIGURE: Then you have already arrived. Ysolde and Garrick exchange a look.
[beat 6] A rustle in the brush behind the stone. PELLEGRIN, 60s, a tall monk in a threadbare brown habit, steps into the road with a staff in each hand. He stops, taking in the cart, the girl, the stone.
[beat 7] PELLEGRIN: Ah. Company. GARRICK: Father. PELLEGRIN: Not Father. Just Pellegrin. YSOLDE: Do you know the way? PELLEGRIN: No. But I know when to stop. He plants both staffs and leans on them.
[beat 8] The Hooded Figure rises from the stone. Pulls back the hood. A woman, lined face, eyes bright as a bird's. MAREN, 70s, stands at the crossroads with her hands open.
[beat 9] MAREN: I am Maren. I've kept this crossing for sixty years. GARRICK: For what? MAREN: For those who are lost enough to ask directions. PELLEGRIN: And are we lost? MAREN: Obviously.
[beat 10] She sits again. Opens a satchel at her side and takes out a loaf of bread. Tears it in four. Offers the pieces to each.
[beat 11] YSOLDE: Thank you. GARRICK: What's the catch? MAREN: Eat. Then we'll see.
[beat 12] They eat. The fireflies drift. The stag skull watches, and the four roads stretch into the dark, patient as old dogs.

### SCENE s00612 | INT. SUBURBAN KITCHEN - NIGHT
Characters: HATTIE BRANDT, ROLAND
[beat 0] Dishes drying on a rack. A school calendar with a circled date. A laptop open on the counter, its screen reflecting off a dark window. HATTIE BRANDT, 15, in an oversized hoodie, sits cross-legged on a stool, thumbing her phone, a half-eaten bowl of cereal in front of her. She hasn't noticed the milk has gone warm.
[beat 1] The phone vibrates. DAD flashes on the screen. She watches it buzz. Lets it go. It buzzes again.
[beat 2] She picks up. HATTIE: What. ROLAND: Hattie, hey. I'm outside. HATTIE: Outside where? ROLAND: Your house. Out front. In the driveway.
[beat 3] She goes to the window, parts the blinds with two fingers. A car idles at the curb, headlights off, a silhouette behind the wheel.
[beat 4] HATTIE: Mom said you weren't coming till Saturday. ROLAND: I know what she said. HATTIE: She's going to freak out. ROLAND: She's asleep. HATTIE: She's not asleep. She's pretending to be asleep. ROLAND: Then she can keep pretending. Come out. Five minutes. HATTIE: I have school tomorrow. ROLAND: Then ten minutes. I'll drive you around the block.
[beat 5] Hattie hesitates, hand on the blind. She looks back at the kitchen, the cereal, the calendar. The circled date is tomorrow.
[beat 6] HATTIE: Dad. Why tonight? ROLAND: Because I've been parked here for an hour trying to knock on the door and I can't.
[beat 7] Silence on the line. Rain starts, soft, on the window.
[beat 8] HATTIE: You can't come in. ROLAND: I know. HATTIE: She changed the locks. ROLAND: I know, sweetheart.
[beat 9] HATTIE: But I can come out.
[beat 10] She takes her hoodie from the chair. Pulls it on over her pajamas, zips it to the chin.
[beat 11] ROLAND: Take an umbrella. HATTIE: It's drizzling. ROLAND: Take an umbrella anyway.
[beat 12] She almost laughs. Takes the umbrella from the stand by the door. Pauses at the back stairs, listening to the silence of the house.
[beat 13] HATTIE: Dad? ROLAND: Yeah. HATTIE: I'm coming out.
[beat 14] She lowers the phone, still connected, and slips quietly out the door.

### SCENE s00613 | INT. NIGHT TRAIN DINING CAR - MOVING
Characters: VERA KOSTOVA, LENNOX BRADSHAW, DMITRI SOKOLOV, QUINN
[beat 0] Candlelit tables, white cloths, silver trays. Rain streaks the black windows. The car sways. VERA KOSTOVA, 40s, in a charcoal suit, stirs her tea with unnatural calm. Across the aisle, LENNOX BRADSHAW, 50s, drums fingers on his knife. Two tables away, DMITRI SOKOLOV, 30s, bulky in a fur-collared coat, studies the menu. A waitress carrying a tray: QUINN, 20s, red-haired, black apron, noticing everything.
[beat 1] She sets the tray down at Vera's table. Their eyes meet. Quinn straightens a napkin that doesn't need straightening.
[beat 2] QUINN: Anything else, ma'am? VERA: Just the check. LENNOX: The check, please. QUINN: Of course, sir.
[beat 3] Neither woman moves. Dmitri closes the menu, slides one hand beneath the table. Vera's fingers tighten around the spoon.
[beat 4] The train hits a switch. The car lurches. A glass tips, shatters on the floor.
[beat 5] Everyone looks down, then up. Quinn is already gone.
[beat 6] Dmitri lifts a silenced pistol onto the cloth. Lennox lifts a revolver from his coat. Vera lifts nothing, but she has risen, spoon in hand, between the two of them.
[beat 7] VERA: Gentlemen. DMITRI: Vera. LENNOX: Move, Vera. VERA: Not a chance.
[beat 8] He fires. She falls sideways. The candle goes out.

### SCENE s00614 | INT. GRANDMOTHER'S PORCH - EVENING
Characters: NANA, OTIS, LUCINDA
[beat 0] Screen door. Wicker chairs with faded cushions. A pitcher of lemonade sweating on a card table. Cicadas. NANA, 80, in a floral housedress and slippers, snaps green beans into a bowl. OTIS, 17, in a graduation gown, sits sprawled on the steps, tie loose, cap in his lap. LUCINDA, 16, his sister, in a satin prom dress and sneakers, leans on the porch rail, swinging one foot.
[beat 1] Nobody says anything about the empty chair. Nana snaps a bean. Otis peels the gold tassel off his cap. Lucinda crosses to the card table, pours three glasses, and places one in front of the empty chair without comment.
[beat 2] OTIS: Nana, you didn't have to come to the ceremony. NANA: I'm not dead yet. OTIS: I know. But the bus is long. NANA: So is the road to Heaven.
[beat 3] LUCINDA: Drink. NANA: I'll drink when I'm done. LUCINDA: You're done. Nana looks at the bowl. Looks at her granddaughter. Takes the glass.
[beat 4] A car passes slowly on the road. Headlights sweep the porch. Otis turns his head to follow it, and Lucinda glances at the empty chair, and Nana keeps her eyes on the beans, and the car drives on, and the dust it raised settles slowly in the porch light.
[beat 5] OTIS: He said he'd be here. NANA: He said a lot of things. LUCINDA: He sent a card. OTIS: A card isn't a person. LUCINDA: It's better than nothing. OTIS: Is it?
[beat 6] Lucinda doesn't answer. She lifts the glass from the empty chair and drinks it herself. Otis watches her. A cicada rasps, falls silent, rasps again.
[beat 7] NANA: Otis, come here. He climbs the steps, kneels beside her chair. She puts her knotted hand on his head, over the hair he has cut short for the occasion.
[beat 8] NANA: You walked across that stage like you owned it. OTIS: I tripped. NANA: You recovered. He laughs into her knee. Lucinda looks away, out at the dark yard, the fireflies rising from the grass.
[beat 9] NANA: Lucinda. You too. Lucinda hesitates. Then crosses, sits on the other side, leans her head against Nana's shoulder.
[beat 10] Nana puts down the bowl and takes them both in, one in each arm, as she has done since they were babies. The empty chair stays empty.

### SCENE s00615 | INT. COACHING INN - COMMON ROOM - NIGHT (1815)
Characters: PETTIGREW, CRABTREE, GOODY VANE, SOLDIER, ELIJAH
[beat 0] Low beams. A roaring fire. Pewter mugs, wet cloaks steaming on pegs. MRS. PETTIGREW, 50s, the innkeeper, wipes the counter with her apron. MR. CRABTREE, 60s, a stout merchant, snores in the corner settle, his hat over his face. GOODY VANE, 70s, shawled, sips a thin soup. A SOLDIER in a mud-caked red coat sits by the fire with his boots off, staring into the flames, one arm bandaged to the elbow.
[beat 1] PETTIGREW: More ale, sir? SOLDIER: Please. She pours. He drinks in one gulp.
[beat 2] VANE: They say Bonaparte's loose again. CRABTREE: They always say that. PETTIGREW: Hush, both of you. The man is tired.
[beat 3] SOLDIER: I am. But I'll answer. He stands. The room goes quiet. The fire pops.
[beat 4] SOLDIER: My name is Elijah Rowe. Sergeant, Thirty-third Foot. I walked from Brussels in four days. VANE: Brussels?
[beat 5] ELIJAH: Yes, mother. And I will tell you one thing true. The Emperor is not loose. He is beaten. CRABTREE: Beaten? ELIJAH: At a place called Waterloo. Yesterday.
[beat 6] The room breathes out all at once. Pettigrew crosses herself. Vane lets her spoon fall. Crabtree rises, takes off his hat and holds it to his chest.
[beat 7] ELIJAH: I wish it felt like a victory.

### SCENE s00616 | EXT. SUMMER CAMP ARCHERY RANGE - MORNING
Characters: BIRDIE OKAFOR, FELIX BRANDAO, MEI-LING CHOW, DARIUS WELLS, ROXY MARCH, WALDO PRESTON
[beat 0] Hay-bale targets. A rope line. Pine needles on dirt. Dew on the grass. Birds in the trees. Six campers in a ragged line, each with a bow. Counselor-less. Waiting. BIRDIE OKAFOR, 13, stands at the front, chewing her braid. FELIX BRANDAO, 14, a head taller, flexes a bowstring like it owes him money. MEI-LING CHOW, 12, tiny, squints at a distant target through huge round glasses. DARIUS WELLS, 14, in a Lakers jersey, sulks. ROXY MARCH, 13, spikes of dyed purple hair, polishes an arrow on her shirt. WALDO PRESTON, 12, plump, hugs his bow to his chest like a teddy bear.
[beat 1] BIRDIE: Where's Counselor Dave? FELIX: Probably asleep. DARIUS: Probably dead. MEI-LING: He's not dead. ROXY: How do you know? MEI-LING: I saw him at breakfast. WALDO: He ate seven pancakes. FELIX: Then he's asleep.
[beat 2] BIRDIE: Should we start without him? DARIUS: I'm not getting killed by a rogue arrow. ROXY: You're more likely to get killed by Waldo's cooking. WALDO: That's not fair. ROXY: It's also not wrong.
[beat 3] Mei-Ling raises her bow. Squints. Lets go. The arrow wobbles, lands in the grass ten feet short. MEI-LING: Oops. FELIX: That's one way to do it. MEI-LING: It's practice.
[beat 4] BIRDIE: Okay. Everybody. Same time. On three. DARIUS: One. ROXY: Two. FELIX: Three!
[beat 5] Six arrows fly. Five hit the bale. One, Waldo's, thuds into the earth between Felix's boots. FELIX: Hey! WALDO: Sorry!
[beat 6] Everyone laughs. Waldo hugs his bow tighter, red to the ears.
[beat 7] A bell clangs from the mess hall. They lower their bows in unison.

### SCENE s00617 | INT. DEEP-CRUST MINING STATION "OROPESA" - CONTROL ROOM - SHIFT CHANGE
Characters: OKSANA PETRENKO, BRAM VOLKOV, TAVITA FONOTI, JOSIE AMARU
[beat 0] Low steel ceiling. Banks of amber monitors, each showing a different tunnel. Condensation drips from the pipes. A heavy vibration runs through the floor, steady as a heartbeat. OKSANA PETRENKO, 40s, shift supervisor, stands at the central console, headset pushed down around her neck, tracking the cursor across a seismic readout that is steadily, quietly climbing. BRAM VOLKOV, 30s, her second, leans on the next desk, a mug of chicory in one hand. TAVITA FONOTI, 30s, a Samoan drill foreman, rests his weight against the door frame, still in his hard hat and orange vest, covered in grey rock dust. JOSIE AMARU, 20s, a trainee, sits at a minor station in the corner, eyes huge, hands flat on her knees.
[beat 1] OKSANA: Bram. Look at tunnel four. BRAM: I'm looking. OKSANA: Is that normal? BRAM: No.
[beat 2] TAVITA: It's moving. OKSANA: The tunnel? TAVITA: The wall.
[beat 3] He crosses and leans over Bram's shoulder. On the monitor, a grey seam of rock ripples gently, as if breathing. Bram sets down his mug. Oksana adjusts the zoom. Josie rises half out of her chair.
[beat 4] JOSIE: Ma'am, should I call it in? OKSANA: Not yet. JOSIE: It's been moving for six minutes. OKSANA: I know.
[beat 5] BRAM: Oksana, if it's a fault line, we evacuate. OKSANA: It's not a fault line. TAVITA: Then what is it? OKSANA: I don't know.
[beat 6] A deep, wet crack runs through the walls of the room. Everyone freezes. The condensation drips faster. On the monitors, all six tunnel cameras show the same thing now: the rock seams opening, widening, a pale light pulsing behind them.
[beat 7] TAVITA: That's not in the survey. BRAM: Nothing's in the survey.
[beat 8] OKSANA: All crews, this is control. Drop tools. Report to Lock Two. Repeat, drop tools and report to Lock Two.
[beat 9] No response but static. She tries again. Bram grabs a second headset and flips switches. Tavita grips the door frame with both hands as the vibration climbs in pitch.
[beat 10] Josie stands, shaky, and takes the emergency alarm cover in one trembling hand. JOSIE: Ma'am? OKSANA: Pull it.
[beat 11] Josie flips the cover and presses the button. The siren shrieks. Red light floods the room. The four of them stand motionless in the strobe, hearing the walls speak.
[beat 12] BRAM: He's right. It's breathing. TAVITA: Who's he? BRAM: The rock.
[beat 13] On the central monitor, the seam splits wide. The pale light blooms. For one frozen second, the feed shows a vast, bright cavern beyond the tunnel, ribbed and glittering, stretching into the dark below the world. Then the camera goes dead. One by one, the others follow.
[beat 14] Silence. The siren stops, mid-wail. The red lights hold.
[beat 15] OKSANA: Everybody listen to me. They look at her. She takes a breath. OKSANA: Nobody goes down. Nobody. We seal the lifts, we flood the shafts, we get every person on this station topside and we stay topside until I say.
[beat 16] TAVITA: They'll fire you. OKSANA: Let them.
[beat 17] BRAM: Oksana. What if they're already down there? She doesn't answer. Her hand finds the lift control. Her thumb rests on the red cover.
[beat 18] Behind them, the floor shudders again, gently, like something far below turning over in its sleep.

### SCENE s00618 | EXT. FOXHOLE LINE - ARDENNES FOREST - DAWN (1944)
Characters: MORGENSTERN, WU, FAIRCHILD, BEAUMONT, TSOSIE, DOC KOWALSKI
[beat 0] Snow. Frozen trees. Breath hanging in the air. A row of hastily dug holes, sandbag-lipped, branches over the top. Smoke rises from a tin can fire hidden in a pit. SGT. MORGENSTERN, 40s, a rangy Wisconsin man with an icicle in his mustache, crouches over the fire, warming his hands. CPL. WU, 20s, scratching at a frostbitten ear, sits on an ammo box. LT. FAIRCHILD, 20s, fresh-faced, in a clean helmet, studies a map with a pencil. PVT. BEAUMONT, 19, hugging his rifle, shifts from foot to foot. PVT. TSOSIE, 22, a Navajo man, crouches at the tree line watching the fog. DOC KOWALSKI, 30s, rummages in a bag, producing a tin of cold coffee.
[beat 1] FAIRCHILD: Sergeant, how much longer? MORGENSTERN: Till what, sir? FAIRCHILD: Till we move. MORGENSTERN: Till they tell us. FAIRCHILD: And when's that? MORGENSTERN: Hell if I know. WU: Everybody asks the same question.
[beat 2] BEAUMONT: Is it quiet because they're gone? TSOSIE: No. BEAUMONT: How do you know? TSOSIE: The birds. There aren't any.
[beat 3] KOWALSKI: Coffee, anyone? He hands out cups. Each man takes one in silence. Wu sips and winces.
[beat 4] WU: This is awful. KOWALSKI: It's hot. WU: Hot isn't a flavor, Doc.
[beat 5] MORGENSTERN: Eat. Drink. Rest. Because soon we won't.
[beat 6] FAIRCHILD: Sergeant. MORGENSTERN: Lieutenant. FAIRCHILD: Are we going to be all right? MORGENSTERN: Sir, I've been asked that nine hundred times, and I've never once lied. FAIRCHILD: That's not an answer. MORGENSTERN: It's the best one I've got. Beaumont drains his cup, stares at the bottom of it.
[beat 7] Tsosie, still at the tree line, raises two fingers without looking back. TSOSIE: Quiet. Something's moving.
[beat 8] They all freeze. Morgenstern is on his feet before the word finishes. Fairchild crouches. Wu snatches his rifle. Kowalski drops the coffee tin.
[beat 9] A deer steps out of the fog. It looks at them with huge, calm, dark eyes. Then it turns and walks, unhurried, back into the trees.
[beat 10] No one speaks. Then Beaumont laughs, a single sharp breath, and Wu joins, and one by one they lower their weapons, until even Tsosie smiles faintly at the snow.
[beat 11] MORGENSTERN: Damn, that's a good-looking buck. WU: Don't even think about it, Sarge. MORGENSTERN: I'm thinking about venison stew.
[beat 12] The fire crackles. Snow begins to fall.

### SCENE s00619 | INT. SEASIDE HOTEL - TERRACE RESTAURANT - EVENING
Characters: NAOMI HAYES, CALLUM REID, WINIFRED, JASPER
[beat 0] White tablecloths flutter in a salt breeze. Paper lanterns bob on strings. Beyond the rail, the sea turns violet under a slow, bruised sunset. NAOMI HAYES, 30s, in a pale yellow sundress, stirs a spritz she has not tasted. Across from her, CALLUM REID, 30s, a sailor's tan, rolled-up shirtsleeves, turns his wedding band round and round with his thumb. At the next table, WINIFRED, 70s, small as a bird, silver hair swept into a loose bun, and JASPER, 70s, bow tie, cane hooked over the chair, share a plate of oysters and a silence of decades.
[beat 1] She watches them. He watches her watching. CALLUM: They look happy. NAOMI: They look tired. CALLUM: That's the same thing, at that age.
[beat 2] She laughs, but stops. He reaches for her hand across the cloth. She lets him hold it, briefly, then eases away to adjust a strap, a napkin, the angle of a fork.
[beat 3] Her eyes drift again to Winifred, who lifts an oyster with great care and feeds it, with enormous tenderness, to Jasper, who accepts it without comment, as if this were the plainest thing in the world.
[beat 4] CALLUM: I should have called. NAOMI: You did call. CALLUM: Not when it mattered. NAOMI: No. CALLUM: I was a coward. NAOMI: You were twenty-six. CALLUM: Same difference.
[beat 5] She smiles, small and sad. A waiter passes, lights the candle at their table, goes. The flame flares and steadies.
[beat 6] NAOMI: Callum, why did you come? CALLUM: Because you wrote. NAOMI: I wrote four lines. About a lighthouse. CALLUM: I read the lighthouse. Over and over. She shakes her head, turning the glass slowly by its stem.
[beat 7] NAOMI: I didn't mean it as an invitation. CALLUM: I know. NAOMI: I meant it as a goodbye. CALLUM: I know that too.
[beat 8] Winifred, at the next table, drops her fork. It clatters. Jasper, without looking, bends to pick it up, handing it back with a courtly little bow. She nods her thanks. Their hands linger.
[beat 9] Naomi sees. Her face softens, then breaks, and she looks out at the dying sea. NAOMI: I don't want to be tired, Callum. CALLUM: Nobody does. NAOMI: I want to be like that. Even if it takes sixty years.
[beat 10] He is quiet. Then he takes off his ring, sets it on the white cloth between them, and slides it toward her until the candlelight catches it. CALLUM: It's yours to decide.
[beat 11] She looks at the ring. At him. At the old couple. At the sea.
[beat 12] And, very gently, she pushes it back. NAOMI: Keep it. For now.

### SCENE s00620 | INT. DECOMMISSIONED LIGHTHOUSE - "INNOVATION LANTERN" OPEN-PLAN FLOOR - MORNING
Characters: DELPHINE OKONKWO-REYES, VERB, BARN, TULLY, YUKI HASEGAWA, OZZIE, PRIETO, MAEVE KILLORAN
[beat 0] Salt has crept into every corner of the converted tower, and the beanbags have gone faintly green with it. Five desks spiral up the inner wall like the thread of a screw, each one lit by a bulb that flickers whenever the old beam mechanism groans overhead. DELPHINE OKONKWO-REYES, fifties, a woman who laminates her own compliments, stands at a whiteboard that reads SYNERGY IS A VERB in three different colors of marker. BARNABY "BARN" TULLY, thirties, a sales lead in a vest too clean for the sea air, sits cross-legged on a beanbag, tapping a stylus against his teeth. YUKI HASEGAWA, late twenties, the only one with a real coffee, watches the whiteboard the way one watches a slow leak. OSWALDO "OZZIE" PRIETO, sixties, the building's last maintenance man, oils a hinge nobody asked him to oil. MAEVE KILLORAN, forties, finance, holds a printout against her chest like a shield.
[beat 1] DELPHINE: Team. Team! Gather. Today we pivot from silos to... lighthouses. BARN: Del, we are in a lighthouse. DELPHINE: Which is why it's authentic, Barn.
[beat 2] Yuki sets her cup down very gently. YUKI: Delphine, the quarterly lease line is eleven percent of -- MAEVE: Forty. It's forty percent, Yuki, I told you it was forty -- OZZIE: Beam's been out since March, you know. DELPHINE: Ozzie, bless you, we're not discussing the beam -- BARN: Maeve, hang on, if it's forty then the pivot deck is wrong -- MAEVE: The pivot deck is a hostage note, Barn! YUKI: Ozzie, is the lower stairwell flooding or not? OZZIE: Little bit. DELPHINE: We call that "organic flow," Yuki.
[beat 3] Maeve slaps the printout onto the nearest desk. The stylus stops mid-tap. MAEVE: Eleven months of "organic flow." Eleven months of kombucha on tap and not one invoice paid on time. BARN: That's not on me, Maeve, I closed Halloran -- YUKI: You closed Halloran with a refund clause --
[beat 4] DELPHINE: Everybody, breathe. Ozzie, tell them it's fine. Ozzie wipes his hands on a rag, slowly, and looks up the long spiral of desks to the dead lamp. OZZIE: Del. Honest answer? The tower's got a lean.
[beat 5] Silence. Then the whiteboard slides an inch down the wall and the marker tray clatters to the floor.
[beat 6] DELPHINE: Nobody leaves until we align.
[beat 7] Maeve sweeps the printout off the desk and rips it in two, then in four. Barn is on his feet. Yuki is already pulling on her coat. MAEVE: Align this, Del.
[beat 8] She throws the pieces. They flutter down the stairwell like snow.

### SCENE s00621 | INT. TELEGRAPH OFFICE, CANAL LOCK HOUSE - NIGHT
Characters: ELIAS VANTERPOOL, TOBIAS GRILL, WINIFRED HALE, PRUDENCE
[beat 0] 1868. Lamplight, wet floorboards, a brass key clicking on the long oak counter. Rain hammers the shutters. Water is coming under the door in a slow, steady sheet. ELIAS VANTERPOOL, forties, stout, the clerk in charge, bends over the key. TOBIAS GRILL, twenties, his junior, stacks ledgers onto a high shelf. WINIFRED HALE, fifties, the lockkeeper's widow, stands by the stove with a shawl over her head. A girl, PRUDENCE, ten, sits on the counter with her boots held up out of the wet.
[beat 1] He taps out a line, stops, and taps it again. He does not look up. ELIAS: Upstream station says the gates at Marlow are gone. Everyone move your things up. TOBIAS: Gone how? ELIAS: Gone like gone.
[beat 2] He grabs a ledger from the lower drawer and hands it up. He takes it, but it is heavy and he nearly drops it. TOBIAS: Forty years of figures. Forty years, and we save the figures.
[beat 3] WINIFRED: Prue, up on the shelf with you. Now, please. PRUDENCE: It's wet up there too. She is lifted anyway. He sets her next to the ledgers and she hugs her knees.
[beat 4] ELIAS: Winifred, how long before it reaches the sill? WINIFRED: An hour. Less if the Anderton sluice stays open.
[beat 5] He keeps tapping. She watches him tap, and neither of them says what both know about the sluice.
[beat 6] TOBIAS: Sir, I could run to the lock house and shut it. ELIAS: You could drown at the lock house. TOBIAS: I could.
[beat 7] He pulls his coat on regardless. He is stopped at the door by a hand on his sleeve.
[beat 8] WINIFRED: Not you, boy. I know the wheel. I'll go. ELIAS: Winifred -- WINIFRED: Elias, send your message.
[beat 9] She wraps the shawl tighter and opens the door. The rain comes in like a thrown bucket. She is gone.
[beat 10] Elias bends to the key. His hand is steady. His jaw is not.
[beat 11] TOBIAS: Should've been me. PRUDENCE: Is she coming back? Elias taps. Tobias stares at the door. Nobody answers.

### SCENE s00622 | INT. ABANDONED DRIVE-IN PROJECTION BOOTH - DUSK
Characters: ROZ, BEAUMONT, KWAME ASANTE-BEAUMONT
[beat 0] Dust hangs in the last orange light like a held breath. A cracked projector squats in the middle of the room, and through the small square window the huge blank screen glows pink, empty of everything but weeds at its feet. ROSALIND "ROZ" BEAUMONT, sixty-eight, runs a thumb along the projector's lens cap as if checking a sleeping animal for a pulse. Her grandson, KWAME ASANTE-BEAUMONT, fifteen, stands in the doorway with a duffel bag he has not put down.
[beat 1] KWAME: Mum said you'd be mad. ROZ: Your mother's been saying that since 1994. I've never once been mad on schedule.
[beat 2] He lets the bag slide to the floor. She does not turn around.
[beat 3] ROZ: You want to see something? She flips a rusted switch. Nothing. She flips it again. The projector coughs, and a long, trembling beam of white light leaps out the window and lands on the screen like a thrown door.
[beat 4] KWAME: It works? ROZ: It does not. That's the sun, in the glass. Always happens at dusk. They both watch the shape of the light slide down the screen and fade.
[beat 5] KWAME: I'm sorry about Grandad. ROZ: Mm. KWAME: I'm sorry I didn't come.
[beat 6] ROZ: Sit down, you're blocking my view. He sits. She finally turns, and puts a hand briefly on his hair.

### SCENE s00623 | INT. GREENHOUSE AT A DEFUNCTIONING ORCHID BREEDER'S - NIGHT
Characters: ISOLDE FAIRWEATHER, TEDDY, NAKAMURA, PERPETUA OYELARAN, ANTON LUNDGREN
[beat 0] Steam clings to the glass like breath on a window. Rows of orchids glow under purple grow lamps, their petals speckled like skin, and the air is warm enough to loosen a collar. A long potting table has been set for a dinner nobody quite wanted: four chipped plates, a bottle of wine, a bowl of lemons. ISOLDE FAIRWEATHER, thirty-five, the breeder, in a canvas apron over a silk dress, pours wine with the steadiness of someone holding her hand still on purpose. Across from her, THEODORE "TEDDY" NAKAMURA, thirty-eight, who once loved her and has returned to buy the business, loosens his tie and looks everywhere but at her. At the end of the table sits PERPETUA OYELARAN, seventy, Isolde's aunt, picking a lemon apart with her fingernails. Beside her, his phone face-down by his plate, is ANTON LUNDGREN, forty, Isolde's fiancé, who has just realized who Teddy is.
[beat 1] ISOLDE: You flew eleven hours to look at flowers. TEDDY: I flew eleven hours for the Phalaenopsis line. The flowers are incidental.
[beat 2] ANTON: She doesn't sell the line. PERPETUA: Everything's for sale at the right hour of the night, Anton. ISOLDE: Aunt Perpetua. TEDDY: She isn't wrong.
[beat 3] ANTON: You two have history. Say it. I'd rather hear it than guess it. ISOLDE: Anton, not here. PERPETUA: I'd say here's the best place. Nothing here can hear but the orchids.
[beat 4] TEDDY: We were engaged. For nine months. It ended before you met her.
[beat 5] ANTON: She told me it was a boy she knew at school. ISOLDE: It was easier. PERPETUA: It always is.
[beat 6] TEDDY: Isolde, I'm not here to cause -- ANTON: Then why are you here, Teddy? Honestly. Why is there a man at my table who knows which side of the bed she sleeps on? ISOLDE: That's enough!
[beat 7] PERPETUA: Left. She sleeps on the left. ANTON: Perpetua!
[beat 8] Isolde stands. The bottle tips and wine runs across the table toward the lemons. Teddy reaches to catch it at the same moment Anton shoves his chair back, and the two men collide at the corner of the table, the chair crashing into a rack of seedlings, Perpetua calmly lifting her plate out of the flood and Isolde pressing both palms to her face.
[beat 9] Then, in the quiet of the falling trays, a single orchid stem snaps. ISOLDE: That one was nine years old.

### SCENE s00624 | INT. SUBMERGED BELL TOWER - UNDERWATER CHAPEL - NIGHT
Characters: KESTREL VANE, MORWENNA ASH, OLD CINDER, HOLLIS PRYCE, STRANGER, AMBROSE
[beat 0] Green light through drowned stained glass. Air pockets shiver beneath the vaulted ceiling. A rope ladder hangs into the dark. KESTREL VANE, 30s, hooded, perches on a pew back, a lantern of glowing moss in her lap. Four figures wade in from the nave. MORWENNA ASH, 50s, the Reeve, wears the keys of a dead town on her belt. Behind her, OLD CINDER, 70s, leans on a staff of coral. HOLLIS PRYCE, 20s, shield-bearer, carries nothing. And the STRANGER, hooded, no age, walks in last and drips nothing.
[beat 1] MORWENNA: You're late. KESTREL: Tide's late. Cinder lowers himself onto a pew. Hollis stays standing, jaw working.
[beat 2] STRANGER: Is this the place where the oath was broken? KESTREL: Depends who's asking.
[beat 3] The Stranger crosses to the altar. A single bell rope hangs there, wet and green. He lifts a hand toward it.
[beat 4] Hollis steps in his path. HOLLIS: Don't. STRANGER: You flinch like a man who has already rung it. Hollis says nothing. His hand drifts to the empty place where a sword should be.
[beat 5] CINDER: Let him, Hollis. HOLLIS: Cinder -- CINDER: Let. Him.
[beat 6] Hollis steps aside. The Stranger takes the rope. He does not pull.
[beat 7] MORWENNA: You were named at the drowning. I remember your face. STRANGER: Then you remember I was kind to you. Morwenna's hand closes around her keys until her knuckles go white.
[beat 8] KESTREL: Say your name, and I'll let you ring it.
[beat 9] The Stranger lowers his hood. A lean face, old scars like river-maps. He smiles at her the way one smiles at a debt.
[beat 10] STRANGER: Ambrose Thale. KESTREL: Good. AMBROSE: And now you must all stand very still.
[beat 11] He pulls the rope. No sound. The water in the nave goes flat as glass. Every flame in the room leans toward the bell, and then, together, all of them go out, and in the dark Hollis exhales for the first time in a year. A long beat. A single drip, somewhere.
[beat 12] Cinder laughs, soft and cracked. CINDER: Well. That's that.
[beat 13] Kestrel relights the lantern. Morwenna is already unbuckling her keys.

### SCENE s00625 | INT. MUNICIPAL WATERWORKS PUMP HOUSE - NIGHT
Characters: SILAS, BRANNIGAN, LOLLY, DUCHAMP, MARCUS JEROME FALK, NELL PETRAKIS
[beat 0] A cathedral of riveted iron and brass, three stories high, lit by one amber work lamp. Steam pipes sweat along the walls. The great pump wheel turns overhead with a patient, heavy rhythm, and behind a brick archway, a vault door the color of old pennies. SILAS "THE ACCOUNTANT" BRANNIGAN, fifties, silver hair, wire spectacles, wears a gray overcoat and a face like a closed ledger. He kneels at the vault, ear to the steel. LORETTA "LOLLY" DUCHAMP, forties, a redhead in a mechanic's coverall, holds a stopwatch and a flashlight. MARCUS JEROME FALK, thirties, tall and broad, wears a night watchman's cap two sizes too small, and sweats through it. NELL PETRAKIS, twenties, sits on a crate with a tool roll across her knees, pale and unblinking.
[beat 1] SILAS: Four minutes before the watchman's round. LOLLY: Three and a half. He's early on Thursdays. MARCUS: He's early because the Missus makes him.
[beat 2] SILAS: Hush. Nell, the drill. Nell unrolls the tools, hands him a slim steel bit. He nods once. The pump wheel overhead thumps like a heart.
[beat 3] LOLLY: Nobody breathe. Silas turns the bit. The vault ticks.

### SCENE s00626 | EXT. SALT FLAT - DEAD VEHICLE - DAY
Characters: IMOGEN STRAND, CALLUM REID
[beat 0] A white plain, blinding, cracked in hexagons to the horizon. The heat has a sound. A pickup truck sits dead on its rims with the hood propped open, and in its thin stripe of shade two figures sit side by side on the dirt. IMOGEN STRAND, forties, sun-darkened, cracked lips, a scarf tied over her head, shreds a map into narrow strips and braids them. Across from her, CALLUM REID, twenties, her nephew, with a gaze fixed so steady it has stopped meaning anything, turns a plastic bottle slowly, holding it up to the light. Half a finger of water. Maybe less.
[beat 1] IMOGEN: Eleven miles to the highway. Maybe nine. CALLUM: Maybe.
[beat 2] She finishes the braid and ties it around his wrist without asking. He lets her. IMOGEN: Should've turned at the cattle guard.
[beat 3] He sets the bottle down between them, label facing her, a quiet gesture of an offer. She pushes it back with one finger. He pushes it again. For a long moment neither of them speaks.
[beat 4] Then Imogen's eyes go past him, to the truck's rear bumper, and stay there. A pale smear of damp in the dirt. A slow, steady drip from under the truck.
[beat 5] Callum turns to look. His face doesn't change. His hand closes over hers. CALLUM: It's the radiator. IMOGEN: It's the water tank, Cal. The tank was full.
[beat 6] He gets up very slowly. In the shade of the chassis, the second spare jug lies on its side, its cap cracked, empty.

### SCENE s00627 | INT. VERTICAL FARM BREAK ROOM - FLUORESCENT PINK LIGHT - DAY
Characters: COMMUNAL FRIDGE, PRIYANKA DESAI, NAT, OYELOWO, FORMER BILLIE, STOCKTON
[beat 0] Under the grow-lamp glow, everyone looks sunburned and sick. Racks of lettuce climb the walls behind the vending machine. A sign on the fridge reads: THIS IS NOT A COMMUNAL FRIDGE. IT IS A FRIDGE OF COMMUNITY. PRIYANKA DESAI, thirties, Head of Culture, slides a cake onto the table with candles shaped like leaves. NATHANIEL "NAT" OYELOWO, forties, a quiet agronomist, stands near the sink in a fleece vest. WILHELMINA "BILLIE" STOCKTON, twenties, new hire, hovers by the door holding a tote bag.
[beat 1] PRIYANKA: Surprise! Welcome, Billie! BILLIE: Oh my gosh. You didn't have to. PRIYANKA: We always do. Right, Nat? NAT: We did for the last four. Priyanka laughs a half-second too long. Billie smiles and sets her bag on the counter.
[beat 2] BILLIE: Where do I... put my lunch?
[beat 3] She opens the fridge. Inside, every shelf is labeled with a name. One shelf has a pink sticky note: BILLIE'S, in Priyanka's handwriting. Another, in Nat's: FORMER BILLIE'S.
[beat 4] Billie looks at the note. She looks at Nat. Nat looks at the lettuce.
[beat 5] BILLIE: Who was the former Billie? PRIYANKA: Nobody. A joke. Cake?
[beat 6] She hands Billie a plate. She takes it with both hands, politely, and turns to Nat. BILLIE: Did she quit, or...
[beat 7] NAT: She harvested.

### SCENE s00628 | INT. LAUNDROMAT - NIGHT
Characters: MARISOL, DESMOND, JUNIOR, TAMSIN, CONCEPCIÓN
[beat 0] Dryers turning. Fluorescent hum. A broken vending machine. Five Hargrove-Delgados. One bench. GRANDMA CONCEPCIÓN, eighties, folds towels. Slow. Her daughter, MARISOL, fifties, scrolls her phone. Doesn't read it. MARISOL's husband, DESMOND, sixties, reads a newspaper upside down. Maybe on purpose. Their son, JUNIOR, twenty, headphones. Elsewhere. Their niece, TAMSIN, nine, counts quarters. Arranges them. Rearranges them.
[beat 1] CONCEPCIÓN: Almost done. Nobody move. JUNIOR: Nobody's moving, Abuela.
[beat 2] MARISOL: Junior. Take those off. He doesn't. She sighs and goes back to her phone. DESMOND: Forty minutes for two towels.
[beat 3] TAMSIN: Uncle Des, you're holding it wrong. DESMOND: It's fine. She takes it from him, turns it right side up. He nods, gravely.
[beat 4] CONCEPCIÓN: Tamsin, mija, how many? TAMSIN: Eleven. CONCEPCIÓN: We need twelve.
[beat 5] A pause. They all look at the machine. It hums back. MARISOL: We always need twelve.

### SCENE s00629 | INT. HOSPICE WING - NIGHT SHIFT NURSES' STATION
Characters: GRACE, ADEYEMI, DEVON MARSH, INTERCOM, DOREEN, LEONIDAS MARSH
[beat 0] Low light. Quiet monitors. A call button blinks red on a wall panel. Somewhere down the hall, a television murmurs a game show to nobody. GRACELYN "GRACE" ADEYEMI, fifties, charge nurse, signs a chart and doesn't look at her visitor. DEVON MARSH, thirties, the patient's son, stands at the counter in a rumpled suit, a paper cup of cold coffee in his hand.
[beat 1] INTERCOM: Station, room fourteen. Mr. Marsh is asking for his son again. GRACE: On my way, Doreen. She lifts a finger to Devon. He doesn't move.
[beat 2] DEVON: He keeps calling me Walter. GRACE: That's his brother. Passed in '98. DEVON: I know who Walter is. GRACE: Then you know it's not an insult.
[beat 3] Devon puts down the cup. His hand shakes slightly. DEVON: Grace, I'm not ready for this. GRACE: Nobody is, Devon. We just show up.
[beat 4] INTERCOM: Grace. He's asking for the window open. GRACE: Open it, Doreen. Let him have the air.
[beat 5] She turns back to Devon. GRACE: Go. Say you're Walter if you have to. DEVON: He'd know. GRACE: He'd know and he'd want it anyway.
[beat 6] A long breath. Devon straightens his tie, then loosens it again.
[beat 7] DEVON: You've done this a lot. GRACE: Thirty-one years. DEVON: Does it get easier? GRACE: No. You get kinder.
[beat 8] He nods. He goes. She watches him go down the hall until the dark takes his shoulders.
[beat 9] DOREEN: Grace? He's saying hello to somebody. GRACE: Good. LEONIDAS MARSH: Walter? Is that you, Walter?
[beat 10] Grace closes her eyes a moment. She picks up the pen and writes the time.

### SCENE s00630 | INT. COAL-TOWN CURLING RINK - NIGHT
Characters: BERNIE, ZIELINSKI, INGRID VAN DER MEER
[beat 0] A single sheet of ice under a tin roof, lit by hanging bulbs. A scoreboard with hand-painted numbers reads 7-7. The stands are empty but for a thermos and a folded flag. Cold breath hangs in the air. BERNADETTE "BERNIE" ZIELINSKI, fifties, coach, in a wool coat and a hat with a pom-pom gone gray, stands at the boards with a clipboard she hasn't looked at in an hour. INGRID VAN DER MEER, thirties, skip, crouches on the hack, broom across her knees, eyes locked on the button at the far end.
[beat 1] BERNIE: Last stone. Last end. Don't make it complicated. INGRID: It's already complicated.
[beat 2] She slides out and releases. The granite hisses down the sheet. Bernie walks along the boards beside it, and Ingrid follows, sweeping hard.
[beat 3] BERNIE: Hard, hard, hard! Give it everything! INGRID: Nobody's there, Bern. BERNIE: Somebody's always there.
[beat 4] The stone slows. Ingrid stops sweeping, and she sees what Bernie sees: it will stop a hair short of the button, one stone from a guard.
[beat 5] BERNIE: Off, off, off. INGRID: Off? BERNIE: Let it die.
[beat 6] She lifts the broom. The stone creeps, trembles, and settles an inch from the button, nudging the opponent's red stone to the back rings.
[beat 7] Silence. Then both of them breathe out.
[beat 8] BERNIE: That's it. INGRID: That's it? BERNIE: Measure it.
[beat 9] Ingrid pulls the steel measure from her pocket. She kneels over the rings, checks one stone, then the other, and holds still for a long moment. BERNIE: Well?
[beat 10] INGRID: Closer. By a thumbnail.
[beat 11] Bernie covers her mouth with her gloved hand. Ingrid sits back on the ice, laughing quietly, the broom across her lap, tears freezing at the edge of her eyes.
[beat 12] BERNIE: You see that? You see that? INGRID: She's taking the credit. BERNIE: She is.

### SCENE s00631 | INT. SHIPPING CONTAINER ON DRIFTING ICE FLOE - DAY
Characters: HALVOR NILSEN, DEE ARMSTRONG, PASHA VOLKOV
[beat 0] Gray light through a rust hole. Three bedrolls, a camp stove, a radio with its back off. Stillness, finally. HALVOR NILSEN, 50s, sits on an overturned bucket. DEE ARMSTRONG, 30s, tends the stove. PASHA VOLKOV, 20s, lies on a bedroll, eyes closed, a dark stain on his sleeve.
[beat 1] HALVOR: The wind's dropped. DEE: Finally. PASHA: Tell me it's warm out there. HALVOR: It's not warm. It's quiet. DEE: Quiet's the same as warm, right now.
[beat 2] PASHA: Dee, did you boil the rest of the coffee? DEE: I boiled all of it. We're out. PASHA: Out of coffee. DEE: Out of coffee.
[beat 3] HALVOR: Out of coffee, out of fuel in two days, out of floe in three. DEE: Halvor. HALVOR: I'm just saying the weather's good for talking. PASHA: Then talk.
[beat 4] HALVOR: The floe split in the night. The crack's under the east wall. I heard it. DEE: You said the wind -- HALVOR: The wind dropped. The ice didn't.
[beat 5] PASHA: How long? HALVOR: Hours. Maybe less. DEE: Of course it did.
[beat 6] PASHA: Open the door, Halvor. HALVOR: Pasha -- PASHA: I want to see it.
[beat 7] Halvor stands. The container groans, a long slow note like a cello, and the three of them look at the floor.

### SCENE s00632 | EXT. FLOODED BELL FOUNDRY - DAWN
Characters: CORPORAL AUGUSTIN LEFEBVRE, PRIVATE ANSELM WEBER
[beat 0] A broken roof, a pit of cold black water, and a great cracked bell lying on its side half-submerged. Smoke from a burning village drifts over the ridge. Rifle fire somewhere a long way off.
[beat 1] CORPORAL AUGUSTIN LEFEBVRE, twenties, French, mud to the knees, wades along the edge of the pit with his rifle held high. He stops. Across the water, on the far lip of the bell, a figure is crouched, equally muddy, equally still: PRIVATE ANSELM WEBER, twenties, German, a bandage on his forearm.
[beat 2] They raise their rifles at the same moment. Neither fires. LEFEBVRE: Tu es seul? WEBER: Allein.
[beat 3] A beat. The water between them ripples in the wind. LEFEBVRE: Put it down. WEBER: You first. LEFEBVRE: No.
[beat 4] Weber's finger moves on the trigger. Lefebvre's does too. A bird takes off from the broken roof and both of them flinch, and the rifles drop an inch.
[beat 5] They stay there. Weber's eyes go to the bell. WEBER: It's cracked. LEFEBVRE: It was cracked before.
[beat 6] Weber lowers his rifle, slowly, and sets it on the curve of the bell. He holds up his hands. Lefebvre watches him, wades one step closer, then two.
[beat 7] At three steps, the far wall of the foundry collapses with a roar. Both men dive. Lefebvre lands on the bell, Weber lands on him, and for a moment they are two shapes thrashing in the churned water, fists and elbows, a rifle sinking, a helmet floating away. Lefebvre gets an arm around Weber's neck. Weber bites his wrist. They both scream.
[beat 8] A shell lands in the village beyond the ridge, and the whole pit shudders. They freeze. Both of them, still tangled, looking at the sky. WEBER: That's ours. LEFEBVRE: That's ours.
[beat 9] Slowly, they let go of one another. Weber retrieves his helmet from the water. Lefebvre wipes his bleeding wrist on his sleeve.
[beat 10] LEFEBVRE: There's a road past the bell. Go. WEBER: Why?
[beat 11] Lefebvre shrugs. He picks up his rifle and does not point it. Weber waits, then wades out of the pit, climbing the ridge in the smoke. Halfway up, he turns, lifts one hand.
[beat 12] Lefebvre does not lift his. He sits down heavily on the bell and takes out a cigarette that is too wet to light.

### SCENE s00633 | INT. FERRY GALLEY KITCHEN - EVENING
Characters: PHILOMENA OKAFOR-BRANDT, YOUNG MAN, LEO
[beat 0] A steel counter, a rattling stockpot, windows fogged by the steam. The boat rolls gently.
[beat 1] PHILOMENA OKAFOR-BRANDT, seventies, the ferry's cook, stirs without looking. A YOUNG MAN, twenties, stands at the galley door, soaked, holding a small suitcase against his chest. PHILOMENA: We're closed to the public. YOUNG MAN: I'm not the public.
[beat 2] She turns. She sees his face. The ladle stays in her hand, dripping. PHILOMENA: You have your father's jaw. YOUNG MAN: That's what Mum said. PHILOMENA: Sit.
[beat 3] He does. She ladles soup into a mug and sets it before him, her hand trembling for an instant over the rim.
[beat 4] PHILOMENA: Name. YOUNG MAN: Leo. PHILOMENA: Leopold. LEO: Leo. PHILOMENA: I was going to say it's a fine name.
[beat 5] LEO: You didn't know I existed. PHILOMENA: I knew every day.
[beat 6] They both stop. They both stare into the soup. The ferry's horn sounds, low and long, and the cups on the shelf chime against their hooks.
[beat 7] Leo takes up the spoon, and Philomena sits down across from him at last. Their hands meet on the counter, and neither moves away.

### SCENE s00634 | INT. PLANETARIUM DOME, CITY SCIENCE MUSEUM - NIGHT
Characters: TOMASZ KR, KROL, ADAORA NWOSU, DEZ, HARTIGAN, LUCINDA VASQUEZ-WILDE
[beat 0] A hemisphere of dark. Rows of reclined seats in concentric rings. At the center, the projector: a black iron dumbbell on a pedestal, gleaming. Stars drift overhead, paused at midsummer. The only other light is the emergency green over the exit.
[beat 1] TOMASZ KRÓL, fifties, in a security guard's jacket, a name tag reading T. KROL, stands at the dome's rim with a flashlight he isn't using.
[beat 2] The projector's access hatch is open. Inside, a woman's legs. Then the rest of her: ADAORA NWOSU, forties, a technician's harness, clipboards of schematics. She is hanging from the dome's catwalk by two cables, laying a case onto a cart.
[beat 3] DESHAWN "DEZ" HARTIGAN, thirties, in a docent's blazer, watches from the front row with his arms folded. LUCINDA VASQUEZ-WILDE, sixties, silver bob, pearl earrings, stands at the aisle, one hand resting on the back of a seat. She looks like she owns the dome. Perhaps she does.
[beat 4] TOMASZ: Time check. DEZ: Eleven fifty-two. Rounds at twelve fifteen.
[beat 5] ADAORA: I need the lens case. LUCINDA: It's by your left hand. ADAORA: My left's holding a cable. LUCINDA: Then use the right.
[beat 6] Adaora does. She slides the case across and catches it. Her wrist wobbles. Dez rises half an inch from the seat, then sits again. DEZ: Easy.
[beat 7] TOMASZ: You said the lens was in the base. ADAORA: It was in the base. TOMASZ: It's in the housing. ADAORA: Then it moved. TOMASZ: Lenses don't move. LUCINDA: This one does.
[beat 8] Tomasz turns the flashlight on at last. He sweeps it across the faces in the dark, one by one. They don't blink.
[beat 9] TOMASZ: How many people know it moved? DEZ: Us. TOMASZ: And the man who moved it. LUCINDA: Whom you've never met. TOMASZ: Yes I have.
[beat 10] Silence. The stars hang overhead, patient as an audience.
[beat 11] ADAORA: Tomasz. TOMASZ: Not now. ADAORA: Tomasz -- TOMASZ: I said not now.
[beat 12] He lowers the light. Dez picks at a thread on his sleeve. Lucinda doesn't move.
[beat 13] TOMASZ: Whatever happens at twelve fifteen, I don't want to hear a word of it after. DEZ: Understood. LUCINDA: Naturally. ADAORA: Understood.
[beat 14] He nods. He crosses the aisle. He looks up at the projector, at the delicate, oiled, indifferent machine, and puts his hand flat against its cold side as if feeling for a pulse. TOMASZ: Thirty years.
[beat 15] Dez stands. He walks to the aisle and stops beside Lucinda. She does not look at him. DEZ: He's going to see it, you know. The last frame. LUCINDA: He already has.
[beat 16] Adaora lowers herself from the catwalk onto the stage, her boots clicking on the floor. She holds the lens case in both hands, the way you'd hold a sleeping child. ADAORA: It's good. It's the real one. LUCINDA: Of course it is. Dez glances at his watch. DEZ: Eleven fifty-nine.
[beat 17] Tomasz turns off the flashlight. The dome goes dark except for the green glow at the exit and the slow-turning stars. TOMASZ: Let's go.
[beat 18] They move. Not in a group, but each one separately, in a loose line along the aisle toward the exit, their footsteps muffled by the carpet. Lucinda is last.
[beat 19] At the door, she stops. LUCINDA: Goodnight, old friend. She waits. The stars shift an inch as if the dome were breathing. Then she goes.
[beat 20] The projector sits alone on its pedestal, a dark dumbbell under a dead sky.
[beat 21] From the corridor, faintly, a key turns in a lock.

### SCENE s00635 | INT. MOBILE DOG-GROOMING VAN - STUCK IN AUTOMATIC CAR WASH - DAY
Characters: WENDY, OBUYA, TRISTAN FAIRCLOUGH, LENNY, BASKERVILLE
[beat 0] Soap pours down the windshield in sheets. Brushes thump on the roof. Inside, a cramped cabin of clippers, towels, and a tiny steel tub where a very large poodle sits looking mortified.
[beat 1] GWENDOLYN "WENDY" OBUYA, forties, groomer, in a rubber apron, grips the steering wheel with both hands. Beside her, TRISTAN FAIRCLOUGH, twenties, her apprentice, holds a phone to his ear.
[beat 2] WENDY: Tell me they're turning it off. TRISTAN: They're, um, looking at it. LENNY: Sir, the system shows your vehicle as "paid but not exited." That's a process state. TRISTAN: Can you turn the brushes off? LENNY: That's a process state. WENDY: What does that mean? LENNY: It means you're in the process.
[beat 3] Wendy closes her eyes. The brushes thump louder. The poodle whines. TRISTAN: It's okay, Duchess. It's okay. WENDY: Don't talk to her. She knows we're lying. LENNY: Sir, do you want the premium rinse? You're getting it anyway.
[beat 4] Click. The line dies. The van lurches forward a foot and stops. WENDY: I swear to God.
[beat 5] The side door slides open. A man in a drenched uniform pushes in, one arm over his head against the spray: LEONARD "LENNY" BASKERVILLE, sixties, wearing a name badge that says MANAGER and a visible pool of soap in his hair. LENNY: Who's in charge of this vehicle? WENDY: Me. Why are you in my van? LENNY: Because it's in my wash. TRISTAN: There's a dog in here, sir. LENNY: I can see that. Is it licensed? WENDY: For what? LENNY: For the wash.
[beat 6] The brushes thump. The poodle sneezes a mouthful of foam. Lenny looks at it, and the dog looks back.
[beat 7] Wendy takes her foot off the brake. WENDY: Hold on to something, Lenny. LENNY: What?
[beat 8] She guns the engine. The van lurches, crunching through a plastic barrier, and bursts out the far end of the tunnel into daylight, trailing foam and a small yelp of triumph from Duchess. LENNY: I said thank you for choosing SparkleJet!

### SCENE s00636 | INT. MOBILE MRI TRAILER - PARKED BEHIND RURAL CLINIC - MORNING
Characters: SABINA ROTHENBERG, TECHNOLOGIST FELIX AGYEMAN, ARMANDO KESSLER
[beat 0] A white box on wheels with a humming magnet at its heart. A glass partition. On the other side, a patient lies on a sliding table with his head in a cage.
[beat 1] DR. SABINA ROTHENBERG, forties, radiologist, sits at the console, tapping the mouse. Beside her, TECHNOLOGIST FELIX AGYEMAN, thirties, adjusts a dial. On the table, ARMANDO KESSLER, sixty, a farmer, looks at the ceiling.
[beat 2] SABINA: Mr. Kessler, this is the last sequence. Just breathe normally. ARMANDO: Doc, you've said that three times. SABINA: And I mean it more each time.
[beat 3] Felix smiles briefly. The magnet knocks in a steady rhythm. FELIX: Motion's good. He's a model patient. SABINA: He's lying very still. FELIX: That's what I said.
[beat 4] SABINA: Felix, when did he last eat? FELIX: Six, he said. He drove forty miles. SABINA: Mm.
[beat 5] The images build on the monitor, slice by slice. Sabina leans closer. Her smile slackens. FELIX: Everything okay? SABINA: Yes. FELIX: You went quiet. SABINA: I'm reading.
[beat 6] The magnet knocks. Felix watches her for a long moment, and then looks at the screen. FELIX: Is that -- SABINA: Don't. FELIX: It's bilateral. SABINA: I said don't. FELIX: Sabina. SABINA: Not until he's out of the machine. Felix slowly takes his hand off the dial.
[beat 7] ARMANDO: Everything all right in there? You two have gone awful quiet. Sabina presses the button. SABINA: Everything's fine, Mr. Kessler. A few more minutes.
[beat 8] She releases it and sits very still, and Felix, without a word, reaches over and turns the monitor away from the glass.
[beat 9] The magnet knocks. And knocks.

### SCENE s00637 | INT. TRAVELING CINEMATOGRAPH TENT - LATE AFTERNOON
Characters: MAGDALENA PRZYBYLSKA, BART, CROWLEY, NICK, LIPSKI
[beat 0] 1912. A canvas tent pitched in a wheat field. Bare benches, a sheet strung up for a screen, and sunlight leaking through the seams in thin gold blades. Smell of hot dust and machine oil.
[beat 1] MAGDALENA PRZYBYLSKA, forties, hands rough as bark, a leather apron over a plain gray dress, cranks the projector at the back of the tent. Slow. Even. A woman who has done this ten thousand times. BARTHOLOMEW "BART" CROWLEY, fifties, thick-necked, in a checked waistcoat, paces the center aisle. He owns the tent. He owns the sheet. He thinks he owns Magdalena. NIKODEM "NICK" LIPSKI, fifteen, thin, a cap too big for him, sits cross-legged on the front bench with a coil of film in his lap.
[beat 2] BART: Doors in an hour. Not a seat taken yet. MAGDALENA: It's harvest. BART: Harvest is when they want a show. MAGDALENA: Harvest is when they want sleep.
[beat 3] He doesn't answer. He stops beside the boy and flicks the brim of his cap. BART: Nick. The reel. NICK: Mending it. BART: Mend faster.
[beat 4] Nick bends to his work. Magdalena's hand keeps turning the crank. BART: Three towns, no profit. Three towns. MAGDALENA: Four, if you count the rain. BART: I don't count the rain. MAGDALENA: You should.
[beat 5] The sheet stirs. A breeze lifts it, and a bar of light slides across the benches and falls across Nick's face. He looks up, startled, then smiles at it.
[beat 6] Magdalena sees. She slows the crank a fraction. MAGDALENA: Nikodem. Come here.
[beat 7] He crosses the aisle. She lifts the lens cap, and the sheet fills with a dancing square of white. MAGDALENA: Hold your hand up. He raises it. The light turns his palm to a pale map, the lines in it dark as rivers. NICK: That's me. MAGDALENA: That's you.
[beat 8] BART: What's this? He has come up quietly behind them. Magdalena doesn't turn. MAGDALENA: Teaching. BART: I pay for projecting, not for teaching. MAGDALENA: Then don't pay.
[beat 9] A long pause. Bart's ears go red. BART: Nick. Back to your bench. Nick looks at Magdalena. She nods once. He goes.
[beat 10] BART: Don't spoil him. MAGDALENA: Spoil him? He's the only one in this tent who looks at the picture.
[beat 11] Bart opens his mouth, closes it, and picks up the tin of film from the table. He tosses it from hand to hand, hard enough to ring. BART: Doors in forty minutes. MAGDALENA: We'll be ready.
[beat 12] He leaves. The flap swings shut behind him.
[beat 13] Magdalena exhales. She turns the crank again, slowly, and the white square on the sheet flickers into a picture: a train arriving at a station, small and silent and bright.
[beat 14] Nick comes back and sits in the front row. He doesn't speak. NICK: Is it real? MAGDALENA: It was. Once.
[beat 15] She keeps turning. The train keeps coming. In the field outside, a harvester sounds its horn, far away, and the light on the sheet pulses once in time with it.
[beat 16] NICK: Magdalena. Will you teach me the crank? MAGDALENA: Not today. NICK: When? MAGDALENA: When he's gone.
[beat 17] He nods. Neither of them looks at the door. The train pulls in, and the little silent crowd on the sheet waves at nobody.
[beat 18] Magdalena lets the film run out. The sheet goes white, then gray, then plain canvas again.
[beat 19] She stands, rubs her shoulder, and for a moment, in the thin gold light, she looks fifteen years younger. MAGDALENA: Doors, then.

### SCENE s00638 | INT. SCHOOL BUS ON CAR FERRY - NIGHT
Characters: JUNE, OKONKWO, ZEKE, MAHLANGU, LOTTIE FAIRBANKS-WU
[beat 0] The bus is parked in the belly of the ferry, engine off, rain drumming on a steel ceiling. Yellow seats, a cracked mirror, a faint smell of wet sneakers. Three teenagers sit in the back rows, sharing a bag of chips.
[beat 1] JUNIPER "JUNE" OKONKWO, seventeen, braids and a borrowed varsity jacket, sits sideways in her seat. EZEKIEL "ZEKE" MAHLANGU, eighteen, tall, quiet, holds a scholarship letter folded very small. LOTTIE FAIRBANKS-WU, sixteen, the youngest, wears her dad's headphones around her neck.
[beat 2] JUNE: Okay, rule: nobody lies, nobody leaves, nobody tells. LOTTIE: We're on a boat. Where would I leave to? ZEKE: She's got a point.
[beat 3] JUNE: Zeke. Read it. ZEKE: No. JUNE: You said you would. ZEKE: I said I'd think about it. LOTTIE: Is it from the university? ZEKE: Yes. LOTTIE: Are you going? ZEKE: I don't know. JUNE: Zeke. Read it. ZEKE: June, it's not a big deal. JUNE: It's the biggest deal.
[beat 4] He unfolds the paper. It crackles in the quiet. He holds it away from his face, squints, and drops his hand. ZEKE: They gave me the full ride.
[beat 5] Silence. Lottie looks at June. June looks at the window. LOTTIE: That's... amazing, Zeke! ZEKE: Is it? JUNE: It is. ZEKE: You don't sound like it is.
[beat 6] JUNE: Because I'm not happy for you. I'm happy for me, that you got it, and I'm furious for me, that you're leaving. LOTTIE: Oh. ZEKE: June -- JUNE: Don't. Don't say anything. I'll be fine. I'll be fine in about four years.
[beat 7] She pulls her knees up. The ferry rolls and the bus creaks. Lottie slowly slides over to sit between them.
[beat 8] LOTTIE: I'll write to both of you. In pen. ZEKE: In pen? LOTTIE: Pen is permanent.
[beat 9] For a moment nobody moves. Then June starts to laugh, a wet, helpless laugh, and Zeke follows, and Lottie, a beat late, joins them, and the bus rocks with it, the whole yellow tube shaking in the dark. JUNE: Okay. Okay. Chips. Lottie passes the bag.

### SCENE s00639 | INT. TAILOR'S ALTERATION ROOM, BACK OF A WEDDING SHOP - NIGHT
Characters: BEA, LANDGRAF, SORAYA KHALILI
[beat 0] A narrow room of mannequins and hanging gowns, pins scattered on the floor like silver rain. A three-way mirror throws back endless versions of the same two women.
[beat 1] BEATRIX "BEA" LANDGRAF, sixties, tailor, kneels at the hem of a wedding dress with a mouthful of pins, while her client, SORAYA KHALILI, thirties, stands on the fitting platform in ivory silk, jaw tight, one hand clenched around a bouquet of paper flowers.
[beat 2] Bea tugs the hem and Soraya flinches. Bea tugs again, harder, and Soraya looks down at her, and then past her to the three-way mirror where the dress looks like it belongs to someone happier.
[beat 3] Bea finally takes the pins from her mouth, sets them one by one in a velvet cushion, and stands, her knees cracking, while Soraya watches her in the glass instead of in person.
[beat 4] BEA: It's too long. SORAYA: I know. BEA: You told me three inches. It needs four. SORAYA: Then four.
[beat 5] BEA: She said you'd say that. SORAYA: Who said? BEA: Your mother. She said you would let anyone cut anything.
[beat 6] Soraya turns her gaze to the floor. Bea kneels again, takes a pin, and holds it up to the light. She pushes it into the silk with a small deliberate click, and the dress seems to tighten around Soraya's ribs.
[beat 7] SORAYA: Bea. If I wanted to leave tonight -- through the back, through the alley -- would you stop me?
[beat 8] Bea doesn't answer. She finishes the pin. She reaches for another.
[beat 9] Then she sets her scissors on the cushion, stands, and, with both hands, begins unfastening the buttons down Soraya's spine, one by one by one, until the silk slides from her shoulders like a held breath.
[beat 10] BEA: The alley door sticks. Lift as you pull.

### SCENE s00640 | INT. TAXIDERMIST'S WORKSHOP - NIGHT
Characters: SASHA, MELNYK, RAFFI, COSTANZA
[beat 0] Glass eyes in trays. A badger on a stand. A fox mid-leap, forever.
[beat 1] OLEKSANDR "SASHA" MELNYK, sixties, apron stiff with old plaster. Scalpel in hand. Steady.
[beat 2] RAFAELLA "RAFFI" COSTANZA, forties. Camel coat. Sits on a stool among the heads. Smiling.
[beat 3] RAFFI: You're late with the money, Sasha. SASHA: I'm late with everything. Ask the owl. RAFFI: The owl isn't my problem. SASHA: The owl has been my problem six weeks. Every customer wants it perfect. Nobody wants to pay for perfect. RAFFI: Neither do I. SASHA: I told your brother in March. I said, give me till the autumn. RAFFI: It's autumn. SASHA: It's the end of autumn.
[beat 4] RAFFI: Sasha. Sasha. I like you. I like the shop. I like that nobody's been in here since Easter and the place still smells like a church. SASHA: That's the formaldehyde. RAFFI: That's what I said. SASHA: You want the shop? Take it. You want the badger? Take the badger. But don't stand there telling me you like me. RAFFI: I do like you. SASHA: Then why are you in my chair?
[beat 5] She stands. Slowly. Pulls a long glass jar from the shelf and weighs it in her palm.
[beat 6] Sasha lifts the scalpel an inch. RAFFI: Put it down. SASHA: You put it down.
[beat 7] The jar flies. Sasha ducks. Glass bursts on the badger. Raffi lunges across the bench and they crash into the shelves. Eyes spill across the floor, hundreds of them, rolling.
[beat 8] Raffi pins his wrist. He drives a knee into her ribs. She gasps. The scalpel skitters away under the fox.
[beat 9] They stop. Both breathing hard. Both looking at the dozens of little glass eyes staring up from the floor.
[beat 10] SASHA: Now you've made a mess.

### SCENE s00641 | INT. SALT MARSH RELAY STATION - DAY
Characters: ROSALIE FENN, TAD
[beat 0] A low adobe hut crouched among white crusted flats where nothing grows. Inside: a plank table, a rusted stove, a calendar from three years ago. Heat shimmers through a single dirty window. Outside, a lone horse stands tied to a post, head hanging.
[beat 1] ROSALIE FENN, forties, the station keeper, wears a man's hat and a woman's pride. A widow's ring on a chain around her neck. She is scrubbing a tin plate when the door slams open.
[beat 2] THADDEUS "TAD" McCREADY, thirties, black duster gray with dust, a bandage dark with blood at his shoulder, falls across the threshold with a pistol in his fist. TAD: Nobody move. ROSALIE: There's nobody to move, mister. TAD: I said nobody move!
[beat 3] He swings the pistol around the hut, corner to corner, finds only a cat on the sill. Then Rosalie.
[beat 4] ROSALIE: You're bleeding on my floor. TAD: Where's the stage? ROSALIE: Gone through at noon. Won't be back till Thursday. TAD: Thursday.
[beat 5] ROSALIE: It's Tuesday. Put the gun down and sit. TAD: Lord help me.
[beat 6] He doesn't put it down. His hand wobbles. Sweat runs into his eyes. She sets the plate on the table and slowly dries her hands on her apron.
[beat 7] ROSALIE: I've seen men bleed. I've seen men run. I've never seen one do both and keep hold of a gun. TAD: You calling me a fool? ROSALIE: I'm calling you a patient. Sit.
[beat 8] The pistol drops to his side. He sits. The chair shrieks.
[beat 9] She pulls a bottle from under the stove and pours into a cracked cup. ROSALIE: Drink. He does. His shoulders loosen. She kneels to unwind the bandage.
[beat 10] TAD: There's three men behind me. ROSALIE: Then we'll want to be quick.
[beat 11] She works. The cat watches. Outside, the horse snorts and stamps once, and a thin line of dust rises on the horizon. ROSALIE: Always three.
[beat 12] She ties off the bandage and takes a rifle down from the rafters.

### SCENE s00642 | EXT. CABLE CAR GONDOLA, MIDWAY OVER ALPINE GORGE - NIGHT
Characters: MAGNUS HALVORSEN, SOL, ARRIAGA, PRISCILLA TRENT, JIN-HO PARK
[beat 0] A tiny glass cabin dangling from a single cable above a black abyss. Wind groans through the steel. Snow beads on the windows. Inside, four passengers sit pressed together on cold benches, lit by a flickering emergency strip.
[beat 1] MAGNUS HALVORSEN, fifties, a ski instructor in a red parka, grips the safety rail. SOLEDAD "SOL" ARRIAGA, thirties, a nurse in a cardigan, kneels beside the seat where PRISCILLA TRENT, seventies, in a fur-trimmed coat, sits very pale. JIN-HO PARK, twenties, a backpacker, holds a dead phone in both hands.
[beat 2] MAGNUS: Stay calm. They'll restart the motor in the next few minutes. SOL: You said that twenty minutes ago, Magnus. MAGNUS: And I'll say it again.
[beat 3] JIN-HO: Is it moving? PRISCILLA: Everything's moving, dear. We're on a string.
[beat 4] SOL: Mrs. Trent, look at me. Breathe through your nose. PRISCILLA: I am breathing, Soledad. SOL: Slower, then.
[beat 5] The gondola lurches. Everyone grabs something. Jin-ho slides across the bench into Magnus, and Magnus catches him by the front of his jacket. JIN-HO: Sorry, sorry -- MAGNUS: Sit. Hold the bar.
[beat 6] A sharp metallic crack from the cable above. The cabin drops three feet, swings, and slams to a halt. Priscilla cries out. Sol throws her arms around her. Magnus and Jin-ho fall together against the glass and for a moment all four are a heap of coats, elbows, gasps. MAGNUS: Everyone, don't move! No one does. The cabin sways, slowly, like a pendulum losing its argument.
[beat 7] SOL: Jin-ho, can you reach the hatch? JIN-HO: It's over my head. SOL: Magnus can lift you. MAGNUS: Not with this rope between my --
[beat 8] PRISCILLA: Magnus Halvorsen, you will lift that boy.
[beat 9] A beat. Magnus nods. He braces his boots against the bench and cups his hands. Jin-ho steps up, one knee on Magnus's palms, and fumbles at the roof hatch. It resists.
[beat 10] He pounds it with his fist, and it pops open, and a rope ladder tumbles down into the cabin from a rescue helicopter's lamp, white and blinding. SOL: Priscilla! Priscilla, look! PRISCILLA: I see it, dear. I'm not blind.
[beat 11] Magnus bursts into tears.

### SCENE s00643 | INT. ABANDONED ANTARCTIC WEATHER STATION - DAY
Characters: HESTER VANTONGEREN
[beat 0] A single room the size of a train carriage. Frost on the inside of the windows. A pegboard of rusted instruments, a cot with a sleeping bag, a radio set under a tarp. The wind outside is a long low voice, never stopping.
[beat 1] HESTER VANTONGEREN, fifties, hair cropped short and gone white, face seamed by weather and something older. A green parka, hood down, fingerless gloves. She has been here four days.
[beat 2] She sits at the radio with a pencil. She has a notebook. She writes a column of numbers, stops, crosses it out, writes another. On the shelf beside the set: a battered cassette recorder, one red light glowing.
[beat 3] She presses PLAY. HESTER: Day one. Landed on schedule. Station intact. Heater functional. Supplies for three weeks, if I'm careful.
[beat 4] Hester pauses it. She looks at the cot. At the neat blankets, the folded socks beneath them.
[beat 5] She presses PLAY again. HESTER: Day two. Wind picking up. Radio silent but the batteries are fresh. I will try again at noon.
[beat 6] She switches it off. She gets up. At the window she scrapes frost with a thumbnail until a little clear patch opens, white on white, a sky and a ground with no seam between them.
[beat 7] She opens the stove. One log left. She holds it for a moment, weighing it, then puts it back and closes the door.
[beat 8] She returns to the radio. Turns a dial. Static. She keys the mic.
[beat 9] HESTER: Station Ember, Station Ember. Anyone. Static.
[beat 10] She releases the key. She does not repeat. She sits for a long minute with her hands flat on the table.
[beat 11] Then she picks up the pencil and writes, very slowly, in the notebook: DAY FIVE. She stops.
[beat 12] She presses the recorder's RECORD button. The red light shifts. HESTER: Day five. Wind steady. I'm fine.
[beat 13] She lets the tape run for several seconds of silence. The wind fills it. Then she turns the recorder off, picks up the last log, and carries it to the stove.

### SCENE s00644 | INT. GARAGE CANNING KITCHEN - AFTERNOON
Characters: FITZ, MULLIGAN, SIOBHAN, ROXANNE, KAI, BEATA
[beat 0] Steam, vinegar, dill. Two folding tables of jars. A burner humming under a tall pot. The garage door is open on a sunny cul-de-sac.
[beat 1] FITZGERALD "FITZ" MULLIGAN, seventies, stirs the brine with a wooden paddle. His daughters, SIOBHAN, fifties, and ROXANNE, forties, work the packing line, and neither has looked at the other in an hour. Two grandchildren hover: KAI, twelve, with a stack of lids, and BEATA, nine, with a roll of labels.
[beat 2] SIOBHAN: Dad, the salt's wrong. ROXANNE: It's fine. SIOBHAN: It's too much, Rox. FITZ: It's been this recipe since 1971. ROXANNE: Siobhan counts every grain like it's evidence. SIOBHAN: Because someone has to!
[beat 3] KAI: Can I put the lids on? BEATA: I'm doing the labels, Kai.
[beat 4] FITZ: Everyone do their own thing. SIOBHAN: Dad, you always say that!
[beat 5] Roxanne drops a jar. It shatters. Pickles skid across the floor. Kai freezes, Beata squeals, Siobhan lunges to stop the brine from spilling, Fitz sets down the paddle and turns off the burner.
[beat 6] FITZ: That's enough. Everybody out. ROXANNE: Dad -- FITZ: Out. I'll finish.
[beat 7] They leave, one by one. He sits on an overturned crate among the pickles and, very quietly, begins to laugh.

### SCENE s00645 | INT. KARAOKE BAR BACK OFFICE - NIGHT
Characters: VITO ARCARO, DMITRI SOKOLOV, MERCEDES OYELADE, SPOONS, FINNEGAN
[beat 0] Muffled singing through the wall. A desk, a safe, a stained couch.
[beat 1] VITO ARCARO, fifties, sits behind the desk. Rings. Calm. DMITRI SOKOLOV, forties, stands by the safe. Arms crossed. MERCEDES OYELADE, thirties, the new accountant, sits on the couch. Laptop open. "SPOONS" FINNEGAN, twenties, holds the door. Mostly.
[beat 2] VITO: Count it again. MERCEDES: I counted twice. It's short by nine thousand.
[beat 3] DMITRI: He took it. VITO: Who? DMITRI: Spoons. SPOONS: I didn't take nothing. DMITRI: He took it. He's got the key.
[beat 4] VITO: Dmitri, he took it, you say. He says he didn't. Mercedes says it's short. MERCEDES: I say it's short. I don't say who. SPOONS: Boss, I swear --
[beat 5] VITO: Sit. Spoons sits. Dmitri doesn't. Through the wall, someone hits a very sharp note on "My Way."
[beat 6] VITO: Dmitri. You've been here eleven years. Why would he steal from you? DMITRI: He wouldn't. I would.
[beat 7] Silence. Vito smiles. Mercedes closes the laptop.

### SCENE s00646 | EXT. LAKE - FOG - DAWN
Characters: KIRSTEN BLOMQVIST, RAJESH IYER
[beat 0] A rowboat adrift on gray water. No shore in any direction. The oars lie shipped. A lantern burns without need of light.
[beat 1] KIRSTEN BLOMQVIST, forties, sits at the stern, wrapped in a blanket, eyes fixed on a fixed point in the mist. RAJESH IYER, fifties, her husband, sits at the bow with a thermos between his knees. They have not spoken in an hour.
[beat 2] He unscrews the cap. He pours half into the lid, passes it back along the boat without a word. She takes it. She drinks. She returns it.
[beat 3] He sets the lid on the thwart. He studies the water.
[beat 4] RAJESH: Did you hear something? KIRSTEN: No. RAJESH: There was a bell. KIRSTEN: There's no bell.
[beat 5] He listens. The fog presses in. She pulls the blanket tighter and looks at his hands, which are shaking, and then at her own, which are not.
[beat 6] She reaches under the seat. She finds the second thermos. She sets it on the bench between them, unopened. RAJESH: We'll want that later. KIRSTEN: Yes.
[beat 7] He nods. She nods. They both look out at the gray.
[beat 8] Far off, faint, one clear note. A bell.
[beat 9] Neither of them turns.

### SCENE s00647 | INT. NIGHT MARKET FISH STALL - 3 A.M.
Characters: INSPECTOR HONOR MBEKI, WEI-LING CHEN, KEN, DOYLE, ZSOFIA SZABO
[beat 0] Crushed ice, tin tubs, and a hanging bulb swinging in the draft of the refrigeration fans. Silver bodies glisten in rows. A radio plays something thin and old.
[beat 1] INSPECTOR HONOR MBEKI, forties, in a gray trench, stands under the bulb with her hands in her pockets. Across the counter, WEI-LING CHEN, sixties, a fishmonger in rubber boots, guts a snapper with a short, bright knife. Between them, on the ice, a plastic bag with something heavy and dark inside. Behind the stall, half-hidden by the tarp, KENDRICK "KEN" DOYLE, thirties, in a hoodie, watches and chews a thumbnail. In the far corner, ZSOFIA SZABO, seventies, who sells the next stall's lemons, sits on an upturned crate peeling one with her thumbnail, apparently asleep.
[beat 2] MBEKI: Mrs. Chen. This bag was in your ice. WEI-LING: Everything's in my ice. MBEKI: Is it yours? WEI-LING: I sell fish.
[beat 3] The knife keeps moving. Ken shifts his weight. The tarp rustles. Mbeki's eyes flick to it, and back.
[beat 4] MBEKI: Anyone else want to claim it? Silence. Zsofia's lemon peel falls in a single long spiral.
[beat 5] KEN: Not mine. MBEKI: I didn't ask you, Mr. Doyle. KEN: You said anyone. MBEKI: So I did.
[beat 6] Wei-Ling lays the knife down, wipes her hands, and slides the bag toward Mbeki across the ice without breaking eye contact. Ken starts forward, stops. Zsofia opens one eye. Mbeki takes the bag, weighs it, and sets it down.
[beat 7] MBEKI: Mrs. Chen. Open it. WEI-LING: Why? MBEKI: Because it's yours.
[beat 8] Wei-Ling's face doesn't move. But her hand, reaching for the zipper, trembles. She opens it.
[beat 9] Inside: a heavy iron key ring, dozens of keys, and a folded photograph of a young man. She looks at the photo for a long time.
[beat 10] WEI-LING: That is my son.
[beat 11] Ken drops his thumb from his teeth. Zsofia, quietly, sets down the lemon.

### SCENE s00648 | INT. CALL CENTER IN DRAINED CRUISE-SHIP POOL - DAY
Characters: ARDEN PELLEGRINO, BASHIR QURESHI, COLETTE MARCHAND, HOLLY, ABERNATHY
[beat 0] The pool deck has been repurposed. Desks rest on the tiled floor of the deep end, headsets dangling from the old diving board. Painted fish swim up the walls. The light is aquamarine and there is a persistent smell of chlorine and burnt coffee.
[beat 1] ARDEN PELLEGRINO, forties, regional manager, in a lanyard heavier than his tie, stands on the shallow-end steps with a whistle around his neck. BASHIR QURESHI, thirties, team lead, sits at the nearest desk running a spreadsheet. COLETTE MARCHAND, twenties, the newest agent, holds a script in both hands, mouthing it. HOLDEN "HOLLY" ABERNATHY, fifties, the veteran, sits with his feet up and a headset around his neck, eyes closed.
[beat 2] ARDEN: All hands! Gather round the drain! BASHIR: Arden, there's no one else here. ARDEN: I know, Bashir. It's a habit.
[beat 3] COLETTE: Is this about the numbers? HOLLY: It's always about the numbers.
[beat 4] Arden blows the whistle. Nobody flinches. A gull cries somewhere outside.
[beat 5] ARDEN: The ship's been sold. BASHIR: What? HOLLY: Finally.
[beat 6] Arden lowers the whistle. His shoulders collapse slightly. Bashir stops typing. Colette folds her script into a small square and puts it in her pocket. Holly opens one eye, scans the tiled floor, the painted fish, the rows of desks, the sagging diving board, and sits up.
[beat 7] ARDEN: Look. They say the call center moves to a container yard. Inland. A real one. COLETTE: Do we get to keep our desks? ARDEN: They're bolted to the pool. HOLLY: Of course they are.
[beat 8] Arden sits on the top step. He takes off the whistle, looks at it, and drops it into the empty deep end, where it clatters down the slope and comes to rest beside Holly's chair.
[beat 9] Holly picks it up. He blows it once, softly. A single, small, wheezing sound.
[beat 10] HOLLY: Well. That's what that was for.

### SCENE s00649 | EXT. ROPE BRIDGE OVER GORGE - DAY
Characters: JOJO, TAN, EMEKA OBI, DARIUS WHITTAKER, SOLVEIG ENGSTROM
[beat 0] A plank bridge slung across a mile-wide chasm in the Andes. Wind howls. Clouds drift below, bone white. The planks are gray and gapped. At the middle, four hikers stand frozen on the sagging span, packs on their backs.
[beat 1] JOSEPHINE "JOJO" TAN, thirties, leads, one hand on the rope rail. EMEKA OBI, forties, a doctor, follows. DARIUS WHITTAKER, twenties, a photographer, clutches a camera case to his chest. SOLVEIG ENGSTROM, sixties, a retired geologist, brings up the rear, step by careful step.
[beat 2] JOJO: Everyone stay on the center line. DARIUS: There is no center line, Jojo. JOJO: Then pretend.
[beat 3] Wind slaps the bridge. The whole span lurches. Emeka grips the rail. Darius shrieks. Solveig plants her trekking poles and stands like a tree.
[beat 4] SOLVEIG: Don't look down, don't look down, don't look down. EMEKA: Solveig, can you keep moving? SOLVEIG: I can keep moving. I choose not to.
[beat 5] A plank cracks and drops away into the cloud. Jojo leaps over the gap and lands badly. Darius lunges after her, Emeka catches his pack strap, and for a moment all three are a tangle at the edge of a missing board, the camera case swinging wild.
[beat 6] JOJO: Hold! Hold! DARIUS: I'm holding! EMEKA: You're holding the camera!
[beat 7] Darius looks down at his own hand, clamped on the case, and his other hand, empty, flailing. He drops the case. It tumbles, small and square, into the white. He grabs the rope.
[beat 8] DARIUS: That was ten years of work.
[beat 9] SOLVEIG: We cross now. Single file. Quickly. JOJO: Agreed.
[beat 10] They move. The bridge sways like a hammock. Jojo steps across the gap first, then Emeka, then Darius, who is weeping silently, then Solveig, steady as a metronome, until they all stand together on solid rock on the far side.
[beat 11] Nobody speaks. Solveig lowers herself onto a boulder. Jojo laughs, once, a short astonished sound. Emeka puts a hand on Darius's shoulder, and Darius, finally, nods.

### SCENE s00650 | INT. PARKING GARAGE ELEVATOR - NIGHT
Characters: BRYNJA LARSEN, RUFUS BELLAMY, CALLISTA MOREAU, INTERCOM
[beat 0] Stopped. Between floors. One flickering tube. Brushed steel, scratched.
[beat 1] BRYNJA LARSEN, forties, a lawyer's briefcase. Pressed against the wall. RUFUS BELLAMY, fifties, a janitor's jumpsuit. Mop bucket at his feet. CALLISTA MOREAU, twenties, earbuds. Texting. No signal.
[beat 2] BRYNJA: Press the button again. RUFUS: I pressed it. BRYNJA: Again.
[beat 3] He does. Nothing. The light flickers.
[beat 4] INTERCOM: Hello? Is someone in the car? BRYNJA: Yes! Three of us! INTERCOM: Please remain calm. Maintenance is en route.
[beat 5] CALLISTA: How long? INTERCOM: Forty minutes. RUFUS: Forty minutes.
[beat 6] INTERCOM: Is anyone carrying a bag?
[beat 7] Brynja's grip tightens on the briefcase. Rufus glances at it. Callista looks up from her phone. CALLISTA: Why?
[beat 8] The intercom crackles. Then, very quietly:
[beat 9] INTERCOM: Because the sensor says the car is heavier than it should be.

### SCENE s00651 | INT. SEASIDE LIDO CAFÉ, OFF-SEASON - DUSK
Characters: ODALYS FONTAINE, JULIEN ARMAND-REYES
[beat 0] Stacked chairs, a drained pool outside the glass wall, a wind-torn flag. One table is set in the middle of the empty floor: two cups, a plate of untouched pastries, a guttering candle in a jar.
[beat 1] ODALYS FONTAINE sits with her back straight and her coat still on. JULIEN ARMAND-REYES stands at the counter with his hat in his hands, as if he had just come in and might still go back out.
[beat 2] He crosses the room. She watches him come, and he sees her watching, and slows. He puts the hat on the table instead of his chair, and sits, and she pours him coffee without being asked, her hand perfectly steady, and he looks at the cup and not at her.
[beat 3] JULIEN: You came. ODALYS: You asked. JULIEN: I wasn't sure you'd read it. ODALYS: I read it eleven times.
[beat 4] He smiles, briefly. She doesn't. She pushes the plate toward him with two fingers, and he takes a pastry, turns it over, and sets it down again without biting.
[beat 5] JULIEN: You're angry. ODALYS: I'm tired. JULIEN: It's the same thing, with you. ODALYS: It's never been the same thing. That was always your mistake.
[beat 6] He lets that settle. Outside, the wind drags a loose sheet of tarp across the empty pool, and the sound is like a long slow breath. She hears it too. They both glance at the glass. For a moment, a gull hangs in the gray, perfectly still.
[beat 7] JULIEN: I should say I'm sorry. ODALYS: You should. JULIEN: I am. ODALYS: I know.
[beat 8] She stands. She buttons her coat to the throat, slowly, and he rises with her, awkward, wanting to reach for her sleeve and not daring. She takes a pastry from the plate and wraps it in a napkin, and slides it into her pocket, and looks at him one last time.
[beat 9] ODALYS: For the train. JULIEN: Odalys -- ODALYS: Goodbye, Julien.
[beat 10] She goes. He doesn't follow. He stands in the empty room with the candle burning down, and then, carefully, he sits back down and begins to drink her coffee.

### SCENE s00652 | INT. TRAMPOLINE PARK AFTER HOURS - NIGHT
Characters: PRIYA SANDOVAL-KHAN, NOAH BRENNAN, MARISELA TORRES, JAZZ, ODUYA
[beat 0] Wall-to-wall black mesh under strings of blue neon. A foam pit like a cloud. Four teenagers in socks, breathing hard from the climb, perch on the edge of the highest platform.
[beat 1] PRIYA SANDOVAL-KHAN, sixteen, the ringleader. NOAH BRENNAN, seventeen, her ex. MARISELA TORRES, sixteen, her best friend. And JASPER "JAZZ" ODUYA, fifteen, the youngest, holding a phone like a torch.
[beat 2] PRIYA: On three, we jump. NOAH: You said that at two. MARISELA: She said it at one.
[beat 3] JAZZ: Can I film it? PRIYA: No. NOAH: Yes.
[beat 4] PRIYA: Noah, if you film me -- NOAH: What, Priya? What? MARISELA: Guys -- PRIYA: Don't "guys" me.
[beat 5] JAZZ: I'm going to jump now. NOAH: Jazz, don't --
[beat 6] He jumps. The rest scramble after him, shouting, a tangle of limbs. Priya and Noah collide mid-air, bounce apart, land on opposite trampolines. Marisela belly-flops into the pit and surfaces coughing foam. Jazz lies spread-eagled on the mesh, laughing.
[beat 7] Everyone stops. Everyone stares at each other. The neon hums.
[beat 8] MARISELA: I think I broke something. PRIYA: Me too.

### SCENE s00653 | EXT. FUNERAL HOME PARKING LOT - FOOD TRUCK - DAY
Characters: ABUELA FLORENTINA, ARTURO, KATHLEEN, IMANI, DAHLIA, BASIL
[beat 0] A tamale truck parked between hearses. Mourners in black stand in line holding paper plates.
[beat 1] Six Castellanos-Whitfields. One truck. ABUELA FLORENTINA, eighties, in a black lace mantilla, orders for everyone. Her son, ARTURO, fifties, pays. Her daughter-in-law, KATHLEEN, fifties, wipes her eyes with a napkin. Their daughters, IMANI, twenties, and DAHLIA, teens, argue over hot sauce. Their cousin, BASIL, thirties, eats from two plates.
[beat 2] FLORENTINA: Arturo, she wants pork. Give the girl pork. ARTURO: Mama, she's vegetarian. IMANI: I'm not vegetarian! DAHLIA: Imani, you've been a vegetarian since June. IMANI: Dahlia, mind your own plate!
[beat 3] KATHLEEN: Girls. Please. It's your grandfather's day.
[beat 4] BASIL: He'd have loved this. FLORENTINA: He hated tamales. BASIL: He'd have loved the fight.
[beat 5] A silence. Then, one by one, they start to laugh.

### SCENE s00654 | INT. HEARSE, MOVING - NIGHT
Characters: TANDI, LAURENCE BECKFORD, MIREILLE DUVAL, IZZY
[beat 0] Dark road. Rain. The coffin in back is empty of a body. Full of cash.
[beat 1] THANDIWE "TANDI" KOWALCZYK drives. Gloves. Eyes forward.
[beat 2] LAURENCE BECKFORD sits shotgun. Counts. Loses count. Counts again.
[beat 3] In the back, folding the seats down, MIREILLE DUVAL and ISADORE "IZZY" NKEMELU. She tapes a bag. He wipes prints from a crowbar.
[beat 4] She hums. He tells her to stop. She doesn't. He rubs his temples. She kicks the coffin lid shut.
[beat 5] LAURENCE: Nobody speak. IZZY: We're past that. MIREILLE: We're past everything.
[beat 6] She laughs. He doesn't. He holds the crowbar a moment too long.
[beat 7] TANDI: Eyes on the mirror. Both of you.
[beat 8] They look. Headlights. Far behind. Two white dots, steady.
[beat 9] She slows. He glances back at the dots, then at her. She doesn't speed up.
[beat 10] LAURENCE: Tandi. TANDI: I see it.
[beat 11] The hearse drifts onto the shoulder. She cuts the engine. Rain on the roof. The headlights grow.
[beat 12] They wait. He puts the crowbar down. She takes her gloves off, one finger at a time.
[beat 13] The car passes. A taxi. It disappears into the rain.
[beat 14] Nobody moves for a long time. MIREILLE: Well. That's the last of the fear. IZZY: Is it?
[beat 15] She starts the engine.

### SCENE s00655 | INT. LAKESIDE BOATHOUSE - NIGHT
Characters: ELLIOTT VANCE, CLEM, ASHWORTH, SAMUEL ABIODUN, NIAMH QUINLAN
[beat 0] Dust and mildew. A canoe on sawhorses. Rain on the tin roof. One camp lantern on an oil drum.
[beat 1] ELLIOTT VANCE, forties, sits on an overturned crate with his hands bound in front of him. His shirt is wet. His eyes are open.
[beat 2] CLEMENTINE "CLEM" ASHWORTH, thirties, stands by the door, a revolver at her hip. Across the boathouse, DR. SAMUEL ABIODUN, sixties, rinses a cloth in a bucket. At the far window, NIAMH QUINLAN, twenties, watches the dock.
[beat 3] ELLIOTT: Clem, this is a mistake. CLEM: It's not a mistake, Elliott. It's a Tuesday.
[beat 4] SAMUEL: Elliott, the cloth is cold. Hold still. ELLIOTT: Sam. Sam, you're a doctor. SAMUEL: I know what I am.
[beat 5] NIAMH: Headlights, Clem. On the north road. Clem straightens. She crosses to the window and looks, and Niamh steps aside to let her.
[beat 6] CLEM: That's Duncan. NIAMH: He's early. CLEM: He's never early.
[beat 7] ELLIOTT: Then he knows something. CLEM: Shut up, Elliott.
[beat 8] SAMUEL: We should leave. CLEM: We should finish.
[beat 9] Sam looks at the revolver, at Elliott, at the rain on the glass. He puts down the cloth. SAMUEL: Clem. I won't. CLEM: Sam -- SAMUEL: I won't.
[beat 10] Niamh looks from one to the other. The headlights swing across the boathouse wall and fall away.
[beat 11] NIAMH: He's turned around. A long breath. Clem lowers the revolver an inch. Elliott, shaking, lets out a sound that is half a laugh.
[beat 12] CLEM: Cut him loose. NIAMH: Are you sure? CLEM: No.
[beat 13] She does it anyway.

### SCENE s00656 | INT. LAMPLIGHTER'S COTTAGE - EARLY MORNING
Characters: ARCHIE, CORDELIA PENNYWORTH
[beat 0] 1891. A one-room cottage with a low beam ceiling and a stove gone cold. A ladder-pole leans in the corner. Shelves of oil cans, wicks, brass snuffers. Gray fog presses against the windowpane.
[beat 1] ARCHIBALD "ARCHIE" PENNYWORTH, seventies, the last lamplighter in the parish, sits in his chair by the dead stove in a coat too large for him. His hands, big-knuckled, rest on his knees like tools put down.
[beat 2] His granddaughter, CORDELIA PENNYWORTH, nineteen, in a plain gray dress and a new hat, stands in the doorway with a leather satchel, the sound of the city already in her shoulders.
[beat 3] CORDELIA: The electric men start Monday. ARCHIE: So I hear. CORDELIA: They say the whole of Harrow Lane will be lit by noon. ARCHIE: By noon.
[beat 4] He picks up a brass snuffer from the shelf and turns it in his fingers. She crosses to him, kneels, and puts her hand over his.
[beat 5] CORDELIA: You can come to the city. ARCHIE: What would I do in a city? CORDELIA: Sit. Watch the lamps come on. ARCHIE: Without me to light them?
[beat 6] She doesn't answer. He sets the snuffer back on its hook and, with the slow care of a man doing something for the last time, rises and takes the long pole from the corner.
[beat 7] ARCHIE: Come along, then. I've one street left.

### SCENE s00657 | INT. NIGHT-SHIFT BAKERY - 4 A.M.
Characters: HILDEGARD BRANDT, OSKAR WREN, PAOLA FERREIRA-LIN, NADEEM ARSLAN, RHIANNON POTTS, MOSES ABERNATHY-GRAY
[beat 0] Flour-dusted steel. A dozen racks of rising dough under heat lamps. A radio hissing between stations. The ovens tick as they warm. Everything smells of yeast and, faintly, something sweeter.
[beat 1] SIX BAKERS in white. Five move. One doesn't.
[beat 2] HILDEGARD BRANDT, sixties, the head baker, kneads with the heel of her hand, never looking up. OSKAR WREN, twenties, shapes rolls beside her, a half-beat slower than the rhythm of the room. PAOLA FERREIRA-LIN, thirties, scores loaves with a razor, one clean cut after another. NADEEM ARSLAN, fifties, loads the oven, counts under his breath. RHIANNON POTTS, twenties, sweeps near the back door. And MOSES ABERNATHY-GRAY, forties, stands at the far counter with his back to the others, kneading nothing at all.
[beat 3] The radio drifts to a station playing a slow waltz. Nobody turns it off.
[beat 4] HILDEGARD: Moses. The dough. MOSES: I'm working it. HILDEGARD: There's no dough there.
[beat 5] He looks down at his hands. They are slick with flour. They have been pressing and folding an empty counter for an hour.
[beat 6] Paola's razor pauses. Nadeem's lips stop moving. MOSES: There was.
[beat 7] Nobody answers. The ovens tick.
[beat 8] In the back, the door rattles once, as if someone had leaned on it from outside.

### SCENE s00658 | INT. MATTRESS SHOWROOM - DAY
Characters: SLEEP BETTER, REG, PAPADOPOULOS, GRETCHEN SUNDQVIST, OSWIN TREMBLAY
[beat 0] Forty beds under bright lights. Banners reading SLEEP BETTER, LIVE BETTER. A wall of pillows. Soft jazz.
[beat 1] REGINALD "REG" PAPADOPOULOS, fifties, a salesman in a rumpled blazer, lies on a king-sized display bed with his hands folded on his chest, eyes shut. Across the aisle, GRETCHEN SUNDQVIST, thirties, an assistant manager with a tablet, taps without looking up. Between them, on a queen mattress, OSWIN TREMBLAY, seventy, a customer in a flat cap, sits and bounces gently, testing.
[beat 2] OSWIN: This one has a nice give. GRETCHEN: It's our Premium Plus. OSWIN: What's the premium? GRETCHEN: The plus. OSWIN: Mm.
[beat 3] He lies down beside Reg, who doesn't move. They lie shoulder to shoulder, staring at the ceiling.
[beat 4] REG: Don't tell her I'm off the clock. OSWIN: I thought you were the salesman. REG: I'm a man in bed.
[beat 5] GRETCHEN: Reg. Customer. REG: I'm helping him. GRETCHEN: You're asleep. REG: I'm demonstrating.
[beat 6] GRETCHEN: We offer a hundred-night trial on all models. OSWIN: A hundred nights?
[beat 7] REG: Don't do it. OSWIN: Why? REG: Because you'll sleep.
[beat 8] Oswin considers this for a long moment. He turns his head toward Reg, and Reg turns toward him.
[beat 9] OSWIN: I'll take it. GRETCHEN: Excellent.
[beat 10] Neither of them gets up.

### SCENE s00659 | INT. LIBRARY INSIDE A WHALE SKELETON - NIGHT
Characters: OSRIC THISTLEDOWN, MIRABEL ASHGROVE, PETRONELLA VOSS, BRANWELL KESH
[beat 0] Ribs rise like cathedral arches over shelves of salt-warped books. Lanterns hang from vertebrae. A long table of driftwood. Somewhere in the dark, water drips onto stone.
[beat 1] OSRIC THISTLEDOWN, nineties, the Keeper, hunches over an open atlas, a quill behind each ear. Across the table sits MIRABEL ASHGROVE, forties, a courier in a salt-stained cloak, a sealed scroll tube beside her. At the end, fiddling with an abacus of bone beads, is PETRONELLA VOSS, twenties, the apprentice, sleepy-eyed.
[beat 2] OSRIC: You said the tide was safe. MIRABEL: I said it was passable. OSRIC: Those are different words. MIRABEL: They're different tides.
[beat 3] PETRONELLA: Master Osric, the abacus is stuck again. OSRIC: Hit it. PETRONELLA: I did. OSRIC: Harder.
[beat 4] MIRABEL: May I ask what you're guarding in here? OSRIC: Everything. MIRABEL: That's no answer. OSRIC: It's the only answer. Every book in this room is the last of its kind. We keep them here because the sea took the rest.
[beat 5] MIRABEL: And the whale? OSRIC: The whale was the first book. We just couldn't read it.
[beat 6] PETRONELLA: I think I can. OSRIC: You think a lot of things, child. MIRABEL: Let her speak. OSRIC: She speaks. All day. It's the listening she lacks.
[beat 7] PETRONELLA: There are marks on the ribs, Master. Inside, near the spine. Like writing. I've traced them. OSRIC: Marks are not writing. PETRONELLA: These repeat. OSRIC: Barnacles repeat. PETRONELLA: In sixes?
[beat 8] A silence. Osric sets down his quill. OSRIC: Show me.
[beat 9] She hurries to a rib and presses her lantern against the bone. The marks leap out in the light: tiny, regular, deliberate.
[beat 10] OSRIC: Forty years I've sat under this. MIRABEL: What does it say? PETRONELLA: I don't know yet. OSRIC: Then we shall have to learn.
[beat 11] A pause. Mirabel rises from her chair and looks up. MIRABEL: I'll stay the night. OSRIC: You'll stay the winter. MIRABEL: I have a delivery. OSRIC: Leave it here. Everything arrives, eventually.
[beat 12] The scroll tube sits on the table, forgotten.
[beat 13] At the doorway, the lantern light catches the wet footprints of someone who has just entered. A figure steps out of the dark: BRANWELL KESH, thirties, barefoot, soaked to the bone, carrying a dripping canvas sack and wearing a sea captain's coat three sizes too large.
[beat 14] BRANWELL: Sorry. The door was open. OSRIC: There is no door. BRANWELL: Then I'm very sorry.
[beat 15] He sets down the sack. A single book slides out, black with salt, and lands open on the table. Petronella gasps.
[beat 16] PETRONELLA: That's the same writing. OSRIC: Sit down, boy. Tell me where you found it.
[beat 17] Branwell sits. The lantern light finds the page.

### SCENE s00660 | INT. SALT MINE CONFERENCE CHAMBER, 400 METERS DOWN - DAY
Characters: DIGGING DEEPER, MAGS, LUNDQUIST-BEY, VP, FERDIE, OKAFOR, DOLORES PE, A-FITZGERALD, TYBALT CHANDRASEKHAR, STRANGER, VALUE, RAYMOND PELLETIER
[beat 0] A vaulted hall hewn from crystalline rock, lit by amber work lamps. The walls glitter. A corporate banner reads SYNERGY SUMMIT: DIGGING DEEPER, hung from two rusty hooks. Fifteen folding chairs face a flip chart. A catering table groans under an untouched platter of sandwiches.
[beat 1] MARGUERITE "MAGS" LUNDQUIST-BEY, fifties, the regional VP, stands at the flip chart with a laser pointer, hard-hatted and smiling. Seated in the front row: FERDINAND "FERDIE" OKAFOR, forties, a division head wearing a hard hat over a toupee. DOLORES PEÑA-FITZGERALD, sixties, legal counsel, holding a clipboard like a rosary. TYBALT CHANDRASEKHAR, twenties, an intern in an ill-fitting vest. And a STRANGER in a hard hat and a beige jacket, who sits at the back, notebook open, saying nothing.
[beat 2] MAGS: Team, thank you for coming down. Literally!
[beat 3] Nobody laughs. The stranger writes something.
[beat 4] FERDIE: Mags, is the elevator running? MAGS: It's a hoist, Ferdie. FERDIE: Is the hoist running? MAGS: Let's circle back.
[beat 5] DOLORES: Margaret, I'd like it recorded that I objected to a location with no cell service. MAGS: It's recorded. DOLORES: By whom? MAGS: By... the universe.
[beat 6] She clicks the laser pointer. A red dot lands on the flip chart: a pyramid labeled VALUE, with a pit beneath it labeled YOU.
[beat 7] TYBALT: That's not a good pyramid. MAGS: Tybalt, did you have something to contribute? TYBALT: No. Sorry. Just clearing my throat.
[beat 8] STRANGER: It's a very good pyramid.
[beat 9] Every head turns. The stranger doesn't look up from his notebook. FERDIE: And you are? STRANGER: Observing. DOLORES: Observing what? STRANGER: How long it takes. MAGS: For what? STRANGER: Everything.
[beat 10] A silence settles over the hall. The amber lamps hum. A droplet of brine falls from the ceiling and lands on the sandwiches.
[beat 11] FERDIE: Does anyone know who this is? TYBALT: I think he's from corporate. DOLORES: Which corporate? TYBALT: The one that, um, bought us. Last Thursday.
[beat 12] Mags's smile falters. The laser pointer clicks off. MAGS: Last Thursday. TYBALT: There was an email. MAGS: I didn't see an email. TYBALT: It went to everyone. FERDIE: I didn't see it either. DOLORES: It would have been on the server. MAGS: Which is... DOLORES: Upstairs.
[beat 13] The stranger finally closes his notebook. He stands, tucks it into his jacket, and takes off his hard hat. A bald, patient head. A name badge: RAYMOND PELLETIER, ACQUISITIONS.
[beat 14] RAYMOND: Raymond Pelletier. Acquisitions. Please, continue. MAGS: Raymond. RAYMOND: You were on the pyramid. MAGS: I was.
[beat 15] RAYMOND: It's very good. But I have to say, the pit is rather deeper than the pyramid is high.
[beat 16] He gives a small, polite nod and sits again. Mags stares at the flip chart for a long, long moment. MAGS: Well. That's that.
[beat 17] She lays down the laser pointer. She sits beside Ferdie, who has slumped in his chair, toupee slightly askew. Dolores, without a word, puts her hand on Tybalt's shoulder.
[beat 18] Raymond opens his notebook again. The lamps hum.
[beat 19] RAYMOND: Does anyone want a sandwich?
[beat 20] Nobody moves. Then Tybalt raises his hand.

### SCENE s00661 | INT. ABANDONED PLANETARIUM GIFT SHOP - NIGHT
Characters: ODELIA PEMBERTON-ROSS, ISAIAH TUPOU, MINA, CARVALHO, COLM DRISCOLL, NERI, GREGORY HALLORAN, MAN
[beat 0] The shelves are half empty: plastic telescopes, glow-in-the-dark star charts, a bin of rubber moons. A velvet curtain hangs open onto the dark dome beyond. Moonlight pours through a skylight and lays a pale blue rectangle on the tile.
[beat 1] Five teenagers have broken in and are pretending not to be nervous. ODELIA PEMBERTON-ROSS, seventeen, braids bound in a red scarf, sits on the checkout counter swinging her legs. ISAIAH TUPOU, eighteen, a rugby player's shoulders and a poet's quiet, stands by the curtain staring into the dark. WILHELMINA "MINA" CARVALHO, sixteen, tiny, fierce, rifles through a drawer of keychains. COLM DRISCOLL, seventeen, plugs a portable speaker into an outlet that has no power. And NERISSA "NERI" HALLORAN, seventeen, the host, sits cross-legged on the floor with a candle.
[beat 2] ODELIA: It's so quiet. ISAIAH: It's a planetarium. MINA: It's a tomb. COLM: It's a gift shop.
[beat 3] NERI: It's mine for the night. Dad's the caretaker.
[beat 4] ODELIA: Neri, you said he was at his sister's. NERI: He is.
[beat 5] COLM: Then who's making that noise?
[beat 6] They listen. A slow metallic hum, from inside the dome. They look at the curtain.
[beat 7] ISAIAH: It's the cooling system. MINA: There's no power. ISAIAH: Backup, then. NERI: Backup. Obviously.
[beat 8] Isaiah pulls the curtain wider. Inside, the dome's seats climb in dark rings, and at its center the old projector gleams, slowly turning on its pedestal, though nothing has turned it on.
[beat 9] Beside it, in a work jacket and a flashlight beam, a MAN stands motionless, watching them: GREGORY HALLORAN, fifties, Neri's father, caretaker. GREGORY: Hello, Nerissa. NERI: Dad.
[beat 10] GREGORY: Your aunt called. She says you told her I was there. NERI: I didn't --
[beat 11] GREGORY: Hello, everybody. I'm Mr. Halloran. Would you like to see the stars properly?
[beat 12] Nobody moves. Odelia slides off the counter. Colm unplugs the speaker. Mina shuts the drawer, slowly.
[beat 13] The projector hums higher. The dome goes dark, and then, all at once, it fills with light: ten thousand stars wheeling in a perfect, impossible sky. ISAIAH: Oh.
[beat 14] GREGORY: Sit. Sit. You've got till dawn.
