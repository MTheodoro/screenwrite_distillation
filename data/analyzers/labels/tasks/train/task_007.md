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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05083.json
### SCENE s05083 | INT. NORTHSIDE REC CENTER - GYM - DAY
Detected names (may be incomplete or contain aliases): PRIYA, JAYLEN, ADEYEMI
1 A ¶ Squeaking sneakers.
2 A A basketball THUMPS.
3 A Nobody's playing.
4 A ¶ Jaylen, 17, sits on the bottom bleacher, thumbs flying.
5 A Group chat blowing up.
6 A Forty-one unread.
7 A ¶ Her phone.
8 A Buzzing.
9 A Buzzing.
10 A Buzzing.
11 A ¶ Priya, 17, tall, hoodie up, drops next to him.
12 D PRIYA: So are you gonna answer or just let it ghost you?
13 D JAYLEN: It's the whole team. They all saw the screenshot.
14 D PRIYA: Delete the app.
15 D JAYLEN: Priya, my lawyer said don't delete anything. Literal evidence.
16 D PRIYA: Your lawyer's like twenty-six and she says "no cap."
17 D JAYLEN: She's good, though.
18 A ¶ Silence.
19 A The ball rolls across the floor and stops.
20 A ¶ Nothing.
21 A ¶ Jaylen locks the phone.
22 A Face down on his knee.
23 A ¶ This is the part where it stops being funny.
24 A ¶ Priya nudges him.
25 D PRIYA [CONT'D]: For real, tho. You didn't do it.
26 D JAYLEN: Everyone thinks I did.
27 A ¶ The double doors BANG open.
28 A MS. ADEYEMI, 40s, blazer, folder under her arm, strides in.
29 A The lawyer.
30 D MS. ADEYEMI: Jaylen. Deposition's moved to Thursday. Good news.
31 D JAYLEN (small): Okay.
32 D MS. ADEYEMI: Put the phone away, Priya.
33 D PRIYA: I'm literally not on it.
34 A ¶ Ms. Adeyemi sits on the bleacher above them.
35 A Pulls out a pen.
36 D MS. ADEYEMI: Start from the beginning.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05084.json
### SCENE s05084 | INT. ROSIE'S DINER - BOOTH BY THE WINDOW - NIGHT
Detected names (may be incomplete or contain aliases): MAYA, DESMOND, THEO
1 A ¶ A half-empty diner.
2 A A neon sign BUZZES in the window.
3 A Three strangers sit at one booth, three phones face-up on the table, none of them quite looking at each other, a plate of cold fries in the middle that nobody has touched, a waitress refilling coffee two booths over.
4 A ¶ CLOSE ON the middle phone.
5 A A group chat. "nightowls_3am" glowing at the top.
6 A ¶ WE SEE the last message, from "moth": "ok so who's actually here."
7 D MAYA (turns her phone over, then back): so. um. i'm maya.
8 D DESMOND (leaning back, arms crossed): desmond. i'm "moth."
9 D MAYA (small laugh): you're moth? you type like a forty year old.
10 D DESMOND (a shrug): i am a forty year old.
11 A ¶ The waitress sets down a coffee.
12 A Leaves.
13 A A beat.
14 D THEO (pushing the fries a half inch toward them): i didn't think anyone would actually show up.
15 D MAYA: you set the time, theo.
16 D THEO (eyes on the table): yeah. i know.
17 D DESMOND: so you're "lantern."
18 D THEO: yeah.
19 D MAYA: the one who said he found something in the old church.
20 D THEO (a pause): it was a long time ago.
21 D DESMOND: it was last tuesday.
22 A ¶ A phone BUZZES on the table.
23 A Everyone looks.
24 A It's Maya's.
25 A She doesn't pick it up.
26 D MAYA (flips it face down): it's my mom.
27 D DESMOND: you can get it.
28 D MAYA (a thin smile): no, it's fine.
29 A ¶ ANGLE ON Theo's hand, tapping the table.
30 A Tap.
31 A Tap.
32 A Tap.
33 D THEO (too quiet): i didn't find anything. i wrote it. the whole thing. i made it up.
34 D MAYA (a beat, then, steady): okay.
35 D DESMOND (sits forward): why?
36 D THEO (shrugs, can't look up): i wanted someone to message back.
37 A ¶ Silence.
38 A The neon BUZZES.
39 A A truck HISSES past outside.
40 D MAYA (slides the fries closer): eat something, lantern.
41 D THEO (a breath): it's theo.
42 D MAYA: i know.
43 D DESMOND (picks up one fry, studies it): these are terrible.
44 D THEO (a short laugh, surprised at itself): yeah.
45 A ¶ The three of them sit.
46 A Desmond eats the fry.
47 A Maya reaches over and takes one.
48 A Theo, after a moment, takes the last.
49 A ¶ A door SLAMS somewhere in the back.
50 A All three flinch.
51 A Nobody says anything.
52 A ¶ BACK TO SCENE
53 A ¶ The waitress comes by.
54 A Tops off the coffees.
55 A Looks at the three of them, then at the fries.
56 D DESMOND (to the waitress): can we get another plate of those?
57 A ¶ The waitress nods.
58 A Goes.
59 A The phones on the table light up at once, three at a time, the group chat filling with messages from people who aren't here.
60 D MAYA (reading): "is everyone ok"
61 D DESMOND (typing, slowly, two fingers): "we're good."
62 D THEO (watching him): you're still typing like a forty year old.
63 D DESMOND (without looking up): it's a gift.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05085_0.json
### SCENE s05085_0 | INT. WILLOWBROOK FERTILITY CLINIC - WAITING ROOM - DAY
Detected names (may be incomplete or contain aliases): BRIDGET FENWICK, GARRETT, DR. PLUM
1 A ¶ A pastel room.
2 A Gently glowing crystals on every table.
3 A A fountain BURBLES in the corner.
4 A A sign reads: "PLEASE SILENCE YOUR WANDS."
5 A ¶ BRIDGET FENWICK, 30s, sits stiffly.
6 A Next to her, her husband, GARRETT, 30s, flips through a magazine upside down.
7 D BRIDGET (whispering, mortified): Garrett, the magazine.
8 D GARRETT (turns it over, deadpan): Oh, thank goodness. I was getting nothing out of the article.
9 A ¶ The inner door swings open.
10 A Applause-ready.
11 D DR. PLUM (entering in a sparkly lab coat, arms wide): The Fenwicks! Come in, come in, mind the dragon.
12 A ¶ ANGLE ON a small green dragon asleep on the carpet, wearing a "Staff" lanyard.
13 D GARRETT (stepping over it): Is that safe?
14 D DR. PLUM (cheerfully): Mostly vegetarian.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05085_1.json
### SCENE s05085_1 | INT. WILLOWBROOK FERTILITY CLINIC - EXAM ROOM - CONTINUOUS
Detected names (may be incomplete or contain aliases): DR. PLUM, BRIDGET, GARRETT, INTERCOM, WINNIE
1 A ¶ Dr. Plum shuts the door.
2 A Bridget perches on the table.
3 A Garrett stays standing.
4 D DR. PLUM (clapping once): Now, the good news is, your tests came back magical.
5 D BRIDGET (hopeful): Magical how?
6 D DR. PLUM (checking a scroll): Wonderfully magical. The bad news is, there's a small curse.
7 D GARRETT (flat): There's always a small curse.
8 D INTERCOM [V.O.]: Dr. Plum, your two o'clock is here. And the stork is asking for a raise again.
9 D DR. PLUM (to the ceiling): Tell him we'll discuss it in the spring, Winnie.
10 D WINNIE [V.O.] (from the intercom): He says that's what you said last spring.
11 D DR. PLUM (muttering): Storks.
12 A ¶ CLOSE ON the scroll.
13 A Written in glittery cursive: "Hex of Perpetual Maybe."
14 D BRIDGET (reading it, aghast): Perpetual Maybe?
15 D DR. PLUM (brightly): Very common. Your great-aunt must've really wanted you to take your time.
16 D GARRETT (sighs, to Bridget): This is your aunt Millicent.
17 D BRIDGET (tight smile): She hated my first boyfriend, too.
18 D DR. PLUM (snaps fingers; a puff of glitter): Good news! It's reversible. We'll start with a gentle exorcism.
19 D GARRETT (alarmed): Gentle?
20 D DR. PLUM (already writing): Light. Like a dentist.
21 A ¶ BACK TO SCENE
22 A ¶ The dragon pokes its head through the door.
23 D DR. PLUM [CONT'D] (not looking up): Not now, Kevin.
24 A ¶ The dragon sighs.
25 A A small puff of smoke.
26 A It leaves.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05086.json
### SCENE s05086 | EXT. HARBOR PARKING LOT - FOOD TRUCK "THE GOLDEN GOBLIN" - DAY
Detected names (may be incomplete or contain aliases): BIG DAVE, MO, JEN, SAM, MRS. K
1 A ¶ A rusty purple truck with a huge cartoon goblin painted on the side.
2 A Its painted eyes blink when nobody's looking.
3 A A line of hungry customers stretches around the block.
4 A ¶ Inside the truck, a tiny kitchen.
5 A Steam, sizzle, clatter.
6 A ¶ BIG DAVE, 50s, an enormous man with an apron that reads "Kiss the Cook (Please)," flips a patty.
7 A Beside him, MO, 20s, wiry, chops onions with a nervous speed.
8 A At the window, JEN, 30s, sharp ponytail, takes orders with a grin that could cut glass.
9 A ¶ Perched on the shelf above the fryer sits SAM, a one-foot-tall goblin in a chef's hat, grumpy, covered in flour.
10 A Only the crew can see him.
11 D JEN (to the line): Next! What'll it be?
12 D BIG DAVE (to the whole kitchen): Orders up, people! Let's move!
13 D MO (to himself, muttering): Don't cut your finger. Don't cut your finger.
14 D SAM (dry): Mo, you've said that eleven times. I'm counting.
15 D MO (not looking up): You're not helping, Sam.
16 D JEN (over her shoulder): Two Goblin Specials and a side of fries!
17 D BIG DAVE (flipping): Fries are in the basket, Mo!
18 D MO (to himself): I know. I know where the fries are.
19 A ¶ Jen's phone RINGS on the counter.
20 A She answers on speaker.
21 D MRS. K [V.O.] (over the phone, crackling): Jennifer? It is Mrs. K. I am watching the line on the news. It is too long.
22 D JEN (through gritted teeth): Mrs. K, we're doing great. Lots of customers.
23 D MRS. K [V.O.]: Too many customers is no profit if you give them free pickles.
24 D BIG DAVE (quietly): Who told her about the pickles?
25 D SAM (shrugging): She has her ways.
26 D MRS. K [V.O.]: I hear everything. Mo is cutting too slow.
27 D MO (freezing): I'm not cutting too slow!
28 D MRS. K [V.O.]: Mo, speak to me when your onions are finished.
29 A ¶ Mo glances at Big Dave.
30 A Big Dave shakes his head slowly.
31 D JEN (to the group): Okay, everyone calm down.
32 A ¶ NOBODY CALMS DOWN.
33 A The fryer HISSES.
34 A Smoke curls toward the ceiling.
35 D SAM (standing on the shelf, alarmed): Dave, the oil's too hot.
36 D BIG DAVE (waving it off): It's fine.
37 D SAM: Dave.
38 D BIG DAVE: It's fine!
39 A ¶ The fryer POPS.
40 A A tiny fireball rolls up the wall.
41 D MO (shrieking): FIRE!
42 D JEN (to the phone): Mrs. K, I'll call you back!
43 D MRS. K [V.O.]: Jennifer, do not hang up on--
44 A ¶ Jen hangs up.
45 A Big Dave grabs a fire extinguisher.
46 A SPLOOSH.
47 A A cloud of white foam engulfs the kitchen.
48 A ¶ Silence.
49 A Everyone is covered in foam.
50 A Sam wipes his face with one tiny hand.
51 D SAM (deadpan): I told you.
52 A ¶ From outside, the line of customers CHEERS.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05089.json
### SCENE s05089 | EXT. MAPLE HILL PARK - NEAR THE OLD FOUNTAIN - DUSK
Detected names (may be incomplete or contain aliases): JOGGER, OLD MEN, LIN, KOFI
1 A ¶ The sun is low.
2 A The park is almost empty.
3 A A JOGGER runs past with a small dog.
4 A Two OLD MEN play chess on a bench, not talking.
5 A ¶ LIN, 19, sets a phone on a tripod.
6 A She wears a bright yellow jacket.
7 A She checks the screen and fixes her hair.
8 A ¶ Beside her stands KOFI, 20, her friend.
9 A He holds a ring light.
10 A He is nervous but he does not say it.
11 D LIN: Okay. We start. Hello, my friends. Today we go to the haunted fountain.
12 D KOFI: Why are we saying haunted?
13 D LIN: Because people like it. More views.
14 D KOFI: But nobody say this fountain is haunted.
15 D LIN: Now they say.
16 A ¶ She laughs.
17 A He does not.
18 A He looks at the dry stone fountain.
19 A He turns the ring light a little.
20 A ¶ The Jogger is gone.
21 A The old men are gone too.
22 A The chessboard is still on the bench, pieces standing.
23 D LIN [CONT'D] (to the camera): Is very quiet here. Very, very quiet.
24 D KOFI: Lin. The men. They left the game.
25 D LIN: So? They are tired.
26 D KOFI: Maybe.
27 A ¶ She taps the screen.
28 A She frowns.
29 A She taps again.
30 D LIN: The video, it stops. Always the same place.
31 D KOFI: Maybe the phone is cold.
32 D LIN: Phones are not cold.
33 A ¶ A cold wind moves over the grass.
34 A The fountain makes a small sound, like a drop of water falling.
35 A But the fountain is dry.
36 A ¶ He steps back.
37 A She does not notice.
38 A She is still looking at the screen.
39 D LIN [CONT'D] (whispering): Kofi. Look.
40 A ¶ He comes closer.
41 A On the screen, behind her, there is someone in the water of the fountain.
42 A Only in the video.
43 A Not in the park.
44 D KOFI: I do not see anything.
45 D LIN (her voice thin): Yes you do.
46 A ¶ He is silent.
47 A His hands shake on the ring light.
48 A ¶ It is the last video they will make together.
49 A ¶ She turns off the phone.
50 A Fast.
51 A She takes the tripod and walks to the path.
52 A He follows her.
53 A Neither of them looks back at the fountain.
54 A ¶ The wind stops.
55 A The water drips once more.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05090.json
### SCENE s05090 | INT. BRIGHTSTART FERTILITY CLINIC - WAITING ROOM - DAY
Detected names (may be incomplete or contain aliases): TESS, GORDON, ROSALIND, THE WOMAN, DR. HALLORAN, BEV
1 A ¶ SUPER: "TUESDAY.
2 A 9:47 AM."
3 A ¶ Gordon, 40s, rumpled and sweating through a pastel polo, grips a paper cup and a clipboard.
4 A Tess, 20s, behind the front desk, smiles a smile that has seen things.
5 A ¶ INSERT - CLIPBOARD
6 A ¶ Line 14: "Sample collected at home?
7 A Y / N".
8 A Gordon's pen hovers.
9 A He circles Y. Then N. Then Y.
10 A ¶ BACK TO SCENE
11 D TESS: Mr. Pruitt, Dr. Halloran will see you shortly.
12 D GORDON: Great. Fantastic. Shortly. Love shortly.
13 A ¶ His phone BUZZES.
14 A He answers, too loud.
15 D GORDON [CONT'D]: Ros? I'm here, I'm in the, I'm at the place.
16 D ROSALIND [V.O.] (tinny, speakerphone): Did you bring it. Gordon. Did you bring it.
17 D GORDON: Define "it".
18 D ROSALIND [V.O.]: The jar, Gordon. The jar in the cooler bag, in the car, in the August heat.
19 A ¶ Gordon looks at the empty cup in his hand.
20 A Looks at the door.
21 A ¶ POV - THROUGH THE WINDOW
22 A ¶ The parking lot.
23 A His Subaru.
24 A Its trunk wide open.
25 A A Seagull the size of a toddler perches on the bumper.
26 A ¶ BACK TO SCENE
27 A ¶ A woman in sunglasses and a long coat sits two chairs down, reading a pamphlet upside down.
28 A She has been there since the top of the scene.
29 A She has not blinked.
30 D GORDON (to himself): Okay. Okay okay okay.
31 A ¶ Dr. Halloran, 50s, bow tie, enters from the hallway with a tablet.
32 A He and Gordon lock eyes.
33 A He raises a hand to wave.
34 A He sees the open trunk through the window.
35 A He lowers it.
36 A ¶ ANGLE ON THE WOMAN
37 A ¶ She stands.
38 A Slowly.
39 A She opens the coat.
40 A Inside, a cooler bag, sweating, strapped to her like a bomb vest.
41 D THE WOMAN: Is this what you're looking for.
42 A ¶ Gordon and Halloran both freeze.
43 A Tess drops her stapler.
44 D GORDON: You STOLE my
45 D THE WOMAN: I RESCUED your
46 D DR. HALLORAN: Everybody stay calm, that is a biohazard and also a federal, I think, a federal something.
47 D ROSALIND [V.O.]: What's happening. Why is everyone yelling. Gordon!
48 A ¶ Gordon lunges for the bag.
49 A The woman spins away.
50 A Halloran grabs him, he grabs the coat, and all three of them crash into the pamphlet rack.
51 A Pamphlets rain down like confetti.
52 A Tess ducks under the desk.
53 A ¶ INTERCUT - PARKING LOT / WAITING ROOM
54 A ¶ The seagull hops into the trunk.
55 A It emerges with a sandwich.
56 A Nobody sees.
57 D THE WOMAN (pinned, furious): Bev! My name is Bev! I'm Rosalind's sister, you absolute walnut, she sent me to make sure you'd show up!
58 A ¶ Silence.
59 A Gordon, face down in pamphlets, slowly raises one finger.
60 D GORDON: ...Did she also send you to steal it?
61 D BEV: No. That was freelance.
62 D ROSALIND [V.O.]: Oh my god. Bev. I said WATCH him. Not ambush him.
63 A ¶ Tess pops up from behind the desk, holding the cooler bag by one strap.
64 D TESS: So, uh. Who's paying the co-pay.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05091.json
### SCENE s05091 | INT. VANTAGE ARENA - BACKSTAGE GAMING PIT - NIGHT
Detected names (may be incomplete or contain aliases): JUNO KESSLER, HOODIE GUY, DEV, THE TWINS, ^JUNO
1 A ¶ Humming.
2 A A hundred fans cooling a hundred machines.
3 A Somewhere beyond the curtain the crowd roars at nothing, at a screen, at a score.
4 A ¶ JUNO KESSLER, 20s, headset around her neck, sits alone at Station 9 while the finals lobby loads, and behind her, in the half dark by the cable trunks, a figure in a gray hoodie stands very still with his face turned away, and she has not noticed him, and the monitors all glow the same dead blue.
5 A ¶ The loading bar crawls.
6 A 98%.
7 A 98%.
8 A 98%.
9 D JUNO: Nobody's supposed to be back here.
10 D HOODIE GUY (low): I know.
11 A ¶ The bar does not move.
12 A Her headset crackles at her collar, a whisper under the static, a voice that is not a teammate's.
13 D JUNO (to her mic): Coach? Dev? You hear that?
14 A ¶ Nothing.
15 A Then, very faintly, from somewhere behind the curtain, the crowd goes silent.
16 A All at once.
17 A Like a hand over a mouth.
18 A ¶ Dev Aranda, 30s, the team coach, pushes through the curtain with a lanyard and a clipboard and stops.
19 A He looks at the hoodie.
20 A He looks at Juno.
21 A The lights above the pit flicker one row at a time, front to back, toward them.
22 D DEV: Juno. Walk to me. Don't look at the screen.
23 D JUNO: It's, it's on my screen, Dev.
24 A ¶ On every monitor in the pit, in the lobby chat, one line types itself out letter by letter, slow as breathing.
25 D THE TWINS [O.S.] (whispering, in unison): We found you.
26 A ¶ Juno turns.
27 A At the far end of the pit, two identical kids in tournament jerseys stand shoulder to shoulder, too still, mouths barely moving, and neither of them is breathing.
28 D HOODIE GUY (turning at last): That's not who you think they are.
29 D DEV (over him): Get out get out get out
30 D ^JUNO: They're not on the roster
31 A ¶ Every monitor cuts to black.
32 A The fans die.
33 A In the silence the only sound is something wet and slow dragging across the concrete behind the curtain, and then the curtain moves, and the lights come back all at once, white, blinding, and the pit is empty but for three headsets still warm on the desks, and a lobby chat that reads:
34 A ¶ SUPER: "PLAYER 4 HAS JOINED."

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05092.json
### SCENE s05092 | INT. ST. AGNES LYING-IN HOSPITAL - CONSULTING ROOM - DAY
Detected names (may be incomplete or contain aliases): DR. WHITCOMBE, MARGARET, EDMUND, SISTER BRIGID
1 A ¶ London, 1923.
2 A Rain falls on the high windows without stopping.
3 A The gas lamp on the wall makes a small yellow light.
4 A The room smells of carbolic soap and old wood.
5 A ¶ Margaret sits on a hard chair.
6 A Her husband Edmund stands near the window and does not look at her.
7 A The doctor sits behind a big desk with many papers.
8 D DR. WHITCOMBE (he opens a file and reads slowly): Mrs. Ashworth, you have been married six years. There is no child. This is the third time you come to me.
9 D MARGARET (her hands are tight in her lap): Yes, doctor. We hope you have some new idea.
10 A ¶ The rain becomes stronger.
11 A A cart passes in the street below and its wheels make a loud noise on the stones.
12 A In the corridor a clock strikes the half hour.
13 D EDMUND (he turns from the window, his voice is cold): It is not an idea we need. It is an answer. My family asks me every Sunday. Every Sunday.
14 D DR. WHITCOMBE (he closes the file): Mr. Ashworth, I must say it plainly. The examination shows no fault in your wife.
15 A ¶ A long quiet.
16 A The lamp makes a small sound.
17 A Outside, a bell rings far away, and the grey light on the wall becomes darker.
18 D MARGARET (she looks up at him for the first time): Then the fault is not mine.
19 D EDMUND (he steps forward, his hand on the desk): You say this to me? In front of her?
20 D DR. WHITCOMBE (he stands, calm but not soft): I say what is true. Please sit down.
21 A ¶ Edmund does not sit.
22 A He walks to the door, he stops, he comes back.
23 A His face is red, and the rain is loud now, and the room feels very small.
24 A ¶ The door opens without a knock.
25 A SISTER BRIGID, a tall nurse in a starched white veil, comes in with a metal tray.
26 A She puts it down and she stands very straight beside the desk.
27 D SISTER BRIGID (her voice is quiet but it carries): Doctor, forgive me. The results you asked for from the laboratory. Both sets.
28 D DR. WHITCOMBE (he takes the paper and reads it, and his face changes): Thank you, Sister. Stay, please.
29 D EDMUND (he reaches for the paper): Give me that.
30 D SISTER BRIGID (she puts her hand flat on the tray): Sir, it is not yours to take.
31 D MARGARET (very softly): Edmund. Please. Sit.
32 D EDMUND (he turns on her, loud): Do not tell me what to do! Six years I wait. Six years my mother looks at you like you are a broken clock!
33 A ¶ Thunder, low and long, across the roofs of the city.
34 A The lamp shakes.
35 A The window glass hums.
36 D DR. WHITCOMBE (he holds up the paper): The laboratory is certain, Mr. Ashworth. The difficulty is with you. Not with her. It was never with her.
37 D EDMUND (he stops, he cannot speak, then he laughs one time): That is a lie. That is a doctor's lie to make a woman feel better.
38 D MARGARET (she stands, her chair scrapes the floor): You never once asked if it was you. Not once. You looked at me. Always at me.
39 D EDMUND (he knocks the tray from the desk, the instruments fall and ring on the floor): Enough!
40 D SISTER BRIGID (she does not move back, her chin lifts): You will leave this room now, sir. Or I will call the porters.
41 A ¶ The rain falls on.
42 A A long moment.
43 A Edmund looks at the three of them, at the paper, at the wet window, and he takes his hat from the chair and he goes out.
44 A The door shakes in its frame.
45 D MARGARET (she sits down slowly, and begins to breathe again): He will not come home tonight.
46 D DR. WHITCOMBE (gently): Then you will stay here, Mrs. Ashworth. Sister Brigid will make you tea.
47 D SISTER BRIGID (she bends and picks up the instruments one by one): Strong tea. With sugar.
48 A ¶ The clock in the corridor strikes the hour.
49 A The rain is soft again.
50 A The lamp is steady.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05095.json
### SCENE s05095 | INT. CORNER DINER - BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): TOBIAS, SAGE
1 A ¶ Tobias, 30s, hunched over a milkshake, scrolls his phone.
2 A He looks up.
3 A A figure in a trench coat slides into the booth opposite.
4 A ¶ Sage, 20s, they/them, buzz cut, an enamel pin that says "SUSPECT".
5 A They set a phone face-up on the table.
6 D TOBIAS: You're "DetectiveDuck99"?
7 D SAGE: And you're "NotTheKiller".
8 D TOBIAS: That was a joke!
9 D SAGE (deadpan): It's a very bad joke, Tobias.
10 A ¶ He laughs nervously.
11 A They don't.
12 A He stops.
13 D TOBIAS: So who actualy stole Linda's casserole dish?
14 D SAGE: Someone in this group chat. Eleven suspects. Two of them are in this diner right now.
15 A ¶ Tobias looks left.
16 A Looks right.
17 A Looks at the waitress.
18 D TOBIAS: Is it her?
19 D SAGE: It's a milkshake, Tobias. Nobody commited a crime with a milkshake.
20 A ¶ They slide the phone across.
21 A The screen reads "LINDA: found it lol was in my oven".
22 A ¶ Tobias stares.
23 A Sage shrugs.
24 D SAGE [CONT'D]: Case closed. You're buying.
