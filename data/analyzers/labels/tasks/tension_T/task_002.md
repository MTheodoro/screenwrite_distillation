You are an annotator labeling screenplay scenes for a dataset.

Rate dramatic tension. Below are scenes split into numbered beats.

1. For every scene, give one score 0-100 per beat (same order).
2. Then answer each cross-scene comparison: which beat is MORE tense, "a", "b" or "tie".

Tension = what a reader feels: stakes, conflict, threat, urgency, suspense. Loud or violent is not automatically
tense; a quiet threat can be very tense. Absolute anchors: 0-15 calm/mundane, 15-35 mild friction or unease,
35-60 clear conflict or suspense, 60-80 high stakes, open confrontation or danger, 80-100 peak life-or-death /
climactic moment.

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/tension_T/group_004.json with the Write tool:
{"scores": {"<scene_id>": [..], ...}, "pairs": {"<pair id>": "a"|"b"|"tie", ...}}
Valid JSON only. Reply only with "done".

## Scenes

### s00369
0. A county courtroom improvised in an old botanical greenhouse. / Glass panes fog with humidity. / Tomato vines climb the jury box. / Benches have been dragged between rows of orchids. / A gavel sits on a flowerpot. / JUDGE ELDRIDGE MARCHAND, sixties, in a robe damp at the hem, presides from a potting bench raised on cinderblocks. / His spectacles keep fogging, and he wipes them with the same corner of the robe every thirty seconds. / PROSECUTOR LOUISA ZAMBRANO, thirties, stands at a lectern made from a wooden crate, her notes curling in the heat. / A DEFENDANT, forties, sits at the defense table in a borrowed suit, pale, sweating, his hands flat on the wood.
1. LOUISA: Your Honor, the state calls its final witness. / JUDGE: Proceed.
2. She turns. / At the back, among the ferns, a woman rises.
3. LOUISA: The state calls Mrs. Dolores Vance. / DEFENDANT: No.
4. The woman walks the aisle between the orchids. / Each step leaves a wet print on the tile. / She takes the stand, a wicker chair beside a fig tree, and places her hands in her lap.
5. JUDGE: Mrs. Vance, do you swear to tell the truth? / DOLORES: I do.
6. LOUISA: Mrs. Vance, do you recognize the man at the defense table? / DOLORES: I do. / LOUISA: Who is he? / DOLORES: My husband.
7. The Defendant closes his eyes. / The Judge wipes his spectacles. / A drop of condensation slides down the glass and falls onto the gavel.
8. LOUISA: And when did you last see him before today? / DOLORES: Eleven years ago. The night I was buried.
9. Silence. / A moth lands on the Judge's shoulder. / He does not brush it off.
10. The Defendant opens his eyes and looks directly at her, and a very small, terrible smile crosses his face. / DEFENDANT: Hello, Dolores.

### s00308
0. Neon, salt air, the electronic bleat of a hundred machines. / A claw crane glows at the end of a row. / NOVELLA "NOVA" ABIOLA-HARTLEY (20s, sequined jacket) feeds quarters into the crane. / Her friend FELICITY "FLISS" OKONJO-VARGA (20s, cardigan, two ice creams) hovers behind. / A stranger, WYNDHAM TIERNEY-ASARE (20s, windbreaker, a tin of tokens), waits for the machine.
1. She presses the stick. / The claw descends. / It grips a plush octopus. / It lifts. / It drops it.
2. She groans and slaps the glass. / He stifles a laugh. / She turns on him. / NOVA: Don't. / WYNDHAM: I didn't. / NOVA: You were going to. / WYNDHAM: I was going to say nice try.
3. He slides a token into the slot. / Their eyes meet. / She steps aside. / He takes the stick. / The claw descends over the octopus. / Fliss licks her ice cream. / Watches them both.
4. The claw grabs. / Lifts. / Shakes. / The octopus swings and holds, then drops into the chute. / It tumbles out.
5. He picks it up. / Hands it to Nova. / She takes it. / NOVA: Thank you. / WYNDHAM: You're welcome. / They speak at once and laugh.
6. Fliss clears her throat. / FLISS: We're going to miss the Ferris wheel. / NOVA: Go on. I'll catch up. / Fliss shrugs. / Goes. / Nova turns to Wyndham, hugging the octopus.
7. NOVA: So. / WYNDHAM: So. / She looks at the octopus. / He looks at his shoes. / A siren whoops from a driving game and someone shouts jackpot.
8. She starts to speak and the lights on the pier go out. / Darkness. / A collective moan from the arcade. / A beat.
9. Then the lights return, brighter than before, and he is gone. / She is alone with the octopus.
10. She looks around. / Down the row, by the Ferris wheel entrance, he is waving. / Her ticket is in his hand.

### s00379
0. A great timber hall with a stone hearth, now lined with cots. / Antlers still hang over the mantel. / Blizzard wind works the shutters. / DR. SAOIRSE KELLEHER, 40, mud on her boots and blood on her cuffs, stands over a cot with a stethoscope draped around her neck. / She has not slept in two days and she holds her face carefully, like something fragile on a tray. / NURSE ABIODUN, 30, sets out instruments on a ski-rack trolley. / He works precisely, wasting no motion. / On the cot, MRS. HELENA PAVLICEK, 70, lies pale under three blankets, her breath shallow. / At the foot of the bed, her husband GREGOR PAVLICEK, 72, holds his hat in both hands, turning it by the brim.
1. SAOIRSE: Mr. Pavlicek. The avalanche took her ribs, and one of them has nicked the lung. / GREGOR: She was talking on the way down. / SAOIRSE: I know.
2. She checks the pulse at Helena's wrist. / She counts, and he waits, and she finds nothing to say about the number.
3. GREGOR: You'll operate. / SAOIRSE: We would have to open the chest. I have a surgical kit and a lantern. The helicopter can't land for another night. / GREGOR: Then do it.
4. ABIODUN: Doctor, the generator's down to an hour.
5. She glances at him. / He looks back, steady. / In that look is a whole second conversation.
6. SAOIRSE: Then we have an hour. / GREGOR: I said do it. / SAOIRSE: I heard you.
7. She turns, takes a scalpel from the trolley, and holds it up to the light. / Her hand is perfectly steady.
8. Gregor takes a step forward. / He sets his hat on the bed. / His knuckles are white.
9. GREGOR: And if you cut and she dies on your table? / SAOIRSE: Then she dies knowing someone tried.
10. GREGOR: Then I forbid it. / ABIODUN: Sir. / GREGOR: She is mine. Fifty years. I will not have her opened by a stranger in a dead man's hunting lodge.
11. He grabs Saoirse's wrist. / The scalpel stops in the air. / Abiodun moves in, but she shakes her head, and he freezes.
12. SAOIRSE: Mr. Pavlicek. Look at her. / He does not want to. / He does.
13. Helena's eyes are open, and they have found him. / Her lips move. / HELENA: Greg. Let go.
14. His grip loosens. / The scalpel lowers. / The wind slams the shutters, and somewhere the generator stutters.

### s00099
0. A narrow cabin of dark wood and brass. / Two bunks. / A lamp swings with the rails. / Rain slides sideways down the window.
1. CLEMENCE ARDOIN (30s, wool coat, hair undone) sits on the lower bunk with her shoes still on. / SULEIMAN HADDAD (30s, travel-worn suit, a single suitcase) stands at the window with his back to her. / He does not turn. / She watches the back of his neck. / He watches the dark.
2. CLEMENCE: You could have taken another car. / SULEIMAN: There was no other car. / CLEMENCE: There's always another car. / SULEIMAN: Not at two in the morning. / CLEMENCE: You didn't ask. / SULEIMAN: Neither did you.
3. The rails clack. / She smooths her skirt. / He loosens his tie, pulls it off, folds it once, twice, and tucks it in his pocket.
4. CLEMENCE: Tell me why you came. / SULEIMAN: I told you. / CLEMENCE: You told me a story about a conference. / SULEIMAN: It was a good conference. / CLEMENCE: In Lyon. Where I live. / SULEIMAN: It's a big city. / CLEMENCE: Suleiman. / SULEIMAN: Clemence.
5. CLEMENCE: Say it. / SULEIMAN: I got on the wrong train. / CLEMENCE: You got on the right one. / SULEIMAN: That's worse. / CLEMENCE: Yes.
6. He finally turns. / The lamp lights half his face. / She is already standing. / They are closer than either planned.
7. SULEIMAN: Six years. / CLEMENCE: Seven in March. / SULEIMAN: You counted. / CLEMENCE: You didn't? / SULEIMAN: Every day. / CLEMENCE: Then why is this the first time? / SULEIMAN: Because you would have said no. / CLEMENCE: I might have said yes. / SULEIMAN: Might. / CLEMENCE: Might.
8. The train screams around a curve and throws her against his chest. / He catches her. / Neither lets go. / CLEMENCE: That was an accident. / SULEIMAN: I know. / CLEMENCE: I'm not sorry. / SULEIMAN: Neither am I.
9. She slaps him, hard, across the cheek. / He doesn't flinch. / She slaps him again, and then she is crying, and then she is holding onto his lapels, and he says her name into her hair, again and again, as the rain beats on the glass and the train carries them toward a station neither of them knows.

### s00980
0. White ground, white sky. / A lone shack. / A dead well. / Heat shimmer.
1. SILAS MORROW (50s, dusty duster, gray stubble) sits on a bench with a rifle across his knees. / CATALINA VEGA (30s, wide hat, twin pistols) stands in the road ten paces away.
2. CATALINA: You're a long way from Tucson, Silas. / SILAS: I was told you'd be here. / CATALINA: By who? / SILAS: By a man who owed me. / CATALINA: He owed you what? / SILAS: A reason.
3. She smiles. / Steps forward. / He doesn't move.
4. CATALINA: You killed my brother. / SILAS: I did. / CATALINA: Why? / SILAS: He drew first. / CATALINA: He was nineteen. / SILAS: So was I, once.
5. The wind stops. / Both of them listen.
6. CATALINA: Stand up. / SILAS: My knees won't allow it.
7. She draws one pistol. / He lifts the rifle. / They both freeze, muzzles level.
8. CATALINA: Last words? / SILAS: Tell the boy's mother I'm sorry.
9. A gunshot. / Both flinch. / Both dive for cover.
10. On the ridge, a distant rider tumbles from a horse. / The two lie in the salt, breathing. / They look at each other.

### s00159
0. White. / Everything white. / A twisted aluminum wing juts from a drift like a broken bone. / Wind scours the ridge. / ASTRID VESTERGAARD-NNAMDI, 30s, in a torn orange parka, kneels beside a battered satchel. / Her face is cracked with cold. / A tiny emergency radio sits in her lap, its antenna taped to a ski pole.
1. She lifts it. / Presses the key. / Releases. / Static. / She tries again. / Static.
2. She sets it down. / Breathes. / Fumbles in the satchel, withdraws a small digital recorder, and presses PLAY.
3. ASTRID: Day two. I'm okay. Cold, but okay. I keep calling. Nobody answers. / She listens, eyes shut.
4. ASTRID: If you find this, tell Mom I wasn't scared.
5. Her mouth twists. / She turns the recorder off.
6. She looks at the wing. / At the sky. / At the ridge, where a shape, grey, hunched, sways.
7. She stills. / Her hand finds the pistol flare in her pocket.
8. The shape resolves. / A caribou. / It stares. / She stares. / A moment of animal truce.
9. It turns and ambles over the ridge. / She lets out a shuddering breath, laughs once, short, ragged.
10. The radio crackles. / Three clicks. / A pause. / Three clicks again, from far away.
11. She grabs it. / Fumbles. / Presses the key. / ASTRID: This is Astrid. This is Astrid Vestergaard. I'm alive.
12. She drops her head. / Snow stings her cheek.
13. She closes her eyes and listens to the radio.

### s00388
0. A fluorescent box with a mini-trampoline in the center, installed under a banner: "WELLNESS IS A JOURNEY."
1. PHILLIPA, 40s, regional VP, stands on the trampoline in a blazer, bouncing in small, tight, politically correct hops. / OGDEN, 30s, analyst, and TANVI, 20s, intern, watch from either side of the microwave.
2. PHILLIPA: Team, this is about psychological safety. / OGDEN: Totally. / TANVI: Totally.
3. Phillipa bounces. / A button on her blazer pops off and ricochets across the room. / All three track it. / It lands in the coffee. / Nobody breathes.
4. PHILLIPA: I'd like to hear thoughts.
5. OGDEN and Tanvi both open their mouths. / Both close them. / Both look at the coffee. / OGDEN: It's... buoyant. / TANVI: It's very buoyant.
6. Phillipa steps off the trampoline. / The three of them scatter in different directions. / The trampoline keeps bouncing slightly, alone.

### s00792
0. The neon is half dead. / Lane nine glows pink. / A disco ball turns slowly over the shoe counter, throwing coins of light across a carpet printed with comets. / It smells of fryer oil and rental-shoe disinfectant. / The last night of high school, and the party has thinned to six.
1. PHOEBE ADEBAYO, 18, still in her cap and gown, kneels on lane six and rolls the ball down the gutter on purpose. / KENJI MORIKAWA, 18, tie around his forehead, sits on the ball return and watches her. / LACHLAN "LOCKY" DUNMORE, 18, hair gelled for an event that has ended, flips a keychain in one hand. / BEATRIX SOKOLOWSKI, 17, writes in a notebook with her tongue between her teeth. / COSMO ABARA, 18, who sold the most tickets to the dance and attended none of it, eats fries from a paper boat.
2. HORACE LINDQVIST, 60s, the night manager, leans on the counter with a rag over his shoulder and counts a cash drawer. / HORACE: Last frame, kids. I'm closing. / PHOEBE: Five more minutes, Mr. Lindqvist. / HORACE: That's what you said at the last five. / KENJI: Mr. Lindqvist, this is history. / HORACE: It's a Tuesday. / BEATRIX: It's a Tuesday in history.
3. Locky tosses his keys. / Cosmo catches them in a fry. / A beat. / Everyone looks at the fry-wrapped keys. / COSMO: I regret nothing. / LOCKY: Those are my dad's keys. / COSMO: Then I regret one thing.
4. Phoebe lines up the ball again. / Kenji slides off the return. / Beatrix closes the notebook.
5. BEATRIX: Okay. Real talk. / PHOEBE: Oh no. / BEATRIX: Does anyone actually know what they're doing in September? / KENJI: Michigan. / LOCKY: Shop. My uncle's. / COSMO: Community college. Then, like, the world.
6. PHOEBE: Nothing. / They look at her. / PHOEBE: I don't know. Nothing's planned. That's the plan.
7. The disco ball turns. / Light slides across their faces, one by one.
8. HORACE: Last call. Or I turn off lane six.
9. Phoebe takes a breath. / Rolls the ball. / It wobbles, wobbles, and drifts toward the pins. / Nobody breathes.
10. It hits the head pin, perfect. / Pins explode. / STRIKE flashes on the screen in dying neon.
11. They don't cheer. / They stand there, grinning, like people who have just remembered how. / PHOEBE: Huh.

### s00456
0. An empty concrete basin under a bruised sky. / Chain-link sagging. / Leaves in the deep end. / Graffiti: a faded dolphin. / Five teenagers perch on the diving board and the ladder rails, passing a flask. / PAISLEY OKORO-WEST (17, braids, a rolled cigarette behind her ear) dangles upside down from the high rail. / Her cousin TIBERIUS "TIBBY" LUNDGREN (16, glasses, secondhand letterman) lies spread on the board. / Next to him sits FARRUKH SAIDOV (17, soccer shorts), cross-legged. / Below them, in the shallow end, DELPHINE "DEL" ARCEO (18, black nail polish) paces, and LUCA BERNARDI (17, fresh sunburn) leans on the wall.
1. PAISLEY: Tibby, you're going to fall. / TIBBY: That's the plan. / FARRUKH: Tibby, don't. / DEL: Let him. He's been dramatic all week. / LUCA: Del, relax. / DEL: I'm relaxed, Luca. / PAISLEY: You're pacing a trench.
2. Tibby sits up. / The board bounces. / Farrukh grabs the rail.
3. TIBBY: I got into Michigan.
4. The pool goes silent. / Paisley drops from the rail and lands in a crouch. / PAISLEY: Tibby! / FARRUKH: Congratulations, man. / LUCA: That's great. / DEL: Great.
5. She lifts the flask and drinks. / Luca watches her. / She hands it to him without looking.
6. TIBBY: I wasn't going to tell anybody. / DEL: Why not? / TIBBY: Because she'd be like that.
7. He jerks his chin at her. / She spins on him. / He holds up both hands. / TIBBY: Not mean. Just. You know.
8. PAISLEY: Del, he's allowed to leave. / DEL: I know he is.
9. She says it with her back turned. / The sky flickers with distant lightning. / Farrukh slides down from the board. / Luca hands her the flask back. / She takes it, and drinks again.
10. DEL: Save me a spot in the dorm.
11. Tibby laughs, and the laugh turns into something else. / Paisley hops onto the board and puts her arm around him. / He leans into her shoulder.
12. Farrukh climbs the ladder to the deep end and lowers himself into the dry basin. / The others follow, one by one, until all five sit in the center on the leaf-strewn concrete. / LUCA: So. Michigan. / TIBBY: So. Michigan.
13. Thunder rolls. / The first drops of rain hit the bottom of the pool.

### s00871
0. Engines thrum. / Six figures around a rusted minivan. / INES VARELA, 40s, SEUN ADEYEMI, 30s, HARLAN COOPER-REID, 60s, PRIYA NAIR, 20s, DMITRI SOKOLOV, 50s, and GRANDMA ZOFIA, 80s, in a folding chair.
1. She clutches an urn. / He pretends not to see. / They all stare at the lid.
2. INES: We scatter it at the island, like she said. / HARLAN: She said the harbor. / SEUN: She said both. She said a lot of things.
3. Zofia laughs at nothing. / Priya takes the urn from Ines, gently, and Ines lets go too fast. / PRIYA: Okay. Okay.
4. DMITRI: Someone opened this. / Silence. / He holds up the lid, tape peeled. / Harlan studies the floor. / Ines reaches for the urn again.
5. INES: Who opened it?
6. HARLAN: She asked me to look. / SEUN: You looked? You LOOKED? / DMITRI: Seun, quiet.
7. INES: There's nothing in it, is there.
8. Priya tips the urn. / Ash, grey, real. / Everyone exhales. / Zofia stops laughing.
9. ZOFIA: That is not Marta.
10. They turn as one.

### s00863
0. A great copper dome, its slit open to the stars, hangs overhead like the underside of a bell. / A brass telescope as long as a bus rests on a cracked iron mount. / Dead leaves cover the floor. / A single lantern burns on a crate. / CASPIAN ROTH, fifties, in a long gray coat, sits on an overturned bucket with a laptop open on his knees. / He types, stops, types again. / His face glows pale blue. / Beside him, a satellite phone lies on the crate, its screen dark.
1. He lifts his head. / The dome creaks in a wind that shouldn't be there. / CASPIAN: Come on. Come on. / He types.
2. The telescope's great eye twitches an inch to the left, and a gear somewhere shrieks. / He freezes. / The dome is still. / CASPIAN: That's not me.
3. He closes the laptop slowly and reaches for the phone. / As he does, a shape detaches itself from the shadow beneath the telescope and walks forward into the light: ODETTE LACROIX, forties, in a black raincoat, bare hands, no bag. / She is soaked to the skin. / A thin line of water drips from her hem onto the dead leaves with every step.
4. ODETTE: Don't touch the phone. / CASPIAN: How long have you been here? / ODETTE: Since before you. / CASPIAN: That's impossible. I locked the door. / ODETTE: Which door?
5. He looks at the entrance, a heavy oak slab bolted from inside. / Then at the slit overhead. / Then at her wet coat.
6. CASPIAN: Who sent you? / ODETTE: Nobody sends me. I'm the one who stays.
7. She crosses to the crate and looks down at the dead phone, then at the laptop, then at him. / Her eyes are tired, not unkind.
8. ODETTE: You came here to upload something. / CASPIAN: Data. Just data. / ODETTE: Data about the star? / CASPIAN: How do you / ODETTE: I'm the last person who could read it.
9. A long silence. / A gust of cold air sweeps through the dome. / The lantern gutters, steadies.
10. CASPIAN: Is anyone else here? / ODETTE: Only the telescope. / CASPIAN: It moved. / ODETTE: It does that when someone looks.
11. He sets the laptop on the crate and stands. / She doesn't step back. / Their shadows overlap on the leaf-strewn floor.
12. CASPIAN: Miss, I don't know what / ODETTE: Caspian. Sit down. You'll want to hear this sitting.
13. He stays standing. / Then, slowly, as if all his joints have turned to paper, he lowers himself back onto the bucket.
14. She picks up the lantern and holds it between them, so that each of them is lit and neither is. / ODETTE: Tell me what you saw.

### s00331
0. A mid-size passenger bus, headlights still burning, surrounded by black water that laps at the doors. / The aisle is wet to the ankle. / Rain drums on the roof. / GWEN MARSDEN, fifties, the driver, grips the wheel though the engine is dead. / HIRO YAMAMOTO, forties, a salesman with a leather briefcase, stands in the aisle. / OLUWASEUN, twenties, sits on the back bench with her knees drawn up. / AUNTIE LUPE, seventies, wraps a shawl around a covered basket. / BARNABY, ten, sits very still beside her.
1. GWEN: Everybody stay on the seats. Above the water line. / HIRO: How far is the next village? / GWEN: Two miles. / HIRO: In which direction? / GWEN: Away from the water.
2. Hiro lifts his briefcase to his chest. / He sets it down. / He lifts it again.
3. AUNTIE LUPE: Eat something, my darling. / BARNABY: I'm not hungry. / AUNTIE LUPE: Eat.
4. Barnaby takes a roll from the basket and holds it in both hands without biting it. / Oluwaseun shifts her feet up onto the seat. / OLUWASEUN: Okay. Okay. Okay. / HIRO: Did somebody say something? / OLUWASEUN: No.
5. The bus tilts a few degrees. / Everyone grabs a seatback. / A cold line of water slides along the floor. / GWEN: Nobody panic. Everybody move to the front.
6. They move. / Hiro hesitates, then offers Auntie Lupe his arm. / She takes it without a word.
7. Barnaby sets down the roll and picks up the basket. / AUNTIE LUPE: Leave it, darling. / BARNABY: It's heavy. / AUNTIE LUPE: Then we carry it together.

### s00386
0. Low beams. / A fire. / Tallow smoke. / A cracked auction block stands in the middle of the floor, and the room is crowded to the walls.
1. GILES, 50, the auctioneer, stands on the block with a gavel and a face like wet bread. / MARGUERITE, 30, a widow in good black, sits at the front, hands folded. / JEB, 20s, a ship's boy, hovers behind her chair. / CAPTAIN SILAS, 60, in a salt-stiff coat, lounges near the hearth.
2. GILES: Lot forty. One brig, the Halcyon, hull sound, rigging poor. Do I hear fifty guineas? / CAPTAIN SILAS: Forty. / MARGUERITE: Sixty. / JEB: Missus, we cannot afford sixty. / CAPTAIN SILAS: Sixty-five. / MARGUERITE: Seventy. / GILES: Seventy from the lady. Do I hear seventy-five? / JEB: Missus! / CAPTAIN SILAS: Seventy-five. / MARGUERITE: Eighty. / GILES: Eighty. Going once.
3. The room hushes. / Silas looks at her across the smoke. / She looks back. / Neither blinks. / He lifts a single finger.
4. CAPTAIN SILAS: Ninety.
5. Marguerite stands. / She turns to Jeb, takes the purse from his belt, and puts it on the block. / MARGUERITE: That is everything I own, Mr. Giles.
6. GILES: It's one hundred and twelve. / MARGUERITE: Then it is a hundred and twelve.
7. Silas laughs, then stops. / She has not moved.
8. GILES: Sold.

### s00366
0. A cavernous warehouse of beds. / Banners scream "BLOWOUT." / A fake sunrise glows over a king-size. / DUANE PETTIGREW, forties, a salesman in a shiny tie, hovers over a couple. / LUCINDA FROST, thirties, bounces gently on a firm model. / Her husband THEO FROST, thirties, lies flat on a plush one with his shoes on.
1. DUANE: This one has four layers of memory foam. / LUCINDA: I'll take your word.
2. Duane clasps his hands. / Theo rolls over and sinks into the foam with a long sigh while Lucinda stands and moves to a third bed, which Duane hurriedly pats, and while Theo's shoes drag a smear of mud across the quilted top, Duane gasps and lunges with a wipe, and Lucinda kneels to inspect the springs.
3. THEO: I can't get up. / LUCINDA: It's only a mattress. / THEO: It has me. / DUANE: That's the contouring technology!
4. Duane takes Theo's arm and heaves. / Theo comes up an inch and falls back. / Lucinda grabs his other arm.
5. They pull in unison and the three tumble off the edge of the bed in a heap, the sign "BLOWOUT" swaying overhead.

### s00793
0. Crammed. / Juice boxes. / A dashboard phone holder with a call in progress.
1. GERALD OKONJO-HART, 40s, grips the wheel. / SUNITA, 40s, wedges a map between her knees. / In the back, GUS, 10, kicks the seat. / PIPER, 14, stares at her phone.
2. GRANDMA BERNADETTE: Are you there yet? Dinner's getting cold. / GERALD: We're at the toll, Mom.
3. GUS: Mom, tell Piper to stop breathing on me. / PIPER: I'm not even close. / SUNITA: Both of you. Quiet.
4. At the booth, a TOLL ATTENDANT, 20s, leans out. / He eyes the van's tangle of wires and limbs. / ATTENDANT: Four fifty.
5. Gerald pats his pocket. / Pats the other. / Pats the dashboard.
6. GERALD: Sunita. Wallet? / SUNITA: You had it. / GERALD: I gave it to you. / SUNITA: You gave me nothing.
7. GRANDMA BERNADETTE: Is that a toll? Gerald, I told you to take the back road!
8. The van behind them honks. / Then another.
9. Gus presses the window button. / Dollar bills and napkins fly out. / The attendant snatches one.
10. ATTENDANT: That's a coupon for sandwiches. / GUS: Is it good? / ATTENDANT: Buy one get one.
11. He waves them through. / Gerald stares at him. / The bar lifts.
12. GRANDMA BERNADETTE: Did you pay? / GERALD: We did, Mom. Sort of.

### s00317
0. Chlorine haze. / Lane ropes bobbing. / Rows of empty bleachers. / A single swimmer cuts lengths in lane four. / COACH MARISOL TREVELYAN-ADEWALE (50s, whistle, towel round her neck) crouches at the pool edge with a stopwatch. / On the starting block, soaked, goggles pushed up on her forehead, waits ISAURA PRZYBYLSKI-MBEKI (17, racing suit, shoulders too narrow for her ambitions).
1. MARISOL: Again. / ISAURA: I just did two hundred. / MARISOL: And you'll do another. / ISAURA: Coach. / MARISOL: Isaura. / ISAURA: My arms are lead. / MARISOL: Lead floats if you move fast enough.
2. Isaura laughs, breath ragged. / Lowers her goggles. / MARISOL: On my whistle. / ISAURA: On your whistle.
3. Marisol raises it. / MARISOL: Go.
4. Isaura launches. / The water folds around her. / Marisol clicks the watch. / Walks the deck beside the lane, keeping pace.
5. At the wall, Isaura tumbles, pushes off. / Marisol bends lower. / MARISOL: Long. Long. / ISAURA: I'm trying! / MARISOL: Long, Isaura!
6. Isaura touches the far wall. / Surfaces. / Breathes. / Marisol stops the watch. / Looks at it.
7. MARISOL: Better. / ISAURA: How much? / MARISOL: Two-tenths. / ISAURA: That's all? / MARISOL: That's everything.
8. Isaura grins. / Pulls herself onto the deck and sits, legs dangling. / Marisol sits beside her. / They both stare at the water.
9. ISAURA: Can I ask something? / MARISOL: You can ask. / ISAURA: Did you ever want to quit? / MARISOL: Every day. / ISAURA: But you didn't. / MARISOL: I got up. That's the whole trick. / ISAURA: That's not a trick. That's just getting up. / MARISOL: Yes. Exactly.
10. They say the next line together. / MARISOL: Again? / ISAURA: Again.
11. They laugh. / Isaura stands. / Marisol rises. / The water settles into stillness, waiting for them.

### s00721
0. Forty dryers turn like slow, patient moons. / The windows have gone to black mirrors. / In the one plastic chair that isn't cracked, CATALINA SOTO-MERCADO, seventies, sits guarding a wicker basket on her lap as if it were a sleeping child.
1. Across the aisle, her grandson EZEKIEL, sixteen, all elbows and hood, stares at his phone and refuses to be in the building.
2. EZEKIEL: You said an hour, Abuela. It's been three. / CATALINA: Then sit. Fold something. / EZEKIEL: There's nothing to fold. It's all in the dryer. Mom's stuff. Dad's stuff.
3. Catalina's hand tightens on the basket. / A dryer thuds to a stop behind them. / Neither moves.
4. CATALINA: That is not your father's stuff.
5. Ezekiel pockets the phone and crosses the aisle in four strides. / He reaches for the basket. / She pulls it to her chest. / For a moment they hold opposite ends of it, nose to nose, a wicker tug-of-war under the buzzing light.
6. EZEKIEL: He left it. It's a shirt, it's a stupid shirt. / CATALINA: It is the shirt he was wearing the day he taught you to ride. / EZEKIEL: That I don't remember!
7. The basket tips. / A faded blue shirt slides out and lands between them, half open on the tile. / They both freeze, breath held, staring at it as if it might stand up.
8. Ezekiel kneels first. / Catalina follows, knees cracking, and together they lift it by the sleeves, like folding a flag with no ceremony.
9. CATALINA: Hold your end.

### s00533
0. Plank bleachers. / Dust. / A hand-lettered sign: LOT 14, HEIFER, OPEN BIDDING. / Flies work the heat. / HOLLIS BRADDOCK, 60s, a hat older than his marriage, sits in the third row with his hands in his lap. / Beside him MARIBEL BRADDOCK, 50s, stares straight ahead, ring finger bare. / Across the aisle TAVISH DOYLE, 40s, in a clean vest, a bidder's card in his fist, doesn't look at either of them. / DOLLY, 12, Hollis's granddaughter, sits at the rail with her boots dangling and watches all three.
1. AUCTIONEER: Who'll give me four? Four hundred, four, I got four, now five, five, who'll give five? / Tavish lifts his card. / Hollis does not move. / Maribel's jaw tightens. / AUCTIONEER: Five, I got five from the man in the vest, now six? Six for a good milker, six?
2. Hollis shifts in his seat. / Takes off his hat, turns it twice by the brim, puts it back on. / Maribel slides one foot six inches away from his. / Dolly picks at a splinter and keeps looking at her grandfather's hands. / AUCTIONEER: Six anywhere? Going once --
3. Hollis lifts one finger. / Barely. / AUCTIONEER: Six, I got six! Seven?
4. Tavish glances over, nods at Hollis, once. / Lifts his card.
5. MARIBEL: Eleven years. / HOLLIS: Mm. / AUCTIONEER: Seven, going --
6. Hollis lowers his hand. / Dolly looks at Maribel. / Maribel looks at Tavish.
7. Gavel.

### s00583
0. Gaslight steady. / Curtains drawn. / The train hammers through a tunnel. / PRUDENCE ACHTERBERG, 50s, in a quilted robe, grips a teacup. / Across from her, COLONEL ISAAC DUBOIS-KANE, 70, in pajamas and monocle, thumbs a revolver. / LALITA SENGUPTA, 20s, a porter's daughter in borrowed uniform, stands guard by the door. / ENZO MARCHETTI, 30s, a violinist, sits sweating by the window. / CECILE VANTERPOOL, 40s, in evening gown, lies on the floor between them. / Not moving.
1. PRUDENCE: Colonel, put that down. You'll shoot the wrong one. / DUBOIS-KANE: There is no wrong one, madam. Only the guilty and the uncooperative.
2. ENZO: It was her wine, I tell you. She drank first. / LALITA: She did not drink first. You poured. / ENZO: I poured for everyone! / LALITA: You poured for her twice.
3. PRUDENCE: Lalita, dear, you are the only one not drinking. / LALITA: I'm on shift, Madam Achterberg. / DUBOIS-KANE: Then why do you stand at the door? / LALITA: Because the last one to leave a murder is the first one accused.
4. A long beat. / The train bucks. / The cup rattles in its saucer. / Cecile's fingers twitch.
5. PRUDENCE: Colonel. Her hand. / DUBOIS-KANE: By Jove. She's alive.
6. CECILE: Of course I'm alive. Someone get me out of this dress.

### s00061
0. A sheet of rain. / Barbed wire sags in the flare light. / Mud sucks at every boot. / LIEUTENANT ARCHIBALD "ARCHIE" PENROSE (30s, helmet strap loose, flashlight taped) crouches with a map. / SERGEANT BAPTISTE ONWUACHI (40s, thick forearms, helmet dented) checks his rifle. / PRIVATE ELIAS FJELDSTAD-MORENO (19, trembling, bayonet fixed) hugs the trench wall.
1. PENROSE: Sergeant, status? / ONWUACHI: Half the men are asleep. / FJELDSTAD-MORENO: I'm not asleep. / ONWUACHI: Nobody said you were.
2. PENROSE: Elias, keep your head down. / FJELDSTAD-MORENO: Yes sir.
3. ONWUACHI: Fix bayonets! On my word!
4. A whistle shrieks. / Penrose and Onwuachi look up as one.
5. Elias presses his forehead to the mud. / PENROSE: Dear God.
6. ONWUACHI: Now!
7. The whole trench erupts. / Men climb out of the earth.
8. Elias stays frozen until Onwuachi hauls him up by the collar and drags him into the dark.

### s00420
0. A round stone room the size of a chapel, its walls sweating. / A brass foghorn compressor squats in the center like a sleeping animal. / Oil lamps gutter on iron hooks. / Everything smells of kelp and rust. / ORVILLE HASKELL (60s, gaunt, a keeper's wool coat gone green at the seams) kneels before the compressor with a wrench, his breath smoking.
1. MRS. DELPHINE VOSS (50s, widow's black, pearl buttons, a face carved from candle wax) stands in the doorway holding a covered birdcage.
2. HASKELL: You shouldn't have rowed out in this. / DELPHINE: Neither should you have stayed.
3. She sets the cage on a crate. / Something inside shifts and settles.
4. HASKELL: It stopped knocking an hour ago. / DELPHINE: Then it has what it wanted.
5. A shortwave radio on the shelf crackles. / Haskell flinches, then crosses to it. / TAMSIN: Station Nine, this is Coast Guard Relay. Do you read? Over.
6. Haskell thumbs the key. / HASKELL: Relay, Station Nine. Fog is lifting. All quiet here.
7. TAMSIN: Copy, quiet. Your lamp is out, Mr. Haskell. We show no light from the tower.
8. Haskell looks up the spiral stair. / Black.
9. Delphine lifts the cloth from the birdcage. / Empty. / The little door hangs open.
10. DELPHINE: Tell her we'll light it at dawn. / HASKELL: At dawn, Relay. Station Nine out.
11. He clicks the radio off.
12. Far above them, slow and deliberate, something descends one step at a time. / DELPHINE: Gentle now. He is only tired.
13. Haskell sits on the crate, the wrench loose in his hand, and watches the stair with the patience of a man who has run out of fear.

### s00557
0. A decommissioned yellow bus, parked on cinder blocks in an overgrown field. / Inside, the seats are gone. / A mattress on the floor, a milk crate for a nightstand, string lights stapled to the ceiling. / A cassette recorder sits on the crate, a red light blinking.
1. No one is here. / Rain ticks on the roof.
2. The recorder clicks and begins to play. / A girl's voice, young, bright, trying hard to sound older. / ADAEZE: Test, test. Okay. It's July the ninth. I'm fourteen. I'm recording this for me. For the older me. If you're hearing it, you're, like, thirty or something.
3. The bus door creaks open. / A gust of wet air. / ADAEZE NWOSU, 17, a duffel bag slung over one shoulder, a high-school graduation tassel still pinned to her jacket, climbs the steps, pushing wet braids from her face. / She does not see the recorder. / She drops the duffel on the mattress and sits. / ADAEZE: So here are my predictions. Number one. You live somewhere with a window that opens. Number two. You're not scared of anything.
4. Adaeze stops. / Looks at the crate. / Looks at the recorder. / ADAEZE: No way.
5. ADAEZE: Number three. You've called Mom. / The words hang. / Adaeze sits very still. / ADAEZE: I haven't.
6. ADAEZE: Number four. You've forgiven Dad. / She turns the volume down with a finger. / The room goes soft. / ADAEZE: That one's harder.
7. She pulls her knees up. / Opens the duffel. / Takes out a folded letter with a college seal. / She turns it over twice. / Tucks it back in. / ADAEZE: Number five. You still have this tape, which means you didn't throw away anything good.
8. She picks up the recorder. / Holds it like a bird. / ADAEZE: I kept it.
9. She rewinds a few seconds. / Plays it again. / ADAEZE: Number five. You still have this tape...
10. Adaeze presses record. / The little red light glows. / She clears her throat, speaks into it, steady and careful. / ADAEZE: Test, test. It's June the second. I'm seventeen. I'm recording this for the girl I used to be.
11. She stops. / Her voice cracks, then settles. / ADAEZE: Here's what happened. I got in. I'm going. I'm scared. And I called Mom.
12. She laughs, and it breaks, and she leans her forehead against the cold metal wall of the bus. / ADAEZE: She said you were right about number three.
13. Rain eases. / The string lights shiver. / She holds the recorder close to her mouth and whispers the last line, so that only the tape and the bus can hear. / ADAEZE: Number four: I'm working on it.
14. She clicks the recorder off.

### s00132
0. A great hemisphere of dark. / In its middle, a squat projector shaped like a spiked beetle, squatting on a platform ringed with reclining seats. / The cupola above glows faintly with the residue of the day's last show.
1. Soft footfalls. / Someone is breathing carefully, the way people do when they have broken into a place and wish to be forgiven for it.
2. PERSEPHONE "PIP" ADEYEMI-LARKIN, 30s, small, black thermal jacket, a miner's headlamp turned to red. / She kneels at the base of the projector with a canvas tool roll, unwrapping picks the way a surgeon lays out scalpels. / Her face is composed. / Her eyes are not.
3. She whispers into her sleeve. / PIP: I'm at the base. Panel is off. I see the vault door. / She waits. / Nothing. / PIP: Anyone?
4. She sighs. / Presses her palm to the dome's cold metal. / Tilts her head to look up through the beetle's legs into the dark of a ceiling she cannot see. / The planetarium, empty, is still a place that holds its breath.
5. She slides a pick into the lock. / Turns it a quarter. / Listens. / Turns it back. / Wipes sweat from her upper lip with the heel of her glove. / PIP: Come on, old girl.
6. Click. / A heavy tumbler falls somewhere inside. / She holds her breath. / Another. / Another. / The door drifts open an inch.
7. Behind her, a SOUND. / Soft. / The slide of a shoe. / She does not turn. / Her hand drops to the tool roll, closes on a flat steel bar.
8. A VOICE from the dark. / VOICE: That lock was installed in 1958. It sticks on the third tumbler. / Pip pivots, bar raised.
9. A tall figure steps from between two seats. / Silver hair. / Cardigan. / Pocket flashlight in one hand, thermos in the other. / DR. MORDECAI ASHFORD-LUND, 70s, lowers the flashlight so the beam falls on the floor between them. / He is calm. / Infinitely tired.
10. Now she knows him. / She lowers the bar one inch. / PIP: Doctor. / MORDECAI: Miss Adeyemi-Larkin. You came earlier than I thought.
11. PIP: You knew. / MORDECAI: I wrote the alarm schedule. I turned it off at nine. / PIP: Why?
12. He sets the thermos on a seat. / Sits beside it. / Sighs. / MORDECAI: Because forty years of children have lain under that sky, and not one of them has ever asked me what's inside the projector.
13. PIP: What's inside the projector? / MORDECAI: The Hope Diamond, as it happens. / PIP: That's a joke. / MORDECAI: It is not a joke. It is a stone the museum board acquired in 1982 and kept off the books. I have guarded it for forty years in the one place no thief would ever think to look. / PIP: Except me. / MORDECAI: Except you.
14. She looks at the open vault. / At the old man. / At the bar in her hand.
15. PIP: Why would you turn off the alarm, then? / MORDECAI: Because I'd like somebody to see it before I die.
16. He rises. / Takes the flashlight in two fingers and clicks it off. / MORDECAI: Open it, Pip. I will turn on the stars.
17. He crosses to the control panel. / Presses a button.
18. The dome erupts into a billion pinpoints of light. / Pip stands in the center, bar forgotten, the vault door swinging wide. / In the dark inside the beetle, something catches the starlight and throws it back, a single cold blue fire.
19. PIP: Mordecai. / MORDECAI: Yes? / PIP: You should have asked sooner. / He smiles, and for a moment the whole dome is theirs.

### s00211
0. Carpet muffles footfalls. / Lilies in tall vases. / A closed casket on a draped stand. / A single lamp. / DETECTIVE MARISOL OKAFOR-DUMAS, 40s, in a black blazer, stands near the casket, hands behind her back. / She watches the door. / MR. LEOPOLD GRIMSBY, 60s, the funeral director, stands rigid in a dark suit. / A mourner, PHILOMENA TEAGUE-ABARA, 50s, sits in the front row, handkerchief twisted in her fist. / In the back, a young usher named CALEB NASH, 20s, fidgets with his cufflinks.
1. LEOPOLD: The family asked for privacy, Detective. / MARISOL: I won't be long. / PHILOMENA: She was my sister. / MARISOL: I know. / PHILOMENA: Then you know she wasn't well.
2. MARISOL: I know she was poisoned. / Caleb drops a cufflink. / It rolls under a pew. / He doesn't pick it up. / LEOPOLD: That is a serious accusation. / MARISOL: It's a finding. / PHILOMENA: By whom? / MARISOL: The lab. It came back this afternoon.
3. Philomena finally turns. / Her eyes are dry. / Her mouth is steady. / PHILOMENA: And who do you think did it? / MARISOL: Someone who had access to her tea.
4. Leopold shifts his weight. / Caleb takes a step toward the exit. / Marisol raises one hand. / MARISOL: Mr. Nash. Stay. / CALEB: I was just getting air. / MARISOL: The air is fine here.
5. The lamp flickers. / Marisol steps to the casket and lays a hand on the lid. / MARISOL: Mrs. Teague-Abara. Tell me about the tea. / PHILOMENA: It was chamomile. / MARISOL: Who bought it? / PHILOMENA: I did. / MARISOL: Who poured it? / PHILOMENA: I did.
6. A pause. / The lilies sway. / Caleb breathes out. / MARISOL: Thank you. / PHILOMENA: Is that all? / MARISOL: For tonight.
7. She nods to Leopold, then to Caleb. / Philomena rises, smooths her skirt, and walks out. / The door sighs shut behind her.
8. Marisol lifts the lid of the casket just a crack and looks at something inside.

### s00680
0. Rain taps the glazed roof. / Ferns crowd the brick walls, and a wrought-iron table holds a gas lamp, an inkwell, and a half-written letter.
1. PRUDENCE ASHWORTH, 30s, in a gray morning dress with ink on her second finger, sits with a pen poised. / She dips the nib, hesitates, and sets it down again.
2. She picks up the letter and reads it to the empty air. / PRUDENCE: My dear Edmund. The orchids you left have bloomed, the white ones, as you said they would. I did not water them as you instructed. I let the rain do it.
3. She smooths the page, gazes at a fern, and turns back to the page. / PRUDENCE: Mrs. Pell asks whether you will be home for the Harvest supper. I told her I did not know. That is the truth. I know very little these days, except the names of plants.
4. A drop of water falls from a cracked pane onto the paper. / She does not blot it. / It spreads and blurs the word "plants."
5. PRUDENCE: Well. There it is.
6. She lifts the pen, holds it over the page for a long moment, and then, very gently, puts it down in the inkwell and leaves the letter unsigned.

### s00490
0. Brown water stands six inches deep across the plank floor. / The counter has been propped on crates. / A potbelly stove sits cold. / Outside the single window, the main street is a slow brown river with a drowned wagon in the middle of it.
1. TOBIAS FINCH (60s, sleeve garters, spectacles on a string) perches on the counter with his boots tucked under him, working the telegraph key with two fingers. / He hums a hymn without a tune.
2. The door bangs open. / SHERIFF WILHELMINA "BILLIE" STRAND (40s, dripping slicker, silver star pinned crooked) wades in, dragging a man by the chain between his wrists. / The man, KITTREDGE (30s, split lip, hat gone), stumbles in her wake and falls to his knees in the water.
3. BILLIE: Up. / KITTREDGE: It's cold. / BILLIE: So is the grave. Up.
4. He climbs onto a crate by the wall. / She hooks the chain on a ring bolted to the plank. / She sits across from him on an overturned bucket, rifle across her lap.
5. TOBIAS: Sheriff. I wasn't told you were coming. / BILLIE: The bridge went out at noon. We didn't have a choice. / TOBIAS: Is that Kittredge? / KITTREDGE: In the flesh. / BILLIE: Quiet.
6. Tobias looks from one to the other, then back at the key. / He taps out a few dots and dashes. / A fainter tapping answers from the line, and then a voice, thin and metallic, speaks from a brass horn on the wall.
7. OPERATOR: Dry Fork office. Dry Fork. Do you copy, Finch? / TOBIAS: I copy.
8. OPERATOR: Judge Maddox says hold the prisoner. He rides in the morning. / BILLIE: Tell him there's no morning if this river keeps rising. / TOBIAS: Sheriff says the river is up. / OPERATOR: Judge says the river is the Lord's business. Hold the prisoner.
9. Billie stands. / She crosses the flooded floor and takes the horn from its hook. / She speaks into it low and flat.
10. BILLIE: This is Strand. I have a man in irons and a foot of water in the room. If the judge wants him in the morning, he can come get him. / OPERATOR: I'll relay that. / BILLIE: Relay it exactly.
11. She hangs the horn on its hook. / Kittredge laughs, a wet, cracked sound. / She turns to him.
12. KITTREDGE: You'd have made a fine judge. / BILLIE: I'd have made a fine hangman, but they wouldn't give me the job.
13. Tobias stops tapping. / The river laps the stove legs. / A wagon wheel knocks against the building from outside, slow and steady, like someone asking to be let in.
14. KITTREDGE: How long before the water gets to the chain? / BILLIE: Long enough. / KITTREDGE: And if it doesn't?
15. She steps close. / She crouches. / She looks him full in the face and he looks back, and neither blinks. / Between them, the water ripples with the rhythm of the wheel.
16. BILLIE: Then you and I and Tobias have one night to find out what each of us believes in.
17. Tobias takes off his spectacles and polishes them on his sleeve. / His hands shake slightly.
18. TOBIAS: I believe in coffee, Sheriff. / BILLIE: You've got a stove? / TOBIAS: Cold. / BILLIE: You've got matches?
19. He opens a drawer under the counter, rummages, and holds up a damp box. / She takes it, shakes it, listens. / A faint rattle. / She nods once.
20. She wades to the stove, opens its door, pulls a handful of kindling from the crate beside it, and piles it inside. / She strikes a match. / It sputters. / Strikes another. / It catches.
21. For the first time in the room, there is warmth. / Kittredge leans toward it as far as the chain allows. / Tobias slides down off the counter into the water with a gasp, gathers his coat, and carries a pot to the stove.
22. The horn on the wall crackles once more. / OPERATOR: Strand. Message from the judge. / BILLIE: Go on. / OPERATOR: He says: "Understood."
23. Billie almost smiles. / She sits back down on the bucket and lays the rifle across her knees.
24. KITTREDGE: That's all? / BILLIE: That's plenty.
25. Outside, the drowned wagon shifts and begins, slowly, to turn downstream.

### s00064
0. Rows of brass boxes under a vaulted ceiling. / A single green banker's lamp. / The air is cold and smells of old metal. / GIDEON ASHWORTH-DEMBELE (50s, impeccable suit, silver cufflinks) stands before an open drawer, fingers curled around a velvet pouch. / Facing him, in the narrow aisle, LUCRETIA FONTAINE-OKAFOR (40s, black gloves, revolver steady) blocks his exit.
1. Gideon turns. / Lucretia does not lower the gun.
2. GIDEON: You're early. / LUCRETIA: You're late.
3. Gideon smiles and lifts the pouch. / Lucretia's eyes drop to it.
4. GIDEON: ^It's not what you think. / LUCRETIA: ^It's exactly what I think.
5. They speak together, flat, certain. / A drip falls somewhere in the dark.
6. GIDEON: Lucretia. Put it down. / LUCRETIA: You first.
7. He opens his fingers. / The pouch lands on the marble with a soft chink.
8. Lucretia exhales, almost relieved, and kicks it toward the wall.
9. The gun doesn't waver.

### s00722
0. White. / Everything white. / Heat shimmer. / A rotting dock jutting into a lake that dried up a decade ago. / A ferry sits stranded on cracked crust, hull tilted.
1. DEACON CROWE, forties, sits on an upturned bucket by the ramp. / Black coat, grey with salt. / Rifle across his knees. / He doesn't aim it. / He just keeps it.
2. Hoofbeats, slow. / A shape resolves in the glare. / Rider. / Mule.
3. BIRDIE PRUETT, thirties, wide hat, rolled sleeves. / Sunburnt nose. / She dismounts without hurry. / Ties the mule to a piling.
4. He watches. / Doesn't rise. / BIRDIE: Deacon. / DEACON: Birdie.
5. She takes a canteen off the saddle. / Drinks. / Holds it out. / He considers it. / Takes it.
6. BIRDIE: You're a long way from anybody. / DEACON: That's the idea.
7. She sits on the ramp's edge. / Boots dangling over dry crust. / He caps the canteen, passes it back. / Neither says anything for a while.
8. A gull cries. / Where it came from, no one knows. / Both look up. / Both look down again.
9. DEACON: They say the lake'll come back. / BIRDIE: They say a lot.
10. He grins. / Small. / It leaves quick.
11. She pulls a folded paper from her vest. / Turns it over in her fingers. / He sees it. / Eyes narrow. / Rifle shifts a half inch on his knees.
12. They both go still. / Wind hushes the dock timbers.
13. DEACON: That mine? / BIRDIE: Was yours. It's a telegram now. / DEACON: Who from?
14. BIRDIE: Your sister. Says come home. / DEACON: Don't have one. / BIRDIE: Then somebody's lying, Deacon.
15. He stares at the ferry. / Her eyes stay on him. / The heat hums.
16. She unfolds the paper. / Holds it up between them like a card she doesn't want to play. / BIRDIE: Read it with me.
17. He doesn't take it. / He doesn't leave.
18. After a long moment he sets the rifle down on the planks. / Slides over on the bucket. / She shifts toward him, paper between them. / They read.
19. DEACON: Hell. / BIRDIE: Yeah.
20. Salt glitters. / Neither moves.

### s00338
0. Brown water laps at the third rung of the iron ladder. / Light falls in thick shafts through holes in the tin roof. / The walls sweat. / A rotten sweetness hangs in the air, old wheat gone to mold.
1. MAREN VOSS, forties, a farmer in a soaked canvas jacket, sits on a ledge halfway up the wall, one arm hooked through the ladder, watching the water. / OTIENO, thirties, her neighbor, a mechanic with a split lip, stands waist-deep below, feeling along the wall with both hands, working his way around the curve of the silo until he reaches a bricked-up door, presses his ear to it, and strikes it three times with a bolt while she watches without a word.
2. MAREN: Two days. Two days and the river took the whole valley. / OTIENO: Door's solid. Mortar, not wood. / MAREN: Somebody bricked it up. / OTIENO: Somebody who didn't want it opened. Or didn't want something in here to get out.
3. She climbs down a rung. / The water touches her boot. / She pulls the boot back up, then plants it again, then looks up at the roof where a pigeon has settled on a strut.
4. MAREN: Anybody up there? Anybody hear us?
5. Nothing but drip. / Otieno rests his forehead on the bricks. / She wades over to him and presses her palm flat to the wall beside his, and together they listen.
6. OTIENO: It's quiet. / MAREN: It's never quiet in a silo. There's always the grain settling. / OTIENO: No grain left to settle.
7. She takes the bolt from his hand and strikes the wall herself, twice, then once, then twice. / A long moment passes.
8. From beyond the bricks, faint as a heartbeat, someone strikes back.

### s00470
0. A steel box the size of a closet, swaying one degree at a time. / Frost climbs the windows. / Far below, the resort lights blink on a timer nobody can reach.
1. OKSANA VOLK (60s, retired nurse, wool hat pulled to her eyebrows) breaks a chocolate bar into six squares with her thumbnail. / She hands them out in order of age, oldest to youngest.
2. TEODOR (30s, lift mechanic, grease in the creases of his knuckles) turns the dial on a radio. / Static. / He turns it back. / Static.
3. ARJUN (17, rental skis between his knees) checks his phone. / No bars. / He checks it again.
4. MIREILLE (40s, immaculate parka, one glove missing) tucks her bare hand into her armpit and says nothing about it. / BRAM (50s, broad, red-faced) holds his square of chocolate without eating it. / PIP (8) licks hers slowly, making it last.
5. TEODOR: Wind drops by morning. They send the snowcat. / OKSANA: Good.
6. BRAM passes his chocolate to Pip. / Pip looks at Oksana. / Oksana nods once. / Pip takes it.
7. MIREILLE slides her glove off the other hand and gives it to Arjun without looking at him. / He puts it on.
8. The car sways. / Nobody mentions it.

### s00645
0. Muffled singing through the wall. / A desk, a safe, a stained couch.
1. VITO ARCARO, fifties, sits behind the desk. / Rings. / Calm. / DMITRI SOKOLOV, forties, stands by the safe. / Arms crossed. / MERCEDES OYELADE, thirties, the new accountant, sits on the couch. / Laptop open. / "SPOONS" FINNEGAN, twenties, holds the door. / Mostly.
2. VITO: Count it again. / MERCEDES: I counted twice. It's short by nine thousand.
3. DMITRI: He took it. / VITO: Who? / DMITRI: Spoons. / SPOONS: I didn't take nothing. / DMITRI: He took it. He's got the key.
4. VITO: Dmitri, he took it, you say. He says he didn't. Mercedes says it's short. / MERCEDES: I say it's short. I don't say who. / SPOONS: Boss, I swear --
5. VITO: Sit. / Spoons sits. / Dmitri doesn't. / Through the wall, someone hits a very sharp note on "My Way."
6. VITO: Dmitri. You've been here eleven years. Why would he steal from you? / DMITRI: He wouldn't. I would.
7. Silence. / Vito smiles. / Mercedes closes the laptop.

### s00481
0. Siren off. / Confetti on the windshield. / A marching band thumps outside. / The rig is parked in a crowd.
1. PARAMEDIC LUCIANA ORTEGA (30s, ponytail) kneels over a MAN on the gurney. / He is gray, gasping. / PARAMEDIC FITZGERALD "FITZ" BOYLE (50s, mustache) shoves an oxygen mask over his face. / INTERN SUNITA RAO (20s, first week) clutches the monitor. / DRIVER MOSES BELL (40s, hi-vis vest) leans in from the front seat. / A bystander, MRS. DELACROIX-NGUYEN (70s, parade sash), clambers in uninvited. / A SON, JOON-HO KANG (20s, shaking), hovers at the rear doors.
2. LUCIANA: Fitz, line, now. / FITZ: Doing it, Lu.
3. SUNITA: Pressure's ninety over fifty! / MOSES: Do I roll? / MRS. DELACROIX-NGUYEN: He's my neighbor! He sings in the choir!
4. LUCIANA: Ma'am, out. / JOON-HO: Dad! Dad, look at me! / FITZ: Joon-ho, back up, give her room. / SUNITA: Eighty over forty!
5. LUCIANA: Push epi. Sunita, you push it. / SUNITA: Me? / LUCIANA: You.
6. Sunita takes the syringe. / Her hand trembles. / Fitz steadies her wrist. / FITZ: Easy, kid. Slow.
7. She pushes. / Everyone holds still. / The band outside blares a brass chord.
8. The monitor beeps. / Beeps again. / Settles into a rhythm.
9. SUNITA: Ninety-five over sixty. / MOSES: Moses is rolling.
10. Luciana sits back on her heels and exhales. / Mrs. Delacroix-Nguyen crosses herself. / Joon-ho grips the rail.
11. JOON-HO: Is he okay? / LUCIANA: He's coming back, Joon-ho. You did good.
12. FITZ: Sunita did good. / SUNITA: I did good? / LUCIANA: You did good, rookie.
13. Moses pulls out. / The crowd parts. / A tuba player salutes.

### s00752
0. Rain drums on a tin roof. / Water has crept an inch under the door and pools on the flagstones. / A single candle burns on the kitchen table, beside a black rotary phone, its cord stretched taut across the room.
1. DETECTIVE PERPETUA LOWRY, fifties, in a drenched mackintosh, stands with the receiver at her ear. / She doesn't sit. / A cup of cold tea has been on the table so long it has grown a skin.
2. CALLER: You came alone. / PERPETUA: I did. / CALLER: That was brave. / PERPETUA: It was cheaper than a team.
3. A long pause on the line. / Rain. / A drip from the ceiling lands in the cup.
4. CALLER: Do you know where Edmund Hale is, Detective? / PERPETUA: In a drawer at the county morgue. / CALLER: Then you know I didn't do it. / PERPETUA: I know you wanted me to think so.
5. She picks up a pencil and turns it between her fingers. / She studies the pooling water. / She walks, slowly, to the window and looks out at the black orchard, where bare branches thrash.
6. CALLER: Look at the third tree from the gate. / Perpetua doesn't move. / CALLER: Go on.
7. She leans closer to the glass. / Her breath fogs it. / A dark shape hangs from the third tree, swinging in the wind. / She stares. / Her shoulders drop a quarter inch.
8. PERPETUA: That's a coat. / CALLER: It's his coat. / PERPETUA: Where is he?
9. CALLER: Why would I tell you? You haven't asked my name. / PERPETUA: You've been calling me for six nights. I've heard you breathe. I know you've been drinking. / CALLER: Whisky. A decent one. / PERPETUA: Then you can say your name over a decent whisky.
10. A pause. / The receiver crackles. / When the voice returns it is lower, tired.
11. ROSCOE: Roscoe Hale. Edmund's brother.
12. Perpetua closes her eyes. / The pencil snaps in her fist.
13. PERPETUA: You buried him in the orchard. / ROSCOE: I buried what was left.
14. PERPETUA: Why call me? / ROSCOE: Because someone should know where he is. And the police won't dig in the rain.
15. She sets the broken pencil on the table. / She looks at the candle, at the cold tea, at the dark window.
16. PERPETUA: Roscoe. Where are you now? / ROSCOE: Look at the gate.
17. She turns. / In the doorway of the kitchen, silhouetted by lightning, a man's shape is standing with a phone in his hand.
18. Thunder. / The candle gutters out.

### s00263
0. Hay. / Lantern light. / The smell of horse and rain. / A rope ladder to the yard below.
1. A cloaked figure crouches in the straw, back to the wall, pistol held in both hands.
2. The ladder creaks. / LADY GEORGIANA ASHWORTH-OLUWOLE (30s, riding habit torn at the hem, hair coming loose) climbs into the loft and freezes at the sight of the pistol.
3. GEORGIANA: Put that away, please. / STRANGER: Stay where you are. / GEORGIANA: I have been riding for nine hours. I will sit.
4. She sits on a hay bale. / The stranger does not lower the pistol.
5. STRANGER: Who sent you? / GEORGIANA: Nobody. I own the horse in the third stall. I came to check on her. / STRANGER: Liar. / GEORGIANA: I assure you, I am not.
6. The stranger leans out of shadow. / A man, late twenties, rain-soaked, hollow-eyed, in the coat of a courier.
7. STRANGER: The horse in the third stall is mine. / GEORGIANA: It is a grey mare with a white sock? / STRANGER: A brown gelding. / GEORGIANA: Then we are both mistaken.
8. She smiles, tilts her head, and the tension shifts, just slightly. / He lowers the pistol an inch.
9. STRANGER: I am a courier. I carry letters for the Crown. / GEORGIANA: How dull. / STRANGER: You'd be surprised. / GEORGIANA: Show me one. / STRANGER: No.
10. GEORGIANA: Then tell me your name, courier. / He hesitates, searching her face for a lie. / STRANGER: Matthias. / GEORGIANA: Matthias what? / MATTHIAS: Just Matthias. / GEORGIANA: Then call me Georgiana. Just Georgiana.
11. The ladder creaks again. / Both turn. / Boots on the rungs. / Torchlight on the beams.
12. A VOICE: Search the loft!
13. Matthias grabs her arm. / She grabs his wrist. / They freeze, nose to nose, as torchlight crawls along the straw.
14. MATTHIAS: They've come for me. / GEORGIANA: Then they shall have us both. / MATTHIAS: Why? / GEORGIANA: Because I'm tired of being polite.
15. She yanks him down into the hay. / Pulls her cloak over them both. / Torchlight sweeps over the rafters.
16. A soldier's head appears at the top of the ladder, squinting. / SOLDIER: Nothing here. / SOLDIER: Only straw and horse-dung!
17. The head vanishes. / Boots descend. / Silence returns.
18. Matthias and Georgiana lie breathless beneath the cloak. / GEORGIANA: You're heavier than you look. / MATTHIAS: You're braver than you look. / GEORGIANA: We are both liars. / MATTHIAS: Obviously.
19. They begin, helplessly, to laugh. / Then to shake. / Then, finally, to lie very still, listening to the rain on the slates.
20. Matthias slides the pistol into his belt. / MATTHIAS: I owe you. / GEORGIANA: I'll collect.

### s00822
0. Rain ticks on glass panels. / Ferns crowd the corners of a sterile field under the stars.
1. DR. MARGUERITE VOSS, fifties, silver braid tucked under her cap, hums as she sutures. / Across the table NURSE TOBIAS KANE, calm and broad, passes her instruments before she asks. / RESIDENT PRIYA NAIR, twenties, watches the monitor with a small smile.
2. VOSS: Lovely tissue. Textbook. / TOBIAS: Pressure's a rock.
3. DR. HAL BRODERICK, the anesthesiologist, sixties, sips tea at his station and turns a crossword page. / SCRUB TECH JUNE ALVARADO counts sponges aloud, relaxed, almost singing it.
4. JUNE: Eleven, twelve, thirteen. / PRIYA: Fourteen is on the floor. / VOSS: Then it's not in the patient. Wonderful.
5. She ties off the last stitch. / Everyone exhales. / Tobias reaches for the dressing.
6. The greenhouse door hisses open. / DR. ANSELM FAIRWEATHER, hospital chief of surgery, steps in dripping, his mask on crooked. / He does not look at the patient. / He looks at Voss, and at the clipboard in his hand.
7. Broderick's pen stops moving over the crossword. / Tobias lowers the dressing, slowly, back to the tray. / June stops counting.
8. ANSELM: Dr. Voss. A word. Outside.
9. Voss sets down the needle driver, aligns it with the edge of the tray, and does not turn around.

### s00026
0. Cooing. / Feathers. / Three men in a cage of chicken wire. / STASYS BIRKAVS (50s, flat cap, careful) feeds grain from a tin. / DONNIE FUSCO (30s, tracksuit) and FAT LEO ARMBRUSTER (40s, enormous, quiet) sit on upturned buckets.
1. STASYS: Nobody here is angry. Understand? / DONNIE: Nobody's angry. / STASYS: The money is a number on paper. I like birds more than numbers. / LEO: Birds don't lend. / STASYS: No. They return. That is the difference.
2. DONNIE: So we're square? Everyone square? / STASYS: Of course. Leo, the bucket.
3. Leo lifts his bucket. / Underneath, a revolver, and beneath that, an envelope fat with cash.
4. Donnie's smile slides off his face.

### s00475
0. Dust hangs in the work light. / Conveyor belts, silent. / A hopper the size of a church.
1. CASIMIR "CASS" DUDA (40s, night foreman, canvas coat) walks the catwalk with a clipboard. / Counting bins. / Boots ring on steel.
2. Something shifts in the grain below. / CASS: Fenwick? / No answer. / He taps his flashlight against his palm.
3. FENWICK OKORO (20s, new hire, hard hat too big) climbs up from a ladder at the far end. / Wipes his hands on his overalls. / Looks pale.
4. FENWICK: Bin six is warm. / CASS: Grain heats. Settles. / FENWICK: It's breathing, Cass.
5. Cass hears it now. / A slow rattle, like a sleeper in the next room. / Cass swings his beam over the side.
6. Fenwick leans out beside him, and the grain below rises in a smooth dome, as if something is turning over under a blanket, and Cass grabs Fenwick by the collar while the light jumps across the rafters and a third person steps out from behind a support column, silent, in a yellow slicker.
7. The newcomer is MARGUERITE LAU (60s, inspector's badge, white braid). / She raises a hand for quiet. / MARGUERITE: Both of you. Back to the stairs. Walk.
8. CASS: Who are you? / MARGUERITE: The reason this elevator was condemned in 1987.
9. The dome in the grain sinks. / Slowly the rattle stops.
10. FENWICK: Is it gone? / MARGUERITE: It is listening.
11. They walk to the stairs together, step for step, not looking back. / Behind them a single kernel rolls down the slope of the hopper and clicks against the steel.

### s00754
0. Forty headsets under striped parasols on the roof of a failing seaside hotel. / Seagulls wheel overhead. / Customers are reached by phone, by hope, and by the mercy of a hot wind that keeps lifting the scripts from the tables.
1. ROSALEEN FINNEGAN, fifties, supervisor, walks the rows with a megaphone slung from her shoulder and a thermos of tea. / JAMAL TURNER, thirties, team lead, reads a script in a monotone. / BIANCA ESTRADA, twenties, newest hire, listens to a caller with her hand over her mouth. / KOJO ASARE, forties, quality assurance, sits apart with a stopwatch, a clipboard, and a face like a closed door.
2. ROSALEEN: Remember, people! A smile can be heard down the line! / JAMAL: Thank you for holding.
3. Bianca covers the mouthpiece and looks up at Rosaleen, who ignores her. / Kojo clicks the stopwatch and writes a figure on his clipboard.
4. A gust flips three scripts off Jamal's table; he chases them across the tiles, snatching, swearing under his breath, while Rosaleen steps neatly over a paper in her path and keeps walking, thermos aloft.
5. BIANCA: Ms. Finnegan. The customer says his house is on fire. / ROSALEEN: Is it our house? / BIANCA: No. / ROSALEEN: Then follow the script. / BIANCA: But he said-- / ROSALEEN: Page four. "I understand your frustration."
6. Bianca nods. / She uncovers the mouthpiece. / Kojo clicks the stopwatch again, scratches another figure, and glances at Rosaleen with the faintest lift of one eyebrow. / Jamal returns with the scripts clutched to his chest, slaps them on the table, and slumps into his chair.
7. JAMAL: Kojo. How many? / KOJO: Forty-one this hour. / JAMAL: Forty-one what? / KOJO: Complaints we failed to resolve. / JAMAL: That's... normal. / KOJO: It was twelve yesterday.
8. Jamal glances at Rosaleen. / She is cheerfully yelling encouragement through the megaphone at a row of headsets. / A wave breaks on the beach far below. / Bianca pushes her headset off one ear and stares at the horizon.
9. BIANCA: Sir? Sir, I'm sorry. I can hear it. I can hear the fire.
10. She stands. / The chair falls over behind her. / Jamal rises to catch it. / Kojo's stopwatch clicks. / Rosaleen turns, megaphone halfway to her mouth.
11. ROSALEEN: Bianca. Sit. / BIANCA: Sir, give me your address. / ROSALEEN: Bianca, that is not on the script.
12. Bianca tears off the headset and drops it on the table. / She picks up the phone, the real one, the one with a cord. / She dials three digits and holds it to her ear. / Jamal steps beside her. / Kojo, slowly, sets down his clipboard.
13. BIANCA: Yes. There's a fire at forty-two Marlow Road. / ROSALEEN: Bianca!
14. Jamal turns to Rosaleen. / He takes the megaphone off her shoulder with one hand, unhurried, and sets it on the table. / JAMAL: Rosaleen. Shut up.
15. The terrace goes silent. / Forty heads turn. / The wind lifts the scripts and carries them over the parapet, white wings falling into the sea.

### s00311
0. Oak paneling. / A seal on the wall. / A jury box with twelve empty chairs. / It is a pretrial conference, and the room has the hush of a library. / JUDGE ROSALIND ABERNATHY-KOMOLAFE (60s, robe, reading glasses) presides. / At the plaintiff's table: COUNSEL BENEDICT ASANTE-FAIRWEATHER (50s, three-piece suit) and his associate, MS. PRISCILLA DUARTE-LINDQVIST (20s, legal pad, nervous knee). / At the defense table: ATTORNEY MARCUS OYELOWO-STRAND (40s, rolled sleeves) and his co-counsel, A WOMAN IN A NAVY SUIT (30s), who has not been introduced. / The court reporter, DELPHINA MWANGI-HOLCOMB (50s), types without looking up.
1. JUDGE ROSALIND: Counsel, the pretrial order states discovery closed March first. / BENEDICT: It did, Your Honor. / MARCUS: It did not. / JUDGE ROSALIND: Mr. Oyelowo-Strand? / MARCUS: Your Honor, the plaintiff's production of the August emails came forty days late. / BENEDICT: Because your client's servers were corrupted. / MARCUS: Because your client's counsel was unreachable.
2. PRISCILLA: That's not what the file says. / BENEDICT: I know.
3. JUDGE ROSALIND: Counsel, address the court, not each other. / BENEDICT: Yes, Your Honor.
4. The woman in the navy suit leans toward Marcus and passes a folded note. / He reads it. / His jaw tightens.
5. MARCUS: Your Honor, with the court's permission, may I introduce my co-counsel? / JUDGE ROSALIND: Please. / THE WOMAN: Jocasta Reyes-Abiola, Your Honor. Appearing for the defense.
6. JOCASTA: We have a motion.
7. Priscilla stops writing. / Benedict removes his glasses. / Delphina's fingers pause over the keys. / JUDGE ROSALIND: Ms. Reyes-Abiola, proceed.
8. JOCASTA: We move to compel the original server logs from August fourteenth. / BENEDICT: Your Honor, those logs do not exist.
9. JOCASTA: Then Mr. Asante-Fairweather can explain to the court why his firm billed us for reviewing them.
10. Silence. / Priscilla, very softly, to no one: / PRISCILLA: Oh no. / Benedict sets down his pen and does not look at her.
11. JUDGE ROSALIND: Mr. Asante-Fairweather, would you care to respond? / BENEDICT: I would like a recess, Your Honor. / JUDGE ROSALIND: Denied. Respond.

### s00672
0. Forty ticking clocks, none agreeing. / HORACE PLUMLEY, 60s, bow tie, loupe on his eye, bends over a gutted grandfather clock.
1. CHESTER VOSS, 50s, a rival dealer in a camel coat, tiptoes in by the rear door. / WINNIFRED, 60s, Horace's sister, sets down a tea tray.
2. CHESTER: Horace, old friend. I'll give you five hundred for the Lindqvist clock. / HORACE: It's not for sale. / CHESTER: Everything is.
3. He reaches for the clock. / Horace grabs the pendulum. / Chester grabs the other end. / They tug, nose to nose.
4. WINNIFRED: Gentlemen! / Both men freeze. / The pendulum swings between them and clangs a bell.
5. They let go, then both lunge for the clock again and topple into a heap on the floor.
6. HORACE: He started it! / WINNIFRED: He did not. He's sitting on your hat.
7. Chester pulls the hat from under him and offers it with a weak smile. / Horace snatches it.
8. Winnifred pours tea into three cups and hands one down to each of them.
9. WINNIFRED: Now. Five hundred? / HORACE: Make it six.

### s00320
0. The lamp room of a decommissioned lighthouse, glazed on all sides, the great lens long ago swapped for six mismatched tables. / Salt has frosted the windows from outside. / Inside, steam from a copper urn beads on the brass rail. / Every cup in the room is chipped in the same place, as if by one clumsy hand. / ODALYS VANCE, forties, a insurance assessor in a rain-spotted camel coat, sits with her back to the sea. / Her notebook is closed. / Her pen is not. / BRAM OKONKWO, sixties, the shop's owner, a broad man with flour-white forearms and a limp he pretends is a stroll, sets a teapot between them without being asked. / HESTER PELL, eighties, sits at the farthest table in a knitted hat, spooning sugar into a cup that is already full. / She has not looked up since Odalys arrived.
1. ODALYS: The policy was taken out eleven days before the fire. / BRAM: Eleven days is a good number. Lucky, in some places.
2. ODALYS: The fire started in the cellar. The cellar had no wiring. No stove. Nothing that burns by itself. / BRAM: Old buildings do surprise us. / ODALYS: Your lease says the cellar was sealed in 1994. Someone unsealed it. Someone with a key to a door that, on paper, does not exist. / BRAM: I have a great many keys. Lighthouses are sentimental about keys.
3. ODALYS: Mr. Okonkwo, I am not accusing you. / BRAM: That is the most frightening sentence in your language.
4. HESTER: He did not light it. / ODALYS: Mrs. Pell. I did not know you were listening. / HESTER: I have listened to this room for fifty years. It is the only thing I do properly. / BRAM: Hester, please.
5. HESTER: Your father kept the lamp, Bram. Mine kept the logbook. You know what a logbook is for. / BRAM: Not now. / ODALYS: What is it for, Mrs. Pell? / HESTER: For the nights nobody wants remembered. / BRAM: That book burned.
6. HESTER: That book is in my handbag. / ODALYS: Then the fire was not an accident, and it was not for the insurance. / BRAM: Stop. Both of you. Stop talking.
7. HESTER: He wrote a name on page forty. A boy. Seventeen. The wrong rocks, the right storm. Your father let the lamp go dark that night, Bram, to save oil. / BRAM: He was ordered to. / HESTER: He was paid to.
8. ODALYS: And the cellar? / HESTER: The cellar is where the boy was kept until the tide went out.
9. The urn hisses. / Bram's hand closes on the teapot handle and the pot shatters against the brass rail, tea running black across the floorboards toward Hester's shoes.
10. BRAM: Nobody was meant to ever open that door!

### s00880
0. Behind the shoe counter, a cage of guitars and cameras. / Lanes rumble beyond the wall. / VINNIE CASSANO, 50s, sweating through a bowling shirt. / ODETTA BRIGHTWATER, 40s, in a trench coat, a revolver low at her hip. / KEMAL DURAN, 30s, hands up, backed against the glass. / TRISH MALONEY, 20s, behind the counter, phone in hand. / LEVI SZABO, 60s, an old man in the shoe line, frozen with a pair of size nines.
1. ODETTA: Everybody stay calm. / VINNIE: I'm calm. I'm very calm. / KEMAL: It's not what it looks like. / TRISH: Should I call somebody?
2. ODETTA: Put the phone down. / LEVI: I only wanted bowling.
3. Kemal drops a bag. / Cash spills. / Odetta nods at it.
4. ODETTA: You were going to run. / KEMAL: I was going to tell you. / VINNIE: Tell her what?
5. KEMAL: That it's his.
6. All eyes swing to Vinnie. / VINNIE: Don't look at me.
7. Odetta lowers the gun. / A long breath. / A pin falls somewhere down the lane.
8. ODETTA: Strike.

### s00739
0. A narrow shelf of rock, two thousand feet above a sleeping valley. / Snow hisses against a tiny orange tent pitched at an angle that argues with gravity. / A stove burns blue.
1. LUCIEN DUMONT, forties, bearded, ice in his moustache, stirs a pot of soup. / Beside him, ODALYS FERRAND, thirties, wrapped in a sleeping bag, her knees drawn up, sips from a battered tin mug.
2. ODALYS: It's quiet, Lucien. / LUCIEN: Too quiet, Oddy? / ODALYS: No. Just quiet. / LUCIEN: Good. We deserve it.
3. He ladles soup into her mug. / She smiles, small and grateful. / They sit watching the stars come out above the ridge. / Far below, tiny lights flicker in a village.
4. ODALYS: Tomorrow, the summit. / LUCIEN: Tomorrow, the summit. / ODALYS: And a hot bath. / LUCIEN: And a hot bath.
5. She leans her head on his shoulder. / He lets her. / For a moment, nothing in the world is wrong.
6. Then a thin hiss. / Not the stove. / Odalys lifts her head. / Lucien freezes, ladle in the air. / Both listen. / The ice above them creaks.
7. ODALYS: Lucien-- / LUCIEN: Don't move.
8. They both look up. / A crack runs across the overhang, bright and fine as a hair. / LUCIEN: We have to go. / ODALYS: We have to go.
9. They scramble. / He grabs the rope, she grabs the pack. / The tent lurches. / Soup spills, hissing on the stove. / LUCIEN: Clip in! Clip in, Oddy! / ODALYS: I'm clipped, I'm clipped!
10. They tumble out of the tent together and dive into the snow at the ledge's edge as the overhang breaks free and thunders past. / The tent is gone in a white roar.
11. The avalanche dies into silence. / They lie panting, tangled in the rope, their breath mingling in clouds. / ODALYS: Well. That was quiet. / LUCIEN: Very.

### s00661
0. The shelves are half empty: plastic telescopes, glow-in-the-dark star charts, a bin of rubber moons. / A velvet curtain hangs open onto the dark dome beyond. / Moonlight pours through a skylight and lays a pale blue rectangle on the tile.
1. Five teenagers have broken in and are pretending not to be nervous. / ODELIA PEMBERTON-ROSS, seventeen, braids bound in a red scarf, sits on the checkout counter swinging her legs. / ISAIAH TUPOU, eighteen, a rugby player's shoulders and a poet's quiet, stands by the curtain staring into the dark. / WILHELMINA "MINA" CARVALHO, sixteen, tiny, fierce, rifles through a drawer of keychains. / COLM DRISCOLL, seventeen, plugs a portable speaker into an outlet that has no power. / And NERISSA "NERI" HALLORAN, seventeen, the host, sits cross-legged on the floor with a candle.
2. ODELIA: It's so quiet. / ISAIAH: It's a planetarium. / MINA: It's a tomb. / COLM: It's a gift shop.
3. NERI: It's mine for the night. Dad's the caretaker.
4. ODELIA: Neri, you said he was at his sister's. / NERI: He is.
5. COLM: Then who's making that noise?
6. They listen. / A slow metallic hum, from inside the dome. / They look at the curtain.
7. ISAIAH: It's the cooling system. / MINA: There's no power. / ISAIAH: Backup, then. / NERI: Backup. Obviously.
8. Isaiah pulls the curtain wider. / Inside, the dome's seats climb in dark rings, and at its center the old projector gleams, slowly turning on its pedestal, though nothing has turned it on.
9. Beside it, in a work jacket and a flashlight beam, a MAN stands motionless, watching them: GREGORY HALLORAN, fifties, Neri's father, caretaker. / GREGORY: Hello, Nerissa. / NERI: Dad.
10. GREGORY: Your aunt called. She says you told her I was there. / NERI: I didn't --
11. GREGORY: Hello, everybody. I'm Mr. Halloran. Would you like to see the stars properly?
12. Nobody moves. / Odelia slides off the counter. / Colm unplugs the speaker. / Mina shuts the drawer, slowly.
13. The projector hums higher. / The dome goes dark, and then, all at once, it fills with light: ten thousand stars wheeling in a perfect, impossible sky. / ISAIAH: Oh.
14. GREGORY: Sit. Sit. You've got till dawn.

### s00053
0. Cubicles. / Motivational posters. / A broken ficus. / A whiteboard reads: PIVOT TO JOY. / RAYMOND "RAY" FENNIMORE-SALAZAR (40s, vice president of Vibes, a lanyard of lanyards) claps his hands. / DELPHINE OKAFOR-LUND (30s, tired, double-fisted coffee) watches from her desk. / Next to her sits INTERN QUENTIN BOSCH (20s, tie from a high school dance).
1. RAY: Team! Quick sync. / DELPHINE: It's four-fifty-nine. / RAY: Perfect time for a sync! / QUENTIN: He means a meeting. / RAY: A circle-back! A deep dive! A moment of alignment! / DELPHINE: It's a Friday. / RAY: Friday is the new Monday.
2. He draws a giant circle on the whiteboard, then another, then a third. / Delphine and Quentin stare, appalled.
3. RAY: Who can tell me what this means? / QUENTIN: ^Three circles. / DELPHINE: ^Three circles.
4. They say it together. / Ray points at them both, delighted.
5. RAY: Exactly! The Triple Loop!
6. DELPHINE: Ray. / RAY: Yes? / DELPHINE: I'm going home. / RAY: Is that a no on the loop?
7. She gathers her bag. / Quentin, loyal, stays seated.
8. QUENTIN: I like the loop, Ray. / Ray beams.
9. Delphine pauses in the doorway. / DELPHINE: Quentin. Run.

### s00487
0. A converted school bus lined floor to ceiling with paperbacks. / Fairy lights strung along the roof. / A foldout desk by the driver's seat. / Through the windshield: a lake the color of brass.
1. MAEVE O'DONNELL-KAUR (30s, librarian, cardigan with a pen in the pocket) stamps a stack of returns. / Fast. / Tidy.
2. A knock on the door glass. / SULLY: You still open?
3. The door hisses open. / SULLIVAN "SULLY" ADEBAYO (30s, rain-wet jacket, a duffel on one shoulder) steps up. / He holds a paperback against his chest.
4. MAEVE: You're eleven years late. / SULLY: That's fair.
5. He sets the paperback on the desk. / A dog-eared Neruda. / She looks at the cover and then at him.
6. MAEVE: That's mine. / SULLY: It is.
7. Her phone buzzes on the desk. / She lifts it, stares at the screen, declines the call. / It buzzes again. / She silences it. / Sully watches the phone go dark.
8. SULLY: You married. / MAEVE: Seven years in June. / SULLY: Good. That's good. / MAEVE: Don't say good like that. / SULLY: Like what? / MAEVE: Like you're being brave about it.
9. He laughs, then stops. / The lake light turns his face gold.
10. SULLY: I wrote in the margins. Page forty. I never knew how to send it.
11. She opens the book. / Page forty. / A line in his handwriting, faded, underlined twice. / She reads. / Her mouth moves slightly, silent.
12. The phone buzzes a third time. / She lets it.
13. MAEVE: It's overdue. / SULLY: How much do I owe? / MAEVE: Eleven years. Fifty cents a day. / SULLY: That's, what, two thousand dollars? / MAEVE: Two thousand and change. / SULLY: I'll pay in installments.
14. She closes the book against her chest, the same way he held it. / The fairy lights flicker.
15. She picks up the phone. / Holds the power button until the screen goes black. / Then she sits on the edge of the desk, the book in both hands, and does not tell him to leave.

### s00591
0. A domed room, round and hollow. / Rows of tilted velvet seats facing a dead star-projector, a great black insect crouched at the center. / Dust hangs in the beam of a single flashlight. / Somewhere, a pipe drips. / OLIVER FAIRBANKS, 30s, in a corduroy jacket and glasses, plays the flashlight across the ceiling. / Painted constellations peel in long grey tongues. / Behind him, BERTRAND KOWALIK, 40s, heavyset, holds a tripod and an EMF meter, winded from the stairs. / HESTER PRYCE, 50s, tiny, a medium's shawl over a cardigan, stands at the edge of the circle of light, eyes closed. / CLEMENTINE ROY, 20s, a graduate student with a clipboard and a camera, hangs back by the door.
1. OLIVER: Bertrand, set it up on the projector. / BERTRAND: You want it right on the thing? / OLIVER: Where else would a ghost go? / BERTRAND: I don't think ghosts like to be told.
2. HESTER: It's already told you. / CLEMENTINE: Told us what? / HESTER: To be careful. / OLIVER: Of what? / HESTER: Of the stars.
3. Silence. / The pipe drips. / Oliver chuckles, brief and dry, and swings the beam at the dome. / OLIVER: They're painted, Hester. / HESTER: They were painted over other stars.
4. Clementine lifts her camera. / Frames the ceiling. / Snaps. / The flash fills the dome; for an instant every painted star blazes white.
5. CLEMENTINE: There's something in the shot. / OLIVER: Show me.
6. She tilts the screen toward him. / In the tiny image, high in the dome, a figure hangs, arms spread, hair drifting as if underwater.
7. BERTRAND: That's a trick of the flash. / OLIVER: It's a reflection. / CLEMENTINE: Of what? / OLIVER: Of... us.
8. BERTRAND: There are only four of us. / CLEMENTINE: In the photo there are five.
9. Oliver takes the camera. / Counts. / Counts again. / Swallows.
10. OLIVER: Bertrand, check the meter. / BERTRAND: Already pinned to red. It's been pinned since the stairs.
11. HESTER: Turn off the light. / OLIVER: We're not turning off the light. / HESTER: Oliver, turn it off. / BERTRAND: Maybe she's right. / OLIVER: She's not right. She's a charlatan with a shawl. / HESTER: Yes. And she's still right.
12. The flashlight flickers. / Dims. / Brightens.
13. The projector, which has been dead for forty years, begins to hum. / A dull amber glow swells in its eyes.
14. Everyone steps back. / Clementine grabs Hester's sleeve. / Bertrand drops the tripod, which clangs across the floor.
15. BERTRAND: Oliver, I'm done. I'm leaving. / OLIVER: Stay where you are. / BERTRAND: I said I'm leaving.
16. He turns to run. / The door slams shut. / The handle rattles under Clementine's hand. / CLEMENTINE: It's locked! / HESTER: It was never open.
17. The projector HUMS louder. / A beam sweeps the dome: a slow wheel of constellations, bright, strange, wrong. / Stars the wrong colors. / Stars in the wrong places. / A new constellation burns into the center, a shape like four small figures in a circle.
18. A fifth point of light appears, hovering, above and behind them. / OLIVER: Nobody move. / BERTRAND: Which one is he looking at? / OLIVER: Quiet. / BERTRAND: Which one?
19. HESTER: The one who counted.
20. Oliver lowers the camera. / He doesn't breathe. / The fifth star pulses once, slow as a heartbeat, and begins to descend. / CLEMENTINE: Please.
21. The beam goes out. / Darkness, total. / The drip.
22. Then, very close behind them all, the quiet scrape of a velvet seat folding down, as if someone had just sat to watch.

### s00254
0. Low ceiling. / Portholes show black water. / A table bolted to the floor. / Steam from five bowls of reconstituted soup. / Five crew eat in tired silence. / COMMANDER ILSE VARGA-OKONJO (50s, grey crewcut, flight jacket) cuts a biscuit in half. / DR. MBALI NKOSI-ARRINGTON (30s, marine biologist, spectacles on a string) stirs her soup without drinking. / ENGINEER DEWEY HOLLOWAY-SATO (40s, wrench in his belt) scrapes his bowl. / TECH PRIYANKA "PRIYA" DESAI-BRANDT (20s, tablet in one hand, spoon in the other) scrolls through readings. / And a quiet man, face smudged with grease, who has not given his name: A NEWCOMER (30s, orange vest, new boots).
1. ILSE: Anyone want to say anything? / Silence. / A pipe knocks somewhere.
2. MBALI: The trench is warmer than yesterday. / DEWEY: Everything's warmer than yesterday. / PRIYA: Not everything. Pressure's flat. / NEWCOMER: Flat is good. / DEWEY: Flat is boring. / ILSE: I like boring. / PRIYA: I like flat. / MBALI: I like soup.
3. They eat. / A porthole flickers: a pale shape drifts past and is gone.
4. MBALI: Did anyone see that? / PRIYA: What? / DEWEY: Fish. / MBALI: It was larger than fish.
5. ILSE: Dr. Nkosi-Arrington, the instruments say nothing. / MBALI: The instruments aren't looking out the window. / NEWCOMER: It's the lights. They attract plankton. / DEWEY: Plankton doesn't look back. / PRIYA: Did it look back? / MBALI: I don't know.
6. The table goes quiet. / Priya sets down her tablet, face up. / Everyone leans in.
7. ILSE: Priya. Readings. / PRIYA: Nothing. A small thermal bloom, two hundred meters out.
8. DEWEY: Heat means life. / MBALI: Or a vent. / NEWCOMER: Or us.
9. Ilse looks at him. / He looks at her. / After a moment she nods and resumes cutting her biscuit.
10. ILSE: Eat. We have a shift in an hour. / They eat. / Nobody speaks. / The pipe knocks again.
11. Then the newcomer says, softly, to no one: / ARTHUR: Name's Arthur.
12. ILSE: Welcome, Arthur. / DEWEY: Welcome. / PRIYA: Welcome.
13. MBALI: Welcome. Your boots are very new. / ARTHUR: They're the only thing I own.
14. Mbali smiles for the first time. / The others do too. / Outside, the porthole darkens again.

### s00459
0. Cinderblock. / A bench. / A caged lightbulb. / ATTORNEY BERNADETTE FALCONER-ADU (40s, navy suit) leans on the bars. / Her client, MARCELINO TORRIJOS (30s, orange jumpsuit), sits with his head in his hands. / A deputy, LIAM OYELARAN-STACK (20s), stands guard.
1. The intercom crackles. / CLERK: Case 4417, State versus Torrijos, five minutes. / She checks her watch. / He lifts his head. / She nods once.
2. He stands and offers her a sealed envelope. / She hesitates, then takes it.
3. The deputy steps forward. / She shows him the envelope. / He glances inside, nods, and unlocks the door. / She slips it into her briefcase. / He returns to his post.
4. CLERK: Counsel, please approach. / She squeezes Marcelino's shoulder. / He stares at the floor.
5. The door buzzes open. / She walks out. / He watches her go. / The deputy locks the door.
6. The intercom clicks off. / The bulb flickers. / Marcelino sits down, slowly, and waits.

### s00575
0. Fluorescent hum. / Rows of orange plastic chairs. / Forty dryers, all still. / Rain streaks the plate glass.
1. LINH TRAN, 32, wiry, scrubs under a parka, stands over a washer holding a pewter urn against her chest. / Her brother BAO, 28, in a rumpled suit, blocks the aisle.
2. BAO: Give it to me. / LINH: You said you'd drive it to Da Nang. You haven't left the city in nine years.
3. At the folding table, their aunt DI HOA, 60s, in a quilted housecoat, folds the same towel again and again. / BAO: Mom wanted it scattered. Not carried around in a laundromat. / LINH: She wanted it by her sister. / DI HOA: She wanted quiet.
4. They both turn.
5. Bao lunges for the urn. / Linh pivots; the urn swings between them, lid chattering. / They both freeze, breath held.
6. MR. FAIRWEATHER, 70s, the night attendant, cardigan and slippers, shuffles out of the back with a mop and a bucket. / FAIRWEATHER: Folks. Closing in ten. / LINH: We're not done. / FAIRWEATHER: Ten minutes.
7. Bao and Linh drop their hands at the same moment. / The lid slips and lands on the tile with a loud, clear ring. / Nobody moves.
8. Di Hoa stands, steps over, and picks it up. / She sets it on the lid of the washer, puts the urn back on top, and clicks it shut.
9. DI HOA: Both of you. Sit. / They sit. / The rain keeps falling.

## Comparisons
p0: a = s00557 beat 14 | b = s00064 beat 6
p1: a = s00871 beat 0 | b = s00263 beat 11
p2: a = s00320 beat 10 | b = s00793 beat 4
p3: a = s00456 beat 1 | b = s00159 beat 10
p4: a = s00308 beat 9 | b = s00263 beat 17
p5: a = s00591 beat 9 | b = s00490 beat 18
p6: a = s00159 beat 2 | b = s00557 beat 0
p7: a = s00053 beat 5 | b = s00487 beat 12
p8: a = s00481 beat 7 | b = s00490 beat 5
p9: a = s00317 beat 9 | b = s00871 beat 3
p10: a = s00211 beat 6 | b = s00420 beat 6
p11: a = s00379 beat 4 | b = s00211 beat 4
p12: a = s00490 beat 0 | b = s00583 beat 1
p13: a = s00317 beat 1 | b = s00722 beat 3
p14: a = s00490 beat 18 | b = s00752 beat 6
p15: a = s00792 beat 9 | b = s00470 beat 1
p16: a = s00263 beat 3 | b = s00661 beat 6
p17: a = s00132 beat 12 | b = s00721 beat 3
p18: a = s00132 beat 11 | b = s00320 beat 4
p19: a = s00490 beat 8 | b = s00456 beat 0
p20: a = s00591 beat 7 | b = s00064 beat 3
p21: a = s00369 beat 7 | b = s00490 beat 20
p22: a = s00254 beat 10 | b = s00722 beat 5
p23: a = s00661 beat 8 | b = s00583 beat 2
p24: a = s00822 beat 8 | b = s00475 beat 3
p25: a = s00490 beat 17 | b = s00475 beat 11
p26: a = s00311 beat 4 | b = s00793 beat 11
p27: a = s00557 beat 11 | b = s00064 beat 8
p28: a = s00211 beat 3 | b = s00099 beat 7
p29: a = s00792 beat 4 | b = s00980 beat 0
p30: a = s00672 beat 3 | b = s00490 beat 9
p31: a = s00053 beat 4 | b = s00487 beat 10
p32: a = s00320 beat 2 | b = s00470 beat 7
p33: a = s00366 beat 0 | b = s00583 beat 3
p34: a = s00159 beat 10 | b = s00822 beat 7
p35: a = s00061 beat 3 | b = s00754 beat 9
p36: a = s00490 beat 4 | b = s00721 beat 9
p37: a = s00481 beat 3 | b = s00754 beat 4
p38: a = s00575 beat 4 | b = s00722 beat 14
p39: a = s00591 beat 18 | b = s00583 beat 6
p40: a = s00722 beat 17 | b = s00456 beat 12
p41: a = s00159 beat 5 | b = s00557 beat 7
p42: a = s00490 beat 6 | b = s00459 beat 5
p43: a = s00132 beat 1 | b = s00863 beat 9
p44: a = s00338 beat 4 | b = s00721 beat 2
p45: a = s00490 beat 19 | b = s00672 beat 0
p46: a = s00379 beat 4 | b = s00099 beat 6
p47: a = s00481 beat 4 | b = s00792 beat 5
p48: a = s00490 beat 14 | b = s00722 beat 20
p49: a = s00308 beat 7 | b = s00722 beat 16
p50: a = s00490 beat 17 | b = s00722 beat 15
p51: a = s00793 beat 2 | b = s00822 beat 5
p52: a = s00792 beat 0 | b = s00490 beat 22
p53: a = s00533 beat 7 | b = s00754 beat 12
p54: a = s00490 beat 21 | b = s00386 beat 0
p55: a = s00132 beat 14 | b = s00752 beat 15
p56: a = s00793 beat 8 | b = s00338 beat 4
p57: a = s00254 beat 10 | b = s00369 beat 9
p58: a = s00481 beat 11 | b = s00099 beat 8
p59: a = s00311 beat 7 | b = s00317 beat 6