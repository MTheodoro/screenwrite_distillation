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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05119.json
### SCENE s05119 | INT. SUBWAY CAR - MORNING RUSH
Detected names (may be incomplete or contain aliases): PIP, ZED, MABEL
1 A ¶ Packed.
2 A Elbows.
3 A Umbrellas.
4 A A tuba case.
5 A ¶ Fluorescent lights flicker green.
6 A The train rumbles through the dark.
7 A ¶ PIP, 10, a girl in a yellow raincoat, clutches a strap too high for her.
8 A She hums.
9 A ¶ At her feet, a lumpy backpack with a zipper mouth.
10 A It wiggles.
11 D ZED [V.O.] (muffled, from the bag): Pip. Pip. Are we there?
12 D PIP (whispering): Not yet, Zed.
13 D ZED: You said five stops. I counted nine.
14 A ¶ Pip's phone buzzes.
15 A ¶ ON PHONE: mom: where r u
16 A ¶ ON PHONE: mom: ANSWER ME
17 A ¶ Pip stares at it.
18 A She taps the screen.
19 A ¶ ON PHONE: no signal
20 A ¶ Her phone.
21 A Dead.
22 A ¶ Across the aisle, MABEL, 70s, in a purple scarf, knits something long and glittering.
23 A She watches Pip over her glasses.
24 A ¶ Silence.
25 A ¶ The train slows.
26 A Brakes squeal.
27 D MABEL: That's a loud bag, dear.
28 D PIP: It's, um. A toy.
29 D MABEL: Toys don't ask how many stops.
30 A ¶ The lights go out.
31 A ¶ Darkness.
32 A Nothing.
33 A ¶ Then a soft blue glow.
34 A The backpack unzips by itself.
35 A ¶ Zed climbs out.
36 A A little round robot, one antenna bent.
37 D ZED: Hello, Mabel.
38 D MABEL: Hello, Zed. You're late.
39 A ¶ Pip's jaw drops.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05120.json
### SCENE s05120 | INT. HOLLOWAY VETERINARY CLINIC - NIGHT
Detected names (may be incomplete or contain aliases): CAL BRANNIGAN, COLE CALLOWAY, MARSHAL TUCKER
1 A ¶ Rain on the tin roof.
2 A One lamp burning.
3 A ¶ ANGLE ON the front desk.
4 A A cracked leather saddle bag sits on it, open.
5 A ¶ CAL BRANNIGAN, 50s, sun-cured and slow, stands over a sleeping hound on the steel exam table.
6 A He strokes its ear with two rough fingers.
7 D CAL: There. Easy, old man.
8 A ¶ He hums.
9 A Something half-remembered.
10 A ¶ The back door CREAKS.
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
30 A ¶ CLOSE ON the cup, steam curling.
31 D COLE: Remember when we pulled that mare out of the Platte?
32 D CAL: Spring of '09.
33 D COLE: She had a foal in her.
34 D CAL: Dead already.
35 D COLE: You cried anyway.
36 A ¶ Cal almost laughs.
37 A He looks at the hound instead.
38 D CAL: I was young.
39 D COLE: You were thirty-eight.
40 A ¶ A beat.
41 A The rain softens.
42 A Nothing but the clock.
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
53 A ¶ A leather pouch inside.
54 A Tied with red twine.
55 A ¶ BACK TO SCENE
56 A ¶ Cole doesn't touch it.
57 A He just looks.
58 D COLE: Heavier than it ought to be.
59 D CAL: Feed money.
60 D COLE: Is that right.
61 D CAL: That's right.
62 A ¶ Cole smiles.
63 A Cal does not.
64 A ¶ A phone RINGS on the wall.
65 A Old black rotary.
66 A Neither man moves.
67 A It rings five times, six.
68 D CAL [CONT'D]: Let it ring.
69 D COLE: Could be somebody's sick animal.
70 D CAL: Could be.
71 A ¶ He lifts the receiver anyway.
72 A Holds it between them so both can hear.
73 D MARSHAL TUCKER [V.O.] (tinny, through the line): Cal? That you? Got a rider heading your way. Cole Calloway. Armed, and he ain't alone.
74 A ¶ Silence.
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
85 A Slow.
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
106 A ¶ Rain.
107 A Nothing else.
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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05121.json
### SCENE s05121 | INT. COUNTY PAROLE OFFICE - DAY
Detected names (may be incomplete or contain aliases): OFFICER DANA REYES, ELI COLLINS, ELLIS, SGT. HAYES, NORA
1 A ¶ Grey light through blinds.
2 A Rain on the window.
3 A A heater ticks in the corner.
4 A ¶ OFFICER DANA REYES sits behind a metal desk.
5 A In front of her, ELI COLLINS, 30, in a thrift-store jacket, hands flat on his knees.
6 A His younger brother ELLIS stands behind the chair, too close.
7 A ¶ The wall clock hums.
8 A The rain gets harder.
9 D DANA: Eli, you missed two check-ins.
10 D ELI: Bus broke down. I told the desk.
11 D DANA: The desk says nothing.
12 D ELLIS: He was with me. We walked.
13 D DANA: Ellis, you're not on the list for this meeting.
14 D ELLIS: I'm family.
15 D ELI: Ellis. Sit.
16 A ¶ Ellis doesn't.
17 A A cheap phone BUZZES on the desk.
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
39 A The heater ticks.
40 A ¶ Eli looks at the phone like it's a person.
41 D ELI [CONT'D]: Sergeant. Eleven men walked out of that valley because I did what I did. You remember the number. You signed the paper.
42 D SGT. HAYES [V.O.]: I remember.
43 D ELI: Then you know what I'm asking for isn't mercy. It's a pen.
44 D SGT. HAYES [V.O.]: The pen isn't mine to lift.
45 D ELI: Then whose is it?
46 A ¶ Nobody answers.
47 A Rain.
48 A The line hisses.
49 A ¶ Ellis kicks the chair over.
50 A It CRASHES against the wall.
51 A ¶ Dana is on her feet.
52 A Nora backs into the hallway.
53 D ELLIS (shaking): Fifteen months of this. Fifteen months of signing in like a dog.
54 D ELI: Ellis.
55 D DANA: That's enough. Both of you.
56 A ¶ Eli puts a hand on his brother's chest.
57 A Ellis is breathing hard.
58 D ELI (soft): Go wait outside.
59 A ¶ Ellis goes.
60 A The door shuts.
61 A The blinds rattle.
62 A ¶ Eli sets the chair upright.
63 A Sits.
64 A Folds his hands.
65 D ELI [CONT'D]: Sorry about that. What do you need me to sign?

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05122.json
### SCENE s05122 | INT. NORTHSIDE RECORDING STUDIO - NIGHT
Detected names (may be incomplete or contain aliases): TIM, TOM, ENGINEER
1 A ¶ A small vocal booth.
2 A Foam on the walls.
3 A A red light is on.
4 A ¶ TIM, 28, boxer, stands at the microphone.
5 A He wears a hooded training jacket.
6 A His hands are wrapped.
7 A He holds a paper with lyrics, but he does not look at it.
8 A ¶ Behind the glass, his trainer TOM, 55, sits next to a young ENGINEER with big headphones.
9 A A sleepy bulldog lies under the mixing desk.
10 D ENGINEER (through speaker): Okay. Take four.
11 A ¶ Tim nods.
12 A Music starts, a heavy beat.
13 A He opens his mouth.
14 A Nothing comes.
15 A ¶ The music stops.
16 D TOM (through speaker): It's okay. Again.
17 D TIM: Again.
18 A ¶ The beat starts.
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
34 A The bulldog lifts its head, then lays it down again.
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
52 A ¶ The beat.
53 A Tim closes his eyes.
54 D TIM (quietly, to the beat): He is waiting at the door. He is waiting for me.
55 A ¶ Tom looks down at his own hands.
56 D TIM [CONT'D] (a little louder): Let him wait.
57 A ¶ The Engineer stops pretending to be busy.
58 A He is looking at Tim now.
59 A ¶ The red light stays on.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05123.json
### SCENE s05123 | INT. NEONARENA GAMING TOURNAMENT - FINALS STAGE - DAY
Detected names (may be incomplete or contain aliases): ZED, LIA, OMAR, PRIYA
1 A ¶ Lights flash purple and green.
2 A A crowd of four thousand is screaming.
3 A Somewhere a commentator shouts about a "clutch play" and the huge screen above shows a frozen game of dragons, and under the stage a smoke machine is making too much smoke, and in the booth ZED the team captain, LIA the sniper, OMAR the coach and PRIYA the substitute are already sitting down in matching orange jerseys.
4 D ZED (adjusting headset, whispering to himself): Okay okay okay we are fine
5 D LIA (to the group, loudly): Everybody is hearing me? Mic check one two.
6 D OMAR (thumbs up, chewing a protein bar): Loud and clear
7 D PRIYA (to Lia, pointing at her screen): You have the wrong crosshair she told us yesterday
8 D LIA (not looking away from the screen): She is not the coach. Omar is the coach
9 D OMAR (mouth full): Thank you Lia
10 A ¶ The crowd roars.
11 A Cold air from the vents.
12 A A drone camera hovers near the booth like a very expensive fly.
13 D ZED (to the whole team, hands shaking): Strategy is simple. We go left. Always left.
14 D PRIYA (raising hand): Left was how we lost the semi final
15 D ZED (ignoring her, muttering): Left is good. Left is good.
16 D OMAR (to Zed, gently): Maybe also some right
17 D ZED (snapping): No right!
18 A ¶ The announcer calls their team name.
19 A It is mispronounced.
20 A The audience laughs.
21 D LIA (to herself, quiet): Please not the live stream. Please not my mother watching
22 D PRIYA (to Lia, leaning over): Your mother is watching. She is in the third row with a sign
23 D LIA (horrified, covering her face): She has a sign
24 D OMAR (to everyone, standing): Okay listen. One game. Nobody dies. We are here for the free pizza anyway
25 D ZED (to Omar, hopeful): Is there pizza?
26 D OMAR (pointing off): There is always pizza
27 D PRIYA (softly, to no one): Then I am already winning
28 A ¶ The countdown begins.
29 A A big red three.
30 A Two.
31 D LIA (eyes narrowed, whispering): Left.
32 D ZED (whispering back): Left.
33 D PRIYA (under her breath): Right.
34 A ¶ One.
35 A A horn BLARES.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05124.json
### SCENE s05124 | INT. VERTEX ARENA - BACKSTAGE CORRIDOR - NIGHT
Detected names (may be incomplete or contain aliases): NELL, ROOK, NEIL, BRAM
1 A ¶ Humming fluorescents.
2 A Distant crowd.
3 A A muffled roar.
4 A ¶ Then nothing.
5 A ¶ NELL, 30s, hoodie, lanyard that says STAFF.
6 A She walks fast.
7 A Doesn't look up.
8 A ¶ Behind her, the sound of a door.
9 A Latching.
10 A ¶ She stops.
11 A ¶ Silence.
12 A ¶ Her earpiece CRACKLES.
13 D ROOK [V.O.]: Nell. Status.
14 D NELL (low): Corridor C. Nobody.
15 D ROOK [V.O.]: Then why are you whispering.
16 A ¶ She doesn't answer.
17 A Listens.
18 A ¶ Dripping.
19 A Somewhere, a pipe.
20 A ¶ Nothing else.
21 D NELL (beat): Something's wrong.
22 D ROOK [V.O.]: Vault room is thirty metres. Keep walking.
23 A ¶ She keeps walking.
24 A Her shoes squeak on the concrete.
25 A ¶ Squeak.
26 A Squeak.
27 A ¶ Stop.
28 A ¶ The squeaking continues.
29 A Two steps behind her.
30 A ¶ She turns.
31 A ¶ Empty corridor.
32 A A door, slightly open.
33 A ¶ A shadow moves inside it.
34 D NELL (barely audible): Neil?
35 A ¶ NEIL, 30s, same hoodie, steps out.
36 A Sweating.
37 A Holding a drill case.
38 D NEIL: You're late.
39 D NELL: You're early.
40 D NEIL (tight): I'm here since six. I was in the ceiling.
41 A ¶ She stares at him.
42 A He is smiling.
43 A It's wrong.
44 D ROOK [V.O.]: Nell? Who are you talking to?
45 D NELL (into the earpiece): Neil's here.
46 D ROOK [V.O.] (pause): Neil is in the van.
47 A ¶ Silence.
48 A ¶ Her phone.
49 A Dead.
50 A ¶ She looks up.
51 A Neil's smile fades.
52 A He glances at something behind her.
53 A ¶ A heavy footstep.
54 A ¶ A guard.
55 A BRAM, 40s, radio on his belt, hand resting on a holster.
56 A He stands under the exit sign.
57 D BRAM: Evening.
58 A ¶ Nobody moves.
59 A ¶ The overhead light FLICKERS.
60 D BRAM [CONT'D]: Which one of you is not on my list?
61 A ¶ The light dies.
62 A ¶ Darkness.
63 A ¶ A zipper.
64 A A click.
65 A ¶ Then one gunshot.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05125.json
### SCENE s05125 | INT. STATE PAROLE OFFICE - DAY
Detected names (may be incomplete or contain aliases): GLORIA PRUITT, HARLAN, WENDELL, PETE, FRANK
1 D GLORIA [V.O.]: Eleven years running parolees. You learn that nobody ever comes in on time, and nobody ever leaves happy.
2 A ¶ GLORIA PRUITT, 50s, reading glasses on a chain, sits at a desk stacked with folders.
3 A A wall clock TICKS.
4 A A fluorescent tube BUZZES.
5 A ¶ HARLAN, 40s, orange tie, sits across from her holding a paper cup.
6 A Next to him, WENDELL, 40s, wears the same tie.
7 D GLORIA: You two are brothers?
8 D HARLAN: Twins.
9 D WENDELL: Fraternal.
10 D GLORIA [V.O.]: Both released the same morning. Both wearing the same tie. The state, in its wisdom, issued one tie per cell.
11 A ¶ PETE, the clerk, sticks his head in the door.
12 D PETE: Ms. Pruitt, your husband's on line two.
13 A ¶ The phone on her desk BUZZES.
14 A She picks it up.
15 D FRANK [V.O.] (on the phone): Did you eat? You didn't eat.
16 D GLORIA: I'm working, Frank.
17 A ¶ Harlan sips from the cup.
18 A It is empty.
19 A He keeps sipping anyway.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05127.json
### SCENE s05127 | INT. GRAND MERIDIAN BALLROOM - WEDDING AFTERPARTY - NIGHT
Detected names (may be incomplete or contain aliases): DJ, WAITER, TEENAGERS, LEO MARCHETTI, LEON
1 A ¶ Warm lights.
2 A A DJ plays a slow song.
3 A A WAITER carries a tray of champagne past two TEENAGERS filming each other on their phones.
4 A ¶ LEO MARCHETTI, 30s, tux, bow tie crooked, stands near the cake table.
5 A Sharp eyes.
6 A Dead calm.
7 A ¶ In his ear, a tiny flesh-coloured bud.
8 D LEO (murmuring, lips barely moving): In position. Cake table, east side.
9 D LEON [V.O.] (in earpiece, from the van): Copy. Vault camera loops in ninety seconds. On my mark.
10 D LEO: Say again?
11 D LEON [V.O.]: Ninety. Eighty-nine.
12 A ¶ CLOSE ON Leo's wrist.
13 A A silver watch.
14 A Seconds sweeping.
15 A ¶ ANGLE ON the bride, laughing, her diamond choker catching the light.
16 A ¶ WE SEE a tall man in grey, her uncle, drift toward the exit.
17 D LEO: Subject moving. Door three.
18 D LEON [V.O.]: Hold position. Do not engage.
19 A ¶ A dog barks.
20 A A small terrier in a bow tie trots past the cake.
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
31 A ¶ BACK TO SCENE
32 A ¶ The song swells.
33 A The bride lifts her hands to the crowd.
34 D LEON [V.O., CONT'D]: Now.
35 A ¶ The lights die.
36 A ¶ Darkness.
37 A Screams, then laughter, then a drumroll from the DJ.
38 A ¶ Leo is already gone.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05128.json
### SCENE s05128 | INT. NIGHT BUS 47 - MOVING - NIGHT
Detected names (may be incomplete or contain aliases): ASH, BRI, TEO, DRIVER
1 A ¶ Rain streaks the windows.
2 A Sodium lights slide past.
3 A The engine drones.
4 A ¶ ASH, 17, headphones around their neck, sits in the back seat with their phone glowing in both hands.
5 A Across the aisle, BRI, 17, hoodie up, chews her thumbnail.
6 A Two rows ahead, TEO, 18, stares out at nothing.
7 A ¶ Up front, the DRIVER hums along to the radio.
8 A A sleeping TEENAGER in a school jacket leans against the window.
9 A ¶ Dead quiet, until Bri's phone BUZZES.
10 A ¶ INSERT - PHONE SCREEN
11 A ¶ "mom: where r u. answer me."
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
28 A ¶ The bus brakes hard.
29 A Everyone lurches.
30 A The sleeping teenager wakes, looks around, falls back asleep.
31 A ¶ This is the last time the three of them will be calm.
32 D ASH (softer): Hey. I don't think we're on the route anymore.
33 D BRI: What?
34 D ASH: Look. That's the river. We should be going north.
35 A ¶ Teo stands.
36 A The Driver's humming has stopped.
37 A ¶ The radio dies.
38 A Only the rain.
39 A ¶ The Driver's eyes find them in the rear-view mirror.
40 D DRIVER: Sit down, kids.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05130.json
### SCENE s05130 | INT. MOVING VAN - CARGO BAY - DAY
Detected names (may be incomplete or contain aliases): SYNERGY OFFSITE, HOLLIS, PRIYA, TOMASZ, WENDELL, DISPATCH, RADIO, MARISOL
1 A ¶ Rain hammers the roof.
2 A A gray Tuesday smears past the rear windows.
3 A ¶ CLOSE ON a laminated sign taped to a wardrobe box: "SYNERGY OFFSITE - DO NOT SHAKE."
4 D HOLLIS (checking a clipboard, not looking up): Team, this relocation is a growth opportunity. Please buckle your milk crates.
5 D PRIYA (wedged between two filing cabinets, whispering): Hollis, we're sitting on the furniture of a company that fired us this morning.
6 A ¶ ANGLE ON the dashboard window behind the cab partition.
7 A The wipers beat like a slow pulse.
8 D TOMASZ (gripping the wheel, eyes on the mirror): I'm just the driver. Nobody told me the passengers were also the cargo.
9 A ¶ WE SEE a ceiling bulb swinging, throwing light across six tired faces.
10 D WENDELL (slowly peeling the tape off his own mouth): I signed the NDA. I did not sign the van.
11 D DISPATCH [V.O.] (over the radio, crackling): Unit Nine, confirm headcount. HR says there should be zero employees aboard.
12 A ¶ INSERT - THE RADIO, its red light pulsing.
13 D MARISOL (standing, knocking over a lamp): Zero? Hollis, what did you tell them about us?
14 D HOLLIS (clutching the clipboard to his chest): I told them we were assets.
15 A ¶ BACK TO SCENE
16 D PRIYA (shoving the cabinet, screaming): Assets get depreciated!
17 D TOMASZ (slamming the brakes, everything crashing forward): Everybody out! Now!
