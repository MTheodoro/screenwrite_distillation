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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0110.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00109_1 | INT. ICE-FISHING HUT - CONTINUOUS
Detected names (may be incomplete or contain aliases): WILHELMINA BRODERICK-ADEYEMI, FELIX
* 1 A ¶ Cramped.
* 2 A A propane heater.
* 3 A Two folding stools.
* 4 A A round hole in the floor shows black water under a skin of ice.
5 A ¶ WILHELMINA BRODERICK-ADEYEMI (60s, wool cap, flask) sits on one stool, holding a rod.
6 A Her grandson FELIX (12, puffy coat, wide eyes) sits on the other, watching the hole.
7 A ¶ She tugs the line.
* 8 A Nothing.
9 D FELIX: Grandma.
10 D WILHELMINA: Patience.
11 D FELIX: It's been an hour.
12 D WILHELMINA: The fish don't know that.
13 A ¶ He sighs.
14 A Rubs his hands over the heater.
15 D FELIX: Can I tell you something?
16 D WILHELMINA: Always.
17 D FELIX: I like it here.
18 D WILHELMINA: Good boy.
19 A ¶ She smiles.
20 A Sips from the flask.
21 A Then frowns.
* 22 A ¶ The line twitches.
23 A She reels slowly.
* 24 A A tug, hard.
25 A She leans back, braces.
26 D WILHELMINA [CONT'D]: Get the net.
27 A ¶ He grabs it.
28 A Kneels by the hole.
* 29 A ¶ The line goes slack.
30 A Wilhelmina pulls it up.
* 31 A The hook is bare, clean, polished.
32 D WILHELMINA [CONT'D]: Huh.
33 D FELIX: Did we lose it?
34 D WILHELMINA: We did.
35 A ¶ She re-baits.
36 A Drops the line.
37 A They wait.
* 38 A ¶ The heater ticks.
* 39 A Wind presses the shack.
* 40 A Through the hole, the black water seems to ripple, but there is no wind below the ice.
41 D FELIX: Grandma.
42 D WILHELMINA: Shh.
43 D FELIX: Something's under us.
44 A ¶ She lifts her head.
45 A Sees it too.
* 46 A A paleness rises in the water.
* 47 A A shape.
* 48 A Round.
* 49 A Broad.
* 50 A Slowly turning.
51 D WILHELMINA (very softly): Felix. Back up.
52 A ¶ He doesn't move.
53 A He's staring.
54 D FELIX: It has a face.
55 A ¶ She drops the rod, seizes him by the coat, and drags him away from the hole.
* 56 A The pale thing breaks the surface.
* 57 A It is not a fish.
* 58 A It is not anything.
* 59 A Two white hands grip the edge of the ice and pull, and the water around them runs black and silent.
60 D WILHELMINA: Out! The door!
61 A ¶ She pushes him.
62 A He fumbles with the latch.
63 A The thing hauls itself into the hut, dripping, long-limbed, tilting its head to one side, looking at them both with an expression of mild and infinite hunger.
* 64 A The heater gutters and goes out.

### SCENE s00110 | EXT. QUARRY DIVING PLATFORM - DAWN
Detected names (may be incomplete or contain aliases): WOMAN, ISOLDE
* 1 A ¶ A ten-meter steel tower above a flooded granite pit.
* 2 A Mist hangs on the green water.
* 3 A Pigeons burst from the cliff-face at the clap of a distant gate.
4 A ¶ A WOMAN (30s, black swimsuit, towel around her neck, a handheld voice recorder in her fist) climbs the last rung and walks to the lip of the platform.
5 A Her bare feet leave wet prints on the grating.
6 A She is lean and focused, with the stillness of someone who has done something ten thousand times and is afraid of the ten-thousand-and-first.
7 A ¶ She clicks the recorder on.
8 D WOMAN: Dive log, ninth of June. Wind, nothing. Water, sixty-one degrees. Platform, dry, mostly.
9 A ¶ She breathes in.
10 A Out.
11 D WOMAN [CONT'D]: Today's the one. Reverse three and a half, tuck. I've hit it in the pool. I haven't hit it here.
12 A ¶ She sets the recorder on the grating.
* 13 A It records her silence, then her voice.
14 D WOMAN [CONT'D]: You hit it by letting go of the thought of hitting it. That's what Coach said. That's what the last coach said. That's what the first coach said, and she was lying, because nobody ever lets go of that.
* 15 A ¶ A gull shrieks.
16 A She tips her head back, closes her eyes.
17 D WOMAN [CONT'D]: My name is Isolde Vantongeren. Twenty-nine. Six years since the last medal. I don't know if I'm doing this for the medal or for the girl who got it.
* 18 A ¶ The recorder blinks.
* 19 A A clock ticks inside it.
20 D ISOLDE (opening her eyes): Okay. Okay.
21 A ¶ She picks up the recorder.
22 A Rewinds.
23 A Presses play.
24 D WOMAN [V.O.] (recording, thinner): ...you hit it by letting go of the thought of hitting it.
25 D ISOLDE (smiling, tired): Liar.
26 A ¶ She sets it down again.
27 A Walks backward to the rear edge of the platform, then forward, two steps, three, springing, and lifts into the air.
* 28 A The water takes her without a sound.
* 29 A Rings spread across the surface and the mist shivers.
* 30 A ¶ The recorder, abandoned on the grating, goes on running.
* 31 A In the silence it picks up only the dripping tower, the pigeons settling, and a long, delighted shout from the water.

### SCENE s00111 | INT. GRAIN SILO FREIGHT ELEVATOR - NIGHT
Detected names (may be incomplete or contain aliases): VALERIAN ASHFORD-OKORO, DOROTHEA KLEIN-AMADI
* 1 A ¶ A rusted cage elevator, open at the sides, hangs in the cavernous dark of a silo.
* 2 A A single caged bulb swings overhead.
* 3 A Below, forty meters down, a drift of grain glimmers like gold sand.
4 A ¶ VALERIAN ASHFORD-OKORO, a lean man in his fifties with a gray ponytail and an unbuttoned coat, grips the control lever.
5 A Across from him stands DOROTHEA KLEIN-AMADI, a woman in her forties in a flight jacket, her back pressed to the cage and her eyes on his hands.
* 6 A The elevator hums, mid-shaft, motionless.
7 A ¶ She breathes slowly.
8 A He does not look at her.
9 D VALERIAN: Press the button.
10 D DOROTHEA: Which one?
11 D VALERIAN: The red one.
12 A ¶ She doesn't move.
13 A He sighs.
14 D VALERIAN [CONT'D]: It won't hurt you.
15 D DOROTHEA: It's the alarm.
16 D VALERIAN: It's the stop.
17 D DOROTHEA: It says ALARM.
18 D VALERIAN: The label is wrong.
19 A ¶ She laughs, shrill and brittle.
20 A He turns his head.
21 A In the swinging light, his eyes are red-rimmed and exhausted.
22 D VALERIAN [CONT'D]: Press it.
23 D DOROTHEA: Why do you need it stopped?
24 D VALERIAN: So we can talk.
25 D DOROTHEA: We are talking.
26 D VALERIAN: So we can talk without the sound.
27 A ¶ She studies him.
28 A Then slowly, she lifts a gloved hand and presses the red button.
* 29 A A shriek tears through the silo.
30 A He winces.
31 A She holds it.
32 A The cage shudders and jerks, and her face is a mask of calm.
33 A ¶ He lunges.
34 A She drops the glove and slams him against the wall.
35 A For a second they are locked together, breathing in each other's faces, and then she shoves him back, hard, and the lever snaps under her palm.
* 36 A The elevator drops, ten feet, twenty, and catches with a bang that rattles every bone.
37 A ¶ They hang there, gasping.
* 38 A The alarm dies.
* 39 A The bulb swings.
* 40 A In the new silence, a faint trickle of grain begins to run.
41 D DOROTHEA (panting): That's the stop.
42 D VALERIAN (gasping): That's the stop.
43 A ¶ He slides down the wall to sit.
44 A She stays upright, trembling.
45 D DOROTHEA: Now talk.
46 D VALERIAN: You won't like it.
47 D DOROTHEA: I have never liked you.
48 A ¶ He laughs.
49 A It becomes a cough.
50 A She waits.
51 D VALERIAN: I sold the shipment.
52 D DOROTHEA: Which shipment?
53 D VALERIAN: All of it.
54 A ¶ She stops breathing.
55 A Looks at the dark below.
* 56 A The grain has found a seam and is pouring, a thin gold thread into the black.
57 D DOROTHEA: Who bought it?
58 D VALERIAN: You don't want to know.
59 D DOROTHEA: Valerian.
60 D VALERIAN: Your brother.
* 61 A ¶ The bulb stops swinging.
* 62 A The elevator creaks.
63 A She closes her eyes.
64 A When she opens them, her face is clear and cold and very quiet.
65 D DOROTHEA: Good.
66 D VALERIAN: Good?
67 D DOROTHEA: I was hoping it was him.
68 A ¶ She steps over his legs, grabs the broken lever, and wrenches it back into the housing.
* 69 A The motor groans.
* 70 A The elevator begins, slowly, to rise.
71 D VALERIAN: Where are we going?
72 D DOROTHEA: To see my brother.
73 D VALERIAN: And me?
74 A ¶ She looks down at him.
75 A Ignores the question.
76 A Rolls her shoulders.
* 77 A The cage climbs toward the dim circle of the roof, grain still whispering through the dark below.

### SCENE s00112 | EXT. LIFEBOAT - OPEN SEA - DAWN
Detected names (may be incomplete or contain aliases): CAPTAIN MAGNUS EKSTROM-ADEBAYO, PIA RAMIREZ-OKONKWO, DELPHINE, BAZ
* 1 A ¶ A cramped orange boat rocks on a grey swell.
* 2 A Four figures huddle under a torn canopy.
3 A ¶ CAPTAIN MAGNUS EKSTROM-ADEBAYO (60s, grizzled, hand clamped on the tiller) squints at the horizon.
4 A He is silent.
5 A Beside him, DR. PIA RAMIREZ-OKONKWO (40s, soaked blazer) wrings out her scarf.
6 A At the bow, young DELPHINE (16, wide-eyed, life jacket too big) clutches a flare gun.
7 A In the middle, BAZ (30s, steward, torn jacket) lies on his back, one arm over his eyes.
8 A ¶ He shifts.
9 A She looks at him.
10 D PIA: Baz. Are you awake?
11 D BAZ: No.
12 D PIA: Good. Stay that way.
13 A ¶ Magnus lifts one finger.
14 A Everyone goes still.
15 A He points.
* 16 A ¶ A smudge on the horizon.
* 17 A A smoke trail.
18 D DELPHINE: Captain! Is that a ship?
19 D MAGNUS: It is.
20 D DELPHINE: Should I fire it?
21 D MAGNUS: Not yet.
22 A ¶ She lowers the gun.
23 A Baz sits up, clutching the gunwale.
24 D BAZ: Fire it now, Delphine!
25 D MAGNUS: Wait.
26 D PIA: Magnus, if she doesn't--
27 D MAGNUS: It's too far. They'd never see it.
28 A ¶ He steadies the tiller.
29 A They wait.
* 30 A The smoke thickens.
* 31 A A hull appears.
* 32 A Grey.
* 33 A Steel.
* 34 A Moving toward them.
35 D MAGNUS [CONT'D]: Now.
36 A ¶ Delphine fires.
* 37 A A red star climbs into the sky.
38 A They scream, all four of them, together.

### SCENE s00113 | INT. TERRAFORMING STATION DOME - CONTROL DECK - DAY
Detected names (may be incomplete or contain aliases): ADMIRAL SELENE VOSKUIJLEN-ADEYEMI, COMMANDER RAMIRO OKONJO-TALLIS, DOCTOR YUKI HARTMANN-NWAFOR, ENGINEER BODHI LARSSON-EZE, LIEUTENANT CASSANDRA MBEKI-FROST, THE OBSERVER, CONTROL
* 1 A ¶ A broad glass cupola overlooks a rust-red landscape speckled with the first green.
* 2 A Atmospheric processors the size of cathedrals churn on the horizon.
* 3 A Inside, a ring of consoles, each glowing in a different color.
4 A ¶ Six people work the ring.
5 A ¶ ADMIRAL SELENE VOSKUIJLEN-ADEYEMI (60s, silver crop, high collar) paces the center.
6 A COMMANDER RAMIRO OKONJO-TALLIS (40s, shaved head, burn scar on one cheek) taps at a console.
7 A DOCTOR YUKI HARTMANN-NWAFOR (30s, braids, lab coat) studies a spectrograph.
8 A ENGINEER BODHI LARSSON-EZE (20s, sleeveless jacket, goggles on his forehead) crouches under a panel.
9 A LIEUTENANT CASSANDRA MBEKI-FROST (30s, tight bun) monitors a bank of weather maps.
10 A And last, at a small console apart from the others, THE OBSERVER, an elderly man known only by his badge, watches without touching anything.
11 D SELENE: Report.
12 D RAMIRO: Oxygen at eleven percent.
13 D YUKI: Methane trace is falling.
14 D BODHI (from under the panel): Pump six is slow.
15 D CASSANDRA: Storm cell northeast. Forty minutes out.
16 D SELENE: Can the dome hold?
17 D BODHI: It's held worse.
18 D SELENE: That is not an answer.
19 D BODHI (emerging): Yes, Admiral.
20 D CONTROL [V.O.] (over the speaker, filtered): Station, this is Earth Control. Please confirm your count.
21 D SELENE: Control, we confirm six souls.
22 D CONTROL [V.O.]: Six. Understood. Be advised, the board has questions about the Observer.
23 A ¶ The Observer's head turns.
24 A Nobody else moves.
25 D SELENE (to the speaker): Control, he has all clearances.
26 D CONTROL [V.O.]: It's not about clearances.
27 D SELENE: Then what is it about?
* 28 A ¶ A long silence.
* 29 A Static.
30 D CONTROL [V.O.]: He was registered dead in 2091.
31 A ¶ Every head turns toward the Observer.
32 A He smiles, an old, courteous smile, and stands, smoothing his badge.
33 D THE OBSERVER: It was a clerical error.
34 D SELENE (softly): Of course it was.
35 A ¶ Ramiro rises.
36 A Cassandra rises.
37 A Yuki drops her pen.
38 A Bodhi steps out from the panel and wipes his hands, slowly, on his trousers.
39 D THE OBSERVER: I am sorry to have worried you. I am here only to watch.
40 D SELENE: Watch what?
41 D THE OBSERVER: The part that comes after you.
* 42 A ¶ Outside, the first thin line of storm cloud crosses the red horizon.

### SCENE s00114 | INT. LAKESIDE BOATHOUSE BALLROOM - NIGHT
Detected names (may be incomplete or contain aliases): ELOWEN TREGARTHEN-ADEYEMI, ARTEMIS KOWALCZYK-MWANGI, LEONID BRAUNSTEIN-OKAFOR, MIRABEL
* 1 A ¶ A long timber hall on stilts above black water.
* 2 A Faded bunting.
* 3 A A chandelier with half its bulbs out.
* 4 A Through tall windows, the lake lies glassy and still under a quarter moon.
* 5 A A gramophone in the corner plays a thin, crackling waltz.
* 6 A ¶ Four people occupy the room, and only one of them is dancing.
7 A ¶ ELOWEN TREGARTHEN-ADEYEMI (30s, sea-green dress, bare shoulders) turns slowly in the center of the floor, alone, her eyes half closed.
8 A At the bar, ARTEMIS KOWALCZYK-MWANGI (30s, rolled-up shirt sleeves, a bottle in one hand) pours two glasses and pours a third.
9 A LEONID BRAUNSTEIN-OKAFOR (50s, dinner jacket, white gloves) stands near the gramophone with a hand on the horn, as if holding the music in place.
10 A And on the window seat, curled like a cat, sits a girl of eight, MIRABEL (small, in a nightgown, hair loose), who is not supposed to be awake.
11 A ¶ She spins.
* 12 A The hem of her dress sweeps the boards.
13 A She stops, breathless, and looks directly at him.
14 D ELOWEN: You never asked me to dance.
15 A ¶ He lowers the bottle.
16 A He does not answer.
17 A She walks toward him, slowly, leaving a track in the dust.
18 D ARTEMIS: I don't dance.
19 D ELOWEN: You did once.
20 D ARTEMIS: That was a different year.
21 D ELOWEN: It was this year.
22 A ¶ Leonid clears his throat.
23 A Both glance at him.
24 D LEONID: Perhaps I should adjust the record.
25 D ELOWEN: Leave it.
26 A ¶ He lifts his hand from the horn, relieved.
27 A Artemis puts down the bottle.
28 A He steps out from behind the bar.
29 A For a moment they stand a yard apart.
30 D ARTEMIS: The lake is still.
31 D ELOWEN: It always is, here.
32 D ARTEMIS: That frightens me.
33 D ELOWEN: Does it?
34 D ARTEMIS: You don't know what's under it.
35 A ¶ She smiles at that, the first smile of the night, and takes his hand.
36 A He lets her.
37 A She pulls him gently onto the floor, one arm round his shoulder, the other in his palm, and they sway to the gramophone's crooked waltz.
38 A At the window, Mirabel hugs her knees.
39 D LEONID (softly): Lovely.
40 D MIRABEL (also softly): He's going to cry.
41 D LEONID: Who?
42 D MIRABEL: Him.
43 A ¶ Leonid peers.
44 A Artemis's face is turned to the dark window, jaw set, eyes bright.
45 A He does not cry.
46 A Not yet.
47 A He holds her closer.
48 D ARTEMIS: I couldn't stay.
49 D ELOWEN: I know.
50 D ARTEMIS: I couldn't tell you why.
51 D ELOWEN: I know that too.
* 52 A ¶ The record stutters.
53 A Leonid lunges for the needle.
54 A The room goes still and quiet, and Elowen stops, her hand still in Artemis's, her eyes on his face.
55 D ELOWEN [CONT'D]: Say it, then.
56 D ARTEMIS: Say what?
57 D ELOWEN: Whatever it is you came all this way to say.
58 A ¶ He opens his mouth.
59 A Closes it.
60 A From the window seat comes the dry rustle of Mirabel unfolding, and then her small, bare feet on the boards, crossing the room, stopping beside them.
61 D MIRABEL: He wants you to come back.
* 62 A ¶ Silence.
* 63 A Then the lake, at last, ripples, once, and a single bulb of the chandelier pops.
64 D ELOWEN: Does he?
65 D ARTEMIS (barely): Yes.
66 A ¶ Elowen releases his hand.
67 A Steps back.
68 A She looks at the child, at Leonid, at the bottle on the bar, and then at Artemis again, and for a long moment says nothing at all.
69 A ¶ Then she slaps him.
* 70 A The crack rings through the hall.
* 71 A The gramophone, which Leonid has been holding down with both hands, begins, absurdly, to play again.
72 D ELOWEN (trembling): Eleven years.
73 D ARTEMIS: I know.
74 D ELOWEN: Eleven years, and you send a child.
75 D MIRABEL: I wasn't sent. I came.
76 A ¶ Artemis laughs, a wet, helpless sound.
77 A Elowen turns away toward the dark windows, her back straight.
78 A Leonid, with great delicacy, picks up the third glass and offers it to her.
79 A She takes it.
80 A She drinks it in one swallow.

### SCENE s00115 | INT. MOUNTAIN SKI-LIFT CHALET - NIGHT
Detected names (may be incomplete or contain aliases): ADELINA RUSSO-OKAFOR, HOLDEN MBEKI-FALK, ROSEMARY PLUMMER-ASANTE, TEODORO BRANDT-NWOSU, MAN IN A GREY COAT, GREY COAT, CALLUM
* 1 A ¶ A pine-paneled lodge, snow banked against the windows.
* 2 A Fire in a stone hearth.
* 3 A A cracked leather sofa, a bar of antlers, a pot of mulled wine on the stove.
* 4 A ¶ Five people.
* 5 A One is a stranger.
6 A ¶ ADELINA RUSSO-OKAFOR (30s, red scarf, cheeks wind-burned) kneels at the hearth, feeding the fire.
7 A HOLDEN MBEKI-FALK (30s, ski patrol jacket, radio at his shoulder) paces by the window.
8 A ROSEMARY PLUMMER-ASANTE (60s, lodge owner, tartan apron) ladles wine into mugs.
9 A TEODORO BRANDT-NWOSU (20s, snowboarder, one arm in a sling) sprawls on the sofa.
10 A And near the door, dripping, stands a MAN IN A GREY COAT (40s, no hat, snow in his eyebrows) who arrived ten minutes ago and has not given a name.
11 D ROSEMARY: Wine, love?
12 D MAN IN A GREY COAT: Thank you.
13 A ¶ He takes it.
14 A Does not drink.
15 A Adelina watches him over her shoulder.
16 D ADELINA: Where did you come from?
17 D MAN IN A GREY COAT: Down the mountain.
18 D ADELINA: The lift's been closed for hours.
19 D MAN IN A GREY COAT: I walked.
20 D HOLDEN: In this?
21 D MAN IN A GREY COAT: It wasn't so bad.
22 A ¶ Teodoro whistles.
23 A Rosemary exchanges a look with Holden.
24 D ROSEMARY: You'll be wanting a room.
25 D MAN IN A GREY COAT: No. I'm only waiting.
26 D HOLDEN: For what?
27 D MAN IN A GREY COAT: For her.
28 A ¶ He nods at Adelina.
29 A She goes very still.
* 30 A The fire pops.
31 D ADELINA: I don't know you.
32 D MAN IN A GREY COAT: No.
33 D ADELINA: Then why--
34 D MAN IN A GREY COAT: I knew your sister.
* 35 A ¶ Silence.
36 A Rosemary lowers the ladle.
37 A Teodoro sits up.
38 A Holden's hand finds his radio.
39 D ADELINA: My sister died in the spring.
40 D MAN IN A GREY COAT: I know. I was there.
41 A ¶ Adelina stands, slowly.
42 A Her scarf slides from her shoulders.
43 A Holden steps between them, not hostile, but ready.
44 D HOLDEN: Sir, maybe you should sit down.
45 D MAN IN A GREY COAT: Of course.
46 A ¶ He sits on the arm of the sofa.
47 A Teodoro shifts to make room, then thinks better of it and shifts back.
48 D ADELINA: Say your name.
49 D MAN IN A GREY COAT: Callum.
50 D ADELINA (testing it): Callum.
51 D CALLUM: She talked about you. Every day.
52 D ADELINA: That's not possible.
53 D CALLUM: She called you her lighthouse.
54 A ¶ Adelina closes her eyes.
* 55 A The room holds its breath.
56 A Rosemary crosses herself.
57 A Holden's hand drops from the radio.
58 D CALLUM [CONT'D]: She wanted you to have this.
59 A ¶ He reaches into his coat and takes out a small, flat parcel wrapped in brown paper, tied with string.
60 A He holds it out.
61 A For a long moment, she doesn't take it.
62 A ¶ Then she does.

### SCENE s00116 | EXT. FIELD KITCHEN - FORWARD CAMP - DAWN
Detected names (may be incomplete or contain aliases): SERGEANT WILHELMINA OKORO-BRANDT, PRIVATE LEOPOLDO ESCOBAR-TANAKA, CORPORAL ABEBE TEKLE-NORDSTROM
* 1 A ¶ A canvas lean-to against a ruined stone wall.
* 2 A A cauldron simmers over a fire.
* 3 A Mud, mist, and the distant percussion of artillery that has gone on so long it has become weather.
4 A ¶ SERGEANT WILHELMINA OKORO-BRANDT (40s, flour on her sleeves) stirs a pot with a wooden paddle.
5 A PRIVATE LEOPOLDO ESCOBAR-TANAKA (19, helmet pushed back, mud to the knee) sits on an upturned bucket peeling potatoes.
6 A CORPORAL ABEBE TEKLE-NORDSTROM (30s, bandaged hand, cigarette behind one ear) leans on the wall with a tin cup.
7 A ¶ Nobody speaks.
* 8 A A shell lands, far off.
* 9 A The pot shivers.
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
* 39 A A shell lands, closer.
* 40 A The pot rattles.
41 A Nobody looks up.

### SCENE s00117 | INT. GRAND HOTEL ICE-SCULPTURE WORKSHOP - NIGHT
Detected names (may be incomplete or contain aliases): FELICITY AMADI-STR, BARNABAS OKONKWO-REYES, DESMOND ACHEBE-LINDGREN
* 1 A ¶ A walk-in freezer converted to a studio.
* 2 A Frost on every surface.
* 3 A A half-carved swan stands on a plinth, a chainsaw hangs from a hook, and a work lamp throws a cold blue circle on the floor.
4 A ¶ FELICITY AMADI-STRÖM (30s, parka, ski goggles) crouches at the base of the swan, a chisel in her glove.
5 A BARNABAS OKONKWO-REYES (40s, wool hat, breath fogging) holds the lamp steady.
6 A They work in silence, whispering only when necessary.
7 D FELICITY: Left a bit.
8 D BARNABAS: This is left.
9 D FELICITY: Your left.
10 D BARNABAS: It's my left.
11 D FELICITY: Mine, then.
12 A ¶ He sighs.
13 A Shifts the lamp.
* 14 A The beam slides across the ice, and inside the swan's translucent belly, a dark shape appears.
15 D FELICITY [CONT'D]: There.
16 D BARNABAS: You're sure?
17 D FELICITY: Fifteen pounds of platinum. Frozen in solid.
18 D BARNABAS: Why would anyone put it in a swan?
19 D FELICITY: Because no one chisels a swan.
20 D BARNABAS: We're chiseling a swan.
21 D FELICITY: We're not anyone.
22 A ¶ She taps the ice with the chisel.
* 23 A A crack travels along the neck.
24 A Barnabas winces.
25 D BARNABAS: Careful.
26 D FELICITY: It's only a swan.
27 D BARNABAS: It's a swan worth four thousand dollars, and the gala is tomorrow.
28 D FELICITY: Then we'll leave them a duck.
* 29 A ¶ The freezer door clanks.
30 A They freeze.
31 A ¶ A figure enters.
32 A DESMOND ACHEBE-LINDGREN (50s, executive chef, whites under a long coat) stops just inside, studying the swan, then them.
33 D DESMOND: Evening.
34 D FELICITY: Evening, Chef.
35 D BARNABAS: We were just finishing.
36 D DESMOND: At two a.m.?
37 D FELICITY: Inspiration.
38 D DESMOND: It is a very good swan.
39 D BARNABAS: Thank you.
40 D DESMOND: It would be a better swan with its belly intact.
* 41 A ¶ A pause.
42 A Desmond crosses to the chainsaw and lifts it off the hook, casually, like a man picking up a ladle.
43 D FELICITY: Chef, we can explain.
44 D DESMOND: I would hope so.
45 D BARNABAS: It was Felicity's idea.
46 D FELICITY: It was not!
47 D DESMOND: It was mine, actually.
48 A ¶ They stare at him.
49 D DESMOND [CONT'D]: I froze the platinum in. Sixteen years ago. You are both very late.
50 A ¶ He smiles, a long, slow, wolfish smile, and pulls the cord.
* 51 A The chainsaw roars.
52 A Felicity and Barnabas leap backward, and the swan, quivering, begins to crack from the neck down.

### SCENE s00118 | INT. APOTHECARY SHOP - EVENING - 1794
Detected names (may be incomplete or contain aliases): MASTER EZEKIEL ARTHURSEN-OKAFOR, YOUNG PHILIPPA BRANDT-NWOSU, MADAME ODETTE LACROIX-ADEYEMI, CONSTABLE HENDRICK VAN DER MEER-OLUWA, MADAME LACROIX
* 1 A ¶ Shelves of blue glass bottles.
* 2 A Dried herbs hang from the rafters.
* 3 A A brass scale.
* 4 A Low light from a single oil lamp, and a wet street beyond the bowed windows.
5 A ¶ MASTER EZEKIEL ARTHURSEN-OKAFOR, the apothecary, grinds powder in a mortar behind the counter.
6 A He is stout and gentle, with spectacles pushed up on his forehead.
7 A His apprentice, YOUNG PHILIPPA BRANDT-NWOSU, no more than sixteen, sweeps the floor.
8 A At a small table by the window, MADAME ODETTE LACROIX-ADEYEMI, a widow in black silk, sits with a cup of tea she has not touched.
9 A And by the door, snow on his hat, stands CONSTABLE HENDRICK VAN DER MEER-OLUWA, huge and slow, a lantern at his belt.
10 A ¶ He nods to the apothecary.
11 A The apothecary nods back.
12 D EZEKIEL: Constable.
13 D HENDRICK: Master Arthursen.
14 D EZEKIEL: Tea?
15 D HENDRICK: Thank you, no.
16 A ¶ He remains by the door.
17 A Philippa sweeps around his boots.
18 A Madame Lacroix stirs her cup, the spoon clinking against the china.
19 D EZEKIEL: You are out late.
20 D HENDRICK: It's a cold night.
21 D EZEKIEL: It is.
22 D HENDRICK: There was a death on Pearl Street.
23 A ¶ Ezekiel does not stop grinding.
24 A Philippa's broom pauses a fraction of a second, then continues.
25 D EZEKIEL: Terrible.
26 D HENDRICK: A gentleman. Sixty years. Found in his chair.
27 D EZEKIEL: Terrible.
28 D HENDRICK: His wife says he took a draught for the cough.
29 A ¶ Ezekiel sets the pestle down.
30 D EZEKIEL: Many do.
31 D HENDRICK: From this shop.
32 A ¶ Madame Lacroix lifts her gaze from the cup.
33 A Her eyes find the constable, then the apothecary, then the floor.
34 A Ezekiel wipes his hands on his apron.
35 D EZEKIEL: I make no poisons, Constable.
36 D HENDRICK: I did not say poison.
* 37 A ¶ A pause.
* 38 A The lamp flickers.
39 A Philippa stands completely still.
40 A Madame Lacroix sets the cup on its saucer, with extraordinary gentleness.
41 D MADAME LACROIX: I believe I can help.
42 D HENDRICK: Madame?
43 D MADAME LACROIX: It was my husband.
44 A ¶ Hendrick turns, slowly.
45 A Ezekiel stops breathing.
46 A Philippa lets the broom fall.
47 D MADAME LACROIX [CONT'D]: The draught was mine. I mixed it. I brought him the cup.
48 D HENDRICK: Madame, you cannot--
49 D MADAME LACROIX: I can. I did.
50 A ¶ She rises, smooths her black silk, and crosses to the constable.
51 A She offers him her wrists.
52 A He looks at them.
53 A He does not take them.
54 D HENDRICK: I should like to hear why.
55 D MADAME LACROIX: You would not.
56 D HENDRICK: Try me.
57 A ¶ She considers.
58 A Then she sits again.
59 A The constable removes his hat.
60 A Ezekiel pours two cups of tea.
61 A In the corner, Philippa picks up the broom, and under the old oil lamp, with the snow falling in the street outside, the widow begins to speak.

### SCENE s00119 | INT. BAKERY DELIVERY TRUCK - CARGO AREA - PRE-DAWN
Detected names (may be incomplete or contain aliases): MARI, BENNETT-OKORO, HECTOR DELACROIX-ASANTE, PRIYA RAMASWAMY-LINDQVIST, THE STRANGER, JULIAN
* 1 A ¶ Steel racks of bread trays.
* 2 A Flour hangs in the air.
* 3 A A single dome light.
* 4 A The truck rocks gently over a country road.
5 A ¶ Three crew members and a stranger sit among the loaves.
6 A ¶ MARISOL "MARI" BENNETT-OKORO (30s, flour-dusted overalls, driver's cap) kneels in the aisle with a wrench.
7 A HECTOR DELACROIX-ASANTE (40s, forearms like hams, a neat moustache) sorts baguettes into bags.
8 A PRIYA RAMASWAMY-LINDQVIST (20s, hairnet, earbuds) counts a stack of invoices.
9 A And in the corner, wedged between two racks with a bakery apron over his suit, sits THE STRANGER (50s, polished shoes, a briefcase handcuffed to his wrist).
10 D MARI: Radio check.
11 D PRIYA (into collar): One.
12 D HECTOR: Two.
13 D MARI: Three. Stranger?
14 D THE STRANGER: I'm not on the radio.
15 D MARI: You're on now.
16 D THE STRANGER: I'm a delivery.
17 D HECTOR: Pastry delivery.
18 D THE STRANGER (wearily): Very funny.
19 A ¶ He tugs at the handcuff.
* 20 A It doesn't give.
21 A Priya pulls out an earbud.
22 D PRIYA: How long do we hold him?
23 D MARI: Until the bank opens.
24 D PRIYA: That's four hours.
25 D MARI: So we'll have fresh bread.
26 A ¶ Hector chuckles.
* 27 A The truck turns onto gravel.
* 28 A Loaves shift.
29 A The stranger lowers his head.
30 D THE STRANGER: You know I can pay.
31 D HECTOR: Everybody can pay.
32 D THE STRANGER: Double what they're giving you.
33 D MARI: That's what they all say.
34 D PRIYA (low, to Mari): Is it a lot?
35 D MARI (low): Not enough.
36 A ¶ Hector pushes aside a tray to reach the stranger's briefcase.
37 A The man jerks it away.
38 A Hector slaps the man's wrist, once, and the case springs open.
* 39 A Inside, a silver dossier.
40 A Hector flips it open.
41 D HECTOR: Mari.
42 D MARI: What.
43 D HECTOR: His name is Julian Ashworth-Mbeki.
44 A ¶ Marisol freezes.
45 A Priya drops her invoices.
46 A The stranger lifts his chin.
47 A His face, in the dome light, is perfectly composed.
48 D JULIAN: That is my name.
49 D MARI (softly): You're the auditor.
50 D JULIAN: I am.
51 D MARI: Hector, we grabbed the wrong man.
52 D HECTOR: We grabbed the right man.
53 D PRIYA: He's the auditor!
54 D HECTOR: The auditor with the files.
55 A ¶ They look at each other.
56 A Julian smiles.
* 57 A The truck bounces over a pothole and a tray of croissants slides off its rack and scatters across the floor.
58 D JULIAN: Well. Shall we eat?

### SCENE s00120 | INT. FUNICULAR STATION - OPERATOR'S BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): ODALYS VANTERPOOL
* 1 A ¶ Sodium light.
* 2 A Rain on tin.
* 3 A A brass lever the size of a forearm.
4 A ¶ ODALYS VANTERPOOL, 40s, wet wool coat, hair pinned too tight.
5 A She has a cassette recorder.
6 A She sets it on the control desk.
7 A ¶ Presses PLAY.
8 D ODALYS [V.O.] (tape, hiss): If you're hearing this, I'm already on the car.
9 D ODALYS: I know.
10 D ODALYS [V.O.] (tape): Don't talk to the tape, Odalys. You hate it when people talk to the tape.
11 D ODALYS: Then stop being so sure of me.
12 D ODALYS [V.O.] (tape): Three days. That's how long I watched the ledger. Three days of numbers that didn't breathe right.
13 D ODALYS: You said nobody would check the cable inspections.
14 D ODALYS [V.O.] (tape): Nobody did. That was the point. Brakes on the upper car were signed off in March. By a man who died in January.
15 D ODALYS: Say it plainer.
16 D ODALYS [V.O.] (tape): The upper car won't hold on the grade. Not with a full load. Not tonight.
17 D ODALYS: There's no load. It's midnight.
18 D ODALYS [V.O.] (tape): There's a load. Look at the window.
19 A ¶ She doesn't look.
20 D ODALYS: I'm not looking.
21 D ODALYS [V.O.] (tape): Look.
* 22 A ¶ Lights.
* 23 A Halfway up the mountain.
* 24 A A car, lit yellow, climbing.
25 D ODALYS: Who's on it?
26 D ODALYS [V.O.] (tape): The board. All nine. The anniversary ride. You booked it.
27 D ODALYS: I booked it.
28 D ODALYS [V.O.] (tape): You booked it so I couldn't stop it.
29 A ¶ Her hand finds the lever.
* 30 A Cold brass.
31 D ODALYS: Then why leave a tape?
32 D ODALYS [V.O.] (tape, softer): Because you'll want to pull it. And you'll want to know why you didn't.
* 33 A ¶ Silence.
* 34 A The tape hisses.
* 35 A Rain.
* 36 A ¶ The car crests the grade.
37 D ODALYS: Forgive me.
38 A ¶ She pulls the lever.
* 39 A ¶ A shriek of steel from the dark.
* 40 A Then a flash, white, enormous, the whole mountain jumping.
* 41 A ¶ The window blows in.

### SCENE s00121 | INT. DRIVE-IN PROJECTION BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): PIA CALLOWAY, WENDELL OYELARAN, INTERCOM, MRS. DUBOIS
* 1 A ¶ A cramped room of hot metal and film smell.
* 2 A Two projectors rattle in unison, throwing twin beams through small square windows.
3 A ¶ PIA CALLOWAY, 16, in her father's oversized work shirt, threads a reel with quick, careful hands.
4 A Beside her, WENDELL OYELARAN, 17, holds a flashlight and a paper sack of popcorn he has no intention of sharing.
5 A ¶ He peers over her shoulder.
6 A She swats him away without looking.
7 D WENDELL: You're holding it wrong.
8 D PIA: I've held it a hundred times.
9 D WENDELL: Holding it wrong a hundred times.
10 A ¶ She grins in spite of herself, then locks the gate.
* 11 A The projector sings.
* 12 A A faint cheer drifts up from the cars below.
* 13 A ¶ An INTERCOM crackles on the wall.
14 D MRS. DUBOIS [O.S.] (intercom): Pia, honey, reel two's late. Cars are honking.
15 D PIA (to the intercom): Coming up, Mrs. Dubois. Ninety seconds.
16 D MRS. DUBOIS [O.S.] (intercom): Ninety seconds is how long the Hendersons will wait before they ask for their dollar back.
17 A ¶ She lets go of the button and turns, flustered.
18 A He is already holding out the second reel like a dinner plate.
19 D WENDELL: Ninety seconds. I'll count.
20 D PIA: You'll count wrong.
21 D WENDELL: Then count with me.
22 A ¶ She takes the reel.
23 A He leans in, shoulder to shoulder, so close their flashlights tangle.
24 A She does not move away.
25 D PIA: Wend. If this goes wrong, my dad will fire me.
26 D WENDELL: It's your dad's booth.
27 D PIA: That's why.
28 A ¶ Together they thread.
29 A The leader slips through the rollers, sprockets bite, and she tightens her jaw and he quiets his breathing, both of them staring at the same sliver of film.
30 D MRS. DUBOIS [O.S.] (intercom): Sixty seconds.
31 D PIA: We know!
32 D WENDELL: We know!
* 33 A ¶ The changeover cue flashes in the corner of the screen.
34 A She thumbs the switch.
* 35 A The first projector dies.
* 36 A The second blazes.
* 37 A ¶ Below, the cars cheer.
38 A She exhales.
39 A He laughs.
40 A They stand there, shaking, two kids on top of the world.
41 D WENDELL [CONT'D]: Best job in the county.
42 D PIA: Worst pay.
43 D WENDELL: Best view.
44 A ¶ She looks at him.
45 A He is looking at the screen.
* 46 A ¶ On the glass, the light of the film flickers across both faces.

### SCENE s00122 | INT. COUNTY RECORDS BASEMENT - DAY
Detected names (may be incomplete or contain aliases): JUDGE ILSA BRANDVOLD, ATTORNEY RAJESH PILLAY, CLERK FERGUS MBEKI, ATTORNEY LOUISE ARCENEAUX
* 1 A ¶ Steel shelving in grey rows.
* 2 A A single folding table has been set under a humming fluorescent tube.
* 3 A Dust hangs in the light like flour.
4 A ¶ JUDGE ILSA BRANDVOLD, 60s, reading glasses on a chain, sits at the head of the table with a legal pad.
5 A Across from her, ATTORNEY RAJESH PILLAY, 40s, rumpled suit, pulls a banker's box toward him and lifts the lid.
6 A At the far end, CLERK FERGUS MBEKI, 20s, bow tie, sorts folders into piles while ATTORNEY LOUISE ARCENEAUX, 50s, crisp navy blazer, pretends not to watch the box and instead straightens her pen, then her water glass, then her notes, then glances at Pillay, who pays her no mind and hums as he unfolds a brittle deed.
7 D BRANDVOLD: We are on the record. Counsel, you said there was a discrepancy in the plat.
8 D PILLAY: There is a lot line, Your Honor, that appears on the 1962 survey and not on the 1974 survey.
9 D ARCENEAUX: Which is irrelevant, as the 1974 survey supersedes.
10 D PILLAY: Unless the 1974 survey was never recorded.
11 A ¶ Mbeki stops sorting.
12 A He checks a ledger, runs a finger down a column, then looks up with the slow expression of a man who has found something unwelcome.
13 D MBEKI: It was recorded, Judge. In the wrong book.
14 D BRANDVOLD: The wrong book.
15 D MBEKI: Deed book instead of plat book. Somebody misfiled it fifty years ago.
16 A ¶ Arceneaux sets down her pen.
17 A Pillay finally smiles, folds the deed back along its crease, and slides it across the table toward the judge while Brandvold removes her glasses, polishes them on her sleeve, replaces them, and reads, and Mbeki hovers behind her with the ledger open, and Arceneaux leans to see.
18 D ARCENEAUX: That's a clerical error. It doesn't alter the legal effect.
19 D PILLAY: It alters the date.
20 D BRANDVOLD: Mr. Mbeki, bring me the plat book.
21 A ¶ He crosses the room, hauls down a canvas-bound volume, wipes it with his cuff, and sets it before her.
22 A She turns pages, slowly, one at a time.
23 D BRANDVOLD [CONT'D]: We will be here a while. Would anyone like coffee?
24 D ARCENEAUX: Please.
25 D PILLAY: Black, thanks.
26 A ¶ Mbeki nods and heads for the stairs, already counting cups.

### SCENE s00123 | INT. BAKERY - PROOFING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): NAOMI BETTENCOURT, LINNEA ASHWORTH
* 1 A ¶ Warm, yeasty dark.
* 2 A Steel racks of dough rise under damp cloths.
* 3 A A single bulb burns over a flour-dusted table.
4 A ¶ NAOMI BETTENCOURT, 30s, sleeves pushed to the elbow, shapes loaves with unhurried hands.
5 A Humming.
6 A At peace.
* 7 A ¶ The back door scrapes.
* 8 A Cold air wedges in.
9 D NAOMI: You're early.
10 A ¶ A shape in the doorway, snow on her shoulders.
11 A ¶ LINNEA ASHWORTH, 30s, long coat, a suitcase in one hand, steps into the light.
12 A Her face is thinner than Naomi remembers.
13 D LINNEA: I took the first train.
14 D NAOMI: You said Friday.
15 D LINNEA: It is Friday.
16 A ¶ Naomi looks at the clock over the oven.
* 17 A 1:40 AM.
18 A She almost laughs.
19 D NAOMI: So it is.
20 A ¶ She wipes her hands on her apron.
21 A She does not cross the room.
22 A Neither does Linnea.
* 23 A Between them, the racks tick softly as the dough breathes.
24 D LINNEA: You look well.
25 D NAOMI: I look like flour.
26 D LINNEA: That's what I meant.
27 A ¶ Naomi smiles, finally, and gestures to a stool.
28 A Linnea sets down the suitcase and sits.
29 A She watches Naomi's hands work, the push, the fold, the turn.
30 D LINNEA [CONT'D]: I thought about this room every night.
31 D NAOMI: I thought about you every night.
32 A ¶ They speak at the same moment, quietly, a little afraid.
33 D NAOMI [CONT'D]: I'm sorry I left.
34 D LINNEA: I'm sorry I left.
35 A ¶ Nobody moves.
36 A Then Naomi laughs, wet-eyed, and Linnea does too, and the tension breaks like crust.
37 D NAOMI: Stay. Please.
38 D LINNEA: I can't promise.
39 D NAOMI: I'm not asking for a promise. Just the morning bake.
40 A ¶ Linnea rises.
41 A She takes the other end of the table.
42 A She picks up a knife and starts scoring loaves, matching rhythm.
* 43 A ¶ For a time they work in easy silence.
44 A ¶ Then Linnea sets down the knife.
45 A She slides her left hand into her coat pocket and withdraws a thin envelope, stamped with a hospital seal.
46 D LINNEA [CONT'D]: Before the morning, I should show you this.
47 A ¶ Naomi looks at the seal.
* 48 A The humming in the room seems to stop.
49 D NAOMI: Linnea.
50 D LINNEA: Read it. Then decide about the bread.

### SCENE s00124 | INT. LAMPLIGHTERS' DEPOT - DAWN - 1887
Detected names (may be incomplete or contain aliases): HOBART PRYCE, TESS MALLORY
* 1 A ¶ Brass poles hang from iron hooks.
* 2 A Ladders.
* 3 A Oil cans.
* 4 A A coke stove ticking.
5 A ¶ HOBART PRYCE, 50s, ash-grey beard, sits on an overturned crate mending a wick-trimmer.
6 A Across from him, young TESS MALLORY, 19, boots too large, sorts spent matches into a tin.
7 A ¶ Neither speaks.
* 8 A ¶ A church bell somewhere.
* 9 A Six strokes.
10 D PRYCE: Poles.
11 A ¶ Tess lifts two from the rack.
12 A Hands one over.
13 A He tests the weight.
14 A Nods.
15 D PRYCE [CONT'D]: Gaslight's out on Fenwick Row.
16 D TESS: Again?
17 D PRYCE: Again.
18 A ¶ They pull on coats.
19 A Tess drops the tin.
* 20 A Matches scatter across the boards.
21 A They both kneel and snatch at them, knocking heads.
22 D TESS: Sorry.
23 D PRYCE: Mind the sulphur.
* 24 A ¶ The door bangs open.
* 25 A Wind.
* 26 A Running feet outside.
27 A Both freeze, poles half raised.
* 28 A ¶ Silence.
29 D TESS: Dogs?
30 D PRYCE: Constables.
31 A ¶ They glance at the window.
* 32 A Blue coats pass.
* 33 A The street goes quiet.
34 A Both exhale.
35 D PRYCE [CONT'D]: They're after the Quigley lot.
36 D TESS: Not us.
37 D PRYCE: Never us. We carry fire. Nobody arrests the man with fire.
38 A ¶ He grins.
39 A She almost does.
40 A ¶ They step into the street.
* 41 A The sky is the color of dishwater.
42 A Tess lifts her pole to the first lamp.
43 A Pryce lifts his to the second.
* 44 A Two small flames bloom in the grey.
45 D TESS: Mr. Pryce?
46 D PRYCE: Aye.
47 D TESS: What happens when they light themselves?
48 D PRYCE: Then we find something else to carry.
49 A ¶ They move on up the row, side by side, one lamp, then the next.

### SCENE s00125 | INT. STORAGE UNIT 114 - NIGHT
Detected names (may be incomplete or contain aliases): STRANGER, BOY'S VOICE, DESMOND
* 1 A ¶ Corrugated walls sweat in the heat.
* 2 A A bare bulb swings from a cord, painting the cartons and a rolled carpet in slow, nauseous arcs.
* 3 A Dust has settled on everything but the one thing that matters: a battered cassette recorder, its cover scarred with a boy's initials, sitting alone on an overturned milk crate as though somebody wanted it found.
4 A ¶ A STRANGER, 40s, rain-dark coat, a crowbar hanging forgotten from his fist, stands over it.
5 A He crouches, the knees of his trousers dampening on the concrete, and turns the machine over in his hands, and the lid pops, and a tape inside spins as he presses PLAY with a thumb that has not decided whether to tremble.
6 D BOY'S VOICE [V.O.] (tape, crackling): This is Desmond Archer, age eleven, and if you found this, Dad's lock didn't hold.
7 A ¶ The Stranger goes absolutely still.
8 A His breath catches, and in the pause between the tape's hiss and the next word, the bulb steadies, the carpet seems to exhale dust, and the crowbar slips from his hand and rings on the floor.
9 D BOY'S VOICE [V.O., CONT'D] (tape): I put the key under the third brick. Take whatever's here. Just don't tell Mom.
10 A ¶ He slumps against the crate.
11 D DESMOND (a whisper): Third brick.
12 A ¶ He lifts a loose brick from the wall.
* 13 A Beneath it: a small brass key, bright as the day it was hidden.
14 A He closes his fist around it, rises, and walks out into the rain.

### SCENE s00126 | INT. SKYLARK ROLLER RINK - AFTER HOURS
Detected names (may be incomplete or contain aliases): SLIM, DUBREUIL, MARISOL AGUILERA, BIG TEDDY KOWALSKI, MOUSE, PETROVA, DETECTIVE HARUKI SATO
* 1 A ¶ Disco ball dead.
* 2 A Neon half-lit.
* 3 A The rink floor is a lacquered oval of scuffs.
* 4 A In the center, a card table.
* 5 A Five folding chairs.
* 6 A ¶ Five people.
* 7 A All in shoes, none on skates.
8 A ¶ CORNELIUS "SLIM" DUBREUIL, 60s, tall, silver pompadour, dinner jacket from another decade, deals cards like he is laying bricks.
9 A ¶ MARISOL AGUILERA, 30s, red lipstick, tailored black jumpsuit, counts chips without looking.
10 A ¶ BIG TEDDY KOWALSKI, 50s, shoulders like a vending machine, a toothpick in his teeth.
11 A ¶ "MOUSE" PETROVA, 20s, hood up, sneakers untied, fingers drumming the table.
12 A ¶ And DETECTIVE HARUKI SATO, 40s, plain suit, plain tie, wedding ring, a face that gives away nothing at all.
13 D SLIM: Nobody leaves the table till the pot's been called. House rule.
14 D MARISOL: Since when does a roller rink have house rules?
15 D SLIM: Since I bought it, Marisol.
16 D BIG TEDDY: It's a good rink. Smells like feet and popcorn.
17 D MOUSE: Smells like money. Slim, you cut the deck twice.
18 D SLIM: I cut it once, Mouse. Your eyes are tired.
19 D MOUSE: My eyes are fine. Haruki, what do you say?
20 D SATO: I say I came to play cards.
21 D MARISOL: You came to listen, Haruki. We all know it.
22 D SATO: Marisol, if I wanted to listen, I'd have brought a wire.
23 D BIG TEDDY (chuckles): Wire. Heh.
24 D SLIM: Ante up, children.
25 D MOUSE: Slim, who's the sixth chair for?
26 D SLIM: There's no sixth chair.
27 D MOUSE: There's a chair. Right there. By the door.
28 D SLIM: That's a coat rack, Mouse.
29 D SATO: Mouse is right, Slim. That's a chair.
30 D BIG TEDDY: Why would there be a sixth chair, Slim?
31 D SLIM (quiet): For whoever's coming to collect.
32 D MARISOL: Collect what?
33 D SLIM: Teddy. Tell her.
34 D BIG TEDDY: Slim, I don't...
35 D SLIM: Tell her what you sold me.
36 D BIG TEDDY: Marisol, I never meant...
37 D MARISOL: Teddy.
38 D BIG TEDDY: It was the Bay Street job. They knew the route. I gave them the route.
39 D MOUSE: Oh, no.
40 D SATO: Nobody move.
* 41 A ¶ The front doors of the rink swing wide.
* 42 A Light floods in.

### SCENE s00127 | EXT. HOT AIR BALLOON BASKET - 3,000 FEET - DAY
Detected names (may be incomplete or contain aliases): BARNABY CROOKE, LUCINDA FAIRWEATHER, DEZ, HALVORSEN, PRIYA
* 1 A ¶ Five bodies in a wicker basket built for three.
* 2 A Clouds below.
* 3 A One propane tank.
* 4 A Zero grace.
5 D BARNABY CROOKE: We're fine, we're fine, it's just wind.
6 D LUCINDA FAIRWEATHER: It's not wind, Barnaby, it's your weight!
7 D DEZ: Who packed the sandwiches?
8 D HALVORSEN (over Dez): We're descending. We are definitely descending.
9 D BARNABY CROOKE: We are not descending, we are...
10 D LUCINDA FAIRWEATHER: Hover! The word is hover!
11 D PRIYA: Nobody touches the burner! I mean it!
12 D DEZ: I just asked about sandwiches!
13 D HALVORSEN: Priya, the altimeter is spinning.
14 D PRIYA: It's supposed to spin!
15 D BARNABY CROOKE: It is not supposed to spin!
16 D LUCINDA FAIRWEATHER: Oh my God, there's a cow. There's a cow, and it's getting bigger.
17 D DEZ: That's not a cow, that's a barn.
18 D HALVORSEN: Everybody lean left!
19 D PRIYA: Left is the other left!
20 D BARNABY CROOKE: I proposed to you at 3,000 feet, Lucinda, and you said yes!
21 D LUCINDA FAIRWEATHER: I said yes to a picnic!

### SCENE s00128 | INT. CURLING CLUB - DAWN
Detected names (may be incomplete or contain aliases): COACH GREER WALLENBERG, STRANGER, MARGIT
* 1 A ¶ Empty ice, grey-blue under the rafters.
* 2 A A frost-fogged scoreboard.
3 A COACH GREER WALLENBERG, 50s, thermos in hand, walks the sheet checking pebble, shoulders tight, a man with a final tomorrow.
4 A ¶ A STRANGER stands at the rail, an elderly woman in a green scarf, hands tucked in her sleeves.
5 A She has slipped in out of the cold.
6 A ¶ He sees her.
7 A He stops.
8 D GREER: Rink's closed, ma'am.
9 D STRANGER: So is the door you came through.
10 A ¶ He glances back.
* 11 A It is.
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
* 26 A A burr.
* 27 A Small.
* 28 A Real.
29 D GREER: How did you know?
30 D MARGIT: It pulled left in 1961, too.
31 A ¶ He looks up.
32 A She has already turned for the door, scarf trailing, leaving a line of small wet prints on the ice.

### SCENE s00129 | INT. ST. CASIMIR LANES - CONVERTED CHURCH - NIGHT
Detected names (may be incomplete or contain aliases): ROSALIND PARKHURST, DEACON PARKHURST, NADINE FOLASADE, GUS TREVELYAN
* 1 A ¶ A nave of oiled maple lanes where the pews once stood.
* 2 A Stained glass glows behind the pin decks.
* 3 A The league scoreboard hangs where the crucifix used to be.
4 A ¶ Four men and women sit at the last lane in the last frame of the season.
* 5 A No one is cheering.
* 6 A The place is nearly empty.
7 A ¶ ROSALIND PARKHURST, 60s, cardigan, bowling shoes polished like church shoes, wipes her ball with a towel.
8 A Beside her, her son DEACON PARKHURST, 30s, sits with his elbows on his knees, staring at his phone without reading it.
* 9 A ¶ Across the lane sit their opponents.
10 A NADINE FOLASADE, 40s, braids tied back, rolls her shoulders.
11 A Next to her, an old man in a bowling shirt, GUS TREVELYAN, 70s, tape on two fingers, a cigarette unlit between them.
* 12 A ¶ The pin deck resets with a long mechanical groan.
13 D ROSALIND: Your father used to say the pins knew.
14 D DEACON: Knew what?
15 D ROSALIND: Whether you wanted it.
16 A ¶ Deacon puts the phone away.
17 D DEACON: Mom, it's a Tuesday.
18 D ROSALIND: It's the Tuesday.
19 A ¶ Nadine gets up.
20 A Walks to the ball return.
21 A Picks up a green ball.
22 A Weighs it.
23 A Puts it back.
24 A Picks up a blue one.
25 D NADINE: You boys have been on our lane too long.
26 D GUS: Twelve years.
27 D NADINE: Twelve years, and nobody has said a word.
28 D GUS: Because there was nothing to say.
29 D NADINE: There was plenty.
30 A ¶ Deacon looks at his mother.
31 A Rosalind does not look at him.
32 D DEACON: Is there something I should know?
33 D ROSALIND: Take your turn.
34 D DEACON: I'm asking.
35 D ROSALIND: Take your turn, Deacon.
36 A ¶ He stands.
37 A Picks his ball.
38 A Steps to the line.
39 A Pauses.
40 D DEACON [CONT'D]: Dad used to bring us here Sundays.
41 D GUS: Your dad used to bring a lot of people here Sundays.
42 A ¶ Deacon turns.
43 A Nadine has gone very still.
44 A Rosalind has put the towel down.
45 D ROSALIND: Gus.
46 D GUS: Might as well. Twelve years is long enough.
47 D NADINE: Don't.
48 D GUS: Your father had two families, son. This lane was where they met without knowing.
49 D DEACON (quiet): Say that again.
50 D GUS: I've been polite twelve years.
51 D NADINE: Gus, shut your mouth.
52 D ROSALIND: He's not lying.
53 A ¶ Deacon looks at the ball in his hands.
54 A His grip tightens.
* 55 A The leather creaks.
56 D DEACON: Nadine?
57 D NADINE (evenly): Your father was my father too.
* 58 A ¶ A long silence.
* 59 A Somewhere in the rafters a pigeon shifts.
60 A ¶ Deacon sets the ball down.
* 61 A It rolls, slow, down the lane, crosses the arrows, kisses the head pin, and drops all ten.
* 62 A ¶ Nobody looks at the scoreboard.
63 D ROSALIND: Strike.
64 D NADINE (not smiling): Your game.
65 D DEACON (turning to Gus): Why tonight?
66 D GUS: Because it's the last frame, son. After tonight there's no lane to share.
67 A ¶ Deacon walks away from the line.
68 A He passes his mother.
69 A He passes Nadine.
70 A He stops at the end of the lane, where the stained glass throws red light across his hands.
71 A ¶ He picks up the blue ball.
72 A Holds it out to Nadine.
73 D DEACON: Roll one.
74 A ¶ She hesitates.
75 A Then she takes it.

### SCENE s00130 | INT. MONASTERY BELL TOWER - DAWN
Detected names (may be incomplete or contain aliases): SERGEANT IGNATIUS OBUYA, PRIVATE TOBIAS WREN, STRANGER, ANSELM
* 1 A ¶ Narrow stone stair, spiraling up into dark.
* 2 A At the top: a square chamber, open arches on four sides, a great bronze bell hanging dead still.
* 3 A Fog beyond the arches.
* 4 A Below, somewhere, artillery coughs.
5 A ¶ SERGEANT IGNATIUS OBUYA, 30s, mud to the knees, rifle slung, wedges himself behind a pillar.
6 A ¶ Behind him, PRIVATE TOBIAS WREN, 19, shaking hands, a field radio strapped to his back.
7 A ¶ A STRANGER crouches in the corner.
8 A Gaunt.
9 A Brown habit, rope belt, bare feet.
10 A He has been there all night.
11 D OBUYA (low): Who's that?
12 D WREN: Monk, I think.
13 D OBUYA (to the Stranger): You speak English?
14 A ¶ The Stranger nods, once.
15 D STRANGER: Some. Brother Anselm.
16 D OBUYA: Brother, you can't be up here.
17 D ANSELM: I have rung this bell every dawn for thirty years.
* 18 A ¶ Another shell.
* 19 A The tower shudders.
* 20 A Dust falls.
21 D WREN: Sarge, the ridge is full of them.
22 D OBUYA: Count.
23 D WREN: Forty. Fifty.
24 D OBUYA: Radio. Tell battalion we're in position.
25 A ¶ Wren fumbles with the handset.
* 26 A Static.
* 27 A Nothing.
28 D WREN: Dead.
29 D OBUYA: Then we hold.
30 A ¶ Anselm stands.
31 A He looks at Obuya.
32 A Points to the bell, then to himself.
33 D ANSELM: They will hear it. They always stop.
34 D OBUYA: Brother, if you ring that, they'll know exactly where we are.
35 D ANSELM: They know already.
36 A ¶ He lifts the rope and tugs once.
* 37 A ¶ A single, enormous BONG.
38 D OBUYA: No!
39 A ¶ Anselm rings it again.
40 A And again.
* 41 A The tower hums with it.
* 42 A Below, in the fog, the guns fall silent.
* 43 A ¶ Wren stares through the arch.
44 D WREN: They're stopping.
45 D OBUYA: What?
46 D WREN: They're taking their hats off.
47 A ¶ Obuya lowers his rifle.
* 48 A Anselm keeps ringing.
49 A Behind him, the sun breaks through the fog like a struck match.

### SCENE s00131 | INT. HOTEL SERVICE ELEVATOR - DAY
Detected names (may be incomplete or contain aliases): CHEF BASILE ORTEGA, SHANICE DORSEY, UNCLE VITO PALAZZO, DEV RAMASWAMY, TILDA BJORKLUND, BRIDE, MOIRA KENNEDY
* 1 A ¶ A stainless box, too small.
* 2 A A three-tier wedding cake on a rolling cart takes up most of it.
* 3 A Six people squeeze around it.
4 A ¶ CHEF BASILE ORTEGA, 50s, apron, sweat.
5 A SHANICE DORSEY, 20s, bridal planner, clipboard.
6 A UNCLE VITO PALAZZO, 60s, tuxedo, too tight.
7 A DEV RAMASWAMY, 20s, the photographer, camera bag.
8 A TILDA BJORKLUND, 30s, bridesmaid in a puffy teal gown.
9 A And the BRIDE herself, MOIRA KENNEDY, 28, in a veil, eyes closed, breathing slow.
* 10 A ¶ The elevator jolts.
* 11 A Stops.
* 12 A The lights flicker.
13 D TILDA: Oh no.
14 D SHANICE: It's fine. It's a service elevator. They stall.
15 D BASILE: Stall! Cake, madame, is made of stall!
16 D VITO: Somebody push the button.
17 D DEV: I'm pushing it.
18 D SHANICE: Don't push it, it's the alarm.
19 D TILDA: Everything is the alarm!
20 D MOIRA (eyes closed): Everybody stop.
21 A ¶ Nobody stops.
22 D BASILE: Fondant! The humidity!
23 D VITO: Is it hot in here?
24 D DEV: It's very hot in here.
25 D SHANICE: Please. Everyone please.
26 D TILDA: My dress is sticking to my...
27 D MOIRA: Everybody.
28 A ¶ Dev leans on the wall.
* 29 A The cart rolls an inch.
* 30 A The cake sways.
31 A Everyone lunges at once.
32 A Basile catches the top tier.
33 A Vito catches Basile.
34 A Shanice catches Vito.
35 A Tilda catches Shanice's clipboard.
* 36 A The cake settles.
37 D BASILE: Do not breathe!
38 D VITO: I'm not breathing.
39 D SHANICE: Can we call someone?
40 D TILDA: I have no signal!
41 D DEV: I have one bar.
42 D BASILE: Zero bars on the cake!
43 D MOIRA (opening her eyes): I'm leaving him.
* 44 A ¶ Silence.
* 45 A The cake swings.
46 D TILDA: What?
47 D MOIRA: I'm leaving him. I've been thinking about it for three weeks, and I'm leaving him, and I'm doing it in the elevator.
48 D SHANICE: Moira, honey.
49 D VITO: Not on the cake.
* 50 A ¶ The elevator lurches back to life.
* 51 A It rises.
* 52 A It dings.
* 53 A The doors open on a ballroom of two hundred guests, all of them turned to look.

### SCENE s00132 | INT. PLANETARIUM - CENTRAL DOME - NIGHT
Detected names (may be incomplete or contain aliases): PIP, ADEYEMI-LARKIN, SOUND, VOICE, MORDECAI ASHFORD-LUND
* 1 A ¶ A great hemisphere of dark.
* 2 A In its middle, a squat projector shaped like a spiked beetle, squatting on a platform ringed with reclining seats.
* 3 A The cupola above glows faintly with the residue of the day's last show.
* 4 A ¶ Soft footfalls.
5 A Someone is breathing carefully, the way people do when they have broken into a place and wish to be forgiven for it.
6 A ¶ PERSEPHONE "PIP" ADEYEMI-LARKIN, 30s, small, black thermal jacket, a miner's headlamp turned to red.
7 A She kneels at the base of the projector with a canvas tool roll, unwrapping picks the way a surgeon lays out scalpels.
8 A Her face is composed.
9 A Her eyes are not.
10 A ¶ She whispers into her sleeve.
11 D PIP: I'm at the base. Panel is off. I see the vault door.
12 A ¶ She waits.
* 13 A Nothing.
14 D PIP [CONT'D]: Anyone?
15 A ¶ She sighs.
16 A Presses her palm to the dome's cold metal.
17 A Tilts her head to look up through the beetle's legs into the dark of a ceiling she cannot see.
* 18 A ¶ The planetarium, empty, is still a place that holds its breath.
19 A ¶ She slides a pick into the lock.
20 A Turns it a quarter.
21 A Listens.
22 A Turns it back.
23 A Wipes sweat from her upper lip with the heel of her glove.
24 D PIP [CONT'D]: Come on, old girl.
* 25 A ¶ Click.
* 26 A A heavy tumbler falls somewhere inside.
27 A She holds her breath.
* 28 A Another.
* 29 A Another.
* 30 A The door drifts open an inch.
* 31 A ¶ Behind her, a SOUND.
* 32 A Soft.
* 33 A The slide of a shoe.
34 A ¶ She does not turn.
35 A Her hand drops to the tool roll, closes on a flat steel bar.
* 36 A ¶ A VOICE from the dark.
37 D VOICE [O.S.]: That lock was installed in 1958. It sticks on the third tumbler.
38 A ¶ Pip pivots, bar raised.
39 A ¶ A tall figure steps from between two seats.
40 A Silver hair.
41 A Cardigan.
42 A Pocket flashlight in one hand, thermos in the other.
43 A ¶ DR. MORDECAI ASHFORD-LUND, 70s, lowers the flashlight so the beam falls on the floor between them.
44 A He is calm.
45 A Infinitely tired.
46 A ¶ Now she knows him.
47 A She lowers the bar one inch.
48 D PIP: Doctor.
49 D MORDECAI: Miss Adeyemi-Larkin. You came earlier than I thought.
50 D PIP: You knew.
51 D MORDECAI: I wrote the alarm schedule. I turned it off at nine.
52 D PIP: Why?
53 A ¶ He sets the thermos on a seat.
54 A Sits beside it.
55 A Sighs.
56 D MORDECAI: Because forty years of children have lain under that sky, and not one of them has ever asked me what's inside the projector.
57 D PIP: What's inside the projector?
58 D MORDECAI: The Hope Diamond, as it happens.
59 D PIP (a beat): That's a joke.
60 D MORDECAI: It is not a joke. It is a stone the museum board acquired in 1982 and kept off the books. I have guarded it for forty years in the one place no thief would ever think to look.
61 D PIP: Except me.
62 D MORDECAI: Except you.
63 A ¶ She looks at the open vault.
64 A At the old man.
65 A At the bar in her hand.
66 D PIP: Why would you turn off the alarm, then?
67 D MORDECAI (simply): Because I'd like somebody to see it before I die.
68 A ¶ He rises.
69 A Takes the flashlight in two fingers and clicks it off.
70 D MORDECAI [CONT'D]: Open it, Pip. I will turn on the stars.
71 A ¶ He crosses to the control panel.
72 A Presses a button.
* 73 A ¶ The dome erupts into a billion pinpoints of light.
74 A ¶ Pip stands in the center, bar forgotten, the vault door swinging wide.
* 75 A In the dark inside the beetle, something catches the starlight and throws it back, a single cold blue fire.
76 D PIP (breathing): Mordecai.
77 D MORDECAI: Yes?
78 D PIP: You should have asked sooner.
79 A ¶ He smiles, and for a moment the whole dome is theirs.

### SCENE s00133 | INT. HOSPITAL BASEMENT LAUNDRY - NIGHT
Detected names (may be incomplete or contain aliases): EUGENIA HARTSHORN, CALLIE HARTSHORN, OSWIN BRADDOCK
* 1 A ¶ Industrial washers thump.
* 2 A Steam beads on pipes.
* 3 A A row of orange plastic chairs, bolted down.
4 A ¶ EUGENIA HARTSHORN, 60s, in a good coat, folds a single hospital gown over and over, smaller each time.
5 A Across from her, her daughter CALLIE HARTSHORN, 30s, scrubs, badge flipped backward, watches a dryer turn.
* 6 A ¶ Between them, on the third chair, a paper bag from the cafeteria.
* 7 A Untouched.
* 8 A ¶ Heavy boots.
9 A OSWIN BRADDOCK, 60s, maintenance, enters pushing a cart of towels.
10 A He nods to both, parks it, starts feeding sheets into a mangle.
11 D EUGENIA: You haven't eaten.
12 D CALLIE: Neither have you.
13 D EUGENIA: I'm not on shift.
14 D CALLIE: You're here, Mom.
15 A ¶ Eugenia smooths the gown flat on her knee.
16 A Folds it again.
17 D OSWIN: Evening, ladies.
18 D EUGENIA: Evening.
19 D CALLIE: Hey, Oswin.
20 A ¶ He glances at the bag.
21 A Then at the two of them.
22 A Says nothing.
23 A Feeds another sheet.
24 D CALLIE [CONT'D]: They moved him to the sixth floor.
25 D EUGENIA: I know.
26 D CALLIE: I told them to wait.
27 D EUGENIA: I know.
28 D CALLIE: Dr. Rahimi said Thursday. Maybe Friday.
29 A ¶ Eugenia sets the gown down.
30 A Stands.
31 A Walks to the washer.
32 A Opens the door.
33 A Looks inside.
34 A Closes it.
35 D EUGENIA: This one's done.
36 D CALLIE: Mom, it's empty.
37 D EUGENIA: Is it?
38 A ¶ Oswin stops the mangle.
39 A Eugenia opens the washer again.
40 A She reaches in, pulls out a single wool sock, grey, wet.
41 A She holds it up.
42 D EUGENIA [CONT'D]: His.
43 A ¶ She sits.
44 A Holds the sock in both hands, as if it were a bird.
45 A ¶ Callie moves to the chair beside her.
46 A Does not touch her.
47 A Slides the paper bag across.
48 A Eugenia takes the sandwich.
49 A Unwraps it.
50 A Bites.
51 A Chews.
52 A Her jaw works hard.
53 A ¶ Oswin turns off the mangle.
54 A Quietly, he fetches a clean towel, folds it, and lays it across the sock in her lap.
55 D OSWIN: Dryer's free.
56 A ¶ Eugenia nods.
57 A Does not stand.

### SCENE s00134 | INT. HARBOR FISH AUCTION HALL - 4 A.M.
Detected names (may be incomplete or contain aliases): CHAR, IGLESIAS, DOM VASQUEZ, TWITCH, SHADOW, DETECTIVE MARGUERITE LAWSON
* 1 A ¶ Concrete.
* 2 A Wet.
* 3 A Gulls screaming under the rafters.
* 4 A Rows of tuna on ice, long as men.
5 A ¶ CARMELO "CHAR" IGLESIAS, 40s, rubber boots, gutting knife, sweeps the floor like a man hiding something.
* 6 A ¶ A bell clangs.
* 7 A Crowd noise.
8 A ¶ At the end of the aisle, DOM VASQUEZ, 50s, tailored raincoat, stands over a crate with a briefcase at his feet.
9 A Beside him, a skinny kid, TWITCH, 19, in a hoodie, hand twitching in his pocket.
10 D CHAR: Dom.
11 D DOM: Char. Product?
12 D CHAR: Under the bluefin.
13 D TWITCH: Under the what?
14 D CHAR: Fish, kid.
15 A ¶ Char tips a tuna on its side.
* 16 A Underneath: a taped brick.
17 D DOM: Count it.
18 D TWITCH: I'll count it.
19 D CHAR: Let him.
20 D TWITCH: All here.
21 D DOM: Good. Case.
22 A ¶ Dom nudges the briefcase forward with his toe.
23 A Char kneels.
24 A Lifts it.
25 A Opens.
* 26 A Dollars, banded.
27 A He snaps it shut.
28 A ¶ Behind them a SHADOW moves.
29 A Char sees it first.
30 D CHAR [CONT'D]: Don't turn around.
31 D DOM: Who?
32 D CHAR: Just don't.
* 33 A ¶ Footsteps on wet concrete.
* 34 A Slow.
35 A Then DETECTIVE MARGUERITE LAWSON, 40s, windbreaker, badge on a lanyard, a gun in her right hand, steps out between two ice tubs.
36 A Her eyes flick across the three of them: Char, the brick, the briefcase, the kid.
37 D LAWSON: Police. Hands.
38 D TWITCH: Oh, God.
39 D DOM: Detective.
40 D CHAR: Marguerite.
41 D LAWSON: Char, you son of a bitch.
42 D TWITCH: I didn't do anything.
43 D DOM: Kid, shut up.
44 A ¶ Twitch bolts.
45 A Slips on fish scales.
46 A Falls.
* 47 A The brick skids across the floor and splits, white powder bursting like flour in the lamp light.
48 A Dom lunges for the briefcase.
49 A Char drops it.
50 A Lawson fires once into the rafters.
* 51 A ¶ BANG.
* 52 A Gulls explode upward.
53 A ¶ Everyone freezes.
54 D LAWSON [CONT'D]: Nobody moves.
* 55 A ¶ A long beat.
56 A Dom raises his hands.
57 A Twitch lies still.
58 A Char folds his arms.
59 D CHAR (softly): You're early, Marguerite.
60 D LAWSON (softly): You're late, Carmelo.
61 A ¶ She holsters her weapon.
62 A Takes the briefcase.
63 A Walks to the edge of the dock, tosses it into the black harbor.
* 64 A It sinks without a ripple.
65 D DOM: What the hell?
66 D LAWSON: Go home, Dom. Take the kid.
67 A ¶ She turns her back on them.

### SCENE s00135 | INT. FIELD HOSPITAL - REQUISITIONED BALLROOM - NIGHT
Detected names (may be incomplete or contain aliases): SERGEANT NIKODEM ZAWADZKI, NURSE PHILOMENA OKONKWO, PRIVATE ELIAS BRODEUR, STRANGER, MARCHETTI
* 1 A ¶ A grand hall of cracked chandeliers and bloodied parquet.
* 2 A Cots in rows where the dance floor used to be.
* 3 A Lanterns hang from candelabras.
* 4 A Somewhere, a gramophone with no needle collects dust.
5 A ¶ SERGEANT NIKODEM ZAWADZKI, 30s, left arm in a sling, sits on a cot.
6 A Beside him, NURSE PHILOMENA OKONKWO, 30s, rolls bandages with grim efficiency.
7 A Across the aisle, a young soldier lies still, face to the wall: PRIVATE ELIAS BRODEUR, 18.
8 A ¶ A figure in the doorway, silhouetted by the dying fire outside: a STRANGER, in a civilian overcoat, rifle slung.
9 D STRANGER (from the door): Is this the hospital?
10 D PHILOMENA: It's a ballroom. Come in.
11 A ¶ The Stranger crosses the hall.
* 12 A His boots echo on the parquet.
13 A He pauses by Elias's cot.
14 D STRANGER: This one's alive?
15 D NIKODEM: He breathes. That's all we know.
16 D PHILOMENA: Who are you?
17 D STRANGER: Captain Lucien Marchetti. 4th Brigade. Our line broke at midnight.
18 D NIKODEM (sitting up): Broke?
19 D MARCHETTI: They'll be here by dawn.
20 A ¶ Philomena rises.
21 A Nikodem swings his legs to the floor.
22 A Elias stirs, a small groan.
23 D PHILOMENA: We have forty wounded.
24 D MARCHETTI: Then you have a decision.
25 D NIKODEM: We have no decision. We don't move them.
26 D MARCHETTI: He will. And she will. And you will.
27 A ¶ He points to Philomena.
28 A Then to Nikodem.
29 A Then to the wall.
30 D MARCHETTI [CONT'D]: Sergeant, you speak for the men?
31 D NIKODEM: I speak for no one.
32 D MARCHETTI: Then I'll speak.
33 A ¶ Elias wakes.
34 A Looks at Marchetti.
35 A Looks at the rifle.
36 D ELIAS: Captain?
37 D MARCHETTI: Private.
38 D ELIAS: I can walk.
39 D PHILOMENA: No, you can't.
40 D ELIAS: I can crawl.
41 D MARCHETTI (quietly): Then crawl first. We follow.
42 A ¶ He turns to the others.
43 A Nikodem nods once.
44 A Philomena grabs a blanket.
45 A ¶ They begin moving cots toward the door, one by one, the way mourners carry a coffin.
* 46 A ¶ At the far end of the hall, the gramophone, caught in a draft, begins to turn on its own.
* 47 A A thin old waltz crackles out, ghostly, ridiculous, and every head lifts.
* 48 A ¶ Then the first shell lands.
* 49 A ¶ The chandelier swings.
* 50 A Plaster rains.
* 51 A The cots stagger.
52 A Philomena throws herself over Elias.
53 A Nikodem hauls Marchetti down.
* 54 A The waltz continues, warped by the blast, slowing to a drone.
* 55 A ¶ Dust.
* 56 A Smoke.
* 57 A A long, long silence.
58 A ¶ Marchetti coughs.
59 A Rises.
60 A Lifts his rifle.
61 D MARCHETTI [CONT'D]: They're early.
62 D NIKODEM (wiping his face): Of course they are.
63 A ¶ Marchetti smiles grimly and puts his rifle to his shoulder.
* 64 A The ballroom, for the last time, becomes a ballroom of living men.

### SCENE s00136 | EXT. FROZEN LAKE - ICE FISHING DERBY - DAWN
Detected names (may be incomplete or contain aliases): BRYNJA THORSDOTTIR, OTTO WESTERBERG
* 1 A ¶ A white plain stitched with augered holes and plywood shanties.
* 2 A Orange flags snap in the wind.
* 3 A Hundreds of numbered bibs bob across the ice like pumpkins.
4 A ¶ BRYNJA THORSDOTTIR, 50s, leathery, parka patched with duct tape, stands over hole 117, line taut in her hands.
5 A Opposite her, OTTO WESTERBERG, 30s, new coat, a brand new rod, cheeks pink as ham, stands at hole 118 and has not yet felt a bite.
* 6 A ¶ A loudspeaker crackles.
* 7 A The derby ends in four minutes.
8 D OTTO: Your line moved.
9 D BRYNJA: Wind.
10 D OTTO: Mine moved.
11 D BRYNJA: Also wind.
12 A ¶ They both jerk.
* 13 A Lines go taut at the same instant.
* 14 A Bobbers vanish.
15 D OTTO: Walleye!
16 D BRYNJA: Pike!
17 A ¶ They haul in, side by side, boots scraping, grunts overlapping.
* 18 A Two lines, two fish, both fighting, tangled in the middle of the hole.
19 D BRYNJA [CONT'D]: Don't you dare cut me, Westerberg!
20 D OTTO: Don't you dare let go, Thorsdottir!
21 D OTTO: Pull!
22 D BRYNJA: Pull!
* 23 A ¶ A great grey pike and a fat golden walleye burst from the same hole, flopping on the ice between them.
24 A ¶ Both stand, panting.
* 25 A The pike is longer.
* 26 A The walleye is thicker.
* 27 A ¶ The loudspeaker blares the final minute.
28 A They stare at each other.
29 A Then, together, they scoop up both fish and run.

### SCENE s00137 | INT. FERRY - CALL CENTER DECK - DAY
Detected names (may be incomplete or contain aliases): PRUDENCE KWAN, GARRETT LINDQVIST, DAPHNE ROUMELIOTIS
* 1 A ¶ A converted car deck: forty cubicles under fluorescent tubes, water slapping the hull.
* 2 A A fire drill siren WAILS.
3 A ¶ Nobody has stood up.
4 A ¶ At the central desk, PRUDENCE KWAN, 40s, floor manager, headset around her neck, scrolls on her laptop.
5 A In the next cubicle, GARRETT LINDQVIST, 30s, a lanyard of seventeen badges, types with one finger.
6 A Behind them, DAPHNE ROUMELIOTIS, 50s, QA lead, eats a banana.
7 D PRUDENCE: It's a drill. They said it's a drill.
8 D GARRETT: Who said?
9 D DAPHNE: Facilities.
10 D GARRETT: We don't have Facilities. We're on a boat.
11 D PRUDENCE: She means the Captain's office.
12 D DAPHNE: I mean Facilities.
* 13 A ¶ The siren wails on.
14 D GARRETT: We should evacuate.
15 D PRUDENCE: To where? We're in the middle of the Sound.
16 D DAPHNE: The muster point is the lifeboat.
17 D GARRETT: Which one is the lifeboat?
18 D DAPHNE: The one with the sign.
19 D PRUDENCE: The sign fell off in March.
20 D GARRETT: I filed a ticket.
21 D DAPHNE: Garrett, you don't have a ticket system.
22 D GARRETT: That's why it's still open.
* 23 A ¶ The siren stops.
24 A In the silence, the three of them look at each other.
25 A Nobody has moved.
26 D PRUDENCE: Okay, back to work.
27 D DAPHNE: Agreed.
28 D GARRETT: Agreed.
29 A ¶ They sit.
30 A Headsets on.
* 31 A A phone rings.
32 D PRUDENCE (into headset): Thank you for calling, how can I help?
* 33 A ¶ Behind them, the ferry's horn sounds, long and low.
34 A They don't look up.

### SCENE s00138 | INT. COURTROOM - CONVERTED DAIRY BARN - DAY
Detected names (may be incomplete or contain aliases): JUDGE WILHELMINA OKAFOR-REYES, ATTORNEY SILAS BOUCHARD, ATTORNEY AMARA DELACROIX-TANG
* 1 A ¶ Hay bales along the walls.
* 2 A Sunlight slants through slatted boards.
* 3 A The judge's bench is a repurposed milking stand.
* 4 A A cow-shaped weathervane turns slowly overhead, visible through a skylight.
5 A ¶ JUDGE WILHELMINA OKAFOR-REYES, 60s, black robe over a flannel shirt, taps a gavel made from a horseshoe.
6 A At counsel table, ATTORNEY SILAS BOUCHARD, 40s, polished brogues streaked with straw, and ATTORNEY AMARA DELACROIX-TANG, 30s, tailored suit, a new briefcase.
7 D WILHELMINA: Counsel. The hearing is on the matter of the Henderson water rights. Mr. Bouchard.
8 D SILAS: Your Honor, my client asserts the creek flows east.
9 D AMARA: It flows west.
10 D SILAS: East.
11 D AMARA: West, Your Honor.
12 D SILAS: Amara, I walked the creek.
13 D AMARA: Silas, I walked it twice.
14 D WILHELMINA: Counsel, address the bench, not each other.
15 D SILAS: Apologies, Your Honor.
16 D AMARA: Apologies.
17 A ¶ Both speak at the same moment, voices stacking.
18 D SILAS: We would move to submit the survey.
19 D AMARA: We would move to submit the survey.
* 20 A ¶ A long silence.
* 21 A A cow lows, somewhere outside.
22 D WILHELMINA: Counsel, you appear to agree.
23 D SILAS: On the survey, Your Honor.
24 D AMARA: On the survey.
25 D WILHELMINA: Then the clerk shall mark it as Exhibit A. Mr. Bouchard, please proceed.
26 A ¶ He rises.
27 A Adjusts his tie.
* 28 A Stray hay falls from his sleeve.

### SCENE s00139 | INT. DRIVING SCHOOL - SIMULATOR ROOM - DAY
Detected names (may be incomplete or contain aliases): JUNE, ABARA, MATEO FUENTES, IGNACIO HOLLOWAY, GRETA SOLBERG
* 1 A ¶ Four mock cockpits in a row, each facing a flickering screen.
* 2 A Pedals taped with duct tape.
* 3 A A poster: "SIGNAL EARLY.
* 4 A SIGNAL OFTEN."
5 A ¶ JUNIPER "JUNE" ABARA, 16, braces, grips the wheel with white knuckles.
6 A Next to her, MATEO FUENTES, 17, leans back, one foot on the dash.
7 A Behind them, IGNACIO HOLLOWAY, 16, scribbles on his palm.
8 A Beside him, GRETA SOLBERG, 17, eats gummy worms and watches the road on his screen instead of her own.
* 9 A ¶ A tinny voice from the simulator: "Merge ahead."
10 D MATEO: Merge, merge, merge.
11 D JUNE: I'm merging.
12 A ¶ He tips his chair.
13 A She hits the brakes.
* 14 A The screen flashes red.
15 D JUNE [CONT'D] (whisper): Mateo.
16 A ¶ He grins.
17 A She swats him.
18 A Behind them, Ignacio snickers.
19 D IGNACIO: Nice, June. Pedestrian down.
20 D GRETA: She hit a mailbox.
21 D IGNACIO: Same thing.
22 A ¶ June reboots.
23 A Her hands steady.
24 A She breathes out, picks the road back up, and cruises.
* 25 A The screen glows green.
26 A ¶ She turns to Greta, triumphant.
27 A Greta offers a gummy worm.
28 A June takes it.
29 D MATEO: My turn.
30 A ¶ He throws himself into the seat.
31 A Slaps the wheel.
32 A Floors it.
* 33 A The screen explodes into a crash.
34 D IGNACIO: Mateo!
35 D MATEO: It's a simulator!
36 A ¶ Greta laughs so hard she snorts.
37 A Ignacio cracks up.
38 A June, red-faced, tries not to, fails.
* 39 A ¶ Then the door opens.
40 A They all turn.
41 A The instructor's clipboard appears first, then his face, grim.
42 A ¶ Four hands go up.
43 A Then three come down, pointing at Mateo.
44 D GRETA: School bus. He killed the school bus.

### SCENE s00140 | EXT. TUG-OF-WAR PIT - COUNTY FAIR - DUSK
Detected names (may be incomplete or contain aliases): HOLLIS BRANDT, NEELA CHOWDHURY, TOBY MARCINKIEWICZ, WENDOLYN ACHTERBERG
* 1 A ¶ Mud.
* 2 A Two ropes of frayed hemp.
* 3 A A line of chalk.
4 A Four people in team shirts stand knee-deep in the slop.
5 A ¶ HOLLIS BRANDT hauls the knot.
6 A NEELA CHOWDHURY braces her heels.
7 A TOBY MARCINKIEWICZ squints at the opposing team across the pit.
8 A WENDOLYN ACHTERBERG spits and tightens her grip.
9 D HOLLIS: On three.
10 D TOBY: On two.
11 D NEELA: On three!
12 D WENDOLYN: Whatever, just pull!
* 13 A ¶ The horn sounds.
* 14 A The rope snaps taut.
15 A They lean back as one.
16 D HOLLIS: Heave!
17 D NEELA: Heave!
18 D TOBY: Don't let go!
19 D WENDOLYN: Don't you dare!
20 A ¶ Hollis's boot slides.
21 A Neela grabs his belt.
22 A Toby's grip slips.
23 A Wendolyn screams.
24 D HOLLIS: Left!
25 D TOBY: Right!
26 D NEELA: Down!
27 D WENDOLYN: Up!
* 28 A ¶ The rope goes slack.
29 A All four fall backward into the mud with a splat.
30 A They lie there, eyes toward the sky.
31 A ¶ Hollis wipes his face.
32 A Neela stares at her hands.
33 A Toby laughs once, short.
34 A Wendolyn closes her eyes.
35 A ¶ Nobody says who won.

### SCENE s00141 | INT. GOBLIN CUSTOMS OFFICE - UNDER THE HILL - DAY
Detected names (may be incomplete or contain aliases): KRIX BONEWHISTLE, GRUMBELINE SOOT, SIR ALDERIC THORNE, MAGDA VESPERS
* 1 A ¶ A stone vault with a crooked desk.
* 2 A Lanterns of green fire.
* 3 A A sign in nine languages: "DECLARE EVERYTHING."
* 4 A Dust drifts from the ceiling.
5 A ¶ KRIX BONEWHISTLE, a goblin, three feet tall, in a tiny waistcoat, stamps papers with a thick fist.
6 A Next to him, GRUMBELINE SOOT, a goblin woman with a monocle, sorts coins by weight.
7 A ¶ Before the desk stand two travelers: SIR ALDERIC THORNE, 40s, a knight in dented armor, and a hooded witch, MAGDA VESPERS, who carries a covered basket.
8 D KRIX: Name, species, purpose.
9 D ALDERIC: Alderic Thorne. Human. Passing through.
10 D KRIX: Anything to declare?
11 D ALDERIC: My sword.
12 D GRUMBELINE (not looking up): We saw the sword.
13 D KRIX: Madam?
14 D MAGDA: Magda Vespers. Witch. Visiting a cousin.
15 D KRIX: Anything to declare?
16 D MAGDA: Nothing.
* 17 A ¶ The basket twitches.
18 A Grumbeline looks up.
19 D GRUMBELINE: What's in the basket?
20 D MAGDA: Bread.
21 D GRUMBELINE: Bread does not purr.
22 A ¶ Magda sighs.
23 A Lifts the cloth.
* 24 A Inside: a small, indignant dragon, no larger than a kitten, blinking.
25 D KRIX: That's a declarable.
26 D GRUMBELINE: That's a declarable!
27 D ALDERIC (under his breath): Told you.
28 D MAGDA: He's a rescue.
29 D KRIX: Fee is three silvers and a favor.
30 A ¶ Magda counts three coins from her sleeve.
31 A She sets them on the desk.
32 A Grumbeline weighs each one, squints through the monocle, then nods.
33 D GRUMBELINE: The favor?
34 D MAGDA: Name it.
35 D KRIX: Teach us to make bread that purrs.
36 A ¶ Magda smiles for the first time.
* 37 A The dragon yawns, and a small flame lights the office.

### SCENE s00142 | EXT. ROOFTOP PIGEON COOP - SUNSET
Detected names (may be incomplete or contain aliases): TAMSIN OKONKWO-REYES
* 1 A ¶ A tar roof six stories up, patched with plywood.
* 2 A A wire-and-board coop sits against the stairwell.
* 3 A City below, orange and gold.
4 A ¶ TAMSIN OKONKWO-REYES, 15, backpack, headphones around her neck, climbs through the roof hatch.
5 A She carries a thermos and a phone.
6 A She kneels beside the coop.
7 A ¶ She opens the little door.
8 A A pigeon, grey and ruffled, hops onto her wrist.
9 A ¶ She strokes it with one finger.
10 A ¶ She sets the phone on the ledge.
11 A Taps the screen.
* 12 A A red dot blinks.
13 D TAMSIN: Okay. Voice memo. Day twelve of the Great Return.
14 A ¶ She pulls the pigeon close.
15 D TAMSIN [CONT'D]: Kevin hasn't flown home in six days. I don't think it's a navigation problem.
16 A ¶ She hesitates.
17 A Then continues, quieter.
18 D TAMSIN [CONT'D]: I think he likes it wherever he's going.
19 A ¶ She stops the recording.
20 A Plays it back.
21 D TAMSIN [V.O.] (phone): I think he likes it wherever he's going.
22 A ¶ She frowns.
23 A Taps again.
24 A Plays the previous bit.
25 D TAMSIN [V.O., CONT'D] (phone): Kevin hasn't flown home in six days.
26 A ¶ She sets down the phone.
27 A She watches the sun slide behind the water towers.
28 A She lifts her wrist.
29 A The pigeon hops off, fluttering up onto the lip of the coop.
30 D TAMSIN: Go, then.
31 A ¶ He doesn't.
32 A He tucks his beak under his wing.
33 A ¶ She laughs, wipes her eyes with her sleeve, and sits on the warm tar with her back against the coop.
34 A ¶ She presses record again.
35 D TAMSIN [CONT'D] (to the phone): Day thirteen. He stayed.

### SCENE s00143 | INT. TOWN HALL - EVENING
Detected names (may be incomplete or contain aliases): MAYOR GWENDOLYN ARDITO, BARNABAS KOWALCZYK, TILLIE OSEI, DOT PELLEGRINI, STRANGER, IRVING
* 1 A ¶ Folding chairs.
* 2 A A banner reads "SAVE THE HARBOR FERRY."
* 3 A A coffee urn leaks in the corner.
* 4 A Rain on the windows.
5 A ¶ MAYOR GWENDOLYN ARDITO, 50s, stands at a podium.
6 A Three citizens remain: BARNABAS KOWALCZYK, 60s, in a fisherman's sweater; TILLIE OSEI, 20s, with a clipboard; DOT PELLEGRINI, 70s, in a raincoat, knitting; and, in the back, a STRANGER in a damp suit, notebook closed on his knee.
7 D GWENDOLYN: The council voted six to one. The ferry stops running on the first.
8 D BARNABAS: Six to one.
9 D TILLIE (to the room): We can still petition.
10 D DOT (without looking up): We petitioned in 1998.
11 D TILLIE: We could pray.
12 D BARNABAS: Pray on your own time.
13 D GWENDOLYN (wearily): I fought for this ferry, Barnabas.
14 D BARNABAS: Then fight harder.
15 A ¶ She says nothing.
16 A Dot's needles click.
17 A ¶ The Stranger raises a hand.
18 D STRANGER: If I might.
19 D GWENDOLYN: And you are?
20 D STRANGER: Irving Tse. Regional transit.
* 21 A ¶ A murmur.
22 A Tillie sits up.
23 A Barnabas folds his arms.
24 D IRVING: I'm not here to close it.
25 D TILLIE: Then why?
26 D IRVING (mutters, to himself): Because somebody has to say the numbers out loud.
27 D TILLIE: Say them.
28 D IRVING: It costs four hundred thousand a year. It carries eleven people a day.
29 D DOT (still knitting): Twelve, when I'm visiting my sister.
* 30 A ¶ Laughter, thin and tired.
31 A Gwendolyn rubs her eyes.
32 D IRVING (to the room): I can keep it running one more year, if the town raises forty thousand.
33 D BARNABAS: We don't have forty thousand.
34 D TILLIE: We can have it.
35 D BARNABAS (grudging): Amen.
36 A ¶ Dot ties off her stitch, rises, and drops a knitted scarf in the middle of the table.
37 D DOT: Starting bid. Sell it.
38 A ¶ One by one, they reach for their wallets.

### SCENE s00144_0 | INT. AGING CAVE - ALPINE CHEESE DAIRY - NIGHT
Detected names (may be incomplete or contain aliases): ANGELIKA STROBL, DIDI, HOFER, PETRA LUNDQVIST-AGYEMAN, FRAU BERGMANN
* 1 A ¶ A hand-hewn tunnel, damp and cold.
* 2 A Shelves of wheels stacked to the ceiling, each the size of a tire, smelling of mold and old milk.
* 3 A Strings of bare bulbs.
* 4 A Water drips in a slow metronome.
5 A ¶ Three figures in white coats and hairnets creep between the racks.
6 A ¶ ANGELIKA STROBL, 40s, lean, planner, carries a thermal scanner.
7 A DIETMAR "DIDI" HOFER, 50s, safecracker, wears a headlamp and a toolbelt.
8 A PETRA LUNDQVIST-AGYEMAN, 30s, driver, clutches a walkie.
9 A And the night watchman, FRAU BERGMANN, 60s, somewhere above them, a flashlight in her fist and a radio on her hip, who has not yet noticed anything.
* 10 A ¶ A bulb flickers.
11 D ANGELIKA (whispering): Aisle nine. Wheel forty.
12 D DIDI: Which wheel?
13 D ANGELIKA: The one with the red seal.
14 A ¶ They fan out.
15 A Didi knocks a wheel.
* 16 A It rocks.
17 A Petra lunges.
18 A Catches it.
19 A Her biceps shake.
20 D PETRA (through teeth): Careful.
21 D DIDI: Sorry.
22 A ¶ Angelika finds it.
* 23 A A wheel the size of a wagon, wax-sealed.
24 A She taps.
* 25 A It rings hollow.
26 D ANGELIKA: Didi.
27 A ¶ He kneels.
28 A Cracks the seal with a pick.
* 29 A Wax flakes.
* 30 A Inside: a steel box.
31 D DIDI: Hello, beautiful.
32 D PETRA: It's in the cheese?
33 D ANGELIKA: Forty years. Nobody looks in a wheel.
34 A ¶ Didi lifts the box.
* 35 A A click.
* 36 A A light.
* 37 A ¶ A flashlight beam sweeps the aisle above.
38 D BERGMANN [O.S.] (sharp): Wer ist da?
39 A ¶ Everyone freezes.
40 A Petra mouths a curse.
41 D ANGELIKA (whispering): Night watch.
* 42 A ¶ The beam comes closer.
* 43 A Footsteps on the gantry.
* 44 A A shadow spills between the racks.
45 A ¶ Didi bolts.
46 A Slams into a shelf.
* 47 A Wheels tumble.
* 48 A A cascade of cheese thunders down the aisle.
49 A ¶ He drops the box.
50 A Petra yanks him back.
51 A Angelika snatches it mid-air, ducks, rolls through the wreckage.
52 D BERGMANN [O.S., CONT'D]: Halt!
53 A ¶ They scramble.
* 54 A Cheese everywhere.
* 55 A The beam sweeps wildly.
56 D PETRA: Go go go!
57 A ¶ All three bolt for the tunnel mouth, slipping on rinds.
* 58 A Behind them, a landslide of Gruyere pours into the aisle and buries the guard to her ankles.

### SCENE s00144_1 | EXT. CAVE MOUTH - NIGHT
Detected names (may be incomplete or contain aliases): 
* 1 A ¶ A van idles.
2 A They pile in.
3 A Petra floors it.
* 4 A The van lurches down the mountain road.

### SCENE s00144_2 | INT. VAN - CONTINUOUS
Detected names (may be incomplete or contain aliases): DIDI, ANGELIKA, PETRA
1 A ¶ Angelika opens the steel box.
* 2 A Inside: a single wheel of cheese, tiny, perfect, no bigger than a palm.
3 A She stares.
4 D DIDI: That's it?
5 D ANGELIKA (wonder): The Madame Esterhazy. Eighty thousand euros a pound.
6 D DIDI: It smells like feet.
7 D PETRA (grinning): Smells like retirement.

### SCENE s00145 | INT. REGATTA BOATHOUSE - MORNING
Detected names (may be incomplete or contain aliases): COACH ELEANOR PRZYBYLSKI, ZEB, HOLLINGSWORTH, MARISELA QUIROGA, CASPIAN ADEBAYO, TOVE NIELSEN, BASHIR KARIMI
* 1 A ¶ A long timber shed that smells of varnish and river.
* 2 A Eight-oared shells hang from racks like sleeping fish.
* 3 A Pale light slants through the slats.
4 A ¶ COACH ELEANOR PRZYBYLSKI, 60s, windbreaker, whistle, sits on an overturned oar-box.
5 A Before her stand five rowers in damp unisuits: ZEBEDIAH "ZEB" HOLLINGSWORTH, 20s, stroke; MARISELA QUIROGA, 20s, bow; CASPIAN ADEBAYO, 19, coxswain, small and quiet; TOVE NIELSEN, 21, seat five; and BASHIR KARIMI, 23, who has not yet looked up.
6 A ¶ She says nothing.
* 7 A The oars drip.
8 D ELEANOR: You're late.
9 D ZEB: Two minutes.
10 D ELEANOR: Two minutes is a boat length.
11 D MARISELA: Coach, it was fog.
12 D ELEANOR: The fog was there when I got here.
13 A ¶ Caspian shifts a megaphone in his hands.
14 A Marisela tightens a shoelace that does not need tightening.
15 A Tove studies a knot in the floorboards.
16 A Bashir finally lifts his eyes and meets hers.
17 A ¶ She holds the look.
18 A Then she rises, crosses to the shell Number Four, runs her palm along its hull, kneels to check a rigger bolt, and then, without turning, tosses a wrench over her shoulder, which Zeb catches and Marisela passes to Caspian, who hands it to Tove, who hands it to Bashir, who looks at it as though it were a snake.
19 D ELEANOR [CONT'D]: Seat seven's rigger is loose.
20 D BASHIR: It was tight yesterday.
21 D ELEANOR: Yesterday you were a different rower.
22 A ¶ Bashir doesn't answer.
23 A He kneels, takes the wrench, and tightens the bolt with six slow turns.
24 D CASPIAN: Coach, the forecast says headwind.
25 D ELEANOR: Then we row into it.
26 D ZEB: It's a hundred meters.
27 D ELEANOR: It's two thousand, Zebediah.
* 28 A ¶ Silence.
* 29 A The river laps outside.
30 D ELEANOR [CONT'D]: Boat on shoulders.
31 A ¶ They lift the shell as one.
* 32 A Eight hands, no words.
33 A They carry it out into the pale light, and Eleanor stays behind a moment, listening to their feet recede.

### SCENE s00146 | INT. MOBILE HOME - KITCHEN TABLE - DAY
Detected names (may be incomplete or contain aliases): BEATRIX LOMAX-DIALLO, HENRY TAKAHASHI, DANTE VELARDE
* 1 A ¶ A narrow kitchen.
* 2 A Wood paneling.
* 3 A A window unit rattles.
* 4 A On the table: a stack of papers, a stamp pad, and a coffee mug that says WORLD'S OKAYEST NOTARY.
5 A ¶ BEATRIX LOMAX-DIALLO, 60s, notary, reading glasses on her forehead, sits at the head.
6 A To her left, HENRY TAKAHASHI, 70s, widower, rests both hands flat.
7 A To her right, his son-in-law, DANTE VELARDE, 40s, in a pressed shirt, fidgets with a pen.
8 A ¶ She stamps a page.
9 A He watches the stamp.
10 A ¶ He reaches for another page.
11 A She slides it toward him.
12 D BEATRIX: This one transfers the deed.
13 D HENRY: I know what it does.
14 D DANTE: Henry, take your time.
15 D HENRY: I've taken my time. I'm seventy-three.
16 A ¶ Dante nods.
17 A He lowers his eyes.
18 A Beatrix clears her throat.
19 D BEATRIX: Mr. Velarde, you'll sign as witness.
20 D DANTE: Of course.
21 A ¶ She slides the pen to him.
22 A He takes it.
23 A His hand shakes slightly.
24 A He signs.
25 A She notarizes.
26 D BEATRIX [CONT'D]: Mr. Takahashi, you are conveying the property to your daughter Keiko's estate, correct?
27 D HENRY: Keiko's gone.
28 D BEATRIX: I'm sorry.
29 D HENRY: To her children, then.
30 D DANTE: They're minors.
31 D BEATRIX: A trustee, then.
32 D HENRY (looking at Dante): You.
33 A ¶ Dante pauses.
34 A He sets down the pen.
35 D DANTE: Henry, I don't need to be trustee.
36 D HENRY: You'll do it right.
37 A ¶ Beatrix looks from one to the other.
38 A She taps the stamp.
39 A She lifts the final page.
40 A He holds out his hand.
41 A She places the page in it.
42 A ¶ He reads.
43 A Slow.
44 A Every line.
45 A Then he signs, large and square, and slides it back.
46 A ¶ She stamps.
* 47 A The sound is small, dry, final.
48 D BEATRIX: Congratulations.
49 D HENRY: Is that what it is?
50 A ¶ She smiles, gently, and pours him more coffee.
