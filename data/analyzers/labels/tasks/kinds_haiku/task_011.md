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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0111.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00147 | INT. RADIO TELESCOPE CONTROL ROOM - NIGHT
Detected names (may be incomplete or contain aliases): SOLVEIG ABERNATHY-OKAFOR
* 1 A ¶ A concrete room at the end of a dirt road, humming with machines.
* 2 A Banks of dials.
* 3 A A wall of monitors showing a single flat grey line.
4 A ¶ DR. SOLVEIG ABERNATHY-OKAFOR, 40s, in a sweater and fingerless gloves, sits at the main console with a voice recorder and a cold cup of tea.
5 A She hasn't slept.
6 A ¶ She presses RECORD.
7 D SOLVEIG: Log entry, hour sixty. Signal is still there.
8 A ¶ She plays back the clip.
* 9 A A pulse, faint, like a heartbeat, from a speaker.
10 A ¶ She rewinds.
11 D SOLVEIG [V.O.] (recording): Log entry, hour fifty-two. It repeats every eleven minutes.
12 D SOLVEIG: Eleven minutes.
13 A ¶ She leans closer, listening, and her hand slips to the console edge.
* 14 A The pulse thumps.
* 15 A The monitors flicker.
* 16 A The lights dim for a heartbeat, then recover.
17 A ¶ She exhales and lifts the recorder again.
18 D SOLVEIG [CONT'D]: Hour sixty-one. The pulse has changed. It now repeats every ten.
19 A ¶ She pauses.
20 A Her voice drops.
21 D SOLVEIG [CONT'D]: Ten minutes.
22 A ¶ She plays it back.
23 D SOLVEIG [V.O., CONT'D] (recording): Hour sixty-one. The pulse has changed.
24 D SOLVEIG: Stop.
25 A ¶ She stops it.
* 26 A Silence.
* 27 A Then, faintly, from the speaker, the pulse resumes.
* 28 A A beat.
* 29 A Another.
30 D SOLVEIG [CONT'D]: That's not mine.
31 A ¶ She turns slowly.
* 32 A The speaker is off.
* 33 A The monitors show the grey line.
* 34 A The pulse continues.
* 35 A ¶ It's coming from the recorder.
36 D SOLVEIG [CONT'D] (a whisper): Hello?
37 A ¶ She holds the recorder up.
* 38 A The pulse quickens.
39 D SOLVEIG [V.O., CONT'D] (recording, but wrong, slow, deeper): Hello.
40 A ¶ She drops the recorder.
* 41 A It clatters.
42 A She stands, backs away.
* 43 A The lights flicker.
* 44 A The console hums.
* 45 A The recorder lies on its side, spinning its reels.
46 D SOLVEIG [V.O., CONT'D] (recording, patient): Solveig. Come here.
47 A ¶ She does not move.
48 A Tears gather at her eyes.
49 D SOLVEIG: No.
50 D SOLVEIG [V.O., CONT'D] (recording): Come here. I have been waiting eleven minutes.
51 D SOLVEIG: Ten.
52 D SOLVEIG [V.O., CONT'D] (recording): Ten.
* 53 A ¶ A long silence.
* 54 A The pulse slows.
* 55 A The lights steady.
* 56 A The grey line on the monitors becomes a single, perfect, ordinary wave.
57 A ¶ She picks up the recorder.
58 A Her hand is still.
59 A She looks at it.
60 D SOLVEIG: It's gone.
61 A ¶ She stops the machine.
* 62 A The room is silent.
63 A She sets the recorder down on the console, very gently, like a bird she has learned to trust.
64 A ¶ She picks up her tea.
* 65 A It's warm.

### SCENE s00148 | INT. FERRIS WHEEL GONDOLA - NIGHT
Detected names (may be incomplete or contain aliases): STRANGER, IMELDA VASQUEZ-LEE, DMITRI
* 1 A ¶ A cramped steel cabin, swaying.
* 2 A Neon midway lights wheel below.
3 A Two figures in black.
4 A ¶ A STRANGER in a ski mask works at the gondola's roof hatch.
5 A Beside him, IMELDA VASQUEZ-LEE, 30s, holds a rope coil.
6 D STRANGER (muttering): Come on, come on.
7 D IMELDA: Quiet.
8 D STRANGER: I'm talking to the hatch.
* 9 A ¶ The hatch pops.
* 10 A Cold air.
11 A He pulls himself up.
12 A She hands him a duffel.
13 D STRANGER [CONT'D] (to the group): Okay, everyone, nobody panic.
14 D IMELDA: There's no one else.
15 D STRANGER: Habit.
* 16 A ¶ The wheel lurches.
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

### SCENE s00149 | INT. FENCING SALLE - EVENING
Detected names (may be incomplete or contain aliases): ENZO, BIANCHI, PRIYANKA SHARMA-ODUYA, PRIYA, MASTER ALBERIC DUVAL
* 1 A ¶ Wooden floor, mirrored wall.
* 2 A Masks hang on pegs.
3 A Two figures in white square off under a single hanging lamp.
4 A ¶ LORENZO "ENZO" BIANCHI, 20s, wiry, tightens his glove.
5 A Opposite, PRIYANKA SHARMA-ODUYA, 20s, calm, flexes her blade.
6 D ENZO: Priya, you're stalling.
7 D PRIYA: I'm warming up.
8 D ENZO: It's your finals bout.
9 D PRIYA: It's practice.
10 A ¶ They salute.
* 11 A En garde.
* 12 A Silence.
* 13 A The lamp hums.
14 A ¶ Lunge.
15 A Parry.
* 16 A The blades sing.
17 A They circle, step, retreat, advance, a quiet dance.
18 D ENZO: Bit slow tonight.
19 D PRIYA: Bit loud tonight.
* 20 A ¶ Click.
* 21 A Point to Priya.
22 A She grins.
23 A He grins back.
* 24 A ¶ The door opens.
25 A A tall, silver-haired man in a long coat steps in.
26 A MASTER ALBERIC DUVAL, 70s, leans on a cane and watches.
27 D ALBERIC: Don't stop on my account.
28 D ENZO: Maestro.
29 D PRIYA: Master Duval.
30 D ALBERIC: Again.
31 A ¶ They resume.
* 32 A Faster now.
* 33 A Blades blur.
* 34 A A final parry.
* 35 A A riposte.
36 A Priya stops, blade at Enzo's chest.
37 D PRIYA: Touch.
38 A ¶ Alberic nods, slowly, and turns to go.
39 A At the door, he pauses.
40 D ALBERIC: Priyanka. Pack your bag. Nationals are Thursday.

### SCENE s00150 | INT. FUNERAL PARLOR - BACK ROOM SPEAKEASY - NIGHT - 1926
Detected names (may be incomplete or contain aliases): SABINE ARCHAMBAULT, HORACE PELLETIER, TOBY, FINNEGAN, STRANGER, CALLUM
* 1 A ¶ Behind a velvet curtain: a card table set atop a coffin lid, a bar of embalming-fluid bottles filled with gin, a gramophone low and hissing.
* 2 A Gaslight.
3 A ¶ Four people.
* 4 A One empty chair.
5 A ¶ SABINE ARCHAMBAULT, 30s, in beads and a cloche, shuffles.
6 A HORACE PELLETIER, 50s, mortician, apron over a vest.
7 A TOBIAS "TOBY" FINNEGAN, 20s, a cop's son in a borrowed suit.
8 A And a STRANGER, in a grey coat, who sits at the table's far edge and has said nothing.
9 D SABINE: Deal's mine.
10 D HORACE: Deal's the house's.
11 D SABINE: The house is dead, Horace.
12 D HORACE: Not tonight.
13 D TOBY: Can we play?
14 D SABINE: Sit, Toby.
15 A ¶ He sits.
16 A The Stranger doesn't move.
17 D HORACE (to the Stranger): You in?
18 D STRANGER: I'm watching.
19 D HORACE: We don't have spectators.
20 D STRANGER: You do now.
* 21 A ¶ A beat.
22 A Sabine deals.
23 A He studies his cards.
24 A She studies him.
25 D SABINE: You have a name, friend?
26 D STRANGER: Callum Redfern.
27 D TOBY: Redfern. Like the Redfern Brewery?
28 D CALLUM: Like the Redfern Brewery's heir.
29 D HORACE: Heir to what? They shut down in '19.
30 D CALLUM: To the cellar.
31 A ¶ Horace sets down his cards.
32 A Sabine's eyebrows lift.
33 D SABINE: Callum. Is there beer in the cellar?
34 D CALLUM: Four hundred barrels.
35 D TOBY: Mr. Redfern, can I buy some?
36 D CALLUM: Mr. Finnegan, I can't sell to a policeman's son.
37 A ¶ Toby colors.
38 A Horace laughs.
39 D HORACE: He knows you.
40 D CALLUM: I know everybody. It's my cellar.
41 D SABINE: What do you want, Callum?
42 D CALLUM: Partners.
43 D HORACE: In what?
44 D CALLUM: In the thing after this.
45 A ¶ He lays down his cards.
* 46 A A straight flush.
47 A Nobody says a word.
* 48 A The gramophone skips.
49 D TOBY: He wins.
50 D SABINE: He always did.
51 A ¶ Horace pours four glasses from the embalming bottle.
52 A Slides one to each.
53 A Lifts his.
54 D HORACE: To the cellar.

### SCENE s00151 | INT. CAR WASH - TUNNEL - NIGHT
Detected names (may be incomplete or contain aliases): RAY, OYELOWO, TANISHA BEAUMONT, MARCUS DELACROIX-WU
* 1 A ¶ Blue foam.
* 2 A Spinning brushes.
* 3 A A conveyor drags a black sedan through the dark.
* 4 A The attendant booth glows at the end.
5 A ¶ RAYMUNDO "RAY" OYELOWO, 40s, uniform, towel on shoulder, waits at the exit.
6 A At his side, TANISHA BEAUMONT, 20s, trainee, holds a squeegee like a baton.
7 A ¶ A second man leans on the booth wall: MARCUS DELACROIX-WU, 50s, leather jacket, thumb in his belt.
* 8 A ¶ The sedan emerges, dripping.
9 D RAY: Marcus.
10 D MARCUS: Ray.
11 D RAY: Car's clean.
12 D MARCUS: Is it?
13 A ¶ Tanisha wipes the windshield, too fast.
14 D TANISHA: Spotless, sir.
15 D MARCUS: Easy, kid. You'll rub off the paint.
16 A ¶ She stops.
17 A He opens the trunk.
18 A Looks inside.
19 A Closes it.
20 D MARCUS [CONT'D]: Ray. Come here.
21 A ¶ Ray steps close.
22 A Marcus puts a hand on his shoulder.
23 A Squeezes.
24 A Smiles.
25 D MARCUS [CONT'D]: Good work.
26 A ¶ He pulls three twenties from his jacket.
27 A Tucks them into Ray's breast pocket.
28 A Pats it.
29 D TANISHA (whispering to Ray): What was in the trunk?
30 D RAY: Nothing.
31 D MARCUS (already in the car): Exactly.
* 32 A ¶ The sedan rolls out into the rain.
33 A Tanisha looks at the three twenties poking from Ray's pocket.
34 A Ray's hand trembles once.
35 A Then he folds the bills away and turns on the hose.

### SCENE s00152 | INT. FARMHOUSE KITCHEN - PRE-DAWN
Detected names (may be incomplete or contain aliases): EDMUND ABERNETHY-SOTO, LIORA ABERNETHY-SOTO, QUENTIN DUPREE
* 1 A ¶ A bare bulb.
* 2 A A pot of coffee going cold.
* 3 A A calendar with a date circled in red.
4 A ¶ EDMUND ABERNETHY-SOTO, 60s, sits at the table with a stack of unopened envelopes.
5 A His daughter, LIORA ABERNETHY-SOTO, 30s, stands at the sink with her back to him.
6 A A hired hand, QUENTIN DUPREE, 40s, hovers by the door, cap in his hands.
7 A ¶ He lifts one envelope.
8 A Sets it down.
9 A Lifts another.
10 A ¶ She runs the tap.
11 A Turns it off.
12 A Runs it again.
13 D QUENTIN: Mr. Abernethy, the auctioneer's truck is at the gate.
14 D EDMUND: Already?
15 D QUENTIN: Six a.m., he said.
16 D LIORA: It's four-thirty.
17 D QUENTIN: They like to get a good spot.
18 A ¶ He opens an envelope.
19 A Reads.
20 A Closes it.
21 A She turns, wipes her hands on her apron, sits across from him.
22 A Neither speaks.
23 D EDMUND: Your mother loved this kitchen.
24 D LIORA: She hated the stove.
25 D EDMUND: She hated the stove, yes.
26 D QUENTIN (awkward): I'll start with the tractor.
27 D LIORA: Quentin, wait.
28 D QUENTIN: Ma'am?
29 D EDMUND: Let him go, Liora.
30 D LIORA: He doesn't have to.
31 D EDMUND: It's his job.
32 D QUENTIN: It's all right.
33 D EDMUND: Sit down, son.
34 D QUENTIN: I'd rather stand.
35 A ¶ He stands.
36 A They sit.
* 37 A The kitchen clock ticks.
* 38 A Outside, an engine idles.
* 39 A A truck door slams.
40 A ¶ He pushes the stack of envelopes to the middle of the table.
41 A She takes one.
42 A Opens it.
43 A Reads.
44 A Her mouth tightens.
45 A She folds it small.
46 A ¶ She stands and fills the kettle.

### SCENE s00153_0 | EXT. ALPINE GONDOLA CABLE CAR - HIGH ABOVE A GORGE - DUSK
Detected names (may be incomplete or contain aliases): 
* 1 A ¶ A steel cabin hangs from a single cable.
* 2 A Beneath: a thousand feet of air and a river like a silver thread.
* 3 A The cable runs taut toward a far station that never seems to arrive.
* 4 A Wind.
* 5 A Ice on the glass.

### SCENE s00153_1 | INT. GONDOLA CABIN - CONTINUOUS
Detected names (may be incomplete or contain aliases): AUGUSTIN LEFEBVRE-MBAYE, ROSALIE TANNENBAUM, KIERAN SZYMANSKI, JASMINE BEAUCHAMP-IYER
1 A ¶ Four people in a space built for ten.
2 A They have been here five hours.
3 A ¶ AUGUSTIN LEFEBVRE-MBAYE, 60s, retired cartographer, wool coat buttoned to the neck, sits in the corner with a thermos, perfectly still.
4 A Opposite him, ROSALIE TANNENBAUM, 30s, a nurse in a puffy yellow jacket, rubs her hands together and breathes into her cupped palms.
5 A ¶ On the floor: KIERAN SZYMANSKI, 20s, backpacker, his leg splinted with a ski pole and a scarf, jaw clenched.
6 A At the window, JASMINE BEAUCHAMP-IYER, 40s, in a business suit and sneakers, pounds on the glass with her fist, then stops, then pounds again.
* 7 A ¶ The cabin sways.
* 8 A Ice cracks.
* 9 A A slow groan runs down the cable.
10 D JASMINE: Anyone else hear that?
11 D AUGUSTIN: It is the cable.
12 D JASMINE: The cable is groaning.
13 D AUGUSTIN: It has been groaning for five hours.
14 D ROSALIE (to Kieran): Does it hurt?
15 D KIERAN: Only when I breathe.
16 D ROSALIE: Then breathe shallow.
17 D KIERAN: Thanks, doc.
18 D ROSALIE: Nurse.
19 D KIERAN: Thanks, nurse.
20 A ¶ Jasmine slumps against the window.
* 21 A Her breath fogs the glass.
22 A She traces a line with her finger, then wipes it away.
23 D JASMINE: The signal's dead. The radio's dead. The cable is the only thing alive.
24 D AUGUSTIN: There is the thermos.
25 A ¶ He unscrews it.
26 A Pours a capful of steaming tea.
27 A Holds it out to Kieran.
28 A Kieran takes it.
29 A Sips.
30 A Passes it to Rosalie.
31 A She sips.
32 A Passes it to Jasmine.
33 A She hesitates.
34 A Then drinks.
* 35 A ¶ The cabin lurches.
* 36 A A long metallic shriek.
37 A Everyone grabs a rail.
38 D ROSALIE: Oh, God.
39 D AUGUSTIN: Be calm.
40 D KIERAN: Is it dropping?
41 D JASMINE: It's swinging.
* 42 A ¶ The cabin sways wider, wider, a pendulum in the dark.
* 43 A Then slowly, painfully, it steadies.
* 44 A Far below, a river laughs.
45 D AUGUSTIN (quietly): The map of this gorge was my last. I measured it in 1974. I always wondered what it looked like from here.
46 A ¶ He pours another capful.
47 A Raises it.
48 D AUGUSTIN [CONT'D]: To the view.
49 A ¶ Nobody answers.
50 A Then Rosalie lifts her hand.
51 A Then Kieran.
52 A Then Jasmine.
53 A ¶ They drink.

### SCENE s00154 | INT. BONDED TEA WAREHOUSE - AFTER CLOSING
Detected names (may be incomplete or contain aliases): LEO, MARCHAND-ADEBISI, ANTON KARPINSKI-OLUWALE, INES KARPINSKI-OLUWALE
* 1 A ¶ A cathedral of tea chests, stacked in towers to the rafters.
* 2 A Shafts of lamplight.
* 3 A The smell of bergamot and dust.
* 4 A A catwalk runs across the beams.
5 A ¶ LEOPOLDINE "LEO" MARCHAND-ADEBISI, 40s, customs inspector, long coat, lanyard, walks the floor slowly, a clipboard against her hip.
6 A She stops at a chest labelled DARJEELING FIRST FLUSH.
7 A She taps it.
* 8 A Hollow.
* 9 A ¶ A footstep behind her.
10 A She does not turn.
11 D LEO: You're late, Anton.
12 A ¶ ANTON KARPINSKI-OLUWALE, 50s, in a dark overcoat, emerges from between two towers of chests.
13 A He carries a small leather case.
14 D ANTON: Traffic.
15 D LEO: There was no traffic.
16 D ANTON: Then I walked slowly.
17 A ¶ She finally turns.
18 A He smiles, a thin, kind smile.
19 A She doesn't return it.
20 D LEO: Open it.
21 D ANTON: You said no names.
22 D LEO: I said no names on the phone.
23 A ¶ He sets the case on a chest.
24 A Unlatches it.
* 25 A Inside: tea.
* 26 A Real tea, loose, pale green.
27 A He takes a pinch and holds it out.
28 D ANTON: Taste.
29 A ¶ She takes it, rolls it between finger and thumb, sniffs.
30 A Her expression changes.
31 D LEO: It's the Himalayan Silver Tip.
32 D ANTON: It is.
33 D LEO: That doesn't exist anymore.
34 D ANTON: It exists in eleven chests.
35 D LEO: In this warehouse?
36 D ANTON: In this warehouse.
37 A ¶ She puts the leaf in her mouth.
38 A Chews.
39 A Swallows.
40 A Closes her eyes.
41 D LEO: It's extraordinary.
42 D ANTON: It's illegal.
43 D LEO: It's both.
* 44 A ¶ A sound from the catwalk overhead.
45 A Both look up.
* 46 A A silhouette moves between the beams.
47 A ¶ Leo draws a pistol from under her coat.
48 A Anton raises both hands.
49 D ANTON [CONT'D]: Don't.
50 D LEO: Who is that?
51 D ANTON: My daughter.
52 D LEO: You brought your daughter?
53 D ANTON: She insisted.
54 A ¶ The silhouette leans over the rail.
55 A A young woman, perhaps twenty, with Anton's eyes.
56 D LEO: Come down.
57 A ¶ She does, down a rope ladder, one slow rung at a time.
58 A At the bottom she lowers her hood.
* 59 A The lamplight catches her face.
60 D ANTON: Ines.
61 A ¶ INES KARPINSKI-OLUWALE, 20s, stands between her father and the inspector.
62 A Hands open.
63 D INES: Dad, it's fine.
64 D LEO: Both of you, step back.
65 A ¶ They speak at once.
66 D ANTON: Leo, put it down.
67 D INES: Please, please, please.
68 A ¶ Leo holds the gun steady for three long seconds.
69 A Then, slowly, she lowers it.
70 D LEO: Eleven chests.
71 D ANTON: Eleven.
72 D LEO: I get five.
73 D ANTON: Four.
74 D LEO: Five, Anton. Or the daughter sings.
75 A ¶ Ines glances at her father.
76 A He sighs.
77 D ANTON: Five.
78 A ¶ Leo holsters the gun.
79 A She lifts the clipboard.
80 A Writes something, tears off the page, hands it to him.
81 D LEO: That's a receipt for the tea. As seized.
82 D ANTON (reading): It says "destroyed."
83 D LEO: It will be, by the end of the week.
84 A ¶ She walks back into the stacks.
* 85 A Her footsteps fade.
* 86 A The lamp hums.
87 A Ines exhales for the first time in a minute.
88 D INES: Dad.
89 D ANTON: Yes?
90 D INES: Next time I'll stay in the car.

### SCENE s00155 | EXT. TANDEM BICYCLE RENTAL KIOSK - BOARDWALK - DAY
Detected names (may be incomplete or contain aliases): ODUYA, THEO RASMUSSEN-KHAN, GRANDMA CORAZON ESPINOSA, JUAN-PABLO, KIOSK OWNER, FRIDA LINDGREN
* 1 A ¶ Salt air.
* 2 A A row of bright tandems chained to a rack.
3 A Five people in the sun.
4 A ¶ WILHELMINA "BILLIE" ODUYA, 28, in a sundress, grips a handlebar.
5 A BEHIND her, THEO RASMUSSEN-KHAN, 30, fumbles with a helmet.
6 A Next to them, GRANDMA CORAZON ESPINOSA, 80, in a straw hat, adjusts her bifocals.
7 A Her grandson, JUAN-PABLO, 14, scowls at his phone.
8 A And the KIOSK OWNER, FRIDA LINDGREN, 50s, leans on the counter with a stopwatch.
9 A ¶ She clicks it.
10 D FRIDA: Start.
11 A ¶ Theo mounts.
12 A Billie pushes off.
* 13 A The tandem wobbles.
14 A He steers right.
15 A She leans left.
16 A They crash into the rack.
17 A ¶ He laughs.
18 A She stares daggers.
19 A He helps her up.
20 A She brushes off his hands.
21 A ¶ Corazon watches.
22 A Nods approval.
23 A Juan-Pablo looks up from his phone, shrugs, and pockets it.
24 D JUAN-PABLO: Abuela, don't.
25 D CORAZON: Watch me.
26 A ¶ She climbs on.
27 A Pats the seat behind her.
28 A He sighs, climbs on.
29 A They pedal off, smooth as silk, past the kiosk, past the pier, into the sun.
30 A ¶ Frida clicks the stopwatch.
31 A Billie and Theo watch them go.
32 A Their hands find each other.

### SCENE s00156 | INT. TRAMPOLINE PARK - PRIVATE PARTY ROOM - DAY
Detected names (may be incomplete or contain aliases): HARRY, EZEKWESILI, DOROTHEA PRZYWARA, HR, TREVOR OKONJO-LANE, MARGUERITE VOLKOV, PAXTON HALE
* 1 A ¶ A wall of padded foam.
* 2 A Neon signs: JUMP!
* 3 A SOAR!
* 4 A SURVIVE!
* 5 A A banner reads "SYNERGY OFFSITE 2026."
* 6 A A long table of untouched pizza.
7 A ¶ Five employees in matching grippy socks sit in a circle on the floor, cross-legged, as a laminated agenda card makes its way from hand to hand.
8 A ¶ HARRISON "HARRY" EZEKWESILI, 40s, VP of Operations, tie still knotted.
9 A DOROTHEA PRZYWARA, 30s, the HR manager, clipboard.
10 A TREVOR OKONJO-LANE, 20s, an intern with his sock half off.
11 A MARGUERITE VOLKOV, 50s, in a cardigan, the longest-tenured.
12 A And PAXTON HALE, 30s, from Sales, who has not stopped smiling since he arrived.
13 D DOROTHEA: Okay, everybody, let's share one fear and one trampoline goal.
14 D HARRY: I'll start. My fear is irrelevance.
15 D DOROTHEA: My fear is liability.
16 D TREVOR: My fear is... all of this.
17 D MARGUERITE: My fear is that I'll outlive the company.
18 D PAXTON: I don't have fears. I have opportunities.
* 19 A ¶ A beat.
20 A Everyone looks at Paxton.
21 D HARRY: Paxton, that's a fear in disguise.
22 D PAXTON: Is it?
23 D DOROTHEA: It is.
24 D TREVOR: Definitely.
25 D MARGUERITE: I'll allow it.
26 D DOROTHEA: Trampoline goals?
27 D HARRY: Backflip.
28 D DOROTHEA: No injuries.
29 D TREVOR: Escape.
30 D MARGUERITE: A nap.
31 D PAXTON: A synergistic pyramid.
32 D HARRY: Let's jump.
33 A ¶ They rise.
* 34 A The trampolines are a field of black.
35 A Harry steps on.
36 A Bounces once.
37 A Bounces twice.
* 38 A His tie flaps over his shoulder.
39 D HARRY: This isn't so bad.
40 A ¶ He bounces higher.
41 A Dorothea joins.
42 A Then Trevor.
43 A Then Marguerite, solemn as a monk.
44 A Paxton cannonballs onto the biggest trampoline, shouting.
45 D PAXTON: Pyramid!
46 A ¶ They stack awkwardly.
47 A Harry on the bottom.
48 A Dorothea on his shoulders.
49 A Trevor on hers.
50 A Marguerite on his.
51 A Paxton climbs to the top, hands overhead.
52 D PAXTON [CONT'D]: Synergy!
* 53 A ¶ The pyramid sways.
* 54 A Gasps.
* 55 A Dorothea's clipboard slips.
56 A Trevor loses a sock.
* 57 A The whole pile topples sideways into the foam pit with a majestic thump.
* 58 A ¶ Silence.
59 A ¶ A hand emerges, then a head.
60 A It is Marguerite.
61 A She spits out foam.
62 D MARGUERITE: That was the best meeting we have ever had.
63 A ¶ One by one, the others surface, laughing.
64 A Harry pulls off his tie and flings it into the air.
65 D HARRY: Let's do it again.
66 A ¶ They scramble.
* 67 A A whistle shrills from the wall speaker.
68 D DOROTHEA: Time!
69 A ¶ They sag.
70 A Harry sighs.
71 D HARRY (to Dorothea): Put that in the minutes.
72 D DOROTHEA (writing): "Synergy achieved."
73 D TREVOR: Can I go home now?
74 D MARGUERITE: Not before the pizza.
75 A ¶ They move toward the table.
76 A Paxton lingers.
77 A He looks back at the foam pit, grinning at the wreckage.
78 D PAXTON (to himself): Opportunities.

### SCENE s00157 | INT. ROLLER DERBY ARENA - HOME LOCKER ROOM - NIGHT
Detected names (may be incomplete or contain aliases): ROZ, ACHEBE-LUND, GUTS, PARRISH-OKONKWO, NAILS, CHAKRABORTY, MO, DELACROIX-KELLY, TULLY, SEKIBO, BONES, ZARATE-WILLIAMS
* 1 A ¶ Cinderblock walls painted red.
* 2 A A single long bench.
* 3 A A cracked mirror reflects six women in various states of armor.
* 4 A The crowd's stomp thunders through the ceiling.
5 A ¶ COACH ROSALIND "ROZ" ACHEBE-LUND, 50s, former jammer, a scar across one eyebrow, stands by the door, arms folded.
6 A She wears a faded jersey, number 00.
7 A ¶ On the bench, from left to right: GWYNETH "GUTS" PARRISH-OKONKWO, 30s, pivot, taping her wrists; INDIRA "NAILS" CHAKRABORTY, 20s, blocker, brushing glitter across her cheekbones; MAUREEN "MO" DELACROIX-KELLY, 40s, the oldest skater, pumping her fist against her palm; and TALLULAH "TULLY" SEKIBO, 19, the rookie, ghost-white, holding her helmet like a hymnal.
8 A At the end sits BLANCA "BONES" ZARATE-WILLIAMS, 30s, jammer, headphones on, eyes closed.
9 D ROZ: Listen up.
10 A ¶ They do.
11 A Even Bones lowers a headphone.
12 D ROZ [CONT'D]: We're down forty points. Second half. They have the best blockers in the league. We have a rookie and a prayer.
13 D TULLY (small): Coach.
14 D ROZ: Yes, Tully.
15 D TULLY: I think I'm going to be sick.
16 D ROZ: Good. Be sick now. Not on the track.
17 A ¶ Tully nods.
18 A Swallows.
19 D ROZ [CONT'D]: Guts, you're pivot. You set the pace. Nails, you take the inside lane. Mo, you cover Bones. Bones, you jam. Tully, you...
20 D TULLY: Stand there?
21 D ROZ: You block. And you stay on your skates.
22 D GUTS: Coach, what's the plan?
23 D ROZ: The plan is we don't lose.
24 D NAILS: That's not a plan.
25 D ROZ: It's the only one I've got.
26 D MO (laughing): Roz, she's right.
27 D BONES (removing headphones): It's a good plan.
28 A ¶ Everyone looks at Bones.
29 A She rarely speaks.
30 D BONES [CONT'D]: My plan is to go through them.
31 D ROZ: Then go through them.
32 D GUTS: And we follow.
33 D NAILS: And we hit.
34 D MO: And we hit again.
35 D TULLY: And I stay on my skates.
36 D ROZ: That's all I ask.
* 37 A ¶ A buzzer sounds in the hall.
38 A Roz opens the door.
* 39 A Roar of the crowd floods in.
40 D ROZ [CONT'D]: Ladies. Make me proud.
41 A ¶ One by one they rise.
42 A Bones last.
43 A At the door she pauses, puts a hand on Tully's shoulder.
44 D BONES: First hit is the hardest. After that it's just skating.
45 D TULLY: Okay.
46 D BONES: Okay.
47 A ¶ They file out.
48 A Roz watches them go, jaw working.
49 A Then she follows them into the light.

### SCENE s00158_0 | EXT. GOLD RUSH DENTIST TENT - SIERRA FOOTHILLS - 1851 - DUSK
Detected names (may be incomplete or contain aliases): 
* 1 A ¶ A canvas tent on a muddy hill.
* 2 A Lanterns.
* 3 A A sign in shaky paint: "TEETH PULLED.
* 4 A 2 DOLLARS.
* 5 A NO CREDIT."

### SCENE s00158_1 | INT. DENTIST TENT - CONTINUOUS
Detected names (may be incomplete or contain aliases): ZEKE, MONTAGUE, ABNER TWOBEARS
* 1 A ¶ A barber's chair nailed to a plank floor.
* 2 A A tray of forceps.
* 3 A A bottle of whiskey and a bucket.
4 A ¶ DR. EZEKIEL "ZEKE" MONTAGUE, 50s, in a stained vest, leans over the chair.
5 A In the chair, a miner, ABNER TWOBEARS, 40s, white-knuckled, mouth wide.
6 D ZEKE: Hold still.
7 D ABNER (muffled): I'm holding.
8 D ZEKE: You're trembling.
9 D ABNER (muffled): I'm holding while trembling.
10 A ¶ Zeke lifts the forceps.
11 A Peers into the mouth.
12 A Sniffs.
13 D ZEKE: This one's rotten.
14 D ABNER (muffled): Pull it.
15 D ZEKE: You sure?
16 D ABNER (muffled): He's been pulling at me for three weeks. Pull it.
17 A ¶ Zeke grips.
18 A Twists.
19 A Pulls.
* 20 A The tooth pops.
21 A Abner howls.
22 A Zeke holds it up to the lantern.
23 D ZEKE: Eighteen karat.
24 D ABNER (spitting): What?
25 D ZEKE: It's gold. Your tooth is gold.
26 A ¶ Abner reaches up and feels his jaw.
27 A Then looks at Zeke.
28 D ABNER: Give it back.
29 D ZEKE: It's my fee.
30 D ABNER: It's my tooth.
31 D ZEKE: It was your tooth. Now it's a fee.
32 A ¶ Abner rises.
33 A Fists clench.
34 A Zeke steps back, tooth in hand.
35 D ABNER: Hand it over, Doc.
36 D ZEKE: Two dollars, Abner.
37 D ABNER: I'll give you the two dollars.
38 D ZEKE: And the tooth.
39 D ABNER: And the tooth stays mine.
* 40 A ¶ A long silence.
41 A Then Zeke tosses the tooth.
42 A Abner catches it.
43 A Pays two coins.
44 A They both exhale.
45 D ZEKE: Next time, I'll price by the karat.
46 D ABNER: Next time, I'll pull my own.
47 A ¶ He pockets the tooth, tips his hat, and leaves.
48 A Zeke watches him go.
* 49 A The lantern hisses.
* 50 A Outside, a mule brays.
51 A He pours himself a drink.
52 D ZEKE [CONT'D] (to the empty chair): Next.
* 53 A ¶ The tent flap opens on wind and dark.

### SCENE s00159 | EXT. SNOWFIELD - BELOW A CRASHED BUSH PLANE - DAY
Detected names (may be incomplete or contain aliases): ASTRID VESTERGAARD-NNAMDI
* 1 A ¶ White.
* 2 A Everything white.
* 3 A A twisted aluminum wing juts from a drift like a broken bone.
* 4 A Wind scours the ridge.
5 A ¶ ASTRID VESTERGAARD-NNAMDI, 30s, in a torn orange parka, kneels beside a battered satchel.
6 A Her face is cracked with cold.
* 7 A A tiny emergency radio sits in her lap, its antenna taped to a ski pole.
8 A ¶ She lifts it.
9 A Presses the key.
10 A Releases.
* 11 A ¶ Static.
12 A ¶ She tries again.
* 13 A Static.
14 A ¶ She sets it down.
15 A Breathes.
16 A Fumbles in the satchel, withdraws a small digital recorder, and presses PLAY.
17 D ASTRID [V.O.] (recording, scratchy): Day two. I'm okay. Cold, but okay. I keep calling. Nobody answers.
18 A ¶ She listens, eyes shut.
19 D ASTRID [V.O., CONT'D] (recording): If you find this, tell Mom I wasn't scared.
20 A ¶ Her mouth twists.
21 A She turns the recorder off.
22 A ¶ She looks at the wing.
23 A At the sky.
* 24 A At the ridge, where a shape, grey, hunched, sways.
25 A ¶ She stills.
26 A Her hand finds the pistol flare in her pocket.
* 27 A ¶ The shape resolves.
* 28 A A caribou.
* 29 A It stares.
30 A She stares.
* 31 A A moment of animal truce.
* 32 A ¶ It turns and ambles over the ridge.
33 A ¶ She lets out a shuddering breath, laughs once, short, ragged.
* 34 A ¶ The radio crackles.
* 35 A ¶ Three clicks.
* 36 A A pause.
* 37 A Three clicks again, from far away.
38 A ¶ She grabs it.
39 A Fumbles.
40 A Presses the key.
41 D ASTRID (hoarse): This is Astrid. This is Astrid Vestergaard. I'm alive.
42 A ¶ She drops her head.
* 43 A Snow stings her cheek.
44 A ¶ She closes her eyes and listens to the radio.

### SCENE s00160 | INT. DRIVE-THROUGH WEDDING CHAPEL - NIGHT
Detected names (may be incomplete or contain aliases): LENNY, ABIODUN, BIANCA STROZZI-OKORO, ELIAS NAKAMURA-FLORES
* 1 A ¶ Pink neon.
* 2 A A window hatch cut into a stucco wall.
* 3 A An organ plays on a loop from a speaker on a post.
* 4 A A plastic arch of roses.
5 A ¶ Inside the booth: REVEREND-ISH LEONARD "LENNY" ABIODUN, 50s, in a rented robe, drinks from a paper cup.
* 6 A ¶ A car pulls up.
* 7 A Headlights wash the arch.
8 A Out of the driver's window leans BIANCA STROZZI-OKORO, 30s, in a white dress and a leather jacket.
9 A In the passenger seat sits ELIAS NAKAMURA-FLORES, 30s, bow tie crooked.
10 D LENNY: Welcome to the Chapel of Quick Vows. What's your order?
11 D BIANCA: Two vows, no fries.
12 D ELIAS: We'd like the premium.
13 D LENNY: The premium has a rose.
14 D ELIAS: Then give us the rose.
15 D BIANCA: Elias, we don't have time.
16 D ELIAS: Bianca, the rose is five dollars.
17 D LENNY: It's a real rose.
18 D BIANCA: It's plastic.
19 D LENNY: It's a real plastic rose.
20 D ELIAS: We'll take the rose.
21 A ¶ Bianca sighs.
22 A Hands cash.
23 A Lenny passes a rose through the window.
24 A Elias holds it.
25 A She snatches it.
26 A They both laugh.
27 D LENNY: Names?
28 D BIANCA: Bianca Strozzi-Okoro.
29 D ELIAS: Elias Nakamura-Flores.
30 D LENNY: Do you, Elias, take this woman...
31 D ELIAS: I do.
32 D LENNY: I haven't finished.
33 D BIANCA: He knows the rest.
34 D LENNY: Do you, Bianca...
35 D BIANCA: Absolutely.
36 D LENNY: By the power vested in me by the state of Nevada and a two-day online course...
37 D ELIAS: Lenny.
38 D LENNY: ...I pronounce you...
39 D BIANCA: Lenny!
40 D LENNY: ...married.
* 41 A ¶ Silence.
* 42 A The organ stutters.
43 A Elias leans out and kisses Bianca.
44 A She grabs his lapel.
* 45 A The horn honks, long and joyful.
46 D LENNY [CONT'D]: That's twelve dollars, plus tip.
47 D BIANCA: We have to talk about my mother.
48 D ELIAS: What about your mother?
49 D BIANCA: She's in the back seat.
50 A ¶ A hand rises over the headrest.
51 A A tiny wave.
52 A Lenny drops his cup.

### SCENE s00161 | INT. GENERATION SHIP "MERIDIAN" - SEED VAULT - SHIP'S NIGHT
Detected names (may be incomplete or contain aliases): CAPTAIN IFEOMA ROTHSCHILD-ADAMU, CHIEF BOTANIST HAKON LEIVESTAD, ENGINEER PRAVEEN MBANDAKA-DOYLE, TECHNICIAN SOLENNE ACHTERBERG-NGO, YUSUF KAZEMI-BROOKS, BRIDGE, COMMANDER DEWITT LARKSPUR-OSEI, LARKSPUR
* 1 A ¶ A frozen cavern of steel drawers, floor to ceiling.
* 2 A Blue frost on the rails.
* 3 A Breath fogs in the air.
4 A ¶ Five crew in thermal suits, headlamps swinging, work a cart down the center aisle.
5 A ¶ CAPTAIN IFEOMA ROTHSCHILD-ADAMU, 50s, leads.
6 A CHIEF BOTANIST HAKON LEIVESTAD, 40s, carries a scanner.
7 A ENGINEER PRAVEEN MBANDAKA-DOYLE, 30s, hauls a toolbox.
8 A TECHNICIAN SOLENNE ACHTERBERG-NGO, 20s, monitors a wrist display.
9 A And YUSUF KAZEMI-BROOKS, 30s, medic, trails with a field kit.
10 D IFEOMA (to all): Vault Four. Be quick. The air scrubbers fail in nine minutes.
11 D HAKON: Drawer four-twelve.
12 D PRAVEEN (muttering): Four-twelve, four-twelve.
13 D SOLENNE: Temperature's rising.
14 D YUSUF: How much?
15 D SOLENNE: Two degrees. In a minute.
16 D IFEOMA: Move.
17 A ¶ They reach the drawer.
18 A Hakon scans.
* 19 A Green light.
20 A He pulls.
* 21 A Inside: row upon row of tiny vials, frosted white.
22 D HAKON (softly): The wheat.
23 D PRAVEEN: Take it.
24 D HAKON: All of it.
25 A ¶ He lifts a rack.
26 A Hands it to Solenne.
27 A She slides it into a cooler.
28 A Yusuf hovers, anxious.
* 29 A ¶ The ship shudders.
* 30 A A klaxon begins, low and pulsing.
31 D IFEOMA (into her collar): Bridge, status.
32 D BRIDGE [V.O.] (radio, tinny): Captain, we've lost cooling on Deck Nine. You have six minutes.
33 D IFEOMA: Understood.
* 34 A ¶ At the far end of the aisle, a hatch slides open.
35 A A figure steps through, silhouetted by red emergency light.
36 A ¶ COMMANDER DEWITT LARKSPUR-OSEI, 60s, black uniform, a sidearm drawn, stands in the doorway.
37 D LARKSPUR: Nobody touches the seed.
38 A ¶ The five crew freeze.
39 A Hakon, mid-lift, half-turns.
* 40 A Praveen's toolbox hits the floor.
41 A Solenne steps back.
42 A Yusuf raises both hands.
43 A Ifeoma does not move.
44 D IFEOMA: Commander. The vault is failing.
45 D LARKSPUR: The vault is mine.
46 D IFEOMA: The ship will starve.
47 D LARKSPUR: The ship will obey.
* 48 A ¶ A tense silence.
* 49 A The klaxon pulses.
50 D SOLENNE (whispering): Captain...
51 D IFEOMA (low): Easy.
52 D HAKON (to himself): The wheat is warming.
53 A ¶ Ifeoma takes one slow step forward, palms open.
54 D IFEOMA: Dewitt. We both took the oath.
55 D LARKSPUR: I took it first.
56 A ¶ He steps closer.
57 A The gun trembles.
58 D IFEOMA: Then keep it. Open the lock. Let us take the seed.
* 59 A ¶ A beat.
60 A Then Larkspur lowers his weapon.
61 A Hand shaking, he pulls a keycard from his jacket and sweeps it over the panel.
* 62 A A deep thunk.
* 63 A The vault door opens wider.
64 D LARKSPUR (hoarse): Go.
65 A ¶ They run.
* 66 A The cart rattles.
* 67 A Frost sprays from the wheels.
68 A Behind them, the Commander stays by the hatch, watching them vanish into the dark with the ship's future in a cooler.

### SCENE s00162 | EXT. SCHOOL BUS - RAILROAD CROSSING - DUSK
Detected names (may be incomplete or contain aliases): STRANGER, LOTTE FAIRBANKS-OJO, WENDELL
* 1 A ¶ An old yellow bus sits dead on the tracks, hazards blinking.
* 2 A The engine ticks.
* 3 A A signal bell dings in the distance.
4 A ¶ A STRANGER, 17, in a letterman jacket, leans out of the open door.
5 A Beside him, on the steps, sits LOTTE FAIRBANKS-OJO, 17, holding a trumpet case.
6 D STRANGER: It won't start.
7 D LOTTE: I noticed.
8 D STRANGER: Do you know cars?
9 D LOTTE: I know trumpets.
10 A ¶ He laughs.
11 A She doesn't.
* 12 A The bell dings faster.
* 13 A Far away, a train horn.
14 D STRANGER: Okay. We should get off.
15 D LOTTE: I'm not leaving my trumpet.
16 D STRANGER: It's a trumpet.
17 D LOTTE: It was my grandfather's.
18 A ¶ He looks down the track.
* 19 A The light grows.
20 A He looks at her.
21 D STRANGER [CONT'D]: What's your name?
22 D LOTTE: Lotte.
23 D STRANGER: Wendell. I mean, Wendell is my name. Wendell Dube.
24 D LOTTE (deadpan): Hi, Wendell.
25 D WENDELL: Hi.
* 26 A ¶ The horn blares.
* 27 A Closer.
28 A He grabs her arm.
29 A She grabs the trumpet.
30 A Together they leap from the bus and roll down the gravel embankment.
* 31 A ¶ Behind them, the train hits.
* 32 A ¶ A burst of yellow.
* 33 A A shower of steel.
* 34 A Silence.
35 A ¶ Lotte sits up, trumpet case clutched to her chest.
36 A Wendell sits beside her, breathing hard.
37 D LOTTE: Thanks.
38 D WENDELL: Sure.
39 A ¶ She opens the case.
* 40 A The trumpet gleams, unscratched.
41 A She lifts it, blows a single, clean, brassy note.
42 A ¶ They stare at each other.
43 A And laugh.

### SCENE s00163 | INT. PUDDING LANE BAKERY - NIGHT - 1666
Detected names (may be incomplete or contain aliases): MASTER THOMAS FARRIER-WELLS, MISTRESS GWENLLIAN FARRIER-WELLS, HOBB PETTIGREW, JOAN MACKENZIE-AJAYI, ABRAHAM BENVENISTE, STRANGER, SILVANUS
* 1 A ¶ A low-beamed oven room.
* 2 A Flour in the air.
* 3 A Trays of unbaked loaves.
* 4 A A hearth glowing orange.
5 A ¶ Six people sit around a long table, sharing a late supper of bread and cheese by one candle.
6 A ¶ MASTER THOMAS FARRIER-WELLS, 50s, baker, at the head.
7 A His wife, MISTRESS GWENLLIAN FARRIER-WELLS, 40s.
8 A Their journeyman, HOBB PETTIGREW, 20s.
9 A The maid, JOAN MACKENZIE-AJAYI, teens.
10 A A traveling cloth merchant, ABRAHAM BENVENISTE, 60s.
11 A And a young STRANGER in a green cloak, hood up.
12 D THOMAS: Eat. There's more in the oven.
13 D GWENLLIAN: There is always more in the oven.
14 D HOBB (whispering to Joan): Not if the master keeps counting.
15 D JOAN (whispering back): He counts crumbs.
16 A ¶ Abraham chuckles.
17 A The Stranger says nothing, breaking bread slowly.
18 D ABRAHAM: Friend, you've eaten little.
19 D STRANGER: I'm saving room.
20 D ABRAHAM: For what?
21 D STRANGER: For the fire.
* 22 A ¶ A silence.
23 A Thomas sets down his knife.
24 D THOMAS: Sir?
25 D STRANGER (throwing back the hood): Forgive me. My name is Silvanus Carew. I serve the Lord Mayor. I came to warn you.
26 D GWENLLIAN: Of what?
27 D SILVANUS: Of this oven.
28 D THOMAS: My oven has stood thirty years.
29 D SILVANUS: My lord says the wind is wrong tonight.
30 A ¶ Thomas stares at him.
31 A Joan reaches for the poker, smothers the fire.
32 D THOMAS: Hobb, damp the hearth!
33 D SILVANUS: Master baker, damp the hearth!
34 A ¶ They speak at once, loud, and the silence afterward is a cliff.
35 D HOBB: Master?
36 D THOMAS: Do it.
37 A ¶ Hobb leaps to the hearth, dumps a bucket.
* 38 A Steam billows.
* 39 A The room goes grey.
40 A Everyone coughs.
41 A ¶ When it clears, Gwenllian is clutching Thomas's sleeve.
42 A Joan has her hand over her mouth.
43 A Abraham has risen.
44 A ¶ Silvanus is smiling, sadly, as he lowers his hood.
45 D SILVANUS [CONT'D]: Too late, I fear. The wind has already come.
* 46 A ¶ From beyond the shutters, faint, a bell begins to ring.

### SCENE s00164 | INT. MATTRESS SHOWROOM - DAY
Detected names (may be incomplete or contain aliases): CASSIUS BLACKWOOD-ADEYEMI, MARIGOLD DUPONT-ASANTE
* 1 A ¶ A cavernous retail floor of identical beds under bright lights.
* 2 A Price tags like confetti.
* 3 A A banner: "NOTHING DOWN!
* 4 A EVERYTHING SOFT!"
5 A ¶ CASSIUS BLACKWOOD-ADEYEMI, 40s, a sales manager in an ill-fitting suit, stands at a display bed holding a clipboard.
6 A Opposite him, MARIGOLD DUPONT-ASANTE, 30s, a regional auditor with a briefcase, stands with her arms folded.
7 D CASSIUS: Welcome to Bedrock Mattress Gallery. May I interest you in a night of salvation?
8 D MARIGOLD: I'm from corporate.
9 D CASSIUS (sagging): Ah.
10 D MARIGOLD: I'm here to audit your sales.
11 D CASSIUS: Of course.
12 D MARIGOLD: You're down sixty percent.
13 D CASSIUS: It's a down market.
14 D MARIGOLD: Mattresses are never down.
15 D CASSIUS: They're flat, Marigold.
16 D MARIGOLD: That is not funny.
17 D CASSIUS: It's a little funny.
18 A ¶ She walks the floor, scribbling.
19 A He trails her, wringing his hands.
20 D MARIGOLD: Where is everyone?
21 D CASSIUS: Lunch.
22 D MARIGOLD: It's two p.m.
23 D CASSIUS: Long lunch.
24 D MARIGOLD: Cassius.
25 D CASSIUS: Union.
26 D MARIGOLD: You don't have a union.
27 D CASSIUS: We have a book club.
28 D MARIGOLD: That's not the same.
29 D CASSIUS: They read a lot.
30 A ¶ She stops at a display bed.
31 A Presses a hand to the mattress.
* 32 A It sighs.
33 A She pokes it.
34 A Pokes again.
35 D MARIGOLD: This model is called the "Cloud Nine"?
36 D CASSIUS: Yes.
37 D MARIGOLD: It's lumpy.
38 D CASSIUS: It's organic.
39 A ¶ She sits on the edge.
40 A Tests it.
41 A Lies back.
42 A Her eyes drift shut.
43 D MARIGOLD (softly): Oh.
44 D CASSIUS: Yes.
45 D MARIGOLD: Oh, no.
46 D CASSIUS: Corporate always says that.
47 D MARIGOLD: This is the best mattress I've ever laid on.
48 D CASSIUS: Why do you think nobody's at lunch?
49 A ¶ She sits up slowly.
50 A Cassius gestures behind her.
51 A Along the back wall, twelve employees lie on twelve mattresses, hands folded on their chests, eyes closed, perfectly still.
* 52 A A soft, collective snore rises.
53 A ¶ Marigold looks at them.
54 A Looks at her clipboard.
55 A Looks at Cassius.
56 A Slowly, she lowers the clipboard, takes off her shoes, and sets them neatly on the floor.
57 A Then she lies back down.
58 D MARIGOLD [CONT'D] (eyes closed): How much?
59 D CASSIUS: Nothing down.
60 D MARIGOLD: Of course.
61 A ¶ Cassius pulls a blanket from a rack and lays it over her.
62 A He tiptoes away, switching off the lights one by one.

### SCENE s00165 | INT. TAXIDERMY SHOP - BACK ROOM - NIGHT
Detected names (may be incomplete or contain aliases): STRANGER, PRIYA, NAKASHIMA, BRONWYN OKORO-LINDHOLM, SOFIA CALDERON-BEAUMONT, IMANI THOMPSON-REYES, WILLA ACHTERBERG, MARGUERITE
* 1 A ¶ A cramped room hung with glass-eyed stags and mounted pheasants.
* 2 A A sleepover in sleeping bags on a threadbare rug.
* 3 A A single lantern.
4 A ¶ Six girls, thirteen and fourteen, cross-legged in a ring.
5 A A STRANGER among them, a girl none of the others quite remembers inviting, sits at the edge of the lantern's reach, face half in shadow.
6 A ¶ PRIYAMVADA "PRIYA" NAKASHIMA, 13, hugs a pillow.
7 A BRONWYN OKORO-LINDHOLM, 14, tells a story with a flashlight under her chin.
8 A SOFIA CALDERON-BEAUMONT, 13, braids her hair.
9 A IMANI THOMPSON-REYES, 14, flips through a magazine.
10 A And WILLA ACHTERBERG, 13, looks at the ceiling.
11 D BRONWYN: ...and the taxidermist never came home.
12 D SOFIA: Stop.
13 D BRONWYN: They found him in his own shop, stuffed.
14 D PRIYA: That's gross.
15 D IMANI: That's the plot of a movie.
16 D BRONWYN: It's the plot of this shop.
17 D WILLA (quietly): Someone is standing behind the deer.
18 A ¶ Everyone looks.
* 19 A A stag's head hangs on the wall, its antlers throwing shadow.
* 20 A Nothing.
21 D SOFIA: There's no one.
22 D WILLA: I saw an eye.
23 D IMANI: It's glass.
* 24 A ¶ The lantern gutters.
25 A The Stranger leans forward.
26 A Her face enters the light: pale, calm, smiling.
27 D STRANGER: Do you want to know my name?
28 D PRIYA: We thought you came with Sofia.
29 D SOFIA: I thought she came with you.
30 D STRANGER: My name is Marguerite.
31 D BRONWYN (whispering): Marguerite is the name on the shop door.
32 D MARGUERITE: Yes.
33 A ¶ She rises.
34 A The ring of girls draws back.
* 35 A The lantern flickers out.
* 36 A ¶ In the dark, six pairs of eyes catch the last glint of the stag's glass stare.
37 A Then, one by one, they stop blinking.

### SCENE s00166 | INT. SALT MINE - CORPORATE RETREAT HALL - DAY
Detected names (may be incomplete or contain aliases): FELICITY ARMSTRONG-NWOSU, GIDEON PALAMARCHUK-DIOP, ANNELIESE VON TRAPP-OKAFOR
* 1 A ¶ A vaulted chamber a thousand feet underground, carved from white crystal.
* 2 A String lights.
* 3 A Folding tables.
* 4 A A flip chart reads "OUR CULTURE: DEPTH."
5 A ¶ FELICITY ARMSTRONG-NWOSU, 40s, a regional director in a hard hat and blazer, stands in front of the flip chart with a marker.
6 A At the table sits GIDEON PALAMARCHUK-DIOP, 30s, an analyst, glaring at the screen of a phone that has no signal.
7 A ¶ She taps the chart.
8 D FELICITY: Depth. Roots. Foundation. Let's build this from the ground down.
9 D GIDEON: We are literally underground.
10 D FELICITY: Exactly.
11 A ¶ He sighs.
12 A She writes "TRUST" in the margin and underlines it twice.
13 D FELICITY [CONT'D]: Trust.
14 A ¶ He looks at the phone.
15 A Looks at her.
16 A Puts the phone away.
17 D GIDEON: Okay. I trust you.
18 D FELICITY: Do you?
19 D GIDEON: No.
20 D FELICITY: Good. That's honest.
21 A ¶ She sets down the marker.
* 22 A The mine hums with ventilation.
* 23 A ¶ The elevator door dings.
24 A A third person steps off, brisk and bright-eyed: ANNELIESE VON TRAPP-OKAFOR, 50s, a consultant in a white lab coat, carrying a wooden box.
25 D ANNELIESE: I'm sorry I'm late. The cage was slow.
26 D FELICITY: Anneliese! We were just on trust.
27 D ANNELIESE: Wonderful. I brought the exercise.
28 A ¶ She sets the box on the table.
29 A Opens it.
* 30 A Inside, eight small salt crystals, glittering.
31 D ANNELIESE [CONT'D]: Each of you will pick one. Hold it. Tell me what it means.
32 A ¶ Gideon holds one up.
33 A Peers at it.
34 A Felicity takes another, hesitates, turns it over.
35 D GIDEON: It means my hands are cold.
36 D ANNELIESE: Gideon.
37 D GIDEON: It means I miss the sun.
38 D ANNELIESE: That's a start.
39 D FELICITY (softly): It means I have not seen my kids in a week.
* 40 A ¶ Silence.
41 A Gideon looks at her.
42 A She stares at the crystal, not at him.
43 D ANNELIESE (gently): That's the exercise.
44 D FELICITY: Is it?
45 D ANNELIESE: Yes.
46 A ¶ Felicity blinks hard.
47 A Gideon pulls a chair beside her.
48 A He doesn't say anything.
49 A After a moment, she sets the crystal down.
50 D FELICITY: Let's go up.
51 D GIDEON: The elevator doesn't run until four.
52 D FELICITY: Then we'll wait.
53 A ¶ They sit.
54 A Anneliese packs the box.
* 55 A The lights hum.

### SCENE s00167 | INT. HOTEL BALLROOM - EMPTY - NIGHT
Detected names (may be incomplete or contain aliases): CONGRATULATIONS, BAZ, WOJCIECHOWSKI-OKAFOR
* 1 A ¶ Round tables, white cloths.
* 2 A A raised dais.
* 3 A A banner: "CONGRATULATIONS, BARRY & PETRA."
* 4 A Empty champagne flutes.
5 A ¶ BARRY "BAZ" WOJCIECHOWSKI-OKAFOR, 40s, in a rumpled tux, stands behind the microphone.
* 6 A A tape recorder sits on the podium beside him.
7 A ¶ He taps the mic.
* 8 A Feedback.
9 D BAZ: Good evening, everyone. I'm Barry, the best man.
10 A ¶ He pauses.
* 11 A Nobody is there.
12 D BAZ [CONT'D] (to himself): Okay. Rehearsal.
13 A ¶ He presses RECORD on the tape.
14 A Clears his throat.
15 D BAZ [CONT'D]: Petra and I go way back. To fourth grade, when she punched me in the face.
16 A ¶ He stops.
17 A Presses STOP.
18 A REWIND.
19 A PLAY.
20 D BAZ [V.O.] (tape): ...when she punched me in the face.
21 A ¶ He winces.
22 D BAZ: Too violent.
23 A ¶ He presses RECORD again.
24 D BAZ [CONT'D]: Petra and I go way back. To fourth grade, when she gave me a high-five.
25 A ¶ PLAY.
26 D BAZ [V.O.] (tape): ...gave me a high-five.
27 D BAZ: Too nice. She hit me.
28 A ¶ He sighs.
29 A RECORD.
30 D BAZ [CONT'D]: To the happy couple. May your marriage be like a good wine. Aged, complex, and occasionally bitter.
31 A ¶ PLAY.
32 D BAZ [V.O.] (tape): ...occasionally bitter.
33 D BAZ: Horrible. Terrible. Delete.
34 A ¶ He slumps over the podium.
35 A Stares at the empty room.
36 A Slowly, he straightens.
37 D BAZ [CONT'D] (quietly): Petra. Barry. I'm so happy for you both. I mean it.
38 A ¶ PLAY.
39 D BAZ [V.O.] (tape, quiet): I'm so happy for you both. I mean it.
40 A ¶ He listens.
41 A Nods once.
42 A He tucks the tape recorder into his pocket, adjusts his tie, and walks off the dais, whistling.

### SCENE s00168 | INT. MOUNTAIN VILLAGE DENTAL CLINIC - DAY
Detected names (may be incomplete or contain aliases): AMADEUS BRZEZINSKI-OYELARAN, ASSISTANT KALINDA ROSSITER-MWANGI, ELDER ODYSSEUS PAPADAKIS-NGUYEN, TEODORA, JACOB, MIRIAM
* 1 A ¶ One chair.
* 2 A One lamp.
* 3 A A window onto a goat pasture.
* 4 A A bell tinkles.
5 A ¶ DR. AMADEUS BRZEZINSKI-OYELARAN, 50s, white coat, mask, pulls on gloves.
6 A Beside him, ASSISTANT KALINDA ROSSITER-MWANGI, 30s, lays out instruments.
7 A In the chair: the village headman, ELDER ODYSSEUS PAPADAKIS-NGUYEN, 70s, jaw clenched.
8 A At the door, three villagers wait: TEODORA, 30s; JACOB, 20s; and a child, MIRIAM, 8, clutching a goat-shaped toy.
9 D AMADEUS: Open, please.
10 D ODYSSEUS: No.
11 D AMADEUS: Elder, I need to look.
12 D ODYSSEUS: Look from there.
13 D KALINDA (gently): Sir. Just a peek.
14 A ¶ He opens.
15 A Amadeus peers.
16 A Tuts.
17 D AMADEUS: That is the worst molar I have seen in thirty years.
18 D ODYSSEUS (muffled): Thank you.
19 D AMADEUS: It's not a compliment.
20 D ODYSSEUS (muffled): It is to me.
* 21 A ¶ Calm.
* 22 A The clinic is bright and still.
* 23 A A goat bleats outside.
24 A Teodora and Jacob exchange glances.
25 A Miriam hugs her toy tighter.
26 D AMADEUS: Kalinda. Local.
27 A ¶ She hands him the syringe.
28 A He lifts it.
29 A The elder's eyes widen.
30 A The villagers lean forward.
* 31 A ¶ Suddenly, a roar from the pasture.
32 A The door slams open and a goat charges in, horns down, bell clanging, scattering Teodora and Jacob and Miriam, who scream and leap onto the waiting chairs.
33 A ¶ The goat skids on the tile, slams into the instrument tray.
* 34 A Steel clatters.
35 A The elder bolts upright.
36 A Amadeus drops the syringe.
37 A Kalinda lunges for the goat.
38 A It dodges.
39 A Everyone shouts at once.
40 D ODYSSEUS: That's my goat!
41 D AMADEUS: Your goat!
42 A ¶ The goat, panting, plants itself in the dental chair, chewing a paper bib.

### SCENE s00169 | INT. CAR FERRY - UPPER DECK DINING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): MATRIARCH ZAINAB ABDULLAHI-PREWITT, CYRIL, AUGUSTINE, PERPETUA, ROSAMUND, THADDEUS
* 1 A ¶ A long cafeteria table bolted to the floor.
* 2 A Fluorescent lights.
* 3 A A view of black water.
* 4 A The ferry throbs beneath them.
5 A ¶ Six members of the Abdullahi-Prewitt family sit with trays of congealed shepherd's pie.
* 6 A A funeral reception, after the funeral.
7 A ¶ MATRIARCH ZAINAB ABDULLAHI-PREWITT, 70s, at the head.
8 A Her sons, CYRIL, 50s, and AUGUSTINE, 40s, glare across the table.
9 A Cyril's wife, PERPETUA, 50s, grips her napkin.
10 A Their daughter ROSAMUND, 20s, scrolls on her phone.
11 A And the youngest, THADDEUS, 16, keeps his eyes on the water.
12 D ZAINAB: Eat. He would have wanted us to eat.
13 D CYRIL: He wanted the boat.
14 D AUGUSTINE: He wanted the boat sold.
15 D CYRIL: He wanted it kept.
16 D PERPETUA: Cyril, please.
17 D AUGUSTINE: You never listened to him.
18 D CYRIL: I listened. I just disagreed.
19 D ROSAMUND: Can we not do this on a ferry?
20 D THADDEUS: We're not leaving a ferry.
21 D ZAINAB: Quiet, all of you.
22 A ¶ They are not quiet.
23 D AUGUSTINE: Dad's will says I sell it.
24 D CYRIL: Dad's will says I decide.
25 D PERPETUA: Both of you, stop.
26 D AUGUSTINE: You always take his side.
27 D PERPETUA: I take no side. I take the family's.
28 D ROSAMUND: There is no family.
29 D THADDEUS: I'm still here.
* 30 A ¶ Silence.
* 31 A The ferry lurches over a wave.
* 32 A Trays slide.
33 A Zainab rises, steadies herself on the table.
34 D ZAINAB: Your father's will is in my purse. He wrote it on a napkin.
35 D CYRIL: A napkin?
36 D ZAINAB: A napkin.
37 A ¶ She opens her purse.
38 A Withdraws a folded, grease-spotted paper napkin.
39 A She sets it down.
40 A Flattens it.
41 A Everyone leans in.
42 D ZAINAB [CONT'D]: "Give the boat to whoever sails it."
* 43 A ¶ Silence.
44 D ZAINAB [CONT'D]: That's all.
45 A ¶ Thaddeus rises, slowly.
46 A He crosses to the window.
47 A He looks out into the dark at the glow of the wheelhouse.
48 D THADDEUS (quietly): I know how.
49 A ¶ The others look at him.
* 50 A For the first time all evening, nobody speaks.

### SCENE s00170 | INT. FROZEN TUNA AUCTION HALL - BEFORE DAWN
Detected names (may be incomplete or contain aliases): HANA ARAKAWA, BIG LOU DELACROIX, PRIYA NAIR, TEDDY BRANCA, INSPECTOR WU, DISPATCH
* 1 A ¶ Concrete floor, steel hooks, rows of frozen tuna laid out like torpedoes under hard white lights.
* 2 A Breath hangs in the air.
3 A ¶ HANA ARAKAWA, 40s, crew leader, wears a fish-market apron over a black thermal.
4 A BIG LOU DELACROIX, 50s, heavyset, carries a hand truck.
5 A PRIYA NAIR, late 20s, tablet strapped to her forearm, checks tags.
6 A TEDDY BRANCA, 30s, jittery, wears a forklift vest.
7 A INSPECTOR WU, 60s, a night guard with a thermos, stands by the scale.
8 D HANA: Number forty-one. The one with the red tag.
9 D PRIYA: Forty-one is clean. The case is in the belly. Eleven kilos, give or take.
10 D BIG LOU: Eleven kilos of what, again? Nobody told me it was in a fish.
11 D HANA: Bearer bonds. Sealed in plastic. Don't ask who put them there.
12 D TEDDY: I'm asking. I'm asking right now.
13 D HANA: Wu is on the scale. When he turns, Lou, you move the truck.
14 D INSPECTOR WU (calling over): You people are early again.
15 D HANA: Auction prep, Inspector. Same as every Tuesday.
16 A ¶ Wu sips from the thermos, then steps away from the scale.
17 A Lou rolls the hand truck forward.
18 A Teddy drops a clipboard.
* 19 A It clatters.
20 A Everyone freezes.
21 D DISPATCH [V.O.] (over Wu's radio): Unit nine, come in. Unit nine.
22 D INSPECTOR WU (into radio): Nine here. Go ahead.
23 D DISPATCH [V.O.]: Customs wants forty-one held for inspection. Do not release it.
24 A ¶ Wu looks at the red tag.
25 A Looks at Hana.
26 A Hana smiles with her mouth only.
27 D HANA: Dual-dialogue time, boys.
28 D BIG LOU: Customs? Nobody said customs.
29 D PRIYA: I flagged it clean an hour ago, I swear.
30 D HANA: Priya, the tag. Swap it for thirty-eight.
31 D PRIYA: Thirty-eight is a dud. It's actual fish.
32 D HANA: Then it'll pass. Teddy, distract him.
33 D TEDDY: With what?
34 D HANA: Cry. You're good at it.
35 A ¶ Teddy sobs loudly, dramatically.
36 A Wu turns.
37 A Priya swaps the tags.
38 A Lou hauls forty-one onto the truck and wheels it toward the loading door.
39 D DISPATCH [V.O.]: Unit nine, confirm hold on forty-one.
40 D INSPECTOR WU: Forty-one is on hold. Confirmed.
* 41 A ¶ The loading door rolls up.
* 42 A Gray dawn floods in.
43 A Lou pushes through.
44 A The others scatter.

### SCENE s00171 | INT. LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): BERNADETTE COLE, NACHO, REYES
* 1 A ¶ Dryers tumble.
* 2 A One flickering tube.
* 3 A Rain on the glass.
4 A ¶ BERNADETTE COLE, 50s, folds a man's shirts.
5 A Precise.
6 A Too precise.
7 A IGNACIO "NACHO" REYES, 20s, enters, soaked, a duffel on his shoulder.
8 A He drops it.
9 A Takes the seat across from her.
10 A She does not look up.
11 A He sets a ring on the folding table.
12 A She folds a sleeve.
13 A He taps the ring.
14 A She smooths a collar.
15 D BERNADETTE: You're late.
16 D NACHO: Bus was slow.
17 D BERNADETTE: Eleven years, Ignacio. The bus was slow.
18 D NACHO: I wrote you.
19 D BERNADETTE: You wrote Dad. Dad's dead.
20 D NACHO: I know he's dead. I was in the room.
21 D BERNADETTE: You were in the hallway.
22 D NACHO: Okay. The hallway. I was in the hallway, Bernie, because you told me not to come in. You said, quote, he doesn't want you here.
23 D BERNADETTE: He didn't.
24 D NACHO: He asked for me. The nurse told me.
25 D BERNADETTE: The nurse didn't know him.
26 D NACHO: Neither did you.
27 A ¶ She stops folding.
* 28 A A dryer buzzes.
29 A Neither moves.
30 A Then she sweeps the shirts off the table with one arm.
* 31 A They scatter across the floor.
32 A Nacho stands, kicks the duffel, and the ring spins off the table and rolls under a machine.

### SCENE s00172 | INT. HOLLOW GIANT OAK - TWILIGHT
Detected names (may be incomplete or contain aliases): QUEEN ELSPETH, SIR BRAM THORNWICK, PAGES, TWIG, NETTLE, STRANGER, WRENNA
* 1 A ¶ A throne room carved inside a dead tree.
* 2 A Roots for pillars.
* 3 A Fireflies in jars.
4 A ¶ QUEEN ELSPETH, 70s, sits wrapped in moss-green wool.
5 A Her crown is a ring of antlers.
6 A A cloaked FIGURE stands in the doorway, dripping.
7 A Beside the throne, SIR BRAM THORNWICK, 50s, one-armed knight, rests a hand on his hilt.
8 A Two PAGES, TWIG and NETTLE, twins, 10, hide behind a root.
9 D STRANGER: I came about the debt.
10 D QUEEN ELSPETH: Debts are paid at dawn. This is dusk.
11 D STRANGER: Then I'm early.
12 A ¶ Bram steps forward.
13 A Sword half drawn.
14 D SIR BRAM: Name yourself.
15 A ¶ The Stranger lowers the hood.
16 A A woman, 30s, bark-pale skin, eyes like polished amber.
17 D STRANGER: You know it. Say it, Brammy.
18 A ¶ Bram releases the sword.
19 A Stares.
20 D SIR BRAM: Wrenna.
21 D WRENNA: Wrenna Ashgrove. The tree-keeper's daughter. The one you left under the roots.
22 D QUEEN ELSPETH: You were dead.
23 D WRENNA: So were the roots, once.
24 A ¶ Twig whispers to Nettle.
25 A Nettle shushes her.
26 D TWIG (whispering): Is she a ghost?
27 D NETTLE: Ghosts don't drip.
28 A ¶ Wrenna sets a small acorn on the floor.
* 29 A It cracks.
* 30 A A green shoot unfurls, and stops.
* 31 A Wilts.
32 A She sighs.
33 D WRENNA: I thought I'd have more left.
34 D QUEEN ELSPETH: Sit, child.
35 A ¶ Wrenna sits on a root.
36 A Elspeth sets her crown aside.
37 D QUEEN ELSPETH [CONT'D]: The debt is forgiven.
38 D WRENNA: I didn't come to be forgiven.
39 D SIR BRAM: Then what?
40 D WRENNA: To see it. Once. Before it falls.
* 41 A ¶ The fireflies dim, one jar at a time.

### SCENE s00173 | EXT. SALT FLATS - MIDDAY
Detected names (may be incomplete or contain aliases): DOROTHY MAE PRUITT, LORETTA PRUITT, JUDGE HARLAN CREEL, MILO
* 1 A ¶ A white, cracked desert under a merciless sun.
* 2 A Heat shimmers off the ground.
* 3 A In the distance, an overturned jeep lies on its roof like a dead beetle.
4 A ¶ DOROTHY MAE PRUITT, 50s, a surveyor in a wide-brimmed hat, sits in the thin shade of the jeep.
5 A Her sister, LORETTA PRUITT, 40s, kneels beside her with a canteen held upside down, shaking out the last drops.
6 A Across from them stands JUDGE HARLAN CREEL, 60s, a man in a ruined linen suit, one shoe missing.
7 A Behind him, MILO, 20s, their driver, drags a spare tire from the wreck and tries to prop it against the axle as a sunshade.
8 A ¶ Dorothy watches Loretta tilt the canteen.
9 A Loretta does not meet her eyes.
10 A Harlan licks his cracked lips and takes a step toward the canteen.
11 A Milo drops the tire with a grunt, then stands between Harlan and the sisters without seeming to decide to.
12 D HARLAN: There's a well at the old mine. Four miles.
13 D DOROTHY: Four miles that way, or four miles you think that way?
14 D HARLAN: I'm not in the habit of guessing.
15 D LORETTA: You're missing a shoe, Judge.
16 A ¶ Harlan glances at his bare foot.
17 A He tucks it behind the other.
18 D MILO (to Dorothy): She's right about the distance. I drove past it Thursday.
19 D DOROTHY: Thursday you drove past everything.
20 A ¶ Milo says nothing.
21 A He picks the tire up again.
22 A ¶ Loretta caps the empty canteen and slowly hands it to Dorothy.
23 A Dorothy turns it in her palm, then hands it back.
24 A Loretta puts it in her bag.
25 A Neither speaks.
26 A Harlan watches the trade as if it were a verdict.
27 D HARLAN: If we leave now, we reach it by dusk.
28 D LORETTA: And if we wait?
29 D HARLAN: Then we wait for a different problem.
30 A ¶ Dorothy stands, brushes salt from her skirt.
31 A She takes Loretta's hat and sets it on her sister's head, straightening the brim.
32 D DOROTHY: Four miles.
33 A ¶ She starts walking.
34 A Loretta follows.
35 A Harlan hesitates, then limps after them.
36 A Milo leaves the tire behind and falls in last, eyes on the horizon.

### SCENE s00174 | INT. STALLED FERRIS WHEEL GONDOLA - NIGHT
Detected names (may be incomplete or contain aliases): GUS, FELLOWES, TAMSIN OYELARAN, MAN IN YELLOW RAINCOAT, YELLOW RAINCOAT, PIKE
* 1 A ¶ Dead carnival below.
* 2 A Fog.
* 3 A The gondola sways.
4 A ¶ AUGUSTA "GUS" FELLOWES, 60s, retired carny, grips the rail.
5 A Across from him, TAMSIN OYELARAN, 20s, scrolls a dead phone.
6 A Beside her, a MAN IN A YELLOW RAINCOAT, face hidden under a hood, sits perfectly still.
7 D GUS (to both): Operator'll be back. They always come back.
8 D TAMSIN (to Gus): Who's they?
9 D GUS (muttering): Nobody. Nobody's there.
* 10 A ¶ Something below laughs.
* 11 A Tinny.
* 12 A Calliope music starts, off-key.
13 D TAMSIN: Do you hear that?
14 A ¶ The Man in the Yellow Raincoat lifts his head.
15 D MAN IN YELLOW RAINCOAT: Ticket, please.
16 A ¶ Gus pats his pockets.
17 A Tamsin shakes her head.
18 D TAMSIN: We didn't buy tickets.
19 D MAN IN YELLOW RAINCOAT: Everyone buys one.
20 A ¶ The hood falls back.
21 A Painted grin.
22 A No eyes.
23 A Gus grabs Tamsin's wrist.
24 D GUS (low, to himself): Pike. It's Pike. Not again.
25 D PIKE: You remember me, Gus.
* 26 A ¶ The gondola drops a foot.
* 27 A Stops.
28 A The grin widens.

### SCENE s00175 | INT. MUNICIPAL CLOCK TOWER - MECHANISM ROOM - DAY
Detected names (may be incomplete or contain aliases): ARTHUR PENROSE-LIND, MIRIAM VOSS, DEZ, OYELOWO, CALLUM BRIGHT
* 1 A ¶ A cramped stone chamber crowded with brass gears the size of cartwheels.
* 2 A A pendulum swings slowly behind a wire cage.
* 3 A Dust floats in the shafts of light from a narrow slit window.
* 4 A The ticking is steady, enormous, almost restful.
5 A ¶ ARTHUR PENROSE-LIND, 60s, silver mustache, tweed jacket, kneels over a toolbox with the unhurried air of a man being paid by the hour.
6 A His partner MIRIAM VOSS, 50s, sharp-eyed and gray-braided, sits on an upturned bucket with a ledger on her knee.
7 A DESMOND "DEZ" OYELOWO, 30s, in a maintenance jumpsuit, oils a gear with a long-spouted can while keeping one ear on the stairwell.
8 A Perched on the stairs, a nervous teenager, CALLUM BRIGHT, 17, holds a walkie-talkie he has not been asked to use.
9 D ARTHUR: Fine work, Dez. The old girl's never sounded better.
10 D DEZ: She hasn't been oiled since Truman.
11 D MIRIAM (not looking up): The bank vault is directly below the east face. Four feet of brick, then the floor.
12 D ARTHUR: And the pendulum shaft goes down how far?
13 D MIRIAM: Right to the ceiling of the vault annex. Nobody ever sealed it.
14 A ¶ Arthur nods, pulls a coil of rope from the toolbox, and measures it against his arm.
15 A Dez sets down the oil can and checks the cage latch.
16 A Callum shifts on the step.
17 A The walkie-talkie crackles with static, and he fumbles it to silence.
18 D CALLUM: Sorry.
19 D ARTHUR: Nothing to be sorry for, lad. Nothing at all.
20 D MIRIAM: Thursday, then. After the noon chime, before the council tour.
21 D DEZ: The council tour is at one.
22 D MIRIAM: Then we have forty minutes. Plenty.
* 23 A ¶ The clock gathers itself and strikes the quarter hour.
* 24 A The gears turn.
25 A Nobody flinches.

### SCENE s00176 | INT. FLOODED COUNTY COURTHOUSE - MAKESHIFT COURTROOM - DAY
Detected names (may be incomplete or contain aliases): JUDGE OLUWASEUN ADEYEMI, DISTRICT ATTORNEY RHONDA KESSLER, PUBLIC DEFENDER MARCUS TIBBS, SKEETER, DUVAL, COURT CLERK PENNY FARRELL, BAILIFF GUS OKAFOR
* 1 A ¶ Sandbags by the doors.
* 2 A Folding tables.
* 3 A A generator hums.
4 A ¶ JUDGE OLUWASEUN ADEYEMI, 60s, presides from a card table.
5 A DISTRICT ATTORNEY RHONDA KESSLER, 40s, stands with a soggy file.
6 A PUBLIC DEFENDER MARCUS TIBBS, 30s, trouser cuffs wet.
7 A The defendant, WALTER "SKEETER" DUVAL, 50s, sits in rubber boots.
8 A COURT CLERK PENNY FARRELL, 20s, types on a laptop on a milk crate.
9 A BAILIFF GUS OKAFOR, 50s, leans on the doorframe.
10 D JUDGE ADEYEMI: Be seated. We'll proceed on the record, such as it is.
11 D RHONDA: Your Honor, the State requests a continuance. Half our exhibits are under four feet of river.
12 D MARCUS: Defense objects. My client has waited eleven months. He can't wait another flood season.
13 D JUDGE ADEYEMI: Mr. Tibbs, your client is charged with stealing a boat.
14 D MARCUS: Borrowing, Your Honor. And that boat is the only reason forty people made it off Pratt Street last night.
15 D RHONDA: Forty people who would not have needed rescuing if he hadn't taken the boat from the marina in the first place.
16 D MARCUS: That is a logical pretzel.
17 D SKEETER: Can I say something?
18 D MARCUS: No.
19 D JUDGE ADEYEMI: Let him.
20 D SKEETER: I'd do it again, Judge. Ain't proud, ain't sorry.
21 D RHONDA: Your Honor, that's practically a confession.
22 D JUDGE ADEYEMI: It's practically a sermon. Ms. Kessler, do you still wish to prosecute?
23 D RHONDA (after a beat): The State will reduce to trespass.
24 D MARCUS: Time served.
25 D JUDGE ADEYEMI: Time served. Mr. Duval, return the boat with a thank-you note.
26 D SKEETER: Yes, ma'am.
27 D JUDGE ADEYEMI: Court is adjourned. Mind the step.

### SCENE s00177 | INT. DRIED-OUT PLANETARIUM - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE IMOGEN SALAZAR, REYNALD KOWALSKI, CURATOR ASTRID LUNDGREN, SECURITY GUARD BASHIR HALLOWAY, CORONER
* 1 A ¶ Dome overhead.
* 2 A Cracked seats.
* 3 A Projector dust under a single work light.
4 A ¶ DETECTIVE IMOGEN SALAZAR, 40s, crouches by a chalk outline.
5 A Her partner, DET. REYNALD KOWALSKI, 50s, eats sunflower seeds.
6 A CURATOR ASTRID LUNDGREN, 60s, stands arms folded.
7 A SECURITY GUARD BASHIR HALLOWAY, 30s, lingers by the door.
* 8 A A voice crackles on Imogen's radio.
9 D IMOGEN: Nobody touched the projector?
10 D ASTRID: Nobody has touched it in years.
11 D REYNALD: Then who turned it on?
12 D BASHIR: Wasn't me. I was at the front desk.
13 D ASTRID: He was at the desk. I saw him.
14 D REYNALD: You saw him at the desk at ten. Victim died at ten-thirty.
15 D BASHIR: I was at the desk until eleven.
16 D IMOGEN: Quiet, all of you.
* 17 A ¶ The room goes still.
18 A Imogen presses the radio.
19 D CORONER [V.O.] (over radio): Imogen, the stars on his jacket. They're real stars. Pins. Constellation of Orion.
20 D IMOGEN: Orion?
21 D ASTRID: Orion is the show we never finished.
* 22 A ¶ The projector hums to life.
* 23 A Above them, the dome blooms with stars.
* 24 A Orion rises.
25 A Bashir takes a step back.
26 D REYNALD: Who's in the booth?
27 D ASTRID: No one. It's automatic.
28 D BASHIR: It's not automatic. Not anymore.
29 D IMOGEN: Bashir. How would you know that?
30 A ¶ Bashir does not answer.
* 31 A The stars drift.
32 A Reynald draws his weapon.
33 A Astrid draws a breath.
34 D ASTRID: It was supposed to be a tribute.
35 D IMOGEN: To who?
36 D ASTRID: To the man in the outline. Yours truly built that show. I built it for him.
37 A ¶ Reynald lowers the gun a few inches, then raises it again, pointing at Astrid.
38 D REYNALD: Ma'am, step away from the console.

### SCENE s00178 | EXT. ICE FLOE - ARCTIC DUSK
Detected names (may be incomplete or contain aliases): CAPTAIN LARS HOLMGREN, NURSE ELENI PAPADAKIS, DEEPAK RAO, FINN HOLMGREN
* 1 A ¶ Gray sky.
* 2 A Wind scours the ice.
* 3 A A tent, flapping.
* 4 A A sled, half-buried.
5 A ¶ CAPTAIN LARS HOLMGREN, 50s, wraps a rope around his fist.
6 A NURSE ELENI PAPADAKIS, 30s, kneels by a wrapped shape.
7 A DEEPAK RAO, 40s, a cook, melts snow in a dented pot.
8 A A boy, FINN HOLMGREN, 12, watches the horizon.
9 D LARS (to all): Pack it up. We move at first light.
10 D ELENI (to Lars): He can't be moved.
11 D LARS: He can't stay.
12 D DEEPAK (to himself): Soup. Only soup left. Sure.
13 A ¶ Finn slowly turns from the horizon.
14 D FINN (to Lars): Dad, the ice is cracking.
15 D LARS: It's always cracking.
16 D FINN: Louder, this time.
17 A ¶ Lars glances down at the wrapped shape, then at Eleni.
18 A She holds his gaze and gently pulls the blanket over the face.
19 A Lars takes off his gloves.
20 A Puts them on Finn.
21 D LARS (quiet, to Finn): Hold these for me.
22 A ¶ He walks to the sled and begins loading it.

### SCENE s00179 | INT. SYNERGEX CORP - OFFICE OF THE VICE PRESIDENT OF CULTURE - DAY
Detected names (may be incomplete or contain aliases): BE CHANGE, VICE PRESIDENT BARRETT QUIGLEY-STONE, PRUDENCE OKONJO
* 1 A ¶ A glass-walled corner office that looks onto a parking structure.
* 2 A A yoga ball sits where a chair should.
* 3 A A neon sign on the wall reads "BE THE CHANGE (PENDING APPROVAL)."
* 4 A A whiteboard is covered with arrows that lead nowhere.
* 5 A Sunlight is filtered through a fake ficus.
6 A ¶ VICE PRESIDENT BARRETT QUIGLEY-STONE, 40s, sleeves rolled, wireless headset on one ear, bounces gently on the yoga ball.
7 A His hair is gelled into a decision.
8 A Across the desk sits PRUDENCE OKONJO, 30s, a quality analyst, pressed blazer, notebook on her knee, patience worn thin.
* 9 A In front of her is a paper cup of kombucha she has not touched.
10 D BARRETT: Prudence. Thanks for jumping on this.
11 D PRUDENCE: You asked me to come at nine. It's nine-forty.
12 D BARRETT: Time is a social construct. But I hear you. Let's circle back to your feedback.
13 D PRUDENCE: It's not feedback. It's a defect report. The product ships with a battery that overheats.
14 D BARRETT: We prefer "enthusiastic."
15 D PRUDENCE: It caught fire in testing.
16 D BARRETT: Enthusiastic. Let's workshop that.
17 A ¶ Barrett stands, bounces once on the ball, and caps a marker.
18 A He writes ENTHUSIASM on the whiteboard and draws an arrow to a drawing of a flame.
19 A Prudence watches without blinking.
20 D PRUDENCE: Barrett, I filed this report six weeks ago.
21 D BARRETT: And we love that. Proactive. Self-starter. That's the energy.
22 D PRUDENCE: It's still unanswered.
23 D BARRETT: Which is why I brought you here. I want to empower you to own the narrative.
24 D PRUDENCE: I don't want to own the narrative. I want to stop the shipment.
25 D BARRETT: Shipment is a strong word.
26 D PRUDENCE: Forty thousand units are in a warehouse in Ohio. Trucks leave Friday.
27 D BARRETT (leaning in, smiling): Let's not boil the ocean.
28 A ¶ Prudence puts the notebook on the desk.
29 A She picks up the kombucha and sets it down again, harder than she meant to.
* 30 A Liquid slops over the rim.
31 D PRUDENCE: Do you know what a thermal runaway is?
32 D BARRETT: Sounds like a marathon.
33 D PRUDENCE: It's when a battery cell heats the next one and the next. It doesn't stop. It's a chain reaction in someone's pocket.
34 D BARRETT: And that's why we're building a culture of openness.
35 D PRUDENCE: You're not hearing me.
36 D BARRETT: I'm hearing the concern. I'm holding space for it.
37 A ¶ Prudence stands.
38 A Her chair rolls backward and hits the ficus.
* 39 A A leaf falls off.
* 40 A It is plastic.
41 D PRUDENCE: People will get burned.
42 D BARRETT: Prudence. Breathe.
43 D PRUDENCE: Don't tell me to breathe.
44 D BARRETT: We have a mindfulness app. It's free for staff.
45 A ¶ Prudence takes the marker out of his hand.
46 A She crosses out ENTHUSIASM and writes FIRE in letters a foot tall.
* 47 A The marker squeaks.
48 A Barrett's smile flickers, then holds.
49 D BARRETT [CONT'D]: That's not on brand.
50 D PRUDENCE: Neither is a lawsuit.
51 D BARRETT: Now you're being negative.
52 D PRUDENCE: I'm being accurate.
53 A ¶ Barrett slides off the yoga ball.
* 54 A It rolls away and bumps a wall.
55 A He picks up his headset, taps it.
56 D BARRETT (into headset): Hey, Dale. Quick favor, can you hold the trucks?
57 A ¶ He listens.
58 A His face drops.
59 D BARRETT [CONT'D] (into headset): What do you mean, they left Tuesday?
60 A ¶ Prudence stares at him.
61 A Barrett slowly removes the headset and places it on the desk like a dead bird.
62 D PRUDENCE: Tuesday.
63 D BARRETT: There may have been a miscommunication.
64 D PRUDENCE: You called me in here to talk me out of it. The trucks were already gone.
65 D BARRETT: I was going to loop you in.
66 D PRUDENCE: You were going to loop me out.
67 A ¶ She picks up her notebook.
68 A Barrett stands very still.
* 69 A The neon sign hums.
70 A Prudence flips to a fresh page, writes something, tears it out, and sets it on his desk.
71 D BARRETT: What is this?
72 D PRUDENCE: My resignation. And the number for the fire marshal.
73 A ¶ She walks out.
* 74 A The door swings behind her.
75 A Barrett stares at the page.
76 A He sits on the floor where the yoga ball used to be, and the neon sign flickers off.

### SCENE s00180 | INT. ABANDONED LIGHTHOUSE - LENS ROOM - NIGHT
Detected names (may be incomplete or contain aliases): DETECTIVE NADIA KOROMA, UNIFORM OFFICER TREVOR LANE, HARBORMASTER OSWALD PRIEST, PHILIPPA ACHTERBERG
* 1 A ¶ Wind howls through broken glass.
* 2 A A crushed lantern lies on its side.
3 A DETECTIVE NADIA KOROMA, 40s, kneels by a body-shaped tarp.
4 A UNIFORM OFFICER TREVOR LANE, 20s, holds a flashlight.
5 A HARBORMASTER OSWALD PRIEST, 60s, stands dripping in the doorway.
6 D NADIA: Time of death?
7 D TREVOR: Coroner says midnight.
8 D OSWALD: Midnight? I was here at midnight.
9 D NADIA: You were here?
10 D OSWALD: Checking the light. It was out.
11 D TREVOR: It's always out.
12 D NADIA: Mr. Priest, did you see anyone?
* 13 A ¶ Footsteps on the spiral stair.
14 A DR. PHILIPPA ACHTERBERG, 50s, in a rain slicker, climbs into the room, medical bag in hand.
15 D DR. ACHTERBERG: Don't touch the tarp.
16 D NADIA: Doctor.
17 D OSWALD: That's not the coroner.
18 D DR. ACHTERBERG: I'm his sister. I came for the body.
19 D NADIA: Your brother's dead?
20 A ¶ Achterberg lowers the bag.
21 A Oswald looks at the floor.
22 A Trevor looks at Nadia.

### SCENE s00181 | EXT. ROOFTOP WATER TOWER - SUNSET
Detected names (may be incomplete or contain aliases): JUNIPER LOPEZ, WES, CHUKWU, DELPHINE ABERNATHY, TOMAS KOWALCZYK
* 1 A ¶ A rusted ladder, a patched tank.
2 A Four teens sit on the catwalk with feet dangling.
* 3 A The town below is small and gold.
4 A ¶ JUNIPER LOPEZ, 16, plays with a bottle cap.
5 A WESLEY "WES" CHUKWU, 17, eats sunflower seeds.
6 A DELPHINE ABERNATHY, 16, writes in a notebook.
7 A TOMAS KOWALCZYK, 15, lies flat, staring up.
8 D WES (to everyone): Last summer before everything changes.
9 D JUNIPER (to Delphine): You're going, right? To the city?
10 D DELPHINE: Maybe.
11 D TOMAS (to himself): Clouds look like nothing.
12 A ¶ Juniper flicks the bottle cap over the rail.
* 13 A It disappears.
14 D WES: Somebody say something deep.
15 D TOMAS: The tank's leaking.
16 A ¶ They all look down.
* 17 A A thin trickle runs along the catwalk.
18 A Nobody moves.

### SCENE s00182 | INT. OBSERVATORY BALLROOM - NIGHT
Detected names (may be incomplete or contain aliases): CELESTE MARCHETTI, JULIAN VOSS, WAITER, ISOLDE FAIRWEATHER
* 1 A ¶ A gala under a brass telescope.
* 2 A Strings tune.
* 3 A Champagne flutes glint.
4 A Couples drift to the dance floor.
5 A ¶ CELESTE MARCHETTI, 30s, stands alone by the window in a green gown.
6 A Her ex, JULIAN VOSS, 30s, enters in a tuxedo, hesitates, then crosses to her.
7 A A WAITER, 20s, passes with a tray.
8 A Behind them, ISOLDE FAIRWEATHER, 60s, Celeste's aunt, watches over her fan.
9 D JULIAN: You came.
10 D CELESTE: You invited me.
11 D JULIAN: I didn't think you'd say yes.
12 D ISOLDE (calling over): Celeste, darling, the cake!
13 D CELESTE: In a minute, Auntie.
14 A ¶ The waiter offers a flute.
15 A Julian takes two.
16 A Hands one to her.
17 D WAITER: Compliments of the house.
18 D JULIAN: To old times.
19 D CELESTE: To new ones.
20 D ISOLDE (approaching): Julian, you've gotten thin.
21 D JULIAN: Hello, Isolde.
22 D ISOLDE: Are you eating?
23 D CELESTE: Auntie.
* 24 A ¶ The music swells.
25 A Julian offers a hand.
26 A She looks at it.
27 A Behind her, Isolde fans faster.
28 A The waiter retreats.
29 D JULIAN: One dance.
30 D CELESTE: One.
31 A ¶ She takes it.
32 A They step into the crowd, stiff at first, then not.
33 A Isolde lowers the fan and sighs.
34 A The waiter sets down his tray and leaves it.
35 D ISOLDE (to the waiter): Fetch the cake knife, would you? She'll want it later.
36 D WAITER: Ma'am?
37 D ISOLDE: I said she'd want it. Go.

### SCENE s00183 | INT. ABANDONED BOWLING ALLEY CONVERTED INTO A GOAT YOGA STUDIO - MORNING
Detected names (may be incomplete or contain aliases): PERPETUA OKAFOR-LINDQVIST, HOLDEN BAXTER, BRIDGET MULLANEY, SPENCER, MARCEL DUPUIS-OGUNDE
* 1 A ¶ Sun slants through the old neon pins.
* 2 A The lanes are covered in rubber mats, and seven goats in tiny sweaters stand about like mildly disappointed customers.
* 3 A The air smells of lavender and hay.
4 A ¶ PERPETUA OKAFOR-LINDQVIST, 40s, instructor and owner, stands on lane four in a lilac unitard, hands pressed together.
5 A Her student, HOLDEN BAXTER, 30s, a nervous accountant, holds a downward dog while a goat named Kevin stands on his back and chews his shirt.
6 A At the shoe counter, BRIDGET MULLANEY, 70s, the landlady, counts rent in a ledger with a pen she clicks like a metronome.
* 7 A Perpetua's cellphone buzzes on the ball return.
8 D PERPETUA: Breathe into your sit bones, Holden.
9 D HOLDEN: I don't think I have sit bones.
10 D PERPETUA: Everyone has sit bones.
11 D HOLDEN: Kevin is eating my collar.
12 D PERPETUA: That's Kevin's way of saying he trusts you.
* 13 A ¶ The phone buzzes again.
* 14 A The speaker clicks on by itself.
15 D SPENCER [V.O.] (over phone): Perp, it's Spencer from the county. We need to talk about the permit.
16 D PERPETUA (to the phone): Spencer, I'm in a flow.
17 D SPENCER [V.O.]: There's a complaint. About, uh, the goats and the fire code.
18 A ¶ Bridget stops clicking.
19 A A goat bleats.
20 A Another follows.
21 A Holden collapses into a puddle and Kevin steps off him, unbothered.
22 D BRIDGET: The fire code. I told you.
23 D PERPETUA: You told me nothing, Bridget.
24 D BRIDGET: I told you in March.
25 A ¶ A new figure enters through the fire door, backlit: MARCEL DUPUIS-OGUNDE, 50s, a health inspector in a crisp gray suit, clipboard clutched like a shield.
26 A A goat sniffs his cuff.
27 A He lifts his pen.
28 D MARCEL: Ms. Okafor-Lindqvist?
29 D PERPETUA: Namaste, officer.
30 D MARCEL: Inspector. I'm here about the livestock.
31 D HOLDEN (from the floor): They're not livestock. They're faculty.
32 A ¶ Marcel writes something.
33 A Kevin eats the page.
34 D SPENCER [V.O.] (over phone): Hello? Is anyone there?
35 A ¶ Perpetua closes her eyes, breathes in, and turns the phone face down.

### SCENE s00184_0 | INT. APPELLATE COURTROOM - DAY
Detected names (may be incomplete or contain aliases): ATTORNEY RUTH ELLINGSWORTH, JUSTICE AMADOU DIALLO-FERNANDEZ, BAILIFF
* 1 A ¶ Dark wood, high bench, a brass seal.
* 2 A A hush.
3 A ATTORNEY RUTH ELLINGSWORTH, 50s, stands at the lectern in a navy suit.
4 A Her papers are squared.
5 A Her hands are not.
6 A ¶ JUSTICE AMADOU DIALLO-FERNANDEZ, 60s, looks down from the bench over half-moon glasses.
7 A He has been listening for an hour.
8 D JUSTICE DIALLO-FERNANDEZ: Ms. Ellingsworth, your time is nearly up.
9 D RUTH: I understand, Your Honor. If I may conclude.
10 D JUSTICE DIALLO-FERNANDEZ: You may.
11 D RUTH: The trial court erred in excluding the recording. Without it, the jury never heard my client's own words.
12 D JUSTICE DIALLO-FERNANDEZ: Words he spoke to a priest.
13 D RUTH: To a man who was not, in fact, a priest.
14 D JUSTICE DIALLO-FERNANDEZ: So you say.
15 D RUTH: So the record says. Exhibit nine.
16 A ¶ He flips pages.
17 A She waits.
* 18 A The door at the back opens with a creak.
19 A A BAILIFF, 30s, hurries down the aisle and hands the Justice a folded note.
20 A He reads.
21 A His face changes.
22 D JUSTICE DIALLO-FERNANDEZ [CONT'D]: Ms. Ellingsworth, I'm informed that the State has just withdrawn its opposition.
23 D RUTH: Withdrawn?
24 D JUSTICE DIALLO-FERNANDEZ: Entirely. Your client's conviction is to be vacated.
25 A ¶ Ruth looks at the back of the room.
* 26 A Her opponent's chair is empty.
* 27 A Her phone buzzes against the lectern.
28 A She turns it over.
* 29 A A name on the screen.
30 D RUTH: Your Honor, may I take this?
31 D JUSTICE DIALLO-FERNANDEZ: Please.
32 A ¶ She raises the phone to her ear.
33 D BAILIFF [V.O.] (over phone): Ma'am, front desk. The real priest just walked in. He confirmed it.
34 A ¶ Ruth lowers the phone and lets her breath out slowly.
35 A The Justice watches her.
36 A She nods once.
37 D RUTH: Thank you, Your Honor.
38 D JUSTICE DIALLO-FERNANDEZ: Don't thank me yet. The paperwork alone will take until Friday.
39 D RUTH: Friday is fine.
40 D JUSTICE DIALLO-FERNANDEZ: I thought it might be.
41 A ¶ She gathers her papers.
42 A He returns to his notes without another glance.
43 A The Bailiff holds the door.
44 A Ruth walks out with a straight back and unsteady knees.

### SCENE s00184_1 | INT. COURTHOUSE CORRIDOR - CONTINUOUS
Detected names (may be incomplete or contain aliases): BAILIFF, RUTH
* 1 A ¶ Marble floors.
* 2 A Echoes.
3 A She leans against a column and closes her eyes.
4 A The Bailiff appears at her shoulder.
5 D BAILIFF: Ma'am, you dropped this.
6 A ¶ He hands her a single sheet.
* 7 A Exhibit nine.
8 A She folds it into her coat.
9 D RUTH: He's going to walk out of there tonight.
10 D BAILIFF: Yes, ma'am.
11 D RUTH: Eleven years.
12 A ¶ The Bailiff says nothing.
13 A He just nods.
14 A She smiles, finally, and goes.

### SCENE s00185 | EXT. SINKING FISHING TRAWLER - DECK - DAWN
Detected names (may be incomplete or contain aliases): CAPTAIN IMELDA DRAGOMIR, DEACON PRICE, OLU ABIODUN, SANTI, VEGA, LIN HUANG
* 1 A ¶ The boat tilts at ten degrees.
* 2 A Gray water sloshes at the rails.
* 3 A A radio mast leans.
4 A ¶ CAPTAIN IMELDA DRAGOMIR, 50s, leathery, in yellow oilskins, stands at the wheelhouse door, counting heads with her finger.
5 A DEACON PRICE, 20s, deckhand, drags a blue cooler across the planks.
6 A OLU ABIODUN, 40s, engineer, slumps against a winch, hands black with oil.
7 A SANTIAGO "SANTI" VEGA, 30s, cook, bails with a saucepan.
8 A A girl, LIN HUANG, 12, the captain's niece, sits cross-legged on a coil of rope with a life vest two sizes too big.
9 D IMELDA: Raft's inflated. Ten minutes.
10 D DEACON: We said that twenty minutes ago.
11 D OLU: Pump's dead.
12 D SANTI: Saucepan's not.
13 A ¶ Lin tightens a strap.
14 A Nobody hurries.
15 A Imelda hands Lin a granola bar.
16 D IMELDA: Eat. It's a long wait.

### SCENE s00186 | INT. PAPER LANTERN FACTORY - EVENING
Detected names (may be incomplete or contain aliases): MEI-LING TSAI, DANIEL OKORO, AUNTIE FEN, JASPER TSAI, GRACE OKORO, FOREMAN
* 1 A ¶ Hundreds of unlit lanterns hang from the rafters like pale moons.
* 2 A Long tables, glue pots, bamboo ribs.
* 3 A One window glows orange.
4 A ¶ MEI-LING TSAI, 30s, in a paint-spattered smock, glues a seam.
5 A Her fiance, DANIEL OKORO, 30s, in a suit, stands at the door with a small box.
6 A MEI-LING's mother, AUNTIE FEN, 60s, folds paper at the next table.
7 A Her brother, JASPER TSAI, 20s, hauls a crate.
8 A Daniel's mother, GRACE OKORO, 60s, sits near the stove with tea.
9 A A FOREMAN, 50s, watches from the loft.
10 D DANIEL: You said seven.
11 D MEI-LING (not looking up): Lanterns don't glue themselves.
12 A ¶ Daniel sets the box on the table.
* 13 A It sits there.
14 A Fen pretends not to look.
15 A Jasper drops the crate.
16 A Everyone freezes.
17 A Grace sets down her tea.
18 D GRACE: Daniel. The box.
19 D MEI-LING: He's just stopping by.
20 D DANIEL: I'm not.
21 A ¶ He opens the box.
* 22 A A ring.
23 A Mei-Ling presses the seam flat with her thumb.
24 A Holds it.
25 A Holds it longer.
26 D FOREMAN (from the loft): Do we light them or not?
27 D MEI-LING: Not yet.
28 A ¶ She sets the lantern on the table, turns, and takes the ring from the box.
29 A Then she walks to the window, holds it up to the orange light, and the room waits.
30 A Fen drops her paper.
31 A Jasper stares at his shoes.
32 A Grace smiles into her tea.
33 A ¶ The Foreman strikes a match.

### SCENE s00187 | INT. NIGHT FREIGHT ELEVATOR - SHIPYARD WAREHOUSE - NIGHT
Detected names (may be incomplete or contain aliases): VIKTOR SOROKIN, MALCOLM TRENT, ANALIESE BRANDT, OBADIAH FINCH, TEO
* 1 A ¶ A cage elevator the size of a garage rattles upward through a dark shaft, lit by a single caged bulb.
* 2 A Chains sing.
* 3 A The walls are streaked with rust and old graffiti.
4 A ¶ VIKTOR SOROKIN, 50s, in a long coat, stands with a briefcase chained to his wrist.
5 A His bodyguard, MALCOLM TRENT, 30s, a broad man with a shaved head, stands behind him, one hand inside his jacket.
6 A At the back, ANALIESE BRANDT, 30s, in a hard hat and reflective vest, pretends to read a clipboard.
7 A A shipping clerk, OBADIAH FINCH, 60s, sweaty and stooped, mops his forehead.
8 A Two younger dockhands, RAFAEL and TEO, 20s, in matching overalls, lean on the gate and share a cigarette they are not supposed to have.
* 9 A ¶ The elevator shudders.
10 A Obadiah wipes his hands on his trousers.
11 A Analiese's pen stops moving.
12 A Malcolm's gaze drifts from Viktor to the dockhands to the clipboard, and his hand tightens inside his jacket.
13 A Rafael hands the cigarette to Teo without looking, and Teo takes it, and neither of them smokes.
14 D VIKTOR: Forty floors is a long way to go without conversation.
15 D OBADIAH: It's, uh, only thirty-eight, sir.
16 D VIKTOR: Then it is a shorter silence.
17 A ¶ Analiese turns a page.
18 A Her thumb hovers over a clip at the back of the board.
19 A Malcolm shifts a step closer, close enough to read it.
20 A Her hand slides away.
21 D ANALIESE: Inspection paperwork. Nothing exciting.
22 D MALCOLM: Inspectors don't work nights.
23 D ANALIESE: Fire codes don't care what time it is.
* 24 A ¶ The elevator groans and slows.
25 A Teo drops the cigarette and grinds it under his heel.
26 A Rafael pulls a crowbar from his overalls and slides it behind his back.
27 A Obadiah sees and goes white.
28 D VIKTOR: Something wrong, Mr. Finch?
29 D OBADIAH: No, sir. Heat, is all.
* 30 A ¶ The bulb flickers.
31 A Malcolm draws his gun.
32 A Analiese swings the clipboard into his wrist, and the gun spins across the floor.
33 A Rafael swings the crowbar into the briefcase chain, which sparks and holds.
34 A Teo grabs Obadiah, who yelps.
35 A Viktor drops into a crouch.
36 A The elevator slams to a stop, and everyone staggers.
37 D VIKTOR (quietly): You are not inspectors.
38 D ANALIESE: No.
* 39 A ¶ The gate rattles open on a dark, empty floor.
* 40 A Wind sweeps in.
* 41 A Somewhere far below, a ship's horn sounds.

### SCENE s00188 | INT. ROLLER RINK - SNACK BAR - NIGHT
Detected names (may be incomplete or contain aliases): PAZ ORTEGA-WILLIAMS, KIRA SINGH, DEWEY LAMBERT, ARLO HOLLOWAY, TALL STRANGER, MAX
* 1 A ¶ Disco ball scatters light.
* 2 A Neon trim.
* 3 A Under the music, wheels rumble on wood.
4 A ¶ PAZ ORTEGA-WILLIAMS, 17, in rental skates, leans on the counter.
5 A Her best friend, KIRA SINGH, 17, steals fries from her basket.
6 A DEWEY LAMBERT, 18, behind the counter in a paper hat, wipes it down.
7 A At a nearby table, BEATRICE "BEE" HOLLOWAY, 16, sketches in a notebook, and her brother, ARLO HOLLOWAY, 14, sips a slushie.
8 D PAZ: Okay, but if I ask him and he says no, I have to move to another state.
9 D KIRA: You are not moving to another state.
10 D PAZ: Then I'm dying. Those are the options.
11 D KIRA: He's right there. Dewey. Dewey!
12 D DEWEY: Hey. Sorry. I was in the fryer zone.
13 D PAZ (low, to Kira): Kill me.
14 D KIRA (to Dewey): She wants to know if you're going to the thing on Saturday.
15 D DEWEY: The thing?
16 D PAZ: The thing. At the quarry.
17 D DEWEY: Oh. The quarry. Yeah, probably. Maybe. Why?
18 D PAZ: No reason. Just curious.
19 D KIRA: She has a reason.
20 D PAZ: I do not.
21 A ¶ Dewey leans his elbows on the counter.
22 A Kira bounces on her skates.
23 A Bee tears a page from her notebook and slides it across the table to Arlo, who pockets it.
24 A ¶ A TALL STRANGER, 20s, in a leather jacket and black skates, glides up behind Paz and taps her shoulder.
25 A This is MAXIMILIAN "MAX" DUBOIS.
26 A Paz turns.
27 A Her face does something complicated.
28 D MAX: Paz. You never called.
29 D PAZ: Max. I was going to.
30 D KIRA (under her breath): Oh no.
31 D DEWEY: Who's this?
32 D MAX: Her ex.
33 D DEWEY: Oh.
34 D PAZ: He's not my ex. We went out twice. Once. Once and a half.
35 D MAX: You left in the middle of the second one.
36 D PAZ: I was sick.
37 D MAX: You were laughing.
38 A ¶ Bee smiles into her slushie.
39 A Arlo whispers to her.
40 A Dewey slowly picks up a rag and starts wiping the counter again, harder.
41 A Kira looks from one face to another, delighted and horrified.
42 D KIRA: Anyone want fries?

### SCENE s00189 | INT. UNDERSEA CORAL CATHEDRAL - THRONE HALL - DUSK
Detected names (may be incomplete or contain aliases): EMPRESS THALASSA-VEY, ADMIRAL CORVIN HASK, SELENE OKONKWO-REYES, TIDE, VOICE, THE DEEP
* 1 A ¶ Arches of living coral rise into green gloom.
* 2 A Shafts of light pass through a ceiling of slow, shimmering water.
* 3 A Schools of silver fish loop through pillars like banners in a wind.
* 4 A The air, impossibly, is breathable, but everything moves as if underwater: hair, robes, flame.
5 A ¶ EMPRESS THALASSA-VEY, 80s, ancient and translucent as a jellyfish, sits on a throne grown from pale branching coral.
* 6 A Her robes drift.
7 A At her right stands ADMIRAL CORVIN HASK, 50s, scarred, armored in abalone plates.
8 A At her left, the young priestess SELENE OKONKWO-REYES, 20s, clutches a conch shell.
9 A At the foot of the dais, a boy, TIDE, 10, sits cross-legged with a dented tin whistle.
10 D EMPRESS THALASSA-VEY: The tide has turned. I feel it in my bones.
11 D ADMIRAL HASK: The fleet awaits your word.
12 D SELENE: There is no fleet, Admiral. There are seven ships and four are leaking.
13 D ADMIRAL HASK: Then three.
14 A ¶ The conch glows in Selene's hands.
15 A Tide blows a soft note on the whistle.
* 16 A A crab scuttles across the floor.
17 D EMPRESS THALASSA-VEY: Selene, what does the shell say?
18 D SELENE (listening): It says the surface is coming down.
19 D ADMIRAL HASK: The surface has always been coming down.
20 D SELENE: Not like this.
21 A ¶ A VOICE from deep within the walls, vast and slow, rolls through the hall.
22 D THE DEEP [V.O.] (echoing): Empress. The debt is due.
* 23 A ¶ The fish scatter.
* 24 A The light dims.
25 A Hask draws a trident.
26 A Thalassa-Vey lifts one hand, and the water stills.
27 A Tide stops playing.
28 D EMPRESS THALASSA-VEY: I know.
29 A ¶ She rises, slowly, and her robes billow out like a sail.
30 A She steps down from the throne, past Hask, past Selene, and kneels in front of the boy.
31 A Takes the whistle gently from his hands.
32 D EMPRESS THALASSA-VEY [CONT'D]: Child, you will play for me.
33 D TIDE: What song?
34 D EMPRESS THALASSA-VEY: The last one. The one your mother taught you.
35 A ¶ Tide takes a breath and begins, small and thin.
36 A Hask lowers the trident.
37 A Selene lowers the shell.
* 38 A Above them, the sunlight goes out, one ray at a time.
