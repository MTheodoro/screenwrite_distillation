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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05044.json
### SCENE s05044 | INT. RIDESHARE - NIGHT
Detected names (may be incomplete or contain aliases): THE WOMAN, TOBIAS, INES, PIP, HOLLIS, MARA
1 A ¶ SUPER: "2:07 AM.
2 A ROUTE 9.
3 A NO STREETLIGHTS."
4 A ¶ A battered hatchback, air freshener swinging, dashboard mounted phone glowing with a map that shows a road that does not exist on any other map.
5 A Rain of a strange silver colour hangs in the headlights without falling.
6 A ¶ Tobias Wren, 50s, driver, tired kind eyes, a thermos wedged between the seats, drives with one hand.
7 A In the back seat sits the hooded passenger, THE WOMAN, face hidden, a long coat soaked at the hem, hands folded very still on a wooden box in her lap.
8 A ¶ Next to her slumps Pip, 19, student, earbuds in, a backpack clutched like a pillow.
9 A In the far seat is Hollis Grey, 60s, in a pressed suit, not touching the upholstery, and beside Tobias in the front sits Ines, 30s, a nurse in scrubs, scrolling her phone with a frown.
10 A ¶ CLOSE ON the dashboard clock.
11 A 2:07.
12 A It does not change.
13 D TOBIAS (glancing in the mirror): Everyone good back there? I can turn the heat up.
14 A ¶ Nobody answers.
15 A THE WOMAN tilts her head, listening to something far away.
16 D INES: Your app says four minutes to Birchmont. We've been four minutes for twenty.
17 D TOBIAS: Road's long tonight.
18 A ¶ ANGLE ON Pip pulling out an earbud, blinking at the window.
19 D PIP: There's a tree out there. Same tree. Left side, three times now.
20 D HOLLIS (smoothing his tie): A man learns to stop counting trees.
21 D TOBIAS (a short laugh that doesn't land): Okay, that's not a thing people say.
22 A ¶ WE SEE the wooden box in THE WOMAN's lap.
23 A A faint light seams its edges.
24 A Her fingers tighten.
25 D INES (turning in her seat): Ma'am? You okay? You haven't said anything since you got in.
26 D THE WOMAN (a low, even voice): I have been saying it. You have not been listening.
27 A ¶ INSERT - THE BOX
28 A ¶ Carved into the lid: a small door, and a keyhole shaped like a crescent.
29 A ¶ BACK TO SCENE
30 A ¶ Tobias taps the brakes.
31 A The car does not slow.
32 A The silver rain begins to fall upward.
33 D PIP (hands flat on the seat in front of him): Tobias. Dude. The brakes.
34 D TOBIAS (knuckles whitening): I'm pressing them.
35 D HOLLIS (quietly, to nobody): She's come for the debt. It was always going to be tonight.
36 D INES: What debt? Whose debt?
37 A ¶ THE WOMAN lifts her hood.
38 A Her face is a girl's face, maybe sixteen, silver-eyed, tired, very old.
39 D THE WOMAN: Hollis took the key from my mother. He promised to bring it back before the moon turned.
40 D HOLLIS (rising from the seat, bumping the roof): Mara. Please. I was young.
41 D MARA (opening the box, a pale blaze filling the car): You were forty-one.
42 A ¶ The light swallows the dashboard, the map, the unmoving clock.
43 A Tobias shouts.
44 A Pip's earbud falls to the floor.
45 A Ines grabs for the door handle and finds it gone.
46 A ¶ CLOSE ON Hollis's hand, a crescent-shaped key trembling in his palm.
47 D HOLLIS (extending it, voice breaking): Take it. Take it and let them out.
48 D MARA (taking the key, setting it in the lid): They were never held. Only you.
49 A ¶ The car stops.
50 A All at once.
51 A The rain falls down again.
52 A ¶ Silence.
53 A The hatchback sits in an empty field under a normal moon.
54 A The seat beside Mara is empty, a pressed suit folded neatly on the cushion.
55 D TOBIAS (barely breathing): Where did he go?
56 D MARA (closing the box, stepping out into the grass): Home.
57 A ¶ She walks away into the dark.
58 A The dashboard clock finally clicks to 2:08.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05045.json
### SCENE s05045 | INT. FUNERAL RECEPTION - COMMUNITY HALL - DAY
Detected names (may be incomplete or contain aliases): LUIS, RAY
1 A ¶ Trays of sandwiches, a slideshow looping on a projector.
2 A Coach Frank Dunleavy's face, forty years of whistles and clipboards, fills the wall.
3 A ¶ Two teenagers in oversized suits fight over the last deviled egg while a waiter weaves past them with a tray of lukewarm coffee and a little brown dog sneaks under the buffet table.
4 A ¶ Ray Pruitt, 50s, former star pitcher, stands by the window with a paper cup.
5 A Across the room Luis Navarro, 50s, his old catcher, enters, spots him, and stops dead.
6 A ¶ INSERT - THE SLIDESHOW
7 A ¶ A photo of both men, young, arms around each other, a championship trophy between them.
8 A ¶ BACK TO SCENE
9 A ¶ Luis crosses the room slowly.
10 A Ray doesn't turn.
11 D LUIS: You came.
12 D RAY: He was my coach too.
13 D LUIS: He was his coach more than he was yours. After what you did to him he barley spoke your name.
14 D RAY (finally turning): What I did to him. Okay.
15 A ¶ CLOSE ON Ray's hand tightening around the cup, coffee spilling over his knuckles.
16 D LUIS: You threw that game. Everybody knew. Frank knew. he took it to his grave and so did I untill today.
17 D RAY: You want to do this at his funeral.
18 D LUIS: You wanted to do it at his funeral. You wore the ring.
19 A ¶ A teenager drops a plate.
20 A The waiter freezes.
21 A The dog yips.
22 A The whole room turns, and the slideshow flips to the next photo, Frank holding a trophy over his head.
23 D RAY (very quietly): I'm sorry.
24 D LUIS (blinking, his anger leaving all at once): Say it to him.
25 A ¶ Ray sets the cup on the sill, walks to the projector, and stands in its beam so Frank's smile falls across his chest.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05046_0.json
### SCENE s05046_0 | INT. MERCY GENERAL HOSPITAL - NURSES' STATION - NIGHT
Detected names (may be incomplete or contain aliases): CHARGE NURSE, KESSLER, PRIYA
1 A ¶ We see a long hallway with flickering fluorescent lights, which is a metaphor for how the main character feels inside.
2 A It is 3 AM.
3 A CLOSE ON a clock on the wall.
4 A ¶ THE NEW GIRL, 19, sits at the station in oversized scrubs, her badge flipped backwards.
5 A She is clearly nervous and has never worked a night shift before, which we can tell because she keeps looking at her phone.
6 D THE NEW GIRL (straightening a stack of charts that are already straight, then knocking them over): Okay. Okay. Breathe.
7 A ¶ A voice crackles from the intercom.
8 D CHARGE NURSE [V.O.]: Station, it's Bea. Are you there?
9 D THE NEW GIRL (grabbing the handset too hard, nearly dropping it): Yes! Here! Station! Hi!
10 D CHARGE NURSE [V.O.]: Room 12's call light is on. Can you check on Mr. Kessler?
11 D THE NEW GIRL (standing, tripping on her own lanyard): Totally. Absolutely. Going now.
12 A ¶ We see her walk down the hallway to Room 12, past a vending machine that hums.
13 A She stops outside the door.
14 D KESSLER [O.S.]: Who's that? Is that Kim?
15 D THE NEW GIRL (sighing, opening the door a crack): It's not Kim, Mr. Kessler. It's... it's me. The new one.
16 D KESSLER [O.S.]: Oh. Kip said you'd be shorter.
17 D THE NEW GIRL (laughing, wiping her eyes with the back of her hand): Kip is the other night nurse. He says a lot of things.
18 D KESSLER [O.S.] (softly): You've got kind hands. I can hear it in your steps.
19 D THE NEW GIRL (pausing in the doorway, pressing a hand to her chest): Thank you. I think that's the nicest thing anyone has said all week.
20 A ¶ The intercom crackles again.
21 D CHARGE NURSE [V.O.]: Priya, you still there? Your mom's on line two. She says you left your lunch in the car.
22 D PRIYA (burying her face in her hands, shoulders shaking with laughter): I'm going to quit. I'm going to quit tonight.
23 D KESSLER [O.S.] (warmly): You won't.
24 T CUT TO:

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05046_1.json
### SCENE s05046_1 | INT. NURSES' STATION - LATER
Detected names (may be incomplete or contain aliases): 
1 A ¶ Priya sits back down.
2 A For the first time all night she doesn't check her phone.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05047.json
### SCENE s05047 | INT. THE HARGREAVES KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): ROSALIND HARGREAVES, TOM
1 A ¶ Rain against the window, steady and unremarkable.
2 A The fridge hum has died.
3 A Somewhere down the road a transformer has given up, and the whole street has gone the colour of weak tea.
4 A ¶ A single candle on the table.
5 A A cold pot of something on the hob.
6 A A mug, a second mug, a phone face-up between them.
7 A ¶ ROSALIND HARGREAVES, 50s, cardigan, reading glasses on a string, stands at the sink with her back to the room.
8 A Her son, TOM, 17, sits at the table in a school blazer he has not taken off.
9 A ¶ The clock on the wall has stopped at ten past nine.
10 D ROSALIND (rinsing a cup that is already clean): You're back early.
11 D TOM (turning the phone over, then back): Not really.
12 A ¶ Outside, a dog barks twice and thinks better of it.
13 A ¶ ON PHONE: "DAD: Spoke to your mum.
14 A We'll sort it.
15 A Don't be daft."
16 D ROSALIND (without turning): He texted you as well, did he?
17 D TOM (a very small nod): Said not to be daft.
18 D ROSALIND (drying her hands slowly on a tea towel): That does sound like him.
19 A ¶ The candle gutters.
20 A A gust finds the back door and goes away again.
21 A Neither of them moves to fix it.
22 D TOM (picking at the edge of the table): I got the letter from Durham.
23 D ROSALIND (her shoulders very slightly tightening): Did you.
24 D TOM (a breath out through his nose): They've offered me a place.
25 D ROSALIND (finally turning, the towel in both hands): Well. That's marvellous.
26 D TOM (not looking up): You don't sound it.
27 D ROSALIND (a small, brittle laugh): I'm told it's the done thing, to sound it.
28 A ¶ The rain eases for a moment.
29 A In the quiet, the house ticks as it cools.
30 A ¶ This is the last evening the three of them will pretend to be a family under this roof.
31 D TOM (standing, the chair scraping the tiles): I've not even said I'll go yet.
32 D ROSALIND (folding the towel, setting it down, squaring its corners): You've said it. You said it when you came in with your coat still on.
33 A ¶ ON PHONE: "DAD: pick up. please."
34 D TOM (snatching the phone, thumb over the screen, a crack in his voice): Mum, I'm not leaving you here on your own.
35 D ROSALIND (crossing the kitchen, taking the phone from his hand, setting it face-down on the table): Thomas. You will go. And I shall be perfectly all right. It's only a power cut.
36 A ¶ The candle burns on.
37 A Somewhere across the road, a generator coughs and catches, and one lit window blinks into being.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05048.json
### SCENE s05048 | INT. JUNE'S BEDROOM - NIGHT
Detected names (may be incomplete or contain aliases): JUNE PARK, WESLEY, BEN, MOM, AUNT LIN
1 A ¶ Posters, fairy lights, a pile of laundry that is definitely not just laundry.
2 A JUNE PARK, 16, sits on the bed in pajamas with her best friend WESLEY, 17, and her little brother BEN, 9, who is holding a flashlight he was told not to touch.
3 D JUNE (whispering, tugging a blanket over all three of them): Okay so the rule is nobody screams. If somebody screams we all die.
4 D WESLEY (also whispering, much louder): That is not how that works.
5 D BEN (clicking the flashlight on and off): It is exactly how that works.
6 A ¶ The phone BUZZES on the nightstand.
7 A June jumps.
8 A Wesley shrieks and ducks under a pillow.
9 D JUNE (snatching it, glaring at him): You screamed!
10 D WESLEY (muffled): I did not scream I sneezed in a very high register.
11 A ¶ ON PHONE: "MOM: Honey are you asleep?
12 A Door's locked right?"
13 D JUNE (texting back with her thumbs flying): Mom is checking on me. Act asleep.
14 D BEN (flopping dramatically onto the pillow): Zzzz. Zzzz. Why am I the one doing the snoring?
15 D WESLEY (jabbing a finger at him): Because you're the most convincing.
16 A ¶ A door SLAMS somewhere in the house.
17 A All three freeze.
18 D MOM [V.O.] (through the phone, tinny, on speaker now): June? Is that you in the hall?
19 D JUNE (going pale, the phone trembling in her hand): Mom, I'm in my room.
20 D MOM [V.O.] (slowly): Then who just walked past my door?
21 A ¶ The closet door CREAKS open.
22 A From the shadows, a tall figure in a shower curtain hobbles out, dragging one foot, groaning.
23 A ¶ AUNT LIN, 40s, June's aunt, ghoul makeup smeared, grinning.
24 D AUNT LIN (throwing off the curtain): Surprise! Happy Halloween eve!
25 D WESLEY (throwing the pillow, shrieking): I hate this family!
26 D JUNE (laughing, hitting her with the blanket): Aunt Lin! You almost killed us!
27 D BEN (shining the flashlight in her face): You look dead. It's great.
28 D AUNT LIN (accepting a pillow to the face): I've been rehearsing since Tuesday.
29 D MOM [V.O.] (sighing): I told her not to. Goodnight, everyone.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05050.json
### SCENE s05050 | INT. HOLLOWAY KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): HANNAH, BECK, THE TWINS, ROSALIND, ILYA, DESMOND
1 A ¶ The power has been out for eleven minutes, and in that time Hannah Voss has built a small, ordinary world out of candles and tea lights, the way she once built forts out of couch cushions, certain that if the room looks cozy enough then nothing outside it can be wrong.
2 A ¶ Dark.
3 A Candle flames.
4 A The fridge, silent.
5 A ¶ Desmond, her husband, 40s, stands at the window with his phone held up like a lantern, and he is not looking at the sky.
6 A He is looking at the street.
7 A Every house on it is dark in exactly the same way.
8 A ¶ Rosalind, 16, sits on the counter swinging her heels.
9 A Beside the stove, Ilya, Hannah's father, 70s, hums something tuneless and kind.
10 A Nothing wrong.
11 A ¶ Beck, the neighbour, 50s, leans in the back doorway with a flashlight pointed politely at the floor.
12 D HANNAH: Grid's down to the coast, Beck says. Probably a transformer.
13 D BECK: Probably. Probably a transformer.
14 D THE TWINS (together, from under the table): Can we have the marshmallows now?
15 D ROSALIND: You had marshmallows.
16 D THE TWINS: That was before.
17 D ILYA: Before what? Before what?
18 D DESMOND (not turning): Hannah. Come here.
19 D HANNAH: In a second, Des, the girls are...
20 D DESMOND: Now.
21 A ¶ She crosses the kitchen.
22 A Wax.
23 A Tea.
24 A The smell of home.
25 A ¶ Outside, above the roofline, the stars are wrong.
26 A Too many.
27 A Too still.
28 A And one of them is moving toward the house.
29 A ¶ Silence.
30 A ¶ Her phone.
31 A Dead.
32 D BECK: That is not a transformer.
33 D ROSALIND: Mom?
34 D THE TWINS: Is it the visitors?
35 A ¶ Nobody breathes.
36 A Hannah turns, slowly, and sees that Ilya has stopped humming, and that her father is smiling at the window like a man whose train has finally come in.
37 D ILYA (softly): They said it would be in the evening.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05051.json
### SCENE s05051 | INT. NIGHT BUS - MOVING - NIGHT
Detected names (may be incomplete or contain aliases): NELL, HOODIE GUY, BARROW, IRIS, SHRIEK
1 A ¶ Rain on glass.
2 A Neon smears past.
3 A ¶ A battered double-decker, half empty, rattling through a city that does not appear on any map.
4 A Flickering strip lights.
5 A Vinyl seats slashed and taped.
6 A A bell that rings by itself.
7 A ¶ Two teenagers share earbuds in the back row.
8 A A scruffy terrier sleeps under a seat.
9 A ¶ Up front, NELL (20s, soot on her cheek, a sword wrapped in a rain poncho) grips the pole.
10 A ¶ HOODIE GUY sits across the aisle.
11 A Grey hood.
12 A No face.
13 A Just a slow, steady grin in the dark.
14 A ¶ The engine COUGHS.
15 D NELL (to the whole bus): Nobody panic. We're ahead of them.
16 D BARROW (a hulking man in a bus-driver's cap, hauling the wheel): Define ahead.
17 A ¶ BELL.
18 A DING.
19 A DING.
20 D NELL (muttered): Come on, come on.
21 A ¶ The lights DIE.
22 A Back on.
23 A Silence.
24 A ¶ Rain.
25 A Nothing.
26 D IRIS (clutching a lantern, eyes on the roof): Something just landed up there.
27 A ¶ THUMP.
28 A THUMP.
29 A THUMP.
30 A ¶ The teenagers pull out their earbuds.
31 A The dog lifts its head.
32 D BARROW (hands off the wheel, cracking his knuckles): Hold this thing steady.
33 D NELL (drawing the sword, glaring at the ceiling): You're not steering?
34 D BARROW (grinning): Not anymore.
35 A ¶ CRUNCH.
36 A A claw punches through the roof.
37 D HOODIE GUY (rising, pushing back his hood, calm): Let me.
38 A ¶ A flash of silver light.
39 A A SHRIEK from above.
40 A Then a heavy body slides off the roof and is gone.
41 A ¶ Silence.
42 A Rain.
43 D IRIS (whispering): Who are you?
44 D HOODIE GUY (sitting back down): Cass. Once upon a time, I was the one they sent you to find.
45 D NELL (lowering the sword, to herself): Of course you were.
46 A ¶ The bus hums on into the dark.
47 A The dog goes back to sleep.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05052.json
### SCENE s05052 | EXT. DUSTY HITCHING POST OUTSIDE THE GENERAL STORE - DAY
Detected names (may be incomplete or contain aliases): JO, KIP, KIM
1 A ¶ Heat.
2 A A tumbleweed rolls by like it has somewhere to be.
3 A ¶ Kip, 17, leans on the rail with his hat pulled low.
4 A He is staring at his phone like it owes him money.
5 A Two steps away, Kim, 17, doing the exact same thing, is not looking at him.
6 A ¶ CLOSE ON Kip's screen.
7 A INSERT - the group chat.
8 A ¶ ON PHONE: @Kip_Rides: so ur the one thats always online ON PHONE: @KimInTheSaddle: ur the one who left me on read for 3 weeks
9 A ¶ Neither of them move.
10 A ¶ ANGLE ON the road.
11 A A third rider trots up, Jo, 18, in a duster two sizes too big.
12 A He ties the horse and takes a long time doing it.
13 D JO: So. That's the whole group then.
14 D KIP: Guess so.
15 D KIM: Guess so.
16 A ¶ Silence.
17 A A fly buzzes.
18 D JO: We could get a soda. Theres a place.
19 D KIP: Its closed.
20 D JO: Its a saloon, it's always closed in the day.
21 A ¶ She laughs, short and cracked, and looks at her boots.
22 A He kicks the dirt.
23 A Neither one says what they are thinking.
24 A She types something, deletes it, types something else.
25 A ¶ WE SEE Kip's phone light up.
26 A ¶ INSERT - ON PHONE: @KimInTheSaddle: ok this is weird
27 A ¶ Kip glances up.
28 A Kim glances up.
29 A They both look away at the same time.
30 D KIP (low): Yeah.
31 D JO: You two want me to leave or
32 D KIM: No.
33 D KIP: No, stay.
34 A ¶ He shifts his weight.
35 A She pulls her sleeve over her hand.
36 A It stays quiet for a while, the way a long road does.
37 A ¶ BACK TO SCENE
38 D JO: Okay, soda, I'll buy. Come on.
39 A ¶ He walks first.
40 A They follow, a few steps apart, phones dark in their hands.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s05053.json
### SCENE s05053 | INT. WESTFIELD HIGH SCHOOL - BOYS' BATHROOM - DAY
Detected names (may be incomplete or contain aliases): SAM, MO, BIG DAVE, JEN, MRS. K
1 A ¶ ON CAMERA: handheld, shaky, filming through a gap between two stalls.
2 A Fluorescent hum.
3 A A dripping tap.
4 A ¶ Sam, 17, leans on the sink, phone in hand, in a hoodie.
5 A Next to him, Mo, 17, washes his hands for far too long.
6 A ¶ The documentary crew is not supposed to be here.
7 A They are here anyway.
8 D SAM (to camera, quiet): You said you wouldn't film this part.
9 D MO: Turn it off. Seriously.
10 A ¶ The tap runs.
11 A Nobody turns anything off.
12 A ¶ This is the last time they will all be in the same room before the hearing.
13 A ¶ A stall door SLAMS.
14 A Big Dave, 18, steps out, shoulders filling the frame.
15 D BIG DAVE: Who's talking? Who's talking about me?
16 D SAM: Nobody.
17 D MO: We're not.
18 D JEN (from the doorway, a girl in a blazer, clipboard clutched): You're all still here? The hearing's in ten minutes.
19 D BIG DAVE: You think I don't know that?
20 D SAM: Jen, you shouldn't be in here.
21 D JEN: Mrs. K said to find you.
22 D MO: She said what?
23 D BIG DAVE: She said it's fine, they said it's fine, it's all fine.
24 D JEN: Nobody said it's fine, Dave.
25 D SAM: Can we just
26 D MO: Let her finish.
27 D JEN: The statement has to match. Word for word. If one of you changes one thing.
28 D BIG DAVE: I'm not changing anything.
29 D MO: You already did. You said it was a door.
30 D BIG DAVE: It WAS a door.
31 D SAM: It wasn't a door, man.
32 D JEN: Stop. Everyone stop.
33 A ¶ The phone BUZZES in Sam's hand.
34 A He stares at it.
35 D MRS. K [O.S.] (through the door): Samuel? Time.
36 A ¶ Nobody moves.
37 A The tap drips.
38 A Sam sets the phone on the sink, face down.
39 D SAM (barely a whisper): I'm telling them.
