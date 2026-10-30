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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02474.json
### SCENE s02474 | EXT. BRAZOS RIVER FERRY - DUSK
Detected names (may be incomplete or contain aliases): MARSHAL AUGUSTINE PELL, LOLA TREVINO, BARNABY, ROOK STALLWORTH
1 A ¶ A flat-bottomed ferry the colour of old tobacco hangs on a rope across a river the width of a town street and the colour of weak coffee.
2 A Sun lies low and red behind the cottonwoods.
3 A ¶ MARSHAL AUGUSTINE PELL, 50s, long grey coat, a face like cracked saddle leather, stands at the bow with his hand on his Colt.
4 A Beside him sits LOLA TREVINO, 20s, wrists bound with rope, hair full of dust, staring at the water.
5 A ¶ At the stern, BARNABY, 70, the ferryman, thin as a fence rail, hauls on the rope hand over hand.
6 A Across the river, on the far bank, two riders have stopped under the trees: the brothers DUNCAN and ROOK STALLWORTH, one fat, one wiry, rifles across their saddles.
7 D PELL: Barnaby. How long to the landing?
8 D BARNABY: Ten minutes. Eight if you quit looking at them.
9 D PELL: They're not going anywhere.
10 D LOLA: Neither am I.
11 A ¶ Pell does not turn.
12 A Duncan raises a hand.
13 A Rook, beside him, does not.
14 A ¶ The ferry creaks on.
15 A Rope hisses through Barnaby's gloves.
16 A The riders begin to walk their horses down to the water.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00239.json
### SCENE s00239 | EXT. BRIDGE OF BONES OVER THE GREY GORGE - DAWN
Detected names (may be incomplete or contain aliases): AELFWYN THORNBURY, GRIM, OKORO-SHALE, THISTLE-WREN, BROTHER CASSIAN VELLACOTT
1 A ¶ A bridge strung between two cliffs, built from the ribs of some long-dead leviathan.
2 A Fog fills the gorge below.
3 A Mountain wind pulls at cloaks.
4 A ¶ A party of four stands at the near end.
5 A ¶ AELFWYN THORNBURY (30s, ranger, bow across her back, scar through one eyebrow) tests the first rib with her boot.
6 A ¶ GRIMBALD "GRIM" OKORO-SHALE (50s, dwarf-born, braided beard, iron-shod staff) leans on the staff and glares at the fog.
7 A ¶ THISTLE-WREN (late teens, half-fey, hair like dandelion down) hops from foot to foot, humming.
8 A ¶ BROTHER CASSIAN VELLACOTT (40s, wandering monk, wooden prayer beads, travel-worn robe) kneels briefly, touches the stone, rises.
9 D AELFWYN (to the group): We cross single file. Spacing of three paces. Anyone who stumbles, the others hold.
10 D GRIM (muttering): Three paces. As if the fog will respect it.
11 D THISTLE-WREN: It will! I asked it nicely!
12 D AELFWYN: Thistle, you don't ask fog.
13 D THISTLE-WREN: That's why it listens.
14 D CASSIAN (quietly, to Aelfwyn): The ribs are old. Older than the oldest prayer I know.
15 D AELFWYN: Will they hold?
16 D CASSIAN: They have so far.
17 A ¶ Aelfwyn nods.
18 A Steps out onto the bridge.
19 A The bone creaks, then settles.
20 A She takes three paces and stops.
21 A Grim follows.
22 A Thistle-Wren follows Grim, humming louder.
23 A Cassian takes the rear, counting his beads.
24 A ¶ Halfway across, a gust slams the bridge sideways.
25 A The party freezes.
26 A Thistle-Wren grabs Grim's belt.
27 A Grim drops his staff to the rib to steady himself.
28 A Aelfwyn kneels, one hand on the bone, the other signaling Cassian to hold.
29 A The fog thickens until none of them can see more than an arm's length ahead.
30 D GRIM (to himself): Idiot dwarf. Never trust a bridge made of something that died.
31 D CASSIAN (calling): Everyone, breathe. Let the wind pass through you.
32 D THISTLE-WREN: I'm trying! My lungs are very small!
33 D AELFWYN: Quiet, all of you. Listen.
34 A ¶ They listen.
35 A Far below, in the white, something large exhales.
36 D THISTLE-WREN (whispering): It's the leviathan.
37 D GRIM: It's dead.
38 D THISTLE-WREN: Its ghost isn't.
39 D CASSIAN (softly): Then we cross as guests.
40 A ¶ The wind drops.
41 A The fog parts for a moment, revealing the far side: a cairn, a green slope, a thin road winding into pines.
42 D AELFWYN: Move. Now. Quick and quiet.
43 A ¶ They run, three paces apart, bone ringing under their boots like a xylophone of the dead.
44 A Thistle-Wren giggles.
45 A Grim wheezes.
46 A Cassian's beads clack.
47 A Aelfwyn counts, lips tight.
48 A ¶ They reach the far cliff and tumble onto grass.
49 A Grim lies flat, staring at the sky.
50 D GRIM (to the sky): Never again.
51 D THISTLE-WREN: We have to cross back.
52 D GRIM (to himself): I'll sleep here.
53 A ¶ Behind them, the bridge sighs and sways.
54 A The fog closes over it like a lid.
55 D CASSIAN (to the group): We should keep moving. The road is long.
56 D AELFWYN (offering her hand to Grim): Up, old friend.
57 A ¶ He takes it.
58 A She hauls him upright.
59 A The four stand in a row, looking down the road.
60 D THISTLE-WREN: Where does it go?
61 D AELFWYN: Wherever we go.
62 A ¶ They start walking.
63 A The wind follows at their heels, gentle now, almost apologetic.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01490.json
### SCENE s01490 | INT. ROOFTOP GREENHOUSE, APARTMENT BLOCK - DAWN
Detected names (may be incomplete or contain aliases): PHILOMENA ADEBAYO-STRAND, NIKOLAI, ^PHILOMENA
1 A ¶ Tomato cages, herb pots, a rusted bistro table.
2 A The city wakes in haze below.
3 A ¶ PHILOMENA ADEBAYO-STRAND (60s, cardigan, trowel) waters basil.
4 A Across from her, her son NIKOLAI (30s, borrowed suit, unslept) cradles a mug.
5 A ¶ She waters.
6 A He sips.
7 A Neither looks.
8 D PHILOMENA: You came early.
9 D NIKOLAI: Train was on time.
10 D PHILOMENA: First time in years.
11 A ¶ He nods.
12 A She moves to the tomatoes.
13 A He follows with his eyes.
14 D NIKOLAI: It looks good up here.
15 D PHILOMENA: Your father built the cages.
16 D NIKOLAI: I remember.
17 D PHILOMENA: He'd have hated the basil.
18 D NIKOLAI: He hated everything green.
19 A ¶ They share a quiet smile.
20 A It lingers.
21 D PHILOMENA: Nik.
22 D NIKOLAI: Mm.
23 A ¶ He sets down the mug.
24 A She sets down the can.
25 A They look at each other for the first time.
26 D NIKOLAI: I'm sorry I wasn't here.
27 D ^PHILOMENA: I sold the house.
28 A ¶ A pause.
29 A Neither moves.
30 A The basil drips.
31 D NIKOLAI: You what?
32 D PHILOMENA: It's done. Papers signed Friday.
33 A ¶ Nikolai picks up the mug.
34 A Sets it down.
35 A Picks it up again.
36 A She watches his hands.
37 A Behind them, the sun clears the rooftops.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01655.json
### SCENE s01655 | INT. STALLED ELEVATOR, LAW FIRM TOWER - NIGHT
Detected names (may be incomplete or contain aliases): MARGUERITE DUVAL, ROLAND CHASE, ELSPETH, JAMAL
1 A ¶ A brushed steel box.
2 A Four people.
3 A A dim emergency light.
4 A The floor indicator reads 14 and does not change.
5 A ¶ MARGUERITE DUVAL, 50s, opposing counsel, in a navy suit, holds a briefcase to her chest.
6 A ROLAND CHASE, 40s, lead attorney, loosens his tie.
7 A ELSPETH, 30s, a junior associate, sits on the floor with her laptop.
8 A JAMAL, 50s, the building's maintenance man, presses the intercom.
9 D MARGUERITE: Roland, I'm not signing anything in an elevator.
10 D ROLAND: You don't have a choice.
11 D MARGUERITE: I always have a choice.
12 D ROLAND: Name one.
13 D MARGUERITE: I can wait.
14 D ROLAND: For what?
15 D MARGUERITE: For you to run out of air.
16 D ELSPETH: There's plenty of air.
17 D JAMAL: There's plenty of air. The cables are the problem.
18 D ROLAND: Mr. Jamal, how long?
19 D JAMAL: Hour. Maybe two.
20 D MARGUERITE: Two hours?
21 D ELSPETH: It's in the contract, Marguerite.
22 D MARGUERITE: The elevator?
23 D ELSPETH: The deadline. Midnight.
24 D MARGUERITE (checking watch): It's eleven-twenty.
25 D ROLAND: You see. You see.
26 D MARGUERITE: I see a man who parked his deal in an elevator.
27 D JAMAL (into intercom): Dispatch, we've got a stuck car on fourteen. Four occupants. Two lawyers, one associate, one me.
28 A ¶ The intercom crackles.
29 A Jamal listens, nods.
30 D ELSPETH: What did they say?
31 D JAMAL: Twenty minutes. They always say twenty minutes.
32 D ROLAND: Elspeth, print the settlement.
33 D ELSPETH: There's no printer.
34 D ROLAND: Then write it by hand.
35 D ELSPETH: In what?
36 D ROLAND: Anything.
37 A ¶ Elspeth opens her laptop.
38 A Marguerite snatches it, and Roland lunges, and the laptop tumbles between them, bounces off the wall, and slides to Jamal's feet.
39 A He picks it up and holds it carefully, like a baby.
40 D JAMAL: Folks, I got a rule in my elevators.
41 D MARGUERITE (overlapping): This isn't your elevator --
42 D ROLAND (overlapping): Give it to me --
43 D ELSPETH (overlapping): It's mine, actually --
44 D JAMAL: No fighting. No yelling. No lawyering.
45 A ¶ The three of them stop.
46 A The emergency light flickers.
47 A A groan from the cables above, deep and long.
48 A ¶ The car drops two inches.
49 A Everyone grabs a rail.
50 A Marguerite drops her briefcase.
51 A Roland sits down hard.
52 A Elspeth screams, once, short and sharp.
53 A Jamal alone remains standing.
54 D JAMAL [CONT'D]: That's the cable settling.
55 D MARGUERITE (whispering): That's the cable settling?
56 D JAMAL: That's what it sounds like when it's settling.
57 D ELSPETH: And when it's not?
58 D JAMAL: You won't have to ask.
59 A ¶ Silence.
60 A Roland retrieves a pen from his pocket.
61 A Marguerite, after a moment, holds out her hand.
62 A He gives it to her.
63 A ¶ She opens her briefcase, draws a thick document, and signs the last page on the wall of the elevator.
64 A The ink bleeds into the steel.
65 D MARGUERITE: Witness, Mr. Jamal.
66 D JAMAL: I witness.
67 A ¶ He signs.
68 A Hands the pen back.
69 A The car shudders.
70 A The indicator light flickers.
71 A 14 becomes 13.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02269.json
### SCENE s02269 | EXT. RUINED CATHEDRAL SQUARE - DUSK
Detected names (may be incomplete or contain aliases): LIEUTENANT CORDELIA BRANDT, SERGEANT OSEI, PRIVATE MIKHAIL
1 A ¶ The nave's roof is gone.
2 A The columns stand like charred teeth against a violet sky.
3 A Rubble lies in drifts, and in the middle of it, fallen from its niche, an enormous stone angel lies on her back with her wings broken, her face turned to the clouds.
4 A ¶ LIEUTENANT CORDELIA BRANDT, thirties, hatless, her fair hair gone dark with dust, sits on the angel's chest with a map across her knees and a cigarette burned down to the filter.
5 A SERGEANT OSEI, forties, tall, broad, a rifle slung across his back, crouches to refill a canteen from a cracked fountain, and PRIVATE MIKHAIL, nineteen, thin as a rake, leans against a pillar with his eyes closed and his arms wrapped around a bundle of blankets and every so often his lips move, as though in prayer or in sleep.
6 A ¶ For a long time, none of them speaks.
7 A The wind lifts ash off the stones.
8 D OSEI: Lieutenant, it's almost dark.
9 D BRANDT: I know.
10 D OSEI: Do we stay?
11 D BRANDT: For tonight.
12 A ¶ She folds the map.
13 A Puts it in her jacket.
14 A Her fingers linger on the edge of the angel's stone wing, and then she takes them away.
15 D OSEI: It's a good place.
16 D BRANDT: It's a church.
17 D OSEI: It's a roof with no roof.
18 A ¶ She huffs a breath that might be a laugh.
19 A Mikhail opens his eyes.
20 D MIKHAIL: Sorry. I wasn't sleeping.
21 D OSEI: You were sleeping standing up.
22 D MIKHAIL: I was resting my eyes.
23 D OSEI: Resting. Mm.
24 A ¶ Mikhail slides down the pillar to sit.
25 A He unwraps the blankets, handing one to Osei without being asked.
26 A Osei nods thanks and shakes it out.
27 A They spread it on the stones beside the angel's head.
28 D BRANDT: Where's the radio?
29 D MIKHAIL: Dead. I tried again an hour ago.
30 D BRANDT: Batteries?
31 D MIKHAIL: Gone.
32 D BRANDT: Then we're on our own.
33 D OSEI: We have been.
34 A ¶ She looks at him.
35 A He keeps his eyes on the canteen.
36 D BRANDT: Sergeant, if I told you we'd be home by Christmas, would you believe me?
37 D OSEI: No, Lieutenant.
38 D BRANDT: Good.
39 A ¶ She smiles, small and tired.
40 A Mikhail, half-asleep, mumbles something and curls against the blanket.
41 D OSEI: What did he say?
42 D BRANDT: His mother's name, I think.
43 A ¶ Osei lays his own blanket over the boy's shoulders.
44 A He sits, back against the angel's stone hip, the canteen between his knees.
45 A Brandt slides down to sit beside him.
46 A ¶ For a time they watch the sky darken, the first star appearing between two broken columns.
47 D OSEI: My grandmother said every church has an angel left standing.
48 D BRANDT: Yours fell.
49 D OSEI: Then she's resting.
50 A ¶ Brandt rests her head against the cold stone of the wing.
51 A Her cigarette, long out, drops from her fingers.
52 A Nobody picks it up.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01134.json
### SCENE s01134 | INT. BOMBED CATHEDRAL - ORGAN LOFT - DUSK
Detected names (may be incomplete or contain aliases): SERGEANT TAVARES, STRANGER, LUKAS
1 A ¶ Half the nave is open to the sky.
2 A The great organ pipes hang bent and blackened like the ribs of a burned animal.
3 A Plaster dust drifts through the last light, and somewhere below, water drips from a broken font.
4 A Behind a carved screen on the loft, the stairs to the nave have collapsed into rubble.
5 A ¶ SERGEANT TAVARES (30s, sapper's gloves, a rifle he has stopped trusting) crawls onto the loft on his stomach, dragging a pack that clinks with wire and blasting cord.
6 A He freezes.
7 A A boy in a grey uniform, a STRANGER (teens, hollow cheeks, a cracked helmet twice his size), sits against the base of the organ console with a service pistol in both hands, aimed at Tavares's forehead, trembling.
8 A ¶ They stare at each other across ten feet of splintered oak.
9 D TAVARES (quiet): Easy. Easy now.
10 D STRANGER (in halting English): You stop. I shoot.
11 D TAVARES: I've stopped. See?
12 A ¶ He flattens his palms on the floor.
13 A The Stranger doesn't lower the pistol.
14 A A bell somewhere in the tower sounds once, thin and cracked, answering the wind.
15 D TAVARES [CONT'D]: You're hurt.
16 A ¶ The Stranger glances at his left leg.
17 A Blood has soaked through the trouser and dried black to the knee.
18 A He looks back up and shrugs with the exaggerated carelessness of someone who is very afraid.
19 D STRANGER: It is nothing.
20 D TAVARES: It's something. It's a lot of something.
21 A ¶ The Stranger swallows.
22 A The pistol wavers, steadies.
23 A Tavares breathes out slowly through his nose and lets his shoulders drop an inch, an invitation, a language older than either of their armies.
24 D TAVARES [CONT'D]: My name is Tavares. Mateus Tavares.
25 D STRANGER: I do not want your name.
26 D TAVARES: Then you can give me yours later.
27 A ¶ Silence.
28 A The wind finds a pipe and moans through it, a single hollow note.
29 A The Stranger flinches.
30 A The pistol dips toward the floor and snaps up again.
31 D TAVARES [CONT'D]: That's the wind. Just the wind.
32 A ¶ The Stranger nods, wet-eyed.
33 A Tavares slides one hand to his pack and loosens the strap with two fingers.
34 A Very slowly he pulls out a flat tin, thumbs it open, and sets it on the floor halfway between them.
35 A Hard biscuit.
36 A A cube of chocolate wrapped in wax paper.
37 D TAVARES [CONT'D]: Eat.
38 A ¶ The Stranger doesn't move.
39 A His stomach growls loud in the hush of the loft.
40 A He winces.
41 A Tavares smiles faintly and slides the tin an inch closer with his boot.
42 D TAVARES [CONT'D]: No trick. If I wanted you dead, I'd have let the stairs do it.
43 D STRANGER (a whisper): Lukas.
44 D TAVARES: Sorry?
45 D LUKAS: My name. Lukas.
46 A ¶ Tavares nods as though a contract has been signed.
47 A He lowers himself to sit, back against a pillar, a calm arm's length away from the tin.
48 A Lukas reaches for the biscuit with his left hand, never lowering the pistol in his right.
49 A He bites.
50 A Chews.
51 A His eyes close for one second, an animal relief.
52 D TAVARES: Good?
53 D LUKAS: It is stale.
54 D TAVARES: It's army.
55 A ¶ Lukas almost laughs.
56 A The pistol sinks to his lap at last.
57 A For a while neither of them speaks.
58 A The light goes amber, then rust.
59 A The wind rises, and the broken pipes take up a long sigh.
60 D LUKAS: You are here to blow up the church.
61 D TAVARES: I'm here to blow up the tower. The church is already blown up.
62 D LUKAS: My brother is in the tower.
63 A ¶ Tavares goes still.
64 A He studies the boy.
65 D TAVARES: Your brother?
66 D LUKAS: He is the observer. He spots for the guns. I come to bring him water and the bell wire is cut and the stairs are... (gestures at the rubble) ...and then you.
67 D TAVARES: How old is he?
68 D LUKAS: Twenty-two.
69 A ¶ Tavares pulls a canteen from his belt.
70 A He unscrews it and holds it out across the gap.
71 A Lukas hesitates, then takes it, and drinks like a man who has forgotten how.
72 D TAVARES: Does he have a radio up there?
73 D LUKAS: Yes.
74 D TAVARES: Could he hear you if you shouted?
75 D LUKAS: If I shouted loud.
76 A ¶ Tavares lifts his charges from the pack, one by one, and lays them on the floor in a row.
77 A Then, with a deliberate slowness, he cuts the fuse on each, a clean snip, and drops the lengths of cord into the dark under the console.
78 D TAVARES: Tell him the sergeant says come down. Tell him nobody's firing. Tell him the sun's going.
79 A ¶ Lukas stares at the cut fuses.
80 D LUKAS: You will be punished.
81 D TAVARES: Probably.
82 D LUKAS: Why?
83 A ¶ Tavares looks up at the shattered clerestory, at the first star pricking through.
84 D TAVARES: Because I've got a brother too.
85 A ¶ Lukas stands, gripping the console for balance.
86 A He cups his hands around his mouth and shouts something in his own language up the long throat of the tower, a name, and then a word that means come.
87 A The echo comes back down, thin, unanswered.
88 A ¶ They wait.
89 A The first star becomes two.
90 A Finally, from far above, a faint voice calls back.
91 A ¶ Lukas turns to Tavares, and for the first time the boy is a boy, grinning, tears on his dirty face.
92 A Tavares leans his head against the stone pillar and closes his eyes.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02026.json
### SCENE s02026 | INT. CLOSED OBSERVATION TOWER - STAIRWELL LANDING - NIGHT
Detected names (may be incomplete or contain aliases): AGENT RENATA VOSS, ELIAS MBEKI, DEPUTY HANNAH OAKES, SIREN, DOCTOR AMARA LINDQVIST
1 A ¶ Concrete.
2 A One bulb.
3 A Rain in the vents.
4 A ¶ AGENT RENATA VOSS (40s) crouches over a duffel bag.
5 A Zipper open.
6 A Cash, passports, a phone.
7 A Her breathing is slow, controlled.
8 A ¶ Footsteps below.
9 A Heavy.
10 A Climbing.
11 A ¶ She zips the bag.
12 A Stands.
13 A Back to the wall.
14 A ¶ A figure rounds the landing.
15 A ELIAS MBEKI (50s), coat soaked, pistol low.
16 A He stops.
17 A Sees her.
18 A Neither moves.
19 A ¶ Behind him, DEPUTY HANNAH OAKES (30s), radio on her shoulder, edges up the steps.
20 D ELIAS (low): Renata.
21 D RENATA: Elias.
22 D HANNAH: Hands where I can see them!
23 D ELIAS: Hannah, stand down.
24 A ¶ Renata's eyes flick to the bag.
25 A His follow.
26 A Both lunge at once.
27 A Elbows, knees, a snarl.
28 A The bag skids across the concrete.
29 A ¶ She hooks his leg.
30 A He drives her into the railing.
31 A It groans.
32 A ¶ The pistol clatters down the stairs.
33 A Hannah ducks aside as it passes her boots.
34 A ¶ He gets a forearm across her throat.
35 A She bites his wrist.
36 A He yanks free.
37 A ¶ Hannah raises her weapon.
38 A Shaky.
39 A Trying to find a clean line.
40 D HANNAH: Stop! Both of you!
41 A ¶ They don't.
42 A Then a SIREN builds outside.
43 A Red and blue strobe through the vent slats.
44 A ¶ They freeze, still tangled.
45 A Breathing hard.
46 A Rain drums on the roof.
47 A ¶ DOCTOR AMARA LINDQVIST (60s, civilian) appears at the top of the stairs, hands raised, trembling, a thermos in one.
48 D AMARA (breathless): Please. I only came up to fix the lamp.
49 A ¶ Nobody answers.
50 A The siren fades past.
51 A ¶ Renata lets go first.
52 A He follows.
53 A They step apart.
54 D ELIAS (tired): It's over.
55 D RENATA: It never is.
56 A ¶ She sits down on the stairs, defeated, and holds out her wrists.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02044.json
### SCENE s02044 | EXT. SALT FLAT - DAWN
Detected names (may be incomplete or contain aliases): CORDELIA ADEBAYO-FROST, DEZ, MAKINDE, STRANGER, TAVITA LEOTA, MATTHIAS
1 A ¶ A blinding plain of cracked white earth under a pink sky.
2 A Heat shimmer does not yet rise.
3 A A single abandoned jeep, windshield spiderwebbed, sits sunk to its axles.
4 A Beside it, a tarp stretched on poles makes a shelter no bigger than a closet.
5 A ¶ Under the tarp, DR. CORDELIA ADEBAYO-FROST (40s, geologist, sunhat, parched lips) rations water into four tin cups with the fierce concentration of a priest.
6 A Next to her, her field assistant DESMOND "DEZ" MAKINDE (20s, bandaged ankle) leans against the jeep's tire, eyes closed.
7 A ¶ Further off, a STRANGER sits cross-legged on the salt, facing away, a battered canvas pack beside him.
8 A He has been there since midnight.
9 A He has not spoken.
10 A ¶ Standing watch at the tarp's edge, TAVITA LEOTA (50s, the driver, wide-shouldered, a rag knotted over his head) scans the horizon through binoculars.
11 D CORDELIA: Dez, drink.
12 D DEZ: Save it.
13 D CORDELIA: Drink.
14 A ¶ He opens his eyes, takes the cup, swallows.
15 A She watches the cup, not the man.
16 D TAVITA: Nothing moving.
17 D CORDELIA: There never is, until there is.
18 D TAVITA (lowering the binoculars): I do not like that one.
19 D CORDELIA: Who?
20 D TAVITA: The man.
21 A ¶ He nods toward the Stranger.
22 A Cordelia looks.
23 A The Stranger has not moved.
24 D CORDELIA: He sat down and has not asked for anything.
25 D TAVITA: That is what worries me.
26 D DEZ: Maybe he's just tired.
27 D TAVITA: Tired men ask for water.
28 A ¶ Cordelia rises, takes a fourth cup, crosses the salt.
29 A The crust crunches.
30 A She stops a few paces behind the Stranger.
31 D CORDELIA: You are welcome to this.
32 D STRANGER (without turning): Thank you, Doctor.
33 D CORDELIA: You know who I am.
34 D STRANGER: I know you came looking for the old brine lake. I came for the same reason.
35 A ¶ He rises, brushes salt from his knees, turns.
36 A Gaunt, sunburnt, mid-fifties, eyes the color of weak tea.
37 A He takes the cup but doesn't drink.
38 D CORDELIA: And you are?
39 D STRANGER: Matthias.
40 D CORDELIA: Matthias what?
41 D MATTHIAS: Matthias is enough.
42 D TAVITA (calling): Doctor! Step back from him.
43 A ¶ Cordelia does not move.
44 A Dez struggles upright.
45 A Matthias glances at Tavita, at Dez, and then at the sky, where a thin line of dust has begun to climb the horizon.
46 D MATTHIAS: You should drink that yourselves. A truck is coming.
47 D TAVITA: Whose truck?
48 D MATTHIAS: Mine.
49 A ¶ A beat.
50 A Everyone looks at the dust.
51 D DEZ (whispering): He was waiting for rescue the whole time?
52 D CORDELIA: No. He was waiting for us.
53 A ¶ Tavita raises his binoculars, then drops them, and takes a step backward.
54 A Dez grabs the jeep's hood.
55 A Cordelia, calm, sets her cup on the salt.
56 A All four stand frozen under the pink sky as the engine's drone grows.
57 D MATTHIAS: Don't be afraid. I only want what you are looking for.
58 D CORDELIA: And if we say no?
59 D MATTHIAS: Then you may walk home.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00777.json
### SCENE s00777 | INT. DRIVE-IN PROJECTION BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): NELL AUGUSTINE, SULLY, DOT, FEENEY, KWABENA ASARE, BRYCE
1 A ¶ Cramped.
2 A Dust in the lamp beam.
3 A A reel spins on its own.
4 A Through the slit window: an empty lot, a flickering screen.
5 A ¶ NELL AUGUSTINE, 20s, the projectionist, stands rigid.
6 A Beside her, her brother SULLY, 16, holds a flashlight with both hands.
7 A DOROTHEA "DOT" FEENEY, 60s, the owner, is wedged against the film cabinet, mouthing a prayer.
8 A At the door, MR. KWABENA ASARE, 50s, a customer with a ruined suit, keeps one shoulder to the wood while a hand slams from the other side.
9 A At the window, the booth's cat-eyed night guard BRYCE, 30s, whips the curtain shut, but a pale arm slides through the vent and clamps his ankle, dragging him down.
10 D BRYCE: Dot! Dot, pull!
11 D DOT: I'm pulling, Bryce, I'm pulling!
12 A ¶ Sully swings the flashlight onto the arm.
13 A Under the light, the skin peels like old film.
14 D SULLY: Nell, it's on the reel!
15 D NELL: Don't look at the screen!
16 A ¶ Kwabena braces.
17 A The door cracks.
18 A Nell grabs the lamp housing and tears it open.
19 A White light blasts into the vent.
20 A The arm SCREAMS and lets go.
21 A ¶ Silence.
22 A The reel keeps spinning.
23 D KWABENA (panting): Is it gone?
24 A ¶ On the screen, in huge flickering black and white, something turns toward the camera.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00542.json
### SCENE s00542 | INT. ORBITAL HYDROPONICS RING - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): KESTREL ODUYA, IXCHEL TORRES-WAI, BRAM VANDERHOEK, OMAR EL-SAYED
1 A ¶ Rows of green under violet LEDs.
2 A Nutrient mist.
3 A Tomatoes on vines the length of a bus.
4 A Everything is damp and humming.
5 A ¶ KESTREL ODUYA, 30s, a botanist in a stained lab coat, pinches leaves between her fingers.
6 A Cuts a sample.
7 A Bags it.
8 A IXCHEL TORRES-WAI, 20s, her junior, trails with a tablet, scribbling.
9 A BRAM VANDERHOEK, 40s, a station tech, jogs down the central aisle, wrench in hand.
10 D BRAM: Kes. The mist valves are fluctuating.
11 D KESTREL: How badly?
12 D BRAM: Row twelve is flooding.
13 A ¶ She runs.
14 A Ixchel follows.
15 A The mist thickens as they go, and the LEDs flicker, a violet strobe.
16 A ¶ Row twelve.
17 A A tomato plant slumps, roots exposed, water pooling at its base.
18 A Bram kneels, jams the wrench under the manifold.
19 A He grunts.
20 A Pulls.
21 A ¶ The pipe bursts.
22 A Water jets across the aisle.
23 A Ixchel yelps.
24 A Kestrel ducks.
25 A Bram swears and falls backward onto the deck, drenched.
26 D KESTREL: Shut it off!
27 D BRAM: I'm trying!
28 A ¶ They scramble.
29 A Kestrel finds the valve.
30 A She yanks it.
31 A The spray dies.
32 A The three of them stand soaked and breathless.
33 A ¶ OMAR EL-SAYED, 40s, a surveyor in a grey jumpsuit, appears at the end of the row, a sealed data case in one hand and a badge on a lanyard.
34 A ¶ He doesn't smile.
35 A He holds out the badge.
36 D OMAR: Station Authority. Section audit.
37 D KESTREL: Tonight?
38 D OMAR: Tonight.
39 A ¶ He walks down the row, stepping over puddles.
40 A His eyes find the broken pipe.
41 A The slumped plant.
42 A The sample bag.
43 A Kestrel steps in front of it.
44 D BRAM (whispering to Ixchel): That's not on the schedule.
45 D IXCHEL (whispering back): It never is.
46 D OMAR: Dr. Oduya. You've been logging Row twelve as nominal for six months.
47 D KESTREL: Because it was.
48 D OMAR: Your yield numbers say otherwise.
49 A ¶ He opens the case.
50 A A screen flares to life.
51 A Columns of numbers, red.
52 A ¶ Ixchel grabs Bram's sleeve.
53 A Bram sets down his wrench.
54 A Slowly, Kestrel picks up the sample bag and holds it behind her back.
55 D KESTREL: The plant's mutated.
56 D OMAR: I know.
57 A ¶ Silence.
58 A The mist hisses.
59 D OMAR [CONT'D]: So does the Council. They sent me to see if it's dangerous.
60 D KESTREL: And?
61 A ¶ He crouches.
62 A Touches a root.
63 A It wriggles.
64 A All four step back at once.
65 D OMAR (softly): Doctor. Is it supposed to do that?
66 A ¶ The root coils around his finger.
67 A ¶ Ixchel screams.
68 A Bram lunges.
69 A Kestrel grabs her scalpel.
70 A Omar yanks back, but the root holds, and the plant lifts, slowly, from the soil, a green fist rising out of the dark.
71 D KESTREL: Everybody out. Now.
72 A ¶ They run, boots slapping through water, the violet lights flashing behind them, the plant unfolding into the aisle like a waking god.
