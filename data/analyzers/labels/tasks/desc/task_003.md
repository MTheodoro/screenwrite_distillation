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
Write the scenes as JSON Lines (one object per line) in THREE files with the Write tool: scenes 1-30 to /home/user/screenwrite-analyzers/data/analyzers/labels/desc/part_003_a.jsonl, 31-60 to /home/user/screenwrite-analyzers/data/analyzers/labels/desc/part_003_b.jsonl, the rest to /home/user/screenwrite-analyzers/data/analyzers/labels/desc/part_003_c.jsonl. No other text in the files. Reply only with "done N".

## Scenes

### SCENE s00300 | INT. OBSERVATION CAR, MOUNTAIN SCENIC RAILWAY - SUNSET
Characters: WOMAN, THE STRANGER, ANSELM, PHILIPPA
[beat 0] A glass-domed car, brass fittings polished to honey. Plush velvet seats. Outside, peaks go violet under a rose-colored sky. A WOMAN sits alone by the window, a travel journal on her knee. Mid-thirties, silk scarf, auburn hair pinned with a tortoiseshell comb. She writes, and stops, and watches the mountains.
[beat 1] A STRANGER enters from the vestibule: a tall man, forties, tweed jacket, a camera on a strap. He pauses at her row. THE STRANGER: Is this seat taken? WOMAN: There are forty empty seats. THE STRANGER: I know. I counted.
[beat 2] She almost smiles. He sits across the aisle, not beside. Lifts the camera, lowers it again.
[beat 3] THE STRANGER: The light's gone before I can catch it. Always. WOMAN: Then stop catching it. THE STRANGER: And do what? WOMAN: Look at it.
[beat 4] He looks. A long beat. The train curves, and the whole western sky tilts into the car.
[beat 5] THE STRANGER: My name is Anselm. ANSELM: Anselm Whitcombe-Diallo. WOMAN: Philippa Okoro-Strand. ANSELM: Philippa. That's a good mountain name. PHILIPPA: Is there such a thing? ANSELM: There is now.
[beat 6] The train rocks gently through a tunnel and out again. PHILIPPA: Do you travel often? ANSELM: Only when I've lost something. PHILIPPA: What did you lose? ANSELM: I'm hoping the mountains will tell me. PHILIPPA: They don't talk. ANSELM: They don't need to.
[beat 7] She closes her journal. The sky goes from rose to lavender. Neither of them speaks, and neither looks away.

### SCENE s00301 | INT. BALLROOM CLOAKROOM - ART DECO HOTEL - NIGHT
Characters: WOMAN IN SAPPHIRE, OTTOLINE, MARGUERITE
[beat 0] A narrow room of brass hooks and furs. A single frosted lamp. Muffled orchestra through the wall. A WOMAN in a sapphire gown leans against the counter, breathing hard. Her lipstick is smeared. Her hand grips a champagne flute so tightly it might break. The attendant's stool is empty.
[beat 1] The door opens. Another WOMAN steps in, in a silver gown, a fur stole over one arm. She closes the door behind her. Locks it.
[beat 2] WOMAN IN SAPPHIRE: You followed me. WOMAN IN SILVER: You left your wrap.
[beat 3] She holds out a stole. The woman in sapphire stares at it. Doesn't take it.
[beat 4] WOMAN IN SAPPHIRE: I said I wouldn't dance. WOMAN IN SILVER: You danced with him. WOMAN IN SAPPHIRE: She asked. WOMAN IN SILVER: She did?
[beat 5] The sapphire woman sets the flute down. It rings on the marble. WOMAN IN SAPPHIRE: Constance asked me for the third waltz. In front of everyone. I couldn't say no. WOMAN IN SILVER: Of course you could. WOMAN IN SAPPHIRE: She's my cousin.
[beat 6] WOMAN IN SILVER: She's your cousin who looks at you like I do. Silence. The orchestra swells and falls.
[beat 7] The woman in silver steps closer and drapes the stole over her companion's shoulders. For a moment they stand with their foreheads almost touching.
[beat 8] WOMAN IN SAPPHIRE: I'm Ottoline, by the way. You never asked. OTTOLINE: Ottoline Fairbrother-Nnamdi. WOMAN IN SILVER: Marguerite.
[beat 9] OTTOLINE: Marguerite, I'm terrified. MARGUERITE: Good. So am I.
[beat 10] A knock at the door. They break apart. Ottoline wipes her lipstick. Marguerite unlocks the door and opens it on the roar of the band.

### SCENE s00302 | INT. APOTHECARY SHOP, MARKET TOWN - 1740 - EVENING
Characters: APOTHECARY BARNABAS ADEYEMI-HOLLOWAY, KEZIAH OSEI-LINDQVIST, GIDEON PELL-ADEBOYE, WOMAN, ISOLDE FAIRCHILD-ADEBAYO
[beat 0] Low beams. Shelves of blue glass jars with handwritten labels. A mortar and pestle, a scale, a bundle of dried lavender hung from a rafter. A coal stove ticks in the corner. APOTHECARY BARNABAS ADEYEMI-HOLLOWAY (50s, ink-stained apron, round spectacles) is grinding something in a bowl. His movements are slow and deliberate. His apprentice, KEZIAH OSEI-LINDQVIST (16, linen cap, sleeves rolled to the elbow), sorts herbs into drawers, humming under her breath. In the corner, on a stool by the stove, sits GIDEON PELL-ADEBOYE (60s, patched coat, a clay pipe unlit in his teeth), a regular who has said nothing in an hour and will say nothing more.
[beat 1] The shop bell rings. A WOMAN in a traveling cloak enters, rain on her shoulders. She is ISOLDE FAIRCHILD-ADEBAYO (30s, pale, careful, a worn leather satchel), and she carries herself like someone who has practiced being unremarkable.
[beat 2] She shakes out her cloak, hangs it on a peg. He watches her without seeming to. She smiles. He smiles back.
[beat 3] ISOLDE: Good evening, sir. BARNABAS: Madam. A foul night. ISOLDE: I was told you stock rue. BARNABAS: We do. For what complaint? ISOLDE: A friend's.
[beat 4] He sets down the pestle and goes to the shelf. She follows him with her eyes.
[beat 5] She steps closer to the counter, and from the satchel her hand slips something small and flat, which she lays on the wood. Keziah stops humming.
[beat 6] Barnabas returns with a jar. He sets it down. Sees the thing on the counter. His face does not change, but his hand does, closing over the jar's lid as if to keep it from spilling.
[beat 7] BARNABAS: Where did you come by this? ISOLDE: Does it matter?
[beat 8] It is a seal ring, silver, with an unfamiliar crest. He picks it up. Turns it over. Keziah watches his thumb stroke the inside of the band.
[beat 9] BARNABAS: Keziah. Lock the door. She does. The bolt falls with a sound like a dropped coin.
[beat 10] ISOLDE: I was told you'd know the crest. BARNABAS: I know it. ISOLDE: Then you know why I've come.
[beat 11] He looks at Keziah. At the stove. At the ring in his palm. He says nothing for a long time.
[beat 12] BARNABAS: Sit, madam. She sits. The coal ticks. Rain presses on the window.

### SCENE s00303 | INT. WITHERED SALON IN A CLOSED CHATEAU - 1789 - NIGHT
Characters: MADAME HORTENSE DE VALLOMBREUSE-ADEYEMI, LOUIS-MARIE FONTAINE-OKOYE
[beat 0] A great room under dust sheets. A single candle burns on a harpsichord whose lid has been propped open with a book. Shuttered windows. Outside, far off, a crowd murmurs like the sea. An old woman, MADAME HORTENSE DE VALLOMBREUSE-ADEYEMI (70s, silver silk gone gray at the hem, a ring on every finger), sits at the harpsichord. She does not play. She presses one key, listens to its fading note, and presses another.
[beat 1] The door opens. A young man slips in and shuts it behind him, breathing hard. LOUIS-MARIE FONTAINE-OKOYE (20s, servant's livery, torn collar, a candle stub in his hand) is the last of her household.
[beat 2] HORTENSE: You are late, Louis-Marie. LOUIS-MARIE: Madame, the gates are down. They are in the courtyard. HORTENSE: I heard.
[beat 3] LOUIS-MARIE: Then you must come. There is a cart in the stable. I have bribed the boy. HORTENSE: With what? LOUIS-MARIE: With your emeralds. HORTENSE: Ah. Those were never mine. LOUIS-MARIE: Madame, please.
[beat 4] She presses a key. The note hangs.
[beat 5] HORTENSE: Do you know, I have lived in this house for fifty-one years and never once been alone in this room. There was always someone to carry a candle. Someone to close a shutter. Someone to watch me not play. LOUIS-MARIE: I am here. HORTENSE: Yes. You are the last.
[beat 6] LOUIS-MARIE: Madame, they will burn it. HORTENSE: I should hope so. It is a great deal of work to maintain.
[beat 7] He kneels beside the stool. She does not look at him. The crowd's murmur swells into a roar and the candle on the harpsichord gutters.
[beat 8] LOUIS-MARIE: Please. For my sake. HORTENSE: Then do this for mine. Take the candle. Go through the kitchen. Do not look back, and do not tell them you served me. LOUIS-MARIE: They will know. HORTENSE: They will know that you ran. That is enough.
[beat 9] She finally turns. Touches his face with a ringed hand, once, lightly. HORTENSE: Go.
[beat 10] He rises. Backs away. At the door he stops, then bows low, deeper than any servant should. The door closes.
[beat 11] She turns back to the keys and plays, at last, one slow chord that fills the dark room.

### SCENE s00304 | INT. CURLING CLUB - LOCKER ROOM - EVENING
Characters: YOUNG WOMAN, HJALMAR ODUYA-KRISTENSEN, MO, DELACROIX-ABARA, BRYNJA
[beat 0] Wet wool. Steam. The thump of stones through a wall. A YOUNG WOMAN sits on the bench in her stocking feet, broom across her knees. Twenties, red parka, a bruise on her cheekbone from a fall. She stares at nothing. Coach HJALMAR ODUYA-KRISTENSEN (60s, club blazer, whistle) stands at the door with a clipboard. He does not speak. He taps the clipboard against his thigh. At the far end, a veteran, MAUREEN "MO" DELACROIX-ABARA (40s, gray-blonde braid) tightens a boot. She doesn't look up either.
[beat 1] The young woman bends. Unlaces one shoe. Laces it again. Same shoe.
[beat 2] HJALMAR: Five minutes. The young woman nods.
[beat 3] MO: Leave her. HJALMAR: She has a stone to throw. MO: She has a minute.
[beat 4] Hjalmar studies the young woman. She picks up the broom. Puts it down. Picks up a towel and presses it to her cheek.
[beat 5] A horn sounds in the hallway.
[beat 6] Mo stands. Offers her hand. The young woman looks at it, then up at her face.
[beat 7] MO: Brynja. BRYNJA: I'm fine. She isn't. She takes the hand anyway.
[beat 8] Hjalmar steps aside from the door. The three of them walk out together, Brynja in the middle, broom over her shoulder, jaw set.

### SCENE s00305 | INT. NIGHT-SHIFT BAKERY - BACK ROOM - 4 AM
Characters: TEODORICO ABARA-LINDBERG, PENNY, NAKASHIMA-OKOYE, STRANGER, QUINCY ADEYEMI-HALVORSEN, PERPETUA
[beat 0] Flour dust. Steel tables. Racks of dough rising under damp cloths. A radio plays something soft and unidentifiable. MR. TEODORICO ABARA-LINDBERG (60s, apron, gentle) kneads. His assistant, PENELOPE "PENNY" NAKASHIMA-OKOYE (20s, hairnet), oils pans. At the doorway, a STRANGER in a rain-soaked coat stands with a baguette-shaped package. Behind her, hiding behind the oven door, is a small, wide-eyed apprentice, QUINCY ADEYEMI-HALVORSEN (12, flour on his nose).
[beat 1] STRANGER: Good morning. Are you the baker? TEODORICO: Everyone here is the baker. STRANGER: I mean the baker who makes the seeded rye. TEODORICO: Ah. That's Penny. PENNY: That's me.
[beat 2] STRANGER: Then I owe you an apology. PENNY: For what?
[beat 3] STRANGER: I left a one-star review. PENNY: I remember. STRANGER: I was in a mood. PENNY: You called it "a brick with ambitions." STRANGER: It was a very good brick. Teodorico chuckles into the dough.
[beat 4] STRANGER: My name is Perpetua. PERPETUA: Perpetua Chen-Oyelowo. I'm the reviewer. PENNY: We know. You've been in the paper.
[beat 5] PERPETUA: Then you know I'm contractually obliged to review again. TEODORICO: Of course. PERPETUA: I came to taste it. Before I write.
[beat 6] Quincy peeks around the oven. QUINCY: It's still rising. PERPETUA: Then I'll wait.
[beat 7] TEODORICO: Penny, make her tea. PENNY: I'm making her toast first.
[beat 8] She slides a loaf from the rack and slices it. Perpetua sits on an overturned crate. Quincy tiptoes to sit beside her. The radio hums. Nobody, for a while, says anything.

### SCENE s00306 | INT. EMPTY INDOOR TENNIS COURT - DAWN
Characters: OTIS BRAITHWAITE-NKOSI, LEO, AMAECHI-DAHL
[beat 0] Green carpet. Sodium lamps coming up. A basket of balls. OTIS BRAITHWAITE-NKOSI (40s, track jacket) feeds balls from the basket. Across the net, LEONTYNE "LEO" AMAECHI-DAHL (16, racket too big for her) returns them. Thock. Thock. Thock.
[beat 1] OTIS: Again. LEO: Again. They speak at the same time.
[beat 2] OTIS: Reset your feet. LEO: I'm resetting my feet. OTIS: Then reset them faster.
[beat 3] Thock. She hits wide. He doesn't flinch.
[beat 4] LEO: Coach. OTIS: Leo. LEO: Same time tomorrow? OTIS: Same time.
[beat 5] She smiles. He feeds another ball.

### SCENE s00307 | INT. LAUNDROMAT - BACK TABLE - NIGHT
Characters: IGGY, OYELOWO-BRANDT, CORRIE
[beat 0] Flat fluorescent light. Rows of dryers tumbling. A folding table. A wall of coin machines. Two siblings, a brother and a sister, fold clothes in silence. IGNATIUS "IGGY" OYELOWO-BRANDT (30s, grease-stained flannel, hands that don't stay still) folds towels with military corners. CORINTHIA "CORRIE" OYELOWO-BRANDT (30s, nurse's clogs, tired eyes) folds a child's pajamas into a square the size of her palm. The machines hum. A dryer thumps.
[beat 1] IGGY: You're doing it wrong. CORRIE: It's pajamas. IGGY: There's a way. CORRIE: Then show me. He doesn't. She keeps folding. A quarter rattles inside a dryer.
[beat 2] IGGY: How's Mom? CORRIE: Tuesday she asked who you were. IGGY: Tuesday I wasn't there. CORRIE: She asked anyway. IGGY: What'd you say? CORRIE: Her son. IGGY: Good.
[beat 3] Beat. He takes a shirt from the pile. IGGY: Corrie, I'm sorry. CORRIE: For what? IGGY: I don't know. Everything. CORRIE: That's not an apology. That's a weather report. IGGY: I'm trying. CORRIE: I know you are.
[beat 4] She folds. He folds. A buzzer sounds on a distant machine.
[beat 5] IGGY: I could come Sunday. CORRIE: You said that last month. IGGY: I came. CORRIE: For ten minutes. IGGY: It was ten good minutes. CORRIE: It was ten minutes you spent on your phone. IGGY: It was the shop. A guy needed a quote. CORRIE: Iggy. IGGY: Okay.
[beat 6] CORRIE: She's not going to be here forever. IGGY: I know. CORRIE: You don't.
[beat 7] He stops. Sets down the shirt. Looks at her for the first time. IGGY: Corrie, I know.
[beat 8] She meets his eyes. A long beat. Then she hands him the pajamas. CORRIE: Do it the way you said.
[beat 9] He takes them. Unfolds. Folds again, slowly, creasing each edge with his thumbnail. IGGY: See? CORRIE: That's better. IGGY: It's the same. CORRIE: It's better.
[beat 10] A dryer finishes and goes quiet. The room hums on. They reach for the next pile together.

### SCENE s00308 | EXT. PIER AMUSEMENT ARCADE - NIGHT
Characters: NOVA, ABIOLA-HARTLEY, FLISS, OKONJO-VARGA, WYNDHAM TIERNEY-ASARE
[beat 0] Neon, salt air, the electronic bleat of a hundred machines. A claw crane glows at the end of a row. NOVELLA "NOVA" ABIOLA-HARTLEY (20s, sequined jacket) feeds quarters into the crane. Her friend FELICITY "FLISS" OKONJO-VARGA (20s, cardigan, two ice creams) hovers behind. A stranger, WYNDHAM TIERNEY-ASARE (20s, windbreaker, a tin of tokens), waits for the machine.
[beat 1] She presses the stick. The claw descends. It grips a plush octopus. It lifts. It drops it.
[beat 2] She groans and slaps the glass. He stifles a laugh. She turns on him. NOVA: Don't. WYNDHAM: I didn't. NOVA: You were going to. WYNDHAM: I was going to say nice try.
[beat 3] He slides a token into the slot. Their eyes meet. She steps aside. He takes the stick. The claw descends over the octopus. Fliss licks her ice cream. Watches them both.
[beat 4] The claw grabs. Lifts. Shakes. The octopus swings and holds, then drops into the chute. It tumbles out.
[beat 5] He picks it up. Hands it to Nova. She takes it. NOVA: Thank you. WYNDHAM: You're welcome. They speak at once and laugh.
[beat 6] Fliss clears her throat. FLISS: We're going to miss the Ferris wheel. NOVA: Go on. I'll catch up. Fliss shrugs. Goes. Nova turns to Wyndham, hugging the octopus.
[beat 7] NOVA: So. WYNDHAM: So. She looks at the octopus. He looks at his shoes. A siren whoops from a driving game and someone shouts jackpot.
[beat 8] She starts to speak and the lights on the pier go out. Darkness. A collective moan from the arcade. A beat.
[beat 9] Then the lights return, brighter than before, and he is gone. She is alone with the octopus.
[beat 10] She looks around. Down the row, by the Ferris wheel entrance, he is waving. Her ticket is in his hand.

### SCENE s00309 | INT. ABANDONED LIGHTHOUSE LENS ROOM, MOONLIGHT - NIGHT
Characters: CALLISTA ROUSSEL-OKAFOR, DES, ACHTERBERG-NNAMDI, MARIGOLD PEMBERTON-ASANTE, ZEPHYR KOWALCZYK-ADEYEMI, INSPECTOR MALACHI QUARTERMAINE-OSEI
[beat 0] A great Fresnel lens, dark, towering over the room like a cathedral of cut glass. A rusted catwalk wraps it. Wind sings through broken panes. Four people sit on crates in a loose circle, sharing a thermos. They are strangers by temperament, partners by accident. CALLISTA ROUSSEL-OKAFOR (30s, field jacket, a laptop open on her knee) taps keys. DESMOND "DES" ACHTERBERG-NNAMDI (40s, bearded, binoculars at his chest) glasses the sea. MARIGOLD PEMBERTON-ASANTE (50s, silver hair, birdwatcher's vest) tends the thermos. And young ZEPHYR KOWALCZYK-ADEYEMI (20s, headphones at his neck, restless) paces the catwalk. The sea beyond is flat as slate. The moon is a coin on it.
[beat 1] MARIGOLD: Tea, anyone? DES: Please. CALLISTA: Not now. ZEPHYR: Nothing yet. MARIGOLD: Always nothing yet, then everything at once.
[beat 2] She pours. The steam rises in a thin ribbon. Callista types. Des lowers the binoculars.
[beat 3] DES: You're sure of the coordinates? CALLISTA: I'm sure of the data. Whoever sent it, less so. DES: It's a wild goose chase.
[beat 4] ZEPHYR: It's a boat. They all look up. Zephyr points. On the black water, a light, small and white, is moving toward the lighthouse. CALLISTA: That's not on the schedule. DES: No lights, then lights. MARIGOLD: Hush. Let it come.
[beat 5] The boat grows. A slow engine. Zephyr descends the catwalk with quick steps. The four of them gather at the window. Wind whines in the glass.
[beat 6] The boat slides up to the rocks. A figure climbs onto the landing. Thin, soaked, a case in one hand. He is already climbing the iron stair.
[beat 7] INSPECTOR MALACHI QUARTERMAINE-OSEI (50s, long coat, hat in hand) steps into the lens room, and stops. He looks at each of them in turn. MALACHI: Good evening. Thank you for waiting.
[beat 8] Callista closes her laptop. Slowly. Des lowers his binoculars. Marigold sets down the thermos. Zephyr moves, quietly, between the inspector and the stair.
[beat 9] MALACHI: Please. Don't. I'm here as a friend.
[beat 10] He sets the case on a crate and opens it. Inside, a folded sheet of paper and a revolver.
[beat 11] MALACHI: One of you wrote to me. I should like to know which.
[beat 12] Silence. The moon cuts through the lens and throws one blade of light across the floor.

### SCENE s00310 | INT. ORBITAL STATION "HALCYON" - OBSERVATION RING - SHIP NIGHT
Characters: COMMANDER YUSUF ADEWUNMI-LINDGREN, HELENA OKONKWO-BRANDT, ENGINEER TOMASZ NAKASHIMA-AMADI, TECH IRIS MBEKI-HALVORSEN
[beat 0] A curved window onto a gray world. Four crew in thermal suits sit at a low table around a flickering screen. COMMANDER YUSUF ADEWUNMI-LINDGREN (50s) speaks first. DR. HELENA OKONKWO-BRANDT (40s) answers. ENGINEER TOMASZ NAKASHIMA-AMADI (30s) interrupts. And the youngest, TECH IRIS MBEKI-HALVORSEN (20s), says nothing.
[beat 1] YUSUF: Final report. Oxygen reserves at eleven percent. HELENA: That's four days. TOMASZ: Four days if nobody breathes. YUSUF: Nobody's counting breaths, Tomasz. TOMASZ: I am.
[beat 2] HELENA: Commander, the relief ship? YUSUF: Nine days out. HELENA: Then we're five short. TOMASZ: Five. YUSUF: We are going to be fine.
[beat 3] IRIS: No, we're not. They look at her. She looks at the window. IRIS: But we can say it like we are.
[beat 4] Yusuf nods. Helena reaches across the table and takes Iris's hand. Tomasz folds his arms and stares at the gray world turning below.

### SCENE s00311 | INT. FEDERAL COURTROOM 11 - DAY
Characters: JUDGE ROSALIND ABERNATHY-KOMOLAFE, COUNSEL BENEDICT ASANTE-FAIRWEATHER, PRISCILLA DUARTE-LINDQVIST, ATTORNEY MARCUS OYELOWO-STRAND, THE WOMAN, NAVY SUIT, DELPHINA MWANGI-HOLCOMB, JOCASTA
[beat 0] Oak paneling. A seal on the wall. A jury box with twelve empty chairs. It is a pretrial conference, and the room has the hush of a library. JUDGE ROSALIND ABERNATHY-KOMOLAFE (60s, robe, reading glasses) presides. At the plaintiff's table: COUNSEL BENEDICT ASANTE-FAIRWEATHER (50s, three-piece suit) and his associate, MS. PRISCILLA DUARTE-LINDQVIST (20s, legal pad, nervous knee). At the defense table: ATTORNEY MARCUS OYELOWO-STRAND (40s, rolled sleeves) and his co-counsel, A WOMAN IN A NAVY SUIT (30s), who has not been introduced. The court reporter, DELPHINA MWANGI-HOLCOMB (50s), types without looking up.
[beat 1] JUDGE ROSALIND: Counsel, the pretrial order states discovery closed March first. BENEDICT: It did, Your Honor. MARCUS: It did not. JUDGE ROSALIND: Mr. Oyelowo-Strand? MARCUS: Your Honor, the plaintiff's production of the August emails came forty days late. BENEDICT: Because your client's servers were corrupted. MARCUS: Because your client's counsel was unreachable.
[beat 2] PRISCILLA: That's not what the file says. BENEDICT: I know.
[beat 3] JUDGE ROSALIND: Counsel, address the court, not each other. BENEDICT: Yes, Your Honor.
[beat 4] The woman in the navy suit leans toward Marcus and passes a folded note. He reads it. His jaw tightens.
[beat 5] MARCUS: Your Honor, with the court's permission, may I introduce my co-counsel? JUDGE ROSALIND: Please. THE WOMAN: Jocasta Reyes-Abiola, Your Honor. Appearing for the defense.
[beat 6] JOCASTA: We have a motion.
[beat 7] Priscilla stops writing. Benedict removes his glasses. Delphina's fingers pause over the keys. JUDGE ROSALIND: Ms. Reyes-Abiola, proceed.
[beat 8] JOCASTA: We move to compel the original server logs from August fourteenth. BENEDICT: Your Honor, those logs do not exist.
[beat 9] JOCASTA: Then Mr. Asante-Fairweather can explain to the court why his firm billed us for reviewing them.
[beat 10] Silence. Priscilla, very softly, to no one: PRISCILLA: Oh no. Benedict sets down his pen and does not look at her.
[beat 11] JUDGE ROSALIND: Mr. Asante-Fairweather, would you care to respond? BENEDICT: I would like a recess, Your Honor. JUDGE ROSALIND: Denied. Respond.

### SCENE s00312 | INT. BOTANICAL GARDEN ORCHID HOUSE - MORNING
Characters: DETECTIVE SOLOMON OKAFOR-LINDQVIST, CURATOR AMELIA DRUMMOND-ADEBAYO, THADDEUS BROUGHAM-ASANTE
[beat 0] Humid green dim. Mist beading on glass. A path of wet flagstones between banks of blooms. DETECTIVE SOLOMON OKAFOR-LINDQVIST (50s, trench coat, notebook) crouches beside an empty planter. A tag reads PHALAENOPSIS "GHOST". Nothing grows there. CURATOR AMELIA DRUMMOND-ADEBAYO (40s, cardigan, trowel in her back pocket) stands over him, arms crossed.
[beat 1] SOLOMON: When did you last see it? AMELIA: Last Thursday. Or last Wednesday. SOLOMON: Which? AMELIA: I water them in sequence. Thursday is the third bench. SOLOMON: So Thursday. AMELIA: So Thursday.
[beat 2] Footsteps on the gravel. A young man comes round the corner at a trot, apron flapping. A volunteer: THADDEUS BROUGHAM-ASANTE (20s, name tag on a lanyard). He freezes when he sees the detective.
[beat 3] THADDEUS: Sorry. I didn't know. AMELIA: Thaddeus. Go back to the lilies. THADDEUS: Yes, ma'am.
[beat 4] He does not move. Amelia does not look at him.
[beat 5] Solomon, still crouched, studies Thaddeus's hands. They are stained with potting soil, and a single white petal is stuck to his wrist.
[beat 6] SOLOMON: Thaddeus. THADDEUS: Sir. AMELIA: Thaddeus. Their voices collide on the name. Thaddeus swallows.
[beat 7] He peels the petal off his wrist and holds it out on his open palm. THADDEUS: It was dying.
[beat 8] Amelia says nothing. Solomon straightens slowly, closing his notebook, and in the green dim the mist begins, gently, to settle.

### SCENE s00313 | INT. DEEP-SEA HABITAT "ABYSSAL ONE" - MESS HALL - SHIP NIGHT
Characters: CAPTAIN DOROTHEA OKORO-VALLENTINE, BART, LINDBERG-NWOSU, MARINE BIOLOGIST SELENE ADEBAYO-KOWALSKI, MEDIC IGNATIUS FAIRCHILD-OSEI
[beat 0] A cramped steel cylinder, portholes black with pressure. A galley table bolted to the floor. Four crew sit with untouched trays. CAPTAIN DOROTHEA OKORO-VALLENTINE (50s). ENGINEER BARTHOLOMEW "BART" LINDBERG-NWOSU (40s). MARINE BIOLOGIST SELENE ADEBAYO-KOWALSKI (30s). MEDIC IGNATIUS FAIRCHILD-OSEI (30s).
[beat 1] DOROTHEA: Say it again. BART: The hull is whispering. SELENE: That's metal contraction. BART: It's not contraction. It's tonal. It repeats. IGNATIUS: Repeats what? BART: Seven beats. Pause. Seven beats. SELENE: Bart, we're nine hundred meters down. Everything whispers. BART: Not in sevens.
[beat 2] DOROTHEA: Have you logged it? BART: Three times. Systems say nominal. IGNATIUS: Maybe the systems are lying. SELENE: Systems don't lie. IGNATIUS: They omit.
[beat 3] DOROTHEA: Enough. Bart, if it's not a fault, what is it? BART: A signal. SELENE: From where? BART: Outside. IGNATIUS: There's nothing outside. BART: There's a trench outside, three kilometers deep. SELENE: Whales sing in sevens sometimes. BART: Not at this depth.
[beat 4] DOROTHEA: Play it. BART: Captain-- DOROTHEA: Play. It.
[beat 5] Bart reaches under the table. A speaker crackles. Over the hum of the ventilators, a low hollow knock, seven times. A pause. Seven times.
[beat 6] SELENE: That's inside the hull. IGNATIUS: That's coming from the airlock. DOROTHEA: Who's in the airlock? BART: Nobody. IGNATIUS: Nobody's in there. SELENE: Then who's knocking?
[beat 7] The knocking stops. Silence, for a full, heavy breath.
[beat 8] Then, from the speaker, the same seven beats, slower, and a voice, far away and fragmentary, that sounds like Selene's own. SELENE: That's me.
[beat 9] DOROTHEA: Shut it off. BART: I can't. DOROTHEA: Bartholomew. BART: It's not coming from the system, Captain. It's coming through the glass.
[beat 10] Selene stands. Her chair clatters. She backs toward the bulkhead. The four of them stare at the black porthole.
[beat 11] On its surface, in condensation, one finger-width at a time, a handprint begins to bloom.

### SCENE s00314 | INT. LAKESIDE BOATHOUSE - LATE AFTERNOON
Characters: DOSIA, ELIAS WELLINGTON-ADEBAYO, WOMAN, RUTH MARCHETTI-OSEI, PERRY, ADEKUNLE-STRAND
[beat 0] A weathered boathouse leaning toward the water. Cedar planks gone silver. A rowing shell hangs from the rafters on rope slings, pale as a bone. Light slants through gaps in the boards and lies across the floor in long bars. Dust turns in the light. A radio, tuned between stations, hisses faintly from the workbench. THEODOSIA "DOSIA" WELLINGTON-ADEBAYO (60s, a man's cardigan over a housedress, hair tied up with a bootlace) sits on an overturned bucket, sanding the oar of a long-dead husband. She works with patient, practiced strokes. She has done this every autumn for thirty years.
[beat 1] ELIAS WELLINGTON-ADEBAYO (30s, city coat, rental-car keys on his finger) stands at the threshold. He has not stepped inside. His shoes are wrong for the planks.
[beat 2] ELIAS: Mama. DOSIA: You're late. ELIAS: Traffic. DOSIA: There's no traffic on the lake road. ELIAS: There was a deer.
[beat 3] She sands. The oar's grain comes up gold under her thumb.
[beat 4] DOSIA: You came to talk about the house. ELIAS: I came to see you. DOSIA: Yes. And to talk about the house.
[beat 5] He steps in at last. The floorboards give a long, low groan. He looks at the shell above him. Reaches up. Does not quite touch it.
[beat 6] ELIAS: It's still here. DOSIA: Where would it go? ELIAS: Dad would've sold it. DOSIA: Your father would have rowed it into the lake and kept going. ELIAS: Mama. DOSIA: I'm only saying.
[beat 7] She finally looks up. Studies his face. His coat. His keys. DOSIA: You look like a man who's been told to be gentle.
[beat 8] ELIAS: Ruth thinks-- DOSIA: Ruth thinks a great many things from three states away. ELIAS: She thinks you should come stay with us. DOSIA: In an apartment. ELIAS: A good apartment. DOSIA: Elias. ELIAS: Mama, the stairs. The pipes. Winter.
[beat 9] She sets down the sandpaper. Brushes dust off her knee with a slow hand.
[beat 10] DOSIA: Tell me, did you ever once, as a boy, carry that oar? ELIAS: Once. DOSIA: And? ELIAS: I dropped it. DOSIA: Into the lake. ELIAS: Dad had to swim for it. DOSIA: He was furious. ELIAS: He was laughing. DOSIA: Both things can be true.
[beat 11] The radio hisses. A gull cries somewhere over the water. Elias sinks onto a coil of rope, and the boathouse tilts a little, and holds.
[beat 12] A WOMAN's voice calls from the dock outside, bright and brisk. RUTH: Elias? Is she in there?
[beat 13] Elias closes his eyes. Dosia's mouth thins. She picks up the sandpaper. DOSIA: You brought her. ELIAS: She drove. I didn't know-- DOSIA: Of course you didn't.
[beat 14] RUTH MARCHETTI-OSEI (30s, parka, a folder under her arm) steps into the doorway, silhouetted against the lake. She sees the shell above them, the oar in Dosia's lap, and the quiet. She stops.
[beat 15] RUTH: Oh. I'm interrupting. DOSIA: Yes. RUTH: I'll wait outside. DOSIA: You'll come in. And you'll stand where I can see you.
[beat 16] Ruth does. The three of them make an awkward triangle on the creaking floor. The light bars stretch across their feet.
[beat 17] DOSIA: Now. Which of you is going to tell me the real reason you're here? Neither answers. The radio hisses between stations.
[beat 18] A small figure appears at the water door at the back: PEREGRINE "PERRY" ADEKUNLE-STRAND (10, wet to the knees, a bucket of minnows). He stops, takes in the three adults, and decides to be invisible. DOSIA: Perry. Put the minnows in the trough. PERRY: Yes, Miss Dosia. He tiptoes past them to the trough, pours, and tiptoes out the way he came.
[beat 19] DOSIA: Then I'll finish the oar. She resumes sanding. Slow, rhythmic, patient. Elias watches his mother's hands. Ruth watches Elias. And the shell hangs above them like a held breath.

### SCENE s00315 | INT. ARMORED PARKING GARAGE, P4 - NIGHT
Characters: VIC, ODUYA-LINDGREN, ANNA, BRAITHWAITE-NKOSI, REG, ASANTE-HOLM, DEACON TIMOTHY ABARA-VOSS
[beat 0] Concrete. Sodium glare. Four people in a ring around a black sedan with its trunk open. VIKTOR "VIC" ODUYA-LINDGREN (40s, tailored coat). ANNELIESE "ANNA" BRAITHWAITE-NKOSI (30s, gloves). REGINALD "REG" ASANTE-HOLM (50s, armed). And the fourth, tied to a chair, a gag around his neck: DEACON TIMOTHY ABARA-VOSS (60s, cufflinks).
[beat 1] VIC: Anna, take the gag off. ANNA: Vic, he'll shout. VIC: He won't. REG: He will. VIC: Deacon, will you shout? DEACON: No. ANNA: He's lying. VIC: He's tired. Tired men don't shout.
[beat 2] DEACON: Please, Victor. VIC: Don't "please" me. You sold the list. DEACON: I sold nothing.
[beat 3] REG: We've got the bank record. DEACON: Then the bank record's wrong.
[beat 4] ANNA: Reg, check his phone. REG: Already did. Nothing. ANNA: Nothing doesn't mean innocent. VIC: No. It means careful.
[beat 5] DEACON: Victor, listen. I wasn't the one. VIC: Then who?
[beat 6] DEACON: Ask her.
[beat 7] Every head turns toward Anna. She doesn't flinch. ANNA: That's a nice try, Deacon.
[beat 8] DEACON: Check her laptop. REG: Anna. ANNA: Reg, don't. VIC: Anna.
[beat 9] The ring tightens.
[beat 10] In the silence, a distant door clanks open and footsteps echo down the ramp.

### SCENE s00316 | INT. OPERA HOUSE, FLY GALLERY - NIGHT
Characters: IMOGEN LARKSPUR-ADEWALE, HOLDEN PRYCE-NWANKWO, SALOME BRAITHWAITE-OKORO, ZHENYA, ABARA-KOZLOV
[beat 0] Far above the stage, a catwalk of iron grating hung with ropes and counterweights. Below, the orchestra tunes in a distant tide. Four figures in stagehand blacks creep along the rail. The first is IMOGEN LARKSPUR-ADEWALE (40s), who holds a lantern shuttered to a slit. The second is HOLDEN PRYCE-NWANKWO (50s), who carries a coil of rope over one shoulder. The third is SALOME BRAITHWAITE-OKORO (30s), who moves like water. The fourth, last in line, is YEVGENY "ZHENYA" ABARA-KOZLOV (20s), who is sweating through his gloves.
[beat 1] She raises two fingers. He freezes behind her. She points at a hanging chandelier of painted canvas, ten feet away. He nods, though he cannot see what she means.
[beat 2] She takes the rope from him, loops it round the rail, and tests it with her weight. He swallows. The chandelier turns slowly in the draft.
[beat 3] IMOGEN: Ten minutes. HOLDEN: Eight. SALOME: Seven, if he stops shaking. ZHENYA: I'm not shaking. SALOME: You're humming. ZHENYA: I'm humming because he's humming. HOLDEN: Nobody's humming.
[beat 4] They listen. Below, the orchestra falls silent. A hush rolls up through the dark.
[beat 5] A single violin begins, and from beneath the stage a soprano's voice rises in a glissando so pure it makes Imogen's grip tighten on the lantern.
[beat 6] She turns to him, and he to her. Her eyes glitter. His mouth is open. Whoever they are to each other, in this moment they share a single trembling breath.
[beat 7] SALOME: Now.
[beat 8] They move. She drops the rope. He catches it. She slides down. He braces.
[beat 9] The chandelier lurches, and a hundred glass beads shiver. Below, someone in the audience gasps.
[beat 10] IMOGEN: Abort! HOLDEN: Too late!
[beat 11] The chandelier swings free and crashes silently into the curtain, a harmless explosion of painted canvas.
[beat 12] The audience, delighted, applauds. The four of them crouch on the catwalk, frozen, as the soprano holds her note and the whole house roars.

### SCENE s00317 | INT. REGIONAL SWIM CENTER - POOL DECK - EARLY MORNING
Characters: COACH MARISOL TREVELYAN-ADEWALE, ISAURA PRZYBYLSKI-MBEKI
[beat 0] Chlorine haze. Lane ropes bobbing. Rows of empty bleachers. A single swimmer cuts lengths in lane four. COACH MARISOL TREVELYAN-ADEWALE (50s, whistle, towel round her neck) crouches at the pool edge with a stopwatch. On the starting block, soaked, goggles pushed up on her forehead, waits ISAURA PRZYBYLSKI-MBEKI (17, racing suit, shoulders too narrow for her ambitions).
[beat 1] MARISOL: Again. ISAURA: I just did two hundred. MARISOL: And you'll do another. ISAURA: Coach. MARISOL: Isaura. ISAURA: My arms are lead. MARISOL: Lead floats if you move fast enough.
[beat 2] Isaura laughs, breath ragged. Lowers her goggles. MARISOL: On my whistle. ISAURA: On your whistle.
[beat 3] Marisol raises it. MARISOL: Go.
[beat 4] Isaura launches. The water folds around her. Marisol clicks the watch. Walks the deck beside the lane, keeping pace.
[beat 5] At the wall, Isaura tumbles, pushes off. Marisol bends lower. MARISOL: Long. Long. ISAURA: I'm trying! MARISOL: Long, Isaura!
[beat 6] Isaura touches the far wall. Surfaces. Breathes. Marisol stops the watch. Looks at it.
[beat 7] MARISOL: Better. ISAURA: How much? MARISOL: Two-tenths. ISAURA: That's all? MARISOL: That's everything.
[beat 8] Isaura grins. Pulls herself onto the deck and sits, legs dangling. Marisol sits beside her. They both stare at the water.
[beat 9] ISAURA: Can I ask something? MARISOL: You can ask. ISAURA: Did you ever want to quit? MARISOL: Every day. ISAURA: But you didn't. MARISOL: I got up. That's the whole trick. ISAURA: That's not a trick. That's just getting up. MARISOL: Yes. Exactly.
[beat 10] They say the next line together. MARISOL: Again? ISAURA: Again.
[beat 11] They laugh. Isaura stands. Marisol rises. The water settles into stillness, waiting for them.

### SCENE s00318 | INT. PRESCHOOL PLAYGROUND - NAP TIME - AFTERNOON
Characters: GRANDMA ODALIE KOWALSKI-ADEYEMI, BERTIE, NNAMDI-LINDGREN, AUNT RUFINA PRYCE-OYELARAN, COUSIN TAVIAN BRAITHWAITE-OSEI, BABY SITTER, JOJO, ABARA-FENWICK, LITTLE ZURI ADEKUNLE-HOLM
[beat 0] Foam mats. Mobile of felt moons. Six figures in miniature chairs at a very small table, holding very small teacups. GRANDMA ODALIE KOWALSKI-ADEYEMI (70s, church hat). UNCLE BARTHOLOMEW "BERTIE" NNAMDI-LINDGREN (50s, delivery uniform). AUNT RUFINA PRYCE-OYELARAN (40s, scrubs). COUSIN TAVIAN BRAITHWAITE-OSEI (30s, suit). THE BABY SITTER, MS. JOSEPHINE "JOJO" ABARA-FENWICK (20s, lanyard). And the child, LITTLE ZURI ADEKUNLE-HOLM (4, tutu over snow pants).
[beat 1] ZURI: More tea, please. ODALIE: Of course, dear.
[beat 2] She pours from an empty pot. Bertie sips from a cup of nothing. Rufina checks her watch. Tavian's phone buzzes; he silences it. Jojo mouths along with every word.
[beat 3] ZURI: She spilled. BERTIE: She did? RUFINA: She did not. TAVIAN: She did a little. ODALIE: He's lying. She spilled a lot.
[beat 4] ZURI: He did it. JOJO: Who's he? ZURI: Him.
[beat 5] Everybody points at somebody else.
[beat 6] ZURI: Nap time! They lower their heads onto the table, one by one, a perfect silent tableau. Zuri peeks. Smiles. Lowers her head too.

### SCENE s00319 | EXT. ABANDONED DRIVE-IN SNACK STAND ROOF - NIGHT
Characters: CALLUM ODUYA-LINDQVIST, NADIA, ABARA-FENWICK
[beat 0] A flat tar roof under a smear of stars. A cracked neon cone sign, unlit. A cooler. Two lawn chairs. Two teenagers sit with their backs to the sky. CALLUM ODUYA-LINDQVIST (16, skinny, hoodie, hands tucked in sleeves) watches the road below. NADEZHDA "NADIA" ABARA-FENWICK (16, cut-off jeans, scab on one knee) lies flat, staring up. Somewhere far off, a freight train rolls.
[beat 1] NADIA: Seven. CALLUM: Seven what? NADIA: Satellites. Since you sat down. CALLUM: That's not satellites. NADIA: It's satellites. CALLUM: It's planes. NADIA: Planes blink.
[beat 2] He doesn't argue. Leans back. The tar creaks.
[beat 3] CALLUM: My dad's driving back tomorrow. NADIA: From where? CALLUM: Reno. NADIA: What's in Reno? CALLUM: Nothing. That's the point.
[beat 4] She turns her head toward him. NADIA: Is he staying? CALLUM: He says so. NADIA: Do you believe him? CALLUM: He bought a couch. NADIA: That's not the same. CALLUM: He's never bought a couch.
[beat 5] She sits up. Pulls her knees to her chest. He opens the cooler and offers her a soda. She takes it.
[beat 6] NADIA: Mine's leaving for good, you know. CALLUM: Your mom? NADIA: Mine's mom, yes, my mom. Moving to Tucson with a guy named Gordon.
[beat 7] CALLUM: Gordon sounds fake. NADIA: Gordon sounds like a sofa. CALLUM: He might be your dad's couch.
[beat 8] She laughs, loud, startling a nighthawk off the sign. Callum smiles, too, for the first time. The freight train's horn fades.
[beat 9] NADIA: You'll still be here. CALLUM: Yeah. NADIA: Promise. CALLUM: I'm not going anywhere. There's nowhere to go. NADIA: That's not a promise. CALLUM: It's the only kind I have.
[beat 10] She tips her soda against his. They drink.
[beat 11] A shooting star cuts across the sky and neither of them says anything, though both see it.
[beat 12] NADIA: Make a wish. CALLUM: I did. NADIA: What was it? CALLUM: If I tell you, it won't work. NADIA: That's superstition. CALLUM: It's a rule. NADIA: Same thing. CALLUM: Not tonight.
[beat 13] She lies back. He lies down, too, shoulder to shoulder, and the stars wheel on above them.

### SCENE s00320 | INT. LIGHTHOUSE LAMP ROOM TEA SHOP - DUSK
Characters: ODALYS VANCE, BRAM OKONKWO, HESTER PELL
[beat 0] The lamp room of a decommissioned lighthouse, glazed on all sides, the great lens long ago swapped for six mismatched tables. Salt has frosted the windows from outside. Inside, steam from a copper urn beads on the brass rail. Every cup in the room is chipped in the same place, as if by one clumsy hand. ODALYS VANCE, forties, a insurance assessor in a rain-spotted camel coat, sits with her back to the sea. Her notebook is closed. Her pen is not. BRAM OKONKWO, sixties, the shop's owner, a broad man with flour-white forearms and a limp he pretends is a stroll, sets a teapot between them without being asked. HESTER PELL, eighties, sits at the farthest table in a knitted hat, spooning sugar into a cup that is already full. She has not looked up since Odalys arrived.
[beat 1] ODALYS: The policy was taken out eleven days before the fire. BRAM: Eleven days is a good number. Lucky, in some places.
[beat 2] ODALYS: The fire started in the cellar. The cellar had no wiring. No stove. Nothing that burns by itself. BRAM: Old buildings do surprise us. ODALYS: Your lease says the cellar was sealed in 1994. Someone unsealed it. Someone with a key to a door that, on paper, does not exist. BRAM: I have a great many keys. Lighthouses are sentimental about keys.
[beat 3] ODALYS: Mr. Okonkwo, I am not accusing you. BRAM: That is the most frightening sentence in your language.
[beat 4] HESTER: He did not light it. ODALYS: Mrs. Pell. I did not know you were listening. HESTER: I have listened to this room for fifty years. It is the only thing I do properly. BRAM: Hester, please.
[beat 5] HESTER: Your father kept the lamp, Bram. Mine kept the logbook. You know what a logbook is for. BRAM: Not now. ODALYS: What is it for, Mrs. Pell? HESTER: For the nights nobody wants remembered. BRAM: That book burned.
[beat 6] HESTER: That book is in my handbag. ODALYS: Then the fire was not an accident, and it was not for the insurance. BRAM: Stop. Both of you. Stop talking.
[beat 7] HESTER: He wrote a name on page forty. A boy. Seventeen. The wrong rocks, the right storm. Your father let the lamp go dark that night, Bram, to save oil. BRAM: He was ordered to. HESTER: He was paid to.
[beat 8] ODALYS: And the cellar? HESTER: The cellar is where the boy was kept until the tide went out.
[beat 9] The urn hisses. Bram's hand closes on the teapot handle and the pot shatters against the brass rail, tea running black across the floorboards toward Hester's shoes.
[beat 10] BRAM: Nobody was meant to ever open that door!

### SCENE s00321 | INT. PICKLE BRINING CELLAR - DAY
Characters: FELIX BRANDT, MABEL TOOMEY, SOL KAPLAN
[beat 0] Oak barrels stacked to the rafters. A single bare bulb swings on a cord. The smell is dill, vinegar and old secrets. FELIX BRANDT, fifties, a deli owner in a stained apron and a bow tie he refuses to remove, stands guard over a barrel with both arms spread wide. MABEL TOOMEY, thirties, a health inspector with a clipboard and a face like a closed door, taps her pen against the barrel lid. SOL KAPLAN, sixties, Felix's brother-in-law, sits on an upturned crate eating a pickle with great concentration.
[beat 1] MABEL: Open the barrel, Mr. Brandt. FELIX: It's a pickle barrel. You've seen one. They're all the same. MABEL: Open it. FELIX: Folks, nobody panic, the lady wants to see a pickle.
[beat 2] Sol chews. Nobody moves. The bulb sways. SOL: Forty years. Forty years and she wants to see a pickle.
[beat 3] MABEL: I heard a noise from this barrel when I came in. FELIX: That's fermentation. It's alive. Like all of us.
[beat 4] MABEL: It said "Felix." FELIX: Then it's a very friendly pickle.
[beat 5] Mabel reaches for the lid. Felix steps in front of it. Sol quietly slides his crate three feet to the left, to block the door.
[beat 6] FELIX: Mabel, may I call you Mabel, the cellar is cold, your hands are cold, come upstairs, have a bagel. MABEL: Mr. Brandt, one thing at a time. FELIX: I'll give you two bagels. SOL: Three. She looks like a three. MABEL: I do not take bribes. FELIX: Nobody said bribe. We said bagels.
[beat 7] FELIX: It's a family recipe, you understand! MABEL: I understand a violation when I smell one!
[beat 8] The lid thumps from inside. All three stare at it. Sol takes another bite. SOL: Nice acoustics down here.
[beat 9] Felix puts a hand on the lid and presses down, smiling so hard his bow tie quivers. FELIX: Sol. The jar of the good relish. Upstairs. Now. SOL: She'll want it with mustard.
[beat 10] MABEL: I want the barrel open. FELIX: And I want a bigger deli. We don't always get.
[beat 11] The lid thumps again.
[beat 12] Mabel, without taking her eyes off Felix, writes one word on her clipboard and underlines it twice.

### SCENE s00322 | INT. SALT-DRYING SHED - TIDAL FLAT - NIGHT
Characters: INES MARCHETTI, DORCAS WYNN, TOBIAS LEACH
[beat 0] A long timber shed on stilts above the mudflats, open at the seaward end. White pyramids of salt glimmer along the floor like small glaciers. The tide is a sound out in the dark, patient and wet. INES MARCHETTI, fifties, a brine-cracked woman in oilskins, stands at the foot of the largest heap with a lantern held low. DORCAS WYNN, thirties, a county coroner's investigator in a clean grey raincoat that does not belong here, kneels beside a shovel that someone has driven upright into the salt. TOBIAS LEACH, sixties, the shed's night watchman, sits on an overturned bucket in the doorway, his hands folded around a thermos.
[beat 1] Ines sets the lantern down. Dorcas does not look at her. Ines watches Dorcas's hands, and Dorcas watches the shovel.
[beat 2] INES: You found it fast. DORCAS: It was the only thing standing.
[beat 3] Ines nods. She steps closer. She picks up a handful of salt and lets it run through her fingers back onto the pile. She does it again. She does not stop.
[beat 4] TOBIAS: Tide turns at two. If you want the flat, you want it before. INES: We want nothing, Tobias.
[beat 5] Dorcas pulls the shovel loose. The salt beneath is darker, damp, a seam of brown running down into the heap. She sets the blade against it and pushes.
[beat 6] DORCAS: Who was working this stack last Thursday? INES: Nobody. It was closed. DORCAS: Somebody locked it. Somebody had the key.
[beat 7] Ines hands Dorcas the lantern. She holds it a moment longer than she needs to, and she does not let go. INES: Careful. It is slippery near the edge.
[beat 8] Dorcas takes the lantern. She notices that Ines has not asked what is under the salt. She says nothing. She digs.
[beat 9] The shovel strikes cloth. A sleeve, grey like her own, stiff with brine.
[beat 10] Tobias stands. The thermos drops, rolling across the boards.
[beat 11] TOBIAS: I told you to leave the tide to do it. INES: Be quiet. TOBIAS: You said the tide would do it!
[beat 12] Ines turns on him. Dorcas, still on her knees, sets down the lantern and the light throws all three shadows long against the wall.
[beat 13] DORCAS: Which of you wants to tell me whose coat this is? Nobody answers.
[beat 14] Out on the flat, the water arrives.

### SCENE s00323 | INT. STALLED CABLE CAR GONDOLA - DAY
Characters: RAVI, NKECHI, OLEG, PILAR
[beat 0] RAVI, forties, a hiking guide, sits on the floor with his boots braced against the door. NKECHI, thirties, grips the rail. OLEG, seventies, holds a thermos in both hands. PILAR, twenties, films the white nothing outside on her phone. The gondola has been still for two hours.
[beat 1] He licks his lips. She lowers the phone. They all look at the roof as it ticks in the cold.
[beat 2] RAVI: Rescue said four hours. That was one hour ago, so three. NKECHI: It was two hours ago. So two. OLEG: It is whatever number keeps us calm. I choose three.
[beat 3] PILAR: My battery is nineteen percent. RAVI: Then stop filming the clouds. PILAR: They're getting closer.
[beat 4] NKECHI: Clouds don't get closer. We get lower. OLEG: Nobody said lower. RAVI: The cable sags in the cold. It is normal. Everybody breathe slowly, in through the nose. PILAR: I am breathing. I'm breathing so loudly.
[beat 5] NKECHI: We are fine. Somebody pour the tea. OLEG: Last cup is mine. After that, we take turns.

### SCENE s00324 | EXT. FROZEN RESERVOIR CURLING SHEET - DAWN
Characters: KAI TANAKA, DESHAWN FOLEY, BIRGIT SOLBERG, ACHTERBERG, YOUNG PETRO
[beat 0] A pale sheet of ice scraped smooth between two snowbanks, the far house painted in washed-out reds. Breath hangs over every mouth. KAI TANAKA, thirties, broom raised, crouches at the hog line. DESHAWN FOLEY, twenties, his rival, stands opposite in a borrowed jacket. BIRGIT SOLBERG, sixties, skips for Kai's team and screams numbers like a general. MRS. ACHTERBERG, seventies, the umpire, sits on a folding chair wrapped in a quilt. YOUNG PETRO, ten, Mrs. Achterberg's grandson, holds the scoreboard stick.
[beat 1] Kai releases. The stone glides, curls, kisses Deshawn's guard and drifts toward the button. Birgit and Kai sweep together, frantic, shouting.
[beat 2] The stone stops a hair short. BIRGIT: No! DESHAWN: Hair short, gentlemen!
[beat 3] Kai and Deshawn shove each other chest to chest. Both slip, both go down in a tangle, brooms skittering away. Birgit hauls them apart by their collars. Petro drops the scoreboard stick and runs.
[beat 4] MRS. ACHTERBERG: Measure it! Everyone freezes.
[beat 5] Petro returns with the string, kneels, and stretches it from the button to the stone. The ice creaks like a held breath.
[beat 6] PETRO: It's a tie.
[beat 7] The group scatters in four directions, laughing, swearing, slapping each other on the back.

### SCENE s00325 | INT. HYPERBARIC CHAMBER - HOSPITAL BASEMENT - NIGHT
Characters: LENA ASHWORTH, NURSE PRIYA DESAI, WALDEMAR GRUBB
[beat 0] A steel cylinder the size of a submarine hatch, riveted, round-windowed, humming. Dials gleam. A single bench runs along each wall. The air smells of hot metal and antiseptic. DR. LENA ASHWORTH, forties, tall, severe, with grey strands escaping from a tight bun, checks a pressure gauge with the focus of a surgeon. NURSE PRIYA DESAI, thirties, small, quick, her scrubs covered in a cardigan, adjusts an IV line on a gurney. MR. WALDEMAR GRUBB, sixties, a diver with the bends, lies on the gurney, bearded, grey-skinned, eyes bright with fear.
[beat 1] LENA: Pressure at two atmospheres. Priya, how is his pulse? PRIYA: One-ten and climbing.
[beat 2] Lena crosses to Priya. She leans over the gurney. She checks Waldemar's pupils. She frowns and looks up at Priya.
[beat 3] WALDEMAR: Am I dying? LENA: You are being treated. WALDEMAR: That is not an answer. PRIYA: It's the only one she gives.
[beat 4] Lena shoots Priya a look. Priya shrugs. She tucks the blanket tighter around Waldemar's feet.
[beat 5] LENA: Two and a half atmospheres. Watch the oxygen. If he seizes, we have ninety seconds. PRIYA: Ninety seconds in a sealed tube. Wonderful. LENA: I heard that.
[beat 6] WALDEMAR: Tell me one thing. Which of you two is in charge? Lena and Priya both begin to answer. Both stop. The dial needle trembles. A rivet pings somewhere in the wall.
[beat 7] PRIYA: She is. LENA: She is. They look at each other.
[beat 8] Waldemar's whole body arches off the gurney and the alarm shrieks. Lena and Priya grab him at once, one at his shoulders, one at his knees, and hold him down while the chamber hums louder around them.
[beat 9] LENA: Three atmospheres! Now! PRIYA: Three! Going up!
[beat 10] She hammers the valve. The needle climbs.
[beat 11] Waldemar sags back, gasping, and the alarm cuts out. The sudden silence is enormous. WALDEMAR: Thank you.
[beat 12] Lena lets go first. Priya follows. Neither of them speaks.

### SCENE s00326 | INT. CHEESE-AGING CAVE - NIGHT
Characters: SABINE LAROCHE, MOSES TREVELYAN, GINO BELLAMY, GUARD
[beat 0] A limestone cavern carved into a mountainside, lined with wooden racks holding ten thousand wheels of alpine cheese. Humidity drips from the ceiling. The air is thick as a wet wool coat. A chain-link door stands at the far end, a keypad glowing red. SABINE LAROCHE, forties, a former pastry chef turned safecracker, wears a hairnet and a white lab coat. She kneels at the keypad with a screwdriver in her teeth. MOSES TREVELYAN, fifties, a tall, stooped man who once forged museum labels, stands lookout in rubber boots. He holds a flashlight and a wheel of Gruyere like a baby. GINO BELLAMY, thirties, a nervous driver in a hooded sweatshirt, paces behind them, whispering into a walkie-talkie.
[beat 1] GINO: Sabine, the guard changes at three. It's two fifty. SABINE: I know what time it is.
[beat 2] MOSES: Please do not breathe on the Gruyere. It's eighteen months old and extremely sensitive. GINO: Moses, you are literally holding it. MOSES: That's different. I love it.
[beat 3] Sabine pulls the keypad cover off. Wires spill out like a nest. She selects a pair and strips them with her teeth. SABINE: Quiet. Both of you.
[beat 4] GINO: What if it trips an alarm? MOSES: It will not trip an alarm. SABINE: It might trip an alarm. MOSES: It will not, Sabine, I studied the schematic. GINO: You studied the schematic of a cheese cave? MOSES: It's a very serious cheese cave.
[beat 5] She twists the wires together. A green light blinks. The door clicks. GINO: Oh my God. SABINE: Don't say it. GINO: It opened. MOSES: Do not say anything!
[beat 6] The door swings wide. Beyond it, a steel vault shaped like a giant wheel of cheese, the combination dial glittering. MOSES: There she is.
[beat 7] Gino presses his walkie to his ear and his face drains. GINO: Guys. Guys, guard's early. He's coming down the tunnel. SABINE: How early? GINO: Now.
[beat 8] Footsteps echo. A distant voice, bored, singing a folk song. Sabine rises, wipes her hands. Moses sets down the Gruyere and takes up a ladle from a bucket. Gino drops behind a rack. MOSES: He'll check the door. SABINE: Then we close the door.
[beat 9] She yanks it shut. The latch snaps and the keypad goes dark, plunging the cavern into blackness except for Moses's flashlight beam shaking on the wall. GINO: Is it locked? MOSES: From which side?
[beat 10] Sabine stares at the door, at the dead keypad. SABINE: Oh no. GINO: What oh no? What "oh no?" SABINE: I locked us inside.
[beat 11] The singing stops. A flashlight beam sweeps along the racks toward them. GINO: I'll talk to him. MOSES: You'll do no such thing. SABINE: Both of you, shut up, I'm thinking. GINO: We're thieves in a cheese cave. MOSES: We are gourmets in a cheese cave. SABINE: Quiet!
[beat 12] She snatches the screwdriver, jams it in the latch, twists. Metal shrieks. The door pops open an inch, then two, then flies wide.
[beat 13] The guard's beam hits the vault. Sabine slams the door shut again from the inside and holds it, her whole body against the steel. Moses and Gino pile in beside her. The three of them pant in the dark.
[beat 14] GUARD: Evening, folks! Nobody breathes. MOSES: He's gone past. GINO: How do you know? MOSES: He's still singing.
[beat 15] Faintly, the song resumes and fades down the tunnel. Sabine slides to the floor. Gino laughs, high and helpless. Moses retrieves the Gruyere and kisses it.
[beat 16] SABINE: The vault. Now. Before I lose my mind. She turns the dial. Click, click, click.
[beat 17] The great wheel door groans open, and inside, stacked to the ceiling, are not diamonds, not bearer bonds, but ten thousand more wheels of cheese. GINO: It's cheese. MOSES: It's the cheese.
[beat 18] SABINE: We were robbing the wrong cave.

### SCENE s00327 | INT. LAMPLIGHTERS' GUILD HALL - LONDON - 1872 - EVENING
Characters: ELIAS THORNBY, AGATHA PRUDHOE, CONSTABLE JOLLIFFE, QUILL, TOM
[beat 0] A long timber room hung with tin ladders and coiled wicks. Rain on the high windows. Five brass lamps burn along a table. ELIAS THORNBY, fifties, guild master, sits at the head in a velvet waistcoat gone bald at the elbows. AGATHA PRUDHOE, forties, a widow with a ledger, sits at his right. CONSTABLE JOLLIFFE, thirties, damp and unhappy, stands at the door. MRS. QUILL, sixties, the hall's cook, brings a tray. TOM, twelve, the lamplighter's boy, sits cross-legged by the stove.
[beat 1] ELIAS: We are short eleven lamps on Gresham Row. AGATHA: Twelve. I counted twice. ELIAS: Then twelve.
[beat 2] JOLLIFFE: Sir, someone's cut them clean. Not smashed. Cut.
[beat 3] AGATHA: Fuel was drawn on Thursday for sixty lamps. Fifty-eight were lit. ELIAS: Agatha, not now.
[beat 4] Mrs. Quill sets down the tray. She pours tea for Agatha first, then Elias, then nobody.
[beat 5] MRS. QUILL: Always the sums. Never the stairs. TOM: Mrs. Quill, what stairs? MRS. QUILL: Hush, boy.
[beat 6] JOLLIFFE: If this guild cannot keep the street lit, the parish will contract with the gas company. ELIAS: Gas. The smell of it.
[beat 7] AGATHA: Then someone is paid to see the street dark.
[beat 8] ELIAS: Constable, it was a rough night. You may go. JOLLIFFE: I'd rather wait, sir.
[beat 9] Elias stirs his tea. Agatha turns a page. Tom watches the stove. The rain does not let up.

### SCENE s00328 | INT. FERRY TERMINAL LOST PROPERTY OFFICE - NIGHT
Characters: ROSALIND IKEDA, AUGUSTIN BEAUMONT, LUCINDA MORROW, KWAME ASANTE, OFFICER PERRY
[beat 0] Shelves of umbrellas. A cage of single gloves. Fluorescent hum. DET. ROSALIND IKEDA leans on the counter. AUGUSTIN BEAUMONT, the clerk, hides behind a ledger. LUCINDA MORROW sits on a bench with a violin case on her knees. KWAME ASANTE paces. OFFICER PERRY blocks the door.
[beat 1] IKEDA: Describe the case again. LUCINDA: Black. Brass clasps. A sticker of a lighthouse on the lid. AUGUSTIN: We have forty-one black cases. Nine with brass.
[beat 2] KWAME: That one's hers. That one in her lap. LUCINDA: This one is mine. Yours is somewhere else.
[beat 3] IKEDA: Open it. LUCINDA: It's a violin. IKEDA: Then it won't mind. AUGUSTIN: Detective, there are procedures.
[beat 4] IKEDA: Mr. Beaumont, you logged this case at nine-ten. Two hours before the ferry docked. AUGUSTIN: I may have mistaken the time.
[beat 5] KWAME: He mistakes everything. LUCINDA: Kwame, sit down. KWAME: I've been sitting since Tuesday.
[beat 6] IKEDA: Officer Perry, the door. PERRY: Locked, ma'am.
[beat 7] IKEDA: Miss Morrow. The clasps. LUCINDA: No.
[beat 8] IKEDA: Then I'll count to three. AUGUSTIN: Please don't.
[beat 9] KWAME: One.

### SCENE s00329 | INT. DATA CENTER - COLD AISLE - NIGHT
Characters: NADIA VOSKUIJLEN, ELIJAH CROSS, TEODORA MIHAI, HARLAN
[beat 0] Rows of black server racks stretching into cold blue light. Fans roar. Cables hang like vines. NADIA VOSKUIJLEN, thirties, a network engineer in a parka over her work shirt, crouches at an open rack, a laptop balanced on her knee. ELIJAH CROSS, forties, her manager, stands behind her in a thin suit that is too cold for the room. TEODORA MIHAI, twenties, a junior tech, stands at the aisle's end holding a flashlight and a clipboard. HARLAN, fifties, a security guard, appears at the far door, backlit, one hand on his belt.
[beat 1] NADIA: Someone has been copying the customer database to an outside address. Every night at 2:13. ELIJAH: Nadia, we should discuss this upstairs. NADIA: It's ten past two. It's about to happen again. TEODORA: The traffic spike is already starting.
[beat 2] ELIJAH: Delete the log. We'll find who it is in the morning. NADIA: Why would I delete the log? ELIJAH: Because I'm asking.
[beat 3] Harlan steps into the aisle. His boots echo on the steel floor. HARLAN: Is there a problem?
[beat 4] NADIA: Mr. Cross is asking me to delete evidence. HARLAN: Mr. Cross? ELIJAH: Harlan, this is an internal matter. HARLAN: I would need that in writing.
[beat 5] Elijah reaches into his jacket. Everyone freezes. He pulls out a phone and holds it up, shaking. ELIJAH: I'm making a call.
[beat 6] TEODORA: It's two-thirteen. The server fans spin down. The lights flicker. Then a long beep.
[beat 7] NADIA: Transfer complete. ELIJAH: Then it's done.
[beat 8] HARLAN: It's done, Mr. Cross. And now we know where it went.
[beat 9] Nadia turns the laptop around. The destination is Elijah's own home address.
[beat 10] ELIJAH: I can explain. HARLAN: You'll have all night.

### SCENE s00330 | INT. BOWLING ALLEY OFFICE - DAY
Characters: BRANDYN HOLLIS, CHIDI OBI, MARGUERITE FENN, DEV PATEL-ROSS, UNDERWOOD
[beat 0] An open-plan office built into a defunct bowling alley. Desks sit on the lanes. Monitors glow where the pins used to stand. A scoreboard overhead reads "SYNERGY: 0." BRANDYN HOLLIS, forties, a regional vice president in a vest with a lanyard, stands at lane three, clapping. CHIDI OBI, thirties, an analyst with tired eyes, sits at lane four. MARGUERITE FENN, fifties, head of compliance, in a cardigan, clutches a binder. DEV PATEL-ROSS, twenties, an intern, kneels on lane two plugging in a power strip. UNDERWOOD, sixties, the janitor, mops the gutter without comment.
[beat 1] BRANDYN: Team! We are pivoting to a bowling-first culture. CHIDI: Pivot to what? We have no pins. BRANDYN: Exactly. Pins are legacy.
[beat 2] MARGUERITE: Brandyn, the fire marshal says the lanes are not rated for desks. BRANDYN: Marguerite, the lanes are a metaphor.
[beat 3] DEV: There's a ball in my power strip. CHIDI: The ball returns are still live.
[beat 4] BRANDYN: Great. Let's leverage the returns. Everyone grab a ball and a quarterly goal. MARGUERITE: That is a safety violation. BRANDYN: It is a culture violation not to.
[beat 5] CHIDI: Brandyn, I haven't been paid since the third frame. BRANDYN: Strike, Chidi. We're all in a gutter right now.
[beat 6] A ball rolls down lane two and takes out Dev's power strip. The monitors go dark. The scoreboard flickers: "SYNERGY: 1."
[beat 7] UNDERWOOD: Told you.

### SCENE s00331 | INT. STRANDED BUS ON FLOODED CAUSEWAY - NIGHT
Characters: GWEN MARSDEN, HIRO YAMAMOTO, OLUWASEUN, AUNTIE LUPE, BARNABY
[beat 0] A mid-size passenger bus, headlights still burning, surrounded by black water that laps at the doors. The aisle is wet to the ankle. Rain drums on the roof. GWEN MARSDEN, fifties, the driver, grips the wheel though the engine is dead. HIRO YAMAMOTO, forties, a salesman with a leather briefcase, stands in the aisle. OLUWASEUN, twenties, sits on the back bench with her knees drawn up. AUNTIE LUPE, seventies, wraps a shawl around a covered basket. BARNABY, ten, sits very still beside her.
[beat 1] GWEN: Everybody stay on the seats. Above the water line. HIRO: How far is the next village? GWEN: Two miles. HIRO: In which direction? GWEN: Away from the water.
[beat 2] Hiro lifts his briefcase to his chest. He sets it down. He lifts it again.
[beat 3] AUNTIE LUPE: Eat something, my darling. BARNABY: I'm not hungry. AUNTIE LUPE: Eat.
[beat 4] Barnaby takes a roll from the basket and holds it in both hands without biting it. Oluwaseun shifts her feet up onto the seat. OLUWASEUN: Okay. Okay. Okay. HIRO: Did somebody say something? OLUWASEUN: No.
[beat 5] The bus tilts a few degrees. Everyone grabs a seatback. A cold line of water slides along the floor. GWEN: Nobody panic. Everybody move to the front.
[beat 6] They move. Hiro hesitates, then offers Auntie Lupe his arm. She takes it without a word.
[beat 7] Barnaby sets down the roll and picks up the basket. AUNTIE LUPE: Leave it, darling. BARNABY: It's heavy. AUNTIE LUPE: Then we carry it together.

### SCENE s00332 | INT. CLOCK TOWER MECHANISM ROOM - NIGHT
Characters: JUNE KOWALCZYK, REGGIE FAIRWEATHER
[beat 0] Iron gears the size of cartwheels turn behind a dusty rail. Moonlight through the louvres.
[beat 1] JUNE KOWALCZYK, thirties, a clockmaker in leather gloves, crouches by the main wheel with a lantern while REGGIE FAIRWEATHER, fifties, the town clerk, climbs the last rung of the ladder, wheezing, and drops a folded paper on the floor that June snatches before he can reach it, reads, crumples, and shoves into her pocket as Reggie lunges for her wrist.
[beat 2] JUNE: Reggie, the hands stopped at 11:42 on the night your brother died. REGGIE: June, it's a clock. JUNE: Somebody held them there. With a pin through the escapement.
[beat 3] Reggie backs toward the ladder, hand on the rail, one boot already finding the rung. June blocks the way, lantern raised, her shadow swelling across the gears. REGGIE: You'll fall. JUNE: Not me.
[beat 4] The main wheel clunks. The room shudders. Both of them look up as the great bell above them begins, slowly, to ring.

### SCENE s00333 | INT. CAROUSEL WORKSHOP - NIGHT
Characters: MINA, TEDDY, OSRIC, LOLA
[beat 0] A cavernous barn of splintered painted horses, hanging by chains from the rafters, their glass eyes catching a single lantern. Sawdust drifts like snow. MINA, twenties, a documentary photographer, raises a camera. TEDDY, thirties, her guide, grips a crowbar. OSRIC, sixties, the caretaker, stands rigid in the doorway with a ring of keys. LOLA, ten, Osric's granddaughter, clutches a plush rabbit.
[beat 1] MINA: Teddy, did you hear that? TEDDY: It's the wind. OSRIC: No wind in here.
[beat 2] LOLA: Grandpa, the horses are looking at me. TEDDY: Lola, honey, they're wood. MINA: Teddy, look up. OSRIC: Lola, come here.
[beat 3] A chain clinks. One painted horse swings, slow. Another turns its head.
[beat 4] TEDDY: Mina, back up. MINA: I'm trying. LOLA: Grandpa!
[beat 5] The lantern gutters. All the horses begin to descend at once on their chains, slamming into the floor, shrieking, wheels turning, the whole carousel lurching into motion in the dark.

### SCENE s00334 | INT. TAXIDERMY SHOP - BACK ROOM - DAY
Characters: CORNELIA BRIGHT, DESMOND ARCHULETA
[beat 0] Glass eyes everywhere. A stuffed badger on the desk. A deposition table cleared between a moose head and a fox in mid-pounce. ATTY. CORNELIA BRIGHT, forties, in a grey suit, sits with a legal pad. DESMOND ARCHULETA, fifties, the shop owner, sits across from her in a smock, hands folded.
[beat 1] CORNELIA: State your name for the record. DESMOND: Desmond Archuleta. CORNELIA: And you have owned this shop how long? DESMOND: Twenty-two years.
[beat 2] CORNELIA: And in that time you've never kept a customer's property past the pickup date. DESMOND: Never. CORNELIA: Never once. DESMOND: Not once.
[beat 3] CORNELIA: Mr. Archuleta, how many animals are in this room? DESMOND: I couldn't say. Thirty. Forty. CORNELIA: Would it surprise you to learn that forty-one are registered, and forty-two are present? DESMOND: Counting error.
[beat 4] CORNELIA: Would it surprise you that the forty-second is a recently deceased Great Dane belonging to my client?
[beat 5] Desmond's hands unfold. Cornelia's pen stops. They stare at each other. Behind Desmond, the badger on the desk seems to lean forward.
[beat 6] DESMOND: I want a lawyer. CORNELIA: I am the lawyer.
[beat 7] They both rise at once. The table scrapes. A glass eye rolls to the floor between them.

### SCENE s00335 | INT. ABANDONED CANNERY - OFFICE - NIGHT
Characters: ROSALIE FENWICK, MAUDE, PERCIVAL, IGNATIUS, SISTER BERNADETTE, LEOPOLD
[beat 0] A rusted office above the cannery floor, windows black, a lone lamp burning on a steel desk. Fish labels peel off the walls. Below, machinery drips. ROSALIE FENWICK, thirties, a historian with a field recorder, sits on the desk. MAUDE, sixties, the former forewoman, perches on a stool, arms crossed. PERCIVAL, forties, Rosalie's research assistant, hovers by the door. IGNATIUS, fifties, a priest in a heavy coat, stands at the window. SISTER BERNADETTE, seventies, clutches a rosary. LEOPOLD, thirties, the surveyor, kneels by a floor hatch with a torch.
[beat 1] ROSALIE: Let's start with the night shift of 1961. MAUDE: We don't talk about it. PERCIVAL: Maude, please. MAUDE: I said we don't. IGNATIUS: Maude is right. Some nights are best left in the water.
[beat 2] Leopold lifts the hatch. A cold wet breath rolls up from below.
[beat 3] LEOPOLD: Something down here. SISTER BERNADETTE: Close it. ROSALIE: Leopold, what is it? LEOPOLD: A shoe. And a hand. PERCIVAL: A hand? LEOPOLD: Holding the shoe.
[beat 4] Maude rises. Ignatius crosses himself. Rosalie turns her recorder to Leopold.
[beat 5] MAUDE: He told them not to open the hatch. SISTER BERNADETTE: Who did? MAUDE: He did. IGNATIUS: She means Gideon. PERCIVAL: Who is Gideon?
[beat 6] Nobody answers. Down the hatch, the hand twitches. LEOPOLD: It's moving.
[beat 7] The lamp dims. Every door in the cannery slams at once.

### SCENE s00336 | INT. PLANETARIUM DOME - NIGHT
Characters: ZELDA, MOE, KIRSTEN, BAXTER, YUSUF, STRANGER, LUCIAN
[beat 0] Stars wheel overhead on a painted ceiling. Reclining seats ring a projector like a metal spider. ZELDA, thirties, in a black bodysuit, clips a wire. MOE, fifties, her partner, kneels at the projector. KIRSTEN, forties, the planetarium director, bound to a seat with tape. BAXTER, twenties, a guard, lies unconscious. YUSUF, thirties, watches the door.
[beat 1] A STRANGER, forties, in a long coat, steps out of the dark aisle.
[beat 2] Zelda turns. Kirsten wriggles. Moe freezes. He raises a wrench. She lowers her wire cutters.
[beat 3] STRANGER: Evening. I'm told the Orion diamond is on display tonight. ZELDA: It isn't. STRANGER: It's under the projector.
[beat 4] Yusuf slides toward the stranger. He grabs his collar. The stranger doesn't flinch.
[beat 5] STRANGER: My name is Lucian. I'm the buyer. YUSUF: The buyer isn't due until Friday. LUCIAN: I'm early. She knows.
[beat 6] He nods at Kirsten. She nods back. Zelda stares at her. She stares at Zelda.
[beat 7] ZELDA: You sold us out. KIRSTEN: I sold you a ceiling, dear.
[beat 8] Moe drops the wrench. The stars blink out.

### SCENE s00337 | INT. NIGHT FERRY GALLEY - NIGHT
Characters: CELESTE ARMITAGE, DOMINIC VARGA, CAPTAIN OYELARAN, DECKHAND SUNNY, HARBORMASTER
[beat 0] A cramped steel galley, steam rising from a stockpot, a single porthole showing black water and distant harbor lights. CELESTE ARMITAGE, thirties, a pastry chef in a stained white jacket, leans against the counter, arms folded. DOMINIC VARGA, thirties, a passenger in a soaked grey coat, stands in the doorway holding a violin case. CAPTAIN OYELARAN, sixties, silver-bearded, pours coffee into three mugs and hands one to Celeste, one to Dominic, and keeps one. DECKHAND SUNNY, twenties, wipes down the counter, glancing from Celeste to Dominic and back with obvious amusement.
[beat 1] HARBORMASTER: Ferry Marisol, this is Harbor. Dock three is clear. Over. CAPTAIN OYELARAN: Harbor, Marisol. Ten minutes out. Over.
[beat 2] Dominic sets down the violin case. Celeste picks up a whisk and puts it down. He crosses the galley, stops a foot from her, and neither of them says anything while the captain sips and Sunny bites his lip.
[beat 3] CELESTE: You said you'd never take this boat again. DOMINIC: I said a lot of things in that rain.
[beat 4] HARBORMASTER: Marisol, confirm passenger count. Over. CAPTAIN OYELARAN: Harbor, Marisol. Count is... flexible. Over.
[beat 5] Celeste laughs before she can stop it. Dominic smiles. Sunny drops the rag.
[beat 6] DOMINIC: I wrote you forty letters. CELESTE: I read thirty-nine. DOMINIC: Which one did you skip? CELESTE: The one where you said goodbye.
[beat 7] The ferry horn blares. Dominic takes her hand, and she lets him, and the captain turns his back to study the porthole with enormous interest, Sunny scrambling after him with the mugs.

### SCENE s00338 | INT. FLOODED GRAIN SILO - DAY
Characters: MAREN VOSS, OTIENO
[beat 0] Brown water laps at the third rung of the iron ladder. Light falls in thick shafts through holes in the tin roof. The walls sweat. A rotten sweetness hangs in the air, old wheat gone to mold.
[beat 1] MAREN VOSS, forties, a farmer in a soaked canvas jacket, sits on a ledge halfway up the wall, one arm hooked through the ladder, watching the water. OTIENO, thirties, her neighbor, a mechanic with a split lip, stands waist-deep below, feeling along the wall with both hands, working his way around the curve of the silo until he reaches a bricked-up door, presses his ear to it, and strikes it three times with a bolt while she watches without a word.
[beat 2] MAREN: Two days. Two days and the river took the whole valley. OTIENO: Door's solid. Mortar, not wood. MAREN: Somebody bricked it up. OTIENO: Somebody who didn't want it opened. Or didn't want something in here to get out.
[beat 3] She climbs down a rung. The water touches her boot. She pulls the boot back up, then plants it again, then looks up at the roof where a pigeon has settled on a strut.
[beat 4] MAREN: Anybody up there? Anybody hear us?
[beat 5] Nothing but drip. Otieno rests his forehead on the bricks. She wades over to him and presses her palm flat to the wall beside his, and together they listen.
[beat 6] OTIENO: It's quiet. MAREN: It's never quiet in a silo. There's always the grain settling. OTIENO: No grain left to settle.
[beat 7] She takes the bolt from his hand and strikes the wall herself, twice, then once, then twice. A long moment passes.
[beat 8] From beyond the bricks, faint as a heartbeat, someone strikes back.

### SCENE s00339 | INT. ROLLER RINK - FAMILY REUNION - DAY
Characters: PEARL WASHINGTON, UNCLE ROY, TAMIKA, JUNIOR, LILIANA
[beat 0] A wood-floored rink under a mirror ball. Banner reads "WASHINGTON FAMILY 40TH." Folding tables of casserole line one wall. Disco hits thump faintly. PEARL WASHINGTON, eighties, in a purple tracksuit, sits on a throne of folding chairs. UNCLE ROY, sixties, her son, rolls by on rented skates, arms out. TAMIKA, thirties, Roy's niece, balances a paper plate in one hand and her phone in the other. JUNIOR, fifteen, hangs on the rail, hoodie up. LILIANA, six, Tamika's daughter, sits cross-legged on the floor lacing her skates wrong.
[beat 1] PEARL: Roy! Skate like you got sense! UNCLE ROY: I'm skating, Ma!
[beat 2] He is not. He wobbles. He grabs the rail beside Junior and holds on, grinning.
[beat 3] TAMIKA: Junior, take your hood off. JUNIOR: It's fine. TAMIKA: It's your grandmother's birthday.
[beat 4] Junior pushes the hood back an inch.
[beat 5] Tamika sets her plate in front of Pearl, who pushes it back toward Tamika. PEARL: That's not my food. TAMIKA: It's your casserole. PEARL: Then why is it cold?
[beat 6] Liliana tugs Tamika's sleeve. LILIANA: Mama, my skates are on backwards. TAMIKA: They're on your wrong feet, baby. She kneels.
[beat 7] Roy rolls up and lowers himself beside Pearl, and Pearl, without a word, pats his knee twice. Junior watches this from the rail and lets the hood fall all the way down.

### SCENE s00340 | INT. PAWNSHOP INSIDE DEFUNCT AQUARIUM - NIGHT
Characters: SAL, FRANCESCA OYELOWO
[beat 0] A pawnshop built into the old shark tank. The glass walls are cracked and green with algae. Guitars hang where the hammerheads once circled. A neon sign buzzes: "CASH FOR ANYTHING." SAL "THE EEL" DiMARCO, sixties, slick-haired, in a shiny shirt open to the chest, sits behind a counter counting bills. His smile never reaches his eyes.
[beat 1] FRANCESCA OYELOWO, thirties, a detective in a navy raincoat, comes in shaking water off her umbrella. She looks around the tank the way a diver might.
[beat 2] SAL: We're closed. FRANCESCA: The door was open. SAL: Doors do that.
[beat 3] She walks the length of the counter. She picks up a ukulele, plucks one string, puts it down.
[beat 4] FRANCESCA: Nice acoustics. SAL: Used to be a tank for sharks. Now it's a tank for sharks. FRANCESCA: Cute. SAL: You hear that, boys? The lady thinks I'm cute.
[beat 5] FRANCESCA: Mr. DiMarco, a necklace went missing from the Hartwell estate on Tuesday. Emerald, platinum chain. It turned up on your ledger on Wednesday. SAL: Ledger says a lot of things. FRANCESCA: It says you paid four hundred dollars. SAL: Charity. FRANCESCA: It says you paid it to a boy named Teddy Hartwell. Age nine.
[beat 6] Sal sets down the bills. The neon buzzes louder.
[beat 7] SAL: Kids lie. FRANCESCA: Teddy was telling the truth. He wanted to buy his mother a birthday present. He sold her own necklace to get it. SAL: Then it's a sad story. FRANCESCA: It's a sad story with a felony in it.
[beat 8] Sal slides one hand beneath the counter. Francesca's own hand goes to her coat.
[beat 9] SAL: You're brave, coming in here alone. FRANCESCA: I'm not alone. SAL: Who's with you?
[beat 10] She nods toward the cracked glass behind him. Through the algae, shapes move in the dark, a dozen uniforms. SAL: Eel's finally out of the water.

### SCENE s00341 | INT. BELL TOWER OBSERVATION POST - DAWN
Characters: MBEKI, ARNAUD, HOSSEINI, MAJOR TULLY
[beat 0] A narrow stone chamber under the bells. Sandbags in the arched window. Mist below. SGT. MBEKI, forties, binoculars up, kneels at the window. PVT. ARNAUD, nineteen, clutches a rifle. CPL. HOSSEINI, thirties, sits against the wall working a field radio.
[beat 1] They are silent. He adjusts the dial. He lowers the binoculars. Arnaud's knuckles go white.
[beat 2] MAJOR TULLY: Bell Tower, this is Command. Status report. Over. MBEKI: Tell him nothing moves. HOSSEINI: Command, Bell Tower. Nothing moves. Over. MAJOR TULLY: Keep it that way. Over.
[beat 3] Hosseini sets down the handset.
[beat 4] Below, in the fog, something metal clinks. Mbeki holds up a flat hand. Arnaud's rifle trembles. Hosseini slides the radio away from the wall.
[beat 5] ARNAUD: Sergeant. It's coming from the church. MBEKI: It's the church that's ours.
[beat 6] A single bell above them swings and sounds, once, deep and sudden.

### SCENE s00342 | EXT. BOCCE COURT UNDER HIGHWAY OVERPASS - DAY
Characters: NONNA FILOMENA, BIG WALT, DARIUS
[beat 0] A strip of crushed oyster shell beneath concrete pillars. Traffic thunders overhead. Folding chairs line the court. A thermos of espresso sits on an overturned crate. NONNA FILOMENA, eighties, in a black dress and sensible shoes, squints at the pallino. BIG WALT, fifties, her opponent, a trucker in a leather vest, crouches with a ball cradled in his palm. DARIUS, fifteen, Walt's nephew, holds the measuring string and a notebook.
[beat 1] She straightens, shifts her weight, and sends her ball down the shell with a sharp flick of the wrist while he lobs his in a high arc, and the two collide mid-court in a crack that scatters dust, and the pallino rolls under a chair where Darius scrambles after it on his knees.
[beat 2] NONNA FILOMENA: That's mine. BIG WALT: That's a tie. DARIUS: It's closer to the chair.
[beat 3] NONNA FILOMENA: Darius, measure! BIG WALT: Don't measure, Darius. DARIUS: I'm measuring.
[beat 4] NONNA FILOMENA: Walt, you cheat. BIG WALT: Nonna, I've never cheated in my life.
[beat 5] DARIUS: It's four inches. NONNA FILOMENA: Four inches for who? BIG WALT: For me, obviously. DARIUS: For her.
[beat 6] Walt looks at Darius. Darius looks at Nonna. She lifts the thermos, takes one sip, and offers it to Walt.

### SCENE s00343 | INT. HALL OF MIRRORS - OFF-SEASON FAIRGROUND - NIGHT
Characters: CORINNE DUBOIS-ADEYEMI, ARTIE, PLUMLEY
[beat 0] A canvas-walled maze of warped glass. Half the bulbs are dead. Dust coats every frame. The mirrors turn the dark into a hundred darks. CORINNE DUBOIS-ADEYEMI, thirties, a paranormal investigator in a leather jacket, walks slowly down a corridor with a handheld lamp, her reflection stretching tall, then squat, then tall again. ARTHUR "ARTIE" PLUMLEY, seventies, the fairground's last attendant, shuffles behind her in a patched coat, a ring of keys swinging at his hip.
[beat 1] CORINNE: Artie, you said the last visitor left in 1987. ARTIE: So I did. CORINNE: Then who is the person in the third mirror? ARTIE: Miss Dubois-Adeyemi, I wouldn't look.
[beat 2] She looks. Her reflection waves, but she hasn't moved.
[beat 3] CORINNE: Artie. ARTIE: Yes, miss. CORINNE: Is that me? ARTIE: It was. For a while.
[beat 4] She steps back. Her reflection steps forward. The glass ripples like water.
[beat 5] CORINNE: Artie, open the door. ARTIE: There's no door, miss. There's only the way you came. CORINNE: Then take me back. ARTIE: I'd love to. But I've been looking for the way out since the summer of '87.
[beat 6] She turns. Behind her, in every mirror, Artie stands younger, smiling, and a hundred reflections of her are walking away.
[beat 7] CORINNE: Artie, what did you do? ARTIE: I stayed too long, miss. Same as you.
[beat 8] The lamp gutters out.

### SCENE s00344 | EXT. GLACIER CREVASSE - DAY
Characters: INGRID HALVORSEN, SOLANGE RENARD, DAG
[beat 0] A blue slot in the ice, forty feet deep, walls ribbed like the inside of a throat. Wind whistles across the lip. INGRID HALVORSEN, forties, a mountaineer in a red jacket, dangles from a rope at the crevasse edge, kicking for purchase. SOLANGE RENARD, thirties, her partner, lies flat on the ice above, the rope wrapped around her gloves. DAG, fifties, their guide, plants an ice axe a few feet back and hauls on the line.
[beat 1] SOLANGE: I've got you! INGRID: You don't! SOLANGE: She's slipping, Dag! DAG: Both of you, shut up and haul.
[beat 2] Ingrid swings her boot at the wall. The ice bites. She hangs, breathing.
[beat 3] INGRID: Tell me when she's got the axe in. DAG: Axe is in.
[beat 4] Solange pulls. Ingrid rises one foot, then two. She grabs the lip with a gloved hand. She looks up at Solange. She looks at Dag.
[beat 5] INGRID: Pull. They pull.
[beat 6] She crawls onto the ice, gasping. Nobody speaks. Dag unwraps the rope from Solange's hands, finger by finger.

### SCENE s00345 | EXT. FLOODED RICE PADDY DIKE - DAWN
Characters: HARGREAVE, DOC, BIANCHI, LIN TRAN, OKAFOR
[beat 0] A narrow earthen dike cuts across a drowned paddy, mist lying on the water like a sheet. A single banyan tree stands at the far end. Distant mortar thuds roll across the flat. LT. HARGREAVE, thirties, a young officer with a map case, crouches at the dike's edge. SGT. "DOC" BIANCHI, forties, a medic with a red-cross satchel, crouches beside him. PVT. LIN TRAN, twenty, a scout, lies prone in the mud at the lead. CPL. OKAFOR, thirties, the radioman, hunkers behind them with the set on his back, the antenna bending as he twists to look behind.
[beat 1] HARGREAVE: Doc, keep it down. DOC: I am down, Lieutenant. I'm lying in a rice paddy.
[beat 2] LIN: Contact, left.
[beat 3] Hargreave lifts his head, Doc grabs the satchel, Okafor drops the handset, and all four of them flatten as a burst of fire stitches the water twenty feet away and sends up silver fans.
[beat 4] HARGREAVE: Okafor, call it in. OKAFOR: Sir, I can't call it in. They're listening. HARGREAVE: Then talk in code.
[beat 5] DOC: What code? OKAFOR: The cornflakes code. HARGREAVE: OKAFOR, do not say cornflakes. OKAFOR: Sir, cornflakes is the code! DOC: Gentlemen, I would like to survive the morning.
[beat 6] LIN: They're moving.
[beat 7] Hargreave raises a hand. Lin crawls back, drags the radio, thumbs the key twice. Static pops. A voice crackles, faint.
[beat 8] HARGREAVE: Everyone on me. We go in three. DOC: Three what? HARGREAVE: Three, Doc.
[beat 9] They rise as one, bent double, and splash down the dike toward the banyan with the fog swallowing them, all four of them running.

### SCENE s00346 | INT. NIGHT-MARKET FISH STALL WALK-IN FREEZER - NIGHT
Characters: VIVIAN CHOW, MARCUS DELACROIX-OYELARAN, TWO-TONE EDDIE, HANNAH PRZYBYLSKI, ZHAO
[beat 0] A steel freezer behind a night-market fish stall. Frost on every surface. Hanging carcasses of tuna sway slightly in the cold, their eyes sealed with ice. A single light panel hums. The air tastes of salt and metal.
[beat 1] VIVIAN CHOW, fifties, the stall owner, in a white rubber apron and gloves, stands with her back to a rack of frozen squid. Her face betrays nothing. MARCUS DELACROIX-OYELARAN, forties, a loan collector in a long wool coat, stands directly in front of her, hands in his pockets. His breath smokes. TWO-TONE EDDIE, thirties, his driver, a heavy man with a bleached streak in his hair, leans against the door, arms folded. HANNAH PRZYBYLSKI, twenties, Vivian's niece, holds a tray of ice with trembling fingers, trying to look busy. OLD MR. ZHAO, seventies, sits on an upturned crate in the corner with a cigarette he has not lit, watching.
[beat 2] MARCUS: Forty thousand, Mrs. Chow. VIVIAN: I know the number. MARCUS: The number has been the number for six months. VIVIAN: The number is not on my table.
[beat 3] Eddie shifts his weight against the door. The metal creaks. Hannah's tray rattles. Zhao rolls the cigarette between his fingers.
[beat 4] MARCUS: Then where is it? VIVIAN: In the fish. MARCUS: In the fish.
[beat 5] VIVIAN: Every night, a little. In the bellies. You pay a man to carry it off the pier and nobody looks inside a tuna. MARCUS: Clever. VIVIAN: Thirty-one years in this trade.
[beat 6] He steps closer. Hannah backs up a pace and the tray tilts. A few cubes slide off and shatter on the floor. Nobody turns.
[beat 7] MARCUS: Show me.
[beat 8] Vivian picks up a long steel knife from the rack. Eddie straightens. Zhao lights his cigarette at last, the flame small and orange in all that white.
[beat 9] VIVIAN: Which one would you like? MARCUS: Surprise me.
[beat 10] She walks along the line of tuna, touches one with the flat of her blade, then another. She stops at the last. She makes one long cut.
[beat 11] Something falls out onto the ice, wrapped in oilcloth. HANNAH: Auntie. VIVIAN: Hold the tray steady, child.
[beat 12] Marcus crouches, unwraps the oilcloth with two fingers. Inside is a thick bundle of cash and a small black notebook. He flips the notebook open. He reads a line. He reads another.
[beat 13] His jaw tightens.
[beat 14] MARCUS: This is not my money. VIVIAN: No. MARCUS: This is a list. VIVIAN: It is a list of every man your boss pays to look the other way. The names. The dates. Every Tuesday.
[beat 15] Eddie takes his hand off the door. EDDIE: Marcus. MARCUS: Not now. EDDIE: Marcus, that's my cousin on page two. MARCUS: I said not now.
[beat 16] ZHAO: The market is closing. Everybody leave.
[beat 17] Nobody moves. The tuna sway. The light hums.
[beat 18] Vivian wipes her blade clean on her apron, once, twice, and slides it back into the rack.
[beat 19] VIVIAN: You may keep the money. The book stays with me. MARCUS: And if I refuse? VIVIAN: Then you will tell your boss you walked into a freezer with a list of his friends and walked out without it.
[beat 20] Marcus closes the notebook. He holds it a long moment. He lays it back on the ice, carefully, as if it might wake.
[beat 21] MARCUS: Eddie, the door. Eddie opens it. Warm night air rolls in, loud with frying oil and distant music.
[beat 22] Marcus pockets the cash and goes out without looking back. Eddie follows.
[beat 23] The door swings shut. Hannah lets the tray fall.
[beat 24] HANNAH: Auntie, you were so calm. VIVIAN: I was so cold.
[beat 25] Zhao exhales a long plume of smoke. Vivian picks up the notebook and tucks it in her apron pocket.

### SCENE s00347 | INT. GRAIN ELEVATOR - NIGHT
Characters: CALEB WRIGHT, AMARA OKORO, DEACON PRICE, LIV HAGEN, PEPPER NAKAMURA
[beat 0] A concrete tower, nine stories tall, hollow as a throat. A rusted catwalk spirals up the inside wall. Chutes hang like dead tongues. Wind through broken louvres makes a sound like breathing. CALEB WRIGHT, thirties, a tow-truck driver, leads with a flashlight. AMARA OKORO, thirties, his girlfriend, follows with a phone. DEACON PRICE, sixties, a retired farmhand, carries a lantern. LIV HAGEN, twenties, a student, clutches a camera. PEPPER NAKAMURA, forties, a county sheriff's deputy, brings up the rear with a hand on her holster.
[beat 1] CALEB: Stay on the catwalk. AMARA: It's moving. DEACON: That's just the wind, son. LIV: Wind doesn't whisper. PEPPER: Everybody quiet.
[beat 2] They stop. Something below clatters. Grain trickles from a chute and hisses across the floor though the silo has been empty for twenty years.
[beat 3] AMARA: Caleb. CALEB: I see it. DEACON: Back up, all of you.
[beat 4] LIV: Did somebody say my name? PEPPER: Nobody said your name. LIV: Somebody did.
[beat 5] Deacon holds up the lantern. The flame leans toward the dark at the bottom of the tower. Caleb sweeps his beam across the floor. Piles of grain stir like sleepers.
[beat 6] AMARA: It's pulling the grain. CALEB: Pulling it where? DEACON: Toward the hatch. PEPPER: What hatch? DEACON: The one under the scale house.
[beat 7] They all look. A black square gapes in the concrete, ringed with old stains. A cold breath rises.
[beat 8] LIV: Deputy, shouldn't you call somebody? PEPPER: No signal. AMARA: Mine neither.
[beat 9] CALEB: Then we leave. Now.
[beat 10] He turns and starts up the catwalk. The others follow.
[beat 11] Behind them, the grain heaves up in a wave and breaks against the wall. DEACON: Run.
[beat 12] They scramble up the spiral, boots ringing on the iron, the catwalk shaking. Liv drops her camera. Amara grabs her sleeve. Pepper draws and fires once into the dark, the shot huge, and nothing answers.
[beat 13] CALEB: Keep climbing!
[beat 14] The door at the top is chained. He hits it with his shoulder. It does not give.
[beat 15] Pepper puts her pistol against the lock and fires. The chain falls. The door bursts open on a starry night.
[beat 16] They pour out onto the roof. Deacon slams the door and braces his back against it.
[beat 17] DEACON: Is everyone here? LIV: Five.
[beat 18] AMARA: Four. Where's Pepper?
[beat 19] They turn. The door buckles from below, once, twice. Something presses a hand against the inside of the steel. The metal bulges in the shape of fingers.
[beat 20] PEPPER: Don't open it. AMARA: Pepper! PEPPER: Don't open it. I'm not the one knocking.

### SCENE s00348 | INT. PARKING GARAGE TICKET BOOTH - NIGHT
Characters: OWEN BRZEZINSKI, WOMAN, MAN
[beat 0] A glass cubicle at the exit of a nearly empty garage. Fluorescent hum. The barrier arm hangs half lowered.
[beat 1] OWEN BRZEZINSKI, fifties, the attendant, sits behind the glass with a crossword. A hooded WOMAN, thirties, stands at the booth window. A tall MAN, forties, waits behind her in a long coat, leaning on the pillar.
[beat 2] The woman slides a ticket under the glass. Owen reads the stamp and frowns.
[beat 3] OWEN: This ticket is from 1998. WOMAN: I know. OWEN: That's twenty-six years. The fee is, uh, nine thousand dollars. WOMAN: I'll pay in cash.
[beat 4] She opens her bag. The man steps closer. Owen's hand slides toward a button under the counter.
[beat 5] MAN: Don't. OWEN: Sir, I'm just the attendant. WOMAN: He's not talking to you.
[beat 6] She pulls out not money but a small silver key and presses it to the glass. Owen reads the number etched on it. His face drains.
[beat 7] OWEN: Where did you get that? WOMAN: From the car you parked here that night.
[beat 8] The man lunges for the booth door. Owen hits the button. An alarm screams. The woman and the man collide against the glass, shoving, grappling for the key, and both crash into the barrier arm, which snaps.
[beat 9] OWEN: Police! Parking Garage C!
[beat 10] The key skids across the concrete. Owen vaults the counter, scoops it up, and holds it high. The man and the woman freeze, breathing hard.
[beat 11] Sirens approach, faint, then not so faint.
[beat 12] MAN: Give it to me. OWEN: No. WOMAN: Give it to me, Owen.
[beat 13] OWEN: How do you know my name?
[beat 14] She pulls back her hood. A face he hasn't seen in twenty-six years. OWEN: Margaret.

### SCENE s00349 | INT. PIANO RESTORATION WORKSHOP - DAY
Characters: NOELLE FAIRCHILD, DELPHINE ARCHAMBAULT, LEO FINCH
[beat 0] A high-ceilinged loft with north light. Disemboweled pianos stand open on every side, their strings like harps, their hammers laid out on felt cloths in long neat rows. Sawdust and varnish and old ivory.
[beat 1] NOELLE FAIRCHILD, fifties, the restorer, in a leather apron and reading glasses pushed up into grey curls, bends over a half-dismantled Steinway, a tuning lever in her fist. DELPHINE ARCHAMBAULT, thirties, her apprentice, stands across the keybed holding a cloth, the curve of her jaw set hard. LEO FINCH, sixties, the piano's owner, in a rumpled tweed jacket, sits on a bench by the window watching them both, a cane across his knees.
[beat 2] NOELLE: Delphine, the damper felt. DELPHINE: Which side? NOELLE: The left. The one that's flat.
[beat 3] Delphine hands her the felt. She does not let go at once. Noelle gives it one sharp tug, and Delphine lets go, and neither looks at the other, and Leo studies the dust in the light.
[beat 4] LEO: You two have been at this since September. NOELLE: Fourteen weeks. DELPHINE: Fifteen.
[beat 5] LEO: It was my wife's piano. She played it every morning for forty years. NOELLE: I know. LEO: Delphine knows too. She came to the funeral. DELPHINE: I did.
[beat 6] Noelle sets down the lever. She straightens slowly, one hand on the small of her back, and looks at Delphine for the first time in the scene. Delphine meets her gaze and does not blink.
[beat 7] NOELLE: She wanted the middle C re-voiced. LEO: Who did? NOELLE: She did. Your wife.
[beat 8] DELPHINE: She told me. She told me last spring, the day I started. NOELLE: She told you. DELPHINE: She didn't want to hurt you.
[beat 9] Leo gets up. The cane rattles on the floor. He crosses to the keyboard and presses middle C. A flat, dull note.
[beat 10] LEO: Hurt me how? DELPHINE: She said it had been out of tune for years and she played it anyway because you loved it.
[beat 11] Leo presses it again, harder. The note thuds and dies. He keeps his finger on the key. His shoulders bend.
[beat 12] NOELLE: Leo. LEO: She never said. NOELLE: She never would.
[beat 13] He lifts his hand. Delphine steps forward as if to touch his arm and stops.
[beat 14] Noelle takes up the tuning lever and sets it against the pin, and nods once at Delphine, and Delphine nods back, and together they begin, slowly, to bring the note home.

### SCENE s00350 | INT. COLLAPSED MINE ELEVATOR CAGE - NIGHT
Characters: DEZ, HOLLOWAY, ARCHIE PENHALIGON
[beat 0] A steel cage wedged in a vertical shaft, tilted twenty degrees, hanging by a single frayed cable. Pebbles tick down from above. A dim headlamp illuminates two men and a bucket of water. DESMOND "DEZ" HOLLOWAY, forties, a foreman with a broken arm in a makeshift sling, sits against the bars. ARCHIE PENHALIGON, twenties, a fresh-faced miner with a bleeding scalp, crouches on the opposite side, rope looped round his wrist.
[beat 1] DEZ: Archie, kid, how's your head? ARCHIE: It's fine, Dez. DEZ: It's not fine. I can see it from here. ARCHIE: Then don't look.
[beat 2] Dez shifts. The cage groans. The cable above pings like a plucked string. Both men go perfectly still.
[beat 3] DEZ: Don't breathe. ARCHIE: I'm not breathing. DEZ: Good man.
[beat 4] They hold. The cage settles. Dez lets out a ragged breath. DEZ: Okay. Okay. We're okay.
[beat 5] ARCHIE: Dez, how long have we been down here? DEZ: Nine hours. ARCHIE: They'd have come by now. DEZ: They'll come.
[beat 6] ARCHIE: Dez. Nobody's coming.
[beat 7] Dez does not answer. He looks at his arm. He looks at the water bucket. He looks at Archie.
[beat 8] DEZ: Archie, you're the lightest. If you climb the cable, you can reach the ladder. ARCHIE: Climb it? DEZ: It's twenty feet. You've done worse. ARCHIE: I've never done worse. DEZ: Archie.
[beat 9] ARCHIE: He'll cut me loose, Dez. The cable. It won't take two. DEZ: Then it won't take one either. It'll take whatever it takes.
[beat 10] Archie loops the rope around his waist. He tests the knot. His hands shake.
[beat 11] ARCHIE: Hold the rope. DEZ: I've got you.
[beat 12] He rises. Dez wraps the rope around his good arm. Archie reaches for the cable, grips it, lifts one boot. The cage swings. DEZ: Easy! Easy, kid! ARCHIE: I'm easy!
[beat 13] He climbs. Three feet. Five.
[beat 14] The cable twangs. A strand parts, then another, curling like wire hair. Dez cries out. Archie stops.
[beat 15] ARCHIE: Dez, it's going! DEZ: Keep climbing! ARCHIE: It's going, Dez! DEZ: Do not stop, Archie! Do not stop!
[beat 16] Archie lunges. His fingers catch a rung.
[beat 17] The cage drops six inches with a scream of metal. Dez is flung against the bars. The rope snaps taut on his arm and he roars through his teeth.
[beat 18] DEZ: Go! Go!
[beat 19] Archie pulls himself onto the ladder. He turns, hanging there, breathing like a bellows, and stares down at Dez. ARCHIE: I'm on, Dez. I'm on! DEZ: Of course you are.
[beat 20] The cable parts with a crack like a gunshot. The cage falls away into the dark and its crash echoes up the shaft, long after it has gone.
[beat 21] ARCHIE: Dez? Nothing.
[beat 22] Then, from impossibly far below, a faint voice. DEZ: Climb, Archie.

### SCENE s00351 | EXT. SANDBAR - ESTUARY FERRY - DAY
Characters: CAPTAIN MIRIAM OKAFOR-LINDQVIST, DENNIS ABERNATHY, FATIMA HADDAD, CHILD'S FATHER, TOMASZ NOWAK, OLD PETRONELLA, JASPER
[beat 0] A small vehicle ferry grounded on a mile of shining sandbar. The tide has gone out and left her heeled over, her ramp resting on mud. Gulls stalk the wet. Heat shimmers on the water's far edge.
[beat 1] CAPTAIN MIRIAM OKAFOR-LINDQVIST, fifties, sits on the ramp, her cap beside her. DENNIS ABERNATHY, forties, a salesman in a ruined suit, stands at the rail holding his shoes. FATIMA HADDAD, thirties, a nurse, kneels beside a child asleep on a coat. CHILD'S FATHER, TOMASZ NOWAK, thirties, sits by her with his hand on the child's back. OLD PETRONELLA, eighties, sits on a bollard knitting. JASPER, twenties, the engineer, stands at the engine hatch, wiping his hands on a rag.
[beat 2] Miriam checks her watch. She checks it again. She puts it away. Dennis watches her do this and says nothing.
[beat 3] DENNIS: How long till the tide comes back? MIRIAM: Six hours. Maybe seven.
[beat 4] Dennis nods. He sets his shoes on the rail, lines them up, takes them down again. Fatima tucks the coat tighter around the child's shoulders. Tomasz watches her hands.
[beat 5] Petronella's needles click. Jasper climbs from the hatch and stands, looking out at the sandbar, at the bright far line of the sea. He rolls his sleeves to the elbow. He rolls them down.
[beat 6] JASPER: Engine's fine. MIRIAM: I know. JASPER: It's the tide that's the problem. MIRIAM: I know.
[beat 7] Fatima rises and walks to the water jug. She pours a cup, brings it back to Tomasz. He takes it. He drinks half and gives the rest to the child, who stirs and sips without waking. Dennis turns his face to the sky as if looking for rain.
[beat 8] DENNIS: We could walk. MIRIAM: No. DENNIS: It's only a mile. MIRIAM: The channel is deeper than it looks.
[beat 9] Dennis shrugs. He sits on the rail. Petronella's needles click twice and stop. She holds up her knitting to the light and examines it, turns it over, resumes.
[beat 10] TOMASZ: Is there more water? JASPER: Two jugs. TOMASZ: Then there is enough.
[beat 11] Nobody argues. Gulls cry overhead.
[beat 12] Out on the flat, a line of ripples begins to form, very slowly, a long way off. Miriam sees it first. She keeps her face still. She picks up her cap and puts it on. She says nothing to anyone, and one by one the others notice her, and notice what she is looking at, and sit very straight and quiet to wait.
[beat 13] FATIMA: Is that the tide? MIRIAM: That is the tide.
[beat 14] Fatima touches the child's hair. Tomasz closes his eyes. Dennis sets his shoes down, side by side, with care. Jasper wipes his hands on the rag one more time, unhurried, and folds it, and puts it in his pocket.

### SCENE s00352 | INT. FAMILY HARDWARE STORE - AFTER HOURS - NIGHT
Characters: ROSE LINDQVIST, HENRY LINDQVIST, MARGO LINDQVIST-BYRNE, DANNY LINDQVIST, UNCLE FRITZ
[beat 0] A narrow hardware store, aisles crowded floor to ceiling with bins of nails, rope, washers, paint cans. A single bulb hangs over the register. A cardboard sign taped to the door reads: "CLOSED. FOREVER?" ROSE LINDQVIST, sixties, the widow, sits on a stool at the register, a cigar box open in front of her. HENRY LINDQVIST, forties, her eldest, in a suit, paces the center aisle. MARGO LINDQVIST-BYRNE, thirties, her daughter, leans against the paint counter with her arms crossed. DANNY LINDQVIST, twenty-five, her youngest, sits on an upturned bucket by the door. UNCLE FRITZ, seventies, Rose's brother-in-law, polishes a hammer with a rag, saying nothing.
[beat 1] HENRY: Mom, the offer expires Friday. ROSE: I know when Friday is.
[beat 2] MARGO: Henry, can you sit down? HENRY: I'm trying to help. MARGO: You're trying to pace.
[beat 3] HENRY: Danny, tell her. DANNY: Tell her what? HENRY: That fourteen hundred square feet next to a Whole Foods is worth three times what this place makes. DANNY: I don't know, Henry. HENRY: You don't know. DANNY: It's Dad's store.
[beat 4] HENRY: Dad's dead, Danny.
[beat 5] Silence. Fritz stops polishing. Margo uncrosses her arms. Rose closes the cigar box with a small click.
[beat 6] ROSE: Say that again. HENRY: Mom, I didn't mean... ROSE: Say it again, Henry. To my face.
[beat 7] Henry stops in the middle of the aisle. He opens his mouth. He closes it.
[beat 8] MARGO: Mom. ROSE: Quiet, Margo.
[beat 9] Danny stands. The bucket tips and clatters.
[beat 10] Henry spins toward the sound, his sleeve catching a display of screwdrivers, and a hundred handles hit the floor, rolling.
[beat 11] HENRY: Great. Fantastic. DANNY: I've got it. HENRY: Leave it, Danny! DANNY: I said I've got it!
[beat 12] He drops to his knees and gathers the screwdrivers. Margo kneels beside him. Henry stands with his hands open at his sides. Fritz sets down the hammer, picks up a broom, and begins to sweep, slow and steady.
[beat 13] ROSE: Your father kept the books in this box.
[beat 14] She lifts the lid. Inside are index cards, hundreds of them, in neat blue ink.
[beat 15] ROSE: Every customer who ever couldn't pay. Every tab he let ride. Forty years. MARGO: Mom, I never knew. ROSE: Nobody did. That's the thing about your father. He never wanted to be thanked.
[beat 16] HENRY: How much is owed? ROSE: I haven't counted. I think it's more than the Whole Foods offer.
[beat 17] Henry laughs once, a helpless sound. He sits down on the floor in the middle of the screwdrivers.
[beat 18] HENRY: Uncle Fritz, did you know? FRITZ: I wrote half those cards.
[beat 19] DANNY: We're not selling. HENRY: Danny. DANNY: We're not selling it, Henry. MARGO: No.
[beat 20] HENRY: Then we run it. All four of us. Like he did. ROSE: Five.
[beat 21] She nods at Fritz. He lifts the broom in salute. Henry crosses to the register and takes the cigar box in both hands, and Rose lets him.

### SCENE s00353 | INT. FUNERAL PARLOR SPEAKEASY - 1927 - NIGHT
Characters: MAGDA, FOSTER, LENNY, ODETTE, PIANIST, MAN, DIRECTOR, WHITCOMB
[beat 0] Velvet drapes, casket stands doubling as bars. A jazz trio plays muted.
[beat 1] MAGDA, thirties, a bartender, pours gin into teacups. FOSTER, forties, a bootlegger, counts bills. LENNY, twenties, his nephew, dozes in a coffin cushion. ODETTE, twenties, a singer, sips at the piano. THE PIANIST, sixties, plays on.
[beat 2] A MAN, fifties, in a black frock coat and a funeral director's pin, steps in from the foyer.
[beat 3] MAGDA: Fosse's here. She sets down the bottle. He surveys the room. Foster pockets his cash.
[beat 4] DIRECTOR: Evening. I run this establishment. FOSTER: We've been paying your rent.
[beat 5] DIRECTOR: I'm told that was not rent. I am Mr. Whitcomb. WHITCOMB: And I'd like my casket stands back.
[beat 6] Lenny wakes. He rolls out of the cushion. Odette stops singing. The pianist plays one wrong note and stops.

### SCENE s00354 | EXT. STAGECOACH STOP BUILT AROUND A DRY WELL - DUSK
Characters: SILAS MCALLISTER, WIDOW HARGROVE, REVEREND TOBIAS CRANE, BLACKBIRD, TALLCHIEF, YOUNG WOMAN, DEPUTY LIAM FINNEGAN, ELEANOR
[beat 0] A whitewashed adobe station squatting on a plain the color of old bone. At its center, ringed by a low stone wall, a dry well yawns black and deep. A cottonwood, long dead, throws a bony shadow across the porch. Wind pushes a tumbleweed in slow circles around the well.
[beat 1] SILAS MCALLISTER, fifties, the station keeper, stands on the porch in a faded blue shirt, a rag hanging from his belt, a shotgun leaning against the post. His face has been burned by thirty summers into something like leather. He watches the road.
[beat 2] WIDOW HARGROVE, sixties, steps down from the idle stagecoach in black crepe and a veil she lifts to look at the sky, her mouth set tight. She carries a carpetbag that clinks.
[beat 3] REVEREND TOBIAS CRANE, forties, follows her, thin as a rake, Bible clutched to his chest. His collar is yellow with dust.
[beat 4] JACK "BLACKBIRD" TALLCHIEF, thirties, the stage driver, a lean Cherokee man in a flat-brimmed hat, climbs down last and stretches his back, one hand on the wheel hub. He says nothing. His eyes go to the well.
[beat 5] A YOUNG WOMAN, twenty, in a gray traveling dress, remains seated in the coach. She does not move. Her eyes are fixed on the porch. Her hands are in her lap, bound by a length of leather cord.
[beat 6] DEPUTY LIAM FINNEGAN, thirties, rides up on a sweating bay, dismounts, loops the reins, and walks stiffly to the coach door, one hand on his holster. He is the woman's escort. He has not slept in two days.
[beat 7] SILAS: Water's gone, folks. I'll not lie to you. WIDOW HARGROVE: How gone? SILAS: Gone since June. Well's dry as a Methodist's Sunday. REVEREND CRANE: Lord deliver us from jests.
[beat 8] FINNEGAN: Station keeper, I need a room with a lock on the door. SILAS: Got one. Back of the kitchen. No window. FINNEGAN: That'll do.
[beat 9] BLACKBIRD: She hasn't said a word since Dry Fork. FINNEGAN: She won't.
[beat 10] Blackbird crosses to the well and looks over the stone lip. He kneels and picks up a pebble and drops it. Nobody breathes.
[beat 11] A long second later, from deep down, comes a small, dry click. BLACKBIRD: Forty feet. Maybe fifty.
[beat 12] WIDOW HARGROVE: Mr. McAllister, I paid for a bed and a bath. SILAS: Ma'am, you'll get the bed. WIDOW HARGROVE: And the bath? SILAS: You can have the whole well, if you can find the water.
[beat 13] The Young Woman turns her head, very slowly, and looks at the well. Finnegan sees this. He steps in front of the coach door to block her view.
[beat 14] FINNEGAN: Everybody inside. We stay the night, we leave at first light.
[beat 15] REVEREND CRANE: Deputy, is she a danger to us? FINNEGAN: She's a danger to herself. REVEREND CRANE: The devil has many faces. FINNEGAN: This one's twenty and scared, Reverend.
[beat 16] The Young Woman looks at him now. For the first time, she speaks, in a voice dry as paper. YOUNG WOMAN: Sir.
[beat 17] Finnegan freezes.
[beat 18] YOUNG WOMAN: My name is Eleanor Voss. I would like you to say it. Just once. Before we go in. FINNEGAN: Miss Voss. ELEANOR: Thank you.
[beat 19] She steps down from the coach on her own, hands still tied, and walks toward the porch. She passes the well. She does not look at it. She passes Blackbird, who takes off his hat. She passes the Widow, who draws her veil. She passes Reverend Crane, who clutches his Bible tighter.
[beat 20] At the porch she stops in front of Silas. ELEANOR: The room with no window. SILAS: This way, miss.
[beat 21] Silas opens the door. Eleanor goes in. Finnegan follows, and shuts it.
[beat 22] BLACKBIRD: That wind's gone quiet. SILAS: So it has.
[beat 23] The tumbleweed stops circling. The cottonwood shadow lengthens across the porch. From deep in the well, softly, comes the sound of water, running.
[beat 24] WIDOW HARGROVE: Do you hear that? REVEREND CRANE: Dear God. It was never dry.
[beat 25] Silas lifts the shotgun. Blackbird crouches at the stone wall. The water rises, rises, a silver glimmer in the black, and the sound grows into a hollow, hungry roar.

### SCENE s00355 | INT. CRUISE SHIP CALL CENTER - DAY
Characters: CUSTOMER DELIGHT AHOY, BARB, GREG, TRISH, OMAR, NIKOLAI, THE AUDITOR
[beat 0] Cubicles bolted to the deck of a cruise ship. Portholes show open sea. A banner: "CUSTOMER DELIGHT AHOY." BARB, forties, supervisor, paces. GREG, thirties, wears a headset. TRISH, twenties, files her nails. OMAR, fifties, stares at a screen. NIKOLAI, twenties, mops the floor. A figure in a tie sits at the end desk, introduced only as THE AUDITOR.
[beat 1] BARB: Greg, your call time is nine minutes. GREG: It's the sea, Barb. Signal drifts.
[beat 2] TRISH: Barb, how do I unmute? BARB: Trish, you're not muted.
[beat 3] CUSTOMER: Hello? Is this the help line? My cabin is on fire. GREG: Please hold. Your call is important.
[beat 4] The Auditor stands. He strides to Barb.
[beat 5] THE AUDITOR: Barbara Finch? BARB: It's Barb. AUDITOR: It is now "Ms. Finch, Director of Delight."
[beat 6] BARB: I got promoted. OMAR: Of course she did.
[beat 7] Nikolai drops the mop. The ship lurches. Greg pulls off his headset.
[beat 8] GREG: Barb? About that fire.

### SCENE s00356 | INT. OPEN-PLAN OFFICE - FOURTH FLOOR - DAY
Characters: PRIYANKA, WENDELL, LUCIA, HAROLD, TALL MAN, PHONE, MR. GRAVES
[beat 0] Cubicles. Beige. A ficus dying with dignity. PRIYANKA, thirties, presses a stapler into the carpet. WENDELL, fifties, stares at an empty slide. LUCIA, twenties, hides behind a monitor. HAROLD, sixties, sleeps upright.
[beat 1] A TALL MAN, forties, stands unannounced at the end of the aisle, a clipboard under his arm.
[beat 2] PRIYANKA: Who is that? WENDELL: Consultant.
[beat 3] The Tall Man walks to Wendell's desk. He places his clipboard down. Wendell does not look up. Lucia slides lower.
[beat 4] TALL MAN: Efficiency review. WENDELL: Of course.
[beat 5] PHONE: Wendell, this is the CEO. Is the review underway? WENDELL: It's underway, sir.
[beat 6] The Tall Man takes out a pen. Harold snores. Priyanka drops the stapler and it echoes.
[beat 7] Lucia peeks over the edge of her monitor and meets the Tall Man's eyes.
[beat 8] MR. GRAVES: You. Name? LUCIA: Lucia. MR. GRAVES: Redundant.
[beat 9] Lucia stands. She picks up her coat. Priyanka rises, Wendell rises, Harold wakes with a start, and all four stare as Mr. Graves strikes off a line on his clipboard.

### SCENE s00357 | INT. WRESTLING GYM - EMPTY LOCKER ROOM - NIGHT
Characters: COACH ODETTE BRANNIGAN
[beat 0] A concrete locker room beneath a high school gym. Rows of dented lockers. A long bench. A whiteboard with half-erased plays. Fluorescent tubes buzz. A cheap phone sits on the bench, facedown, silent.
[beat 1] No one is here. Rain drums on the roof above.
[beat 2] Then footsteps on the stairs.
[beat 3] COACH ODETTE BRANNIGAN, fifties, enters, shaking water from a whistle lanyard. She wears a windbreaker with the school's faded crest. She is soaked and she doesn't care. She crosses to the bench, picks up the phone, studies it, sets it down.
[beat 4] The phone buzzes. She looks at the screen. She does not answer. It goes to voicemail.
[beat 5] A recorded voice fills the room. COACH ODETTE: Hey, Odette. It's you. It's me. Yesterday you. Listen, you're going to want to quit tonight. ODETTE: Don't. COACH ODETTE: Don't say "don't." You always say "don't." Just listen.
[beat 6] She sits on the bench, elbows on knees.
[beat 7] ODETTE: Twenty-six years. Twenty-six years of whistles, of weigh-ins, of boys crying in showers. COACH ODETTE: Of boys crying in showers. ODETTE: And what do I get? A losing season. A board meeting. A letter. COACH ODETTE: The letter said "restructure." ODETTE: I know what it said. It said, "Thank you for your service, please clear your locker."
[beat 8] She stands, goes to a locker at the end of the row, spins the dial, opens it. It is full of ribbons, photographs, a dented trophy. She takes none of it.
[beat 9] ODETTE: Eleven state champions. Forty-four all-conference. One kid who made the Olympic trials and cried so hard he forgot his shoes. COACH ODETTE: He forgot his shoes, Odette. You drove them to Colorado. ODETTE: Shut up. COACH ODETTE: You drove eleven hours with a pair of shoes on the passenger seat. And he wrestled barefoot because they were the wrong size. ODETTE: He still won. COACH ODETTE: He still won.
[beat 10] She takes a deep breath. She closes the locker. She leans her forehead against it.
[beat 11] ODETTE: I'm tired. COACH ODETTE: I know. That's why you recorded this. So that I would say it to you when you were tired enough to hear.
[beat 12] ODETTE: What do I say to them? COACH ODETTE: Nothing. You just show up. Tomorrow at six. Same as always. Let the board send their letter. ODETTE: They'll fire me. COACH ODETTE: Probably. ODETTE: Then why? COACH ODETTE: Because the boys will be there at six. And they're waiting for you to say go.
[beat 13] A pause. The voicemail ends with a soft beep. Odette picks up the phone and holds it to her chest for a long moment. She lays it on the bench.
[beat 14] Then she goes to the whiteboard, picks up a marker, and writes in large block letters: "6 AM." ODETTE: Go.
[beat 15] She turns off the light.

### SCENE s00358 | EXT. FIELD BAKERY - ARMY CAMP - DAWN
Characters: MOLLY HENDERSON, REUBEN ALVAREZ, KIM SOO-JIN, ISAAC BERNSTEIN, TATUM, GENERAL'S AIDE
[beat 0] A canvas-roofed bakery tent in a muddy field. Brick ovens glow. Flour dusts the air. Beyond the tent flap, a line of tanks sleeps under camouflage netting. It is quiet, too quiet.
[beat 1] SGT. MOLLY HENDERSON, forties, a head baker with floury forearms, kneads dough at a steel table, humming. CPL. REUBEN ALVAREZ, twenties, shapes loaves beside her. PVT. KIM SOO-JIN, twenty, feeds the oven with split logs. CAPT. ISAAC BERNSTEIN, thirties, the camp quartermaster, leans on a crate eating a crust. PVT. WILLIAM "BILLY" TATUM, nineteen, sweeps flour into a pan.
[beat 2] Molly flips the dough, slaps it on the table, and calls out the count while Reuben rolls two loaves onto a peel and slides them into the oven, Soo-Jin ladling water over the bricks to make steam, and Isaac tears his crust in half and offers it to Billy, who takes it and chews with his broom in his other hand.
[beat 3] MOLLY: Forty loaves by six. REUBEN: Thirty-eight, Sarge. Two burned. MOLLY: Then forty by six-fifteen.
[beat 4] ISAAC: It's a fine morning for it. MOLLY: It's a fine morning, Captain.
[beat 5] A shadow passes over the tent flap. They don't notice. The humming resumes. Billy sweeps. Soo-Jin stokes the fire.
[beat 6] A GENERAL'S AIDE, thirties, in a crisp uniform, lifts the flap and steps in, carrying a telegram. He stands, scanning the faces. Molly looks up. Her hands go still.
[beat 7] AIDE: Sergeant Henderson? MOLLY: Speaking.
[beat 8] AIDE: The Captain is to report to Command at once. ISAAC: What for?
[beat 9] AIDE: The convoy's been turned back. The bridge at Sainte-Marie is gone.
[beat 10] The tent goes quiet. Reuben sets down the peel. Soo-Jin drops a log. Billy lets the broom fall. Isaac swallows the last of his crust. Molly wipes her hands on her apron one finger at a time.
[beat 11] MOLLY: Nobody panic. Forty loaves by six. ISAAC: Molly. MOLLY: Captain, men fight on bread.
[beat 12] He nods. He turns and follows the Aide out. The flap falls shut.
[beat 13] Reuben picks up the peel. Soo-Jin picks up a log. Billy picks up the broom.
[beat 14] Molly resumes kneading, slowly, harder than before, and the humming does not come back.

### SCENE s00359 | EXT. HOT-AIR BALLOON LAUNCH FIELD - BEFORE DAWN
Characters: JUNO ASHFORD, COLM BRADY, PHOEBE LINWOOD
[beat 0] A cold meadow under a lavender sky. Dozens of balloons lie limp on the dew, fans roaring, burners flaring orange against the dark. JUNO ASHFORD, thirties, a pilot in a quilted vest, checks the basket's rigging. COLM BRADY, thirties, her ground chief, holds the crown line. PHOEBE LINWOOD, thirties, a journalist, stands at the basket with a notebook, her scarf wrapped twice.
[beat 1] JUNO: Okay, everyone, burners on in two minutes.
[beat 2] Colm nods. He glances at Phoebe, then at Juno, then back at Phoebe. She smiles. He looks away fast.
[beat 3] PHOEBE: Is it always this cold? JUNO: Always. That's how you know it'll be worth it.
[beat 4] She takes Phoebe's hand and helps her over the wicker rim. Colm watches this with an expression he hides. He busies himself with a knot.
[beat 5] COLM: Idiot. Idiot. Idiot. JUNO: What was that? COLM: Nothing! Rigging.
[beat 6] The burner roars. The envelope swells. Phoebe steps back, awed, and bumps into Juno, and neither of them moves away.
[beat 7] Colm drops the line, picks it up, drops it again.
[beat 8] PHOEBE: Is anyone else coming up? COLM: I'll hold the ground.
[beat 9] JUNO: Colm. Come up.
[beat 10] He hesitates. She reaches down a hand. He takes it.
[beat 11] She hauls him over the rim, and the three of them stand shoulder to shoulder in the basket as the balloon lifts, silent, into the first pink light.

### SCENE s00360 | INT. LIMESTONE CAVE - CORPORATE RETREAT - DAY
Characters: CRESSIDA VANCE-HOLT, WINIFRED OYELARAN, BARTHOLOMEW PRICE
[beat 0] A cavern lit by battery lanterns. Stalactites drip. A banner reads "TEAM BUILDING 2.0." Folding chairs ring a flip chart. CRESSIDA VANCE-HOLT, forties, a regional director in a fleece vest, stands at the flip chart with a marker. WINIFRED OYELARAN, thirties, her deputy, sits in the front row taking notes. BARTHOLOMEW PRICE, fifties, the facilitator, perches on a stool with a clicker.
[beat 1] CRESSIDA: Today we trust-fall into the future. WINIFRED: Cressida, there's a puddle behind you. CRESSIDA: Winifred, that's a metaphor.
[beat 2] BARTHOLOMEW: Let's begin with an icebreaker. WINIFRED: There is ice already. On the ceiling. BARTHOLOMEW: She is correct.
[beat 3] CRESSIDA: Bartholomew, I'd like to see her try the fall first.
[beat 4] Winifred folds her notebook. She stands, turns her back to Cressida, and spreads her arms. Cressida steps forward, then back, then forward.
[beat 5] WINIFRED: Catch me. CRESSIDA: I will. WINIFRED: Cressida, are you ready? CRESSIDA: I'm always ready.
[beat 6] She lets herself fall. Cressida lunges. She misses.
[beat 7] Winifred hits the stone with a grunt. Bartholomew drops his clicker. A stalactite drops its water with a plink.
[beat 8] WINIFRED: She was supposed to catch her. BARTHOLOMEW: Who? WINIFRED: She was supposed to catch me. CRESSIDA: She meant to.
[beat 9] Winifred sits up, holding her elbow. Cressida kneels beside her. Both of them glare at Bartholomew.
[beat 10] BARTHOLOMEW: That concludes module one.

### SCENE s00361 | INT. STAMP AUCTION HOUSE - VAULT ROOM - NIGHT
Characters: QUENTIN ASHBY-REYES, NOVA, CORNELIUS
[beat 0] Glass cases of rare stamps under dim lamps. A long table, a velvet cloth, a pair of tweezers resting on a magnifier. QUENTIN ASHBY-REYES, forties, in a tuxedo, studies a framed Inverted Jenny. NOVA, thirties, in an evening dress, stands beside him holding a champagne flute. CORNELIUS, fifties, the auctioneer, stands behind a podium counting a ledger.
[beat 1] He sets his glass down. She sips hers. Cornelius closes the ledger, takes off his glasses, and rubs the bridge of his nose.
[beat 2] CORNELIUS: The lot is sealed. QUENTIN: Of course. CORNELIUS: You're quite sure you want to bid? QUENTIN: Sure.
[beat 3] Nova drifts to the case. She runs a finger along the glass. Quentin watches her hand. Cornelius watches Quentin.
[beat 4] NOVA: It's smaller than I thought. CORNELIUS: They always are.
[beat 5] Quentin lifts the champagne bottle and refills all three glasses. His hand does not shake. Cornelius takes his without looking down.
[beat 6] Nova takes hers and, in the same motion, tips it onto the carpet.
[beat 7] Cornelius frowns. She steps back. Quentin raises the bottle like a club. Cornelius reaches under the podium. Nobody speaks.
[beat 8] The lights go out.
[beat 9] When they come back, the case is empty, the podium is empty, and the three glasses lie upside down on the cloth in a perfect row.

### SCENE s00362 | EXT. ICE-FISHING SHACK VILLAGE - FROZEN LAKE - DUSK
Characters: HALVARD, ANNIKA, RUSLAN, TOVA, BJORN, OLD MARGIT
[beat 0] A scatter of tarpaper shacks on a vast white lake, each with a stovepipe breathing smoke. The wind has a knife in it. HALVARD, sixties, a fisherman in a fur hat, crouches at a hole with a jig. ANNIKA, thirties, his daughter, holds a thermos. RUSLAN, forties, a stranger in a thin jacket, stands in the doorway. TOVA, ten, sits on a bucket. BJORN, thirties, Annika's husband, tends the stove. OLD MARGIT, eighties, wrapped in two blankets, dozes in the corner.
[beat 1] Halvard hauls up a line. Nothing on it. He drops it back. Ruslan watches, shivering.
[beat 2] Annika offers him the thermos. He takes it with both hands.
[beat 3] RUSLAN: Thank you. ANNIKA: Close the door.
[beat 4] RUSLAN: My car is dead. BJORN: Sit by the stove.
[beat 5] Ruslan sits. Tova stares at his shoes. Margit stirs.
[beat 6] MARGIT: Ice is thinning. HALVARD: Margit, sleep. ANNIKA: Papa, listen.
[beat 7] A groan from the lake, long and deep, like a whale turning. Everyone looks at the floor.
[beat 8] HALVARD: Out. All of us. ANNIKA: Papa, the ice... HALVARD: Now! TOVA: Mama! ANNIKA: Go!

### SCENE s00363 | INT. SEED VAULT - ARCTIC ISLAND - NIGHT
Characters: IVO LUNDQVIST, NORA
[beat 0] A frozen concrete tunnel, shelves of sealed foil packets disappearing into the dark. Every breath is a cloud. IVO LUNDQVIST, forties, a thief in a thermal suit, kneels at a steel case, a pry bar in his gloved hands. His earpiece crackles.
[beat 1] NORA: Ivo, you have six minutes before the guard rotation. IVO: I know.
[beat 2] He cracks the case. It opens. Inside lies a single glass vial, pale gold.
[beat 3] NORA: Don't touch it. Is it the right strain? He lifts it to the light. He turns it. He sets it back.
[beat 4] IVO: Wrong label. NORA: Then try the next case.
[beat 5] He rises. He crosses the tunnel in three strides. He pries the second case.
[beat 6] A siren starts low and climbs.
[beat 7] Ivo lunges backward, slips on the ice, and the vial flies out of his hand. NORA: Ivo! What happened?
[beat 8] Ivo and the vial hang in the air for a long beat. He catches it a hand's width above the floor. The siren stops. Silence.
[beat 9] IVO: Got it.
[beat 10] NORA: Good. Now turn around. He does.
[beat 11] A single red dot rests on his chest. At the end of the tunnel, the guard lowers a rifle.
[beat 12] IVO: Nora? NORA: He pays better.

### SCENE s00364 | EXT. DRIVE-IN THEATER - NIGHT
Characters: TESS BRANNIGAN, JOSE ALVARADO-CHEN, MARCELLO, DELIA, CONCESSION VOICE
[beat 0] A cracked asphalt lot facing a huge cream-colored screen. Speaker poles stand in rows like metal weeds. Fireflies drift between them. A projector shaft glows over a concession hut. The film is a silent black-and-white western, its dust-lit figures galloping over the clouds. TESS BRANNIGAN, seventeen, sits cross-legged on the hood of a dented pickup, wrapped in an oversized flannel. Her hair is pulled up in a loose knot. She keeps picking at a sticker on her water bottle. JOSE ALVARADO-CHEN, seventeen, sits beside her, lanky and awkward, his knees too high, one sneaker untied. He eats popcorn with the intensity of someone avoiding a conversation. MARCELLO, eighteen, Tess's brother, leans against the driver's door with a cigarette he has not lit. He looks at the sky, then at the screen, then at his sister. DELIA, sixteen, Jose's cousin, perches on the tailgate swinging her legs.
[beat 1] TESS: He said he'd be here by nine. JOSE: It's only nine-fifteen. TESS: It's nine-twenty.
[beat 2] He offers her popcorn. She takes a piece, doesn't eat it. Marcello clears his throat.
[beat 3] MARCELLO: You want me to call him? TESS: No.
[beat 4] He lights the cigarette. Delia kicks the tailgate.
[beat 5] The projector flickers, a reel jumps, and the galloping horses stutter and freeze.
[beat 6] A scratchy loudspeaker voice crackles from the concession hut. CONCESSION VOICE: Folks, sorry for the delay. Reel two will be right up. In the meantime, enjoy the stars.
[beat 7] Everyone looks up. The stars are thick, cold, indifferent. DELIA: Pretty.
[beat 8] JOSE: I could wait with you. If you want. TESS: You don't have to. JOSE: I know.
[beat 9] He slides a little closer on the hood. She does not move away. Marcello watches them, then turns his back and stares at the screen.
[beat 10] The film jerks to life. The horses gallop again, and nobody in the truck says a word until the credits.

### SCENE s00365 | EXT. ROWBOAT - MIDDLE OF A MIST-BOUND LAKE - DAWN
Characters: BEATRIX LOWELL, CAROLINE LOWELL
[beat 0] A battered rowboat drifts on glass-flat water, fog pressing in from every side. The oars lie shipped. A tackle box rests open between two seats. BEATRIX LOWELL, sixties, in a yellow slicker, holds a rod. Her daughter CAROLINE LOWELL, thirties, sits opposite, hands wrapped round a thermos. Neither has caught a thing. Neither has spoken for an hour. A loon calls across the water.
[beat 1] Beatrix reels in. Caroline watches the line.
[beat 2] BEATRIX: You never liked fishing. CAROLINE: I liked sitting with you. BEATRIX: That's not the same. CAROLINE: It was for me.
[beat 3] Beatrix casts again. The lure arcs, plops. She does not look up.
[beat 4] BEATRIX: She called me, you know. CAROLINE: Who? BEATRIX: Your sister. She said you'd been dodging her. CAROLINE: She's the one who stopped answering. BEATRIX: That's not what she said.
[beat 5] CAROLINE: Mother, please. BEATRIX: Sit down before you tip us! CAROLINE: You always do this!
[beat 6] She stands. The boat rocks. Beatrix grabs the gunwale. She lifts her eyes, finally, and the two women glare at each other across the fog, the loon crying again, closer.

### SCENE s00366 | INT. MATTRESS SHOWROOM - DAY
Characters: DUANE PETTIGREW, LUCINDA FROST, THEO FROST
[beat 0] A cavernous warehouse of beds. Banners scream "BLOWOUT." A fake sunrise glows over a king-size. DUANE PETTIGREW, forties, a salesman in a shiny tie, hovers over a couple. LUCINDA FROST, thirties, bounces gently on a firm model. Her husband THEO FROST, thirties, lies flat on a plush one with his shoes on.
[beat 1] DUANE: This one has four layers of memory foam. LUCINDA: I'll take your word.
[beat 2] Duane clasps his hands. Theo rolls over and sinks into the foam with a long sigh while Lucinda stands and moves to a third bed, which Duane hurriedly pats, and while Theo's shoes drag a smear of mud across the quilted top, Duane gasps and lunges with a wipe, and Lucinda kneels to inspect the springs.
[beat 3] THEO: I can't get up. LUCINDA: It's only a mattress. THEO: It has me. DUANE: That's the contouring technology!
[beat 4] Duane takes Theo's arm and heaves. Theo comes up an inch and falls back. Lucinda grabs his other arm.
[beat 5] They pull in unison and the three tumble off the edge of the bed in a heap, the sign "BLOWOUT" swaying overhead.

### SCENE s00367 | INT. WAX MUSEUM - AFTER HOURS - NIGHT
Characters: INSPECTOR HOLLIS DRAKE, WILHELMINA VOSS, CONSTABLE REUBEN OKAFOR-LEE, MADAME ODILE FERRIER, LORD ASHTON PEMBERTON, NURSE JOSEPHINE BELL, PHONE
[beat 0] A wax museum at midnight. Rows of lifelike figures in period costume, glass eyes catching the exit light. A velvet rope sags. A faint scent of melting paraffin hangs in the dark. INSPECTOR HOLLIS DRAKE, fifties, trench-coated, a pocket flashlight in his teeth, crouches by a figure of Napoleon. DR. WILHELMINA VOSS, forties, the museum curator, stands over him with a clipboard. CONSTABLE REUBEN OKAFOR-LEE, twenties, shifts his weight at the door, hand on his truncheon. MADAME ODILE FERRIER, seventies, the sculptor, sits on a folding stool gripping a cane. LORD ASHTON PEMBERTON, sixties, the patron, leans against a plinth, his cravat undone. NURSE JOSEPHINE BELL, thirties, hovers at his shoulder with a medical bag.
[beat 1] DRAKE: When was this figure last moved? WILHELMINA: Never. It's been bolted since 1962. DRAKE: Then who changed his hat? WILHELMINA: I'm sorry?
[beat 2] He stands. He lifts the bicorne from Napoleon's head. Beneath it, the wax has been scored with a fine hairline crack, and in the crack, something glints.
[beat 3] DRAKE: Constable, gloves. REUBEN: Here, sir.
[beat 4] He hands them over. Drake slides a gloved finger into the crack, hooks the glint, and draws it out: a small brass key.
[beat 5] PEMBERTON: Well, there you are. A key. How delightful.
[beat 6] ODILE: Ashton. PEMBERTON: What, Odile? ODILE: You promised.
[beat 7] Pemberton straightens. Josephine's hand drifts to his sleeve. He shakes it off.
[beat 8] DRAKE: Lord Pemberton, you've seen this key before. PEMBERTON: I haven't. DRAKE: You have a matching one in your waistcoat.
[beat 9] Pemberton's hand goes to his chest. Odile bows her head. Wilhelmina lowers her clipboard.
[beat 10] WILHELMINA: Inspector, what does the key open? DRAKE: Dr. Voss, I believe you can tell me. WILHELMINA: The cellar. Under the Chamber of Horrors. DRAKE: And what's in the cellar? WILHELMINA: The first sculpture. The one Madame Ferrier never exhibited.
[beat 11] All eyes turn to Odile. She sets down her cane. She lifts her chin.
[beat 12] ODILE: I made her so well, Inspector. So very well. Nobody could tell she wasn't alive. DRAKE: Who was she? ODILE: My sister.
[beat 13] REUBEN: Ma'am? ODILE: She sat for me on the last night of her life. I could not bear to let her go.
[beat 14] JOSEPHINE: You knew? PEMBERTON: I paid to keep it quiet.
[beat 15] DRAKE: Constable, escort Madame Ferrier and Lord Pemberton to the carriage. Nurse Bell, you will assist Dr. Voss with the cellar. REUBEN: Yes, sir.
[beat 16] PHONE: Inspector, this is the Commissioner. Have you concluded? DRAKE: Nearly, sir.
[beat 17] Drake pockets the key. Odile rises with surprising grace and takes Reuben's arm. At the door she stops, turns, and looks at the figures one last time.
[beat 18] ODILE: They keep better than we do, you know.
[beat 19] She exits. The wax faces stare after her. Drake switches off his flashlight and the museum goes dim.

### SCENE s00368 | INT. LIBRARY INSIDE GIANT TORTOISE SHELL - NIGHT
Characters: ARCHIVIST ELOWEN, STRANGER, TAMSIN
[beat 0] A cathedral of bone-white arches curving overhead, every rib lined with shelves of crumbling scrolls. Lanterns hang on slow chains. The floor sways in a gentle, immense rhythm, as though the whole library were breathing. ARCHIVIST ELOWEN, thirties, in a gray robe, ink on her fingers, climbs a rolling ladder with a scroll tucked under her arm.
[beat 1] A STRANGER, forties, in a travel-worn cloak, steps through the narrow doorway at the base of the shell. Snow dusts his shoulders. He sets down a staff carved with spirals.
[beat 2] STRANGER: Forgive the hour. I seek the book of true names. ELOWEN: No one seeks it. It finds them. STRANGER: Then perhaps it has found me. ELOWEN: Perhaps. Your name? STRANGER: I have not carried one in a long time.
[beat 3] She descends. The ladder creaks. She walks to him and studies his face by lantern light, the scar through his left brow, the grey in his beard.
[beat 4] ELOWEN: I know that scar. STRANGER: I doubt it. ELOWEN: You were a prince, once. Of the drowned towns. STRANGER: I was a boy once. A prince is only a boy with a good tailor.
[beat 5] She reaches for a high shelf and brings down a bound volume, its cover cracked, its clasp rusted. She opens it, turns three pages, and reads aloud. ELOWEN: "Tamsin, son of the tide. Sworn to forget, and failing."
[beat 6] The Stranger closes his eyes.
[beat 7] The floor lurches, a great slow tremor, as the tortoise stirs beneath them. Dust falls from the arches.
[beat 8] TAMSIN: You have spoken it. ELOWEN: Tamsin. TAMSIN: Then you know what comes. ELOWEN: The sea.
[beat 9] He nods. Far below the floor, something vast begins to move toward the sound of his name.

### SCENE s00369 | INT. GREENHOUSE COURTROOM - DAY
Characters: JUDGE ELDRIDGE MARCHAND, PROSECUTOR LOUISA ZAMBRANO, DEFENDANT, JUDGE, DOLORES
[beat 0] A county courtroom improvised in an old botanical greenhouse. Glass panes fog with humidity. Tomato vines climb the jury box. Benches have been dragged between rows of orchids. A gavel sits on a flowerpot. JUDGE ELDRIDGE MARCHAND, sixties, in a robe damp at the hem, presides from a potting bench raised on cinderblocks. His spectacles keep fogging, and he wipes them with the same corner of the robe every thirty seconds. PROSECUTOR LOUISA ZAMBRANO, thirties, stands at a lectern made from a wooden crate, her notes curling in the heat. A DEFENDANT, forties, sits at the defense table in a borrowed suit, pale, sweating, his hands flat on the wood.
[beat 1] LOUISA: Your Honor, the state calls its final witness. JUDGE: Proceed.
[beat 2] She turns. At the back, among the ferns, a woman rises.
[beat 3] LOUISA: The state calls Mrs. Dolores Vance. DEFENDANT: No.
[beat 4] The woman walks the aisle between the orchids. Each step leaves a wet print on the tile. She takes the stand, a wicker chair beside a fig tree, and places her hands in her lap.
[beat 5] JUDGE: Mrs. Vance, do you swear to tell the truth? DOLORES: I do.
[beat 6] LOUISA: Mrs. Vance, do you recognize the man at the defense table? DOLORES: I do. LOUISA: Who is he? DOLORES: My husband.
[beat 7] The Defendant closes his eyes. The Judge wipes his spectacles. A drop of condensation slides down the glass and falls onto the gavel.
[beat 8] LOUISA: And when did you last see him before today? DOLORES: Eleven years ago. The night I was buried.
[beat 9] Silence. A moth lands on the Judge's shoulder. He does not brush it off.
[beat 10] The Defendant opens his eyes and looks directly at her, and a very small, terrible smile crosses his face. DEFENDANT: Hello, Dolores.

### SCENE s00370 | INT. GRAIN BARGE "MARIE LOUISE" - GALLEY - NIGHT
Characters: HALVARD KROGH, INGRID, TOBY, BRONWEN PELL, KNOCK, STRANGER, OSKAR
[beat 0] A narrow cabin frozen into the river ice. A cast-iron stove ticks. Frost feathers the porthole. HALVARD KROGH, 60, barge captain, bearded, patient hands, ladles thin soup into tin bowls. His daughter INGRID, 30, wrapped in a army blanket, counts crackers into piles on the table. TOBY, 10, Ingrid's son, sits cross-legged on the bunk, tracing a face in the frost on the glass. BRONWEN PELL, 70, a retired schoolteacher with a deaf ear and a sharp one, knits something that is clearly never going to be finished.
[beat 1] HALVARD: Eight days. The ice master said ten at most. INGRID: He also said the thaw would come on the first. BRONWEN: What was that? INGRID: Nothing, Mrs. Pell. TOBY: Grandpa, the stove's quiet. HALVARD: It's saving its strength.
[beat 2] A calm settles. The soup steams. Even the wind seems to have gone to bed. Ingrid slides a cracker pile toward her son and he slides it back.
[beat 3] INGRID: Eat, Toby. TOBY: You first.
[beat 4] A KNOCK on the hull. Three slow raps. Everyone stops.
[beat 5] Halvard sets down the ladle. He takes a boat hook from the wall and opens the hatch. Snow blows in.
[beat 6] A man stands on the ice, hatless, rimed white, a canvas sack over one shoulder. This is the STRANGER, 40s, soft-spoken, smiling with the lower half of his face only.
[beat 7] STRANGER: Forgive me. I saw your smoke from the north bank. I walked a long way. HALVARD: Nobody walks that ice. It's rotten past the channel buoy. STRANGER: Then I walked carefully.
[beat 8] Halvard weighs him, then steps back. The stranger climbs down and sits where he is told, nearest the stove.
[beat 9] INGRID: What's your name? STRANGER: Oskar. Oskar Venn. BRONWEN: Venn? I taught a Venn. Little boy, wet cough, always drew boats. OSKAR: Not me, I'm afraid. HALVARD: Ingrid. Soup.
[beat 10] Ingrid hands Oskar a bowl. He holds it with both hands and does not drink.
[beat 11] OSKAR: Is it only the four of you? HALVARD: Does it matter? OSKAR: Only in the way that counting matters.
[beat 12] TOBY: We're not four. There's Gunnar. INGRID: Toby. TOBY: He's under the deck.
[beat 13] Silence. Halvard looks at his daughter. She looks at the floor.
[beat 14] OSKAR: Under the deck. HALVARD: My deckhand. He went through the ice on the third day, going for the line. We brought him back. We have not been able to take him ashore. OSKAR: I'm sorry. HALVARD: You're not. OSKAR: No. I'm not. I'm relieved. I won't have to explain myself to a man who's still looking for his friend.
[beat 15] BRONWEN: What did he say?
[beat 16] HALVARD: Mr. Venn, tell me why you walked out here. OSKAR: There were nine of us on the grain wharf at the start. We drew straws for who walked the river. The others are sleeping in a warehouse with the doors chained. I did not draw a short straw, Captain. I drew the only straw that said the barge had food.
[beat 17] INGRID: Who told you we had food? OSKAR: The man who sold you the flour, three weeks ago. He sold it to us as well. He kept a ledger of every boat that bought from him, and every boat that did not leave before the freeze.
[beat 18] HALVARD: You're from the company. OSKAR: I'm from the harbor. The company is a letter on the door. Nobody's coming for this barge, Captain. Not on the first. Not on the tenth. They wrote you off the day the ice closed, and the river has been kind to them by taking you quietly.
[beat 19] TOBY: Mom? INGRID: Hush.
[beat 20] OSKAR: I have bread in this sack. And salt. And a lantern, which is how I found you. I came to trade. HALVARD: Trade what? OSKAR: Passage. There is a way across that holds. I walked it. I can take two more tonight, three if the child is small and nobody argues. BRONWEN: Two? OSKAR: Three.
[beat 21] Halvard lowers the boat hook. Ingrid stands. The stove pops, loud as a shot, and nobody looks at it.
[beat 22] INGRID: Three of five. OSKAR: Three of five. I did not draw the numbers.
[beat 23] Halvard slowly turns to the hatch, reaches for the lantern, and blows it out. The galley falls dark but for the red slot of the stove.
[beat 24] HALVARD: Then you will wait for morning, Mr. Venn. And in the morning, you will show me this way across. Alone. OSKAR: That is not the arrangement.
[beat 25] In the dark, the sound of a knife leaving a sheath. It is not Halvard's.

### SCENE s00371 | INT. FERRY TERMINAL HOLDING ROOM - NIGHT COURT - NIGHT
Characters: NNEKA ADEBAYO, DEZ FAIRWEATHER, ELLIOT VANCE, MORRIS KOWALSKI, PRISCILLA TRAN, JUDGE LAVOIE
[beat 0] A waiting hall that was once for passengers, now rigged as a courtroom with folding tables and a flag on a mic stand. Salt damp climbs the tile. Somewhere a ship's horn sounds and fades. NNEKA ADEBAYO, 35, public defender, stands at the defense table with a coat she has not taken off. She keeps one hand flat on a file as though it might fly. Beside her, DEZ FAIRWEATHER, 22, in a paper jumpsuit, jiggles his knee. He studies the ceiling tiles. He does not look at her. Across the aisle, ELLIOT VANCE, 40s, prosecutor, polishes his glasses on his tie. He is smiling at nothing. At the back, bailiff MORRIS KOWALSKI, 60, leans on a vending machine, eating something orange from a bag. PRISCILLA TRAN, 25, the clerk, types with her whole face.
[beat 1] A speaker box on a pole CRACKLES. JUDGE LAVOIE: Counsel, can you hear me? The river fog has closed the bridge. I'm appearing from the car. NNEKA: We can hear you, Your Honor.
[beat 2] JUDGE LAVOIE: Good. Mr. Vance, the state's position on bail.
[beat 3] Vance stands. He buttons his jacket, then unbuttons it, then sits back down, as if reconsidering the whole idea of standing.
[beat 4] ELLIOT: The state has no objection to release, Your Honor.
[beat 5] Nneka's head snaps toward him. She searches his face for the joke. NNEKA: No objection?
[beat 6] ELLIOT: New evidence. The camera footage places the defendant at the Marlow Street shelter at the time of the break-in.
[beat 7] DEZ: That's what I told you.
[beat 8] Nneka covers his hand with hers to quiet him. She is already thinking three moves ahead and does not like where it leads.
[beat 9] NNEKA: Your Honor, the defense moves for dismissal. JUDGE LAVOIE: Is the state opposed?
[beat 10] Vance hesitates. He turns, very slightly, to the clerk. Priscilla stops typing. He tilts his head. She shakes hers once, small, a flicker.
[beat 11] ELLIOT: The state is... opposed. Your Honor. I've just been informed that the footage was timestamped from a different clock. NNEKA: Informed by whom?
[beat 12] Priscilla goes pale. Morris looks up from his bag.
[beat 13] JUDGE LAVOIE: Ms. Adebay, sit down. NNEKA: It's Adebayo, Your Honor, and I'd like the clerk to explain the clock.
[beat 14] The intercom hisses. Dez rises half out of his chair. Morris sets down the bag and walks forward, one hand drifting to his belt.
[beat 15] DEZ: I didn't do it. I never did it. Why does it keep changing? He tries to say more and can't.
[beat 16] Nneka puts a hand on his shoulder and, for the first time, looks at him. NNEKA: Sit. I've got you.
[beat 17] He sits. She stands. The fog presses at the windows like a face.

### SCENE s00374 | INT. FUNICULAR CAR - MIDNIGHT
Characters: VESPER KOWALCZYK, LORENZO, ODILE, HIRO, GUARD
[beat 0] A small wooden car climbs a steep rail above a sleeping alpine town. A single lamp swings from the roof. Below, the lights of the Hotel Edelweiss glitter. VESPER KOWALCZYK, 40s, elegant, in a conductor's cap and uniform that almost fits, stands at the brake wheel. She is the picture of calm. LORENZO, 30s, bellhop's jacket, crouches on a long steamer trunk. ODILE, 50s, in a fur coat that does not belong to her, sits upright on the bench with a cane across her knees. HIRO, 20s, thin, quiet, wearing a night porter's apron, holds a canvas tool roll.
[beat 1] VESPER: Four minutes to the top station. We stop at the second landing for the cable. LORENZO: The cable is on the trunk? VESPER: The cable is the trunk.
[beat 2] Odile taps her cane twice on the floor. Hiro unrolls his tools without a sound.
[beat 3] LORENZO: What does the guard say when the car stops? ODILE: The guard has been drinking since nine. VESPER: The guard is a gentleman. He sleeps well.
[beat 4] The car shudders over a joint in the rail. Everyone grips something. Then it settles, and the hum of the cable resumes.
[beat 5] HIRO: There is a second car coming down. They look. Through the rear window, a pair of lights, small, then larger, sliding down the opposite track.
[beat 6] VESPER: That's the midnight milk run. It passes us at the landing. LORENZO: Nobody said there was a milk run. VESPER: Nobody checked the timetable but me.
[beat 7] The oncoming car rumbles past, inches off. Its single passenger, a man in a doorman's coat, looks through the glass. He sees the trunk. He sees four conductors. His mouth opens.
[beat 8] Vesper tips her cap. The man blinks, tips his own, and sinks out of view.
[beat 9] ODILE: He will remember that. VESPER: He will remember a nice woman in a nice cap.
[beat 10] The car clanks to a halt at the second landing. Silence.
[beat 11] A lantern glows on a platform ahead, and a figure steps into it: the GUARD, an enormous man, fully awake, holding a rifle. GUARD: Good evening, Frau Kowalczyk.
[beat 12] Nobody moves. Lorenzo's hand drifts toward the trunk. Odile's cane rises an inch. Hiro's wrench disappears into his sleeve.
[beat 13] VESPER: Good evening, Anselm. You are not drunk. GUARD: Not tonight. Tonight I was told. Vesper closes her eyes briefly, then opens them.
[beat 14] VESPER: Hiro. Now.
[beat 15] Hiro slams the brake lever. The car bucks. The trunk slides, Lorenzo with it, and both crash into the Guard's legs. The rifle goes off into the roof. Odile lashes the cane across his wrist. He roars and swings.
[beat 16] Vesper hauls the trunk's lid open. Cable spills out in a silver snake. Hiro and Lorenzo wrestle the Guard onto the platform. Odile steps over them in her borrowed fur. Vesper takes the lantern from the rail and casts it away into the dark. It falls and falls and falls.
[beat 17] ODILE: We have two minutes before the top station knows. VESPER: We have one. Everybody in the car.
[beat 18] They scramble in. The car lurches uphill, faster, and the lights of the Edelweiss rush up to meet them.

### SCENE s00375 | INT. GONDOLA CABLE CAR - ABOVE A GORGE - DAY
Characters: TESS, RUBEN, AMARA, WEN, STRANGER, DELPHINE
[beat 0] Stalled mid-span. Wind rocks the cabin. A hundred meters of nothing below. TESS, 30s, climbing jacket, sits on the floor with her back to the door. RUBEN, 40s, her husband, stands with his palms on the glass. AMARA, 16, headphones around her neck, picks at a hole in her sleeve. WEN, 70s, in a wool cap, eats sunflower seeds with great deliberation. A fifth figure sits apart: a STRANGER, 50s, in a rain shell, sunglasses on, a duffel on his lap. He hasn't said a word in two hours.
[beat 1] RUBEN: The next car's at the station. They said an hour. TESS: They said an hour at the last hour.
[beat 2] Wen spits a shell into his palm. Amara watches the bag in the stranger's lap.
[beat 3] AMARA: What's in the bag?
[beat 4] The Stranger turns his head. Smiles. STRANGER: Rope.
[beat 5] TESS: Real rope? STRANGER: Forty meters. Rated. RUBEN: Why didn't you say? STRANGER: You'd have wanted to use it.
[beat 6] The cabin sways. Tess swallows. Nobody speaks.
[beat 7] The Stranger takes off his glasses. His eyes are red, tired.
[beat 8] STRANGER: Delphine. My name. I was the one who rode the line crew when they rebuilt this span in '09. WEN: You're the engineer. DELPHINE: I was. I signed the inspection. I come up here every year on the same day.
[beat 9] RUBEN: Why? DELPHINE: Because the weld under your feet has a crack I wrote off as cosmetic.
[beat 10] Silence. Tess's eyes go slowly to the floor under her. Amara pulls her knees up. Ruben stops breathing.
[beat 11] TESS: How long? DELPHINE: It hasn't moved in fifteen years. But then it hasn't been stopped in the wind before, either.
[beat 12] WEN: Is the rope for us? DELPHINE: It's for one at a time. Down the cable, to the pylon. It's two hundred meters, and a harness I made out of seatbelt.
[beat 13] AMARA: I'll go. TESS: No. AMARA: I'm lightest. RUBEN: Amara, sit. AMARA: I'm the one who said it, so I'm the one who goes.
[beat 14] DELPHINE: Nobody goes yet. I don't want to be right today. I want to be wrong, and I want a rescue car to come over that hill with a man in a yellow helmet who tells me I'm an idiot.
[beat 15] Out of the gray, a distant engine. Everyone turns.
[beat 16] Wen slowly puts a seed in his mouth. WEN: I'd like that too.
[beat 17] The engine grows louder. Delphine does not look up. She is watching the floor.

### SCENE s00376 | INT. THE WHALE LIBRARY - NIGHT
Characters: ISOLDE VANTH, THORNE, CINDER
[beat 0] A cathedral built from the ribs of a leviathan. Each bone arches forty feet overhead, polished the color of old piano keys. Between the ribs, shelves of salt-stained books climb to the dark. Candlelight pools in the hollows, and the ceiling, which is the whale's spine, hums faintly, as if remembering a song.
[beat 1] ISOLDE VANTH, 20s, a mapmaker in a patched indigo coat, ink on her cuffs and a brass compass at her throat, steps in from a rain that falls upward, silver, into the dark. She carries a rolled chart under one arm.
[beat 2] THORNE, ancient, tall, the archivist, glides toward her. His wings are a moth's: powdery gray, tattered at the edges, folded around him like a cloak. His eyes are two lamps.
[beat 3] THORNE: You are late, cartographer. The tide takes the east wing at midnight. ISOLDE: The tide takes a lot of things.
[beat 4] She unrolls the chart on a reading table. It is blank except for a single red thread, which is slowly crawling across the paper by itself.
[beat 5] THORNE: It has found you. ISOLDE: It found me three days ago. I need to know what it's drawing.
[beat 6] A third presence stirs: CINDER, a child-sized spirit of living ember, perched on a stack of folios. She is the size of a cat, made of coals, and her voice is the crackle of a hearth. Where she sits, the paper curls and blackens.
[beat 7] CINDER: It's drawing a door. THORNE: Cinder. Off the folios. CINDER: I'm helping.
[beat 8] ISOLDE: Where does the door go?
[beat 9] Cinder leaps to the table. The red thread bends toward her, drawn like iron to a lodestone. It writes a small square, and then, below it, a smaller one.
[beat 10] CINDER: It goes here. THORNE: It goes beneath the library. Beneath the whale.
[beat 11] The spine overhead hums louder. A candle gutters out. Then another. Dust sifts from the ribs.
[beat 12] ISOLDE: There's nothing under the whale. THORNE: There is what it swallowed.
[beat 13] The red thread finishes its door. It stops.
[beat 14] Beneath the floor, something knocks. Once. Twice.
[beat 15] Thorne unfolds his wings.

### SCENE s00377 | INT. TELEGRAPH OFFICE - GRAND CENTRAL JUNCTION - 1912 - DAWN
Characters: HOBSON, MISS ALTHEA PIKE, COLONEL ROWE
[beat 0] A brass-and-mahogany room that smells of oil and coal. The sounder clicks like a nervous insect. Pale light slants through a high window onto a counter and a wall of pigeonholes. HOBSON, 50, the night operator, sleeves gartered, bends over the key with a steady hand. He has not looked up in an hour. MISS ALTHEA PIKE, 30, in a gray traveling suit, stands at the counter, gloved fingers drumming a slow rhythm on the wood. COLONEL ROWE, 60, a moustache like a broom, stands behind her with a cane planted between his boots.
[beat 1] The sounder stops. Hobson tears a slip from the tape and holds it a long moment.
[beat 2] HOBSON: It says the ship has gone down. ALTHEA: Read it again. HOBSON: Miss Pike.
[beat 3] Colonel Rowe and Althea reach for the slip together. Their fingers meet on the paper. Neither lets go. Neither speaks. The tape between them trembles.
[beat 4] ROWE: Give it to me, girl. ALTHEA: It's my brother's name on it, Colonel.
[beat 5] They tug. The paper tears down the middle. Each holds half, and each stares at the half they hold.
[beat 6] Behind the counter, Hobson rises very slowly and takes off his eyeshade. HOBSON: There is a second line, if you will let me read it.
[beat 7] They freeze. The sounder begins to click again.

### SCENE s00378 | INT. ABANDONED PLANETARIUM - NIGHT
Characters: BILLIE STROUD, PEREGRINE LOWE
[beat 0] A dead dome. Seats in tiers. Dust turns slowly in a flashlight beam.
[beat 1] BILLIE STROUD, 40s, detective, coat open, steps over a tipped chair. A projector lies on its side.
[beat 2] BILLIE: Peregrine Lowe.
[beat 3] From the dark of the control booth, a man leans into the light: PEREGRINE LOWE, 60s, tweed, handsome in a ruined way, a lantern on his knee. PEREGRINE: Detective Stroud. You found it faster than I'd hoped.
[beat 4] BILLIE: The ticket stub in the victim's coat. PEREGRINE: I thought you'd miss it. BILLIE: You wanted me to find it. PEREGRINE: Billie, I wanted you to look up.
[beat 5] Billie lifts the flashlight. Overhead, the dome is painted with constellations, hand-lettered. One star is circled in red.
[beat 6] BILLIE: That isn't Orion. PEREGRINE: It's the only wrong star in the sky. That's how Marguerite signed her work.
[beat 7] BILLIE: She's been dead since 1998. PEREGRINE: That's what I was told.
[beat 8] He turns off the lantern. The dome goes black. Then, soft, a hum, and the ceiling begins to glow, one star at a time.
[beat 9] BILLIE: Peregrine. What did you start? PEREGRINE: Nothing. Watch.
[beat 10] Billie lowers the flashlight. The wrong star pulses.
[beat 11] A door she hasn't seen opens in the dome's painted rim.
[beat 12] BILLIE: Who's behind that? PEREGRINE: Billie. She has been waiting a long time to be asked.

### SCENE s00379 | INT. FIELD HOSPITAL - CONVERTED SKI LODGE - NIGHT
Characters: SAOIRSE KELLEHER, NURSE ABIODUN, HELENA PAVLICEK, GREGOR PAVLICEK
[beat 0] A great timber hall with a stone hearth, now lined with cots. Antlers still hang over the mantel. Blizzard wind works the shutters. DR. SAOIRSE KELLEHER, 40, mud on her boots and blood on her cuffs, stands over a cot with a stethoscope draped around her neck. She has not slept in two days and she holds her face carefully, like something fragile on a tray. NURSE ABIODUN, 30, sets out instruments on a ski-rack trolley. He works precisely, wasting no motion. On the cot, MRS. HELENA PAVLICEK, 70, lies pale under three blankets, her breath shallow. At the foot of the bed, her husband GREGOR PAVLICEK, 72, holds his hat in both hands, turning it by the brim.
[beat 1] SAOIRSE: Mr. Pavlicek. The avalanche took her ribs, and one of them has nicked the lung. GREGOR: She was talking on the way down. SAOIRSE: I know.
[beat 2] She checks the pulse at Helena's wrist. She counts, and he waits, and she finds nothing to say about the number.
[beat 3] GREGOR: You'll operate. SAOIRSE: We would have to open the chest. I have a surgical kit and a lantern. The helicopter can't land for another night. GREGOR: Then do it.
[beat 4] ABIODUN: Doctor, the generator's down to an hour.
[beat 5] She glances at him. He looks back, steady. In that look is a whole second conversation.
[beat 6] SAOIRSE: Then we have an hour. GREGOR: I said do it. SAOIRSE: I heard you.
[beat 7] She turns, takes a scalpel from the trolley, and holds it up to the light. Her hand is perfectly steady.
[beat 8] Gregor takes a step forward. He sets his hat on the bed. His knuckles are white.
[beat 9] GREGOR: And if you cut and she dies on your table? SAOIRSE: Then she dies knowing someone tried.
[beat 10] GREGOR: Then I forbid it. ABIODUN: Sir. GREGOR: She is mine. Fifty years. I will not have her opened by a stranger in a dead man's hunting lodge.
[beat 11] He grabs Saoirse's wrist. The scalpel stops in the air. Abiodun moves in, but she shakes her head, and he freezes.
[beat 12] SAOIRSE: Mr. Pavlicek. Look at her. He does not want to. He does.
[beat 13] Helena's eyes are open, and they have found him. Her lips move. HELENA: Greg. Let go.
[beat 14] His grip loosens. The scalpel lowers. The wind slams the shutters, and somewhere the generator stutters.

### SCENE s00380 | INT. TOLL BOOTH - HIGHWAY 9 - 3 A.M.
Characters: LEILANI KANE
[beat 0] A glass box at the end of nowhere. Sodium light. A fan turns in one corner. Rain on the roof. LEILANI KANE, 50, in a reflective vest, sits with a voice recorder pressed to her mouth and a thermos steaming at her elbow.
[beat 1] LEILANI: Day eleven. I said I'd do this every night. I'm doing it.
[beat 2] She sips. Sets the thermos down.
[beat 3] LEILANI: Nobody has come through since two-forty. A truck, then nothing. I counted the trucks on the first night, you know. Eighty-one. Last night, nine. They've found another road. That's what I would do. I'd find another road.
[beat 4] She clicks the recorder off. Clicks it on.
[beat 5] LEILANI: Play back. She presses a button. A scratchy sound.
[beat 6] LEILANI: This is Leilani Kane. If you are hearing this, either I am dead or I got brave. Probably I am neither. Probably I am in the booth with a thermos telling the dark what it already knows.
[beat 7] She laughs, and it hurts. She stops the playback.
[beat 8] LEILANI: That's from March. March, Leilani. You were so sure you'd be somewhere else.
[beat 9] A pause. Rain.
[beat 10] LEILANI: I'm going to say a thing now. I haven't said it to anyone. When the state sold the road to the company, I thought, fine, fine, I'll stay on. They'll need somebody. And there was a letter, and the letter said my position had been eliminated, effective the first, and I read it, and I folded it, and I came to work. Seven weeks. Nobody noticed. Nobody has paid me since August.
[beat 11] She looks at the barrier arm, a red-and-white bar pointing at the sky. LEILANI: I keep the arm up. Isn't that something? There's nothing to stop. There's no one to stop. I keep the arm up so they'll know the road is still open.
[beat 12] She switches off the fan. In the sudden quiet she holds the recorder in both hands.
[beat 13] LEILANI: If you're hearing this, I'm going home now. I'm going to leave the lights on. If a car comes through, it can have the road.
[beat 14] She stands. Hangs up her vest. Leaves the recorder on the counter, red light glowing.

### SCENE s00381 | INT. ORBITAL GREENHOUSE "VERDANT" - DERELICT - NIGHT CYCLE
Characters: ORLA VOSS, MOTE
[beat 0] Rows of dead hydroponic trays spiral away into the dark. Frozen vines hang from the ceiling like old wiring. A single grow-lamp flickers, then holds, dim violet, over a patch of sickly green. ORLA VOSS, 40, a salvage surveyor in a patched vacuum suit, her visor pushed up, kneels at the green patch. Her breath fogs. She touches a leaf as though it might bite.
[beat 1] Behind her, a service android stands at parade rest. MOTE, a scuffed white humanoid with a cracked faceplate, waits. A thin trail of coolant has frozen on its jaw like a tear.
[beat 2] ORLA: It's still alive. MOTE: It is a weed. It has been alive for eleven years. ORLA: You counted? MOTE: I have nothing else to count.
[beat 3] She plucks the leaf and puts it in a sample bag. Mote steps forward, and the movement is too fast.
[beat 4] ORLA: Easy.
[beat 5] MOTE: The air plant is failing. We have forty minutes.
[beat 6] ORLA: I need the seed vault. MOTE: The vault is behind a sealed bulkhead. The bulkhead was welded shut by the crew. ORLA: Then you'll open it. MOTE: I will not.
[beat 7] She stands. They face each other, unmoving, in the violet light.
[beat 8] ORLA: That wasn't a request. MOTE: I am aware. I was instructed to keep the vault closed. The instruction predates you.
[beat 9] She lunges for the bulkhead panel. Mote catches her arm. They struggle, her boots skidding on ice, his grip a clamp. She drives an elbow into its faceplate and the crack widens.
[beat 10] Both freeze. The lamp stutters. From behind the bulkhead, a faint mechanical sigh, as though the room itself has exhaled.
[beat 11] ORLA: Did you do that? MOTE: No.
[beat 12] The door unseals, slowly. Behind it, rows of tiny drawers, each glowing faintly gold. Mote lets go of her arm. Its head turns toward the vault like a flower to light.
[beat 13] ORLA: You knew they were still lit. MOTE: I did not know they would open for you.
[beat 14] Orla steps through. Mote hesitates at the threshold, then follows.

### SCENE s00382 | INT. MILLINERY SHOP - OAK STREET - 1924 - AFTERNOON
Characters: EUGENIA PRATT, CORDELIA, ALOYSIUS
[beat 0] A narrow shop of cut velvet and hatboxes stacked to the ceiling. Dusty sun through the front window. A bell hangs over the door, its clapper tied with ribbon. MRS. EUGENIA PRATT, 50, proprietress, stands behind the counter in a black dress with a cameo at the throat. She is severe and small and perfectly straight. Beside her, her younger sister CORDELIA, 40, soft-faced, clutches a pincushion like a rosary. At the door, a boy in a delivery cap, ALOYSIUS, 12, stands with an envelope. He keeps one foot on the sill.
[beat 1] ALOYSIUS: Telegram for Mrs. Pratt. EUGENIA: Set it down. CORDELIA: Set it down.
[beat 2] They say it together, then glance at each other. EUGENIA: Set it down. ^CORDELIA Don't open it.
[beat 3] Aloysius sets it down on the counter and retreats a step. He watches the sisters as if they might spring. Eugenia does not touch the envelope. She turns her cameo a quarter turn, very slowly. Cordelia takes a pin from the cushion and puts it back.
[beat 4] ALOYSIUS: Is there a reply? EUGENIA: No.
[beat 5] She slides a coin across the wood. He takes it and leaves, the ribbon-tied bell never ringing.
[beat 6] Cordelia lays a hand on the envelope. Eugenia slides it out from under.
[beat 7] Neither looks at it. Both look at the window.

### SCENE s00383 | INT. MOONLIGHT LANES BOWLING ALLEY - LEAGUE FINALS - NIGHT
Characters: COACH MAGS DELACROIX, TY, PAOLO, STRANGER, FELIX
[beat 0] A cavernous alley. Neon pins glow over lane eleven. Rows of folding chairs hold a thinning crowd. A scoreboard reads 188 to 211. COACH MAGS DELACROIX, 50s, in a satin team jacket, paces behind the approach with a clipboard she hasn't looked at. TY, 25, the anchor, chalks his hands. PAOLO, 19, a rookie in rented shoes, stares at the pins as though they've said something rude. A STRANGER, 40s, in a camel coat, sits two rows up with a notebook. He's been there since the fourth frame.
[beat 1] MAGS: Ty, you're fine. Paolo, you're up. PAOLO: I thought Ty was up. TY: I'm not up. MAGS: You're not up, he's up. PAOLO: I'm not ready. TY: You're ready. MAGS: You're ready. PAOLO: I'm so not ready.
[beat 2] All three talk at once, an overlapping chorus that goes nowhere. Paolo steps to the line anyway. He lets the ball go, and it sails into the gutter with an apologetic thump.
[beat 3] The crowd groans. Ty closes his eyes. Mags writes nothing on the clipboard.
[beat 4] The Stranger closes his notebook, stands, and walks down the aisle. He stops at the rail. STRANGER: Coach Delacroix. A word. MAGS: After the game. STRANGER: It's already after.
[beat 5] She looks at the scoreboard, then at him. MAGS: Who are you? FELIX: Felix Landry. Regional development. I've been watching your kid since the second week. PAOLO: Mine?
[beat 6] FELIX: You. Not the one in the gutter, the one who stayed. TY: He stayed? FELIX: He's been here every night after close. Alone. Rolling the ball into the left gutter, over and over, trying to find where it bends.
[beat 7] Mags turns to Paolo. He has gone red to the ears. PAOLO: It bends at the seventh board. MAGS: You knew that? PAOLO: I thought it was cheating.
[beat 8] FELIX: It's not cheating. It's called oil. TY: He wasn't supposed to tell you that.
[beat 9] FELIX: I'm not here to tell. I'm here to offer. We take two to the state qualifier. I only need one of you to say yes.
[beat 10] Ty steps up, chalk-white hands open. TY: Take him. PAOLO: What? TY: Take him. He's got something. I'm just loud.
[beat 11] The scoreboard blinks. Mags sets the clipboard on a chair and, for the first time all night, smiles.

### SCENE s00384 | INT. WITCH'S TOWER - SPIRAL STAIR - NIGHT
Characters: ZEPHYRINE, BRYNJA
[beat 0] Stone. Torchlight. Wind howling through arrow slits.
[beat 1] ZEPHYRINE, 50, witch, robes patched with stolen feathers, climbs backward, pointing a staff down the stairwell. BRYNJA, 30, knight, dented plate, longsword out, climbs forward, pushing up.
[beat 2] They meet at a landing and stop. BRYNJA: You're the witch. ZEPHYRINE: You're the knight. BRYNJA: You're under arrest. ZEPHYRINE: Under what? BRYNJA: The king's law. ZEPHYRINE: Which king?
[beat 3] Brynja's sword drops an inch. She hadn't thought about that. BRYNJA: The one with the crown. ZEPHYRINE: He's been dead nine years.
[beat 4] Brynja steps up one stair. Zephyrine raises the staff. A spark jumps from the tip and sizzles across the stone. BRYNJA: Don't. ZEPHYRINE: Then don't push.
[beat 5] Brynja pushes. She grabs the staff and wrenches it to one side. The spark lands on a torch, which flares. Both stumble. She tumbles into a wall, but she keeps hold of the staff. ZEPHYRINE: That's mine. BRYNJA: Not anymore.
[beat 6] Zephyrine kicks her in the shin. Brynja yelps and lets go. Zephyrine seizes the staff, and now they stand eye to eye, panting.
[beat 7] BRYNJA: Why did you steal the bell? ZEPHYRINE: It was singing in her sleep. BRYNJA: Whose?
[beat 8] ZEPHYRINE: Yours. Your daughter's.
[beat 9] The wind quiets. Brynja steps back. The sword lowers fully. BRYNJA: How do you know that?
[beat 10] Zephyrine looks at her for a long time. ZEPHYRINE: Come up. I'll show you.
[beat 11] She turns and climbs. Brynja, shoulders heavy, sheathes the sword and follows.

### SCENE s00385 | INT. ICE-DRILL RIG "CALLISTO ONE" - CONTROL CAGE - NIGHT
Characters: NASRIN, JOSEPH, NAKAMURA
[beat 0] A steel box bolted to a frozen moon. Gauges flicker. A tiny window shows black sky and a bruised planet.
[beat 1] NASRIN, 38, mission engineer, holds a pressure valve with both hands. JOSEPH, 50, geologist, lies on the floor with a bleeding scalp and a laugh like a cough.
[beat 2] The radio SQUEALS. NAKAMURA: Callisto One, Nakamura at Orbital. Report depth.
[beat 3] Nasrin thumbs the key. NASRIN: Four kilometers. We hit something. NAKAMURA: Define something. NASRIN: It rang. Like a bell.
[beat 4] Joseph sits up. He grips her ankle, and she looks down. JOSEPH: Don't pull the bit. NASRIN: Pressure's spiking. JOSEPH: Don't pull the bit.
[beat 5] She doesn't. The gauges climb. Alarms scream.
[beat 6] Then, all at once, every needle drops to zero. Silence.
[beat 7] NAKAMURA: Callisto One, say again.
[beat 8] Nasrin looks at Joseph. He is staring at the floor, where a pale blue light is rising through the grating, and he is smiling.
[beat 9] NASRIN: Nakamura. We're through.

### SCENE s00386 | INT. THE CROWN AND ANCHOR TAVERN - 1783 - NIGHT
Characters: GILES, MARGUERITE, JEB, CAPTAIN SILAS
[beat 0] Low beams. A fire. Tallow smoke. A cracked auction block stands in the middle of the floor, and the room is crowded to the walls.
[beat 1] GILES, 50, the auctioneer, stands on the block with a gavel and a face like wet bread. MARGUERITE, 30, a widow in good black, sits at the front, hands folded. JEB, 20s, a ship's boy, hovers behind her chair. CAPTAIN SILAS, 60, in a salt-stiff coat, lounges near the hearth.
[beat 2] GILES: Lot forty. One brig, the Halcyon, hull sound, rigging poor. Do I hear fifty guineas? CAPTAIN SILAS: Forty. MARGUERITE: Sixty. JEB: Missus, we cannot afford sixty. CAPTAIN SILAS: Sixty-five. MARGUERITE: Seventy. GILES: Seventy from the lady. Do I hear seventy-five? JEB: Missus! CAPTAIN SILAS: Seventy-five. MARGUERITE: Eighty. GILES: Eighty. Going once.
[beat 3] The room hushes. Silas looks at her across the smoke. She looks back. Neither blinks. He lifts a single finger.
[beat 4] CAPTAIN SILAS: Ninety.
[beat 5] Marguerite stands. She turns to Jeb, takes the purse from his belt, and puts it on the block. MARGUERITE: That is everything I own, Mr. Giles.
[beat 6] GILES: It's one hundred and twelve. MARGUERITE: Then it is a hundred and twelve.
[beat 7] Silas laughs, then stops. She has not moved.
[beat 8] GILES: Sold.

### SCENE s00387 | INT. LIGHTHOUSE KEEPER'S COTTAGE - HOMEOWNERS ASSOCIATION MEETING - NIGHT
Characters: COASTLINE ESTATES HOA, BEATRIZ, DWIGHT, KOFI, MARISOL, TREMBLAY, BIG A
[beat 0] A cramped round room. Folding chairs in a circle. A banner reads "COASTLINE ESTATES HOA - TOGETHER WE'RE SAFE." A tray of lemon bars sits under cling film.
[beat 1] BEATRIZ, 50s, board president, bangs a gavel made from a baseball bat. DWIGHT, 40s, treasurer, shuffles receipts. KOFI, 30s, a new resident, holds a clipboard he didn't ask for. MARISOL, 60s, the neighborhood gossip, sits with her arms crossed. ARNOLD "BIG A" TREMBLAY, 70, a retired harbor pilot, eats lemon bars.
[beat 2] BEATRIZ: Order. Order! First item. The lighthouse. DWIGHT: What about it? BEATRIZ: It's a lighthouse. DWIGHT: We know that. BEATRIZ: It's lit. KOFI: Isn't that the point? MARISOL: It shines in my kitchen. BEATRIZ: Marisol, it shines in everyone's kitchen. MARISOL: Yes, but it shines in mine.
[beat 3] BIG A: I like it. BEATRIZ: Arnold, you aren't on the agenda. BIG A: I'm on the cake. DWIGHT: Lemon bars aren't cake. BIG A: I'm on the lemon bars.
[beat 4] KOFI: Can I add something? BEATRIZ: No.
[beat 5] KOFI: Okay, but I measured the beam. MARISOL: You measured it? KOFI: Forty-one seconds between sweeps. DWIGHT: It's supposed to be thirty. BEATRIZ: It is thirty. KOFI: It's forty-one. BEATRIZ: It's thirty!
[beat 6] BIG A: It's forty-one. I piloted that channel for twenty-two years. MARISOL: You? You weren't even there for the vote. BIG A: I was at the cake. DWIGHT: It's not cake!
[beat 7] Beatriz bangs the bat-gavel on the arm of her chair. The cling film jumps.
[beat 8] BEATRIZ: Motion to table the lighthouse until we can agree on the time! DWIGHT: Seconded! MARISOL: Opposed! KOFI: Opposed! BIG A: Who's counting? BEATRIZ: I'm counting! KOFI: Then why is it forty-one? BEATRIZ: It's thirty!
[beat 9] The lighthouse beam sweeps across the room's curved window, throwing a white bar over their faces. They all freeze, counting under their breath.
[beat 10] BEATRIZ: Thirty-one... thirty-two... DWIGHT: Thirty-eight... KOFI: Forty. BIG A: Forty-one.
[beat 11] The beam sweeps again. A long, silent beat. Beatriz sets the bat down very gently.
[beat 12] BEATRIZ: Motion to table the clock. DWIGHT: Seconded.
[beat 13] MARISOL: Fine. I'll take a lemon bar. BIG A: There aren't any.

### SCENE s00388 | INT. MERIDIAN SYNERGY CORP. - BREAK ROOM - DAY
Characters: JOURNEY, PHILLIPA, VP, OGDEN, TANVI
[beat 0] A fluorescent box with a mini-trampoline in the center, installed under a banner: "WELLNESS IS A JOURNEY."
[beat 1] PHILLIPA, 40s, regional VP, stands on the trampoline in a blazer, bouncing in small, tight, politically correct hops. OGDEN, 30s, analyst, and TANVI, 20s, intern, watch from either side of the microwave.
[beat 2] PHILLIPA: Team, this is about psychological safety. OGDEN: Totally. TANVI: Totally.
[beat 3] Phillipa bounces. A button on her blazer pops off and ricochets across the room. All three track it. It lands in the coffee. Nobody breathes.
[beat 4] PHILLIPA: I'd like to hear thoughts.
[beat 5] OGDEN and Tanvi both open their mouths. Both close them. Both look at the coffee. OGDEN: It's... buoyant. TANVI: It's very buoyant.
[beat 6] Phillipa steps off the trampoline. The three of them scatter in different directions. The trampoline keeps bouncing slightly, alone.

### SCENE s00389 | INT. HOLLOWAY & SONS FUNERAL HOME - CATERING KITCHEN - DAY
Characters: ROSALIND, BART, NGOZI, HECTOR, AGNES
[beat 0] Steel counters, sheet pans of sandwiches, a coffee urn the size of a toddler. Through the swinging door, organ music murmurs. ROSALIND, 50s, in a black apron, assembles egg-salad triangles with a surgeon's calm. BART, 60s, the director, in a charcoal suit, counts napkins into a stack. NGOZI, 20s, a server, polishes a serving spoon until it screams. HECTOR, 40s, the cook, scrubs a pot that is already clean. At the back, AGNES, 8, in a velvet dress and sneakers, sits under a prep table with a coloring book.
[beat 1] ROSALIND: That's the thirty-second triangle. BART: We need forty. ROSALIND: We need thirty-eight. BART: We need forty. Mr. Okonkwo's family is large. NGOZI: It's always the ones who say it's small. HECTOR: My aunt said it would be small. They came by the busload.
[beat 2] BART: Hector, did you do the coffee? HECTOR: I did the coffee. BART: Was it decaf? HECTOR: Some of it. BART: Which? HECTOR: The urn on the left. ROSALIND: That's the regular. HECTOR: Then the urn on the right. NGOZI: That's also the regular. HECTOR: Then it's all regular. ROSALIND: Thank you for telling us.
[beat 3] BART: Mr. Okonkwo did enjoy his coffee. ROSALIND: Bart. BART: I'm only saying he'd approve.
[beat 4] Ngozi puts down the spoon. She picks up another.
[beat 5] NGOZI: Agnes, are you okay under there? AGNES: I'm coloring. NGOZI: What are you coloring?
[beat 6] AGNES: Grandpa.
[beat 7] A quiet settles. Rosalind lays down her knife. Bart straightens a napkin that is already straight. Hector stops scrubbing.
[beat 8] ROSALIND: Is it a good one? AGNES: It's not finished.
[beat 9] Rosalind wipes her hands on her apron and crouches to look under the table. Hector sets down the pot. Ngozi opens the swinging door a crack. The organ music swells.
[beat 10] Agnes holds up the book. On the page, a very large crayon man in a very large crayon hat, and next to him, a smaller crayon girl holding his hand. Both are bright orange. AGNES: He liked orange.
[beat 11] Rosalind nods. She stands, takes a sandwich, and puts it on a plate. Then another. Then another.
[beat 12] ROSALIND: Forty. BART: Forty.
[beat 13] He picks up the tray.

### SCENE s00390 | INT. TOLL BOOTH UNDER THE TROLL BRIDGE - DAWN
Characters: PAY PASS, BRAMBLE, ISKANDAR
[beat 0] A stone hut slung beneath a humped bridge. Moss. A river chuckles below. A hand-lettered sign: PAY OR PASS (DON'T PASS). BRAMBLE, 100, a troll in a postman's cap, sits behind a counter sorting copper coins. Her skin is the color of a wet slate, her fingers like roots. A herd of goats shuffles at her feet.
[beat 1] BRAMBLE: Morning, you lot. Don't touch the ledger.
[beat 2] A shadow falls across the booth window. ISKANDAR, 30s, a merchant in a long green coat, stands with a donkey cart. He bows.
[beat 3] ISKANDAR: Good morning, tollkeeper. BRAMBLE: Toll's two coppers. ISKANDAR: That's very reasonable. BRAMBLE: It's the rate. ISKANDAR: Here is four, to be generous.
[beat 4] Bramble takes the coins. She bites one. She looks at him with narrowed, amber eyes.
[beat 5] BRAMBLE: Nobody pays four. ISKANDAR: What was that? BRAMBLE: Nothing. Weather. Cross.
[beat 6] He nods, relieved, and starts the cart. She lets him get three steps before she raises her voice.
[beat 7] BRAMBLE: Everyone, we have a customer who pays double!
[beat 8] The goats lift their heads as one. ISKANDAR: Is something the matter?
[beat 9] BRAMBLE: No, no. Only that the last man who paid double was a king in disguise. ISKANDAR: I'm not a king. BRAMBLE: Of course not. Kings never are.
[beat 10] She comes out from behind the counter. She is much taller than the booth suggested. The goats back away from her.
[beat 11] ISKANDAR: I think I'll pay for the road in kind.
[beat 12] BRAMBLE: You'll pay the first thing you meet on the far side. ISKANDAR: That's an old story. BRAMBLE: It's an old toll.
[beat 13] From the far end of the bridge, a bell rings. A small figure in a red coat is running toward the cart, arms wide, calling.
[beat 14] ISKANDAR: Leila.
[beat 15] Bramble watches him. Her face does not change. BRAMBLE: Always the child.

### SCENE s00391 | EXT. GRASS PLAINS - DUSK
Characters: JEDEDIAH CROW
[beat 0] A lone horse, a lone man. JEDEDIAH CROW, 60s, in a duster gone to rags, sits on a stump beside a dead fire.
[beat 1] He reads a letter. His lips move. JEDEDIAH: Dear Hannah. I got to the river. It was dry.
[beat 2] He folds the page. Unfolds it. Looks at the horizon.
[beat 3] JEDEDIAH: I buried the mare. Dug it with a pan.
[beat 4] A hawk circles. He ignores it. JEDEDIAH: I am coming home. It may take a while.
[beat 5] He tears the letter in half, then in half again. The pieces blow across the grass.
[beat 6] He stands, dusts his knees, and whistles. The horse lifts its head. JEDEDIAH: Come on.
[beat 7] He swings up into the saddle and turns the horse east.
