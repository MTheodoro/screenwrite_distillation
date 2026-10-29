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
Write the scenes as JSON Lines (one object per line) in THREE files with the Write tool: scenes 1-30 to /home/user/screenwrite-analyzers/data/analyzers/labels/desc/part_000_a.jsonl, 31-60 to /home/user/screenwrite-analyzers/data/analyzers/labels/desc/part_000_b.jsonl, the rest to /home/user/screenwrite-analyzers/data/analyzers/labels/desc/part_000_c.jsonl. No other text in the files. Reply only with "done N".

## Scenes

### SCENE s00020 | INT. LIGHTHOUSE FOG-SIGNAL ROOM - NIGHT
Characters: IGNATIUS BRAND, TAMSIN OKORO
[beat 0] The brass horn sits silent. Rain ticks on the glass. IGNATIUS BRAND (60s, salt-cracked hands, wool cap) pours tea for TAMSIN OKORO (20s, relief keeper, soaked parka).
[beat 1] TAMSIN: Quiet night. IGNATIUS: Always is, after the horn stops. They sip. The kettle ticks as it cools. Tamsin smiles. TAMSIN: Thought it'd be worse out here.
[beat 2] Ignatius stares at the floor between her boots. Water pools there. Too much water, and it runs uphill toward the horn.
[beat 3] IGNATIUS: You came up alone? TAMSIN: Yes. Why?
[beat 4] Below them, slow wet footsteps climb the iron stairs. Tamsin and Ignatius both freeze, cups halfway to their mouths.
[beat 5] The horn BLARES on its own. They scramble for the hatch, collide, and drag it shut together. IGNATIUS: That's not the tide.

### SCENE s00021 | INT. COMMUNITY POOL SNACK BAR - DAY
Characters: BEATRIX LOMBARDI, DESMOND, PIPPA, NANA ROSALIND, LIFEGUARD, KOFI MENSAH
[beat 0] Chlorine haze. A hand-lettered menu. Rain drums the skylight and the pool outside is closed for the day. BEATRIX LOMBARDI (40s, harried, whistle around her neck) wipes the counter. Her kids sit on stools: DESMOND (12, serious, goggles pushed up on his forehead) and little PIPPA (6, one flip-flop on).
[beat 1] BEATRIX: Who ate the last pretzel? PIPPA: Not me. DESMOND: She did. There's salt on her chin. Pippa wipes her chin with her whole sleeve. BEATRIX: Pippa. PIPPA: It was a small pretzel.
[beat 2] NANA ROSALIND (70s, plastic rain bonnet, enormous purse) pushes in through the swinging door, shaking water off her arms. NANA ROSALIND: Nobody told me the pool was closed. I swam in the lobby for ten minutes. DESMOND: You didn't. NANA ROSALIND: Figuratively.
[beat 3] Beatrix pours her a coffee. Nana Rosalind sits, takes Pippa's lone flip-flop, and studies it. NANA ROSALIND: Where's the other one? PIPPA: Lost.
[beat 4] A crackle from the wall speaker. LIFEGUARD: Attention. Someone's goldfish is in the deep end. In a bag. Please claim it.
[beat 5] Pippa slides off her stool. PIPPA: Mine. BEATRIX: You brought a fish to the pool? PIPPA: He wanted to swim. DESMOND: It was a good idea, actually.
[beat 6] Beatrix looks at him, then laughs, helpless. Nana Rosalind pats her hand. NANA ROSALIND: Go get the fish, Beatrix. I'll watch the counter.
[beat 7] A teenager, KOFI MENSAH (16, lifeguard polo, dripping), leans through the pass-through, holding up a sagging bag with a small orange fish. KOFI: Whose is this? He seems calm. PIPPA: That's Mr. Bubbles. He's always calm.
[beat 8] Kofi hands the bag over. Pippa cradles it like an egg. BEATRIX: Thank you, Kofi. I'm so sorry. KOFI: It's the most exciting thing today.
[beat 9] Rain softens on the skylight. Everyone watches the fish circle once, then settle.

### SCENE s00022 | INT. ABANDONED DRIVE-IN PROJECTION BOOTH - NIGHT
Characters: YUSUF HAMDAN, LUCKY, MORROW, BARNABY QUILL, DAHLIA REYES, MAGNUS WICK
[beat 0] A cinderblock room, the size of a closet. A dead projector the color of old teeth squats in the middle. Spray-painted names cover the walls. A battery lantern throws everything into hard shadow. YUSUF HAMDAN (17, thin, nervous laugh, a cheap digital camera on a strap) sits on an overturned crate. Beside him, LUCINDA "LUCKY" MORROW (17, bleached hair, scraped knees) plays with a lighter. BARNABY QUILL (18, built like a linebacker, soft voice) blocks the doorway. DAHLIA REYES (16, hoodie, headphones around her neck) holds a flask she shouldn't have. MAGNUS WICK (17, varsity jacket, too clean) stands apart from them.
[beat 1] LUCKY: You said you'd be here at nine. MAGNUS: I was here at nine. DAHLIA: You were not here at nine, I was here at nine, I sat alone for twenty minutes-- YUSUF: It's not a big deal, we're all here now-- LUCKY: It is a big deal! We swore. After graduation, nobody leaves without-- BARNABY: Lucky. LUCKY: --without saying it to everyone, that's the rule! MAGNUS: There's no rule. You made it up. DAHLIA: She did not make it up, we all signed the wall.
[beat 2] Dahlia jabs a finger at the concrete. Under a layer of paint, five signatures sit in a ragged circle. YUSUF: Technically, I signed it in marker. Pretty permanent.
[beat 3] MAGNUS: I'm going to Dartmouth. Fine? I got in. It's done. I didn't want to tell you like this.
[beat 4] Silence. Then everyone speaks at once. LUCKY: Dartmouth? BARNABY: You said Ohio State. DAHLIA: Why would you lie about that? YUSUF: Congratulations, I guess? MAGNUS: Because I knew you'd all look like this!
[beat 5] Barnaby steps in from the doorway. Magnus doesn't back up. BARNABY: Like what? MAGNUS: Like I already left.
[beat 6] Lucky snaps the lighter shut. The lantern flickers.
[beat 7] Yusuf lifts the camera and, without asking, takes one picture of all of them. The flash leaves white afterimages. Nobody says anything.

### SCENE s00023 | INT. FREIGHT ELEVATOR, CANNERY - NIGHT
Characters: SAUL VERHOEVEN, NADIA PRUITT, EMEKA OSEI
[beat 0] Steel cage. Flickering bulb. Stuck between floors. SAUL VERHOEVEN (50s, grey suit, bleeding sleeve) leans on the wall. NADIA PRUITT (30s, tactical vest, gun lowered) watches the hatch. Beside her, a young courier, EMEKA OSEI (20s, backpack hugged tight).
[beat 1] NADIA: Nobody touches the panel. EMEKA: Is it bad? Your arm? SAUL: It's fine, kid.
[beat 2] Nadia cranes toward the ceiling. Dust drifts down. NADIA: Come on, come on. Not now.
[beat 3] Boots thump overhead. Then stop. Then nothing. EMEKA: They're gone? NADIA: Be still.
[beat 4] Saul slides the backpack from Emeka's arms. Emeka lets him. SAUL: Should've taken the stairs.
[beat 5] The cage lurches. Slowly, it starts to rise.

### SCENE s00024 | EXT. GLACIER CREVASSE LEDGE - DAWN
Characters: TOBIAS ANSELM, MARGUERITE DELACROIX-ODUYA, RANGER
[beat 0] A blue throat of ice drops away into dark. Forty feet down, on a shelf barely wider than a door, a man and a woman cling together in the frozen quiet. His left leg is bent wrong. She has one crampon and a rope that ends in frayed threads.
[beat 1] TOBIAS ANSELM (40s, beard crusted white) tries to sit upright. He gasps and slides back against the wall. MARGUERITE DELACROIX-ODUYA (30s, climbing helmet cracked at the brow) crouches beside him, working a splint from a tent pole and webbing. She does not look at his face. She looks at the knot.
[beat 2] TOBIAS: Leave it. Go up. MARGUERITE: Shut up and hold the pole.
[beat 3] He holds it. His hands shake. She pulls the strap tight and he screams, a sound that echoes down and never comes back.
[beat 4] A hiss from her chest pocket. She freezes, then fumbles out a handheld radio. RANGER: Team Four, Base. We have you on the thermal. Hold position. Helicopter wheels up in forty.
[beat 5] Relief breaks across her face. She laughs, a cracked sound, and kisses the radio. MARGUERITE: Copy, Base. Two alive. One leg. Please hurry. RANGER: Copy two alive. Wind is picking up on the ridge. Stay low.
[beat 6] She turns to him, grinning for the first time. MARGUERITE: Forty minutes. You hear that? TOBIAS: I heard.
[beat 7] He says it too calmly. She notices his lips, which are turning grey. She tears off her glove and presses two fingers to his neck. MARGUERITE: No. No no no. Stay with me, you stubborn old goat.
[beat 8] He opens his eyes. Faintly, he smiles.
[beat 9] Above them, the ice groans. A fine rain of snow sifts down. She pulls him against her chest and tucks her jacket around them both.
[beat 10] RANGER: Team Four, Base. Weather window closing. Say again your status. She stares at the radio, then at the dark beyond the ledge. She keys it. MARGUERITE: Base, we are not going anywhere. Tell them to hurry.
[beat 11] She sets the radio on his chest, where he can hear it. The ice groans again, and this time something far below answers.

### SCENE s00025 | INT. MOBILE SURGICAL TRUCK, FAIRGROUND - NIGHT
Characters: IMELDA CASTELLANOS-BRIGHT, TOOTS, VASSILIEV, WENDELL, DISPATCH
[beat 0] Steel walls. Fluorescent hum. Outside, a carousel plays a warped waltz. DR. IMELDA CASTELLANOS-BRIGHT (50s, silver braid, precise) scrubs at a stainless sink. Across the narrow room, ANTON "TOOTS" VASSILIEV (30s, medic, tattooed forearms) wheels in a gurney. A sheet covers the shape on it.
[beat 1] IMELDA: Toots. Slower. TOOTS: Sorry, Doc. Floor's uneven. IMELDA: It's a truck in a field. Everything's uneven.
[beat 2] Toots locks the gurney. The carousel music thins, then swells. TOOTS: Vitals are stable. Pressure's low, but he's talking. IMELDA: Who is he? TOOTS: Calls himself Wendell. Fell off the Ferris wheel. IMELDA: Fell. TOOTS: That's his word.
[beat 3] Imelda dries her hands. She folds the sheet back. WENDELL (60s, pale, cheerful, fairground jacket) squints up at the lights. WENDELL: Hello, hello. Don't go to any trouble. IMELDA: Mr. Wendell, I'm Dr. Castellanos-Bright. Where does it hurt? WENDELL: Nowhere, really. Funny that.
[beat 4] IMELDA: Pain meds? TOOTS: None. He refused. IMELDA: Refused? WENDELL: I like to feel where I am.
[beat 5] She checks his pupils. He follows her light with unnerving ease. Toots shifts on his feet.
[beat 6] TOOTS: Doc, a word? IMELDA: Say it here. TOOTS: It's not a thing for here.
[beat 7] She holds his gaze. Then she walks him to the corner, out of Wendell's earshot. IMELDA: What.
[beat 8] TOOTS: Fall was sixty feet. He landed on concrete. IMELDA: And? TOOTS: Nothing's broken. Not a rib. Not a bruise. Imelda looks back at Wendell. He waves. IMELDA: Then he's lucky.
[beat 9] TOOTS: Doc, I felt for a pulse four times. I couldn't find one.
[beat 10] The radio on the wall CRACKLES. DISPATCH: Mobile Two, dispatch. Ambulance en route, ETA fifteen. Say your patient's condition. Imelda keys the radio, eyes on Wendell. IMELDA: Dispatch, patient is stable. Repeat, stable.
[beat 11] DISPATCH: Copy. Be advised, caller says the Ferris wheel victim was pronounced at the scene. Please confirm identity. Silence. The carousel waltz winds down to a single note. TOOTS: Doc. IMELDA: I heard.
[beat 12] She turns. Wendell is sitting up, the sheet pooled at his waist. He's still smiling. His chest does not rise or fall.
[beat 13] WENDELL: Dr. Castellanos-Bright. I think I'd like some of that pain medicine after all. IMELDA: Why's that, Mr. Wendell? WENDELL: Because it's starting.
[beat 14] He looks down at his hands. They are going translucent, like wax over a flame. TOOTS: Doc, back away.
[beat 15] Imelda doesn't. She reaches out and takes Wendell's hand, which is already cooling.
[beat 16] IMELDA: Toots, tell dispatch to cancel the ambulance. TOOTS: Doc-- IMELDA: Tell them he's been pronounced.
[beat 17] Toots stares at her. Then he lifts the radio, and his voice breaks. TOOTS: Dispatch, Mobile Two. Cancel the ambulance.
[beat 18] WENDELL: Thank you for staying.
[beat 19] The sheet settles over an empty gurney. Outside, the carousel starts again from the beginning.

### SCENE s00026 | INT. PIGEON LOFT, ROOFTOP - DAWN
Characters: STASYS BIRKAVS, DONNIE FUSCO, FAT LEO ARMBRUSTER
[beat 0] Cooing. Feathers. Three men in a cage of chicken wire. STASYS BIRKAVS (50s, flat cap, careful) feeds grain from a tin. DONNIE FUSCO (30s, tracksuit) and FAT LEO ARMBRUSTER (40s, enormous, quiet) sit on upturned buckets.
[beat 1] STASYS: Nobody here is angry. Understand? DONNIE: Nobody's angry. STASYS: The money is a number on paper. I like birds more than numbers. LEO: Birds don't lend. STASYS: No. They return. That is the difference.
[beat 2] DONNIE: So we're square? Everyone square? STASYS: Of course. Leo, the bucket.
[beat 3] Leo lifts his bucket. Underneath, a revolver, and beneath that, an envelope fat with cash.
[beat 4] Donnie's smile slides off his face.

### SCENE s00027 | EXT. FROZEN ORCHARD OF GLASS APPLES - DUSK
Characters: WILHELMINA THRALE, FINN CARRAWAY
[beat 0] A hillside of trees that grew crystal fruit and never stopped. Every apple holds a small captured flame. The snow around them glows amber.
[beat 1] WILHELMINA THRALE (70s, thick gray cloak, a ladder strapped to her back) climbs to the highest branch. She plucks one apple, careful as a surgeon, and drops it into her satchel. It does not clink. It purrs.
[beat 2] Below her, a boy waits. FINN CARRAWAY (11, bare ears, no gloves) holds the base of the ladder.
[beat 3] WILHELMINA: You've not eaten. FINN: I'm fine. WILHELMINA: There's bread in my left pocket.
[beat 4] Finn doesn't reach for it. Instead, he stares at the apples, his breath fogging. FINN: They're getting dimmer. WILHELMINA: They do, in winter. FINN: Mam says they were bright all year, when Da was alive.
[beat 5] Wilhelmina lowers herself rung by rung. At the bottom she stands quietly beside him, close enough that her cloak brushes his shoulder. WILHELMINA: Your Da climbed this ladder every night.
[beat 6] Finn picks at a thread on his sleeve. FINN: Did he ever fall? WILHELMINA: Twice. Never told your mother.
[beat 7] Finn almost smiles. He takes the bread from her pocket without asking and breaks it in two, offering her the bigger half.
[beat 8] She takes the smaller. He pretends not to notice.
[beat 9] An apple above them flares, bright as noon, then settles into a soft glow. They both look up. FINN: Was that him?
[beat 10] Wilhelmina folds the cloak tighter around the boy's shoulders. She says nothing. She keeps her hand there.

### SCENE s00028 | INT. BACKSTAGE, SUBMARINE-THEMED MUSEUM GIFT SHOP - NIGHT
Characters: ELOISE VANTERPOOL, ROMAN ASTOR-LIN, HESTER PENHALLOW, COLM BRADSHAW
[beat 0] A cramped storeroom of plush squid, periscope keychains, and cardboard boxes marked FRAGILE. A string of party lights hangs over a folding table of wilting cupcakes. ELOISE VANTERPOOL (30s, rolled-up sleeves, name tag reading "Ask Me About Barnacles") counts stock with a clicker. At the doorway, ROMAN ASTOR-LIN (30s, rumpled blazer, wet from the rain) lingers with a bouquet of grocery-store carnations.
[beat 1] ROMAN: Hi. ELOISE: You're late. ROMAN: I know. ELOISE: By three years, in fact. ROMAN: I know.
[beat 2] She keeps clicking. He sets the carnations on the table, beside a cupcake that has "CONGRATS" piped across it in blue. ROMAN: Whose party? ELOISE: Retirement. Dr. Penhallow. Thirty-one years of squid.
[beat 3] ROMAN: I came to see you. ELOISE: Ro, don't.
[beat 4] ROMAN: Eloise, listen. I didn't leave because I wanted to. My mother got sick, I flew to Singapore, and every time I tried to write the letter it came out like a lie. So I stopped trying. And then it was a year. And then it was too long. ELOISE: You could have called. ROMAN: I could have done a lot of things. I'm not asking you to forgive me. I'm only asking you to let me stand here for a minute.
[beat 5] She stops clicking. She sets the clicker down and finally turns.
[beat 6] ELOISE: Your mother? ROMAN: She passed in March. ELOISE: I'm sorry. ROMAN: Thank you.
[beat 7] ELOISE: Ro... ROMAN: Yeah? ELOISE: You still have that stupid scarf? ROMAN: It's in the car.
[beat 8] Laughter from the corridor. A door bangs open and a crowd of coworkers fills the storeroom with noise. At the front, a new arrival: DR. HESTER PENHALLOW (60s, tweed, bow tie shaped like a seahorse), glowing with champagne.
[beat 9] PENHALLOW: Eloise! There you are! Is this the famous Roman? ELOISE: Dr. Penhallow, he's not-- PENHALLOW: You've been talking about him for three years. Have a cupcake, dear boy.
[beat 10] Roman looks at Eloise. She does not meet his eyes, but she does not deny it. ROMAN: Thank you. I will.
[beat 11] Behind them, a grinning intern, COLM BRADSHAW (20s, lanyard, hopeful), holds up a phone. COLM: Group photo! Everyone squeeze in!
[beat 12] Eloise steps beside Roman. Their shoulders touch. Neither moves away.
[beat 13] ELOISE: You're buying dinner. ROMAN: Anything. ELOISE: Anywhere? ROMAN: Anywhere.
[beat 14] Colm's flash goes off. For one frame, they are both laughing.
[beat 15] PENHALLOW: Lovely. Now, who wants to hear about the giant squid? Groans from everyone. Eloise leans against Roman and whispers. ELOISE: Run.
[beat 16] They slip out through the storeroom's back door. The party lights keep swaying behind them.

### SCENE s00029 | INT. AIR TRAFFIC CONTROL TOWER, SMALL REGIONAL AIRPORT - NIGHT
Characters: OZZIE, FAIRWEATHER, PRU, MARTIN ESPERANZA, JUNE TAKAHASHI, PILOT
[beat 0] A glass-walled octagon above a dark runway. Radar scope glows green. A cold cup of coffee sits beside a ham sandwich with one bite out of it. OSWALD "OZZIE" FAIRWEATHER (60s, headset, cardigan) sits at the console, steady and unhurried. Next to him stands his granddaughter, PRUDENCE "PRU" FAIRWEATHER (17, school uniform, backpack), holding a notebook. She is supposed to be doing homework. She is not. Two others fill the cramped room. One is MARTIN ESPERANZA (30s, shift supervisor, tie loosened), who hovers over the radar. The other is a trainee, JUNE TAKAHASHI (19, apron over uniform, nervous), who clutches a clipboard.
[beat 1] OZZIE: Pru, if you're going to watch, watch properly. Come around here. PRU: Grandpa, I'm fine. OZZIE: Come on.
[beat 2] She steps beside him. He nods to the scope. OZZIE: That blip is a Cessna. November-Four-Two-Seven. See how she drifts? PRU: Why? OZZIE: Crosswind. He's fighting it.
[beat 3] Pru leans closer. Her breath fogs the glass.
[beat 4] PILOT: Tower, Cessna Four-Two-Seven, ten miles out, requesting landing. Ozzie squeezes the mic. OZZIE: Four-Two-Seven, Tower, runway two-seven, wind two-six-zero at eighteen gusting twenty-five. Say your fuel state. PILOT: Tower, Four-Two-Seven, thirty minutes of fuel. We're good.
[beat 5] MARTIN: Thirty minutes. In that wind. JUNE: Should I call the fire crew? MARTIN: Not yet.
[beat 6] Ozzie hands the headset to Pru. PRU: Grandpa, no. OZZIE: Just say what I say. "Four-Two-Seven, cleared to land."
[beat 7] She hesitates, then pulls the headset on. Her voice shakes. PRU: Four-Two-Seven, cleared to land.
[beat 8] PILOT: Cleared to land, Four-Two-Seven. Who's this? You sound young. PRU: Um. I'm... training. PILOT: Good job, trainee. See you on the ground.
[beat 9] Pru stares at her grandfather, wide-eyed. He chuckles and pats her shoulder. OZZIE: Eyes on the scope, Pru. That's the whole job.
[beat 10] Below them, tiny landing lights wobble through the dark, steadying, lowering. They all watch it touch down.

### SCENE s00030 | INT. BEEKEEPER'S KITCHEN - MORNING
Characters: FLORIAN ACHTERBERG, MAREN, EZRA, ODALYS
[beat 0] Honey-gold light slants through a window crusted with propolis. On the table, a cracked jar leaks slow amber across oilcloth. FLORIAN ACHTERBERG (70s, veil pushed back, hands like roots) stands rigid at the stove. His daughter MAREN (40s, city coat, car keys still in her fist) has not sat down. At the table, her son EZRA (9, scabbed elbows) hides behind a comic book, while his aunt ODALYS (50s, flour on her apron) pretends to knead dough.
[beat 1] MAREN: You sold the north hives without telling me. FLORIAN: They were mine to sell. ODALYS: Maren, sit. There's tea. MAREN: I don't want tea. Dad, those were Mom's. FLORIAN: Your mother is dead eleven years. The bees don't know it.
[beat 2] EZRA: Are we fighting? ODALYS: No, sweetheart. We're discussing.
[beat 3] MAREN: I drove six hours. I thought you were sick. FLORIAN: I am old. It's the same thing. MAREN: You could have asked me.
[beat 4] FLORIAN: And you would have said keep them. And I would have kept them. And they would have died, because I can't lift the supers anymore.
[beat 5] Silence. A single bee drifts across the room and lands on the leaking jar.
[beat 6] ODALYS: Ezra, bring me the dish towel. He does. Maren sits at last.
[beat 7] Florian turns from the stove, picks up the jar, and sets it in front of her. FLORIAN: Taste. MAREN: Dad. FLORIAN: Taste it.
[beat 8] She dips a finger. Her face softens as she tastes, and she covers her mouth with her wrist.
[beat 9] MAREN: It's hers. FLORIAN: The last of the north. I saved it for you.

### SCENE s00031 | INT. CLOCKMAKER'S GUILD VAULT ANTECHAMBER - NIGHT
Characters: SECOND MAN, JANITOR, GUARD, DWYER, STRANGER
[beat 0] Marble floor. Brass pendulums under glass domes, swinging out of sync. A time lock gleams on a steel door. A MAN in a janitor's coverall mops, eyes down. He is tall, mid-40s, with a limp. Behind him, a second MAN in a security blazer, younger, wide-shouldered, scrolls a tablet.
[beat 1] The janitor stops mopping and glances at the guard. The guard doesn't look up. JANITOR: Quiet shift. GUARD: Don't talk to me while I'm working. JANITOR: Right.
[beat 2] He mops closer to the door. His mop handle taps the lock panel, twice, a soft tick.
[beat 3] GUARD: Hey. What was that? JANITOR: Nothing. Sorry.
[beat 4] The guard approaches, tablet lowered. The janitor straightens. Their eyes meet.
[beat 5] GUARD: I don't think I know you. JANITOR: Third week. Night crew. GUARD: Name?
[beat 6] A beat. Somewhere, a pendulum clicks. The janitor's hand slips into his bucket.
[beat 7] JANITOR: Cormac Dwyer. GUARD: There's no Dwyer on the roster. DWYER: No. There isn't.
[beat 8] He pulls a taser from the bucket and fires. The guard drops.
[beat 9] Dwyer kneels, takes his keycard, and turns to the pendulums.
[beat 10] At the far end of the room, a SECOND MAN has stood watching from the shadows the entire time: a thin figure in a clockmaker's apron, silver hair, spectacles. He steps forward.
[beat 11] STRANGER: You're early. DWYER: You said midnight. STRANGER: I said twelve-oh-three. He walks the floor at twelve-oh-two. DWYER: Then he's dead on schedule.
[beat 12] The stranger smiles, tucks a loupe into his pocket, and removes a key from around his neck. STRANGER: Call me Aurelio.
[beat 13] AURELIO inserts the key. The vault door sighs open on a room of ticking gold.

### SCENE s00032 | EXT. SALT FLATS WAGON STOP - NOON
Characters: HANNAH DELACROIX, ZEKE, MARSHAL TOBIAS GRAINGER
[beat 0] White ground. White sky. A single wagon with a cracked wheel. A water barrel under a tarp. The heat shimmers like paper held over a flame. HANNAH DELACROIX (30s, dust-caked bonnet, rifle across her knees) sits on the wagon tongue. Her husband EZEKIEL "ZEKE" DELACROIX (30s, bandaged hand) paces the barrel. Across the flats, a lone rider approaches slowly, leading a second horse: MARSHAL TOBIAS GRAINGER (50s, gray duster, tin star scratched with age).
[beat 1] Grainger reins up, tips his hat. GRAINGER: Afternoon. HANNAH: Marshal. ZEKE: Afternoon.
[beat 2] GRAINGER: Looks like a wheel gave out. HANNAH: It did. GRAINGER: I could help. ZEKE: We're fine.
[beat 3] Grainger swings down. He pats his horse. He looks at the barrel, the rifle, Zeke's bandaged hand.
[beat 4] GRAINGER: Cut yourself? ZEKE: Rope.
[beat 5] GRAINGER: Funny. Rope burns look different from teeth.
[beat 6] Hannah's finger moves toward the trigger. Zeke's jaw works.
[beat 7] HANNAH: Marshal, you're welcome to water. GRAINGER: That's kind. I'm not thirsty.
[beat 8] He walks to the back of the wagon and lifts the tarp. Underneath: a canvas sack, dark with dried stains. GRAINGER: Well, now.
[beat 9] ZEKE: Let it be, Marshal. HANNAH: Let it be. They say it together, flat and fast.
[beat 10] ZEKE: ^We didn't kill him for the money. HANNAH: ^He came for the children.
[beat 11] Grainger lets the tarp fall. The wind lifts a thin curtain of salt. GRAINGER: Hell of a place to find out you were right.
[beat 12] He unbuckles his gun belt and drops it in the dust. GRAINGER: Put that rifle down, ma'am. I'm only going to sit.
[beat 13] She doesn't. He sits anyway.

### SCENE s00033 | INT. LAUNDROMAT - DAY
Characters: PERPETUA DUNMORE, BART, CASSIDY, IMOGEN FAIRBANKS, MANAGER
[beat 0] Rows of humming dryers. Fluorescent lights. A television bolted high on the wall plays a cooking show with the sound off. PERPETUA DUNMORE (50s, bright cardigan, folding towels with military precision) works at a table. Nearby, her nephew BARTHOLOMEW "BART" CASSIDY (20s, wrinkled hoodie, guitar case) sits on a dryer, scrolling his phone. At the vending machine, a stranger, IMOGEN FAIRBANKS (30s, crisp suit, rolling suitcase), feeds coins into the slot.
[beat 1] PERPETUA: Bart, get off the dryer. BART: It's off. PERPETUA: The principle is on.
[beat 2] IMOGEN: Come on, come on. The machine rattles. A bag of pretzels hangs from the spiral, refusing to drop.
[beat 3] BART: You have to shake it. IMOGEN: I'm not shaking a vending machine. PERPETUA: Everyone shakes the vending machine. IMOGEN: I have a flight in two hours. BART: Then shake it faster.
[beat 4] Imogen glares, then grips the machine and rocks it. The pretzels fall. She straightens her blazer with great dignity.
[beat 5] PERPETUA: ^Nicely done. BART: ^Nicely done. They say it at the same time and look at each other, startled. Imogen fights a smile.
[beat 6] A voice crackles from the ceiling speaker. MANAGER: Attention customers. Machine seven is on fire. Machine seven is on fire. This is not a drill.
[beat 7] Everyone turns. Machine seven is, in fact, on fire. A thin orange flame licks the lint trap.
[beat 8] PERPETUA: Of course it is. BART: Water? IMOGEN: I'm not paid for this. BART: Nobody is!
[beat 9] Perpetua drags a bucket across the floor and dumps it in. The fire dies with a sad hiss. A single towel drifts out, charred and smoking.
[beat 10] IMOGEN: Is this a regular occurrence? PERPETUA: Tuesdays.
[beat 11] Imogen laughs despite herself, tears open her pretzels, and offers one to Bart.

### SCENE s00034 | INT. SALT-PORK STORAGE LOFT, SHIPYARD - EVENING, 1840s
Characters: CAPTAIN EZEKIAL HOLLOWAY, SILAS PETHERBRIDGE, OLUWASEUN ADEBAYO, ABIGAIL FINCH, JEREMIAH TUCKER, THEODORE VANE
[beat 0] A low-beamed room smelling of tar and brine. Barrels line the walls. A single oil lamp casts a shaky circle on the planks. Rain drums the roof. Six figures sit on barrel tops around a makeshift table of planks. CAPTAIN EZEKIAL HOLLOWAY (50s, weathered, grey queue) presides. Beside him is his first mate, SILAS PETHERBRIDGE (30s, red whiskers, cheerful). Across from them sits the shipwright, OLUWASEUN ADEBAYO (40s, broad-shouldered, leather apron). Next to him, the ship's cook, MRS. ABIGAIL FINCH (60s, spectacles, sleeves rolled). At the end, young cabin boy JEREMIAH TUCKER (13, freckled, wide-eyed). Lastly, the agent, MR. THEODORE VANE (40s, black coat, ink-stained fingers) sits stiffly apart.
[beat 1] HOLLOWAY: Gentlemen. Madam. We sail Thursday if the weather holds. PETHERBRIDGE: It won't, Captain. HOLLOWAY: It will if I will it so.
[beat 2] ADEBAYO: The hull will hold. The cargo is another question. VANE: The cargo is insured. FINCH: Insured against what, Mr. Vane? A woman cannot pickle a drowned ship. VANE: Against everything, Mrs. Finch. PETHERBRIDGE: Except honesty.
[beat 3] JEREMIAH: Sir, what is the cargo?
[beat 4] Silence. Vane looks to Holloway. Holloway looks at his hands.
[beat 5] HOLLOWAY: Tea, boy. JEREMIAH: Only tea?
[beat 6] ADEBAYO: Tea and what comes with it. VANE: Mr. Adebayo, I would remind you of your contract.
[beat 7] ADEBAYO: I made the contract in good faith. I did not know the ship was meant for Lisbon. FINCH: Lisbon. VANE: A port like any other. PETHERBRIDGE: Not for what we carry.
[beat 8] HOLLOWAY: Enough. A long pause. Rain on the roof.
[beat 9] JEREMIAH: I don't mind, sir. I can keep quiet. FINCH: That, child, is exactly what worries me.

### SCENE s00035 | INT. FROZEN FOOD WAREHOUSE, WALK-IN FREEZER - NIGHT
Characters: ROZ, PETKOVIC, DENNIS ABERNATHY-VOSS, LAZARUS BELL
[beat 0] Steel racks of frosted boxes. A vapor cloud rolls off every breath. The door is frozen shut. ROSALIND "ROZ" PETKOVIC (30s, thermal jacket, night inventory clipboard) crouches beside the door, pounding the latch. Behind her, her coworker DENNIS ABERNATHY-VOSS (40s, beard stiff with frost) paces the aisle. Between them, hunched on a pallet of peas, sits a stranger in a soaked tuxedo: LAZARUS BELL (50s, slow-blinking, shivering).
[beat 1] ROZ: It's jammed! DENNIS: Hit it harder! ROZ: I am hitting it!
[beat 2] Dennis shoves her aside and throws his shoulder into the door. It doesn't budge. They both slump against it, panting.
[beat 3] Lazarus lifts his head. LAZARUS: It will not open.
[beat 4] DENNIS: Who the hell are you? LAZARUS: A man in the wrong place. ROZ: How did you get in here?
[beat 5] LAZARUS: I walked in. Hours ago. Perhaps days. DENNIS: Days? We've been here forty minutes. LAZARUS: You have been here forty minutes. I have been here longer.
[beat 6] He stands. His breath doesn't fog. Roz sees it first and backs away, clipboard hugged to her chest.
[beat 7] ROZ: Dennis. DENNIS: What? ROZ: Look at his breath.
[beat 8] Dennis looks. Lazarus smiles, apologetic, and spreads his hands.
[beat 9] LAZARUS: I have found it is easier not to tell people. DENNIS: Tell people what? LAZARUS: Only that it does not get warmer. That is all.
[beat 10] Roz grabs Dennis by the sleeve and they both charge the door again, slamming into it together, again and again, until it cracks and bursts open on a blast of loading-dock air.
[beat 11] They tumble out onto asphalt. Roz scrambles to look back.
[beat 12] The freezer door swings gently shut. Through the shrinking gap, Lazarus raises a hand in farewell.

### SCENE s00036 | INT. FAMILY STATION WAGON, PARKED OUTSIDE A PLANETARIUM - NIGHT
Characters: STRANGER, GIRL, JOSEPHINE, MAEVE, DESMOND
[beat 0] Rain beads the windshield. The dashboard clock reads 7:52. Across the street, the planetarium dome glows a soft blue, waiting for a show that has already begun. In the driver's seat, a man in a thin wool coat grips the wheel, his eyes fixed on the building. This is the STRANGER: late forties, heavy-lidded, thoughtful. In the back seat, a girl of ten sits cross-legged, her ticket pinched between two fingers. She watches him in the rearview mirror and says nothing.
[beat 1] The man draws a breath to speak. Doesn't.
[beat 2] The girl unbuckles, leans forward between the seats. GIRL: We're late. STRANGER: I know.
[beat 3] GIRL: Mom says you're always late. STRANGER: Your mother is usually right.
[beat 4] GIRL: Is that why she left?
[beat 5] He doesn't answer. A raindrop slides down the glass. The windshield wipers sweep once, twice.
[beat 6] STRANGER: What do you want me to say, Josephine? JOSEPHINE: Just say a true thing.
[beat 7] The man looks at her, startled. Something in his shoulders loosens.
[beat 8] STRANGER: All right. I don't know how to do this. I've never known. I walk into rooms and everyone's already decided who I am.
[beat 9] JOSEPHINE: You're my dad. STRANGER: Yes. JOSEPHINE: That's all you have to be.
[beat 10] His phone buzzes on the dashboard. A name lights the screen: MAEVE. He lets it ring. JOSEPHINE: Aren't you going to get it? STRANGER: Later.
[beat 11] The phone goes silent, then buzzes again.
[beat 12] Josephine reaches over and answers it for him, putting it on speaker.
[beat 13] MAEVE: Desmond? Is she with you? The planetarium said you never checked in. DESMOND: She's here, Maeve. We're in the car. MAEVE: In the car? It started at seven.
[beat 14] DESMOND: I know. I got us lost. And then I just... sat here.
[beat 15] A pause on the line. Rain on the roof.
[beat 16] MAEVE: Is she okay? JOSEPHINE: ^I'm okay. DESMOND: ^She's okay.
[beat 17] They say it at the same time. Desmond glances at his daughter. She smiles.
[beat 18] MAEVE: Then go in. They'll let you in late. Tell them it's my fault. DESMOND: It isn't. MAEVE: Just go, Des.
[beat 19] The call ends. Desmond sets the phone down very gently, as if it might break. JOSEPHINE: So? DESMOND: So.
[beat 20] He opens his door. The rain is barely more than mist. He walks around, opens hers, and offers his hand. She takes it. DESMOND: Let's go look at the sky.
[beat 21] They cross the street together, small under the glowing dome.

### SCENE s00037 | INT. NATURAL HISTORY MUSEUM, DINOSAUR HALL - NIGHT
Characters: CASSIUS OBAYOMI, RENATA VOSKUIJLEN, FONZ, MARBURY, PALOMA TREVINO-HALE, GUSTAV LINDQVIST, QUINCY ABERNATHY, GUARD, ROLAND PIKE
[beat 0] A cathedral of bones. A Diplodocus skeleton arches over the central floor. Moonlight pours through high windows. Somewhere a pipe drips.
[beat 1] A service door clicks open. Six figures in black filter in, silent as cats: CASSIUS OBAYOMI (40s, crew boss, headset), RENATA VOSKUIJLEN (30s, safecracker, tool roll), ILDEFONSO "FONZ" MARBURY (20s, climber, harness), PALOMA TREVINO-HALE (30s, hacker, laptop bag), GUSTAV LINDQVIST (60s, forger, silk gloves), and QUINCY ABERNATHY (20s, driver, nervy).
[beat 2] CASSIUS: Clock's running. Eleven minutes.
[beat 3] Renata crosses to a glass case under the skeleton's ribs, where a fossilized egg sits on velvet. Fonz clips a line to the beam above and begins to ascend. Paloma kneels beside a wall panel, jacks in, and her screen scrolls green code. Gustav circles the display, comparing the egg to a photograph in his palm, while Quincy hovers at the doorway, watching the corridor with his heart in his throat.
[beat 4] PALOMA: Cameras are looped. CASSIUS: Fonz? FONZ: Almost. Bone's slick.
[beat 5] Renata pries the lock. It pops.
[beat 6] She lifts the lid and Gustav, with trembling gloved hands, swaps the real egg for a copy, but a sharp CLICK echoes from the corridor and Quincy swallows, Fonz freezes in mid-swing, Paloma shuts her laptop, and Renata drops flat behind the case.
[beat 7] QUINCY: Guard. Coming this way. CASSIUS: Positions.
[beat 8] Fonz hauls himself up onto the Diplodocus ribs. Gustav tucks the real egg inside his coat and melts behind a pillar. Paloma and Renata slide under a bench, and Cassius presses against the wall beside the door as a flashlight beam swings across the floor.
[beat 9] A GUARD, a heavyset man in his fifties named ROLAND PIKE, strolls in humming. He pauses at the case. He sweeps his light along the glass.
[beat 10] A beat. Another. Cassius raises a fist, ready.
[beat 11] ROLAND: Dang pigeons.
[beat 12] He wanders off. His footsteps fade. The crew exhales as one.
[beat 13] Fonz drops silently to the floor and the six of them regroup near the door. Cassius counts heads with a finger. CASSIUS: Out. Now.
[beat 14] They file through the service door, one by one, Gustav last, cradling the egg like a newborn.
[beat 15] The Diplodocus watches them go.

### SCENE s00038 | INT. FLOODED COMMAND DUGOUT, WESTERN FRONT - DAWN, 1917
Characters: MAJOR ALISTAIR PEMBROKE-HUNT, LIEUTENANT SAMUEL ODUYA, SERGEANT DESMOND ARCHIBALD
[beat 0] Timber props. Water to the ankles. A field telephone dangles from a nail. Shells rumble, miles off. MAJOR ALISTAIR PEMBROKE-HUNT (40s, immaculate despite the mud, pipe unlit) sits at a map table. Across from him, LIEUTENANT SAMUEL ODUYA (20s, shaking hands, cracked spectacles) stands at attention. In the corner, SERGEANT DESMOND ARCHIBALD (50s, scarred jaw, rifle across his lap) polishes a bayonet.
[beat 1] PEMBROKE-HUNT: Sit, Lieutenant. ODUYA: I'll stand, sir. PEMBROKE-HUNT: Sit.
[beat 2] Oduya sits. The water around his boots ripples.
[beat 3] PEMBROKE-HUNT: At six o'clock, you'll take your platoon over the top.
[beat 4] ODUYA: Sir, the wire isn't cut. PEMBROKE-HUNT: It will be.
[beat 5] ODUYA: Sir, with respect, the artillery has been wrong three days running. PEMBROKE-HUNT: Lieutenant, I did not ask for a critique. ODUYA: No, sir. But my men will ask me why. And I won't have an answer.
[beat 6] ARCHIBALD: Tell them it's an order, lad. It's the only answer anyone's got. PEMBROKE-HUNT: Thank you, Sergeant.
[beat 7] ARCHIBALD: Don't thank me, sir. I'm only telling the boy what I told the last one.
[beat 8] Pembroke-Hunt sets down his pencil. For a long moment, the only sound is dripping.
[beat 9] PEMBROKE-HUNT: Lieutenant Oduya. Do you have family? ODUYA: A mother, sir. In Lagos. And a fiancee in Kent.
[beat 10] PEMBROKE-HUNT: Write to them now. I'll see the letters go out whatever happens. ODUYA: Thank you, sir. PEMBROKE-HUNT: That's all.
[beat 11] Oduya rises, salutes, and wades toward the ladder. Archibald watches him go, then turns to the Major.
[beat 12] ARCHIBALD: You'll be writing his, sir? PEMBROKE-HUNT: I always do.

### SCENE s00039 | INT. PRIVATE LIBRARY OF A VICTORIAN MANOR - NIGHT
Characters: INSPECTOR PHILOMENA CRABTREE, CONSTABLE REGINALD OKAFOR-WELLS, GWENDOLEN SLOANE
[beat 0] Candles gutter. A thunderclap rattles the leaded glass. In the center of the room, a body lies under a red velvet curtain, only a pair of polished shoes showing. INSPECTOR PHILOMENA CRABTREE (50s, damp mackintosh, sharp eyes) enters, followed by CONSTABLE REGINALD OKAFOR-WELLS (20s, helmet under his arm). A third figure waits by the fireplace: the manor's housekeeper, MRS. GWENDOLEN SLOANE (60s, black dress, key ring at her waist).
[beat 1] CRABTREE: Who found him? SLOANE: I did, Inspector. At half past nine.
[beat 2] CRABTREE: And the door? SLOANE: Locked from within.
[beat 3] OKAFOR-WELLS: Then how did you get in? SLOANE: I have a key.
[beat 4] CRABTREE: Constable, the windows. He checks each in turn. Every latch is down. OKAFOR-WELLS: Sealed, ma'am.
[beat 5] Crabtree kneels, lifts the curtain, and studies the dead man's face. A tiny smile crosses hers.
[beat 6] CRABTREE: Mrs. Sloane. Did Lord Ashworth take his evening port? SLOANE: He did. CRABTREE: From this decanter?
[beat 7] She taps a crystal vessel on the mantel. It is empty. SLOANE: It was full when I left him.
[beat 8] CRABTREE: Constable, the glass. Okafor-Wells lifts it with a handkerchief and sniffs. He recoils.
[beat 9] OKAFOR-WELLS: Almonds.
[beat 10] Mrs. Sloane's hand tightens on her keys. Crabtree rises slowly.
[beat 11] CRABTREE: Mrs. Sloane, I don't believe this man was alone when he died. SLOANE: Inspector, I assure you--
[beat 12] A thump from the bookcase. All three freeze.
[beat 13] The shelf swings inward on a hidden hinge and a gust of cold air blows out every candle but one. Crabtree and Okafor-Wells spin toward the opening.
[beat 14] Mrs. Sloane bolts for the door, but Okafor-Wells catches her sleeve and the two of them struggle, keys clattering across the floor. CRABTREE: Constable, hold her. OKAFOR-WELLS: I've got her, ma'am.
[beat 15] Crabtree raises the last candle toward the dark passage. CRABTREE: You may come out now.

### SCENE s00040 | INT. BOWLING ALLEY SNACK COUNTER - AFTERNOON
Characters: PIP, NAKASHIMA, WALTER GRUNDY-BELL, OTIS, CARMELA, CORRADO PELLEGRINO
[beat 0] A sleepy league day. The pins clatter in the distance like a slow applause. Five people share a booth built for four. PRISCILLA "PIP" NAKASHIMA (30s, team captain, sunburnt nose) stirs a milkshake with great concentration. Next to her, her husband WALTER GRUNDY-BELL (30s, wearing a shirt that says BOWL OR DIE) eats nachos one chip at a time. Across the table, her brother OTIS (20s, hoodie, headphones) stares into his phone. Squeezed at the end are the Pellegrinos: elderly twins CARMELA and CORRADO PELLEGRINO (70s, matching cardigans), who have been bowling together since the Truman administration.
[beat 1] PIP: Walter, you promised you'd bowl a hundred. WALTER: I bowled ninety-eight, Pip. PIP: That's two short. WALTER: It was a very good ninety-eight. OTIS: It was a gutter and a prayer.
[beat 2] CARMELA: Corrado, pass the salt. CORRADO: Carmela, you don't need salt. CARMELA: I need what I need.
[beat 3] Corrado slides the shaker across the table.
[beat 4] Carmela and Walter both reach for it at the same time and knock the nachos into Pip's lap. All five freeze.
[beat 5] PIP: Walter. WALTER: I'll get napkins.
[beat 6] CORRADO: Carmela, you did that. CARMELA: I did not.
[beat 7] Otis finally lifts his eyes from the phone, examines the carnage, and returns to the screen without a word.
[beat 8] Pip dabs cheese from her knee and takes a slow, controlled sip of milkshake. PIP: Next frame, Walter. Hundred or nothing.

### SCENE s00041 | INT. COMPETITIVE PIE-BAKING TENT, COUNTY FAIR - DAY
Characters: AGGIE, LINDQUIST-REYES, LONNIE BIGGS, MEI-LING ARROYO, SIGMUND PRATT, DOROTHEA, DELPHINE VASQUEZ-MOORE, JUDGE
[beat 0] Rows of folding tables. Flour hangs in sunbeams like pollen. A banner reads: 87TH ANNUAL PIE CHAMPIONSHIP. A judge's gavel sits next to a bell. Six contestants stand behind their pies in tight, silent ranks. AGATHA "AGGIE" LINDQUIST-REYES (60s, blue ribbon pinned to apron, jaw set) polishes a lattice crust with a pastry brush. Beside her, LONNIE BIGGS (40s, sweating through a chef's coat, flour on his eyebrows) arranges cherries with tweezers. At the next station, the young prodigy MEI-LING ARROYO (16, braids, calm as a monk) lets her pie rest. Behind them, SIGMUND PRATT (70s, bolo tie, hands tremble) hums a hymn. At the end of the row, twin sisters DOROTHEA and DELPHINE VASQUEZ-MOORE (50s, identical aprons, identical glares) tap the same rhythm on their tables.
[beat 1] A JUDGE in a straw boater strolls the line, clipboard in hand. He stops at Aggie.
[beat 2] JUDGE: Mrs. Lindquist-Reyes. Third time in the final. Nervous? AGGIE: Never.
[beat 3] Her brush twitches. Lonnie watches it twitch.
[beat 4] JUDGE: And you, young man? LONNIE: Oh, I'm great. Great! Totally relaxed!
[beat 5] A cherry rolls off his tweezers and across the table. He does not move. Everyone watches it roll. It stops against Mei-Ling's pie.
[beat 6] She regards it, then flicks it back to him with one finger.
[beat 7] The judge raises his bell.
[beat 8] DOROTHEA: ^Don't you dare. DELPHINE: ^Don't you dare. The twins speak as one, to each other. Neither blinks.
[beat 9] The judge rings the bell.
[beat 10] All six lift their forks like swords. The tent goes still. Sigmund's hymn gets louder, then stops mid-note.
[beat 11] The judge cuts into Aggie's pie. Steam rises. He takes a bite. Chews. His face reveals nothing.
[beat 12] JUDGE: Hm.
[beat 13] Aggie's brush finally falls from her hand.

### SCENE s00042 | INT. FARMHOUSE DINING ROOM, WHEAT HARVEST SUPPER - NIGHT
Characters: GRANDFATHER IVAR HALVORSEN, ARNE HALVORSEN, GUNHILD, ASTRID, LEIF, RAMON BEAUMONT-CRUZ
[beat 0] A long pine table sags under platters of ham, corn, and pickled beets. Kerosene lamps. Outside, combines idle in the dark, still warm. Six people sit shoulder to shoulder, and nobody has touched the food. At the head of the table sits GRANDFATHER IVAR HALVORSEN (80s, overalls pressed for the occasion, a hearing aid whistling softly). His son ARNE HALVORSEN (50s, sunburnt neck, silent) cuts bread with great deliberation. Arne's wife GUNHILD (50s, hair pinned too tight) refills a water glass that is already full. Across from them their daughter ASTRID (20s, city shoes, suitcase by the door) stares at her plate. Beside her sits her younger brother LEIF (15, braces, a bruise under one eye), and at the foot of the table, farmhand RAMON BEAUMONT-CRUZ (30s, borrowed shirt, hat in lap) looks anywhere but at the family.
[beat 1] Arne finishes slicing. The knife stays in his hand.
[beat 2] ARNE: Pass the beets. Astrid passes the beets. Her fingers shake.
[beat 3] Gunhild reaches, touches her daughter's wrist, and pulls back as if burned.
[beat 4] IVAR: What's that? ARNE: Nothing, Pa.
[beat 5] IVAR: What's she doing here? ARNE: Eating supper.
[beat 6] Leif knocks over the salt. Nobody moves to clean it. Ramon sets his hat on the table, then takes it back, then folds it in his lap again.
[beat 7] ASTRID: I'm only here for the night. ARNE: The night is long.
[beat 8] He lays the knife on the cloth. It points directly at her. She looks at it. Then at him.
[beat 9] Then she picks up her fork and, very carefully, begins to eat.

### SCENE s00043 | INT. CURLING CLUB LOUNGE, SECOND-FLOOR VIEWING GLASS - EVENING
Characters: HADLEY BRANTFORD, ABDULLAH FARRUKH, WINNIE, SOLBERG, ARCHIE, TWOMBLY, DISPATCH
[beat 0] The rink below glows blue-white. Granite stones glide silently across ice. A scoreboard reads END 9 / TIED 4-4. The lounge is a warm cave of wood paneling, trophies, and a single fan whirring pointlessly. HADLEY BRANTFORD (40s, team skip, wool sweater, thermos of something stronger than tea) leans on the railing. Behind her, on a leather couch, her teammates ABDULLAH FARRUKH (30s, sweeper, ice-burned cheeks) and WINIFRED "WINNIE" SOLBERG (20s, rookie, ponytail, quivering) sit with their brooms across their laps. At the bar, a retired champion, ARCHIBALD "ARCHIE" TWOMBLY (70s, cardigan, commentator headset around his neck), polishes a glass.
[beat 1] HADLEY: Winnie, your delivery. WINNIE: I know. HADLEY: You pulled it left in the eighth. WINNIE: I know. HADLEY: It's all right to know. I'd just like you to fix it.
[beat 2] ABDULLAH: She's got it, Hadley. HADLEY: Does she? WINNIE: I've got it.
[beat 3] HADLEY: Then say it with your whole face. WINNIE: I have got it. HADLEY: Better.
[beat 4] ARCHIE: Back in '71, I threw the last stone with a broken wrist. ABDULLAH: We know, Archie. ARCHIE: Won, too. HADLEY: Everyone's very proud of Archie.
[beat 5] A bell rings below. The teams are called to the ice. Winnie rises first. Abdullah follows, and Hadley screws the cap onto her thermos.
[beat 6] ARCHIE: This is Archie Twombly, live from the Glenmore Club. The last end is about to begin.
[beat 7] Hadley, muttering to herself, does not turn around. HADLEY: Don't blow it, Brantford.
[beat 8] A phone buzzes on the bar. Archie answers. DISPATCH: Archie? It's the broadcast truck. We've lost your feed. Is the skip ready? ARCHIE: She's ready. They're all ready.
[beat 9] Hadley stops at the stairs. She looks down at the ice, pale and shining.
[beat 10] HADLEY: Winnie. Whatever happens, you throw the last one. WINNIE: Me? Hadley, no. HADLEY: You. It's what you were born for. ABDULLAH: She's right. WINNIE: Okay. Okay.
[beat 11] They file down the stairs. Archie watches through the glass as three small figures step onto the ice.
[beat 12] DISPATCH: Archie, we're back. Go ahead. ARCHIE: And here they come.
[beat 13] He lifts a glass to the window and sets it down untouched.

### SCENE s00044 | INT. FAMILY MINIVAN, DRIVE-THRU CAR WASH - DAY
Characters: LORETTA PEMBERTON-SHAH, HAROLD PEMBERTON, ZINNIA
[beat 0] Soap foam crawls across the windshield. Brushes thump and swish. Inside, the world is a muffled aquarium. LORETTA PEMBERTON-SHAH (40s, driver, rings clacking against the wheel) keeps both hands at ten and two. In the passenger seat sits her father, HAROLD PEMBERTON (70s, flat cap, silent for forty miles). In the back, her daughter ZINNIA (14, earbuds in, knees up) watches the brushes beat the glass.
[beat 1] The conveyor tugs the van forward. A giant mitt of foam slaps the roof.
[beat 2] LORETTA: You didn't have to come. HAROLD: I wanted to. LORETTA: You hate car washes. HAROLD: I hate being left behind more.
[beat 3] Zinnia pulls out one earbud. ZINNIA: Who left who?
[beat 4] Loretta and Harold look at each other. Neither speaks. The brushes whump against the doors.
[beat 5] LORETTA: ^Nobody left anybody. HAROLD: ^Nobody left anybody.
[beat 6] Zinnia raises both eyebrows and puts the earbud back.
[beat 7] The conveyor slows. A rinse arch sprays them white.
[beat 8] In the sudden silence, Loretta lets go of the wheel for the first time all day and presses her fingers into her eyes.
[beat 9] Harold reaches over and, with enormous awkwardness, pats her knee twice.
[beat 10] HAROLD: Your mother liked this part. LORETTA: The foam. HAROLD: The foam.
[beat 11] The dryers blast.
[beat 12] Zinnia leans forward between the seats and rests her chin on the headrest, close to both of them. Sunlight breaks through the last of the water. Loretta turns on the wipers.

### SCENE s00045 | INT. ORBITAL HYDROPONICS BAY, STATION KESTREL - CONTINUOUS
Characters: COMMANDER INGRID SORENSEN-AKINTOLA, FELIX OYELARAN-DUBOIS, MARISOL TRAN, UNIT FOUR, CASIMIR OKONKWO-BLYTHE, ORION
[beat 0] Racks of lettuce under violet light. Pipes sweat. A hum like a slow pulse. The floor is a grid, the ceiling a curve. COMMANDER INGRID SORENSEN-AKINTOLA (50s, gray crop, crisp jumpsuit) walks the aisle with a tablet. Behind her trails botanist FELIX OYELARAN-DUBOIS (30s, goggles pushed up, hands green to the wrist). At a bench, engineer MARISOL TRAN (30s, ponytail, wrench in hand) tightens a valve. In the far corner, a robot technician, UNIT FOUR (a squat maintenance drone with a cheerful chirp), polishes a lens. The newest arrival is medic CASIMIR OKONKWO-BLYTHE (40s, trim beard), who leans in the hatchway.
[beat 1] INGRID: Status report, everyone. Now. FELIX: Lettuce is thriving. MARISOL: Valve's holding. UNIT FOUR: Beep. All systems nominal. CASIMIR: Medically, I'm bored. INGRID: That's what I like to hear.
[beat 2] A low metallic thud echoes from the water tank behind the racks. All five turn.
[beat 3] FELIX: That's not supposed to happen. MARISOL: Of course it is.
[beat 4] Ingrid raises a hand. Silence.
[beat 5] Another thud, closer. The lights dim a fraction. Unit Four chirps and rolls backward.
[beat 6] INGRID: Felix, Marisol, check the tank. Casimir, with me. FELIX: ^Yes, Commander. MARISOL: ^Yes, Commander.
[beat 7] They reply in unison and split. Felix and Marisol creep toward the tank. Ingrid and Casimir circle the racks opposite, tablet and medkit held like weapons.
[beat 8] Behind the tank, a fat grey cat, ORION, sits atop a coil of hose, licking one paw. It meows.
[beat 9] Everyone stops. Felix laughs first, a startled bark. Marisol sags against the rack. Ingrid pinches the bridge of her nose.
[beat 10] INGRID: Who smuggled a cat onto my station?
[beat 11] Unit Four rolls up and nuzzles the cat's head with a mechanical arm. UNIT FOUR: Beep. New crew member detected.

### SCENE s00046 | EXT. SHELLED FARMHOUSE ROOF, ARDENNES - DAWN
Characters: GENE, BRODSKY, PRIVATE LOUIS TRUDEAU-PARK, SERGEANT MARGUERITE OYELOWO
[beat 0] Snow dusts the broken tiles. Beyond the ridge, the thud of far guns. CORPORAL EUGENE "GENE" BRODSKY (20s, frozen mustache) crouches behind a chimney with binoculars. Beside him, PRIVATE LOUIS TRUDEAU-PARK (19, baby-faced, rifle hugged) shivers. A few yards away, SERGEANT MARGUERITE OYELOWO (30s, tough, her helmet dented) sits against a beam, tying a rag around her wrist.
[beat 1] She tightens it with her teeth. He lowers the binoculars.
[beat 2] GENE: Sarge, I count six. OYELOWO: Count again. GENE: Eight. OYELOWO: Better.
[beat 3] TRUDEAU-PARK: Is it true what they say? About the Tigers? OYELOWO: Louis, eat your biscuit. TRUDEAU-PARK: I'm not hungry. OYELOWO: I didn't ask.
[beat 4] He opens the biscuit tin. His fingers are blue.
[beat 5] She reaches over and, without a word, tucks his scarf tighter.
[beat 6] GENE: They're moving.
[beat 7] She rises on one knee and takes the binoculars. Her jaw hardens.
[beat 8] OYELOWO: Gene, wire the others. Louis, with me.
[beat 9] They slide down the roof toward the ladder.

### SCENE s00047 | INT. OPERA HOUSE COAT CHECK ROOM - NIGHT
Characters: SERAPHINA DUMONT, STRANGER, LADY CORDELIA ASHBY-FORSYTHE, DELACROIX-WEST
[beat 0] Racks of furs and top hats in the dim glow of a single bulb. A velvet curtain divides the room from the lobby, where an aria swells, muffled. SERAPHINA DUMONT (30s, ruby evening gown, a claim ticket pinched between gloved fingers) presses a hat check into the hand of the attendant, a skinny youth with oversized cufflinks. Behind her, a tall figure in a doorman's coat keeps watch at the curtain: this is the STRANGER, handsome, impassive, a scar through one brow. In the corner, an older woman in a fur stole examines the rack, LADY CORDELIA ASHBY-FORSYTHE (60s, diamonds heavy at her throat).
[beat 1] The attendant fetches a coat. The stranger glances at Lady Cordelia, who has turned her back.
[beat 2] Seraphina slips a small silver key into the coat's lining while the attendant shakes out the sleeve, and the stranger, noticing her motion, slides smoothly between them and the curtain.
[beat 3] STRANGER: Madame, your coat. SERAPHINA: Thank you.
[beat 4] LADY CORDELIA: Is that the Dumont girl? SERAPHINA: Lady Cordelia. How lovely.
[beat 5] The attendant, flustered, drops a scarf. Seraphina and the stranger both bend to catch it and their hands collide.
[beat 6] They look at each other, and in that look, a plan changes.
[beat 7] LADY CORDELIA: I do hope you're not leaving before the second act. SERAPHINA: Never.
[beat 8] The aria hits its high note. As the room shakes, the stranger lifts the stole from Lady Cordelia's shoulders and, in the same breath, passes it to Seraphina, who drapes it over her arm like a waiter's towel.
[beat 9] LADY CORDELIA: My stole! STRANGER: I believe it was mislaid, Madame.
[beat 10] Seraphina hands it back with an apologetic smile, but one diamond is gone from the hem. The stranger's coat pocket rattles softly as he steps aside to let her pass.
[beat 11] Seraphina swans through the curtain. The stranger, whom the attendant addresses as MR. DELACROIX-WEST, follows without a backward glance.

### SCENE s00048 | INT. ROOFTOP GREENHOUSE, LAUNDROMAT BUILDING - DUSK
Characters: MIRIAM STOLZ-AGYEMAN, WENDELL, TOVA, CASPIAN DRUMMOND
[beat 0] Cracked glass panes. Tomato vines grown wild. A rusted fan turns without wind. Laundry lines sag with sheets, still dripping. MIRIAM STOLZ-AGYEMAN (60s, silver bun, gardening gloves) trims a vine. Her son WENDELL (30s, work boots, tie loosened) sits on an upturned bucket. His wife TOVA (30s, pregnant, hand on her belly) leans in the doorway. Their neighbor, old CASPIAN DRUMMOND (80s, oxygen tank, tiny sunhat), dozes in a lawn chair.
[beat 1] MIRIAM: Landlord says we have until Friday. WENDELL: Mom. MIRIAM: Friday. That's four days.
[beat 2] TOVA: We'll find another roof. MIRIAM: Another roof won't have these.
[beat 3] She holds up a tomato, ripe and enormous. Wendell looks at it, then at his wife.
[beat 4] CASPIAN: Beefsteak. MIRIAM: Cranberry heirloom. CASPIAN: Beefsteak.
[beat 5] Miriam sighs and places the tomato in Tova's hand. Tova weighs it, smiling. TOVA: It's heavy.
[beat 6] WENDELL: Mom, you can't carry this up the stairs forever. MIRIAM: Watch me.

### SCENE s00049 | EXT. CLIFFSIDE STAIRCASE OF THE WIND TEMPLE - DAWN
Characters: ALDRIC VANTERPOOL, THESSALY, SORREL IRONBARK, BARNABUS GLIMMERWICK
[beat 0] Ten thousand steps, hewn into rock. Prayer flags snap. Clouds boil below. ALDRIC VANTERPOOL (30s, battered armor, scabbard empty) climbs, panting. Behind him, a hooded girl, THESSALY (teen, silver eyes, bare feet) hops step to step like a goat. Further down, burly SORREL IRONBARK (40s, axe on back, braided beard) hauls himself up, wheezing. Last comes the old wizard BARNABUS GLIMMERWICK (80s, crooked staff, patched robes), who rests on every third step.
[beat 1] ALDRIC: Barnabus, hurry! BARNABUS: I am a wizard, not a mountain goat! THESSALY: I'm a mountain goat. SORREL: Gods, the stairs.
[beat 2] Thessaly stops at a landing. Above, a stone gate, and between its pillars, a shimmering curtain of wind. She puts out her hand. It ripples.
[beat 3] THESSALY: It's open. ALDRIC: Is it safe? THESSALY: No. SORREL: Good. I dislike safe.
[beat 4] Barnabus catches up, bent double. BARNABUS: Aldric, listen. When we cross, the Wind Warden will ask each of us one question. ALDRIC: What question? BARNABUS: What we fear most.
[beat 5] SORREL: ^That's easy. THESSALY: ^That's easy. They answer together, then glare at each other.
[beat 6] ALDRIC: Sorrel? SORREL: Being forgotten.
[beat 7] ALDRIC: Thessaly? THESSALY: Being found.
[beat 8] Aldric draws a breath. Wind howls through the gate. He steps toward it, hand on the empty scabbard.
[beat 9] ALDRIC: Then we go together.

### SCENE s00050 | INT. NIGHT BUS, MIDWEST HIGHWAY - NIGHT
Characters: CELESTE ARMITAGE-NOLAN, DOM, ACHEBE, DRIVER
[beat 0] Half-lit aisle. Rows of sleeping strangers. The engine drones like a long exhale. Rain streaks the windows. CELESTE ARMITAGE-NOLAN (30s, red scarf, paperback open on her knee) sits halfway back. Across the aisle, DOMINIC "DOM" ACHEBE (30s, rumpled suit, cold coffee) has been staring at her book for twenty minutes.
[beat 1] He finally leans over. DOM: Is it any good? CELESTE: It's a murder mystery. DOM: Does everyone die? CELESTE: Mostly. DOM: Sounds restful.
[beat 2] She laughs, quietly, despite herself.
[beat 3] The bus hits a pothole and the whole cabin lurches. Her book slides to the floor.
[beat 4] Dom retrieves it and hands it back. Their fingers touch.
[beat 5] DRIVER: Folks, we're pulling into Dubuque for a ten-minute break. Stretch your legs. Don't wander. CELESTE: Don't wander, he says. DOM: Where would I go?
[beat 6] He stands. The bus brakes hiss.
[beat 7] Celeste rises too, and they collide in the narrow aisle. CELESTE: Sorry. DOM: No, I'm sorry.
[beat 8] CELESTE: I'm Celeste. DOM: Dom.
[beat 9] They shake hands, lingering.
[beat 10] DRIVER: Anybody traveling to Chicago, I'll be holding the bus for exactly ten minutes. Not eleven.
[beat 11] DOM: Chicago. CELESTE: Me too.
[beat 12] He looks at her, hope in his face. DOM: Then I guess we have eleven hours.
[beat 13] She picks up her book. CELESTE: Then you'd better tell me who did it.

### SCENE s00051 | INT. AMATEUR THEATER GREEN ROOM - NIGHT
Characters: THEODORA, ALCOTT-WELLS, BILLIE, FAIRCHILD, ALOYSIUS PENDERGAST-MWANGI, GWENDOLINE POPE, ARCHIE, TREMAINE, RODERICK SPARROW-LUND
[beat 0] Costumes hang in clouds. Powder, hairspray, a half-eaten sandwich. A speaker on the wall hisses with the thin sound of an audience settling. THEODORA "TEDDY" ALCOTT-WELLS (50s, tragedy mask on her forehead) stands at the mirror adjusting a Roman toga. Behind her, her understudy WILHELMINA "BILLIE" FAIRCHILD (20s, script clutched like a rosary) mouths lines to herself. Across the room, the director ALOYSIUS PENDERGAST-MWANGI (60s, cravat, velvet jacket) wrings his hands. At the costume rack, wardrobe mistress GWENDOLINE POPE (40s, pins in her mouth) hems a cape. Beside her sit the leading men: ARCHIBALD "ARCHIE" TREMAINE (30s, a laurel wreath), and RODERICK SPARROW-LUND (40s, a plastic sword).
[beat 1] THEODORA: She's late. Where is she? ALOYSIUS: Who? THEODORA: Calpurnia. The lead. ALOYSIUS: She's in the lavatory. THEODORA: She's been in the lavatory for forty minutes.
[beat 2] ARCHIE: Maybe she fell in. RODERICK: That's not funny, Archie. ARCHIE: It's a little funny.
[beat 3] GWENDOLINE: Hold still, Teddy. THEODORA: I am still.
[beat 4] BILLIE: Mr. Pendergast-Mwangi, I know her lines. ALOYSIUS: Darling, you are an understudy. BILLIE: I'm a good understudy. RODERICK: She really is, Aloysius. ARCHIE: She did the balcony scene in her sleep last week. ALOYSIUS: Because that is an excellent use of sleep.
[beat 5] The speaker hisses louder: the house lights dim, applause rises.
[beat 6] THEODORA: Aloysius, she's not coming. ALOYSIUS: She will. THEODORA: She will not.
[beat 7] GWENDOLINE: She will if I go and get her.
[beat 8] She spits the pins into her palm and marches out.
[beat 9] ARCHIE: Billie, you're up. BILLIE: Me? RODERICK: Take the wreath.
[beat 10] Archie lifts the wreath off his own head and lowers it onto hers.
[beat 11] She stares into the mirror. Her hands stop shaking.
[beat 12] Gwendoline sails back in, towing a tearful woman in a bathrobe. GWENDOLINE: Here she is.
[beat 13] Billie and the woman in the bathrobe look at each other, and Billie hands back the wreath without a word.

### SCENE s00052 | INT. COURTROOM, MARITIME LAW DIVISION - DAY
Characters: JUDGE HORTENSE ABELARD-OKONKWO, PERCIVAL GRIMSDYKE, BEATRIX NAKAMURA-FLYNN
[beat 0] Dark oak. Brass fittings. A model of a container ship sits on the evidence table, its cranes frozen mid-lift. Salt-water stains the carpet near the jury box, a leak the clerk has long stopped noticing. JUDGE HORTENSE ABELARD-OKONKWO (60s, half-moon glasses, voice like creaking rope) presides. At the plaintiff's table stands attorney PERCIVAL GRIMSDYKE (50s, pinstripe, cane) with a thick binder. Across the aisle, defense counsel BEATRIX NAKAMURA-FLYNN (40s, severe bun, red pen) leans casually on her chair.
[beat 1] JUDGE ABELARD-OKONKWO: Mr. Grimsdyke, you may proceed with your closing. GRIMSDYKE: Thank you, Your Honor.
[beat 2] He rises slowly, leaning on the cane. He addresses the empty jury box as though it were full.
[beat 3] GRIMSDYKE: Ladies and gentlemen, this case is about a ship. It is also about a promise. NAKAMURA-FLYNN: It's about a bill of lading. GRIMSDYKE: The Meridian Star sailed from Rotterdam with four thousand containers. Four thousand promises. Not one was delivered intact.
[beat 4] JUDGE ABELARD-OKONKWO: Mr. Grimsdyke, I hope you're going somewhere with this. GRIMSDYKE: Yes, Your Honor.
[beat 5] He lifts the model ship from the table and turns it in his hands.
[beat 6] GRIMSDYKE: My client alleges that Ms. Nakamura-Flynn's client knowingly loaded cargo in violation of Article Nine.
[beat 7] NAKAMURA-FLYNN: Objection. Speculation. JUDGE ABELARD-OKONKWO: Sustained. Rephrase.
[beat 8] GRIMSDYKE: My client alleges that the knowledge was there. NAKAMURA-FLYNN: Objection. Still speculation.
[beat 9] JUDGE ABELARD-OKONKWO: Overruled. I'm curious.
[beat 10] Nakamura-Flynn sits, tapping her pen. GRIMSDYKE: Finally.
[beat 11] He sets the model down gently. It tips on its stand, a crane snaps off, and the sound ricochets around the silent room.
[beat 12] GRIMSDYKE: Four thousand promises, ladies and gentlemen. And a clerk who never fixed the leak.
[beat 13] JUDGE ABELARD-OKONKWO: Mr. Grimsdyke. GRIMSDYKE: Your Honor? JUDGE ABELARD-OKONKWO: That's enough.
[beat 14] He bows, retrieves his cane, and sits.
[beat 15] Nakamura-Flynn rises, buttons her jacket, and walks calmly to the evidence table. She picks up the broken crane and weighs it in her palm.
[beat 16] NAKAMURA-FLYNN: Your Honor, my learned friend has just proven my case. JUDGE ABELARD-OKONKWO: Do enlighten us.
[beat 17] NAKAMURA-FLYNN: A crane cannot be loaded wrong. It can only be broken. And broken things get insured.
[beat 18] Grimsdyke closes his eyes. The judge exhales through her nose, and removes her glasses.
[beat 19] JUDGE ABELARD-OKONKWO: We will recess for lunch.

### SCENE s00053 | INT. OPEN-PLAN OFFICE, SYNERGY HOLDINGS - DAY
Characters: RAY, FENNIMORE-SALAZAR, DELPHINE OKAFOR-LUND, INTERN QUENTIN BOSCH
[beat 0] Cubicles. Motivational posters. A broken ficus. A whiteboard reads: PIVOT TO JOY. RAYMOND "RAY" FENNIMORE-SALAZAR (40s, vice president of Vibes, a lanyard of lanyards) claps his hands. DELPHINE OKAFOR-LUND (30s, tired, double-fisted coffee) watches from her desk. Next to her sits INTERN QUENTIN BOSCH (20s, tie from a high school dance).
[beat 1] RAY: Team! Quick sync. DELPHINE: It's four-fifty-nine. RAY: Perfect time for a sync! QUENTIN: He means a meeting. RAY: A circle-back! A deep dive! A moment of alignment! DELPHINE: It's a Friday. RAY: Friday is the new Monday.
[beat 2] He draws a giant circle on the whiteboard, then another, then a third. Delphine and Quentin stare, appalled.
[beat 3] RAY: Who can tell me what this means? QUENTIN: ^Three circles. DELPHINE: ^Three circles.
[beat 4] They say it together. Ray points at them both, delighted.
[beat 5] RAY: Exactly! The Triple Loop!
[beat 6] DELPHINE: Ray. RAY: Yes? DELPHINE: I'm going home. RAY: Is that a no on the loop?
[beat 7] She gathers her bag. Quentin, loyal, stays seated.
[beat 8] QUENTIN: I like the loop, Ray. Ray beams.
[beat 9] Delphine pauses in the doorway. DELPHINE: Quentin. Run.

### SCENE s00054 | EXT. DUST-CHOKED TRADING POST, HIGH PLAINS - AFTERNOON
Characters: SALT, NAILS, SPARROW, CROWFOOT, POSTMISTRESS CLEMENTINE VANDERMEER, SHERIFF AUGUSTINE BELL, WILLET FAIRBANKS
[beat 0] A sagging porch. A horse trough green with scum. Wind pushes tumbleweeds past hitching posts that have not held a horse in weeks. A hand-painted sign reads: SALT - NAILS - SOULS. ELIJAH "SPARROW" CROWFOOT (30s, braided hair, buckskin vest) leans on a porch rail, whittling. Inside the doorway sits POSTMISTRESS CLEMENTINE VANDERMEER (60s, gingham, shotgun across her lap) with a ledger. A rider approaches: SHERIFF AUGUSTINE BELL (40s, moustache, sweat-stained hat), trailed by a young deputy, WILLET FAIRBANKS (18, gun belt too big for his hips).
[beat 1] Bell dismounts and strides to the porch. Willet slides off his horse, trips over a stirrup, rights himself, and follows, one hand on his holster.
[beat 2] BELL: Sparrow. SPARROW: Sheriff.
[beat 3] BELL: You were seen near the Henderson place. SPARROW: Lot of people were near the Henderson place.
[beat 4] CLEMENTINE: Gus, that boy was at my counter all morning. BELL: Was he? CLEMENTINE: Bought nails.
[beat 5] BELL: How many?
[beat 6] CLEMENTINE: Enough for a coffin.
[beat 7] A cold quiet. Sparrow continues to whittle. Willet licks his lips.
[beat 8] WILLET: Sheriff, should I-- BELL: No.
[beat 9] Sparrow finishes the carving and holds it up: a tiny wooden bird. He sets it on the rail between them.
[beat 10] SPARROW: I didn't kill him. BELL: No one said you did.
[beat 11] SPARROW: Then why's the boy sweating?
[beat 12] Everyone looks at Willet. He blanches. WILLET: It's hot.
[beat 13] CLEMENTINE: ^It's ninety degrees. BELL: ^It's ninety degrees.
[beat 14] They speak together, and Bell shoots her a look. She shrugs, rocks the shotgun on her lap, and says nothing more.
[beat 15] Sparrow slides the bird toward Willet.
[beat 16] The boy stares at it, shaking, and as Bell turns to him, the wind drops. Even the tumbleweeds stop rolling.

### SCENE s00055 | INT. UNDERGROUND PARKING STRUCTURE, LEVEL P4 - NIGHT
Characters: DETECTIVE IGNACIO PALAZZO-MENSAH, COLLETTE ARMSTRONG-DUBOIS, INFORMANT, BRIDGET QUILLFEATHER, DETECTIVE MARCUS OYELARAN-STROUD, SOPHRONIA HALLIWELL
[beat 0] Concrete columns. Dripping pipes. Fluorescent tubes that buzz and flicker. Oil stains like ink blots. At the far end, a stairwell door hangs ajar. DETECTIVE IGNACIO PALAZZO-MENSAH (40s, trench coat, a limp, a gun held low) slips between two parked sedans. Behind him, FBI analyst COLLETTE ARMSTRONG-DUBOIS (30s, ballistic vest over a cardigan) clutches a laptop. In the shadows, a figure in a gray hoodie crouches: the INFORMANT, BRIDGET QUILLFEATHER (20s, nervous eyes, pale as paper). A ways off, DETECTIVE MARCUS OYELARAN-STROUD (50s, radio at his collar) circles the perimeter, and in a car at the exit ramp, driver SOPHRONIA HALLIWELL (30s, headset, steady) watches the mirror.
[beat 1] IGNACIO: Bridget, where's the package? BRIDGET: Level three. In the van.
[beat 2] COLLETTE: Level three isn't on the schematic. BRIDGET: It's not on anything.
[beat 3] MARCUS: All units, hold positions.
[beat 4] A steel door clangs somewhere. Everyone freezes. A distant engine idles. Headlights sweep across the pillars and swing away.
[beat 5] IGNACIO: Easy.
[beat 6] Collette types something silent. Bridget wipes her sweaty palms on her knees.
[beat 7] SOPHRONIA: Exit ramp clear. For now.
[beat 8] BRIDGET: They'll see the lights. IGNACIO: They already know we're here. BRIDGET: Then why--
[beat 9] A gunshot cracks across the garage. A windshield bursts.
[beat 10] Ignacio shoves Bridget flat. Collette dives behind a column, laptop sliding across the concrete. Marcus sprints toward the sound. Sophronia guns the engine and the car leaps forward.
[beat 11] Another shot. Another. The echoes pile on each other until the whole structure rings like a struck bell.
[beat 12] MARCUS: Contact! North ramp!
[beat 13] IGNACIO: Get her out! COLLETTE: What about you? IGNACIO: Go!
[beat 14] Collette grabs Bridget's hand and they run for the stairwell, ducking low between sedans.
[beat 15] Ignacio rises, fires twice, and ducks.
[beat 16] SOPHRONIA: Marcus, Ignacio, I'm coming around.
[beat 17] Her car shrieks around a column and slams to a stop in front of Collette and Bridget. The back door flies open. SOPHRONIA: Get in!
[beat 18] They pile into the back seat. Ignacio sprints, vaults the hood, and drops into the front. Marcus dives in last.
[beat 19] The car lurches forward as bullets rake the trunk. MARCUS: Drive! SOPHRONIA: I am driving!
[beat 20] The car roars up the ramp and out into the rain.

### SCENE s00056 | INT. FUNERAL PARLOR BACK OFFICE - NIGHT
Characters: LARRY, PIETRZAK, VERONICA CHEN-ADEYEMI, MILO, TOBIAS WREN, CALLER
[beat 0] Wood paneling. Lilies in a vase. A desk lamp turned low. A phone sits on the blotter like a sleeping animal. LAWRENCE "LARRY" PIETRZAK (50s, undertaker's black suit, tie loosened) counts bills at the desk. In the armchair sits his partner, VERONICA CHEN-ADEYEMI (40s, perfect posture, gloves on). On the sofa, a boy, MILO (teen, school blazer), turns an unlit candle over in his hands. At the window stands a figure, silent, looking out at the parking lot: TOBIAS WREN (30s, long coat).
[beat 1] The phone rings. Veronica lifts her eyes. Larry stops counting.
[beat 2] LARRY: Leave it. VERONICA: It's the fourth time.
[beat 3] Larry's thumb works the edge of the bills. Milo sets the candle down.
[beat 4] MILO: Should I-- LARRY: No.
[beat 5] The phone rings. Rings. Rings.
[beat 6] Wren turns from the window, watches the receiver, and picks it up without speaking. He listens. A thin voice crackles through.
[beat 7] CALLER: Is the arrangement still on for tomorrow?
[beat 8] Wren looks at Larry. Larry nods once.
[beat 9] WREN: It is.
[beat 10] He hangs up.
[beat 11] Veronica unfolds her gloved hands, and, for the first time, Larry meets Milo's eyes.

### SCENE s00057 | EXT. ICE-LOCKED RIVER BARGE, ARCTIC - DAWN
Characters: ASTRID BJORNSDOTTIR-NKEMELU, DMITRI KOWALCZYK-ROSS, TOMAS, ISABELLA VERRIDGE-LIM, OKSANA PETRENKO-ABARA
[beat 0] A flat iron barge, locked in white. Its hull creaks. Wind blows ice-dust sideways. A tarp stretched between two crates makes a miserable shelter. Five figures huddle inside it. ASTRID BJORNSDOTTIR-NKEMELU (40s, fur hood, frost-rimmed eyebrows) pours the last of the tea into a tin cup. Next to her, her brother-in-law DMITRI KOWALCZYK-ROSS (50s, giant gloves) feeds a dying camp stove. On the far side, a young couple, TOMAS and ISABELLA VERRIDGE-LIM (20s each, tangled together under one blanket), whisper. At the tarp's mouth, their guide, OKSANA PETRENKO-ABARA (30s, rifle slung, compass in hand), squints at the horizon.
[beat 1] ASTRID: How long? OKSANA: The ice should break by noon. DMITRI: It's been noon for three days.
[beat 2] TOMAS: You okay? ISABELLA: I'm fine. TOMAS: You're shivering. ISABELLA: So are you.
[beat 3] ASTRID: Dmitri, give her your gloves. DMITRI: She has gloves. ASTRID: Not good ones.
[beat 4] Dmitri strips off the enormous gloves and tosses them to Isabella, who catches them against her chest. ISABELLA: Thank you. DMITRI: Don't mention it.
[beat 5] OKSANA: Quiet. All of you.
[beat 6] A deep crack booms from under the barge. The whole deck shudders. Dmitri curses.
[beat 7] Astrid grabs the tin cup before it spills, but Tomas and Isabella, tangled in the blanket, roll toward the gap and Oksana lunges to haul them back from the edge.
[beat 8] OKSANA: Back! Away from the rail!
[beat 9] TOMAS: What is it? OKSANA: The river's moving. DMITRI: Moving? The river's frozen. OKSANA: Not anymore.
[beat 10] The barge tilts, a slow, enormous lean. They scramble over crates. Ice groans like a living thing.
[beat 11] Water, black and glassy, opens in a long line beside the hull.
[beat 12] ASTRID: Everyone to the stern!
[beat 13] They stumble across the tilting deck, Dmitri carrying the stove, Tomas pulling Isabella, Oksana covering the rear. Astrid reaches the stern first and throws a rope to the ice beyond.
[beat 14] Then the barge rights itself with a thunderous slap, and the lean is gone. Ice-dust swirls.
[beat 15] The river, free now, carries them forward.
[beat 16] DMITRI: Noon. OKSANA: Told you.

### SCENE s00058 | INT. COMPANY BREAK ROOM, INNOVATEX CORP - DAY
Characters: GLORIA BANKOLE-VANCE, COLIN DRUMMOND-PARK, SHANTELLE OKONJO-REID
[beat 0] Beige walls. A coffee machine with a handwritten sign: DO NOT USE. A bulletin board layered with expired memos. The microwave hums. A mini fridge stickered with passive-aggressive notes. GLORIA BANKOLE-VANCE (50s, shoulder pads, mug reading WORLD'S OKAYEST BOSS) refills her mug from a thermos she brought herself. Across the table sits COLIN DRUMMOND-PARK (20s, new hire, ironed shirt). At the sink, SHANTELLE OKONJO-REID (30s, hoodie, headphones) scrubs a mug that isn't hers.
[beat 1] GLORIA: Colin, welcome to the family. COLIN: Thank you, Gloria. GLORIA: We do synergy here. COLIN: Great.
[beat 2] GLORIA: We also do Fridays. COLIN: Fridays?
[beat 3] SHANTELLE: She means cake. GLORIA: I mean team-building. SHANTELLE: It's cake.
[beat 4] Gloria beams. Colin tries to look as though he understands.

### SCENE s00059 | INT. PET STORE, REPTILE SECTION - DAY
Characters: BARN, OKAFOR-LINDGREN, JUNIPER VASQUEZ-ABARA, EZEKIEL PRUITT-HALE, DESDEMONA KILLINGSWORTH, TIBBY, MOREAU-WELLS
[beat 0] Heat lamps. Terrariums. A sign: PLEASE DO NOT KNOCK ON GLASS. The air smells of mealworms. BARNABY "BARN" OKAFOR-LINDGREN (30s, apron, name tag crooked) restocks crickets. His coworker JUNIPER VASQUEZ-ABARA (20s, pink hair, bandaged thumb) leans on the counter. A customer, MR. EZEKIEL PRUITT-HALE (70s, tweed cap, binocular case), peers into a tank. At the back door, the manager, DESDEMONA KILLINGSWORTH (40s, clipboard, cheerful menace), rattles keys. And behind the register, a nervous newcomer, TIBERIUS "TIBBY" MOREAU-WELLS (teen, first shift, sweating through his shirt), tries to look busy.
[beat 1] BARN: Juniper, where's the iguana? JUNIPER: In his tank. BARN: Which tank? JUNIPER: The big one.
[beat 2] BARN: That one's empty. JUNIPER: Oh.
[beat 3] They look at each other. Both turn toward Mr. Pruitt-Hale, who is still peering into the empty tank.
[beat 4] EZEKIEL: Fascinating. Where's the lizard?
[beat 5] TIBBY: He's resting!
[beat 6] DESDEMONA: Tibby, don't lie to the customer. TIBBY: I'm not lying! I'm hopeful!
[beat 7] EZEKIEL: Young man, I've bought four geckos from this store. I know when a tank is vacant.
[beat 8] BARN: Sir, it's a rare species. EZEKIEL: Camouflaged? JUNIPER: Extremely.
[beat 9] A thump from the ceiling. All five look up.
[beat 10] A long green tail hangs from a ceiling tile, swaying gently.
[beat 11] Tibby faints into the cricket display.
[beat 12] Desdemona sighs and heads for a ladder.

### SCENE s00060 | INT. SLEEPING CAR, NIGHT TRAIN - NIGHT
Characters: BARNABAS HOLT, LEOPOLD VANCE, ISADORA FEYERABEND
[beat 0] Brass lamps swing with the rails. Rain beads the window. On the table between the seats, a chess set mid-game and an untouched bottle of wine. BARNABAS HOLT (50s, silver beard) leans back with his hands folded. Opposite him sits LEOPOLD VANCE (50s, silver moustache), staring at the board. At the door, the conductor, ISADORA FEYERABEND (30s, brass buttons), has just finished punching tickets.
[beat 1] BARNABAS: Your move. LEOPOLD: I know.
[beat 2] ISADORA: Gentlemen, we reach Vienna at dawn. LEOPOLD: Plenty of time to lose. BARNABAS: Time for you to lose.
[beat 3] ISADORA: You've both been playing since Prague. LEOPOLD: He cheats. BARNABAS: He sulks.
[beat 4] ISADORA: One of you left this on the floor. She holds up a small brass key.
[beat 5] Barnabas reaches for it. Leopold reaches too.
[beat 6] They both stop, hands in the air.
[beat 7] He looks at the key. He looks at the other man.
[beat 8] He knows.
[beat 9] LEOPOLD: That opens the trunk in the baggage car. BARNABAS: Does it?
[beat 10] ISADORA: It does. And the trunk is empty.
[beat 11] She closes the door behind her. The train rattles on through the dark.

### SCENE s00061 | EXT. TRENCH LINE, RAIN-SOAKED FIELD - NIGHT
Characters: PENROSE, SERGEANT BAPTISTE ONWUACHI, PRIVATE ELIAS FJELDSTAD-MORENO
[beat 0] A sheet of rain. Barbed wire sags in the flare light. Mud sucks at every boot. LIEUTENANT ARCHIBALD "ARCHIE" PENROSE (30s, helmet strap loose, flashlight taped) crouches with a map. SERGEANT BAPTISTE ONWUACHI (40s, thick forearms, helmet dented) checks his rifle. PRIVATE ELIAS FJELDSTAD-MORENO (19, trembling, bayonet fixed) hugs the trench wall.
[beat 1] PENROSE: Sergeant, status? ONWUACHI: Half the men are asleep. FJELDSTAD-MORENO: I'm not asleep. ONWUACHI: Nobody said you were.
[beat 2] PENROSE: Elias, keep your head down. FJELDSTAD-MORENO: Yes sir.
[beat 3] ONWUACHI: Fix bayonets! On my word!
[beat 4] A whistle shrieks. Penrose and Onwuachi look up as one.
[beat 5] Elias presses his forehead to the mud. PENROSE: Dear God.
[beat 6] ONWUACHI: Now!
[beat 7] The whole trench erupts. Men climb out of the earth.
[beat 8] Elias stays frozen until Onwuachi hauls him up by the collar and drags him into the dark.

### SCENE s00062 | INT. ROLLER DERBY RINK, LOCKER ROOM - EVENING
Characters: BRUISER, OKONKWO-LARSSON, JOSEFINA ABERNATHY-SILVA, HORTY, BELLAMY-OKORO
[beat 0] Rows of dented lockers. Skates on benches like sleeping animals. A banner on the wall: THE IRON MAIDENS OF MERIDIAN. The air smells of liniment and nerves. BRYNHILDE "BRUISER" OKONKWO-LARSSON (30s, shoulders like a door, face paint half-applied) laces her skates with ferocious focus. Beside her, rookie JOSEFINA ABERNATHY-SILVA (19, stiff new helmet, wide eyes) copies every move. Across the room, coach HORTENSIA "HORTY" BELLAMY-OKORO (50s, whistle, tracksuit) leans against a locker with a clipboard.
[beat 1] HORTY: Ladies. Last bout of the season. BRUISER: We know.
[beat 2] HORTY: Josefina, this is your first jam. JOSEFINA: I know. HORTY: You'll be nervous. JOSEFINA: I'm not nervous.
[beat 3] BRUISER: She's nervous. HORTY: Good. Nerves keep you alive.
[beat 4] She blows the whistle once, softly, as a kind of benediction.
[beat 5] Bruiser stands, rolling her neck.
[beat 6] BRUISER: Come on, kid. Stay on my hip. JOSEFINA: Where's your hip? BRUISER: Wherever it is when you need it.
[beat 7] They stack fists. The crowd roars outside.
[beat 8] A door bangs.
[beat 9] The three women walk out together into a tunnel of light.

### SCENE s00063 | EXT. FLOATING MARKET ON THE SKY-LAKE OF AELDRATH - DAWN
Characters: THESSALONIKE VANTERPOOL-ORUNMILA, CORNELIUS ABRAHAM-WYNNE, MORWENNA
[beat 0] Boats hang in the air on ropes of braided cloud. Merchants shout over a sea of drifting lanterns. Gulls the color of silver coins wheel overhead. Far below, a moonlit ocean. A skiff drifts toward the market's edge. At its tiller sits THESSALONIKE VANTERPOOL-ORUNMILA (30s, battered leather coat, a cutlass at her belt). Behind her, the apprentice-mage CORNELIUS ABRAHAM-WYNNE (19, ink-stained fingers, spellbook hugged). Between them, hooded and silent, a cloaked woman waits: this is MORWENNA (age unknown, eyes like twin moons).
[beat 1] THESSALONIKE: Hold on. CORNELIUS: To what? THESSALONIKE: Anything.
[beat 2] The skiff slams into the dock. Cornelius pitches forward and Morwenna catches him by the collar without opening her eyes.
[beat 3] MORWENNA: Careful, child. CORNELIUS: I'm trying. MORWENNA: Try harder.
[beat 4] THESSALONIKE: We have until noon. Cornelius, you find the spice merchant. Morwenna, the cloud-weaver. I'll find the passage.
[beat 5] CORNELIUS: What passage? THESSALONIKE: The one that isn't on the map. MORWENNA: It never is.
[beat 6] They split. Thessalonike weaves through the crowd, hand on her cutlass. Cornelius ducks under a banner of dried starfish. Morwenna drifts like smoke, unhurried, and stalls fall quiet as she passes.
[beat 7] At the spice stall, Cornelius meets a vendor with ten arms. Everything he says comes out in a nervous rush. CORNELIUS: Er, hello, I need saffron. The sky kind. Not the ground kind.
[beat 8] At the weavers' stall, Morwenna lifts a veil of mist, and the old woman behind it kneels.
[beat 9] MORWENNA: Don't. I am not what I was.
[beat 10] Thessalonike, meanwhile, finds an iron door half-sunk in a wall of cloud. She puts her palm on it. It hums.
[beat 11] She grins. THESSALONIKE: There you are.
[beat 12] Behind her, Cornelius and Morwenna arrive, panting, arms full of paper-wrapped parcels. CORNELIUS: Got the saffron! MORWENNA: Got the weaving. THESSALONIKE: Got the door.
[beat 13] They stare at it.
[beat 14] The hum swells to a chord, and the iron door swings open on a stair of falling stars.
[beat 15] CORNELIUS: Is that safe? MORWENNA: Nothing is.
[beat 16] Thessalonike steps through first. Cornelius follows.
[beat 17] Morwenna pauses, glances back over the market, and whispers to the bright, indifferent sky.
[beat 18] MORWENNA: Forgive us.

### SCENE s00064 | INT. SAFE-DEPOSIT VAULT, PRIVATE BANK - NIGHT
Characters: GIDEON ASHWORTH-DEMBELE, LUCRETIA FONTAINE-OKAFOR
[beat 0] Rows of brass boxes under a vaulted ceiling. A single green banker's lamp. The air is cold and smells of old metal. GIDEON ASHWORTH-DEMBELE (50s, impeccable suit, silver cufflinks) stands before an open drawer, fingers curled around a velvet pouch. Facing him, in the narrow aisle, LUCRETIA FONTAINE-OKAFOR (40s, black gloves, revolver steady) blocks his exit.
[beat 1] Gideon turns. Lucretia does not lower the gun.
[beat 2] GIDEON: You're early. LUCRETIA: You're late.
[beat 3] Gideon smiles and lifts the pouch. Lucretia's eyes drop to it.
[beat 4] GIDEON: ^It's not what you think. LUCRETIA: ^It's exactly what I think.
[beat 5] They speak together, flat, certain. A drip falls somewhere in the dark.
[beat 6] GIDEON: Lucretia. Put it down. LUCRETIA: You first.
[beat 7] He opens his fingers. The pouch lands on the marble with a soft chink.
[beat 8] Lucretia exhales, almost relieved, and kicks it toward the wall.
[beat 9] The gun doesn't waver.

### SCENE s00065 | INT. GRAND HOTEL LOBBY - DAY
Characters: CORNY, BELLWEATHER, PRUDENCE, LEOPOLDINA ARCHAMBAULT-DIOP, CALLER
[beat 0] Marble pillars. A revolving door that sighs with each turn. A brass bell on the concierge desk. A poodle in a rhinestone collar naps under a velvet bench. CORNELIUS "CORNY" BELLWEATHER (50s, three-piece suit, monocle) sits in a chair and pretends to read a newspaper. Across from him on a sofa, his wife PRUDENCE (40s, enormous hat, fan) watches him with mounting suspicion. At the desk, the concierge LEOPOLDINA ARCHAMBAULT-DIOP (30s, immaculate, bored) files her nails.
[beat 1] She shifts. He shifts. The poodle yawns.
[beat 2] PRUDENCE: Corny, you're holding the paper upside down. CORNY: Am I? PRUDENCE: The pictures are standing on their heads. CORNY: Modern art.
[beat 3] She snaps her fan.
[beat 4] A telephone on the desk rings, and Leopoldina answers in a voice like warm butter. LEOPOLDINA: Front desk. Yes, Mr. Bellweather is in the lobby. No, he is not expecting a call.
[beat 5] Corny rises so quickly the newspaper flies. He crosses the lobby in three long strides and tries to take the phone from her hand.
[beat 6] LEOPOLDINA: Sir, it's for the hotel. CORNY: It's for me.
[beat 7] PRUDENCE: Corny, who is it? CORNY: Nobody! Wrong number!
[beat 8] CALLER: Corny? It's Fifi. Are you coming up?
[beat 9] Silence. Leopoldina's eyebrow rises half an inch.
[beat 10] Prudence stands. The poodle wakes.
[beat 11] PRUDENCE: Corny.
[beat 12] CORNY: She's the dog groomer. PRUDENCE: At the Grand Hotel. CORNY: They have a salon.
[beat 13] PRUDENCE: They do not. LEOPOLDINA: We do not.
[beat 14] Corny, defeated, takes the receiver. He puts it to his ear and listens a long moment, then speaks.
[beat 15] CORNY: I'll be right up. Tell her to bring the poodle.
[beat 16] Prudence follows his gaze to the dog under the bench. It wags its tail.
[beat 17] Leopoldina hangs up and, with perfect composure, lifts the brass bell and rings it once.

### SCENE s00066 | INT. HOSPITAL ROOFTOP HELIPAD - DAWN
Characters: NATHANIEL OYELOWO-STRAND, NURSE PHILOMENA BRANDT-ADEYEMI, GASPAR LINDQVIST-MBEKI, DISPATCH
[beat 0] Concrete, windsock, a single orange cone. The city spreads below in blue haze. A rusted door clatters open. DR. NATHANIEL OYELOWO-STRAND (40s, scrubs, blood on one cuff) steps out, breathing. Behind him comes NURSE PHILOMENA BRANDT-ADEYEMI (30s, braids, hospital badge swinging). Nearby, an orderly, GASPAR LINDQVIST-MBEKI (20s, lanky, mop bucket), smokes against the rail.
[beat 1] NATHANIEL: Third night in a row. PHILOMENA: You keep coming up here. NATHANIEL: Nobody follows me. PHILOMENA: I followed you.
[beat 2] GASPAR: So did I. I was here first.
[beat 3] The radio on Philomena's belt crackles. DISPATCH: Trauma Two, inbound helicopter, ETA four minutes. Pediatric, severe burns.
[beat 4] Nathaniel straightens. Philomena grabs the radio.
[beat 5] PHILOMENA: Copy. Pad is clear.
[beat 6] She and Nathaniel look at Gaspar, who drops his cigarette and stamps it out. The windsock snaps taut.
[beat 7] NATHANIEL: Gaspar, the cone. GASPAR: On it.
[beat 8] He drags the orange cone aside.
[beat 9] In the distance, a speck grows into the rising hammer of rotors.

### SCENE s00067 | INT. REVOLVING RESTAURANT ATOP A SKYSCRAPER - NIGHT
Characters: AUGUSTINE KORMANN-DELACROIX, SALOME BRANDT-OYELARAN, WENDELIN ASHFORD-PETROV
[beat 0] The city turns slowly beyond a wall of glass. White tablecloths, low candles. A string quartet plays something sorrowful. Every table is full, except one. At that table, three people sit in a tight triangle: AUGUSTINE KORMANN-DELACROIX (50s, charcoal suit, hands always moving), SALOME BRANDT-OYELARAN (40s, emerald dress, cool eyes), and WENDELIN ASHFORD-PETROV (30s, black turtleneck, a briefcase handcuffed to his wrist).
[beat 1] AUGUSTINE: Salome, you look radiant. SALOME: I look hungry. WENDELIN: The soup is good.
[beat 2] SALOME: Wendelin, it's soup. WENDELIN: It's very good soup.
[beat 3] AUGUSTINE: Shall we order? SALOME: We shall not.
[beat 4] She sets down her fork. He lays his napkin across his knee.
[beat 5] The restaurant turns. A new skyline slides into view.
[beat 6] AUGUSTINE: You know why I asked you here. SALOME: I have a theory.
[beat 7] WENDELIN: She has several. SALOME: I have one.
[beat 8] AUGUSTINE: Then say it.
[beat 9] SALOME: You want what's in the case.
[beat 10] Wendelin's hand tightens on the handle. Augustine lets the quartet play four more bars.
[beat 11] AUGUSTINE: I want you to open it.
[beat 12] SALOME: I don't have the key. AUGUSTINE: You do. SALOME: I don't.
[beat 13] WENDELIN: She doesn't.
[beat 14] AUGUSTINE: Then who does?
[beat 15] A beat. The restaurant turns again, and the three of them watch the city pass beneath them, glittering and indifferent.
[beat 16] Salome lifts her water glass.
[beat 17] SALOME: Order the soup, Augustine.

### SCENE s00068 | EXT. DRIFTING LIFE RAFT, OPEN OCEAN - DAWN
Characters: CAPTAIN MAGDALENA OYELARAN-STROUD, DESMOND PRIESTLEY-ADEKUNLE, ROSALIND FAIRBANKS-NAKAMURA, TIBBY, OKONJO
[beat 0] Flat grey sea. A pale sun. The raft rocks gently on swells too slow to feel. Four survivors sit in the orange hull. CAPTAIN MAGDALENA OYELARAN-STROUD (50s, sunburnt scalp, torn epaulettes) holds a tin cup of rainwater with both hands. Beside her, first officer DESMOND PRIESTLEY-ADEKUNLE (40s, a bandaged forearm) scans the horizon with a cracked sextant. In the middle, a passenger, ROSALIND FAIRBANKS-NAKAMURA (30s, gold watch, salt-white hair), whispers to a drowned photograph. At the stern, deckhand TIBERIUS "TIBBY" OKONJO (20s, shirtless, ribs showing) trails a fishing line in the water.
[beat 1] MAGDALENA: Divide it. DESMOND: It's a thimble each. MAGDALENA: Then divide a thimble.
[beat 2] She hands him the cup.
[beat 3] He drinks his share and passes it to Rosalind, who stares at it without lifting it. Tibby doesn't look up from the line.
[beat 4] TIBBY: Got something. DESMOND: Don't pull. TIBBY: It's pulling me.
[beat 5] The line goes taut. Tibby braces, boots on the rubber hull, then leans back with a roar.
[beat 6] Magdalena grabs his belt, Desmond hooks an arm around her waist, and Rosalind, still clutching the photograph, tumbles into a heap with all three as a flash of silver hurls itself over the side.
[beat 7] They tangle. A gleaming fish thrashes on the floor of the raft, spraying water on every face.
[beat 8] Magdalena pins it, Tibby clubs it with the cup, and silence returns.
[beat 9] TIBBY: Dinner. MAGDALENA: Dinner.
[beat 10] Rosalind lifts her head and, for the first time, smiles.

### SCENE s00069 | EXT. WILLOW GROVE AT THE EDGE OF THE WORLD - TWILIGHT
Characters: STRANGER, VOICE, WREN
[beat 0] Weeping willows, silver in the dusk. Fireflies drift between branches like slow sparks. A pond mirrors a sky with two moons. A stone well stands among the roots, its lip furred with moss.
[beat 1] A STRANGER walks into the grove: a woman, ageless, barefoot, wrapped in a patchwork cloak that shifts color as she moves. She carries a lantern with no flame, only a glow like captured dawn.
[beat 2] She stops at the well and sets the lantern on its lip. STRANGER: I hear you.
[beat 3] The willows rustle. A firefly lands on her sleeve, and she watches it breathe. STRANGER: I know. I know. It's been a long road.
[beat 4] A voice rises from the well, deep and wet and patient, as though spoken through a thousand years of stone.
[beat 5] VOICE: Who comes to the Mouth of Names? STRANGER: A traveler. VOICE: Travelers bear names. STRANGER: Mine fell off the road a long way back.
[beat 6] She kneels. She dips her hand into the cold dark water. Ripples spread, and the fireflies pause in the air, holding their light.
[beat 7] VOICE: Then I shall give you one. STRANGER: Give me a good one.
[beat 8] The water brightens, silver then gold. When it clears, the surface shows a face: not hers, but a girl's, laughing.
[beat 9] VOICE: Wren.
[beat 10] The woman closes her eyes. The cloak settles to a single color: the deep green of willow leaves.
[beat 11] WREN: Wren.
[beat 12] She rises, shoulders loose, as though a weight has slid off. She picks up the lantern. Its glow steadies and warms.
[beat 13] WREN: Thank you. VOICE: Walk well, Wren.
[beat 14] She leaves the grove. Behind her, the willows close their branches like curtains. The fireflies resume their drift, and the two moons climb.

### SCENE s00070 | INT. ICE-TUG COOLANT GALLERY - DRIFT SHIFT
Characters: TESS OKONKWO, BRANDR HALVORSEN
[beat 0] Frost on every rivet. Amber work lights flicker down a corridor choked with pipe.
[beat 1] TESS OKONKWO (30s, burn scar across one palm, tool belt hanging low) drags a sled of frozen valve housings past a hatch while BRANDR HALVORSEN (50s, enormous, a thermos strapped to his chest like a medal) kneels at a leaking manifold, wrench in one fist, the other hand flat against the pipe as if feeling for a pulse. Tess kicks the sled brake, taps the gauge, and taps it again. Brandr doesn't look up.
[beat 2] TESS: All hands on nine, gallery four is weeping coolant. Stay out of the aft ring. No answer. Static, then nothing. TESS: Of course. Of course you're all asleep.
[beat 3] BRANDR: Hand me the forty. She slides a wrench across the deck. He ignores it and keeps his palm on the pipe. BRANDR: It's not leaking. It's breathing. TESS: Pipes don't breathe. BRANDR: This one's learned.
[beat 4] The manifold gives a long, wet exhale. A white plume rolls across the ceiling. Tess backs into the sled, Brandr rocks onto his heels, and the work lights die one by one down the corridor, leaving only the glow of the gauge. TESS: Everyone brace. Pressure drop, thirty seconds. BRANDR: Easy, girl. Easy.
[beat 5] The gauge needle sags, hovers, and slowly climbs. The lights stutter back. Tess laughs once, short, and sits on the sled. Brandr unscrews his thermos and pours steaming coffee into the cap, which he holds out to her without looking. TESS: You knew it would settle. BRANDR: No. She takes the cap anyway.
[beat 6] Behind them, the pipe begins to knock, slow and rhythmic, like someone asking to be let in. TESS: Brandr. BRANDR: I heard it.
[beat 7] The knocking speeds up. They both stand.

### SCENE s00071 | INT. CLOSED FUNICULAR STATION - WAITING ROOM - NIGHT
Characters: AGNES PRUITT, DELROY CAMPBELL, WEI-LING CHOU, FATHER TOBIAS
[beat 0] Wooden benches, a dead ticket window, a brass clock stopped at ten past four. Rain ticks on a skylight.
[beat 1] AGNES PRUITT (60s, retired schoolteacher, buttoned to the chin) pours tea from a flask into four paper cups. DELROY CAMPBELL (40s, line mechanic in a grease-stained parka) sits on the bench by the door. WEI-LING CHOU (30s, insurance investigator, wet umbrella across her knees) studies the clock. FATHER TOBIAS (70s, rumpled cardigan under a black coat) leans on the ticket window, humming.
[beat 2] AGNES: Sugar, anyone? DELROY: Just the tea. WEI-LING: Who owns this station now, Mr. Campbell? DELROY: The company. Nobody comes up here but me. FATHER TOBIAS: And us. A fine thing, the four of us in a snowglobe. AGNES: It's rain, Father. FATHER TOBIAS: Then a rain globe.
[beat 3] Wei-Ling accepts a cup, sips, and smiles for the first time. WEI-LING: It's good tea. AGNES: I know.
[beat 4] Wei-Ling lowers the cup. Her eyes go to the ticket window. A faint metal glint sits behind the grille. WEI-LING: Mr. Campbell. Is that the cash box?
[beat 5] Delroy and Father Tobias both look at the window. Nobody speaks. Delroy stands. DELROY: It was empty when I locked it. AGNES: Was it?
[beat 6] Delroy lunges for the window. Father Tobias steps in front of him, and the two grapple against the counter, the old priest surprisingly strong. Wei-Ling drops the umbrella and tries to pull them apart.
[beat 7] Agnes sets down the flask, calmly, and the three of them freeze as she opens her coat to show a revolver tucked in her belt. AGNES: The tea was only for waiting.
[beat 8] Wei-Ling's cup slips from her hand. Delroy slumps onto the bench. The clock, for no reason at all, ticks forward one minute.

### SCENE s00073 | INT. RIVERBOAT CASINO COURTROOM - DAY
Characters: CLEMENTINE ASHWORTH, MAXWELL DRUMM, JUDGE ISADORA FENWICK, BAILIFF NORBERT KWASNIEWSKI
[beat 0] A gambling hall converted into a temporary courtroom after the flood. Slot machines are draped in canvas, and brown water stains climb the walls. A judge's bench has been built from a roulette table.
[beat 1] CLEMENTINE ASHWORTH, the defense attorney, stands at a card table with her hands folded. She is sharp, silver-haired, and never hurried. Across from her, MAXWELL DRUMM, the prosecutor, flips through a damp stack of papers. He is young and eager, and his collar is two sizes too big. At the roulette bench, JUDGE ISADORA FENWICK adjusts her glasses and glares down at both of them. Near the door, BAILIFF NORBERT KWASNIEWSKI shifts his weight, his hand resting on a holstered flashlight.
[beat 2] JUDGE FENWICK: Mr. Drumm. You were saying. He clears his throat and rises, dropping a page. He stoops, recovers it, and comes up red.
[beat 3] MAXWELL: Your Honor, the State maintains the defendant knowingly opened the sluice gates. CLEMENTINE: Objection. He has not yet shown a single witness who saw her touch them. JUDGE FENWICK: Sustained. Move along.
[beat 4] Maxwell glances at his notes, then at the bailiff, who gives him nothing. He swallows. MAXWELL: Then I call the night watchman.
[beat 5] Norbert opens the door. No one is there. He steps out, comes back, and shrugs. NORBERT: He ain't come, ma'am. JUDGE FENWICK: Of course he hasn't.
[beat 6] Clementine rises slowly, smoothing her skirt. She walks to the center of the room and lets the silence stand. CLEMENTINE: Your Honor, the State's case is built on a man who is not here, a gate no one saw opened, and a river that has a long habit of rising. Maxwell opens his mouth, and she raises a hand. He closes it. CLEMENTINE: I move to dismiss.
[beat 7] The judge studies her over her glasses, then looks at the stained ceiling, the draped slots, the roulette wheel under her palm. She spins it. It clatters and settles. JUDGE FENWICK: Red seventeen.
[beat 8] She lifts the gavel. JUDGE FENWICK: Dismissed.

### SCENE s00074 | INT. CONVERTED BOWLING ALLEY - OPEN OFFICE - DAY
Characters: GRETCHEN VOSS, BIG DAVE MUNOZ, PRIYA NAIR, LEOPOLD ASHFORD, HANNELORE BRANDT, TOBY OYELARAN
[beat 0] Lanes carpeted over. Desks sit where pins used to stand. The ball return hums.
[beat 1] GRETCHEN VOSS (50s, headset, power blazer) paces the gutter. BIG DAVE MUNOZ (40s, linebacker build, lanyard) hunches over a keyboard. PRIYA NAIR (late 20s, three monitors) types without blinking. LEOPOLD ASHFORD (60s, bowtie) polishes a trophy no one has won. HANNELORE BRANDT (30s, cardigan, furious calm) stares at a spreadsheet. TOBY OYELARAN (20s, intern, backward cap) holds a clipboard like a shield.
[beat 2] She stops. Nobody looks up. GRETCHEN: Quarterly synergy.
[beat 3] Dave stands. Sits. Priya's typing slows, then quickens. Leopold sets down the trophy. LEOPOLD: We are on track. GRETCHEN: Are we.
[beat 4] Hannelore turns her monitor ninety degrees. A red cell glows. Toby takes a half step toward the exit. Gretchen catches it.
[beat 5] GRETCHEN: Toby. TOBY: Yes, Ms. Voss. GRETCHEN: Coffee.
[beat 6] He bolts. Dave watches him go, envious. DAVE: I could use one too. GRETCHEN: You could use a lot of things.
[beat 7] Priya's keyboard stops. Silence. The ball return clunks. PRIYA: The numbers are final. HANNELORE: They are not final. PRIYA: They are final.
[beat 8] Leopold lifts the trophy again and begins to polish with great concentration. Gretchen crosses to Hannelore, leans over, and reads the red cell. She exhales through her nose. GRETCHEN: Fix it. HANNELORE: It's not broken. GRETCHEN: Then make it less true.
[beat 9] Hannelore picks up a pen. Clicks it. Clicks it again. Dave rolls his chair six inches away from her.
[beat 10] Toby returns with six coffees balanced in a cardboard tray, and nobody takes one.

### SCENE s00075 | INT. CHEESE-AGING CAVE - NIGHT
Characters: MARISOL FUENTES, CASPIAN DUBOIS, IGGY BRANNIGAN, SUNITA RAO, MADAME ELOISE THIBAULT
[beat 0] Limestone walls, wooden racks of wheels, a fog of ammonia and mold. A single bulb swings on a cord.
[beat 1] MARISOL FUENTES (30s, climbing harness, headlamp) lowers herself off a ladder while CASPIAN DUBOIS (40s, careful hands, white coat stolen from a cheesemonger) checks a humidity gauge and IGGY BRANNIGAN (20s, nervous, duffel bag) props open the freight door with a wheel of Gruyere. SUNITA RAO (50s, retired locksmith, reading glasses on a chain) kneels at a steel cabinet at the back, picks in hand.
[beat 2] MARISOL: Eleven minutes. That's the guard's loop. CASPIAN: Nine. I counted. IGGY: It smells like feet in here. SUNITA: It smells like money. Hush.
[beat 3] The cabinet clicks. Sunita pulls the door. Inside, velvet-lined shelves cradle a row of small glass jars. Marisol reaches in. MARISOL: Starter cultures. CASPIAN: Four hundred years old. Worth more than gold. IGGY: It's cheese mold. SUNITA: It's the cheese mold.
[beat 4] Iggy lifts a jar. Caspian takes the next one. Marisol begins loading the duffel. Everything is calm, almost gentle, like four people in a pantry.
[beat 5] A flashlight beam sweeps across the entrance.
[beat 6] MADAME ELOISE THIBAULT (70s, nightgown, wellington boots, a shotgun held like an umbrella) steps through the freight door. She does not look surprised. MADAME THIBAULT: Put them back. IGGY: We were just-- MARISOL: Madame, we can explain. CASPIAN: Don't explain. SUNITA: She's holding a shotgun, Caspian, explain something. MADAME THIBAULT: Put them back. Every one. Then you may leave.
[beat 7] The four of them glance at each other. Marisol sets the duffel down. Caspian nudges a jar back with one finger. Iggy sobs quietly. Sunita sighs and replaces the cabinet door.
[beat 8] MADAME THIBAULT: The key is in the left pocket of my robe. It always was. Sunita peers at her. SUNITA: You left it unlocked. MADAME THIBAULT: I left it for the mice. You, I did not expect.

### SCENE s00076 | INT. CONVERTED LIGHTHOUSE - COWORKING SPACE - DAY
Characters: BARNABY STOKES, ORLA FITZGIBBON, JUNG-HO PARK, ADAEZE NWOSU, CEDRIC LAMONT
[beat 0] A spiral staircase of standing desks. Fresnel lens turned into a conference light. Everyone wears matching grey fleece.
[beat 1] BARNABY STOKES (40s, community manager, smiling too hard) claps once at the top of the stairs. ORLA FITZGIBBON (30s, product lead, cold brew) leans on the rail. JUNG-HO PARK (20s, engineer, noise-cancelling headphones) types. ADAEZE NWOSU (30s, designer, sketchbook) draws the lens. CEDRIC LAMONT (50s, investor, borrowed lanyard) examines the view like a purchase.
[beat 2] BARNABY: Hi, team! Quick announcement: we are pivoting.
[beat 3] Nobody moves. Jung-Ho slides one headphone off an ear. JUNG-HO: To what? BARNABY: To the next thing. ORLA: We pivoted Tuesday. ADAEZE: We pivoted into a wall.
[beat 4] CEDRIC: Walk me through the vision. BARNABY: It's a platform for platforms. Orla and Jung-Ho speak at the same moment. ORLA: That's not a product. JUNG-HO: That's a typo. BARNABY: I need you aligned. ORLA: I'm aligned. I'm so aligned I'm sideways.
[beat 5] Cedric descends two steps and peers at Adaeze's sketchbook. CEDRIC: Is that the logo? ADAEZE: It's a lighthouse. CEDRIC: We should keep that. She closes the book very slowly. ADAEZE: It was always the lighthouse.
[beat 6] BARNABY: So! Who's excited? A long pause. The lens rotates. A single pigeon lands on the rail. Jung-Ho raises one hand.
[beat 7] JUNG-HO: Can I be excused? BARNABY: It's a flat org. JUNG-HO: Then I flatly would like to leave.

### SCENE s00077 | INT. SILVER STAR ROLLER RINK - AFTER CLOSING
Characters: NELL ABERNATHY, SOLEDAD IBARRA, HASHIMOTO
[beat 0] The rink is a long amber oval of varnished maple, scuffed grey where a thousand wheels have turned. Disco light dribbles over the empty benches. The carpeted walls smell of popcorn and old rubber. A single overhead fan ticks.
[beat 1] NELL ABERNATHY (16, long-limbed, a cast on one wrist) sits on the bench lacing a skate with her good hand. SOLEDAD IBARRA (16, braids tied up, a jersey two sizes big) circles the floor in slow, practiced loops, trailing one hand along the rail. At the snack counter, MR. HASHIMOTO (70s, cardigan, reading glasses on his forehead) counts the till, never looking up.
[beat 2] She crosses the rink and stops in front of the bench. She looks down at her. She doesn't smile. SOLEDAD: You said you'd tell me. NELL: I know. SOLEDAD: That was Tuesday. NELL: It's complicated.
[beat 3] She pushes off again, harder this time, a loop, then another. Nell watches her go. The fan ticks. At the counter, Mr. Hashimoto slides a stack of bills into a bag and does not look up. MR. HASHIMOTO: Eleven dollars short.
[beat 4] SOLEDAD: It's Nell's thing, it's always Nell's thing. NELL: My thing? SOLEDAD: You and your cast and your secret.
[beat 5] She skates past the bench, close enough that the wind of it lifts the hair on Nell's neck. Nell stands. Her laces hang loose. NELL: You don't know what happened. SOLEDAD: Then tell me.
[beat 6] NELL: I'm leaving.
[beat 7] The word hangs in the air. Soledad stops. The skates scrape, and the sound seems very loud.
[beat 8] Across the rink, the till slams shut. MR. HASHIMOTO: Girls. Lights in five.
[beat 9] Soledad pulls off a skate and throws it. It skids across the maple and clatters against the wall.
[beat 10] Nell flinches, then crosses the floor in her socks, stoops, and picks the skate up. She holds it out. Soledad does not take it.

### SCENE s00078 | INT. ALL-NIGHT LAUNDROMAT - 3 A.M.
Characters: VINNIE CALDERONE, SHAUNTAE BRIGGS, OLEK WISNIEWSKI, ASANTE
[beat 0] Fluorescent hum. Dryers turning. A rack of lost socks.
[beat 1] VINNIE CALDERONE (50s, slick hair, silk shirt under a trench coat) sits on a folding table. A gym bag at his feet. He watches a dryer spin. SHAUNTAE BRIGGS (30s, braids, work boots) folds towels at the counter. Slow. Steady. Eyes on him. OLEK WISNIEWSKI (20s, hood up, bruise under one eye) feeds quarters into a washer. Misses one. Retrieves it.
[beat 2] A wall phone rings. Everyone stops.
[beat 3] Vinnie crosses. Picks up. VINNIE: Yeah. ASANTE: Is it clean? VINNIE: Clean. ASANTE: Count it again.
[beat 4] Vinnie covers the receiver. Looks at Shauntae. VINNIE: Count it. SHAUNTAE: Not mine to count. She folds another towel.
[beat 5] Olek unzips the gym bag. Cash, bundled. He thumbs a stack. Counts under his breath. OLEK: Forty. Fifty.
[beat 6] ASANTE: Is that Olek I hear? VINNIE: He's counting. ASANTE: Tell him it's short by two.
[beat 7] Vinnie stares at the phone. Slowly turns. VINNIE: It's short by two. OLEK: I counted twice. SHAUNTAE: He's lying. OLEK: I am not lying.
[beat 8] Vinnie hangs up. Walks toward Olek. Soft shoes on linoleum. VINNIE: Where's the two? OLEK: In my pocket. For rent. SHAUNTAE: Mm-hm.
[beat 9] Vinnie grabs Olek's collar. Slams him into the washer. The drum rattles. Quarters spill.
[beat 10] Shauntae sets down her towel. SHAUNTAE: Not here. VINNIE: Stay out of it. SHAUNTAE: My sister's laundromat.
[beat 11] The phone rings again. Nobody moves.

### SCENE s00079 | INT. DIALYSIS UNIT - NIGHT
Characters: HELENE MARCHETTI, ROSALIND AKINS
[beat 0] A long, low room of reclining chairs and blinking machines. Most of the beds are empty. A rain-streaked window frames the parking lot. The machines hum a single note, patient as insects.
[beat 1] DR. HELENE MARCHETTI (50s, grey at the temples, scrubs worn soft with washing) pulls a stool beside the last occupied chair. ROSALIND AKINS (70s, shawl, a library paperback open on her lap) does not look up from her page. Blood moves slow and dark through the tubing between her arm and the machine.
[beat 2] She turns a page. She is not reading it. HELENE: How's the pressure? ROSALIND: You tell me. Helene checks the monitor. Taps the screen. Writes nothing. HELENE: Good enough. ROSALIND: Mm.
[beat 3] The machine ticks. Helene folds her hands in her lap, unfolds them. She looks at the paperback. HELENE: Is it any good? ROSALIND: Third time through. HELENE: That's a yes, then.
[beat 4] Rosalind closes the book on her finger. She looks, at last, at the doctor. ROSALIND: You've got your father's habit. HELENE: Which one? ROSALIND: Asking the thing next to the thing.
[beat 5] Helene does not answer. A nurse's cart rattles somewhere beyond the glass. In the pause, both of them reach for the call button at the same moment, hands touching on the plastic. They pull back. HELENE: I'll get it. ROSALIND ^I'll get it.
[beat 6] Neither moves. The machine counts down another minute.
[beat 7] Rosalind opens the book again, and Helene, after a moment, takes it gently from her hands, finds the place, and begins to read aloud, badly, in a low voice, to no one in particular.

### SCENE s00082 | INT. HAUNTED HOUSE CALL CENTER - DAY
Characters: HOLLIS PEMBERTON, YASMIN TARHAN, KENJI MORIMOTO, BEATRIX OYELOWO, REGIONAL VP DARIUS ACHTERBERG
[beat 0] Cubicles painted black. Plastic cobwebs on the monitors. Headsets everywhere.
[beat 1] HOLLIS PEMBERTON (50s, supervisor, cardigan) stirs coffee with a pen. YASMIN TARHAN (20s, headset) types fast. KENJI MORIMOTO (30s, headset) stares at a ceiling skeleton. BEATRIX OYELOWO (40s, headset, rosary around her wrist) murmurs into a script.
[beat 2] Yasmin slams a key. The phones fall silent. Everyone turns. HOLLIS: Anyone. Nobody answers. KENJI: The line's gone dead. YASMIN: All of them.
[beat 3] A door at the back swings open. REGIONAL VP DARIUS ACHTERBERG (60s, tailored suit, ghost-white skin) glides in and stops under the skeleton. He looks at each of them. His mouth is thin. DARIUS: Who scared the callers away?
[beat 4] Hollis lowers his pen. Beatrix crosses herself. Kenji, very slowly, raises a finger at the skeleton. KENJI: It was already like that.
[beat 5] Darius studies the skeleton. Then the pen in Hollis's hand. Then the pen's bite marks. DARIUS: Well done.
[beat 6] He leaves. The phones ring all at once.

### SCENE s00083 | INT. OPERA HOUSE INFIRMARY - EVENING
Characters: SERGEANT BRONISLAW KRAJEWSKI, LIEUTENANT SIPHO MBEKI, NURSE FIONNUALA DOYLE, THE BOY, ILARIO
[beat 0] The stalls have been torn out and replaced with rows of iron cots. Gilt cherubs look down over bandaged men. Through a blown-out window, a wintry sky the color of ash.
[beat 1] SERGEANT BRONISLAW KRAJEWSKI (40s, thick moustache, arm in a sling) sits on the edge of a cot, mending a boot by lantern light. LIEUTENANT SIPHO MBEKI (30s, upright, clean spectacles) writes a letter on a drum case. NURSE FIONNUALA DOYLE (30s, red hair under a veil, sleeves rolled) kneels to change a dressing.
[beat 2] A small figure sits cross-legged on the stage, back to them, a boy in a coat too big, watching the dust fall through the light. Nobody has asked him a thing.
[beat 3] KRAJEWSKI: That one has not spoken since the bridge. MBEKI: Perhaps he has nothing to say. DOYLE: He ate. That is something.
[beat 4] THE BOY: It was mine.
[beat 5] They all stop. The boy does not move. Doyle stands. DOYLE: What was yours, love? THE BOY: The bread. You gave it to the other man. I only wanted to know why.
[beat 6] Krajewski lowers the boot. Mbeki sets down his pen. MBEKI: What is your name, young man? THE BOY: Ilario. MBEKI: Ilario. A good name. Mine is Sipho. ILARIO: What does it mean? MBEKI: Gift.
[beat 7] Ilario studies him. His eyes are very old. ILARIO: Then why does everyone here look as if they've lost one?
[beat 8] Doyle sits on the stage beside him. Krajewski clears his throat, puts down the boot, and stands, one hand on his sling. KRAJEWSKI: Ilario. Come, eat with us.
[beat 9] Ilario hesitates. Then he rises and walks to the cot, small and dignified. Krajewski tears the last of his own bread and hands him half. Mbeki sets aside the letter and pours three cups of water.

### SCENE s00084 | INT. DECOMMISSIONED PLANETARIUM - CORPORATE RETREAT - DAY
Characters: LORRAINE FAIRWEATHER, GIDEON OKPARA, MIKA TANAKA-BELL, SEBASTIAN VOGT, CFO, PERPETUA ALVAREZ, HR
[beat 0] A great hollow dome, peeling and blue, its star projector slumped like a dead insect in the center of the floor. Folding chairs form a circle beneath a painted Milky Way. A banner reads TEAM ASCENT.
[beat 1] LORRAINE FAIRWEATHER (50s, facilitator, silk scarf, voice made of honey) stands beside an easel. GIDEON OKPARA (40s, sales director, ironed jeans) slouches on a chair, ankle on knee. MIKA TANAKA-BELL (late 20s, analyst, sweating through a blazer) clutches a coffee. SEBASTIAN VOGT (60s, CFO, wire spectacles) sits as if posing for a portrait. PERPETUA ALVAREZ (30s, HR, lanyard, tight smile) guards the exit.
[beat 2] She uncaps a marker and draws a star on the easel. LORRAINE: Gideon. What is the one word that describes your role? GIDEON: Closer. LORRAINE: Mika? MIKA: Um. Fine? LORRAINE: Be bolder, Mika. MIKA: Fine... ly bolder?
[beat 3] Sebastian removes his spectacles and polishes them. SEBASTIAN: Lorraine, when does the feedback session begin? LORRAINE: That is the session, Sebastian. SEBASTIAN: Ah. Perpetua taps her watch. Nobody notices.
[beat 4] LORRAINE: Now. Each of you will name the person on your left and say one true thing. Mika turns toward Gideon. Gideon turns toward Sebastian. Sebastian turns toward Perpetua. Perpetua turns toward Lorraine, who, in turn, faces Mika. The circle closes.
[beat 5] GIDEON: Sebastian. You sign my expenses without reading them. SEBASTIAN: Perpetua. You have been planning your resignation for eleven weeks. PERPETUA: Lorraine. This planetarium has no heat. LORRAINE: Mika. You are the best of us.
[beat 6] Mika bursts into tears, then into laughter. Gideon cracks first. Then Sebastian, a dry wheeze. Perpetua covers her mouth. Even Lorraine drops her marker. The dome picks up their noise and throws it back, a hundred times larger, until they are laughing at the stars.
[beat 7] MIKA: Gideon, I think I love you all. GIDEON: Careful, Mika. That's how they get you.

### SCENE s00085 | INT. CAROUSEL WORKSHOP - NIGHT
Characters: KALINDA RUSSO, OSCAR TREMBLAY, MOSES BELLAMY
[beat 0] Painted horses hang from chains. Gilded poles. A calliope under a tarp. Dust in lamplight.
[beat 1] KALINDA RUSSO (30s, black jumpsuit, tool roll) crouches at a floor panel. OSCAR TREMBLAY (50s, ex-clockmaker, magnifier on one eye) holds a flashlight steady. MOSES BELLAMY (20s, lookout, earbud) hovers by the door.
[beat 2] KALINDA: Pry bar. Oscar hands it over. She slides the bar under the panel. Wood groans. A compartment opens. Inside, a velvet satchel. OSCAR: There she is.
[beat 3] MOSES: Guys. Headlights. Both freeze. A white beam sweeps the window, slides across the horses, and passes on. KALINDA: Keep breathing. MOSES: I am breathing! OSCAR: Quietly.
[beat 4] Kalinda lifts the satchel. Weighs it in her palm. Frowns. KALINDA: Light. OSCAR: What? KALINDA: It's too light.
[beat 5] She opens it. Inside lies a single brass key and a note. Oscar reads over her shoulder. OSCAR: "Try the horse." KALINDA: ^"Try the third horse." They speak the same line at the same instant. Moses stares from one to the other. MOSES: What third horse?
[beat 6] All three turn. Above them, a carousel horse with a chipped blue mane. Kalinda climbs onto the platform. Oscar follows. Moses bolts after.
[beat 7] They gather around the animal, and she turns the key in a hidden lock at the saddle. The belly pops open. Gold coins pour into her arms.
[beat 8] A siren starts up outside. MOSES: Oh no. OSCAR: Oh yes.
[beat 9] They scatter. Moses dives under the calliope tarp. Oscar slides behind a stack of poles. Kalinda leaps from the platform, hugging the coins, and vanishes between two rows of horses as the doors burst open.

### SCENE s00086 | INT. FERRY GALLEY - NIGHT
Characters: ESTELLE MARCHAND, ARTHUR PENHALLOW, TILDA VANCE
[beat 0] A cramped galley below decks, steel counters and swinging pots. The boat creaks. A single porthole shows black water.
[beat 1] ESTELLE MARCHAND (50s, elegant, wearing her good coat in a kitchen) sits at the narrow table, stirring a cup of cold tea. ARTHUR PENHALLOW (60s, ship's cook, apron, forearms like rope) stands at the stove with his back to her, ladling soup.
[beat 2] ESTELLE: You might have told me. ARTHUR: I would have. ESTELLE: When? ARTHUR: When it was true. She sets the spoon down. He stirs the pot. The ferry rocks. ESTELLE: It has been true for a year. ARTHUR: It has been possible for a year. ESTELLE: Arthur. ARTHUR: Estelle.
[beat 3] The galley door swings open. TILDA VANCE (20s, deckhand, oilskin, red hands) comes in with a bucket and stops short. TILDA: Sorry. I can come back. ARTHUR: Stay. You'll want soup. ESTELLE: Do stay, dear. We were only discussing the weather. TILDA: It's bad out. ARTHUR: It is. ESTELLE: It's worse in here.
[beat 4] Tilda looks from one to the other. She sets down the bucket. TILDA: Should I-- ARTHUR: Take a bowl. ESTELLE: Take two. TILDA: Okay.
[beat 5] ARTHUR: You could have written. ESTELLE: You could have answered. TILDA: This is really good soup.
[beat 6] Arthur and Estelle turn together and look at her. Tilda sets down the spoon. TILDA: I'll just-- ARTHUR: Eat. ESTELLE: Eat, child.
[beat 7] She does. The ferry groans in the swell, and somewhere above them a horn sounds, long and low, for a harbor they cannot see.

### SCENE s00087 | INT. HYPERBARIC CHAMBER - NIGHT
Characters: NAOMI ESCOBEDO, PAUL ZIELINSKI, TECH ARDEN FLETCHER, CHARGE NURSE BIRGITTA
[beat 0] Steel hull. Porthole glass. Pipes that shudder as pressure climbs.
[beat 1] DR. NAOMI ESCOBEDO (40s, scrubs, calm eyes) adjusts a valve while PAUL ZIELINSKI (60s, diver, wrapped in a thin blanket) stares at the gauge and TECH ARDEN FLETCHER (20s, headset, ponytail) logs numbers on a clipboard beyond the porthole, tapping the glass whenever the needle moves.
[beat 2] CHARGE NURSE BIRGITTA: Chamber, status? NAOMI: Two atmospheres. Holding.
[beat 3] PAUL: Twice the weight on my chest. Same as the day I surfaced too fast. NAOMI: You came up in eleven minutes. Nobody does that and walks. PAUL: I walked. NAOMI: You crawled. I read the report. PAUL: I don't remember crawling. NAOMI: You will tomorrow. PAUL: Will I. NAOMI: That's what we do here.
[beat 4] BIRGITTA: Doctor, ten minutes remaining. NAOMI: Copy.

### SCENE s00088 | EXT. WHALE-RIB BRIDGE TOLLHOUSE - DUSK
Characters: BRYNMOR ASHDOWN, TALLIS WREN
[beat 0] A bridge arches across a canyon of drifting violet fog. Its span is made of the ribs of some ancient leviathan, bleached bone-white and lashed together with silver rope. At its near end stands a crooked tollhouse of driftwood and green glass, a single lantern burning in its window.
[beat 1] BRYNMOR ASHDOWN (60s, weathered, long grey coat, a ring of keys at his belt) sits on the tollhouse step, whittling. A kettle hisses on a tiny stove at his feet. The fog below breathes in and out like a sleeping animal.
[beat 2] Far down the bridge, a figure appears, a shape resolving from the mist, leaning on a staff. TALLIS WREN (30s, pilgrim's cloak, boots patched with cloth) walks slowly, the bone ringing softly under each step. He reaches the step and stops. He does not look at Brynmor's face.
[beat 3] TALLIS: Is this the toll? BRYNMOR: It is a toll. TALLIS: What does he ask? BRYNMOR: A true thing. Not a large one.
[beat 4] Tallis lowers his hood. His beard is young, his eyes tired. He considers. TALLIS: I am afraid I will not finish. BRYNMOR: Finish what? TALLIS: Anything.
[beat 5] Brynmor puts down the knife. He pours tea into two tin cups, his hands slow and steady, and hands one up. BRYNMOR: That will do. TALLIS: It was not much. BRYNMOR: It was true. He is not greedy.
[beat 6] Tallis takes the cup. The steam drifts between them. Behind them the fog sighs, and one of the ribs hums a long, low note in the rising wind. TALLIS: How many cross? BRYNMOR: Fewer than cross back.
[beat 7] Tallis drinks. His eyes close. When he opens them, the lantern has brightened, and the far end of the bridge, which was dark, shows one small light.
[beat 8] BRYNMOR: Go on. He is waiting. He is not so fierce. TALLIS: Thank you. BRYNMOR: Mind the fourth rib. It sings when it is lonely.

### SCENE s00090 | INT. COUNTY HOSPITAL - POLIO WARD - NIGHT
Characters: ALISTAIR VANCE-HOLLOWAY, NURSE BERNADETTE OKONJO, THEODORA LINDQUIST, CASPER WU, CHAPLAIN AUGUSTUS DELACROIX-BENNETT
[beat 0] Iron lungs line the room like a row of steel whales. Green light. A ceiling fan turns slowly. A radio murmurs a dance tune from a distant city.
[beat 1] DR. ALISTAIR VANCE-HOLLOWAY (50s, tall, courteous, bow tie loosened) pauses at the foot of a bed with a chart. NURSE BERNADETTE OKONJO (40s, starched cap, quick hands) adjusts a dial on the nearest machine. MRS. THEODORA LINDQUIST (60s, wool coat, handbag in both hands) sits very straight on a visitor's chair. CASPER WU (20s, medical student, borrowed white coat) stands by the door, taking notes. CHAPLAIN AUGUSTUS DELACROIX-BENNETT (70s, soft voice, stole around his neck) kneels in prayer at a bedside.
[beat 2] He reads the chart a long time. Mrs. Lindquist watches him. Nurse Okonjo does not. MRS. LINDQUIST: He seems comfortable. DR. VANCE-HOLLOWAY: He is resting. MRS. LINDQUIST: That is not the same thing. DR. VANCE-HOLLOWAY: No. It is not. She nods, grateful for the honesty. He closes the chart.
[beat 3] CASPER: Doctor, the pressure reading on bed six-- DR. VANCE-HOLLOWAY: Later, Mr. Wu. CASPER: Yes, sir.
[beat 4] Okonjo crosses to the window. The blinds are drawn. She tugs a cord and the slats rise. Moonlight spills onto the machine, silvering the boy inside, who sleeps with his mouth a little open. NURSE OKONJO: His color is better. MRS. LINDQUIST: Is it? NURSE OKONJO: Pink in the cheeks.
[beat 5] Dr. Vance-Holloway steps closer. He lifts the boy's wrist. A long moment. DR. VANCE-HOLLOWAY: Nurse. The oxygen. NURSE OKONJO: Already, Doctor.
[beat 6] She is turning a valve. He does not say what she did, and she does not say what she saw. Casper looks from one to the other, understanding nothing, then too much.
[beat 7] CASPER: Doctor? DR. VANCE-HOLLOWAY: Fetch the Chaplain. CASPER: He's here. DR. VANCE-HOLLOWAY: Then bring him. Casper crosses the room. The Chaplain looks up from his prayer before he arrives. CHAPLAIN DELACROIX-BENNETT: I know.
[beat 8] He rises, creaking, and takes Mrs. Lindquist's hand. She stares at it without understanding. Then the radio gives a bright trumpet note, and Mrs. Lindquist rises, breath catching, and lets the handbag fall. MRS. LINDQUIST: No. DR. VANCE-HOLLOWAY: Mrs. Lindquist. MRS. LINDQUIST: He was pink. She said he was pink. NURSE OKONJO: He was, ma'am.
[beat 9] Mrs. Lindquist crosses to the bed. Puts a hand on the cold steel. The machine wheezes its steady wheeze, pushing air into a chest that no longer asks. DR. VANCE-HOLLOWAY: I am so sorry.
[beat 10] She does not turn. Nobody speaks. In the corner, the radio plays on, a waltz, cheerful and absurd. Nurse Okonjo crosses and switches it off, and the silence that follows is the loudest thing in the ward.

### SCENE s00091 | INT. PARKED VAN OUTSIDE BELL FOUNDRY - NIGHT
Characters: ZELDA, MURALI
[beat 0] ZELDA: You're humming. MURALI: I'm not. ZELDA: You are. It's the thing from the radio. MURALI: It's a lullaby.
[beat 1] ZELDA: Whose? MURALI: Mine. My mother's. Don't. ZELDA: I didn't say anything. MURALI: You were about to.
[beat 2] ZELDA: I was about to say it's nice. MURALI: It isn't nice. It's a song about a goat. ZELDA: Is it a good goat? MURALI: He dies. ZELDA: Ah. MURALI: Everybody dies in the second verse. ZELDA: That's a heavy lullaby. MURALI: We were a heavy family. ZELDA: And you cope by humming in a van outside a bell foundry.
[beat 3] MURALI: Four more minutes. ZELDA: Four more minutes. MURALI: Then we go in. ZELDA: Then we go in. MURALI: And you stop asking questions. ZELDA: Never.

### SCENE s00092 | INT. LUNAR GREENHOUSE - ARTIFICIAL NIGHT
Characters: IMOGEN VASQUEZ-LEE, ANTON BERGSTROM
[beat 0] A vast pressurized dome of hydroponic trays under violet grow-lamps. Rows of tomato vines climb strings toward the glass. Beyond the dome, the grey regolith and a hard, bright Earth.
[beat 1] IMOGEN VASQUEZ-LEE (40s, station botanist, rolled sleeves, soil under her nails) kneels between two trays with a pair of pruning shears. She is slight and quick, her hair held by a pencil. ANTON BERGSTROM (50s, systems engineer, thick glasses, a tablet always in hand) stands at the far end checking the irrigation readouts, wearing a sweater with a hole in one elbow.
[beat 2] Both are very tired. Neither says so.
[beat 3] ANTON: Pump three is running hot. IMOGEN: Tell it to calm down. ANTON: It doesn't take advice. IMOGEN: Neither do the tomatoes.
[beat 4] She snips a withered leaf. Drops it in a bucket. Anton taps the tablet. The lamps pulse a half-second slower. ANTON: That's the fourth flicker today. IMOGEN: I counted six. ANTON: You counted the ones I didn't.
[beat 5] She stands, stretches her back, and wanders down the row toward him, trailing a hand through the leaves. IMOGEN: Do you ever hear them? ANTON: The plants? IMOGEN: The stems. When the lamps come on. A kind of ticking. ANTON: That's the heat. IMOGEN: I know it's the heat.
[beat 6] They stand a moment in the violet light. ANTON: Imogen. IMOGEN: Yes. ANTON: You've been in here eighteen hours. IMOGEN: They don't water themselves. ANTON: Actually, they do. That's my entire job. She laughs, a short cough of a sound. He nearly smiles.
[beat 7] The lights shudder. Both look up. A distant thud rolls through the dome, a bolt shaken loose in the airlock. The vines sway, then settle. The tablet in Anton's hand goes dark, and so does the row of lamps. For three heartbeats there is only the white wash of Earthlight on the leaves. IMOGEN: Don't move. ANTON: I wasn't going to.
[beat 8] The lamps flare back to life one by one. Imogen exhales. Anton wipes his glasses on the hole in his sweater. They look at each other, then at the trays, and then both go back to work without another word, side by side, snipping and tapping in the purple dark.
[beat 9] ANTON: Pump three. IMOGEN: Go. He crosses to a panel and thumps it with the heel of his hand. A pump coughs. Water begins to run.
[beat 10] Imogen reaches out and touches a ripening tomato. It is perfectly, impossibly red. IMOGEN: Anton. ANTON: Mm. IMOGEN: Come and see.
[beat 11] He walks over. She plucks the fruit, wipes it on her sleeve, and hands it to him. He looks at it for a long time. Then he takes a bite, and the juice runs down his chin, and neither of them says a word.

### SCENE s00093 | INT. BIRTHDAY PARTY BACKYARD - DAY
Characters: WALDO PIMM, BERNICE PLUMMER-ASANTE
[beat 0] Balloons. Folding tables. A bouncy castle deflating in the corner. Forty children, screaming.
[beat 1] WALDO PIMM (40s, sequined vest, top hat, rabbit in a cage) stands on a milk crate, juggling three oranges. One slips. He catches it with his chin. WALDO: Ladies and gentlemen! The Great Waldo!
[beat 2] A child screams. Another cries. A third throws cake. WALDO: Sixty dollars. Sixty dollars. Sixty dollars.
[beat 3] He pulls a scarf from his sleeve. It keeps coming. Yards of it. He tugs. Tugs. Out comes a second scarf, then a third, tied together, and finally a live parakeet that flies straight over the fence. WALDO: That was Gerald.
[beat 4] A woman's voice calls from the gate. BERNICE PLUMMER-ASANTE (70s, sunhat, enormous handbag) pushes through, waving a rolled newspaper at Waldo, who ducks. The rabbit escapes its cage, hops across the lawn, and disappears under the cake table. Bernice swings and misses. Waldo vaults the crate, a child grabs his cape, and the three of them end up in a heap beside the bouncy castle, the castle sighing down on top of them.
[beat 5] BERNICE: You owe me for the parakeet! WALDO: He's a free spirit!

### SCENE s00094 | EXT. ROOFTOP APIARY - GOLDEN HOUR
Characters: AMARA OKEKE, THEO BALASUBRAMANIAN, GRANDMOTHER NNEKA
[beat 0] Hives like pastel filing cabinets. Bees drift over the city skyline. A string of bulbs sways overhead.
[beat 1] AMARA OKEKE (30s, veil pushed back, honey on her wrist) lifts a frame heavy with comb. THEO BALASUBRAMANIAN (30s, borrowed veil, delighted) stands too close, holding a smoker he has not lit.
[beat 2] AMARA: Step back. THEO: I'm fine. AMARA: You're stepping on the queen's door. THEO: I'm sorry, Your Majesty.
[beat 3] She laughs. He lights the smoker. A white plume. AMARA: Gently. THEO: Always.
[beat 4] The stairwell door bangs. GRANDMOTHER NNEKA (80s, floral housecoat, cane, a shopping bag) hobbles onto the roof. NNEKA: Amara! AMARA: Mama? THEO: Hello, ma'am. NNEKA: Who is the boy? AMARA: It's Theo, Mama. I told you. NNEKA: You told me Thursday. THEO: Today is Thursday. NNEKA: Then I am on time.
[beat 5] She sets the bag on a hive. Amara lunges to catch it. AMARA: Mama! Not there. NNEKA: It's only plantains. THEO: They'll love the plantains. NNEKA: They better. Come, boy. Eat.

### SCENE s00095 | INT. DEAD MAN'S TACKLE SHOP - BACK ROOM - DAY
Characters: GLORIA ESPINOSA-WRAY, RAUL
[beat 0] Rods in racks. Tins of lures. A calendar from 2009. Dust motes in a shaft of window light.
[beat 1] GLORIA ESPINOSA-WRAY (60s, widow's black, silver bun) sits on an upturned bucket, a shoebox in her lap. Her son RAUL (30s, work shirt, wedding ring turned the wrong way) stands at the workbench, sorting reels into a crate. Neither speaks.
[beat 2] He lifts a reel. Examines it. Sets it down. RAUL: This one's good. GLORIA: Your father cursed that one. RAUL: He cursed all of them. GLORIA: He cursed them gently. Raul almost laughs. He doesn't.
[beat 3] RAUL: I can have the shop listed by Friday. GLORIA: Do what you want. RAUL: It's your shop. GLORIA: It was his shop. RAUL: Ma.
[beat 4] GLORIA: You didn't come. RAUL: I came to the funeral. GLORIA: You didn't come in March. RAUL: I was working. GLORIA: He asked. RAUL: I know he asked. GLORIA: He asked every day. RAUL: And I said I'd come. GLORIA: And you said you'd come.
[beat 5] A drip from the ceiling. A bucket catches it. Gloria lifts a photograph from the box. A boy on a pier, grinning with a fish too big for him. GLORIA: Look.
[beat 6] He doesn't. RAUL: I don't want to. GLORIA: You were eight. RAUL: I remember. GLORIA: He kept it in the register. Under the tray. RAUL: That's stupid. GLORIA: It's what he did. RAUL: He'd have let me know. If it mattered. GLORIA: He did let you know. Every day. By asking.
[beat 7] Raul grips the bench. The knuckles go white. A reel falls from the crate and rolls across the floor. RAUL: You think I don't know that? GLORIA ^You think I don't know what you think? Their voices overlap and collide. They stop.
[beat 8] Gloria sets down the photograph. GLORIA: Sit. RAUL: I'm fine. GLORIA: Sit. He sits on a crate. Hands between his knees.
[beat 9] RAUL: I was scared. GLORIA: Of what? RAUL: Of seeing him small. GLORIA: He wasn't small. RAUL: He was. Ma. In the photos you sent, he was. GLORIA: He was still your father. RAUL: That's the thing. GLORIA: What? RAUL: I wanted him to stay the one with the fish. GLORIA: Oh, Raul.
[beat 10] He bends forward, forehead on his fists. Gloria sets the box aside, crosses the room in her slow black shoes, and rests a hand on the back of his neck, the way you steady a young horse. The drip falls into the bucket, steady as a clock.
[beat 11] RAUL: I should've come. GLORIA: Yes. RAUL: That's it? Yes? GLORIA: You want me to say it was fine? RAUL: I want you to say something. GLORIA: Help me pack the rods.
[beat 12] He wipes his face on his sleeve. Stands. Takes one end of the long rod rack. She takes the other. They carry it out into the light, not looking at each other, the way people do who have finally said enough.

### SCENE s00096 | INT. DEEP-SEA HABITAT "THRESHOLD" - MAIN CABIN - NIGHT CYCLE
Characters: NADIRA SHARIFOVA, PETRUS VAN DER LINDE, QUILL
[beat 0] A curved steel cylinder lined with cables, plastic crates, and pipe. Portholes the size of dinner plates show nothing but black water. A single red emergency lamp pulses at the far bulkhead.
[beat 1] NADIRA SHARIFOVA (40s, habitat commander, close-cropped hair, a mug that reads WORLD'S OKAYEST BOSS) stands at the central console. PETRUS VAN DER LINDE (50s, pressure technician, ginger beard gone grey at the chin) kneels beside an open floor panel, a wrench in each hand. QUILL (20s, oceanographer, real name Quillon Adeyemi, dreadlocks tied up in a net) bends over a bank of sonar monitors, headphones around his neck.
[beat 2] NADIRA: Eyes up, everyone. Status report. PETRUS: Seal four is weeping. QUILL: Sonar's reading something big. NADIRA: How big? QUILL: Bigger than us.
[beat 3] Nadira sets down her mug. NADIRA: Define "something." QUILL: It's moving. Slowly. Circling. PETRUS: Not today. Not today. Not today.
[beat 4] He tightens a bolt. A thin jet of water hisses at his wrist, and he curses and clamps a hand over it. Nadira drops beside him and slaps a patch over the leak. NADIRA: Hold it. PETRUS: I am holding it. NADIRA: Hold it harder.
[beat 5] The emergency lamp pulses faster. Quill removes his headphones, puts them back on, and removes them again. QUILL: It's gone. NADIRA: Gone where? QUILL: Just gone. Vanished off the screen.
[beat 6] The hull shudders. A deep, resonant note rolls through the walls, like a cello string the size of a whale. Everyone freezes. Dust drifts from the ceiling. Petrus lets go of the patch, and it holds. PETRUS: That was no engine. QUILL: That was a song. NADIRA: Nobody panic.
[beat 7] She looks at the nearest porthole. A vast, pale eye slides past the glass, unblinking, then drifts into the dark. QUILL: That's a sperm whale. PETRUS: It's enormous. NADIRA: Of course it is.
[beat 8] She retrieves her mug and takes a long, slow sip. Her hand shakes only a little.

### SCENE s00097 | INT. RETROFITTED SCHOOL BUS BRIDAL SHOP - DAY
Characters: PHILOMENA TRASK, GWENDOLYN OSEI-MARTINSEN, LUCIEN FAURE, IMANI REYNOLDS, BARTHOLOMEW FINCH, AUNT CORDELIA
[beat 0] A yellow school bus gutted and rebuilt as a boutique: tulle hung from the luggage racks, chandeliers swaying from the ceiling, a three-way mirror bolted where the driver's seat used to be. Sunlight falls through the stop-sign window in a red octagon on the floor.
[beat 1] PHILOMENA TRASK (30s, bride, hair half-pinned, bare feet) stands on a milk crate in a billowing gown. GWENDOLYN OSEI-MARTINSEN (60s, shop owner, pins in her mouth, measuring tape like a stole) kneels at the hem. LUCIEN FAURE (30s, best man, tuxedo jacket over jeans) lounges on a bench seat eating a muffin. IMANI REYNOLDS (20s, maid of honor, phone in hand) paces the aisle. BARTHOLOMEW FINCH (70s, bus driver, still in uniform, newspaper) sits at the wheel, pretending to read.
[beat 2] GWENDOLYN: Arms up. PHILOMENA: They are up. GWENDOLYN: Up like you mean it.
[beat 3] Philomena raises her arms. The dress gapes. Imani gasps. IMANI: It's too big! LUCIEN: It's perfect. Imani and Philomena speak together. IMANI: It's not perfect! PHILOMENA: ^I love it!
[beat 4] They stop. Look at each other. Imani's phone rings. She answers, thumb flying. AUNT CORDELIA: Is she in the dress? I want a photo. Don't let her cry. She'll cry. PHILOMENA: I'm not crying. AUNT CORDELIA: Is she crying? IMANI: A little. PHILOMENA: I'm not!
[beat 5] She is. Gwendolyn stands, spits the pins into her palm, and wipes the bride's cheek with the measuring tape. GWENDOLYN: Hush, child.
[beat 6] Bartholomew lowers the newspaper. BARTHOLOMEW: Are we leaving, or what? GWENDOLYN: We are fitting a bride! BARTHOLOMEW: Fitting a bride in a bus. My mother would never.
[beat 7] Lucien licks muffin from his thumb. LUCIEN: Phil, honestly. You look like a lighthouse. PHILOMENA: That's not a compliment. LUCIEN: It is where I'm from.
[beat 8] Everything seems fine. The chandeliers tinkle. The sun burns the floor. Philomena steps off the crate and walks the aisle, the gown dragging behind her like a wake.
[beat 9] Then the bus lurches. The engine coughs and catches. Bartholomew is leaning on the wheel, and one foot is flat on the accelerator. BARTHOLOMEW: Hold on.
[beat 10] Everyone stumbles. The bus rolls forward. Gwendolyn grabs a rack. Imani drops the phone. Lucien's muffin lands in Philomena's veil. The bus rolls through the garage doors and into the street, a wedding on wheels, tulle streaming out the windows like a flag. AUNT CORDELIA: Hello? Is the bus moving?

### SCENE s00098 | INT. MATTRESS WAREHOUSE - MAILROOM - DAY
Characters: THE INTERN, PRUDENCE KALLIS, ANDRZEJ NOWICKI-FAYE, ROSCOE
[beat 0] Stacks of boxed queens and kings reach the rafters. A conveyor rattles. Fluorescent light buzzes over steel shelving.
[beat 1] THE INTERN (19, stiff new polo, name tag blank) stands in the doorway holding a manila envelope like a live fish. MS. PRUDENCE KALLIS (50s, cardigan, reading glasses on a beaded chain) sorts parcels at the counter. ANDRZEJ NOWICKI-FAYE (40s, forklift gloves tucked in his belt) sits on a pallet, eating a sandwich in precise bites. Nobody speaks. The conveyor rattles.
[beat 2] THE INTERN: Um. Hi. I was told to report here. PRUDENCE: By whom? THE INTERN: A man in a tie. PRUDENCE: They all wear ties.
[beat 3] She does not look up. Andrzej chews. The Intern steps into the room and sets the envelope on the counter. THE INTERN: It says to give you this.
[beat 4] Prudence slits it open with a letter opener. Reads. Her mouth thins. PRUDENCE: Roscoe. THE INTERN: Sorry? PRUDENCE: It says here your name is Roscoe. ROSCOE: Oh. Yes. Roscoe. Hi. ANDRZEJ: Roscoe. PRUDENCE: Roscoe, welcome to the mailroom.
[beat 5] ROSCOE: Thanks. What do I do? PRUDENCE: You stand. ROSCOE: Stand? ANDRZEJ: You stand. You wait. You deliver nothing. ROSCOE: That's it? PRUDENCE: Seventeen years, and that is the entire job.
[beat 6] Andrzej folds his sandwich paper into a perfect square. Prudence slides the envelope into a drawer already full of identical ones. Roscoe adjusts his name tag, which still says nothing. The conveyor rattles on.
[beat 7] ROSCOE: Is there a handbook? ANDRZEJ: There's a mattress. He points. In the corner, between two stacks of boxes, a single twin bed made up with a grey blanket. A small nest of mail beside it. ROSCOE: Does someone sleep here? PRUDENCE: Not tonight.

### SCENE s00099 | INT. NIGHT TRAIN - SLEEPER COMPARTMENT - NIGHT
Characters: CLEMENCE ARDOIN, SULEIMAN HADDAD
[beat 0] A narrow cabin of dark wood and brass. Two bunks. A lamp swings with the rails. Rain slides sideways down the window.
[beat 1] CLEMENCE ARDOIN (30s, wool coat, hair undone) sits on the lower bunk with her shoes still on. SULEIMAN HADDAD (30s, travel-worn suit, a single suitcase) stands at the window with his back to her. He does not turn. She watches the back of his neck. He watches the dark.
[beat 2] CLEMENCE: You could have taken another car. SULEIMAN: There was no other car. CLEMENCE: There's always another car. SULEIMAN: Not at two in the morning. CLEMENCE: You didn't ask. SULEIMAN: Neither did you.
[beat 3] The rails clack. She smooths her skirt. He loosens his tie, pulls it off, folds it once, twice, and tucks it in his pocket.
[beat 4] CLEMENCE: Tell me why you came. SULEIMAN: I told you. CLEMENCE: You told me a story about a conference. SULEIMAN: It was a good conference. CLEMENCE: In Lyon. Where I live. SULEIMAN: It's a big city. CLEMENCE: Suleiman. SULEIMAN: Clemence.
[beat 5] CLEMENCE: Say it. SULEIMAN: I got on the wrong train. CLEMENCE: You got on the right one. SULEIMAN: That's worse. CLEMENCE: Yes.
[beat 6] He finally turns. The lamp lights half his face. She is already standing. They are closer than either planned.
[beat 7] SULEIMAN: Six years. CLEMENCE: Seven in March. SULEIMAN: You counted. CLEMENCE: You didn't? SULEIMAN: Every day. CLEMENCE: Then why is this the first time? SULEIMAN: Because you would have said no. CLEMENCE: I might have said yes. SULEIMAN: Might. CLEMENCE: Might.
[beat 8] The train screams around a curve and throws her against his chest. He catches her. Neither lets go. CLEMENCE: That was an accident. SULEIMAN: I know. CLEMENCE: I'm not sorry. SULEIMAN: Neither am I.
[beat 9] She slaps him, hard, across the cheek. He doesn't flinch. She slaps him again, and then she is crying, and then she is holding onto his lapels, and he says her name into her hair, again and again, as the rain beats on the glass and the train carries them toward a station neither of them knows.

### SCENE s00100 | INT. FARMHOUSE KITCHEN - AUCTION DAY
Characters: IVO LANDRY, PETRA SZABO, DOLORES NKRUMAH, ANSELM WHITFIELD, KIRSTEN BJORNSEN
[beat 0] Oilcloth on the table. Ladder-back chairs. A wall clock that ran slow for fifty years. Outside, through the screen door, trucks and auctioneer chatter in the yard.
[beat 1] Five siblings crowd the room. IVO LANDRY (50s, eldest, Sunday jacket, no tie) stands at the counter packing a box of cutlery. PETRA SZABO (40s, nurse's clogs, keys in a fist) leans on the sink, arms crossed. DOLORES NKRUMAH (late 30s, silk blouse, phone face-down on the table) sits in their mother's chair. ANSELM WHITFIELD (30s, work boots, farm cap) rolls a pencil between his fingers by the stove. KIRSTEN BJORNSEN (20s, youngest, bare feet, a cardboard box in her arms) hovers in the doorway to the hall.
[beat 2] IVO: The clock goes to me. PETRA: It goes to whoever's here. ANSELM: I'm here. DOLORES: I'm here too. IVO: You're on your phone. DOLORES: I'm on my phone in the chair.
[beat 3] Anselm sets the pencil on the table. Dolores picks it up and sets it back where it was. Petra jingles her keys. Ivo wraps a fork in newspaper, then another, working quickly, like a man counting something.
[beat 4] KIRSTEN: I took the quilt. PETRA: Which quilt? KIRSTEN: The blue one. IVO: That's Ma's quilt. KIRSTEN: She told me. ANSELM: When? KIRSTEN: In March. DOLORES: Of course she told you. PETRA: That's not fair. DOLORES: I didn't say it was fair.
[beat 5] Kirsten shifts the box. Under the lid, a corner of blue appears. Ivo sees it. Looks away. A truck engine roars past the screen door and fades. Ivo puts down the fork and lowers himself, slowly, onto the last free chair.
[beat 6] IVO: The clock goes to whoever winds it. PETRA: Nobody winds it. ANSELM: I wind it.
[beat 7] Silence. Dolores lifts her head, surprised. Anselm picks the pencil up again, rolls it between finger and thumb. Petra's hand loosens on the keys, and Kirsten sets the box on the table and, with the care of someone handling an egg, unfolds the quilt. She lays it over the oilcloth. The five of them look at it, a field of faded blue squares.
[beat 8] DOLORES: That's the barn. ANSELM: That's the pump house. PETRA: That's the pump house, Ivo. IVO: That's the barn.
[beat 9] Nobody argues. Outside the auctioneer cries a number, and another, and the clock on the wall, for no reason, ticks once and falls silent.

### SCENE s00101 | INT. RADIO STATION BROADCAST BOOTH - NIGHT
Characters: OSWALD FERRIS-MBEKI, LAVINIA CRUZ-HOLLANDER, DEREK PUTNAM-ADEBAYO, MARGUERITE LACROIX, HAZEL OKONKWO-DREW, NIGEL STRAND, VOICE, AIR
[beat 0] A glass-walled booth lined with egg-crate foam. Dials, faders, a microphone on a swan neck. Beyond the glass, a dim studio and a bank of dead windows. A red ON AIR sign glows above the door.
[beat 1] Six people sit around a small round table in the booth, hands flat on the wood. A single candle burns in the center. OSWALD FERRIS-MBEKI (60s, station manager, cardigan, pipe unlit) presides. LAVINIA CRUZ-HOLLANDER (40s, medium, shawl, silver rings on every finger) closes her eyes. DEREK PUTNAM-ADEBAYO (30s, sound engineer, headphones round his neck) rests a hand on the mixing board. MARGUERITE LACROIX (70s, retired host, silk scarf, oxygen tank) watches the flame. HAZEL OKONKWO-DREW (20s, intern, notebook) writes furiously. NIGEL STRAND (50s, owner's lawyer, damp raincoat) stares at the exit.
[beat 2] LAVINIA: We are here to hear what was never aired. OSWALD: Hush, everyone. NIGEL: This is absurd. MARGUERITE: Let her work, dear.
[beat 3] The candle flame bows. Derek glances at the board. Every needle is dead. DEREK: Nothing's powered. HAZEL: That's what I wrote. LAVINIA: He is close. A man with a heavy voice. He says...
[beat 4] A crackle on the monitor speaker. VOICE: ...ten minutes to air.
[beat 5] Oswald drops his pipe. Marguerite covers her mouth. Derek leans toward the board. Nigel pushes his chair back. NIGEL: That's a recording. Someone's playing a tape. DEREK: There's no tape. Nothing's plugged in. VOICE: ...cut the lights, Marguerite.
[beat 6] Marguerite is staring at the speaker. Her hand shakes. The oxygen tank hisses. MARGUERITE: That is Vincent. OSWALD: Vincent is dead, Marguerite. MARGUERITE: Thirty years. VOICE: ...tell them what you did.
[beat 7] Lavinia's eyes fly open. She is not looking at the speaker. She is looking at Nigel. LAVINIA: It's you. NIGEL: I beg your pardon? LAVINIA: He is saying your name. NIGEL: He is not. VOICE: ...Nigel.
[beat 8] Nigel slams a palm onto the table. The candle gutters. The ON AIR sign flashes. Hazel scribbles. Derek lunges for the board. Oswald stands, knocking over his chair. The whole booth goes black.
[beat 9] In the dark, a single click. A match is lit. Marguerite's face floats above the flame, calm, steady, ancient. MARGUERITE: Sit down, Mr. Strand. NIGEL: Please. MARGUERITE: Vincent kept very good notes.
[beat 10] She holds up a small cassette. The match burns her finger. She doesn't flinch. In the glow, five faces stare at the sixth, who is no longer looking at the exit at all.

### SCENE s00102 | INT. FLOODED LIMESTONE CAVE - DAY
Characters: JOSEFINA LARRAZABAL, TOMASZ EKWUEME, MADELEINE PRICE-ODUYA, RUBEN HAKIMI, GUNNAR SIGURDSSON
[beat 0] A low chamber, water to the waist. Headlamps stab the dark. Stalactites drip. Somewhere ahead, a pulse of water echoes.
[beat 1] Five climbers wade in a line. JOSEFINA LARRAZABAL (30s, expedition lead, braid) pushes ahead, rope coiled over one shoulder. TOMASZ EKWUEME (40s, doctor, glasses fogged) follows with a medical bag held above his head. MADELEINE PRICE-ODUYA (20s, geologist, hardhat) tests the wall with a hammer. RUBEN HAKIMI (30s, photographer, camera in a dry bag) stumbles. GUNNAR SIGURDSSON (50s, veteran caver, quiet, grey beard) brings up the rear, a hand on the rope, counting steps.
[beat 2] JOSEFINA: Water's rising. GUNNAR: Not rising. Rain upstairs. RUBEN: Is that better? GUNNAR: It's the same.
[beat 3] Madeleine taps the wall. A hollow note answers. She tilts her head and taps again. MADELEINE: It's thin here. TOMASZ: How thin? MADELEINE: Thin enough that he should not lean on it.
[beat 4] Ruben, who has been leaning, pulls back. The wall gives a long groan. Josefina swings around, grabs Ruben's collar, and drags him forward as a slab of limestone sheers off and drops into the water behind them. A wave slaps all five. Gunnar yanks Tomasz upright, Tomasz clutches his bag, Madeleine drops her hammer, and Josefina shoves Ruben against the far wall and shouts for them all to move. JOSEFINA: Go! Go! Go!
[beat 5] They surge down the passage. The rope jerks tight. Gunnar, last in line, counts steps, and when he reaches thirty, he stops. The water behind them has gone still. GUNNAR: That's the worst of it. JOSEFINA: You're sure? GUNNAR: No. But it sounds like it.
[beat 6] Tomasz lets out a laugh that is half a sob. Ruben clutches his camera. Madeleine fishes her hammer from the water and wipes it on her sleeve.
[beat 7] JOSEFINA: Everyone count off. TOMASZ: One. MADELEINE: Two. RUBEN: Three. GUNNAR: Four. JOSEFINA: Five. Good. We keep moving.

### SCENE s00103 | INT. CATHEDRAL BELL TOWER OBSERVATION POST - DAY
Characters: CAPTAIN HENRY ABERNETHY-LOWE, CORPORAL TOMMASO RICCI, PRIVATE ELIJAH STONE-BARNES, RADIO OPERATOR
[beat 0] A cramped stone chamber beneath the bells. Narrow arrow-slit windows. Sandbags stacked against the wall. A field telephone on a plank, a pair of binoculars on a nail.
[beat 1] CAPTAIN HENRY ABERNETHY-LOWE stands at the east slit, field glasses at his eyes. He is tall, spare, and impeccable, his uniform pressed even in the dust. CORPORAL TOMMASO RICCI sits on an ammunition crate, a rifle across his knees, cleaning it with a rag. PRIVATE ELIJAH STONE-BARNES, barely nineteen, huddles by the stairwell door, a mug of tea cold in his hands.
[beat 2] The captain lowers the glasses. He does not turn. ABERNETHY-LOWE: Anything? RICCI: Nothing, sir. ABERNETHY-LOWE: Then keep looking. Ricci nods, not looking up. The private watches the captain, who watches the horizon. A great quiet fills the tower.
[beat 3] RADIO OPERATOR: Eagle's Nest, this is Baker Two. Report. Abernethy-Lowe crosses the floor, lifts the receiver, and holds it with two fingers. ABERNETHY-LOWE: Baker Two, Eagle's Nest. Position quiet. No movement. RADIO OPERATOR: Understood. Command wants a sweep of the north road at sixteen hundred. ABERNETHY-LOWE: Acknowledged. He hangs up. Stands very still, his hand lingering on the receiver.
[beat 4] Elijah sets down the mug. ELIJAH: Sir? ABERNETHY-LOWE: Private. ELIJAH: Is it true what they say about the bells? ABERNETHY-LOWE: What do they say? ELIJAH: That they ring on their own before an attack. Ricci snorts, rubbing the rifle. The captain turns, finally, and studies the boy. ABERNETHY-LOWE: They ring when the wind is wrong. That's all. ELIJAH: Then why do you keep checking?
[beat 5] The captain does not answer. A long pause. High above, in the dark of the belfry, a single bell hums, a faint, shivering note, not a ring, not yet.
[beat 6] Ricci puts down the rifle. Abernethy-Lowe lifts his glasses. Elijah stands. They all look at the arrow-slit, where the afternoon light has gone a strange, pale gold. RICCI: Wind. ABERNETHY-LOWE: Wind.
[beat 7] The bell hums again. This time, it rings.

### SCENE s00104 | INT. POTTERY KILN SHED - DUSK
Characters: LEILANI KAHALE, DARIUS PELLEGRINO-OKAFOR
[beat 0] Brick walls. A squat kiln glowing orange at its seams. Shelves of unglazed bowls. Clay dust in the air like flour.
[beat 1] LEILANI KAHALE (30s, apron, forearms grey with slip) crouches at the kiln, peering through a peephole. DARIUS PELLEGRINO-OKAFOR (30s, jacket, an umbrella he does not need) stands in the doorway holding a paper bag.
[beat 2] LEILANI: You're letting the heat out. DARIUS: Sorry. He steps in. Closes the door.
[beat 3] DARIUS: I brought dumplings. LEILANI: I'm firing. DARIUS: I can wait. LEILANI: It's six hours. DARIUS: Then I brought a lot of dumplings. She almost smiles. Turns back to the peephole.
[beat 4] LEILANI: Cone eight is down. Cone nine soon. DARIUS: Is that good? LEILANI: It's necessary.
[beat 5] He sets the bag on a shelf. Wanders along the bowls, touching the rims with one finger. She watches him, in profile, across the glow of the kiln. DARIUS: These are beautiful. LEILANI: They're unfinished. DARIUS: So am I. LEILANI: That's a terrible line. DARIUS: I know. I rehearsed it.
[beat 6] She laughs. He turns. Their eyes meet. LEILANI: I missed you. DARIUS ^I missed you. Both stop. The kiln ticks. Neither moves.
[beat 7] LEILANI: Stay. DARIUS: For the firing? LEILANI: For the firing.
[beat 8] He crosses the shed, sits on an upturned bucket by the kiln, and opens the bag. Steam rises, ginger and sesame. She sits beside him on the floor. He passes her a dumpling. She holds it up to the orange light. LEILANI: Six hours. DARIUS: We have time.

### SCENE s00105 | INT. PICKLE FACTORY - HUMAN RESOURCES OFFICE - DAY
Characters: MAGDALENA OKOYE-FINNEGAN, BARRY KOWALSKI-ADEYEMI, PETRONELLA GRUBER
[beat 0] A glass cubicle overlooking the brine vats. The air is vinegar. A motivational poster reads: "BE THE DILL."
[beat 1] MAGDALENA OKOYE-FINNEGAN (50s, HR director, cardigan, sensible shoes) sits behind a desk stacked with folders. Across from her, BARRY KOWALSKI-ADEYEMI (40s, line supervisor, apron, spotless) folds his hands in his lap. In the corner, a chair holds PETRONELLA GRUBER (60s, union rep, thermos, knitting).
[beat 2] She smiles. He smiles back. MAGDALENA: Thank you for coming in, Barry. BARRY: Of course. MAGDALENA: This is informal. BARRY: Great.
[beat 3] She slides a folder across the desk. He does not touch it. Petronella knits. MAGDALENA: Anything you'd like to share? BARRY: About what? MAGDALENA: Anything. He glances at the folder. At Petronella. At the poster. BARRY: Business is good. MAGDALENA: Is it? BARRY: Yes.
[beat 4] She nods. Opens the folder. Takes out a single photograph and sets it between them. He leans forward, then back, swallowing. BARRY: That's a gherkin. MAGDALENA: It is. BARRY: It's a small gherkin. MAGDALENA: It is a small gherkin that was found in the Reuben line of Plant Three. PETRONELLA: Knit one, purl two. BARRY: That's hardly my fault. MAGDALENA: Whose fault is it? BARRY: Systemic.
[beat 5] She closes the folder gently. Folds her hands. MAGDALENA: Barry, we ran the camera footage. His smile stays. Everything else drains.
[beat 6] Petronella sets down her needles. PETRONELLA: He did it for the cat. MAGDALENA: Not now. BARRY: It was a stray. MAGDALENA: It ate forty pounds of relish. BARRY: It was hungry.
[beat 7] Petronella pours tea into the thermos cap and offers it to him. He takes it.

### SCENE s00106 | EXT. DRIVE-IN MOVIE SCREEN - ROOFTOP SCAFFOLD - NIGHT
Characters: LEANDER PRZYBYLSKI, WINIFRED
[beat 0] A vast white screen stands over a lot of weeds and abandoned speaker posts. At the top, a narrow catwalk of weathered planks runs behind the canvas. A few stars show through the clouds.
[beat 1] LEANDER PRZYBYLSKI (15, thin, hands in the pockets of a too-big hoodie) climbs over the last rung and sits at the edge with his legs hanging over nothing. Behind him, his sister WINIFRED (17, denim jacket, keys on a lanyard, jaw clenched) hauls herself up the ladder, breathing hard, and stands on the catwalk.
[beat 2] She finds him. She does not hurry. WINIFRED: You scared me. LEANDER: You came up anyway. WINIFRED: Mom's looking everywhere. LEANDER: Not here. WINIFRED: She will be.
[beat 3] He doesn't turn. She walks along the planks, one hand trailing the canvas, which breathes like a sail. The wind carries her voice into the dark lot. WINIFRED: Dad's car is still in the driveway. LEANDER: I know. WINIFRED: He's not going to leave tonight. LEANDER: He always says that. WINIFRED: He does. LEANDER: Then he does.
[beat 4] She sits beside him, close but not touching. Below, a cat crosses the lot and vanishes. WINIFRED: Remember when we used to come here? LEANDER: I remember the fries. WINIFRED: Dad used to put his arm over the seat. LEANDER: He used to put his arm over Mom. WINIFRED: I was five. LEANDER: I was three. I remember. WINIFRED: You do not. LEANDER: I remember everything. That's true, and she knows it. She lowers her eyes.
[beat 5] WINIFRED: Come home. LEANDER: Why? WINIFRED: Because it's cold. LEANDER: That's not a reason. WINIFRED: Because I'm cold. LEANDER: That's closer. WINIFRED: Because I need you.
[beat 6] He turns at last. Looks at her. In the dark, the white screen glows faintly behind his head like a halo. LEANDER: You never say that. WINIFRED: I'm saying it. LEANDER: Why now?
[beat 7] WINIFRED: Because he's going to leave tomorrow.
[beat 8] The words fall into the silence. Leander flinches, hard, like she struck him. He stands abruptly. The planks creak. She grabs his sleeve and he rips free.
[beat 9] LEANDER: You knew. WINIFRED: Since Tuesday. LEANDER: You knew since Tuesday and you didn't say. WINIFRED: I was protecting you. LEANDER: From what? WINIFRED: From this. LEANDER: This is worse!
[beat 10] His voice cracks and breaks over the empty lot. He kicks a loose plank. It tumbles off the edge and bounces down the scaffold with a long, cheap clatter. They both listen until it stops.
[beat 11] WINIFRED: Leander. LEANDER: Don't. WINIFRED: Look at me. He doesn't. She steps in front of him, forcing it. WINIFRED: I'm sorry. I should have told you.
[beat 12] He crumples. She catches him before he reaches the planks. His shoulders shake. She holds him, her chin on his head, and over her shoulder the huge dark screen waits for a picture that will never come.

### SCENE s00107 | INT. PAWN SHOP - AFTER HOURS
Characters: IRENE KOSTOPOULOS, OFFICER DAMIAN FOLASADE-REYES, SOL WEINBERG-ACHEBE, JAMAL TEAGUE
[beat 0] Glass cases. Guitars on the wall. A wall of wristwatches ticking out of sync. One shattered window patched with cardboard.
[beat 1] DET. IRENE KOSTOPOULOS (50s, trench coat, tired eyes) crouches beside a broken display case, photographing the glass. OFFICER DAMIAN FOLASADE-REYES (20s, rookie, uniform too crisp) stands at the door writing in a notebook. SOL WEINBERG-ACHEBE (60s, shop owner, cardigan, hands behind his back) watches from behind the register. At the end of the counter, a teenager, JAMAL TEAGUE (17, hoodie, no shoes), sits cross-legged on the floor with a blanket around his shoulders.
[beat 2] Kostopoulos stands. Her knees crack. She nods at the broken case. KOSTOPOULOS: What was in there? SOL: Rings. KOSTOPOULOS: How many? SOL: Eleven. She lifts one eyebrow. Sol studies the floor. SOL: Twelve. KOSTOPOULOS: Mm.
[beat 3] Damian flips a page. Jamal pulls the blanket tighter. Kostopoulos crosses to him and lowers herself, stiffly, into a squat. KOSTOPOULOS: You got a name? JAMAL: Jamal. KOSTOPOULOS: Jamal. You hurt? JAMAL: No. KOSTOPOULOS: You hungry?
[beat 4] He shrugs. She looks up at Damian. KOSTOPOULOS: Officer. Find him something. DAMIAN: Like what? KOSTOPOULOS: Anything.
[beat 5] Damian leaves. Sol follows him with his eyes. The watches tick. Kostopoulos sits on the floor beside Jamal, her coat spreading around her.
[beat 6] KOSTOPOULOS: Did you break the window? JAMAL: It was already broken. KOSTOPOULOS: Did you go in? JAMAL: I was cold. KOSTOPOULOS: That's not what I asked. He shrugs again.
[beat 7] Sol clears his throat. SOL: He's been sleeping behind the dumpster for a week. KOSTOPOULOS: You knew? SOL: I leave the heater on in the back. Kostopoulos looks at Sol, then at the boy. She exhales. KOSTOPOULOS: So nobody broke in. SOL: Somebody did. I just forgot to say hello.
[beat 8] Damian returns with a bag of crackers from the vending machine. Jamal takes it with both hands. Nobody mentions the twelve rings, and eventually Kostopoulos folds her notebook shut.

### SCENE s00108 | INT. GENERATION SHIP "ANAMNESIS" - COUNCIL CHAMBER - SHIP DAY
Characters: ELDER TOMOKO VASQUEZ-ADEBAYO, NAVIGATOR PRIYADARSHINI OKEKE, MEDIC CORVIN HALLORAN-NWOSU, ENGINEER BEATRIX SOLBERG-MWANGI, ARCHIVIST DESMOND OYELARAN-PIKE, ZANELE KOROMA-LINDEN
[beat 0] A circular hall with a ceiling like the inside of a seed. Six seats are arranged around a table of pale resin. The viewport behind them shows stars drifting in a very slow river.
[beat 1] ELDER TOMOKO VASQUEZ-ADEBAYO (70s, high collar, white hair braided to her waist) sits at the head. NAVIGATOR PRIYADARSHINI OKEKE (40s, ink-stained fingers, silent) sits beside her. MEDIC CORVIN HALLORAN-NWOSU (50s, round glasses, a satchel of vials) leans forward. ENGINEER BEATRIX SOLBERG-MWANGI (30s, rolled sleeves, calloused hands) sits scowling with her arms crossed. ARCHIVIST DESMOND OYELARAN-PIKE (60s, tweed, a book on his knee) sits very upright. And at the foot, the youngest, ZANELE KOROMA-LINDEN (20s, council apprentice, uniform too stiff) holds a stylus above a slate.
[beat 2] TOMOKO: We begin. PRIYADARSHINI: Fuel reserves? BEATRIX: Eleven percent. PRIYADARSHINI: Eleven. BEATRIX: Eleven and falling.
[beat 3] CORVIN: The farm decks are failing too. DESMOND: That is in the records. CORVIN: The records do not feed anyone. DESMOND: They tell us why. CORVIN: Why does not matter. When does. TOMOKO: Please.
[beat 4] They quiet. Zanele writes. TOMOKO: We will decide today whether the ship turns. BEATRIX: Turning costs four percent. PRIYADARSHINI: Not turning costs everything.
[beat 5] DESMOND: There is a system two light-years aft. BEATRIX: Two years of burn. DESMOND: Two years of burn, and a green world. CORVIN: How green? DESMOND: Not as green as the book. CORVIN: Then how green? DESMOND: Enough.
[beat 6] Zanele raises her stylus. ZANELE: May I speak? TOMOKO: The apprentice speaks last. ZANELE: Yes, Elder. TOMOKO: But speak. ZANELE: If we turn, my children will be born in the turn. BEATRIX: So? ZANELE: So they will never see where we were going. DESMOND: They will see where we got. ZANELE: Is that enough?
[beat 7] Nobody answers. Tomoko rests her palms on the resin and closes her eyes. Priyadarshini studies her own inked fingers. Corvin pulls a vial from his satchel, then puts it back. Beatrix uncrosses her arms.
[beat 8] BEATRIX: I would turn. CORVIN: I would turn. DESMOND: Archives will log it. PRIYADARSHINI: Turn. TOMOKO: Then it is decided. ZANELE: Thank you. TOMOKO: Do not thank us. Remember us.
[beat 9] She taps the table. The stars in the viewport shift. A deep note vibrates through the floor, and the entire ship begins to bank, so slowly that only the stars know.

### SCENE s00110 | EXT. QUARRY DIVING PLATFORM - DAWN
Characters: WOMAN, ISOLDE
[beat 0] A ten-meter steel tower above a flooded granite pit. Mist hangs on the green water. Pigeons burst from the cliff-face at the clap of a distant gate.
[beat 1] A WOMAN (30s, black swimsuit, towel around her neck, a handheld voice recorder in her fist) climbs the last rung and walks to the lip of the platform. Her bare feet leave wet prints on the grating. She is lean and focused, with the stillness of someone who has done something ten thousand times and is afraid of the ten-thousand-and-first.
[beat 2] She clicks the recorder on. WOMAN: Dive log, ninth of June. Wind, nothing. Water, sixty-one degrees. Platform, dry, mostly.
[beat 3] She breathes in. Out. WOMAN: Today's the one. Reverse three and a half, tuck. I've hit it in the pool. I haven't hit it here.
[beat 4] She sets the recorder on the grating. It records her silence, then her voice. WOMAN: You hit it by letting go of the thought of hitting it. That's what Coach said. That's what the last coach said. That's what the first coach said, and she was lying, because nobody ever lets go of that.
[beat 5] A gull shrieks. She tips her head back, closes her eyes. WOMAN: My name is Isolde Vantongeren. Twenty-nine. Six years since the last medal. I don't know if I'm doing this for the medal or for the girl who got it.
[beat 6] The recorder blinks. A clock ticks inside it. ISOLDE: Okay. Okay.
[beat 7] She picks up the recorder. Rewinds. Presses play. WOMAN: ...you hit it by letting go of the thought of hitting it. ISOLDE: Liar.
[beat 8] She sets it down again. Walks backward to the rear edge of the platform, then forward, two steps, three, springing, and lifts into the air. The water takes her without a sound. Rings spread across the surface and the mist shivers.
[beat 9] The recorder, abandoned on the grating, goes on running. In the silence it picks up only the dripping tower, the pigeons settling, and a long, delighted shout from the water.

### SCENE s00111 | INT. GRAIN SILO FREIGHT ELEVATOR - NIGHT
Characters: VALERIAN ASHFORD-OKORO, DOROTHEA KLEIN-AMADI
[beat 0] A rusted cage elevator, open at the sides, hangs in the cavernous dark of a silo. A single caged bulb swings overhead. Below, forty meters down, a drift of grain glimmers like gold sand.
[beat 1] VALERIAN ASHFORD-OKORO, a lean man in his fifties with a gray ponytail and an unbuttoned coat, grips the control lever. Across from him stands DOROTHEA KLEIN-AMADI, a woman in her forties in a flight jacket, her back pressed to the cage and her eyes on his hands. The elevator hums, mid-shaft, motionless.
[beat 2] She breathes slowly. He does not look at her. VALERIAN: Press the button. DOROTHEA: Which one? VALERIAN: The red one. She doesn't move. He sighs. VALERIAN: It won't hurt you. DOROTHEA: It's the alarm. VALERIAN: It's the stop. DOROTHEA: It says ALARM. VALERIAN: The label is wrong.
[beat 3] She laughs, shrill and brittle. He turns his head. In the swinging light, his eyes are red-rimmed and exhausted. VALERIAN: Press it. DOROTHEA: Why do you need it stopped? VALERIAN: So we can talk. DOROTHEA: We are talking. VALERIAN: So we can talk without the sound.
[beat 4] She studies him. Then slowly, she lifts a gloved hand and presses the red button. A shriek tears through the silo. He winces. She holds it. The cage shudders and jerks, and her face is a mask of calm.
[beat 5] He lunges. She drops the glove and slams him against the wall. For a second they are locked together, breathing in each other's faces, and then she shoves him back, hard, and the lever snaps under her palm. The elevator drops, ten feet, twenty, and catches with a bang that rattles every bone.
[beat 6] They hang there, gasping. The alarm dies. The bulb swings. In the new silence, a faint trickle of grain begins to run. DOROTHEA: That's the stop. VALERIAN: That's the stop.
[beat 7] He slides down the wall to sit. She stays upright, trembling. DOROTHEA: Now talk. VALERIAN: You won't like it. DOROTHEA: I have never liked you. He laughs. It becomes a cough. She waits.
[beat 8] VALERIAN: I sold the shipment. DOROTHEA: Which shipment? VALERIAN: All of it. She stops breathing. Looks at the dark below. The grain has found a seam and is pouring, a thin gold thread into the black.
[beat 9] DOROTHEA: Who bought it? VALERIAN: You don't want to know. DOROTHEA: Valerian. VALERIAN: Your brother.
[beat 10] The bulb stops swinging. The elevator creaks. She closes her eyes. When she opens them, her face is clear and cold and very quiet. DOROTHEA: Good. VALERIAN: Good? DOROTHEA: I was hoping it was him.
[beat 11] She steps over his legs, grabs the broken lever, and wrenches it back into the housing. The motor groans. The elevator begins, slowly, to rise. VALERIAN: Where are we going? DOROTHEA: To see my brother. VALERIAN: And me?
[beat 12] She looks down at him. Ignores the question. Rolls her shoulders. The cage climbs toward the dim circle of the roof, grain still whispering through the dark below.

### SCENE s00112 | EXT. LIFEBOAT - OPEN SEA - DAWN
Characters: CAPTAIN MAGNUS EKSTROM-ADEBAYO, PIA RAMIREZ-OKONKWO, DELPHINE, BAZ
[beat 0] A cramped orange boat rocks on a grey swell. Four figures huddle under a torn canopy.
[beat 1] CAPTAIN MAGNUS EKSTROM-ADEBAYO (60s, grizzled, hand clamped on the tiller) squints at the horizon. He is silent. Beside him, DR. PIA RAMIREZ-OKONKWO (40s, soaked blazer) wrings out her scarf. At the bow, young DELPHINE (16, wide-eyed, life jacket too big) clutches a flare gun. In the middle, BAZ (30s, steward, torn jacket) lies on his back, one arm over his eyes.
[beat 2] He shifts. She looks at him. PIA: Baz. Are you awake? BAZ: No. PIA: Good. Stay that way.
[beat 3] Magnus lifts one finger. Everyone goes still. He points.
[beat 4] A smudge on the horizon. A smoke trail. DELPHINE: Captain! Is that a ship? MAGNUS: It is. DELPHINE: Should I fire it? MAGNUS: Not yet.
[beat 5] She lowers the gun. Baz sits up, clutching the gunwale. BAZ: Fire it now, Delphine! MAGNUS: Wait. PIA: Magnus, if she doesn't-- MAGNUS: It's too far. They'd never see it.
[beat 6] He steadies the tiller. They wait. The smoke thickens. A hull appears. Grey. Steel. Moving toward them.
[beat 7] MAGNUS: Now. Delphine fires. A red star climbs into the sky. They scream, all four of them, together.

### SCENE s00113 | INT. TERRAFORMING STATION DOME - CONTROL DECK - DAY
Characters: ADMIRAL SELENE VOSKUIJLEN-ADEYEMI, COMMANDER RAMIRO OKONJO-TALLIS, DOCTOR YUKI HARTMANN-NWAFOR, ENGINEER BODHI LARSSON-EZE, LIEUTENANT CASSANDRA MBEKI-FROST, THE OBSERVER, CONTROL
[beat 0] A broad glass cupola overlooks a rust-red landscape speckled with the first green. Atmospheric processors the size of cathedrals churn on the horizon. Inside, a ring of consoles, each glowing in a different color.
[beat 1] Six people work the ring. ADMIRAL SELENE VOSKUIJLEN-ADEYEMI (60s, silver crop, high collar) paces the center. COMMANDER RAMIRO OKONJO-TALLIS (40s, shaved head, burn scar on one cheek) taps at a console. DOCTOR YUKI HARTMANN-NWAFOR (30s, braids, lab coat) studies a spectrograph. ENGINEER BODHI LARSSON-EZE (20s, sleeveless jacket, goggles on his forehead) crouches under a panel. LIEUTENANT CASSANDRA MBEKI-FROST (30s, tight bun) monitors a bank of weather maps. And last, at a small console apart from the others, THE OBSERVER, an elderly man known only by his badge, watches without touching anything.
[beat 2] SELENE: Report. RAMIRO: Oxygen at eleven percent. YUKI: Methane trace is falling. BODHI: Pump six is slow. CASSANDRA: Storm cell northeast. Forty minutes out. SELENE: Can the dome hold? BODHI: It's held worse. SELENE: That is not an answer. BODHI: Yes, Admiral.
[beat 3] CONTROL: Station, this is Earth Control. Please confirm your count. SELENE: Control, we confirm six souls. CONTROL: Six. Understood. Be advised, the board has questions about the Observer.
[beat 4] The Observer's head turns. Nobody else moves. SELENE: Control, he has all clearances. CONTROL: It's not about clearances. SELENE: Then what is it about?
[beat 5] A long silence. Static. CONTROL: He was registered dead in 2091.
[beat 6] Every head turns toward the Observer. He smiles, an old, courteous smile, and stands, smoothing his badge. THE OBSERVER: It was a clerical error. SELENE: Of course it was.
[beat 7] Ramiro rises. Cassandra rises. Yuki drops her pen. Bodhi steps out from the panel and wipes his hands, slowly, on his trousers.
[beat 8] THE OBSERVER: I am sorry to have worried you. I am here only to watch. SELENE: Watch what? THE OBSERVER: The part that comes after you.
[beat 9] Outside, the first thin line of storm cloud crosses the red horizon.

### SCENE s00114 | INT. LAKESIDE BOATHOUSE BALLROOM - NIGHT
Characters: ELOWEN TREGARTHEN-ADEYEMI, ARTEMIS KOWALCZYK-MWANGI, LEONID BRAUNSTEIN-OKAFOR, MIRABEL
[beat 0] A long timber hall on stilts above black water. Faded bunting. A chandelier with half its bulbs out. Through tall windows, the lake lies glassy and still under a quarter moon. A gramophone in the corner plays a thin, crackling waltz.
[beat 1] Four people occupy the room, and only one of them is dancing. ELOWEN TREGARTHEN-ADEYEMI (30s, sea-green dress, bare shoulders) turns slowly in the center of the floor, alone, her eyes half closed. At the bar, ARTEMIS KOWALCZYK-MWANGI (30s, rolled-up shirt sleeves, a bottle in one hand) pours two glasses and pours a third. LEONID BRAUNSTEIN-OKAFOR (50s, dinner jacket, white gloves) stands near the gramophone with a hand on the horn, as if holding the music in place. And on the window seat, curled like a cat, sits a girl of eight, MIRABEL (small, in a nightgown, hair loose), who is not supposed to be awake.
[beat 2] She spins. The hem of her dress sweeps the boards. She stops, breathless, and looks directly at him. ELOWEN: You never asked me to dance.
[beat 3] He lowers the bottle. He does not answer. She walks toward him, slowly, leaving a track in the dust. ARTEMIS: I don't dance. ELOWEN: You did once. ARTEMIS: That was a different year. ELOWEN: It was this year.
[beat 4] Leonid clears his throat. Both glance at him. LEONID: Perhaps I should adjust the record. ELOWEN: Leave it. He lifts his hand from the horn, relieved.
[beat 5] Artemis puts down the bottle. He steps out from behind the bar. For a moment they stand a yard apart. ARTEMIS: The lake is still. ELOWEN: It always is, here. ARTEMIS: That frightens me. ELOWEN: Does it? ARTEMIS: You don't know what's under it.
[beat 6] She smiles at that, the first smile of the night, and takes his hand. He lets her. She pulls him gently onto the floor, one arm round his shoulder, the other in his palm, and they sway to the gramophone's crooked waltz. At the window, Mirabel hugs her knees.
[beat 7] LEONID: Lovely. MIRABEL: He's going to cry. LEONID: Who? MIRABEL: Him. Leonid peers. Artemis's face is turned to the dark window, jaw set, eyes bright. He does not cry. Not yet. He holds her closer.
[beat 8] ARTEMIS: I couldn't stay. ELOWEN: I know. ARTEMIS: I couldn't tell you why. ELOWEN: I know that too.
[beat 9] The record stutters. Leonid lunges for the needle. The room goes still and quiet, and Elowen stops, her hand still in Artemis's, her eyes on his face. ELOWEN: Say it, then. ARTEMIS: Say what? ELOWEN: Whatever it is you came all this way to say.
[beat 10] He opens his mouth. Closes it. From the window seat comes the dry rustle of Mirabel unfolding, and then her small, bare feet on the boards, crossing the room, stopping beside them. MIRABEL: He wants you to come back.
[beat 11] Silence. Then the lake, at last, ripples, once, and a single bulb of the chandelier pops. ELOWEN: Does he? ARTEMIS: Yes.
[beat 12] Elowen releases his hand. Steps back. She looks at the child, at Leonid, at the bottle on the bar, and then at Artemis again, and for a long moment says nothing at all.
[beat 13] Then she slaps him. The crack rings through the hall. The gramophone, which Leonid has been holding down with both hands, begins, absurdly, to play again. ELOWEN: Eleven years. ARTEMIS: I know. ELOWEN: Eleven years, and you send a child. MIRABEL: I wasn't sent. I came.
[beat 14] Artemis laughs, a wet, helpless sound. Elowen turns away toward the dark windows, her back straight. Leonid, with great delicacy, picks up the third glass and offers it to her. She takes it. She drinks it in one swallow.
