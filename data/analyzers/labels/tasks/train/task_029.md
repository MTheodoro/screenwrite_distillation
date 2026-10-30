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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01208.json
### SCENE s01208 | INT. TEA HOUSE - 1893 - AFTERNOON
Detected names (may be incomplete or contain aliases): LADY BEATRIX HALLORAN-SATO, MISS PHILIPPA ROOK, EMERIC CAULFIELD, TAKEO, OTOMO
1 A ¶ Lacquered screens, a low table, steam curling from a cast-iron kettle.
2 A Rain taps the paper windows.
3 A ¶ LADY BEATRIX HALLORAN-SATO (40s, silk kimono over a Western corset) pours tea with deliberate grace.
4 A Across from her, MISS PHILIPPA ROOK (30s, travelling suit, gloves in her lap) watches the cups.
5 A Beside her, DR. EMERIC CAULFIELD (50s, wing collar) turns his spoon.
6 A Two servants kneel by the door: TAKEO (20s, precise) and OTOMO (20s, hands folded).
7 A ¶ She pours Miss Rook's cup last.
8 A Miss Rook accepts it.
9 A Neither speaks.
10 D DR. CAULFIELD: A fine blend.
11 D LADY BEATRIX: My late husband's.
12 A ¶ Miss Rook lifts the cup.
13 A Lady Beatrix watches her lips touch the rim.
14 A Takeo's eyes dart to Otomo.
15 A Otomo's hands tighten.
16 D MISS ROOK: It has a faint bitterness.
17 D LADY BEATRIX: So does his memory.
18 A ¶ Miss Rook sets the cup down.
19 A She smooths her gloves.
20 A Dr. Caulfield sips and sets his cup to one side.
21 D DR. CAULFIELD: I'm sure it is nothing.
22 A ¶ Miss Rook rises.
23 A She crosses to the window and slides it open an inch.
24 A Rain mists her face.
25 A Lady Beatrix does not turn, but her shoulders loosen by a fraction.
26 A The kettle sings.
27 A Otomo bows low and does not rise.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01501.json
### SCENE s01501 | INT. REGIONAL AIRPORT BAGGAGE CLAIM - NIGHT
Detected names (may be incomplete or contain aliases): THADDEUS BRANSON-OYELARAN, GIGI, PETRAKIS-NWOSU, ^GIGI
1 A ¶ A dead carousel.
2 A One flickering fluorescent tube.
3 A A vending machine humming a note a half-step flat.
4 A Rain thrashes the empty glass hall.
5 A The last flight in was four hours ago.
6 A ¶ THADDEUS BRANSON-OYELARAN (50s, an immaculate overcoat, the posture of a man who has complained to managers before) stands with arms crossed beside a single battered suitcase.
7 A It is not his.
8 A He has decided it is his.
9 A ¶ GREGORIA "GIGI" PETRAKIS-NWOSU (50s, a blazer the color of canned peaches, a rolling cart of lost luggage) pushes through a swing door, whistling, and stops.
10 A She sees him.
11 A He sees her.
12 D GIGI: Sir, the airport is closed.
13 D THADDEUS: I'm aware.
14 D GIGI: Then why are you in it?
15 D THADDEUS: Because my bag is in it.
16 D GIGI: This is a lost-and-found area. Your bag is lost.
17 D THADDEUS: My bag is right here.
18 D GIGI: That's not your bag.
19 D THADDEUS: It's the bag I was given.
20 D GIGI: By whom?
21 D THADDEUS: By the carousel.
22 A ¶ Gigi studies the dead carousel.
23 A It doesn't move.
24 A She studies the suitcase.
25 A It's the color of mud, with a duct-taped corner.
26 D GIGI: Sir, that bag has been here since Tuesday.
27 D THADDEUS: Then it's been waiting for me.
28 D GIGI: It's tagged to a Mr. Hassan Abdi-Lindgren, Gate Nine.
29 D THADDEUS: I'm a Hassan in spirit.
30 D GIGI: Are you?
31 D THADDEUS (a long pause): No.
32 A ¶ She crosses her arms.
33 A He does not uncross his.
34 A They stand in a faint electrical hum, two statues who each know the other won't blink.
35 D GIGI (to herself): Lord, give me strength.
36 D THADDEUS (to himself): Lord, give me my bag.
37 A ¶ Gigi pulls a clipboard from the cart.
38 A Writes.
39 A Rips off a form.
40 A Holds it out.
41 D GIGI: Fill out Form 31-B.
42 D THADDEUS: Of what?
43 D GIGI: Of your grievance.
44 A ¶ He takes the form.
45 A Reads it.
46 A Looks up.
47 D THADDEUS: It's in triplicate.
48 D GIGI: We're a serious airport.
49 D THADDEUS: You have one gate.
50 D GIGI: It's a serious gate.
51 A ¶ She snaps her fingers.
52 A A pen sails out of her pocket and lands in his hand.
53 A He stares at it.
54 A It's a ballpoint chained to a small rubber frog.
55 D THADDEUS: What is this?
56 D GIGI: Our pen.
57 D THADDEUS: It's a frog.
58 D GIGI: It's a frog pen. It's how we know you're honest.
59 A ¶ Thaddeus clicks it.
60 A Starts writing.
61 A The frog dangles.
62 A Gigi leans over, reading upside down.
63 D GIGI [CONT'D]: That's not a grievance. That's a poem.
64 D THADDEUS: It's a long grievance.
65 D GIGI (reading): "Oh, suitcase, thou art mud."
66 D THADDEUS: Stop reading.
67 D GIGI: "Oh, suitcase, thou art lost, yet found, yet mine."
68 D THADDEUS: It's not for you!
69 D GIGI: It's on my form!
70 A ¶ Thaddeus tears the form in half.
71 A Gigi gasps.
72 A She snatches the halves and tries to fit them together.
73 D THADDEUS: GIGI You can't do that!
74 D ^GIGI: You can't do that!
75 A ¶ They stop.
76 A A beat.
77 A The vending machine hums.
78 D THADDEUS (to the empty hall): Is there anyone else?
79 D GIGI (to the empty hall): No.
80 D THADDEUS (to Gigi): Why are you here?
81 D GIGI: Because someone has to be.
82 D THADDEUS: For a suitcase?
83 D GIGI: For anyone's suitcase.
84 A ¶ A long silence.
85 A He looks at the bag.
86 A She looks at the torn form.
87 A The fluorescent tube buzzes, dims, and recovers.
88 D THADDEUS: It isn't mine.
89 D GIGI: I know.
90 D THADDEUS: Mine had a yellow ribbon.
91 D GIGI: I know. It's in the back. It came in Tuesday. I was just waiting to see who would show up for the wrong one first.
92 D THADDEUS: That's cruel.
93 D GIGI: That's customer service.
94 A ¶ She rolls her cart to the swing door.
95 A Holds it open with her hip.
96 A He stands for a moment.
97 A Then he picks up the muddy suitcase, hugs it once, sets it down gently, and follows her out.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01167.json
### SCENE s01167 | INT. UNDERGROUND PARKING GARAGE - SPEED CLIMBING WALL - NIGHT
Detected names (may be incomplete or contain aliases): SOLENE DUBOIS
1 A ¶ A concrete bunker converted to a training gym.
2 A Fluorescent tubes.
3 A Rubber matting.
4 A A forty-foot climbing wall bristling with colored holds, chalk dust drifting like smoke.
5 A A battered boombox sits on a plastic crate, cassette tape turning.
6 A ¶ SOLENE DUBOIS (20s, tank top, taped fingers, chalk bag on her hip) stands at the base of the wall.
7 A She rolls her neck, shakes out her arms, then bends and kisses the knuckles of each hand.
8 A ¶ A stopwatch hangs from her wrist.
9 A Beside the wall a laminated sign reads: RECORD 5.48.
10 A ¶ She presses START on the stopwatch and slaps the first hold.
11 A She climbs.
12 A Her body flows up the wall, forearms flexing, toes smearing on the foot chips, her left hand swatting a hold while her right hand already reaches for the next.
13 A Chalk bursts off her fingers.
14 A She doesn't breathe.
15 A She doesn't look down.
16 A ¶ At the midpoint, she swings her weight out, catches a sloper with her fingertips, and one of her feet slips.
17 A She hangs by one hand for a half-second, her whole body swinging out over the mat, and then her foot finds the chip again and she surges upward, past the crux, past the red hold, past the yellow, and slaps the top button.
18 A The timer chirps.
19 A ¶ She drops.
20 A Lands in a crouch on the mat.
21 A Looks at the watch.
22 D SOLENE (reading): Five-fifty-one.
23 A ¶ She sits down hard on the mat, breath ragged, forehead against her knees.
24 A The boombox cassette clicks and flips to the B side.
25 A A man's voice, warm, gravelly, slightly distorted, starts up from the speakers.
26 A A recording.
27 D SOLENE [V.O.] (recording, her own voice, younger): Solene, it's you. I know you're going to listen to this at two in the morning because you never sleep before a final. I want you to remember the third hold from the top. You always rush it. Breathe there. One breath. The wall will wait for you.
28 A ¶ Solene lifts her head.
29 A She looks at the boombox, then up at the wall.
30 D SOLENE [V.O., CONT'D] (recording): And remember. You are not climbing against the clock. You are climbing against yesterday's Solene. She was good. Be better.
31 A ¶ The tape clicks off.
32 A Silence.
33 A Solene wipes her eyes with a chalky wrist, leaving a white streak across her cheek.
34 A She stands.
35 A Shakes out her hands.
36 A Chalks up.
37 A Walks back to the wall.
38 D SOLENE (muttering): One breath.
39 A ¶ She presses START.
40 A She slaps the first hold.
41 A She climbs.
42 A The timer ticks.
43 A She reaches the midpoint, reaches the sloper, and this time doesn't slip.
44 A At the third hold from the top, she pauses.
45 A One breath.
46 A In.
47 A Out.
48 A Then she surges up and slaps the button.
49 A ¶ She drops.
50 A Looks at the watch.
51 D SOLENE [CONT'D]: Five forty-seven.
52 A ¶ Her mouth cracks into a grin.
53 A She pumps one fist in the empty air, then another.
54 A She turns to the boombox and lifts it from the crate, clutching it against her chest as the tape spools slowly backward.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01375_1.json
### SCENE s01375_1 | EXT. MARLOW STREET - NIGHT
Detected names (may be incomplete or contain aliases): 
1 A ¶ Dark.
2 A Eleven dead lamps in a long row.
3 A ¶ Cornelius lifts the pole to the first one.
4 A A click.
5 A A flare.
6 A A pool of gold on wet cobble.
7 A ¶ He moves to the next.
8 A Tobias walks a step behind, hat in his hands, saying nothing.
9 A ¶ One by one, the street comes back to life.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02472.json
### SCENE s02472 | INT. CURLING RINK - PRE-DAWN
Detected names (may be incomplete or contain aliases): RAINE KOWALCHUK, TEODORA BRZEZINSKI, PRIYA NAIR, WALT DUNPHY, SUNDAY ADEYEMI
1 A ¶ A tin-roofed rink in a Manitoba grain town, the ice a long pale sheet scored by a thousand rocks.
2 A Breath hangs in the cold.
3 A Somewhere a compressor thrums like a heart beneath the floor.
4 A ¶ RAINE KOWALCHUK, 40s, the skip, kneels at the hack with her broom across her knees, studying the far house as though it owed her money.
5 A TEODORA BRZEZINSKI, 60s, the coach, leans on the boards in a parka the colour of canned peaches, thermos steaming.
6 A PRIYA NAIR, 20s, the lead, sweeps a pebble from the lane with great ceremony, while WALT DUNPHY, 70, the second, lowers himself onto a bench with a groan like a gate, and SUNDAY ADEYEMI, 30s, the third, rests her chin on her broom handle and watches the three of them as if counting something.
7 A ¶ Everything is calm.
8 A Even the compressor seems to hush.
9 D TEODORA: Draw weight's fine. Ice is keen. You'll hit the button on the last end like you've done ten thousand times.
10 D RAINE: We're not at the last end.
11 D TEODORA: We will be.
12 D WALT: Eleven-nine, they said. Eleven-nine and we're the underdogs. Never been an underdog. I was always the old dog.
13 D PRIYA: You're still the old dog, Walt.
14 D WALT: Language.
15 D SUNDAY: Raine. You haven't said a word about the match.
16 D RAINE: Didn't think I needed to.
17 D SUNDAY: You always have a word about the match.
18 D RAINE: Fine. I have a word. After today I'm not skipping.
19 D TEODORA: You're saying you want to throw last stones. I can arrange that.
20 D RAINE: I'm saying I'm done, Teo. Not skipping. Not anything. After today I'm gone. Winnipeg. The job came through in September and I sat on it. I didn't want you carrying it into the match.
21 D PRIYA: Gone gone?
22 D RAINE: Gone gone.
23 D WALT: Forty-one years I've known your father and he never told me.
24 D RAINE: He doesn't know either. You're the first.
25 D SUNDAY: Why us? Why now?
26 D RAINE: Because Teo's been lying to me about the ice for three weeks, and I figured if we're all confessing.
27 D TEODORA: It is perfectly good ice.
28 D RAINE: It's pebbled with the wrong water, Teo. You've been using the well water since the municipal line froze. I can read it from the hack.
29 D TEODORA: It plays true.
30 D RAINE: It plays true. It plays true for us. It won't for them. That's why you wanted the old stones thrown first. That's why you wanted me skipping one more match.
31 D TEODORA (after a long pause): I wanted to win once more. Is that a crime in Manitoba?
32 A ¶ Walt laughs, once, helplessly.
33 A Priya covers her mouth.
34 A Sunday doesn't move.
35 A ¶ Raine rises, stiff in the knees, and walks the length of the sheet to the far house.
36 A She sets down the broom.
37 A Takes off a glove.
38 A Presses her bare palm flat to the ice and holds it there while the others watch.
39 A ¶ She stands and lifts a hand: the thumbs-up of a skip who knows the line.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00220.json
### SCENE s00220 | INT. DRYDOCK CANTEEN - NIGHT
Detected names (may be incomplete or contain aliases): ODALYS VANTERPOOL, BRANIMIR KOSTA, KIRIN ASHWORTH, BIG HOLLIS
1 A ¶ Steel table.
2 A Cold tea.
3 A A hull looms through the window, half-painted.
4 A ¶ ODALYS VANTERPOOL (50s, foreman, grease-stained clipboard) stands.
5 A Doesn't sit.
6 A ¶ BRANIMIR KOSTA (60s, welder, one good eye) stares at his hands.
7 A ¶ KIRIN ASHWORTH (19, apprentice, new boots) hovers by the door.
8 A ¶ BIG HOLLIS (40s, union steward, arms folded) leans on the vending machine.
9 D ODALYS (to the room): Listen up. Inspection failed. Weld seam forty-two.
10 A ¶ Silence.
11 D BRANIMIR (muttering): Forty-two. Forty-two.
12 D ODALYS: Branimir.
13 D BRANIMIR: I heard.
14 D ODALYS: Who signed off on it?
15 D HOLLIS: Does it matter?
16 D ODALYS: It matters.
17 D KIRIN: It was me.
18 A ¶ Everyone turns.
19 D KIRIN [CONT'D]: Branimir was on break. I did the pass. I thought it was good.
20 D BRANIMIR: It wasn't him.
21 D KIRIN: It was.
22 D BRANIMIR: Boy, sit down.
23 D ODALYS: Kirin, did you X-ray the seam?
24 D KIRIN: No ma'am. There was no film left.
25 D HOLLIS: No film. On a Tuesday.
26 D ODALYS: Who's in charge of ordering film?
27 D HOLLIS: You are.
28 D ODALYS (beat): Right. Right.
29 D BRANIMIR: So it's your film. Your seam. Your hull.
30 D ODALYS: Don't.
31 D BRANIMIR: Forty years I never missed a seam.
32 D ODALYS: I know.
33 D BRANIMIR: Forty years.
34 D ODALYS: I know, Branimir.
35 D HOLLIS: Nobody gets fired tonight.
36 D ODALYS: Not your call.
37 D HOLLIS: It's the contract.
38 D ODALYS: The contract says a lot of things.
39 D BRANIMIR: The ship sails Friday.
40 D ODALYS: The ship does not sail Friday.
41 D KIRIN: Is it really that bad?
42 D ODALYS: It's a hairline crack, Kirin. At sea it opens like a zipper.
43 A ¶ Her hand slams the table.
44 A Tea jumps.
45 A Kirin flinches.
46 A ¶ Branimir laughs.
47 A Short.
48 A Dry.
49 D BRANIMIR: Then we cut it out. Tonight. Four of us.
50 D ODALYS (quietly): Four of us.
51 D HOLLIS: Overtime's on the union.
52 D ODALYS (to herself): Film. I forgot the film.
53 A ¶ She picks up the clipboard.
54 A Puts it down.
55 A Picks up four mugs instead.
56 D ODALYS [CONT'D]: Tea's cold. I'll make fresh.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01285.json
### SCENE s01285 | INT. SELF-SERVE CAR WASH BAY - DAWN
Detected names (may be incomplete or contain aliases): IGNATIUS PELL, LO, BANKS
1 A ¶ Concrete.
2 A Pressure hoses coiled on hooks.
3 A Cold sun leaks through the open bay door and lights the soap suds on the floor.
4 A ¶ DET. IGNATIUS PELL, 50s, heavy coat, mustard stain on his tie, leans against a wet wall.
5 A A cardboard coffee in each hand.
6 A ¶ LORETTA "LO" BANKS, 30s, nurse's scrubs under a puffy jacket, hair in a hasty bun, stands by the quarter-slot machine.
7 A Her hands are shoved deep in her pockets.
8 D PELL: Thanks for coming.
9 D LO: You said it was about my brother.
10 D PELL: It is.
11 A ¶ He holds out a coffee.
12 A She doesn't take it.
13 D LO: He's in Ohio.
14 D PELL: He was.
15 D LO: What does that mean?
16 D PELL: Lo.
17 D LO: Don't "Lo" me.
18 A ¶ Pell sets the coffee on the machine.
19 A Opens his coat.
20 A Pulls out a thin folder.
21 D PELL: Found a car three days ago. Under a bridge by Dunmore.
22 D LO: So?
23 D PELL: Plates were Ohio. Registered to Darnell Banks.
24 A ¶ Silence.
25 A Water drips.
26 D LO: He sold that car.
27 D PELL: Not according to the DMV.
28 D LO: Then someone stole it.
29 D PELL: Someone did. The keys were in the ignition.
30 A ¶ She walks to the wall.
31 A Presses her forehead against the cold tile.
32 D LO: Was he in it?
33 D PELL: No.
34 D LO: Then what do you want from me?
35 D PELL: His phone pinged a tower four blocks from your apartment. Tuesday night.
36 A ¶ She turns, slowly.
37 A Her face has changed.
38 D LO: Tuesday.
39 D PELL: Tuesday. Around eleven.
40 D LO: I was on shift.
41 D PELL: Until?
42 D LO: Seven.
43 D PELL: Then who let him in?
44 D LO: Nobody let him in.
45 D PELL: Lo.
46 A ¶ She snatches the coffee.
47 A Hurls it at the wall.
48 A It EXPLODES brown against the tile, hot, steaming.
49 D LO: He's my brother! He's the only family I have, and you come at dawn with a folder and a face like a funeral!
50 D PELL: I'm trying to find him.
51 D LO: You're trying to find me.
52 A ¶ He doesn't deny it.
53 A He just stands there, coffee dripping down the wall behind her.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01477.json
### SCENE s01477 | EXT. SALT FLAT - HIGH NOON
Detected names (may be incomplete or contain aliases): LUCKY, TREVINO-ASH, BARNABY CROW
1 A ¶ White.
2 A Flat.
3 A Shimmering to the horizon.
4 A A dead windmill.
5 A A single iron water trough, bone dry.
6 A ¶ LUCINDA "LUCKY" TREVINO-ASH (30s, sun-cracked lips, black duster, a rifle across her saddle) sits a paint mare in the glare.
7 A ¶ Across the flat, a man on foot.
8 A BARNABY CROW (60s, one blind eye, a gold tooth, no horse).
9 A He drags a coffin lid behind him on a rope.
10 A ¶ Lucky waits.
11 A He keeps coming.
12 D LUCKY: That's far enough.
13 D BARNABY: Is it?
14 A ¶ He keeps coming.
15 D LUCKY: Barnaby.
16 D BARNABY: Lucky.
17 D LUCKY: Where's your horse?
18 D BARNABY: Ate it.
19 D LUCKY: You didn't.
20 D BARNABY: Wanted to.
21 A ¶ He stops ten paces off.
22 A Sits on the coffin lid.
23 A Wipes his face.
24 D BARNABY [CONT'D]: Got any water?
25 A ¶ She tosses him a canteen.
26 A He drinks.
27 A Pours some on his head.
28 A Hands it back, empty.
29 D LUCKY: That was my last.
30 D BARNABY: I know.
31 A ¶ Her rifle comes up.
32 A He doesn't flinch.
33 D BARNABY [CONT'D]: Before you shoot me. Look in the lid.
34 D LUCKY: Why?
35 D BARNABY: Humor an old man.
36 A ¶ She keeps the rifle on him.
37 A Leans out of the saddle and flips the lid with her boot.
38 A Underneath: a bundle of bank notes, wet and rotting, tied with twine.
39 D LUCKY: That the Dunmore money?
40 D BARNABY: What's left. The salt got in.
41 A ¶ Lucky laughs.
42 A A short, cracked bark.
43 A Barnaby laughs, too.
44 A They are both still laughing when the rifle goes off.
45 A ¶ The shot echoes.
46 A Barnaby looks down.
47 A Nothing.
48 A The bullet has kicked up salt a foot from his boot.
49 D LUCKY: That's for the horse.
50 D BARNABY (wheezing): Fair.

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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00071.json
### SCENE s00071 | INT. CLOSED FUNICULAR STATION - WAITING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): AGNES PRUITT, DELROY CAMPBELL, WEI-LING CHOU, FATHER TOBIAS
1 A ¶ Wooden benches, a dead ticket window, a brass clock stopped at ten past four.
2 A Rain ticks on a skylight.
3 A ¶ AGNES PRUITT (60s, retired schoolteacher, buttoned to the chin) pours tea from a flask into four paper cups.
4 A DELROY CAMPBELL (40s, line mechanic in a grease-stained parka) sits on the bench by the door.
5 A WEI-LING CHOU (30s, insurance investigator, wet umbrella across her knees) studies the clock.
6 A FATHER TOBIAS (70s, rumpled cardigan under a black coat) leans on the ticket window, humming.
7 D AGNES: Sugar, anyone?
8 D DELROY: Just the tea.
9 D WEI-LING: Who owns this station now, Mr. Campbell?
10 D DELROY: The company. Nobody comes up here but me.
11 D FATHER TOBIAS: And us. A fine thing, the four of us in a snowglobe.
12 D AGNES: It's rain, Father.
13 D FATHER TOBIAS: Then a rain globe.
14 A ¶ Wei-Ling accepts a cup, sips, and smiles for the first time.
15 D WEI-LING: It's good tea.
16 D AGNES: I know.
17 A ¶ Wei-Ling lowers the cup.
18 A Her eyes go to the ticket window.
19 A A faint metal glint sits behind the grille.
20 D WEI-LING: Mr. Campbell. Is that the cash box?
21 A ¶ Delroy and Father Tobias both look at the window.
22 A Nobody speaks.
23 A Delroy stands.
24 D DELROY: It was empty when I locked it.
25 D AGNES: Was it?
26 A ¶ Delroy lunges for the window.
27 A Father Tobias steps in front of him, and the two grapple against the counter, the old priest surprisingly strong.
28 A Wei-Ling drops the umbrella and tries to pull them apart.
29 A Agnes sets down the flask, calmly, and the three of them freeze as she opens her coat to show a revolver tucked in her belt.
30 D AGNES [CONT'D]: The tea was only for waiting.
31 A ¶ Wei-Ling's cup slips from her hand.
32 A Delroy slumps onto the bench.
33 A The clock, for no reason at all, ticks forward one minute.
