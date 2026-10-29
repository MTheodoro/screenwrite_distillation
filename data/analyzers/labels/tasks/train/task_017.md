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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05198_0.json
### SCENE s05198_0 | INT. NEW BEGINNINGS FERTILITY CLINIC - WAITING ROOM - DAY
Detected names (may be incomplete or contain aliases): BRENDA OKONKWO, ELLIOT VANCE, MARA FELDMAN, BRAD FELDMAN, BRETT FELDMAN
1 A ¶ Soft jazz.
2 A Beige everything.
3 A A fish tank with one very depressed fish.
4 A Applause-ready bright.
5 A A wall of baby photos.
6 A ¶ Behind the front desk, BRENDA OKONKWO, 50s, receptionist, queen of the clipboard.
7 A At the coffee machine, DR. ELLIOT VANCE, 40s, handsome in a way that costs money.
8 A On the couch, MARA FELDMAN, 30s, nervous, holding a stack of forms, and next to her, her husband BRAD FELDMAN, 30s, who doesn't look up from his phone.
9 A ¶ Enter BRETT FELDMAN, 30s, in a suit that doesn't fit, with a bouquet.
10 D BRETT: Honey! I came as soon as I could!
11 A ¶ Everyone turns.
12 A Brad looks up.
13 A Mara looks at Brad.
14 A Brad looks at Brett.
15 A Brett looks at the bouquet, then at Mara.
16 D BRENDA (deadpan): Well. That's a lot of husbands.
17 D MARA: Brett is Brad's brother.
18 D BRETT: I'm the fun one.
19 D BRAD: He is not the fun one.
20 D DR. VANCE (reading a clipboard): Mrs. Feldman? We're ready for you.
21 D MARA: Both of them can come?
22 D DR. VANCE (smiling too widely): Of course. The more the merrier.
23 A ¶ Mara stands.
24 A Brad stands.
25 A Brett stands.
26 A They all move toward the door, then all stop, because Brenda is holding up a hand.
27 D BRENDA: Just the one husband, hon.
28 D BRAD: I'll go.
29 D BRETT: I'll go.
30 D MARA: I'm going. Alone.
31 D DR. VANCE (brightly): Excellent.
32 A ¶ Mara exits through the inner door.
33 A Dr. Vance follows.
34 A It closes.
35 A Brad and Brett stand in silence.
36 A The fish blows a bubble.
37 D BRAD: Why are you here?
38 D BRETT: Mom said you needed support.
39 D BRAD: Mom said that?
40 D BRETT: She said you looked "fragile."
41 D BRENDA (not looking up): He does.
42 A ¶ ON PHONE: Brad's screen lights.
43 A A text from an unknown number.
44 A ¶ ON PHONE: "dont let him in the room. hes not who u think."
45 D BRAD (reading, pale): Oh.
46 D BRETT: What?
47 D BRAD: Nothing. Spam.
48 D BRETT: Let me see.
49 D BRAD: No.
50 D BRETT: Brad.
51 A ¶ They grapple for the phone, Brett lunges, Brad ducks, the bouquet goes flying and lands in the fish tank.
52 A The fish, for the first time, looks interested.
53 D BRENDA (sighs): That's a four-hundred-dollar fish.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05198_1.json
### SCENE s05198_1 | INT. NEW BEGINNINGS FERTILITY CLINIC - EXAM ROOM - CONTINUOUS
Detected names (may be incomplete or contain aliases): MARA, DR. VANCE, BRAD, BRETT, BRENDA
1 A ¶ Mara on the table, paper gown.
2 A Dr. Vance snaps on gloves, humming.
3 A On the counter, a vial with a handwritten label.
4 A She squints at it.
5 D MARA: That says Feldman.
6 D DR. VANCE: It does.
7 D MARA: Which Feldman?
8 D DR. VANCE (gently): The one who's paying.
9 A ¶ A pause.
10 A Mara sits up.
11 D MARA: Doctor, which one is it?
12 D DR. VANCE (his smile never moves): Does it matter?
13 A ¶ The lights flicker.
14 A Out in the waiting room, the fish tank bubbles.
15 A Brenda, alone at her desk, quietly locks the front door.
16 A ¶ This is the last time anyone will ask that question.
17 A ¶ Brad and Brett burst through the inner door, panting, the soggy bouquet still in Brett's hand.
18 D BRAD: Mara, don't let him
19 D BRETT: Honey, it's not what
20 D DR. VANCE (overlapping): Gentlemen, please, this is a sterile environment.
21 D MARA (overlapping): Which of you?
22 D BRAD (overlapping): It wasn't me!
23 D BRETT (overlapping): It was supposed to be a gift!
24 A ¶ Mara looks at one, then the other, then at the vial, then at Dr. Vance, who has quietly slipped a hand into his coat pocket.
25 A A cold gleam of metal.
26 D DR. VANCE: Everyone stay very calm.
27 D BRENDA [O.S.] (through the door): Doctor, your two o'clock is here!
28 D DR. VANCE (without turning): Reschedule her.
29 D BRENDA [O.S.]: She says she's the police.
30 A ¶ Everyone freezes.
31 A Dr. Vance's smile finally falls off his face.
32 A Brett holds up the soggy bouquet like a white flag.
33 D BRETT (whispering): Can I go now?

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05199.json
### SCENE s05199 | INT. NGUYEN KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): KIT, JO
1 A ¶ Dark.
2 A A phone flashlight swings across the room and lands on a fridge covered in magnets.
3 A A neighbor's dog BARKS outside.
4 A Through the window, two teenagers on a trampoline in the next yard use their phones as lanterns, shrieking with laughter.
5 A ¶ Kit, 40s, pyjama bottoms and a "World's Okayest Coach" mug, stumbles in and sets down a laptop on the counter.
6 A It's at 4 percent.
7 A Behind him Jo, 40s, his wife, in a team fleece, carries a stack of whiteboards under one arm and a bag of frozen peas under the other.
8 A ¶ The laptop lights up.
9 A Slack, glowing, on screen.
10 A ¶ ON SCREEN: #coaches-all - Marcus: "Anyone got the lineup for Saturday? lights are out here too lol"
11 A ¶ ON SCREEN: #coaches-all - Priya: "Kit?? you're on the sheet"
12 A ¶ He winces.
13 A Taps a key.
14 A The screen dims.
15 D KIT: Battery saver. Battery saver.
16 D JO: You said you'd print it.
17 D KIT: The printer needs power. It's literally in the name.
18 A ¶ She slaps the peas onto the counter, sets down the boards, and starts scribbling in the dark with a marker that doesn't work.
19 A He holds the phone light over her shoulder while she draws Xs and Os and arrows pointing off the edge of the board.
20 A He frowns, she frowns, and the dog outside barks again, and the teenagers on the trampoline shout something about a penalty.
21 D JO: Left wing's a problem.
22 D KIT: Left wing's a Tuesday problem. It's a Saturday problem now.
23 A ¶ She turns, glares, and holds out the marker.
24 A He takes it.
25 A Tries it on the board.
26 A Nothing.
27 A Shakes it.
28 A Tries again.
29 A Nothing.
30 D JO: Give it here.
31 A ¶ She snatches it back.
32 A Bites the cap.
33 A Presses hard.
34 A A faint grey line appears, then a clean black one, bold as a gunshot.
35 D JO [CONT'D]: There.
36 D KIT: You intimidated a marker.
37 D JO: It knows who's in charge.
38 A ¶ The laptop blinks.
39 A 2 percent.
40 A ¶ ON SCREEN: #coaches-all - Marcus: "ok we're going with 4-4-2 unless someone objects"
41 A ¶ ON SCREEN: #coaches-all - Priya: "Kit?? last chance"
42 A ¶ Kit lunges.
43 A Jo lunges.
44 A Their hands collide on the keyboard and the machine makes a tiny, dying chirp.
45 A ¶ ON SCREEN: #coaches-all - Kit: "4-3-3 left wing Danny, subs on at 60"
46 A ¶ Send.
47 A The screen goes black.
48 A ¶ Silence.
49 A The darkness settles.
50 A Even the dog stops.
51 D KIT: Was that right?
52 D JO: No.
53 A ¶ He laughs.
54 A She laughs.
55 A The fridge shudders on, the overhead light blinks to life, and every magnet on the door sings a little as the compressor catches.
56 A ¶ They squint at each other in the sudden brightness.
57 A He's holding the marker.
58 A She's holding the peas.
59 D KIT: Dinner?
60 D JO: Peas.
61 D KIT: Peas.
