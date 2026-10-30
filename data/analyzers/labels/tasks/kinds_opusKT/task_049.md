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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusKT/group_0049.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01605 | INT. MUSEUM - EGYPTIAN WING - NIGHT
Detected names (may be incomplete or contain aliases): LUCKY, ROMANO, TEDDY BEAR, ADEBAYO
* 1 A ¶ Dim.
* 2 A Hushed.
* 3 A Glass cases of scarabs and gold.
* 4 A A security camera pans slowly, red light blinking.
5 A ¶ Two figures in dark jumpsuits crouch behind a stone sarcophagus.
6 A LUCINDA "LUCKY" ROMANO (30s, braids tucked under a cap, tools in a belt) peers around the lid.
7 A Her partner THEODORE "TEDDY BEAR" ADEBAYO (40s, soft-spoken, a bag of cable ties) shifts his weight.
8 D LUCKY: Teddy Bear, camera.
9 D TEDDY BEAR: I see it.
10 D LUCKY: It turns in six seconds.
11 D TEDDY BEAR: I counted five.
12 D LUCKY: Then it turns in five.
* 13 A ¶ The camera sweeps away.
14 A Lucky slips out from behind the sarcophagus, Teddy Bear lumbering after her.
15 A She kneels at a case.
16 A Pulls a thin pick from her belt.
17 A He crouches beside her, aims a penlight, steadies the glass with a palm.
18 A She slides the pick into the lock.
19 A Clicks it.
20 A Slides the glass open an inch, lifts the golden scarab on its velvet cushion, drops it into a lined pouch.
21 A He holds the lid, lowers it back, wipes the print with a sleeve.
22 D TEDDY BEAR: Done?
23 D LUCKY: Done.
24 D TEDDY BEAR: That was easy.
25 D LUCKY: Don't say that.
26 D TEDDY BEAR: It was.
* 27 A ¶ An alarm shrieks.
* 28 A Red lights spin.
* 29 A A guard's voice crackles somewhere deep in the building.
30 D LUCKY: You said it.
31 D TEDDY BEAR: I'm sorry.
32 A ¶ She grabs his sleeve.
33 A They bolt for the exit, their footsteps ringing off the marble.

### SCENE s01606 | INT. FARMHOUSE CELLAR - NIGHT
Detected names (may be incomplete or contain aliases): FAITH BROOKS, WALT, JUNE, DRIFTER, EPHRAIM
* 1 A ¶ Damp stone.
* 2 A Shelves of jarred peaches.
* 3 A A single bare bulb swings from a cord.
4 A ¶ Four people stand in the middle of the cellar.
5 A FAITH BROOKS (30s, flannel, a lantern in one hand).
6 A Her husband WALT (30s, ball cap, a shovel).
7 A Her little sister JUNIPER "JUNE" (16, braids, a stuffed rabbit).
8 A And an older man they found at the door, named only as the DRIFTER (60s, long coat, calm).
9 D FAITH: Walt, shut the hatch.
10 D WALT: It's shut.
11 D JUNE: Faith, I don't like it down here.
12 D FAITH: Hush, June.
13 A ¶ The Drifter inspects a jar.
14 A Holds it to the bulb.
* 15 A Something inside moves.
16 D DRIFTER: Nice peaches.
17 D WALT: They're fine.
18 D DRIFTER: They're alive.
* 19 A ¶ Faith's lantern wavers.
20 A June clutches the rabbit.
21 D FAITH: Who are you?
22 D DRIFTER (smiling): Call me Ephraim.
23 D WALT: Ephraim, put that down.
24 D EPHRAIM: Walter, you have no idea what you're keeping.
25 A ¶ Ephraim sets the jar back.
* 26 A The bulb flickers.
* 27 A Behind the shelves, something scrapes the wall, patient and slow.

### SCENE s01607 | INT. FRONT PORCH - SUMMER EVENING
Detected names (may be incomplete or contain aliases): ARCHIE, TURNBULL, PENELOPE, BARNABY
* 1 A ¶ A wooden porch with a creaky swing, a pitcher of lemonade sweating on a side table, a glow of fireflies in the yard beyond.
2 A ¶ GRANDPA ARCHIBALD "ARCHIE" TURNBULL (70s, suspenders, a straw hat) rocks in a wicker chair and whittles a small wooden bird.
3 A His granddaughter PENELOPE (10, scraped knees, a net) sits cross-legged on the boards.
4 A Her cousin BARNABY (8, a jar with holes punched in the lid) kneels at the porch rail.
5 D ARCHIE: Easy with the net, Penny.
6 D PENELOPE: I'm being easy.
7 D ARCHIE: You're swinging it like a baseball bat.
8 D PENELOPE: It's the only way to catch one.
9 D BARNABY: I caught three already!
10 D PENELOPE: You did not.
11 D BARNABY: I did too.
12 D PENELOPE: Show me.
13 A ¶ Barnaby holds up the jar.
* 14 A It glows faintly.
15 A Penelope leans in, then leaps up, swings the net, and tumbles into the lemonade table.
* 16 A The pitcher wobbles.
17 A Archie reaches out and steadies it.
18 A Barnaby drops the jar, which rolls off the porch and into the grass.
19 A Penelope scrambles after it, net flailing.
20 A Barnaby follows.
21 A Archie sets down the whittling knife and chuckles.
22 D PENELOPE [CONT'D] (from the yard): It got out!
23 D BARNABY (from the yard): Three got out!
24 D ARCHIE: Let them go, children. They know the way home.
25 A ¶ Penelope and Barnaby stand in the dark yard, surrounded by tiny flickering lights, their faces turned upward.
26 D PENELOPE (softly): Wow.
27 D BARNABY (softly): Yeah.
28 A ¶ Archie picks up his whittling again.
* 29 A The swing creaks.
* 30 A The fireflies drift.

### SCENE s01608 | INT. SLEEPER TRAIN - DINING CAR - NIGHT
Detected names (may be incomplete or contain aliases): DOCTOR MIRABELLE ACHEBE-LONG, COLONEL PERCIVAL HOLLOWAY-GRANT, MISS ODALYS FERNSBY, VLADIMIR ZHURAVLEV, DESMOND ISAIAH
* 1 A ¶ A narrow carriage, polished wood and brass, white tablecloths swaying with the rails.
* 2 A Outside the windows, black fields slide by in the dark, broken now and then by a lone farm light.
* 3 A ¶ Five passengers sit scattered among the tables, each with a half-finished meal and a private worry.
4 A ¶ DOCTOR MIRABELLE ACHEBE-LONG (50s, tailored suit, a leather bag at her feet) cuts a piece of fish with surgical care.
5 A Opposite her sits COLONEL PERCIVAL HOLLOWAY-GRANT (70s, regimental tie, a monocle) tapping a cigarette against a silver case.
6 A At the next table, MISS ODALYS FERNSBY (20s, hat with a feather, gloves) peers into a compact mirror.
7 A Across the aisle, a heavyset man, MR. VLADIMIR ZHURAVLEV (60s, fur collar, hands like shovels), pours vodka into a glass.
8 A And near the door, the porter, DESMOND ISAIAH (30s, white jacket, a tray), waits with the patience of the trained.
9 D MIRABELLE: Colonel, you were saying about the Rhodesian campaign.
10 D PERCIVAL: Was I? Yes. The heat was infernal.
11 D ODALYS (not looking up): It must have been dreadful.
12 D VLADIMIR (over her): War is always dreadful.
13 D PERCIVAL (over him): I recall a particularly dreadful afternoon in nineteen eleven.
14 D MIRABELLE (to Odalys): Miss Fernsby, are you quite well?
15 D ODALYS: Perfectly.
16 D VLADIMIR: She is not. Look at her hands.
17 D ODALYS: My hands are fine.
18 D DESMOND: Shall I bring tea, miss?
19 D ODALYS: No, thank you.
20 D PERCIVAL: Tea is a sovereign remedy.
21 D MIRABELLE: So is silence.
22 A ¶ Percival glares.
23 A Vladimir laughs, a bark.
* 24 A The train lurches around a curve and a glass falls from a nearby table, shattering.
* 25 A Everyone looks.
26 A Desmond bends to sweep it up.
27 D DESMOND: Beg pardon, ladies and gentlemen.
28 D PERCIVAL: Careful, my boy.
29 D DESMOND: Yes, Colonel.
30 A ¶ As he gathers the shards, he stops.
* 31 A In the debris lies a small brass key.
32 A He glances up.
33 A Odalys has gone very pale.
34 A Her eyes meet his.
35 A She shakes her head, once.
36 A ¶ Desmond closes his hand over the key and says nothing.
37 A He stands.
* 38 A The train rushes on.

### SCENE s01609 | EXT. RANCH - BUNKHOUSE PORCH - EVENING
Detected names (may be incomplete or contain aliases): AMOS PRUITT, DELFINA RIVAS, HANK SORENSEN, YOUNG TOBIAS, CLEO, JAMES
* 1 A ¶ Long shadows.
* 2 A Cicadas.
* 3 A A line of horses at a trough, tails switching.
* 4 A The sun sinks behind a ridge the color of rust.
5 A ¶ Five ranch hands sit on the porch.
* 6 A Nobody has said much in an hour.
7 A ¶ AMOS PRUITT (60s, foreman, gray beard) smokes a pipe.
8 A DELFINA RIVAS (30s, braid, work gloves tucked in her belt) mends a bridle.
9 A HANK SORENSEN (40s, big, quiet) peels an apple with a pocketknife.
10 A YOUNG TOBIAS (17, hat too big) plays three notes on a harmonica, over and over.
11 A And old CLEOPHAS "CLEO" JAMES (70s, one eye clouded) rocks in a battered chair.
12 A ¶ The harmonica stops.
13 A Tobias studies the horizon.
14 A ¶ Delfina ties off a knot.
15 A Hank halves the apple and hands a piece to Tobias without a word.
16 A Tobias takes it.
17 A Amos taps out his pipe against the rail.
18 A ¶ Cleo lifts his chin.
19 A Sniffs the air.
20 D AMOS: Rain?
21 D CLEO: Maybe.
22 A ¶ Neither says anything else.
* 23 A The first star shows in the east.

### SCENE s01610 | INT. ABANDONED BOWLING ALLEY - BASEMENT VAULT - NIGHT
Detected names (may be incomplete or contain aliases): OZZIE, QUINTERO, LORELEI FAIRBANKS, GRANT BELLAMY, MAE-LING TSANG, OFFICER DELBERT MARCH
* 1 A ¶ Dust and rust.
* 2 A A hand-cranked lamp throws a pool of yellow on a steel door.
* 3 A Behind the pins, behind the lanes, behind forty years of silence: the vault.
4 A ¶ Four crew members cluster around it.
5 A ¶ OSWALDO "OZZIE" QUINTERO (50s, safecracker, stethoscope around his neck) presses an ear to the dial.
6 A LORELEI FAIRBANKS (30s, black turtleneck, a laptop on a milk crate) types in the shadows.
7 A GRANT BELLAMY (40s, plumber's overalls, a pry bar) leans against the wall.
8 A And in the doorway, watching the stairs, stands MAE-LING TSANG (20s, hood up, earpiece).
9 D OZZIE: Quiet, please.
10 D LORELEI: We are quiet.
11 D GRANT: I'm quieter.
12 D MAE-LING (whispering): Both of you are loud.
13 A ¶ Ozzie turns the dial a quarter inch.
* 14 A Clicks.
15 A Turns it back.
* 16 A Clicks.
17 A His lips move.
18 A He is counting.
19 D OZZIE: Seven. Nineteen. Four.
20 D LORELEI: Your numbers or the bank's?
21 D OZZIE: The bank's. Nineteen-eighty-six. The manager's anniversary.
22 D GRANT: That's romantic.
23 D OZZIE: It's lazy.
24 A ¶ Lorelei looks up from the laptop.
25 A Grant straightens.
26 A Mae-Ling stiffens, one hand rising to her earpiece.
27 A She turns.
28 D MAE-LING: Someone's on the stairs.
29 A ¶ Grant lifts the pry bar.
30 A Lorelei closes the laptop.
31 A Ozzie keeps his hand on the dial, ear still pressed to the steel.
32 A Mae-Ling slips into the shadows beside the stairs, back against the wall.
* 33 A ¶ Footsteps descend.
* 34 A Slow.
* 35 A Heavy.
* 36 A A flashlight beam sweeps the room.
37 A ¶ A security guard, OFFICER DELBERT MARCH (60s, belly, jangling keys), steps off the last stair.
38 A He looks around.
39 A Sees nothing but dust, shadows, the glint of an old lane.
40 D DELBERT: Hello?
* 41 A ¶ Silence.
42 A He steps forward.
43 A His beam crosses the vault door, then the empty milk crate, then a coil of cable.
44 D DELBERT [CONT'D]: Kids again.
45 A ¶ He turns.
46 A Heads back up.
47 A Mae-Ling exhales.
48 A Ozzie clicks the dial one last time.
* 49 A The vault door shudders, groans, and swings open an inch.
* 50 A ¶ Inside, in the glow of the lamp: a single gold bowling ball on a velvet cushion.
51 D LORELEI: That's it?
52 D GRANT: That's it.
53 D OZZIE: It's solid gold.
54 D MAE-LING: It's heavy.
55 D GRANT: Of course it's heavy. It's gold.
56 A ¶ Ozzie reaches in and lifts it with both hands.
* 57 A The floor creaks beneath him.
* 58 A Above, a door slams, and the flashlight beam returns, swinging fast down the stairs.
59 D DELBERT [O.S.]: I knew it! Don't move!
60 A ¶ All four crew members freeze.
61 A Ozzie hugs the ball to his chest.
62 A Grant raises the pry bar.
63 A Lorelei grabs the laptop.
64 A Mae-Ling reaches for the nearest bowling pin.
65 D DELBERT [O.S., CONT'D]: Drop it!
66 A ¶ Ozzie looks at the others.
67 A They look at him.
68 A He takes a step backward, rolls the golden ball down the nearest lane, and watches it thunder into the dark.
* 69 A ¶ The pins explode.
70 A Delbert shouts.
71 A In the chaos, the crew scatters.

### SCENE s01611 | INT. APPELLATE COURTROOM - DAY
Detected names (may be incomplete or contain aliases): JUDGE FLORENCE ADEYEMI-HART, ATTORNEY GABRIEL SOTOMAYOR-BELL, ATTORNEY NADINE KRAUSE
* 1 A ¶ Dark wood, flags, a ceiling of coffered plaster.
* 2 A The gallery is nearly empty.
* 3 A The gavel sits unused.
4 A ¶ JUDGE FLORENCE ADEYEMI-HART (60s, black robe, silver locs) presides.
5 A Before her, two lawyers at separate lecterns: ATTORNEY GABRIEL SOTOMAYOR-BELL (40s, navy suit) and ATTORNEY NADINE KRAUSE (50s, gray pinstripe).
6 D FLORENCE: Counselors, we've heard enough on the statute.
7 D GABRIEL: Your Honor, one final point.
8 D NADINE (overlapping): Your Honor, I object to a final point.
9 D FLORENCE: Let him finish.
10 D GABRIEL: The plaintiff's right of way was established in nineteen-fifty.
11 D NADINE: Established by whom?
12 D GABRIEL: ^By the county.
13 D NADINE: ^By a county that no longer exists.
14 A ¶ Florence raises a hand.
15 A Both stop.
16 A She adjusts her glasses, glances at a document, and sets it aside.
17 D FLORENCE: Mr. Sotomayor-Bell, sit down.
18 A ¶ He sits.
19 A Nadine remains standing, stiff.
20 D FLORENCE [CONT'D]: Ms. Krause, you too.
21 A ¶ Nadine lowers herself slowly.
* 22 A The courtroom is silent.
23 D FLORENCE [CONT'D]: The court will rule from the bench.
24 A ¶ She pauses.
25 A Gabriel clasps his hands.
26 A Nadine doesn't blink.
27 D FLORENCE [CONT'D]: Affirmed.
* 28 A ¶ A single exhale from the gallery.
29 A Gabriel closes his folder.
30 A Nadine gathers her papers with great care, and neither looks at the other.

### SCENE s01612 | INT. SCHOOL BUS - EARLY MORNING
Detected names (may be incomplete or contain aliases): CASSIUS WORTHINGTON, LORRAINE PEAKE, WINNIE ABARA, DISPATCH
* 1 A ¶ Empty seats, green vinyl, window glass fogged with breath.
* 2 A The engine idles.
* 3 A Rain runs down the glass.
4 A ¶ CASSIUS WORTHINGTON (17, backpack, a skateboard on his lap) sits alone in the back row.
5 A He stares at his phone.
* 6 A A text from "Mom": "Don't forget your lunch."
7 A ¶ He thumbs a reply: "Got it."
8 A Sends.
9 A ¶ The bus driver, MS. LORRAINE PEAKE (60s, sweater, thermos), watches him in the rearview mirror.
10 D LORRAINE: You're early.
11 D CASSIUS: Couldn't sleep.
12 D LORRAINE: Big day?
13 D CASSIUS: Exam.
14 D LORRAINE: You study?
15 D CASSIUS: Some.
16 D LORRAINE: That's the best anyone can do.
17 A ¶ She pulls a lever.
* 18 A The door hisses open.
19 A A girl climbs aboard: WINNIE ABARA (16, braids, headphones).
20 A She nods at Lorraine, then spots Cassius and slows.
21 D WINNIE: Is anyone sitting here?
22 D CASSIUS: No.
23 A ¶ She slides in across the aisle.
24 A He turns toward the window.
25 A She pulls out a notebook.
* 26 A ¶ The bus lurches forward.
* 27 A The radio on Lorraine's dash crackles.
28 D DISPATCH [V.O.] (over radio): Bus forty-two, status?
29 D LORRAINE (into mic): En route. Two on board.
30 D DISPATCH [V.O.]: Reminder: the Hendricks Street bridge is closed. Take Birch.
31 D LORRAINE: Copy.
32 A ¶ Winnie leans over.
33 D WINNIE: You have the Calc exam too?
34 D CASSIUS: Yeah.
35 D WINNIE: I'm terrified.
36 D CASSIUS: Me too.
37 A ¶ She laughs, short and relieved.
38 A He grins.
* 39 A For a moment neither speaks, and the rain drums on the roof.
40 D WINNIE: Do you want to quiz each other?
41 D CASSIUS: Sure.
42 A ¶ She flips her notebook open.
43 A He sets his skateboard on the floor.
44 D WINNIE: Derivative of sine x?
45 D CASSIUS: Cosine x.
46 D WINNIE: Integral of one over x?
47 D CASSIUS: Natural log of absolute x.
48 D WINNIE (impressed): Okay, you studied more than "some."
49 D CASSIUS: Don't tell anyone.
50 A ¶ Lorraine, in the mirror, smiles.

### SCENE s01613 | INT. CIVIL COURTHOUSE - JURY DELIBERATION ROOM - AFTERNOON
Detected names (may be incomplete or contain aliases): FOREWOMAN BEATRICE KOWALSKI-DAVIES, JUROR THADDEUS OKAFOR, JUROR PRUDENCE LINDSTROM, JUROR MARCELINO ALVARADO, OFFICER
* 1 A ¶ A windowless room.
* 2 A A long laminate table, twelve chairs, a water pitcher.
* 3 A A wall clock ticking too loudly.
4 A ¶ Four jurors remain after a long lunch.
5 A The rest have filed out for a break.
6 A ¶ FOREWOMAN BEATRICE KOWALSKI-DAVIES (50s, practical blazer, reading glasses) leafs through her notes.
7 A JUROR THADDEUS OKAFOR (30s, hoodie, bitten nails) taps his pen on the table.
8 A JUROR PRUDENCE LINDSTROM (60s, floral blouse, quiet) arranges a row of peppermints in front of her.
9 A And JUROR MARCELINO ALVARADO (40s, work boots, a thermos of coffee) leans back in his chair, staring at the ceiling.
10 D BEATRICE: Let's recap where we are.
11 D THADDEUS: We're nowhere.
12 D PRUDENCE (gently): We're somewhere, dear.
13 D MARCELINO: We're exactly where we started.
14 A ¶ Beatrice sets down her notes, removes her glasses, rubs the bridge of her nose.
15 A Thaddeus stops tapping.
16 A Prudence unwraps a peppermint and offers it across the table.
17 A Marcelino takes it, pops it into his mouth, and Thaddeus declines.
18 A Beatrice puts her glasses back on and looks at each of them in turn.
19 D BEATRICE: The plaintiff says the contract was breached on March third.
20 D THADDEUS: The defendant says it was never signed.
21 D PRUDENCE: The signature looked genuine.
22 D MARCELINO: It looked traced.
23 D BEATRICE: Mr. Alvarado, you keep saying that.
24 D MARCELINO: I keep seeing it.
25 D THADDEUS: I think she's lying. The plaintiff.
26 D PRUDENCE: She didn't seem like a liar.
27 D THADDEUS: The good ones never do.
28 D BEATRICE: We can't convict on a feeling.
29 D THADDEUS: It's not a criminal case.
30 D BEATRICE: We can't find liability on one either.
* 31 A ¶ Silence.
* 32 A The clock ticks.
33 A Prudence folds the peppermint wrapper into a small square.
34 A Marcelino drains his thermos.
35 A Thaddeus resumes tapping.
* 36 A ¶ The door opens.
37 A A court officer leans in.
38 D OFFICER: Madam Foreman, the judge wants to know if you've reached a verdict.
39 D BEATRICE: Not yet.
40 D OFFICER: How much longer?
41 D BEATRICE: Another hour.
42 D OFFICER: I'll tell her.
* 43 A ¶ The door closes.
44 A Beatrice sighs, takes a fresh sheet, and writes a single word at the top.
45 D THADDEUS: What did you write?
46 D BEATRICE: "Evidence."
47 A ¶ She underlines it twice.
48 A Prudence nods.
49 A Marcelino leans forward.
50 A Thaddeus, last, sets down his pen and slides his chair closer to the table.

### SCENE s01614 | EXT. ROOFTOP WATER TANK - SUNSET
Detected names (may be incomplete or contain aliases): MO, JOHNSON, GABBY, ORTEGA-NG, SI, DELACROIX-ODUYA
* 1 A ¶ A battered rooftop, tar-papered and patched.
* 2 A A wooden water tank on stilts casts a long shadow.
* 3 A Pigeons coo.
* 4 A Beyond the parapet, the city glows orange.
5 A ¶ Three teenagers sit with their legs hanging over the edge: MALIK "MO" JOHNSON (17, backwards cap), GABRIELA "GABBY" ORTEGA-NG (16, cut-off jean jacket), and SIMON "SI" DELACROIX-ODUYA (17, oversized glasses, a handheld camera).
6 D MO: So that's it. Last summer.
7 D GABBY: It's not the last summer.
8 D MO: It's the last summer we're all in the same city.
9 D SI: You don't know that.
10 D MO: Gabby's going to Toronto.
11 D GABBY: Maybe.
12 D MO: You got the letter.
13 D GABBY: I got a letter.
14 D SI: What did it say?
15 D GABBY: It said yes.
16 D MO: Then it's Toronto.
17 D GABBY: It's a maybe, Mo.
18 D SI (filming): Say it again for the camera.
19 D GABBY: Si, turn that off.
20 D SI: It's my documentary.
21 D GABBY: It's my life.
22 D SI (lowering the camera): Sorry.
23 D MO: You could stay.
24 D GABBY: And do what?
25 D MO: Same as always.
26 D GABBY: That's the problem.
* 27 A ¶ A long beat.
* 28 A A pigeon lands on the tank, bobs its head, flies away.
29 D SI: I got into film school.
30 D MO: You what?
31 D SI: In L.A. I haven't told my parents.
32 D MO: Si! That's huge!
33 D SI: It's a thousand miles away.
34 D GABBY: So is Toronto.
35 D MO: So you're both leaving.
36 D SI: I didn't say that.
37 D GABBY: You did.
38 D SI: I said I got in.
39 D MO: What about me?
40 D GABBY: What about you?
41 D MO: I'm not going anywhere.
42 D SI: You could.
43 D MO: To where?
44 D GABBY: Anywhere.
45 D MO: I don't want anywhere. I want here.
46 D SI: Here is changing, Mo.
47 D MO: Here is fine.
48 D GABBY: Here is a rooftop.
49 D MO: It's a good rooftop.
50 A ¶ They laugh, thin and tired.
* 51 A The sun slides lower.
* 52 A Their shadows stretch across the tar.
53 D SI: Let's film the sunset.
54 D GABBY: Then it's real.
55 D SI: It's already real.
56 D MO: Do it.
57 A ¶ Si lifts the camera.
58 A Pans across the skyline.
59 A Settles on the two of them.
60 D SI: Say something. For the archive.
61 D GABBY: Hi. We were here.
62 D MO (softly): We were here.
* 63 A ¶ The sun touches the horizon.
* 64 A The camera keeps rolling.

### SCENE s01615 | INT. VINEYARD TASTING ROOM - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): CORINNE BASSETT-OYELARAN, WILL, TRANH, AUGUSTE LEFEBVRE-MORROW
* 1 A ¶ Rustic beams.
* 2 A A long wooden bar.
* 3 A Racks of bottles lit by amber bulbs.
* 4 A Through the open French doors, rows of vines stretch toward the hills.
5 A ¶ CORINNE BASSETT-OYELARAN (30s, linen dress, hair in a loose knot) swirls a glass of red and studies the color.
6 A At her elbow, her fiancé WILLIAM "WILL" TRANH (30s, rolled sleeves, sunburned nose) pretends to sniff the bouquet.
7 A And behind the bar, the vintner, MR. AUGUSTE LEFEBVRE-MORROW (60s, apron, silver hair), polishes a glass.
8 D AUGUSTE: Notes of cherry, perhaps a little leather.
9 D CORINNE (lying): I can taste the leather.
10 D WILL (lying): So can I.
11 D AUGUSTE: Excellent. You have a fine palate.
12 A ¶ Corinne sips.
13 A Will sips.
14 A Auguste pours a sliver of white into a third glass and slides it across.
15 D CORINNE: Auguste, this is lovely.
16 D AUGUSTE: Please. Call me Gus.
17 D WILL: Gus, do you ever sell your reserve?
18 D AUGUSTE: Never.
19 D CORINNE: Never?
20 D AUGUSTE: My late wife made it. I open a bottle on our anniversary. That is all.
21 A ¶ Will and Corinne exchange a look.
22 A Will sets down his glass.
23 A Corinne touches Auguste's wrist, gently, and he smiles, embarrassed.
24 D AUGUSTE [CONT'D]: But you two are getting married, yes?
25 D CORINNE: In September.
26 D AUGUSTE: Then you must have one.
27 D WILL: We couldn't.
28 D AUGUSTE: I insist.
29 A ¶ He ducks under the bar and returns with a dusty bottle, its label hand-lettered in faded ink.
30 A He wipes it with a cloth and reads aloud.
31 D AUGUSTE [CONT'D]: Nineteen ninety-eight. The year we met.
32 D CORINNE: Gus, this is too much.
33 D AUGUSTE: It is exactly enough.
34 A ¶ He pops the cork.
35 A Pours three small glasses.
36 A Hands one to each of them.
37 A They raise the glasses.
38 D AUGUSTE [CONT'D]: To love.
39 D CORINNE: To love.
40 D WILL: To love, and to leather.
41 A ¶ They laugh, clink, drink.
* 42 A The late sun slants through the doors and turns the wine to garnet.
43 D CORINNE: Oh.
44 D WILL: What?
45 D CORINNE: It tastes like a memory.
46 D AUGUSTE: That is the secret. A good wine always does.

### SCENE s01616 | INT. CONVENT KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): SISTER BENEDETTA MARCHETTI-OYO, SISTER CLARISSA, REVEREND MOTHER AGATHA VANDERPOOL
* 1 A ¶ Whitewashed walls.
* 2 A A cast-iron stove, a scrubbed deal table, rows of copper pots gleaming in the lamplight.
* 3 A Outside, wind moves in the cypress trees.
4 A ¶ SISTER BENEDETTA MARCHETTI-OYO (60s, black habit, flour on her sleeves) kneads dough with slow, deliberate strokes.
5 A Across the table, a novice, SISTER CLARISSA (19, wimple slightly askew), peels potatoes into a bucket.
6 A And in the doorway, a figure waits.
7 A ¶ REVEREND MOTHER AGATHA VANDERPOOL (70s, black habit, a silver cross, a posture like a cathedral) rests a hand on the frame.
8 A ¶ Benedetta does not look up.
9 A Clarissa's knife pauses.
10 D AGATHA: Sister Benedetta.
11 D BENEDETTA: Reverend Mother.
12 D AGATHA: You are up late.
13 D BENEDETTA: The bread will not wait.
14 D AGATHA: Nor will the visitors.
15 A ¶ Benedetta presses her palms into the dough.
16 A Clarissa lowers her head and peels faster.
17 D AGATHA [CONT'D]: They arrive at dawn. The bishop's man will want to see the accounts.
18 D BENEDETTA: They are in order.
19 D AGATHA: Are they?
20 D BENEDETTA: They are.
21 D AGATHA: Then you will not mind if Sister Clarissa reads them aloud.
22 A ¶ The knife drops.
23 A Clarissa stares at her hands.
24 A Benedetta's fingers stop moving, a long beat, then resume.
25 D BENEDETTA: Sister Clarissa has other duties.
26 D AGATHA: She has the best penmanship in the house.
27 D BENEDETTA (evenly): She has also been awake since five.
28 A ¶ Agatha steps into the room.
* 29 A The lamp throws her shadow across the table.
30 A Clarissa shrinks.
31 A Benedetta folds the dough over itself, once, twice, three times.
32 D AGATHA: You have been with us thirty years.
33 D BENEDETTA: Thirty-one.
34 D AGATHA: And in all that time, I have not asked you for anything.
35 D BENEDETTA: You have asked me for bread.
36 D AGATHA: Bread is not asking. Bread is feeding.
37 A ¶ Benedetta turns to the oven.
38 A Opens the iron door.
39 A A wash of heat on her face.
40 A She slides in the loaf and shuts the door.
41 D BENEDETTA: What do you want, Mother?
42 D AGATHA: I want to know what is missing from the ledger.
* 43 A ¶ The kitchen is perfectly still.
44 A Clarissa looks up, at last, at Benedetta.
45 A Benedetta, at Agatha.
* 46 A The wind rises in the cypress trees.
47 D BENEDETTA: Forty-two loaves.
48 D AGATHA: Per week?
49 D BENEDETTA: Per week. For thirty-one years.
50 D AGATHA: Given to whom?
51 D BENEDETTA: To those who knock at the back gate.
52 D AGATHA: Without permission.
53 D BENEDETTA: Without asking.
54 D AGATHA (a long pause): I see.
55 A ¶ She lifts the silver cross from her chest and holds it for a moment, as if weighing it.
56 A Then she lets it fall back.
57 D AGATHA [CONT'D]: Then we will need to bake more.

### SCENE s01617 | INT. OLD LIBRARY - RARE BOOKS ROOM - EVENING
Detected names (may be incomplete or contain aliases): PROFESSOR HADLEIGH VANCE-OKONJO, MISS PRISCILLA TREVELYAN-ADE, OSWIN CHAMBERLAIN-BELL
* 1 A ¶ A tall room of dark oak and leather.
* 2 A A ladder on rails.
* 3 A A reading table under a green lamp.
4 A ¶ PROFESSOR HADLEIGH VANCE-OKONJO (50s, tweed, pipe unlit) examines a bound volume under magnification.
5 A Across the table, his assistant MISS PRISCILLA TREVELYAN-ADE (30s, cardigan, pencil behind her ear) records notes.
6 A In the corner, the librarian MR. OSWIN CHAMBERLAIN-BELL (70s, bow tie, white gloves) dusts a shelf.
7 D HADLEIGH: Priscilla, look at this.
8 D PRISCILLA: At what, Professor?
9 D HADLEIGH: The binding. It has been recently altered.
10 D PRISCILLA: Altered how?
11 D HADLEIGH: The stitching. Someone has resewn the spine.
12 D OSWIN (from the corner): That is impossible. No one has touched that volume in forty years.
13 D HADLEIGH: Forty-one, Mr. Chamberlain-Bell, according to your register.
14 D OSWIN: Then forty-one.
15 D PRISCILLA: Professor, there's a name here on the flyleaf.
16 D HADLEIGH: Read it.
17 D PRISCILLA: "Cornelius Ambrose Wren."
18 D OSWIN: Wren?
19 D HADLEIGH: You know the name.
20 D OSWIN: He was a donor. Long dead.
21 D HADLEIGH: He died in nineteen thirty-two.
22 D OSWIN: Quite.
23 D HADLEIGH: Then who has been writing in his book?
24 D PRISCILLA: There's fresh ink in the margins.
25 D OSWIN: That cannot be.
26 D HADLEIGH: Here, Priscilla. Hold the lamp lower.
27 D PRISCILLA: The ink is still wet.
28 D OSWIN (sharply): Put it down.
29 D HADLEIGH: Mr. Chamberlain-Bell.
30 D OSWIN: Put it down at once.
31 D PRISCILLA: ^What is it?
32 D HADLEIGH: ^What do you know?
33 A ¶ Oswin crosses the room with surprising speed, takes the volume in both gloved hands, and clasps it to his chest.
34 D OSWIN: I know that some books are not meant to be read.
35 D HADLEIGH: By whom?
36 D OSWIN: By anyone.
37 D PRISCILLA: Mr. Chamberlain-Bell, you wrote in it.
38 D OSWIN (very quietly): No, my dear. I have only been keeping it dry.
39 A ¶ He lays the book on the table, opens it to a page, and steps back.
* 40 A In the green lamplight, a line of handwriting slowly begins to appear on the paper, letter by letter.
41 A ¶ Hadleigh and Priscilla lean in together.

### SCENE s01618 | INT. SUBMARINE BAY - COLD STORAGE - NIGHT
Detected names (may be incomplete or contain aliases): SENTRY, TECHNICIAN, CONTROL
* 1 A ¶ Frost on steel.
* 2 A Rows of crates under a single caged bulb.
* 3 A Breath hangs in the air like smoke.
4 A ¶ A SENTRY (30s, parka, rifle slung) paces the aisle.
5 A He stops at a crate.
6 A Pries the lid with a gloved hand.
7 A Peers in.
8 A ¶ From behind a stack of pallets, a second man watches him.
9 A THE TECHNICIAN (40s, thin, ID badge turned inward).
10 A He holds a small black box in one hand, thumb hovering over a button.
11 A ¶ The Sentry sets down the lid.
12 A Turns.
13 A Looks directly at the pallets.
14 A The Technician holds his breath.
15 D SENTRY: Hello?
* 16 A ¶ No reply.
17 A The Sentry steps closer.
18 A Sniffs.
19 A Reaches for his radio.
20 D SENTRY [CONT'D] (into radio): Control, I have movement in cold storage.
21 D CONTROL [V.O.] (over radio): Confirm.
22 D SENTRY: Possible. He's behind the pallets. He's not answering.
23 D CONTROL [V.O.]: Hold position. Backup in two minutes.
24 A ¶ The Sentry unslings his rifle.
25 A The Technician presses against the crate.
26 A A drop of sweat freezes on his forehead.
27 D SENTRY (low): Come out. He won't hurt you.
28 A ¶ The Technician closes his eyes.
29 A His thumb tightens.
* 30 A The box clicks.
* 31 A ¶ Overhead, every light in the bay goes dark.
32 A In the black, a scuffle: boots on steel, a grunt, a shout, a rifle butt striking something hard.
* 33 A The caged bulb swings back on.
34 A ¶ Both men stand, five feet apart.
35 A The Sentry's rifle points at the Technician.
36 A The Technician's box points at the Sentry.
37 A Neither lowers it.
38 D SENTRY [CONT'D]: Put it down. He's got backup coming.
39 D TECHNICIAN (through his teeth): So does he.
* 40 A ¶ Somewhere above them, a muffled thump.
* 41 A A second.
* 42 A The ceiling trembles.
* 43 A Frost sifts from the pipes.
44 A ¶ They look up together.

### SCENE s01619 | INT. SEASIDE BOARDING HOUSE - ATTIC - NIGHT
Detected names (may be incomplete or contain aliases): ODELIA PRINGLE, HORACE BLACKWOOD-ADE, MISS CONSTANCE TAMBLYN, FERDINAND OKORO-STRAND, THOMAS
* 1 A ¶ Slanted beams.
* 2 A A cracked skylight.
* 3 A Moonlight on trunks, hatboxes, a headless dressmaker's dummy.
* 4 A The air smells of salt and mildew.
5 A ¶ Five guests have climbed the narrow stair with lanterns.
6 A ¶ MRS. ODELIA PRINGLE (60s, shawl, a ring of keys) leads.
7 A DR. HORACE BLACKWOOD-ADE (50s, black bag, bowler hat) follows.
8 A Then MISS CONSTANCE TAMBLYN (20s, nightgown under a coat), clutching a candle.
9 A Behind her, MR. FERDINAND OKORO-STRAND (40s, braces, a revolver he clearly does not know how to hold), and last, young THOMAS (12, nightshirt, wide-eyed, a tin whistle).
10 D ODELIA (to the group): Stay close. The floor is rotten in places.
11 D HORACE: Mrs. Pringle, what precisely are we looking for?
12 D ODELIA: The thing that has been tapping.
13 D CONSTANCE (whispering): It tapped again last night.
14 D FERDINAND (to himself): Nerves. Nothing but nerves.
15 D THOMAS: It's not nerves.
16 D ODELIA: Quiet, boy.
* 17 A ¶ A single tap from behind the dummy.
18 A Everyone freezes.
19 A Constance's candle trembles.
20 A Ferdinand raises the revolver, then lowers it, then raises it again.
* 21 A ¶ A second tap.
* 22 A A third.
* 23 A A scrape, as of fingernails on wood.
24 D HORACE (low): Who is there?
* 25 A ¶ The dummy topples.
* 26 A Dust billows.
27 A A dark shape lunges across the trunks.
28 A Constance screams.
29 A Ferdinand fires wildly, the shot punching a hole in the skylight.
30 A Horace dives behind a hatbox.
31 A Odelia swings her lantern.
32 A Thomas blows a shrill note on his whistle.
33 A ¶ The shape hisses, springs up through the broken glass, and disappears into the night.
* 34 A ¶ Silence.
* 35 A Glass tinkles.
* 36 A Moonlight pours through the new hole.
37 A The five of them stand panting among the trunks, one by one lowering their lanterns.
38 D THOMAS (softly): It was a gull.
39 D FERDINAND (shakily): A gull.
40 D HORACE: A very large gull.
41 A ¶ Odelia lifts the dummy upright with one hand and straightens its collar.
42 D ODELIA: Back to bed, all of you.
43 A ¶ She turns.
44 A One by one they file down the stairs.
45 A Thomas is last.
46 A He pauses at the top, tin whistle in hand, and looks back at the skylight.
* 47 A ¶ Something taps.
* 48 A Once.

### SCENE s01620 | INT. LIGHTHOUSE LENS ROOM - NIGHT (1887)
Detected names (may be incomplete or contain aliases): HOLLIS BRANT, SILAS, INSPECTOR AGNES FAIRWEATHER
* 1 A ¶ Brass.
* 2 A Prisms.
* 3 A A hundred glass faces catching one flame.
4 A ¶ HOLLIS BRANT, 60s, salt-stiff beard, oils the turning gear.
5 A Slow.
6 A Careful.
7 A ¶ SILAS, 15, his apprentice, polishes a prism with a rag.
8 A Too fast.
9 D HOLLIS: Gently, boy.
10 D SILAS: Yes, sir.
* 11 A ¶ Wind howls.
* 12 A The tower groans.
* 13 A ¶ A crack.
* 14 A Sharp.
* 15 A Glass.
16 A ¶ Silas freezes.
* 17 A A hairline fracture crawls across the prism.
18 D HOLLIS: Don't breathe.
19 D SILAS: It was already -- I swear it --
20 A ¶ Hollis crosses.
21 A Fast for his age.
22 A Grips Silas's wrist.
23 D HOLLIS: How long have you known?
24 D SILAS: Since Tuesday.
25 A ¶ Hollis lifts the prism.
26 A Turns it to the flame.
* 27 A The crack is a bright wire.
28 D HOLLIS: Tuesday.
* 29 A ¶ Silence.
* 30 A The great lens turns.
* 31 A Light sweeps the sea.
* 32 A ¶ The door bangs open.
* 33 A Rain blows in.
34 A ¶ INSPECTOR AGNES FAIRWEATHER, 40s, black oilskin, ledger under one arm, stands dripping on the threshold.
35 D AGNES: Evening, Mr. Brant. The Board sent me to check your lens.
* 36 A ¶ Beat.
37 A Hollis sets the prism down on the cracked side.
38 A Hides it with his sleeve.
39 D HOLLIS: Flawless, Inspector.
40 A ¶ Agnes studies the prism.
41 A Studies Silas.
42 A Studies Hollis.
43 A ¶ She sets down her ledger.
44 A Closes the door against the storm.
45 D AGNES: Then you will not mind if I hold it.
46 A ¶ Hollis exhales.
47 A Slow.
48 D HOLLIS: Mind? Madam, I would be honoured.
49 A ¶ He hands her the prism.
* 50 A Cracked side down.
51 A ¶ She turns it over.
52 A Looks.
53 A Looks longer.
54 D AGNES: Mm.
55 A ¶ She wraps it in her scarf.
56 D AGNES [CONT'D]: I'll say it caught the weather. Happens every winter.
57 A ¶ Silas sits down hard on an oil drum.
58 D AGNES [CONT'D]: Light the second flame, Mr. Brant. The fog is coming in.

### SCENE s01621 | INT. FLOODED GRAIN SILO - NIGHT
Detected names (may be incomplete or contain aliases): DMITRI VOLK, KOFI ASANTE, BRONWEN HALE
* 1 A ¶ Black water at chest height.
* 2 A A single headlamp beam cuts the dust.
3 A ¶ DMITRI VOLK, 40s, stocky, clings to a ladder rung.
4 A He keeps the lamp.
5 A ¶ KOFI ASANTE, 30s, lean, shivers beside him, one arm wrapped around a rusted pipe.
6 A ¶ BRONWEN HALE, 50s, a farmer's hands, floats a plastic drum like a raft, its lid taped shut.
7 D DMITRI: The water's still coming up.
8 D KOFI: It came up two rungs since the lamp was on my side.
9 D BRONWEN: Then we climb.
10 D DMITRI: He said the hatch is sealed from outside.
11 D KOFI: Who did?
12 D DMITRI: You. Ten minutes ago.
13 D KOFI: I said I couldn't see the hatch. He was the one who saw it.
14 D DMITRI: Which he?
15 D KOFI: The man on the radio. Before it died.
16 D BRONWEN: The radio man said the roof hatch opens inward. He said push, not pull.
17 D DMITRI: He also said an hour. That was three hours ago.
18 D KOFI: He didn't say that. He said maybe an hour. He was guessing.
19 D BRONWEN: Both of you stop. Save the air.
20 D DMITRI: There's no air shortage. There's a hatch shortage.
21 D KOFI: Then give me the lamp and let me find it.
22 D DMITRI: You'll drop it.
23 D KOFI: I have not dropped a thing in my life.
24 D BRONWEN: You dropped the radio.
25 D KOFI: He dropped the radio. I only caught it badly.
26 D DMITRI: Fine. Take the lamp. But if he asks, I didn't hand it over.
27 D BRONWEN: Who is going to ask?
28 D DMITRI: Whoever finds us.
* 29 A ¶ Water laps another rung.
30 D KOFI: Then we'd better be easy to find.

### SCENE s01622 | EXT. PAGODA ROOFTOP, FLOODED RICE PADDIES - DAWN
Detected names (may be incomplete or contain aliases): SERGEANT OKONKWO, PRIVATE LINDQVIST, CORPORAL HAYASHI, MARCHETTI
* 1 A ¶ Mist on black water.
* 2 A A cracked tiled roof.
3 A Five soldiers pressed flat against it.
4 A ¶ SERGEANT OKONKWO, 40s, broad, calm, scans the treeline with binoculars.
5 A Beside him, PRIVATE LINDQVIST, 19, pale, hugs a radio like a baby.
* 6 A ¶ Quiet.
7 A ¶ CORPORAL HAYASHI, 30s, sniper, wiry, settles behind her rifle.
8 A Below, MARCHETTI, 20s, loud even in whispers, drags a crate of ammunition up the slope and spills three boxes, which clatter down the tiles, while Okonkwo grabs Lindqvist's collar to stop him sliding after them and Hayashi swears under her breath and Marchetti dives, catching one box, losing the other two.
* 9 A They splash into the paddy.
* 10 A Ripples spread.
* 11 A ¶ Silence.
12 A Everyone holds.
13 D MARCHETTI (whispering): Sorry. Sorry.
14 D OKONKWO: Be quiet.
* 15 A ¶ A crack.
* 16 A Far off.
* 17 A A bullet chips a tile beside Lindqvist's head.
18 A ¶ Everyone flattens.
* 19 A Radio hisses.
20 A Lindqvist fumbles it.
21 D LINDQVIST: They've seen us. They've seen us.
22 D OKONKWO: Good. Let them look at me.
23 A ¶ He stands.
24 A Raises one hand.
25 A Waves at the mist.
26 D HAYASHI: Sergeant --
* 27 A ¶ Nothing.
* 28 A A long breath.
* 29 A The mist stays still.
* 30 A ¶ Then a white scarf, tied to a stick, rises from the far tree line.
31 A Waves slowly.
32 D OKONKWO: Hold fire.
33 D MARCHETTI: It's a trick.
34 D HAYASHI: It's a kid. A kid with a scarf.
35 A ¶ Lindqvist laughs, one wet hiccup.
36 A Marchetti sinks onto the tiles.
37 A Hayashi lowers her rifle one inch.
* 38 A ¶ A second crack.
* 39 A Closer.
* 40 A The scarf drops out of sight.
41 A ¶ Everyone is moving again.
42 A Hayashi up on one knee, Okonkwo hauling Lindqvist back by the strap, Marchetti sliding down the far side toward the water, the radio shrieking static in Lindqvist's arms, and a third shot ringing off the bronze bell above.
43 D OKONKWO: Down! Down the back!
44 A ¶ Lindqvist slides.
45 A Marchetti catches him.
46 A They hit the water together.
* 47 A ¶ Mist closes over the roof.
* 48 A ¶ Silence again.
* 49 A One tile, rocking.
* 50 A Then still.

### SCENE s01623 | INT. FINCH & PUMPHREY TAXIDERMY SHOP - DAY
Detected names (may be incomplete or contain aliases): GLORIA FINCH, WALTER PUMPHREY
* 1 A ¶ Glass eyes everywhere.
* 2 A A moth-eaten badger on a pedestal.
* 3 A A stuffed owl in a bowler hat.
4 A ¶ GLORIA FINCH, 40s, sharp as a tack in a sharper suit, stands on a stepladder, hammering a mounted trout to the wall.
5 A ¶ WALTER PUMPHREY, 50s, rumpled, hat in both hands, bursts through the door.
6 D WALTER: Gloria! The fire inspector is outside!
7 D GLORIA (not turning): Good. Tell him we're closed.
8 D WALTER: He saw the smoke!
9 D GLORIA: There is no smoke. There is a very warm badger.
10 A ¶ She hammers.
11 A He wrings his hat.
12 A She hammers harder.
13 D WALTER: Gloria, you put a lit cigar in its mouth!
14 D GLORIA: To keep it from looking surprised.
15 A ¶ He snatches the badger.
* 16 A It's smoking.
17 A He bats at it with his hat.
* 18 A Smoke curls from the badger's ears.
19 D WALTER: Put it out!
20 D GLORIA: I can't, I'm busy with the trout.
21 A ¶ He dumps a bucket of paint water on the badger.
* 22 A It sags.
23 A She climbs down, sniffs, turns slowly, and lets him have a look.
24 D GLORIA [CONT'D]: That was my best badger.
25 D WALTER: He was a fire hazard!
26 A ¶ She picks up the owl.
27 A Plops it on his head.
28 D GLORIA: Well, put this on. You're the one who has to face the inspector.
29 D WALTER: Why me?
30 D GLORIA: He asked for the owner.
31 D WALTER: You own half!
32 D GLORIA: And you are the half with the hat.
* 33 A ¶ The door chimes.
34 A They both freeze.
35 A She straightens his bowler.
36 A He straightens the owl.
37 D WALTER: How do I look?
38 D GLORIA: Like you've been stuffed for years.
* 39 A ¶ The door swings open.

### SCENE s01624 | INT. FAIRLANES BOWLING ALLEY - PINSETTER ROOM - NIGHT
Detected names (may be incomplete or contain aliases): SHORTY ALVARADO, TANYA BOSCO
* 1 A ¶ Behind the lanes.
* 2 A A long steel cavern of dead machines, each one frozen mid-cycle.
* 3 A Dust.
* 4 A The smell of oil and old wax.
5 A ¶ SHORTY ALVARADO, 50s, wide, slow, in a faded satin bowling jacket, sits on an upturned crate.
* 6 A A duffel bag between his boots.
* 7 A ¶ Footsteps on the metal catwalk.
8 A ¶ TANYA BOSCO, 30s, leather jacket, no smile, walks the length of the room.
9 A A flashlight in her hand, not lit.
10 D SHORTY: You're late, Tanya.
11 D TANYA: Traffic.
12 D SHORTY: At two in the morning.
13 D TANYA: There's always traffic, Shorty.
14 A ¶ She stops ten feet away.
15 A Looks at the duffel.
16 D TANYA [CONT'D]: That it?
17 D SHORTY: That's it.
18 D TANYA: Open it.
19 D SHORTY: You open it.
20 D TANYA: It's your bag.
21 D SHORTY: It's your problem.
* 22 A ¶ A long beat.
* 23 A Somewhere, a pipe drips.
24 A Tanya crosses.
25 A Crouches.
26 A Unzips the duffel.
* 27 A ¶ Stacks of bills, rubber-banded.
28 A She picks one up.
29 A Fans it.
30 A Looks up.
31 D TANYA: It's short.
32 D SHORTY: It's what Dominic gave me.
33 D TANYA: Dominic gave you forty. This is thirty-one.
34 D SHORTY: Then Dominic's counting differently than he used to.
35 D TANYA: Or you are.
36 D SHORTY: Careful.
37 D TANYA: I'm always careful. That's why I'm still alive.
38 A ¶ Shorty smiles, without warmth.
39 D SHORTY: You know why they call me Shorty?
40 D TANYA: Because you're not.
41 D SHORTY: Because I was always short on patience.
42 A ¶ He stands.
* 43 A The crate scrapes.
44 A Tanya doesn't rise.
45 A She keeps the money in her hand.
46 D TANYA: Sit down, Shorty.
47 D SHORTY: No.
48 D TANYA: Sit down.
49 D SHORTY: You think I took nine thousand?
50 D TANYA: I think someone did.
51 D SHORTY: Then count it again. Slowly. Like your mother taught you.
52 D TANYA: Leave my mother out of it.
53 D SHORTY: She'd say the same thing. She'd say, Tanya, count again.
54 A ¶ Tanya's jaw sets.
55 D TANYA: You knew my mother?
56 D SHORTY: Everybody knew your mother. She bowled a 280 in this very building.
57 D TANYA: She bowled a 279.
58 D SHORTY: She told me 280.
59 D TANYA: She lied to you.
60 D SHORTY: Maybe she did. Maybe that's what she did to everyone.
61 A ¶ Tanya rises.
62 A The flashlight clicks on.
63 A She shines it right into his eyes.
64 D TANYA: Where is the nine, Shorty?
65 D SHORTY: Turn that off.
66 D TANYA: Where is it?
67 D SHORTY: Turn it off!
68 A ¶ She doesn't.
69 A He swings the duffel.
70 A It catches her across the shoulder.
71 A She stumbles.
* 72 A The flashlight clatters, spinning light across the machines.
73 A ¶ He goes for her.
74 A She meets him.
75 A They crash into a pinsetter.
* 76 A A hundred pins rattle in their tubes like startled bones.
77 D SHORTY [CONT'D] (strangled): You think Dominic's your friend?
78 D TANYA: I think he's my boss!
79 D SHORTY: He's a liar!
80 D TANYA: So are you!
81 A ¶ She twists, drives an elbow into his ribs.
82 A He folds.
83 A She pins him against the machine, forearm across his throat.
* 84 A ¶ Pins spill.
85 A They roll across the floor.
* 86 A One strikes the dead flashlight and stops.
87 D TANYA [CONT'D]: Nine thousand. Where.
88 A ¶ Shorty's eyes flick to the next machine.
* 89 A To a panel, slightly ajar.
90 A ¶ She sees it.
91 A Lets him go.
92 A He slides down the metal, wheezing.
93 D SHORTY: You were always sharp. Your mother was too.
94 A ¶ Tanya opens the panel.
* 95 A Inside: a gym bag.
96 A She unzips it.
* 97 A Money.
* 98 A Lots of it.
99 D TANYA: This isn't nine.
100 D SHORTY: No.
101 D TANYA: This is all of it.
102 D SHORTY: All of Dominic's.
103 A ¶ She turns slowly, bag in hand.
104 D TANYA: Shorty.
105 D SHORTY: Tanya.
106 D TANYA: What did you do?
107 A ¶ Shorty reaches inside his satin jacket.
108 A Slowly.
109 A Tanya freezes.
110 A He pulls out a small black phone, holds it up.
111 D SHORTY: I called him an hour ago.
* 112 A ¶ Far off, a car door.
* 113 A Another.
* 114 A Heavy steps on the lane boards beyond the wall.
115 A ¶ Tanya drops the bag.
116 D TANYA: You rat.
117 D SHORTY (softly): Short on patience, remember?
* 118 A ¶ The door to the pinsetter room crashes open.

### SCENE s01625 | INT. CHURCH BELL TOWER, GHOST TOWN - DAWN
Detected names (may be incomplete or contain aliases): JEB TALLMAN, CORA LEE PRUETT, PIKE, DOC AMBROSE
* 1 A ¶ Dust in slanting light.
* 2 A A rope hangs slack.
3 A Four people share a space built for one.
4 A ¶ JEB TALLMAN, 50s, bandaged ribs, sits against the wall with a Colt on his knee, while CORA LEE PRUETT, 30s, in a torn calico dress, peels back his shirt to check the wound, and PIKE, 20s, cheeks smeared with soot, keeps watch at the slit window, and DOC AMBROSE, 60s, spectacles cracked, tips the last of his flask over Jeb's side.
5 D JEB: It's quiet, Pike.
6 D PIKE: Quiet's worse, Jeb.
7 D CORA LEE: Quiet means they ran out of whiskey. Or men.
8 D DOC AMBROSE: Or patience, Miss Cora Lee.
9 D JEB: They've got plenty of that. Always did.
10 D PIKE: Doc, how long till he can ride?
11 D DOC AMBROSE: Days. Weeks, if he's sensible.
12 D JEB: I'm never sensible.
13 D CORA LEE: That's why you're here, Jeb Tallman.
14 A ¶ Jeb smiles.
15 A Lets the Colt slide off his knee.
16 A Pike turns from the window, rifle loose in his hand.
17 D PIKE: They're gone.

### SCENE s01626 | INT. PLANETARIUM DOME - NIGHT
Detected names (may be incomplete or contain aliases): IMOGEN DRAKE, PRIYA NAIR, BARNABY
* 1 A ¶ Stars wheel across the ceiling.
* 2 A Below, a circle of reclining seats, all empty but three.
3 A ¶ IMOGEN DRAKE, 30s, in a museum guard's uniform two sizes too big, lies back in a seat with a flashlight pen.
4 A ¶ PRIYA NAIR, 30s, in a black turtleneck, crouches at the projector pit, wires in her teeth.
5 A ¶ BARNABY, 60s, the real guard, snores in the front row, hat over his face.
6 D IMOGEN (whispering): Is he asleep?
7 D PRIYA (whispering): Define asleep.
8 D IMOGEN: Eyes closed. Mouth open. Making that noise.
9 D PRIYA: Then yes. The noise is a good sign.
10 D IMOGEN: And she's sure it's behind the Orion slide?
11 D PRIYA: She's sure. She says it's in the Betelgeuse mount. Or maybe the Rigel.
12 D IMOGEN: Which?
13 D PRIYA: She says it's the red one.
14 D IMOGEN: They're both red.
15 D PRIYA: Then check both.
16 D IMOGEN: Priya, she told us the diamond was hidden in a star. Not behind one. In one.
17 D PRIYA: Then she's been lying since March.
18 D IMOGEN: She'd hate that you said it.
19 D PRIYA: She'd hate that you whispered it. She hates whispers.
20 A ¶ Barnaby snorts.
21 A Both women freeze.
* 22 A A long beat.
23 A He settles.
24 D IMOGEN (whispering): Rewind the sky.
25 A ¶ Priya flips a switch.
* 26 A The stars slide backward.
* 27 A A tiny red light blinks inside the projector.
28 A Priya laughs, silent, delighted.

### SCENE s01627 | INT. NIGHT LAUNDROMAT - 3 A.M.
Detected names (may be incomplete or contain aliases): NADIA REYES, STRANGER, GUS, OSKAR
* 1 A ¶ Fluorescent hum.
* 2 A Dryers turning.
* 3 A Rain on the glass.
4 A ¶ NADIA REYES, 30s, folds a hospital scrub top with exact corners.
5 A Alone.
* 6 A ¶ The bell above the door chimes.
7 A A STRANGER, 40s, wet raincoat, enters.
8 A Sits two machines away.
9 A Stares.
10 D NADIA: We close at four.
11 D STRANGER: I know.
12 A ¶ GUS, 60s, the attendant, leans out from the back office, mop in hand.
13 D GUS: Everything okay out here?
14 D NADIA: Fine, Gus.
15 D STRANGER: Gus. Right.
16 D GUS: Do I know you?
17 D STRANGER: You know her.
18 A ¶ Nadia stops folding.
19 D NADIA: I don't know you.
20 D STRANGER: You knew my brother.
21 D GUS: Hey, pal --
22 D NADIA: Which brother?
23 D STRANGER: The one in the chart. Room 412.
24 D GUS: Hey, pal, you're done. Out.
25 D STRANGER: Oskar. His name was Oskar. Say it.
26 A ¶ Nadia sets the scrub top down.
27 A Her hands shake.
28 D NADIA: Oskar --
29 D OSKAR (Stranger, now standing): Not him. Me. I'm Oskar. He was Anton.
30 D GUS: Nadia, back away from --
31 D OSKAR: She signed the form, Gus.
32 A ¶ Gus raises the mop.
33 A Oskar pulls a folded paper from his coat.
34 A Slaps it onto the machine.
* 35 A ¶ Every dryer stops spinning.
* 36 A Silence.

### SCENE s01628 | INT. CABLE-REPAIR SHIP, FREEZER HOLD - NIGHT
Detected names (may be incomplete or contain aliases): MAEVE KOSTELNY, HARLAN GREER
* 1 A ¶ Rime on steel.
* 2 A A string of work lights swinging.
* 3 A Crates stacked to the ceiling, each stamped with a number.
4 A ¶ MAEVE KOSTELNY, 30s, parka, ship's cook, drags a crate lid back.
5 A Breath fogs.
6 A ¶ HARLAN GREER, 50s, bosun, stands in the hatch, one hand on the door.
7 D MAEVE (to the room): Anyone down here?
* 8 A ¶ Nothing.
* 9 A A crate shifts, creaks.
10 D HARLAN: Get out of there.
11 D MAEVE: It's counting itself, Harlan.
12 D HARLAN: What?
13 D MAEVE: The crates. There's one more than the manifest. There's always one more.
14 D HARLAN: Maeve.
15 D MAEVE (muttering): Thirty-one. Thirty-two. Thirty-three.
16 D HARLAN (to himself): Don't look at it. Don't look at it.
17 D MAEVE: I'm not looking.
18 D HARLAN: You're looking.
19 D MAEVE: Then so are you.
20 D HARLAN: I'm looking at you.
21 D MAEVE: Then who's behind me?
* 22 A ¶ Silence.
* 23 A The work lights stop swinging.
24 A Both stare at the same spot.
25 D HARLAN (to everyone, to no one): All hands up top. All hands up top.
26 D MAEVE: They can't hear you.
27 D HARLAN (softly): They never could.
28 D MAEVE: Thirty-four.
* 29 A ¶ The door slams.
* 30 A Locks.
31 A Harlan hammers it.
32 D HARLAN: Open it! Open it!
33 D MAEVE (to herself): Thirty-five.
34 A ¶ She turns, and a crate lid lifts on its own.

### SCENE s01629 | INT. TELEGRAPH OFFICE, DUSTY JUNCTION - DAY
Detected names (may be incomplete or contain aliases): MARSHAL ISADORA CRANE, NELL FENTON, OTTO BRAND, LUPE ARRIAGA, TOMMY
* 1 A ¶ Shuttered windows.
* 2 A Heat.
* 3 A A dull roar of hooves somewhere beyond the wall.
* 4 A A telegraph key clatters on its own.
5 A ¶ MARSHAL ISADORA CRANE, 40s, grey duster, stands at the window, peering through a slat.
6 A NELL FENTON, 20s, the operator, taps the key with a pencil while OTTO BRAND, 60s, the stationmaster, stacks flour sacks against the door and LUPE ARRIAGA, 30s, a drover, holds a shotgun and checks the roof beams for cracks.
* 7 A Nobody speaks until the floor starts to shake.
8 D CRANE: Nell. What does the line say?
9 D NELL: It says "hold." Over and over.
10 D OTTO: Hold what?
11 D NELL: Hold fast, hold the line, hold your fire. It doesn't say.
12 D LUPE: Who sent it?
13 D NELL: Miles West. Eight miles up.
14 D TOMMY [O.S.] (faint, through the wall): They're coming through! Don't let 'em split the herd!
15 D CRANE: That's Tommy.
16 D LUPE: Tommy's dead. We buried him Tuesday.
17 D CRANE: Then someone sounds like him.
* 18 A ¶ The shaking grows.
* 19 A Dust sifts from the ceiling.
20 A Otto stops stacking.
21 A Lupe lifts the shotgun.
22 A Nell grips the key.
23 A Crane lets the slat fall shut and draws her revolver, and the five of them stand there as the roar rises to a wall of sound.
24 D CRANE [CONT'D]: Nobody fires till I do.
* 25 A ¶ The roar passes.
* 26 A Slowly it fades.
* 27 A ¶ Silence.
28 D OTTO: Well.
29 D NELL: It says "all clear."
30 D CRANE (dry): That's a first.

### SCENE s01630 | INT. WEATHER STATION, PACIFIC ATOLL - DAY
Detected names (may be incomplete or contain aliases): PETTY OFFICER ANSELM BOUCHARD, FENWICK
* 1 A ¶ A cinderblock hut.
* 2 A Louvered windows.
* 3 A Barometers, a wall of dials, a hand-cranked radio on a rough table.
* 4 A Heat shimmers outside.
5 A ¶ PETTY OFFICER ANSELM BOUCHARD, 30s, sunburnt, shirtless under a rain slicker, logs numbers in a ledger.
6 D BOUCHARD (muttering): Seven-oh-three. Seven-oh-two. Seven-oh-three.
7 A ¶ He taps the barometer.
* 8 A It does not move.
* 9 A ¶ The radio crackles.
10 D FENWICK [V.O.] (radio): Atoll Three, Atoll Three, this is Fleet Weather. Do you copy?
11 A ¶ Bouchard picks up the handset.
12 A Takes his time.
13 D BOUCHARD: Fleet Weather, Atoll Three. I copy.
14 D FENWICK [V.O.] (radio): Anselm, is that you?
15 D BOUCHARD: It's the only voice out here, Fenwick.
16 D FENWICK [V.O.] (radio): Give me the numbers.
17 D BOUCHARD: Seven-oh-three and steady. Wind variable, light. Seas calm. Nothing on the horizon.
18 D FENWICK [V.O.] (radio): Nothing at all?
19 D BOUCHARD: A seabird. Maybe two.
20 D FENWICK [V.O.] (radio): Understood. Hold position.
21 D BOUCHARD: We've held it eleven weeks.
22 D FENWICK [V.O.] (radio): Then you're good at it. Out.
* 23 A ¶ The radio clicks dead.
24 A Bouchard sets the handset in its cradle.
25 D BOUCHARD (to the room): Gentlemen, the war continues without us.
* 26 A ¶ No one answers.
* 27 A The room has no gentlemen.
28 A ¶ He goes back to the ledger.
29 A Writes: no change.
30 A Leans back.
31 A Closes his eyes.
32 D BOUCHARD [CONT'D] (to himself): Tomorrow, I swear, I'll paint the wall.
* 33 A ¶ Outside, a seabird calls.

### SCENE s01631 | INT. ARBITRATION ROOM, OLD COURTHOUSE - DAY
Detected names (may be incomplete or contain aliases): JUDGE ABERNATHY, OKAFOR, LINDGREN, TSUKAMOTO, BAILIFF DUFFY
* 1 A ¶ Oak panels.
* 2 A A tall window.
* 3 A A radiator that knocks.
4 A ¶ JUDGE ABERNATHY, 60s, bifocals on a chain, presides.
5 A MR. OKAFOR, 40s, sharp navy suit, and MR. LINDGREN, 40s, charcoal suit, glare across a narrow table.
6 A MS. TSUKAMOTO, 30s, the court reporter, hovers over a steno machine.
7 A BAILIFF DUFFY, 50s, leans against the door.
8 D JUDGE ABERNATHY: Mr. Okafor, you may proceed.
9 D OKAFOR: Thank you, Your Honor. Mr. Lindgren's client signed on the fourth. He knew what he was signing.
10 D LINDGREN: He did not. He thought it was the lease.
11 D OKAFOR: Then he should have read it.
12 D LINDGREN: He did. Twice. And he still didn't know what he was signing.
13 D JUDGE ABERNATHY: Mr. Lindgren. Mr. Okafor. Please.
14 D OKAFOR: Your Honor, he is stalling because he has no evidence.
15 D LINDGREN: He is shouting because he has no case.
* 16 A ¶ The radiator knocks.
17 A Everyone looks at it.
18 D DUFFY: That's been happening since Monday, Judge.
19 D JUDGE ABERNATHY: Thank you, Duffy.
20 D TSUKAMOTO: Your Honor, may I ask counsel to speak one at a time?
21 D JUDGE ABERNATHY: You may. And you shall.
* 22 A ¶ A beat.
23 A Okafor pulls a paper from his folder.
24 D OKAFOR: Exhibit nine. A signature, notarized, dated the fourth.
25 D LINDGREN (reading, then slowly): That is not my client's signature.
26 D OKAFOR: What?
27 D LINDGREN: That is yours.
28 A ¶ Okafor looks at the page.
29 A His face drains.
* 30 A The radiator knocks again, softly.
31 D JUDGE ABERNATHY: Mr. Okafor, would you care to explain?
32 A ¶ Okafor laughs.
33 A Short.
34 A Then longer.
35 D OKAFOR: Your Honor, I may have grabbed the wrong folder.

### SCENE s01632 | INT. SS HESPERIA, MAIL SORTING ROOM - NIGHT (1912)
Detected names (may be incomplete or contain aliases): PURSER EZEKIEL TRAVERS, MINNIE ABARA, FOSTER, QUINCEY
* 1 A ¶ A low steel room lined with pigeonholes, lit by green-shaded lamps.
* 2 A The ship rolls gently.
* 3 A Letters slide across tables.
4 A ¶ PURSER EZEKIEL TRAVERS, 50s, sleeve garters, sorts a bundle by hand.
5 A Across from him, MINNIE ABARA, 20s, a clerk with ink on her cuff, stamps envelopes in a steady rhythm.
6 A ¶ At a third table, FOSTER, 30s, in a brown wool suit, files telegrams.
7 A And at the back, QUINCEY, a boy of 12, sweeps the floor with a broom taller than he is.
8 D TRAVERS (to the room): Gentlemen, ladies, we dock Thursday. I'd like the mail from Queenstown done by then.
9 D FOSTER: It will be, sir.
10 D MINNIE (to herself): Dublin, Dublin, Cork. Dublin.
11 D TRAVERS: Miss Abara, how many left?
12 D MINNIE: Four hundred and twelve, sir.
13 D TRAVERS: That's a fair number.
14 D MINNIE: It's a fair ship, sir.
15 A ¶ Travers smiles at that.
16 A Returns to his sorting.
17 D QUINCEY (muttering): Four hundred and eleven.
18 D MINNIE: Quincey, what are you counting?
19 D QUINCEY: You dropped one, miss.
20 A ¶ He holds up a postcard.
21 A Minnie takes it, reads, and tucks it carefully in a pigeonhole.
22 D FOSTER (to Quincey): Good eyes, lad.
23 D QUINCEY: Thank you, sir.
24 D FOSTER (to himself): Better than mine.
25 D TRAVERS (to everyone): Tea, anyone?
26 D MINNIE: Yes, please, sir.
27 D FOSTER: No, thank you.
28 D QUINCEY: Is there milk?
29 D TRAVERS: There's always milk, Quincey. It's the one thing the sea doesn't take.
30 A ¶ He sets down the bundle.
31 A Rises.
32 A Crosses to the kettle.
* 33 A The ship rolls.
* 34 A The lamps swing.
* 35 A Nobody notices.

### SCENE s01633 | EXT. SALT FLAT STAGE STOP - NOON
Detected names (may be incomplete or contain aliases): HATTIE MORROW, BRODIE, LAZARO, SNOW
* 1 A ¶ White to the horizon.
* 2 A Heat bending the air.
* 3 A A lone shack.
* 4 A A dead coach.
5 A ¶ HATTIE MORROW, 40s, hat low, holds a rifle.
6 A BRODIE, 30s, a hired gun, has a revolver pointed at her.
7 A LAZARO, 20s, the driver, crouches by a wheel.
8 A SNOW, an old white-whiskered prospector, watches from the shack's shade.
9 D HATTIE (to Brodie): You won't shoot a woman in the back.
10 D BRODIE: You're facing me.
11 D HATTIE: Then you won't shoot a woman in the front.
* 12 A ¶ A pause.
* 13 A The wind.
14 D LAZARO (to everyone): Please. Nobody has to die today.
15 D SNOW (muttering): Everybody has to die someday.
16 D BRODIE: Shut up, old man.
17 A ¶ Brodie's eyes flick to Snow.
18 A Hattie's rifle snaps up.
19 A A shot rings.
20 A Brodie spins, drops his revolver, grabs his shoulder.
* 21 A ¶ Silence.
* 22 A Smoke drifts across the flats.
23 D HATTIE (to Lazaro): Get the water.
24 D LAZARO: Yes, ma'am.
25 D SNOW (to Brodie, gently): Told you.

### SCENE s01634 | INT. ORBITAL SEED VAULT - HOLD C - CONTINUOUS
Detected names (may be incomplete or contain aliases): KAZIMIR, TOLLIVER
* 1 A ¶ A cold, white corridor of sealed drawers, each labeled in a script that has gone out of use.
* 2 A Frost on the rails.
* 3 A A low hum of cooling pumps.
4 A ¶ KAZIMIR, 50s, in a pressure suit with the helmet off, pushes a cart slowly down the aisle.
5 A His breath clouds.
6 A ¶ TOLLIVER, 40s, also in a suit, strides ahead with a tablet.
7 A He stops at a drawer.
8 A Frowns.
9 D TOLLIVER: This one is warm.
10 D KAZIMIR: Warm?
11 D TOLLIVER: Eleven degrees above spec.
12 D KAZIMIR: It's the cooling pump. I told them in March.
13 D TOLLIVER: He told us in March. We told Command.
14 D KAZIMIR: Command said what?
15 D TOLLIVER: That it was within tolerance.
16 A ¶ Kazimir sighs.
17 A Parks the cart.
18 A Opens the drawer.
* 19 A Frost curls out.
* 20 A ¶ Inside, hundreds of tiny glass vials, row on row.
* 21 A Some are dark.
* 22 A Some are faintly green.
23 D KAZIMIR: How many have turned?
24 D TOLLIVER: Sixty. Maybe seventy.
25 D KAZIMIR: Out of how many?
26 D TOLLIVER: Eleven thousand.
27 A ¶ Kazimir lifts one vial.
28 A Holds it to the light.
* 29 A A single green seed curls inside, soft and alive.
30 D KAZIMIR: Still breathing.
31 D TOLLIVER: Is it?
32 D KAZIMIR: Look at it. It's trying.
33 A ¶ Tolliver sets down the tablet.
34 A Takes the vial.
35 A Cups it in both gloved hands.
36 A For a long time he says nothing.
37 D TOLLIVER: When I was young, he told me nothing in a vault ever grows.
38 D KAZIMIR: He was wrong.
39 D TOLLIVER: He was often wrong.
40 A ¶ Kazimir takes the vial back.
41 A Places it in a tray labeled RESCUE.
42 A Closes the drawer.
43 D KAZIMIR: We start with this one. We fix the pump. We save sixty.
44 D TOLLIVER: And the rest?
45 D KAZIMIR: We tell them it was within tolerance.
46 A ¶ Both laugh, softly.
* 47 A The cooling pumps hum.

### SCENE s01635 | INT. FIELD HOSPITAL, CONVERTED OPERA HOUSE - NIGHT
Detected names (may be incomplete or contain aliases): MARISOL VEGA, NURSE OLUWASEUN, ARCHIBALD, SEUN
* 1 A ¶ Gilt cherubs watch over a row of cots laid across the orchestra pit.
* 2 A A single chandelier burns at half power.
* 3 A The air smells of carbolic and old velvet.
4 A ¶ DR. MARISOL VEGA, 40s, steps down from the stage with a clipboard, shoulders loose, the first unhurried moment in days.
5 A NURSE OLUWASEUN, 30s, whom everyone calls Seun, tucks a blanket around ARCHIBALD, 70s, who has been quiet since evening.
6 D DR. VEGA: Seun, he's settled?
7 D SEUN: Settled, Doctor. Sleeping like a stone.
8 D DR. VEGA: Archibald? Can you hear me?
9 A ¶ Archibald's eyelids flutter.
10 A He smiles.
* 11 A The room is hushed, the chandelier steady.
12 D SEUN: Doctor, I think the fever's broken.
13 D DR. VEGA: Good. Very good.
14 A ¶ She lays a palm on his forehead.
15 A Then her face changes.
16 A Her hand flinches back.
17 A She reaches for his wrist.
18 D DR. VEGA [CONT'D]: Seun. Light.
19 D SEUN: Doctor?
20 D DR. VEGA: Bring the lamp.
21 A ¶ Seun lifts the lamp.
22 A They both lean in.
23 A Archibald's lips are blue.
24 A His smile has not moved.
25 D DR. VEGA [CONT'D]: Archibald!
26 A ¶ She pounds his chest.
27 A Seun knocks the lamp over and catches it.
28 A They both freeze as the chandelier above them gutters out.
* 29 A ¶ Darkness.
* 30 A Then a single cough in the pit, and a hundred cots begin to stir.

### SCENE s01636 | EXT. FROZEN LAKE LANDSDAL - BONSPIEL RINK - DAY
Detected names (may be incomplete or contain aliases): ASTRID NYGAARD, TORVALD, INGE, HALVOR, LINNEA, REFEREE ODDMUND, OFFICIAL
* 1 A ¶ A white plain under a lower white sky.
* 2 A Eight sheets of curling ice scraped clean.
* 3 A Flags snapping.
4 A Crowds in wool, breath rising.
5 A ¶ At the far house, ASTRID NYGAARD, 30s, skip, tall, ice in her braid, crouches behind the button, broom raised.
6 A Her three teammates wait down the sheet: TORVALD, 50s, burly, thick gloves; INGE, 20s, whip-thin, the lead; and HALVOR, 60s, slow-moving, the veteran.
7 A ¶ At the hack, LINNEA, 20s, her youngest sweeper, adjusts her grip on a stone.
* 8 A ¶ The score reads 6-6.
* 9 A Final end.
10 D ASTRID (calling): Linnea! Heavy! Heavy!
11 D LINNEA: Heavy?
12 D ASTRID: Draw to the button. One more.
13 D LINNEA: Right.
14 A ¶ Linnea pushes off.
15 A Slides.
* 16 A The stone glides.
* 17 A A hush spreads.
* 18 A Even the wind seems to listen.
19 D TORVALD: Left, Inge! Sweep!
20 D INGE: I am sweeping!
21 D HALVOR: Harder!
22 D TORVALD: Harder!
23 D INGE: Harder than hard!
* 24 A ¶ The stone creeps down the ice.
25 A Their brooms hiss.
* 26 A It curls toward the house -- and stops, a hair short.
27 A ¶ Groans from the crowd.
28 A Astrid hangs her head.
29 D TORVALD: Short.
30 D HALVOR: Short by a hair.
31 D INGE: That was my sweeping.
32 D TORVALD: It wasn't you.
33 D HALVOR: It was the ice.
34 D ASTRID: It was me.
* 35 A ¶ A heavy silence.
* 36 A Down the sheet, the other team's final stone is already gliding home.
* 37 A It is perfect.
* 38 A It hits the button.
39 A The crowd cheers.
* 40 A ¶ A whistle.
41 A REFEREE ODDMUND, 60s, in a parka marked OFFICIAL, strides out across the ice with a measuring tape, grim as a judge.
42 D ODDMUND: Measurement! Measurement on the stones!
43 A ¶ The crowd falls quiet.
44 A Oddmund kneels.
45 A Unrolls the tape.
46 A Measures.
47 A Measures again.
48 D ODDMUND [CONT'D] (looking up): Nygaard stone. Four centimeters. Their stone. Four-point-one.
49 D INGE: We won?
50 D TORVALD: We won!
51 D HALVOR: We won by a tenth!
52 D LINNEA: By a tenth of what?
53 D HALVOR: Of anything!
54 D ASTRID (breathless): Oddmund. Measure again.
55 D ODDMUND: I've measured twice.
56 D ASTRID: Then measure again.
57 A ¶ Oddmund sighs, kneels, measures a third time.
58 A The crowd leans in.
* 59 A Wind turns the flags.
60 D ODDMUND (softly): Four-point-one. Four-point-one. Nygaard stone, four.
* 61 A ¶ A beat.
62 A Then the roar goes up.
63 A Torvald lifts Astrid off the ice.
64 A Halvor sits down on his broom.
65 A Inge dances.
66 A Linnea stares at her own gloves.
67 D ASTRID (to Linnea): You pushed it.
68 D LINNEA: It stopped short.
69 D ASTRID: It was exactly enough.
* 70 A ¶ Down the sheet, the other team's stones sit silent on the ice.
* 71 A Wind drifts snow across them.
72 D TORVALD: They threw a perfect last stone.
73 D HALVOR: Not perfect enough.
74 D ASTRID: Then they'll be back.

### SCENE s01637 | EXT. STALLED CABLE CAR OVER A GORGE - DAY
Detected names (may be incomplete or contain aliases): JUNIPER, BASHIR
* 1 A ¶ Wind.
* 2 A A steel box swaying under a single cable.
* 3 A Far below, a river like a thread.
4 A ¶ JUNIPER, 30s, hiking boots, a torn pack, sits wedged against the door.
5 A She stares at the hatch in the ceiling.
6 A Her knuckles are white.
7 D JUNIPER (to the empty car): Okay. Okay. Everyone stay calm.
* 8 A ¶ No one answers.
* 9 A The car creaks.
10 D JUNIPER [CONT'D] (to herself): You are not stuck. You are paused.
11 A ¶ She reaches into her pack.
12 A Pulls a radio.
13 A Presses the button.
* 14 A Static.
15 D JUNIPER [CONT'D] (into radio): Base, this is car nine. Anyone?
* 16 A ¶ Static.
17 A She tries again.
18 A And again.
* 19 A ¶ A bolt shears off somewhere above.
* 20 A Metal rings.
* 21 A The car lurches six inches.
22 A Juniper screams, clamps both hands on the rail.
23 D JUNIPER [CONT'D] (to the car): No. No no no.
24 A ¶ She closes her eyes.
25 A Breathes.
26 A In.
27 A Out.
28 A ¶ She opens the hatch release.
29 A Pushes.
* 30 A Nothing.
31 A Pushes again.
* 32 A The latch squeals.
* 33 A ¶ A shadow falls across the hatch.
34 A ¶ BASHIR, 30s, in a climbing harness and a bright orange helmet, drops through the opening on a rope, boots first.
35 A He lands, steadies the car with one knee, and clips a carabiner to her pack.
36 D BASHIR: Juniper?
37 D JUNIPER: Who are you?
38 D BASHIR: Rescue. They said you were alone.
39 D JUNIPER: I was talking to the car.
40 D BASHIR: How's the car?
41 D JUNIPER (laughs, shaky): Needy.
42 A ¶ He tightens the straps across her chest, one at a time, steady.
43 D BASHIR: I'm going to lift you through the hatch. You look up, not down.
44 D JUNIPER: Up. Not down.
45 D BASHIR: Good.
46 A ¶ He lifts.
47 A She rises into daylight, boots dangling.
48 D JUNIPER (from above): I can see the sun!
49 D BASHIR: Told you.
* 50 A ¶ The car groans.
51 A He follows, last out.
* 52 A The cable hums.

### SCENE s01638 | INT. GOLD ASSAY OFFICE - DAY
Detected names (may be incomplete or contain aliases): ISAIAH COLE, MAGDALENA OROZCO
* 1 A ¶ One room, adobe walls, a barred window.
* 2 A A scale of polished brass on a counter.
* 3 A A stove ticking.
* 4 A Dust turning in the light.
5 A ¶ ISAIAH COLE, 50s, a stooped assayer in sleeve garters, wipes the scale with a rag.
6 A He is slow, methodical.
7 A A man who has weighed other people's hopes for thirty years.
* 8 A ¶ A door in the back wall stands ajar.
* 9 A Beyond it, a lamp-lit vault.
* 10 A ¶ The bell above the front door jingles.
11 A ¶ MAGDALENA OROZCO, 30s, enters.
12 A Dust on her riding skirt.
13 A A canvas pouch in one fist.
14 A She walks like she has somewhere to be, and pauses when she sees he has already seen her.
15 D ISAIAH: Morning.
16 D MAGDALENA: It's afternoon.
17 D ISAIAH: Not in here.
18 A ¶ She lays the pouch on the counter.
19 A He opens it.
20 A Pours out a stream of dull yellow dust, and says nothing.
21 A He weighs.
22 A He squints.
23 A He weighs again.
24 D MAGDALENA: Well?
25 D ISAIAH: Eleven ounces.
26 D MAGDALENA: That's all?
27 D ISAIAH: Where did you find it?
28 D MAGDALENA: Upriver.
29 D ISAIAH: Upriver is long.
30 A ¶ She shrugs.
31 A He looks at her face, then at her hands.
32 A Her fingers are steady.
33 A Her nails are broken.
34 D ISAIAH [CONT'D]: That's a rough week.
35 D MAGDALENA: A rough year.
36 A ¶ He pours the dust back in.
37 A Ties the pouch.
38 A Slides it across.
39 D ISAIAH: It isn't gold.
40 D MAGDALENA: It's yellow.
41 D ISAIAH: So is brass. So is a fool's hope.
42 A ¶ She doesn't move.
* 43 A The stove ticks.
* 44 A The scale settles.
45 D MAGDALENA: How much for the dust, if it's brass?
46 D ISAIAH: Nothing.
47 D MAGDALENA: Then how much if it's gold?
48 D ISAIAH: That depends on whether you're lying.
49 A ¶ He walks to the vault door and pushes it wider.
* 50 A Beyond, a long table, covered with ledgers, a hundred small pouches in rows.
51 A ¶ She slips past him.
52 A Through the open door.
53 A Into the lamplight.
54 A He does not stop her.
55 D MAGDALENA [O.S.] (from the back room): Isaiah, how many pouches are in here?
56 D ISAIAH: More than eleven ounces' worth.
57 D MAGDALENA [O.S.] (from the back room): Whose are they?
58 D ISAIAH: Men who stopped coming back.
* 59 A ¶ A pause.
* 60 A A pouch thumps onto the table.
* 61 A Another.
62 D MAGDALENA [O.S.] (from the back room): You never sent them anything.
63 D ISAIAH: Nobody left an address.
64 A ¶ He lets out a slow breath.
65 A Sets down the rag.
66 A Locks the front door with a click.
* 67 A The bell above it jingles one last time.
68 A ¶ She steps from the vault, a pistol held loose at her side.
69 D MAGDALENA: Eleven ounces was only the start.
70 D ISAIAH: I know.
71 A ¶ He folds his hands on the counter and waits.
72 A He has weighed worse.

### SCENE s01639 | INT. AUCTION HOUSE, ANTIQUE CLOCK VIEWING ROOM - EVENING
Detected names (may be incomplete or contain aliases): CELESTINE VOSS, RHYS, OKSANA, PEMBERTON, THADDEUS
* 1 A ¶ A hundred clocks tick in conflict.
* 2 A Brass, ormolu, walnut, lacquer.
* 3 A Velvet ropes.
4 A A single white-gloved attendant by the door.
5 A ¶ CELESTINE VOSS, 40s, in a grey silk dress that costs more than the carpet, drifts between cases with a catalogue folded under her arm, while RHYS, 30s, dressed as a waiter with a tray of champagne flutes, steps between two bidders without spilling, and OKSANA, 50s, an appraiser in half-moon glasses, peers into the open back of a bracket clock, and Celestine pauses, tilts her head toward the clock Oksana is examining, and Oksana, without lifting her eyes, shifts a half-step to give her a clearer view.
6 A ¶ PEMBERTON, 60s, the auctioneer, pink-faced, approaches Celestine with a practiced smile.
7 D PEMBERTON: Madam Voss. A pleasure. You've found the Thwaites.
8 D CELESTINE: It found me.
9 D PEMBERTON: Estimated at forty thousand.
10 D CELESTINE: It's worth less.
11 D PEMBERTON: Less?
12 D CELESTINE: It's missing its pendulum.
13 A ¶ Pemberton blinks.
14 A Oksana's pencil pauses.
15 A Rhys sets the tray on a plinth without looking at it.
16 D PEMBERTON: The pendulum was lost in the war.
17 D CELESTINE: I'm sure it was.
18 A ¶ She moves on.
19 A Pemberton follows a half-step behind.
20 A Rhys lifts a flute, offers it.
21 A She takes it, drinks nothing, sets it down on the velvet rope.
22 A ¶ THADDEUS, 20s, the white-gloved attendant, steps forward to retrieve it.
23 A Celestine smiles at him as one smiles at a stranger on a train, and he retreats.
24 A ¶ At the far end of the room, Oksana draws a hair-thin wire from her sleeve and slips it behind the clock's dial, so smoothly that Pemberton, glancing back at her, sees only a woman adjusting her glasses.
25 D PEMBERTON: Oksana, you're quiet.
26 D OKSANA: I'm counting.
27 D PEMBERTON: Counting what?
28 D OKSANA: Seconds.
29 A ¶ Pemberton laughs.
30 A Celestine does not.
31 A Her eyes, for a moment, meet Rhys's across the room.
32 A ¶ The hundred clocks begin to chime the hour, in no particular order, and in the roar of it, Thaddeus, tugging his gloves, sees the Thwaites case swing open an inch.
33 D THADDEUS: Sir? Sir, the case --
34 D PEMBERTON (over the chimes): What?
35 D THADDEUS: The case --
36 D CELESTINE (sweetly): Have a glass of champagne, young man.
37 A ¶ Rhys appears at his elbow.
38 A Thaddeus takes the flute.
39 A Drinks.
* 40 A The case stays open.

### SCENE s01640 | INT. HOSPITAL HYDROTHERAPY POOL - DAY
Detected names (may be incomplete or contain aliases): LAKSHMI IYER, NURSE BERTRAND, ORDERLY CASIMIR, PADMORE, WILHELMINA OKORO
* 1 A ¶ Warm green water.
* 2 A Steam on the tiles.
* 3 A Handrails along the shallow end.
4 A ¶ DR. LAKSHMI IYER, 40s, stands waist-deep in a wetsuit top, a clipboard on a floating tray.
5 A NURSE BERTRAND, 50s, adjusts the lift chair at the edge.
6 A ORDERLY CASIMIR, 20s, holds a towel and does nothing else.
7 A DR. PADMORE, 60s, observes from a plastic chair by the wall.
8 A In the water, MRS. WILHELMINA OKORO, 80s, clings to the rail.
9 D IYER: Mrs. Okoro, how does that feel?
10 D WILHELMINA: Warm.
11 D IYER: Good. Lift the left leg for me.
12 D WILHELMINA: That's the one that doesn't lift.
13 D IYER: Try anyway.
14 D WILHELMINA: I tried last week.
15 D IYER: And?
16 D WILHELMINA: It stayed where it was.
17 D BERTRAND: She's got spirit, Doctor.
18 D IYER: She does. Mrs. Okoro, let's try the right.
19 D WILHELMINA: Which is the one that works?
20 D IYER: That's the idea.
21 D WILHELMINA: Then why do I need a doctor?
22 D PADMORE (from the chair): For the paperwork, Mrs. Okoro.
23 D WILHELMINA: Who's that?
24 D IYER: Dr. Padmore. He's observing.
25 D WILHELMINA: He looks like he's been observing since 1990.
26 D PADMORE: I find the work restful.
27 D IYER: Right leg, please.
28 D WILHELMINA: There.
29 D IYER: Higher.
30 D WILHELMINA: There.
31 D IYER: Higher.
32 D WILHELMINA: That's as high as it goes.
33 D IYER: It's high enough.
34 D BERTRAND: Casimir, the towel.
35 D CASIMIR: I have it.
36 D BERTRAND: Then hold it.
37 D CASIMIR: I am holding it.
38 D BERTRAND: Higher.
39 D CASIMIR: This is as high as it goes.
40 D WILHELMINA: He's learning.
41 D PADMORE: Slowly.
42 A ¶ Iyer glances at her clipboard.
43 A Makes a note.
44 A Wilhelmina lets go of the rail with one hand, tentatively.
45 A The water holds her.
46 A She smiles, a small, surprised thing.
47 D WILHELMINA [CONT'D]: Oh.
48 D IYER: Yes?
49 D WILHELMINA: Nothing. It's only that I'd forgotten.
50 D IYER: Forgotten what?
51 D WILHELMINA: That it could feel like this.
52 A ¶ Bertrand lowers the lift chair.
53 A Casimir finally spreads the towel.
54 A Padmore uncrosses his legs, checks his watch, crosses them again.

### SCENE s01641 | INT. ROOFTOP GREENHOUSE, GRAND HOTEL - NIGHT
Detected names (may be incomplete or contain aliases): SOLANO, HESTER VANCE, KIERAN, BAPTISTE, STRANGER, CALDER
* 1 A ¶ Glass walls.
* 2 A Orchids in hanging baskets.
* 3 A Rain tapping overhead.
* 4 A A city smeared into color below.
5 A ¶ DET. SOLANO, 40s, trench coat, sits on a wrought-iron bench, hands in his pockets.
6 A HESTER VANCE, 50s, the hotel manager, waters ferns with a copper can.
7 A KIERAN, 20s, the night porter, hovers near the door.
8 A MR. BAPTISTE, 60s, an elderly guest in a silk robe, studies an orchid.
9 A ¶ A STRANGER, 30s, wet hair, black jacket, steps in.
10 A Nods to no one.
11 A Stands apart.
12 D SOLANO: Evening.
13 D STRANGER: Evening.
14 D SOLANO: You're not a guest.
15 D STRANGER: I'm waiting for someone.
16 D SOLANO: Who?
17 D STRANGER: A friend.
18 D HESTER (not looking up): The greenhouse closes at eleven.
19 D STRANGER: It's ten-forty.
20 D HESTER: Then you have twenty minutes.
21 D KIERAN: Sir, can I take your coat?
22 D STRANGER: No.
23 D SOLANO: What's your friend's name?
24 D STRANGER: You wouldn't know him.
25 D SOLANO: Try me.
26 D STRANGER: Calder.
27 D BAPTISTE (without turning): Calder is dead.
28 D STRANGER: Is he?
29 D BAPTISTE: I buried him in March.
30 D STRANGER: Then who's standing here?
* 31 A ¶ Silence.
* 32 A The rain.
* 33 A A drop falls from a leaf onto the tile.
34 D CALDER (the Stranger, now): Mr. Baptiste. It's been a long time.
35 D BAPTISTE: Not long enough.
36 D CALDER: I came to return something.
37 D SOLANO (low): Hester. Clear the room.
38 D HESTER: Detective?
39 D SOLANO: Now.
40 D KIERAN: Sir, I --
41 D SOLANO: Out, son.
42 A ¶ Kieran backs out of the greenhouse.
43 A Hester sets the can down, walks to the door.
44 A Locks it from the outside.
45 D CALDER: Don't be dramatic.
46 D SOLANO: You're supposed to be in a box.
47 D CALDER: So is he.
48 D BAPTISTE (turning at last): What did you bring me?
49 D CALDER: Your watch.
50 A ¶ He pulls it from his jacket.
* 51 A Gold.
* 52 A Heavy.
53 A Holds it up by the chain.
54 D CALDER [CONT'D]: You gave it to me the night you shot me.
55 D BAPTISTE: I gave it to you as a kindness.
56 D CALDER: It stopped at eleven.
57 D BAPTISTE: It always did.
58 A ¶ Solano rises.
59 A His hand is out of his pocket now.
60 D SOLANO: Mr. Calder, put the watch on the bench.
61 D CALDER: It's not for the bench.
62 D SOLANO: Put it down.
63 D CALDER: Detective, I've waited eight months. I can wait one more minute.
* 64 A ¶ The watch swings.
* 65 A Tick.
* 66 A Tick.
* 67 A Tick.
* 68 A ¶ It stops.
69 D CALDER [CONT'D]: Eleven.

### SCENE s01642 | INT. MORDECAI'S PAWN SHOP - CLOSING SALE - NIGHT
Detected names (may be incomplete or contain aliases): PAWNBROKER MORDECAI, GINA, TREY, ROSALIND, DUKE
* 1 A ¶ Shelves of guitars, watches, tuba cases.
* 2 A A red banner: EVERYTHING MUST GO.
3 A ¶ PAWNBROKER MORDECAI, 60s, cash apron, stands behind the counter.
4 A GINA, 30s, a regular, waves a ticket at him.
5 A TREY, 20s, a skinny kid in a hoodie, edges toward the display case.
6 A ROSALIND, 40s, a plainclothes cop, pretends to look at saxophones.
7 A DUKE, 50s, a large man in a leather vest, blocks the door.
8 D MORDECAI: We're closed!
9 D GINA: The banner says sale!
10 D TREY: I just want the ring.
11 D ROSALIND: Which ring?
12 D TREY: The one in the case.
13 D DUKE: Nobody leaves.
14 D MORDECAI: Nobody enters, Duke! We're closed!
15 D GINA: Mordecai, my grandmother's locket --
16 D TREY: It's not for sale, it's for me --
17 D MORDECAI: Everybody shut up!
* 18 A ¶ Silence.
19 A Then Rosalind flashes her badge.
20 D ROSALIND: Police. Everybody hands up.
21 A ¶ Mordecai lifts his hands.
22 A Gina lifts her ticket.
23 A Trey lunges for the case.
24 A Duke steps aside to let Rosalind through.
25 D MORDECAI: Duke!
26 D GINA (overlapping): TREY!
27 D DUKE (simultaneously): She's a cop!
28 A ¶ Trey smashes the glass.
29 A Grabs the ring.
30 A Bolts.
31 D ROSALIND (over her shoulder): Duke, stop him!
32 A ¶ Duke grins and sits down on the nearest tuba case.

### SCENE s01643 | INT. LUMBER MILL OFFICE, DEPOSITION - DAY
Detected names (may be incomplete or contain aliases): ATTORNEY PHILOMENA OKAFOR-LANE, CORNELIUS HARGROVE
* 1 A ¶ Wood-paneled walls.
* 2 A Sawdust in the corners.
* 3 A A rattling air conditioner.
* 4 A A long folding table with a court reporter's empty chair.
5 A ¶ ATTORNEY PHILOMENA OKAFOR-LANE, 40s, in a good grey suit, flips through a thick folder.
6 A Her pen taps the rim of a mug.
7 A She is very still.
* 8 A ¶ The door opens.
9 A ¶ CORNELIUS HARGROVE, 60s, work boots, flannel shirt under a blazer too tight at the shoulders, steps inside.
10 A He eases into the chair opposite.
11 D PHILOMENA: Mr. Hargrove. Thank you for coming.
12 D CORNELIUS: You didn't give me a choice.
13 D PHILOMENA: No. I didn't.
14 D CORNELIUS: Is the reporter coming?
15 D PHILOMENA: She's late. We'll begin.
16 A ¶ She turns on a small recorder.
* 17 A Sets it between them.
18 D PHILOMENA [CONT'D]: State your name.
19 D CORNELIUS: Cornelius Hargrove.
20 D PHILOMENA: Employment?
21 D CORNELIUS: Foreman, Pinecrest Lumber. Thirty-one years.
22 D PHILOMENA: On March ninth, were you on shift?
23 D CORNELIUS: I was.
24 D PHILOMENA: Did you see Mr. Dunmore fall?
25 D CORNELIUS: I saw a lot of things.
26 D PHILOMENA: Mr. Hargrove.
27 D CORNELIUS: Yes. I saw him fall.
28 D PHILOMENA: From the catwalk?
29 D CORNELIUS: From the catwalk.
30 D PHILOMENA: Was the railing intact?
31 D CORNELIUS: No.
32 D PHILOMENA: Had you reported it?
33 D CORNELIUS: Four times.
34 D PHILOMENA: To whom?
35 D CORNELIUS: To the owner. To his brother. To the safety man. To the priest.
36 D PHILOMENA: The priest?
37 D CORNELIUS: I tell him everything.
38 A ¶ She smiles, almost.
39 A Cornelius does not.
40 D PHILOMENA: And what did the owner say?
41 D CORNELIUS: He said wood bends.
42 D PHILOMENA: Wood bends.
43 D CORNELIUS: But men break.
* 44 A ¶ The air conditioner clatters.
45 A Philomena closes the folder.
46 A Cornelius stares at the recorder as if it were a gun.
47 D PHILOMENA: Mr. Hargrove, would you be willing to say that in open court?
48 D CORNELIUS: I'd rather not.
49 D PHILOMENA: Why?
50 D CORNELIUS: Because I'd lose my pension.
51 D PHILOMENA: You might lose more by staying silent.
52 D CORNELIUS: You don't know that.
53 D PHILOMENA: I know that Mr. Dunmore's widow sits in the next room.
54 A ¶ Cornelius shifts.
* 55 A His chair squeaks.
56 A He looks at the door.
57 D CORNELIUS: She's here?
58 D PHILOMENA: She asked to sit in.
59 D CORNELIUS: She shouldn't.
60 D PHILOMENA: She wanted to look at you.
61 A ¶ He stands.
* 62 A The chair scrapes.
63 A He paces to the window, back, then stops at the table, hands flat on the wood.
64 D CORNELIUS: I can't do this.
65 D PHILOMENA: You already are.
66 A ¶ He slams his palm on the table.
* 67 A The recorder jumps.
68 A Philomena doesn't flinch, but she catches the mug before it tips.
69 A ¶ They stare at each other.
70 A Then, slowly, both reach for the recorder at once, and their hands touch on the plastic.
71 D CORNELIUS [CONT'D] (quietly): Turn it on again.
72 A ¶ Philomena presses the button.
* 73 A The red light blinks.
74 D CORNELIUS [CONT'D]: My name is Cornelius Hargrove. I saw him fall.

### SCENE s01644 | EXT. SALT DESERT - GENERATION SHIP HULL - DAWN
Detected names (may be incomplete or contain aliases): IXCHEL, AMADI
* 1 A ¶ A ship the size of a mountain lies on its side in a white plain of salt.
* 2 A Its hull, once silver, is rust-red and blistered.
* 3 A Cables hang like dead vines.
* 4 A The sky is a bruised violet.
* 5 A Two moons, one faint, one bright.
* 6 A ¶ At the foot of the hull, a rope ladder dangles.
* 7 A Beyond it, a gaping breach, dark as a throat.
8 A ¶ IXCHEL, 30s, wiry, wrapped in a patchwork cloak the color of dust, scales the ladder one handhold at a time.
9 A A pack of glass tubes clinks on her back.
10 A Her face is scarred with the faint blue lines of old ship-tattoos, a map no one living can read.
11 A ¶ At the top, she hauls herself into the breach.
12 A Waits for her eyes to adjust.
13 A ¶ AMADI, 60s, sits cross-legged in the shadows, so still he seems part of the wall.
14 A His skin is dark, his head shaved, his eyes the pale green of old copper.
* 15 A A single lantern glows beside him, powered by something that hums.
16 D IXCHEL: You're real.
17 D AMADI: So are you.
18 D IXCHEL: They said the last one died.
19 D AMADI: They say many things.
20 A ¶ She steps closer.
* 21 A The floor, once a corridor, is now a slope of salt-crusted tile.
22 D IXCHEL: I came to see the Bridge.
23 D AMADI: The Bridge is gone.
24 D IXCHEL: The maps say --
25 D AMADI: Maps were written by people who left.
26 A ¶ She sets down her pack.
27 A Kneels.
28 A He studies her tattoos with open interest, like a man reading a letter from a village he forgot.
29 D AMADI [CONT'D]: Whose line are you?
30 D IXCHEL: The Surveyors.
31 D AMADI: Ah. They always came back for a last measurement.
32 D IXCHEL: We came back for the seeds.
33 D AMADI (softly): There are no seeds.
34 D IXCHEL: There must be.
35 D AMADI: There was a garden. Then there was a long winter. Then there was me.
36 A ¶ He lifts the lantern.
37 A The light sweeps a wall, and she sees it: a mural of green, thousands of tiny painted leaves, fading but not gone.
38 D IXCHEL: You painted this.
39 D AMADI: Every day, for forty years.
40 D IXCHEL: Why?
41 D AMADI: So that someone would come and see a garden.
42 A ¶ She touches the wall.
43 A Her hand leaves a dark print in the dust.
44 A Then, slowly, she opens the pack and begins unpacking her glass tubes: soil, water, a single vial of grain.
45 D IXCHEL: Then let me plant what you remember.
46 A ¶ Amadi does not answer.
47 A He lowers the lantern and begins, very slowly, to weep.

### SCENE s01645 | INT. DRIVE-IN PROJECTION BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): ROSARIO VEGA, BERNADETTE
* 1 A ¶ Cramped.
* 2 A A hot projector throws white light through a slot.
* 3 A Reels, ashtrays, a cracked radio.
* 4 A Below, a lot of dark cars and a giant screen.
5 A ¶ ROSARIO VEGA, 40s, a scarred shift manager, leans over the projector.
6 A BERNADETTE, 30s, her new hire, stands by the door with a trembling hand on a canvas bag.
7 D ROSARIO: You're early.
8 D BERNADETTE: I'm always early.
9 D ROSARIO: That's what worries me.
10 A ¶ Bernadette sets the bag on a stool.
11 A Rosario eyes it.
12 D ROSARIO [CONT'D]: That's heavy.
13 D BERNADETTE: Sandwiches.
14 D ROSARIO: Sandwiches don't clink.
15 D BERNADETTE: These are fancy.
16 D ROSARIO (to the room): Everybody hears this? She brought fancy sandwiches.
* 17 A ¶ Nobody.
* 18 A Just the projector's hum.
19 A ¶ Rosario reaches for the bag.
20 A Bernadette catches her wrist.
21 D BERNADETTE: Don't.
22 D ROSARIO: Why not?
23 D BERNADETTE: Because she'll know.
24 D ROSARIO: Who?
25 D BERNADETTE: The one who told me to bring it.
26 D ROSARIO (muttering): Always somebody.
27 A ¶ She yanks free.
28 A Unzips the bag.
* 29 A Inside, three stacks of cash and a small black pistol.
30 D ROSARIO [CONT'D]: That's not a sandwich.
31 D BERNADETTE: No.
32 D ROSARIO: Whose money?
33 D BERNADETTE: Ours.
34 D ROSARIO: Mine and yours?
35 D BERNADETTE: Hers and hers.
36 A ¶ Rosario turns slowly.
37 A Bernadette's hand drops to her pocket.
38 D ROSARIO: Is that your gun, or mine?
39 D BERNADETTE: Hers.
40 D ROSARIO: Honey, whose is "hers"?
* 41 A ¶ The projector clicks.
* 42 A A new reel begins.
* 43 A On the lot below, a hundred cars flash blue in the movie's light, and a voice from the speakers booms: "COMING ATTRACTIONS."
44 D ROSARIO [CONT'D] (to herself): Good title.

### SCENE s01646 | INT. FISH MARKET AUCTION FLOOR - EARLY MORNING
Detected names (may be incomplete or contain aliases): MAUDE PETTIGREW, FERDIE, LOMBARD, ^FERDIE, SOLD
* 1 A ¶ Crushed ice.
* 2 A Crates of silver mackerel.
* 3 A A scale.
* 4 A A bell.
* 5 A The din of a hundred voices that are not in this scene.
6 A ¶ MAUDE PETTIGREW, 50s, galoshes and a straw hat with a feather in it, grips a number paddle.
7 A FERDIE "FERDINAND" LOMBARD, 50s, a cravat under his oilskins, grips his.
8 D MAUDE: Ferdinand Lombard, put that down.
9 D FERDIE: I will not, Maudie.
10 D MAUDE: It's my tuna.
11 D FERDIE: It's the market's tuna.
12 D MAUDE: I saw it first.
13 D FERDIE: You saw it second. I saw it from the harbor.
14 D MAUDE (to the crowd): Did anyone else see a man claim a tuna from the harbor?
15 D FERDIE (to the crowd): Did anyone else see a woman in a feather hat claim anything?
* 16 A ¶ An invisible auctioneer raps a gavel.
17 A Both snap their paddles up.
18 D MAUDE: Two hundred!
19 D FERDIE: Two hundred!
20 D MAUDE: Two-fifty!
21 D FERDIE: Two-fifty!
22 D MAUDE: You are impossible!
23 D FERDIE: You are impossible!
* 24 A ¶ The gavel bangs.
25 A They speak at the same instant.
26 D MAUDE: I'm bidding for my sister's wedding.
27 D ^FERDIE: I'm bidding for my sister's wedding.
28 A ¶ They stop.
29 A Stare at each other.
30 A Slowly lower their paddles.
31 D MAUDE: Your sister's Cordelia?
32 D FERDIE: Your sister's Cordelia?
33 D MAUDE: She's marrying a Lombard.
34 D FERDIE: She's marrying a Pettigrew.
35 D MAUDE: Then we're...
36 D FERDIE: Cousins-in-law.
37 D MAUDE (to herself): Oh, dear.
38 D FERDIE: Split the tuna?
39 D MAUDE: Split the tuna.
40 A ¶ They shake hands.
* 41 A The gavel falls.
42 A SOLD, says the unseen auctioneer, to both.

### SCENE s01647 | INT. RIVERBOAT CALLIOPE ROOM - NIGHT
Detected names (may be incomplete or contain aliases): CAPTAIN PRUDENCE LOCKWOOD, JUBAL, TENNYSON
* 1 A ¶ A cramped brass chamber beneath the smokestacks.
* 2 A Steam pipes, a keyboard of fat ivory keys, a hundred whistles gleaming in the lamplight.
* 3 A Through a port window, black river water slides by.
4 A ¶ CAPTAIN PRUDENCE LOCKWOOD, 50s, braided cuffs, a cigar gone cold, leans against the pipes with her arms folded.
5 A She watches the boy at the keys.
6 A ¶ JUBAL, 17, bare feet, sleeves rolled, sweats at the calliope.
7 A He plays a hymn badly, then well, then badly again.
8 A ¶ In the corner, TENNYSON, 60s, a gambler in a black frock coat, slouches in a barrel chair with a pistol resting on his knee.
9 A He is not listening to the music.
10 D PRUDENCE: Jubal, stop.
* 11 A ¶ The calliope sighs to silence.
* 12 A Steam hisses.
13 A Jubal turns, wiping his hands on his shirt.
14 D JUBAL: Yes, Captain.
15 D PRUDENCE: Tell Mr. Tennyson what you told me this morning.
16 D JUBAL: About the crates?
17 D PRUDENCE: About the crates.
18 D TENNYSON (not moving): Let the boy speak, Prudence.
19 D PRUDENCE: He's speaking.
20 D JUBAL: I loaded forty-one crates at St. Louis, sir. Marked flour. They came out forty-one at Cairo, marked flour. But the ones at Cairo, they were light.
21 D TENNYSON: Light.
22 D JUBAL: Like they had nothing but air in 'em.
23 D TENNYSON: Flour is light, son.
24 D JUBAL: Not that light.
25 D TENNYSON: How would you know?
26 D JUBAL: I carried three hundred sacks of it for my father before he died.
27 A ¶ Tennyson smiles, thin.
28 A Studies the pistol.
29 D TENNYSON: Captain, your boy has sharp eyes.
30 D PRUDENCE: He has sharp ears too.
31 D TENNYSON: Which brings me to my question. What did he hear?
32 D JUBAL: Hear?
33 D PRUDENCE: He heard you in the hold, Mr. Tennyson. Last Tuesday. Opening crates.
34 D TENNYSON: Did he.
35 D PRUDENCE: He told me you were counting something. Not flour.
36 D TENNYSON: I count many things, Captain. Ducats. Dealers. Debts.
37 D PRUDENCE: Gold.
* 38 A ¶ A long silence.
* 39 A The river hisses along the hull.
40 A Jubal's hands, still on the keys, tremble.
41 D TENNYSON (softly): Boy. Play something.
42 D JUBAL: Sir?
43 D TENNYSON: Something loud.
44 A ¶ Jubal looks at Prudence.
45 A She nods, almost imperceptibly.
46 A He turns back and brings both hands down on the keys.
* 47 A The calliope screams into the night, a great, shrieking chord that rattles the pipes.
48 A ¶ Tennyson rises.
49 A He doesn't raise the pistol.
50 A He walks to the port and looks out at the river.
51 D TENNYSON [CONT'D] (over the noise): It was a good run, Prudence.
52 D PRUDENCE (over the noise): It was.
53 D TENNYSON: You'd have made a fine partner.
54 D PRUDENCE: I made a better captain.
55 A ¶ He laughs, once.
56 A Tucks the pistol into his coat.
57 A Steps through the door and onto the deck.
* 58 A The calliope plays on.
59 A ¶ Jubal keeps playing until the last of the steam gives out.
60 A In the silence after, he looks up.
61 D JUBAL: Captain?
62 D PRUDENCE: Yes, Jubal?
63 D JUBAL: Was that a hymn?
64 D PRUDENCE: Close enough.
