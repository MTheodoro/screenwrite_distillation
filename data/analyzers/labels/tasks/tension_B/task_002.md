You are a computational linguist building a coreference and discourse corpus. For each sentence, first decide silently what every pronoun and noun phrase refers to, then label. Prefer the reading a careful reader would settle on, and lower your confidence when two readings are plausible.

Rate dramatic tension. Below are scenes split into numbered beats.

1. For every scene, give one score 0-100 per beat (same order).
2. Then answer each cross-scene comparison: which beat is MORE tense, "a", "b" or "tie".

Tension = what a reader feels: stakes, conflict, threat, urgency, suspense. Loud or violent is not automatically
tense; a quiet threat can be very tense. Absolute anchors: 0-15 calm/mundane, 15-35 mild friction or unease,
35-60 clear conflict or suspense, 60-80 high stakes, open confrontation or danger, 80-100 peak life-or-death /
climactic moment.

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/tension_B/group_004.json with the Write tool:
{"scores": {"<scene_id>": [..], ...}, "pairs": {"<pair id>": "a"|"b"|"tie", ...}}
Valid JSON only. Reply only with "done".

## Scenes

### s01035
0. Shelves of magnets, snow globes, sunscreen. / The registers are dark. / Emergency strips light the floor. / Through the glass storefront, an empty promenade deck rocks gently at anchor.
1. RENATA KOVAC, 40s, ship's purser, hair in a messy bun, uniform jacket unbuttoned, sits behind the counter with a radio on her knee. / MILES TOBIN, 30s, ship's doctor, mask around his chin, leans on a shelf. / ADEBAYO ROSS, 50s, passenger, bathrobe, paper slippers, pretends to read a paperback.
2. The radio crackles. / CAPTAIN HALE: Shop, this is the bridge. Status. / RENATA: Three souls, sir. All calm. / CAPTAIN HALE: Keep them there. We've got a boat coming at dawn. / RENATA: Understood.
3. She sets the radio down. / The silence returns.
4. ADEBAYO: Two weeks on a boat, and the one thing they sell me is snow globes. / MILES: You can have mine. / ADEBAYO: Does it come with a cure? / MILES: It comes with a mild placebo effect.
5. Adebayo laughs, then coughs. / Miles straightens, watches him.
6. MILES: Sir, how long has that been going? / ADEBAYO: It's a tickle. / MILES: How long? / ADEBAYO: Since Tuesday.
7. Renata stiffens. / She slides her hand slowly toward the radio.
8. RENATA: Everyone stay exactly where you are. / MILES: Renata. / RENATA: Don't. / MILES: He's not necessarily-- / RENATA: You said no one on this deck was symptomatic.
9. Miles opens his mouth. / Closes it.
10. ADEBAYO: I should've stayed in the cabin.
11. The storefront lights flicker. / Outside, a searchlight sweeps the promenade. / Then a second. / Then a third, from a hull that isn't theirs.
12. RENATA: That's not the dawn boat. / MILES: No.
13. She lifts the radio. / RENATA: Bridge, we have lights on the promenade.
14. Static. / Nothing. / She tries again. / RENATA: Bridge?
15. CAPTAIN HALE: Don't open the door. They're not ours.

### s01048
0. A cinderblock studio in a cornfield. / Foam-padded walls, a mixing board with taped-over knobs, a window onto the black field. / A red ON AIR light burns.
1. DEE-DEE HARGROVE, 40s, headphones, cardigan, a thermos of tea, sits at the console. / She speaks into the mic in the voice of a lifelong friend.
2. DEE-DEE: That was Patsy Cline, and you're listening to Night Owls on KRVX. Four a.m. in Calloway County. Roads are clear and the corn is quiet.
3. She flicks a switch. / Music slides in. / She leans back.
4. ROLAND TIBBETTS, 60s, station engineer, in coveralls, enters with a toolbox and a flashlight. / He sets the box down next to a cabinet of cables.
5. ROLAND: Transmitter's running hot again. / DEE-DEE: Is it going to melt? / ROLAND: Not tonight. / DEE-DEE: Then let it be.
6. He snorts. / Sits on a stool. / Unwraps a sandwich.
7. CAL PINKERTON, 20s, intern, lanky, sleepy, shuffles in with an armful of CDs and drops them on the console. / He yawns.
8. CAL: Request line's been quiet. Except one. / DEE-DEE: Who? / CAL: Doesn't give a name.
9. The studio phone blinks. / Dee-Dee pushes a button. / Her mic opens to the caller, softly.
10. DEE-DEE: KRVX, you're on the air.
11. A pause. / Static, then a thin voice, dry as paper.
12. CALLER: Hello. I'd like to hear "Wild Horses." / DEE-DEE: Of course. Is it for someone? / CALLER: For the three of you.
13. Dee-Dee looks up. / Roland stops chewing. / Cal looks at the window.
14. DEE-DEE: That's very kind. May I ask your name? / CALLER: You can see me.
15. Out in the black field, a single flashlight clicks on. / It points toward the studio. / It does not move.
16. Cal steps to the glass. / Roland stands, sandwich forgotten. / Dee-Dee keeps her voice steady.
17. DEE-DEE: Here's that request, folks.
18. She slides the fader. / The song begins.
19. In the field, the flashlight goes out.

### s01094
0. A round chamber under a split copper dome. / A huge brass telescope aimed at a hole in the roof where stars blink through. / Dust like snow. / Star charts curl on the walls.
1. DR. HELENA VASQUEZ-MURRAY, 50s, trench coat over pajamas, mud on her boots, kneels by the telescope's base with a flashlight clenched in her teeth. / She runs her fingers along the floor. / Pulls up a loose board. / Beneath it, a leather journal wrapped in oilcloth.
2. HELENA: There you are.
3. She takes the flashlight from her mouth. / Unwraps the journal. / Opens it to the first page. / Reads in a whisper.
4. HELENA: "If you are reading this, I have already gone to see what the telescope shows after midnight."
5. She turns a page. / A hand-drawn sketch of the sky. / Beside one star, a small red circle and the word NO.
6. HELENA: No what?
7. Her phone buzzes in her pocket. / She answers.
8. DETECTIVE GRANT: Helena, where are you? / HELENA: Following the lead. / DETECTIVE GRANT: At the observatory? I told you to wait for backup. / HELENA: Backup is slow. The journal is here. / DETECTIVE GRANT: Don't touch anything. We think Warrick didn't die alone.
9. HELENA: I'm not alone either.
10. Footprints in the dust. / Not hers. / Wide, deliberate. / They lead to the stairwell.
11. DETECTIVE GRANT: Helena, did you hear me? / HELENA: Stay on the line.
12. She lays the phone on the telescope base. / Rises. / Follows the footprints with the light. / They end at a door in the wall. / Half open. / A sliver of darkness behind it.
13. A shape fills the gap. / A TALL MAN in a gray overcoat, face hidden by a brimmed hat, steps into the dome. / Slow. / Unhurried. / In one gloved hand he holds a brass key.
14. TALL MAN: You found it before I did. / HELENA: You're Warrick's partner. / TALL MAN: I was his student.
15. HELENA: Did you kill him? / TALL MAN: I closed the shutter. He opened it.
16. Helena raises the journal. / The Tall Man's eyes follow it.
17. HELENA: Then tell me what the star is. / TALL MAN: You already know. / HELENA: Say it.
18. DETECTIVE GRANT: Helena! Who are you talking to?
19. The Tall Man glances at the phone. / Then back at her.
20. He lifts the key. / Behind him, the dome's great shutter groans and begins to close, cutting the stars off one slice at a time.
21. HELENA: Grant! Now!
22. She hurls the journal across the floor. / The Tall Man lunges for it.
23. The dome slams shut. / Darkness. / A single crack of flashlight on the floor.
24. Sirens, very far away.

### s01116
0. Oak barrels in rows. / Candlelight. / A tasting table with four glasses.
1. IZABELLA ROMANO-OKAFOR, 30s, in a linen apron, pours. / Across from her, THEODORE "TEDDY" GALLOWAY, 30s, her ex, swirls and sniffs. / At the end of the table, her sister CAMILA ROMANO, 30s, in a sundress, studies him. / And beside Camila, a quiet man, HENRIK ABASI-LUND, 40s, who has said nothing all evening.
2. Teddy sips. / Izabella watches. / Camila watches Izabella. / Henrik watches the wine.
3. TEDDY: It's good. / IZABELLA: It's better than good. / TEDDY: It's... complex.
4. CAMILA: He means it's sour. / TEDDY: I do not. / CAMILA: You do. Your nose wrinkles.
5. Teddy touches his nose. / Izabella suppresses a smile.
6. Henrik takes a slow sip and sets down his glass. / HENRIK: It's perfect.
7. All three turn. / He shrugs, unbothered.
8. HENRIK: I'm the one who sold her the grapes.
9. IZABELLA: That's Henrik. / TEDDY: I gathered.
10. IZABELLA: And that's my fiance.
11. Teddy's glass stops halfway to his mouth. / Camila lowers her eyes. / Henrik, calmly, takes Izabella's hand.
12. TEDDY: ...Congratulations. / IZABELLA: Thank you, Teddy.
13. He drains the glass. / Sets it down. / Smooths his jacket.
14. Camila slides the bottle toward him, tender. / CAMILA: Another? / TEDDY: Please.

### s01114
0. Concrete steps. / A humming exit sign. / A window onto a dark parking structure. / A vending machine glows at the landing.
1. DR. ANSELMO KWAKU-REYNOLDS, 40s, scrubs, paper hat crumpled in his fist, sits on the steps with his head against the wall. / A phone rests on his knee, speaker on.
2. OPERATOR: Cardiology to Dr. Kwaku-Reynolds. Please call extension four-four-one-two. / ANSELMO: I'm on a break. / OPERATOR: Doctor, they said it's urgent. / ANSELMO: It's always urgent.
3. He turns the phone face down on the step. / The voice continues in muffled bursts. / He lets it.
4. ANSELMO: Forty-one patients on the unit. Three discharges at eight. Two transfers at noon. One bed that nobody gets until I sign off on a chart I haven't finished. And I'm sitting on a stair.
5. He laughs, quietly. / Wipes a hand over his face.
6. ANSELMO: When I was a student, an old attending told me: "A doctor is a man who fixes what he can and carries what he can't." I thought it was poetry.
7. A pause. / The vending machine hums.
8. ANSELMO: It's a weight limit.
9. He stands, brushes off his scrubs, flattens the paper hat, puts it on. / Picks up the phone.
10. ANSELMO: This is Kwaku-Reynolds. Coming up. / OPERATOR: Thank you, Doctor.
11. He pockets the phone and climbs.

### s01096
0. Ropes, sandbags, pulleys in the dark. / Below, a full orchestra tunes. / A chandelier the size of a car hangs motionless beside the catwalk.
1. DETECTIVE INEZ CASTELLANO-WU, 40s, black blazer, radio clipped to her belt, creeps along the planks. / Behind her: OFFICER BARNABAS FINCH, 20s, sweating through his uniform; STAGE MANAGER DOROTHEA LAMBERT, 50s, headset, whispering into her collar; and a pair of maintenance men, TOMASZ KRAWCZYK, 40s, and AUGUSTO ELEGBE, 30s, hauling a toolbox between them. / At the far end of the catwalk, half in shadow, crouches a figure with a briefcase.
2. INEZ: Everybody quiet.
3. She raises a fist. / They halt. / Dorothea clamps a hand over her headset mic. / Tomasz and Augusto set the toolbox down so slowly it makes no sound. / Barnabas draws his sidearm and holds it at his chest.
4. DOROTHEA: Overture starts in four minutes. / INEZ: Then we have four.
5. She steps forward. / The planks creak. / The figure at the end stiffens. / A hush falls over the orchestra pit below.
6. FIGURE: I wouldn't come closer. / INEZ: Put the case down. / FIGURE: It's not a case. It's a promise.
7. Barnabas swallows. / Augusto crosses himself. / Tomasz mutters something in Polish. / TOMASZ: Boze, nie teraz.
8. DOROTHEA: Does anyone know where the cut-off is for the chandelier cable? / AUGUSTO: Stage left. Behind the fly rail. / DOROTHEA: Go. Quietly.
9. Augusto slips away. / Inez keeps her eyes on the Figure.
10. INEZ: You don't have to do this. / FIGURE: Everyone says that. / INEZ: Because it's true.
11. The Figure turns. / A woman, 50s, in evening dress and tennis shoes. / VIOLETTA SANTORO-REYES, ex-soprano. / Her face is wet. / In her lap, the briefcase hums.
12. VIOLETTA: They fired me in this house. I sang four hundred nights. / INEZ: I know. / VIOLETTA: Do you? Do you know what silence sounds like when you were the music? / INEZ: No.
13. Violetta nods. / Her fingers drift to the clasp.
14. Barnabas lifts his gun. / OFFICER BARNABAS: Ma'am, stay still.
15. INEZ: Lower it. / OFFICER BARNABAS: Detective -- / INEZ: Lower it, Barnabas.
16. He lowers it. / Violetta lets out a laugh, brittle and soft.
17. VIOLETTA: Four minutes, you said. / INEZ: Three. / VIOLETTA: Then let me sing it one last time.
18. DOROTHEA: Hold the curtain. Hold it. Give me a spot on the catwalk.
19. A spotlight swings up from below and finds Violetta. / She blinks. / Rises.
20. The briefcase slides from her lap. / It clatters empty to the planks, a few pieces of sheet music spilling out.
21. Inez steps to it. / Picks one up. / It is an aria. / Blank staves.
22. INEZ: There's no bomb. / VIOLETTA: There never was.
23. Below, the orchestra falls silent. / Waiting.
24. Violetta takes a breath, lifts her chin, and sings one clear note into the dark. / It carries up into the rafters. / Nobody on the catwalk moves.
25. TOMASZ: Matko Boska.
26. Dorothea lowers her hand. / Barnabas holsters his gun. / Inez closes her eyes.

### s01025
0. A narrow room below decks, shelves of forgotten hats, umbrellas, a single ukulele. / A porthole shows slow gray swells.
1. MR. FITCH, 50s, round spectacles, ledger in hand, presides behind a brass-railed counter. / He is pleased with the order of the universe.
2. The door opens. / BARNABY PLUMLEY, 40s, tweed, mustache like a pushbroom, enters with the confidence of a man who has never been refused. / Behind him, ALOYSIUS FENN, 40s, also in tweed, also mustached, but nervous.
3. FITCH: Gentlemen. Something lost? / BARNABY: A trunk. Brown, brass corners, initialed B.P. / ALOYSIUS: Or A.F. It's our trunk.
4. FITCH: Two sets of initials? / BARNABY: We travel together. / ALOYSIUS: Not that way. / FITCH: I did not suggest a way.
5. Fitch opens the ledger. / Runs a finger down the page.
6. FITCH: Brown trunk, brass corners. Found on Deck C, yesterday. / BARNABY: That's the one.
7. FITCH: Did it contain anything unusual? / BARNABY: Shirts.
8. ALOYSIUS: And the Mortimer papers. / BARNABY: Shirts. / FITCH: Papers, you said? / ALOYSIUS: Shirts and papers. Mostly shirts.
9. Fitch produces a trunk from beneath the counter. / Sets it down with ceremony. / Unlatches it.
10. Inside: shirts. / Neatly folded. / One small leather folio.
11. FITCH: Shirts. And a folio marked "Mortimer." / BARNABY: Yes. Splendid. We'll take it. / FITCH: I'll need a signature. / ALOYSIUS: Of course.
12. Fitch slides a form across. / Barnaby reaches. / Aloysius reaches.
13. Their hands collide on the pen.
14. BARNABY: After you. / ALOYSIUS: No, you. / BARNABY: I insist. / ALOYSIUS: Then I insist more.
15. The door swings open again. / HORTENSE VANDERWELL, 60s, fur stole in the tropics, enters with NELL, 9, in a sailor dress, clutching a stuffed walrus.
16. HORTENSE: Mr. Fitch! My daughter lost Sir Reginald! / NELL: He's right here, Grandmother. / HORTENSE: Then what are we doing here? / NELL: You said we'd get ice cream. / HORTENSE: Ah. So I did.
17. Fitch clears his throat. / FITCH: Madam, as you can see, I am engaged with two gentlemen.
18. HORTENSE: Two? I see one and a half. / BARNABY: I beg your pardon. / HORTENSE: Is the other one a ghost? / ALOYSIUS: I am quite solid, madam. / HORTENSE: So was my late husband. Look where it got him.
19. Silence. / Fitch polishes his spectacles.
20. FITCH: Nell, was it? What lost thing do you seek? / NELL: Nothing. Grandmother told me to say we were looking for something so she could meet the two men with the matching mustaches. / HORTENSE: Nell! / NELL: You did.
21. HORTENSE: Children invent the most extraordinary things.
22. BARNABY: Madam, we are not available for introductions. / ALOYSIUS: We are engaged. / BARNABY: To other people! / ALOYSIUS: Women! / HORTENSE: How very modern.
23. FITCH: Might I suggest we resolve the trunk? / BARNABY: Yes. The trunk. / ALOYSIUS: Please.
24. Fitch taps the folio. / FITCH: There is a problem, gentlemen. / BARNABY: Which is? / FITCH: This folio does not contain papers. It contains a deed.
25. ALOYSIUS: Barnaby. / BARNABY: Don't.
26. FITCH: To the Marigold. / HORTENSE: The ship?
27. FITCH: The ship. It appears that one of you, or perhaps both, has been selling it for some weeks, to various purchasers, on the open sea. / NELL: Can you sell a boat while you're on it? / HORTENSE: Apparently, dear. Apparently you can.
28. Barnaby and Aloysius look at each other. / Then at the door.
29. BARNABY: After you. / ALOYSIUS: No, you.
30. They bolt together, wedged in the doorway. / Fitch rings a brass bell. / Somewhere above, a whistle blows.
31. NELL: Grandmother, can we still get ice cream? / HORTENSE: Child, we are going to buy the ship.

### s01037
0. A circular room on a slow turn. / The city slides past the windows like a conveyor. / White tablecloths, empty chairs, a pianist's bench with no pianist.
1. ROZ KAPLAN, 50s, silver bob, red lipstick, sits at a corner table with a blueprint under her wine glass. / Opposite her, TREVOR DUNN, 30s, hotel uniform, nervous hands.
2. A NEW GIRL, 20s, denim jacket, backpack, slides into the third chair without being invited. / NEW GIRL: Sorry I'm late. The elevator stopped at every floor. / ROZ: It's a tourist elevator. / NEW GIRL: It was a hostage situation.
3. ROZ: You've got the codes? / NEW GIRL: I've got the codes.
4. TREVOR: Who is she? / ROZ: Trevor, this is Sunny Lockwood. She's the one I told you about. / SUNNY: Nice to meet you. I'm the one with the thumbs. / TREVOR: The thumbs? / SUNNY: Locksmith's daughter. Four generations of thumbs.
5. ROZ: She's good. She's very good. She's also nineteen. / TREVOR: Twenty-one. / SUNNY: Twenty. Don't lie for me.
6. ROZ: Let's start. The vault is on sixty-one, under the observation deck. Every ninety minutes the restaurant makes a full revolution. We have exactly four minutes where the north camera faces the wall. / TREVOR: Because of the rotation. / ROZ: Because of the rotation. Sunny takes the first lock. I take the second. Trevor, you stay at the maitre d' stand and pour wine. / TREVOR: I can pour wine. / ROZ: You can pour wine badly. That's all anyone expects.
7. SUNNY: What's the haul? / ROZ: Eleven million. Bearer bonds. In a briefcase that looks like a briefcase.
8. SUNNY: Eleven's good. What's my cut? / ROZ: Two. / SUNNY: Three. / ROZ: Two and a half.
9. SUNNY: She drives a hard bargain. / TREVOR: She who? / SUNNY: Roz. It's a figure of speech. I'm talking about Roz. / ROZ: I know who you mean. / SUNNY: She counts every penny. / ROZ: She buys every drink. Shut up and listen.
10. Trevor pours wine for no one. / The glass fills. / He sets the bottle down too hard.
11. ROZ: After the second lock, there's a pneumatic tube. Documents only. We use it to send the bonds down to the kitchen. / TREVOR: They go down by tube. / ROZ: They go down by tube. At the kitchen, Marguerite takes them in a casserole dish.
12. SUNNY: Who's Marguerite? / ROZ: My sister. / SUNNY: You have a sister? / ROZ: Everyone has a sister. / TREVOR: I don't. / ROZ: Then you're lucky.
13. SUNNY: What about security? / ROZ: Two guards. One reads novels. The other sleeps. We tested them for six weeks. / SUNNY: Six weeks of watching a man read a novel. / ROZ: It was a Dickens. / SUNNY: Which? / ROZ: Bleak House.
14. SUNNY: Oh, I like her. / TREVOR: Who? / SUNNY: Roz. You keep asking.
15. ROZ: Pay attention. Revolution starts at eleven forty. We're in position by eleven thirty. Questions? / TREVOR: What if the guard doesn't sleep? / ROZ: Then I buy him a drink. / SUNNY: What if he doesn't drink? / ROZ: Everyone drinks, sweetheart.
16. SUNNY: What if the vault door is a different model? / ROZ: It isn't. / SUNNY: What if it is? / ROZ: Then you'll earn your three. / SUNNY: Three? / ROZ: Two and a half. Don't push.
17. The room turns. / The city lights drift past, one landmark after another.
18. TREVOR: It's a little beautiful, actually. / ROZ: It's a job, Trevor. / TREVOR: Can it be both? / ROZ: No.
19. Sunny lifts her glass. / Roz clinks it. / Trevor, last, doesn't quite reach.

### s01057
0. A converted river freighter. / Twelve cots on a steel deck, curtains on ceiling rails, an IV pole tied to a pillar with bungee cord. / Through round portholes, the lights of a riverbank town drift by.
1. DR. ISMAIL KARIMI, 50s, rumpled scrubs, reading glasses hanging from one ear, signs a chart at a card table nailed to the floor. / NURSE BRONWEN ACKERLEY, 40s, tall, silver braid, checks an IV bag with a flashlight. / ORDERLY TOBIAS FINCH, 20s, headphones around his neck, mops in lazy circles. / DR. LINH THAI, 30s, resident, sits cross-legged on a cot, stethoscope draped, eating crackers from a sleeve. / And at the end of the row, MRS. ODETTA WRAY, 70s, the only patient awake, sits up in a cot with a blanket over her knees.
2. ISMAIL: Bed six, no change. / BRONWEN: Bed six, no change.
3. ISMAIL: Bed nine? / LINH: Temp is ninety-nine point one. / ISMAIL: Fine. Leave it. / LINH: I was going to.
4. TOBIAS: Do we have more mop heads? / BRONWEN: Closet, port side. / TOBIAS: Port is? / BRONWEN: Left. / TOBIAS: Thanks.
5. The barge shifts. / A low groan runs through the hull. / Nobody reacts. / The IV pole sways against its bungee.
6. MRS. WRAY: Doctor. / ISMAIL: Yes, Mrs. Wray. / MRS. WRAY: Is it always so slow at night? / ISMAIL: Usually it's slower. / MRS. WRAY: Then I'm in luck. / ISMAIL: Are you in pain? / MRS. WRAY: Only boredom.
7. LINH: I can read you something. / MRS. WRAY: What have you got? / LINH: The back of the cracker box. / MRS. WRAY: Go ahead. / LINH: "Made with whole grains. Best before March." / MRS. WRAY: Beautiful.
8. Bronwen stifles a laugh. / Ismail glances over his glasses, almost smiles.
9. TOBIAS: Dr. Karimi, should I do the starboard side next? / ISMAIL: If you like. / TOBIAS: I do like. / ISMAIL: Then carry on.
10. The barge's horn sounds, low and soft, a note across water.
11. BRONWEN: That's Calder Landing. / ISMAIL: We dock in an hour.
12. LINH: Do we get shore leave? / ISMAIL: We get paperwork. / LINH: Same thing.
13. ISMAIL: Dr. Thai. / LINH: Sorry.
14. Mrs. Wray settles into her pillow. / Her eyes close. / A pulse monitor beeps in a slow, steady tick.
15. Bronwen adjusts the blanket across her knees. / Tucks it neat.
16. BRONWEN: Sleep well. / MRS. WRAY: Everything's fine? / BRONWEN: Everything's fine.
17. She turns off the flashlight. / The ward falls into amber, quiet, familiar dark.

### s01046
0. Six sleek pods, each shaped like a lacquered egg. / Soft ambient chimes. / A sign on the wall: REST IS RESULTS.
1. PRUDENCE ADEYEMI, 40s, in a pressed navy suit, stands outside pod three. / She has been standing there a long time. / Her phone is in her hand, screen dark.
2. MALCOLM VOSSBERG, 50s, in shirtsleeves, tie loosened to a politician's disarray, emerges from pod four rubbing his eyes. / He sees her. / He smiles. / He is not surprised.
3. MALCOLM: Prudence. I thought you'd gone home. / PRUDENCE: I did. / MALCOLM: Then you came back. / PRUDENCE: For my coat.
4. She doesn't move toward the coat rack. / He does. / He lifts her coat off a hook, holds it out. / She takes it. / Doesn't put it on.
5. MALCOLM: Rough week. / PRUDENCE: It's Thursday. / MALCOLM: Rough Thursday.
6. He adjusts a pod's dial. / The chimes change key.
7. MALCOLM: The numbers will be fine. They always are. / PRUDENCE: Are they? / MALCOLM: You doubt me? / PRUDENCE: I doubt the spreadsheet. / MALCOLM: It's your spreadsheet. / PRUDENCE: It's the one you rewrote.
8. Silence. / The chimes continue. / A faint hiss of oxygen from the pods.
9. MALCOLM: I thought you'd appreciate the efficiency. / PRUDENCE: Efficiency. / MALCOLM: Streamlining.
10. Prudence folds her coat over her arm. / Folds it a second time. / Smooths it flat with both hands, too carefully.
11. PRUDENCE: I'll be in my office. / MALCOLM: You were just leaving. / PRUDENCE: I changed my mind.
12. He nods. / Looks at the pod. / Looks at her.
13. MALCOLM: Sleep on it. That's what these are for.
14. She turns, walks to the door. / Pauses with one hand on the frame.
15. PRUDENCE: Do you sleep in there? / MALCOLM: Every day. / PRUDENCE: And dream? / MALCOLM: Never. / PRUDENCE: That's what I thought.
16. She leaves.
17. He watches the door close, then climbs back into pod four and seals the lid.

### s01113
0. Frost on steel. / Rows of dark capsules. / A single red indicator blinks. / Breath hangs in the air.
1. COMMANDER ODALYS REEVES-AKINTOLA, 40s, parka over her flight suit, kneels by capsule 17 and wipes frost from its window. / Behind her, TECH SANTIAGO OYELARAN-WOO, 30s, scans a diagnostic panel. / Over by the airlock, DOCTOR MIRIAM BELLAMY, 50s, lifts a medical scanner, and next to her a scruffy teenage stowaway, PIXIE, 15, shivers in a borrowed coat.
2. SANTIAGO: Pod 17 is cold. / ODALYS: Pod 17 is empty. / MIRIAM: Then where is the occupant? / PIXIE: Maybe he got up and left.
3. Nobody laughs. / Miriam lowers the scanner. / Odalys stands slowly. / Santiago taps the panel; the indicator blinks red.
4. ODALYS: Open it. / SANTIAGO: Ma'am -- / ODALYS: Open it.
5. He presses the release. / The capsule hisses. / The lid lifts. / Inside: a folded blanket, a child's drawing, a shut-off pulse monitor.
6. Odalys picks up the drawing. / Studies it. / Her thumb smooths the paper's edge.
7. Miriam steps closer, then stops.
8. Pixie reaches for the monitor. / Santiago catches her wrist, gently. / She pulls away, embarrassed, and sits on the floor.
9. ODALYS: Seal it.
10. Santiago closes the lid. / The hiss fades.
11. Miriam puts a hand on Odalys's shoulder. / Odalys folds the drawing in half, then in half again, and slides it into her pocket.

### s01054
0. Pink bedspread. / Wood-paneled walls. / A TV bolted to the dresser, off. / A lamp with a torn shade. / Rain taps the window like fingertips.
1. A WOMAN, 30s, wet raincoat, dark circles under her eyes, locks the door. / Slides the chain. / Pulls the curtains shut. / She is alone, and she's checking the room the way a person checks who has already been surprised once.
2. She opens the closet. / Empty hangers. / The bathroom. / Empty tub. / Under the bed. / Dust, a lost sock.
3. She sits on the edge of the bed and takes a small tape recorder from her bag. / She presses RECORD.
4. WOMAN: Test. Test.
5. She stops. / Plays it back. / Her own voice, tinny.
6. WOMAN: Test. Test.
7. She nods. / Records again. / WOMAN: Day one. Motel off Route 9. Nobody followed me. I think.
8. She stops the tape. / Looks at the phone on the nightstand. / Beige, rotary, curly cord. / She picks up the receiver. / Dial tone. / She sets it back.
9. She rewinds. / Hits PLAY. / WOMAN: Day one. Motel off Route 9. Nobody followed me. I think.
10. Then, after her recorded voice, the same voice again, lower, almost tender, saying words she never spoke: / WOMAN: I'm in the room.
11. She freezes. / The tape continues to hiss.
12. She hits STOP. / Her thumb shakes. / She rewinds again, plays it again. / The extra line is gone. / Only the first.
13. WOMAN: Okay.
14. She sets the recorder on the dresser. / Takes off her coat. / Hangs it on the doorknob.
15. A key tag drops from the pocket and clatters to the floor. / She picks it up. / The tag is stamped in hand-scratched letters: PROPERTY OF LENA MARSH.
16. She turns it over, turns it back.
17. LENA: Right. Right. I'm Lena. / She says it as if reminding herself. / She says it again. / LENA: Lena Marsh. Thirty-four. Dental hygienist. Born in Duluth.
18. She reaches for the lamp. / Clicks it off. / The room is almost black. / A glow leaks around the curtain edge.
19. On the dresser, the recorder clicks on by itself. / The tape reels turn.
20. LENA: No. / LENA: Lena.
21. She backs against the wall. / LENA: That's my voice. / LENA: You taped me yesterday. In the car. / LENA: I wasn't in a car yesterday. / LENA: No. But you will be.
22. She lunges. / Grabs the recorder. / Rips the cassette out. / Throws it across the room. / It hits the TV and cracks.
23. Silence. / Rain. / Breath.
24. She slides down the wall until she's sitting on the floor. / She hugs her knees.
25. From the bathroom: a click. / A drip. / Another click.
26. LENA: Please.
27. The bathroom light snaps on by itself. / A thin line of yellow slides under the door. / LENA: Please don't.
28. The doorknob turns on its own.
29. She crawls to the bed. / Under it. / Dust, the lost sock. / Her own hand finds the cracked cassette.
30. The bathroom door creaks.
31. LENA: Day two.
32. She presses the cassette to her chest. / Doesn't breathe.
33. The bathroom light hums. / The cassette hisses against her chest. / LENA: Nobody followed me.
34. LENA: I know.
35. The lamp clicks on.

### s01090
0. Pears hang heavy on the branches. / Wasps drone over fallen fruit. / Beyond the trees, a corrugated roof rusts under a pale sky.
1. NELL, 15, sits with her back against a trunk, knees drawn up. / She has a transistor radio in her lap, tuned to nothing. / A paper sack of pears lies beside her. / Dust on her shoes. / A bruise yellowing on one shin.
2. She bites a pear. / Chews. / Does not taste it.
3. A twig snaps. / She looks up.
4. A boy has stepped from between the trees, hands in his pockets. / THEO, 16, tall and awkward, wearing his older brother's jacket. / He stops ten paces away.
5. He studies her. / She studies the pear.
6. THEO: You're on the Dunnings' side. / NELL: Is there a side?
7. He shrugs. / Scuffs a pear into the grass with his toe. / She watches the movement and then the dirt.
8. THEO: They said you left. / NELL: They said a lot.
9. He nods slowly. / She offers him a pear without looking up. / He crosses, takes it, sits a careful distance away.
10. They eat in silence. / A wasp circles his hand. / He lets it.
11. THEO: My brother's gone. Since June.
12. She says nothing. / Turns the dial on the radio. / Static swells, then a thin fragment of a song. / She holds still, listening. / He leans in a little. / The song fades.
13. THEO: That was a good one. / NELL: It always is. Then it goes.
14. He half-smiles. / She turns the dial again. / Nothing. / She sets the radio on the grass between them.
15. A screen door bangs somewhere beyond the trees. / A woman's voice calls a name that is not hers. / Nell's shoulders rise. / Theo watches them rise.
16. THEO: That's for you? / NELL: That's for a girl I was.
17. He nods as if this makes sense. / Stands. / Offers his hand. / She looks at it for a long moment. / Then takes it. / He pulls her up. / They let go at the same time.
18. At the edge of the orchard, an older figure steps out: MRS. DUNNING, 50s, apron, arms folded. / She stops when she sees them both. / Her face softens. / Hardens. / Softens again.
19. Nell straightens. / Theo steps half a pace in front of her. / Mrs. Dunning looks at his jacket, at the radio on the grass, at the pear core in Nell's hand.
20. She turns and walks back toward the house. / Leaves the door open behind her.
21. Nell picks up the radio. / Theo picks up the sack of pears. / They follow, ten paces apart, then five.

### s01056
0. Painted horses frozen mid-gallop, their gilt chipped. / A pipe organ sags in the center. / The roof leaks silver light. / Five figures sit on the platform's edge, boots dangling.
1. DUCHESS, 60s, tiny and elegant in a mink collar, taps a cane against a brass pole. / MR. LAVALLE, 50s, dapper, pocket square, polishes a pair of rimless glasses. / BONES, 30s, long and gaunt, sprawls across a bench seat with a thermos of coffee. / SLIM POLLARD, 40s, round as a barrel, sits with a ledger on his knee. / PEARL, 20s, the youngest, in a leather jacket with too many zippers, spins a lock-pick between her fingers.
2. DUCHESS: Gentlemen. Miss Pearl. We are assembled. / BONES: We've been assembled for an hour. / DUCHESS: And now we are in session.
3. LAVALLE: Is that a legal term? / DUCHESS: It's a theatrical one.
4. SLIM: The count is simple. Four million, in unmarked bills, locked in the carousel's center column. The man who stored it was a bad carpenter and a worse liar. / PEARL: Which column? There's six. / SLIM: The one that doesn't turn. / LAVALLE: They all turn. / SLIM: Not that one. I've watched it for three weeks. / BONES: Thank God somebody watched something.
5. PEARL: How do we get in? / DUCHESS: The same way everyone gets in anywhere. We pretend we belong. / LAVALLE: In a closed amusement park. / DUCHESS: In a closed amusement park, at night, with permits. / SLIM: Are the permits real? / DUCHESS: Mr. Pollard, nothing is real. That's the pleasure of the business.
6. BONES: Who's driving? / DUCHESS: Pearl. / PEARL: I thought I was the lock. / DUCHESS: You are both. We are a small company. / PEARL: Then I want a bigger cut. / DUCHESS: You'll have a bigger bow.
7. LAVALLE: Are we agreed on the split? / SLIM: Equal shares. Five ways.
8. BONES: Six. / DUCHESS: Six? / BONES: There's a sixth share in Mr. Lavalle's ledger. Somebody we've never met.
9. Silence. / The carousel lamps flicker. / Slim turns the ledger toward the light. / Pearl stops spinning the pick.
10. DUCHESS: Mr. Lavalle. You told me nobody else knew. / LAVALLE: I told you what you needed to hear.
11. He puts on his glasses.

### s01117
0. A big scarred table. / Copper pots on hooks. / A wood stove ticking. / Through the window, mist lies low over a field of frosted stubble.
1. GRANDMOTHER AGNIESZKA "BABCIA" KOWALCZYK-EZE, 70s, in a faded housedress, stands at the stove stirring a pot of porridge. / Her grandson FELIX DELACROIX-ADEYEMI, 11, sits at the table in pajamas, chin on his folded arms. / He watches her back with the stubborn patience of a boy who has a question.
2. FELIX: Babcia. / BABCIA: Hm.
3. FELIX: Why did Mama leave?
4. Babcia's spoon stops. / Resumes. / She doesn't turn. / Steam curls around her shoulders. / She adds a pinch of salt, tastes, adds another.
5. BABCIA: Eat first. / FELIX: I'm not hungry. / BABCIA: You will be.
6. She ladles porridge into a chipped bowl. / Brings it to the table. / Sets it before him with a spoon. / Smooths his hair with one flour-dusted hand.
7. He leans into it, then catches himself and pulls away.
8. She sits across from him with a groan, folds her hands.
9. BABCIA: Your mother wanted a different life. / FELIX: Different from what? / BABCIA: From this.
10. She gestures at the kitchen, the stove, the window. / Felix looks at each in turn. / He picks up the spoon and stirs the porridge without eating.
11. FELIX: Is it that bad? / BABCIA: Not to me. / FELIX: Is it bad to you?
12. BABCIA: No, Felix. It is not bad.
13. He eats a bite. / Then another. / She watches. / The stove ticks. / A rooster crows somewhere in the mist.
14. FELIX: Babcia? / BABCIA: Yes, my little bird? / FELIX: Will she come back?
15. Babcia reaches across the table and covers his hand with her own. / Her knuckles are swollen, her skin like old paper. / He turns his palm up and holds on.
16. BABCIA: Every spring the swallows go away, and every spring they return. Nobody tells them to. They only remember where the barn is.
17. FELIX: That's not an answer. / BABCIA: No. It isn't.
18. She smiles, tired and tender. / He smiles back, small.
19. Outside, the mist begins to lift, and the first gold light touches the frost.

### s01055
0. A kitchen from another decade. / Yellow linoleum, a table with a plastic cloth printed with lemons, a clock shaped like a rooster. / On the stove, a pot of sauce simmers, spitting. / Steam beads the windowpanes.
1. PHILOMENA ROSSETTI, 80, sleeves pushed to the elbows, hair in a hairnet, stirs. / Her hands are knotted like old rope. / At the table, ARTUR ROSSETTI, 50s, her son, in a church shirt, slices bread with surgical care. / His daughter SOLEDAD, 16, sits cross-legged on a chair, eyes on her phone, headphones around her neck.
2. PHILOMENA: You never come on Sundays anymore. / ARTUR: I come on Sundays, Ma. / PHILOMENA: You come on the Sundays you remember. / ARTUR: That's most of them. / PHILOMENA: Most. Hmph.
3. She tastes the sauce. / Adds salt. / Stirs.
4. SOLEDAD: It smells good, Nonna. / PHILOMENA: It smells like your grandfather's lies. / SOLEDAD: What? / PHILOMENA: He swore he could cook. He burned water.
5. ARTUR: Ma, not today. / PHILOMENA: Why not today? / ARTUR: Because. / PHILOMENA: Because what? / ARTUR: Because it's Sunday.
6. She snorts. / Taps the spoon on the pot.
7. PHILOMENA: You think I don't know why you've brought the child. / ARTUR: Soledad's here because she wanted to see you. / SOLEDAD: I did. / PHILOMENA: You came to hold my hand while Arturo tells me something he has been practicing in the car. / ARTUR: Ma. / PHILOMENA: Tell me.
8. Artur sets the knife down. / Wipes his fingers. / Looks at his daughter, who looks at her phone, pretending not to hear.
9. ARTUR: The doctor called. / PHILOMENA: Which doctor? / ARTUR: The one with the results. For the house. / PHILOMENA: The house is not sick. / ARTUR: The house is not sick, Ma. You are.
10. The clock ticks. / The sauce pops. / Philomena does not turn.
11. PHILOMENA: I know that. / ARTUR: You know? / PHILOMENA: I am eighty. I have buried a husband, two brothers, and a dog named Salvatore. I know what a cough means.
12. SOLEDAD: Nonna? / PHILOMENA: Hush, cara.
13. ARTUR: They want to put you somewhere. Just for a little while. Somewhere with nurses. / PHILOMENA: Somewhere with nurses. / ARTUR: Not forever. / PHILOMENA: They never say forever. They say a little while. / ARTUR: I didn't want to. / PHILOMENA: You didn't want to tell me, or you didn't want to put me in a place? / ARTUR: Both.
14. She turns now. / Her face is wet. / It isn't steam. / She wipes it on her sleeve.
15. PHILOMENA: Sit with me. Both of you.
16. They sit. / She lifts the pot, spoons a bowl, sets it before Soledad.
17. PHILOMENA: Eat. It gets cold. / SOLEDAD: I'm not hungry. / PHILOMENA: You'll be hungry in a month. When I'm not here to feed you.
18. She says it lightly. / A joke. / Nobody laughs.
19. ARTUR: Ma. Please. / PHILOMENA: Arturo. Your father's recipe. It's in the drawer, under the knives. Never in a book. I wrote it on the back of an electric bill. / ARTUR: I know. / PHILOMENA: You do not know. You think there is a secret ingredient. There isn't. There is only a woman standing here at four o'clock every Sunday for fifty-eight years.
20. She sits. / Folds her hands. / PHILOMENA: That's the ingredient. Now eat.
21. Soledad takes a spoonful. / Her face crumples. / She keeps eating.
22. Artur reaches across the lemons and takes his mother's hand. / It is small and knotted and warm.
23. The rooster clock ticks. / On the stove, the sauce goes on simmering.

### s01072
0. Ductwork. / Dust. / A folding chair wedged between pipes. / A thermos. / A lunch bag labeled "DO NOT TOUCH."
1. RENATA KOWALCZYK, 40s, lanyard, cardigan, eats a sandwich. / Content. / A small desk fan hums.
2. Through the vent grate below: the office. / Fluorescent hum. / Keyboards.
3. INTERCOM: Good afternoon, team. A reminder that the quarterly synergy audit begins at three.
4. Renata chews. / Nods. / Pours tea.
5. INTERCOM: Auditors will be reviewing all workstations. Including unoccupied ones.
6. She stops chewing.
7. INTERCOM: Employee Kowalczyk's desk has been unoccupied for eleven months. Please report to Facilities.
8. Renata sets down the sandwich. / Looks through the grate. / Her empty cubicle. / A dead plant. / Her nameplate.
9. A flashlight beam sweeps the crawlspace behind her.
10. RENATA: Oh, no.

### s01063
0. A hundred timepieces, each telling a different hour. / Grandfather cases line the walls like sentries. / Pendulums swing out of rhythm, ticks overlapping in a thin, endless rain. / At the center, under a glass dome, a gilded astronomical clock the size of a carriage glitters, its planets frozen mid-orbit.
1. Five minutes to midnight. / The building is dark, sleeping.
2. In the shadow of a long-case clock, four figures crouch like cats.
3. SERAPHINA VOSS, 40s, in black from throat to ankle, headlamp dimmed to a red coin, leads. / At her shoulder, BARTHOLOMEW QUILL, 60s, silk scarf, gloved fingers unscrewing the cover plate of a wall panel. / KENJI AOKI, 20s, in a catering uniform with a pocketed screwdriver, carries a coil of fiber cable. / DESPINA ARVANITIS, 30s, enormous eyes, a stethoscope hanging from her neck, taps a glass case with the delicacy of a safecracker.
4. A small radio crackles from Seraphina's belt. / LOOKOUT: Guard's on the east stairs. Two minutes. / SERAPHINA: Understood.
5. BARTHOLOMEW: Panel's open. / KENJI: Wires are color-coded. / BARTHOLOMEW: Ignore the colors. Follow the dust. / KENJI: Why? / BARTHOLOMEW: The ones that move are the ones they trust.
6. Kenji nods. / Pinches a wire. / Clips it.
7. DESPINA: Seraphina. The dome has a second lock. / SERAPHINA: Meaning? / DESPINA: Meaning it listens.
8. She presses the stethoscope to the glass. / Closes her eyes. / Her whole body bends toward the sound.
9. Tick, tick, tick, tick.
10. DESPINA: It's counting. Three seconds to a click. / BARTHOLOMEW: Can you match it? / DESPINA: I can try.
11. She slides a slim tool beneath the dome's rim. / Waits. / A pendulum on the east wall swings out. / Another answers.
12. Tick. / Click. / A pin falls.
13. LOOKOUT: One minute. He's at the landing. / SERAPHINA: Go.
14. Despina lifts the dome. / Slow, trembling. / It rises on invisible springs, a hush of glass. / The planets of the clock gleam, close enough to touch.
15. Kenji slides a velvet bag under the gilded sun and eases it free. / The gears whisper once. / Then still.
16. BARTHOLOMEW: It's heavier than it looks. / KENJI: They always are.
17. LOOKOUT: Thirty seconds! / SERAPHINA: Seal it. Back to the wall.
18. They snap the dome back down. / The pin settles. / The clock gleams behind its glass, minus one small golden sun.
19. Somewhere in the hall, a bell tolls. / Midnight. / Every clock in the museum begins to strike, a hundred chimes, a hundred hours, clamor and swell.
20. The four crouch, hands over ears, as the hall rings around them like a cathedral. / The guard's footsteps, if any, are drowned entirely.
21. KENJI: That's the best alarm I ever heard! / SERAPHINA: Quiet!
22. The last chime fades. / Silence, then a single tick, then a hundred.
23. LOOKOUT: He's gone to the west wing. You're clear.
24. Bartholomew exhales. / Despina leans on the long-case clock, trembling and grinning. / Kenji laughs without sound. / Seraphina lets go of the radio.
25. SERAPHINA: Walk. Don't run. Let's go home.

### s01097
0. Wood paneling. / A dartboard. / Brooms hung on pegs. / Through the frosted glass, the ice gleams under floodlights.
1. SKIP RAGNHILD "RAGS" ENGSTROM, 40s, tweed vest, nurses a ginger ale. / Her third, TOBIAS "TOBY" ADEKUNLE, 30s, still in his team sweater, picks at a bowl of peanuts. / Their lead, ELOISE "LOLO" BEAUMONT, 20s, shoes off, feet on a stool, scrolls her phone.
2. RAGS: Lolo, put the phone down. / LOLO: It's the final scores. / RAGS: We lost. / LOLO: By one stone.
3. TOBY: By one stone, Rags. One. / RAGS: Don't you start, Toby. / TOBY: I'm just saying, if you'd called the hammer on the ninth end -- / RAGS: I called the hammer. / TOBY: You called it late.
4. Rags slams her glass on the bar. / Lolo drops the phone. / Toby freezes mid-peanut.
5. RAGS: I called it when the ice told me to. / LOLO: Rags, the ice doesn't talk. / RAGS: It does if you listen.
6. A silence. / Toby slowly crunches a peanut. / Lolo picks up her phone, slides it into her pocket. / Rags unclenches her fist.
7. RAGS: We did well, Lolo. / LOLO: We did. / TOBY: We did great, Rags.
8. RAGS: Don't suck up, Toby. / TOBY: I'm sucking up with respect.
9. Rags almost smiles. / Lifts her glass. / RAGS: To the ninth end. / LOLO: To the ninth end. / TOBY: To the hammer.
10. They clink.
11. Beyond the glass, the Zamboni hums across the ice, erasing everything.

### s01088
0. Roots like fingers. / Grey mud. / A capsized skiff on its side. / Mosquitos in clouds.
1. BIANCA "BEE" CALLOWAY, 30s, torn shirt, drags a water jug through the mud. / BRAM OKONJO, 40s, one boot missing, limps behind her. / Between them, a bundled shape on a stretcher of branches: CAPTAIN HALVARD SKOGLUND, 60s, eyes closed.
2. BEE: Bram. Pull. / BRAM: I'm pulling. / BEE: You're limping. / BRAM: I'm limping and pulling.
3. She stops. / Wipes her face. / Squats by the captain. / Puts two fingers at his neck.
4. BEE: Cap. Cap, you in there?
5. He stirs. / Mumbles. / Doesn't wake.
6. BRAM: Tide's turning. / BEE: I can see. / BRAM: We have maybe ten minutes before the flat goes under.
7. She stands. / Looks at the skiff. / Looks at the horizon where a thin line of silver crawls toward them.
8. BEE: Leave the jug. / BRAM: That's our water. / BEE: And that's his life. Choose.
9. Bram stares at her. / Drops the jug. / It sinks into the mud with a slow burp.
10. He grabs the stretcher. / She grabs the other end. / They lift. / They stumble.
11. A root catches Bram's foot; he falls. / The stretcher tilts. / The captain groans.
12. BEE: Bram! / BRAM: Go on without me. / BEE: Not a chance.
13. She sets the stretcher down. / Hauls him up by the belt. / He leans on her. / Their breath rasps.
14. BRAM: Bee. If I -- / BEE: You're not going to. / BRAM: If I do. / BEE: Don't.
15. The silver line is closer. / The mud begins to glisten. / A bird shrieks from the roots.
16. CAPTAIN HALVARD: Boys. Girls. Hold your horses. / BEE: Cap! / CAPTAIN HALVARD: I can walk. / BRAM: You can't. / CAPTAIN HALVARD: I can crawl. Let me.
17. He pushes himself off the stretcher. / Falls to hands and knees. / Starts to crawl.
18. Bee and Bram watch him go, mud to the elbows. / BEE: Stubborn old man. / BRAM: He taught us.
19. They follow. / The water laps their ankles. / The roots rise ahead like a gate.

### s01084
0. Cracked blue tile. / A dry deep end littered with leaves. / Floodlights on stands. / Yellow tape across the diving board.
1. DETECTIVE CASSIUS RHEE, 40s, rain jacket, notebook, crouches at the bottom of the deep end beside a chalk outline. / FORENSIC TECH BELINDA OSEI, 30s, white suit, kneels with a camera. / A tarp covers something near the drain.
2. RHEE: Time of death? / OSEI: Medical examiner says midnight. Give or take. / RHEE: Who drained the pool? / OSEI: Nobody. It's been empty since August. / RHEE: Then how did she end up down here? / OSEI: She fell. Or she was pushed.
3. He steps over the chalk. / Lifts the tarp with a pen. / Underneath, a single red high-heeled shoe.
4. RHEE: Where's the other? / OSEI: Haven't found it.
5. A phone rings. / Rhee's. / He answers.
6. CAPTAIN VOSS: Rhee. Anything? / RHEE: A shoe, Captain. Just a shoe. / CAPTAIN VOSS: There's a witness on her way down. Janitor. Says she saw something. / RHEE: Copy.
7. He hangs up.
8. Footsteps on the stairs. / A figure descends: MS. DOLORES AMADI, 60s, janitor's apron, mop in hand like a staff. / She stops at the pool edge.
9. DOLORES: Detective? / RHEE: Ms. Amadi. Come down. / She picks her way down the shallow-end steps, mop first.
10. DOLORES: I saw a man. By the diving board. Very tall. Very quiet. / OSEI: What was he wearing? / DOLORES: Gray. A long coat. Like a priest. / RHEE: Did he see you? / DOLORES: No. But he left something.
11. She reaches into her apron pocket. / Pulls out the second red shoe, wrapped in a plastic bag.
12. Rhee and Osei exchange a look.
13. OSEI: You touched it? / DOLORES: I wore gloves. / RHEE: Thank you.
14. A clang from the diving board. / All three whip around. / The tape trembles.
15. A silhouette stands at the top of the board, backlit by dawn.
16. RHEE: Police! Stay where you are!
17. The silhouette leaps. / Rhee lunges. / Osei drops the camera. / Dolores raises the mop. / They collide at the lip of the deep end in a tangle of arms, mop handle and raincoat.
18. A bright flash from Osei's camera bursts across the tile. / The man scrambles up the stairs. / Rhee and Dolores sprawl together. / Osei pulls herself up.
19. OSEI: He's gone! / RHEE: Not far.
20. Dolores sits, hand on her chest, mop still clutched. / DOLORES: Detective. I think I know that coat.

### s01078
0. 1989. / Faded posters of rollerskates. / A disco ball turns slowly over empty hardwood. / The popcorn machine hums. / Behind the counter, a cluttered shelf of mismatched rental skates.
1. JUNIPER "JUNE" ABARA, 16, braids and a Walkman, counts quarters into a cash drawer. / She is the only one working. / Her mouth moves silently with whatever she hears.
2. The front door chimes. / DANNY KOSTOPOULOS, 17, enters. / Letterman jacket too big for him. / He carries a gym bag.
3. DANNY: Hey. Is the big room open? / JUNE: Not till four. / DANNY: I'll wait. / JUNE: Suit yourself.
4. He sits on a stool. / Taps the counter. / Pretends not to look at her. / She pretends not to notice.
5. DANNY: Do you work here, like, always? / JUNE: Saturdays. And school nights. And whenever Mr. Pruitt forgets to pay somebody else. / DANNY: That sounds rough. / JUNE: It's okay. I get free popcorn.
6. She slides a small bag across the counter. / He takes it. / DANNY: Thanks. / JUNE: Don't tell Pruitt. / DANNY: Wouldn't.
7. They sit in friendly quiet. / The disco ball turns. / A speaker crackles overhead.
8. MR. PRUITT: June, did you restock the nacho cheese? / JUNE: Yes, Mr. Pruitt! / MR. PRUITT: Good girl.
9. June rolls her eyes. / Danny almost laughs.
10. He pulls a folded paper from his jacket.
11. DANNY: Can I ask you something? Not weird. / JUNE: That's how weird questions start. / DANNY: It's about my sister. / JUNE: Okay.
12. He unfolds the paper. / A flyer. / A missing-person flyer, photocopied crooked. / A girl's face, braids like June's.
13. DANNY: She worked here. Last summer.
14. June stops counting quarters. / JUNE: Rosalind. / DANNY: You knew her? / JUNE: I took her shifts. When she left. / DANNY: She didn't leave. She --
15. He cuts himself off. / June closes the cash drawer. / Very slowly.
16. JUNE: Danny. Mr. Pruitt keeps a locked room. Behind the skate lockers. / DANNY: What's in it? / JUNE: I don't know. But Rosalind's jacket is hanging on the door.
17. Danny stares at her. / The popcorn machine hums. / The disco ball spins across his face.
18. DANNY: Show me. / JUNE: Not now. / DANNY: Why not?
19. MR. PRUITT: Folks, we're opening the big room early today. Skate on in! / The doors at the far end of the rink swing open. / Light floods the floor.
20. JUNE: That's why.
21. She reaches under the counter. / Pulls out a ring of keys. / Presses them into his palm. / JUNE: Four o'clock. When the music's loud. The brass one.
22. DANNY: Thank you. / JUNE: Don't thank me yet.
23. Danny pockets the keys. / Picks up his gym bag. / Skaters spill through the far doors. / June puts on her Walkman and turns back to the register, calm as a clock.
24. The disco ball catches Danny's face one last time as he walks into the crowd.

### s01060
0. A circular canteen under a clear shell. / Earth hangs in the sky like a blue marble. / Long tables of recycled plastic, trays of steaming something. / A hum of pumps from beneath the floor.
1. DR. HALCYON PRYCE, 50s, lead agronomist, white coat over coveralls, sits at a central table stirring something green with a spork. / Across from her, TEODORO FALCONE, 40s, mechanic, grease under his nails, eats a protein bar with no pleasure. / CHIOMA UDOH, 30s, hydroponics tech, tablet propped against a water pouch, scrolls a spreadsheet.
2. HALCYON: Do you taste that? / TEODORO: It's lunch. / HALCYON: It's kale. Mostly. / TEODORO: It's mostly lunch.
3. CHIOMA: Cycle three yield is down four percent. / HALCYON: Down from what? / CHIOMA: From the last harvest. / HALCYON: That's not a number. That's a mood. / CHIOMA: Four percent is a number. / HALCYON: It depends on who's counting.
4. TEODORO: I'm counting calories. Mine are low.
5. HALCYON: Teodoro, you've been quiet this week. / TEODORO: I'm always quiet. / HALCYON: Quiet-quiet or worried-quiet?
6. TEODORO: Pump seven is making a sound. / HALCYON: What kind of sound? / TEODORO: A mean one. / CHIOMA: Mean how? / TEODORO: Like a dog that hasn't decided yet.
7. HALCYON: Have you filed a ticket? / TEODORO: I filed three. Maintenance said "scheduled." / HALCYON: When? / TEODORO: Spring. / HALCYON: It's October. / TEODORO: I'm aware.
8. A figure appears at the cafeteria entrance. / NADEEM ROUSSEAU, 20s, intern, lanky, glasses sliding down his nose, balances a tray with the posture of someone who has never carried a tray. / He scans the room and heads toward them.
9. NADEEM: Is this seat taken? / HALCYON: Sit. / NADEEM: Thank you, Doctor. / HALCYON: Halcyon. Dr. is for formal complaints. / NADEEM: Halcyon. Okay.
10. He sits. / Opens his mouth. / Closes it. / Opens it again.
11. NADEEM: Sorry. I'm new. Today's my second day. / TEODORO: You'll get used to the food. / NADEEM: Is it always this beige? / CHIOMA: Only on days that end in Y.
12. NADEEM: What do you do here? / CHIOMA: I keep the plants alive. Teodoro keeps the plants' water alive. Halcyon keeps all of us alive. / HALCYON: Aspirationally. / NADEEM: That's a lot of alive. / HALCYON: On a rock with no air, it's the only job.
13. NADEEM: I read about the bio-loop in school. Water, nutrients, light. Every molecule counted. / HALCYON: And? / NADEEM: It's more beautiful in a textbook. / HALCYON: It's less beautiful in a textbook. The textbook doesn't smell.
14. TEODORO: Pump seven. / NADEEM: Sorry? / CHIOMA: Don't. He'll tell you for an hour. / TEODORO: It's a good story. / CHIOMA: It's a pump. / TEODORO: It's a pump with a personality.
15. NADEEM: I like pumps. / TEODORO: Kid, you're hired. / HALCYON: He's already hired. / TEODORO: Then you're promoted. / NADEEM: To what? / TEODORO: To the person who gets to listen. / CHIOMA: Good luck.
16. COMMANDER BENEDIKT STONE, 60s, dome administrator, cane tapping, pauses at the end of their table with a tray of nothing but coffee. / BENEDIKT: Dr. Pryce. Mr. Falcone. Is this the new hire? / NADEEM: Yes, sir. / BENEDIKT: Welcome to the Moon. Try not to break it.
17. He moves on. / Nadeem laughs, uncertain.
18. He picks up his spork and tastes the green stuff. / His face does something complicated. / NADEEM: That's really kale. / HALCYON: Told you.
19. They eat. / Pumps hum below. / Overhead, Earth turns slowly, blue and white and very far away.

### s01111
0. Balloons. / A banner. / A cake with too many candles.
1. Five adults crouch behind furniture, whispering, trying not to giggle.
2. BEATRIX "BEA" LINDQVIST-ADE, 40s, behind the couch with a noisemaker. / COLM FITZGIBBON, 30s, behind the armchair holding a camera. / ROSALIND "ROZ" PELLEGRINO-OKON, 50s, under the dining table with the cake. / YOSHIRO BAPTISTE, 20s, crouched by the door, finger on the lights. / And TIBERIUS "TIBBY" MORROW, 60s, hidden inside the coat closet.
3. BEA: She's coming up the stairs. / COLM: How do you know? / BEA: I hear her keys. / ROZ: She's got the wrong keys. / YOSHIRO: Shh!
4. The doorknob rattles. / All five freeze.
5. A key scrapes and fails. / Another. / A third.
6. TIBBY: Is it her? / BEA: Quiet!
7. The door swings open. / A silhouette in the hall: a stranger in a delivery uniform, holding a pizza box.
8. DELIVERY GUY: Uh. Hello?
9. Yoshiro flips the lights. / Everyone leaps up.
10. ALL: Surprise!
11. Roz pitches the cake into the air. / Colm's flash goes off. / Bea blows the noisemaker in the Delivery Guy's face. / He yelps, the pizza flies, the cake lands on Tibby as he tumbles out of the closet.
12. Silence. / Frosting drips from Tibby's nose. / The Delivery Guy stares at them all.
13. DELIVERY GUY: ...Does anyone here order a large pepperoni? / BEA: Wrong apartment? / DELIVERY GUY: Apparently.
14. Tibby licks frosting from his lip. / TIBBY: Well. I'll take the pizza.

## Comparisons
p0: a = s01063 beat 7 | b = s01055 beat 5
p1: a = s01078 beat 17 | b = s01096 beat 5
p2: a = s01056 beat 8 | b = s01054 beat 17
p3: a = s01084 beat 19 | b = s01078 beat 11
p4: a = s01060 beat 19 | b = s01111 beat 10
p5: a = s01056 beat 11 | b = s01046 beat 5
p6: a = s01035 beat 6 | b = s01072 beat 9
p7: a = s01116 beat 6 | b = s01114 beat 0
p8: a = s01060 beat 15 | b = s01063 beat 0
p9: a = s01117 beat 10 | b = s01072 beat 2
p10: a = s01114 beat 8 | b = s01088 beat 7
p11: a = s01094 beat 5 | b = s01078 beat 19
p12: a = s01063 beat 21 | b = s01097 beat 8
p13: a = s01035 beat 11 | b = s01111 beat 13
p14: a = s01094 beat 6 | b = s01037 beat 16
p15: a = s01116 beat 10 | b = s01063 beat 20
p16: a = s01116 beat 6 | b = s01072 beat 0
p17: a = s01055 beat 8 | b = s01072 beat 9
p18: a = s01037 beat 9 | b = s01048 beat 1
p19: a = s01096 beat 10 | b = s01094 beat 19
p20: a = s01094 beat 16 | b = s01048 beat 7
p21: a = s01117 beat 16 | b = s01078 beat 9
p22: a = s01094 beat 14 | b = s01057 beat 16
p23: a = s01055 beat 22 | b = s01025 beat 11
p24: a = s01056 beat 4 | b = s01054 beat 31
p25: a = s01063 beat 14 | b = s01088 beat 10
p26: a = s01063 beat 13 | b = s01054 beat 14
p27: a = s01072 beat 4 | b = s01078 beat 10
p28: a = s01035 beat 15 | b = s01094 beat 0
p29: a = s01048 beat 0 | b = s01046 beat 4
p30: a = s01094 beat 12 | b = s01055 beat 3
p31: a = s01111 beat 3 | b = s01035 beat 2
p32: a = s01072 beat 10 | b = s01046 beat 17
p33: a = s01025 beat 28 | b = s01048 beat 8
p34: a = s01055 beat 9 | b = s01094 beat 16
p35: a = s01114 beat 0 | b = s01054 beat 32
p36: a = s01088 beat 18 | b = s01090 beat 5
p37: a = s01090 beat 10 | b = s01057 beat 12