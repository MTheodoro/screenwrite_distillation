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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05000.json
### SCENE s05000 | INT. COMMUNITY GYM - EVENING
Detected names (may be incomplete or contain aliases): PRIYA OKAFOR, COACH TOBIAS REEVE, HOODIE GUY, DESMOND
1 A ¶ Fluorescent hum.
2 A A half-empty weight room.
3 A PRIYA OKAFOR, 17, wraps her hands at the mirror.
4 A COACH TOBIAS REEVE, 50s, stacks plates.
5 A In the corner, a HOODIE GUY sits on a bench, hood up, not lifting.
6 D COACH REEVE (to the room): Ten minutes, people. Anyone who isn't warm in ten minutes is a spectator, and I don't coach spectators.
7 D PRIYA (under her breath): Nobody's here but us.
8 A ¶ She tightens the tape.
9 A The HOODIE GUY doesn't move.
10 D PRIYA [CONT'D] (to Reeve): Coach, who is that? He's been sitting there since I came in.
11 D COACH REEVE: Ask him.
12 D PRIYA: I'm asking you.
13 D COACH REEVE (beat): Then I'd say he's someone waiting for the right moment. Which, at his age, is the only kind of training that matters. You wait, you watch, you tell yourself you're not ready. And then one day the whole building is empty and you're still on the bench.
14 A ¶ The front door SLAMS.
15 A Priya flinches.
16 A The HOODIE GUY stands.
17 D HOODIE GUY (pushing back his hood): Priya. It's me.
18 D PRIYA (beat): Desmond?
19 D DESMOND: Two years, Pri. Two years and you didn't even look.
20 D PRIYA: You told everyone you were moving. You told me you were done with all of this.
21 D DESMOND: I said a lot of things.
22 A ¶ A phone BUZZES on the bench.
23 A He ignores it.
24 D PRIYA (to the room, loud): Does anyone else know about this? Coach? Because it feels like everyone knew but me.
25 D COACH REEVE (quietly): I knew he'd come back. I didn't know when.
26 D PRIYA (muttering): Unbelievable.
27 D DESMOND: Say it to me. Whatever it is. I'd rather you hit me than go quiet.
28 A ¶ Silence.
29 A A weight plate RATTLES on its stand.
30 D PRIYA (beat): I was going to hit you. I practiced it. Every night I stood in front of that mirror and I practiced what I'd do, and now you're standing here with your stupid hood and I just want to know if you ate.
31 D DESMOND (laughing, wet-eyed): I ate.
32 D COACH REEVE: Right. Wraps on, both of you. Ten minutes.
33 A ¶ Priya tosses Desmond a roll of tape.
34 A He catches it.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05001.json
### SCENE s05001 | INT. NIGHT BUS - MOVING - NIGHT
Detected names (may be incomplete or contain aliases): JUNO MARCHETTI, SAM OKONKWO-REID, BERNIE KOWALCZYK
1 A ¶ Route 9, last run.
2 A Sodium light strobes through rain-streaked windows.
3 A Three passengers and a driver nobody can see.
4 A ¶ CLOSE ON a gym bag on the back seat.
5 A Zipper half open.
6 A Cash.
7 A ¶ JUNO MARCHETTI, 30s, rumpled blazer, sits clutching that bag like a toddler.
8 A Beside the aisle, SAM OKONKWO-REID, late 20s, they/them, buzzcut and a vintage bomber jacket, eats cold fries and watches Juno with a grin.
9 A Across from them, BERNIE KOWALCZYK, 60s, big coat, bigger moustache, sleeps.
10 D SAM: You've been gripping that bag since Harlow Street. Are you carrying a baby or a bomb?
11 D JUNO: It's a gym bag.
12 D SAM: Sweetheart, nobody sweats that much.
13 A ¶ Juno laughs too loud.
14 A Bernie stirs.
15 A Both of them freeze, then relax when he snores again.
16 D JUNO (whispering): Look I need you to stop being charming at me. It's not helping
17 D SAM: Charming is my only setting. They gave me one setting at the factory.
18 A ¶ ANGLE ON the bus mirror.
19 A The driver's eyes, flat, watching.
20 A ¶ The bus LURCHES over a pothole.
21 A The bag tips.
22 A A brick of cash slides into the aisle.
23 A Juno dives, Sam dives, they crack heads, the bag goes sideways, fries everywhere.
24 D JUNO: Ow! Ow, ow
25 D SAM: That was my face!
26 D BERNIE (eyes closed): Kids. Keep it down. Some of us have been robbed before and we're trying to rest.
27 A ¶ Silence.
28 A Juno and Sam stare at him.
29 D BERNIE [CONT'D] (opening one eye): Relax. I'm retired. I don't care whose money it is.
30 A ¶ INSERT - Sam's phone screen: a news alert.
31 A BANK ON FERRIS AVE ROBBED, TWO SUSPECTS AT LARGE.
32 A ¶ Sam turns the screen to Juno slowly.
33 A Juno exhales, sinks into the seat.
34 D JUNO: Okay. Okay. Plan B.
35 D SAM: We had a plan A?
36 D JUNO: Barely.
37 A ¶ BACK TO SCENE.
38 A The bus slows.
39 A Blue light flickers ahead on the wet road.
40 A This is the last time the three of them will be calm.
41 D SAM (grinning anyway): Well. It's been a pleasure being your accomplice.
42 A ¶ Bernie pats the bag, closes his eye again.
43 D BERNIE: Wake me at the courthouse.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05002.json
### SCENE s05002 | INT. VILLAGE HALL - FUNERAL RECEPTION - AFTERNOON
Detected names (may be incomplete or contain aliases): WAITER, TEENAGERS, HARRIET PEMBERTON, GILES PEMBERTON, THIN WOMAN, TEENAGER, NELL PEMBERTON, MARGARET, ^NELL
1 A ¶ Rain on the tin roof.
2 A Grey light through tall windows.
3 A Trestle tables, sandwiches curling at the corners, an urn of tea gone lukewarm.
4 A ¶ A WAITER circles with a tray of sherry.
5 A Two TEENAGERS in borrowed black hover by the biscuits.
6 A A spaniel sleeps under a table.
7 A ¶ HARRIET PEMBERTON, 50s, pearls and a brittle smile, pours tea.
8 A Her brother GILES PEMBERTON, 50s, tweed and tired, takes a cup.
9 D GILES (accepting the tea, not drinking it): Rather a good turnout, don't you think?
10 D HARRIET (straightening a doily): Rather. Considering Dad didn't speak to half of them.
11 A ¶ Outside, the rain thickens.
12 A A gutter gurgles.
13 D GILES (glancing at the spaniel): Whose dog is that?
14 D HARRIET (shrugging): The vicar's, I should think. Or nobody's.
15 A ¶ A THIN WOMAN in a dark mac stands by the door, dripping, a bag clutched to her chest.
16 A She looks at the room as one looks at a station timetable.
17 D GILES (low, to Harriet): Do you know her?
18 D HARRIET (not looking): Wasn't she at the church? Back pew?
19 A ¶ Thunder, distant, politely.
20 A ¶ THE WOMAN crosses the room.
21 A She stops in front of Harriet.
22 D THE WOMAN: I'm sorry to intrude. I did think about not coming.
23 D HARRIET (a small cold smile): Not at all. Do have a sandwich.
24 D THE WOMAN (taking one, holding it): That's kind.
25 A ¶ A TEENAGER giggles.
26 A The other elbows him.
27 A The waiter passes with sherry; the woman declines.
28 A ¶ NELL PEMBERTON, 20s, Harriet's daughter, arrives with an umbrella, shaking it dry.
29 D NELL (to Giles): Uncle G, the car park's flooded. Mum, who's this?
30 D HARRIET (brightly): We were just about to find out.
31 D THE WOMAN (setting the sandwich down): My name is Margaret Dunne. Your father and I were together for nineteen years.
32 A ¶ Silence.
33 A The urn ticks as it cools.
34 A The spaniel sighs.
35 D GILES (a little laugh that isn't one): I think there's been some mistake.
36 D HARRIET (very calm): Nineteen years. Dad was married to Mum for thirty-one.
37 D MARGARET (opening her bag): Yes. That's rather the difficulty.
38 D GILES (standing very still): Harriet.
39 D HARRIET (still pouring, tea overflowing the cup): Giles.
40 D ^NELL (stepping between them): Stop it, both of you, you're being appalling.
41 D GILES (to Nell, gentle): Darling, go and find your cousins.
42 D NELL (refusing): No.
43 A ¶ Margaret takes out an envelope and holds it out.
44 A Nobody takes it.
45 D MARGARET: He asked me to give this to you, Harriet. After. Not before. He was very specific.
46 D HARRIET (finally setting the pot down): That does sound like Dad.
47 A ¶ She takes the envelope.
48 A Turns it over.
49 A Her thumb finds the seal.
50 D HARRIET [CONT'D] (quiet): Giles, do be a love and see that Mrs Dunne has a proper cup of tea.
51 D GILES (beat): Of course.
52 A ¶ He pours.
53 A His hands shake.
54 A Rain on the roof, steady now.
55 D HARRIET (opening the envelope): Nineteen years. And not one word.
56 A ¶ She reads.
57 A Her face doesn't change.
58 A The teenagers have stopped giggling.
59 D NELL: Mum?
60 D HARRIET (folding the page): He's left her the house.
61 A ¶ The spaniel lifts its head.
62 A The waiter, discreetly, withdraws with his tray.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05003.json
### SCENE s05003 | EXT. FISHING BOAT - DECK - DAWN
Detected names (may be incomplete or contain aliases): SEA WREN, MAYA TORRES, LUCAS TORRES, INSERT - PHONE SCREEN, JESS, THE CREW
1 A ¶ Grey sea.
2 A Grey sky.
3 A A trawler, the SEA WREN, rolling slow.
4 A Diesel.
5 A Salt.
6 A ¶ MAYA TORRES, 16, hoodie soaked, sits on an overturned crate.
7 A She holds her phone up.
8 A One bar.
9 A Flickering.
10 A ¶ Her father's boat.
11 A Her first trip out.
12 A Her last.
13 A ¶ LUCAS TORRES, 40s, at the winch, doesn't look at her.
14 A He hauls a net.
15 A She films him.
16 D MAYA: Say hi to the internet, Dad.
17 D LUCAS: No.
18 A ¶ She lowers the phone.
19 A Checks it.
20 A Notifications stacking.
21 D INSERT - PHONE SCREEN: ON PHONE: jess_wells: where r u ON PHONE: jess_wells: ur literally everywhere rn ON PHONE: jess_wells: maya answer
22 A ¶ Maya's thumb hovers.
23 A Wind.
24 A A gull.
25 D MAYA (typing, murmuring): Busy.
26 A ¶ The phone BUZZES.
27 A A call.
28 A She takes it.
29 D JESS [V.O.] (tinny, breathless): Oh my god, finally. Have you seen it?
30 D MAYA: I'm on a boat, Jess.
31 D JESS [V.O.]: Your video has two million views. Two. Million.
32 A ¶ Maya looks at Lucas.
33 A He is hauling.
34 A He didn't hear.
35 D MAYA (low): Which video?
36 D JESS [V.O.]: The one from the dock. Your dad. Yelling at the inspector.
37 A ¶ Silence.
38 A Maya's stomach drops.
39 A She turns her back to him.
40 D MAYA: I deleted that.
41 D JESS [V.O.]: Somebody reposted it. They're calling him the angriest fisherman in America. There's like a hashtag.
42 A ¶ Waves.
43 A Rope creaking.
44 D LUCAS (not turning): Who's on the phone?
45 D MAYA: Nobody.
46 D LUCAS: Maya.
47 A ¶ She ends the call.
48 A Phone dark.
49 A Heart loud.
50 A ¶ THE CREW OF THE NEIGHBOURING BOAT lines the rail, forty yards off.
51 A Phones raised.
52 A They are filming Lucas.
53 A They cheer.
54 D THE CREW (in unison, waving): Angry Fisherman! Angry Fisherman!
55 A ¶ Lucas stops.
56 A Turns.
57 A Looks at them.
58 A Then at her.
59 A ¶ Nothing.
60 D LUCAS (quiet): How long have you known?
61 D MAYA: Since the dock. I posted it. I was going to take it down.
62 D LUCAS: You posted it.
63 D MAYA: It wasn't supposed to blow up. I just thought, people should see what they do to us.
64 A ¶ He wipes his hands on his coat.
65 A Slowly.
66 A He walks toward her.
67 A She stands.
68 A He stops an arm's length away.
69 A ¶ His face.
70 A Unreadable.
71 A ¶ Rain begins.
72 A Soft, then not.
73 D LUCAS: Give me the phone.
74 A ¶ She doesn't.
75 D LUCAS [CONT'D]: Maya. The phone.
76 A ¶ She holds it out.
77 A He takes it.
78 A Looks at the screen.
79 A Her face on it.
80 A His face on it.
81 A Two million.
82 A ¶ Wind.
83 A ¶ He holds it over the rail.
84 D MAYA: Dad, don't.
85 D LUCAS (beat): Show me how to make it say something else.
86 A ¶ She stares.
87 A Then, shaking, she steps beside him, and takes the phone back.
88 D THE CREW (distant, still chanting): Angry Fisherman! Angry Fisherman!
89 A ¶ Maya raises the phone.
90 A Turns the camera on both of them.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05004.json
### SCENE s05004 | INT. SUBURBAN KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): WINIFRED LAWSON, ARTHUR LAWSON, RIVER LAWSON, DOLORES FINCH, THE CHILDREN, INSERT - PHONE
1 A ¶ Dark.
2 A Candles.
3 A A power cut.
4 A Pots on the stove, stone cold.
5 A ¶ WINIFRED LAWSON, 60s, stirs a bowl of soup by torchlight.
6 A Her husband ARTHUR LAWSON, 60s, kneels at the fuse box.
7 A Their kid RIVER LAWSON, 20s, they/them, scrolls a dead phone.
8 A Their neighbour DOLORES FINCH, 70s, has wandered in with a casserole.
9 A ¶ THE CHILDREN, three nephews in matching pyjamas, sit on the counter in a row.
10 D ARTHUR: It isn't the fuse. It isn't the breaker, it isn't the meter, it is the entire street, and I have told the electricity company four times that the grid in this neighbourhood has been held together by optimism since 1987.
11 D WINIFRED: Arthur.
12 D ARTHUR (beat): I'm saying that when we moved here, there was a man who came round and said, don't worry about the cables, they're very modern. Modern! They've got moss on them.
13 D DOLORES: Mine are fine.
14 D ARTHUR: Yours is on the other transformer, Dolores. You're a different civilisation.
15 A ¶ River holds up the black phone.
16 D RIVER: Dead.
17 D WINIFRED: Then talk to us. We're the next best thing.
18 D THE CHILDREN (in unison): We're hungry.
19 A ¶ Candle flicker.
20 A A fridge hum, absent.
21 A ¶ River's phone lights up, wakes, flickers.
22 A 1 percent.
23 D INSERT - PHONE: ON PHONE: mum: are u ok?? power's out everywhere
24 D RIVER (smiling): Mum's texting. From the next room.
25 D WINIFRED: She is not.
26 A ¶ River turns the screen round.
27 A Winifred reads.
28 A Laughs.
29 A The lights snap on.
30 A Everyone blinks.
31 A Arthur stands there with a screwdriver, triumphant, wrong.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05005.json
### SCENE s05005 | INT. BACK ROOM OF A BAR - NIGHT
Detected names (may be incomplete or contain aliases): ODALYS, JONAH, TAMSIN, RAFE
1 A ¶ low light, mismatched chairs. a long table. four people who have only ever typed to each other.
2 A ¶ jonah kasprzak, 30s, in a faded army jacket, gets there first. he turns a phone over and over in his hand.
3 A ¶ CLOSE ON the phone. a group chat. the name at the top reads: BRAVO 6 (reunion?).
4 A ¶ odalys pierce, 40, walks in wearing scrubs and a heavy coat. she stops. looks at him.
5 D ODALYS: you're boots.
6 D JONAH: you're mama bear.
7 D ODALYS: yeah. oh my god. hi.
8 A ¶ they hug, awkward, too long. behind them, tamsin, 20s, with a shaved head and a trembling duffel, hovers in the doorway.
9 D TAMSIN: is this the. is this where
10 D JONAH: yeah come in, come in
11 D TAMSIN: okay. cool. i'm tams. i'm. yeah.
12 D ODALYS: tams! the kid who sent the ramen pics
13 D TAMSIN: that was in basic. that was a long time ago
14 A ¶ ANGLE ON the door. rafe oyelaran, 50, sixty pounds heavier than any photo, leans on a cane. nobody says anything.
15 D RAFE: well. don't everybody get up.
16 D JONAH (standing): sarge
17 D RAFE: jonah. sit down. i'm not your sarge in a bar.
18 D ODALYS: rafe, you look
19 D RAFE: like hell. yes.
20 A ¶ everyone laughs, a little too hard. chairs scrape. nobody quite sits.
21 D TAMSIN: i didn't think i'd come. i almost didn't. i was in the car for like an hour
22 D ODALYS: we all did that
23 D JONAH: i drove past twice
24 D RAFE: three times.
25 D JONAH: you were here?
26 D RAFE: i was in the lot.
27 A ¶ this is the first time in nine years all four of them are in a room. none of them knows how to say what they mean.
28 D ODALYS: so. who's ordering. because i need a drink and i need somebody to say something about the chat
29 D TAMSIN: the chat
30 D RAFE: the thing in march
31 D JONAH (quietly): we don't have to
32 D ODALYS: yes we do. jonah. that's the whole reason
33 A ¶ a long pause. a glass clinks somewhere in the bar. tamsin sits first, then the others.
34 D TAMSIN: okay. so. i'll start

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05006.json
### SCENE s05006 | INT. SUBWAY CAR - MOVING - DAY
Detected names (may be incomplete or contain aliases): KENJI ABARA, JAMAL STRICKLAND, COMMUTERS, DEE ABARA
1 A ¶ ON CAMERA: handheld, shaky.
2 A Rush hour.
3 A Bodies.
4 A Breath.
5 A ¶ KENJI ABARA, 17, holds a camcorder at chest height.
6 A Narrating low to his lens.
7 D KENJI (whispering, to camera): Day three. Same car. Same guy.
8 A ¶ PAN to JAMAL STRICKLAND, 40s, suit, earbuds in, pressed against the doors.
9 A Not looking at anyone.
10 A ¶ Crowd.
11 D KENJI [CONT'D] (still whispering): He gets on at Fulton. Every day. Stands right there. Takes up the whole pole.
12 A ¶ Train lurches.
13 A Squeal of brakes.
14 A ¶ THE COMMUTERS shift as one, a wall of coats and elbows.
15 A A bag swings into Kenji.
16 D COMMUTERS (muttering): Sorry. Excuse me. Mind the door.
17 A ¶ Silence.
18 A ¶ Kenji lowers the camera.
19 A Raises it again, slightly higher.
20 D KENJI (to Jamal): Hey. Your hand's on my sister's bag.
21 D JAMAL (pulling an earbud, flat): What?
22 D KENJI (louder): Her bag. You've been touching it for three stops.
23 A ¶ Nothing.
24 A The car goes quiet around them.
25 A Someone looks at their shoes.
26 A ¶ A young woman, DEE ABARA, 15, Kenji's sister, edges forward, clutching the strap against her chest.
27 A She doesn't look up.
28 D JAMAL (smiling thinly, to the car): Kid's confused. Crowded train. It happens.
29 A ¶ Kenji's grip on the camera whitens.
30 A The light on the lens glows red.
31 D KENJI (very quiet): Say it again. Into the camera.
32 A ¶ Jamal's smile drops.
33 A He lunges for the lens, Kenji pulls back, Dee shoves between them, a briefcase hits the floor, THE COMMUTERS surge back, the pole shakes, a stranger shouts for the emergency cord.
34 A ¶ The camera tumbles.
35 A Spins.
36 A The floor.
37 A Shoes.
38 A Black.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05007.json
### SCENE s05007 | INT. NEOSPORT ARENA - FINALS STAGE - NIGHT
Detected names (may be incomplete or contain aliases): HEAD REFEREE LIANG PETROV, TECHNICAL DIRECTOR AMARA SOYINKA, ADJUDICATOR FELIX BRANDT, PANEL, HOODIE PLAYER, DANTE
1 A ¶ Banks of LED.
2 A Ten thousand seats, a hush.
3 A Six chairs on a raised dais, six headsets.
4 A Stage lights low.
5 A Overhead, a countdown reads 00:04.
6 A ¶ The match has been decided.
7 A Aftermath: the winners hold position, the losers don't.
8 A ¶ HEAD REFEREE LIANG PETROV, 40s, headset and clipboard, stands at the bench with TECHNICAL DIRECTOR AMARA SOYINKA, 30s, laptop on a cart, and ADJUDICATOR FELIX BRANDT, 50s, steel-rimmed glasses and a rulebook.
9 A ¶ CLOSE ON the main screen.
10 A The final frame freezes: a character mid-leap, a glitch rippling across its sprite.
11 D PETROV (into radio): Hold the broadcast. All stations hold. Judges to the dais.
12 D SOYINKA (typing): I've got packet loss on station four. Latency spiked at one-forty-two. That's not their connection. That's us.
13 D BRANDT: Rule eleven point three. Interference by hardware fault voids the round if verified within sixty seconds. We are at fifty.
14 A ¶ THE ARBITERS' PANEL, five officials in grey blazers, file up the steps as one, tablets raised, faces unreadable.
15 A ¶ ANGLE ON station four.
16 A A competitor, a HOODIE PLAYER, lowers his hands from the keyboard and sits perfectly still, hood up, eyes down.
17 D PETROV: Who's on four?
18 D SOYINKA: Registered as Ghost_Rider. Real name's not on the sheet. He signed in under a handle.
19 D BRANDT (sharp): Under a handle? That's a violation. Players must register legal names before qualifiers.
20 A ¶ THE HOODIE PLAYER pulls back his hood.
21 A Late 20s, calm, a faint grin.
22 A DANTE VASQUEZ.
23 D DANTE (into mic, to the crowd): Dante Vasquez. Since you asked.
24 A ¶ Murmur.
25 A The ten thousand lean in.
26 A Soyinka turns her screen to Petrov.
27 A Brandt flips pages, Petrov unclips his radio, the panel exchanges glances, and the countdown ticks to zero.
28 D SOYINKA (quiet): It's not a fault, Liang. It's a patch. Someone pushed a build during the round. The signature is his.
29 A ¶ WE SEE Dante rise, step off the dais, and hand the referee a drive.
30 D DANTE: It's all on there. Every match. Every edit. I wanted somebody to ask.
31 D PETROV (taking it, exhaling): Right. Everybody sit down. We're going to do this by the book.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05009.json
### SCENE s05009 | EXT. BORDER CHECKPOINT - DUSTY ROAD - DAY
Detected names (may be incomplete or contain aliases): MARSHAL ELIAS CROWE, ROSALIND BEAUMONT, SHERIFF
1 A ¶ A single wooden gate.
2 A A booth.
3 A A flag that has given up.
4 A Heat shimmer over the gravel.
5 A ¶ MARSHAL ELIAS CROWE, 50s, dust on his hat, leans out of the booth.
6 A Before him, on a mule, sits ROSALIND BEAUMONT, 40s, rifle across her lap, face like closed shutters.
7 D CROWE: Papers.
8 D ROSALIND: Ain't got none.
9 D CROWE: Then you ain't crossing.
10 D ROSALIND (beat): You know what the last man who said that to me said after?
11 D CROWE: I'd wager nothing.
12 D ROSALIND: Nothing. That's right. Funny how that works.
13 A ¶ Crowe's phone RINGS in the booth.
14 A An old landline, cord and all.
15 A He lifts it.
16 D CROWE (into receiver): Checkpoint.
17 D SHERIFF [V.O.] (crackling): Elias, hold her. Don't let her through. She's got a warrant out in three counties.
18 A ¶ Crowe looks at Rosalind.
19 A She hasn't moved.
20 A He lowers the receiver slowly.
21 D CROWE (to her): Sheriff says I should hold you.
22 D ROSALIND (softly): And what do you say?
23 D CROWE (long beat): I say it's hot. And I'm tired. And in thirty years nobody ever asked me what I wanted. Not once.
24 A ¶ He hangs up the phone.
25 A Opens the gate.
26 D CROWE [CONT'D]: Go on. Before I think better of it.
27 D ROSALIND (touching her hat): You'll regret it.
28 D CROWE: Probably. That's what the gate's for.
29 A ¶ She clicks her tongue.
30 A The mule crosses.
31 A Dust rises.
32 A Crowe watches until she is a speck, then picks the receiver up again, and tells the sheriff she never came.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05010.json
### SCENE s05010 | INT. PIZZA PLACE - DAY
Detected names (may be incomplete or contain aliases): PRIYA, JAYDEN, MOONBEAM, DEVON
1 D PRIYA (checking her phone, then the door): ok its 3:02 and nobody from the chat has shown up. this is so cringe
2 D JAYDEN (sliding into the booth, hood up): Priya? Its me. Jayden. "xX_sk8rboi_Xx" lol
3 D PRIYA (staring): you're my HALF BROTHER?? you told me you were 19 and lived in Denver
4 D JAYDEN (wincing as a waiter drops a tray nearby): I said I was nineteen in the chat because everybody there was older okay
5 D PRIYA (typing furious, thumbs flying): im telling mom right now
6 D MOONBEAM [V.O.] (from Priya's phone speaker, tinny): Wait wait dont, I'm literally outside the window, look left
7 D PRIYA (turning, a dog on the sidewalk pulling its owner past the glass): omg that's Moonbeam?? they're like twelve??
8 D MOONBEAM (they push through the door, backpack sliding off one shoulder): Fifteen. And they/them thank you. Hi. Please dont yell I brought snacks
9 D PRIYA (shouting, two teenagers at the next table turning to stare): I AM NOT YELLING
10 D JAYDEN (shouting over her): YOU ARE LITERALLY YELLING
11 D DEVON (arriving breathless, helmet still on): Sorry im late guys the bus driver was a nightmare, wait. Why is everyone here a kid
12 D PRIYA (laughing despite herself, wiping her eyes): because we are ALL kids Devon. every single one of us
13 D MOONBEAM (sitting, pushing the snacks to the middle of the table): Ok so group chat is real now. Who's getting the garlic knots
14 D JAYDEN (grinning, finally pulling his hood down): Me. I'm paying. Peace offering
