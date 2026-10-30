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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusKT/group_0044.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01423 | INT. DRIVE-IN PROJECTION BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): NELL ASHBY, TEDDY
* 1 A ¶ Dust in the beam.
* 2 A A dead reel clatters on its spindle.
* 3 A The screen outside shows only white.
4 A ¶ NELL ASHBY (20s, headlamp, flannel) crouches at the old projector, one hand on the take-up arm, the other jamming a flathead into the gate.
* 5 A A walkie-talkie sits on the splice table, crackling.
6 D TEDDY [O.S.] (walkie, static): Nell? You up there? Film's gone.
7 D NELL: I know. I'm fixing it.
8 D TEDDY [O.S.] (walkie): No. I mean the picture's gone. The screen's... something's moving on it.
9 A ¶ Nell freezes.
10 A Turns her head toward the small square window.
* 11 A Through the glass, the white screen ripples like a bedsheet with someone under it.
12 A ¶ She grabs the walkie, thumbs it.
13 A Teddy, down in the lot, stumbles backward over a speaker post, drops his flashlight, scrambles for it, and the beam swings up the length of the screen where a long grey hand presses outward from the fabric, fingers spreading, as Nell reaches back and kills the lamp, and the booth goes black except for the light slowly dying on the walls.
14 D NELL: Teddy. Teddy, go home.
15 D TEDDY [O.S.] (walkie, calm now): It's okay. It stopped.
* 16 A ¶ Silence.
* 17 A The hand on the screen is gone.
* 18 A The screen is white again, perfectly flat.
19 D NELL (whisper): That's worse.

### SCENE s01424 | EXT. FROZEN RESERVOIR - DAWN
Detected names (may be incomplete or contain aliases): ODALYS MERCADO, HANS-PETER VOSS
* 1 A ¶ The lake lies like a sheet of poured pewter, its far shore dissolved in mist.
* 2 A Snow has drifted in long tongues over the ice.
* 3 A It is entirely silent, the kind of silence with weight.
4 A ¶ ODALYS MERCADO (30s, orange parka, a camera strapped across her chest) walks a careful line over the surface, testing each step with an ice pick.
5 A Behind her, HANS-PETER VOSS (60s, tall, beard grey with frost, a rucksack twice the size it should be) drags a sled loaded with coiled rope and a sealed metal case.
6 D ODALYS: Look at it. Not a crack.
7 D HANS-PETER: Ice does not announce itself.
8 D ODALYS: You're a cheerful man.
9 D HANS-PETER: I am a careful man.
10 A ¶ They walk on.
* 11 A A pale sun clears the ridge and lays copper across the ice.
* 12 A Ahead, a red flag on a bamboo pole marks the survey stake.
13 A Odalys quickens.
14 A Hans-Peter keeps the sled's rope short, and slow.
15 A ¶ She reaches the stake.
16 A Photographs it.
17 A Photographs the horizon.
18 A Laughs at nothing in particular, breath smoking.
19 D ODALYS [CONT'D]: We did it. Day four, and the ice is solid, and --
* 20 A ¶ Under their boots, a long groan rolls out from the center of the lake, a bass note that climbs through the soles of the feet into the teeth.
21 A Both freeze.
22 A Odalys's smile hangs on her face a second longer than it should.
23 D HANS-PETER (low): Do not run.
24 D ODALYS: I wasn't going to.
25 D HANS-PETER: Your face says you were.
* 26 A ¶ A black line spiders from beneath the sled runner, racing in two directions.
27 A Hans-Peter releases the rope.
28 A Odalys drops flat, spreading her arms.
* 29 A The sled tilts.
* 30 A The metal case slides, slides, tips, and vanishes into a widening mouth of water without a splash.
31 A ¶ They lie side by side, a body's length apart, hands spread on the ice like swimmers on a cold floor.
32 D ODALYS: That was the samples.
33 D HANS-PETER: That was a case.
34 A ¶ They crawl.
35 A Slowly.
* 36 A The line widens behind them, then stops.
* 37 A The groan fades.
* 38 A Somewhere far off, a raven calls.
39 A ¶ Hans-Peter reaches the thick white of the shore snow first, pulls himself onto it, and offers a gloved hand back.
40 A Odalys takes it.
41 A Pulls up.
42 A Both scramble backward from the edge and sit, panting.
43 D ODALYS: Day four.
44 D HANS-PETER: Day four.

### SCENE s01425 | INT. CONVERTED CATHEDRAL CURLING HALL - NIGHT
Detected names (may be incomplete or contain aliases): BERNIE, OYELARAN, MAEVE KOWALCZYK, DESMOND TAI, RAFFI HOVSEPIAN, JUNE PELLETIER-ODUYA
* 1 A ¶ A deconsecrated church, nave stripped, pews gone, a pebbled sheet of ice running where the altar once stood.
* 2 A Stained glass throws blue and amber across the frost.
* 3 A Stone saints watch from niches.
* 4 A Condensation drips from the vaulted ceiling.
* 5 A ¶ Scoreboard: LIONS 6, FERRYMEN 6.
* 6 A Eighth end.
7 A ¶ BERNADETTE "BERNIE" OYELARAN (50s, coach's jacket, whistle she never uses) stands behind the hog line with a clipboard she hasn't looked at in an hour.
8 A ¶ MAEVE KOWALCZYK (20s, skip, braid tucked into her collar) crouches at the house, broom flat across her knees.
9 A ¶ DESMOND TAI (30s, lead, calves like fence posts) waits at the far hack, stone handle in a white-knuckled grip.
10 A ¶ RAFFI HOVSEPIAN (20s, second, perpetual grin gone tight) sweeps nothing, just to have something to do with his arms.
11 A ¶ JUNE PELLETIER-ODUYA (40s, vice, wedding ring on a chain around her neck) stands at the boards, arms folded, chewing a toothpick down to splinters.
12 D BERNIE: Last stone. Hammer's ours.
13 D MAEVE: I know.
14 D BERNIE: Draw to the button.
15 D MAEVE: I know.
16 D BERNIE: Then why are you looking at the saint?
17 A ¶ Maeve glances at a stone St. Sebastian in the wall, pierced with nine marble arrows.
18 D MAEVE: He's got a better angle than I do.
19 D DESMOND (calling down the sheet): Ready!
20 D JUNE: Ice is pulling left, maybe two inches.
21 D RAFFI: Three. It's three.
22 D JUNE: Two and a half.
23 D RAFFI: Fine. Two and a half.
24 A ¶ Desmond pushes out of the hack, glides low and long, releases the stone with a soft rotation.
* 25 A It slides, humming on the pebble.
26 D MAEVE: Hard! Hard!
27 A ¶ Raffi and June sweep, brooms drumming the ice, snow-frost jumping off the bristles.
* 28 A The stone arcs past the guard.
29 D JUNE: Off!
30 A ¶ They lift.
* 31 A The stone curls, slows, rests an inch from the back of the four-foot ring.
32 D BERNIE: That's yours, Desmond.
33 D DESMOND: I know.
34 D BERNIE: Everyone says "I know" tonight. I'd like one "I'm scared."
* 35 A ¶ A beat.
36 A Raffi laughs.
37 A June spits her toothpick onto the ice.
38 A Maeve rises, rolling her shoulders.
39 D MAEVE: I'm scared.
40 D BERNIE: Good. Go.
41 A ¶ Maeve settles into the hack.
42 A Looks down the sheet.
43 A Breathes.
44 D MAEVE [CONT'D]: Desmond, where do you want it?
45 D DESMOND: Weight of a feather. Land on the button like a kiss.
46 D MAEVE: Don't kiss anything, I'm married.
47 D JUNE: So am I.
48 D RAFFI: Everybody's married. Throw the rock.
49 A ¶ Maeve pushes.
50 A The stone leaves her hand in a perfect curve.
51 A Desmond and Raffi pick up the sweep, then drop it.
52 A June holds up a flat palm.
53 D JUNE: Leave it. Leave it.
* 54 A ¶ The stone drifts, rotating, down the pebbled ice, under a rose window that paints it red for one second, then amber, then blue.
55 D BERNIE (whispering): Come on, come on.
* 56 A ¶ It stops.
* 57 A A hair's width from Desmond's stone, a hair's width from the pin.
* 58 A ¶ Silence under the vault.
59 A Raffi drops his broom.
60 A Desmond puts both hands on his head.
61 A June exhales through her teeth.
62 D JUNE [CONT'D]: We measure.
63 A ¶ Bernie gets down on her knees on the ice, pulls a measuring stick from her jacket, and lays it across the gap between the two stones.
64 A She reads it.
65 A Looks up.
66 D BERNIE: Ferrymen's. By a quarter inch.
* 67 A ¶ Nobody speaks.
68 A Maeve takes off her glove, looks at her bare hand.
69 A Her fingers don't tremble.
70 D MAEVE: Good end.
71 D BERNIE: That's the end. Not the match. We play the extra end in five.
72 D DESMOND: There's an extra end?
73 D BERNIE: There's always an extra end. Sit down. Drink water. Look at a saint.

### SCENE s01426 | INT. HOUSEBOAT GALLEY - MORNING
Detected names (may be incomplete or contain aliases): ZOFIA NOWAK, WALEED, PRIYA, KOFI, MARGUERITE
* 1 A ¶ A narrow kitchen on a canal boat.
* 2 A Copper pans swing gently with the water.
* 3 A Rain taps the porthole.
4 A ¶ ZOFIA NOWAK (70s, tiny, apron over a quilted vest) rolls dough on a board nailed to the counter.
5 A Her son WALEED (40s, tired eyes, a dress shirt with one sleeve rolled) stands at the stove, stirring a pot he is not hungry for.
6 A ¶ At the table, PRIYA (16, headphones around her neck) peels an orange in one unbroken spiral.
7 A Beside her, KOFI (8, pajamas, a plastic dinosaur in each fist) crashes them together.
* 8 A ¶ A landline phone hangs on the bulkhead.
* 9 A It rings.
10 D WALEED: Don't.
11 D ZOFIA: I wasn't.
* 12 A ¶ It rings again.
13 A Priya peels.
14 A Kofi roars his dinosaurs into the sugar bowl.
15 D ZOFIA [CONT'D]: Somebody should.
16 D WALEED: It's the lawyer. Or the marina.
17 D ZOFIA: Or it's Marguerite.
18 A ¶ Waleed stops stirring.
* 19 A The phone rings a fourth time.
20 A Priya sets down the orange.
21 D WALEED: Priya, would you --
22 D PRIYA: Why me?
23 D WALEED: Because you're closest.
24 D PRIYA: I'm not closest. Gran is closest.
25 D ZOFIA: My hands are in flour.
26 A ¶ Priya gets up, lifts the receiver.
27 A Holds it a few inches from her ear.
28 D PRIYA: Hello?
29 D MARGUERITE [V.O.] (phone): Is your father there?
30 D PRIYA: He's... stirring.
31 D MARGUERITE [V.O.] (phone): Tell him I'm at the lock. I'll be there in twenty minutes.
32 A ¶ Priya looks at her father.
33 A He looks at the soup.
34 A Zofia presses the dough flat with both thumbs, harder than the recipe needs.
35 D PRIYA: She says twenty minutes.
36 D WALEED: Tell her we're out.
37 D ZOFIA: Tell her we have enough bread.
38 D WALEED: Mama.
39 D ZOFIA: Waleed.
40 D WALEED: Don't --
41 D ZOFIA: Don't what?
42 D WALEED (together): Don't start.
43 D ZOFIA (together): I'm not starting.
44 D PRIYA (into the phone): Come. It's... fine.
45 A ¶ She hangs up.
* 46 A Silence.
47 A Kofi's dinosaurs go quiet.
* 48 A The boat rocks.
* 49 A A drop falls from the porthole frame onto the sill.
50 A ¶ Zofia takes down a fourth bowl from the shelf.
51 A Then a fifth.
52 A Sets them on the table without comment.
53 A ¶ Waleed puts the spoon down.
54 A Rolls the other sleeve to match the first.
55 A Kofi slides a dinosaur across the table until it stops beside the fifth bowl.

### SCENE s01427 | INT. FAMILY SEWING ROOM - ATTIC - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): AGATHA FENWICK, ROSAMUND
* 1 A ¶ Dust turns slowly in a shaft of low gold light.
* 2 A A dress form wears half a wedding gown, pins bristling at the hem like a porcupine.
* 3 A Bolts of fabric lean in the corners, patient as old dogs.
4 A ¶ AGATHA FENWICK (60s, wire-rimmed glasses on a beaded chain, thimble on her middle finger) kneels at the hem, working a needle through satin.
5 A Her daughter ROSAMUND (30s, stiff-backed, coat still on, car keys unreleased in her fist) stands in the doorway as though the floor might be hot.
6 D AGATHA: You're early.
7 D ROSAMUND: Traffic was light.
8 D AGATHA (to the hem): Hold still, you.
9 A ¶ She isn't speaking to the dress form.
10 A Rosamund does not know whether to answer anyway.
11 D ROSAMUND: Is that Lena's?
12 D AGATHA: It was going to be. I'm altering it.
13 D ROSAMUND: For who?
14 A ¶ Agatha bites the thread.
15 A Does not reply.
16 A She stands with a small grunt, takes a step back, and squints at the gown with the eye of a general.
17 D AGATHA: Everyone, take a seat. Please. The fitting's about to start.
* 18 A ¶ The room has no one else in it.
19 A Rosamund looks over her shoulder anyway, at the empty hall.
20 D ROSAMUND: Mum.
21 D AGATHA (muttering): Too long. Always too long. I told her.
22 D ROSAMUND: It's mine, isn't it?
23 A ¶ The needle stops mid-air.
24 D AGATHA: You said you'd never wear it.
25 D ROSAMUND: I said I'd never get married.
26 D AGATHA: Same thing, the way you said it.
27 D ROSAMUND: You altered a dress in secret for eleven weeks and you want to talk about how I said it?
28 D AGATHA: I wanted it to fit.
29 A ¶ Rosamund drops her keys.
* 30 A They hit the floorboards with a crack that makes the dress form seem to flinch.
31 D ROSAMUND: You never once asked me what I wanted.
32 D AGATHA: You never once told me!
* 33 A ¶ The shout hangs.
* 34 A Dust spins.
35 A Rosamund steps forward, picks up the hem, and holds the satin in her fist.
36 D ROSAMUND (quietly): Pin it shorter.

### SCENE s01428 | INT. GRAND HOTEL MUSEUM OF CLOCKS - HALL OF PENDULUMS - EVENING
Detected names (may be incomplete or contain aliases): INSPECTOR AUGUSTINE FELL, ODETTE LAMBERT-VANCE, SIMEON ACHTERBERG, MISS CLARISSA BOONE, ELIAS THORNCROFT, HOBBS
* 1 A ¶ A cavernous gallery lined with grandfather clocks, their brass pendulums swinging out of step with one another like a crowd of mourners nodding at different tunes.
* 2 A The parquet gleams.
* 3 A Tall windows frame a bruised sunset.
4 A ¶ Gathered at the center beneath a crystal chandelier: INSPECTOR AUGUSTINE FELL (50s, trench coat damp at the shoulders, fedora in hand), a methodical man with a notebook the size of a prayer book.
5 A ¶ MRS. ODETTE LAMBERT-VANCE (60s, pearls, a black veil pushed back), the widow of the museum's founder, perched on a gilt chair.
6 A ¶ DR. SIMEON ACHTERBERG (40s, bow tie, spectacles), the curator, nervously winding his own watch.
7 A ¶ MISS CLARISSA BOONE (20s, secretary, red lipstick, a pencil behind her ear).
8 A ¶ ELIAS THORNCROFT (30s, dark suit, an easy grin), the nephew and heir.
9 A ¶ HOBBS (70s, white gloves, spine straight as a ruler), the butler.
10 D FELL: Thank you all for staying. It's a nasty night, and I'd hoped we'd be finished by supper.
11 D ODETTE: My husband is lying in the next room, Inspector. Supper is not a priority.
12 D FELL: Of course. Forgive me.
13 D SIMEON: The Regulator clock stopped at seven-forty. That's the time on the coroner's slip, isn't it?
14 D FELL: So it is.
15 D CLARISSA: Then he died at seven-forty. It's simple.
16 D FELL: It is, Miss Boone. Which is why I distrust it.
17 D ELIAS: Distrust a stopped clock? Inspector, you're a romantic.
18 D FELL: I distrust any clock that stops precisely when it's useful.
19 D HOBBS: If I may, sir.
20 D FELL: Please.
21 D HOBBS: The Regulator has not stopped on its own in thirty-one years. Mr. Lambert-Vance wound it every Sunday himself. He had a ritual. A key kept on a chain.
22 D FELL: And that key is now where?
23 D HOBBS: It was in his waistcoat pocket, sir.
24 D FELL: It was not. I checked.
* 25 A ¶ A pendulum clicks.
* 26 A Nobody breathes.
27 D ODETTE: What are you suggesting?
28 D FELL: That someone wound the clock back to seven-forty so that someone else might have an alibi.
29 D ELIAS: I was in the library with Clarissa from seven-fifteen.
30 D CLARISSA: Yes. Yes, we were.
31 D FELL: You were. And Dr. Achterberg was in the cellar, and Hobbs was serving tea in the east wing, and Madame Lambert-Vance was dressing. Every person in this room has an alibi for seven-forty, which is why I believe the murder occurred at seven-ten.
32 D SIMEON: That's impossible. The tea service was at seven.
33 D FELL: And ended at seven-oh-five. Hobbs, how many cups did you collect?
34 D HOBBS: Five, sir.
35 D FELL: There are six people in this house.
* 36 A ¶ A long pause.
* 37 A The chandelier trembles.
38 D ODETTE (very quietly): My husband did not take tea after six.
39 D FELL: No. But someone took tea to him. And left the sixth cup upstairs, with lipstick on the rim.
40 A ¶ All eyes turn to Clarissa.
41 A She touches her mouth.
42 A Smiles, without joy.

### SCENE s01429 | INT. FEED STORE BACK ROOM - NIGHT
Detected names (may be incomplete or contain aliases): SHERIFF CASIMIR DUVALL, TOBY, RAINEY, MABEL KINGSLEY
* 1 A ¶ Grain sacks stacked to the rafters.
* 2 A A single oil lamp.
* 3 A Barn-cat eyes in the dark, gone when you look.
4 A ¶ SHERIFF CASIMIR DUVALL (50s, silver mustache, a limp from an old stirrup) sits at a plank table, chair tilted back.
5 A Opposite him, TOBIAS "TOBY" RAINEY (20s, barely a beard, hands cuffed in front, a bruise blooming on his jaw).
6 A ¶ In the corner, behind the sacks, a woman stands motionless.
7 A MABEL KINGSLEY (40s, widow's black, a shotgun held low like a broom).
8 D DUVALL: You know whose barn that was.
9 D TOBY: I know.
10 D DUVALL: You know whose horse.
11 D TOBY: I know that too.
12 D DUVALL: You know the penalty.
13 D TOBY: Sheriff, I'll hang if that's what it is. I'm not asking you to like me.
14 D DUVALL: I don't.
15 D TOBY: Then we agree.
16 D MABEL: Ask him where the boy is.
17 D DUVALL: Mabel.
18 D MABEL: Ask him.
19 D DUVALL: Where's the boy, Toby?
20 D TOBY: I left him at the creek. He's fine. He's twelve and he's fine.
21 D MABEL: Alone.
22 D TOBY: With a canteen and a blanket, ma'am. Which is more than I got at twelve.
23 D DUVALL: Why the creek?
24 D TOBY: Because the barn was on fire, and I'd have had to carry him.
25 D MABEL: You set the fire.
26 D TOBY: I did not.
27 D DUVALL: Then who?
28 D TOBY: Ask the man who held the lamp. Ask the one who paid the stable hand two dollars to go quiet.
29 A ¶ Duvall lets his chair drop forward.
* 30 A The legs hit the floor.
31 D DUVALL: Name him.
32 A ¶ Toby looks at Mabel.
33 A At the shotgun.
34 A At Duvall.
35 D TOBY: You'll want to sit down, ma'am.

### SCENE s01430 | INT. VERIDIAN SYSTEMS - OPEN-PLAN OFFICE - FIRE DRILL - DAY
Detected names (may be incomplete or contain aliases): VERB, PERPETUA NWOSU, ALISTAIR BOONSRI, LOLA FIGUEROA-WREN
* 1 A ¶ Rows of grey cubicles.
* 2 A A laminated sign reads "SYNERGY IS A VERB."
* 3 A Alarm bell clangs on a loop.
4 A ¶ PERPETUA NWOSU (40s, headset, high-vis vest over a blazer) strides between desks with a clipboard.
5 A ALISTAIR BOONSRI (30s, sleeves rolled, mug in hand) does not stand.
6 A LOLA FIGUEROA-WREN (20s, intern, lanyard tangled) stares at a vending machine.
7 D PERPETUA: Everyone! Exit through the east stairwell! Walk, do not run!
* 8 A ¶ Nobody else is there.
* 9 A The desks are empty.
10 A She says it anyway.
11 D ALISTAIR: Perpetua, we're the only two on this floor.
12 D PERPETUA: Three.
13 D ALISTAIR: Fine, three.
14 A ¶ Lola still has not moved.
15 D PERPETUA: Lola. Stairwell.
16 D LOLA: I'm waiting for my pretzels.
17 D PERPETUA: There is a fire.
18 D LOLA: Then I'll be quick.
19 A ¶ Alistair finally stands, mug still steaming.
20 D ALISTAIR (muttering): Every quarter, a fire. Never an actual fire.
21 D PERPETUA: I heard that.
22 D ALISTAIR: It was for you to hear.
* 23 A ¶ The alarm stops.
* 24 A Silence rings.
25 A Perpetua's headset crackles; she tilts her head, listens, goes still.
26 D PERPETUA (to herself): Oh no.
27 D ALISTAIR: What?
28 D PERPETUA: It was a real fire. Floor four. They forgot to tell the drill coordinator.
29 D LOLA (calling, bright): Everyone! Exit through the east stairwell!
30 A ¶ Her pretzels thump into the tray.
31 A She grabs them and sprints.
32 A Perpetua and Alistair follow, mug abandoned, spilling steam onto carpet.
33 A ¶ At the stairwell door, Perpetua stops, hand on the push bar.
34 D PERPETUA: False alarm. Floor four just burned a casserole.
35 D ALISTAIR: I hate this company.
36 D LOLA (mouth full): Pretzel?

### SCENE s01431 | INT. ABANDONED GRAIN ELEVATOR - GROUND FLOOR - NIGHT
Detected names (may be incomplete or contain aliases): ELSPETH MARROW, DOMINIC ARRUDA
* 1 A ¶ A concrete cathedral of silos.
* 2 A Rusted augers hang like dead snakes.
* 3 A The floor is a scatter of husks and pigeon bones.
* 4 A A flashlight beam wobbles across a wall stenciled "FILL LINE 40 FT."
5 A ¶ ELSPETH MARROW (40s, county surveyor, canvas jacket, hard hat, a clipboard clutched to her chest) steps over a fallen ladder.
6 A Behind her comes DOMINIC ARRUDA (30s, her assistant, rain slicker, young face, a camera on a strap).
7 D ELSPETH: Mind the grating.
8 D DOMINIC: It's all grating.
9 D ELSPETH: The loose grating.
10 A ¶ He steps carefully.
* 11 A The beam sweeps a rusted sign: DANGER - CONFINED SPACE.
12 D DOMINIC: Is it true what they say about this place?
13 D ELSPETH: What do they say?
14 D DOMINIC: That a man drowned in wheat.
15 D ELSPETH: Engulfment. It happens. Grain flows like water. You stand in a bin, it pulls you under.
16 D DOMINIC: In ten seconds.
17 D ELSPETH: In four.
* 18 A ¶ Silence.
* 19 A Somewhere above, grain shifts, a faint hiss like rain on a roof.
20 D DOMINIC: Is it supposed to do that?
21 D ELSPETH: Settling.
22 D DOMINIC: It's been empty since 1991.
23 D ELSPETH: Then it's settling slowly.
24 A ¶ She crouches at a floor hatch, rusted shut.
25 A Taps it with her pen.
* 26 A A hollow note.
27 D ELSPETH [CONT'D]: Bin eight. Hold the light.
28 A ¶ Dominic holds it.
29 A The beam shakes, just enough to notice.
30 D DOMINIC: Elspeth, my father worked at one of these.
31 D ELSPETH: Did he?
32 D DOMINIC: He never talked about it. Only that the dust got in your teeth and you tasted it for days.
33 D ELSPETH (not looking up): Mm.
34 D DOMINIC: Do you taste something?
35 A ¶ She stops.
36 A Sniffs.
* 37 A A faint sweetness, like bread left in a warm oven.
38 D ELSPETH: Mold.
39 D DOMINIC: That's not mold.
* 40 A ¶ The hiss above grows.
* 41 A A thin stream of golden kernels runs from a seam in the ceiling, pattering onto the floor between them.
42 A Neither looks away.
43 D DOMINIC [CONT'D]: It's been empty since --
44 D ELSPETH: I know.
45 A ¶ She stands.
* 46 A The stream thickens.
* 47 A Behind them, in the dark, the heavy door they came through swings shut with a soft, deliberate click.
* 48 A No wind.
49 D DOMINIC (whisper): Did you close that?
50 D ELSPETH: No.
51 D DOMINIC: Did I?
52 D ELSPETH: No.
* 53 A ¶ The kernels keep falling.
* 54 A They form a little cone on the concrete.
* 55 A Then, silently, the cone slides sideways, as if tipped by an invisible hand, and a second stream starts from another seam.
56 D DOMINIC: We should go.
57 D ELSPETH: Take the readings first.
58 D DOMINIC: Elspeth.
59 D ELSPETH: Take the readings.
60 A ¶ She walks to the hatch.
61 A Grips the wheel.
* 62 A It turns easily, without a squeal.
* 63 A Oiled.
64 D ELSPETH [CONT'D]: Dominic, who's been here?
65 A ¶ He doesn't answer.
66 A He is backing toward the door, camera forgotten at his hip, the flashlight beam pointing straight up the silo's throat.
* 67 A ¶ Above them, a tide of grain begins to pour.
68 D DOMINIC: RUN.
69 A ¶ He grabs her sleeve.
* 70 A The hatch swings open on its own.
* 71 A A warm breath exhales from below, smelling of bread and rot, and the floor beneath their boots goes soft.

### SCENE s01432 | INT. REGIONAL AIRPORT - BAGGAGE CLAIM - NIGHT
Detected names (may be incomplete or contain aliases): SAOIRSE LINDQVIST, YUSUF BELLAMY
* 1 A ¶ A single carousel grinds in an empty hall.
* 2 A Chairs bolted in rows.
* 3 A A vending machine hums.
* 4 A The arrivals board flickers "DELAYED."
5 A ¶ SAOIRSE LINDQVIST (40s, wool coat, a funeral program folded small in one hand) waits with her arms crossed.
6 A Beside her stands YUSUF BELLAMY (40s, her brother, rumpled, carry-on at his feet, a plastic bag of airport pretzels untouched).
7 A ¶ Neither looks at the other.
8 A They watch the rubber flaps at the end of the belt.
9 D YUSUF: Thought it'd be busier.
10 D SAOIRSE: Last flight in.
11 D YUSUF: Right.
* 12 A ¶ A bag slides out.
* 13 A Black, medium.
14 A Saoirse leans forward.
15 A Yusuf leans forward.
* 16 A It isn't theirs.
17 A It circles past them, and they both watch it, and neither says what both of them are thinking.
18 D SAOIRSE (to the carousel, brightly): Anyone? No? Okay.
19 D YUSUF: Who are you talking to?
20 D SAOIRSE: Habit.
* 21 A ¶ Another bag.
* 22 A A child's suitcase decorated with stickers of a cartoon fox.
23 A Saoirse turns away.
24 A Yusuf stares at it as it passes, then looks at his own shoes, then at the plastic bag of pretzels.
25 A He opens it, takes one, snaps it in half, offers her half without looking.
26 A ¶ She takes it.
27 A Eats it.
28 A They stand shoulder to shoulder, chewing, watching a dull steel belt roll and roll.
29 D YUSUF: Did you call Mum?
30 D SAOIRSE: Tuesday.
31 D YUSUF: What did she say?
32 D SAOIRSE: That the weather's turned.
33 D YUSUF: That's it?
34 D SAOIRSE: That's the whole call.
35 D YUSUF (under his breath): Ten years.
36 D SAOIRSE: What was that?
37 D YUSUF: Nothing.
* 38 A ¶ The belt shudders.
* 39 A A last bag drops from the chute, a cracked brown leather case with a torn tag, and rolls toward them alone.
40 A Saoirse's face does not change.
41 A Yusuf's does, finally, a slow collapse, brow, mouth, chin.
42 A He steps toward it and lifts it with both hands as though it might spill.
43 A She lowers her gaze, takes the funeral program out of her palm, and tucks it into her coat where nobody can see.
44 A He sets the case on the floor between them and kneels, thumbs resting on the latches, and she crouches across from him, one hand finding the handle and the other, without asking, closing over his.
45 D YUSUF [CONT'D]: You knew about the house.
46 D SAOIRSE: Yes.
47 D YUSUF: You knew and you let me fly all the way here.
48 D SAOIRSE: I thought you should see it.
49 A ¶ He lets go of the latch.
50 A She does not let go of his hand.
51 D YUSUF (very quietly): It was never about Mum.

### SCENE s01433 | INT. MARINE AQUARIUM - SHARK TUNNEL - NIGHT
Detected names (may be incomplete or contain aliases): VESPER LOWRY, MUNGO TAKAHASHI, PIPS, ADEBAYO, ROSALIND CHEN-MARCH, DUKE ZELENSKY, ILSE VANTERPOOL
* 1 A ¶ Blue gloom.
* 2 A Silhouettes of rays drift overhead.
3 A Reflected ripples slide across black-clad figures crouched along the tunnel wall.
4 A ¶ VESPER LOWRY (30s, crew boss, earpiece) taps a panel.
5 A MUNGO TAKAHASHI (40s, safe man, fingers like a surgeon's) kneels at a locked case.
6 A "PIPS" ADEBAYO (20s, tech, tablet glowing on her forearm).
7 A ROSALIND CHEN-MARCH (50s, driver, quiet), watches the corridor.
8 A DUKE ZELENSKY (30s, muscle, nervous) checks his watch.
9 D VESPER: Eyes up. Ninety seconds on the loop.
10 D PIPS: Cameras show tank two. No movement.
11 D DUKE (muttering): Tank two. Sure. Tank two.
12 D MUNGO: Quiet. I'm in.
* 13 A ¶ A latch clicks.
14 A He lifts out a velvet tray.
* 15 A Pearls the size of marbles, gleaming.
16 D VESPER: Rosalind, status.
17 D ROSALIND: Clear.
* 18 A ¶ Footsteps echo.
19 A Everyone freezes.
* 20 A A shadow lengthens along the curved glass.
21 A ¶ ILSE VANTERPOOL (60s, security guard, cardigan under her uniform, thermos in hand) rounds the corner.
22 A She sees the crew.
23 A Sees the pearls.
24 A Sips her tea.
25 D ILSE: I don't get paid enough for this.
26 D VESPER: Nobody does. Everybody, stay calm.
27 D ILSE: Is there a plan for me?
28 D PIPS (to Vesper, low): She's not on the schedule.
29 D VESPER (to Ilse): There's a plan. You sit. We leave. You call it in in five minutes, with a good story.
30 D ILSE: I have a bad knee.
31 D DUKE: Just sit!
32 A ¶ She sits.
33 A On the floor.
* 34 A Shark shadows pass over her face.

### SCENE s01434 | INT. NIGHT FERRY - PASSENGER CABIN - NIGHT
Detected names (may be incomplete or contain aliases): CORA WHITLOCK, LEO BASSETT, STRANGER, OSWIN
* 1 A ¶ Fog at the portholes.
* 2 A A sodium lamp swings on its chain.
* 3 A Plastic seats bolted in rows.
* 4 A The engine thrums.
5 A ¶ CORA WHITLOCK (30s) sits clutching a paper cup.
6 A Across from her, LEO BASSETT (30s) tries to sleep with his coat over his face.
7 A ¶ A figure in the far aisle.
8 A Tall.
9 A Wet.
10 A Unmoving.
11 A ¶ Cora notices him.
12 A Lowers her cup.
13 A ¶ He steps closer.
* 14 A Water drips from his sleeves onto the deck.
15 D STRANGER: This seat taken?
16 D CORA: Plenty of seats.
17 D STRANGER: I like this one.
18 A ¶ He sits.
19 A Right beside her.
20 A Too close.
21 A She shifts away.
22 A He watches her do it.
23 A ¶ Leo lifts the coat.
24 A Squints at him.
25 A Sinks back down.
26 D STRANGER [CONT'D]: Is he your husband?
27 D CORA: Brother.
28 D STRANGER: Pity.
29 A ¶ She stands.
30 A He grabs her wrist.
* 31 A Cold.
* 32 A Wet.
33 A She yanks free.
34 D CORA: Leo!
35 A ¶ Leo bolts upright.
* 36 A The coat falls.
37 A The stranger smiles at him.
38 D STRANGER: Easy, friend.
39 A ¶ Leo steps between them.
40 A Shoves him back.
41 A The man laughs, a bright, delighted bark, and raises both hands.
42 D STRANGER [CONT'D]: Oswin. My name is Oswin.
43 D CORA: I don't care.
44 D OSWIN: You will.
45 A ¶ He reaches into his coat.
46 A Leo tenses.
47 A Oswin pulls out a ticket stub, damp, torn.
48 A Holds it up in the lamplight.
49 D OSWIN [CONT'D]: Last ferry to Harrow Point. Nineteen fifty-one.
50 A ¶ Leo takes it.
51 A Reads it.
52 A His face loses color.
53 D LEO: That's a prop.
54 D OSWIN: Is it?
55 A ¶ Cora backs away.
56 A Her heel hits the bulkhead.
57 A Oswin rises slowly.
* 58 A Water pools around his shoes.
59 A ¶ He steps toward her.
60 A She screams.
* 61 A ¶ The lamp swings.
62 A In the swing, he is gone.
* 63 A The seat is empty and wet.
64 A ¶ Leo drops the ticket.
* 65 A It lands in a puddle and darkens.
66 D CORA: Where did he --
67 D LEO: Shh.
68 A ¶ Slowly, he points.
* 69 A Down the aisle.
* 70 A At the far door, a hand rests on the glass, dripping, fingers spread, waiting.

### SCENE s01435 | INT. ABANDONED SALOON - DUSK
Detected names (may be incomplete or contain aliases): HOLLIS GREER, DORA, SIX-CROWS
* 1 A ¶ Dust blankets the long bar.
* 2 A A chandelier hangs by one chain, glass prisms scattered across the floorboards like frozen rain.
* 3 A Through shattered windows the sky bleeds orange into violet.
4 A ¶ HOLLIS GREER (50s, lean as a fence post, long coat gone grey from travel) stands at the bar with a tin cup.
5 A He wipes a stool with his sleeve.
6 A Sits.
7 A Pours water from a canteen and does not drink it.
8 D HOLLIS (to the empty room): Evening, folks.
* 9 A ¶ Nothing.
* 10 A A loose shutter bangs.
11 D HOLLIS [CONT'D]: Place looks like it's seen better days. Same as me.
12 A ¶ He sets the cup down.
13 A Looks at the mirror behind the bar.
* 14 A A crack runs through it like a river on a map.
15 A His own reflection splits in two.
16 D HOLLIS [CONT'D] (muttering): Don't you start.
* 17 A ¶ A voice rings from outside, clear in the thin air.
18 D DORA [O.S.]: Hollis Greer!
19 A ¶ He doesn't flinch.
20 A He sets down the cup, slow.
21 D HOLLIS: I hear you.
22 D DORA [O.S.]: Thought you might. Come out.
23 D HOLLIS: I'm tired, Dora.
24 D DORA [O.S.]: So am I. I rode three hundred miles. Come out or I come in.
25 A ¶ He rubs his face.
26 A Stands.
27 A Settles his coat.
28 A Moves to the doorway but does not cross it.
29 D HOLLIS: Everybody who's listening, I'd like it noted I asked nicely.
30 D DORA [O.S.]: Nobody's listening.
31 D HOLLIS: The horses are.
* 32 A ¶ The batwing doors creak.
* 33 A Spurs ring.
34 A ¶ THEODORA "DORA" SIX-CROWS (40s, braided hair silver at the roots, a Winchester slung across her back, face weathered like bark) pushes through.
35 A Her eyes take in the wreck of the saloon, the chandelier, the cracked mirror, the man.
36 D DORA: You look old.
37 D HOLLIS: You look exactly the same.
38 D DORA: That's not a compliment.
39 D HOLLIS: It wasn't meant as one.
40 A ¶ She walks to the bar.
41 A Takes his cup.
42 A Drinks.
43 A Sets it back.
44 D DORA: You still owe me a horse.
45 D HOLLIS: I owe you more than a horse.
46 D DORA: Start with the horse.

### SCENE s01436 | INT. 24-HOUR LAUNDROMAT - 3 A.M.
Detected names (may be incomplete or contain aliases): AMARA OSEI, JOSEPHINE LAMB, TARIQ HASSAN, BENEDETTA ROSSI, LUCA FERRIER
* 1 A ¶ Fluorescent hum.
* 2 A Dryers turn like slow planets.
3 A Five people, five machines, one wall of washers.
4 A ¶ AMARA OSEI (20s) folds a sheet.
5 A JOSEPHINE LAMB (60s) reads a paperback.
6 A TARIQ HASSAN (30s) stares into dryer four.
7 A BENEDETTA ROSSI (50s) feeds quarters into a slot.
8 A LUCA FERRIER (20s) is asleep on a plastic chair.
9 D AMARA: You're reading that upside down.
10 D JOSEPHINE: I'm reading it the way the author intended.
11 D TARIQ: Excuse me, do any of you know if wool shrinks at low?
12 D BENEDETTA: It shrinks at everything.
13 D TARIQ: Even love?
14 D AMARA: That was smooth.
15 D TARIQ: That was an accident.
16 D JOSEPHINE: They're the best kind.
17 D LUCA (waking): Is it morning?
18 D BENEDETTA: No, caro. It's 3 a.m. and you owe me a quarter.
19 D LUCA: I do?
20 D BENEDETTA: From last Tuesday.
21 D AMARA: You two know each other?
22 D BENEDETTA: Everyone knows everyone here. It's a laundromat.
23 D TARIQ: Then why have I never seen you before?
24 D AMARA: Maybe you weren't looking.
* 25 A ¶ A dryer buzzes.
* 26 A Nobody moves.

### SCENE s01437 | INT. COURTROOM 4B - SENTENCING HEARING - DAY
Detected names (may be incomplete or contain aliases): JUDGE HORTENSE ABARA, CORDELIA PASCOE
* 1 A ¶ Oak paneling, a flag that droops.
* 2 A A ceiling fan that has not turned since the 90s.
3 A ¶ JUDGE HORTENSE ABARA (60s, reading glasses low on her nose, a face carved from patience) presides from the bench.
4 A Below her, defense attorney CORDELIA PASCOE (40s, black suit, red folder) stands at the table with her client's empty chair beside her.
5 D ABARA: Counsel, where is your client?
6 D PASCOE: Your Honor, she is on her way.
7 D ABARA: She was due at nine. It is nine-forty.
8 D PASCOE: She is stuck on the bridge.
9 D ABARA: Then I will wait.
* 10 A ¶ The gallery rustles.
11 A The bailiff coughs.
12 A Pascoe opens her folder, closes it, opens it again.
13 D PASCOE: Your Honor, may I approach?
14 D ABARA: You may not.
15 D PASCOE: It concerns the motion.
16 D ABARA: Denied.
17 D PASCOE: I haven't made it.
18 D ABARA: I know what is in it.
19 A ¶ Pascoe sets her pen down.
20 A Abara removes her glasses, folds them, sets them on the bench.
21 A She looks at Pascoe as one looks at a long-standing wound.
22 D PASCOE: You've decided already.
23 D ABARA: I decided in March.
24 D PASCOE: Then why make her come?
25 D ABARA: Because she should hear it with her own ears.
26 A ¶ Pascoe crosses to the empty chair.
27 A Rests her hand on its back.
28 A Her knuckles whiten.
29 A Abara watches her do it, picks up her gavel, puts it down without striking, and leans forward with both elbows on the bench while Pascoe turns her whole body toward the gallery, scans each face, and then stares straight back up at the bench, jaw working, one foot already moving toward the aisle.
30 D PASCOE: She's not coming.
31 D ABARA: No.
32 D PASCOE: You knew.
33 D ABARA: She called my chambers at eight.
34 D PASCOE: And you let me stand here.
35 D ABARA: I wanted to see what you would do.
36 A ¶ Pascoe laughs once, a dry, helpless sound.
37 A She picks up her folder and hurls it at the table.
* 38 A Papers fly.
39 A The bailiff starts forward.
40 A Abara raises a hand and he stops.
41 D PASCOE: Do you know what she told me about you?
42 D ABARA: Tell me.
43 D PASCOE: That you were the only one who ever looked at her.
44 A ¶ Abara says nothing.
* 45 A The fan overhead gives one slow, grinding turn.

### SCENE s01438 | INT. OCEAN LINER - REFRIGERATED HOLD - NIGHT
Detected names (may be incomplete or contain aliases): PROFESSOR EZEKIEL WARD, NURSE ANNELIESE KROLL, PERISHABLE
* 1 A ¶ Frost on iron.
* 2 A Hanging sides of beef sway in the dim lamplight like pendulums.
* 3 A The ship groans and creaks as it rolls.
* 4 A Steam curls from every breath.
5 A ¶ PROFESSOR EZEKIEL WARD (60s, heavy overcoat, goatee trimmed to a point, a leather medical bag) creeps between the carcasses, a lantern held high.
6 A Behind him comes NURSE ANNELIESE KROLL (30s, white cap beneath a fur collar, face scrubbed pale), clutching a tin of ether.
7 D WARD: Careful. The deck's slick.
8 D KROLL: It is the cold that frightens me, Professor, not the deck.
9 D WARD: Cold is the only honest thing aboard this vessel.
10 A ¶ He swings the lantern.
* 11 A The beam passes a crate stamped "PERISHABLE - HANDLE WITH CARE" and a second crate beside it, longer, narrower, its lid nailed down.
12 D KROLL: That is the one.
13 D WARD: So it is.
14 A ¶ He kneels and prods the lid with a crowbar.
* 15 A The nails shriek.
16 A Kroll looks over her shoulder, then back, then over her shoulder again.
* 17 A The ship lurches.
18 A A beef side swings into her, and she gasps, shoves it away; Ward braces on the crate, wrenches the lid, and the two of them jerk backward as it clatters to the deck and a plume of frozen air sighs out of the dark, carrying a smell of salt and old flowers.
19 D WARD [CONT'D]: Dear God.
20 A ¶ Inside lies a woman in a wedding dress of antique lace, her skin glittering with frost, her hands folded on her breast, eyes closed.
* 21 A Roses, black with age, lie in her hair.
22 D KROLL: She is... she has not decayed.
23 D WARD: She cannot have been dead more than a day.
24 D KROLL: The ledger says fifty years.
25 A ¶ Ward leans in, lantern trembling.
* 26 A The frost on her lashes begins to melt, beads sliding down her temple.
27 A Kroll takes his arm.
28 D KROLL [CONT'D]: Professor. Her eyes.
29 A ¶ The eyelids flutter.
30 A Ward drops the lantern.
* 31 A It shatters; the flame gutters.
* 32 A In the dark, a thin whisper rises from the crate, one syllable, a word like "cold."
33 A ¶ Kroll screams.
34 A Ward throws his coat over the crate, and together they heave the lid back down, hammering it with the crowbar's flat end, and then stand panting in the sudden quiet, the swaying carcasses bumping them like drunken guests.
35 D WARD: We did not hear that.
36 D KROLL: No, Professor.
* 37 A ¶ Behind them, from within the sealed crate, three polite knocks.

### SCENE s01439 | INT. BOOKBINDERY - SUNDAY AFTERNOON
Detected names (may be incomplete or contain aliases): LIORA MENDELSOHN, MATEUS FARIA, SEVERINE ACHARD, ODELL BRIGHT
* 1 A ¶ Quiet.
* 2 A Presses stand like iron monks.
* 3 A Spools of linen thread, bone folders, glue pots.
* 4 A Sun slants through dusty skylights.
5 A ¶ LIORA MENDELSOHN (30s) trims a spine with a knife.
6 A MATEUS FARIA (30s) presses a stack of pages under a brass weight.
7 A SEVERINE ACHARD (50s), the owner, sorts paper by tone.
8 A ODELL BRIGHT (20s) sweeps.
9 D LIORA: Mateus, hand me the paste.
10 D MATEUS: Which paste?
11 D LIORA: The wheat.
12 D MATEUS: There are two wheats.
13 D SEVERINE: The older one, dear. It's more patient.
14 A ¶ Mateus passes her a pot.
15 A Their fingers touch.
16 A Both glance away.
17 D ODELL: Should I do the back room?
18 D SEVERINE: You did it Friday.
19 D ODELL: It got dusty.
20 D SEVERINE: It's a bookbindery.
21 D LIORA: Odell, come hold this.
22 D MATEUS: Odell, come hold this.
23 D LIORA: ^I asked first.
24 D MATEUS: ^I only asked second because you were slow.
25 A ¶ Odell, caught between them, stands with his broom like a flagpole.
26 D ODELL: I'll hold his.
27 D LIORA: Traitor.
28 D SEVERINE: Children. The glue is setting.
29 A ¶ All four go quiet and return to their benches.
* 30 A Scissors snip.
* 31 A Paper whispers.
* 32 A Outside a church bell rings four.
33 D MATEUS (low, to Liora): Dinner?
34 D LIORA (low): Maybe.
35 D SEVERINE: I heard that.
36 D LIORA: You weren't meant to.
37 D SEVERINE: Everything in this room was meant to be heard. It's a very small room.

### SCENE s01440 | INT. HOSPITAL - CARDIAC CATH LAB - DAY
Detected names (may be incomplete or contain aliases): IMOGEN ACHEBE-LARSEN, NURSE FELIX OYAMA, HARLAN VOSKUIJLEN, NADIA KARIMOVA
* 1 A ¶ Bright, cold, sterile.
* 2 A Monitors blink green and amber.
* 3 A A fluoroscope arm hangs over a table like a heron.
4 A ¶ DR. IMOGEN ACHEBE-LARSEN (40s, surgical cap, calm like a held breath) scrubs at the sink, eyes on a screen.
5 A NURSE FELIX OYAMA (30s, steady hands, mask pushed up on his forehead) lays out instruments in perfect rows.
6 A ¶ On the table lies HARLAN VOSKUIJLEN (60s, gown, wrist bands, a farmer's tan line at the collar), awake, sedated, hands folded.
7 A ¶ In the viewing window, behind glass: NADIA KARIMOVA (50s, his wife, handbag on her lap, knitting needles motionless).
8 D IMOGEN: Mr. Voskuijlen, how are we doing?
9 D HARLAN: Tell me it's a plumbing job.
10 D IMOGEN: It's a plumbing job.
11 D HARLAN: Good. I fixed a tractor once.
12 D FELIX: Little pinch, sir.
13 A ¶ Felix slides in the needle.
14 A Harlan doesn't wince.
15 A He looks at the ceiling, at the light, at a smear of dried tape on a tile.
16 D HARLAN: You ever notice that tile has a stain?
17 D FELIX: Every day.
18 D HARLAN: Shaped like Ohio.
19 D FELIX: Nobody's ever said Ohio.
20 D HARLAN: Nobody asks.
21 A ¶ Imogen watches the screen.
* 22 A The catheter threads upward, a gray worm through a black river.
23 A She tilts her head, bites her lip behind the mask.
24 D IMOGEN: Left anterior descending. Ninety percent.
25 D FELIX: Stent?
26 D IMOGEN: Stent.
27 A ¶ She takes a gleaming device from the tray.
28 A Felix hands over the next one without being asked.
29 A They work in silence.
30 A ¶ In the window, Nadia's needles begin to click.
31 A Quick.
32 A Quicker.
* 33 A The knitting is a scarf.
* 34 A It has no shape.
35 D HARLAN: Is she knitting?
36 D IMOGEN: She is.
37 D HARLAN: She always knits when it's bad.
38 D IMOGEN: It's not bad.
39 D HARLAN: Then why's she on row four hundred?
* 40 A ¶ A monitor chirps.
* 41 A Not loud.
* 42 A A shift in rhythm, a stutter.
43 A Felix steps closer.
44 D FELIX: Pressure's dropping.
45 D IMOGEN: I see it.
46 D FELIX: Dr. Achebe.
47 D IMOGEN: I see it.
* 48 A ¶ The beeping quickens.
* 49 A The green line jitters into a spike.
50 A Felix grabs the paddles and rolls the cart forward; Imogen presses a hand flat on Harlan's chest.
51 D IMOGEN [CONT'D]: Mr. Voskuijlen. Harlan. Stay with me.
52 D HARLAN (eyes closing): Tell her to finish the scarf.
53 D FELIX: Clear!
54 A ¶ The body jerks.
* 55 A The line flatlines for one second, two, and then, jagged, a heartbeat resumes.
* 56 A Then another.
* 57 A Then a rhythm.
58 A ¶ Imogen exhales, long.
59 A Her shoulders drop an inch.
60 A Felix lowers the paddles, blinking.
61 D FELIX [CONT'D]: He's back.
62 D IMOGEN: He never left.
63 D FELIX: You said that very calmly.
64 D IMOGEN: I'm calm when I'm terrified. It's a flaw.
65 A ¶ Behind the glass, Nadia has stopped knitting.
66 A Her hand is flat on the window, fingers spread.
67 A ¶ Imogen looks up.
68 A Meets her eyes.
69 A Nods once.
70 A ¶ Nadia sits back down.
71 A Picks up the needles.
72 A Starts a new row.
73 D HARLAN (groggy): Ohio.
74 D FELIX: Rest, sir.
75 D HARLAN: It's Ohio. Tell them.
76 D FELIX: I'll tell them.

### SCENE s01441 | INT. CONVERTED SHIPPING CONTAINER - ARBITRATION CHAMBER - DAY
Detected names (may be incomplete or contain aliases): ARBITRATOR BEATRIX ONWUDIWE, STENOGRAPHER, PAOLO DEVEREAUX, THADDEUS MWANGI, SOLVEIG ERIKSEN-BOSE, CASPIAN LOMBARDI, KALINDA
* 1 A ¶ A steel box fitted out with pine paneling and ceiling spots.
* 2 A The corrugated walls ring faintly when anyone walks.
* 3 A One long table, a flag of the International Chamber, a speaker phone with a blinking red light.
4 A ¶ ARBITRATOR BEATRIX ONWUDIWE (60s, white braids pinned up, reading glasses on a chain) sits at the head.
5 A To her left, a STENOGRAPHER, PAOLO DEVEREAUX (30s, headphones, fingers hovering over the machine).
6 A ¶ Across the table, claimant's counsel THADDEUS MWANGI (50s, three-piece suit, voice like gravel in velvet) and respondent's counsel SOLVEIG ERIKSEN-BOSE (40s, severe bun, tablet in hand).
7 A ¶ At the foot of the table, in the witness chair: CASPIAN LOMBARDI (50s, shipping magnate, signet ring, sweat at the temple).
8 D ONWUDIWE: We are on the record. Mr. Mwangi, proceed.
9 D MWANGI: Mr. Lombardi, you owned the vessel Calliope?
10 D CASPIAN: My company did.
11 D MWANGI: And on the fourteenth of October the Calliope departed Port Said carrying four hundred tonnes of grain?
12 D CASPIAN: That is correct.
13 D MWANGI: Who authorized the departure?
14 D CASPIAN: The master. Captain Oyelaran.
15 D MWANGI: Not you?
16 D CASPIAN: I do not authorize individual departures.
17 A ¶ Eriksen-Bose lifts her eyes from her tablet.
18 D ERIKSEN-BOSE: Objection. Relevance.
19 D ONWUDIWE: Overruled. Continue.
20 D MWANGI: Were you aware the hull had failed inspection?
21 D CASPIAN: I was informed of minor deficiencies.
22 D MWANGI: Minor. Mr. Lombardi, I have a report here that uses the word "catastrophic" nine times.
23 D CASPIAN: Reports exaggerate.
* 24 A ¶ The speaker phone crackles.
* 25 A A woman's voice, slightly delayed, slightly electronic.
26 D KALINDA [V.O.] (phone): Apologies, Madam Arbitrator, this is the interpreter from Alexandria. Is the witness's last answer on the record in English?
27 D ONWUDIWE: It is, Ms. Kalinda. He spoke English.
28 D KALINDA [V.O.] (phone): Understood. Please proceed.
29 A ¶ Mwangi paces the length of the container, boots ringing on the steel floor.
30 D MWANGI: Did you or did you not instruct the master to leave regardless of the inspection?
31 D CASPIAN: I did not.
32 D MWANGI: Then why does this email, dated the thirteenth, say, quote, "Sail or we lose the contract"?
33 A ¶ Eriksen-Bose rises.
34 D ERIKSEN-BOSE: Madam Arbitrator, that email has not been authenticated.
35 D ONWUDIWE: Mr. Mwangi?
36 D MWANGI: I will authenticate it through the next witness.
37 D ONWUDIWE: Then I will not admit it now.
38 A ¶ Caspian relaxes by half an inch.
39 A Mwangi turns, unhurried, back to the table.
40 D MWANGI: Mr. Lombardi, let us talk about the insurance.
41 A ¶ Caspian's hand goes to his tie.
42 A Loosens it.
43 D CASPIAN: What about it?
44 D MWANGI: It was raised on the twelfth. By forty percent.
45 D CASPIAN: Standard practice.
46 D MWANGI: On a vessel you believed to be sound?
47 D CASPIAN: Prudence.
48 D MWANGI: Or foresight.
49 D ERIKSEN-BOSE: Objection. Argumentative.
50 D ONWUDIWE: Sustained.
51 A ¶ Paolo's keys clack on.
52 A Caspian takes a handkerchief from his pocket and dabs his forehead, folds it, folds it again.
53 D KALINDA [V.O.] (phone): Madam, forgive me, there is a power flicker on our end. We may drop.
54 D ONWUDIWE: Noted. Mr. Lombardi, please answer the question.
55 D CASPIAN: What question?
56 D MWANGI: Did you foresee the loss of the ship?
* 57 A ¶ The container is silent.
* 58 A A fan turns above.
* 59 A The speaker phone hisses.
60 A Eriksen-Bose's pen taps once on the table, a signal.
61 D CASPIAN: I would like to consult with counsel.
62 D ONWUDIWE: Granted. Ten minutes.
63 A ¶ He stands.
* 64 A His chair scrapes.
65 A As he crosses, his shoulder knocks the speaker phone, and the red light goes dark.
66 D KALINDA [V.O.] (phone, fading): ...hello? Madam? Hello?
* 67 A ¶ The line dies.

### SCENE s01442 | INT. RUINED CHURCH BELL TOWER - DAWN
Detected names (may be incomplete or contain aliases): SERGEANT REYNALDO CASTELLANOS-DUBE, PRIVATE OSKAR LINDGREN-PARK, CORPORAL ABIOLA FAGBENLE, PRIVATE TEMUJIN BATBAYAR, LIEUTENANT HONORIA WEXCOMBE, STERNBERG
* 1 A ¶ Stone stairs wind up into broken light.
* 2 A The bell lies cracked on its side, green with age.
* 3 A Through a hole in the wall, smoke rises from a distant town.
4 A ¶ SERGEANT REYNALDO CASTELLANOS-DUBE (40s, scarf over his mouth, rifle across his shoulders) crouches at the arched window.
5 A PRIVATE OSKAR LINDGREN-PARK (19, glasses taped at the bridge) hugs the radio set.
6 A CORPORAL ABIOLA FAGBENLE (30s, sniper's cheekrest slung on her back) scans the tree line with binoculars.
7 A PRIVATE TEMUJIN BATBAYAR (20s, silent, chewing on a stalk of grass) stacks sandbags.
8 A LIEUTENANT HONORIA WEXCOMBE (30s, mud to her thighs, helmet cocked back) looks over a map weighted with a rock.
9 D WEXCOMBE: Report.
10 D FAGBENLE: Two vehicles, north road. Neither moving.
11 D CASTELLANOS-DUBE: Waiting for us to blink.
12 D WEXCOMBE: Then we don't blink. Lindgren-Park, raise HQ.
13 D LINDGREN-PARK: Yes, ma'am.
14 A ¶ He turns the dial.
* 15 A Static washes.
* 16 A A voice rises out of it, distorted.
17 D STERNBERG [V.O.] (radio): Echo Three, this is Command. Say your status.
18 D WEXCOMBE: Command, Echo Three. Tower held. Two hostile vehicles on the north road.
19 D STERNBERG [V.O.] (radio): Copy. Armor is thirty minutes out. Hold position.
20 D WEXCOMBE: Thirty minutes is a long time.
21 D STERNBERG [V.O.] (radio): It's what we have.
22 A ¶ Batbayar stops stacking.
23 A Cocks his head.
24 D BATBAYAR: Engines.
25 A ¶ Everyone listens.
* 26 A Faint, then louder.
* 27 A A low mechanical growl rolls up the valley.
28 D FAGBENLE: They're moving. Both.
29 D CASTELLANOS-DUBE: Positions.
30 A ¶ The team scatters.
31 A Fagbenle drops prone behind the window, rifle out.
32 A Batbayar drags sandbags to the stairwell mouth.
33 A Castellanos-Dube takes the opposite window.
34 A Lindgren-Park curls around the radio, mouth against the handset.
35 D LINDGREN-PARK: Command, Command, contact imminent.
36 D STERNBERG [V.O.] (radio, breaking up): ...say again...
37 D WEXCOMBE: Make it brief.
38 D LINDGREN-PARK: Contact.
* 39 A ¶ The first shell whistles.
* 40 A The tower shudders.
* 41 A Dust pours from the ceiling.
* 42 A The cracked bell rings once, a bruised, enormous note.

### SCENE s01443 | EXT. MOSSY STONE BRIDGE OVER A FOGGY GORGE - DAY
Detected names (may be incomplete or contain aliases): GRUMBLEWICK, ELOWEN THISTLEDOWN, BRAMBLEKIN
* 1 A ¶ A humpbacked bridge, green with moss, sits across a ravine of mist.
* 2 A At its center, a stool carved from a single mushroom cap.
3 A ¶ On the stool sits GRUMBLEWICK (ancient troll, belly like a boulder, a tiny abacus in his lap).
4 A Before him stand two travelers: ELOWEN THISTLEDOWN (young, herbalist's satchel) and a hooded PEDDLER named BRAMBLEKIN (stooped, bells on his cloak).
5 D GRUMBLEWICK: Toll's three coppers.
6 D ELOWEN: Three?
7 D BRAMBLEKIN: Three?
8 D ELOWEN: ^It was two last spring.
9 D BRAMBLEKIN: ^It was two last spring.
10 A ¶ Grumblewick flicks a bead on his abacus.
11 D GRUMBLEWICK: Inflation.
12 D ELOWEN: We can pay.
13 D GRUMBLEWICK: Then do.
14 A ¶ Elowen counts out coins.
15 A Bramblekin watches the fog.
16 D BRAMBLEKIN: Ever think about crossing yourself?
17 D GRUMBLEWICK: Every day.
18 A ¶ He pockets the coppers, hums a flat tune, and waves them on.

### SCENE s01444 | INT. MARCHETTI PAWN & LOAN - AFTER CLOSING - NIGHT
Detected names (may be incomplete or contain aliases): DEACON, MARCHETTI, SPARROW, TANAKA-BELL
* 1 A ¶ Glass cases stuffed with watches, guitars, wedding rings.
* 2 A Neon OPEN sign buzzing in reverse through the window.
* 3 A A steel gate half-lowered over the door.
4 A ¶ ENZO "DEACON" MARCHETTI (60s, shopkeeper, cardigan, thick glasses) sits behind the counter counting a bank envelope's worth of twenties.
5 A The counting is slow, careful, and he whispers numbers under his breath.
* 6 A ¶ The door chimes.
7 A Through the gap beneath the gate slides a woman, IRIS "SPARROW" TANAKA-BELL (30s, black raincoat, hair damp, a duffel bag slung over one shoulder).
8 D DEACON: We're closed.
9 D SPARROW: I know, Deacon.
10 A ¶ He looks up.
11 A Recognition takes a long beat.
12 D DEACON: Sparrow.
13 D SPARROW: Been a while.
14 D DEACON: Nine years.
15 D SPARROW: Ten in March.
16 A ¶ She sets the duffel on the glass.
* 17 A It clinks.
18 A Deacon doesn't touch it.
19 D DEACON: What's in the bag?
20 D SPARROW: What you asked for.
21 D DEACON: I asked for nothing.
22 D SPARROW: Your brother did.
23 A ¶ Deacon puts down the money.
24 A His face doesn't change, but his hand slides under the counter.
25 D SPARROW [CONT'D]: Don't.
26 D DEACON: Don't what?
27 D SPARROW: Don't reach for what I think you're reaching for.
28 A ¶ He stops.
29 A Brings the hand up empty, palm out, slow.
30 D DEACON: Habit.
31 D SPARROW: Mine too.
32 A ¶ She lifts the duffel's zipper two inches.
* 33 A Gold glints.
34 A Deacon exhales.
35 D DEACON: That's Sal's work.
36 D SPARROW: That's what's left of it.
37 D DEACON: Where's Sal?
38 D SPARROW: Where do you think?
* 39 A ¶ A pause.
* 40 A The neon buzzes.
* 41 A A car passes outside, headlights sweeping the ceiling.
42 D DEACON: He was supposed to be careful.
43 D SPARROW: He was.
44 D DEACON: Then what happened?
45 D SPARROW: The thing that always happens, Deacon. Somebody got greedy.
46 D DEACON: Who?
47 A ¶ Sparrow doesn't answer.
48 A She zips the bag shut, pushes it across the counter.
49 A He does not take it.
50 D DEACON [CONT'D]: You want a cut.
51 D SPARROW: I want an apology.
52 D DEACON: From me?
53 D SPARROW: From whoever's left.
54 A ¶ He considers.
55 A Takes off his glasses.
56 A Rubs the bridge of his nose.
57 A Puts them back on.
58 D DEACON: I'm sorry, Sparrow.
59 D SPARROW: For what?
60 D DEACON: Everything. Sal. The nine years. The ten in March.
61 A ¶ She nods.
62 A Looks at the ring cases.
63 D SPARROW: You still keep the cheap ones in front?
64 D DEACON: Habit.
65 A ¶ She laughs, a short exhale.
66 A He laughs back, wearier.
67 A They both stop at the same moment, and both look at the door.
* 68 A ¶ Outside, tires on wet street.
* 69 A A shadow crosses the gate.
70 A Deacon ducks behind the counter; Sparrow drops, rolling toward the guitar rack, dragging the duffel with her.
* 71 A The doorbell chimes once, uselessly, as someone shakes the gate.
* 72 A Then silence.
* 73 A Then footsteps, retreating.
74 D DEACON [CONT'D] (whisper): Sparrow?
75 D SPARROW (whisper): Still here.
76 D DEACON: Always was.
77 A ¶ She peeks over the top of the guitar rack.
78 A He rises over the counter.
79 A They look at each other like two animals at the edge of a field, wondering who will cross first.
80 D SPARROW: I'm leaving the bag.
81 D DEACON: Take half.
82 D SPARROW: Keep it. Put it in a safe and forget my name.
83 D DEACON: Never.
84 A ¶ She slips through the gate without a sound.
* 85 A The OPEN sign flickers, once, and goes out.

### SCENE s01445 | INT. THE UNSHELVED ARCHIVE - NIGHT
Detected names (may be incomplete or contain aliases): YSOLDE VANTH, KIT HOLLOWAY, THE INDEX
* 1 A ¶ A hall without a floor.
* 2 A Books drift through the dark like slow fish, spines shimmering, pages fluttering as if in a current.
* 3 A Ladders lean on nothing.
4 A ¶ YSOLDE VANTH (50s, archivist, robes of ink-stained wool, a candle in a jar on a pole) walks a path of stepping stones through the air.
5 A Behind her trails KIT HOLLOWAY (16, apprentice, bare feet, nervous), carrying an armful of loose pages.
6 D YSOLDE: Keep your eyes on the stone, not the drop.
7 D KIT: There is no drop.
8 D YSOLDE: Then you have nothing to fear.
9 A ¶ Kit steps.
* 10 A The stone sinks a hair under his weight and holds.
11 A He doesn't breathe.
* 12 A ¶ A book glides past, the size of a door.
* 13 A Its cover opens a crack, like an eye.
14 D THE INDEX [V.O.] (resonant, everywhere): Query logged. Subject: Kit Holloway. Status: unregistered.
15 A ¶ Kit stops dead.
16 A Ysolde doesn't.
17 D YSOLDE: Ignore it.
18 D KIT: It said my name.
19 D YSOLDE: It says everyone's name. Keep walking.
20 D THE INDEX [V.O.] (resonant): Reason for presence?
21 A ¶ Ysolde turns, one slow pivot of the heel.
22 A She raises the candle until it lights her chin.
23 D YSOLDE: Apprentice. Provisional. Filed under mine.
24 D THE INDEX [V.O.] (resonant): Provisional entries must be stamped by the thirteenth bell.
25 D YSOLDE: I know the rule.
26 D THE INDEX [V.O.] (resonant): It is the twelfth bell.
27 A ¶ Kit swallows.
28 A Ysolde's grip on the pole tightens, white at the knuckles, but her voice remains flat as a table.
29 D YSOLDE: Then we shall be prompt.
30 A ¶ She continues.
31 A Kit follows, steps quicker now, pages clutched to his chest.
32 A A feather of paper breaks loose; he doesn't chase it.
* 33 A ¶ At the end of the path stands a lectern shaped like a tree stump.
* 34 A A stamp rests on it, brass, heavy.
* 35 A A tiny bell begins to toll, softly, from nowhere.
36 D YSOLDE [CONT'D]: Hand.
37 A ¶ Kit presents his palm.
38 A She lifts the stamp.
39 A Holds it above his skin.
40 D KIT: Will it hurt?
41 D YSOLDE: Only afterwards.
* 42 A ¶ The bell tolls again.
* 43 A The books around them slow, tilt, turn their covers toward the lectern like a crowd.
44 D THE INDEX [V.O.] (resonant): The thirteenth bell approaches.
45 A ¶ Ysolde brings the stamp down.

### SCENE s01446 | INT. CENTRAL TELEPHONE EXCHANGE - SWITCHBOARD ROOM - NIGHT, 1924
Detected names (may be incomplete or contain aliases): EUNICE PRUITT, MISS LAVINIA CROFT, HARCOURT
* 1 A ¶ Rows of operators in shirtwaists sit at a wall of brass jacks.
* 2 A Cords hang like ivy.
* 3 A A wall clock ticks.
4 A ¶ EUNICE PRUITT (20s, headset, pencil in her hair) works her board with quick wrists.
5 A Behind her, MISS LAVINIA CROFT (50s, supervisor, high collar, spectacles on a ribbon) watches over her shoulder.
6 D EUNICE: Number, please.
7 D HARCOURT [V.O.] (phone, crackling): Operator, I want Elmwood two-two-one.
8 D EUNICE: One moment, sir.
9 D MISS CROFT: Plug it in.
10 D EUNICE: I am.
11 D HARCOURT [V.O.] (phone): Hello? Hello?
12 D MISS CROFT: Pinch it, Miss Pruitt, don't push.
13 D EUNICE: I am pinching it.
14 D HARCOURT [V.O.] (phone): I have been waiting two minutes!
15 D EUNICE: Sir, I assure you, it's two seconds.
16 D MISS CROFT: Do not argue with a customer.
17 D EUNICE: He is not a customer, Miss Croft, he is a bellow.
18 D HARCOURT [V.O.] (phone): What did you say?
19 D EUNICE: Elmwood two-two-one, sir. Connecting now.
20 A ¶ She jabs the cord home.
* 21 A A lamp flickers green.
22 A Miss Croft nods, a barely perceptible quiver of approval.
23 D MISS CROFT: Better.

### SCENE s01447 | INT. DIALYSIS UNIT - EVENING
Detected names (may be incomplete or contain aliases): ABEL STONEHOUSE, GWEN, TRAN, SAMIR HADDAD-VOLKOV
* 1 A ¶ Rows of recliners, each with a machine beside it, each machine with its slow red heartbeat of tubing.
* 2 A Late sun through blinds.
3 A ¶ ABEL STONEHOUSE (70s, retired carpenter, flat cap in his lap) sits tethered to a machine, a crossword in his free hand.
4 A Beside him, NURSE GWENDOLYN "GWEN" TRAN (40s, scrubs patterned with cartoon owls) adjusts a line.
5 A Across the room, DR. SAMIR HADDAD-VOLKOV (50s, tie loosened, tablet clutched to his chest) reads a chart, then reads it again.
6 D GWEN: Five letters, "to compress."
7 D ABEL: Squeeze.
8 D GWEN: That's six.
9 D ABEL: Press.
10 D GWEN: There it is.
11 D ABEL: I have been doing this since before you were born, Gwen.
12 D GWEN: I was born in 1983.
13 D ABEL: Then since you were in diapers.
14 A ¶ She laughs.
15 A He fills in the squares.
16 A Down the room, Samir hasn't moved.
17 A His thumb slides up and down the edge of the tablet.
18 D GWEN: You're ahead of schedule today.
19 D ABEL: I'm always ahead of schedule.
20 D GWEN: You've been here three hours and not once complained about the chair.
21 D ABEL: The chair's fine.
22 D GWEN: That's what concerns me.
23 A ¶ Samir crosses to them.
24 A His smile is the kind worn for photographs.
25 D SAMIR: Abel. How are the numbers feeling?
26 D ABEL: I don't feel numbers, Doctor. I feel Tuesdays.
27 D SAMIR: Fair. Gwen, a word?
28 D GWEN: Of course.
29 A ¶ She follows him to the hallway.
30 A Abel pretends to resume his crossword but his eyes track them.
31 A Samir speaks low.
32 A Gwen's hand goes to her mouth.
33 A She says something; Samir shakes his head.
34 A She says it again.
35 A ¶ Abel puts down his pen.
36 A ¶ Gwen returns first, composed, face a mask of cheer.
37 D ABEL: That was a long word.
38 D GWEN: It was a short word. The doctor just says it slowly.
39 D ABEL: Gwen.
40 D GWEN: Yes, Abel?
41 D ABEL: Seven letters. "To spare someone the truth."
42 D GWEN (after a beat): I'm not good at crosswords.
43 A ¶ Samir comes up behind her, sets the tablet in Abel's lap, turns the screen.
* 44 A A graph, a line, a downward slope.
45 A Abel looks at it as he might at a bad joist.
46 D ABEL: That's not a Tuesday.
47 D SAMIR: No.
48 D ABEL: How long?
49 D SAMIR: Abel --
50 D ABEL: I'm a carpenter, Samir. Measure twice.
51 D SAMIR: Months. Perhaps less.
52 A ¶ Abel nods once.
53 A Picks up the pen.
54 A Fills one more square, slowly, in capital letters.
55 D GWEN: What did you write?
56 D ABEL: Seven letters. Protect.
57 A ¶ He folds the crossword, tucks it into his cap, and lowers the cap onto his head.

### SCENE s01448 | EXT. FLOODED RICE TERRACE - DAWN
Detected names (may be incomplete or contain aliases): MIRO KOVACEVIC, ELIAS NORDQUIST
* 1 A ¶ Mist hangs over stepped paddies like breath on glass.
* 2 A Water mirrors a pink sky.
* 3 A Dragonflies skim the surface.
4 A ¶ Two soldiers wade along a bund, rifles held high, boots sucking in mud.
5 A MIRO KOVACEVIC (30s, stubble, helmet strapped crooked) leads.
6 A ELIAS NORDQUIST (20s, round-faced, a rosary wound around his wrist) follows two steps behind.
* 7 A ¶ Silence.
* 8 A Frogs.
* 9 A A distant temple bell.
10 A ¶ He gestures.
11 A They stop.
12 A He listens.
* 13 A The frogs go quiet at once, all together, in a sudden, hollow hush.
14 D ELIAS (whisper): Did you hear that?
15 D MIRO: Hear what?
16 D ELIAS: Nothing. That's what I mean.
17 A ¶ Miro nods, lowers himself to one knee, sets his rifle across it.
18 A Elias does the same, a beat late, splashing.
19 A They both flinch.
20 A ¶ He scans the far terrace.
* 21 A Smoke from a thatched hut, thin and lazy.
* 22 A A water buffalo standing in the mud with its head down.
* 23 A Nothing wrong.
* 24 A Nothing in the world wrong.
25 D MIRO: Wait here.
26 D ELIAS: Where are you going?
27 D MIRO: To look at the buffalo.
28 D ELIAS: It's just a buffalo.
29 D MIRO: Then it won't mind.
30 A ¶ He wades forward.
31 A Elias's eyes dart left, right, back to the hut.
* 32 A A wooden door creaks open on its own, and a tin bucket tips off the step; water flows across the planks.
33 A ¶ Both soldiers freeze.
* 34 A Then the buffalo lifts its head, and behind it, in the mud, rise rifle barrels, one after another, like stalks of rice in the dawn.
35 A ¶ Miro lunges back and grabs Elias by the collar, dragging him down behind the bund as the first shot cracks.
* 36 A Mud sprays.
37 A Elias fires blindly; Miro slaps the muzzle skyward, shouting, and they roll together along the slope, each pulling the other, each pushing, until they slam against a stone marker half-buried in the dyke and lie there panting, rifles tangled between them.
38 D ELIAS: You said it was clear!
39 D MIRO: I said it looked clear.
40 D ELIAS: That's not the same!
41 D MIRO: That's what I'm saying.
* 42 A ¶ Another volley whines overhead.
43 A Elias presses his face into the mud.
44 A Miro, breathing hard, reaches over and squeezes his shoulder.
45 D MIRO [CONT'D]: Count with me.
46 D ELIAS: To what?
47 D MIRO: To three.
48 A ¶ They count, silently, lips moving, then rise as one.

### SCENE s01449 | EXT. DRAINED BACKYARD POOL - SKATE SPOT - DUSK
Detected names (may be incomplete or contain aliases): JUNIPER OKAFOR-LEE, DEVONTE PRYCE, MIREILLE SANTOS, KASPER LUND, ANSELMA TREVINO
* 1 A ¶ A kidney-shaped pool, empty, graffitied in swirling teal and orange.
* 2 A Weeds in the cracks.
* 3 A A string of fairy lights sags between two fence posts.
4 A ¶ JUNIPER OKAFOR-LEE (16, hoodie, bleached tips) stands on the lip with her board tucked under her arm.
5 A DEVONTE PRYCE (17, long limbs, headphones around his neck) sits on the coping, pumping a flat tire.
6 A MIREILLE SANTOS (15, jean jacket covered in patches) films with a phone.
7 A KASPER LUND (16, bruised elbows, grin) balances on the diving board of an old above-ground slide.
8 A ANSELMA TREVINO (17, quiet, helmet always buckled) sits cross-legged at the shallow end, taping her knuckles.
9 D JUNIPER: Who's going first?
10 D DEVONTE: Who's going first?
11 D JUNIPER: ^I asked.
12 D DEVONTE: ^I asked.
13 D KASPER: Not it.
14 D MIREILLE: You can't say not it. You're already on the board.
15 D KASPER: I am a free spirit.
16 D ANSELMA: You are a hospital waiting to happen.
17 A ¶ Kasper leaps off the slide, lands in the pool in a clatter, skids on his hip, springs up, arms raised.
18 D KASPER: Landed it!
19 D MIREILLE: That wasn't a trick. That was a fall.
20 D KASPER: A fall with style.
21 A ¶ Juniper drops her board, drags a foot, rolls the first few feet and then drops in, carving high up one wall, down, across the floor and up the opposite wall, trailing a hiss of wheels on concrete while Devonte whoops from the coping, Mireille tracks her with the phone, Anselma pulls her tape tight with her teeth, and Kasper dodges aside, hands on his head, laughing, until Juniper kicks the board up, catches it, and stands at the deep end with her chest heaving.
22 D DEVONTE: That's the line.
23 D JUNIPER: It's my line.
24 D DEVONTE: It's the line we all do.
25 D ANSELMA (quietly): It's the line.
26 A ¶ Everyone looks at her.
27 A She shrugs, stands, slides her board off the lip.
28 D ANSELMA [CONT'D]: Wait for me.
29 A ¶ She rolls in.
* 30 A The wheels sing.
* 31 A The fairy lights flicker on, one bulb at a time, and the sky above goes from orange to violet to a deep, perfect blue.

### SCENE s01450 | EXT. GLASS ORCHARD - TWILIGHT
Detected names (may be incomplete or contain aliases): ORSOLYA THANE, KAEDMON ASH
* 1 A ¶ An orchard of fruit trees blown from glass.
* 2 A Trunks of smoky quartz, leaves of green crystal chiming faintly in a wind that smells of cold iron.
* 3 A Each tree bears hundreds of apples, translucent, glowing from within like lanterns.
* 4 A A winding path of white gravel leads to a stone well at the center.
5 A ¶ ORSOLYA THANE (60s, gardener, tall, a gown the color of dry moss, silver hair braided to her waist) moves between the trunks with a pair of shears.
6 A She trims nothing; she only touches the leaves, one by one, and listens as each rings a slightly different note.
7 A ¶ At the well, she stops.
8 A Rests a palm on its rim.
* 9 A From within rises a pale breath of mist.
10 D ORSOLYA (to the orchard): Another year. Another thousand apples. And not one of you has learned to fall.
* 11 A ¶ The leaves chime, as if in reply.
12 A She takes an apple from a low branch, turns it in her fingers.
* 13 A Inside, a small flame flickers, steady.
14 D ORSOLYA [CONT'D]: Patience. They said I was good at it.
15 A ¶ She sets the apple on the well's edge.
* 16 A Another chime, this one deeper, from the roots.
17 A She frowns.
18 A Kneels.
19 A Presses her ear to the quartz trunk.
* 20 A ¶ A footstep on the gravel.
* 21 A Not hers.
22 A ¶ KAEDMON ASH (30s, a courier's cloak patched with ravens' feathers, boots soaked to the knee, face gaunt, eyes too bright) steps out between the trees.
23 A He carries a leather satchel against his chest like an infant.
24 D KAEDMON: Gardener.
25 D ORSOLYA: You are not expected.
26 D KAEDMON: Nor am I welcome. I know the ritual.
27 D ORSOLYA: Then you know what the orchard does to those who bring iron.
28 A ¶ He opens his cloak.
* 29 A A dagger, bare, at his belt.
30 D KAEDMON: I am not the one who needs the iron.
31 A ¶ He reaches into the satchel and withdraws a seed the size of a child's fist, black and rough, ringed in thin gold wire.
* 32 A The orchard's chimes fall silent.
* 33 A Every leaf stills.
34 A ¶ Orsolya rises slowly, gripping the shears.
35 D ORSOLYA: Where did you get that?
36 D KAEDMON: Where do you think?
37 D ORSOLYA: From the one who swore never to plant it.
38 D KAEDMON: Promises rot faster than apples.
39 A ¶ He kneels and presses the seed into the white gravel.
* 40 A The ground shivers.
* 41 A A hairline crack spreads across the path, and within it a green thread rises, fast, thickening.
42 A Orsolya lunges.
43 A Kaedmon blocks her with his arm; they struggle, her shears tearing his cloak, his dagger skimming her sleeve, until she shoves him against a trunk and the glass sings out in a long, frantic scream.
44 D ORSOLYA: You will kill us all!
45 D KAEDMON: I will wake us.
* 46 A ¶ The root bursts from the earth, black, glittering, enormous, tearing the well in two.
* 47 A Apples fall.
* 48 A Hundreds, thousands, a rain of light, shattering on the gravel, each one releasing its tiny flame, and the orchard ignites, tree after tree, glowing gold and white, until the whole sky is fire and glass.

### SCENE s01451 | INT. TRANSCONTINENTAL EXPRESS - DINING CAR - NIGHT
Detected names (may be incomplete or contain aliases): HELENA MARCHBANKS, CONRAD ELLIS-WHYTE, OLUWASEUN
* 1 A ¶ White tablecloths.
* 2 A Silver on linen.
* 3 A Brass lamps with fringed shades sway to the rhythm of the rails.
* 4 A Outside, black prairie slips by.
5 A ¶ HELENA MARCHBANKS (40s, evening gown, diamonds at the throat, gloves she has not removed) sits alone at a table set for two.
* 6 A A glass of champagne sweats before her.
7 A ¶ CONRAD ELLIS-WHYTE (50s, tuxedo, white carnation, a face of polished walnut) enters from the vestibule.
8 A He pauses.
9 A Tugs his cuffs.
10 A Crosses.
11 A ¶ FITZGERALD "FITZ" OLUWASEUN (20s, porter's uniform, tray balanced on one palm) sets down a plate of oysters, glances at both of them, and withdraws toward the pantry door, listening.
12 D CONRAD: You're early.
13 D HELENA: You're late.
14 D CONRAD: I was detained.
15 D HELENA: By whom?
16 A ¶ He takes the chair across from her.
17 A Smooths the napkin over his knee.
18 D CONRAD: By nobody. By the bar. By myself.
19 D HELENA: That's three.
20 D CONRAD: That's honest.
21 A ¶ She lifts her glass.
22 A Does not drink.
23 A Sets it down.
24 D HELENA: I got your telegram.
25 D CONRAD: Ah.
26 D HELENA: It said "Meet me in the dining car, we need to talk."
27 D CONRAD: It did.
28 D HELENA: It did not say about what.
29 D CONRAD: I thought you'd know.
30 D HELENA: I suspected.
31 A ¶ Fitz shifts by the pantry door.
* 32 A A tray rattles.
33 A Both look at him.
34 A He smiles brightly, bows, vanishes.
35 D CONRAD: Is that boy listening?
36 D HELENA: Everyone listens on a train. It's a very small town.
37 A ¶ Conrad leans in.
38 A Lowers his voice.
39 D CONRAD: The Havilland papers. You gave them to the Senator.
40 D HELENA: I did.
41 D CONRAD: Without telling me.
42 D HELENA: I told you in the telegram I sent first. You never answered.
43 D CONRAD: I assumed it was a joke.
44 D HELENA: I assumed you read your mail.
45 A ¶ He slaps the table.
* 46 A Silverware leaps.
* 47 A The oysters shiver in their ice.
48 A Helena doesn't blink.
49 D CONRAD: Do you realize what you have done?
50 D HELENA: I have kept a promise, Conrad. It's unfamiliar to you.
51 D CONRAD: Forty years. Forty years of this firm, and you hand it to a politician over a cup of coffee.
52 D HELENA: Over a lunch.
53 D CONRAD: Oh, a lunch! That makes it civil.
54 D HELENA: It was a good lunch.
55 A ¶ He rises.
56 A She does not.
* 57 A The car lurches around a curve; a glass slides, drops, shatters.
58 A Fitz appears with a brush and a dustpan, sweeps without a word, and retreats.
59 A ¶ Conrad sits down again, heavily.
60 A Reaches for her hand.
61 A She lets him.
62 D CONRAD [CONT'D]: You were always the smarter one.
63 D HELENA: I know.
64 D CONRAD: I resent it.
65 D HELENA: I know that too.
66 D CONRAD: What now?
67 D HELENA: Eat your oysters. They're getting warm.
68 A ¶ He laughs, once, a surprised bark.
69 A Picks up a fork.
* 70 A The train howls into the dark.

### SCENE s01452 | INT. GRANDFATHER'S GARAGE - AFTERNOON
Detected names (may be incomplete or contain aliases): LEOPOLD VASQUEZ-MBEKI, SUNNIVA, MURRAY
* 1 A ¶ Pegboard walls, every wrench outlined in marker.
* 2 A A 1971 pickup under a canvas sheet.
* 3 A A radio on a shelf plays low static.
4 A ¶ LEOPOLD VASQUEZ-MBEKI (70s, coveralls, a pencil behind each ear) sits on an upturned bucket, sanding a chair leg.
5 A His granddaughter SUNNIVA (9, pigtails, oversized work gloves) holds the leg steady, tongue between her teeth.
* 6 A ¶ On a workbench, a cell phone vibrates against a coffee can.
7 A ¶ He glances at it.
8 A She glances at him.
9 A Neither moves.
10 D SUNNIVA: Is that Dad?
11 D LEOPOLD: Probably.
12 D SUNNIVA: Shouldn't you answer?
13 D LEOPOLD: Probably.
14 A ¶ He finishes the stroke.
15 A Blows dust off the wood.
16 A Hands her the leg.
17 A She runs her thumb along the grain, nods, and sets it on the bench.
* 18 A ¶ The phone goes still.
* 19 A A moment later, it buzzes again.
20 D LEOPOLD [CONT'D]: He's persistent.
21 D SUNNIVA: Like you.
22 D LEOPOLD: Like your grandmother.
23 A ¶ He wipes his hands on a rag.
24 A Reaches for the phone.
25 A Taps the screen.
26 A Sets it on the bench, on speaker.
27 D MURRAY [V.O.] (phone): Pop? You there?
28 D LEOPOLD: I'm here.
29 D MURRAY [V.O.] (phone): Is Sunni with you?
30 D LEOPOLD: She is. She's sanding.
31 D SUNNIVA (to the phone): I'm not sanding. He's sanding. I'm holding.
32 D MURRAY [V.O.] (phone): Okay. Holding. Can you hold till six? I'm stuck at the office.
33 D LEOPOLD: She can hold till Christmas.
34 D SUNNIVA: I can.
35 D MURRAY [V.O.] (phone): Thanks, Pop. Love you both.
36 A ¶ He hangs up before Leopold can reply.
37 A Leopold stares at the dead phone.
38 A Sunniva picks up the chair leg again and holds it out to him.
39 D SUNNIVA: He didn't say bye.
40 D LEOPOLD: He never does.
41 A ¶ He takes the leg.
42 A Resumes sanding.
43 A She sits on the floor, cross-legged, watching his hands.

### SCENE s01453 | INT. ARLO'S APARTMENT - ENTRY HALL - NIGHT
Detected names (may be incomplete or contain aliases): ARLO PENDERGAST
* 1 A ¶ Dark.
* 2 A A key rattles in the lock.
* 3 A The door swings inward, bumping a stack of unopened mail.
4 A ¶ ARLO PENDERGAST (40s, rain-soaked suit, a cake box under one arm, a party hat still on his head from a party that ended badly) steps inside.
5 A He closes the door with his heel.
6 A Flips the switch.
* 7 A ¶ Nothing.
8 D ARLO: Of course.
9 A ¶ He fumbles in the dark.
10 A Finds the wall.
11 A Finds a plant.
12 A Apologizes to the plant.
13 D ARLO [CONT'D]: Sorry.
* 14 A ¶ The red light of an answering machine blinks on a side table.
15 A He stares at it.
16 A He presses PLAY.
17 D ARLO [V.O.] (answering machine, cheerful): Hi! You've reached Arlo. I'm either out having an amazing time or I'm in the bath. Leave a message!
* 18 A ¶ A long beep.
* 19 A Silence.
20 A Arlo (the real one) exhales through his nose.
21 A ¶ He sets the cake box on the table.
22 A Opens it.
* 23 A Inside, a small cake, the frosting smeared, a single candle bent sideways.
* 24 A The words "HAPPY 40TH" have slid into "HAPPY 4 TH."
25 D ARLO: Happy 4th.
26 A ¶ He picks up the candle.
27 A Lights it with a match from his pocket.
28 A The flame illuminates his face from below, hollow-eyed, absurd under the paper hat.
29 A ¶ He sits on the floor.
* 30 A Tilts the cake toward himself.
* 31 A Takes a breath to blow it out.
* 32 A ¶ The answering machine clicks.
* 33 A Another message.
34 D ARLO [V.O.] (answering machine, slightly drunk): Hey, it's me. Future me. Just wanted to say, whatever you wished for, you're welcome.
35 A ¶ Arlo sits perfectly still.
* 36 A The candle burns down.
37 A ¶ He laughs.
38 A First small, then helpless, then in great wheezing gasps, tears running into the party hat's elastic.
39 A He blows out the candle, sits in the smoke, and eats the cake with his fingers.

### SCENE s01454 | INT. WEDDING CAKE BAKERY - DAY
Detected names (may be incomplete or contain aliases): GERTRUDE POSLUNS, BARNEY ODUYA
* 1 A ¶ A tiny shop, glass cases, tiers of fondant in a pastel parade.
* 2 A The air smells of butter and bad decisions.
3 A ¶ GERTRUDE POSLUNS (50s, flour to the elbows, apron stained rainbow) frosts a three-tier cake with a palette knife as if defusing a bomb.
* 4 A The door's bell jangles.
5 D GERTRUDE: We're closed.
6 A ¶ BARNEY ODUYA (30s, groom, tuxedo jacket, one shoe untied) bursts in, breathless.
7 D BARNEY: Please. Please. I need a cake.
8 D GERTRUDE: You have a cake. You ordered it in March.
9 D BARNEY: I ordered a cake in March. My fiancée ordered another cake in April.
10 D GERTRUDE: I know. I made both.
11 D BARNEY: They're in the same venue. At the same hour.
12 D GERTRUDE: Then you'll have double the dessert.
13 D BARNEY: I'll have double the divorce.
14 A ¶ He puts both hands on her glass case.
15 A She doesn't look up from the frosting.
16 D GERTRUDE: Which one is yours?
17 D BARNEY: The coconut.
18 D GERTRUDE: Hers?
19 D BARNEY: Also coconut.
20 D GERTRUDE: ^Then they're the same.
21 D BARNEY: ^Then they're the same.
22 A ¶ He stops.
23 A They look at each other.
* 24 A The bell above the door settles.
25 D GERTRUDE: So it's not a crisis.
26 D BARNEY: It's a crisis of principle.
27 D GERTRUDE: I deal in crises of sugar.
28 A ¶ She hands him a bag.
* 29 A Inside, two sprigs of mint.
30 D GERTRUDE [CONT'D]: Put one on each. They won't notice a difference.
31 D BARNEY: Thank you.
32 D GERTRUDE: Go get married.
33 A ¶ He bolts.
* 34 A The bell jangles.
35 A She resumes frosting.
* 36 A Outside, a car horn.

### SCENE s01455 | INT. VELODROME - TRACKSIDE INFIELD - EVENING
Detected names (may be incomplete or contain aliases): MARISOL VENTURA-KHAN, AUGUSTO NKEMELU, ANNOUNCER
* 1 A ¶ Steep banking of blond wood.
* 2 A Overhead lights hum.
* 3 A An empty stand rises in tiers.
* 4 A The track gleams like a polished spine.
5 A ¶ MARISOL VENTURA-KHAN (20s, skinsuit, helmet strapped under her chin) sits on a folding stool, bare feet in cleated shoes, staring at nothing.
6 A AUGUSTO NKEMELU (50s, coach, tracksuit, stopwatch on a lanyard) crouches in front of her, adjusting her cleat.
7 A ¶ She breathes.
8 A In.
9 A Out.
* 10 A A slow metronome.
11 A ¶ He clicks the watch.
12 A Doesn't look at it.
* 13 A ¶ A speaker crackles overhead.
14 D ANNOUNCER [V.O.] (PA, echoing): Riders to the line for the individual pursuit, final.
15 A ¶ She stands.
16 A He stands with her.
17 A She rolls her neck.
18 A He rubs her shoulder once, hard, the way you'd warm up an engine.
19 D AUGUSTO: Four minutes. Four-oh-seven. Same as practice.
20 D MARISOL: I know.
21 D AUGUSTO: You've done it a hundred times.
22 D MARISOL: I know.
23 D AUGUSTO: Then why is your hand shaking?
24 A ¶ She looks at it.
25 A It is.
26 A She flexes it.
27 A Stops.
28 D MARISOL: It's the cold.
29 D AUGUSTO: It's seventy degrees.
30 D MARISOL: Then it's the lights.
31 A ¶ He lets it go.
32 A Leads her to the bike.
33 A She mounts, clips in, and rolls up the banking to the starting gate, where a mechanic holds her saddle.
34 A Augusto stands at the rail, arms crossed.
35 D ANNOUNCER [V.O.] (PA): Five seconds.
36 A ¶ Her face is still.
37 A Her breath doesn't change.
38 A He stares at her, and for one second she looks up, directly at him, with an expression he cannot read.
39 D ANNOUNCER [V.O.] (PA): Go.
40 A ¶ She explodes off the line.
* 41 A The bike hums on the boards.
42 A She comes round the first bend, the second, her cadence steady, her back flat.
43 A He clicks the watch.
44 D AUGUSTO (under his breath): Good. Good.
* 45 A ¶ Lap three.
* 46 A Lap four.
47 A She holds the line.
48 A He relaxes, a small exhale.
* 49 A ¶ Lap seven.
50 A Her cadence stutters.
51 A He leans over the rail.
52 D AUGUSTO [CONT'D]: Marisol!
53 A ¶ She doesn't hear.
54 A Or she does, and ignores it.
55 A Her wheel drifts a hand's width up the banking.
56 D AUGUSTO [CONT'D]: Marisol, down! Hold your line!
57 A ¶ She comes off the banking too early, wobbles, corrects.
58 A The stands are empty but he shouts as if they were full.
59 D ANNOUNCER [V.O.] (PA): Lap eleven.
60 A ¶ She is a half-second off pace.
61 A He sees it.
62 A He sees it again at the next split.
63 A The stopwatch trembles in his hand.
64 A ¶ Then she does something unexpected.
65 A She sits up.
66 A Coasts.
67 A Rolls to a stop on the apron, unclips, and stands with her bike against her hip.
68 A ¶ He vaults the rail, runs.
69 D AUGUSTO [CONT'D]: What are you doing?
70 D MARISOL (calm): I'm done.
71 D AUGUSTO: You were on pace.
72 D MARISOL: I was on your pace.
73 A ¶ He stares.
74 A She takes off her helmet.
75 A Her hair is plastered to her forehead.
76 A She hands him the helmet like a gift.
77 D MARISOL [CONT'D]: Tell them I withdrew.
78 D AUGUSTO: Why?
79 D MARISOL: Because I wanted to see if you'd run.
80 A ¶ He looks down at his own feet.
81 A Then up, at her, and somewhere between rage and relief, his face crumples.
82 D AUGUSTO: That's a terrible reason.
83 D MARISOL: It's the only one I had.

### SCENE s01456 | EXT. OPEN OCEAN - LIFEBOAT - DAY
Detected names (may be incomplete or contain aliases): PETRA ISAKSSON, WILFRED OKONJO-HART, NOOR SAFFARINI, SWIMMER, RAMON
* 1 A ¶ A cracked orange lifeboat drifts on a flat grey sea.
* 2 A No land.
3 A PETRA ISAKSSON (30s, sunburned, hair matted) bails with a cut-off bottle.
4 A WILFRED OKONJO-HART (50s, one arm in a sling) watches the horizon.
5 A NOOR SAFFARINI (20s, lips split) lies across the thwart, eyes shut.
6 D PETRA: Water's rising.
7 D WILFRED: Keep bailing.
8 D NOOR (without opening her eyes): Someone's out there.
9 D WILFRED: You're dreaming.
10 D NOOR: I'm not.
* 11 A ¶ A splash.
12 A Petra freezes.
13 A Wilfred squints.
14 A ¶ A man's head breaks the surface twenty feet off.
15 A A SWIMMER (30s, shaved head, black wetsuit, mouth ringed in salt) stroking toward them with long, tired, unhurried pulls.
16 D PETRA: Oh my God.
17 D WILFRED: Pull him in.
18 A ¶ They grab his wrists.
19 A He thumps over the gunwale and lies there gasping.
20 A Petra offers the bottle.
21 A He drinks, coughs, drinks again.
22 D SWIMMER: Thank you.
23 D WILFRED: Where did you come from?
24 D SWIMMER: The cargo ship. It sank four days ago.
25 D NOOR: Four days?
26 D SWIMMER: Four days. I'm Ramon.
27 D PETRA: Ramon. Petra. This is Wilfred. That's Noor.
28 D RAMON: How many are you?
29 D WILFRED: Three.
30 D RAMON: Four, now.
31 A ¶ He smiles.
32 A Noor opens one eye, and does not smile back.

### SCENE s01457 | INT. SUDS & SHINE CAR WASH - TUNNEL - DAY
Detected names (may be incomplete or contain aliases): DETECTIVE WALTER BRZEZINSKI, LULU, FAIRWEATHER
* 1 A ¶ A tunnel of whirring brushes, foam, and blue neon.
* 2 A Water thrums on the roof.
* 3 A Rollers drag a battered Buick through a bath of pink soap.
4 A ¶ DETECTIVE WALTER BRZEZINSKI (50s, trench coat, fedora brim dripping) leans against the tunnel wall, arms folded, ignoring the spray.
5 A Across from him, in a plastic chair beside the dryer vents, sits LUCIANA "LULU" FAIRWEATHER (30s, red leather jacket, acrylic nails, a trembling cigarette).
6 D WALTER: You said you'd tell me.
7 D LULU: I said I'd think about it.
8 D WALTER: You've thought for two weeks.
9 D LULU: It's a big thought.
* 10 A ¶ The Buick passes.
* 11 A A brush slaps its windshield with a heavy, rhythmic thud.
* 12 A Foam smears the glass.
13 D WALTER: Who ordered the hit?
14 D LULU: Walter.
15 D WALTER: Lulu.
16 D LULU: If I say it, I'm dead.
17 D WALTER: If you don't, so is the next kid.
18 A ¶ She looks at the cigarette.
19 A Looks at the dryers.
20 A Stubs the cigarette against the chair.
21 D LULU: It was the guy who runs this place.
22 A ¶ Walter doesn't move.
* 23 A The tunnel roars.
24 A Slowly, he turns his head toward the glass booth by the exit, its light on, its door ajar.
25 D WALTER: Don't look.
26 D LULU: I'm not.
27 D WALTER: Stay seated.
28 D LULU: I'm seated.
29 A ¶ He walks.
30 A Not quickly.
31 A Not slowly.
32 A Past the dryers, past the wax station.
33 A His hand slips inside his coat.
* 34 A ¶ A rubber flap swings.
* 35 A A roar of water.
36 A The Buick, wet, shining, rolls between him and the booth like a curtain, and by the time it clears, he is at the door with his gun lowered.
* 37 A The booth is empty.
* 38 A A coffee cup steams on the counter beside a phone off its hook.
39 D WALTER [CONT'D] (calm): Gus is gone.
40 D LULU (from the chair, almost a whisper): Is it over?
41 D WALTER: It's over.
42 A ¶ She picks up another cigarette.
43 A Her hand is perfectly steady now.
44 A She lights it, and the foam settles in the tunnel's blue glow.

### SCENE s01458 | INT. ICE-FISHING SHACK - NIGHT
Detected names (may be incomplete or contain aliases): GIDEON PARR, HUGO LEDBETTER, WOMAN, AUDREY
* 1 A ¶ A plywood box on a frozen lake.
* 2 A A propane heater glows orange in the corner.
* 3 A Two holes cut in the floor, black water showing through, lines dangling.
* 4 A A thermometer reads minus nineteen.
* 5 A Windows frosted white.
6 A ¶ GIDEON PARR (50s, parka, wool cap, a face weathered by wind) sits on an overturned bucket, jigging a line with two fingers.
7 A HUGO LEDBETTER (50s, same parka but green, a thermos in his lap, mustache stiff with frost) sits across from him, doing nothing.
8 D GIDEON: Nothing.
9 D HUGO: Nothing.
10 D GIDEON: Nothing for three hours.
11 D HUGO: That's why they call it fishing.
12 D GIDEON: They call it that because of the fish.
13 A ¶ Hugo pours coffee.
* 14 A It steams.
15 A He passes the cup.
16 A Gideon takes it, warms his hands, and sips.
17 D GIDEON [CONT'D]: Heard something.
18 D HUGO: Wind.
19 D GIDEON: Wasn't wind.
20 D HUGO: Ice shifting. It does that.
21 A ¶ They listen.
* 22 A Faint, a soft scratch, rhythmic, like fingernails dragging over the lake's underside.
23 D GIDEON: That's not ice.
24 D HUGO: Gideon.
25 D GIDEON: Hugo.
* 26 A ¶ The scratch circles the shack.
* 27 A Passes the window.
* 28 A The frost on the glass takes the shape of a palm, then gently fades.
29 A ¶ Both men stand.
30 A Hugo reaches for the door latch.
31 A Gideon grips his arm.
32 D GIDEON [CONT'D]: Don't.
33 D HUGO: If it's a person, they'll freeze.
34 D GIDEON: It's minus nineteen. No person is out there.
* 35 A ¶ Knock.
* 36 A Three, soft.
37 A A voice outside, thin, pleading.
38 D WOMAN [O.S.]: Please. I'm cold.
39 A ¶ They stare at each other.
40 A Hugo lifts the latch an inch.
* 41 A The wind pours in, and with it a smell of lake mud and violets.
42 A Gideon hauls him back and slams the latch shut, and the knocking resumes, faster, three, three, three, as the heater gutters and Hugo, whose hands are shaking, shoves Gideon aside, flings the door open, and stands blinking at a figure on the ice.
43 A ¶ A WOMAN (30s, nightgown, barefoot, hair frozen in rope-like strands) looks up at them.
* 44 A Her lips are blue.
* 45 A Her eyes are perfectly dry.
46 D WOMAN: I'm Audrey. I fell through in March.
47 A ¶ Hugo takes a step back.
48 A Gideon grabs the rifle from the corner and aims, hands shaking.
49 D GIDEON: Stay back.
50 D AUDREY: I just want to come in.
51 D HUGO: Nobody invited you.
52 D AUDREY: You did. You cut the hole.
53 A ¶ She points to the floor.
* 54 A Through the black water in the fishing hole, a pale hand is rising, fingers spread, reaching up toward the lamp.
55 A ¶ Gideon fires.
* 56 A The shot booms.
* 57 A Ice cracks in a long white line across the lake, and the wind dies.
* 58 A ¶ When the echo fades, Audrey is gone.
* 59 A The hole in the floor is just a hole, black and still.
60 A Hugo lowers himself onto the bucket.
61 A Gideon sets down the rifle.
62 D HUGO: Pour me a coffee.
63 D GIDEON: Thermos is empty.
64 D HUGO: Then we wait.
65 A ¶ They sit in the dim orange glow, listening to the lake settle.
66 A Neither touches his line.

### SCENE s01459 | INT. MUSEUM OF MINIATURE HOUSES - NIGHT
Detected names (may be incomplete or contain aliases): PRUDENCE KELLAWAY, ZINNIA BELLWETHER
* 1 A ¶ A hush of glass cases.
* 2 A Dollhouses on pedestals: Victorian mansions, adobe cottages, a tiny lighthouse.
* 3 A Each lit from within by pin-sized lamps.
4 A ¶ PRUDENCE KELLAWAY (40s, curator's blazer, flashlight clipped to her belt) makes her rounds, brushing dust from a case with a feather duster.
5 A Behind her, trailing a step too close, comes ZINNIA BELLWETHER (20s, intern, overlarge cardigan, tote bag of cleaning supplies).
6 D PRUDENCE: Mind the north wing. The Whitcombe house is on a loose pedestal.
7 D ZINNIA: Which one is Whitcombe?
8 D PRUDENCE: The one with the attic.
9 A ¶ Zinnia peers at a case.
* 10 A A Georgian townhouse, its windows aglow.
* 11 A In the tiny attic window, a doll sits in a rocking chair, facing the glass.
12 D ZINNIA: She's looking at me.
13 D PRUDENCE: They're all looking at someone.
14 A ¶ She keeps walking.
15 A Zinnia lingers.
16 A She bends close.
17 A Her breath fogs the glass.
18 D ZINNIA: Was she facing the wall earlier?
19 D PRUDENCE: Who?
20 D ZINNIA: The doll. This afternoon. She was facing the wall.
21 D PRUDENCE: Dolls don't move.
22 D ZINNIA: I know.
23 A ¶ Prudence turns, annoyed, to check.
24 A She stops.
25 A Her face goes still.
26 A She crouches beside Zinnia, both women at the level of the miniature window.
* 27 A ¶ In the attic, the little rocking chair is rocking.
* 28 A Slowly.
* 29 A Back, forth.
* 30 A The doll's head has turned toward them.
31 A ¶ Prudence grips Zinnia's arm.
32 A Zinnia grips back.
33 A Neither speaks.
* 34 A ¶ The tiny lamps in the Georgian house flicker out, one floor at a time, until only the attic glows.
35 D PRUDENCE (barely a whisper): Back away.
36 D ZINNIA: I can't.
37 D PRUDENCE: Why not?
38 D ZINNIA: She's holding my hand.
39 A ¶ Prudence looks down.
* 40 A Zinnia's fingers, still wrapped around her sleeve, are pale.
* 41 A A thread of white yarn runs from Zinnia's cuff, taut, across the floor, and into a hairline gap beneath the case.
42 A ¶ Prudence snaps the thread with a tug.
* 43 A The doll in the attic tips from her chair and tumbles out of sight.
* 44 A The lamp dies.
* 45 A The whole museum goes dark except for the flashlight at Prudence's belt, trembling with her breath.
46 D PRUDENCE [CONT'D]: We're leaving.
47 D ZINNIA: Yes.
48 A ¶ They run.
* 49 A Behind them, in a hundred miniature houses, a hundred tiny lights wink on.
