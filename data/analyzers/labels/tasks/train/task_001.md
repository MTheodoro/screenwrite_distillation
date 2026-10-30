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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01442.json
### SCENE s01442 | INT. RUINED CHURCH BELL TOWER - DAWN
Detected names (may be incomplete or contain aliases): SERGEANT REYNALDO CASTELLANOS-DUBE, PRIVATE OSKAR LINDGREN-PARK, CORPORAL ABIOLA FAGBENLE, PRIVATE TEMUJIN BATBAYAR, LIEUTENANT HONORIA WEXCOMBE, STERNBERG
1 A ¶ Stone stairs wind up into broken light.
2 A The bell lies cracked on its side, green with age.
3 A Through a hole in the wall, smoke rises from a distant town.
4 A ¶ SERGEANT REYNALDO CASTELLANOS-DUBE (40s, scarf over his mouth, rifle across his shoulders) crouches at the arched window.
5 A PRIVATE OSKAR LINDGREN-PARK (19, glasses taped at the bridge) hugs the radio set.
6 A CORPORAL ABIOLA FAGBENLE (30s, sniper's cheekrest slung on her back) scans the tree line with binoculars.
7 A PRIVATE TEMUJIN BATBAYAR (20s, silent, chewing on a stalk of grass) stacks sandbags.
8 A LIEUTENANT HONORIA WEXCOMBE (30s, mud to her thighs, helmet cocked back) looks over a map weighted with a rock.
9 D WEXCOMBE: Report.
10 D FAGBENLE: Two vehicles, north road. Neither moving.
11 D CASTELLANOS-DUBE: Waiting for us to blink.
12 D WEXCOMBE: Then we don't blink. Lindgren-Park, raise HQ.
13 D LINDGREN-PARK: Yes, ma'am.
14 A ¶ He turns the dial.
15 A Static washes.
16 A A voice rises out of it, distorted.
17 D STERNBERG [V.O.] (radio): Echo Three, this is Command. Say your status.
18 D WEXCOMBE: Command, Echo Three. Tower held. Two hostile vehicles on the north road.
19 D STERNBERG [V.O.] (radio): Copy. Armor is thirty minutes out. Hold position.
20 D WEXCOMBE: Thirty minutes is a long time.
21 D STERNBERG [V.O.] (radio): It's what we have.
22 A ¶ Batbayar stops stacking.
23 A Cocks his head.
24 D BATBAYAR: Engines.
25 A ¶ Everyone listens.
26 A Faint, then louder.
27 A A low mechanical growl rolls up the valley.
28 D FAGBENLE: They're moving. Both.
29 D CASTELLANOS-DUBE: Positions.
30 A ¶ The team scatters.
31 A Fagbenle drops prone behind the window, rifle out.
32 A Batbayar drags sandbags to the stairwell mouth.
33 A Castellanos-Dube takes the opposite window.
34 A Lindgren-Park curls around the radio, mouth against the handset.
35 D LINDGREN-PARK: Command, Command, contact imminent.
36 D STERNBERG [V.O.] (radio, breaking up): ...say again...
37 D WEXCOMBE: Make it brief.
38 D LINDGREN-PARK: Contact.
39 A ¶ The first shell whistles.
40 A The tower shudders.
41 A Dust pours from the ceiling.
42 A The cracked bell rings once, a bruised, enormous note.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01872.json
### SCENE s01872 | INT. ORBITAL GREENHOUSE RING - SECTOR NINE - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): COMMANDER IFEOMA VANCE, BOTANIST RUSLAN TOKAYEV, MEDIC PRIYA NAIR, TECH JUNO BELL, CADET MARCO DELACROIX, PILOT SEUN-AH KIM
1 A ¶ Tomato vines.
2 A Grow-lights.
3 A A hull groan.
4 A Then the alarm.
5 A ¶ COMMANDER IFEOMA VANCE (50s, flight suit, grease-stained) slams the manual valve while BOTANIST RUSLAN TOKAYEV (30s, wiry) drags the cart of seedlings clear and MEDIC PRIYA NAIR (30s) seals the hatch behind them as TECH JUNO BELL (20s, goggles) hammers a bypass and CADET MARCO DELACROIX (18) freezes by the airlock wheel, hands shaking.
6 A At the console, PILOT SEUN-AH KIM (40s, headset) calls out numbers.
7 D VANCE: Pressure!
8 D TOKAYEV: Dropping!
9 D NAIR: Hatch seated!
10 D BELL: ^Bypass hot!
11 A ¶ Silence.
12 A Hiss.
13 A The needle halts.
14 D KIM: Breach contained. Sector Nine stable.
15 A ¶ Delacroix laughs, a shaky bark.
16 A Vance wipes her face with a glove, leaving soot.
17 D VANCE: Marco. Wheel.
18 D DELACROIX: Yes ma'am.
19 A ¶ He turns it.
20 A Slowly.
21 A The light goes green.
22 D TOKAYEV (to a seedling): Good girl. Hang on.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01232.json
### SCENE s01232 | INT. FERRY TERMINAL WAITING ROOM - IMPROVISED COURTROOM - DAY
Detected names (may be incomplete or contain aliases): JUDGE ZUZANNA PRZYBYLSKA, ATTORNEY CASSIUS WREN, CANCELLED
1 A ¶ Plastic chairs.
2 A Vending machines unplugged.
3 A A folding table with a flag taped to its front.
4 A Ferry schedules still on the wall.
5 A ¶ JUDGE ZUZANNA PRZYBYLSKA (60s, robe over a parka) taps a gavel made from a ship's wrench.
6 A Rain on the glass.
7 A ¶ ATTORNEY CASSIUS WREN (30s, wet suit jacket, bag of files) stands alone at the counter where tickets were once sold.
8 D JUDGE PRZYBYLSKA: All rise.
9 A ¶ Nobody else is present.
10 A Wren stays standing.
11 A The judge sits, unbothered.
12 D JUDGE PRZYBYLSKA [CONT'D] (to the empty chairs): Be seated. Ferry's cancelled. Court is in session.
13 A ¶ Wren sets down the files.
14 A They slide.
15 A He catches them with a forearm, a small rescue.
16 D WREN: Your Honour. My client's absent.
17 D JUDGE PRZYBYLSKA: Where?
18 D WREN: The ferry.
19 D JUDGE PRZYBYLSKA: Of course.
20 A ¶ She writes.
21 A Wren shuffles a sheet.
22 A Behind him the departures board flickers: CANCELLED, CANCELLED, CANCELLED.
23 D WREN (muttering): Two hours of driving for this.
24 D JUDGE PRZYBYLSKA: Counsel?
25 D WREN: Nothing, Your Honour.
26 D JUDGE PRZYBYLSKA: Proceed.
27 A ¶ He clears his throat and addresses the empty rows as if a jury sat there.
28 D WREN: Ladies and gentlemen, the question today is simple.
29 D JUDGE PRZYBYLSKA: There's no jury, Mr. Wren.
30 D WREN: Habit.
31 D JUDGE PRZYBYLSKA: Break it.
32 A ¶ Wren nods.
33 A He takes a long breath.
34 A His shoulders drop.
35 A The fight leaves him like air from a tyre.
36 A The judge sets down her pen, takes off her glasses, and rubs the bridge of her nose.
37 D JUDGE PRZYBYLSKA [CONT'D]: Motion granted. Default stays. Go home, son.
38 D WREN: That's it?
39 D JUDGE PRZYBYLSKA: That's it.
40 A ¶ He gathers the files, drops one, picks it up, drops another.
41 A She waits until he is at the door.
42 D JUDGE PRZYBYLSKA [CONT'D] (to herself, soft): Good lawyer. Terrible week.
43 A ¶ He pauses in the doorway.
44 A Doesn't turn.
45 D WREN: I heard that.
46 D JUDGE PRZYBYLSKA: You were meant to.
47 A ¶ He goes out into the rain.
48 A She turns the wrench-gavel over in her hands, then sets it carefully back on its cradle and stares at the board: CANCELLED.
49 T FADE OUT.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02260.json
### SCENE s02260 | EXT. TRACK, MUNICIPAL STADIUM - PRE-DAWN
Detected names (may be incomplete or contain aliases): KALINDA
1 A ¶ Empty bleachers.
2 A Floodlights at half power.
3 A Frost on the infield.
4 A Lane lines glow white.
5 A ¶ KALINDA, thirty-two, a distance runner in a thin jacket and tights, stretches against the starting block, one earbud in, her phone strapped to her upper arm.
6 A A bruise-colored sky pushes against the east wall.
7 A ¶ She checks her watch.
8 A Taps her phone.
9 D KALINDA [V.O.] (her own recorded voice, wry): Day one-oh-seven. Hamstring's tight. Don't be a hero.
10 A ¶ Kalinda grimaces, a small laugh.
11 D KALINDA: Noted.
12 A ¶ She jogs a slow lap.
13 A Her breath puffs in the cold.
14 A At the far curve, she stops, retightens a lace.
15 D KALINDA [V.O.]: Day ninety. Hit the wall at three miles. Cried a little. Kept going.
16 A ¶ She straightens.
17 A Shakes out her arms.
18 A Breaks into a steady pace, long strides, breath in quarter time.
19 D KALINDA [V.O.]: Day sixty. Told Mom I might retire. She said retire from what? I said running. She said, you never started.
20 A ¶ Kalinda snorts.
21 A Rounds the curve.
22 D KALINDA [V.O.]: Day one. Four hundred meters. Walked half. Felt like an idiot.
23 A ¶ She lengthens her stride.
24 A The sky pinks.
25 D KALINDA [V.O.]: Whoever you are today, run like you did on day one. Like you had nothing to prove.
26 A ¶ She nods once to the empty stands.
27 A Runs on, and the floodlights, one by one, click off as dawn takes over.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02216.json
### SCENE s02216 | EXT. SALT-LICK CORRAL - DAWN
Detected names (may be incomplete or contain aliases): OLD BASIL TREADWELL, JUNIPER TREADWELL, SEVERIN KOZLOWSKI
1 A ¶ A split-rail corral at the edge of the badlands.
2 A A single bare cottonwood.
3 A Pink light climbing a ridge.
4 A Frost on the rails.
5 A In the middle, a rangy bay horse tosses its head, tethered to a post.
6 A ¶ Three people.
7 A ¶ OLD BASIL TREADWELL (70s, rancher, leather vest, white whiskers) stands at the rail, rolling a cigarette.
8 A His grown daughter JUNIPER TREADWELL (30s, braid under a battered hat, rifle on her back) crouches at the horse's hoof, pretending to inspect it.
9 A And a hired hand, SEVERIN KOZLOWSKI (30s, quiet, one blue eye and one brown) leans on the post, coiling a lariat.
10 A ¶ Nobody speaks.
11 A Basil licks the paper.
12 A Juniper runs a thumb over the horse's fetlock.
13 D BASIL: Got a stone in there?
14 D JUNIPER: Not yet.
15 D BASIL: Then why're you looking?
16 D JUNIPER: Habit.
17 A ¶ Severin lets the rope fall.
18 A The horse stamps.
19 A Frost smokes off the ground.
20 D BASIL: Your mother loved this animal.
21 D JUNIPER: I remember.
22 D BASIL: She'd have fed it sugar every morning.
23 D JUNIPER: I remember that too.
24 A ¶ Severin shifts his weight.
25 A Basil does not look at him.
26 A Juniper does.
27 D BASIL: Severin, fetch my saddle.
28 D SEVERIN: It's in the barn, sir.
29 D BASIL: I know where it is.
30 A ¶ Severin doesn't move.
31 A The horse tugs at the tether.
32 D JUNIPER: Pa.
33 D BASIL: Don't Pa me.
34 D JUNIPER: He doesn't have to go.
35 D BASIL: He's a hired hand.
36 D JUNIPER: He's staying.
37 A ¶ Basil finally looks at Severin.
38 A A long moment.
39 A The old man's eyes are wet but it could be the cold.
40 D BASIL: Fine.
41 A ¶ He finishes rolling the cigarette.
42 A Strikes a match on the rail.
43 A The flame trembles in the dawn light.
44 A He lights it.
45 A Smoke curls up past the cottonwood.
46 D JUNIPER: You never answered me.
47 D BASIL: About what?
48 D JUNIPER: About the letter.
49 D BASIL: What letter?
50 D JUNIPER: The one you wrote and didn't send.
51 A ¶ Basil takes a long drag.
52 A Severin takes a step toward the horse.
53 A Juniper rises.
54 D BASIL (very quietly): Burn it.
55 D JUNIPER: I read it.
56 D BASIL: Then you know.
57 D JUNIPER: I know you sold the north pasture.
58 A ¶ Silence.
59 A The horse breathes steam.
60 A Severin takes the lariat and slings it over his shoulder.
61 A Basil hurls the cigarette to the dirt and grinds it under his heel.
62 D BASIL: To him.
63 A ¶ He doesn't point.
64 A He doesn't need to.
65 A Severin looks at the ground.
66 A Juniper looks at Severin.
67 A Then at her father.
68 A A thin wind rattles the frost off the cottonwood leaves.
69 D JUNIPER: You sold it to the hired man.
70 D BASIL: It was fair.
71 D JUNIPER: It was my mother's land.
72 D BASIL: It was my land.
73 D JUNIPER: She gave it to you.
74 D BASIL: And I gave it to him. Because he asked.
75 A ¶ Severin lifts his head.
76 A Juniper lunges.
77 A He sidesteps; she slams into the post, hand on his shirt, knuckles white.
78 A The horse shies, ropes snapping taut.
79 A Basil steps between them, one arm up, the old man suddenly very strong.
80 D BASIL [CONT'D]: Enough!
81 A ¶ They freeze: Juniper with her fist in Severin's shirt, Severin with both hands raised, Basil with his arm between.
82 A The horse screams and settles.
83 A Nobody breathes.
84 D JUNIPER (low, to Severin): You didn't tell me.
85 D SEVERIN: He asked me not to.
86 D JUNIPER (to her father): Why?
87 D BASIL: Because you'd have fought. Like you're fighting now.
88 A ¶ She lets go of the shirt slowly, one finger at a time.
89 A Steps back.
90 A Wipes her mouth.
91 A Looks at the pink light cresting the ridge.
92 D JUNIPER (muttering): Four generations.
93 D BASIL: Five, if you stay.
94 A ¶ She doesn't answer.
95 A She unslings the rifle, props it against the post, and goes to the horse.
96 A She puts her cheek against its neck.
97 A Basil and Severin stand there, apart, while the sun lifts over the ridge and floods the frozen yard.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01913.json
### SCENE s01913 | INT. SUBURBAN KITCHEN - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): HEIDI KOWALCZYK-MBEKI, PETE, STRANGER, HAMISH OYELOWO-DRUMMOND
1 A ¶ Linoleum, a wall calendar, a fridge plastered in drawings.
2 A A clock ticks over the stove.
3 A ¶ HEIDI KOWALCZYK-MBEKI (40s, apron over work clothes) stirs a pot.
4 A Her son PETER "PETE" KOWALCZYK-MBEKI (10, grass-stained knees) sits at the table, picking at a scab.
5 D HEIDI: Dinner in ten.
6 D PETE: Mom, I'm hungry.
7 D HEIDI: You're always hungry.
8 D PETE: Because I'm growing.
9 D HEIDI: ^Don't use that on me.
10 A ¶ A heavy knock at the front door.
11 A Both freeze.
12 A Heidi looks at the clock.
13 A Pete slides off his chair.
14 D PETE [CONT'D]: I'll get it.
15 D HEIDI: Pete, no.
16 A ¶ He is already gone.
17 A Heidi wipes her hands.
18 A The knocking comes again, patient.
19 A Pete's voice drifts from the hall.
20 D PETE [O.S.]: Hi. Who are you?
21 D STRANGER [O.S.]: Hello, young man. Is your mother home?
22 A ¶ Heidi's face tightens.
23 A She puts the wooden spoon on the counter and follows.
24 A ¶ IN THE HALL
25 A ¶ A tall man in a rumpled gray suit, HAMISH OYELOWO-DRUMMOND (50s, soft hat, a manila folder), stands on the doormat, smiling carefully.
26 A Pete peers up at him, curious.
27 D HAMISH: My name is Hamish. I'm from the county adoption office.
28 D HEIDI: We're not adopting.
29 D HAMISH: No, ma'am. But you were adopted, weren't you? In 1988.
30 A ¶ Heidi goes pale.
31 A Pete takes her hand.
32 D HEIDI: Who sent you?
33 D HAMISH: Your sister.
34 D PETE: Mom, I didn't know you had a sister.
35 D HEIDI: Neither did I.
36 A ¶ She steps aside.
37 A Lets him in.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00242.json
### SCENE s00242 | EXT. LIFEBOAT ADRIFT, SOUTHERN OCEAN - NOON
Detected names (may be incomplete or contain aliases): CAPTAIN ISOLDE VANDERHOEK-MWAMBA, ENSIGN REMY LAFAYETTE-OSUNDE, MAGS, ODELL-PRZYBYLSKI
1 A ¶ A grey swell.
2 A A hull the colour of old teeth.
3 A The sun a dull coin behind cloud.
4 A ¶ Three figures crowd the boat.
5 A CAPTAIN ISOLDE VANDERHOEK-MWAMBA (50s, cracked lips, officer's cap tied under her chin) sits at the tiller, jaw tight.
6 A ¶ Across from her, ENSIGN REMY LAFAYETTE-OSUNDE (20s, one arm in a makeshift sling, blistered nose) holds a half-empty water tin in his good hand.
7 A ¶ In the bow, the ship's cook, MARGUERITE "MAGS" ODELL-PRZYBYLSKI (60s, apron still on, salt in her eyebrows), stares at the horizon with her chin on her knees.
8 D REMY: Captain, the ration.
9 D ISOLDE: Two sips. Each.
10 D REMY: Last night it was three.
11 D ISOLDE: Last night I thought we'd be rescued by today.
12 D MAGS (not turning): That's what I thought yesterday.
13 D REMY: Mags, don't.
14 D MAGS: I'm only saying.
15 D ISOLDE: Pass the tin.
16 A ¶ Remy hands it over.
17 A She takes a sip, wipes her mouth, passes it on.
18 A Mags takes hers without looking.
19 D MAGS: Captain, how long do you give us?
20 D ISOLDE: I don't give things.
21 D MAGS: How long do you think?
22 D ISOLDE: Three days. Four if the rain comes.
23 D REMY: And if it doesn't?
24 D ISOLDE: Then we'll know.
25 A ¶ Silence.
26 A The swell lifts them, lowers them.
27 D MAGS: There.
28 D REMY: Where?
29 D MAGS: There! A light!
30 A ¶ Remy scrambles up, rocking the boat.
31 A Isolde grabs the gunwale.
32 A A speck of white glints on the horizon.
33 D REMY: Ship. It's a ship.
34 D ISOLDE: It's a glare.
35 D REMY: It's moving!
36 D MAGS: It's moving!
37 D ISOLDE (quietly): It's a gull.
38 A ¶ The speck rises, banks, and becomes a seabird, wheeling above the waves.
39 A It cries once and flies away from them.
40 A ¶ Remy sinks back.
41 A Mags laughs, a cracked little sound.
42 A Then she cries, then she laughs again.
43 D ISOLDE: Mags.
44 D MAGS: I know.
45 D ISOLDE: Pass the tin.
46 D MAGS: It's empty.
47 D ISOLDE: Pass it anyway.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00356.json
### SCENE s00356 | INT. OPEN-PLAN OFFICE - FOURTH FLOOR - DAY
Detected names (may be incomplete or contain aliases): PRIYANKA, WENDELL, LUCIA, HAROLD, TALL MAN, PHONE, MR. GRAVES
1 A ¶ Cubicles.
2 A Beige.
3 A A ficus dying with dignity.
4 A ¶ PRIYANKA, thirties, presses a stapler into the carpet.
5 A WENDELL, fifties, stares at an empty slide.
6 A LUCIA, twenties, hides behind a monitor.
7 A HAROLD, sixties, sleeps upright.
8 A A TALL MAN, forties, stands unannounced at the end of the aisle, a clipboard under his arm.
9 D PRIYANKA: Who is that?
10 D WENDELL (shrugging): Consultant.
11 A ¶ The Tall Man walks to Wendell's desk.
12 A He places his clipboard down.
13 A Wendell does not look up.
14 A Lucia slides lower.
15 D TALL MAN: Efficiency review.
16 D WENDELL: Of course.
17 D PHONE [V.O.] (from Wendell's desk): Wendell, this is the CEO. Is the review underway?
18 D WENDELL (into the phone, calm): It's underway, sir.
19 A ¶ The Tall Man takes out a pen.
20 A Harold snores.
21 A Priyanka drops the stapler and it echoes.
22 A Lucia peeks over the edge of her monitor and meets the Tall Man's eyes.
23 D MR. GRAVES (to Lucia): You. Name?
24 D LUCIA: Lucia.
25 D MR. GRAVES: Redundant.
26 A ¶ Lucia stands.
27 A She picks up her coat.
28 A Priyanka rises, Wendell rises, Harold wakes with a start, and all four stare as Mr. Graves strikes off a line on his clipboard.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00742.json
### SCENE s00742 | INT. COUNTY COURTHOUSE - ATTORNEY-CLIENT ROOM - MORNING
Detected names (may be incomplete or contain aliases): ARTEMIS CROSS, ROLLY, PEARCE
1 A ¶ A grey cube.
2 A Metal table.
3 A Two chairs.
4 A A buzzing fluorescent.
5 A ¶ ARTEMIS CROSS, forties, public defender, sits with a thick file, pen clicking.
6 A She doesn't look up.
7 A ¶ The door buzzes and swings open.
8 A Chains.
9 A A shuffle.
10 A ¶ ROLLAND "ROLLY" PEARCE, twenties, county orange, cuffs front, wide shoulders, thin voice, enters.
11 A The door slams behind him.
12 D ARTEMIS: Sit down, Rolly.
13 D ROLLY: Ms. Cross.
14 D ARTEMIS: Artemis is fine.
15 D ROLLY: Ms. Cross is fine.
16 A ¶ He sits.
17 A She slides a photograph across the table.
18 A He doesn't look at it.
19 D ARTEMIS: Do you know that man?
20 D ROLLY: No.
21 D ARTEMIS: He says he knows you.
22 D ROLLY: People say things.
23 D ARTEMIS: He said you were at the Dockside on the twelfth.
24 D ROLLY: I was home.
25 D ARTEMIS: Alone?
26 D ROLLY: With my cat.
27 D ARTEMIS: Rolly, the cat can't testify.
28 D ROLLY: Then you're in trouble.
29 A ¶ She stops clicking.
30 A Locks eyes with him.
31 D ARTEMIS: Listen to me. The DA offers eight years. Eight, Rolly. If we go to trial and lose, it's twenty.
32 D ROLLY: And if we win?
33 D ARTEMIS: You walk.
34 D ROLLY: Then we win.
35 D ARTEMIS: That's not how it works.
36 D ROLLY: That's how I want it to work.
37 A ¶ She flips a page.
38 A Reads.
39 A Turns another.
40 D ARTEMIS: The man in the photo recanted this morning.
41 D ROLLY (straightening): What?
42 D ARTEMIS: The witness changed his story.
43 D ROLLY: That's good.
44 D ARTEMIS: It's complicated, because someone leaned on him. And I think you know who.
45 A ¶ Rolly stares at the table.
46 A The fluorescent buzzes.
47 D ROLLY: Ms. Cross. If I say a name, can you keep it in this room?
48 D ARTEMIS: That's the whole point of the room.
49 A ¶ He leans forward.
50 A She lays down the pen.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01294.json
### SCENE s01294 | EXT. DRIFTING ICE FLOE - DAY
Detected names (may be incomplete or contain aliases): LAWRENCE DEVEREUX, ABEL TSEGAYE
1 A ¶ A slab of white, a hundred feet across, adrift in a grey sea.
2 A Fog presses on every side.
3 A The ice groans.
4 A ¶ LAWRENCE DEVEREUX, 50s, polar surveyor, in a heavy wool coat caked with frost, kneels by a crate of instruments.
5 A His beard is white with rime.
6 A ¶ ABEL TSEGAYE, 30s, his assistant, stands at the edge of the floe, peering into the fog.
7 A A rope wound about his chest.
8 D LAWRENCE: Abel, stay back from the edge.
9 D ABEL: There is water on the east side.
10 D LAWRENCE: There is water on every side.
11 D ABEL: The ice is thinner there. I heard it crack.
12 D LAWRENCE: Then we stay on the west.
13 A ¶ He rises, stiff-limbed.
14 A He picks up a compass.
15 A The needle spins, useless.
16 D ABEL: How long has the floe been drifting?
17 D LAWRENCE: Since Tuesday.
18 D ABEL: We should signal.
19 D LAWRENCE: With what? A flare?
20 D ABEL: There are two flares.
21 D LAWRENCE: There is one. The other went down with the sled.
22 A ¶ Abel turns.
23 A Fog swallows the sea.
24 D ABEL: You didn't tell me.
25 D LAWRENCE: You didn't ask.
26 A ¶ A deep CRACK runs through the ice.
27 A Both men freeze.
28 A A fissure opens ten feet from Lawrence's boots, black water welling.
29 D ABEL: Lawrence!
30 A ¶ He reaches him.
31 A Hauls him back.
32 A The fissure widens to a yard.
33 D LAWRENCE: Cut the rope.
34 D ABEL: No.
35 D LAWRENCE: Abel, if it takes me, it takes you.
36 D ABEL: Then it takes us both. Pull!
37 A ¶ Lawrence scrambles up.
38 A They collapse on the solid ice.
39 A The gap stops, a few feet wide.
40 A Water slaps the edges.
41 D LAWRENCE (breathless): One flare.
42 D ABEL: One flare.
43 A ¶ Lawrence digs in his pack.
44 A Pulls out a dented red tube.
45 A His hand shakes.
46 D LAWRENCE: You do it.
47 D ABEL: Why?
48 D LAWRENCE: Because he who lights it will be the one they find first.
49 A ¶ Abel takes the flare.
50 A Pulls the cap.
51 A A plume of crimson smoke bursts into the fog, bright as blood on snow.
