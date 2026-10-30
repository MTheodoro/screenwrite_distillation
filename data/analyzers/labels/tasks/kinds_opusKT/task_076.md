You classify screenplay action lines that have NO character as their agent, for a writing tool.
Every line in the script must belong somewhere, so each marked line (`*`) gets exactly one kind:

- `setting`  : the place, scenery, light, weather, time of day, what a space looks/sounds like as a whole
               ("A cramped kitchen.", "Rain hammers the windows.", "Dawn over the harbor.", "Silence.")
- `event`    : something happens or an object/sound/vehicle/machine acts, with no character doing it
               ("The phone rings.", "A car backfires outside.", "Cash.", "The door swings shut.", "A light blinks.")
- `extra`    : done by people or creatures who are NOT characters of the scene (unnamed passers-by, a crowd that
               is not in the names list, an animal, a monster) ("A waiter passes.", "Two women lean on its bumper.")
- `camera`   : shot, edit or on-screen-text directions ("CLOSE ON the letter.", "We see...", "INSERT - phone",
               "SUPER: 1999", "Back to scene.", "INTERCUT", "Time cut.")
- `abstract` : narration, reflection, commentary, theme, time passing, things that are not visible action
               ("Some wounds never close.", "Years pass.", "This is the last time they will speak.")
- `character`: actually done by / describing a character in the names list (the marking was wrong). Then also give
               the name(s).

Units: `A` = action sentence (¶ = first sentence of a paragraph), `D` = dialogue block. Only `*` lines need a label;
the rest is context.

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusKT/group_0076.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s05139 | INT. FARMHOUSE-STYLE KITCHEN, SUBURBAN HOME - NIGHT
Detected names (may be incomplete or contain aliases): GERALD FINCH, OLIVE, TEDDY, ROSIE, DOT WALLACE, CALLER, ELEANOR
* 1 A ¶ 1974.
* 2 A The lights went out an hour ago and the house has not yet decided whether to be afraid.
* 3 A Candles, mismatched, stand on the Formica.
* 4 A Wind pulls at the storm door.
* 5 A Somewhere on the street a transformer pops, and the dark swallows the hum of the refrigerator whole.
6 A ¶ A woman in her thirties, THE WOMAN, stands at the sink in a quilted robe, scrubbing a pot that is already clean.
7 A Her husband, GERALD FINCH, forty, sits at the table, his tie loosened, pretending to read a seed catalogue by candlelight.
8 A At the far end, ruffling a pack of cards with great concentration, is his mother, OLIVE, seventy.
9 A Two children, TEDDY, 12, and ROSIE, 8, sit cross-legged on the linoleum, whispering over a flashlight.
10 A The sixth, a neighbour, DOT WALLACE, fifties, in a headscarf and curlers, has arrived to borrow a candle and stayed.
* 11 A ¶ The wall phone rings.
12 A Everyone freezes.
* 13 A It is the only thing in the house with power.
14 D THE WOMAN (drying her hands): I'll get it.
15 A ¶ She lifts the receiver.
* 16 A A man's voice, thin and fast, fills the kitchen.
17 D CALLER [V.O.]: Eleanor? It's Frank. Is Gerald there? Tell him the hospital called.
18 A ¶ The Woman, who is named Eleanor, turns the receiver away from her chest.
19 A Gerald does not look up from the catalogue.
* 20 A The page has not turned in twenty minutes.
21 D GERALD: Who was it?
22 D ELEANOR: Frank.
23 D OLIVE: Don't you tell him yet.
24 D DOT: Oh, Eleanor, don't.
* 25 A ¶ ON PHONE: a pencilled note in the margin of the telephone pad, in Gerald's handwriting: "Tues.
* 26 A 3pm.
* 27 A Dr. Prentiss."
28 A ¶ Eleanor sets the receiver on the counter.
29 A Teddy lowers the flashlight.
30 A Rosie, who is eight and misses nothing, takes her brother's hand.
* 31 A The wind rattles the door again.
32 A In the little light, Gerald folds the catalogue shut, very precisely, and lays his palm flat on its cover as if to hold it down.
33 D GERALD (finally): Put the kettle on, love. The gas still works.
34 A ¶ She does.
* 35 A The flame blooms blue, enormous, the brightest thing in the house.

### SCENE s05140 | INT. STORAGE UNIT 214 - DAY
Detected names (may be incomplete or contain aliases): PRIYA, TEO, MOVERS, WALT, CREAKING
1 A ¶ HANDHELD.
* 2 A The camera wobbles down a corridor of orange roll-up doors.
* 3 A Fluorescent hum.
4 A Priya Nair, 30s, holds the lens on herself, then swings it to a padlocked unit.
5 D PRIYA (to camera): Day three of the interviews. Everyone says Mr. Okafor's unit is just old furniture.
6 A ¶ An old man in a faded field jacket stands by the door, keys in hand.
7 A Not hostile.
8 A Not welcoming either.
9 A ¶ ON CAMERA: the old man rubs his thumb over the padlock.
10 D OLD MAN: Furniture. Yes. My wife's chairs.
11 D PRIYA: Can you say your name for the record?
12 D OLD MAN: Is it recording now?
* 13 A ¶ The phone in Priya's pocket BUZZES.
14 A She checks it, winces.
15 D PRIYA: Sorry. My producer.
16 A ¶ She thumbs the speaker on.
* 17 A Her phone crackles.
18 D TEO [V.O.] (tinny): Are you inside yet? Legal wants the release signed before you open anything.
19 D PRIYA: He signed it. We're fine.
20 D TEO [V.O.]: Priya, listen. The records came back. That name, Okafor, it's not --
* 21 A ¶ The call DROPS.
22 A Priya stares at the screen.
* 23 A Three bars.
* 24 A Nothing.
25 A ¶ The old man slides the key in.
* 26 A The lock CLACKS open.
* 27 A The door RATTLES upward on its track.
* 28 A ¶ Inside: two chairs.
* 29 A A lamp.
* 30 A And a dozen olive-green crates stacked to the ceiling, each stencilled with a unit patch.
31 D OLD MAN [CONT'D]: My name is Walt Okafor. I was never in the unit I told you about.
32 A ¶ Behind them, THE MOVERS, three men in grey coveralls, wheel a dolly down the corridor and stop dead.
33 D THE MOVERS (together): Mr. Okafor?
34 D WALT: Not yet, boys.
35 D PRIYA: Walt, what is in those crates?
36 D WALT: Open one.
* 37 A ¶ The camera drops.
* 38 A We hear only her breath, a lid CREAKING, and then silence.
39 D WALT [CONT'D]: They are not mine. I only kept them.
40 D PRIYA (whispering): These are names.
41 D WALT: Four hundred and six.
42 D PRIYA: Walt, stop. WALT ^ I'm done lying.
* 43 A ¶ The corridor lights FLICKER and go out.

### SCENE s05141 | INT. GOLDEN LOTUS NAIL SALON - AFTERNOON
Detected names (may be incomplete or contain aliases): QUINN, MARISOL, DOLORES
* 1 A ¶ The salon is narrow and too warm, a corridor of pedicure chairs under a wall of lacquer bottles arranged by colour like a slow sunset.
* 2 A Acetone hangs in the air, sweet and chemical, and a muted television in the corner plays a court reporter's silent mouth over footage of a courthouse.
* 3 A Beneath it all runs the steady tick of a wall clock that is four minutes fast.
4 A ¶ Marisol Vega, 40s, a public defender in a creased navy suit, sits with her hands spread on the table like something she is trying to keep from escaping.
5 A She has not slept.
6 A The exhaustion has made her very still, and stillness is how she has learned to look calm.
7 A ¶ Across from her, doing her nails, is Quinn Alder, 20s, who wears a name tag that says QUINN and a quiet, careful expression.
8 A Quinn is nonbinary, uses they and them, and has a way of listening that makes people say more than they planned.
9 A They file one nail, then another, never rushing.
10 A ¶ By the door, a WOMAN in a grey trench coat, sunglasses still on despite the indoors, has taken the waiting chair.
11 A She holds a paper cup of tea she does not drink.
12 A She has been there eleven minutes.
* 13 A Nobody has asked what she wants.
14 D QUINN: You have court tomorrow?
15 D MARISOL: Closing arguments. If I'm honest I'd rather be anywhere else.
16 D QUINN: Then why here?
17 D MARISOL: Because last night I realised my hands were shaking and I didn't want the jury to see it.
18 A ¶ Quinn smiles, small, and lifts her index finger to the light.
19 D QUINN: They won't. Not with this colour.
20 A ¶ The woman in the trench coat sets down her tea.
21 A The cup makes a flat plastic click against the table, and both of them look over.
22 D THE WOMAN: Ms. Vega.
23 A ¶ Marisol does not turn her head.
* 24 A This is the thing she has trained herself to do for twenty years: when the worst arrives, let it come to you.
25 D MARISOL: You're not supposed to be here.
26 D THE WOMAN: Neither are you.
27 D QUINN: Do you two know each other?
28 D MARISOL: No.
29 D THE WOMAN: Yes.
30 A ¶ They speak across each other, and Quinn looks from one to the other, the file still held in mid-air.
31 D THE WOMAN [CONT'D]: My name is Dolores Reyes. My son is the man you're about to call a liar tomorrow morning.
32 D MARISOL: Mrs. Reyes, you are a witness's mother. If you're talking to me you are violating the court's order. Please leave.
33 D DOLORES: He's twenty-three.
34 D MARISOL: Please leave.
35 D DOLORES: He told the police the truth and you are going to stand up in front of twelve strangers and say it was a story.
36 D QUINN (quietly): Excuse me. I think maybe everyone should breathe.
37 D MARISOL: Quinn, don't.
38 D DOLORES: Don't tell them not to. They're the only one in this room not afraid of me.
* 39 A ¶ This is the last time any of them will be calm in this room.
40 A ¶ Marisol stands.
* 41 A The chair legs SCRAPE the tile, and every head in the salon turns, the manicurists, the customers, the blank face of the television.
42 D MARISOL: I am doing my job.
43 D DOLORES: Your job is a knife.
44 D MARISOL: It is a promise. To a man who will go to prison for life if I don't.
45 D DOLORES: And my son?
46 D MARISOL: Is not on trial.
47 D DOLORES: Then why does it feel like he is?
48 A ¶ Dolores throws the paper cup.
* 49 A It hits the wall of lacquer, and a dozen bottles tumble, SHATTERING across the floor in red and violet and pearl.
* 50 A The smell of acetone doubles, sharp enough to sting.
51 A ¶ Quinn steps between them, both hands raised, polish brush still dripping onto their glove.
52 D QUINN: Stop. Both of you. Please.
* 53 A ¶ Nobody moves.
* 54 A A single bottle rolls, slowly, until it comes to rest against Marisol's shoe.

### SCENE s05142 | INT. OAKRIDGE LIBRARY - READING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): JAMAL, LENA, THE ORBIT, OKOYE
1 A ¶ Three strangers sit at a long table, phones face-up between them.
* 2 A The group chat on each screen is called "ORBIT-7."
* 3 A It is 11:47 PM.
4 D JAMAL (checking his phone, then the door): So you're "starfield_88"? You said you'd be taller.
5 D LENA (laughing nervously, pulling her sleeves over her hands): I said I was five-foot-two. You never listen.
* 6 A ¶ Every phone BUZZES at the same moment.
7 A Jamal reads his aloud.
8 D JAMAL (reading): "We are glad you came."
* 9 A ¶ The message is from no one.
* 10 A The chat shows three members.
* 11 A There should be four.
12 D LENA (whispering): Who sent it?
13 D THE ORBIT (from all three phones at once, flat and kind): We did.
14 A ¶ Jamal drops his phone.
15 A Lena grabs his sleeve.
16 A The third person, Okoye, who has said nothing all evening, stands slowly.
17 D OKOYE (calm, almost relieved): I told you both it would be real.
18 A ¶ Nobody in this room has ever been so afraid, or so certain, of anything.
* 19 A ¶ The lights in the reading room dim to blue, one by one.
* 20 A The phones go dark except for one word on each screen.
21 D JAMAL (backing away): It says "Home."
22 D LENA (taking Okoye's hand): Okoye, please. Say you didn't know.
23 D OKOYE (softly): I always knew.
24 D THE ORBIT (together): Thank you for coming.

### SCENE s05143 | EXT. MAPLE HOLLOW PARK - DAY
Detected names (may be incomplete or contain aliases): TESSA, CAM, FLASH MOB, DETECTIVE MARA ROY
* 1 A ¶ Ring light on a tripod.
* 2 A Phone on a gimbal.
* 3 A A fake-casual dance setup at the edge of the lawn.
4 A ¶ Tessa, 17, hair in a claw clip, loads the screen.
5 A She taps the red button twice and checks her follower count like it might have changed.
* 6 A ¶ ON PHONE: 41.2K followers.
* 7 A LIVE in 3...2...1
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
* 28 A LIVE keeps running.
* 29 A ¶ ON PHONE: 3,900 watching. chat is flying. "who is that" "behind u" "RUN"
30 D TESSA [CONT'D] (whispering): it's not funny anymore.
31 D CAM: It was never supposed to be.
32 A ¶ THE FLASH MOB, twelve kids in matching hoodies who have been stretching by the fountain, break into a synced dance.
33 A Phones up.
* 34 A Music BLASTS from a speaker.
35 A ¶ The woman stops, confused, swallowed by the crowd.
36 D TESSA [CONT'D] (grinning): go go go!
37 A ¶ He grabs the tote bag.
38 A She grabs the gimbal.
39 A They run for the gate, laughing, terrified, thumbs still on the screen.
* 40 A ¶ ON PHONE: 12K watching.
* 41 A "WHERE ARE U GOING"
42 A ¶ At the gate, the woman is already there.
43 A She lifts her sunglasses.
44 D DETECTIVE MARA ROY (calm): Hi, Tessa. Hi, Cam. Mind if I ask what's in the bag?
45 A ¶ He freezes.
46 A She freezes.
* 47 A The phone keeps filming.
48 D TESSA (very small): it's just... props.
49 D MARA: Mm. That's what the last two said.
50 A ¶ She holds out her hand.

### SCENE s05146 | INT. NIGHT BUS - MOVING - NIGHT
Detected names (may be incomplete or contain aliases): THE WOMAN IN GREEN, THE WOMAN IN BLACK
* 1 A ¶ 1953.
* 2 A Late November.
* 3 A The number 9 to the docks.
* 4 A ¶ Rain.
* 5 A It comes sideways down the windows in long grey threads, and the bus lurches through the empty streets of a city that has gone to bed without it, past shuttered tobacconists and streetlamps that bloom and vanish in the wet glass.
6 A ¶ The driver's head is a dark shape against the dashboard glow.
* 7 A Nobody speaks.
* 8 A The engine drones.
* 9 A A single bulb above the rear seats swings on its wire.
10 A ¶ A woman in a green coat sits near the back with a suitcase tied shut with string.
11 A She has not moved since the last stop, and she watches the other passenger the way a person watches a door that might open.
* 12 A ¶ Silence.
13 A ¶ The other passenger, a woman in a black coat with a veil pinned to her hat, sits three rows ahead and has been turning a gold ring on her finger for eleven minutes, round and round, as if the ring might eventually come off by itself and spare her the decision.
14 A Her face is pale and sharp.
15 A She does not look back.
16 A She knows she is being watched.
17 A She has known since Hanover Street.
* 18 A ¶ Rain.
* 19 A ¶ The bus brakes at a red light that is the only thing alive on the avenue.
20 A The woman in black reaches into her handbag.
21 A The woman in green stiffens and puts one hand on the string of the suitcase.
* 22 A ¶ Nothing.
* 23 A ¶ The handbag holds only a handkerchief.
24 A She presses it to her mouth and says nothing, and for a moment the two of them are the same woman, a mirrored pair of shoulders hunched against the same night, the same fear, the same engine thrumming through the same wet floor.
* 25 A ¶ Her phone?
* 26 A No, no phone, there are no phones.
* 27 A Only the clock above the driver: ten past one.
* 28 A Ten past one and the docks still twenty minutes away.
29 D THE WOMAN IN GREEN (finally, low): You dropped something at the last stop.
30 A ¶ The veil turns.
31 A Slowly.
32 D THE WOMAN IN BLACK: I did not.
33 D THE WOMAN IN GREEN: A letter. It had your name on it.
34 A ¶ She holds it up, a small cream envelope, soaked at one corner.
35 A She does not give it back.
* 36 A ¶ Silence.
* 37 A ¶ The light goes green.
* 38 A The bus lurches forward.
39 A Neither moves.
40 D THE WOMAN IN BLACK (very softly): Then you know where I am going.
41 D THE WOMAN IN GREEN: I know where you were going. I do not yet know where you will get off.
* 42 A ¶ The bus rounds a corner.
* 43 A Salt air.
* 44 A Gulls.
* 45 A Somewhere ahead, the dark smell of the harbour.
46 D THE WOMAN IN BLACK: My name is Eleanor Hale.
47 D THE WOMAN IN GREEN: I know. I am the one who wrote it.
* 48 A ¶ Rain.
* 49 A The bulb swings.
50 A The envelope trembles in her hand.
51 A ¶ Eleanor does not scream.
52 A She only closes her eyes, as though she has been expecting this exact sentence for years, and opens them again on a face that looks very much like her own.

### SCENE s05147 | INT. IRONWORKS GYM - EARLY MORNING
Detected names (may be incomplete or contain aliases): NARRATOR, JESS, KYLE, BIG MO
* 1 A ¶ Fluorescent tubes buzz awake one bank at a time.
* 2 A Rubber mats.
* 3 A Chalk dust drifting in the light.
* 4 A A treadmill whirs somewhere in the back.
5 D NARRATOR [V.O.]: Every gym smells the same. Sweat, bleach, and people trying to outrun something.
6 A ¶ Jess, 30s, a former detective turned personal trainer, wipes down a bench.
7 A Her knuckles are scabbed.
8 A She does not look like she sleeps.
9 D NARRATOR [V.O., CONT'D]: That's me. Jess. I used to chase the wrong people for a living. Now I help them chase their goals.
* 10 A ¶ The front door CHIMES.
11 A A man in a grey hoodie hovers by the desk, hood up, hands deep in his pockets.
12 D JESS: We're closed till six.
13 D HOODIE MAN: I'm not here to train.
* 14 A ¶ Quiet.
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
* 26 A ¶ Silence.
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
* 42 A The treadmill in the back keeps whirring, steady, patient.
43 D JESS: Kyle. How long have you known where I work?
44 D KYLE: Since the funeral.
* 45 A ¶ Nothing.
* 46 A ¶ A locker door CLANGS in the back.
47 A Both turn.
48 A ¶ From behind the lockers steps Big Mo, 50s, the gym owner, wiping his hands on a towel.
49 A He is too casual.
50 D BIG MO: Everything okay out here?
51 D KYLE: Fine.
52 D JESS: Fine.
53 D BIG MO: Because it sounds like a conversation I should be in.
* 54 A ¶ Nobody answers.
* 55 A The towel in his hand is red at the corner.
56 D NARRATOR [V.O.]: Mo kept a clean gym. Always. Except that morning.
57 A ¶ Kyle's eyes drop to the towel.
58 A Then to Jess.
59 D KYLE (quiet): He's the last person who saw her.
60 D BIG MO: Kid, you don't want to say that.
61 D KYLE: I just did.
* 62 A ¶ Silence.
63 A ¶ Jess steps between them without seeming to.
64 A Her hand finds the heavy kettlebell on the shelf.
65 D JESS: Mo. Open the back room.
66 D BIG MO: It's just storage.
67 D JESS: Then it won't take long.
68 D NARRATOR [V.O.]: That was the last honest thing any of us said in that building.
69 A ¶ Mo smiles.
70 A It is not a happy smile.
71 A He drops the towel.
* 72 A ¶ Behind the lockers, a phone begins to RING.
* 73 A Soft.
* 74 A Persistent.
75 A ¶ All three look toward the sound.
* 76 A ¶ The ringtone is a pop song the sister used to hum while she lifted.

### SCENE s05149 | INT. COUNTY PAROLE OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): THE WOMAN, KIP, KIM, MARGARET
* 1 A ¶ Fluorescent light.
* 2 A The kind that hums.
* 3 A A corridor of closed doors and one open one at the end where a lamp burns yellow.
* 4 A ¶ Rain on the window.
* 5 A Rain on the roof.
* 6 A The building ticks as it cools.
7 A ¶ He sits alone in the chair across from the empty desk.
8 A Waiting.
9 A His coat is still damp and he has not taken it off.
10 A His hands rest on his knees like something set down and forgotten.
11 A Nobody told him the office closed at five.
12 A Nobody told him anything.
* 13 A ¶ Silence.
* 14 A ¶ The wall clock says 9:41.
* 15 A The wall clock has said 9:41 since he walked in.
* 16 A ¶ A door opens down the hall.
* 17 A Footsteps, slow, and the squeak of rubber on linoleum.
18 A A woman in a long dark cardigan, grey hair pinned back, appears in the doorway with a mug in both hands.
19 A She does not look surprised to see him.
20 A She looks like she has been expecting him for years.
21 D THE WOMAN: You're late Kip.
22 D KIP: I'm not Kip. I'm Kim.
23 D THE WOMAN: Kim then.
24 A ¶ She sits behind the desk.
25 A Opens the folder.
* 26 A The folder is very thin.
* 27 A ¶ Nothing.
28 A ¶ Her eyes move down the page and then up, and for a moment he thinks he sees something move behind her, a shape in the dark of the hallway, tall, patient.
29 D KIM: Who else is here.
30 D THE WOMAN: Nobody. Just us.
31 D KIM: I heard someone.
32 D THE WOMAN: You hear a lot of things, Kim. It's in your file.
33 A ¶ She turns the folder around so he can read.
* 34 A His name.
* 35 A His date of birth.
36 A A line of handwriting beneath, in red, that he cannot make himself read aloud.
* 37 A ¶ Rain.
38 D KIM: That's not my handwriting.
39 D THE WOMAN: No. It's his.
40 D KIM: Whose?
41 A ¶ She does not answer.
* 42 A The lamp flickers.
* 43 A In the corridor, the footsteps start again, closer now, unhurried.
44 D KIM [CONT'D] (barely): Please tell me that's you.
45 D THE WOMAN: I'm right here.
* 46 A ¶ The footsteps stop at the door.
47 A He does not turn around.
48 A He cannot.
49 A Every muscle in his neck has locked.
50 A ¶ The Woman closes the folder gently.
51 D THE WOMAN [CONT'D]: My name is Margaret. And that is Kip.
* 52 A ¶ Behind him, the door opens.
* 53 A ¶ Nothing.
* 54 A ¶ Then a breath that is not his own.
55 D KIM (whispering): Kip is dead.
56 D MARGARET: Yes.
* 57 A ¶ Silence.
* 58 A ¶ The clock moves.
* 59 A 9:42.

### SCENE s05151 | INT. CHURCH BASEMENT - AA MEETING - NIGHT
Detected names (may be incomplete or contain aliases): TIME, THE WOMAN
* 1 A ¶ Folding chairs in a circle.
* 2 A Burnt coffee.
* 3 A A banner: "ONE DAY AT A TIME."
* 4 A ¶ Empty chairs, all of them.
* 5 A Except one.
6 A ¶ THE WOMAN, 40s, cardigan, big purse on her lap.
7 A She waves at nobody.
8 D THE WOMAN: Hi everybody!
* 9 A ¶ (beat for the audience)
10 A ¶ She sits up.
11 A Beams.
12 A Waits for the applause that doesn't come.
13 D THE WOMAN [CONT'D]: Wow. Tough room.
* 14 A ¶ Silence.
* 15 A A fluorescent buzz.
16 D THE WOMAN [CONT'D]: So. Hi. I'm... let's say I'm new here. Three days sober. Well, "sober." Dry. Technically damp.
17 A ¶ She laughs at herself.
* 18 A Nobody joins.
* 19 A ¶ Her purse.
* 20 A It wiggles.
21 A ¶ She pats it.
22 A Smiles wider.
23 D THE WOMAN [CONT'D]: That's just my sponsor. She's shy.
* 24 A ¶ Nothing.
* 25 A Another wiggle.
* 26 A A faint croak.
27 D THE WOMAN [CONT'D]: Look, I know how this sounds. I had a little problem. Nothing major! A few wishes. A few... frogs.
28 A ¶ She opens the purse.
29 A Two bulging eyes peer out.
30 D THE WOMAN [CONT'D]: Kim is the one on the left. Kip is the one on the right. Honestly, I never could tell which is which. My ex-husbands. They had names for a reason.
* 31 A ¶ The door at the top of the stairs creaks open.
* 32 A Footsteps.
* 33 A Heavy.
34 A The sound of a staff tapping the steps.
35 A ¶ She does not look up.
36 A Her smile does not move.
37 D THE WOMAN [CONT'D] (whispers to the purse): My name is Brenda. And I have been a witch for four hundred years.
38 A ¶ The staff stops.
* 39 A Right behind her.
40 A ¶ She will not turn around.
* 41 A ¶ Rain on the high windows.

### SCENE s05152 | INT. HELIX LABS - OPEN-PLAN OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): IMANI, JONAH, IMANI'S
* 1 A ¶ SUPER: "DAY 4 OF THE LOCKDOWN"
* 2 A ¶ Standing desks.
* 3 A Beanbags.
* 4 A A neon sign: MOVE FAST.
* 5 A The glass doors are chained from the inside.
6 A ¶ IMANI, 30s, sleeves rolled, crouches behind a kombucha fridge.
* 7 A Her breath fogs.
* 8 A ¶ INSERT - HER PHONE
* 9 A ¶ A single bar of signal.
* 10 A Contact: JONAH.
* 11 A Ringing.
12 A ¶ Across the floor, TWO TEENAGE INTERNS share a vending-machine bag of chips by a window, whispering.
* 13 A A golden retriever sleeps under a desk, ribs rising and falling.
14 D JONAH [V.O.] (static, breathing): Imani. Don't talk. Listen.
15 D IMANI (whisper): Where are you?
16 D JONAH [V.O.]: Stairwell. Below you. The thing's in the vents, it follows the heat. Kill the lights on the east side and it moves.
* 17 A ¶ IMANI'S POV - the east wall.
* 18 A A bank of switches.
* 19 A Forty feet of open floor between.
20 D IMANI: That's forty feet in the open.
21 D JONAH [V.O.]: Then run.
22 A ¶ She runs.
* 23 A Beanbags, cables, a skateboard she nearly trips on.
* 24 A The dog lifts its head.
25 A ¶ Her hand slams the switches.
* 26 A East side DARK.
* 27 A ¶ Silence.
* 28 A Then a metallic scrape in the ceiling, travelling away.
29 A ¶ Both interns give her a thumbs up.
30 A She almost laughs.
* 31 A ¶ The dog barks once.
* 32 A Sharp.
* 33 A The scraping stops.
* 34 A Reverses.
* 35 A ¶ The stairwell door BURSTS open.
36 A JONAH, 30s, bleeding at the temple, stumbles in with a fire axe.
37 D JONAH (not on the phone anymore): It was never in the vents.
38 A ¶ He looks up.
39 A Slowly, so does she.

### SCENE s05154 | EXT. CITY HALL PLAZA - CLIMATE PROTEST - DAY
Detected names (may be incomplete or contain aliases): JEN, SAM, BIG DAVE, MRS. K, OZ, PIP
* 1 A ¶ A sea of cardboard signs and one very large papier-mache polar bear.
* 2 A Drums thump.
* 3 A A sky the colour of weak tea.
4 A ¶ JEN, 30s, clipboard, megaphone, is losing an argument with SAM, 30s, her ex-fiance, who is carrying an end of the polar bear and walking backwards into a bin.
5 D SAM: I'm just saying, the bear's head is crooked.
6 D JEN: The bear is perfect, Sam. You're the one holding it wrong.
* 7 A ¶ The bin TOPPLES.
* 8 A A pigeon explodes upward.
9 A BIG DAVE, 50s, a bear of a man in a full beekeeper suit, catches the bear's falling head with one hand and a falafel in the other, while MRS. K, 70s, tiny, ferocious, in a knitted hat that says NO PLANET B, smacks him with her sign for taking the last wrap and a drone hums overhead, trailing a banner from the city that says PLEASE DISPERSE.
10 D BIG DAVE: Mrs. K! I'm wearing a bee suit!
11 D MRS. K: Then you should have a stinger.
12 A ¶ A STRANGER, 30s, silver jumpsuit, no sign, no shoes, steps out from behind the bear and stares straight at the sky.
* 13 A In his hand, a small device that BUZZES.
14 D JEN (to Sam, quiet): Who's that?
15 D SAM: Your date?
16 D JEN: I didn't bring a date.
17 A ¶ The stranger crosses to her.
18 A Holds up the device.
* 19 A It BEEPS twice, green.
20 D STRANGER: Forgive me. I am from two hundred years from now. This is the last place it went right.
21 D BIG DAVE (through the veil): Is he with the bear?
22 A ¶ The stranger turns to Mrs. K, who's squinting at him.
23 D MRS. K: What's your name, dear?
24 D STRANGER: Oz. Short for Ozymandias. My mother was a poet.
25 D OZ (beat): I am here to ask you not to stop.
* 26 A ¶ A SQUEAK.
27 A PIP, 12, Jen's niece, pops out from inside the polar bear wearing the head like a helmet.
28 D PIP: Aunt Jen? I think I'm stuck.
29 A ¶ Everyone turns.
30 A Sam starts to laugh.
31 A Jen starts to laugh.
* 32 A The drone spins away, confused.
33 A Big Dave offers Oz half the falafel.
34 D OZ (taking it, solemn): In my time, this has been extinct for ninety years.
35 D BIG DAVE (eating): The falafel?
36 D OZ: The hope.
37 A ¶ Mrs. K pats his arm.
38 D MRS. K: Then eat up, dear. We've got a march.

### SCENE s05155 | INT. NIGHT BUS - ROUTE 47 - NIGHT
Detected names (may be incomplete or contain aliases): MAN, HI-VIS JACKET, ANIKA, RILEY, ANIKA'S
* 1 A ¶ SUPER: "2:14 A.M."
* 2 A ¶ Sodium streetlights strobe past rain-streaked windows.
* 3 A The bus is nearly empty.
4 A At the back, TWO TEENAGERS share one pair of earbuds, asleep against each other.
5 A Near the front, a MAN IN A HI-VIS JACKET snores, a lunchbox on his knee.
6 A ¶ ANIKA, 40s, scrubs under a parka, sits by the middle doors, gripping a paper cup of coffee she isn't drinking.
7 A ¶ RILEY, 20s, they/them, climbs on at the next stop with a rucksack, taps a card.
8 A Sits across the aisle.
* 9 A ¶ INSERT - ANIKA'S HAND
10 A ¶ The coffee cup trembles.
11 A Just slightly.
12 A She sets it on her knee to steady it.
13 D RILEY (not looking over; unzipping the rucksack): Long shift?
14 D ANIKA (pocketing her badge): Long enough.
15 D RILEY (taking out a water bottle): You a nurse?
16 D ANIKA (beat): Why?
17 D RILEY (shrugging, drinking): Shoes.
18 D ANIKA (looks down at her own shoes, almost smiles): Right.
* 19 A ¶ The bus brakes.
* 20 A Hiss of the doors.
* 21 A Nobody gets on.
* 22 A Nobody gets off.
23 D RILEY (screwing the cap back on): My mum was a nurse. Fourteen years nights. She used to say you can tell who's had a bad one by how they hold a cup.
24 D ANIKA (turning the cup in her hands): And how do they hold it?
25 D RILEY (nodding at it): Like that.
* 26 A ¶ Silence.
* 27 A The bus rolls through an underpass.
* 28 A Orange light, dark, orange light.
* 29 A ¶ ANIKA'S POV - her phone, face-up on her thigh.
* 30 A A missed call.
* 31 A HOSPITAL (WARD 6).
* 32 A Seven times.
33 D RILEY (leaning back, closing their eyes): You can ring them back, you know.
34 D ANIKA (turning the phone over): It's fine.
35 D RILEY (eyes still closed): It isn't, though.
36 D ANIKA (sharp): You don't know anything about it.
37 D RILEY (opening one eye): No. I don't.
38 A ¶ The teenagers at the back stir, resettle.
39 A The man in the hi-vis snorts and swallows mid-snore.
* 40 A The driver's radio murmurs a football score.
41 D ANIKA (a long breath; rubbing her thumb along the cup's rim): There was a boy. Eleven. Appendix. Routine. I did the checks, I did all of them, twice. And I went on my break.
42 D RILEY (quiet; not moving): Okay.
43 D ANIKA (not hearing them): Twelve minutes. I was gone twelve minutes.
44 D RILEY (sitting up, turning to face her): And?
45 D ANIKA (staring at the window): And the one who came on after me, she saw it. She caught it. Because she was looking at the monitor.
46 D RILEY (beat; slowly): So he's alive.
47 D ANIKA (nodding, once): He's alive.
48 D RILEY (a small laugh, gentle): So why are you on a night bus at two in the morning like it's a funeral?
49 D ANIKA (finally looking at them): Because I wasn't looking.
* 50 A ¶ The bus lurches.
* 51 A The cup tips.
52 A Coffee spills across her knee and she doesn't flinch.
53 A Riley takes a napkin from a pocket and holds it out, across the aisle, until she takes it.
54 D RILEY (softly; sitting back): You looked, though. Every time you could. That's the whole job.
55 D ANIKA (dabbing the stain; not agreeing): Mm.
56 D RILEY (pulling the cord for the next stop): This is me.
* 57 A ¶ The bus slows.
* 58 A The bell DINGS.
59 A Riley stands, shoulders the rucksack, swaying with the movement.
60 D RILEY [CONT'D] (at the doors, over their shoulder): Ring the ward.
61 D ANIKA (not looking up): Go home, Riley.
62 A ¶ Riley stops.
63 D RILEY (a beat, gentle): I didn't tell you my name.
64 A ¶ Anika lifts her head.
65 A Neither of them moves.
* 66 A The doors hiss open onto the empty, wet street.
67 A Riley steps out and doesn't look back.
* 68 A ¶ The bus pulls away.
69 A In the rear window, a small figure stands under a streetlight, watching it go.
70 A ¶ Anika turns her phone over.
71 A Her thumb hovers, then presses.
* 72 A It rings once.
73 D ANIKA [CONT'D] (into the phone, steady): It's Anika. Tell me how he is.
74 A ¶ The man in the hi-vis opens his eyes and looks at her.
75 A Then closes them again.

### SCENE s05156 | INT. NIGHT BUS - ROUTE N9 - NIGHT
Detected names (may be incomplete or contain aliases): LUCIA AND KATYA, KATYA, THUNK, DRIVER, WINSTON
* 1 A ¶ Rain on the windows.
* 2 A The bus is a lit aquarium gliding through a dark city.
* 3 A Neon smears past.
4 A In the back row, two teenagers share a bag of chips and a single, furious whisper.
5 A ¶ Lucia, 30s, in a rumpled bridesmaid dress and trainers, sits with a bouquet she's clearly been dragging around for hours.
6 A She sneezes.
* 7 A The bouquet shakes.
* 8 A A petal lands on her phone.
* 9 A ¶ The doors HISS.
10 A Katya, 30s, also in a bridesmaid dress, the same hideous mint green, climbs aboard, drenched, holding her heels in one hand.
11 A ¶ They see each other.
12 A Freeze.
13 D LUCIA: You.
14 D KATYA: No.
15 D LUCIA: You're wearing it.
16 D KATYA (sitting across from her): Everyone's wearing it. It's a bridal party. That's the horror of it.
* 17 A ¶ The bus lurches.
18 A Katya slides, grabs a pole, and the heels go flying.
* 19 A One hits the driver's screen with a THUNK.
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
* 41 A ¶ The bus slows.
* 42 A The screen over the driver flickers: NEXT STOP: THE FUTURE.
43 A The three of them look up.
44 D DRIVER [V.O.]: Sorry about that. Software update.
* 45 A ¶ The doors HISS open on a street that is bright, white, and absolutely silent.
46 D KATYA: Is that normal?
47 D WINSTON (chewing): I've seen worse.
48 A ¶ Lucia stands.
49 A Offers her the bouquet.
50 D LUCIA: Come on. Let's go find out.

### SCENE s05157 | INT. LINCOLN HIGH SCHOOL - GIRLS' BATHROOM - DAY
Detected names (may be incomplete or contain aliases): NADIA, PHONE, KOFI, LUCAS, MS. BRANDT, JUNIORS
* 1 A ¶ SUPER: "DAY 11 OF THE SIEGE"
* 2 A ¶ Cracked tile.
* 3 A A mirror with one long diagonal fracture.
* 4 A Dust sifts from the ceiling with every distant THUMP.
* 5 A ¶ Outside, beyond the frosted window, smoke.
* 6 A Somewhere a siren winds down and stops.
7 A ¶ NADIA, 17, backpack on her chest, crouches in the end stall with her knees pulled up.
8 A She counts under her breath.
* 9 A ¶ ON PHONE (TEXT FROM MOM): where r u
* 10 A ¶ ON PHONE (TEXT FROM MOM): please
* 11 A ¶ No bars.
* 12 A The message sits there, sending.
* 13 A ¶ CLOSE ON the phone's battery icon.
* 14 A 4%.
* 15 A ¶ The door SLAMS open.
16 A Nadia flinches.
17 A KOFI, 17, flashlight clipped to his collar, pushes in backwards, dragging LUCAS, 16, who is limping, by the strap of his bag.
18 A Kofi kicks the door shut and wedges a mop handle under the knob.
19 D KOFI (whispering): Girls' bathroom. Seriously?
20 D LUCAS: It was the only one with a lock.
* 21 A ¶ Silence.
* 22 A ¶ A drip.
* 23 A A fan that doesn't turn.
24 D NADIA (from the stall): It doesn't have a lock.
25 A ¶ Kofi spins, flashlight up.
26 A Nadia opens the stall door an inch.
27 A She lowers her phone.
28 D KOFI: Nadia?
29 D NADIA: Put the light down.
30 A ¶ He lowers it.
31 A Lucas slumps against the sinks and slides to the floor, wincing.
* 32 A ¶ INSERT - LUCAS'S ANKLE.
* 33 A Swollen, black at the edges.
* 34 A ¶ The wall behind them SHUDDERS.
* 35 A Plaster falls.
36 A A long, low rumble passes through the floor, and the three of them freeze at once, hands on whatever is nearest, until it passes.
* 37 A ¶ Dust.
* 38 A Ringing.
* 39 A Nothing.
40 D MS. BRANDT [O.S.] (through the door, muffled): Is anyone in there?
41 A ¶ All three look at each other.
42 A Kofi holds a finger to his lips and mouths NO. Nadia nods.
43 D MS. BRANDT [O.S., CONT'D]: It's Ms. Brandt. I can hear you breathing. Let me in.
44 D LUCAS (mouthing): It's a trick.
45 D NADIA (whispering): It's not a trick. It's Brandt.
46 D KOFI (whispering): Brandt left on the first bus.
* 47 A ¶ Silence.
* 48 A The handle turns.
* 49 A Stops against the mop.
* 50 A ¶ On the floor, light spills from under the door in a slow, even sweep.
* 51 A Something glides past outside, and then another, and a third.
52 A ¶ THE JUNIORS, a dozen kids in the corridor, press flat to the wall, quiet as shadows, led by a hand-sign nobody dares to say aloud.
53 A They pass the door.
54 A They are gone.
* 55 A ¶ ON PHONE (TEXT FROM MOM): I love you. whatever happens
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
* 68 A ¶ The lights flicker.
* 69 A The mirror finishes cracking.
* 70 A A long, thin piece falls and shatters in the sink.
71 A ¶ Then a loud, clear BANG from the corridor, and every one of them dives under the sinks, arms over each other, as the door rattles and the mop handle holds.
* 72 A ¶ Smoke curls under the door.
73 A ¶ Nobody moves.
74 A ¶ Nobody speaks.
* 75 A ¶ Nothing.
* 76 A ¶ Nadia's phone buzzes.
77 A She does not look.
* 78 A ¶ ON PHONE (TEXT FROM MOM): I'm coming

### SCENE s05158 | EXT. BORDER CHECKPOINT - DAWN
Detected names (may be incomplete or contain aliases): OKONKWO, GRIEVE, HOBBS, VANE, LENA
* 1 A ¶ Mist on a concrete lane.
* 2 A A barrier arm, striped red and white.
* 3 A A kiosk with one lit window.
4 A ¶ Grieve, 50s, border officer, tired, holds a clipboard against the cold.
5 A Opposite him stands Okonkwo, 40s, a solicitor in a sodden trenchcoat, a briefcase at her feet.
6 A Behind her in the car, Tomasz, 30s, and a small girl, Lena, 6, asleep on his shoulder.
* 7 A ¶ INSERT - THE PASSPORT.
* 8 A The photograph does not match the face in the car.
* 9 A ¶ Silence.
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
* 33 A ¶ BACK TO SCENE.

### SCENE s05159_0 | INT. HOPE VALLEY FERTILITY CLINIC - WAITING ROOM - MORNING
Detected names (may be incomplete or contain aliases): BETH, CAL, INTERCOM
* 1 A ¶ We see a bright, quiet waiting room.
* 2 A Pale green walls.
* 3 A A fish tank bubbling in the corner.
* 4 A A rack of old magazines no one has touched.
* 5 A Sunlight comes through the blinds in thin stripes.
* 6 A ¶ CLOSE ON a wall clock.
* 7 A It reads 9:02.
8 A ¶ BETH, 30s, nervous, in a yellow cardigan, sits on the edge of a chair, twisting a tissue.
9 A Next to her is CAL, 30s, tall, dressed too neatly, holding a folder of forms.
10 D CAL (smiling too hard, patting her knee): It's going to be great.
11 D BETH (whispering): You said that about the camping trip.
12 D CAL (a beat): Okay, that was a different kind of great.
* 13 A ¶ The fish tank bubbles.
* 14 A A little orange fish swims in a circle.
15 A Beth watches it as if it knows something.
16 D INTERCOM [V.O.]: Beth and Cal Whitaker, Dr. Okafor will see you now. Room three, please.
17 D BETH (standing, dropping the tissue): Oh gosh. That's us. That's definitely us.
18 D CAL (picking it up, handing it back): It's us. Breathe.

### SCENE s05159_1 | INT. DR. OKAFOR'S OFFICE - CONTINUOUS
Detected names (may be incomplete or contain aliases): OKAFOR, BETH, CAL, ^CAL, TINA
* 1 A ¶ A warm room.
* 2 A Diplomas on the wall.
* 3 A A box of tissues, strategically placed.
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
* 16 A The room goes quiet for a second.
17 D DR. OKAFOR (taking off her glasses): That is a long time to hope.
18 A ¶ Beth's face crumples a little.
19 A Cal takes her hand, and she lets him.
20 D BETH (wiping her eye): Sorry. I told myself I wouldn't do this.
21 D DR. OKAFOR (sliding the tissue box across): Everyone does. It's one of the reasons I keep a big box.
* 22 A ¶ The door opens a crack.
23 A TINA, 20s, a nurse in cartoon scrubs, leans in.
24 D TINA (whispering, apologetic): Doctor, I'm so sorry. The lab is on the phone.
25 D DR. OKAFOR (to the couple): Excuse me one moment.
26 A ¶ She picks up the desk phone.
* 27 A We hear a faint voice through it.
28 D TINA [V.O.] (through the phone, tinny): It's about the samples from last week, Doctor. They've come back.
29 D DR. OKAFOR (listening, her face changing; beat): Thank you, Tina. I'll tell them myself.
30 A ¶ She puts the phone down very slowly.
31 A Beth grips Cal's hand so hard his fingers go white.
32 D BETH (very small): Is it bad?
33 D DR. OKAFOR (smiling, for the first time all morning): Beth. Cal. I think you should both take a deep breath.
* 34 A ¶ Outside, the fish swims once around the tank and stops.
* 35 A The light in the blinds turns gold.
36 D CAL (breathless): Is that a yes?
37 D DR. OKAFOR (nodding): It's a yes.
38 A ¶ Beth bursts into tears.
39 A Cal laughs, jumps up, knocks over the model on the desk, and catches it in the air.
40 D CAL [CONT'D] (holding it up like a trophy): Sorry! I got it! I got it!
41 D BETH (laughing through tears): Cal, sit DOWN.
42 A ¶ He sits.
43 A They hold each other.
44 A Dr. Okafor looks away to give them privacy and quietly dabs her own eyes.
* 45 A ¶ Sunlight.
* 46 A Quiet.
* 47 A Somewhere, a baby cries in another room and everyone smiles.

### SCENE s05160 | INT. NORTHSIDE SOUND - LIVE ROOM - NIGHT
Detected names (may be incomplete or contain aliases): JUNIPER, OSEI, MARGUERITE
* 1 A ¶ ON CAMERA: handheld, shaky, a red REC dot in the corner.
2 A The mic stand fills the frame, then swings toward JUNIPER, 19, headphones around their neck, staring at a lyric sheet.
3 D JUNIPER (to camera): This is take nineteen. They said twelve was fine. I said twelve was fine.
4 D OSEI [O.S.]: Twelve was not fine.
* 5 A ¶ The camera whips left.
6 A OSEI, 20s, engineer, hunched at the glass of the control room.
* 7 A A studio dog sleeps under his chair.
8 A A pizza guy hovers at the door with two boxes, unsure whether to knock.
9 D OSEI [CONT'D]: You rushed the bridge.
10 D JUNIPER: I didn't rush -- they're the one who
11 D OSEI: -- you came in early on "stay" --
12 D JUNIPER: -- because the click track is wrong, Osei, it's wrong, I told you --
* 13 A ¶ A phone BUZZES on the console.
14 A Osei thumbs it.
* 15 A Speaker.
16 D MARGUERITE [V.O.] (tinny, over the phone): Hi, babe, is it done? The label guy is asking.
17 D JUNIPER: He's asking?
18 D OSEI: Marguerite, not now --
19 D MARGUERITE [V.O.]: -- he wants the single Friday, Juniper, they have a slot, and you promised --
20 D JUNIPER: I never promised! You promised! You said I'd get to say when it's done!
21 A ¶ Juniper rips the headphones off and hurls them.
* 22 A They CRACK against the glass.
* 23 A The dog bolts.
24 A The pizza guy backs out.
* 25 A The camera drops, tilts, catches the ceiling tiles, and cuts to black.

### SCENE s05161 | INT. SWIFTLINE DELIVERY WAREHOUSE - MORNING
Detected names (may be incomplete or contain aliases): BARRY, NADINE, ROBIN, DO NOT
* 1 A ¶ We see a huge warehouse with many shelves and conveyor belts.
* 2 A Its early morning and the lights are still turning on one by one.
3 A BARRY, 40s, a shift supervisor who thinks he is very important, walks in carrying a coffee and a clipboard.
* 4 A ¶ CLOSE ON Barry's name tag, which says "BARRY - SUPERVISOR" in big letters.
5 D BARRY: Good morning team! Big day today!
* 6 A ¶ Nobody answers.
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
* 22 A ¶ We see the belt carry a small brown box down the line.
* 23 A It is the only box that is not scanned by the machine.
* 24 A CLOSE ON the box.
* 25 A It has a red sticker that says "DO NOT OPEN - PRIVATE".
26 D NADINE [CONT'D] (reading the label): Barry what is this?
27 D BARRY (too fast): Its nothing. Just a regular box. Put it back.
28 D ROBIN: It doesnt have a barcode.
29 D BARRY: Some boxes dont have barcodes Robin that is a known thing.
30 A ¶ Robin lifts the box off the belt.
* 31 A It is light.
* 32 A Something inside RATTLES softly.
33 A Barry's face goes white and he drops his clipboard, which CLATTERS on the concrete floor.
34 D NADINE (to herself): Oh no. He's sweating.
35 D BARRY: Please put it down. Please. Both of you.
36 D ROBIN (to the room): Is it a bomb?
37 D BARRY: Its not a bomb!
38 D NADINE: Then open it.
39 D BARRY: I cant let you open it!
40 A ¶ Nadine takes the box from Robin and in one move she tears the red sticker and rips the tape.
41 A Robin leans in, Barry covers his eyes with both hands, and a forklift driver in the distance honks twice for no reason.
* 42 A ¶ CLOSE ON the open box.
* 43 A Inside are forty-two tiny bottles of hotel shampoo, six stolen name tags from other supervisors, and a laminated sign that says "WORLDS BEST BOSS".
* 44 A ¶ Silence.
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

### SCENE s05162 | EXT. SKYLINE ROOFTOP BAR - NIGHT
Detected names (may be incomplete or contain aliases): HALE, BRANDT
1 A ¶ Detective Annika Brandt, 40s, sits at the far end of the bar with a club soda and a view of the elevator.
2 A She keeps her jacket on.
3 A Under it, a wire taped below the ribs.
* 4 A Her phone sits face up beside the glass.
* 5 A ¶ The phone BUZZES.
6 A She lets it ring twice, then answers and puts it to her ear.
7 D HALE [V.O.]: Tell me you're up there.
8 D BRANDT: Corner. By the heater. Where are you?
9 D HALE [V.O.]: Parking structure. Level three. I'm giving it five minutes.
10 D BRANDT: Five minutes is fine.
11 D HALE [V.O.]: You come alone?
12 D BRANDT: You asked me to.
* 13 A ¶ The line goes quiet.
* 14 A Wind snaps a string of lights overhead.
15 A She watches the elevator numbers climb on the display, 2, 3, 4, and her thumb goes still on the glass.
16 D BRANDT [CONT'D]: Hale. Level three. You said that already?
17 D HALE [V.O.]: Yeah. Why?
18 D BRANDT: No reason. Come on up.
19 A ¶ She ends the call.
* 20 A The phone lights.
* 21 A ¶ ON PHONE: unknown number -- "ur not alone up there"
22 A ¶ She reads it once.
23 A She does not look around.
24 A She sets the phone face down and slides a hand into her jacket, thumbs the transmitter.
25 D BRANDT [CONT'D] (low, to the wire): Unit two, confirm the garage camera. Level three. Is anyone there?
* 26 A ¶ A beat.
* 27 A Nothing in the earpiece.
* 28 A Static, then a CLICK.
* 29 A ¶ The elevator DINGS.
30 A Tomasz Hale, 50s, rumpled suit, steps out and scans the roof.
31 A He sees her, hesitates, then crosses to the stool beside hers.
32 A He sits too carefully, as though the cushion might be wired.
33 D HALE: You look like a cop.
34 D BRANDT: You look like a man who's late.
35 D HALE: I wasn't in the garage.
36 A ¶ She turns her head.
37 D BRANDT: Say that again.
38 D HALE: I took the stairs. I was on the stairs the whole time. The call, it wasn't me calling.
* 39 A ¶ Her phone BUZZES against the bar.
40 A She doesn't touch it.
41 A He nods at it.
42 D HALE [CONT'D]: That's him. He's got my phone. He's got my kid's school schedule too, Detective, that was the part I couldn't, I had to come.
43 D BRANDT: Who has your phone?
44 D HALE: The man at the table behind you. Blue shirt. Don't turn around.
* 45 A ¶ The ice in her glass shifts.
* 46 A Somewhere behind her a chair scrapes.
* 47 A ¶ ON PHONE: unknown number -- "good. now both of u stand up"
48 D BRANDT (barely moving): How long has he been sitting there?
49 D HALE: Since before I got here. He walked me up.
50 D BRANDT: And the garage?
51 D HALE: There's no one in the garage. There's never been anyone. He wanted you to say it out loud.
52 A ¶ She exhales.
53 A Her hand comes out of the jacket empty.
54 A Behind her, a glass is set down, softly, and a shadow lengthens across the bar top.
55 D BRANDT: Then he's already heard everything.
56 D HALE: Every word.
* 57 A ¶ The phone BUZZES a third time.
58 A Neither of them looks at it.
59 A She slides off the stool, standing straight, still not turning around.
60 A He stays seated, staring into his lap.
61 D BRANDT (quietly): Stay seated, Tomasz. Whatever happens next, you stay in that chair.
62 D HALE: What are you going to do?
63 A ¶ She lifts the wire's transmitter out from under her shirt in plain view and lays it on the bar.
64 D BRANDT: Say hello.
65 A ¶ She turns around.

### SCENE s05164 | INT. NIGHT BUS 41 - MOVING - NIGHT
Detected names (may be incomplete or contain aliases): MIRA CALLING, HOODIE GUY, TEODOR
* 1 A ¶ SERIES OF SHOTS:
* 2 A ¶ -- Rain on the window.
* 3 A City lights smear into gold stripes.
* 4 A ¶ -- CLOSE ON a bus card tapping the reader.
* 5 A BEEP.
* 6 A ¶ -- ANGLE ON the back rows.
* 7 A Nearly empty.
* 8 A A bag of fries going cold.
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
* 21 A ¶ -- INSERT: a cracked phone screen on his knee.
* 22 A It lights up: "MIRA CALLING?" no, "DAD HOME".
* 23 A It is silent.
24 A He sets it face down.
25 D TEODOR [V.O.]: Tell me which stop. I'll pick you up. We don't have to talk.
26 D MIRA (her voice breaks): You'd just stand there with the car running, Dad. You'd say nothing for forty minutes.
27 D TEODOR [V.O.]: That's, that's not --
28 D MIRA (cutting in, louder): It is! It's what you do! Mom left and you said nothing, I got in your car and you said nothing, I said I hated you and you said NOTHING!
29 A ¶ Heads on the bus lift.
30 A The Hoodie Guy pushes his hood back.
31 A Gray stubble, red eyes.
* 32 A Her phone is still at her ear.
33 A His mouth moves on the same words as the voice in the speaker.
34 D TEODOR [V.O.] (and across the aisle, aloud, the same sentence): I'm sorry, Mira.
35 A ¶ BACK TO SCENE: Mira slowly lowers the phone.
* 36 A The call timer ticks.
* 37 A The bus HISSES to a stop.
38 D MIRA (staring at him, barely audible): Dad?
39 D TEODOR (standing in the aisle, hands open, voice thick): Say it again. Say it all again, to my face, while I'm standing here.
* 40 A ¶ The doors fold open on the rain.
41 A Neither of them moves.

### SCENE s05166 | INT. SUDS & DUDS LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): COLT, MO, PRISCILLA, TESSA, BLARES
1 A ¶ Tessa, 17, sits on a dryer typing fast while Jaylen, 17, watches the door and Mo, 16, hugs a duffel that clearly is not full of laundry.
2 A Priscilla, 18, the attendant, mops near the machines pretending she doesn't hear anything.
3 A Colt, 19, in a letterman jacket, leans on the soda machine, eyes locked on the duffel.
* 4 A ¶ ON PHONE: Tessa to Group: "he's HERE. do NOT look at him"
5 A ¶ Everyone looks at him.
6 D COLT: Yo. Mo. You got my stuff or what.
7 D MO: It's not your stuff. It's Wren's.
8 A ¶ Wren, 17, hoodie up, emerges from the bathroom drying her hands, sees Colt, stops dead.
9 A Jaylen steps between them, Tessa slips off the dryer and edges toward the exit, Priscilla's mop bumps the duffel, and a dozen glossy flash drives spill out across the wet floor like silver fish.
10 D PRISCILLA: Nope. I didn't see that. I'm on break.
* 11 A ¶ ON PHONE: Wren to Tessa: "RUN"
12 D TESSA (under her breath): I literally told you.
13 A ¶ Colt grins and grabs a drive.
14 A Wren lunges.
* 15 A The lights flicker, a dryer buzzer BLARES, and everybody freezes as blue and red light sweeps across the front window.

### SCENE s05167 | INT. GREENFIELD VETERINARY CLINIC - AFTER HOURS
Detected names (may be incomplete or contain aliases): LUCAS, ALMA PRUITT, ABERNATHY, DEPUTY HARLOW
* 1 A ¶ Rain.
* 2 A ¶ The waiting room.
* 3 A Empty chairs.
* 4 A A fish tank bubbling.
* 5 A A wall clock reads 11:48.
6 A ¶ LUCAS, 20s, a vet tech in scrubs, kneels beside the reception desk, a flashlight in his teeth, looking at the floor.
7 A DR. ALMA PRUITT, 50s, stands over him holding a clipboard.
8 A MRS. ABERNATHY, 70s, in a raincoat, sits in a plastic chair with an empty cat carrier on her lap.
* 9 A ¶ Silence.
10 D DR. PRUITT: Lucas. Tell me again.
11 D LUCAS (taking the flashlight out): She was in the carrier at nine. I checked her. I swear I checked her.
12 D MRS. ABERNATHY: Biscuit doesn't just disappear.
* 13 A ¶ Nothing.
14 A ¶ Lucas stands.
15 A He crosses to the supply cabinet and opens it.
* 16 A Bandages.
* 17 A Syringes.
* 18 A A bag of kibble torn open, the floor under it dusted with crumbs.
19 A He crouches.
* 20 A Small paw prints in the powder of spilled flea treatment, leading toward the back hall.
21 D LUCAS: Look.
22 A ¶ Dr. Pruitt looks.
23 A Mrs. Abernathy rises, the carrier trembling in her hands.
* 24 A The prints stop at a closed door marked STAFF ONLY.
25 D DR. PRUITT: That door's always locked.
26 D LUCAS: Not tonight.
* 27 A ¶ The knob.
* 28 A It turns by itself.
* 29 A A soft CLICK.
30 A ¶ Mrs. Abernathy gasps.
31 A Dr. Pruitt steps in front of her.
32 A Lucas lifts the flashlight like a weapon.
* 33 A ¶ The door swings open.
* 34 A Dark.
* 35 A Cold.
* 36 A The smell of antiseptic.
37 A ¶ A small shape.
* 38 A Two green eyes.
* 39 A ¶ And then, behind them, the front bell JANGLES.
* 40 A The glass door BANGS against the wall.
* 41 A Wind and rain flood in.
42 A ¶ DEPUTY HARLOW, 40s, hat dripping, steps inside and shuts the door behind him.
43 A He looks at the three of them.
44 A At the open staff door.
45 A At the cat carrier.
46 D DEPUTY HARLOW: Evening. Somebody called in a break-in at this address.
47 D DR. PRUITT (too fast): No. No break-in.
48 D LUCAS: Nobody called.
* 49 A ¶ Silence.
50 D DEPUTY HARLOW: Funny. The call came from inside.
51 A ¶ The three of them turn, slowly, to the staff door.
52 A The small shape in the dark steps forward into the light.
53 A A gray cat.
54 A Biscuit.
* 55 A A tiny brass key hangs from her collar.
* 56 A ¶ Nothing else moves.

### SCENE s05168 | INT. SUBWAY CAR - RUSH HOUR - STALLED
Detected names (may be incomplete or contain aliases): FRANCESCA, DEVIN, GUS, BERNADETTE, TARIQ
* 1 A ¶ A packed car.
* 2 A The lights flicker, then the train JERKS to a stop between stations.
* 3 A The announcement crackles and dies.
* 4 A Nobody can move more than two inches.
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
* 25 A ¶ The train shudders.
* 26 A Lights out.
* 27 A Total darkness.
* 28 A A collective groan.
* 29 A Then the screen of her phone glows.
* 30 A ¶ ON PHONE: Mom: "WHERE ARE YOU.
* 31 A CEREMONY IN 20"
* 32 A ¶ ON PHONE: Bride: "if the cake's not here by 3 I'm eloping"
33 D DEVIN: Uh oh.
34 D FRANCESCA: Oh no.
35 A ¶ She turns to look at him in the blue glow.
36 A The tiara has slipped almost over one eye.
37 A He lowers the cake box an inch and, in the dark, breathes out.
* 38 A ¶ This is the last time they will be strangers.
* 39 A ¶ The emergency lights come on.
* 40 A A dull thunk, and the train lurches forward.
41 A Everybody tilts the same direction.
42 A The cake box slides out of Devin's hands, Francesca catches it, Gus catches her, and Bernadette catches the bagel.
43 D TARIQ (waking up, loudly): Did we make it?
44 D BERNADETTE: No.
45 D TARIQ: Cool.

### SCENE s05169 | INT. DUSTY RECORDS - STUDIO B - DAY
Detected names (may be incomplete or contain aliases): ABEL, CLEMENTINE, HUX, BAND
* 1 A ¶ A converted barn in the high desert.
* 2 A Egg-crate foam stapled to the walls.
* 3 A A tumbleweed, a real one, sits in the corner like a joke nobody got around to cleaning up.
4 A ¶ Clementine, 30s, boots up on the console, picks at a lap steel.
5 A Abel, 40s, the producer, flannel and tired eyes, stares at the monitor.
6 A Hux, 20s, leans in the doorway chewing a toothpick.
7 A A teenage kid in an apron sweeps the same square foot of floor over and over.
* 8 A A dog snoozes under the couch.
* 9 A ¶ CLOSE ON the tape machine, reels turning.
10 D ABEL: that's not what we cut yesterday.
11 D CLEMENTINE: it's close.
12 D ABEL: it's not close. you slowed the bridge.
13 D HUX: she didn't slow it. i did.
14 D ABEL: why'd you slow it?
15 D HUX: i dunno. felt right. felt like, you know. like riding in.
16 D CLEMENTINE: riding in where.
17 D HUX: town. i dunno. i said i dunno.
* 18 A ¶ ANGLE ON the glass.
19 A THE BAND, five men in dusty hats, stand in the live room staring at the control room, waiting.
20 A One of them lifts a fiddle bow and lowers it again.
21 D THE BAND (in unison, muffled through glass): we ready?
22 D ABEL (pressing the talkback): not yet.
23 D CLEMENTINE: you always say not yet.
24 D ABEL: because it's never yet.
25 D HUX (quietly): you could just say yes, Abel. once.
26 D ABEL: i don't say yes to things that aren't finished.
27 D CLEMENTINE: nothing's ever finished. that's the whole thing about it.
28 A ¶ The kid stops sweeping.
* 29 A The dog lifts its head.
30 A Abel stands, grabs his hat, crosses to the door.
31 A Hux doesn't move out of his way.
32 D HUX: where you going?
33 D ABEL: out. air.
34 D CLEMENTINE: you leave, the take's gone.
35 D ABEL: then it's gone.
36 A ¶ He shoulders past Hux, pushes the door.
* 37 A Heat and sunlight pour in.
38 A He stops.
* 39 A WE SEE the red ON AIR light above the door, still lit.
40 A ¶ BACK TO SCENE: Clementine's hand is on the record button.
41 A She hasn't taken it off.
42 A She looks at him through the open door, and doesn't say anything.
43 D THE BAND (through the glass, hopeful): we ready now?
44 D ABEL (without turning): yeah.

### SCENE s05170 | INT. ST. ANNE'S HOSPITAL - PEDIATRIC WAITING AREA - NIGHT
Detected names (may be incomplete or contain aliases): PRIYA, TOBY, THE WOMAN, GUS, OKAFOR, DENISE
* 1 A ¶ Fluorescent hum.
* 2 A Half the lights off.
* 3 A ¶ Rain on the tall windows.
* 4 A A vending machine glows blue in the corner.
5 A ¶ PRIYA (30s, scrubs, cardigan) wheels a med cart past rows of empty chairs.
6 A A boy, TOBY (8), sits alone in a dinosaur pajama top, swinging his feet.
7 A Next to him, a WOMAN in a damp raincoat stares at the floor, one hand clamped on the boy's backpack strap while GUS, the night security guard, sips coffee by the elevators and pretends not to watch her.
8 D PRIYA: Still waiting on the paperwork, sweetie?
9 D TOBY: She says we have to wait.
10 A ¶ Priya looks at THE WOMAN.
11 A The Woman doesn't look up.
12 D PRIYA: Ma'am? Can I get you a blanket?
13 D THE WOMAN: We're fine.
* 14 A ¶ Wind pushes the rain sideways against the glass.
15 D PRIYA (gentle): He's been here two hours. It's okay to tell me who you're waiting for.
16 A ¶ Gus wanders over, thumbs in his belt.
17 D GUS: Everything alright over here?
18 D PRIYA: Everything's fine, Gus.
19 A ¶ Gus nods.
20 A Retreats.
* 21 A The elevator DINGS.
* 22 A The doors slide open on empty air, then close again.
23 D THE WOMAN: My mother's upstairs. Fourth floor. They won't let kids up after nine.
24 D TOBY: Grandma has a tube in her nose.
25 D PRIYA: I know. I'm on her floor tonight. I can sit with him right here.
26 A ¶ The Woman finally lifts her eyes.
27 A Red-rimmed.
28 A Tired in a way sleep won't fix.
29 D THE WOMAN: You'd do that?
30 D PRIYA: It's a slow night.
* 31 A ¶ Somewhere a monitor beeps.
* 32 A Steady.
* 33 A Patient.
* 34 A A mop bucket squeaks down a far hallway.
35 D PRIYA [CONT'D]: I'm Priya.
36 D THE WOMAN: Denise.
37 A ¶ Denise lets go of the backpack strap, finger by finger.
38 A Toby scoots closer to Priya and examines her ID badge.
39 D TOBY: Your picture looks mad.
40 D PRIYA: I was. It was six a.m.
41 A ¶ Denise almost laughs.
* 42 A ¶ The elevator DINGS again.
43 A DR. OKAFOR (60s, rumpled, reading glasses on a cord) steps out, chart in hand, sneakers soaked through.
44 D DR. OKAFOR: Denise Marlowe? Your mother's asking for you. And for the young man.
45 D DENISE: He's not allowed up.
46 D DR. OKAFOR: Tonight he is.
47 A ¶ Toby grabs his backpack.
48 A Denise stands.
49 A Her knees crack.
* 50 A ¶ Outside, the rain thins to drizzle.
* 51 A The vending machine hums on.
52 D DENISE (to Priya): Thank you.
53 D PRIYA: Go on.
54 A ¶ They walk toward the elevator.
55 A Gus holds the door.
* 56 A Nobody says anything else.
