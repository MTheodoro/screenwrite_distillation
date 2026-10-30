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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01359.json
### SCENE s01359 | INT. TELEGRAPH OFFICE, LONDON - NIGHT (1912)
Detected names (may be incomplete or contain aliases): PERCIVAL ASHDOWN, MISS ROSALIND TREVETHAN, LORD ALISTAIR CROYDE, HARRIET LUCAS, OPERATOR
1 A ¶ Brass keys.
2 A Glass cases.
3 A A gas lamp.
4 A A wall of pigeonholes.
5 A The tick of a dozen sounders.
6 A Rain on the glass.
7 A ¶ MR. PERCIVAL ASHDOWN, 50s, stiff collar, spectacles, sorts slips.
8 A MISS ROSALIND TREVETHAN, 20s, clerk, hair pinned up under a cap, taps the key.
9 A LORD ALISTAIR CROYDE, 50s, in a fur-collared coat, waits at the counter, drumming gloved fingers.
10 A And a woman, HARRIET LUCAS, 30s, in a plain brown coat, stands at the far end of the counter holding an unopened envelope.
11 A ¶ Ashdown clears his throat.
12 D ASHDOWN (to the room): Ladies and gentlemen. We are experiencing delay. The Atlantic cable is busy.
13 D CROYDE (to Ashdown): How busy?
14 D ASHDOWN: Very.
15 D CROYDE: Is it the Titanic?
16 A ¶ Silence.
17 A Rosalind's hand stills on the key.
18 D ASHDOWN: It is, my lord.
19 A ¶ Harriet puts the envelope down.
20 D HARRIET (under her breath): My brother was a stoker.
21 D ROSALIND (to Harriet): Miss, I am so sorry.
22 A ¶ The sounder clatters.
23 A Rosalind leans in, writes, tears the slip.
24 D ROSALIND [CONT'D] (to the room): Message. Carpathia has picked up survivors.
25 A ¶ A breath goes through the office.
26 A Croyde takes off his hat.
27 A Ashdown snatches the slip and reads it.
28 D ASHDOWN (to Rosalind): Is there a list?
29 D ROSALIND: Not yet.
30 D OPERATOR [V.O.] (over the sounder, faint, relayed): Names to follow. Standby, London.
31 A ¶ Harriet takes a step forward, then stops.
32 D HARRIET (to herself): Please, Tom. Please.
33 D CROYDE (to Ashdown): Mr. Ashdown, send a message to my wife. Tell her I have an interest.
34 D ASHDOWN: My lord, there are priorities.
35 D CROYDE: I am aware of that, Ashdown.
36 A ¶ Rosalind keys again.
37 A The sounder answers.
38 D ROSALIND (reading): Names. First batch.
39 A ¶ The whole room leans in.
40 A Rosalind begins to read aloud, each name a stone dropped into a well.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00896.json
### SCENE s00896 | INT. DUMPLING KITCHEN - BACK TABLE - NIGHT
Detected names (may be incomplete or contain aliases): CELESTE MARCHAND, RORY BANERJEE, NONNA LUCIA, TOMASZ WISNIEWSKI
1 A ¶ Steam curls from bamboo baskets.
2 A A wall of orange tiles, a radio murmuring in Cantonese.
3 A Four people crowd a stainless counter, pleating dumplings by hand.
4 A ¶ CELESTE MARCHAND, 30s, silk blouse, sleeves rolled, pleats each one with great concentration.
5 A RORY BANERJEE, 30s, sits across from her, flour on his glasses.
6 A NONNA LUCIA, 80s, wiry, in a faded apron, oversees them with a wooden spoon.
7 A TOMASZ WISNIEWSKI, 50s, the chef, passes behind with a tray, wiping his hands on his hip.
8 D NONNA LUCIA (to the table): Too much filling. You will burst them.
9 D CELESTE: I like them fat.
10 D RORY (softly): She does.
11 A ¶ Celeste's hands pause.
12 A She doesn't look up.
13 A He reaches for a wrapper, their fingers brush the flour, and neither of them moves for a beat.
14 D TOMASZ: Everyone eat! Plates are coming!
15 D NONNA LUCIA (to Rory): You. You are the one from the letters.
16 D RORY: Which letters?
17 D NONNA LUCIA: The ones she does not send.
18 A ¶ Celeste drops a dumpling.
19 A It lands on the tile with a wet slap.
20 A Tomasz glides by and stoops to retrieve it, humming.
21 D CELESTE (to herself): Okay.
22 D RORY: Celeste--
23 D CELESTE: It's fine. Tell Tomasz the soy is low.
24 A ¶ She stands, wipes her hands, and walks out through the swinging door.
25 A Rory watches it swing.
26 A Nonna Lucia pats the empty chair.
27 D NONNA LUCIA: Sit. Pleat. It is always better in the second hour.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00081_0.json
### SCENE s00081_0 | INT. PIEROGI FACTORY - NIGHT SHIFT
Detected names (may be incomplete or contain aliases): RAFAL KOWALCZYK, TAMSIN OKORO, LINDGREN
1 A ¶ Steam.
2 A Conveyor belts of dough.
3 A Hairnets and hum.
4 A ¶ RAFAL KOWALCZYK (40s, detective, rumpled suit under a hairnet) squints at a freezer door.
5 A TAMSIN OKORO (30s, factory floor manager, clipboard, no patience) walks beside him.
6 D TAMSIN: Four minutes.
7 D RAFAL: You said that at the gate.
8 D TAMSIN: Four minutes at the gate. Four minutes now.
9 A ¶ They pass a bin of spinach filling.
10 A Rafal sniffs it.
11 A Winces.
12 D RAFAL: Who found the body?
13 D TAMSIN: Night packer. Quit on the spot.
14 D RAFAL: Name?
15 D TAMSIN: Gus. Everybody calls him the Ferret.
16 A ¶ Rafal nods.
17 A Writes.
18 A ¶ A belt jams.
19 A Alarm bleats.
20 A Tamsin pivots and kills it with one slap.
21 D TAMSIN [CONT'D] (to the floor): Back to your stations. Nothing to see.
22 A ¶ Workers drift.
23 A Rafal watches them go.
24 D RAFAL: Nothing.
25 D TAMSIN: I run a clean line.
26 D RAFAL: Somebody stuffed a man into your freezer.
27 D TAMSIN: Not on my line.
28 A ¶ At the end of the corridor, a hairnet bobs.
29 A GUS "THE FERRET" LINDGREN (50s, wiry, sleeves pulled over fists) hurries toward the exit.
30 D RAFAL: Hey.
31 A ¶ Gus quickens.
32 D RAFAL [CONT'D]: Mr. Lindgren.
33 A ¶ Gus sprints.
34 A Rafal vaults a bin of dough.
35 A Tamsin swears and follows.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00030.json
### SCENE s00030 | INT. BEEKEEPER'S KITCHEN - MORNING
Detected names (may be incomplete or contain aliases): FLORIAN ACHTERBERG, MAREN, EZRA, ODALYS
1 A ¶ Honey-gold light slants through a window crusted with propolis.
2 A On the table, a cracked jar leaks slow amber across oilcloth.
3 A FLORIAN ACHTERBERG (70s, veil pushed back, hands like roots) stands rigid at the stove.
4 A His daughter MAREN (40s, city coat, car keys still in her fist) has not sat down.
5 A At the table, her son EZRA (9, scabbed elbows) hides behind a comic book, while his aunt ODALYS (50s, flour on her apron) pretends to knead dough.
6 D MAREN: You sold the north hives without telling me.
7 D FLORIAN: They were mine to sell.
8 D ODALYS: Maren, sit. There's tea.
9 D MAREN: I don't want tea. Dad, those were Mom's.
10 D FLORIAN: Your mother is dead eleven years. The bees don't know it.
11 D EZRA (from behind the comic): Are we fighting?
12 D ODALYS: No, sweetheart. We're discussing.
13 D MAREN: I drove six hours. I thought you were sick.
14 D FLORIAN: I am old. It's the same thing.
15 D MAREN (breaking): You could have asked me.
16 D FLORIAN: And you would have said keep them. And I would have kept them. And they would have died, because I can't lift the supers anymore.
17 A ¶ Silence.
18 A A single bee drifts across the room and lands on the leaking jar.
19 D ODALYS: Ezra, bring me the dish towel.
20 A ¶ He does.
21 A Maren sits at last.
22 A Florian turns from the stove, picks up the jar, and sets it in front of her.
23 D FLORIAN: Taste.
24 D MAREN: Dad.
25 D FLORIAN: Taste it.
26 A ¶ She dips a finger.
27 A Her face softens as she tastes, and she covers her mouth with her wrist.
28 D MAREN: It's hers.
29 D FLORIAN: The last of the north. I saved it for you.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00966.json
### SCENE s00966 | INT. BOOTH OF AN ABANDONED RADIO STATION - NIGHT
Detected names (may be incomplete or contain aliases): HORATIA KESSELRING-OLUMIDE
1 A ¶ Dust.
2 A Dead tubes.
3 A A single working microphone on a bent boom arm, a red ON AIR light that flickers when it feels like it.
4 A HORATIA KESSELRING-OLUMIDE (60s), a retired host with a voice like warm gravel, sits at the console in a green velvet jacket.
5 D HORATIA: Good evening, listeners. If there are any of you left.
6 A ¶ This is Horatia Kesselring, and this is the last broadcast of Midnight Confessional.
7 A Tonight, we confess one thing.
8 A Just one.
9 A ¶ (beat)
10 A ¶ Thirty-one years ago, a young man called this station from a phone booth on Delaney Street.
11 A He said he had done something terrible.
12 A He said he needed to tell somebody.
13 A And I, in my infinite wisdom, said, "Call back tomorrow, honey.
14 A We're out of time."
15 A ¶ He never called back.
16 A The next morning, police found a body on Delaney Street.
17 A A girl.
18 A Her name was Marian Pruitt.
19 A ¶ (beat)
20 A ¶ I kept the tape.
21 A Every call, every night, thirty-one years.
22 A I have never played this one for anyone.
23 A Tonight I will.
24 A ¶ She presses a key on the console.
25 A Tape hiss.
26 D HORATIA [V.O.] (recorded, thirty-one years ago): Midnight Confessional, you're on the air.
27 D HORATIA: Listen. That's me, at thirty. So bright. So certain.
28 D HORATIA [V.O.] (recorded, thirty-one years ago): Go ahead, caller. You're among friends.
29 D HORATIA: He doesn't speak, you see. The tape is nineteen seconds of breathing. Nineteen. I counted them every night for thirty-one years.
30 A ¶ (beat)
31 A ¶ So I'll say what I should have said.
32 A I'm sorry, Marian.
33 A I'm sorry, whoever you were.
34 A I should have stayed on the line.
35 A ¶ (beat)
36 A ¶ This has been Horatia Kesselring.
37 A Good night, Delaney Street.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01643.json
### SCENE s01643 | INT. LUMBER MILL OFFICE, DEPOSITION - DAY
Detected names (may be incomplete or contain aliases): ATTORNEY PHILOMENA OKAFOR-LANE, CORNELIUS HARGROVE
1 A ¶ Wood-paneled walls.
2 A Sawdust in the corners.
3 A A rattling air conditioner.
4 A A long folding table with a court reporter's empty chair.
5 A ¶ ATTORNEY PHILOMENA OKAFOR-LANE, 40s, in a good grey suit, flips through a thick folder.
6 A Her pen taps the rim of a mug.
7 A She is very still.
8 A ¶ The door opens.
9 A ¶ CORNELIUS HARGROVE, 60s, work boots, flannel shirt under a blazer too tight at the shoulders, steps inside.
10 A He eases into the chair opposite.
11 D PHILOMENA: Mr. Hargrove. Thank you for coming.
12 D CORNELIUS: You didn't give me a choice.
13 D PHILOMENA: No. I didn't.
14 D CORNELIUS: Is the reporter coming?
15 D PHILOMENA: She's late. We'll begin.
16 A ¶ She turns on a small recorder.
17 A Sets it between them.
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
44 A ¶ The air conditioner clatters.
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
55 A His chair squeaks.
56 A He looks at the door.
57 D CORNELIUS: She's here?
58 D PHILOMENA: She asked to sit in.
59 D CORNELIUS: She shouldn't.
60 D PHILOMENA: She wanted to look at you.
61 A ¶ He stands.
62 A The chair scrapes.
63 A He paces to the window, back, then stops at the table, hands flat on the wood.
64 D CORNELIUS: I can't do this.
65 D PHILOMENA: You already are.
66 A ¶ He slams his palm on the table.
67 A The recorder jumps.
68 A Philomena doesn't flinch, but she catches the mug before it tips.
69 A ¶ They stare at each other.
70 A Then, slowly, both reach for the recorder at once, and their hands touch on the plastic.
71 D CORNELIUS [CONT'D] (quietly): Turn it on again.
72 A ¶ Philomena presses the button.
73 A The red light blinks.
74 D CORNELIUS [CONT'D]: My name is Cornelius Hargrove. I saw him fall.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00713.json
### SCENE s00713 | INT. PROUTY COTTAGE - PARLOR - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): ELEANOR PROUTY, GERALD, CONSTABLE IDRIS
1 A ¶ A low-ceilinged room.
2 A A mantel crowded with china figurines.
3 A A shawl on the arm of a chair.
4 A A grandfather's walking stick leaning by the door.
5 A Rain taps the windows.
6 A ¶ ELEANOR PROUTY, 60s, in a gray cardigan, sits in the straight-backed chair with her hands folded.
7 A GERALD, 60s, her brother-in-law, stands at the window with his back to her.
8 A CONSTABLE IDRIS, 30s, young and awkward, perches on the edge of the settee with a notebook on his knee.
9 D IDRIS: Mrs. Prouty. I'm sorry to trouble you.
10 D ELEANOR: It's no trouble.
11 D IDRIS: I only have a few questions.
12 D ELEANOR: Of course.
13 A ¶ Gerald does not turn.
14 A His hand rests on the curtain.
15 D IDRIS: When did you last see your husband?
16 D ELEANOR: Tuesday morning. At breakfast.
17 D IDRIS: And he went to the allotment?
18 D ELEANOR: He always goes to the allotment.
19 D IDRIS: Did he mention anyone?
20 D ELEANOR: No.
21 A ¶ Idris writes.
22 A The pen scratches in the silence.
23 A A clock chimes the quarter hour.
24 D IDRIS: Was he in good spirits?
25 D ELEANOR (after a pause): He was quiet.
26 A ¶ Gerald lets the curtain fall.
27 D GERALD: Henry was always quiet.
28 D IDRIS: Mr. Prouty, you live next door?
29 D GERALD: Forty years.
30 D IDRIS: And you didn't see him Tuesday?
31 D GERALD: I saw him walk past. Around nine.
32 D IDRIS: Which direction?
33 D GERALD: Toward the river.
34 A ¶ Eleanor looks down at her hands.
35 A She turns her wedding ring a single quarter turn.
36 D IDRIS: The allotment is the other way.
37 A ¶ Nobody speaks.
38 A Idris closes the notebook.
39 A Gerald crosses to the mantel and straightens a china shepherdess that did not need straightening.
40 D GERALD: Perhaps he went for a walk.
41 D IDRIS: Perhaps.
42 D ELEANOR: Would you like tea, Constable?
43 D IDRIS: That would be kind.
44 A ¶ She rises and goes to the kitchen.
45 A Gerald watches her go.
46 A When the kettle clatters in the other room, he turns to Idris with an expression that is almost relief.
47 D GERALD: She has not slept since Tuesday.
48 D IDRIS: No. I should think not.
49 A ¶ Idris tucks the notebook into his pocket.
50 A He glances at the walking stick by the door.
51 A It is wet.
52 A Rain, perhaps.
53 A Or river.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00044.json
### SCENE s00044 | INT. FAMILY MINIVAN, DRIVE-THRU CAR WASH - DAY
Detected names (may be incomplete or contain aliases): LORETTA PEMBERTON-SHAH, HAROLD PEMBERTON, ZINNIA
1 A ¶ Soap foam crawls across the windshield.
2 A Brushes thump and swish.
3 A Inside, the world is a muffled aquarium.
4 A ¶ LORETTA PEMBERTON-SHAH (40s, driver, rings clacking against the wheel) keeps both hands at ten and two.
5 A In the passenger seat sits her father, HAROLD PEMBERTON (70s, flat cap, silent for forty miles).
6 A In the back, her daughter ZINNIA (14, earbuds in, knees up) watches the brushes beat the glass.
7 A ¶ The conveyor tugs the van forward.
8 A A giant mitt of foam slaps the roof.
9 D LORETTA: You didn't have to come.
10 D HAROLD: I wanted to.
11 D LORETTA: You hate car washes.
12 D HAROLD: I hate being left behind more.
13 A ¶ Zinnia pulls out one earbud.
14 D ZINNIA: Who left who?
15 A ¶ Loretta and Harold look at each other.
16 A Neither speaks.
17 A The brushes whump against the doors.
18 D LORETTA: ^Nobody left anybody.
19 D HAROLD: ^Nobody left anybody.
20 A ¶ Zinnia raises both eyebrows and puts the earbud back.
21 A ¶ The conveyor slows.
22 A A rinse arch sprays them white.
23 A In the sudden silence, Loretta lets go of the wheel for the first time all day and presses her fingers into her eyes.
24 A ¶ Harold reaches over and, with enormous awkwardness, pats her knee twice.
25 D HAROLD [CONT'D]: Your mother liked this part.
26 D LORETTA (muffled): The foam.
27 D HAROLD: The foam.
28 A ¶ The dryers blast.
29 A Zinnia leans forward between the seats and rests her chin on the headrest, close to both of them.
30 A Sunlight breaks through the last of the water.
31 A Loretta turns on the wipers.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01793.json
### SCENE s01793 | INT. PARKING GARAGE - LEVEL P4 - NIGHT
Detected names (may be incomplete or contain aliases): AGENT VIKTORIA NASSAR, JUDE OKAFOR-BRANDT, SILHOUETTE, MIKHAIL TOROSYAN
1 A ¶ Concrete.
2 A Sodium lights.
3 A A drip, somewhere.
4 A A lone black sedan with its engine running.
5 A ¶ AGENT VIKTORIA NASSAR, thirties, crouches behind a pillar with a pistol.
6 A Ten yards away, her partner JUDE OKAFOR-BRANDT, forties, flattens against a van with a briefcase handcuffed to his wrist.
7 A They exchange a look across the gap.
8 D JUDE (whisper): Two minutes.
9 D VIKTORIA: They're early.
10 A ¶ Footsteps.
11 A Heels on concrete.
12 A Viktoria slides back a step and Jude drops low, the briefcase scraping against the van's fender.
13 A A silhouette strides into the light from the stairwell, tall, bareheaded, arms loose.
14 A ¶ The silhouette stops at the sedan and taps on the window.
15 A The window rolls down.
16 D SILHOUETTE: Do you have it?
17 A ¶ A gloved hand passes out a thick envelope.
18 A Viktoria's eyes narrow.
19 A Jude lifts the briefcase an inch and then lowers it.
20 D VIKTORIA (whisper): That's not our guy.
21 D JUDE: Whose guy is it?
22 A ¶ The envelope disappears under the silhouette's coat.
23 A A new figure peels from the shadows behind them, a big man in a hood, MIKHAIL TOROSYAN, fifties, his pistol steady on Viktoria's pillar.
24 D MIKHAIL: Out, please. Hands where I can see them.
25 A ¶ Viktoria rises with her gun down.
26 A Jude steps out from the van with the briefcase held high, wrist chained, as the silhouette turns at last and the light reveals the face of the sedan's driver, a woman with a scar through one eyebrow, who gives them a polite, regretful smile.
27 A ¶ Then the sedan's engine roars, the headlights snap on, Viktoria dives left, Jude dives right, Mikhail fires, the first shot sparking off the pillar, and the sedan lurches forward and clips the van, spinning it into a column with a thunderous crunch.
28 A Glass rains down.
29 A Alarms scream through the garage.
30 A In the confusion, Jude drags himself behind a stack of tires, Viktoria rolls to her feet and sprints for the stairwell, and Mikhail, bleeding from the scalp, fires at both of them without hitting either.
31 A ¶ The sedan screeches up the ramp.
32 A Viktoria hits the stairwell door with her shoulder, barges through, and gone.
33 A ¶ Jude, alone and cuffed to his case, looks up at the swinging sodium lights.
34 D JUDE: Well. That went well.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00525.json
### SCENE s00525 | INT. CHURCH BELL TOWER - DAY
Detected names (may be incomplete or contain aliases): SERGEANT MAGNUS HADLEY, PRIVATE QUIGG, PRIVATE NASRIN KHALIL, CORPORAL TOMASZ WIERZBICKI, MOTHER AGATHE
1 A ¶ Snow drifts through the broken louvres and settles on the great bronze bell like flour on a baker's arm.
2 A The wooden stair groans below.
3 A The air smells of pigeon and old rope.
4 A ¶ SERGEANT MAGNUS HADLEY, 40s, a face scoured by wind, crouches at the north louvre with binoculars.
5 A PRIVATE QUIGG, 19, freckled, hugs a machine gun.
6 A PRIVATE NASRIN KHALIL, 20s, a field radio strapped to her back, picks at a frozen knot.
7 A CORPORAL TOMASZ WIERZBICKI, 30s, sits against the wall, bandaging his own hand.
8 D QUIGG: They're moving in the orchard.
9 D HADLEY: Count.
10 D NASRIN: Nine? Ten --
11 D QUIGG: Twelve. I said twelve.
12 D TOMASZ (muttering): Twelve, nine, who cares, we're up a steeple.
13 D HADLEY: Quiet. Both of you.
14 A ¶ A footstep on the stair.
15 A Slow.
16 A Four rifles swing.
17 A ¶ MOTHER AGATHE, 70s, a black habit and a snow-crusted shawl, climbs into the loft carrying a kettle.
18 A She is breathing hard and not remotely afraid.
19 D MOTHER AGATHE: You have been in my bell tower since Tuesday. I thought you might want tea.
20 D NASRIN: Mother, you can't be up here --
21 D QUIGG: Is it safe? Did you check it?
22 D TOMASZ: She's a nun, she's not going to poison us.
23 D MOTHER AGATHE: Not before the second cup.
24 A ¶ Hadley lowers the binoculars.
25 A For the first time all day, he laughs.
