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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05143.json
### SCENE s05143 | EXT. MAPLE HOLLOW PARK - DAY
Detected names (may be incomplete or contain aliases): TESSA, CAM, FLASH MOB, DETECTIVE MARA ROY
1 A ¶ Ring light on a tripod.
2 A Phone on a gimbal.
3 A A fake-casual dance setup at the edge of the lawn.
4 A ¶ Tessa, 17, hair in a claw clip, loads the screen.
5 A She taps the red button twice and checks her follower count like it might have changed.
6 A ¶ ON PHONE: 41.2K followers.
7 A LIVE in 3...2...1
8 A ¶ Cam, 17, stands behind the tripod pretending to adjust the light.
9 A He keeps looking at the tote bag at his feet.
10 D TESSA: ok ok ok we're live. hi besties. today's trend is the sidewalk glide, pls do not judge us.
11 D CAM (low): You said no one would be here.
12 D TESSA (through a smile): that's a ring light, not a spotlight. chill.
13 A ¶ She starts the dance.
14 A He joins, stiff, limbs all wrong.
15 A Across the lawn, a woman in a beige raincoat, dark glasses, newspaper folded under her arm, watches without blinking.
16 D CAM: Who's that?
17 D TESSA: Just some lady. keep going.
18 A ¶ He does not keep going.
19 A He stops.
20 A She spins mid-move and collides with him.
21 D TESSA [CONT'D]: bro. you're ruining the take.
22 D CAM: She's been here since we got here. She's cop-energy.
23 D TESSA: she's reading a newspaper, Cam. nobody reads newspapers. that's what makes her fake.
24 A ¶ The woman folds the paper, tucks it away, and starts toward them.
25 A Slow.
26 A Not hurrying.
27 A ¶ Tessa taps the screen.
28 A LIVE keeps running.
29 A ¶ ON PHONE: 3,900 watching. chat is flying. "who is that" "behind u" "RUN"
30 D TESSA [CONT'D] (whispering): it's not funny anymore.
31 D CAM: It was never supposed to be.
32 A ¶ THE FLASH MOB, twelve kids in matching hoodies who have been stretching by the fountain, break into a synced dance.
33 A Phones up.
34 A Music BLASTS from a speaker.
35 A ¶ The woman stops, confused, swallowed by the crowd.
36 D TESSA [CONT'D] (grinning): go go go!
37 A ¶ He grabs the tote bag.
38 A She grabs the gimbal.
39 A They run for the gate, laughing, terrified, thumbs still on the screen.
40 A ¶ ON PHONE: 12K watching.
41 A "WHERE ARE U GOING"
42 A ¶ At the gate, the woman is already there.
43 A She lifts her sunglasses.
44 D DETECTIVE MARA ROY (calm): Hi, Tessa. Hi, Cam. Mind if I ask what's in the bag?
45 A ¶ He freezes.
46 A She freezes.
47 A The phone keeps filming.
48 D TESSA (very small): it's just... props.
49 D MARA: Mm. That's what the last two said.
50 A ¶ She holds out her hand.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05146.json
### SCENE s05146 | INT. NIGHT BUS - MOVING - NIGHT
Detected names (may be incomplete or contain aliases): THE WOMAN IN GREEN, THE WOMAN IN BLACK
1 A ¶ 1953.
2 A Late November.
3 A The number 9 to the docks.
4 A ¶ Rain.
5 A It comes sideways down the windows in long grey threads, and the bus lurches through the empty streets of a city that has gone to bed without it, past shuttered tobacconists and streetlamps that bloom and vanish in the wet glass.
6 A ¶ The driver's head is a dark shape against the dashboard glow.
7 A Nobody speaks.
8 A The engine drones.
9 A A single bulb above the rear seats swings on its wire.
10 A ¶ A woman in a green coat sits near the back with a suitcase tied shut with string.
11 A She has not moved since the last stop, and she watches the other passenger the way a person watches a door that might open.
12 A ¶ Silence.
13 A ¶ The other passenger, a woman in a black coat with a veil pinned to her hat, sits three rows ahead and has been turning a gold ring on her finger for eleven minutes, round and round, as if the ring might eventually come off by itself and spare her the decision.
14 A Her face is pale and sharp.
15 A She does not look back.
16 A She knows she is being watched.
17 A She has known since Hanover Street.
18 A ¶ Rain.
19 A ¶ The bus brakes at a red light that is the only thing alive on the avenue.
20 A The woman in black reaches into her handbag.
21 A The woman in green stiffens and puts one hand on the string of the suitcase.
22 A ¶ Nothing.
23 A ¶ The handbag holds only a handkerchief.
24 A She presses it to her mouth and says nothing, and for a moment the two of them are the same woman, a mirrored pair of shoulders hunched against the same night, the same fear, the same engine thrumming through the same wet floor.
25 A ¶ Her phone?
26 A No, no phone, there are no phones.
27 A Only the clock above the driver: ten past one.
28 A Ten past one and the docks still twenty minutes away.
29 D THE WOMAN IN GREEN (finally, low): You dropped something at the last stop.
30 A ¶ The veil turns.
31 A Slowly.
32 D THE WOMAN IN BLACK: I did not.
33 D THE WOMAN IN GREEN: A letter. It had your name on it.
34 A ¶ She holds it up, a small cream envelope, soaked at one corner.
35 A She does not give it back.
36 A ¶ Silence.
37 A ¶ The light goes green.
38 A The bus lurches forward.
39 A Neither moves.
40 D THE WOMAN IN BLACK (very softly): Then you know where I am going.
41 D THE WOMAN IN GREEN: I know where you were going. I do not yet know where you will get off.
42 A ¶ The bus rounds a corner.
43 A Salt air.
44 A Gulls.
45 A Somewhere ahead, the dark smell of the harbour.
46 D THE WOMAN IN BLACK: My name is Eleanor Hale.
47 D THE WOMAN IN GREEN: I know. I am the one who wrote it.
48 A ¶ Rain.
49 A The bulb swings.
50 A The envelope trembles in her hand.
51 A ¶ Eleanor does not scream.
52 A She only closes her eyes, as though she has been expecting this exact sentence for years, and opens them again on a face that looks very much like her own.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05147.json
### SCENE s05147 | INT. IRONWORKS GYM - EARLY MORNING
Detected names (may be incomplete or contain aliases): NARRATOR, JESS, KYLE, BIG MO
1 A ¶ Fluorescent tubes buzz awake one bank at a time.
2 A Rubber mats.
3 A Chalk dust drifting in the light.
4 A A treadmill whirs somewhere in the back.
5 D NARRATOR [V.O.]: Every gym smells the same. Sweat, bleach, and people trying to outrun something.
6 A ¶ Jess, 30s, a former detective turned personal trainer, wipes down a bench.
7 A Her knuckles are scabbed.
8 A She does not look like she sleeps.
9 D NARRATOR [V.O., CONT'D]: That's me. Jess. I used to chase the wrong people for a living. Now I help them chase their goals.
10 A ¶ The front door CHIMES.
11 A A man in a grey hoodie hovers by the desk, hood up, hands deep in his pockets.
12 D JESS: We're closed till six.
13 D HOODIE MAN: I'm not here to train.
14 A ¶ Quiet.
15 D JESS: Then why?
16 D HOODIE MAN: Someone said you used to work cases.
17 D NARRATOR [V.O.]: Trouble always walks in with its hood up.
18 A ¶ Jess sets down the towel.
19 A Slowly.
20 D JESS: Used to.
21 A ¶ He pulls out a photograph and slides it across the desk.
22 A A young woman, smiling, in a gym tank top.
23 D HOODIE MAN: That's my sister. She trained here. Two weeks ago she stopped answering.
24 D JESS: Lots of people quit. Gyms are full of people who quit.
25 D HOODIE MAN: Not her.
26 A ¶ Silence.
27 A ¶ Jess studies the photo.
28 A Then the man.
29 A Then the photo again.
30 D NARRATOR [V.O.]: The photo had a date on the back. A date she shouldn't have known.
31 D JESS: What's your name?
32 D HOODIE MAN: Does it matter?
33 D JESS: It does to me.
34 A ¶ He hesitates.
35 A Pulls the hood down.
36 A Mid-thirties.
37 A Tired eyes.
38 D HOODIE MAN [CONT'D]: Kyle.
39 D KYLE: Kyle Brandt.
40 D NARRATOR [V.O.]: Brandt. I knew that name. I had buried that name.
41 A ¶ Jess goes still.
42 A The treadmill in the back keeps whirring, steady, patient.
43 D JESS: Kyle. How long have you known where I work?
44 D KYLE: Since the funeral.
45 A ¶ Nothing.
46 A ¶ A locker door CLANGS in the back.
47 A Both turn.
48 A ¶ From behind the lockers steps Big Mo, 50s, the gym owner, wiping his hands on a towel.
49 A He is too casual.
50 D BIG MO: Everything okay out here?
51 D KYLE: Fine.
52 D JESS: Fine.
53 D BIG MO: Because it sounds like a conversation I should be in.
54 A ¶ Nobody answers.
55 A The towel in his hand is red at the corner.
56 D NARRATOR [V.O.]: Mo kept a clean gym. Always. Except that morning.
57 A ¶ Kyle's eyes drop to the towel.
58 A Then to Jess.
59 D KYLE (quiet): He's the last person who saw her.
60 D BIG MO: Kid, you don't want to say that.
61 D KYLE: I just did.
62 A ¶ Silence.
63 A ¶ Jess steps between them without seeming to.
64 A Her hand finds the heavy kettlebell on the shelf.
65 D JESS: Mo. Open the back room.
66 D BIG MO: It's just storage.
67 D JESS: Then it won't take long.
68 D NARRATOR [V.O.]: That was the last honest thing any of us said in that building.
69 A ¶ Mo smiles.
70 A It is not a happy smile.
71 A He drops the towel.
72 A ¶ Behind the lockers, a phone begins to RING.
73 A Soft.
74 A Persistent.
75 A ¶ All three look toward the sound.
76 A ¶ The ringtone is a pop song the sister used to hum while she lifted.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05149.json
### SCENE s05149 | INT. COUNTY PAROLE OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): THE WOMAN, KIP, KIM, MARGARET
1 A ¶ Fluorescent light.
2 A The kind that hums.
3 A A corridor of closed doors and one open one at the end where a lamp burns yellow.
4 A ¶ Rain on the window.
5 A Rain on the roof.
6 A The building ticks as it cools.
7 A ¶ He sits alone in the chair across from the empty desk.
8 A Waiting.
9 A His coat is still damp and he has not taken it off.
10 A His hands rest on his knees like something set down and forgotten.
11 A Nobody told him the office closed at five.
12 A Nobody told him anything.
13 A ¶ Silence.
14 A ¶ The wall clock says 9:41.
15 A The wall clock has said 9:41 since he walked in.
16 A ¶ A door opens down the hall.
17 A Footsteps, slow, and the squeak of rubber on linoleum.
18 A A woman in a long dark cardigan, grey hair pinned back, appears in the doorway with a mug in both hands.
19 A She does not look surprised to see him.
20 A She looks like she has been expecting him for years.
21 D THE WOMAN: You're late Kip.
22 D KIP: I'm not Kip. I'm Kim.
23 D THE WOMAN: Kim then.
24 A ¶ She sits behind the desk.
25 A Opens the folder.
26 A The folder is very thin.
27 A ¶ Nothing.
28 A ¶ Her eyes move down the page and then up, and for a moment he thinks he sees something move behind her, a shape in the dark of the hallway, tall, patient.
29 D KIM: Who else is here.
30 D THE WOMAN: Nobody. Just us.
31 D KIM: I heard someone.
32 D THE WOMAN: You hear a lot of things, Kim. It's in your file.
33 A ¶ She turns the folder around so he can read.
34 A His name.
35 A His date of birth.
36 A A line of handwriting beneath, in red, that he cannot make himself read aloud.
37 A ¶ Rain.
38 D KIM: That's not my handwriting.
39 D THE WOMAN: No. It's his.
40 D KIM: Whose?
41 A ¶ She does not answer.
42 A The lamp flickers.
43 A In the corridor, the footsteps start again, closer now, unhurried.
44 D KIM [CONT'D] (barely): Please tell me that's you.
45 D THE WOMAN: I'm right here.
46 A ¶ The footsteps stop at the door.
47 A He does not turn around.
48 A He cannot.
49 A Every muscle in his neck has locked.
50 A ¶ The Woman closes the folder gently.
51 D THE WOMAN [CONT'D]: My name is Margaret. And that is Kip.
52 A ¶ Behind him, the door opens.
53 A ¶ Nothing.
54 A ¶ Then a breath that is not his own.
55 D KIM (whispering): Kip is dead.
56 D MARGARET: Yes.
57 A ¶ Silence.
58 A ¶ The clock moves.
59 A 9:42.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05151.json
### SCENE s05151 | INT. CHURCH BASEMENT - AA MEETING - NIGHT
Detected names (may be incomplete or contain aliases): TIME, THE WOMAN
1 A ¶ Folding chairs in a circle.
2 A Burnt coffee.
3 A A banner: "ONE DAY AT A TIME."
4 A ¶ Empty chairs, all of them.
5 A Except one.
6 A ¶ THE WOMAN, 40s, cardigan, big purse on her lap.
7 A She waves at nobody.
8 D THE WOMAN: Hi everybody!
9 A ¶ (beat for the audience)
10 A ¶ She sits up.
11 A Beams.
12 A Waits for the applause that doesn't come.
13 D THE WOMAN [CONT'D]: Wow. Tough room.
14 A ¶ Silence.
15 A A fluorescent buzz.
16 D THE WOMAN [CONT'D]: So. Hi. I'm... let's say I'm new here. Three days sober. Well, "sober." Dry. Technically damp.
17 A ¶ She laughs at herself.
18 A Nobody joins.
19 A ¶ Her purse.
20 A It wiggles.
21 A ¶ She pats it.
22 A Smiles wider.
23 D THE WOMAN [CONT'D]: That's just my sponsor. She's shy.
24 A ¶ Nothing.
25 A Another wiggle.
26 A A faint croak.
27 D THE WOMAN [CONT'D]: Look, I know how this sounds. I had a little problem. Nothing major! A few wishes. A few... frogs.
28 A ¶ She opens the purse.
29 A Two bulging eyes peer out.
30 D THE WOMAN [CONT'D]: Kim is the one on the left. Kip is the one on the right. Honestly, I never could tell which is which. My ex-husbands. They had names for a reason.
31 A ¶ The door at the top of the stairs creaks open.
32 A Footsteps.
33 A Heavy.
34 A The sound of a staff tapping the steps.
35 A ¶ She does not look up.
36 A Her smile does not move.
37 D THE WOMAN [CONT'D] (whispers to the purse): My name is Brenda. And I have been a witch for four hundred years.
38 A ¶ The staff stops.
39 A Right behind her.
40 A ¶ She will not turn around.
41 A ¶ Rain on the high windows.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05152.json
### SCENE s05152 | INT. HELIX LABS - OPEN-PLAN OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): IMANI, JONAH, IMANI'S
1 A ¶ SUPER: "DAY 4 OF THE LOCKDOWN"
2 A ¶ Standing desks.
3 A Beanbags.
4 A A neon sign: MOVE FAST.
5 A The glass doors are chained from the inside.
6 A ¶ IMANI, 30s, sleeves rolled, crouches behind a kombucha fridge.
7 A Her breath fogs.
8 A ¶ INSERT - HER PHONE
9 A ¶ A single bar of signal.
10 A Contact: JONAH.
11 A Ringing.
12 A ¶ Across the floor, TWO TEENAGE INTERNS share a vending-machine bag of chips by a window, whispering.
13 A A golden retriever sleeps under a desk, ribs rising and falling.
14 D JONAH [V.O.] (static, breathing): Imani. Don't talk. Listen.
15 D IMANI (whisper): Where are you?
16 D JONAH [V.O.]: Stairwell. Below you. The thing's in the vents, it follows the heat. Kill the lights on the east side and it moves.
17 A ¶ IMANI'S POV - the east wall.
18 A A bank of switches.
19 A Forty feet of open floor between.
20 D IMANI: That's forty feet in the open.
21 D JONAH [V.O.]: Then run.
22 A ¶ She runs.
23 A Beanbags, cables, a skateboard she nearly trips on.
24 A The dog lifts its head.
25 A ¶ Her hand slams the switches.
26 A East side DARK.
27 A ¶ Silence.
28 A Then a metallic scrape in the ceiling, travelling away.
29 A ¶ Both interns give her a thumbs up.
30 A She almost laughs.
31 A ¶ The dog barks once.
32 A Sharp.
33 A The scraping stops.
34 A Reverses.
35 A ¶ The stairwell door BURSTS open.
36 A JONAH, 30s, bleeding at the temple, stumbles in with a fire axe.
37 D JONAH (not on the phone anymore): It was never in the vents.
38 A ¶ He looks up.
39 A Slowly, so does she.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05154.json
### SCENE s05154 | EXT. CITY HALL PLAZA - CLIMATE PROTEST - DAY
Detected names (may be incomplete or contain aliases): JEN, SAM, BIG DAVE, MRS. K, OZ, PIP
1 A ¶ A sea of cardboard signs and one very large papier-mache polar bear.
2 A Drums thump.
3 A A sky the colour of weak tea.
4 A ¶ JEN, 30s, clipboard, megaphone, is losing an argument with SAM, 30s, her ex-fiance, who is carrying an end of the polar bear and walking backwards into a bin.
5 D SAM: I'm just saying, the bear's head is crooked.
6 D JEN: The bear is perfect, Sam. You're the one holding it wrong.
7 A ¶ The bin TOPPLES.
8 A A pigeon explodes upward.
9 A BIG DAVE, 50s, a bear of a man in a full beekeeper suit, catches the bear's falling head with one hand and a falafel in the other, while MRS. K, 70s, tiny, ferocious, in a knitted hat that says NO PLANET B, smacks him with her sign for taking the last wrap and a drone hums overhead, trailing a banner from the city that says PLEASE DISPERSE.
10 D BIG DAVE: Mrs. K! I'm wearing a bee suit!
11 D MRS. K: Then you should have a stinger.
12 A ¶ A STRANGER, 30s, silver jumpsuit, no sign, no shoes, steps out from behind the bear and stares straight at the sky.
13 A In his hand, a small device that BUZZES.
14 D JEN (to Sam, quiet): Who's that?
15 D SAM: Your date?
16 D JEN: I didn't bring a date.
17 A ¶ The stranger crosses to her.
18 A Holds up the device.
19 A It BEEPS twice, green.
20 D STRANGER: Forgive me. I am from two hundred years from now. This is the last place it went right.
21 D BIG DAVE (through the veil): Is he with the bear?
22 A ¶ The stranger turns to Mrs. K, who's squinting at him.
23 D MRS. K: What's your name, dear?
24 D STRANGER: Oz. Short for Ozymandias. My mother was a poet.
25 D OZ (beat): I am here to ask you not to stop.
26 A ¶ A SQUEAK.
27 A PIP, 12, Jen's niece, pops out from inside the polar bear wearing the head like a helmet.
28 D PIP: Aunt Jen? I think I'm stuck.
29 A ¶ Everyone turns.
30 A Sam starts to laugh.
31 A Jen starts to laugh.
32 A The drone spins away, confused.
33 A Big Dave offers Oz half the falafel.
34 D OZ (taking it, solemn): In my time, this has been extinct for ninety years.
35 D BIG DAVE (eating): The falafel?
36 D OZ: The hope.
37 A ¶ Mrs. K pats his arm.
38 D MRS. K: Then eat up, dear. We've got a march.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05155.json
### SCENE s05155 | INT. NIGHT BUS - ROUTE 47 - NIGHT
Detected names (may be incomplete or contain aliases): MAN, HI-VIS JACKET, ANIKA, RILEY, ANIKA'S
1 A ¶ SUPER: "2:14 A.M."
2 A ¶ Sodium streetlights strobe past rain-streaked windows.
3 A The bus is nearly empty.
4 A At the back, TWO TEENAGERS share one pair of earbuds, asleep against each other.
5 A Near the front, a MAN IN A HI-VIS JACKET snores, a lunchbox on his knee.
6 A ¶ ANIKA, 40s, scrubs under a parka, sits by the middle doors, gripping a paper cup of coffee she isn't drinking.
7 A ¶ RILEY, 20s, they/them, climbs on at the next stop with a rucksack, taps a card.
8 A Sits across the aisle.
9 A ¶ INSERT - ANIKA'S HAND
10 A ¶ The coffee cup trembles.
11 A Just slightly.
12 A She sets it on her knee to steady it.
13 D RILEY (not looking over; unzipping the rucksack): Long shift?
14 D ANIKA (pocketing her badge): Long enough.
15 D RILEY (taking out a water bottle): You a nurse?
16 D ANIKA (beat): Why?
17 D RILEY (shrugging, drinking): Shoes.
18 D ANIKA (looks down at her own shoes, almost smiles): Right.
19 A ¶ The bus brakes.
20 A Hiss of the doors.
21 A Nobody gets on.
22 A Nobody gets off.
23 D RILEY (screwing the cap back on): My mum was a nurse. Fourteen years nights. She used to say you can tell who's had a bad one by how they hold a cup.
24 D ANIKA (turning the cup in her hands): And how do they hold it?
25 D RILEY (nodding at it): Like that.
26 A ¶ Silence.
27 A The bus rolls through an underpass.
28 A Orange light, dark, orange light.
29 A ¶ ANIKA'S POV - her phone, face-up on her thigh.
30 A A missed call.
31 A HOSPITAL (WARD 6).
32 A Seven times.
33 D RILEY (leaning back, closing their eyes): You can ring them back, you know.
34 D ANIKA (turning the phone over): It's fine.
35 D RILEY (eyes still closed): It isn't, though.
36 D ANIKA (sharp): You don't know anything about it.
37 D RILEY (opening one eye): No. I don't.
38 A ¶ The teenagers at the back stir, resettle.
39 A The man in the hi-vis snorts and swallows mid-snore.
40 A The driver's radio murmurs a football score.
41 D ANIKA (a long breath; rubbing her thumb along the cup's rim): There was a boy. Eleven. Appendix. Routine. I did the checks, I did all of them, twice. And I went on my break.
42 D RILEY (quiet; not moving): Okay.
43 D ANIKA (not hearing them): Twelve minutes. I was gone twelve minutes.
44 D RILEY (sitting up, turning to face her): And?
45 D ANIKA (staring at the window): And the one who came on after me, she saw it. She caught it. Because she was looking at the monitor.
46 D RILEY (beat; slowly): So he's alive.
47 D ANIKA (nodding, once): He's alive.
48 D RILEY (a small laugh, gentle): So why are you on a night bus at two in the morning like it's a funeral?
49 D ANIKA (finally looking at them): Because I wasn't looking.
50 A ¶ The bus lurches.
51 A The cup tips.
52 A Coffee spills across her knee and she doesn't flinch.
53 A Riley takes a napkin from a pocket and holds it out, across the aisle, until she takes it.
54 D RILEY (softly; sitting back): You looked, though. Every time you could. That's the whole job.
55 D ANIKA (dabbing the stain; not agreeing): Mm.
56 D RILEY (pulling the cord for the next stop): This is me.
57 A ¶ The bus slows.
58 A The bell DINGS.
59 A Riley stands, shoulders the rucksack, swaying with the movement.
60 D RILEY [CONT'D] (at the doors, over their shoulder): Ring the ward.
61 D ANIKA (not looking up): Go home, Riley.
62 A ¶ Riley stops.
63 D RILEY (a beat, gentle): I didn't tell you my name.
64 A ¶ Anika lifts her head.
65 A Neither of them moves.
66 A The doors hiss open onto the empty, wet street.
67 A Riley steps out and doesn't look back.
68 A ¶ The bus pulls away.
69 A In the rear window, a small figure stands under a streetlight, watching it go.
70 A ¶ Anika turns her phone over.
71 A Her thumb hovers, then presses.
72 A It rings once.
73 D ANIKA [CONT'D] (into the phone, steady): It's Anika. Tell me how he is.
74 A ¶ The man in the hi-vis opens his eyes and looks at her.
75 A Then closes them again.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05156.json
### SCENE s05156 | INT. NIGHT BUS - ROUTE N9 - NIGHT
Detected names (may be incomplete or contain aliases): LUCIA AND KATYA, KATYA, THUNK, DRIVER, WINSTON
1 A ¶ Rain on the windows.
2 A The bus is a lit aquarium gliding through a dark city.
3 A Neon smears past.
4 A In the back row, two teenagers share a bag of chips and a single, furious whisper.
5 A ¶ Lucia, 30s, in a rumpled bridesmaid dress and trainers, sits with a bouquet she's clearly been dragging around for hours.
6 A She sneezes.
7 A The bouquet shakes.
8 A A petal lands on her phone.
9 A ¶ The doors HISS.
10 A Katya, 30s, also in a bridesmaid dress, the same hideous mint green, climbs aboard, drenched, holding her heels in one hand.
11 A ¶ They see each other.
12 A Freeze.
13 D LUCIA: You.
14 D KATYA: No.
15 D LUCIA: You're wearing it.
16 D KATYA (sitting across from her): Everyone's wearing it. It's a bridal party. That's the horror of it.
17 A ¶ The bus lurches.
18 A Katya slides, grabs a pole, and the heels go flying.
19 A One hits the driver's screen with a THUNK.
20 D DRIVER [V.O.] (over the intercom, bored): Please keep all footwear to yourselves, ladies.
21 D KATYA (to the ceiling): Sorry!
22 A ¶ Lucia laughs despite herself.
23 A Katya laughs too.
24 A They both stop at once.
25 D LUCIA: She's still furious with you, you know. She's saying you ruined the cake.
26 D KATYA: She is saying I ruined the cake? She's the one who told me to hold it.
27 D LUCIA: She's saying she didn't mean while you were dancing.
28 D KATYA: She is not allowed to say that. She's the one who taught me the dance.
29 A ¶ Winston, 20s, in a delivery jacket, steps on at the next stop with an enormous pizza box, tags in with a beep, and sits down between them without a word.
30 A The two women look at each other across him, then at the box.
31 D WINSTON (opening it, sheepish): It's wrong order. It's pineapple. I'm not allowed to take it back.
32 A ¶ Lucia and Katya both reach for a slice at the same moment.
33 A Their hands collide.
34 A Both gasp.
35 D LUCIA: She said she'd kill me.
36 D KATYA: She said she'd kill me.
37 D WINSTON: Who did?
38 A ¶ They answer together.
39 D LUCIA AND KATYA: The bride.
40 A ¶ Winston nods slowly, takes the slice, and offers the box to the teenagers behind him, who snatch it.
41 A ¶ The bus slows.
42 A The screen over the driver flickers: NEXT STOP: THE FUTURE.
43 A The three of them look up.
44 D DRIVER [V.O.]: Sorry about that. Software update.
45 A ¶ The doors HISS open on a street that is bright, white, and absolutely silent.
46 D KATYA: Is that normal?
47 D WINSTON (chewing): I've seen worse.
48 A ¶ Lucia stands.
49 A Offers her the bouquet.
50 D LUCIA: Come on. Let's go find out.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05157.json
### SCENE s05157 | INT. LINCOLN HIGH SCHOOL - GIRLS' BATHROOM - DAY
Detected names (may be incomplete or contain aliases): NADIA, PHONE, KOFI, LUCAS, MS. BRANDT, JUNIORS
1 A ¶ SUPER: "DAY 11 OF THE SIEGE"
2 A ¶ Cracked tile.
3 A A mirror with one long diagonal fracture.
4 A Dust sifts from the ceiling with every distant THUMP.
5 A ¶ Outside, beyond the frosted window, smoke.
6 A Somewhere a siren winds down and stops.
7 A ¶ NADIA, 17, backpack on her chest, crouches in the end stall with her knees pulled up.
8 A She counts under her breath.
9 A ¶ ON PHONE (TEXT FROM MOM): where r u
10 A ¶ ON PHONE (TEXT FROM MOM): please
11 A ¶ No bars.
12 A The message sits there, sending.
13 A ¶ CLOSE ON the phone's battery icon.
14 A 4%.
15 A ¶ The door SLAMS open.
16 A Nadia flinches.
17 A KOFI, 17, flashlight clipped to his collar, pushes in backwards, dragging LUCAS, 16, who is limping, by the strap of his bag.
18 A Kofi kicks the door shut and wedges a mop handle under the knob.
19 D KOFI (whispering): Girls' bathroom. Seriously?
20 D LUCAS: It was the only one with a lock.
21 A ¶ Silence.
22 A ¶ A drip.
23 A A fan that doesn't turn.
24 D NADIA (from the stall): It doesn't have a lock.
25 A ¶ Kofi spins, flashlight up.
26 A Nadia opens the stall door an inch.
27 A She lowers her phone.
28 D KOFI: Nadia?
29 D NADIA: Put the light down.
30 A ¶ He lowers it.
31 A Lucas slumps against the sinks and slides to the floor, wincing.
32 A ¶ INSERT - LUCAS'S ANKLE.
33 A Swollen, black at the edges.
34 A ¶ The wall behind them SHUDDERS.
35 A Plaster falls.
36 A A long, low rumble passes through the floor, and the three of them freeze at once, hands on whatever is nearest, until it passes.
37 A ¶ Dust.
38 A Ringing.
39 A Nothing.
40 D MS. BRANDT [O.S.] (through the door, muffled): Is anyone in there?
41 A ¶ All three look at each other.
42 A Kofi holds a finger to his lips and mouths NO. Nadia nods.
43 D MS. BRANDT [O.S., CONT'D]: It's Ms. Brandt. I can hear you breathing. Let me in.
44 D LUCAS (mouthing): It's a trick.
45 D NADIA (whispering): It's not a trick. It's Brandt.
46 D KOFI (whispering): Brandt left on the first bus.
47 A ¶ Silence.
48 A The handle turns.
49 A Stops against the mop.
50 A ¶ On the floor, light spills from under the door in a slow, even sweep.
51 A Something glides past outside, and then another, and a third.
52 A ¶ THE JUNIORS, a dozen kids in the corridor, press flat to the wall, quiet as shadows, led by a hand-sign nobody dares to say aloud.
53 A They pass the door.
54 A They are gone.
55 A ¶ ON PHONE (TEXT FROM MOM): I love you. whatever happens
56 A ¶ Nadia reads it.
57 A She doesn't type back.
58 A She presses the phone to her chest.
59 A ¶ Kofi crawls to the door, listens, lets out a long breath.
60 A Lucas grabs his sleeve.
61 D LUCAS: Don't open it.
62 D KOFI: I'm not opening it.
63 D NADIA (quiet, cold): Then why are you still touching the mop?
64 A ¶ He looks down.
65 A His hand is on the handle.
66 A He pulls it back.
67 D MS. BRANDT [O.S.] (close now, right behind the door): Last chance, kids. They are coming through the east wing.
68 A ¶ The lights flicker.
69 A The mirror finishes cracking.
70 A A long, thin piece falls and shatters in the sink.
71 A ¶ Then a loud, clear BANG from the corridor, and every one of them dives under the sinks, arms over each other, as the door rattles and the mop handle holds.
72 A ¶ Smoke curls under the door.
73 A ¶ Nobody moves.
74 A ¶ Nobody speaks.
75 A ¶ Nothing.
76 A ¶ Nadia's phone buzzes.
77 A She does not look.
78 A ¶ ON PHONE (TEXT FROM MOM): I'm coming
