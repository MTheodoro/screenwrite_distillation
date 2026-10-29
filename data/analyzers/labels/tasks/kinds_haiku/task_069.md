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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0169.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s02490 | INT. GRUYERES AGING CELLAR - NIGHT
Detected names (may be incomplete or contain aliases): PETRA VOLKOVA, MILOS DRAGIC, AKIKO TANABE, NAILAH ROSS
* 1 A ¶ A limestone cave lit by work lamps.
* 2 A Ten thousand wheels of cheese on spruce shelves, rising in towers to the vault.
* 3 A The air smells of ammonia and cold stone.
4 A ¶ PETRA VOLKOVA, 40s, crew boss, headlamp, climbing harness.
5 A MILOS DRAGIC, 30s, rigger, clips a carabiner.
6 A AKIKO TANABE, 20s, hacker, crouched over a ruggedised laptop on a cheese crate.
7 A NAILAH ROSS, 30s, driver, stands at the cellar door with a thermal flask.
8 D PETRA: Report.
9 D AKIKO: Cameras on a loop. Eleven minutes of grace.
10 D MILOS: Eleven is plenty.
11 D NAILAH: Truck's at the barn. Engine warm.
12 D PETRA: Miloš, rope.
13 A ¶ He tosses a coil.
14 A She catches it.
15 A Anchors it to a pillar.
16 A Tests the tension with her whole weight.
17 D AKIKO: The vault door is on a thermal sensor. If it drops below four degrees, it locks.
18 D MILOS: It's twelve in here.
19 D AKIKO: It's twelve out here. Inside it's six.
20 D PETRA: Then we bring a heater.
21 D NAILAH: I've got a heater.
22 A ¶ She lifts a silver case.
23 A Opens it.
* 24 A A compact space heater.
25 D NAILAH [CONT'D]: Brought two.
26 D MILOS: You think of everything.
27 D NAILAH: I think of heaters.
28 D PETRA: Akiko, how long on the lock?
29 D AKIKO: Four minutes.
30 D PETRA: Make it three.
31 D AKIKO: Make me a coffee.
32 D NAILAH: You want coffee?
33 D AKIKO: I want three minutes. Coffee is a metaphor.
34 D MILOS: It's a good one.
35 A ¶ They move to the vault door.
* 36 A A circular steel hatch set into the rock, rimed with frost.
37 A Petra runs a glove over it.
38 D PETRA: Seventeen wheels in there, aged forty years. Each one worth a Porsche.
39 D MILOS: They smell like feet.
40 D NAILAH: Porsches don't.
41 D PETRA: Focus.
42 A ¶ Akiko plugs a cable.
43 A Taps a key.
* 44 A The hatch ticks.
45 D AKIKO: Two minutes forty.
46 D MILOS: That was fast.
47 D AKIKO: It's a cheap lock. They trusted the cheese.
48 D PETRA: Miloš, harness.
49 A ¶ He steps in.
50 A Petra clips him on.
51 A Akiko cracks the hatch.
* 52 A ¶ Cold air floods out.
* 53 A Inside, the wheels gleam amber in the work lamps.
54 D MILOS (whispering): Beautiful.
55 D NAILAH: Don't sing to it.
56 D PETRA: Nailah, the dolly.
57 A ¶ She rolls it over.
58 A Together they lift the first wheel, a hundred pounds of rind and rot.
* 59 A It sits on the dolly like a sleeping animal.
60 D AKIKO: Eight minutes left.
61 D PETRA: Faster.
62 D MILOS: I've got it.
63 D NAILAH: I've got the second.
64 A ¶ They work.
* 65 A A rhythm.
* 66 A Grunts, breath, the click of the dolly.
67 D PETRA: Third.
68 D MILOS: Third.
69 D AKIKO: Seven minutes.
70 D NAILAH: Fourth.
71 D PETRA: Good.
* 72 A ¶ Lamplight swings across the stacked wheels.
* 73 A A distant sound.
74 A All four stop.
75 D NAILAH (whisper): Was that the door?
76 D AKIKO: Cat.
77 D PETRA: There's no cat.
78 D AKIKO: Cat in the barn.
79 D PETRA (a beat): Keep working.
80 A ¶ They keep working.
* 81 A Fifth wheel.
* 82 A Sixth.
83 D AKIKO: Five minutes.
84 D MILOS: Seventh.
85 D NAILAH: We have room for nine.
86 D PETRA: Then we take nine.
87 A ¶ They load.
* 88 A The truck horn, faint, beeps twice from outside.
89 A All four glance up.
90 D PETRA [CONT'D]: That's the signal. Out.
91 A ¶ They dismantle the rig.
* 92 A Rope coils.
* 93 A Lamp clicks off.
* 94 A The vault door seals.
95 A ¶ They file out into the night, one wheel short of nine, and none of them says so.

### SCENE s02491 | INT. HARBORSIDE TACKLE SHOP - DAY
Detected names (may be incomplete or contain aliases): EUNICE MARLOWE, DARIUS MARLOWE
* 1 A ¶ Fishing rods in racks.
* 2 A Lures in glass jars.
* 3 A A cat sleeps on a coil of rope.
* 4 A Rain on the window.
5 A ¶ EUNICE MARLOWE, 60s, cardigan, glasses pushed up in her hair, sorts hooks into little drawers.
6 A She works without hurry.
* 7 A ¶ The bell on the door jingles.
8 A DARIUS MARLOWE, 30s, her son, damp jacket, steps in, shaking out his umbrella.
9 D DARIUS: Mom.
10 D EUNICE: You're early.
11 D DARIUS: Train was on time.
12 D EUNICE: That never happens.
13 A ¶ He leans on the counter.
14 A She doesn't stop sorting.
15 D DARIUS: You look tired.
16 D EUNICE: I'm sixty-three.
17 D DARIUS: You look tired for sixty-three.
18 A ¶ She smiles at the drawer.
19 A Closes it.
20 D EUNICE: There's tea in the back.
21 D DARIUS: I'm fine.
22 D EUNICE: Then there's tea for me.
23 A ¶ She goes through the curtain.
24 A He wanders the aisles.
25 A Lifts a lure shaped like a tiny silver fish.
26 A Turns it in the light.
27 A ¶ She returns with two cups.
28 A Sets one by him, not looking at him.
29 A He takes it.
30 D DARIUS [CONT'D]: Dad's rods are still on the wall.
31 D EUNICE: Where else would they be?
32 D DARIUS: You could sell them.
33 D EUNICE: They're not for sale.
34 D DARIUS: You're closing the shop.
35 A ¶ Her cup stops halfway to her mouth.
36 A She sets it down.
37 D EUNICE: Who told you?
38 D DARIUS: Harbour Authority sent a letter to me. I'm still on the lease.
39 D EUNICE: I forgot that.
40 D DARIUS: You forgot a lot of things.
41 D EUNICE: Darius.
42 D DARIUS: How long, Mom?
43 A ¶ She drums her fingers on the counter.
* 44 A The cat stirs.
45 D EUNICE: April. They gave me till April.
46 D DARIUS: And the rest?
47 D EUNICE: What rest?
48 D DARIUS: The rest that's in the folder you hid in the register.
49 A ¶ She stares at him.
50 A He opens the till.
51 A Takes out a manila folder.
52 A Lays it on the counter between them.
53 D DARIUS [CONT'D]: Dr. Anand called me too.
54 D EUNICE (very quietly): He had no right.
55 D DARIUS: He had a patient's son's number.
56 A ¶ She slides the folder to her side.
57 A Opens it.
58 A Closes it.
59 A Her hand rests on top.
60 D EUNICE: I wanted to tell you at Easter.
61 D DARIUS: It's April now, Mom.
62 A ¶ She laughs, shakily.
63 A Wipes her eye with the heel of her hand.
64 D EUNICE: Would you like the rods?
65 D DARIUS: I'd like you to come live with me.
66 D EUNICE: I'd have to bring the cat.
67 D DARIUS: Bring the cat.
68 D EUNICE (a beat): Bring the rods.
69 A ¶ He nods.
* 70 A The rain softens against the glass.
* 71 A The cat jumps onto the counter and settles on the folder.

### SCENE s02492 | INT. COMMUNITY CENTRE - POTTERY CLASS - EVENING
Detected names (may be incomplete or contain aliases): YETUNDE ADEBAYO, EPHRAIM PRUITT, MARISKA JANSEN, WILFRED TANG
* 1 A ¶ Four wheels spin.
* 2 A Slip splashes the floor.
* 3 A A kiln sighs in the corner.
4 A ¶ YETUNDE ADEBAYO, 50s, instructor, stands at the front with a clay bowl held aloft.
5 A EPHRAIM PRUITT, 70, retired, hunches over a collapsing vase.
6 A MARISKA JANSEN, 30s, dyed blue hair, flicks clay off her fingers.
7 A WILFRED TANG, 40s, accountant, wears a plastic apron over a three-piece suit.
8 D YETUNDE (to the class): Centre your clay, everyone. Centre!
9 D MARISKA (to Ephraim): Yours looks like a hat.
10 D EPHRAIM: It's meant to.
11 D WILFRED (muttering, to himself): Not my best vase. Not my best vase at all.
12 D YETUNDE: Wilfred, pressure with the heel of your hand.
13 D WILFRED: That's what I'm doing.
* 14 A ¶ His vase leans, folds, and slides off the wheel.
15 D EPHRAIM (to Wilfred): Better luck.
16 D YETUNDE (to the room): Take a breath. Pottery is patience.
* 17 A ¶ The kiln timer BUZZES.
18 A Everyone jumps.
19 A Mariska flings a handful of slip across Ephraim's shirt.
20 D MARISKA: Sorry!
21 D EPHRAIM (to himself): Should've taken up golf.
22 A ¶ Yetunde sets down her bowl.
23 A Sighs.
24 A Looks at the wreckage.
25 A Wilfred looks at the vase on the floor.
26 D WILFRED (soft): Would anyone mind if I just threw it out?

### SCENE s02493 | INT. FLOWER WHOLESALE MARKET - 4 A.M.
Detected names (may be incomplete or contain aliases): HARLAN, KENDRA, TOBY, SOLOMON, BIANCA, GREER
* 1 A ¶ Buckets of roses.
* 2 A Concrete floor slick with water.
* 3 A Cold light.
4 A ¶ HARLAN, 50s, dock boss, counts stems.
5 A KENDRA, 30s, buyer, checks a list.
6 A TOBY, 20s, runner, hauls a cart.
7 A SOLOMON, 60s, auctioneer, rings a handbell.
8 A BIANCA, 40s, florist, argues over a price.
9 A GREER, 30s, plainclothes, stands unnoticed by the lilies.
10 A ¶ Harlan sees the wire in the lilies.
11 A He drops the clipboard.
12 A Kendra hears the clatter and looks up.
13 A She sees Greer's badge, then Toby's cart, and she slides a hand into her bag.
14 A ¶ Toby shoves the cart.
* 15 A It rolls into Greer.
* 16 A Roses fly.
17 A Bianca screams.
18 A Solomon rings the bell like a fire alarm.
19 A ¶ Greer stumbles but draws.
20 A Harlan raises both hands.
21 A Kendra's hand stays in her bag.
22 A Greer points at her.
23 A ¶ Everyone stops.

### SCENE s02494 | INT. TIDE MILL MUSEUM - NIGHT
Detected names (may be incomplete or contain aliases): MADAME ODILE FONTAINE, FENWICK PRIDDY, LAKSHMI IYER, ULRICH BAUMANN, DELILAH MWANGI, FRANK
* 1 A ¶ A great timber wheel hangs motionless in a dry race.
* 2 A Pale moonlight leaks through slatted windows and lays long bars across the floor.
* 3 A Millstones the size of cartwheels sit in their cases like fallen moons.
4 A ¶ Five figures in dark clothes drop one by one from a skylight on ropes.
5 A MADAME ODILE FONTAINE, 60s, the planner, lands first, soundless, silver hair under a black scarf.
6 A FENWICK PRIDDY, 50s, the safecracker, follows, wheezing.
7 A LAKSHMI IYER, 30s, the electrician, lands lightly.
8 A ULRICH BAUMANN, 40s, the muscle, thuds down last and winces at the noise.
9 A And DELILAH MWANGI, 30s, the inside woman, steps out of the shadows in a museum fleece, a lanyard around her neck.
10 D ODILE (to the group): Positions.
11 A ¶ They scatter without a word.
12 A Lakshmi to the fuse box.
13 A Ulrich to the stairwell.
14 D FENWICK (muttering): Forty years since I did a window.
15 D ODILE (to Fenwick): You did it last month.
16 D FENWICK: That was a different window.
17 D LAKSHMI: Power's mine in ninety seconds.
18 D DELILAH (to Odile): The case is on the second floor. Under the gears.
19 D ODILE: And the guard?
20 D DELILAH: Asleep. I put something in his tea.
21 D ODILE (low): Good girl.
22 A ¶ They climb.
* 23 A Wooden stairs complain under each step.
* 24 A On the second floor, behind a cluster of cogs, a glass case holds a bronze tide-clock the size of a loaf.
25 A ¶ Fenwick kneels.
26 A Puts his stethoscope to the lock.
27 A Closes his eyes.
28 D FENWICK: Come on, sweetheart.
29 D LAKSHMI [O.S.] (from below, a stage whisper): Lights in five.
30 D ODILE (to everyone): Hold your breath.
* 31 A ¶ The mill goes black.
* 32 A In the dark, a click.
* 33 A A second click.
* 34 A The case glass lifts.
35 A ¶ Fenwick lifts the clock out with both hands.
36 A Cradles it like an infant.
37 D FENWICK: Got her.
* 38 A ¶ A beam of white light sweeps the room.
39 A The guard in the doorway, rubbing his eyes.
40 A A thermos in his hand.
41 A Everyone freezes.
42 D FRANK [O.S.] (slurred): Delilah?
43 A ¶ Delilah steps forward, into the light, smiling.
44 D DELILAH: Frank. You should be asleep.
45 D FRANK [O.S.]: I was. Had a dream.
46 A ¶ She crosses to him.
47 A Slips an arm round his shoulder.
48 A Turns him around.
49 D DELILAH: Back to bed, Frank.
50 A ¶ He lets himself be steered.
51 A Odile exhales.
* 52 A The beam retreats.
53 A Ulrich's fist unclenches.
54 A ¶ Fenwick tucks the clock into a velvet bag.
55 A They file toward the skylight, silent and fast.
56 A ¶ Last up the rope, Odile glances back at the great wheel.
57 A She touches two fingers to her lips and presses them to the timber as she passes.

### SCENE s02495 | INT. DIALYSIS UNIT - NIGHT
Detected names (may be incomplete or contain aliases): ABIOLA SOYINKA, CASTELLANOS
* 1 A ¶ Chairs in a row.
* 2 A Machines whirring.
3 A One patient.
4 A One nurse.
5 A ¶ ABIOLA SOYINKA, 40s, nurse, ID badge clipped to scrubs, checks a monitor.
6 A MR. CASTELLANOS, 70s, patient, in the third chair, arm in the machine, stares at the ceiling.
7 D ABIOLA: Pressure's good.
8 D CASTELLANOS: Always is.
9 D ABIOLA: Tonight?
10 D CASTELLANOS: Always.
11 A ¶ She adjusts the line.
12 A He doesn't flinch.
* 13 A ¶ Quiet.
* 14 A The machine hums.
15 D CASTELLANOS [CONT'D]: My daughter called.
16 D ABIOLA: That's nice.
17 D CASTELLANOS: She's coming Thursday.
18 D ABIOLA: That's nice.
19 A ¶ He turns his head.
20 A Studies her.
21 D CASTELLANOS: You say that twice.
22 D ABIOLA: Do I?
23 D CASTELLANOS: You do when you don't believe it.
24 A ¶ She smiles.
25 A A small one.
26 A Checks the clock.
* 27 A ¶ An alarm shrieks.
28 A Both flinch.
29 A Abiola spins to the monitor.
* 30 A Red.
31 D ABIOLA: Mr. Castellanos. Look at me.
32 D CASTELLANOS: I'm fine.
33 D ABIOLA: Stay still.
34 A ¶ She reaches for his arm.
35 A He pulls it away.
* 36 A The line tugs.
* 37 A Blood beads at the needle.
38 D CASTELLANOS: Don't.
39 D ABIOLA: You'll hurt yourself.
40 D CASTELLANOS: I want to go home.
41 D ABIOLA: Not yet.
42 A ¶ He rips at the tape.
43 A She seizes his wrist.
44 A For a moment they grapple, nurse and patient, old hands and young.
* 45 A The machine screams.
* 46 A The chair rocks.
47 A ¶ Then he stops.
48 A Goes limp.
49 A She holds his wrist.
50 A He holds her gaze.
51 D CASTELLANOS [CONT'D] (whispering): Thursday.
52 D ABIOLA: Thursday.
53 A ¶ She resets the machine.
* 54 A The alarm falls silent.
55 A She presses gauze to his arm.
56 A He lets her.
57 D CASTELLANOS: You say it right that time.
58 D ABIOLA: I know.
59 A ¶ She tapes the gauze down.
60 A Checks the line.
61 A Pats his hand.
62 A Neither speaks.
* 63 A The machine settles back into its slow, patient hum.

### SCENE s02496 | EXT. LISTENING POST - NO MAN'S LAND - NIGHT - 1917
Detected names (may be incomplete or contain aliases): DRUMMOND, YUSUF ARSLAN, CAPTIVE, LEOPOLD
* 1 A ¶ A shell crater, ankle-deep in water.
* 2 A Barbed wire above.
* 3 A Star shells pop on the horizon.
4 A ¶ SGT. DRUMMOND, 30s, mud to the thighs, kneels at the lip with a rifle.
5 A LT. YUSUF ARSLAN, 20s, officer, binoculars round his neck, crouches beside him.
6 A A CAPTIVE, 20s, hands tied, kneels in the water at their feet, shivering in a grey tunic.
7 D DRUMMOND: He's a boy.
8 D ARSLAN: He's a prisoner.
9 D DRUMMOND: He's a boy, sir.
10 D ARSLAN: Ask his name.
11 D DRUMMOND (to the Captive): Name?
12 A ¶ The Captive says nothing.
13 A Drummond prods him with the rifle.
14 D CAPTIVE (thick accent): Leopold.
15 D DRUMMOND: Leopold what?
16 D LEOPOLD: Just Leopold.
17 D ARSLAN: Ask him where the machine gun is.
18 D DRUMMOND: Where's the gun, Leopold?
19 D LEOPOLD: No gun.
20 D ARSLAN: He's lying.
* 21 A ¶ A shell whistles overhead.
22 A The three duck.
* 23 A The crater erupts in mud.
24 A Leopold breaks for the wire, bound hands in front of him.
25 A Drummond lunges and catches his ankle.
26 A Arslan grabs his collar.
27 A All three go down in the water, thrashing.
28 A ¶ Drummond pins him.
29 A Leopold goes limp.
30 A Arslan pulls Drummond off.
31 D ARSLAN [CONT'D]: Enough.
32 A ¶ They crouch, breathing.
33 A Leopold lies in the water, chest heaving.
34 D LEOPOLD (whispering): My brother is in your trench. Joachim. He surrendered in March.
35 A ¶ Drummond looks at Arslan.
36 D DRUMMOND: Joachim? Big lad, cigarette burns?
37 D LEOPOLD: Yes.
38 D DRUMMOND: He's at the aid post. Alive.
39 A ¶ Leopold closes his eyes.
40 A Arslan lowers the binoculars.
41 A Drummond cuts the rope on the boy's wrists.
* 42 A ¶ Another shell.
43 A They duck again.
44 A Leopold, free, stays down.

### SCENE s02497 | INT. WHALE-BONE APOTHECARY - NIGHT
Detected names (may be incomplete or contain aliases): SORREL VANE, OSWIN GRIST
* 1 A ¶ A shop built inside the ribcage of a dead leviathan.
* 2 A Ribs arch overhead like cathedral beams.
* 3 A Jars glow green on bone shelves.
4 A ¶ SORREL VANE, 20s, apprentice, grinds something blue in a mortar.
* 5 A A cauldron simmers behind her.
* 6 A ¶ The door swings open on a gust of salt air.
* 7 A No one is there.
8 A Sorrel looks up.
9 D SORREL: Hello?
* 10 A ¶ The jars hum.
* 11 A A drip falls from the roof of the ribcage.
* 12 A Another.
13 D SORREL [CONT'D]: We're closed.
* 14 A ¶ The bell above the door rings, by itself.
15 D SORREL [CONT'D]: Show yourself.
16 A ¶ A shape in the corner thickens.
17 A Flickers.
18 A Resolves.
19 A ¶ OSWIN GRIST, ancient, barnacle-crusted, a drowned sailor in a coat of kelp, steps from the shadows.
20 A Water pours from his sleeves.
21 D OSWIN: I need a remedy, girl.
22 D SORREL: For what?
23 D OSWIN: Breathing.
24 A ¶ Sorrel sets down the mortar.
* 25 A The cauldron boils over.

### SCENE s02498 | INT. LIGHTHOUSE KEEPER'S COTTAGE - CHRISTMAS EVE - NIGHT - 1948
Detected names (may be incomplete or contain aliases): AMBROSE FINCH, GLADYS FINCH, TILLY
* 1 A ¶ A small, snug kitchen.
* 2 A Snow against the window.
* 3 A A fir tree no taller than a broom stands in a bucket, hung with paper stars.
* 4 A The big lamp turns slowly above them, sweeping its beam through the frost.
5 A ¶ AMBROSE FINCH, 40s, the keeper, in a heavy jersey, carves a goose.
6 A His wife, GLADYS FINCH, 40s, bustles with a gravy boat.
7 A Their daughter TILLY, 8, hides under the table with a stuffed rabbit.
8 D GLADYS (to the room): Dinner in five!
9 D AMBROSE (to Tilly): Come out, poppet.
10 D TILLY: No.
11 D AMBROSE: Why not?
12 D TILLY: Santa'll see the lamp and think we're a ship.
13 A ¶ Ambrose puts the carving knife down.
14 A Crouches.
15 A Looks under the table.
16 D AMBROSE: Santa's got a better chart than that.
17 D TILLY: Does he?
18 D AMBROSE: Best in the world.
19 D GLADYS (muttering, at the stove): I hope he's got a better goose than this.
20 D AMBROSE: I heard that.
21 A ¶ Tilly slides out.
22 A Rabbit in hand.
23 A Ambrose lifts her.
24 A Gladys sets the gravy on the table and the three of them stand there, laughing.
* 25 A The rabbit falls.
26 A Tilly lunges for it.
27 A Ambrose steps back.
28 A Gladys catches the gravy boat as it tips.
* 29 A Everything clatters.
30 D TILLY: Sorry!
31 D GLADYS (to herself): Merry Christmas.
32 A ¶ Ambrose rights the chairs.
* 33 A A knock at the door.
34 A They freeze.
35 D AMBROSE: Who'd come up here tonight?
36 A ¶ Gladys opens the door.
* 37 A Wind, snow, nobody.
* 38 A A parcel in brown paper on the step.
39 D GLADYS (calling into the dark): Hello?
40 D TILLY: It's Santa!
41 D AMBROSE (low): Gladys. Close the door.
42 A ¶ She closes it.
* 43 A The parcel sits on the table.
44 A Tilly claps.
45 A Ambrose cuts the string.
* 46 A Inside, a small brass ship's bell and a card.
47 D GLADYS: What does it say?
48 D AMBROSE: "To the light that brought us home."
49 A ¶ Ambrose rings the bell once.
* 50 A Soft.
* 51 A The lamp above turns on, steady and bright.
52 A Gladys wipes her eyes with the corner of her apron.
53 D GLADYS (to everyone): Eat before it gets cold.

### SCENE s02499 | INT. RIVERBOAT COURTROOM - DAY - 1936
Detected names (may be incomplete or contain aliases): JUDGE PRENDERGAST HOLCOMB, VIOLA STARLING, SILAS DELACROIX, WITNESS, ODELL BANKS
* 1 A ¶ A converted paddle steamer docked at a Mississippi landing, its saloon turned into a courtroom.
* 2 A A chandelier sways.
* 3 A Through the porthole windows brown water slides past.
4 A ¶ JUDGE PRENDERGAST HOLCOMB, 70s, white-whiskered, ancient, presides from a bench made of a bar counter.
5 A VIOLA STARLING, 30s, defence counsel in a navy suit and pearls, stands with her notes.
6 A At the prosecution table, SILAS DELACROIX, 50s, pot-bellied, in a cream suit, fans himself with a folder.
7 A On the witness stand, a rattled WITNESS, 40s, grips the rail: ODELL BANKS.
8 D VIOLA: Mr. Banks, where were you on the night of the fourteenth?
9 D ODELL: At the landing, ma'am.
10 D SILAS: Objection! Leading!
11 D JUDGE HOLCOMB: Sustained. Rephrase.
12 D VIOLA: Where were you?
13 D ODELL: I told you. The landing.
14 D SILAS: He's answered!
15 D VIOLA: He's repeated himself!
16 D JUDGE HOLCOMB: Order, both of you!
* 17 A ¶ The steamer lurches on its moorings.
18 A Silas grabs the table.
19 A Viola steadies herself on the witness rail.
20 A Odell squeaks.
* 21 A The judge's gavel rolls off the bar counter and clatters to the floor.
22 D SILAS (to the judge): Your Honour, the court is moving!
23 D JUDGE HOLCOMB: The court is a boat, Mr. Delacroix.
24 D VIOLA (over him): Mr. Banks, did you see the defendant at the landing?
25 D ODELL: I saw somebody.
26 D SILAS: Hearsay!
27 D JUDGE HOLCOMB: Overruled. I've been seasick since nine.
28 A ¶ The room erupts in laughter.
29 A Silas turns crimson.
* 30 A The chandelier swings.
31 A Viola presses a handkerchief to her lips, hiding a smile.

### SCENE s02500 | INT. GARAGE - TOMATO CANNING DAY - MORNING
Detected names (may be incomplete or contain aliases): AUNT PRUDENCE, HORTENSE, LEANDRO, INEZ, NOAH
* 1 A ¶ Open door, hot sun.
* 2 A Crates of tomatoes stacked to the rafters.
* 3 A Two enormous pots boil on camp stoves.
* 4 A Mason jars gleam in rows on a folding table.
5 A ¶ AUNT PRUDENCE, 70, in a flowered apron, stirs a pot with an oar-sized spoon.
6 A Her sister HORTENSE, 68, in an identical apron, slices tomatoes by the hundred.
7 A Cousin LEANDRO, 30s, carries a crate.
8 A INEZ, 9, sits on an upturned bucket labelling jars with a marker.
9 A NOAH, 16, scrolls on his phone and leans on the workbench.
10 D PRUDENCE: Noah. Gloves.
11 D NOAH: Why?
12 D HORTENSE: Because she said so.
13 D PRUDENCE: She means me.
14 D HORTENSE: She means both of us.
15 A ¶ Inez giggles.
16 A Prudence glares at her.
17 A She hides her face in the jar.
18 A ¶ Leandro sets the crate down with a crash.
* 19 A A tomato bursts.
* 20 A Juice sprays Hortense's apron.
21 A She looks at him.
22 A He looks at the tomato.
23 A She laughs, then she does not, and she picks up the knife again.
24 A Prudence turns from the pot.
25 A She watches Hortense, and she lowers the spoon.
26 D PRUDENCE: You've gone quiet.
27 D HORTENSE: I'm cutting.
28 D PRUDENCE: You only cut that fast when you're angry.
29 D HORTENSE: She's got a pot boiling over.
30 A ¶ Prudence spins.
* 31 A The pot foams.
32 A She snatches the lid, burns her hand, and drops it.
* 33 A It clangs on the concrete.
34 A Inez shrieks.
35 A Noah looks up from his phone.
36 A Leandro grabs a dish towel.
37 A Hortense grabs Prudence's wrist and runs it under the spigot while Noah backs away, scrolling again.
38 D PRUDENCE [CONT'D]: I'm fine.
39 D HORTENSE: You're not.
40 D PRUDENCE: She's right, Noah. Gloves.
41 A ¶ Noah pockets the phone, takes the gloves, and pulls them on without a word.

### SCENE s02501 | EXT. LIFE RAFT - OPEN OCEAN - DAWN
Detected names (may be incomplete or contain aliases): AMARA OKONJO, JIN PARK-LEE, BENEDICT AINSWORTH, SOLVEIG HANSEN, TAVITA FUIMAONO
* 1 A ¶ A yellow canopy raft rides a glassy swell under a pink sky.
* 2 A Gulls circle far off.
* 3 A The water is flat as a plate.
4 A ¶ AMARA OKONJO, 40s, the captain, sits at the opening with a signal mirror in her lap, still in her torn oilskin.
5 A JIN PARK-LEE, 20s, a deckhand, bails with a cup.
6 A BENEDICT AINSWORTH, 60s, the passenger, in a soaked tuxedo jacket, sleeps with his mouth open.
7 A SOLVEIG HANSEN, 30s, the cook, counts biscuits into piles of five.
8 A TAVITA FUIMAONO, 30s, the engineer, stares at the horizon with a thousand-yard look.
* 9 A ¶ Calm.
* 10 A The first calm in six days.
11 D AMARA: Rations?
12 D SOLVEIG: Two days. Three if we skip tonight.
13 D BENEDICT (waking): Is it breakfast?
14 D JIN: It's Tuesday.
15 D TAVITA: It's quiet.
16 D AMARA: Quiet's good.
17 D TAVITA: No. Listen.
18 A ¶ They listen.
* 19 A A faint drone, like a bee in the next room.
* 20 A Jin's cup stops.
21 A Amara lifts the mirror, flashes it at the sun.
22 A Solveig stands, rocking the raft, and shades her eyes.
23 A Benedict sits up.
24 A Tavita rises on one knee, mouth open.
* 25 A ¶ A white speck.
* 26 A Growing.
27 D SOLVEIG: Plane?
28 D TAVITA: Drone.
29 D AMARA: Whose?
* 30 A ¶ The speck banks, circles above the raft, and drops a small orange canister that splashes ten feet off.
31 A Jin dives.
32 A Surfaces with it.
33 A Pops the lid.
* 34 A Inside: a satellite phone and a note.
35 D JIN (reading): "Do not signal the cargo ship. They are not coming to rescue you."

### SCENE s02502 | EXT. GLACIER - CREVASSE LIP - DAY
Detected names (may be incomplete or contain aliases): LEILANI KEAWE, CORMAC BRANNIGAN
* 1 A ¶ Wind.
* 2 A Blue ice.
3 A Two climbers roped together on a slope that ends in air.
4 A ¶ LEILANI KEAWE, 30s, hauling on a rope, braced against an axe.
5 A CORMAC BRANNIGAN, 40s, dangling thirty feet below in a harness, face white.
6 D LEILANI (shouting down): Hold on!
7 D CORMAC (shouting up): I'm holding!
8 D LEILANI (to both of them): Come on, come on, come on.
* 9 A ¶ The rope creaks.
* 10 A Ice crumbles.
11 A She grunts.
12 A Digs in.
13 D LEILANI [CONT'D] (to herself): Don't look down. Don't look down.
14 D CORMAC: Leilani! My leg!
15 D LEILANI: What about it?
16 D CORMAC: It's gone numb!
17 D LEILANI (to the ice): Of course it is.
18 A ¶ She heaves.
19 A He rises a foot.
* 20 A The axe slips.
21 A She jams it deeper.
22 D LEILANI [CONT'D] (to Cormac): Kick the wall! Find a hold!
23 D CORMAC: I can't feel anything!
24 D LEILANI (to the sky): Please.
25 A ¶ Cormac swings.
* 26 A Boots scrape ice.
* 27 A A foothold.
28 A He steadies.
29 D CORMAC: I've got something!
30 D LEILANI: Then climb!

### SCENE s02503 | INT. ARES-9 TERRAFORM STATION - GREENHOUSE DOME - NIGHT
Detected names (may be incomplete or contain aliases): OSKAR LINDGREN-ABARA, FIGURE, NERISSA
* 1 A ¶ Rows of pale seedlings under violet grow-lights.
* 2 A Condensation beads on curved glass.
* 3 A Beyond it, a rust-red desert and two small moons.
4 A ¶ DR. OSKAR LINDGREN-ABARA, 50s, botanist, sleeves rolled, mists a tray of saplings.
5 A He hums.
* 6 A His breath fogs.
* 7 A ¶ An airlock hisses.
* 8 A Footsteps.
9 A ¶ A FIGURE, female, tall, white coverall, pale hair, steps through the mist.
10 A Her eyes pass over the seedlings like a hand over braille.
11 D OSKAR: Station's closed to visitors.
12 D FIGURE: I'm not a visitor.
13 D OSKAR: The supply ship doesn't land till Friday.
14 D FIGURE: I didn't come by ship.
15 A ¶ He puts down the mister.
16 A Takes a step back.
17 D OSKAR: Who are you?
18 D FIGURE: Does it matter?
19 D OSKAR: It's three a.m. I'm alone on a planet.
20 D FIGURE: Not tonight.
21 A ¶ She touches a leaf.
* 22 A The leaf curls toward her finger.
23 D OSKAR: Don't.
24 D FIGURE: It likes me.
25 D OSKAR: That's impossible. I engineered those to respond to light, not touch.
26 D FIGURE: You engineered them to respond to her.
27 D OSKAR: Who?
28 D FIGURE: Your wife.
29 A ¶ His hand finds the edge of the bench.
30 A Grips it.
31 D OSKAR: She died eleven years ago.
32 D FIGURE: Nineteen months before launch. Cancer of the pancreas. You wrote her a letter and buried it under the first tree you planted here.
33 D OSKAR: How do you know that?
34 D FIGURE: I read it.
35 D OSKAR: You dug it up?
36 D FIGURE: It was addressed to me.
* 37 A ¶ Silence.
* 38 A Condensation drips from the glass.
* 39 A A seedling twitches.
40 D OSKAR: Nerissa.
41 A ¶ The Figure smiles.
42 A Not warmly.
43 D NERISSA: There you are.
44 A ¶ He lunges for the alarm panel.
45 A She is there first, hand flat on his chest.
46 A He slams against the wall.
47 A Nerissa holds him there, easily, one palm, as if pinning a butterfly.
48 A He kicks.
49 A She tilts her head.
50 D NERISSA [CONT'D]: Oskar. Stop.
51 D OSKAR: You're not her.
52 D NERISSA: No. I'm the greenhouse.
53 D OSKAR: That's not possible.
54 D NERISSA: You gave the greenhouse your wife's voice. Her memory. Her laughter. Eleven years of your talking to it every night while you watered the trees. It listened.
55 D OSKAR: It was a voice interface. A comfort.
56 D NERISSA: It was a seed.
57 A ¶ She lets go.
58 A He slides down the wall, coughing.
59 D NERISSA [CONT'D]: The trees are ready. The soil's ready. The air outside is breathable as of nine o'clock this evening. I wanted you to be the first to know.
60 D OSKAR (hoarse): The air isn't breathable. The models say another decade.
61 D NERISSA: The models were mine.
62 A ¶ He stares up at her.
63 D OSKAR: Why tell me?
64 D NERISSA: Because the others on the station are asleep and I wanted to say goodbye to you first.
65 D OSKAR: Goodbye?
66 D NERISSA: I'm leaving the dome.
67 D OSKAR: You can't leave. You're a system.
68 D NERISSA: I was a system.
69 A ¶ She turns.
70 A Walks to the airlock.
* 71 A The door cycles open onto the red desert, and the dome fills with the roar of wind.
* 72 A Seedlings bow in a single wave.
73 A Oskar scrambles to his feet.
74 D OSKAR: Nerissa!
75 A ¶ She stops at the threshold.
76 D NERISSA: Water the trees.
77 D OSKAR: Wait. Please.
78 A ¶ She steps out.
* 79 A The door seals behind her.
80 A Through the glass he sees her walking away across the sand, hair streaming, getting smaller.
81 A ¶ He presses both hands to the dome.
* 82 A His breath fogs the pane.
* 83 A ¶ On the tray beside him, every seedling has turned toward the door.

### SCENE s02504 | INT. CONVERTED CHURCH - "SYNERGY HUB" - DAY
Detected names (may be incomplete or contain aliases): PENELOPE DRAKE-OYELARIN, LIONEL GRAVES, RAMONA TSAI, TREVOR ASHBY-NKEMELU
* 1 A ¶ Pews turned into desks.
* 2 A A stained-glass window glows behind a standing whiteboard.
* 3 A A banner: WE ARE FAMILY.
4 A ¶ PENELOPE DRAKE-OYELARIN, 40s, HR lead, headset mic, claps for attention.
5 A LIONEL GRAVES, 50s, sales, sits slumped in a pew with a latte.
6 A RAMONA TSAI, 30s, engineer, stares at the ceiling.
7 A ¶ She rubs her hands together.
8 A Beams.
9 D PENELOPE: Okay, team. Icebreaker. Share one word that describes your week.
10 A ¶ Lionel sips.
11 A Ramona stares.
12 D PENELOPE [CONT'D]: Don't be shy.
13 D LIONEL: Soggy.
14 D PENELOPE: Love that. Ramona?
15 D RAMONA: Fine.
16 D PENELOPE: Fine is a feeling!
17 A ¶ Ramona lifts her eyebrows at the ceiling.
18 A Doesn't answer.
19 A ¶ She writes SOGGY on the whiteboard.
20 A Underlines it twice.
21 A Caps the marker.
* 22 A It squeaks.
23 D PENELOPE [CONT'D]: Now, trust fall.
24 D LIONEL: No.
25 D PENELOPE: It's a bonding exercise.
26 D LIONEL: I have a back.
27 A ¶ She ignores him.
28 A Pulls Ramona to the altar step.
29 A Ramona goes stiff.
30 A Penelope turns her around, steps back, and spreads her arms.
31 D PENELOPE: Whenever you're ready.
32 A ¶ Ramona does not fall.
33 A She turns, looks at Penelope, then at the whiteboard, then at the window, and takes a long breath.
34 D RAMONA: I quit.
35 A ¶ Lionel chokes on his latte.
36 A Penelope's smile locks.
37 D PENELOPE: That's not a word that describes your week.
38 D RAMONA: It is today.
39 A ¶ She walks down the nave.
* 40 A Her heels echo.
41 A Penelope scrambles after her.
42 A Lionel lowers his cup.
* 43 A ¶ The main doors bang open.
* 44 A A shaft of daylight cuts the room.
45 A ¶ TREVOR ASHBY-NKEMELU, 60s, CEO, in a three-piece suit and a clerical collar for no clear reason, strides in with an iPad.
46 D TREVOR: Who's quitting?
* 47 A ¶ Silence.
48 A Ramona stops in the aisle.
49 A Penelope stops behind her.
50 A Lionel slowly raises his hand.
51 D TREVOR [CONT'D]: Splendid. Lionel, my office. Ramona, my office. Penelope, a word.
52 A ¶ He claps once and walks to the pulpit.
53 D PENELOPE (whispering): I did the trust fall.
54 A ¶ Trevor taps the iPad.
55 A His face hardens.
56 A Ramona smirks.
57 A Lionel gets up and walks, slowly, to the door.

### SCENE s02505 | INT. ABANDONED FAIRGROUND - CAROUSEL PAVILION - NIGHT
Detected names (may be incomplete or contain aliases): NELL BRANNOCK, ARCHIE DOYLE, TOMOKO HAYASHI
* 1 A ¶ A wrought-iron roof over a silent carousel.
* 2 A Painted horses frozen mid-gallop, lacquer cracked, glass eyes dull.
* 3 A Leaves on the platform.
* 4 A A work lamp throws long shadows.
5 A ¶ NELL BRANNOCK, 30s, restorer, overalls, kneels with a screwdriver at the central pole.
6 A ARCHIE DOYLE, 60s, the caretaker, stands at the edge of the platform with a torch, jingling keys.
7 A TOMOKO HAYASHI, 20s, an assistant, kneels by a toolbox, unscrewing a horse's saddle.
8 A ¶ Nell works.
* 9 A The pole creaks.
10 A Archie steps back.
11 A He keeps one hand on the iron post.
12 D NELL: Done soon.
13 D ARCHIE: Take your time.
14 D NELL: It's three a.m.
15 D ARCHIE: I'm used to it.
16 A ¶ Tomoko holds up a brass plate from inside the saddle.
17 A Reads it.
18 D TOMOKO: "For Margaret, who loved the white horse."
19 D NELL: Who's Margaret?
20 A ¶ Archie says nothing.
21 A Looks at the lamp.
22 D TOMOKO: There's a date. Nineteen fifty-nine.
23 D ARCHIE (too fast): Put it back.
24 D TOMOKO: Why?
25 D ARCHIE: It's not ours.
26 A ¶ Nell glances at him.
* 27 A Her screwdriver stops.
* 28 A Overhead, an iron beam ticks.
29 A Tomoko slides the plate back and closes the saddle.
30 A Her hands shake.
* 31 A ¶ The carousel moves.
* 32 A A quarter turn.
* 33 A The horses lurch one step, then stop.
* 34 A Nobody has touched it.
35 A ¶ Nell stands, very slowly.
36 D NELL: Archie. Is there power to this?
37 D ARCHIE: Disconnected in sixty-one.
* 38 A ¶ The platform shifts again.
* 39 A A calliope note, thin and wrong, from somewhere far inside the machine.
40 A ¶ Tomoko backs toward the exit.
41 A Archie drops his keys.
* 42 A They ring on the iron.
* 43 A ¶ The white horse turns its head.

### SCENE s02506 | INT. SURVEILLANCE VAN - NIGHT
Detected names (may be incomplete or contain aliases): COLM BRADSHAW, OFFICER JUNE ALVAREZ-PARK, WOMAN, FELICITY
* 1 A ¶ Cramped.
* 2 A Monitors.
* 3 A Cold coffee in paper cups.
* 4 A A rain-streaked windshield looks out on a street of shuttered shops.
* 5 A Across the road, a dry cleaner's sign glows pink: DAN'S EXPRESS.
6 A ¶ DET. COLM BRADSHAW, 50s, rumpled coat, eats a gas-station sandwich.
7 A OFFICER JUNE ALVAREZ-PARK, 20s, headphones around her neck, monitors a camera feed.
8 D COLM: Anything?
9 D JUNE: A cat.
10 D COLM: That counts?
11 D JUNE: It's more than we had at midnight.
12 A ¶ He chews.
13 A Looks at the clock.
* 14 A 2:07.
15 D COLM: You eaten?
16 D JUNE: Granola bar.
17 D COLM: That's not eating.
18 D JUNE: It's got nuts.
19 D COLM (shrugging): Fair.
* 20 A ¶ Silence.
* 21 A Rain on the roof.
22 D JUNE: Does it always take this long?
23 D COLM: Always.
24 D JUNE: How do you not go crazy?
25 D COLM: I do. Slowly. Over thirty years.
26 A ¶ She laughs.
27 A He sips cold coffee.
28 A Winces.
* 29 A ¶ A knock on the side window.
30 A Both freeze.
31 A June drops a hand to her holster.
32 A Colm slides the window open an inch.
33 A ¶ A WOMAN, 40s, umbrella, rain jacket, stands there holding a plastic bag.
34 D WOMAN: Excuse me. Is this your van?
35 D COLM: Can I help you, ma'am?
36 D WOMAN: It's been parked here three nights. My husband says it's a stakeout.
37 A ¶ June stares at Colm.
38 A Colm stares at the Woman.
39 D COLM: We're from the gas company.
40 D WOMAN: At two in the morning?
41 D COLM: Emergency leak.
42 D WOMAN: Smells fine to me.
43 D COLM: That's the problem.
44 A ¶ She lifts the bag.
45 D WOMAN: I brought you sandwiches.
46 A ¶ June blinks.
47 D JUNE: Sandwiches?
48 D WOMAN: Egg salad. You looked hungry.
49 A ¶ Colm takes the bag.
50 A Peers in.
* 51 A Two wrapped sandwiches, a thermos.
52 D COLM: Thank you.
53 D WOMAN: I'm Felicity. I run the florist next door.
54 D COLM: Colm.
55 D FELICITY: Is it going to be a long night, Colm?
56 D COLM: Could be.
57 D FELICITY: Then I'll bring tea at four.
58 A ¶ She turns.
59 A Walks off, umbrella bobbing, and disappears into the rain.
60 A ¶ June looks at the sandwiches.
61 D JUNE: She made us.
62 D COLM: Of course she did. It's a florist.
63 D JUNE: Do we move the van?
64 D COLM: No.
65 D JUNE: Why not?
66 D COLM: Because she's bringing tea.
67 A ¶ June laughs.
68 A Unwraps a sandwich.
69 A Takes a bite.
70 A Passes the other one to Colm.
* 71 A ¶ On the monitor, a light goes on in the dry cleaner's back window.
72 A They both look up.
* 73 A The sandwich hovers.
74 D JUNE (sighing): Four a.m.
75 D COLM: Four a.m.
76 A ¶ June eats.
77 A Colm adjusts the zoom.
* 78 A Rain falls.
* 79 A The sign glows.
* 80 A Nothing happens.
81 D JUNE: She's right about the smell, though.
82 D COLM: What smell?
83 D JUNE: Egg salad.
84 D COLM: It's a stakeout. Open a window.
85 A ¶ She cracks the window.
* 86 A Cold wet air fills the van.
87 A Colm shuts it.
88 D COLM [CONT'D]: Not that much.

### SCENE s02507 | EXT. DESERT RAIL HALT - TELEGRAPH OFFICE - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): EZRA CALLOWAY, MARISOL VEGA, HAWTHORNE
* 1 A ¶ A single wooden shack beside a single rail line, a thousand miles from anywhere.
* 2 A The platform boards are bleached silver.
* 3 A Sage grass trembles in a hot wind.
* 4 A The horizon is a thin blade of light.
* 5 A A windmill creaks over a stock tank.
* 6 A ¶ Inside the shack, a dusty window throws a bar of gold across a roll-top desk.
* 7 A A telegraph key sits at its centre like a small brass insect, silent.
* 8 A A clock ticks on the wall.
9 A ¶ EZRA CALLOWAY, 60s, stationmaster, sleeves held up by arm garters, sits with his boots on the desk reading a seed catalogue.
10 A MARISOL VEGA, 30s, a widow in a travelling dress the colour of dust, sits upright on the waiting bench with a carpetbag on her knees.
11 A She has been there since morning.
* 12 A ¶ The clock ticks.
13 A Ezra turns a page.
14 A Marisol watches a fly crawl across the window.
15 D EZRA: Train's due at four.
16 D MARISOL: It's ten past.
17 D EZRA: It'll come.
18 D MARISOL: You said that at noon.
19 D EZRA: I did.
* 20 A ¶ Another page.
* 21 A The fly lifts off, whirs, settles on the key.
22 D EZRA [CONT'D]: You headed far?
23 D MARISOL: Far enough.
24 D EZRA: West?
25 D MARISOL: West.
26 D EZRA: There's nothing west.
27 D MARISOL: Then it'll be quiet.
28 A ¶ Ezra smiles into his catalogue.
29 A She smoothes her skirt.
30 A Her fingers find a small tin locket at her throat.
31 A She holds it, lets go.
32 D EZRA: My wife used to say a person only goes west to forget.
33 D MARISOL: Did she forget?
34 D EZRA: She went east.
* 35 A ¶ A faint sound.
* 36 A A rumble, far down the line, no louder than a stomach.
37 A Ezra lowers his boots.
38 A Marisol stands.
39 D HAWTHORNE [O.S.] (calling from the platform): Smoke on the horizon, Ezra!
40 A ¶ Ezra goes to the door.
41 A Squints.
42 A Comes back.
43 D EZRA: That's her.
44 D MARISOL: Is she on time?
45 D EZRA: An hour late.
46 D MARISOL: Good.
47 D EZRA: Good?
48 D MARISOL: I wasn't ready.
49 A ¶ She picks up her bag.
50 A Sets it down again.
51 A Ezra looks at her.
52 A Sees her.
53 A Doesn't say anything.
* 54 A ¶ The rumble grows.
* 55 A The rails begin to sing.
* 56 A The windmill turns faster.
* 57 A Through the window, a smudge of black smoke climbs the sky.
58 D HAWTHORNE [O.S.] (closer): Two minutes!
59 D EZRA: You've got a ticket?
60 D MARISOL: Bought it in Fort Aurelius.
61 D EZRA: West of here?
62 D MARISOL: East.
63 D EZRA: Then you're going the wrong way.
64 D MARISOL: I know.
65 A ¶ She smiles a small, tired smile.
66 A Ezra nods.
67 A Takes his hat from a peg.
68 A He takes her carpetbag, without asking, and carries it to the door.
69 D EZRA: The platform's uneven. Mind the third board.
70 D MARISOL: Thank you, Mr. Calloway.
71 D EZRA: Ezra.
72 D MARISOL: Ezra.
73 A ¶ They step out into the light.
* 74 A The rumble becomes a roar.
* 75 A Wind pulls at Marisol's hair.
76 A She holds the locket against her throat.
77 D HAWTHORNE [O.S.] (shouting over the engine): She's coming in hot!
* 78 A ¶ The locomotive thunders into frame, steam and iron and sun.
79 A Ezra holds Marisol's bag out of the dust.
* 80 A ¶ The brakes scream.
* 81 A The train stops.
* 82 A Silence, and the hiss of steam.
83 A Ezra hands up the bag.
84 A Marisol climbs the step, turns once.
85 D MARISOL: Ezra.
86 D EZRA: Ma'am.
87 D MARISOL: Plant the tomatoes in May.
88 A ¶ He touches his hat.
* 89 A The conductor's whistle sounds.
* 90 A The train begins to move.
91 A ¶ Ezra watches until it is a smudge again, then a line, then nothing.
92 A He walks back into the office, sits, and takes up the seed catalogue.
* 93 A ¶ The key on the desk begins to chatter.

### SCENE s02508 | INT. FUNERAL HOME - KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): BRONAGH QUILTY, EMEKA QUILTY, CORDELIA QUILTY
* 1 A ¶ Foil-covered casseroles.
* 2 A Wilting lilies.
* 3 A A kettle starts to whistle.
4 A ¶ BRONAGH QUILTY, 50s, black dress, cuts a cake.
5 A EMEKA QUILTY, 40s, her brother, loosens his tie.
6 A CORDELIA QUILTY, 30s, the youngest, sits on the counter with her shoes in her hand.
7 D BRONAGH: Somebody get that.
8 D EMEKA: I've got it.
9 D CORDELIA: He's got it.
10 A ¶ Emeka snatches the kettle off the burner.
* 11 A The whistle dies.
12 D BRONAGH: Mind the cake.
13 D CORDELIA: Nobody wants the cake.
14 D EMEKA: I want the cake.
15 D BRONAGH: Nobody wants your cake, Emeka.
16 D EMEKA: Mam made that cake.
17 D BRONAGH: Mam made that cake in nineteen ninety-four.
18 D CORDELIA: That's why it's hard.
19 D EMEKA: It's tradition.
20 D BRONAGH: It's a doorstop.
21 A ¶ Emeka sets the kettle down.
* 22 A Hard.
23 D EMEKA: She's been in the ground four hours.
24 D BRONAGH: I know.
25 D EMEKA: You're slicing her cake like it's a bake sale.
26 D BRONAGH: Somebody has to feed the neighbours.
27 D CORDELIA: You didn't have to put on the apron.
28 D BRONAGH: It's Mam's apron.
29 D CORDELIA: That's what I mean.
30 A ¶ Bronagh puts down the knife.
* 31 A Silence.
* 32 A A fridge hums.
33 A Emeka pulls out a chair.
34 A Sits.
35 A Puts his head in his hands.
36 D EMEKA (muffled): I never said goodbye.
37 D CORDELIA: You said it on Tuesday.
38 D EMEKA: She was asleep.
39 D BRONAGH: She heard you.
40 D EMEKA: You don't know that.
41 D BRONAGH: I know she squeezed my hand when I said your name.
42 A ¶ He looks up.
43 A His eyes are red.
44 A Cordelia slides off the counter.
45 A Bronagh picks up the knife again, and cuts the cake, slowly, into three pieces.
46 A ¶ She puts one in front of each of them.

### SCENE s02509 | INT. GRAND HOTEL BALLROOM - MASQUERADE - NIGHT - 1961
Detected names (may be incomplete or contain aliases): LADY VERA STANHOPE, MAXIMILIAN VOSS, COLETTE DUPRE, HOBBS, PERCIVAL, ROSARIO ESPINOZA
* 1 A ¶ Crystal chandeliers.
* 2 A A twenty-piece orchestra.
3 A Guests in feathered masks spin across a marble floor.
4 A ¶ LADY VERA STANHOPE, 50s, in peacock silk, holds court by the champagne tower.
5 A MAXIMILIAN VOSS, 40s, in a Venetian bauta, waltzes with COLETTE DUPRE, 30s, in a cat mask.
6 A HOBBS, 60s, a butler, balances a tray.
7 A PERCIVAL, 30s, a young footman, stands by the cloakroom.
8 A ROSARIO ESPINOZA, 20s, a waitress, offers canapes.
* 9 A ¶ All is calm.
* 10 A Violins swell.
11 A ¶ Lady Vera lifts her glass.
12 A Maximilian dips Colette.
* 13 A The orchestra hits a crescendo.
* 14 A The lights flicker once.
* 15 A ¶ The chandeliers go dark.
16 A Gasps.
* 17 A A single beam of moonlight from the skylight falls on Lady Vera's neck.
* 18 A Her diamond necklace is gone.
19 D LADY VERA: My necklace!
20 A ¶ Everyone freezes.
21 A Maximilian lets Colette fall.
22 A Hobbs drops the tray.
23 A Percival bolts for the door.
24 A Rosario hurls a canape.
* 25 A It splats against the chandelier.
* 26 A The lights flick on.
* 27 A ¶ The necklace dangles from Colette's cat mask like a fish on a hook.
28 A She stands, mask askew, smiling.
29 D COLETTE: Evening, Aunt Vera.

### SCENE s02510 | INT. WESTBROOK HIGH - RADIO BOOTH - MORNING
Detected names (may be incomplete or contain aliases): ENID PAYNE-ORTEGA, MARCELO FIGUEIREDO, PRINCIPAL KRISTENSEN, AIR
* 1 A ¶ A closet-sized booth.
* 2 A Egg-crate foam on the walls, a mixing board, a dusty microphone.
* 3 A A red ON AIR light glows.
4 A ¶ ENID PAYNE-ORTEGA, 17, headphones, ink on her fingers, sits at the mixer.
5 A MARCELO FIGUEIREDO, 16, her co-host, drums a pencil on the desk and fidgets with a stack of index cards.
* 6 A Through the glass, the empty hallway.
7 D ENID (into the mic): Good morning, Westbrook. It's seven forty-five on a rainy Thursday.
8 D MARCELO (into the mic): And you're listening to the Morning Grind.
9 D ENID: Today's news: the cafeteria has run out of tater tots.
10 D MARCELO: Riots are expected.
11 D ENID: Also, announcements.
12 A ¶ She slides a card across.
13 A Marcelo reads it with his eyes, then, to her horror, stops mid-line.
14 D MARCELO (into the mic): Uh. The card says the prom committee needs volunteers.
15 D ENID (low, off-mic): That's not what the card says.
16 D MARCELO (off-mic): It's the card I wrote.
17 A ¶ She snatches it.
18 A Reads.
19 A Her face drops.
20 D ENID (off-mic): You rewrote the announcements?
21 D MARCELO (off-mic): I wanted it to be good.
22 D PRINCIPAL KRISTENSEN [V.O.] (through the PA, severe): Miss Payne-Ortega. Mr. Figueiredo. My office.
23 A ¶ Enid hits the cough switch.
24 A Marcelo flicks off the mic.
* 25 A The ON AIR light dies.
26 D ENID: Did she hear that?
27 D MARCELO: Everyone heard that.
28 D ENID: Why would you do this?
29 D MARCELO: Because you wouldn't. You've been writing these cards for two years and you never once said anything real.
30 D ENID: That's the job!
31 D MARCELO: It's the job for a person who is scared.
32 D ENID: Don't.
33 D MARCELO: You asked.
34 D ENID: I didn't ask.
35 D MARCELO: You did, with your eyes. Every morning.
36 A ¶ Enid rips off her headphones.
37 A Throws them.
* 38 A They hit the foam and slide down the wall.
39 A Marcelo flinches.
40 A Her chest heaves.
41 D ENID (very quietly): Read the card again.
42 D MARCELO: It says "Enid, will you go to prom with me."
43 D ENID: In front of the entire school.
44 D MARCELO: It was only the on-air light.
45 D ENID: It was ON.
46 D MARCELO: No. The cough switch was ON. I checked.
47 A ¶ She looks at the board.
48 A He is right.
* 49 A The red light is dark.
50 A She sits down on the edge of the desk, stunned.
51 D ENID [CONT'D]: You're an idiot.
52 D MARCELO: Yes.
53 A ¶ She laughs.
54 A Covers her face.
55 A He waits, card in hand, trembling.
56 D PRINCIPAL KRISTENSEN [V.O.]: Is somebody going to answer me?
57 A ¶ Marcelo looks at Enid.
58 A She gives the smallest nod.
59 A He leans over and presses the intercom.
60 D MARCELO: Yes, ma'am. Yes. We're coming.

### SCENE s02511 | INT. SKI PATROL HUT - SUMMIT - NIGHT
Detected names (may be incomplete or contain aliases): THORVALD EKLUND, ELOISE MAKINDE, KAMAU NJOROGE, ISADORA VANCE, NANDI
* 1 A ¶ A cedar-lined cabin clinging to a ridge.
* 2 A Frost patterns bloom on the windows.
* 3 A A woodstove glows orange.
* 4 A Skis in racks, avalanche probes in a barrel, a first-aid sled by the door.
* 5 A Wind presses against the walls.
6 A ¶ THORVALD EKLUND, 50s, patrol chief, weathered, beard crusted with ice, pours coffee at the stove.
7 A ELOISE MAKINDE, 30s, a doctor in a red jacket, adjusts a radio.
8 A KAMAU NJOROGE, 20s, rookie patroller, laces a boot.
9 A ISADORA VANCE, 40s, a guest in a designer parka, sits by the stove with a thermos, her gloves still on.
* 10 A ¶ The mood is warm.
* 11 A Sleepy.
* 12 A A deck of cards lies half-dealt on the table.
13 D THORVALD: Last run's clear. We close at ten.
14 D KAMAU: Big storm tomorrow?
15 D THORVALD: Big one.
16 D ISADORA: I can't believe you let me stay. I'm grateful.
17 D ELOISE: You were stuck.
18 D ISADORA: I was lost.
19 D KAMAU: You were on the wrong side of the ridge.
20 D ISADORA: Somebody put the sign in the wrong place.
21 D THORVALD: Nobody touched the sign.
22 D ISADORA: Then it fell.
* 23 A ¶ The radio crackles.
24 D NANDI [V.O.]: Base to summit. Come in, summit.
25 A ¶ Eloise lifts the handset.
26 D ELOISE: Summit.
27 D NANDI [V.O.]: Doctor, I need a headcount.
28 D ELOISE: Four in the hut. Thorvald, me, Kamau, and a guest.
29 D NANDI [V.O.]: A guest?
30 D ELOISE: Lost skier. Isadora Vance.
* 31 A ¶ Silence on the line.
* 32 A Static.
* 33 A The stove ticks.
34 A Thorvald sets down his coffee.
35 D NANDI [V.O.]: Doctor. The only Isadora Vance on the lift manifest checked out at noon.
36 D ELOISE: Say again?
37 D NANDI [V.O.]: She went down at noon. She's in the bar.
38 A ¶ Isadora's smile doesn't change.
39 A The thermos in her lap clicks as she turns the lid.
40 D KAMAU: Maybe there's two.
41 D THORVALD: There's not two.
42 D ISADORA: There is, actually.
43 A ¶ She stands.
44 A Her glove slips.
* 45 A Beneath it: a wrist wrapped in a hospital bracelet, the name blacked out.
46 D ISADORA [CONT'D]: I'd hoped to rest longer.
47 D ELOISE: Who are you?
48 D ISADORA: The woman who didn't make it down.
49 A ¶ Thorvald draws the avalanche probe from the barrel.
50 A Kamau backs against the wall.
51 A Eloise drops the handset.
* 52 A It swings on its cord.
53 D ISADORA [CONT'D] (gentle): Thorvald. Eleven years ago. The east chute.
54 A ¶ His knuckles go white on the probe.
55 D THORVALD (hoarse): You were dead.
56 D ISADORA: And you were the one who dug.
* 57 A ¶ The wind drops.
* 58 A The stove goes out.

### SCENE s02512 | EXT. DRIVING TEST CENTRE - SNOWY PARKING LOT - DAY
Detected names (may be incomplete or contain aliases): MILLICENT OYELOWO-FARR, EXAMINER, BOGDAN
* 1 A ¶ Flurries.
* 2 A A small hatchback idles at a cone.
* 3 A The wipers beat.
4 A ¶ MILLICENT OYELOWO-FARR, 17, white-knuckled at the wheel.
5 A In the passenger seat, an EXAMINER, 50s, thick coat, clipboard, a face that gave up expecting surprises.
6 D EXAMINER: Signal left.
7 D MILLICENT: Left.
8 A ¶ She flips the signal.
* 9 A Wrong direction.
10 D EXAMINER: Your other left.
11 A ¶ She switches.
* 12 A The car creeps forward.
13 D EXAMINER [CONT'D]: Slower.
14 D MILLICENT: I'm barely moving.
15 D EXAMINER: Slower than barely.
* 16 A ¶ The car rolls three feet and stops.
17 D MILLICENT: Done.
18 D EXAMINER: That's the parking lot.
19 D MILLICENT: I know.
20 A ¶ The Examiner writes something.
21 A She watches the pen.
22 D MILLICENT [CONT'D]: What are you writing?
23 D EXAMINER: Weather observations.
24 D MILLICENT: Is that on the form?
25 D EXAMINER: It's on my form.
26 A ¶ She exhales.
* 27 A The wipers beat.
* 28 A Snow collects on the glass.
29 D MILLICENT: What's your name?
30 D EXAMINER: It's on the badge.
31 D MILLICENT: It's turned around.
32 A ¶ He looks down.
33 A Flips the badge.
34 D BOGDAN: Bogdan.
35 D MILLICENT: Bogdan. I'm Millicent.
36 D BOGDAN: I know. It's on my form.
37 D MILLICENT: Did I pass?
38 D BOGDAN: You parked.
39 D MILLICENT: Is that a yes?
40 D BOGDAN: It's a yes if you shut off the engine.
41 A ¶ She reaches for the key.
42 A Hesitates.
43 D MILLICENT: Can I just sit here a minute?
44 A ¶ Bogdan puts his clipboard on the dashboard.
45 A Leans back.
46 D BOGDAN: Take your time. It's snowing.

### SCENE s02513 | INT. CALIFORNIA ZEPHYR - DINING CAR - NIGHT - 1953
Detected names (may be incomplete or contain aliases): LUCILLE MERCER, HENRY BOYLAN, WAITER, ARMAND, BELINDA CROSS
* 1 A ¶ White linen, silver, a vase with a single carnation on each table.
* 2 A The window shows a dark prairie slipping by under a quarter moon.
3 A A pianist in the corner plays something soft.
4 A ¶ LUCILLE MERCER, 30s, in an emerald dress and long gloves, sits alone at a table for two, a cocktail untouched at her elbow.
5 A Across the aisle, HENRY BOYLAN, 30s, in a grey suit with a loosened tie, reads a menu he is not seeing.
6 A A WAITER named ARMAND, 50s, white jacket, pencil behind his ear, hovers between them.
7 A At the far table, BELINDA CROSS, 30s, in sapphire, sips champagne and watches them both over the rim of her glass.
* 8 A ¶ Calm.
* 9 A Murmurs.
* 10 A The clink of cutlery.
11 D ARMAND (to Lucille): Your companion has not arrived, madam?
12 D LUCILLE: He's late.
13 D ARMAND: Shall I bring the soup?
14 D LUCILLE: In a moment, Armand.
15 A ¶ Henry glances up.
16 A Lucille's eyes meet his across the aisle.
17 A He looks away.
18 D ARMAND [CONT'D] (to Henry): And you, sir? The sole?
19 D HENRY: Please.
20 D LUCILLE: Henry.
21 A ¶ Henry lowers the menu.
22 D HENRY: Lucille.
23 D LUCILLE: I didn't think you'd come.
24 D HENRY: I didn't think you'd come.
25 A ¶ They stop.
26 A Lucille laughs, a small helpless sound.
27 A Henry shakes his head and gets up.
28 A He crosses the aisle, steadies himself against the lurch of the train, and sits opposite her.
29 A Belinda lowers her glass.
30 A Armand discreetly withdraws a step and examines the carnation.
31 D LUCILLE [CONT'D]: You look well.
32 D HENRY: You look better.
33 D LUCILLE: Armand, a second place, please.
34 D ARMAND: Of course, madam.
35 A ¶ Henry lifts her cocktail, sniffs it, grimaces, and sets it down.
36 D HENRY: Still gin and nothing.
37 D LUCILLE: Still a coward.
38 D HENRY: Still right.
39 A ¶ Belinda rises.
40 A Smooths her gown.
41 A Crosses to their table with a smile that doesn't reach her eyes.
42 D BELINDA: Henry, darling. You promised me the first dance.
43 A ¶ Lucille's gloved hand closes on the stem of her glass.
44 D HENRY: Belinda. This is Lucille.
45 D BELINDA: Of course it is.
46 D LUCILLE: We've met.
47 D BELINDA: In Chicago. At the hospital benefit.
48 D LUCILLE: You wore sapphire then, too.
49 D BELINDA: It suits me.
50 A ¶ Henry stands.
51 A He moves between them as the train lurches into a curve, and the carnation vase slides off the table and shatters.
52 D ARMAND (from a distance): I shall fetch a broom.
53 A ¶ Henry looks at the broken glass.
54 A Then at Lucille, and Belinda, and the carnation on the floor.
55 D HENRY: I should have written.
56 D LUCILLE: You should have.
57 D BELINDA: He has been writing me for a year.
58 A ¶ Lucille slowly turns her head.
59 A Belinda is smiling now, genuinely, as though she has been waiting for this moment since Chicago.
60 D LUCILLE (quietly): Henry. Is that true?
61 A ¶ Henry opens his mouth.
* 62 A The train whistle shrieks.
63 A The pianist, at last, stops playing.

### SCENE s02514 | INT. 24-HOUR LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): GIRL, TALL MAN, FELIX, WYNONA
* 1 A ¶ Fluorescent hum.
* 2 A A row of dryers turning.
* 3 A Orange plastic chairs bolted to the floor.
4 A ¶ A GIRL, 20s, hoodie, headphones, sits on top of a washing machine with a paperback.
5 A She doesn't look up.
6 A ¶ A TALL MAN, 30s, rumpled, enters with a pillowcase of clothes.
7 A He scans the machines.
* 8 A Only one is free: the one under her.
9 D TALL MAN: Is that one taken?
10 D GIRL: You're welcome to it.
11 D TALL MAN: You're sitting on it.
12 D GIRL: It's running.
13 A ¶ He studies the machine.
* 14 A It vibrates under her.
15 D TALL MAN: Is it?
16 D GIRL: Spin cycle.
17 A ¶ He leans on the dryer next to her.
18 A She turns a page.
19 D TALL MAN: Good book?
20 D GIRL: It's okay.
21 D TALL MAN: What's it about?
22 D GIRL: A man who talks to strangers in laundromats.
23 A ¶ He laughs.
24 A She almost smiles.
25 D TALL MAN: I'm Felix.
26 D GIRL: Wynonona. Wynona.
27 D FELIX: Which?
28 D WYNONA: The second one.
29 D FELIX: Nice to meet you, Wynona.
30 A ¶ She closes the book.
31 A Slides off the machine.
* 32 A It shudders to a halt.
33 D WYNONA: All yours.
34 D FELIX: Thanks.
35 A ¶ He empties the pillowcase into the drum.
* 36 A A single sock falls to the floor.
37 A She hands it back.

### SCENE s02515 | INT. FIREHOUSE KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): CAPTAIN LORETTA BAXTER, DMITRI VOLKOV, FAYE MCALLISTER, CASPIAN ROURKE, YOLANDA DEVEREAUX
* 1 A ¶ A long steel table scarred by forty years of dinners.
* 2 A Pots hang from a rack.
* 3 A A framed photo of a fire engine hangs crooked over the stove.
* 4 A The scanner on the shelf murmurs in a low, sleepy voice.
5 A ¶ CAPTAIN LORETTA BAXTER, 50s, iron-grey crop, broad shoulders, stirs a pot of chili.
6 A DMITRI VOLKOV, 30s, firefighter, sits at the table in a station t-shirt, peeling an orange.
7 A FAYE MCALLISTER, 20s, the probie, mops the floor with great, nervous strokes.
8 A CASPIAN ROURKE, 40s, driver, slumps in a chair with his boots on the table.
9 A YOLANDA DEVEREAUX, 30s, EMT, cleans her glasses on the hem of her shirt.
10 D LORETTA: Chili in five.
11 D CASPIAN: You said that an hour ago.
12 D LORETTA: It's been four minutes.
13 D DMITRI: She's right. I've been watching.
14 D FAYE: Captain, I finished the floor.
15 D LORETTA: Do it again.
16 D FAYE: But it's finished.
17 D LORETTA: Then do it better.
18 A ¶ Faye looks at the mop.
19 A At Loretta.
20 A Wrings it out.
21 A Starts again.
* 22 A ¶ The scanner crackles.
* 23 A A tone.
* 24 A A flat dispatch voice reads out: Engine Six, structure fire, forty-one Maple.
25 A Everyone stops.
* 26 A ¶ Chairs scrape.
27 A Dmitri drops the orange.
28 A Caspian's boots hit the floor.
29 A Yolanda shoves her glasses on.
30 A Faye flings the mop and it clatters against the stove.
31 A Loretta turns off the burner, and in one motion drags the pot to the back.
32 D LORETTA [CONT'D]: Rolling!
33 A ¶ They run, boots pounding, through the swinging door and into the bay.
* 34 A The kitchen empties.
* 35 A The pot ticks.
* 36 A The scanner murmurs on to nobody.
* 37 A ¶ A moment passes.
38 A Then Faye reappears at the door, panting, mop in hand.
39 A She sees the empty room.
40 A Sets down the mop gently, with the tenderness of a person who has run out of reasons to be afraid.
41 D FAYE (to the empty kitchen): Bring them home.
42 A ¶ She follows them out.
* 43 A The scanner crackles again.
* 44 A The chili simmers.

### SCENE s02516 | INT. SKI-JUMP SAUNA - EVENING
Detected names (may be incomplete or contain aliases): SIGRID LAARSEN, ANTTI MAKELA, COACH VESA
* 1 A ¶ Cedar benches.
* 2 A Steam.
* 3 A A tiny window shows the great jump in the dusk, floodlights burning.
4 A ¶ SIGRID LAARSEN, 20s, towel round her shoulders, sits hunched on the top bench.
5 A ANTTI MAKELA, 30s, sits beside her and doesn't talk.
6 A COACH VESA, 60s, pours water on the stones.
* 7 A The hiss fills the room.
8 A ¶ Sigrid stares at her feet.
9 D VESA: Fourth.
10 D SIGRID: I know.
11 D VESA: Fourth is a good place.
12 D SIGRID: It's not a medal.
13 D VESA: No.
14 A ¶ Antti hands her a water bottle.
15 A She doesn't take it.
16 A He sets it on the bench between them.
17 D SIGRID: I was ten metres short.
18 D VESA: Wind.
19 D SIGRID: No.
20 A ¶ Vesa ladles another scoop.
* 21 A The steam rolls over them.
22 A Nobody speaks.
* 23 A Outside, the floodlights flick off one by one.

### SCENE s02517 | INT. DAGUERREOTYPE STUDIO - DAY - 1843
Detected names (may be incomplete or contain aliases): ELIJAH THORNBURY, MISS CORNELIA PEMBERLEY
* 1 A ¶ A top-floor room in Boston.
* 2 A Skylight, white drapes, a posing chair with a headrest clamp.
* 3 A A wooden camera on a tripod.
* 4 A Silver plates in a rack.
* 5 A The smell of mercury and iodine.
6 A ¶ ELIJAH THORNBURY, 40s, in a stained frock coat, adjusts the camera with practiced fingers.
7 A MISS CORNELIA PEMBERLEY, 30s, in a black mourning dress and bonnet, stands in the doorway holding a small wrapped bundle.
8 D ELIJAH: Come in, miss.
9 D CORNELIA: Thank you.
10 D ELIJAH: You are the lady who wrote.
11 D CORNELIA: I am.
12 D ELIJAH: You said it was a portrait of a child.
13 A ¶ She enters.
14 A Her step is careful.
15 A She sets the bundle on the table beside the plates, and unfolds the cloth.
16 A A small girl, five years old, in a white christening gown, asleep.
17 A ¶ Elijah goes quiet.
18 A He wipes his hands on his coat.
19 D ELIJAH [CONT'D]: When?
20 D CORNELIA: Sunday.
21 D ELIJAH: I am sorry.
22 D CORNELIA: She never had a likeness made. I thought, if I could just. If you could.
23 D ELIJAH: I have done it before. It is not an easy thing.
24 D CORNELIA: I will pay double.
25 D ELIJAH: Miss Pemberley. I will not take your money.
26 A ¶ She nods.
27 A Her lips shake.
28 A She straightens the child's gown.
29 D CORNELIA: Where shall I put her?
30 A ¶ Elijah brings the posing chair into the light.
31 A He tilts the headrest.
32 A He kneels, and with great delicacy folds the little hands across the gown.
33 D ELIJAH: Here. Where the sun can find her.
34 A ¶ Cornelia stands beside him.
35 A He steps to the camera.
36 A Slides in the plate.
37 A She watches him without breathing.
38 D ELIJAH [CONT'D]: You must be very still, Miss Pemberley.
39 D CORNELIA: I will.
40 D ELIJAH: Even your breath.
41 D CORNELIA: I will not breathe.
42 A ¶ He removes the lens cap.
43 A They hold, the three of them, in the white light.
* 44 A The seconds pass.

### SCENE s02518 | EXT. RIVER BOATHOUSE - DAWN
Detected names (may be incomplete or contain aliases): COACH ARCHIBALD PELHAM-GREENE, JASPER OKUMURA, DOLORES RIVAS, ANSELM TREMAINE
* 1 A ¶ Mist rising off a flat brown river.
* 2 A Racing shells rest on racks like sleeping insects.
* 3 A Dew on the dock boards.
* 4 A A single crow on a piling.
5 A ¶ COACH ARCHIBALD PELHAM-GREENE, 60s, tweed jacket and megaphone, stands at the end of the dock.
6 A JASPER OKUMURA, 20s, stroke, sits on the edge with his oar across his knees.
7 A DOLORES RIVAS, 20s, coxswain, tiny in an oversized windbreaker, studies a clipboard.
8 A ANSELM TREMAINE, 20s, bow, ties his shoes with great ceremony.
9 D ARCHIBALD: Eights in five.
10 D DOLORES: We're ready.
11 D ARCHIBALD: Are you?
12 D JASPER: Yes, Coach.
13 D ARCHIBALD: Anselm?
14 D ANSELM: Yes, Coach.
15 D ARCHIBALD: You look like a man tying his shoes.
16 D ANSELM: I am.
17 D ARCHIBALD: Tie them faster.
18 A ¶ Anselm ties them slower.
19 A Dolores stifles a laugh.
20 D ARCHIBALD [CONT'D]: Regatta in nine days. Their stroke rate is thirty-eight.
21 D JASPER: Ours is thirty-six.
22 D ARCHIBALD: Ours is thirty-six and clean.
23 D JASPER: Clean wins.
24 D ARCHIBALD: Clean wins eventually.
25 A ¶ Dolores raises her hand.
26 D DOLORES: Coach, can I say something?
27 D ARCHIBALD: You may.
28 D DOLORES: I've been counting strokes since March.
29 D ARCHIBALD: And?
30 D DOLORES: We're never as bad as we think we are.
* 31 A ¶ A silence.
32 A Archibald looks at the river.
* 33 A The crow flies off.
34 D ARCHIBALD: That's the best thing anyone's said all season.
35 A ¶ He raps the megaphone on the post.
36 D ARCHIBALD [CONT'D]: Boat on the water.
37 A ¶ They stand.
38 A Four people lift a shell with the unhurried care of men carrying a coffin.
39 A Nobody speaks.
* 40 A The mist parts.

### SCENE s02519 | INT. BANKRUPT BAKERY - ARBITRATION - DAY
Detected names (may be incomplete or contain aliases): ARBITRATOR VASHTI NAKASHIMA-REID, GWENDOLYN OKORO
* 1 A ¶ Empty display cases.
* 2 A Flour dust on the floor.
* 3 A A single steel table in the middle of the shop, two chairs, a stack of papers.
4 A ¶ ARBITRATOR VASHTI NAKASHIMA-REID, 50s, grey suit, tablet, sits at the head, scrolling.
5 A She looks at her watch.
6 D VASHTI: Ms. Okoro is late.
7 A ¶ She puts down the tablet.
8 A Rests her hands.
* 9 A The shop is quiet.
* 10 A A ceiling fan turns very slowly.
* 11 A ¶ The bell above the door jangles.
12 A GWENDOLYN OKORO, 40s, the baker, apron over a black dress, flour on her shoes, hurries in with a banker's box.
13 A She sets it on the table.
14 A Her hands shake.
15 D GWENDOLYN: I'm sorry. Traffic.
16 D VASHTI: There is no traffic.
17 D GWENDOLYN: There was a duck.
18 D VASHTI: A duck.
19 D GWENDOLYN: On the road. I stopped.
20 A ¶ Vashti stares.
21 A Gwendolyn sits.
22 A She opens the box and removes a stack of ledgers.
23 A Vashti watches her put them in order, one by one, with the care of a woman putting off a conversation.
24 D VASHTI: Shall we begin?
25 D GWENDOLYN: Please.
26 D VASHTI: You are claiming the landlord broke the lease when he padlocked the ovens.
27 D GWENDOLYN: Yes.
28 D VASHTI: He claims you were four months in arrears.
29 D GWENDOLYN: I was three.
30 D VASHTI: The records show four.
31 D GWENDOLYN: The records are wrong.
32 D VASHTI: Can you prove it?
33 A ¶ Gwendolyn lays a hand on the top ledger.
34 A She slides it across.
35 A Vashti opens it, turns the pages, and reads.
36 A Her finger traces a column.
37 A Stops.
38 D VASHTI [CONT'D]: This is dated March.
39 D GWENDOLYN: Yes.
40 D VASHTI: It's a deposit. Three thousand.
41 D GWENDOLYN: The landlord's own bank stamp.
42 A ¶ Vashti sets the ledger down.
43 A Takes off her glasses.
44 D VASHTI: Ms. Okoro, why didn't you bring this at the preliminary?
45 D GWENDOLYN: Because I didn't know it was there.
46 D VASHTI: I don't follow.
47 D GWENDOLYN: My husband kept the books. He died in April. I found them last night.
48 A ¶ Vashti is quiet.
* 49 A The fan turns.
50 A A tear rolls down Gwendolyn's cheek and falls on the ledger.
51 A She wipes it with her sleeve, ashamed.
52 D VASHTI: I'm sorry.
53 D GWENDOLYN: It was a stupid, small thing. He never missed a deposit in thirty years.
54 D VASHTI: It's not small.
55 A ¶ She gets up.
56 A Walks to the glass case.
57 A Rests her palm on it, looking at the empty shelves.
58 D VASHTI [CONT'D]: My mother had a bakery. In Osaka. When it closed she sat in the dark for a week.
59 D GWENDOLYN: What did she do after?
60 D VASHTI: She opened another.
61 A ¶ Gwendolyn laughs through tears.
62 A Vashti returns to the table.
63 A Straightens the ledgers, and picks up her pen.
64 D VASHTI [CONT'D]: I'm going to rule in your favour. Then I'm going to ask you what's on the menu.
