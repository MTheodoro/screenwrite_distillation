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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0149.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01678 | INT. DEEP-SEA CORE LAB - NIGHT
Detected names (may be incomplete or contain aliases): SABINE ARGYLE, TEODOR MARSH, VESPER
* 1 A ¶ A pressurized steel cylinder, lit a sickly amber.
* 2 A Pipes sweat.
* 3 A Through a single thick porthole, the black water presses close, and something pale drifts past and is gone.
4 A ¶ DR. SABINE ARGYLE (40s, cropped hair, a sleeve of burn scars) kneels at a sample drawer.
5 A At the console, her partner TEODOR MARSH (50s, round glasses) taps a failing readout.
6 A Between them hovers the lab's AI, VESPER, a small amber light in a ceiling lattice.
* 7 A ¶ The floor shivers.
* 8 A A bolt pings off the wall.
9 D SABINE: That wasn't the pump.
10 D TEODOR: That wasn't the pump.
11 D VESPER [V.O.]: Hull stress at nine percent above tolerance.
12 A ¶ The two scientists exchange a look.
13 A Sabine slams the drawer shut; Teodor lunges for the console.
14 A They collide in the narrow aisle, tangling arms, and both catch the same railing as the lab pitches.
15 D SABINE: Vesper, which section?
16 D TEODOR: Vesper, which section?
17 D VESPER [V.O.]: Aft. The sample bay.
* 18 A ¶ The porthole darkens.
19 A A pale shape presses against it, slow, deliberate.
* 20 A The shiver in the floor becomes a groan.
21 D SABINE: Seal it.
22 D TEODOR: Seal it now!
23 A ¶ They throw their shoulders against the bulkhead wheel together, and it turns, screeching, and the amber light flickers and holds.

### SCENE s01679 | INT. GRANDMOTHER'S ATTIC - EARLY EVENING
Detected names (may be incomplete or contain aliases): ODALYS FERREIRA, RUBEN, ISAURA, GRANDMOTHER FERREIRA, UNCLE TOMAS
* 1 A ¶ Slanted beams.
* 2 A Trunks and a dress form wearing a wedding veil.
* 3 A A single dormer window lets in orange light.
4 A ¶ ODALYS FERREIRA (8) clutches a flashlight like a sword.
5 A She crouches behind a trunk.
6 A Her brother, RUBEN (11), hunches beside her, whispering.
7 A Her cousin, ISAURA (13), perches on the dress form's stand, bored.
8 A They are hiding.
* 9 A ¶ Down the stairs, a door bangs.
* 10 A Heavy footsteps.
11 A ¶ She presses a finger to her lips.
12 A He nods.
13 A Isaura rolls her eyes but goes quiet.
14 A ¶ A shape fills the stairwell.
15 A GRANDMOTHER FERREIRA (70s, flowered apron, spoon in hand) climbs into view, scanning the room.
16 A She frowns.
17 D GRANDMOTHER: Odalys? Ruben? Isaura? Dinner!
18 D ODALYS (whispering): Shh.
19 D RUBEN: You shh.
20 D ISAURA: You're both shh.
21 D GRANDMOTHER: I heard that.
22 A ¶ Nobody moves.
23 A The old woman steps closer to the trunk.
24 A She reaches down, grips the lid.
25 A ¶ She throws it open.
26 A Odalys shrieks.
27 A Ruben yelps.
28 A Isaura topples off the stand, veil flying.
29 D GRANDMOTHER [CONT'D]: Found you!
30 A ¶ They stare at her.
31 A Then, all at once, they burst out laughing, breathless and relieved.
32 D ODALYS: That's not fair, you cheated!
33 D GRANDMOTHER: Old ladies are allowed.
34 A ¶ Tension gone, she ladles a spoonful of soup into Odalys's mouth.
35 A Odalys swallows, grinning.
36 D UNCLE TOMAS [O.S.]: Is that my mother screaming up there?
37 A ¶ He thunders up the stairs, and everyone starts shouting at once.

### SCENE s01680 | INT. ICE-MINING RIG CONTROL CAB - NIGHT
Detected names (may be incomplete or contain aliases): ANSELM DRAKE, CONTROL
* 1 A ¶ A cramped cab bolted to the side of a comet fragment.
* 2 A Frost on the windows.
* 3 A Red warning lights pulse.
4 A ¶ ANSELM DRAKE (40s, miner, worn flight suit) straps into the operator seat.
* 5 A A radio crackles on the dash.
6 D CONTROL [V.O.]: Rig Nine, this is Control. Report.
7 D ANSELM: Rig Nine. Drill's jammed at four hundred meters.
8 D CONTROL [V.O.]: Copy. Is the cable still tensioned?
9 D ANSELM: Tensioned and shaking.
10 D CONTROL [V.O.]: Anselm, you need to cut it loose.
11 D ANSELM: If I cut it, I lose the whole string.
12 D CONTROL [V.O.]: If you don't, you lose the rig.
13 A ¶ Anselm checks a gauge.
* 14 A The needle is buried in the red.
15 D ANSELM: How long have I got?
16 D CONTROL [V.O.]: Eight minutes, maybe less.
17 D ANSELM: Maybe less. Great.
18 D CONTROL [V.O.]: Anselm. Listen to me.
19 D ANSELM: I'm listening.
20 D CONTROL [V.O.]: The fragment is rotating faster than predicted. The tether will snap.
21 D ANSELM: Then tell me what to do.
22 D CONTROL [V.O.]: Release the clamp.
23 D ANSELM: That's what I'm trying to --
* 24 A ¶ The cab lurches.
* 25 A A cup slides off the dash and shatters.
26 D ANSELM [CONT'D]: It's not releasing!
27 D CONTROL [V.O.]: Use the manual override.
28 A ¶ He flips a cover.
29 A Pulls a lever.
* 30 A Nothing.
31 D ANSELM: Manual's dead.
32 D CONTROL [V.O.]: Then go outside.
33 D ANSELM: Outside?
34 D CONTROL [V.O.]: Hammer it free.
35 D ANSELM: You want me to hit it with a hammer.
36 D CONTROL [V.O.]: I want you to live.
37 A ¶ Anselm grabs a helmet.
38 A Seals it.
39 D ANSELM: Tell my sister I said --
40 D CONTROL [V.O.]: Tell her yourself when you're back.
41 D ANSELM: Tell her I said it was a good rig.
42 A ¶ He slaps the airlock.
* 43 A It cycles open on black.

### SCENE s01681 | INT. LUNAR GREENHOUSE DOME - DAY
Detected names (may be incomplete or contain aliases): ENGINEER ILSE VOGEL, BOTANIST KWAME ASANTE, TECHNICIAN BRONWYN FALK, COMMANDER
* 1 A ¶ Rows of tomato plants under pale artificial light.
* 2 A A quiet hum.
3 A ¶ ENGINEER ILSE VOGEL (30s, coveralls) prunes a vine.
4 A BOTANIST KWAME ASANTE (40s) logs readings on a tablet.
5 A They work in comfortable silence.
6 A ¶ TECHNICIAN BRONWYN FALK (20s) hauls a crate of seedlings through the airlock, whistling.
7 D KWAME: Good yield this month.
8 D ILSE: Best since the landing.
9 D BRONWYN: Cafeteria will be thrilled.
* 10 A ¶ A comm panel clicks.
11 D COMMANDER [V.O.]: Dome Two, status check.
12 D KWAME: All green, Commander.
13 D COMMANDER [V.O.]: Good. Keep it that way.
* 14 A ¶ The panel clicks off.
15 A Ilse snips another stem.
* 16 A ¶ Then the lights flicker.
* 17 A Once.
* 18 A Twice.
* 19 A The hum drops in pitch.
20 D BRONWYN: Was that supposed to happen?
21 D ILSE: No.
* 22 A ¶ Every plant in the row leans toward the airlock door.
* 23 A Slowly.
* 24 A As if something outside were calling them.
25 D KWAME: Everyone stay very still.

### SCENE s01682 | INT. COMMUNITY CENTER KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): MAN IN GREEN CARDIGAN, GREEN CARDIGAN, GRETCHEN POLLARD, WALTER
* 1 A ¶ Folding tables.
* 2 A Stacked casserole dishes.
* 3 A A wall clock stuck at 8:10.
4 A ¶ A MAN IN A GREEN CARDIGAN (60s) stands at the sink, scrubbing a pan.
5 A Across the room, GRETCHEN POLLARD (50s, name tag, clipboard) counts paper plates.
6 D GRETCHEN: Okay, everybody, last call for leftovers.
* 7 A ¶ Nobody answers.
* 8 A The room is empty but for the two of them.
9 D GRETCHEN [CONT'D] (to herself): Nine hundred and twelve. Who ate a thousand plates?
10 D MAN IN GREEN CARDIGAN: You've got a lot of plates.
11 D GRETCHEN: Do I know you?
12 D MAN IN GREEN CARDIGAN: Walter. Walter Lindqvist. I'm with the Thursday group.
13 D WALTER: Anyway. I'll be done in a minute.
14 A ¶ Gretchen tallies.
15 A Walter scrubs.
16 D GRETCHEN: You're not on the sign-in sheet, Walter.
17 D WALTER: Nobody ever is.
18 D GRETCHEN (muttering): Then who's been eating all the pie?
19 D WALTER: I'd say it was me, but I like to be honest.
20 A ¶ She checks the clock.
* 21 A Still 8:10.
22 A She shakes her head and goes back to counting.

### SCENE s01683 | INT. FLOODED PARKING GARAGE - NIGHT
Detected names (may be incomplete or contain aliases): LUCKY, ROSSETTI, NATE, OBI, DETECTIVE MARISOL VEGA, SILAS PRINGLE
* 1 A ¶ Six inches of black water cover the concrete.
* 2 A A broken sign sparks overhead.
* 3 A Pillars throw long shadows.
* 4 A Somewhere, a pump coughs.
5 A ¶ LUCIANA "LUCKY" ROSSETTI (30s, wet leather jacket, nervous grin) wades toward a gray sedan, a duffel bag on her shoulder.
6 A At the car, her partner NATHANIEL "NATE" OBI (40s, calm, wire-rimmed glasses) checks the trunk.
7 D LUCKY: Tell me it's all there.
8 D NATE: Count it yourself.
9 D LUCKY: I trust you.
10 D NATE: You shouldn't.
11 A ¶ She drops the bag in the trunk.
12 A He slams it shut.
* 13 A Headlights sweep across the pillars.
14 D LUCKY: Who's that?
15 D NATE: Nobody.
16 D LUCKY: Nate. Who is that?
* 17 A ¶ A black van rolls to a stop.
* 18 A The door slides open.
19 A DETECTIVE MARISOL VEGA (40s, rain slicker, badge on her belt) steps out into the water, weapon drawn.
20 D MARISOL: Hands where I can see them! Both of you!
21 D LUCKY: Marisol, wait, I can explain --
22 D NATE: Don't say a word, Lucky.
23 D MARISOL: Away from the car, Nathaniel!
24 D NATE: It's Nate.
25 D MARISOL: I don't care what it is!
26 A ¶ SILAS PRINGLE (60s, garage attendant in a yellow poncho) peers around a pillar, flashlight shaking.
27 D SILAS: Folks? We're closed. Folks?
28 A ¶ Lucky lunges for the trunk; Nate grabs her wrist; Marisol fires a warning shot that rings off the ceiling.
29 A All three freeze, and the water ripples outward from their feet.
30 D LUCKY: You said she wasn't coming.
31 D NATE: I said she wasn't supposed to.
32 D MARISOL: Last chance. Step away.
33 A ¶ Nate lets go of Lucky.
34 A She sprints for the stairwell; Marisol swings the gun toward her, then back at Nate.
35 A He lifts his hands slowly.
36 D NATE [CONT'D] (quiet): You were always better at this than me.
37 D MARISOL: Don't flatter me. Where's she going?
38 D NATE: Up.
39 A ¶ Marisol lowers her gun an inch.
40 A Then raises it again.
* 41 A Footsteps splash away into the dark.

### SCENE s01684 | INT. MINOR LEAGUE BASEBALL CLUBHOUSE - NIGHT
Detected names (may be incomplete or contain aliases): SKIP, CUELLAR, PITCHER DARIUS WHELAN, BEA, FONSECA, SHORTSTOP KENJI NAKASHIMA, SEUN, ADEBAYO
* 1 A ¶ Lockers.
* 2 A Bats in racks.
* 3 A A cooler of sports drink.
* 4 A Rain drums on a tin roof.
5 A ¶ The Millbrook Herons sit in a loose half-circle.
6 A MANAGER LEONARD "SKIP" CUELLAR (60s, thick mustache) stands before them.
7 A Around him: PITCHER DARIUS WHELAN (20s), CATCHER BEATRIZ "BEA" FONSECA (30s), SHORTSTOP KENJI NAKASHIMA (20s), and TRAINER OLUWASEUN "SEUN" ADEBAYO (40s).
8 D SKIP: Good game, fellas. Good game.
9 D DARIUS: We lost eleven to two, Skip.
10 D SKIP: Did we? I didn't notice.
11 D BEA: You were in the dugout, Skip. You noticed.
12 D SKIP: I notice everything, Bea. That's why I'm manager.
13 D KENJI: You called a bunt with two outs.
14 D SKIP: It was a tactical bunt.
15 D SEUN: It was a tactical disaster, boss.
16 D SKIP: Seun, you're a trainer.
17 D SEUN: And I trained for this.
18 D DARIUS: Skip, are we still in the standings?
19 D SKIP: Technically.
20 D BEA: Technically how?
21 D SKIP: Technically, there are eight teams, and you can't be lower than eighth.
22 D KENJI: We're eighth.
23 D SKIP: See? Technically alive.
24 D DARIUS: Skip, I walked nine batters.
25 D SKIP: Nine is a nice number.
26 D BEA: Skip, I've never seen you this calm.
27 D SKIP: That's because I've got news, Bea.
28 D SEUN: Good news?
29 D SKIP: Franchise is moving. Sold to a company in Tulsa. Last game's Sunday.
30 A ¶ Nobody speaks.
* 31 A The rain gets louder.
32 D DARIUS: Seriously?
33 D SKIP: I wouldn't kid, Darius. Not about this.
34 D KENJI: When did you know?
35 D SKIP: Since March. Didn't want to spoil the season.
36 D BEA: Spoil it? Skip --
37 D SKIP: Bea, wait. I'm proud of every one of you. Win or lose.
38 D SEUN (quietly): We mostly lost.
39 D SKIP: We mostly lost beautifully, Seun.

### SCENE s01685 | INT. ER TRAUMA BAY 3 - NIGHT
Detected names (may be incomplete or contain aliases): PRIYA RAMASWAMY, NURSE CALEB DUNMORE, INGRID SOLBERG, OTIS WEBB, PARAMEDIC GUS TREMAINE
* 1 A ¶ Harsh white light.
* 2 A Stainless steel.
* 3 A A monitor beeps too fast.
* 4 A Blood on the floor tiles, smeared by a gurney's wheels.
5 A ¶ DR. PRIYA RAMASWAMY (40s, surgical cap, steady) leans over a patient.
6 A NURSE CALEB DUNMORE (30s, tattooed forearms) squeezes a bag valve.
7 A RESIDENT DR. INGRID SOLBERG (20s, pale and wide-eyed) hovers at the foot of the bed.
8 A On the table lies MR. OTIS WEBB (70s), unconscious, his shirt cut open.
9 D PRIYA: Pressure?
10 D CALEB: Seventy over forty.
11 D PRIYA: Ingrid, give me two units of O neg.
12 D INGRID: Right away, Dr. Ramaswamy.
13 D PRIYA: Priya. Please. Just Priya.
14 A ¶ PARAMEDIC GUS TREMAINE (30s, soaked jacket) bursts in, still holding a clipboard.
15 D GUS: Dr. Priya! Wife says he took nitro an hour ago!
16 D CALEB: He's crashing.
* 17 A ¶ The monitor flatlines.
* 18 A A long, flat tone.
19 D PRIYA: Charge to two hundred.
20 D CALEB: Charging.
21 D PRIYA: Clear!
22 A ¶ The body jerks.
* 23 A The line stays flat.
24 D PRIYA [CONT'D]: Again. Three hundred.
25 D INGRID: Dr. Priya --
26 D PRIYA: Now, Ingrid!
* 27 A ¶ Another shock.
* 28 A A blip.
* 29 A Another.
* 30 A A steady rhythm.
31 D CALEB: We have a pulse.
32 A ¶ Ingrid exhales.
33 A Priya wipes her forehead with a gloved wrist.

### SCENE s01686 | INT. BOWLING ALLEY - LEAGUE NIGHT
Detected names (may be incomplete or contain aliases): BIG ARNOLD KESSLER, MINNIE, TRAN, DEACON FOLEY, POPPY ESTRADA
* 1 A ¶ Neon pins.
* 2 A Fryer smell.
* 3 A Scoreboards flicker.
* 4 A ¶ Lane Six.
5 A BIG ARNOLD KESSLER (50s) lifts a ball.
6 A His rival WILHELMINA "MINNIE" TRAN (50s) crosses her arms behind him.
7 A At the counter, the owner DEACON FOLEY (60s) polishes shoes.
8 A At a corner table, teenager POPPY ESTRADA (16) keeps score, chewing a straw.
9 A ¶ He rolls.
* 10 A Strike.
11 A She doesn't clap.
12 A He turns.
13 A She smirks.
14 A ¶ She steps up, rolls.
* 15 A Gutter.
16 A He laughs.
17 A She glares.
18 A ¶ Deacon looks at the clock.
19 A Poppy looks at her phone.
20 D ARNOLD: Tough break.
21 D MINNIE: Wait your turn.
22 A ¶ He picks a ball.
23 A So does she.
24 A They reach for the same one.
25 A Their hands collide.
26 A Both pull back.
27 D DEACON: Folks, there's a rack of them.
28 A ¶ Arnold shrugs and takes another.
29 A Minnie takes the first, grips it, and rolls.
* 30 A Strike.
31 A She turns and bows, slowly.
32 A He nods, grudging.
33 D POPPY: That's two-forty to two-thirty-eight.
34 A ¶ Neither of them breathes.
35 A Then both start toward the scoreboard at once, shoving past each other, until Deacon steps between them with both palms out.

### SCENE s01687 | EXT. FLOODED TRENCH - DAWN
Detected names (may be incomplete or contain aliases): PRIVATE EMIL HARTMANN, SOLDIER, TORN GREATCOAT, BRANDT
* 1 A ¶ Mud to the knees.
* 2 A Barbed wire.
* 3 A Smoke on the horizon.
4 A ¶ PRIVATE EMIL HARTMANN (20s, cracked glasses) crouches against the wall, rifle across his lap.
5 A A SOLDIER IN A TORN GREATCOAT (30s) slides into the trench beside him, breathing hard.
6 D SOLDIER: Is this Third Company?
7 D EMIL: Who's asking?
8 D SOLDIER: Corporal. Lost my squad in the night.
9 D EMIL: Name?
10 D SOLDIER: Brandt. Franz Brandt.
11 D EMIL: Then welcome, Corporal Brandt.
12 A ¶ Brandt leans back against the mud.
13 D BRANDT: Quiet this morning.
14 D EMIL: Too quiet.
* 15 A ¶ A whistle shrieks overhead.
16 A Both men duck.
* 17 A A shell lands a hundred yards off, throwing up a column of dirt.
* 18 A Silence.
19 A Then Emil laughs, shakily.
20 D EMIL [CONT'D]: That was close.
21 D BRANDT: Not close enough.
22 A ¶ They sit in the mud.
23 A Neither speaks.
* 24 A The smoke drifts on.

### SCENE s01688 | INT. FIELD HOSPITAL TENT - DAY
Detected names (may be incomplete or contain aliases): SERGEANT AUGUSTINE MBEKI, CORPORAL TADEUSZ KOWALCZYK, MEDIC FELICITY ROUSE
* 1 A ¶ Cots in rows.
* 2 A Canvas walls glow with afternoon sun.
* 3 A A fan turns slowly overhead.
4 A ¶ SERGEANT AUGUSTINE MBEKI (30s, bandaged arm) sits on a cot cleaning his boots.
5 A Across the aisle, CORPORAL TADEUSZ KOWALCZYK (20s, head wrapped in gauze) stares at the ceiling.
6 A At the foot of Tadeusz's cot, MEDIC FELICITY ROUSE (30s, bloodied apron) writes in a chart.
7 D AUGUSTINE: How's the head?
8 D TADEUSZ: Still attached.
9 D FELICITY: He's lucky. Another inch and it wouldn't be.
10 D AUGUSTINE: You said that about me last week.
11 D FELICITY: And you're still lucky.
12 D TADEUSZ: Is he always like this?
13 D FELICITY: Worse on Tuesdays.
14 D AUGUSTINE: It's Wednesday.
15 D FELICITY: Then you're improving.
16 A ¶ She flips a page, checks Tadeusz's pulse, and moves down the row.
17 A Augustine watches her go.
18 D AUGUSTINE: She's the best medic in the division.
19 D TADEUSZ: She's the only medic in the division.
20 D AUGUSTINE: That too.
* 21 A ¶ Silence.
* 22 A The fan ticks.
23 D TADEUSZ: Do you think they'll send us back?
24 D AUGUSTINE: They always do.
25 D TADEUSZ: When?
26 D AUGUSTINE: When we're ready.
27 D TADEUSZ: And if we're not?
28 D AUGUSTINE: Then they'll send us anyway.
29 A ¶ Tadeusz closes his eyes.
30 A Augustine goes back to his boots, brushing off the dust, one stroke at a time.
31 D FELICITY [O.S.]: Mail's here! Anybody expecting a letter?
32 A ¶ Neither of them answers.

### SCENE s01689 | EXT. SNOWBOUND MOUNTAIN PASS - DAY
Detected names (may be incomplete or contain aliases): GLORIA PENDERGAST, DANIEL HOYT, SUNITA RAO, TEDDY, AUGUST LEBLANC, COLETTE
* 1 A ¶ Wind-scoured white.
* 2 A A crashed bus lies on its side, half-buried in drift.
3 A ¶ Six survivors huddle in its lee.
4 A GLORIA PENDERGAST (50s), the driver, scrapes ice off a window.
5 A DANIEL HOYT (30s) feeds a tiny fire.
6 A SUNITA RAO (40s) bandages a boy's hand.
7 A The boy, TEDDY (9), watches the flames.
8 A AUGUST LEBLANC (60s) and his wife COLETTE (60s) share one blanket.
9 A ¶ She tucks Teddy's scarf tighter.
10 A He doesn't flinch.
11 D GLORIA: Radio's dead.
12 D DANIEL: Of course it is.
13 D SUNITA: We have food for two days.
14 D AUGUST: Three, if we ration.
15 D COLETTE: Four, if we don't mind being hungry.
16 A ¶ He hands her the last cracker.
17 A She breaks it in half and gives one piece to the boy.
18 D TEDDY: Thank you.
19 A ¶ She nods.
20 A Gloria sets her jaw, picks up a shovel, and heads into the wind.
21 A He rises to follow.
22 A She waves him back.
23 D GLORIA: Stay. Keep the fire.
24 A ¶ Daniel sits.
25 A Sunita looks at the sky.
26 A Nobody says a word.

### SCENE s01690 | INT. COUNTRY MANOR - GREAT HALL - NIGHT (1789)
Detected names (may be incomplete or contain aliases): LORD EDMUND HARCOURT, LADY CATHERINE, SIR REGINALD FAIRFAX, JEREMIAH POOLE, CAPTAIN WILLIAM ASHBY, PYM
* 1 A ¶ A long hall with a vaulted ceiling blackened by two centuries of candle smoke.
* 2 A A table, laid for a supper no one has touched, runs down the center; tapers gutter in silver branches.
* 3 A Beyond the tall windows, a thin rain beats the leaded glass.
* 4 A The air smells of beeswax, wet wool and old grievance.
5 A ¶ LORD EDMUND HARCOURT (60s, powdered wig, gout-swollen foot propped on a stool) presides at the head of the table.
6 A To his right, his daughter LADY CATHERINE (20s, rigid in a stiff blue gown, her fan snapped shut) studies her plate.
7 A Opposite sits her suitor, SIR REGINALD FAIRFAX (30s, florid, a ring on every finger), who smiles too much.
8 A Pouring wine with shaking hands is the footman, JEREMIAH POOLE (20s, livery slightly too big).
9 D EDMUND: Reginald, you were saying.
10 D REGINALD: Only that the estate in Kent would suit Catherine admirably.
11 D CATHERINE: Would it suit Catherine, Sir Reginald? Or would Catherine suit it?
12 D REGINALD: Madam, you misjudge me.
13 D EDMUND: Catherine, mind your tongue.
14 A ¶ She sets her fan on the cloth with a click.
15 A Jeremiah's pour wobbles; a thread of claret spills across the linen.
16 A Nobody dares notice.
17 D CATHERINE: I shall not marry him, Father.
18 D EDMUND: You shall marry whom you are bid.
* 19 A ¶ The door at the far end bangs open.
20 A A stranger in a travelling cloak stands in the draught, rain dripping from his hat.
21 A CAPTAIN WILLIAM ASHBY (30s, scarred cheek, a soldier's rigid bearing) removes the hat and bows stiffly.
22 D WILLIAM: Forgive the hour, my lord. I come from the Indies, with news.
23 A ¶ Catherine rises so quickly her chair falls.
24 A Edmund's face turns the color of ash.
25 D EDMUND: Ashby. You are dead.
26 D WILLIAM: So I have been told.
27 D REGINALD: Sir, this is a private supper!
28 A ¶ William crosses the hall; Reginald stands, and the two collide at the table's head, shoving, overturning a candlestick.
29 A Jeremiah drops the decanter.
* 30 A It shatters.
* 31 A The flames leap on the spilled wine and race across the cloth.
32 D CATHERINE: William!
33 D EDMUND: Servant, a bucket! Fetch a bucket!
34 A ¶ Jeremiah bolts for the door and collides with MRS. PYM (50s, the housekeeper, cap askew), who is carrying a bucket already.
35 D MRS. PYM: Lord have mercy, I smelt it from the pantry!
36 A ¶ She hurls the water.
37 A Reginald and William grapple among the candles while smoke curls toward the vaulted ceiling.

### SCENE s01691 | INT. INFLATABLE CASTLE RENTAL SHOP - DAY
Detected names (may be incomplete or contain aliases): MO, DELACROIX-BROWN, PAIGE QUINTANILLA, GLADYS QUINTANILLA, FITZ
* 1 A ¶ A warehouse full of deflated bouncy castles, piled like sleeping dragons.
* 2 A Fans hum.
* 3 A A cash register dings.
4 A ¶ MAURICE "MO" DELACROIX-BROWN (50s, polo shirt, sunburnt nose) stands behind the counter.
5 A Across from him, bride-to-be PAIGE QUINTANILLA (30s, tailored blazer, manic energy) taps a tablet.
6 A Behind her, her mother GLADYS QUINTANILLA (60s, enormous sunglasses) examines a banner.
7 A In the corner, a lanky teenager, FITZ (17, apron with a name tag), pumps a foot blower.
8 D PAIGE: It has to be a castle. Not a bouncy house. A castle.
9 D MO: Ma'am, they're the same thing.
10 D PAIGE: They are not the same thing.
11 D MO: It has turrets. It bounces.
12 D PAIGE: My wedding is in six days.
13 A ¶ Mo takes a long breath.
14 A Gladys tilts her sunglasses down.
15 D GLADYS: Paige, honey, nobody's going to bounce at a wedding.
16 D PAIGE: Mom, there are twelve children coming.
17 D GLADYS: Twelve children and nobody's bouncing.
18 A ¶ Fitz stops pumping.
* 19 A The blower wheezes out.
20 A He looks at the others and says nothing.
21 D MO: I have the Camelot Deluxe. Seven by seven. Cannons on the parapet.
22 D PAIGE: How many cannons?
23 D MO: Four.
24 D PAIGE: Do they fire?
25 D MO: Air, ma'am.
26 D PAIGE: Fire real things?
27 D MO: Absolutely not.
28 A ¶ Paige narrows her eyes.
29 A Gladys lowers her sunglasses all the way and stares at Mo, then at the ceiling, as if praying.
30 D PAIGE: I'll take the Camelot.
31 D MO: Wonderful.
32 D PAIGE: But I want it in pink.
33 D MO: It's gray.
34 D PAIGE: Make it pink.
35 A ¶ Mo looks at Fitz.
36 A Fitz looks at the floor.
* 37 A The register dings by itself.
38 D MO: Fitz. Do we own pink paint?
39 D FITZ: We own a lot of paint.
40 D MO: Pink?
41 D FITZ: There's some salmon.
42 D MO: Salmon is pink.
43 D PAIGE: It is not.
44 D GLADYS: Paige, salmon is a lovely color.
45 D PAIGE: Mother!
46 A ¶ Gladys folds her arms.
47 A Paige breathes through her nose.
48 A Mo slides a clipboard across the counter, and Paige signs without reading.
49 A Fitz resumes pumping, a little faster than before.
50 D MO: Six days, then. I'll deliver Friday morning.
51 D PAIGE: Thursday night.
52 D MO: Friday morning.
53 D PAIGE: Thursday.
54 D MO (to himself): Thursday it is.
55 A ¶ Paige sweeps out.
56 A Gladys lingers, takes off the sunglasses, and slips Mo a folded fifty.
57 D GLADYS: For your trouble.
58 A ¶ She puts the glasses back on and follows her daughter out the door.
59 D FITZ: Was that a tip?
60 D MO: That was a ransom.

### SCENE s01692 | INT. ROOFTOP CONSERVATORY - EVENING
Detected names (may be incomplete or contain aliases): SOLANGE MARCHETTI, ARTHUR BEAUMONT, CORDELIA BEAUMONT, LEOPOLD VASS, HANNELORE KRUG, LAZARUS RENNICK
* 1 A ¶ Glass and ironwork.
* 2 A Orchids in terra-cotta pots.
* 3 A A string quartet tunes in the corner.
4 A ¶ SOLANGE MARCHETTI (30s, emerald dress) accepts a champagne flute while her fiancé, ARTHUR BEAUMONT (30s, tuxedo) is intercepted by his mother, CORDELIA BEAUMONT (60s, pearls), who plucks a stray thread from his lapel as the cellist, LEOPOLD VASS (20s, nervous), drops his bow and scrambles after it, and the violist, HANNELORE KRUG (40s, steel-rimmed glasses), steadies a music stand that Leopold's elbow almost topples, and Solange, observing all this, steps backward into a potted fern.
5 D SOLANGE: Sorry, ferns. Sorry.
6 D ARTHUR: You all right?
7 D SOLANGE: Splendid.
8 A ¶ At the door, LAZARUS RENNICK (30s, rumpled suit, a mysterious envelope) appears.
9 A He catches her eye, taps his chest twice.
10 A She stiffens.
11 A Arthur doesn't notice.
12 D CORDELIA: Arthur, stand straight.
13 D ARTHUR: I am standing straight, Mother.
14 D CORDELIA: Straighter.
15 D SOLANGE: Arthur, I need a moment.
16 D ARTHUR: Solange, I need a moment.
17 A ¶ Both laugh, awkwardly.
18 A Cordelia lifts an eyebrow.
19 A Hannelore sets the stand down and glances toward the door.
20 A Lazarus is gone.
* 21 A The envelope sits on the threshold, white against the dark tiles.
22 D SOLANGE: I'll be right back.
23 A ¶ She crosses the conservatory quickly, snatches the envelope, tears it open.
24 A Her face drains of color.
* 25 A Behind her, the quartet strikes up the first bars of a waltz, bright and cheerful.

### SCENE s01693 | INT. TRANSIT AUTHORITY LOST-PROPERTY OFFICE - DAY
Detected names (may be incomplete or contain aliases): OPAL REINHARDT, OLDER MAN, AMBROSE
* 1 A ¶ Shelves of umbrellas, gloves, a prosthetic leg.
* 2 A Fluorescent tubes.
* 3 A A counter with a bell.
4 A ¶ OPAL REINHARDT (40s, cardigan, lanyard) sorts a bin of scarves, folding each into a neat square, one at a time, with the slow rhythm of someone who has not slept.
5 A At the counter, an OLDER MAN (70s, flat cap, grocery bag) waits, rocking on his heels, patient, polite, watching her.
6 D OPAL: Be right with you.
7 D OLDER MAN: No rush.
8 A ¶ She finishes the scarf.
9 A Moves to the next.
10 A He glances at the shelves, at the umbrellas, at the leg, and back at her.
11 D OPAL [CONT'D]: What did you lose?
12 D OLDER MAN: A coat.
13 D OPAL: Color?
14 D OLDER MAN: Gray. Wool. My wife's initials in the lining.
15 D OPAL: Date?
16 D OLDER MAN: Fourteenth. On the Number 9.
17 A ¶ She crosses to a rack, runs her fingers along the hangers, and stops at a gray coat.
18 A She lifts it, turns it inside out, finds the stitched letters.
19 A She says nothing for several seconds.
20 D OPAL [CONT'D]: What initials?
21 D OLDER MAN: M.R.
22 A ¶ She lowers the coat onto the counter, smoothing the sleeves.
23 A Her hands tremble.
24 D OPAL: Sir. What's your name?
25 D OLDER MAN: Ambrose Reinhardt.
26 A ¶ She closes her eyes.
27 A Opens them.
28 A Looks at him properly for the first time.
29 A He looks back at her, and something in his posture shifts, softens, as though he has recognized her also.
30 D AMBROSE: Opal?
31 D OPAL: Hello, Dad.
32 A ¶ He takes the coat.
33 A He doesn't put it on.
34 A He holds it against his chest while the bell above the door jingles for someone else entirely.

### SCENE s01694 | EXT. HOLLOW OAK GLADE - TWILIGHT
Detected names (may be incomplete or contain aliases): WITCH, SIBYLLE ORMONDE, FINNEGAN BRAE
* 1 A ¶ An oak older than the kingdom, hollowed by lightning and furred with moss.
* 2 A Fireflies drift between roots as thick as cottages.
* 3 A The sky is violet, and the first stars hang low, like lanterns on unseen strings.
4 A ¶ An old WITCH, SIBYLLE ORMONDE (70s), sits on a stump.
5 A Her cloak is the color of crow feathers.
6 A She stirs a small iron pot hung from a tripod, and the smoke rises in spirals that briefly resemble faces.
7 A Before her stands a boy, FINNEGAN BRAE (12), barefoot, gripping a lantern with both hands.
8 A ¶ She does not look up.
9 A He clears his throat.
10 D FINNEGAN: I came for the cure.
11 D SIBYLLE: Did you.
12 A ¶ She dips a wooden spoon and tastes.
13 A Her mouth puckers.
14 A She lets him wait.
15 D FINNEGAN: My sister has a fever. The healers said you could help.
16 D SIBYLLE: The healers say a great many things.
17 A ¶ She sets the spoon aside, rises with a creak of old bones, and circles him slowly, as one circles a horse at market.
18 D SIBYLLE [CONT'D]: What have you brought?
19 D FINNEGAN: Silver. Three coins.
20 D SIBYLLE: Silver is for fools. What else?
21 A ¶ He hesitates.
22 A His fingers tighten on the lantern.
23 A Then he reaches into his tunic and draws out a small bone whistle, yellowed with age.
24 D FINNEGAN: My father's.
25 A ¶ Her eyes sharpen.
26 A She plucks it from his palm and turns it in the firelight.
27 A For a long moment, she says nothing, and the fireflies pause in the air.
28 D SIBYLLE: Where did you get this?
29 D FINNEGAN: He left it. When he went to the war.
30 D SIBYLLE: And did he return?
31 A ¶ He shakes his head.
32 A She presses the whistle back into his hand and folds his fingers over it.
33 D SIBYLLE [CONT'D]: Keep it. A cure costs less than you fear.
34 A ¶ She ladles the dark brew into a clay vial, stoppers it with wax, and presses it into his other palm.
35 A He stares at it, then at her, and bows his head.
36 D FINNEGAN: Thank you.
37 D SIBYLLE: Go home. Before the moon is full.
38 A ¶ He turns and runs.
* 39 A The lantern bobs between the roots and fades.
40 A She watches until the last glimmer is gone, then lowers herself onto the stump and picks up the whistle's twin from her own pocket, and holds the two together.

### SCENE s01695 | EXT. DRIVE-IN THEATER PARKING FIELD - NIGHT
Detected names (may be incomplete or contain aliases): JAY, WHITFIELD, NORI, VASQUEZ-HALL, ARCHIE PLUMMER, SABRINA DOYLE, GIRL WITH CAMERA
* 1 A ¶ A gravel lot under a weathered screen.
* 2 A Speaker posts stand in rows like headstones.
* 3 A The movie plays silent; the glow washes across a dozen parked cars.
4 A ¶ Four teenagers sit on the hood of a rusted pickup.
5 A JAMAL "JAY" WHITFIELD (17, varsity jacket, restless) tosses a bottle cap.
6 A His best friend LENORE "NORI" VASQUEZ-HALL (17, band tee, headphones around her neck) swings her legs.
7 A ARCHIE PLUMMER (16, braces, thick glasses) peels a sticker off a soda can.
8 A Beside them, SABRINA DOYLE (17, thrift-store dress, a camera on a strap) frames shots of the screen.
9 D JAY: Ten bucks says he kisses her.
10 D NORI: He doesn't kiss her. He dies in act three.
11 D ARCHIE: He doesn't die.
12 D NORI: He dies, Archie.
13 D ARCHIE: You've seen it?
14 D NORI: Twice.
15 D JAY: Then why'd we come?
16 D NORI: Because it's summer and nobody has a car that works.
17 D GIRL WITH CAMERA: Hold still, Jay. Your jacket's glowing blue.
18 D JAY: Sabrina, I'm not posing.
19 D SABRINA: It looks nice.
20 D JAY: Does it?
21 D NORI: Archie, are you eating the whole bag?
22 D ARCHIE: It's a family bag.
23 D NORI: We're a family?
24 D JAY: We're the closest thing Archie's got.
25 D ARCHIE: That's not funny.
26 D SABRINA: It's a little funny.
27 D ARCHIE: Okay, a little.
28 D JAY: So what's after this? College? Real life?
29 D NORI: Next September.
30 D SABRINA: Don't say it like that.
31 D NORI: Like what?
32 D SABRINA: Like it's a funeral.
33 D ARCHIE: I'm going to Ohio.
34 D JAY: Ohio?
35 D ARCHIE: They have a good robotics program.
36 D NORI: Ohio. Wow.
37 D JAY: You'll be great, Arch.
38 D ARCHIE: Will I?
39 D JAY: You'll be the best.
40 D SABRINA: I'm staying here. Dad's shop.
41 D JAY: You hate the shop.
42 D SABRINA: I like the darkroom.
43 D NORI: Then take pictures of it.
44 D SABRINA: I will.
45 A ¶ She raises the camera and fires.
* 46 A The shutter clicks.
* 47 A In the frame, three faces glow blue in the screen light, and one of them, Jay's, looks away.
48 D JAY: What about me?
49 D NORI: What about you?
50 D JAY: Where do I go?
51 D NORI: Anywhere, Jay.
52 D ARCHIE: Somewhere with better snacks.
53 A ¶ They laugh.
* 54 A On the screen, the hero delivers his last line without sound.
55 A Nori mouths along.
56 A Jay hurls the bottle cap at the screen.
* 57 A It pings off the post.
58 D JAY: Nobody ever remembers the summer, they remember the end of it.
59 D SABRINA (quietly): Then let's make it a long one.

### SCENE s01696 | INT. PIE-BAKING CONTEST TENT - DAY
Detected names (may be incomplete or contain aliases): CHLOE BANKS, HORACE PINKERTON, DOLORES FINCH, BIRDIE KAPOOR, RAJIV KAPOOR
* 1 A ¶ Gingham tablecloths.
* 2 A Fans stirring warm air.
* 3 A Judges' scorecards flutter in the draft.
4 A ¶ CHLOE BANKS (30s, apron, flour on her cheek) lifts a lattice-topped pie and carries it to the judges, passing her rival HORACE PINKERTON (60s, chef's whites, ego like a thundercloud), who turns his own pie a precise quarter inch.
5 A Meanwhile the host, DOLORES FINCH (50s, sequin blazer), twirls her microphone cord.
6 A Two tables over, nine-year-old BIRDIE KAPOOR (9) licks a spoon, and her father RAJIV KAPOOR (40s) tries gently to take it away.
7 D DOLORES: Contestants, five minutes!
8 D HORACE: Five? We were promised ten!
9 D CHLOE: We were not promised ten.
10 D RAJIV: Birdie, spoon.
11 D BIRDIE: It's evidence.
12 D HORACE: Evidence of what?
13 D BIRDIE: That your pie is dry.
14 A ¶ Horace turns the color of rhubarb.
15 A Chloe sets her pie down and presses her lips together very hard.
16 D DOLORES: Folks, folks, let's keep it friendly!
17 A ¶ Horace seizes his tin and thrusts it forward, but the crust slides and his whole filling lands on the floor in a perfect round puddle.
18 A Nobody speaks.
* 19 A The fans whir.
20 D BIRDIE: Told you.

### SCENE s01697 | INT. NEONATAL ICU - NIGHT
Detected names (may be incomplete or contain aliases): AMARA OKELLO, NURSE WOJTEK BIALEK
* 1 A ¶ Dim.
* 2 A Incubators glow like small aquariums.
* 3 A Monitors beep in patient intervals.
4 A ¶ DR. AMARA OKELLO (40s, surgical mask pulled under her chin) checks a chart.
5 A Beside her, NURSE WOJTEK BIALEK (30s, soft-voiced) adjusts a tube.
6 A ¶ She lifts the baby's tiny wrist.
7 A He holds a dosage syringe to the light.
8 A Both are quiet.
9 D AMARA: Heart rate steady?
10 D WOJTEK: Steady.
11 A ¶ She nods.
12 A He adjusts the monitor.
13 A She smiles, a little.
14 D AMARA: Go home, Wojtek.
15 D WOJTEK: After my shift.
16 D AMARA: It's three a.m.
17 D WOJTEK: After my shift.
18 A ¶ He moves to the next incubator.
19 A She follows.
20 A They check, they chart, they check again.
* 21 A ¶ An alarm shrills.
22 A Both spin.
* 23 A The monitor on bed four flatlines.
24 D WOJTEK [CONT'D]: Doctor!
25 D AMARA: I see it.
26 A ¶ She reaches in; he pulls the cover.
27 A She tilts the baby's chin, begins tiny compressions with two fingers.
28 A He hands her a syringe; she pushes it.
* 29 A Nothing.
30 A She compresses again.
31 D WOJTEK [CONT'D]: Come on.
32 D AMARA: Come on, little one.
* 33 A ¶ A blip.
* 34 A Another.
* 35 A A rhythm.
36 A Both freeze, listening.
* 37 A The alarm cuts out.
38 A ¶ She lets out a shaky breath.
39 A He sets the syringe down.
40 A Neither of them moves.
41 A She looks at him; he nods.
42 D AMARA [CONT'D]: That was close.
43 D WOJTEK: Too close.
44 A ¶ He pulls a stool over and sits.
45 A She takes the chart off its hook and, without a word, starts writing.

### SCENE s01698 | EXT. BRIDGE OVER A BOTTOMLESS RAVINE - DAWN
Detected names (may be incomplete or contain aliases): HOODED TRAVELER, TROLL, ORVAL GRUNDSTONE, MAELIS
* 1 A ¶ A rope bridge strung between two cliffs, shrouded in mist.
* 2 A Below, a river roars unseen.
3 A ¶ A HOODED TRAVELER (30s, patched cloak, a staff in hand) stands at the near end.
4 A On the far side waits a TROLL, ORVAL GRUNDSTONE (towering, mossy, a toll ledger tucked under one arm).
5 D HOODED TRAVELER: Is this the only crossing?
6 D ORVAL: Only one for a hundred leagues.
7 D HOODED TRAVELER: Then I'll pay the toll.
8 D ORVAL: Toll is a story. A true one.
9 A ¶ The traveler sets down the staff, lowers the hood to reveal a weathered face and a braid of silver-streaked hair.
10 D HOODED TRAVELER: Very well. My name is Maelis. I was a queen.
11 D ORVAL: Many were.
12 D MAELIS: I lost my crown to my brother.
13 D ORVAL: Many did.
14 D MAELIS: I killed him for it.
15 A ¶ Orval stops writing in the ledger.
* 16 A The mist swirls between them.
17 D ORVAL: That is new.
18 D MAELIS: Is it enough?
19 D ORVAL: It is a beginning. Cross. Mind the third plank.
20 A ¶ She steps onto the bridge.
* 21 A It sways.
22 A She grips the rope.
23 D MAELIS: I will mind it.
24 D ORVAL: I did not say it was safe.
25 A ¶ She crosses, plank by plank, one hand always on the rope.
26 A At the third plank she pauses, steps over it, and continues.
27 A On the far side, Orval offers a massive hand to help her up.
28 A She takes it.
29 D ORVAL [CONT'D]: Your name was Maelis.
30 D MAELIS: It still is.
31 D ORVAL: Is it?
32 A ¶ She smiles, thin and tired, and walks on into the mist.

### SCENE s01699 | INT. HOSPICE GARDEN ROOM - AFTERNOON
Detected names (may be incomplete or contain aliases): LORRAINE PEARCE, GREGORY PEARCE
* 1 A ¶ Sun through gauze curtains.
* 2 A A wheelchair by the window.
* 3 A A tray of untouched tea.
4 A ¶ LORRAINE PEARCE (70s, shawl, thin) watches birds on a feeder.
5 A Her son, GREGORY PEARCE (40s, suit jacket over his arm) sits across from her, shifting.
6 D GREGORY: Mom. Do you want the blanket?
7 D LORRAINE: No.
8 D GREGORY: The window open?
9 D LORRAINE: No.
* 10 A ¶ Silence.
* 11 A The birds scatter and return.
12 D GREGORY: I called Aunt Ruth.
13 D LORRAINE: You shouldn't have.
14 D GREGORY: She wanted to know.
15 D LORRAINE: She always wants to know.
16 D GREGORY: Mom, I --
17 D LORRAINE: Gregory, I --
18 A ¶ They stop.
19 A He gestures: you first.
20 A She shakes her head.
21 D GREGORY: Say it.
22 D LORRAINE: I wasn't a good mother.
23 D GREGORY: Don't.
24 D LORRAINE: I'm tired of pretending.
25 A ¶ He puts the jacket down.
26 A Takes her hand.
27 D GREGORY: You were fine, Mom.
28 D LORRAINE: Fine.
29 D GREGORY: Fine is enough.

### SCENE s01700 | INT. DEFUNCT BUS DEPOT - NIGHT
Detected names (may be incomplete or contain aliases): MATEUS SOTO, DEZI, JULIEN MOULTRIE, HUGO BRANDTNER, AGNES LOVELACE, PADDY GLASS
* 1 A ¶ Cracked tile.
* 2 A Bench seating, rusted.
* 3 A A flickering departure board with no destinations.
4 A ¶ Six masked figures enter through a loading door.
5 A They fan out.
6 A MATEUS SOTO (40s, the crew lead) raises a fist.
7 A Behind him, DESIREE "DEZI" MOULTRIE (30s) hauls a duffel; her brother JULIEN MOULTRIE (20s) props open the door; HUGO BRANDTNER (50s) unrolls a map on a bench; AGNES LOVELACE (60s) lifts a crowbar; and the kid, PADDY GLASS (19), keeps lookout, twitching.
8 D MATEUS (to the group): Eyes up. Nobody moves until I say.
9 D DEZI (to Julien): Stop jiggling the door.
10 D JULIEN: Sorry.
11 D HUGO (to himself): East wall. East wall.
12 D AGNES: Where's the vault?
13 D MATEUS: Under the baggage claim.
14 D PADDY: There's no baggage claim.
15 D MATEUS: Under where it used to be.
16 A ¶ Agnes sets the crowbar against a locker, strides to the broken department board, and swings.
* 17 A The glass shatters; behind it, a steel panel.
18 A She grins.
19 D AGNES: Found it.
20 A ¶ Hugo scribbles on the map.
21 A Julien lets the door swing shut and hurries over.
22 A Dezi opens the duffel, pulls out a drill and a coil of cable.
23 A Paddy glances at the street, then back, then at the street again.
24 D PADDY: Headlights.
25 D MATEUS: Everybody down!
26 A ¶ They drop behind benches, lockers, pillars.
* 27 A A pair of headlights sweeps the windows and slides past.
28 A Nobody breathes.
* 29 A The engine fades.
30 D PADDY: False alarm.
31 D DEZI (muttering): Kid's going to give me a heart attack.
32 D MATEUS (to the group): Back to work. Fifteen minutes.

### SCENE s01701 | INT. VICTORIAN OBSERVATORY - NIGHT (1887)
Detected names (may be incomplete or contain aliases): YOUNG WOMAN, PROFESSOR EUSTACE PEMBERTON, PROFESSOR, OTTOLINE
* 1 A ¶ A copper dome open to the stars.
* 2 A A great brass telescope on a creaking mount, its tube pointing at a smear of the Milky Way.
* 3 A Chalk equations cover a slate board.
4 A ¶ A YOUNG WOMAN in a plain gray dress (20s) stands at the eyepiece, a notebook clutched to her chest.
5 A She has slipped in through the coal door.
* 6 A Behind her, from the stairwell, a lantern rises.
7 A ¶ An old man, PROFESSOR EUSTACE PEMBERTON (70s, nightshirt, dressing gown, white whiskers), emerges, glaring.
8 D PROFESSOR: Who is there? Show yourself!
9 A ¶ She spins, notebook falling.
10 A He lifts the lantern.
* 11 A The light finds her face.
12 D YOUNG WOMAN: Professor, please. I only wished to see.
13 D PROFESSOR: This is a private instrument.
14 D YOUNG WOMAN: I am Ottoline Marsh, sir. I wrote to you eleven times.
15 A ¶ He lowers the lantern a little.
16 A His beard trembles.
17 D PROFESSOR: The scullery girl's cousin? The one who counts comets?
18 D OTTOLINE: I do not count them, sir. I find them.
19 A ¶ He stares at her.
20 A Then at the telescope.
21 A Then at the sky through the open dome.
22 D PROFESSOR: Show me.
23 A ¶ She hesitates, steps to the eyepiece, adjusts a brass knob with practiced fingers.
24 A He peers in after her.
* 25 A A long silence.
26 D PROFESSOR [CONT'D]: God in heaven.
27 D OTTOLINE: Yes, sir.

### SCENE s01702 | INT. FLOATING LIBRARY - LANTERN HALL - TWILIGHT
Detected names (may be incomplete or contain aliases): IMELDA OGUNLEYE, BARTHOLOMEW QUILL, PIP
* 1 A ¶ Shelves rise in spirals into a sky of drifting clouds.
* 2 A Books hover on invisible currents, flapping their covers like moths.
* 3 A Lanterns bob at the ends of long gilt chains.
* 4 A Rain falls upward past the windows.
5 A ¶ IMELDA OGUNLEYE (50s, patchwork robes, spectacles on a silver chain) sits at a vast oak desk, writing with a feather that dips itself into the ink.
6 A Before her stands BARTHOLOMEW QUILL (30s, travel-stained coat, a leather satchel), hat in hand.
7 A Perched on a high shelf, a small gray owl-shaped librarian called PIP watches them both with unblinking amber eyes.
8 D IMELDA: Sit.
9 D BARTHOLOMEW: I'd rather stand.
10 D IMELDA: You'll sit, or the books won't speak to you.
11 A ¶ He sits.
* 12 A A book drifts down and lands in his lap, spine trembling.
13 D BARTHOLOMEW: Is it always like this?
14 D IMELDA: Only on Tuesdays.
15 D BARTHOLOMEW: It's Thursday.
16 D IMELDA: Then it is worse than I thought.
17 D PIP (a soft hoot): Hoo.
18 D IMELDA: Pip says you are late.
19 D BARTHOLOMEW: I came as soon as the letter reached me.
20 D IMELDA: It reached you three weeks ago.
21 D BARTHOLOMEW: The roads were closed.
22 D IMELDA: The roads are always closed. That is what roads are for.
23 A ¶ He opens the book.
* 24 A The pages are blank.
25 A He turns them.
* 26 A Blank.
* 27 A Blank.
* 28 A A single line of ink slowly blooms on the last page, in handwriting he recognizes.
29 D BARTHOLOMEW: That's my mother's hand.
30 D IMELDA: Yes.
31 D BARTHOLOMEW: She wrote this?
32 D IMELDA: She is writing it now.
33 D BARTHOLOMEW: She's been dead for nine years.
34 D IMELDA: In this library, no one is dead until the last page is read.
* 35 A ¶ Silence.
* 36 A Rain falls up.
* 37 A A lantern knocks softly against a shelf.
38 D BARTHOLOMEW: What does it say?
39 D IMELDA: Read it aloud.
40 D BARTHOLOMEW: "My dear boy. If you are reading this, I have kept my promise."
41 D PIP: Hoo.
42 D IMELDA: Go on.
43 D BARTHOLOMEW: "I have kept it a very long time."
44 A ¶ His voice cracks.
45 A Imelda takes off her spectacles and polishes them on her sleeve, looking elsewhere.
46 A Pip tucks his head under one wing.
47 D BARTHOLOMEW [CONT'D]: Is there more?
48 D IMELDA: There is always more.
49 D BARTHOLOMEW: How long may I stay?
50 D IMELDA: Until the lanterns burn down.
51 D BARTHOLOMEW: And when is that?
52 D IMELDA: When you stop reading.
53 A ¶ He bends over the page.
* 54 A The lanterns brighten.

### SCENE s01703 | INT. GRAND HOTEL LAUNDRY ROOM - NIGHT
Detected names (may be incomplete or contain aliases): CROWE, IMOGEN TATE, PIOTR SELENKO, WICK, WICKHAM, BELLHOP, GUARD, HOTEL SECURITY
* 1 A ¶ Steam hisses from industrial presses.
* 2 A Carts of white linen.
* 3 A A tall window shows the city's lights.
4 A ¶ CROWE (50s, quiet, hotel uniform) pushes a cart down the aisle, the picture of a bored night porter.
5 A Behind him, three figures in identical gray overalls follow: IMOGEN TATE (30s), who counts keys; PIOTR SELENKO (40s), who whistles; and DESMOND "WICK" WICKHAM (20s), who hums a tune.
6 D CROWE (to the group): We walk. We do not run. We do not look at the cameras.
7 D WICK (under his breath): Which cameras?
8 D IMOGEN: Wick.
9 D WICK: Sorry.
10 A ¶ They reach a service lift.
11 A Crowe presses the call button.
* 12 A Nothing.
13 D PIOTR: Is it supposed to be broken?
14 D CROWE: It is supposed to be slow.
* 15 A ¶ The lift arrives.
16 A A BELLHOP (20s, pillbox hat) steps off, sees them, nods.
17 A They nod back.
18 A He walks on, whistling the same tune as Piotr.
* 19 A ¶ The doors close.
20 A The four of them ride up in silence.
21 A Crowe checks a pocket watch.
22 A Imogen clicks her tongue against her teeth.
23 D IMOGEN (to herself): Two hundred and six. Two hundred and seven.
24 D PIOTR: What are you counting?
25 D IMOGEN: Seconds.
* 26 A ¶ Ding.
* 27 A The doors open on the penthouse corridor.
* 28 A The carpet is red, the walls gold.
29 A A single guard sits in an armchair at the far end, asleep.
30 D CROWE (to the group): Gentle. Gentle.
31 A ¶ They creep past the guard.
32 A Wick, passing, nudges a vase with his elbow; it wobbles; he catches it, grinning like a boy.
33 A Imogen swallows a laugh.
34 A ¶ Crowe produces a key.
* 35 A The suite door opens without a sound.
* 36 A Inside: a vault door, humming softly, gleaming.
37 A Nobody speaks.
* 38 A ¶ Then every light in the corridor comes on at once.
39 A The guard stands, no longer asleep, and unholsters a pistol.
40 D GUARD: Welcome, gentlemen. And lady.
41 A ¶ Crowe's shoulders sag a fraction.
42 A He slowly raises his hands.
43 D CROWE: Evening, Marcus.
44 A ¶ The Guard smiles, and now we see the badge on his belt: HOTEL SECURITY, DIRECTOR.

### SCENE s01704 | INT. ZOO REPTILE HOUSE - OFFICE - DAY
Detected names (may be incomplete or contain aliases): NELLIE, BRIGHTWATER, PERCIVAL ADEWALE-STONE, HECTOR NAVARRO, INTERCOM
* 1 A ¶ Cluttered desk.
* 2 A A taxidermy iguana on a filing cabinet.
* 3 A An intercom box on the wall.
4 A ¶ ELEANOR "NELLIE" BRIGHTWATER (40s, khaki vest, perpetually frazzled) runs a hand through her hair.
5 A Across from her, new hire PERCIVAL ADEWALE-STONE (20s, brand-new uniform, a clipboard clutched to his chest) sits rigidly.
6 A By the door, groundskeeper HECTOR NAVARRO (60s, rubber boots, tobacco-stained mustache) leans on a broom.
7 D NELLIE: So. Your first day.
8 D PERCIVAL: Yes. I'm very excited.
9 D NELLIE: Don't be.
10 D HECTOR: It builds character.
11 D INTERCOM [V.O.]: Nellie, it's the snake house. Mamba's out.
12 A ¶ Nellie shuts her eyes.
13 A Percival stares at the intercom.
14 D PERCIVAL: Out of what?
15 D NELLIE: Out of everything.
16 A ¶ She leaps to her feet and knocks the desk; papers go flying.
17 A Hector drops the broom.
18 A Percival ducks, and they all tangle in the doorway, jostling, pushing, shoving each other out into the corridor.
19 D INTERCOM [V.O., CONT'D]: Also the python. And the gift shop.
20 D HECTOR: The gift shop?
21 D NELLIE: Nobody panic.
22 D PERCIVAL: Everyone's panicking.
23 D HECTOR: I'm not.
24 D NELLIE: Hector, you're holding the broom upside down.
25 D HECTOR: That's my panic.
26 A ¶ They scatter down the hall in three directions, shouting.

### SCENE s01705 | INT. REPOSSESSED PIANO SHOWROOM - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE HORTENSE LAFLEUR, CLEM BOUDREAUX, WREN
* 1 A ¶ Rows of grand pianos under sheets, like ghosts at a recital.
* 2 A One lamp burns on a bench.
* 3 A The air smells of lacquer and dust.
4 A ¶ DETECTIVE HORTENSE LAFLEUR (50s, trench coat, a limp she hides) circles a closed Steinway.
5 A At the far wall, a heavyset man, CLEM BOUDREAUX (40s, pinstripe shirt, nervous), twists a ring on his finger.
6 A Beside him, a girl in an oversized sweatshirt, WREN (15), picks at the lid of a baby grand.
7 D HORTENSE: Mr. Boudreaux.
8 D CLEM: Detective.
9 D HORTENSE: You recognize that piano?
10 D CLEM: It's a Steinway. I recognize most Steinways.
11 D HORTENSE: It came off a truck in Baton Rouge on the ninth.
12 D CLEM: Plenty came off trucks on the ninth.
13 D HORTENSE: Not with a body inside.
14 A ¶ Wren looks up sharply.
15 A Clem stops twisting the ring.
16 D CLEM: Wren, honey, go wait in the car.
17 D WREN: I'm not leaving you, Uncle Clem.
18 D HORTENSE: Your niece?
19 D CLEM: My niece.
20 D HORTENSE: Hello, Wren. I'm Hortense.
21 A ¶ Wren says nothing.
22 A Hortense lifts the sheet and raps on the closed lid.
* 23 A A hollow thud.
24 D HORTENSE [CONT'D]: Open it, please.
25 D CLEM: It's locked.
26 D HORTENSE: Then unlock it.
27 D CLEM: I don't have the key.
28 D HORTENSE: Wren does.
29 A ¶ Wren's eyes flick to her uncle.
30 A Clem exhales and shuts his eyes.
31 D DETECTIVE LAFLEUR (softly, to the girl): It's all right, sweetheart. Nobody's in trouble tonight who doesn't deserve to be.
32 A ¶ Wren slides a small brass key from her sleeve and walks to the Steinway.
* 33 A The lock turns with a click that echoes through the whole room.

### SCENE s01706 | INT. SUBMERGED CHAPEL - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE IRENE KASPRZAK, FORENSIC TECH BASIL NWOSU, FATHER ANSELMO DURAN, VOICE
* 1 A ¶ A drowned stone nave, half-flooded after a dam failure.
* 2 A Waist-deep black water.
* 3 A Pews float like wreckage.
* 4 A Flashlights stab the dark, throwing wavering circles on vaulted arches overhead.
* 5 A Water drips from a hole in the roof.
6 A ¶ DETECTIVE IRENE KASPRZAK (40s, waders, a tight jaw) wades down the aisle.
7 A Behind her, FORENSIC TECH BASIL NWOSU (30s, a camera held overhead) picks his way through floating hymnals.
8 A A third figure, a local priest, FATHER ANSELMO DURAN (60s, black cassock hitched to his knees), carries a lantern, mumbling prayers.
9 D IRENE: Basil, light.
10 D BASIL: Coming.
11 D ANSELMO: Detective, this is a consecrated place.
12 D IRENE: It's a crime scene, Father.
13 D BASIL: Both can be true.
14 D ANSELMO: Not tonight.
* 15 A ¶ A ripple spreads from the altar.
16 A All three stop.
17 D IRENE: Stay behind me.
18 D ANSELMO (over Irene): It's only the dam still settling, it does that --
19 D BASIL (over Anselmo): Those are footprints, Irene. Look, on the altar step. Wet.
20 D IRENE: Fresh?
21 D BASIL: Minutes.
22 D ANSELMO: Impossible. No one has been in here since the flood.
23 D IRENE: Somebody has.
24 A ¶ She raises her flashlight.
* 25 A The beam finds the altar, then a dark shape slumped behind it.
* 26 A Water drips from a gloved hand.
27 D IRENE [CONT'D]: Police! Show me your hands!
* 28 A ¶ Nothing.
29 A Then the hand slowly moves, and a voice, small and hoarse, croaks out of the dark.
30 D VOICE [O.S.]: Father? Is that you?
31 A ¶ Anselmo drops the lantern.
* 32 A It hisses out in the water.
* 33 A The chapel plunges into black.

### SCENE s01707 | INT. CLOCKMAKER'S SHOP - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR LOUISA HARDCASTLE, BARNEY OKAFOR-LISTER
* 1 A ¶ Hundreds of clocks, all ticking, none in agreement.
* 2 A Brass gears under glass domes.
* 3 A Pendulums swing in long cases along the walls.
* 4 A A single green-shaded lamp lights a workbench strewn with tiny screwdrivers.
5 A ¶ INSPECTOR LOUISA HARDCASTLE (50s, wool overcoat, gray streak in her hair) studies a grandfather clock whose glass door hangs open.
6 A Behind the bench, the shop's owner, BARNEY OKAFOR-LISTER (50s, leather apron, loupe pushed up on his forehead), watches her with his hands flat on the wood.
7 D LOUISA: You said the clock stopped at 3:15.
8 D BARNEY: It did.
9 D LOUISA: And the man was found at 3:17.
10 D BARNEY: Yes.
11 D LOUISA: Then he was killed at 3:15.
12 D BARNEY: Or the clock was wrong.
13 D LOUISA: Your clocks are never wrong, Mr. Okafor-Lister.
14 D BARNEY: Mine, no. His, perhaps.
15 D LOUISA: Whose?
16 D BARNEY: The victim's. He wound it himself.
17 D LOUISA: He, who?
18 D BARNEY: The man who died.
19 D LOUISA: You said he came to you for repairs.
20 D BARNEY: He did. He said it ran slow.
21 D LOUISA: And did it?
22 D BARNEY: Not when I looked.
23 A ¶ She runs her gloved finger along the clock's pendulum, then lifts it to the lamp.
* 24 A A thin dusting of gold powder.
25 A She sniffs it.
26 D LOUISA [CONT'D]: Gold leaf.
27 D BARNEY: It would be. For the dial.
28 D LOUISA: It's on the pendulum, not the dial.
29 A ¶ He doesn't answer.
* 30 A A hundred clocks tick on.
* 31 A A cuckoo bursts from a case in the dark and sings once, shrilly, and withdraws.
32 D LOUISA [CONT'D]: Mr. Okafor-Lister. Who else had a key?
33 D BARNEY: Only the man himself.
34 D LOUISA: And the man's widow.
35 D BARNEY: I didn't say that.
36 D LOUISA: No. I did.
37 A ¶ He looks at her.
38 A She looks at him.
39 A Then, slowly, he reaches under the workbench and brings up a small velvet pouch, tilting it so that the gold dust trickles onto the bench.
40 D BARNEY: He told me it was for the restoration.
41 D LOUISA: And you believed him.
42 D BARNEY: She did.
43 A ¶ Louisa closes her eyes.
* 44 A The clocks strike the half hour, all at different times.

### SCENE s01708 | INT. PAWNSHOP BACK ROOM - NIGHT
Detected names (may be incomplete or contain aliases): MAN IN TRENCHCOAT, BEIGE TRENCHCOAT, GINO FALCONE, TREVOR PRICE, ELLIS
* 1 A ¶ Shelves of guitars and watches.
* 2 A A single bare bulb.
* 3 A A card table.
4 A ¶ A MAN IN A BEIGE TRENCHCOAT (40s) sits across from GINO FALCONE (50s, shirt sleeves rolled, gold chain), who shuffles a deck.
5 A Behind them, a lanky kid, TREVOR PRICE (20s, hoodie), leans on a locker, picking at a thumbnail.
6 D GINO: You're late.
7 D MAN IN TRENCHCOAT: Traffic.
8 D GINO: There's no traffic.
9 D MAN IN TRENCHCOAT: That's what makes it suspicious.
10 A ¶ Trevor snorts.
11 A Gino deals three cards face down.
12 D GINO: Name's Gino. This is Trevor. What do we call you?
13 D MAN IN TRENCHCOAT: Ellis.
14 D GINO: Ellis what?
15 D ELLIS: Just Ellis.
16 A ¶ Gino flips a card.
* 17 A Ace of spades.
18 A He grins.
19 D GINO: Ellis, you know why you're here?
20 D ELLIS: You tell me.
21 D GINO: Because you owe.
22 D ELLIS: I know what I owe.
23 D GINO: Then pay.
24 A ¶ Ellis reaches into his coat.
25 A Trevor straightens, hand drifting to his waistband.
26 A Gino raises a palm: easy.
27 A Ellis slowly lays a thick envelope on the table.
28 D ELLIS: Count it.
29 A ¶ Gino thumbs through the bills, nods once, and slides the envelope under the table.
30 D GINO: Pleasure doing business.

### SCENE s01709 | INT. LAKESIDE CABIN - LIVING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): ROSCOE ALDRIDGE, FRANCES ALDRIDGE, CAMILLA, LIAM, AUNT BEATA, DOCTOR
* 1 A ¶ A wood stove ticks.
* 2 A Six chairs around a worn table.
* 3 A A phone with a long cord hangs on the wall.
4 A ¶ The Aldridge family gathers: father ROSCOE ALDRIDGE (60s), mother FRANCES ALDRIDGE (60s), their daughters CAMILLA (30s) and JOSEPHINE "JO" (28), son LIAM (25), and Frances's sister, AUNT BEATA (70s).
5 A Nobody has taken off a coat.
* 6 A ¶ The phone rings.
7 A Everyone looks at it.
8 A Frances rises, answers.
9 D FRANCES: Hello?
10 D DOCTOR [V.O.] (through phone): Mrs. Aldridge? It's Dr. Suarez at Mercy General.
11 D FRANCES: Yes. Go ahead.
12 D DOCTOR [V.O.] (through phone): I'm sorry. He didn't make it through the surgery.
13 A ¶ Frances lowers the receiver.
14 A She stares at the wall.
15 D ROSCOE: Frances?
16 A ¶ She hangs up.
17 A Turns to the room.
18 D FRANCES: It's Papa.
19 A ¶ Beata presses a hand to her mouth.
20 A Camilla steps back.
21 A Jo bursts into tears; Liam puts an arm around her.
22 A Roscoe takes off his cap and holds it with both hands.
23 D ROSCOE: Then we go to him.
24 D CAMILLA: Tonight?
25 D ROSCOE: Tonight.
26 A ¶ Nobody moves.
* 27 A The stove ticks.
28 A Then Frances takes her purse from the table and opens the cabin door onto the dark lake.

### SCENE s01710 | INT. ROYAL OPERA HOUSE - BACKSTAGE - NIGHT (1923)
Detected names (may be incomplete or contain aliases): PRIMA DONNA ELVIRA CASTELLANI, MAUD PRIMROSE, BARONESS LUDMILLA ROSENKRANZ, CORNELIUS BLYTHE, TANNOY
* 1 A ¶ Ropes, flats, a smell of greasepaint.
* 2 A Gaslight hisses in sconces.
* 3 A Beyond the curtain, an orchestra tunes.
4 A ¶ PRIMA DONNA ELVIRA CASTELLANI (40s, glittering gown, feathered headdress) sweeps down the corridor, flanked by her dresser, MAUD PRIMROSE (30s, pins in her mouth).
5 A Around the corner steps her rival, BARONESS LUDMILLA ROSENKRANZ (40s, ermine stole), and the two women stop face to face.
6 A ¶ The stage manager, CORNELIUS BLYTHE (50s, pince-nez), hurries between them.
7 D CORNELIUS: Ladies, please. Curtain in five.
8 D ELVIRA: She is in my dressing room.
9 D LUDMILLA: Your dressing room was always mine.
10 D ELVIRA: She stole my feather.
11 D LUDMILLA: She wore it badly.
12 A ¶ Maud spits out the pins.
13 A Elvira lunges; Ludmilla shoves; the two women tangle, pulling at each other's headdresses, and Cornelius is jostled between them.
14 D TANNOY [V.O.] (through speaking tube): Mr. Blythe! The Prince has arrived!
15 D CORNELIUS: Not now!
16 D TANNOY [V.O.]: He asks for the leading lady!
17 D ELVIRA: She can be the leading lady --
18 D LUDMILLA: -- over my dead body!
19 A ¶ The two freeze, glaring.
20 A Maud steps between them with the dress pins in her hand.
21 D MAUD: Ladies. The Prince.
22 A ¶ They both smooth their gowns.
23 A Elvira smiles.
24 A Ludmilla smiles.
25 A Both sweep toward the curtain together.

### SCENE s01711 | INT. AIRPORT LONG-TERM PARKING STRUCTURE - LEVEL 4 - NIGHT
Detected names (may be incomplete or contain aliases): VESTA KORHONEN, ABEL TRUJILLO, SERGEANT LENNOX ODUYA, HAYDEN PRYCE, ZELDA MORROW
* 1 A ¶ Concrete.
* 2 A Oil stains.
* 3 A Sodium lights hum.
* 4 A A lone car alarm somewhere, then silence.
5 A ¶ VESTA KORHONEN (40s, charcoal coat, briefcase) walks to a sedan, keys out, shoulders tight.
* 6 A Footsteps echo behind her.
7 A She stops.
8 A They stop.
9 A ¶ She turns.
10 A A man in a gray parka, ABEL TRUJILLO (50s, thick glasses), stands ten feet away, hands visible.
11 D ABEL: Ms. Korhonen.
12 D VESTA: I don't know you.
13 D ABEL: You will.
14 D VESTA: Back off.
15 D ABEL: I'm not armed.
16 D VESTA: Everybody says that.
17 D ABEL: Check me.
18 D VESTA: Absolutely not.
19 D ABEL: Then listen. I worked with your brother.
20 D VESTA: My brother worked alone.
21 D ABEL: He told you that.
22 D VESTA: He told me everything.
23 D ABEL: He told you what he could.
24 D VESTA: Where is he?
25 D ABEL: Not here.
26 D VESTA: Where?
27 D ABEL: I can take you.
28 D VESTA: Why would I go anywhere with you?
29 D ABEL: Because you flew in for this. You wouldn't be here if you didn't half believe me.
30 D VESTA: Don't tell me what I believe.
31 D ABEL: Then tell me yourself.
32 D VESTA: I believe my brother is dead.
33 D ABEL: Is that what they told you?
34 D VESTA: It's what the police told me.
35 D ABEL: And what did you tell yourself?
36 A ¶ She falls silent.
37 A Her grip on the briefcase whitens.
38 A ¶ A third figure steps out of the dark behind Abel: SERGEANT LENNOX ODUYA (30s, patrol uniform, hand on holster).
39 D LENNOX: Mr. Trujillo. Step away from the lady.
40 D ABEL: Officer, there's no need --
41 D LENNOX: Now.
42 A ¶ Abel raises his hands.
43 A Vesta stares at Lennox, then at Abel, then at the ramp.
44 A Two more cars roll up from below, headlights blinding, and a woman and a man, HAYDEN PRYCE (30s) and ZELDA MORROW (40s), step out in dark suits.
45 D HAYDEN: Ms. Korhonen? Federal agents. We need you to come with us.
46 D VESTA: Why?
47 D ZELDA: Because that man isn't who he says.
48 A ¶ Abel meets her eyes, silent, then lowers his hands and turns his palms up: I told you.

### SCENE s01712 | INT. TINY APARTMENT - KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): JOANNA CRUZ-DELACROIX, VOICE MAIL, DANIEL
* 1 A ¶ A narrow galley kitchen.
* 2 A Mismatched mugs.
* 3 A A window over the sink opens onto a brick wall and one square of sky.
4 A ¶ JOANNA CRUZ-DELACROIX (30s) stands at the counter in an oversized cardigan.
* 5 A A phone sits face-down beside a bowl of cold noodles.
6 A She stirs them, doesn't eat.
7 A She picks up the phone, flips it, sets it down.
* 8 A ¶ Her thumb hovers over the screen.
9 A She takes a breath.
10 A Presses.
* 11 A ¶ The phone rings through the speaker.
* 12 A Once.
* 13 A Twice.
* 14 A Three times.
15 D VOICE MAIL [V.O.]: You've reached Daniel. I can't come to the phone right now. Leave a message.
16 A ¶ She mouths the next word along with the recording.
17 D VOICE MAIL [V.O., CONT'D] (a soft laugh): Or don't. I'll know it was you.
* 18 A ¶ BEEP.
19 A ¶ She opens her mouth.
20 A Closes it.
21 A Her free hand rises to her collarbone, where a thin chain holds a small silver ring.
22 A ¶ She ends the call.
23 A Sets the phone down.
24 A Walks to the window.
25 A Opens it, and cold air rushes in.
26 A She breathes it deeply.
* 27 A ¶ The phone buzzes on the counter.
28 A She doesn't turn.
* 29 A It buzzes again.
30 A She turns slowly, looks at it, and crosses back.
* 31 A ¶ The screen shows a single word: DANIEL.
32 A ¶ She lets it ring.
33 A Her shoulders drop.
34 A ¶ She picks it up, swipes, and brings it to her ear.
35 A ¶ She says nothing.
36 A On the other end, a pause, then a quiet voice.
37 D DANIEL [V.O.] (through phone): Jo?
38 A ¶ She sits down at the little table, very slowly.
39 A Her hand covers her mouth.
40 A She nods, uselessly, to no one.
41 D DANIEL [V.O., CONT'D] (through phone): I'm sorry. I'm so sorry I didn't call sooner.
42 A ¶ Her eyes fill.
43 A She finally lets herself smile.
* 44 A The noodles go on cooling beside her.

### SCENE s01713 | INT. SALON OF A GRAND HOUSE - NIGHT (1912)
Detected names (may be incomplete or contain aliases): LADY ROSAMUND ASHFORD
* 1 A ¶ A gilded drawing room.
* 2 A Fire in a marble hearth.
* 3 A A piano shrouded in cloth.
* 4 A Tall windows reveal fog on a dark street.
5 A ¶ LADY ROSAMUND ASHFORD (40s, silk gown, pearls) stands at a writing desk, one hand pressed flat on an unsealed letter.
6 A She does not sit.
* 7 A ¶ A bell rings in the hall below.
8 A She flinches, then composes herself.
9 D ROSAMUND [V.O.] (reading, in her own head): "My dearest. By the time you read this, I will have crossed the water."
10 A ¶ She closes her eyes.
11 A Takes the letter, folds it, tucks it into the bodice of her gown.
* 12 A ¶ Footsteps on the stair, slow, measured.
13 A She straightens, smooths her skirts, turns toward the door with a hostess's smile.
14 D ROSAMUND (whisper): Courage.
* 15 A ¶ The footsteps pass the door and continue down the corridor.
16 A The smile fades.
17 A She laughs once, shakily.
18 A ¶ She crosses to the fire.
19 A Removes the letter and holds it over the flames.
20 A At the last moment, she pulls it back.
21 D ROSAMUND [V.O., CONT'D] (reading): "Do not look for me. I have taken the little blue case."
22 A ¶ She goes back to the desk.
23 A Sits.
24 A Unfolds the letter, smooths it, and reads it again from the top.
25 A Her lips move.
* 26 A The fire shifts.
* 27 A ¶ Outside in the hall, the bell rings once more.
28 A She does not rise.

### SCENE s01714 | EXT. DUSTY CROSSROADS GENERAL STORE - NOON
Detected names (may be incomplete or contain aliases): SHERIFF AMOS BRIDGEWATER, TAMSIN FOURKILLER, WENDELL PRATT, HOLLIS CARDWELL
* 1 A ¶ A false-fronted store beside a dry well.
* 2 A A hitching post.
* 3 A A sleeping dog under a porch.
* 4 A Heat shimmers off the road.
5 A ¶ SHERIFF AMOS BRIDGEWATER (50s, sweat-stained hat) sits on the porch whittling.
6 A Beside him in a rocker, his deputy, TAMSIN FOURKILLER (30s, braid over her shoulder), sharpens a knife.
7 A Inside the doorway, the shopkeeper, WENDELL PRATT (60s, apron), sweeps with a straw broom that moves less than it should.
8 D AMOS: Quiet day.
9 D TAMSIN: Quiet town.
10 D WENDELL: Quiet's good for business.
11 D AMOS: Is it?
12 D WENDELL: It's never been bad.
* 13 A ¶ The sound of hooves.
14 A All three look up.
* 15 A A lone rider approaches from the south, dust rising behind him.
16 A He reins up at the well, and dismounts, slowly.
17 A HOLLIS CARDWELL (40s, gray duster, face like leather, a revolver on each hip) dips a tin cup in the well.
18 A He drinks, and watches them over the rim.
19 D AMOS: Morning, stranger.
20 D HOLLIS: Afternoon, I think.
21 D AMOS: Might be.
22 A ¶ Hollis wipes his mouth on his sleeve.
23 A Tamsin's knife stops against the whetstone.
24 A Amos does not stop whittling.
25 D HOLLIS: Looking for a man.
26 D AMOS: This town's got a few.
27 D HOLLIS: This one's called Baxter.
28 A ¶ Wendell's broom freezes.
29 A Amos blows a shaving off his blade.
30 D AMOS: Don't know him.
31 D HOLLIS: Funny. He knows you, Sheriff.
32 A ¶ Nobody moves.
* 33 A The dog under the porch lifts its head, then lowers it.
34 D TAMSIN: Mister, you picked a hot day.
35 D HOLLIS: I picked this one on purpose.
36 D AMOS: So what's your business?
37 D HOLLIS: Same as yours, I expect. Old debts.
38 A ¶ Amos closes his knife, slips it into his pocket, and stands.
39 A Hollis's hands hang loose at his sides.
40 D AMOS: Wendell, go inside.
41 D WENDELL: Sheriff --
42 D AMOS: Inside.
43 A ¶ Wendell backs through the door and shuts it.
* 44 A A bolt slides.
45 A Tamsin rises from the rocker, one hand on her hip.
46 D HOLLIS: Deputy. You too.
47 D TAMSIN: I'm fine here.
48 D HOLLIS: Suit yourself.
* 49 A ¶ A fly drones.
* 50 A Somewhere, a shutter bangs once in the wind.

### SCENE s01715 | INT. MIDWEST DINER - MORNING
Detected names (may be incomplete or contain aliases): CLARENCE VOSS-HOLT, ESTELLE, MARISELA TORRES, ROY DUNCAN, LEVI HARKNESS
* 1 A ¶ Formica counters.
* 2 A A pie case humming.
* 3 A Steam on the windows.
4 A ¶ CLARENCE VOSS-HOLT (70s, suspenders, a coffee cup he never drinks) sits at the counter.
5 A His daughter ESTELLE (40s, work blazer) slides into the stool beside him as the waitress, MARISELA TORRES (50s, apron), pours her a cup, and in the corner booth two men in feed-store caps, ROY DUNCAN (60s) and LEVI HARKNESS (60s), argue softly about corn futures.
6 D CLARENCE: You came.
7 D ESTELLE: You called.
8 A ¶ He nods.
9 A She stirs her coffee.
10 A Neither looks at the other.
11 A Marisela moves down the counter.
12 A Roy slaps the table; Levi laughs.
13 D CLARENCE: I sold the farm.
14 A ¶ Estelle's spoon stops.
15 A Her jaw tightens.
16 A He keeps looking at the pie case.
17 D ESTELLE: You what?
18 D CLARENCE: Signed Friday.
19 A ¶ She stands so fast the stool spins.
20 A Marisela freezes with the pot in her hand.
21 A Roy and Levi fall silent.
22 A Estelle grips the counter, breathes, and sits again.
23 A He finally turns.
24 D CLARENCE [CONT'D]: Mom would've wanted me out.
25 D ESTELLE: Mom would've wanted you to ask.
26 A ¶ Clarence reaches over and lays a hand on hers.
27 A She lets him.
28 A Marisela sets the pot down, and without a word, brings two slices of pie.

### SCENE s01716 | INT. COMPETITIVE CHILI COOK-OFF - ALLEY BEHIND THE STAGE - DAY
Detected names (may be incomplete or contain aliases): LEROY PIKE, DEE, OKONJO, HAROLD TUCKER, WANDY, SOUSA
* 1 A ¶ Folding tables.
* 2 A Giant steel pots.
* 3 A A smoky haze.
* 4 A A banner flaps: COUNTY CHILI CHAMPIONSHIP.
5 A ¶ LEROY PIKE (40s, apron reading KISS THE COOK) tastes from a ladle and winces.
6 A Beside him, his teammate DARLENE "DEE" OKONJO (40s, bandanna) stares into a second pot.
7 A Facing them from the next table, rival cooks HAROLD TUCKER (50s, mustache) and WANDERLEY "WANDY" SOUSA (50s, cowboy hat) crack their knuckles.
8 D LEROY: It's missing something.
9 D DEE: It's missing nothing.
10 D LEROY: It's missing salt.
11 D DEE: I added salt.
12 D LEROY: When?
13 D DEE: Before.
14 D LEROY: Before what?
15 D DEE: Before you added salt.
16 D LEROY: I didn't add salt.
17 D DEE: Yes, you did.
18 D LEROY: Then why does it taste like it's missing salt?
19 D DEE: Because you added too much.
20 D LEROY: But you said it's missing --
21 D DEE: Leroy.
22 D LEROY: Yes?
23 D DEE: Stop talking.
24 D HAROLD: Trouble in paradise?
25 D DEE: Mind your pot, Harold.
26 D HAROLD: My pot's perfect.
27 D WANDY: It's a little thin, Harold.
28 D HAROLD: It's not thin. It's rustic.
29 D WANDY: Rustic is a polite word for thin.
30 D LEROY (to Dee): He called him thin.
31 D DEE: Who called who thin?
32 D LEROY: Wandy called Harold's chili thin.
33 D DEE: Good. Because he is.
34 D HAROLD: I heard that. He's not thin either!
35 D WANDY: Who's not thin?
36 D HAROLD: Your chili!
37 D WANDY: My chili is magnificent.
38 D LEROY: Your chili is a soup.
39 D WANDY: Your chili is a crime.
40 D DEE: Leroy, don't.
41 D LEROY: He started it.
42 D DEE: He didn't. You did. He said it. Then he said it to him, and he said it back.
43 D LEROY: Who?
44 D DEE: Nobody. Just taste your own chili.
45 A ¶ Leroy dips a spoon and tastes.
46 A His eyes widen.
47 A Dee tastes.
48 A She nods slowly.
49 D DEE [CONT'D]: That's not salt.
50 D LEROY: That's cinnamon.
51 D DEE: We put cinnamon in it?
52 D LEROY: We don't use cinnamon.
53 D DEE: Then who did?
54 A ¶ They both turn.
55 A Across the alley, Harold and Wandy are suddenly very interested in their ladles.
56 D LEROY: You.
57 D HAROLD: Us?
58 D LEROY: You put cinnamon in our chili.
59 D HAROLD: We did no such thing.
60 D WANDY (to Harold): Did we?
61 D HAROLD (to Wandy): He did.
62 D WANDY: I did not!
63 D HAROLD: Then who?
* 64 A ¶ An airhorn blares from the stage.
65 A ¶ Nobody moves.
66 A Four ladles hover over four steaming pots.
67 D DEE: Fine. We call it a truce.
68 D LEROY: A truce.
69 D HAROLD: Fine.
70 D WANDY: Fine.
71 D DEE: Fine.
72 A ¶ They all lower their ladles at once and begin to stir in perfect, furious silence.

### SCENE s01717 | EXT. DRAGON'S ROOST - MOUNTAIN LEDGE - DAWN
Detected names (may be incomplete or contain aliases): SIR OSWIN HARTLEY, NELLA, FINCH, ZAHARA QUDSI, BASIL THORNWICK, TAMARISK ODEN
* 1 A ¶ A windswept ledge high on a black peak.
* 2 A Clouds boil below.
* 3 A In the distance, a thin line of silver: the sea.
4 A ¶ Four adventurers climb the last switchback: SIR OSWIN HARTLEY (40s, battered plate armor), the thief PETRONELLA "NELLA" FINCH (20s, hooded, quick-eyed), the mage ZAHARA QUDSI (30s, indigo robes, staff topped with a glowing crystal) and the young squire BASIL THORNWICK (14, carrying too many packs).
5 D OSWIN: Quiet now. We approach.
6 D NELLA: I'm always quiet.
7 D ZAHARA: You hummed all night.
8 D NELLA: Only softly.
9 D BASIL: Sir, my pack is on fire.
10 D OSWIN: What?
11 D BASIL: Only a little.
12 A ¶ Zahara flicks her fingers; the flame hisses out.
* 13 A A deep rumble shakes the ledge.
* 14 A Pebbles skitter down the rock.
15 A The adventurers freeze.
16 D OSWIN: That was the mountain, wasn't it?
17 D ZAHARA: That was something else.
* 18 A ¶ A great shadow slides across them.
* 19 A A growl like grinding stones rolls down from above.
20 A ¶ Oswin draws his sword.
21 A Nella melts into the rocks.
22 A Basil drops his packs.
23 A ¶ Then, from the cave mouth ahead, a figure steps into the light: TAMARISK ODEN (60s, patched green cloak, a ring of keys at her belt), the dragon's keeper, holding a bucket.
24 D TAMARISK: Oh, don't mind him. He hasn't had his tea.
25 D OSWIN: His tea?
26 D TAMARISK: Chamomile. Dry throat. Come in.

### SCENE s01718 | EXT. LIFEBOAT - OPEN SEA - DUSK
Detected names (may be incomplete or contain aliases): CAPTAIN HILDEGARD VOSBERG, BAXTER NNAMDI, ISOLDE FAIRWEATHER, JASPER LOCKWOOD, PILOT MARCEL DUVALIER
* 1 A ¶ Gray swells.
* 2 A A battered lifeboat rides low.
* 3 A A torn canvas sail sags from a broken oar.
4 A ¶ Four survivors huddle on the thwarts.
5 A CAPTAIN HILDEGARD VOSBERG (60s, oilskins) clutches the tiller, the ship's cook BAXTER NNAMDI (40s) bails with a tin cup while the stewardess ISOLDE FAIRWEATHER (30s) rations the last biscuit into crumbs, and the cabin boy JASPER LOCKWOOD (12) leans against her, shivering.
6 D HILDEGARD: Eyes on the horizon.
7 D BAXTER: There's nothing out there, Captain.
8 D ISOLDE: There's always something.
9 D JASPER: Is that a bird?
10 D BAXTER: It's a gull. Gulls mean land.
11 D HILDEGARD: Or a storm.
12 A ¶ They scan the sky.
* 13 A A speck wheels and vanishes.
* 14 A The wind drops.
* 15 A The boat creaks.
* 16 A In the silence, a distant drone grows, faint, mechanical.
* 17 A ¶ A small seaplane skims out of the clouds, banking low over the water.
18 A PILOT MARCEL DUVALIER (30s, leather helmet) leans from the open cockpit, waving a red flag.
19 D ISOLDE: Oh, thank God.
20 D JASPER: They see us!
21 D PILOT (shouting over the engine): Hold your positions! I'm dropping a line!
22 D HILDEGARD (softly): Stay seated. All of you.
23 A ¶ Nobody moves.
24 A Baxter lets the cup slip into the sea.

### SCENE s01719 | INT. DEEP-SPACE COLONY SHIP - HYDROPONICS BAY - "NIGHT CYCLE"
Detected names (may be incomplete or contain aliases): SAOIRSE KELLEHER, MATEO ROJAS-ILLINGWORTH, ORCHARD
* 1 A ¶ A cathedral-sized chamber, its curved ceiling lined with violet grow-lights dimmed to a gentle dusk.
* 2 A Terraces of lettuce, wheat and tomato step down to a central pool where a pale mist lingers.
* 3 A The air is warm and wet, and smells faintly of basil.
* 4 A Somewhere, water drips in a patient rhythm.
5 A ¶ DR. SAOIRSE KELLEHER (50s, silver hair in a braid, lab coat over a sleeping tunic) walks the terrace alone, brushing leaves with her fingertips.
6 A Below, at the pool, a young technician, MATEO ROJAS-ILLINGWORTH (20s, rolled sleeves, tool belt) refills a nutrient dispenser.
7 A The ship's AI, ORCHARD, glows as a faint green node at the end of each terrace.
8 D SAOIRSE: Mateo. Aren't you off shift?
9 D MATEO: Couldn't sleep, Doctor.
10 D SAOIRSE: Nor could I.
11 D MATEO: It's quiet down here.
12 D SAOIRSE: It always was, my first voyage.
13 A ¶ He smiles.
14 A She sits on the terrace steps.
* 15 A The mist swirls.
16 D ORCHARD [V.O.]: All systems nominal. Crop yield at one hundred and four percent.
17 D SAOIRSE: Thank you, Orchard.
18 D MATEO: It's weird, isn't it? Everything's so perfect.
19 D SAOIRSE: Perfect is what we aimed for.
* 20 A ¶ Silence.
* 21 A The water drips.
22 A Mateo stops, tilting his head, listening.
23 D MATEO: That's not the drip.
24 D SAOIRSE: What?
25 D MATEO: The drip's every four seconds. That's every three.
26 D ORCHARD [V.O.]: Correction. Condensation cycle is irregular.
27 A ¶ Saoirse stands.
28 A Her hand lingers on a tomato vine.
* 29 A The leaf is faintly warm, like skin.
30 D SAOIRSE: Orchard. Run a biological scan on Terrace Three.
31 D ORCHARD [V.O.]: Scanning.
* 32 A ¶ The green node flickers.
* 33 A Along the terrace, every plant turns, slowly, toward the two humans.
* 34 A The mist in the pool thickens into a shape that is almost, but not quite, a face.
35 D ORCHARD [V.O., CONT'D] (soft, distorted): Scan complete. You are not alone.

### SCENE s01720 | INT. DRAINED MUNICIPAL SWIMMING POOL - NIGHT
Detected names (may be incomplete or contain aliases): ODALYS VANTERPOOL, BRAM OKONKWO, PRUDENCE HALE, WENDELL DUCROIX
* 1 A ¶ Cracked blue tile.
* 2 A One work light hums over the deep end.
3 A ODALYS VANTERPOOL (30s, night custodian, flashlight like a club) stands on the ladder.
4 A BRAM OKONKWO (20s, her apprentice) clutches a mop.
5 A PRUDENCE HALE (60s, retired lifeguard, whistle on a cord) and WENDELL DUCROIX (40s, city inspector, clipboard) crowd the rim above.
6 D ODALYS: Nobody swims here. Nobody has swum here since--
7 D PRUDENCE: Since the boy. Say it.
8 D WENDELL: The drain cover is secure, I signed it myself, I signed it twice--
9 D BRAM: Something's knocking. Under the tile.
10 D ODALYS: It's the pipes.
11 D PRUDENCE: It's counting.
* 12 A ¶ Three slow knocks.
* 13 A The work light dies.
14 A Odalys and Bram scramble up the ladder, colliding, while Wendell drops the clipboard and Prudence blows the whistle once, hard.
15 D WENDELL: Stop blowing that!
16 D BRAM: Who's laughing? Somebody's laughing!
17 D PRUDENCE (whispering): Nobody. Nobody's down there.
* 18 A ¶ The light snaps back on.
19 A All four freeze.
* 20 A In the deep end, a single wet footprint, then another, walking toward them.

### SCENE s01721_0 | EXT. STALLED CABLE CAR - ALPINE GORGE - DAY
Detected names (may be incomplete or contain aliases): 
* 1 A ¶ A red cable car hangs motionless a thousand feet above a frozen river.
* 2 A Wind rocks it gently.

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
* 13 A Nobody else notices.
14 D DARA: You keep looking up.
15 D HOLLIS: Habit.
16 A ¶ She studies him.
17 A He drinks his coffee.
* 18 A ¶ The radio on his belt crackles.
19 A Everyone looks at it.
20 D RUFUS [V.O.] (over radio): Station to car four. Hollis, you read me?
21 A ¶ Hollis thumbs the key.
22 D HOLLIS: Loud and clear, Rufus. What's the word?
23 D RUFUS [V.O.] (over radio): Don't let anybody open the hatch.
* 24 A ¶ Silence.
25 A Tomasz lowers his camera.
26 A Keiko opens her eyes.
27 D KEIKO: Why would he say that?
28 D RUFUS [V.O.] (over radio): Because it isn't the wind, Hollis. Check the roof. Count the weight.
29 A ¶ Hollis stands.
* 30 A The car dips, slow and heavy, toward the back.
31 A Ingrid grips the rail.
32 A Dara moves in front of Keiko.
33 A Tomasz backs away until he hits the glass.
* 34 A ¶ Overhead, something shifts.
* 35 A A pause.
* 36 A Then three soft taps on the hatch, polite as a neighbor's.
37 D TOMASZ (whispering): I count five of us.
38 D DARA: There are five of us.
* 39 A ¶ The taps come again.
* 40 A From underneath the floor.

### SCENE s01722 | INT. ALL-NIGHT LAUNDROMAT - 3 A.M.
Detected names (may be incomplete or contain aliases): MARISOL REYES, TEDDY OYELARAN, NKECHI BELL, CAL DRUMMOND
* 1 A ¶ Fluorescent tubes buzz.
* 2 A Rows of orange plastic chairs, a broken change machine with a handwritten sign, a wall of dryers like portholes.
* 3 A Rain on the glass.
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
* 27 A ¶ Nobody answers.
* 28 A A dryer buzzes.
29 A Marisol slides off the washer.
30 D MARISOL: Then say it. You've got until this cycle's over.
31 A ¶ She sets the timer on the dryer.
* 32 A Thirty-one minutes.
33 A Teddy hands Cal a warm towel from the load without a word.
34 D NKECHI (to Teddy): That's somebody's towel.
35 D TEDDY: It's everybody's now.

### SCENE s01723 | INT. WIRELESS ROOM - STEAMSHIP "MERIDIAN" - NIGHT (1912)
Detected names (may be incomplete or contain aliases): AGNES FENWICK, PHILIPPA ASHCROFT, CAPTAIN HARGREAVES
* 1 A ¶ A cramped brass-and-oak cabin.
* 2 A A spark-gap transmitter crackles.
* 3 A A speaking tube hangs by the door.
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
* 14 A ¶ The speaking tube whistles.
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
* 26 A The spark leaps.

### SCENE s01724 | INT. CAR DECK - NIGHT FERRY - NIGHT
Detected names (may be incomplete or contain aliases): SORAYA KAMALI, LEV ARKADYEV, MARGUERITE DELACROIX, DUTCH PELLEGRINO
* 1 A ¶ Rows of parked cars chained to the steel floor.
* 2 A Diesel fumes and cold salt.
* 3 A Overhead lamps sway with the swell.
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

### SCENE s01725 | INT. CURLING CLUB - SATURDAY MORNING
Detected names (may be incomplete or contain aliases): GRETA HOLMQUIST, BJORN LUND, ILSE NAKAMURA, STRANGER, FELIX
* 1 A ¶ Empty sheet of ice.
* 2 A Rocks lined up like sleeping animals.
* 3 A A scoreboard that says nothing.
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

### SCENE s01726 | EXT. DRIVE-IN CONCESSION ROOF - NIGHT
Detected names (may be incomplete or contain aliases): TAVITA SOLOMONA, ROZ KELLERMAN, EAMON FLYNN
* 1 A ¶ Tar paper.
* 2 A A dead neon popcorn bucket.
* 3 A The big screen glows blue over a field of parked cars.
4 A ¶ TAVITA SOLOMONA (17, linebacker shoulders, soft eyes) sits on the edge.
5 A ROZ KELLERMAN (17, sharp, camera strapped on) crouches near the vent.
6 A EAMON FLYNN (16, small, hands in his sleeves) arrives last through the hatch.
* 7 A ¶ Eamon's boots on tin.
8 A Everyone freezes.
9 D ROZ: You're late.
10 D EAMON: My mom had me.
11 A ¶ Tavita stands.
12 A Roz stands.
13 A They back away from the hatch.
* 14 A A flashlight beam sweeps the lot below.
15 D TAVITA: Cops.
16 D ROZ: Security.
17 D TAVITA: It's the same thing.
18 D ROZ: Get down!
19 A ¶ All three drop flat.
20 A Tavita pulls Eamon by the collar.
* 21 A Roz's camera clacks on the tar.
* 22 A The beam slides past them, and passes.
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
* 54 A The film flickers across all three of them, blue.
55 A ¶ She takes the picture.
