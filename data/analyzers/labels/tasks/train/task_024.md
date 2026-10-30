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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00493.json
### SCENE s00493 | INT. APIARY CONVENTION - HONEY TASTING TENT - DAY
Detected names (may be incomplete or contain aliases): DETECTIVE INSPECTOR INGRID LARK, HORTENSE ABERNATHY, MAN IN VEIL, BEEKEEPER'S VEIL, KONSTANTIN GRIGORIEV, CLERK, PACO, LEMUS, ISOLDE VANCE
1 A ¶ White canvas.
2 A Folding tables laid with jars of every color from straw to tar.
3 A Hundreds of beekeepers murmur.
4 A A glass observation hive hums beside the podium.
5 A ¶ DETECTIVE INSPECTOR INGRID LARK (40s, plain suit, notebook) walks the aisle.
6 A She stops at a stall where HORTENSE ABERNATHY (60s, honey sommelier, white gloves) arranges jars.
7 D LARK: Mrs. Abernathy. About Alistair Penhallow.
8 D HORTENSE: Terrible business.
9 D LARK: He died at this table.
10 D HORTENSE: He tasted the buckwheat and went blue.
11 D LARK: You handed him the spoon.
12 D HORTENSE: I handed everyone a spoon.
13 A ¶ A MAN IN A BEEKEEPER'S VEIL (50s, tall, gloves) drifts behind Hortense, studying the observation hive.
14 A Lark glances at him.
15 D LARK: Sir. Your name?
16 D MAN IN VEIL: Ask the queen.
17 D LARK: I'll ask you.
18 A ¶ The man lifts his veil.
19 A He is KONSTANTIN GRIGORIEV (50s, weathered, one blue eye, one brown).
20 D KONSTANTIN: Grigoriev. I sold Alistair his bees.
21 D LARK: Then you know what killed him.
22 D KONSTANTIN: Oleander nectar. A swarm that fed on it by the river.
23 D HORTENSE (sharp): That's impossible. Those hives were mine.
24 D KONSTANTIN: Were they?
25 A ¶ A CLERK, FRANCISCO "PACO" LEMUS (20s, convention lanyard), hurries in carrying a ledger.
26 D PACO: Inspector! The registry. Hive twelve was transferred last Thursday.
27 D LARK: To whom?
28 D PACO (quietly): Mrs. Abernathy.
29 A ¶ Hortense sets down a jar.
30 A The room does not go silent, but the nearest ring of beekeepers does.
31 A She peels off her glove, finger by finger.
32 D HORTENSE: Alistair planned to expose me. The adulterated honey. The syrup.
33 D LARK: So you poisoned him.
34 D HORTENSE: So I fed him his own greed.
35 A ¶ DR. ISOLDE VANCE (30s, lab coat under a rain jacket, evidence bag in hand) pushes through the crowd and holds up the bag.
36 A A single dead bee lies inside.
37 D ISOLDE: Oleander residue. Confirmed. In the spoon.
38 A ¶ Lark closes her notebook.
39 A Behind them, the observation hive hums louder, and something in the glass catches the light: the queen, laying, indifferent.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01854.json
### SCENE s01854 | INT. COURTHOUSE CONFERENCE ROOM - DAY
Detected names (may be incomplete or contain aliases): DEFENSE ATTORNEY LEONOR ASTURIAS, PROSECUTOR, DESMOND TULLY, DEPUTY OWEN PRATT, ^OWEN
1 A ¶ A windowless room.
2 A A long table scarred by decades of folders.
3 A A water pitcher beading with sweat.
4 A Fluorescent light hums like a distant insect.
5 A ¶ DEFENSE ATTORNEY LEONOR ASTURIAS, 40s, charcoal suit, reading glasses pushed into her hair, shuffles exhibits into a neat pile.
6 A Across from her, a PROSECUTOR, 30s, crisp, a pen behind his ear, taps a laptop.
7 A Between them, at the end of the table, sits their client MR. DESMOND TULLY, 50s, in an ill-fitting suit that smells of mothballs, hands clasped.
8 A ¶ The prosecutor, DEPUTY DA OWEN PRATT, looks at the clock.
9 D OWEN: We have ten minutes before the judge.
10 D LEONOR: We have as long as it takes.
11 D DESMOND: Can I say something?
12 D LEONOR (simultaneously): No.
13 D ^OWEN (simultaneously): Please.
14 A ¶ They look at each other.
15 A Desmond looks at both.
16 D DESMOND: I was going to say I'd like some water.
17 A ¶ Leonor pours.
18 A Her hand is steady.
19 A Owen's pen is not.
20 D OWEN: Ms. Asturias. The offer is five years.
21 D LEONOR: My client doesn't accept.
22 D OWEN: It's a fair number.
23 D LEONOR: It's a number.
24 D DESMOND: Ten minutes, he said?
25 D OWEN: Nine.
26 D LEONOR: Mr. Pratt, I'd like a word with my client.
27 D OWEN: Of course.
28 A ¶ He doesn't move.
29 A She does not either.
30 A The pitcher drips.
31 A Desmond sips from the paper cup, studies the rim, and sets it down very carefully.
32 D DESMOND: I didn't do it.
33 D LEONOR (quietly): We know.
34 D OWEN (also quietly): The evidence says otherwise.
35 D DESMOND: Then the evidence is wrong.
36 D OWEN: It's a very strong file, Mr. Tully.
37 D DESMOND: My wife says you can make a file say anything.
38 D OWEN (a flicker of something): Your wife testified.
39 D DESMOND: She said what she saw.
40 D LEONOR: She said what she believed.
41 D OWEN: That's the same thing in a courtroom.
42 A ¶ Leonor pulls a single sheet from the middle of her pile and slides it across the table.
43 A Owen reads it.
44 A The pen stops tapping.
45 A His color changes by degrees.
46 D OWEN [CONT'D]: Where did you get this?
47 D LEONOR: It was in your discovery.
48 D OWEN: It wasn't.
49 D LEONOR: Page four hundred and twelve.
50 D OWEN: That's not possible.
51 D DESMOND (to no one): Is it good?
52 D LEONOR: Mr. Tully, it's very good.
53 A ¶ Owen reaches for his laptop.
54 A His fingers hover over the keys.
55 A Outside, a bailiff's voice calls a case number, and a door slams.
56 D OWEN: Give me a minute.
57 D LEONOR: Take nine.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02415.json
### SCENE s02415 | INT. STATION WAGON - HIGHWAY - DAY
Detected names (may be incomplete or contain aliases): MATEUS FERRARI-OKONJO, ILSE, TEODORA, BLAISE, NANDI
1 A ¶ Windows down.
2 A Wind roars.
3 A A cooler wedged between two kids in the back seat.
4 A ¶ MATEUS FERRARI-OKONJO, forties, drives with one hand.
5 A His wife ILSE, forties, navigates with a paper map.
6 A In the back, TEODORA, fourteen, scowls at her phone; BLAISE, eleven, kicks the seat; and baby NANDI, one, gums a rubber giraffe.
7 D BLAISE: Are we there yet?
8 D MATEUS: No.
9 D ILSE: It's another forty minutes.
10 D BLAISE: You said that an hour ago.
11 D TEODORA: Stop kicking.
12 A ¶ He kicks harder.
13 A She slaps his knee.
14 A He yelps.
15 A The baby shrieks.
16 A Mateus turns the radio up.
17 D ILSE: Turn that down.
18 D MATEUS: It's the good part.
19 D ILSE: It's the same part it's always been.
20 D TEODORA: Dad, he's kicking me.
21 D MATEUS: Blaise.
22 D BLAISE: She started it.
23 D ILSE: Mateus, the exit.
24 A ¶ He swerves.
25 A Brakes squeal.
26 A The cooler thumps.
27 A Nandi howls.
28 A A truck blasts its horn.
29 D MATEUS: Sorry. Sorry.
30 D ILSE: You missed it.
31 D MATEUS: I did not.
32 D ILSE: You did.
33 D TEODORA (to Blaise, low): I'm telling Mom you broke the cooler.
34 D BLAISE: I did not!
35 A ¶ The giraffe flies across the car and hits the windshield.
36 A Silence.
37 A The baby laughs.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02214.json
### SCENE s02214 | INT. LOCKED PENTHOUSE OFFICE - NIGHT
Detected names (may be incomplete or contain aliases): KENNETH ADLER-MOSS, NADINE CRUZ, VOICE
1 A ¶ Glass walls over a rain-slick city.
2 A A desk the size of a pool table.
3 A A bank of five monitors, three dark.
4 A On the carpet, a spilled glass of scotch and a pair of reading glasses, one lens cracked.
5 A ¶ KENNETH ADLER-MOSS (60s, tycoon, silk shirt open at the throat) sits behind the desk with a phone gripped in both hands.
6 A Sweat beads at his hairline.
7 A A pistol lies on the blotter, six inches from his right hand.
8 A He has not touched it.
9 A ¶ Across the desk, in the visitor's chair, a woman.
10 A NADINE CRUZ (30s, black coat, patient eyes) rests her chin on folded hands.
11 A She hasn't spoken in minutes.
12 A ¶ A speakerphone on the desk crackles.
13 D VOICE [V.O.]: Mr. Adler-Moss? Mr. Adler-Moss, it's the front desk. We have police in the lobby.
14 D ADLER-MOSS: Tell them. Tell them to come up.
15 D VOICE [V.O.]: Sir, the elevator is out. They'll take the stairs.
16 D ADLER-MOSS: How many floors?
17 D VOICE [V.O.]: Forty-one, sir.
18 D ADLER-MOSS: Forty-one. Christ.
19 A ¶ Nadine unfolds her hands.
20 A Adler-Moss flinches.
21 A She reaches into her coat, slowly, and pulls out a folded sheet of paper.
22 A She slides it across the desk.
23 A He doesn't take it.
24 D NADINE: Read it.
25 D ADLER-MOSS: What is it?
26 D NADINE: Your signature.
27 D ADLER-MOSS: I don't sign things I haven't read.
28 D NADINE: You signed this one.
29 A ¶ He picks it up with two fingers.
30 A Reads.
31 A His colour drains.
32 A He reads it again.
33 D ADLER-MOSS: This is forged.
34 D NADINE: It's notarised.
35 D ADLER-MOSS: By whom?
36 D NADINE: By a man who's very sorry.
37 A ¶ The speakerphone crackles.
38 A The lobby voice is shaking now.
39 D VOICE [V.O.]: Sir? Sir, are you there?
40 D NADINE (to the phone, calm): He's here.
41 D VOICE [V.O.]: Who is that?
42 D NADINE: The reason you won't need the police.
43 A ¶ She lifts her hand, finger hovering over the disconnect key.
44 A Adler-Moss lunges for the pistol.
45 A Nadine slams the button.
46 A Static.
47 A The line goes dead.
48 A ¶ The pistol is in his hand, shaking.
49 A She doesn't move.
50 D ADLER-MOSS: I'll shoot.
51 D NADINE: You won't.
52 D ADLER-MOSS: I will.
53 D NADINE: You can't. It isn't loaded.
54 A ¶ He stares at the gun.
55 A Checks the chamber.
56 A Empty.
57 A Checks the magazine.
58 A Empty.
59 D NADINE [CONT'D]: I took them out at seven.
60 D ADLER-MOSS: You were here at seven?
61 D NADINE: I've been here since lunch.
62 A ¶ Below them, very faintly, boots on concrete.
63 A A distant door slamming.
64 A Voices.
65 A Coming up.
66 A ¶ Nadine stands, buttons her coat, and for the first time smiles.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01176.json
### SCENE s01176 | INT. GENERATION SHIP - HYDROPONIC GREENHOUSE - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): CAPTAIN HELEN ADEBAYO-STONE, MIKLOS VARGA, ENSIGN PIA LINDGREN
1 A ¶ Rows of silver-leafed plants glow beneath violet lamps.
2 A Condensation drips from the ceiling ribs.
3 A A warning light pulses amber over the far hatch.
4 A ¶ CAPTAIN HELEN ADEBAYO-STONE (50s, grey braid, quartermaster's coat) strides between the rows with a handheld scanner.
5 A DR. MIKLOS VARGA (60s, bowtie, stooped) trails her carrying a sample tray.
6 A ENSIGN PIA LINDGREN (20s, new uniform, calm eyes) walks backward ahead of them, watching the hatch.
7 D HELEN: Report, Ensign.
8 D PIA: Nothing on the other side, Captain. Not heat, not sound.
9 D VARGA: That's precisely what worries me.
10 D HELEN: Doctor, you're worried by cloud cover.
11 D VARGA: Captain, the plants have stopped turning toward the lamps.
12 A ¶ Helen halts.
13 A She sweeps the scanner across the nearest row.
14 A Every leaf, in the violet light, is bent the same way.
15 A Toward the hatch.
16 D PIA: Captain?
17 D HELEN: Back away, slowly.
18 A ¶ The amber light goes red.
19 A The hatch hisses.
20 A A thin line of white mist spills across the floor and curls up the base of the trays.
21 A Varga drops his sample tray; glass bursts.
22 A Pia grabs Helen's arm and Helen grabs Varga's collar, and the three of them stumble backward together as the nearest plants lean, in unison, to follow them.
23 D VARGA (whisper): They're listening.
24 D HELEN: Then stop talking.
25 A ¶ The three of them freeze.
26 A The leaves freeze too.
27 A For a long moment the only sound is the dripping.
28 A Then Pia reaches to her belt and, with infinite care, switches off her comm badge.
29 A The mist halts.
30 A The hatch seals itself shut with a soft click.
31 A The plants slowly straighten toward the lamps.
32 D PIA (barely audible): Captain, I think it wanted the badge.
33 D HELEN: I think it wanted us.
34 A ¶ She lowers the scanner.

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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02025.json
### SCENE s02025 | INT. TAXIDERMY MUSEUM - BACK GALLERY - NIGHT
Detected names (may be incomplete or contain aliases): CASSIUS BELL, WREN ODUYA, LAZARO PRIETO, MAI LINH TRAN, DOT, KESSLER, RUFUS ALDER
1 A ¶ Glass cases.
2 A A stuffed polar bear mid-roar.
3 A Six figures in dark clothes crouch behind a display of Arctic foxes.
4 A ¶ CASSIUS BELL (50s, mastermind, reading glasses on a chain) taps a tablet.
5 A WREN ODUYA (20s, climber, harness).
6 A LAZARO PRIETO (30s, safecracker, toolroll).
7 A MAI LINH TRAN (30s, hacker, headset).
8 A DOROTHEA "DOT" KESSLER (60s, retired guard, inside woman).
9 A RUFUS ALDER (40s, muscle, silent).
10 D CASSIUS: Camera eleven loops in ten seconds.
11 D MAI LINH: Eight. Eight, Cassius, I said eight.
12 D DOT: He walks the corridor at twelve forty. Always.
13 D LAZARO: It's twelve thirty-eight.
14 D WREN: Rope is set. I go on your mark.
15 D CASSIUS: Wait for--
16 D DOT: Footsteps.
17 A ¶ Everyone freezes.
18 A Rufus raises one huge hand, palm flat.
19 D MAI LINH: That's not him, that's the heating.
20 D DOT: It's him.
21 D LAZARO: It's the heating!
22 D WREN: Tell me which, I'm hanging out here!
23 D CASSIUS: Dot. Which?
24 D DOT (whispering): Twelve forty. It's him.
25 A ¶ A flashlight beam sweeps across the foxes.
26 A Rufus slowly, silently, pulls the bear's display curtain across them all.
27 A Darkness.
28 A ¶ The footsteps stop.
29 A A long beat.
30 A Then a cough, and they move on.
31 D MAI LINH (exhaling): Looping now.
32 D CASSIUS: Wren, go.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01298.json
### SCENE s01298 | INT. ROLLER DERBY LOCKER ROOM - NIGHT
Detected names (may be incomplete or contain aliases): BERNIE, OYELOWO, SUNNIVA HOLM, TILLY BRANDT, TANK, DELACROIX, RAJANI PILLAI, DIEDRE KOWALCZYK
1 A ¶ Concrete floor.
2 A Steel lockers, dented.
3 A Fluorescent flicker.
4 A A hundred pairs of skates on hooks.
5 A The scoreboard through the wall reads 142-38.
6 A ¶ COACH BERNADETTE "BERNIE" OYELOWO, 50s, in a tracksuit and whistle, stands in the centre with a dry-erase marker.
7 A Her jaw is clamped.
8 A ¶ SUNNIVA HOLM, 20s, jammer, the team's star, sits on a bench with her helmet in her lap.
9 A Her lip is split.
10 A ¶ TILLY BRANDT, 20s, blocker, ponytail, holds an ice pack to her wrist.
11 A ¶ MARGOT "TANK" DELACROIX, 30s, enormous, sits on the floor tying a skate.
12 A ¶ RAJANI PILLAI, 20s, rookie, stands against the wall, wide-eyed.
13 A ¶ DIEDRE KOWALCZYK, 30s, captain, rubs her knuckles raw with a towel.
14 D BERNIE: Final period. One hundred and four points down.
15 D SUNNIVA: I know.
16 D BERNIE: I didn't ask if you knew.
17 D TANK: Coach, with respect, we're being killed.
18 D BERNIE: Then die loud.
19 D DIEDRE: We can't win.
20 D BERNIE: You can't win. You can lose with dignity.
21 D TILLY: That doesn't sound like a pep talk.
22 D BERNIE: It isn't. It's the truth.
23 D RAJANI (small voice): Can I say something?
24 D BERNIE: Please.
25 D RAJANI: This is the best night of my life.
26 A ¶ Silence.
27 A The lockers hum.
28 D TANK: She's serious.
29 D RAJANI: I've watched you play since I was twelve. Now I'm in the locker room. We're losing a hundred and four to thirty-eight, and I'm so happy I could throw up.
30 D SUNNIVA (laughing): Rookie.
31 D DIEDRE: Welcome to the team.
32 A ¶ Tilly tosses her ice pack across the room.
33 A Tank catches it, flings it back.
34 A Sunniva swats it out of the air, knocks Rajani's helmet off her head.
35 A Rajani lunges for it; Diedre grabs the helmet, stuffs it on Tank's head.
36 A They collapse into a wrestling pile of limbs and laughter.
37 A Bernie lets them for a full five seconds.
38 A Then she blows her whistle.
39 D BERNIE: Go skate.
40 A ¶ They file out.
41 A Bernie caps the marker.
42 A Waits until the room is empty.
43 D BERNIE [CONT'D] (to herself): Dignity.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02337.json
### SCENE s02337 | INT. HOTEL BALLROOM - ARBITRATION - DAY
Detected names (may be incomplete or contain aliases): ARBITRATOR HENRIETTA BOSCO, CLAIMANT DARNELL FITZGIBBON, LUCINDA TAN-ROSSI, RESPONDENT GUSTAV HALVERSEN, AMBROSE KELLEHER, BRIGITTE
1 A ¶ A rented ballroom.
2 A Chandeliers, stacking chairs, a banquet table draped in white.
3 A Through the folding partition, wedding music thumps: a bass line, a cheering crowd.
4 A ¶ ARBITRATOR HENRIETTA BOSCO, 60s, sits at the head of the table with a legal pad and a stopwatch.
5 A She wears reading glasses on a chain and an expression of hard-won patience.
6 A ¶ To her left: CLAIMANT DARNELL FITZGIBBON, 40s, in a suit that doesn't quite close, and his attorney, LUCINDA TAN-ROSSI, 30s, with a color-coded binder.
7 A ¶ To her right: RESPONDENT GUSTAV HALVERSEN, 60s, silver beard, folded hands, and his attorney, AMBROSE KELLEHER, 50s, with a fountain pen he clicks constantly.
8 A ¶ A paralegal, BRIGITTE, 20s, sits at the end with a laptop and a timer.
9 A ¶ The wedding bass drops.
10 A Everyone flinches.
11 D BOSCO: Mr. Keller... Kelleher. Your opening.
12 D KELLEHER: Thank you, Arbitrator. My client, Mr. Halversen, has operated this ballroom for twenty years.
13 D LUCINDA: And has never once fixed the ceiling.
14 D KELLEHER: I was not finished.
15 D BOSCO: Ms. Tan-Rossi, wait your turn.
16 D LUCINDA: Apologies, Arbitrator. I was moved.
17 A ¶ She grins.
18 A Darnell elbows her.
19 A Halversen studies the chandelier above them.
20 A A crystal quivers with the bass.
21 D KELLEHER: The roof has been inspected annually.
22 D DARNELL: It fell on my cousin's wedding cake.
23 D HALVERSEN (quietly): It was a small piece of ceiling.
24 D DARNELL: It was the size of a hubcap!
25 D BOSCO: Mr. Fitzgibbon, you will address counsel, not the respondent.
26 D DARNELL: Sorry, Arbitrator.
27 A ¶ She lowers her glasses.
28 A He sinks into his seat.
29 A Brigitte whispers to Lucinda, who nods, flips three tabs, and slides a photograph across the table.
30 D LUCINDA: Exhibit Nine. The cake, post-impact.
31 A ¶ Bosco picks up the photograph.
32 A She studies it for a long moment.
33 A Something almost like a smile crosses her face and is quickly put away.
34 D BOSCO: Mr. Halversen, did you replace the cake?
35 D HALVERSEN: Madame, I replaced the ceiling.
36 D BOSCO: That wasn't my question.
37 A ¶ Halversen unfolds his hands.
38 A Refolds them.
39 A Kelleher stops clicking his pen.
40 A A cheer rises from the wedding.
41 A A woman's voice over a microphone: "And now, the first dance!"
42 A ¶ Everyone at the table turns toward the partition.
43 A The music slows to something soft.
44 D BOSCO [CONT'D] (to the room): We will take ten minutes.
45 A ¶ She stands.
46 A The others stand.
47 A Darnell, Halversen, the lawyers, all of them drift toward the divider, and no one says why.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00853.json
### SCENE s00853 | INT. SMALL CLAIMS COURT, STRIKE ZONE LANES ANNEX - DAY
Detected names (may be incomplete or contain aliases): JUDGE FAIRCLOTH, ELSPETH MORROW, ABERNATHY
1 A ¶ A bowling alley, daytime.
2 A A folding table stands at the end of lane four.
3 A The pins are still set.
4 A A hand-lettered sign: "COURT IN SESSION.
5 A NO SHOES, NO SERVICE."
6 A ¶ JUDGE FAIRCLOTH, sixties, in a black robe over a bowling shirt, sits on a high stool.
7 A ELSPETH MORROW, forties, the plaintiff, stands with a binder.
8 A MR. ABERNATHY, seventies, the defendant, sits in a plastic chair clutching a trophy.
9 D FAIRCLOTH: Ms. Morrow, you allege Mr. Abernathy broke your window with a bowling ball.
10 D ELSPETH: I allege it, Your Honor. Lane six, left-hand hook, two a.m.
11 D ABERNATHY: It wasn't two. It was one-forty.
12 D FAIRCLOTH: Mr. Abernathy, you'll have your turn.
13 D ABERNATHY (muttering): One-forty. I wrote it down.
14 D ELSPETH: The ball came through my bathroom window, Your Honor.
15 D FAIRCLOTH: From the alley?
16 D ELSPETH: From the parking lot. He was bowling in the parking lot.
17 A ¶ Abernathy grips the trophy.
18 A Faircloth leans down from the stool and gestures with his gavel to the empty lanes beyond, as if the gallery were full.
19 D FAIRCLOTH (to the room): Let the record show we have no jury, no clerk, and no coffee.
20 A ¶ He taps the gavel.
21 A It bounces off the table and rolls under lane four.
