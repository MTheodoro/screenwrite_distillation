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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05087.json
### SCENE s05087 | INT. THE BRANDT HOUSE - KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): COLLEEN, WALTER
1 A ¶ The power cut hit forty minutes ago.
2 A A single candle gutters on the granite island.
3 A Rain runs down the dark windows.
4 A Somewhere in the neighbourhood, a generator coughs and gives up.
5 A ¶ Colleen Brandt, 50s, still in her work lanyard, stands at the counter with a bottle of wine she can't open without light.
6 A Her husband's boss's wife has not yet arrived.
7 A Her son's Xbox sits uselessly on the table.
8 A ¶ Walter Pryce, 40s, in a damp suit, comes in from the garage with a flashlight.
9 D COLLEEN: You're late.
10 D WALTER: There's a tree down on Maple. I walked.
11 D COLLEEN (a beat): In those shoes.
12 D WALTER: In these shoes.
13 A ¶ He sets the flashlight on its end.
14 A It throws a pale circle at the ceiling.
15 A The refrigerator hums for a moment, then dies with a sigh.
16 A ¶ Rain.
17 D COLLEEN: I want to say something and I want you to let me finish.
18 D WALTER (beat): Okay.
19 D COLLEEN: Twenty-two years at Halvorsen. I trained every one of those people upstairs. I wrote the manual they pretend to follow. Last Thursday they put me in a room and a boy named Tyler, who is twenty-nine, told me my role was "being reimagined." He used the word "journey." He said I had been on a journey.
20 D WALTER: Colleen...
21 D COLLEEN (beat): I'm not finished. I smiled. I thanked him. I went to my desk and I alphabetised the supply cupboard because I did not know what else to do with my hands. And then I came home and made a lasagna that nobody ate, because the power went, and that's the whole of it.
22 A ¶ The candle gutters.
23 A She finally puts the wine down.
24 A ¶ This is the last evening either of them will pretend the house is fine.
25 D WALTER (quietly): I got the same email.
26 A ¶ Colleen turns.
27 A For the first time, she looks at him.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05129.json
### SCENE s05129 | INT. GOLDEN LOTUS NAIL SALON - DAY
Detected names (may be incomplete or contain aliases): CUSTOMERS, KID, MARISOL, CORINNE
1 A ¶ SUPER: "CHICAGO.
2 A 2:14 PM."
3 A ¶ Pastel walls.
4 A Acetone in the air.
5 A A wall of polish bottles in every colour.
6 A A TV in the corner plays a muted boxing replay.
7 A ¶ Two CUSTOMERS in the next chairs chat in Vietnamese.
8 A A KID in a school uniform does homework by the register.
9 A ¶ THE WOMAN, 40s, sunglasses, tailored coat, sits at the manicure station.
10 A Her phone lies face down.
11 A Across the table, MARISOL, 30s, white smock, files her nails.
12 A ¶ The file SCRAPES.
13 A A drier HUMS.
14 D THE WOMAN: You do a lovely job.
15 D MARISOL (not looking up): Thank you.
16 D THE WOMAN: I mean it. Steady hands.
17 D MARISOL (smiling): Practice.
18 A ¶ She dips a brush.
19 A Paints a stripe of red.
20 A ¶ INSERT - THE BOTTLE
21 A ¶ Label: "Knockout."
22 A ¶ BACK TO SCENE
23 D THE WOMAN: Funny name.
24 D MARISOL: It sells.
25 A ¶ The Woman glances at the TV.
26 A The replay shows a boxer going down in the ninth.
27 D THE WOMAN: You watch the fights?
28 D MARISOL: My father did.
29 D THE WOMAN (carefully): Did?
30 D MARISOL: Every Saturday. He had a favourite. Danny Kessler.
31 A ¶ The Woman goes still.
32 D THE WOMAN: Kessler retired.
33 D MARISOL: He was told to.
34 A ¶ The brush keeps moving.
35 A Steady.
36 A Steady.
37 D THE WOMAN: I'm not sure what you mean.
38 D MARISOL (mild): My father bet the house on Danny. Round nine. Everybody knew it was fixed except him. He found out when the referee stopped it too early. A small man, tan suit, glasses. He looked at the floor so nobody could see his eyes.
39 A ¶ (beat)
40 A ¶ I was twelve.
41 A I remember my father holding the TV remote like it was a gun.
42 A I remember him saying one word, over and over.
43 A "Why."
44 A And then he stopped saying it.
45 A ¶ The drier HUMS.
46 A The Kid turns a page.
47 D MARISOL [CONT'D]: Years later I found the referee. Gambling debts. He'd been told to stop the fight, or lose his daughter's school fees. The man in the tan suit was a coward. But the man who told him? He was the coward's boss.
48 A ¶ (beat)
49 A ¶ That boss has a very good manicurist.
50 A She says he comes every second Tuesday.
51 D THE WOMAN (very still): Does she.
52 D MARISOL: She does.
53 A ¶ The Woman's hand, flat on the table, does not move.
54 A ¶ A DOOR BELL RINGS.
55 A Two men in dark jackets enter.
56 A They look around, then settle near the entrance.
57 A ¶ The Woman watches them in the mirror.
58 D THE WOMAN: You're quite sure of this.
59 D MARISOL: I have his receipts. Every one.
60 D THE WOMAN: You're not a manicurist.
61 D MARISOL: I'm a very good manicurist.
62 A ¶ She caps the bottle.
63 A CLICK.
64 D MARISOL [CONT'D]: My name is Marisol Kessler.
65 A ¶ The Woman takes off her sunglasses.
66 A Her eyes are old and tired.
67 D THE WOMAN: Danny's daughter.
68 D MARISOL: Yes.
69 D THE WOMAN: Then you know my name.
70 D MARISOL: Corinne Vale.
71 D CORINNE (a breath): He deserved a better life than he got.
72 D MARISOL: So did my father.
73 A ¶ Corinne looks at the red nails, her hands under the lamp.
74 D CORINNE: The men at the door. They're not mine.
75 D MARISOL: No.
76 D CORINNE: Yours?
77 A ¶ Marisol nods slightly.
78 D CORINNE [CONT'D] (a faint laugh): I came here for a manicure.
79 D MARISOL: And you got one.
80 A ¶ The TV roars.
81 A A crowd chanting a name that isn't Danny's.
82 A ¶ Corinne's phone BUZZES on the table.
83 A She doesn't touch it.
84 A ¶ It stops.
85 A ¶ The Kid looks up from his homework.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05024.json
### SCENE s05024 | INT. HOLLOWAY HOUSE - DRAWING ROOM - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): ODILE VANCE, HARLAN, PRU, TEODOR, ROWAN
1 A ¶ Rain has been falling since the cemetery and now it ticks against the tall windows like something asking to be let in.
2 A Lamps are lit too early.
3 A The room smells of lilies, wet wool and the kind of coffee that is made in urns.
4 A ¶ ODILE VANCE, sixty, stands by the sideboard with a plate she will never finish, and she watches her late husband's brother HARLAN pour himself a third whisky with a steadiness that is almost an accusation.
5 A Across the room, PRU, the dead man's daughter, folds and unfolds a funeral program until it has no shape, while TEODOR, the family lawyer, drifts behind her saying nothing in a very organised way.
6 A Near the piano, ROWAN, the dead man's nurse, who is wearing a borrowed black cardigan and who uses they and them, stands alone with their hands in their pockets, and they are the only one in the room who has noticed the study door is open.
7 D ODILE (low, to Harlan): You told the police you were in Dover that night.
8 D HARLAN: I told them what was true, Odile.
9 A ¶ The landline in the hall RINGS.
10 A Nobody moves.
11 A It rings again.
12 D TEODOR: I'll go.
13 A ¶ He goes.
14 A His voice carries back, flat and polite, through the open door.
15 D TEODOR [O.S.]: Holloway residence. ... No, he is not available. ... Who is this, please?
16 A ¶ Rowan turns toward the sound.
17 A Pru stops folding.
18 D PRU (very quietly): Who is it?
19 D TEODOR [O.S.] (a long pause, then no longer polite): Say that again.
20 A ¶ Harlan sets down the glass.
21 A The lilies shiver in a draught from the study.
22 A Rowan takes one step toward the hall, and Odile, without turning her head, says their name like a warning.
23 D ODILE: Rowan.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05058.json
### SCENE s05058 | EXT. FISHING TRAWLER "MARGIT ANN" - DECK - DAWN
Detected names (may be incomplete or contain aliases): ANIKA, ROY, TEO
1 A ¶ Grey sea.
2 A Grey sky.
3 A Gulls wheel overhead.
4 A ¶ Two deckhands haul nets, whistling.
5 A A third coils rope and is bored out of his mind.
6 A Everything is fine.
7 A ¶ Captain Roy Dunmore, 50s, leans on the rail with a mug, watching the horizon.
8 A Beside him, Dr. Anika Rao, 30s, sits on an upturned crate, clipboard on her knee.
9 A She is the ship's medic by contract and by accident.
10 D ANIKA: Quietest trip I've had in months.
11 D ROY: Don't say that.
12 D ANIKA: Why not?
13 D ROY: You know why not.
14 A ¶ The deckhands laugh at something.
15 A A gull lands on the winch.
16 A ¶ WHAM.
17 A ¶ A net swings loose.
18 A It slams into the deckhand's back.
19 A He goes down hard.
20 A ¶ TEO, 20s, a deckhand, lies on the planks, face grey, one arm pinned.
21 D ANIKA: Don't move him!
22 D ROY: Get the line off him!
23 A ¶ The two deckhands scramble.
24 A The gulls scatter.
25 A Roy and Anika drop to their knees at the same time and almost collide.
26 D ANIKA: Teo. Teo, look at me. Can you feel your hands?
27 D TEO (strained): No.
28 D ANIKA: Okay. That's okay. Roy, I need the board and I need it flat.
29 D ROY: Board's in the wheelhouse. Two minutes.
30 D ANIKA: You don't have two minutes.
31 D ROY: Then tell me what to do.
32 D ANIKA: Hold his head. Gently. Like it's glass.
33 A ¶ Roy does.
34 A Anika's hands move fast, over the neck, the ribs, the pulse.
35 D TEO: Doc. Am I
36 D ANIKA: You're not going anywhere. I promise.
37 D ROY (low): You can't promise that.
38 D ANIKA: Watch me.
39 A ¶ This is the last time any of them will take the sea for granted.
40 A ¶ The deckhands return with the board.
41 A Together, they roll him.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05137.json
### SCENE s05137 | INT. NIGHT BUS - LOWER DECK - NIGHT
Detected names (may be incomplete or contain aliases): WALTER, EDITH, ALISTAIR, TOMMY
1 A ¶ 1953.
2 A London, fog thick as wet wool against the windows.
3 A The bus lurches through an empty Bayswater, its engine groaning like an old man climbing stairs.
4 A ¶ Edith Marsh, 30s, a nurse in a navy coat with the cap folded in her lap, sits near the back.
5 A Her shoes are scuffed from a double shift.
6 A Across the aisle, Walter Penn, 60s, a conductor with a ticket machine strapped to his chest, leans on the rail and yawns without apology.
7 A ¶ ANGLE ON the dim bulb overhead, flickering, throwing yellow across faces.
8 A ¶ Near the front, Alistair Crane, 40s, in a good tweed overcoat too warm for the night, reads a folded newspaper he is not reading, while beside him a boy, Tommy, 10, in a cap too big for him, kicks his heels against the seat and watches the rain run in lines down the glass, and Walter checks his watch and the clock above the driver and the road ahead, all in one practised sweep.
9 D WALTER: Fares, please. Fares. Last bus tonight, ladies and gentlemen. Last bus and last chance.
10 D EDITH (tired, smiling): You say that every night, Mr Penn.
11 D WALTER: And every night I mean it, Miss Marsh.
12 A ¶ WE SEE Alistair's gloved hand tighten on the newspaper.
13 D ALISTAIR (without looking up): The boy has no ticket.
14 D TOMMY (small): Da says it's all right.
15 D ALISTAIR: Does he.
16 D WALTER (gently): Where's your da, lad?
17 D TOMMY: Home. He's poorly.
18 A ¶ Silence.
19 A The bus turns a corner, and everyone sways together.
20 A ¶ CLOSE ON Tommy's coat sleeve.
21 A The cuff is worn through.
22 A Edith sees it.
23 D EDITH (rising, crossing the aisle): I'll pay his fare. Here. A tuppence, is it?
24 D WALTER: Threepence from here, miss.
25 D EDITH: Then threepence.
26 A ¶ She sets the coins in the machine's tray.
27 A Alistair folds the newspaper at last, slow and exact, and looks at her for the first time.
28 D ALISTAIR: That's very generous. I wonder you can afford it, on a nurse's wage.
29 D EDITH (level): I wonder you can afford that coat, on whatever it is you do.
30 D WALTER (a warning): Now then.
31 D ALISTAIR: I do very well, thank you. I take an interest in people who leave their patients at night.
32 D EDITH: I haven't left anyone.
33 D ALISTAIR (softly): Mrs Harcourt, in the end bed. She'd be a good deal more comfortable if you'd stayed.
34 A ¶ Edith goes still.
35 A The engine drones.
36 A Tommy has stopped kicking.
37 A ¶ BACK TO SCENE: the bus slows at a stop where no one waits, the doors hiss, and cold air comes in carrying the smell of coal smoke.
38 D EDITH (very quiet): Who are you?
39 D ALISTAIR: Someone who reads the ward reports.
40 D WALTER: I think, sir, you'd best get off here.
41 D ALISTAIR: I think I'll ride to the terminus, conductor. I've paid.
42 D TOMMY (tugging Edith's sleeve): Miss, is he a policeman?
43 D EDITH (a long beat): No, love. I think he's only lonely.
44 A ¶ Alistair's face flickers, the tiniest crack.
45 A He looks at the boy, then at the fogged window, then at his own reflection, which looks like someone he would rather not be.
46 D ALISTAIR (low): Mrs Harcourt died at nine. I was her son.
47 D EDITH (stricken): I'm so sorry. I didn't know.
48 D ALISTAIR: No. Nobody did. She said you were kind.
49 A ¶ Walter takes off his cap.
50 A The doors hiss shut.
51 A The bus pulls away into the fog, and no one says anything else.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05008.json
### SCENE s05008 | INT. HOTEL - 9TH FLOOR CORRIDOR - NIGHT
Detected names (may be incomplete or contain aliases): CELIA VANCE, STRANGER, DAD, MARCUS, PRIYANKA
1 A ¶ Long.
2 A Carpeted.
3 A Quiet as a held breath.
4 A Brass numbers glow on doors.
5 A A housekeeping cart sits abandoned by the elevators, a room-service tray on the floor, a single shoe in the hall.
6 A ¶ CELIA VANCE, 30s, evening dress, heels in hand, walks fast with a phone to her ear.
7 A Behind her, a STRANGER in a grey suit follows at a polite distance.
8 D CELIA (into phone): Dad I told you I'm fine, the party was fine, I'm in the hallway now, I'm literally at my door.
9 D DAD [V.O.] (over phone, warm): You sound off. Is somebody with you?
10 A ¶ She glances back.
11 A The STRANGER stops, checks his watch, smiles.
12 D CELIA: No. Nobody.
13 A ¶ She reaches her door.
14 A Swipes.
15 A Red light.
16 A Swipes again.
17 A Red.
18 A ¶ ON PHONE: Front Desk: Your key has expired.
19 A Please visit reception.
20 D CELIA (muttering): Great. Perfect.
21 A ¶ The STRANGER steps closer, hands visible.
22 D STRANGER: Having trouble? I can call down. I'm in 912, just there.
23 D CELIA: I'm fine thank you
24 D STRANGER: Of course. I'm Marcus by the way. Marcus Hale. We met at the bar, I bought you the gin.
25 A ¶ Celia freezes.
26 A A beat.
27 A Her face loosens.
28 D CELIA: Oh my god. Marcus. You're the one who spilled it on my coat.
29 D MARCUS: Guilty. I've been trying to apologise all night. Honestly I followed you because I felt terrible.
30 A ¶ She laughs, relieved, the phone drooping at her side.
31 A Dad's tiny voice keeps talking.
32 D DAD [V.O.]: Celia? Celia are you there
33 D CELIA (into phone): Dad I'll call you back
34 A ¶ She hangs up.
35 A The corridor settles.
36 A Down the hall an elevator DINGS and the doors slide, and out walks a woman in a hotel blazer, name badge reading PRIYANKA, and behind her two men in dark coats who are definitely not guests.
37 D MARCUS (low, not smiling now): Don't turn around. Walk with me.
38 D CELIA: What
39 D MARCUS: Your father sold something he shouldn't have. They're here for you. I'm the one who's here to get you out.
40 A ¶ The housekeeper sets down her cart.
41 A Her hand goes to her pocket.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05150_0.json
### SCENE s05150_0 | INT. STORAGE FACILITY - OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): WOMAN, PHONE
1 A ¶ SERIES OF SHOTS:
2 A ¶ -- Rain on the corrugated roof.
3 A Orange sodium light bleeding through the blinds.
4 A ¶ -- A keypad gate.
5 A Its red light blinks, blinks, blinks.
6 A ¶ -- THE WOMAN, 30s, soaked coat, a bolt cutter bag over her shoulder, walks the long corridor of roll-up doors.
7 A Her boots squeak on the concrete.
8 A ¶ ON PHONE (TEXT FROM NELL): where r u
9 A ¶ ON PHONE (TEXT FROM NELL): mum's flat is empty u said you'd be done by 9
10 A ¶ -- The woman thumbs the screen dark.
11 A Doesnt reply.
12 A ¶ -- Fluorescent tubes flicker overhead.
13 A One dies.
14 A Another takes over.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05012.json
### SCENE s05012 | EXT. MOONDUST TACOS FOOD TRUCK - NIGHT
Detected names (may be incomplete or contain aliases): ZIP, LUCY, BIG MO, GRANDMA TESS
1 A ¶ A silver food truck sits on a gravel lot under three moons.
2 A Steam curls from the grill, and a tiny robot named ZIP wobbles along the counter on caster wheels, juggling a lime, a squeeze bottle and a napkin while LUCY the cook flips tortillas without looking and BIG MO, her towering brother, lifts a crate of glowing peppers over a sleepy dog that snores by the generator.
3 A Two teenagers in shiny silver jackets lean on the window and argue about which moon is the best moon.
4 D LUCY (to everyone): Okay team, last orders, then we blast off for the next planet!
5 D ZIP (muttering to self): Lime, lime, where is the lime... oh. I am holding the lime.
6 D BIG MO (to Lucy): Boss, the engine is making that noise again. The sad one.
7 D LUCY (shrugging): Then sing it a happy song.
8 A ¶ A phone buzzes on the counter.
9 A Lucy taps it, and a hologram of GRANDMA TESS flickers above the grill.
10 D GRANDMA TESS [V.O.]: Lucy, sweetheart, are you eating? You sound thin.
11 D LUCY (to the phone): Grandma, you can't hear thin.
12 D GRANDMA TESS [V.O.]: I can hear everything. Tell Mo to stop lifting with his back.
13 D BIG MO (calling out): I heard that!
14 D ZIP (to the dog, whispering): Everybody is so loud tonight.
15 A ¶ The dog opens one eye, sighs, and goes back to sleep.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05062.json
### SCENE s05062 | INT. RIDESHARE CAR - NIGHT
Detected names (may be incomplete or contain aliases): GWEN, RICKY, TASHA, BOB
1 A ¶ 2 AM.
2 A Rain.
3 A A hatchback, wipers going.
4 A GWEN, bride-to-be, in a wedding dress, sits in back.
5 A Next to her, RICKY, her ex.
6 A Up front, TASHA drives.
7 A Beside her, BOB, a stranger with a trombone case.
8 D TASHA: So to confirm. Four people. One dress. Zero explanations.
9 D GWEN: He's not with me.
10 D RICKY: I'm totally with her.
11 D GWEN: He's not WITH me with me.
12 A ¶ Silence.
13 A ¶ Bob.
14 A Trombone.
15 A Nothing.
16 D BOB: I got in the wrong car.
17 D TASHA: You got in the right car. You got in the wrong, uh, situation.
18 A ¶ Her phone.
19 A Dead.
20 D GWEN: Does anyone have a charger
21 D TASHA: Glovebox. Next to my dignity.
22 A ¶ He opens it.
23 A Empty.
24 A Rain.
25 D RICKY: Gwen, the groom is at the church. Everyone is at the church. Why are we in a Honda?
26 D GWEN: Because I ran. Okay? I ran. In heels.
27 D BOB (raising trombone case): For what it's worth, I think you look fantastic.
28 A ¶ Beat.
29 A All three turn to him.
30 D TASHA: Sir, you're not even supposed to be here.
31 D BOB: I'm just saying. Great dress.
32 A ¶ She laughs, then cries, then laughs.
33 A He hands her a napkin from the case.
34 A Why does he have napkins in a trombone case.
35 A Nobody asks.
36 A ¶ Tasha stops the car.
37 A Church.
38 A Lights on.
39 A Doors open.
40 A The groom, tiny in the distance, waving.
41 D RICKY: Oh no.
42 D GWEN: Oh no.
43 D TASHA: Five stars everybody. Thats the best ride I ever had.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/gold_A/s05150_1.json
### SCENE s05150_1 | INT. STORAGE FACILITY - CORRIDOR C - CONTINUOUS
Detected names (may be incomplete or contain aliases): INTERCOM, THE WOMAN, ODELL
1 A ¶ She stops at Unit 214.
2 A A padlock the size of her fist.
3 A She sets down the bag.
4 D INTERCOM [V.O.] (crackling): Unit two fourteen is on the lease til the end of the month ma'am. Just so you know.
5 A ¶ The woman looks up at a small speaker grille above the door.
6 D THE WOMAN: You're still here. Its past midnight.
7 D ODELL [V.O.]: Night manager. Odell. I do the walkthroughs whether anyone's here or not.
8 A ¶ MONTAGE - THE LOCK
9 A ¶ -- Bolt cutters.
10 A Jaws bite.
11 A Nothing.
12 A ¶ -- Bolt cutters again.
13 A A SNAP.
14 A The padlock drops.
15 A ¶ -- Rain.
16 A Rain.
17 A A drip falling from a pipe into a bucket somewhere far off.
18 A ¶ -- The door rattles upward on its track.
19 A Cold air rolls out.
