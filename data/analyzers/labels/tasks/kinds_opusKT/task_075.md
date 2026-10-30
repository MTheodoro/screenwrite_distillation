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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusKT/group_0075.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s05097_1 | INT. COUNTY PAROLE OFFICE - CRUZ'S OFFICE - CONTINUOUS
Detected names (may be incomplete or contain aliases): CRUZ, DARNELL, GIDEON, MARISOL
* 1 A ¶ A cramped room.
* 2 A A dying ficus.
* 3 A A window onto a brick wall.
4 A Cruz sits.
5 A Darnell does not, until she nods.
* 6 A ¶ Behind the glass partition, a second desk.
7 A Gideon Pratt, 50s, supervisor, pretends to type.
8 A He is not typing.
9 D CRUZ: How's the halfway house treating you, Darnell?
10 D DARNELL: Quiet. Too quiet, some nights.
11 D CRUZ: That's normal. Sleep comes.
* 12 A ¶ A sound in the ceiling.
* 13 A A tick.
* 14 A A pause.
* 15 A Another tick.
16 A Darnell's eyes go up.
17 A Cruz's don't.
18 D DARNELL: You hear that?
19 D CRUZ: Old building. Pipes.
* 20 A ¶ The ticking again.
* 21 A Slower.
* 22 A Closer to the vent.
23 D GIDEON (through the glass, flat): Whitfield. Employment verification.
24 A ¶ Darnell hands over a crumpled slip.
25 A Gideon reads it without looking up.
26 D GIDEON [CONT'D]: Dock work. Nights. Forty hours.
27 D DARNELL: Yes sir.
28 D GIDEON: Don't "sir" me. Save it for the judge.
29 A ¶ Cruz shoots Gideon a look through the glass.
30 A He shrugs and goes back to not typing.
* 31 A ¶ The door opens.
32 A Marisol Teague, 20s, intern, leans in with a stack of forms.
33 D MARISOL: Sorry. Officer Cruz? The drug screen, it's in. He's clean.
34 D CRUZ: Thank you, Mari.
35 A ¶ Marisol lingers, eyeing Darnell with open curiosity.
36 A Cruz clears her throat.
37 A Marisol backs out.
* 38 A ¶ The tick in the ceiling stops.
* 39 A The silence that replaces it is worse.
40 D DARNELL (quiet): Ms. Cruz. Eleven years, I counted ceiling tiles. Four hundred and twelve. Same as this room.
41 D CRUZ (gently): You don't have to count anymore.
42 D DARNELL: Habit.
* 43 A ¶ This is the last time he will sit in a room where someone else holds the door.
44 D CRUZ: Next appointment's the fourteenth. Same time. Don't be late, Darnell.
45 D DARNELL: Wouldn't dream of it.
46 A ¶ He stands.
47 A Shakes her hand.
48 A His grip lingers a second too long.
49 D DARNELL [CONT'D]: Thank you. For not treating me like a file.
50 A ¶ Cruz smiles, small and real.
51 D CRUZ: You're a person. Go be one.
* 52 A ¶ A buzz.
* 53 A The door opens.
* 54 A Light from the hallway, harsh and white.
55 A He walks into it.
* 56 A ¶ Behind him, in the vent, one more tick.
* 57 A Nobody turns.
58 D GIDEON (to the empty room): Damn pipes.

### SCENE s05098 | INT. QUICKROUTE DELIVERY WAREHOUSE - NIGHT
Detected names (may be incomplete or contain aliases): TEO, ALEX, KEIKO
* 1 A ¶ Cavernous.
* 2 A Steel shelving rises into dark.
* 3 A Pallets stacked like gravestones.
* 4 A A single forklift beeps somewhere unseen.
5 A ¶ ANGLE ON a loading bay: Teo Marchetti, 40s, broad shoulders, a scar through one eyebrow, scans a package.
6 A Beside him, Alex Rowan, 17, they/them, oversized hi-vis vest, drags a box twice their size.
7 D TEO: Easy. Lift with your legs.
8 D ALEX: I am lifting with my legs, Dad.
9 A ¶ Teo hides a smile.
* 10 A ¶ A voice crackles over the PA.
11 D KEIKO [V.O.]: Teo, we've got a rush on bay six. Insurance audit tomorrow, so don't lose anything.
12 A ¶ Keiko Tanaka, 50s, floor manager, appears at the end of the aisle with a clipboard, gray hair under a hairnet.
* 13 A ¶ INSERT - THE PACKAGE LABEL
* 14 A ¶ "HANDLE WITH CARE.
* 15 A FRAGILE.
* 16 A THIS SIDE UP."
* 17 A ¶ Alex's box slips.
* 18 A It hits the concrete.
* 19 A Something inside cracks.
20 A ¶ Everyone freezes.
21 D TEO (low): Alex.
22 D ALEX (small): It was heavy.
23 A ¶ WE SEE Keiko's face harden, then soften.
24 D KEIKO (to Teo): Take the night off. Both of you.
* 25 A ¶ BACK TO SCENE
26 A ¶ Teo kneels, lifts the box, shakes it gently.
* 27 A A rattle.
* 28 A A sigh.
29 D TEO (to Alex, soft): Hey. Nobody's fired. It's a lamp. We'll buy the lamp.
30 A ¶ Alex wipes their eyes with a glove.
31 A Teo ruffles their hair.
* 32 A The forklift beeps on.

### SCENE s05099_0 | INT. NEW DAWN FERTILITY CENTER - LOBBY - MORNING
Detected names (may be incomplete or contain aliases): KARINA, KARI, PHONE, DEV, MIRA, DR. FONTAINE
1 A ¶ SERIES OF SHOTS:
* 2 A ¶ -- A fish tank, bubbling.
* 3 A Three clownfish circle a plastic castle.
* 4 A ¶ -- A clock on the wall: 8:02.
* 5 A ¶ -- Hands on a clipboard.
* 6 A Rings.
* 7 A Nervous pens.
8 A ¶ Karina Bell, 30s, stands at the reception desk in scrubs, and beside her, Kari Beal, 20s, a trainee, also in scrubs.
9 A They share a look.
* 10 A The name tags are a coin flip.
11 D KARINA: No, I'm Karina. You're Kari.
12 D KARI: That's what I said.
13 D KARINA: You said Karina.
14 D KARI: It's eight in the morning.
15 A ¶ Dev Anand, 30s, and his wife Mira, 30s, enter holding hands too tightly.
* 16 A ¶ ON PHONE (INSERT): Dev's screen.
* 17 A A text from his mother: "DID YOU GO YET?
* 18 A WE ARE PRAYING."
19 D DEV (pocketing it): She's praying.
20 D MIRA: She's always praying.
21 D DEV: Her prayers are very specific.
22 A ¶ Mira laughs.
23 A Almost.
* 24 A ¶ MONTAGE - THE WAITING ROOM
* 25 A ¶ -- 8:20.
26 A Dev reads a magazine upside down.
* 27 A ¶ -- 8:44.
28 A Mira scrolls her phone.
* 29 A ON PHONE: "How to not panic during IVF consult."
* 30 A ¶ -- 9:15.
* 31 A The clownfish.
* 32 A Still circling.
* 33 A ¶ -- 9:40.
34 A Karina and Kari argue over a chart.
35 A Karina holds it higher.
36 A Kari jumps for it.
37 D KARINA: Kari, give me the file.
38 D KARI: Karina, I'm helping.
39 D DEV (to Mira, whispering): Which one's our nurse?
40 D MIRA: Both. Neither. I can't tell.
41 A ¶ Dr. Odette Fontaine, 50s, steps out of a back room.
42 A Silver bob, calm, a stethoscope like jewelry.
43 D DR. FONTAINE: Mr. and Mrs. Anand? Come in, please.
44 A ¶ They stand.
45 A Dev is shaking.
46 D DEV: Mira, honey, I love you, and I'm scared.
47 D MIRA: Dev, I love you, and I'm also scared. Walk.
48 A ¶ They follow Dr. Fontaine.
* 49 A The door closes.

### SCENE s05099_1 | INT. NEW DAWN FERTILITY CENTER - HALLWAY - LATER
Detected names (may be incomplete or contain aliases): DEV, MIRA, NERVOUS COURIER, KARINA, KARI, DR. FONTAINE
* 1 A ¶ SUPER: "THREE WEEKS LATER."
2 A ¶ Dev and Mira stand outside the exam room.
* 3 A In Mira's hand, a small white stick.
4 A She turns it over.
* 5 A ¶ ON PHONE: Mira's text to her sister: "ITS POSITIVE!!!!
* 6 A DONT TELL MA"
7 A ¶ Dev reads it over her shoulder.
8 D DEV: You texted your sister before me?
9 D MIRA: You were in the bathroom.
10 D DEV: I'm always in the bathroom!
11 A ¶ Mira bursts out laughing, tears coming now.
12 A He pulls her in.
* 13 A ¶ Suddenly the door at the end of the hall bangs open.
14 A ¶ A man in a pharmacy delivery jacket, NERVOUS COURIER, 20s, rushes in with a cooler.
15 D COURIER: Is there a, uh, Odette? I need a signature. This thing's been in my car for six hours.
16 D KARINA [O.S.]: Don't sign! It's the wrong clinic!
17 D KARI [O.S.]: He's wearing the wrong jacket!
18 A ¶ The courier looks at Dev and Mira.
19 A Mira looks at Dev.
20 D DEV: Is that, is that our...
21 D COURIER (checking tag): Anand? Yeah?
22 D MIRA (a gasp): That's the second batch!
23 D DEV (grabbing the cooler): We've got a baby on the way and a cooler in the hall! Everybody stay calm!
24 A ¶ Karina and Kari run in from opposite ends of the hall and collide.
* 25 A Charts everywhere.
26 D KARINA: Kari!
27 D KARI: Karina!
28 A ¶ They both reach for the cooler.
29 A Dev holds it above his head.
30 A Dr. Fontaine steps out of the exam room, sees the chaos, folds her arms.
31 D DR. FONTAINE: Is this a delivery, or a rugby match?
32 A ¶ Everyone freezes.
* 33 A A beat.
34 D MIRA (softly): Both.
* 35 A ¶ SERIES OF SHOTS:
* 36 A ¶ -- The cooler, opened.
* 37 A Inside: a small vase of flowers and a card.
* 38 A ¶ -- ON CARD: "From Ma.
* 39 A We are praying.
* 40 A P.S. Congratulations."
41 A ¶ -- Dev and Mira stare.
42 A Then look at each other.
43 A Then at the ceiling.
44 A ¶ -- Karina and Kari, side by side, wiping their eyes.
45 D DEV (soft): How did she know?
46 D MIRA (wiping her eyes): My sister told her.
47 D DEV: Of course she did.
48 A ¶ Mira leans her head on his shoulder.
* 49 A The clownfish circle on.
50 T FADE OUT.

### SCENE s05100 | INT. SKYLINE ROOFTOP BAR - NIGHT
Detected names (may be incomplete or contain aliases): RAYMOND OKAFOR, LENA VOSS, NELL, PRIYA, MARCUS WEBB
* 1 A ¶ String lights.
* 2 A Wind.
3 A Det. RAYMOND OKAFOR, 40s, wearing his shield on his belt under a good jacket, sits at the end of the bar while Dr. LENA VOSS, 30s, still in scrubs under her coat, pretends to read the cocktail list and TOMASZ the bartender polishes the same glass he polished five minutes ago and a waitress, NELL, drifts past with a tray of empty flutes.
4 D OKAFOR: You said you'd be off at eight.
5 D LENA: Trauma doesn't read the schedule Ray. Two GSWs and a fall from a scaffold. I'm here aren't I.
6 D OKAFOR: You are.
7 D LENA: Say something nice.
8 D OKAFOR: Your chart notes are terrible. I read one once for a case. Sixteen abbreviations in a row.
9 D LENA: That's the nicest thing you've ever said to me.
* 10 A ¶ Her phone buzzes on the bar.
11 A Lena checks it.
* 12 A PRIYA's voice, small and tinny, fills the gap.
13 D PRIYA [V.O.]: Dr. Voss, it's Priya in the ED, bed six just coded again, Dr. Anand is asking for you.
14 D LENA (into phone): Tell him I'm ten minutes away. No. Tell him I'm coming now.
* 15 A ¶ Silence.
16 A Okafor looks at the skyline.
* 17 A Nothing.
18 D OKAFOR: Go. Go save him.
19 D LENA: Ray
20 D OKAFOR: I'll be here. Or I wont. Whichever.
21 A ¶ Lena stands.
* 22 A Her phone.
* 23 A Dead.
24 A ¶ A door bangs and SGT. MARCUS WEBB, 50s, in a rain-dark windbreaker, crosses the roof straight at Okafor with an evidence bag held up like a fish.
25 D WEBB: Ray. The ring from the Delacroix scene. It matches the inscription. It was never hers, it was yours.
26 A ¶ Lena stops at the elevator.
27 A Tomasz stops polishing.
* 28 A Music.
29 A Somebody laughs.
30 D OKAFOR (quietly): Marcus, not now.

### SCENE s05101 | INT. PAROLE OFFICE - DAY
Detected names (may be incomplete or contain aliases): KIM, KIP, JEN
* 1 A ¶ ON CAMERA: handheld, slightly too close, a fluorescent hum.
* 2 A A wall of grey filing cabinets.
3 A THE WOMAN, 30s, sits across from a desk, hands flat on her knees, avoiding the lens.
4 A KIM, 50s, parole officer, reads a folder.
* 5 A Beside her a plastic nameplate reads KIP DAVIS, PO II.
* 6 A Kim is not Kip.
7 A Kip is the one leaning in the doorway, eating a bagel.
8 D KIM: Camera stays off the client please. We agreed.
9 D KIP: Its a documentary Kim. Everybody signed.
10 D KIM: Not her.
11 D THE WOMAN: I signed.
12 D KIM: You signed a form that said "a person". You didn't know it'd be this.
13 D THE WOMAN: I didn't know a lot of things when I signed stuff.
14 D KIM: Eleven months clean, curfew met, job at the laundromat, check ins on time. Honestly Jen you're the best file I've got this quarter and I've been dreading this meeting all week.
15 D KIP: Jen. There it is. Finally a name.
16 D JEN: Dreading why?
17 D KIM: Because your sponsor called me. Because he said he wants to put his name on your housing form. As your partner.
18 D JEN: Mo.
19 D KIM: Mo Haddad. Who has a record. Who's two years out himself. Associating with known offenders is a violation, you know that, I know that, Kip knows that.
20 D KIP (mouth full): I know that.
21 D JEN: So violate me.
22 D KIM: Don't make this a joke.
23 D JEN: I'm not joking. I love him. I've never said that out loud in this building. It's the first thing I've said in here that wasn't a lie or an excuse.
* 24 A ¶ Silence.
25 A Kim closes the folder.
* 26 A The camera shakes, someone has stopped breathing behind it.
27 D KIM: Sign here. And here. I never saw the second page.
28 D KIP: Neither did the camera.

### SCENE s05106 | INT. CORNERSTONE FITNESS - MORNING
Detected names (may be incomplete or contain aliases): CAL, BOZ, PAT, INES
1 A ¶ cal is on the leg press doing about half the weight he thinks he's doing, and boz, the trainer, is next to him counting reps in a voice that says he's counted a lot of reps, and across the floor a woman in a faded blue hoodie sits on the mat doing nothing at all and pat at the front desk is eating a banana and pretending to read the sign-in sheet.
2 D CAL: it's been like three weeks for me
3 D BOZ: it's been like three weeks for you for like six years
4 D CAL: that's fair
5 A ¶ THE WOMAN looks over from the mat.
6 A She takes her time, then goes back to staring at her shoes.
7 D BOZ (low): that's the one who comes at 6 and just sits
8 D CAL: what's her deal
9 D BOZ: didn't ask
10 D CAL: you ask everybody
11 D BOZ: not her
12 A ¶ pat leans over the desk.
13 D PAT: hey, she's got a bag. like a doctor bag. she carries it everywhere
14 D CAL: maybe she is a doctor
15 D PAT: doctors go to nicer gyms
16 A ¶ They all go quiet.
17 A The woman gets up, opens her bag, takes out a small plastic case and a folded paper, and sets them both very carefully on the bench next to cal, then sits again.
18 D CAL: uh hi?
19 D THE WOMAN: you left your pills in the locker room. i found them. i'm ines. i'm a nurse. you took a double dose today didn't you. your hands are doing that thing
20 A ¶ cal looks at his hands. boz looks at cal's hands. pat puts down the banana.
21 D CAL: i'm fine
22 D INES: okay
23 A ¶ She picks up her bag and walks out.
* 24 A The door sighs shut behind her.
* 25 A The leg press clanks, once, and stays at the bottom.
26 D BOZ (after a while): cal. sit down
27 D CAL: i am sitting
28 D BOZ: okay

### SCENE s05107 | INT. MOVING VAN - DAY
Detected names (may be incomplete or contain aliases): SAM, JEN, BIG DAVE, MO, MRS. K, LOU
* 1 A ¶ CLOSE ON the back of a rattling box truck, packed to the roof with old furniture wrapped in grey blankets.
* 2 A We see a walnut dresser from the 1920s, a mirror in a gilded frame, and a tall grandfather clock lashed with orange straps.
* 3 A ¶ Rain hammers on the metal roof.
* 4 A The road outside is wet and grey.
* 5 A It is a very dull morning.
6 A ¶ SAM, 30s, sits on a crate near the back door, looking worried.
7 A He checks the straps again.
8 A Next to him JEN, 20s, is writing on a clipboard.
9 A In the front, through a little window, we see BIG DAVE driving and MO in the passenger seat eating chips.
10 D SAM: Jen, are you sure the clock is secure? It's worth like ten thousand dollars.
11 D JEN: He has checked it three times, Sam. He is very sure.
12 D SAM: I'm just saying, if it falls, we all lose our jobs.
* 13 A ¶ The van hits a pothole.
* 14 A The clock RATTLES.
* 15 A The mirror TINKLES.
16 A She grabs the clipboard.
17 A He grabs the clock.
18 D BIG DAVE [O.S.]: Sorry about that, folks!
19 D MO [O.S.] (through the window): Dave, watch the road!
* 20 A ¶ Lightning FLASHES through the cracks in the door and, for a second, we see everyone's faces lit up in white.
21 A ¶ In the back, behind the dresser, a hand moves.
22 A It is an old woman's hand, wrinkled and thin, and she pushes a blanket aside.
23 A This is MRS. K, 80s, the owner of all this furniture, who has been hiding in the van the whole time.
24 D SAM (shocked): Mrs. K?
25 D MRS. K: I wasn't going to let you take Henry's clock without me.
26 D JEN: Ma'am, you can't be back here. It's not safe.
27 D MRS. K: I have been safe for eighty years. I would like to be something else.
* 28 A ¶ The phone in Jen's pocket BUZZES.
29 A She looks at it, he looks at her, and she answers.
30 D JEN (into phone): Hello? Yes, we have her. No, she's fine.
31 D LOU [V.O.] (over phone): Jen, it's Lou at dispatch. The client's daughter just called. Her mother is missing. Please tell me she's in the van.
32 D JEN: She is in the van.
33 D LOU [V.O.]: Oh thank God.
* 34 A ¶ The van HONKS and SCREECHES to a halt.
35 A Everyone slides forward.
* 36 A The clock tips.
37 A Sam catches it, barely.
38 A They all breathe.
* 39 A ¶ A pause.
* 40 A The rain softens.
* 41 A Out the back window a rainbow, small and surprised, appears over a wet parking lot.
42 D MRS. K (smiling): Henry always loved a rainbow.
43 A ¶ Sam looks at her.
44 A She looks at him.
45 A They both understand something they cannot say.
46 D BIG DAVE [O.S.]: We're here! Everybody out!
* 47 A ¶ The back door RATTLES OPEN.
* 48 A Light pours in.

### SCENE s05108 | INT. COUNTY PAROLE OFFICE - AFTERNOON
Detected names (may be incomplete or contain aliases): WENDELL PRUITT, OFFICER TANYA BELL, GLORIA
* 1 A ¶ The building has the smell of old carpet and burnt coffee.
* 2 A A radiator knocks somewhere behind the drywall.
* 3 A Outside, the rain has been falling since morning without conviction.
4 A Under the buzzing tube light, a waiting room of orange plastic chairs, and in them, a cardiac surgeon who used to hold hearts in his hands now holds a clipboard.
5 A ¶ WENDELL PRUITT, 58, silver-haired, hands still gentle in the way of men who've been told for decades to be careful, sits across from the desk of OFFICER TANYA BELL, 40s, who has the tired patience of someone who has read every excuse ever invented.
6 A Behind him his wife GLORIA, 50s, grips her purse.
7 A At the counter, the clerk ODELL stamps forms, and the receptionist JUNO eats her lunch from a tupperware lid.
8 D BELL: Dr Pruitt you understand the terms. No practising, no prescribing, no supervised access to patients. Not even a flu shot at the church.
9 D WENDELL: I understand the terms Officer Bell. I'm not asking to practice. I'm asking to sit with one man. His name is Alvin Reese. He has eleven days. His family called me because no one else in this county would touch his valve.
10 D GLORIA: Wendell
11 D WENDELL: No Gloria. Let me say it. Eleven years I've kept every rule they gave me. I didn't cut when the board told me not to cut. I didn't speak when the lawyers told me not to speak. A man is dying forty minutes from here and I know exactly how to stop it and I am sitting in a chair that's too small for me asking permission.
12 D BELL: That's not my decision.
13 D WENDELL: Whose is it then.
* 14 A ¶ The radiator knocks.
15 A Odell stops stamping.
16 A Juno stops chewing.
17 A Bell closes the file very softly, the way you close a door on a sleeping child.
18 D BELL: Mine, apparently. Doctor, I'm going to step out for ten minutes to take a phone call that I will not be able to remember in the morning. Odell. Juno. You didnt see him leave either.

### SCENE s05110 | INT. GLAMOUR NAILS - DAY
Detected names (may be incomplete or contain aliases): JEN, MO, BIG DAVE, LILY, TASHA, MRS. K, ^MO
1 A ¶ SERIES OF SHOTS:
* 2 A ¶ - Neon sign flickers on.
3 A OPEN.
* 4 A Pink light on cracked linoleum.
* 5 A ¶ - Rows of polish bottles, a hundred shades of nothing-to-say.
* 6 A Acetone haze hangs over the room like weather.
7 A ¶ MRS. K, 60, owner, tiny, reading glasses on a beaded chain, runs the front desk like an air traffic tower.
8 A Her niece JEN, 20s, ponytail and a tattoo of a swallow on her wrist, files a customer's thumbnail while MO, 30s, soft-spoken and the only one who ever sits down, paints stripes on a toddler's birthday set and BIG DAVE, 50s, a mountain of a man in a tiny salon chair, is getting his first pedicure of his life for his daughter's wedding and hating every second, and in the corner LILY, 70s, silver bob, oxygen-thin voice, flips a magazine she isn't reading, while TASHA, 30s, in scrubs, still wearing her hospital badge, waits her turn with her phone face down.
9 A ¶ MONTAGE - THE AFTERNOON
10 A ¶ - 1:15 PM.
11 A Big Dave winces.
12 A Jen laughs.
13 A ¶ - 2:40 PM.
14 A Lily's magazine slips.
15 A Tasha glances over.
16 A Looks away.
17 A ¶ - 3:30 PM.
18 A Lily's hand shakes on the armrest.
19 A Sweat on her lip.
* 20 A Nobody else sees.
21 D TASHA (quietly): Ma'am? You okay?
22 D LILY: Just warm.
23 D MRS. K: Jen, the fan!
24 A ¶ Jen turns the fan.
* 25 A The air moves.
26 A Lily's eyes don't.
27 D TASHA: Lily, right? When did you last eat?
28 D LILY: Breakfast. I think. I don't--
29 D BIG DAVE: She's grey. Why is she grey?
30 D MRS. K: Nobody panic in my shop!
31 D ^MO: Call 911. Somebody call 911!
32 A ¶ Tasha is already on her knees, two fingers at Lily's neck, and Jen grabs the phone, and Mrs. K knocks over a tray of bottles that SHATTER across the floor, red polish spreading like blood while Big Dave lifts the whole chair with Lily in it and Mo screams for room.
33 D TASHA: Get her flat! Flat! Now!
34 D MRS. K: Don't tell me what to do in my shop!
35 D TASHA: Then watch her die in it!
* 36 A ¶ Silence.
37 A Then Lily's chest rises.
38 A Falls.
39 A Rises.
* 40 A ¶ Sirens, far off, growing.

### SCENE s05112 | INT. VELVET TIPS NAIL LOUNGE - BACK ROOM - NIGHT
Detected names (may be incomplete or contain aliases): DONNA
1 A ¶ SUPER: "CORPORATE OFFSITE - DAY 3"
2 A ¶ INSERT - A LAPTOP SCREEN.
* 3 A Video call software.
* 4 A A red dot blinks: RECORDING.
5 D DONNA [O.S.] (sitting straight, clearing her throat, adjusting a headset that does not need adjusting): Hi. Okay. Is it recording? It says recording. Great. This is my statement for the Q3 culture review, and I want to begin by saying I love this company.
6 D DONNA (smiling very hard): I love the open floor plan, which is a nail salon. I love that our break room is also the supply closet, and that our wellness program is the free acetone.
7 D DONNA (laughing, not laughing): Which is a joke. That is a joke. Please mark it as humor.
8 D DONNA (picks up a bottle of polish, reads the label, puts it down): There are two people in this story. Marcy in Accounts and Marty in Facilities. Marcy sends the emails. Marty receives the emails. Except it's reversed, because the system autocorrects them, and for eleven months I have been invoicing Marty's boiler repairs to Marcy's bonus.
9 D DONNA (leans toward the camera): And Marcy knows. And Marty knows. And I know that they know. And nobody says anything, because this is a culture of respect.
10 D DONNA (whispering): This is the last time they will speak to me as a colleague.
11 D DONNA (sits back, normal voice, bright): So here are my concerns. One. The mandatory fun. We have a fun committee. It meets at six a.m. It is not fun. Two. The feedback system, in which you may give anonymous feedback, provided you sign it.
12 D DONNA (counting on fingers): Three. The word "synergy" was used forty-one times at Tuesday's all-hands, and I counted because I was told to be present.
13 D DONNA (a long breath, shoulders dropping, eyes wet and furious): And four. I have given this place nine years. I have painted forty thousand nails. Nobody has ever once asked me what colour I would choose.
14 D DONNA (reaches for a bottle at the edge of frame, a deep, ugly green; holds it up): This one. It is called "Quarterly Growth." I picked it. I would like it on the record that I picked it.
15 D DONNA (screws the cap off, looks at the camera): Marcy. Marty. If you are watching this, and I know you are, because the call is on the big screen in the lobby--
16 D DONNA (freezes; slowly turns her head toward the door; turns back, composed): Hi. We'll finish this in the all-hands.
17 D DONNA (reaches for the laptop, hand shaking, cheerful): Thank you for your time. Please rate this statement out of five.
18 A ¶ SUPER: "THIS CALL HAS BEEN RECORDED FOR TRAINING PURPOSES"

### SCENE s05113 | INT. ST. VINCENT'S - FOURTH FLOOR CORRIDOR - NIGHT
Detected names (may be incomplete or contain aliases): MARGUERITE, KIM, OZZIE, KIP, DR. HALE
* 1 A ¶ Fluorescent hum.
* 2 A A gurney wheel squeaks somewhere unseen.
3 A ¶ Kim, 40s, charge nurse, stands at the station with a chart.
4 A Kip, 20s, orderly, mops in slow circles nearby.
5 A A visitor sleeps in a chair, mouth open.
6 A ¶ Marguerite Voss, 50s, attorney in a wet trench coat, strides in with a leather folio.
7 D MARGUERITE: I need the patient in 412. Now.
8 D KIM: Visiting hours ended at nine.
9 D MARGUERITE: He signed a statement tonight. I need it witnessed before--
10 A ¶ Ozzie, 30s, night nurse, they/them, appears from a doorway, pale, pen still in hand.
11 D OZZIE: Nobody's in 412. They went down at ten.
12 D KIP: Went down where?
13 D KIM: Ozzie, what do you mean, went down?
14 D MARGUERITE: Then who signed this?
15 A ¶ She lifts the page.
* 16 A Wet ink.
* 17 A Fresh.
* 18 A ¶ A call light CHIMES.
* 19 A 412.
20 A ¶ All four look down the hall.
* 21 A The door is open.
22 A ¶ Dr. Hale, 60, in a rumpled white coat, steps out of 412.
23 A He wipes his hands on a towel.
24 A He does not look at them.
25 D DR. HALE (soft): He's resting.
* 26 A ¶ The lights flicker.
* 27 A Out.
* 28 A On.
29 A ¶ The sleeping visitor is gone.
* 30 A The chair still rocks.

### SCENE s05114 | INT. PRETTY PINK NAILS - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): PAM, LOU, GUS
* 1 A ¶ Rain taps the front window.
* 2 A The sign buzzes.
* 3 A A string of dusty Christmas lights, still up in March, blinks out of sync.
4 A ¶ PAM, 40s, nail tech, bends over a client's hand with a drill file.
5 A LOU, 50s, the client, scrolls her phone with her free hand.
* 6 A ¶ The smell of acetone.
* 7 A Of something sweeter under it.
8 D PAM: Your cuticles are in rough shape Lou.
9 D LOU: It's the dishwasher. Always the dishwasher.
10 D PAM: You need a oil. I'll put some on after.
* 11 A ¶ The drill WHIRS.
* 12 A Stops.
* 13 A Whirs.
* 14 A ¶ Outside a bus hisses past.
* 15 A Wet tires on wet road.
16 D LOU: Is it me or is it cold in here?
17 D PAM: Heater's been broke since Tuesday. Mrs K says shes getting a guy.
18 D LOU: A guy.
19 D PAM: A guy.
* 20 A ¶ Pause.
* 21 A The lights hum.
* 22 A Somewhere in the back a faucet drips.
* 23 A Drip.
* 24 A Drip.
25 D LOU: Did you hear that?
26 D PAM: The faucet?
27 D LOU: No. Under it.
28 A ¶ They listen.
* 29 A The faucet.
* 30 A The rain.
* 31 A The sign.
* 32 A ¶ Then a slow scraping, like a chair being dragged across tile in the back room.
33 D PAM (too brightly): Old building. Pipes.
* 34 A ¶ The bell on the front door JINGLES.
35 A ¶ GUS, 60s, a tall man in a soaked grey raincoat with no umbrella, steps in.
* 36 A Water runs off his sleeves onto the mat.
37 A He smiles with too many teeth.
38 D GUS: Afternoon, ladies. Is the owner in?
39 D PAM: Mrs K's out. Can I help you?
40 D GUS: I'll wait.
41 A ¶ He sits in the pedicure chair by the window.
* 42 A The water jets turn on by themselves.
* 43 A Nobody touches them.
44 D LOU (whispering): Pam.
45 D PAM: I see it.
* 46 A ¶ The scraping in the back stops.
* 47 A ¶ Rain.
* 48 A Rain.
* 49 A Rain.
50 D GUS: Nice weather for it.

### SCENE s05115 | INT. THE GRAND MERIDIAN HOTEL - SEVENTH FLOOR CORRIDOR - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE HAROLD WEEMS, CLAIRE BOSWORTH, RICKY
* 1 A ¶ We see a long hotel corridor with red carpet and gold wallpaper.
* 2 A The lights are dim and it is very quiet.
* 3 A Room numbers go from 701 down to 720 and we can tell this is an expensive hotel.
* 4 A ¶ CLOSE ON the door of room 714.
* 5 A It is slightly open.
6 A ¶ DETECTIVE HAROLD WEEMS, 50s, wearing a rumpled brown suit and carrying a notepad, walks down the corridor.
7 A He looks tired because he has been working all night.
8 A ¶ He stops outside 714 and pushes the door gently with his finger.
9 D WEEMS: Hello? Police.
* 10 A ¶ No answer.
11 A He steps inside and out of view.
12 A ¶ A moment later a door SLAMS somewhere down the hall and CLAIRE BOSWORTH, 30s, in a red evening gown, bursts out of the stairwell, out of breath.
13 A She is holding her shoes in one hand.
14 A ¶ Weems steps back out into the corridor and sees her.
15 D WEEMS: Miss Bosworth. I told you to stay in the lobby.
16 D CLAIRE: I couldn't. Not after what Ricky told me.
17 D WEEMS: Ricky?
18 D CLAIRE: The bellhop. He saw someone go into 714 at eleven o'clock, and it wasn't the man who checked in. It was a woman. A tall woman with a scar on her cheek, and she was carrying a case.
19 D WEEMS: A case. What kind of case?
20 D CLAIRE: A violin case. Or at least that's what Ricky thought, but he said it was too heavy for a violin, because she had to use both hands, and her whole arm was shaking, and then she looked straight at him and said, "I was never here," and gave him a hundred dollars.
21 D WEEMS: And he took it.
22 D CLAIRE: Of course he took it. He's twenty-two and he makes eleven dollars an hour.
23 D WEEMS: Where is Ricky now?
24 D CLAIRE: I don't know. He went to take the service elevator down to get his coat, and that was twenty minutes ago, and he hasn't answered his phone.
* 25 A ¶ Claire's phone BUZZES in her hand.
26 A She looks down at it.
* 27 A ¶ CLOSE ON the phone screen.
* 28 A ¶ ON PHONE: dont trust the cop
* 29 A ¶ ON PHONE: hes been in the room before
30 A ¶ She looks up slowly at Weems.
31 D WEEMS: What is it?
32 D CLAIRE: Nothing. It's nothing. Just my sister.
33 D WEEMS: May I see?
34 D CLAIRE: No.
35 A ¶ He reaches for the phone and she pulls it back.
36 A They both freeze.
* 37 A ¶ At the far end of the corridor, the service elevator DINGS.
* 38 A ¶ The doors slide open.
39 A RICKY, 22, in a bellhop uniform, stands there pale and shaking.
40 A He holds up one hand.
* 41 A There is blood on it.
42 D RICKY: Detective. You need to come with me. Please. Right now.
43 D WEEMS: What happened to your hand?
44 D RICKY: It's not my blood.
45 A ¶ Claire backs away.
46 A Weems takes a step toward Ricky.
47 A Claire turns and runs for the stairwell.
48 D WEEMS: Miss Bosworth! Stop!
* 49 A ¶ The stairwell door SLAMS behind her.
50 A ¶ Weems and Ricky look at each other.
51 A Neither moves.
52 D RICKY: She's not who she says she is.
53 D WEEMS: I know.
54 D RICKY: You knew?
55 D WEEMS: I've known since the lobby. But I needed to see where she'd run.
56 D RICKY: And now?
57 D WEEMS: Now we go after her, and you tell me everything on the way.
58 A ¶ They both run toward the stairwell.
* 59 A The corridor lights flicker and go out.
* 60 A ¶ In the dark, one door CLICKS open.
* 61 A Room 714.
62 A ¶ A tall shadow stands in the doorway.
63 A She is holding a violin case.
64 A ¶ She does not move.
* 65 A ¶ Her phone BUZZES.
* 66 A ¶ ON PHONE: found you

### SCENE s05116 | INT. MERCY GENERAL - NURSES' STATION - NIGHT
Detected names (may be incomplete or contain aliases): INES, WALLY
1 A ¶ 3 a.m.
* 2 A The hospital hums.
* 3 A Vending machine glows.
* 4 A A mop bucket sits abandoned.
* 5 A Rain on the windows.
* 6 A ¶ Its heritage week, so the whole floor is in costume.
* 7 A A banner reads "MERCY GENERAL: 100 YEARS OF CARING."
8 A ¶ INES, 50s, night nurse, wears a starched 1920s nurse's cap and a cardigan.
9 A She counts pills.
10 A Dry as toast.
11 A ¶ WALLY, 30s, resident, bursts through the doors in a full Victorian surgeon's apron and top hat.
* 12 A ¶ (Applause beat.)
13 D WALLY: Good evening Ines. Did you miss me?
14 D INES (not looking up): Seven hours isn't long enough.
15 A ¶ ANGLE ON Wally, who tips the hat.
* 16 A It falls off.
17 D WALLY: It was a very sturdy hat this morning.
18 D INES: They gave you the one with the moth.
19 A ¶ He picks it up.
20 A Looks inside.
* 21 A A moth flutters out.
22 D WALLY: Well. It's alive. That's more than I can say for my evening.
23 A ¶ She slides a chart across the counter without a word.
24 A ¶ INSERT - THE CHART.
* 25 A Room 9.
* 26 A Patient: M. Alder.
* 27 A Allergies: none.
* 28 A Next of kin: blank.
29 A ¶ BACK TO SCENE
30 D WALLY: Whos Mr. Alder?
31 D INES: Brought in at midnight. No visitors. No calls.
32 D WALLY: Maybe he's shy.
33 D INES: Maybe.
34 A ¶ She sorts the pills again.
35 A Same pills.
36 A Same order.
37 D WALLY: You've counted those three times.
38 D INES: Four.
39 A ¶ He looks at her.
40 A She doesn't look back.
* 41 A The vending machine HUMS.
42 D WALLY: Ines. Is something
43 D INES: Pass me the pen.
44 A ¶ He passes the pen.
45 A She writes "Alder" and then crosses it out and writes it again, slower.
* 46 A ¶ WE SEE through the glass of Room 9, a man's hand resting on the blanket, a wedding ring catching the light.
47 D WALLY (softly): You know him.
48 D INES: I know a lot of people.
49 D WALLY: Ines.
50 D INES: He was a medic. In the old days. We worked a flood together in '09. He carried me out of a basement.
51 A ¶ She puts the pen down very carefully, like it might break.
52 D WALLY: Shall I
53 D INES: No. I'll go.
54 A ¶ She straightens her cap.
55 A Walks to Room 9.
56 A At the door she pauses, one hand on the frame, and for a second the whole floor is silent.
* 57 A Even the rain.
58 A ¶ CLOSE ON Wally, who takes off his ridiculous hat and holds it against his chest.
59 A ¶ She goes in.
* 60 A The door closes.
* 61 A ¶ The monitor beeps once.
* 62 A Then again, faster.

### SCENE s05117 | INT. NEW DAWN FERTILITY CLINIC - RECEPTION - NIGHT
Detected names (may be incomplete or contain aliases): JO, RAY, FREEZER DOOR SLAMS, BEA, RADIO, VIC
* 1 A ¶ Empty waiting room.
* 2 A Soft jazz on a dead speaker.
* 3 A Rain streaks the windows.
* 4 A ¶ Orchids.
* 5 A Glossy brochures.
* 6 A A wall of baby photos.
7 A ¶ JO, 30s, receptionist, locks the front drawer.
8 A Hurries.
* 9 A ¶ Her phone BUZZES.
10 A ¶ She snatches it.
11 A Reads.
12 A Pales.
13 A ¶ RAY, 40s, night security, strolls in with a flashlight and a donut.
14 D RAY: Working late, Jo?
15 D JO: Just leaving.
16 D RAY: Door's alarmed. Nobody leaves till eleven.
17 A ¶ She backs toward the hall.
18 D JO: Ray. Please.
* 19 A ¶ BEEP-BEEP-BEEP.
* 20 A The alarm panel blinks red.
21 A ¶ Ray's smile dies.
22 A He drops the donut.
23 D RAY: What did you take?
* 24 A ¶ Down the hall, a FREEZER DOOR SLAMS.
25 A ¶ Both turn.
26 A ¶ BEA, 30s, lab tech, sprints out of the lab with a steel canister in her arms.
* 27 A Frost pours off it.
28 A Her scrubs are soaked.
29 D BEA: Go! Go! Go!
30 D RAY: Put it down!
31 D BEA: Those are eleven families, Ray!
32 D JO: She's right. Look at the logs. Somebody's been selling them.
33 A ¶ Ray hesitates.
* 34 A His radio CRACKLES.
35 D RADIO [V.O.]: Unit four, status?
* 36 A ¶ A shadow fills the glass front doors.
37 A ¶ VIC, 50s, in a black coat, a clinic director's badge swinging from his neck, raises a keycard.
* 38 A The lock CLICKS.
39 D VIC: Nobody move.
40 A ¶ Jo grabs the canister.
41 A Bea shoves Ray.
* 42 A The alarm SCREAMS.
43 A ¶ They bolt for the fire exit.

### SCENE s05119 | INT. SUBWAY CAR - MORNING RUSH
Detected names (may be incomplete or contain aliases): PIP, ZED, MABEL
* 1 A ¶ Packed.
* 2 A Elbows.
* 3 A Umbrellas.
* 4 A A tuba case.
* 5 A ¶ Fluorescent lights flicker green.
* 6 A The train rumbles through the dark.
7 A ¶ PIP, 10, a girl in a yellow raincoat, clutches a strap too high for her.
8 A She hums.
* 9 A ¶ At her feet, a lumpy backpack with a zipper mouth.
* 10 A It wiggles.
11 D ZED [V.O.] (muffled, from the bag): Pip. Pip. Are we there?
12 D PIP (whispering): Not yet, Zed.
13 D ZED: You said five stops. I counted nine.
* 14 A ¶ Pip's phone buzzes.
* 15 A ¶ ON PHONE: mom: where r u
* 16 A ¶ ON PHONE: mom: ANSWER ME
17 A ¶ Pip stares at it.
18 A She taps the screen.
* 19 A ¶ ON PHONE: no signal
* 20 A ¶ Her phone.
* 21 A Dead.
22 A ¶ Across the aisle, MABEL, 70s, in a purple scarf, knits something long and glittering.
23 A She watches Pip over her glasses.
* 24 A ¶ Silence.
* 25 A ¶ The train slows.
* 26 A Brakes squeal.
27 D MABEL: That's a loud bag, dear.
28 D PIP: It's, um. A toy.
29 D MABEL: Toys don't ask how many stops.
* 30 A ¶ The lights go out.
* 31 A ¶ Darkness.
* 32 A Nothing.
* 33 A ¶ Then a soft blue glow.
* 34 A The backpack unzips by itself.
35 A ¶ Zed climbs out.
36 A A little round robot, one antenna bent.
37 D ZED: Hello, Mabel.
38 D MABEL: Hello, Zed. You're late.
39 A ¶ Pip's jaw drops.

### SCENE s05120 | INT. HOLLOWAY VETERINARY CLINIC - NIGHT
Detected names (may be incomplete or contain aliases): CAL BRANNIGAN, COLE CALLOWAY, MARSHAL TUCKER
* 1 A ¶ Rain on the tin roof.
* 2 A One lamp burning.
* 3 A ¶ ANGLE ON the front desk.
* 4 A A cracked leather saddle bag sits on it, open.
5 A ¶ CAL BRANNIGAN, 50s, sun-cured and slow, stands over a sleeping hound on the steel exam table.
6 A He strokes its ear with two rough fingers.
7 D CAL: There. Easy, old man.
8 A ¶ He hums.
9 A Something half-remembered.
* 10 A ¶ The back door CREAKS.
11 A He doesn't turn.
12 D COLE [O.S.]: Still got that dog's leg looked at?
13 D CAL: Sutured an hour ago.
14 D COLE [O.S.]: Good.
15 D CAL: Coffee's on the stove, Cole.
16 A ¶ COLE CALLOWAY, 40s, enters from the dark of the kennel hall.
17 A Duster coat.
18 A Dripping.
19 A He smiles like a man at a funeral that went well.
20 D COLE: You're a hard man to find.
21 D CAL: Not hard. Just ain't been looking.
22 A ¶ Cole sets his hat on the counter.
23 A Takes his time.
24 D CAL [CONT'D]: Sit.
25 D COLE: I'll stand.
26 D CAL: Suit yourself.
27 A ¶ He pours two tin cups.
28 A Slides one across.
29 A Cole doesn't take it.
* 30 A ¶ CLOSE ON the cup, steam curling.
31 D COLE: Remember when we pulled that mare out of the Platte?
32 D CAL: Spring of '09.
33 D COLE: She had a foal in her.
34 D CAL: Dead already.
35 D COLE: You cried anyway.
36 A ¶ Cal almost laughs.
37 A He looks at the hound instead.
38 D CAL: I was young.
39 D COLE: You were thirty-eight.
* 40 A ¶ A beat.
* 41 A The rain softens.
* 42 A Nothing but the clock.
43 D COLE [CONT'D]: Nice quiet place you've made.
44 D CAL: It does the job.
45 D COLE: Folks bring you strays? Hurt things?
46 D CAL: Mostly.
47 D COLE: And you fix them.
48 D CAL: When I can.
49 A ¶ Cole nods.
50 A He walks the length of the counter, one hand trailing along it.
51 A He stops at the saddle bag.
52 A ¶ INSERT - THE BAG
* 53 A ¶ A leather pouch inside.
* 54 A Tied with red twine.
55 A ¶ BACK TO SCENE
56 A ¶ Cole doesn't touch it.
57 A He just looks.
58 D COLE: Heavier than it ought to be.
59 D CAL: Feed money.
60 D COLE: Is that right.
61 D CAL: That's right.
62 A ¶ Cole smiles.
63 A Cal does not.
* 64 A ¶ A phone RINGS on the wall.
* 65 A Old black rotary.
66 A Neither man moves.
* 67 A It rings five times, six.
68 D CAL [CONT'D]: Let it ring.
69 D COLE: Could be somebody's sick animal.
70 D CAL: Could be.
71 A ¶ He lifts the receiver anyway.
72 A Holds it between them so both can hear.
73 D MARSHAL TUCKER [V.O.] (tinny, through the line): Cal? That you? Got a rider heading your way. Cole Calloway. Armed, and he ain't alone.
* 74 A ¶ Silence.
75 A Cole's smile hasn't moved.
76 D CAL (into the phone): He's here.
77 D MARSHAL TUCKER [V.O.]: Cal, get out of there.
78 A ¶ Cal hangs up.
79 A Gently.
80 D COLE: You knew.
81 D CAL: Saw your horse. Tied behind the feed store.
82 D COLE: And you made coffee.
83 D CAL: Seemed polite.
84 A ¶ WE SEE Cole's hand drift to his coat.
* 85 A Slow.
86 A ¶ ANGLE ON Cal's other hand, under the counter.
87 D CAL [CONT'D]: That hound on the table.
88 D COLE: What of him?
89 D CAL: You shot him. Day before yesterday. Outside Dunmore.
90 A ¶ Cole's hand stops.
91 D CAL [CONT'D]: Took me three hours to dig the lead out.
92 D COLE (quiet): He was on my trail.
93 D CAL: He was a dog.
94 A ¶ The hound stirs.
95 A Lifts his head.
96 A Looks at Cole.
97 A ¶ A low growl, half asleep.
98 D COLE: Hell.
99 D CAL: Said you'd come for him.
100 D COLE: Who said?
101 D CAL: Nobody. He just kept looking at the door.
102 A ¶ Cole laughs, short.
103 A Then he doesn't.
104 D COLE: What's under that counter, Cal?
105 D CAL: Same thing that was under it in '09.
* 106 A ¶ Rain.
* 107 A Nothing else.
108 A ¶ Cole lets his hand fall away from the coat.
109 D COLE: I'll be damned.
110 D CAL: Likely.
111 A ¶ Cole picks up his hat.
112 A Puts it on.
113 A Turns for the door.
114 D CAL [CONT'D]: Cole.
115 A ¶ He stops.
116 D CAL [CONT'D]: Leave the pouch.
117 D COLE: It ain't yours.
118 D CAL: Not asking for me.
119 A ¶ Cole looks at the dog.
120 A Then at the bag.
121 A He lays the twine-tied pouch on the counter, gentle as a newborn.
122 A ¶ He goes out into the rain.
123 A ¶ Cal lets out a long breath.
124 A Brings his hand out from under the counter.
125 A ¶ It's holding a tin of dog biscuits.
126 A ¶ He gives the hound one.

### SCENE s05121 | INT. COUNTY PAROLE OFFICE - DAY
Detected names (may be incomplete or contain aliases): OFFICER DANA REYES, ELI COLLINS, ELLIS, SGT. HAYES, NORA
* 1 A ¶ Grey light through blinds.
* 2 A Rain on the window.
* 3 A A heater ticks in the corner.
4 A ¶ OFFICER DANA REYES sits behind a metal desk.
5 A In front of her, ELI COLLINS, 30, in a thrift-store jacket, hands flat on his knees.
6 A His younger brother ELLIS stands behind the chair, too close.
* 7 A ¶ The wall clock hums.
* 8 A The rain gets harder.
9 D DANA: Eli, you missed two check-ins.
10 D ELI: Bus broke down. I told the desk.
11 D DANA: The desk says nothing.
12 D ELLIS: He was with me. We walked.
13 D DANA: Ellis, you're not on the list for this meeting.
14 D ELLIS: I'm family.
15 D ELI: Ellis. Sit.
16 A ¶ Ellis doesn't.
* 17 A A cheap phone BUZZES on the desk.
18 A Dana checks it, frowns, puts it on speaker.
19 D SGT. HAYES [V.O.] (over the phone, crackling): Reyes? Hayes, Fort Dunmore. You've got Collins there?
20 D DANA: Sitting in front of me.
21 D SGT. HAYES [V.O.]: Tell him the review board turned down the appeal.
22 A ¶ Eli stares at the desk.
23 A Nothing moves in his face.
24 D ELLIS: What appeal? You said you were done with them.
25 D ELI: I never said that.
26 A ¶ NORA, a caseworker in a cardigan, leans in at the door with a folder.
27 D NORA: Dana, sorry, the ten-thirty is early.
28 D DANA: Give us a minute, Nora.
29 D ELLIS: They don't get to decide that. Not after what he did over there.
30 D SGT. HAYES [V.O.]: Son, nobody's denying what he did.
31 D ELI: Ellis, stop.
32 D ELLIS: They gave him a medal and a record!
33 D NORA: Sir, please lower your voice.
34 D DANA: Mr. Collins, sit down or I'll call it.
35 D ELLIS: Call it! Go ahead!
36 D SGT. HAYES [V.O.]: Is somebody shouting?
37 D ELI (rising, quiet): Everybody stop.
38 A ¶ The room freezes.
* 39 A The heater ticks.
40 A ¶ Eli looks at the phone like it's a person.
41 D ELI [CONT'D]: Sergeant. Eleven men walked out of that valley because I did what I did. You remember the number. You signed the paper.
42 D SGT. HAYES [V.O.]: I remember.
43 D ELI: Then you know what I'm asking for isn't mercy. It's a pen.
44 D SGT. HAYES [V.O.]: The pen isn't mine to lift.
45 D ELI: Then whose is it?
* 46 A ¶ Nobody answers.
* 47 A Rain.
* 48 A The line hisses.
49 A ¶ Ellis kicks the chair over.
* 50 A It CRASHES against the wall.
51 A ¶ Dana is on her feet.
52 A Nora backs into the hallway.
53 D ELLIS (shaking): Fifteen months of this. Fifteen months of signing in like a dog.
54 D ELI: Ellis.
55 D DANA: That's enough. Both of you.
56 A ¶ Eli puts a hand on his brother's chest.
57 A Ellis is breathing hard.
58 D ELI (soft): Go wait outside.
59 A ¶ Ellis goes.
* 60 A The door shuts.
* 61 A The blinds rattle.
62 A ¶ Eli sets the chair upright.
63 A Sits.
64 A Folds his hands.
65 D ELI [CONT'D]: Sorry about that. What do you need me to sign?

### SCENE s05122 | INT. NORTHSIDE RECORDING STUDIO - NIGHT
Detected names (may be incomplete or contain aliases): TIM, TOM, ENGINEER
* 1 A ¶ A small vocal booth.
* 2 A Foam on the walls.
* 3 A A red light is on.
4 A ¶ TIM, 28, boxer, stands at the microphone.
5 A He wears a hooded training jacket.
6 A His hands are wrapped.
7 A He holds a paper with lyrics, but he does not look at it.
8 A ¶ Behind the glass, his trainer TOM, 55, sits next to a young ENGINEER with big headphones.
* 9 A A sleepy bulldog lies under the mixing desk.
10 D ENGINEER (through speaker): Okay. Take four.
11 A ¶ Tim nods.
* 12 A Music starts, a heavy beat.
13 A He opens his mouth.
14 A Nothing comes.
* 15 A ¶ The music stops.
16 D TOM (through speaker): It's okay. Again.
17 D TIM: Again.
* 18 A ¶ The beat starts.
19 A Tim says two words, then stops.
20 A He rubs his wrapped knuckles.
21 D TOM (through speaker): You have the words?
22 D TIM: I have the words.
23 D TOM: Then say them.
24 A ¶ Tim looks at the paper.
25 A Folds it.
26 A Puts it in his pocket.
27 D TIM: Is not a song. It is only noise.
28 D TOM: Tomorrow forty thousand people hear this noise when you walk to the ring.
29 D TIM: Yes. I know.
30 A ¶ The Engineer looks at his screen.
31 A Very busy suddenly.
32 A ¶ Tom takes off his headphones and goes to the booth.
33 A He opens the door.
* 34 A The bulldog lifts its head, then lays it down again.
35 A ¶ Tom stands close.
36 A He fixes Tim's collar.
37 A His hands are not quite steady.
38 D TOM: Your father had the same face. Before his last fight.
39 D TIM: You said he was not afraid.
40 D TOM: I said many things.
41 A ¶ Tim looks at him a long time.
42 A Then he laughs once, short.
43 D TIM: You are a bad liar, Tom.
44 D TOM: I am a good trainer.
45 D TIM: Same thing, in your case.
46 A ¶ Tom tries to smile.
47 A It doesn't hold.
48 A He goes back to the control room.
49 A Sits.
50 A Puts on the headphones.
51 D TOM [CONT'D] (through speaker): From the top. Do not think. Just talk.
* 52 A ¶ The beat.
53 A Tim closes his eyes.
54 D TIM (quietly, to the beat): He is waiting at the door. He is waiting for me.
55 A ¶ Tom looks down at his own hands.
56 D TIM [CONT'D] (a little louder): Let him wait.
57 A ¶ The Engineer stops pretending to be busy.
58 A He is looking at Tim now.
* 59 A ¶ The red light stays on.

### SCENE s05123 | INT. NEONARENA GAMING TOURNAMENT - FINALS STAGE - DAY
Detected names (may be incomplete or contain aliases): ZED, LIA, OMAR, PRIYA
* 1 A ¶ Lights flash purple and green.
2 A A crowd of four thousand is screaming.
3 A Somewhere a commentator shouts about a "clutch play" and the huge screen above shows a frozen game of dragons, and under the stage a smoke machine is making too much smoke, and in the booth ZED the team captain, LIA the sniper, OMAR the coach and PRIYA the substitute are already sitting down in matching orange jerseys.
4 D ZED (adjusting headset, whispering to himself): Okay okay okay we are fine
5 D LIA (to the group, loudly): Everybody is hearing me? Mic check one two.
6 D OMAR (thumbs up, chewing a protein bar): Loud and clear
7 D PRIYA (to Lia, pointing at her screen): You have the wrong crosshair she told us yesterday
8 D LIA (not looking away from the screen): She is not the coach. Omar is the coach
9 D OMAR (mouth full): Thank you Lia
10 A ¶ The crowd roars.
* 11 A Cold air from the vents.
* 12 A A drone camera hovers near the booth like a very expensive fly.
13 D ZED (to the whole team, hands shaking): Strategy is simple. We go left. Always left.
14 D PRIYA (raising hand): Left was how we lost the semi final
15 D ZED (ignoring her, muttering): Left is good. Left is good.
16 D OMAR (to Zed, gently): Maybe also some right
17 D ZED (snapping): No right!
18 A ¶ The announcer calls their team name.
* 19 A It is mispronounced.
20 A The audience laughs.
21 D LIA (to herself, quiet): Please not the live stream. Please not my mother watching
22 D PRIYA (to Lia, leaning over): Your mother is watching. She is in the third row with a sign
23 D LIA (horrified, covering her face): She has a sign
24 D OMAR (to everyone, standing): Okay listen. One game. Nobody dies. We are here for the free pizza anyway
25 D ZED (to Omar, hopeful): Is there pizza?
26 D OMAR (pointing off): There is always pizza
27 D PRIYA (softly, to no one): Then I am already winning
* 28 A ¶ The countdown begins.
* 29 A A big red three.
* 30 A Two.
31 D LIA (eyes narrowed, whispering): Left.
32 D ZED (whispering back): Left.
33 D PRIYA (under her breath): Right.
* 34 A ¶ One.
* 35 A A horn BLARES.

### SCENE s05124 | INT. VERTEX ARENA - BACKSTAGE CORRIDOR - NIGHT
Detected names (may be incomplete or contain aliases): NELL, ROOK, NEIL, BRAM
* 1 A ¶ Humming fluorescents.
* 2 A Distant crowd.
* 3 A A muffled roar.
* 4 A ¶ Then nothing.
5 A ¶ NELL, 30s, hoodie, lanyard that says STAFF.
6 A She walks fast.
7 A Doesn't look up.
* 8 A ¶ Behind her, the sound of a door.
* 9 A Latching.
10 A ¶ She stops.
* 11 A ¶ Silence.
* 12 A ¶ Her earpiece CRACKLES.
13 D ROOK [V.O.]: Nell. Status.
14 D NELL (low): Corridor C. Nobody.
15 D ROOK [V.O.]: Then why are you whispering.
16 A ¶ She doesn't answer.
17 A Listens.
* 18 A ¶ Dripping.
* 19 A Somewhere, a pipe.
* 20 A ¶ Nothing else.
21 D NELL (beat): Something's wrong.
22 D ROOK [V.O.]: Vault room is thirty metres. Keep walking.
23 A ¶ She keeps walking.
* 24 A Her shoes squeak on the concrete.
* 25 A ¶ Squeak.
* 26 A Squeak.
27 A ¶ Stop.
28 A ¶ The squeaking continues.
* 29 A Two steps behind her.
30 A ¶ She turns.
* 31 A ¶ Empty corridor.
* 32 A A door, slightly open.
* 33 A ¶ A shadow moves inside it.
34 D NELL (barely audible): Neil?
35 A ¶ NEIL, 30s, same hoodie, steps out.
36 A Sweating.
37 A Holding a drill case.
38 D NEIL: You're late.
39 D NELL: You're early.
40 D NEIL (tight): I'm here since six. I was in the ceiling.
41 A ¶ She stares at him.
42 A He is smiling.
* 43 A It's wrong.
44 D ROOK [V.O.]: Nell? Who are you talking to?
45 D NELL (into the earpiece): Neil's here.
46 D ROOK [V.O.] (pause): Neil is in the van.
* 47 A ¶ Silence.
* 48 A ¶ Her phone.
* 49 A Dead.
50 A ¶ She looks up.
51 A Neil's smile fades.
52 A He glances at something behind her.
* 53 A ¶ A heavy footstep.
54 A ¶ A guard.
55 A BRAM, 40s, radio on his belt, hand resting on a holster.
56 A He stands under the exit sign.
57 D BRAM: Evening.
* 58 A ¶ Nobody moves.
* 59 A ¶ The overhead light FLICKERS.
60 D BRAM [CONT'D]: Which one of you is not on my list?
* 61 A ¶ The light dies.
* 62 A ¶ Darkness.
* 63 A ¶ A zipper.
* 64 A A click.
* 65 A ¶ Then one gunshot.

### SCENE s05125 | INT. STATE PAROLE OFFICE - DAY
Detected names (may be incomplete or contain aliases): GLORIA PRUITT, HARLAN, WENDELL, PETE, FRANK
1 D GLORIA [V.O.]: Eleven years running parolees. You learn that nobody ever comes in on time, and nobody ever leaves happy.
2 A ¶ GLORIA PRUITT, 50s, reading glasses on a chain, sits at a desk stacked with folders.
* 3 A A wall clock TICKS.
* 4 A A fluorescent tube BUZZES.
5 A ¶ HARLAN, 40s, orange tie, sits across from her holding a paper cup.
6 A Next to him, WENDELL, 40s, wears the same tie.
7 D GLORIA: You two are brothers?
8 D HARLAN: Twins.
9 D WENDELL: Fraternal.
10 D GLORIA [V.O.]: Both released the same morning. Both wearing the same tie. The state, in its wisdom, issued one tie per cell.
11 A ¶ PETE, the clerk, sticks his head in the door.
12 D PETE: Ms. Pruitt, your husband's on line two.
* 13 A ¶ The phone on her desk BUZZES.
14 A She picks it up.
15 D FRANK [V.O.] (on the phone): Did you eat? You didn't eat.
16 D GLORIA: I'm working, Frank.
17 A ¶ Harlan sips from the cup.
* 18 A It is empty.
19 A He keeps sipping anyway.

### SCENE s05127 | INT. GRAND MERIDIAN BALLROOM - WEDDING AFTERPARTY - NIGHT
Detected names (may be incomplete or contain aliases): DJ, WAITER, TEENAGERS, LEO MARCHETTI, LEON
* 1 A ¶ Warm lights.
2 A A DJ plays a slow song.
3 A A WAITER carries a tray of champagne past two TEENAGERS filming each other on their phones.
4 A ¶ LEO MARCHETTI, 30s, tux, bow tie crooked, stands near the cake table.
5 A Sharp eyes.
6 A Dead calm.
* 7 A ¶ In his ear, a tiny flesh-coloured bud.
8 D LEO (murmuring, lips barely moving): In position. Cake table, east side.
9 D LEON [V.O.] (in earpiece, from the van): Copy. Vault camera loops in ninety seconds. On my mark.
10 D LEO: Say again?
11 D LEON [V.O.]: Ninety. Eighty-nine.
* 12 A ¶ CLOSE ON Leo's wrist.
* 13 A A silver watch.
* 14 A Seconds sweeping.
15 A ¶ ANGLE ON the bride, laughing, her diamond choker catching the light.
16 A ¶ WE SEE a tall man in grey, her uncle, drift toward the exit.
17 D LEO: Subject moving. Door three.
18 D LEON [V.O.]: Hold position. Do not engage.
* 19 A ¶ A dog barks.
* 20 A A small terrier in a bow tie trots past the cake.
21 D LEO (under his breath): Nobody said there'd be a dog.
22 D LEON [V.O.]: Sixty. Fifty-nine.
23 A ¶ The waiter stops beside Leo.
24 A Offers a glass.
25 D WAITER: Champagne, sir?
26 D LEO (smiling): Please.
27 A ¶ He takes it.
28 A Drinks.
29 A Doesn't blink.
30 D LEON [V.O.]: Thirty. Twenty-nine.
* 31 A ¶ BACK TO SCENE
* 32 A ¶ The song swells.
33 A The bride lifts her hands to the crowd.
34 D LEON [V.O., CONT'D]: Now.
* 35 A ¶ The lights die.
* 36 A ¶ Darkness.
37 A Screams, then laughter, then a drumroll from the DJ.
38 A ¶ Leo is already gone.

### SCENE s05128 | INT. NIGHT BUS 47 - MOVING - NIGHT
Detected names (may be incomplete or contain aliases): ASH, BRI, TEO, DRIVER
* 1 A ¶ Rain streaks the windows.
* 2 A Sodium lights slide past.
* 3 A The engine drones.
4 A ¶ ASH, 17, headphones around their neck, sits in the back seat with their phone glowing in both hands.
5 A Across the aisle, BRI, 17, hoodie up, chews her thumbnail.
6 A Two rows ahead, TEO, 18, stares out at nothing.
7 A ¶ Up front, the DRIVER hums along to the radio.
8 A A sleeping TEENAGER in a school jacket leans against the window.
* 9 A ¶ Dead quiet, until Bri's phone BUZZES.
* 10 A ¶ INSERT - PHONE SCREEN
* 11 A ¶ "mom: where r u. answer me."
12 A ¶ BACK TO SCENE
13 D BRI (whispering): She's literally gonna kill me.
14 D ASH: So answer.
15 D BRI: And say what? "Hi Mom, I'm on a bus to a city I've never been to"?
16 D TEO (turning around): You guys could keep it down.
17 D ASH: Nobody asked you, Teo.
18 D TEO: I'm just saying, the driver.
19 D BRI: He can't hear us.
20 D ASH: He has a radio.
21 D TEO: He has ears.
22 D BRI: Ash, did you tell him about the video?
23 D ASH: No, I told no one. They told me.
24 D TEO: Who told you what?
25 D BRI: Stop, you two are being so loud.
26 D ASH: We're not loud, you're loud.
27 D TEO: You're both loud.
* 28 A ¶ The bus brakes hard.
29 A Everyone lurches.
30 A The sleeping teenager wakes, looks around, falls back asleep.
* 31 A ¶ This is the last time the three of them will be calm.
32 D ASH (softer): Hey. I don't think we're on the route anymore.
33 D BRI: What?
34 D ASH: Look. That's the river. We should be going north.
35 A ¶ Teo stands.
36 A The Driver's humming has stopped.
* 37 A ¶ The radio dies.
* 38 A Only the rain.
39 A ¶ The Driver's eyes find them in the rear-view mirror.
40 D DRIVER: Sit down, kids.

### SCENE s05130 | INT. MOVING VAN - CARGO BAY - DAY
Detected names (may be incomplete or contain aliases): SYNERGY OFFSITE, HOLLIS, PRIYA, TOMASZ, WENDELL, DISPATCH, RADIO, MARISOL
* 1 A ¶ Rain hammers the roof.
* 2 A A gray Tuesday smears past the rear windows.
* 3 A ¶ CLOSE ON a laminated sign taped to a wardrobe box: "SYNERGY OFFSITE - DO NOT SHAKE."
4 D HOLLIS (checking a clipboard, not looking up): Team, this relocation is a growth opportunity. Please buckle your milk crates.
5 D PRIYA (wedged between two filing cabinets, whispering): Hollis, we're sitting on the furniture of a company that fired us this morning.
* 6 A ¶ ANGLE ON the dashboard window behind the cab partition.
* 7 A The wipers beat like a slow pulse.
8 D TOMASZ (gripping the wheel, eyes on the mirror): I'm just the driver. Nobody told me the passengers were also the cargo.
* 9 A ¶ WE SEE a ceiling bulb swinging, throwing light across six tired faces.
10 D WENDELL (slowly peeling the tape off his own mouth): I signed the NDA. I did not sign the van.
11 D DISPATCH [V.O.] (over the radio, crackling): Unit Nine, confirm headcount. HR says there should be zero employees aboard.
* 12 A ¶ INSERT - THE RADIO, its red light pulsing.
13 D MARISOL (standing, knocking over a lamp): Zero? Hollis, what did you tell them about us?
14 D HOLLIS (clutching the clipboard to his chest): I told them we were assets.
15 A ¶ BACK TO SCENE
16 D PRIYA (shoving the cabinet, screaming): Assets get depreciated!
17 D TOMASZ (slamming the brakes, everything crashing forward): Everybody out! Now!

### SCENE s05132 | EXT. CAR PARK, SEAFRONT - FOOD TRUCK - DAY
Detected names (may be incomplete or contain aliases): PAULINE ABBOTT, JUNE, GRAHAM LOCKE
* 1 A ¶ A battered Citroën van with a hatch cut into its side, painted the colour of weak custard.
* 2 A "NAN'S CHIPS" is lettered above the hatch.
* 3 A Drizzle.
* 4 A Gulls.
* 5 A The sea has gone somewhere else for the afternoon.
6 A ¶ Inside, PAULINE ABBOTT, 60s, wiry, hair under a net, watches the fryer as if it owes her money.
7 A Her grandchild JUNE, 17, they/them, ink on their knuckles, wipes a counter that is already clean.
8 D PAULINE: You've got that look.
9 D JUNE: What look?
10 D PAULINE: The one your mother had before she told me about Leeds.
* 11 A ¶ The hatch RATTLES.
12 A A man in a good coat, GRAHAM LOCKE, 50s, leans in, politely lost.
13 D GRAHAM: Sorry. Is this Pauline's?
14 D PAULINE: Depends who's asking.
15 D GRAHAM: Council. Licensing. It's, well, it's about the pitch.
* 16 A ¶ The fryer HISSES.
* 17 A Nobody speaks.
* 18 A This is the afternoon Pauline will remember when she is asked what went wrong.
19 D JUNE (quietly): They've already sold it, Nan. Haven't they.
20 D GRAHAM: I wouldn't say sold.
21 D PAULINE: Lovely. Chips, Graham? On the house.
22 A ¶ Her smile is perfectly fixed.
23 A She drops the basket into the oil.
* 24 A It SPITS.
25 D GRAHAM: That's very kind, but I really shouldn't.
26 D PAULINE: Oh, I insist.
27 D JUNE: Nan.
28 D PAULINE: It's only chips, June.
* 29 A ¶ A pause.
* 30 A The gulls get on with it.
31 A Graham takes the paper cone and, after a moment, eats one.
32 D GRAHAM: Bit good, this.
33 D PAULINE: Forty years.

### SCENE s05133 | INT. RIDESHARE CAR - MOVING - NIGHT
Detected names (may be incomplete or contain aliases): DEV PATEL, HOODIE GUY, NADIA, LUKE, SLIDES
* 1 A ¶ 2:07 AM on the dashboard clock.
2 A DEV PATEL, 30s, a driver with four stars and a lanyard from his real job still around his neck, steers through empty wet streets while a HOODIE GUY in the back seat hugs a gym bag, and a woman in the passenger seat, NADIA, 20s, who ordered the ride and keeps checking her phone, says nothing, and the app chirps, and Dev smiles at the mirror like a man who has read a lot of tips about conversation.
3 D DEV: Big night? Or, early morning, I guess.
4 D HOODIE GUY: Just drive.
* 5 A ¶ Dev's phone, mounted on the dash, lights up with a Slack message ON SCREEN: "#ops-standup - Brenda: reminder, Q3 retro at 9.
* 6 A Cameras ON please."
7 D DEV (muttering): Cameras on. At nine. Sure.
* 8 A ¶ Nadia's phone rings.
9 A She answers on speaker, and a man's voice comes through, thin and furious.
10 D LUKE [V.O.]: Where are you? You said you'd have it by two.
11 D NADIA: We're coming. Stop calling.
12 D LUKE [V.O.]: Is that him in the car? Is that the guy?
13 A ¶ The Hoodie Guy lowers his hood.
14 A He is maybe nineteen, scared, and holding the bag as though it might go off, and the streetlights flick over all three of them in turn, orange and then dark, until Dev finally understands that this is not a ride.
15 D NADIA (to Hoodie Guy): Show him it, Marcus.
16 A ¶ Marcus unzips the bag.
* 17 A Stacks of cash, banded.
18 A Dev brakes hard, the car SLIDES, the phone clatters from its mount.
* 19 A ¶ This is the last time any of them will be strangers.
20 D DEV: I have a daughter. I have a performance review.
21 D LUKE [V.O.] (shouting, tinny): Somebody say something!

### SCENE s05134 | EXT. ABANDONED SKATE PARK - NIGHT
Detected names (may be incomplete or contain aliases): MAYA, SURVIVORS, JALEN
* 1 A ¶ Cracked concrete bowls.
* 2 A A chain-link fence sags.
* 3 A Sleet has started, thin and mean, and one flickering streetlight buzzes over the empty ramps.
4 A ¶ MAYA, 16, short, braids, a thrifted puffer jacket two sizes too big, stands at the lip of the biggest bowl.
* 5 A Her phone glows in her hand.
* 6 A Screen reads: "grp chat: SURVIVORS (14)".
* 7 A Only one other name is still green.
8 A ¶ A shape climbs over the fence.
9 A JALEN, 17, tall, a hoodie soaked black, a flashlight in his teeth.
10 A He drops it into his palm.
11 D JALEN (waving, shaky): Okay. So it's us. Everyone else left the chat.
12 D MAYA (not moving): You're taller than your pfp.
13 D JALEN (laughing, breath fogging): You're real. Like, actually real.
* 14 A ¶ Her phone BUZZES.
* 15 A A new message from someone neither of them knows: "dont go home."
16 D MAYA (holding up the screen): Did you send this?
17 D JALEN (reading, stepping back): No. Maya, no. I only got the group link like an hour ago.
* 18 A ¶ The streetlight DIES.
* 19 A Darkness takes the park, and the sleet sounds louder.
* 20 A Somewhere past the fence a car door SLAMS.
21 D MAYA (whispering, grabbing his sleeve): Turn the flashlight off.
22 D JALEN (clicking it off, voice cracking): I thought this would be, like, cute. A meetup.
23 D MAYA (sliding down behind the concrete): Yeah. Me too.
* 24 A ¶ The phone BUZZES again, brighter in the dark.
25 A She covers it with her palm.
26 D JALEN (crouching beside her): Do you trust me?
27 D MAYA (a beat, then barely): I trust you more than the chat.
* 28 A ¶ Footsteps crunch on gravel, slow, getting closer.

### SCENE s05135 | INT. LINCOLN HIGH SCHOOL - GIRLS' BATHROOM - DAY
Detected names (may be incomplete or contain aliases): NURSE, TESS OKAFOR, THE NURSE, KIRA, BEA, MARGARET HADLEY
* 1 A ¶ The third-period bell has long since stopped ringing, and the room has settled into that fluorescent hush particular to school plumbing, where every drip is audible and nothing smells quite clean.
2 A THE NURSE, a woman in her fifties with a lanyard she keeps touching as though to confirm she is who it says, kneels beside the farthest stall, speaking in the low, even voice she uses on frightened freshmen, while four girls pretend not to look and a fifth, TESS OKAFOR, sixteen, sits against the tiles with her knees up and her face the colour of paper, insisting for the third time that she just skipped breakfast.
* 3 A ¶ ON PHONE: "tess where r u" / "ms hadley is looking for u" / "u ok??"
4 D THE NURSE: That's fine, sweetheart. Skipping breakfast is a very normal thing. Can you let me see your hand?
5 A ¶ Tess hides it in her sleeve.
6 A In the mirror, the girl called KIRA, braces, bitten nails, studies the nurse's face, and it is Kira who notices the pale line of tape on the inside of Tess's elbow, a tape that is not from any school infirmary.
7 D KIRA (low): She's been doing the thing again, hasn't she.
8 D BEA: No way.
9 D KIRA: Bea, look at her arm.
10 D BEA: We said we weren't going to tell.
11 D KIRA: Tell them it's not her fault!
12 D BEA: Don't tell them anything!
13 A ¶ The nurse stops.
14 A She looks up at the girls, then down at the girl, and for a long moment the only sound is a faucet losing slowly to gravity.
15 D THE NURSE (softly): Which one of you is Ms. Hadley's daughter?
* 16 A ¶ Nobody answers.
17 A Then, from the doorway, a woman in a cardigan, MARGARET HADLEY, forty, stands with her car keys still in hand.
18 D MARGARET (very calm): That would be me. Hello, Tess.
19 D NURSE: Margaret, I think we should call an ambulance.
20 D TESS (finally, in a whisper): Mom, I'm sorry.

### SCENE s05136 | INT. SUNSET SOUND STUDIO - CONTROL ROOM - NIGHT
Detected names (may be incomplete or contain aliases): DAVID KESSLER, DAVID KESSEL, KIM, KIP, RHONDA
* 1 A ¶ Egg-crate foam, a mixing desk the size of a pool table.
* 2 A Beyond the glass, a vocal booth with a single microphone.
3 A ¶ DAVID KESSLER, 50s, producer, sits at the desk.
4 A Next to him is DAVID KESSEL, 20s, an intern who has been mistaken for him all week.
5 A KIM, singer, 30s, stands in the booth.
6 A Her brother KIP, 30s, leans on the wall of the control room eating a sandwich nobody offered him.
7 A Over the talkback, the engineer, RHONDA, 40s, speaks from somewhere in the building.
8 D RHONDA [V.O.]: Is everyone rolling or is it just me
9 D DAVID KESSLER (pressing the talkback, patient): Kim, honey, we are on take forty-one. I'm going to say this one time with love. The song is about heartbreak. You sound like you're ordering a coffee.
10 D KIM (through the glass): Maybe I am ordering a coffee. Maybe that's the heartbreak. Maybe heartbreak is mostly just standing in a line.
11 D KIP (mouth full): That's actually good. You should say that on the record.
12 D DAVID KESSEL (raising a hand): Sorry, hi, I think that's David's note to give. Mine. Not mine. His.
13 D DAVID KESSLER (not turning): Kessel, you can't be both.
14 D DAVID KESSEL (beat): I'm just saying I wrote the bridge.
15 D KIM (into the mic): He wrote the bridge, Kip wrote the chorus, and I wrote the part where I leave.
16 D RHONDA [V.O.] (dry): Great news the part where you leave is cheaper to mix
17 D KIP (putting the sandwich down, standing): Kim. Are you leaving us or the song?
18 D KIM (a long beat): I don't know. Roll the tape.
19 D DAVID KESSLER (quietly, to Kessel): Press record.
20 D DAVID KESSEL (pressing it, trembling): Rolling. Take forty-two.

### SCENE s05138 | INT. MINICAB - MOVING - 2 A.M.
Detected names (may be incomplete or contain aliases): BARRY QUILL, THE WOMAN, PHONE, QUARTET
* 1 A ¶ A tired Toyota Prius, smelling of pine air freshener and last Friday.
* 2 A Rain on the Westway.
3 A The driver, BARRY QUILL, 50s, cardigan, thermos in the cup holder, has the radio on low, playing something regrettable from 1987.
4 A ¶ In the back, THE WOMAN, 30s, immaculate in a camel coat that has never seen a bus, looks out of the window and says nothing.
* 5 A Beside her sits a violin case, which Barry noticed and chose not to mention.
* 6 A ¶ ON PHONE (her screen): "Two minutes out.
* 7 A Bring the case.
* 8 A Don't be clever."
9 D BARRY: Dreadful night for it.
10 D THE WOMAN: For what?
11 D BARRY: Whatever you're doing. Orchestra, is it?
12 D THE WOMAN: Something like that.
* 13 A ¶ Her phone shows a second message: "Gate B. Quartet's in position."
14 A Barry drives on, serene as a vicar.
15 D BARRY: I did a gig once. Trombone. Fell off the stage at a Rotary dinner. Terribly embarrassing.
16 D THE WOMAN (a very small smile): I'm sure you recovered.
* 17 A ¶ They turn into the gates of the Hatton Auction House, shuttered and dark.
18 A Four figures in black coats wait beneath the awning: THE QUARTET, holding what are almost certainly instruments.
19 D THE QUARTET (in unison, softly): Evening, Mrs Vance.
20 D THE WOMAN (to Barry, handing over a fifty): Keep it, Mr Quill.
21 D BARRY (frowning): I don't recall telling you my surname.
22 A ¶ She opens the violin case.
* 23 A It is empty, lined in velvet, exactly the size of a small painting.
24 D BARRY [CONT'D]: Ah.
25 D THE WOMAN (opening the door): Wait here, would you? There's a good chap.
26 A ¶ She leaves.
27 A Barry looks at the thermos, at the rain, at the radio.
28 A Then, quite calmly, he turns the engine off.
