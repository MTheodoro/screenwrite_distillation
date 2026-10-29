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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opus/group_0003.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00005 | INT. FUNICULAR CAR - ALPINE CLIMB - NIGHT
Detected names (may be incomplete or contain aliases): SABINE LACROIX, TEO, BIANCHI, THE MAN IN GRAY, OPERATOR, HALVARD
* 1 A ¶ A glass cabin crawls up a mountain in the dark, a cable humming overhead and the lights of a casino resort burning at the summit like a held breath.
2 A ¶ SABINE LACROIX (30s, black gloves, a champagne flute she hasn't touched) sits with her back to the glass.
3 A Across from her TEODORO "TEO" BIANCHI (40s, bow tie loose, a briefcase cuffed to his wrist) stares at the floor.
4 A A figure in a gray coat leans in the corner, face lost in the shadow of a hat: THE MAN IN GRAY.
5 A ¶ From a speaker above the door, a bored VOICE of the operator drones through the static.
* 6 D OPERATOR [V.O.]: Next stop, Summit Station. Please remain seated until the car has come to a complete halt.
* 7 D SABINE: Fourteen minutes. The vault door cycles at the quarter hour. Teo takes the case through the service lift, I take the lobby, and our friend in gray makes the cameras blink.
* 8 D TEO: You say that like it's simple.
* 9 D SABINE: It is simple. It's only terrifying.
* 10 D THE MAN IN GRAY: My cameras blink for ninety seconds. Not ninety-one.
* 11 D SABINE: Then we move in eighty.
* 12 D TEO: And if the guard on the service lift is the new one? The one who doesn't take bribes?
* 13 D SABINE: Then Teo recites the wine list until he cries.
* 14 D TEO: That is not funny.
* 15 D THE MAN IN GRAY: Halvard.
* 16 D SABINE: What?
* 17 D HALVARD: My name. If we're doing this, you should have it. Halvard.
* 18 D SABINE: Halvard. Fine. Eighty seconds, Halvard.
* 19 D OPERATOR [V.O.]: Summit Station in one minute.
* 20 D TEO: One minute.
* 21 D SABINE: Breathe, Teo.
* 22 D HALVARD: Gloves on.

### SCENE s00006 | EXT. TORTOISE MARKET - GIANT SHELL - DAWN
Detected names (may be incomplete or contain aliases): MAEVE THORNWICK, KIT, DOMINIC ASHFORD, LADY ISOLDE, OLD PERRIN
* 1 A ¶ A colossal tortoise, patient as a hill, plods across a salt flat.
* 2 A On its domed shell, a market of striped awnings and lanterns sways to each slow step.
3 A ¶ Five merchants cluster at the crest.
4 A MAEVE THORNWICK (50s, spice-seller, apron stained saffron).
5 A Her apprentice KIT (teens, wiry, a pouch of glass beads).
6 A Rival glassblower DOMINIC ASHFORD (40s, sooty, barrel-chested).
7 A Cloth-weaver LADY ISOLDE (60s, veil of spun silver).
8 A And the market's crier, OLD PERRIN (80s, a hand bell).
* 9 A ¶ The ground trembles.
* 10 A The tortoise slows.
* 11 D MAEVE (to everyone): Hold your wares! She's stopping!
* 12 D PERRIN (ringing the bell): Stopping! Stopping!
* 13 D KIT (to Maeve): Is she sick?
* 14 D MAEVE: She's listening. Quiet now.
* 15 D DOMINIC (muttering): Last time she stopped, we lost half the lanterns.
* 16 D ISOLDE (to Dominic): Then keep your mouth shut, and perhaps we keep the other half.
* 17 D DOMINIC (to himself): Old witch.
* 18 D ISOLDE: I heard that.
* 19 A ¶ A deep groan rolls through the shell.
* 20 A Crates slide.
* 21 A A lantern shatters.
* 22 D PERRIN (to everyone, louder): Brace! Brace!
* 23 D KIT (to himself): Don't fall, don't fall, don't fall.
* 24 D MAEVE: Everyone, hands on the rails! Now!
* 25 A ¶ The tortoise rises on its legs, lifting the whole market toward the sky.

### SCENE s00007 | INT. BOWLING ALLEY - AFTER HOURS - NIGHT
Detected names (may be incomplete or contain aliases): LUCKY STRIKE LANES, ROSALIND OKONKWO-HART, DEVANTE, PEARL ADEYEMI
* 1 A ¶ Dead neon.
* 2 A Sixteen lanes.
* 3 A The smell of old shoe spray and fryer oil.
* 4 A ¶ A banner over the counter, curling at one corner: LUCKY STRIKE LANES - SINCE 1974.
* 5 A Beneath it, a handwritten sign: CLOSED FOR GOOD.
* 6 A ¶ Cardboard boxes line the shoe counter.
* 7 A A radio plays low, a ballgame, nobody listening.
8 A ¶ ROSALIND OKONKWO-HART (40s, tired eyes, her late father's cardigan two sizes too big) wraps trophies in newspaper.
9 A Methodical.
10 A Careful.
11 A Every one gets its own page.
12 A ¶ Her brother DEVANTE (30s, leather jacket, restless hands) slouches against lane nine, flicking the lever on the ball return.
* 13 A Click.
* 14 A Click.
* 15 A Click.
16 A ¶ Between them, on a stool: MRS. PEARL ADEYEMI (70s, church hat, a purse held like a shield).
17 A Their father's oldest friend.
18 A She hasn't taken her coat off.
* 19 A ¶ Click.
* 20 A Click.
* 21 D ROSALIND: Stop that.
* 22 D DEVANTE: It's a lever.
* 23 D ROSALIND: It's loud.
24 A ¶ He stops.
25 A Picks at a splinter on the rail.
26 A Rosalind turns a trophy over in her hands.
* 27 A A bowler, gold paint chipped off one knee.
28 D PEARL: He bowled a 290 once.
* 29 D ROSALIND: I know.
* 30 D PEARL: Nineteen eighty-eight.
* 31 D DEVANTE: It was a 289.
* 32 D PEARL: He told me 290.
* 33 D DEVANTE: He rounded up.
* 34 D PEARL: He did not round.
35 A ¶ Rosalind sets the trophy in a box.
36 A Takes another.
37 A Wraps.
* 38 A The paper crackles.
* 39 D DEVANTE (to Rosalind): You're keeping those?
* 40 D ROSALIND: They're his.
* 41 D DEVANTE: They're junk.
* 42 D ROSALIND: Then leave them.
* 43 D DEVANTE: I'm not leaving anything. I'm just asking.
44 A ¶ He kicks a bowling ball.
* 45 A It rolls an inch, rocks back.
46 A He stares at it.
* 47 D PEARL: The buyer's coming at nine?
* 48 D ROSALIND: Eight.
* 49 D PEARL: He's turning it into a gym.
* 50 D ROSALIND: I know.
* 51 D PEARL: A gym.
* 52 D DEVANTE: Pearl.
* 53 D PEARL: I'm only saying.
54 A ¶ Devante crosses to the pin deck.
55 A Climbs over the gutter rail, and walks down lane nine toward the pins.
56 A Rosalind looks up.
57 A Pearl looks up.
58 A He walks the entire length, boots loud on the wood, and stops at the foul line, back to them.
* 59 D ROSALIND: Don't scuff the boards.
* 60 D DEVANTE: They're getting torn out.
* 61 D ROSALIND: Still.
62 A ¶ He steps off the lane.
63 A Picks up a ball.
64 A Weighs it.
65 A Sets it down.
66 A ¶ Rosalind tapes a box shut.
* 67 A The tape shrieks.
68 A Pearl flinches.
* 69 D PEARL: He always said you'd be the one to close up.
70 A ¶ Rosalind's hands stop.
71 A Then keep going.
* 72 D ROSALIND: I'm not closing anything. The bank is.
* 73 D PEARL: You know what I mean.
* 74 D ROSALIND: I don't.
75 A ¶ Devante turns.
76 A Pearl turns.
77 A Rosalind lifts the box, struggling with its weight.
78 A Devante and Pearl both step forward, then both freeze.
79 A Rosalind sets the box down herself.
* 80 D DEVANTE: Let me.
* 81 D ROSALIND: I've got it.
* 82 D DEVANTE: You'll hurt your back.
* 83 D ROSALIND: I've hurt it before.
84 A ¶ She lifts.
85 A Carries it to the door.
86 A Sets it on the step.
* 87 A Cold air floods the lanes.
* 88 D PEARL: Rosalind, honey, your coat.
* 89 D ROSALIND: I'm fine.
* 90 D PEARL: You're shaking.
* 91 D ROSALIND: It's cold.
92 A ¶ Pearl reaches into her purse.
93 A Pulls out a folded bowling shirt, faded green, a name embroidered on the pocket: CHUKS.
94 A ¶ She holds it out.
95 A Rosalind doesn't take it.
* 96 D DEVANTE (quiet): Where'd you get that?
* 97 D PEARL: He left it in my car. Years ago.
* 98 A ¶ Silence.
* 99 A The radio crackles: a crowd roars somewhere far away.
100 A ¶ Devante takes the shirt.
101 A Looks at it.
102 A Folds it once more, carefully, along the same creases.
103 A Walks to the box by the door.
104 A Lays it on top.
105 A ¶ He doesn't say anything.
106 A Neither does Rosalind.
107 A She tapes the flaps shut.
108 A ¶ Pearl finally stands.
109 A Buttons her coat.
* 110 D PEARL [CONT'D]: Eight o'clock, you said.
* 111 D ROSALIND: Eight.
* 112 D PEARL: I'll bring coffee.
113 A ¶ She goes.
* 114 A The door sighs closed behind her.
115 A ¶ Devante and Rosalind alone.
* 116 A The radio talks to nobody.
117 A ¶ He crosses to the counter.
118 A Picks up the last trophy.
119 A Offers it to her, base first.
120 A ¶ She takes it.
121 A Wraps it.
* 122 A Her page is today's sports section.
* 123 D DEVANTE: Which one's this?
* 124 D ROSALIND: Doubles. Nineteen ninety-one. With Mom.
* 125 D DEVANTE: Huh.
126 A ¶ He sets his hand on the box lid.
127 A Leaves it there a moment.
128 A ¶ Then he reaches up and kills the radio.
* 129 A ¶ The alley goes quiet.
* 130 A Only the hum of the cooler.
* 131 A Only the paper.

### SCENE s00008 | INT. MUNICIPAL PLANETARIUM - CONTROL ROOM - NIGHT
Detected names (may be incomplete or contain aliases): JUNE, ASANTE, WALLACE PYO
* 1 A ¶ A cramped booth above the dome.
* 2 A Dials, a projector the size of an oven, a dead cup of coffee on every flat surface.
3 A ¶ JUNIPER "JUNE" ASANTE (30s, hoodie, headset, a laptop plastered with stickers) sits at a console, bored.
4 A Beside her, WALLACE PYO (60s, security guard uniform one size small, a thermos) pretends to read a paperback.
* 5 A ¶ Through the glass, the empty dome is lit with a slow field of artificial stars.
* 6 D WALLACE: You're not supposed to be up here.
* 7 D JUNE: Maintenance.
* 8 D WALLACE: At two a.m.?
* 9 D JUNE: Stars don't recalibrate themselves.
10 A ¶ He sips from the thermos.
11 A Turns a page without reading it.
* 12 D JUNE [CONT'D] (into headset, flat): Ceiling's clear. Roof hatch in four.
* 13 D WALLACE: Who're you talking to?
* 14 D JUNE: Myself. Old habit.
* 15 D WALLACE: You said "roof hatch."
* 16 D JUNE: I said "roof catch." As in, catch up on emails.
* 17 D WALLACE: Mm.
18 A ¶ He doesn't believe her.
19 A He doesn't move, either.
20 A ¶ June taps a key.
* 21 A The stars shift.
* 22 A The constellation of Orion slides west.
* 23 D WALLACE [CONT'D]: My wife loved Orion.
* 24 D JUNE: Everyone does.
* 25 D WALLACE: She said it looked like a man waiting for a bus.
26 A ¶ June laughs.
27 A Real.
28 A Surprised.
* 29 D JUNE: That's good.
* 30 D WALLACE: She was good.
* 31 A ¶ Quiet.
* 32 A The projector whirs.
* 33 D JUNE (under her breath, to the headset): Hold. Hold. He's talking.
* 34 D WALLACE: There it is again.
* 35 D JUNE: Hold on, I'm - (beat) - praying. Quietly. For my laptop. It crashes.
* 36 D WALLACE: Sure it does.
37 A ¶ He sets down the paperback, stands, and stretches until his back cracks.
* 38 D WALLACE [CONT'D] (to the empty booth): Everyone out of the vault when you're done, please. I lock at six.
* 39 A ¶ Beat.
40 A June looks at him.
* 41 D JUNE: You knew.
* 42 D WALLACE: I'm sixty-one. I know what a van looks like parked behind a dome at midnight.
* 43 D JUNE: And you sat here.
* 44 D WALLACE: I'm on break.
45 A ¶ He pours coffee.
46 A Offers her the cup.
47 A ¶ She takes it.
* 48 D WALLACE [CONT'D]: Don't take the telescope. It's on loan from the university.
* 49 D JUNE (into headset): Hear that, everybody? Leave the telescope.
* 50 A ¶ Overhead, the stars drift on, indifferent.

### SCENE s00009 | INT. GRAIN ELEVATOR - ROLLER DERBY TRACK - NIGHT
Detected names (may be incomplete or contain aliases): BRUISE, CASTILLO, TAMARA GRAY-OYELARAN, DOT KWIATKOWSKI, JONAS FELD
* 1 A ¶ A concrete silo floor, converted.
* 2 A Oval track taped on the slab, plywood bleachers, one hanging bulb per corner.
* 3 A Dust floats in the beams.
* 4 A ¶ The Harvest Hellcats are down nine in the final jam.
5 A Their jammer, MARISOL "BRUISE" CASTILLO (20s, shaved sides, mouthguard dangling), sits on the infield bench lacing her skates tight enough to hurt.
6 A ¶ Beside her, team captain TAMARA GRAY-OYELARAN (30s, tall, eye-black, taped wrist) watches the clock.
7 A Across the track, rival jammer DOT KWIATKOWSKI (40s, braids, quiet) stretches her calf, never looking over.
8 A ¶ Referee JONAS FELD (50s, striped shirt, whistle in his teeth) walks the track, checking the lines.
9 A ¶ Tamara watches Bruise.
10 A Bruise watches the floor.
* 11 A ¶ The clock reads 1:14.
* 12 D TAMARA: Left side. Don't force it.
* 13 D BRUISE: I wasn't going to.
* 14 D TAMARA: You were.
* 15 D BRUISE: I'm fine.
16 A ¶ Tamara slaps the bench between them.
17 A Once.
18 A Bruise nods without lifting her head.
19 A ¶ Jonas blows a short whistle.
20 A Skaters line up.
21 A Bruise stands.
22 A Dot stands.
23 A Neither looks at the other.
* 24 D JONAS: Jammers to the line.
* 25 D TAMARA (to Bruise): Four points a lap. That's all.
* 26 D BRUISE: I know.
* 27 D TAMARA: Then go.
28 A ¶ Bruise rolls to the starting line.
* 29 D DOT (to Bruise): You're limping.
* 30 D BRUISE (to Dot): You're old.
* 31 D DOT (to Bruise): I'm patient.
* 32 D BRUISE (to Dot): You're slow.
33 A ¶ Jonas raises his whistle.
* 34 D TAMARA: Do not watch her feet.
* 35 D BRUISE: Whose feet?
* 36 D DOT: Mine.
* 37 A ¶ Beat.
* 38 A The grain-elevator echo carries it.
* 39 D JONAS: Quiet on the line.
* 40 D TAMARA: It's a three-lap jam, Bruise.
* 41 D BRUISE: I said I know.
* 42 D DOT: Give her a minute. She's praying.
* 43 D BRUISE: I'm not praying.
* 44 D DOT: You're moving your lips.
* 45 D BRUISE: I'm counting.
* 46 D TAMARA: She counts like her mother.
* 47 D BRUISE: Leave my mother out of it.
* 48 D BRUISE: Just blow it already.
* 49 D DOT: Just blow it already.
* 50 D JONAS: Last warning. Hush.
51 A ¶ Bruise rolls her shoulders.
52 A Dot rolls hers.
53 A Their eyes finally meet.
* 54 A Two seconds.
* 55 A Three.
56 A ¶ Jonas lifts the whistle.
* 57 A A cold quiet drops over the whole silo.
* 58 A ¶ The whistle shrieks.

### SCENE s00010 | INT. FUNICULAR CONTROL HUT - NIGHT
Detected names (may be incomplete or contain aliases): OKSANA VOLKOV, DEZ, ACHEBE, MARGUERITE, BOOT, TARIQ BEN-HAIM
* 1 A ¶ A concrete box bolted to a mountainside.
* 2 A One window.
* 3 A Below it, the cable runs down into fog.
4 A ¶ OKSANA VOLKOV (40s, lean, grease on her cuffs) stands at a bank of dials.
5 A A wrench in her fist.
6 A She hasn't blinked in a while.
7 A ¶ DESMOND "DEZ" ACHEBE (30s, soaked parka, bad limp) sits on an overturned crate.
8 A A pistol rests on his knee.
* 9 A Not pointed.
* 10 A Not far from pointed.
* 11 A ¶ Between them on the floor: a canvas duffel, zipped.
* 12 D DEZ: Stop looking at the brake.
* 13 D OKSANA: I'm looking at the gauge.
* 14 D DEZ: You're looking at the brake.
15 A ¶ She lets the wrench drop to her side.
16 A Slowly.
* 17 D OKSANA: Car Two is stopped at the midpoint. Eleven people inside. Two of them are kids.
* 18 D DEZ: Then you better start it again when I say.
* 19 A ¶ The radio on the desk CRACKLES.
* 20 D MARGUERITE [V.O.] (radio, tinny): Hut, this is Base. Oksana, come in.
21 A ¶ Dez raises the pistol an inch.
22 A Oksana looks at it.
23 A Looks at the radio.
* 24 D DEZ: Say everything's fine.
25 A ¶ She lifts the handset.
26 A Thumbs the key.
* 27 D OKSANA: Base, Hut. Everything's fine.
* 28 D MARGUERITE [V.O.] (radio): Your readout says Car Two is holding. Why is Car Two holding?
* 29 D OKSANA: Wind shear. Routine.
* 30 D MARGUERITE [V.O.] (radio): There's no wind at the summit station. I'm looking at the flag.
31 A ¶ Dez stands.
32 A Limps one step closer.
33 A The pistol is level now.
* 34 D DEZ (low): Tell her to go home.
* 35 D OKSANA (into handset): Marguerite, finish your shift. I've got it.
* 36 A ¶ Silence on the line.
* 37 A Fog presses at the window.
* 38 D MARGUERITE [V.O.] (radio): Okay.
* 39 A ¶ Click.
* 40 A Dead air.
41 A ¶ Dez exhales through his nose.
42 A Not relief.
43 A Arithmetic.
* 44 D DEZ: She's calling someone.
* 45 D OKSANA: She's calling the sheriff. Twenty minutes up the grade.
* 46 D DEZ: Then we have fifteen.
47 A ¶ He nudges the duffel with his boot.
* 48 D DEZ [CONT'D]: Open it.
* 49 D OKSANA: I don't want to see what's in it.
* 50 D DEZ: Open it.
51 A ¶ She kneels.
52 A Pulls the zipper.
* 53 A Inside: a hard-shell case, steel, handcuffed to a leather strap.
54 A She looks up.
* 55 D OKSANA: This is somebody's wrist strap.
* 56 D DEZ: It's somebody's problem.
* 57 A ¶ A BOOT scrapes outside.
58 A Both freeze.
* 59 A ¶ The door swings in.
60 A TARIQ BEN-HAIM (20s, uniform of the ski patrol, red jacket, wet to the skin) stands in the frame with his hands half raised.
61 A Snow in his eyebrows.
62 D TARIQ: Nobody told me the lift was down. I walked up the service road --
63 A ¶ He sees the pistol.
64 A Stops.
* 65 D DEZ: Close the door.
* 66 D TARIQ: Okay. Okay.
67 A ¶ He closes it.
68 A Stays against it.
* 69 D OKSANA (to Tariq, flat): Sit on the floor. Hands on your knees.
70 A ¶ Tariq sits.
71 A Careful, slow.
* 72 D DEZ: Who knows you're here?
* 73 D TARIQ: My radio's on channel six. It's always on.
74 A ¶ Dez looks at the red radio clipped to Tariq's vest.
75 A Crosses to him.
76 A Rips it free.
77 A Thumbs it off.
* 78 D DEZ: Now nobody does.
* 79 A ¶ From the desk, the base radio hisses again.
* 80 D MARGUERITE [V.O.] (radio): Oksana. I can see the headlights on the service road. Two sets. Don't tell me everything's fine.
81 A ¶ Dez turns.
82 A Slowly.
83 A Aims at the handset.
* 84 D OKSANA (quiet): Dez. If I don't answer, she calls it in as a hostage.
* 85 D DEZ: Then answer.
86 A ¶ She picks up the handset.
87 A Her thumb rests on the key but doesn't press it.
* 88 D OKSANA: What do I tell her?
89 A ¶ Dez's jaw works.
* 90 A Outside, far down the slope, an engine growls.
* 91 A Closer.
* 92 A Tires on gravel.
* 93 D DEZ: Tell her the truth. Tell her I want the car moving.
* 94 D OKSANA (keying): Marguerite. There's a man in the hut with a gun. He wants Car Two moving.
* 95 D MARGUERITE [V.O.] (radio): Copy. Then move it.
96 A ¶ Oksana stares at the handset.
97 A Tariq stares at Oksana.
* 98 D TARIQ: Ma'am, don't. The kids --
* 99 D DEZ: Shut up.
* 100 D OKSANA: Marguerite, say that again.
* 101 D MARGUERITE [V.O.] (radio): Move it. Slow. Sheriff's at the bottom station. Moving the car puts it in his hands.
102 A ¶ Dez's eyes go to the window.
* 103 A Headlights sweep across the fog.
* 104 A Then the glass goes white.
* 105 D DEZ: Don't.
106 A ¶ Oksana puts her palm on the lever.
* 107 D OKSANA: You can still walk out.
* 108 D DEZ: With what?
109 A ¶ He kicks the duffel toward her.
110 A Hard.
* 111 A It slides to her knees.
* 112 D DEZ [CONT'D]: Take it. Take the damn case.
113 A ¶ She doesn't move.
114 A Tariq doesn't move.
* 115 A The cable HUMS under load, waiting.
116 A ¶ Dez cocks the pistol.
* 117 D DEZ [CONT'D]: Pull it.
118 A ¶ She pulls.
* 119 A ¶ The whole hut SHUDDERS.
* 120 A Down in the fog, the cable begins to run.

### SCENE s00011 | INT. DECOMMISSIONED GRAIN ELEVATOR - OPEN-PLAN OFFICE - DAY
Detected names (may be incomplete or contain aliases): PRUDENCE OKAFOR, BARNABY QUILL, DELPHINE ROUSSEAU-ADEYEMI
* 1 A ¶ Dust hangs in the shafts of light that fall through the old hopper doors.
* 2 A Forty desks have been dropped onto the concrete in neat rows, and every one of them faces a wall of corrugated steel painted the cheerful green of a hospital.
3 A ¶ PRUDENCE OKAFOR (50s, cardigan buttoned to the throat, lanyard heavy with laminated cards) stands before a whiteboard and caps and uncaps a marker, caps and uncaps it, as if the sound were a metronome for the room.
4 A ¶ At the front desk sit BARNABY QUILL (30s, a tie knotted tight enough to be a verdict) and DELPHINE ROUSSEAU-ADEYEMI (late 20s, headphones around her neck, one earbud in, a half-eaten yogurt sweating at her elbow).
* 5 D PRUDENCE: The Synergy Taskforce has decided, after consultation, that the synergy is insufficient.
6 A ¶ Barnaby nods before she finishes.
7 A Delphine peels the yogurt lid back, licks it, folds it into a perfect small square.
* 8 D BARNABY: Insufficient in which direction?
* 9 D PRUDENCE: Directionally.
10 A ¶ She writes the word DIRECTIONALLY on the whiteboard.
11 A Underlines it twice.
* 12 A The marker squeaks and dies mid-line.
13 A She looks at it with great tenderness, then sets it in the tray as if laying down a child.
* 14 D DELPHINE: Is this the meeting about the meeting?
* 15 D PRUDENCE: This is the meeting about the meeting about the meeting.
16 A ¶ Barnaby and Delphine both reach for the same pen at the same instant.
17 A Their fingers touch.
18 A They both withdraw, Barnaby smoothing his tie, Delphine tucking a strand of hair behind her ear, each looking determinedly at a different corner of the ceiling.
* 19 A ¶ Somewhere above them, a pigeon walks across a rafter and drops something.
* 20 A It lands on the carpet tile beside Prudence's shoe.
21 A All three look down at it.
22 A All three look up again.
* 23 D PRUDENCE [CONT'D]: We'll take that offline.
* 24 D BARNABY: I'll circulate a note.
* 25 D DELPHINE: I'll bring a mop.
* 26 D PRUDENCE: Please do not bring a mop. Mops are a Facilities line item.
27 A ¶ Delphine slowly pulls the earbud out and lays it on the desk beside the yogurt lid.
28 A She straightens it.
29 A Squares it to the edge.
30 A ¶ Prudence picks up a fresh marker.
31 A Holds it.
32 A Does not uncap it.
* 33 D PRUDENCE [CONT'D]: Barnaby. Your quarterly deck. Is it ready?
* 34 D BARNABY: It is in a state of readiness.
35 A ¶ He opens his laptop.
* 36 A The screen glows.
* 37 A On it, a single slide: a pie chart, entirely one colour.
* 38 A He angles the lid down a few degrees, and the three of them stand there in the green light of the hopper doors, pretending not to see it.
* 39 D PRUDENCE: Excellent.
40 A ¶ She writes ACTION ITEMS on the whiteboard.
* 41 A Under it, nothing.
42 A She stands back and admires the nothing.
* 43 D DELPHINE: Do I get a lanyard?
* 44 D PRUDENCE: After the review.
* 45 D DELPHINE: Which review?
* 46 D PRUDENCE: The one we are about to schedule.
47 A ¶ Barnaby and Delphine rise together, chairs scraping in unison, and file toward the elevator door that has not worked since 1987.
48 A They arrive at it.
49 A They stop.
50 A They stand side by side, facing steel, and wait.

### SCENE s00012 | INT. LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): BIRGITTA LUNDQVIST, TOBIAS, GIRL, NOOR, MAN
* 1 A ¶ Fluorescent tubes buzz over a row of dryers, half of them spinning.
* 2 A Rain streaks the front glass.
* 3 A A vending machine hums in the corner.
4 A ¶ BIRGITTA LUNDQVIST (30s, scrubs under a raincoat, tired eyes) feeds quarters into a dryer.
5 A Her son TOBIAS (8, pajamas, rain boots on the wrong feet) sits on a folding table swinging his legs and holding a plastic dinosaur.
6 A Against the wall, a GIRL (10, school uniform, backpack on both shoulders) sits alone with a library book and does not look up.
* 7 D TOBIAS: Mom, why is it taking so long?
* 8 D BIRGITTA: Because it's wet, bud.
* 9 D TOBIAS: Everything's wet. It's raining.
10 A ¶ Birgitta laughs, a short breath of a laugh.
11 A She shuts the dryer door and presses the button.
* 12 A The drum begins to turn.
13 A Tobias hops down, wanders to the vending machine, and presses his nose to the glass while Birgitta checks her phone, frowns at it, and turns the screen face-down on the table, and the Girl, without lifting her eyes from the page, turns one page over.
* 14 D TOBIAS [CONT'D]: Can I get the gummy ones?
* 15 D BIRGITTA: It's ten at night.
* 16 D TOBIAS: It's eleven. The clock says.
17 A ¶ Birgitta looks at the clock.
* 18 A He's right.
19 A She sighs and digs in her pocket for coins.
20 A ¶ Tobias carries his dinosaur over to the Girl and holds it out, nose-first, a ceremonial offering.
* 21 D TOBIAS [CONT'D]: This is Gary. He's a stegosaurus.
22 A ¶ The Girl looks up.
23 A A long, measuring look.
24 A Then she takes Gary and studies his plates.
* 25 D GIRL: Stegosaurs had tiny brains.
* 26 D TOBIAS: Gary's smart.
* 27 D GIRL: Then he's not a stegosaurus.
28 A ¶ Tobias considers this, deeply wounded, and turns to his mother for ruling.
29 A Birgitta crosses over, dropping her coins into the machine on the way, the machine clunking out a bag of gummies, and kneels between the two children.
* 30 D BIRGITTA: Hey. Where are your parents?
31 A ¶ The Girl closes her book on her finger.
* 32 D GIRL: My dad's coming. He's parking.
* 33 D BIRGITTA: It's been an hour.
* 34 D GIRL: It's a hard lot to park in.
35 A ¶ Birgitta looks toward the glass.
* 36 A The lot outside is empty except for her own car, rain bouncing off the hood.
* 37 D BIRGITTA: What's your name, sweetheart?
* 38 D GIRL: Noor.
* 39 D BIRGITTA: Noor, I'm going to call someone to help us find your dad. Okay?
40 A ¶ Noor's face changes.
41 A Her shoulders come up.
42 A She grabs her backpack straps in both fists.
* 43 D NOOR: Don't. He'll be mad. I'm not supposed to tell people where we live.
* 44 D BIRGITTA: I don't need to know where you live.
* 45 D NOOR: Then who are you calling?
* 46 A ¶ The front door BANGS open.
47 A A MAN (40s, wet work jacket, breathing hard) stands in the doorway scanning the room.
48 A He sees Noor.
49 A Everything in his posture collapses at once.
50 A Tobias, startled, drops the gummies.
51 A Birgitta rises in front of both children.
* 52 D MAN: Noor.
* 53 D NOOR: Dad.
54 A ¶ She runs to him.
55 A He drops to his knees and wraps both arms around her.
56 A Birgitta watches the two of them, her hand on Tobias's head.
* 57 D BIRGITTA: She's been here an hour.
* 58 D MAN: The truck wouldn't start. I ran all the way from the bridge. Thank you. Thank you for --
* 59 D BIRGITTA: Her name is Noor?
* 60 D MAN: Noor. Yes.
61 A ¶ He kisses the top of her head.
62 A Lifts her.
63 A She buries her face in his collar.
64 A Tobias picks up his gummies and Gary and trots back to his mother.
* 65 D TOBIAS: Mom? Gary says goodbye.
66 A ¶ Noor lifts her head from her father's shoulder and, very seriously, waves.
