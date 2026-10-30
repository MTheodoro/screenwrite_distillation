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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00259.json
### SCENE s00259 | EXT. FLOATING MARKET OF THE LANTERN SEA - DUSK
Detected names (may be incomplete or contain aliases): QUEEN-MOTHER OSHUN ADEBAYO-LUMINARA, PRINCE TAMSIN LUMINARA-VOSS, NERISSA KALOMBO-AQUILA, BARNABAS, OYELOWO-SMYTHE, PIPPA TRELAWNEY-ANAYA
1 A ¶ Hundreds of boats lashed together on a windless lagoon.
2 A Paper lanterns hang from masts.
3 A Traders call across the water in a tangle of tongues.
4 A Drifting steam smells of spice and rain.
5 A ¶ At the heart of the market, on a barge strung with silver bells, five figures stand in a ring.
6 A ¶ QUEEN-MOTHER OSHUN ADEBAYO-LUMINARA (70s, sea-silk robe, crown of coral) holds a trident in one hand and a small carved box in the other.
7 A ¶ Her son, PRINCE TAMSIN LUMINARA-VOSS (30s, silver armor, bloodshot eyes), stands stiffly at her right.
8 A ¶ The sorceress NERISSA KALOMBO-AQUILA (40s, indigo cloak, hair braided with shells) waits on her left.
9 A ¶ An old pirate captain, BARNABAS "BLACK BARNEY" OYELOWO-SMYTHE (60s, one eye, huge laugh), leans on a cutlass.
10 A ¶ And the ferryman's daughter, PIPPA TRELAWNEY-ANAYA (14, barefoot, bright), clings to a mast.
11 D OSHUN (into the crowd): Friends. Neighbors. Traders of the Lantern Sea. I have called you here to end the feud.
12 A ¶ Silence ripples across the boats.
13 A Bells chime softly.
14 D TAMSIN: Mother, this is unwise.
15 D OSHUN: It is overdue.
16 D NERISSA: It is a trap.
17 D OSHUN: It is a truce.
18 D BARNABAS (booming): Truce! I love a truce. When do we eat?
19 D PIPPA (whispering from the mast): Captain Barney, hush.
20 D BARNABAS: I can't hush. I'm a pirate.
21 D OSHUN: Barnabas. Your fleet will withdraw from the northern channel.
22 D BARNABAS: My fleet will think about it.
23 D OSHUN: Your fleet will withdraw.
24 D BARNABAS (grinning): Of course, Majesty.
25 D NERISSA: And the sorcerers' guild?
26 D OSHUN: Will return the stolen tides.
27 D NERISSA: They were not stolen. They were borrowed.
28 D OSHUN: For three centuries.
29 D NERISSA: It was a long loan.
30 D TAMSIN: Mother, enough.
31 D OSHUN: Silence, Tamsin.
32 A ¶ She opens the carved box.
33 A Inside rests a pearl the size of a fist, dull and grey.
34 D OSHUN [CONT'D]: This is the Heart of the Lagoon. It has been dying for forty years. Unless all of you swear on it, it dies tonight.
35 A ¶ Gasps ripple.
36 A Tamsin steps forward and seizes the box.
37 A Barnabas draws his cutlass.
38 A Nerissa raises a hand and the water around the barge begins to rise.
39 A Pippa leaps from the mast and lands between them all.
40 D PIPPA (shouting): Stop it! All of you!
41 A ¶ They freeze.
42 A Cutlass.
43 A Hand.
44 A Hand on the box.
45 A The lanterns sway.
46 D PIPPA [CONT'D] (quietly): My father says a pearl dies when it stops being held.
47 D OSHUN: Child--
48 D PIPPA: So hold it. Together.
49 A ¶ A long moment.
50 A Then Tamsin lowers his hand.
51 A Barnabas sheathes his cutlass.
52 A Nerissa lets the water fall.
53 A Oshun, tired, extends the box.
54 A One by one, they each place a hand on the pearl.
55 A ¶ The grey surface warms.
56 A A faint pulse of silver rises, then gold, then every color the lanterns carry.
57 A ¶ The crowd exhales.
58 A The boats begin to rock gently, as if the lagoon itself had sighed.
59 D BARNABAS (under his breath): Well, I'll be.
60 D NERISSA: It has been a long time since it glowed.
61 D TAMSIN (to Oshun, softly): Forgive me, Mother.
62 D OSHUN: There is nothing to forgive. Hold the light.
63 D PIPPA: Can I go home now?
64 D BARNABAS (roaring with laughter): She wants to go home! The savior of the sea wants to go home!
65 D OSHUN (smiling): Pippa Trelawney-Anaya, you may go anywhere you like.
66 A ¶ Pippa grins, drops from the barge into a small skiff, and begins to row, the lanterns blooming on the water around her.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00762.json
### SCENE s00762 | INT. FORWARD BUNKER - BELGIAN FARMLAND - DAWN
Detected names (may be incomplete or contain aliases): CAPTAIN MARIANA ESCOBAR, SERGEANT FITZROY BELL, CORPORAL YASIR KARIMI, PRIVATE LENNART SKOG, MAJOR TREMAINE
1 A ¶ Sandbags lined with straw.
2 A A paraffin stove smokes in the corner.
3 A A radio set squats on an ammunition crate beside a tin of biscuits.
4 A Outside, a pale mist drifts over silent fields.
5 A ¶ CAPTAIN MARIANA ESCOBAR, forties, sits on a crate cleaning a pistol with a rag.
6 A SERGEANT FITZROY BELL, fifties, scratches at his stubble.
7 A CORPORAL YASIR KARIMI, twenties, sleeps against a wall with his boots on.
8 A PRIVATE LENNART SKOG, nineteen, stares through the firing slit at the grey horizon.
9 D MARIANA: Fitz, anything on the net?
10 D FITZROY: Static, ma'am. Nothing but.
11 D MARIANA: Quiet is good.
12 D LENNART: Quiet is strange, Captain.
13 D MARIANA: Private, it's dawn. Let the war have its tea.
14 A ¶ Fitzroy chuckles.
15 A He pries open the biscuit tin and passes it around.
16 A Yasir wakes, accepts one, and crunches it.
17 A The stove ticks.
18 D MAJOR TREMAINE [V.O.] (over radio, crackling): Bunker Seven, this is Command. Do you read?
19 A ¶ Everyone freezes.
20 A Mariana lunges for the handset.
21 D MARIANA: Command, this is Seven. Reading you.
22 D MAJOR TREMAINE [V.O.] (over radio): Captain, the armistice has been signed. Hostilities cease at eleven hundred.
23 A ¶ Silence.
24 A Yasir lowers the biscuit.
25 A Lennart turns from the slit.
26 D FITZROY (softly): Eleven.
27 D MARIANA: Say again, Command.
28 D MAJOR TREMAINE [V.O.]: It's over, Captain. It's over.
29 A ¶ Mariana sets the handset down.
30 A She looks at the others, one by one.
31 A Nobody speaks.
32 A Then, at the slit, Lennart begins to laugh, and cannot stop.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01411.json
### SCENE s01411 | INT. REGIONAL AIRPORT - GATE B - NIGHT
Detected names (may be incomplete or contain aliases): FINN LARKSPUR-MBEKI, MINA, OSTROWSKI, GRANDPA TOBIAS, GRANDMA ESME ADEBAYO, TANNOY
1 A ¶ Empty chairs, a dim terminal.
2 A A departure board flickers: ALL FLIGHTS DELAYED.
3 A Rain streaks the windows onto a runway of dark glass.
4 A ¶ FINN LARKSPUR-MBEKI, 30s, rumpled, sits with a coffee and a boarding pass, scribbling in a notebook.
5 A ¶ Across the aisle, WILHELMINA "MINA" OSTROWSKI, 30s, clutches a small suitcase and stares at the floor, thumb worrying a loose ring on her finger.
6 A ¶ Two seats down, an old couple, GRANDPA TOBIAS and GRANDMA ESME ADEBAYO, 70s, share a thermos, bickering softly.
7 D TANNOY [V.O.]: Attention passengers. Flight 418 to Denver is delayed until further notice.
8 A ¶ A collective groan.
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
49 A ¶ Silence.
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
77 A The board above them flickers once more and goes dark.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01857.json
### SCENE s01857 | INT. PARKING GARAGE LEVEL P4 - NIGHT
Detected names (may be incomplete or contain aliases): NORA VESS, ELISE MARCHETTI
1 A ¶ Concrete.
2 A Sodium light.
3 A A single car, hood up.
4 A ¶ NORA VESS, 30s, journalist.
5 A Leather jacket.
6 A She stands behind a pillar.
7 A ¶ Thirty feet away, in the car's glow, a woman waits.
8 A DR. ELISE MARCHETTI, 50s.
9 A Raincoat.
10 A A briefcase.
11 A ¶ Nora steps out.
12 D NORA: You're early.
13 D ELISE: So are you.
14 D NORA: You said midnight.
15 D ELISE: I said when it was safe.
16 A ¶ Nora walks closer.
17 A Her heels echo.
18 A Elise watches.
19 D NORA: Is it safe?
20 D ELISE: No.
21 D NORA: Then why are we here?
22 D ELISE: Because it won't get safer.
23 A ¶ Elise sets the briefcase on the hood.
24 A Her hands tremble.
25 A She lifts the latches.
26 D ELISE [CONT'D]: Before I open this. One condition.
27 D NORA: Name it.
28 D ELISE: My name stays out of it.
29 D NORA: Your name is the story.
30 D ELISE: Then there's no story.
31 A ¶ Nora folds her arms.
32 A Elise doesn't blink.
33 D NORA: You called me.
34 D ELISE: I know.
35 D NORA: You said they'd kill you.
36 D ELISE: I said they might.
37 D NORA: Does that change the condition?
38 D ELISE: It makes it firm.
39 A ¶ A car engine growls somewhere above.
40 A Both women look up.
41 A The sound passes.
42 D NORA: Where do they park?
43 D ELISE: Level two. Executive spaces.
44 D NORA: Then we have time.
45 D ELISE: We have fifteen minutes.
46 A ¶ Nora pulls a recorder from her jacket and sets it on the hood beside the case.
47 A She presses record.
48 A A red light glows.
49 D NORA: Say it for the tape.
50 D ELISE: I can't.
51 D NORA: Then show me.
52 A ¶ Elise opens the lid.
53 A Papers, hundreds of them, and a small drive.
54 A She lifts a page and holds it under the light.
55 D ELISE: Lot four-four-one-seven. The shipment dates are wrong.
56 D NORA: Wrong how?
57 D ELISE: Backdated. All of them.
58 D NORA: By how long?
59 D ELISE: Six months.
60 D NORA: That's fraud.
61 D ELISE: It's worse.
62 A ¶ She hands the page across.
63 A Nora reads.
64 A Her lips move.
65 A She looks up.
66 D NORA: Those are drug trials.
67 D ELISE: Yes.
68 D NORA: Patients died.
69 D ELISE: Eleven.
70 D NORA: And they knew.
71 D ELISE: They knew in March.
72 A ¶ Nora lets the page fall to the hood.
73 A Her face is pale.
74 D NORA: You signed the reports.
75 D ELISE: I did.
76 D NORA: Then you're in it.
77 D ELISE: I know.
78 D NORA: So why come to me?
79 D ELISE: Because I'd rather go down with the truth than up with the lie.
80 A ¶ Nora studies her.
81 A The light buzzes overhead.
82 A In the distance, a second engine starts.
83 D NORA: Keep talking.
84 D ELISE: Not here.
85 D NORA: Where?
86 D ELISE: Take the case. Go.
87 D NORA: And you?
88 D ELISE (a thin smile): I'll be right behind you.
89 A ¶ Nora snaps the case shut, lifts it, and backs toward the ramp.
90 A Elise watches her go.
91 A The engine closes in.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00642.json
### SCENE s00642 | EXT. CABLE CAR GONDOLA, MIDWAY OVER ALPINE GORGE - NIGHT
Detected names (may be incomplete or contain aliases): MAGNUS HALVORSEN, SOL, ARRIAGA, PRISCILLA TRENT, JIN-HO PARK
1 A ¶ A tiny glass cabin dangling from a single cable above a black abyss.
2 A Wind groans through the steel.
3 A Snow beads on the windows.
4 A Inside, four passengers sit pressed together on cold benches, lit by a flickering emergency strip.
5 A ¶ MAGNUS HALVORSEN, fifties, a ski instructor in a red parka, grips the safety rail.
6 A SOLEDAD "SOL" ARRIAGA, thirties, a nurse in a cardigan, kneels beside the seat where PRISCILLA TRENT, seventies, in a fur-trimmed coat, sits very pale.
7 A JIN-HO PARK, twenties, a backpacker, holds a dead phone in both hands.
8 D MAGNUS: Stay calm. They'll restart the motor in the next few minutes.
9 D SOL: You said that twenty minutes ago, Magnus.
10 D MAGNUS: And I'll say it again.
11 D JIN-HO: Is it moving?
12 D PRISCILLA: Everything's moving, dear. We're on a string.
13 D SOL: Mrs. Trent, look at me. Breathe through your nose.
14 D PRISCILLA: I am breathing, Soledad.
15 D SOL: Slower, then.
16 A ¶ The gondola lurches.
17 A Everyone grabs something.
18 A Jin-ho slides across the bench into Magnus, and Magnus catches him by the front of his jacket.
19 D JIN-HO: Sorry, sorry --
20 D MAGNUS: Sit. Hold the bar.
21 A ¶ A sharp metallic crack from the cable above.
22 A The cabin drops three feet, swings, and slams to a halt.
23 A Priscilla cries out.
24 A Sol throws her arms around her.
25 A Magnus and Jin-ho fall together against the glass and for a moment all four are a heap of coats, elbows, gasps.
26 D MAGNUS [CONT'D]: Everyone, don't move!
27 A ¶ No one does.
28 A The cabin sways, slowly, like a pendulum losing its argument.
29 D SOL (whispering): Jin-ho, can you reach the hatch?
30 D JIN-HO: It's over my head.
31 D SOL: Magnus can lift you.
32 D MAGNUS: Not with this rope between my --
33 D PRISCILLA: Magnus Halvorsen, you will lift that boy.
34 A ¶ A beat.
35 A Magnus nods.
36 A He braces his boots against the bench and cups his hands.
37 A Jin-ho steps up, one knee on Magnus's palms, and fumbles at the roof hatch.
38 A It resists.
39 A He pounds it with his fist, and it pops open, and a rope ladder tumbles down into the cabin from a rescue helicopter's lamp, white and blinding.
40 D SOL (laughing, sobbing): Priscilla! Priscilla, look!
41 D PRISCILLA: I see it, dear. I'm not blind.
42 A ¶ Magnus bursts into tears.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02262.json
### SCENE s02262 | INT. HOSPITAL ROOM 412 - EARLY MORNING
Detected names (may be incomplete or contain aliases): HYE-WON PARK, LINDGREN, NURSE ABIOLA
1 A ¶ Blinds half-open.
2 A A low monitor beeps.
3 A A tray with an untouched breakfast.
4 A A vase of wilting carnations on the sill.
5 A ¶ DR. HYE-WON PARK, forties, a gray cardigan over her scrubs, enters with a chart.
6 A MR. LINDGREN, seventy, lies propped in bed in a thin hospital gown, white stubble, an IV in his hand.
7 A NURSE ABIOLA, thirties, adjusting a pillow, glances up.
8 D HYE-WON: Good morning, Mr. Lindgren.
9 D LINDGREN: Is it?
10 D HYE-WON: I hope so.
11 A ¶ She sets the chart down.
12 A Pulls a stool to the bedside.
13 A Abiola steps back, letting her take the space.
14 D HYE-WON [CONT'D]: How did you sleep?
15 D LINDGREN: Fine.
16 D ABIOLA: He was up twice.
17 D LINDGREN: I was not.
18 D ABIOLA: You asked me for the radio.
19 D LINDGREN: That's not sleeping badly. That's listening.
20 A ¶ Hye-won almost smiles.
21 A She reaches for his wrist, checks his pulse.
22 D HYE-WON: Your tests came back.
23 D LINDGREN: And?
24 D HYE-WON: I'd like to go through them with you.
25 D LINDGREN: Just say it.
26 A ¶ Hye-won exchanges a glance with Abiola.
27 A Abiola looks at the floor.
28 D HYE-WON: It's in the pancreas. It has spread to the liver.
29 A ¶ He turns his head to the window.
30 A His jaw works.
31 A The monitor keeps its steady beep.
32 D LINDGREN: How long?
33 D HYE-WON: Months. Perhaps less.
34 A ¶ He nods.
35 A Reaches for the glass of water on the tray.
36 A His hand shakes.
37 A Abiola moves to help but he waves her off.
38 A He drinks.
39 A Sets the glass down with great care.
40 D LINDGREN: My wife used to say I'd outlive the doctors.
41 D HYE-WON: She might have been right.
42 D LINDGREN: She was usually right. It was annoying.
43 A ¶ Abiola laughs, a short sound, then covers her mouth.
44 A Hye-won puts a hand on his arm.
45 D HYE-WON: We'll keep you comfortable.
46 D LINDGREN: I know.
47 A ¶ He picks at the corner of the blanket.
48 A Abiola straightens the carnations, plucks off a brown petal.
49 D LINDGREN [CONT'D]: Can I have the radio?
50 D ABIOLA: Of course.
51 A ¶ She fetches it from the drawer, plugs it in, and finds a station.
52 A A soft piano.
53 A He closes his eyes.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00148.json
### SCENE s00148 | INT. FERRIS WHEEL GONDOLA - NIGHT
Detected names (may be incomplete or contain aliases): STRANGER, IMELDA VASQUEZ-LEE, DMITRI
1 A ¶ A cramped steel cabin, swaying.
2 A Neon midway lights wheel below.
3 A Two figures in black.
4 A ¶ A STRANGER in a ski mask works at the gondola's roof hatch.
5 A Beside him, IMELDA VASQUEZ-LEE, 30s, holds a rope coil.
6 D STRANGER (muttering): Come on, come on.
7 D IMELDA: Quiet.
8 D STRANGER: I'm talking to the hatch.
9 A ¶ The hatch pops.
10 A Cold air.
11 A He pulls himself up.
12 A She hands him a duffel.
13 D STRANGER [CONT'D] (to the group): Okay, everyone, nobody panic.
14 D IMELDA: There's no one else.
15 D STRANGER: Habit.
16 A ¶ The wheel lurches.
17 A Both grab the rail.
18 D IMELDA: Dmitri.
19 D DMITRI: What?
20 D IMELDA: Your mask slipped.
21 D DMITRI (adjusting it): Names are for inside.
22 D IMELDA: We are inside.
23 A ¶ They speak at once, whispering.
24 D IMELDA [CONT'D]: Next gondola in ten seconds.
25 D DMITRI: Next gondola in ten seconds.
26 A ¶ They grin.
27 A She clips the rope to the rail.
28 A He steps out onto the roof.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00116.json
### SCENE s00116 | EXT. FIELD KITCHEN - FORWARD CAMP - DAWN
Detected names (may be incomplete or contain aliases): SERGEANT WILHELMINA OKORO-BRANDT, PRIVATE LEOPOLDO ESCOBAR-TANAKA, CORPORAL ABEBE TEKLE-NORDSTROM
1 A ¶ A canvas lean-to against a ruined stone wall.
2 A A cauldron simmers over a fire.
3 A Mud, mist, and the distant percussion of artillery that has gone on so long it has become weather.
4 A ¶ SERGEANT WILHELMINA OKORO-BRANDT (40s, flour on her sleeves) stirs a pot with a wooden paddle.
5 A PRIVATE LEOPOLDO ESCOBAR-TANAKA (19, helmet pushed back, mud to the knee) sits on an upturned bucket peeling potatoes.
6 A CORPORAL ABEBE TEKLE-NORDSTROM (30s, bandaged hand, cigarette behind one ear) leans on the wall with a tin cup.
7 A ¶ Nobody speaks.
8 A A shell lands, far off.
9 A The pot shivers.
10 D OKORO-BRANDT: More salt.
11 D ESCOBAR-TANAKA: We're out.
12 D OKORO-BRANDT: Then less water.
13 D ESCOBAR-TANAKA: We're out of that too.
14 A ¶ She keeps stirring.
15 A Tekle-Nordstrom takes the cigarette from behind his ear, looks at it, puts it back.
16 D TEKLE-NORDSTROM: Rumor says the line moves tomorrow.
17 D OKORO-BRANDT: Rumor says.
18 D TEKLE-NORDSTROM: You don't believe it?
19 D OKORO-BRANDT: I believe the potatoes.
20 A ¶ Escobar-Tanaka drops a peel into a bucket.
21 A Picks up another potato.
22 A Does not peel it.
23 D ESCOBAR-TANAKA: Sergeant.
24 D OKORO-BRANDT: Private.
25 D ESCOBAR-TANAKA: Is it all right if I write home?
26 D OKORO-BRANDT: You may.
27 D ESCOBAR-TANAKA: What do I say?
28 D OKORO-BRANDT: That the soup's good.
29 D ESCOBAR-TANAKA: Is it?
30 A ¶ She tastes from the paddle.
31 A Chews.
32 A Considers.
33 D OKORO-BRANDT: No.
34 A ¶ Tekle-Nordstrom laughs once, quietly, into his cup.
35 A Escobar-Tanaka looks from one to the other and smiles for the first time in days.
36 A She hands him a bowl.
37 D OKORO-BRANDT [CONT'D]: Eat.
38 A ¶ He eats.
39 A A shell lands, closer.
40 A The pot rattles.
41 A Nobody looks up.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00994.json
### SCENE s00994 | INT. PARIS CATACOMBS - OSSUARY CHAMBER, 1793
Detected names (may be incomplete or contain aliases): CITIZEN AUGUSTIN, CELESTINE
1 A ¶ Walls of stacked skulls.
2 A A single torch.
3 A Water drips from the vaulted ceiling.
4 A ¶ CITIZEN AUGUSTIN (40s, revolutionary sash, unpowdered hair, stiff with fear) stands alone at a stone table, copying names into a ledger.
5 A He mutters as he writes.
6 D AUGUSTIN: Lefèvre. Marchand. Girard.
7 A ¶ A footstep echoes.
8 A He freezes.
9 A Slowly closes the ledger.
10 D AUGUSTIN [CONT'D]: Who goes there?
11 A ¶ CELESTINE (30s, cloaked, hood up, a lantern shielded under her arm) steps out from behind a pillar of bones.
12 D CELESTINE: A friend of the dead.
13 D AUGUSTIN: There are no friends in the Republic.
14 D CELESTINE: Then I am no friend. Only a sister.
15 D AUGUSTIN: Whose sister?
16 D CELESTINE: The one you have on that list.
17 A ¶ He glances at the ledger.
18 A She comes closer.
19 A The light catches her face.
20 D AUGUSTIN: You should not be down here.
21 D CELESTINE: Neither should you.
22 D AUGUSTIN: I am an officer of the Committee.
23 D CELESTINE: You are a clerk with a candle.
24 D AUGUSTIN: Madame...
25 D CELESTINE: Citizen. Celestine Duval.
26 D AUGUSTIN: Citizen Duval, I could have you arrested.
27 D CELESTINE: Then do it. Call the guards. They are above, drinking wine from your cellar.
28 A ¶ He says nothing.
29 A Wipes his palms on his coat.
30 D CELESTINE [CONT'D]: My brother's name is on that page. Pierre Duval.
31 D AUGUSTIN: I do not control the lists.
32 D CELESTINE: You hold the pen.
33 D AUGUSTIN: The pen obeys.
34 D CELESTINE: So does the guillotine. Until someone stops it.
35 A ¶ Water drips.
36 A He opens the ledger.
37 A Finds the page.
38 A Looks at her.
39 A Looks at the page.
40 D AUGUSTIN: Pierre Duval. Printer.
41 D CELESTINE: Yes.
42 D AUGUSTIN: Condemned for a pamphlet.
43 D CELESTINE: For an opinion.
44 A ¶ He tears the page out.
45 A Folds it.
46 A Hands it to her.
47 D AUGUSTIN: There is a carriage at the Barrière d'Enfer at midnight.
48 D CELESTINE: Why?
49 D AUGUSTIN: Because I am tired of counting skulls.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00959.json
### SCENE s00959 | INT. BOTANICAL CONSERVATORY, AFTER CLOSING - NIGHT
Detected names (may be incomplete or contain aliases): PROFESSOR HENRIETTA VAN DER MEULEN-ASANTE, IGNATIUS BELLAMY-OJO, DOT, KWESI-PEMBERTON, SUMNER HALE-ABIOLA, CELESTINE OYELOWO-STRAND
1 A ¶ A cathedral of glass and iron.
2 A Palms rise into the dark like columns.
3 A Condensation drips from the vaulted panes.
4 A A path of wet slate winds between orchid beds, and a single lamp near the fountain draws a small circle of gold in the green gloom.
5 A ¶ Five people stand in the circle, looking at the water.
6 A ¶ PROFESSOR HENRIETTA VAN DER MEULEN-ASANTE (60s) holds a clipboard against her chest like a shield.
7 A Beside her, DR. IGNATIUS BELLAMY-OJO (50s) polishes his spectacles on his tie.
8 A DOROTHEA "DOT" KWESI-PEMBERTON (30s, gardener's overalls) stands with her arms folded.
9 A Across the fountain, SUMNER HALE-ABIOLA (40s, security uniform, flashlight) shifts his weight.
10 A And at the edge of the light, the youngest, CELESTINE OYELOWO-STRAND (20s, a notebook against her hip), is writing.
11 D HENRIETTA: Someone moved the orchid.
12 D DOT: It's not an orchid, Professor. It's a hybrid.
13 D HENRIETTA: Dorothea, I do not need a lecture.
14 D IGNATIUS: Henrietta, please. We're all tired.
15 D SUMNER: I locked the east door at nine.
16 D CELESTINE (not looking up): And the west?
17 D SUMNER: West too.
18 D HENRIETTA: Then how did it leave the building?
19 D DOT: It didn't.
20 A ¶ Silence.
21 A A drop falls from the glass into the fountain.
22 A Ripples spread.
23 D IGNATIUS: Dorothea, what do you mean?
24 D DOT: I mean it's still here.
25 A ¶ She points.
26 A At the base of the tallest palm, in the shadow beyond the lamp, something small and pale lies in the soil.
27 A The roots of the palm have curled around it like a fist.
28 D SUMNER (whispering): That's impossible.
29 D CELESTINE (finally looking up): It's not impossible. It's what it does.
30 D HENRIETTA: Celestine?
31 D CELESTINE: It's a hunter. It leaves, then it comes back for what it wants.
32 A ¶ Dot unfolds her arms.
33 A Ignatius puts on his spectacles.
34 A Sumner raises the flashlight, and its beam swings across the glass, across the palms, and settles on the pale thing at the roots.
35 A ¶ It is a human hand.
