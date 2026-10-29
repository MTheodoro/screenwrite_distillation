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
Write the scenes as JSON Lines (one object per line) in THREE files with the Write tool: scenes 1-30 to /home/user/screenwrite-analyzers/data/analyzers/labels/desc/part_001_a.jsonl, 31-60 to /home/user/screenwrite-analyzers/data/analyzers/labels/desc/part_001_b.jsonl, the rest to /home/user/screenwrite-analyzers/data/analyzers/labels/desc/part_001_c.jsonl. No other text in the files. Reply only with "done N".

## Scenes

### SCENE s00115 | INT. MOUNTAIN SKI-LIFT CHALET - NIGHT
Characters: ADELINA RUSSO-OKAFOR, HOLDEN MBEKI-FALK, ROSEMARY PLUMMER-ASANTE, TEODORO BRANDT-NWOSU, MAN IN A GREY COAT, GREY COAT, CALLUM
[beat 0] A pine-paneled lodge, snow banked against the windows. Fire in a stone hearth. A cracked leather sofa, a bar of antlers, a pot of mulled wine on the stove.
[beat 1] Five people. One is a stranger. ADELINA RUSSO-OKAFOR (30s, red scarf, cheeks wind-burned) kneels at the hearth, feeding the fire. HOLDEN MBEKI-FALK (30s, ski patrol jacket, radio at his shoulder) paces by the window. ROSEMARY PLUMMER-ASANTE (60s, lodge owner, tartan apron) ladles wine into mugs. TEODORO BRANDT-NWOSU (20s, snowboarder, one arm in a sling) sprawls on the sofa. And near the door, dripping, stands a MAN IN A GREY COAT (40s, no hat, snow in his eyebrows) who arrived ten minutes ago and has not given a name.
[beat 2] ROSEMARY: Wine, love? MAN IN A GREY COAT: Thank you. He takes it. Does not drink. Adelina watches him over her shoulder.
[beat 3] ADELINA: Where did you come from? MAN IN A GREY COAT: Down the mountain. ADELINA: The lift's been closed for hours. MAN IN A GREY COAT: I walked. HOLDEN: In this? MAN IN A GREY COAT: It wasn't so bad. Teodoro whistles. Rosemary exchanges a look with Holden.
[beat 4] ROSEMARY: You'll be wanting a room. MAN IN A GREY COAT: No. I'm only waiting. HOLDEN: For what? MAN IN A GREY COAT: For her. He nods at Adelina. She goes very still. The fire pops.
[beat 5] ADELINA: I don't know you. MAN IN A GREY COAT: No. ADELINA: Then why-- MAN IN A GREY COAT: I knew your sister.
[beat 6] Silence. Rosemary lowers the ladle. Teodoro sits up. Holden's hand finds his radio. ADELINA: My sister died in the spring. MAN IN A GREY COAT: I know. I was there.
[beat 7] Adelina stands, slowly. Her scarf slides from her shoulders. Holden steps between them, not hostile, but ready. HOLDEN: Sir, maybe you should sit down. MAN IN A GREY COAT: Of course. He sits on the arm of the sofa. Teodoro shifts to make room, then thinks better of it and shifts back.
[beat 8] ADELINA: Say your name. MAN IN A GREY COAT: Callum. ADELINA: Callum. CALLUM: She talked about you. Every day. ADELINA: That's not possible. CALLUM: She called you her lighthouse.
[beat 9] Adelina closes her eyes. The room holds its breath. Rosemary crosses herself. Holden's hand drops from the radio.
[beat 10] CALLUM: She wanted you to have this. He reaches into his coat and takes out a small, flat parcel wrapped in brown paper, tied with string. He holds it out. For a long moment, she doesn't take it.
[beat 11] Then she does.

### SCENE s00116 | EXT. FIELD KITCHEN - FORWARD CAMP - DAWN
Characters: SERGEANT WILHELMINA OKORO-BRANDT, PRIVATE LEOPOLDO ESCOBAR-TANAKA, CORPORAL ABEBE TEKLE-NORDSTROM
[beat 0] A canvas lean-to against a ruined stone wall. A cauldron simmers over a fire. Mud, mist, and the distant percussion of artillery that has gone on so long it has become weather.
[beat 1] SERGEANT WILHELMINA OKORO-BRANDT (40s, flour on her sleeves) stirs a pot with a wooden paddle. PRIVATE LEOPOLDO ESCOBAR-TANAKA (19, helmet pushed back, mud to the knee) sits on an upturned bucket peeling potatoes. CORPORAL ABEBE TEKLE-NORDSTROM (30s, bandaged hand, cigarette behind one ear) leans on the wall with a tin cup.
[beat 2] Nobody speaks. A shell lands, far off. The pot shivers.
[beat 3] OKORO-BRANDT: More salt. ESCOBAR-TANAKA: We're out. OKORO-BRANDT: Then less water. ESCOBAR-TANAKA: We're out of that too.
[beat 4] She keeps stirring. Tekle-Nordstrom takes the cigarette from behind his ear, looks at it, puts it back. TEKLE-NORDSTROM: Rumor says the line moves tomorrow. OKORO-BRANDT: Rumor says. TEKLE-NORDSTROM: You don't believe it? OKORO-BRANDT: I believe the potatoes.
[beat 5] Escobar-Tanaka drops a peel into a bucket. Picks up another potato. Does not peel it. ESCOBAR-TANAKA: Sergeant. OKORO-BRANDT: Private. ESCOBAR-TANAKA: Is it all right if I write home? OKORO-BRANDT: You may. ESCOBAR-TANAKA: What do I say? OKORO-BRANDT: That the soup's good. ESCOBAR-TANAKA: Is it?
[beat 6] She tastes from the paddle. Chews. Considers. OKORO-BRANDT: No.
[beat 7] Tekle-Nordstrom laughs once, quietly, into his cup. Escobar-Tanaka looks from one to the other and smiles for the first time in days. She hands him a bowl. OKORO-BRANDT: Eat.
[beat 8] He eats. A shell lands, closer. The pot rattles. Nobody looks up.

### SCENE s00117 | INT. GRAND HOTEL ICE-SCULPTURE WORKSHOP - NIGHT
Characters: FELICITY AMADI-STR, BARNABAS OKONKWO-REYES, DESMOND ACHEBE-LINDGREN
[beat 0] A walk-in freezer converted to a studio. Frost on every surface. A half-carved swan stands on a plinth, a chainsaw hangs from a hook, and a work lamp throws a cold blue circle on the floor.
[beat 1] FELICITY AMADI-STRÖM (30s, parka, ski goggles) crouches at the base of the swan, a chisel in her glove. BARNABAS OKONKWO-REYES (40s, wool hat, breath fogging) holds the lamp steady. They work in silence, whispering only when necessary.
[beat 2] FELICITY: Left a bit. BARNABAS: This is left. FELICITY: Your left. BARNABAS: It's my left. FELICITY: Mine, then. He sighs. Shifts the lamp.
[beat 3] The beam slides across the ice, and inside the swan's translucent belly, a dark shape appears. FELICITY: There. BARNABAS: You're sure? FELICITY: Fifteen pounds of platinum. Frozen in solid. BARNABAS: Why would anyone put it in a swan? FELICITY: Because no one chisels a swan. BARNABAS: We're chiseling a swan. FELICITY: We're not anyone.
[beat 4] She taps the ice with the chisel. A crack travels along the neck. Barnabas winces. BARNABAS: Careful. FELICITY: It's only a swan. BARNABAS: It's a swan worth four thousand dollars, and the gala is tomorrow. FELICITY: Then we'll leave them a duck.
[beat 5] The freezer door clanks. They freeze.
[beat 6] A figure enters. DESMOND ACHEBE-LINDGREN (50s, executive chef, whites under a long coat) stops just inside, studying the swan, then them. DESMOND: Evening. FELICITY: Evening, Chef. BARNABAS: We were just finishing. DESMOND: At two a.m.? FELICITY: Inspiration. DESMOND: It is a very good swan. BARNABAS: Thank you. DESMOND: It would be a better swan with its belly intact.
[beat 7] A pause. Desmond crosses to the chainsaw and lifts it off the hook, casually, like a man picking up a ladle. FELICITY: Chef, we can explain. DESMOND: I would hope so. BARNABAS: It was Felicity's idea. FELICITY: It was not!
[beat 8] DESMOND: It was mine, actually. They stare at him. DESMOND: I froze the platinum in. Sixteen years ago. You are both very late.
[beat 9] He smiles, a long, slow, wolfish smile, and pulls the cord. The chainsaw roars. Felicity and Barnabas leap backward, and the swan, quivering, begins to crack from the neck down.

### SCENE s00118 | INT. APOTHECARY SHOP - EVENING - 1794
Characters: MASTER EZEKIEL ARTHURSEN-OKAFOR, YOUNG PHILIPPA BRANDT-NWOSU, MADAME ODETTE LACROIX-ADEYEMI, CONSTABLE HENDRICK VAN DER MEER-OLUWA, MADAME LACROIX
[beat 0] Shelves of blue glass bottles. Dried herbs hang from the rafters. A brass scale. Low light from a single oil lamp, and a wet street beyond the bowed windows.
[beat 1] MASTER EZEKIEL ARTHURSEN-OKAFOR, the apothecary, grinds powder in a mortar behind the counter. He is stout and gentle, with spectacles pushed up on his forehead. His apprentice, YOUNG PHILIPPA BRANDT-NWOSU, no more than sixteen, sweeps the floor. At a small table by the window, MADAME ODETTE LACROIX-ADEYEMI, a widow in black silk, sits with a cup of tea she has not touched. And by the door, snow on his hat, stands CONSTABLE HENDRICK VAN DER MEER-OLUWA, huge and slow, a lantern at his belt.
[beat 2] He nods to the apothecary. The apothecary nods back. EZEKIEL: Constable. HENDRICK: Master Arthursen. EZEKIEL: Tea? HENDRICK: Thank you, no.
[beat 3] He remains by the door. Philippa sweeps around his boots. Madame Lacroix stirs her cup, the spoon clinking against the china. EZEKIEL: You are out late. HENDRICK: It's a cold night. EZEKIEL: It is.
[beat 4] HENDRICK: There was a death on Pearl Street. Ezekiel does not stop grinding. Philippa's broom pauses a fraction of a second, then continues. EZEKIEL: Terrible. HENDRICK: A gentleman. Sixty years. Found in his chair. EZEKIEL: Terrible. HENDRICK: His wife says he took a draught for the cough.
[beat 5] Ezekiel sets the pestle down. EZEKIEL: Many do. HENDRICK: From this shop. Madame Lacroix lifts her gaze from the cup. Her eyes find the constable, then the apothecary, then the floor. Ezekiel wipes his hands on his apron. EZEKIEL: I make no poisons, Constable. HENDRICK: I did not say poison.
[beat 6] A pause. The lamp flickers. Philippa stands completely still. Madame Lacroix sets the cup on its saucer, with extraordinary gentleness.
[beat 7] MADAME LACROIX: I believe I can help. HENDRICK: Madame? MADAME LACROIX: It was my husband.
[beat 8] Hendrick turns, slowly. Ezekiel stops breathing. Philippa lets the broom fall. MADAME LACROIX: The draught was mine. I mixed it. I brought him the cup. HENDRICK: Madame, you cannot-- MADAME LACROIX: I can. I did.
[beat 9] She rises, smooths her black silk, and crosses to the constable. She offers him her wrists. He looks at them. He does not take them. HENDRICK: I should like to hear why. MADAME LACROIX: You would not. HENDRICK: Try me.
[beat 10] She considers. Then she sits again. The constable removes his hat. Ezekiel pours two cups of tea. In the corner, Philippa picks up the broom, and under the old oil lamp, with the snow falling in the street outside, the widow begins to speak.

### SCENE s00119 | INT. BAKERY DELIVERY TRUCK - CARGO AREA - PRE-DAWN
Characters: MARI, BENNETT-OKORO, HECTOR DELACROIX-ASANTE, PRIYA RAMASWAMY-LINDQVIST, THE STRANGER, JULIAN
[beat 0] Steel racks of bread trays. Flour hangs in the air. A single dome light. The truck rocks gently over a country road.
[beat 1] Three crew members and a stranger sit among the loaves. MARISOL "MARI" BENNETT-OKORO (30s, flour-dusted overalls, driver's cap) kneels in the aisle with a wrench. HECTOR DELACROIX-ASANTE (40s, forearms like hams, a neat moustache) sorts baguettes into bags. PRIYA RAMASWAMY-LINDQVIST (20s, hairnet, earbuds) counts a stack of invoices. And in the corner, wedged between two racks with a bakery apron over his suit, sits THE STRANGER (50s, polished shoes, a briefcase handcuffed to his wrist).
[beat 2] MARI: Radio check. PRIYA: One. HECTOR: Two. MARI: Three. Stranger? THE STRANGER: I'm not on the radio. MARI: You're on now. THE STRANGER: I'm a delivery. HECTOR: Pastry delivery. THE STRANGER: Very funny.
[beat 3] He tugs at the handcuff. It doesn't give. Priya pulls out an earbud. PRIYA: How long do we hold him? MARI: Until the bank opens. PRIYA: That's four hours. MARI: So we'll have fresh bread.
[beat 4] Hector chuckles. The truck turns onto gravel. Loaves shift. The stranger lowers his head.
[beat 5] THE STRANGER: You know I can pay. HECTOR: Everybody can pay. THE STRANGER: Double what they're giving you. MARI: That's what they all say. PRIYA: Is it a lot? MARI: Not enough.
[beat 6] Hector pushes aside a tray to reach the stranger's briefcase. The man jerks it away. Hector slaps the man's wrist, once, and the case springs open. Inside, a silver dossier. Hector flips it open. HECTOR: Mari. MARI: What. HECTOR: His name is Julian Ashworth-Mbeki.
[beat 7] Marisol freezes. Priya drops her invoices. The stranger lifts his chin. His face, in the dome light, is perfectly composed. JULIAN: That is my name. MARI: You're the auditor. JULIAN: I am.
[beat 8] MARI: Hector, we grabbed the wrong man. HECTOR: We grabbed the right man. PRIYA: He's the auditor! HECTOR: The auditor with the files.
[beat 9] They look at each other. Julian smiles. The truck bounces over a pothole and a tray of croissants slides off its rack and scatters across the floor. JULIAN: Well. Shall we eat?

### SCENE s00120 | INT. FUNICULAR STATION - OPERATOR'S BOOTH - NIGHT
Characters: ODALYS VANTERPOOL
[beat 0] Sodium light. Rain on tin. A brass lever the size of a forearm.
[beat 1] ODALYS VANTERPOOL, 40s, wet wool coat, hair pinned too tight. She has a cassette recorder. She sets it on the control desk.
[beat 2] Presses PLAY. ODALYS: If you're hearing this, I'm already on the car. ODALYS: I know. ODALYS: Don't talk to the tape, Odalys. You hate it when people talk to the tape. ODALYS: Then stop being so sure of me.
[beat 3] ODALYS: Three days. That's how long I watched the ledger. Three days of numbers that didn't breathe right. ODALYS: You said nobody would check the cable inspections. ODALYS: Nobody did. That was the point. Brakes on the upper car were signed off in March. By a man who died in January. ODALYS: Say it plainer. ODALYS: The upper car won't hold on the grade. Not with a full load. Not tonight. ODALYS: There's no load. It's midnight. ODALYS: There's a load. Look at the window.
[beat 4] She doesn't look. ODALYS: I'm not looking. ODALYS: Look.
[beat 5] Lights. Halfway up the mountain. A car, lit yellow, climbing.
[beat 6] ODALYS: Who's on it? ODALYS: The board. All nine. The anniversary ride. You booked it. ODALYS: I booked it. ODALYS: You booked it so I couldn't stop it.
[beat 7] Her hand finds the lever. Cold brass. ODALYS: Then why leave a tape? ODALYS: Because you'll want to pull it. And you'll want to know why you didn't.
[beat 8] Silence. The tape hisses. Rain.
[beat 9] The car crests the grade. ODALYS: Forgive me.
[beat 10] She pulls the lever.
[beat 11] A shriek of steel from the dark. Then a flash, white, enormous, the whole mountain jumping.
[beat 12] The window blows in.

### SCENE s00121 | INT. DRIVE-IN PROJECTION BOOTH - NIGHT
Characters: PIA CALLOWAY, WENDELL OYELARAN, INTERCOM, MRS. DUBOIS
[beat 0] A cramped room of hot metal and film smell. Two projectors rattle in unison, throwing twin beams through small square windows.
[beat 1] PIA CALLOWAY, 16, in her father's oversized work shirt, threads a reel with quick, careful hands. Beside her, WENDELL OYELARAN, 17, holds a flashlight and a paper sack of popcorn he has no intention of sharing.
[beat 2] He peers over her shoulder. She swats him away without looking. WENDELL: You're holding it wrong. PIA: I've held it a hundred times. WENDELL: Holding it wrong a hundred times.
[beat 3] She grins in spite of herself, then locks the gate. The projector sings. A faint cheer drifts up from the cars below.
[beat 4] An INTERCOM crackles on the wall. MRS. DUBOIS: Pia, honey, reel two's late. Cars are honking. PIA: Coming up, Mrs. Dubois. Ninety seconds. MRS. DUBOIS: Ninety seconds is how long the Hendersons will wait before they ask for their dollar back.
[beat 5] She lets go of the button and turns, flustered. He is already holding out the second reel like a dinner plate. WENDELL: Ninety seconds. I'll count. PIA: You'll count wrong. WENDELL: Then count with me.
[beat 6] She takes the reel. He leans in, shoulder to shoulder, so close their flashlights tangle. She does not move away. PIA: Wend. If this goes wrong, my dad will fire me. WENDELL: It's your dad's booth. PIA: That's why.
[beat 7] Together they thread. The leader slips through the rollers, sprockets bite, and she tightens her jaw and he quiets his breathing, both of them staring at the same sliver of film. MRS. DUBOIS: Sixty seconds. PIA: We know! WENDELL: We know!
[beat 8] The changeover cue flashes in the corner of the screen. She thumbs the switch. The first projector dies. The second blazes.
[beat 9] Below, the cars cheer. She exhales. He laughs. They stand there, shaking, two kids on top of the world. WENDELL: Best job in the county. PIA: Worst pay. WENDELL: Best view.
[beat 10] She looks at him. He is looking at the screen. On the glass, the light of the film flickers across both faces.

### SCENE s00122 | INT. COUNTY RECORDS BASEMENT - DAY
Characters: JUDGE ILSA BRANDVOLD, ATTORNEY RAJESH PILLAY, CLERK FERGUS MBEKI, ATTORNEY LOUISE ARCENEAUX
[beat 0] Steel shelving in grey rows. A single folding table has been set under a humming fluorescent tube. Dust hangs in the light like flour.
[beat 1] JUDGE ILSA BRANDVOLD, 60s, reading glasses on a chain, sits at the head of the table with a legal pad. Across from her, ATTORNEY RAJESH PILLAY, 40s, rumpled suit, pulls a banker's box toward him and lifts the lid. At the far end, CLERK FERGUS MBEKI, 20s, bow tie, sorts folders into piles while ATTORNEY LOUISE ARCENEAUX, 50s, crisp navy blazer, pretends not to watch the box and instead straightens her pen, then her water glass, then her notes, then glances at Pillay, who pays her no mind and hums as he unfolds a brittle deed.
[beat 2] BRANDVOLD: We are on the record. Counsel, you said there was a discrepancy in the plat. PILLAY: There is a lot line, Your Honor, that appears on the 1962 survey and not on the 1974 survey. ARCENEAUX: Which is irrelevant, as the 1974 survey supersedes. PILLAY: Unless the 1974 survey was never recorded.
[beat 3] Mbeki stops sorting. He checks a ledger, runs a finger down a column, then looks up with the slow expression of a man who has found something unwelcome. MBEKI: It was recorded, Judge. In the wrong book. BRANDVOLD: The wrong book. MBEKI: Deed book instead of plat book. Somebody misfiled it fifty years ago.
[beat 4] Arceneaux sets down her pen. Pillay finally smiles, folds the deed back along its crease, and slides it across the table toward the judge while Brandvold removes her glasses, polishes them on her sleeve, replaces them, and reads, and Mbeki hovers behind her with the ledger open, and Arceneaux leans to see. ARCENEAUX: That's a clerical error. It doesn't alter the legal effect. PILLAY: It alters the date.
[beat 5] BRANDVOLD: Mr. Mbeki, bring me the plat book. He crosses the room, hauls down a canvas-bound volume, wipes it with his cuff, and sets it before her. She turns pages, slowly, one at a time.
[beat 6] BRANDVOLD: We will be here a while. Would anyone like coffee? ARCENEAUX: Please. PILLAY: Black, thanks. Mbeki nods and heads for the stairs, already counting cups.

### SCENE s00123 | INT. BAKERY - PROOFING ROOM - NIGHT
Characters: NAOMI BETTENCOURT, LINNEA ASHWORTH
[beat 0] Warm, yeasty dark. Steel racks of dough rise under damp cloths. A single bulb burns over a flour-dusted table.
[beat 1] NAOMI BETTENCOURT, 30s, sleeves pushed to the elbow, shapes loaves with unhurried hands. Humming. At peace.
[beat 2] The back door scrapes. Cold air wedges in. NAOMI: You're early. A shape in the doorway, snow on her shoulders.
[beat 3] LINNEA ASHWORTH, 30s, long coat, a suitcase in one hand, steps into the light. Her face is thinner than Naomi remembers. LINNEA: I took the first train. NAOMI: You said Friday. LINNEA: It is Friday.
[beat 4] Naomi looks at the clock over the oven. 1:40 AM. She almost laughs. NAOMI: So it is.
[beat 5] She wipes her hands on her apron. She does not cross the room. Neither does Linnea. Between them, the racks tick softly as the dough breathes. LINNEA: You look well. NAOMI: I look like flour. LINNEA: That's what I meant.
[beat 6] Naomi smiles, finally, and gestures to a stool. Linnea sets down the suitcase and sits. She watches Naomi's hands work, the push, the fold, the turn. LINNEA: I thought about this room every night. NAOMI: I thought about you every night.
[beat 7] They speak at the same moment, quietly, a little afraid. NAOMI: I'm sorry I left. LINNEA: I'm sorry I left. Nobody moves. Then Naomi laughs, wet-eyed, and Linnea does too, and the tension breaks like crust.
[beat 8] NAOMI: Stay. Please. LINNEA: I can't promise. NAOMI: I'm not asking for a promise. Just the morning bake.
[beat 9] Linnea rises. She takes the other end of the table. She picks up a knife and starts scoring loaves, matching rhythm. For a time they work in easy silence.
[beat 10] Then Linnea sets down the knife. She slides her left hand into her coat pocket and withdraws a thin envelope, stamped with a hospital seal. LINNEA: Before the morning, I should show you this. Naomi looks at the seal. The humming in the room seems to stop. NAOMI: Linnea. LINNEA: Read it. Then decide about the bread.

### SCENE s00124 | INT. LAMPLIGHTERS' DEPOT - DAWN - 1887
Characters: HOBART PRYCE, TESS MALLORY
[beat 0] Brass poles hang from iron hooks. Ladders. Oil cans. A coke stove ticking.
[beat 1] HOBART PRYCE, 50s, ash-grey beard, sits on an overturned crate mending a wick-trimmer. Across from him, young TESS MALLORY, 19, boots too large, sorts spent matches into a tin. Neither speaks.
[beat 2] A church bell somewhere. Six strokes.
[beat 3] PRYCE: Poles. Tess lifts two from the rack. Hands one over. He tests the weight. Nods. PRYCE: Gaslight's out on Fenwick Row. TESS: Again? PRYCE: Again.
[beat 4] They pull on coats. Tess drops the tin. Matches scatter across the boards. They both kneel and snatch at them, knocking heads. TESS: Sorry. PRYCE: Mind the sulphur.
[beat 5] The door bangs open. Wind. Running feet outside. Both freeze, poles half raised. Silence. TESS: Dogs? PRYCE: Constables.
[beat 6] They glance at the window. Blue coats pass. The street goes quiet. Both exhale. PRYCE: They're after the Quigley lot. TESS: Not us. PRYCE: Never us. We carry fire. Nobody arrests the man with fire. He grins. She almost does.
[beat 7] They step into the street. The sky is the color of dishwater. Tess lifts her pole to the first lamp. Pryce lifts his to the second. Two small flames bloom in the grey.
[beat 8] TESS: Mr. Pryce? PRYCE: Aye. TESS: What happens when they light themselves? PRYCE: Then we find something else to carry. They move on up the row, side by side, one lamp, then the next.

### SCENE s00125 | INT. STORAGE UNIT 114 - NIGHT
Characters: STRANGER, BOY'S VOICE, DESMOND
[beat 0] Corrugated walls sweat in the heat. A bare bulb swings from a cord, painting the cartons and a rolled carpet in slow, nauseous arcs. Dust has settled on everything but the one thing that matters: a battered cassette recorder, its cover scarred with a boy's initials, sitting alone on an overturned milk crate as though somebody wanted it found.
[beat 1] A STRANGER, 40s, rain-dark coat, a crowbar hanging forgotten from his fist, stands over it. He crouches, the knees of his trousers dampening on the concrete, and turns the machine over in his hands, and the lid pops, and a tape inside spins as he presses PLAY with a thumb that has not decided whether to tremble.
[beat 2] BOY'S VOICE: This is Desmond Archer, age eleven, and if you found this, Dad's lock didn't hold.
[beat 3] The Stranger goes absolutely still. His breath catches, and in the pause between the tape's hiss and the next word, the bulb steadies, the carpet seems to exhale dust, and the crowbar slips from his hand and rings on the floor.
[beat 4] BOY'S VOICE: I put the key under the third brick. Take whatever's here. Just don't tell Mom. He slumps against the crate. DESMOND: Third brick.
[beat 5] He lifts a loose brick from the wall. Beneath it: a small brass key, bright as the day it was hidden.
[beat 6] He closes his fist around it, rises, and walks out into the rain.

### SCENE s00126 | INT. SKYLARK ROLLER RINK - AFTER HOURS
Characters: SLIM, DUBREUIL, MARISOL AGUILERA, BIG TEDDY KOWALSKI, MOUSE, PETROVA, DETECTIVE HARUKI SATO
[beat 0] Disco ball dead. Neon half-lit. The rink floor is a lacquered oval of scuffs. In the center, a card table. Five folding chairs. Five people. All in shoes, none on skates. CORNELIUS "SLIM" DUBREUIL, 60s, tall, silver pompadour, dinner jacket from another decade, deals cards like he is laying bricks. MARISOL AGUILERA, 30s, red lipstick, tailored black jumpsuit, counts chips without looking. BIG TEDDY KOWALSKI, 50s, shoulders like a vending machine, a toothpick in his teeth. "MOUSE" PETROVA, 20s, hood up, sneakers untied, fingers drumming the table. And DETECTIVE HARUKI SATO, 40s, plain suit, plain tie, wedding ring, a face that gives away nothing at all.
[beat 1] SLIM: Nobody leaves the table till the pot's been called. House rule. MARISOL: Since when does a roller rink have house rules? SLIM: Since I bought it, Marisol. BIG TEDDY: It's a good rink. Smells like feet and popcorn.
[beat 2] MOUSE: Smells like money. Slim, you cut the deck twice. SLIM: I cut it once, Mouse. Your eyes are tired. MOUSE: My eyes are fine. Haruki, what do you say? SATO: I say I came to play cards.
[beat 3] MARISOL: You came to listen, Haruki. We all know it. SATO: Marisol, if I wanted to listen, I'd have brought a wire. BIG TEDDY: Wire. Heh. SLIM: Ante up, children.
[beat 4] MOUSE: Slim, who's the sixth chair for? SLIM: There's no sixth chair. MOUSE: There's a chair. Right there. By the door. SLIM: That's a coat rack, Mouse. SATO: Mouse is right, Slim. That's a chair. BIG TEDDY: Why would there be a sixth chair, Slim?
[beat 5] SLIM: For whoever's coming to collect. MARISOL: Collect what?
[beat 6] SLIM: Teddy. Tell her. BIG TEDDY: Slim, I don't... SLIM: Tell her what you sold me. BIG TEDDY: Marisol, I never meant... MARISOL: Teddy.
[beat 7] BIG TEDDY: It was the Bay Street job. They knew the route. I gave them the route. MOUSE: Oh, no.
[beat 8] SATO: Nobody move.
[beat 9] The front doors of the rink swing wide. Light floods in.

### SCENE s00127 | EXT. HOT AIR BALLOON BASKET - 3,000 FEET - DAY
Characters: BARNABY CROOKE, LUCINDA FAIRWEATHER, DEZ, HALVORSEN, PRIYA
[beat 0] Five bodies in a wicker basket built for three. Clouds below. One propane tank. Zero grace.
[beat 1] BARNABY CROOKE: We're fine, we're fine, it's just wind. LUCINDA FAIRWEATHER: It's not wind, Barnaby, it's your weight! DEZ: Who packed the sandwiches? HALVORSEN: We're descending. We are definitely descending. BARNABY CROOKE: We are not descending, we are... LUCINDA FAIRWEATHER: Hover! The word is hover!
[beat 2] PRIYA: Nobody touches the burner! I mean it! DEZ: I just asked about sandwiches!
[beat 3] HALVORSEN: Priya, the altimeter is spinning. PRIYA: It's supposed to spin! BARNABY CROOKE: It is not supposed to spin!
[beat 4] LUCINDA FAIRWEATHER: Oh my God, there's a cow. There's a cow, and it's getting bigger. DEZ: That's not a cow, that's a barn.
[beat 5] HALVORSEN: Everybody lean left! PRIYA: Left is the other left!
[beat 6] BARNABY CROOKE: I proposed to you at 3,000 feet, Lucinda, and you said yes! LUCINDA FAIRWEATHER: I said yes to a picnic!

### SCENE s00128 | INT. CURLING CLUB - DAWN
Characters: COACH GREER WALLENBERG, STRANGER, MARGIT
[beat 0] Empty ice, grey-blue under the rafters. A frost-fogged scoreboard. COACH GREER WALLENBERG, 50s, thermos in hand, walks the sheet checking pebble, shoulders tight, a man with a final tomorrow.
[beat 1] A STRANGER stands at the rail, an elderly woman in a green scarf, hands tucked in her sleeves. She has slipped in out of the cold.
[beat 2] He sees her. He stops. GREER: Rink's closed, ma'am. STRANGER: So is the door you came through.
[beat 3] He glances back. It is.
[beat 4] He turns again, wary, and she steps onto the ice in soft shoes, steady as if she has done it all her life. GREER: Who let you in? STRANGER: Nobody. I'm just early.
[beat 5] She stops beside a stone and nudges it with her toe. He bristles. GREER: That's the championship stone. STRANGER: It pulls left. You know it does. He says nothing. She smiles.
[beat 6] STRANGER: Margit Lindqvist. I won this club's first trophy in 1961. GREER: Greer. I coach the rink that wants the next one.
[beat 7] MARGIT: Then listen, Greer. You grind that stone on the left side, and your girls will thank you tomorrow.
[beat 8] He stares at her, then at the stone. He crouches, runs a thumb along the running band. A burr. Small. Real.
[beat 9] GREER: How did you know? MARGIT: It pulled left in 1961, too.
[beat 10] He looks up. She has already turned for the door, scarf trailing, leaving a line of small wet prints on the ice.

### SCENE s00129 | INT. ST. CASIMIR LANES - CONVERTED CHURCH - NIGHT
Characters: ROSALIND PARKHURST, DEACON PARKHURST, NADINE FOLASADE, GUS TREVELYAN
[beat 0] A nave of oiled maple lanes where the pews once stood. Stained glass glows behind the pin decks. The league scoreboard hangs where the crucifix used to be. Four men and women sit at the last lane in the last frame of the season. No one is cheering. The place is nearly empty. ROSALIND PARKHURST, 60s, cardigan, bowling shoes polished like church shoes, wipes her ball with a towel. Beside her, her son DEACON PARKHURST, 30s, sits with his elbows on his knees, staring at his phone without reading it. Across the lane sit their opponents. NADINE FOLASADE, 40s, braids tied back, rolls her shoulders. Next to her, an old man in a bowling shirt, GUS TREVELYAN, 70s, tape on two fingers, a cigarette unlit between them. The pin deck resets with a long mechanical groan.
[beat 1] ROSALIND: Your father used to say the pins knew. DEACON: Knew what? ROSALIND: Whether you wanted it.
[beat 2] Deacon puts the phone away. DEACON: Mom, it's a Tuesday. ROSALIND: It's the Tuesday.
[beat 3] Nadine gets up. Walks to the ball return. Picks up a green ball. Weighs it. Puts it back. Picks up a blue one.
[beat 4] NADINE: You boys have been on our lane too long. GUS: Twelve years. NADINE: Twelve years, and nobody has said a word. GUS: Because there was nothing to say. NADINE: There was plenty.
[beat 5] Deacon looks at his mother. Rosalind does not look at him. DEACON: Is there something I should know? ROSALIND: Take your turn. DEACON: I'm asking. ROSALIND: Take your turn, Deacon.
[beat 6] He stands. Picks his ball. Steps to the line. Pauses.
[beat 7] DEACON: Dad used to bring us here Sundays. GUS: Your dad used to bring a lot of people here Sundays.
[beat 8] Deacon turns. Nadine has gone very still. Rosalind has put the towel down.
[beat 9] ROSALIND: Gus. GUS: Might as well. Twelve years is long enough. NADINE: Don't.
[beat 10] GUS: Your father had two families, son. This lane was where they met without knowing. DEACON: Say that again. GUS: I've been polite twelve years. NADINE: Gus, shut your mouth. ROSALIND: He's not lying.
[beat 11] Deacon looks at the ball in his hands. His grip tightens. The leather creaks.
[beat 12] DEACON: Nadine? NADINE: Your father was my father too.
[beat 13] A long silence. Somewhere in the rafters a pigeon shifts.
[beat 14] Deacon sets the ball down. It rolls, slow, down the lane, crosses the arrows, kisses the head pin, and drops all ten.
[beat 15] Nobody looks at the scoreboard. ROSALIND: Strike. NADINE: Your game.
[beat 16] DEACON: Why tonight? GUS: Because it's the last frame, son. After tonight there's no lane to share.
[beat 17] Deacon walks away from the line. He passes his mother. He passes Nadine. He stops at the end of the lane, where the stained glass throws red light across his hands.
[beat 18] He picks up the blue ball. Holds it out to Nadine. DEACON: Roll one.
[beat 19] She hesitates. Then she takes it.

### SCENE s00130 | INT. MONASTERY BELL TOWER - DAWN
Characters: SERGEANT IGNATIUS OBUYA, PRIVATE TOBIAS WREN, STRANGER, ANSELM
[beat 0] Narrow stone stair, spiraling up into dark. At the top: a square chamber, open arches on four sides, a great bronze bell hanging dead still. Fog beyond the arches. Below, somewhere, artillery coughs. SERGEANT IGNATIUS OBUYA, 30s, mud to the knees, rifle slung, wedges himself behind a pillar. Behind him, PRIVATE TOBIAS WREN, 19, shaking hands, a field radio strapped to his back. A STRANGER crouches in the corner. Gaunt. Brown habit, rope belt, bare feet. He has been there all night.
[beat 1] OBUYA: Who's that? WREN: Monk, I think. OBUYA: You speak English? The Stranger nods, once. STRANGER: Some. Brother Anselm. OBUYA: Brother, you can't be up here. ANSELM: I have rung this bell every dawn for thirty years.
[beat 2] Another shell. The tower shudders. Dust falls.
[beat 3] WREN: Sarge, the ridge is full of them. OBUYA: Count. WREN: Forty. Fifty. OBUYA: Radio. Tell battalion we're in position.
[beat 4] Wren fumbles with the handset. Static. Nothing. WREN: Dead. OBUYA: Then we hold.
[beat 5] Anselm stands. He looks at Obuya. Points to the bell, then to himself. ANSELM: They will hear it. They always stop. OBUYA: Brother, if you ring that, they'll know exactly where we are. ANSELM: They know already.
[beat 6] He lifts the rope and tugs once. A single, enormous BONG. OBUYA: No!
[beat 7] Anselm rings it again. And again. The tower hums with it. Below, in the fog, the guns fall silent.
[beat 8] Wren stares through the arch. WREN: They're stopping. OBUYA: What? WREN: They're taking their hats off.
[beat 9] Obuya lowers his rifle. Anselm keeps ringing. Behind him, the sun breaks through the fog like a struck match.

### SCENE s00131 | INT. HOTEL SERVICE ELEVATOR - DAY
Characters: CHEF BASILE ORTEGA, SHANICE DORSEY, UNCLE VITO PALAZZO, DEV RAMASWAMY, TILDA BJORKLUND, BRIDE, MOIRA KENNEDY
[beat 0] A stainless box, too small. A three-tier wedding cake on a rolling cart takes up most of it. Six people squeeze around it. CHEF BASILE ORTEGA, 50s, apron, sweat. SHANICE DORSEY, 20s, bridal planner, clipboard. UNCLE VITO PALAZZO, 60s, tuxedo, too tight. DEV RAMASWAMY, 20s, the photographer, camera bag. TILDA BJORKLUND, 30s, bridesmaid in a puffy teal gown. And the BRIDE herself, MOIRA KENNEDY, 28, in a veil, eyes closed, breathing slow.
[beat 1] The elevator jolts. Stops. The lights flicker.
[beat 2] TILDA: Oh no. SHANICE: It's fine. It's a service elevator. They stall. BASILE: Stall! Cake, madame, is made of stall! VITO: Somebody push the button. DEV: I'm pushing it. SHANICE: Don't push it, it's the alarm. TILDA: Everything is the alarm!
[beat 3] MOIRA: Everybody stop. Nobody stops. BASILE: Fondant! The humidity! VITO: Is it hot in here? DEV: It's very hot in here. SHANICE: Please. Everyone please. TILDA: My dress is sticking to my... MOIRA: Everybody.
[beat 4] Dev leans on the wall. The cart rolls an inch. The cake sways. Everyone lunges at once. Basile catches the top tier. Vito catches Basile. Shanice catches Vito. Tilda catches Shanice's clipboard. The cake settles.
[beat 5] BASILE: Do not breathe! VITO: I'm not breathing. SHANICE: Can we call someone? TILDA: I have no signal! DEV: I have one bar. BASILE: Zero bars on the cake!
[beat 6] MOIRA: I'm leaving him. Silence. The cake swings.
[beat 7] TILDA: What? MOIRA: I'm leaving him. I've been thinking about it for three weeks, and I'm leaving him, and I'm doing it in the elevator. SHANICE: Moira, honey. VITO: Not on the cake.
[beat 8] The elevator lurches back to life. It rises. It dings. The doors open on a ballroom of two hundred guests, all of them turned to look.

### SCENE s00132 | INT. PLANETARIUM - CENTRAL DOME - NIGHT
Characters: PIP, ADEYEMI-LARKIN, SOUND, VOICE, MORDECAI ASHFORD-LUND
[beat 0] A great hemisphere of dark. In its middle, a squat projector shaped like a spiked beetle, squatting on a platform ringed with reclining seats. The cupola above glows faintly with the residue of the day's last show.
[beat 1] Soft footfalls. Someone is breathing carefully, the way people do when they have broken into a place and wish to be forgiven for it.
[beat 2] PERSEPHONE "PIP" ADEYEMI-LARKIN, 30s, small, black thermal jacket, a miner's headlamp turned to red. She kneels at the base of the projector with a canvas tool roll, unwrapping picks the way a surgeon lays out scalpels. Her face is composed. Her eyes are not.
[beat 3] She whispers into her sleeve. PIP: I'm at the base. Panel is off. I see the vault door. She waits. Nothing. PIP: Anyone?
[beat 4] She sighs. Presses her palm to the dome's cold metal. Tilts her head to look up through the beetle's legs into the dark of a ceiling she cannot see. The planetarium, empty, is still a place that holds its breath.
[beat 5] She slides a pick into the lock. Turns it a quarter. Listens. Turns it back. Wipes sweat from her upper lip with the heel of her glove. PIP: Come on, old girl.
[beat 6] Click. A heavy tumbler falls somewhere inside. She holds her breath. Another. Another. The door drifts open an inch.
[beat 7] Behind her, a SOUND. Soft. The slide of a shoe. She does not turn. Her hand drops to the tool roll, closes on a flat steel bar.
[beat 8] A VOICE from the dark. VOICE: That lock was installed in 1958. It sticks on the third tumbler. Pip pivots, bar raised.
[beat 9] A tall figure steps from between two seats. Silver hair. Cardigan. Pocket flashlight in one hand, thermos in the other. DR. MORDECAI ASHFORD-LUND, 70s, lowers the flashlight so the beam falls on the floor between them. He is calm. Infinitely tired.
[beat 10] Now she knows him. She lowers the bar one inch. PIP: Doctor. MORDECAI: Miss Adeyemi-Larkin. You came earlier than I thought.
[beat 11] PIP: You knew. MORDECAI: I wrote the alarm schedule. I turned it off at nine. PIP: Why?
[beat 12] He sets the thermos on a seat. Sits beside it. Sighs. MORDECAI: Because forty years of children have lain under that sky, and not one of them has ever asked me what's inside the projector.
[beat 13] PIP: What's inside the projector? MORDECAI: The Hope Diamond, as it happens. PIP: That's a joke. MORDECAI: It is not a joke. It is a stone the museum board acquired in 1982 and kept off the books. I have guarded it for forty years in the one place no thief would ever think to look. PIP: Except me. MORDECAI: Except you.
[beat 14] She looks at the open vault. At the old man. At the bar in her hand.
[beat 15] PIP: Why would you turn off the alarm, then? MORDECAI: Because I'd like somebody to see it before I die.
[beat 16] He rises. Takes the flashlight in two fingers and clicks it off. MORDECAI: Open it, Pip. I will turn on the stars.
[beat 17] He crosses to the control panel. Presses a button.
[beat 18] The dome erupts into a billion pinpoints of light. Pip stands in the center, bar forgotten, the vault door swinging wide. In the dark inside the beetle, something catches the starlight and throws it back, a single cold blue fire.
[beat 19] PIP: Mordecai. MORDECAI: Yes? PIP: You should have asked sooner. He smiles, and for a moment the whole dome is theirs.

### SCENE s00133 | INT. HOSPITAL BASEMENT LAUNDRY - NIGHT
Characters: EUGENIA HARTSHORN, CALLIE HARTSHORN, OSWIN BRADDOCK
[beat 0] Industrial washers thump. Steam beads on pipes. A row of orange plastic chairs, bolted down. EUGENIA HARTSHORN, 60s, in a good coat, folds a single hospital gown over and over, smaller each time. Across from her, her daughter CALLIE HARTSHORN, 30s, scrubs, badge flipped backward, watches a dryer turn. Between them, on the third chair, a paper bag from the cafeteria. Untouched.
[beat 1] Heavy boots. OSWIN BRADDOCK, 60s, maintenance, enters pushing a cart of towels. He nods to both, parks it, starts feeding sheets into a mangle.
[beat 2] EUGENIA: You haven't eaten. CALLIE: Neither have you. EUGENIA: I'm not on shift. CALLIE: You're here, Mom.
[beat 3] Eugenia smooths the gown flat on her knee. Folds it again.
[beat 4] OSWIN: Evening, ladies. EUGENIA: Evening. CALLIE: Hey, Oswin.
[beat 5] He glances at the bag. Then at the two of them. Says nothing. Feeds another sheet.
[beat 6] CALLIE: They moved him to the sixth floor. EUGENIA: I know. CALLIE: I told them to wait. EUGENIA: I know. CALLIE: Dr. Rahimi said Thursday. Maybe Friday.
[beat 7] Eugenia sets the gown down. Stands. Walks to the washer. Opens the door. Looks inside. Closes it.
[beat 8] EUGENIA: This one's done. CALLIE: Mom, it's empty. EUGENIA: Is it?
[beat 9] Oswin stops the mangle. Eugenia opens the washer again. She reaches in, pulls out a single wool sock, grey, wet. She holds it up. EUGENIA: His.
[beat 10] She sits. Holds the sock in both hands, as if it were a bird.
[beat 11] Callie moves to the chair beside her. Does not touch her. Slides the paper bag across.
[beat 12] Eugenia takes the sandwich. Unwraps it. Bites. Chews. Her jaw works hard.
[beat 13] Oswin turns off the mangle. Quietly, he fetches a clean towel, folds it, and lays it across the sock in her lap. OSWIN: Dryer's free.
[beat 14] Eugenia nods. Does not stand.

### SCENE s00134 | INT. HARBOR FISH AUCTION HALL - 4 A.M.
Characters: CHAR, IGLESIAS, DOM VASQUEZ, TWITCH, SHADOW, DETECTIVE MARGUERITE LAWSON
[beat 0] Concrete. Wet. Gulls screaming under the rafters. Rows of tuna on ice, long as men. CARMELO "CHAR" IGLESIAS, 40s, rubber boots, gutting knife, sweeps the floor like a man hiding something.
[beat 1] A bell clangs. Crowd noise. At the end of the aisle, DOM VASQUEZ, 50s, tailored raincoat, stands over a crate with a briefcase at his feet. Beside him, a skinny kid, TWITCH, 19, in a hoodie, hand twitching in his pocket.
[beat 2] CHAR: Dom. DOM: Char. Product? CHAR: Under the bluefin. TWITCH: Under the what? CHAR: Fish, kid.
[beat 3] Char tips a tuna on its side. Underneath: a taped brick.
[beat 4] DOM: Count it. TWITCH: I'll count it. CHAR: Let him. TWITCH: All here. DOM: Good. Case.
[beat 5] Dom nudges the briefcase forward with his toe. Char kneels. Lifts it. Opens. Dollars, banded. He snaps it shut.
[beat 6] Behind them a SHADOW moves. Char sees it first. CHAR: Don't turn around. DOM: Who? CHAR: Just don't.
[beat 7] Footsteps on wet concrete. Slow. Then DETECTIVE MARGUERITE LAWSON, 40s, windbreaker, badge on a lanyard, a gun in her right hand, steps out between two ice tubs. Her eyes flick across the three of them: Char, the brick, the briefcase, the kid.
[beat 8] LAWSON: Police. Hands. TWITCH: Oh, God. DOM: Detective. CHAR: Marguerite. LAWSON: Char, you son of a bitch. TWITCH: I didn't do anything. DOM: Kid, shut up.
[beat 9] Twitch bolts. Slips on fish scales. Falls. The brick skids across the floor and splits, white powder bursting like flour in the lamp light. Dom lunges for the briefcase. Char drops it.
[beat 10] Lawson fires once into the rafters. BANG. Gulls explode upward.
[beat 11] Everyone freezes. LAWSON: Nobody moves. A long beat. Dom raises his hands. Twitch lies still. Char folds his arms.
[beat 12] CHAR: You're early, Marguerite. LAWSON: You're late, Carmelo.
[beat 13] She holsters her weapon. Takes the briefcase. Walks to the edge of the dock, tosses it into the black harbor. It sinks without a ripple.
[beat 14] DOM: What the hell? LAWSON: Go home, Dom. Take the kid.
[beat 15] She turns her back on them.

### SCENE s00135 | INT. FIELD HOSPITAL - REQUISITIONED BALLROOM - NIGHT
Characters: SERGEANT NIKODEM ZAWADZKI, NURSE PHILOMENA OKONKWO, PRIVATE ELIAS BRODEUR, STRANGER, MARCHETTI
[beat 0] A grand hall of cracked chandeliers and bloodied parquet. Cots in rows where the dance floor used to be. Lanterns hang from candelabras. Somewhere, a gramophone with no needle collects dust. SERGEANT NIKODEM ZAWADZKI, 30s, left arm in a sling, sits on a cot. Beside him, NURSE PHILOMENA OKONKWO, 30s, rolls bandages with grim efficiency. Across the aisle, a young soldier lies still, face to the wall: PRIVATE ELIAS BRODEUR, 18.
[beat 1] A figure in the doorway, silhouetted by the dying fire outside: a STRANGER, in a civilian overcoat, rifle slung. STRANGER: Is this the hospital? PHILOMENA: It's a ballroom. Come in.
[beat 2] The Stranger crosses the hall. His boots echo on the parquet. He pauses by Elias's cot. STRANGER: This one's alive? NIKODEM: He breathes. That's all we know.
[beat 3] PHILOMENA: Who are you? STRANGER: Captain Lucien Marchetti. 4th Brigade. Our line broke at midnight.
[beat 4] NIKODEM: Broke? MARCHETTI: They'll be here by dawn.
[beat 5] Philomena rises. Nikodem swings his legs to the floor. Elias stirs, a small groan.
[beat 6] PHILOMENA: We have forty wounded. MARCHETTI: Then you have a decision. NIKODEM: We have no decision. We don't move them. MARCHETTI: He will. And she will. And you will. He points to Philomena. Then to Nikodem. Then to the wall.
[beat 7] MARCHETTI: Sergeant, you speak for the men? NIKODEM: I speak for no one. MARCHETTI: Then I'll speak.
[beat 8] Elias wakes. Looks at Marchetti. Looks at the rifle. ELIAS: Captain? MARCHETTI: Private.
[beat 9] ELIAS: I can walk. PHILOMENA: No, you can't. ELIAS: I can crawl. MARCHETTI: Then crawl first. We follow.
[beat 10] He turns to the others. Nikodem nods once. Philomena grabs a blanket.
[beat 11] They begin moving cots toward the door, one by one, the way mourners carry a coffin.
[beat 12] At the far end of the hall, the gramophone, caught in a draft, begins to turn on its own. A thin old waltz crackles out, ghostly, ridiculous, and every head lifts.
[beat 13] Then the first shell lands.
[beat 14] The chandelier swings. Plaster rains. The cots stagger. Philomena throws herself over Elias. Nikodem hauls Marchetti down. The waltz continues, warped by the blast, slowing to a drone.
[beat 15] Dust. Smoke. A long, long silence.
[beat 16] Marchetti coughs. Rises. Lifts his rifle.
[beat 17] MARCHETTI: They're early. NIKODEM: Of course they are.
[beat 18] Marchetti smiles grimly and puts his rifle to his shoulder. The ballroom, for the last time, becomes a ballroom of living men.

### SCENE s00136 | EXT. FROZEN LAKE - ICE FISHING DERBY - DAWN
Characters: BRYNJA THORSDOTTIR, OTTO WESTERBERG
[beat 0] A white plain stitched with augered holes and plywood shanties. Orange flags snap in the wind. Hundreds of numbered bibs bob across the ice like pumpkins. BRYNJA THORSDOTTIR, 50s, leathery, parka patched with duct tape, stands over hole 117, line taut in her hands. Opposite her, OTTO WESTERBERG, 30s, new coat, a brand new rod, cheeks pink as ham, stands at hole 118 and has not yet felt a bite.
[beat 1] A loudspeaker crackles. The derby ends in four minutes.
[beat 2] OTTO: Your line moved. BRYNJA: Wind. OTTO: Mine moved. BRYNJA: Also wind.
[beat 3] They both jerk. Lines go taut at the same instant. Bobbers vanish. OTTO: Walleye! BRYNJA: Pike!
[beat 4] They haul in, side by side, boots scraping, grunts overlapping. Two lines, two fish, both fighting, tangled in the middle of the hole.
[beat 5] BRYNJA: Don't you dare cut me, Westerberg! OTTO: Don't you dare let go, Thorsdottir! OTTO: Pull! BRYNJA: Pull!
[beat 6] A great grey pike and a fat golden walleye burst from the same hole, flopping on the ice between them.
[beat 7] Both stand, panting. The pike is longer. The walleye is thicker.
[beat 8] The loudspeaker blares the final minute. They stare at each other.
[beat 9] Then, together, they scoop up both fish and run.

### SCENE s00137 | INT. FERRY - CALL CENTER DECK - DAY
Characters: PRUDENCE KWAN, GARRETT LINDQVIST, DAPHNE ROUMELIOTIS
[beat 0] A converted car deck: forty cubicles under fluorescent tubes, water slapping the hull. A fire drill siren WAILS. Nobody has stood up. At the central desk, PRUDENCE KWAN, 40s, floor manager, headset around her neck, scrolls on her laptop. In the next cubicle, GARRETT LINDQVIST, 30s, a lanyard of seventeen badges, types with one finger. Behind them, DAPHNE ROUMELIOTIS, 50s, QA lead, eats a banana.
[beat 1] PRUDENCE: It's a drill. They said it's a drill. GARRETT: Who said? DAPHNE: Facilities. GARRETT: We don't have Facilities. We're on a boat. PRUDENCE: She means the Captain's office. DAPHNE: I mean Facilities.
[beat 2] The siren wails on. GARRETT: We should evacuate. PRUDENCE: To where? We're in the middle of the Sound. DAPHNE: The muster point is the lifeboat. GARRETT: Which one is the lifeboat? DAPHNE: The one with the sign. PRUDENCE: The sign fell off in March.
[beat 3] GARRETT: I filed a ticket. DAPHNE: Garrett, you don't have a ticket system. GARRETT: That's why it's still open.
[beat 4] The siren stops. In the silence, the three of them look at each other. Nobody has moved.
[beat 5] PRUDENCE: Okay, back to work. DAPHNE: Agreed. GARRETT: Agreed.
[beat 6] They sit. Headsets on. A phone rings. PRUDENCE: Thank you for calling, how can I help?
[beat 7] Behind them, the ferry's horn sounds, long and low. They don't look up.

### SCENE s00138 | INT. COURTROOM - CONVERTED DAIRY BARN - DAY
Characters: JUDGE WILHELMINA OKAFOR-REYES, ATTORNEY SILAS BOUCHARD, ATTORNEY AMARA DELACROIX-TANG
[beat 0] Hay bales along the walls. Sunlight slants through slatted boards. The judge's bench is a repurposed milking stand. A cow-shaped weathervane turns slowly overhead, visible through a skylight. JUDGE WILHELMINA OKAFOR-REYES, 60s, black robe over a flannel shirt, taps a gavel made from a horseshoe. At counsel table, ATTORNEY SILAS BOUCHARD, 40s, polished brogues streaked with straw, and ATTORNEY AMARA DELACROIX-TANG, 30s, tailored suit, a new briefcase.
[beat 1] WILHELMINA: Counsel. The hearing is on the matter of the Henderson water rights. Mr. Bouchard.
[beat 2] SILAS: Your Honor, my client asserts the creek flows east. AMARA: It flows west. SILAS: East. AMARA: West, Your Honor. SILAS: Amara, I walked the creek. AMARA: Silas, I walked it twice.
[beat 3] WILHELMINA: Counsel, address the bench, not each other. SILAS: Apologies, Your Honor. AMARA: Apologies.
[beat 4] Both speak at the same moment, voices stacking. SILAS: We would move to submit the survey. AMARA: We would move to submit the survey.
[beat 5] A long silence. A cow lows, somewhere outside.
[beat 6] WILHELMINA: Counsel, you appear to agree. SILAS: On the survey, Your Honor. AMARA: On the survey. WILHELMINA: Then the clerk shall mark it as Exhibit A. Mr. Bouchard, please proceed.
[beat 7] He rises. Adjusts his tie. Stray hay falls from his sleeve.

### SCENE s00139 | INT. DRIVING SCHOOL - SIMULATOR ROOM - DAY
Characters: JUNE, ABARA, MATEO FUENTES, IGNACIO HOLLOWAY, GRETA SOLBERG
[beat 0] Four mock cockpits in a row, each facing a flickering screen. Pedals taped with duct tape. A poster: "SIGNAL EARLY. SIGNAL OFTEN." JUNIPER "JUNE" ABARA, 16, braces, grips the wheel with white knuckles. Next to her, MATEO FUENTES, 17, leans back, one foot on the dash. Behind them, IGNACIO HOLLOWAY, 16, scribbles on his palm. Beside him, GRETA SOLBERG, 17, eats gummy worms and watches the road on his screen instead of her own.
[beat 1] A tinny voice from the simulator: "Merge ahead." MATEO: Merge, merge, merge. JUNE: I'm merging.
[beat 2] He tips his chair. She hits the brakes. The screen flashes red. JUNE: Mateo.
[beat 3] He grins. She swats him. Behind them, Ignacio snickers.
[beat 4] IGNACIO: Nice, June. Pedestrian down. GRETA: She hit a mailbox. IGNACIO: Same thing.
[beat 5] June reboots. Her hands steady. She breathes out, picks the road back up, and cruises. The screen glows green.
[beat 6] She turns to Greta, triumphant. Greta offers a gummy worm. June takes it.
[beat 7] MATEO: My turn. He throws himself into the seat. Slaps the wheel. Floors it. The screen explodes into a crash.
[beat 8] IGNACIO: Mateo! MATEO: It's a simulator!
[beat 9] Greta laughs so hard she snorts. Ignacio cracks up. June, red-faced, tries not to, fails.
[beat 10] Then the door opens. They all turn. The instructor's clipboard appears first, then his face, grim.
[beat 11] Four hands go up. Then three come down, pointing at Mateo.
[beat 12] GRETA: School bus. He killed the school bus.

### SCENE s00140 | EXT. TUG-OF-WAR PIT - COUNTY FAIR - DUSK
Characters: HOLLIS BRANDT, NEELA CHOWDHURY, TOBY MARCINKIEWICZ, WENDOLYN ACHTERBERG
[beat 0] Mud. Two ropes of frayed hemp. A line of chalk. Four people in team shirts stand knee-deep in the slop. HOLLIS BRANDT hauls the knot. NEELA CHOWDHURY braces her heels. TOBY MARCINKIEWICZ squints at the opposing team across the pit. WENDOLYN ACHTERBERG spits and tightens her grip.
[beat 1] HOLLIS: On three. TOBY: On two. NEELA: On three! WENDOLYN: Whatever, just pull!
[beat 2] The horn sounds. The rope snaps taut. They lean back as one.
[beat 3] HOLLIS: Heave! NEELA: Heave! TOBY: Don't let go! WENDOLYN: Don't you dare!
[beat 4] Hollis's boot slides. Neela grabs his belt. Toby's grip slips. Wendolyn screams.
[beat 5] HOLLIS: Left! TOBY: Right! NEELA: Down! WENDOLYN: Up!
[beat 6] The rope goes slack. All four fall backward into the mud with a splat. They lie there, eyes toward the sky.
[beat 7] Hollis wipes his face. Neela stares at her hands. Toby laughs once, short. Wendolyn closes her eyes.
[beat 8] Nobody says who won.

### SCENE s00141 | INT. GOBLIN CUSTOMS OFFICE - UNDER THE HILL - DAY
Characters: KRIX BONEWHISTLE, GRUMBELINE SOOT, SIR ALDERIC THORNE, MAGDA VESPERS
[beat 0] A stone vault with a crooked desk. Lanterns of green fire. A sign in nine languages: "DECLARE EVERYTHING." Dust drifts from the ceiling. KRIX BONEWHISTLE, a goblin, three feet tall, in a tiny waistcoat, stamps papers with a thick fist. Next to him, GRUMBELINE SOOT, a goblin woman with a monocle, sorts coins by weight. Before the desk stand two travelers: SIR ALDERIC THORNE, 40s, a knight in dented armor, and a hooded witch, MAGDA VESPERS, who carries a covered basket.
[beat 1] KRIX: Name, species, purpose. ALDERIC: Alderic Thorne. Human. Passing through. KRIX: Anything to declare? ALDERIC: My sword. GRUMBELINE: We saw the sword.
[beat 2] KRIX: Madam? MAGDA: Magda Vespers. Witch. Visiting a cousin. KRIX: Anything to declare? MAGDA: Nothing.
[beat 3] The basket twitches. Grumbeline looks up. GRUMBELINE: What's in the basket? MAGDA: Bread. GRUMBELINE: Bread does not purr.
[beat 4] Magda sighs. Lifts the cloth. Inside: a small, indignant dragon, no larger than a kitten, blinking.
[beat 5] KRIX: That's a declarable. GRUMBELINE: That's a declarable! ALDERIC: Told you. MAGDA: He's a rescue.
[beat 6] KRIX: Fee is three silvers and a favor. Magda counts three coins from her sleeve. She sets them on the desk. Grumbeline weighs each one, squints through the monocle, then nods.
[beat 7] GRUMBELINE: The favor? MAGDA: Name it.
[beat 8] KRIX: Teach us to make bread that purrs.
[beat 9] Magda smiles for the first time. The dragon yawns, and a small flame lights the office.

### SCENE s00142 | EXT. ROOFTOP PIGEON COOP - SUNSET
Characters: TAMSIN OKONKWO-REYES
[beat 0] A tar roof six stories up, patched with plywood. A wire-and-board coop sits against the stairwell. City below, orange and gold.
[beat 1] TAMSIN OKONKWO-REYES, 15, backpack, headphones around her neck, climbs through the roof hatch. She carries a thermos and a phone. She kneels beside the coop.
[beat 2] She opens the little door. A pigeon, grey and ruffled, hops onto her wrist. She strokes it with one finger.
[beat 3] She sets the phone on the ledge. Taps the screen. A red dot blinks.
[beat 4] TAMSIN: Okay. Voice memo. Day twelve of the Great Return. She pulls the pigeon close.
[beat 5] TAMSIN: Kevin hasn't flown home in six days. I don't think it's a navigation problem.
[beat 6] She hesitates. Then continues, quieter. TAMSIN: I think he likes it wherever he's going.
[beat 7] She stops the recording. Plays it back. TAMSIN: I think he likes it wherever he's going.
[beat 8] She frowns. Taps again. Plays the previous bit. TAMSIN: Kevin hasn't flown home in six days.
[beat 9] She sets down the phone. She watches the sun slide behind the water towers.
[beat 10] She lifts her wrist. The pigeon hops off, fluttering up onto the lip of the coop. TAMSIN: Go, then.
[beat 11] He doesn't. He tucks his beak under his wing.
[beat 12] She laughs, wipes her eyes with her sleeve, and sits on the warm tar with her back against the coop.
[beat 13] She presses record again. TAMSIN: Day thirteen. He stayed.

### SCENE s00143 | INT. TOWN HALL - EVENING
Characters: MAYOR GWENDOLYN ARDITO, BARNABAS KOWALCZYK, TILLIE OSEI, DOT PELLEGRINI, STRANGER, IRVING
[beat 0] Folding chairs. A banner reads "SAVE THE HARBOR FERRY." A coffee urn leaks in the corner. Rain on the windows. MAYOR GWENDOLYN ARDITO, 50s, stands at a podium. Three citizens remain: BARNABAS KOWALCZYK, 60s, in a fisherman's sweater; TILLIE OSEI, 20s, with a clipboard; DOT PELLEGRINI, 70s, in a raincoat, knitting; and, in the back, a STRANGER in a damp suit, notebook closed on his knee.
[beat 1] GWENDOLYN: The council voted six to one. The ferry stops running on the first. BARNABAS: Six to one.
[beat 2] TILLIE: We can still petition. DOT: We petitioned in 1998. TILLIE: We could pray. BARNABAS: Pray on your own time.
[beat 3] GWENDOLYN: I fought for this ferry, Barnabas. BARNABAS: Then fight harder.
[beat 4] She says nothing. Dot's needles click.
[beat 5] The Stranger raises a hand. STRANGER: If I might. GWENDOLYN: And you are? STRANGER: Irving Tse. Regional transit.
[beat 6] A murmur. Tillie sits up. Barnabas folds his arms.
[beat 7] IRVING: I'm not here to close it. TILLIE: Then why? IRVING: Because somebody has to say the numbers out loud. TILLIE: Say them.
[beat 8] IRVING: It costs four hundred thousand a year. It carries eleven people a day. DOT: Twelve, when I'm visiting my sister.
[beat 9] Laughter, thin and tired. Gwendolyn rubs her eyes.
[beat 10] IRVING: I can keep it running one more year, if the town raises forty thousand. BARNABAS: We don't have forty thousand. TILLIE: We can have it. BARNABAS: Amen.
[beat 11] Dot ties off her stitch, rises, and drops a knitted scarf in the middle of the table. DOT: Starting bid. Sell it.
[beat 12] One by one, they reach for their wallets.

### SCENE s00145 | INT. REGATTA BOATHOUSE - MORNING
Characters: COACH ELEANOR PRZYBYLSKI, ZEB, HOLLINGSWORTH, MARISELA QUIROGA, CASPIAN ADEBAYO, TOVE NIELSEN, BASHIR KARIMI
[beat 0] A long timber shed that smells of varnish and river. Eight-oared shells hang from racks like sleeping fish. Pale light slants through the slats. COACH ELEANOR PRZYBYLSKI, 60s, windbreaker, whistle, sits on an overturned oar-box. Before her stand five rowers in damp unisuits: ZEBEDIAH "ZEB" HOLLINGSWORTH, 20s, stroke; MARISELA QUIROGA, 20s, bow; CASPIAN ADEBAYO, 19, coxswain, small and quiet; TOVE NIELSEN, 21, seat five; and BASHIR KARIMI, 23, who has not yet looked up. She says nothing. The oars drip.
[beat 1] ELEANOR: You're late. ZEB: Two minutes. ELEANOR: Two minutes is a boat length. MARISELA: Coach, it was fog. ELEANOR: The fog was there when I got here.
[beat 2] Caspian shifts a megaphone in his hands. Marisela tightens a shoelace that does not need tightening. Tove studies a knot in the floorboards. Bashir finally lifts his eyes and meets hers.
[beat 3] She holds the look. Then she rises, crosses to the shell Number Four, runs her palm along its hull, kneels to check a rigger bolt, and then, without turning, tosses a wrench over her shoulder, which Zeb catches and Marisela passes to Caspian, who hands it to Tove, who hands it to Bashir, who looks at it as though it were a snake.
[beat 4] ELEANOR: Seat seven's rigger is loose. BASHIR: It was tight yesterday. ELEANOR: Yesterday you were a different rower.
[beat 5] Bashir doesn't answer. He kneels, takes the wrench, and tightens the bolt with six slow turns.
[beat 6] CASPIAN: Coach, the forecast says headwind. ELEANOR: Then we row into it. ZEB: It's a hundred meters. ELEANOR: It's two thousand, Zebediah.
[beat 7] Silence. The river laps outside.
[beat 8] ELEANOR: Boat on shoulders.
[beat 9] They lift the shell as one. Eight hands, no words. They carry it out into the pale light, and Eleanor stays behind a moment, listening to their feet recede.

### SCENE s00146 | INT. MOBILE HOME - KITCHEN TABLE - DAY
Characters: BEATRIX LOMAX-DIALLO, HENRY TAKAHASHI, DANTE VELARDE
[beat 0] A narrow kitchen. Wood paneling. A window unit rattles. On the table: a stack of papers, a stamp pad, and a coffee mug that says WORLD'S OKAYEST NOTARY. BEATRIX LOMAX-DIALLO, 60s, notary, reading glasses on her forehead, sits at the head. To her left, HENRY TAKAHASHI, 70s, widower, rests both hands flat. To her right, his son-in-law, DANTE VELARDE, 40s, in a pressed shirt, fidgets with a pen.
[beat 1] She stamps a page. He watches the stamp. He reaches for another page. She slides it toward him.
[beat 2] BEATRIX: This one transfers the deed. HENRY: I know what it does. DANTE: Henry, take your time. HENRY: I've taken my time. I'm seventy-three.
[beat 3] Dante nods. He lowers his eyes. Beatrix clears her throat.
[beat 4] BEATRIX: Mr. Velarde, you'll sign as witness. DANTE: Of course.
[beat 5] She slides the pen to him. He takes it. His hand shakes slightly. He signs. She notarizes.
[beat 6] BEATRIX: Mr. Takahashi, you are conveying the property to your daughter Keiko's estate, correct?
[beat 7] HENRY: Keiko's gone. BEATRIX: I'm sorry. HENRY: To her children, then. DANTE: They're minors. BEATRIX: A trustee, then.
[beat 8] HENRY: You.
[beat 9] Dante pauses. He sets down the pen. DANTE: Henry, I don't need to be trustee. HENRY: You'll do it right.
[beat 10] Beatrix looks from one to the other. She taps the stamp. She lifts the final page. He holds out his hand. She places the page in it.
[beat 11] He reads. Slow. Every line. Then he signs, large and square, and slides it back.
[beat 12] She stamps. The sound is small, dry, final.
[beat 13] BEATRIX: Congratulations. HENRY: Is that what it is?
[beat 14] She smiles, gently, and pours him more coffee.

### SCENE s00147 | INT. RADIO TELESCOPE CONTROL ROOM - NIGHT
Characters: SOLVEIG ABERNATHY-OKAFOR
[beat 0] A concrete room at the end of a dirt road, humming with machines. Banks of dials. A wall of monitors showing a single flat grey line. DR. SOLVEIG ABERNATHY-OKAFOR, 40s, in a sweater and fingerless gloves, sits at the main console with a voice recorder and a cold cup of tea. She hasn't slept.
[beat 1] She presses RECORD. SOLVEIG: Log entry, hour sixty. Signal is still there.
[beat 2] She plays back the clip. A pulse, faint, like a heartbeat, from a speaker.
[beat 3] She rewinds. SOLVEIG: Log entry, hour fifty-two. It repeats every eleven minutes. SOLVEIG: Eleven minutes.
[beat 4] She leans closer, listening, and her hand slips to the console edge. The pulse thumps. The monitors flicker. The lights dim for a heartbeat, then recover.
[beat 5] She exhales and lifts the recorder again. SOLVEIG: Hour sixty-one. The pulse has changed. It now repeats every ten.
[beat 6] She pauses. Her voice drops. SOLVEIG: Ten minutes.
[beat 7] She plays it back. SOLVEIG: Hour sixty-one. The pulse has changed.
[beat 8] SOLVEIG: Stop. She stops it. Silence.
[beat 9] Then, faintly, from the speaker, the pulse resumes. A beat. Another.
[beat 10] SOLVEIG: That's not mine.
[beat 11] She turns slowly. The speaker is off. The monitors show the grey line. The pulse continues.
[beat 12] It's coming from the recorder.
[beat 13] SOLVEIG: Hello? She holds the recorder up. The pulse quickens.
[beat 14] SOLVEIG: Hello.
[beat 15] She drops the recorder. It clatters. She stands, backs away. The lights flicker. The console hums. The recorder lies on its side, spinning its reels.
[beat 16] SOLVEIG: Solveig. Come here. She does not move. Tears gather at her eyes.
[beat 17] SOLVEIG: No. SOLVEIG: Come here. I have been waiting eleven minutes.
[beat 18] SOLVEIG: Ten. SOLVEIG: Ten.
[beat 19] A long silence. The pulse slows. The lights steady. The grey line on the monitors becomes a single, perfect, ordinary wave.
[beat 20] She picks up the recorder. Her hand is still. She looks at it.
[beat 21] SOLVEIG: It's gone.
[beat 22] She stops the machine. The room is silent. She sets the recorder down on the console, very gently, like a bird she has learned to trust.
[beat 23] She picks up her tea. It's warm.

### SCENE s00148 | INT. FERRIS WHEEL GONDOLA - NIGHT
Characters: STRANGER, IMELDA VASQUEZ-LEE, DMITRI
[beat 0] A cramped steel cabin, swaying. Neon midway lights wheel below. Two figures in black. A STRANGER in a ski mask works at the gondola's roof hatch. Beside him, IMELDA VASQUEZ-LEE, 30s, holds a rope coil.
[beat 1] STRANGER: Come on, come on. IMELDA: Quiet. STRANGER: I'm talking to the hatch.
[beat 2] The hatch pops. Cold air. He pulls himself up. She hands him a duffel.
[beat 3] STRANGER: Okay, everyone, nobody panic. IMELDA: There's no one else. STRANGER: Habit.
[beat 4] The wheel lurches. Both grab the rail.
[beat 5] IMELDA: Dmitri. DMITRI: What? IMELDA: Your mask slipped. DMITRI: Names are for inside. IMELDA: We are inside.
[beat 6] They speak at once, whispering. IMELDA: Next gondola in ten seconds. DMITRI: Next gondola in ten seconds.
[beat 7] They grin. She clips the rope to the rail. He steps out onto the roof.

### SCENE s00149 | INT. FENCING SALLE - EVENING
Characters: ENZO, BIANCHI, PRIYANKA SHARMA-ODUYA, PRIYA, MASTER ALBERIC DUVAL
[beat 0] Wooden floor, mirrored wall. Masks hang on pegs. Two figures in white square off under a single hanging lamp. LORENZO "ENZO" BIANCHI, 20s, wiry, tightens his glove. Opposite, PRIYANKA SHARMA-ODUYA, 20s, calm, flexes her blade.
[beat 1] ENZO: Priya, you're stalling. PRIYA: I'm warming up. ENZO: It's your finals bout. PRIYA: It's practice.
[beat 2] They salute. En garde. Silence. The lamp hums.
[beat 3] Lunge. Parry. The blades sing. They circle, step, retreat, advance, a quiet dance.
[beat 4] ENZO: Bit slow tonight. PRIYA: Bit loud tonight.
[beat 5] Click. Point to Priya. She grins. He grins back.
[beat 6] The door opens. A tall, silver-haired man in a long coat steps in. MASTER ALBERIC DUVAL, 70s, leans on a cane and watches.
[beat 7] ALBERIC: Don't stop on my account. ENZO: Maestro. PRIYA: Master Duval. ALBERIC: Again.
[beat 8] They resume. Faster now. Blades blur. A final parry. A riposte.
[beat 9] Priya stops, blade at Enzo's chest. PRIYA: Touch.
[beat 10] Alberic nods, slowly, and turns to go. At the door, he pauses.
[beat 11] ALBERIC: Priyanka. Pack your bag. Nationals are Thursday.

### SCENE s00150 | INT. FUNERAL PARLOR - BACK ROOM SPEAKEASY - NIGHT - 1926
Characters: SABINE ARCHAMBAULT, HORACE PELLETIER, TOBY, FINNEGAN, STRANGER, CALLUM
[beat 0] Behind a velvet curtain: a card table set atop a coffin lid, a bar of embalming-fluid bottles filled with gin, a gramophone low and hissing. Gaslight. Four people. One empty chair. SABINE ARCHAMBAULT, 30s, in beads and a cloche, shuffles. HORACE PELLETIER, 50s, mortician, apron over a vest. TOBIAS "TOBY" FINNEGAN, 20s, a cop's son in a borrowed suit. And a STRANGER, in a grey coat, who sits at the table's far edge and has said nothing.
[beat 1] SABINE: Deal's mine. HORACE: Deal's the house's. SABINE: The house is dead, Horace. HORACE: Not tonight.
[beat 2] TOBY: Can we play? SABINE: Sit, Toby. He sits. The Stranger doesn't move.
[beat 3] HORACE: You in? STRANGER: I'm watching. HORACE: We don't have spectators. STRANGER: You do now.
[beat 4] A beat. Sabine deals. He studies his cards. She studies him.
[beat 5] SABINE: You have a name, friend? STRANGER: Callum Redfern.
[beat 6] TOBY: Redfern. Like the Redfern Brewery? CALLUM: Like the Redfern Brewery's heir. HORACE: Heir to what? They shut down in '19. CALLUM: To the cellar.
[beat 7] Horace sets down his cards. Sabine's eyebrows lift.
[beat 8] SABINE: Callum. Is there beer in the cellar? CALLUM: Four hundred barrels.
[beat 9] TOBY: Mr. Redfern, can I buy some? CALLUM: Mr. Finnegan, I can't sell to a policeman's son. Toby colors. Horace laughs.
[beat 10] HORACE: He knows you. CALLUM: I know everybody. It's my cellar.
[beat 11] SABINE: What do you want, Callum? CALLUM: Partners. HORACE: In what? CALLUM: In the thing after this.
[beat 12] He lays down his cards. A straight flush. Nobody says a word. The gramophone skips.
[beat 13] TOBY: He wins. SABINE: He always did.
[beat 14] Horace pours four glasses from the embalming bottle. Slides one to each. Lifts his. HORACE: To the cellar.

### SCENE s00151 | INT. CAR WASH - TUNNEL - NIGHT
Characters: RAY, OYELOWO, TANISHA BEAUMONT, MARCUS DELACROIX-WU
[beat 0] Blue foam. Spinning brushes. A conveyor drags a black sedan through the dark. The attendant booth glows at the end. RAYMUNDO "RAY" OYELOWO, 40s, uniform, towel on shoulder, waits at the exit. At his side, TANISHA BEAUMONT, 20s, trainee, holds a squeegee like a baton. A second man leans on the booth wall: MARCUS DELACROIX-WU, 50s, leather jacket, thumb in his belt.
[beat 1] The sedan emerges, dripping. RAY: Marcus. MARCUS: Ray. RAY: Car's clean. MARCUS: Is it?
[beat 2] Tanisha wipes the windshield, too fast. TANISHA: Spotless, sir. MARCUS: Easy, kid. You'll rub off the paint.
[beat 3] She stops. He opens the trunk. Looks inside. Closes it.
[beat 4] MARCUS: Ray. Come here. Ray steps close. Marcus puts a hand on his shoulder. Squeezes. Smiles. MARCUS: Good work.
[beat 5] He pulls three twenties from his jacket. Tucks them into Ray's breast pocket. Pats it.
[beat 6] TANISHA: What was in the trunk? RAY: Nothing. MARCUS: Exactly.
[beat 7] The sedan rolls out into the rain.
[beat 8] Tanisha looks at the three twenties poking from Ray's pocket. Ray's hand trembles once. Then he folds the bills away and turns on the hose.

### SCENE s00152 | INT. FARMHOUSE KITCHEN - PRE-DAWN
Characters: EDMUND ABERNETHY-SOTO, LIORA ABERNETHY-SOTO, QUENTIN DUPREE
[beat 0] A bare bulb. A pot of coffee going cold. A calendar with a date circled in red. EDMUND ABERNETHY-SOTO, 60s, sits at the table with a stack of unopened envelopes. His daughter, LIORA ABERNETHY-SOTO, 30s, stands at the sink with her back to him. A hired hand, QUENTIN DUPREE, 40s, hovers by the door, cap in his hands.
[beat 1] He lifts one envelope. Sets it down. Lifts another.
[beat 2] She runs the tap. Turns it off. Runs it again.
[beat 3] QUENTIN: Mr. Abernethy, the auctioneer's truck is at the gate. EDMUND: Already? QUENTIN: Six a.m., he said. LIORA: It's four-thirty. QUENTIN: They like to get a good spot.
[beat 4] He opens an envelope. Reads. Closes it.
[beat 5] She turns, wipes her hands on her apron, sits across from him. Neither speaks.
[beat 6] EDMUND: Your mother loved this kitchen. LIORA: She hated the stove. EDMUND: She hated the stove, yes.
[beat 7] QUENTIN: I'll start with the tractor. LIORA: Quentin, wait. QUENTIN: Ma'am? EDMUND: Let him go, Liora. LIORA: He doesn't have to. EDMUND: It's his job. QUENTIN: It's all right.
[beat 8] EDMUND: Sit down, son. QUENTIN: I'd rather stand.
[beat 9] He stands. They sit. The kitchen clock ticks. Outside, an engine idles. A truck door slams.
[beat 10] He pushes the stack of envelopes to the middle of the table. She takes one. Opens it. Reads. Her mouth tightens. She folds it small.
[beat 11] She stands and fills the kettle.

### SCENE s00154 | INT. BONDED TEA WAREHOUSE - AFTER CLOSING
Characters: LEO, MARCHAND-ADEBISI, ANTON KARPINSKI-OLUWALE, INES KARPINSKI-OLUWALE
[beat 0] A cathedral of tea chests, stacked in towers to the rafters. Shafts of lamplight. The smell of bergamot and dust. A catwalk runs across the beams.
[beat 1] LEOPOLDINE "LEO" MARCHAND-ADEBISI, 40s, customs inspector, long coat, lanyard, walks the floor slowly, a clipboard against her hip. She stops at a chest labelled DARJEELING FIRST FLUSH. She taps it. Hollow.
[beat 2] A footstep behind her. She does not turn. LEO: You're late, Anton.
[beat 3] ANTON KARPINSKI-OLUWALE, 50s, in a dark overcoat, emerges from between two towers of chests. He carries a small leather case. ANTON: Traffic. LEO: There was no traffic. ANTON: Then I walked slowly.
[beat 4] She finally turns. He smiles, a thin, kind smile. She doesn't return it.
[beat 5] LEO: Open it. ANTON: You said no names. LEO: I said no names on the phone.
[beat 6] He sets the case on a chest. Unlatches it. Inside: tea. Real tea, loose, pale green. He takes a pinch and holds it out.
[beat 7] ANTON: Taste. She takes it, rolls it between finger and thumb, sniffs. Her expression changes.
[beat 8] LEO: It's the Himalayan Silver Tip. ANTON: It is. LEO: That doesn't exist anymore. ANTON: It exists in eleven chests. LEO: In this warehouse? ANTON: In this warehouse.
[beat 9] She puts the leaf in her mouth. Chews. Swallows. Closes her eyes.
[beat 10] LEO: It's extraordinary. ANTON: It's illegal. LEO: It's both.
[beat 11] A sound from the catwalk overhead. Both look up. A silhouette moves between the beams.
[beat 12] Leo draws a pistol from under her coat. Anton raises both hands. ANTON: Don't. LEO: Who is that?
[beat 13] ANTON: My daughter. LEO: You brought your daughter? ANTON: She insisted.
[beat 14] The silhouette leans over the rail. A young woman, perhaps twenty, with Anton's eyes.
[beat 15] LEO: Come down. She does, down a rope ladder, one slow rung at a time. At the bottom she lowers her hood. The lamplight catches her face. ANTON: Ines.
[beat 16] INES KARPINSKI-OLUWALE, 20s, stands between her father and the inspector. Hands open. INES: Dad, it's fine.
[beat 17] LEO: Both of you, step back. They speak at once. ANTON: Leo, put it down. INES: Please, please, please.
[beat 18] Leo holds the gun steady for three long seconds. Then, slowly, she lowers it.
[beat 19] LEO: Eleven chests. ANTON: Eleven. LEO: I get five. ANTON: Four.
[beat 20] LEO: Five, Anton. Or the daughter sings. Ines glances at her father. He sighs. ANTON: Five.
[beat 21] Leo holsters the gun. She lifts the clipboard. Writes something, tears off the page, hands it to him.
[beat 22] LEO: That's a receipt for the tea. As seized. ANTON: It says "destroyed." LEO: It will be, by the end of the week.
[beat 23] She walks back into the stacks. Her footsteps fade. The lamp hums. Ines exhales for the first time in a minute.
[beat 24] INES: Dad. ANTON: Yes? INES: Next time I'll stay in the car.

### SCENE s00155 | EXT. TANDEM BICYCLE RENTAL KIOSK - BOARDWALK - DAY
Characters: ODUYA, THEO RASMUSSEN-KHAN, GRANDMA CORAZON ESPINOSA, JUAN-PABLO, KIOSK OWNER, FRIDA LINDGREN
[beat 0] Salt air. A row of bright tandems chained to a rack. Five people in the sun. WILHELMINA "BILLIE" ODUYA, 28, in a sundress, grips a handlebar. BEHIND her, THEO RASMUSSEN-KHAN, 30, fumbles with a helmet. Next to them, GRANDMA CORAZON ESPINOSA, 80, in a straw hat, adjusts her bifocals. Her grandson, JUAN-PABLO, 14, scowls at his phone. And the KIOSK OWNER, FRIDA LINDGREN, 50s, leans on the counter with a stopwatch.
[beat 1] She clicks it. FRIDA: Start.
[beat 2] Theo mounts. Billie pushes off. The tandem wobbles. He steers right. She leans left. They crash into the rack.
[beat 3] He laughs. She stares daggers. He helps her up. She brushes off his hands.
[beat 4] Corazon watches. Nods approval. Juan-Pablo looks up from his phone, shrugs, and pockets it.
[beat 5] JUAN-PABLO: Abuela, don't. CORAZON: Watch me.
[beat 6] She climbs on. Pats the seat behind her. He sighs, climbs on. They pedal off, smooth as silk, past the kiosk, past the pier, into the sun.
[beat 7] Frida clicks the stopwatch. Billie and Theo watch them go. Their hands find each other.

### SCENE s00156 | INT. TRAMPOLINE PARK - PRIVATE PARTY ROOM - DAY
Characters: HARRY, EZEKWESILI, DOROTHEA PRZYWARA, HR, TREVOR OKONJO-LANE, MARGUERITE VOLKOV, PAXTON HALE
[beat 0] A wall of padded foam. Neon signs: JUMP! SOAR! SURVIVE! A banner reads "SYNERGY OFFSITE 2026." A long table of untouched pizza. Five employees in matching grippy socks sit in a circle on the floor, cross-legged, as a laminated agenda card makes its way from hand to hand. HARRISON "HARRY" EZEKWESILI, 40s, VP of Operations, tie still knotted. DOROTHEA PRZYWARA, 30s, the HR manager, clipboard. TREVOR OKONJO-LANE, 20s, an intern with his sock half off. MARGUERITE VOLKOV, 50s, in a cardigan, the longest-tenured. And PAXTON HALE, 30s, from Sales, who has not stopped smiling since he arrived.
[beat 1] DOROTHEA: Okay, everybody, let's share one fear and one trampoline goal. HARRY: I'll start. My fear is irrelevance. DOROTHEA: My fear is liability. TREVOR: My fear is... all of this. MARGUERITE: My fear is that I'll outlive the company. PAXTON: I don't have fears. I have opportunities.
[beat 2] A beat. Everyone looks at Paxton. HARRY: Paxton, that's a fear in disguise. PAXTON: Is it? DOROTHEA: It is. TREVOR: Definitely. MARGUERITE: I'll allow it.
[beat 3] DOROTHEA: Trampoline goals? HARRY: Backflip. DOROTHEA: No injuries. TREVOR: Escape. MARGUERITE: A nap. PAXTON: A synergistic pyramid.
[beat 4] HARRY: Let's jump. They rise. The trampolines are a field of black. Harry steps on. Bounces once. Bounces twice. His tie flaps over his shoulder. HARRY: This isn't so bad.
[beat 5] He bounces higher. Dorothea joins. Then Trevor. Then Marguerite, solemn as a monk. Paxton cannonballs onto the biggest trampoline, shouting.
[beat 6] PAXTON: Pyramid! They stack awkwardly. Harry on the bottom. Dorothea on his shoulders. Trevor on hers. Marguerite on his. Paxton climbs to the top, hands overhead. PAXTON: Synergy!
[beat 7] The pyramid sways. Gasps. Dorothea's clipboard slips. Trevor loses a sock. The whole pile topples sideways into the foam pit with a majestic thump.
[beat 8] Silence.
[beat 9] A hand emerges, then a head. It is Marguerite. She spits out foam. MARGUERITE: That was the best meeting we have ever had.
[beat 10] One by one, the others surface, laughing. Harry pulls off his tie and flings it into the air. HARRY: Let's do it again. They scramble.
[beat 11] A whistle shrills from the wall speaker. DOROTHEA: Time! They sag. Harry sighs.
[beat 12] HARRY: Put that in the minutes. DOROTHEA: "Synergy achieved."
[beat 13] TREVOR: Can I go home now? MARGUERITE: Not before the pizza.
[beat 14] They move toward the table. Paxton lingers. He looks back at the foam pit, grinning at the wreckage.
[beat 15] PAXTON: Opportunities.

### SCENE s00157 | INT. ROLLER DERBY ARENA - HOME LOCKER ROOM - NIGHT
Characters: ROZ, ACHEBE-LUND, GUTS, PARRISH-OKONKWO, NAILS, CHAKRABORTY, MO, DELACROIX-KELLY, TULLY, SEKIBO, BONES, ZARATE-WILLIAMS
[beat 0] Cinderblock walls painted red. A single long bench. A cracked mirror reflects six women in various states of armor. The crowd's stomp thunders through the ceiling. COACH ROSALIND "ROZ" ACHEBE-LUND, 50s, former jammer, a scar across one eyebrow, stands by the door, arms folded. She wears a faded jersey, number 00. On the bench, from left to right: GWYNETH "GUTS" PARRISH-OKONKWO, 30s, pivot, taping her wrists; INDIRA "NAILS" CHAKRABORTY, 20s, blocker, brushing glitter across her cheekbones; MAUREEN "MO" DELACROIX-KELLY, 40s, the oldest skater, pumping her fist against her palm; and TALLULAH "TULLY" SEKIBO, 19, the rookie, ghost-white, holding her helmet like a hymnal. At the end sits BLANCA "BONES" ZARATE-WILLIAMS, 30s, jammer, headphones on, eyes closed.
[beat 1] ROZ: Listen up. They do. Even Bones lowers a headphone.
[beat 2] ROZ: We're down forty points. Second half. They have the best blockers in the league. We have a rookie and a prayer.
[beat 3] TULLY: Coach. ROZ: Yes, Tully. TULLY: I think I'm going to be sick. ROZ: Good. Be sick now. Not on the track. Tully nods. Swallows.
[beat 4] ROZ: Guts, you're pivot. You set the pace. Nails, you take the inside lane. Mo, you cover Bones. Bones, you jam. Tully, you... TULLY: Stand there? ROZ: You block. And you stay on your skates.
[beat 5] GUTS: Coach, what's the plan? ROZ: The plan is we don't lose. NAILS: That's not a plan. ROZ: It's the only one I've got. MO: Roz, she's right.
[beat 6] BONES: It's a good plan. Everyone looks at Bones. She rarely speaks. BONES: My plan is to go through them.
[beat 7] ROZ: Then go through them. GUTS: And we follow. NAILS: And we hit. MO: And we hit again. TULLY: And I stay on my skates. ROZ: That's all I ask.
[beat 8] A buzzer sounds in the hall. Roz opens the door. Roar of the crowd floods in. ROZ: Ladies. Make me proud.
[beat 9] One by one they rise. Bones last.
[beat 10] At the door she pauses, puts a hand on Tully's shoulder. BONES: First hit is the hardest. After that it's just skating. TULLY: Okay. BONES: Okay.
[beat 11] They file out. Roz watches them go, jaw working. Then she follows them into the light.

### SCENE s00159 | EXT. SNOWFIELD - BELOW A CRASHED BUSH PLANE - DAY
Characters: ASTRID VESTERGAARD-NNAMDI
[beat 0] White. Everything white. A twisted aluminum wing juts from a drift like a broken bone. Wind scours the ridge. ASTRID VESTERGAARD-NNAMDI, 30s, in a torn orange parka, kneels beside a battered satchel. Her face is cracked with cold. A tiny emergency radio sits in her lap, its antenna taped to a ski pole.
[beat 1] She lifts it. Presses the key. Releases. Static. She tries again. Static.
[beat 2] She sets it down. Breathes. Fumbles in the satchel, withdraws a small digital recorder, and presses PLAY.
[beat 3] ASTRID: Day two. I'm okay. Cold, but okay. I keep calling. Nobody answers. She listens, eyes shut.
[beat 4] ASTRID: If you find this, tell Mom I wasn't scared.
[beat 5] Her mouth twists. She turns the recorder off.
[beat 6] She looks at the wing. At the sky. At the ridge, where a shape, grey, hunched, sways.
[beat 7] She stills. Her hand finds the pistol flare in her pocket.
[beat 8] The shape resolves. A caribou. It stares. She stares. A moment of animal truce.
[beat 9] It turns and ambles over the ridge. She lets out a shuddering breath, laughs once, short, ragged.
[beat 10] The radio crackles. Three clicks. A pause. Three clicks again, from far away.
[beat 11] She grabs it. Fumbles. Presses the key. ASTRID: This is Astrid. This is Astrid Vestergaard. I'm alive.
[beat 12] She drops her head. Snow stings her cheek.
[beat 13] She closes her eyes and listens to the radio.

### SCENE s00160 | INT. DRIVE-THROUGH WEDDING CHAPEL - NIGHT
Characters: LENNY, ABIODUN, BIANCA STROZZI-OKORO, ELIAS NAKAMURA-FLORES
[beat 0] Pink neon. A window hatch cut into a stucco wall. An organ plays on a loop from a speaker on a post. A plastic arch of roses. Inside the booth: REVEREND-ISH LEONARD "LENNY" ABIODUN, 50s, in a rented robe, drinks from a paper cup.
[beat 1] A car pulls up. Headlights wash the arch. Out of the driver's window leans BIANCA STROZZI-OKORO, 30s, in a white dress and a leather jacket. In the passenger seat sits ELIAS NAKAMURA-FLORES, 30s, bow tie crooked.
[beat 2] LENNY: Welcome to the Chapel of Quick Vows. What's your order? BIANCA: Two vows, no fries.
[beat 3] ELIAS: We'd like the premium. LENNY: The premium has a rose. ELIAS: Then give us the rose. BIANCA: Elias, we don't have time. ELIAS: Bianca, the rose is five dollars. LENNY: It's a real rose. BIANCA: It's plastic. LENNY: It's a real plastic rose. ELIAS: We'll take the rose.
[beat 4] Bianca sighs. Hands cash. Lenny passes a rose through the window. Elias holds it. She snatches it. They both laugh.
[beat 5] LENNY: Names? BIANCA: Bianca Strozzi-Okoro. ELIAS: Elias Nakamura-Flores.
[beat 6] LENNY: Do you, Elias, take this woman... ELIAS: I do. LENNY: I haven't finished. BIANCA: He knows the rest. LENNY: Do you, Bianca... BIANCA: Absolutely.
[beat 7] LENNY: By the power vested in me by the state of Nevada and a two-day online course... ELIAS: Lenny. LENNY: ...I pronounce you... BIANCA: Lenny! LENNY: ...married.
[beat 8] Silence. The organ stutters. Elias leans out and kisses Bianca. She grabs his lapel. The horn honks, long and joyful.
[beat 9] LENNY: That's twelve dollars, plus tip.
[beat 10] BIANCA: We have to talk about my mother. ELIAS: What about your mother? BIANCA: She's in the back seat.
[beat 11] A hand rises over the headrest. A tiny wave. Lenny drops his cup.

### SCENE s00161 | INT. GENERATION SHIP "MERIDIAN" - SEED VAULT - SHIP'S NIGHT
Characters: CAPTAIN IFEOMA ROTHSCHILD-ADAMU, CHIEF BOTANIST HAKON LEIVESTAD, ENGINEER PRAVEEN MBANDAKA-DOYLE, TECHNICIAN SOLENNE ACHTERBERG-NGO, YUSUF KAZEMI-BROOKS, BRIDGE, COMMANDER DEWITT LARKSPUR-OSEI, LARKSPUR
[beat 0] A frozen cavern of steel drawers, floor to ceiling. Blue frost on the rails. Breath fogs in the air. Five crew in thermal suits, headlamps swinging, work a cart down the center aisle. CAPTAIN IFEOMA ROTHSCHILD-ADAMU, 50s, leads. CHIEF BOTANIST HAKON LEIVESTAD, 40s, carries a scanner. ENGINEER PRAVEEN MBANDAKA-DOYLE, 30s, hauls a toolbox. TECHNICIAN SOLENNE ACHTERBERG-NGO, 20s, monitors a wrist display. And YUSUF KAZEMI-BROOKS, 30s, medic, trails with a field kit.
[beat 1] IFEOMA: Vault Four. Be quick. The air scrubbers fail in nine minutes. HAKON: Drawer four-twelve. PRAVEEN: Four-twelve, four-twelve.
[beat 2] SOLENNE: Temperature's rising. YUSUF: How much? SOLENNE: Two degrees. In a minute. IFEOMA: Move.
[beat 3] They reach the drawer. Hakon scans. Green light. He pulls. Inside: row upon row of tiny vials, frosted white.
[beat 4] HAKON: The wheat. PRAVEEN: Take it. HAKON: All of it.
[beat 5] He lifts a rack. Hands it to Solenne. She slides it into a cooler. Yusuf hovers, anxious.
[beat 6] The ship shudders. A klaxon begins, low and pulsing.
[beat 7] IFEOMA: Bridge, status. BRIDGE: Captain, we've lost cooling on Deck Nine. You have six minutes. IFEOMA: Understood.
[beat 8] At the far end of the aisle, a hatch slides open. A figure steps through, silhouetted by red emergency light. COMMANDER DEWITT LARKSPUR-OSEI, 60s, black uniform, a sidearm drawn, stands in the doorway.
[beat 9] LARKSPUR: Nobody touches the seed.
[beat 10] The five crew freeze. Hakon, mid-lift, half-turns. Praveen's toolbox hits the floor. Solenne steps back. Yusuf raises both hands. Ifeoma does not move.
[beat 11] IFEOMA: Commander. The vault is failing. LARKSPUR: The vault is mine. IFEOMA: The ship will starve. LARKSPUR: The ship will obey.
[beat 12] A tense silence. The klaxon pulses. SOLENNE: Captain... IFEOMA: Easy. HAKON: The wheat is warming.
[beat 13] Ifeoma takes one slow step forward, palms open. IFEOMA: Dewitt. We both took the oath. LARKSPUR: I took it first.
[beat 14] He steps closer. The gun trembles.
[beat 15] IFEOMA: Then keep it. Open the lock. Let us take the seed.
[beat 16] A beat. Then Larkspur lowers his weapon. Hand shaking, he pulls a keycard from his jacket and sweeps it over the panel. A deep thunk. The vault door opens wider.
[beat 17] LARKSPUR: Go.
[beat 18] They run. The cart rattles. Frost sprays from the wheels. Behind them, the Commander stays by the hatch, watching them vanish into the dark with the ship's future in a cooler.

### SCENE s00162 | EXT. SCHOOL BUS - RAILROAD CROSSING - DUSK
Characters: STRANGER, LOTTE FAIRBANKS-OJO, WENDELL
[beat 0] An old yellow bus sits dead on the tracks, hazards blinking. The engine ticks. A signal bell dings in the distance. A STRANGER, 17, in a letterman jacket, leans out of the open door. Beside him, on the steps, sits LOTTE FAIRBANKS-OJO, 17, holding a trumpet case.
[beat 1] STRANGER: It won't start. LOTTE: I noticed. STRANGER: Do you know cars? LOTTE: I know trumpets.
[beat 2] He laughs. She doesn't.
[beat 3] The bell dings faster. Far away, a train horn.
[beat 4] STRANGER: Okay. We should get off. LOTTE: I'm not leaving my trumpet. STRANGER: It's a trumpet. LOTTE: It was my grandfather's.
[beat 5] He looks down the track. The light grows. He looks at her.
[beat 6] STRANGER: What's your name? LOTTE: Lotte. STRANGER: Wendell. I mean, Wendell is my name. Wendell Dube. LOTTE: Hi, Wendell. WENDELL: Hi.
[beat 7] The horn blares. Closer.
[beat 8] He grabs her arm. She grabs the trumpet. Together they leap from the bus and roll down the gravel embankment.
[beat 9] Behind them, the train hits. A burst of yellow. A shower of steel. Silence.
[beat 10] Lotte sits up, trumpet case clutched to her chest. Wendell sits beside her, breathing hard.
[beat 11] LOTTE: Thanks. WENDELL: Sure.
[beat 12] She opens the case. The trumpet gleams, unscratched. She lifts it, blows a single, clean, brassy note.
[beat 13] They stare at each other. And laugh.

### SCENE s00163 | INT. PUDDING LANE BAKERY - NIGHT - 1666
Characters: MASTER THOMAS FARRIER-WELLS, MISTRESS GWENLLIAN FARRIER-WELLS, HOBB PETTIGREW, JOAN MACKENZIE-AJAYI, ABRAHAM BENVENISTE, STRANGER, SILVANUS
[beat 0] A low-beamed oven room. Flour in the air. Trays of unbaked loaves. A hearth glowing orange. Six people sit around a long table, sharing a late supper of bread and cheese by one candle. MASTER THOMAS FARRIER-WELLS, 50s, baker, at the head. His wife, MISTRESS GWENLLIAN FARRIER-WELLS, 40s. Their journeyman, HOBB PETTIGREW, 20s. The maid, JOAN MACKENZIE-AJAYI, teens. A traveling cloth merchant, ABRAHAM BENVENISTE, 60s. And a young STRANGER in a green cloak, hood up.
[beat 1] THOMAS: Eat. There's more in the oven. GWENLLIAN: There is always more in the oven. HOBB: Not if the master keeps counting. JOAN: He counts crumbs.
[beat 2] Abraham chuckles. The Stranger says nothing, breaking bread slowly.
[beat 3] ABRAHAM: Friend, you've eaten little. STRANGER: I'm saving room. ABRAHAM: For what?
[beat 4] STRANGER: For the fire.
[beat 5] A silence. Thomas sets down his knife. THOMAS: Sir?
[beat 6] STRANGER: Forgive me. My name is Silvanus Carew. I serve the Lord Mayor. I came to warn you. GWENLLIAN: Of what?
[beat 7] SILVANUS: Of this oven. THOMAS: My oven has stood thirty years.
[beat 8] SILVANUS: My lord says the wind is wrong tonight.
[beat 9] Thomas stares at him. Joan reaches for the poker, smothers the fire.
[beat 10] THOMAS: Hobb, damp the hearth! SILVANUS: Master baker, damp the hearth!
[beat 11] They speak at once, loud, and the silence afterward is a cliff. HOBB: Master? THOMAS: Do it.
[beat 12] Hobb leaps to the hearth, dumps a bucket. Steam billows. The room goes grey. Everyone coughs.
[beat 13] When it clears, Gwenllian is clutching Thomas's sleeve. Joan has her hand over her mouth. Abraham has risen.
[beat 14] Silvanus is smiling, sadly, as he lowers his hood. SILVANUS: Too late, I fear. The wind has already come.
[beat 15] From beyond the shutters, faint, a bell begins to ring.

### SCENE s00164 | INT. MATTRESS SHOWROOM - DAY
Characters: CASSIUS BLACKWOOD-ADEYEMI, MARIGOLD DUPONT-ASANTE
[beat 0] A cavernous retail floor of identical beds under bright lights. Price tags like confetti. A banner: "NOTHING DOWN! EVERYTHING SOFT!" CASSIUS BLACKWOOD-ADEYEMI, 40s, a sales manager in an ill-fitting suit, stands at a display bed holding a clipboard. Opposite him, MARIGOLD DUPONT-ASANTE, 30s, a regional auditor with a briefcase, stands with her arms folded.
[beat 1] CASSIUS: Welcome to Bedrock Mattress Gallery. May I interest you in a night of salvation?
[beat 2] MARIGOLD: I'm from corporate. CASSIUS: Ah. MARIGOLD: I'm here to audit your sales. CASSIUS: Of course.
[beat 3] MARIGOLD: You're down sixty percent. CASSIUS: It's a down market. MARIGOLD: Mattresses are never down. CASSIUS: They're flat, Marigold. MARIGOLD: That is not funny. CASSIUS: It's a little funny.
[beat 4] She walks the floor, scribbling. He trails her, wringing his hands.
[beat 5] MARIGOLD: Where is everyone? CASSIUS: Lunch. MARIGOLD: It's two p.m. CASSIUS: Long lunch. MARIGOLD: Cassius. CASSIUS: Union. MARIGOLD: You don't have a union. CASSIUS: We have a book club. MARIGOLD: That's not the same. CASSIUS: They read a lot.
[beat 6] She stops at a display bed. Presses a hand to the mattress. It sighs. She pokes it. Pokes again.
[beat 7] MARIGOLD: This model is called the "Cloud Nine"? CASSIUS: Yes. MARIGOLD: It's lumpy. CASSIUS: It's organic.
[beat 8] She sits on the edge. Tests it. Lies back. Her eyes drift shut.
[beat 9] MARIGOLD: Oh. CASSIUS: Yes. MARIGOLD: Oh, no. CASSIUS: Corporate always says that.
[beat 10] MARIGOLD: This is the best mattress I've ever laid on. CASSIUS: Why do you think nobody's at lunch?
[beat 11] She sits up slowly. Cassius gestures behind her.
[beat 12] Along the back wall, twelve employees lie on twelve mattresses, hands folded on their chests, eyes closed, perfectly still. A soft, collective snore rises.
[beat 13] Marigold looks at them. Looks at her clipboard. Looks at Cassius.
[beat 14] Slowly, she lowers the clipboard, takes off her shoes, and sets them neatly on the floor. Then she lies back down.
[beat 15] MARIGOLD: How much? CASSIUS: Nothing down. MARIGOLD: Of course.
[beat 16] Cassius pulls a blanket from a rack and lays it over her. He tiptoes away, switching off the lights one by one.

### SCENE s00165 | INT. TAXIDERMY SHOP - BACK ROOM - NIGHT
Characters: STRANGER, PRIYA, NAKASHIMA, BRONWYN OKORO-LINDHOLM, SOFIA CALDERON-BEAUMONT, IMANI THOMPSON-REYES, WILLA ACHTERBERG, MARGUERITE
[beat 0] A cramped room hung with glass-eyed stags and mounted pheasants. A sleepover in sleeping bags on a threadbare rug. A single lantern. Six girls, thirteen and fourteen, cross-legged in a ring. A STRANGER among them, a girl none of the others quite remembers inviting, sits at the edge of the lantern's reach, face half in shadow. PRIYAMVADA "PRIYA" NAKASHIMA, 13, hugs a pillow. BRONWYN OKORO-LINDHOLM, 14, tells a story with a flashlight under her chin. SOFIA CALDERON-BEAUMONT, 13, braids her hair. IMANI THOMPSON-REYES, 14, flips through a magazine. And WILLA ACHTERBERG, 13, looks at the ceiling.
[beat 1] BRONWYN: ...and the taxidermist never came home. SOFIA: Stop. BRONWYN: They found him in his own shop, stuffed. PRIYA: That's gross. IMANI: That's the plot of a movie. BRONWYN: It's the plot of this shop.
[beat 2] WILLA: Someone is standing behind the deer. Everyone looks. A stag's head hangs on the wall, its antlers throwing shadow. Nothing.
[beat 3] SOFIA: There's no one. WILLA: I saw an eye. IMANI: It's glass.
[beat 4] The lantern gutters. The Stranger leans forward. Her face enters the light: pale, calm, smiling.
[beat 5] STRANGER: Do you want to know my name? PRIYA: We thought you came with Sofia. SOFIA: I thought she came with you.
[beat 6] STRANGER: My name is Marguerite.
[beat 7] BRONWYN: Marguerite is the name on the shop door. MARGUERITE: Yes.
[beat 8] She rises. The ring of girls draws back. The lantern flickers out.
[beat 9] In the dark, six pairs of eyes catch the last glint of the stag's glass stare. Then, one by one, they stop blinking.

### SCENE s00166 | INT. SALT MINE - CORPORATE RETREAT HALL - DAY
Characters: FELICITY ARMSTRONG-NWOSU, GIDEON PALAMARCHUK-DIOP, ANNELIESE VON TRAPP-OKAFOR
[beat 0] A vaulted chamber a thousand feet underground, carved from white crystal. String lights. Folding tables. A flip chart reads "OUR CULTURE: DEPTH." FELICITY ARMSTRONG-NWOSU, 40s, a regional director in a hard hat and blazer, stands in front of the flip chart with a marker. At the table sits GIDEON PALAMARCHUK-DIOP, 30s, an analyst, glaring at the screen of a phone that has no signal.
[beat 1] She taps the chart.
[beat 2] FELICITY: Depth. Roots. Foundation. Let's build this from the ground down. GIDEON: We are literally underground. FELICITY: Exactly.
[beat 3] He sighs. She writes "TRUST" in the margin and underlines it twice. FELICITY: Trust.
[beat 4] He looks at the phone. Looks at her. Puts the phone away.
[beat 5] GIDEON: Okay. I trust you. FELICITY: Do you? GIDEON: No. FELICITY: Good. That's honest.
[beat 6] She sets down the marker. The mine hums with ventilation.
[beat 7] The elevator door dings. A third person steps off, brisk and bright-eyed: ANNELIESE VON TRAPP-OKAFOR, 50s, a consultant in a white lab coat, carrying a wooden box.
[beat 8] ANNELIESE: I'm sorry I'm late. The cage was slow. FELICITY: Anneliese! We were just on trust. ANNELIESE: Wonderful. I brought the exercise.
[beat 9] She sets the box on the table. Opens it. Inside, eight small salt crystals, glittering.
[beat 10] ANNELIESE: Each of you will pick one. Hold it. Tell me what it means. Gideon holds one up. Peers at it. Felicity takes another, hesitates, turns it over.
[beat 11] GIDEON: It means my hands are cold. ANNELIESE: Gideon. GIDEON: It means I miss the sun. ANNELIESE: That's a start.
[beat 12] FELICITY: It means I have not seen my kids in a week.
[beat 13] Silence. Gideon looks at her. She stares at the crystal, not at him.
[beat 14] ANNELIESE: That's the exercise. FELICITY: Is it? ANNELIESE: Yes.
[beat 15] Felicity blinks hard. Gideon pulls a chair beside her. He doesn't say anything. After a moment, she sets the crystal down.
[beat 16] FELICITY: Let's go up. GIDEON: The elevator doesn't run until four. FELICITY: Then we'll wait.
[beat 17] They sit. Anneliese packs the box. The lights hum.

### SCENE s00167 | INT. HOTEL BALLROOM - EMPTY - NIGHT
Characters: CONGRATULATIONS, BAZ, WOJCIECHOWSKI-OKAFOR
[beat 0] Round tables, white cloths. A raised dais. A banner: "CONGRATULATIONS, BARRY & PETRA." Empty champagne flutes. BARRY "BAZ" WOJCIECHOWSKI-OKAFOR, 40s, in a rumpled tux, stands behind the microphone. A tape recorder sits on the podium beside him.
[beat 1] He taps the mic. Feedback.
[beat 2] BAZ: Good evening, everyone. I'm Barry, the best man.
[beat 3] He pauses. Nobody is there. BAZ: Okay. Rehearsal.
[beat 4] He presses RECORD on the tape. Clears his throat.
[beat 5] BAZ: Petra and I go way back. To fourth grade, when she punched me in the face.
[beat 6] He stops. Presses STOP. REWIND. PLAY. BAZ: ...when she punched me in the face.
[beat 7] He winces. BAZ: Too violent.
[beat 8] He presses RECORD again. BAZ: Petra and I go way back. To fourth grade, when she gave me a high-five.
[beat 9] PLAY. BAZ: ...gave me a high-five. BAZ: Too nice. She hit me.
[beat 10] He sighs. RECORD.
[beat 11] BAZ: To the happy couple. May your marriage be like a good wine. Aged, complex, and occasionally bitter.
[beat 12] PLAY. BAZ: ...occasionally bitter. BAZ: Horrible. Terrible. Delete.
[beat 13] He slumps over the podium. Stares at the empty room. Slowly, he straightens.
[beat 14] BAZ: Petra. Barry. I'm so happy for you both. I mean it.
[beat 15] PLAY. BAZ: I'm so happy for you both. I mean it.
[beat 16] He listens. Nods once. He tucks the tape recorder into his pocket, adjusts his tie, and walks off the dais, whistling.

### SCENE s00168 | INT. MOUNTAIN VILLAGE DENTAL CLINIC - DAY
Characters: AMADEUS BRZEZINSKI-OYELARAN, ASSISTANT KALINDA ROSSITER-MWANGI, ELDER ODYSSEUS PAPADAKIS-NGUYEN, TEODORA, JACOB, MIRIAM
[beat 0] One chair. One lamp. A window onto a goat pasture. A bell tinkles. DR. AMADEUS BRZEZINSKI-OYELARAN, 50s, white coat, mask, pulls on gloves. Beside him, ASSISTANT KALINDA ROSSITER-MWANGI, 30s, lays out instruments. In the chair: the village headman, ELDER ODYSSEUS PAPADAKIS-NGUYEN, 70s, jaw clenched. At the door, three villagers wait: TEODORA, 30s; JACOB, 20s; and a child, MIRIAM, 8, clutching a goat-shaped toy.
[beat 1] AMADEUS: Open, please. ODYSSEUS: No. AMADEUS: Elder, I need to look. ODYSSEUS: Look from there. KALINDA: Sir. Just a peek.
[beat 2] He opens. Amadeus peers. Tuts.
[beat 3] AMADEUS: That is the worst molar I have seen in thirty years. ODYSSEUS: Thank you. AMADEUS: It's not a compliment. ODYSSEUS: It is to me.
[beat 4] Calm. The clinic is bright and still. A goat bleats outside. Teodora and Jacob exchange glances. Miriam hugs her toy tighter.
[beat 5] AMADEUS: Kalinda. Local. She hands him the syringe. He lifts it. The elder's eyes widen. The villagers lean forward.
[beat 6] Suddenly, a roar from the pasture. The door slams open and a goat charges in, horns down, bell clanging, scattering Teodora and Jacob and Miriam, who scream and leap onto the waiting chairs.
[beat 7] The goat skids on the tile, slams into the instrument tray. Steel clatters. The elder bolts upright. Amadeus drops the syringe. Kalinda lunges for the goat. It dodges. Everyone shouts at once.
[beat 8] ODYSSEUS: That's my goat! AMADEUS: Your goat!
[beat 9] The goat, panting, plants itself in the dental chair, chewing a paper bib.

### SCENE s00169 | INT. CAR FERRY - UPPER DECK DINING ROOM - NIGHT
Characters: MATRIARCH ZAINAB ABDULLAHI-PREWITT, CYRIL, AUGUSTINE, PERPETUA, ROSAMUND, THADDEUS
[beat 0] A long cafeteria table bolted to the floor. Fluorescent lights. A view of black water. The ferry throbs beneath them. Six members of the Abdullahi-Prewitt family sit with trays of congealed shepherd's pie. A funeral reception, after the funeral. MATRIARCH ZAINAB ABDULLAHI-PREWITT, 70s, at the head. Her sons, CYRIL, 50s, and AUGUSTINE, 40s, glare across the table. Cyril's wife, PERPETUA, 50s, grips her napkin. Their daughter ROSAMUND, 20s, scrolls on her phone. And the youngest, THADDEUS, 16, keeps his eyes on the water.
[beat 1] ZAINAB: Eat. He would have wanted us to eat.
[beat 2] CYRIL: He wanted the boat. AUGUSTINE: He wanted the boat sold. CYRIL: He wanted it kept. PERPETUA: Cyril, please. AUGUSTINE: You never listened to him. CYRIL: I listened. I just disagreed.
[beat 3] ROSAMUND: Can we not do this on a ferry? THADDEUS: We're not leaving a ferry.
[beat 4] ZAINAB: Quiet, all of you. They are not quiet.
[beat 5] AUGUSTINE: Dad's will says I sell it. CYRIL: Dad's will says I decide. PERPETUA: Both of you, stop.
[beat 6] AUGUSTINE: You always take his side. PERPETUA: I take no side. I take the family's.
[beat 7] ROSAMUND: There is no family. THADDEUS: I'm still here.
[beat 8] Silence. The ferry lurches over a wave. Trays slide.
[beat 9] Zainab rises, steadies herself on the table. ZAINAB: Your father's will is in my purse. He wrote it on a napkin. CYRIL: A napkin? ZAINAB: A napkin.
[beat 10] She opens her purse. Withdraws a folded, grease-spotted paper napkin. She sets it down. Flattens it. Everyone leans in.
[beat 11] ZAINAB: "Give the boat to whoever sails it." Silence. ZAINAB: That's all.
[beat 12] Thaddeus rises, slowly. He crosses to the window. He looks out into the dark at the glow of the wheelhouse.
[beat 13] THADDEUS: I know how.
[beat 14] The others look at him. For the first time all evening, nobody speaks.

### SCENE s00170 | INT. FROZEN TUNA AUCTION HALL - BEFORE DAWN
Characters: HANA ARAKAWA, BIG LOU DELACROIX, PRIYA NAIR, TEDDY BRANCA, INSPECTOR WU, DISPATCH
[beat 0] Concrete floor, steel hooks, rows of frozen tuna laid out like torpedoes under hard white lights. Breath hangs in the air. HANA ARAKAWA, 40s, crew leader, wears a fish-market apron over a black thermal. BIG LOU DELACROIX, 50s, heavyset, carries a hand truck. PRIYA NAIR, late 20s, tablet strapped to her forearm, checks tags. TEDDY BRANCA, 30s, jittery, wears a forklift vest. INSPECTOR WU, 60s, a night guard with a thermos, stands by the scale.
[beat 1] HANA: Number forty-one. The one with the red tag. PRIYA: Forty-one is clean. The case is in the belly. Eleven kilos, give or take.
[beat 2] BIG LOU: Eleven kilos of what, again? Nobody told me it was in a fish. HANA: Bearer bonds. Sealed in plastic. Don't ask who put them there. TEDDY: I'm asking. I'm asking right now.
[beat 3] HANA: Wu is on the scale. When he turns, Lou, you move the truck.
[beat 4] INSPECTOR WU: You people are early again. HANA: Auction prep, Inspector. Same as every Tuesday.
[beat 5] Wu sips from the thermos, then steps away from the scale. Lou rolls the hand truck forward.
[beat 6] Teddy drops a clipboard. It clatters. Everyone freezes.
[beat 7] DISPATCH: Unit nine, come in. Unit nine. INSPECTOR WU: Nine here. Go ahead. DISPATCH: Customs wants forty-one held for inspection. Do not release it.
[beat 8] Wu looks at the red tag. Looks at Hana. Hana smiles with her mouth only.
[beat 9] HANA: Dual-dialogue time, boys. BIG LOU: Customs? Nobody said customs. PRIYA: I flagged it clean an hour ago, I swear.
[beat 10] HANA: Priya, the tag. Swap it for thirty-eight. PRIYA: Thirty-eight is a dud. It's actual fish.
[beat 11] HANA: Then it'll pass. Teddy, distract him. TEDDY: With what? HANA: Cry. You're good at it.
[beat 12] Teddy sobs loudly, dramatically. Wu turns. Priya swaps the tags. Lou hauls forty-one onto the truck and wheels it toward the loading door.
[beat 13] DISPATCH: Unit nine, confirm hold on forty-one. INSPECTOR WU: Forty-one is on hold. Confirmed.
[beat 14] The loading door rolls up. Gray dawn floods in. Lou pushes through. The others scatter.

### SCENE s00171 | INT. LAUNDROMAT - NIGHT
Characters: BERNADETTE COLE, NACHO, REYES
[beat 0] Dryers tumble. One flickering tube. Rain on the glass.
[beat 1] BERNADETTE COLE, 50s, folds a man's shirts. Precise. Too precise.
[beat 2] IGNACIO "NACHO" REYES, 20s, enters, soaked, a duffel on his shoulder. He drops it. Takes the seat across from her. She does not look up.
[beat 3] He sets a ring on the folding table. She folds a sleeve. He taps the ring. She smooths a collar.
[beat 4] BERNADETTE: You're late. NACHO: Bus was slow. BERNADETTE: Eleven years, Ignacio. The bus was slow.
[beat 5] NACHO: I wrote you. BERNADETTE: You wrote Dad. Dad's dead. NACHO: I know he's dead. I was in the room. BERNADETTE: You were in the hallway.
[beat 6] NACHO: Okay. The hallway. I was in the hallway, Bernie, because you told me not to come in. You said, quote, he doesn't want you here. BERNADETTE: He didn't.
[beat 7] NACHO: He asked for me. The nurse told me. BERNADETTE: The nurse didn't know him.
[beat 8] NACHO: Neither did you.
[beat 9] She stops folding. A dryer buzzes. Neither moves.
[beat 10] Then she sweeps the shirts off the table with one arm. They scatter across the floor.
[beat 11] Nacho stands, kicks the duffel, and the ring spins off the table and rolls under a machine.

### SCENE s00172 | INT. HOLLOW GIANT OAK - TWILIGHT
Characters: QUEEN ELSPETH, SIR BRAM THORNWICK, PAGES, TWIG, NETTLE, STRANGER, WRENNA
[beat 0] A throne room carved inside a dead tree. Roots for pillars. Fireflies in jars. QUEEN ELSPETH, 70s, sits wrapped in moss-green wool. Her crown is a ring of antlers. A cloaked FIGURE stands in the doorway, dripping. Beside the throne, SIR BRAM THORNWICK, 50s, one-armed knight, rests a hand on his hilt. Two PAGES, TWIG and NETTLE, twins, 10, hide behind a root.
[beat 1] STRANGER: I came about the debt. QUEEN ELSPETH: Debts are paid at dawn. This is dusk. STRANGER: Then I'm early.
[beat 2] Bram steps forward. Sword half drawn. SIR BRAM: Name yourself.
[beat 3] The Stranger lowers the hood. A woman, 30s, bark-pale skin, eyes like polished amber. STRANGER: You know it. Say it, Brammy.
[beat 4] Bram releases the sword. Stares.
[beat 5] SIR BRAM: Wrenna.
[beat 6] WRENNA: Wrenna Ashgrove. The tree-keeper's daughter. The one you left under the roots.
[beat 7] QUEEN ELSPETH: You were dead. WRENNA: So were the roots, once.
[beat 8] Twig whispers to Nettle. Nettle shushes her. TWIG: Is she a ghost? NETTLE: Ghosts don't drip.
[beat 9] Wrenna sets a small acorn on the floor. It cracks. A green shoot unfurls, and stops. Wilts. She sighs.
[beat 10] WRENNA: I thought I'd have more left. QUEEN ELSPETH: Sit, child.
[beat 11] Wrenna sits on a root. Elspeth sets her crown aside.
[beat 12] QUEEN ELSPETH: The debt is forgiven. WRENNA: I didn't come to be forgiven. SIR BRAM: Then what?
[beat 13] WRENNA: To see it. Once. Before it falls.
[beat 14] The fireflies dim, one jar at a time.

### SCENE s00173 | EXT. SALT FLATS - MIDDAY
Characters: DOROTHY MAE PRUITT, LORETTA PRUITT, JUDGE HARLAN CREEL, MILO
[beat 0] A white, cracked desert under a merciless sun. Heat shimmers off the ground. In the distance, an overturned jeep lies on its roof like a dead beetle. DOROTHY MAE PRUITT, 50s, a surveyor in a wide-brimmed hat, sits in the thin shade of the jeep. Her sister, LORETTA PRUITT, 40s, kneels beside her with a canteen held upside down, shaking out the last drops. Across from them stands JUDGE HARLAN CREEL, 60s, a man in a ruined linen suit, one shoe missing. Behind him, MILO, 20s, their driver, drags a spare tire from the wreck and tries to prop it against the axle as a sunshade.
[beat 1] Dorothy watches Loretta tilt the canteen. Loretta does not meet her eyes.
[beat 2] Harlan licks his cracked lips and takes a step toward the canteen. Milo drops the tire with a grunt, then stands between Harlan and the sisters without seeming to decide to.
[beat 3] HARLAN: There's a well at the old mine. Four miles. DOROTHY: Four miles that way, or four miles you think that way? HARLAN: I'm not in the habit of guessing.
[beat 4] LORETTA: You're missing a shoe, Judge. Harlan glances at his bare foot. He tucks it behind the other.
[beat 5] MILO: She's right about the distance. I drove past it Thursday. DOROTHY: Thursday you drove past everything.
[beat 6] Milo says nothing. He picks the tire up again.
[beat 7] Loretta caps the empty canteen and slowly hands it to Dorothy. Dorothy turns it in her palm, then hands it back. Loretta puts it in her bag. Neither speaks. Harlan watches the trade as if it were a verdict.
[beat 8] HARLAN: If we leave now, we reach it by dusk. LORETTA: And if we wait? HARLAN: Then we wait for a different problem.
[beat 9] Dorothy stands, brushes salt from her skirt. She takes Loretta's hat and sets it on her sister's head, straightening the brim. DOROTHY: Four miles.
[beat 10] She starts walking. Loretta follows. Harlan hesitates, then limps after them. Milo leaves the tire behind and falls in last, eyes on the horizon.

### SCENE s00174 | INT. STALLED FERRIS WHEEL GONDOLA - NIGHT
Characters: GUS, FELLOWES, TAMSIN OYELARAN, MAN IN YELLOW RAINCOAT, YELLOW RAINCOAT, PIKE
[beat 0] Dead carnival below. Fog. The gondola sways. AUGUSTA "GUS" FELLOWES, 60s, retired carny, grips the rail. Across from him, TAMSIN OYELARAN, 20s, scrolls a dead phone. Beside her, a MAN IN A YELLOW RAINCOAT, face hidden under a hood, sits perfectly still.
[beat 1] GUS: Operator'll be back. They always come back. TAMSIN: Who's they? GUS: Nobody. Nobody's there.
[beat 2] Something below laughs. Tinny. Calliope music starts, off-key. TAMSIN: Do you hear that?
[beat 3] The Man in the Yellow Raincoat lifts his head. MAN IN YELLOW RAINCOAT: Ticket, please.
[beat 4] Gus pats his pockets. Tamsin shakes her head. TAMSIN: We didn't buy tickets. MAN IN YELLOW RAINCOAT: Everyone buys one.
[beat 5] The hood falls back. Painted grin. No eyes. Gus grabs Tamsin's wrist.
[beat 6] GUS: Pike. It's Pike. Not again. PIKE: You remember me, Gus.
[beat 7] The gondola drops a foot. Stops. The grin widens.

### SCENE s00175 | INT. MUNICIPAL CLOCK TOWER - MECHANISM ROOM - DAY
Characters: ARTHUR PENROSE-LIND, MIRIAM VOSS, DEZ, OYELOWO, CALLUM BRIGHT
[beat 0] A cramped stone chamber crowded with brass gears the size of cartwheels. A pendulum swings slowly behind a wire cage. Dust floats in the shafts of light from a narrow slit window. The ticking is steady, enormous, almost restful. ARTHUR PENROSE-LIND, 60s, silver mustache, tweed jacket, kneels over a toolbox with the unhurried air of a man being paid by the hour. His partner MIRIAM VOSS, 50s, sharp-eyed and gray-braided, sits on an upturned bucket with a ledger on her knee. DESMOND "DEZ" OYELOWO, 30s, in a maintenance jumpsuit, oils a gear with a long-spouted can while keeping one ear on the stairwell. Perched on the stairs, a nervous teenager, CALLUM BRIGHT, 17, holds a walkie-talkie he has not been asked to use.
[beat 1] ARTHUR: Fine work, Dez. The old girl's never sounded better. DEZ: She hasn't been oiled since Truman.
[beat 2] MIRIAM: The bank vault is directly below the east face. Four feet of brick, then the floor. ARTHUR: And the pendulum shaft goes down how far? MIRIAM: Right to the ceiling of the vault annex. Nobody ever sealed it.
[beat 3] Arthur nods, pulls a coil of rope from the toolbox, and measures it against his arm. Dez sets down the oil can and checks the cage latch.
[beat 4] Callum shifts on the step. The walkie-talkie crackles with static, and he fumbles it to silence. CALLUM: Sorry. ARTHUR: Nothing to be sorry for, lad. Nothing at all.
[beat 5] MIRIAM: Thursday, then. After the noon chime, before the council tour. DEZ: The council tour is at one. MIRIAM: Then we have forty minutes. Plenty.
[beat 6] The clock gathers itself and strikes the quarter hour. The gears turn. Nobody flinches.

### SCENE s00176 | INT. FLOODED COUNTY COURTHOUSE - MAKESHIFT COURTROOM - DAY
Characters: JUDGE OLUWASEUN ADEYEMI, DISTRICT ATTORNEY RHONDA KESSLER, PUBLIC DEFENDER MARCUS TIBBS, SKEETER, DUVAL, COURT CLERK PENNY FARRELL, BAILIFF GUS OKAFOR
[beat 0] Sandbags by the doors. Folding tables. A generator hums. JUDGE OLUWASEUN ADEYEMI, 60s, presides from a card table. DISTRICT ATTORNEY RHONDA KESSLER, 40s, stands with a soggy file. PUBLIC DEFENDER MARCUS TIBBS, 30s, trouser cuffs wet. The defendant, WALTER "SKEETER" DUVAL, 50s, sits in rubber boots. COURT CLERK PENNY FARRELL, 20s, types on a laptop on a milk crate. BAILIFF GUS OKAFOR, 50s, leans on the doorframe.
[beat 1] JUDGE ADEYEMI: Be seated. We'll proceed on the record, such as it is.
[beat 2] RHONDA: Your Honor, the State requests a continuance. Half our exhibits are under four feet of river. MARCUS: Defense objects. My client has waited eleven months. He can't wait another flood season.
[beat 3] JUDGE ADEYEMI: Mr. Tibbs, your client is charged with stealing a boat. MARCUS: Borrowing, Your Honor. And that boat is the only reason forty people made it off Pratt Street last night. RHONDA: Forty people who would not have needed rescuing if he hadn't taken the boat from the marina in the first place. MARCUS: That is a logical pretzel.
[beat 4] SKEETER: Can I say something? MARCUS: No. JUDGE ADEYEMI: Let him. SKEETER: I'd do it again, Judge. Ain't proud, ain't sorry.
[beat 5] RHONDA: Your Honor, that's practically a confession. JUDGE ADEYEMI: It's practically a sermon. Ms. Kessler, do you still wish to prosecute?
[beat 6] RHONDA: The State will reduce to trespass. MARCUS: Time served.
[beat 7] JUDGE ADEYEMI: Time served. Mr. Duval, return the boat with a thank-you note. SKEETER: Yes, ma'am.
[beat 8] JUDGE ADEYEMI: Court is adjourned. Mind the step.

### SCENE s00177 | INT. DRIED-OUT PLANETARIUM - NIGHT
Characters: DETECTIVE IMOGEN SALAZAR, REYNALD KOWALSKI, CURATOR ASTRID LUNDGREN, SECURITY GUARD BASHIR HALLOWAY, CORONER
[beat 0] Dome overhead. Cracked seats. Projector dust under a single work light. DETECTIVE IMOGEN SALAZAR, 40s, crouches by a chalk outline. Her partner, DET. REYNALD KOWALSKI, 50s, eats sunflower seeds. CURATOR ASTRID LUNDGREN, 60s, stands arms folded. SECURITY GUARD BASHIR HALLOWAY, 30s, lingers by the door. A voice crackles on Imogen's radio.
[beat 1] IMOGEN: Nobody touched the projector? ASTRID: Nobody has touched it in years.
[beat 2] REYNALD: Then who turned it on? BASHIR: Wasn't me. I was at the front desk. ASTRID: He was at the desk. I saw him.
[beat 3] REYNALD: You saw him at the desk at ten. Victim died at ten-thirty. BASHIR: I was at the desk until eleven.
[beat 4] IMOGEN: Quiet, all of you. The room goes still. Imogen presses the radio.
[beat 5] CORONER: Imogen, the stars on his jacket. They're real stars. Pins. Constellation of Orion. IMOGEN: Orion?
[beat 6] ASTRID: Orion is the show we never finished.
[beat 7] The projector hums to life. Above them, the dome blooms with stars. Orion rises. Bashir takes a step back.
[beat 8] REYNALD: Who's in the booth? ASTRID: No one. It's automatic. BASHIR: It's not automatic. Not anymore.
[beat 9] IMOGEN: Bashir. How would you know that?
[beat 10] Bashir does not answer. The stars drift. Reynald draws his weapon. Astrid draws a breath.
[beat 11] ASTRID: It was supposed to be a tribute. IMOGEN: To who? ASTRID: To the man in the outline. Yours truly built that show. I built it for him.
[beat 12] Reynald lowers the gun a few inches, then raises it again, pointing at Astrid. REYNALD: Ma'am, step away from the console.

### SCENE s00178 | EXT. ICE FLOE - ARCTIC DUSK
Characters: CAPTAIN LARS HOLMGREN, NURSE ELENI PAPADAKIS, DEEPAK RAO, FINN HOLMGREN
[beat 0] Gray sky. Wind scours the ice. A tent, flapping. A sled, half-buried. CAPTAIN LARS HOLMGREN, 50s, wraps a rope around his fist. NURSE ELENI PAPADAKIS, 30s, kneels by a wrapped shape. DEEPAK RAO, 40s, a cook, melts snow in a dented pot. A boy, FINN HOLMGREN, 12, watches the horizon.
[beat 1] LARS: Pack it up. We move at first light. ELENI: He can't be moved. LARS: He can't stay. DEEPAK: Soup. Only soup left. Sure.
[beat 2] Finn slowly turns from the horizon. FINN: Dad, the ice is cracking. LARS: It's always cracking. FINN: Louder, this time.
[beat 3] Lars glances down at the wrapped shape, then at Eleni. She holds his gaze and gently pulls the blanket over the face.
[beat 4] Lars takes off his gloves. Puts them on Finn. LARS: Hold these for me.
[beat 5] He walks to the sled and begins loading it.

### SCENE s00179 | INT. SYNERGEX CORP - OFFICE OF THE VICE PRESIDENT OF CULTURE - DAY
Characters: BE CHANGE, VICE PRESIDENT BARRETT QUIGLEY-STONE, PRUDENCE OKONJO
[beat 0] A glass-walled corner office that looks onto a parking structure. A yoga ball sits where a chair should. A neon sign on the wall reads "BE THE CHANGE (PENDING APPROVAL)." A whiteboard is covered with arrows that lead nowhere. Sunlight is filtered through a fake ficus. VICE PRESIDENT BARRETT QUIGLEY-STONE, 40s, sleeves rolled, wireless headset on one ear, bounces gently on the yoga ball. His hair is gelled into a decision. Across the desk sits PRUDENCE OKONJO, 30s, a quality analyst, pressed blazer, notebook on her knee, patience worn thin. In front of her is a paper cup of kombucha she has not touched.
[beat 1] BARRETT: Prudence. Thanks for jumping on this. PRUDENCE: You asked me to come at nine. It's nine-forty. BARRETT: Time is a social construct. But I hear you. Let's circle back to your feedback.
[beat 2] PRUDENCE: It's not feedback. It's a defect report. The product ships with a battery that overheats. BARRETT: We prefer "enthusiastic." PRUDENCE: It caught fire in testing. BARRETT: Enthusiastic. Let's workshop that.
[beat 3] Barrett stands, bounces once on the ball, and caps a marker. He writes ENTHUSIASM on the whiteboard and draws an arrow to a drawing of a flame. Prudence watches without blinking.
[beat 4] PRUDENCE: Barrett, I filed this report six weeks ago. BARRETT: And we love that. Proactive. Self-starter. That's the energy. PRUDENCE: It's still unanswered. BARRETT: Which is why I brought you here. I want to empower you to own the narrative. PRUDENCE: I don't want to own the narrative. I want to stop the shipment. BARRETT: Shipment is a strong word. PRUDENCE: Forty thousand units are in a warehouse in Ohio. Trucks leave Friday. BARRETT: Let's not boil the ocean.
[beat 5] Prudence puts the notebook on the desk. She picks up the kombucha and sets it down again, harder than she meant to. Liquid slops over the rim.
[beat 6] PRUDENCE: Do you know what a thermal runaway is? BARRETT: Sounds like a marathon. PRUDENCE: It's when a battery cell heats the next one and the next. It doesn't stop. It's a chain reaction in someone's pocket. BARRETT: And that's why we're building a culture of openness. PRUDENCE: You're not hearing me. BARRETT: I'm hearing the concern. I'm holding space for it.
[beat 7] Prudence stands. Her chair rolls backward and hits the ficus. A leaf falls off. It is plastic. PRUDENCE: People will get burned. BARRETT: Prudence. Breathe. PRUDENCE: Don't tell me to breathe. BARRETT: We have a mindfulness app. It's free for staff.
[beat 8] Prudence takes the marker out of his hand. She crosses out ENTHUSIASM and writes FIRE in letters a foot tall. The marker squeaks. Barrett's smile flickers, then holds. BARRETT: That's not on brand. PRUDENCE: Neither is a lawsuit. BARRETT: Now you're being negative. PRUDENCE: I'm being accurate.
[beat 9] Barrett slides off the yoga ball. It rolls away and bumps a wall. He picks up his headset, taps it. BARRETT: Hey, Dale. Quick favor, can you hold the trucks?
[beat 10] He listens. His face drops. BARRETT: What do you mean, they left Tuesday?
[beat 11] Prudence stares at him. Barrett slowly removes the headset and places it on the desk like a dead bird. PRUDENCE: Tuesday. BARRETT: There may have been a miscommunication. PRUDENCE: You called me in here to talk me out of it. The trucks were already gone. BARRETT: I was going to loop you in. PRUDENCE: You were going to loop me out.
[beat 12] She picks up her notebook. Barrett stands very still. The neon sign hums. Prudence flips to a fresh page, writes something, tears it out, and sets it on his desk. BARRETT: What is this? PRUDENCE: My resignation. And the number for the fire marshal.
[beat 13] She walks out. The door swings behind her. Barrett stares at the page. He sits on the floor where the yoga ball used to be, and the neon sign flickers off.

### SCENE s00180 | INT. ABANDONED LIGHTHOUSE - LENS ROOM - NIGHT
Characters: DETECTIVE NADIA KOROMA, UNIFORM OFFICER TREVOR LANE, HARBORMASTER OSWALD PRIEST, PHILIPPA ACHTERBERG
[beat 0] Wind howls through broken glass. A crushed lantern lies on its side. DETECTIVE NADIA KOROMA, 40s, kneels by a body-shaped tarp. UNIFORM OFFICER TREVOR LANE, 20s, holds a flashlight. HARBORMASTER OSWALD PRIEST, 60s, stands dripping in the doorway.
[beat 1] NADIA: Time of death? TREVOR: Coroner says midnight.
[beat 2] OSWALD: Midnight? I was here at midnight. NADIA: You were here? OSWALD: Checking the light. It was out. TREVOR: It's always out. NADIA: Mr. Priest, did you see anyone?
[beat 3] Footsteps on the spiral stair. DR. PHILIPPA ACHTERBERG, 50s, in a rain slicker, climbs into the room, medical bag in hand. DR. ACHTERBERG: Don't touch the tarp. NADIA: Doctor. OSWALD: That's not the coroner.
[beat 4] DR. ACHTERBERG: I'm his sister. I came for the body. NADIA: Your brother's dead?
[beat 5] Achterberg lowers the bag. Oswald looks at the floor. Trevor looks at Nadia.

### SCENE s00181 | EXT. ROOFTOP WATER TOWER - SUNSET
Characters: JUNIPER LOPEZ, WES, CHUKWU, DELPHINE ABERNATHY, TOMAS KOWALCZYK
[beat 0] A rusted ladder, a patched tank. Four teens sit on the catwalk with feet dangling. The town below is small and gold. JUNIPER LOPEZ, 16, plays with a bottle cap. WESLEY "WES" CHUKWU, 17, eats sunflower seeds. DELPHINE ABERNATHY, 16, writes in a notebook. TOMAS KOWALCZYK, 15, lies flat, staring up.
[beat 1] WES: Last summer before everything changes. JUNIPER: You're going, right? To the city? DELPHINE: Maybe. TOMAS: Clouds look like nothing.
[beat 2] Juniper flicks the bottle cap over the rail. It disappears.
[beat 3] WES: Somebody say something deep. TOMAS: The tank's leaking.
[beat 4] They all look down. A thin trickle runs along the catwalk. Nobody moves.

### SCENE s00182 | INT. OBSERVATORY BALLROOM - NIGHT
Characters: CELESTE MARCHETTI, JULIAN VOSS, WAITER, ISOLDE FAIRWEATHER
[beat 0] A gala under a brass telescope. Strings tune. Champagne flutes glint. Couples drift to the dance floor. CELESTE MARCHETTI, 30s, stands alone by the window in a green gown. Her ex, JULIAN VOSS, 30s, enters in a tuxedo, hesitates, then crosses to her. A WAITER, 20s, passes with a tray. Behind them, ISOLDE FAIRWEATHER, 60s, Celeste's aunt, watches over her fan.
[beat 1] JULIAN: You came. CELESTE: You invited me. JULIAN: I didn't think you'd say yes.
[beat 2] ISOLDE: Celeste, darling, the cake! CELESTE: In a minute, Auntie.
[beat 3] The waiter offers a flute. Julian takes two. Hands one to her. WAITER: Compliments of the house. JULIAN: To old times. CELESTE: To new ones.
[beat 4] ISOLDE: Julian, you've gotten thin. JULIAN: Hello, Isolde. ISOLDE: Are you eating? CELESTE: Auntie.
[beat 5] The music swells. Julian offers a hand. She looks at it. Behind her, Isolde fans faster. The waiter retreats. JULIAN: One dance. CELESTE: One.
[beat 6] She takes it. They step into the crowd, stiff at first, then not. Isolde lowers the fan and sighs. The waiter sets down his tray and leaves it.
[beat 7] ISOLDE: Fetch the cake knife, would you? She'll want it later. WAITER: Ma'am? ISOLDE: I said she'd want it. Go.

### SCENE s00183 | INT. ABANDONED BOWLING ALLEY CONVERTED INTO A GOAT YOGA STUDIO - MORNING
Characters: PERPETUA OKAFOR-LINDQVIST, HOLDEN BAXTER, BRIDGET MULLANEY, SPENCER, MARCEL DUPUIS-OGUNDE
[beat 0] Sun slants through the old neon pins. The lanes are covered in rubber mats, and seven goats in tiny sweaters stand about like mildly disappointed customers. The air smells of lavender and hay. PERPETUA OKAFOR-LINDQVIST, 40s, instructor and owner, stands on lane four in a lilac unitard, hands pressed together. Her student, HOLDEN BAXTER, 30s, a nervous accountant, holds a downward dog while a goat named Kevin stands on his back and chews his shirt. At the shoe counter, BRIDGET MULLANEY, 70s, the landlady, counts rent in a ledger with a pen she clicks like a metronome. Perpetua's cellphone buzzes on the ball return.
[beat 1] PERPETUA: Breathe into your sit bones, Holden. HOLDEN: I don't think I have sit bones. PERPETUA: Everyone has sit bones. HOLDEN: Kevin is eating my collar. PERPETUA: That's Kevin's way of saying he trusts you.
[beat 2] The phone buzzes again. The speaker clicks on by itself. SPENCER: Perp, it's Spencer from the county. We need to talk about the permit. PERPETUA: Spencer, I'm in a flow. SPENCER: There's a complaint. About, uh, the goats and the fire code.
[beat 3] Bridget stops clicking. A goat bleats. Another follows. Holden collapses into a puddle and Kevin steps off him, unbothered. BRIDGET: The fire code. I told you. PERPETUA: You told me nothing, Bridget. BRIDGET: I told you in March.
[beat 4] A new figure enters through the fire door, backlit: MARCEL DUPUIS-OGUNDE, 50s, a health inspector in a crisp gray suit, clipboard clutched like a shield. A goat sniffs his cuff. He lifts his pen. MARCEL: Ms. Okafor-Lindqvist? PERPETUA: Namaste, officer. MARCEL: Inspector. I'm here about the livestock. HOLDEN: They're not livestock. They're faculty.
[beat 5] Marcel writes something. Kevin eats the page. SPENCER: Hello? Is anyone there?
[beat 6] Perpetua closes her eyes, breathes in, and turns the phone face down.

### SCENE s00185 | EXT. SINKING FISHING TRAWLER - DECK - DAWN
Characters: CAPTAIN IMELDA DRAGOMIR, DEACON PRICE, OLU ABIODUN, SANTI, VEGA, LIN HUANG
[beat 0] The boat tilts at ten degrees. Gray water sloshes at the rails. A radio mast leans. CAPTAIN IMELDA DRAGOMIR, 50s, leathery, in yellow oilskins, stands at the wheelhouse door, counting heads with her finger. DEACON PRICE, 20s, deckhand, drags a blue cooler across the planks. OLU ABIODUN, 40s, engineer, slumps against a winch, hands black with oil. SANTIAGO "SANTI" VEGA, 30s, cook, bails with a saucepan. A girl, LIN HUANG, 12, the captain's niece, sits cross-legged on a coil of rope with a life vest two sizes too big.
[beat 1] IMELDA: Raft's inflated. Ten minutes. DEACON: We said that twenty minutes ago. OLU: Pump's dead. SANTI: Saucepan's not.
[beat 2] Lin tightens a strap. Nobody hurries. Imelda hands Lin a granola bar. IMELDA: Eat. It's a long wait.

### SCENE s00186 | INT. PAPER LANTERN FACTORY - EVENING
Characters: MEI-LING TSAI, DANIEL OKORO, AUNTIE FEN, JASPER TSAI, GRACE OKORO, FOREMAN
[beat 0] Hundreds of unlit lanterns hang from the rafters like pale moons. Long tables, glue pots, bamboo ribs. One window glows orange. MEI-LING TSAI, 30s, in a paint-spattered smock, glues a seam. Her fiance, DANIEL OKORO, 30s, in a suit, stands at the door with a small box. MEI-LING's mother, AUNTIE FEN, 60s, folds paper at the next table. Her brother, JASPER TSAI, 20s, hauls a crate. Daniel's mother, GRACE OKORO, 60s, sits near the stove with tea. A FOREMAN, 50s, watches from the loft.
[beat 1] DANIEL: You said seven. MEI-LING: Lanterns don't glue themselves.
[beat 2] Daniel sets the box on the table. It sits there. Fen pretends not to look. Jasper drops the crate. Everyone freezes. Grace sets down her tea.
[beat 3] GRACE: Daniel. The box. MEI-LING: He's just stopping by. DANIEL: I'm not.
[beat 4] He opens the box. A ring. Mei-Ling presses the seam flat with her thumb. Holds it. Holds it longer.
[beat 5] FOREMAN: Do we light them or not? MEI-LING: Not yet.
[beat 6] She sets the lantern on the table, turns, and takes the ring from the box. Then she walks to the window, holds it up to the orange light, and the room waits. Fen drops her paper. Jasper stares at his shoes. Grace smiles into her tea.
[beat 7] The Foreman strikes a match.

### SCENE s00187 | INT. NIGHT FREIGHT ELEVATOR - SHIPYARD WAREHOUSE - NIGHT
Characters: VIKTOR SOROKIN, MALCOLM TRENT, ANALIESE BRANDT, OBADIAH FINCH, TEO
[beat 0] A cage elevator the size of a garage rattles upward through a dark shaft, lit by a single caged bulb. Chains sing. The walls are streaked with rust and old graffiti. VIKTOR SOROKIN, 50s, in a long coat, stands with a briefcase chained to his wrist. His bodyguard, MALCOLM TRENT, 30s, a broad man with a shaved head, stands behind him, one hand inside his jacket. At the back, ANALIESE BRANDT, 30s, in a hard hat and reflective vest, pretends to read a clipboard. A shipping clerk, OBADIAH FINCH, 60s, sweaty and stooped, mops his forehead. Two younger dockhands, RAFAEL and TEO, 20s, in matching overalls, lean on the gate and share a cigarette they are not supposed to have.
[beat 1] The elevator shudders. Obadiah wipes his hands on his trousers. Analiese's pen stops moving. Malcolm's gaze drifts from Viktor to the dockhands to the clipboard, and his hand tightens inside his jacket. Rafael hands the cigarette to Teo without looking, and Teo takes it, and neither of them smokes.
[beat 2] VIKTOR: Forty floors is a long way to go without conversation. OBADIAH: It's, uh, only thirty-eight, sir. VIKTOR: Then it is a shorter silence.
[beat 3] Analiese turns a page. Her thumb hovers over a clip at the back of the board. Malcolm shifts a step closer, close enough to read it. Her hand slides away. ANALIESE: Inspection paperwork. Nothing exciting. MALCOLM: Inspectors don't work nights. ANALIESE: Fire codes don't care what time it is.
[beat 4] The elevator groans and slows. Teo drops the cigarette and grinds it under his heel. Rafael pulls a crowbar from his overalls and slides it behind his back. Obadiah sees and goes white. VIKTOR: Something wrong, Mr. Finch? OBADIAH: No, sir. Heat, is all.
[beat 5] The bulb flickers. Malcolm draws his gun. Analiese swings the clipboard into his wrist, and the gun spins across the floor. Rafael swings the crowbar into the briefcase chain, which sparks and holds. Teo grabs Obadiah, who yelps. Viktor drops into a crouch. The elevator slams to a stop, and everyone staggers.
[beat 6] VIKTOR: You are not inspectors. ANALIESE: No.
[beat 7] The gate rattles open on a dark, empty floor. Wind sweeps in. Somewhere far below, a ship's horn sounds.

### SCENE s00188 | INT. ROLLER RINK - SNACK BAR - NIGHT
Characters: PAZ ORTEGA-WILLIAMS, KIRA SINGH, DEWEY LAMBERT, ARLO HOLLOWAY, TALL STRANGER, MAX
[beat 0] Disco ball scatters light. Neon trim. Under the music, wheels rumble on wood. PAZ ORTEGA-WILLIAMS, 17, in rental skates, leans on the counter. Her best friend, KIRA SINGH, 17, steals fries from her basket. DEWEY LAMBERT, 18, behind the counter in a paper hat, wipes it down. At a nearby table, BEATRICE "BEE" HOLLOWAY, 16, sketches in a notebook, and her brother, ARLO HOLLOWAY, 14, sips a slushie.
[beat 1] PAZ: Okay, but if I ask him and he says no, I have to move to another state. KIRA: You are not moving to another state. PAZ: Then I'm dying. Those are the options.
[beat 2] KIRA: He's right there. Dewey. Dewey! DEWEY: Hey. Sorry. I was in the fryer zone. PAZ: Kill me.
[beat 3] KIRA: She wants to know if you're going to the thing on Saturday. DEWEY: The thing? PAZ: The thing. At the quarry. DEWEY: Oh. The quarry. Yeah, probably. Maybe. Why? PAZ: No reason. Just curious. KIRA: She has a reason. PAZ: I do not.
[beat 4] Dewey leans his elbows on the counter. Kira bounces on her skates. Bee tears a page from her notebook and slides it across the table to Arlo, who pockets it.
[beat 5] A TALL STRANGER, 20s, in a leather jacket and black skates, glides up behind Paz and taps her shoulder. This is MAXIMILIAN "MAX" DUBOIS. Paz turns. Her face does something complicated.
[beat 6] MAX: Paz. You never called. PAZ: Max. I was going to. KIRA: Oh no. DEWEY: Who's this?
[beat 7] MAX: Her ex. DEWEY: Oh. PAZ: He's not my ex. We went out twice. Once. Once and a half. MAX: You left in the middle of the second one. PAZ: I was sick. MAX: You were laughing.
[beat 8] Bee smiles into her slushie. Arlo whispers to her. Dewey slowly picks up a rag and starts wiping the counter again, harder. Kira looks from one face to another, delighted and horrified.
[beat 9] KIRA: Anyone want fries?

### SCENE s00189 | INT. UNDERSEA CORAL CATHEDRAL - THRONE HALL - DUSK
Characters: EMPRESS THALASSA-VEY, ADMIRAL CORVIN HASK, SELENE OKONKWO-REYES, TIDE, VOICE, THE DEEP
[beat 0] Arches of living coral rise into green gloom. Shafts of light pass through a ceiling of slow, shimmering water. Schools of silver fish loop through pillars like banners in a wind. The air, impossibly, is breathable, but everything moves as if underwater: hair, robes, flame. EMPRESS THALASSA-VEY, 80s, ancient and translucent as a jellyfish, sits on a throne grown from pale branching coral. Her robes drift. At her right stands ADMIRAL CORVIN HASK, 50s, scarred, armored in abalone plates. At her left, the young priestess SELENE OKONKWO-REYES, 20s, clutches a conch shell. At the foot of the dais, a boy, TIDE, 10, sits cross-legged with a dented tin whistle.
[beat 1] EMPRESS THALASSA-VEY: The tide has turned. I feel it in my bones. ADMIRAL HASK: The fleet awaits your word. SELENE: There is no fleet, Admiral. There are seven ships and four are leaking. ADMIRAL HASK: Then three.
[beat 2] The conch glows in Selene's hands. Tide blows a soft note on the whistle. A crab scuttles across the floor.
[beat 3] EMPRESS THALASSA-VEY: Selene, what does the shell say? SELENE: It says the surface is coming down. ADMIRAL HASK: The surface has always been coming down. SELENE: Not like this.
[beat 4] A VOICE from deep within the walls, vast and slow, rolls through the hall. THE DEEP: Empress. The debt is due.
[beat 5] The fish scatter. The light dims. Hask draws a trident. Thalassa-Vey lifts one hand, and the water stills. Tide stops playing. EMPRESS THALASSA-VEY: I know.
[beat 6] She rises, slowly, and her robes billow out like a sail. She steps down from the throne, past Hask, past Selene, and kneels in front of the boy. Takes the whistle gently from his hands. EMPRESS THALASSA-VEY: Child, you will play for me. TIDE: What song? EMPRESS THALASSA-VEY: The last one. The one your mother taught you.
[beat 7] Tide takes a breath and begins, small and thin. Hask lowers the trident. Selene lowers the shell. Above them, the sunlight goes out, one ray at a time.

### SCENE s00190 | INT. CABLE CAR CABIN - ALPINE GORGE - NIGHT
Characters: SOLVEIG RASMUSSEN, AGENT KAZIMIR DOBRYNIN, LUCIEN FAUREAU, TAMARA QUINN
[beat 0] A glass box suspended over blackness. Wind buffets it. Lights of a village glimmer far below. DR. SOLVEIG RASMUSSEN, 40s, grips a metal briefcase. Opposite her, AGENT KAZIMIR DOBRYNIN, 50s, sits calm, a pistol in his lap. LUCIEN FAUREAU, 30s, the operator, huddles near the control panel. TAMARA QUINN, 20s, a journalist with a camera, crouches by the door.
[beat 1] Static from the radio. The cabin lurches and stops. SOLVEIG: Why did we stop? LUCIEN: Wind. It trips the brake. KAZIMIR: The wind did not trip it.
[beat 2] Lucien checks the panel. Tamara lifts the camera and starts filming. Kazimir slides a hand over the lens. KAZIMIR: No. TAMARA: Public interest. KAZIMIR: Private interest. Mine.
[beat 3] Solveig edges the briefcase behind her knees. Kazimir notices. He raises the pistol, not at her, but at the ceiling.
[beat 4] A single shot cracks the roof light. Wind shrieks in. Lucien dives for the floor. Tamara drops the camera. It skids to the door and tumbles out of a gap.
[beat 5] Solveig lunges for the pistol, and Kazimir catches her wrist. They struggle. The cabin swings. SOLVEIG: Let go. KAZIMIR: The case, Doctor. SOLVEIG: It's not yours. KAZIMIR: It was never yours.
[beat 6] Lucien crawls toward the panel. Tamara grabs his ankle. TAMARA: What are you doing? LUCIEN: Restarting the brake. TAMARA: Don't. He'll kill us. LUCIEN: He'll kill us anyway.
[beat 7] He hits a lever. The cabin lurches forward. Kazimir loses his balance. Solveig wrenches the pistol free, and it clatters across the floor. Tamara scoops it up and aims at Kazimir with both hands.
[beat 8] TAMARA: Sit down. KAZIMIR: You will not shoot. TAMARA: Try me. Kazimir sits.
[beat 9] Solveig flips the case open: nothing inside but a photograph. Lucien stares at it. Kazimir smiles. SOLVEIG: You wanted a photograph? KAZIMIR: I wanted the man in it.
[beat 10] Solveig turns it over. A name. Her own. The cabin glides on into the dark.
[beat 11] LUCIEN: We're ten minutes from the station. TAMARA: Then we have ten minutes. KAZIMIR: For what? TAMARA: For you to talk.
[beat 12] Kazimir says nothing. The wind drops. Solveig steadies herself on the rail and holds the photograph up to the light. The faces blur. The village grows closer below.
[beat 13] SOLVEIG: Who sent you? KAZIMIR: The man who took your picture. SOLVEIG: My father took that picture. KAZIMIR: Yes.
[beat 14] Tamara's grip on the pistol tightens. Lucien checks the panel. The cabin hums. A light on the dock ahead flashes red. LUCIEN: Station's alerted. TAMARA: They'll be waiting.
[beat 15] Kazimir shrugs. Solveig folds the photograph into her coat. The cabin glides into the dock. The door slides open. Armed uniformed men fill the platform. KAZIMIR: Doctor. Ask them whose uniforms those are.
[beat 16] Solveig looks. Her face falls. She takes a step back. SOLVEIG: Those are my father's.

### SCENE s00191 | INT. DERELICT SPACE ELEVATOR CAR - ORBITAL TETHER - CONTINUOUS
Characters: SPARROW, ADEBAYO, TOBY, ZHANG, MAJOR DELPHINE VOSKUIJLEN, GIDEON FAIRCHILD
[beat 0] Cramped. Frost on the windows. Earth hangs below like a blue coin. CAPTAIN IRIS "SPARROW" ADEBAYO, 40s, floats at the console. Her engineer, TOBIAS "TOBY" ZHANG, 30s, clings to a ladder. MAJOR DELPHINE VOSKUIJLEN, 50s, a medic, holds a sedated passenger's wrist. The passenger, GIDEON FAIRCHILD, 70s, drifts asleep, tethered to a seat.
[beat 1] SPARROW: Toby, how's the cable? TOBY: Thinner than I'd like, Sparrow. DELPHINE: His pulse is slowing.
[beat 2] Sparrow does not look up. She taps a screen. It blinks red. SPARROW: Delphine, can you wake him? DELPHINE: I can. I shouldn't. SPARROW: Do it anyway.
[beat 3] Delphine unclips a syringe. Toby watches her hand, then looks away.
[beat 4] The car shudders. TOBY: We're losing altitude. SPARROW: We were never gaining.
[beat 5] Delphine injects Gideon. He stirs. His eyes open slowly. GIDEON: Iris? Is that you? SPARROW: It's me, Dad.
[beat 6] Gideon smiles faintly and drifts back to sleep. Sparrow sets her jaw and turns to the console. SPARROW: Toby. Cut the cable. TOBY: Sparrow. SPARROW: Cut it.
[beat 7] Toby draws a cutter from his belt. He floats to the hatch and stops there, hand on the latch, looking back at Delphine. DELPHINE: It's the right call. TOBY: That's what I'm afraid of.
[beat 8] He opens the hatch.

### SCENE s00192 | EXT. DUST-BOWL GHOST TOWN - MAIN STREET - HIGH NOON
Characters: MARSHAL JEBEDIAH CROW, OLETA BAINBRIDGE, SISTER MARGUERITE, PETEY NAKAMURA, DEPUTY HOLLIS WAKEFIELD
[beat 0] Wind scours the street. A tumbleweed rolls past a sagging saloon. A crooked sign reads "TIN CUP." MARSHAL JEBEDIAH CROW, 50s, stands at one end of the street, a battered Colt on his hip. Opposite him, OLETA BAINBRIDGE, 40s, in a black duster, rests a hand on her holster. In the saloon doorway, SISTER MARGUERITE, 30s, a nun, clutches a lantern. On the roof of the livery, a boy, PETEY NAKAMURA, 14, lies hidden with a rifle. Behind a rain barrel crouches DEPUTY HOLLIS WAKEFIELD, 20s, sweating.
[beat 1] OLETA: You look older, Jeb. JEBEDIAH: You look the same. OLETA: That's the problem.
[beat 2] Marguerite steps down from the saloon porch, lantern swinging. Petey adjusts his aim. Hollis stands, then ducks. SISTER MARGUERITE: Both of you, this is a house of God. JEBEDIAH: It's a saloon, Sister. SISTER MARGUERITE: It was a church first. OLETA: Move aside, Sister. SISTER MARGUERITE: I will not.
[beat 3] Oleta draws and fires. The lantern shatters. Marguerite screams. Jebediah draws. Petey's rifle cracks from the roof. Oleta's hat flies off. Hollis shouts and flings himself prone. A second shot echoes. Jebediah falls to one knee, hand to his shoulder.
[beat 4] JEBEDIAH: Who's up there? OLETA: I thought he was yours. JEBEDIAH: He's not mine. PETEY: I'm nobody's!
[beat 5] Oleta looks at Jebediah. Jebediah looks at Oleta. She holsters her gun. He does not. OLETA: Seems we've both been ambushed. JEBEDIAH: Seems so.
[beat 6] SISTER MARGUERITE: Then come inside, the lot of you. And bring the boy.
[beat 7] Hollis crawls out from behind the barrel. Petey climbs down the ladder. Jebediah, bleeding, offers Oleta his arm. She takes it. They walk to the saloon together as the wind picks up.

### SCENE s00193 | INT. ABANDONED SUBWAY PLATFORM - NIGHT
Characters: INSPECTOR LUCIEN MARCH, VESPER DUNNE, HOODED MAN, BOY
[beat 0] Tiled walls. Dripping pipes. A flickering clock reads 3:07. INSPECTOR LUCIEN MARCH, 50s, in a trench coat, waits with his hands in his pockets. Across the tracks, VESPER DUNNE, 30s, in red heels, holds a small case. Between them stands a HOODED MAN, 40s, and a BOY, 12, who sells newspapers at the exit.
[beat 1] LUCIEN: Miss Dunne. Punctual. VESPER: Inspector March. You came alone. LUCIEN: I always do.
[beat 2] The Boy waves a paper. The Hooded Man steps behind a pillar. Lucien sees it. LUCIEN: Who's your friend? VESPER: Nobody. Just the usual. LUCIEN: The usual doesn't wear a gun.
[beat 3] Vesper smiles. Tosses the case across the tracks. Lucien catches it.
[beat 4] The Hooded Man draws. Lucien drops the case and ducks. The Boy shrieks and bolts. Vesper kicks the Hooded Man's knee. He cries out. They struggle and tumble. Lucien tackles them both. LUCIEN: Vesper! VESPER: Stop calling me that!
[beat 5] The gun skitters along the tile. A train horn blares in the tunnel. Everyone freezes. Light blooms from the dark. Vesper snatches the case. The Hooded Man grabs her ankle. HOODED MAN: Where's the money, Vesper? VESPER: Wouldn't you like to know.
[beat 6] The train roars in. Lucien shoves them both flat as the cars thunder past. Wind whips coats. When the last car clears, the platform is empty.
[beat 7] The case lies open, filled with newspaper clippings.

### SCENE s00195 | INT. CORPORATE MAILROOM - DAY
Characters: GERALD PFEFFERKORN, NEHA BHATTACHARYA-WELLS, DON, KRUMBLE
[beat 0] A basement windowless room lined with pigeonholes, a jammed copier, and a framed poster: "TEAMWORK: BECAUSE NOBODY CAN DO IT ALONE." A fluorescent tube buzzes. Cardboard boxes are stacked to the ceiling in the corner like a failing skyline. GERALD PFEFFERKORN, 50s, mailroom supervisor, wears a lanyard with three laminated cards and a worn gray cardigan. He sorts envelopes at triple speed. NEHA BHATTACHARYA-WELLS, 20s, the new hire, in a crisp blazer, stands in the doorway, holding a binder. DONOVAN "DON" KRUMBLE, 40s, a regional manager, arrives behind her, wearing a tie with tiny cartoon calculators.
[beat 1] GERALD: Name? NEHA: Neha. First day. GERALD: Sit. Don't touch the copier. NEHA: Is it broken? GERALD: It's alive. There's a difference.
[beat 2] DON: Gerald! Great news. Efficiency review. GERALD: We've been efficient since 1994. DON: Which is why we're moving to quarterly. NEHA: Quarterly what? DON: Everything.
[beat 3] Gerald drops a stack of letters. The copier lets out a long, plaintive beep. GERALD: Don, the mail comes daily. DON: And we'll bill it quarterly. NEHA: Bill who? DON: Ourselves. It's called internal chargeback.
[beat 4] Gerald removes his glasses and rubs the bridge of his nose. He gestures at the stack of undelivered boxes. GERALD: Those are your Q3 bonus checks. DON: Then they're early! GERALD: They're three weeks late. Because of you. DON: Let's not assign blame. Let's assign tasks.
[beat 5] Neha raises her hand. Don points at her like she's won a prize. NEHA: Can I ask a question? DON: Please. NEHA: Why are we pretending this makes sense?
[beat 6] Silence. The copier beeps again. Don's smile holds a moment too long. Gerald puts his glasses back on. DON: Welcome aboard, Neha.

### SCENE s00196 | INT. COMMUNITY THEATER - LOBBY - DAY
Characters: HAMLET, DOTTIE, PRYCE, ZEKE, ADEYEMI, FINNEGAN WALSH, LUPE HERRERA, SAMMY ODUYA, TONI, VASQUEZ-LIND
[beat 0] A sign: "OPENING NIGHT: HAMLET (THE MUSICAL)." Balloons sag. Paper-cup punch. DOROTHEA "DOTTIE" PRYCE, 60s, the director, strides in with a bullhorn. Her stage manager, EZEKIEL "ZEKE" ADEYEMI, 30s, trails with a clipboard. The leading man, FINNEGAN WALSH, 40s, in a doublet and sneakers, paces. Their costume designer, LUPE HERRERA, 50s, carries a rack of capes. An usher, SAMMY ODUYA, 17, hands out programs.
[beat 1] DOTTIE: Places! ZEKE: It's four hours to curtain, Dottie. DOTTIE: Places is a state of mind.
[beat 2] FINNEGAN: I can't find my skull. LUPE: Which skull? FINNEGAN: Yorick. LUPE: It's in the prop closet. FINNEGAN: The closet is locked. ZEKE: Sammy has the key.
[beat 3] Sammy pats his pockets. His face falls. SAMMY: I put it somewhere safe. DOTTIE: Where is safe? SAMMY: That's the thing.
[beat 4] A ruckus at the door. A woman strides in carrying an enormous, glittering costume: ANTONIA "TONI" VASQUEZ-LIND, 50s, the producer's wife, in sequins and fury. She dumps the costume on the floor. TONI: Who approved this? LUPE: The director. DOTTIE: I approved a cape. TONI: It's a disco ball. FINNEGAN: Ophelia's mad scene needs sparkle. TONI: Ophelia is drowning, Finnegan. FINNEGAN: In sequins.
[beat 5] Dottie lifts the bullhorn and blasts a siren. Everyone covers their ears. DOTTIE: Enough! We have a show!
[beat 6] Silence. Sammy slowly raises the key from inside his sock.

### SCENE s00197 | INT. VICTORIAN TELEGRAPH OFFICE - NIGHT
Characters: ELIZABETH HARGROVE-WYNNE, THADDEUS OSGOOD, TWEEDLE, KEZIAH AMADI, CAPTAIN RUPERT BELLAMY, SIR ALARIC FENWICK-ROTH, MP
[beat 0] Gaslight hisses. Brass keys. A wall of pigeonholes and paper tape curling like ivy. The air smells of lamp oil and wet wool. A grandfather clock ticks toward midnight. ELIZABETH HARGROVE-WYNNE, 30s, in a gray wool dress with high collar, sits at the main key, fingers dancing. A pince-nez is perched on her nose. Her supervisor, MR. THADDEUS OSGOOD, 60s, a bald man with muttonchops, hovers over her shoulder. A messenger boy, PERCIVAL "PERCY" TWEEDLE, 12, dozes on a stool. A cleaner, MRS. KEZIAH AMADI, 50s, mops the floor with deliberate slowness. On a bench, CAPTAIN RUPERT BELLAMY, 40s, a naval officer with a bandaged hand, waits with his cap on his knee.
[beat 1] The key clatters. Elizabeth jots a line. She stops, rereads it, and slides it to Osgood. ELIZABETH: Mr. Osgood. This came from Calais. OSGOOD: Good Lord. CAPTAIN BELLAMY: What is it? OSGOOD: Nothing, sir. A routine dispatch. ELIZABETH: It is not routine. OSGOOD: Miss Hargrove-Wynne. ELIZABETH: It names the Admiralty. It says the Channel fleet has been sold.
[beat 2] Percy wakes, rubs his eyes. Mrs. Amadi stops mopping. Bellamy rises, face pale. CAPTAIN BELLAMY: Sold? To whom? ELIZABETH: It does not say. OSGOOD: It is a forgery. ELIZABETH: It came on the Admiralty cipher. OSGOOD: Then it is a very good forgery.
[beat 3] The door bangs open. A tall man in evening dress enters, shaking rain from his coat: SIR ALARIC FENWICK-ROTH, 50s, an MP, with silver hair and a gold-topped cane. He sweeps off his hat. SIR ALARIC: Mr. Osgood. I understand there has been a message. OSGOOD: Sir Alaric. We were just discussing it. SIR ALARIC: Then let us discuss it privately.
[beat 4] He extends a gloved hand. Osgood hesitates, glances at Elizabeth, then slowly hands over the slip. Sir Alaric reads, folds it, and tucks it inside his coat. SIR ALARIC: Miss, you have not seen this. ELIZABETH: I have seen it, sir. I transcribed it. SIR ALARIC: Then you will un-transcribe it.
[beat 5] Percy sneaks a look at Mrs. Amadi. She raises one eyebrow. Bellamy puts on his cap and steps forward. CAPTAIN BELLAMY: Sir Alaric, I would like to see that dispatch. SIR ALARIC: Captain, I am afraid it concerns matters above your station. CAPTAIN BELLAMY: My ship is in that fleet.
[beat 6] A beat. Sir Alaric studies him, then smiles thinly and removes the slip. SIR ALARIC: So it is. He hands it over. Bellamy reads. His jaw tightens. He looks at Elizabeth.
[beat 7] CAPTAIN BELLAMY: Miss Hargrove-Wynne. I should like to send a reply. ELIZABETH: To Calais? CAPTAIN BELLAMY: To everyone.
[beat 8] She turns to the key. The clock begins to strike midnight.

### SCENE s00198 | INT. LAUNDROMAT-CAFE "SUDS & BEANS" - MORNING
Characters: SOFIA ABERNATHY-KHOURY, TEDDY, LINDGREN-ASANTE
[beat 0] Machines hum. A chalkboard menu. Mismatched armchairs. Rain taps the windows. SOFIA ABERNATHY-KHOURY, 30s, sits cross-legged in an armchair with a paperback and a latte. Across from her, in the next chair, THEODORE "TEDDY" LINDGREN-ASANTE, 30s, folds a stack of towels with great ceremony. He glances at her book. She glances at his towels. A dryer buzzes. Neither moves.
[beat 1] TEDDY: That's a good one. SOFIA: You've read it? TEDDY: Twice. SOFIA: Everyone says the ending is a letdown. TEDDY: Everyone's wrong.
[beat 2] Sofia closes the book on her finger. SOFIA: What's your favorite part? TEDDY: The part where nothing happens. SOFIA: That's most of it. TEDDY: Exactly.
[beat 3] She laughs. He looks pleased, then busies himself with a towel. The dryer buzzes again.
[beat 4] This time he gets up, opens the door, and starts pulling out warm clothes. Sofia watches. He holds up a pair of socks, one blue and one yellow. TEDDY: How does this keep happening? SOFIA: It's a conspiracy. TEDDY: It's entropy. SOFIA: Same thing.
[beat 5] He sits back down with the clothes in his lap. She sips her latte. Rain keeps tapping. SOFIA: Anybody else feel like the whole city is just waiting?
[beat 6] A barista at the counter, unseen, clatters a cup. Teddy and Sofia look at the sound, then back at each other. TEDDY: For what? SOFIA: For someone to say something. TEDDY: Maybe someone just did.
[beat 7] Sofia tilts her head. A dryer thumps. Teddy holds up the mismatched socks. TEDDY: Want one? SOFIA: Which? TEDDY: You pick.
[beat 8] She considers, then takes the yellow. She tucks it into her book as a bookmark. He tucks the blue into his pocket. They sit quietly.
[beat 9] SOFIA: What's your name? TEDDY: Teddy. SOFIA: Sofia.
[beat 10] They do not shake hands. They both look at the rain. TEDDY: It's supposed to stop at noon. SOFIA: I hope it doesn't.
[beat 11] He looks at her. She looks at her book. A dryer shuts off, and the room is quiet enough to hear the tick of the clock above the counter. SOFIA: Stay. TEDDY: Hm? SOFIA: The weather. I meant the weather. TEDDY: Oh. Right.
[beat 12] He smiles at his knees. She turns a page she isn't reading. Outside, the rain thickens.

### SCENE s00199 | INT. REGENCY LIBRARY - EVENING
Characters: LADY CORDELIA ASHWORTH-PEMBERTON, LADY HENRIETTA VANE, LORD EDMUND FITZWILLIAM-OKAFOR, HOBSON
[beat 0] Tall shelves, a crackling fire, a globe on a stand. Candles in sconces. Rain streaks the windowpanes. LADY CORDELIA ASHWORTH-PEMBERTON, 30s, in an emerald gown, pours sherry. Her cousin, LADY HENRIETTA VANE, 30s, in a lilac dress, stands at the fireplace, fanning herself. LORD EDMUND FITZWILLIAM-OKAFOR, 40s, in a black coat, leafs through a book. Their butler, HOBSON, 60s, stands by the door with a salver.
[beat 1] CORDELIA: Henrietta, you are quiet tonight. HENRIETTA: I am always quiet. CORDELIA: You are never quiet. HENRIETTA: Then I am tonight.
[beat 2] EDMUND: She has a secret. HENRIETTA: I do not. EDMUND: Her fan has stopped. She only stops fanning when she is lying. HENRIETTA: Cordelia, tell him he is insufferable. CORDELIA: He is insufferable. EDMUND: Thank you. CORDELIA: It was not a compliment. EDMUND: It was from you.
[beat 3] HENRIETTA: Enough. I will tell you. CORDELIA: Do. HENRIETTA: Father has accepted an offer for my hand. CORDELIA: From whom? HENRIETTA: From Lord Ravenscroft.
[beat 4] EDMUND: Ravenscroft is sixty. HENRIETTA: Sixty-two. CORDELIA: Henrietta. HENRIETTA: He has a fine estate. EDMUND: He has a fine gout.
[beat 5] CORDELIA: Do you wish to marry him? HENRIETTA: I do not wish to do anything. CORDELIA: Then do not. HENRIETTA: It is not so simple. EDMUND: It is exactly so simple. Tell your father no. HENRIETTA: You do not know my father. CORDELIA: I do. He is a dreadful man. HENRIETTA: Cordelia! CORDELIA: Well, he is.
[beat 6] Hobson steps forward and presents the salver. A single letter, sealed in red. HOBSON: For Lady Henrietta, my lady.
[beat 7] Henrietta takes it with careful fingers. She opens it. Reads. Her fan drops. Cordelia and Edmund exchange a look.
[beat 8] HENRIETTA: He is dead. EDMUND: Who? HENRIETTA: Ravenscroft. This morning.
[beat 9] Silence. The fire pops. Cordelia sets down the sherry. She takes Henrietta's hand. CORDELIA: Then you are free. HENRIETTA: Yes. I am.
[beat 10] She laughs, a short, shocked sound. Then she cries. Edmund closes his book. Hobson quietly withdraws.

### SCENE s00200 | INT. APARTMENT - KITCHEN - EVENING
Characters: CLEMENTINE BRAITHWAITE
[beat 0] A small kitchen. A table set for two. One candle burning. A phone leans against the salt shaker.
[beat 1] CLEMENTINE BRAITHWAITE, 30s, in an apron, stirs a pot. She tastes. Adds salt. Checks the clock. She wipes her hands, straightens a fork, moves it a quarter inch, moves it back.
[beat 2] The phone buzzes. She answers on speaker. Only a long silence and a car horn on the other end. CLEMENTINE: It's fine.
[beat 3] She waits. CLEMENTINE: No, I'm stirring. Twenty is fine.
[beat 4] The line clicks dead. She does not look at the phone.
[beat 5] A moment later it rings again: her own voicemail greeting, played back by mistake. CLEMENTINE: Hi, you've reached Clementine. Leave a message and I'll call you right back. She presses the screen. The voice stops.
[beat 6] She takes the second plate from the table and slides it back into the cupboard. She blows out the candle. Sits. Eats alone, slowly, while the pot goes on simmering.

### SCENE s00201 | INT. HYDROPONIC GARDEN DECK - STARSHIP VESPERIA - DAY
Characters: COMMANDER YUSUF ADEBAYO-LIND, BOTANIST IXCHEL MORALES, SCRUB, ENSIGN BRODERICK PELL, KOFI AMOAH-REYES
[beat 0] Tiers of green racks under purple grow-lamps. Mist drifts. Beyond a long window, stars wheel slowly. COMMANDER YUSUF ADEBAYO-LIND, 50s, tall, silver beard, in a gray flight suit, trims a tomato vine. BOTANIST IXCHEL MORALES, 30s, small and wiry, scribbles notes. A cleaning drone named SCRUB, 2 feet tall, hums along the floor. ENSIGN BRODERICK PELL, 20s, freckled, carries a tray of seedlings. A maintenance tech, KOFI AMOAH-REYES, 40s, hangs upside down in a service hatch.
[beat 1] Pell trips over Scrub. The tray flies. Ixchel dives to catch it. Kofi drops a wrench. Yusuf catches the wrench. Scrub spins in a circle and chirps.
[beat 2] ENSIGN PELL: Sorry, sir. COMMANDER YUSUF: It's a garden, Ensign. Things fall.
[beat 3] Ixchel sets the tray down on a rack. Kofi swings out of the hatch and lands upright. KOFI: Irrigation's back online. IXCHEL: Finally.
[beat 4] They all stand a moment, watching the mist settle on the leaves.

### SCENE s00202 | EXT. FROZEN WATERFALL CLIFF - DAWN
Characters: FIGURE, ANSELM, THE WARDEN
[beat 0] A wall of blue ice, a hundred feet high, hung with icicles. Mist rises from the pool below.
[beat 1] A cloaked FIGURE, face hidden, climbs the ice with two picks. Below, on a ledge, a boy sits tying a boot: ANSELM, 12, thin, in a patched coat. The Figure reaches the ledge, hauls up, and stops, breathing hard.
[beat 2] FIGURE: You're a long way from home. ANSELM: So are you. FIGURE: I'm not from anywhere.
[beat 3] Anselm looks away. He pulls the laces tight. The Figure sits beside him without being asked. A long pause. Wind drops.
[beat 4] ANSELM: You followed me. FIGURE: Since the village.
[beat 5] Anselm picks at a thread on his sleeve. The Figure pulls back its hood: a woman, 50s, with a weathered face and a scar down one cheek.
[beat 6] ANSELM: They said you were dead. THE WARDEN: Who is they? ANSELM: The elders. THE WARDEN: The elders say many things.
[beat 7] She takes a flask from her coat, drinks, offers it. He shakes his head. She puts it away. Silence settles. Down in the pool, ice cracks like a gunshot.
[beat 8] ANSELM: Are you going to take me back? THE WARDEN: Do you want to go back?
[beat 9] Anselm does not answer. He stares at the ice. A bird screams overhead. He tightens his fists. The Warden watches the cliff, not him.
[beat 10] THE WARDEN: They'll be here by noon. ANSELM: Who? THE WARDEN: The ones who'd rather you didn't live.
[beat 11] Anselm stands abruptly. He grabs one of her picks off the ledge. ANSELM: Then I'm not going back. THE WARDEN: I know. ANSELM: You're not going to stop me? THE WARDEN: I'm going to teach you how to climb.
[beat 12] He looks at the pick. At her. She rises, takes his hand, and sets his grip. Then she turns to the ice. THE WARDEN: Left foot first. Always.
[beat 13] She starts up. Anselm hesitates, then plants the pick and follows. The first light of the sun strikes the falls. The ice blazes.

### SCENE s00203 | INT. ROOFTOP GREENHOUSE - AFTERNOON
Characters: CASPIAN ODUYA, VERONIKA STANISLAWSKI, JUNE PAPADOPOULOS
[beat 0] Glass panes fogged with humidity. Rows of orchids. A watering can. CASPIAN ODUYA, 40s, sorts seed packets at a potting bench. VERONIKA STANISLAWSKI, 50s, sits on an upturned crate, sipping tea. JUNE PAPADOPOULOS, 20s, leans on a shelf, headphones around her neck.
[beat 1] CASPIAN: The vault is on the third floor. The elevator needs a keycard. The stairwell has a camera. VERONIKA: And the roof? CASPIAN: Roof door is alarmed. But the greenhouse vent connects to the same shaft.
[beat 2] JUNE: How wide is the vent? CASPIAN: Twenty inches. JUNE: That's tight. CASPIAN: You're small. JUNE: I'm average. VERONIKA: You're small, June. Be proud. JUNE: I'm proud. I'm also claustrophobic.
[beat 3] CASPIAN: Veronika can talk you through. VERONIKA: I'll hum. JUNE: You'll hum? VERONIKA: Whale songs. They help.
[beat 4] CASPIAN: We go Thursday. The night guard changes at ten. VERONIKA: What about the dog? CASPIAN: There's no dog. VERONIKA: There was a dog last month. CASPIAN: That was a different building. JUNE: Can we confirm the dog? CASPIAN: I'll confirm the dog. VERONIKA: Good. JUNE: Good.
[beat 5] They sit. A drip falls from a leaf. Veronika stirs her tea. June drums on her knee. Caspian sets down the seed packet.
[beat 6] CASPIAN: Anyone want a tomato? VERONIKA: Is it a good one? CASPIAN: Best on the roof. JUNE: Obviously. It's the only one. CASPIAN: Eat.

### SCENE s00204 | INT. EMERGENCY ROOM - TRAUMA BAY - NIGHT
Characters: AMARA OKONKWO-REID, NURSE THEO LINDQVIST
[beat 0] Monitors beep. A body on a gurney. Blood on gloves. DR. AMARA OKONKWO-REID, 40s, bent over a bleeding patient. NURSE THEO LINDQVIST, 30s, squeezes a bag of saline.
[beat 1] AMARA: Pressure? THEO: Sixty over thirty. AMARA: Clamp.
[beat 2] He hands it. She clamps. Blood stops. The monitor steadies. THEO: Holding. AMARA: Hold it.
[beat 3] The patient seizes. Both leap. Theo pins an arm. Amara pins the other.
[beat 4] The monitor screams, then flatlines. They freeze. THEO: Doc? AMARA: Paddles. Now.
[beat 5] He slaps them in her hands. She charges. The patient jerks. A blip. Another blip. They both exhale.

### SCENE s00205 | INT. ABANDONED SKATING RINK - DAWN
Characters: COACH IGNATIUS PRZYBYLSKI, DARIUS, FONTENOT, RADIO ANNOUNCER, LEN, AKINTOLA-BRADY
[beat 0] A vast hall with a cracked ice surface, half-melted and gray. Bleachers stripped bare. A scoreboard dangles by one chain. Pale light pours through a hole in the roof, striking the center of the rink like a spotlight. COACH IGNATIUS PRZYBYLSKI, 60s, bundled in a parka, sits on a bucket at the boards, holding a stopwatch in mittened hands. His breath rises in plumes. On the ice, DARIUS "THE WALL" FONTENOT, 30s, a goalie with a dented mask, stands in a crouch at the net, a puck at his feet. A radio on the boards crackles.
[beat 1] RADIO ANNOUNCER: And that's the final from Calgary, folks. Eagles take it six to two. COACH IGNATIUS: Six to two. Hear that, Darius? DARIUS: I heard it. COACH IGNATIUS: That's us, in three weeks, if you do not fix your glove side. DARIUS: My glove side is fine. COACH IGNATIUS: Your glove side is a screen door.
[beat 2] Darius takes the puck and flicks it into the net. Coach shakes his head.
[beat 3] A figure enters from the locker-room tunnel: LENNOX "LEN" AKINTOLA-BRADY, 20s, a rookie in a too-big jersey, skates tied around his neck. He stops at the boards, intimidated. LEN: Coach? Am I late? COACH IGNATIUS: You are early, which is worse. It means you didn't sleep. LEN: I slept. COACH IGNATIUS: You slept badly.
[beat 4] Len sits, ties a skate. Darius watches from the net. Coach clicks the stopwatch. COACH IGNATIUS: Len, shoot on Darius. LEN: Me? On him? COACH IGNATIUS: You see anyone else?
[beat 5] Len steps on the ice. Skates a slow circle. Darius lowers his mask. Len winds up, shoots. Darius flicks the glove. The puck hits it and drops. Len stares. DARIUS: Screen door. LEN: Sorry? DARIUS: Nothing.
[beat 6] Len shoots again. Darius makes the save with his pad. Coach scribbles. Len shoots again. This time the puck sails over the glove. COACH IGNATIUS: Again. LEN: Again? DARIUS: Again.
[beat 7] They say it at once, a little too loudly. Coach covers a smile.
[beat 8] Len shoots. Darius lunges. The puck clangs off the post. The radio crackles. RADIO ANNOUNCER: We now return to our regular programming.
[beat 9] Coach clicks the radio off. Quiet. Len and Darius stand facing each other. COACH IGNATIUS: Good. Again.

### SCENE s00206 | INT. ABANDONED OPERA HOUSE - STAGE - NIGHT
Characters: ELIAS VANTERPOOL, ODETTE MARCHAND-OYELARAN
[beat 0] Torn velvet curtains. A dusty chandelier. Moonlight through a hole in the dome. ELIAS VANTERPOOL, 50s, in a rumpled suit, stands center stage with a flashlight, scanning the empty rows. He is breathing hard, bleeding from a cut above his eye.
[beat 1] ELIAS: I know you're out there. No answer. The chandelier creaks. He turns the beam on the box seats. ELIAS: Steady. Steady.
[beat 2] A seat folds down with a clack. Elias spins. Nothing. A whisper drifts through the hall, impossible to place.
[beat 3] A woman steps from the wings, slowly, hands visible: ODETTE MARCHAND-OYELARAN, 40s, in a long gray coat, a small revolver in her gloved hand. She does not raise it. ODETTE: Hello, Elias. ELIAS: Odette. How did you find me? ODETTE: You always loved this place.
[beat 4] ELIAS: All of you, stay back! ODETTE: There's no one here but us. ELIAS: Then why did you bring the gun? ODETTE: Habit.
[beat 5] She holds it up and then tosses it. It clatters center stage between them. Elias looks at it. He does not move.
[beat 6] ELIAS: What do you want? ODETTE: The ledger. ELIAS: I burned it. ODETTE: You didn't. ELIAS: I should have.
[beat 7] He pulls a thick notebook from inside his coat and holds it out. She doesn't take it. The chandelier shivers.
[beat 8] ODETTE: Keep it. I only needed to know you still had it. ELIAS: Why? ODETTE: Because they're coming for it. And now they know too.
[beat 9] A door slams somewhere in the dark. Elias's face drains. Odette steps back into the wings. ODETTE: Run, Elias.
[beat 10] He drops the flashlight. It rolls into the orchestra pit. Footsteps pound from every direction. Elias bolts upstage.

### SCENE s00207 | INT. PARKING GARAGE - LEVEL 3 - NIGHT
Characters: BRENDAN MWANGI, SOLEDAD ARRIAGA, TOBIAS KESSLER-ADEYEMI
[beat 0] Concrete columns. Flickering fluorescents. A single sedan idles. BRENDAN MWANGI, 40s, sits in the sedan, engine running. He checks his watch. His partner, SOLEDAD ARRIAGA, 30s, leans on a column nearby, smoking. She flicks ash and watches the ramp.
[beat 1] BRENDAN: He's late. SOLEDAD: He'll come. BRENDAN: You said that an hour ago.
[beat 2] She shrugs and drops the cigarette. A set of headlights sweeps the ramp. She straightens. He kills the engine. A black van rolls in and stops. The side door slides open.
[beat 3] TOBIAS KESSLER-ADEYEMI, 50s, steps out in a long coat, flanked by a stocky man in sunglasses. He walks over slowly. Brendan climbs out of the sedan. TOBIAS: Gentlemen. Lady. SOLEDAD: You're an hour late. TOBIAS: Traffic. BRENDAN: Do you have it?
[beat 4] Tobias smiles. He reaches into his coat. Brendan tenses. Soledad's hand moves to her hip. TOBIAS: Relax.
[beat 5] He pulls out an envelope. Holds it up. She takes a step. The stocky man steps with her. Tobias lowers the envelope. TOBIAS: First, the money.
[beat 6] Brendan opens the trunk. A duffel. He unzips it, shows the bundles. Tobias nods. SOLEDAD: Now the envelope.
[beat 7] Tobias hands it over. She tears it open. Photographs. Her face goes cold. SOLEDAD: These are of my daughter. TOBIAS: Yes.
[beat 8] She draws her gun. The stocky man draws his. Brendan freezes. Tobias raises both hands, still smiling. TOBIAS: Now we all understand each other.

### SCENE s00208 | EXT. BAMBOO FOREST - RAINY AFTERNOON
Characters: HANNELORE BECK, MARISOL AGUILAR, THABO NKOSI-WILLIAMS
[beat 0] Tall green stalks creak in the wind. Mud everywhere. A trail disappears into fog. HANNELORE BECK, 50s, a botanist, leads, machete in hand. Behind her trudges MARISOL AGUILAR, 20s, a student with a heavy pack. Last comes THABO NKOSI-WILLIAMS, 30s, their guide, who limps and carries a radio.
[beat 1] HANNELORE: We stop at the next clearing. MARISOL: How far is that? HANNELORE: Not far. THABO: It is far.
[beat 2] Rain thickens. Marisol slips and grabs a stalk. It cracks. MARISOL: Sorry!
[beat 3] THABO: Careful, it carries sound. HANNELORE: Sound is fine. It's silence that worries me. MARISOL: Why? HANNELORE: Because it means something is listening.
[beat 4] They stop. All three listen. The rain pauses. A distant rustle. MARISOL: Is that the wind? THABO: No.
[beat 5] HANNELORE: Keep walking. MARISOL: But which way? THABO: Forward. HANNELORE: Not forward. Left. Left! MARISOL: Which left? THABO: Mine.
[beat 6] Marisol veers right by mistake. Thabo yanks her back. She bumps into Hannelore. The three tangle for a second, then break apart. MARISOL: Sorry, sorry. HANNELORE: Stay together.
[beat 7] THABO: This is Thabo. We are lost. Static answers. He shakes the radio. It stays dead. He tucks it away.
[beat 8] THABO: We keep moving. HANNELORE: She knows. THABO: She does? MARISOL: I do? HANNELORE: We keep moving.
[beat 9] They push on. The rustle follows. It never gets closer. It never gets farther.

### SCENE s00209 | INT. DEFUNCT TAXIDERMY MUSEUM - NIGHT
Characters: DETECTIVE LOUISA FAIRWEATHER-KNOX, SANJAY PILLAI, PROFESSOR ISADORE WREN, PRISCILLA OYEDEJI, ELLIOTT CRUZ
[beat 0] Glass eyes glint. A stuffed bear looms. Moonlight cuts through blinds. DETECTIVE LOUISA FAIRWEATHER-KNOX, 40s, stands beside a toppled display case. DET. SANJAY PILLAI, 30s, photographs the glass. PROFESSOR ISADORE WREN, 70s, wrings his hands. MS. PRISCILLA OYEDEJI, 50s, the curator, leans on a pedestal. A night watchman, ELLIOTT CRUZ, 20s, stands guard by the door.
[beat 1] LOUISA: Who last saw the owl? PRISCILLA: I did. Six o'clock. ISADORE: Seven. PRISCILLA: Six, Isadore. ISADORE: You left at six. I was still here at seven. SANJAY: So you saw it at seven.
[beat 2] ISADORE: I saw something at seven. LOUISA: Something? ISADORE: A shape. In the dark. ELLIOTT: There's always a shape, Professor. ISADORE: This one moved. PRISCILLA: Everything moves if you stare long enough. LOUISA: Quiet.
[beat 3] She points her flashlight at the empty display case. The glass is broken outward, not in. She crouches and picks up a single gray feather. LOUISA: It wasn't stolen. It left. SANJAY: Owls don't leave. They're stuffed. ISADORE: That one wasn't.
[beat 4] Elliott's radio crackles. Static. Then a soft, rhythmic hooting. Everyone turns toward the dark rafters. PRISCILLA: Oh no. ISADORE: Oh yes.
[beat 5] Louisa shines the light upward. Two enormous yellow eyes gleam. A shadow unfolds.
