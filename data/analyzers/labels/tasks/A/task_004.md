You are an experienced script supervisor annotating scenes for a continuity database. Work carefully, line by line.

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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05056.json
### SCENE s05056 | INT. SELF-STORAGE UNIT 114 - DAY
Detected names (may be incomplete or contain aliases): HOLLIS, THE WOMAN, WADE, ODALYS, CAL
1 A ¶ ON CAMERA: a roll-up door half open, daylight on concrete.
2 A The camera operator's breathing is audible.
3 A ¶ Hollis, 60s, in a sweat-stained Stetson, kneels over a trunk.
4 A Behind him, boxes stacked to the ceiling, saddles, a dented tin lantern.
5 A ¶ A woman stands in the doorway with her arms crossed.
6 A She does not give her name.
7 A She has a leather satchel and a very flat voice.
8 D HOLLIS: Told the office it was all family stuff. Photographs. My granddad's saddle.
9 D THE WOMAN: And the brand book.
10 D HOLLIS: Didn't say a word about no brand book.
11 D THE WOMAN: You didn't have to.
12 A ¶ Hollis opens the trunk.
13 A Nothing.
14 A Dust.
15 D HOLLIS: Well, it ain't here.
16 A ¶ Hollis's phone RINGS.
17 A He answers on speaker.
18 D WADE [V.O.] (tinny): Pa? You in there yet? Don't open nothing till I get there.
19 D HOLLIS: Too late, son.
20 D WADE [V.O.]: Is somebody with you?
21 A ¶ Hollis looks at the woman.
22 A She looks at the camera.
23 A For a long time none of them say anything.
24 D THE WOMAN: Tell him it's Odalys. Tell him I came the long way round.
25 D HOLLIS (into the phone): It's Odalys.
26 D WADE [V.O.] (a pause, then flat): I'm ten minutes out. Stay put.
27 A ¶ The line goes dead.
28 A Hollis puts the phone in his pocket and does not look up.
29 D HOLLIS: He ain't gonna be happy.
30 D ODALYS: No.
31 D HOLLIS: You gonna wait?
32 D ODALYS: I have waited thirty years, Mr. Hollis. Ten minutes is nothing.
33 D CAL (behind the camera): Are we still rolling?
34 A ¶ Nobody answers him.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05064_0.json
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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05171_1.json
### SCENE s05171_1 | INT. BANK - LOADING DOCK - CONTINUOUS
Detected names (may be incomplete or contain aliases): BEA, RENA
1 A ¶ Concrete.
2 A Cold.
3 A A single camera in the corner, its red light blinking.
4 A ¶ Rena looks up at it.
5 A Bea is already holding the backpack open.
6 D BEA: Don't look at it.
7 D RENA: I'm not looking at it.
8 D BEA: You're looking at it.
9 A ¶ Rena turns away.
10 A Beyond the wall, faintly, the crowd keeps chanting.
11 A Pay for it.
12 A Pay for it.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05163.json
### SCENE s05163 | EXT. ABERNETHY GREEN - REENACTMENT CAMPGROUND - DAY
Detected names (may be incomplete or contain aliases): PHILIPPA, THADDEUS, WICK
1 A ¶ A muddy field of canvas tents.
2 A Smoke from a cookfire.
3 A Thaddeus Pell, 40s, in a full 1776 militia coat and tricorn, sits on a barrel holding a laptop wrapped in a burlap sack.
4 A He is very aware of the modern world and very hopeful nobody sees it.
5 A ¶ Philippa Voight, 30s, in a plain linen gown and apron, walks up carrying a wooden bucket.
6 A She stops.
7 A Squints.
8 D PHILIPPA: Are you ColonelHuzzah88?
9 D THADDEUS: Are you Mistress_Quill?
10 D PHILIPPA: Yes, hi. Thaddeus. Hi.
11 D THADDEUS: Philippa! In the flesh! Well, in the flax.
12 A ¶ She sets down the bucket.
13 A They shake hands, awkwardly, formally, as period requires.
14 A ¶ ON LAPTOP SCREEN: a Slack channel titled #the-1776-crew.
15 A The newest message reads:
16 A ¶ ON SCREEN: wick_the_unbothered: are u 2 there yet or what
17 D THADDEUS [CONT'D]: Wick's online. They said they'd join by video, they couldn't get off work.
18 A ¶ Thaddeus unwraps the burlap and turns the laptop so both can see.
19 A A video window opens: a cluttered cubicle, a lanyard, a fluorescent light.
20 A WICK, 20s, wears a headset and a cheap tricorn made of black construction paper.
21 D WICK [V.O.] (through laptop speakers): Oh my god, you're real. Hi! Is that the real mud?
22 D PHILIPPA: It's the real mud.
23 D WICK [V.O.]: I'm so sorry I'm not there, my manager is literally behind me, they keep walking past. One sec.
24 A ¶ Wick quickly minimizes a spreadsheet and sits very straight.
25 D THADDEUS (to Wick): You look very serious.
26 D WICK [V.O.]: I'm in a meeting. Technically. I'm muted, I think? Am I muted?
27 D PHILIPPA: No.
28 D WICK [V.O.]: Oh no. (muttering) Okay. Okay. It's fine.
29 A ¶ Philippa sits on the grass, tucks her skirts.
30 A Thaddeus offers her a hard biscuit from a leather pouch.
31 D PHILIPPA: Is it period?
32 D THADDEUS: It's from Costco. But I dipped it in tea so it looks old.
33 D PHILIPPA: That's the most you thing I've ever heard and I've known you for two years in text.
34 D WICK [V.O.]: Aw, you guys are cute. This is cute. I'm gonna cry at my desk.
35 D THADDEUS: Please don't cry at your desk, Wick.
36 D WICK [V.O.]: I use they/them, Thaddeus, not "cry at your desk," come on.
37 A ¶ A beat.
38 A Then all three laugh.
39 A A distant musket goes off POP over the tents.
40 A Philippa bites the biscuit and winces.
41 D PHILIPPA: Okay. That's definitely Costco.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05021.json
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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05178.json
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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05094.json
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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05144.json
### SCENE s05144 | INT. COUNTY PAROLE OFFICE - WAITING AREA - MORNING
Detected names (may be incomplete or contain aliases): JEN, BIG DAVE, MO
1 A ¶ Plastic chairs bolted in rows.
2 A A water cooler gurgles.
3 A Behind the glass, a clerk types, never looking up.
4 A ¶ Big Dave, 50s, broad, in a suit that fits like it was lent to him, sits with his hands folded.
5 A Beside him, Jen Park, 40s, parole officer, flips through a file with her thumb.
6 D JEN (to the room, not looking up): Everybody sign the sheet. Even if you've signed it before. Especially if you've signed it before.
7 A ¶ Two teenagers by the vending machine laugh at something on a phone.
8 A A man with a toddler on his knee shushes the child, who cries anyway.
9 D BIG DAVE (standing, to Jen): I've been out eleven months. I've been on time every Tuesday. Every Tuesday, Jen.
10 D JEN (beat): I know.
11 D BIG DAVE (quieter): Then why am I looking at a new condition on my own paper?
12 D JEN (closing the file): Dave. Sit.
13 D BIG DAVE (not sitting): I did what you said. I took the job. I stayed at Mo's place. I stayed away from the old crowd.
14 A ¶ Mo, 30s, in the next chair over with a hi-vis vest in her lap, stares at the floor.
15 D MO (muttering): Don't drag me into this.
16 D BIG DAVE (to Mo): You're the one who said they'd write the letter.
17 D MO (to nobody): I said I'd think about it.
18 D JEN (to the whole room): Folks, give us a minute. Please.
19 A ¶ The two teenagers drift off down the hall.
20 A The man with the toddler picks up the child and leaves.
21 A The clerk behind the glass finally looks up.
22 D BIG DAVE (beat): You want to tell me who made the call?
23 D JEN (firmly): No.
24 D BIG DAVE (louder): Somebody called. Somebody told you where I was on the fourteenth.
25 D JEN (rising): Dave, I can't discuss it here.
26 D BIG DAVE (lunges across the chair): Then where?
27 A ¶ Jen and Big Dave collide and both stumble into the water cooler.
28 A The jug SLOSHES and tips.
29 A Mo jumps up and the three of them freeze.
30 D MO (very quietly): It was me.
31 A ¶ Silence.
32 A The cooler glugs once, and stops.
33 D BIG DAVE (beat): Say that again.
34 D MO (to Jen): You said if I told you, he would only get a warning.
35 D JEN (to herself): God help me.
36 A ¶ Big Dave sits.
37 A Slowly, like a man lowering something heavy.
38 A The clerk behind the glass quietly turns off her screen.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05068_1.json
### SCENE s05068_1 | INT. COUNTY PAROLE OFFICE - OFFICER OKAFOR'S OFFICE - LATER
Detected names (may be incomplete or contain aliases): RUTH, THE MAN, CALVIN
1 A ¶ Ruth Okafor, 50s, reading glasses pushed up into gray braids, sits behind a desk piled with files, a cactus, a photograph of a boy in a graduation gown turned slightly away from the visitor's chair.
2 A She is calm, almost bored.
3 A She has done this four thousand times.
4 A ¶ The man sits.
5 A He puts the folder on the desk.
6 D RUTH: Mr. Voss. How's the job?
7 D THE MAN: Fine.
8 D RUTH: The apartment?
9 D THE MAN: Fine.
10 D RUTH: You've been fine for six weeks. I'm starting to think you're a fine person.
11 A ¶ He doesn't smile.
12 A She turns a page.
13 D RUTH [CONT'D]: Says here you missed your Thursday check-in.
14 D THE MAN: I called.
15 D RUTH: You left a message with Deb. Deb doesn't write things down. Deb is a lovely woman and a terrible secretary.
16 D THE MAN: I was at work. They put me on a double.
17 D RUTH: Did you bring a pay stub?
18 A ¶ He slides the folder across.
19 A She opens it, flips, and stops.
20 A Her eyebrows lift very slightly.
21 D RUTH [CONT'D]: This isn't a pay stub.
22 A ¶ It's a photograph.
23 A A school photo, a boy of about eight, missing a front tooth.
24 A She looks at it a long time.
25 A When she looks up, her voice is lower.
26 D RUTH [CONT'D]: Where did you get this?
27 D THE MAN: Mailbox. Yesterday.
28 D RUTH: It's not allowed. You know it's not allowed. The order says no contact.
29 D THE MAN: I didn't contact anybody. It came in the mail. I didn't do a thing.
30 A ¶ He leans forward.
31 A For the first time his voice shakes, not much, just enough.
32 D THE MAN [CONT'D]: Somebody wants me to violate. That's all this is. Somebody wants me back inside.
33 D RUTH: Who?
34 A ¶ He doesn't answer.
35 A His hands, on his knees, have begun to tremble, and he presses them flat.
36 D RUTH [CONT'D]: Mr. Voss, I need a name.
37 D THE MAN: Calvin.
38 D RUTH: Excuse me?
39 D THE MAN: Calvin. My name's Calvin. Everybody calls me Voss like I'm a case number. I'd like, once, for somebody in this building to say it.
40 A ¶ She sets the photograph down, gently, and for a moment the whole office seems to hold its breath.
41 A Deb's keyboard has stopped.
42 A Somewhere a printer jams.
43 D RUTH: Calvin.
44 A ¶ He closes his eyes.
45 D RUTH [CONT'D]: I'm going to make a call. You're going to sit right here. You are not in trouble.
46 D CALVIN (opening his eyes): That's what they said last time.
47 A ¶ She stands, takes the photograph, and walks to the door, and in the doorway she hesitates, and does not look back, and this is the last time the two of them will sit in the same room as strangers.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05118_1.json
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
