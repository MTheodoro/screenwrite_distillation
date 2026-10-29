You are an annotator labeling screenplay scenes for a dataset.

Rate dramatic tension. Below are scenes split into numbered beats.

1. For every scene, give one score 0-100 per beat (same order).
2. Then answer each cross-scene comparison: which beat is MORE tense, "a", "b" or "tie".

Tension = what a reader feels: stakes, conflict, threat, urgency, suspense. Loud or violent is not automatically
tense; a quiet threat can be very tense. Absolute anchors: 0-15 calm/mundane, 15-35 mild friction or unease,
35-60 clear conflict or suspense, 60-80 high stakes, open confrontation or danger, 80-100 peak life-or-death /
climactic moment.

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/tension_T/group_010.json with the Write tool:
{"scores": {"<scene_id>": [..], ...}, "pairs": {"<pair id>": "a"|"b"|"tie", ...}}
Valid JSON only. Reply only with "done".

## Scenes

### s00197
0. Gaslight hisses. / Brass keys. / A wall of pigeonholes and paper tape curling like ivy. / The air smells of lamp oil and wet wool. / A grandfather clock ticks toward midnight. / ELIZABETH HARGROVE-WYNNE, 30s, in a gray wool dress with high collar, sits at the main key, fingers dancing. / A pince-nez is perched on her nose. / Her supervisor, MR. THADDEUS OSGOOD, 60s, a bald man with muttonchops, hovers over her shoulder. / A messenger boy, PERCIVAL "PERCY" TWEEDLE, 12, dozes on a stool. / A cleaner, MRS. KEZIAH AMADI, 50s, mops the floor with deliberate slowness. / On a bench, CAPTAIN RUPERT BELLAMY, 40s, a naval officer with a bandaged hand, waits with his cap on his knee.
1. The key clatters. / Elizabeth jots a line. / She stops, rereads it, and slides it to Osgood. / ELIZABETH: Mr. Osgood. This came from Calais. / OSGOOD: Good Lord. / CAPTAIN BELLAMY: What is it? / OSGOOD: Nothing, sir. A routine dispatch. / ELIZABETH: It is not routine. / OSGOOD: Miss Hargrove-Wynne. / ELIZABETH: It names the Admiralty. It says the Channel fleet has been sold.
2. Percy wakes, rubs his eyes. / Mrs. Amadi stops mopping. / Bellamy rises, face pale. / CAPTAIN BELLAMY: Sold? To whom? / ELIZABETH: It does not say. / OSGOOD: It is a forgery. / ELIZABETH: It came on the Admiralty cipher. / OSGOOD: Then it is a very good forgery.
3. The door bangs open. / A tall man in evening dress enters, shaking rain from his coat: SIR ALARIC FENWICK-ROTH, 50s, an MP, with silver hair and a gold-topped cane. / He sweeps off his hat. / SIR ALARIC: Mr. Osgood. I understand there has been a message. / OSGOOD: Sir Alaric. We were just discussing it. / SIR ALARIC: Then let us discuss it privately.
4. He extends a gloved hand. / Osgood hesitates, glances at Elizabeth, then slowly hands over the slip. / Sir Alaric reads, folds it, and tucks it inside his coat. / SIR ALARIC: Miss, you have not seen this. / ELIZABETH: I have seen it, sir. I transcribed it. / SIR ALARIC: Then you will un-transcribe it.
5. Percy sneaks a look at Mrs. Amadi. / She raises one eyebrow. / Bellamy puts on his cap and steps forward. / CAPTAIN BELLAMY: Sir Alaric, I would like to see that dispatch. / SIR ALARIC: Captain, I am afraid it concerns matters above your station. / CAPTAIN BELLAMY: My ship is in that fleet.
6. A beat. / Sir Alaric studies him, then smiles thinly and removes the slip. / SIR ALARIC: So it is. / He hands it over. / Bellamy reads. / His jaw tightens. / He looks at Elizabeth.
7. CAPTAIN BELLAMY: Miss Hargrove-Wynne. I should like to send a reply. / ELIZABETH: To Calais? / CAPTAIN BELLAMY: To everyone.
8. She turns to the key. / The clock begins to strike midnight.

### s00601
0. Leather spines. / A cold hearth. / A body-shaped chalk outline on the carpet beside a toppled globe. / Rain on the leaded windows. / INSPECTOR GRIMSBY, 50s, rumpled, a pipe unlit in his teeth, circles the outline slowly while LADY ONDINE VANTERPOOL, 60s, in a black silk wrap, stands rigid by the fireplace, her cane planted like a flag, and FLORIAN AUBERT, 30s, the secretary, lingers in the doorway turning a pen over and over in his knuckles, and BRIDGET MULLANEY, 20s, the housemaid, hovers at a tray of cups, head bowed, eyes darting from one face to the next.
1. GRIMSBY: Lady Ondine, the clock. / ONDINE: What of it? / GRIMSBY: Stopped at ten past eleven. / ONDINE: It always stops. / FLORIAN: It's an old clock.
2. BRIDGET: My ma said it's cursed. / ONDINE: Bridget, hush. / BRIDGET: Sorry, ma'am.
3. GRIMSBY: Mr. Aubert, you were at the desk? / FLORIAN: All evening. / GRIMSBY: And you heard nothing? / FLORIAN: Not a thing.
4. ONDINE: He is deaf in the left ear. / FLORIAN: Slightly. / GRIMSBY: Convenient. / FLORIAN: It's a handicap, sir.
5. BRIDGET: He hears fine when the cook mentions pudding. / FLORIAN: Bridget!
6. ONDINE: Girl, to the kitchen. / BRIDGET: Yes, ma'am.
7. She doesn't move. / Grimsby sets his pipe in the ashtray. / GRIMSBY: Stay, Miss Mullaney. You've something to say. / BRIDGET: I have not.
8. GRIMSBY: Then why the cups? / BRIDGET: What cups? / GRIMSBY: You've brought four. And there were five in the room.
9. Silence. / Ondine's knuckles whiten on the cane. / Florian's pen stops turning.
10. Grimsby crosses to the globe, rights it, and spins it with one finger. / GRIMSBY: The fifth cup was the dead man's. Someone took it. Someone with a reason.
11. ONDINE: Inspector, this is intolerable. / GRIMSBY: No, my lady. This is Tuesday.
12. Bridget lets out a tiny, strangled sound and sets down the tray. / The cups rattle. / She looks at Florian, who looks at the carpet. / Ondine looks at neither.
13. GRIMSBY: Miss Mullaney. Which of them told you to hide it?
14. BRIDGET: Nobody told me. I thought the cup was... it was warm. He was still warm.

### s00776
0. Curved walls of white panel. / Rows of sealed trays glow violet under grow-lamps. / A slow hum, the sound of a place that never sleeps.
1. ODALYS VANTERPOOL, 50s, station botanist, checks a tray with gloved hands. / Her coffee has been cold for hours. / PETRA ISHIGURO, 30s, engineer, kneels at an access panel with a tablet and a mouthful of screws. / CALLUM ROUKEMA, 40s, commander, stands at the viewport. / He doesn't look at the Earth below. / MIREILLE TANDON, 20s, intern, carries a tray of seedlings in both hands, like something that might break. / DR. SUNDARAM OKONKWO, 60s, medical officer, leans in the doorway. / He watches Callum's back. / KESTREL, a station AI, speaks from a speaker above the door. / Calm. / Warm. / Exact.
2. KESTREL: Humidity in ring three is up four percent. / ODALYS: I see it. / PETRA: I'll check the condensers.
3. Callum turns from the window. / He walks the row. / His fingers brush a leaf. / He stops at an empty tray.
4. CALLUM: This one was labeled. / ODALYS: It failed. / CALLUM: It failed a month ago. / ODALYS: Yes. / MIREILLE: Should I log it? / CALLUM: I did.
5. Silence. / The lamps buzz.
6. Sundaram steps in, hands in his coat pockets. / SUNDARAM: You didn't mention it at breakfast. / CALLUM: Nothing to mention. / SUNDARAM: Callum. / CALLUM: Sundaram.
7. They both speak at once. / SUNDARAM: The lab results came back. / CALLUM: The cargo window opens Friday. / SUNDARAM: It would help if you slept. / CALLUM: I'll check the manifest.
8. Both stop. / Neither moves.
9. Petra, from the floor, pretends to read the tablet. / Mireille shifts the seedlings to her other arm.
10. ODALYS: Mireille, those need water. / MIREILLE: Right. Yes.
11. She leaves in a hurry. / The door sighs shut.
12. Sundaram unclasps his hands. / Holds something out: a small flat seed packet, yellowed at the edges. / SUNDARAM: Take it.
13. Callum does not. / SUNDARAM: It's the last one from the old crop.
14. Callum takes it. / Turns it over. / Pockets it.
15. KESTREL: Commander, a transmission is waiting. / CALLUM: Later.
16. He walks out. / The door seals behind him.
17. Odalys finally looks up. / Petra sets down her screwdriver.
18. Sundaram sits on an upturned crate. / Nobody says anything. / The lamps hum on.

### s00322
0. A long timber shed on stilts above the mudflats, open at the seaward end. / White pyramids of salt glimmer along the floor like small glaciers. / The tide is a sound out in the dark, patient and wet. / INES MARCHETTI, fifties, a brine-cracked woman in oilskins, stands at the foot of the largest heap with a lantern held low. / DORCAS WYNN, thirties, a county coroner's investigator in a clean grey raincoat that does not belong here, kneels beside a shovel that someone has driven upright into the salt. / TOBIAS LEACH, sixties, the shed's night watchman, sits on an overturned bucket in the doorway, his hands folded around a thermos.
1. Ines sets the lantern down. / Dorcas does not look at her. / Ines watches Dorcas's hands, and Dorcas watches the shovel.
2. INES: You found it fast. / DORCAS: It was the only thing standing.
3. Ines nods. / She steps closer. / She picks up a handful of salt and lets it run through her fingers back onto the pile. / She does it again. / She does not stop.
4. TOBIAS: Tide turns at two. If you want the flat, you want it before. / INES: We want nothing, Tobias.
5. Dorcas pulls the shovel loose. / The salt beneath is darker, damp, a seam of brown running down into the heap. / She sets the blade against it and pushes.
6. DORCAS: Who was working this stack last Thursday? / INES: Nobody. It was closed. / DORCAS: Somebody locked it. Somebody had the key.
7. Ines hands Dorcas the lantern. / She holds it a moment longer than she needs to, and she does not let go. / INES: Careful. It is slippery near the edge.
8. Dorcas takes the lantern. / She notices that Ines has not asked what is under the salt. / She says nothing. / She digs.
9. The shovel strikes cloth. / A sleeve, grey like her own, stiff with brine.
10. Tobias stands. / The thermos drops, rolling across the boards.
11. TOBIAS: I told you to leave the tide to do it. / INES: Be quiet. / TOBIAS: You said the tide would do it!
12. Ines turns on him. / Dorcas, still on her knees, sets down the lantern and the light throws all three shadows long against the wall.
13. DORCAS: Which of you wants to tell me whose coat this is? / Nobody answers.
14. Out on the flat, the water arrives.

### s00479
0. A plywood box on a frozen lake. / One lantern. / Two stools around a hole cut in the ice, black water glinting. / Lines run down into it, motionless.
1. ELSPETH CRANE (60s, wool cap, thermos) sits with her rod across her knees. / She hasn't touched her tea. / LENNART BOYD (30s, her nephew, borrowed parka) holds his rod with both hands, jaw tight.
2. The ice groans somewhere out in the dark. / A long, falling note. / LENNART: That's normal. / ELSPETH: Mm.
3. Silence. / Lennart reels in an inch.
4. LENNART: You said nothing bites after midnight. / ELSPETH: I said nothing should.
5. She pours tea into the lid and sets it by his boot. / He doesn't pick it up.
6. Down in the hole, the black water is perfectly still. / Then a ring spreads outward from its center. / Small, round, deliberate.
7. Neither of them looks at it. / LENNART: Aunt Elspeth. / ELSPETH: Hush.
8. Lennart's line begins to run. / The reel clicks. / Faster. / He grips it harder; his knuckles whiten.
9. Elspeth rests one hand on his wrist. / ELSPETH: Let it go. / LENNART: It's a good one. / ELSPETH: Let it go.
10. He lets go. / The rod slides across the ice and down the hole without a splash. / The line sings out, then stops. / The water goes still again.
11. Elspeth screws the cap on her thermos. / She stands and gathers the stools. / Lennart stays seated, looking at the hole, his hands open in his lap. / ELSPETH: Come on.
12. He rises, slowly. / She turns the lantern down. / In the last light, the water in the hole is already skinning over with fresh ice.

### s00304
0. Wet wool. / Steam. / The thump of stones through a wall. / A YOUNG WOMAN sits on the bench in her stocking feet, broom across her knees. / Twenties, red parka, a bruise on her cheekbone from a fall. / She stares at nothing. / Coach HJALMAR ODUYA-KRISTENSEN (60s, club blazer, whistle) stands at the door with a clipboard. / He does not speak. / He taps the clipboard against his thigh. / At the far end, a veteran, MAUREEN "MO" DELACROIX-ABARA (40s, gray-blonde braid) tightens a boot. / She doesn't look up either.
1. The young woman bends. / Unlaces one shoe. / Laces it again. / Same shoe.
2. HJALMAR: Five minutes. / The young woman nods.
3. MO: Leave her. / HJALMAR: She has a stone to throw. / MO: She has a minute.
4. Hjalmar studies the young woman. / She picks up the broom. / Puts it down. / Picks up a towel and presses it to her cheek.
5. A horn sounds in the hallway.
6. Mo stands. / Offers her hand. / The young woman looks at it, then up at her face.
7. MO: Brynja. / BRYNJA: I'm fine. / She isn't. / She takes the hand anyway.
8. Hjalmar steps aside from the door. / The three of them walk out together, Brynja in the middle, broom over her shoulder, jaw set.

### s00100
0. Oilcloth on the table. / Ladder-back chairs. / A wall clock that ran slow for fifty years. / Outside, through the screen door, trucks and auctioneer chatter in the yard.
1. Five siblings crowd the room. / IVO LANDRY (50s, eldest, Sunday jacket, no tie) stands at the counter packing a box of cutlery. / PETRA SZABO (40s, nurse's clogs, keys in a fist) leans on the sink, arms crossed. / DOLORES NKRUMAH (late 30s, silk blouse, phone face-down on the table) sits in their mother's chair. / ANSELM WHITFIELD (30s, work boots, farm cap) rolls a pencil between his fingers by the stove. / KIRSTEN BJORNSEN (20s, youngest, bare feet, a cardboard box in her arms) hovers in the doorway to the hall.
2. IVO: The clock goes to me. / PETRA: It goes to whoever's here. / ANSELM: I'm here. / DOLORES: I'm here too. / IVO: You're on your phone. / DOLORES: I'm on my phone in the chair.
3. Anselm sets the pencil on the table. / Dolores picks it up and sets it back where it was. / Petra jingles her keys. / Ivo wraps a fork in newspaper, then another, working quickly, like a man counting something.
4. KIRSTEN: I took the quilt. / PETRA: Which quilt? / KIRSTEN: The blue one. / IVO: That's Ma's quilt. / KIRSTEN: She told me. / ANSELM: When? / KIRSTEN: In March. / DOLORES: Of course she told you. / PETRA: That's not fair. / DOLORES: I didn't say it was fair.
5. Kirsten shifts the box. / Under the lid, a corner of blue appears. / Ivo sees it. / Looks away. / A truck engine roars past the screen door and fades. / Ivo puts down the fork and lowers himself, slowly, onto the last free chair.
6. IVO: The clock goes to whoever winds it. / PETRA: Nobody winds it. / ANSELM: I wind it.
7. Silence. / Dolores lifts her head, surprised. / Anselm picks the pencil up again, rolls it between finger and thumb. / Petra's hand loosens on the keys, and Kirsten sets the box on the table and, with the care of someone handling an egg, unfolds the quilt. / She lays it over the oilcloth. / The five of them look at it, a field of faded blue squares.
8. DOLORES: That's the barn. / ANSELM: That's the pump house. / PETRA: That's the pump house, Ivo. / IVO: That's the barn.
9. Nobody argues. / Outside the auctioneer cries a number, and another, and the clock on the wall, for no reason, ticks once and falls silent.

### s00237
0. Water ankle-deep and rising. / A lantern swings from the ceiling. / Waves slam the hull. / CAPTAIN RUTH ABERNATHY-KOMA (50s, oilskins, grey braid) grips the wheel. / Her knuckles are white. / Beside her, deckhand BASTIEN LEFEBVRE-ADEOLA (20s, hood, cut lip) bails with a plastic bucket. / At the radio, first mate MAEVE ONWUACHI-DRUMM (30s, hands taped, glasses fogged) clutches the handset.
1. MAEVE: Mayday, mayday, this is trawler Gallant Heron, taking water, request assistance. / COAST GUARD: Gallant Heron, say again your position. / MAEVE: Forty-one north, sixty-eight west! Forty-one north!
2. BASTIEN: How much time? / RUTH: Twenty minutes. / BASTIEN: That's not time. That's a prayer.
3. COAST GUARD: ...ant Heron... one hour... response... / MAEVE: One hour! We don't have one hour!
4. RUTH: Maeve. Give me the mic. / MAEVE: They can't hear-- / RUTH: Give it to me!
5. Maeve hands it over. / A wave rocks the boat. / The lantern swings.
6. RUTH: Coast Guard, this is Ruth Abernathy. Last transmission. We are abandoning ship in ten minutes. Three souls. Please mark our position.
7. BASTIEN: Abandoning to what? / RUTH: The raft. / BASTIEN: The raft's been in the shed since March. / RUTH: Then it's had a long rest.
8. MAEVE: Captain, the pump's dead! / BASTIEN: I'm bailing! / RUTH: Bail faster!
9. COAST GUARD: ...Heron... flare... fire flare... / MAEVE: Flare! Where's the flare? / BASTIEN: Port locker! / MAEVE: It's underwater! / RUTH: Then swim!
10. Maeve dives into the dark water pooled in the corner. / Surfaces gasping. / A bright orange flare in her fist. / MAEVE: Got it!
11. RUTH: Up top! Go!
12. They push through the hatch. / The sea comes at them in sheets. / Wind grabs the flare, strikes it. / Red fire stabs the sky.
13. Far off, a searchlight swings. / Bastien whoops. / BASTIEN: They see us! They see us!
14. RUTH: Slow down, Ruth. Don't thank anyone yet.
15. The hull groans. / A wave lifts them. / The searchlight finds their faces.

### s00748
0. An open-plan floor of the sort that wins architecture awards and loses employees. / Glass walls. / Beanbags nobody sits in. / A kombucha tap that dispenses nothing.
1. In the corner office, behind a desk the size of a landing strip, sits HORTENSE BELLWEATHER, fifties, in a charcoal suit and a necklace of tiny silver clocks. / She has the posture of a woman who has survived four mergers.
2. On the desk, a speakerphone the colour of an old tooth. / Beside it, a cold cup of tea.
3. She stares at the phone. / It blinks green.
4. HORTENSE: Archibald. Speak. / ARCHIBALD: Hortense! Morning! Lovely morning. Are you looking out the window? / HORTENSE: I'm looking at my screen. / ARCHIBALD: Look out the window.
5. She turns her chair. / Across the plaza, in the opposing tower, a man in a cream suit waves from the thirty-first floor. / ARCHIBALD DRUMMOND, sixties, silver hair, big teeth. / He holds his own phone to his ear and waves with the other hand.
6. HORTENSE: You moved your desk to face mine. / ARCHIBALD: Corporate suggested "transparency." / HORTENSE: Corporate suggested "dialogue." / ARCHIBALD: Transparency is dialogue with glass.
7. Hortense sets her tea down. / She does not smile. / The clocks on her necklace jingle.
8. HORTENSE: What do you want? / ARCHIBALD: A little chat. About the Henderson account. / HORTENSE: The Henderson account is mine. / ARCHIBALD: Is it? / HORTENSE: I won it. / ARCHIBALD: You did. In 2016.
9. She taps a pen on the desk. / Across the plaza, Archibald pulls a thick binder from a drawer and holds it up to the glass, like a magician showing an empty hat. / HORTENSE: What's that? / ARCHIBALD: The reorganisation.
10. HORTENSE: I wasn't consulted. / ARCHIBALD: You were cc'd. / HORTENSE: On a Friday at five. / ARCHIBALD: Best day for news.
11. She rises and crosses to the window, pressing a hand to the cold glass. / Down below, the plaza fountain is dry, its basin full of cigarette butts and coins. / A pigeon bathes in the dust.
12. HORTENSE: Under the plan, who reports to whom? / ARCHIBALD: You report to me. / HORTENSE: Say that again. / ARCHIBALD: You. Report. To me.
13. Hortense nods slowly. / She returns to her chair. / She picks up the speakerphone and brings it close, until her mouth is inches from the grille.
14. HORTENSE: Archibald. How many years have you worked here? / ARCHIBALD: Nineteen. / HORTENSE: And how many have I? / ARCHIBALD: Thirty-one. / HORTENSE: Thirty-one. Do you know what I've learned? / ARCHIBALD: That silence is golden? / HORTENSE: That people with binders are afraid of people without them.
15. Across the plaza, Archibald's smile flickers. / He lowers the binder. / ARCHIBALD: Hortense, this isn't personal. / HORTENSE: It's the most personal thing in this building.
16. She opens a drawer. / Withdraws a single sheet of paper and a gold fountain pen. / She uncaps the pen with a small, decisive click. / She writes. / The nib scratches. / Across the way, Archibald leans forward, squinting.
17. ARCHIBALD: What are you doing? / HORTENSE: Redistributing.
18. She holds the sheet to the window. / Large block letters, readable even at forty yards: I RESIGN. / EFFECTIVE IMMEDIATELY. / TAKE THE KOMBUCHA.
19. Archibald's mouth opens. / The binder slips from his hands. / He bends to retrieve it and bumps his head on the desk.
20. ARCHIBALD: Hortense! / HORTENSE: Goodbye, Archibald.
21. She presses the button. / The line clicks dead. / She gathers her tea, her pen, and a single silver clock from the necklace, which she unhooks and places on the desk like a chess piece.
22. Then she walks out, heels ringing on the polished floor, past the empty beanbags and the silent tap, and into the elevator.
23. Across the plaza, Archibald presses his face to the glass. / Behind him, the floor has gone very quiet.

### s00378
0. A dead dome. / Seats in tiers. / Dust turns slowly in a flashlight beam.
1. BILLIE STROUD, 40s, detective, coat open, steps over a tipped chair. / A projector lies on its side.
2. BILLIE: Peregrine Lowe.
3. From the dark of the control booth, a man leans into the light: PEREGRINE LOWE, 60s, tweed, handsome in a ruined way, a lantern on his knee. / PEREGRINE: Detective Stroud. You found it faster than I'd hoped.
4. BILLIE: The ticket stub in the victim's coat. / PEREGRINE: I thought you'd miss it. / BILLIE: You wanted me to find it. / PEREGRINE: Billie, I wanted you to look up.
5. Billie lifts the flashlight. / Overhead, the dome is painted with constellations, hand-lettered. / One star is circled in red.
6. BILLIE: That isn't Orion. / PEREGRINE: It's the only wrong star in the sky. That's how Marguerite signed her work.
7. BILLIE: She's been dead since 1998. / PEREGRINE: That's what I was told.
8. He turns off the lantern. / The dome goes black. / Then, soft, a hum, and the ceiling begins to glow, one star at a time.
9. BILLIE: Peregrine. What did you start? / PEREGRINE: Nothing. Watch.
10. Billie lowers the flashlight. / The wrong star pulses.
11. A door she hasn't seen opens in the dome's painted rim.
12. BILLIE: Who's behind that? / PEREGRINE: Billie. She has been waiting a long time to be asked.

### s00589
0. Shelves of unclaimed saxophones. / A desk lamp with a green shade. / A safe, half-open. / ARLO DUNSMORE, 50s, tired eyes, cardigan, sits behind the desk. / TREVOR PIKE, 30s, jittery, in a leather jacket, stands by the safe. / In the doorway: a TALL WOMAN in a long coat, face hidden by a wide-brim hat.
1. ARLO: Who's she? / TREVOR: She's with me. / ARLO: She's not with you. Look at her.
2. TALL WOMAN: I'm not with anyone. / ARLO: Then why are you here? / TALL WOMAN: To collect. / TREVOR: Collect what? / TALL WOMAN: What Arlo owes. / ARLO: I owe you nothing. / TREVOR: He doesn't owe anybody. He pays his bills. / TALL WOMAN: Not that bill.
3. She removes her hat. / Dark hair, a thin scar through one eyebrow. / TALL WOMAN: My name is Gwendolyn Marsh.
4. ARLO: Marsh. Charlie Marsh's girl. / GWENDOLYN: Yes. / TREVOR: Who's Charlie Marsh? / ARLO: Shut up, Trevor. / TREVOR: No, who's Charlie Marsh?
5. GWENDOLYN: The man he sold out in sixty-eight. / ARLO: I did not sell him out. He ran. / GWENDOLYN: You gave them the address. / TREVOR: Arlo, is that true? / ARLO: It was a long time ago.
6. GWENDOLYN: He died in a ditch in Ohio. / ARLO: I'm sorry. / GWENDOLYN: You aren't.
7. TREVOR: Look, lady, whatever this is, we're leaving. / GWENDOLYN: You're leaving? / TREVOR: Yes.
8. He grabs a satchel from the safe. / He heads for the door. / She steps aside, easily, and lets him pass. / He stops at the threshold, confused.
9. TREVOR: That's it? / GWENDOLYN: It's not you I came for. / ARLO: Trevor, wait. / TREVOR: No. He's yours.
10. He disappears. / Footsteps down the stairs. / A door slams.
11. Arlo reaches for the desk drawer. / Gwendolyn pulls a revolver from her coat. / Not aiming. / Just showing. / GWENDOLYN: Leave the drawer. / ARLO: It's a bottle. / GWENDOLYN: I know. / ARLO: May I?
12. She nods. / He pulls out a bottle of cheap bourbon and two glasses. / Pours. / Slides one across.
13. ARLO: To Charlie. / GWENDOLYN: To Charlie.
14. They drink. / She sets down the empty glass and, after a moment, the revolver beside it.

### s00802
0. Velvet booths. / A neon tiger glows on the wall. / A screen shows lyrics to a song nobody is singing. / On the table: a bucket of ice, a tray of cheap whiskey, and a leather briefcase.
1. MINH-ANH LE, 30s, black dress, sits very still and watches the door. / DUKE FONTENOT, 50s, linen jacket, rotates a microphone in his hands like a cigar. / TANYA FROST, 40s, beside him, shuffles a deck of cards without looking at them. / INES CALDERÓN, 20s, the room's waitress, hovers with a tray and a wary smile.
2. A MAN IN A LEATHER COAT, 50s, comes in without knocking. / He shuts the door gently behind him. / MAN IN LEATHER COAT: Evening, all. / DUKE: You're early. / MAN IN LEATHER COAT: You're late.
3. He drops into the booth. / Takes a glass off Ines's tray and drinks it in one pull. / She lowers the tray and backs toward the door.
4. TANYA: Stay, honey. / INES: I should refill the ice. / TANYA: We have ice.
5. Ines freezes. / Minh-Anh doesn't blink.
6. MINH-ANH: So. The briefcase. / MAN IN LEATHER COAT: What about it? / MINH-ANH: Open it.
7. He doesn't move. / Duke sets down the microphone. / DUKE: Casimir. / CASIMIR: There it is. / DUKE: Don't be dramatic. / CASIMIR: You said my name like a bad word. / DUKE: It is a bad word, Casimir.
8. Tanya's cards stop. / Minh-Anh's hand drifts to her purse.
9. CASIMIR: Ines, sweetheart, put on a song. / INES: Sir? / CASIMIR: Anything. Something loud. / She taps the screen. / A power ballad erupts, drums and strings.
10. Casimir stands. / Reaches into his coat. / Duke lunges. / Minh-Anh rolls over the table. / Tanya slams the briefcase shut. / In three seconds the booth is a knot of elbows, glass shattering, whiskey flying.
11. The song soars on.
12. A pistol clatters to the floor. / Everybody stops. / Everybody looks at it. / INES: That's not my ice.

### s00418
0. A cracked asphalt pad under a flickering floodlight. / A hoop with a ragged net. / Moths whirl in the beam. / A bike lies on its side near the garage. / TEO, 16, in an oversized hoodie, dribbles the ball in a slow, thoughtful rhythm. / His cousin LUKA, 17, taller, leans against the garage door with his arms crossed.
1. LUKA: You're stalling, Teo. / TEO: I'm warming up. / LUKA: You're stalling. / TEO: I'm warming up for stalling.
2. Luka pushes off the door. / He strides to the court and holds out his hands. / Teo hesitates, then bounce-passes. / Luka catches it.
3. LUKA: Twenty-one. Ball to the winner. / TEO: It's your ball. / LUKA: It's about to be your ball. / TEO: You're so sure? / LUKA: I'm sure you're afraid.
4. Teo says nothing. / Luka checks the ball to him. / Teo catches it, plants a foot, fakes left, goes right. / Luka slides. / Teo's shot sails up and drops through the net with a clean swish.
5. TEO: One. / LUKA: Lucky. / TEO: One.
6. Luka snatches the ball and dribbles up the court. / He drives, bumps Teo's shoulder, and puts up a floater. / It clanks off the rim. / They both rush for the rebound. / Their arms tangle. / They both fall, and the ball bounces away into the shadows.
7. TEO: Foul. / LUKA: It's not a foul. / TEO: You hit me. / LUKA: You hit me.
8. They lie there on the asphalt, breathing hard, staring at the floodlight. / A moth circles above their faces. / Neither moves to retrieve the ball.
9. LUKA: Teo. / TEO: Yeah.
10. LUKA: Your dad called. / TEO: I know. / LUKA: He said you're not coming home. / TEO: He said what? / LUKA: That you're staying with us. Through the summer.
11. Teo sits up. / His face closes. / He pulls his hood over his head and stares at the garage door.
12. TEO: He didn't tell me. / LUKA: Maybe he wanted me to. / TEO: That's cold, Luka. / LUKA: He's not cold. He's scared. / TEO: Of me? / LUKA: Of whatever he's got to say.
13. Teo gets up. / He walks to the edge of the court, stops. / The ball rolls out of the dark toward his foot. / He stops it with a toe, kicks it up, catches it.
14. TEO: Twenty-one. / LUKA: What? / TEO: We play to twenty-one. I'm up by one.
15. Luka rises. / A pause. / He wipes his hands on his shorts and gets into a defensive crouch. / LUKA: Then check.
16. Teo checks the ball. / Luka taps it back. / Teo spins, dribbles, and drives to the hoop. / Luka slams into him, both of them tumbling again. / The ball flies out of bounds, and the floodlight clicks off, and the court goes dark.
17. LUKA: Foul. / TEO: It's not a foul!

### s00166
0. A vaulted chamber a thousand feet underground, carved from white crystal. / String lights. / Folding tables. / A flip chart reads "OUR CULTURE: DEPTH." / FELICITY ARMSTRONG-NWOSU, 40s, a regional director in a hard hat and blazer, stands in front of the flip chart with a marker. / At the table sits GIDEON PALAMARCHUK-DIOP, 30s, an analyst, glaring at the screen of a phone that has no signal.
1. She taps the chart.
2. FELICITY: Depth. Roots. Foundation. Let's build this from the ground down. / GIDEON: We are literally underground. / FELICITY: Exactly.
3. He sighs. / She writes "TRUST" in the margin and underlines it twice. / FELICITY: Trust.
4. He looks at the phone. / Looks at her. / Puts the phone away.
5. GIDEON: Okay. I trust you. / FELICITY: Do you? / GIDEON: No. / FELICITY: Good. That's honest.
6. She sets down the marker. / The mine hums with ventilation.
7. The elevator door dings. / A third person steps off, brisk and bright-eyed: ANNELIESE VON TRAPP-OKAFOR, 50s, a consultant in a white lab coat, carrying a wooden box.
8. ANNELIESE: I'm sorry I'm late. The cage was slow. / FELICITY: Anneliese! We were just on trust. / ANNELIESE: Wonderful. I brought the exercise.
9. She sets the box on the table. / Opens it. / Inside, eight small salt crystals, glittering.
10. ANNELIESE: Each of you will pick one. Hold it. Tell me what it means. / Gideon holds one up. / Peers at it. / Felicity takes another, hesitates, turns it over.
11. GIDEON: It means my hands are cold. / ANNELIESE: Gideon. / GIDEON: It means I miss the sun. / ANNELIESE: That's a start.
12. FELICITY: It means I have not seen my kids in a week.
13. Silence. / Gideon looks at her. / She stares at the crystal, not at him.
14. ANNELIESE: That's the exercise. / FELICITY: Is it? / ANNELIESE: Yes.
15. Felicity blinks hard. / Gideon pulls a chair beside her. / He doesn't say anything. / After a moment, she sets the crystal down.
16. FELICITY: Let's go up. / GIDEON: The elevator doesn't run until four. / FELICITY: Then we'll wait.
17. They sit. / Anneliese packs the box. / The lights hum.

### s00932
0. The great telescope has been dead for decades, a gutted whale of brass and glass pointing at a slot of stars. / Rain ticks against the copper. / The air smells of mouse and old oil.
1. NADEZHDA "NADIA" ORLOVA-SUTTON (40s) kneels on the iron floor with a tablet glowing in her hands. / She wears a lab coat over a wool jumper, and her hair is wet. / She types fast, then stops, then types again. / Beside her, RAFAEL TORRES-IBEKWE (30s) holds a flashlight in his teeth and a cable in each fist, feeding wire into the telescope's mouth.
2. He spits the flashlight into his palm. / RAFAEL: Two minutes. / NADIA: Everyone stays quiet. Nothing on the radio.
3. There is no one else. / She says it anyway, to the dome, to the ghosts of astronomers. / Rafael glances at her but says nothing. / NADIA: Come on, come on, come on.
4. He hauls himself up onto the telescope's housing and tightens a clamp. / She taps the tablet. / A green bar crawls across the screen.
5. RAFAEL: Eighty percent? / NADIA: Seventy-eight. / RAFAEL: That's not eighty. / NADIA: Rafa, I know what it is.
6. He climbs down, wipes his palms on his trousers. / Overhead, rain gathers force. / She does not look up. / He does.
7. Metal rings on the spiral stair outside. / Slowly, deliberately, someone is climbing. / RAFAEL: Nadia. / NADIA: I hear it.
8. He kills the flashlight. / The dome goes dark except for the glowing tablet and a thin blade of starlight. / Her thumb hovers over the screen.
9. The door at the foot of the stair swings open. / A figure fills it: INSPECTOR AUGUSTINE LEBLANC (60s, a long coat dripping rainwater, a lantern in one hand). / He sets the lantern on the floor and holds up both palms. / AUGUSTINE: You'll want to finish that. I'm only here to watch.
10. She looks at Rafael. / Rafael looks at her. / Neither lowers the cable. / NADIA: Don't trust him. / RAFAEL: Of course I don't.
11. Ninety percent. / Ninety-five. / He stands very still, the way a man does in front of a dog he has not yet decided about. / AUGUSTINE: When it's done, I'll walk you out. Not before.
12. The bar fills. / The tablet chimes once.
13. Above them, the telescope shudders and, for the first time in forty years, begins to turn.

### s00430
0. Mist on green water. / A sandbagged dugout at the edge of a terrace wall. / SERGEANT AUGUSTIN MBEKI (30s, helmet, binoculars) lies on his belly scanning the far ridge. / Beside him, CORPORAL TEODOR BRANDVOLD (20s, radio on his back) chews a stalk of grass.
1. MBEKI: Nobody light a cigarette. I mean it.
2. Nobody answers. / The dugout holds only the two of them. / Mbeki lowers the binoculars.
3. BRANDVOLD: Sarge, he's out there again. / MBEKI: Who? / BRANDVOLD: The farmer. The one with the buffalo.
4. Mbeki raises the binoculars. / A man on the far terrace guides a water buffalo through the paddy, unhurried.
5. MBEKI: He's been told to clear out. / BRANDVOLD: He doesn't have anywhere to go, Sarge.
6. Mbeki lowers the glasses. / He watches Brandvold for a long moment. / Brandvold keeps his eyes on the water.
7. MBEKI: Neither do we. / BRANDVOLD: What?
8. MBEKI: Nothing. Get the radio. Tell HQ the farmer's working his field.
9. Brandvold unslings the radio. / He holds the handset a while before pressing the key. / Mbeki takes off his helmet, lays it on the sandbags, and watches the buffalo's slow progress across the shining paddy.
10. BRANDVOLD: Echo Three, this is Echo Three-One. All quiet at the post. / He lets go of the key. / Mbeki rests his chin on his folded arms.
11. MBEKI: All quiet.

### s00040
0. A sleepy league day. / The pins clatter in the distance like a slow applause. / Five people share a booth built for four. / PRISCILLA "PIP" NAKASHIMA (30s, team captain, sunburnt nose) stirs a milkshake with great concentration. / Next to her, her husband WALTER GRUNDY-BELL (30s, wearing a shirt that says BOWL OR DIE) eats nachos one chip at a time. / Across the table, her brother OTIS (20s, hoodie, headphones) stares into his phone. / Squeezed at the end are the Pellegrinos: elderly twins CARMELA and CORRADO PELLEGRINO (70s, matching cardigans), who have been bowling together since the Truman administration.
1. PIP: Walter, you promised you'd bowl a hundred. / WALTER: I bowled ninety-eight, Pip. / PIP: That's two short. / WALTER: It was a very good ninety-eight. / OTIS: It was a gutter and a prayer.
2. CARMELA: Corrado, pass the salt. / CORRADO: Carmela, you don't need salt. / CARMELA: I need what I need.
3. Corrado slides the shaker across the table.
4. Carmela and Walter both reach for it at the same time and knock the nachos into Pip's lap. / All five freeze.
5. PIP: Walter. / WALTER: I'll get napkins.
6. CORRADO: Carmela, you did that. / CARMELA: I did not.
7. Otis finally lifts his eyes from the phone, examines the carnage, and returns to the screen without a word.
8. Pip dabs cheese from her knee and takes a slow, controlled sip of milkshake. / PIP: Next frame, Walter. Hundred or nothing.

### s00167
0. Round tables, white cloths. / A raised dais. / A banner: "CONGRATULATIONS, BARRY & PETRA." / Empty champagne flutes. / BARRY "BAZ" WOJCIECHOWSKI-OKAFOR, 40s, in a rumpled tux, stands behind the microphone. / A tape recorder sits on the podium beside him.
1. He taps the mic. / Feedback.
2. BAZ: Good evening, everyone. I'm Barry, the best man.
3. He pauses. / Nobody is there. / BAZ: Okay. Rehearsal.
4. He presses RECORD on the tape. / Clears his throat.
5. BAZ: Petra and I go way back. To fourth grade, when she punched me in the face.
6. He stops. / Presses STOP. / REWIND. / PLAY. / BAZ: ...when she punched me in the face.
7. He winces. / BAZ: Too violent.
8. He presses RECORD again. / BAZ: Petra and I go way back. To fourth grade, when she gave me a high-five.
9. PLAY. / BAZ: ...gave me a high-five. / BAZ: Too nice. She hit me.
10. He sighs. / RECORD.
11. BAZ: To the happy couple. May your marriage be like a good wine. Aged, complex, and occasionally bitter.
12. PLAY. / BAZ: ...occasionally bitter. / BAZ: Horrible. Terrible. Delete.
13. He slumps over the podium. / Stares at the empty room. / Slowly, he straightens.
14. BAZ: Petra. Barry. I'm so happy for you both. I mean it.
15. PLAY. / BAZ: I'm so happy for you both. I mean it.
16. He listens. / Nods once. / He tucks the tape recorder into his pocket, adjusts his tie, and walks off the dais, whistling.

### s00163
0. A low-beamed oven room. / Flour in the air. / Trays of unbaked loaves. / A hearth glowing orange. / Six people sit around a long table, sharing a late supper of bread and cheese by one candle. / MASTER THOMAS FARRIER-WELLS, 50s, baker, at the head. / His wife, MISTRESS GWENLLIAN FARRIER-WELLS, 40s. / Their journeyman, HOBB PETTIGREW, 20s. / The maid, JOAN MACKENZIE-AJAYI, teens. / A traveling cloth merchant, ABRAHAM BENVENISTE, 60s. / And a young STRANGER in a green cloak, hood up.
1. THOMAS: Eat. There's more in the oven. / GWENLLIAN: There is always more in the oven. / HOBB: Not if the master keeps counting. / JOAN: He counts crumbs.
2. Abraham chuckles. / The Stranger says nothing, breaking bread slowly.
3. ABRAHAM: Friend, you've eaten little. / STRANGER: I'm saving room. / ABRAHAM: For what?
4. STRANGER: For the fire.
5. A silence. / Thomas sets down his knife. / THOMAS: Sir?
6. STRANGER: Forgive me. My name is Silvanus Carew. I serve the Lord Mayor. I came to warn you. / GWENLLIAN: Of what?
7. SILVANUS: Of this oven. / THOMAS: My oven has stood thirty years.
8. SILVANUS: My lord says the wind is wrong tonight.
9. Thomas stares at him. / Joan reaches for the poker, smothers the fire.
10. THOMAS: Hobb, damp the hearth! / SILVANUS: Master baker, damp the hearth!
11. They speak at once, loud, and the silence afterward is a cliff. / HOBB: Master? / THOMAS: Do it.
12. Hobb leaps to the hearth, dumps a bucket. / Steam billows. / The room goes grey. / Everyone coughs.
13. When it clears, Gwenllian is clutching Thomas's sleeve. / Joan has her hand over her mouth. / Abraham has risen.
14. Silvanus is smiling, sadly, as he lowers his hood. / SILVANUS: Too late, I fear. The wind has already come.
15. From beyond the shutters, faint, a bell begins to ring.

### s00972
0. Orange plastic booths. / A coffee urn rattles with the engine. / Rain on the windows. / Nobody else aboard.
1. DOLORES (60s, black cardigan, rosary wound around her wrist) sits stiff. / Across from her, PAZ (40s, leather jacket, same jaw) peels a label off a water bottle.
2. HENRIK (50s, rumpled suit, folder under his arm) arrives with two paper cups. / Sets one down. / Hesitates. / Sets the other down too.
3. She doesn't touch hers. / She watches her sister.
4. HENRIK: Your mother's will is short. / DOLORES: Mine, she says. My mother. Not yours.
5. Paz stops peeling. / She looks up. / PAZ: Our mother.
6. She slides the label across the table. / A small, damp scrap.
7. HENRIK: It leaves the house to one of you.
8. She laughs. / Short. / Ugly. / The other stays silent.
9. DOLORES: Which one. / HENRIK: The one who stayed.
10. Paz stands. / Sits again. / Her knee bounces under the table.
11. PAZ: Twenty years she called me every Sunday. / DOLORES: And I washed her every morning.
12. She slams a palm on the Formica. / The urn rattles louder. / Henrik flinches, opens the folder, closes it.
13. HENRIK: There's a letter. She asked me to read it only if you both were present. / DOLORES: Read it, then.
14. He unfolds the page. / Clears his throat. / Her eyes are already wet. / The other's are not.
15. HENRIK: "Neither of you gets the house."
16. Silence. / The ferry horn sounds, long and low.
17. She reaches for the cup. / Her hands shake. / Paz takes the other cup, drinks, and nods once at the window.
18. PAZ: She never could make a decision. / DOLORES: She made this one.

### s00709
0. Rock walls dripping. / A headlamp on the ground throws a ragged yellow cone. / A first-aid kit, half open. / A small digital recorder on a flat stone.
1. LIV ARNESEN, 30s, caked in dust, one leg stretched stiffly in front of her, props herself against the wall. / She presses the recorder's red button and holds it close.
2. LIV: Day two. Or night two. Hard to say. Battery's at twenty percent. Water's gone. I have three granola bars and a flare.
3. She coughs, long, into her sleeve. / LIV: My name is Liv Arnesen. If someone finds this, tell my mother I wasn't scared. That's a lie, but tell her anyway.
4. She clicks it off. / Clicks it on. / LIV: Day one. I'm okay. The ceiling came down fast. The west tunnel's blocked. Fine, I'll try the north.
5. She listens with her eyes closed. / Her recorded voice breaks off with a muffled crash, then silence, then breathing.
6. LIV: That was the part where I fell. / She clicks it off.
7. LIV: The truth is, I keep hearing a drip. And I keep hoping it's a river. But it's just a pipe. A leaking pipe. / She moves her leg. / Winces.
8. LIV: Okay. Let's make a plan. One. Don't die. Two. Don't panic. Three. If you panic, see one.
9. A faint scraping sounds from above. / She freezes. / Waits. / Nothing. / She lets out a breath.
10. LIV: Rats. Probably rats. Or a rescue team with very bad manners.
11. She laughs. / The laugh turns into a sob. / She presses the heel of her hand to her mouth until it passes.
12. LIV: Sorry. Sorry. Recording. Where was I?
13. She clicks the button again. / LIV: If I get out, I'm taking up pottery. Something slow. Something that doesn't fall on me.
14. Liv smiles at it, tired and cracked. / LIV: You know, that was a good plan.
15. Overhead, the scraping returns. / Louder. / A thin shaft of white light falls through a crack in the rock.
16. LIV: Hello?
17. She reaches for the flare, and the rock above her begins to shift.

### s00142
0. A tar roof six stories up, patched with plywood. / A wire-and-board coop sits against the stairwell. / City below, orange and gold.
1. TAMSIN OKONKWO-REYES, 15, backpack, headphones around her neck, climbs through the roof hatch. / She carries a thermos and a phone. / She kneels beside the coop.
2. She opens the little door. / A pigeon, grey and ruffled, hops onto her wrist. / She strokes it with one finger.
3. She sets the phone on the ledge. / Taps the screen. / A red dot blinks.
4. TAMSIN: Okay. Voice memo. Day twelve of the Great Return. / She pulls the pigeon close.
5. TAMSIN: Kevin hasn't flown home in six days. I don't think it's a navigation problem.
6. She hesitates. / Then continues, quieter. / TAMSIN: I think he likes it wherever he's going.
7. She stops the recording. / Plays it back. / TAMSIN: I think he likes it wherever he's going.
8. She frowns. / Taps again. / Plays the previous bit. / TAMSIN: Kevin hasn't flown home in six days.
9. She sets down the phone. / She watches the sun slide behind the water towers.
10. She lifts her wrist. / The pigeon hops off, fluttering up onto the lip of the coop. / TAMSIN: Go, then.
11. He doesn't. / He tucks his beak under his wing.
12. She laughs, wipes her eyes with her sleeve, and sits on the warm tar with her back against the coop.
13. She presses record again. / TAMSIN: Day thirteen. He stayed.

### s00723
0. A decommissioned gondola bolted to a service platform. / Two desks. / One window. / One fire extinguisher nobody trusts.
1. PRIYA RAMANATHAN, thirties, headset, ironed blouse. / Armour.
2. HUGH BELLAMY, fifties, comb-over, mug reading WORLD'S OKAYEST BOSS. / He leans in the doorway.
3. HUGH: Priya. Quarterly numbers. / PRIYA: Good. / HUGH: Good?
4. PRIYA: Complaints are down forty percent. / HUGH: Brilliant.
5. PRIYA: Because the phone line's been unplugged since June.
6. Hugh freezes. / Smile stuck. / HUGH: Unplugged. / PRIYA: By you. For "restructuring."
7. Hugh enters. / Sits on the desk. / Sighs like a man in a hot-air balloon.
8. HUGH: Okay. Okay. Nobody tells Corporate. / PRIYA: Corporate's in the next gondola.
9. CORDELL "CORKY" WASHINGTON, twenties, pops up from under the other desk. / Headphones. / Cheese puff dust on his lip. / CORKY: Morning! / HUGH: You live here? / CORKY: Gondola's got Wi-Fi.
10. The gondola sways. / All three grab something. / PRIYA: Why are we moving? / CORKY: Wheel's on. Maintenance said "test." / HUGH: Test what? / CORKY: Whether it still goes.
11. The gondola lifts. / Rises. / Through the window the city tilts into view. / Hugh's mug slides. / He catches it.
12. An old PHONE on the wall RINGS. / Everyone stares. / PRIYA: That's connected? / HUGH: That's not supposed to be connected. / Ring. / Ring.
13. Priya answers. / Puts it on speaker. / PRIYA: Complaints. Priya.
14. MS. FENWICK-ADEYEMI: Ms. Ramanathan. Marjorie Fenwick-Adeyemi. Head of Customer Experience. / Hugh mouths: Corporate. / Corky mouths: In the next gondola.
15. MS. FENWICK-ADEYEMI: I'm told your department has had no complaints in four months. / PRIYA: That's correct. / MS. FENWICK-ADEYEMI: It's the most impressive thing I've ever seen.
16. Hugh straightens. / Smiles. / Corky gives a thumbs-up.
17. MS. FENWICK-ADEYEMI: I'd like to put you in charge of the whole company. / PRIYA: What? / HUGH: Say yes.
18. MS. FENWICK-ADEYEMI: Mr. Bellamy is, of course, being let go.
19. Hugh's mug hits the floor. / HUGH: What?! / CORKY: Oh, wow.
20. PRIYA: Can I call you back? / MS. FENWICK-ADEYEMI: I'm in the next gondola.
21. They all turn. / Through the window, ten feet away, a woman in a grey suit lifts a phone. / Waves.
22. The wheel stops. / Hangs. / Wind. / Silence.
23. Hugh drops onto the desk. / HUGH: Priya. I trained you. / PRIYA: You taught me where the mute button was. / HUGH: That's training!
24. CORKY: I can see her lunch.
25. Priya hangs up. / Looks at Hugh. / At the extinguisher. / At the city below.
26. PRIYA: I have a condition. / HUGH: Anything. / PRIYA: Plug the phones back in. / HUGH: Why? / PRIYA: So we can hear what people actually think.
27. Hugh gulps. / The wheel jolts. / It starts to descend.
28. CORKY: That's going to be loud. / HUGH: How loud? / CORKY: Gondola loud.
29. The wheel carries them down into the noise of the city.

### s00078
0. Fluorescent hum. / Dryers turning. / A rack of lost socks.
1. VINNIE CALDERONE (50s, slick hair, silk shirt under a trench coat) sits on a folding table. / A gym bag at his feet. / He watches a dryer spin. / SHAUNTAE BRIGGS (30s, braids, work boots) folds towels at the counter. / Slow. / Steady. / Eyes on him. / OLEK WISNIEWSKI (20s, hood up, bruise under one eye) feeds quarters into a washer. / Misses one. / Retrieves it.
2. A wall phone rings. / Everyone stops.
3. Vinnie crosses. / Picks up. / VINNIE: Yeah. / ASANTE: Is it clean? / VINNIE: Clean. / ASANTE: Count it again.
4. Vinnie covers the receiver. / Looks at Shauntae. / VINNIE: Count it. / SHAUNTAE: Not mine to count. / She folds another towel.
5. Olek unzips the gym bag. / Cash, bundled. / He thumbs a stack. / Counts under his breath. / OLEK: Forty. Fifty.
6. ASANTE: Is that Olek I hear? / VINNIE: He's counting. / ASANTE: Tell him it's short by two.
7. Vinnie stares at the phone. / Slowly turns. / VINNIE: It's short by two. / OLEK: I counted twice. / SHAUNTAE: He's lying. / OLEK: I am not lying.
8. Vinnie hangs up. / Walks toward Olek. / Soft shoes on linoleum. / VINNIE: Where's the two? / OLEK: In my pocket. For rent. / SHAUNTAE: Mm-hm.
9. Vinnie grabs Olek's collar. / Slams him into the washer. / The drum rattles. / Quarters spill.
10. Shauntae sets down her towel. / SHAUNTAE: Not here. / VINNIE: Stay out of it. / SHAUNTAE: My sister's laundromat.
11. The phone rings again. / Nobody moves.

### s00052
0. Dark oak. / Brass fittings. / A model of a container ship sits on the evidence table, its cranes frozen mid-lift. / Salt-water stains the carpet near the jury box, a leak the clerk has long stopped noticing. / JUDGE HORTENSE ABELARD-OKONKWO (60s, half-moon glasses, voice like creaking rope) presides. / At the plaintiff's table stands attorney PERCIVAL GRIMSDYKE (50s, pinstripe, cane) with a thick binder. / Across the aisle, defense counsel BEATRIX NAKAMURA-FLYNN (40s, severe bun, red pen) leans casually on her chair.
1. JUDGE ABELARD-OKONKWO: Mr. Grimsdyke, you may proceed with your closing. / GRIMSDYKE: Thank you, Your Honor.
2. He rises slowly, leaning on the cane. / He addresses the empty jury box as though it were full.
3. GRIMSDYKE: Ladies and gentlemen, this case is about a ship. It is also about a promise. / NAKAMURA-FLYNN: It's about a bill of lading. / GRIMSDYKE: The Meridian Star sailed from Rotterdam with four thousand containers. Four thousand promises. Not one was delivered intact.
4. JUDGE ABELARD-OKONKWO: Mr. Grimsdyke, I hope you're going somewhere with this. / GRIMSDYKE: Yes, Your Honor.
5. He lifts the model ship from the table and turns it in his hands.
6. GRIMSDYKE: My client alleges that Ms. Nakamura-Flynn's client knowingly loaded cargo in violation of Article Nine.
7. NAKAMURA-FLYNN: Objection. Speculation. / JUDGE ABELARD-OKONKWO: Sustained. Rephrase.
8. GRIMSDYKE: My client alleges that the knowledge was there. / NAKAMURA-FLYNN: Objection. Still speculation.
9. JUDGE ABELARD-OKONKWO: Overruled. I'm curious.
10. Nakamura-Flynn sits, tapping her pen. / GRIMSDYKE: Finally.
11. He sets the model down gently. / It tips on its stand, a crane snaps off, and the sound ricochets around the silent room.
12. GRIMSDYKE: Four thousand promises, ladies and gentlemen. And a clerk who never fixed the leak.
13. JUDGE ABELARD-OKONKWO: Mr. Grimsdyke. / GRIMSDYKE: Your Honor? / JUDGE ABELARD-OKONKWO: That's enough.
14. He bows, retrieves his cane, and sits.
15. Nakamura-Flynn rises, buttons her jacket, and walks calmly to the evidence table. / She picks up the broken crane and weighs it in her palm.
16. NAKAMURA-FLYNN: Your Honor, my learned friend has just proven my case. / JUDGE ABELARD-OKONKWO: Do enlighten us.
17. NAKAMURA-FLYNN: A crane cannot be loaded wrong. It can only be broken. And broken things get insured.
18. Grimsdyke closes his eyes. / The judge exhales through her nose, and removes her glasses.
19. JUDGE ABELARD-OKONKWO: We will recess for lunch.

### s00292
0. Folding chairs. / Carnations in a wire stand. / A closed casket, brass handles dull. / JOSEPHINE "JO" ADEBAYO-KRUSE (40s, black coat, sunglasses she doesn't remove) sits in the front row. / She does not turn when the door opens.
1. MALACHI TREVELYAN-SHAW (50s, black suit, damp at the shoulders) stands in the doorway. / He holds a small paper bag.
2. He walks the aisle. / Sits two chairs from her. / Sets the bag on the empty seat between them. / She looks at it. / Doesn't touch it.
3. A phone rings in her coat. / She lets it go three rings. / He watches her hand.
4. She takes it out. / Answers. / Holds it between them on speaker. / VOICE: Is he there? / JO: He's here. / VOICE: Then you know.
5. She says nothing. / Her thumb moves along the edge of the phone. / He leans his elbows on his knees and looks at the casket.
6. VOICE: Open the bag. / She doesn't. / He does.
7. Takes out a single brass key. / Holds it up to the lamp. / The key turns slowly on its string. / VOICE: That's the end of it.
8. Jo hangs up. / Slips the phone back in her coat. / She takes the key from his fingers, and for a moment their hands stay together.
9. She stands. / Smooths her coat. / He stays seated. / She walks to the casket and lays the key on the lid, beside the carnations.
10. At the door she stops. / He still hasn't looked at her. / She goes out, and he sits on, staring at the key.

### s00179
0. A glass-walled corner office that looks onto a parking structure. / A yoga ball sits where a chair should. / A neon sign on the wall reads "BE THE CHANGE (PENDING APPROVAL)." / A whiteboard is covered with arrows that lead nowhere. / Sunlight is filtered through a fake ficus. / VICE PRESIDENT BARRETT QUIGLEY-STONE, 40s, sleeves rolled, wireless headset on one ear, bounces gently on the yoga ball. / His hair is gelled into a decision. / Across the desk sits PRUDENCE OKONJO, 30s, a quality analyst, pressed blazer, notebook on her knee, patience worn thin. / In front of her is a paper cup of kombucha she has not touched.
1. BARRETT: Prudence. Thanks for jumping on this. / PRUDENCE: You asked me to come at nine. It's nine-forty. / BARRETT: Time is a social construct. But I hear you. Let's circle back to your feedback.
2. PRUDENCE: It's not feedback. It's a defect report. The product ships with a battery that overheats. / BARRETT: We prefer "enthusiastic." / PRUDENCE: It caught fire in testing. / BARRETT: Enthusiastic. Let's workshop that.
3. Barrett stands, bounces once on the ball, and caps a marker. / He writes ENTHUSIASM on the whiteboard and draws an arrow to a drawing of a flame. / Prudence watches without blinking.
4. PRUDENCE: Barrett, I filed this report six weeks ago. / BARRETT: And we love that. Proactive. Self-starter. That's the energy. / PRUDENCE: It's still unanswered. / BARRETT: Which is why I brought you here. I want to empower you to own the narrative. / PRUDENCE: I don't want to own the narrative. I want to stop the shipment. / BARRETT: Shipment is a strong word. / PRUDENCE: Forty thousand units are in a warehouse in Ohio. Trucks leave Friday. / BARRETT: Let's not boil the ocean.
5. Prudence puts the notebook on the desk. / She picks up the kombucha and sets it down again, harder than she meant to. / Liquid slops over the rim.
6. PRUDENCE: Do you know what a thermal runaway is? / BARRETT: Sounds like a marathon. / PRUDENCE: It's when a battery cell heats the next one and the next. It doesn't stop. It's a chain reaction in someone's pocket. / BARRETT: And that's why we're building a culture of openness. / PRUDENCE: You're not hearing me. / BARRETT: I'm hearing the concern. I'm holding space for it.
7. Prudence stands. / Her chair rolls backward and hits the ficus. / A leaf falls off. / It is plastic. / PRUDENCE: People will get burned. / BARRETT: Prudence. Breathe. / PRUDENCE: Don't tell me to breathe. / BARRETT: We have a mindfulness app. It's free for staff.
8. Prudence takes the marker out of his hand. / She crosses out ENTHUSIASM and writes FIRE in letters a foot tall. / The marker squeaks. / Barrett's smile flickers, then holds. / BARRETT: That's not on brand. / PRUDENCE: Neither is a lawsuit. / BARRETT: Now you're being negative. / PRUDENCE: I'm being accurate.
9. Barrett slides off the yoga ball. / It rolls away and bumps a wall. / He picks up his headset, taps it. / BARRETT: Hey, Dale. Quick favor, can you hold the trucks?
10. He listens. / His face drops. / BARRETT: What do you mean, they left Tuesday?
11. Prudence stares at him. / Barrett slowly removes the headset and places it on the desk like a dead bird. / PRUDENCE: Tuesday. / BARRETT: There may have been a miscommunication. / PRUDENCE: You called me in here to talk me out of it. The trucks were already gone. / BARRETT: I was going to loop you in. / PRUDENCE: You were going to loop me out.
12. She picks up her notebook. / Barrett stands very still. / The neon sign hums. / Prudence flips to a fresh page, writes something, tears it out, and sets it on his desk. / BARRETT: What is this? / PRUDENCE: My resignation. And the number for the fire marshal.
13. She walks out. / The door swings behind her. / Barrett stares at the page. / He sits on the floor where the yoga ball used to be, and the neon sign flickers off.

### s00682
0. A fire dying in a marble hearth. / Four chairs in a half-circle. / A decanter, four glasses, a ledger left open on the reading stand. / AUGUSTIN LORNE, 60s, shrunken in a velvet smoking jacket, sits nearest the fire. / His niece BEATRIX, 30s, stands behind his chair. / CEDRIC MOWBRAY, 40s, the family solicitor, occupies a leather wingback. / HESTER QUAYLE, 50s, the housekeeper, hovers at the door with her hands folded.
1. Beatrix pours for the men and does not pour for herself. / AUGUSTIN: Cedric, the clause. / CEDRIC: The clause is clear. / BEATRIX: Clear to whom? / CEDRIC: To anyone who reads. / HESTER: I read it twice. / AUGUSTIN: Of course you did, Hester.
2. BEATRIX: She was in the room when you signed. / HESTER: I was in the hall. / BEATRIX: Then you heard it through the door. / HESTER: The door was open. / CEDRIC: Doors are often open in this house. / AUGUSTIN: Not the study door. / BEATRIX: No. The study door is always locked.
3. HESTER: It was open on Thursday. / CEDRIC: Thursday? / HESTER: When the ledger went missing. / AUGUSTIN: The ledger is here. / BEATRIX: Because someone put it back. / CEDRIC: Or because it was never gone.
4. HESTER: Mr. Augustin, I told you I saw it on Thursday. Pages torn. Four of them. / AUGUSTIN: Four. / BEATRIX: There are four of us.
5. A silence. / The fire pops. / CEDRIC: Surely you are not suggesting -- / BEATRIX: I'm suggesting nothing. I'm counting.
6. AUGUSTIN: Hester. The pages. Where? / HESTER: In the second drawer of the hall cabinet. Under the umbrellas. / CEDRIC: You looked? / HESTER: I clean.
7. AUGUSTIN: Beatrix, fetch them.
8. Beatrix does not move. / Cedric slowly sets his glass on the table, Hester's eyes find the carpet, and Augustin lifts the poker from its stand and holds it across his knees.
9. AUGUSTIN: Whoever fetches them first.

### s00294
0. Palms press against the glass like prisoners. / A fountain, dry. / Wrought-iron chairs gone green with weather. / LADY CORDELIA WHITTINGTON-BANDELE (30s, bustled gown of dove gray, a face trained to give nothing away) sits with a teacup untasted in her gloved hands. / Across from her, MR. RUPERT ABERNETHY-ODUYA (40s, frock coat, whiskers meticulously combed) turns his hat in his fingers. / By the fountain's rim, partly hidden by a palm, stands MISS PHILIPPA LOVELACE (20s, governess' grey wool, spectacles), who has been told to wait and is waiting.
1. RUPERT: Lady Cordelia, I must speak plainly. / CORDELIA: Mr. Abernethy, you have never done otherwise, and I have never thanked you for it. / RUPERT: Then permit me to continue. / CORDELIA: Permit nothing. Say it.
2. He rises. / She rises. / Philippa shrinks behind the palm. / Rupert crosses the tiles in two strides and Cordelia steps back until her skirts catch the iron chair. / It scrapes. / The three of them freeze, an arrangement of statues in a house of glass.
3. RUPERT: Miss Lovelace, you may go. / PHILIPPA: Yes, sir. / CORDELIA: No, Philippa. Stay. / RUPERT: Cordelia--
4. CORDELIA: Mr. Abernethy, whatever you have to say about the letters, you may say before my governess. She wrote them.
5. Philippa lifts her chin. / The palm leaves stir, though there is no wind. / Rupert's hat slips from his hand and rolls, round and round, to the dry fountain's edge.

### s00199
0. Tall shelves, a crackling fire, a globe on a stand. / Candles in sconces. / Rain streaks the windowpanes. / LADY CORDELIA ASHWORTH-PEMBERTON, 30s, in an emerald gown, pours sherry. / Her cousin, LADY HENRIETTA VANE, 30s, in a lilac dress, stands at the fireplace, fanning herself. / LORD EDMUND FITZWILLIAM-OKAFOR, 40s, in a black coat, leafs through a book. / Their butler, HOBSON, 60s, stands by the door with a salver.
1. CORDELIA: Henrietta, you are quiet tonight. / HENRIETTA: I am always quiet. / CORDELIA: You are never quiet. / HENRIETTA: Then I am tonight.
2. EDMUND: She has a secret. / HENRIETTA: I do not. / EDMUND: Her fan has stopped. She only stops fanning when she is lying. / HENRIETTA: Cordelia, tell him he is insufferable. / CORDELIA: He is insufferable. / EDMUND: Thank you. / CORDELIA: It was not a compliment. / EDMUND: It was from you.
3. HENRIETTA: Enough. I will tell you. / CORDELIA: Do. / HENRIETTA: Father has accepted an offer for my hand. / CORDELIA: From whom? / HENRIETTA: From Lord Ravenscroft.
4. EDMUND: Ravenscroft is sixty. / HENRIETTA: Sixty-two. / CORDELIA: Henrietta. / HENRIETTA: He has a fine estate. / EDMUND: He has a fine gout.
5. CORDELIA: Do you wish to marry him? / HENRIETTA: I do not wish to do anything. / CORDELIA: Then do not. / HENRIETTA: It is not so simple. / EDMUND: It is exactly so simple. Tell your father no. / HENRIETTA: You do not know my father. / CORDELIA: I do. He is a dreadful man. / HENRIETTA: Cordelia! / CORDELIA: Well, he is.
6. Hobson steps forward and presents the salver. / A single letter, sealed in red. / HOBSON: For Lady Henrietta, my lady.
7. Henrietta takes it with careful fingers. / She opens it. / Reads. / Her fan drops. / Cordelia and Edmund exchange a look.
8. HENRIETTA: He is dead. / EDMUND: Who? / HENRIETTA: Ravenscroft. This morning.
9. Silence. / The fire pops. / Cordelia sets down the sherry. / She takes Henrietta's hand. / CORDELIA: Then you are free. / HENRIETTA: Yes. I am.
10. She laughs, a short, shocked sound. / Then she cries. / Edmund closes his book. / Hobson quietly withdraws.

### s00226
0. A cramped booth above a concrete silo. / Dials, a swivel chair, a space heater. / Through the window, conveyor belts hang motionless in the dark. / LEONIDAS PAPADAKIS (50s, county auditor, windbreaker) sits at the desk with a ledger open. / He checks numbers with a pencil. / He is calm.
1. Boots on the iron stairs. / The door opens. / CORA BEAUMONT-TEAGUE (40s, elevator manager, rolled sleeves) enters with two chipped mugs of coffee. / CORA: Cream? / LEONIDAS: Black's fine. / She hands him a mug. / He sips. / She doesn't.
2. CORA: Long drive from the county seat. / LEONIDAS: Two hours. I like the quiet. / CORA: Nothing quieter than a silo at midnight.
3. He nods and turns a page. / She studies the back of his head. / LEONIDAS: The weigh tickets for September match the bank deposits. / CORA: Good. / LEONIDAS: October's a little thin. / CORA: Rain. Hauling slowed. / LEONIDAS: Mm.
4. He turns another page. / Behind him, a shadow crosses the window. / Cora sees it. / She doesn't blink.
5. LEONIDAS: It's the volume I can't square. Four thousand bushels, gone on paper. / CORA: Spillage. / LEONIDAS: That's a lot of spillage. / CORA: It's a big elevator.
6. He closes the ledger. / Looks at her for the first time. / LEONIDAS: I'd like to use your phone. / CORA: Line's down. / LEONIDAS: It was working an hour ago. / CORA: Storms. / There are no storms. / Both of them know it.
7. He reaches for the receiver on the wall. / She reaches for it too. / Their hands land on it together. / They freeze, her fingers over his, the heater ticking. / CORA: Don't. / LEONIDAS: Let go. / She grips harder. / He twists. / The mugs rattle off the desk and shatter, coffee across the ledger. / They stumble apart, both breathing hard.
8. LEONIDAS: I've already sent copies to the state office. / Cora lets go of the phone. / She sinks into the swivel chair. / CORA: When? / LEONIDAS: Tuesday.
9. She begins, quietly, to laugh. / CORA: Then why did you drive out? / LEONIDAS: To give you a chance to explain.
10. Outside, the conveyor belts begin to turn on their own.

### s00858
0. Glass cases in long, shadowed rows: a snarling bear, a heron on one leg, a family of foxes frozen mid-pounce. / A moth circles the one working lamp. / Dust lies in a fine gray veil across everything. / MONTAGUE FINCH, sixties, the museum director, stands under the lamp with a gold pocket watch in his hand and a smudge of dust on his cuff. / PHILIPPA HOLT, forties, a private detective in a green overcoat, kneels beside the heron's case, shining a penlight on the lock. / DASHIELL WREN, thirties, the night guard, stands in the doorway with a baton and a sour expression. / XIMENA ROJAS, twenties, the intern, clutches a sheaf of loan forms against her chest. / LUDO PETRIE, fifties, the taxidermist, sits on a stool in the corner with a sleeve of his cardigan unraveling in his fingers.
1. PHILIPPA: The lock wasn't forced. / MONTAGUE: Then someone had a key. / DASHIELL: Only three keys exist. Mine. Mr. Finch's. And the taxidermist's. / LUDO: Mine's in my pocket.
2. He proves it by pulling out a ring, jingling it, and returning it. / Montague turns his watch over in his palm. / Philippa lifts the lid of the case, takes out a single feather with a pair of tweezers, and holds it up to the lamp. / Dashiell shifts his weight and reaches for a handkerchief. / Ximena sets the loan forms on a bench, then picks them up again, as though they might be needed. / Ludo winds the loose thread of his cardigan around his finger until it goes white.
3. PHILIPPA: This isn't a heron feather. It's from an ibis. / MONTAGUE: I beg your pardon? / PHILIPPA: Someone swapped the specimen. The ibis is worth forty times the heron.
4. XIMENA: I catalogued it last month. It was an ibis, in case nine. / DASHIELL: Case nine is empty.
5. LUDO: It was never empty.
6. Everyone turns to look at him. / He lets the thread fall.

### s00392
0. A cracked lot. / A blank screen the size of a barn. / Speaker poles stand in rows like headstones. / One lamp burns over a concession shack. / PELL PELLEGRINO, 50s, in a loud tie and a camel coat, sits on the hood of a Buick with a briefcase on his knee. / ODESSA LANE, 40, a plainclothes detective in a gray raincoat, walks across the gravel with her hands visible.
1. ODESSA: You're early. / PELL: I like to see who comes. / ODESSA: Just me. / PELL: Just you. Nice of them. / ODESSA: You asked for me. / PELL: I asked for the one who wouldn't bring a van.
2. Odessa stops ten feet away. / She lowers her hands, one of them drifting to the lining of her coat. / Pell opens the briefcase an inch and looks inside, then up. / A moth circles the lamp, crashing, crashing. / Down the lot, a dog barks twice and gives up.
3. Pell slaps the case shut, hops off the hood, and takes a step, and Odessa takes a step, and the gravel cracks under both of them.
4. PELL: You know what this lot used to show? / ODESSA: Westerns. / PELL: Every Friday. My father brought me. Dust, horses, a man in a hat who always knew the way out. / ODESSA: Pell. / PELL: He never did. Know the way. He just had the hat.
5. ODESSA: Where's Sal? / PELL: Sal's on the snack bar roof. With a rifle.
6. She doesn't look up. / She keeps her eyes on his. / ODESSA: You're telling me.
7. PELL: I'm telling you because I like you. / ODESSA: That's not why. / PELL: No. I'm telling you because you'll understand it's an insult. / ODESSA: He won't shoot.
8. PELL: He would. But I'd like to make you an offer first. / ODESSA: Go on.
9. PELL: I'll give you the briefcase. All of it. Names, dates, drops, three judges, and the mayor's cousin. In return, tonight, you go home. You never found me. / ODESSA: That's a lot of names for a woman who can't be trusted. / PELL: You're the only one who can't be bought. That's the point.
10. She looks at the roof of the snack bar. / A silhouette, a barrel. / She looks back.
11. ODESSA: Put it on the ground. / PELL: Detective. / ODESSA: Put it on the ground, Mr. Pellegrino, and tell your friend to climb down.
12. Pell holds the briefcase for a long beat. / Then he lowers it to the gravel.
13. The lamp flickers. / On the snack bar roof, the silhouette does not move.

### s00633
0. A steel counter, a rattling stockpot, windows fogged by the steam. / The boat rolls gently.
1. PHILOMENA OKAFOR-BRANDT, seventies, the ferry's cook, stirs without looking. / A YOUNG MAN, twenties, stands at the galley door, soaked, holding a small suitcase against his chest. / PHILOMENA: We're closed to the public. / YOUNG MAN: I'm not the public.
2. She turns. / She sees his face. / The ladle stays in her hand, dripping. / PHILOMENA: You have your father's jaw. / YOUNG MAN: That's what Mum said. / PHILOMENA: Sit.
3. He does. / She ladles soup into a mug and sets it before him, her hand trembling for an instant over the rim.
4. PHILOMENA: Name. / YOUNG MAN: Leo. / PHILOMENA: Leopold. / LEO: Leo. / PHILOMENA: I was going to say it's a fine name.
5. LEO: You didn't know I existed. / PHILOMENA: I knew every day.
6. They both stop. / They both stare into the soup. / The ferry's horn sounds, low and long, and the cups on the shelf chime against their hooks.
7. Leo takes up the spoon, and Philomena sits down across from him at last. / Their hands meet on the counter, and neither moves away.

### s00264
0. Concrete. / Sodium light. / A car idling, engine just above a whisper. / DETECTIVE CASSIUS ONWUDIWE-HARLOW (50s, stained trench, thermos in the cupholder) sits behind the wheel. / Alone.
1. He watches an elevator door. / It does not open.
2. He turns off the engine. / Silence. / A drip somewhere.
3. He picks up a cell phone. / Dials. / Puts it to his ear.
4. DISPATCH: Dispatch. / CASSIUS: Cassius Harlow. Badge two-one-four. I'm on P3 at the Meridian. / DISPATCH: Copy, Detective. Status? / CASSIUS: Stakeout. Nothing yet. / DISPATCH: Need backup? / CASSIUS: No.
5. DISPATCH: Detective, it's two a.m. / CASSIUS: I know what time it is. / DISPATCH: You've been there six hours. / CASSIUS: Seven.
6. He sets the phone on the dash. / Opens the thermos. / Pours coffee into the cap. / Sips. / Winces. / CASSIUS: Cold.
7. He watches the elevator again. / A light above the door blinks: 3. / Then dims.
8. CASSIUS: Come on. Come on, you son of a--
9. The elevator dings. / The door slides open. / Empty.
10. He sits very still. / Then slowly lets out a breath. / Closes his eyes. / CASSIUS: Not tonight.
11. The phone buzzes on the dash. / He picks it up.
12. DISPATCH: Detective, the subject has been detained at the airport. You're clear to stand down. / CASSIUS: Airport. / DISPATCH: He never came to the Meridian. / CASSIUS: Of course he didn't. / DISPATCH: Go home, Cassius. / CASSIUS: Copy.
13. He ends the call. / Puts the thermos back in the cupholder. / Starts the engine. / CASSIUS: Seven hours.
14. He backs out slowly. / The elevator door slides shut behind him on its own.

### s00543
0. Sodium lights. / Oil stains. / One car left, a faded blue sedan with a flat front tire. / The city glows beyond the low concrete wall.
1. FRANCINE OYELOWO, 40s, a dental hygienist's scrubs under a trench coat, kneels at the flat with a jack and a lug wrench. / Her younger brother LEONARD "LENNY" OYELOWO, 30s, a rumpled courier's jacket, leans against the wall with a cigarette he hasn't lit.
2. She wrestles a lug nut. / It doesn't budge. / LENNY: Want me to? / FRANCINE: No. / LENNY: It's been twenty minutes. / FRANCINE: Then it's been twenty minutes.
3. He pockets the cigarette. / Watches. / She grunts, adjusts her grip, tries again.
4. LENNY: Fran. / FRANCINE: Don't. / LENNY: I didn't say anything. / FRANCINE: You said "Fran" like you were going to say something. / He lets that sit. / Wind carries the faint sound of a siren from the street.
5. LENNY: Mom called. / She stops. / The wrench hangs from her hand. / FRANCINE: When? / LENNY: This morning. She asked if you were coming Sunday. / FRANCINE: And what did you say? / LENNY: I said I'd ask. / FRANCINE: Why would you ask me? / LENNY: Because you won't answer her.
6. She resumes. / Harder. / The wrench scrapes. / The lug nut turns half a rotation.
7. FRANCINE: She's been telling people I'm "away on business." / LENNY: It's easier than saying you left. / FRANCINE: I didn't leave. I moved. / LENNY: Four hundred miles is leaving.
8. She rocks back on her heels. / Looks up at him. / Her face is wet, but her voice is level. / FRANCINE: You want to talk about leaving? You sent a postcard for two years. / LENNY: It was a good postcard. / FRANCINE: It said, "Weather's nice." / LENNY: It was.
9. A brittle laugh escapes her. / He allows himself a half smile. / Then it fades.
10. LENNY: I should've called. / FRANCINE: Yes. / LENNY: I should've come. / FRANCINE: Yes. / LENNY: I'm here now. / FRANCINE: You're here because my car broke down. / LENNY: No. I'm here because I got the text.
11. She stares. / He takes the wrench from her hand, kneels, fits it on the lug nut. / Braces. / Leans his full weight.
12. It gives with a crack. / FRANCINE: Show-off. / LENNY: Always.
13. He keeps going. / Four nuts, a flat, the spare. / She hands him each tool before he asks. / They work in silence for a long minute, side by side, in the rhythm of two people who learned this from the same father.
14. FRANCINE: Dad hated the way you held the wrench. / LENNY: Dad hated everything I held. / FRANCINE: That isn't true. / LENNY: He hated the way I held you. When you cried.
15. She freezes. / FRANCINE: You remember that? / LENNY: Every day.
16. She turns away, looks out over the wall at the lit city. / Her shoulders shake once. / He doesn't touch her. / He keeps working.
17. FRANCINE: Why now? / LENNY: Because Mom's sick, Fran. / The words hang. / She does not turn. / FRANCINE: How sick? / LENNY: Sick.
18. She closes her eyes. / Presses both hands against the cold concrete. / FRANCINE: You waited till the rooftop to tell me. / LENNY: You wouldn't have heard it anywhere else.
19. She nods. / Slowly. / A man's hand and a woman's hand finally touch on the wrench, and neither moves.
20. FRANCINE: Sunday. / LENNY: Sunday.
21. She takes the wrench. / Finishes the last nut herself.

### s00477
0. Ninety beds in perfect rows. / A neon sign: SLEEP KINGDOM. / Rain on the roll-up door. / One security light, buzzing.
1. A MAN in a bathrobe (50s, slippers, a thermos of soup) sits on the edge of a king-size display, staring at the ceiling.
2. GUARD DESHAWN (30s, polyester uniform, flashlight) enters from the back office. / Stops. / Raises the flashlight. / GUARD DESHAWN: Sir.
3. The man waves without looking. / MAN: Evening. / GUARD DESHAWN: Sir. We are closed. / MAN: I know.
4. GUARD DESHAWN: How did you get in? / MAN: Ordered a delivery. Left the door ajar. Your driver was very nice. / GUARD DESHAWN: You can't be here.
5. MAN: I haven't slept in six weeks. Do you know what that does to a person? / GUARD DESHAWN: No. / MAN: It does something. Not good. I keep seeing a man in the corner of the room. Turns out it's a coat rack. But the point stands.
6. GUARD DESHAWN: Sir. I will have to call someone. / MAN: Call whoever you like. Let me just try this one for ten minutes. / GUARD DESHAWN: It's a three-thousand-dollar mattress. / MAN: Hence the ten minutes.
7. GUARD DESHAWN: I'm going to need your name. / MAN: Gilbert. / GUARD DESHAWN: Gilbert what? / GILBERT: Gilbert Ferreira-Whitlock. Hyphenated, a long story, involves a cousin. / GUARD DESHAWN: Mr. Whitlock. / GILBERT: Ferreira-Whitlock. The hyphen is the whole point.
8. GUARD DESHAWN: Gilbert. My shift ends at six. / GILBERT: Then we have six hours. / GUARD DESHAWN: You don't have six hours. You have until I call my manager.
9. GILBERT: Your manager is Brenda. Brenda told me, and I quote, "he's a sweetheart, let him sleep." / GUARD DESHAWN: When? / GILBERT: Tuesday. At the open house. I do not remember it clearly but I trust Brenda.
10. GUARD DESHAWN: There is no open house on Tuesday. / GILBERT: Then it was a dream. A very restful dream. / GUARD DESHAWN: Gilbert, please.
11. GILBERT: Deshawn. May I call you Deshawn? It says Deshawn on the tag. / GUARD DESHAWN: It says GUARD DESHAWN on the tag. / GILBERT: That's what I said. / GUARD DESHAWN: You said Deshawn. / GILBERT: It's a lovely name.
12. Deshawn sits on the next bed over. / Springs sigh. / He puts the flashlight on his knee.
13. GUARD DESHAWN: My mother had a bed like this. / GILBERT: Did she sleep well? / GUARD DESHAWN: She did. / GILBERT: There. You see.
14. Gilbert lies down in his robe, hands folded on his chest. / He closes his eyes. / GILBERT: Don't leave. I might wake up.
15. GUARD DESHAWN: Ten minutes. / GILBERT: Ten minutes.
16. Deshawn lies back. / The neon buzzes. / The rain keeps on.
17. Two snores, nearly in unison.

### s00029
0. A glass-walled octagon above a dark runway. / Radar scope glows green. / A cold cup of coffee sits beside a ham sandwich with one bite out of it. / OSWALD "OZZIE" FAIRWEATHER (60s, headset, cardigan) sits at the console, steady and unhurried. / Next to him stands his granddaughter, PRUDENCE "PRU" FAIRWEATHER (17, school uniform, backpack), holding a notebook. / She is supposed to be doing homework. / She is not. / Two others fill the cramped room. / One is MARTIN ESPERANZA (30s, shift supervisor, tie loosened), who hovers over the radar. / The other is a trainee, JUNE TAKAHASHI (19, apron over uniform, nervous), who clutches a clipboard.
1. OZZIE: Pru, if you're going to watch, watch properly. Come around here. / PRU: Grandpa, I'm fine. / OZZIE: Come on.
2. She steps beside him. / He nods to the scope. / OZZIE: That blip is a Cessna. November-Four-Two-Seven. See how she drifts? / PRU: Why? / OZZIE: Crosswind. He's fighting it.
3. Pru leans closer. / Her breath fogs the glass.
4. PILOT: Tower, Cessna Four-Two-Seven, ten miles out, requesting landing. / Ozzie squeezes the mic. / OZZIE: Four-Two-Seven, Tower, runway two-seven, wind two-six-zero at eighteen gusting twenty-five. Say your fuel state. / PILOT: Tower, Four-Two-Seven, thirty minutes of fuel. We're good.
5. MARTIN: Thirty minutes. In that wind. / JUNE: Should I call the fire crew? / MARTIN: Not yet.
6. Ozzie hands the headset to Pru. / PRU: Grandpa, no. / OZZIE: Just say what I say. "Four-Two-Seven, cleared to land."
7. She hesitates, then pulls the headset on. / Her voice shakes. / PRU: Four-Two-Seven, cleared to land.
8. PILOT: Cleared to land, Four-Two-Seven. Who's this? You sound young. / PRU: Um. I'm... training. / PILOT: Good job, trainee. See you on the ground.
9. Pru stares at her grandfather, wide-eyed. / He chuckles and pats her shoulder. / OZZIE: Eyes on the scope, Pru. That's the whole job.
10. Below them, tiny landing lights wobble through the dark, steadying, lowering. / They all watch it touch down.

### s00498
0. A fenced paddock, hay bales, a goat in a party hat. / Kids shriek in the distance.
1. DARIUS FENWICK-ODOM (40s, host dad, apron over a polo) carries a tray of juice boxes to the pen, whistling. / His wife SOLEDAD (40s, sunglasses, a phone in each hand) trails him, texting. / Her mother PAULINE (70s, lawn chair, thermos) watches from the gate. / The ZOO KEEPER, MR. RIBEIRO (50s, overalls, bucket), leans on a fence post.
2. He sets down the tray. / She sets down a phone. / Pauline lifts her thermos in salute.
3. DARIUS: Seven kids. One goat. What could go wrong? / MR. RIBEIRO: Don't say that. / SOLEDAD: Darius, don't. / PAULINE: Let the man speak.
4. The goat lowers its head. / It eyes the tray. / It eyes Darius.
5. DARIUS: Nice goat. / MR. RIBEIRO: That's Gerald. / SOLEDAD: Gerald is wearing a party hat. / PAULINE: So is the cake.
6. They all turn. / Behind them, the cake sits on a hay bale, fully intact, a three-tier unicorn.
7. Gerald trots toward it. / DARIUS: Gerald, no. / MR. RIBEIRO: Gerald, heel! / SOLEDAD: Mother, move your chair!
8. Gerald hits the hay bale at a full run. / Frosting rains over all four of them.
9. Pauline, sprayed pink from head to toe, lowers her thermos and says, perfectly calm: / PAULINE: Well. That's a fun party.

### s00401
0. Concrete. / Fluorescent hum. / A steel door the size of a garage stands half-open at the end of the hall. / A cleaning cart is parked against the wall, its mop bucket empty. / ARTUR VOSS, 40s, in a gray cleaner's coverall, walks down the corridor with a push broom. / He moves with a lazy rhythm, humming. / LENNOX BAILEY, 30s, in an identical coverall, follows a few steps behind, carrying a clipboard.
1. ARTUR: You're nervous. / LENNOX: I'm not nervous. / ARTUR: You're humming. / LENNOX: You're humming. / ARTUR: I always hum. / LENNOX: Then so do I.
2. They stop at the vault door. / The broom hangs from Artur's hand. / Lennox taps the clipboard on his thigh.
3. ARTUR: Check the schedule. / LENNOX: It says night staff leaves at midnight. / ARTUR: What time is it? / LENNOX: Eleven fifty-one.
4. ARTUR: He's late. / LENNOX: He's early. He said eleven fifty-five. / ARTUR: Who said? / LENNOX: He did. / ARTUR: Which he? / LENNOX: The one with the keys.
5. Artur's smile is thin. / He leans the broom against the wall and wipes his palms on his hips.
6. ARTUR: He told you eleven fifty-five. / LENNOX: He told me. / ARTUR: He told me twelve ten. / LENNOX: Then one of us is lying. / ARTUR: Or he is.
7. They look at each other. / Lennox's clipboard has stopped moving.
8. Down the corridor, an elevator DINGS. / Both turn. / LENNOX: That's early. / ARTUR: Someone's coming. / LENNOX: Which one's he? / ARTUR: I don't know.
9. They stand very still as the elevator doors slide open. / A figure steps out, but it is cast in shadow and light, impossible to read. / He holds a ring of keys that jingles with each step.
10. The figure raises one hand. / Lennox's hand goes to his coverall pocket. / Artur's goes to the mop handle. / LENNOX: Who is it? / ARTUR: Don't move.
11. The figure stops ten feet away. / In the light, a chin, a mouth, a nervous smile.
12. LENNOX: Mr. Sherwin. / SHERWIN: Evening, boys.
13. Artur lets his breath out. / Lennox lets his out, too, and both look sheepish. / ARTUR: You're late. / LENNOX: He's early.
14. The keys jingle. / Sherwin steps closer, and in the corridor light we see what the shadows hid: a revolver, hanging loose at his side. / SHERWIN: I'm exactly on time.
15. Neither man moves.
16. ARTUR: Mr. Sherwin. What's the gun for? / SHERWIN: For the one of you who's going to ask what the gun is for. / LENNOX: That's Artur. / ARTUR: That's Lennox. / SHERWIN: It doesn't matter.
17. He raises the gun. / Artur dives behind the cart. / Lennox hits the floor. / The shot rings off concrete and the cart bucket rolls across the corridor, ringing like a bell. / ARTUR: He's got six! I count five! / LENNOX: Count again!
18. Another shot. / The fluorescent tube above them bursts. / Sparks. / Darkness.
19. The echo dies in the corridor, and in the dark someone, slowly, begins to hum.

### s00889
0. A narrow stone room under a vaulted ceiling. / Presses, bone folders, spools of waxed linen. / Every surface is stacked with half-finished volumes, their spines bare as ribs. / A single window frames the red roofs of the Alfama and a tram rattling past. / SOLEDAD IBARRA, 30s, in a leather apron, sits at the sewing frame with a needle in her hand, a loose braid down her back. / Ink stains her fingertips. / She is stitching a signature with practiced ease.
1. ARCHIE MENDELSOHN, 30s, a tall American in a rain-spotted jacket, stands in the doorway holding a battered book against his chest like a rescued animal. / SOLEDAD: You're late. / ARCHIE: I got lost. / SOLEDAD: You always get lost. / ARCHIE: It's a very confusing city. / SOLEDAD: It's a city with seven hills and one river. Even the pigeons find their way. / ARCHIE: The pigeons live here. / SOLEDAD: So do I. And I'm never late. / ARCHIE: You're never anywhere else.
2. She smiles despite herself, not looking up. / He crosses to the workbench and sets the book down in front of her. / Gently, as if it might bruise. / ARCHIE: That's the one. / SOLEDAD: Oh, Archie. What did you do to it? / ARCHIE: I dropped it in a canal. / SOLEDAD: In Venice. / ARCHIE: In Venice. / SOLEDAD: On purpose? / ARCHIE: It jumped. I'm telling you, it jumped. / SOLEDAD: Books don't jump. / ARCHIE: This one has a lot of feelings.
3. She opens the cover. / The pages are warped and rippled, the ink bled into soft blue clouds. / She runs a thumb along the gutter and lets out a slow breath.
4. SOLEDAD: Whose is it? / ARCHIE: My grandfather's. His diary. / SOLEDAD: Then why are you giving it to me? / ARCHIE: Because you're the best in Europe. / SOLEDAD: Flattery. / ARCHIE: Fact.
5. SOLEDAD: It will take weeks. / ARCHIE: I have weeks. / SOLEDAD: You have a plane ticket. / ARCHIE: I could lose the ticket. / SOLEDAD: You could. / ARCHIE: I could lose the whole plane. / SOLEDAD: Archie. / ARCHIE: Soledad.
6. The workshop door bangs open. / AUNT VELMA, 70s, a small woman in a patterned housecoat and bright orange slippers, sweeps in with a covered dish and a gust of cold air. / AUNT VELMA: Soledad! You haven't eaten. I brought cod. / SOLEDAD: Tia, I'm working. / AUNT VELMA: And who is this? / ARCHIE: Archie Mendelsohn, ma'am. I'm a client. / AUNT VELMA: A client who brings flowers?
7. He looks down. / He is, in fact, holding a very small bunch of wilted daisies in his left hand, crushed against the book. / He lifts them with a helpless shrug. / ARCHIE: They were fresh this morning. / AUNT VELMA: He is a client who brings flowers. / SOLEDAD: Tia. / AUNT VELMA: I will leave the cod.
8. She sets the dish on the nearest stack of paper, pats Archie's cheek once, and sweeps out. / The door slams. / The tram rattles by. / Soledad and Archie look at each other across the ruined book.
9. ARCHIE: She likes me. / SOLEDAD: She likes everybody. She feeds the pigeons. / ARCHIE: Do you? / SOLEDAD: Do I what? / ARCHIE: Like me.
10. She picks up the daisies. / Smooths one battered petal between thumb and finger. / SOLEDAD: Come back on Tuesday. I will tell you what the book needs. / ARCHIE: And the other thing? / SOLEDAD: The other thing takes longer.

### s00192
0. Wind scours the street. / A tumbleweed rolls past a sagging saloon. / A crooked sign reads "TIN CUP." / MARSHAL JEBEDIAH CROW, 50s, stands at one end of the street, a battered Colt on his hip. / Opposite him, OLETA BAINBRIDGE, 40s, in a black duster, rests a hand on her holster. / In the saloon doorway, SISTER MARGUERITE, 30s, a nun, clutches a lantern. / On the roof of the livery, a boy, PETEY NAKAMURA, 14, lies hidden with a rifle. / Behind a rain barrel crouches DEPUTY HOLLIS WAKEFIELD, 20s, sweating.
1. OLETA: You look older, Jeb. / JEBEDIAH: You look the same. / OLETA: That's the problem.
2. Marguerite steps down from the saloon porch, lantern swinging. / Petey adjusts his aim. / Hollis stands, then ducks. / SISTER MARGUERITE: Both of you, this is a house of God. / JEBEDIAH: It's a saloon, Sister. / SISTER MARGUERITE: It was a church first. / OLETA: Move aside, Sister. / SISTER MARGUERITE: I will not.
3. Oleta draws and fires. / The lantern shatters. / Marguerite screams. / Jebediah draws. / Petey's rifle cracks from the roof. / Oleta's hat flies off. / Hollis shouts and flings himself prone. / A second shot echoes. / Jebediah falls to one knee, hand to his shoulder.
4. JEBEDIAH: Who's up there? / OLETA: I thought he was yours. / JEBEDIAH: He's not mine. / PETEY: I'm nobody's!
5. Oleta looks at Jebediah. / Jebediah looks at Oleta. / She holsters her gun. / He does not. / OLETA: Seems we've both been ambushed. / JEBEDIAH: Seems so.
6. SISTER MARGUERITE: Then come inside, the lot of you. And bring the boy.
7. Hollis crawls out from behind the barrel. / Petey climbs down the ladder. / Jebediah, bleeding, offers Oleta his arm. / She takes it. / They walk to the saloon together as the wind picks up.

### s00617
0. Low steel ceiling. / Banks of amber monitors, each showing a different tunnel. / Condensation drips from the pipes. / A heavy vibration runs through the floor, steady as a heartbeat. / OKSANA PETRENKO, 40s, shift supervisor, stands at the central console, headset pushed down around her neck, tracking the cursor across a seismic readout that is steadily, quietly climbing. / BRAM VOLKOV, 30s, her second, leans on the next desk, a mug of chicory in one hand. / TAVITA FONOTI, 30s, a Samoan drill foreman, rests his weight against the door frame, still in his hard hat and orange vest, covered in grey rock dust. / JOSIE AMARU, 20s, a trainee, sits at a minor station in the corner, eyes huge, hands flat on her knees.
1. OKSANA: Bram. Look at tunnel four. / BRAM: I'm looking. / OKSANA: Is that normal? / BRAM: No.
2. TAVITA: It's moving. / OKSANA: The tunnel? / TAVITA: The wall.
3. He crosses and leans over Bram's shoulder. / On the monitor, a grey seam of rock ripples gently, as if breathing. / Bram sets down his mug. / Oksana adjusts the zoom. / Josie rises half out of her chair.
4. JOSIE: Ma'am, should I call it in? / OKSANA: Not yet. / JOSIE: It's been moving for six minutes. / OKSANA: I know.
5. BRAM: Oksana, if it's a fault line, we evacuate. / OKSANA: It's not a fault line. / TAVITA: Then what is it? / OKSANA: I don't know.
6. A deep, wet crack runs through the walls of the room. / Everyone freezes. / The condensation drips faster. / On the monitors, all six tunnel cameras show the same thing now: the rock seams opening, widening, a pale light pulsing behind them.
7. TAVITA: That's not in the survey. / BRAM: Nothing's in the survey.
8. OKSANA: All crews, this is control. Drop tools. Report to Lock Two. Repeat, drop tools and report to Lock Two.
9. No response but static. / She tries again. / Bram grabs a second headset and flips switches. / Tavita grips the door frame with both hands as the vibration climbs in pitch.
10. Josie stands, shaky, and takes the emergency alarm cover in one trembling hand. / JOSIE: Ma'am? / OKSANA: Pull it.
11. Josie flips the cover and presses the button. / The siren shrieks. / Red light floods the room. / The four of them stand motionless in the strobe, hearing the walls speak.
12. BRAM: He's right. It's breathing. / TAVITA: Who's he? / BRAM: The rock.
13. On the central monitor, the seam splits wide. / The pale light blooms. / For one frozen second, the feed shows a vast, bright cavern beyond the tunnel, ribbed and glittering, stretching into the dark below the world. / Then the camera goes dead. / One by one, the others follow.
14. Silence. / The siren stops, mid-wail. / The red lights hold.
15. OKSANA: Everybody listen to me. / They look at her. / She takes a breath. / OKSANA: Nobody goes down. Nobody. We seal the lifts, we flood the shafts, we get every person on this station topside and we stay topside until I say.
16. TAVITA: They'll fire you. / OKSANA: Let them.
17. BRAM: Oksana. What if they're already down there? / She doesn't answer. / Her hand finds the lift control. / Her thumb rests on the red cover.
18. Behind them, the floor shudders again, gently, like something far below turning over in its sleep.

### s00550
0. Glass cases glow under museum spots. / Padlocks shaped like hearts, a chastity belt, a Houdini handcuff, a Chubb detector from 1818. / The marble floor is clean enough to eat from.
1. CLEO ANTONOPOULOS, 30s, in a cleaner's grey uniform, pushes a mop bucket along the aisle. / Slow. / Humming. / Wringing the mop, slopping water. / At the far end of the gallery a vault door waits, painted gold. / Fake. / Almost.
2. BARNABY SOUTHWORTH, 50s, the curator, in a cardigan and bow tie, sits at the security desk with a crossword. / He is happy. / The room is quiet. / A radio plays softly.
3. BARNABY: Seven letters. "Opener of doors." / CLEO: Key? / BARNABY: Too short. / CLEO: Skeleton? / BARNABY: Nine. / CLEO: Master. / BARNABY: Six.
4. Cleo smiles. / Wrings the mop. / Water pools near a floor drain by the case of antique keys.
5. BARNABY: You're very diligent, Cleo. / CLEO: It's a good floor. / BARNABY: Most of the staff would've gone home. / CLEO: Most of the staff aren't paid by the hour.
6. He laughs. / She pushes the bucket another yard. / The wheels squeak. / He doesn't look up.
7. She taps a button on the handle of the mop. / A quiet click.
8. The security camera in the corner swivels, slow, until it faces the wall. / BARNABY: "Skeleton" doesn't fit, does it? / CLEO: No. / BARNABY: Well, I'm stuck. / CLEO: I'll help.
9. She sets down the mop. / Walks to the golden vault door and, from her bucket, produces a stethoscope and a small brass pick. / She presses her ear to the cold gold. / Turns a tumbler. / Another.
10. GUARD ENOCH BALOGUN, 40s, a thick neck and a creaking belt, rounds the corner with a flashlight, whistling. / He stops. / Looks at Cleo. / Looks at the open bucket. / Looks at the camera facing the wall.
11. ENOCH: Ma'am. / CLEO: Evening, Enoch. / ENOCH: That's not on the schedule. / CLEO: No.
12. Barnaby finally looks up, sees the guard, sees Cleo, sees the pick. / His pencil stops. / BARNABY: Oh, dear.
13. Enoch's hand drifts toward his radio. / Cleo's hand does not leave the vault. / Tumbler clicks. / A heavy thunk.
14. CLEO: Enoch. Put the radio down. / ENOCH: Ma'am -- / CLEO: Please.
15. He considers. / The radio comes down. / He steps aside, and with a courtly gesture, motions toward the vault. / ENOCH: After you.
16. Cleo pulls. / The door swings open on an empty velvet chamber with a single card: GONE FISHING. / She stares.
17. BARNABY: Seven letters. "Opener of doors." / ENOCH: Trickster. / BARNABY: Yes, that's it.

### s00245
0. Orange glow. / Pipes and pontils on racks. / Heat that bends the air. / MASTER ZORZI CAMPOSAMPIERO (60s, leather apron, burn-scarred forearms) shapes a molten bulb at the furnace mouth. / Slow turn. / Slow breath.
1. The door opens. / Rain. / ISABELLA DA MOLIN-OKAFOR (30s, travelling cloak, a velvet bag pulled tight against her chest) stands dripping.
2. ZORZI: Closed. / ISABELLA: I know. / ZORZI: Then why are you here?
3. ISABELLA: The Council sends their regards. / He stops turning. / The glass sags. / He rights it.
4. ZORZI: Tell the Council I have nothing to say. / ISABELLA: They'd like the formula. / ZORZI: They'd like the moon.
5. She crosses to the bench. / Sets the velvet bag down. / It clinks. / ISABELLA: This is yours. / ZORZI: What is it? / ISABELLA: A sample. Of what you made last winter.
6. He glances at the bag. / Then at her.
7. ZORZI: You stole it. / ISABELLA: I borrowed it. / ZORZI: From my own workshop.
8. ISABELLA: From your apprentice. / His jaw works. / The furnace roars. / Her cloak steams.
9. ZORZI: Giacomo. / ISABELLA: He's very young. / ZORZI: He's a fool. / ISABELLA: He's frightened.
10. Zorzi sets down the pipe. / Turns. / Picks up the long iron tongs. / ISABELLA: Master Zorzi.
11. ZORZI: Open the bag.
12. She does. / Inside: a glass bird, translucent blue, wings spread. / She lifts it into the glow. / It flickers like a pulse.
13. ISABELLA: The Council thinks it's witchcraft. / ZORZI: It's chemistry. / ISABELLA: They'll burn the shop. / ZORZI: They'll burn me first.
14. She sets the bird on the bench.
15. ISABELLA: I could leave it here. Tell them you destroyed it. / ZORZI: And Giacomo? / ISABELLA: Gone to Padua.
16. Zorzi laughs, short, ugly. / He lifts the tongs, steps toward her. / She doesn't move. / He raises the iron, and the bird glitters between them.
17. With one stroke, he smashes it. / Blue shards fly. / Isabella flinches. / Zorzi and Isabella both stand in the sudden silence, glass sparks drifting like fireflies.
18. ZORZI: Tell the Council it's ash. / ISABELLA: They'll want proof. / ZORZI: Then bring them the furnace.
19. He turns back to the fire. / After a long moment she picks up a single shard, slips it into her cloak, and goes out into the rain.

### s00203
0. Glass panes fogged with humidity. / Rows of orchids. / A watering can. / CASPIAN ODUYA, 40s, sorts seed packets at a potting bench. / VERONIKA STANISLAWSKI, 50s, sits on an upturned crate, sipping tea. / JUNE PAPADOPOULOS, 20s, leans on a shelf, headphones around her neck.
1. CASPIAN: The vault is on the third floor. The elevator needs a keycard. The stairwell has a camera. / VERONIKA: And the roof? / CASPIAN: Roof door is alarmed. But the greenhouse vent connects to the same shaft.
2. JUNE: How wide is the vent? / CASPIAN: Twenty inches. / JUNE: That's tight. / CASPIAN: You're small. / JUNE: I'm average. / VERONIKA: You're small, June. Be proud. / JUNE: I'm proud. I'm also claustrophobic.
3. CASPIAN: Veronika can talk you through. / VERONIKA: I'll hum. / JUNE: You'll hum? / VERONIKA: Whale songs. They help.
4. CASPIAN: We go Thursday. The night guard changes at ten. / VERONIKA: What about the dog? / CASPIAN: There's no dog. / VERONIKA: There was a dog last month. / CASPIAN: That was a different building. / JUNE: Can we confirm the dog? / CASPIAN: I'll confirm the dog. / VERONIKA: Good. / JUNE: Good.
5. They sit. / A drip falls from a leaf. / Veronika stirs her tea. / June drums on her knee. / Caspian sets down the seed packet.
6. CASPIAN: Anyone want a tomato? / VERONIKA: Is it a good one? / CASPIAN: Best on the roof. / JUNE: Obviously. It's the only one. / CASPIAN: Eat.

### s00236
0. Pastel walls. / Little urns on velvet shelves. / A framed poster: "Every Goodbye Deserves Dignity." / BEATRIX "BEA" LANGSTROM-OYELEYE (40s, funeral director, black pencil skirt, too-bright lipstick) stands at a small oak lectern with a sleeping ferret in a tiny casket beside her. / Seated in the front row, in folding chairs: GERALDINE "GERRY" POTTS (60s, widowed, tissue in fist) and her brother-in-law HECTOR MWENDA-ABERNATHY (60s, loud tie, sunglasses on indoors).
1. BEA: Friends. We are gathered to honor Nibbles. / GERRY: Oh, Nibbles. / HECTOR: He was a good ferret. / BEA: He was.
2. HECTOR: Smelled like a gym bag. / GERRY: Hector! / HECTOR: I'm saying it with love. / BEA: Perhaps we could hold the anecdotes until the reception. / HECTOR: I'm just saying he bit the mailman. / GERRY: He bit the mailman once. / HECTOR: Four times. / GERRY: Twice. / HECTOR: Four. I counted.
3. BEA: Let us bow our heads. / They do. / A pause.
4. A phone rings, tinny, from Hector's pocket. / HECTOR: Not now, Dennis. / DENNIS: Hector, did you tell her about the hamster?
5. GERRY: What hamster? / HECTOR: Dennis, I'm at a funeral! / DENNIS: Whose? / BEA: Nibbles's. / DENNIS: Oh no. He was a good ferret! / HECTOR: That's what I said! / GERRY: Hector, what hamster? / HECTOR: Nothing! A rumor! / BEA: Ladies, gentlemen, caller, please--
6. The casket lid pops open. / Nibbles sits up, yawns, stretches.
7. Silence in every key. / GERRY: He's alive. / HECTOR: He was asleep. / BEA: It happens. / DENNIS: What happens? Did he come back?
8. Hector hangs up. / Gerry scoops the ferret into her arms and sobs with joy. / GERRY: My boy! My Nibbles!
9. BEA: I'll prepare a refund. / HECTOR: Keep the flowers.
10. Nibbles bites Bea. / She yelps. / Hector nods, satisfied. / HECTOR: Four times.

### s00293
0. A low-ceilinged room with a linoleum floor and a coffee urn that has been warm since 1994. / Posters of tide pools on cinderblock walls. / Five chairs in a circle, one empty. / FACILITATOR DOLORES "DOLLIE" ENGSTROM-ACHEBE (60s, cardigan, kind eyes, a voice trained to be even) sits with a clipboard on her knee. / CORNELL BEAUMONT-ASANTE (40s, mechanic's hands scrubbed pink, work shirt with his name stitched on) grips a paper cup. / YASMINE KOWALSKI-HADDAD (30s, scrubs, hair coming loose, eyes bright with no sleep) sits with her feet tucked under her. / OLD MR. TIBERIUS FAIRWEATHER-MWANGI (80s, tweed cap in his lap, hearing aid whistling softly) leans on a cane. / HARPER DELACROIX-YAMAMOTO (17, hoodie, earbuds around neck) has chosen the chair nearest the door.
1. DOLLIE: Thank you for coming. Who would like to start? / CORNELL: I'll start. / DOLLIE: Thank you, Cornell.
2. CORNELL: My wife used to say I never talked. Said I could run a whole day on three words. Truth is I just never knew where to put the rest of them. / YASMINE: That's me with my mother. Eleven years of silence in the same kitchen. / CORNELL: And now she's gone. / YASMINE: And now the kitchen's loud.
3. TIBERIUS: What's that? / DOLLIE: She says the kitchen's loud, Tiberius. / TIBERIUS: Mine's the opposite. Mine hums. The refrigerator hums so much I think it's her.
4. HARPER: That's not weird. / TIBERIUS: It's a bit weird, young man. / HARPER: I'm not a man. / TIBERIUS: Young person, then. Forgive me. / HARPER: It's fine.
5. DOLLIE: Harper, would you like to share? / HARPER: No. / DOLLIE: That's all right. / HARPER: Okay, maybe. / A long pause. / The urn gurgles.
6. HARPER: My dad's phone still gets texts. I read them sometimes. People tell him about their day. I don't know why I keep reading. / YASMINE: You keep him company. / HARPER: He's not there.
7. YASMINE: Neither's my mother, and I still set two cups. / CORNELL: Two cups. / YASMINE: Every morning. / CORNELL: I do that with the truck. I leave the passenger seat clear. / TIBERIUS: What for? / CORNELL: In case. / TIBERIUS: Ah.
8. DOLLIE: It's a good thing, to leave room. / CORNELL: Is it? / DOLLIE: I think so. I leave a chair in this circle every week. For whoever isn't here yet. / HARPER: That's why there's an empty one. / DOLLIE: That's why.
9. TIBERIUS: It's not empty. My Winnie sits there. / Silence. / Nobody laughs.
10. CORNELL: Mine too. / YASMINE: Mine's in the kitchen. / HARPER: Mine's on the phone. / DOLLIE: Then we're full tonight.

### s00250
0. Strip lighting. / Mag-boots clank. / Crates stacked in nets. / A viewport shows a wreck turning slowly against the stars. / OKSANA REYNOLDS-ADEBOYE (40s, engineer, grease up to the elbows) crouches over an open hatch, a wrench in one hand. / She does not look up when the intercom hisses.
1. COMMS: Engineer. Bridge. Report. / She keeps working. / Turns a bolt. / Another.
2. OKSANA: Still on it. / COMMS: Captain wants a status on the coupling. / OKSANA: Tell the Captain it's a coupling. / COMMS: Copy.
3. She sets the wrench down. / Wipes her hands on her thighs.
4. From a vent behind her, a soft click. / She turns slowly. / Nothing. / But she picks the wrench back up.
5. A second figure floats in from the airlock: SIMEON AKINTOLA-VEGA (30s, flight tech, jumpsuit unzipped to the chest). / He anchors himself with one boot to a crate and stares at her.
6. SIMEON: You okay? / OKSANA: Fine. / SIMEON: You've been down here nine hours. / OKSANA: It's a big coupling.
7. SIMEON: Captain says come up. / OKSANA: Captain says what?
8. COMMS: Engineer, Captain says come up. Immediately. / OKSANA: Why? / COMMS: Something on the scanner. Something near the wreck.
9. Oksana and Simeon look at each other. / She tightens her grip on the wrench. / He zips his jumpsuit to the collar.
10. SIMEON: What is it? / COMMS: Unknown. Moving. Matching our heading. / OKSANA: How close? / COMMS: Twelve kilometers. And closing.
11. She lets the wrench drift. / It spins slowly in front of her, catching the light.
12. SIMEON: I'm going up. / OKSANA: Wait. / He waits.
13. Her eyes go to the viewport. / The wreck rotates; behind it, a shape too regular to be debris.
14. She says nothing. / Neither does he. / They float side by side.
15. COMMS: Engineer? Tech? Respond. / Simeon opens his mouth. / Closes it.
16. Oksana presses the intercom. / OKSANA: We're coming up.
17. She lets go. / Drifts across the bay. / At the door she stops, lays one palm flat on a crate as if for luck.
18. Then she follows Simeon into the corridor.

### s00393
0. A tiny steel kitchen. / A porthole shows black water. / Pans hang on a rail and sway with the swell. / ARASH, 60, cook, in a white apron, rolls dough on a floured board. / CLEMENTINE, 30s, in a navy coat, sits on a stool by the oven. / ABEL, 30s, in shirtsleeves, leans in the doorway with a paper cup of tea.
1. ARASH: You two can talk. I'm deaf in the oven ear. / CLEMENTINE: You don't have an oven ear. / ARASH: I have a lot of ears.
2. ABEL: Clem. / CLEMENTINE: Abel.
3. ABEL: Thirty-one days. / CLEMENTINE: Thirty-two. It's after midnight. / ABEL: Thirty-two, then.
4. CLEMENTINE: I wrote you. / ABEL: You wrote me once. / CLEMENTINE: I wrote you a very good one. / ABEL: It was good. It said you'd be somewhere else. It didn't say where. / CLEMENTINE: I didn't know where. / ABEL: You're on a ferry. / CLEMENTINE: It was where the ferry was going.
5. Arash turns the dough, folds it, turns it again. / The ferry rolls. / The pans clang softly.
6. ABEL: You could have called. / CLEMENTINE: So could you. / ABEL: I did. Four times. / CLEMENTINE: I know. / ABEL: You knew. / CLEMENTINE: I listened to every one. / ABEL: And? / CLEMENTINE: And I didn't pick up.
7. ABEL: Why not? / CLEMENTINE: Because you'd have asked me to come back, and I'd have said yes.
8. A silence. / The oven ticks. / Arash's hands slow on the dough.
9. ABEL: And that's bad. / CLEMENTINE: It was then. / ABEL: And now?
10. CLEMENTINE: Now I'd ask you to get on the ferry. / ABEL: I am on the ferry.
11. CLEMENTINE: I know. I saw you at the dock. / ABEL: You saw me. / CLEMENTINE: Thirty-two days. I know your walk from a quarter mile.
12. Abel sets down the tea. / Arash, without turning, sets down the rolling pin. / He wipes his hands, takes his coat from the hook, and goes out. / The door swings shut behind him.
13. ABEL: Is it too late for the thing I wrote? / CLEMENTINE: Which thing? / ABEL: The reply. / CLEMENTINE: You never sent a reply. / ABEL: I wrote one every night.
14. He pulls a bundle of letters from his jacket, tied with kitchen twine. / She stares at it, then takes it. / Her thumb passes across the top envelope.
15. CLEMENTINE: Read me the first. / ABEL: It just says your name.
16. She nods. / He begins to say it.

## Comparisons
p0: a = s00889 beat 9 | b = s00776 beat 9
p1: a = s00199 beat 10 | b = s00264 beat 14
p2: a = s00192 beat 4 | b = s00601 beat 6
p3: a = s00932 beat 4 | b = s00633 beat 1
p4: a = s00543 beat 8 | b = s00972 beat 9
p5: a = s00236 beat 10 | b = s00802 beat 6
p6: a = s00776 beat 11 | b = s00477 beat 16
p7: a = s00543 beat 6 | b = s00723 beat 9
p8: a = s00304 beat 6 | b = s00167 beat 13
p9: a = s00052 beat 1 | b = s00322 beat 2
p10: a = s00199 beat 1 | b = s00378 beat 12
p11: a = s00550 beat 3 | b = s00078 beat 7
p12: a = s00292 beat 2 | b = s00199 beat 2
p13: a = s00972 beat 15 | b = s00250 beat 10
p14: a = s00163 beat 9 | b = s00392 beat 9
p15: a = s00418 beat 7 | b = s00393 beat 2
p16: a = s00709 beat 16 | b = s00293 beat 7
p17: a = s00052 beat 3 | b = s00378 beat 6
p18: a = s00392 beat 9 | b = s00167 beat 3
p19: a = s00226 beat 10 | b = s00550 beat 14
p20: a = s00052 beat 16 | b = s00322 beat 2
p21: a = s00617 beat 1 | b = s00197 beat 4
p22: a = s00040 beat 8 | b = s00378 beat 7
p23: a = s00166 beat 10 | b = s00709 beat 16
p24: a = s00498 beat 3 | b = s00052 beat 6
p25: a = s00167 beat 3 | b = s00142 beat 9
p26: a = s00250 beat 1 | b = s00401 beat 6
p27: a = s00392 beat 3 | b = s00226 beat 6
p28: a = s00264 beat 1 | b = s00479 beat 8
p29: a = s00236 beat 9 | b = s00617 beat 3
p30: a = s00723 beat 6 | b = s00543 beat 18
p31: a = s00802 beat 2 | b = s00430 beat 8
p32: a = s00682 beat 9 | b = s00167 beat 2
p33: a = s00543 beat 13 | b = s00709 beat 14
p34: a = s00550 beat 7 | b = s00293 beat 3
p35: a = s00304 beat 2 | b = s00498 beat 0
p36: a = s00100 beat 2 | b = s00589 beat 10
p37: a = s00292 beat 5 | b = s00889 beat 4
p38: a = s00052 beat 15 | b = s00550 beat 1
p39: a = s00589 beat 10 | b = s00748 beat 9
p40: a = s00237 beat 8 | b = s00858 beat 1
p41: a = s00802 beat 12 | b = s00166 beat 6
p42: a = s00078 beat 1 | b = s00226 beat 3
p43: a = s00294 beat 1 | b = s00858 beat 5
p44: a = s00167 beat 9 | b = s00250 beat 16
p45: a = s00972 beat 6 | b = s00589 beat 3
p46: a = s00245 beat 0 | b = s00477 beat 17
p47: a = s00418 beat 11 | b = s00748 beat 16
p48: a = s00163 beat 14 | b = s00392 beat 8
p49: a = s00709 beat 15 | b = s00802 beat 10
p50: a = s00293 beat 6 | b = s00236 beat 5
p51: a = s00264 beat 11 | b = s00723 beat 29
p52: a = s00723 beat 9 | b = s00226 beat 5
p53: a = s00430 beat 8 | b = s00197 beat 5
p54: a = s00401 beat 1 | b = s00322 beat 1
p55: a = s00167 beat 6 | b = s00100 beat 1
p56: a = s00163 beat 9 | b = s00392 beat 0