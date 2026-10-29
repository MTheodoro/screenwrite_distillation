You are an annotator labeling screenplay scenes for a dataset.

Rate dramatic tension. Below are scenes split into numbered beats.

1. For every scene, give one score 0-100 per beat (same order).
2. Then answer each cross-scene comparison: which beat is MORE tense, "a", "b" or "tie".

Tension = what a reader feels: stakes, conflict, threat, urgency, suspense. Loud or violent is not automatically
tense; a quiet threat can be very tense. Absolute anchors: 0-15 calm/mundane, 15-35 mild friction or unease,
35-60 clear conflict or suspense, 60-80 high stakes, open confrontation or danger, 80-100 peak life-or-death /
climactic moment.

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/tension_T/group_016.json with the Write tool:
{"scores": {"<scene_id>": [..], ...}, "pairs": {"<pair id>": "a"|"b"|"tie", ...}}
Valid JSON only. Reply only with "done".

## Scenes

### s00702
0. A hall of cracked marble and tattered banners. / Dust in the shafts of light.
1. KING OSRIC, 60s, slumped on a tarnished throne, tugs his gray beard. / LADY VANETH, 40s, in a mourning gown, stands rigid at the foot of the dais. / PIBBLE, the court fool, 30s, juggles three wooden spoons on the steps.
2. KING OSRIC: Vaneth. Another harvest report? / LADY VANETH: The fields lie fallow, Majesty.
3. PIBBLE: The fields lie fallow, Majesty. / ^LADY VANETH: The fields lie fallow, Majesty.
4. Both stop. / Pibble catches a spoon and bows. / Lady Vaneth does not.
5. KING OSRIC: You rehearse together, I see. / PIBBLE: We have a duet, sire. / LADY VANETH: We have no such thing.
6. KING OSRIC: Pibble, play me a song.
7. Pibble tucks the spoons under his arm and hums. / The King nods slowly.

### s00664
0. A flat tar roof ringed by rows of orange doors. / A city glows beyond the chain-link. / Two lawn chairs, a cooler, a portable speaker playing something low. / A tangle of fairy lights strung across a vent pipe, half of them dead.
1. CASSIDY ODEKUNLE, seventeen, slouches in one chair in a thrift-store prom dress and sneakers, her knees drawn up. / Beside her, ELIJAH "ELI" BRANDVOLD, seventeen, sits in a rented tux with the bow tie loose, a paper cup of lukewarm soda balanced on his knee.
2. CASSIDY: You didn't have to come up here. / ELI: You texted me the address. / CASSIDY: As a joke. / ELI: It didn't read like a joke. / CASSIDY: Everything reads like a joke when you're me.
3. He sets the cup down on the tar. / He leans back and looks at the sky, which has only three stars in it.
4. ELI: You missed your own prom. / CASSIDY: I didn't miss it. I left it. / ELI: Why?
5. CASSIDY: Because Kayleigh Tran said my dress looked like a curtain. / ELI: It does look like a curtain. / CASSIDY: I know it looks like a curtain! It's my grandmother's curtain!
6. She laughs, startled, and then her face crumples. / She pulls the dress's hem over her knees and presses her forehead to it.
7. ELI: Hey. / CASSIDY: Don't. / ELI: Cass. / CASSIDY: I said don't.
8. He sits very still. / The speaker's song ends. / In the quiet, a train passes below, a long iron murmur. / She wipes her face with her wrist.
9. CASSIDY: My mom doesn't know. She thinks I'm at the after-party. / ELI: Is there an after-party? / CASSIDY: There's always an after-party.
10. ELI: I'll take you. / CASSIDY: I don't want to go. / ELI: Then I'll stay. / CASSIDY: You hate roofs. / ELI: I hate heights. Roofs are just heights with furniture.
11. She laughs, a small wet laugh. / He holds out the cup of soda. / She drinks, makes a face, and gives it back. / CASSIDY: Warm. / ELI: Yeah.
12. They watch the city. / Somewhere far off, a siren starts and fades.
13. CASSIDY: Eli? / ELI: Yeah? / CASSIDY: Do you ever think everyone is faking? / ELI: All the time. / CASSIDY: Even Kayleigh? / ELI: Especially Kayleigh.
14. She smiles. / She slides her hand across the armrest and he takes it without looking, and they sit like that, two people on a roof among a hundred locked doors.
15. Then Eli's phone buzzes on the tar. / They both glance at it. / The screen lights: MOM — 14 MISSED CALLS. / ELI: Oh no. / CASSIDY: Oh no.
16. He grabs it. / She snatches it from him and holds it up out of reach, and he lunges, and the chairs scrape, and the cooler topples, and ice spills across the roof in a bright white rush. / ELI: Give it!
17. CASSIDY: Not until you say it! / ELI: Say what? / CASSIDY: That you're glad you came.
18. He stops. / Ice crunches under his shoes. / He looks at her, tux askew, face flushed, hair full of fairy-light glare. / ELI: I'm glad I came. / CASSIDY: Good.
19. She hands him the phone. / He doesn't look at it. / He puts it face-down on the tar.
20. ELI: You owe me a dance. / CASSIDY: There's no music. / ELI: There's the speaker.
21. She reaches over and taps it. / A scratchy waltz starts up. / She stands, awkward in her sneakers, and offers him her hand.
22. CASSIDY: Don't step on my curtain. / ELI: I'll try.

### s00559
0. Beige chairs, a fish tank, a wall of laminated posters of cheerful molars. / The lights are dim. / A banner above the receptionist's desk reads, in glitter: SURPRISE, GRANDMA!
1. Six conspirators crouch behind furniture. / GLENDA PRZYBYLSKI, 40s, in a party hat, ducks behind the water cooler holding a cake; her husband MARVIN, 50s, behind the ficus with a stack of paper cups, while their teenage daughter SKYLER, 16, hides under the receptionist's desk, filming on her phone; LAZLO KERESZTES, 30s, the nervous nephew, slips behind the coat stand with a party horn, and THADDEUS FEINBERG, 60s, the dentist, in scrubs and a pointy hat, sits on the reception counter, stifling a laugh, while everyone whispers, shushes, and knocks into everyone else.
2. The front door chimes. / Everyone freezes. / A chair creaks. / Lazlo's horn squeaks. / Marvin drops a paper cup. / Glenda hisses at both of them. / Skyler's phone beeps. / The door opens. / Nobody enters.
3. THADDEUS: Where is she? / GLENDA: She's coming. / MARVIN: My knee is stuck. / LAZLO: Mine too.
4. The door chimes again. / Nobody enters. / Wind moves a magazine. / GLENDA: Well, that's the worst possible timing. / LAZLO: It's okay. She'll be here. She always is.
5. The lights flip on. / Everyone stands. / In the doorway, in a flowered coat, is GRANDMA ROSEMARY, 80s, who looks at the banner, the cake, the party hats, and the open mouth of the dentist, and says, quite calmly: / GRANDMA ROSEMARY: I thought the appointment was tomorrow.

### s00155
0. Salt air. / A row of bright tandems chained to a rack. / Five people in the sun. / WILHELMINA "BILLIE" ODUYA, 28, in a sundress, grips a handlebar. / BEHIND her, THEO RASMUSSEN-KHAN, 30, fumbles with a helmet. / Next to them, GRANDMA CORAZON ESPINOSA, 80, in a straw hat, adjusts her bifocals. / Her grandson, JUAN-PABLO, 14, scowls at his phone. / And the KIOSK OWNER, FRIDA LINDGREN, 50s, leans on the counter with a stopwatch.
1. She clicks it. / FRIDA: Start.
2. Theo mounts. / Billie pushes off. / The tandem wobbles. / He steers right. / She leans left. / They crash into the rack.
3. He laughs. / She stares daggers. / He helps her up. / She brushes off his hands.
4. Corazon watches. / Nods approval. / Juan-Pablo looks up from his phone, shrugs, and pockets it.
5. JUAN-PABLO: Abuela, don't. / CORAZON: Watch me.
6. She climbs on. / Pats the seat behind her. / He sighs, climbs on. / They pedal off, smooth as silk, past the kiosk, past the pier, into the sun.
7. Frida clicks the stopwatch. / Billie and Theo watch them go. / Their hands find each other.

### s00356
0. Cubicles. / Beige. / A ficus dying with dignity. / PRIYANKA, thirties, presses a stapler into the carpet. / WENDELL, fifties, stares at an empty slide. / LUCIA, twenties, hides behind a monitor. / HAROLD, sixties, sleeps upright.
1. A TALL MAN, forties, stands unannounced at the end of the aisle, a clipboard under his arm.
2. PRIYANKA: Who is that? / WENDELL: Consultant.
3. The Tall Man walks to Wendell's desk. / He places his clipboard down. / Wendell does not look up. / Lucia slides lower.
4. TALL MAN: Efficiency review. / WENDELL: Of course.
5. PHONE: Wendell, this is the CEO. Is the review underway? / WENDELL: It's underway, sir.
6. The Tall Man takes out a pen. / Harold snores. / Priyanka drops the stapler and it echoes.
7. Lucia peeks over the edge of her monitor and meets the Tall Man's eyes.
8. MR. GRAVES: You. Name? / LUCIA: Lucia. / MR. GRAVES: Redundant.
9. Lucia stands. / She picks up her coat. / Priyanka rises, Wendell rises, Harold wakes with a start, and all four stare as Mr. Graves strikes off a line on his clipboard.

### s00927
0. Fluorescent lights. / A radiator knocking. / Four chairs and a table.
1. A MAN in a rumpled tan jacket sits alone at the defendant's table, studying his own thumbs.
2. JUDGE PRISCILLA OYELOWO-HART (60s) enters, sits, and bangs the gavel once. / JUDGE: We're on the record. Counsel for the plaintiff?
3. FELIPE ARRIAGA (30s, bright tie) rises. / FELIPE: Felipe Arriaga, Your Honor. / JUDGE: And the defendant? / MAN: Just me, ma'am. / JUDGE: Name for the record. / MAN: Dutch Halloran.
4. JUDGE: Mr. Halloran, you're unrepresented? / DUTCH: Yes, ma'am. I figured the truth doesn't need a lawyer. / JUDGE: It usually needs one.
5. At the back of the room, CLERK BARNABY SKOLNICK (50s) stifles a laugh. / Felipe sits and Dutch rises at the same moment.
6. FELIPE: Your Honor, my client withdraws the claim. / DUTCH: Your Honor, I'd like to pay it.
7. The Judge looks from one to the other. / She sighs and lowers the gavel. / JUDGE: Nobody leaves until I understand why.

### s00656
0. 1891. / A one-room cottage with a low beam ceiling and a stove gone cold. / A ladder-pole leans in the corner. / Shelves of oil cans, wicks, brass snuffers. / Gray fog presses against the windowpane.
1. ARCHIBALD "ARCHIE" PENNYWORTH, seventies, the last lamplighter in the parish, sits in his chair by the dead stove in a coat too large for him. / His hands, big-knuckled, rest on his knees like tools put down.
2. His granddaughter, CORDELIA PENNYWORTH, nineteen, in a plain gray dress and a new hat, stands in the doorway with a leather satchel, the sound of the city already in her shoulders.
3. CORDELIA: The electric men start Monday. / ARCHIE: So I hear. / CORDELIA: They say the whole of Harrow Lane will be lit by noon. / ARCHIE: By noon.
4. He picks up a brass snuffer from the shelf and turns it in his fingers. / She crosses to him, kneels, and puts her hand over his.
5. CORDELIA: You can come to the city. / ARCHIE: What would I do in a city? / CORDELIA: Sit. Watch the lamps come on. / ARCHIE: Without me to light them?
6. She doesn't answer. / He sets the snuffer back on its hook and, with the slow care of a man doing something for the last time, rises and takes the long pole from the corner.
7. ARCHIE: Come along, then. I've one street left.

### s00410
0. A dry well, a rope, a bucket. / Sage and rock. / The sun is a red coin.
1. AMOS, 60s, a grizzled prospector, hauls the bucket up hand over hand. / Empty. / He tosses it aside. / Beside him, HESTER, 30s, in a long gray coat, holds a rifle loosely.
2. A STRANGER, 40s, stands thirty yards off on a ridge, a black silhouette against the sky.
3. HESTER: He's been there an hour. / AMOS: He's patient. / HESTER: Or dumb. / AMOS: Maybe both.
4. The Stranger lifts a hand. / He starts down the slope, slow, each step careful.
5. HESTER: Want me to? / AMOS: Not yet.
6. He reaches the well. / Close up, he's older than he seemed, with a gray beard and a limp. / He tips his hat.
7. STRANGER: Afternoon. / AMOS: Evening. / STRANGER: Is there water? / AMOS: Not for a week.
8. The Stranger nods. / He sits on a rock, puts down his pack.
9. STRANGER: I'm Calloway. Samuel Calloway. / HESTER: Great. / CALLOWAY: You know me. / HESTER: We know the name.
10. Amos stiffens. / His hand goes to his belt. / Hester's thumb finds the hammer.
11. CALLOWAY: I'm not here for trouble. / AMOS: Then why?
12. CALLOWAY: Because the man who shot your son is dead.
13. A beat. / The wind drops. / Hester's rifle sags. / Amos stares at the Stranger for a long moment, his eyes wet in the red light.
14. AMOS: Who did it? / CALLOWAY: I did.
15. Silence. / Amos turns, picks up the bucket, and walks back to the well. / He hangs it on its hook. / His hand lingers on the rope.
16. HESTER: Amos. / AMOS: Give him your canteen.
17. Hester doesn't move. / Then, slowly, she unslings it and tosses it to the man on the rock.

### s00579
0. Wind. / Paris spreads below like a map. / Iron beams ring with hammers.
1. She crouches on a plank, a bolt of grey wool across her knees, stitching a harness. / ODETTE LACROIX, 22, seamstress, calloused fingertips, a scar on her chin.
2. Twenty feet off, he walks a girder like a tightrope, a rivet gun on his hip. / JULES PERRIN, 25, rivetter, cap low, easy balance.
3. She doesn't look up. / He grins anyway. / JULES: That one for me? / ODETTE: For whoever falls first.
4. He crosses the beam. / Drops beside her. / Close. / JULES: Then it's for you.
5. She bites the thread. / Hands him the harness. / ODETTE: Put it on.
6. He does. / She tightens the buckle with a brisk tug. / He winces and smiles. / She doesn't smile.
7. Her eyes slide to the beam behind him.
8. A man's head rises from the ladder shaft. / Bowler hat. / Black coat. / Soft hands. / INSPECTOR MAXIME BOUCHARD, 50, with a notebook, climbing like a man who hates heights. / BOUCHARD: Monsieur Perrin?
9. Jules turns. / Goes still. / Odette's needle stops in the wool.
10. BOUCHARD: The foreman says you were here Tuesday night. / JULES: I was home. / BOUCHARD: The foreman says otherwise.
11. Silence. / The wind lifts his notebook pages. / He grips them.
12. ODETTE: He was with me.
13. Bouchard looks at her. / A long moment. / Then he closes the notebook. / BOUCHARD: Of course he was.
14. He turns and descends the ladder. / They watch the bowler vanish. / She exhales. / He lets his shoulders drop.
15. JULES: You didn't have to. / ODETTE: Yes.
16. She picks the needle back up.

### s00885
0. Summer, 1974. / Heat shimmers over a hill of stripped sedans. / Inside the long skeleton of a yellow bus, someone has laid down carpet scraps, strung Christmas lights, and nailed a Beatles poster to the ceiling. / The seats have been pulled out and replaced with milk crates. / TEDDY LOWELL, 15, a girl with scabbed knees and a pencil behind her ear, sprawls on a crate with a notebook in her lap. / PEDRO SALAZAR, 16, lean and quiet, tinkers with a transistor radio. / RUTHIE KWAN, 14, perched on the driver's seat, spins the big steering wheel with one finger. / DANNY FITZGERALD, 17, the oldest, leans in the doorway, thumbs hooked in his belt loops, a pack of cigarettes just visible in his sock.
1. The radio crackles and settles on a pop song. / They all pause to listen. / TEDDY: Okay. Official meeting of the Wheel Club. Everybody sit. / RUTHIE: I'm already sitting. / TEDDY: Everybody who isn't Ruthie, sit. / DANNY: I'll stand. / TEDDY: You always stand. / DANNY: That's why I'm taller. / PEDRO: It's because he can't fit on the crates. / DANNY: Say that again. / PEDRO: You can't fit on the crates. / Danny laughs and ruffles his hair. / Pedro ducks, grinning.
2. TEDDY: Item one. The summer plan. / RUTHIE: We have a plan? / TEDDY: We have a list. / RUTHIE: Read it. / TEDDY: One. Paint the bus. Two. Get the radio working. Three. Finish the map of the junkyard so nobody gets lost. Four. Never tell anyone about the bus. / PEDRO: Five. Eat. / TEDDY: Five. Eat. / DANNY: Six. Don't get arrested. / TEDDY: That one's implied.
3. RUTHIE: What about the thing in the back? / The room goes quiet. / The radio hisses between stations. / Danny glances at the door. / Pedro puts down his screwdriver. / TEDDY: Which thing? / RUTHIE: You know which thing. / TEDDY: We said we weren't going to talk about it. / RUTHIE: You said. I didn't say. / PEDRO: Ruthie. / RUTHIE: It's been there since June. Someone has to say it. / DANNY: It's a trunk. It's an old trunk. / RUTHIE: It has a lock. / DANNY: Lots of trunks have locks. / RUTHIE: It has a lock and it's NEW. / PEDRO: Who put a new lock on an old trunk?
4. Nobody answers. / Teddy closes her notebook with a small, careful click. / She looks around the bus as if seeing it for the first time, her eyes catching on each face before settling on Danny. / TEDDY: Danny. / DANNY: What? / TEDDY: You've been here more than anyone. / DANNY: It's my brother's yard. I'm supposed to be here. / TEDDY: Is the trunk yours? / DANNY: No. / TEDDY: Is it your brother's? / DANNY: Teddy. / TEDDY: Is it? / DANNY: I don't know what's in it. / TEDDY: That isn't what I asked.
5. He crosses the bus in three long strides and drops to a crouch beside the trunk, his back to them. / His hand rests on the lock. / Pedro stands. / Ruthie slides down from the driver's seat. / For a moment nobody breathes. / DANNY: He asked me to keep it safe. That's all he said. Keep it safe, don't open it, don't tell anyone. / TEDDY: And you told us. / DANNY: I didn't tell you. You found out. / TEDDY: Because you left the key where Ruthie could find it. / DANNY: I never did. / RUTHIE: It was under the radio.
6. He turns, finally. / His face, that easy older-brother face, has gone grey as the road. / He looks at Ruthie, at the key in her palm, at the three of them standing close together in the strung-up lights. / DANNY: Give me the key. / RUTHIE: No. / DANNY: Ruthie-- / RUTHIE: We're the Wheel Club. We decide together. / PEDRO: She's right. / TEDDY: Open it, Ruthie.
7. Ruthie steps forward, fits the key, turns it. / The lock pops.
8. The lid swings up on rusted hinges and a hush falls over the bus as the afternoon light finds what is inside: not money, not guns, not anything they imagined, but row upon row of school photographs, hundreds of them, each of a child they know from town, each with a name written on the back in careful pencil, and on top, a single Polaroid of the four of them, taken that very morning, through the bus window, from outside.

### s00177
0. Dome overhead. / Cracked seats. / Projector dust under a single work light. / DETECTIVE IMOGEN SALAZAR, 40s, crouches by a chalk outline. / Her partner, DET. REYNALD KOWALSKI, 50s, eats sunflower seeds. / CURATOR ASTRID LUNDGREN, 60s, stands arms folded. / SECURITY GUARD BASHIR HALLOWAY, 30s, lingers by the door. / A voice crackles on Imogen's radio.
1. IMOGEN: Nobody touched the projector? / ASTRID: Nobody has touched it in years.
2. REYNALD: Then who turned it on? / BASHIR: Wasn't me. I was at the front desk. / ASTRID: He was at the desk. I saw him.
3. REYNALD: You saw him at the desk at ten. Victim died at ten-thirty. / BASHIR: I was at the desk until eleven.
4. IMOGEN: Quiet, all of you. / The room goes still. / Imogen presses the radio.
5. CORONER: Imogen, the stars on his jacket. They're real stars. Pins. Constellation of Orion. / IMOGEN: Orion?
6. ASTRID: Orion is the show we never finished.
7. The projector hums to life. / Above them, the dome blooms with stars. / Orion rises. / Bashir takes a step back.
8. REYNALD: Who's in the booth? / ASTRID: No one. It's automatic. / BASHIR: It's not automatic. Not anymore.
9. IMOGEN: Bashir. How would you know that?
10. Bashir does not answer. / The stars drift. / Reynald draws his weapon. / Astrid draws a breath.
11. ASTRID: It was supposed to be a tribute. / IMOGEN: To who? / ASTRID: To the man in the outline. Yours truly built that show. I built it for him.
12. Reynald lowers the gun a few inches, then raises it again, pointing at Astrid. / REYNALD: Ma'am, step away from the console.

### s00024
0. A blue throat of ice drops away into dark. / Forty feet down, on a shelf barely wider than a door, a man and a woman cling together in the frozen quiet. / His left leg is bent wrong. / She has one crampon and a rope that ends in frayed threads.
1. TOBIAS ANSELM (40s, beard crusted white) tries to sit upright. / He gasps and slides back against the wall. / MARGUERITE DELACROIX-ODUYA (30s, climbing helmet cracked at the brow) crouches beside him, working a splint from a tent pole and webbing. / She does not look at his face. / She looks at the knot.
2. TOBIAS: Leave it. Go up. / MARGUERITE: Shut up and hold the pole.
3. He holds it. / His hands shake. / She pulls the strap tight and he screams, a sound that echoes down and never comes back.
4. A hiss from her chest pocket. / She freezes, then fumbles out a handheld radio. / RANGER: Team Four, Base. We have you on the thermal. Hold position. Helicopter wheels up in forty.
5. Relief breaks across her face. / She laughs, a cracked sound, and kisses the radio. / MARGUERITE: Copy, Base. Two alive. One leg. Please hurry. / RANGER: Copy two alive. Wind is picking up on the ridge. Stay low.
6. She turns to him, grinning for the first time. / MARGUERITE: Forty minutes. You hear that? / TOBIAS: I heard.
7. He says it too calmly. / She notices his lips, which are turning grey. / She tears off her glove and presses two fingers to his neck. / MARGUERITE: No. No no no. Stay with me, you stubborn old goat.
8. He opens his eyes. / Faintly, he smiles.
9. Above them, the ice groans. / A fine rain of snow sifts down. / She pulls him against her chest and tucks her jacket around them both.
10. RANGER: Team Four, Base. Weather window closing. Say again your status. / She stares at the radio, then at the dark beyond the ledge. / She keys it. / MARGUERITE: Base, we are not going anywhere. Tell them to hurry.
11. She sets the radio on his chest, where he can hear it. / The ice groans again, and this time something far below answers.

### s00318
0. Foam mats. / Mobile of felt moons. / Six figures in miniature chairs at a very small table, holding very small teacups. / GRANDMA ODALIE KOWALSKI-ADEYEMI (70s, church hat). / UNCLE BARTHOLOMEW "BERTIE" NNAMDI-LINDGREN (50s, delivery uniform). / AUNT RUFINA PRYCE-OYELARAN (40s, scrubs). / COUSIN TAVIAN BRAITHWAITE-OSEI (30s, suit). / THE BABY SITTER, MS. JOSEPHINE "JOJO" ABARA-FENWICK (20s, lanyard). / And the child, LITTLE ZURI ADEKUNLE-HOLM (4, tutu over snow pants).
1. ZURI: More tea, please. / ODALIE: Of course, dear.
2. She pours from an empty pot. / Bertie sips from a cup of nothing. / Rufina checks her watch. / Tavian's phone buzzes; he silences it. / Jojo mouths along with every word.
3. ZURI: She spilled. / BERTIE: She did? / RUFINA: She did not. / TAVIAN: She did a little. / ODALIE: He's lying. She spilled a lot.
4. ZURI: He did it. / JOJO: Who's he? / ZURI: Him.
5. Everybody points at somebody else.
6. ZURI: Nap time! / They lower their heads onto the table, one by one, a perfect silent tableau. / Zuri peeks. / Smiles. / Lowers her head too.

### s00299
0. Fluorescent glare. / Beige carpet. / A flag leaning slightly. / A bailiff's chair, empty. / JUDGE PERPETUA OSEI-LANGSTROM (60s, robe over a cardigan, reading glasses on a chain) peers down at a file. / At the defendant's table, BARTHOLOMEW "BART" KENYATTA-VOSS (40s, wrinkled blazer, a cardboard tube under his arm) stands very straight. / Across the aisle, PROSECUTOR ILSE NAKAGAWA-OYELOWO (30s, immaculate, a binder as thick as a phone book) leafs through exhibits.
1. BART: Your Honor, I'd like to submit the exhibit. / JUDGE PERPETUA: What exhibit, Mr. Kenyatta-Voss?
2. Bart pulls the cardboard tube open. / Out slides a rolled-up poster, which unfurls across the table in a slow, majestic curl: a hand-drawn map of an intersection, annotated in four colors of marker, with arrows, sunbeams, and a smiling cartoon sedan. / Ilse gapes. / Judge Perpetua removes her glasses, polishes them, puts them back on.
3. Bart steps forward to flatten a corner, knocking Ilse's binder to the floor. / She kneels to gather it, he kneels to help, their heads nearly collide, and the poster slides off the table and onto Judge Perpetua's bench, where it covers her gavel.
4. ILSE: Objection. / JUDGE PERPETUA: On what grounds? / ILSE: The sedan has a face. / JUDGE PERPETUA: Overruled. Mr. Kenyatta-Voss, proceed.
5. BART: Your Honor, as the map shows, the stop sign was obscured by a sycamore. / ILSE: It was obscured by a sycamore he planted. / BART: Prove it.
6. ILSE: I have the permit. / She holds up a stapled paper. / Bart looks at it. / Looks at the poster. / Looks at the cartoon sedan, which smiles back.
7. BART: I'll pay the fine. / JUDGE PERPETUA: Forty dollars, payable at the window.
8. She raps the gavel through the poster. / It makes a small soft tearing sound.

### s00216
0. Back seat. / The movie flickers through the windshield. / Popcorn spills. / NADINE OKORO-LANCASTER, 16, sits in the back with her little brother, RUFUS, 9, who holds a box of candy. / In the front, their mother, GRETCHEN LANCASTER-PRICE, 40s, glances at the rear-view mirror. / A phone buzzes in the cupholder.
1. NADINE: Rufus, quit kicking the seat. / RUFUS: I'm not. / GRETCHEN: You are, honey. / RUFUS: It's the movie. / NADINE: The movie doesn't kick.
2. Gretchen picks up the phone. / Reads the screen. / Her face stiffens. / She answers on speaker. / COACH TANAKA: Mrs. Lancaster-Price? It's about Nadine. She missed practice again.
3. Nadine freezes. / Rufus stops chewing. / GRETCHEN: Thank you, Coach. We'll talk. / COACH TANAKA: I just want her to know there's a spot. / GRETCHEN: Thank you.
4. She hangs up. / A long silence. / On the screen, an actress screams. / Nadine stares at her knees.
5. GRETCHEN: Nadine. / NADINE: I can explain. / GRETCHEN: Please do. / NADINE: I don't want to play.
6. RUFUS: She's been going to the library instead. / NADINE: Rufus! / RUFUS: Sorry!
7. Gretchen watches them in the mirror. / Then she reaches back and puts a hand on Nadine's knee. / It stays there. / On screen, the credits roll.

### s00635
0. Soap pours down the windshield in sheets. / Brushes thump on the roof. / Inside, a cramped cabin of clippers, towels, and a tiny steel tub where a very large poodle sits looking mortified.
1. GWENDOLYN "WENDY" OBUYA, forties, groomer, in a rubber apron, grips the steering wheel with both hands. / Beside her, TRISTAN FAIRCLOUGH, twenties, her apprentice, holds a phone to his ear.
2. WENDY: Tell me they're turning it off. / TRISTAN: They're, um, looking at it. / LENNY: Sir, the system shows your vehicle as "paid but not exited." That's a process state. / TRISTAN: Can you turn the brushes off? / LENNY: That's a process state. / WENDY: What does that mean? / LENNY: It means you're in the process.
3. Wendy closes her eyes. / The brushes thump louder. / The poodle whines. / TRISTAN: It's okay, Duchess. It's okay. / WENDY: Don't talk to her. She knows we're lying. / LENNY: Sir, do you want the premium rinse? You're getting it anyway.
4. Click. / The line dies. / The van lurches forward a foot and stops. / WENDY: I swear to God.
5. The side door slides open. / A man in a drenched uniform pushes in, one arm over his head against the spray: LEONARD "LENNY" BASKERVILLE, sixties, wearing a name badge that says MANAGER and a visible pool of soap in his hair. / LENNY: Who's in charge of this vehicle? / WENDY: Me. Why are you in my van? / LENNY: Because it's in my wash. / TRISTAN: There's a dog in here, sir. / LENNY: I can see that. Is it licensed? / WENDY: For what? / LENNY: For the wash.
6. The brushes thump. / The poodle sneezes a mouthful of foam. / Lenny looks at it, and the dog looks back.
7. Wendy takes her foot off the brake. / WENDY: Hold on to something, Lenny. / LENNY: What?
8. She guns the engine. / The van lurches, crunching through a plastic barrier, and bursts out the far end of the tunnel into daylight, trailing foam and a small yelp of triumph from Duchess. / LENNY: I said thank you for choosing SparkleJet!

### s00528
0. Satin-lined caskets on trestles. / Potted ferns. / A gramophone plays a muted waltz.
1. LOU DEVEREAUX, 40s, camel overcoat, snap-brim hat, sits in a leather chair, dealing himself solitaire on the lid of a coffin.
2. MISS ALTHEA CROWNINSHIELD, 50s, the proprietor, in black crepe and pearls, pours two glasses of sherry. / Her hand is perfectly steady.
3. ALTHEA: You're early, Mr. Devereaux. / LOU: Early's polite. Late's a funeral. / ALTHEA: You find that amusing? / LOU: In this business? Everything.
4. She hands him a glass. / He sips. / Nods approval.
5. LOU: Good sherry. / ALTHEA: My late husband's. / LOU: He had taste. / ALTHEA: He had a will.
6. Lou smiles. / Lays a red queen on a black king.
7. LOU: About that. The boys tell me the account at First Mercantile is a little light. / ALTHEA: They are mistaken. / LOU: Seventeen thousand light, Miss Crowninshield. / ALTHEA: Then someone has been careless with my money.
8. ANGELO "SPATS" BRINDISI, 30s, white spats, a pencil moustache, slides in from the hallway holding a ledger like a hymn book. / He nods at Althea with exaggerated courtesy. / SPATS: Evening, Ma'am. Boss.
9. LOU: Spats. Show the lady.
10. Spats opens the ledger on the coffin. / Althea does not glance at it. / ALTHEA: I know what it says. / LOU: Then you know the numbers don't lie. / ALTHEA: Numbers never do, Mr. Devereaux. People do.
11. She crosses to a tall ferns pot. / Lifts a fern. / Beneath it, a small brass bell on a cord. / She rings it, once. / A bright, silly chime.
12. LOU: What's that for? / ALTHEA: A courtesy.
13. Every one of the coffin lids in the room creaks open an inch. / A dozen gun barrels slide out, gleaming, steady.
14. Spats drops the ledger. / Lou's cards scatter.
15. ALTHEA: My husband always said: never trust a man who rushes a funeral. / LOU: Well. To your late husband. / ALTHEA: To the late Mr. Devereaux.
16. She clinks her glass to his. / The waltz plays on.

### s00032
0. White ground. / White sky. / A single wagon with a cracked wheel. / A water barrel under a tarp. / The heat shimmers like paper held over a flame. / HANNAH DELACROIX (30s, dust-caked bonnet, rifle across her knees) sits on the wagon tongue. / Her husband EZEKIEL "ZEKE" DELACROIX (30s, bandaged hand) paces the barrel. / Across the flats, a lone rider approaches slowly, leading a second horse: MARSHAL TOBIAS GRAINGER (50s, gray duster, tin star scratched with age).
1. Grainger reins up, tips his hat. / GRAINGER: Afternoon. / HANNAH: Marshal. / ZEKE: Afternoon.
2. GRAINGER: Looks like a wheel gave out. / HANNAH: It did. / GRAINGER: I could help. / ZEKE: We're fine.
3. Grainger swings down. / He pats his horse. / He looks at the barrel, the rifle, Zeke's bandaged hand.
4. GRAINGER: Cut yourself? / ZEKE: Rope.
5. GRAINGER: Funny. Rope burns look different from teeth.
6. Hannah's finger moves toward the trigger. / Zeke's jaw works.
7. HANNAH: Marshal, you're welcome to water. / GRAINGER: That's kind. I'm not thirsty.
8. He walks to the back of the wagon and lifts the tarp. / Underneath: a canvas sack, dark with dried stains. / GRAINGER: Well, now.
9. ZEKE: Let it be, Marshal. / HANNAH: Let it be. / They say it together, flat and fast.
10. ZEKE: ^We didn't kill him for the money. / HANNAH: ^He came for the children.
11. Grainger lets the tarp fall. / The wind lifts a thin curtain of salt. / GRAINGER: Hell of a place to find out you were right.
12. He unbuckles his gun belt and drops it in the dust. / GRAINGER: Put that rifle down, ma'am. I'm only going to sit.
13. She doesn't. / He sits anyway.

### s00268
0. A cramped dome of monitors and cables. / A slice of Earth hangs in the viewport, blue and fragile. / STATION CHIEF AMINATA VOSKUIJLEN-OSEI (40s, grey coverall, tied-back hair) sits at the primary console, headset on one ear. / Beside her, systems tech DAVID "DAV" LINDQVIST-KAMARA (30s, T-shirt, bare feet on the deck) eats a protein bar.
1. AMINATA: Telemetry's drifting. / DAV: It's always drifting. / AMINATA: Not by this much. / DAV: Let me see.
2. He swivels to her screen, bar in his mouth. / Reads. / Swallows. / DAV: Huh. / AMINATA: Huh?
3. DAV: That's not drift. / AMINATA: What is it? / DAV: Something is pinging us. / AMINATA: From where? / DAV: Everywhere.
4. A soft tone sounds. / Both look at the console. / A line of green text scrolls past.
5. AMINATA: "Greetings, Kestrel-Four." / DAV: That's--
6. AMINATA: It's coming from our own transmitter. / DAV: It's a loopback! / AMINATA: It's not a loopback! / ^
7. They stare at each other. / The text continues.
8. DAV: "We have waited." / AMINATA: Who's "we"?
9. DAV: Aminata, I'm going to need a minute. / AMINATA: Take two.
10. He stands, pacing. / Then stops, hands on his hips.
11. DAV: Okay. Hypothesis. Either it's a prank by the Mars crew-- / AMINATA: They're asleep. / DAV: --or it's a prank by the ground crew-- / AMINATA: They're in a meeting. / DAV: --or it's us. / AMINATA: Us? / DAV: We're hallucinating. Oxygen's low.
12. She taps a gauge. / It reads perfect. / AMINATA: Oxygen's fine. / DAV: Damn.
13. Another tone. / The text changes. / AMINATA: "Please do not be afraid."
14. DAV: I'm afraid. / AMINATA: Me too.
15. She types: WHO ARE YOU. / The cursor blinks. / Then the reply:
16. "A friend. / Look up."
17. They look up. / Through the viewport, high above the lunar horizon, a ring of pale lights forms, silent, orderly, expanding.
18. DAV: Chief. / AMINATA: I see it.
19. DAV: Should we call Houston? / AMINATA: We should wake the Mars crew. / DAV: Both. / AMINATA: Both.
20. Neither moves. / The lights grow. / In the viewport the Earth looks smaller than before.
21. DAV: Aminata? / AMINATA: Yes? / DAV: I never finished my protein bar.
22. She almost smiles. / Reaches over and takes it from his hand. / Takes a bite. / AMINATA: Neither did I.
23. She chews, slowly. / They watch the sky.

### s00706
0. Yellow curtains, a toaster with a sticker of a cat on it, a calendar with a drawing of the sun. / Cereal bowls in a sink.
1. MINA, 8, in rain boots and pajamas, stands on a chair at the counter. / She holds a spoon like a microphone.
2. A cordless phone on the table rings. / She picks it up.
3. MINA: Hello? This is Mina. / RAYMOND: Mina-bean. It's Dad.
4. MINA: Where are you? / RAYMOND: Airport. The plane is late. / MINA: Again?
5. RAYMOND: Again. Is Grandma there? / MINA: She's in the garden. She's yelling at the tomatoes. / RAYMOND: Tell her I said hi. / MINA: I will.
6. She sets the spoon down. / Looks at the calendar.
7. MINA: Dad? Can you still make my recital? / RAYMOND: Wouldn't miss it.
8. She nods and hangs up.
9. Outside, a voice calls over the tomatoes. / Mina grins.

### s00267
0. A carousel loops empty. / Flickering departures board. / The cleaners have gone home. / SABRINA OLUWAFEMI-STRAND (30s, courier, hard-shell case handcuffed to her wrist) waits at belt six. / Beside her, a tall man holds a paper cup: VICTOR "VIC" ANANDARAJAH-KELLER (40s, airport security, lanyard, deadpan). / At the end of the belt, a third figure examines the departures board: INSPECTOR MIRA TOLENTINO-ACHEBE (50s, plainclothes, press badge folded in her palm).
1. VIC: Ma'am, you've been here three hours. / SABRINA: My bag is delayed. / VIC: Which bag? / SABRINA: The blue one. / VIC: You don't have a blue one.
2. SABRINA: I'd like to speak to your supervisor. / VIC: I am my supervisor. / SABRINA: Then I'd like another one.
3. MIRA: Miss Oluwafemi-Strand. / SABRINA: Do I know you? / MIRA: Not yet. But I know the case on your wrist.
4. Sabrina's hand tightens on the handle. / SABRINA: It's personal. / MIRA: It's evidence. / VIC: Evidence of what? / MIRA: Of a very bad weekend.
5. Sabrina whips the case up and swings it at Vic's head. / He ducks. / It clips Mira's shoulder. / Mira stumbles back; Sabrina bolts for the exit, dragging the case on its chain.
6. VIC: Stop! / MIRA: Let her run. / VIC: Inspector?
7. MIRA: Sabrina! The carousel's about to start!
8. Sabrina stops, turns. / The belt shudders and begins to turn, empty. / She looks at it, then at them.
9. SABRINA: What's that supposed to mean? / MIRA: It means turn it over. / VIC: It means she's cornered. / ^
10. Sabrina stares. / The case drops open on its chain, spilling nothing. / A few sheets of paper flutter to the floor.
11. SABRINA: Oh. / MIRA: Yes. / SABRINA: It's empty. / MIRA: It was always empty.
12. Sabrina laughs, short and hollow. / Slowly she sinks to the floor beside the belt.
13. Vic takes off his lanyard and sets it beside her. / VIC: Tea? / SABRINA: Please.

### s00756
0. Empty stools. / Neon beer sign, half dead. / A television mutters a weather map to nobody.
1. BIG LOU SALVATORE, fifties, bartender, wipes a glass that has been clean since Tuesday. / At the far end of the bar sits FINN DOYLE, thirties, wearing a jacket that doesn't fit, a hat he hasn't removed, a duffel bag at his feet.
2. BIG LOU: Last call, folks!
3. Nobody answers. / He sets the glass down. / Pours a whiskey. / Slides it to Finn.
4. BIG LOU: You're early. / FINN: You're late. / BIG LOU: It's my bar. / FINN: It's my money.
5. Big Lou raises an eyebrow, polishes another glass. / Finn nudges the duffel with his boot.
6. BIG LOU: Eighty grand and he wants a drink. / FINN: I heard that. / BIG LOU: You were meant to.
7. A car passes outside, headlights sliding across the ceiling. / Both go still. / The light fades.
8. FINN: Lou. / BIG LOU: Finn. / FINN: We're clean. / BIG LOU: We're clean.
9. They stare at each other. / The weather map blinks.

### s00210
0. Standing desks, bean bags, a kombucha tap, motivational posters. / A banner: "WE ARE FAMILY." / A beanbag chair shaped like a unicorn. / Fluorescent morning light. / TARQUIN "TARK" BOLLINGER, 30s, in a vest and sneakers, balances on a wobble board. / Beside him, CORDELIA "CORDY" ADESANYA, 40s, hair in a tight bun, taps at a laptop. / MARGUERITE LESAGE-OKORO, 50s, the office manager, hoses a droopy fern. / THADDEUS "THAD" QUILLFEATHER, 60s, a quiet man in a gray suit, sits at the corner desk, unmoving.
1. TARK: Team! Quick sync! / CORDY: We just did a sync. / TARK: This is a meta-sync. / MARGUERITE: Tark, the fern is dying. / TARK: Everything is dying. That's the culture of change.
2. Cordy rolls her eyes. / Thad stays still. / He has not moved in some time. / TARK: Thad. Buddy. Thoughts? / No answer. / CORDY: Thad? / MARGUERITE: Thad doesn't talk before ten. / TARK: It's ten-fifteen. / CORDY: Is he, uh... / MARGUERITE: He's fine. / TARK: He's on mute. / CORDY: We're in person. / TARK: Mute is a state of mind.
3. They approach the desk. / Marguerite prods Thad's shoulder with the hose. / He topples out of the chair. / Cordy shrieks. / Tark falls off the wobble board. / Marguerite drops the hose, which sprays everyone. / They scramble backward. / Thad lies on the floor, eyes closed, and snores.
4. CORDY: He's asleep! / MARGUERITE: He's been asleep since Tuesday. / TARK: Since Tuesday? / MARGUERITE: That's when he stopped answering emails. / TARK: We thought that was mindfulness.
5. Thad opens one eye. / Sits up, slowly, dripping. / THAD: Is it Friday? / CORDY: It's Thursday. / THAD: Damn.
6. He lies back down. / Tark stares at the others. / Cordy stares at Marguerite. / Marguerite shuts off the water.
7. TARK: Okay. New initiative. Naps. / CORDY: We already have naps. / TARK: Mandatory naps. / THAD: I'd back that.
8. MARGUERITE: Tark, who signed off on the quarterly? / TARK: Which quarterly? / MARGUERITE: The one that says we're out of money. / TARK: We're out of money? / CORDY: We've been out of money since March. / TARK: But the kombucha tap works. / MARGUERITE: That's a donation.
9. Tark takes a long, wobbly step. / He looks at the banner. / At the unicorn beanbag. / At the dying fern. / Behind him, the overhead lights flicker out one by one.
10. THAD: Told you. / TARK: Told me what? / THAD: That it was Friday.

### s00108
0. A circular hall with a ceiling like the inside of a seed. / Six seats are arranged around a table of pale resin. / The viewport behind them shows stars drifting in a very slow river.
1. ELDER TOMOKO VASQUEZ-ADEBAYO (70s, high collar, white hair braided to her waist) sits at the head. / NAVIGATOR PRIYADARSHINI OKEKE (40s, ink-stained fingers, silent) sits beside her. / MEDIC CORVIN HALLORAN-NWOSU (50s, round glasses, a satchel of vials) leans forward. / ENGINEER BEATRIX SOLBERG-MWANGI (30s, rolled sleeves, calloused hands) sits scowling with her arms crossed. / ARCHIVIST DESMOND OYELARAN-PIKE (60s, tweed, a book on his knee) sits very upright. / And at the foot, the youngest, ZANELE KOROMA-LINDEN (20s, council apprentice, uniform too stiff) holds a stylus above a slate.
2. TOMOKO: We begin. / PRIYADARSHINI: Fuel reserves? / BEATRIX: Eleven percent. / PRIYADARSHINI: Eleven. / BEATRIX: Eleven and falling.
3. CORVIN: The farm decks are failing too. / DESMOND: That is in the records. / CORVIN: The records do not feed anyone. / DESMOND: They tell us why. / CORVIN: Why does not matter. When does. / TOMOKO: Please.
4. They quiet. / Zanele writes. / TOMOKO: We will decide today whether the ship turns. / BEATRIX: Turning costs four percent. / PRIYADARSHINI: Not turning costs everything.
5. DESMOND: There is a system two light-years aft. / BEATRIX: Two years of burn. / DESMOND: Two years of burn, and a green world. / CORVIN: How green? / DESMOND: Not as green as the book. / CORVIN: Then how green? / DESMOND: Enough.
6. Zanele raises her stylus. / ZANELE: May I speak? / TOMOKO: The apprentice speaks last. / ZANELE: Yes, Elder. / TOMOKO: But speak. / ZANELE: If we turn, my children will be born in the turn. / BEATRIX: So? / ZANELE: So they will never see where we were going. / DESMOND: They will see where we got. / ZANELE: Is that enough?
7. Nobody answers. / Tomoko rests her palms on the resin and closes her eyes. / Priyadarshini studies her own inked fingers. / Corvin pulls a vial from his satchel, then puts it back. / Beatrix uncrosses her arms.
8. BEATRIX: I would turn. / CORVIN: I would turn. / DESMOND: Archives will log it. / PRIYADARSHINI: Turn. / TOMOKO: Then it is decided. / ZANELE: Thank you. / TOMOKO: Do not thank us. Remember us.
9. She taps the table. / The stars in the viewport shift. / A deep note vibrates through the floor, and the entire ship begins to bank, so slowly that only the stars know.

### s00984
0. Rows of beds under spotlights. / A banner: "24-HOUR SLEEP-OFF!" / A single clock ticks.
1. WANDA (50s, silk robe, sleep mask pushed up) lies stiffly on a king-size, hands folded like a corpse. / GUS (60s, store manager, tie loosened) hovers with a clipboard. / KIT (20s, intern, pajama pants) kneels at the bedside holding a tiny stopwatch.
2. GUS: Wanda, you've been lying there for nineteen hours. / WANDA: Eighteen hours, forty minutes, Gus. / KIT: She's right. I've been counting. / GUS: Kit, you shouldn't be encouraging her. / KIT: She's very peaceful, Mr. Gus.
3. WANDA: The prize is a lifetime supply of pillows. / GUS: It's one pillow. You'd get one pillow. / WANDA: A good pillow.
4. Gus sighs. / Sits on the next mattress. / Yawns. / Kit yawns. / Wanda smiles, eyes closed.
5. WANDA: Gus, dear. Don't lie down. / GUS: I'm just resting my back. / KIT: Mr. Gus, you're horizontal. / GUS: I'm... diagonal.
6. Wanda sits up with a crisp snap. / Pulls a gleaming trophy from under the sheets.
7. WANDA: Three days ago I faked that bed rule. The contest only requires you to stay in the store. / GUS: You were never asleep? / WANDA: Not for a second.
8. Kit slumps to the floor, snoring.

### s00266
0. Iron beds in rows. / Mildewed mattresses. / A rocking horse with one glass eye. / Moonlight through a shattered window. / Three paranormal investigators move in a tight triangle, flashlights jittering. / DR. EUGENIA FALLOWFIELD-ADEYEMI (50s, parapsychologist, wool coat, an old tape recorder in her hand) leads. / NOAH "NO" OKWUOSA-BERGMAN (20s, camera operator, headlamp) films over her shoulder. / LENA TAKAHASHI-DUMONT (30s, sound engineer, headphones, boom mic) sweeps the room with a long pole.
1. EUGENIA: Quiet, please. I want a clean recording. / NOAH: Copy. / LENA: Copy.
2. They freeze. / The tape recorder whirs. / A long beat. / The wind moves through the dormitory like breath.
3. EUGENIA: Is anyone here? / Silence. / Then, faintly, from the far end: / CHILD: Yes.
4. All three jump. / Lena stumbles into the rocking horse; it sways, creaking. / Noah's camera light lurches.
5. EUGENIA: Did you hear that? / LENA: Yes. / NOAH: I got it.
6. EUGENIA: What is your name? / CHILD: Wren. / EUGENIA: Hello, Wren. How old are you? / CHILD: Nine. / EUGENIA: Do you live here? / CHILD: We all do.
7. The temperature drops. / Their breath fogs. / LENA: Okay. Okay. This is fine. / NOAH: It's very fine. / LENA: It's extremely fine.
8. EUGENIA: Wren, can you show us where you are? / A pause. / Then, down the dormitory aisle, a lantern flickers into being. / Under it stands a small figure in a gray nightshirt, hands clasped, face pale and ordinary.
9. NOAH: Oh my god. / EUGENIA: Hello, Wren. / WREN: Hello.
10. She tilts her head. / Behind her, the iron beds begin to rattle, one by one. / LENA: Eugenia. / EUGENIA: I see them.
11. WREN: They're excited. / EUGENIA: Why? / WREN: You're the first visitors.
12. Eugenia opens her mouth. / Closes it.
13. NOAH: Please tell me we're leaving. / EUGENIA: Not yet. / LENA: Eugenia! / EUGENIA: Not yet. Wren, who is the one at the back?
14. Beyond Wren, in the darkness, a tall shape unfolds from the last bed. / A woman in a nurse's uniform, face hidden in shadow. / WREN: That's Matron. / LENA: Matron. / WREN: She's not very nice.
15. The nurse steps forward. / A single stride, and the whole room tilts. / The beds slide. / The glass in the window sings.
16. Lena shrieks and drops the mic. / Noah's camera light flares and goes out. / Eugenia stumbles against an iron frame.
17. EUGENIA: Out! Everyone, out!
18. They run. / The dormitory stretches around them, doors multiplying, corridors lengthening. / Lena sobs. / Noah curses. / Eugenia, hand on the wall, counts doors under her breath. / EUGENIA: Seven. Eight. Nine. Here!
19. She slams through a door. / They tumble into the courtyard, grass and moonlight, cold clean air.
20. They lie gasping. / The orphanage looms behind them, windows dark.
21. LENA: Never again. / NOAH: I lost the camera.
22. EUGENIA: No. You have the tape. / She holds up the recorder, its light still green.
23. She presses play. / Her own voice: "Is anyone here?" / A pause. / Then a small voice, unmistakable:
24. TAPE: Come back.
25. They stare at the recorder. / Slowly, without a word, Lena takes it, crouches, and buries it in the dirt.

### s00421
0. KWABENA OSEI-BONSU (40s, lanyard, three pens) glares at a pallet of mismatched socks. / BRENDA TUCKWELL (50s, headset) and her intern PRIYA NAIR (20s, hoodie) hover.
1. KWABENA: Every single one is a left foot. / BRENDA: Socks don't have feet. / KWABENA: Brenda, this is the Q3 initiative.
2. PRIYA: The initiative was "pairing synergy." / KWABENA: And she wrote the memo. She also approved the vendor. She also, apparently, ordered only lefts.
3. BRENDA: I approved a vendor. He ordered the lefts. / PRIYA: So he's the problem, then? He shipped what she approved. / KWABENA: Priya, he did not write the memo, she did. / BRENDA: He rewrote my memo, actually. I wrote "pairs." / PRIYA: He wrote "pair." Singular. One pair of socks.
4. KWABENA: Fine. Fine. Then we ship one pair to every customer and call it exclusive. / BRENDA: I'll put that in the deck. / PRIYA: I'll put it in the apology.

### s00731
0. Closed for the season. / Rain on the glass. / A brass ticket machine. / A space heater ticking orange.
1. LOLA ITURBE, thirties, wool coat, soaked hair, sits on the counter with a thermos. / Alone. / She stares at the dead cable car through the window.
2. She sips. / Checks her watch. / Sips.
3. The door BANGS open. / Wind. / Wet leaves.
4. JULIAN ASANTE-WRIGHT, late thirties, rain-slicked trench, a suitcase in one hand. / He stops dead.
5. JULIAN: You're not supposed to be here. / LOLA: Neither are you.
6. He shuts the door. / It takes two tries. / She watches him fight it. / He doesn't say thanks.
7. JULIAN: The last train left at nine. / LOLA: Eight forty. / JULIAN: Eight forty.
8. He sets the suitcase on the floor. / Looks at the heater. / She slides the thermos along the counter. / He doesn't take it.
9. JULIAN: Is that coffee? / LOLA: Tea. / JULIAN: Right.
10. He takes it. / Sips. / Grimaces.
11. JULIAN: That's awful. / LOLA: It's chamomile. It's meant to be.
12. She smiles. / Barely. / He almost does.
13. He sits on the bench by the wall. / She stays on the counter. / Rain drums.
14. JULIAN: How long have you been here? / LOLA: Since six. / JULIAN: Why? / LOLA: I had a ticket. / JULIAN: For the nine o'clock?
15. LOLA: For the one last year.
16. He looks at her. / Slowly she takes a crumpled ticket from her pocket. / Holds it up, a stub, brown at the corners.
17. He recognises it. / His jaw tightens.
18. JULIAN: Lola. / LOLA: You never came. / JULIAN: I wrote.
19. LOLA: You wrote a postcard. Of a lighthouse. / JULIAN: It was a nice lighthouse.
20. She laughs, short and sharp. / He doesn't.
21. LOLA: It's a year, Julian. A year since I stood on that platform. / JULIAN: I know. / LOLA: No, you don't. You were in Lisbon.
22. JULIAN: I was in a hospital.
23. Silence. / The heater ticks. / LOLA: What?
24. JULIAN: My mother. She had a stroke the night before. I couldn't-- / LOLA: You never said. / JULIAN: You never asked.
25. She slides off the counter. / Crosses to him. / He stands.
26. LOLA: I waited here. Alone. I thought you'd-- / JULIAN: Stop. / LOLA: I thought you'd chosen not to-- / JULIAN: Lola, stop.
27. She doesn't. / He steps closer. / Her hands are shaking. / So are his.
28. LOLA: You could have called. / JULIAN: She was dying. I was holding her hand! / LOLA: And I was holding a ticket!
29. The words hang. / Rain slams the glass. / Both breathe hard.
30. He reaches out. / She slaps his hand away. / He catches her wrist anyway. / Neither pulls back.
31. JULIAN: She's alive. / LOLA: What? / JULIAN: She recovered. She asks about you every week.
32. Lola's face crumples. / She sags against him, forehead to his collar. / His arms close around her. / The suitcase tips over. / Neither notices.
33. LOLA: Idiot. / JULIAN: Yes.
34. He rests his chin on her hair. / She grips his coat in both fists.
35. The funicular lights flicker. / A distant mechanical hum starts up. / The cable car, far above, begins to move.
36. They both lift their heads and stare. / JULIAN: That's not scheduled. / LOLA: Then let's see where it goes.

### s00399
0. Four people, mirrored walls, a dead floor indicator. / Muzak plays softly. / WINIFRED, 50s, in a pantsuit, holds a cake box. / LEOPOLD, 30s, in a delivery uniform, holds a balloon bouquet. / DANIKA, 20s, in a bridesmaid dress, holds a phone with no signal. / VIJAY, 40s, in a tux, holds nothing but a ring box.
1. Everyone smiles tightly. / WINIFRED: It's fine. It's a minor delay.
2. DANIKA: You're the groom? / VIJAY: Best man.
3. DANIKA: Where's the ring? / VIJAY: In the box. It's in the box. It's in the box.
4. The intercom crackles. / MAINTENANCE: Hello in there? Is anyone in the elevator? / LEOPOLD: Four of us!
5. MAINTENANCE: Great. Quick question. Do any of you have a wedding to be at?
6. All four stare at one another. / WINIFRED: Why do you ask?
7. MAINTENANCE: Because the groom just called. He says the bride's mother is stuck in an elevator with a cake, the best man, and a bridesmaid, and a balloon guy.
8. Winifred closes her eyes. / WINIFRED: I am the mother.
9. Vijay opens the ring box. / It's empty. / VIJAY: Okay.

### s00457
0. A frozen river, a sagging dock, a single lantern swaying. / Wind drives powder across the ice. / A barge hull is locked in the freeze like a fly in amber. / FERRYMAN ODO BRANDYWINE (50s, sealskin hat) pokes the ice with a long pole. / Beside him a gaunt STRANGER (30s, black greatcoat, scholar's satchel) watches the far shore.
1. ODO: Nobody's crossing tonight! / STRANGER: I paid for a crossing. / ODO: You paid for a ferry. This is a skating rink. / STRANGER: Then I will walk. / ODO: You'll die. / STRANGER: Everyone does.
2. Odo spits. / He jabs the pole at the ice, and it cracks like a pistol. / They both flinch. / ODO: Mad as a March hare.
3. A woman's cry carries across the river. / Both men turn. / On the far bank, a small figure waves a lantern. / The Stranger sets down his satchel and shouts.
4. STRANGER: Wilhelmina! / ODO: You know her? / WILHELMINA: Thaddeus! The ice is thin! / STRANGER: I'm coming!
5. ODO: Thaddeus. Is that your name? / THADDEUS: It is. / ODO: Well, Thaddeus, you are about to be a dead one.
6. Thaddeus picks up his satchel and steps onto the ice. / Odo grabs his coat. / ODO: Wait! At least take the pole!
7. Thaddeus takes it. / He tests the ice with the pole. / It holds. / Another step. / Another. / The lantern on the far bank swings in time with his footsteps.
8. ODO: If you see the river open, do not stop for love! / THADDEUS: I never have.
9. Odo watches him shrink to a speck against the blue snow. / The ice groans. / A long crack races beneath the ferry. / ODO: God keep you, you fool.

### s00755
0. A clay court framed by weathered boards, bordered by hydrangeas gone brown at the edges. / The sun is low and gold. / A radio plays something slow from an open window.
1. CONSTANTINE "CONNIE" PAPADAKIS, seventies, white shirt, braces, crouches with a green ball cupped in his palm. / Across the court ELMER HOLLINGSWORTH, seventies, in a flat cap, leans on a cane and studies the pallino. / Between them, seated on a folding chair with a clipboard, VIOLA REARDON, eighties, referee, in a lavender cardigan, watches both with equal indifference.
2. Connie rolls. / The ball curves, slows, kisses the pallino, and stops. / Elmer's cane taps once against the boards. / Viola writes down a number without a word.
3. Elmer picks up his own ball, weighs it, sets his feet, and rolls. / It rolls wide, wobbles, and dies a hand's breadth from the line. / Connie nods, folds his arms, and gazes at the sky. / Viola capitalises something on her clipboard. / Neither man looks at the other.
4. Connie takes his second ball from the bucket and turns it over twice, and Elmer, from the far end, produces a handkerchief and blots his forehead with the slow ceremony of a man not in a hurry. / Viola lowers the clipboard and takes a long sip of her iced tea.
5. VIOLA: Four to two. / CONNIE: Thank you, Viola. / ELMER: Two's not bad. / VIOLA: It's two.
6. Connie rolls again. / Another kiss, another stop.
7. Elmer watches it settle and for a moment his cane trembles. / He reaches into his cardigan, fingers a folded photograph, then thinks better of it and tucks it back.
8. CONNIE: You all right, Elmer? / ELMER: Sun's in my eyes. / CONNIE: Sun's behind you. / ELMER: Then it's the other one.
9. Viola caps her pen. / She rises, brushes clay from her cardigan, and walks the length of the court at her own pace, bends, and measures with a short string. / She straightens.
10. VIOLA: Game. / CONNIE: Good game. / ELMER: Hm.
11. They shake hands over the boards, a dry brief shake. / Viola gathers the balls into the bucket. / Connie holds the gate for Elmer. / Elmer goes through it and does not say thank you, and Connie does not seem to expect it, and the radio drifts on.

### s00315
0. Concrete. / Sodium glare. / Four people in a ring around a black sedan with its trunk open. / VIKTOR "VIC" ODUYA-LINDGREN (40s, tailored coat). / ANNELIESE "ANNA" BRAITHWAITE-NKOSI (30s, gloves). / REGINALD "REG" ASANTE-HOLM (50s, armed). / And the fourth, tied to a chair, a gag around his neck: DEACON TIMOTHY ABARA-VOSS (60s, cufflinks).
1. VIC: Anna, take the gag off. / ANNA: Vic, he'll shout. / VIC: He won't. / REG: He will. / VIC: Deacon, will you shout? / DEACON: No. / ANNA: He's lying. / VIC: He's tired. Tired men don't shout.
2. DEACON: Please, Victor. / VIC: Don't "please" me. You sold the list. / DEACON: I sold nothing.
3. REG: We've got the bank record. / DEACON: Then the bank record's wrong.
4. ANNA: Reg, check his phone. / REG: Already did. Nothing. / ANNA: Nothing doesn't mean innocent. / VIC: No. It means careful.
5. DEACON: Victor, listen. I wasn't the one. / VIC: Then who?
6. DEACON: Ask her.
7. Every head turns toward Anna. / She doesn't flinch. / ANNA: That's a nice try, Deacon.
8. DEACON: Check her laptop. / REG: Anna. / ANNA: Reg, don't. / VIC: Anna.
9. The ring tightens.
10. In the silence, a distant door clanks open and footsteps echo down the ramp.

### s00595
0. A big square table, worn pale by decades of elbows. / A pot of soup on the stove, forgotten. / A rotary phone on the wall. / The window shows a field gone blue with dusk. / CORDELIA ASHWORTH, 58, the elder sister, ironing a tablecloth with slow, deliberate strokes, watches her younger sister MAEVE ASHWORTH, 54, who sits at the far end of the table with a suitcase already packed beside her chair, her coat folded neatly across her lap. / The iron hisses. / Cordelia reaches the corner of the cloth, smooths it, folds it once, and begins another pass.
1. CORDELIA: You don't have to go tonight. / MAEVE: The bus leaves at nine. / CORDELIA: There's a bus at six tomorrow. / MAEVE: I'd rather not wait.
2. Cordelia sets the iron down on its heel. / Crosses to the stove. / Lifts the lid on the soup and stirs, not tasting.
3. CORDELIA: Mother's will is in the drawer. You haven't looked at it. / MAEVE: I don't need to. / CORDELIA: It says the house is ours.
4. MAEVE: It says the house is yours. I've read it. / CORDELIA: You said you hadn't. / MAEVE: I lied.
5. Cordelia puts the spoon down so softly it doesn't clink. / She wipes her hands on her apron, one finger at a time, then turns, and for a long moment looks at her sister's face, the tight jaw, the rim of red around the eyes that Maeve will not let fall. / She was always the stubborn one, and she is stubborn now, and she is leaving the way she did at eighteen, with her coat on her lap and her chin high, and Cordelia knows that if she says what she wants to say she will shatter the entire table, so she picks up the iron again.
6. CORDELIA: Then go. / MAEVE: That's it? / CORDELIA: What did you want?
7. MAEVE: I wanted you to say stay. / CORDELIA: I did. Twice. / MAEVE: You said I didn't have to go. / CORDELIA: That's the same thing. / MAEVE: It's not. It's never been the same thing.
8. She stands. / Lifts the suitcase. / Holds it with both hands, like something borne from a flood.
9. MAEVE: Goodbye, Cordie.
10. The nickname lands. / Cordelia's hand tightens on the iron. / A thin trail of steam rises, curling past her face. / Behind her the soup begins to boil over, hissing on the burner. / She doesn't turn.
11. CORDELIA: Don't let the door slam.
12. Maeve closes the door gently behind her. / The latch clicks.
13. Cordelia lets the iron fall onto the tablecloth. / The smell of scorched cotton rises. / She stands there, watching it burn.

### s00472
0. A long gallery with a ceiling lost in dark. / Glass cases run down both walls like the windows of a train that stopped decades ago. / Inside them: foxes mid-stride, owls with wings half-raised, a heron balanced on one leg in painted reeds. / Dust lies over everything in a soft grey fur.
1. Two flashlight beams cross the threshold and wander. / SUNNIVA HALVORSEN (30s, cropped hair, a surveyor's vest with too many pockets) steps in first. / She runs her light across the cases the way a person reads a menu in a language she half knows. / MERIEM AIT-OUDIA (40s, heavy coat, an old camera strapped across her chest) follows two paces behind, breathing through her mouth.
2. SUNNIVA: Council wants an inventory by Friday. / MERIEM: Of what? / SUNNIVA: Everything with a tag. / MERIEM: Everything here has a tag.
3. Sunniva crouches before a case of badgers. / Their glass eyes catch the light and hold it a half-second too long. / She tilts her beam and the shine slides away.
4. Meriem lifts the camera. / She frames the heron. / She does not press the shutter. / She lowers it, wipes the lens with her sleeve, and lifts it again.
5. SUNNIVA: You can take the picture. / MERIEM: I'm waiting for the light. / SUNNIVA: It's a flashlight. It's not going to change.
6. Meriem lowers the camera. / She looks at the heron, then at the floor in front of its case. / A line of small, clean prints crosses the dust there, pale and even, as if something had walked the length of the hall on bare feet.
7. Sunniva sees them a moment after. / She stands. / She sets her light on the floor, pointing along the trail. / It runs to the end of the gallery and into the dark between two cases.
8. SUNNIVA: Night guard. / MERIEM: There is no night guard. / SUNNIVA: Then somebody from the cleaning contract. / MERIEM: No one has cleaned this hall in eleven years.
9. The beam trembles. / Neither of them says whose hand is holding it.
10. Sunniva follows the prints a few steps. / Meriem follows her. / Between the cases there is a narrow service door, painted the same green as the wall. / It is open an inch. / Cold air breathes out of it, smelling of camphor and rain.
11. Meriem reaches past her and pushes the door wider. / She leans her light into the gap. / Stairs, going down. / On the third stair, a single wet footprint, still shining.
12. SUNNIVA: That one's new. / MERIEM: Yes.
13. They stand together at the lip of the stairwell. / Behind them, in the hall, something small and dry settles in one of the cases: a click, like a claw on glass. / Neither turns around.
14. Sunniva takes out her clipboard. / She writes a line. / She shows it to Meriem. / The page says: BASEMENT - NOT ON INVENTORY.
15. Meriem nods. / She lifts the camera and, for the first time, presses the shutter. / The flash fills the stairwell white.
16. In the afterimage, the stairs are exactly as they were. / The wet print is gone.
17. MERIEM: Friday. / SUNNIVA: Friday.
18. She pulls the green door shut. / It latches with a sound like a held breath let go. / Both of them go back down the long gallery, past the badgers, past the owls. / They do not hurry.
19. Behind them, every glass eye in the hall has turned a few degrees toward the door.
20. Sunniva stops at the exit and puts her hand flat against the wall. / She switches off her light. / Meriem switches off hers.
21. In the dark, the prints continue to cross the dust, one after another, toward the place where the two women had been standing.
22. SUNNIVA: Don't look back. / MERIEM: I wasn't going to.
23. She opens the door to the street. / Rain falls through the streetlight, ordinary and loud. / They step out into it side by side, and the door swings shut on its own, slow, with the patience of a thing that has all night.

### s00168
0. One chair. / One lamp. / A window onto a goat pasture. / A bell tinkles. / DR. AMADEUS BRZEZINSKI-OYELARAN, 50s, white coat, mask, pulls on gloves. / Beside him, ASSISTANT KALINDA ROSSITER-MWANGI, 30s, lays out instruments. / In the chair: the village headman, ELDER ODYSSEUS PAPADAKIS-NGUYEN, 70s, jaw clenched. / At the door, three villagers wait: TEODORA, 30s; JACOB, 20s; and a child, MIRIAM, 8, clutching a goat-shaped toy.
1. AMADEUS: Open, please. / ODYSSEUS: No. / AMADEUS: Elder, I need to look. / ODYSSEUS: Look from there. / KALINDA: Sir. Just a peek.
2. He opens. / Amadeus peers. / Tuts.
3. AMADEUS: That is the worst molar I have seen in thirty years. / ODYSSEUS: Thank you. / AMADEUS: It's not a compliment. / ODYSSEUS: It is to me.
4. Calm. / The clinic is bright and still. / A goat bleats outside. / Teodora and Jacob exchange glances. / Miriam hugs her toy tighter.
5. AMADEUS: Kalinda. Local. / She hands him the syringe. / He lifts it. / The elder's eyes widen. / The villagers lean forward.
6. Suddenly, a roar from the pasture. / The door slams open and a goat charges in, horns down, bell clanging, scattering Teodora and Jacob and Miriam, who scream and leap onto the waiting chairs.
7. The goat skids on the tile, slams into the instrument tray. / Steel clatters. / The elder bolts upright. / Amadeus drops the syringe. / Kalinda lunges for the goat. / It dodges. / Everyone shouts at once.
8. ODYSSEUS: That's my goat! / AMADEUS: Your goat!
9. The goat, panting, plants itself in the dental chair, chewing a paper bib.

### s00314
0. A weathered boathouse leaning toward the water. / Cedar planks gone silver. / A rowing shell hangs from the rafters on rope slings, pale as a bone. / Light slants through gaps in the boards and lies across the floor in long bars. / Dust turns in the light. / A radio, tuned between stations, hisses faintly from the workbench. / THEODOSIA "DOSIA" WELLINGTON-ADEBAYO (60s, a man's cardigan over a housedress, hair tied up with a bootlace) sits on an overturned bucket, sanding the oar of a long-dead husband. / She works with patient, practiced strokes. / She has done this every autumn for thirty years.
1. ELIAS WELLINGTON-ADEBAYO (30s, city coat, rental-car keys on his finger) stands at the threshold. / He has not stepped inside. / His shoes are wrong for the planks.
2. ELIAS: Mama. / DOSIA: You're late. / ELIAS: Traffic. / DOSIA: There's no traffic on the lake road. / ELIAS: There was a deer.
3. She sands. / The oar's grain comes up gold under her thumb.
4. DOSIA: You came to talk about the house. / ELIAS: I came to see you. / DOSIA: Yes. And to talk about the house.
5. He steps in at last. / The floorboards give a long, low groan. / He looks at the shell above him. / Reaches up. / Does not quite touch it.
6. ELIAS: It's still here. / DOSIA: Where would it go? / ELIAS: Dad would've sold it. / DOSIA: Your father would have rowed it into the lake and kept going. / ELIAS: Mama. / DOSIA: I'm only saying.
7. She finally looks up. / Studies his face. / His coat. / His keys. / DOSIA: You look like a man who's been told to be gentle.
8. ELIAS: Ruth thinks-- / DOSIA: Ruth thinks a great many things from three states away. / ELIAS: She thinks you should come stay with us. / DOSIA: In an apartment. / ELIAS: A good apartment. / DOSIA: Elias. / ELIAS: Mama, the stairs. The pipes. Winter.
9. She sets down the sandpaper. / Brushes dust off her knee with a slow hand.
10. DOSIA: Tell me, did you ever once, as a boy, carry that oar? / ELIAS: Once. / DOSIA: And? / ELIAS: I dropped it. / DOSIA: Into the lake. / ELIAS: Dad had to swim for it. / DOSIA: He was furious. / ELIAS: He was laughing. / DOSIA: Both things can be true.
11. The radio hisses. / A gull cries somewhere over the water. / Elias sinks onto a coil of rope, and the boathouse tilts a little, and holds.
12. A WOMAN's voice calls from the dock outside, bright and brisk. / RUTH: Elias? Is she in there?
13. Elias closes his eyes. / Dosia's mouth thins. / She picks up the sandpaper. / DOSIA: You brought her. / ELIAS: She drove. I didn't know-- / DOSIA: Of course you didn't.
14. RUTH MARCHETTI-OSEI (30s, parka, a folder under her arm) steps into the doorway, silhouetted against the lake. / She sees the shell above them, the oar in Dosia's lap, and the quiet. / She stops.
15. RUTH: Oh. I'm interrupting. / DOSIA: Yes. / RUTH: I'll wait outside. / DOSIA: You'll come in. And you'll stand where I can see you.
16. Ruth does. / The three of them make an awkward triangle on the creaking floor. / The light bars stretch across their feet.
17. DOSIA: Now. Which of you is going to tell me the real reason you're here? / Neither answers. / The radio hisses between stations.
18. A small figure appears at the water door at the back: PEREGRINE "PERRY" ADEKUNLE-STRAND (10, wet to the knees, a bucket of minnows). / He stops, takes in the three adults, and decides to be invisible. / DOSIA: Perry. Put the minnows in the trough. / PERRY: Yes, Miss Dosia. / He tiptoes past them to the trough, pours, and tiptoes out the way he came.
19. DOSIA: Then I'll finish the oar. / She resumes sanding. / Slow, rhythmic, patient. / Elias watches his mother's hands. / Ruth watches Elias. / And the shell hangs above them like a held breath.

### s00594
0. Vinyl chairs bolted in rows. / A vending machine glowing. / A muted TV showing a cooking competition. / GLORIA PEMBERTON, 60s, in a church dress and orthopedic shoes, sits bolt upright, purse on her lap, rosary twisted around her fingers. / Next to her, WALTER PEMBERTON, 60s, in a windbreaker, stares at a single spot on the carpet. / A coffee cup in his hand has gone cold.
1. A phone rings on the reception desk, unattended. / Neither of them moves. / It rings five times. / Stops.
2. GLORIA: Walter. / WALTER: Yes. / GLORIA: Say something. / WALTER: What do you want me to say? / GLORIA: Anything. / WALTER: It's a long night. / GLORIA: That's something.
3. Silence. / On the TV, a chef flips an omelet. / Gloria's rosary beads click. / Walter shifts his weight, sets the cup on the floor, picks it up again.
4. The intercom crackles overhead. / DR. ESCOBEDO: Family of Pemberton, please come to Room 4.
5. They both rise at once, bump shoulders, step back. / Gloria goes first. / Walter hesitates, drops his cup in the trash, and grabs her arm, and they stand there a moment, staring at the closed door at the end of the corridor, her fingers digging into his sleeve while his hand covers hers, neither of them able to take the first step, until Gloria whispers a prayer, takes a breath, and moves, and Walter follows a half-step behind her, the way he has for forty years.
6. DR. ESCOBEDO: Mr. and Mrs. Pemberton. Take your time. / GLORIA: No. Not take my time. / WALTER: Gloria. / GLORIA: If I take my time, I'll turn around. / WALTER: Then we don't take our time.
7. He squeezes her hand. / She nods. / They walk.
8. At the door, she grips the handle, pauses, and pushes.

### s00443
0. White tablecloths. / Swaying chandeliers. / Rain drums the windows. / Five passengers sit at a long table set for dinner.
1. DETECTIVE HORTENSE VANDERBILT-OKAFOR (50s, tweed) cuts her steak. / She watches her left. / He pushes his food around, shaking. / She watches her right. / They sip wine, calm, bored. / MR. LEOPOLD PRUITT (60s, banker) coughs into a napkin. / He glances at the clock. / MRS. GRETA LINDQVIST (40s, black gloves) dabs her mouth. / She studies the door. / CAPTAIN DESMOND TREVELYAN (40s, uniform) sits across from them, jaw tight. / He taps the table. / His glass trembles. / YOUNG MISS ADELAIDE FOX (20s, curls) looks at her plate. / She has not eaten.
2. The train enters a tunnel. / The lights flicker. / A scream, short and cut off. / The lights return.
3. Pruitt slumps in his chair, a steak knife in his chest. / She leaps up. / He gasps. / They freeze. / He knocks over his water. / She slaps the table.
4. HORTENSE: Nobody move.
5. She crosses to the body and lifts his wrist. / She shakes her head. / She looks at each face in turn, and they stare back.
6. TREVELYAN: Detective, I assure you-- / HORTENSE: Captain, sit down. / He sits. / She studies the knife, then the table settings.
7. GRETA: That was my knife. / All heads turn to her. / She holds up her hands, palms open, gloves still on. / GRETA: I mean, it was set at my place. Someone switched it.
8. ADELAIDE: Detective, the train is locked. / HORTENSE: Yes, Miss Fox. It is.
9. She picks up the cold dinner roll from her plate, tears it in half, and sets it down. / HORTENSE: Then one of you is lying.

### s00836
0. The star projector is dead. / Only a handful of emergency lights glow along the wall. / The dome ceiling is a flat gray void. / INSPECTOR AGNES TRELAWNEY, fifties, in a belted raincoat, stands at the center aisle with a torch. / PROFESSOR BALTHAZAR OYELARAN, seventies, in a velvet jacket, sits in the front row. / CORMAC, a lanky security guard, hovers by the exit. / ASTRID VOLKOVA, thirties, the curator, wrings her hands beside the projector console.
1. AGNES: Who last saw Doctor Pell alive? / ASTRID: I did, at nine. He went to calibrate the / BALTHAZAR: He was fussing with the Zeiss, as usual. / CORMAC: I locked the east door at ten. Nobody came in. / AGNES: Nobody went out? / CORMAC: Nobody.
2. Her radio crackles. / PUI-LING: Inspector, Sergeant Pui-Ling. We have the body in the sub-basement. Cause of death looks like electrical. / AGNES: Understood. Keep the scene sealed.
3. BALTHAZAR: Electrical? In a planetarium. How apt. / ASTRID: Professor, please. / BALTHAZAR: Please what? A man is dead, and the stars are out. It's a metaphor, my dear. / CORMAC: Sir, it's a crime scene. / AGNES: Quiet, all of you.
4. A door clatters open at the far end of the dome. / JAMAL REYES, twenties, in a janitor's coverall, stumbles in with a bucket, blinking at the torchlight. / He sees four faces turned toward him and freezes. / JAMAL: Sorry. Nobody told me there was a meeting. / ASTRID: Jamal, where have you been? / JAMAL: Mopping the lobby. The power went out, I thought
5. AGNES: Mr. Reyes. Put down the bucket. / He does. / A little water slops onto the floor and spreads across the tiles, catching the emergency light in a thin, bright line.
6. PUI-LING: Inspector, there's a mop in the sub-basement. Wet.
7. Agnes looks at Jamal. / Jamal looks at the bucket. / Cormac steps in front of the exit.

### s00200
0. A small kitchen. / A table set for two. / One candle burning. / A phone leans against the salt shaker.
1. CLEMENTINE BRAITHWAITE, 30s, in an apron, stirs a pot. / She tastes. / Adds salt. / Checks the clock. / She wipes her hands, straightens a fork, moves it a quarter inch, moves it back.
2. The phone buzzes. / She answers on speaker. / Only a long silence and a car horn on the other end. / CLEMENTINE: It's fine.
3. She waits. / CLEMENTINE: No, I'm stirring. Twenty is fine.
4. The line clicks dead. / She does not look at the phone.
5. A moment later it rings again: her own voicemail greeting, played back by mistake. / CLEMENTINE: Hi, you've reached Clementine. Leave a message and I'll call you right back. / She presses the screen. / The voice stops.
6. She takes the second plate from the table and slides it back into the cupboard. / She blows out the candle. / Sits. / Eats alone, slowly, while the pot goes on simmering.

### s00106
0. A vast white screen stands over a lot of weeds and abandoned speaker posts. / At the top, a narrow catwalk of weathered planks runs behind the canvas. / A few stars show through the clouds.
1. LEANDER PRZYBYLSKI (15, thin, hands in the pockets of a too-big hoodie) climbs over the last rung and sits at the edge with his legs hanging over nothing. / Behind him, his sister WINIFRED (17, denim jacket, keys on a lanyard, jaw clenched) hauls herself up the ladder, breathing hard, and stands on the catwalk.
2. She finds him. / She does not hurry. / WINIFRED: You scared me. / LEANDER: You came up anyway. / WINIFRED: Mom's looking everywhere. / LEANDER: Not here. / WINIFRED: She will be.
3. He doesn't turn. / She walks along the planks, one hand trailing the canvas, which breathes like a sail. / The wind carries her voice into the dark lot. / WINIFRED: Dad's car is still in the driveway. / LEANDER: I know. / WINIFRED: He's not going to leave tonight. / LEANDER: He always says that. / WINIFRED: He does. / LEANDER: Then he does.
4. She sits beside him, close but not touching. / Below, a cat crosses the lot and vanishes. / WINIFRED: Remember when we used to come here? / LEANDER: I remember the fries. / WINIFRED: Dad used to put his arm over the seat. / LEANDER: He used to put his arm over Mom. / WINIFRED: I was five. / LEANDER: I was three. I remember. / WINIFRED: You do not. / LEANDER: I remember everything. / That's true, and she knows it. / She lowers her eyes.
5. WINIFRED: Come home. / LEANDER: Why? / WINIFRED: Because it's cold. / LEANDER: That's not a reason. / WINIFRED: Because I'm cold. / LEANDER: That's closer. / WINIFRED: Because I need you.
6. He turns at last. / Looks at her. / In the dark, the white screen glows faintly behind his head like a halo. / LEANDER: You never say that. / WINIFRED: I'm saying it. / LEANDER: Why now?
7. WINIFRED: Because he's going to leave tomorrow.
8. The words fall into the silence. / Leander flinches, hard, like she struck him. / He stands abruptly. / The planks creak. / She grabs his sleeve and he rips free.
9. LEANDER: You knew. / WINIFRED: Since Tuesday. / LEANDER: You knew since Tuesday and you didn't say. / WINIFRED: I was protecting you. / LEANDER: From what? / WINIFRED: From this. / LEANDER: This is worse!
10. His voice cracks and breaks over the empty lot. / He kicks a loose plank. / It tumbles off the edge and bounces down the scaffold with a long, cheap clatter. / They both listen until it stops.
11. WINIFRED: Leander. / LEANDER: Don't. / WINIFRED: Look at me. / He doesn't. / She steps in front of him, forcing it. / WINIFRED: I'm sorry. I should have told you.
12. He crumples. / She catches him before he reaches the planks. / His shoulders shake. / She holds him, her chin on his head, and over her shoulder the huge dark screen waits for a picture that will never come.

### s00811
0. A glass booth the size of a phone box. / Plastic flowers. / A speaker, a menu board with "VOWS - $29" and "FLOWERS - $9," and a tiny neon cross.
1. PATSY LEUNG-ARCHER, 20s, sequined vest and veil, sits on a stool. / She wipes down the counter in slow circles. / The only sound is the neon's buzz.
2. Headlights sweep across her face. / A car idles outside. / A window rolls down. / She slides the glass open and leans out.
3. PATSY: Welcome to Holy Smokes Chapel. Would you like to marry someone tonight?
4. Nobody answers. / Just the engine. / PATSY: Sir? Ma'am?
5. A hand appears. / In it, a gun.
6. Patsy freezes. / Her lips move without sound.
7. WENDELL ASHFORD-LOPEZ, 40s, pulls his head out of the car and steps up to the booth. / Leather jacket, bloodshot eyes. / The gun stays on her.
8. WENDELL: Open the register. / PATSY: We don't have a register. We have a tip jar. / WENDELL: Then open the tip jar. / PATSY: It's a mason jar. / WENDELL: Open it!
9. She does, hands shaking. / A few crumpled bills. / A rubber band. / A condolence card. / WENDELL: That's all? / PATSY: People mostly pay with cards.
10. He stares into the jar. / The gun lowers. / He laughs, ragged.
11. WENDELL: I've been planning this for a month. / PATSY: I can marry you. Twenty-nine dollars. / WENDELL: To who? / PATSY: Anyone you like. I'm very flexible.
12. He pockets the gun. / Takes out a crumpled twenty and a ten. / Pushes them through. / WENDELL: Keep the dollar. / PATSY: Congratulations.
13. She adjusts her veil and begins the vows.

### s00432
0. Five teenagers crowd the rusted catwalk behind a giant blank screen. / The city glows beyond.
1. JUNO: You said you'd bring the keys. / MATEO: I said I'd try. / JUNO: That's not what you said.
2. OLUWASEUN: Guys, quiet. Someone's down there. / PRIYA: It's just the security guy. / MATEO: It's never just the security guy. / JUNO: He's walking this way. Move.
3. They all lurch at once. / Mateo collides with Priya, Oluwaseun drops his flashlight, and Dani, silent until now, grabs Juno's sleeve. / The flashlight rolls off the catwalk and clatters below.
4. DANI: I'm not going back. / JUNO: Nobody's going back. Hush.
5. A beam of light sweeps across the screen. / The five freeze. / The light lingers, then slides away.
6. Juno exhales. / Mateo lets go of Priya's arm. / Oluwaseun laughs without sound. / Dani lets go of the sleeve.

### s00439
0. A creaking windmill over a stock tank. / Three riders sit their horses in the shade.
1. EZRA: Water's low. / HATTIE: Water's always low. / EZRA: Then why're we out here?
2. HATTIE: Because Tom says the old man buried something under this mill. / TOM: I never said that. / HATTIE: You said it Tuesday. / TOM: I said somebody told me a man told me. / EZRA: That's three hands removed from nothing.
3. HATTIE: Dig. / TOM: With what? / HATTIE: Your spurs. / EZRA: Hattie, I'm too old to dig. / HATTIE: Then watch Tom. / TOM: I'm not digging, either. / EZRA: Well, somebody better.
4. A long wind moves through the blades. / The mill creaks. / The three sit and look at one another.

### s00283
0. Rain on the windshield. / Four people. / One bag of hash browns that has already been opened. / He is at the wheel, shouting into the speaker box while checking the mirror, the clock, and his phone all at once. / His name is ROLAND ESPINOZA-HART (40s, tie half-knotted). / She is in the passenger seat, shouting over him to the speaker box, with a coffee in one hand and a sleeping bag stuffed under her arm. / This is NEELAM ESPINOZA-HART (40s, hospital scrubs). / In the back, a girl of twelve, TAMSIN, kicks the seat. / A boy of seven, FELIX, is standing on the seat, pressing his nose to the glass.
1. A sibling war has broken out over the hash browns. / They each have one hand in the bag and one hand on the other's face.
2. Roland reaches back without looking and swats at both. / Neelam reaches back, too, and her coffee spills down Roland's sleeve. / He yelps. / Tamsin shrieks. / Felix falls off the seat onto the floor, still holding the bag.
3. ROLAND: Two number threes! / NEELAM: Three! / TAMSIN: He's eating mine! / FELIX: It's MY bag! / ROLAND: Everybody stop!
4. Nobody stops. / The speaker box crackles. / The car behind them honks. / NEELAM: Roland, move up. / ROLAND: I'm moving!
5. He is not moving. / He is reaching for a napkin. / Felix's foot is on the horn. / The honk goes long. / Neelam lunges for the foot. / Tamsin grabs the napkin.
6. Roland swerves a half inch and hits the speaker post. / The speaker box goes silent. / All four freeze, mid-motion, a family in tableau.
7. Then everyone starts again.

### s00160
0. Pink neon. / A window hatch cut into a stucco wall. / An organ plays on a loop from a speaker on a post. / A plastic arch of roses. / Inside the booth: REVEREND-ISH LEONARD "LENNY" ABIODUN, 50s, in a rented robe, drinks from a paper cup.
1. A car pulls up. / Headlights wash the arch. / Out of the driver's window leans BIANCA STROZZI-OKORO, 30s, in a white dress and a leather jacket. / In the passenger seat sits ELIAS NAKAMURA-FLORES, 30s, bow tie crooked.
2. LENNY: Welcome to the Chapel of Quick Vows. What's your order? / BIANCA: Two vows, no fries.
3. ELIAS: We'd like the premium. / LENNY: The premium has a rose. / ELIAS: Then give us the rose. / BIANCA: Elias, we don't have time. / ELIAS: Bianca, the rose is five dollars. / LENNY: It's a real rose. / BIANCA: It's plastic. / LENNY: It's a real plastic rose. / ELIAS: We'll take the rose.
4. Bianca sighs. / Hands cash. / Lenny passes a rose through the window. / Elias holds it. / She snatches it. / They both laugh.
5. LENNY: Names? / BIANCA: Bianca Strozzi-Okoro. / ELIAS: Elias Nakamura-Flores.
6. LENNY: Do you, Elias, take this woman... / ELIAS: I do. / LENNY: I haven't finished. / BIANCA: He knows the rest. / LENNY: Do you, Bianca... / BIANCA: Absolutely.
7. LENNY: By the power vested in me by the state of Nevada and a two-day online course... / ELIAS: Lenny. / LENNY: ...I pronounce you... / BIANCA: Lenny! / LENNY: ...married.
8. Silence. / The organ stutters. / Elias leans out and kisses Bianca. / She grabs his lapel. / The horn honks, long and joyful.
9. LENNY: That's twelve dollars, plus tip.
10. BIANCA: We have to talk about my mother. / ELIAS: What about your mother? / BIANCA: She's in the back seat.
11. A hand rises over the headrest. / A tiny wave. / Lenny drops his cup.

### s00835
0. Trucks chained in rows. / Diesel haze. / The engines throb through the floor. / MIRELA STAN, 30s, in a dock-worker's vest, leans against a shipping container. / She holds a clipboard with no pen. / DOMINIC REYES, 40s, leather jacket, arrives from the stairwell with a duffel. / SPARROW, 20s, hood up, trails him. / TEO KAWAGUCHI, 50s, a ledger clerk with thick glasses, sits on a spare tire with a thermos.
1. Dominic drops the duffel at Mirela's feet. / She does not look down. / MIRELA: You're early. / DOMINIC: You're late. / She smiles with half her mouth. / Sparrow shifts weight foot to foot. / Teo unscrews the thermos and sips, watching them over the rim.
2. SPARROW: Can we do this fast? I don't like the water. / MIRELA: Nobody likes the water, kid.
3. She kneels, unzips the duffel, and takes out a brick wrapped in brown paper. / He checks his watch. / She holds the brick to her ear and shakes it gently, like a melon.
4. BIG HENRIK, huge, bearded, in a deckhand's slicker, steps out from behind a truck with a flashlight in each fist. / Behind him NURIA, 20s, the ship's purser, holds a radio to her mouth.
5. Henrik clicks both flashlights on. / White light hits Mirela, Dominic, Sparrow. / Teo does not move, his thermos halfway to his mouth. / HENRIK: Evening.
6. Dominic's hand goes under his jacket. / Sparrow bolts for the stairwell. / Henrik swings a flashlight like a club and misses. / Mirela rolls behind the container, the brick still in her hand. / NURIA: Bridge, we have a situation on the car deck.
7. Teo, calm as stone, screws the thermos shut, takes off his glasses, and wipes them on his sleeve. / TEO: Everybody sit down.
8. Nobody does. / A truck alarm starts to shriek. / Henrik lunges. / Dominic ducks. / The flashlight beam sweeps across the ceiling. / TEO: I said sit.
9. He slides a revolver from the thermos bag and sets it on his knee. / The shouting stops as if cut by a blade. / Henrik lowers the flashlight. / Nuria's radio hisses a faraway question.
10. NURIA: Teo, what are you doing? / TEO: Retiring.
11. He picks up the duffel, slings it over his shoulder, and walks down the aisle between the trucks, past Mirela, past Dominic, past Henrik. / Nobody stops him.
12. The ferry horn blows, long and low.

### s00253
0. Fluorescent tubes. / Metal shelving. / Cardboard boxes labeled in marker. / Three people stand at a steel table, a single evidence bag between them. / ATTORNEY SABINE OKONKWO-HARTLEY (40s, gray suit, tired) holds a tablet. / OPPOSING COUNSEL DOMINIC TRAVERSO-ADEBAYO (50s, expensive tie, patient smile) flips through an inventory. / CLERK PRUDENCE "PRU" LINDGREN-ASANTE (20s, lanyard, headphones around her neck) logs entries on a clipboard.
1. SABINE: For the record, we are inspecting Exhibit Fourteen. / DOMINIC: For the record, it's a screwdriver. / PRU: It's a Phillips-head. / SABINE: Thank you, Pru.
2. DOMINIC: Sabine, we've been through this. / SABINE: Dominic, we've been through everything. / DOMINIC: The chain of custody is solid.
3. SABINE: The chain of custody has a gap of nineteen hours. / DOMINIC: That was a weekend. / SABINE: Murder trials don't have weekends. / DOMINIC: This one did. / PRU: I'm just the clerk.
4. SABINE: Pru, which officer logged the tool? / PRU: Officer Haverford. Badge four-two-one. / DOMINIC: He's on leave. / SABINE: Convenient. / DOMINIC: Medical. / SABINE: Of course. / PRU: Of course.
5. Sabine leans over the bag. / Squints at a smudge on the handle.
6. SABINE: That's a thumbprint. / DOMINIC: Probably the officer's. / SABINE: Probably. / DOMINIC: Is there a point?
7. SABINE: There's a name in the margin of the log. Not Haverford.
8. Pru checks her clipboard. / Her eyes widen. / PRU: Oh. / DOMINIC: Pru?
9. PRU: It says... Traverso. / Dominic's smile doesn't move.
10. SABINE: Your father's name. / DOMINIC: It's a common name. / SABINE: It's a very uncommon screwdriver.
11. Pru backs a step toward the stairs. / Sabine, calm, unfolds her tablet.
12. SABINE: Let the record show opposing counsel declined to comment. / DOMINIC: Neither confirmed nor denied. / SABINE: That's the same thing. / DOMINIC: It is not. / ^
13. Pru, very softly, closes the log.

### s00929
0. Minus twenty. / Breath clouds. / Pallets of frozen pierogi stacked to the rafters.
1. DELPHINE KOWALCZYK-ABARA (30s, parka, safecracker's fingertips) kneels at a steel floor safe. / Stethoscope on the dial.
2. Click. / Click. / Click. / She stops. / Listens. / Click.
3. The heavy door groans. / TOBIAS "TOBY" FENWICK (20s, lookout, ski mask rolled up) slips in, hopping from foot to foot. / TOBY: My toes are gone. / DELPHINE: You've got more. / TOBY: How long? / DELPHINE: Quiet.
4. Click. / TOBY: This is going well. / DELPHINE: It's going fine. / TOBY: Too well. Nobody's here. / DELPHINE: Nobody's here because it's a freezer.
5. She turns the dial. / The safe door swings open.
6. Inside, empty. / Just a single index card. / DELPHINE: "Sorry. -- Management." / TOBY: They knew! / DELPHINE: They knew.
7. The freezer lights snap off. / Dark. / Then back on, bright. / The heavy door is closed.
8. Outside, a latch clicks. / A padlock.
9. TOBY: Delphine? / DELPHINE: Don't. / TOBY: We're locked in. / DELPHINE: I said don't.
10. She pockets the card. / Pulls her hood tight. / Looks up at the pierogi. / DELPHINE: At least we won't starve.

### s00537
0. Rain on a field of parked cars. / A giant screen, torn at one corner, shows a black-and-white kiss in forty-foot faces. / Speakers hang on posts like mourners. / Windshield wipers keep time.
1. At the back of the lot, under the sagging eaves of the projection booth, ANNELIESE VOSKUIJLEN, 30s, a bride in a rain-soaked gown and borrowed denim jacket, stands with a lit cigarette she is not smoking. / Her sister-in-law-to-be CORINNE VASQUEZ-LEE, 30s, a maid of honor with a ruined updo, holds a stolen bottle of champagne by the neck. / Between them, the rain. / Between them, everything.
2. CORINNE: You can't just walk out of your own wedding. / ANNELIESE: I walked out of my own wedding. / CORINNE: The caterer is crying. / ANNELIESE: The caterer is always crying.
3. Corinne laughs, wet, despite herself. / Hands over the bottle. / Anneliese drinks. / Hands it back.
4. ANNELIESE: He's good, Corinne. / CORINNE: He's wonderful. / ANNELIESE: So why does it feel like a cage? / CORINNE: Maybe because it's a cage you picked.
5. A silhouette appears at the edge of the lot, umbrella tilted. / GABRIEL ACHTERBERG, 30s, a groom in a ruined waistcoat, jogs toward them through the puddles, the umbrella useless. / GABRIEL: Anna! Anna, I'm not here to -- / ANNELIESE: Gabe.
6. CORINNE: I'll be in the car. / Corinne retreats, taking the champagne. / Gabriel arrives, drenched, breathless. / He stops three feet away.
7. GABRIEL: Your mother is giving a speech to the empty chairs. / ANNELIESE: That sounds like her. / GABRIEL: I told her you needed air. / ANNELIESE: I needed this.
8. She gestures at the lot: the rain, the cars, the screen. / On it, the silent couple kiss again. / GABRIEL: I never knew you liked the pictures. / ANNELIESE: I came here with my father. Every Friday. Until he sold the Chevy. / GABRIEL: You never told me. / ANNELIESE: You never asked.
9. The sting lands. / He takes it, nods. / GABRIEL: Fair.
10. TAKESHI NAKAMURA, 70s, the projectionist, leans out of the booth window with a thermos and a skeptical eyebrow. / TAKESHI: Folks, you are blocking the exit. / ANNELIESE: Sorry. / GABRIEL: Sorry! / TAKESHI: You two the runaway wedding? / ANNELIESE: Probably. / TAKESHI: Good. Come in. Better view from up here.
11. Gabriel and Anneliese look at each other, uncertain, then climb the iron stair into the booth. / It smells of warm dust and film. / A single projector clatters in the dark, throwing a beam through a square window.
12. The old man pours three paper cups from the thermos. / TAKESHI: My wife and I watched this one thirty-one years ago. She said, "He's going to leave her." / GABRIEL: Does he? / TAKESHI: Watch.
13. On the screen, the man walks into the rain. / The woman does not call after him. / The camera holds on her face.
14. Anneliese reaches for Gabriel's hand, does not take it, rests her fingers an inch from his. / ANNELIESE: She's going to let him. / TAKESHI: Only in this version.
15. The reel clatters. / The picture jumps. / In the splice, a frame goes white and then, impossibly, the man turns around.
16. Gabriel's breath catches. / Anneliese's hand closes over his. / GABRIEL: Is that...
17. TAKESHI: Different print. Spliced it myself, the winter she died. I couldn't stand the ending either. / Rain on the roof. / Three paper cups. / The woman on the screen takes one step toward the man.
18. ANNELIESE: Takeshi. You're a terrible projectionist. / TAKESHI: And you are a terrible bride.
19. Gabriel starts to laugh. / Then Anneliese. / The old man joins them, wheezing, coughing, shaking his head.
20. Outside, in the car, Corinne watches the window of the booth glow like a lantern and finishes the champagne alone.

## Comparisons
p0: a = s00457 beat 0 | b = s00443 beat 0
p1: a = s00836 beat 2 | b = s00984 beat 8
p2: a = s00472 beat 9 | b = s00706 beat 4
p3: a = s00314 beat 6 | b = s00702 beat 5
p4: a = s00472 beat 2 | b = s00210 beat 3
p5: a = s00267 beat 5 | b = s00268 beat 23
p6: a = s00664 beat 2 | b = s00266 beat 11
p7: a = s00266 beat 17 | b = s00731 beat 20
p8: a = s00318 beat 5 | b = s00537 beat 14
p9: a = s00266 beat 25 | b = s00664 beat 14
p10: a = s00268 beat 21 | b = s00537 beat 15
p11: a = s00756 beat 7 | b = s00664 beat 12
p12: a = s00216 beat 1 | b = s00537 beat 18
p13: a = s00664 beat 20 | b = s00594 beat 4
p14: a = s00314 beat 16 | b = s00537 beat 11
p15: a = s00266 beat 11 | b = s00706 beat 1
p16: a = s00266 beat 25 | b = s00457 beat 0
p17: a = s00210 beat 2 | b = s00472 beat 13
p18: a = s00410 beat 17 | b = s00731 beat 33
p19: a = s00106 beat 1 | b = s00472 beat 16
p20: a = s00811 beat 11 | b = s00528 beat 3
p21: a = s00835 beat 12 | b = s00266 beat 8
p22: a = s00929 beat 1 | b = s00356 beat 0
p23: a = s00984 beat 6 | b = s00410 beat 14
p24: a = s00702 beat 6 | b = s00432 beat 3
p25: a = s00755 beat 2 | b = s00267 beat 2
p26: a = s00200 beat 3 | b = s00216 beat 2
p27: a = s00731 beat 1 | b = s00594 beat 0
p28: a = s00314 beat 13 | b = s00656 beat 4
p29: a = s00635 beat 4 | b = s00836 beat 3
p30: a = s00664 beat 5 | b = s00314 beat 4
p31: a = s00200 beat 5 | b = s00664 beat 6
p32: a = s00443 beat 6 | b = s00177 beat 10
p33: a = s00314 beat 14 | b = s00410 beat 9
p34: a = s00106 beat 6 | b = s00664 beat 15
p35: a = s00299 beat 0 | b = s00706 beat 9
p36: a = s00595 beat 12 | b = s00457 beat 8
p37: a = s00559 beat 2 | b = s00160 beat 0
p38: a = s00155 beat 7 | b = s00595 beat 6
p39: a = s00537 beat 16 | b = s00731 beat 4
p40: a = s00443 beat 8 | b = s00811 beat 5
p41: a = s00410 beat 1 | b = s00706 beat 5
p42: a = s00731 beat 4 | b = s00579 beat 14
p43: a = s00579 beat 6 | b = s00160 beat 2
p44: a = s00177 beat 9 | b = s00267 beat 10
p45: a = s00664 beat 1 | b = s00595 beat 0
p46: a = s00356 beat 2 | b = s00177 beat 1
p47: a = s00356 beat 4 | b = s00315 beat 10
p48: a = s00216 beat 0 | b = s00756 beat 9
p49: a = s00267 beat 7 | b = s00528 beat 9
p50: a = s00929 beat 5 | b = s00664 beat 3
p51: a = s00267 beat 6 | b = s00432 beat 6
p52: a = s00267 beat 12 | b = s00177 beat 3
p53: a = s00885 beat 0 | b = s00299 beat 3
p54: a = s00108 beat 1 | b = s00315 beat 5
p55: a = s00595 beat 13 | b = s00155 beat 2
p56: a = s00595 beat 11 | b = s00594 beat 4
p57: a = s00210 beat 4 | b = s00155 beat 2