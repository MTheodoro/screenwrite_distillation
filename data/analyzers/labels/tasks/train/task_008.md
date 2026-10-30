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

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02424.json
### SCENE s02424 | INT. HYPERBARIC CLINIC - CHAMBER ROOM - DAY
Detected names (may be incomplete or contain aliases): SIGRID LUND, NURSE TEMBO ADEYEMI, BARRY QUILL, ARAM VOSKANIAN, LENKA VOSKANIAN, IMAI
1 A ¶ A converted cannery on a grey harbor.
2 A Inside, a steel hyperbaric chamber the size of a school bus squats on the old conveyor floor, its portholes fogged, its rivets painted a cheerful hospital blue.
3 A Pipes bundle along the ceiling like the ribs of something sleeping.
4 A ¶ Gulls scream beyond the high windows.
5 A The room hums with compressors and the faint metronome tick of a pressure gauge.
6 A ¶ DR. SIGRID LUND (50s, silver braid, reading glasses pushed into her hair) stands at the control console.
7 A She moves with unhurried care, as though the machine might wake if she is careless.
8 A A mug of tea sits cooling beside the dials.
9 A ¶ NURSE TEMBO ADEYEMI (30s, scrubs the color of lichen, a pencil through her bun) checks a chart on a clipboard.
10 A She hums something.
11 A She is the only one who hums.
12 A ¶ BARRY QUILL (40s, technician, oil on his knuckles, a lanyard of tiny brass keys) taps a gauge with one finger and frowns.
13 A He taps it again, softer.
14 A ¶ Through the nearest porthole: ARAM VOSKANIAN (70s), reclined on a padded gurney inside the chamber, a clear hood over his white hair.
15 A He lifts a hand to the glass, as if to wave at a passing train.
16 A His daughter LENKA VOSKANIAN (40s, tailored coat, phone clutched like a rosary) sits beside the porthole in the antechamber.
17 D TEMBO: He's at two atmospheres. Pulse is steady. He asked if we have any radio in there.
18 D SIGRID: Tell him no. The static makes the oxygen worse.
19 D TEMBO (smiling): I told him that. He said he doesn't mind static if it's honest.
20 A ¶ Sigrid almost laughs.
21 A She sips the tea.
22 A It is cold.
23 A She sips anyway.
24 D LENKA (through the glass slot): How long?
25 D SIGRID: Ninety minutes. We run the whole protocol. He is doing wonderfully.
26 D LENKA: He hasn't done anything wonderfully since my mother died.
27 A ¶ Sigrid says nothing.
28 A Tembo glances up from the chart, then away.
29 D BARRY (low, to the gauge): Come on, old girl. Hold the line.
30 A ¶ The needle trembles and holds.
31 A Barry exhales.
32 A He wipes his hands on a rag.
33 A ¶ In the chamber, Aram closes his eyes.
34 A Beneath the hood, his lips move.
35 A He may be praying.
36 A He may be singing.
37 A Lenka watches him and presses her palm flat against the glass.
38 D TEMBO (softly): He's lucky to have you.
39 D LENKA: He doesn't know I'm here.
40 D TEMBO: He knows.
41 A ¶ The compressor cycles.
42 A A long breath of air rushes through the pipes.
43 A Everyone in the room unconsciously matches it, inhaling and holding.
44 A ¶ Then the gauge ticks.
45 A Once.
46 A Twice.
47 A Barry stops breathing.
48 D BARRY: Doctor.
49 D SIGRID: I see it.
50 D BARRY: That's not the chamber. That's the supply line.
51 D SIGRID: I said I see it, Barry.
52 A ¶ She sets down the mug.
53 A Her hand does not shake.
54 A Her eyes do not leave the needle.
55 A ¶ A speaker crackles on the wall.
56 A DR. IMAI (V.O.) speaks from the control room upstairs, voice thin and tired.
57 D DR. IMAI [V.O.] (over speaker): Lund, the oxygen reservoir is reading low. Do you copy?
58 D SIGRID: Copy, Imai. We're checking.
59 D DR. IMAI [V.O.] (over speaker): Check faster.
60 A ¶ Sigrid releases a valve.
61 A Tembo steps in to help without being asked.
62 A They work side by side, silent, practiced, their sleeves brushing.
63 D LENKA: What's happening?
64 D TEMBO: ^Nothing to worry about.
65 D SIGRID: Routine adjustment.
66 A ¶ They say it at the same instant, to the same person, with the same smile.
67 A Lenka looks from one face to the other.
68 A She doesn't believe either.
69 A ¶ In the chamber, Aram opens his eyes.
70 A He sees the three of them moving fast beyond the glass.
71 A He smiles gently, as if he already knows.
72 A ¶ The gauge climbs.
73 A Barry kneels, finds the leaking coupling, and clamps it with bare hands.
74 A Steam hisses against his palms.
75 A He does not let go.
76 D BARRY: Got it. Got it. Hold on.
77 A ¶ His voice cracks.
78 A Sigrid turns the main valve.
79 A The hiss stops.
80 A The needle steadies.
81 A ¶ Silence.
82 A Then, slowly, gulls again.
83 A ¶ Tembo rests her forehead against the cold steel of the console.
84 A Sigrid lays a hand on her shoulder.
85 A Neither moves.
86 A ¶ Barry unclamps his burned hands, stares at them, laughs once, helplessly.
87 D LENKA (whisper): Is he all right?
88 A ¶ Sigrid walks to the porthole.
89 A Aram raises one thumb, slow, deliberate.
90 D SIGRID: He's perfect.
91 A ¶ Lenka sinks into the chair, finally letting the phone drop to her lap.
92 A It buzzes.
93 A Nobody reaches for it.
94 A ¶ The tea, forgotten, tips off the console and shatters on the cannery floor.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00670.json
### SCENE s00670 | INT. BRANDVOLD TAXIDERMY - BACK ROOM - NIGHT
Detected names (may be incomplete or contain aliases): OTTO BRANDVOLD, SILAS KEANE, TOM PELLETIER, MAUDE ARCHIBALD, RUBY LAMB, ALL, FENWICK
1 A ¶ Glass eyes glitter from every shelf: owls, a badger, a stuffed marlin mounted over the door.
2 A Under a green lamp, a poker game is winding down.
3 A ¶ OTTO BRANDVOLD, 60s, round and genial, shuffles with slow pride.
4 A Across from him sits SILAS KEANE, 40s, lean, in a good suit gone shiny at the elbows.
5 A TOM PELLETIER, 50s, a bruiser in a too-small vest, stacks his chips like bricks.
6 A MAUDE ARCHIBALD, 50s, silver hair, pearl earrings, knits between hands.
7 A RUBY LAMB, 20s, sharp-eyed, deals herself a cigarette and nothing else.
8 D OTTO: Gentlemen. Ladies. A toast before the last hand. To friends who stay friends.
9 A ¶ He pours amber into five small glasses.
10 D TOM: Never turn down Otto's brandy.
11 D MAUDE (to Ruby): Dear, you're not drinking.
12 D RUBY: I'm pacing myself.
13 A ¶ Silas lifts his glass, studies it against the lamp, sets it down untouched.
14 D SILAS (muttering): Nobody pours that generous for free.
15 D OTTO: Something wrong, Silas?
16 D SILAS: Just admiring the craftsmanship. Of the glass.
17 A ¶ Tom drains his and thumps the table.
18 A Maude's needles click.
19 A The marlin's shadow crawls across the felt.
20 D OTTO: Last hand. Everybody in?
21 D ALL (ragged): In.
22 A ¶ Otto deals.
23 A Tom sways, blinks hard, and tries to speak.
24 A Nothing comes.
25 A He slides sideways off his chair and lands among the sawdust.
26 A ¶ Maude's needles stop.
27 A Ruby stands, calm, and pockets the cards.
28 D RUBY (to Silas): You didn't drink it.
29 D SILAS: Neither did you.
30 D OTTO (to the room, softly): Two out of five. Not bad for a Tuesday.
31 A ¶ The back door opens.
32 A FENWICK, 30s, rain on his shoulders, a badge in his raised hand and a revolver in the other.
33 D FENWICK: Nobody touch the glasses. Otto, I've been waiting a year for this.
34 A ¶ Otto smiles and sets down the bottle.
35 D OTTO: So has Maude.
36 A ¶ Maude lays her knitting aside.
37 A Beneath it, a small pistol.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00933.json
### SCENE s00933 | EXT. GLASS ORCHARD ON THE EDGE OF THE WORLD - DAWN
Detected names (may be incomplete or contain aliases): OLD MARGUERITE THORNBURY-ANYANWU, KNIGHT, SIR DESMOND ALDERWICK-OKAFOR, LYRA FAIRCHILD, THE COLLECTOR
1 A ¶ Trees of blown glass stand in orderly rows, each leaf a thin pane of green, each fruit a drop of amber light.
2 A A pale sun climbs the horizon and the whole orchard begins to sing, a thin high note like a wet finger on a goblet.
3 A ¶ At the center of the orchard stands the last living gardener, OLD MARGUERITE THORNBURY-ANYANWU (80s, a patchwork cloak, gnarled fingers wrapped in silk).
4 A She tends a single tree with a pair of silver shears.
5 A ¶ A cart creaks down the row.
6 A In it sits a young KNIGHT, SIR DESMOND ALDERWICK-OKAFOR (20s, dented armor, a bandaged shoulder) with a girl in a blue cloak beside him, LYRA FAIRCHILD (10s, a glass lantern in her lap).
7 A ¶ The cart stops.
8 A Marguerite does not turn.
9 D MARGUERITE: You're early. The fruit isn't ripe.
10 D DESMOND: We didn't come for fruit.
11 D MARGUERITE: Everyone comes for fruit.
12 D LYRA: We came for the key.
13 A ¶ Marguerite sets down her shears.
14 A Slowly, she faces them.
15 A She studies the girl, then the knight, then the girl again.
16 D MARGUERITE: She has your grandmother's eyes.
17 D DESMOND: Whose?
18 D MARGUERITE: Hers.
19 A ¶ Lyra climbs down from the cart.
20 A The orchard hums.
21 A A single glass leaf falls and shatters on the ground.
22 D LYRA: My mother said you would know.
23 D MARGUERITE: Your mother was a clever child. And a foolish one.
24 D DESMOND: Careful, gardener.
25 D MARGUERITE: I am always careful, boy. That is why I am still alive.
26 A ¶ A shadow slides across the orchard.
27 A The glass trees dim.
28 A Everything falls quiet, even the song.
29 A ¶ Down the far row, wading through a thicket of shards, comes a tall figure in a cloak of crows: THE COLLECTOR (ageless, face half hidden by a mask of white bone).
30 A He walks without a sound, and every glass fruit turns toward him as he passes.
31 D THE COLLECTOR: Marguerite. You said I was not welcome.
32 D MARGUERITE: You are not.
33 D THE COLLECTOR: Yet here I am.
34 A ¶ He lifts a hand.
35 A The glass trees shiver.
36 A Desmond draws his sword and steps between the girl and the stranger, but the Collector's fingers close, and the sword shatters in the knight's hand.
37 D LYRA: Desmond!
38 A ¶ Desmond staggers.
39 A Lyra runs to him and drops the lantern.
40 A It cracks open, and a thin bright flame spills out onto the grass.
41 A Marguerite and the Collector both freeze.
42 D MARGUERITE: Child, don't --
43 D THE COLLECTOR: Careful, little one.
44 A ¶ The flame climbs a glass tree.
45 A The tree rings like a bell.
46 A Every leaf catches light.
47 A Marguerite and the Collector both stagger back as the orchard blazes with color.
48 A ¶ They scatter.
49 A Desmond hauls Lyra into the cart.
50 A Marguerite throws her cloak over her head.
51 A The Collector, for the first time, steps back.
52 D THE COLLECTOR [CONT'D] (quietly): What have you done?
53 D MARGUERITE: Reminded it who it belongs to.
54 A ¶ The song swells, joyous now.
55 A The Collector's bone mask cracks across the brow.
56 A He turns and walks back the way he came, crows streaming from his cloak.
57 A ¶ Silence.
58 A The fire gutters out.
59 A The trees stand untouched, brighter than before.
60 D DESMOND: Is it over?
61 D MARGUERITE: For today.
62 A ¶ Lyra picks up the empty lantern, examines it, and holds it out to Marguerite.
63 D LYRA: I'm sorry.
64 D MARGUERITE: Don't be. It was ready.
65 A ¶ She takes the lantern, tucks it under her cloak, and picks up her shears.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02088.json
### SCENE s02088 | EXT. SALT-LICK STAGE STATION - NEVADA TERRITORY - DAY
Detected names (may be incomplete or contain aliases): OLD CASPER VANDERHOOF, LUPE, ESCOBEDO, JEDEDIAH HOLLOWAY, PRUDENCE LATIMER, WYATT BROOKS, TOMÁS
1 A ¶ A dusty way station with a sagging porch, a hand-pump well, and a corral.
2 A A white salt flat shimmers beyond.
3 A A stagecoach rests with its team unhitched, horses nosing at a lick of gray rock.
4 A ¶ On the porch sits OLD CASPER VANDERHOOF, 70s, in a rocker, whittling.
5 A Beside him, his granddaughter LUPE, 10, dangles bare feet off the boards.
6 A Across the yard the stagecoach driver, TOMÁS ESCOBEDO, 40s, leans against a wheel, hat tipped over his eyes.
7 A A passenger, the preacher JEDEDIAH HOLLOWAY, 50s, stands at the pump filling a canteen.
8 A Inside the open stagecoach door, the passenger MRS. PRUDENCE LATIMER, 30s, fans herself with a handkerchief.
9 A At the corral rail, a ranch hand named WYATT BROOKS, 20s, scratches a mule's ear.
10 A ¶ Nobody hurries.
11 A A hawk circles overhead.
12 A Casper's knife shaves a long curl off the stick.
13 A Lupe watches it fall.
14 D LUPE: Grandpa, what's it going to be?
15 D CASPER: A duck.
16 D LUPE: It looks like a spoon.
17 D CASPER: That's a duck in a hurry.
18 A ¶ Tomás pushes up his hat and glances at the sun.
19 A Jedediah finishes with the canteen and pumps the handle twice more just to hear it creak.
20 A Prudence steps down from the coach, shakes the dust from her skirt, and crosses to the porch, handing the handkerchief to Lupe, who wipes her nose and hands it back with great seriousness.
21 A Wyatt gives the mule a last pat and ambles over to join them, thumbs in his belt.
22 D WYATT: Will she be rolling by noon?
23 D TOMÁS: When the horses finish licking.
24 D WYATT: Shame to rush them.
25 D JEDEDIAH: The Lord rested on the seventh day.
26 D TOMÁS: The Lord didn't have a schedule from the railroad.
27 D PRUDENCE (smiling): Then let us rest, gentlemen. I have nowhere I would rather not be.
28 D CASPER: Spoken like a woman who's seen Reno.
29 D PRUDENCE: Twice.
30 A ¶ The hawk drifts lower.
31 A Lupe points.
32 A Everyone looks up.
33 A For a long moment the whole station watches the bird wheel against the bright sky, and then it banks and is gone over the flat.
34 D CASPER: That's a duck, too.
35 D LUPE: It's not.
36 D CASPER: It's a duck in a hurry.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02168.json
### SCENE s02168 | INT. LEVINE & SON PAWN - DAY
Detected names (may be incomplete or contain aliases): ABRAHAM LEVINE, JOSHUA, WOMAN, ROSALIE
1 A ¶ A narrow shop crammed with guitars, wristwatches, stuffed marlin, a rack of wedding rings behind glass.
2 A A bell over the door.
3 A Dusty sun through barred windows.
4 A ¶ ABRAHAM LEVINE, 70, pawnbroker, green visor, rolled sleeves, polishes a trumpet.
5 A His son JOSHUA, 40s, in a suit that doesn't fit, tallies receipts at the end of the counter.
6 A ¶ The bell rings.
7 A A WOMAN, 30s, enters.
8 A Raincoat, wet hair, a small velvet pouch gripped in both hands.
9 A She stands just inside the door as though the floor might give way.
10 D ABRAHAM: Good afternoon.
11 D WOMAN: Is it?
12 D ABRAHAM: For some of us.
13 A ¶ She crosses to the counter.
14 A Sets the pouch down.
15 A Pulls the drawstring.
16 A A gold locket slides out.
17 A Joshua stops tallying.
18 D JOSHUA: Dad.
19 D ABRAHAM: I see it.
20 D WOMAN: It was my mother's.
21 D ABRAHAM: It's beautiful.
22 D JOSHUA: It's worth four hundred, easy.
23 D WOMAN: Eight.
24 D JOSHUA: Four.
25 D WOMAN: It has a picture inside.
26 D ABRAHAM: May I?
27 A ¶ She nods.
28 A Abraham opens it with a thumbnail.
29 A Stares.
30 A Closes it.
31 D ABRAHAM [CONT'D]: Joshua. Look at this.
32 D JOSHUA: What?
33 D ABRAHAM: Just look.
34 A ¶ Joshua takes the locket, opens it.
35 A His face changes.
36 D JOSHUA: Dad. That's...
37 D ABRAHAM: Rosalie Pinsky.
38 D WOMAN: I'm Rosalie.
39 D ABRAHAM: No. The locket belonged to...
40 D ROSALIE: My mother. Hannah Pinsky. She pawned it here in 1991.
41 D ABRAHAM: She did. And she never came back.
42 D ROSALIE: She died.
43 D JOSHUA: We're sorry.
44 D ROSALIE: Don't be. I'm here to buy it back.
45 D ABRAHAM: It's yours.
46 D JOSHUA: Dad, it's inventory.
47 D ABRAHAM: Joshua, a locket this old isn't inventory. It's a promise.
48 D JOSHUA: We have a business.
49 D ABRAHAM: We have a mother.
50 A ¶ Joshua looks at the locket.
51 A At Rosalie.
52 A At his father.
53 A He closes the drawer.
54 D JOSHUA: Take it.
55 D ROSALIE: I'll pay for it.
56 D ABRAHAM: You already did.
57 A ¶ Rosalie closes her fingers around the locket.
58 A The bell above the door rings softly as a draft touches it.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01534.json
### SCENE s01534 | INT. CONVALESCENT HOME SOLARIUM - AFTERNOON
Detected names (may be incomplete or contain aliases): HORATIO PEMBERTON-LAW, EUPHEMIA STANHOPE-ADEYEMI
1 A ¶ A glass-walled room full of wicker chairs and ferns.
2 A Pale sun.
3 A Somewhere down the corridor, a gramophone plays a waltz.
4 A ¶ DR. HORATIO PEMBERTON-LAW, 50s, in a rumpled tweed jacket, stands by the window with his hat in his hand.
5 A ¶ MRS. EUPHEMIA STANHOPE-ADEYEMI, 80s, in a shawl and a wheelchair, faces the garden.
6 A Her hands rest on a blanket.
7 D HORATIO: Good afternoon, Mrs. Stanhope-Adeyemi.
8 D EUPHEMIA: Good afternoon, Doctor. You are late.
9 D HORATIO: The train was held up.
10 D EUPHEMIA: Trains always are.
11 A ¶ He pulls up a wicker chair.
12 A Sits.
13 A Opens his bag.
14 A Closes it again without taking anything out.
15 D HORATIO: You are looking well.
16 D EUPHEMIA: I am looking at the roses.
17 D HORATIO: They are fine roses.
18 D EUPHEMIA: They are blighted. The gardener lies.
19 D HORATIO: Perhaps he is hopeful.
20 D EUPHEMIA: Perhaps he is paid by the hour.
21 A ¶ Horatio smiles.
22 A Smooths his hat.
23 A A nurse's shoe squeaks past in the corridor and fades.
24 D HORATIO: I have the results.
25 D EUPHEMIA: I supposed you might.
26 D HORATIO: They are not what we hoped.
27 D EUPHEMIA (a pause): Are they ever?
28 A ¶ He takes a sheet of paper from his jacket.
29 A Offers it.
30 A She doesn't take it.
31 A Instead she reaches out and presses his hand, paper and all, down onto the blanket.
32 D EUPHEMIA [CONT'D]: Read it to the roses, Doctor. They've heard worse.
33 D HORATIO: Mrs. Stanhope-Adeyemi--
34 D EUPHEMIA: Euphemia. I am too old to be called anything else by a man I like.
35 A ¶ He sets the paper on his knee.
36 A Does not read it.
37 D HORATIO: I should like to come on Thursdays.
38 D EUPHEMIA: You come on Mondays.
39 D HORATIO: Then Thursdays also.
40 D EUPHEMIA: I shall tell the gardener.
41 D HORATIO: About the Thursdays?
42 D EUPHEMIA: About the roses. He ought to be told.
43 A ¶ They both go still.
44 A Horatio looks at the paper; Euphemia looks at the glass.
45 A Neither looks at the other.
46 A ¶ Down the corridor the waltz ends.
47 A The gramophone needle hisses in the empty groove.
48 A Euphemia lifts one finger, listening.
49 D EUPHEMIA [CONT'D]: They always forget to turn it over.
50 A ¶ Horatio stands, crosses to the door, and calls softly down the hall.
51 D HORATIO (calling): Would someone turn the record, please?
52 A ¶ He returns to the chair.
53 A A moment later the music resumes, soft and a little slow.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00955.json
### SCENE s00955 | INT. ROADSIDE DINER, ROUTE 9 - NIGHT
Detected names (may be incomplete or contain aliases): LORETTA PENDERGAST-NWACHUKWU, ARTEMUS WILKES-DUBOIS, CASPIAN LEFEVRE-OYELARAN, JO, MAKINDE-HARTWELL
1 A ¶ A chrome-edged diner with a flickering OPEN sign.
2 A Rain on the windows.
3 A Red vinyl booths.
4 A A jukebox that has not played since 1994.
5 A ¶ LORETTA PENDERGAST-NWACHUKWU (50s, apron, a pencil tucked into her gray bun) wipes the counter.
6 A At a booth by the window sits ARTEMUS WILKES-DUBOIS (60s, trucker's cap, a thermos) with a crossword.
7 A In the corner booth, a young man hunches over a laptop: CASPIAN LEFEVRE-OYELARAN (20s, hoodie, headphones around his neck).
8 D LORETTA (to the room): Last call for pie, folks.
9 D ARTEMUS: Seven letters. "Unwelcome guest."
10 D LORETTA: Intruder.
11 D ARTEMUS: Eight.
12 D LORETTA: Trespasser.
13 D ARTEMUS: That fits. Thanks, Loretta.
14 A ¶ She tops off his coffee.
15 A Caspian, in the corner, types faster.
16 A His knee bounces.
17 D LORETTA (low, to Artemus): Boy's been here since noon.
18 D ARTEMUS (low): Not my business.
19 A ¶ The bell above the door jingles.
20 A A woman enters, soaked, a duffel over one shoulder.
21 A JOSEPHINE "JO" MAKINDE-HARTWELL (30s, buzz cut, a tattoo of a swallow on her neck) stops just inside the door, scanning every face.
22 D LORETTA: Sit anywhere, hon.
23 A ¶ Jo does not sit.
24 A She looks at Caspian.
25 D JO: Cass.
26 A ¶ Caspian freezes.
27 A He doesn't turn around.
28 D CASPIAN (to the screen): Jo.
29 D JO: You didn't call.
30 D CASPIAN (to himself): I was going to.
31 D ARTEMUS (to Loretta, whispering): That's not a customer.
32 D LORETTA (whispering back): No kidding.
33 A ¶ Jo crosses the room and stands at Caspian's booth, dripping on the linoleum.
34 D JO: I drove four hundred miles.
35 D CASPIAN: I know.
36 D JO: You left a note on the fridge.
37 D CASPIAN: I know.
38 D JO: It said "back soon."
39 D CASPIAN: It's been eight months.
40 D JO: Yeah, Cass. It has.
41 A ¶ Loretta clears her throat, loud enough that everyone looks.
42 D LORETTA: Pie, anyone? On the house?
43 D JO (turning, to the room): Sorry for the noise.
44 D LORETTA: Honey, this is the most interesting night I've had all year.
45 A ¶ Artemus chuckles into his thermos.
46 A Jo slides into the booth across from Caspian.
47 A She takes a fork from the napkin dispenser and eats a bite of his untouched pie.
48 D JO: Good pie.
49 D CASPIAN: You hate pie.
50 D JO: I hate being lied to.
51 A ¶ Caspian shuts the laptop.
52 D CASPIAN: Then I'll tell you the truth.
53 D JO: It better be long.
54 D CASPIAN: It's very long.
55 A ¶ Loretta fills two more cups.
56 A Artemus gives up on the crossword.
57 A The rain keeps coming, and the OPEN sign keeps blinking, and in the corner booth the two of them lean toward each other across the table.
58 D JO [CONT'D]: Start from the beginning.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s01289.json
### SCENE s01289 | INT. ALPINE CABLE CAR - DAY
Detected names (may be incomplete or contain aliases): INSPECTOR BALTHAZAR GREY, MADAME SOLANGE VEIL, COLONEL RUPERT ASHBY, MISS PENELOPE DRAKE, KASIMIR NOVAK
1 A ¶ A glass cabin hangs mid-span between two peaks, swaying in the wind.
2 A Snow-ridged valley two thousand feet below.
3 A The machinery has stopped.
4 A ¶ INSPECTOR BALTHAZAR GREY, 50s, long grey coat, folds his hands over a silver-topped cane.
5 A ¶ MADAME SOLANGE VEIL, 60s, in sable and diamonds, clutches a jewelled handbag.
6 A ¶ COLONEL RUPERT ASHBY, 70s, ramrod straight, medals pinned to his lapel, glares through the window.
7 A ¶ MISS PENELOPE DRAKE, 20s, a nurse in a blue cape, sits on the bench with her knees together.
8 A ¶ MR. KASIMIR NOVAK, 40s, in a cheap brown suit, sweats and stares at his shoes.
9 A ¶ They all turn at once.
10 A Grey knocks his cane against the floor.
11 A Everyone else freezes.
12 D GREY: Ladies and gentlemen, I shall be brief. Someone in this cabin killed Lord Pemberton last night.
13 D ASHBY: Preposterous.
14 D GREY: His body was found in the funicular station with a needle in his neck.
15 D PENELOPE: Oh!
16 D GREY: Miss Drake, you are the only person here trained to use a hypodermic.
17 D PENELOPE: I'm a nurse, not an assassin!
18 D GREY: Of course. But you were on his floor.
19 D VEIL: So was I, Inspector. So was the Colonel.
20 D ASHBY: Madame, I take exception.
21 D VEIL: Take it, then. I saw you in the corridor at midnight.
22 D ASHBY: I was returning from the smoking room.
23 D VEIL: In your dressing gown?
24 D ASHBY: It's cold!
25 D GREY: Mr. Novak?
26 D NOVAK: I was in my room. All night.
27 D GREY: Then you will not mind if I search your jacket.
28 D NOVAK: I will!
29 D GREY: Why?
30 D NOVAK: Because there is a letter in it.
31 D GREY: From whom?
32 D NOVAK: From the dead man.
33 A ¶ The cabin sways.
34 A No one speaks.
35 A Wind whistles through the cables.
36 D GREY: Read it aloud, Mr. Novak.
37 A ¶ Novak draws out an envelope with trembling fingers.
38 A He opens it.
39 A His eyes move.
40 A His lips whiten.
41 D NOVAK: "Whoever finds this, forgive me. I have taken my own life, and I wish it understood that no person is to blame."
42 D PENELOPE: Suicide?
43 D GREY: No, Miss Drake. A man who writes his own suicide note does not first poison himself with a needle in the neck.
44 D ASHBY: Then the letter is forged.
45 D GREY: The letter is genuine. And that is the interesting thing.
46 D VEIL: Why?
47 D GREY: Because the handwriting is Mr. Novak's.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s00321.json
### SCENE s00321 | INT. PICKLE BRINING CELLAR - DAY
Detected names (may be incomplete or contain aliases): FELIX BRANDT, MABEL TOOMEY, SOL KAPLAN
1 A ¶ Oak barrels stacked to the rafters.
2 A A single bare bulb swings on a cord.
3 A The smell is dill, vinegar and old secrets.
4 A ¶ FELIX BRANDT, fifties, a deli owner in a stained apron and a bow tie he refuses to remove, stands guard over a barrel with both arms spread wide.
5 A ¶ MABEL TOOMEY, thirties, a health inspector with a clipboard and a face like a closed door, taps her pen against the barrel lid.
6 A ¶ SOL KAPLAN, sixties, Felix's brother-in-law, sits on an upturned crate eating a pickle with great concentration.
7 D MABEL: Open the barrel, Mr. Brandt.
8 D FELIX: It's a pickle barrel. You've seen one. They're all the same.
9 D MABEL: Open it.
10 D FELIX (to the room): Folks, nobody panic, the lady wants to see a pickle.
11 A ¶ Sol chews.
12 A Nobody moves.
13 A The bulb sways.
14 D SOL (to himself): Forty years. Forty years and she wants to see a pickle.
15 D MABEL: I heard a noise from this barrel when I came in.
16 D FELIX: That's fermentation. It's alive. Like all of us.
17 D MABEL: It said "Felix."
18 D FELIX: Then it's a very friendly pickle.
19 A ¶ Mabel reaches for the lid.
20 A Felix steps in front of it.
21 A Sol quietly slides his crate three feet to the left, to block the door.
22 D FELIX [CONT'D]: Mabel, may I call you Mabel, the cellar is cold, your hands are cold, come upstairs, have a bagel.
23 D MABEL: Mr. Brandt, one thing at a time.
24 D FELIX: I'll give you two bagels.
25 D SOL (to nobody): Three. She looks like a three.
26 D MABEL: I do not take bribes.
27 D FELIX: Nobody said bribe. We said bagels.
28 D FELIX: It's a family recipe, you understand!
29 D MABEL: I understand a violation when I smell one!
30 A ¶ The lid thumps from inside.
31 A All three stare at it.
32 A Sol takes another bite.
33 D SOL (to the group): Nice acoustics down here.
34 A ¶ Felix puts a hand on the lid and presses down, smiling so hard his bow tie quivers.
35 D FELIX: Sol. The jar of the good relish. Upstairs. Now.
36 D SOL (rising, not hurrying): She'll want it with mustard.
37 D MABEL: I want the barrel open.
38 D FELIX: And I want a bigger deli. We don't always get.
39 A ¶ The lid thumps again.
40 A Mabel, without taking her eyes off Felix, writes one word on her clipboard and underlines it twice.

Output path: /home/user/screenwrite-analyzers/data/analyzers/labels/train/s02397.json
### SCENE s02397 | INT. ABANDONED HOTEL POOL - DAWN
Detected names (may be incomplete or contain aliases): HENRIK SOLBERG, ASHA NDLOVU-REYES
1 A ¶ A drained lap pool under a skylight patched with plywood.
2 A Peeling blue tiles.
3 A A diving board with one rusted bolt.
4 A Pale light falls in stripes across the floor of the deep end.
5 A ¶ HENRIK SOLBERG, sixties, in a long wool coat, sits on a plastic chair at the shallow end with a stopwatch hanging from his neck.
6 A He is a retired coach with a patient, ruined face.
7 A At the edge of the deep end, ASHA NDLOVU-REYES, twenty, in a tracksuit, stretches her shoulders and rolls her neck.
8 A She has not looked at him since she arrived.
9 A ¶ He clears his throat.
10 A She does not turn.
11 A ¶ She steps onto the diving board.
12 A It flexes and groans beneath her bare feet.
13 A She bounces once, testing, and the whole structure sings, and he half rises from the chair.
14 D HENRIK: Asha.
15 D ASHA: It's fine.
16 D HENRIK: The board is not fine.
17 D ASHA: It has held before.
18 A ¶ He sits back down, slowly.
19 A The stopwatch swings against his chest.
20 A She bounces again, higher, and the bolt shrieks in its socket, and still she does not stop.
21 D HENRIK: The pool is empty.
22 D ASHA: I know.
23 D HENRIK: I only mention it.
24 A ¶ She laughs, a short surprised sound that echoes off the tiles.
25 A She lowers herself to the end of the board and sits there, legs dangling above eleven feet of nothing.
26 D ASHA: Do you remember the last time you timed me?
27 D HENRIK: Sydney.
28 D ASHA: You said I was a second slow.
29 D HENRIK: You were a second slow.
30 D ASHA: I was a tenth slow. I looked it up.
31 A ¶ He lifts the stopwatch.
32 A Studies it.
33 A Thumbs the button.
34 A It clicks.
35 D HENRIK: Then it was a tenth.
36 A ¶ She stands again.
37 A Walks to the very edge.
38 A Spreads her arms and looks up at the skylight, where the plywood has split to let in one thin blade of gold.
39 D ASHA: Start the watch.
40 D HENRIK: For what?
41 D ASHA: Just start it.
42 A ¶ He starts it.
43 A She bends her knees.
44 A Holds.
45 A And then, softly, to nobody, she dives, a clean arc, arms together, into the long empty blue, and at the last instant her fingertips brush the floor and she rolls and comes up laughing, breathless, filthy, alive.
46 A ¶ He stops the watch.
47 A Looks at it.
48 A Does not say the number.
