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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00524.json
### SCENE s00524 | INT. PELL & SONS CLOCKMAKERS - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR FOLASADE OYELARAN, CEDRIC PELL, TELEPHONE, DELPHINE
1 A ¶ A narrow shop that has outlived its century.
2 A Two hundred clocks line the walls, each a different hour, each ticking out of step, so that the room breathes like a sleeping animal.
3 A Brass, walnut, bone.
4 A A single green-shaded lamp burns on the workbench.
5 A ¶ INSPECTOR FOLASADE OYELARAN, 50s, a grey raincoat dripping onto the floorboards, stands in the middle of this noise with the stillness of someone used to being the only quiet thing in a room.
6 A ¶ CEDRIC PELL, 60s, watchmaker's loupe pushed up into thinning hair, sits at the bench, a half-assembled movement before him.
7 A His hands are steady.
8 A His eyes are not.
9 D OYELARAN: Mr. Pell, you told the constable you were home all evening.
10 D PELL: I was home. Upstairs. I live above the shop, Inspector.
11 D OYELARAN: Yet your lamp was lit down here at nine.
12 D PELL: Clocks do not repair themselves.
13 A ¶ A cuckoo bursts from a wall case.
14 A Nine-thirty on some forgotten schedule.
15 A Pell flinches.
16 A Oyelaran does not.
17 D OYELARAN: You flinch at that one.
18 D PELL: It was my wife's. She wound it every morning for thirty years.
19 D OYELARAN: And Mr. Hartigan? Did he wind anything?
20 D PELL (too quickly): I don't know a Hartigan.
21 A ¶ The cuckoo retreats.
22 A A grandfather clock tolls once, deep and wet, as though underwater.
23 A ¶ Oyelaran crosses to the bench.
24 A Lifts the movement between two fingers.
25 A Turns it to the light.
26 D OYELARAN: Interesting. The mainspring is brand new. The rest is a hundred years old.
27 D PELL: Restorations are mixed.
28 D OYELARAN: Mr. Hartigan's watch was found in the canal this afternoon. Stopped at 8:52.
29 A ¶ Pell goes very still.
30 D PELL: Water does that.
31 D OYELARAN: Water doesn't wind a mainspring backward, Mr. Pell.
32 A ¶ Silence.
33 A Two hundred clocks and not one of them says the same time.
34 A ¶ A TELEPHONE rings on the wall.
35 A Old rotary.
36 A Black.
37 A It rings and rings.
38 D PELL: Let it.
39 D OYELARAN: No. I think you should answer.
40 A ¶ Pell rises.
41 A Crosses.
42 A Lifts the receiver.
43 A Listens.
44 A His face loses its color.
45 D DELPHINE [V.O.] (over phone, thin): Cedric? Papa? Are they there yet?
46 D PELL (into phone, hoarse): Delphine, not now.
47 D DELPHINE [V.O.] (over phone): I did what you said. I put the watch in the canal. But Papa, it was still ticking when I --
48 A ¶ Pell slams the receiver down.
49 A Too late.
50 A The line was open long enough.
51 A ¶ Oyelaran has not moved.
52 A Her voice is gentle, almost tender.
53 D OYELARAN: Your daughter is very honest.
54 D PELL: She is a child.
55 D OYELARAN: She is twenty-six.
56 A ¶ Pell sinks onto the stool.
57 A The loupe falls from his hair and rolls across the bench, stopping against a screwdriver.
58 D PELL: He came for the shop. He wanted the building. Hartigan, he said it was only a matter of time before the street --
59 D OYELARAN: So you wound his watch backward and put him in the canal.
60 D PELL: No!
61 A ¶ He stands again, trembling.
62 A The anger rises up out of him like steam.
63 D PELL [CONT'D]: No. I did not touch the man. He fell. I swear to you, he fell, he was on the stairs, he laughed at me, Inspector, he laughed at my wife's cuckoo --
64 D OYELARAN: Mr. Pell.
65 D PELL: -- and I only wanted him quiet --
66 D OYELARAN: Cedric.
67 A ¶ He stops.
68 A Breathing hard.
69 D OYELARAN [CONT'D]: Sit down.
70 A ¶ He sits.
71 A The cuckoo bursts again, absurd, bright.
72 A Both of them watch it.
73 D PELL (small): She never could stand that bird.
74 A ¶ Oyelaran almost smiles.
75 A Almost.
76 D OYELARAN: I will need the key to the cellar.
77 A ¶ Pell's hand moves to his waistcoat.
78 A The chain.
79 A A small brass key.
80 A He holds it out across the bench.
81 A ¶ She takes it.
82 A The lamp flickers.
83 A ¶ The telephone begins to ring again.
84 D OYELARAN [CONT'D] (gently): Let it ring.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00252.json
### SCENE s00252 | EXT. WINDMILL RANCH, DRY PLAINS - DAY
Detected names (may be incomplete or contain aliases): ABEL MONTGOMERY-OSEI, RADIO
1 A ¶ A tall steel windmill creaks against a bleached sky.
2 A A sagging fence runs off into dust.
3 A Beneath the tower, a water trough, half-empty.
4 A ¶ ABEL MONTGOMERY-OSEI (50s, long coat, sun-cracked hat, a face like riverbed) rides in, dismounts, and loosens the cinch.
5 A His horse drinks.
6 A He doesn't.
7 A ¶ He walks to the windmill.
8 A Reaches into the shadow of the tower and pulls out a tin box.
9 A Opens it.
10 A Inside: a folded letter, a photograph, a wedding ring.
11 A ¶ He reads the letter.
12 A Folds it.
13 A Pockets the ring.
14 A Holds the photograph a long time.
15 A ¶ Then he sits against the windmill leg and stares across the plain.
16 A ¶ A faint crackle from his saddlebag.
17 A A small battered radio, strapped there for emergencies.
18 D ABEL (to the radio): Not now.
19 A ¶ The crackle repeats.
20 A A voice, thin and far:
21 D RADIO [V.O.]: Abel. You there?
22 D ABEL (sighing): I'm here.
23 D RADIO [V.O.]: They found the bodies at Cutter's Rise.
24 D ABEL: I know.
25 D RADIO [V.O.]: It was the Calloway gang.
26 D ABEL: I know who it was.
27 D RADIO [V.O.]: What are you going to do?
28 A ¶ Abel looks at the windmill blades turning.
29 A Looks at the dust.
30 D ABEL: I'm going to stay here a while.
31 D RADIO [V.O.]: Abel--
32 D ABEL: A while.
33 A ¶ He clicks the radio off.
34 A Puts it back in the bag.
35 A The wind picks up.
36 A The windmill groans.
37 A ¶ Far on the horizon, three riders appear as dark specks.
38 A Abel doesn't turn.
39 D ABEL [CONT'D] (to himself): Took you long enough.
40 A ¶ He stands.
41 A Draws his revolver.
42 A Checks it.
43 A Holsters it.
44 A Then, deliberately, he sits down again and takes off his hat, resting it on his knee.
45 A ¶ The riders grow.
46 A Abel waits.
47 A ¶ At two hundred yards, one of them raises a rifle.
48 A Abel doesn't flinch.
49 D ABEL [CONT'D] (softly, to the photograph): Not yet.
50 A ¶ The shot cracks.
51 A The photograph leaps from his hand, a hole through the corner.
52 A He stares at it.
53 A Then he is on his feet, gun up, firing three times at the riders.
54 A One falls.
55 A The others scatter into the dust.
56 A ¶ Silence returns.
57 A The windmill creaks.
58 A Abel crosses to the photograph, bends, and picks it up with great care.
59 A A hole where a shoulder used to be.
60 A ¶ He lowers himself to the ground.
61 A Breathes.
62 D ABEL [CONT'D] (to the sky): There. Now we're done.
63 A ¶ The wind carries the smoke away.
64 A The blades keep turning.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00366.json
### SCENE s00366 | INT. MATTRESS SHOWROOM - DAY
Detected names (may be incomplete or contain aliases): DUANE PETTIGREW, LUCINDA FROST, THEO FROST
1 A ¶ A cavernous warehouse of beds.
2 A Banners scream "BLOWOUT."
3 A A fake sunrise glows over a king-size.
4 A ¶ DUANE PETTIGREW, forties, a salesman in a shiny tie, hovers over a couple.
5 A LUCINDA FROST, thirties, bounces gently on a firm model.
6 A Her husband THEO FROST, thirties, lies flat on a plush one with his shoes on.
7 D DUANE: This one has four layers of memory foam.
8 D LUCINDA: I'll take your word.
9 A ¶ Duane clasps his hands.
10 A Theo rolls over and sinks into the foam with a long sigh while Lucinda stands and moves to a third bed, which Duane hurriedly pats, and while Theo's shoes drag a smear of mud across the quilted top, Duane gasps and lunges with a wipe, and Lucinda kneels to inspect the springs.
11 D THEO: I can't get up.
12 D LUCINDA: It's only a mattress.
13 D THEO: It has me.
14 D DUANE: That's the contouring technology!
15 A ¶ Duane takes Theo's arm and heaves.
16 A Theo comes up an inch and falls back.
17 A Lucinda grabs his other arm.
18 A They pull in unison and the three tumble off the edge of the bed in a heap, the sign "BLOWOUT" swaying overhead.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01476.json
### SCENE s01476 | INT. ORBITAL GREENHOUSE RING - "SOLARIUM 3" - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): IMOGEN FAIRWEATHER-OKORO
1 A ¶ A curved corridor of glass and ribbed steel, wrapped around a slow-turning station.
2 A Rows of tomato vines climb silver trellises under violet grow-lamps.
3 A Beyond the glass, Saturn's rings burn thin and gold against black.
4 A ¶ DR. IMOGEN FAIRWEATHER-OKORO (50s, close-cropped gray hair, a patched blue jumpsuit, hands stained green to the wrist) walks the rows with a tablet.
5 A She is humming.
6 A She stops at a vine and presses a ripe tomato between thumb and finger.
7 D IMOGEN: Good girl.
8 A ¶ She plucks it, bites in, closes her eyes.
9 A The station is quiet.
10 A The lamps hum on a calm note.
11 A Everything is exactly as it should be.
12 A ¶ She taps the tablet and speaks into it.
13 D IMOGEN [CONT'D]: Greenhouse log, day four hundred and twelve. Yield nominal. Humidity nominal. Crew morale...
14 A ¶ She smiles at the empty corridor.
15 D IMOGEN [CONT'D]: Nominal. Seeing as I'm the crew.
16 A ¶ A soft chime.
17 A The tablet screen flickers.
18 A A recorded voice, her own, younger, bright, comes through the speaker.
19 D IMOGEN [V.O.] (recording): Log, day one. If you're hearing this, Imogen, then the relief ship is overdue and I've been right about the schedule all along.
20 A ¶ Imogen's smile fades.
21 A She lifts the tablet and scrolls.
22 A A file she does not remember is open.
23 D IMOGEN [V.O., CONT'D] (recording): Don't go to the east vines. The ones in the corner. Don't water them. Don't touch them. They aren't ours.
24 A ¶ Imogen turns her head slowly.
25 A At the end of the ring, past the last trellis, a single vine she has never planted is climbing the glass, pulsing, in time with her breath.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00128.json
### SCENE s00128 | INT. CURLING CLUB - DAWN
Detected names (may be incomplete or contain aliases): COACH GREER WALLENBERG, STRANGER, MARGIT
1 A ¶ Empty ice, grey-blue under the rafters.
2 A A frost-fogged scoreboard.
3 A COACH GREER WALLENBERG, 50s, thermos in hand, walks the sheet checking pebble, shoulders tight, a man with a final tomorrow.
4 A ¶ A STRANGER stands at the rail, an elderly woman in a green scarf, hands tucked in her sleeves.
5 A She has slipped in out of the cold.
6 A ¶ He sees her.
7 A He stops.
8 D GREER: Rink's closed, ma'am.
9 D STRANGER: So is the door you came through.
10 A ¶ He glances back.
11 A It is.
12 A He turns again, wary, and she steps onto the ice in soft shoes, steady as if she has done it all her life.
13 D GREER: Who let you in?
14 D STRANGER: Nobody. I'm just early.
15 A ¶ She stops beside a stone and nudges it with her toe.
16 A He bristles.
17 D GREER: That's the championship stone.
18 D STRANGER: It pulls left. You know it does.
19 A ¶ He says nothing.
20 A She smiles.
21 D STRANGER [CONT'D]: Margit Lindqvist. I won this club's first trophy in 1961.
22 D GREER: Greer. I coach the rink that wants the next one.
23 D MARGIT: Then listen, Greer. You grind that stone on the left side, and your girls will thank you tomorrow.
24 A ¶ He stares at her, then at the stone.
25 A He crouches, runs a thumb along the running band.
26 A A burr.
27 A Small.
28 A Real.
29 D GREER: How did you know?
30 D MARGIT: It pulled left in 1961, too.
31 A ¶ He looks up.
32 A She has already turned for the door, scarf trailing, leaving a line of small wet prints on the ice.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00393.json
### SCENE s00393 | INT. NIGHT FERRY "ADELAIDE" - GALLEY - NIGHT
Detected names (may be incomplete or contain aliases): ARASH, CLEMENTINE, ABEL
1 A ¶ A tiny steel kitchen.
2 A A porthole shows black water.
3 A Pans hang on a rail and sway with the swell.
4 A ¶ ARASH, 60, cook, in a white apron, rolls dough on a floured board.
5 A CLEMENTINE, 30s, in a navy coat, sits on a stool by the oven.
6 A ABEL, 30s, in shirtsleeves, leans in the doorway with a paper cup of tea.
7 D ARASH: You two can talk. I'm deaf in the oven ear.
8 D CLEMENTINE: You don't have an oven ear.
9 D ARASH: I have a lot of ears.
10 D ABEL: Clem.
11 D CLEMENTINE: Abel.
12 D ABEL: Thirty-one days.
13 D CLEMENTINE: Thirty-two. It's after midnight.
14 D ABEL: Thirty-two, then.
15 D CLEMENTINE: I wrote you.
16 D ABEL: You wrote me once.
17 D CLEMENTINE: I wrote you a very good one.
18 D ABEL: It was good. It said you'd be somewhere else. It didn't say where.
19 D CLEMENTINE: I didn't know where.
20 D ABEL: You're on a ferry.
21 D CLEMENTINE: It was where the ferry was going.
22 A ¶ Arash turns the dough, folds it, turns it again.
23 A The ferry rolls.
24 A The pans clang softly.
25 D ABEL: You could have called.
26 D CLEMENTINE: So could you.
27 D ABEL: I did. Four times.
28 D CLEMENTINE: I know.
29 D ABEL: You knew.
30 D CLEMENTINE: I listened to every one.
31 D ABEL: And?
32 D CLEMENTINE: And I didn't pick up.
33 D ABEL: Why not?
34 D CLEMENTINE: Because you'd have asked me to come back, and I'd have said yes.
35 A ¶ A silence.
36 A The oven ticks.
37 A Arash's hands slow on the dough.
38 D ABEL: And that's bad.
39 D CLEMENTINE: It was then.
40 D ABEL: And now?
41 D CLEMENTINE: Now I'd ask you to get on the ferry.
42 D ABEL: I am on the ferry.
43 D CLEMENTINE: I know. I saw you at the dock.
44 D ABEL: You saw me.
45 D CLEMENTINE: Thirty-two days. I know your walk from a quarter mile.
46 A ¶ Abel sets down the tea.
47 A Arash, without turning, sets down the rolling pin.
48 A He wipes his hands, takes his coat from the hook, and goes out.
49 A The door swings shut behind him.
50 D ABEL: Is it too late for the thing I wrote?
51 D CLEMENTINE: Which thing?
52 D ABEL: The reply.
53 D CLEMENTINE: You never sent a reply.
54 D ABEL: I wrote one every night.
55 A ¶ He pulls a bundle of letters from his jacket, tied with kitchen twine.
56 A She stares at it, then takes it.
57 A Her thumb passes across the top envelope.
58 D CLEMENTINE (quiet): Read me the first.
59 D ABEL: It just says your name.
60 A ¶ She nods.
61 A He begins to say it.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00210.json
### SCENE s00210 | INT. OPEN-PLAN OFFICE - "SYNERGY HUB" - MORNING
Detected names (may be incomplete or contain aliases): TARK, BOLLINGER, CORDY, ADESANYA, MARGUERITE LESAGE-OKORO, THAD, QUILLFEATHER
1 A ¶ Standing desks, bean bags, a kombucha tap, motivational posters.
2 A A banner: "WE ARE FAMILY."
3 A A beanbag chair shaped like a unicorn.
4 A Fluorescent morning light.
5 A ¶ TARQUIN "TARK" BOLLINGER, 30s, in a vest and sneakers, balances on a wobble board.
6 A Beside him, CORDELIA "CORDY" ADESANYA, 40s, hair in a tight bun, taps at a laptop.
7 A MARGUERITE LESAGE-OKORO, 50s, the office manager, hoses a droopy fern.
8 A THADDEUS "THAD" QUILLFEATHER, 60s, a quiet man in a gray suit, sits at the corner desk, unmoving.
9 D TARK: Team! Quick sync!
10 D CORDY: We just did a sync.
11 D TARK: This is a meta-sync.
12 D MARGUERITE (over the hose): Tark, the fern is dying.
13 D TARK: Everything is dying. That's the culture of change.
14 A ¶ Cordy rolls her eyes.
15 A Thad stays still.
16 A He has not moved in some time.
17 D TARK [CONT'D]: Thad. Buddy. Thoughts?
18 A ¶ No answer.
19 D CORDY: Thad?
20 D MARGUERITE: Thad doesn't talk before ten.
21 D TARK: It's ten-fifteen.
22 D CORDY: Is he, uh...
23 D MARGUERITE: He's fine.
24 D TARK: He's on mute.
25 D CORDY: We're in person.
26 D TARK: Mute is a state of mind.
27 A ¶ They approach the desk.
28 A Marguerite prods Thad's shoulder with the hose.
29 A He topples out of the chair.
30 A Cordy shrieks.
31 A Tark falls off the wobble board.
32 A Marguerite drops the hose, which sprays everyone.
33 A They scramble backward.
34 A Thad lies on the floor, eyes closed, and snores.
35 D CORDY: He's asleep!
36 D MARGUERITE: He's been asleep since Tuesday.
37 D TARK: Since Tuesday?
38 D MARGUERITE: That's when he stopped answering emails.
39 D TARK: We thought that was mindfulness.
40 A ¶ Thad opens one eye.
41 A Sits up, slowly, dripping.
42 D THAD: Is it Friday?
43 D CORDY: It's Thursday.
44 D THAD: Damn.
45 A ¶ He lies back down.
46 A Tark stares at the others.
47 A Cordy stares at Marguerite.
48 A Marguerite shuts off the water.
49 D TARK: Okay. New initiative. Naps.
50 D CORDY: We already have naps.
51 D TARK: Mandatory naps.
52 D THAD (from the floor, dreamy): I'd back that.
53 D MARGUERITE: Tark, who signed off on the quarterly?
54 D TARK: Which quarterly?
55 D MARGUERITE: The one that says we're out of money.
56 D TARK: We're out of money?
57 D CORDY: We've been out of money since March.
58 D TARK: But the kombucha tap works.
59 D MARGUERITE: That's a donation.
60 A ¶ Tark takes a long, wobbly step.
61 A He looks at the banner.
62 A At the unicorn beanbag.
63 A At the dying fern.
64 A Behind him, the overhead lights flicker out one by one.
65 D THAD (softly): Told you.
66 D TARK: Told me what?
67 D THAD: That it was Friday.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01230.json
### SCENE s01230 | INT. NATURAL HISTORY MUSEUM - TAXIDERMY COLD STORE - NIGHT
Detected names (may be incomplete or contain aliases): YEVGENY BRODSKY, BASIL ACHTERBERG
1 A ¶ A walk-in freezer the size of a school gym.
2 A Steel racks of stuffed animals wrapped in clear plastic: a bear, a pair of okapi, a flock of sealed albatrosses.
3 A The hum of the compressors is constant.
4 A ¶ YEVGENY BRODSKY (40s, quilted jacket, frost on his eyebrows) kneels at a floor safe.
5 A A stethoscope hangs around his neck.
6 A He turns the dial a quarter click at a time.
7 A ¶ BASIL ACHTERBERG (60s, museum night guard's uniform, crisp, keys at his belt) stands over him with a thermos.
8 A He pours tea into the cap and offers it down.
9 D YEVGENY: I'm good.
10 D BASIL: It's minus eighteen. You're shivering.
11 D YEVGENY: I'm concentrating.
12 A ¶ Yevgeny doesn't look up.
13 A Basil sips the tea himself.
14 A Looks at a polar bear in its plastic shroud, nods to it like an old neighbour.
15 D BASIL: You like the quiet?
16 D YEVGENY: I like it when nobody talks.
17 D BASIL: He used to say that. Your father.
18 A ¶ Yevgeny's hand stops.
19 A Just for a heartbeat.
20 A The dial doesn't move.
21 D YEVGENY: You said you didn't know him.
22 D BASIL: I said I didn't know him well.
23 A ¶ He screws the cap back on the thermos.
24 A His expression is mild, neighbourly.
25 A Yevgeny resumes the dial.
26 A Click.
27 A Click.
28 A Click.
29 A ¶ The safe clunks open.
30 A Inside, a velvet bag.
31 A Yevgeny lifts it, weighs it, loosens the drawstring.
32 A A heavy stone slides into his glove: a rough diamond the size of a plum.
33 D YEVGENY [CONT'D] (low): There you are.
34 D BASIL: It's smaller than I thought.
35 D YEVGENY: It's always smaller.
36 D BASIL: Put it back.
37 A ¶ Yevgeny looks up.
38 A The thermos is still in Basil's right hand.
39 A In his left, steady as a stone, is a small black pistol.
40 D YEVGENY: Basil.
41 D BASIL: Put it back in the bag. Pull the string. Slide the bag back on the shelf. Close the door.
42 D YEVGENY: We said sixty-forty.
43 D BASIL: We did.
44 D YEVGENY: You said you were retiring.
45 D BASIL: I am. Tonight.
46 A ¶ Yevgeny draws the string slowly.
47 A Laying the bag in the safe, his hand lingers.
48 A Frost creeps up his sleeve.
49 D YEVGENY: How long have you known?
50 D BASIL: He told me what you'd come for. Before he died. He asked me to stand here.
51 A ¶ Yevgeny closes the safe door.
52 A The sound is small and final.
53 A He sits back on his heels, hands visible on his knees.
54 D YEVGENY: He said that?
55 D BASIL: He said, my boy will want to be a thief. Be there when he does.
56 A ¶ A long silence.
57 A The compressors hum.
58 A ¶ Basil lowers the pistol.
59 A Sets it on the nearest rack, next to the polar bear.
60 A Unscrews the thermos.
61 A Pours another cap of tea.
62 A ¶ He holds it out.
63 A This time Yevgeny takes it.
64 T FADE OUT.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01206.json
### SCENE s01206 | EXT. FERRIS WHEEL - TOP CABIN - NIGHT
Detected names (may be incomplete or contain aliases): FENELLA, RAUL, ABIOLA, NOLAN
1 A ¶ The wheel has stopped at its peak.
2 A The city glitters below.
3 A Wind rocks the cabin.
4 A A duffel bag lies open on the bench.
5 A ¶ FENELLA (30s, black turtleneck) is hunched over a thermal drill.
6 A RAUL (40s, sunglasses even now) peers out of the window, scanning the ground.
7 A ABIOLA (20s, headset) mutters coordinates into a radio.
8 A NOLAN (50s, ex-operator's jacket) sits slumped with his feet on the duffel.
9 A ¶ She jabs the drill at the floor.
10 A He jerks the curtain.
11 A She curses.
12 A He snaps his fingers.
13 D FENELLA: Hold it still.
14 D RAUL: I'm holding.
15 D ABIOLA: Wind's rising. Four knots.
16 D NOLAN: We said sixty seconds.
17 D FENELLA: We said sixty seconds yesterday.
18 D RAUL: We said sixty seconds before you spilled the thermite.
19 D ABIOLA: Everyone, quiet. Security's on the midway.
20 A ¶ They freeze.
21 A Beneath them the wheel creaks.
22 A She taps her earpiece.
23 A He holds his breath.
24 A They all lean toward the window as a flashlight beam sweeps the base of the wheel.
25 D NOLAN (whisper): Don't breathe.
26 D FENELLA (whisper): Then who's talking?
27 D RAUL (whisper): You are.
28 A ¶ The beam passes.
29 A The wheel jolts.
30 A The cabin begins, very slowly, to descend.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00909.json
### SCENE s00909 | EXT. MONASTERY ORCHARD - TRENCH LINE - EVENING
Detected names (may be incomplete or contain aliases): HENRI DUBOIS, ALBERT QUIGLEY, SANTIAGO MORALES, JOSEPH WHITEFEATHER
1 A ¶ A line of earth cut through rows of apple trees, their blossoms falling like a slow snow into the mud.
2 A Beyond the wall, the white stones of a ruined abbey.
3 A The sky is the colour of old pewter.
4 A Everything is hushed, as though the war has paused to breathe.
5 A ¶ LT. HENRI DUBOIS, 30s, sits on an upturned crate at the lip of the trench, a bandage around his left hand, scribbling in a notebook.
6 A Thin as a rake, with a poet's brow and a smoker's cough.
7 A ¶ SGT. ALBERT QUIGLEY, 50s, a barrel-chested veteran with a drooping moustache, squats beside a battered kettle over a spirit stove.
8 A He fusses with the tea, humming under his breath.
9 A ¶ PVT.
10 A SANTIAGO MORALES, 20, round-faced, sits on the firing step with a harmonica he does not play.
11 A He turns it over and over in his hands.
12 A ¶ CPL.
13 A JOSEPH WHITEFEATHER, 30s, tall, quiet, leans against the trench wall cleaning a rifle with a rag, eyes half-closed, a long braid down his back.
14 D QUIGLEY: Tea's nearly ready.
15 D DUBOIS: Lovely.
16 D QUIGLEY: It's terrible tea.
17 D DUBOIS: Then it's British.
18 D QUIGLEY (chuckling): I'm from Leeds, sir. It's worse than British.
19 A ¶ Morales lifts the harmonica to his lips, hesitates, lowers it.
20 A Whitefeather glances over without comment, then returns to the rifle.
21 A A petal drifts into the kettle.
22 A Quigley fishes it out with a finger.
23 D MORALES: Sergeant, is it true what they say about the orchard?
24 D QUIGLEY: What do they say?
25 D MORALES: That the monks planted these trees four hundred years ago.
26 D QUIGLEY: Five hundred.
27 D DUBOIS: Closer to six, I believe. The brothers kept records.
28 D MORALES: Records of what?
29 D DUBOIS: Of every harvest. Every frost. Every war that passed through.
30 D WHITEFEATHER (quietly): Did they write about us?
31 D DUBOIS: Not yet.
32 A ¶ A rumble far off, then silence again.
33 A The four men listen.
34 A A single blackbird begins to sing from the abbey wall, and Morales finally plays three soft notes on the harmonica before dropping his hand, embarrassed, while Quigley pours the tea into dented tin mugs, hands one to Dubois, one to Whitefeather, one to Morales, and settles back on his heels with the last mug warming his palms, all of them listening to the bird as the light goes slowly copper over the blossoming wall.
35 D QUIGLEY: Funny thing.
36 D DUBOIS: Mm?
37 D QUIGLEY: I've never heard a bird sing in a war before.
38 D WHITEFEATHER: They only sing when it's over.
39 D QUIGLEY: It's not over.
40 D WHITEFEATHER: No.
41 A ¶ The blackbird sings on.
42 A Dubois closes his notebook and lifts his mug in a small salute to the trees.
