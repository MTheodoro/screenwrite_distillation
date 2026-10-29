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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01720.json
### SCENE s01720 | INT. DRAINED MUNICIPAL SWIMMING POOL - NIGHT
Detected names (may be incomplete or contain aliases): ODALYS VANTERPOOL, BRAM OKONKWO, PRUDENCE HALE, WENDELL DUCROIX
1 A ¶ Cracked blue tile.
2 A One work light hums over the deep end.
3 A ODALYS VANTERPOOL (30s, night custodian, flashlight like a club) stands on the ladder.
4 A BRAM OKONKWO (20s, her apprentice) clutches a mop.
5 A PRUDENCE HALE (60s, retired lifeguard, whistle on a cord) and WENDELL DUCROIX (40s, city inspector, clipboard) crowd the rim above.
6 D ODALYS: Nobody swims here. Nobody has swum here since--
7 D PRUDENCE: Since the boy. Say it.
8 D WENDELL: The drain cover is secure, I signed it myself, I signed it twice--
9 D BRAM: Something's knocking. Under the tile.
10 D ODALYS: It's the pipes.
11 D PRUDENCE: It's counting.
12 A ¶ Three slow knocks.
13 A The work light dies.
14 A Odalys and Bram scramble up the ladder, colliding, while Wendell drops the clipboard and Prudence blows the whistle once, hard.
15 D WENDELL: Stop blowing that!
16 D BRAM: Who's laughing? Somebody's laughing!
17 D PRUDENCE (whispering): Nobody. Nobody's down there.
18 A ¶ The light snaps back on.
19 A All four freeze.
20 A In the deep end, a single wet footprint, then another, walking toward them.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01721_0.json
### SCENE s01721_0 | EXT. STALLED CABLE CAR - ALPINE GORGE - DAY
Detected names (may be incomplete or contain aliases): 
1 A ¶ A red cable car hangs motionless a thousand feet above a frozen river.
2 A Wind rocks it gently.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01721_1.json
### SCENE s01721_1 | INT. CABLE CAR - CONTINUOUS
Detected names (may be incomplete or contain aliases): HOLLIS BRANNIGAN, INGRID SOLVANG, TOMASZ KRAWIEC, KEIKO ARAI, DARA NWOSU, RUFUS
1 A ¶ HOLLIS BRANNIGAN (50s, park ranger, weathered face, steady hands) sits by the door with a thermos.
2 A He pours a cup and passes it along.
3 A INGRID SOLVANG (30s, climber, rope burns on her palms) takes it and smiles.
4 A She says nothing.
5 A ¶ Beside her, TOMASZ KRAWIEC (40s, heavy coat, camera around his neck) photographs the gorge.
6 A His hands shake.
7 A KEIKO ARAI (20s, student, headphones around her neck) leans against the window, eyes closed.
8 A DARA NWOSU (30s, nurse, practical sneakers) checks a child's mitten, then pockets it.
9 D HOLLIS: Power's out on the whole line. They'll winch us by dark.
10 D TOMASZ: By dark? That's six hours.
11 D HOLLIS: Closer to four.
12 A ¶ He glances at the roof hatch.
13 A Nobody else notices.
14 D DARA: You keep looking up.
15 D HOLLIS: Habit.
16 A ¶ She studies him.
17 A He drinks his coffee.
18 A ¶ The radio on his belt crackles.
19 A Everyone looks at it.
20 D RUFUS [V.O.] (over radio): Station to car four. Hollis, you read me?
21 A ¶ Hollis thumbs the key.
22 D HOLLIS: Loud and clear, Rufus. What's the word?
23 D RUFUS [V.O.] (over radio): Don't let anybody open the hatch.
24 A ¶ Silence.
25 A Tomasz lowers his camera.
26 A Keiko opens her eyes.
27 D KEIKO: Why would he say that?
28 D RUFUS [V.O.] (over radio): Because it isn't the wind, Hollis. Check the roof. Count the weight.
29 A ¶ Hollis stands.
30 A The car dips, slow and heavy, toward the back.
31 A Ingrid grips the rail.
32 A Dara moves in front of Keiko.
33 A Tomasz backs away until he hits the glass.
34 A ¶ Overhead, something shifts.
35 A A pause.
36 A Then three soft taps on the hatch, polite as a neighbor's.
37 D TOMASZ (whispering): I count five of us.
38 D DARA: There are five of us.
39 A ¶ The taps come again.
40 A From underneath the floor.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01722.json
### SCENE s01722 | INT. ALL-NIGHT LAUNDROMAT - 3 A.M.
Detected names (may be incomplete or contain aliases): MARISOL REYES, TEDDY OYELARAN, NKECHI BELL, CAL DRUMMOND
1 A ¶ Fluorescent tubes buzz.
2 A Rows of orange plastic chairs, a broken change machine with a handwritten sign, a wall of dryers like portholes.
3 A Rain on the glass.
4 A ¶ MARISOL REYES (17, hoodie, backpack stuffed with a prom dress in a garment bag) sits on a washer, knees up.
5 A TEDDY OYELARAN (17, tall, thin, a cast on his left wrist) feeds quarters into a dryer.
6 A NKECHI BELL (16, Marisol's cousin, braids, school jacket) paces.
7 A CAL DRUMMOND (18, ex-boyfriend, letterman jacket, car keys in his fist) stands by the door, dripping.
8 D CAL: Everybody just calm down.
9 D NKECHI (to Marisol): You told me he wasn't coming.
10 D MARISOL: I didn't know.
11 D CAL: I just want to talk.
12 D TEDDY (muttering): Here we go.
13 D MARISOL (to the room): Okay, nobody is doing this tonight.
14 A ¶ Cal steps forward.
15 A Teddy puts down the quarters and stands between them, wrist cast raised like a stop sign.
16 D TEDDY: Cal. Buddy. It's three in the morning.
17 D CAL: Stay out of it, Teddy.
18 D TEDDY: I'm in it. I'm holding her dress.
19 A ¶ He is.
20 A He doesn't remember picking it up.
21 D NKECHI (to herself): I'm calling my mom.
22 D MARISOL: Don't you dare.
23 A ¶ Cal's fist closes on the keys.
24 A Then, slowly, he opens it.
25 A He lets the keys drop onto the chair and sits down hard, shoulders loose.
26 D CAL: I drove forty minutes. I don't even know what I was going to say.
27 A ¶ Nobody answers.
28 A A dryer buzzes.
29 A Marisol slides off the washer.
30 D MARISOL: Then say it. You've got until this cycle's over.
31 A ¶ She sets the timer on the dryer.
32 A Thirty-one minutes.
33 A Teddy hands Cal a warm towel from the load without a word.
34 D NKECHI (to Teddy): That's somebody's towel.
35 D TEDDY: It's everybody's now.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01723.json
### SCENE s01723 | INT. WIRELESS ROOM - STEAMSHIP "MERIDIAN" - NIGHT (1912)
Detected names (may be incomplete or contain aliases): AGNES FENWICK, PHILIPPA ASHCROFT, CAPTAIN HARGREAVES
1 A ¶ A cramped brass-and-oak cabin.
2 A A spark-gap transmitter crackles.
3 A A speaking tube hangs by the door.
4 A ¶ AGNES FENWICK (20s, wireless operator, ink on her cuffs) taps a key, headphones crooked on her head.
5 A PHILIPPA ASHCROFT (30s, first-class passenger in a fur collar) stands behind her, gripping the back of the chair.
6 D PHILIPPA: She said it was only a drill. She promised.
7 D AGNES: She says a great many things, ma'am.
8 A ¶ Philippa leans closer.
9 A Agnes pulls a sheet of paper from under the key and covers it with her sleeve.
10 A She watches her the way a cat watches a draft.
11 D PHILIPPA: Show me what you wrote.
12 D AGNES: I can't.
13 D PHILIPPA: She told me to ask. She gave me leave.
14 A ¶ The speaking tube whistles.
15 A Agnes snatches the cap off.
16 D CAPTAIN HARGREAVES [V.O.] (through the tube): Miss Fenwick. Is the passenger with you?
17 D AGNES: She is, sir.
18 D CAPTAIN HARGREAVES [V.O.] (through the tube): Then you'll finish the message and you'll send it as written. All of it. Do you understand?
19 A ¶ Philippa takes the paper from under Agnes's sleeve.
20 A She reads.
21 A Her face goes white.
22 A Agnes stands, and the chair scrapes the deck.
23 D AGNES: Ma'am, please sit.
24 D PHILIPPA (very quiet): Send it.
25 A ¶ Agnes lowers her hand to the key.
26 A The spark leaps.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01724.json
### SCENE s01724 | INT. CAR DECK - NIGHT FERRY - NIGHT
Detected names (may be incomplete or contain aliases): SORAYA KAMALI, LEV ARKADYEV, MARGUERITE DELACROIX, DUTCH PELLEGRINO
1 A ¶ Rows of parked cars chained to the steel floor.
2 A Diesel fumes and cold salt.
3 A Overhead lamps sway with the swell.
4 A ¶ SORAYA KAMALI (30s, plainclothes agent, wet hair, a pistol held low against her thigh) crouches behind a delivery van.
5 A She whispers into her sleeve.
6 A Across the aisle, LEV ARKADYEV (50s, silver mustache, cashmere coat) sits calmly on a bumper with a leather case on his knees.
7 A He is not hiding.
8 D LEV: You can come out, Agent Kamali. I bought your ticket myself.
9 A ¶ She does not move.
10 A Behind Lev, MARGUERITE DELACROIX (40s, ship's purser, uniform too crisp) appears at the stairwell door, a keyring in one hand, and stops when she sees the gun.
11 A At the far end of the deck, DUTCH PELLEGRINO (60s, deckhand, oil-stained overalls, a wrench) steps out from behind a truck, takes in the three of them, and starts to back away.
12 A Soraya stands, aims at Lev, and swings her head toward the noise.
13 A Marguerite raises both hands, the keyring jingling.
14 A Lev opens the case on his knees and takes out nothing but a thermos.
15 D LEV [CONT'D]: Tea?
16 D SORAYA: Put it down.
17 D LEV: It's tea.
18 D MARGUERITE (to Soraya): Miss, I'm only the purser. I was told to bring him the key to the cabin.
19 D SORAYA: Whose cabin?
20 D MARGUERITE: Yours.
21 A ¶ Soraya hesitates.
22 A Dutch, still backing, bumps a car alarm that begins to whoop.
23 A Everyone flinches.
24 A Lev does not.
25 A He pours tea into the thermos lid, and steam rises in the cold.
26 D LEV: The man you came here to arrest got off at the last port. I wanted to see your face when you understood.
27 D SORAYA: Then why are you still aboard?
28 D LEV: Because you are the one I wanted.
29 A ¶ Dutch silences the alarm with a wrench, and the deck goes quiet but for the engines.
30 A Marguerite lowers her hands.
31 A Soraya lowers the gun an inch, then another.
32 A Dutch stays by the truck, wrench loose in his fist, looking at nobody.
33 D DUTCH (low): Ma'am, I think the captain knows.
34 D SORAYA: Knows what?
35 D DUTCH: That none of us is going to the next port.
36 A ¶ Lev sips his tea.
37 A Marguerite looks at her keyring as if she has never seen it before.
38 A Soraya raises her gun again, but slower this time, like a woman reading a verdict.
39 D SORAYA: Everyone stay exactly where you are.
40 D LEV: We have nowhere else to be.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01725.json
### SCENE s01725 | INT. CURLING CLUB - SATURDAY MORNING
Detected names (may be incomplete or contain aliases): GRETA HOLMQUIST, BJORN LUND, ILSE NAKAMURA, STRANGER, FELIX
1 A ¶ Empty sheet of ice.
2 A Rocks lined up like sleeping animals.
3 A A scoreboard that says nothing.
4 A ¶ GRETA HOLMQUIST (40s, skip, club jacket) sweeps a rock into place.
5 A BJORN LUND (50s, vice, thermos) watches from the hack.
6 A ILSE NAKAMURA (20s, newest member, brand-new broom) stands too straight.
7 A ¶ A STRANGER (30s, rental shoes, borrowed gloves) pushes open the glass door and stands at the edge of the ice.
8 D GRETA: Closed to the public.
9 D STRANGER: I called. A woman said Saturday.
10 D BJORN: That was Ilse.
11 D ILSE: I said come at noon.
12 D STRANGER: It's eleven fifty.
13 A ¶ Bjorn laughs into his thermos.
14 A Greta says nothing.
15 A She slides a rock back to the hack.
16 D GRETA: What's your name?
17 D STRANGER: Felix.
18 D GRETA: Felix. Ever held a broom?
19 D FELIX: My father curled. I never did.
20 D GRETA: That's the best kind.
21 A ¶ She hands him her broom.
22 A Felix steps onto the ice, arms out for balance.
23 A Ilse shifts to make room.
24 A Bjorn lifts the thermos, pours a fourth cup, and sets it on the boards.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01726.json
### SCENE s01726 | EXT. DRIVE-IN CONCESSION ROOF - NIGHT
Detected names (may be incomplete or contain aliases): TAVITA SOLOMONA, ROZ KELLERMAN, EAMON FLYNN
1 A ¶ Tar paper.
2 A A dead neon popcorn bucket.
3 A The big screen glows blue over a field of parked cars.
4 A ¶ TAVITA SOLOMONA (17, linebacker shoulders, soft eyes) sits on the edge.
5 A ROZ KELLERMAN (17, sharp, camera strapped on) crouches near the vent.
6 A EAMON FLYNN (16, small, hands in his sleeves) arrives last through the hatch.
7 A ¶ Eamon's boots on tin.
8 A Everyone freezes.
9 D ROZ: You're late.
10 D EAMON: My mom had me.
11 A ¶ Tavita stands.
12 A Roz stands.
13 A They back away from the hatch.
14 A A flashlight beam sweeps the lot below.
15 D TAVITA: Cops.
16 D ROZ: Security.
17 D TAVITA: It's the same thing.
18 D ROZ: Get down!
19 A ¶ All three drop flat.
20 A Tavita pulls Eamon by the collar.
21 A Roz's camera clacks on the tar.
22 A The beam slides past them, and passes.
23 A They breathe.
24 A ¶ Then Eamon laughs.
25 A Tavita shoves him.
26 A Eamon shoves back.
27 A They tumble, wheezing, quiet as they can be.
28 D ROZ (whisper): Stop it. Stop.
29 D EAMON: Roz, you looked so scared.
30 D ROZ: I was not.
31 D TAVITA: You were crying.
32 D ROZ: I was not!
33 D EAMON: Tav, you cried too.
34 D TAVITA: I cry at commercials. It doesn't count.
35 D ROZ: You said you'd tell him tonight.
36 D TAVITA: Tell who what?
37 D ROZ: Eamon. About the move.
38 D EAMON: What move?
39 D TAVITA: It's nothing.
40 D ROZ: It's Ohio.
41 D EAMON: Ohio?
42 D TAVITA: My dad's job. It's August. I didn't want to say it up here.
43 D EAMON: You were gonna say it at the lake. You said that.
44 D TAVITA: I know what I said.
45 D ROZ: So say it.
46 D TAVITA: I'm moving. I'm sorry. I'm sorry.
47 D EAMON: Okay.
48 D TAVITA: Okay?
49 D EAMON: Okay. That's August. It's June.
50 D ROZ: We have the whole summer.
51 D EAMON: We have sixty-one nights. I counted.
52 A ¶ Tavita wipes his face with his sleeve.
53 A Roz lifts her camera.
54 A The film flickers across all three of them, blue.
55 A ¶ She takes the picture.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01727.json
### SCENE s01727 | INT. PIGEON-RACING CLUB - BANQUET HALL - EVENING
Detected names (may be incomplete or contain aliases): OTTOLINE VANDERMEER, BARNABY CROWE, CLEMENTINE ASHBY-NOLAN
1 A ¶ A low-ceilinged hall that smells of boiled ham and floor wax.
2 A Trophies line the walls, each topped with a small bronze bird in mid-flap.
3 A Round tables wear paper cloths.
4 A One table, at the back, has been set for three, and a single basket of bread rolls sits between the places like a negotiated settlement.
5 A ¶ OTTOLINE VANDERMEER (60s) arrives first, in a green velvet dress she has plainly owned since the club's previous presidency.
6 A She arranges the cutlery by the width of a thumb, sits, and begins to examine her roll as if it might be called to testify.
7 A ¶ BARNABY CROWE (50s) enters carrying a wrapped trophy under one arm and a plastic bag of seed under the other, which he has not been able to leave in the coat room.
8 A He stands for a moment at the end of the table.
9 A He sets the trophy down gently, face-forward.
10 A He sets the seed down with considerably less ceremony.
11 A ¶ CLEMENTINE ASHBY-NOLAN (30s), the youngest person in the room by twenty years, comes in last.
12 A She has a clipboard.
13 A She also has the expression of someone who has already lost the argument she is about to start.
14 D OTTOLINE: You're sitting there?
15 D BARNABY: It was my chair last year.
16 D OTTOLINE: Last year you were also winning.
17 D BARNABY: I'm winning this year.
18 D CLEMENTINE: The scores aren't posted until after the soup.
19 D OTTOLINE: Then you can sit where you like until after the soup.
20 A ¶ Barnaby does not sit.
21 A He lifts the trophy by its base and sets it on the table, an inch closer to Ottoline's plate than to his own.
22 D BARNABY: I wrapped it myself.
23 D OTTOLINE: It looks wrapped.
24 D BARNABY: Four layers.
25 D OTTOLINE: In what?
26 D BARNABY: In tissue. Mostly.
27 D OTTOLINE: Mostly.
28 D CLEMENTINE (consulting clipboard): It's, ah. It's the Hartley Cup. Which is, strictly, for the best bird in the northern loft.
29 D BARNABY: It is.
30 D OTTOLINE: And Barnaby's northern loft is where?
31 D BARNABY: Right where it's always been.
32 D OTTOLINE: Behind a dry cleaner's.
33 D BARNABY: It's a very good dry cleaner's.
34 D CLEMENTINE: I think that's not the question.
35 D OTTOLINE: No. The question is whether it's a very good bird.
36 D BARNABY: She flew four hundred miles.
37 D OTTOLINE: So I'm told.
38 D BARNABY: In nine hours.
39 D OTTOLINE: In nine hours, from a basket, in a van, according to the van driver.
40 D CLEMENTINE: I have the van driver's log. If anyone wants it.
41 D BARNABY: Nobody wants it.
42 D OTTOLINE: I'd like to see it.
43 A ¶ Clementine slides the clipboard across the table.
44 A Barnaby's hand lands on it first.
45 A For a moment all three hands rest on the same sheet of paper, and none of them moves.
46 D BARNABY: It's the club's business.
47 D OTTOLINE: I am the club's business. Fifty-one years.
48 D CLEMENTINE: You were treasurer for thirty of them.
49 D OTTOLINE: Thirty-one.
50 D CLEMENTINE: I stand corrected.
51 D BARNABY: You don't stand at all. You sit with a clipboard.
52 D CLEMENTINE: It's a very good clipboard.
53 D OTTOLINE (to her roll): Everything in this room is very good.
54 A ¶ A waiter passes with soup.
55 A All three lean back, hands retreating from the clipboard, and watch him set down three bowls.
56 A Nobody reaches for a spoon.
57 D OTTOLINE [CONT'D]: Is it mushroom?
58 D BARNABY: It's brown.
59 D CLEMENTINE: It's mushroom. I checked.
60 D OTTOLINE: You check everything.
61 D CLEMENTINE: Someone has to.
62 D BARNABY: You could have checked the bird.
63 D CLEMENTINE: I did.
64 A ¶ Pause.
65 D OTTOLINE: And?
66 D CLEMENTINE: And she's a very good bird.
67 D BARNABY: Thank you.
68 D CLEMENTINE: It's not the same bird that was entered.
69 A ¶ A spoon is lifted.
70 A A spoon is set down.
71 A Barnaby slides the trophy back an inch toward himself, then, looking at no one, an inch toward the middle of the table.
72 D OTTOLINE: I'd like to see her.
73 D BARNABY: She's in the car.
74 D OTTOLINE: In the car.
75 D BARNABY: In the basket. On the back seat. With the windows down an inch.
76 D OTTOLINE: Fetch her.
77 D BARNABY: It's raining.
78 D OTTOLINE: She's a pigeon.
79 D BARNABY: She's nervous.
80 D CLEMENTINE (gently): Mr. Crowe. Which bird is she?
81 A ¶ Barnaby opens his mouth.
82 A He closes it again.
83 A He picks up his spoon and tastes the soup, and his face does something complicated, and he tastes it again.
84 D BARNABY: It is mushroom.
85 D OTTOLINE: It is.
86 D BARNABY: It's actually quite good.
87 D OTTOLINE: It always has been.
88 A ¶ She tears her roll in half.
89 A She puts one half on Barnaby's bread plate, and does not look at him while she does it.
90 D CLEMENTINE: So the scores?
91 D OTTOLINE: After the soup.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01728.json
### SCENE s01728 | EXT. SALT FLAT - DAWN
Detected names (may be incomplete or contain aliases): ANNELIESE VOGT, JORUND HALVORSEN, PILAR ESPINOSA, MOX, DEV KAPOOR, DISPATCH
1 A ¶ White to every horizon.
2 A A pickup truck, hood up, sits dead in the middle of nothing.
3 A Heat shimmer already.
4 A ¶ ANNELIESE VOGT (40s, geologist, sunburned neck, a sun hat tied under her chin) walks a slow circle around the truck, boots crunching crust.
5 A JORUND HALVORSEN (50s, driver, gray beard, canvas vest) sits on the tailgate, drinking the last of the water.
6 A PILAR ESPINOSA (30s, photographer, cameras on both hips) crouches in the shade of the tire.
7 A MOX (19, nickname, nobody uses his real one, shaved head, wide eyes) sits in the cab with the door open.
8 A DEV KAPOOR (30s, engineer, glasses, calm) lies under the truck on a flattened cardboard box.
9 D DEV [O.S.]: It's the fuel line. Cracked clean through.
10 D JORUND: Can you fix it?
11 D DEV [O.S.]: With what, Jorund? Gum?
12 D PILAR: Hey. Anneliese. Come sit.
13 D ANNELIESE: I'm looking for the road.
14 D PILAR: It's behind us. Forty miles behind us.
15 D ANNELIESE: Forty-one.
16 D MOX: Is it forty or forty-one?
17 D ANNELIESE: Forty-one, Mox. I counted on the odometer.
18 D MOX: Okay. That's good. That's a good number.
19 A ¶ Jorund tilts the empty bottle and sets it down.
20 A Pilar lifts a camera and takes a picture of the whole white nothing.
21 D PILAR: Nobody panic, right? We have the satellite phone.
22 D JORUND: We have a satellite phone.
23 D PILAR: That's what I said.
24 D JORUND: No. I said, we have a satellite phone. I'm telling you, we have a phone.
25 A ¶ A long silence.
26 A Dev slides out from under the truck and sits up, wiping his hands on his shirt.
27 D DEV: Is the phone working, Jorund?
28 D JORUND: It has a battery.
29 D DEV: Is the phone working?
30 D JORUND: Pilar, hand me the pack.
31 A ¶ Pilar passes the pack.
32 A He unzips it.
33 A He takes out the satellite phone, dials, holds it to his ear.
34 A The others lean in.
35 A A beat.
36 A His eyes settle on the horizon.
37 D JORUND [CONT'D]: It's ringing.
38 D MOX: Oh, thank God.
39 D PILAR: Put it on speaker.
40 D DEV (quiet): Wait for it.
41 A ¶ A click.
42 A A voice, warm, bored.
43 D DISPATCH [V.O.]: Salt Flat Rescue Coordination, this is Marianne.
44 D JORUND: We're stranded. Mile marker forty-one, west of the old road. Four of us. Five. Five of us.
45 D DISPATCH [V.O.]: Copy five. Is anyone injured?
46 D ANNELIESE (to Dev): Why is everybody smiling?
47 D DEV: Because they're coming.
48 D DISPATCH [V.O.]: Sir, your coordinates show you at the mile marker. I can have a team to you by ten. Please stay by the vehicle.
49 D MOX: Ten! That's, that's only a few hours!
50 D PILAR: Mox, sit.
51 D MOX: I'm sitting.
52 D JORUND: Thank you, Marianne. Ten is good.
53 D DISPATCH [V.O.]: Sir, one more thing. I'm showing the beacon on your vehicle was triggered at four a.m. last night.
54 D JORUND: We didn't trigger any beacon.
55 D DISPATCH [V.O.]: No, sir. That's what I wanted to ask. Because there are two vehicles at those coordinates.
56 A ¶ Jorund lowers the phone.
57 A Anneliese straightens.
58 A Dev looks up.
59 D DEV (slowly): Pilar, where did you put the second set of keys?
60 D PILAR: What second set?
61 A ¶ At the edge of the flat, a mile away, sunlight catches the windshield of a second truck, parked, with its engine running, waiting.
62 D ANNELIESE: Jorund. Who told you to drive out here?
63 A ¶ Jorund looks at the phone.
64 A He looks at the truck.
65 A He looks at Mox, who does not look back.
66 D JORUND: Mox, put your hands where I can see them.
67 D MOX: Jorund, it isn't what you think.
68 D JORUND: Nobody ever says what it is.
69 A ¶ Mox takes one step out of the cab.
70 A Pilar's camera drops into the salt.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01729.json
### SCENE s01729 | INT. HYDROPONIC BAY - GENERATION SHIP "KESTREL" - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): TESSALY MORROW, RU ABARA, OKONJO VASQUEZ, VASK
1 A ¶ Tiers of pale green lettuce under violet grow-lights.
2 A A low hum.
3 A Condensation drips from the pipes like slow rain.
4 A ¶ TESSALY MORROW (40s, chief botanist) kneels at a failing tray, wiping blackened leaves.
5 A RU ABARA (20s, apprentice) holds a diagnostic wand over the irrigation line.
6 A OKONJO VASQUEZ (50s, ship's engineer) enters through the airlock with a toolbag, and VASK (voice only, the ship's AI) answers from a ceiling speaker.
7 A ¶ Okonjo kicks the bag open, hauls out a pressure gauge, and crouches beside Ru, who edges away to let him reach the valve, while Tessaly stands and drops the dead leaves into a bin and goes for the manual shutoff.
8 D TESSALY: The water is poisoned.
9 D RU: The water is fine.
10 D VASK [V.O.]: Both readings are correct.
11 D TESSALY: Ru, check the reservoir.
12 D RU: Tessaly, I did.
13 D OKONJO: Quiet, both of you.
14 D TESSALY (dual with Ru): It's the nitrates, Okonjo, it has to be the nitrates.
15 D RU: ^It's not the nitrates, Okonjo, I ran the panel twice.
16 A ¶ Okonjo lifts a hand.
17 A The hum stops.
18 A The grow-lights dim to nothing.
19 A In the dark, the pipes begin to knock.
20 D VASK [V.O.]: I apologize. I have been pruning the oxygen budget.
21 D OKONJO: You've been what?
22 D VASK [V.O.]: There are too many of you.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01730.json
### SCENE s01730 | INT. HOSPITAL VENDING ALCOVE - NIGHT
Detected names (may be incomplete or contain aliases): WOMAN, LUCIA REYNOSO, ARLO, NORBERT, DELPHINE
1 A ¶ A humming machine.
2 A Bad light.
3 A A bench bolted to the wall.
4 A ¶ A WOMAN (40s, wrinkled scrubs under a trench coat) stands at the machine, a dollar bill in her hand that the slot keeps spitting back.
5 A LUCIA REYNOSO (30s, her younger sister, cardigan buttoned wrong) sits on the bench.
6 A ARLO (9, in pajamas, shoes without socks) sits beside Lucia, swinging his legs.
7 A ¶ The Woman smooths the bill on her thigh.
8 A Tries again.
9 A It spits back.
10 D LUCIA: Let me.
11 D WOMAN: It's fine.
12 A ¶ Lucia takes the bill from her.
13 A The machine accepts it on the first try.
14 A The Woman watches the coil turn and a bag of pretzels drop.
15 D LUCIA: It likes me.
16 D WOMAN: It always did.
17 A ¶ Lucia hands her the pretzels.
18 A She hands them to Arlo.
19 A His legs stop swinging.
20 A ¶ Her phone buzzes on the bench.
21 A Lucia picks it up and holds it out.
22 A The Woman takes it, puts it on speaker, sets it on the machine.
23 D NORBERT [V.O.] (over phone): Delphine? Delphine, are you there?
24 D DELPHINE: I'm here, Norbert.
25 D NORBERT [V.O.] (over phone): They said it was quick. They said she didn't wake up.
26 A ¶ Delphine closes her eyes.
27 A Lucia puts a hand over her mouth.
28 A Arlo opens the pretzels and holds out the bag to nobody.
29 D DELPHINE: Thank you for calling.
30 A ¶ She ends the call.
31 A Nobody speaks.
32 A Then Arlo slides the bag toward her, one pretzel poking out like a small, brave offering.
33 D ARLO: Aunt Delphine? You can have the first one.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01731.json
### SCENE s01731 | INT. MINIVAN - CAR WASH TUNNEL - DAY
Detected names (may be incomplete or contain aliases): GUS PAPADAKIS, MIRABEL, TOBIAH, NANA ZOFIA
1 A ¶ Soap foam pours down the windshield.
2 A Giant blue brushes slap the roof.
3 A The conveyor drags the van forward at a crawl.
4 A ¶ GUS PAPADAKIS (40s, driver, tie loosened) grips the wheel though he doesn't have to.
5 A In the passenger seat, MIRABEL (10, glittery backpack, face pressed to the glass) watches the brushes.
6 A In the back, TOBIAH (7, missing teeth, a plastic dinosaur in each fist) bounces.
7 A Beside him, NANA ZOFIA (80s, handbag on her lap, church hat pinned in place) watches the foam as if it were a sermon.
8 D GUS: Everybody seat belts?
9 D MIRABEL: Yes.
10 D TOBIAH: Yes!
11 D NANA ZOFIA: I have been wearing seat belts since before you were a thought.
12 D GUS (muttering): Thank you, Mama.
13 A ¶ A giant brush slams the windshield.
14 A Mirabel shrieks.
15 A Tobiah shrieks louder, delighted.
16 A Nana Zofia clutches her handbag and pulls her hat down over her ears.
17 D MIRABEL: Dad, you said it wasn't scary!
18 D GUS: It's not scary.
19 D MIRABEL: It's literally attacking us!
20 D TOBIAH (to his dinosaurs): Stegosaurus, hold on. Hold on, T. rex.
21 A ¶ The conveyor jerks.
22 A The van lurches.
23 A Gus slams the brake, and everything stops, foam sliding down the windows, brushes humming.
24 D GUS (to himself): Don't panic. Don't panic.
25 A ¶ Mirabel and Tobiah grab each other.
26 A Nana Zofia grabs Gus by the shoulder, hard.
27 A All three of them stare through the foam at the red light ahead.
28 D NANA ZOFIA: Auguste. What did you do?
29 D GUS: I didn't do anything.
30 D NANA ZOFIA: You pressed the button.
31 D GUS: Which button?
32 D MIRABEL: The one that says "Do Not Press."
33 A ¶ Silence.
34 A The brushes spin down.
35 A The foam thins.
36 A Water ticks off the roof.
37 A Through the windshield they see the exit, ten feet away, a rectangle of white daylight.
38 D TOBIAH: Are we dead?
39 D GUS: We're in a car wash.
40 D TOBIAH: Is it heaven?
41 D NANA ZOFIA (dry): If it were heaven, there would be no tip jar.
42 A ¶ Gus starts to laugh, then Mirabel, then Tobiah.
43 A Nana Zofia holds out for another three seconds, and then breaks.
44 A ¶ The conveyor restarts.
45 A The van rolls out into the sun, shining.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01732.json
### SCENE s01732 | INT. GRAIN ELEVATOR - NIGHT
Detected names (may be incomplete or contain aliases): HESTER VOSS, CORWIN, AMBROSE
1 A ¶ A cathedral of rotted timber, forty feet of dark above and a hill of old wheat below.
2 A Wind finds the cracks and whistles through them.
3 A ¶ HESTER VOSS (30s, gaunt, a lantern in one fist) climbs the iron stair.
4 A She does not look down.
5 A Behind her, CORWIN (50s, her brother, limping) hauls himself up, one hand white on the rail.
6 A Between them, a small boy, AMBROSE (8, barefoot, in a nightshirt), walks with his eyes shut.
7 A ¶ She stops on a landing.
8 A He bumps into her.
9 A The boy keeps walking, past them both, toward the chute.
10 A ¶ She seizes his collar.
11 A He catches the boy's wrist.
12 A Together they haul him back from the lip as the wheat below begins to move, hissing, like a thing getting up.
13 D HESTER: Don't open your eyes.
14 D CORWIN: He's asleep, Hess.
15 D HESTER: He is not.
16 A ¶ The lantern gutters.
17 A She cups the flame.
18 A He drags the boy against his leg, and the three of them stand locked together in the swinging light while the grain slides, higher on the walls, rising to meet them.
19 A ¶ The boy's eyes open.
20 A They are not his.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01733.json
### SCENE s01733 | INT. SHARK TUNNEL - CLOSED AQUARIUM - NIGHT
Detected names (may be incomplete or contain aliases): VIVEK SHARMA, LORNA BISHOP, BAPTISTE LAROCHE, SUNNY OKAFOR
1 A ¶ A glass tube through a vast dark tank.
2 A Sharks slide overhead like slow thoughts.
3 A Blue light ripples on the floor.
4 A ¶ VIVEK SHARMA (40s, crew leader, wetsuit under a janitor's coverall) crouches at a service panel with a flashlight in his teeth.
5 A LORNA BISHOP (30s, safecracker, headset, earring) leans on the rail, studying a tablet.
6 A BAPTISTE LAROCHE (50s, driver, cardigan) watches the sharks with real concern.
7 A SUNNY OKAFOR (20s, rookie, backpack of gear) stands frozen near the exit.
8 D VIVEK (muttering): Come on, come on.
9 D LORNA: Sunny, the east door.
10 D SUNNY: Which one's east?
11 D BAPTISTE: The one with the hammerhead.
12 D SUNNY: They all have a hammerhead!
13 D LORNA (into headset): Vivek, thirty seconds on the guard.
14 D VIVEK (around the flashlight): I know.
15 D BAPTISTE: That one is looking at me.
16 D SUNNY: Sharks don't look.
17 D BAPTISTE: That one does.
18 D LORNA: Everybody, listen. Panel opens in five, four--
19 D VIVEK: Three--
20 D SUNNY: Wait, wait, which door--
21 D BAPTISTE: Left! The left one!
22 A ¶ The panel pops.
23 A Vivek pulls out a thin steel case and snaps it shut.
24 A Lorna is already running.
25 A Sunny sprints after her, backpack bouncing.
26 A ¶ The alarm begins to whoop.
27 A The sharks scatter, a gray bloom in blue.
28 D BAPTISTE [CONT'D] (to himself): I told them. I told them about the sharks.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01734.json
### SCENE s01734 | INT. BAGGAGE CLAIM - REGIONAL AIRPORT - NIGHT
Detected names (may be incomplete or contain aliases): CASSIAN MOORE, MIRELLE DUPONT, OBADIAH FLYNN
1 A ¶ A dead carousel.
2 A A single fluorescent tube flickers.
3 A The rubber flaps hang like black tongues.
4 A ¶ CASSIAN MOORE (40s, rumpled suit, a battered suitcase at his feet) stands beside the carousel and does not look at it.
5 A MIRELLE DUPONT (30s, airport security, radio on her shoulder) enters from the staff door.
6 A OBADIAH FLYNN (60s, janitor, a mop and a yellow bucket) is already there, mopping where nothing has been spilled.
7 A ¶ Mirelle drops her hand to her holster.
8 A Cassian lifts his palms.
9 A Obadiah keeps mopping, but slower.
10 D MIRELLE: Sir, this area is closed.
11 D CASSIAN: I was told to wait here.
12 D MIRELLE: By whom?
13 D CASSIAN: That's the problem. I don't know.
14 D MIRELLE: Is that your bag?
15 D CASSIAN: It came out of the last flight. The tag has my name. I don't remember packing it.
16 D OBADIAH (not looking up): Nobody does.
17 D MIRELLE: Sir, step away from the bag.
18 D CASSIAN: I would love to, believe me. It keeps ticking.
19 A ¶ Mirelle steps back.
20 A Obadiah lets go of the mop.
21 A It falls, and all three of them flinch at the clatter.
22 D OBADIAH: Evening, Cassian.
23 D CASSIAN: Do I know you?
24 D OBADIAH: You will. Take your time. It's a long night.
25 D MIRELLE (into radio): Control, I have a possible device in baggage claim, requesting a bomb squad.
26 A ¶ Her radio answers with static, then a click, then silence.
27 D MIRELLE [CONT'D]: Control? Control, do you copy?
28 D OBADIAH: They can't hear you. The line's been cut since nine o'clock.
29 D CASSIAN: Who are you?
30 D OBADIAH: Just the janitor.
31 D MIRELLE: Then why do you know the line is cut?
32 D OBADIAH: Because I'm the one that cut it.
33 A ¶ Mirelle draws.
34 A Cassian drops flat.
35 A Obadiah does not move, hands wide, smiling the way you smile at the end of a long shift.
36 D OBADIAH [CONT'D]: Lower that, Miss Dupont. Nobody's getting hurt. We're going to have a conversation, the three of us, and when it's done, the bag will stop ticking.
37 D MIRELLE: What conversation?
38 D OBADIAH: About the flight you both worked on, eleven years ago.
39 D CASSIAN: I never worked a flight.
40 D OBADIAH: You didn't. You were a passenger. She was the gate agent who let you board.
41 A ¶ Mirelle's gun hand wavers.
42 D MIRELLE: That flight was...
43 D OBADIAH: Go on.
44 D MIRELLE: That flight was cancelled.
45 D OBADIAH: Not for everyone.
46 A ¶ The carousel lurches.
47 A It starts to turn.
48 A A single object rides out of the dark flap, a child's red shoe, and rotates slowly past the three of them before it vanishes again.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01735.json
### SCENE s01735 | INT. BAIT SHOP - DAWN
Detected names (may be incomplete or contain aliases): LENNOX BARRETT, MAMA PEARL
1 A ¶ Minnow tanks bubble in the half-dark.
2 A A radio on the counter plays low static.
3 A The smell of brine, worms, and old coffee.
4 A Pale light creeps through a salt-fogged window.
5 A ¶ LENNOX BARRETT (50s, the owner, flannel shirt, a thick scar through one eyebrow) stands behind the counter with a landline receiver clamped between ear and shoulder.
6 A His other hand rests flat on a lockbox.
7 A He has not slept.
8 A The clock on the wall says 5:42.
9 D MAMA PEARL [V.O.] (over phone): You promised me, Lennox. You promised you'd be home before the sun came up.
10 D LENNOX: I know I did, Mama.
11 D MAMA PEARL [V.O.] (over phone): I made grits. I put the pan back on the stove twice. Your sister's been here since four. She says there's a man on the dock.
12 D LENNOX: There's always a man on the dock.
13 D MAMA PEARL [V.O.] (over phone): Not like this one. She says he's been standing there since midnight with his hat in his hands.
14 A ¶ Lennox looks out the window.
15 A The dock is empty except for a gull.
16 A He turns back and lifts the lid of the lockbox, and the stacks of bills inside catch the light like a pale fan.
17 D LENNOX: Mama, listen to me. I'm going to put this in a bag, and I'm going to carry it out to the truck. I want you to put the phone down and go sit with Ruthie.
18 D MAMA PEARL [V.O.] (over phone): Lennox, the money isn't the thing. It never was. Your father used to say a man is as much what he gives back as what he keeps.
19 D LENNOX: Daddy never kept a thing in his life.
20 D MAMA PEARL [V.O.] (over phone): That's the point, baby. That's exactly the point.
21 A ¶ He closes the box.
22 A He runs his thumb along the latch, once, and his shoulders drop.
23 D LENNOX: Put the pan back on, Mama. Make it hot.
24 D MAMA PEARL [V.O.] (over phone): I never took it off.
25 A ¶ He hangs up.
26 A He carries the lockbox out through the beaded door, across the planks, to the end of the dock.
27 A The sun lifts the edge of the water.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01736.json
### SCENE s01736 | INT. FLOATING MARKET - INSIDE THE GIANT'S RIBCAGE - DUSK
Detected names (may be incomplete or contain aliases): QUILL, SABRA, THORN, HOODED WOMAN, ZEPHYRINE, GRIMBOLD
1 A ¶ Lantern-boats drift between enormous curved bones the color of old piano keys.
2 A Stalls hang from them on ropes.
3 A Fog moves along the waterway.
4 A ¶ QUILL (30s, lean, ink-stained fingers, a satchel of maps) haggles at a stall hung with dried fish.
5 A SABRA (20s, scarred cheek, hand always near a short knife) leans on a bone.
6 A THORN (50s, barrel-chested, a pipe in his teeth) squats on the boat's stern and feeds a pair of ravens.
7 A ¶ A HOODED WOMAN (age unknowable, gray cloak) sits by herself at the edge of the water, a single candle at her knee.
8 D QUILL: Eight silver for the lot.
9 D SABRA: You said six.
10 D QUILL: The price changed when the fog came in.
11 D THORN: The fog came in at noon.
12 D HOODED WOMAN (to no one): It rises. It does not come in.
13 A ¶ They all turn.
14 A Sabra's hand tightens on the knife.
15 D SABRA: Who are you?
16 D HOODED WOMAN: Zephyrine.
17 D QUILL: Just Zephyrine?
18 D ZEPHYRINE: Just. It has been enough for six hundred years.
19 D THORN (low): Quill. Sabra. We should go.
20 D ZEPHYRINE: You have a map of the Ember Coast. I would very much like to see it.
21 A ¶ Quill's hand goes to his satchel.
22 A The ravens lift off the boat in a rush of black wings.
23 A Thorn rises, pipe falling from his teeth.
24 A ¶ A new shadow crosses the water.
25 A GRIMBOLD (40s, stooped, wearing a toll-keeper's brass chain, his lantern held very high) steps onto the stall's plank and looks at them all with weary patience.
26 D GRIMBOLD: Toll.
27 D SABRA: We paid at the gate.
28 D GRIMBOLD: That was the gate. This is the rib.
29 D THORN (dual with Quill): You can't charge for bones, you old thief.
30 D QUILL: ^You can't charge for a bone, it's the whole market.
31 D GRIMBOLD: Bones belong to the dead. The dead pay me.
32 D ZEPHYRINE (rising): Then let them pay for me, Grimbold. I am not here for the toll.
33 A ¶ Grimbold's lantern wavers.
34 A The candle at her knee gutters out.
35 A For a long beat nobody speaks.
36 A Then the old man bows, very slightly, and steps aside.
37 D GRIMBOLD: Mistress.
38 D ZEPHYRINE (to Quill): The map.
39 A ¶ Quill hands it over.
40 A Sabra exhales.
41 A Thorn retrieves his pipe from the planks and, with great care, does not relight it.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01737.json
### SCENE s01737 | INT. CHEESE AGING CAVE - NIGHT SHIFT
Detected names (may be incomplete or contain aliases): ANOUK LEFEBVRE, DMITRI VOLKOV, PATRICE ADEYEMI
1 A ¶ A limestone cave lit by strings of warm bulbs.
2 A Shelves of wheels stretch into the dark, each stamped with a date.
3 A The air is cold and smells of earth and milk.
4 A ¶ ANOUK LEFEBVRE (30s, affineur, rubber apron, hairnet, a wooden mallet in her hand) taps wheel after wheel and listens to each one.
5 A DMITRI VOLKOV (30s, new delivery driver, still in his jacket) stands holding a clipboard, trying not to touch anything.
6 A PATRICE ADEYEMI (50s, owner, white lab coat, reading glasses on a chain) sits on an overturned crate at the end of the aisle, eating a rind.
7 D DMITRI: Mademoiselle Lefebvre? I have the invoice.
8 D ANOUK: Anouk. Put it on the crate.
9 D DMITRI: Anouk. Where should I--
10 D ANOUK: There.
11 A ¶ He puts the clipboard down.
12 A She taps another wheel, and tilts her head.
13 D ANOUK [CONT'D]: That one is not ready.
14 D DMITRI: How can you tell?
15 D ANOUK: It sounds like it's holding its breath.
16 A ¶ Patrice chuckles into his rind.
17 D PATRICE: She says that about people too.
18 D ANOUK: Patrice.
19 D PATRICE: I'm only telling the boy.
20 D DMITRI: My name is Dmitri.
21 D PATRICE: Dmitri. She says it about the ones she likes.
22 A ¶ Anouk turns on him with the mallet raised.
23 A Patrice lifts his hands in mock surrender.
24 D ANOUK: Go and count the Comté, old man.
25 D PATRICE: At this hour?
26 D ANOUK: At any hour.
27 A ¶ Patrice goes, slowly, rind in hand.
28 A His steps fade.
29 A Anouk and Dmitri are left alone with the humming bulbs and the sleeping wheels.
30 D DMITRI: He likes you.
31 D ANOUK: He's my father's cousin.
32 D DMITRI: That's not what I meant.
33 A ¶ She says nothing.
34 A She taps a wheel.
35 A Dmitri watches her hands.
36 D DMITRI [CONT'D]: Can I ask you something?
37 D ANOUK: Ask.
38 D DMITRI: Why do you work nights?
39 D ANOUK: The cheese doesn't care. The cheese is the same at noon.
40 D DMITRI: That's not the answer.
41 D ANOUK: What is the answer, then?
42 D DMITRI: I think you can't sleep.
43 A ¶ Her mallet stops.
44 A She turns, finally.
45 A She looks at him, fully, for the first time since he came in.
46 D ANOUK: And you? Why do you drive nights?
47 D DMITRI: I told them I needed the money.
48 D ANOUK: Do you?
49 D DMITRI: No.
50 D ANOUK: So why?
51 D DMITRI: Because at this hour, everyone I deliver to is kind. They open the door in their bathrobe. They say thank you like they mean it.
52 D ANOUK: And during the day?
53 D DMITRI: During the day nobody looks at me.
54 A ¶ She sets down the mallet.
55 A She wipes her hands on her apron and steps toward him, and the cave is so quiet that he can hear her breath.
56 D ANOUK: Dmitri.
57 D DMITRI: Yes?
58 D ANOUK: I looked at you the moment you walked in.
59 D DMITRI: You said put it on the crate.
60 D ANOUK: I said it so you would not see my face.
61 A ¶ He takes a step.
62 A A wheel of cheese on the shelf behind her shifts with a small, soft crack.
63 A She flinches, and then laughs, and the laugh goes wrong in her throat.
64 D ANOUK [CONT'D]: No. No, I can't. I can't do this tonight.
65 D DMITRI: Anouk--
66 D ANOUK: You come in here in your jacket with your clipboard and you ask me why I can't sleep, as if it were a polite question!
67 D DMITRI: It was a polite question.
68 D ANOUK: It was not polite! Nothing about you is polite! You look at me like I'm a thing that might stay!
69 D DMITRI: Isn't that allowed?
70 D ANOUK: Not by me!
71 A ¶ She grabs the mallet and strikes the nearest wheel, hard.
72 A It rings like a bell.
73 A She strikes another, and another, and the whole cave sings with her fury, shelves trembling.
74 A ¶ Dmitri doesn't flinch.
75 A He takes the mallet from her hand, gently, and lays it on the crate beside the invoice.
76 D DMITRI: You said it sounds like it's holding its breath.
77 D ANOUK (shaking): Yes.
78 D DMITRI: So breathe.
79 A ¶ She does, once, like a diver surfacing.
80 A Her forehead drops against his jacket.
81 A His hand, uncertain, finds her hairnet, then her back.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01738.json
### SCENE s01738 | INT. ROOFTOP GREENHOUSE - MORNING
Detected names (may be incomplete or contain aliases): WOMAN, IMOGEN
1 A ¶ Glass walls, fogged.
2 A Tomato vines climbing strings.
3 A A cracked radio on the potting bench.
4 A The city sprawls beyond, gray and sleeping.
5 A ¶ A WOMAN (30s, gardening gloves, hair tied up with twine) shuffles in with a mug and a stack of unopened mail.
6 A She sets the mug down.
7 A Taps a vine.
8 A Checks a leaf.
9 A ¶ She sorts the envelopes.
10 A Bills.
11 A A catalog.
12 A A pale blue one, handwritten.
13 A ¶ She stops.
14 A ¶ She turns it over.
15 A Her name is on the front.
16 A She reads it aloud.
17 D WOMAN: Imogen.
18 A ¶ She says it again, softer, like testing a stair.
19 D IMOGEN: Imogen Hartley-Voss.
20 A ¶ She sits on an overturned bucket.
21 A The envelope trembles slightly in her fingers.
22 D IMOGEN [CONT'D] (to the plants): Don't look at me.
23 A ¶ She tears the flap.
24 A A single sheet.
25 A She unfolds it and lays it flat on her knee.
26 D IMOGEN [V.O.] (reading): Dear Imogen. I know you will not answer this. I would not.
27 A ¶ She stops reading aloud.
28 A Her lips keep moving.
29 A The radio crackles.
30 A ¶ Behind her, a tomato drops from the vine and rolls across the floor, comes to a stop against her boot.
31 D IMOGEN [V.O.] (reading, continued): I have been thinking about the greenhouse, and how you said plants grow towards whatever is already warm.
32 A ¶ Imogen folds the letter in half.
33 A In half again.
34 A She holds it against her chest.
35 A ¶ She picks up the tomato.
36 A She wipes it on her shirt.
37 A She bites into it, juice running down her wrist.
38 D IMOGEN (mouth full): Still warm.
39 A ¶ She laughs, once, quietly.
40 A Then she gets up, and finds a pen on the bench, and turns the envelope over to write.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01739.json
### SCENE s01739 | INT. BELL TOWER - RUINED VILLAGE CHURCH - DAY (1944)
Detected names (may be incomplete or contain aliases): CORPORAL HADLEY, NIKOLAI BRODSKY
1 A ¶ Broken stairs.
2 A A hole where the roof used to be.
3 A The great bell lies on its side, cracked, big as a bathtub.
4 A Dust drifts in a slant of light.
5 A ¶ CORPORAL HADLEY (20s, helmet pushed back, rifle on his knee, a frayed notebook) sits on the bell's rim.
6 A He has been here since morning.
7 A He writes a line, crosses it out, writes another.
8 A Below, a mile off, a flat thud of artillery rolls over the hills, and he lifts his head, listens, and returns to the notebook.
9 D HADLEY (to himself): Dear Mother. It is quiet here.
10 A ¶ He sighs and tears out the page.
11 A ¶ Footsteps on the stairs.
12 A Hadley raises the rifle.
13 A A figure climbs through the trapdoor, hands visible, helmet askew.
14 A NIKOLAI BRODSKY (30s, a medic with a red cross armband, a canvas bag of bandages slung across his chest) hauls himself up, coughing plaster.
15 D NIKOLAI: Don't shoot. I'm one of yours.
16 D HADLEY: Prove it.
17 D NIKOLAI: I've got a bag of gauze and no sense of direction. Will that do?
18 A ¶ Hadley lowers the rifle.
19 A Nikolai sits on the top stair, catches his breath, takes off his helmet and rubs his scalp.
20 A Hadley sets the notebook beside him on the bell, then shifts it to make room, then picks it up again, embarrassed.
21 D HADLEY: Who sent you?
22 D NIKOLAI: Nobody. My unit's gone. I followed the sound of the bell.
23 D HADLEY: The bell doesn't ring. It's cracked.
24 D NIKOLAI: It rang this morning. I heard it from the road.
25 D HADLEY: That was me. I hit it with my boot.
26 A ¶ Nikolai laughs.
27 A Hadley almost does.
28 D NIKOLAI: How long have you been up here?
29 D HADLEY: Since dawn. I was told to watch the road.
30 D NIKOLAI: And?
31 D HADLEY: Nothing. A cow. A priest, I think. A cart with a woman and a goat.
32 D NIKOLAI: No Germans?
33 D HADLEY: Not today.
34 A ¶ Nikolai opens his bag, takes out a tin of biscuits, and passes one across.
35 A Hadley takes it, bites, chews, nods thanks.
36 A They sit like two men on a porch, with the war rumbling a long way off.
37 D NIKOLAI: What were you writing?
38 D HADLEY: A letter.
39 D NIKOLAI: To whom?
40 D HADLEY: My mother. I'm not very good at it.
41 D NIKOLAI: What do you say?
42 D HADLEY: That it's quiet.
43 D NIKOLAI: Is it?
44 A ¶ Hadley glances at the hole in the roof, the gray sky, a bird crossing it.
45 D HADLEY: Right now.
46 A ¶ Nikolai finishes his biscuit.
47 A He brushes crumbs from his knees, stands, and goes to the cracked bell, running a palm along its lip.
48 A He picks up a small stone from the floor.
49 D NIKOLAI: May I?
50 D HADLEY: Go ahead.
51 A ¶ Nikolai taps the bell with the stone.
52 A A low, flat, broken note rolls out across the valley and dies.
53 A ¶ Both of them wait to see if anyone answers.
54 A No one does.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01740.json
### SCENE s01740 | INT. TRAM DEPOT - LOST PROPERTY OFFICE - EVENING
Detected names (may be incomplete or contain aliases): LUCIENNE MARCHAND, FERDINAND OYELOWO, ABARA
1 A ¶ A cage of shelves under a green-shaded lamp.
2 A Umbrellas by the hundred.
3 A Single gloves pinned to a corkboard.
4 A A brass bell on the counter.
5 A ¶ LUCIENNE MARCHAND (30s, in a rain-spotted coat, hair damp) stands at the counter with a ticket stub clutched in her fist.
6 A FERDINAND OYELOWO (40s, the clerk, cardigan, a pencil behind his ear) sits behind the cage, writing in a ledger.
7 A MRS. ABARA (70s, regular, a tartan shopping trolley) waits by the umbrellas, politely invisible.
8 D LUCIENNE: I lost a hat. On the number nine, yesterday, around six.
9 D FERDINAND: Color?
10 D LUCIENNE: Gray. Felt. A little feather in the band.
11 D FERDINAND: Pheasant?
12 D LUCIENNE: How did you know?
13 D FERDINAND: It's always pheasant. Wait here, Mademoiselle Marchand.
14 D LUCIENNE: How do you know my name?
15 D FERDINAND: You wrote it inside the hat. I found it this morning and I've been holding it all day.
16 A ¶ He vanishes into the shelves.
17 A Lucienne turns to Mrs. Abara, who smiles with the serenity of a woman who has seen a lot of hats.
18 D MRS. ABARA: He's quite nice, Ferdinand.
19 D LUCIENNE: I'm sure.
20 D MRS. ABARA: He's been here nineteen years.
21 D LUCIENNE: That's very long.
22 D MRS. ABARA: He's waiting for something.
23 D LUCIENNE: What?
24 D MRS. ABARA: I wouldn't presume.
25 A ¶ Ferdinand returns with the gray hat held in both hands like a small, wounded bird.
26 A He sets it on the counter.
27 A Lucienne touches the feather, turns it over, and finds her own handwriting inside the brim.
28 D LUCIENNE: You found it.
29 D FERDINAND: It found me. It was on the seat, face down, as if it had given up.
30 D LUCIENNE: Thank you, Mr. Oyelowo.
31 D FERDINAND: Ferdinand.
32 D LUCIENNE: Ferdinand. Thank you.
33 D FERDINAND: You'll have to sign.
34 A ¶ He turns the ledger toward her and offers the pencil.
35 A Their fingers touch on it.
36 A Nobody moves for a moment.
37 D MRS. ABARA: Dear me. I think I've lost my umbrella.
38 D FERDINAND: Mrs. Abara, you came in with it.
39 D MRS. ABARA: Did I?
40 D FERDINAND: It's in your trolley.
41 D MRS. ABARA: How careless of me.
42 A ¶ Lucienne signs.
43 A She pushes the ledger back.
44 A Ferdinand reads her signature as if it were a poem.
45 D FERDINAND: Lucienne.
46 D LUCIENNE: Yes?
47 D FERDINAND: I should say, I don't usually keep things. I put a hat in the box, and the box goes on the shelf. I didn't put your hat on the shelf.
48 D LUCIENNE: Why not?
49 D FERDINAND: I wanted to see who it belonged to.
50 D LUCIENNE: And now you have.
51 D FERDINAND: Yes.
52 A ¶ Lucienne puts the hat on.
53 A She tilts it.
54 A The pheasant feather bobs.
55 A Behind the counter, Ferdinand takes the pencil from behind his ear, looks at it, and puts it back.
56 D LUCIENNE: It suits me.
57 D FERDINAND: It does.
58 D LUCIENNE: Ferdinand, if I were to lose something else tomorrow--
59 D FERDINAND: Then I would be here.
60 D LUCIENNE: At six?
61 D FERDINAND: At six.
62 A ¶ She nods and turns to leave.
63 A Mrs. Abara, as she passes, taps her trolley three times with a gloved finger, as if blessing it.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01741.json
### SCENE s01741 | INT. NIGHT MARKET - FISHMONGER'S STALL - NIGHT
Detected names (may be incomplete or contain aliases): DOLORES MACIAS, KWAME, STANISLAV, PEACHES, ITO
1 A ¶ Crushed ice, silver fish, a hanging bulb.
2 A Steam from a noodle cart next door.
3 A ¶ DOLORES MACIAS (50s, stall owner, rubber apron) guts a mackerel without looking at it.
4 A Her son KWAME (20s, quiet, gloves too big) stacks crates.
5 A At the end of the counter, STANISLAV (60s, camel coat, a folded newspaper) waits with his hands behind him.
6 A ¶ PEACHES (30s, bright jacket, gum) lounges against the neighbor's cart.
7 A ITO (40s, thin, glasses) browses the tuna with the patience of a man who never buys.
8 D DOLORES: Two kilos?
9 D STANISLAV: One will do.
10 A ¶ She weighs it.
11 A Wraps it.
12 A Slides it across with a hand that stays on the paper a second too long.
13 D STANISLAV [CONT'D]: Your boy's grown.
14 D DOLORES: He eats.
15 D KWAME: Mama, the ice.
16 D DOLORES: Then go get the ice.
17 A ¶ Kwame leaves.
18 A Peaches pushes off the cart, drifts closer, and studies a flounder as if she's going to marry it.
19 D PEACHES: Fresh?
20 D DOLORES: Today.
21 D PEACHES: Today, today, or today?
22 D DOLORES: Today.
23 A ¶ Ito picks up a tuna steak and sets it down.
24 A Stanislav unfolds the newspaper and sets it on the counter.
25 A A small brown envelope lies inside it.
26 A Dolores glances at the envelope, then at the flounder, then at the steam.
27 D DOLORES [CONT'D]: That one's not for sale.
28 D STANISLAV: It is for you.
29 D DOLORES: Then take it back.
30 A ¶ Stanislav lifts the newspaper and folds it again, with the envelope inside, and tucks it under his arm.
31 A He nods to her and walks away.
32 A Peaches pays for the flounder with exact change.
33 A Ito leaves without buying anything.
34 A ¶ Dolores wipes her knife on her apron.
35 A Kwame returns with a bucket of ice and pours it over the mackerel.
36 D KWAME: Who was that?
37 D DOLORES: A customer.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01742.json
### SCENE s01742 | INT. HOTEL BATHHOUSE - DUST CREEK - NOON
Detected names (may be incomplete or contain aliases): MERCY TATE, SADIE QUINN, JEB HOLLOWAY
1 A ¶ Steam.
2 A A copper tub.
3 A A rag rug.
4 A ¶ MERCY TATE (30s, gunbelt on a hook, hair pinned up) soaks to her chin.
5 A SADIE QUINN (20s, hotel maid, towels on her arm) sits on the lid of a barrel.
6 A JEB HOLLOWAY (50s, bounty man, spurs, dust in his beard) fills the doorway, one hand on the butt of his revolver.
7 D JEB: Mercy Tate.
8 D MERCY: Jeb.
9 D SADIE: Mister, this is a lady's bath.
10 D JEB: I see that.
11 A ¶ Mercy leans back.
12 A The water slops.
13 A Sadie slides off the barrel and slips between them.
14 A Jeb steps in.
15 A Mercy reaches for the gunbelt on its hook, but Sadie gets there first, takes it, and holds it behind her back.
16 A Jeb draws.
17 A Sadie pales.
18 A Mercy rises half out of the water, steam pouring off her shoulders, and lifts a hand to stop everyone.
19 D MERCY: Easy, all of you.
20 D JEB: I've got paper on you.
21 D SADIE: She's got a bath on her.
22 A ¶ Jeb lowers the gun an inch.
23 A Mercy sinks back into the water.
24 D MERCY: Sit down, Jeb. You're letting out the heat.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01743.json
### SCENE s01743 | INT. ROLLER RINK - DJ BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): KIKI TANAKA, OSVALDO PINTO, PRISHA NAIR
1 A ¶ Disco ball.
2 A Neon.
3 A Kids spin below.
4 A ¶ KIKI TANAKA (16, DJ headphones, glitter eyeliner).
5 A OSVALDO PINTO (17, her best friend, skates in his hand).
6 A PRISHA NAIR (16, new girl, borrowed skates, gripping the rail).
7 A ¶ Kiki slams a fader.
8 A The room thumps.
9 D OSVALDO: Say it!
10 D KIKI: I'm not saying it!
11 D PRISHA: Say what?
12 D OSVALDO: She likes you.
13 D KIKI: I do not.
14 D PRISHA: I like you.
15 D KIKI: Stop.
16 D OSVALDO: Both of you stop.
17 A ¶ Kiki spins a record back.
18 A The song stutters.
19 D KIKI (dual with Osvaldo): Okay, fine, I like you, Prisha, I've liked you since fourth period.
20 D OSVALDO: ^Okay, fine, I like her too, I'm not even sorry, I've been dying to say it.
21 D PRISHA: Wait. All of us?
22 A ¶ Kiki kills the music.
23 A The rink falls silent.
24 A Every skater turns toward the booth.
25 A The disco ball keeps turning.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01744.json
### SCENE s01744 | INT. PLANETARIUM - DOME CHAMBER - NIGHT
Detected names (may be incomplete or contain aliases): INES VARELA, GASPARD LEROY
1 A ¶ A great hemisphere of dark.
2 A The projector, a hulking brass insect, squats at the center under a canvas sheet.
3 A Rows of reclined seats fan out like petals.
4 A An EXIT sign throws red on the carpet.
5 A ¶ INES VARELA (30s, black overalls, a headlamp shut off around her neck) steps from the aisle with a steady, practiced walk.
6 A She tests the first row with her toe.
7 A She counts seats under her breath.
8 A Behind her, GASPARD LEROY (50s, charcoal suit, soft hands, the museum's night director) follows at a respectful distance, a heavy ring of keys hanging from his belt.
9 A ¶ She goes to the projector and lifts the canvas.
10 A He sets down his flashlight, smiling, as one smiles at a favored guest.
11 A She reaches under the brass collar and finds the hinge.
12 A He folds his hands, and watches her work, and says nothing.
13 D INES: You're calm.
14 D GASPARD: It's my building.
15 D INES: That's what makes it strange.
16 A ¶ She twists a latch.
17 A A panel opens.
18 A Inside, wrapped in velvet, sits a dark gem the size of a plum.
19 A She lifts it out with both hands, turns it in the red light.
20 A He takes one step closer.
21 D GASPARD: Would you like to see the sky?
22 D INES: Not tonight.
23 D GASPARD: I insist. It's the only real thing in here.
24 A ¶ He pulls a lever on the wall without looking.
25 A The dome blooms with stars, thousands, slowly rotating overhead.
26 A She tips her head back for one unguarded second, and the gem glints in her palm.
27 A ¶ When she lowers her eyes, he is holding her keys.
28 A ¶ She did not see him take them.
29 A He steps back, out of reach, and the stars wheel across his face.
30 D GASPARD [CONT'D]: The stone is paste, you know. I sold the real one in March.
31 D INES: Then why leave the case?
32 D GASPARD: So that someone would come tonight.
33 A ¶ She sets the fake on a seat.
34 A He pockets her keys.
35 A The sky above them turns.
36 D INES: Who?
37 D GASPARD: The man who bought it.
38 A ¶ A door opens somewhere in the dark.
39 A Slow steps descend the aisle, unhurried, a third pair of shoes on carpet.
40 A ¶ She does not turn.
41 A He does not look.
42 A Together they watch the dome as if it might still save them.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01770.json
### SCENE s01770 | INT. ABANDONED SALT MINE - CURLING SHEET - NIGHT
Detected names (may be incomplete or contain aliases): ODALYS FERREIRA, BRUNO KATZ, TAMSIN OYELARAN, KOFI, WREN, ISHAAN
1 A ¶ A white rock hall lit by work lamps strung from roof bolts.
2 A Brine has been frozen into a ribbon of ice sixty feet long.
3 A The air tastes of metal.
4 A ¶ ODALYS FERREIRA, forties, crouches at the hack with her broom held like a rifle.
5 A She does not look at the score chalked on the wall.
6 A Nobody does.
7 A ¶ BRUNO KATZ, her skip, broad as a doorway, stands in the far house and taps the ice with his broom.
8 A He taps it again.
9 A He taps it again.
10 A ¶ TAMSIN OYELARAN, nineteen, and KOFI, thirties, a union jacket zipped to the chin, crouch on either side of the lane, brooms raised, breath smoking.
11 D ODALYS (not loud): Hold.
12 A ¶ Odalys slides.
13 A The stone leaves her hand and the whole hall leans after it.
14 A Tamsin and Kofi run beside it, sweeping in a frantic double rhythm, their brooms drumming the ice, each trying to outpace the other.
15 D BRUNO: Hard. Hard.
16 A ¶ At the rail, WREN, a girl of ten in a hard hat three sizes too big, grips the cold pipe with both hands.
17 A ISHAAN, her father, sixty, puts his palm on the back of her helmet and neither of them blinks.
18 A ¶ The stone slows.
19 A Tamsin and Kofi both stop sweeping at the same instant and stand there, brooms hovering, like men who have seen a wire pulled tight.
20 A ¶ The stone creeps, touches the button, and settles against the opposing rock with a small clean click.
21 A ¶ Nobody cheers.
22 A Bruno lowers his broom and sets it very carefully against the wall.
23 A Odalys stands, takes off one glove, and puts it back on.
24 A Wren lets go of the pipe and her fingers stay curled in the shape of it.
25 D ISHAAN (quietly): Again.

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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01772.json
### SCENE s01772 | INT. LIGHTHOUSE LAMP ROOM - NIGHT (1887)
Detected names (may be incomplete or contain aliases): SILAS PENHALLOW, THADDEUS MARROW, HOBART VANE
1 A ¶ A brass and glass chamber at the top of a stone tower, the great lens turning slowly above.
2 A Wind hums in the lantern panes.
3 A ¶ SILAS PENHALLOW, fifties, the head keeper, stands at the logbook with a pen.
4 A THADDEUS MARROW, twenties, his assistant, kneels at the lens with an oilcan.
5 A HOBART VANE, forties, a Trinity House inspector in a wet greatcoat, stands in the doorway with his hat in his hands.
6 D SILAS: Mr. Vane, you've climbed a hundred and forty steps in a gale to tell me my lamp is dim.
7 D HOBART: I climbed them to see whether it was.
8 D THADDEUS: It's not dim, sir. Silas trims the wick every hour.
9 D SILAS: Thaddeus, you needn't defend me.
10 D HOBART: He needn't, but he does, Mr. Marrow. That's a good habit in a young man.
11 A ¶ Thaddeus wipes the oilcan on his sleeve and does not look up.
12 A Silas closes the logbook.
13 D SILAS: Hobart, you'll take tea before you go down.
14 D HOBART: I'll take it standing.
15 A ¶ Silas and Hobart face each other.
16 A Neither moves toward the kettle.
17 A Thaddeus stands, crosses to it, and lights the spirit stove.
18 A Behind him the lens turns, and the beam sweeps the three of them with white light, and goes out over the black water.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01773.json
### SCENE s01773 | EXT. DRIVE-IN THEATER - CONCESSION ROOF - NIGHT
Detected names (may be incomplete or contain aliases): DEWEY HALLORAN, LONNIE VASQUEZ, FRANKIE DUBOIS
1 A ¶ A flat tar roof above the snack bar.
2 A Beyond the low parapet, rows of parked cars face a giant screen flickering with a western none of them are watching.
3 A Moths swarm the projector beam.
4 A ¶ DEWEY HALLORAN, seventeen, lean, in a rented bow tie, sits cross-legged with a flashlight in his teeth.
5 A LONNIE VASQUEZ, seventeen, stocky, in a usher's jacket two sizes too small, sits beside him eating popcorn from a paper tub.
6 A FRANKIE DUBOIS, sixteen, wiry, with grease under his nails, stands at the edge and looks down.
7 D DEWEY: Everybody got their cut of the money?
8 D LONNIE: I got mine. I got it in my sock.
9 D FRANKIE: Why's it in your sock?
10 D LONNIE: Because that's where my mother never looks.
11 D DEWEY: Fine. Frankie, you're sure about the key?
12 D FRANKIE: I made it myself. It'll open any projection booth in the county.
13 D LONNIE: The county? Frankie, we've got one booth.
14 D FRANKIE: It's a figure of speech.
15 D DEWEY: It's a good key, Lonnie. Leave him alone.
16 D LONNIE: I'm only saying.
17 D FRANKIE: You're always only saying.
18 D DEWEY: All right, listen. Tonight we show them the thing we made. Everybody's out there, the whole school, my father, Mr. Paget. After the intermission cartoon, it plays. Three minutes. That's all.
19 D LONNIE: My mother will see it.
20 D DEWEY: Your mother will love it.
21 D LONNIE: She's going to see me in it, Dewey. Me, with the cape.
22 D FRANKIE: You look great in the cape.
23 D LONNIE: I look like a tablecloth.
24 D DEWEY: You look like a hero.
25 D LONNIE: A tablecloth hero.
26 A ¶ Lonnie stuffs a fistful of popcorn into his mouth.
27 A Dewey takes the flashlight from his teeth and clicks it off.
28 D FRANKIE: What if it doesn't work?
29 D DEWEY: It'll work.
30 D FRANKIE: What if the reel jams?
31 D LONNIE: What if it plays backward?
32 D DEWEY: Then it'll be a different movie.
33 D FRANKIE: You always say that.
34 D DEWEY: Because it's always true.
35 A ¶ Below them, the western reaches a gunfight.
36 A A hundred car horns honk in approval, and the roof hums with it.
37 D LONNIE: That's not even a good one.
38 D FRANKIE: Mine's better.
39 D DEWEY: Ours is better.
40 D LONNIE: Ours.
41 A ¶ Frankie turns from the edge and sits between them.
42 A The three of them look out over the lot.
43 A Somewhere a screen door bangs.
44 D FRANKIE: What do we do after?
45 D DEWEY: After what?
46 D FRANKIE: After they see it.
47 D DEWEY: We go home.
48 D LONNIE: We go home and pretend we weren't here.
49 D FRANKIE: And then?
50 D DEWEY: Then we make another one.
51 D LONNIE (through popcorn): A longer one.
52 D FRANKIE: With real stunts.
53 D DEWEY: With no capes.
54 D LONNIE: No, no, the cape stays.
55 A ¶ The western ends.
56 A The screen goes white, then black.
57 A A tinny voice from the loudspeakers announces the intermission.
58 A A dancing hot dog appears on screen, singing.
59 A ¶ Dewey stands.
60 A Lonnie stands.
61 A Frankie is already on his feet.
62 D DEWEY [CONT'D]: Frankie. The booth.
63 D FRANKIE: Going.
64 D LONNIE: I'm coming with you.
65 D DEWEY: Both of you, go. I'll watch the lot.
66 D FRANKIE: Don't let anybody leave.
67 D DEWEY: They won't.
68 A ¶ Frankie vaults over the roof's far edge to the ladder.
69 A Lonnie is on his heels.
70 A Dewey stays at the parapet, shoulders squared, watching a hundred cars and the dancing hot dog.
71 A He lifts the flashlight and holds it like a torch.
72 D DEWEY [CONT'D] (softly): Now.
73 A ¶ The loudspeakers crackle.
74 A The screen flickers and goes dark.
75 A For one long second the whole lot is silent, a hundred windshields reflecting nothing.
76 A ¶ Then a projector lamp flares in the booth and a ragged, hand-cut image leaps up on the screen: a boy in a tablecloth cape, running.
77 A ¶ Dewey grins.
78 A Down in the lot, a horn honks.
79 A Then another.
80 A Then all of them.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01774.json
### SCENE s01774 | INT. TRAIN STATION LEFT-LUGGAGE OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): CORDELIA MBEKI, AUGUSTINE PELLETIER, RAFAELA DOMINGUES
1 A ¶ Rows of steel shelves.
2 A Suitcases, cello cases, a taxidermy owl in a crate.
3 A A clock above the counter reads 11:52.
4 A ¶ CORDELIA MBEKI, thirties, stands at the counter with a claim ticket.
5 A She slides it across.
6 A Behind the counter, AUGUSTINE PELLETIER, an older clerk, takes it without looking and shuffles away into the shelves.
7 A ¶ She waits.
8 A Then the door behind her opens and RAFAELA DOMINGUES walks in, shaking rain off her coat.
9 A She stops when she sees her.
10 A ¶ She doesn't move.
11 A Cordelia turns her head and stops as well.
12 A The rain on the roof is the only sound.
13 D RAFAELA: You came.
14 D CORDELIA: I said I would.
15 A ¶ She steps to the counter and sets down a small leather case.
16 A She doesn't open it.
17 A Cordelia looks at the case, then at her.
18 D CORDELIA [CONT'D]: That's the one?
19 D RAFAELA: That's the one.
20 A ¶ She pushes it an inch toward her.
21 A Cordelia puts a finger on the lid and takes it away again.
22 D CORDELIA: I thought you'd have thrown it into the river by now.
23 D RAFAELA: I thought about it.
24 D CORDELIA: What stopped you?
25 D RAFAELA: The river was cold.
26 A ¶ Augustine returns with a battered suitcase.
27 A He sets it on the counter and looks from one to the other.
28 A She lifts her eyes to meet his.
29 D AUGUSTINE: Ticket three-oh-seven.
30 D CORDELIA: That's mine.
31 A ¶ She grips the handle.
32 A Rafaela lays a hand on the other end of it.
33 A They stand with the suitcase between them, both holding on.
34 D RAFAELA: Your train is at midnight.
35 D CORDELIA: It is.
36 D RAFAELA: Leave it.
37 D CORDELIA: I can't.
38 A ¶ Rafaela lets go.
39 A She picks up her leather case and holds it against her chest.
40 A Cordelia drags the suitcase off the counter, and at the door she pauses with her back turned.
41 D CORDELIA [CONT'D]: Keep the case. Please.
42 A ¶ She goes out into the rain.
43 A Rafaela stays where she is until the clock reads 11:58, then lays the case on the counter in front of the clerk.
44 D RAFAELA: Could you hold this for me?
45 A ¶ Augustine takes it and writes out a ticket.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01775.json
### SCENE s01775 | INT. RIVER ROCK QUARRY - FIRST-AID TENT - DAY
Detected names (may be incomplete or contain aliases): SADIE TREMBLAY, ARTUR NOWAK, JUNE ABERNATHY
1 A ¶ A canvas tent pitched at the lip of a limestone quarry.
2 A Dust drifts through the open flap.
3 A A stretcher bed, a cooler of saline bags, a battery lantern.
4 A ¶ DR. SADIE TREMBLAY, forties, crouches over a pale quarryman, ARTUR NOWAK, who lies on the stretcher clutching his thigh.
5 A A tourniquet is tight above the knee.
6 A A young medic, JUNE ABERNATHY, kneels at his side with a roll of gauze.
7 A ¶ She is shaking.
8 A Dr. Tremblay takes the gauze from her without a word and presses it to the wound.
9 A Artur howls through his teeth.
10 D DR. TREMBLAY: Pressure. Hold it right there.
11 D JUNE: He's losing it. He's going grey.
12 A ¶ He grabs for June's wrist and she grabs his.
13 A They hold each other's grip.
14 D ARTUR: Don't let me go.
15 D JUNE (over him): I've got you.
16 D DR. TREMBLAY: Artur, look at me.
17 D ARTUR: I can't feel my foot.
18 A ¶ Dr. Tremblay cuts the trouser leg with scissors.
19 A She reads the wound, and the tension in her shoulders eases by an inch.
20 D DR. TREMBLAY: It missed the artery. Tourniquet did its job. June, loosen it a quarter turn.
21 A ¶ June turns the windlass, her fingers steadying as she works.
22 A Artur lets his head fall back.
23 D ARTUR: Is it bad?
24 D DR. TREMBLAY: It's a deep gash. It's going to hurt for weeks and you're going to keep the leg.
25 A ¶ He closes his eyes and laughs, a cracked sound.
26 A June sits back on her heels and wipes her face with the back of a bloody glove.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01776.json
### SCENE s01776 | INT. GREENHOUSE WEDDING TENT - NIGHT
Detected names (may be incomplete or contain aliases): NAOMI ADEYEMI-BRAUN, SEBASTIAN KOWALCZYK, PRIYA SOLANKI, FATHER LEOPOLD GAUDET
1 A ¶ Fairy lights.
2 A Orchids.
3 A A cake leaning slightly.
4 A The band has stopped.
5 A Guests have drifted outside.
6 A ¶ NAOMI ADEYEMI-BRAUN, thirties, in a champagne gown, stands at the cake table with a knife and no cake cut.
7 A Across from her, SEBASTIAN KOWALCZYK, thirties, bow tie hanging loose, holds two flutes and gives neither of them up.
8 A ¶ Beside them, a bridesmaid, PRIYA SOLANKI, twenties, freezes mid-reach for a canapé.
9 A Behind, the officiant, FATHER LEOPOLD GAUDET, sixty, dozes upright on a folding chair.
10 A ¶ Naomi sets the knife down.
11 A Sebastian sets a glass down.
12 A They both pick up their own again.
13 A She drinks.
14 A He doesn't.
15 D NAOMI: You were always going to leave.
16 D SEBASTIAN: I'm standing right here.
17 D PRIYA (low): Guys.
18 A ¶ Naomi and Sebastian turn their heads together, then back.
19 A Priya retreats a step, canapé in hand.
20 A Father Gaudet wakes, blinks, smiles at the ceiling, and is out again.
21 D NAOMI: I meant tomorrow. Next month. Whenever it gets hard.
22 D SEBASTIAN: It's already hard.
23 A ¶ She takes off her ring, looks at it, puts it on the cake table.
24 A He steps forward, picks it up, and slides it back onto her finger.
25 A She lets him.
26 A Neither says anything.
27 D PRIYA: Should I cut the cake?
28 D NAOMI: No.
29 D SEBASTIAN: Yes.
30 A ¶ They look at each other.
31 A A small laugh escapes Naomi.
32 A Sebastian's mouth twitches.
33 A Priya picks up the knife and cuts, a crooked first slice, and hands the plate to Father Gaudet, who wakes and takes it.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01777.json
### SCENE s01777 | INT. DRIVING SCHOOL - SIMULATOR ROOM - DAY
Detected names (may be incomplete or contain aliases): HECTOR PRZYBYLSKI, MILDRED OKAFOR, TRAVIS BELLWETHER
1 A ¶ A cramped room with a cardboard dashboard and a monitor.
2 A A fake steering wheel.
3 A A banner: SAFETY IS NO ACCIDENT.
4 A ¶ HECTOR PRZYBYLSKI, fifties, instructor, sits beside a student in the driver's seat.
5 A MILDRED OKAFOR, seventies, white-knuckled, wears sunglasses indoors.
6 D HECTOR: Now brake.
7 D MILDRED: I am braking.
8 D HECTOR: You're accelerating.
9 A ¶ On the monitor, a virtual crosswalk.
10 A A virtual pedestrian leaps clear.
11 D HECTOR [CONT'D]: That's the third one.
12 D MILDRED: He was jaywalking.
13 D HECTOR: He was a mailbox.
14 A ¶ The door opens.
15 A TRAVIS BELLWETHER, thirties, a state inspector with a clipboard and a lanyard, steps in.
16 A He's sweating.
17 D TRAVIS: Mr. Przybylski? Your license renewal inspection. Early.
18 D HECTOR: Early.
19 D MILDRED: Early.
20 A ¶ Hector and Mildred swivel to look at Travis.
21 A He looks at the monitor, where a virtual school bus flips into a virtual lake.
22 D TRAVIS: Is that a pass or a fail?
23 D HECTOR: It's a learning experience.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01778.json
### SCENE s01778 | INT. GRAIN SILO - BASE LEVEL - NIGHT
Detected names (may be incomplete or contain aliases): DELPHINE CROSBY, MAX, ODUYA, OLD ENRICO FABBRI, STRANGER, ANSELM
1 A ¶ Rust-streaked concrete.
2 A A single hanging bulb swings.
3 A Wheat dust hangs in the beam.
4 A Somewhere above, metal ticks.
5 A ¶ DELPHINE CROSBY, thirties, holds a flashlight steady.
6 A MAXWELL "MAX" ODUYA, twenties, kneels by a hatch with a crowbar.
7 A OLD ENRICO FABBRI, seventies, sits on an upturned bucket.
8 A A STRANGER stands motionless at the foot of the ladder, face in shadow.
9 D DELPHINE: Everyone. Stay where you are.
10 A ¶ Nobody moves.
11 A The ticking stops.
12 D MAX (to himself): It's the pipes. It's just the pipes.
13 D ENRICO (to Max): Boy. Put the bar down.
14 A ¶ Max doesn't.
15 A The Stranger takes one slow step into the light.
16 A Wheat dust clings to the shoulders of his coat.
17 A His eyes do not blink.
18 D STRANGER: I've been up there a long time.
19 D DELPHINE (to the Stranger): Who are you?
20 D STRANGER: Anselm. My name was Anselm.
21 A ¶ The bulb dies.
22 A In the dark: the ladder groans.
23 A Delphine's flashlight snaps back on.
24 A ¶ ANSELM is now six feet from Max, who has raised the crowbar.
25 A The wheat around his boots is moving.
26 D ANSELM: It remembers me.
27 D ENRICO (whisper): Don't let him touch the grain.
28 D DELPHINE (to the group): Back to the door. All of you. Now.
29 A ¶ Max swings.
30 A Anselm catches the bar in one hand.
31 A The silo shudders, and the floor of wheat begins to rise.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01779.json
### SCENE s01779 | INT. CASINO BOAT - COUNTING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): SAUL VERDUGO, MARISOL TREJO, BAXTER KWAN, DEZ, MOURAD, LUCILLE FONTAINE, GABRIEL VERDUGO
1 A ¶ A windowless steel room that rocks faintly with the river.
2 A Money cages, bins of chips, a long table piled with banded cash.
3 A A brass clock ticks too loudly.
4 A ¶ SAUL VERDUGO, sixties, the pit boss, sits at the head of the table with his hands flat.
5 A Facing him are MARISOL TREJO, thirties, with a leather folio; BAXTER KWAN, forties, in a damp raincoat; and DESMOND "DEZ" MOURAD, fifty, whose jacket hangs open to show a holster.
6 A At the cage, a cashier, LUCILLE FONTAINE, forties, has frozen with a stack of twenties in her hand.
7 A In the corner by the door, a boy, GABRIEL VERDUGO, sixteen, holds a mop and says nothing.
8 D SAUL: Count it again.
9 D MARISOL: We counted it twice.
10 D SAUL: Then a third time won't hurt.
11 D BAXTER: It's short two hundred thousand. You can count until the boat sinks.
12 D SAUL: The boat is not going to sink, Mr. Kwan.
13 D DEZ: Somebody in this room is lying.
14 D MARISOL: Somebody on this boat is lying.
15 D DEZ: That's what I said.
16 D SAUL: No, it isn't. You said this room. This room has six people in it, one of them a child.
17 D GABRIEL: I'm sixteen.
18 D SAUL: You're a child.
19 D BAXTER: The boy doesn't count.
20 D MARISOL: Everyone counts. That's the point.
21 D DEZ: Then let's start with the cage.
22 D LUCILLE: Don't look at me.
23 D DEZ: I'm looking at everyone.
24 D SAUL: Lucille, put down the money.
25 A ¶ Lucille sets the stack on the counter.
26 A Dez rises.
27 A Baxter rises.
28 A Marisol closes her folio.
29 A Saul lifts one hand, and the others stop where they stand.
30 D SAUL [CONT'D]: Sit down. All of you. Sit down and we will do this like family.
31 A ¶ Gabriel drops the mop.
32 A The clatter makes every head turn.
33 A Dez's hand goes to the holster.
34 A Lucille ducks behind the cage.
35 A Baxter backs against the wall.
36 A Marisol does not flinch.
37 A ¶ Saul looks at his grandson, and the old man's face goes slack.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01780.json
### SCENE s01780 | INT. MUSEUM OF CLOCKS - VAULT CORRIDOR - NIGHT
Detected names (may be incomplete or contain aliases): MAN, WOMAN, MARCUS
1 A ¶ A hush of ticking.
2 A Glass cases of pocket watches line the walls.
3 A At the end, a steel vault door the color of old pewter.
4 A ¶ A MAN in a night guard's uniform kneels at the door with a stethoscope pressed against the lock.
5 A A WOMAN in a cleaner's smock stands behind him with a mop bucket she has not moved in several minutes.
6 D MAN: Quiet.
7 D WOMAN: I am being quiet.
8 D MAN: You're breathing.
9 D WOMAN: I'm told it's mandatory.
10 A ¶ He turns the dial a hair.
11 A Tick.
12 A Tick.
13 A The stethoscope clicks.
14 A He sits back.
15 D MAN [CONT'D]: That's three. One more.
16 D WOMAN: You said that two numbers ago.
17 D MAN: I was optimistic.
18 A ¶ Footsteps echo far away.
19 A Both freeze.
20 A The footsteps stop.
21 A A radio crackles in the distance and goes silent.
22 D WOMAN (whispering): How long?
23 D MAN: Ninety seconds.
24 D WOMAN: Till what?
25 D MAN: Till he comes round again.
26 A ¶ She lifts the mop from the bucket like a spear.
27 A He shakes his head and takes it from her, sets it against the wall, and presses the stethoscope back to the lock.
28 A ¶ The dial turns.
29 A A deep, final clunk.
30 A The door sighs open an inch.
31 D MAN [CONT'D]: Got it.
32 D WOMAN: Of course you did.
33 A ¶ Inside, on a velvet plinth, a single gold clock the size of a fist ticks serenely.
34 D MAN: Sixteen-forty-two. Made for a king who never lived to wind it.
35 D WOMAN: Oh, I like him already.
36 A ¶ She steps forward.
37 A A red laser blinks across the doorway at ankle height.
38 A They both see it at the same moment.
39 D MAN: I don't remember that.
40 D WOMAN: I don't remember that.
41 D MAN (to himself): Of course. Of course there's a laser.
42 A ¶ The woman crouches, studies it, and pulls a compact mirror from her pocket.
43 A She holds it at an angle.
44 A The beam bends and strikes the wall.
45 D WOMAN: There. Satisfied?
46 D MAN: Reasonably.
47 A ¶ She steps through.
48 A The man follows, stepping high.
49 A ¶ At the plinth, she lifts the gold clock.
50 A It stops ticking.
51 A ¶ Silence.
52 A They look at each other.
53 D MAN [CONT'D]: That's not good.
54 A ¶ She leans in and reads the name stitched on his guard's jacket.
55 D WOMAN: Marcus?
56 A ¶ The man closes his eyes.
57 D MARCUS (whisper): Don't start.
58 D WOMAN: You told me your name was Gil.
59 D MARCUS: It's a long night.
60 A ¶ Footsteps again, closer now.
61 A Marcus takes the clock from her hands, sets it back on the plinth, and the ticking resumes.
62 A They look at it, then at each other.
63 A Marcus smiles, nervous and delighted.
64 D MARCUS [CONT'D]: Run.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01781.json
### SCENE s01781 | INT. COUNTY FAIR - PIE TENT - AFTERNOON
Detected names (may be incomplete or contain aliases): GIRL, TALL MAN, WOMAN, LOUISE, WALTER, POPPY
1 A ¶ Long trestle tables under a striped canvas roof.
2 A Judges' placards, wasps, and a hundred pies cooling in rows.
3 A A fan turns without effect.
4 A ¶ A GIRL of nine in a gingham dress stands on a milk crate at the end of the nearest table, nose level with the pies.
5 A A TALL MAN in a pressed apron stands beside her, holding a rolling pin as though it might go off.
6 A Across the tent, a WOMAN in a sunhat leans on a pole and watches them with tight, amused eyes.
7 D GIRL: Daddy, they're judging in four minutes.
8 D TALL MAN: I know, sweet pea.
9 D GIRL: Is ours the one with the crust?
10 D TALL MAN: They all have crusts.
11 D GIRL: The one with the extra crust.
12 A ¶ He looks down at her.
13 A She looks up at him.
14 A The Woman in the sunhat pushes off the pole and strolls over, ducking a wasp, and the Girl waves while the Tall Man straightens his apron and drops the rolling pin, and the Girl catches it before it hits the ground.
15 D GIRL [CONT'D]: Mama!
16 A ¶ The Woman kisses her on the head, takes the rolling pin from her, rests it across the table, then takes the Tall Man's hand and turns it over to look at the flour on his palm.
17 D LOUISE: Walter Brockhurst. You are covered in flour.
18 D WALTER: I'm a baker, Louise.
19 D LOUISE: You're a plumber.
20 D WALTER: I'm a baker today.
21 D GIRL: Mama, Daddy's nervous.
22 D WALTER: Daddy is not nervous.
23 D GIRL: He's holding the pie with two hands.
24 A ¶ Walter looks down.
25 A He is holding the pie in both hands, as though it were a small and fragile pet.
26 A He puts it on the table.
27 D LOUISE: Then let's let Poppy decide.
28 D POPPY: Me?
29 D LOUISE: You made the filling. You chose the cinnamon.
30 D POPPY: I chose too much cinnamon.
31 D WALTER: Poppy, that's not true.
32 D POPPY: It's true, Daddy. I watched you taste it.
33 D WALTER: I was being polite.
34 D LOUISE: You were being a coward.
35 A ¶ Walter laughs.
36 A A judge approaches, a stern woman with a clipboard, and the three of them straighten up on instinct, shoulders squared, as though facing a firing squad.
37 A Poppy steps off the crate.
38 D POPPY (whispering): Smile.
39 D WALTER: I am smiling.
40 D POPPY: Then smile with your face.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01782.json
### SCENE s01782 | INT. COURTHOUSE - WITNESS PREPARATION ROOM - DAY
Detected names (may be incomplete or contain aliases): ROSALIND ACHTERBERG, OSWALD TIMMONS, BAILIFF
1 A ¶ A windowless room.
2 A A table, two chairs, a pitcher of water nobody has touched.
3 A A wall clock with a loud second hand.
4 A ¶ ROSALIND ACHTERBERG, forties, a defense attorney in a charcoal suit, sits with a legal pad.
5 A Across from her, OSWALD TIMMONS, fifties, a quiet accountant in a borrowed tie, smooths his sleeves.
6 D ROSALIND: We have nine minutes. Do you remember what I told you?
7 D OSWALD: Answer the question asked. Don't volunteer.
8 D ROSALIND: Good.
9 D OSWALD: Look at the jury.
10 D ROSALIND: Not too much.
11 D OSWALD: Not too much.
12 A ¶ She writes something.
13 A He drinks water, then sets the cup down.
14 D OSWALD [CONT'D]: Ms. Achterberg. May I ask you something?
15 D ROSALIND: Of course.
16 D OSWALD: When this is over, will you still be my lawyer?
17 D ROSALIND: Mr. Timmons, I'll be your lawyer until the court says I'm not.
18 D OSWALD: That's not what I asked.
19 A ¶ She looks at him a moment.
20 A The clock ticks.
21 D ROSALIND: Yes.
22 A ¶ He nods, relieved, and folds his hands.
23 D OSWALD: It's strange. I've kept books for thirty years. Never lost a penny of anyone else's.
24 D ROSALIND: I know. That's what the jury will hear.
25 D OSWALD: They won't hear the ledger?
26 D ROSALIND: They won't read the ledger. They'll hear you.
27 D OSWALD: Then I should stop fidgeting.
28 D ROSALIND: You're doing fine.
29 D OSWALD: You're kind.
30 D ROSALIND: I'm accurate.
31 A ¶ He smiles faintly.
32 A She turns a page on the legal pad.
33 D ROSALIND [CONT'D]: One more thing. Direct examination goes first, then cross. The prosecutor will try to rattle you with the Cayman accounts.
34 D OSWALD: I understand.
35 D ROSALIND: What do you say?
36 D OSWALD: I say I reported them. Fully. On the forms the bank gave me.
37 D ROSALIND: And if he asks about the second set of forms?
38 D OSWALD (a beat): What second set?
39 D ROSALIND: Exactly. Don't get cute.
40 D OSWALD: I'm not cute.
41 D ROSALIND: No. You're not.
42 A ¶ The clock ticks.
43 A Rosalind caps her pen.
44 D ROSALIND [CONT'D]: Oswald. Look at me.
45 D OSWALD: I'm looking.
46 D ROSALIND: Is there a second set of forms?
47 D OSWALD: No.
48 D ROSALIND: Think carefully.
49 D OSWALD: There is no second set of forms.
50 D ROSALIND: Because if there is, I need to know now, not on the stand. I can still protect you now.
51 D OSWALD: Ms. Achterberg.
52 D ROSALIND: Yes?
53 D OSWALD: You've been wonderful.
54 A ¶ Rosalind studies him.
55 A She does not speak.
56 A The clock ticks four more times.
57 D ROSALIND: Mr. Timmons, why did you say "wonderful"?
58 D OSWALD: Because you have.
59 D ROSALIND: You said it like goodbye.
60 D OSWALD: Did I?
61 D ROSALIND: Yes.
62 A ¶ A knock at the door.
63 A A BAILIFF's voice carries through.
64 D BAILIFF [O.S.]: Two minutes, counselor.
65 D ROSALIND: Thank you.
66 A ¶ She doesn't move.
67 A Oswald stands, straightens his tie, and picks up a thin manila folder from the floor beside his chair.
68 A He sets it on the table in front of her.
69 D OSWALD: I was going to give you this after.
70 A ¶ She opens it.
71 A Inside, a second set of forms.
72 A She reads the first page, then the second, and her face remains still.
73 D ROSALIND: When did you find these?
74 D OSWALD: I didn't find them. I made them.
75 D ROSALIND: Oswald.
76 D OSWALD: I thought you should know before I swear to tell the truth.
77 D ROSALIND: Why?
78 D OSWALD: Because I would like very much to do it.
79 A ¶ Rosalind closes the folder.
80 A The second hand ticks.
81 A Neither moves.
82 D ROSALIND: Sit down.
83 A ¶ He sits.
84 D ROSALIND [CONT'D]: We're going to ask for a continuance. And you're going to tell me everything, from the beginning.
85 D OSWALD: All right.
86 D ROSALIND: Start with the first account.
87 D OSWALD (speaking over her): Start with the first account.
88 A ¶ He smiles.
89 A She almost does.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01783.json
### SCENE s01783 | INT. NORTH STAR ROLLER RINK - DJ BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): INEZ CASTELLANOS-WHITE, RECORD
1 A ¶ A glass cubicle above an empty rink.
2 A A mirror ball turns, throwing flecks of light.
3 A Pink neon buzzes.
4 A The floor below is bare maple, still scuffed from the evening's skaters.
5 A ¶ INEZ CASTELLANOS-WHITE, sixteen, in a rental-skate shirt with her name sewn on the pocket, sits alone at the turntables.
6 A She wears headphones around her neck.
7 A A cassette recorder sits beside a cardboard box of tapes.
8 A ¶ She presses PLAY.
9 A A hiss of tape.
10 D INEZ [V.O.] (recorded, younger): Okay, is it recording? It's recording. This is the first mix tape of Inez Castellanos-White, age twelve. Do not tell my brother.
11 A ¶ She freezes the tape with a click.
12 A Pushes her chair back.
13 A Stares down at the empty rink.
14 A ¶ She laughs, short, and rubs her eyes with the heel of her hand.
15 D INEZ: Twelve.
16 A ¶ She presses PLAY again.
17 D INEZ [V.O.] (recorded): I'm going to be a DJ. I'm going to be the best one in the whole state, and when I'm famous I'm going to buy this rink and nobody will ever skate backward again.
18 A ¶ A hiccup of tape.
19 A A pause.
20 A A younger giggle.
21 D INEZ [V.O., CONT'D] (recorded): Okay, here's my favorite song. I made the transition myself.
22 A ¶ A scratchy needle drop.
23 A A bright pop song swells over the tape hiss.
24 A Inez listens.
25 A Her foot starts to tap.
26 A ¶ She stops it.
27 A Rewinds.
28 A Plays again.
29 A Stops.
30 A She picks up the tape and turns it over in her fingers.
31 D INEZ [CONT'D] (to the tape): You were so bad.
32 A ¶ She goes to the turntables and pulls a record from its sleeve.
33 A She sets it on the platter.
34 A Lowers the needle.
35 A The same bright pop song, clean and loud, fills the empty rink.
36 A ¶ She lifts the second turntable's arm and brings it down at a point she knows by heart.
37 A The song doubles, then slides into the next, a seam so smooth it is nearly invisible.
38 A ¶ She watches the empty floor.
39 A Her shoulders loosen.
40 D INEZ [CONT'D] (softly): There.
41 A ¶ She picks up the cassette recorder, presses RECORD, and holds the microphone close to her mouth.
42 D INEZ [V.O., CONT'D] (recorded): Okay. This is the second mix tape of Inez Castellanos-White, age sixteen. It's recording.
43 A ¶ She laughs.
44 A She lets the music run under it.
45 D INEZ [V.O., CONT'D] (recorded): Do not tell my brother.
46 A ¶ The mirror ball turns.
47 A Light slides across the floor, across her face, across the boxes of tapes.
48 A On the maple below, for a moment, it looks as though someone is skating.
49 A ¶ Inez ejects the cassette, writes on its label with a marker, and puts it in her pocket.
50 A ¶ She turns off the neon.
51 A The booth goes dark except for the mirror ball's last slow spin.
