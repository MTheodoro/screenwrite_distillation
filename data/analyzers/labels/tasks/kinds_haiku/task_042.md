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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0142.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01402 | INT. FEDERAL COURTHOUSE - JURY DELIBERATION ROOM - DAY
Detected names (may be incomplete or contain aliases): GUS, PELLETIER, DELPHINE OKAFOR-ROSS, BUZZ, TEMPLETON, ISADORA FLINT, BAILIFF
* 1 A ¶ A long oak table.
* 2 A Water pitcher.
* 3 A A window with the blinds half drawn.
* 4 A Legal pads scattered like leaves.
5 A ¶ Four jurors remain: a retired schoolteacher, a night-shift nurse, a mechanic, and a young law student.
* 6 A They have been here since nine.
7 A ¶ AUGUSTINE "GUS" PELLETIER, 60s, retired teacher, sits at the head with his reading glasses in his lap.
8 A DELPHINE OKAFOR-ROSS, 40s, nurse, rubs her temples.
9 A MARCUS "BUZZ" TEMPLETON, 50s, mechanic, leans back until his chair creaks.
10 A And ISADORA FLINT, 20s, law student, sits ramrod straight, pen poised.
11 D GUS: We've been going in circles.
12 D BUZZ: We've been going in squares.
13 D DELPHINE: Buzz, please.
14 D BUZZ: I'm just saying. Different shape.
15 D ISADORA: Gus, can I propose something?
16 D GUS: Of course, Isadora.
17 D ISADORA: We take a fresh vote. Anonymous. Written.
18 D BUZZ: We did that.
19 D ISADORA: We did a show of hands.
20 D BUZZ: Same thing.
21 D ISADORA: It really isn't.
22 A ¶ Delphine tears four slips from a legal pad.
23 A Passes them around.
* 24 A Pens scratch.
* 25 A Slips are folded and slid across the table.
26 A ¶ Gus gathers them.
27 A Unfolds one.
28 A Another.
29 A Reads.
30 A His eyebrows lift.
31 D GUS: Three guilty. One not.
32 D BUZZ: Who's the holdout?
33 D DELPHINE: It's anonymous, Buzz.
34 D BUZZ: I can count. It's you, Delphine.
35 D DELPHINE: It is not.
36 D BUZZ: Then it's you, Isadora.
37 D ISADORA: I voted guilty.
38 D BUZZ: So did I. So that leaves...
39 A ¶ All three turn slowly to look at Gus.
40 A He sets down the slips.
41 D GUS: Yes.
42 D BUZZ: You?
43 D GUS: Me.
44 D DELPHINE: Gus, the evidence--
45 D GUS: Was very good. I know.
46 D ISADORA: Then why--
47 D GUS: Because I taught that boy. Fifteen years ago.
* 48 A ¶ Silence.
* 49 A The window blinds tick against the sill.
50 D BUZZ: You never said.
51 D GUS: I wasn't asked.
52 D ISADORA: That's grounds for a mistrial.
53 D GUS: Possibly.
54 D DELPHINE: You should tell the judge.
55 D GUS: I will.
56 D BUZZ (muttering): Well, hell.
57 A ¶ Gus stands.
* 58 A His chair scrapes.
59 A He takes his glasses from his lap and walks to the door, one hand on the frame.
60 D GUS: Delphine, Buzz, Isadora. You have been fair. Thank you.
61 A ¶ He knocks twice on the door.
* 62 A The lock clicks.
63 A A BAILIFF opens it.
64 D GUS [CONT'D]: Bailiff. Please tell Judge Hanratty I need a word.
* 65 A ¶ The door closes behind him.
66 A The three jurors sit in silence.
67 D ISADORA: Well.
68 D DELPHINE: Well.
69 D BUZZ: Anyone want a sandwich?
70 A ¶ Delphine laughs, once, surprised.
71 A Isadora, despite herself, smiles.
72 A Buzz pushes back his chair, stretches, and the three of them let out a breath they have been holding all day.

### SCENE s01403 | INT. CATERING TRUCK - PARKED BEHIND A WEDDING TENT - DAY
Detected names (may be incomplete or contain aliases): CHEF BARNABUS TSUKAMOTO, PETRONELLA VOSKUIJLEN, DEXTER IYAMU, LAVINIA CROFT, REGGIE, PRIMROSE
* 1 A ¶ Steel counters.
* 2 A Trays of canapés.
* 3 A A cake in four tiers lashed to the floor with bungee cords.
4 A ¶ CHEF BARNABUS TSUKAMOTO, 50s, tall white hat, stands at the center of it all.
5 A Sweat drips off his nose into a bowl of crab dip.
* 6 A Nobody mentions it.
7 A ¶ He pushes the bowl across the counter to his sous-chef, PETRONELLA VOSKUIJLEN, 30s, who takes it with a face like stone.
8 A ¶ Behind them, bartender DEXTER IYAMU, 20s, shakes a shaker with the dead-eyed rhythm of a metronome.
9 A And at the door, the wedding planner, MS. LAVINIA CROFT, 40s, taps her earpiece, eyes darting.
10 D LAVINIA (tight smile): Is the cake ready?
11 D BARNABUS: It's ready.
12 D LAVINIA: Is it level?
13 A ¶ Barnabus looks at the cake.
* 14 A The cake leans, slightly, toward the door.
15 A Dexter stops shaking.
16 D BARNABUS: Level enough.
17 A ¶ Petronella sets the dip down and, without a word, slides a wooden spoon under the bottom tier.
18 A Barnabus clears his throat.
19 D LAVINIA: I'm hearing ten minutes.
20 D BARNABUS: We'll be there in nine.
21 D LAVINIA: Ten.
22 D BARNABUS: Nine and a half.
23 A ¶ Lavinia nods.
24 A Taps her earpiece.
25 A Her eyes flick to the cake again, and then to Barnabus, and she goes out.
* 26 A The door swings shut.
* 27 A ¶ Silence.
28 A Then Dexter exhales.
29 D DEXTER: She knows.
30 D PETRONELLA: She doesn't know.
31 D DEXTER: She knows.
32 D BARNABUS: She suspects.
33 A ¶ Petronella jams another spoon under the tier.
* 34 A The cake groans.
* 35 A A sugar rose slides off the top and drops onto the floor.
36 A ¶ Everyone stares at it.
37 A Dexter picks it up.
38 A Eats it.
39 D BARNABUS [CONT'D]: Dexter.
40 D DEXTER: Evidence.
41 A ¶ Barnabus closes his eyes.
42 A Pinches the bridge of his nose.
43 A His hat has slumped sideways.
* 44 A ¶ A KNOCK.
45 A The door cracks open and a head pops in.
46 A THEODORE "REGGIE" PRIMROSE, 30s, the groom, white tuxedo, a flushed and dazzled grin.
47 D REGGIE: Hey! Just wondering how's it going?
48 D PETRONELLA: Fine.
49 D DEXTER: Wonderful.
50 D BARNABUS: Magnificent.
51 A ¶ Reggie beams.
52 A Looks at the cake.
53 A His smile slowly falters.
54 D REGGIE: Is it... meant to lean?
* 55 A ¶ Nobody breathes.
* 56 A The cake sags another inch.
57 D BARNABUS: It's a Pisan reference.
58 A ¶ Reggie considers this.
59 A Then nods, slowly, delighted.
60 D REGGIE: Oh. Oh, that's brilliant.
61 A ¶ He gives them two thumbs up and withdraws.
* 62 A The door closes.
63 A ¶ They stare at each other.
64 A Dexter reaches for a bottle.
65 A Petronella reaches for a spoon.
66 A And together, they lift the cake.

### SCENE s01404 | INT. PAWNSHOP - BACK ROOM - NIGHT
Detected names (may be incomplete or contain aliases): MOE, LASALLE, ZOFIA KRAWCZYK, RECORDING
* 1 A ¶ Shelves of guitars, watches, and wedding rings under a single hanging bulb.
* 2 A A poker table with a half-played hand still on it.
3 A ¶ MORDECAI "MOE" LASALLE, 50s, pawnbroker, shuffles a deck, humming.
4 A Across from him, a young woman, ZOFIA KRAWCZYK, 20s, drums her fingers.
5 D MOE: Zofia. Sweetheart. You came alone.
6 D ZOFIA: Like you said.
7 D MOE: Good girl.
8 D ZOFIA: I'm not your girl, Moe.
9 D MOE: Everyone's somebody's girl.
10 A ¶ He deals.
11 A She doesn't touch her cards.
12 D MOE [CONT'D] (to the empty room): Anyone else want in?
* 13 A ¶ Silence.
14 A She smiles, thin.
15 D ZOFIA: You think I'm stupid.
16 D MOE: I think you're tired.
17 D ZOFIA: I'm tired of you, Moe.
18 A ¶ She reaches under the table.
19 A Moe's shuffling stops.
20 D MOE (muttering): Oh, don't.
21 A ¶ Zofia lays a small recorder on the felt.
22 A Presses play.
23 D RECORDING [V.O.]: ...and I told him, if the Kessler job goes wrong, it's on Zofia.
24 A ¶ Moe stares at the recorder.
25 A Then, very slowly, he laughs.
26 D MOE: Smart girl.

### SCENE s01405 | INT. VINEYARD TASTING ROOM - AFTERNOON
Detected names (may be incomplete or contain aliases): CLAUDETTE ARMSTRONG-BEAUMONT, GREGOR VANDERWAAL
* 1 A ¶ Golden light through tall windows.
* 2 A Rows of oak barrels line the back wall.
* 3 A A long bar of reclaimed wood, a few empty glasses, a bucket of ice.
4 A ¶ CLAUDETTE ARMSTRONG-BEAUMONT, 30s, in a linen shirt, wipes down the bar.
5 A She hums.
6 A She's happy to be alone.
* 7 A ¶ The door chimes.
8 A In steps GREGOR VANDERWAAL, 30s, sunglasses on his head, a messenger bag across his chest.
9 A He pauses on the threshold, as if he has forgotten what he came for.
10 D CLAUDETTE: We're closed.
11 D GREGOR: I know.
12 D CLAUDETTE: The sign says closed.
13 D GREGOR: I read the sign.
14 D CLAUDETTE: And?
15 D GREGOR: I wanted to say something to you.
16 A ¶ She keeps wiping.
17 A Slower now.
18 A Her back stiffens, and her eyes find his reflection in the glass behind the bar.
19 D CLAUDETTE: Then say it.
20 D GREGOR: Can I sit?
21 D CLAUDETTE: Suit yourself.
22 A ¶ He sits on a stool two down from where she works.
23 A Sets down his bag.
24 A Straightens it.
25 A Straightens it again.
26 D GREGOR: I've rehearsed this for eleven months.
27 D CLAUDETTE: Then it should be perfect.
28 D GREGOR: It isn't.
29 D CLAUDETTE: Go on.
30 D GREGOR: When you left, I told everyone it was mutual.
31 D CLAUDETTE: It was.
32 D GREGOR: It wasn't.
33 D CLAUDETTE: I said it was.
34 D GREGOR: You said it because I couldn't.
35 A ¶ She folds the rag.
36 A Lays it flat.
37 A Stares at it.
38 D CLAUDETTE: I got a job in Napa. I took it.
39 D GREGOR: I know.
40 D CLAUDETTE: You could have asked me to stay.
41 D GREGOR: I was afraid you'd say yes.
42 D CLAUDETTE: That's absurd.
43 D GREGOR: I know.
44 D CLAUDETTE: What were you afraid of?
45 D GREGOR: That you'd stay and resent me.
46 D CLAUDETTE: I wouldn't have.
47 D GREGOR: You would have, a little.
48 A ¶ She almost smiles.
49 A Catches it.
50 A Turns to the barrels, hands flat on the counter, her back to him.
51 D CLAUDETTE: It's a good vintage this year.
52 D GREGOR: I'm sure it is.
53 D CLAUDETTE: I made the blend myself.
54 D GREGOR: Of course you did.
55 D CLAUDETTE: Do you want to taste it?
* 56 A ¶ A long beat.
57 A He doesn't answer.
58 A She turns.
59 A Takes down a glass, pours a splash of dark red, and slides it across the bar.
60 A ¶ He lifts it.
61 A Smells.
62 A Tastes.
63 A His eyes close.
64 D GREGOR: Plums.
65 D CLAUDETTE: And?
66 D GREGOR: Something smoky.
67 D CLAUDETTE: Cedar. From the barrel.
68 D GREGOR: It's wonderful.
69 D CLAUDETTE: It's slightly overworked.
70 D GREGOR: Don't undersell it.
71 D CLAUDETTE: Don't flatter me.
72 D GREGOR: Claude.
73 D CLAUDETTE: Don't call me that.
74 D GREGOR: Claudette.
75 D CLAUDETTE: Yes.
76 D GREGOR: Did you see my letters?
77 D CLAUDETTE: I saw them.
78 D GREGOR: Did you read them?
79 A ¶ She turns away again.
80 A Reaches under the bar.
81 A Brings out a shoebox, wrapped in twine, its lid curled from handling.
82 A She sets it between them.
83 A ¶ He stares at it.
84 A She stares at him.
85 A Neither moves.
86 D CLAUDETTE [CONT'D]: All of them.
87 A ¶ His hand reaches out.
88 A Covers hers.
* 89 A The box sits beneath their joined fingers.
* 90 A ¶ The door chimes again behind them.
91 A A delivery man in a brown uniform sticks his head in, sees the pair of them frozen, and quietly withdraws.

### SCENE s01406 | INT. APARTMENT - KITCHEN - DAWN
Detected names (may be incomplete or contain aliases): BERNADETTE OYELARAN-STACK, NURSE
* 1 A ¶ A small kitchen.
* 2 A Linoleum.
* 3 A A kettle on the stove, steam rising.
* 4 A Two mugs on the counter, one chipped.
* 5 A A coat hangs on the back of the door, a man's coat, gray wool.
6 A ¶ BERNADETTE OYELARAN-STACK, 60s, in a bathrobe, stands at the sink with her hands under the tap.
* 7 A The water runs a long time.
8 A She doesn't wash anything.
* 9 A ¶ The phone on the wall rings.
* 10 A Once.
* 11 A Twice.
* 12 A Three times.
13 A She lets it.
14 A Finally she dries her hands on the robe, reaches over, and picks it up.
15 D BERNADETTE: Hello.
16 D NURSE [V.O.] (over phone): Mrs. Stack? This is Carol, from the hospice.
17 D BERNADETTE: Yes.
18 D NURSE [V.O.] (over phone): I'm so sorry to call so early.
19 D BERNADETTE: That's all right.
20 D NURSE [V.O.] (over phone): He passed about an hour ago. Very peacefully.
21 A ¶ Bernadette nods.
22 A Looks at the coat on the door.
23 A Looks at the two mugs.
24 D BERNADETTE: Thank you for telling me.
25 D NURSE [V.O.] (over phone): Would you like us to send someone?
26 D BERNADETTE: No. Not yet.
27 D NURSE [V.O.] (over phone): Is there anyone with you?
28 D BERNADETTE: I'm fine.
29 A ¶ She hangs up.
30 A Stands very still.
* 31 A The kettle begins to whistle, thin and rising.
32 A ¶ She turns off the burner.
33 A Takes the chipped mug from the counter.
34 A Pours.
* 35 A The tea steams.
36 A She sets it in front of the empty chair at the table and sits across from it.
* 37 A ¶ The whistle fades.
38 A She wraps both hands around the other mug and holds it close.

### SCENE s01407 | INT. VICTORIAN SEANCE PARLOR - NIGHT
Detected names (may be incomplete or contain aliases): MADAME ODILE FONTAINE-VANCE, ALISTAIR DRAKE, PRUDENCE MILLWARD, VOICE
* 1 A ¶ Velvet drapes, a round table, a crystal ball veiled in black gauze.
* 2 A A single candle gutters.
* 3 A Rain taps the windows.
4 A ¶ MADAME ODILE FONTAINE-VANCE, 50s, turban and shawl, sits with her palms flat on the table, eyes closed.
5 A Across from her, ALISTAIR DRAKE, 40s, widower, grips the edge of his chair.
6 A And in the corner, her assistant, a nervous girl of twenty, PRUDENCE MILLWARD, tends a hidden gramophone.
7 D ODILE: Spirits of the beyond. We call upon you.
* 8 A ¶ The candle flickers.
* 9 A A low moan sounds from beyond the drapes.
10 D ALISTAIR (whispering): Is it her?
11 D ODILE: Hush.
* 12 A ¶ The moan rises.
* 13 A The table shudders.
14 A Alistair's knuckles whiten.
15 D VOICE [V.O.] (hollow, distant): Alistair...
16 A ¶ He gasps.
17 A Half rises.
18 D ALISTAIR: Margaret?
19 D VOICE [V.O.] (hollow, distant): I am here, my love.
20 A ¶ Prudence, in the corner, goes pale.
21 A She mouths at Odile, shaking her head.
22 A Not me.
23 A Odile's eyes snap open.
24 A She stares at the gramophone, which is silent.
* 25 A ¶ The voice comes again, deeper, nearer.
26 D VOICE [V.O.] (hollow, distant): Tell the fraud to stop.
27 A ¶ Odile's hands fly from the table.
28 A Prudence knocks over her stool.
29 D ALISTAIR (slowly): That's not funny, Madame.
30 D ODILE: It is not me.
* 31 A ¶ The candle blows out.
* 32 A Darkness.
* 33 A Somewhere a window bangs open, and the drapes snap like sails.

### SCENE s01408 | INT. STATE SUPREME COURT - APPELLATE CHAMBER - DAY
Detected names (may be incomplete or contain aliases): CHIEF JUSTICE OKSANA PETRENKO, DESMOND CARUTHERS, NADINE ASHWORTH-KIM
* 1 A ¶ Marble, mahogany, a high bench.
* 2 A Cameras off.
* 3 A A single pitcher of water sweats at the lectern.
4 A ¶ CHIEF JUSTICE OKSANA PETRENKO, 60s, white hair pinned tight, sits alone on the bench with a pen balanced between two fingers.
5 A At the lectern, DESMOND CARUTHERS, 50s, rumpled suit, sweats through his notes.
6 A At the state's table, NADINE ASHWORTH-KIM, 40s, charcoal suit, a thick binder squared before her.
7 D DESMOND: Your Honor, the statute is plain.
8 D OKSANA: Plain to whom, Mr. Caruthers?
9 D DESMOND: To any reasonable reader.
10 D OKSANA: Are you reasonable?
11 D DESMOND: I try to be.
12 D OKSANA: That's not an answer.
13 D DESMOND: It's the only honest one I have.
14 A ¶ She almost smiles.
15 A Taps the pen on the bench.
16 D OKSANA: Take me through section four.
17 D DESMOND: Section four governs notice.
18 D OKSANA: And your client?
19 D DESMOND: Received none.
20 D OKSANA: Not even a letter?
21 D DESMOND: A letter was mailed. It was never delivered.
22 D OKSANA: Mailed to where?
23 D DESMOND: An address where my client hadn't lived in six years.
24 D OKSANA: Whose fault was that?
25 D DESMOND: The county's. They had the forwarding card.
26 A ¶ Nadine's pen stops moving.
27 A Oksana sees it.
28 D OKSANA: Ms. Ashworth-Kim. You have something to say?
29 D NADINE: Not yet.
30 D OKSANA: Then Mr. Caruthers continues.
31 D DESMOND: Thank you. Your Honor, if the court allows this, thousands of cases reopen.
32 D OKSANA: I'm aware of that.
33 D DESMOND: And I'd ask the court to consider whether thousands of cases were ever properly closed.
* 34 A ¶ A silence.
35 A Oksana sets down her pen.
36 D OKSANA: That's a bold sentence.
37 D DESMOND: It's a true one.
38 D OKSANA: Sit down, Mr. Caruthers.
39 A ¶ He gathers his papers and retreats.
40 A Nadine rises, walks to the lectern, and opens her binder.
41 A She does not look at it.
42 D NADINE: May it please the court.
43 D OKSANA: It might. Go ahead.
44 D NADINE: The forwarding card was misfiled.
45 D OKSANA: By whom?
46 D NADINE: By a clerk who no longer works for the county.
47 D OKSANA: That's not an excuse.
48 D NADINE: It's not meant as one. It's an explanation.
49 D OKSANA: They sound similar from up here.
50 D NADINE: They feel different from down here.
51 A ¶ Oksana's eyebrow lifts.
52 A Desmond, at his table, almost laughs and then stops himself.
53 D NADINE [CONT'D]: The state asks the court to apply the harmless error doctrine.
54 D DESMOND: ^ It was not harmless!
55 D NADINE: ^ It was administrative!
56 D OKSANA: Both of you.
57 A ¶ They stop.
* 58 A The room is very quiet.
59 D OKSANA [CONT'D]: Mr. Caruthers, your client lost his house.
60 D DESMOND: Yes.
61 D OKSANA: Ms. Ashworth-Kim. He lost his house.
62 A ¶ Nadine's hand tightens on the lectern.
63 A For a moment her composure slips.
64 D NADINE (quietly): Yes. He did.
65 A ¶ Oksana lowers her glasses.
66 A Looks at one, then the other.
67 D OKSANA: We'll take it under advisement.
68 A ¶ She raps once with her pen and rises.
69 A The two lawyers rise with her, and for a moment, across the length of the room, they look at each other like the last two people in a lifeboat.

### SCENE s01409 | INT. BOXING GYM - LOCKER ROOM - NIGHT
Detected names (may be incomplete or contain aliases): MANUEL, SERRANO, IGNATIUS OBI-MARTINEZ, TALL MAN, AMBROSE
* 1 A ¶ Steam.
* 2 A Rusted lockers.
* 3 A A bare bulb swings from a chain.
* 4 A The smell of liniment and old leather.
5 A ¶ MANUEL "THE ANVIL" SERRANO, 30s, sits on a bench with gloved hands in his lap, staring at the floor.
6 A His trainer, IGNATIUS OBI-MARTINEZ, 60s, kneels in front of him, taping a wrist with absent care.
7 A ¶ A TALL MAN in a camel coat leans in the doorway.
8 A No one introduced him.
9 A He has been watching for a while.
10 D IGNATIUS: Stay loose.
11 A ¶ Manuel nods.
12 A His eyes do not leave the floor.
13 D IGNATIUS [CONT'D]: Breathe through the nose.
14 A ¶ Manuel breathes.
15 A Ignatius tears the tape with his teeth.
16 A ¶ The Tall Man clears his throat.
17 D TALL MAN: Mr. Serrano.
18 A ¶ Manuel doesn't look up.
19 A Ignatius's hands stop.
20 D TALL MAN [CONT'D]: My name is Ambrose Vance. I represent the promoter.
21 D IGNATIUS: He's got a fight.
22 D AMBROSE: I'm aware.
23 D IGNATIUS: So you can wait outside.
24 D AMBROSE: I can't.
* 25 A ¶ The bulb swings.
* 26 A Manuel's shadow slides across the lockers.
27 A Ignatius rises, one knee cracking, and plants himself between them.
28 D IGNATIUS: Say what you came to say.
29 D AMBROSE: It's about the third round.
30 A ¶ Ignatius and Manuel both go still.
* 31 A The steam hisses from a pipe.
32 D AMBROSE [CONT'D]: Mr. Serrano goes down in the third. The money is already placed.
33 D IGNATIUS: ^ Get out.
34 D MANUEL: ^ Get out.
35 A ¶ They say it at the same time, quiet and level.
36 A Ambrose lifts both hands, palms out, and steps back through the doorway into the corridor.
37 A ¶ Ignatius shuts the door.
38 A Leans against it with his eyes closed.
39 A Manuel finally lifts his head.
40 A His gloved hands, slowly, curl into fists.

### SCENE s01410 | INT. CORPORATE PARKING GARAGE - LEVEL P4 - NIGHT
Detected names (may be incomplete or contain aliases): SOLVEIG HARTMANN-OKORO, VOICE
* 1 A ¶ Concrete pillars striped in yellow.
* 2 A Fluorescent tubes flicker above rows of empty parking bays.
* 3 A A distant elevator dings.
* 4 A Somewhere, a drip.
5 A ¶ SOLVEIG HARTMANN-OKORO, 40s, in a camel coat with a laptop bag over one shoulder, walks fast between the pillars, keys splayed between her knuckles.
6 A She looks like someone who has done this walk a hundred times and never liked it.
* 7 A ¶ Her phone buzzes.
8 A She answers on the second ring, putting it to her ear.
9 D SOLVEIG: Yes.
10 D VOICE [V.O.] (over phone): Are you at your car?
11 D SOLVEIG: Nearly. Who is this?
12 D VOICE [V.O.] (over phone): A friend. Do you see the gray sedan?
13 A ¶ She stops.
14 A Scans the garage.
* 15 A A gray sedan sits two rows ahead, engine off.
16 D SOLVEIG: I see it.
17 D VOICE [V.O.] (over phone): Don't go near it.
18 D SOLVEIG: Why not?
19 D VOICE [V.O.] (over phone): Because there's a man in the back seat.
20 A ¶ Her breath catches.
21 A She does not move.
22 A Under the flicker of the lights she sees, very faintly, a shape in the window of the sedan.
23 D SOLVEIG (whispering): How do you know?
24 D VOICE [V.O.] (over phone): Because I'm standing behind you.
25 A ¶ She spins.
* 26 A Nothing.
* 27 A Just a pillar and a puddle of oil, shining.
28 A ¶ The phone drops from her ear.
* 29 A Behind her, the sedan's door clicks open.

### SCENE s01411 | INT. REGIONAL AIRPORT - GATE B - NIGHT
Detected names (may be incomplete or contain aliases): FINN LARKSPUR-MBEKI, MINA, OSTROWSKI, GRANDPA TOBIAS, GRANDMA ESME ADEBAYO, TANNOY
* 1 A ¶ Empty chairs, a dim terminal.
* 2 A A departure board flickers: ALL FLIGHTS DELAYED.
* 3 A Rain streaks the windows onto a runway of dark glass.
4 A ¶ FINN LARKSPUR-MBEKI, 30s, rumpled, sits with a coffee and a boarding pass, scribbling in a notebook.
5 A ¶ Across the aisle, WILHELMINA "MINA" OSTROWSKI, 30s, clutches a small suitcase and stares at the floor, thumb worrying a loose ring on her finger.
6 A ¶ Two seats down, an old couple, GRANDPA TOBIAS and GRANDMA ESME ADEBAYO, 70s, share a thermos, bickering softly.
7 D TANNOY [V.O.]: Attention passengers. Flight 418 to Denver is delayed until further notice.
* 8 A ¶ A collective groan.
9 A Finn caps his pen.
10 D FINN (to the room): Of course it is.
11 A ¶ Mina looks up.
12 A Their eyes meet.
13 A She glances away first.
14 D FINN [CONT'D] (to Mina): Long night.
15 D MINA: Seems so.
16 D FINN: You headed to Denver?
17 D MINA: Eventually.
18 D FINN: Me too. Business. You?
19 D MINA: A wedding.
20 D FINN: Whose?
21 D MINA: Mine.
22 A ¶ Finn blinks.
23 A Nods slowly.
24 A Looks at the ring on her finger.
25 D FINN: Congratulations?
26 D MINA: Ask me in Denver.
27 A ¶ He smiles.
28 A She almost does too.
29 A The old couple, across the aisle, are unabashedly listening.
30 D ESME (to Tobias): I told you she was nervous.
31 D TOBIAS: She's not nervous, she's sulking.
32 D ESME: Nervous.
33 D TOBIAS: ^ Sulking.
34 A ¶ They glare at each other.
35 A Mina and Finn share a quiet look, and for the first time, both of them laugh.
36 D FINN: What's his name?
37 D MINA: Gordon.
38 D FINN: Gordon.
39 D MINA: He's very kind.
40 D FINN: That's a good thing.
41 D MINA: It is.
42 D FINN: But?
43 D MINA: But nothing. He's kind.
44 A ¶ She stands.
45 A Walks to the window, her reflection lost against the rain.
46 A Finn watches her back.
47 A He tears a page from his notebook, folds it, hesitates, then puts it in his pocket.
48 D TANNOY [V.O.]: Attention. Flight 418 will board in fifteen minutes.
* 49 A ¶ Silence.
50 A Everyone looks up at the speaker.
51 D MINA (to the window): Fifteen minutes.
52 D FINN: Enough time for a coffee.
53 D MINA: Enough time for anything.
54 A ¶ She turns.
55 A Their eyes meet again.
56 A She crosses back and sits beside him, not across from him.
57 D MINA [CONT'D]: Tell me something true.
58 D FINN: I don't like Denver.
59 D MINA: That's not it.
60 D FINN: I'm going because I'm afraid to stay.
61 D MINA: Of what?
62 D FINN: Of the place I'm supposed to be.
63 A ¶ She breathes out.
64 A Her hand finds his on the armrest.
65 A For a moment neither moves.
66 D TANNOY [V.O.]: Final boarding call for Flight 418.
67 A ¶ The old couple stand, collecting thermos and coats.
68 A Esme pauses at the end of the aisle, looks down at the pair of them.
69 D ESME: Go on, dears. Or don't. But decide.
70 D TOBIAS: Esme.
71 D ESME: ^ What? I'm eighty. I get to say.
72 A ¶ She takes his arm and leads him toward the jetway.
73 A Finn and Mina watch them go.
74 A Then Mina slides the ring off her finger, slowly, and holds it in her open palm between them.
75 D MINA (to herself): Well. Here we are.
76 A ¶ Finn closes her fingers around the ring.
* 77 A The board above them flickers once more and goes dark.

### SCENE s01412 | INT. ORBITAL STATION KESTREL - AIRLOCK - CONTINUOUS
Detected names (may be incomplete or contain aliases): COMMANDER YUSUF AL-RASHID, ENGINEER PRISCA DELACROIX-NWOKO
* 1 A ¶ Red emergency light.
* 2 A The hiss of a failing seal.
* 3 A Frost spreads across the inner door like creeping fingers.
4 A ¶ COMMANDER YUSUF AL-RASHID, 40s, helmet off, grips a cutting torch with both hands and strains against a warped hatch.
5 A Beside him, ENGINEER PRISCA DELACROIX-NWOKO, 30s, wrenches at a valve with a pipe.
6 A Her breath fogs in the thinning air.
7 A ¶ They work together, shoulders touching, a single frantic machine.
* 8 A The hatch groans.
* 9 A A fingertip of vacuum screams through the gap.
10 D YUSUF: Pressure's dropping!
11 D PRISCA: I know!
12 A ¶ They both hit the hatch with their shoulders at the same time.
* 13 A It shudders but holds.
14 A Yusuf swears.
15 A Prisca swings the pipe once more at the valve and it cracks off its mount, trailing coolant in a silver arc.
16 A ¶ They freeze.
17 D PRISCA [CONT'D] (whispering): That was the last one.
18 A ¶ Yusuf drops the torch.
* 19 A It floats, turning slowly in the dim red light.
20 A They stare at it.
21 A At each other.
* 22 A The hatch sighs shut by itself, and the lights go out.

### SCENE s01413 | INT. LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): NORMAN BELLWETHER, LEOCADIA
* 1 A ¶ Rows of washers churning.
* 2 A A flickering sign in the window.
* 3 A The smell of detergent and hot lint.
4 A ¶ NORMAN BELLWETHER, 50s, in pajama pants and a trench coat, folds a towel with military precision.
5 A Two machines over, his daughter, LEOCADIA, 20s, stares at a spinning drum with a duffel bag at her feet.
6 D NORMAN (to himself): Corners to corners.
7 D LEOCADIA: Dad.
8 D NORMAN: Mm.
9 D LEOCADIA: Why are you here?
10 D NORMAN: Your mother said you were.
11 D LEOCADIA: That's not why.
12 D NORMAN: My machine broke.
13 D LEOCADIA: It's two in the morning.
14 D NORMAN: I couldn't sleep.
15 A ¶ She watches the drum.
16 A He folds the towel again, makes a perfect square, sets it on top of a stack.
17 D LEOCADIA: You don't have to follow me around.
18 D NORMAN: I wasn't.
19 D LEOCADIA: You were in the car outside my apartment last night.
20 A ¶ He stops folding.
21 A Looks at the towel as though it might help him.
22 D NORMAN: It was on my way.
23 D LEOCADIA: To what?
24 D NORMAN (to the room): Nowhere. Everywhere.
* 25 A ¶ The machine beeps.
* 26 A Spin cycle ending.
27 A Leocadia opens the door, pulls out a damp bundle, and begins to load a dryer.
28 A Norman moves to help.
29 A She stops him with a look.
30 D LEOCADIA: I'm leaving Friday.
31 D NORMAN: I know.
32 D LEOCADIA: Mom told you?
33 D NORMAN: She didn't have to.
34 A ¶ He takes a sock off the pile, turns it right side out, hands it to her.
35 A She takes it, and he lets his fingers rest against hers a moment too long.
36 D LEOCADIA: Dad.
37 D NORMAN: I'm fine.
38 D LEOCADIA: You're crying.
39 D NORMAN: It's the lint.
40 A ¶ She laughs through her nose.
41 A He turns away, pulls a handkerchief from the trench coat, and blows it with great dignity.
42 D NORMAN [CONT'D] (muttering): Damn lint.
43 A ¶ She loads the rest of the clothes, closes the dryer door, and feeds in quarters one at a time.
* 44 A The drum begins to turn.
45 D LEOCADIA: Sit with me.
46 A ¶ They sit on the long bench in front of the dryer.
* 47 A The clothes tumble in warm circles.
48 D NORMAN: Do you have enough socks?
49 D LEOCADIA: Dad.
50 D NORMAN: I'm only asking.
51 A ¶ Her head tips onto his shoulder.
52 A He freezes, then slowly lets his cheek rest against her hair.

### SCENE s01414 | EXT. DRY CREEKBED - HIGH NOON
Detected names (may be incomplete or contain aliases): SHERIFF ABNER TOLLIVER, PERCY, DUNMORE, ESPERANZA QUILLAN, SILAS DEARBORN-FLYNT
* 1 A ¶ Cracked mud.
* 2 A A burnt wagon tilts on its axle.
* 3 A Buzzards circle high above.
* 4 A A single dead cottonwood throws a thin ribbon of shade.
5 A ¶ SHERIFF ABNER TOLLIVER, 50s, gray mustache, sits on a flat rock and cleans his revolver with a bandanna.
6 A He is in no hurry.
7 A Nearby, his deputy, PERCIVAL "PERCY" DUNMORE, 20s, paces with a rifle across his shoulder, sweating through his shirt.
8 A ¶ Across the dry creek, a woman crouches by the wagon, sifting ash through her fingers.
9 A ESPERANZA QUILLAN, 30s, in a man's hat and a dusty duster, doesn't look up.
10 D PERCY: Sheriff, we've been here an hour.
11 D ABNER: Two.
12 D PERCY: She hasn't moved.
13 D ABNER: Neither have I.
14 D PERCY: She's looking for something.
15 D ABNER: Everyone is.
16 A ¶ Percy shifts the rifle to the other shoulder.
17 A Esperanza stands, brushes her hands, and crosses the creekbed to them with an unhurried step.
18 D ESPERANZA: Afternoon.
19 D ABNER: Ma'am.
20 D ESPERANZA: This your wagon?
21 D ABNER: Used to be.
22 D ESPERANZA: It's a shame.
23 D ABNER: It's the cost of doing business.
24 D ESPERANZA: Whose business?
25 D ABNER: Mine, until Tuesday.
26 A ¶ She nods slowly.
27 A Pulls a folded paper from her pocket, hands it to him.
28 A He reads it, his mustache twitching.
29 A Then he laughs, once, without joy.
30 D ABNER [CONT'D]: Well, I'll be.
31 D PERCY: What is it?
32 D ABNER: Deed to the whole valley.
33 D PERCY: Whose name's on it?
34 D ABNER: Hers.
* 35 A ¶ A new sound.
* 36 A Hooves in the distance.
37 A All three turn.
38 A ¶ A rider emerges from the heat shimmer, big black horse lathered white, a rifle across his saddle.
39 A He reins in at the edge of the creekbed.
40 A SILAS DEARBORN-FLYNT, 60s, face like a hatchet, tips his hat.
41 D SILAS: Sheriff.
42 D ABNER: Silas.
43 D SILAS: You've got my property.
44 D ABNER: Do I?
45 D SILAS: Her.
46 A ¶ Esperanza steps forward, one boot at a time.
47 A She meets his eyes without flinching.
48 D ESPERANZA: I'm not property.
49 D SILAS: That paper says different.
50 D ESPERANZA: That paper says I own what you thought you did.
51 A ¶ Silas looks at the sheriff.
52 A The sheriff looks at the sky.
* 53 A A buzzard cries.
54 D ABNER: Percy.
55 D PERCY: Sir?
56 D ABNER: Go home.
57 D PERCY: But, Sheriff--
58 D ABNER: Go home, son.
59 A ¶ Percy lowers the rifle.
60 A Backs up three steps.
61 A Then turns and walks off down the creekbed, boots kicking up dust.
62 A ¶ Silas turns the horse in a slow half circle.
63 A Spits.
64 D SILAS: This isn't over.
65 D ESPERANZA: It is for today.
66 A ¶ He spurs the horse away.
* 67 A Dust follows him.
68 A Abner folds the deed along its old creases and hands it back, tipping his hat.

### SCENE s01415 | EXT. FROZEN WATERFALL - GORGE - DAY
Detected names (may be incomplete or contain aliases): AUGIE, DELACROIX-OWUSU, THALIA RENFREW, ZEPH, OKONJO, QUINLAN BRADSHAW-LEE
* 1 A ¶ A canyon of blue ice, walls streaked with silver where the water froze mid-fall.
* 2 A The sky is a slice of white between cliffs.
* 3 A Wind whistles through the cracks.
4 A ¶ Four climbers cling to the face.
* 5 A Ropes run taut between them.
6 A ¶ AUGUSTINE "AUGIE" DELACROIX-OWUSU, 30s, leads, swinging an ice axe in short, practiced arcs.
7 A Below him, THALIA RENFREW, 20s, belays on a narrow ledge, her hands sheathed in battered mittens.
8 A Further down, ZEPHANIAH "ZEPH" OKONJO, 40s, the guide, hangs from a screw with one arm.
9 A At the bottom, the youngest, QUINLAN BRADSHAW-LEE, 17, stands on the snow, waiting his turn.
10 D AUGIE (calling down): Ice is good!
11 D THALIA: Copy!
12 A ¶ She feeds him rope.
13 A Zeph watches the line shiver.
14 A Quinlan stamps his feet.
15 A ¶ Augie pulls over a lip and anchors himself.
16 A Looks down the face, grins.
17 D AUGIE: Zeph! Your turn!
18 A ¶ Zeph begins to climb.
19 A He moves with the slow confidence of a man who has done this ten thousand times.
20 A Axe, kick, axe, kick.
* 21 A ¶ Halfway up, a CRACK splits the air.
22 A ¶ All four freeze.
* 23 A ¶ A fissure races across the ice, a bright zigzag of white, and a slab the size of a door calves off the wall above Zeph and falls.
24 D THALIA: Zeph!
25 A ¶ He flings himself sideways.
26 A The slab clips his pack and spins him.
27 A His axe slips.
28 A He swings, catches, hangs.
29 A ¶ Augie hauls the rope in, arm over arm.
30 A Thalia braces.
31 A Quinlan scrambles up the snow slope toward the base of the wall, shouting.
32 D QUINLAN: Hold on! I'm coming!
33 D ZEPH (through his teeth): Stay down, boy!
* 34 A ¶ Another crack.
* 35 A A second slab shakes loose, then a third.
* 36 A The whole sheet of ice shudders, groans, and begins to peel from the cliff like old paint.
37 A ¶ Augie and Thalia lock eyes.
38 A Wordlessly, together, they haul with everything they have.
39 A Zeph kicks into the wall.
40 A His crampons bite.
41 A He lunges up and over the ledge as the ice behind him thunders into the gorge.
42 A ¶ They collapse in a heap, all three tangled in rope, breathing fast.
43 A ¶ Quinlan, at the bottom, stands in the settling snow with his hands on his head, laughing and gasping.
44 D QUINLAN: That was incredible.
45 D ZEPH: It was not.

### SCENE s01416 | INT. FAMILY COURT - CORRIDOR - DAY
Detected names (may be incomplete or contain aliases): FERN, ALCANTARA, CORDELIA WASHINGTON-PRICE, BRONWEN ALCANTARA-HUGHES, ISAAC FELDSTEIN, MARISELA TRUJILLO, BAILIFF
* 1 A ¶ A scuffed hallway with benches along both walls.
* 2 A A vending machine hums.
* 3 A Fluorescent light flattens every face.
4 A ¶ On one bench: FERNANDO "FERN" ALCANTARA, 40s, in his only suit, and his lawyer, CORDELIA WASHINGTON-PRICE, 50s, flipping a file.
5 A On the opposite bench: BRONWEN ALCANTARA-HUGHES, 40s, his ex-wife, rigid, flanked by her attorney, ISAAC FELDSTEIN, 30s, and her sister, MARISELA TRUJILLO, 40s, who glares across the aisle.
6 D CORDELIA: Fern. Look at me.
7 D FERN: I'm looking.
8 D CORDELIA: You say nothing in there. Understood?
9 D FERN: Understood.
10 D CORDELIA: Even if she provokes you.
11 D FERN: She always provokes me.
12 D CORDELIA: Then you say nothing twice.
13 A ¶ Across the aisle, Marisela leans to whisper in Bronwen's ear.
14 A Bronwen shakes her head.
15 D MARISELA (loud): He's a liar, Bron.
16 D ISAAC: Marisela.
17 D MARISELA: He is.
18 D ISAAC: Please.
19 A ¶ Fern stands, fists clenched.
20 A Cordelia seizes his sleeve.
21 A Marisela stands too.
22 A Isaac steps between them, hands out, and Bronwen rises last, pale, her palms pressed flat against her skirt.
23 D FERN: She said that in front of my kids?
24 D BRONWEN: Fern, sit down.
25 D FERN: Don't tell me what to do, Bronwen.
26 D BRONWEN: I'm asking.
27 D FERN: You've never asked me anything in your life.
28 D BRONWEN: I'm asking now.
29 A ¶ He stops.
30 A Searches her face.
* 31 A The vending machine hums.
32 D CORDELIA (quietly): Fern.
33 A ¶ He sits.
34 A Slowly.
35 A Marisela sits too, sulking.
36 A Isaac exhales and returns to his folder.
* 37 A ¶ The courtroom door opens.
38 A A BAILIFF leans out.
39 D BAILIFF: Alcantara versus Alcantara-Hughes.
40 A ¶ All five of them stand.
41 A They file toward the door, and in the narrow frame Fern and Bronwen end up shoulder to shoulder, neither willing to go first.
42 D BRONWEN: After you.
43 D FERN: No. After you.
44 A ¶ Cordelia, behind them, rolls her eyes and shoves them both through the door.

### SCENE s01417 | INT. LONG-TERM CARE HOME - PRIVATE ROOM - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): GUS, WELLINGTON-ABARA, VOICE
* 1 A ¶ A single bed, neatly made.
* 2 A A rocking chair by the window.
* 3 A A tray of untouched dinner on the side table.
* 4 A Photographs crowd the dresser: a wedding, a fishing trip, a toddler on a pony.
* 5 A The window frames a brick wall and a sliver of sky.
6 A ¶ AUGUSTUS "GUS" WELLINGTON-ABARA, 80s, in a cardigan and slippers, sits in the rocking chair with a landline phone in his lap.
* 7 A The cord stretches to the wall.
8 A He stares at the receiver as if it might speak first.
9 A ¶ He lifts it.
10 A Dials slowly, one number at a time, with a shaky forefinger.
* 11 A It rings.
12 D VOICE [V.O.] (over phone, young, brisk): Hello?
13 D GUS: Hello. Is this Daniel?
14 D VOICE [V.O.] (over phone): Who's calling?
15 D GUS: It's your father.
* 16 A ¶ A long pause on the line.
17 A Gus watches the brick wall.
* 18 A A pigeon lands on the sill, ruffles its feathers, takes off again.
19 D VOICE [V.O.] (over phone): Dad. It's been a while.
20 D GUS: It has.
21 D VOICE [V.O.] (over phone): Is something wrong?
22 D GUS: No. I just wanted to hear your voice.
* 23 A ¶ Silence.
24 A Gus sets the dinner tray aside, lifts the cover.
* 25 A Cold peas.
26 A He puts the cover back.
27 D VOICE [V.O.] (over phone): I can't talk long. I'm at work.
28 D GUS: Of course. I understand.
29 D VOICE [V.O.] (over phone): Is the staff treating you well?
30 D GUS: They are very kind.
31 D VOICE [V.O.] (over phone): Good.
32 A ¶ Gus rocks.
* 33 A The chair creaks.
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
* 48 A ¶ The line clicks.
49 A He holds the receiver against his ear a moment longer, listening to the empty hum.
50 A ¶ He puts the phone down gently on its cradle.
51 A Sets the photograph back on the dresser, straightens it.
52 A He crosses to the window and stands there, hands clasped behind his back, looking at the brick.
53 A ¶ After a while, he sits again in the rocking chair, takes the cold fork from the tray, and begins, slowly, to eat the peas.

### SCENE s01418 | INT. ROOFTOP GREENHOUSE - OVER A CHINATOWN BANK - NIGHT
Detected names (may be incomplete or contain aliases): MADAME LILIANE CHEN-ABERNATHY, VIKTOR NAKAMURA-ELLIS, DETECTIVE ROSALIND OKPARA-DANE
* 1 A ¶ A glass shed crowded with tomato vines and orchids, lit by violet grow lamps.
* 2 A Rain hammers the panes.
* 3 A In the center, a card table, three chairs, and a tray of unwashed teacups.
* 4 A The air is warm, wet, and sweet with rot.
5 A ¶ MADAME LILIANE CHEN-ABERNATHY, 70s, hair in a silver twist, sits at the head of the table in a brocade jacket.
6 A She sips tea without hurry, her fingers heavy with jade rings.
7 A ¶ To her right, her nephew, VIKTOR NAKAMURA-ELLIS, 30s, in a leather coat, picks at a dead leaf.
8 A He has not made eye contact since he arrived.
9 A ¶ To her left, a stranger in a dripping raincoat, DETECTIVE ROSALIND OKPARA-DANE, 40s, has been invited to sit and has not yet taken off her hat.
10 D LILIANE: Detective. You will have tea.
11 D ROSALIND: No, thank you.
12 D LILIANE: It is not an offer.
13 A ¶ Rosalind studies the cup, then lifts it.
14 A Sniffs.
15 A Sets it down untouched.
16 D ROSALIND: I'm here about the vault.
17 D LILIANE: There is no vault.
18 D ROSALIND: Beneath the bank. Third sub-level.
19 D LILIANE: You are mistaken.
20 D ROSALIND: Three nights ago, someone emptied it.
21 A ¶ Viktor's hand goes still on the leaf.
22 A Liliane doesn't blink.
23 D LILIANE: Viktor. Did you hear?
24 D VIKTOR: I heard.
25 D LILIANE: Do you know anything about this?
26 D VIKTOR: No, Auntie.
27 D LILIANE: No.
28 A ¶ She turns back to Rosalind with a serene smile.
* 29 A The rain on the glass swells louder for a moment, then fades.
30 D ROSALIND: Madame Chen. Your nephew was seen entering the sub-level at eleven.
31 D LILIANE: By whom?
32 D ROSALIND: By a night guard. Who has since vanished.
33 D VIKTOR: That's a lie.
34 D ROSALIND: Which part?
35 D VIKTOR: All of it.
36 D ROSALIND: I haven't told you the guard's name.
37 A ¶ Viktor's mouth closes.
38 A Liliane sets down her cup, very softly.
* 39 A It clicks against the saucer.
40 D LILIANE: Viktor, go downstairs.
41 D VIKTOR: Auntie--
42 D LILIANE: Go.
43 A ¶ He rises.
44 A Looks at Rosalind, then at the old woman, and walks out between the tomato vines.
* 45 A The door slides shut behind him.
46 A ¶ Liliane and Rosalind sit alone with the orchids and the rain.
47 D LILIANE [CONT'D]: He is a foolish boy.
48 D ROSALIND: He's a thief.
49 D LILIANE: He is family.
50 D ROSALIND: That's not a defense.
51 D LILIANE: No. But it is a reason.
52 A ¶ She pours a second cup of tea, and for the first time Rosalind accepts it.

### SCENE s01419 | EXT. LIFE RAFT - OPEN OCEAN - DAWN
Detected names (may be incomplete or contain aliases): CAPTAIN AUGUSTINE FEARON, IMELDA NAKAGAWA-ROSS, DECKHAND BASIL OYEDEPO, MABEL STURGESS-KAUR
* 1 A ¶ Gray sea.
* 2 A Gray sky.
* 3 A A canvas raft rises and falls on a slow swell.
* 4 A Gulls are nowhere.
5 A ¶ Four survivors crowd the raft: CAPTAIN AUGUSTINE FEARON, 50s, lashed to the tiller by a rope; DR. IMELDA NAKAGAWA-ROSS, 40s, clutching a medical kit; DECKHAND BASIL OYEDEPO, 20s, bailing with a hat; and the cook, MABEL STURGESS-KAUR, 60s, hugging a cooler.
6 D BASIL: There!
7 D IMELDA: Where?
8 D BASIL: A light! Starboard!
9 D AUGUSTINE: That's the sun.
10 D BASIL: It's not the sun!
11 D MABEL: It's the sun, dear.
12 D BASIL: It's a ship!
13 D IMELDA: Basil, sit down.
14 D BASIL: It's a ship! I'm telling you!
15 D AUGUSTINE: Sit down, son.
16 D MABEL: You'll tip us.
17 D BASIL: Then someone look!
18 A ¶ Imelda stands, shading her eyes.
* 19 A The raft pitches.
20 A She grips Augustine's shoulder to steady herself.
21 D IMELDA: I don't see anything.
22 D MABEL (muttering): Water, water, everywhere.
23 D AUGUSTINE: Mabel.
24 D MABEL: I'm only saying.
25 D IMELDA: Basil, how much water is left?
26 D BASIL: Half a liter.
27 D IMELDA: For four.
28 D BASIL: For four.
29 D AUGUSTINE: We ration it. A capful each, at dusk.
30 D MABEL: And if we haven't been rescued by dusk?
31 D AUGUSTINE: Then another capful.
32 D BASIL: And then?
33 D AUGUSTINE: We'll see.
* 34 A ¶ A gull cries somewhere overhead.
35 A All four look up at once.
* 36 A Just a speck, circling high above the swell.
37 D MABEL: Is that...
38 D IMELDA: A gull.
39 D BASIL: Land's close!
40 D AUGUSTINE: Don't hope, son.
41 D BASIL: Why not?
42 D AUGUSTINE: Hope drinks water too.
* 43 A ¶ Silence.
* 44 A The raft rides the swell.
45 A Mabel gives a short, dry laugh and opens the cooler, taking out four crackers, one each.
46 D MABEL: Breakfast.
47 A ¶ They eat.

### SCENE s01420 | INT. UNCLAIMED UMBRELLA DEPOT - TRANSIT LOST PROPERTY BASEMENT - DAY
Detected names (may be incomplete or contain aliases): DELPHINE OKONKWO-REYES, BARNABY QUILL, TOMOKO ARAI, GUS PRZYBYLSKI, MEERA SUNDARAM-HOLT
* 1 A ¶ Eleven thousand umbrellas hang from the ceiling pipes like a congregation of sleeping bats, each tagged, each waiting for an owner who stopped believing in them years ago.
* 2 A Fluorescent tubes hum a half-tone flat.
3 A ¶ DELPHINE OKONKWO-REYES (50s, silver bob, a cardigan buttoned one hole too high) pours tea from a thermos into five paper cups with the care of a priestess.
* 4 A The cups match.
* 5 A Nothing else in the room does.
6 A ¶ BARNABY QUILL (40s, rumpled, a man who irons only the collar) sits on an overturned crate, polishing a single brass umbrella handle that no one has asked him to polish.
7 A ¶ TOMOKO ARAI (30s, sharp-eyed, hair pinned with a pencil) tallies index cards into stacks.
* 8 A The stacks are very straight.
9 A ¶ GUS PRZYBYLSKI (60s, broad, a retired bus driver who took this job "for the quiet") winds a wall clock that has not told the right time since March.
10 A ¶ MEERA SUNDARAM-HOLT (20s, the newest, lanyard still stiff) holds her cup with both hands and does not drink.
11 A ¶ Delphine sets the thermos down.
12 A Squares it to the table edge.
13 A Smiles at nobody.
14 D DELPHINE: Lovely to have everyone down here at once. Truly. It's been, what, since the Christmas lunch?
15 D BARNABY: The lunch was in the stairwell.
16 D DELPHINE: Cozy, though.
17 D TOMOKO: Four hundred and twelve intake forms this month. Up nine percent.
18 D DELPHINE: Nine! Wonderful. People keep losing things. It's the one thing we can count on.
19 D GUS: Count on. Right.
20 D DELPHINE: Gus, you look well. Is that a new coat?
21 D GUS: Nineteen ninety-eight.
22 D DELPHINE: Timeless.
23 D MEERA: Is there an agenda?
24 D DELPHINE: Agenda. No, no. Just a catch-up. We never catch up.
25 D BARNABY: Delphine, the elevator has been shut off since eight this morning.
26 D DELPHINE: Maintenance.
27 D BARNABY: Nobody told maintenance, I asked.
28 D DELPHINE: Then it's a surprise maintenance.
29 D TOMOKO: I've never seen the upstairs door locked from the outside.
30 D DELPHINE: Draughts. The building has draughts.
31 D GUS: Nice tea.
32 D DELPHINE: Oolong. Someone brought it in. I think it was left behind by a customer and nobody claimed it, so, technically, ours.
33 D MEERA: That's in the policy. Ninety days, then disposal or reassignment.
34 D DELPHINE: Meera knows the policy. Meera is going to go far.
35 D MEERA: Is that a promotion?
36 D DELPHINE: It's an observation.
37 D BARNABY: What's in the folder?
38 D DELPHINE: Which folder?
39 D BARNABY: The one under the thermos. Cream. Five tabs. Five names.
40 D DELPHINE: Those are the, ah, the umbrella reconciliation sheets.
41 D TOMOKO: I do the reconciliation sheets. They're green.
42 D DELPHINE: New format.
43 D GUS: They've got our names on the tabs.
44 D DELPHINE: Because we're all, you know, reconciled.
45 D BARNABY: Delphine.
46 D DELPHINE: Barnaby.
47 D BARNABY: How long have you had the cups?
48 D DELPHINE: What?
49 D BARNABY: Five matching cups. This building has never owned five matching anything.
50 D DELPHINE: I wanted it to be nice.
51 D TOMOKO: For what?
52 D DELPHINE: For whatever it is.
53 D GUS: Ninety days, then disposal or reassignment.
54 D MEERA: I said that.
55 D GUS: I know you did, love.
56 A ¶ Delphine slides the cream folder across the table.
57 A Her hand does not shake.
* 58 A Her thermos lid, left unscrewed, rolls in a slow half-circle and drops off the edge.
* 59 A ¶ Nobody picks it up.
* 60 A Above them, one umbrella turns on its hook in air from no vent, and every tag along the pipe begins, softly, to tick.

### SCENE s01421 | EXT. SALT FLATS WAY STATION - DAY
Detected names (may be incomplete or contain aliases): TUCKER HALE, ISAAC BROOKS, BILLIE, STRAND
* 1 A ¶ White ground.
* 2 A White sky with a seam of heat across it.
* 3 A One adobe hut, roof half gone.
* 4 A A windmill with no blades, only the hub, rusted and ticking.
5 A ¶ TUCKER HALE (40s, lean, sun-cracked lips, a hat stained black at the band) sits on an upturned barrel.
6 A Rifle across his knees.
7 A Not aiming it.
8 A Not putting it down.
9 A ¶ ISAAC BROOKS (50s, heavy, one eye clouded) crouches by a dead fire, poking ash with a stick.
10 A He wears a preacher's coat, two sizes small, buttons mismatched.
* 11 A ¶ Between them, a mule.
* 12 A Grey.
* 13 A Chewing nothing.
14 D TUCKER: Water.
15 D ISAAC: Barrel's dry.
16 D TUCKER: I didn't ask the barrel.
17 A ¶ Isaac lifts a canteen.
18 A Shakes it.
* 19 A A small sound.
20 A He tosses it.
21 A Tucker catches it without looking.
22 D TUCKER [CONT'D]: Half.
23 D ISAAC: Drink your half.
24 A ¶ Tucker drinks.
25 A Caps it.
26 A Sets it on the sand between them.
27 A ¶ WILHELMINA "BILLIE" STRAND (30s, wiry, a rope-burn scar across one cheek, dust to the knees) steps out of the hut doorway.
28 A She carries a tin plate with three strips of jerky.
29 A Her boots are two sizes too big.
30 A Men's boots.
31 D BILLIE: Supper.
32 D TUCKER: It's noon.
33 D BILLIE: Supper's when you eat it.
34 A ¶ She puts the plate down on the barrel top.
35 A Takes one strip.
36 A Chews.
37 A Looks at the horizon.
38 D ISAAC: He's late.
39 D TUCKER: He's always late.
40 D BILLIE: Who's late?
41 D TUCKER: The man with the wagon.
42 D BILLIE: I thought it was a train.
43 D ISAAC: No train. Ground's too soft for rail.
44 D BILLIE (muttering): Everything's too soft for something.
45 A ¶ Isaac stands.
46 A Knees pop.
47 A He walks to the windmill, puts a palm on the post, closes his good eye.
48 D ISAAC (to himself): Lord, I will not ask for rain. Lord, I will ask for shade.
49 A ¶ Tucker watches him.
50 A Says nothing.
51 A Billie sits on the hut step, pulls her too-big boots off, empties them.
* 52 A Salt crystals pour out like sugar.
53 D BILLIE: Everybody listen. If we're still here at dark, we sleep in shifts.
54 D TUCKER: We won't be here at dark.
55 D BILLIE: Then it costs nothing to agree.
56 D ISAAC: I'll take first.
57 D BILLIE: You'll take middle. You snore on first.
58 D ISAAC: I do not.
59 D TUCKER: You do.
60 A ¶ Isaac looks at Tucker.
61 A Tucker shrugs.
* 62 A ¶ A mile out, a smudge of dust rises.
* 63 A Not a wagon.
* 64 A Wind, maybe.
65 A All three watch it anyway.
66 D TUCKER [CONT'D] (low, to Isaac): You still got the paper?
67 D ISAAC (low): Inside my coat.
68 D TUCKER: Keep it there.
69 D BILLIE: I can hear you.
70 D TUCKER: Then hear this. Nobody does anything till I say.
71 D BILLIE: Yes, sir, Marshal.
72 D TUCKER: I'm not a marshal.
73 D BILLIE: That's why it's funny.
* 74 A ¶ The dust smudge thins and dies.
* 75 A Nothing behind it.
* 76 A The mule shifts its weight, sighs through its nose.
77 A ¶ Isaac settles back by the dead fire.
78 A Pokes.
79 A Tucker leans the rifle against the barrel.
80 A Billie lies back on the step, hat over her face.
81 D BILLIE [CONT'D] (from under the hat): Wake me when it's supper.
82 D TUCKER (to the mule): She's right, you know.

### SCENE s01422 | INT. COURTHOUSE PARKING GARAGE - LEVEL P3 - DAWN
Detected names (may be incomplete or contain aliases): LENORE VASQUITH, RUFUS AMOAH, CLERK
* 1 A ¶ Concrete.
* 2 A Sodium light.
* 3 A One sedan, engine ticking.
4 A ¶ LENORE VASQUITH (40s, charcoal suit, burner-thin patience) leans on the driver's door, phone pressed to her ear.
5 A In the passenger seat, RUFUS AMOAH (30s, borrowed tie, hands gripping his knees) stares at the dashboard.
6 D CLERK [V.O.] (phone, tinny): Judge Barrow moved you to eight-fifteen.
7 D LENORE: Moved me from nine?
8 D CLERK [V.O.] (phone): Prosecution's witness flew in early.
9 D LENORE: Then I want the exhibit list stipulated before we go on the record.
10 D CLERK [V.O.] (phone): Take it up with the judge.
11 A ¶ Lenore ends the call.
12 A Knocks on the glass.
13 A Rufus lowers the window two inches.
14 D RUFUS: That the clerk?
15 D LENORE: We go early. You say nothing. Not "good morning," not "thank you." Nothing.
16 D RUFUS: What if the judge asks me something?
17 D LENORE: Then I object.
18 D RUFUS: And if you can't?
19 D LENORE: Rufus. Look at me.
20 A ¶ He does.
21 A She does not blink.
22 D LENORE [CONT'D]: I can.

### SCENE s01423 | INT. DRIVE-IN PROJECTION BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): NELL ASHBY, TEDDY
* 1 A ¶ Dust in the beam.
* 2 A A dead reel clatters on its spindle.
* 3 A The screen outside shows only white.
4 A ¶ NELL ASHBY (20s, headlamp, flannel) crouches at the old projector, one hand on the take-up arm, the other jamming a flathead into the gate.
* 5 A A walkie-talkie sits on the splice table, crackling.
6 D TEDDY [O.S.] (walkie, static): Nell? You up there? Film's gone.
7 D NELL: I know. I'm fixing it.
8 D TEDDY [O.S.] (walkie): No. I mean the picture's gone. The screen's... something's moving on it.
9 A ¶ Nell freezes.
10 A Turns her head toward the small square window.
* 11 A Through the glass, the white screen ripples like a bedsheet with someone under it.
12 A ¶ She grabs the walkie, thumbs it.
13 A Teddy, down in the lot, stumbles backward over a speaker post, drops his flashlight, scrambles for it, and the beam swings up the length of the screen where a long grey hand presses outward from the fabric, fingers spreading, as Nell reaches back and kills the lamp, and the booth goes black except for the light slowly dying on the walls.
14 D NELL: Teddy. Teddy, go home.
15 D TEDDY [O.S.] (walkie, calm now): It's okay. It stopped.
* 16 A ¶ Silence.
* 17 A The hand on the screen is gone.
* 18 A The screen is white again, perfectly flat.
19 D NELL (whisper): That's worse.

### SCENE s01424 | EXT. FROZEN RESERVOIR - DAWN
Detected names (may be incomplete or contain aliases): ODALYS MERCADO, HANS-PETER VOSS
* 1 A ¶ The lake lies like a sheet of poured pewter, its far shore dissolved in mist.
* 2 A Snow has drifted in long tongues over the ice.
* 3 A It is entirely silent, the kind of silence with weight.
4 A ¶ ODALYS MERCADO (30s, orange parka, a camera strapped across her chest) walks a careful line over the surface, testing each step with an ice pick.
5 A Behind her, HANS-PETER VOSS (60s, tall, beard grey with frost, a rucksack twice the size it should be) drags a sled loaded with coiled rope and a sealed metal case.
6 D ODALYS: Look at it. Not a crack.
7 D HANS-PETER: Ice does not announce itself.
8 D ODALYS: You're a cheerful man.
9 D HANS-PETER: I am a careful man.
10 A ¶ They walk on.
* 11 A A pale sun clears the ridge and lays copper across the ice.
* 12 A Ahead, a red flag on a bamboo pole marks the survey stake.
13 A Odalys quickens.
14 A Hans-Peter keeps the sled's rope short, and slow.
15 A ¶ She reaches the stake.
16 A Photographs it.
17 A Photographs the horizon.
18 A Laughs at nothing in particular, breath smoking.
19 D ODALYS [CONT'D]: We did it. Day four, and the ice is solid, and --
* 20 A ¶ Under their boots, a long groan rolls out from the center of the lake, a bass note that climbs through the soles of the feet into the teeth.
21 A Both freeze.
22 A Odalys's smile hangs on her face a second longer than it should.
23 D HANS-PETER (low): Do not run.
24 D ODALYS: I wasn't going to.
25 D HANS-PETER: Your face says you were.
* 26 A ¶ A black line spiders from beneath the sled runner, racing in two directions.
27 A Hans-Peter releases the rope.
28 A Odalys drops flat, spreading her arms.
* 29 A The sled tilts.
* 30 A The metal case slides, slides, tips, and vanishes into a widening mouth of water without a splash.
31 A ¶ They lie side by side, a body's length apart, hands spread on the ice like swimmers on a cold floor.
32 D ODALYS: That was the samples.
33 D HANS-PETER: That was a case.
34 A ¶ They crawl.
35 A Slowly.
* 36 A The line widens behind them, then stops.
* 37 A The groan fades.
* 38 A Somewhere far off, a raven calls.
39 A ¶ Hans-Peter reaches the thick white of the shore snow first, pulls himself onto it, and offers a gloved hand back.
40 A Odalys takes it.
41 A Pulls up.
42 A Both scramble backward from the edge and sit, panting.
43 D ODALYS: Day four.
44 D HANS-PETER: Day four.

### SCENE s01425 | INT. CONVERTED CATHEDRAL CURLING HALL - NIGHT
Detected names (may be incomplete or contain aliases): BERNIE, OYELARAN, MAEVE KOWALCZYK, DESMOND TAI, RAFFI HOVSEPIAN, JUNE PELLETIER-ODUYA
* 1 A ¶ A deconsecrated church, nave stripped, pews gone, a pebbled sheet of ice running where the altar once stood.
* 2 A Stained glass throws blue and amber across the frost.
* 3 A Stone saints watch from niches.
* 4 A Condensation drips from the vaulted ceiling.
* 5 A ¶ Scoreboard: LIONS 6, FERRYMEN 6.
* 6 A Eighth end.
7 A ¶ BERNADETTE "BERNIE" OYELARAN (50s, coach's jacket, whistle she never uses) stands behind the hog line with a clipboard she hasn't looked at in an hour.
8 A ¶ MAEVE KOWALCZYK (20s, skip, braid tucked into her collar) crouches at the house, broom flat across her knees.
9 A ¶ DESMOND TAI (30s, lead, calves like fence posts) waits at the far hack, stone handle in a white-knuckled grip.
10 A ¶ RAFFI HOVSEPIAN (20s, second, perpetual grin gone tight) sweeps nothing, just to have something to do with his arms.
11 A ¶ JUNE PELLETIER-ODUYA (40s, vice, wedding ring on a chain around her neck) stands at the boards, arms folded, chewing a toothpick down to splinters.
12 D BERNIE: Last stone. Hammer's ours.
13 D MAEVE: I know.
14 D BERNIE: Draw to the button.
15 D MAEVE: I know.
16 D BERNIE: Then why are you looking at the saint?
17 A ¶ Maeve glances at a stone St. Sebastian in the wall, pierced with nine marble arrows.
18 D MAEVE: He's got a better angle than I do.
19 D DESMOND (calling down the sheet): Ready!
20 D JUNE: Ice is pulling left, maybe two inches.
21 D RAFFI: Three. It's three.
22 D JUNE: Two and a half.
23 D RAFFI: Fine. Two and a half.
24 A ¶ Desmond pushes out of the hack, glides low and long, releases the stone with a soft rotation.
* 25 A It slides, humming on the pebble.
26 D MAEVE: Hard! Hard!
27 A ¶ Raffi and June sweep, brooms drumming the ice, snow-frost jumping off the bristles.
* 28 A The stone arcs past the guard.
29 D JUNE: Off!
30 A ¶ They lift.
* 31 A The stone curls, slows, rests an inch from the back of the four-foot ring.
32 D BERNIE: That's yours, Desmond.
33 D DESMOND: I know.
34 D BERNIE: Everyone says "I know" tonight. I'd like one "I'm scared."
* 35 A ¶ A beat.
36 A Raffi laughs.
37 A June spits her toothpick onto the ice.
38 A Maeve rises, rolling her shoulders.
39 D MAEVE: I'm scared.
40 D BERNIE: Good. Go.
41 A ¶ Maeve settles into the hack.
42 A Looks down the sheet.
43 A Breathes.
44 D MAEVE [CONT'D]: Desmond, where do you want it?
45 D DESMOND: Weight of a feather. Land on the button like a kiss.
46 D MAEVE: Don't kiss anything, I'm married.
47 D JUNE: So am I.
48 D RAFFI: Everybody's married. Throw the rock.
49 A ¶ Maeve pushes.
50 A The stone leaves her hand in a perfect curve.
51 A Desmond and Raffi pick up the sweep, then drop it.
52 A June holds up a flat palm.
53 D JUNE: Leave it. Leave it.
* 54 A ¶ The stone drifts, rotating, down the pebbled ice, under a rose window that paints it red for one second, then amber, then blue.
55 D BERNIE (whispering): Come on, come on.
* 56 A ¶ It stops.
* 57 A A hair's width from Desmond's stone, a hair's width from the pin.
* 58 A ¶ Silence under the vault.
59 A Raffi drops his broom.
60 A Desmond puts both hands on his head.
61 A June exhales through her teeth.
62 D JUNE [CONT'D]: We measure.
63 A ¶ Bernie gets down on her knees on the ice, pulls a measuring stick from her jacket, and lays it across the gap between the two stones.
64 A She reads it.
65 A Looks up.
66 D BERNIE: Ferrymen's. By a quarter inch.
* 67 A ¶ Nobody speaks.
68 A Maeve takes off her glove, looks at her bare hand.
69 A Her fingers don't tremble.
70 D MAEVE: Good end.
71 D BERNIE: That's the end. Not the match. We play the extra end in five.
72 D DESMOND: There's an extra end?
73 D BERNIE: There's always an extra end. Sit down. Drink water. Look at a saint.

### SCENE s01426 | INT. HOUSEBOAT GALLEY - MORNING
Detected names (may be incomplete or contain aliases): ZOFIA NOWAK, WALEED, PRIYA, KOFI, MARGUERITE
* 1 A ¶ A narrow kitchen on a canal boat.
* 2 A Copper pans swing gently with the water.
* 3 A Rain taps the porthole.
4 A ¶ ZOFIA NOWAK (70s, tiny, apron over a quilted vest) rolls dough on a board nailed to the counter.
5 A Her son WALEED (40s, tired eyes, a dress shirt with one sleeve rolled) stands at the stove, stirring a pot he is not hungry for.
6 A ¶ At the table, PRIYA (16, headphones around her neck) peels an orange in one unbroken spiral.
7 A Beside her, KOFI (8, pajamas, a plastic dinosaur in each fist) crashes them together.
* 8 A ¶ A landline phone hangs on the bulkhead.
* 9 A It rings.
10 D WALEED: Don't.
11 D ZOFIA: I wasn't.
* 12 A ¶ It rings again.
13 A Priya peels.
14 A Kofi roars his dinosaurs into the sugar bowl.
15 D ZOFIA [CONT'D]: Somebody should.
16 D WALEED: It's the lawyer. Or the marina.
17 D ZOFIA: Or it's Marguerite.
18 A ¶ Waleed stops stirring.
* 19 A The phone rings a fourth time.
20 A Priya sets down the orange.
21 D WALEED: Priya, would you --
22 D PRIYA: Why me?
23 D WALEED: Because you're closest.
24 D PRIYA: I'm not closest. Gran is closest.
25 D ZOFIA: My hands are in flour.
26 A ¶ Priya gets up, lifts the receiver.
27 A Holds it a few inches from her ear.
28 D PRIYA: Hello?
29 D MARGUERITE [V.O.] (phone): Is your father there?
30 D PRIYA: He's... stirring.
31 D MARGUERITE [V.O.] (phone): Tell him I'm at the lock. I'll be there in twenty minutes.
32 A ¶ Priya looks at her father.
33 A He looks at the soup.
34 A Zofia presses the dough flat with both thumbs, harder than the recipe needs.
35 D PRIYA: She says twenty minutes.
36 D WALEED: Tell her we're out.
37 D ZOFIA: Tell her we have enough bread.
38 D WALEED: Mama.
39 D ZOFIA: Waleed.
40 D WALEED: Don't --
41 D ZOFIA: Don't what?
42 D WALEED (together): Don't start.
43 D ZOFIA (together): I'm not starting.
44 D PRIYA (into the phone): Come. It's... fine.
45 A ¶ She hangs up.
* 46 A Silence.
47 A Kofi's dinosaurs go quiet.
* 48 A The boat rocks.
* 49 A A drop falls from the porthole frame onto the sill.
50 A ¶ Zofia takes down a fourth bowl from the shelf.
51 A Then a fifth.
52 A Sets them on the table without comment.
53 A ¶ Waleed puts the spoon down.
54 A Rolls the other sleeve to match the first.
55 A Kofi slides a dinosaur across the table until it stops beside the fifth bowl.

### SCENE s01427 | INT. FAMILY SEWING ROOM - ATTIC - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): AGATHA FENWICK, ROSAMUND
* 1 A ¶ Dust turns slowly in a shaft of low gold light.
* 2 A A dress form wears half a wedding gown, pins bristling at the hem like a porcupine.
* 3 A Bolts of fabric lean in the corners, patient as old dogs.
4 A ¶ AGATHA FENWICK (60s, wire-rimmed glasses on a beaded chain, thimble on her middle finger) kneels at the hem, working a needle through satin.
5 A Her daughter ROSAMUND (30s, stiff-backed, coat still on, car keys unreleased in her fist) stands in the doorway as though the floor might be hot.
6 D AGATHA: You're early.
7 D ROSAMUND: Traffic was light.
8 D AGATHA (to the hem): Hold still, you.
9 A ¶ She isn't speaking to the dress form.
10 A Rosamund does not know whether to answer anyway.
11 D ROSAMUND: Is that Lena's?
12 D AGATHA: It was going to be. I'm altering it.
13 D ROSAMUND: For who?
14 A ¶ Agatha bites the thread.
15 A Does not reply.
16 A She stands with a small grunt, takes a step back, and squints at the gown with the eye of a general.
17 D AGATHA: Everyone, take a seat. Please. The fitting's about to start.
* 18 A ¶ The room has no one else in it.
19 A Rosamund looks over her shoulder anyway, at the empty hall.
20 D ROSAMUND: Mum.
21 D AGATHA (muttering): Too long. Always too long. I told her.
22 D ROSAMUND: It's mine, isn't it?
23 A ¶ The needle stops mid-air.
24 D AGATHA: You said you'd never wear it.
25 D ROSAMUND: I said I'd never get married.
26 D AGATHA: Same thing, the way you said it.
27 D ROSAMUND: You altered a dress in secret for eleven weeks and you want to talk about how I said it?
28 D AGATHA: I wanted it to fit.
29 A ¶ Rosamund drops her keys.
* 30 A They hit the floorboards with a crack that makes the dress form seem to flinch.
31 D ROSAMUND: You never once asked me what I wanted.
32 D AGATHA: You never once told me!
* 33 A ¶ The shout hangs.
* 34 A Dust spins.
35 A Rosamund steps forward, picks up the hem, and holds the satin in her fist.
36 D ROSAMUND (quietly): Pin it shorter.

### SCENE s01428 | INT. GRAND HOTEL MUSEUM OF CLOCKS - HALL OF PENDULUMS - EVENING
Detected names (may be incomplete or contain aliases): INSPECTOR AUGUSTINE FELL, ODETTE LAMBERT-VANCE, SIMEON ACHTERBERG, MISS CLARISSA BOONE, ELIAS THORNCROFT, HOBBS
* 1 A ¶ A cavernous gallery lined with grandfather clocks, their brass pendulums swinging out of step with one another like a crowd of mourners nodding at different tunes.
* 2 A The parquet gleams.
* 3 A Tall windows frame a bruised sunset.
4 A ¶ Gathered at the center beneath a crystal chandelier: INSPECTOR AUGUSTINE FELL (50s, trench coat damp at the shoulders, fedora in hand), a methodical man with a notebook the size of a prayer book.
5 A ¶ MRS. ODETTE LAMBERT-VANCE (60s, pearls, a black veil pushed back), the widow of the museum's founder, perched on a gilt chair.
6 A ¶ DR. SIMEON ACHTERBERG (40s, bow tie, spectacles), the curator, nervously winding his own watch.
7 A ¶ MISS CLARISSA BOONE (20s, secretary, red lipstick, a pencil behind her ear).
8 A ¶ ELIAS THORNCROFT (30s, dark suit, an easy grin), the nephew and heir.
9 A ¶ HOBBS (70s, white gloves, spine straight as a ruler), the butler.
10 D FELL: Thank you all for staying. It's a nasty night, and I'd hoped we'd be finished by supper.
11 D ODETTE: My husband is lying in the next room, Inspector. Supper is not a priority.
12 D FELL: Of course. Forgive me.
13 D SIMEON: The Regulator clock stopped at seven-forty. That's the time on the coroner's slip, isn't it?
14 D FELL: So it is.
15 D CLARISSA: Then he died at seven-forty. It's simple.
16 D FELL: It is, Miss Boone. Which is why I distrust it.
17 D ELIAS: Distrust a stopped clock? Inspector, you're a romantic.
18 D FELL: I distrust any clock that stops precisely when it's useful.
19 D HOBBS: If I may, sir.
20 D FELL: Please.
21 D HOBBS: The Regulator has not stopped on its own in thirty-one years. Mr. Lambert-Vance wound it every Sunday himself. He had a ritual. A key kept on a chain.
22 D FELL: And that key is now where?
23 D HOBBS: It was in his waistcoat pocket, sir.
24 D FELL: It was not. I checked.
* 25 A ¶ A pendulum clicks.
* 26 A Nobody breathes.
27 D ODETTE: What are you suggesting?
28 D FELL: That someone wound the clock back to seven-forty so that someone else might have an alibi.
29 D ELIAS: I was in the library with Clarissa from seven-fifteen.
30 D CLARISSA: Yes. Yes, we were.
31 D FELL: You were. And Dr. Achterberg was in the cellar, and Hobbs was serving tea in the east wing, and Madame Lambert-Vance was dressing. Every person in this room has an alibi for seven-forty, which is why I believe the murder occurred at seven-ten.
32 D SIMEON: That's impossible. The tea service was at seven.
33 D FELL: And ended at seven-oh-five. Hobbs, how many cups did you collect?
34 D HOBBS: Five, sir.
35 D FELL: There are six people in this house.
* 36 A ¶ A long pause.
* 37 A The chandelier trembles.
38 D ODETTE (very quietly): My husband did not take tea after six.
39 D FELL: No. But someone took tea to him. And left the sixth cup upstairs, with lipstick on the rim.
40 A ¶ All eyes turn to Clarissa.
41 A She touches her mouth.
42 A Smiles, without joy.

### SCENE s01429 | INT. FEED STORE BACK ROOM - NIGHT
Detected names (may be incomplete or contain aliases): SHERIFF CASIMIR DUVALL, TOBY, RAINEY, MABEL KINGSLEY
* 1 A ¶ Grain sacks stacked to the rafters.
* 2 A A single oil lamp.
* 3 A Barn-cat eyes in the dark, gone when you look.
4 A ¶ SHERIFF CASIMIR DUVALL (50s, silver mustache, a limp from an old stirrup) sits at a plank table, chair tilted back.
5 A Opposite him, TOBIAS "TOBY" RAINEY (20s, barely a beard, hands cuffed in front, a bruise blooming on his jaw).
6 A ¶ In the corner, behind the sacks, a woman stands motionless.
7 A MABEL KINGSLEY (40s, widow's black, a shotgun held low like a broom).
8 D DUVALL: You know whose barn that was.
9 D TOBY: I know.
10 D DUVALL: You know whose horse.
11 D TOBY: I know that too.
12 D DUVALL: You know the penalty.
13 D TOBY: Sheriff, I'll hang if that's what it is. I'm not asking you to like me.
14 D DUVALL: I don't.
15 D TOBY: Then we agree.
16 D MABEL: Ask him where the boy is.
17 D DUVALL: Mabel.
18 D MABEL: Ask him.
19 D DUVALL: Where's the boy, Toby?
20 D TOBY: I left him at the creek. He's fine. He's twelve and he's fine.
21 D MABEL: Alone.
22 D TOBY: With a canteen and a blanket, ma'am. Which is more than I got at twelve.
23 D DUVALL: Why the creek?
24 D TOBY: Because the barn was on fire, and I'd have had to carry him.
25 D MABEL: You set the fire.
26 D TOBY: I did not.
27 D DUVALL: Then who?
28 D TOBY: Ask the man who held the lamp. Ask the one who paid the stable hand two dollars to go quiet.
29 A ¶ Duvall lets his chair drop forward.
* 30 A The legs hit the floor.
31 D DUVALL: Name him.
32 A ¶ Toby looks at Mabel.
33 A At the shotgun.
34 A At Duvall.
35 D TOBY: You'll want to sit down, ma'am.

### SCENE s01430 | INT. VERIDIAN SYSTEMS - OPEN-PLAN OFFICE - FIRE DRILL - DAY
Detected names (may be incomplete or contain aliases): VERB, PERPETUA NWOSU, ALISTAIR BOONSRI, LOLA FIGUEROA-WREN
* 1 A ¶ Rows of grey cubicles.
* 2 A A laminated sign reads "SYNERGY IS A VERB."
* 3 A Alarm bell clangs on a loop.
4 A ¶ PERPETUA NWOSU (40s, headset, high-vis vest over a blazer) strides between desks with a clipboard.
5 A ALISTAIR BOONSRI (30s, sleeves rolled, mug in hand) does not stand.
6 A LOLA FIGUEROA-WREN (20s, intern, lanyard tangled) stares at a vending machine.
7 D PERPETUA: Everyone! Exit through the east stairwell! Walk, do not run!
* 8 A ¶ Nobody else is there.
* 9 A The desks are empty.
10 A She says it anyway.
11 D ALISTAIR: Perpetua, we're the only two on this floor.
12 D PERPETUA: Three.
13 D ALISTAIR: Fine, three.
14 A ¶ Lola still has not moved.
15 D PERPETUA: Lola. Stairwell.
16 D LOLA: I'm waiting for my pretzels.
17 D PERPETUA: There is a fire.
18 D LOLA: Then I'll be quick.
19 A ¶ Alistair finally stands, mug still steaming.
20 D ALISTAIR (muttering): Every quarter, a fire. Never an actual fire.
21 D PERPETUA: I heard that.
22 D ALISTAIR: It was for you to hear.
* 23 A ¶ The alarm stops.
* 24 A Silence rings.
25 A Perpetua's headset crackles; she tilts her head, listens, goes still.
26 D PERPETUA (to herself): Oh no.
27 D ALISTAIR: What?
28 D PERPETUA: It was a real fire. Floor four. They forgot to tell the drill coordinator.
29 D LOLA (calling, bright): Everyone! Exit through the east stairwell!
30 A ¶ Her pretzels thump into the tray.
31 A She grabs them and sprints.
32 A Perpetua and Alistair follow, mug abandoned, spilling steam onto carpet.
33 A ¶ At the stairwell door, Perpetua stops, hand on the push bar.
34 D PERPETUA: False alarm. Floor four just burned a casserole.
35 D ALISTAIR: I hate this company.
36 D LOLA (mouth full): Pretzel?

### SCENE s01431 | INT. ABANDONED GRAIN ELEVATOR - GROUND FLOOR - NIGHT
Detected names (may be incomplete or contain aliases): ELSPETH MARROW, DOMINIC ARRUDA
* 1 A ¶ A concrete cathedral of silos.
* 2 A Rusted augers hang like dead snakes.
* 3 A The floor is a scatter of husks and pigeon bones.
* 4 A A flashlight beam wobbles across a wall stenciled "FILL LINE 40 FT."
5 A ¶ ELSPETH MARROW (40s, county surveyor, canvas jacket, hard hat, a clipboard clutched to her chest) steps over a fallen ladder.
6 A Behind her comes DOMINIC ARRUDA (30s, her assistant, rain slicker, young face, a camera on a strap).
7 D ELSPETH: Mind the grating.
8 D DOMINIC: It's all grating.
9 D ELSPETH: The loose grating.
10 A ¶ He steps carefully.
* 11 A The beam sweeps a rusted sign: DANGER - CONFINED SPACE.
12 D DOMINIC: Is it true what they say about this place?
13 D ELSPETH: What do they say?
14 D DOMINIC: That a man drowned in wheat.
15 D ELSPETH: Engulfment. It happens. Grain flows like water. You stand in a bin, it pulls you under.
16 D DOMINIC: In ten seconds.
17 D ELSPETH: In four.
* 18 A ¶ Silence.
* 19 A Somewhere above, grain shifts, a faint hiss like rain on a roof.
20 D DOMINIC: Is it supposed to do that?
21 D ELSPETH: Settling.
22 D DOMINIC: It's been empty since 1991.
23 D ELSPETH: Then it's settling slowly.
24 A ¶ She crouches at a floor hatch, rusted shut.
25 A Taps it with her pen.
* 26 A A hollow note.
27 D ELSPETH [CONT'D]: Bin eight. Hold the light.
28 A ¶ Dominic holds it.
29 A The beam shakes, just enough to notice.
30 D DOMINIC: Elspeth, my father worked at one of these.
31 D ELSPETH: Did he?
32 D DOMINIC: He never talked about it. Only that the dust got in your teeth and you tasted it for days.
33 D ELSPETH (not looking up): Mm.
34 D DOMINIC: Do you taste something?
35 A ¶ She stops.
36 A Sniffs.
* 37 A A faint sweetness, like bread left in a warm oven.
38 D ELSPETH: Mold.
39 D DOMINIC: That's not mold.
* 40 A ¶ The hiss above grows.
* 41 A A thin stream of golden kernels runs from a seam in the ceiling, pattering onto the floor between them.
42 A Neither looks away.
43 D DOMINIC [CONT'D]: It's been empty since --
44 D ELSPETH: I know.
45 A ¶ She stands.
* 46 A The stream thickens.
* 47 A Behind them, in the dark, the heavy door they came through swings shut with a soft, deliberate click.
* 48 A No wind.
49 D DOMINIC (whisper): Did you close that?
50 D ELSPETH: No.
51 D DOMINIC: Did I?
52 D ELSPETH: No.
* 53 A ¶ The kernels keep falling.
* 54 A They form a little cone on the concrete.
* 55 A Then, silently, the cone slides sideways, as if tipped by an invisible hand, and a second stream starts from another seam.
56 D DOMINIC: We should go.
57 D ELSPETH: Take the readings first.
58 D DOMINIC: Elspeth.
59 D ELSPETH: Take the readings.
60 A ¶ She walks to the hatch.
61 A Grips the wheel.
* 62 A It turns easily, without a squeal.
* 63 A Oiled.
64 D ELSPETH [CONT'D]: Dominic, who's been here?
65 A ¶ He doesn't answer.
66 A He is backing toward the door, camera forgotten at his hip, the flashlight beam pointing straight up the silo's throat.
* 67 A ¶ Above them, a tide of grain begins to pour.
68 D DOMINIC: RUN.
69 A ¶ He grabs her sleeve.
* 70 A The hatch swings open on its own.
* 71 A A warm breath exhales from below, smelling of bread and rot, and the floor beneath their boots goes soft.

### SCENE s01432 | INT. REGIONAL AIRPORT - BAGGAGE CLAIM - NIGHT
Detected names (may be incomplete or contain aliases): SAOIRSE LINDQVIST, YUSUF BELLAMY
* 1 A ¶ A single carousel grinds in an empty hall.
* 2 A Chairs bolted in rows.
* 3 A A vending machine hums.
* 4 A The arrivals board flickers "DELAYED."
5 A ¶ SAOIRSE LINDQVIST (40s, wool coat, a funeral program folded small in one hand) waits with her arms crossed.
6 A Beside her stands YUSUF BELLAMY (40s, her brother, rumpled, carry-on at his feet, a plastic bag of airport pretzels untouched).
7 A ¶ Neither looks at the other.
8 A They watch the rubber flaps at the end of the belt.
9 D YUSUF: Thought it'd be busier.
10 D SAOIRSE: Last flight in.
11 D YUSUF: Right.
* 12 A ¶ A bag slides out.
* 13 A Black, medium.
14 A Saoirse leans forward.
15 A Yusuf leans forward.
* 16 A It isn't theirs.
17 A It circles past them, and they both watch it, and neither says what both of them are thinking.
18 D SAOIRSE (to the carousel, brightly): Anyone? No? Okay.
19 D YUSUF: Who are you talking to?
20 D SAOIRSE: Habit.
* 21 A ¶ Another bag.
* 22 A A child's suitcase decorated with stickers of a cartoon fox.
23 A Saoirse turns away.
24 A Yusuf stares at it as it passes, then looks at his own shoes, then at the plastic bag of pretzels.
25 A He opens it, takes one, snaps it in half, offers her half without looking.
26 A ¶ She takes it.
27 A Eats it.
28 A They stand shoulder to shoulder, chewing, watching a dull steel belt roll and roll.
29 D YUSUF: Did you call Mum?
30 D SAOIRSE: Tuesday.
31 D YUSUF: What did she say?
32 D SAOIRSE: That the weather's turned.
33 D YUSUF: That's it?
34 D SAOIRSE: That's the whole call.
35 D YUSUF (under his breath): Ten years.
36 D SAOIRSE: What was that?
37 D YUSUF: Nothing.
* 38 A ¶ The belt shudders.
* 39 A A last bag drops from the chute, a cracked brown leather case with a torn tag, and rolls toward them alone.
40 A Saoirse's face does not change.
41 A Yusuf's does, finally, a slow collapse, brow, mouth, chin.
42 A He steps toward it and lifts it with both hands as though it might spill.
43 A She lowers her gaze, takes the funeral program out of her palm, and tucks it into her coat where nobody can see.
44 A He sets the case on the floor between them and kneels, thumbs resting on the latches, and she crouches across from him, one hand finding the handle and the other, without asking, closing over his.
45 D YUSUF [CONT'D]: You knew about the house.
46 D SAOIRSE: Yes.
47 D YUSUF: You knew and you let me fly all the way here.
48 D SAOIRSE: I thought you should see it.
49 A ¶ He lets go of the latch.
50 A She does not let go of his hand.
51 D YUSUF (very quietly): It was never about Mum.

### SCENE s01433 | INT. MARINE AQUARIUM - SHARK TUNNEL - NIGHT
Detected names (may be incomplete or contain aliases): VESPER LOWRY, MUNGO TAKAHASHI, PIPS, ADEBAYO, ROSALIND CHEN-MARCH, DUKE ZELENSKY, ILSE VANTERPOOL
* 1 A ¶ Blue gloom.
* 2 A Silhouettes of rays drift overhead.
3 A Reflected ripples slide across black-clad figures crouched along the tunnel wall.
4 A ¶ VESPER LOWRY (30s, crew boss, earpiece) taps a panel.
5 A MUNGO TAKAHASHI (40s, safe man, fingers like a surgeon's) kneels at a locked case.
6 A "PIPS" ADEBAYO (20s, tech, tablet glowing on her forearm).
7 A ROSALIND CHEN-MARCH (50s, driver, quiet), watches the corridor.
8 A DUKE ZELENSKY (30s, muscle, nervous) checks his watch.
9 D VESPER: Eyes up. Ninety seconds on the loop.
10 D PIPS: Cameras show tank two. No movement.
11 D DUKE (muttering): Tank two. Sure. Tank two.
12 D MUNGO: Quiet. I'm in.
* 13 A ¶ A latch clicks.
14 A He lifts out a velvet tray.
* 15 A Pearls the size of marbles, gleaming.
16 D VESPER: Rosalind, status.
17 D ROSALIND: Clear.
* 18 A ¶ Footsteps echo.
19 A Everyone freezes.
* 20 A A shadow lengthens along the curved glass.
21 A ¶ ILSE VANTERPOOL (60s, security guard, cardigan under her uniform, thermos in hand) rounds the corner.
22 A She sees the crew.
23 A Sees the pearls.
24 A Sips her tea.
25 D ILSE: I don't get paid enough for this.
26 D VESPER: Nobody does. Everybody, stay calm.
27 D ILSE: Is there a plan for me?
28 D PIPS (to Vesper, low): She's not on the schedule.
29 D VESPER (to Ilse): There's a plan. You sit. We leave. You call it in in five minutes, with a good story.
30 D ILSE: I have a bad knee.
31 D DUKE: Just sit!
32 A ¶ She sits.
33 A On the floor.
* 34 A Shark shadows pass over her face.

### SCENE s01434 | INT. NIGHT FERRY - PASSENGER CABIN - NIGHT
Detected names (may be incomplete or contain aliases): CORA WHITLOCK, LEO BASSETT, STRANGER, OSWIN
* 1 A ¶ Fog at the portholes.
* 2 A A sodium lamp swings on its chain.
* 3 A Plastic seats bolted in rows.
* 4 A The engine thrums.
5 A ¶ CORA WHITLOCK (30s) sits clutching a paper cup.
6 A Across from her, LEO BASSETT (30s) tries to sleep with his coat over his face.
7 A ¶ A figure in the far aisle.
8 A Tall.
9 A Wet.
10 A Unmoving.
11 A ¶ Cora notices him.
12 A Lowers her cup.
13 A ¶ He steps closer.
* 14 A Water drips from his sleeves onto the deck.
15 D STRANGER: This seat taken?
16 D CORA: Plenty of seats.
17 D STRANGER: I like this one.
18 A ¶ He sits.
19 A Right beside her.
20 A Too close.
21 A She shifts away.
22 A He watches her do it.
23 A ¶ Leo lifts the coat.
24 A Squints at him.
25 A Sinks back down.
26 D STRANGER [CONT'D]: Is he your husband?
27 D CORA: Brother.
28 D STRANGER: Pity.
29 A ¶ She stands.
30 A He grabs her wrist.
* 31 A Cold.
* 32 A Wet.
33 A She yanks free.
34 D CORA: Leo!
35 A ¶ Leo bolts upright.
* 36 A The coat falls.
37 A The stranger smiles at him.
38 D STRANGER: Easy, friend.
39 A ¶ Leo steps between them.
40 A Shoves him back.
41 A The man laughs, a bright, delighted bark, and raises both hands.
42 D STRANGER [CONT'D]: Oswin. My name is Oswin.
43 D CORA: I don't care.
44 D OSWIN: You will.
45 A ¶ He reaches into his coat.
46 A Leo tenses.
47 A Oswin pulls out a ticket stub, damp, torn.
48 A Holds it up in the lamplight.
49 D OSWIN [CONT'D]: Last ferry to Harrow Point. Nineteen fifty-one.
50 A ¶ Leo takes it.
51 A Reads it.
52 A His face loses color.
53 D LEO: That's a prop.
54 D OSWIN: Is it?
55 A ¶ Cora backs away.
56 A Her heel hits the bulkhead.
57 A Oswin rises slowly.
* 58 A Water pools around his shoes.
59 A ¶ He steps toward her.
60 A She screams.
* 61 A ¶ The lamp swings.
62 A In the swing, he is gone.
* 63 A The seat is empty and wet.
64 A ¶ Leo drops the ticket.
* 65 A It lands in a puddle and darkens.
66 D CORA: Where did he --
67 D LEO: Shh.
68 A ¶ Slowly, he points.
* 69 A Down the aisle.
* 70 A At the far door, a hand rests on the glass, dripping, fingers spread, waiting.

### SCENE s01435 | INT. ABANDONED SALOON - DUSK
Detected names (may be incomplete or contain aliases): HOLLIS GREER, DORA, SIX-CROWS
* 1 A ¶ Dust blankets the long bar.
* 2 A A chandelier hangs by one chain, glass prisms scattered across the floorboards like frozen rain.
* 3 A Through shattered windows the sky bleeds orange into violet.
4 A ¶ HOLLIS GREER (50s, lean as a fence post, long coat gone grey from travel) stands at the bar with a tin cup.
5 A He wipes a stool with his sleeve.
6 A Sits.
7 A Pours water from a canteen and does not drink it.
8 D HOLLIS (to the empty room): Evening, folks.
* 9 A ¶ Nothing.
* 10 A A loose shutter bangs.
11 D HOLLIS [CONT'D]: Place looks like it's seen better days. Same as me.
12 A ¶ He sets the cup down.
13 A Looks at the mirror behind the bar.
* 14 A A crack runs through it like a river on a map.
15 A His own reflection splits in two.
16 D HOLLIS [CONT'D] (muttering): Don't you start.
* 17 A ¶ A voice rings from outside, clear in the thin air.
18 D DORA [O.S.]: Hollis Greer!
19 A ¶ He doesn't flinch.
20 A He sets down the cup, slow.
21 D HOLLIS: I hear you.
22 D DORA [O.S.]: Thought you might. Come out.
23 D HOLLIS: I'm tired, Dora.
24 D DORA [O.S.]: So am I. I rode three hundred miles. Come out or I come in.
25 A ¶ He rubs his face.
26 A Stands.
27 A Settles his coat.
28 A Moves to the doorway but does not cross it.
29 D HOLLIS: Everybody who's listening, I'd like it noted I asked nicely.
30 D DORA [O.S.]: Nobody's listening.
31 D HOLLIS: The horses are.
* 32 A ¶ The batwing doors creak.
* 33 A Spurs ring.
34 A ¶ THEODORA "DORA" SIX-CROWS (40s, braided hair silver at the roots, a Winchester slung across her back, face weathered like bark) pushes through.
35 A Her eyes take in the wreck of the saloon, the chandelier, the cracked mirror, the man.
36 D DORA: You look old.
37 D HOLLIS: You look exactly the same.
38 D DORA: That's not a compliment.
39 D HOLLIS: It wasn't meant as one.
40 A ¶ She walks to the bar.
41 A Takes his cup.
42 A Drinks.
43 A Sets it back.
44 D DORA: You still owe me a horse.
45 D HOLLIS: I owe you more than a horse.
46 D DORA: Start with the horse.

### SCENE s01436 | INT. 24-HOUR LAUNDROMAT - 3 A.M.
Detected names (may be incomplete or contain aliases): AMARA OSEI, JOSEPHINE LAMB, TARIQ HASSAN, BENEDETTA ROSSI, LUCA FERRIER
* 1 A ¶ Fluorescent hum.
* 2 A Dryers turn like slow planets.
3 A Five people, five machines, one wall of washers.
4 A ¶ AMARA OSEI (20s) folds a sheet.
5 A JOSEPHINE LAMB (60s) reads a paperback.
6 A TARIQ HASSAN (30s) stares into dryer four.
7 A BENEDETTA ROSSI (50s) feeds quarters into a slot.
8 A LUCA FERRIER (20s) is asleep on a plastic chair.
9 D AMARA: You're reading that upside down.
10 D JOSEPHINE: I'm reading it the way the author intended.
11 D TARIQ: Excuse me, do any of you know if wool shrinks at low?
12 D BENEDETTA: It shrinks at everything.
13 D TARIQ: Even love?
14 D AMARA: That was smooth.
15 D TARIQ: That was an accident.
16 D JOSEPHINE: They're the best kind.
17 D LUCA (waking): Is it morning?
18 D BENEDETTA: No, caro. It's 3 a.m. and you owe me a quarter.
19 D LUCA: I do?
20 D BENEDETTA: From last Tuesday.
21 D AMARA: You two know each other?
22 D BENEDETTA: Everyone knows everyone here. It's a laundromat.
23 D TARIQ: Then why have I never seen you before?
24 D AMARA: Maybe you weren't looking.
* 25 A ¶ A dryer buzzes.
* 26 A Nobody moves.

### SCENE s01437 | INT. COURTROOM 4B - SENTENCING HEARING - DAY
Detected names (may be incomplete or contain aliases): JUDGE HORTENSE ABARA, CORDELIA PASCOE
* 1 A ¶ Oak paneling, a flag that droops.
* 2 A A ceiling fan that has not turned since the 90s.
3 A ¶ JUDGE HORTENSE ABARA (60s, reading glasses low on her nose, a face carved from patience) presides from the bench.
4 A Below her, defense attorney CORDELIA PASCOE (40s, black suit, red folder) stands at the table with her client's empty chair beside her.
5 D ABARA: Counsel, where is your client?
6 D PASCOE: Your Honor, she is on her way.
7 D ABARA: She was due at nine. It is nine-forty.
8 D PASCOE: She is stuck on the bridge.
9 D ABARA: Then I will wait.
* 10 A ¶ The gallery rustles.
11 A The bailiff coughs.
12 A Pascoe opens her folder, closes it, opens it again.
13 D PASCOE: Your Honor, may I approach?
14 D ABARA: You may not.
15 D PASCOE: It concerns the motion.
16 D ABARA: Denied.
17 D PASCOE: I haven't made it.
18 D ABARA: I know what is in it.
19 A ¶ Pascoe sets her pen down.
20 A Abara removes her glasses, folds them, sets them on the bench.
21 A She looks at Pascoe as one looks at a long-standing wound.
22 D PASCOE: You've decided already.
23 D ABARA: I decided in March.
24 D PASCOE: Then why make her come?
25 D ABARA: Because she should hear it with her own ears.
26 A ¶ Pascoe crosses to the empty chair.
27 A Rests her hand on its back.
28 A Her knuckles whiten.
29 A Abara watches her do it, picks up her gavel, puts it down without striking, and leans forward with both elbows on the bench while Pascoe turns her whole body toward the gallery, scans each face, and then stares straight back up at the bench, jaw working, one foot already moving toward the aisle.
30 D PASCOE: She's not coming.
31 D ABARA: No.
32 D PASCOE: You knew.
33 D ABARA: She called my chambers at eight.
34 D PASCOE: And you let me stand here.
35 D ABARA: I wanted to see what you would do.
36 A ¶ Pascoe laughs once, a dry, helpless sound.
37 A She picks up her folder and hurls it at the table.
* 38 A Papers fly.
39 A The bailiff starts forward.
40 A Abara raises a hand and he stops.
41 D PASCOE: Do you know what she told me about you?
42 D ABARA: Tell me.
43 D PASCOE: That you were the only one who ever looked at her.
44 A ¶ Abara says nothing.
* 45 A The fan overhead gives one slow, grinding turn.

### SCENE s01438 | INT. OCEAN LINER - REFRIGERATED HOLD - NIGHT
Detected names (may be incomplete or contain aliases): PROFESSOR EZEKIEL WARD, NURSE ANNELIESE KROLL, PERISHABLE
* 1 A ¶ Frost on iron.
* 2 A Hanging sides of beef sway in the dim lamplight like pendulums.
* 3 A The ship groans and creaks as it rolls.
* 4 A Steam curls from every breath.
5 A ¶ PROFESSOR EZEKIEL WARD (60s, heavy overcoat, goatee trimmed to a point, a leather medical bag) creeps between the carcasses, a lantern held high.
6 A Behind him comes NURSE ANNELIESE KROLL (30s, white cap beneath a fur collar, face scrubbed pale), clutching a tin of ether.
7 D WARD: Careful. The deck's slick.
8 D KROLL: It is the cold that frightens me, Professor, not the deck.
9 D WARD: Cold is the only honest thing aboard this vessel.
10 A ¶ He swings the lantern.
* 11 A The beam passes a crate stamped "PERISHABLE - HANDLE WITH CARE" and a second crate beside it, longer, narrower, its lid nailed down.
12 D KROLL: That is the one.
13 D WARD: So it is.
14 A ¶ He kneels and prods the lid with a crowbar.
* 15 A The nails shriek.
16 A Kroll looks over her shoulder, then back, then over her shoulder again.
* 17 A The ship lurches.
18 A A beef side swings into her, and she gasps, shoves it away; Ward braces on the crate, wrenches the lid, and the two of them jerk backward as it clatters to the deck and a plume of frozen air sighs out of the dark, carrying a smell of salt and old flowers.
19 D WARD [CONT'D]: Dear God.
20 A ¶ Inside lies a woman in a wedding dress of antique lace, her skin glittering with frost, her hands folded on her breast, eyes closed.
* 21 A Roses, black with age, lie in her hair.
22 D KROLL: She is... she has not decayed.
23 D WARD: She cannot have been dead more than a day.
24 D KROLL: The ledger says fifty years.
25 A ¶ Ward leans in, lantern trembling.
* 26 A The frost on her lashes begins to melt, beads sliding down her temple.
27 A Kroll takes his arm.
28 D KROLL [CONT'D]: Professor. Her eyes.
29 A ¶ The eyelids flutter.
30 A Ward drops the lantern.
* 31 A It shatters; the flame gutters.
* 32 A In the dark, a thin whisper rises from the crate, one syllable, a word like "cold."
33 A ¶ Kroll screams.
34 A Ward throws his coat over the crate, and together they heave the lid back down, hammering it with the crowbar's flat end, and then stand panting in the sudden quiet, the swaying carcasses bumping them like drunken guests.
35 D WARD: We did not hear that.
36 D KROLL: No, Professor.
* 37 A ¶ Behind them, from within the sealed crate, three polite knocks.

### SCENE s01439 | INT. BOOKBINDERY - SUNDAY AFTERNOON
Detected names (may be incomplete or contain aliases): LIORA MENDELSOHN, MATEUS FARIA, SEVERINE ACHARD, ODELL BRIGHT
* 1 A ¶ Quiet.
* 2 A Presses stand like iron monks.
* 3 A Spools of linen thread, bone folders, glue pots.
* 4 A Sun slants through dusty skylights.
5 A ¶ LIORA MENDELSOHN (30s) trims a spine with a knife.
6 A MATEUS FARIA (30s) presses a stack of pages under a brass weight.
7 A SEVERINE ACHARD (50s), the owner, sorts paper by tone.
8 A ODELL BRIGHT (20s) sweeps.
9 D LIORA: Mateus, hand me the paste.
10 D MATEUS: Which paste?
11 D LIORA: The wheat.
12 D MATEUS: There are two wheats.
13 D SEVERINE: The older one, dear. It's more patient.
14 A ¶ Mateus passes her a pot.
15 A Their fingers touch.
16 A Both glance away.
17 D ODELL: Should I do the back room?
18 D SEVERINE: You did it Friday.
19 D ODELL: It got dusty.
20 D SEVERINE: It's a bookbindery.
21 D LIORA: Odell, come hold this.
22 D MATEUS: Odell, come hold this.
23 D LIORA: ^I asked first.
24 D MATEUS: ^I only asked second because you were slow.
25 A ¶ Odell, caught between them, stands with his broom like a flagpole.
26 D ODELL: I'll hold his.
27 D LIORA: Traitor.
28 D SEVERINE: Children. The glue is setting.
29 A ¶ All four go quiet and return to their benches.
* 30 A Scissors snip.
* 31 A Paper whispers.
* 32 A Outside a church bell rings four.
33 D MATEUS (low, to Liora): Dinner?
34 D LIORA (low): Maybe.
35 D SEVERINE: I heard that.
36 D LIORA: You weren't meant to.
37 D SEVERINE: Everything in this room was meant to be heard. It's a very small room.
