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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01771.json
### SCENE s01771 | INT. MOBILE CLINIC - CONVERTED BOOKMOBILE - DAY
Detected names (may be incomplete or contain aliases): HALVORSEN LUNDQVIST, NURSE PIA OKONKWO, ELIAS BRANDT, DOROTA BRANDT
1 A ¶ A city bookmobile gutted and refitted.
2 A Shelves that once held paperbacks now hold gauze and saline.
3 A A folding exam bed.
4 A A hand-lettered sign: CLOSE THE DOOR SOFTLY.
5 A ¶ DR. HALVORSEN LUNDQVIST, fifties, tired, sits on a stool with a blood pressure cuff in her lap.
6 A NURSE PIA OKONKWO, thirties, wipes down a tray.
7 A ELIAS BRANDT, seventy, shirtless to the waist, sits on the exam bed.
8 A His wife MRS. DOROTA BRANDT, also seventy, stands by the door with her purse held in front of her like a shield.
9 A ¶ Elias grips the bed's edge.
10 A Dr. Lundqvist and Pia look at the monitor at the same time.
11 A Pia reaches for the cuff.
12 A The doctor reaches for it too.
13 A Their hands meet on it and they both stop.
14 D DR. LUNDQVIST: Go ahead.
15 A ¶ Pia wraps the cuff around Elias's arm.
16 A Dorota takes a step in.
17 A Elias lifts his free hand to stop her.
18 D ELIAS: I'm fine.
19 D DOROTA: You're grey.
20 D ELIAS: It's the light in here.
21 D DR. LUNDQVIST: It's not the light, Mr. Brandt.
22 A ¶ Pia pumps the bulb.
23 A Everyone watches the needle fall.
24 D PIA: One-sixty over ninety-eight.
25 D DR. LUNDQVIST: That's better than it was twenty minutes ago.
26 D DOROTA: What was it twenty minutes ago?
27 D DR. LUNDQVIST: One-ninety over a hundred and ten.
28 A ¶ Dorota sits on the bench seat under the window.
29 A She puts her purse on her knees and then, after a moment, on the floor.
30 D DOROTA: He wouldn't come in. For three days, he wouldn't come in.
31 D ELIAS: I had the garden.
32 D DOROTA: You had a chest like a drum and you had the garden.
33 D ELIAS: Dorota.
34 D DOROTA: Don't Dorota me in front of the nurse.
35 D PIA: It's all right, Mrs. Brandt.
36 D DOROTA: It isn't, though. I'm sorry. It isn't.
37 D DR. LUNDQVIST: Mr. Brandt, how long have you had the pain in your left arm?
38 D ELIAS: Since Tuesday.
39 D DOROTA: Since Sunday.
40 D ELIAS: Since Sunday. Fine.
41 D DR. LUNDQVIST: And the shortness of breath?
42 D ELIAS: When I climb the stairs.
43 D DOROTA: When he climbs anything.
44 D PIA: We're going to do an ECG. It's painless. Some stickers on your chest.
45 D ELIAS: I know what an ECG is.
46 D PIA: I know you know.
47 A ¶ Pia opens a drawer and peels three electrodes from a sheet.
48 A Elias watches her hands.
49 D ELIAS: My brother had one of those.
50 D DR. LUNDQVIST: What happened?
51 D ELIAS: He's dead.
52 D DOROTA: Elias.
53 D ELIAS: You asked.
54 D DR. LUNDQVIST: I did. I'm sorry for the loss. When was this?
55 D ELIAS: Nineteen ninety-one. Heart attack at fifty-four. He was cutting a hedge.
56 D DR. LUNDQVIST: That is useful for me to know. I'm going to write it down.
57 A ¶ Dr. Lundqvist writes.
58 A Pia presses the stickers to his chest, left, right, low.
59 D PIA: Cold?
60 D ELIAS: Everything's cold.
61 D DOROTA: The heater's broken. They said Thursday.
62 D PIA: They said Thursday last Thursday.
63 D DOROTA: They did.
64 A ¶ A small laugh passes through the bookmobile, the first.
65 A It dies quickly.
66 D DR. LUNDQVIST: Okay. Lie back for me.
67 A ¶ Elias lies back.
68 A Pia clips the leads on.
69 A The monitor draws a line, then another, then a rhythm.
70 A ¶ Dr. Lundqvist and Pia both lean toward the screen.
71 A They look at each other.
72 A Neither speaks.
73 A Dr. Lundqvist exhales through her nose.
74 D DR. LUNDQVIST [CONT'D]: No ST elevation.
75 D PIA: No.
76 D DR. LUNDQVIST: That's good.
77 D DOROTA: What does that mean?
78 D DR. LUNDQVIST: It means he is not having a heart attack right now. It does not mean he did not have a small one on Sunday.
79 D DOROTA: Can you tell?
80 D DR. LUNDQVIST: We can draw blood. It takes about an hour at the hospital.
81 D ELIAS: I'm not going to the hospital.
82 D DOROTA: You are going to the hospital.
83 D ELIAS: Dorota.
84 D DOROTA: You are going to the hospital and I am going to sit in the plastic chair and hold your coat.
85 D ELIAS: Who'll feed the cat?
86 D DOROTA: The cat has eaten since nineteen eighty-eight without you.
87 D ELIAS: That's a lie. I fed it this morning.
88 D DOROTA: That is what I mean.
89 A ¶ Elias laughs, once, and winces, and presses a hand flat to his sternum.
90 D DR. LUNDQVIST: Stop laughing. Pia, aspirin, please. Chewed, not swallowed.
91 D PIA: Right away.
92 D DR. LUNDQVIST: And call the ambulance. Tell them stable, chest pain, seventy-year-old male.
93 A ¶ Pia takes a phone from the shelf.
94 A Dorota rises, goes to the bed, and puts her hand over her husband's hand on his chest.
95 A He looks at the ceiling.
96 A She looks at the monitor.
97 D DR. LUNDQVIST [CONT'D]: Mrs. Brandt, he'll be fine for the next little while. I'd like you to sit with him.
98 D DOROTA: I am sitting with him.
99 D DR. LUNDQVIST: Yes. Thank you.
100 D PIA (into phone): Hello? Yes. Mobile clinic on Ostrow Street, by the bakery.
101 D ELIAS (to Dorota): Don't let them touch my garden tools.
102 D DOROTA: Nobody wants your garden tools.
103 D ELIAS: The good trowel.
104 D DOROTA: I will guard the trowel with my life.
105 A ¶ Pia hangs up and hands Elias an aspirin.
106 A He puts it in his mouth and grimaces.
107 A The monitor goes on drawing its line.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00380.json
### SCENE s00380 | INT. TOLL BOOTH - HIGHWAY 9 - 3 A.M.
Detected names (may be incomplete or contain aliases): LEILANI KANE
1 A ¶ A glass box at the end of nowhere.
2 A Sodium light.
3 A A fan turns in one corner.
4 A Rain on the roof.
5 A ¶ LEILANI KANE, 50, in a reflective vest, sits with a voice recorder pressed to her mouth and a thermos steaming at her elbow.
6 D LEILANI (to recorder): Day eleven. I said I'd do this every night. I'm doing it.
7 A ¶ She sips.
8 A Sets the thermos down.
9 D LEILANI [CONT'D] (to recorder): Nobody has come through since two-forty. A truck, then nothing. I counted the trucks on the first night, you know. Eighty-one. Last night, nine. They've found another road. That's what I would do. I'd find another road.
10 A ¶ She clicks the recorder off.
11 A Clicks it on.
12 D LEILANI [CONT'D] (to recorder): Play back.
13 A ¶ She presses a button.
14 A A scratchy sound.
15 D LEILANI [V.O.] (recorded): This is Leilani Kane. If you are hearing this, either I am dead or I got brave. Probably I am neither. Probably I am in the booth with a thermos telling the dark what it already knows.
16 A ¶ She laughs, and it hurts.
17 A She stops the playback.
18 D LEILANI (to recorder): That's from March. March, Leilani. You were so sure you'd be somewhere else.
19 A ¶ A pause.
20 A Rain.
21 D LEILANI [CONT'D] (to recorder): I'm going to say a thing now. I haven't said it to anyone. When the state sold the road to the company, I thought, fine, fine, I'll stay on. They'll need somebody. And there was a letter, and the letter said my position had been eliminated, effective the first, and I read it, and I folded it, and I came to work. Seven weeks. Nobody noticed. Nobody has paid me since August.
22 A ¶ She looks at the barrier arm, a red-and-white bar pointing at the sky.
23 D LEILANI [CONT'D] (to recorder): I keep the arm up. Isn't that something? There's nothing to stop. There's no one to stop. I keep the arm up so they'll know the road is still open.
24 A ¶ She switches off the fan.
25 A In the sudden quiet she holds the recorder in both hands.
26 D LEILANI [CONT'D] (to recorder): If you're hearing this, I'm going home now. I'm going to leave the lights on. If a car comes through, it can have the road.
27 A ¶ She stands.
28 A Hangs up her vest.
29 A Leaves the recorder on the counter, red light glowing.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00129.json
### SCENE s00129 | INT. ST. CASIMIR LANES - CONVERTED CHURCH - NIGHT
Detected names (may be incomplete or contain aliases): ROSALIND PARKHURST, DEACON PARKHURST, NADINE FOLASADE, GUS TREVELYAN
1 A ¶ A nave of oiled maple lanes where the pews once stood.
2 A Stained glass glows behind the pin decks.
3 A The league scoreboard hangs where the crucifix used to be.
4 A ¶ Four men and women sit at the last lane in the last frame of the season.
5 A No one is cheering.
6 A The place is nearly empty.
7 A ¶ ROSALIND PARKHURST, 60s, cardigan, bowling shoes polished like church shoes, wipes her ball with a towel.
8 A Beside her, her son DEACON PARKHURST, 30s, sits with his elbows on his knees, staring at his phone without reading it.
9 A ¶ Across the lane sit their opponents.
10 A NADINE FOLASADE, 40s, braids tied back, rolls her shoulders.
11 A Next to her, an old man in a bowling shirt, GUS TREVELYAN, 70s, tape on two fingers, a cigarette unlit between them.
12 A ¶ The pin deck resets with a long mechanical groan.
13 D ROSALIND: Your father used to say the pins knew.
14 D DEACON: Knew what?
15 D ROSALIND: Whether you wanted it.
16 A ¶ Deacon puts the phone away.
17 D DEACON: Mom, it's a Tuesday.
18 D ROSALIND: It's the Tuesday.
19 A ¶ Nadine gets up.
20 A Walks to the ball return.
21 A Picks up a green ball.
22 A Weighs it.
23 A Puts it back.
24 A Picks up a blue one.
25 D NADINE: You boys have been on our lane too long.
26 D GUS: Twelve years.
27 D NADINE: Twelve years, and nobody has said a word.
28 D GUS: Because there was nothing to say.
29 D NADINE: There was plenty.
30 A ¶ Deacon looks at his mother.
31 A Rosalind does not look at him.
32 D DEACON: Is there something I should know?
33 D ROSALIND: Take your turn.
34 D DEACON: I'm asking.
35 D ROSALIND: Take your turn, Deacon.
36 A ¶ He stands.
37 A Picks his ball.
38 A Steps to the line.
39 A Pauses.
40 D DEACON [CONT'D]: Dad used to bring us here Sundays.
41 D GUS: Your dad used to bring a lot of people here Sundays.
42 A ¶ Deacon turns.
43 A Nadine has gone very still.
44 A Rosalind has put the towel down.
45 D ROSALIND: Gus.
46 D GUS: Might as well. Twelve years is long enough.
47 D NADINE: Don't.
48 D GUS: Your father had two families, son. This lane was where they met without knowing.
49 D DEACON (quiet): Say that again.
50 D GUS: I've been polite twelve years.
51 D NADINE: Gus, shut your mouth.
52 D ROSALIND: He's not lying.
53 A ¶ Deacon looks at the ball in his hands.
54 A His grip tightens.
55 A The leather creaks.
56 D DEACON: Nadine?
57 D NADINE (evenly): Your father was my father too.
58 A ¶ A long silence.
59 A Somewhere in the rafters a pigeon shifts.
60 A ¶ Deacon sets the ball down.
61 A It rolls, slow, down the lane, crosses the arrows, kisses the head pin, and drops all ten.
62 A ¶ Nobody looks at the scoreboard.
63 D ROSALIND: Strike.
64 D NADINE (not smiling): Your game.
65 D DEACON (turning to Gus): Why tonight?
66 D GUS: Because it's the last frame, son. After tonight there's no lane to share.
67 A ¶ Deacon walks away from the line.
68 A He passes his mother.
69 A He passes Nadine.
70 A He stops at the end of the lane, where the stained glass throws red light across his hands.
71 A ¶ He picks up the blue ball.
72 A Holds it out to Nadine.
73 D DEACON: Roll one.
74 A ¶ She hesitates.
75 A Then she takes it.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01556_0.json
### SCENE s01556_0 | EXT. HOMESTEAD - DAWN
Detected names (may be incomplete or contain aliases): NELL TREMAINE-ADEYEMI
1 A ¶ A sod house on an empty plain.
2 A Wind combs the grass.
3 A A broken wagon wheel leans against the door.
4 A A lone windmill creaks.
5 A ¶ NELL TREMAINE-ADEYEMI, 40s, stands in the yard in a man's coat and a faded bonnet.
6 A A rifle rests against the fence post beside her.
7 A A saddlebag, half packed, lies in the dirt at her feet.
8 A She does not look at the road.
9 A ¶ She crouches.
10 A Pulls a letter from her pocket.
11 A Smooths it against her knee.
12 D NELL [V.O.] (reading, as if written): "Dear Nell. By the time you read this, I'll be in Cheyenne."
13 A ¶ She lowers the letter.
14 A Looks at the horizon.
15 A Raises it again.
16 D NELL [V.O., CONT'D]: "The claim is yours. The mule, too. I never did like him."
17 A ¶ A small, dry breath, almost a laugh.
18 A She tucks the letter into her coat.
19 A ¶ She stands.
20 A Walks to the well.
21 A Lowers the bucket on its rope.
22 A The rope creaks.
23 A She draws it up slowly, hand over hand, never taking her eyes off the plain.
24 A ¶ Drinks from her cupped palm.
25 A Wipes her chin.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00295.json
### SCENE s00295 | INT. PARKING STRUCTURE ROOFTOP - DAWN
Detected names (may be incomplete or contain aliases): LEONIE ASANTEWAA-VOGEL, RETTA, OKOYE-BLOOM
1 A ¶ A rental van.
2 A Two women lean on its bumper.
3 A Between them, a gym bag.
4 A ¶ LEONIE ASANTEWAA-VOGEL (40s, bomber jacket) lights a cigarette.
5 A Her hands are steady.
6 A ¶ MARGUERETTA "RETTA" OKOYE-BLOOM (30s, hoodie) watches the sun come up over a gray city.
7 A ¶ Leonie offers the pack.
8 A Retta shakes her head.
9 D LEONIE: You hungry?
10 D RETTA: No.
11 D LEONIE: You should eat.
12 D RETTA: Later.
13 A ¶ Leonie drags on the cigarette.
14 A Looks at the bag.
15 D LEONIE: She wanted it split three ways.
16 D RETTA: She wanted a lot of things.
17 D LEONIE: She called me last night.
18 D RETTA: She called me, too.
19 A ¶ Silence.
20 A A pigeon lands on the van roof.
21 A Walks the length of it.
22 D LEONIE: She said she was sorry.
23 D RETTA: She said that to me, too.
24 A ¶ Leonie flicks the ash.
25 A Retta stares at her shoes.
26 D LEONIE: Nobody's coming.
27 D RETTA: I know.
28 D LEONIE: So we could just go.
29 D RETTA: We could.
30 A ¶ Neither moves.
31 A The pigeon takes off.
32 A ¶ Retta bends.
33 A Unzips the bag a few inches.
34 A Looks.
35 A Zips it shut.
36 A She hands the strap to Leonie, and Leonie takes it, and for a moment neither lets go.
37 D LEONIE: Which way?
38 D RETTA: You pick.
39 A ¶ Leonie opens the van door.
40 A Retta gets in.
41 A Leonie follows.
42 A They sit with the engine off and the sun on the windshield.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01417.json
### SCENE s01417 | INT. LONG-TERM CARE HOME - PRIVATE ROOM - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): GUS, WELLINGTON-ABARA, VOICE
1 A ¶ A single bed, neatly made.
2 A A rocking chair by the window.
3 A A tray of untouched dinner on the side table.
4 A Photographs crowd the dresser: a wedding, a fishing trip, a toddler on a pony.
5 A The window frames a brick wall and a sliver of sky.
6 A ¶ AUGUSTUS "GUS" WELLINGTON-ABARA, 80s, in a cardigan and slippers, sits in the rocking chair with a landline phone in his lap.
7 A The cord stretches to the wall.
8 A He stares at the receiver as if it might speak first.
9 A ¶ He lifts it.
10 A Dials slowly, one number at a time, with a shaky forefinger.
11 A It rings.
12 D VOICE [V.O.] (over phone, young, brisk): Hello?
13 D GUS: Hello. Is this Daniel?
14 D VOICE [V.O.] (over phone): Who's calling?
15 D GUS: It's your father.
16 A ¶ A long pause on the line.
17 A Gus watches the brick wall.
18 A A pigeon lands on the sill, ruffles its feathers, takes off again.
19 D VOICE [V.O.] (over phone): Dad. It's been a while.
20 D GUS: It has.
21 D VOICE [V.O.] (over phone): Is something wrong?
22 D GUS: No. I just wanted to hear your voice.
23 A ¶ Silence.
24 A Gus sets the dinner tray aside, lifts the cover.
25 A Cold peas.
26 A He puts the cover back.
27 D VOICE [V.O.] (over phone): I can't talk long. I'm at work.
28 D GUS: Of course. I understand.
29 D VOICE [V.O.] (over phone): Is the staff treating you well?
30 D GUS: They are very kind.
31 D VOICE [V.O.] (over phone): Good.
32 A ¶ Gus rocks.
33 A The chair creaks.
34 A He runs his thumb along the phone cord, back and forth.
35 D GUS: I found your old baseball glove.
36 D VOICE [V.O.] (over phone): You kept that?
37 D GUS: In the closet. It still smells like leather.
38 D VOICE [V.O.] (over phone): God. I haven't thought about that in years.
39 D GUS: You pitched a shutout in it. Nineteen eighty-four.
40 D VOICE [V.O.] (over phone): Eighty-five.
41 D GUS: Eighty-five.
42 A ¶ He smiles, and his eyes go to the dresser, to a faded photograph of a small boy in an oversized cap, scowling at the camera.
43 A He picks up the frame, wipes the glass with his sleeve.
44 D VOICE [V.O.] (over phone): Dad, I really have to go.
45 D GUS: Yes. Of course. Thank you for answering.
46 D VOICE [V.O.] (over phone): I'll call you Sunday.
47 D GUS: I'd like that.
48 A ¶ The line clicks.
49 A He holds the receiver against his ear a moment longer, listening to the empty hum.
50 A ¶ He puts the phone down gently on its cradle.
51 A Sets the photograph back on the dresser, straightens it.
52 A He crosses to the window and stands there, hands clasped behind his back, looking at the brick.
53 A ¶ After a while, he sits again in the rocking chair, takes the cold fork from the tray, and begins, slowly, to eat the peas.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00778.json
### SCENE s00778 | EXT. MUNICIPAL POOL - TEN-METER DIVING TOWER - NIGHT
Detected names (may be incomplete or contain aliases): IZZY PAREDES, WYATT BRODERICK, SOLENNE ADEYEMI-CHANG
1 A ¶ Chain-link fence.
2 A Empty bleachers.
3 A The water is black, lit only by one emergency lamp.
4 A Three teens climb the concrete tower.
5 A ¶ IZZY PAREDES, 16, steps onto the platform first.
6 A Hoodie, bare feet, a bag of stolen fireworks.
7 A ¶ WYATT BRODERICK, 17, follows, taller, breathing hard from the stairs.
8 A ¶ SOLENNE ADEYEMI-CHANG, 16, brings up the rear with her phone light off.
9 A She keeps one hand on the rail.
10 D IZZY: Look at that. Whole town.
11 D WYATT: It's a parking lot and a Taco Bell.
12 D IZZY: It's our parking lot.
13 D SOLENNE: Can we just go back down?
14 D IZZY: You said you wanted to see it.
15 D SOLENNE: From the bottom.
16 A ¶ Wyatt laughs.
17 A Solenne glares.
18 D WYATT: You jumped from the five last summer.
19 D SOLENNE: I fell from the five.
20 A ¶ Izzy digs in the bag.
21 A Pulls out a firework.
22 A Holds it up like a trophy.
23 D IZZY: Tonight we send Mr. Hendricks off.
24 D WYATT: He's not dead, Izzy. He retired.
25 D IZZY: Same thing. Teachers don't get better.
26 A ¶ She flicks a lighter.
27 A Nothing.
28 A Again.
29 A Nothing.
30 D WYATT: Give it.
31 D IZZY: No.
32 D WYATT: You'll blow your hand off.
33 D IZZY: You'll blow your hand off.
34 A ¶ They tussle.
35 A The firework drops.
36 A Rolls.
37 A Solenne dives and catches it with both hands.
38 D SOLENNE: Stop it! Both of you!
39 A ¶ They freeze.
40 A Wyatt's hand still on Izzy's sleeve.
41 A ¶ Quiet.
42 A Wind on the water.
43 A Far below, a car passes.
44 D WYATT (softer): Sorry.
45 D IZZY: Yeah.
46 A ¶ They let go.
47 A Izzy sits on the edge, legs over.
48 A Wyatt sits beside her.
49 A Solenne stays upright.
50 D SOLENNE: Is it weird that I'm going to miss this place?
51 D WYATT: It's a pool.
52 D SOLENNE: It's where we learned to swim.
53 D IZZY: I learned to swim in a bathtub.
54 D WYATT: That's not swimming. That's drowning slowly.
55 A ¶ Izzy shoves him.
56 A He shoves back.
57 A They both nearly tip.
58 A Solenne yanks both by the hoods.
59 D SOLENNE: Okay! No dying tonight. We have prom.
60 D IZZY: Prom is stupid.
61 D SOLENNE: Prom is the last thing before everything.
62 A ¶ Silence.
63 A Izzy picks at the platform's grit.
64 D IZZY: My mom's moving us to Tucson.
65 D WYATT: When?
66 D IZZY: August.
67 D WYATT: You didn't tell us.
68 D IZZY: I'm telling you now.
69 A ¶ Solenne sits.
70 A All three in a row.
71 A Legs dangling.
72 D SOLENNE: We could jump.
73 D WYATT: We could.
74 D IZZY: All three?
75 D SOLENNE: All three.
76 A ¶ They stand.
77 A Hold hands.
78 A Breathe.
79 D WYATT: On three.
80 D IZZY: On one. Three is a trap.
81 D SOLENNE: One!
82 A ¶ They leap together, screaming, into the black.
83 A ¶ SPLASH.
84 A Then laughter.
85 A Echoing.
86 A ¶ Overhead, a floodlight clicks on.
87 A A flashlight beam sweeps the water.
88 A ¶ A whistle shrieks from the fence line.
89 A ¶ The three scramble out, shrieking, dripping, stumbling over each other, laughing so hard they can barely climb the fence.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00291.json
### SCENE s00291 | INT. SERVICE ELEVATOR - GRAND HOTEL - DAY
Detected names (may be incomplete or contain aliases): BERNADETTE QUARLES-IBARRA, FERDIE, ACHTERBERG-LOWE, KWABENA OSEI-DRUMMOND, LOTTIE FAIRCHILD-NAKAMURA
1 A ¶ A brass box, six feet square, smelling of lilies.
2 A In the center, a four-tier wedding cake on a rolling cart, wrapped in plastic like a fragile patient.
3 A ¶ BERNADETTE QUARLES-IBARRA (50s, caterer's apron, clipboard) presses herself against the left wall.
4 A FERDINAND "FERDIE" ACHTERBERG-LOWE (60s, tuxedo, bow tie slightly crooked) holds the right.
5 A KWABENA OSEI-DRUMMOND (20s, bellhop pillbox hat) guards the buttons.
6 A LOTTIE FAIRCHILD-NAKAMURA (8, flower girl, wreath of daisies) sits cross-legged on the floor beside the cart, eating a rose off the top tier.
7 A ¶ The elevator lurches.
8 A Everyone freezes.
9 A The cake sways.
10 A Bernadette's clipboard drops.
11 A Ferdie's hand shoots out to steady the cart.
12 A Kwabena stabs three buttons at once.
13 A Lottie licks icing off her wrist.
14 A The lift hums, hangs, hums again.
15 D FERDIE: Is it stuck?
16 D BERNADETTE: It is not stuck.
17 D KWABENA: It's thinking.
18 D LOTTIE: Can I have the other rose?
19 D BERNADETTE: No.
20 D FERDIE: Yes.
21 D KWABENA: Sir, with respect, it's her cake.
22 D FERDIE: It's my daughter's cake, and my granddaughter's rose.
23 D BERNADETTE: That rose is sixty dollars.
24 D LOTTIE: It tastes like soap.
25 A ¶ The elevator drops six inches.
26 A The top tier slides.
27 A Four hands lunge.
28 A The cake settles.
29 A Nobody breathes.
30 A Ferdie wipes a smear of frosting from his lapel and holds out his hand, palm up, to Bernadette.
31 A She looks at it.
32 A Then she hands him a plastic fork.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01079_0.json
### SCENE s01079_0 | INT. LIGHTHOUSE KEEPER'S COTTAGE - KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): TAMSIN HOLLOWAY, RADIO
1 A ¶ A storm presses at the windows.
2 A A single oil lamp.
3 A A cracked radio on the sill.
4 A Bread dough rises under a damp cloth.
5 A ¶ TAMSIN HOLLOWAY, 15, wool sweater, sleeves pushed up, kneads at the table.
6 A She is alone.
7 A She talks to the dough.
8 D TAMSIN: You'll be fine. You're a good loaf. Don't listen to the wind.
9 A ¶ The radio hisses.
10 A She wipes her hands on her apron and turns the dial.
11 D RADIO [V.O.] (crackling): ...coast guard advises all small craft... gale force... off Marrow Point...
12 A ¶ She turns it up.
13 A Frowns.
14 D TAMSIN: That's us.
15 A ¶ She checks the clock.
16 A 9:40.
17 A Pulls on a coat.
18 A Picks up the lamp.
19 D TAMSIN [CONT'D]: Dad said stay inside. Dad also said the light never fails.
20 A ¶ She opens the back door.
21 A Wind slams it wide.
22 A She shoves it closed, hard, then tries again, shoulder first.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01836_0.json
### SCENE s01836_0 | EXT. TELEGRAPH OFFICE - HIGH DESERT TOWN - DAY
Detected names (may be incomplete or contain aliases): 
1 A ¶ A single-street town of sun-bleached boards.
2 A A telegraph pole leans over the roof of a squat office.
3 A Heat shimmers above the road.
4 A The hitching rail holds one horse and nothing else.
