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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00385.json
### SCENE s00385 | INT. ICE-DRILL RIG "CALLISTO ONE" - CONTROL CAGE - NIGHT
Detected names (may be incomplete or contain aliases): NASRIN, JOSEPH, NAKAMURA
1 A ¶ A steel box bolted to a frozen moon.
2 A Gauges flicker.
3 A A tiny window shows black sky and a bruised planet.
4 A ¶ NASRIN, 38, mission engineer, holds a pressure valve with both hands.
5 A JOSEPH, 50, geologist, lies on the floor with a bleeding scalp and a laugh like a cough.
6 A ¶ The radio SQUEALS.
7 D NAKAMURA [V.O.] (over radio): Callisto One, Nakamura at Orbital. Report depth.
8 A ¶ Nasrin thumbs the key.
9 D NASRIN: Four kilometers. We hit something.
10 D NAKAMURA [V.O.]: Define something.
11 D NASRIN: It rang. Like a bell.
12 A ¶ Joseph sits up.
13 A He grips her ankle, and she looks down.
14 D JOSEPH: Don't pull the bit.
15 D NASRIN: Pressure's spiking.
16 D JOSEPH: Don't pull the bit.
17 A ¶ She doesn't.
18 A The gauges climb.
19 A Alarms scream.
20 A Then, all at once, every needle drops to zero.
21 A Silence.
22 D NAKAMURA [V.O.]: Callisto One, say again.
23 A ¶ Nasrin looks at Joseph.
24 A He is staring at the floor, where a pale blue light is rising through the grating, and he is smiling.
25 D NASRIN (into radio): Nakamura. We're through.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00801.json
### SCENE s00801 | EXT. HOT-AIR BALLOON - THREE THOUSAND FEET - DAWN
Detected names (may be incomplete or contain aliases): PERPETUA VANCE-OLUWOLE, ARABELLA HOLT, MURDOCH ABERNETHY, FITZ
1 A ¶ A wicker basket the size of a small closet swings under a great striped envelope of orange and teal.
2 A Fields below are a quilt of green.
3 A The burner roars, rests, roars again.
4 A ¶ PERPETUA VANCE-OLUWOLE, 50s, pilot, leather cap and a scarf the length of a river, works the valve and looks at no one.
5 A Beside her, ARABELLA HOLT, 40s, passenger in a sequined jacket, clutches the rim with white knuckles.
6 A At the far side MURDOCH ABERNETHY, 60s, her father-in-law, dozes upright against a sandbag, and FITZ, 20s, deckhand, practically a vine, clings to a rigging line with a grin that will not stay on.
7 D PERPETUA (to the basket, all of them): We're at altitude, folks. Enjoy the view.
8 A ¶ Arabella lets out a very small scream.
9 A Fitz applauds.
10 D MURDOCH (waking): Is it over?
11 D ARABELLA: No, Murdoch.
12 D MURDOCH: Then why am I awake?
13 D PERPETUA (to herself): Three thousand feet, two idiots, and a prayer.
14 A ¶ Arabella glares at her.
15 A Perpetua fires the burner with a cheerful roar.
16 D ARABELLA: Excuse me?
17 D PERPETUA: Nothing.
18 D FITZ (to Murdoch): You can see your house from here!
19 D MURDOCH: I sold my house.
20 D FITZ: You can see the new owner's house!
21 A ¶ Murdoch peers over the rim.
22 A Squints.
23 A Nods slowly.
24 D MURDOCH: He mowed the lawn badly.
25 D ARABELLA (to everyone, brittle): Can we land now? Please?
26 D PERPETUA: Landing's a negotiation, dear.
27 D ARABELLA: With whom?
28 D PERPETUA: The wind.
29 A ¶ A gust shoves the basket sideways.
30 A Arabella shrieks and drops to her knees.
31 A Murdoch grabs her sequined shoulder, delighted.
32 A Fitz whoops.
33 A Perpetua, unbothered, adjusts the valve.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00956.json
### SCENE s00956 | INT. FIELD TENT, FORWARD AID STATION - NIGHT
Detected names (may be incomplete or contain aliases): MEDIC VICTORINE OKONJO-HALVORSEN, BRANDVOLD
1 A ¶ Canvas walls snap in the wind.
2 A A single hurricane lamp swings on a hook.
3 A Two empty cots.
4 A A field radio crackles beside a stack of ration tins.
5 A ¶ MEDIC VICTORINE OKONJO-HALVORSEN (30s) sits alone on the nearer cot with her sleeves rolled above the elbows.
6 A Her hands are steady.
7 A She winds a roll of gauze and does not look at the radio.
8 A ¶ It coughs.
9 D BRANDVOLD [V.O.] (over radio): Aid station four, this is Control. Report.
10 A ¶ She stares at it.
11 A She lets it ask twice.
12 D BRANDVOLD [V.O., CONT'D] (over radio): Victorine. Pick up.
13 A ¶ She lifts the handset.
14 D VICTORINE: Control, aid station four. No wounded.
15 D BRANDVOLD [V.O.] (over radio): None?
16 D VICTORINE: None left.
17 A ¶ A pause on the line.
18 A The wind pushes the canvas in and out like breathing.
19 D BRANDVOLD [V.O.] (over radio): Evacuation at oh-four-hundred. Pack what you can carry.
20 A ¶ She sets down the gauze.
21 A She does not move to pack.
22 D VICTORINE: Sergeant. Was it Anselmo?
23 D BRANDVOLD [V.O.] (over radio): Yes.
24 A ¶ She nods, to no one.
25 A She folds the blanket from the second cot into a tight square and holds it in her lap.
26 D BRANDVOLD [V.O.] (over radio): Control, out.
27 A ¶ The radio goes to static.
28 A She switches it off and sits in the lamplight, listening to the wind.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00300.json
### SCENE s00300 | INT. OBSERVATION CAR, MOUNTAIN SCENIC RAILWAY - SUNSET
Detected names (may be incomplete or contain aliases): WOMAN, THE STRANGER, ANSELM, PHILIPPA
1 A ¶ A glass-domed car, brass fittings polished to honey.
2 A Plush velvet seats.
3 A Outside, peaks go violet under a rose-colored sky.
4 A ¶ A WOMAN sits alone by the window, a travel journal on her knee.
5 A Mid-thirties, silk scarf, auburn hair pinned with a tortoiseshell comb.
6 A She writes, and stops, and watches the mountains.
7 A ¶ A STRANGER enters from the vestibule: a tall man, forties, tweed jacket, a camera on a strap.
8 A He pauses at her row.
9 D THE STRANGER: Is this seat taken?
10 D WOMAN: There are forty empty seats.
11 D THE STRANGER: I know. I counted.
12 A ¶ She almost smiles.
13 A He sits across the aisle, not beside.
14 A Lifts the camera, lowers it again.
15 D THE STRANGER [CONT'D]: The light's gone before I can catch it. Always.
16 D WOMAN: Then stop catching it.
17 D THE STRANGER: And do what?
18 D WOMAN: Look at it.
19 A ¶ He looks.
20 A A long beat.
21 A The train curves, and the whole western sky tilts into the car.
22 D THE STRANGER: My name is Anselm.
23 D ANSELM (correcting himself): Anselm Whitcombe-Diallo.
24 D WOMAN: Philippa Okoro-Strand.
25 D ANSELM: Philippa. That's a good mountain name.
26 D PHILIPPA: Is there such a thing?
27 D ANSELM: There is now.
28 A ¶ The train rocks gently through a tunnel and out again.
29 D PHILIPPA: Do you travel often?
30 D ANSELM: Only when I've lost something.
31 D PHILIPPA: What did you lose?
32 D ANSELM: I'm hoping the mountains will tell me.
33 D PHILIPPA: They don't talk.
34 D ANSELM: They don't need to.
35 A ¶ She closes her journal.
36 A The sky goes from rose to lavender.
37 A Neither of them speaks, and neither looks away.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00954.json
### SCENE s00954 | EXT. SALOON ROOFTOP, DEAD MAN'S CROSSING - SUNSET
Detected names (may be incomplete or contain aliases): SHERIFF OBADIAH TRELAWNEY-KANE, JED, RUSSO-ABIOLA, MAGDALENA SOLIS-FAIRWEATHER, FINN, O'HALLORAN-DIOP
1 A ¶ A flat saloon roof with a rickety rain barrel at one corner.
2 A A church bell hangs from a crooked post nearby.
3 A The street below is still.
4 A Warm light on dust.
5 A ¶ SHERIFF OBADIAH TRELAWNEY-KANE (50s, white mustache, a star pinned to a faded vest) sits on the barrel playing a harmonica.
6 A Across from him, DEPUTY JEDEDIAH "JED" RUSSO-ABIOLA (20s, hat tilted) eats beans from a tin.
7 A A woman in a gingham dress, MAGDALENA SOLIS-FAIRWEATHER (30s, a basket on her arm), hangs laundry on a line between two chimneys.
8 A Near the edge, FINNEGAN "FINN" O'HALLORAN-DIOP (40s, drover's hat pulled low) leans against the bell post, whittling.
9 D OBADIAH (to Jed): Quiet day.
10 D JED: Too quiet.
11 D MAGDALENA (to all of them): Anyone want pie?
12 D FINN (muttering): Pie, she says.
13 D OBADIAH: I'll take pie, Maggie.
14 D JED: I'll take two.
15 D MAGDALENA: Then you can come get it.
16 D OBADIAH: Come get it, Jed.
17 D JED: Why me?
18 D FINN: Because you're the youngest, son.
19 D JED: I'm not --
20 D OBADIAH: Quiet.
21 D FINN: Hear that?
22 A ¶ All four go still.
23 A Far off, hoofbeats.
24 A A hundred horses.
25 A Then a thousand.
26 A The church bell hums on its post.
27 D MAGDALENA: Obadiah?
28 D OBADIAH: Everyone down.
29 D JED: But sir --
30 D FINN: Down!
31 A ¶ They drop behind the parapet.
32 A From the end of the street, a dark mass rolls in: a cattle drive, massive and wild, tearing down Main Street toward them.
33 D JED (laughing, relieved): It's only cattle.
34 D OBADIAH: Look at the riders.
35 A ¶ Behind the stampede, a line of masked men with torches lopes into town.
36 D MAGDALENA (whispering): Lord help us.
37 D FINN (to himself): Not today.
38 A ¶ Obadiah rises, tucks the harmonica into his vest, and draws his revolver.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00203.json
### SCENE s00203 | INT. ROOFTOP GREENHOUSE - AFTERNOON
Detected names (may be incomplete or contain aliases): CASPIAN ODUYA, VERONIKA STANISLAWSKI, JUNE PAPADOPOULOS
1 A ¶ Glass panes fogged with humidity.
2 A Rows of orchids.
3 A A watering can.
4 A ¶ CASPIAN ODUYA, 40s, sorts seed packets at a potting bench.
5 A VERONIKA STANISLAWSKI, 50s, sits on an upturned crate, sipping tea.
6 A JUNE PAPADOPOULOS, 20s, leans on a shelf, headphones around her neck.
7 D CASPIAN: The vault is on the third floor. The elevator needs a keycard. The stairwell has a camera.
8 D VERONIKA: And the roof?
9 D CASPIAN: Roof door is alarmed. But the greenhouse vent connects to the same shaft.
10 D JUNE: How wide is the vent?
11 D CASPIAN: Twenty inches.
12 D JUNE: That's tight.
13 D CASPIAN: You're small.
14 D JUNE: I'm average.
15 D VERONIKA: You're small, June. Be proud.
16 D JUNE: I'm proud. I'm also claustrophobic.
17 D CASPIAN: Veronika can talk you through.
18 D VERONIKA: I'll hum.
19 D JUNE: You'll hum?
20 D VERONIKA: Whale songs. They help.
21 D CASPIAN: We go Thursday. The night guard changes at ten.
22 D VERONIKA: What about the dog?
23 D CASPIAN: There's no dog.
24 D VERONIKA: There was a dog last month.
25 D CASPIAN: That was a different building.
26 D JUNE: Can we confirm the dog?
27 D CASPIAN: I'll confirm the dog.
28 D VERONIKA: Good.
29 D JUNE: Good.
30 A ¶ They sit.
31 A A drip falls from a leaf.
32 A Veronika stirs her tea.
33 A June drums on her knee.
34 A Caspian sets down the seed packet.
35 D CASPIAN: Anyone want a tomato?
36 D VERONIKA: Is it a good one?
37 D CASPIAN: Best on the roof.
38 D JUNE: Obviously. It's the only one.
39 D CASPIAN (handing her one): Eat.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02200.json
### SCENE s02200 | INT. COUNTY COURTHOUSE - WITNESS STAND - DAY
Detected names (may be incomplete or contain aliases): JUDGE ODETTE MARCHAND, ATTORNEY RUPERT KLINE, NURSE GWENDOLYN ASARE
1 A ¶ An old courtroom of dark oak and brass, high windows letting in a smear of grey light.
2 A The gallery is half full.
3 A A clock above the door ticks louder than anyone would like.
4 A ¶ JUDGE ODETTE MARCHAND (60s, white hair in a tight bun, reading glasses on a chain) sits behind the bench, hands steepled.
5 A At the prosecution table, ATTORNEY RUPERT KLINE (40s, sharp suit, a habit of straightening his cuffs) rises with a folder.
6 A And on the witness stand, with her hands flat on her knees, sits NURSE GWENDOLYN ASARE (50s, grey cardigan, wedding band worn thin).
7 A ¶ She stares straight ahead.
8 A He crosses slowly toward her.
9 D KLINE: Ms. Asare, thank you for being here.
10 D ASARE: I was subpoenaed.
11 D KLINE: So you were.
12 A ¶ He smiles a little.
13 A She doesn't.
14 A The judge removes her glasses, polishes them on her sleeve, and puts them back.
15 D KLINE [CONT'D]: You were on shift the night of March the ninth.
16 D ASARE: Yes.
17 D KLINE: Alone on the ward?
18 D ASARE: With two aides. One went home sick at midnight.
19 D KLINE: And the patient in bed four, Mr. Fennimore. He was your responsibility.
20 D ASARE: He was.
21 D KLINE: You administered his medication at three a.m.
22 D ASARE: At ten past three.
23 A ¶ Kline pauses.
24 A He had not expected correction.
25 A He glances at the judge.
26 A She gives him nothing.
27 D KLINE: Ten past three. Thank you for the precision.
28 D ASARE: I always chart the time.
29 A ¶ He walks back to his table, lifts a single sheet from the folder, and holds it between two fingers like something dead.
30 D KLINE: This is the medication record. It lists the dose as fifty milligrams.
31 D ASARE: It does.
32 D KLINE: The pharmacy log says five.
33 D ASARE: It says five.
34 D KLINE: So which is right?
35 A ¶ She is silent.
36 A The clock ticks.
37 A Judge Marchand leans forward very slightly.
38 A In the gallery, someone coughs.
39 D KLINE [CONT'D]: Ms. Asare?
40 D ASARE: Both.
41 D KLINE: Both?
42 D ASARE: The pharmacy sent five. I gave fifty.
43 A ¶ A murmur sweeps the room.
44 A Kline sets the sheet down.
45 A He is no longer smiling.
46 D KLINE: Why?
47 D ASARE: Because Dr. Whitfield wrote fifty.
48 D KLINE: And the pharmacy?
49 D ASARE: Made a mistake.
50 D KLINE: And you followed the doctor's order over the pharmacy's.
51 D ASARE: I always do.
52 D KLINE: Even when the numbers disagree?
53 D ASARE: Mr. Kline, I have been a nurse for thirty-one years. When a doctor writes an order, I do not second-guess it.
54 D KLINE: Even when it kills a man?
55 A ¶ She flinches.
56 A Her hand rises, a fraction, then falls back to her knee.
57 D JUDGE MARCHAND: Mr. Kline.
58 D KLINE: Withdrawn, Your Honour.
59 D JUDGE MARCHAND: Ms. Asare, would you like a recess?
60 D ASARE: No, Your Honour.
61 A ¶ She draws a long breath.
62 A Then she raises her eyes, finds the back of the courtroom, and speaks to someone nobody else can see.
63 D ASARE [CONT'D]: I knew when I gave it. I felt the weight of the syringe. I knew.
64 A ¶ The room has gone entirely quiet.
65 A Judge Marchand removes her glasses again and does not polish them this time.
66 D KLINE (gently): Then why did you do it?
67 D ASARE: Because if I questioned him, I would have been wrong. And if I was right, he would have been wrong. And no one wins that.
68 A ¶ She stops.
69 A Her whole body seems to loosen.
70 A The tension of weeks drops out of her shoulders like a coat.
71 D KLINE: Thank you.
72 D ASARE: Is that all?
73 D KLINE: That is all.
74 A ¶ He nods to the judge and sits.
75 A Asare stays where she is for a moment, hands in her lap, and then slowly rises.
76 A Her legs are unsteady.
77 A She walks down from the stand, past the table, past the gallery, to the back door.
78 A ¶ She pushes it open herself.
79 A Light spills in.
80 A She goes out into it.
81 A ¶ Judge Marchand watches the empty doorway.
82 A She picks up her gavel, then sets it down without striking.
83 D JUDGE MARCHAND: We will adjourn until two.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02329.json
### SCENE s02329 | INT. CAROUSEL PAVILION - DEPOSITION - DAY
Detected names (may be incomplete or contain aliases): ISADORA FENWICK-ADEYEMI, HAROLD BENNIGAN, MEI-LING, RAFAEL SOLORZANO
1 A ¶ A shuttered amusement park, midwinter.
2 A Painted horses frozen mid-gallop circle a conference table dragged onto the platform.
3 A Dust floats in the cold light from the high windows.
4 A ¶ ISADORA FENWICK-ADEYEMI, 50s, sits upright at the head of the table, a legal pad squared before her.
5 A She has not yet touched her pen.
6 A ¶ HAROLD BENNIGAN, 70, the witness, sits opposite in a camel overcoat that smells of cedar.
7 A His hands rest on a cane.
8 A He studies the brass pole beside him as if it might speak.
9 A ¶ MEI-LING, 20s, the court reporter, bends over her steno machine in the corner.
10 A Her fingers wait.
11 A ¶ RAFAEL SOLORZANO, 40s, opposing counsel, lounges in a chair three seats down.
12 A His tie is loosened.
13 A He has the air of a man who has lost nothing yet.
14 D ISADORA: Mr. Bennigan, you operated this carousel for how many years?
15 D HAROLD: Thirty-one.
16 D ISADORA: And in that time how many children rode it?
17 D HAROLD: I don't know. Thousands.
18 D ISADORA: Tens of thousands, by the park's own ledger.
19 D HAROLD: If you say so.
20 D RAFAEL: Objection. She's testifying.
21 D ISADORA: I'm reading from Exhibit Four.
22 D RAFAEL: Which my client hasn't seen.
23 D ISADORA: He signed the page.
24 A ¶ Harold shifts.
25 A The cane taps the platform.
26 A A horse above him seems to lean closer.
27 D ISADORA [CONT'D]: On the tenth of August, a brake pin sheared. A girl was thrown. Do you remember that?
28 D HAROLD: I remember.
29 D ISADORA: Was the pin inspected that morning?
30 D HAROLD: It was.
31 D ISADORA: By whom?
32 D HAROLD: By me.
33 D ISADORA: Was it replaced?
34 D HAROLD: It was not.
35 D ISADORA: Why not?
36 D HAROLD: Because the part was on order.
37 D ISADORA: For how long?
38 D HAROLD: Six weeks.
39 D ISADORA: And you ran the carousel anyway.
40 D RAFAEL: Objection.
41 D ISADORA: He said it was on order. I'm asking if he ran it.
42 D HAROLD (very quietly): I ran it.
43 D ISADORA: Because the owner told you to.
44 D HAROLD: Because that was the job.
45 D ISADORA: Was that the owner's instruction?
46 D HAROLD: Yes.
47 D RAFAEL: Harold, don't.
48 D ISADORA: Counsel, you may instruct the witness not to answer. You may not coach him.
49 A ¶ Rafael rises half out of his chair and sits down again.
50 A Mei-Ling's fingers fly.
51 D ISADORA [CONT'D]: Mr. Bennigan, did the owner put that instruction in writing?
52 D HAROLD: I kept the note.
53 D ISADORA: Where is it?
54 D HAROLD: In my coat.
55 A ¶ A silence.
56 A Rafael stares at the old man's pocket as if it might ignite.
57 A Harold reaches in.
58 A Draws out a folded yellow paper.
59 A Lays it on the table.
60 A It sits there, pale, over the scarred wood.
61 A ¶ Isadora does not reach for it.
62 A She waits until Rafael does.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00499.json
### SCENE s00499 | INT. DINNER THEATER - BACKSTAGE - NIGHT
Detected names (may be incomplete or contain aliases): BARNABY CROWE, DIANTHA FOSTER, GWEN, TAKAHASHI
1 A ¶ A cramped corridor behind a painted flat.
2 A Costume racks, a mirror ringed with bulbs, a prop table covered in plastic daggers and one real turkey leg.
3 A Muffled laughter from the audience.
4 A ¶ BARNABY CROWE (50s, leading man, powdered wig, gout slipper) strides in and flings his hat on the table.
5 A Behind him, DIANTHA FOSTER (30s, ingénue, corset half-laced) hurries, hem in her fist.
6 A Last in is STAGE MANAGER GWENDOLYN "GWEN" TAKAHASHI (40s, black clothes, headset, clipboard) who reads from her list as she walks.
7 D BARNABY (to everyone): Who moved my snuffbox?
8 D GWEN: It's on the mantle, Mr. Crowe.
9 D BARNABY: There is no mantle!
10 D GWEN: It's painted.
11 D BARNABY (muttering): I will not play Hamlet opposite a painted mantle.
12 D DIANTHA: Barnaby, it's "Much Ado."
13 D BARNABY: Is it? I thought we'd done that.
14 D GWEN (to the room): Five minutes, people.
15 D DIANTHA (low, to herself): Breathe. Breathe. It's only two hundred people and a soup course.
16 D BARNABY: Darling, you were magnificent in act one.
17 D DIANTHA: I forgot my line.
18 D BARNABY: Nobody noticed.
19 D DIANTHA: You said "well-played" and then walked offstage.
20 D BARNABY: It was a very good pause.
21 D GWEN: Diantha, your cue is the bell. Mr. Crowe, yours is when she starts to cry.
22 D BARNABY: She's crying?
23 D DIANTHA: Not yet.
24 D GWEN: Then enter on the bell.
25 A ¶ A bell tolls, loud, from the stage.
26 A All three freeze, then bolt through the curtain in a flurry of lace and a clatter of turkey bones.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00349.json
### SCENE s00349 | INT. PIANO RESTORATION WORKSHOP - DAY
Detected names (may be incomplete or contain aliases): NOELLE FAIRCHILD, DELPHINE ARCHAMBAULT, LEO FINCH
1 A ¶ A high-ceilinged loft with north light.
2 A Disemboweled pianos stand open on every side, their strings like harps, their hammers laid out on felt cloths in long neat rows.
3 A Sawdust and varnish and old ivory.
4 A ¶ NOELLE FAIRCHILD, fifties, the restorer, in a leather apron and reading glasses pushed up into grey curls, bends over a half-dismantled Steinway, a tuning lever in her fist.
5 A ¶ DELPHINE ARCHAMBAULT, thirties, her apprentice, stands across the keybed holding a cloth, the curve of her jaw set hard.
6 A ¶ LEO FINCH, sixties, the piano's owner, in a rumpled tweed jacket, sits on a bench by the window watching them both, a cane across his knees.
7 D NOELLE: Delphine, the damper felt.
8 D DELPHINE: Which side?
9 D NOELLE: The left. The one that's flat.
10 A ¶ Delphine hands her the felt.
11 A She does not let go at once.
12 A Noelle gives it one sharp tug, and Delphine lets go, and neither looks at the other, and Leo studies the dust in the light.
13 D LEO: You two have been at this since September.
14 D NOELLE: Fourteen weeks.
15 D DELPHINE: Fifteen.
16 D LEO: It was my wife's piano. She played it every morning for forty years.
17 D NOELLE: I know.
18 D LEO: Delphine knows too. She came to the funeral.
19 D DELPHINE: I did.
20 A ¶ Noelle sets down the lever.
21 A She straightens slowly, one hand on the small of her back, and looks at Delphine for the first time in the scene.
22 A Delphine meets her gaze and does not blink.
23 D NOELLE: She wanted the middle C re-voiced.
24 D LEO: Who did?
25 D NOELLE: She did. Your wife.
26 D DELPHINE: She told me. She told me last spring, the day I started.
27 D NOELLE: She told you.
28 D DELPHINE: She didn't want to hurt you.
29 A ¶ Leo gets up.
30 A The cane rattles on the floor.
31 A He crosses to the keyboard and presses middle C. A flat, dull note.
32 D LEO: Hurt me how?
33 D DELPHINE: She said it had been out of tune for years and she played it anyway because you loved it.
34 A ¶ Leo presses it again, harder.
35 A The note thuds and dies.
36 A He keeps his finger on the key.
37 A His shoulders bend.
38 D NOELLE: Leo.
39 D LEO: She never said.
40 D NOELLE: She never would.
41 A ¶ He lifts his hand.
42 A Delphine steps forward as if to touch his arm and stops.
43 A Noelle takes up the tuning lever and sets it against the pin, and nods once at Delphine, and Delphine nods back, and together they begin, slowly, to bring the note home.
