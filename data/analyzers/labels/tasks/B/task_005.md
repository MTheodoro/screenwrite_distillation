You are a computational linguist building a coreference and discourse corpus. For each sentence, first decide silently what every pronoun and noun phrase refers to, then label. Prefer the reading a careful reader would settle on, and lower your confidence when two readings are plausible.

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
  }
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


Write each scene's JSON (valid JSON, no comments, no trailing commas) to the given path with the Write tool. Do not write anything else. Reply only with "done N".

## Scenes

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05118_1.json
### SCENE s05118_1 | INT. DR. OKAFOR'S OFFICE - CONTINUOUS
Detected names (may be incomplete or contain aliases): SASHA, AIDEN, MARLON, DR. OKAFOR
1 A ¶ CLOSE ON the safe.
2 A A small grey box behind a framed diploma.
3 A ¶ Sasha works the dial with a stethoscope pressed against the metal.
4 A Aiden holds the flashlight steady.
5 A Marlon stands in the door and watches the hall.
6 D SASHA (whispering): Twelve. Twenty-six. Three.
7 A ¶ CLICK.
8 A ¶ The safe swings open.
9 A Inside, on a velvet cushion, sits a small box.
10 A ¶ INSERT - THE BOX.
11 A Sasha opens it.
12 A Inside is a plain gold ring and a folded note.
13 A ¶ Aiden unfolds the note and reads.
14 D AIDEN (quietly): "If you are reading this, you found out I never told her I was sorry."
15 A ¶ Silence.
16 A Sasha takes the note, reads it, and passes it to Marlon.
17 D MARLON: I don't think we should take it.
18 D AIDEN: Neither do I.
19 D SASHA: Put it back.
20 A ¶ Aiden closes the box.
21 A Places it in the safe.
22 A Spins the dial.
23 A They tiptoe out of the office as the front door CREAKS and a flashlight beam sweeps across the waiting room.
24 D DR. OKAFOR [O.S.]: Hello?
25 A ¶ BACK TO SCENE
26 A ¶ The three of them freeze in the hallway.
27 A Aiden puts a finger to his lips.
28 A The beagle barks once.
29 A ¶ DR. OKAFOR, 60s, in a raincoat, steps into the beam.
30 A He sees them.
31 D DR. OKAFOR: You found it.
32 D AIDEN: We put it back.
33 D DR. OKAFOR (after a long moment): Good. Come in and have some tea.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05178.json
### SCENE s05178 | INT. RIVERSIDE SOUND STUDIO - CONTROL ROOM - NIGHT
Detected names (may be incomplete or contain aliases): ELLIE, RHYS, GRAN
1 A ¶ A dim room, all faders and foam.
2 A Through the glass: a vocal booth, a lone mic, a stool.
3 A ¶ ELLIE (17, borrowed leather jacket two sizes too big) stands inside the booth with headphones clamped on, gripping the mic stand while RHYS (30s, producer, beanie, tea in a chipped mug) slumps behind the desk with his feet up, and a laptop on his knee pings and BUZZES every few seconds as GRAN's name flashes on its screen.
4 D RHYS (into talkback): Again, Ellie. From the second verse.
5 D ELLIE [V.O.] (through speaker): I've done it nine times, Rhys.
6 D RHYS: Ten's a good number.
7 A ¶ She sighs, the speaker crackling.
8 A Rhys's phone rings: GRAN.
9 A He answers, puts it on speaker.
10 D GRAN [V.O.]: Rhys, love, is she there? She's not answering her mobile.
11 D RHYS: She's singing, Gran. Can't be disturbed.
12 D GRAN [V.O.]: Tell her the dinner's gone cold. Tell her I'm proud, and the dinner's gone cold.
13 A ¶ Ellie hears it through the cans.
14 A Her hand goes to her mouth.
15 A Rhys mutes the line and presses talkback.
16 D RHYS: Good. Hold that. Sing it like that.
17 A ¶ She takes a breath.
18 A Closes her eyes.
19 A The red light flicks on.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05064_0.json
### SCENE s05064_0 | INT. HOLLOWAY VETERINARY CLINIC - WAITING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): NATE DUNN
1 A ¶ HANDHELD.
2 A A phone camera, held at arm's length, swinging.
3 A The picture is grainy, overexposed by the buzzing tube lights.
4 A A timestamp burns in the corner: 11:47 PM.
5 A ¶ NATE DUNN, 28, lanky, a beanie, a hoodie with the sleeves pushed up, holds the camera on himself, grinning too hard, a kid doing a bit he has done a hundred times for a channel with four hundred subscribers.
6 D NATE: Okay so we're live. Not live live. Recording live. If you're new, I'm Nate, and tonight we are doing what the comments asked for, which is the abandoned vet clinic on Route 9.
7 A ¶ He turns the camera.
8 A The waiting room is wide, low-ceilinged, and wrong.
9 A Plastic chairs bolted in rows.
10 A A reception desk with a dead phone and a bowl of petrified dog biscuits.
11 A On the wall, a faded poster, "Have You Hugged Your Pet Today?", a cartoon beagle smiling in a way that has gone sour.
12 D NATE [CONT'D]: So, lore. This place closed in 2009. Owner just kind of walked out one day. Left the files, left the meds, left, and this is the part I love, the animals.
13 A ¶ He laughs.
14 A It dies fast.
15 D NATE [CONT'D]: I mean not the animals. Obviously. Not the. Anyway.
16 A ¶ The camera pushes toward a hallway on the far side of the desk.
17 A At the mouth of it, a rusted gurney.
18 A Beyond that, dark.
19 A ¶ ON PHONE: A text banner drops from the top of the frame.
20 A "MO: ur not seriously there rn"
21 D NATE [CONT'D] (to the camera): That's my buddy Mo. He's scared of everything. Mo, I see you, I'm okay.
22 A ¶ He types with one thumb, camera shaking, and we see over his shoulder the reply go out: "im fine. go to bed."
23 A ¶ ON PHONE: "MO: nate. its midnight. come home."
24 A ¶ He pockets the phone.
25 A In the glass of the front door, behind him, there's a reflection of the empty lot outside, the van, the moon, and for a half second something low and pale moving past the van, something about the size of a dog.
26 A ¶ He doesn't see it.
27 A The camera does.
28 D NATE [CONT'D]: Okay! Hallway.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05064_2.json
### SCENE s05064_2 | INT. HOLLOWAY VETERINARY CLINIC - WAITING ROOM - CONTINUOUS
Detected names (may be incomplete or contain aliases): NATE, TEENAGERS
1 A ¶ The camera whips around, a smear of light and floor and ceiling.
2 A He is running now, the image jerking with each stride, his breathing a bellows, the chairs flashing past in rows.
3 A Behind him claws skitter, closer, wet and hungry.
4 D NATE: Go go go go go
5 A ¶ He hits the front door and it doesn't open.
6 A He hits it again.
7 A He slams his shoulder into it and the glass shivers but holds, a deadbolt turned from the outside, a padlock hung on the other side by someone he never heard.
8 A ¶ Through the glass he sees the lot, the van, and two TEENAGERS in matching letterman jackets standing at the edge of the pavement with their phones raised, filming him, one laughing, one not.
9 D NATE [CONT'D]: Hey! HEY! Open the door! Please! Open the door!
10 A ¶ The laughing one waves.
11 A The other lowers his phone slowly, and his face goes slack.
12 A ¶ Behind Nate, the camera catches the reflection in the glass: the pale dog, in the center of the waiting room, standing on its hind legs.
13 D NATE [CONT'D] (barely audible): Oh no.
14 A ¶ ON PHONE: A final text drops, ignored, as the lens falls to the floor and tumbles.
15 A "MO: im coming"
16 A ¶ The picture rolls once, twice, and comes to rest at an angle, showing the ceiling tiles and one hand reaching, then a long dragging sound, then black.
17 A ¶ TIMESTAMP: 12:09 AM.
18 A The recording continues for nine more minutes with no picture.
19 A Only sound.
20 T FADE OUT.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05102.json
### SCENE s05102 | INT. MOON COLONY FUNERAL RECEPTION - EVENING
Detected names (may be incomplete or contain aliases): PIM, PIP, AUNT NEBULA
1 A ¶ Grey dust drifts past the big round window.
2 A Earth hangs there, small and blue and very far away.
3 A Under the dome, a long table of nutrient cakes nobody is touching.
4 A ¶ PIM, a squat round robot the size of a beach ball with two floppy antenna ears, rolls up to the cake table.
5 A Next to him bobs PIP, a thin silver drone with a single blinking eye.
6 A Everyone says they are the same model.
7 A They are not.
8 D PIM (to everyone): Thank you all for coming to say goodbye to Captain Barnaby Tumbleton, who was the best captain of the best crater on the whole moon!
9 A ¶ Dust.
10 A Hush.
11 A A distant air pump going whoosh.
12 D PIP (to Pim): Pim, you said "best" twice and he was the only captain.
13 D PIM (muttering): Then he was twice as best.
14 A ¶ The dome lights flicker low.
15 A A tiny sad chime plays from the speakers, and the cake's candle gutters in the thin air.
16 D PIP: Pim I miss him.
17 D PIM: Me too Pip. (sniff) My antenna ears are leaking.
18 A ¶ The airlock hisses.
19 A In rolls AUNT NEBULA, an enormous fluffy purple dust-bunny robot in a black veil, humming slowly.
20 A She stops.
21 A Everything goes still.
22 D AUNT NEBULA (to the room): Nobody told me I was late. Is there cake left? Is he still dead?
23 D PIM (softly): Yes. To both.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05165.json
### SCENE s05165 | INT. COLDLINE DELIVERY WAREHOUSE - NIGHT
Detected names (may be incomplete or contain aliases): BOGDAN, THE WOMAN, ILSE, TWINS
1 A ¶ Water is on the floor, ankle high.
2 A The power is out.
3 A A small camping lantern stands on a shelf and gives yellow light, and BOGDAN, 50s, is moving boxes of canned food from low shelves to high shelves one by one, and in the corner near the loading door THE WOMAN, 30s, wet coat, sits on a stack of pallets with her phone in her hand and she looks at the stairs and at the water and at him, and the rain on the metal roof is loud.
4 D BOGDAN: This shelf is dry. Put your bag here.
5 D THE WOMAN: I keep my bag.
6 D BOGDAN: OK.
7 A ¶ He lifts another box.
8 A She watches him.
9 A The water moves around his boots.
10 A ¶ ON PHONE: Message failed.
11 A No signal.
12 A ¶ She puts the phone in her pocket.
13 D THE WOMAN: How long you work here?
14 D BOGDAN: Eleven years. Never this much water.
15 D THE WOMAN: The driver did not come back.
16 D BOGDAN: He will come.
17 D THE WOMAN: You say this like you do not think so.
18 A ¶ Bogdan does not answer.
19 A He gives her a can of peaches and a plastic spoon.
20 A She takes it.
21 A She does not open it.
22 A She holds it on her knee.
23 D BOGDAN: Open. Eat. We have enough.
24 D THE WOMAN: Later.
25 A ¶ Bogdan sets the lantern higher.
26 A Outside, a car horn sounds far away, two short notes, then stops.
27 A They both look at the door.
28 D THE WOMAN [CONT'D]: My name is Ilse. I should say it.
29 D BOGDAN: Bogdan.
30 D ILSE: I know. It is on your jacket.
31 A ¶ He almost smiles.
32 A He looks at the stitching on his chest as if he forgot it.
33 A ¶ Then the side door BANGS open.
34 A Water rushes in.
35 A THE TWINS, two boys about ten, soaked to the skin, in matching yellow raincoats, stand in the frame holding one backpack between them.
36 A They do not speak.
37 A They look at the lantern.
38 D BOGDAN [CONT'D] (softly): Come. Come inside. Close the door.
39 D THE TWINS (together): We are looking for our mother.
40 A ¶ Ilse stands up.
41 A She sets the can of peaches down on the shelf, open now, with the spoon in it, and she pulls off her coat and puts it over the two small shoulders.
42 D ILSE: Sit. Here. It is dry.
43 A ¶ The boys sit on the pallets.
44 A Bogdan hands them the peaches.
45 A They share the spoon.
46 A ¶ Rain.
47 A The lantern flickers, then holds.
48 A ¶ ON PHONE: one bar.
49 A A message comes through at last.
50 A ¶ ON PHONE: "Where r u?
51 A We are at the bridge.
52 A Boys with you?"
53 A ¶ Ilse reads it.
54 A She does not smile.
55 A She turns the phone so the twins can see the screen, and she keeps her hand on the nearest small wet head.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05062.json
### SCENE s05062 | INT. RIDESHARE CAR - NIGHT
Detected names (may be incomplete or contain aliases): GWEN, RICKY, TASHA, BOB
1 A ¶ 2 AM.
2 A Rain.
3 A A hatchback, wipers going.
4 A GWEN, bride-to-be, in a wedding dress, sits in back.
5 A Next to her, RICKY, her ex.
6 A Up front, TASHA drives.
7 A Beside her, BOB, a stranger with a trombone case.
8 D TASHA: So to confirm. Four people. One dress. Zero explanations.
9 D GWEN: He's not with me.
10 D RICKY: I'm totally with her.
11 D GWEN: He's not WITH me with me.
12 A ¶ Silence.
13 A ¶ Bob.
14 A Trombone.
15 A Nothing.
16 D BOB: I got in the wrong car.
17 D TASHA: You got in the right car. You got in the wrong, uh, situation.
18 A ¶ Her phone.
19 A Dead.
20 D GWEN: Does anyone have a charger
21 D TASHA: Glovebox. Next to my dignity.
22 A ¶ He opens it.
23 A Empty.
24 A Rain.
25 D RICKY: Gwen, the groom is at the church. Everyone is at the church. Why are we in a Honda?
26 D GWEN: Because I ran. Okay? I ran. In heels.
27 D BOB (raising trombone case): For what it's worth, I think you look fantastic.
28 A ¶ Beat.
29 A All three turn to him.
30 D TASHA: Sir, you're not even supposed to be here.
31 D BOB: I'm just saying. Great dress.
32 A ¶ She laughs, then cries, then laughs.
33 A He hands her a napkin from the case.
34 A Why does he have napkins in a trombone case.
35 A Nobody asks.
36 A ¶ Tasha stops the car.
37 A Church.
38 A Lights on.
39 A Doors open.
40 A The groom, tiny in the distance, waving.
41 D RICKY: Oh no.
42 D GWEN: Oh no.
43 D TASHA: Five stars everybody. Thats the best ride I ever had.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05094.json
### SCENE s05094 | EXT. SKYLINE ROOFTOP BAR - NIGHT
Detected names (may be incomplete or contain aliases): ALANA, COLM
1 A ¶ Detective Sergeant Alana Reyes sits at a corner table with a club soda.
2 A Across from her, Assistant District Attorney Colm Brennan, in a loosened tie, nurses a bourbon.
3 A Neither has touched the appetizers.
4 A String lights sway.
5 A The city hums far below.
6 D ALANA (sliding a folder across): Chain of custody on the Delacroix evidence. Tell me what's wrong with it.
7 D COLM (not opening it): Nothing's wrong with it. It's thin, Alana. Thin is not wrong.
8 D ALANA (quietly): Thin is how it gets tossed at the suppression hearing.
9 D COLM (finally flips a page): Locker 14 was logged out at 2210 and the bag was sealed at 2305. That's fifty-five minutes where a lawyer drives a truck through.
10 D ALANA (she doesn't flinch): Officer Pak was on scene the whole time. She'll testify.
11 D COLM (shaking his head): She'll testify she was on scene. She won't testify nobody touched it.
12 A ¶ A long beat.
13 A A waiter passes.
14 A Neither speaks until he is gone.
15 A Alana picks at the label on her bottle.
16 D ALANA (low, level): I need you to file anyway. Monday. Before the defense gets wind of the gap.
17 D COLM (setting down the glass): You're asking me to walk into a courtroom knowing I might lose the whole case on a paperwork error.
18 D ALANA (meeting his eyes): I'm asking you to walk in knowing the man did it.
19 D COLM (after a pause, soft): That's not the standard. You know that's not the standard.
20 D ALANA (she stands, buttons her jacket): Then give me the standard. Tell me what I need, and I'll go get it.
21 D COLM (he looks at the folder, at the city, at her): Get me Pak's written statement. Notarized. By Friday.
22 D ALANA (a small nod): Friday.
23 A ¶ She leaves the folder.
24 A He pulls it back toward himself and finally, finally starts to read.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05066.json
### SCENE s05066 | INT. MARRIOTT SUITES - 4TH FLOOR CORRIDOR - NIGHT
Detected names (may be incomplete or contain aliases): COREY, DANI, BEX, MARCUS, LENA, GREG
1 A ¶ fluorescent light. carpet the colour of a bruise. a room service cart abandoned outside 412.
2 A COREY, DANI, BEX, MARCUS and LENA stand in a loose knot outside the conference suite, lanyards still on, name tags crooked, the team retreat is in its third hour of "synergy".
3 D COREY: ok but nobody says anything to Greg.
4 D DANI: nobody's saying anything to Greg.
5 D COREY: because last time somebody said something to Greg we all got a mindfulness seminar.
6 D BEX: i liked the mindfulness seminar.
7 D MARCUS: Bex, they made us hold hands with the interns.
8 D BEX: it was grounding. also i'm allowed to like things.
9 D LENA: Bex is allowed to like things.
10 D BEX: thank you Lena. they are the only one who gets it.
11 A ¶ ON PHONE: A message from "GREG (VP)" lights up Corey's screen. "great energy team!! back in 5 for the breakout"
12 D COREY: he said breakout. Dani. he said breakout.
13 D DANI: no. no no no. we did the breakout.
14 D MARCUS: that was the pre-breakout.
15 D LENA: what's the difference between a breakout and a pre-breakout
16 D MARCUS: the pre-breakout has snacks.
17 D BEX: i'm not going back in. i'm going to stay in the hall and become a plant.
18 D DANI: Bex you literally can't. you're presenting the deck.
19 D BEX: Dani, they, i mean i, i have never once presented the deck. you're confusing me with the other Bex.
20 D COREY: there's another Bex?
21 D BEX: no. i just wanted to see if you'd check.
22 A ¶ ON PHONE: A second message, group chat "RETREAT 2K24 (DO NOT MUTE)".
23 A Lena: "dont look but greg is at the elevator".
24 A Marcus: "he's crying???"
25 A Dani: "happy crying or layoff crying"
26 A ¶ They all turn at once.
27 A At the far end of the corridor, the elevator dings.
28 A GREG, 50s, vest, lanyard, a laminated agenda, steps out wiping his eyes with a tiny hotel napkin.
29 D LENA (whispering): Layoff crying.
30 D MARCUS: Happy crying doesn't wear a vest.
31 D COREY: Everybody act normal. Dani, normal.
32 D DANI: i'm so normal. i am the normalest.
33 D BEX (slowly raising a hand): hi Greg.
34 A ¶ Greg looks up.
35 A A beat.
36 A He sniffles.
37 D GREG: Team. Great. Love it. Love the energy.
38 A ¶ He walks past them into the suite and the door sighs shut.
39 A They stand in the corridor in silence.
40 D MARCUS: So. Breakout.
41 D COREY: Breakout.
42 A ¶ They don't move.
43 A The cart rattles faintly as the building settles.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_B/s05021.json
### SCENE s05021 | INT. ST. MARGARET HOSPITAL - NURSES STATION - NIGHT
Detected names (may be incomplete or contain aliases): PRIYA, ALBERT, TOMASZ, GLORIA, TEENAGERS, DIRECTOR
1 A ¶ The ward is quiet.
2 A The clock on the wall shows 3:10.
3 A A cleaner pushes a mop slowly past the station and does not look at anyone.
4 A In the corner a vending machine hums.
5 A PRIYA sits with a clipboard, DR. ALBERT eats a sandwich with great care, TOMASZ is looking at his phone and GLORIA, the night manager, walks in a circle around the desk with a mug in her hand and a smile that does not move.
6 D PRIYA (she closes the clipboard): Everybody, tonight is very calm. Maybe the calmest night this year.
7 D DR. ALBERT (he chews, then points to the sandwich): Please do not say this word. Calm. It is a bad word in hospital.
8 D PRIYA (laughing, she touches the wooden desk): I am sorry. I take it back.
9 D TOMASZ (to himself, he reads the screen): Again no message from my wife. Maybe she is sleeping.
10 A ¶ ON PHONE: Tomek where r u?
11 A Come home early pls.
12 A Dog is sick.
13 D TOMASZ (he turns the phone to Priya): You see? The dog. Always the dog.
14 D PRIYA (she reads and nods): You have a dog? I thought you hate animals.
15 D TOMASZ (quietly, to the room): I hate everything at three in the morning.
16 D GLORIA (she lifts the mug to all of them): Friends, I am so happy with this team. Really. Look at this peace.
17 D DR. ALBERT (to Priya, low, he lowers the sandwich): Why is she so happy? She is never happy.
18 D PRIYA (whispering, she shrugs): Maybe she had good sleep.
19 D GLORIA (she hears and smiles wider): I heard this. I am fine. Please, continue your work.
20 A ¶ Two TEENAGERS in school jackets come through the doors, one holding a bloody paper towel to the other's chin.
21 A Nobody stands up.
22 A Priya waves them to the waiting chairs without looking, Tomasz types a reply with one thumb, and Dr. Albert hides the sandwich under a folder while Gloria walks to the window and looks down at the parking lot as if she is waiting for someone.
23 A ¶ The desk phone RINGS.
24 A Priya answers.
25 D PRIYA (into the phone): Ward four, Priya speaking.
26 D DIRECTOR [V.O.] (through the phone, calm and slow): Priya, good evening. This is the Director, from the head office. I am downstairs. I am coming up to see your ward.
27 D PRIYA (she covers the receiver, to everyone): It is the Director. He is downstairs.
28 D DR. ALBERT (he stands, the folder falls, the sandwich falls): Ah no. No, no.
29 D TOMASZ (he puts the phone away and fixes his hair): Now I understand why she smile.
30 D GLORIA (turning from the window, very quietly, to all): He has been in the building since midnight. I did not tell you because I wanted to see your real work.
31 D PRIYA (into the phone, with a very small voice): Welcome, Director. We are ready.
32 D DIRECTOR [V.O.] (the elevator DINGS behind the phone voice): I know. I saw everything on the camera.
33 A ¶ The elevator doors OPEN at the end of the corridor.
34 A The cleaner with the mop stops, takes off his cap, and looks at the four of them.
35 D TOMASZ (a whisper): Is the cleaner the Director?
36 A ¶ Nobody answers.
37 A The cleaner smiles.
