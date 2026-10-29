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
Write the scenes as JSON Lines (one object per line) in THREE files with the Write tool: scenes 1-30 to /home/user/screenwrite-analyzers/data/analyzers/labels/desc/part_002_a.jsonl, 31-60 to /home/user/screenwrite-analyzers/data/analyzers/labels/desc/part_002_b.jsonl, the rest to /home/user/screenwrite-analyzers/data/analyzers/labels/desc/part_002_c.jsonl. No other text in the files. Reply only with "done N".

## Scenes

### SCENE s00210 | INT. OPEN-PLAN OFFICE - "SYNERGY HUB" - MORNING
Characters: TARK, BOLLINGER, CORDY, ADESANYA, MARGUERITE LESAGE-OKORO, THAD, QUILLFEATHER
[beat 0] Standing desks, bean bags, a kombucha tap, motivational posters. A banner: "WE ARE FAMILY." A beanbag chair shaped like a unicorn. Fluorescent morning light. TARQUIN "TARK" BOLLINGER, 30s, in a vest and sneakers, balances on a wobble board. Beside him, CORDELIA "CORDY" ADESANYA, 40s, hair in a tight bun, taps at a laptop. MARGUERITE LESAGE-OKORO, 50s, the office manager, hoses a droopy fern. THADDEUS "THAD" QUILLFEATHER, 60s, a quiet man in a gray suit, sits at the corner desk, unmoving.
[beat 1] TARK: Team! Quick sync! CORDY: We just did a sync. TARK: This is a meta-sync. MARGUERITE: Tark, the fern is dying. TARK: Everything is dying. That's the culture of change.
[beat 2] Cordy rolls her eyes. Thad stays still. He has not moved in some time. TARK: Thad. Buddy. Thoughts? No answer. CORDY: Thad? MARGUERITE: Thad doesn't talk before ten. TARK: It's ten-fifteen. CORDY: Is he, uh... MARGUERITE: He's fine. TARK: He's on mute. CORDY: We're in person. TARK: Mute is a state of mind.
[beat 3] They approach the desk. Marguerite prods Thad's shoulder with the hose. He topples out of the chair. Cordy shrieks. Tark falls off the wobble board. Marguerite drops the hose, which sprays everyone. They scramble backward. Thad lies on the floor, eyes closed, and snores.
[beat 4] CORDY: He's asleep! MARGUERITE: He's been asleep since Tuesday. TARK: Since Tuesday? MARGUERITE: That's when he stopped answering emails. TARK: We thought that was mindfulness.
[beat 5] Thad opens one eye. Sits up, slowly, dripping. THAD: Is it Friday? CORDY: It's Thursday. THAD: Damn.
[beat 6] He lies back down. Tark stares at the others. Cordy stares at Marguerite. Marguerite shuts off the water.
[beat 7] TARK: Okay. New initiative. Naps. CORDY: We already have naps. TARK: Mandatory naps. THAD: I'd back that.
[beat 8] MARGUERITE: Tark, who signed off on the quarterly? TARK: Which quarterly? MARGUERITE: The one that says we're out of money. TARK: We're out of money? CORDY: We've been out of money since March. TARK: But the kombucha tap works. MARGUERITE: That's a donation.
[beat 9] Tark takes a long, wobbly step. He looks at the banner. At the unicorn beanbag. At the dying fern. Behind him, the overhead lights flicker out one by one.
[beat 10] THAD: Told you. TARK: Told me what? THAD: That it was Friday.

### SCENE s00211 | INT. FUNERAL PARLOR - VIEWING ROOM - NIGHT
Characters: DETECTIVE MARISOL OKAFOR-DUMAS, LEOPOLD GRIMSBY, PHILOMENA TEAGUE-ABARA, CALEB NASH
[beat 0] Carpet muffles footfalls. Lilies in tall vases. A closed casket on a draped stand. A single lamp. DETECTIVE MARISOL OKAFOR-DUMAS, 40s, in a black blazer, stands near the casket, hands behind her back. She watches the door. MR. LEOPOLD GRIMSBY, 60s, the funeral director, stands rigid in a dark suit. A mourner, PHILOMENA TEAGUE-ABARA, 50s, sits in the front row, handkerchief twisted in her fist. In the back, a young usher named CALEB NASH, 20s, fidgets with his cufflinks.
[beat 1] LEOPOLD: The family asked for privacy, Detective. MARISOL: I won't be long. PHILOMENA: She was my sister. MARISOL: I know. PHILOMENA: Then you know she wasn't well.
[beat 2] MARISOL: I know she was poisoned. Caleb drops a cufflink. It rolls under a pew. He doesn't pick it up. LEOPOLD: That is a serious accusation. MARISOL: It's a finding. PHILOMENA: By whom? MARISOL: The lab. It came back this afternoon.
[beat 3] Philomena finally turns. Her eyes are dry. Her mouth is steady. PHILOMENA: And who do you think did it? MARISOL: Someone who had access to her tea.
[beat 4] Leopold shifts his weight. Caleb takes a step toward the exit. Marisol raises one hand. MARISOL: Mr. Nash. Stay. CALEB: I was just getting air. MARISOL: The air is fine here.
[beat 5] The lamp flickers. Marisol steps to the casket and lays a hand on the lid. MARISOL: Mrs. Teague-Abara. Tell me about the tea. PHILOMENA: It was chamomile. MARISOL: Who bought it? PHILOMENA: I did. MARISOL: Who poured it? PHILOMENA: I did.
[beat 6] A pause. The lilies sway. Caleb breathes out. MARISOL: Thank you. PHILOMENA: Is that all? MARISOL: For tonight.
[beat 7] She nods to Leopold, then to Caleb. Philomena rises, smooths her skirt, and walks out. The door sighs shut behind her.
[beat 8] Marisol lifts the lid of the casket just a crack and looks at something inside.

### SCENE s00212 | EXT. FLOATING MARKET ON A CLOUD - DAY
Characters: SABLE, BRINDLE OKAFOR-LYNN, MADAME ZEPHYRINE
[beat 0] Stalls drift on white vapor. Bridges of braided mist. Lanterns shaped like fish. Far below, a patchwork of farmland. SABLE, 20s, a thief in a patched coat, crouches behind a stall of enchanted fruit. Her partner, BRINDLE OKAFOR-LYNN, 30s, hairy-eared and cheerful, juggles three glowing apples. A merchant, MADAME ZEPHYRINE, 60s, sells wind in jars.
[beat 1] SABLE: Brindle, stop juggling the evidence. BRINDLE: It's not evidence. It's snacks.
[beat 2] MADAME ZEPHYRINE: Customers! Two coins for a breeze! SABLE: We do not have two coins. BRINDLE: We have one and a half. SABLE: We have none. I told you not to spend on the pie. BRINDLE: It was a good pie. SABLE: It was a pigeon with crust. MADAME ZEPHYRINE: Last chance, my darlings!
[beat 3] Sable pops up. Smiles at the merchant. Slides a hand toward a jar. SABLE: Madame, we heard you sell the finest sirocco on the cloud. MADAME ZEPHYRINE: Only the finest. BRINDLE: How fine? MADAME ZEPHYRINE: Fine enough to carry you to the moon. SABLE: We'll take two. MADAME ZEPHYRINE: At two coins each? SABLE: At half a coin each, since you're our favorite. MADAME ZEPHYRINE: Child, don't flatter me. SABLE: Flattery's all I've got.
[beat 4] Brindle drops an apple. It bounces across the stall, rolls off the edge, and falls through the cloud. All three watch it go. MADAME ZEPHYRINE: That was an apple of wisdom. BRINDLE: We'll find another. SABLE: We won't.
[beat 5] Madame Zephyrine sighs. She uncorks a jar. A soft wind swirls out, lifts Sable's hair, and tugs at Brindle's coat. MADAME ZEPHYRINE: Free sample. BRINDLE: She likes us. SABLE: She pities us. MADAME ZEPHYRINE: Both.
[beat 6] The wind rises. Sable and Brindle grab each other's arms. They lift an inch off the cloud. They rise slowly, laughing, up toward the lanterns.

### SCENE s00213 | INT. LIGHTHOUSE KEEPER'S COTTAGE - SITTING ROOM - NIGHT
Characters: INSPECTOR GWENDOLYN TREVELYAN-OKOYE, SERGEANT ABEL MWAMBA, HEPZIBAH DRUMMOND, WILFRED DRUMMOND, MISS ODALYS PRENTISS
[beat 0] Low beams. A woodstove ticks. Salt-bleached curtains. Shelves of shells, charts, and mismatched teacups. Storm pushes at the windows. INSPECTOR GWENDOLYN TREVELYAN-OKOYE, 50s, in a damp raincoat, stands by the stove. A younger officer, SERGEANT ABEL MWAMBA, 30s, takes notes in a corner. The keeper's widow, MRS. HEPZIBAH DRUMMOND, 70s, sits in a rocking chair with a shawl. Her son, WILFRED DRUMMOND, 40s, hovers by the doorway. A neighbor, MISS ODALYS PRENTISS, 60s, stirs tea at a side table.
[beat 1] GWENDOLYN: Mrs. Drummond, when did you last see your husband? HEPZIBAH: Yesterday. At supper. WILFRED: She means Tuesday. HEPZIBAH: I mean yesterday. WILFRED: It was Tuesday, Mother. HEPZIBAH: Then it was Tuesday. ABEL: Tuesday supper.
[beat 2] ODALYS: I brought the pie. GWENDOLYN: Which pie? ODALYS: Gooseberry. WILFRED: It's always gooseberry. ODALYS: It's his favorite. HEPZIBAH: It was his favorite.
[beat 3] A beat. The storm slaps the glass. Odalys sets down the spoon.
[beat 4] GWENDOLYN: Was there anything unusual about the evening? HEPZIBAH: He was quiet. WILFRED: He was always quiet. HEPZIBAH: Not like that.
[beat 5] ODALYS: He mentioned the lamp. GWENDOLYN: The lamp? ODALYS: He said it would go out. Soon. ABEL: It did go out.
[beat 6] WILFRED: It didn't go out. It was put out. HEPZIBAH: Wilfred. WILFRED: I'm only saying.
[beat 7] GWENDOLYN: Mr. Drummond, do you have something to tell me? Wilfred looks at his mother. At Odalys. At the floor. The woodstove ticks. Hepzibah rocks slowly. WILFRED: No. GWENDOLYN: Mrs. Drummond? HEPZIBAH: I think he does.
[beat 8] Wilfred swallows. Odalys looks at her hands. Abel's pen hovers above the page. Gwendolyn waits, patient as the sea.

### SCENE s00214 | EXT. SHELLED CHURCH BELFRY - DAWN
Characters: SERGEANT ANNELIESE VOGEL, CORPORAL DESMOND OGBU, PRIVATE TEODORA IVANOVA, LIEUTENANT RAFFERTY CROSS, MATTEO, COMMAND
[beat 0] Stone walls open to the sky. A cracked bell. Smoke on the horizon. SERGEANT ANNELIESE VOGEL, 30s, crouches with a sniper rifle. CORPORAL DESMOND OGBU, 20s, peers through binoculars. PRIVATE TEODORA IVANOVA, 20s, hugs a radio pack. LIEUTENANT RAFFERTY CROSS, 40s, studies a map. A boy, MATTEO, 11, huddles in the corner.
[beat 1] ANNELIESE: Desmond, status? DESMOND: Nothing on the east road. TEODORA: Still no word from Command. RAFFERTY: They'll come. TEODORA: When? RAFFERTY: Soon.
[beat 2] Static. Then a faint voice. COMMAND: Bell Tower, this is Command. Abort. Repeat, abort. Fall back to the bridge.
[beat 3] Teodora stares at the handset. She passes it to Rafferty. RAFFERTY: Command, say again. COMMAND: The bridge. Now.
[beat 4] Rafferty crushes the map. Anneliese tightens her scarf. Desmond stows the binoculars. Matteo looks at all of them.
[beat 5] MATTEO: Are we leaving? ANNELIESE: We're leaving. MATTEO: Can I bring the bell? ANNELIESE: It's too heavy, Matteo. MATTEO: I know. I just wanted to ask.

### SCENE s00215 | INT. COUNTY MORGUE - NIGHT
Characters: HILDEGARD OYELOWO-STRAND, MARCUS PELL, EUGENE FAIRBANKS, BODY
[beat 0] Steel drawers. Cold fluorescent light. A radiator knocks. A gurney in the center. DR. HILDEGARD OYELOWO-STRAND, 50s, in scrubs, writes a label. Her assistant, MARCUS PELL, 20s, wheels in a covered body. The night guard, EUGENE FAIRBANKS, 60s, sips coffee near the door.
[beat 1] HILDEGARD: Last one tonight. MARCUS: Where do I put him? HILDEGARD: Drawer fourteen.
[beat 2] Marcus wheels the gurney to the wall. He opens the drawer. It's already occupied. MARCUS: Dr. Strand? HILDEGARD: What? MARCUS: Fourteen's full. HILDEGARD: It can't be.
[beat 3] She crosses. They both look in. A sheet. A shape. Hildegard flips back a corner. A pale face. Marcus gasps. MARCUS: That's the same guy. HILDEGARD: That's impossible.
[beat 4] She looks at the gurney. Lifts the sheet there. The same face.
[beat 5] HILDEGARD: Eugene. Eugene, come look. EUGENE: I don't want to. HILDEGARD: Come look. EUGENE: I'm on break. HILDEGARD: Eugene.
[beat 6] He sets down the coffee. Comes over, reluctant. Looks at the two faces. Pales. EUGENE: Oh, hell.
[beat 7] MARCUS: Maybe it's twins. EUGENE: Twins don't die the same day. HILDEGARD: They do sometimes. MARCUS: Do they? HILDEGARD: It happens.
[beat 8] Lights flicker. A drawer slides open on its own. Another. Then another. Down the long row, one by one, the drawers roll out. Cold fog spills across the floor.
[beat 9] EUGENE: Not again. MARCUS: Not again? EUGENE: Last time was '98. HILDEGARD: What happened in '98? EUGENE: They all sat up.
[beat 10] Silence. The radiator stops knocking. Sheets rustle. Marcus slowly retreats against the wall. Hildegard grabs a scalpel and holds it like a talisman. HILDEGARD: Everyone stay calm.
[beat 11] A hand lifts from drawer fourteen and grips the edge.
[beat 12] HILDEGARD: Eugene. Lock the door. EUGENE: It's already locked. HILDEGARD: From the outside? EUGENE: From the outside.
[beat 13] The lights go out. Somewhere, a gurney wheel squeaks. Hildegard's breath catches. Then a voice, small and cheerful, from the dark. BODY: Evening, doctor.
[beat 14] The lights flick on. Every drawer is open. Every sheet is empty.

### SCENE s00216 | INT. FAMILY MINIVAN - PARKED AT A DRIVE-IN - NIGHT
Characters: NADINE OKORO-LANCASTER, RUFUS, GRETCHEN LANCASTER-PRICE, COACH TANAKA
[beat 0] Back seat. The movie flickers through the windshield. Popcorn spills. NADINE OKORO-LANCASTER, 16, sits in the back with her little brother, RUFUS, 9, who holds a box of candy. In the front, their mother, GRETCHEN LANCASTER-PRICE, 40s, glances at the rear-view mirror. A phone buzzes in the cupholder.
[beat 1] NADINE: Rufus, quit kicking the seat. RUFUS: I'm not. GRETCHEN: You are, honey. RUFUS: It's the movie. NADINE: The movie doesn't kick.
[beat 2] Gretchen picks up the phone. Reads the screen. Her face stiffens. She answers on speaker. COACH TANAKA: Mrs. Lancaster-Price? It's about Nadine. She missed practice again.
[beat 3] Nadine freezes. Rufus stops chewing. GRETCHEN: Thank you, Coach. We'll talk. COACH TANAKA: I just want her to know there's a spot. GRETCHEN: Thank you.
[beat 4] She hangs up. A long silence. On the screen, an actress screams. Nadine stares at her knees.
[beat 5] GRETCHEN: Nadine. NADINE: I can explain. GRETCHEN: Please do. NADINE: I don't want to play.
[beat 6] RUFUS: She's been going to the library instead. NADINE: Rufus! RUFUS: Sorry!
[beat 7] Gretchen watches them in the mirror. Then she reaches back and puts a hand on Nadine's knee. It stays there. On screen, the credits roll.

### SCENE s00217 | INT. DEPARTMENT OF PAPERWORK - FILE ROOM - DAY
Characters: NUMBER, BARNABY OKAFOR-STILLWELL, ODALYS PEREIRA-HOLM, DIRECTOR PRUDENCE KWAKU-LINDHOLM, DIRECTOR KWAKU
[beat 0] Towering stacks of manila folders. A hum of fluorescents. A sign: "PLEASE TAKE A NUMBER." No one has ever taken a number. BARNABY OKAFOR-STILLWELL, 40s, junior filing clerk, sits behind a desk stamping forms. His coworker, ODALYS PEREIRA-HOLM, 30s, shuffles a stack. Their cart squeaks.
[beat 1] BARNABY: Form 27B. ODALYS: Stamped? BARNABY: Stamped. ODALYS: Triplicate? BARNABY: Quadruplicate. ODALYS: Since when? BARNABY: Since the memo. ODALYS: What memo? BARNABY: The memo that supersedes the memo.
[beat 2] Odalys sighs. The cart rolls away on its own and bumps a shelf. A folder falls. Both stare at it.
[beat 3] BARNABY: That one's supposed to stay up. ODALYS: Why? BARNABY: It's the only copy. ODALYS: Of what? BARNABY: Of us.
[beat 4] The door at the end of the aisle swings open. A figure strides in with a clipboard: DIRECTOR PRUDENCE KWAKU-LINDHOLM, 50s, stern, wearing a gray suit and a visitor badge. DIRECTOR KWAKU: Which of you is Barnaby? BARNABY: That's me.
[beat 5] DIRECTOR KWAKU: You've been stamping form 27B in triplicate. BARNABY: Quadruplicate, ma'am. DIRECTOR KWAKU: It's supposed to be quintuplicate. ODALYS: Since when? DIRECTOR KWAKU: Since yesterday. BARNABY: But the memo said... DIRECTOR KWAKU: The memo was superseded. ODALYS: By what? DIRECTOR KWAKU: By me.
[beat 6] Barnaby looks at Odalys. Odalys looks at the stamp. Director Kwaku makes a small note.
[beat 7] DIRECTOR KWAKU: Rectify by Friday. BARNABY: All of them? DIRECTOR KWAKU: All of them. ODALYS: That's forty thousand. DIRECTOR KWAKU: Then you had better start.
[beat 8] She leaves. The door sighs shut. Barnaby slowly lowers the stamp. It makes a small, lonely thud.

### SCENE s00218 | INT. SAFEHOUSE - BASEMENT - NIGHT
Characters: AGENT RENATA OYEKAN-VOSS, AGENT BASTIAN HALVORSEN, TEDDIE, KAPLAN
[beat 0] Concrete walls. Bare bulb. A card table with a laptop and a stack of cash. AGENT RENATA OYEKAN-VOSS, 40s, slumps in a chair. AGENT BASTIAN HALVORSEN, 30s, paces. The informant, THEODORA "TEDDIE" KAPLAN, 50s, rocks nervously on a stool.
[beat 1] RENATA: You said they'd be here by midnight. BASTIAN: They will be. TEDDIE: They won't. They're never late, and they're never early. They're just there. RENATA: Teddie. TEDDIE: It's a fact. BASTIAN: You've been saying that for two hours. TEDDIE: It's been true for two hours.
[beat 2] Renata rubs her eyes. Bastian stops pacing, then resumes. Teddie hums something tuneless. RENATA: Stop humming. TEDDIE: I'm not humming. BASTIAN: You are. TEDDIE: It's the pipes.
[beat 3] The pipes knock. All three look up. The knocking repeats, in a pattern. RENATA: That's not pipes. BASTIAN: That's Morse. TEDDIE: It's the wind. RENATA: In a basement? TEDDIE: It's a drafty basement.
[beat 4] Bastian crosses to the wall. Presses an ear against it. Renata draws her weapon. The knocking stops. BASTIAN: Someone's behind this wall. RENATA: That's the neighbor's. BASTIAN: We don't have a neighbor.
[beat 5] Teddie stands. Her stool tips over. She backs toward the stairs. TEDDIE: I told you. I told both of you. RENATA: Teddie, sit down. TEDDIE: I'm leaving. BASTIAN: You're not. TEDDIE: Watch me.
[beat 6] The wall cracks. Plaster dust sprinkles the table. A fist punches through. Renata fires. Bastian ducks. Teddie screams and bolts up the stairs, and the bulb swings wildly, throwing shadows across the concrete.

### SCENE s00219 | INT. PAWNSHOP BACK ROOM - NIGHT
Characters: ROZ, VANTERPOOL, VINNIE, OKAFOR
[beat 0] Shelves of guitars, clocks, and cameras. A caged bulb. A safe, door ajar. ROSALIND "ROZ" VANTERPOOL, 40s, in a trench coat, holds a gun on VINCENT "VINNIE" OKAFOR, 50s, behind a desk. He raises both hands, a cigar still smoldering between his fingers.
[beat 1] ROZ: Open it. VINNIE: It's open. ROZ: All the way. VINNIE: It's a good safe. It doesn't go all the way. ROZ: Vinnie. VINNIE: Roz.
[beat 2] They speak together, then both stop. Roz tightens her grip. Vinnie ashes the cigar on the desk. VINNIE: You hired me, remember? ROZ: I remember.
[beat 3] She steps forward and slams the safe door wide. Inside: a single sheet of paper. She grabs it. He grabs her wrist. They struggle, knocking a lamp off the desk. The bulb swings. The gun goes off, shattering a clock.
[beat 4] They freeze. ROZ: This is a receipt. VINNIE: For what you paid me. ROZ: That's all there is? VINNIE: That's all there ever was.
[beat 5] She lowers the gun. The clock keeps ticking, in pieces.

### SCENE s00220 | INT. DRYDOCK CANTEEN - NIGHT
Characters: ODALYS VANTERPOOL, BRANIMIR KOSTA, KIRIN ASHWORTH, BIG HOLLIS
[beat 0] Steel table. Cold tea. A hull looms through the window, half-painted. ODALYS VANTERPOOL (50s, foreman, grease-stained clipboard) stands. Doesn't sit. BRANIMIR KOSTA (60s, welder, one good eye) stares at his hands. KIRIN ASHWORTH (19, apprentice, new boots) hovers by the door. BIG HOLLIS (40s, union steward, arms folded) leans on the vending machine.
[beat 1] ODALYS: Listen up. Inspection failed. Weld seam forty-two. Silence. BRANIMIR: Forty-two. Forty-two. ODALYS: Branimir. BRANIMIR: I heard.
[beat 2] ODALYS: Who signed off on it? HOLLIS: Does it matter? ODALYS: It matters.
[beat 3] KIRIN: It was me. Everyone turns. KIRIN: Branimir was on break. I did the pass. I thought it was good. BRANIMIR: It wasn't him. KIRIN: It was. BRANIMIR: Boy, sit down.
[beat 4] ODALYS: Kirin, did you X-ray the seam? KIRIN: No ma'am. There was no film left. HOLLIS: No film. On a Tuesday. ODALYS: Who's in charge of ordering film? HOLLIS: You are. ODALYS: Right. Right.
[beat 5] BRANIMIR: So it's your film. Your seam. Your hull. ODALYS: Don't. BRANIMIR: Forty years I never missed a seam. ODALYS: I know. BRANIMIR: Forty years. ODALYS: I know, Branimir.
[beat 6] HOLLIS: Nobody gets fired tonight. ODALYS: Not your call. HOLLIS: It's the contract. ODALYS: The contract says a lot of things.
[beat 7] BRANIMIR: The ship sails Friday. ODALYS: The ship does not sail Friday. KIRIN: Is it really that bad? ODALYS: It's a hairline crack, Kirin. At sea it opens like a zipper.
[beat 8] Her hand slams the table. Tea jumps. Kirin flinches.
[beat 9] Branimir laughs. Short. Dry. BRANIMIR: Then we cut it out. Tonight. Four of us. ODALYS: Four of us. HOLLIS: Overtime's on the union.
[beat 10] ODALYS: Film. I forgot the film. She picks up the clipboard. Puts it down. Picks up four mugs instead. ODALYS: Tea's cold. I'll make fresh.

### SCENE s00221 | INT. CLOSED PLANETARIUM - NIGHT
Characters: WOMAN, STRANGER, DESMOND
[beat 0] A domed room. Rows of empty reclining seats. A projector hums in the center, casting a slow field of stars across the ceiling. A man in a damp raincoat stands at the control console. He wipes his hands on a handkerchief, one finger at a time.
[beat 1] A WOMAN enters from the lobby door, keys in her hand. She stops. She does not turn on the lights. STRANGER: Evening.
[beat 2] She sets her keys on the nearest seat, carefully, so they make no sound. WOMAN: We're closed. STRANGER: So I see.
[beat 3] He nudges a dial. The stars drift. A comet crosses the dome. WOMAN: Door was locked. STRANGER: It was.
[beat 4] He smiles at the ceiling. She watches his hands. WOMAN: You want something to drink? There's a kettle in the office. STRANGER: Kind of you. She does not move toward the office. Neither does he.
[beat 5] WOMAN: Your coat's wet. STRANGER: It's been a long walk. WOMAN: From where? He lets the question hang. The comet fades.
[beat 6] STRANGER: You kept the Orion show. They told me you'd cut it. WOMAN: Who told you? STRANGER: Man at the ticket window. Years ago.
[beat 7] She takes one step down the aisle. He takes one up. They stop level with the fourth row. WOMAN: I don't think I know you. STRANGER: No. But your husband did.
[beat 8] Her jaw sets. She glances at the exit sign, then back. WOMAN: My husband's dead. STRANGER: That's what I said. Did.
[beat 9] She reaches slowly into her coat pocket. He watches it. She pulls out a small brass key and holds it up between two fingers. WOMAN: Basement. Where he kept the film reels. STRANGER: I thought so. WOMAN: He wrote a name on every can. Yours is on the third shelf.
[beat 10] He doesn't answer. The stars wheel overhead. WOMAN: Tell me your name and I'll hand you the key. A long beat. He folds the handkerchief into a square. STRANGER: Desmond Pryce. WOMAN: Thank you, Mr. Pryce.
[beat 11] She places the key on the armrest between them. He doesn't reach for it. DESMOND: Aren't you going to ask what's on the reel? WOMAN: No.
[beat 12] She picks up her own keys again. Turns toward the lobby. Stops with her back to him. WOMAN: The lights come on at eleven. You have twenty minutes.
[beat 13] She leaves. The door sighs shut.
[beat 14] He stands alone beneath Orion. Then he takes the key.

### SCENE s00222 | INT. SALT WAREHOUSE, CANAL DISTRICT - DAWN
Characters: INSPECTOR NNAMDI OKONKWO-REYES, SERGEANT IMOGEN BRAITHWAITE, PETRU LAZAR, DOLORES HALLORAN
[beat 0] Mountains of grey salt. Rafters. A single skylight. Footsteps. Crunch. INSPECTOR NNAMDI OKONKWO-REYES (40s, rumpled suit, tired eyes) walks the center aisle with a flashlight he doesn't need. Behind him: SERGEANT IMOGEN BRAITHWAITE (30s, crisp, notebook) and old watchman PETRU LAZAR (70s, cap, cough). Quiet. Almost peaceful.
[beat 1] INSPECTOR: Pretty, isn't it. IMOGEN: It's a crime scene, sir. OKONKWO-REYES: Can't it be both? PETRU: Nobody touched nothing. I swear on my mother. OKONKWO-REYES: Mr. Lazar, relax. Nobody's accusing.
[beat 2] Petru coughs. Wipes his mouth. IMOGEN: Body's in the east bay. Under three feet of salt. Found by the forklift driver. OKONKWO-REYES: Where's the driver? PETRU: Home. Sick. IMOGEN: Sick how? PETRU: Sick sick. He threw up. OKONKWO-REYES: Reasonable.
[beat 3] They reach the east bay. A yellow tape. A shallow trench.
[beat 4] The trench is empty. IMOGEN: That's not right. OKONKWO-REYES: No. IMOGEN: Forensics bagged her at four a.m. I signed the form.
[beat 5] PETRU: I seen them take her. Two men. White van. OKONKWO-REYES: What men? PETRU: Men in coats. IMOGEN: Our men? PETRU: How would I know your men?
[beat 6] OKONKWO-REYES: Mr. Lazar. Tonight. Did anyone come in after the van? PETRU: Nobody. IMOGEN: Nobody? PETRU: The lady from the office. She forgot her umbrella. OKONKWO-REYES: What lady? PETRU: Miss Halloran. Dolores. IMOGEN: Dolores Halloran? She's been on leave a month. PETRU: Then I seen a ghost.
[beat 7] Silence. Salt trickles from a heap. Somewhere a pigeon. OKONKWO-REYES: Sergeant. Phone the office. IMOGEN: It's six a.m. OKONKWO-REYES: Phone.
[beat 8] She does. Holds it to her ear. Her face changes. IMOGEN: Straight to voicemail. Her own voice. OKONKWO-REYES: Whose voice? IMOGEN: Halloran's. She says: "Leave a message after the salt." PETRU: What does that mean? OKONKWO-REYES: It means someone's been here longer than we have.
[beat 9] He turns. Beams the flashlight into the rafters. A shape up there. A woman crouched on a beam. Umbrella in hand.
[beat 10] DOLORES HALLORAN (50s, grey coat, composed) peers down. DOLORES: Inspector. I wondered when you'd look up. IMOGEN: Ma'am, come down. Slowly. DOLORES: I'd rather you came up. PETRU: Holy mother.
[beat 11] OKONKWO-REYES: Miss Halloran. Where's the body? DOLORES: Under you. Everyone looks down. The salt floor shifts. IMOGEN: Sir. OKONKWO-REYES: I see it. PETRU: I told you nothing was touched! DOLORES: You told them nothing. That's different.
[beat 12] She raises the umbrella. Opens it. Salt rains from the folds.
[beat 13] OKONKWO-REYES: Sergeant. Cuff Mr. Lazar. PETRU: Me? IMOGEN: Mr. Lazar, you have the right to-- PETRU: I was told to say nothing! They said the lady would pay! DOLORES: And I did.
[beat 14] She drops. The umbrella floats her down like a slow bell. She lands in the salt without a sound.
[beat 15] OKONKWO-REYES: Dolores Halloran, you are under arrest. DOLORES: For which one? Okonkwo-Reyes smiles, tired. OKONKWO-REYES: Start with the umbrella.

### SCENE s00223 | INT. DAIRY-CASE AISLE, 24-HOUR GROCERY - 3 A.M.
Characters: TOBIAS WREN-ALDRIDGE, PRISCILLA OYELARAN, DIMA, ROSENFELD, HYACINTH PELL, MARGUERITE
[beat 0] Fluorescent hum. Forty brands of yogurt, all the same. TOBIAS WREN-ALDRIDGE (30s, Regional Synergy Lead, lanyard, no pulse) holds a laser pointer at a shelf.
[beat 1] TOBIAS: Team. Our learning: yogurt is a journey.
[beat 2] Four night-shift stockers stare back. PRISCILLA OYELARAN (40s, forklift certified, unimpressed) holds a pallet jack like a shield. DMITRI "DIMA" ROSENFELD (20s, hoodie, headphones around his neck) eats a yogurt, deliberately. HYACINTH PELL (50s, reading glasses on a chain, ex-accountant) checks her watch. MARGUERITE (60s, no last name anyone remembers) is asleep standing up.
[beat 3] TOBIAS: Going forward, we are removing the word "expired." PRISCILLA: We're what? TOBIAS: We're reframing it as "mature."
[beat 4] Dima's spoon stops. He puts it down. DIMA: That's illegal. TOBIAS: That's agile. HYACINTH: I left a pension for this.
[beat 5] Tobias fires the laser pointer at Marguerite's forehead. MARGUERITE: Is it the fire? PRISCILLA: No, Marguerite. It's the Synergy Lead. Marguerite nods, drifts off again. Tobias lowers the pointer.
[beat 6] TOBIAS: Okay. Okay. Is there anything anyone wants to say before we align? Silence. Dima raises his yogurt like a toast. DIMA: Mature.

### SCENE s00224 | INT. ROLLER RINK, AFTER CLOSING - NIGHT
Characters: TEDDY, AUGUSTIN MWANGI, FAYE SOLOMON-DRAKE
[beat 0] Mirror ball stopped. House lights half up. Rental skates in cubbies. A snack bar with its grill off. THEODORA "TEDDY" MWANGI (11) sits on the rail, one skate on, one off. Rink floor gleams. Her father, AUGUSTIN MWANGI (40s, rink manager, keys on a belt loop), mops the far lane.
[beat 1] Her aunt FAYE SOLOMON-DRAKE (30s, coat still on, car keys in fist) walks in from the lobby. FAYE: Door was open. AUGUSTIN: I'm still here. He keeps mopping. Faye watches the bucket.
[beat 2] FAYE: Teddy. Shoes. Teddy doesn't move. FAYE: Your dad and I need a minute. TEDDY: You can say it in front of me. AUGUSTIN: Teddy. TEDDY: I'm eleven, not stupid.
[beat 3] Faye crosses to the rail. Sits one spot down. Close, not close enough. FAYE: The offer's still open. The spare room. The school's good. AUGUSTIN: Her school's good here. FAYE: It's two hours away. AUGUSTIN: It's my kid.
[beat 4] He stops mopping. Leans the handle on the wall. Teddy pulls her second skate off. Sets it beside the first. Lines them up, toes touching.
[beat 5] TEDDY: Do I get a vote? FAYE: Of course you do. AUGUSTIN: Of course. Neither of them looks at her.
[beat 6] TEDDY: Mom's skates are still in the office. Augustin and Faye both freeze. Faye stares at the floor. Augustin studies the ceiling. AUGUSTIN: They don't fit anyone. TEDDY: They fit me. Faye lets out a breath. Almost a laugh. FAYE: Size five. She had tiny feet.
[beat 7] Augustin walks to the snack bar. Pours three cups of water from the tap. Brings them over. Hands one to each. They drink. The ice machine clunks.
[beat 8] TEDDY: Can I skate once? Alone? Then we decide. Augustin looks at Faye. Faye looks at Augustin. Slowly, both nod.
[beat 9] Teddy slides off the rail in her socks. Walks to the center of the empty rink. She doesn't skate. She just stands there. Arms out. Eyes closed.
[beat 10] Faye puts her cup down. Augustin sits. They wait.

### SCENE s00225 | EXT. ROOFTOP PIGEON LOFT - EVENING
Characters: OLD ANSELMO CRUZ-BELLAMY, NIMA
[beat 0] Above the chimney pots, a plywood loft leans against the wind. Copper light spills over tar paper and laundry lines. OLD ANSELMO CRUZ-BELLAMY (70s) kneels at the loft door, palms open. Beside him, his granddaughter NIMA (9) holds a single grey bird against her chest.
[beat 1] She has been quiet all day. Now she squeezes, and the bird beats its wings once, hard, against her ribs. NIMA: Grandpa, it's scared. ANSELMO: It is.
[beat 2] He does not take it from her. His hands hover, trembling, close enough to catch, far enough to let her choose.
[beat 3] She opens her fingers a little. Then a little more. The bird sits in the cradle of her palm, small heart drumming.
[beat 4] NIMA: If I let go, it won't come back. ANSELMO: Maybe. NIMA: You said they always come back. ANSELMO: I said they come home. It's not the same as coming back to us. She considers this with the gravity of the very young. The wind lifts her hair across her eyes.
[beat 5] Her arms shoot up. The bird explodes out of her hands, a clap of feathers, and is a speck, then a rumor, then gone over the river.
[beat 6] She stares at her empty palms. He stares at her. Slowly, she leans into his shoulder, and he lets out the breath he has held since April.

### SCENE s00226 | INT. GRAIN ELEVATOR CONTROL ROOM - NIGHT
Characters: LEONIDAS PAPADAKIS, CORA BEAUMONT-TEAGUE
[beat 0] A cramped booth above a concrete silo. Dials, a swivel chair, a space heater. Through the window, conveyor belts hang motionless in the dark. LEONIDAS PAPADAKIS (50s, county auditor, windbreaker) sits at the desk with a ledger open. He checks numbers with a pencil. He is calm.
[beat 1] Boots on the iron stairs. The door opens. CORA BEAUMONT-TEAGUE (40s, elevator manager, rolled sleeves) enters with two chipped mugs of coffee. CORA: Cream? LEONIDAS: Black's fine. She hands him a mug. He sips. She doesn't.
[beat 2] CORA: Long drive from the county seat. LEONIDAS: Two hours. I like the quiet. CORA: Nothing quieter than a silo at midnight.
[beat 3] He nods and turns a page. She studies the back of his head. LEONIDAS: The weigh tickets for September match the bank deposits. CORA: Good. LEONIDAS: October's a little thin. CORA: Rain. Hauling slowed. LEONIDAS: Mm.
[beat 4] He turns another page. Behind him, a shadow crosses the window. Cora sees it. She doesn't blink.
[beat 5] LEONIDAS: It's the volume I can't square. Four thousand bushels, gone on paper. CORA: Spillage. LEONIDAS: That's a lot of spillage. CORA: It's a big elevator.
[beat 6] He closes the ledger. Looks at her for the first time. LEONIDAS: I'd like to use your phone. CORA: Line's down. LEONIDAS: It was working an hour ago. CORA: Storms. There are no storms. Both of them know it.
[beat 7] He reaches for the receiver on the wall. She reaches for it too. Their hands land on it together. They freeze, her fingers over his, the heater ticking. CORA: Don't. LEONIDAS: Let go. She grips harder. He twists. The mugs rattle off the desk and shatter, coffee across the ledger. They stumble apart, both breathing hard.
[beat 8] LEONIDAS: I've already sent copies to the state office. Cora lets go of the phone. She sinks into the swivel chair. CORA: When? LEONIDAS: Tuesday.
[beat 9] She begins, quietly, to laugh. CORA: Then why did you drive out? LEONIDAS: To give you a chance to explain.
[beat 10] Outside, the conveyor belts begin to turn on their own.

### SCENE s00227 | EXT. SALT FLAT, ABANDONED STAGE STOP - NOON
Characters: JED, ARROWOOD, MARISOL QUINTANILLA
[beat 0] White ground. White sky. A dead well. Two hitching posts. JEDEDIAH "JED" ARROWOOD (50s, long duster, one glove) sits on a crate. Whittles. Doesn't look up.
[beat 1] Hooves. Slow. MARISOL QUINTANILLA (30s, black hat, rifle across the saddle) rides in. Stops thirty feet off. He keeps whittling. She keeps still.
[beat 2] JED: Water's bad. MARISOL: I brought my own. JED: Figured.
[beat 3] She swings down. Boots crunch. She leaves the rifle on the horse. He folds his knife. Slides it into his boot.
[beat 4] MARISOL: You're a long way from Dodge. JED: So are you. A hawk. A wind. Nothing else.
[beat 5] She walks toward him. Ten feet. Five. MARISOL: Eleven years. JED: Twelve.
[beat 6] She stops. Her hand drifts to the holster.
[beat 7] He raises his glove hand. Slow. Palm out. JED: I don't have a gun. MARISOL: Liar. JED: Left it in the well.
[beat 8] She stares. Then at the well. Back at him. MARISOL: Why? JED: So you'd have to ask.
[beat 9] She draws. He doesn't move. The barrel shakes. The hawk screams.
[beat 10] Then she holsters it, and slaps him once across the face with the flat of her hand. He takes it. MARISOL: Now we're even.
[beat 11] She turns for her horse. He lets out a breath that's been twelve years in the making.

### SCENE s00228 | INT. TREEHOLLOW ARCHIVE OF THE MOSS-KEEPERS - TWILIGHT
Characters: HESPERIA THORNQUILL, OSWIN FERNLEIGH, BRAMBLE-JACK, ILUNA WAVEREAD
[beat 0] Inside the trunk of a tree so old its heartwood has hollowed into a cathedral. Shelves of bark scrolls spiral up the walls. Fireflies drift among them like patient candles. At a root-table in the center sit four figures, each with a small lamp. HESPERIA THORNQUILL (60s, keeper-in-chief, silver braid to her knees) turns the pages of a mossbound book. She is calm in the way of those who have never been hurried. Beside her, the young scribe OSWIN FERNLEIGH (17, ink to the elbows) copies a line, tongue between his teeth. Across from them a travelling tinker, BRAMBLE-JACK (40s, patched coat, pockets that clink), polishes a brass key with his sleeve. At the end of the table, a stranger from the river-folk, ILUNA WAVEREAD (30s, damp hair, a shell necklace), sits with her chin in her palm.
[beat 1] HESPERIA: We begin the evening readings. Nobody moves. The fireflies drift. OSWIN: Keeper Thornquill, should I record the weather? HESPERIA: Yes, child. Rain in the east, none in the west. OSWIN: Rain in the east. He writes. She smiles at the book.
[beat 2] BRAMBLE-JACK: Same rain as yesterday. Same rain as a hundred years. HESPERIA: Bramble-Jack, if you have a thought, share it with us all. BRAMBLE-JACK: Nothing, Keeper. Just brass. He holds the key up. It catches a firefly's light.
[beat 3] ILUNA: It's a lovely key. BRAMBLE-JACK: Isn't it? Found it in a trout. ILUNA: In a trout? BRAMBLE-JACK: Don't ask. She laughs, soft, and he looks pleased.
[beat 4] Hesperia closes the book. Opens another. HESPERIA: Iluna Wavereads. You came with a question. ILUNA: I did. Though it's been so peaceful, I almost forgot. HESPERIA: Ask it anyway. ILUNA: The river-folk say a door lies under this tree. They say it opens once a generation. OSWIN: The cellar door. HESPERIA: Oswin. OSWIN: Sorry, Keeper.
[beat 5] Hesperia turns a page. The parchment rustles. HESPERIA: There is a door. It does not open for questions. ILUNA: What does it open for? HESPERIA: Patience. BRAMBLE-JACK: She's been waiting six years, Keeper. I counted. HESPERIA: Then six years is not yet enough.
[beat 6] Iluna sighs, amused rather than defeated. ILUNA: Oswin, would you like to hear what the river says about the archive? OSWIN: Please. ILUNA: It says you keep the quietest place in the whole forest. OSWIN: It does? ILUNA: It does. And it says the quiet is the door.
[beat 7] Hesperia looks up from the book for the first time. Studies the river-woman a long moment. HESPERIA: Who taught you that? ILUNA: Nobody. I listened. HESPERIA: Well. Well, well.
[beat 8] She closes the book on her finger. HESPERIA: Bramble-Jack, bring the key. He rises, key in his palm, and crosses the root floor. At the base of the spiral stair, he kneels. The key fits nothing visible. BRAMBLE-JACK: Where do I-- HESPERIA: Wherever it is quietest.
[beat 9] He closes his eyes. Listens. Then touches the key to the grain of the wood, and the grain opens, gently, like an eyelid.
[beat 10] Warm gold light spills across the floor. OSWIN: You did that. ILUNA: We all did. The fireflies drift toward the light, in no hurry at all.

### SCENE s00229 | INT. LAUNDROMAT, LATE NIGHT
Characters: NADIRA FAROUK, CASIMIR ODUYA, LINNEA HARTWELL-SATO, INTERCOM
[beat 0] Twelve dryers, three working. A TV on the wall plays a muted weather channel. NADIRA FAROUK (30s, scrubs, hair in a clip) folds towels at a long table, sorts socks into pairs, pulls a stray sock from her pocket and drops it into a lost-and-found bucket, all without looking up. Across the room, her brother-in-law CASIMIR ODUYA (40s, security jacket) feeds quarters into a dryer, kicks the door shut, and slumps onto a plastic chair. In the corner, a young woman, LINNEA HARTWELL-SATO (20s, headphones, textbook), highlights a page and glances at the clock every half minute.
[beat 1] An intercom crackles on the wall. INTERCOM: Attention customers. The attendant is on break. Please do not feed the machines your feelings. CASIMIR: That's new. NADIRA: It's the owner. He thinks he's funny. CASIMIR: He is not.
[beat 2] A small pause. A dryer thumps. LINNEA: Excuse me. Do you know what time the last bus is? NADIRA: One-ten. LINNEA: Thanks. CASIMIR: Ninety-nine percent of the time it's late. LINNEA: Great.
[beat 3] Nadira pairs two socks, tucks them, sets them on the pile. Casimir rubs his eyes. Linnea turns a page of her textbook. The weather channel shows a swirl of green over the coast.
[beat 4] A phone buzzes on the table. Nadira checks it. Reads. Sets it face down. CASIMIR: Hospital? NADIRA: My shift's covered. They just wanted to tell me. CASIMIR: That's nice of them. NADIRA: It's the first time.
[beat 5] The intercom crackles again. INTERCOM: Dryer six is finished. Dryer six has been finished for forty minutes. Dryer six would like you to take your clothes. Linnea looks up, guilty. Hurries to dryer six. Pulls out a hot tangle of jeans. LINNEA: Sorry.
[beat 6] CASIMIR: He's watching us. NADIRA: He's always watching us. She laughs, quiet. Casimir smiles at his shoes. Linnea folds her jeans into a small, neat square.
[beat 7] Outside, a bus idles at the curb. Nobody gets up.

### SCENE s00230 | INT. BACK ROOM, FISH MARKET - PRE-DAWN
Characters: SAL KNIFE, BIANCHINI, RENZO, DETECTIVE MARISELA OYELOWO-KANE, GRETCHEN VOLKOV, DOMINGO, TAVARES
[beat 0] Crushed ice. Crates of mackerel. A bare bulb swings overhead. SALVATORE "SAL THE KNIFE" BIANCHINI (50s, rubber apron, scarred knuckles) counts cash into a fish crate. His nephew, LORENZO "RENZO" BIANCHINI (20s, nervous, wet cuffs), holds the lid. At a steel table, DETECTIVE MARISELA OYELOWO-KANE (40s, trench coat, notebook) sits perfectly still. Across from her, the bookkeeper, GRETCHEN VOLKOV (50s, cardigan, reading glasses on a cord), sorts receipts. By the freezer door, a hulking enforcer called DOMINGO "THE HAMMER" TAVARES (30s, tailored suit under a slicker) watches the others.
[beat 1] SAL: Renzo, keep your hands where I see them. RENZO: They're on the lid, Uncle Sal. SAL: Then keep them there.
[beat 2] GRETCHEN: Your numbers don't add, Salvatore. SAL: Gretchen, my numbers always add. GRETCHEN: Not this month. She holds up a receipt. Sal squints at it. The bulb swings. Shadows slide across everyone.
[beat 3] MARISELA: Mr. Bianchini, I'd like to know where your nephew was Tuesday night. SAL: Detective, he was here. Gutting cod. Ask the cod. MARISELA: I'm asking you.
[beat 4] DOMINGO: Boss, she's wearing a wire.
[beat 5] Marisela and Sal both look at Gretchen. Gretchen blinks, then at Marisela. Domingo reaches for his pocket. Renzo lets go of the lid and it slams.
[beat 6] She goes for the door. He goes for her. Gretchen throws the receipts, a blizzard of paper. Marisela dives behind the crates. Sal pulls a gutting knife and Domingo draws a pistol. RENZO: Nobody shoot! Nobody shoot!
[beat 7] A long frozen beat. Paper settles like snow. DOMINGO: She's not wired. It's the bookkeeper. GRETCHEN: I don't wear wires, Mr. Tavares. I wear cardigans.
[beat 8] She peels the cardigan open. Nothing underneath but a blouse. Sal lowers the knife. Domingo lowers the gun.
[beat 9] SAL: Then who's talking to the police?
[beat 10] Everyone turns slowly to Renzo. RENZO: Uncle Sal. I can explain. SAL: Of course you can, Renzo.
[beat 11] He puts the knife down. Picks up a mackerel instead. Weighs it. SAL: But first, you gut the fish.

### SCENE s00231 | INT. TAXIDERMY SHOP BACK OFFICE - NIGHT
Characters: CONSTANCE BELLWETHER-OKAFOR, INSPECTOR ARTHUR LINDQVIST, ELLIOTT FAIRWEATHER-NGUYEN
[beat 0] Glass eyes in drawers. A stuffed heron on the filing cabinet. A desk lamp. CONSTANCE BELLWETHER-OKAFOR (50s, shop owner, tweed) sits behind the desk. Across from her, INSPECTOR ARTHUR LINDQVIST (60s, bowler hat on his knee) leans forward.
[beat 1] INSPECTOR LINDQVIST: Miss Bellwether-Okafor, the dead man was your partner. CONSTANCE: He was, Inspector. INSPECTOR LINDQVIST: And you were the last to see him. CONSTANCE: I locked up at six. He was alive then. INSPECTOR LINDQVIST: Alive and in a temper, the clerk says. CONSTANCE: He was always in a temper.
[beat 2] INSPECTOR LINDQVIST: About what? CONSTANCE: The heron. INSPECTOR LINDQVIST: The heron. CONSTANCE: He wanted to sell it. I did not. INSPECTOR LINDQVIST: To whom? CONSTANCE: A collector. A man who pays in cash. INSPECTOR LINDQVIST: Name? CONSTANCE: He never gave one. INSPECTOR LINDQVIST: Convenient. CONSTANCE: For him, perhaps. Not for me.
[beat 3] INSPECTOR LINDQVIST: Do you own a revolver, madam? CONSTANCE: I own a skinning knife and a very good sense of humor. INSPECTOR LINDQVIST: The first I've seen. The second I'm waiting for. CONSTANCE: Then you will wait a long time.
[beat 4] He taps his hat. She straightens a pen. The heron stares at both.
[beat 5] INSPECTOR LINDQVIST: Tell me about the safe. CONSTANCE: There is no safe. INSPECTOR LINDQVIST: There is a safe-shaped hole in your wall. CONSTANCE: Is there? INSPECTOR LINDQVIST: Behind the heron. CONSTANCE: I never look behind the heron. INSPECTOR LINDQVIST: Perhaps you should.
[beat 6] The door opens. A tall young man steps in, soaked, a package under his arm. ELLIOTT FAIRWEATHER-NGUYEN (20s, delivery boy, cap dripping) stops. He looks from one to the other.
[beat 7] ELLIOTT: Sorry. Parcel for Mr. Pennington. CONSTANCE: Mr. Pennington is dead. ELLIOTT: Oh. Then who signs? INSPECTOR LINDQVIST: I will. What is it?
[beat 8] ELLIOTT: Don't know. It's ticking. Inspector Lindqvist and Constance look at each other. Then at the parcel. Then at the heron.
[beat 9] CONSTANCE: Put it down gently, young man. ELLIOTT: Is it going to-- INSPECTOR LINDQVIST: It's going to be fine. Probably.
[beat 10] Elliott lowers the parcel onto the desk. The ticking stops. Silence.
[beat 11] Constance lifts the lid. Inside, a brass pocket watch and a note. CONSTANCE: "Look behind the heron. Signed, Pennington."
[beat 12] INSPECTOR LINDQVIST: He's been dead since six. CONSTANCE: He mailed it at five.
[beat 13] Elliott takes off his dripping cap. ELLIOTT: Should I go? INSPECTOR LINDQVIST: No. Stand by the heron. Both of you.
[beat 14] They turn toward the bird. It stares back, patient.

### SCENE s00232 | EXT. FROZEN RIVER GORGE - DUSK
Characters: WILHELMINA OSEI-STRAND, TOMAS BRENNAN-ADEYEMI
[beat 0] A slot of black rock, ice-glazed. Wind scours the canyon floor. Snow hisses along the ridge like sand. At the bottom, half under an overhang, a collapsed tent: orange nylon sagging under a week of drift. Beside it, a dead stove and a rope tied to nothing. DR. WILHELMINA OSEI-STRAND (40s, glaciologist, frostbitten cheeks, a parka two sizes too big) crouches beside her younger colleague, TOMAS BRENNAN-ADEYEMI (20s, field assistant, one boot missing), who sits propped against the rock with his eyes half open.
[beat 1] WILHELMINA: Talk to me. Count backward from ten. TOMAS: Ten. Nine. WILHELMINA: Keep going. TOMAS: Eight. Tired.
[beat 2] She tucks her scarf around his throat. Stands. Cups her mouth toward the ridge. WILHELMINA: Anyone! Anyone up there!
[beat 3] Only the wind answers. She lowers her hands. Mutters, barely audible. WILHELMINA: Okay. Okay. Think. Fire. Heat. Water.
[beat 4] She digs through the wreck of the tent and finds a single flare, cracked at the base. She weighs it in her glove.
[beat 5] WILHELMINA: We've got one shot. When I say, close your eyes. TOMAS: Why? WILHELMINA: Because I'm going to try to be a lighthouse.
[beat 6] She strikes. The flare sputters, catches. Red light floods the walls of the gorge, and the falling snow turns to rubies.
[beat 7] Far above, a faint, answering glow.

### SCENE s00233 | INT. LAUNDRY ROOM OF A GRAND HOTEL - NIGHT
Characters: EULALIE FONTENOT-RAMASWAMY, JULIAN FONTENOT
[beat 0] Steam pipes and canvas carts. A long ironing table with a single white shirt stretched over it. MRS. EULALIE FONTENOT-RAMASWAMY (60s, head housekeeper, starched apron, silver hair pinned flat) presses the shirt with a heavy iron. Her motions are slow and exact. Her son, JULIAN FONTENOT (30s, tuxedo, bow tie undone) stands across the table. He holds a champagne flute like it's something he's been told to carry.
[beat 1] JULIAN: Mother. EULALIE: Julian. JULIAN: The reception started an hour ago. EULALIE: I know. I heard the music. She turns the shirt. Irons the cuff. He watches the iron, not her.
[beat 2] JULIAN: You promised you'd come. EULALIE: I'm here. In the building. JULIAN: That's not the same. EULALIE: It's close. The iron hisses. Steam rolls between them.
[beat 3] JULIAN: Mr. Whitcombe asked about you. EULALIE: Did he. JULIAN: He wants to thank you. EULALIE: I've been thanked. JULIAN: By whom? EULALIE: By the shirts.
[beat 4] He sets the flute down. Takes a cloth from the cart and begins to fold it into a square. It's the wrong size. He folds it again.
[beat 5] JULIAN: They're announcing the engagement. EULALIE: Yes. JULIAN: Sophie's parents are here. EULALIE: I've seen their luggage. Very nice leather. JULIAN: Mother. EULALIE: Julian.
[beat 6] She sets the iron upright. Looks at the shirt. Finally at him. EULALIE: Your collar is crooked.
[beat 7] He lifts his hands to fix it. They shake. She walks around the table, takes the two ends of the bow tie from him, and ties it without a word. Her fingers are quick and steady. His are not.
[beat 8] JULIAN: I thought you'd be angry. EULALIE: I am ironing, Julian. Don't mistake it.
[beat 9] She tugs the knot straight. Smooths his lapels with both palms. EULALIE: Go. They'll want you for the toast.
[beat 10] JULIAN: Come with me. EULALIE: In this apron? JULIAN: Yes.
[beat 11] She looks at the apron. At her hands. At the white shirt, still warm on the board.
[beat 12] EULALIE: Give me ten minutes. JULIAN: You'll come? EULALIE: Ten minutes.
[beat 13] He nods. Picks up his flute. Leaves it. Picks up the folded cloth instead and puts it in her hand.
[beat 14] He goes. She stands holding the cloth.
[beat 15] Then she takes off the apron, and folds it, and lays it on the board where the shirt had been.

### SCENE s00234 | EXT. SHELLED FARMHOUSE COURTYARD, NORMANDY - DAWN
Characters: ZEKE, MATTHIAS-ODUYA, PRIVATE COLM BRANNIGAN-VOSS, RAFA, DELGADO-HOLM
[beat 0] Mist. Broken tile. A dead cow on its side, bloated. Three soldiers crouch behind a collapsed wall. SERGEANT EZEKIEL "ZEKE" MATTHIAS-ODUYA (30s, helmet netted, chewing nothing) peers over the stones. Beside him, PRIVATE COLM BRANNIGAN-VOSS (19, rifle too big, freckles) breathes through his mouth. Behind them, CORPORAL RAFAELA "RAFA" DELGADO-HOLM (20s, radio on her back, steady hands) checks her sidearm.
[beat 1] ZEKE: Quiet. Too quiet. COLM: You say that every time, Sarge. ZEKE: It's true every time.
[beat 2] RAFA: Barn's clear. House is clear. Nothing on the ridge. ZEKE: Then why's the cow dead? RAFA: Shell. ZEKE: Which shell? COLM: Ours? ZEKE: Maybe.
[beat 3] A bird lands on the cow. Pecks. Leaves.
[beat 4] COLM: Corporal Delgado-Holm. Can I ask something? RAFA: Rafa. Just Rafa. COLM: Rafa. Why's the radio quiet? RAFA: Because nobody's talking. COLM: That's what I mean.
[beat 5] ZEKE: Brannigan. Eyes front. COLM: Yes, Sarge.
[beat 6] They wait. A droplet of mist rolls from Zeke's helmet and hits the mud.
[beat 7] RAFA: Sarge. Door. The farmhouse door, which was shut, is now ajar. A hand-width.
[beat 8] ZEKE: Colm. Left. Rafa. Right. On three. COLM: One. RAFA: Two. They rise together, rifles up.
[beat 9] The door swings wide. Out steps a goat. Then a second goat. A third.
[beat 10] The squad stares. The goats stare back. COLM: Sarge. Was that the thing? ZEKE: That was the thing. RAFA: I'm going to be sick.
[beat 11] She laughs, covering her mouth. Colm sinks down, giggling. Zeke slumps against the wall, shoulders shaking.
[beat 12] A whistle in the sky. Rising. They all stop laughing at once.
[beat 13] ZEKE: Down! They scatter. The first shell lands in the barn. The wall behind them heaves. The goats bolt in three directions. Dust and straw rain over three helmets.
[beat 14] Rafa pulls Colm flat. Zeke crawls over both of them. ZEKE: Rafa! Radio! RAFA: It's dead! ZEKE: Then pray! COLM: To who? ZEKE: The goats!

### SCENE s00235 | INT. RADIO DUGOUT, WESTERN FRONT - NIGHT
Characters: LIEUTENANT PHILIPPE ARMAND-DOGBE, RADIO, STRANGER, ALOIS
[beat 0] A timber box dug into clay. A single candle. A field set with a cracked dial. LIEUTENANT PHILIPPE ARMAND-DOGBE (20s, mud to the eyebrows, a hole in his left sleeve) crouches over the headset, writing coordinates with a stub of pencil.
[beat 1] Static. Then a faint, courteous voice. RADIO: Dugout Seven, this is Battalion. Report. PHILIPPE: Battalion, Dugout Seven. Quiet night. Nothing to report. RADIO: Copy. Stay warm, Seven. PHILIPPE: Will do.
[beat 2] He releases the key. Stares at the candle. The flame is steady. Too steady. For a long moment the whole dugout seems to hold still.
[beat 3] A scrape at the entrance. The blanket curtain moves. A figure ducks in. A boy in a muddy overcoat with no insignia, holding a tin cup of tea. He is perhaps sixteen. He wears no helmet, only a thin smile.
[beat 4] PHILIPPE: Who are you?
[beat 5] The boy sets the cup down in front of him. STRANGER: Tea, sir. Compliments of the other side. Philippe doesn't breathe. The pencil rolls off the table.
[beat 6] STRANGER: They've been listening since Tuesday. PHILIPPE: And you came to tell me? STRANGER: I came to say they've changed the plan.
[beat 7] He crosses to the radio, turns the dial one click, and Battalion's voice fades to nothing. Another voice takes its place, in another language, bright and brisk.
[beat 8] The boy meets Philippe's eyes. Now he has a name. ALOIS: My name is Alois, sir. I'd drink the tea.
[beat 9] Philippe picks up the cup. His hand does not shake. He drinks.

### SCENE s00236 | INT. SMALL-TOWN PET FUNERAL PARLOR - DAY
Characters: BEA, LANGSTROM-OYELEYE, GERRY, POTTS, HECTOR MWENDA-ABERNATHY, DENNIS
[beat 0] Pastel walls. Little urns on velvet shelves. A framed poster: "Every Goodbye Deserves Dignity." BEATRIX "BEA" LANGSTROM-OYELEYE (40s, funeral director, black pencil skirt, too-bright lipstick) stands at a small oak lectern with a sleeping ferret in a tiny casket beside her. Seated in the front row, in folding chairs: GERALDINE "GERRY" POTTS (60s, widowed, tissue in fist) and her brother-in-law HECTOR MWENDA-ABERNATHY (60s, loud tie, sunglasses on indoors).
[beat 1] BEA: Friends. We are gathered to honor Nibbles. GERRY: Oh, Nibbles. HECTOR: He was a good ferret. BEA: He was.
[beat 2] HECTOR: Smelled like a gym bag. GERRY: Hector! HECTOR: I'm saying it with love. BEA: Perhaps we could hold the anecdotes until the reception. HECTOR: I'm just saying he bit the mailman. GERRY: He bit the mailman once. HECTOR: Four times. GERRY: Twice. HECTOR: Four. I counted.
[beat 3] BEA: Let us bow our heads. They do. A pause.
[beat 4] A phone rings, tinny, from Hector's pocket. HECTOR: Not now, Dennis. DENNIS: Hector, did you tell her about the hamster?
[beat 5] GERRY: What hamster? HECTOR: Dennis, I'm at a funeral! DENNIS: Whose? BEA: Nibbles's. DENNIS: Oh no. He was a good ferret! HECTOR: That's what I said! GERRY: Hector, what hamster? HECTOR: Nothing! A rumor! BEA: Ladies, gentlemen, caller, please--
[beat 6] The casket lid pops open. Nibbles sits up, yawns, stretches.
[beat 7] Silence in every key. GERRY: He's alive. HECTOR: He was asleep. BEA: It happens. DENNIS: What happens? Did he come back?
[beat 8] Hector hangs up. Gerry scoops the ferret into her arms and sobs with joy. GERRY: My boy! My Nibbles!
[beat 9] BEA: I'll prepare a refund. HECTOR: Keep the flowers.
[beat 10] Nibbles bites Bea. She yelps. Hector nods, satisfied. HECTOR: Four times.

### SCENE s00237 | INT. SINKING FISHING TRAWLER, WHEELHOUSE - NIGHT
Characters: CAPTAIN RUTH ABERNATHY-KOMA, BASTIEN LEFEBVRE-ADEOLA, MAEVE ONWUACHI-DRUMM, COAST GUARD
[beat 0] Water ankle-deep and rising. A lantern swings from the ceiling. Waves slam the hull. CAPTAIN RUTH ABERNATHY-KOMA (50s, oilskins, grey braid) grips the wheel. Her knuckles are white. Beside her, deckhand BASTIEN LEFEBVRE-ADEOLA (20s, hood, cut lip) bails with a plastic bucket. At the radio, first mate MAEVE ONWUACHI-DRUMM (30s, hands taped, glasses fogged) clutches the handset.
[beat 1] MAEVE: Mayday, mayday, this is trawler Gallant Heron, taking water, request assistance. COAST GUARD: Gallant Heron, say again your position. MAEVE: Forty-one north, sixty-eight west! Forty-one north!
[beat 2] BASTIEN: How much time? RUTH: Twenty minutes. BASTIEN: That's not time. That's a prayer.
[beat 3] COAST GUARD: ...ant Heron... one hour... response... MAEVE: One hour! We don't have one hour!
[beat 4] RUTH: Maeve. Give me the mic. MAEVE: They can't hear-- RUTH: Give it to me!
[beat 5] Maeve hands it over. A wave rocks the boat. The lantern swings.
[beat 6] RUTH: Coast Guard, this is Ruth Abernathy. Last transmission. We are abandoning ship in ten minutes. Three souls. Please mark our position.
[beat 7] BASTIEN: Abandoning to what? RUTH: The raft. BASTIEN: The raft's been in the shed since March. RUTH: Then it's had a long rest.
[beat 8] MAEVE: Captain, the pump's dead! BASTIEN: I'm bailing! RUTH: Bail faster!
[beat 9] COAST GUARD: ...Heron... flare... fire flare... MAEVE: Flare! Where's the flare? BASTIEN: Port locker! MAEVE: It's underwater! RUTH: Then swim!
[beat 10] Maeve dives into the dark water pooled in the corner. Surfaces gasping. A bright orange flare in her fist. MAEVE: Got it!
[beat 11] RUTH: Up top! Go!
[beat 12] They push through the hatch. The sea comes at them in sheets. Wind grabs the flare, strikes it. Red fire stabs the sky.
[beat 13] Far off, a searchlight swings. Bastien whoops. BASTIEN: They see us! They see us!
[beat 14] RUTH: Slow down, Ruth. Don't thank anyone yet.
[beat 15] The hull groans. A wave lifts them. The searchlight finds their faces.

### SCENE s00238 | EXT. COMMUNITY POOL, DIVING PLATFORM - LATE AFTERNOON
Characters: PETE, ADEYEMI-LANDRY, BEANPOLE, OKONJO, SUNITA MARCHETTI-DAS, CASPIAN FROST-NKEMELU, ROSALIND, GWENDOLYN TARASOVA
[beat 0] Chlorine light, gold on blue. The ten-meter platform stands over the water like a lighthouse in swim trunks. Six teenagers cluster at the top, bare feet on warm concrete. PERPETUA "PETE" ADEYEMI-LANDRY, 16, tall and laconic, stretches her calves against the rail. She does not look down. BRIAN "BEANPOLE" OKONJO, 15, adjusts his goggles for the fifth time, lips moving as he rehearses a joke he will never tell. SUNITA MARCHETTI-DAS, 16, ponytail wet, picks at a nail. CASPIAN FROST-NKEMELU, 17, shirtless, tries very hard to look relaxed. The twins ROSALIND and GWENDOLYN TARASOVA, 15, share a towel and a single earbud each. Wind moves the surface of the pool like a hand smoothing a bedsheet.
[beat 1] PETE: Who's first? BEANPOLE: Not me. SUNITA: Not me. CASPIAN: I'll go. PETE: You said that last week. CASPIAN: And last week I almost did.
[beat 2] The twins exchange a look. Take the earbuds out in unison. ROSALIND: We'll go together. GWENDOLYN: We'll go together. ^
[beat 3] They step to the edge, hands linked. Neither speaks. Below, a lifeguard whistles a lazy tune.
[beat 4] SUNITA: Wait. Wait. Don't. ROSALIND: Why? GWENDOLYN: Why? SUNITA: Because after this, it's September.
[beat 5] Silence. Even the wind seems to pause. She says it quietly. They hear it anyway.
[beat 6] Pete finally looks down. Her face softens. She sits on the edge of the platform, legs swinging into the sky. PETE: Then let's make it a good one.
[beat 7] Caspian sits beside her. Beanpole joins them, goggles fogged. Sunita comes last, close enough that their shoulders touch.
[beat 8] The twins look at each other once more. Then, together, they jump.
[beat 9] The splash is distant and silver. The others lean over to watch the ripples spread outward, ring after ring, until they reach the walls.
[beat 10] BEANPOLE: Okay. Now me.

### SCENE s00239 | EXT. BRIDGE OF BONES OVER THE GREY GORGE - DAWN
Characters: AELFWYN THORNBURY, GRIM, OKORO-SHALE, THISTLE-WREN, BROTHER CASSIAN VELLACOTT
[beat 0] A bridge strung between two cliffs, built from the ribs of some long-dead leviathan. Fog fills the gorge below. Mountain wind pulls at cloaks. A party of four stands at the near end. AELFWYN THORNBURY (30s, ranger, bow across her back, scar through one eyebrow) tests the first rib with her boot. GRIMBALD "GRIM" OKORO-SHALE (50s, dwarf-born, braided beard, iron-shod staff) leans on the staff and glares at the fog. THISTLE-WREN (late teens, half-fey, hair like dandelion down) hops from foot to foot, humming. BROTHER CASSIAN VELLACOTT (40s, wandering monk, wooden prayer beads, travel-worn robe) kneels briefly, touches the stone, rises.
[beat 1] AELFWYN: We cross single file. Spacing of three paces. Anyone who stumbles, the others hold. GRIM: Three paces. As if the fog will respect it.
[beat 2] THISTLE-WREN: It will! I asked it nicely! AELFWYN: Thistle, you don't ask fog. THISTLE-WREN: That's why it listens.
[beat 3] CASSIAN: The ribs are old. Older than the oldest prayer I know. AELFWYN: Will they hold? CASSIAN: They have so far.
[beat 4] Aelfwyn nods. Steps out onto the bridge. The bone creaks, then settles. She takes three paces and stops. Grim follows. Thistle-Wren follows Grim, humming louder. Cassian takes the rear, counting his beads.
[beat 5] Halfway across, a gust slams the bridge sideways. The party freezes. Thistle-Wren grabs Grim's belt. Grim drops his staff to the rib to steady himself. Aelfwyn kneels, one hand on the bone, the other signaling Cassian to hold. The fog thickens until none of them can see more than an arm's length ahead.
[beat 6] GRIM: Idiot dwarf. Never trust a bridge made of something that died. CASSIAN: Everyone, breathe. Let the wind pass through you. THISTLE-WREN: I'm trying! My lungs are very small!
[beat 7] AELFWYN: Quiet, all of you. Listen. They listen.
[beat 8] Far below, in the white, something large exhales. THISTLE-WREN: It's the leviathan. GRIM: It's dead. THISTLE-WREN: Its ghost isn't. CASSIAN: Then we cross as guests.
[beat 9] The wind drops. The fog parts for a moment, revealing the far side: a cairn, a green slope, a thin road winding into pines.
[beat 10] AELFWYN: Move. Now. Quick and quiet.
[beat 11] They run, three paces apart, bone ringing under their boots like a xylophone of the dead. Thistle-Wren giggles. Grim wheezes. Cassian's beads clack. Aelfwyn counts, lips tight.
[beat 12] They reach the far cliff and tumble onto grass. Grim lies flat, staring at the sky. GRIM: Never again. THISTLE-WREN: We have to cross back. GRIM: I'll sleep here.
[beat 13] Behind them, the bridge sighs and sways. The fog closes over it like a lid.
[beat 14] CASSIAN: We should keep moving. The road is long. AELFWYN: Up, old friend. He takes it. She hauls him upright. The four stand in a row, looking down the road.
[beat 15] THISTLE-WREN: Where does it go? AELFWYN: Wherever we go.
[beat 16] They start walking. The wind follows at their heels, gentle now, almost apologetic.

### SCENE s00240 | INT. OFFICE PARK CONFERENCE ROOM "SERENITY" - MORNING
Characters: GARETH PLUMLEY-ADEBAYO, IFE, KALUZA-BRENNER, DEZ, MACALLISTER-TRAN, PRUDENCE LOCKHART-OSEI, WALLY, ZIELINSKI-MAHMOUD, HETTY, VASQUEZ-LINDGREN
[beat 0] Glass walls. A whiteboard reading "Q3 SYNERGY LEVERAGE." A bowl of fruit nobody touches. Six employees sit around a long table. GARETH PLUMLEY-ADEBAYO (40s, regional vice president, loud socks) stands at the head, marker raised. IFEOMA "IFE" KALUZA-BRENNER (30s, product lead) types without looking at the keyboard. DESMOND "DEZ" MACALLISTER-TRAN (20s, intern, over-ironed shirt) holds a notebook like a hymnal. PRUDENCE LOCKHART-OSEI (50s, compliance, red glasses) keeps her palms flat on the table. WALTER "WALLY" ZIELINSKI-MAHMOUD (60s, facilities, tool belt) sits slightly apart, eating an apple. HENRIETTA "HETTY" VASQUEZ-LINDGREN (30s, accountant) stares at the clock.
[beat 1] GARETH: Okay, team. Quick check-in. Ife, how are we feeling? IFE: Aligned. GARETH: Love that. Dez? DEZ: Also aligned, sir. GARETH: Call me Gareth. DEZ: Yes, Mr. Plumley-Adebayo. GARETH: Gareth. DEZ: Gareth, sir.
[beat 2] PRUDENCE: Gareth, before we go further, I have to note that the budget memo is unsigned. GARETH: Prudence, Prudence, Prudence. PRUDENCE: That's my name. GARETH: It will be signed. HETTY: By whom? GARETH: By... us.
[beat 3] WALLY: Nobody signs anything in this building. I've been here thirty years. GARETH: Wally, great energy. WALLY: It's an apple.
[beat 4] IFE: Gareth, the numbers-- GARETH: The numbers are flexible, Ife. HETTY: Gareth, the numbers are literally negative three million. GARETH: Hetty, what a strong, powerful negative.
[beat 5] A beat. The room hums. Dez writes "powerful negative" in his notebook and underlines it.
[beat 6] PRUDENCE: Gareth, this is a legal exposure. GARETH: Team, let's pivot to appreciation.
[beat 7] He claps. Nobody joins. Walter finishes his apple. Places the core on the table, precisely in the center of the whiteboard's reflection.
[beat 8] WALLY: I'll tell you what I appreciate. The sprinklers work.
[beat 9] He takes a lighter from his tool belt and holds it under the smoke detector.
[beat 10] The sprinklers burst. Water pours over six faces. Gareth stands at the head, marker raised, dripping.
[beat 11] GARETH: Great. This is great.

### SCENE s00241 | INT. PRIVATE LIBRARY OF A COUNTRY HOUSE - NIGHT
Characters: SIR AUGUSTUS FERRIDAY-OKONKWO, LADY PHILOMENA FERRIDAY, BARNABY CHATTERJEE-WHITLOCK, SAMUEL OKAFOR-LYNCH
[beat 0] Firelight. Leather spines. A storm throwing rain at the leaded windows. Four people sit in wing chairs around a low table: a decanter, a deck of cards, a bowl of walnuts. SIR AUGUSTUS FERRIDAY-OKONKWO (70s, silver mustache, velvet jacket) holds a glass of port and a closed fan of cards. His niece LADY PHILOMENA FERRIDAY (30s, emerald gown, pearl choker) taps a walnut against the table. Their guest DR. BARNABY CHATTERJEE-WHITLOCK (50s, rumpled tweed, wire glasses) studies his hand. The butler, MR. SAMUEL OKAFOR-LYNCH (60s, impeccable, immaculately still), stands behind the fireplace. Thunder rolls. The cards are placed one by one.
[beat 1] SIR AUGUSTUS: Your play, Doctor. DR. CHATTERJEE-WHITLOCK: Patience, Sir Augustus. He lays a card. Smiles faintly.
[beat 2] PHILOMENA: You're stalling. DR. CHATTERJEE-WHITLOCK: I'm thinking. PHILOMENA: Same thing.
[beat 3] SIR AUGUSTUS: Samuel, more port. MR. OKAFOR-LYNCH: Of course, Sir Augustus. He glides forward, fills the glass, glides back. The fire pops.
[beat 4] PHILOMENA: Uncle, the will. SIR AUGUSTUS: Not tonight. PHILOMENA: You said tonight. SIR AUGUSTUS: I said some night. DR. CHATTERJEE-WHITLOCK: It's a sensitive subject, my dear. PHILOMENA: It's my inheritance. SIR AUGUSTUS: It's mine until I'm dead.
[beat 5] Another thunderclap. The lights flicker. The room dips to gold, then to near-black. A glass shatters. Someone gasps.
[beat 6] The lights return. Sir Augustus is slumped in his chair, one hand clutching the arm, the other still gripping the port. His mustache is wet. His eyes are open. He does not breathe.
[beat 7] Philomenna rises first, knocking the walnut bowl over. Chatterjee-Whitlock is already at the old man's side with two fingers on the throat. Okafor-Lynch has not moved from the fireplace.
[beat 8] PHILOMENA: Uncle? DR. CHATTERJEE-WHITLOCK: He's gone. PHILOMENA: That's not possible. He was just talking. DR. CHATTERJEE-WHITLOCK: It happens quickly.
[beat 9] She looks at the decanter. At the butler. At the doctor. She picks up the port, sniffs it.
[beat 10] PHILOMENA: Bitter almond. DR. CHATTERJEE-WHITLOCK: Philomena, don't touch--
[beat 11] PHILOMENA: Samuel poured it. MR. OKAFOR-LYNCH: Madam, I poured what Sir Augustus requested. PHILOMENA: You poured it twice. MR. OKAFOR-LYNCH: Once for the glass. Once for his health.
[beat 12] She lunges at him. He doesn't flinch. The doctor catches her arm. Chatterjee-Whitlock holds her back as she strains, trembling, at the butler.
[beat 13] PHILOMENA: You killed him! MR. OKAFOR-LYNCH: Madam, I loved him for forty years.
[beat 14] The storm breaks. Rain hammers the glass. For the first time, Okafor-Lynch's composure cracks.
[beat 15] He reaches into his waistcoat and withdraws a folded paper. MR. OKAFOR-LYNCH: He wrote this himself, this afternoon. It names the poison. And the man who put it in the decanter.
[beat 16] He hands it to the doctor. The doctor reads. His face drains of color.
[beat 17] DR. CHATTERJEE-WHITLOCK: I didn't-- He steps back. Philomena stares at him. The fire collapses into embers.

### SCENE s00242 | EXT. LIFEBOAT ADRIFT, SOUTHERN OCEAN - NOON
Characters: CAPTAIN ISOLDE VANDERHOEK-MWAMBA, ENSIGN REMY LAFAYETTE-OSUNDE, MAGS, ODELL-PRZYBYLSKI
[beat 0] A grey swell. A hull the colour of old teeth. The sun a dull coin behind cloud. Three figures crowd the boat. CAPTAIN ISOLDE VANDERHOEK-MWAMBA (50s, cracked lips, officer's cap tied under her chin) sits at the tiller, jaw tight. Across from her, ENSIGN REMY LAFAYETTE-OSUNDE (20s, one arm in a makeshift sling, blistered nose) holds a half-empty water tin in his good hand. In the bow, the ship's cook, MARGUERITE "MAGS" ODELL-PRZYBYLSKI (60s, apron still on, salt in her eyebrows), stares at the horizon with her chin on her knees.
[beat 1] REMY: Captain, the ration. ISOLDE: Two sips. Each. REMY: Last night it was three. ISOLDE: Last night I thought we'd be rescued by today.
[beat 2] MAGS: That's what I thought yesterday. REMY: Mags, don't. MAGS: I'm only saying.
[beat 3] ISOLDE: Pass the tin. Remy hands it over. She takes a sip, wipes her mouth, passes it on. Mags takes hers without looking.
[beat 4] MAGS: Captain, how long do you give us? ISOLDE: I don't give things. MAGS: How long do you think? ISOLDE: Three days. Four if the rain comes. REMY: And if it doesn't? ISOLDE: Then we'll know.
[beat 5] Silence. The swell lifts them, lowers them.
[beat 6] MAGS: There. REMY: Where? MAGS: There! A light!
[beat 7] Remy scrambles up, rocking the boat. Isolde grabs the gunwale. A speck of white glints on the horizon.
[beat 8] REMY: Ship. It's a ship. ISOLDE: It's a glare. REMY: It's moving! MAGS: It's moving!
[beat 9] ISOLDE: It's a gull. The speck rises, banks, and becomes a seabird, wheeling above the waves. It cries once and flies away from them.
[beat 10] Remy sinks back. Mags laughs, a cracked little sound. Then she cries, then she laughs again.
[beat 11] ISOLDE: Mags. MAGS: I know.
[beat 12] ISOLDE: Pass the tin. MAGS: It's empty. ISOLDE: Pass it anyway.

### SCENE s00243 | INT. FAMILY KITCHEN, SUBURBAN HOUSE - EVENING
Characters: GRANDMOTHER ODETTE ABERNATHY-KWAME, DERRICK ABERNATHY, PRIYA RAGHAVAN-ABERNATHY, JUNE
[beat 0] Steam on the windows. A turkey, half-carved. Mismatched chairs around a table crammed with side dishes. GRANDMOTHER ODETTE ABERNATHY-KWAME (70s, cardigan, unshakable) sits at the head, fork poised. Her son DERRICK ABERNATHY (40s, rolled sleeves, carving knife) stands over the bird. His wife PRIYA RAGHAVAN-ABERNATHY (40s, apron, flour on her cheek) refills the gravy boat. Their teenager JUNIPER "JUNE" ABERNATHY (16, black nail polish, phone face down) slouches in her chair. Their youngest, MILO ABERNATHY (7, napkin tucked in his collar), kicks the table leg.
[beat 1] ODETTE: Derrick, the breast is for guests. DERRICK: Mother, we are the guests.
[beat 2] PRIYA: Derrick, the potatoes. DERRICK: Which potatoes? PRIYA: The mashed ones. JUNE: The ones I made. ^
[beat 3] ODETTE: June, put your phone away. JUNE: It's face down. ODETTE: It's still there.
[beat 4] MILO: Can I have a roll? PRIYA: Say please. MILO: Please roll.
[beat 5] DERRICK: Okay, everyone, a toast. Silence. Glasses are raised. Odette's is not. DERRICK: To family. To love. To the people at this table.
[beat 6] PRIYA: To the person who bought the wine. DERRICK: That was me. PRIYA: It was me. DERRICK: It was a joint purchase. JUNE: It was a Costco purchase. MILO: I like Costco.
[beat 7] ODETTE: Milo, eat. MILO: I'm waiting for the toast to be over. DERRICK: It's over.
[beat 8] MILO: Then why is Grandma not drinking? All heads turn to Odette. She holds her glass, then sets it down carefully.
[beat 9] ODETTE: Because I have news. DERRICK: Mother? PRIYA: Odette?
[beat 10] ODETTE: I sold the house.
[beat 11] Silence. A gravy boat drips. Milo drops his roll. JUNE: Wow.
[beat 12] DERRICK: Mother, you can't-- ODETTE: I already did. PRIYA: Let her finish.
[beat 13] ODETTE: I'm moving to Lisbon. In March.
[beat 14] MILO: Is that far? ODETTE: Very. MILO: Can I come? ODETTE: Eat your roll first.
[beat 15] Derrick sits slowly. Priya hands him the potatoes. He takes a spoonful, stares at it, and laughs once.

### SCENE s00244 | INT. ST. CLEMENT'S HOSPITAL, TRAUMA BAY THREE - NIGHT
Characters: ANWEN OKOYE-FITZGERALD, NURSE TADEUSZ MBEKI-LORENZ, PRIYANKA HALVORSEN-NWOSU, DISPATCH
[beat 0] Overhead lights. Monitors beep. A body on a gurney under blue drapes. DR. ANWEN OKOYE-FITZGERALD (40s, surgeon, scrubs, mask pulled down) works at the bedside. Beside her, NURSE TADEUSZ MBEKI-LORENZ (30s, calm, gloved) hands her a clamp. At the foot of the gurney, RESIDENT DR. PRIYANKA HALVORSEN-NWOSU (20s, new, eyes huge) watches, clipboard clutched. On the wall, a speaker crackles.
[beat 1] DISPATCH: Trauma Three, ETA on the second unit, four minutes. ANWEN: Copy. We're stable.
[beat 2] TADEUSZ: Pressure's dropping. ANWEN: Fluids? TADEUSZ: Wide open.
[beat 3] ANWEN: Priyanka, what's your call? PRIYANKA: Um. Blood? ANWEN: Correct. Type? PRIYANKA: O negative. Universal. ANWEN: Go get four units. PRIYANKA: Right now? ANWEN: Yesterday.
[beat 4] Priyanka bolts through the door. Tadeusz watches her go.
[beat 5] TADEUSZ: She'll be fine. ANWEN: They all say that. TADEUSZ: She will be.
[beat 6] ANWEN: Pressure. TADEUSZ: Eighty over fifty. ANWEN: Pulse? TADEUSZ: One-thirty. ANWEN: Pack it. Pack it, pack it.
[beat 7] He packs. She presses. The monitor rises, falters, steadies.
[beat 8] DISPATCH: Trauma Three, update. Second unit is reporting a child on board. Pediatric trauma, eight years old. Anwen and Tadeusz exchange a look.
[beat 9] ANWEN: Open Bay Four. TADEUSZ: Dr. Okoye-Fitzgerald, we're short. ANWEN: Then call Reyes in from the cafeteria. TADEUSZ: She's off. ANWEN: Call her anyway.
[beat 10] He is already dialing.
[beat 11] The door bursts open. Priyanka, breathless, carries a cooler of blood bags. PRIYANKA: Four units, O negative.
[beat 12] ANWEN: Good. Hang two. Then you're with me in Four. PRIYANKA: The child? ANWEN: The child.
[beat 13] Priyanka stares. Then she sets down the cooler, rolls up her sleeves, and nods once.
[beat 14] ANWEN: You'll be fine. PRIYANKA: They all say that.
[beat 15] Anwen almost smiles. Pulls up her mask. Out the door.

### SCENE s00245 | INT. GLASSBLOWER'S FURNACE ROOM, VENICE - NIGHT, 1743
Characters: MASTER ZORZI CAMPOSAMPIERO, ISABELLA MOLIN-OKAFOR
[beat 0] Orange glow. Pipes and pontils on racks. Heat that bends the air. MASTER ZORZI CAMPOSAMPIERO (60s, leather apron, burn-scarred forearms) shapes a molten bulb at the furnace mouth. Slow turn. Slow breath.
[beat 1] The door opens. Rain. ISABELLA DA MOLIN-OKAFOR (30s, travelling cloak, a velvet bag pulled tight against her chest) stands dripping.
[beat 2] ZORZI: Closed. ISABELLA: I know. ZORZI: Then why are you here?
[beat 3] ISABELLA: The Council sends their regards. He stops turning. The glass sags. He rights it.
[beat 4] ZORZI: Tell the Council I have nothing to say. ISABELLA: They'd like the formula. ZORZI: They'd like the moon.
[beat 5] She crosses to the bench. Sets the velvet bag down. It clinks. ISABELLA: This is yours. ZORZI: What is it? ISABELLA: A sample. Of what you made last winter.
[beat 6] He glances at the bag. Then at her.
[beat 7] ZORZI: You stole it. ISABELLA: I borrowed it. ZORZI: From my own workshop.
[beat 8] ISABELLA: From your apprentice. His jaw works. The furnace roars. Her cloak steams.
[beat 9] ZORZI: Giacomo. ISABELLA: He's very young. ZORZI: He's a fool. ISABELLA: He's frightened.
[beat 10] Zorzi sets down the pipe. Turns. Picks up the long iron tongs. ISABELLA: Master Zorzi.
[beat 11] ZORZI: Open the bag.
[beat 12] She does. Inside: a glass bird, translucent blue, wings spread. She lifts it into the glow. It flickers like a pulse.
[beat 13] ISABELLA: The Council thinks it's witchcraft. ZORZI: It's chemistry. ISABELLA: They'll burn the shop. ZORZI: They'll burn me first.
[beat 14] She sets the bird on the bench.
[beat 15] ISABELLA: I could leave it here. Tell them you destroyed it. ZORZI: And Giacomo? ISABELLA: Gone to Padua.
[beat 16] Zorzi laughs, short, ugly. He lifts the tongs, steps toward her. She doesn't move. He raises the iron, and the bird glitters between them.
[beat 17] With one stroke, he smashes it. Blue shards fly. Isabella flinches. Zorzi and Isabella both stand in the sudden silence, glass sparks drifting like fireflies.
[beat 18] ZORZI: Tell the Council it's ash. ISABELLA: They'll want proof. ZORZI: Then bring them the furnace.
[beat 19] He turns back to the fire. After a long moment she picks up a single shard, slips it into her cloak, and goes out into the rain.

### SCENE s00246 | INT. CLOCKMAKER'S SHOP, BACK ROOM - NIGHT
Characters: MARGOT, ILLINGWORTH-BASSEY, VICTOR OKONKWO-REYES, DEL, ARMSTRONG-KATZ, SOL, QUILLFEATHER, ALISTAIR PEMBERTON-SHAW
[beat 0] Dozens of clocks ticking out of step. A vault door, ajar. Four thieves crowd the doorway in dark clothes. MARGOT "THE MOUSE" ILLINGWORTH-BASSEY (40s, crew leader) holds a stopwatch. VICTOR OKONKWO-REYES (30s, safecracker) presses a stethoscope to the vault. DELPHINE "DEL" ARMSTRONG-KATZ (20s, driver) shifts on her feet. SOLOMON "SOL" QUILLFEATHER (50s, lookout, bowler hat) peers through the shutters.
[beat 1] MARGOT: Ninety seconds. Everyone know their job? SOL: I watch. DEL: I drive. VICTOR: I listen.
[beat 2] MARGOT: Good. Victor, tumblers. VICTOR: Come on, you old beauty.
[beat 3] A click. Another. The door swings wide.
[beat 4] Inside: velvet cases, empty. MARGOT: Empty. VICTOR: Empty? DEL: Margot-- MARGOT: Quiet.
[beat 5] Every clock in the shop strikes midnight at once. A cacophony of chimes.
[beat 6] A figure steps out from between the grandfather clocks: ALISTAIR PEMBERTON-SHAW (60s, nightshirt, shotgun, mildly annoyed). ALISTAIR: Evening. I moved it Tuesday.
[beat 7] The crew freezes. Sol removes his bowler hat. SOL: Tuesday? ALISTAIR: Tuesday. MARGOT: Of course it was Tuesday.
[beat 8] Alistair lowers the shotgun, sighs. ALISTAIR: There's tea. Stay for tea.

### SCENE s00247 | INT. VILLAGE SCHOOLHOUSE KITCHEN, KARAKORAM FOOTHILLS - EARLY MORNING
Characters: GRANDMOTHER ZAINAB QURESHI-ABBASOV, FARIDA QURESHI, SAMINA QURESHI, TIMUR QURESHI, LAILA, ELIAS HARTMANN-DOGAN
[beat 0] Mud-brick walls. A copper kettle. Pale light through a slit window, catching flour in the air like small stars. Five members of one family move around a low table. Bread is being made. GRANDMOTHER ZAINAB QURESHI-ABBASOV (80s, headscarf the color of dried apricots) kneads dough with enormous patience. Her daughter-in-law FARIDA QURESHI (50s, sleeves rolled) shapes loaves, one hand quick on the dough, one hand on the baby wrapped at her back. Her granddaughter SAMINA QURESHI (17, exam papers poking from her satchel) lays out clay plates. Her grandson TIMUR QURESHI (12, ink on his fingers) feeds the clay oven with dry twigs. Her youngest, a girl of six called LAILA, lingers at the door, watching her feet.
[beat 1] ZAINAB: Samina, the salt. Samina brings it. Zainab pinches some, crushes it between her fingers, adds it to the dough.
[beat 2] TIMUR: The oven's ready, Dadi. ZAINAB: Is it? Show me. He holds out his palm to the oven mouth. Holds it there. Yanks it back. ZAINAB: Ready.
[beat 3] Farida slides the first loaf onto the paddle. The smell rises, warm and sweet.
[beat 4] Laila steps in. LAILA: Can I help? FARIDA: Of course. She hands Laila a small ball of dough. Laila kneads it clumsily.
[beat 5] A knock at the door. Everyone looks up.
[beat 6] A stranger steps in, shaking snow from his shoulders: MR. ELIAS HARTMANN-DOGAN (40s, regional inspector, leather satchel, wet boots), blinking in the warm light. ELIAS: Forgive me. I'm looking for the headmistress. SAMINA: That's my mother.
[beat 7] FARIDA: Mr. Hartmann-Dogan. We did not expect you until Thursday. ELIAS: The road was clear. ZAINAB: The road is never clear. ELIAS: It was today.
[beat 8] Zainab studies him a long moment. Then cuts a heel of bread, hands it to him. ZAINAB: Eat first. Papers later.
[beat 9] He bites. His shoulders drop.
[beat 10] ELIAS: This is extraordinary. SAMINA: It's Dadi's. ZAINAB: It is everyone's.
[beat 11] The baby coos. Laila giggles. Timur feeds the oven another twig. The kettle begins, finally, to sing.

### SCENE s00248 | INT. ABANDONED CARNIVAL FUNHOUSE - NIGHT
Characters: MARI, ENGELBRECHT-OJO, TREVOR KAPOOR-LINDSTROM, WINNIE, BAPTISTE-HOLLOWAY, CHILD
[beat 0] Cracked mirrors. Painted clown faces peeling off plywood. A rusted carousel horse hangs from a wire. Wind whistles through broken boards. Three friends pick through the dark with flashlights. MARISOL "MARI" ENGELBRECHT-OJO (20s, hoodie, nervous laugh) leads. She points her beam down a narrow corridor lined with warped glass. TREVOR KAPOOR-LINDSTROM (20s, camera on a strap, bravado) follows, filming. WINIFRED "WINNIE" BAPTISTE-HOLLOWAY (20s, backpack, serious) brings up the rear, checking a paper map.
[beat 1] TREVOR: Okay, so, this is the Hall of Mirrors. Day one of the haunted-places series. Say hi, Mari. MARI: Hi. TREVOR: Say hi, Winnie. WINNIE: I'm reading.
[beat 2] TREVOR: Reading what? WINNIE: The map. It says there's an exit through the carousel. MARI: Then why are we in the funhouse? TREVOR: Content. WINNIE: Idiot. TREVOR: Be nice. I'm broadcasting.
[beat 3] MARI: Hold on. Trevor. TREVOR: What? MARI: There's three of us. TREVOR: Yes. MARI: In the mirror there's four.
[beat 4] They stop. Mari points. In a cracked panel, three flashlight beams. And a fourth, steady, a pale light that doesn't match any of them.
[beat 5] WINNIE: It's a reflection. MARI: Of what? TREVOR: Whoa, whoa. Everyone breathe.
[beat 6] They turn in a slow circle. The fourth light is gone. The mirror shows only themselves. TREVOR: Cool. That was cool.
[beat 7] WINNIE: We leave. Now. MARI: Yes. Yes. Let's go.
[beat 8] They back down the corridor, shoulder to shoulder. A laugh echoes. Not theirs. Light and high, a child's.
[beat 9] They sprint. Boots clatter. A mirror shatters, then another, one after another, as if a hand were sweeping through.
[beat 10] Trevor drops the camera. It spins on the floor, filming the ceiling. Winnie grabs Mari's wrist. Mari grabs Trevor's collar. They crash through a painted door into the carousel hall.
[beat 11] The carousel horses are all turned to face them. TREVOR: No. MARI: Don't move. WINNIE: Don't look.
[beat 12] The music box starts. Slow, wheezing.
[beat 13] MARI: Winnie, the map. The exit. WINNIE: Behind the red horse. MARI: Which is the red horse?
[beat 14] They all look. Twenty horses. Eighteen are white. One is black. One is red.
[beat 15] The red horse blinks.
[beat 16] They scream. In unison. A single voice that rattles the roof.
[beat 17] Then the music stops, as though a hand had pressed it silent.
[beat 18] A voice, close, warm, from just behind the three of them. CHILD: You came back.
[beat 19] Mari whips around. Nobody there. MARI: We've never been here. CHILD: You came back.
[beat 20] Trevor drops to his knees, scooping the camera. Its red light blinks. TREVOR: Please. Please. We'll leave. We'll never--
[beat 21] The voice laughs. CHILD: Say it again. TREVOR: We'll leave. CHILD: Say it with love.
[beat 22] WINNIE: No. She stands. She faces the dark where the voice is. Raises her flashlight, and aims it at the red horse. WINNIE: We're not saying anything. We're leaving. You can have the funhouse.
[beat 23] Silence. The wind stops.
[beat 24] Then the red horse, slowly, turns its head away.
[beat 25] WINNIE: Walk. Don't run. They walk. Past the horses. Past the dead ticket booth. Past the gate.
[beat 26] Behind them, the music box begins again. Soft. Almost happy.

### SCENE s00249 | EXT. HIGH PLATEAU, BURNED FOREST - DAWN
Characters: STRANGER, TALL MAN, WOMAN, ELIO
[beat 0] Black trunks. Ash like grey snow. A crippled pickup with its hood up. A man sits on its bumper, bandaging his hand. Another stands at the tree line, binoculars up. A third crouches by the tailgate, counting cans.
[beat 1] STRANGER: We can't stay. TALL MAN: We can't leave. STRANGER: We don't have fuel. TALL MAN: We have legs.
[beat 2] WOMAN: We have four cans of beans and no opener. STRANGER: Then we use the knife. WOMAN: It's your knife. STRANGER: I know whose knife it is.
[beat 3] The tall man lowers the binoculars. TALL MAN: Smoke. East ridge. WOMAN: How far? TALL MAN: Six miles. STRANGER: It could be anyone. TALL MAN: It could be the fire again. WOMAN: It could be help. STRANGER: It could be them.
[beat 4] A silence. They look at each other.
[beat 5] WOMAN: You never told us your name. STRANGER: Elio. WOMAN: Elio what? ELIO: Just Elio.
[beat 6] TALL MAN: Okay, Just Elio. Here's what we do. ELIO: We split. WOMAN: We stay together. ^ TALL MAN: We go together, east, now!
[beat 7] A hiss in the trees. All three freeze. Branches crack. A shape moves in the ash, low and fast.
[beat 8] ELIO: Run! The truck door slams. The woman dives. The tall man fires. A burst of gunshot echoes across the burned plateau, and the pale smoke rises, higher, higher.

### SCENE s00250 | INT. ORBITAL SALVAGE TUG "LONG PATIENCE," CARGO BAY - SHIP NIGHT
Characters: OKSANA REYNOLDS-ADEBOYE, COMMS, SIMEON AKINTOLA-VEGA
[beat 0] Strip lighting. Mag-boots clank. Crates stacked in nets. A viewport shows a wreck turning slowly against the stars. OKSANA REYNOLDS-ADEBOYE (40s, engineer, grease up to the elbows) crouches over an open hatch, a wrench in one hand. She does not look up when the intercom hisses.
[beat 1] COMMS: Engineer. Bridge. Report. She keeps working. Turns a bolt. Another.
[beat 2] OKSANA: Still on it. COMMS: Captain wants a status on the coupling. OKSANA: Tell the Captain it's a coupling. COMMS: Copy.
[beat 3] She sets the wrench down. Wipes her hands on her thighs.
[beat 4] From a vent behind her, a soft click. She turns slowly. Nothing. But she picks the wrench back up.
[beat 5] A second figure floats in from the airlock: SIMEON AKINTOLA-VEGA (30s, flight tech, jumpsuit unzipped to the chest). He anchors himself with one boot to a crate and stares at her.
[beat 6] SIMEON: You okay? OKSANA: Fine. SIMEON: You've been down here nine hours. OKSANA: It's a big coupling.
[beat 7] SIMEON: Captain says come up. OKSANA: Captain says what?
[beat 8] COMMS: Engineer, Captain says come up. Immediately. OKSANA: Why? COMMS: Something on the scanner. Something near the wreck.
[beat 9] Oksana and Simeon look at each other. She tightens her grip on the wrench. He zips his jumpsuit to the collar.
[beat 10] SIMEON: What is it? COMMS: Unknown. Moving. Matching our heading. OKSANA: How close? COMMS: Twelve kilometers. And closing.
[beat 11] She lets the wrench drift. It spins slowly in front of her, catching the light.
[beat 12] SIMEON: I'm going up. OKSANA: Wait. He waits.
[beat 13] Her eyes go to the viewport. The wreck rotates; behind it, a shape too regular to be debris.
[beat 14] She says nothing. Neither does he. They float side by side.
[beat 15] COMMS: Engineer? Tech? Respond. Simeon opens his mouth. Closes it.
[beat 16] Oksana presses the intercom. OKSANA: We're coming up.
[beat 17] She lets go. Drifts across the bay. At the door she stops, lays one palm flat on a crate as if for luck.
[beat 18] Then she follows Simeon into the corridor.

### SCENE s00251 | INT. PAWNSHOP BACK ROOM - NIGHT
Characters: MAN, GREY HOODIE, SHOPKEEPER MARCUS OYELARAN-BRIGHT, DETECTIVE IRENE KOWALCZYK-DIOP, DANNY
[beat 0] Glass cases. Guitars on hooks. A TV with the sound off.
[beat 1] A MAN IN A GREY HOODIE (30s) tears open a drawer, dumps it. Jewelry rattles onto the floor.
[beat 2] Behind him, the door creaks. SHOPKEEPER MARCUS OYELARAN-BRIGHT (50s, cardigan, baseball bat) steps in. The man turns.
[beat 3] MAN: Whoa. Whoa. MARCUS: Put it down. MAN: It's not what it looks like. MARCUS: It looks like robbery. MAN: Okay, it's what it looks like.
[beat 4] He bolts. Marcus swings. The bat clips a guitar; strings twang. They crash together against the counter, hands on each other's collars. A glass case shatters under them. MAN: Let go! MARCUS: You let go!
[beat 5] They stagger, breathing hard.
[beat 6] A second figure appears in the doorway. DETECTIVE IRENE KOWALCZYK-DIOP (40s, badge on her belt, gun drawn) stands with her feet planted. DETECTIVE KOWALCZYK-DIOP: Police. Hands.
[beat 7] Both men freeze. Both raise their hands. Marcus drops the bat. The man drops the loot.
[beat 8] MARCUS: Detective. He's the thief. MAN: He's the owner! DETECTIVE KOWALCZYK-DIOP: Sir. Mr. Oyelaran-Bright. I'm familiar.
[beat 9] She holsters, steps forward, and cuffs the man.
[beat 10] KOWALCZYK-DIOP: You've been busy, Danny. DANNY: Hi, Irene. MARCUS: You know him?
[beat 11] KOWALCZYK-DIOP: He's my brother.
[beat 12] A beat. Marcus picks up the bat, sets it on the counter, and quietly pours himself a drink.

### SCENE s00252 | EXT. WINDMILL RANCH, DRY PLAINS - DAY
Characters: ABEL MONTGOMERY-OSEI, RADIO
[beat 0] A tall steel windmill creaks against a bleached sky. A sagging fence runs off into dust. Beneath the tower, a water trough, half-empty.
[beat 1] ABEL MONTGOMERY-OSEI (50s, long coat, sun-cracked hat, a face like riverbed) rides in, dismounts, and loosens the cinch. His horse drinks. He doesn't.
[beat 2] He walks to the windmill. Reaches into the shadow of the tower and pulls out a tin box. Opens it. Inside: a folded letter, a photograph, a wedding ring.
[beat 3] He reads the letter. Folds it. Pockets the ring. Holds the photograph a long time.
[beat 4] Then he sits against the windmill leg and stares across the plain.
[beat 5] A faint crackle from his saddlebag. A small battered radio, strapped there for emergencies. ABEL: Not now. The crackle repeats. A voice, thin and far:
[beat 6] RADIO: Abel. You there? ABEL: I'm here.
[beat 7] RADIO: They found the bodies at Cutter's Rise. ABEL: I know. RADIO: It was the Calloway gang. ABEL: I know who it was.
[beat 8] RADIO: What are you going to do? Abel looks at the windmill blades turning. Looks at the dust.
[beat 9] ABEL: I'm going to stay here a while. RADIO: Abel-- ABEL: A while.
[beat 10] He clicks the radio off. Puts it back in the bag. The wind picks up. The windmill groans.
[beat 11] Far on the horizon, three riders appear as dark specks. Abel doesn't turn. ABEL: Took you long enough.
[beat 12] He stands. Draws his revolver. Checks it. Holsters it.
[beat 13] Then, deliberately, he sits down again and takes off his hat, resting it on his knee. The riders grow. Abel waits.
[beat 14] At two hundred yards, one of them raises a rifle. Abel doesn't flinch. ABEL: Not yet.
[beat 15] The shot cracks. The photograph leaps from his hand, a hole through the corner. He stares at it.
[beat 16] Then he is on his feet, gun up, firing three times at the riders. One falls. The others scatter into the dust.
[beat 17] Silence returns. The windmill creaks.
[beat 18] Abel crosses to the photograph, bends, and picks it up with great care. A hole where a shoulder used to be.
[beat 19] He lowers himself to the ground. Breathes. ABEL: There. Now we're done.
[beat 20] The wind carries the smoke away. The blades keep turning.

### SCENE s00253 | INT. COURTHOUSE BASEMENT, EXHIBIT STORAGE - DAY
Characters: ATTORNEY SABINE OKONKWO-HARTLEY, OPPOSING COUNSEL DOMINIC TRAVERSO-ADEBAYO, PRU, LINDGREN-ASANTE
[beat 0] Fluorescent tubes. Metal shelving. Cardboard boxes labeled in marker. Three people stand at a steel table, a single evidence bag between them. ATTORNEY SABINE OKONKWO-HARTLEY (40s, gray suit, tired) holds a tablet. OPPOSING COUNSEL DOMINIC TRAVERSO-ADEBAYO (50s, expensive tie, patient smile) flips through an inventory. CLERK PRUDENCE "PRU" LINDGREN-ASANTE (20s, lanyard, headphones around her neck) logs entries on a clipboard.
[beat 1] SABINE: For the record, we are inspecting Exhibit Fourteen. DOMINIC: For the record, it's a screwdriver. PRU: It's a Phillips-head. SABINE: Thank you, Pru.
[beat 2] DOMINIC: Sabine, we've been through this. SABINE: Dominic, we've been through everything. DOMINIC: The chain of custody is solid.
[beat 3] SABINE: The chain of custody has a gap of nineteen hours. DOMINIC: That was a weekend. SABINE: Murder trials don't have weekends. DOMINIC: This one did. PRU: I'm just the clerk.
[beat 4] SABINE: Pru, which officer logged the tool? PRU: Officer Haverford. Badge four-two-one. DOMINIC: He's on leave. SABINE: Convenient. DOMINIC: Medical. SABINE: Of course. PRU: Of course.
[beat 5] Sabine leans over the bag. Squints at a smudge on the handle.
[beat 6] SABINE: That's a thumbprint. DOMINIC: Probably the officer's. SABINE: Probably. DOMINIC: Is there a point?
[beat 7] SABINE: There's a name in the margin of the log. Not Haverford.
[beat 8] Pru checks her clipboard. Her eyes widen. PRU: Oh. DOMINIC: Pru?
[beat 9] PRU: It says... Traverso. Dominic's smile doesn't move.
[beat 10] SABINE: Your father's name. DOMINIC: It's a common name. SABINE: It's a very uncommon screwdriver.
[beat 11] Pru backs a step toward the stairs. Sabine, calm, unfolds her tablet.
[beat 12] SABINE: Let the record show opposing counsel declined to comment. DOMINIC: Neither confirmed nor denied. SABINE: That's the same thing. DOMINIC: It is not. ^
[beat 13] Pru, very softly, closes the log.

### SCENE s00254 | INT. DEEP-SEA RESEARCH HABITAT "THALASSA-9," MESS HALL - SHIP NIGHT
Characters: COMMANDER ILSE VARGA-OKONJO, MBALI NKOSI-ARRINGTON, ENGINEER DEWEY HOLLOWAY-SATO, PRIYA, DESAI-BRANDT, NEWCOMER, ARTHUR
[beat 0] Low ceiling. Portholes show black water. A table bolted to the floor. Steam from five bowls of reconstituted soup. Five crew eat in tired silence. COMMANDER ILSE VARGA-OKONJO (50s, grey crewcut, flight jacket) cuts a biscuit in half. DR. MBALI NKOSI-ARRINGTON (30s, marine biologist, spectacles on a string) stirs her soup without drinking. ENGINEER DEWEY HOLLOWAY-SATO (40s, wrench in his belt) scrapes his bowl. TECH PRIYANKA "PRIYA" DESAI-BRANDT (20s, tablet in one hand, spoon in the other) scrolls through readings. And a quiet man, face smudged with grease, who has not given his name: A NEWCOMER (30s, orange vest, new boots).
[beat 1] ILSE: Anyone want to say anything? Silence. A pipe knocks somewhere.
[beat 2] MBALI: The trench is warmer than yesterday. DEWEY: Everything's warmer than yesterday. PRIYA: Not everything. Pressure's flat. NEWCOMER: Flat is good. DEWEY: Flat is boring. ILSE: I like boring. PRIYA: I like flat. MBALI: I like soup.
[beat 3] They eat. A porthole flickers: a pale shape drifts past and is gone.
[beat 4] MBALI: Did anyone see that? PRIYA: What? DEWEY: Fish. MBALI: It was larger than fish.
[beat 5] ILSE: Dr. Nkosi-Arrington, the instruments say nothing. MBALI: The instruments aren't looking out the window. NEWCOMER: It's the lights. They attract plankton. DEWEY: Plankton doesn't look back. PRIYA: Did it look back? MBALI: I don't know.
[beat 6] The table goes quiet. Priya sets down her tablet, face up. Everyone leans in.
[beat 7] ILSE: Priya. Readings. PRIYA: Nothing. A small thermal bloom, two hundred meters out.
[beat 8] DEWEY: Heat means life. MBALI: Or a vent. NEWCOMER: Or us.
[beat 9] Ilse looks at him. He looks at her. After a moment she nods and resumes cutting her biscuit.
[beat 10] ILSE: Eat. We have a shift in an hour. They eat. Nobody speaks. The pipe knocks again.
[beat 11] Then the newcomer says, softly, to no one: ARTHUR: Name's Arthur.
[beat 12] ILSE: Welcome, Arthur. DEWEY: Welcome. PRIYA: Welcome.
[beat 13] MBALI: Welcome. Your boots are very new. ARTHUR: They're the only thing I own.
[beat 14] Mbali smiles for the first time. The others do too. Outside, the porthole darkens again.

### SCENE s00255 | INT. REGIONAL BAKING CHAMPIONSHIP, COMMUNITY HALL - AFTERNOON
Characters: BERNIE, OKONKWO-PRYCE, CORKY, ABERNATHY-LIU, GWENDOLYN MUKHERJEE-FALLOWS, OLLIE, TEMPLETON-ADAIR, OISE OLUWASEUN-LEBLANC, FRANÇOISE
[beat 0] Bunting. Folding tables. A smell of sugar and mild panic. Contestants stand at oven stations in matching aprons. Five of them cluster near the judges' table, where a lemon tart sits under a glass dome. BERNADETTE "BERNIE" OKONKWO-PRYCE (60s, apron with a hand-stitched rolling pin) wipes flour from her glasses. CORNELIUS "CORKY" ABERNATHY-LIU (30s, hair net, drawn-on mustache) sulks beside a deflated soufflé. GWENDOLYN MUKHERJEE-FALLOWS (40s, crisp white chef's jacket) arranges a perfect row of macarons. ORVILLE "OLLIE" TEMPLETON-ADAIR (70s, suspenders) hums off-key over a tray of shortbread. And the judge, MADAME FRANÇOISE OLUWASEUN-LEBLANC (50s, silk scarf, expression of permanent disappointment), lowers herself into the central chair.
[beat 1] FRANÇOISE: Contestants. Time. BERNIE: Time! CORKY: Time? GWENDOLYN: Time. OLLIE: Time, time, time.
[beat 2] FRANÇOISE: Mr. Abernathy-Liu, your soufflé has fallen. CORKY: It's resting. FRANÇOISE: It is flat. CORKY: It's modernist. BERNIE: It's a pancake, dear. CORKY: It's an homage to the pancake.
[beat 3] GWENDOLYN: Mine rose perfectly. BERNIE: Yours is a macaron, Gwen. It's required to. GWENDOLYN: Don't be catty. OLLIE: I'm not catty. I'm shortbread.
[beat 4] FRANÇOISE: Mr. Templeton-Adair, you are not allowed to hum. OLLIE: I'm not humming. FRANÇOISE: You are. OLLIE: It's the oven.
[beat 5] The oven timer BEEPS. Everyone jumps.
[beat 6] Gwendolyn's elbow knocks her tray. Macarons scatter across the floor like pastel dice. Corky dives, Bernie dives, Ollie dives. The three of them collide, flour clouds going up, a tangle of aprons.
[beat 7] FRANÇOISE: Stop! Stop at once!
[beat 8] Bernie surfaces with a macaron in her teeth. Corky has a mouthful of shortbread. Ollie is under the table. Gwendolyn stands frozen, hands at her cheeks.
[beat 9] GWENDOLYN: Eight hours. FRANÇOISE: Mrs. Mukherjee-Fallows. GWENDOLYN: Eight hours I stood at that oven.
[beat 10] BERNIE: It's not bad, actually. CORKY: Quite good. OLLIE: Can someone pass a plate?
[beat 11] Françoise sits slowly, looks at the wreckage, and for the first time lifts a hand to her mouth to hide a smile. FRANÇOISE: I have never seen such a thing.
[beat 12] BERNIE: Does that mean we won? FRANÇOISE: It means I'm hungry.

### SCENE s00256 | INT. NIGHT BOAT, RIVER DANUBE - NIGHT
Characters: OLGA RADOMSKA-IKEJIANI, DETECTIVE KASPAR NWANKWO-BRUUN, LAURA
[beat 0] A narrow cabin. Brass lamp. Curtains drawn. A tray with two untouched cups of tea. OLGA RADOMSKA-IKEJIANI (40s, black gloves, a fur collar) sits on the bunk. She stirs her tea slowly, never lifting it. Across from her, DETECTIVE KASPAR NWANKWO-BRUUN (50s, trench, bruised knuckles) leans against the door. He is calm. She is calm. The boat rocks.
[beat 1] KASPAR: You knew him. OLGA: Everyone knew him. KASPAR: Better than most. OLGA: Worse.
[beat 2] KASPAR: He wrote to you every week. OLGA: Letters are cheap.
[beat 3] She sips. Sets the cup down. He watches the cup, not her.
[beat 4] KASPAR: He's dead, Olga. OLGA: So I hear. KASPAR: Poisoned. OLGA: How careless.
[beat 5] He moves. In a single step he is across the cabin. She rises just as quickly. They stand an inch apart.
[beat 6] KASPAR: Give me the glove. OLGA: Which? KASPAR: The left.
[beat 7] She holds out her left hand. He takes it. Peels the glove, finger by finger.
[beat 8] On her wrist: a bruise shaped like a ring of fingertips. KASPAR: He fought. OLGA: He was stronger than he looked. KASPAR: Than you looked.
[beat 9] She yanks free. He catches her again. They grapple. The lamp swings. Tea spills across the floor. She wrenches a hairpin from her hair, jabs at his arm. He twists it away. Both crash onto the bunk, breathing hard.
[beat 10] Then the cabin door opens. A woman's voice, off-screen, calm and amused: LAURA: Kaspar. Olga. You're both very loud.
[beat 11] They freeze. Kaspar, over Olga, hand at her throat. Olga, under him, the pin at his ribs.
[beat 12] OLGA: Who is that? KASPAR: My wife.
[beat 13] Olga laughs, a low rich laugh. He lets go. She sits up, smoothing her fur.
[beat 14] OLGA: Then this is a very different kind of poisoning.

### SCENE s00257 | INT. HOSPITAL ROOFTOP HELIPAD - NIGHT
Characters: MALACHI BOUSSARD-OJO, WOMAN, LONG GREY COAT, DELPHINE
[beat 0] Wind. Orange safety lights. The city spreads below like a spilled circuit board. DR. MALACHI BOUSSARD-OJO (40s, scrubs under a parka) leans on the railing, staring at the lights. A thermos steams beside him.
[beat 1] Boots on metal stairs. The door opens. A WOMAN IN A LONG GREY COAT (30s, hospital badge flipped backwards) steps out and stops five feet away.
[beat 2] MALACHI: You shouldn't be up here. WOMAN: Neither should you. MALACHI: I'm on break. WOMAN: So am I.
[beat 3] She walks to the railing. Stands beside him. He pours coffee into the thermos cap, offers it. She takes it.
[beat 4] WOMAN: Thanks, Dr. Boussard-Ojo. MALACHI: You know my name. WOMAN: It's on the schedule.
[beat 5] MALACHI: I don't know yours. WOMAN: Not yet.
[beat 6] She sips. Looks at the city. He watches her. She hands the cap back, empty. He fills it again.
[beat 7] MALACHI: Third floor. Bed twelve. Did you know him? WOMAN: Mr. Prokopiou? MALACHI: Yes. WOMAN: I did.
[beat 8] MALACHI: He died an hour ago. WOMAN: I know. I was with him.
[beat 9] MALACHI: Not on the chart. WOMAN: I'm not on any chart.
[beat 10] A siren climbs the hill and fades. Malachi stiffens. She looks at him steadily.
[beat 11] MALACHI: Who are you? WOMAN: Delphine. Delphine Ashworth. MALACHI: The inspector from the board? DELPHINE: The same.
[beat 12] MALACHI: You were here the whole time. DELPHINE: Since Tuesday.
[beat 13] His hand shakes. The thermos cap spills. He wipes his palm on his thigh, steps back, and she steps forward. He grips the railing. She grips his sleeve. Their eyes lock for a long time, wind snapping both coats against their legs.
[beat 14] DELPHINE: Dr. Boussard-Ojo, the insulin dose you ordered was ten times the standard. MALACHI: It was a clerical error. DELPHINE: It was initialed in your handwriting. MALACHI: I was tired. DELPHINE: Everyone is tired.
[beat 15] He pulls free. Paces to the helipad's yellow circle. Stands in its center, head bowed.
[beat 16] MALACHI: He was in pain. For eleven days. DELPHINE: And? MALACHI: I thought I was doing him a kindness. DELPHINE: You were doing yourself one.
[beat 17] He looks up. The wind drops. Far below, a patrol car pulls into the emergency bay, its lights spinning blue and red against the glass.
[beat 18] MALACHI: You called them. DELPHINE: At the start of break. MALACHI: Why wait? DELPHINE: I wanted to hear you say it.
[beat 19] She picks up the thermos, screws the lid on, and sets it gently at his feet. He stares at it. Then slowly, he sits down in the yellow circle and lets the cold come.

### SCENE s00258 | EXT. TRAIN WATER TOWER, RAILWAY SIDING - NIGHT
Characters: WIDOW HESTER GALLOWAY-BIRD, TRAVELLING DOCTOR AMARA OKONKWO-WESTBROOK
[beat 0] A wooden tower on iron legs. A pump house. Rails vanish into dark prairie. Two women sit under it, a small fire between them, boots stretched toward the heat. WIDOW HESTER GALLOWAY-BIRD (60s, wide-brimmed hat, shotgun across her knees) pokes the embers with a stick. TRAVELLING DOCTOR AMARA OKONKWO-WESTBROOK (40s, black bag, dusty skirt) writes in a leather book. The fire cracks.
[beat 1] HESTER: You writing about me? AMARA: About the weather. HESTER: No weather in that book. AMARA: It's a long book.
[beat 2] Hester snorts. Amara closes the cover, folds her hands.
[beat 3] HESTER: Where you headed? AMARA: North. There's a fever in Redwater. HESTER: Redwater's dead. AMARA: Not all of it. HESTER: Not all, I'll grant you.
[beat 4] AMARA: How far is it? HESTER: Two days on foot. One on a horse.
[beat 5] AMARA: I've no horse. HESTER: I have. AMARA: Is she for sale? HESTER: She's not a she. She's a gelding. And no. AMARA: Rent, then.
[beat 6] HESTER: I've been waiting thirty years for someone to ask me that. AMARA: Is that a yes? HESTER: It's a story. AMARA: Tell it.
[beat 7] HESTER: My husband had a horse. Same gelding's mother. He rode her to Redwater the winter of the sickness. Carried medicine. AMARA: And?
[beat 8] HESTER: He didn't come back. AMARA: I'm sorry. HESTER: Don't be. He was a fool. He said she'd carry him anywhere. AMARA: Did she? HESTER: She came back. Alone. Saddle empty.
[beat 9] AMARA: She did her job. HESTER: Everybody does, eventually.
[beat 10] She stirs the embers. Sparks swirl into the black.
[beat 11] HESTER: Hear that? She'll ride. AMARA: Who are you talking to? HESTER: The horse. And the husband.
[beat 12] Amara smiles in spite of herself. She reaches over, takes the stick, and pokes the fire herself.
[beat 13] AMARA: Then let's sleep. We leave at dawn. HESTER: We? AMARA: You're not letting a stranger ride your husband's horse alone.
[beat 14] Hester looks at her. For the first time, she laughs. HESTER: Doctor, you're smarter than you look. AMARA: I've been told.
[beat 15] They settle back. The rails hum faintly in the cold. Far off, a whistle.

### SCENE s00259 | EXT. FLOATING MARKET OF THE LANTERN SEA - DUSK
Characters: QUEEN-MOTHER OSHUN ADEBAYO-LUMINARA, PRINCE TAMSIN LUMINARA-VOSS, NERISSA KALOMBO-AQUILA, BARNABAS, OYELOWO-SMYTHE, PIPPA TRELAWNEY-ANAYA
[beat 0] Hundreds of boats lashed together on a windless lagoon. Paper lanterns hang from masts. Traders call across the water in a tangle of tongues. Drifting steam smells of spice and rain. At the heart of the market, on a barge strung with silver bells, five figures stand in a ring. QUEEN-MOTHER OSHUN ADEBAYO-LUMINARA (70s, sea-silk robe, crown of coral) holds a trident in one hand and a small carved box in the other. Her son, PRINCE TAMSIN LUMINARA-VOSS (30s, silver armor, bloodshot eyes), stands stiffly at her right. The sorceress NERISSA KALOMBO-AQUILA (40s, indigo cloak, hair braided with shells) waits on her left. An old pirate captain, BARNABAS "BLACK BARNEY" OYELOWO-SMYTHE (60s, one eye, huge laugh), leans on a cutlass. And the ferryman's daughter, PIPPA TRELAWNEY-ANAYA (14, barefoot, bright), clings to a mast.
[beat 1] OSHUN: Friends. Neighbors. Traders of the Lantern Sea. I have called you here to end the feud. Silence ripples across the boats. Bells chime softly.
[beat 2] TAMSIN: Mother, this is unwise. OSHUN: It is overdue. NERISSA: It is a trap. OSHUN: It is a truce.
[beat 3] BARNABAS: Truce! I love a truce. When do we eat? PIPPA: Captain Barney, hush. BARNABAS: I can't hush. I'm a pirate.
[beat 4] OSHUN: Barnabas. Your fleet will withdraw from the northern channel. BARNABAS: My fleet will think about it. OSHUN: Your fleet will withdraw. BARNABAS: Of course, Majesty.
[beat 5] NERISSA: And the sorcerers' guild? OSHUN: Will return the stolen tides. NERISSA: They were not stolen. They were borrowed. OSHUN: For three centuries. NERISSA: It was a long loan.
[beat 6] TAMSIN: Mother, enough. OSHUN: Silence, Tamsin.
[beat 7] She opens the carved box. Inside rests a pearl the size of a fist, dull and grey. OSHUN: This is the Heart of the Lagoon. It has been dying for forty years. Unless all of you swear on it, it dies tonight.
[beat 8] Gasps ripple. Tamsin steps forward and seizes the box. Barnabas draws his cutlass. Nerissa raises a hand and the water around the barge begins to rise.
[beat 9] Pippa leaps from the mast and lands between them all. PIPPA: Stop it! All of you!
[beat 10] They freeze. Cutlass. Hand. Hand on the box. The lanterns sway.
[beat 11] PIPPA: My father says a pearl dies when it stops being held. OSHUN: Child-- PIPPA: So hold it. Together.
[beat 12] A long moment. Then Tamsin lowers his hand. Barnabas sheathes his cutlass. Nerissa lets the water fall.
[beat 13] Oshun, tired, extends the box. One by one, they each place a hand on the pearl.
[beat 14] The grey surface warms. A faint pulse of silver rises, then gold, then every color the lanterns carry. The crowd exhales. The boats begin to rock gently, as if the lagoon itself had sighed.
[beat 15] BARNABAS: Well, I'll be. NERISSA: It has been a long time since it glowed.
[beat 16] TAMSIN: Forgive me, Mother. OSHUN: There is nothing to forgive. Hold the light.
[beat 17] PIPPA: Can I go home now? BARNABAS: She wants to go home! The savior of the sea wants to go home! OSHUN: Pippa Trelawney-Anaya, you may go anywhere you like.
[beat 18] Pippa grins, drops from the barge into a small skiff, and begins to row, the lanterns blooming on the water around her.

### SCENE s00260 | INT. ABANDONED LIGHTHOUSE KEEPER'S QUARTERS - NIGHT
Characters: HARPER OSEI-LINDQVIST, JAZ, ABERNATHY-TRAN, KEZIAH ONYANGO-FALLOWS, MATT, KOWALSKI-BELLO, LOTTIE SUNDARAM-REEVES, KEEPER
[beat 0] A round room. Peeling wallpaper the color of old tea. A cast-iron stove. A spiral stair winding up into darkness. Salt crusts the windows. Five friends have made camp on the floor with sleeping bags and flashlights. HARPER OSEI-LINDQVIST (20s, canvas jacket, mug of instant coffee) sits cross-legged near the stove. JASPER "JAZ" ABERNATHY-TRAN (20s, knit cap, deck of cards) shuffles with a nervous flick. KEZIAH ONYANGO-FALLOWS (20s, vintage windbreaker, hair in a bandana) reads a tattered logbook by flashlight. MATEUSZ "MATT" KOWALSKI-BELLO (30s, flannel, camera tripod) adjusts a lens. And LOTTIE SUNDARAM-REEVES (20s, oversized sweater, pale), who hasn't spoken since they arrived, hugs her knees by the window.
[beat 1] HARPER: So the logbook. Read it again. KEZIAH: "October ninth. Fog thick as wool. The light turns but no ship answers. I hear footsteps on the stair, though I am alone." JAZ: Spooky. KEZIAH: "October tenth. The footsteps again. This time they stop at my door."
[beat 2] MATT: Cut it. We can't use this on camera. JAZ: Why not? MATT: It's too good. We'll need to reshoot. HARPER: It's a log, Matt. It's not a script.
[beat 3] KEZIAH: "October eleventh. The door is open. I did not open it."
[beat 4] A creak from the stair above. Everyone looks. Nothing. Only the dark.
[beat 5] LOTTIE: There's something on the stairs. HARPER: There's nothing. LOTTIE: There's something. MATT: Where? LOTTIE: The third landing.
[beat 6] Keziah clicks her flashlight toward the third landing. The beam finds a pale shape, slim and still, standing with its head tilted. A figure in a keeper's coat, face blurred as if seen through wet glass.
[beat 7] KEZIAH: Oh no. JAZ: Don't move. Nobody move.
[beat 8] HARPER: Matt, are you filming? MATT: Yes. HARPER: Keep filming.
[beat 9] The figure takes one step down. The boards creak. Another.
[beat 10] Jaz drops the cards; they scatter like white birds. Matt swings the camera.
[beat 11] Lottie rises, steps toward the stair, mesmerized. KEZIAH: Lottie, don't. LOTTIE: It wants to show me something. HARPER: Lottie!
[beat 12] She grabs Lottie's arm. Lottie turns, eyes glassy, smiling. LOTTIE: He's lonely.
[beat 13] The figure reaches the second landing. The temperature drops. Their breath fogs. The stove flame bends sideways, then goes out.
[beat 14] Darkness. Five flashlights jitter. Five beams find the keeper's coat, now at the bottom of the stair, its face almost clear. Almost human.
[beat 15] KEEPER: Stay.
[beat 16] Jaz screams. Matt backs into the stove. Keziah slams the logbook shut. Harper wrenches Lottie back with both hands, and the five of them stumble toward the door.
[beat 17] They crash through it, tumbling onto the wet grass outside. The sea roars.
[beat 18] The lighthouse beam sweeps over them, steady, impossible, from a lamp that has been dead for forty years. They stare up. The beam swings away.
[beat 19] Lottie, panting, laughs weakly. LOTTIE: Nobody believed me. MATT: I got it. I got all of it.
[beat 20] HARPER: Delete it. MATT: What? HARPER: Delete it. Please.
[beat 21] Matt looks at the camera. At Harper. At the lighthouse. He nods. Presses the button, and the light on the camera goes out.

### SCENE s00261 | EXT. CROSSROADS SHRINE IN A PINE FOREST - TWILIGHT
Characters: ARTY, OKAFOR-LINDEN, BROTHER MALACHAI TREVELYAN-BOSE, KESTREL AMANI-DUNBAR, SIR OSWALD PEMBERTON-ADEYEMI, GIRL
[beat 0] A stone cairn at the meeting of four paths, crowned with offerings: ribbons, acorns, a child's wooden horse. Mist threads between the pines. Four travellers arrive from four directions and stop, each at the edge of the clearing. ARTEMISIA "ARTY" OKAFOR-LINDEN (30s, scout, hooded cloak, short bow) crouches beside the cairn and touches a ribbon. BROTHER MALACHAI TREVELYAN-BOSE (50s, cleric, bronze bell hung at his belt) removes his hat in the shrine's presence. KESTREL AMANI-DUNBAR (20s, thief, patched leathers, two daggers) leans on a pine, arms crossed, looking bored. And SIR OSWALD PEMBERTON-ADEYEMI (40s, knight, tarnished armor, a battered shield with a painted sun) stands with his sword point-down in the loam.
[beat 1] OSWALD: Four roads, four travellers. I take it we all received the same summons. ARTY: A black feather on the doorstep. KESTREL: Same. MALACHAI: A feather in the offering plate. OSWALD: Mine was nailed to my gate. KESTREL: Dramatic. OSWALD: Quite.
[beat 2] ARTY: So who sent it? MALACHAI: Not who. What. KESTREL: Here we go. MALACHAI: The shrine. The shrine called us. KESTREL: Shrines don't call. They sit. MALACHAI: This one speaks, if one listens. OSWALD: Brother, let us listen, then.
[beat 3] Silence. A wind passes, bringing cold. The ribbons ripple. Arty cocks her head.
[beat 4] ARTY: Someone's coming. Footsteps in the pines. The four draw weapons and turn together.
[beat 5] A small girl steps out of the mist. Perhaps nine. Ragged coat, bare feet, a black feather braided in her hair. She carries a wooden bowl.
[beat 6] GIRL: Hello. OSWALD: Child. Where is your family? GIRL: They're gone. I live here now. KESTREL: Alone? GIRL: With the roads.
[beat 7] MALACHAI: Child, did you send these feathers? GIRL: Four of you. That's the right number. ARTY: For what?
[beat 8] The girl sets down the bowl at the foot of the cairn. It is filled with dark water. GIRL: To drink.
[beat 9] KESTREL: Pass. GIRL: It's a promise. OSWALD: What kind of promise? GIRL: That you'll come back. After. MALACHAI: After what?
[beat 10] The girl smiles, very faintly. The mist thickens. Behind the pines, something enormous exhales, and the ground trembles.
[beat 11] ARTY: Oswald. OSWALD: I feel it. KESTREL: Oh, great. MALACHAI: Child, what is out there?
[beat 12] GIRL: That's what you're for.
[beat 13] The ground shudders again. Pinecones rattle down. Branches break. The four glance at one another.
[beat 14] Then, one by one, they step to the bowl, dip their hands, and drink.
[beat 15] The water is cold as iron. Oswald coughs. Kestrel swears. Arty gasps and clutches her chest. Malachai rings his bell once, bright and clear.
[beat 16] Light blooms from the cairn. The mist retreats, trembling.
[beat 17] GIRL: Thank you. OSWALD: Child, what is your name? GIRL: I don't have one yet.
[beat 18] She turns and walks into the pines. The four watch her go, then raise their weapons to the dark.
[beat 19] KESTREL: Should have taken the money.

### SCENE s00262 | EXT. ICE CAVE UNDER A COLLAPSING GLACIER - DAY
Characters: LEOCADIA MWANGI-HALVORSEN, TOBIAS ADEGOKE-LINDGREN
[beat 0] Blue walls. Meltwater running in thin silver threads across the floor. Overhead, the ice groans like a living thing. Two climbers in torn gear crouch near the cave mouth. Their ropes lie in a coil between them, one end frayed. DR. LEOCADIA MWANGI-HALVORSEN (40s, glaciologist, split lip) tapes a gash in her thigh. She works fast, jaw clenched. Across from her, her expedition partner TOBIAS ADEGOKE-LINDGREN (30s, mountaineer, frostbitten ears) tests the sharpness of an ice axe with his thumb.
[beat 1] LEOCADIA: Our rope won't hold another fall. TOBIAS: Then we don't fall. LEOCADIA: Tobias. TOBIAS: Leocadia.
[beat 2] LEOCADIA: Eight hundred meters to the glacier terminus. Without a rope. TOBIAS: Seven fifty. LEOCADIA: Does it matter? TOBIAS: It matters to me. LEOCADIA: Why? TOBIAS: Because it's less.
[beat 3] She laughs, then winces. He tosses her a chocolate bar. She catches it one-handed.
[beat 4] LEOCADIA: How many left? TOBIAS: Three. LEOCADIA: Four, if we split yours. TOBIAS: I ate mine. LEOCADIA: You always eat yours. TOBIAS: I have a metabolism. LEOCADIA: You have a problem.
[beat 5] Silence. The ice groans louder. A trickle of water becomes a stream, curling around their boots.
[beat 6] TOBIAS: Leo. LEOCADIA: I hear it. TOBIAS: The glacier's moving. LEOCADIA: It's always moving. TOBIAS: Faster.
[beat 7] She stands, wincing, and puts a hand against the wall. It hums.
[beat 8] LEOCADIA: We go. Now. TOBIAS: Without gear? LEOCADIA: Without everything.
[beat 9] They shoulder packs, scramble toward the cave mouth. The ceiling cracks, a long hairline racing across the blue. Tobias grabs her arm. She grabs his.
[beat 10] They both look up as a slab the size of a truck shears loose.
[beat 11] They dive. The slab lands where they stood, spraying frozen shards. Leocadia tumbles through the opening, Tobias behind, both rolling into the white glare of day.
[beat 12] They lie on their backs, gasping. Behind them, the cave collapses, groaning, with a final thunderous sigh.
[beat 13] Dust settles. Snow glitters. A distant raven calls.
[beat 14] TOBIAS: Seven fifty. LEOCADIA: Seven hundred. We just walked fifty. TOBIAS: We crawled fifty. LEOCADIA: Counts.
[beat 15] They sit up. She offers him the chocolate. He shakes his head. She breaks it in half, hands him the bigger piece.
[beat 16] TOBIAS: Leo. LEOCADIA: Eat. He eats. She watches the sky.
[beat 17] LEOCADIA: I'm tired. TOBIAS: I know. LEOCADIA: Don't say anything. TOBIAS: I won't.
[beat 18] They sit in the sun a long time. Neither speaks. The glacier moves under them like a slow breath.
[beat 19] Eventually she rises, offers him her good hand. He takes it. They start walking.

### SCENE s00263 | INT. COACHING INN STABLE LOFT, ENGLAND - NIGHT, 1788
Characters: LADY GEORGIANA ASHWORTH-OLUWOLE, STRANGER, MATTHIAS, A VOICE, SOLDIER
[beat 0] Hay. Lantern light. The smell of horse and rain. A rope ladder to the yard below.
[beat 1] A cloaked figure crouches in the straw, back to the wall, pistol held in both hands.
[beat 2] The ladder creaks. LADY GEORGIANA ASHWORTH-OLUWOLE (30s, riding habit torn at the hem, hair coming loose) climbs into the loft and freezes at the sight of the pistol.
[beat 3] GEORGIANA: Put that away, please. STRANGER: Stay where you are. GEORGIANA: I have been riding for nine hours. I will sit.
[beat 4] She sits on a hay bale. The stranger does not lower the pistol.
[beat 5] STRANGER: Who sent you? GEORGIANA: Nobody. I own the horse in the third stall. I came to check on her. STRANGER: Liar. GEORGIANA: I assure you, I am not.
[beat 6] The stranger leans out of shadow. A man, late twenties, rain-soaked, hollow-eyed, in the coat of a courier.
[beat 7] STRANGER: The horse in the third stall is mine. GEORGIANA: It is a grey mare with a white sock? STRANGER: A brown gelding. GEORGIANA: Then we are both mistaken.
[beat 8] She smiles, tilts her head, and the tension shifts, just slightly. He lowers the pistol an inch.
[beat 9] STRANGER: I am a courier. I carry letters for the Crown. GEORGIANA: How dull. STRANGER: You'd be surprised. GEORGIANA: Show me one. STRANGER: No.
[beat 10] GEORGIANA: Then tell me your name, courier. He hesitates, searching her face for a lie. STRANGER: Matthias. GEORGIANA: Matthias what? MATTHIAS: Just Matthias. GEORGIANA: Then call me Georgiana. Just Georgiana.
[beat 11] The ladder creaks again. Both turn. Boots on the rungs. Torchlight on the beams.
[beat 12] A VOICE: Search the loft!
[beat 13] Matthias grabs her arm. She grabs his wrist. They freeze, nose to nose, as torchlight crawls along the straw.
[beat 14] MATTHIAS: They've come for me. GEORGIANA: Then they shall have us both. MATTHIAS: Why? GEORGIANA: Because I'm tired of being polite.
[beat 15] She yanks him down into the hay. Pulls her cloak over them both. Torchlight sweeps over the rafters.
[beat 16] A soldier's head appears at the top of the ladder, squinting. SOLDIER: Nothing here. SOLDIER: Only straw and horse-dung!
[beat 17] The head vanishes. Boots descend. Silence returns.
[beat 18] Matthias and Georgiana lie breathless beneath the cloak. GEORGIANA: You're heavier than you look. MATTHIAS: You're braver than you look. GEORGIANA: We are both liars. MATTHIAS: Obviously.
[beat 19] They begin, helplessly, to laugh. Then to shake. Then, finally, to lie very still, listening to the rain on the slates.
[beat 20] Matthias slides the pistol into his belt. MATTHIAS: I owe you. GEORGIANA: I'll collect.

### SCENE s00264 | INT. PARKED CAR, PARKING GARAGE LEVEL P3 - NIGHT
Characters: DETECTIVE CASSIUS ONWUDIWE-HARLOW, DISPATCH
[beat 0] Concrete. Sodium light. A car idling, engine just above a whisper. DETECTIVE CASSIUS ONWUDIWE-HARLOW (50s, stained trench, thermos in the cupholder) sits behind the wheel. Alone.
[beat 1] He watches an elevator door. It does not open.
[beat 2] He turns off the engine. Silence. A drip somewhere.
[beat 3] He picks up a cell phone. Dials. Puts it to his ear.
[beat 4] DISPATCH: Dispatch. CASSIUS: Cassius Harlow. Badge two-one-four. I'm on P3 at the Meridian. DISPATCH: Copy, Detective. Status? CASSIUS: Stakeout. Nothing yet. DISPATCH: Need backup? CASSIUS: No.
[beat 5] DISPATCH: Detective, it's two a.m. CASSIUS: I know what time it is. DISPATCH: You've been there six hours. CASSIUS: Seven.
[beat 6] He sets the phone on the dash. Opens the thermos. Pours coffee into the cap. Sips. Winces. CASSIUS: Cold.
[beat 7] He watches the elevator again. A light above the door blinks: 3. Then dims.
[beat 8] CASSIUS: Come on. Come on, you son of a--
[beat 9] The elevator dings. The door slides open. Empty.
[beat 10] He sits very still. Then slowly lets out a breath. Closes his eyes. CASSIUS: Not tonight.
[beat 11] The phone buzzes on the dash. He picks it up.
[beat 12] DISPATCH: Detective, the subject has been detained at the airport. You're clear to stand down. CASSIUS: Airport. DISPATCH: He never came to the Meridian. CASSIUS: Of course he didn't. DISPATCH: Go home, Cassius. CASSIUS: Copy.
[beat 13] He ends the call. Puts the thermos back in the cupholder. Starts the engine. CASSIUS: Seven hours.
[beat 14] He backs out slowly. The elevator door slides shut behind him on its own.

### SCENE s00265 | EXT. SUNKEN GARDEN BENEATH A FALLEN STARSHIP - NIGHT
Characters: IRENEUS BASKERVILLE-ADE, MYRT, OKONKWO-SPARROW, HOLGER STAVROS-NWACHUKWU, THEO, LAVENDER-OSEI, GRANDMAMA NKECHI WINTERBOURNE
[beat 0] A hull the size of a cathedral lies crumpled across a valley. Under its arch, moss and glowing mushrooms have colonized a courtyard of broken tile. Five figures circle a fire in the courtyard center. IRENEUS BASKERVILLE-ADE (50s, wizard, coat of many pockets) feeds twigs to the flames. MYRTLE "MYRT" OKONKWO-SPARROW (20s, bard, lute on her back) tunes a string. HOLGER STAVROS-NWACHUKWU (30s, mercenary, scarred jaw) sharpens a long blade on a whetstone. THEODORA "THEO" LAVENDER-OSEI (teens, apprentice, ink on her chin) copies glyphs from the hull onto a scroll. And GRANDMAMA NKECHI WINTERBOURNE (80s, wrapped in quilts, eyes sharp as tacks) sits on a stool nearest the fire.
[beat 1] IRENEUS: We rest here till dawn. HOLGER: Rest? With that thing over us? IRENEUS: It's a ship, Holger. It's dead. HOLGER: So were the last three things I fought.
[beat 2] MYRT: Holger, relax. Listen to this. She plucks a gentle melody. The mushrooms pulse, brightening in time. Theo looks up from her scroll, startled.
[beat 3] THEO: Oh. They like it. MYRT: Everything likes it. HOLGER: Not me.
[beat 4] GRANDMAMA: You like it, boy. You just won't say. HOLGER: Grandmama-- GRANDMAMA: Hush.
[beat 5] The fire cracks. Ireneus rises, brushing his coat.
[beat 6] IRENEUS: Theo, the glyphs. What do they say? THEO: Um. "Do not wake the garden."
[beat 7] A long silence. The music stops. Myrt's hand freezes on the strings. MYRT: Theo. THEO: Sorry. I only just read it.
[beat 8] HOLGER: Everyone quiet. IRENEUS: Holger, put that away. HOLGER: No.
[beat 9] Beneath them, the ground trembles. The mushrooms flare white, then red. A distant hum rises through the soil like a stirring giant. MYRT: Ireneus. IRENEUS: I know.
[beat 10] GRANDMAMA: Well. That's the trouble with gardens.
[beat 11] The hull groans. Vines uncoil from the ceiling, thick as cables, and begin to descend. Holger swings at one.
[beat 12] It splits, spills glowing sap, and lunges for his throat.
[beat 13] HOLGER: Theo, run! THEO: Where? HOLGER: Anywhere!
[beat 14] Myrt strikes a chord, wild, dissonant. The vines recoil. Ireneus hurls a handful of powder; it ignites in a flash of orange. Theo hauls Grandmama up by the elbow and they stumble toward the arch.
[beat 15] IRENEUS: Don't look back! MYRT: I am looking! HOLGER: Then look faster!
[beat 16] A vine catches Holger's ankle. He topples. Myrt dives, slashes with her lute-strap. It parts. Together they scramble to their feet.
[beat 17] The five reach the arch just as the entire garden convulses, erupting into a roar of green light.
[beat 18] They tumble onto cold grass beyond. Behind them, the starship shudders, then lies still.
[beat 19] GRANDMAMA: Hm. THEO: Grandmama? GRANDMAMA: I'd like to go home now.

### SCENE s00266 | INT. DERELICT ORPHANAGE, WEST WING DORMITORY - NIGHT
Characters: EUGENIA FALLOWFIELD-ADEYEMI, NOAH, OKWUOSA-BERGMAN, LENA TAKAHASHI-DUMONT, CHILD, WREN, TAPE
[beat 0] Iron beds in rows. Mildewed mattresses. A rocking horse with one glass eye. Moonlight through a shattered window. Three paranormal investigators move in a tight triangle, flashlights jittering. DR. EUGENIA FALLOWFIELD-ADEYEMI (50s, parapsychologist, wool coat, an old tape recorder in her hand) leads. NOAH "NO" OKWUOSA-BERGMAN (20s, camera operator, headlamp) films over her shoulder. LENA TAKAHASHI-DUMONT (30s, sound engineer, headphones, boom mic) sweeps the room with a long pole.
[beat 1] EUGENIA: Quiet, please. I want a clean recording. NOAH: Copy. LENA: Copy.
[beat 2] They freeze. The tape recorder whirs. A long beat. The wind moves through the dormitory like breath.
[beat 3] EUGENIA: Is anyone here? Silence. Then, faintly, from the far end: CHILD: Yes.
[beat 4] All three jump. Lena stumbles into the rocking horse; it sways, creaking. Noah's camera light lurches.
[beat 5] EUGENIA: Did you hear that? LENA: Yes. NOAH: I got it.
[beat 6] EUGENIA: What is your name? CHILD: Wren. EUGENIA: Hello, Wren. How old are you? CHILD: Nine. EUGENIA: Do you live here? CHILD: We all do.
[beat 7] The temperature drops. Their breath fogs. LENA: Okay. Okay. This is fine. NOAH: It's very fine. LENA: It's extremely fine.
[beat 8] EUGENIA: Wren, can you show us where you are? A pause. Then, down the dormitory aisle, a lantern flickers into being. Under it stands a small figure in a gray nightshirt, hands clasped, face pale and ordinary.
[beat 9] NOAH: Oh my god. EUGENIA: Hello, Wren. WREN: Hello.
[beat 10] She tilts her head. Behind her, the iron beds begin to rattle, one by one. LENA: Eugenia. EUGENIA: I see them.
[beat 11] WREN: They're excited. EUGENIA: Why? WREN: You're the first visitors.
[beat 12] Eugenia opens her mouth. Closes it.
[beat 13] NOAH: Please tell me we're leaving. EUGENIA: Not yet. LENA: Eugenia! EUGENIA: Not yet. Wren, who is the one at the back?
[beat 14] Beyond Wren, in the darkness, a tall shape unfolds from the last bed. A woman in a nurse's uniform, face hidden in shadow. WREN: That's Matron. LENA: Matron. WREN: She's not very nice.
[beat 15] The nurse steps forward. A single stride, and the whole room tilts. The beds slide. The glass in the window sings.
[beat 16] Lena shrieks and drops the mic. Noah's camera light flares and goes out. Eugenia stumbles against an iron frame.
[beat 17] EUGENIA: Out! Everyone, out!
[beat 18] They run. The dormitory stretches around them, doors multiplying, corridors lengthening. Lena sobs. Noah curses. Eugenia, hand on the wall, counts doors under her breath. EUGENIA: Seven. Eight. Nine. Here!
[beat 19] She slams through a door. They tumble into the courtyard, grass and moonlight, cold clean air.
[beat 20] They lie gasping. The orphanage looms behind them, windows dark.
[beat 21] LENA: Never again. NOAH: I lost the camera.
[beat 22] EUGENIA: No. You have the tape. She holds up the recorder, its light still green.
[beat 23] She presses play. Her own voice: "Is anyone here?" A pause. Then a small voice, unmistakable:
[beat 24] TAPE: Come back.
[beat 25] They stare at the recorder. Slowly, without a word, Lena takes it, crouches, and buries it in the dirt.

### SCENE s00267 | INT. BAGGAGE CLAIM, MIDNIGHT TERMINAL - NIGHT
Characters: SABRINA OLUWAFEMI-STRAND, VIC, ANANDARAJAH-KELLER, INSPECTOR MIRA TOLENTINO-ACHEBE
[beat 0] A carousel loops empty. Flickering departures board. The cleaners have gone home. SABRINA OLUWAFEMI-STRAND (30s, courier, hard-shell case handcuffed to her wrist) waits at belt six. Beside her, a tall man holds a paper cup: VICTOR "VIC" ANANDARAJAH-KELLER (40s, airport security, lanyard, deadpan). At the end of the belt, a third figure examines the departures board: INSPECTOR MIRA TOLENTINO-ACHEBE (50s, plainclothes, press badge folded in her palm).
[beat 1] VIC: Ma'am, you've been here three hours. SABRINA: My bag is delayed. VIC: Which bag? SABRINA: The blue one. VIC: You don't have a blue one.
[beat 2] SABRINA: I'd like to speak to your supervisor. VIC: I am my supervisor. SABRINA: Then I'd like another one.
[beat 3] MIRA: Miss Oluwafemi-Strand. SABRINA: Do I know you? MIRA: Not yet. But I know the case on your wrist.
[beat 4] Sabrina's hand tightens on the handle. SABRINA: It's personal. MIRA: It's evidence. VIC: Evidence of what? MIRA: Of a very bad weekend.
[beat 5] Sabrina whips the case up and swings it at Vic's head. He ducks. It clips Mira's shoulder. Mira stumbles back; Sabrina bolts for the exit, dragging the case on its chain.
[beat 6] VIC: Stop! MIRA: Let her run. VIC: Inspector?
[beat 7] MIRA: Sabrina! The carousel's about to start!
[beat 8] Sabrina stops, turns. The belt shudders and begins to turn, empty. She looks at it, then at them.
[beat 9] SABRINA: What's that supposed to mean? MIRA: It means turn it over. VIC: It means she's cornered. ^
[beat 10] Sabrina stares. The case drops open on its chain, spilling nothing. A few sheets of paper flutter to the floor.
[beat 11] SABRINA: Oh. MIRA: Yes. SABRINA: It's empty. MIRA: It was always empty.
[beat 12] Sabrina laughs, short and hollow. Slowly she sinks to the floor beside the belt.
[beat 13] Vic takes off his lanyard and sets it beside her. VIC: Tea? SABRINA: Please.

### SCENE s00268 | INT. LUNAR RELAY STATION "KESTREL-4," COMMAND DECK - SHIP NIGHT
Characters: STATION CHIEF AMINATA VOSKUIJLEN-OSEI, DAV, LINDQVIST-KAMARA
[beat 0] A cramped dome of monitors and cables. A slice of Earth hangs in the viewport, blue and fragile. STATION CHIEF AMINATA VOSKUIJLEN-OSEI (40s, grey coverall, tied-back hair) sits at the primary console, headset on one ear. Beside her, systems tech DAVID "DAV" LINDQVIST-KAMARA (30s, T-shirt, bare feet on the deck) eats a protein bar.
[beat 1] AMINATA: Telemetry's drifting. DAV: It's always drifting. AMINATA: Not by this much. DAV: Let me see.
[beat 2] He swivels to her screen, bar in his mouth. Reads. Swallows. DAV: Huh. AMINATA: Huh?
[beat 3] DAV: That's not drift. AMINATA: What is it? DAV: Something is pinging us. AMINATA: From where? DAV: Everywhere.
[beat 4] A soft tone sounds. Both look at the console. A line of green text scrolls past.
[beat 5] AMINATA: "Greetings, Kestrel-Four." DAV: That's--
[beat 6] AMINATA: It's coming from our own transmitter. DAV: It's a loopback! AMINATA: It's not a loopback! ^
[beat 7] They stare at each other. The text continues.
[beat 8] DAV: "We have waited." AMINATA: Who's "we"?
[beat 9] DAV: Aminata, I'm going to need a minute. AMINATA: Take two.
[beat 10] He stands, pacing. Then stops, hands on his hips.
[beat 11] DAV: Okay. Hypothesis. Either it's a prank by the Mars crew-- AMINATA: They're asleep. DAV: --or it's a prank by the ground crew-- AMINATA: They're in a meeting. DAV: --or it's us. AMINATA: Us? DAV: We're hallucinating. Oxygen's low.
[beat 12] She taps a gauge. It reads perfect. AMINATA: Oxygen's fine. DAV: Damn.
[beat 13] Another tone. The text changes. AMINATA: "Please do not be afraid."
[beat 14] DAV: I'm afraid. AMINATA: Me too.
[beat 15] She types: WHO ARE YOU. The cursor blinks. Then the reply:
[beat 16] "A friend. Look up."
[beat 17] They look up. Through the viewport, high above the lunar horizon, a ring of pale lights forms, silent, orderly, expanding.
[beat 18] DAV: Chief. AMINATA: I see it.
[beat 19] DAV: Should we call Houston? AMINATA: We should wake the Mars crew. DAV: Both. AMINATA: Both.
[beat 20] Neither moves. The lights grow. In the viewport the Earth looks smaller than before.
[beat 21] DAV: Aminata? AMINATA: Yes? DAV: I never finished my protein bar.
[beat 22] She almost smiles. Reaches over and takes it from his hand. Takes a bite. AMINATA: Neither did I.
[beat 23] She chews, slowly. They watch the sky.

### SCENE s00269 | INT. FREIGHT ELEVATOR, SHUTTERED TEXTILE MILL - NIGHT
Characters: MAN, LEATHER JACKET, WOMAN, STEFAN, NAOMI
[beat 0] A steel cage the size of a small room. Dim bulb. A brass gate. Dust.
[beat 1] A MAN IN A LEATHER JACKET (40s, scar through his lip) leans against the back wall. A smoking pistol hangs loose in his fist.
[beat 2] The gate rattles. A hand grips it from outside.
[beat 3] A WOMAN (30s, long coat, blood on her cuff) slides in, pulls the gate shut, and presses the lever. The elevator lurches down.
[beat 4] They face each other. Silence, except for the cables.
[beat 5] WOMAN: You're late. MAN: You're early. WOMAN: I was told midnight. MAN: Midnight was the plan.
[beat 6] She looks at his pistol. He tucks it slowly into his waistband.
[beat 7] WOMAN: Where's the third? MAN: Dead. WOMAN: How? MAN: Quickly.
[beat 8] The cable groans. The bulb flickers. She steps close and he flinches, then stills.
[beat 9] She reaches into his jacket, withdraws a leather folio, flips it open. A set of blueprints. A passport. A photograph.
[beat 10] WOMAN: Matteo Ferrante. MAN: That's me. WOMAN: It isn't. MAN: It is tonight.
[beat 11] WOMAN: Tell me your real name. MAN: Why? WOMAN: So I know whom to shoot.
[beat 12] He grins, tilts his head.
[beat 13] The elevator thumps to a halt between floors. The lights die. Total dark.
[beat 14] In the dark, a scuffle. A thud. A gasp. A pistol clatters on the floor. Someone lunges, someone slams a wall, a body falls against the gate and it rattles open. The bulb sputters back to life.
[beat 15] The woman has the man pinned against the cage, forearm across his throat. His hands are on her wrists. Both breathing hard. The pistol lies between their feet.
[beat 16] MAN: Stefan. WOMAN: Stefan what? STEFAN: Stefan Halloran.
[beat 17] WOMAN: My brother. STEFAN: Naomi. NAOMI: You're alive. STEFAN: Barely.
[beat 18] She slaps him, hard. Then hugs him, fiercer than a boxer.
[beat 19] NAOMI: Twelve years. STEFAN: Eleven and a half. NAOMI: I'm still going to kill you. STEFAN: Do it after we get out.
[beat 20] The elevator groans. Starts to move again, down, into the dark.

### SCENE s00270 | INT. ROLLER RINK SNACK BAR - CLOSING TIME
Characters: IMANI VOSS, TEODOR LIND, GRANDMA PEARL, DEZ, ACHTERBERG, DJ, CLEO
[beat 0] A cramped counter under a flickering neon sign. The popcorn machine ticks as it cools. Mirror-ball light crawls over a floor of scuffed maple. Rental skates hang in crooked rows. IMANI VOSS (30s, braids pinned up, rink-staff polo two sizes big) wipes the counter in slow circles. She has been wiping the same spot for a while. TEODOR LIND (30s, rangy, wool coat, skate laces knotted round one wrist) stands at the far end holding a paper boat of cold fries.
[beat 1] IMANI: We close in five. TEODOR: I know. I'm eating. Imani nods. Keeps wiping.
[beat 2] GRANDMA PEARL (70s, tiny, sequined cardigan, terrifyingly good on skates) glides up to the counter and raps it twice with a knuckle. PEARL: Two cocoas. One for me, one for the man who's about to say something. TEODOR: I wasn't going to. PEARL: That's what I'm afraid of.
[beat 3] DESMOND "DEZ" ACHTERBERG (20s, gangly, headset askew) leans out of the DJ booth and cups a hand to his mouth. DEZ: Last song! Anybody left, last song!
[beat 4] CLEO (teens, braces, rental skates on the wrong feet) wobbles in from the rink, grabs the counter, and lets go of it again at once.
[beat 5] Imani and Teodor both reach to steady her. Their hands meet on Cleo's sleeve. Both pull back. Cleo sits down on the floor.
[beat 6] CLEO: I'm fine. IMANI: You're on the floor. CLEO: Fine on the floor.
[beat 7] Pearl slides two cocoas across. Teodor takes his and does not drink it.
[beat 8] TEODOR: I drove four hours. IMANI: Nobody asked you to. TEODOR: You did. In March. IMANI: In March I was talking.
[beat 9] Pearl turns her cocoa a quarter turn on the counter, in no hurry. PEARL: Up, sweetheart. This part's boring. Cleo scrambles up. Pearl steers her toward the rink by the elbow, and the two of them roll away.
[beat 10] Dez cuts the music. The room hums. The mirror ball keeps turning without a song.
[beat 11] IMANI: Teo. TEODOR: Imani. They speak at the same moment. IMANI: I should have called. TEODOR: I should have stayed.
[beat 12] Neither laughs. Imani folds the rag into a square.
[beat 13] IMANI: It's a long drive back. TEODOR: It is.
[beat 14] He sets the fries down and picks them up again. Imani reaches under the counter and hands him a napkin. TEODOR: Thanks.
[beat 15] IMANI: Go on. I have to lock up.
[beat 16] He nods. At the door he stops, and she does not look up.
[beat 17] Dez flips the house lights on, and the whole rink goes flat and bright.
[beat 18] CLEO: Are we allowed to keep the skates? DEZ: No!
[beat 19] Teodor pushes the door open and the cold comes in.

### SCENE s00271 | INT. SALT MINE ELEVATOR HOIST HOUSE - DAY
Characters: GUS, TREVINO, LUCKY, MARROW, DEPUTY WENDELL OKORO, REVEREND ISAIAH CALLOWAY-BRANT
[beat 0] Brine-crusted timbers. A cable drum. One lantern. Wind through the slats. SHERIFF AUGUSTINE "GUS" TREVINO (50s, gray mustache, bad knee) sits on an upturned crate. Rifle across his lap. Waiting. Across from him, hands tied to the cable rail: LUCINDA "LUCKY" MARROW (30s, sun-cracked lips, torn duster). Smiling. Always smiling. Behind her, in the doorway: DEPUTY WENDELL OKORO (20s, borrowed hat, pale). Counting something on his fingers.
[beat 1] Gus checks his watch. Puts it away.
[beat 2] GUS: Noon. Should be noon. LUCKY: Time moves slow in a salt mine. GUS: Didn't ask you.
[beat 3] Silence. A drip somewhere. The cable drum creaks.
[beat 4] WENDELL: Sheriff. The train's late. GUS: I can hear that. Wendell shifts his weight. The floorboards complain.
[beat 5] LUCKY: Your boy's nervous. GUS: My boy's fine. WENDELL: I'm fine.
[beat 6] He isn't. His hand rests on his holster. Slides off. Rests again.
[beat 7] Gus rises. Knee pops. He walks to the slat window. Looks out at white flats and nothing.
[beat 8] GUS: Nobody moves till the whistle. WENDELL: Yes sir. LUCKY: Hear that? Nobody moves.
[beat 9] She tugs the rope. Testing. Gus turns. GUS: Quit that. LUCKY: Quit what? GUS: You know what.
[beat 10] She lets the rope go slack. Smile widens.
[beat 11] A fourth figure fills the doorway behind Wendell. Quiet. Boots on salt. REVEREND ISAIAH CALLOWAY-BRANT (60s, black frock, spectacles, a Bible under one arm). Dust on his shoulders. He tips his hat.
[beat 12] CALLOWAY-BRANT: Gentlemen. Lady.
[beat 13] Wendell spins. Hand on the gun this time. WENDELL: Who in hell are you?
[beat 14] CALLOWAY-BRANT: A man looking for water. GUS: No water here. Only salt. CALLOWAY-BRANT: So I see.
[beat 15] He steps in. Slow. Eyes drifting to Lucky. To the rope. To the rifle.
[beat 16] LUCKY: Morning, Reverend.
[beat 17] Gus looks at her. Looks at the preacher. GUS: You two acquainted? CALLOWAY-BRANT: No. LUCKY: Never met.
[beat 18] Too fast. Both.
[beat 19] Gus raises the rifle. Not at anyone. Just up. GUS: Damn.
[beat 20] A distant whistle. Long. Low.
[beat 21] WENDELL: That's the train. GUS: Everybody stay put.
[beat 22] Calloway-Brant sets the Bible on the crate. Unhurried. CALLOWAY-BRANT: Sheriff, I'd sit down. GUS: I'll stand. CALLOWAY-BRANT: Then stand well.
[beat 23] He opens the Bible. Hollowed out. A short-barreled pistol.
[beat 24] Wendell draws. Late.
[beat 25] The pistol barks. Wendell spins. Drops.
[beat 26] Gus fires. Splinters from the doorframe. Calloway-Brant is already moving, crashing sideways into the lantern.
[beat 27] Dark. Then fire. The lantern oil catches the dry timber.
[beat 28] LUCKY: Cut me loose, Gus! Cut me loose! GUS: Not a chance.
[beat 29] Flames climb the wall. Smoke rolls. Calloway-Brant is a shadow behind the cable drum. CALLOWAY-BRANT: Last chance, Sheriff! GUS: Come take it!
[beat 30] Gus fires at the drum. Sparks. The cable snaps free and whips across the room, slashing the rope at Lucky's wrists.
[beat 31] She is loose. She grins. LUCKY: Thank you kindly.
[beat 32] She snatches Wendell's fallen gun. Gus swings the rifle on her.
[beat 33] They freeze. Three guns. Three people. Fire roaring.
[beat 34] WENDELL: Don't. None of them moves.
[beat 35] The roof timbers groan. A beam drops between them in a shower of sparks.
[beat 36] They scatter.

### SCENE s00272 | INT. MUNICIPAL SWAN-BOAT BOATHOUSE - EVENING
Characters: BARNABY QUILL, ODALYS FERREIRA-NNAMDI, PETE, LAZAR
[beat 0] A cathedral of damp wood. Eleven fiberglass swans, enormous and faintly smug, are moored nose to tail in the dark water, each wearing the faded expression of a creature that has been pedaled by thousands of children and has forgiven none of them. BARNABY QUILL (50s, municipal windbreaker, a lanyard heavy with keys that open nothing important) stands on the dock with a clipboard held like a hymnal. He is counting swans for the third time and arriving at a different number each time. ODALYS FERREIRA-NNAMDI (40s, wet-weather poncho, hair in a hopeful bun) climbs out of a swan with the dignity of a woman leaving a courtroom.
[beat 1] ODALYS: It's twelve. BARNABY: It's eleven. ODALYS: The inventory says twelve. BARNABY: The inventory also says the pond is a lake.
[beat 2] Behind them, a third voice drifts from the rafters. PETRU "PETE" LAZAR (20s, cheerful, harness, a flashlight in his teeth) dangles above the water, retrieving a pennant. PETE: Thith ith the one. ODALYS: Pete, take the flashlight out of your mouth.
[beat 3] Pete spits the flashlight into his palm. It bounces off a swan's head and sinks.
[beat 4] BARNABY: That was a municipal flashlight. PETE: It was my flashlight. ODALYS: It was Barnaby's flashlight. BARNABY: It was a flashlight in the general sense.
[beat 5] PETE: Can I come down now? ODALYS: No. BARNABY: Yes.
[beat 6] ODALYS: No, because if he comes down we'll have to talk about the swan. BARNABY: We are talking about the swan. PETE: Which swan? ODALYS: The twelfth. PETE: There's a twelfth? BARNABY: There is not a twelfth.
[beat 7] ODALYS: Barnaby, I rode it. For twenty minutes. It has a steering problem and a name. BARNABY: What name? ODALYS: Gerald. PETE: Gerald's a good name.
[beat 8] BARNABY: Pete, you are suspended in the air by one strap and I need you to stop having opinions. PETE: I've had opinions the whole time, though. ODALYS: He's had opinions since March.
[beat 9] BARNABY: In March I told you both the swans were not to be named. ODALYS: You named the swans. BARNABY: I named ONE swan. Lucille. Out of respect. PETE: Lucille's on the left. ODALYS: Lucille is the one we sank in August. BARNABY: Lucille is resting.
[beat 10] A long silence. Water slaps the pilings. A swan, somewhere, knocks against the dock with a hollow note.
[beat 11] ODALYS: Barnaby, there are twelve swans. BARNABY: I know. PETE: So who's got Gerald?
[beat 12] Barnaby lets the clipboard drop. It floats. All three of them watch it drift away across the dark water toward the far swan, which has, impossibly, begun to turn its head.

### SCENE s00273 | INT. CAR WASH TUNNEL - NIGHT
Characters: KAVEH RAZMI, SOL, DUARTE, TOBIAS WREN
[beat 0] Brushes idle. Soap drips. Three cars' worth of silence. KAVEH RAZMI (40s, wet suit jacket) crouches behind a spinning mitter curtain, gun low. He is breathing hard. Across the bay, MARISOL "SOL" DUARTE (30s, mechanic's coveralls) holds a wrench like a club. A speaker crackles overhead, then goes dead.
[beat 1] KAVEH: Sol. Put it down. SOL: You first, Kav.
[beat 2] They speak at once. KAVEH: I didn't take it. SOL: You didn't take it.
[beat 3] Sol laughs once. Short. Dead. SOL: Four years.
[beat 4] A third silhouette steps through the exit light. TOBIAS WREN (60s, dry, immaculate raincoat). TOBIAS: Evening, both.
[beat 5] Kaveh's gun drifts toward Tobias. Sol's wrench stays on Kaveh. TOBIAS: Nobody here's leaving angry. Which is the point.
[beat 6] He sets a thin black case on the wet floor and slides it forward.
[beat 7] Sol drops the wrench. It rings. Kaveh lowers the gun.

### SCENE s00274 | INT. LIGHTHOUSE KEEPER'S QUARTERS - NIGHT
Characters: HELGA STRAND, ARNE STRAND, MAREN STRAND, THEO STRAND, CAPTAIN BASIL YEBOAH-KARLSSON, RADIO
[beat 0] Storm outside. Sea slamming rock. A kerosene lamp. A shortwave radio on the table, buzzing. HELGA STRAND (60s, oilskin, iron-gray braid) stands at the stove. Stirring. Not looking up. At the table: her son, ARNE STRAND (30s, damp wool sweater, a bandage across one hand). He stares at the radio. Their daughter-in-law, MAREN STRAND (30s, pregnant, hands wrapped around a cup) watches Arne watch the radio. On the stairs, listening: THEO STRAND (10, pajamas, bare feet). He has been told to sleep. By the window: CAPTAIN BASIL YEBOAH-KARLSSON (50s, drenched, sou'wester in hand). A stranger. Dripping onto the floorboards.
[beat 1] The radio hisses. RADIO: Coast Guard to lighthouse. Come in. Nobody moves. Helga stirs.
[beat 2] RADIO: Coast Guard to lighthouse. We have your vessel's mayday. Repeat. Come in.
[beat 3] Arne rises. Chair scrapes. Maren catches his wrist.
[beat 4] MAREN: Don't. ARNE: Maren. MAREN: You say one word to them and it's over. ARNE: It's already over.
[beat 5] Helga sets the spoon down. Turns. HELGA: Sit.
[beat 6] Arne sits. Maren lets go.
[beat 7] Basil steps from the window. Water pooling around his boots. BASIL: They'll keep calling. HELGA: Let them. BASIL: My crew is in that water.
[beat 8] HELGA: Your crew is dead, Captain.
[beat 9] Silence. The radio crackles. RADIO: Lighthouse. Acknowledge. Over.
[beat 10] Theo sits on the bottom stair. Pulls his knees up. THEO: Daddy? ARNE: Go to bed. THEO: Who's talking? MAREN: The radio, love. Go on. Theo doesn't go.
[beat 11] Basil crosses the room in three strides and picks up the microphone. Arne is up again. Helga steps between them. The three of them stand locked, a breath apart, Maren half-risen behind with one hand on her belly, Theo gripping the banister.
[beat 12] BASIL: Let me answer. HELGA: Put it down. BASIL: They'll send a boat. ARNE: They'll send a boat for us. BASIL: For all of us.
[beat 13] HELGA: For him. She nods at Arne. Basil looks. Looks at the bandage. At the rope burn climbing the wrist.
[beat 14] BASIL: You cut the line. Arne says nothing. BASIL: You cut our line.
[beat 15] ARNE: The reef would have taken the lighthouse. BASIL: The reef took forty men! ARNE: I was trying to save my family!
[beat 16] Maren covers her mouth. Theo starts to cry without sound.
[beat 17] RADIO: Lighthouse, we have a visual on your lamp. Repeat, we have a visual. Hold position.
[beat 18] Basil lets the microphone drop. It swings on its cord, clicking against the table leg.
[beat 19] Helga takes it. Presses the key. HELGA: This is Helga Strand. Lighthouse is secure. A pause. Static.
[beat 20] RADIO: Copy, ma'am. Any survivors?
[beat 21] Everyone looks at Basil. Basil stares at the floor. At the pool of seawater spreading around his boots. At the small bare feet on the stairs. He looks up. BASIL: One.
[beat 22] Helga lowers the microphone. Arne puts his face in his bandaged hand. Maren crosses to him and doesn't touch him.
[beat 23] Wind hits the tower. The lamp above them sweeps its beam across the window, turning, turning, turning.

### SCENE s00275 | INT. MINIATURE GOLF WINDMILL - DAY
Characters: GRETCHEN POLLARD, WALDO POLLARD, TEENAGE ATTENDANT RUSS OYELARAN, LITTLE MIRABEL
[beat 0] The big concrete windmill at hole eighteen. Blades turning slowly. A tunnel through its base. GRETCHEN POLLARD (50s, visor, scorecard in teeth) is wedged halfway into the tunnel on her stomach. Her husband WALDO POLLARD (50s, bucket hat) holds her ankles. TEENAGE ATTENDANT RUSS OYELARAN (17, name tag, vest) arrives with a rake. LITTLE MIRABEL (8, glitter sneakers) watches from the green, club trailing.
[beat 1] RUSS: Ma'am, you can't go in there. GRETCHEN: My ball's in there! WALDO: She means it.
[beat 2] The blades turn. A blade clips Waldo's hat. He ducks.
[beat 3] Gretchen shoots out of the tunnel, ball in hand, and the two of them tumble into Russ. All three go down in a heap. The rake clatters.
[beat 4] MIRABEL: Is that a hole in one? RUSS: No.
[beat 5] Gretchen holds up the ball like a trophy.

### SCENE s00276 | EXT. FLOODED RICE PADDY - DAWN
Characters: LIEUTENANT NADIA VASSILIOU, SERGEANT FIONN MCALLISTER-DUBE, CORPORAL AMARA TSEGAYE, POLDO, RINCON
[beat 0] Mist. Brown water to the knees. A broken dike. Frogs. Four soldiers in a skirmish line. Slogging. LIEUTENANT NADIA VASSILIOU (30s, helmet strap loose) in the lead. Compass in her fist. SERGEANT FIONN MCALLISTER-DUBE (40s, radio on his back) behind her. CORPORAL AMARA TSEGAYE (20s, rifle high, eyes wide) third. PRIVATE LEOPOLDO "POLDO" RINCON (19, glasses taped at the hinge) last.
[beat 1] NADIA: Spacing. Ten feet. They spread. Water sloshes. POLDO: Ten feet. Ten feet. Ten feet.
[beat 2] A frog leaps. Amara jerks the rifle. Fionn grabs the barrel. FIONN: Easy. AMARA: Sorry.
[beat 3] They go on. The mist shifts.
[beat 4] Metal glints ahead. A crouched shape. A helmet. Then another.
[beat 5] Nadia raises a fist. Everyone stops.
[beat 6] A crack. Water jumps near Poldo. NADIA: Down!
[beat 7] Nadia and Amara dive left. Fionn and Poldo dive right. A machine gun opens up, stitching the paddy. FIONN: Stay low! Stay LOW!
[beat 8] Poldo lifts his head. Gets a mouthful of mud. POLDO: Okay. Okay okay okay.
[beat 9] AMARA: Where is it? NADIA: Treeline. Eleven o'clock.
[beat 10] She crawls to Fionn. He is on the radio. His lips move. Static only. FIONN: Dead. NADIA: Try again. He tries. Nothing.
[beat 11] The firing stops. Hard silence. Frogs begin again.
[beat 12] Nadia peers over the dike. She stares. Her shoulders drop.
[beat 13] NADIA: Hold fire. AMARA: Ma'am? NADIA: Hold. Fire.
[beat 14] Across the paddy, the "helmets" are scarecrows. Two straw men in rusted pots. A third machine gun sits on a bamboo tripod, tied to a clapper that bangs in the breeze.
[beat 15] Fionn lets out a breath that turns into a laugh. Amara puts her forehead on her rifle. Poldo sits straight up out of the water, soaked to the chin.
[beat 16] POLDO: It's a bird scarer. NADIA: It's a bird scarer.
[beat 17] She pulls her wet hat off and wrings it. Amara and Poldo stand together, shaking, and slap each other on the shoulder, hard, both laughing.
[beat 18] FIONN: Will you tell them she did the compass right? NADIA: Tell them yourself. She's your lieutenant.
[beat 19] Fionn looks at Nadia. She looks at him. A beat, and neither can say which of them was the "she" meant. FIONN: Aye.
[beat 20] They start across the paddy.

### SCENE s00277 | INT. BONDED WAREHOUSE - CHEESE AGING CAVE - NIGHT
Characters: DOLLY, PRITCHARD-ABARA, CASIMIR VOLKOV, LEFTY, BATISTE, INSPECTOR HOLLIS TANAKA-REED, PEPPER NAKAMURA-OSEI
[beat 0] Rows of wheels stacked to the ceiling. Cold. Ammonia and rind. A woman in a hairnet, DOLORES "DOLLY" PRITCHARD-ABARA (50s), runs a finger along a shelf. She doesn't look at the two men by the door. A man in a good suit, CASIMIR VOLKOV (40s), checks his cuffs. He is early. He hates being early. The second man, LENNOX "LEFTY" BATISTE (30s, work gloves, one sleeve rolled), leans on a hand truck. He taps it.
[beat 1] She lifts a wheel. Turns it. Sniffs.
[beat 2] LEFTY: It's the right one. DOLLY: We'll see.
[beat 3] She sets it down. Wipes her hands on her apron. He watches her hands.
[beat 4] A fourth figure comes down the aisle: INSPECTOR HOLLIS TANAKA-REED (50s, county badge on a belt clip). Slow. Wheezing from the cold. She stops three rows away. HOLLIS: Evening.
[beat 5] Nobody answers. She nods at the shelves. HOLLIS: Lot of inventory. DOLLY: It's a big cave.
[beat 6] Hollis smiles. Moves closer. Casimir shifts his weight. He glances at Lefty. Lefty looks at the floor.
[beat 7] HOLLIS: Mind if I look at the paperwork? DOLLY: Back office. HOLLIS: I'd rather look here.
[beat 8] She waits. Dolly hands over a clipboard. She flips pages. Doesn't read them.
[beat 9] HOLLIS: Funny. These numbers line up exactly. DOLLY: We keep good books. HOLLIS: Nobody keeps books this good.
[beat 10] She sets the clipboard on a wheel. Casimir steps forward. Lefty's hand tightens on the truck.
[beat 11] A fifth voice, from the dark behind the last row. PEPPER: Everybody just stay where you are.
[beat 12] Out of the dark: PEPPER NAKAMURA-OSEI (20s, the night cleaner, mop bucket, calm). A pistol in her yellow glove. She points at no one in particular. At the room.
[beat 13] PEPPER: Mrs. Pritchard, you said you'd be gone by ten. Dolly doesn't blink. She looks at the wheel Hollis is leaning on.
[beat 14] Hollis sees it. Straightens. Takes her hand off the cheese.
[beat 15] Lefty lets go of the hand truck. It rolls a foot. Stops. Casimir smooths his tie.
[beat 16] The compressor kicks on. A long, low hum.
[beat 17] Pepper lowers the pistol. PEPPER: It's cold in here.
[beat 18] Dolly takes off her apron. Folds it. Sets it on the shelf. She nods once to Hollis, who nods back.
[beat 19] They walk out together. The two men follow. Pepper stays, looking at the wheels, the mop bucket at her feet.

### SCENE s00278 | INT. ABANDONED PLANETARIUM - NIGHT
Characters: EVELYN HARGROVE, THE MAN, AMBROSE
[beat 0] A great dome of cracked plaster. Rows of tilting seats like rotted teeth. At the center, a Zeiss star projector, shrouded like a sleeping beast.
[beat 1] A flashlight beam wanders across the dome. Behind it: EVELYN HARGROVE (30s, wool coat, camera bag), picking her way down the aisle. EVELYN: Hello? The caretaker said the doors were unlocked.
[beat 2] Her voice dies in the plaster. She reaches the projector. Lays a hand on its cover.
[beat 3] A SOUND. Soft. Behind her. A seat creaking back.
[beat 4] She spins the light. A MAN sits in the third row. Gray suit. Hands folded. Smiling pleasantly.
[beat 5] THE MAN: Ten minutes early. Punctual people are rare. EVELYN: I didn't see you come in. THE MAN: I didn't come in.
[beat 6] She laughs, nervous, and glances at the exit. Still there. Still far.
[beat 7] EVELYN: Are you the caretaker? THE MAN: I look after the stars. Is that the same?
[beat 8] She lowers the light. EVELYN: I'm here to photograph the dome. For the historical society. THE MAN: Of course.
[beat 9] He stands. Slowly.
[beat 10] His shadow does not move with him. EVELYN: Oh.
[beat 11] THE MAN: Don't be frightened. I only want you to look up. EVELYN: No. THE MAN: Please.
[beat 12] The projector SHUDDERS under its cover. A hum rises from the machine. A thin line of light cuts from under the cloth.
[beat 13] EVELYN: Who are you? THE MAN: Ambrose Lyle. Chief astronomer. Nineteen thirty-one.
[beat 14] He smiles, and the plaster above them goes black, then bursts with ten thousand stars. EVELYN: Please.
[beat 15] AMBROSE: Look up, Miss Hargrove.
[beat 16] She doesn't want to. She does. The stars begin to move toward her.

### SCENE s00279 | INT. GREENHOUSE CONSERVATORY - NIGHT
Characters: DOCTOR PRUDENCE ACHEBE, LORD ALISTAIR PENHALLOW-NG, TALLY, BRIGHTWATER, OSWIN OKONKWO-FRY, GRANDE DAME ESMERALDA VANCE, DEV, MARLOWE
[beat 0] Glass walls beaded with condensation. Orchids hang like trapped moths. At the center, a wrought-iron table, a half-eaten fig tart, and a toppled chair. Six people stand around the table. In the chair's place lies the body of the host, a velvet cloak over his chest. Nobody has touched him. DOCTOR PRUDENCE ACHEBE (50s, tailored green suit) kneels. Fingertips at his throat. LORD ALISTAIR PENHALLOW-NG (60s, monocle, flushed) stands rigid, a champagne flute shaking in his hand. MISS TALLULAH "TALLY" BRIGHTWATER (20s, flapper beads) grips the back of a chair. MR. OSWIN OKONKWO-FRY (40s, butler's tails) holds the door. GRANDE DAME ESMERALDA VANCE (70s, black lace, cane) watches all of them. Standing apart, by the orchids: INSPECTOR DEVRAJ "DEV" MARLOWE (40s, rumpled raincoat, soaked).
[beat 1] DEV: No one leaves. TALLY: Dev, darling, you can't hold us. DEV: Miss Brightwater, I can hold you till breakfast.
[beat 2] ESMERALDA: Oswin, lock the door. OSWIN: Already done, madam.
[beat 3] Everyone turns to look at Oswin. Oswin looks at the key in his hand. Doctor Achebe stands. Lord Alistair steps back into an orchid. The flute shatters.
[beat 4] Tally and Dev lunge for the same loose thread of cloak. Oswin bolts for the door. Esmeralda's cane cracks down on his wrist. Alistair collapses into a chair. The doctor catches the key mid-air.
[beat 5] ACHEBE: The tart.
[beat 6] Every head turns to the fig tart. One slice missing. A silver fork beside it, tines green.
[beat 7] DEV: Who cut the tart? Silence. Condensation drips from the glass roof.
[beat 8] ESMERALDA: I did, Inspector.

### SCENE s00280 | EXT. DRIFTING ICE FLOE, ARCTIC INLET - DAY
Characters: FIGURE, HANNE, SKJOLD, STATION
[beat 0] A white plain under a white sky. A scatter of gear: a collapsed tent, a sled, a battered handheld radio. Wind pushes snow in thin ribbons across the surface. A FIGURE in a red parka kneels over a camp stove, back to us. Small. Methodical.
[beat 1] The figure turns. HANNELORE "HANNE" SKJOLD (40s, glacier goggles pushed up, frostbitten cheeks, a field biologist's patience in her face) pours melted water into a tin cup. She drinks. Looks at the horizon. HANNE: Day nine.
[beat 2] She sets down the cup. Picks up the radio. Thumbs it. HANNE: Station, this is Skjold. Do you copy?
[beat 3] Static. She waits. Counts to thirty. Tries again. HANNE: Station, this is Skjold. Floe drift continues northeast. Rations, six days. Morale, fine. She almost smiles at that last word.
[beat 4] Static, then a thin voice, far away. STATION: ...Skjold, copy... say again... Hanne grips the radio. HANNE: Station, I read you. Position unchanged. I am not in distress. STATION: ...hold... helicopter... three days... HANNE: Understood. Three days.
[beat 5] She lowers the radio. Doesn't celebrate. Doesn't sag. Reaches for a notebook and a pencil stub.
[beat 6] The camera finds the page. A tally of marks, nine neat strokes. She adds a tenth. Under the tally, in block letters: DON'T LOSE THE PENCIL. HANNE: Don't lose the pencil. She tucks the pencil behind her ear. Looks out at the ice, and the ice looks back, patient and enormous.
[beat 7] A low groan rolls under the floe. A thin crack runs a few meters away and stops. SKJOLD: Not yet, thank you.
[beat 8] She zips the radio into her parka and starts to repack the sled.

### SCENE s00281 | INT. NATURAL HISTORY MUSEUM - WHALE HALL - NIGHT
Characters: ZOFIA KRAWCZYK-ADEYEMI, TRIX, OKAFOR-LINDQVIST, MIRIAM SOLOMON-BEAUCHAMP
[beat 0] A blue whale skeleton hangs from the ceiling. Moonlight through skylights makes its ribs look like a ship's hull. Three figures at the base of a display case. Black clothes, soft shoes. ZOFIA KRAWCZYK-ADEYEMI (40s) kneels at the lock, picks in her teeth. Patient. Her hands barely move. TRISTAN "TRIX" OKAFOR-LINDQVIST (20s) holds a flashlight with a red filter and a stopwatch. His knee bounces. MIRIAM SOLOMON-BEAUCHAMP (60s, silver bob) stands at the rail, arms folded, watching the doors.
[beat 1] TRIX: Ninety seconds. Zofia doesn't answer. The lock clicks. She sets down the picks.
[beat 2] Inside the case: a fossil egg the size of a football, on a velvet cradle.
[beat 3] Trix reaches. Miriam's hand closes on his sleeve. He stops. MIRIAM: Gloves.
[beat 4] He pulls on gloves. His fingers are wet. They slide. Zofia takes his hands, wipes them on her shirt, helps him.
[beat 5] She lifts the egg. Weighs it. Hands it to Miriam.
[beat 6] Miriam holds it a moment too long. Her thumb strokes the shell. TRIX: Miriam. MIRIAM: I know. She wraps it in a blanket and passes it to Trix. He cradles it against his chest like a baby.
[beat 7] A SOUND. Footsteps on the mezzanine. A flashlight sweeps the hall. Three freeze. Trix stops breathing. The light crosses the whale. The ribs. The case. It settles on the empty velvet.
[beat 8] Silence. Then the light moves on. The footsteps fade toward the east wing.
[beat 9] Zofia lets out a breath. Trix is shaking so hard the egg rattles in its blanket. She steadies it with both hands. ZOFIA: Walk.
[beat 10] They walk. Under the whale. Past the stuffed elk. Toward the loading dock.
[beat 11] At the door, Miriam stops. Looks back at the empty case. At the whale. MIRIAM: Seventy years. ZOFIA: Move.
[beat 12] Miriam turns. Follows.

### SCENE s00282 | INT. GENERATION SHIP "TERNARY LANTERN" - HYDROPONIC SPINE - SHIP NIGHT
Characters: JUNO ABARA-WESTLUND, COMMANDER ISADORA FENN-KATSURAGI
[beat 0] A cylindrical corridor lined with trays of silver-leafed lettuce, each rotating slowly toward an artificial sun that is, tonight, a pale and dying amber. JUNO ABARA-WESTLUND (30s, botanist, gloves stained green) kneels at a leaking pipe. Beside her, an old gardener's robot of brass and canvas has stopped mid-sentence.
[beat 1] A second woman steps from the airlock: COMMANDER ISADORA FENN-KATSURAGI (50s, uniform pressed, hair cropped). She looks at the pipe. Looks at the amber light.
[beat 2] ISADORA: How long has the sun been failing? JUNO: Eleven hours. I filed it. ISADORA: I read the file. She did not say eleven. JUNO: She said eight. She was wrong. I corrected her.
[beat 3] She holds up a wrench. Her hand shakes, and it is not fear. It is the long fury of a woman who has been right in a ship that does not want her to be.
[beat 4] Isadora's eyes narrow. She takes a step closer, and the lettuce trays lean toward her like a congregation. ISADORA: You rewrote the commander's log. JUNO: I corrected it. ISADORA: Without permission. JUNO: Without waiting for her to die first.
[beat 5] The amber light stutters. The pipe hisses. Neither woman looks at it.

### SCENE s00283 | INT. FAMILY MINIVAN - DRIVE-THROUGH BREAKFAST LANE - MORNING
Characters: ROLAND ESPINOZA-HART, NEELAM ESPINOZA-HART, TAMSIN, FELIX
[beat 0] Rain on the windshield. Four people. One bag of hash browns that has already been opened. He is at the wheel, shouting into the speaker box while checking the mirror, the clock, and his phone all at once. His name is ROLAND ESPINOZA-HART (40s, tie half-knotted). She is in the passenger seat, shouting over him to the speaker box, with a coffee in one hand and a sleeping bag stuffed under her arm. This is NEELAM ESPINOZA-HART (40s, hospital scrubs). In the back, a girl of twelve, TAMSIN, kicks the seat. A boy of seven, FELIX, is standing on the seat, pressing his nose to the glass.
[beat 1] A sibling war has broken out over the hash browns. They each have one hand in the bag and one hand on the other's face.
[beat 2] Roland reaches back without looking and swats at both. Neelam reaches back, too, and her coffee spills down Roland's sleeve. He yelps. Tamsin shrieks. Felix falls off the seat onto the floor, still holding the bag.
[beat 3] ROLAND: Two number threes! NEELAM: Three! TAMSIN: He's eating mine! FELIX: It's MY bag! ROLAND: Everybody stop!
[beat 4] Nobody stops. The speaker box crackles. The car behind them honks. NEELAM: Roland, move up. ROLAND: I'm moving!
[beat 5] He is not moving. He is reaching for a napkin. Felix's foot is on the horn. The honk goes long. Neelam lunges for the foot. Tamsin grabs the napkin.
[beat 6] Roland swerves a half inch and hits the speaker post. The speaker box goes silent. All four freeze, mid-motion, a family in tableau.
[beat 7] Then everyone starts again.

### SCENE s00284 | INT. PEST-CONTROL TRAINING SEMINAR - HOTEL BALLROOM - DAY
Characters: HUMPHREY, BRANDYWINE-OYELOWO, PRIZZY, DELACROIX-NAKASHIMA
[beat 0] Folding chairs. A projector screen with a photograph of a cockroach the size of a thumb. A tray of lukewarm danishes. Two chairs are occupied. AUGUSTUS "HUMPHREY" BRANDYWINE-OYELOWO (50s, rumpled blazer, lanyard) is trying to open a danish with the ferocity of a man defusing a bomb. In the next chair, PRISCILLA "PRIZZY" DELACROIX-NAKASHIMA (30s, crisp polo, notebook) is writing in a hand so neat it looks typeset. At the front, nobody. The presenter has not arrived. The cockroach on the screen stares at the room with enormous composure.
[beat 1] HUMPHREY: Prizzy, I think we've been had. PRIZZY: Humphrey, we paid for the seminar. HUMPHREY: We paid for a seminar. We didn't pay for an absence. PRIZZY: I'm sure he's coming. HUMPHREY: It's been forty minutes. I've eaten two danishes. I have regrets. PRIZZY: Regrets, he says.
[beat 2] A pause. Humphrey looks at the screen. At the cockroach. HUMPHREY: That's a lot of bug. PRIZZY: That's an American cockroach. HUMPHREY: Is it? It looks Greek. PRIZZY: Humphrey. HUMPHREY: It's got the look. Stately. Doomed.
[beat 3] Prizzy puts down her pen. Humphrey takes a bite of danish. HUMPHREY: Anyone? The empty room does not answer. A fluorescent tube buzzes.
[beat 4] PRIZZY: I could present. HUMPHREY: You could. PRIZZY: I know all the slides. I've seen the deck. HUMPHREY: You have the deck? PRIZZY: It's on my laptop. HUMPHREY: Prizzy, that's the bravest thing anyone's said since the continental breakfast.
[beat 5] She stands. Smooths her polo. Walks to the front. Plugs in the cable. The projector flickers, then flares to life with a new slide: a diagram of a roach's digestive tract.
[beat 6] PRIZZY: Good morning, everyone. HUMPHREY: Oh, this is going to be good. Prizzy clears her throat, takes a breath.
[beat 7] The door at the back bangs in the wind, and nobody comes in. Humphrey slumps. Prizzy continues, regardless. PRIZZY: We're in the middle of a seminar. HUMPHREY: Prizzy, let the draft in. It might be the roaches.

### SCENE s00285 | INT. DRIVE-IN THEATER PROJECTION BOOTH - NIGHT
Characters: DOCTOR MARGUERITE OYELARAN-STACK, PADDY, GALLAGHER-NWOSU, SHERIFF HOLCOMB JABLONSKI, JUNIPER PARK-MBEKI, SAUL, ODETTE ABERNATHY-VOSS, MRS. ABERNATHY
[beat 0] A cramped concrete box above the snack bar. Two projectors, dusty. A shelf of film cans. One small window overlooking a lot of weeds and a blank screen leaning in the dark. Six people crowd the booth. Rain drums the roof. A lantern sits on an overturned can, throwing their shadows huge. DOCTOR MARGUERITE OYELARAN-STACK (50s, medical bag, cardigan) kneels by a figure lying on the floor under a coat. The coat covers the face of PATRICK "PADDY" GALLAGHER-NWOSU (30s, projectionist), who is not moving. SHERIFF HOLCOMB JABLONSKI (60s, rain slicker, flashlight) stands at the door, back to the wall, watching the stairs. TWO TEENAGERS huddle by the window. They are JUNIPER PARK-MBEKI (16, letterman jacket) and her brother SAUL (17, headphones around his neck, shaking). By the film shelf, an old woman, MRS. ODETTE ABERNATHY-VOSS (70s, shawl, a thermos clutched like a talisman).
[beat 1] MARGUERITE: He's gone. SAUL: He can't be. JUNIPER: Saul, don't. MRS. ABERNATHY: He was fine at the second reel.
[beat 2] HOLCOMB: Everybody quiet. They fall quiet. Rain. And below the rain, a slow scrape on the stairs. Something dragging.
[beat 3] SAUL: That's him. MARGUERITE: He's right there, Saul. SAUL: Then who's on the stairs? JUNIPER: Oh God. MRS. ABERNATHY: Don't say His name. Not in here.
[beat 4] HOLCOMB: Lock the door. JUNIPER: There's no lock! SAUL: Use the can! Use a film can! MARGUERITE: Hold on, hold on, everyone-- HOLCOMB: Get back from the door! SAUL: It's coming up! JUNIPER: Saul, shut UP!
[beat 5] MRS. ABERNATHY: It wants the projector! They all stop. Look at her. MRS. ABERNATHY: It always wants the projector.
[beat 6] The scrape reaches the top of the stairs. Stops. The lantern flame leans toward the door, as if drawn. HOLCOMB: Nothing there. Nothing there.
[beat 7] Something knocks. Three times. Soft. Almost polite. SAUL: Don't open it. MARGUERITE: Nobody's opening it.
[beat 8] The door handle turns. JUNIPER: It's locked, right? Tell me it's locked. HOLCOMB: There's no lock, I said!
[beat 9] The door swings in. Empty landing. Wet footprints on the concrete, leading in.
[beat 10] The footprints lead to Paddy's body. The coat slides slowly off his face. MARGUERITE: No pulse. I checked. I checked.
[beat 11] Paddy's eyes open. White. Wet. He looks at the projectors. PADDY: Roll it.
[beat 12] Every projector in the booth clatters to life by itself. Light erupts against the blank screen outside, and a figure of the sheriff, thirty feet tall, begins to move across it.
[beat 13] Holcomb looks over his shoulder at the window. At himself on the screen. He raises his flashlight. HOLCOMB: That's not me.
[beat 14] On the screen, the giant Holcomb turns and looks into the booth.

### SCENE s00286 | INT. COLLAPSED PARKING GARAGE, LEVEL P3 - NIGHT
Characters: WOMAN, RESCUER, BEATRIX
[beat 0] Dust hangs in the beam of a headlamp. Concrete slab above, a tilted pillar, an overturned sedan with its radio humming. A WOMAN hunches in the gap between slab and floor. Fifties, parka, scraped palms. She is wedged tight and breathing carefully. WOMAN: Slow in. Slow out.
[beat 1] The sedan radio crackles. A voice on a rescue frequency. RESCUER: Hello? Can anyone hear me? This is Ines Calderon, Urban Rescue Team Four.
[beat 2] The woman lifts her head. WOMAN: I hear you. RESCUER: Ma'am, what's your name? WOMAN: Beatrix. Beatrix Oyelowo-Marsh. RESCUER: Beatrix, are you hurt? BEATRIX: Wrist. Maybe rib. I'm stuck, not bleeding. RESCUER: Good. We're coming. Stay still. BEATRIX: I'm not going anywhere.
[beat 3] She almost laughs. Dust sifts down onto her shoulders. She lowers her head onto her arm and watches the beam of her headlamp tremble on the concrete.

### SCENE s00287 | EXT. RAILROAD WATER TOWER PLATFORM - DAY
Characters: WOMAN, ROSIE, HARTWELL-BANDA, ELIJAH TOBIAS CORNWALL, JED, OKONJO, PERALES-WINTERS, CORNELIUS DUNLEAVY-KEITA
[beat 0] A prairie town reduced to a siding, a tank on stilts, and one plank platform baking in the sun. A dog sleeps in the shade of a barrel. A WOMAN sits on a crate, shelling peas into a pan. ROSALIND "ROSIE" HARTWELL-BANDA (40s, calico dress, wide-brimmed hat). Calm. Too calm. An old man whittles a spoon on the steps. ELIJAH TOBIAS CORNWALL (70s, white beard, suspenders). A boy of twelve pumps the handle of the well. JEDEDIAH "JED" OKONJO (12, oversized boots). A young cowhand leans against the post, hat low. He chews a straw. SANTIAGO "SANTI" PERALES-WINTERS (20s, spurs, easy grin).
[beat 1] At the far end, a rider. A stranger on a gray horse. He reins in. Climbs down slow. His name is CORNELIUS DUNLEAVY-KEITA (50s, long coat, dusty). He nods to them all.
[beat 2] CORNELIUS: Afternoon. ROSIE: Afternoon. She keeps shelling. He ties the horse. Walks up the steps. Elijah scoots his boots out of the way.
[beat 3] CORNELIUS: Train due? ELIJAH: Four o'clock. CORNELIUS: That's a ways. ELIJAH: Hot day for waiting. Cornelius smiles. Takes off his hat and wipes his brow. Santi drops the straw. Picks up a new one.
[beat 4] CORNELIUS: That your boy at the pump? ROSIE: He's everybody's boy. Cornelius nods. Watches Jed work the handle. The water gushes into a trough.
[beat 5] JED: Mister, you want some? CORNELIUS: I'd be obliged. Jed fills a tin cup. Hands it up. Cornelius drinks. Slowly. Hands it back.
[beat 6] CORNELIUS: Peas. ROSIE: Peas. CORNELIUS: I always liked them.
[beat 7] She finally looks up. Meets his eye. ROSIE: Not these.
[beat 8] Cornelius lowers his hand. Santi straightens from the post. Elijah sets the knife on his knee. Jed backs away from the pump. CORNELIUS: Ah.
[beat 9] Rosie reaches into the pan. Under the peas, a revolver. She lifts it, calm as a woman lifting a teacup. ROSIE: Walk back to your horse. He does not move. ROSIE: Now, Mr. Dunleavy.
[beat 10] He turns. Takes the steps one at a time. Reaches the gray. Swings up. The dog lifts its head.
[beat 11] CORNELIUS: Tell the boy to keep pumping. He rides out.
[beat 12] Rosie sets the revolver back in the peas. Jed lets out a sob and sits right down in the dust.

### SCENE s00288 | EXT. CHERRY ORCHARD IN BLOSSOM - DAY
Characters: LAZARUS BARNABY-OKORO, HEZ, ARRINGTON-CHEN, PRUDENCE LOWELL-ADEYEMI
[beat 0] Pink petals on the wind. A weathered fence. A stone farmhouse with the shutters closed. Two men sit on the porch. LAZARUS BARNABY-OKORO (50s, shirtsleeves, suspenders, sharp eyes) whittles. Slow strokes. HEZEKIAH "HEZ" ARRINGTON-CHEN (60s, white mustache, bad leg stretched out) fans himself with a hat. A mockingbird sings. Petals fall.
[beat 1] HEZ: Pretty. LAZARUS: Pretty. Silence.
[beat 2] HEZ: Used to hate cherries. LAZARUS: You never said. HEZ: Didn't have to. He fans himself. Lazarus sets down the knife.
[beat 3] LAZARUS: Hez. HEZ: Mm. LAZARUS: Eleven years. HEZ: Twelve in August. LAZARUS: Twelve. Hez nods. A petal lands on his boot. He brushes it off.
[beat 4] HEZ: You ever think she'd come back? LAZARUS: No. HEZ: Me neither.
[beat 5] A quiet. The mockingbird stops. The wind drops. The orchard holds its breath. HEZ: Funny how the birds go quiet. LAZARUS: Mm. HEZ: Before weather. LAZARUS: Before something.
[beat 6] Lazarus rises. Walks to the porch rail. Looks down the lane.
[beat 7] Dust, far off. One rider. Coming slow. LAZARUS: Company.
[beat 8] Hez struggles up. Takes his hat. Stands beside him. They watch together.
[beat 9] The rider reaches the gate. Stops. A woman. Black dress, black hat, a rifle across the saddle. She dismounts. Her name is PRUDENCE LOWELL-ADEYEMI (40s, dust-streaked, hard-eyed). She walks to the porch. Stops at the bottom step.
[beat 10] PRUDENCE: Lazarus. LAZARUS: Prudence. PRUDENCE: Hezekiah. HEZ: Ma'am. She lets the rifle hang.
[beat 11] PRUDENCE: You thought I was dead. LAZARUS: We hoped. PRUDENCE: That's honest. HEZ: Pru, we can talk-- PRUDENCE: We talked. Twelve years ago. On this porch.
[beat 12] She climbs one step. PRUDENCE: You said you'd sell the land and split it. LAZARUS: We did. PRUDENCE: You said you'd send my share. LAZARUS: It never-- PRUDENCE: It never came.
[beat 13] Lazarus and Hez exchange a look. Hez's hand drifts toward his hat. HEZ: Pru, I don't know what you think--
[beat 14] PRUDENCE: I think the orchard is mine. Petals swirl. Lazarus's hand goes still on the rail.
[beat 15] LAZARUS: It's mine, Pru. I paid. PRUDENCE: With what? Silence. She climbs another step. PRUDENCE: With my share. LAZARUS: Pru.
[beat 16] PRUDENCE: I'm not here to kill you. HEZ: Thank God. PRUDENCE: I'm here to sit.
[beat 17] She climbs the last step. Looks at the empty chair. Sits. Lays the rifle across her knees.
[beat 18] PRUDENCE: Pour me a drink, Hez. Hez stares at her. Slowly reaches for the jug. Pours. His hand trembles. She takes the cup.
[beat 19] She drinks. Sets it down. PRUDENCE: Now. Tell me about the cherries.
[beat 20] Lazarus turns from the rail. Sits. Picks up the knife. Doesn't whittle. Just holds it. LAZARUS: They bloom early here. PRUDENCE: I remember.
[beat 21] The mockingbird starts again, slowly. A petal falls on the rifle barrel. None of them moves to brush it off.

### SCENE s00289 | INT. FLOWER WHOLESALER COLD ROOM - PRE-DAWN
Characters: PHIL, ADEWALE-STRAND, RAFI, KOWALCZYK-MENSAH, DESI, LINDGREN-OKAFOR
[beat 0] Buckets of roses. Fog from the compressor. A caged bulb. Three people in refrigerated coats stand around a steel table. A blueprint under their elbows. A thermos steaming. PHILOMENA "PHIL" ADEWALE-STRAND (50s, reading glasses) taps the blueprint with a pencil. RAFAEL "RAFI" KOWALCZYK-MENSAH (30s, tattooed forearm) stirs coffee with a pen. DESIREE "DESI" LINDGREN-OKAFOR (20s, headphones round neck) chews a rose petal.
[beat 1] PHIL: The armored van arrives at six. RAFI: Six-ten. DESI: Six-oh-five. PHIL: Six. RAFI: It's always late. DESI: Not on Thursdays. PHIL: It's Thursday. RAFI: It's a flower truck on Thursdays. DESI: They deliver the same floor. PHIL: They deliver at the same dock. RAFI: Different dock. DESI: Same dock, different door.
[beat 2] PHIL: Children. They stop. Rafi sips. Desi shrugs.
[beat 3] PHIL: Same dock. Same door. We hide in the roses. RAFI: In the roses. DESI: Thorns? PHIL: Dethorned. DESI: Oh.
[beat 4] RAFI: Desi. DESI: Rafi. They say each other's name together. Rafi grins. Desi flicks the petal at him. It lands on the blueprint.
[beat 5] PHIL: Five-forty. Positions. She folds the blueprint. Slides it into her coat. Rafi screws the lid on the thermos. Desi pulls her headphones up.
[beat 6] The compressor shudders. The light flickers once, then steadies.

### SCENE s00290 | INT. FLOODED CHURCH CRYPT - COMMAND POST - NIGHT
Characters: MAJOR WINIFRED BAPTISTE-OKONKWO, CAPTAIN LUCIAN HARGREAVES-DIALLO, STACKS, WILLOUGHBY, LIEUTENANT SIMONE ARCHAMBAULT-TSOSIE, CORPORAL REUBEN VASQUEZ-OLUWOLE, COLONEL
[beat 0] Vaulted brick. Knee-deep water. A table on cinderblocks, a field telephone, three lanterns. Mortar dust drifts down with each distant shell. MAJOR WINIFRED BAPTISTE-OKONKWO (40s, helmet off, tired) leans over a map. CAPTAIN LUCIAN HARGREAVES-DIALLO (30s, bandaged forehead) sits on the table edge. SERGEANT EUSTACE "STACKS" WILLOUGHBY (50s, immense, silent) cleans a rifle. LIEUTENANT SIMONE ARCHAMBAULT-TSOSIE (20s, radio operator) crouches by the field telephone. CORPORAL REUBEN VASQUEZ-OLUWOLE (20s, sentry) watches the stairs.
[beat 1] The field telephone buzzes. Simone grabs it. SIMONE: Command post. COLONEL: Status. SIMONE: Holding, sir. Water's rising. COLONEL: Hold until dawn. SIMONE: Sir, they're shelling the nave. COLONEL: Hold until dawn, Lieutenant.
[beat 2] The line clicks. Simone lowers the receiver. WINIFRED: Well? SIMONE: Dawn. LUCIAN: That's five hours. WINIFRED: Then we'll see five hours.
[beat 3] A shell hits the church. The crypt shakes. Mortar rains. A lantern swings, throws shadows. REUBEN: Closer. Closer. STACKS: Let them.
[beat 4] Winifred and Lucian step aside, water sloshing. They whisper over the map. WINIFRED: If the north wall goes, we pull back through the ossuary. LUCIAN: And if the ossuary floods? WINIFRED: Then we swim.
[beat 5] A third shell, so close the lanterns gutter. Reuben shouts from the stairs. REUBEN: Movement! Top step!
[beat 6] Everyone drops. Rifles up. Stacks rolls behind the table. Simone drags the phone under it.
[beat 7] A boot appears on the stairs. Then a hand, empty, open. WINIFRED: Hold fire! LUCIAN: Hold fire!
[beat 8] Nobody fires. A voice, thin and foreign, from the dark above. REUBEN: Show yourself!
[beat 9] The crypt shakes one more time. Then, for the first time in hours, silence. STACKS: That's the barrage ending. Dust settles. Water stills. Reuben lowers his rifle at last.
[beat 10] WINIFRED: Stand down. Rest in shifts. LUCIAN: Dawn? WINIFRED: Dawn. She turns to the map and does not look back at the stairs.

### SCENE s00291 | INT. SERVICE ELEVATOR - GRAND HOTEL - DAY
Characters: BERNADETTE QUARLES-IBARRA, FERDIE, ACHTERBERG-LOWE, KWABENA OSEI-DRUMMOND, LOTTIE FAIRCHILD-NAKAMURA
[beat 0] A brass box, six feet square, smelling of lilies. In the center, a four-tier wedding cake on a rolling cart, wrapped in plastic like a fragile patient. BERNADETTE QUARLES-IBARRA (50s, caterer's apron, clipboard) presses herself against the left wall. FERDINAND "FERDIE" ACHTERBERG-LOWE (60s, tuxedo, bow tie slightly crooked) holds the right. KWABENA OSEI-DRUMMOND (20s, bellhop pillbox hat) guards the buttons. LOTTIE FAIRCHILD-NAKAMURA (8, flower girl, wreath of daisies) sits cross-legged on the floor beside the cart, eating a rose off the top tier.
[beat 1] The elevator lurches. Everyone freezes. The cake sways. Bernadette's clipboard drops. Ferdie's hand shoots out to steady the cart. Kwabena stabs three buttons at once. Lottie licks icing off her wrist. The lift hums, hangs, hums again.
[beat 2] FERDIE: Is it stuck? BERNADETTE: It is not stuck. KWABENA: It's thinking.
[beat 3] LOTTIE: Can I have the other rose? BERNADETTE: No. FERDIE: Yes. KWABENA: Sir, with respect, it's her cake. FERDIE: It's my daughter's cake, and my granddaughter's rose. BERNADETTE: That rose is sixty dollars. LOTTIE: It tastes like soap.
[beat 4] The elevator drops six inches. The top tier slides. Four hands lunge. The cake settles. Nobody breathes.
[beat 5] Ferdie wipes a smear of frosting from his lapel and holds out his hand, palm up, to Bernadette. She looks at it. Then she hands him a plastic fork.

### SCENE s00292 | INT. FUNERAL PARLOR - VIEWING ROOM - NIGHT
Characters: JO, ADEBAYO-KRUSE, MALACHI TREVELYAN-SHAW, VOICE
[beat 0] Folding chairs. Carnations in a wire stand. A closed casket, brass handles dull. JOSEPHINE "JO" ADEBAYO-KRUSE (40s, black coat, sunglasses she doesn't remove) sits in the front row. She does not turn when the door opens.
[beat 1] MALACHI TREVELYAN-SHAW (50s, black suit, damp at the shoulders) stands in the doorway. He holds a small paper bag.
[beat 2] He walks the aisle. Sits two chairs from her. Sets the bag on the empty seat between them. She looks at it. Doesn't touch it.
[beat 3] A phone rings in her coat. She lets it go three rings. He watches her hand.
[beat 4] She takes it out. Answers. Holds it between them on speaker. VOICE: Is he there? JO: He's here. VOICE: Then you know.
[beat 5] She says nothing. Her thumb moves along the edge of the phone. He leans his elbows on his knees and looks at the casket.
[beat 6] VOICE: Open the bag. She doesn't. He does.
[beat 7] Takes out a single brass key. Holds it up to the lamp. The key turns slowly on its string. VOICE: That's the end of it.
[beat 8] Jo hangs up. Slips the phone back in her coat. She takes the key from his fingers, and for a moment their hands stay together.
[beat 9] She stands. Smooths her coat. He stays seated. She walks to the casket and lays the key on the lid, beside the carnations.
[beat 10] At the door she stops. He still hasn't looked at her. She goes out, and he sits on, staring at the key.

### SCENE s00293 | INT. COMMUNITY CENTER BASEMENT - FOLDING-CHAIR CIRCLE - NIGHT
Characters: DOLLIE, ENGSTROM-ACHEBE, CORNELL BEAUMONT-ASANTE, YASMINE KOWALSKI-HADDAD, TIBERIUS FAIRWEATHER-MWANGI, HARPER DELACROIX-YAMAMOTO
[beat 0] A low-ceilinged room with a linoleum floor and a coffee urn that has been warm since 1994. Posters of tide pools on cinderblock walls. Five chairs in a circle, one empty. FACILITATOR DOLORES "DOLLIE" ENGSTROM-ACHEBE (60s, cardigan, kind eyes, a voice trained to be even) sits with a clipboard on her knee. CORNELL BEAUMONT-ASANTE (40s, mechanic's hands scrubbed pink, work shirt with his name stitched on) grips a paper cup. YASMINE KOWALSKI-HADDAD (30s, scrubs, hair coming loose, eyes bright with no sleep) sits with her feet tucked under her. OLD MR. TIBERIUS FAIRWEATHER-MWANGI (80s, tweed cap in his lap, hearing aid whistling softly) leans on a cane. HARPER DELACROIX-YAMAMOTO (17, hoodie, earbuds around neck) has chosen the chair nearest the door.
[beat 1] DOLLIE: Thank you for coming. Who would like to start? CORNELL: I'll start. DOLLIE: Thank you, Cornell.
[beat 2] CORNELL: My wife used to say I never talked. Said I could run a whole day on three words. Truth is I just never knew where to put the rest of them. YASMINE: That's me with my mother. Eleven years of silence in the same kitchen. CORNELL: And now she's gone. YASMINE: And now the kitchen's loud.
[beat 3] TIBERIUS: What's that? DOLLIE: She says the kitchen's loud, Tiberius. TIBERIUS: Mine's the opposite. Mine hums. The refrigerator hums so much I think it's her.
[beat 4] HARPER: That's not weird. TIBERIUS: It's a bit weird, young man. HARPER: I'm not a man. TIBERIUS: Young person, then. Forgive me. HARPER: It's fine.
[beat 5] DOLLIE: Harper, would you like to share? HARPER: No. DOLLIE: That's all right. HARPER: Okay, maybe. A long pause. The urn gurgles.
[beat 6] HARPER: My dad's phone still gets texts. I read them sometimes. People tell him about their day. I don't know why I keep reading. YASMINE: You keep him company. HARPER: He's not there.
[beat 7] YASMINE: Neither's my mother, and I still set two cups. CORNELL: Two cups. YASMINE: Every morning. CORNELL: I do that with the truck. I leave the passenger seat clear. TIBERIUS: What for? CORNELL: In case. TIBERIUS: Ah.
[beat 8] DOLLIE: It's a good thing, to leave room. CORNELL: Is it? DOLLIE: I think so. I leave a chair in this circle every week. For whoever isn't here yet. HARPER: That's why there's an empty one. DOLLIE: That's why.
[beat 9] TIBERIUS: It's not empty. My Winnie sits there. Silence. Nobody laughs.
[beat 10] CORNELL: Mine too. YASMINE: Mine's in the kitchen. HARPER: Mine's on the phone. DOLLIE: Then we're full tonight.

### SCENE s00294 | INT. VICTORIAN CONSERVATORY, GLASS WINTER-GARDEN - 1887 - AFTERNOON
Characters: LADY CORDELIA WHITTINGTON-BANDELE, RUPERT ABERNETHY-ODUYA, MISS PHILIPPA LOVELACE
[beat 0] Palms press against the glass like prisoners. A fountain, dry. Wrought-iron chairs gone green with weather. LADY CORDELIA WHITTINGTON-BANDELE (30s, bustled gown of dove gray, a face trained to give nothing away) sits with a teacup untasted in her gloved hands. Across from her, MR. RUPERT ABERNETHY-ODUYA (40s, frock coat, whiskers meticulously combed) turns his hat in his fingers. By the fountain's rim, partly hidden by a palm, stands MISS PHILIPPA LOVELACE (20s, governess' grey wool, spectacles), who has been told to wait and is waiting.
[beat 1] RUPERT: Lady Cordelia, I must speak plainly. CORDELIA: Mr. Abernethy, you have never done otherwise, and I have never thanked you for it. RUPERT: Then permit me to continue. CORDELIA: Permit nothing. Say it.
[beat 2] He rises. She rises. Philippa shrinks behind the palm. Rupert crosses the tiles in two strides and Cordelia steps back until her skirts catch the iron chair. It scrapes. The three of them freeze, an arrangement of statues in a house of glass.
[beat 3] RUPERT: Miss Lovelace, you may go. PHILIPPA: Yes, sir. CORDELIA: No, Philippa. Stay. RUPERT: Cordelia--
[beat 4] CORDELIA: Mr. Abernethy, whatever you have to say about the letters, you may say before my governess. She wrote them.
[beat 5] Philippa lifts her chin. The palm leaves stir, though there is no wind. Rupert's hat slips from his hand and rolls, round and round, to the dry fountain's edge.

### SCENE s00295 | INT. PARKING STRUCTURE ROOFTOP - DAWN
Characters: LEONIE ASANTEWAA-VOGEL, RETTA, OKOYE-BLOOM
[beat 0] A rental van. Two women lean on its bumper. Between them, a gym bag. LEONIE ASANTEWAA-VOGEL (40s, bomber jacket) lights a cigarette. Her hands are steady. MARGUERETTA "RETTA" OKOYE-BLOOM (30s, hoodie) watches the sun come up over a gray city.
[beat 1] Leonie offers the pack. Retta shakes her head. LEONIE: You hungry? RETTA: No. LEONIE: You should eat. RETTA: Later.
[beat 2] Leonie drags on the cigarette. Looks at the bag. LEONIE: She wanted it split three ways. RETTA: She wanted a lot of things. LEONIE: She called me last night. RETTA: She called me, too.
[beat 3] Silence. A pigeon lands on the van roof. Walks the length of it.
[beat 4] LEONIE: She said she was sorry. RETTA: She said that to me, too. Leonie flicks the ash. Retta stares at her shoes.
[beat 5] LEONIE: Nobody's coming. RETTA: I know. LEONIE: So we could just go. RETTA: We could.
[beat 6] Neither moves. The pigeon takes off.
[beat 7] Retta bends. Unzips the bag a few inches. Looks. Zips it shut. She hands the strap to Leonie, and Leonie takes it, and for a moment neither lets go.
[beat 8] LEONIE: Which way? RETTA: You pick.
[beat 9] Leonie opens the van door. Retta gets in. Leonie follows. They sit with the engine off and the sun on the windshield.

### SCENE s00296 | INT. NIGHT FERRY, LOWER CAR DECK - NIGHT
Characters: LORCAN BRENNAN-OSEI, NELLWYN PRYCE-ADEYEMI, TAD, MBEKI-LINDEN
[beat 0] Rows of parked cars. Chains rattle. Fog presses on the stern gate. A single fluorescent tube hums over three folding chairs where the deckhands drink coffee. LORCAN BRENNAN-OSEI (50s, deckhand) pours from a thermos. NELLWYN PRYCE-ADEYEMI (20s, new hire, hi-vis vest) sits on the chair edge. THADDEUS "TAD" MBEKI-LINDEN (60s, captain's patch on his sleeve) rubs his eyes.
[beat 1] LORCAN: You hear that? NELLWYN: Hear what? LORCAN: Knocking. TAD: Engine. LORCAN: Not the engine. Knocking. Under us. NELLWYN: Under the deck? LORCAN: Under the hull.
[beat 2] TAD: Lorcan, it's the sea. LORCAN: The sea doesn't knock three times. NELLWYN: Maybe it's a buoy. TAD: Maybe it's a buoy. LORCAN: It's not a buoy. TAD: Then what is it?
[beat 3] LORCAN: Last crossing, it knocked four times. Before that, five. NELLWYN: Counting down? LORCAN: Counting something.
[beat 4] TAD: Stop frightening the girl. NELLWYN: I'm not frightened. TAD: Then you've not been listening.
[beat 5] LORCAN: Three. That's three. Tonight it's three. NELLWYN: And after three? LORCAN: Two, one. NELLWYN: And after one? LORCAN: That's what I'm asking him.
[beat 6] TAD: After one, we don't dock.
[beat 7] Silence. The fluorescent tube flickers. The fog at the stern gate seems to lean.
[beat 8] NELLWYN: That's a joke. TAD: It's a rule. My father taught me. When it counts down to one, you turn the ship around. NELLWYN: Tonight is three. LORCAN: Tonight is three. TAD: Then pray for a long crossing.
[beat 9] A single knock, soft, from under the deck. NELLWYN: That was two. LORCAN: That was two.
[beat 10] TAD: Turn her around. LORCAN: Captain? TAD: Turn. Her. Around.

### SCENE s00297 | INT. COLD-STORAGE LOCKER, FISH MARKET - NIGHT
Characters: DEL, OKONKWO-REYES, TOBY, HARLAN-AMADI, SABINE ROUSSEAU-ADEKUNLE
[beat 0] Steel racks. Crates of ice. Breath fogging. A swinging bulb.
[beat 1] Two figures wedge the door shut with a pry bar. DELPHINE "DEL" OKONKWO-REYES (30s, rubber apron) shoves a crate against it. TOBIAS "TOBY" HARLAN-AMADI (50s, flannel, grizzled) leans on the bar, panting.
[beat 2] Something THUDS on the other side of the door. Once. DEL: Is it holding? TOBY: It's holding.
[beat 3] THUD. The door shivers.
[beat 4] DEL: Okay. Okay. Don't scream. TOBY: Nobody make a sound. DEL: Who are you talking to? TOBY: Habit. Silence. Ice drips. The bulb sways.
[beat 5] DEL: How long? TOBY: Till morning crew. DEL: That's six hours. TOBY: Then we wait six hours.
[beat 6] Another THUD. Dents the steel. Del backs away. Her heel hits a crate. Cold light flickers across her face.
[beat 7] DEL: It's only the compressor. TOBY: That's not the compressor.
[beat 8] The bulb goes out. Darkness. Breathing. A slow, wet scraping from the far end of the locker.
[beat 9] From the dark: a voice, gentle. SABINE: Del?
[beat 10] Del freezes. Toby grabs her sleeve. TOBY: Don't. SABINE: Del, it's me. Open the door. DEL: Sabine?
[beat 11] The bulb flares. At the end of the aisle, in the white fog, stands SABINE ROUSSEAU-ADEKUNLE (30s, same apron as Del, hair wet, lips blue). She smiles. Her feet do not touch the floor.
[beat 12] Del makes a small sound. Toby heaves the pry bar up like a club.
[beat 13] SABINE: Oh, don't be afraid. I've come to warm up. She drifts forward. The ice on the racks cracks. Frost races up the walls.
[beat 14] TOBY: Stay back! DEL: She's dead! She drowned in March! SABINE: Del.
[beat 15] She extends a hand. Del's breath stops.
[beat 16] Toby swings the bar. It passes through Sabine and rings against a steel rack. Sabine looks at him, hurt. SABINE: That wasn't kind.
[beat 17] The THUD on the door comes a third time and the door bursts open on the rush of morning crew: sunlight, shouting. Sabine vanishes in the light like breath on glass.
[beat 18] Toby drops the bar. Del falls to her knees. The ice on the racks begins, quietly, to melt.

### SCENE s00298 | INT. CALL CENTER - COMPLAINTS DEPARTMENT - DAY
Characters: CYPRIAN OYELARAN-BLOOM, AGGIE, VANTERPOOL-NKEMELU, MOE, LINDQVIST-SANTOS, ROSAMUND FEATHERSTONE-ABIOLA
[beat 0] Cubicles. Headsets. A banner reads "WE LISTEN!" in sagging letters. CYPRIAN OYELARAN-BLOOM (30s, headset askew) slams his desk. AGATHA "AGGIE" VANTERPOOL-NKEMELU (50s, supervisor, cardigan, mug that says WORLD'S OKAYEST BOSS) strides over. MORDECAI "MOE" LINDQVIST-SANTOS (20s, intern, tie too wide) trails behind her with a notepad. ROSAMUND FEATHERSTONE-ABIOLA (60s, a customer) is audible only through the headset.
[beat 1] CYPRIAN: Ma'am, I understand. ROSAMUND: You do NOT understand! CYPRIAN: Ma'am, the toaster is under warranty. ROSAMUND: It exploded! CYPRIAN: Ma'am, "exploded" is not a covered event.
[beat 2] AGGIE: Cyprian. Hold. CYPRIAN: She says it exploded. AGGIE: Did it? CYPRIAN: She sent a photo.
[beat 3] He tilts the monitor. A blackened ceiling, a toast-shaped hole. MOE: Is that a toast-shaped hole?
[beat 4] AGGIE: Moe, take a note. MOE: What note? AGGIE: "Do not tell her it is covered." MOE: Why not? AGGIE: Because then we'd owe her a ceiling.
[beat 5] Cyprian unmutes. CYPRIAN: Ma'am, we are going to send you a brand-new toaster. ROSAMUND: A TOASTER? CYPRIAN: A better toaster. ROSAMUND: I want a ceiling!
[beat 6] Aggie snatches the headset off Cyprian. Puts it on. Smiles at the monitor.
[beat 7] AGGIE: Mrs. Featherstone-Abiola, it's Agatha. Have you tried the hat? ROSAMUND: ...What hat? AGGIE: The complimentary hat.
[beat 8] A pause. Moe and Cyprian stare at her. ROSAMUND: Is it a nice hat? AGGIE: It's a very nice hat.
[beat 9] She hangs up. Takes off the headset. Cyprian and Moe watch her like she has levitated.
[beat 10] CYPRIAN: There's no hat. AGGIE: Moe. Find a hat.

### SCENE s00299 | INT. TRAFFIC COURT - HEARING ROOM 4 - DAY
Characters: JUDGE PERPETUA OSEI-LANGSTROM, BART, KENYATTA-VOSS, PROSECUTOR ILSE NAKAGAWA-OYELOWO
[beat 0] Fluorescent glare. Beige carpet. A flag leaning slightly. A bailiff's chair, empty. JUDGE PERPETUA OSEI-LANGSTROM (60s, robe over a cardigan, reading glasses on a chain) peers down at a file. At the defendant's table, BARTHOLOMEW "BART" KENYATTA-VOSS (40s, wrinkled blazer, a cardboard tube under his arm) stands very straight. Across the aisle, PROSECUTOR ILSE NAKAGAWA-OYELOWO (30s, immaculate, a binder as thick as a phone book) leafs through exhibits.
[beat 1] BART: Your Honor, I'd like to submit the exhibit. JUDGE PERPETUA: What exhibit, Mr. Kenyatta-Voss?
[beat 2] Bart pulls the cardboard tube open. Out slides a rolled-up poster, which unfurls across the table in a slow, majestic curl: a hand-drawn map of an intersection, annotated in four colors of marker, with arrows, sunbeams, and a smiling cartoon sedan. Ilse gapes. Judge Perpetua removes her glasses, polishes them, puts them back on.
[beat 3] Bart steps forward to flatten a corner, knocking Ilse's binder to the floor. She kneels to gather it, he kneels to help, their heads nearly collide, and the poster slides off the table and onto Judge Perpetua's bench, where it covers her gavel.
[beat 4] ILSE: Objection. JUDGE PERPETUA: On what grounds? ILSE: The sedan has a face. JUDGE PERPETUA: Overruled. Mr. Kenyatta-Voss, proceed.
[beat 5] BART: Your Honor, as the map shows, the stop sign was obscured by a sycamore. ILSE: It was obscured by a sycamore he planted. BART: Prove it.
[beat 6] ILSE: I have the permit. She holds up a stapled paper. Bart looks at it. Looks at the poster. Looks at the cartoon sedan, which smiles back.
[beat 7] BART: I'll pay the fine. JUDGE PERPETUA: Forty dollars, payable at the window.
[beat 8] She raps the gavel through the poster. It makes a small soft tearing sound.
