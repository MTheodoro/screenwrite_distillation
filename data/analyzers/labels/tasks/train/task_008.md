You are an annotator labeling screenplay scenes for a dataset.

## What to label

Each scene is given as numbered units. `A` = one sentence of action/description text (¶ marks the
first sentence of a paragraph). `D` = one dialogue block, shown as `NAME [extensions] (parenthetical): text`.

Produce one JSON object per scene:

{
  "scene_id": "<id>",
  "cast": {"<every character name variant used in the scene>": "<canonical name>", ...},
  "beats": [<unit numbers that START a beat, ascending; the first non-heading unit always starts one>],
  "lines": {
    "<n>": {"t": "A"|"D"|"S", "who": ["<canonical>", ...], "emo": {"<canonical>": ["<emotion>", <0-1>]}, "c": <0-1>},   // for A units
    "<n>": {"to": ["<canonical>"|"ALL"|"SELF"|"NONE", ...], "emo": ["<emotion>", <0-1>], "c": <0-1>}                     // for D units
  },
  "tension": [<one score 0-100 per beat, same order as "beats">]
}

Rules:
- cast: map EVERY name variant (cue names, CAPS introductions, aliases like STRANGER -> INGRID once named,
  DET. RUIZ / RUIZ) to one canonical name per real person. Unnamed extras get a short canonical (e.g. "GUARD").
- Every A and D unit must appear in "lines" (skip the heading and transitions).
- A units, field t: "A" = a character does something (acts, moves, speaks-without-cue, reacts);
  "D" = a character is described (appearance, introduction, state) ; "S" = no character: setting, objects, sound,
  atmosphere. who = the character(s) performing the action or being described, as canonical names; empty for "S".
  Use several names only when they genuinely act jointly ("They fight", "Both freeze"). Resolve every pronoun.
  If the actor is a crowd or someone not in the cast, use "OTHER".
- D units: to = who the line is addressed to. "ALL" = the group, "SELF" = muttered/thinking aloud,
  "NONE" = no listener (e.g. pure voice-over narration). A phone/radio listener counts as a character.
- emo: emotion actually conveyed by the line's text, subtext, parenthetical or behaviour - not guessed from the
  plot. One of: neutral, joy, sadness, anger, fear, surprise, disgust, affection, with intensity 0-1
  (neutral -> 0-0.2). For A units give emo only for characters whose emotion the sentence shows; otherwise {}.
- c = your confidence that who/to is right (0-1). Be honest: ambiguous pronouns deserve low confidence.
- beats: a beat is the smallest unit in which something dramatically changes - an action, a reaction, a shift
  in tactic, a reveal, an entrance. A beat may be dialogue only, action only, or mixed, and may split an action
  paragraph. Typical beats are 1-8 units long.
- tension: dramatic tension a reader feels in that beat - stakes, conflict, threat, urgency, suspense. Loud or
  violent is not automatically tense; a quiet threat can be very tense. Use absolute anchors so scores compare
  across scenes: 0-15 calm/mundane, 15-35 mild friction or unease, 35-60 clear conflict or suspense,
  60-80 high stakes, open confrontation or danger, 80-100 peak life-or-death / climactic moment.


Write each scene's JSON (valid JSON, no comments, no trailing commas) to the given path with the Write tool. Do not write anything else. Reply only with "done N".

## Scenes

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05096_0.json
### SCENE s05096_0 | INT. HOLLOWAY FUNERAL HOME - RECEPTION ROOM - DAY
Detected names (may be incomplete or contain aliases): VIC, NORA, TEENAGERS, MAN
1 A ¶ Folding tables.
2 A Casserole dishes.
3 A Black dresses.
4 A A waiter circles with a tray of deviled eggs.
5 A ¶ Nora Vance, 50s, widow, stiff smile, stands by the coffee urn.
6 A Her late husband's brother, Vic, 60s, hovers too close.
7 D VIC: Nora. We need to talk about the will.
8 D NORA: Not today, Vic.
9 D VIC: It's today or it's a lawyer.
10 A ¶ Two TEENAGERS by the buffet snicker at their phones.
11 A A beagle noses under a table, steals an egg.
12 A ¶ Nora's phone RINGS.
13 A She checks it.
14 A UNKNOWN NUMBER.
15 A She answers.
16 D MAN [V.O.] (distorted, over phone): Don't let Vic near the study.
17 A ¶ Nora's eyes snap to Vic.
18 A He is already walking toward the hallway.
19 D NORA (low): Vic!
20 A ¶ THE MOURNERS turn as one.
21 A The beagle barks.
22 A Vic breaks into a run.
23 T SMASH CUT TO:

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05096_1.json
### SCENE s05096_1 | INT. HOLLOWAY FUNERAL HOME - HALLWAY - CONTINUOUS
Detected names (may be incomplete or contain aliases): 
1 A ¶ A door slams.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05097_0.json
### SCENE s05097_0 | INT. COUNTY PAROLE OFFICE - WAITING AREA - DAY
Detected names (may be incomplete or contain aliases): CRUZ
1 A ¶ Fluorescent hum.
2 A A ticket machine.
3 A Plastic chairs bolted to the floor.
4 A Somewhere a door buzzes and does not open.
5 A ¶ Darnell Whitfield, 40s, a gray jacket two sizes too big, sits with his hands flat on his knees.
6 A Eleven years inside.
7 A He studies the floor tiles like they might shift.
8 A ¶ Officer Imelda Cruz, 30s, parole officer, appears at the inner door with a folder.
9 A Tired eyes.
10 A Kind ones.
11 D CRUZ: Mr. Whitfield. Come on back.
12 A ¶ He rises.
13 A His knees pop.
14 A He follows.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05097_1.json
### SCENE s05097_1 | INT. COUNTY PAROLE OFFICE - CRUZ'S OFFICE - CONTINUOUS
Detected names (may be incomplete or contain aliases): CRUZ, DARNELL, GIDEON, MARISOL
1 A ¶ A cramped room.
2 A A dying ficus.
3 A A window onto a brick wall.
4 A Cruz sits.
5 A Darnell does not, until she nods.
6 A ¶ Behind the glass partition, a second desk.
7 A Gideon Pratt, 50s, supervisor, pretends to type.
8 A He is not typing.
9 D CRUZ: How's the halfway house treating you, Darnell?
10 D DARNELL: Quiet. Too quiet, some nights.
11 D CRUZ: That's normal. Sleep comes.
12 A ¶ A sound in the ceiling.
13 A A tick.
14 A A pause.
15 A Another tick.
16 A Darnell's eyes go up.
17 A Cruz's don't.
18 D DARNELL: You hear that?
19 D CRUZ: Old building. Pipes.
20 A ¶ The ticking again.
21 A Slower.
22 A Closer to the vent.
23 D GIDEON (through the glass, flat): Whitfield. Employment verification.
24 A ¶ Darnell hands over a crumpled slip.
25 A Gideon reads it without looking up.
26 D GIDEON [CONT'D]: Dock work. Nights. Forty hours.
27 D DARNELL: Yes sir.
28 D GIDEON: Don't "sir" me. Save it for the judge.
29 A ¶ Cruz shoots Gideon a look through the glass.
30 A He shrugs and goes back to not typing.
31 A ¶ The door opens.
32 A Marisol Teague, 20s, intern, leans in with a stack of forms.
33 D MARISOL: Sorry. Officer Cruz? The drug screen, it's in. He's clean.
34 D CRUZ: Thank you, Mari.
35 A ¶ Marisol lingers, eyeing Darnell with open curiosity.
36 A Cruz clears her throat.
37 A Marisol backs out.
38 A ¶ The tick in the ceiling stops.
39 A The silence that replaces it is worse.
40 D DARNELL (quiet): Ms. Cruz. Eleven years, I counted ceiling tiles. Four hundred and twelve. Same as this room.
41 D CRUZ (gently): You don't have to count anymore.
42 D DARNELL: Habit.
43 A ¶ This is the last time he will sit in a room where someone else holds the door.
44 D CRUZ: Next appointment's the fourteenth. Same time. Don't be late, Darnell.
45 D DARNELL: Wouldn't dream of it.
46 A ¶ He stands.
47 A Shakes her hand.
48 A His grip lingers a second too long.
49 D DARNELL [CONT'D]: Thank you. For not treating me like a file.
50 A ¶ Cruz smiles, small and real.
51 D CRUZ: You're a person. Go be one.
52 A ¶ A buzz.
53 A The door opens.
54 A Light from the hallway, harsh and white.
55 A He walks into it.
56 A ¶ Behind him, in the vent, one more tick.
57 A Nobody turns.
58 D GIDEON (to the empty room): Damn pipes.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05098.json
### SCENE s05098 | INT. QUICKROUTE DELIVERY WAREHOUSE - NIGHT
Detected names (may be incomplete or contain aliases): TEO, ALEX, KEIKO
1 A ¶ Cavernous.
2 A Steel shelving rises into dark.
3 A Pallets stacked like gravestones.
4 A A single forklift beeps somewhere unseen.
5 A ¶ ANGLE ON a loading bay: Teo Marchetti, 40s, broad shoulders, a scar through one eyebrow, scans a package.
6 A Beside him, Alex Rowan, 17, they/them, oversized hi-vis vest, drags a box twice their size.
7 D TEO: Easy. Lift with your legs.
8 D ALEX: I am lifting with my legs, Dad.
9 A ¶ Teo hides a smile.
10 A ¶ A voice crackles over the PA.
11 D KEIKO [V.O.]: Teo, we've got a rush on bay six. Insurance audit tomorrow, so don't lose anything.
12 A ¶ Keiko Tanaka, 50s, floor manager, appears at the end of the aisle with a clipboard, gray hair under a hairnet.
13 A ¶ INSERT - THE PACKAGE LABEL
14 A ¶ "HANDLE WITH CARE.
15 A FRAGILE.
16 A THIS SIDE UP."
17 A ¶ Alex's box slips.
18 A It hits the concrete.
19 A Something inside cracks.
20 A ¶ Everyone freezes.
21 D TEO (low): Alex.
22 D ALEX (small): It was heavy.
23 A ¶ WE SEE Keiko's face harden, then soften.
24 D KEIKO (to Teo): Take the night off. Both of you.
25 A ¶ BACK TO SCENE
26 A ¶ Teo kneels, lifts the box, shakes it gently.
27 A A rattle.
28 A A sigh.
29 D TEO (to Alex, soft): Hey. Nobody's fired. It's a lamp. We'll buy the lamp.
30 A ¶ Alex wipes their eyes with a glove.
31 A Teo ruffles their hair.
32 A The forklift beeps on.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05099_0.json
### SCENE s05099_0 | INT. NEW DAWN FERTILITY CENTER - LOBBY - MORNING
Detected names (may be incomplete or contain aliases): KARINA, KARI, PHONE, DEV, MIRA, DR. FONTAINE
1 A ¶ SERIES OF SHOTS:
2 A ¶ -- A fish tank, bubbling.
3 A Three clownfish circle a plastic castle.
4 A ¶ -- A clock on the wall: 8:02.
5 A ¶ -- Hands on a clipboard.
6 A Rings.
7 A Nervous pens.
8 A ¶ Karina Bell, 30s, stands at the reception desk in scrubs, and beside her, Kari Beal, 20s, a trainee, also in scrubs.
9 A They share a look.
10 A The name tags are a coin flip.
11 D KARINA: No, I'm Karina. You're Kari.
12 D KARI: That's what I said.
13 D KARINA: You said Karina.
14 D KARI: It's eight in the morning.
15 A ¶ Dev Anand, 30s, and his wife Mira, 30s, enter holding hands too tightly.
16 A ¶ ON PHONE (INSERT): Dev's screen.
17 A A text from his mother: "DID YOU GO YET?
18 A WE ARE PRAYING."
19 D DEV (pocketing it): She's praying.
20 D MIRA: She's always praying.
21 D DEV: Her prayers are very specific.
22 A ¶ Mira laughs.
23 A Almost.
24 A ¶ MONTAGE - THE WAITING ROOM
25 A ¶ -- 8:20.
26 A Dev reads a magazine upside down.
27 A ¶ -- 8:44.
28 A Mira scrolls her phone.
29 A ON PHONE: "How to not panic during IVF consult."
30 A ¶ -- 9:15.
31 A The clownfish.
32 A Still circling.
33 A ¶ -- 9:40.
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
49 A The door closes.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05099_1.json
### SCENE s05099_1 | INT. NEW DAWN FERTILITY CENTER - HALLWAY - LATER
Detected names (may be incomplete or contain aliases): DEV, MIRA, NERVOUS COURIER, KARINA, KARI, DR. FONTAINE
1 A ¶ SUPER: "THREE WEEKS LATER."
2 A ¶ Dev and Mira stand outside the exam room.
3 A In Mira's hand, a small white stick.
4 A She turns it over.
5 A ¶ ON PHONE: Mira's text to her sister: "ITS POSITIVE!!!!
6 A DONT TELL MA"
7 A ¶ Dev reads it over her shoulder.
8 D DEV: You texted your sister before me?
9 D MIRA: You were in the bathroom.
10 D DEV: I'm always in the bathroom!
11 A ¶ Mira bursts out laughing, tears coming now.
12 A He pulls her in.
13 A ¶ Suddenly the door at the end of the hall bangs open.
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
25 A Charts everywhere.
26 D KARINA: Kari!
27 D KARI: Karina!
28 A ¶ They both reach for the cooler.
29 A Dev holds it above his head.
30 A Dr. Fontaine steps out of the exam room, sees the chaos, folds her arms.
31 D DR. FONTAINE: Is this a delivery, or a rugby match?
32 A ¶ Everyone freezes.
33 A A beat.
34 D MIRA (softly): Both.
35 A ¶ SERIES OF SHOTS:
36 A ¶ -- The cooler, opened.
37 A Inside: a small vase of flowers and a card.
38 A ¶ -- ON CARD: "From Ma.
39 A We are praying.
40 A P.S. Congratulations."
41 A ¶ -- Dev and Mira stare.
42 A Then look at each other.
43 A Then at the ceiling.
44 A ¶ -- Karina and Kari, side by side, wiping their eyes.
45 D DEV (soft): How did she know?
46 D MIRA (wiping her eyes): My sister told her.
47 D DEV: Of course she did.
48 A ¶ Mira leans her head on his shoulder.
49 A The clownfish circle on.
50 T FADE OUT.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05100.json
### SCENE s05100 | INT. SKYLINE ROOFTOP BAR - NIGHT
Detected names (may be incomplete or contain aliases): RAYMOND OKAFOR, LENA VOSS, NELL, PRIYA, MARCUS WEBB
1 A ¶ String lights.
2 A Wind.
3 A Det. RAYMOND OKAFOR, 40s, wearing his shield on his belt under a good jacket, sits at the end of the bar while Dr. LENA VOSS, 30s, still in scrubs under her coat, pretends to read the cocktail list and TOMASZ the bartender polishes the same glass he polished five minutes ago and a waitress, NELL, drifts past with a tray of empty flutes.
4 D OKAFOR: You said you'd be off at eight.
5 D LENA: Trauma doesn't read the schedule Ray. Two GSWs and a fall from a scaffold. I'm here aren't I.
6 D OKAFOR: You are.
7 D LENA: Say something nice.
8 D OKAFOR: Your chart notes are terrible. I read one once for a case. Sixteen abbreviations in a row.
9 D LENA: That's the nicest thing you've ever said to me.
10 A ¶ Her phone buzzes on the bar.
11 A Lena checks it.
12 A PRIYA's voice, small and tinny, fills the gap.
13 D PRIYA [V.O.]: Dr. Voss, it's Priya in the ED, bed six just coded again, Dr. Anand is asking for you.
14 D LENA (into phone): Tell him I'm ten minutes away. No. Tell him I'm coming now.
15 A ¶ Silence.
16 A Okafor looks at the skyline.
17 A Nothing.
18 D OKAFOR: Go. Go save him.
19 D LENA: Ray
20 D OKAFOR: I'll be here. Or I wont. Whichever.
21 A ¶ Lena stands.
22 A Her phone.
23 A Dead.
24 A ¶ A door bangs and SGT. MARCUS WEBB, 50s, in a rain-dark windbreaker, crosses the roof straight at Okafor with an evidence bag held up like a fish.
25 D WEBB: Ray. The ring from the Delacroix scene. It matches the inscription. It was never hers, it was yours.
26 A ¶ Lena stops at the elevator.
27 A Tomasz stops polishing.
28 A Music.
29 A Somebody laughs.
30 D OKAFOR (quietly): Marcus, not now.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05101.json
### SCENE s05101 | INT. PAROLE OFFICE - DAY
Detected names (may be incomplete or contain aliases): KIM, KIP, JEN
1 A ¶ ON CAMERA: handheld, slightly too close, a fluorescent hum.
2 A A wall of grey filing cabinets.
3 A THE WOMAN, 30s, sits across from a desk, hands flat on her knees, avoiding the lens.
4 A KIM, 50s, parole officer, reads a folder.
5 A Beside her a plastic nameplate reads KIP DAVIS, PO II.
6 A Kim is not Kip.
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
24 A ¶ Silence.
25 A Kim closes the folder.
26 A The camera shakes, someone has stopped breathing behind it.
27 D KIM: Sign here. And here. I never saw the second page.
28 D KIP: Neither did the camera.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05104.json
### SCENE s05104 | INT. RIDESHARE CAR - NIGHT
Detected names (may be incomplete or contain aliases): JAMAL, COLE, RUBEN, BIANCA, SHAY, MIKA
1 D JAMAL [V.O.]: Two a.m. Wet road. Empty streets. Nothing on the radio but static.
2 D JAMAL (eyes in the mirror, thumb tapping the wheel): Five stars is all I ask, folks. Everyone buckled?
3 D COLE (slumped against the window, fogging the glass): Yeah, Jamal. Drive.
4 D JAMAL [V.O.]: Four kids from a party. Three of them quiet. One of them loud. Always one.
5 D RUBEN (leaning forward between the seats, grinning): Cole, tell him what you did. Tell Jamal what you did at Tasha's.
6 D COLE (shoving Ruben's face away): Shut up Ruben.
7 D BIANCA (arms folded, not looking at either boy): He told her he loved her. Then he threw up in her mom's plant.
8 D SHAY (whispering, holding a phone dark in her lap): Bianca. Stop.
9 D JAMAL [V.O.]: Red light. Rain. Nobody talks. The wipers keep time.
10 D MIKA (from the front passenger seat, finally, softly): Jamal, can you drop me first? Please. He said he'd call and he's not going to, and I don't want him to see me cry.
11 D JAMAL (gently, to Mika): Sure thing. Anywhere you like.
12 D COLE (to Shay, low): He means me, right?
13 D SHAY (not unkindly): He means the other he, Cole.
