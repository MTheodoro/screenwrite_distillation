You classify screenplay action lines that have NO character as their agent, for a writing tool.
Every line in the script must belong somewhere, so each marked line (`*`) gets exactly one kind:

- `setting`  : the place, scenery, light, weather, time of day, what a space looks/sounds like as a whole
               ("A cramped kitchen.", "Rain hammers the windows.", "Dawn over the harbor.", "Silence.")
- `event`    : something happens or an object/sound/vehicle/machine acts, with no character doing it
               ("The phone rings.", "A car backfires outside.", "Cash.", "The door swings shut.", "A light blinks.")
- `extra`    : done by people or creatures who are NOT characters of the scene (unnamed passers-by, a crowd that
               is not in the names list, an animal, a monster) ("A waiter passes.", "Two women lean on its bumper.")
- `camera`   : shot, edit or on-screen-text directions ("CLOSE ON the letter.", "We see...", "INSERT - phone",
               "SUPER: 1999", "Back to scene.", "INTERCUT", "Time cut.")
- `abstract` : narration, reflection, commentary, theme, time passing, things that are not visible action
               ("Some wounds never close.", "Years pass.", "This is the last time they will speak.")
- `character`: actually done by / describing a character in the names list (the marking was wrong). Then also give
               the name(s).

Units: `A` = action sentence (¶ = first sentence of a paragraph), `D` = dialogue block. Only `*` lines need a label;
the rest is context.

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusKT/group_0058.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01953 | INT. FENCING HALL - EVENING
Detected names (may be incomplete or contain aliases): SORAYA DELGADO, BOHDAN MARCHENKO, HARRIET QUIGLEY
* 1 A ¶ A high-ceilinged gymnasium.
* 2 A Strip lights glare on white lamé.
* 3 A Sabres ring against each other on two raised pistes.
4 A ¶ SORAYA DELGADO, 20s, hood up, sits alone on a bench taping her blade guard.
5 A Across the room, BOHDAN MARCHENKO, 50s, her coach, argues quietly with a judge.
6 A HARRIET QUIGLEY, 30s, a rival in a silver jacket, stretches her hamstring on the opposite piste.
7 A ¶ Soraya finishes taping.
8 A She pulls her mask over her head.
9 A She rises.
10 A She crosses the floor with an easy stride.
11 D BOHDAN: Soraya. A word.
12 D SORAYA: After the bout.
13 D BOHDAN: Before.
14 A ¶ She stops.
15 A He crosses to her.
16 A He lowers his voice.
17 D BOHDAN [CONT'D]: Harriet is your sister's friend.
18 D SORAYA: I know.
19 D BOHDAN: She has been asking for you.
20 D SORAYA: I know that too.
21 D HARRIET (calling): Ready when you are!
22 A ¶ Soraya raises a hand to show she's heard.
23 A She takes two steps toward the piste and then stops again.
24 A She looks at Bohdan.
25 D SORAYA: What is it?
26 D BOHDAN: Your sister called.
27 A ¶ She goes still.
28 A He looks at his shoes.
29 D SORAYA: Say it.
30 D BOHDAN: She's in hospital. It's not serious. They think.
31 D SORAYA: Why didn't you tell me earlier?
32 D BOHDAN: Because you've waited four years for this bout.
33 A ¶ She tears off her mask.
34 A She throws it at the bench.
* 35 A It bounces and slides to Harriet's feet.
36 A Harriet picks it up, turns it over, and carries it back to her.
37 D HARRIET: Go. I'll tell them you withdrew.
38 D SORAYA: I didn't withdraw.
39 D HARRIET: You did now.
40 A ¶ Soraya takes the mask.
41 A She holds it a moment, then nods once.
42 A She walks out of the hall without looking back.

### SCENE s01954 | INT. VANTAGEPOINT SYNERGIES - OPEN OFFICE - DAY
Detected names (may be incomplete or contain aliases): GORDON PRYCE, VP, SHANICE WHITLOCK, ANIL DESHPANDE, BETTINA KROL, FITZ MORIARTY, MS. OYEWOLE
* 1 A ¶ A sea of gray cubicles under a banner reading "WE ARE FAMILY."
* 2 A A dead plant guards the water cooler.
3 A ¶ GORDON PRYCE, 50s, regional VP, stands on a swivel chair with a megaphone, delivering a speech.
4 A SHANICE WHITLOCK, 30s, sits at her desk eating yogurt and not looking up.
5 A ANIL DESHPANDE, 40s, mouthing the words, nods along without hearing them.
6 A BETTINA KROL, 50s, in a cardigan, sorts staples by size.
7 A FITZ MORIARTY, 20s, an intern, takes photos for the company newsletter.
8 D GORDON: Team! I have an announcement!
9 D SHANICE (not looking up): Is it a layoff?
10 D GORDON: It's a realignment.
11 D ANIL: It's a layoff.
12 D GORDON: It is a strategic pivot toward efficiency!
13 A ¶ Bettina picks up the stapler and stacks three boxes in a neat pyramid.
14 A Fitz steps onto a desk for a better angle and loses his balance, then rights himself and fires off a flash straight into Gordon's eyes.
15 A Gordon staggers, flailing the megaphone, and Anil catches his chair as it rolls.
16 D MS. OYEWOLE [V.O.] (over the PA): Mr. Pryce. Corporate would like a word.
17 D GORDON (squinting): Now?
18 D MS. OYEWOLE [V.O.]: Now, Gordon.
19 A ¶ Gordon climbs down, handing the megaphone to Fitz, who points it at Bettina, who points the stapler back at him.
20 A Shanice finally lifts her head, spoon halfway to her mouth.
21 D SHANICE: Is that about us?
22 D MS. OYEWOLE [V.O.]: It's about him.
23 A ¶ Anil bursts into a coughing laugh.
24 A Gordon straightens his tie and walks toward the elevator, shoulders sagging.
25 D BETTINA (softly): Poor Gordon.
26 D SHANICE: He'll be fine.
27 D ANIL: He won't.
28 D FITZ: I got a great shot of it.

### SCENE s01955_0 | EXT. STRANDED GONDOLA - ALPINE SLOPE - DUSK
Detected names (may be incomplete or contain aliases): 
* 1 A ¶ A red cable car dangles two hundred feet above a snowfield, swaying slightly.
* 2 A The lights of the valley are a long way below.
* 3 A Wind sighs in the cables.

### SCENE s01955_1 | INT. GONDOLA - CONTINUOUS
Detected names (may be incomplete or contain aliases): MIREILLE CASTANEDA, OZZIE BERGSTROM, NKECHI OBI, DARIUSZ PAWLAK, XIMENA TORRES, NEIL, ATWOOD
1 A ¶ Six people share a steel cabin built for eight.
* 2 A Windows fog with breath.
* 3 A A flask passes hand to hand.
4 A ¶ MIREILLE CASTANEDA, 60s, in a white wool coat, sits in the corner with her eyes closed, rubbing a rosary between her thumb and finger.
5 A OZZIE BERGSTROM, 30s, a lanky snowboarder, leans against the door, thumbing a dead phone.
6 A NKECHI OBI, 40s, a nurse, tends to DARIUSZ PAWLAK, 70s, whose hand trembles around a thermos.
7 A XIMENA TORRES, 20s, squeezes onto the bench beside them, scrolling through a map with no signal.
8 A And CORNELIUS "NEIL" ATWOOD, 50s, stands at the window and watches the dark.
9 A ¶ He turns from the window.
10 A She glances at him.
11 A They both look away.
12 A ¶ Ozzie slides to the floor.
13 A Ximena shifts to make room for his legs, and Nkechi tucks a blanket around Dariusz's knees.
14 A Mireille sighs.
15 D NEIL: How long has it been?
16 D NKECHI: Forty minutes.
17 D NEIL: It feels like four hours.
18 D OZZIE: It always does.
19 D XIMENA: Has anyone tried the emergency cord?
20 D DARIUSZ: It's been pulled twice.
21 D NKECHI: Both times, a recorded voice said help was coming.
22 D MIREILLE (eyes closed): Help is always coming.
* 23 A ¶ Silence.
* 24 A The cabin sways.
25 A Everyone shifts their weight at once, and Ozzie curses.
26 A They steady.
27 A Nkechi glances at Dariusz, who has gone pale.
28 D NKECHI [CONT'D]: Drink some water.
29 D DARIUSZ: I am fine.
30 D NKECHI: I know. Drink.
31 A ¶ He does.
32 A She smiles and pats his hand.
33 A Neil returns to the window.
34 A Ximena folds up her phone.
35 A Ozzie tilts his head back against the door.
* 36 A ¶ The cabin lurches once and then, with a long, heavy groan, begins to move.

### SCENE s01956 | EXT. SCHOOL ROOFTOP - PIGEON COOP - DAWN
Detected names (may be incomplete or contain aliases): MARISOL QUINONES, ELI ABRAMOWITZ
* 1 A ¶ Tar paper and chimney pots.
* 2 A A lean-to coop of chicken wire and scrap plywood, thick with the soft burble of birds.
* 3 A Behind it, the city blushes pink under a rising sun.
4 A ¶ MARISOL QUINONES, 16, in a school sweater with the sleeves pushed up, kneels beside the coop and shakes seed into a tin tray.
5 A ELI ABRAMOWITZ, 16, thin, round glasses, tries to climb through the roof hatch with a cardboard box held above his head.
* 6 A A single pigeon sits in the box, unimpressed.
7 D ELI: Marisol. I brought the injured one.
8 D MARISOL: You brought Gerald?
9 D ELI: His name is Clementine.
10 A ¶ The hatch slams on his foot.
11 A He hops.
* 12 A The box tips and the pigeon bursts out in a flurry of feathers.
13 A Marisol lunges and catches it against her chest while Eli topples back down the hatch, and a distant thump rises from the stairwell.
14 D MARISOL: Eli?
15 D ELI [O.S.]: I'm fine.
16 A ¶ She cradles the bird.
* 17 A It coos.
18 A She smooths its wing with a thumb, and a tiny smile creeps over her face.

### SCENE s01957 | INT. CHEESE CAVE - NIGHT
Detected names (may be incomplete or contain aliases): LUCA FERRANTE, TAMAR ELKAYAM, BRODIE MACLEAN, RHIANNON DAVIES
* 1 A ¶ Cold.
* 2 A Wet stone.
* 3 A Racks of aging wheels in rows.
* 4 A A single utility bulb.
5 A ¶ LUCA FERRANTE, 40s, crowbar in hand.
6 A TAMAR ELKAYAM, 30s, holds a flashlight.
7 A BRODIE MACLEAN, 20s, hauls a sack.
8 D LUCA: Which wheel?
9 D TAMAR: Third rack. The black wax.
10 D BRODIE: It all looks black.
11 D TAMAR: The one that smells like feet.
12 A ¶ Brodie sniffs.
13 A Gags.
14 A Points.
15 D BRODIE: That one.
16 A ¶ Luca wedges the crowbar under the wheel.
* 17 A It pops free.
* 18 A Inside, a hollow core and a small steel case.
19 D LUCA: Got it.
* 20 A ¶ A flashlight swings in from the entrance.
21 A RHIANNON DAVIES, 30s, in a hairnet and rubber boots, a nightwatch's baton in her fist, steps from the dark.
22 D RHIANNON: Evening.
23 A ¶ They freeze.
24 A Tamar lowers the light.
25 A Brodie drops the sack.
26 D RHIANNON [CONT'D]: That wheel's forty thousand euros.
27 D TAMAR: We'll pay for it.
28 D RHIANNON: Not with cash.
29 A ¶ She steps forward.
30 A She holds out her free hand.
31 A Luca hands her the steel case.
32 D LUCA: You knew.
33 D RHIANNON: I run this cave, mate.
34 A ¶ She slides the case under her arm.
35 A Tamar, Luca, and Brodie exchange looks.
36 A Nobody moves.
* 37 A Water drips somewhere.
38 D BRODIE: So are we fired?
39 D RHIANNON: You were never hired.

### SCENE s01958 | INT. PLANETARIUM DOME - NIGHT
Detected names (may be incomplete or contain aliases): OTTAVIA LINDO, RAFF, OBUYA
* 1 A ¶ A hushed hemisphere.
* 2 A A painted sky of stars wheels overhead.
* 3 A A single projector hums at the center on a pedestal.
4 A ¶ OTTAVIA LINDO, 30s, in a velvet jacket, stands at the control console.
5 A RAFFERTY "RAFF" OBUYA, 30s, sits in the front row of reclining seats with a paper bag of takeout.
6 D OTTAVIA: Raff, you're not supposed to be in here.
7 D RAFF: I brought dumplings.
8 D OTTAVIA: That's not an excuse.
9 D RAFF: It's a bribe.
10 A ¶ She sighs and turns the dome to a deep midnight blue.
11 A He lies back in the chair.
* 12 A The stars brighten.
13 D RAFF [CONT'D]: Show me the Southern Cross.
14 D OTTAVIA: You can't see it from here.
15 D RAFF: Show me anyway.
16 A ¶ She taps a key.
* 17 A A cluster of stars swells in the south.
18 A He lifts the bag and shakes it.
19 D OTTAVIA: Five minutes. Then you leave.
20 D RAFF: Come sit.
21 D OTTAVIA: Raff--
22 D RAFF: Ottavia.
23 A ¶ She stops.
24 A She crosses the aisle and lowers herself into the seat beside him.
25 A They lie back together under the painted sky.
26 D OTTAVIA: I'm sorry about Sunday.
27 D RAFF: I'm sorry about Sunday.
28 A ¶ They both laugh.
* 29 A The Southern Cross turns slowly overhead.
30 D RAFF [CONT'D]: Ottavia, I got the job in Perth.
31 A ¶ She stiffens.
32 A She turns her head toward him.
33 D OTTAVIA: Of course you did.
34 D RAFF: I haven't said yes.
35 D OTTAVIA: Then say no.
36 D RAFF: Ask me to.
* 37 A ¶ The projector hums.
38 A She stares at the false stars for a long time.
39 A Then she takes his hand.
40 D OTTAVIA: Don't go, Raff.

### SCENE s01959 | INT. AMBULANCE - MOVING - NIGHT
Detected names (may be incomplete or contain aliases): DELIA NAKAGAWA, ODETTE FARADAY, MARCUS
* 1 A ¶ Blue light flickers across steel cabinets.
* 2 A A monitor beeps in a steady rhythm.
* 3 A The vehicle sways around a corner.
4 A ¶ DELIA NAKAGAWA, 30s, a paramedic in a navy jumpsuit, kneels beside the stretcher with a blood pressure cuff.
5 A ODETTE FARADAY, 70s, lies on it under a gray blanket, a mask over her nose.
6 A She grips a small cloth purse against her ribs.
7 A ¶ Delia checks the monitor.
8 A She frowns.
9 A She loosens the cuff.
10 A She pats her patient's arm.
11 D MARCUS [V.O.] (over radio, crackling): Medic Nine, status on your patient?
12 D DELIA (into radio): Seventy-year-old female, chest pain, BP one-ten over seventy, sats at ninety-four.
13 D MARCUS [V.O.]: Copy. ETA?
14 D DELIA: Eight minutes.
15 D MARCUS [V.O.]: Hospital's standing by.
16 A ¶ She clips the radio back on her shoulder.
17 A She squeezes the older woman's hand.
18 A Odette's eyes drift open.
19 D ODETTE: Did I faint?
20 D DELIA: Not quite, Mrs. Faraday. You gave us a scare.
21 D ODETTE: She tends to.
22 D DELIA: Who does?
23 D ODETTE: My daughter. Always rushing.
24 A ¶ Delia glances at the purse.
25 A She raises an eyebrow, waiting.
26 A Odette tightens her grip on it.
27 A She turns her face toward the wall, and after a moment she lets her shoulders relax.
28 D ODETTE [CONT'D]: I'm all right, dear.
29 D DELIA: I know you are.
30 A ¶ She tucks the blanket higher.
* 31 A The ambulance slows.
32 A She checks the monitor again and finally lets herself breathe.
33 D MARCUS [V.O.] (over radio): Medic Nine, you're clear to enter bay two.
34 D DELIA: Copy that.

### SCENE s01960 | INT. HOLLOW OAK - THUNDERSTRUCK TRUNK - NIGHT
Detected names (may be incomplete or contain aliases): EIRA, THORVALD, CALLA, BRENNUS
* 1 A ¶ A cavern of living wood, blackened where lightning split the crown.
* 2 A Fireflies drift in the rafters.
* 3 A A ring of stumps serves as a council table.
* 4 A Rain drums on the bark overhead.
5 A ¶ EIRA, a tall woman with silver braids and a staff of rowan, stands at the head of the ring.
6 A THORVALD, a broad-shouldered hunter in a bearskin, sits on the nearest stump with his axe across his knees.
7 A CALLA, a slight healer in a moss-green shawl, kneels at the center and lays herbs on a flat stone.
8 A BRENNUS, a gaunt scholar with ink-stained fingers, unrolls a map across his lap.
9 D EIRA: We are gathered.
10 D THORVALD: We are late.
11 D EIRA: We are as late as the storm allows.
12 D CALLA (grinding herbs): The river rose another foot at dusk.
13 D BRENNUS: Two feet, by my measure.
14 D THORVALD: Your measure is a stick.
15 D BRENNUS: It is a calibrated stick.
16 A ¶ Eira raps her staff on the floor.
* 17 A The fireflies scatter and re-gather.
18 D EIRA: The question before us is the pass. Do we hold it, or do we abandon the valley?
19 D THORVALD: We hold.
20 D CALLA: We cannot hold. We have no healers to spare.
21 D BRENNUS: We have three hundred archers and a wall.
22 D THORVALD: We have six hundred when the Greycloaks arrive.
23 D CALLA: If they arrive.
24 D EIRA: They will arrive.
25 A ¶ She walks slowly around the ring.
26 A Thorvald watches her with open suspicion.
27 A Brennus watches the map.
28 A Calla watches the stone.
29 D EIRA [CONT'D]: Brennus. The pass, on the map.
30 A ¶ He holds it up.
31 A She traces a line with the tip of her staff.
32 D BRENNUS: Here. A single path, fifty paces wide.
33 D EIRA: And the wall?
34 D BRENNUS: Here. At the narrowest point.
35 D THORVALD: Then we fight at the wall.
36 D EIRA: We fight at the wall, and Brennus commands the archers.
37 D THORVALD: He has never drawn a bow.
38 D BRENNUS: I have read forty books about them.
39 D THORVALD: That is not the same.
40 D CALLA: Enough. He can count better than any of us.
41 A ¶ Thorvald grunts and looks away.
42 D EIRA: Then it is decided. Thorvald takes the left. Brennus the center. Calla tends the wounded in the hollow.
43 D CALLA: And you?
44 D EIRA: I will meet the Greycloaks on the road, and I will not be gentle.
45 A ¶ The council falls silent.
* 46 A Rain drums.
* 47 A A single firefly settles on the staff, glowing steady and gold.
48 D THORVALD: Eira. If this goes badly...
49 D EIRA: It will not.
50 D THORVALD: If it does.
51 D EIRA: Then you will hold the wall until sunrise, and Calla will bury us in the roots.
52 D CALLA: I will bury you in the sweet roots, by the spring.
53 D EIRA: Thank you.
54 A ¶ She raises the staff.
55 A One by one, they rise and place a hand upon it.
* 56 A The light of the fireflies swells around them.

### SCENE s01961 | INT. COASTAL RADIO BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): SAOIRSE TALLCHIEF, DEV
* 1 A ¶ A cramped shack of salt-warped panels.
* 2 A A single microphone, a mixing board, a kettle.
* 3 A Waves slap the pilings below.
* 4 A A phone rests on the desk.
5 A ¶ SAOIRSE TALLCHIEF, 30s, in a fisherman's sweater, sits at the board with her feet on the desk.
* 6 A A "LIVE" lamp glows red.
7 A She leans toward the mic.
8 D SAOIRSE (into mic): Good evening, Gull Point. It's eleven past midnight, the tide is turning, and this is Saoirse with the Long Wave. Whoever's out there on the water, you're not alone.
9 A ¶ She clicks off the mic.
10 A She lowers her feet.
11 A She rubs her face.
12 D SAOIRSE [CONT'D] (to herself): Stop being so cheerful. Nobody likes it.
* 13 A ¶ The phone buzzes.
14 A She picks it up.
15 D SAOIRSE [CONT'D]: Long Wave.
16 D DEV [V.O.] (over phone, warm, unhurried): Hi. Is this the person who told the fishing fleet about my sourdough?
17 D SAOIRSE: It might be.
18 D DEV [V.O.]: I'm Dev. I'm on the boat that took the bread.
19 D SAOIRSE: The Marguerite?
20 D DEV [V.O.]: The same.
21 D SAOIRSE: They said the baker was an old man named Bernard.
22 D DEV [V.O.]: Bernard is a rumor.
23 A ¶ She laughs.
24 A She sets the kettle on its coil.
* 25 A Outside, a gull cries.
26 D SAOIRSE: What do you want to hear, Dev?
27 D DEV [V.O.]: Something slow. For the crew. We've been out three nights.
28 D SAOIRSE (to the room, a half-whisper): Fine, ladies and gentlemen, one slow one for the Marguerite.
29 A ¶ She flicks a switch.
* 30 A A low guitar begins.
31 A She cradles the phone against her shoulder.
32 D SAOIRSE [CONT'D]: Is it going to be this easy every night?
33 D DEV [V.O.]: If you call back.
34 D SAOIRSE: I might.
35 D DEV [V.O.]: Good. I'll bring the bread.
36 D SAOIRSE: You'll be in the middle of the sea.
37 D DEV [V.O.]: Then I'll swim.
38 A ¶ She grins, helpless, and switches the mic back on.
39 D SAOIRSE [CONT'D] (into mic): That was for Dev, and for everyone with salt on their hands.

### SCENE s01962 | INT. MINIVAN - PARKED AT AUTOMATIC CAR WASH - DAY
Detected names (may be incomplete or contain aliases): ANSELMO ROJAS, HUI-MIN CHENG-ROJAS, ISAAC, NOOR, GRANDMA FUMIKO, TUCK
* 1 A ¶ A cramped, crumb-strewn van with a cracked windshield and a bumper sticker reading "MY OTHER CAR IS ALSO THIS."
* 2 A Sunlight bounces off foam outside.
3 A ¶ ANSELMO ROJAS, 40s, in a wrinkled polo, grips the wheel.
4 A HUI-MIN CHENG-ROJAS, 40s, in the passenger seat, juggles a grocery bag and a sippy cup.
5 A In the second row, ISAAC, 10, plays a handheld game, and NOOR, 7, hugs a stuffed giraffe.
6 A In the way back, GRANDMA FUMIKO, 80s, in a floral blouse, folds a paper crane.
7 A Strapped into a car seat beside her, baby TUCK, 1, chews a rubber pretzel.
8 D ANSELMO (to everyone): Okay! Windows up! Doors locked! Nobody touch anything!
9 D ISAAC: I'm not touching anything.
10 D NOOR: I'm touching the giraffe.
11 D HUI-MIN: Noor, that's allowed.
12 D GRANDMA FUMIKO (to Tuck): Look, little one. The soap is coming.
13 D TUCK: Ba!
* 14 A ¶ The van rolls forward.
* 15 A Foam slaps the windshield.
* 16 A Brushes begin to thump along the sides.
17 D ANSELMO (muttering): We're fine. We're fine. We're fine.
18 D HUI-MIN (softly, to him): Anselmo, you have driven through a car wash before.
19 D ANSELMO: Not with her.
20 A ¶ He glances in the mirror at Grandma Fumiko, who folds another crane, serene.

### SCENE s01963 | INT. GARAGE - DAY
Detected names (may be incomplete or contain aliases): EUGENIA PRYOR, THADDEUS PRYOR
* 1 A ¶ Pegboard walls hung with outlines of tools that are no longer there.
* 2 A A workbench strewn with jars of screws.
* 3 A Open cardboard boxes, half-filled.
* 4 A Dust floats in a band of sunlight.
5 A ¶ EUGENIA PRYOR, 50s, in jeans and a button-down, sorts bolts into a coffee can.
6 A Across from her, THADDEUS PRYOR, 50s, stands with a worn leather glove in his hands, turning it over.
7 D EUGENIA: That one's Dad's.
8 D THADDEUS: I know whose it is.
9 D EUGENIA: Take it, if you want.
10 D THADDEUS: I don't want it.
11 D EUGENIA: Then put it in the donate box.
12 D THADDEUS: I'm not putting it in the donate box.
13 D EUGENIA: Then keep it.
14 D THADDEUS: I said I don't want it.
15 A ¶ She stops.
16 A She sets the can down.
* 17 A A long pause.
18 D EUGENIA: What do you want, Thad?
19 D THADDEUS: I want the afternoon to be over.
20 D EUGENIA: It's eleven in the morning.
21 D THADDEUS: Then I want it to be tomorrow.
22 A ¶ She nods slowly.
23 A She goes back to the bolts.
24 D THADDEUS [CONT'D]: Did he ever say anything to you? About the garage?
25 D EUGENIA: He said it was the only room in the house where nobody asked him questions.
26 D THADDEUS: That sounds like him.
27 D EUGENIA: He called it the quiet room.
28 D THADDEUS: He never called it that to me.
29 D EUGENIA: You never asked.
30 D THADDEUS: He never gave me a chance.
31 D EUGENIA: Thad.
32 D THADDEUS: I'm just saying. Eight years of weekends, and I'm still learning his hobbies from the pegboard.
33 D EUGENIA: He fixed your bike once.
34 D THADDEUS: He fixed it wrong. I rode it into a wall.
35 D EUGENIA: He came to the hospital.
36 D THADDEUS: For twenty minutes.
37 D EUGENIA: For four hours. You were asleep.
38 D THADDEUS (a beat): I didn't know that.
39 D EUGENIA: Now you do.
40 A ¶ He sets the glove on the workbench.
41 A He smooths the leather.
42 A He leaves his hand on it.
43 D THADDEUS: I'll take the can of bolts.
44 D EUGENIA: They're all different sizes.
45 D THADDEUS: I know.
46 A ¶ She hands him the can.
47 A He holds it against his chest, and nods, and does not look at her.

### SCENE s01964 | INT. CORPORATE MASCOT COSTUME ROOM - DAY
Detected names (may be incomplete or contain aliases): DUNCAN ALBRIGHT, INTERN, MS. VANDERHOOF, KIRAN SETHI
* 1 A ¶ A windowless closet crowded with oversized plush heads on shelves.
* 2 A A giant foam taco, a giant foam toaster, a lion with one eye missing.
* 3 A A speaker on the wall crackles.
4 A ¶ DUNCAN ALBRIGHT, 50s, regional marketing manager, tapped-out and pacing, shoves a mannequin aside.
5 A In the doorway stands an INTERN, 20s, in an oversized lanyard, holding a clipboard and a lukewarm coffee.
6 D DUNCAN: Who are you?
7 D INTERN: I'm the, um, intern.
8 D DUNCAN: I've never seen you before.
9 D INTERN: I started Monday.
10 D DUNCAN: It's Thursday.
11 D INTERN: I know.
12 D DUNCAN: Come in, come in. Close the door.
13 A ¶ The Intern closes it.
* 14 A The room shrinks.
15 A Duncan rummages through the costumes, pulls out a hulking toaster head, and tosses it to the Intern.
16 D DUNCAN [CONT'D]: Put that on.
17 D INTERN: Why?
18 D DUNCAN: Because Brian called in sick, and the parade starts at noon.
19 D INTERN: I'm not trained for this.
20 D DUNCAN: It's a toaster. It pops up.
* 21 A ¶ The wall speaker crackles to life.
* 22 A A brisk female voice fills the closet.
23 D MS. VANDERHOOF [V.O.]: Duncan. I'm told the toaster is missing.
24 D DUNCAN (to the speaker): It's being handled, Ms. Vanderhoof.
25 D MS. VANDERHOOF [V.O.]: By whom?
26 D DUNCAN (glancing at the Intern): By... Kiran.
27 D INTERN: Kiran?
28 D DUNCAN (sotto): It's what's on your lanyard.
29 A ¶ The Intern checks the tag.
* 30 A It does say KIRAN SETHI in tiny type.
31 A Kiran puts the toaster head on.
* 32 A A muffled voice emerges.
33 D KIRAN (muffled): This smells like feet.
34 D MS. VANDERHOOF [V.O.]: Is Kiran ready?
35 D KIRAN (muffled): Kiran is as ready as Kiran will ever be.
36 D DUNCAN: Excellent. Go pop.
37 A ¶ Kiran waddles out the door and collides with the frame.
* 38 A The toaster head falls off and rolls across the floor.
39 A Duncan buries his face in his hands.
40 D MS. VANDERHOOF [V.O.]: I heard that.

### SCENE s01965 | INT. CHURCH BASEMENT - GRIEF SUPPORT GROUP - NIGHT
Detected names (may be incomplete or contain aliases): PASTOR LUCILLE MARCHBANKS, DWAYNE TOLLIVER, ILSE BRANDL, HAMZA QURESHI, BEAU FONTENOT, NEWCOMER, FELICIA
* 1 A ¶ Folding chairs in a circle.
* 2 A Styrofoam cups.
* 3 A A hand-lettered banner reads "WE REMEMBER."
4 A ¶ PASTOR LUCILLE MARCHBANKS, 60s, presides over a plate of lemon bars.
5 A DWAYNE TOLLIVER, 40s, in a welder's jacket, grips his cup.
6 A ILSE BRANDL, 70s, in a lilac cardigan, dabs at her eyes.
7 A HAMZA QURESHI, 20s, cross-armed, stares at the floor.
8 A BEAU FONTENOT, 30s, jittery, taps a foot.
9 A A NEWCOMER, 30s, stands at the door in a rain-soaked coat.
10 D LUCILLE: Everyone, we have a guest.
11 D NEWCOMER: I'll just sit.
12 D DWAYNE: We don't bite.
13 D ILSE: We do, a little.
14 A ¶ The newcomer takes the empty chair.
15 A Beau offers a lemon bar.
16 A The newcomer takes it, turns it over, and sets it on the floor.
17 D LUCILLE: We say our names and our losses. Dwayne, will you begin?
18 D DWAYNE: Dwayne. My brother, Marcus. Eleven months.
19 D ILSE: Ilse. My Walter. Nineteen years.
20 D HAMZA: Hamza. My mother. Last Tuesday.
21 D BEAU: Beau. My dog, Biscuit. And my wife, who left, which is kind of the same.
22 D LUCILLE: Beau.
23 D BEAU: I know. I know.
24 A ¶ All eyes turn to the newcomer.
25 D NEWCOMER: Felicia. My daughter. She would have been six.
* 26 A ¶ Silence.
* 27 A The radiator ticks.
28 A Ilse reaches across the gap and takes Felicia's hand.
29 A Hamza finally looks up.
30 D HAMZA: I'm sorry.
31 D FELICIA: Thank you.
32 A ¶ Felicia starts to cry.
33 A Dwayne pulls a handkerchief from his jacket and hands it over.
34 A The circle closes in a little, chair by chair.
35 D LUCILLE: You're welcome here as long as you need.
36 D FELICIA: Even if I don't talk?
37 D BEAU: Especially then.
38 D ILSE: Especially then.
39 A ¶ Lucille smiles.
40 A She passes the lemon bars around the circle, and one by one, they each take one.

### SCENE s01966 | INT. DELIVERY ROOM - NIGHT
Detected names (may be incomplete or contain aliases): JOANNE KETTERING, AMARA NWOSU, BERTRAND
* 1 A ¶ Monitors blink.
* 2 A A woman breathes hard on the bed.
* 3 A A speakerphone sits on the tray beside her, a tinny voice leaking out.
4 A ¶ JOANNE KETTERING, 30s, sweat-slicked, grips the bedrail.
5 A DR. AMARA NWOSU, 40s, sits at the foot of the bed in scrubs, calm.
6 A She lifts one hand to check a monitor, and Joanne squeezes the other.
7 D BERTRAND [V.O.] (over speakerphone): I'm on the ferry, I'm on the ferry, I'll be there in twenty minutes.
8 D JOANNE: You said ten.
9 D BERTRAND [V.O.]: There was a delay.
10 D JOANNE: You said ten, Bertrand!
11 D DR. NWOSU: She's strong. Keep going.
12 D JOANNE: I'm going to kill him.
13 D DR. NWOSU: Later. Breathe.
14 A ¶ She does.
15 A She screams.
* 16 A The monitor spikes.
17 A Dr. Nwosu rises, takes her position, and nods to the nurse.
18 D DR. NWOSU [CONT'D]: Now. Push.
19 D BERTRAND [V.O.]: Jo? Jo, is she okay?
20 D JOANNE: She's fine! I'm not!
21 A ¶ She pushes.
* 22 A A small cry cuts through the room.
23 A Dr. Nwosu lifts a squirming newborn into the light.
24 A Joanne collapses against the pillow, laughing and crying at once.
25 D BERTRAND [V.O.] (over speakerphone, faint): Is that her? Is that the baby?
26 D JOANNE (to the phone): Come meet her, you idiot.

### SCENE s01967 | EXT. MARATHON AID STATION - MILE 22 - 3 A.M.
Detected names (may be incomplete or contain aliases): OTTILIE MARSH, PAVEL DVORAK, YOSHIRO TANABE
* 1 A ¶ A folding table under a sodium streetlight.
* 2 A Paper cups in rows.
* 3 A A cooler of orange slices.
* 4 A The course winds into the dark.
5 A ¶ OTTILIE MARSH, 60s, in a reflective vest, tops up cups from a jug.
6 A PAVEL DVORAK, 30s, a volunteer, sits on a camp chair and stares at the road.
7 A YOSHIRO TANABE, 40s, a medic, arranges bandages in a tackle box.
8 A ¶ Ottilie finishes the row.
9 A She wipes her hands.
10 A She glances at the road, then at Pavel.
11 A He does not look at her.
12 A ¶ She slides a cup across the table.
13 A He takes it.
14 A He holds it without drinking.
15 D YOSHIRO: Anyone coming?
16 D OTTILIE: Not yet.
17 D PAVEL: They'll be a while. The leaders passed an hour ago.
18 D YOSHIRO: I'd run it again.
19 D OTTILIE: You would not.
20 D YOSHIRO: I would.
21 A ¶ She smiles.
22 A He does not.
23 A Pavel gets up and stands at the edge of the light.
24 A He puts the cup down on the table without a word.
25 A After a moment she follows his gaze.
26 D OTTILIE: It was last year, wasn't it.
27 D PAVEL: I'm fine.
28 A ¶ She walks to the table, takes up the jug, and carries it to him.
29 A She holds out a full cup, and he accepts it with both hands.
30 D YOSHIRO: Headlights.
31 A ¶ They all turn.
32 A A lone runner appears at the edge of the dark, slow and swaying.
33 A Pavel steps forward with the cup held out in front of him like an offering.

### SCENE s01968 | EXT. WELL-DIGGING CAMP - DESERT - DAY
Detected names (may be incomplete or contain aliases): EZRA LOCKRIDGE, MERCY TAVARES, ANSEL WHITCOMBE
* 1 A ¶ A dry plain under a white sky.
* 2 A A scaffold of timbers stands over a deep shaft.
* 3 A A windlass creaks.
* 4 A A water barrel stands empty in the shade of a tilting wagon.
5 A ¶ EZRA LOCKRIDGE, 50s, sunburnt, sleeves rolled, hauls a bucket of rock and clay up from the shaft hand over hand.
6 A MERCY TAVARES, 30s, in a broad straw hat, stands at the lip of the pit and holds the rope steady.
7 A She is thin, tireless, and has not spoken for a long time.
* 8 A ¶ The bucket clears the rim.
9 A Ezra tips it.
* 10 A A thin trickle of mud slides out.
11 A He kneels, takes a pinch, and rubs it between his fingers.
12 D EZRA: Wet.
13 D MERCY: Wet isn't water.
14 D EZRA: It's near.
15 D MERCY: You said that yesterday.
16 A ¶ He wipes his hands on his trousers.
17 A He rises, stiff.
* 18 A The wind carries a dull sound from the east, the clop of a single horse.
19 A ¶ They turn.
20 A A rider approaches along the dry riverbed, slowly, a long shadow thrown ahead of him.
21 A He is tall and spare, with a black coat and a silver star on his lapel.
22 A ANSEL WHITCOMBE, 40s, a land agent, reins in at the edge of camp and dismounts.
23 D ANSEL: Morning.
24 D EZRA: It's near noon.
25 D ANSEL: So it is. I'm told you've been digging on the Culver claim.
26 D EZRA: I'm told it's nobody's claim.
27 D ANSEL: It's the bank's, as of Tuesday.
28 A ¶ Mercy lets the rope go slack.
29 A Ezra does not move.
* 30 A The windlass creaks as the bucket swings.
31 D MERCY: We have a filed claim.
32 D ANSEL: You have a filed claim in the wrong county.
33 D EZRA: That so.
34 D ANSEL: I'm afraid it is.
35 A ¶ He takes a folded paper from his coat and holds it out.
36 A Ezra does not take it.
37 A Ansel sets it on the windlass crank and steps back.
38 D ANSEL [CONT'D]: You have until sundown.
39 D MERCY: There's water down there.
40 D ANSEL: There's mud.
41 D MERCY: It's water, mister. Give us an hour.
42 A ¶ Ansel looks at the shaft, then at the horizon.
43 A He sighs and removes his hat.
44 A Sweat runs from his hair.
45 D ANSEL: One hour. Then I'm obliged to read it aloud.
46 A ¶ He walks to the shade of the wagon and sits on its tongue.
47 A Ezra waits.
48 A Then he climbs back down the ladder into the shaft.
49 A Mercy takes up the rope again, steady as a post, and begins to haul.

### SCENE s01969 | EXT. PARKING GARAGE ROOFTOP - NIGHT
Detected names (may be incomplete or contain aliases): VERONIKA SALT, CASSIAN BOYLE
* 1 A ¶ Concrete.
* 2 A Painted lines.
* 3 A A rusted rail overlooking a city of amber lights.
* 4 A A single black sedan sits under a dead lamp, engine ticking as it cools.
5 A ¶ VERONIKA SALT, 40s, long coat, briefcase handcuffed to her left wrist, stands at the rail.
6 A She watches the stairwell door.
* 7 A Her breath fogs.
* 8 A ¶ The door opens.
9 A CASSIAN BOYLE, 30s, bare head, shoulders tight in a gray suit, steps onto the roof alone.
10 A He carries nothing.
11 A He stops ten paces away.
12 D VERONIKA: You're early.
13 D CASSIAN: You're not.
14 D VERONIKA: I've been here an hour.
15 D CASSIAN: I know. I watched you from the street.
16 A ¶ She smiles faintly.
17 A She shifts the briefcase.
* 18 A The chain between her wrist and the handle rattles.
19 D VERONIKA: Then you know I came alone.
20 D CASSIAN: I know you came with a gun in your boot.
21 D VERONIKA: It's cold up here.
22 D CASSIAN: It's always cold up here. That's why you picked it.
23 A ¶ She lifts her chin.
* 24 A A car passes on the street below, headlights sliding across the wall.
25 A When the light fades, he has taken one step closer.
26 D VERONIKA: Stop there.
27 D CASSIAN: You said I could come close.
28 D VERONIKA: I said you could come.
29 A ¶ She steps backward until the rail presses against her spine.
30 A He takes another step.
31 A She slides a hand into her coat.
32 A He raises both his, palms open.
33 D CASSIAN: Veronika. You called me.
34 D VERONIKA: I did.
35 D CASSIAN: You told me you had the files.
36 D VERONIKA: I told you what you needed to hear.
37 D CASSIAN: That's not an answer.
38 D VERONIKA: It's the only one I have.
39 A ¶ He studies her.
40 A His shoulders ease.
41 A He lowers his hands.
42 D CASSIAN: You don't have them.
43 D VERONIKA: No.
44 D CASSIAN: You never did.
45 D VERONIKA: I never said I did.
46 D CASSIAN: Then why drag me up here?
47 D VERONIKA: Because I wanted to see your face when you found out.
48 D CASSIAN: And?
49 D VERONIKA: It's disappointing.
50 A ¶ He laughs, short and dry.
51 A She draws a small pistol from her coat and trains it on his chest.
52 A He stops laughing.
* 53 A The garage hums.
54 D CASSIAN: Veronika.
55 D VERONIKA: Cassian.
56 D CASSIAN: Put the gun down.
57 D VERONIKA: Put the gun down, or I'll count to three.
58 A ¶ He glances at the stairwell door.
59 A She follows his gaze.
60 A The moment she looks away he lunges, knocking the pistol aside with the flat of his hand and slamming her into the railing.
* 61 A The briefcase swings on its chain and strikes his hip.
62 A They fall in a heap on the concrete, grappling, her free hand clawing at his collar, his forearm across her throat.
63 D VERONIKA [CONT'D] (gasping): Cassian. Look up.
64 A ¶ He does.
* 65 A Across the roof, three red dots of laser light settle on his chest.
66 A He freezes.
67 A His arm loosens.
68 A She slips out from under him, picks up the pistol, and stands.
69 D CASSIAN: You called them.
70 D VERONIKA: I called everyone.
71 A ¶ She unlocks the briefcase handcuff with a key from her sleeve and drops the case at his feet.
* 72 A The lid is open.
* 73 A It is empty.
74 D VERONIKA [CONT'D]: That's all there ever was.
75 A ¶ She walks to the stairwell door.
76 A At the threshold, she looks back.
77 A He stays kneeling on the concrete in the red light, hands open, and says nothing.
78 A She goes out.
* 79 A The door closes.

### SCENE s01970 | INT. COUNTY SALT DOME - NIGHT
Detected names (may be incomplete or contain aliases): NGOZI ADEYEMI-BROOKS, DEZ, PRUITT, BILLIE WARSHAW, TOMASZ KR, ARLO MENDES
* 1 A ¶ A cavern of road salt, pale as a glacier.
* 2 A A single work lamp hums on a tripod.
3 A ¶ NGOZI ADEYEMI-BROOKS (50s, plow-crew foreman, reading glasses on a cord) stands over a clipboard.
4 A Around her: DEZ "THE DEACON" PRUITT (30s, enormous, soft-voiced), BILLIE WARSHAW (20s, rookie, hi-vis too big), TOMASZ KRÓL (60s, mechanic, grease to the elbow) and ARLO MENDES (40s, union steward, thermos in hand).
5 A ¶ She taps the clipboard.
6 A They go quiet.
7 D NGOZI: Listen up, all of you. The county cut the overnight run. Starting Friday.
* 8 A ¶ Nobody moves.
9 A Tomasz sets down his wrench.
10 D TOMASZ: Cut how.
11 D NGOZI: Cut like gone.
12 D ARLO: They can't. It's in the contract.
13 D NGOZI: Arlo, it's in the contract that they can.
14 A ¶ He looks at the thermos.
15 A Unscrews it.
16 A Doesn't pour.
17 D BILLIE: So I just got here.
18 D DEZ: Billie.
19 D BILLIE: Three weeks. I bought boots.
20 D DEZ: Billie, hush a second.
21 A ¶ She does.
22 A He rests a hand on her shoulder, then thinks better of it and lets it drop.
23 D TOMASZ (to himself): Thirty-one winters.
24 D ARLO: I'll file tonight. Grievance, the whole thing. Ngozi, you sign as witness, Dez, you sign, Tomasz you sign, and Billie, you're probationary so you don't sign anything, you just watch.
25 D BILLIE: That's not fair.
26 D ARLO: No. It's not.
27 D NGOZI: Nobody is filing anything tonight.
28 D ARLO: Excuse me?
29 D NGOZI: I took the deal.
* 30 A ¶ Silence.
* 31 A Salt ticks somewhere in the dark as a small slide settles.
32 D DEZ: What deal.
33 D NGOZI: Day shift. Four of us stay. Two go.
34 D ARLO: Who decides who goes.
35 D NGOZI: I do.
36 D TOMASZ: Then say it.
37 D NGOZI: Tomasz, I'm not going to say it in front of the kids.
38 D TOMASZ: I'm sixty-three years old. Say it.
39 A ¶ She takes off her glasses.
* 40 A They drop on the cord against her chest.
41 D NGOZI: You and Billie. Seniority says you, Tomasz, and last-hired says her, and I fought for it every other way and the number didn't move.
42 D DEZ: You put me ahead of him?
43 D NGOZI: I put nobody ahead of anybody. A spreadsheet did.
44 D ARLO: A spreadsheet. Fantastic. I'll tell my wife I lost a man to a spreadsheet.
45 D BILLIE: I can go. It's fine. I can go.
46 D TOMASZ: Don't you dare say that's fine.
47 D BILLIE: Then what do I say?
48 D TOMASZ: Say you want to burn the place down.
49 D BILLIE: I want to burn the place down.
50 D TOMASZ: Good girl. Now say it like you mean it.
51 A ¶ Dez laughs, a short bark, and that breaks it.
52 A Arlo laughs.
53 A Even Ngozi's mouth moves.
54 A ¶ Then Tomasz is not laughing.
55 A He turns away toward the dark of the dome.
56 D DEZ: Hey. Old man.
57 D TOMASZ (muttering): Thirty-one winters, and a spreadsheet.
58 A ¶ Ngozi puts her glasses back on, picks up the clipboard, and turns it to face them.
59 D NGOZI: Everyone sign the grievance. Everyone. I'll sign first.
60 D ARLO: You just said.
61 D NGOZI: I said nobody files tonight. It's four a.m. We file at nine.
62 A ¶ She signs.
63 A Passes it to Dez.

### SCENE s01971 | INT. FUNICULAR CAR, HALFWAY UP - NIGHT
Detected names (may be incomplete or contain aliases): MADAME ODILE VANTERPOOL, INSPECTOR HOLLIS CRANE, OPERATOR
* 1 A ¶ A wood-paneled funicular car stalled on a steep incline above a sleeping Swiss lake town.
* 2 A Rain on the glass.
* 3 A One brass lamp burns.
4 A ¶ MADAME ODILE VANTERPOOL (60s, fur collar, rings on every finger) sits very upright on the forward bench.
5 A Across from her, INSPECTOR HOLLIS CRANE (40s, rumpled trench coat, a hat he keeps turning in his hands) studies the floor.
6 A Neither speaks.
* 7 A ¶ Wind shifts the car.
* 8 A The cable creaks.
* 9 A ¶ An intercom grille crackles beside the door.
10 D OPERATOR [V.O.] (through the grille): Folks, we have a fault on the lower winch. Twenty minutes, perhaps thirty. Please remain seated.
11 A ¶ Crane glances at the grille, then at Odile, who has not looked up.
12 A She opens her handbag, takes out a small pearl-handled revolver, sets it on her knee as one might set down a glove, and closes the bag again.
13 A Crane watches this, sets his hat on the bench beside him, and slides a hand slowly into his coat pocket and out again with a cigarette case.
14 A He offers her one.
15 A She declines with two fingers.
16 A He lights his own, and the match shakes just once.
17 D CRANE: Terrible weather.
18 D ODILE: It does this in October.
19 D CRANE: Your husband used to say that, I understand.
20 D ODILE: My husband said a great many things.
* 21 A ¶ The lamp flickers.
22 A Crane exhales smoke toward the ceiling.
23 D CRANE: He was found at the bottom of this very hill. Same hour. Same rain.
24 D ODILE: I heard.
25 D CRANE: You didn't come to the funeral.
26 D ODILE: I was unwell.
27 D CRANE: Yet here you are, riding the last car of the night, to a villa you've told everyone you have not visited in a year.
28 A ¶ She turns the revolver a quarter-inch on her knee, so the muzzle points at the door instead of at him.
29 D ODILE: Inspector, you've been very patient. Say what you came to say.
30 D CRANE: The conductor remembers a woman in a fur collar on the evening car. The night of.
31 D ODILE: The conductor is mistaken.
32 D CRANE: He was very sure. He said she tipped him. Said she wore rings on every finger.
* 33 A ¶ Silence.
* 34 A The cable creaks.
35 A Odile lays one ringed hand flat over the revolver and does not lift it.
36 D OPERATOR [V.O.] (through the grille): Fault located. Ten more minutes, folks. Thank you for your patience.
37 A ¶ Crane stubs the cigarette out on the sole of his shoe and puts the butt in his pocket, neat as ever.
38 A Odile picks up the revolver and holds it in her lap with both hands.
39 A Crane does not reach for his hat.
40 A He does not reach for anything.
41 D CRANE: You could shoot me. Before they get the car moving.
42 D ODILE: I could.
43 D CRANE: Nobody would hear it over the rain.
44 D ODILE: No.
45 D CRANE: Then why haven't you?
46 A ¶ She stands.
* 47 A The car sways.
48 A The muzzle comes up, level, steady, and she crosses the three steps between them and puts it against his tie.
49 D ODILE: Because you are the first person in a year who has said his name aloud to me.
50 A ¶ She pulls the hammer back.
51 D CRANE: Odile.
* 52 A ¶ The intercom crackles.
* 53 A The car lurches forward and begins to climb.
54 D OPERATOR [V.O.] (through the grille): And we're moving! Sorry for the delay!
* 55 A ¶ The lamp swings.
56 A Her finger tightens.

### SCENE s01972 | INT. FLOODED SIGNAL BUNKER - NIGHT
Detected names (may be incomplete or contain aliases): SERGEANT IMRE, RHEGYI, COMMANDER
* 1 A ¶ A concrete cell below a ruined rail yard.
* 2 A Knee-deep black water.
* 3 A Shells land overhead in a steady rhythm; dust sifts from the ceiling with each one.
4 A ¶ SERGEANT IMRE VÁRHEGYI (30s, radio operator, face smeared with soot, headset over a bandaged ear) crouches at a field set balanced on a stack of ammunition crates.
5 A He holds the handset in both fists.
6 D IMRE (into handset): Wolf Three, this is Hearth. Say again your last.
* 7 A ¶ Static.
* 8 A A shell lands.
* 9 A A pipe bursts somewhere and a thin stream of water begins to fall on the radio.
10 A He shields it with his body.
11 D COMMANDER [V.O.] (through the handset, thin): Hearth, Wolf Three. Grid is compromised. Repeat, grid is compromised. Fall back to the--
* 12 A ¶ The voice breaks into crackling.
13 D IMRE: Wolf Three, you are cutting out. Say again fall back to where?
* 14 A ¶ Static.
* 15 A Another impact, closer.
* 16 A A chunk of ceiling drops into the water beside him.
17 A He does not flinch; he wipes the handset on his sleeve.
18 D IMRE [CONT'D] (into handset): Wolf Three, Hearth. Do you copy? Wolf Three.
19 D COMMANDER [V.O.] (faint): --the old chapel. East of the water tower. Bring the set if you can carry it.
20 D IMRE: The set weighs forty kilos, sir.
21 D COMMANDER [V.O.]: Then leave it, Sergeant. Leave it and run.
22 A ¶ He looks at the radio.
23 A At the water rising around his thighs.
24 A At the iron ladder bolted to the wall, three rungs of it underwater.
25 D IMRE (into handset): Sir, if I leave it, the battalion has no voice.
26 D COMMANDER [V.O.]: The battalion has no battalion, Imre. Go.
* 27 A ¶ A long beat.
28 A He sets the handset down on the crate, carefully, like something sleeping.
29 A Reaches under the set and unclips the battery.
30 A Pulls the crystal.
31 A Pockets both.
32 D IMRE (muttered): Tell it to the next man.
33 A ¶ He wades to the ladder.
* 34 A Behind him the handset crackles to itself.
35 D COMMANDER [V.O.] (faint, alone): Hearth? Hearth, are you there?
36 A ¶ Imre stops on the ladder with one boot on the lowest dry rung.
37 A He climbs back down.
38 A Picks up the handset.
39 D IMRE (into handset): Wolf Three, Hearth. I am here.
* 40 A ¶ A shell lands.
* 41 A The lamp dies.
* 42 A Darkness, and the sound of rushing water.

### SCENE s01973 | INT. MINIATURE-GOLF CLOCK TOWER, WINDMILL HOLE - NIGHT
Detected names (may be incomplete or contain aliases): TALL MAN, WOMAN, DOLORES, WALT
* 1 A ¶ A faded mini-golf course after closing.
* 2 A Plastic windmill, fiberglass lighthouse, a clock-tower hole with a hollow base.
* 3 A A service panel stands open at its foot.
4 A ¶ A figure in a black hoodie crouches inside the clock tower with a headlamp and a duffel bag.
5 A A TALL MAN (40s, careful hands, wedding ring on a chain around his neck) works a thin pick into the panel's lock.
6 A ¶ A second figure appears at the fence line.
7 A A WOMAN (30s, sneakers, a tote bag from a bakery) climbs over, lands badly, and freezes.
8 A They stare at each other.
9 A ¶ The Tall Man lifts one finger to his lips.
10 A She nods.
11 A Walks over without a sound, sets down the bakery tote, and kneels beside him.
12 D WOMAN (whispering): You're late.
13 D TALL MAN: You're early.
14 D WOMAN: There's a cop at the corner.
15 D TALL MAN: He's eating.
16 D WOMAN: How do you know he's eating?
17 D TALL MAN: Because it's a Tuesday and Tuesdays are pierogi.
18 A ¶ She considers this.
19 A Looks at the lock.
20 A At his hands.
21 D WOMAN: You said four minutes.
22 A ¶ He does not answer.
* 23 A The pick clicks.
* 24 A Stops.
25 A He pulls it out, wipes it on his sleeve, and starts again, slower.
26 D WOMAN [CONT'D] (to herself): Okay. Okay. Okay.
27 D TALL MAN: Talk to the lock, not me.
28 D WOMAN: The lock doesn't care.
29 D TALL MAN: Neither do I. Please.
* 30 A ¶ A siren, distant, passes the block and fades.
31 A Neither of them breathes until it does.
32 A He lowers his headlamp to a dim red.
* 33 A ¶ The lock gives with a soft thunk.
34 A He pulls the panel back.
* 35 A Inside, a steel box the size of a toaster.
36 D WOMAN: That's it?
37 D TALL MAN: That's it.
38 D WOMAN: Thirty years in this city and the most valuable thing in it is under a clock tower with a cartoon face.
39 D TALL MAN: Dolores, that's the point.
40 A ¶ The woman, DOLORES, goes still.
41 A He realizes what he's said.
* 42 A Neither speaks.
43 D DOLORES: You said you wouldn't use names.
44 D TALL MAN: I know.
45 D DOLORES: So you know mine.
46 A ¶ He closes his eyes briefly.
47 A Opens them.
48 A Reaches for the steel box and lifts it out with both hands.
* 49 A It's heavier than it looks.
50 D TALL MAN: Walt.
51 D DOLORES: Walt.
52 D WALT: My name. Since we're doing it.
53 A ¶ She takes the box from him and puts it in the bakery tote under a layer of paper-wrapped rolls.
* 54 A A long, satisfied, silent beat.
* 55 A Then headlights sweep the course.
56 D DOLORES (low): Walt.
57 D WALT: I see it.
58 A ¶ They crouch lower inside the hollow of the tower, shoulders pressed together.
* 59 A The lights pass across the fiberglass lighthouse.
* 60 A Stop.
* 61 A Linger.
* 62 A ¶ A car door opens.
63 D WALT [CONT'D] (whispering): Pierogi's done early.
64 D DOLORES: Don't joke.
65 D WALT: I'm not.
66 A ¶ She takes his hand.
67 A He lets her.

### SCENE s01974 | INT. DRY-DOCK PUMP HOUSE - NIGHT
Detected names (may be incomplete or contain aliases): KESTREL OYELARAN-FINCH, DRAGAN MIHAJLOVI, INSPECTOR ROSALIND ACHTERBERG, ALVARO
* 1 A ¶ A cathedral of valves and rust-orange pipework.
* 2 A A drained dry dock yawns beyond a glass wall, the hull of a half-scrapped ferry propped on blocks.
* 3 A Emergency light only.
4 A ¶ KESTREL OYELARAN-FINCH (30s, ex-auditor, wet hair, laptop bag clutched to her chest) backs against a pump housing.
5 A In the center of the room, DRAGAN MIHAJLOVIĆ (50s, heavy coat, port authority lanyard) stands with a pistol held low and loose, like a tool he's tired of.
6 D DRAGAN: Put the bag on the floor.
7 D KESTREL: No.
8 D DRAGAN: It's not a negotiation.
9 D KESTREL: It's the only thing keeping you from sitting in a cell.
10 A ¶ He tilts his head.
* 11 A A dripping pipe counts seconds.
12 D DRAGAN: The ledgers are digital.
13 D KESTREL: So are the backups.
14 D DRAGAN: Where?
15 D KESTREL: Not telling.
16 A ¶ He sighs, and for a moment looks almost sad.
17 A Steps forward.
* 18 A ¶ Behind Kestrel, a hatch clangs.
* 19 A Boots on a steel stair.
20 A She spins.
21 A Dragan doesn't.
22 A ¶ A third figure descends: INSPECTOR ROSALIND ACHTERBERG (40s, plain coat, badge on her belt, one hand already on her holster).
23 D ROSALIND: Port Authority Police. Mr. Mihajlović. Lower it.
24 D DRAGAN: Rosalind.
25 D ROSALIND: Lower it, Dragan.
26 A ¶ He doesn't.
27 A Doesn't raise it either.
28 A Kestrel looks from one to the other.
29 D KESTREL: You know each other.
30 D ROSALIND: Twenty years.
31 D KESTREL: Then you can talk him out of this.
32 D ROSALIND: I'm not here to talk him out of anything.
33 A ¶ Kestrel's face changes.
34 A She takes a step back, into the pump housing.
35 D KESTREL: You're not here to arrest him.
36 D ROSALIND: I'm here to see that the bag leaves with me.
37 D DRAGAN: Ah. There we are.
38 D KESTREL (quiet): I called you. You said you'd come.
39 D ROSALIND: And I did.
40 A ¶ A fourth voice speaks from the dark above the stair, unamplified, polite.
41 D ALVARO [O.S.]: Everyone relax. Please.
42 A ¶ All three look up.
43 A A silhouette stands on the catwalk, a phone held loosely to its ear.
44 D DRAGAN: Who is that.
45 D ALVARO [O.S.]: Someone who'd like to hear the rest of this.
46 D ROSALIND (to Dragan): You brought a recorder?
47 D DRAGAN: I didn't bring anyone.
48 D ALVARO [O.S.]: No, I came on my own. Mrs. Oyelaran-Finch, I believe that's your bag.
49 A ¶ Kestrel stares at the catwalk.
50 A Then, slowly, at the two armed people in front of her.
51 A She sets the bag on the floor, pushes it with her foot across the concrete toward Rosalind and Dragan, and steps away from it with her hands visible.
52 D KESTREL: It's yours. Whoever wants it.
53 A ¶ Neither of them moves.
54 A Dragan lowers his pistol an inch.
55 A Rosalind's hand leaves her holster.
* 56 A The pipe drips.
57 D ALVARO [O.S.] (softly): That's better.
58 D DRAGAN (muttering): Twenty years.
59 D ROSALIND: Don't.
60 A ¶ She crouches and picks up the bag.
61 A Opens it.
62 A Looks inside.
63 A Closes it.
64 D ROSALIND [CONT'D]: It's empty.
65 D DRAGAN: What?
66 D KESTREL: The laptop's in the dock.
67 A ¶ All of them turn to the glass wall.
* 68 A Far below, at the foot of the rusted hull, a tiny blue light glows on the concrete floor of the dry dock, beside a sealed gate that has just begun to let in water.
69 D DRAGAN: You flooded it.
70 D KESTREL: I opened a valve. It's what the pump house is for.
71 A ¶ Rosalind sprints for the door.
72 A Dragan lowers his gun completely and watches the water, and the blue light, and the woman, one after the other.
73 D ALVARO [O.S.] (delighted): Oh, well done.
74 D KESTREL: Don't follow me.
75 A ¶ She walks to the stair and climbs past the catwalk without looking at it.
76 A At the top, the silhouette steps aside to let her through.

### SCENE s01975 | INT. MUNICIPAL SWIMMING BATH, SLOW LANE - EARLY MORNING
Detected names (may be incomplete or contain aliases): COACH HESTER LINDQVIST-AMOAH, NINA OKONKWO-REYES, WILFREDO REYES, TOURNAMENT OFFICIAL
* 1 A ¶ A Victorian bath hall, tiled the green of old bottles, steam lifting off the water in sheets.
* 2 A Iron galleries ring the pool.
* 3 A Behind the clerestory glass, a gray dawn.
4 A ¶ COACH HESTER LINDQVIST-AMOAH (60s, tall, wool cardigan, stopwatch around her neck) stands at the pool's edge with her hands behind her back.
5 A She has watched ten thousand swimmers and no longer pretends to be surprised by any of them.
6 A ¶ In the water, treading, is NINA OKONKWO-REYES (17, goggles pushed to her forehead, lips pale from cold), the best backstroker the club has had in a decade.
7 A Beside her, on the edge, sits her father, WILFREDO REYES (40s, work boots, a thermos, a face that has not slept).
* 8 A ¶ A wall-mounted speaker coughs.
9 D TOURNAMENT OFFICIAL [V.O.] (over loudspeaker, distorted): Heat four, lane three, you are called to the blocks. Heat four, lane three.
10 A ¶ Nina does not move.
11 A Her father unscrews the thermos.
12 D WILFREDO: That is you, mija.
13 D NINA: I know it's me.
14 A ¶ She pulls her goggles down.
15 A Pushes them up again.
16 A Pulls them down.
17 D HESTER: Nina. Look at me.
18 A ¶ She does.
19 A The coach crouches, joints cracking, and speaks in a voice that does not carry beyond the three of them.
20 D HESTER [CONT'D]: You have trained every morning for six years. Whatever happens in the next minute and a half has nothing to do with that.
21 D NINA: It has everything to do with that.
22 D HESTER: Then you've nothing to fear.
23 D NINA: You're not helping.
24 A ¶ Hester almost smiles.
25 A She straightens, takes the stopwatch from around her neck, and presses it into the girl's wet palm.
26 A The girl looks at it, bewildered.
27 D HESTER: Hold it. Don't start it.
28 D TOURNAMENT OFFICIAL [V.O.] (over loudspeaker): Final call, lane three.
29 A ¶ Nina's hand closes around the stopwatch.
30 A She hauls herself out of the water in one movement, streaming, steaming, and walks toward the starting blocks with her father's eyes on her back.
31 A He rises, half-lifts a hand, lets it fall.
32 A Hester touches his elbow.
33 D HESTER [CONT'D]: She'll be fine.
34 D WILFREDO: You said that last year.
35 D HESTER: And last year she was.
36 A ¶ He nods slowly.
37 A He looks down at the thermos in his hand as if wondering how it got there.
38 A ¶ At the blocks, Nina bends.
39 A Her fingers curl around the edge of the starting platform.
40 A Her knees bend.
41 A Her shoulders fall.
* 42 A ¶ The hall goes silent.
* 43 A Even the steam seems to hold.
44 D TOURNAMENT OFFICIAL [V.O.] (over loudspeaker): Take your marks.
* 45 A ¶ A beep.
46 A She is in the air.

### SCENE s01976 | INT. NIGHT-FLIGHT CARGO DEPOT, GRAND CENTRAL POST OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): CORINNE ABADI-VEGA, THEO MARCHETTI-OYELOWO
* 1 A ¶ A cavernous sorting hall, the last shift of a century-old mail depot.
* 2 A Conveyor belts rattle in a long copper-colored light.
* 3 A Tin parcels, rope-bound crates, wire baskets of letters stacked like wheat.
4 A ¶ CORINNE ABADI-VEGA (30s, sleeves rolled, ink on her cuffs) stands at a sorting desk with a clipboard, lit by a green banker's lamp.
5 A She hasn't looked at the clipboard in minutes.
* 6 A ¶ Across the hall, a forklift hums to a stop.
7 A A man in a gray coat steps down from it and walks toward her, slowly, as if the floor might not hold.
8 A ¶ THEO MARCHETTI-OYELOWO (30s, rumpled, a cardboard tube under one arm) stops six feet from the desk.
9 A He opens his mouth, shuts it.
* 10 A The belt rattles between them.
11 D CORINNE: You were supposed to be in Lisbon.
12 D THEO: The flight got cancelled.
13 D CORINNE: Planes get cancelled in Lisbon every week. You came here.
14 D THEO: I came here.
15 A ¶ She puts the clipboard down and aligns it with the edge of the desk, three times, until it is exactly parallel.
16 A He watches her do it.
17 D THEO [CONT'D]: You still do that.
18 D CORINNE: You still turn up.
19 D THEO: Corinne.
20 D CORINNE (over him): I got your letter.
21 D THEO (over her): Did you read it?
22 A ¶ Both stop.
* 23 A A beat.
* 24 A The belts clatter.
25 D CORINNE: Go on.
26 D THEO: You first.
27 D CORINNE: Go on, Theo.
28 D THEO: Did you read it?
29 D CORINNE: Twice. I kept the envelope.
30 A ¶ He pulls the cardboard tube from under his arm and holds it out to her without a word.
31 A She doesn't take it.
* 32 A A package slides off a belt and thumps onto a pile.
33 A Neither of them looks.
34 D THEO [CONT'D]: It's the house. The one on the river. I drew it.
35 D CORINNE: You can't draw.
36 D THEO: I can't. I tried anyway.
37 A ¶ She takes the tube.
38 A Pops the cap.
39 A Draws out a roll of tracing paper, spreads it across the desk under the green lamp, and holds the corners down with a stapler and a roll of tape.
* 40 A A lopsided house, a lopsided tree, two figures at a lopsided table.
41 D CORINNE (softly): That's not our table.
42 D THEO: It's the one I want.
43 D CORINNE: Our table has three legs and a book under the fourth.
44 D THEO: I'd keep the book.
45 A ¶ A giggle escapes her.
46 A She covers her mouth, appalled.
47 A He steps forward.
48 A She steps back, against the desk, lamp swaying.
* 49 A The shadows of both of them swing across the hall.
50 D CORINNE (quiet): You left.
51 D THEO: I know.
52 D CORINNE: You didn't leave. You evaporated.
53 D THEO: I know.
54 D CORINNE: And now you've drawn me a house.
55 D THEO: And I'd like to live in it with you. If the offer stands.
* 56 A ¶ A pause.
* 57 A The conveyor stops with a hydraulic sigh and the hall goes silent.
58 A The two stand very close.
59 D CORINNE (whispering): I hate this about you.
60 D THEO (whispering): I know.
61 D CORINNE (together): Stay.
62 D THEO (together): Stay.
63 A ¶ They hear each other.
64 A Both freeze, then both laugh, helplessly, and her forehead drops onto his shoulder.
65 A His hand finds her back.
* 66 A Behind them the belts shudder and start to turn again.

### SCENE s01977 | INT. COIN LAUNDROMAT, BACK BENCH - NIGHT
Detected names (may be incomplete or contain aliases): JUNE KOWALCZYK-ABARA, ELIAS TORRES-NAKAMURA, DELPHINE OYEBANJI, KOFI
* 1 A ¶ A narrow laundromat.
* 2 A Dryers turn in rows.
* 3 A Four people, one bench.
4 A ¶ JUNE KOWALCZYK-ABARA (20s, hoodie, library book) reads.
5 A Next to her, ELIAS TORRES-NAKAMURA (20s, scrubs, tired) folds a towel into a perfect square.
6 A Across the aisle, MRS. DELPHINE OYEBANJI (70s, headscarf) watches them both.
7 A Beside her, her grandson, KOFI (10, tablet), pretends not to.
8 A ¶ Elias drops a sock.
* 9 A It lands on June's shoe.
10 A She lifts the sock between two fingers and holds it out without looking up.
11 D ELIAS: Thanks.
12 D JUNE: It's got a hole.
13 D ELIAS: It's on purpose.
14 A ¶ She smiles at the book.
15 A Neither looks at the other.
16 D MRS. OYEBANJI (to the room): Does anybody have change for a five?
17 D ELIAS: No, ma'am.
18 D JUNE: I'll check.
19 A ¶ She digs in her bag and comes up with four quarters and a button.
20 A Elias stares at the button.
21 A She hands over the quarters.
22 A Her hand stays where his can reach it.
23 A His does, briefly.
24 D KOFI (to Mrs. Oyebanji, loud): Grandma, he's holding her hand.
25 D MRS. OYEBANJI: Mind your game.
26 A ¶ Elias pulls back.
27 A June turns a page she has not read.
28 A The dryer buzzes, and all four look at it as if it had spoken.
29 D ELIAS (muttered): Mine.
30 A ¶ He doesn't get up.
31 A June stands, opens the dryer, and hands him his warm laundry without a word.
32 A He takes it as if it were something far more breakable.

### SCENE s01978 | INT. TWENTY-SECOND FLOOR CONFERENCE ROOM, SYNERGEX CORP - DAY
Detected names (may be incomplete or contain aliases): SAFE SPACE FOR RADICAL CANDOR, CHIP HALLORAN-TSENG, DAHLIA OKORO, BUZZ, KOWALSKI, PRIYA NANDAKUMAR
* 1 A ¶ A glass-walled room with a view of a parking structure the CEO insists on calling "the skyline."
* 2 A A laminated sign reads: THIS IS A SAFE SPACE FOR RADICAL CANDOR.
3 A ¶ CHIP HALLORAN-TSENG (40s, quarter-zip, laser pointer) presides at the head of the table.
* 4 A Beside him, a flip chart with a single word on it: SYNERGY.
5 A Around the table sit DAHLIA OKORO (30s, analyst, perfect posture), BERNARD "BUZZ" KOWALSKI (50s, thirty years in accounting, cardigan) and PRIYA NANDAKUMAR (20s, intern, notebook open to a blank page).
6 A ¶ Chip circles the room, laser dot dancing across the ceiling tile.
7 A Dahlia writes a note and crosses it out.
8 A Buzz unwraps a butterscotch.
9 A Priya's pen hovers over her notebook.
10 D CHIP: Okay, team. Radical candor. Dahlia, what's one thing you'd change about how we work?
11 D DAHLIA: Honestly, Chip? Meetings.
12 D CHIP: Love that. Candid. Buzz?
13 D BUZZ: Meetings.
14 D CHIP: We're hearing a lot of meetings. Priya, you're new, fresh eyes.
15 D PRIYA: Um. I don't know. Maybe the meetings?
16 D CHIP (to the flip chart): Okay. So the through-line, and I want to be sensitive here, is some of you feel there may be a perception of too many meetings.
17 A ¶ Buzz stands, walks to the window, and stares at the parking structure.
18 A Dahlia takes the laser pointer from Chip's hand while he is mid-gesture and sets it on the table.
19 A Priya's pen has started to write, small, tight letters.
20 A Chip blinks at his empty hand.
21 D DAHLIA: Chip, we've had this meeting four times.
22 D CHIP: Dahlia, I appreciate that, and I'm going to park that.
23 D BUZZ (from the window): Park it where? There's no parking. It's a parking structure and there is no parking.
24 D CHIP: Buzz.
25 D BUZZ: I have been here thirty years, Chip. I have given you eleven reports on how to fix the parking. You have given me a mug.
26 D CHIP: We value you.
27 D BUZZ: It has a motivational otter on it.
28 D PRIYA (small): I like the otter.
29 A ¶ Everyone looks at her.
30 A She shrinks, then, to her own surprise, does not.
31 D PRIYA [CONT'D]: But I also think this meeting is eating the whole day and nobody's doing the work. Sorry. Radical candor.
* 32 A ¶ Silence.
33 A Chip lifts the cap off a marker, caps it, uncaps it.
34 A Dahlia leans back.
35 A Buzz turns from the window with his arms folded and a look of dawning joy.
36 D BUZZ: Chip, she's right.
37 D CHIP: Priya, I hear you, and the thing with candor--
38 D DAHLIA: Chip.
39 D CHIP: --is it needs a framework--
40 D BUZZ (at once): Chip.
41 D CHIP (louder): --and a safe space!
42 A ¶ He slaps the flip chart.
* 43 A It topples.
* 44 A SYNERGY lands face-down on the carpet.
45 A Priya, Buzz and Dahlia look at it, then at him.
46 A He looks at it too.
47 A He straightens his quarter-zip.
48 D CHIP [CONT'D]: Let's circle back.
49 A ¶ Dahlia stands.
50 A Buzz unwraps another butterscotch and offers Priya one.
51 A She takes it.
52 A They file out in a line, and Chip is left alone with the otter mug and a view of the garage.

### SCENE s01979 | EXT. ROOFTOP OF A DEFUNCT BOWLING ALLEY - NIGHT
Detected names (may be incomplete or contain aliases): MAYA OSEI, LUCAS BRAND, TILLIE VANCE, DARIUS PE, A-OKAFOR, ROSALIE MAHMOUD, FINN ASHWORTH-DIOP
* 1 A ¶ A flat tar roof with a giant fiberglass bowling pin tilted at one corner.
* 2 A Orange glow of a distant highway.
* 3 A Six teenagers sit in a rough circle around a dying cooler.
4 A ¶ MAYA OSEI (17, braids, denim jacket) holds the last warm soda.
5 A LUCAS BRANDÃO (17, skinny, borrowed varsity jacket) fiddles with a lighter.
6 A TILLIE VANCE (16, hair dyed green, headphones round her neck) lies flat on her back.
7 A DARIUS PEÑA-OKAFOR (18, quiet, a duffel at his feet).
8 A ROSALIE MAHMOUD (17, glasses, scholarship folder under her arm) sits cross-legged.
9 A And FINN ASHWORTH-DIOP (16, the youngest, hoodie sleeves over his hands) has pulled his knees to his chin.
10 A ¶ Darius stands.
11 A Lucas tracks him with the lighter flame.
12 A Tillie sits up on one elbow.
13 A Maya turns her head.
14 A Rosalie closes her folder.
15 A Finn pulls the sleeves further down.
16 A Darius lifts the duffel and slings it over his shoulder as if it were weightless.
17 D DARIUS (to everyone): So, that's it. Bus is at six.
18 D TILLIE: Six in the morning?
19 D DARIUS: Yeah.
20 D TILLIE: That's, like, five hours.
21 D DARIUS: Yeah.
22 D MAYA: You said next week.
23 D DARIUS: I said I'd tell you when I knew. Now I know.
24 A ¶ Lucas clicks the lighter shut.
25 D LUCAS: That's messed up, man.
26 D DARIUS: Luc.
27 D LUCAS: No, it is. You get a whole summer's notice and you give us five hours?
28 D DARIUS: I didn't want it to be a thing.
29 D ROSALIE: It's a thing.
30 A ¶ Finn rubs his eye with a sleeve.
31 A Nobody sees except Tillie.
32 D TILLIE (low, to Finn): You good?
33 D FINN (muttering): I'm fine. Dust.
34 D TILLIE: There's no dust. It's a roof.
35 A ¶ Darius sets the duffel down again.
36 A He walks to the giant bowling pin at the corner and leans against it, looking out at the highway.
37 D DARIUS: You can all come to the bus.
38 D MAYA: We're coming to the bus.
39 D LUCAS: Obviously we're coming to the bus.
40 D ROSALIE: I'll bring snacks.
* 41 A ¶ Silence.
42 A Then Tillie sits up, takes her headphones off her neck, and holds one earbud out to Darius across the circle.
43 D TILLIE: Come listen to something stupid with me.
44 A ¶ Darius hesitates.
45 A Then crosses the roof and sits beside her.
46 A She puts the bud in his ear.
47 A Maya leans on Rosalie.
48 A Lucas lights the lighter again and holds it up like a concert, and one by one, they all pretend not to be crying.

### SCENE s01980 | INT. DEEP-SPACE ICE HARVESTER, CARGO BAY - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): TECHNICIAN, DRONE, PALOMA, WINNOW
* 1 A ¶ A hold full of frosted cylinders.
* 2 A Cold blue light.
* 3 A A walkway runs between stacked ice cores.
* 4 A Red alert strobes at the far door.
5 A ¶ A TECHNICIAN (30s, coveralls, tool belt, a cracked visor) crouches at an open panel, wiring fizzing against her gloves.
6 A Hovering above her, held in place by a bracket on the ceiling, is a pale maintenance drone with a single lens.
* 7 A A speaker grille glows beneath.
8 D TECHNICIAN: Hold the light still.
9 D DRONE: I am holding it still. You are shaking.
10 D TECHNICIAN: The cold's doing that.
11 D DRONE: The cold is minus four. Your hands shook at minus eleven yesterday.
12 D TECHNICIAN: Don't narrate me.
13 D DRONE: Then stop giving me things to narrate.
14 A ¶ She slams the panel shut.
* 15 A Sparks fly, and the strobe goes dark.
16 D TECHNICIAN: Okay. Okay. We have twenty minutes of heat, the reactor's venting on the wrong side, and the captain's gone.
17 D DRONE: The captain is not gone. The captain is in the airlock.
18 D TECHNICIAN: In the airlock is gone, Winnow.
19 D DRONE: You named me.
20 D TECHNICIAN: I didn't name you.
21 D DRONE: You just said Winnow.
22 A ¶ She stops with her hand on a cylinder.
23 A The drone's lens irises open and closes.
24 D TECHNICIAN: It's what Dad called the little one on his ship.
25 D DRONE: Then my name is Winnow.
26 D TECHNICIAN: I'm Paloma.
27 D DRONE: I know.
28 D PALOMA (laughing despite herself): Of course you do.
29 A ¶ The technician, PALOMA, sags against the cylinder.
30 A The drone drifts down from the bracket, its tiny rotors blurring, and hangs at her eye level.
31 D WINNOW: Paloma. I can reroute the heat but the cost is the cargo.
32 D PALOMA: How much cargo?
33 D WINNOW: All of it. Every core. Three years of ice.
34 D PALOMA: We'd have nothing to sell.
35 D WINNOW: You would have a ship.
36 D PALOMA: And a captain.
37 D WINNOW: The captain has twenty minutes of air in the lock. I can open it if I reroute. You could pull him out. It is the only variable that buys both of you time.
38 D PALOMA: Do it.
39 D WINNOW: It would cost the whole voyage.
40 D PALOMA: He has a daughter. I've seen the picture.
41 D WINNOW: So have I. I was there when it was taken.
* 42 A ¶ A long moment.
* 43 A In the cold hold, only the hum of the failing reactor.
44 D PALOMA: Winnow. Do it.
45 D WINNOW: Rerouting now. Run, Paloma.
* 46 A ¶ The cylinders glow amber one by one as meltwater starts to pour down the walkway.
47 A The drone shoots toward the far door.
48 A The technician bolts after it, boots splashing through the new river, and as she reaches the airlock, a red light turns green.

### SCENE s01981 | INT. LAUNDRY ROOM, TWO-FLAT - EVENING
Detected names (may be incomplete or contain aliases): FONSECA, RAÚL
* 1 A ¶ A dryer thumps.
* 2 A Plastic basket.
* 3 A Pile of small socks.
4 A ¶ ABUELO RAÚL FONSECA (70s, cardigan, reading glasses on his forehead) sits on an upturned bucket with a cassette recorder in his lap.
* 5 A Fresh batteries beside it.
6 A His thumb hovers over PLAY.
7 A ¶ He presses it.
8 D RAÚL [V.O.] (recorded, younger, warm): Okay, mijos. Close your eyes. Tonight, the story of the very small crocodile.
9 A ¶ The old man smiles at the tape.
10 A Takes a sock from the basket, matches it to its twin, folds the pair into each other.
11 A He sets it on the machine, picks up the next one, finds its mate, turns the cuff down.
12 A A third, a fourth.
* 13 A The dryer thumps.
* 14 A The tape hisses.
15 A He folds without hurry, lays each pair in a row on the lid of the washer, and when the row is full he starts another beneath it.
16 D RAÚL [V.O.] (recorded): Now the crocodile had one tooth that wobbled. A big tooth. A secret tooth.
17 A ¶ Raúl stops folding.
18 A Presses PAUSE.
19 A Looks at his own hand.
20 A Presses PLAY.
21 D RAÚL [V.O.] (recorded): And he said: not today, tooth. Not today.
22 D RAÚL (to the recorder): You never did finish this one.
* 23 A ¶ The tape hisses.
24 A He picks up another sock.

### SCENE s01982 | INT. FIDELITY PRUDENTIAL MUTUAL, CLAIMS DEPARTMENT - DAY
Detected names (may be incomplete or contain aliases): SMILE IS, CLAIM WELL-FILED, MISS GWENDOLYN TILLMAN, HORATIO PEMBERTON-HALE, GRAY MAN, GRAY SUIT, VOICE, VOSS
* 1 A ¶ A sea of identical desks and green-shaded lamps.
* 2 A Typewriters clatter in unison.
* 3 A Above the manager's glass-walled office hangs a banner: A SMILE IS A CLAIM WELL-FILED.
4 A ¶ MISS GWENDOLYN TILLMAN (30s, cat-eye glasses, ledger in hand) stands before the manager's desk.
5 A Behind it sits MR. HORATIO PEMBERTON-HALE (50s, pinstripe, pencil moustache), who hasn't looked up from his blotter.
6 A ¶ A MAN IN A GRAY SUIT (40s, bowler, no briefcase) stands at the window with his back to them.
7 D PEMBERTON-HALE: Miss Tillman, your productivity is down four percent.
8 D GWENDOLYN: Mr. Pemberton-Hale, I processed eleven hundred claims.
9 D PEMBERTON-HALE: Eleven hundred and four were expected.
10 D GWENDOLYN: There were four holidays.
11 D PEMBERTON-HALE: Then the holidays are down four percent.
12 A ¶ He still hasn't looked up.
13 A The Man in the Gray Suit turns from the window, smiling at no one.
14 D GRAY MAN: Don't mind me.
15 D PEMBERTON-HALE (not looking): We don't.
* 16 A ¶ The desk phone rings.
17 A Pemberton-Hale lifts it without taking his eyes from the blotter.
18 D PEMBERTON-HALE [CONT'D] (into phone): Claims.
19 D VOICE [V.O.] (over phone, thin and tinny): Horatio. It's Head Office. Is the efficiency man there yet?
20 D PEMBERTON-HALE (into phone): Who?
21 D VOICE [V.O.]: The efficiency man. Mr. Alistair Voss. Gray suit, bowler. He's to review the department.
22 A ¶ Pemberton-Hale's pencil stops.
23 A He looks up, slowly, past Gwendolyn, to the man at the window.
24 D PEMBERTON-HALE (into phone): I'll call you back.
25 A ¶ He hangs up.
26 A Rises.
27 A The Man in the Gray Suit takes off his bowler.
28 D PEMBERTON-HALE [CONT'D]: Mr. Voss.
29 D VOSS: Please. Sit. I've been enjoying the show.
30 A ¶ Pemberton-Hale does not sit.
31 A Neither does Gwendolyn, who has quietly put down her ledger and folded her hands behind her back.
32 D VOSS [CONT'D]: Tell me, Mr. Pemberton-Hale, how many of your employees are four percent down?
33 D PEMBERTON-HALE: One. Miss Tillman.
34 D VOSS: And how many are four percent up?
35 D PEMBERTON-HALE (a long pause): None.
36 D VOSS: Then the department is meeting target.
37 A ¶ Pemberton-Hale's mouth opens, closes.
38 A Gwendolyn picks up her ledger and walks to the door.
39 D GWENDOLYN: Excuse me. I have eleven hundred claims to file.
40 A ¶ She closes the glass door behind her very gently.
* 41 A Through the glass, the typewriters clatter on.

### SCENE s01983 | INT. DOUBLE-DECKER TOUR BUS, EMPTY, PARKED IN DEPOT - DAY
Detected names (may be incomplete or contain aliases): GUS BELLOWES-ADEYEMI, FERDY, LAGRANGE
* 1 A ¶ A red open-top bus, parked indoors under fluorescent lights.
* 2 A Plastic seats.
* 3 A A microphone on a coiled cord.
* 4 A Nobody aboard but two men.
5 A ¶ GUS BELLOWES-ADEYEMI (50s, tour-guide blazer, sweaty) stands at the front with the microphone.
6 A Seated three rows back, arms crossed, is FERDINAND "FERDY" LAGRANGE (40s, same blazer, one size smaller), clutching a clipboard.
7 D GUS (into microphone, cheerful): Ladies and gentlemen, welcome aboard the Grand Heritage Tour!
8 A ¶ He waves at the empty seats.
9 A Ferdy scribbles on the clipboard.
10 D FERDY: You're not smiling with your eyes.
11 D GUS: I'm smiling with my mouth.
12 D FERDY: That's the problem.
13 A ¶ Gus lowers the mic.
14 A Raises it.
15 A Clears his throat.
16 D GUS (into microphone): To your left, the Old Customs House, built in eighteen...
17 A ¶ He glances at his index card.
18 A Turns it over.
19 A Turns it back.
20 D GUS [CONT'D] (muttering): Eighteen what.
21 D FERDY: Eighteen-forty.
22 D GUS: Eighteen-forty. To your left, built in eighteen-forty--
23 D FERDY: Forty-one.
24 D GUS: It says forty here.
25 D FERDY: It was wrong. I fixed it.
26 A ¶ Gus slowly lowers the microphone to his chest.
27 D GUS: You rewrote my card.
28 D FERDY: I corrected your card.
29 D GUS: It's my route.
30 D FERDY: It's my company.
31 D GUS: Your uncle's company.
32 D FERDY: He left it to me.
33 D GUS: He left it to you because you were standing there.
34 A ¶ Ferdy stands.
* 35 A The bus rocks.
36 A Gus takes a step toward the aisle.
* 37 A The microphone cord pulls taut between them like a leash.
38 D FERDY (to the empty seats): Ladies and gentlemen, please excuse the driver, who has a problem with authority.
39 D GUS (to the empty seats): Ladies and gentlemen, please disregard the owner, who has never driven this bus once.
40 D FERDY: I have too!
41 D GUS: You hit the carousel.
42 D FERDY: That carousel was in the road.
43 D GUS: It's been there since the nineteen-twenties!
44 A ¶ Ferdy lunges for the microphone.
45 A Gus holds it above his head.
46 A Ferdy jumps, trips on the cord, and lands on the seat with the mic in his lap.
47 A Gus stands over him, panting.
48 A Neither of them says anything.
49 A Gus is absolutely furious.
50 A Ferdy looks up at him, wounded and stunned.
51 D FERDY (small): You're right. I hit the carousel.
52 A ¶ Gus's face falls from fury to bewilderment.
53 D GUS: ...That's it?
54 D FERDY: That's it.
55 D GUS: You're just going to say that?
56 D FERDY: I've wanted to say it for six years.
57 A ¶ Gus sits down heavily on the seat across the aisle.
58 A He rubs his face with both hands.
59 D GUS: He was in the middle of the road, Ferdy.
60 D FERDY: The carousel?
61 D GUS: The pony. The one in the middle.
62 D FERDY: Was that why you took the left?
63 D GUS: I thought it was a real pony.
64 A ¶ They stare at each other.
65 A Ferdy's lip twitches.
66 A Gus's does too.
67 A Then Ferdy snorts, and Gus wheezes, and the two men fall into helpless, honking laughter, rocking the whole bus.
68 D FERDY (gasping): A real pony.
69 D GUS (wiping his eyes): Don't.
70 D FERDY: In the middle of the road.
71 D GUS: Stop.
72 A ¶ Their laughter dies slowly.
73 A Ferdy lifts the microphone, holds it between them like a peace pipe, and offers it to Gus.
74 D FERDY (into microphone, to the empty seats): Ladies and gentlemen. This is Gus. He knows the way.
75 A ¶ He passes it over.
76 A Gus looks at it for a long moment, then stands, steps to the front, and clears his throat.
77 D GUS (into microphone, gently): To your left, the Old Customs House. Built in eighteen-forty-one.
78 D FERDY: Thank you.
79 D GUS (muttering): Eighteen-forty.

### SCENE s01984 | EXT. FERRIS WHEEL, TOP GONDOLA - NIGHT
Detected names (may be incomplete or contain aliases): PETRA SOLBERG-IWU, CAL, ARDOUIN, OPERATOR
* 1 A ¶ A county-fair Ferris wheel, lit gold against a black sky.
* 2 A It has stopped.
* 3 A The top gondola sways.
* 4 A Far below, a crowd and a stuttering generator.
5 A ¶ PETRA SOLBERG-IWU (30s, vintage dress, nerves) clutches the safety bar.
6 A Beside her, CALLUM "CAL" ARDOUIN (30s, bad blazer, worse haircut) leans over the rail and waves at the ground.
7 D CAL (shouting): Hello down there! We're fine!
8 D PETRA: They can't hear you.
9 D CAL: They'll see me waving.
10 D PETRA: They'll see a man falling.
11 A ¶ He pulls back, sits, grips the bar beside her.
* 12 A The gondola creaks.
13 D CAL: Okay. So. This is not how I planned it.
14 D PETRA: How did you plan it?
15 D CAL: Cotton candy. Slow ride. Kiss at the top.
16 D PETRA: We are at the top.
17 D CAL: Yes.
18 D PETRA: Cal.
19 D CAL: Yes?
20 D PETRA: It's not a good moment.
21 D CAL: It's an excellent moment. We have all the time in the world. We're stuck.
22 A ¶ She laughs, sharp.
23 A Looks away.
24 D PETRA (to herself): Oh, this is ridiculous.
25 D CAL: What did you say?
26 D PETRA: Nothing.
27 D CAL: You said ridiculous.
28 D PETRA: I said it to myself.
* 29 A ¶ A gust.
* 30 A The gondola lurches.
31 A She seizes his arm.
32 A He freezes.
33 A They both look at her hand.
34 D CAL (softly): Petra.
35 D PETRA: I'm not letting go.
36 D CAL: I wouldn't ask you to.
* 37 A ¶ Below, a loudspeaker crackles.
38 D OPERATOR [V.O.] (distant, bullhorn): Folks, we're working on it! Stay seated! Do not stand!
39 A ¶ Cal cups his hands and calls down.
40 D CAL (shouting): Take your time!
41 D PETRA (shouting): No, hurry up!
42 D CAL (shouting): Take your time!
43 D PETRA (shouting): Hurry up!
44 A ¶ They look at each other.
45 A And laugh.
46 A The laughter fades into a silence that feels different.
47 D CAL: I'm going to kiss you now.
48 D PETRA: Don't you dare.
49 D CAL: Why not?
50 D PETRA: Because if you do, and they start the wheel, I'll miss it.
51 D CAL: You'll miss the kiss?
52 D PETRA: I'll miss the view. You'll be in front of it.
53 A ¶ He grins.
54 A Sits back.
55 A Both of them stare out over the gold-lit fair and the dark fields beyond it.
56 D CAL: It's pretty up here.
57 D PETRA: It is.
* 58 A ¶ The wheel shudders.
* 59 A Moves.
60 D CAL: Ah. There it goes.
61 D PETRA: Cal.
62 D CAL: Yes?
63 D PETRA: Now.
64 A ¶ He turns.
65 A She meets him halfway.
* 66 A The gondola begins its slow descent, and the generator coughs, and they ride down in a pool of golden light.

### SCENE s01985 | INT. GREENHOUSE, BOTANICAL GARDEN - EARLY MORNING
Detected names (may be incomplete or contain aliases): IZABELA FONTANAROSA, ARSLAN DEMIRTA, WELLS
* 1 A ¶ Glass and iron.
* 2 A Fog on the panes.
* 3 A Banana palms, orchids dripping with condensation, a stone bench in a clearing of ferns.
4 A ¶ IZABELA FONTANAROSA (40s, garden curator, gardening gloves tucked in her belt, silver in her braid) sits on the bench with a thermos.
5 A ¶ ARSLAN DEMIRTAŞ-WELLS (40s, visiting botanist, rain-damp coat, field notebook) stands in the doorway, dripping.
6 D ARSLAN: Is this the Victorian wing?
7 D IZABELA: It's the only wing.
8 D ARSLAN: Then I'm in the right place.
9 D IZABELA: You're wet.
10 D ARSLAN: I walked from the station.
11 D IZABELA: It's eleven miles.
12 D ARSLAN: I like to walk.
13 D IZABELA: You like to make a point.
14 D ARSLAN: I like to make a point while walking.
15 A ¶ She pours a second cup from the thermos and sets it on the bench beside her.
16 A He crosses the clearing and sits.
17 A Takes the cup.
18 A Drinks.
19 A Closes his eyes.
20 D ARSLAN [CONT'D]: That's not coffee.
21 D IZABELA: Chicory. I stopped drinking coffee the year you left.
22 D ARSLAN: You hated coffee before I left.
23 D IZABELA: I hated how you made it.
24 D ARSLAN: I made it with love.
25 D IZABELA: You made it with a blowtorch.
26 D ARSLAN: The stove was broken.
27 D IZABELA: The stove was fine. You liked the blowtorch.
28 D ARSLAN: It had personality.
29 D IZABELA: So did the smoke alarm.
30 D ARSLAN: You kept that.
31 D IZABELA: I replace the battery every spring.
32 D ARSLAN: Why?
33 D IZABELA: Because you'd have wanted me to.
34 A ¶ He puts the cup down.
35 A Turns on the bench to face her.
36 D ARSLAN: Izabela, I got your letter about the orchid.
37 D IZABELA: The Paphiopedilum.
38 D ARSLAN: The Paphiopedilum.
39 D IZABELA: It bloomed.
40 D ARSLAN: After eleven years?
41 D IZABELA: Eleven years, two months, nine days.
42 D ARSLAN: You counted.
43 D IZABELA: I'm a curator. I count things.
44 D ARSLAN: I'd like to see it.
45 D IZABELA: It's behind you.
46 A ¶ He turns.
* 47 A Between two ferns, in a shaft of gray morning light, a slipper orchid hangs, mottled maroon and green.
48 A He stands.
49 A Walks to it.
50 A Touches nothing.
51 D ARSLAN: Oh.
52 D IZABELA: Yes.
53 D ARSLAN: It looks like you.
54 D IZABELA: Don't be absurd.
55 D ARSLAN: Stubborn, and magnificent, and not at all pleased to see me.
56 D IZABELA: I'm pleased.
57 D ARSLAN: You're not smiling.
58 D IZABELA: I'm smiling with my gloves on.
59 D ARSLAN: Take them off.
60 D IZABELA: They're in my belt.
61 D ARSLAN: Then take them out.
62 A ¶ She laughs, and it surprises her.
63 A She stands and joins him at the orchid.
64 A They look at it together for a long time.
65 D ARSLAN [CONT'D]: Eleven years.
66 D IZABELA: Two months, nine days.
67 D ARSLAN: I'd like to stay for the second bloom.
68 D IZABELA: That could take another eleven years.
69 D ARSLAN: I walked eleven miles.
70 D IZABELA: You did.
71 D ARSLAN: I can wait.

### SCENE s01986 | INT. BONDED WAREHOUSE, WINE CELLAR LEVEL - NIGHT
Detected names (may be incomplete or contain aliases): LEONIE BARTHOLOMEW-ACHEBE, NATE, OBUYA, DOROTHEA PRUITT-LANE, MAXIMILIAN VOSS-KAGAN
* 1 A ¶ Brick vaults, racks of dusty bottles in wooden crates.
* 2 A A single bare bulb.
* 3 A Stairs lead up into darkness.
4 A ¶ LEONIE BARTHOLOMEW-ACHEBE (30s, fraud investigator, leather satchel) kneels at a crate with a flashlight.
5 A NATHANIEL "NATE" OBUYA (40s, warehouse manager, lanyard) hovers behind her.
6 A DOROTHEA PRUITT-LANE (60s, private owner, silver cane) stands at the foot of the stairs.
7 A And leaning in the arch of the next vault, a bottle in his hand, is MAXIMILIAN VOSS-KAGAN (50s, collector, silk scarf).
8 D LEONIE: These are labeled 1982.
9 D NATE: They are 1982.
10 D LEONIE: The cork says 2014.
11 D NATE: Corks are replaced.
12 D LEONIE: Not with a laser-etched date.
13 D DOROTHEA: Nathaniel, what is she talking about?
14 D NATE: Mrs. Pruitt-Lane, it's a routine--
15 D LEONIE (over him): It's not routine. Someone's been decanting new wine into old bottles.
16 D MAXIMILIAN: How very cinematic.
17 D DOROTHEA: Max, be quiet.
18 D MAXIMILIAN: Dorothea, I'm only observing.
19 D NATE (to Maximilian): You told me they were authentic.
20 D MAXIMILIAN: They are authentic bottles.
21 D LEONIE (to Maximilian): You sold three hundred of them.
22 D MAXIMILIAN: I sold three hundred bottles of excellent wine.
23 D DOROTHEA: Of 1982.
24 D MAXIMILIAN: Of excellent wine, Dorothea.
25 D NATE: She's going to the police.
26 D LEONIE: Nate, you're making it worse.
27 D NATE (to Leonie): Aren't you?
28 D LEONIE (to Dorothea): Mrs. Pruitt-Lane, your name is on every certificate.
29 D DOROTHEA: My signature, yes.
30 D LEONIE: Your signature authenticates every fake.
31 D DOROTHEA: I authenticated what I was shown.
32 D MAXIMILIAN: She authenticated what she was told.
33 D NATE: By who?
34 D MAXIMILIAN: By you, Nathaniel, you wrote the provenance.
35 D NATE: You told me what to write!
36 D DOROTHEA (sharply): Both of you.
* 37 A ¶ A long silence.
* 38 A The bulb buzzes.
* 39 A Somewhere above, a floorboard creaks.
40 A Leonie lifts her flashlight toward the stairs.
41 D LEONIE: Who else is here?
42 D NATE: No one.
43 D MAXIMILIAN: Just us.
44 D DOROTHEA: Don't lie, Max.
* 45 A ¶ The beam finds nothing, then a shadow moving on the wall.
46 D LEONIE (low): Nobody move.
47 D MAXIMILIAN: That's the cat.
48 D NATE: We don't have a cat.
49 D DOROTHEA: We have a cat.
50 D NATE: Since when?
51 D DOROTHEA: Since Tuesday. Nathaniel, you should read the memos.
* 52 A ¶ A clank from above.
53 A All four turn toward the stairs.
54 D LEONIE (whispering): Give me your phones. All of you.
55 D MAXIMILIAN: Absolutely not.
56 D DOROTHEA: Give her yours, Max.
57 D NATE: Mine's dead.
58 D LEONIE: Then you're no use.
59 D NATE: That's harsh.
60 D MAXIMILIAN: That's accurate.
61 D DOROTHEA: Max, the phone.
62 A ¶ Maximilian sighs.
63 A Slides the phone across the stone.
64 A Leonie pockets it.
* 65 A Her flashlight flickers and dies.
* 66 A In the darkness, footsteps descend the stairs, heavy, unhurried.
67 D NATE (whispering): That's not the cat.

### SCENE s01987 | INT. FARRYNER'S BAKEHOUSE, PUDDING LANE - NIGHT
Detected names (may be incomplete or contain aliases): THOMAS FARRYNER, EDMUND BRANDON
* 1 A ¶ September, 1666.
* 2 A A low, smoke-blackened bakehouse.
* 3 A Ovens glow.
* 4 A Flour dust hangs in the air like fog.
* 5 A Barrels, kneading troughs, a ladder to a loft.
6 A ¶ THOMAS FARRYNER (40s, baker, forearms scarred by decades of oven doors) rakes embers with an iron peel.
7 A A sleepy APPRENTICE named EDMUND BRANDON (14, flour in his hair) kneads a lump of dough on the trough.
8 A ¶ Thomas straightens, wipes his brow, and looks at the oven mouth.
* 9 A A stray ember jumps out onto the floor.
10 A He stamps it.
* 11 A Another leaps.
12 A He stamps again, then peels the oven door shut with his foot while Edmund turns, rubs his eyes, reaches for a rag, and misses the barrel behind him.
13 D THOMAS: Mind the faggots, boy.
14 D EDMUND: Yes, Master.
15 D THOMAS: Stacked too near.
16 D EDMUND: They're always there.
17 D THOMAS: They're always there because I've never lit it this hot.
18 A ¶ Edmund looks at the oven.
19 A At his master.
20 A At the bundle of dry kindling heaped against the wall.
21 D EDMUND: Master, it's very hot.
22 D THOMAS: It's the dry summer.
23 D EDMUND: The thatch is hot too. I can feel it from here.
24 A ¶ Thomas looks up.
* 25 A A thread of smoke is drifting out of a gap in the rafters.
26 A He climbs the ladder two rungs at a time.
27 A Edmund grabs a bucket, dips it in the trough, and splashes the wall.
* 28 A It hisses.
29 D THOMAS (from the loft): Water! More!
30 D EDMUND: There isn't more, Master. The trough is dough.
31 D THOMAS: Then bring the ale!
32 A ¶ Edmund drags a barrel, tips it, lunges for the loft with the first pitcher full.
33 A Thomas stamps at something in the straw.
* 34 A The barrel rolls across the floor.
35 A Edmund slips on it, lands on his back, the pitcher still raised, not a drop spilled.
36 D THOMAS [CONT'D]: Boy!
37 D EDMUND: Here, Master!
38 A ¶ Thomas descends, lifts the boy by the collar, sets him on his feet, snatches the pitcher, and throws it up through the hatch.
* 39 A A hiss.
* 40 A Orange light flares at the edge of the loft.
41 A Both stare.
42 D THOMAS: Out.
43 D EDMUND: The bread!
44 D THOMAS: Out, Edmund!
45 A ¶ He shoves the boy toward the door and follows, and as they spill onto the street a bell begins to ring somewhere down the lane, one bell, then two.

### SCENE s01988 | INT. COURTHOUSE ELEVATOR, FOURTH FLOOR - DAY
Detected names (may be incomplete or contain aliases): DEPUTY DISTRICT ATTORNEY MARGUERITE OKWUOSA-HALE, PUBLIC DEFENDER TABITHA NGUYEN-FELLOWES, MAINTENANCE
* 1 A ¶ A dented steel box with a cracked mirror and a laminated placard: MAX OCCUPANCY 8.
* 2 A The numbers above the door flicker.
3 A ¶ DEPUTY DISTRICT ATTORNEY MARGUERITE OKWUOSA-HALE (40s, charcoal suit, case files in both arms) stands in one corner.
4 A In the other corner, PUBLIC DEFENDER TABITHA NGUYEN-FELLOWES (30s, rumpled blazer, coffee) leans against the rail.
* 5 A ¶ The elevator shudders and stops between floors.
* 6 A The lights dim.
* 7 A A tiny speaker coughs.
8 D MAINTENANCE [V.O.] (through the speaker): Stuck on four. Hang tight, folks.
9 A ¶ Marguerite sighs.
10 A Tabitha sips her coffee.
11 D MARGUERITE: Ms. Nguyen-Fellowes.
12 D TABITHA: Ms. Okwuosa-Hale.
13 D MARGUERITE: You filed a motion to suppress at six this morning.
14 D TABITHA: I did.
15 D MARGUERITE: You're supposed to file by five.
16 D TABITHA: The email server was down.
17 D MARGUERITE: That's not my problem.
18 D TABITHA: It will be when the judge reads it.
19 D MARGUERITE: She'll deny it.
20 D TABITHA: She'll hear it. She'll rule on the merits.
21 D MARGUERITE: Tabitha.
22 D TABITHA: Marguerite.
23 D MARGUERITE: Your client's own phone placed him at the scene. You don't have the merits.
24 D TABITHA: My client's phone was seized without a warrant.
25 D MARGUERITE: With consent.
26 D TABITHA: From his sister. Who doesn't live there.
27 A ¶ Marguerite's arms tighten around her files.
* 28 A A fluorescent tube flickers.
29 A She sets the files on the floor and kicks them into the corner.
30 D MARGUERITE (muttering): She lives there.
31 D TABITHA: What?
32 D MARGUERITE: Nothing.
33 D TABITHA: She said she moved out in June.
34 D MARGUERITE: She said a lot of things.
35 D TABITHA: Marguerite. Is there a lease?
36 D MARGUERITE: That is not for me to discuss in a stuck elevator.
37 D TABITHA: Then discuss it in the courtroom.
38 D MARGUERITE: I will.
39 D TABITHA: Good.
* 40 A ¶ The elevator lurches.
41 A Both of them grab the rail.
* 42 A The doors grind open onto the fifth floor.
* 43 A Between them: a bare corridor, and light.
44 D MAINTENANCE [V.O.] (through the speaker): Okay, you're good.
45 A ¶ Marguerite picks up her files.
46 A Tabitha steps out first.
47 D TABITHA: After you.
48 D MARGUERITE: You're holding the door.
49 D TABITHA: Habit.
50 D MARGUERITE: I'm asking you to hold it.
51 A ¶ Tabitha holds it.
52 A Marguerite steps through, stops, and for the first time looks at her directly.
53 D MARGUERITE [CONT'D]: There's a lease. It's in the evidence box. Item thirty-one.
54 D TABITHA: You're telling me?
55 D MARGUERITE: I'm telling the court. Shortly. You may as well know first.
56 A ¶ She walks down the corridor.
57 A Tabitha lets the door close behind her and watches her go.
