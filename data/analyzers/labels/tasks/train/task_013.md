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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05158.json
### SCENE s05158 | EXT. BORDER CHECKPOINT - DAWN
Detected names (may be incomplete or contain aliases): OKONKWO, GRIEVE, HOBBS, VANE, LENA
1 A ¶ Mist on a concrete lane.
2 A A barrier arm, striped red and white.
3 A A kiosk with one lit window.
4 A ¶ Grieve, 50s, border officer, tired, holds a clipboard against the cold.
5 A Opposite him stands Okonkwo, 40s, a solicitor in a sodden trenchcoat, a briefcase at her feet.
6 A Behind her in the car, Tomasz, 30s, and a small girl, Lena, 6, asleep on his shoulder.
7 A ¶ INSERT - THE PASSPORT.
8 A The photograph does not match the face in the car.
9 A ¶ Silence.
10 A ¶ Hobbs, 30s, a sergeant, appears in the kiosk window with a phone to his ear.
11 D OKONKWO: I've been very patient, Officer Grieve. I've been patient since four this morning. I would like to remind you that my client has a hearing at ten in Rotterdam, that the girl has a right to be with her father, and that the paperwork you are holding is, quite frankly, immaculate.
12 D GRIEVE: It is immaculate. That's what bothers me.
13 D OKONKWO: Is that a legal objection?
14 D GRIEVE: It's an observation.
15 D OKONKWO: Then you'll understand if I write it down.
16 D GRIEVE: Please do. Spell it with a "k."
17 D OKONKWO (beat): That's not funny.
18 D GRIEVE: It wasn't meant to be.
19 D HOBBS (on the phone, from the kiosk): Sir, I've got the Home Office on the line. They say the order's been revoked.
20 A ¶ Grieve doesn't turn.
21 D GRIEVE: Revoked when?
22 D VANE [V.O.] (on the phone, tinny, crisp): Eleven fifty-two last night, Mr Grieve. Mr Vane, Asylum Casework. Your man isn't who he says he is, and neither, I'm afraid, is she.
23 A ¶ CLOSE ON Okonkwo.
24 A Her face doesn't move.
25 A Her hand goes to the briefcase.
26 D OKONKWO (very quietly): I think we should all take a breath.
27 A ¶ The girl wakes.
28 A Looks at the officers.
29 A Looks at Okonkwo.
30 D LENA: Mummy?
31 A ¶ Grieve looks at Okonkwo.
32 A Then he looks at the barrier arm, and he drops the clipboard.
33 A ¶ BACK TO SCENE.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05159_0.json
### SCENE s05159_0 | INT. HOPE VALLEY FERTILITY CLINIC - WAITING ROOM - MORNING
Detected names (may be incomplete or contain aliases): BETH, CAL, INTERCOM
1 A ¶ We see a bright, quiet waiting room.
2 A Pale green walls.
3 A A fish tank bubbling in the corner.
4 A A rack of old magazines no one has touched.
5 A Sunlight comes through the blinds in thin stripes.
6 A ¶ CLOSE ON a wall clock.
7 A It reads 9:02.
8 A ¶ BETH, 30s, nervous, in a yellow cardigan, sits on the edge of a chair, twisting a tissue.
9 A Next to her is CAL, 30s, tall, dressed too neatly, holding a folder of forms.
10 D CAL (smiling too hard, patting her knee): It's going to be great.
11 D BETH (whispering): You said that about the camping trip.
12 D CAL (a beat): Okay, that was a different kind of great.
13 A ¶ The fish tank bubbles.
14 A A little orange fish swims in a circle.
15 A Beth watches it as if it knows something.
16 D INTERCOM [V.O.]: Beth and Cal Whitaker, Dr. Okafor will see you now. Room three, please.
17 D BETH (standing, dropping the tissue): Oh gosh. That's us. That's definitely us.
18 D CAL (picking it up, handing it back): It's us. Breathe.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05159_1.json
### SCENE s05159_1 | INT. DR. OKAFOR'S OFFICE - CONTINUOUS
Detected names (may be incomplete or contain aliases): OKAFOR, BETH, CAL, ^CAL, TINA
1 A ¶ A warm room.
2 A Diplomas on the wall.
3 A A box of tissues, strategically placed.
4 A A model of a uterus on the desk that Cal keeps looking at, then looking away from.
5 A ¶ DR. OKAFOR, 50s, kind eyes, silver glasses, stands to greet them.
6 D DR. OKAFOR (shaking Beth's hand, then Cal's): Please, sit. I'm Dr. Okafor. I've read your file. How are you feeling?
7 D BETH (sitting, folding her hands): Fine! Good. Super.
8 D CAL (sitting, crossing his legs, then uncrossing): Fantastic. Never better.
9 D DR. OKAFOR (gently, with a small smile): You're both very brave to be here.
10 D BETH (laughing, nervous): We are not. We are very afraid.
11 D CAL (nodding hard): We're terrified.
12 A ¶ Both speak at once.
13 D BETH: It's been three years.
14 D ^CAL: It's been three years.
15 A ¶ They look at each other.
16 A The room goes quiet for a second.
17 D DR. OKAFOR (taking off her glasses): That is a long time to hope.
18 A ¶ Beth's face crumples a little.
19 A Cal takes her hand, and she lets him.
20 D BETH (wiping her eye): Sorry. I told myself I wouldn't do this.
21 D DR. OKAFOR (sliding the tissue box across): Everyone does. It's one of the reasons I keep a big box.
22 A ¶ The door opens a crack.
23 A TINA, 20s, a nurse in cartoon scrubs, leans in.
24 D TINA (whispering, apologetic): Doctor, I'm so sorry. The lab is on the phone.
25 D DR. OKAFOR (to the couple): Excuse me one moment.
26 A ¶ She picks up the desk phone.
27 A We hear a faint voice through it.
28 D TINA [V.O.] (through the phone, tinny): It's about the samples from last week, Doctor. They've come back.
29 D DR. OKAFOR (listening, her face changing; beat): Thank you, Tina. I'll tell them myself.
30 A ¶ She puts the phone down very slowly.
31 A Beth grips Cal's hand so hard his fingers go white.
32 D BETH (very small): Is it bad?
33 D DR. OKAFOR (smiling, for the first time all morning): Beth. Cal. I think you should both take a deep breath.
34 A ¶ Outside, the fish swims once around the tank and stops.
35 A The light in the blinds turns gold.
36 D CAL (breathless): Is that a yes?
37 D DR. OKAFOR (nodding): It's a yes.
38 A ¶ Beth bursts into tears.
39 A Cal laughs, jumps up, knocks over the model on the desk, and catches it in the air.
40 D CAL [CONT'D] (holding it up like a trophy): Sorry! I got it! I got it!
41 D BETH (laughing through tears): Cal, sit DOWN.
42 A ¶ He sits.
43 A They hold each other.
44 A Dr. Okafor looks away to give them privacy and quietly dabs her own eyes.
45 A ¶ Sunlight.
46 A Quiet.
47 A Somewhere, a baby cries in another room and everyone smiles.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05160.json
### SCENE s05160 | INT. NORTHSIDE SOUND - LIVE ROOM - NIGHT
Detected names (may be incomplete or contain aliases): JUNIPER, OSEI, MARGUERITE
1 A ¶ ON CAMERA: handheld, shaky, a red REC dot in the corner.
2 A The mic stand fills the frame, then swings toward JUNIPER, 19, headphones around their neck, staring at a lyric sheet.
3 D JUNIPER (to camera): This is take nineteen. They said twelve was fine. I said twelve was fine.
4 D OSEI [O.S.]: Twelve was not fine.
5 A ¶ The camera whips left.
6 A OSEI, 20s, engineer, hunched at the glass of the control room.
7 A A studio dog sleeps under his chair.
8 A A pizza guy hovers at the door with two boxes, unsure whether to knock.
9 D OSEI [CONT'D]: You rushed the bridge.
10 D JUNIPER: I didn't rush -- they're the one who
11 D OSEI: -- you came in early on "stay" --
12 D JUNIPER: -- because the click track is wrong, Osei, it's wrong, I told you --
13 A ¶ A phone BUZZES on the console.
14 A Osei thumbs it.
15 A Speaker.
16 D MARGUERITE [V.O.] (tinny, over the phone): Hi, babe, is it done? The label guy is asking.
17 D JUNIPER: He's asking?
18 D OSEI: Marguerite, not now --
19 D MARGUERITE [V.O.]: -- he wants the single Friday, Juniper, they have a slot, and you promised --
20 D JUNIPER: I never promised! You promised! You said I'd get to say when it's done!
21 A ¶ Juniper rips the headphones off and hurls them.
22 A They CRACK against the glass.
23 A The dog bolts.
24 A The pizza guy backs out.
25 A The camera drops, tilts, catches the ceiling tiles, and cuts to black.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05161.json
### SCENE s05161 | INT. SWIFTLINE DELIVERY WAREHOUSE - MORNING
Detected names (may be incomplete or contain aliases): BARRY, NADINE, ROBIN, DO NOT
1 A ¶ We see a huge warehouse with many shelves and conveyor belts.
2 A Its early morning and the lights are still turning on one by one.
3 A BARRY, 40s, a shift supervisor who thinks he is very important, walks in carrying a coffee and a clipboard.
4 A ¶ CLOSE ON Barry's name tag, which says "BARRY - SUPERVISOR" in big letters.
5 D BARRY: Good morning team! Big day today!
6 A ¶ Nobody answers.
7 A We see NADINE, 30s, tired, sitting on a pallet jack eating a granola bar, and ROBIN, 20s, who uses they/them pronouns, scrolling on their phone near the sorting belt.
8 D NADINE: Its 6 AM Barry.
9 D BARRY: And whats that mean? It means the early bird gets the worm!
10 D ROBIN (muttering to self): I dont even like worms.
11 D BARRY: What was that Robin?
12 D ROBIN: Nothing. Good morning.
13 A ¶ Barry nods happily and puts his coffee down on a stack of boxes marked FRAGILE, then walks to the control panel and presses a green button and the belt starts to move slowly, and Nadine stands up and stretches while Robin puts their phone in their pocket and walks to the end of the belt and picks up the first package, and Barry checks his clipboard and looks very pleased with himself while a forklift beeps somewhere far away.
14 D BARRY (to everyone): Okay everybody listen up. Today is a normal day. Nothing special. Just normal packages, normal routes, normal everything.
15 D NADINE: You said normal three times.
16 D BARRY: Because its normal!
17 A ¶ Nadine looks at Robin.
18 A Robin looks at Nadine.
19 A They both look at Barry.
20 D ROBIN (quietly, to Nadine): He's lying about something.
21 D NADINE (quietly): Obviously.
22 A ¶ We see the belt carry a small brown box down the line.
23 A It is the only box that is not scanned by the machine.
24 A CLOSE ON the box.
25 A It has a red sticker that says "DO NOT OPEN - PRIVATE".
26 D NADINE [CONT'D] (reading the label): Barry what is this?
27 D BARRY (too fast): Its nothing. Just a regular box. Put it back.
28 D ROBIN: It doesnt have a barcode.
29 D BARRY: Some boxes dont have barcodes Robin that is a known thing.
30 A ¶ Robin lifts the box off the belt.
31 A It is light.
32 A Something inside RATTLES softly.
33 A Barry's face goes white and he drops his clipboard, which CLATTERS on the concrete floor.
34 D NADINE (to herself): Oh no. He's sweating.
35 D BARRY: Please put it down. Please. Both of you.
36 D ROBIN (to the room): Is it a bomb?
37 D BARRY: Its not a bomb!
38 D NADINE: Then open it.
39 D BARRY: I cant let you open it!
40 A ¶ Nadine takes the box from Robin and in one move she tears the red sticker and rips the tape.
41 A Robin leans in, Barry covers his eyes with both hands, and a forklift driver in the distance honks twice for no reason.
42 A ¶ CLOSE ON the open box.
43 A Inside are forty-two tiny bottles of hotel shampoo, six stolen name tags from other supervisors, and a laminated sign that says "WORLDS BEST BOSS".
44 A ¶ Silence.
45 D NADINE: These are the name tags from Dayton.
46 D ROBIN: Barry. Did you make yourself an award?
47 D BARRY (small voice): It was going to be a surprise.
48 D NADINE: For who?
49 D BARRY: For me. At the Friday meeting. I was going to have you all give it to me.
50 D ROBIN (to Nadine): I want to be mad but I'm mostly impressed.
51 D NADINE (to the group of the whole warehouse, shouting): Hey everybody! Barry made himself an award!
52 A ¶ From far away in the building we hear a slow, growing round of applause, and a lone forklift honks.
53 A Barry sits down on the pallet jack and puts his face in his hands.
54 D BARRY (muffled): Can I at least keep the shampoo.
55 A ¶ Nadine tosses him one small bottle.
56 A Robin sets the laminated sign on top of Barry's head like a crown.
57 D ROBIN: Congratulations boss.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05162.json
### SCENE s05162 | EXT. SKYLINE ROOFTOP BAR - NIGHT
Detected names (may be incomplete or contain aliases): HALE, BRANDT
1 A ¶ Detective Annika Brandt, 40s, sits at the far end of the bar with a club soda and a view of the elevator.
2 A She keeps her jacket on.
3 A Under it, a wire taped below the ribs.
4 A Her phone sits face up beside the glass.
5 A ¶ The phone BUZZES.
6 A She lets it ring twice, then answers and puts it to her ear.
7 D HALE [V.O.]: Tell me you're up there.
8 D BRANDT: Corner. By the heater. Where are you?
9 D HALE [V.O.]: Parking structure. Level three. I'm giving it five minutes.
10 D BRANDT: Five minutes is fine.
11 D HALE [V.O.]: You come alone?
12 D BRANDT: You asked me to.
13 A ¶ The line goes quiet.
14 A Wind snaps a string of lights overhead.
15 A She watches the elevator numbers climb on the display, 2, 3, 4, and her thumb goes still on the glass.
16 D BRANDT [CONT'D]: Hale. Level three. You said that already?
17 D HALE [V.O.]: Yeah. Why?
18 D BRANDT: No reason. Come on up.
19 A ¶ She ends the call.
20 A The phone lights.
21 A ¶ ON PHONE: unknown number -- "ur not alone up there"
22 A ¶ She reads it once.
23 A She does not look around.
24 A She sets the phone face down and slides a hand into her jacket, thumbs the transmitter.
25 D BRANDT [CONT'D] (low, to the wire): Unit two, confirm the garage camera. Level three. Is anyone there?
26 A ¶ A beat.
27 A Nothing in the earpiece.
28 A Static, then a CLICK.
29 A ¶ The elevator DINGS.
30 A Tomasz Hale, 50s, rumpled suit, steps out and scans the roof.
31 A He sees her, hesitates, then crosses to the stool beside hers.
32 A He sits too carefully, as though the cushion might be wired.
33 D HALE: You look like a cop.
34 D BRANDT: You look like a man who's late.
35 D HALE: I wasn't in the garage.
36 A ¶ She turns her head.
37 D BRANDT: Say that again.
38 D HALE: I took the stairs. I was on the stairs the whole time. The call, it wasn't me calling.
39 A ¶ Her phone BUZZES against the bar.
40 A She doesn't touch it.
41 A He nods at it.
42 D HALE [CONT'D]: That's him. He's got my phone. He's got my kid's school schedule too, Detective, that was the part I couldn't, I had to come.
43 D BRANDT: Who has your phone?
44 D HALE: The man at the table behind you. Blue shirt. Don't turn around.
45 A ¶ The ice in her glass shifts.
46 A Somewhere behind her a chair scrapes.
47 A ¶ ON PHONE: unknown number -- "good. now both of u stand up"
48 D BRANDT (barely moving): How long has he been sitting there?
49 D HALE: Since before I got here. He walked me up.
50 D BRANDT: And the garage?
51 D HALE: There's no one in the garage. There's never been anyone. He wanted you to say it out loud.
52 A ¶ She exhales.
53 A Her hand comes out of the jacket empty.
54 A Behind her, a glass is set down, softly, and a shadow lengthens across the bar top.
55 D BRANDT: Then he's already heard everything.
56 D HALE: Every word.
57 A ¶ The phone BUZZES a third time.
58 A Neither of them looks at it.
59 A She slides off the stool, standing straight, still not turning around.
60 A He stays seated, staring into his lap.
61 D BRANDT (quietly): Stay seated, Tomasz. Whatever happens next, you stay in that chair.
62 D HALE: What are you going to do?
63 A ¶ She lifts the wire's transmitter out from under her shirt in plain view and lays it on the bar.
64 D BRANDT: Say hello.
65 A ¶ She turns around.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05164.json
### SCENE s05164 | INT. NIGHT BUS 41 - MOVING - NIGHT
Detected names (may be incomplete or contain aliases): MIRA CALLING, HOODIE GUY, TEODOR
1 A ¶ SERIES OF SHOTS:
2 A ¶ -- Rain on the window.
3 A City lights smear into gold stripes.
4 A ¶ -- CLOSE ON a bus card tapping the reader.
5 A BEEP.
6 A ¶ -- ANGLE ON the back rows.
7 A Nearly empty.
8 A A bag of fries going cold.
9 A ¶ MIRA, 16, backpack in her lap, sits near the middle.
10 A Across the aisle, HOODIE GUY, 40s, hood up, face turned to the window.
11 A He has been there since the depot.
12 A ¶ She digs out her phone.
13 A Dials.
14 D MIRA (into phone, whispering): Dad? It's me. I'm on the 41. I know it's late. (glances around) Yeah, I'm okay. I just. I needed to go somewhere.
15 D TEODOR [V.O.]: Where are you going, Mira?
16 D MIRA (pressing her forehead to the glass): Aunt Lena's. She said I could come anytime. (a breath) You weren't going to let me leave, so I didn't tell you.
17 D TEODOR [V.O.]: I'm not mad.
18 D MIRA (laughs, bitter): You are. You're doing the voice.
19 A ¶ -- WE SEE the Hoodie Guy's shoulders tighten.
20 A He does not turn.
21 A ¶ -- INSERT: a cracked phone screen on his knee.
22 A It lights up: "MIRA CALLING?" no, "DAD HOME".
23 A It is silent.
24 A He sets it face down.
25 D TEODOR [V.O.]: Tell me which stop. I'll pick you up. We don't have to talk.
26 D MIRA (her voice breaks): You'd just stand there with the car running, Dad. You'd say nothing for forty minutes.
27 D TEODOR [V.O.]: That's, that's not --
28 D MIRA (cutting in, louder): It is! It's what you do! Mom left and you said nothing, I got in your car and you said nothing, I said I hated you and you said NOTHING!
29 A ¶ Heads on the bus lift.
30 A The Hoodie Guy pushes his hood back.
31 A Gray stubble, red eyes.
32 A Her phone is still at her ear.
33 A His mouth moves on the same words as the voice in the speaker.
34 D TEODOR [V.O.] (and across the aisle, aloud, the same sentence): I'm sorry, Mira.
35 A ¶ BACK TO SCENE: Mira slowly lowers the phone.
36 A The call timer ticks.
37 A The bus HISSES to a stop.
38 D MIRA (staring at him, barely audible): Dad?
39 D TEODOR (standing in the aisle, hands open, voice thick): Say it again. Say it all again, to my face, while I'm standing here.
40 A ¶ The doors fold open on the rain.
41 A Neither of them moves.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05166.json
### SCENE s05166 | INT. SUDS & DUDS LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): COLT, MO, PRISCILLA, TESSA, BLARES
1 A ¶ Tessa, 17, sits on a dryer typing fast while Jaylen, 17, watches the door and Mo, 16, hugs a duffel that clearly is not full of laundry.
2 A Priscilla, 18, the attendant, mops near the machines pretending she doesn't hear anything.
3 A Colt, 19, in a letterman jacket, leans on the soda machine, eyes locked on the duffel.
4 A ¶ ON PHONE: Tessa to Group: "he's HERE. do NOT look at him"
5 A ¶ Everyone looks at him.
6 D COLT: Yo. Mo. You got my stuff or what.
7 D MO: It's not your stuff. It's Wren's.
8 A ¶ Wren, 17, hoodie up, emerges from the bathroom drying her hands, sees Colt, stops dead.
9 A Jaylen steps between them, Tessa slips off the dryer and edges toward the exit, Priscilla's mop bumps the duffel, and a dozen glossy flash drives spill out across the wet floor like silver fish.
10 D PRISCILLA: Nope. I didn't see that. I'm on break.
11 A ¶ ON PHONE: Wren to Tessa: "RUN"
12 D TESSA (under her breath): I literally told you.
13 A ¶ Colt grins and grabs a drive.
14 A Wren lunges.
15 A The lights flicker, a dryer buzzer BLARES, and everybody freezes as blue and red light sweeps across the front window.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05167.json
### SCENE s05167 | INT. GREENFIELD VETERINARY CLINIC - AFTER HOURS
Detected names (may be incomplete or contain aliases): LUCAS, ALMA PRUITT, ABERNATHY, DEPUTY HARLOW
1 A ¶ Rain.
2 A ¶ The waiting room.
3 A Empty chairs.
4 A A fish tank bubbling.
5 A A wall clock reads 11:48.
6 A ¶ LUCAS, 20s, a vet tech in scrubs, kneels beside the reception desk, a flashlight in his teeth, looking at the floor.
7 A DR. ALMA PRUITT, 50s, stands over him holding a clipboard.
8 A MRS. ABERNATHY, 70s, in a raincoat, sits in a plastic chair with an empty cat carrier on her lap.
9 A ¶ Silence.
10 D DR. PRUITT: Lucas. Tell me again.
11 D LUCAS (taking the flashlight out): She was in the carrier at nine. I checked her. I swear I checked her.
12 D MRS. ABERNATHY: Biscuit doesn't just disappear.
13 A ¶ Nothing.
14 A ¶ Lucas stands.
15 A He crosses to the supply cabinet and opens it.
16 A Bandages.
17 A Syringes.
18 A A bag of kibble torn open, the floor under it dusted with crumbs.
19 A He crouches.
20 A Small paw prints in the powder of spilled flea treatment, leading toward the back hall.
21 D LUCAS: Look.
22 A ¶ Dr. Pruitt looks.
23 A Mrs. Abernathy rises, the carrier trembling in her hands.
24 A The prints stop at a closed door marked STAFF ONLY.
25 D DR. PRUITT: That door's always locked.
26 D LUCAS: Not tonight.
27 A ¶ The knob.
28 A It turns by itself.
29 A A soft CLICK.
30 A ¶ Mrs. Abernathy gasps.
31 A Dr. Pruitt steps in front of her.
32 A Lucas lifts the flashlight like a weapon.
33 A ¶ The door swings open.
34 A Dark.
35 A Cold.
36 A The smell of antiseptic.
37 A ¶ A small shape.
38 A Two green eyes.
39 A ¶ And then, behind them, the front bell JANGLES.
40 A The glass door BANGS against the wall.
41 A Wind and rain flood in.
42 A ¶ DEPUTY HARLOW, 40s, hat dripping, steps inside and shuts the door behind him.
43 A He looks at the three of them.
44 A At the open staff door.
45 A At the cat carrier.
46 D DEPUTY HARLOW: Evening. Somebody called in a break-in at this address.
47 D DR. PRUITT (too fast): No. No break-in.
48 D LUCAS: Nobody called.
49 A ¶ Silence.
50 D DEPUTY HARLOW: Funny. The call came from inside.
51 A ¶ The three of them turn, slowly, to the staff door.
52 A The small shape in the dark steps forward into the light.
53 A A gray cat.
54 A Biscuit.
55 A A tiny brass key hangs from her collar.
56 A ¶ Nothing else moves.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05168.json
### SCENE s05168 | INT. SUBWAY CAR - RUSH HOUR - STALLED
Detected names (may be incomplete or contain aliases): FRANCESCA, DEVIN, GUS, BERNADETTE, TARIQ
1 A ¶ A packed car.
2 A The lights flicker, then the train JERKS to a stop between stations.
3 A The announcement crackles and dies.
4 A Nobody can move more than two inches.
5 A ¶ FRANCESCA, 30, in a bridesmaid dress with a garment bag over one arm, is pinned against the door.
6 A She holds her phone above her head, searching for a signal.
7 A DEVIN, 32, in a rumpled suit, is wedged against her back, holding a cake box very carefully above his head.
8 D DEVIN: Sorry. Sorry. Is that your elbow?
9 D FRANCESCA: That is your cake.
10 D DEVIN: It's a wedding cake. For a wedding.
11 D FRANCESCA: Which wedding?
12 D DEVIN: Mine. Well. My sister's. I'm best man.
13 A ¶ She cranes around.
14 A He blinks at her.
15 A She has a streak of mascara under one eye, and a tiara crooked in her hair.
16 D FRANCESCA: I'm the maid of honor. At the Whitfield wedding.
17 D DEVIN: That's my sister.
18 D FRANCESCA: Then you're the brother who never RSVPs.
19 A ¶ He opens his mouth, closes it.
20 A GUS, 60s, a retired conductor squeezed in beside them with a trombone case, chuckles.
21 A BERNADETTE, 20s, in tights and a tutu, is crouched on the floor eating a bagel.
22 A TARIQ, 18, headphones on, is asleep standing up, drooling against a pole.
23 D GUS: You two should just get married.
24 A ¶ FRANCESCA and DEVIN (together) No.
25 A ¶ The train shudders.
26 A Lights out.
27 A Total darkness.
28 A A collective groan.
29 A Then the screen of her phone glows.
30 A ¶ ON PHONE: Mom: "WHERE ARE YOU.
31 A CEREMONY IN 20"
32 A ¶ ON PHONE: Bride: "if the cake's not here by 3 I'm eloping"
33 D DEVIN: Uh oh.
34 D FRANCESCA: Oh no.
35 A ¶ She turns to look at him in the blue glow.
36 A The tiara has slipped almost over one eye.
37 A He lowers the cake box an inch and, in the dark, breathes out.
38 A ¶ This is the last time they will be strangers.
39 A ¶ The emergency lights come on.
40 A A dull thunk, and the train lurches forward.
41 A Everybody tilts the same direction.
42 A The cake box slides out of Devin's hands, Francesca catches it, Gus catches her, and Bernadette catches the bagel.
43 D TARIQ (waking up, loudly): Did we make it?
44 D BERNADETTE: No.
45 D TARIQ: Cool.
