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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0124.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00675 | INT. FUNICULAR CAR - NIGHT
Detected names (may be incomplete or contain aliases): MIRABEL STROUD, JUNIOR OKAFOR, LUCAS PIERRE
* 1 A ¶ A little wooden car climbs a steep rail through pine forest toward a sleeping hotel.
* 2 A Brass lamps, velvet benches, a locked steel case strapped to the floor.
3 A ¶ MIRABEL STROUD, 40s, sleek in a conductor's uniform that does not quite fit, stands at the brake lever.
4 A JUNIOR OKAFOR, 20s, in porter's livery, perches on the case with a thermos.
5 A LUCAS PIERRE, 50s, a quiet man in a traveling coat, sits at the far end with a newspaper.
6 D JUNIOR: Smooth ride, Mirabel. Real smooth.
7 D MIRABEL: Don't jinx it.
8 D LUCAS (not looking up): Nothing to jinx. Two minutes to the top, one case, three honest people.
9 D JUNIOR: Four if you count the case.
10 D MIRABEL: Junior, the cable.
11 D JUNIOR: What about it?
12 A ¶ Mirabel's eyes go to the cable humming in its groove.
13 A Junior unscrews the thermos, takes a sip, offers it to Lucas, who shakes his head, folds the newspaper in half, and tucks it under his arm, while Mirabel slides one hand off the brake lever and into her jacket, and the car creaks past a lantern marking the halfway pole.
14 D LUCAS: Tell me, Mirabel. Who's at the top?
15 D MIRABEL: Night clerk. Maybe a guest or two.
16 D JUNIOR: The clerk's asleep.
17 D LUCAS: How would you know?
18 D JUNIOR: I did the schedule.
19 D MIRABEL: You did the schedule?
20 D JUNIOR: I did a schedule. Not the schedule.
21 D LUCAS (softly): Interesting.
22 A ¶ Junior stands.
* 23 A The thermos slips from his hand and rolls to Lucas's shoe.
24 A Lucas stops it with a toe, picks it up, unscrews the cap, and tips the contents onto the floor.
* 25 A It is not coffee.
* 26 A It is a thin pool of clear oil that spreads toward the case.
27 D MIRABEL: That's brake fluid.
28 D JUNIOR: It's not what it looks like.
29 D LUCAS: It's exactly what it looks like. Mirabel, stop the car.
30 D MIRABEL: If I stop here, we slide.
31 D LUCAS: Then slide gently.
32 A ¶ Mirabel draws a pistol from her jacket and levels it at Junior.
33 A Lucas stands, opens his traveling coat, and shows a badge.
34 D LUCAS [CONT'D]: Funicular Authority, Inspector Pierre. Which of you wants to explain the oil?

### SCENE s00676 | INT. GENERATION SHIP HELIOS-9 - SEED VAULT DECK - SHIP NIGHT
Detected names (may be incomplete or contain aliases): TEODORA VASK, IMANI QUILL
* 1 A ¶ A low arched chamber lined with frosted drawers of seed.
* 2 A Pale green grow lights hum.
* 3 A Condensation beads on steel.
4 A ¶ TEODORA VASK, 50s, a quiet botanist in a faded gray jumpsuit, walks the aisle with a tablet, touching each drawer as she passes.
5 D TEODORA: Barley, two hundred and eleven. Barley, two hundred and twelve. You're all still here. Good.
6 A ¶ She stops at a drawer that is slightly open, closes it with a click, and makes a note.
7 D TEODORA [CONT'D] (to herself): Humidity at point four. Slightly high. Always slightly high.
* 8 A ¶ The hatch hisses.
9 A IMANI QUILL, 20s, in the white sash of a ship's archivist, steps in with a stack of data slates against her chest.
10 A She looks lost.
11 D IMANI: Is this the vault? They said Deck Nine, but all the doors say Deck Nine.
12 D TEODORA: It's the vault. You're the new archivist.
13 D IMANI: I'm Imani. I'm sorry, I didn't know anyone would be here at this hour.
14 D TEODORA: Nobody is, ever. That's why I come.
15 A ¶ Imani lays her slates on a workbench and glances at the drawers.
16 D IMANI: How many seeds are in here?
17 D TEODORA: Eleven million, give or take. She says that, the ship, in her reports. I say it feels like more when you count them by hand.
18 D IMANI: She doesn't mean the ship. She means the Registrar, the one who wrote the index.
19 D TEODORA: Ah. Then she's wrong, too. She never came down here.
20 A ¶ They share a small, tired smile.
21 A Teodora hands Imani a spare tablet.
22 D TEODORA [CONT'D]: Start at drawer one. Read me the label on each, slowly.
23 D IMANI: Just read?
24 D TEODORA: Just read. I listen better than I count.
25 A ¶ Imani sits on the stool, props the tablet on her knee, and reads aloud.
26 D IMANI: Wheat, hard red winter. Wheat, soft white. Rye.
27 A ¶ Teodora closes her eyes and listens.

### SCENE s00677 | INT. SUDS-N-GO LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): ROSALIND, JUDE, NELL
* 1 A ¶ Humming dryers.
* 2 A Buzzing tube light.
* 3 A Rain on glass.
4 A ¶ ROSALIND, 40s, folds towels hard.
* 5 A Snap.
* 6 A Snap.
7 A JUDE, 12, sits on a washer, sneakers swinging, doing homework nobody asked about.
8 A NELL, 70s, in a quilted coat, watches both of them from a plastic chair.
9 A ¶ Rosalind snaps a sheet.
10 D JUDE: You folded that one already.
11 D ROSALIND: No.
12 D NELL: She did, dear. Twice.
13 D ROSALIND: I'm not talking to you, Mom.
14 A ¶ Nell nods, patient, as if this were weather.
* 15 A A dryer buzzes.
16 A Nobody moves.
17 D JUDE: Mr. Pruitt said I could stay with Grandma if --
18 D ROSALIND: Don't.
19 D JUDE: I'm just saying.
20 D NELL: He could. It's a big house.
21 A ¶ Rosalind drops a towel.
22 A Picks it up.
23 A Folds it a third time.
24 D ROSALIND: Where's the other sock?
25 D JUDE: Dad took it.
26 A ¶ Rosalind's hands stop.
* 27 A A long beat.
* 28 A The tube light flickers.
29 D NELL (to Jude): Honey, get me a cup of cocoa from the machine.
30 D JUDE: It doesn't take dollars.
31 D NELL: Then go find quarters.
32 A ¶ Jude slides off the washer, slow, watching.
33 A He leaves.
34 A Rosalind keeps folding, fast now, jaw tight.
35 D NELL [CONT'D]: You can stop the towels.
36 D ROSALIND: I can't.
37 A ¶ Nell stands, crosses to the table, lays her hand flat over Rosalind's.
* 38 A The towel goes still between them.
39 A Rosalind's shoulders shake once, silently.
40 D JUDE [O.S.] (far off, rattling a machine): Got one! Wait, it's a button.
41 A ¶ Rosalind laughs once, wet, and wipes her face on the towel.

### SCENE s00678 | INT. STRIKE ZONE LANES - LANE 14 - NIGHT
Detected names (may be incomplete or contain aliases): SPUD, NOWAK, LORETTA VANCE, DUTCH AMARI, PEARL, GIDEON, MINNOW
* 1 A ¶ The neon pins glow pink over a pile of cash on the scoring table.
2 A Six people stand frozen under the haze of cigarette smoke.
3 A ¶ KAZIMIERZ "SPUD" NOWAK, 50s, shoes untied, grips a ball like a grenade.
4 A LORETTA VANCE, 40s, red lipstick, holds the money.
5 A DUTCH AMARI, 30s, tall, leans on the ball return.
6 A PEARL, 60s, the lane attendant, polishes a shoe with great calm.
7 A GIDEON, 20s, nervously jingles car keys.
8 A MINNOW, 12, drops under the table.
9 D SPUD: Loretta, put the cash down and nobody gets scuffed.
10 D LORETTA: Scuffed? Spud, you rented these shoes.
11 D DUTCH: Pearl, whose side are you on?
12 D PEARL: Lane 14's.
13 A ¶ Gideon bolts.
14 A Spud hurls the ball; it thunders down the lane and scatters the pins, and Gideon, mid-stride, hops and screams as his keys skid into the gutter.
15 D MINNOW (from under the table): Strike!

### SCENE s00679 | INT. ICE-FISHING HUT - DAWN
Detected names (may be incomplete or contain aliases): HALVARD EIDE, SUNNIVA ROE, BROCK DILLARD, INES CALLOWAY, TEAGUE
* 1 A ¶ A plywood shack on a frozen lake, thick with the smell of wet wool and diesel.
* 2 A Five holes have been drilled in the floor, and the black water in each one barely moves.
3 A ¶ HALVARD EIDE, 60s, hunched on an upturned bucket, jigs a line and hums.
4 A SUNNIVA ROE, 30s, sits opposite, a thermos between her boots.
5 A BROCK DILLARD, 40s, leans against the door with arms crossed, steam rising off his shoulders, while INES CALLOWAY, 50s, rummages in a tackle box and TEAGUE, 20s, ties a lure with numb fingers.
6 A Halvard pours coffee into the cap of the thermos and hands it to Sunniva, who passes it to Brock, who sips, grimaces, and passes it on to Ines, who takes it without looking up, and for a long minute nothing in the hut moves but the lines trembling in the holes.
7 D HALVARD: Sixty years on this lake. Never a morning like it.
8 D SUNNIVA: Quiet.
9 D INES: Too quiet.
10 A ¶ Teague stops tying.
11 A Brock shifts against the door and the latch, which has been hooked from the outside, does not lift.

### SCENE s00680 | INT. ASHWORTH HOUSE - GLASS CONSERVATORY - DAY (1887)
Detected names (may be incomplete or contain aliases): PRUDENCE ASHWORTH
* 1 A ¶ Rain taps the glazed roof.
* 2 A Ferns crowd the brick walls, and a wrought-iron table holds a gas lamp, an inkwell, and a half-written letter.
3 A ¶ PRUDENCE ASHWORTH, 30s, in a gray morning dress with ink on her second finger, sits with a pen poised.
4 A She dips the nib, hesitates, and sets it down again.
5 A ¶ She picks up the letter and reads it to the empty air.
6 D PRUDENCE [V.O.]: My dear Edmund. The orchids you left have bloomed, the white ones, as you said they would. I did not water them as you instructed. I let the rain do it.
7 A ¶ She smooths the page, gazes at a fern, and turns back to the page.
8 D PRUDENCE [V.O., CONT'D]: Mrs. Pell asks whether you will be home for the Harvest supper. I told her I did not know. That is the truth. I know very little these days, except the names of plants.
* 9 A ¶ A drop of water falls from a cracked pane onto the paper.
10 A She does not blot it.
* 11 A It spreads and blurs the word "plants."
12 D PRUDENCE (aloud, softly): Well. There it is.
13 A ¶ She lifts the pen, holds it over the page for a long moment, and then, very gently, puts it down in the inkwell and leaves the letter unsigned.

### SCENE s00681 | INT. HOLLOW OAK TAVERN - NIGHT
Detected names (may be incomplete or contain aliases): KAELEN MOSSWELL, MOTHER YSOLDE, BRANNOCH, PIP, VEYRA
* 1 A ¶ A tavern built inside the trunk of a dead oak the size of a cathedral.
* 2 A Lanterns hang from root-beams.
* 3 A The bar is a single slab of petrified heartwood, worn silver by centuries of elbows.
4 A ¶ KAELEN MOSSWELL, 20s, a ranger with a bowstring scar across one cheek, nurses a mug at the bar.
5 A MOTHER YSOLDE, 70s, a bent innkeeper with moth-wing earrings, wipes the same cup over and over.
6 A BRANNOCH, 50s, a barrel-chested dwarf in a miner's leather, sits in the corner with an axe across his lap.
7 A PIP, 10, a stable-hand, sweeps near the door.
8 A VEYRA, 30s, hooded, a gray cloak pooled around her chair, sits alone with an untouched bowl.
9 D KAELEN: Quiet tonight.
10 D MOTHER YSOLDE: It's always quiet when the root-winds turn.
11 D BRANNOCH (not looking up): Quiet's what you get when the road's closed.
12 A ¶ Pip stops sweeping.
13 A Veyra's spoon clinks against the bowl.
14 D KAELEN: Closed since when?
15 D BRANNOCH: Since someone burned the toll-bridge. Three nights back.
16 D MOTHER YSOLDE: Don't start, Brannoch.
17 D BRANNOCH: I'm only saying what everyone's thinking.
18 A ¶ He lifts his eyes toward Veyra.
19 A Kaelen follows his gaze.
20 A The hood does not move.
21 D KAELEN (to Veyra): You came in on the north road. Did you see anything?
22 D VEYRA: Smoke.
23 D KAELEN: Smoke from where?
24 D VEYRA: From the bridge.
25 D PIP (whispering): She's lying. The bridge is south.
26 A ¶ Brannoch's chair scrapes.
27 A His hands tighten on the axe.
28 D BRANNOCH: Speak, hooded one. Who sent you?
29 D VEYRA: No one sent me.
30 D BRANNOCH: Then why is your cloak dry?
31 A ¶ Everyone looks at the floor.
* 32 A Rain is pooling under the door, but the gray cloak is perfectly dry, and where its hem touches the boards, small pale flowers are blooming.
33 D MOTHER YSOLDE: Gods in the roots.
34 A ¶ Veyra rises.
35 A The hood falls back to show eyes like green fire.
36 D VEYRA: The bridge was mine. The road is mine. Everything that grows under this oak is mine.
37 A ¶ Brannoch charges.
38 A The axe bites the table where she stood, and the tavern erupts in roots.

### SCENE s00682 | INT. LORNE HOUSE - LIBRARY - NIGHT
Detected names (may be incomplete or contain aliases): AUGUSTIN LORNE, BEATRIX, CEDRIC MOWBRAY, HESTER QUAYLE
* 1 A ¶ A fire dying in a marble hearth.
* 2 A Four chairs in a half-circle.
* 3 A A decanter, four glasses, a ledger left open on the reading stand.
4 A ¶ AUGUSTIN LORNE, 60s, shrunken in a velvet smoking jacket, sits nearest the fire.
5 A His niece BEATRIX, 30s, stands behind his chair.
6 A CEDRIC MOWBRAY, 40s, the family solicitor, occupies a leather wingback.
7 A HESTER QUAYLE, 50s, the housekeeper, hovers at the door with her hands folded.
8 A ¶ Beatrix pours for the men and does not pour for herself.
9 D AUGUSTIN: Cedric, the clause.
10 D CEDRIC: The clause is clear.
11 D BEATRIX: Clear to whom?
12 D CEDRIC: To anyone who reads.
13 D HESTER: I read it twice.
14 D AUGUSTIN: Of course you did, Hester.
15 D BEATRIX: She was in the room when you signed.
16 D HESTER: I was in the hall.
17 D BEATRIX: Then you heard it through the door.
18 D HESTER: The door was open.
19 D CEDRIC: Doors are often open in this house.
20 D AUGUSTIN: Not the study door.
21 D BEATRIX: No. The study door is always locked.
22 D HESTER: It was open on Thursday.
23 D CEDRIC: Thursday?
24 D HESTER: When the ledger went missing.
25 D AUGUSTIN (slowly): The ledger is here.
26 D BEATRIX: Because someone put it back.
27 D CEDRIC: Or because it was never gone.
28 D HESTER: Mr. Augustin, I told you I saw it on Thursday. Pages torn. Four of them.
29 D AUGUSTIN: Four.
30 D BEATRIX: There are four of us.
* 31 A ¶ A silence.
* 32 A The fire pops.
33 D CEDRIC: Surely you are not suggesting --
34 D BEATRIX: I'm suggesting nothing. I'm counting.
35 D AUGUSTIN: Hester. The pages. Where?
36 D HESTER: In the second drawer of the hall cabinet. Under the umbrellas.
37 D CEDRIC: You looked?
38 D HESTER: I clean.
39 D AUGUSTIN: Beatrix, fetch them.
40 A ¶ Beatrix does not move.
41 A Cedric slowly sets his glass on the table, Hester's eyes find the carpet, and Augustin lifts the poker from its stand and holds it across his knees.
42 D AUGUSTIN [CONT'D]: Whoever fetches them first.

### SCENE s00683 | EXT. SALT FLAT - DAY
Detected names (may be incomplete or contain aliases): NAOMI, WOMAN, ELSPETH
* 1 A ¶ White to the horizon.
* 2 A Heat shimmer.
* 3 A A burnt-out van tilts in the distance like a toy.
4 A ¶ NAOMI, 30s, sunburned, drags a jerry can by its handle.
5 A Her canteen is empty.
6 A She stops, swaying.
7 D NAOMI (to herself): Keep walking. Keep walking.
8 A ¶ A figure on the horizon.
9 A Naomi shades her eyes.
10 A A WOMAN, 40s, in a ragged parka, wobbles closer.
11 A She carries a water jug.
12 A She sees Naomi and stops.
13 D WOMAN (hoarse): Is that water?
14 D NAOMI: Gas.
15 D WOMAN: Damn.
16 A ¶ Naomi sets down the can.
17 A The woman does the same with her jug.
18 A They stare across ten feet of white.
19 D NAOMI: Where'd you come from?
20 D WOMAN: East. A bus. I'm told there was a bus.
21 D NAOMI: There was. It left.
22 A ¶ The woman sits in the salt.
23 A Naomi sits too.
24 A Neither speaks.
* 25 A The wind scrapes the flat.
26 D NAOMI [CONT'D] (to the sky): Anybody want to explain this?
27 D WOMAN (to Naomi): What's your name?
28 D NAOMI: Naomi.
29 D WOMAN: Elspeth. My friends call me Elsie.
30 A ¶ ELSPETH nudges the jug across the salt.
31 D ELSPETH [CONT'D]: Half each. You carry the gas. I carry the rest.
32 A ¶ Naomi takes the jug.
33 A She drinks, passes it back, and nods.
34 D NAOMI: She'd have hated this, my mother. Heat.
35 D ELSPETH: Mine too.
36 A ¶ They stand, shoulder to shoulder, and start toward the van.

### SCENE s00684 | INT. ASHGROVE MANOR - GREEN DRAWING ROOM - EVENING
Detected names (may be incomplete or contain aliases): BARNABY CREWE, LADY PHILOMENA ASHGROVE, ANSELM ROTH
* 1 A ¶ Rain on tall windows.
* 2 A A grandfather clock.
* 3 A A tea service on a low table.
* 4 A A bust of a long-dead general on the mantel.
5 A ¶ BARNABY CREWE, 40s, a private inquirer in a rumpled coat, stands at the window with his back to the room.
6 A LADY PHILOMENA ASHGROVE, 70s, upright in a wing chair, regards him over the rim of her cup.
7 A DR. ANSELM ROTH, 50s, the family physician, sits on the settee with a black bag between his feet.
8 A ¶ She sets down her cup.
9 A He turns.
10 D LADY PHILOMENA: You've been staring at that glass for ten minutes, Mr. Crewe.
11 D CREWE: It's an interesting pane.
12 D LADY PHILOMENA: It is a pane.
13 A ¶ He moves to the mantel and runs his thumb over the bust, then wipes the dust on his handkerchief.
14 A She watches with disapproval.
15 A Roth shifts and she glances at him.
16 D ROTH: Philomena, if Mr. Crewe has questions, let him ask.
17 D CREWE: Thank you, Doctor.
18 D LADY PHILOMENA: Ask, then.
19 D CREWE: Who last saw Lord Ashgrove alive?
20 D LADY PHILOMENA: I did.
21 D ROTH (together with her): I did.
22 D CREWE: Both of you?
23 A ¶ They look at each other.
24 A He leans forward, she lifts her chin.
25 D LADY PHILOMENA: At dinner.
26 D ROTH: At the stairs, afterward.
27 D CREWE: Which was first?
28 D LADY PHILOMENA: Dinner.
29 D ROTH: He was already tired.
30 A ¶ She frowns at him.
31 A He studies the bag between his feet.
32 A Crewe takes the poker from its stand, turns it over, and replaces it exactly where it was.
33 D CREWE: Doctor, what's in the bag?
34 D ROTH: Medical instruments.
35 D CREWE: And the brown bottle?
36 A ¶ Roth's hand drops to the bag.
37 A She sets her cup down so softly it does not click.
38 A The clock begins to strike the hour, and in the third chime Crewe walks to the settee, kneels, and lifts the clasp.
39 D CREWE [CONT'D]: Foxglove. Prepared.
40 D LADY PHILOMENA (together with Roth): It was for his heart.
41 D ROTH (together with Lady Philomena): It was for his heart.
42 A ¶ They stop.
* 43 A The clock finishes.
44 A Crewe stands with the bottle in his hand and looks from one to the other.
45 D CREWE: Strange. You rehearsed the same sentence.

### SCENE s00685 | INT. TOWER OF THE LAST STAIR - NIGHT
Detected names (may be incomplete or contain aliases): ALDRIC, THESSALY, GORM, MIRREN
* 1 A ¶ A circular stone chamber at the top of a thousand steps.
* 2 A A cracked crystal on a pedestal pulses faintly.
* 3 A Rain lashes the narrow windows.
4 A ¶ ALDRIC, 40s, a battered knight in dented plate, leans on his sword.
5 A THESSALY, 30s, a sorceress in midnight blue, traces runes in the dust with a fingertip.
6 A GORM, 50s, a heavy-set dwarf with a braided beard, sits on the top stair, catching his breath.
7 A MIRREN, 18, a thief in a patched green cloak, circles the pedestal and eyes the crystal.
8 D ALDRIC: Thessaly, how long before the seal gives?
9 D THESSALY: Before dawn, if I'm right. Before midnight, if I'm wrong.
10 D GORM: What do you think the odds are, Mirren?
11 D MIRREN: Don't ask me. I'm the one who stole the map.
12 D ALDRIC: We've all stolen something, little one.
13 D THESSALY: Mirren, step back from the crystal.
14 D MIRREN: I'm only looking.
15 D THESSALY: Looking is how it begins.
16 D GORM: Thessaly's right. My grandfather looked at a gem like that once. Went blind in one eye. Then the other.
17 D MIRREN: Gorm, your grandfather went blind from drinking.
18 D GORM: That too.
19 D ALDRIC: Enough. We climbed a thousand stairs for this. We say what we came to say.
20 D THESSALY: What did we come to say, Aldric?
21 D ALDRIC: That we will not let the King's witch-hunters have it.
22 D GORM: We'd have been better off smashing it and going home.
23 D THESSALY: Smash it and the city drowns.
24 D MIRREN: You never told me that.
25 D THESSALY: You never asked, Mirren.
26 D ALDRIC: I did not tell either of you because I did not want you to leave.
27 D GORM (quietly): Then you're a fool, knight. Or a liar.
28 D ALDRIC: Perhaps both.
29 D MIRREN: Then why are we fighting over it?
30 D THESSALY: We're not.
31 D GORM: Speak for yourself.
32 D ALDRIC: Gorm. Put down your axe.
33 D GORM: I didn't pick it up.
34 D MIRREN: You did. It's in your hand.
35 A ¶ Gorm looks down.
* 36 A The axe is there.
37 A His hand is trembling.
* 38 A The crystal pulses brighter.
39 D THESSALY: It's speaking to you. To all of us. Close your ears.
40 D GORM: I hear it. It says Aldric lied.
41 D ALDRIC: Gorm--
* 42 A ¶ The crystal flares.
* 43 A The windows blow in on a wave of white light.

### SCENE s00686 | INT. NORTHBEAM SYNERGIES - OPEN OFFICE - MORNING
Detected names (may be incomplete or contain aliases): BRENDA KOWALCZYK, TREVOR NAKAMURA, PRIYA VENKATARAMAN, GUS TILLMAN
* 1 A ¶ Rows of identical desks.
* 2 A A motivational banner reads "TOGETHER WE ALIGN."
* 3 A A broken printer wheezes in the corner.
4 A ¶ BRENDA KOWALCZYK, 50s, regional VP in a power blazer, stands on a chair with a clicker.
5 A TREVOR NAKAMURA, 30s, middle manager, holds a coffee like a shield.
6 A PRIYA VENKATARAMAN, 30s, a senior analyst with a headset around her neck, scrolls through a spreadsheet.
7 A GUS TILLMAN, 20s, an intern in a too-big tie, takes notes.
8 D BRENDA: Team! Huddle up!
9 A ¶ Nobody huddles.
10 A Trevor drifts closer.
11 D BRENDA [CONT'D]: Today we pivot. From synergy to hypersynergy.
12 D TREVOR (to himself): Pivot where? We don't have a chair.
13 D BRENDA: Trevor, I heard that.
14 D TREVOR: I said "we don't have a chair." For the new hire.
15 D BRENDA: We hire the person, not the chair.
16 D PRIYA (not looking up): Brenda, our Q3 numbers are down forty percent.
17 D BRENDA: Which is why we pivot.
18 D PRIYA: It would be easier to fix the number.
19 D BRENDA: We don't fix numbers, Priya. We reframe them.
20 D GUS (raising a hand): Can I ask a question?
21 D BRENDA: Gus. Welcome to the conversation.
22 D GUS: What does hypersynergy mean?
23 D BRENDA: It means synergy, but faster.
24 D TREVOR (to Gus, low): It means layoffs.
25 D BRENDA: I heard that too.
26 D TREVOR: I know. I wanted you to.
27 A ¶ Brenda climbs down from the chair, slowly, crosses to Trevor, and lowers her voice to a whisper that carries across the entire floor.
28 D BRENDA: You're on a performance improvement plan.
29 D TREVOR: For what?
30 D BRENDA: For saying "layoffs" out loud.
31 D PRIYA (to herself, typing): Seven words. A new record.
32 D GUS (to the room): Does the plan come with a chair?
33 A ¶ Priya snorts.
34 A Trevor stares at Brenda.
35 A Brenda stares back.
36 D BRENDA (to everyone): Everyone back to your desks. We're going to have a very productive day.
37 A ¶ Nobody moves.
* 38 A The printer coughs and dies.
39 D TREVOR: I'm not on a plan.
40 D BRENDA: You are now.
41 D TREVOR: Then I quit.
42 D PRIYA: Seconded.
43 D GUS (very small): Does that include interns?
44 A ¶ Brenda looks at the banner, then at the three of them, then at the dead printer.
45 A Her smile has not moved at all.
46 D BRENDA: Everybody take fifteen. In fifteen minutes, we circle back to this.
47 A ¶ She steps back up onto the chair.

### SCENE s00687 | INT. CORBIN FARMHOUSE - CELLAR - NIGHT
Detected names (may be incomplete or contain aliases): CORBIN, ALMA, JONAH PIKE, SADIE
* 1 A ¶ Dirt floor.
* 2 A Jars of preserves.
* 3 A One bare bulb on a cord, swinging.
4 A ¶ CORBIN, 50s, in a sweat-stained flannel, holds a lantern high.
5 A ALMA, 40s, his wife, grips the cellar ladder.
6 A JONAH PIKE, 20s, the hired hand, backs against a shelf.
7 A SADIE, 9, hugs a doll and stares at the far wall.
* 8 A ¶ Something scratches.
* 9 A Behind the wall.
10 A ¶ Corbin lowers the lantern.
11 D CORBIN: Rats.
12 D ALMA: Rats don't knock.
* 13 A ¶ Three slow knocks.
* 14 A From the other side.
15 A ¶ Jonah slides along the shelf.
* 16 A A jar tips.
* 17 A Smashes.
18 D JONAH (whisper): Sir. We should go up.
19 D CORBIN: Quiet.
20 A ¶ Sadie walks to the wall.
21 A Presses her ear to the dirt.
22 D ALMA: Sadie. Come here.
23 A ¶ Sadie doesn't turn.
24 D SADIE: It knows my name.
25 A ¶ Alma lets go of the ladder.
26 A Corbin swings the lantern toward the sound.
* 27 A A thin crack runs up the plaster.
* 28 A ¶ The bulb goes out.
* 29 A ¶ Darkness.
* 30 A Breathing.
31 A Four of them.
32 A ¶ Something wet drags along the floor.

### SCENE s00688 | INT. BAYVIEW DINER - BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): YUSUF, BEA, LENNY
* 1 A ¶ Empty except for one booth.
* 2 A Rain on the window.
* 3 A Fry oil smell.
4 A ¶ YUSUF, 30s, sits stiffly with his hands in his lap.
5 A BEA, 30s, slides in opposite.
6 A LENNY, 60s, their father, shuffles over with a coffee pot.
7 D BEA: Yusuf. You came.
8 D YUSUF: You said Dad was sick.
9 D LENNY: Not sick. Old.
10 D BEA: Lenny, sit down.
11 D LENNY: It's my diner.
12 D YUSUF (rising): Then why is it for sale?
13 A ¶ Lenny sets the pot down.
* 14 A It rattles.
15 D LENNY: Because your sister doesn't want it.
16 D BEA: Because you were never going to give it to him!
17 A ¶ Yusuf stands.
18 A Bea grabs his wrist.
19 D BEA [CONT'D]: Yusuf. Please.
20 A ¶ He sits.
21 A Lenny pours coffee, three cups, his hand steady.
22 D LENNY: Eat something, both of you.

### SCENE s00689 | INT. MUSEUM OF CLOCKS - VAULT CORRIDOR - NIGHT
Detected names (may be incomplete or contain aliases): VESPER, ANTON KROL, ^ANTON KROL
* 1 A ¶ Marble, silence, a thousand brass hearts ticking behind glass.
* 2 A A single laser, thin as a pencil line, hums across the corridor at ankle height.
3 A ¶ VESPER, 30s, in black from throat to boot, crouches before a keypad with a gloved thumb on her lip.
4 A ANTON KROL, 50s, her partner, broad and patient, kneels beside her holding a stethoscope against the vault door as if listening to a sleeping animal.
5 D VESPER: Seven. Four. One.
6 D ANTON KROL (simultaneously): Seven. Four. One.
7 D ^ANTON KROL: Eight.
8 D VESPER: Eight?
9 D ANTON KROL: The clock in the second room. It runs eight minutes fast.
* 10 A ¶ The keypad flickers green.
* 11 A Then red.
* 12 A The ticking in the walls goes still, all at once.
13 D VESPER (softly): Anton. Every clock just stopped.
14 A ¶ Anton lifts the stethoscope from the door and holds out his open hand, palm flat, as if testing for rain.
15 D ANTON KROL: Then somebody else is in here.
16 A ¶ Vesper slides her pistol out.
* 17 A The laser along the floor blinks off.

### SCENE s00690 | INT. MARLOW FARMHOUSE - KITCHEN - EARLY MORNING
Detected names (may be incomplete or contain aliases): CONSTANCE, HATTIE, WALTER
* 1 A ¶ A cold stove.
* 2 A A table with three mismatched chairs.
* 3 A A single teacup, unwashed, on the sill.
4 A ¶ CONSTANCE, 40s, stands at the sink with her coat still buttoned.
5 A She does not turn on the tap.
6 A Her sister HATTIE, 30s, enters from the hall in a nightgown and bare feet, hugging her elbows.
7 A At the table, WALTER, 70s, their father, sits upright in his Sunday collar, a folded newspaper in front of him that he has not opened.
8 A ¶ She watches the back of her sister's head.
9 A She says nothing.
10 A Hattie crosses to the stove, strikes a match, and stands holding it until the flame reaches her fingers.
11 D CONSTANCE: You'll burn yourself.
12 D HATTIE: I know.
13 A ¶ She shakes it out.
* 14 A The smoke curls toward the ceiling.
15 D WALTER: Sit down, both of you.
16 A ¶ Neither sits.
17 A Constance finally turns on the tap, and the water runs over a plate she isn't washing.
18 D HATTIE: She came back last night.
19 D CONSTANCE: Who did?
20 D HATTIE: You know who.
21 A ¶ Walter unfolds the paper, folds it again, smoother this time.
22 A He sets it square on the table.
23 D WALTER: Your mother is in the churchyard. We buried her Tuesday.
24 A ¶ She does not look at him.
25 A She keeps her eyes on her sister's hands, shaking now, the matchbox rattling in them.
26 A Hattie slides it across the counter, away from herself, toward the sink.
27 D CONSTANCE (turning off the tap): Take that outside.
28 D HATTIE: Why?
29 D CONSTANCE: Because Father is looking at it.
30 A ¶ Walter is.
31 A He is looking at the matchbox as if it were an animal.
32 A Slowly he reaches out and lays his big, spotted hand over it.
33 A Neither daughter moves.
* 34 A Outside, a rooster crows, late.

### SCENE s00691 | EXT. THE WHISPER MARSH - DUSK
Detected names (may be incomplete or contain aliases): SORREL, TAMSIN, ORRIN, BRIGID
* 1 A ¶ Black water, white reeds, and a mist that clings to the knees.
* 2 A Fireflies the size of thumbs drift between rotted posts.
* 3 A A narrow plank path winds out of sight.
4 A ¶ SORREL, 30s, a marsh-guide in oilcloth and thigh boots, leads with a long pole, testing each plank.
5 A TAMSIN, 20s, an apprentice healer with a satchel clutched across her chest, follows two steps behind.
6 A ORRIN, 50s, a one-eared merchant in a fur-lined cloak, labors in the middle with a heavy pack.
7 A BRIGID, 30s, a sell-sword with a cracked breastplate, brings up the rear and watches the reeds.
8 D SORREL: Stay on the planks. If you slip, don't thrash.
9 D TAMSIN: What do I do?
10 D SORREL: Hold still and call my name.
11 D ORRIN: And if you can't hold still?
12 D SORREL: Then call louder.
13 A ¶ They walk.
14 A A heron lifts out of the reeds, and Brigid's hand goes to her hilt.
15 D BRIGID: We're being followed.
16 D ORRIN: By what?
17 D BRIGID: I don't know. It's quiet.
18 D TAMSIN: Quiet is good.
19 D BRIGID: Quiet is never good.
20 A ¶ Sorrel stops.
21 A Tamsin bumps into her.
22 D TAMSIN: Sorry. Is something wrong?
23 D SORREL: The plank ahead is missing.
24 D ORRIN: Missing how?
25 D SORREL: Gone. Someone took it.
26 D BRIGID: Or something did.
27 A ¶ They peer ahead.
* 28 A The path ends in four feet of dark water, and past it, the plank resumes.
29 D ORRIN: We can jump that.
30 D SORREL: Not with that pack.
31 D ORRIN: Then I'll leave the pack.
32 D BRIGID: You'll leave nothing. The pack is why we're here.
33 D TAMSIN: What's in the pack?
34 D ORRIN: Medicine. For the village at the far shore.
35 D TAMSIN: You said it was cloth.
36 D ORRIN: I said a lot of things.
37 D BRIGID: Orrin.
38 A ¶ Orrin sighs and unbuckles the pack.
* 39 A Inside, wrapped in oilcloth, sits a small iron box with a hand-drawn seal.
40 D SORREL: That's not medicine.
41 D TAMSIN (very quietly): It's humming.
42 D ORRIN: It always hums near water.
43 D BRIGID: Drop it in the marsh.
44 D ORRIN: No.
45 D BRIGID: It's what took the plank.
46 A ¶ Orrin closes the pack.
47 A In the reeds, something large and slow begins to move toward them, parting the white stalks without a sound.

### SCENE s00692 | INT. CARGO WAREHOUSE - LOADING BAY 6 - NIGHT
Detected names (may be incomplete or contain aliases): AGENT FOLASADE ADEBAYO, REUBEN MARSH, PD, FOLA, STRANGER, IMELDA DRAY, NIKOLAI
* 1 A ¶ Concrete.
* 2 A Pallets.
* 3 A Sodium lights buzzing.
* 4 A A forklift idles.
5 A ¶ AGENT FOLASADE ADEBAYO, 30s, FBI jacket under a rain slicker, moves between shipping crates with her weapon low.
6 A Behind her, REUBEN MARSH, 50s, local PD, wheezes, flashlight in hand.
7 D REUBEN: Fola, wait.
8 D FOLA: Keep your voice down.
9 D REUBEN: Nobody's here.
10 D FOLA: Somebody dropped this.
11 A ¶ She holds up a ring of keys.
12 A Reuben shines the light on them.
13 A ¶ A STRANGER, 40s, in a dark wool coat, stands motionless at the end of the aisle.
14 A Both swing their guns toward him.
15 D STRANGER: Easy. Easy.
16 D FOLA: Hands where I can see them.
17 D STRANGER: They're empty.
18 D REUBEN: Name.
19 D STRANGER: You first.
20 A ¶ Fola takes a step forward.
21 A The Stranger smiles.
22 D STRANGER [CONT'D]: Agent Adebayo. You look tired.
23 D FOLA: How do you know my name?
24 D STRANGER: I've read your reports.
25 D REUBEN: What reports?
26 D FOLA: Reuben, don't.
27 D STRANGER: Detective Marsh. You should ask her about Lagos.
28 A ¶ Reuben's light wavers on Fola's face.
29 D REUBEN: What's in Lagos?
30 D FOLA: Nothing. He's playing us.
31 D STRANGER: Or I'm the only honest one here.
32 A ¶ IMELDA DRAY, 50s, steps out of the shadow behind Reuben, a silenced pistol pressed to the back of his neck.
33 A She is in a janitor's smock, calm as a clerk.
34 D IMELDA: Drop it, Detective.
35 A ¶ Reuben drops the flashlight.
* 36 A It rolls.
37 D FOLA: Imelda. Walk away.
38 D IMELDA: I can't. Not until I get the ledger.
39 D FOLA: I don't have it.
40 D IMELDA: No. He does.
41 A ¶ All three look at the Stranger.
42 A He taps his coat.
43 D STRANGER: My name is Nikolai Orlov. I'd like to hand it over, if you'll all stop pointing things at me.
44 D NIKOLAI (CONT'D): The ledger names every one of you.
45 D REUBEN: Fola, what does he mean every one of us?
46 D FOLA: It means somebody in this room is on the take.
47 D IMELDA: Or two.
48 D NIKOLAI: Or three.
* 49 A ¶ Silence.
* 50 A Rain on the roof.
51 D REUBEN: I didn't do anything.
52 D NIKOLAI: Not yet.
53 A ¶ Imelda cocks the pistol.

### SCENE s00693 | INT. CASTLE HOTEL - TOWER SUITE - NIGHT
Detected names (may be incomplete or contain aliases): OTTILIE PRAHL, MAN, CALDER
* 1 A ¶ A round room papered in faded roses.
* 2 A A four-poster bed, a dark window, a candle guttering on the sill.
3 A ¶ OTTILIE PRAHL, 30s, in a travel-stained dress, sits on the edge of the bed with her hands pressed between her knees.
4 A A MAN, 40s, in a doorman's greatcoat, stands in the doorway, his face half in shadow.
5 D MAN: Your room, madam.
6 D OTTILIE: It's the wrong room.
7 D MAN: It is the room you were given.
8 A ¶ She says nothing.
9 A She looks at the window, then at his hands, which are clean.
10 D OTTILIE: You carried my bag up four flights and you're not out of breath.
11 D MAN: I am used to stairs.
12 D OTTILIE: What's your name?
13 A ¶ He considers.
14 D MAN: Calder.
15 D OTTILIE: Calder. And is there someone else in the hotel tonight?
16 D CALDER: Only the guest in the east wing.
17 D OTTILIE: Who is that?
18 A ¶ Calder steps inside and closes the door.
* 19 A The candle leans.
20 D CALDER: Someone who has been asking for you since Tuesday.
21 A ¶ Ottilie rises.
22 A She does not rush.
23 A She crosses to the window and lifts the latch.
24 D OTTILIE: Tell him I've been here all along.
25 D CALDER: He knows.
26 A ¶ Behind him, in the hall, a floorboard creaks under a heavy tread.

### SCENE s00694 | INT. FENN & SON UPHOLSTERY - REAR LOADING DOCK - NIGHT
Detected names (may be incomplete or contain aliases): LAZLO FENN, RAY OBUYA
* 1 A ¶ Bolts of fabric stacked to the rafters.
* 2 A A single hanging bulb.
* 3 A The roll-up door is half open to the rain.
4 A ¶ LAZLO FENN, 50s, a heavy-set man in suspenders, counts bills at a workbench.
5 A RAY OBUYA, 30s, in a leather jacket, leans against a stack of velvet, thumbing a lighter on and off.
6 D RAY: It's short.
7 D LAZLO: It isn't.
8 D RAY: Count it again.
9 A ¶ Lazlo does not look up.
10 A He finishes the stack, squares the edges against the bench, and starts a second.
11 D LAZLO: Your boss has a long memory. So do I.
12 D RAY: My boss said four. That's three-eight.
13 D LAZLO: It's four.
14 A ¶ Ray pushes off the velvet and takes one step.
15 A He is close enough now to see the sweat on the other man's collar.
16 D RAY: Then why are you counting like a man who got robbed?
17 D LAZLO: Because I'm careful.
18 D RAY: You've been careful for twenty years and I never once saw you count twice.
19 A ¶ Lazlo stops.
20 A He lays both hands flat on the money.
* 21 A Behind him, a roll of fabric slumps on its stand.
22 D RAY [CONT'D]: Who's behind the roll?
23 D LAZLO: Nobody.
24 D RAY: He's smaller than you. He's breathing too hard.
25 D LAZLO: Ray. Let it go.
26 A ¶ Ray draws a revolver from the small of his back and lowers it, slowly, toward the floor.
27 D RAY: Come out of there and I won't ask where the other two hundred went.
* 28 A ¶ The roll shifts.
29 A A boy, thin, no more than sixteen, steps out into the light with a fistful of cash held against his chest.

### SCENE s00695 | INT. FONTAINE & BOATENG - BREAK ROOM - MORNING
Detected names (may be incomplete or contain aliases): MARGUERITE FONTAINE, KWAME BOATENG, SLOANE RIDGEWAY, PHIL LINDQVIST, INTERN, DEWEY
* 1 A ¶ A vending machine hums.
* 2 A A fruit bowl holds three plastic lemons.
* 3 A A whiteboard says "CULTURE IS KING" under a doodle of a crown with a frown.
4 A ¶ MARGUERITE FONTAINE, 50s, the managing partner, in a cream suit, pours tea from a silver pot nobody else is allowed to touch.
5 A KWAME BOATENG, 40s, the other partner, in shirtsleeves, leans on the fridge.
6 A SLOANE RIDGEWAY, 30s, head of People & Culture, in athleisure, holds an iPad up like a shield.
7 A PHIL LINDQVIST, 50s, the accountant, sorts sweetener packets by color.
8 A In the doorway, an INTERN, 20s, holds a tray of pastries and wears a lanyard that says "INTERN."
9 D MARGUERITE: Lovely morning.
10 D KWAME: Lovely.
11 D SLOANE: Lovely! We're so aligned.
12 D PHIL (to himself): Pink, yellow, blue.
13 D INTERN: I brought croissants.
14 D MARGUERITE: Of course you did. You're our little sunbeam.
15 A ¶ The Intern sets down the tray.
16 A Everyone takes one.
17 A Everyone chews.
* 18 A A long, pleasant silence.
19 D KWAME: Marguerite and I wanted to thank you all for your hard work.
20 D SLOANE: Amazing work.
21 D PHIL: Sweetener's low.
22 D MARGUERITE: Phil, your numbers this quarter are impeccable.
23 D PHIL: Are they?
24 D MARGUERITE: Impeccable. Isn't that the word, Kwame?
25 D KWAME: It is.
26 A ¶ The Intern smiles wider.
27 A Sloane taps her iPad.
28 D SLOANE: So, as part of our culture refresh, we'll be transitioning a few roles.
29 D PHIL: Which roles?
30 D KWAME: Phil.
31 D PHIL: Which?
32 D MARGUERITE: Yours, dear.
33 A ¶ Phil sets down the packets.
34 A The Intern's smile slips.
35 D INTERN: I'm sorry, did you say transition?
36 D SLOANE: Offboarding, practically speaking.
37 D INTERN (softly): Mine too?
38 D MARGUERITE: Not at all. You'll be taking Phil's desk.
39 D INTERN: I'm sorry. What's my name?
40 D KWAME: Pardon?
41 D INTERN: You've called me intern for six months. I told you my name on day one.
42 D MARGUERITE: Did you? I'm sure it was lovely.
43 D INTERN: It's Dewey.
44 D DEWEY (CONT'D): Dewey Park. I'm the one who built your billing system.
* 45 A ¶ Silence.
* 46 A The fridge clicks.
47 A Phil, still holding a pink packet, looks at Dewey for the first time.
48 D PHIL: He did.
49 D KWAME: We know.
50 D DEWEY: Then you know the system doesn't run without me.
51 D MARGUERITE: We have a plan for that.
52 D DEWEY: Do you.
53 A ¶ He takes off the lanyard.
54 A Sets it on the tray.
55 D DEWEY [CONT'D]: Then enjoy the croissants.

### SCENE s00696 | EXT. ICE CAVE ENTRANCE - GLACIER - DAWN
Detected names (may be incomplete or contain aliases): ZEKE, TALLMAN, ANNELIESE VOSS-HARTE, RAFFERTY, MAHINA, SURVIVOR, CORWIN
* 1 A ¶ Blue-white.
* 2 A Wind.
* 3 A Cliffs of ice stacked like cathedral organ pipes.
4 A ¶ Five figures in orange survival suits crawl from a snow tunnel.
* 5 A Frost in their beards.
* 6 A Smoke from a flare rising behind them.
7 A ¶ EZEKIEL "ZEKE" TALLMAN, 40s, leader, hauls a rope.
8 A ANNELIESE VOSS-HARTE, 30s, glaciologist, clutches a sample case.
9 A RAFFERTY, 50s, a gruff guide, checks his compass.
10 A MAHINA, 20s, the youngest, coughs into her glove.
11 A A SURVIVOR, 40s, who joined them on the ice, trails behind in a torn red anorak.
12 D ZEKE: Rest. Ten minutes.
13 D ANNELIESE: We can't. Whiteout's coming.
14 D RAFFERTY: She's right.
15 D ZEKE: Ten.
16 A ¶ Mahina sits.
17 A Anneliese opens the case.
18 D ANNELIESE: Cores are intact.
19 D MAHINA: Good.
20 A ¶ The Survivor limps up.
21 A Stops.
22 A Looks at their faces.
23 D SURVIVOR: You have food?
24 D ZEKE: A little.
25 D SURVIVOR: Water?
26 D RAFFERTY: Melt snow.
27 D SURVIVOR: Lighter?
28 A ¶ Rafferty tosses one.
29 A The man catches it, thanks him with a nod, and sits apart.
30 D ZEKE: What's your name?
31 D SURVIVOR: Corwin.
32 D ZEKE: How'd you end up out here, Corwin?
33 D CORWIN: Plane. Two days ago. Engines quit.
34 D MAHINA: There were others?
35 D CORWIN: Yes.
36 D ANNELIESE: Where?
37 A ¶ Corwin gestures north.
38 D CORWIN: Gone.
39 D RAFFERTY (low, to Zeke): No wreck on the radar. I checked.
40 A ¶ Zeke studies Corwin.
41 A The man is feeding twigs to a tiny fire, humming.
42 D ZEKE (to Corwin): Show me your hands.
43 D CORWIN: Why?
44 D ZEKE: Humor me.
45 A ¶ Corwin opens his gloves.
46 A His fingers are clean, unfrostbitten, pink as a child's.
47 D MAHINA: He's been out here two days?
48 A ¶ Corwin's humming stops.
49 A He closes his hands, rises smoothly, and the limp is gone.
50 D CORWIN: Not two days.

### SCENE s00697 | INT. VERONA GARDEN CENTER - GREENHOUSE - DAY
Detected names (may be incomplete or contain aliases): LUCIA ROSSI, MATTEO BELLINI, GWEN PRITCHARD, DEV MALHOTRA, AUNT FABIOLA, STAN
* 1 A ¶ Humid.
* 2 A Rows of potted ferns and trays of seedlings.
* 3 A A hand-painted sign: "WEDDING SEASON SALE!"
* 4 A Dust motes in the sun through fogged glass.
5 A ¶ LUCIA ROSSI, 30s, in a green apron, lifts a tray of orchids.
6 A MATTEO BELLINI, 30s, in a suit, stands frozen with a bouquet of white roses.
7 A GWEN PRITCHARD, 30s, Matteo's fiancee, wears a sundress and sunglasses on her head.
8 A DEV MALHOTRA, 30s, Lucia's ex, leans against a potting bench.
9 A AUNT FABIOLA, 70s, in a floral housecoat, supervises from a folding chair.
10 A STAN, 50s, the garden center owner, holds a hose and a clipboard.
11 D MATTEO: Lucia.
12 D LUCIA: Matteo.
13 D GWEN (brightly): You two know each other?
14 D DEV: Know is a strong word.
15 D AUNT FABIOLA: They were engaged. Eight years ago. She threw a plate at him.
16 D LUCIA: It was a saucer.
17 D STAN: Folks, I've got a delivery of mulch at two. Can we speed this up?
18 D GWEN: Matteo, why didn't you tell me?
19 D MATTEO: I didn't think it mattered.
20 D DEV: It matters.
21 D LUCIA: Dev, stay out of it.
22 D DEV: I'm standing in it.
23 D AUNT FABIOLA: Stan, hose them.
24 D STAN: I'm not hosing customers.
25 D GWEN: I want the white roses. Just the roses.
26 D LUCIA: They're not for sale.
27 D GWEN: I'm the customer.
28 D LUCIA: They're mine. I grew them.
29 D MATTEO: Lucia, the wedding is Saturday.
30 D LUCIA: Then you'd better pick another florist.
31 D DEV: Or another bride.
32 A ¶ Gwen takes off her sunglasses, slowly.
33 D GWEN: Say that again.
34 D DEV: I said --
35 D AUNT FABIOLA: Enough! This is a greenhouse, not a telenovela.
36 D STAN: Actually, ma'am, the ficus are getting stressed.
37 A ¶ Lucia sets down the orchids.
38 A Matteo steps toward her, and the roses fall from his hands.
39 D MATTEO: I never stopped.
40 D GWEN: Matteo!
41 D LUCIA: Don't.
42 D DEV (under his breath): Finally.
43 A ¶ Aunt Fabiola reaches into her housecoat, draws out a saucer, and holds it up like a trophy.

### SCENE s00698 | EXT. BRIDGE OF MOSS - TWILIGHT
Detected names (may be incomplete or contain aliases): EIRWEN, BRAM, OLD NETTLE
* 1 A ¶ A stone bridge arches over a stream that runs upward, against gravity, into a pink sky.
* 2 A Lanterns drift like soap bubbles.
3 A ¶ EIRWEN, 30s, a ferrywoman with silver-streaked braids, sits on the parapet mending a net.
4 A BRAM, 20s, in a tunic too thin for the evening, stands at the near end with a satchel.
5 A OLD NETTLE, 80s, a toad-faced hermit, squats on the far end and eats a pear.
6 A ¶ Bram steps onto the bridge.
* 7 A The stones hum under his boot.
8 D EIRWEN: You are early.
9 D BRAM: I walked all night.
10 D EIRWEN: You are still early.
11 A ¶ He reaches the middle.
12 A Nettle chews.
13 D OLD NETTLE: Toll.
14 A ¶ Bram opens the satchel.
15 A Takes out a small bell.
16 A Holds it out.
17 A Nettle looks at it without touching it.
18 D OLD NETTLE [CONT'D]: That's not what she took last time.
19 D EIRWEN: Last time was not him.
20 A ¶ Bram lowers the bell.
* 21 A The stream runs up through the air behind them.
22 D BRAM: Is it enough?
23 A ¶ Eirwen finishes a knot.
24 A Bites the thread.
25 D EIRWEN: Ask again at dawn.

### SCENE s00699 | EXT. SHELLED FARMHOUSE - DAWN
Detected names (may be incomplete or contain aliases): BRANDT, ACHTERBERG, YOUNG SOLDIER, KOWALSKI
* 1 A ¶ Smoke.
* 2 A Rubble.
* 3 A A dead cow.
* 4 A Ahead, a treeline hums with distant engines.
5 A ¶ SGT. BRANDT, 40s, crouches behind a half-wall, rifle across his knees.
6 A LT. ACHTERBERG, 30s, studies a map, mud on his glasses.
7 A A YOUNG SOLDIER, 19, trembles beside them, helmet too big.
8 D BRANDT (to everyone): Heads down. Listen.
* 9 A ¶ The engines swell.
10 A The Young Soldier lifts his head.
11 D BRANDT [CONT'D]: Down!
12 A ¶ Achterberg folds the map.
13 D ACHTERBERG: Armor. Two, maybe three.
14 D BRANDT: Our guns?
15 D ACHTERBERG: Dead.
16 D YOUNG SOLDIER (to himself): Mama. Mama. Mama.
17 D BRANDT: What's your name, son?
18 D YOUNG SOLDIER: Kowalski.
19 D BRANDT: Kowalski. Look at me. On my word, you run for the ditch. You don't stop.
20 D KOWALSKI: Sergeant, I can't --
21 D BRANDT: You can.
* 22 A ¶ A shell lands close.
23 A Dirt rains on all three of them.
24 D ACHTERBERG (to Brandt): Now?
25 D BRANDT: Now!

### SCENE s00700 | INT. MOREAU CONSERVATORY OF GLASS - OBSERVATION GALLERY - NIGHT
Detected names (may be incomplete or contain aliases): CALISTA MOREAU, BART, QUINCE, NAVEEN RAO, LUDMILA, FERRIS, ZHOU MEI
* 1 A ¶ A great glass dome shelters a jungle of tropical plants.
* 2 A Above, rain on the panes.
* 3 A Below, a long dining table laid with candles, crystal, and silver, at which six guests have gathered for a gala dinner.
4 A ¶ CALISTA MOREAU, 50s, the hostess, in a ruby gown, presides at the head.
5 A BARTHOLOMEW "BART" QUINCE, 60s, the collector, red-faced and jovial, sits at her right.
6 A NAVEEN RAO, 40s, the insurance assessor, taps a pen against his wine glass.
7 A LUDMILA, 30s, a violinist, waits in her chair with the instrument in her lap.
8 A FERRIS, 40s, the butler, stands behind with a silver tray.
9 A ZHOU MEI, 30s, a restorer, studies the centerpiece, a small bronze sculpture on a pedestal of black marble.
10 D CALISTA: Ladies and gentlemen. Dinner.
11 D BART: At last.
12 D NAVEEN: Before we eat, Mrs. Moreau, I'd like to confirm the sculpture's appraisal.
13 D CALISTA: Four million.
14 D NAVEEN: Four and a half, I believe, by the last estimate.
15 D CALISTA: You are very precise.
16 D NAVEEN: It is my profession.
17 D ZHOU MEI: It's very beautiful.
18 D BART: It is a fraud.
19 D LUDMILA: Excuse me?
20 D BART: The original is in a private vault in Zurich. I bought it myself. This is the copy.
21 D CALISTA: You are wrong, Bartholomew.
22 D BART: I am never wrong about bronzes.
23 D FERRIS: Shall I pour, madam?
24 D CALISTA: Please.
25 D FERRIS: Very good.
26 D NAVEEN: If it is a copy, the insurance is void.
27 D ZHOU MEI: It is not a copy.
28 D NAVEEN: How would you know?
29 D ZHOU MEI: I restored it. I know every scratch.
30 D BART: Then you are in on it.
31 D ZHOU MEI: I am not in on anything.
32 D LUDMILA: Someone play me a waltz. This is unbearable.
33 D CALISTA: Ludmila, hush. Zhou Mei, if you restored it, what did you find on the base?
34 D ZHOU MEI: A maker's mark. Three letters.
35 D CALISTA: And what were they?
36 D ZHOU MEI: C. M. R.
37 D CALISTA: Calista Moreau, Restorer. My own mark.
38 D BART (slowly): You made it. Yourself.
39 D CALISTA: Thirty years ago. In this conservatory.
40 D NAVEEN: Mrs. Moreau, do you understand what you're saying?
41 D CALISTA: Perfectly. The Zurich bronze is the forgery, Bartholomew.
42 A ¶ Bart stands.
* 43 A His chair crashes behind him.
44 D BART: You sold me a fake.
45 D CALISTA: Forty years ago. For a very good price.
46 D FERRIS: Shall I call the police, madam?
47 D CALISTA: Not yet, Ferris. Pour the wine.

### SCENE s00701 | INT. WESTSIDE MINI-GOLF - WINDMILL HOLE - SUNSET
Detected names (may be incomplete or contain aliases): JAMAL, SKYE, MARCUS, DOLORES, PIM, ^MARCUS
* 1 A ¶ Fake turf, a creaking windmill, a sign: "HOLE 9 - PAR 3."
* 2 A Plastic gnomes line the rail.
3 A ¶ JAMAL, 16, in a faded band tee, leans on his putter.
4 A SKYE, 16, purple streaks in her hair, chews gum.
5 A MARCUS, 17, stands too close to her.
6 A DOLORES, 60s, the attendant in a visor, perches on a stool with a clipboard.
7 A PIM, 12, Skye's little brother, crouches to peer into the windmill.
8 D DOLORES: Last group. Hole nine closes in five.
9 D JAMAL: Skye, you're up.
10 D SKYE (together): I know.
11 D ^MARCUS: I know.
12 A ¶ They glance at each other.
13 A Marcus looks away first.
14 A Skye lines up the putt.
15 D PIM: Don't hit it too hard! The blade will smack it back!
16 D SKYE: Pim, back off.
17 A ¶ He takes two steps back.
18 A She putts.
* 19 A The ball rolls, enters the windmill, and clatters out the wrong side.
20 A ¶ Marcus laughs.
21 A Skye glares.
22 A Jamal hands her another ball without a word.
23 D DOLORES (writing): That's a six.

### SCENE s00702 | INT. THRONE ROOM OF OSRIC - DAY
Detected names (may be incomplete or contain aliases): KING OSRIC, ^LADY VANETH, PIBBLE
* 1 A ¶ A hall of cracked marble and tattered banners.
* 2 A Dust in the shafts of light.
3 A ¶ KING OSRIC, 60s, slumped on a tarnished throne, tugs his gray beard.
4 A LADY VANETH, 40s, in a mourning gown, stands rigid at the foot of the dais.
5 A PIBBLE, the court fool, 30s, juggles three wooden spoons on the steps.
6 D KING OSRIC: Vaneth. Another harvest report?
7 D LADY VANETH: The fields lie fallow, Majesty.
8 D PIBBLE (together with Lady Vaneth): The fields lie fallow, Majesty.
9 D ^LADY VANETH: The fields lie fallow, Majesty.
10 A ¶ Both stop.
11 A Pibble catches a spoon and bows.
12 A Lady Vaneth does not.
13 D KING OSRIC: You rehearse together, I see.
14 D PIBBLE: We have a duet, sire.
15 D LADY VANETH: We have no such thing.
16 D KING OSRIC: Pibble, play me a song.
17 A ¶ Pibble tucks the spoons under his arm and hums.
18 A The King nods slowly.

### SCENE s00703 | INT. TRENCH DUGOUT - NIGHT
Detected names (may be incomplete or contain aliases): CAPTAIN OSTRANDER, LT. PRUITT
* 1 A ¶ Timber props, a guttering candle, a field radio crackling on an ammo crate.
* 2 A Shells thump overhead and dust sifts down.
3 A ¶ CAPTAIN OSTRANDER, 40s, sits against the wall with his helmet in his lap.
4 A He reaches for the handset, lifts it, and puts it down.
5 A He lifts it again.
6 D OSTRANDER: Battalion, this is Fox Two. Do you read?
7 D LT. PRUITT [V.O.] (radio, faint): Fox Two, Battalion. We read you. Say your status.
8 A ¶ He closes his eyes.
9 A When he opens them he is steadier.
10 D OSTRANDER: We are holding. Half the company is gone. He wants us to fall back.
11 D PRUITT [V.O.] (radio): Negative, Fox Two. Hold position. Reinforcements at oh-four-hundred.
12 A ¶ Ostrander laughs, short and dry.
13 A He wipes his face with a gloved hand.
* 14 A A shell lands closer.
* 15 A The candle gutters out.
16 D OSTRANDER: They'll be late.
17 D PRUITT [V.O.] (radio): Say again?
18 A ¶ He sets the handset in its cradle, and in the dark, listens.

### SCENE s00704 | EXT. DEAD MULE CREEK - HOMESTEAD PORCH - DAWN
Detected names (may be incomplete or contain aliases): SHERIFF AMOS TULL, JOSEPHINE CRANE
* 1 A ¶ A sagging cabin of sun-bleached cedar.
* 2 A A rusted washtub.
* 3 A A windmill ticks in the thin wind.
* 4 A The prairie runs flat to the horizon, gold and empty.
5 A ¶ SHERIFF AMOS TULL, 60s, gray mustache, dusty duster, sits on the top step with his hat in his hands.
6 A JOSEPHINE CRANE, 40s, sunburned, in a man's shirt and canvas trousers, stands at the screen door with a shotgun cradled like a baby.
7 D AMOS: Morning, Josephine.
8 D JOSEPHINE: Sheriff.
9 D AMOS: Coffee on?
10 D JOSEPHINE: Not for you.
11 D AMOS: Fair enough.
12 D JOSEPHINE: You ride all night?
13 D AMOS: Most of it.
14 D JOSEPHINE: For what?
15 D AMOS: For your husband.
16 D JOSEPHINE: He's not here.
17 D AMOS: I know. I found his horse at the creek.
18 D JOSEPHINE: That mare throws riders.
19 D AMOS: She does. Wasn't thrown, though. Wasn't anything. Just standing there, saddle empty.
20 D JOSEPHINE: Then he walked off.
21 D AMOS: Without his boots?
22 D JOSEPHINE: He doesn't like boots.
23 D AMOS: Josephine.
24 D JOSEPHINE: I said he doesn't like boots.
25 D AMOS: I'm too old and too tired to argue. Is he in the cellar?
26 D JOSEPHINE (after a beat): No.
27 D AMOS: The well, then.
28 A ¶ She doesn't answer.
* 29 A The windmill ticks.
30 A He rises, puts his hat on, and she lowers the shotgun until the barrels touch the porch boards.

### SCENE s00705 | INT. FINCH & DAUGHTERS PIANO MOVERS - TRUCK BED - DAY
Detected names (may be incomplete or contain aliases): BARRY FINCH, LOLA SANTANGELO, KENJI MORI, GLORIA DUPREE
* 1 A ¶ A grand piano wrapped in blankets and straps, wedged against a ramp.
* 2 A Daylight spills in the open back.
3 A ¶ BARRY FINCH, 50s, sweating through a company polo, pushes from behind.
4 A LOLA SANTANGELO, 30s, in work gloves, pulls from the front.
5 A KENJI MORI, 20s, the new hire, stands on the ramp holding a clipboard and no idea.
6 D BARRY: On three. One. Two --
7 D LOLA: Not on three. After three.
8 D BARRY: That's what I said.
9 D KENJI: You said "on."
10 D BARRY: Thank you, Kenji.
11 A ¶ They heave.
* 12 A The piano rolls three feet and stops.
13 A Barry slips; Lola grabs the strap; the piano rocks.
14 A They both freeze as it teeters and then settles.
15 D LOLA (whispering): Nobody breathe.
16 D BARRY: I'm breathing.
17 D LOLA: Breathe quieter.
18 A ¶ GLORIA DUPREE, 60s, the customer, in a silk robe and curlers, strides up the driveway with a pastry box.
19 D GLORIA: Is that my Steinway?
20 D KENJI: Yes, ma'am.
21 D GLORIA: It's backward.
22 A ¶ Barry and Lola look at each other.
23 A Both groan.
24 A Kenji drops the clipboard.
* 25 A It clatters down the ramp, and the piano, as if answering, begins to roll.
26 D LOLA: Kenji!
27 D BARRY: Catch it!
28 A ¶ All three dive.
* 29 A The piano stops two inches from Gloria's slippers.
30 A She opens the pastry box and offers a donut.
31 D GLORIA: Anyone?

### SCENE s00706 | INT. ALBRECHT HOUSE - KITCHEN - MORNING
Detected names (may be incomplete or contain aliases): MINA, RAYMOND
* 1 A ¶ Yellow curtains, a toaster with a sticker of a cat on it, a calendar with a drawing of the sun.
* 2 A Cereal bowls in a sink.
3 A ¶ MINA, 8, in rain boots and pajamas, stands on a chair at the counter.
4 A She holds a spoon like a microphone.
* 5 A ¶ A cordless phone on the table rings.
6 A She picks it up.
7 D MINA: Hello? This is Mina.
8 D RAYMOND [V.O.] (phone): Mina-bean. It's Dad.
9 D MINA: Where are you?
10 D RAYMOND [V.O.]: Airport. The plane is late.
11 D MINA: Again?
12 D RAYMOND [V.O.]: Again. Is Grandma there?
13 D MINA: She's in the garden. She's yelling at the tomatoes.
14 D RAYMOND [V.O.] (laughing): Tell her I said hi.
15 D MINA: I will.
16 A ¶ She sets the spoon down.
17 A Looks at the calendar.
18 D MINA [CONT'D]: Dad? Can you still make my recital?
19 D RAYMOND [V.O.]: Wouldn't miss it.
20 A ¶ She nods and hangs up.
21 A Outside, a voice calls over the tomatoes.
22 A Mina grins.

### SCENE s00707 | INT. CASTELLANO'S LAUNDRY & DRY CLEANING - BACK ROOM - NIGHT
Detected names (may be incomplete or contain aliases): VINCE CASTELLANO, DOLLY, MOE ZIELINSKI, NADIA, ^DOLLY
* 1 A ¶ Steam.
* 2 A Rows of plastic-wrapped suits.
* 3 A A pressing machine hisses.
4 A ¶ VINCE CASTELLANO, 50s, in an undershirt, stands over a table of cash.
5 A DOLLY, 40s, in a pressed blouse, folds a sheet with great care.
6 A MOE ZIELINSKI, 60s, a hulking presser, sets down the iron.
7 A NADIA, 20s, new to the shop, feeds a collar into the machine.
8 A ¶ Vince counts.
9 A Dolly folds.
10 A Nobody speaks.
11 A ¶ Nadia glances at the door.
12 D VINCE: Moe.
13 D MOE: Yeah?
14 D VINCE: Whose turn was it to lock up?
15 D MOE (together with Dolly): Mine.
16 D ^DOLLY: Hers.
17 A ¶ They look at each other.
18 A Dolly's fold goes crooked.
19 D VINCE: Which?
20 D MOE: I locked it.
21 D DOLLY: I saw him. He locked it.
22 A ¶ Vince sets down the cash.
23 A Nadia presses the machine.
* 24 A It hisses.
* 25 A Steam hides her face.
26 D VINCE (to Nadia): Kid, you got somewhere to be?
27 D NADIA: No, sir.
28 D VINCE: You keep looking at that door.
29 A ¶ Nadia lets go of the machine.
* 30 A A beat.
31 A Moe picks up the iron again.
* 32 A Behind her, the front bell chimes.

### SCENE s00708 | INT. BLACKWOOD LODGE - GREAT ROOM - NIGHT
Detected names (may be incomplete or contain aliases): PROFESSOR QUENTIN LAIRD, ODETTE, BASIL, NGOZI, HARLAN
* 1 A ¶ A hunting lodge in deep snow.
* 2 A Antlers on every wall.
* 3 A A fire roars in a stone hearth.
* 4 A Outside, a blizzard howls.
5 A ¶ PROFESSOR QUENTIN LAIRD, 60s, in a cardigan, stands before the fire.
6 A ODETTE, 30s, a journalist, sits cross-legged on a rug with a notebook.
7 A BASIL, 40s, the caretaker, nurses a whiskey at the bar.
8 A NGOZI, 30s, a doctor, stares at her phone, which shows no bars.
9 A HARLAN, 50s, in a camouflage vest, paces behind the sofa.
10 D QUENTIN (to everyone): I appreciate your patience. As you can see, we are snowed in.
11 D ODETTE: For how long?
12 D BASIL: Two days. Maybe three.
13 D NGOZI (to herself): No signal. Of course.
14 D HARLAN: Who called us here?
15 D QUENTIN: I did.
16 D HARLAN: You said it was a reunion.
17 D QUENTIN: It was.
18 D HARLAN: Then why are we missing someone?
19 A ¶ Nobody answers.
* 20 A The fire cracks.
21 D ODETTE (to Quentin): You said the sixth guest would come at nine.
22 D QUENTIN: He will.
23 D BASIL: It's past eleven.
24 D QUENTIN: He is very punctual, when he wants to be.
25 A ¶ Ngozi pockets her phone.
26 A Harlan's pacing stops.
27 D NGOZI: Quentin, who is he?
28 D QUENTIN: Someone we all knew, a long time ago.
29 D HARLAN: Name.
30 D QUENTIN: Teddy Marsh.
31 A ¶ Basil drops his glass.
* 32 A It shatters.
33 A Odette stops writing.
34 D BASIL (low): Teddy died. Twenty years ago.
35 D QUENTIN: Did he?
36 A ¶ The front door rattles.
37 A Everyone turns.
* 38 A The wind howls, and the rattling stops.
39 A Quentin smiles faintly into the fire.
40 D ODETTE (to herself): Stay calm. Stay calm.
41 D NGOZI: Basil. Check the door.
42 D BASIL: Why me?
43 D NGOZI: Because you're the caretaker.
44 D BASIL: It's not in my contract.
45 A ¶ Harlan crosses the room and lays his hand on the latch.
46 A The rattling begins again, softer, and he draws back.
47 D HARLAN (to the room): Does anyone else hear that?
48 A ¶ Odette closes her notebook.
49 A Quentin sits, finally, in the leather chair, and folds his hands.
50 D QUENTIN: That would be him.

### SCENE s00709 | INT. COLLAPSED MINE SHAFT - SIDE CHAMBER - NIGHT
Detected names (may be incomplete or contain aliases): LIV ARNESEN
* 1 A ¶ Rock walls dripping.
* 2 A A headlamp on the ground throws a ragged yellow cone.
* 3 A A first-aid kit, half open.
* 4 A A small digital recorder on a flat stone.
5 A ¶ LIV ARNESEN, 30s, caked in dust, one leg stretched stiffly in front of her, props herself against the wall.
6 A She presses the recorder's red button and holds it close.
7 D LIV: Day two. Or night two. Hard to say. Battery's at twenty percent. Water's gone. I have three granola bars and a flare.
8 A ¶ She coughs, long, into her sleeve.
9 D LIV [CONT'D]: My name is Liv Arnesen. If someone finds this, tell my mother I wasn't scared. That's a lie, but tell her anyway.
10 A ¶ She clicks it off.
11 A Clicks it on.
12 D LIV [V.O.] (recorded, tinny): Day one. I'm okay. The ceiling came down fast. The west tunnel's blocked. Fine, I'll try the north.
13 A ¶ She listens with her eyes closed.
14 A Her recorded voice breaks off with a muffled crash, then silence, then breathing.
15 D LIV: That was the part where I fell.
16 A ¶ She clicks it off.
17 D LIV [CONT'D]: The truth is, I keep hearing a drip. And I keep hoping it's a river. But it's just a pipe. A leaking pipe.
18 A ¶ She moves her leg.
19 A Winces.
20 D LIV [CONT'D]: Okay. Let's make a plan. One. Don't die. Two. Don't panic. Three. If you panic, see one.
* 21 A ¶ A faint scraping sounds from above.
22 A She freezes.
23 A Waits.
* 24 A Nothing.
25 A She lets out a breath.
26 D LIV [CONT'D]: Rats. Probably rats. Or a rescue team with very bad manners.
27 A ¶ She laughs.
28 A The laugh turns into a sob.
29 A She presses the heel of her hand to her mouth until it passes.
30 D LIV [CONT'D]: Sorry. Sorry. Recording. Where was I?
31 A ¶ She clicks the button again.
32 D LIV [V.O.] (recorded, earlier): If I get out, I'm taking up pottery. Something slow. Something that doesn't fall on me.
33 A ¶ Liv smiles at it, tired and cracked.
34 D LIV: You know, that was a good plan.
* 35 A ¶ Overhead, the scraping returns.
* 36 A Louder.
* 37 A A thin shaft of white light falls through a crack in the rock.
38 D LIV [CONT'D] (whispering): Hello?
39 A ¶ She reaches for the flare, and the rock above her begins to shift.

### SCENE s00710 | INT. TRELAWNEY HOUSE - FRONT HALL - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): AGNES TRELAWNEY
* 1 A ¶ A long hallway, floored in black-and-white tile, lined with portraits of unsmiling ancestors.
* 2 A A grandfather clock.
* 3 A Dust in the window light.
* 4 A A telephone table with an old answering machine blinking red.
* 5 A ¶ The machine clicks.
* 6 A Whirs.
7 D AGNES [V.O.] (recorded, bright): You've reached the Trelawney residence. We can't come to the phone right now. Leave a message and we'll ring you back.
* 8 A ¶ BEEP.
9 D AGNES [V.O., CONT'D] (recorded, older, hoarse): Hello? It's me. It's Agnes. I know you're there. Pick up.
* 10 A ¶ Silence.
* 11 A The machine clicks off.
* 12 A ¶ The front door opens.
13 A AGNES TRELAWNEY, 70s, in a long wool coat, rain on her shoulders, steps in.
14 A A battered leather suitcase in one hand, a key on a lanyard around her neck.
15 A She shuts the door slowly and stands listening to the house.
16 D AGNES: Hello?
* 17 A ¶ The clock ticks.
18 A She sets down the suitcase and crosses to the telephone table.
19 D AGNES [CONT'D] (to herself): Four messages. Who calls a house that has been empty for a year?
20 A ¶ She presses the button.
21 D AGNES [V.O.] (recorded, young): Mother, it's me. Please call me back.
22 A ¶ She stops the machine.
23 A Presses it again.
24 D AGNES [V.O.] (recorded, young): Mother, it's me.
25 A ¶ She stops it.
26 A Her hand trembles on the casing.
27 D AGNES: That was my voice.
28 A ¶ She lifts the receiver, listens to the dial tone, and sets it back.
* 29 A In the mirror above the table, the hall behind her is empty.
30 D AGNES [CONT'D] (softly): It's me, mother. I'm home.
* 31 A ¶ Somewhere upstairs a door closes, gently, as if in answer.

### SCENE s00711 | INT. DEEP-SPACE STATION KESTREL - HYDROPONICS RING - STATION NIGHT
Detected names (may be incomplete or contain aliases): SOLEDAD MARSH, PAVEL IONESCU, COMMANDER HANNE LINDGREN
* 1 A ¶ A curved corridor of glass tubes, each holding a glowing green column of algae.
* 2 A The air is thick and humid and smells faintly of cut grass.
* 3 A Beyond the observation glass, a gas giant turns, banded in rust and ochre.
4 A ¶ DR. SOLEDAD MARSH, 40s, in a lab coat with its sleeves rolled, kneels at a sample port and draws a vial of green fluid.
5 A PAVEL IONESCU, 30s, a technician with a shaved head and a tool belt, stands on a ladder adjusting a pump housing, his headlamp swinging as he talks.
6 D PAVEL: Flow's down again. Eight percent.
7 D SOLEDAD: It's always eight percent.
8 D PAVEL: Which is why it's not a coincidence.
9 A ¶ She caps the vial and holds it to the light.
10 A Pavel climbs down, wipes his hands on a rag, and joins her at the port, and for a moment they both look into the green column as it breathes, slow, bubbling, almost alive, while the gas giant's light slides across their faces.
11 D SOLEDAD: Pavel. Do you hear that?
12 D PAVEL: The pump?
13 D SOLEDAD: Under the pump.
14 A ¶ He tilts his head.
* 15 A Beneath the hum of machinery, a faint rhythmic tapping, like fingers on glass.
* 16 A ¶ The hatch at the end of the corridor opens.
17 A COMMANDER HANNE LINDGREN, 50s, in a gray jacket with silver epaulettes, a tablet in her hand, steps through.
18 A Her face is composed.
19 A Her eyes move over the tubes.
20 D HANNE: Doctor Marsh. Mister Ionescu. Please stop what you're doing.
21 D SOLEDAD: Commander. We were just --
22 D HANNE: I know what you were doing. I read your logs.
23 D PAVEL: Is something wrong?
24 D HANNE: Yes.
25 A ¶ She lifts the tablet.
* 26 A On its screen, a schematic of the ring pulses red.
27 D HANNE [CONT'D]: The culture in tube nine is not algae. It stopped being algae three days ago.
28 D SOLEDAD (slowly): Then what is it?
29 D HANNE: We were hoping you would tell us.
* 30 A ¶ At the far end, the tapping on the glass grows louder.
31 A All three turn.

### SCENE s00712 | INT. PRECINCT 9 - INTERVIEW ROOM - NIGHT
Detected names (may be incomplete or contain aliases): OFFICER TAMAR HAIM, UNKNOWN MAN, DISPATCH, DESMOND
* 1 A ¶ Cinderblock.
* 2 A A table bolted to the floor.
* 3 A A two-way mirror.
* 4 A A fluorescent tube with a wasp trapped inside it.
5 A ¶ OFFICER TAMAR HAIM, 30s, in uniform, sits with a legal pad.
6 A Across from her, an UNKNOWN MAN, 40s, in a damp jacket, holds a paper cup he has not drunk from.
7 D TAMAR: Name.
8 D UNKNOWN MAN: You tell me.
9 D TAMAR: That's not how this works.
10 D UNKNOWN MAN: Then I'm waiting.
* 11 A ¶ A radio on Tamar's shoulder crackles.
12 D DISPATCH [V.O.] (radio): Unit Nine, prints came back on your guy.
13 A ¶ Tamar thumbs the mic.
14 D TAMAR: Go ahead, Dispatch.
15 D DISPATCH [V.O.] (radio): Desmond Pryce. Forty-one. Two priors. Last known address, a storage unit off Route 6.
16 A ¶ She glances at the man.
17 A He keeps his eyes on the table.
18 D TAMAR (to the man): Mr. Pryce.
19 D DESMOND: Don't.
20 D TAMAR: That's your name?
21 D DESMOND: It was my father's.
22 D TAMAR: Mr. Pryce, why are you holding the cup?
23 D DESMOND: Because my hands shake.
24 D DISPATCH [V.O.] (radio): Unit Nine, also, the storage unit's been flagged. Smell reported.
25 A ¶ Desmond sets the cup down very carefully.
26 D TAMAR: What's in unit one-forty?
27 D DESMOND: Nothing you want.
28 D TAMAR: That isn't a no.

### SCENE s00713 | INT. PROUTY COTTAGE - PARLOR - LATE AFTERNOON
Detected names (may be incomplete or contain aliases): ELEANOR PROUTY, GERALD, CONSTABLE IDRIS
* 1 A ¶ A low-ceilinged room.
* 2 A A mantel crowded with china figurines.
* 3 A A shawl on the arm of a chair.
* 4 A A grandfather's walking stick leaning by the door.
* 5 A Rain taps the windows.
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
* 22 A The pen scratches in the silence.
* 23 A A clock chimes the quarter hour.
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
* 51 A It is wet.
* 52 A Rain, perhaps.
* 53 A Or river.

### SCENE s00714 | INT. MARLIN HEIGHTS HIGH SCHOOL - GYMNASIUM - NIGHT
Detected names (may be incomplete or contain aliases): COACH RUSTY CALHOUN, TAMIKA BOONE, DMITRI VOLKOV
* 1 A ¶ Bleachers half full.
* 2 A A banner: "STATE SEMIFINAL."
* 3 A The scoreboard reads 58-58 with 0:04 left.
* 4 A A buzzer hangs in the air.
5 A ¶ COACH RUSTY CALHOUN, 50s, in a windbreaker and clipboard, crouches at the sideline in the huddle.
6 A TAMIKA BOONE, 17, the point guard, sweat-soaked jersey, kneels beside him.
7 A DMITRI VOLKOV, 18, the center, towers over both, towel around his neck.
8 D COACH CALHOUN: Four seconds. Ball goes in at half-court. Tamika, you take it. Dmitri, screen.
9 D TAMIKA: Coach, they'll double me.
10 D DMITRI (together with Tamika): They'll double her.
11 D ^COACH CALHOUN: They'll double you.
12 A ¶ All three stop.
13 A Dmitri grins.
14 A Tamika laughs, short, nervous.
15 D COACH CALHOUN [CONT'D]: Then Dmitri slips the screen. Roll to the basket. Tamika, you hit him.
16 D DMITRI: Over three defenders?
17 D COACH CALHOUN: Over a hundred. You're seven feet of Ukrainian pride.
18 D DMITRI: I'm six-eight.
19 D COACH CALHOUN: And pride.
* 20 A ¶ The horn sounds.
21 A They break the huddle.
22 A Calhoun grips Tamika's shoulder.
23 D COACH CALHOUN [CONT'D]: Whatever happens, I'm proud of you.
24 D TAMIKA: That's what you say before we lose.
25 D COACH CALHOUN: That's what I say before we win, too.
* 26 A ¶ The referee blows the whistle.
27 A Dmitri steps up.
28 A Tamika takes the ball at midcourt, faces the double team, and for one second looks at the rafters.
29 A ¶ She whips the pass over the defenders' heads.
30 A Dmitri catches it at the rim, rises, and jams it through just as the horn blares.
* 31 A ¶ The gym explodes.
32 A Calhoun drops his clipboard.
33 D COACH CALHOUN [CONT'D] (whispering): Nobody tell them I cried.

### SCENE s00715 | INT. STRAND FARMHOUSE - KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): HAZEL STRAND, EWAN BLYTHE, MAGS DELANEY, DEPUTY CUTTER
* 1 A ¶ A big country kitchen: scarred oak table, iron range, a window onto black fields.
* 2 A A hurricane lamp.
* 3 A A radio on the counter.
4 A ¶ HAZEL STRAND, 40s, in a flannel nightgown with a shawl, stands at the sink pumping water.
5 A Her brother-in-law EWAN BLYTHE, 50s, leans against the pantry door with a shotgun broken over his arm.
6 A At the table, MAGS DELANEY, 12, the neighbor's girl, sits wrapped in a quilt, her feet drawn up under her.
7 D HAZEL: Mags, drink your milk.
8 D MAGS: It's cold.
9 D HAZEL: It's meant to be.
10 A ¶ Ewan peers through the window curtains.
11 D EWAN: Nothing yet.
12 D HAZEL: There won't be.
13 D EWAN: You don't know that.
14 D HAZEL: I do.
* 15 A ¶ The radio crackles.
* 16 A A man's voice, thin with static.
17 D DEPUTY CUTTER [V.O.] (radio): Strand place, this is Cutter. Come in.
18 A ¶ Ewan snaps the shotgun shut and crosses to the radio.
19 A Hazel lifts Mags's chin with one finger and checks her eyes.
20 A Mags pulls away and tucks the quilt up to her ears.
21 D EWAN: Cutter. Go ahead.
22 D DEPUTY CUTTER [V.O.] (radio): Roads are washed out. I can't get to you till morning.
23 D EWAN: Can't or won't?
24 D DEPUTY CUTTER [V.O.] (radio): Can't. The bridge is gone.
25 A ¶ Hazel sets down the pail.
26 A Ewan turns the dial a quarter turn.
* 27 A Static swells.
28 D HAZEL: Ewan, don't.
29 D EWAN: Cutter, you hear anything out there?
30 D DEPUTY CUTTER [V.O.] (radio, faint): Like what?
31 D EWAN: Like something in the corn.
* 32 A ¶ Silence on the radio.
* 33 A Then a long, wet scraping sound comes through the speaker.
* 34 A It is not coming from the speaker.
* 35 A It is coming from outside the kitchen window.
36 D MAGS (whispering): It's the same sound as at our house.
37 D HAZEL: What sound, sweetheart?
38 D MAGS: When they took my mom.
39 A ¶ Ewan raises the shotgun.
40 A Hazel snuffs the lamp with a pinch of her fingers.
* 41 A The kitchen goes black.
* 42 A Moonlight picks out the window.
43 D DEPUTY CUTTER [V.O.] (radio): Strand place? Strand place, do you copy?
* 44 A ¶ Something taps the glass, once, with a long fingernail.
45 D EWAN (barely audible): Hazel, get her under the table.
46 D HAZEL: Already there.
47 A ¶ Hazel pulls Mags beneath the oak, and the three of them hold their breath as the tapping travels along the window, around the corner, toward the door.

### SCENE s00716 | INT. PASCAL HOUSE - ATTIC - AFTERNOON
Detected names (may be incomplete or contain aliases): LEONA, PASCAL
* 1 A ¶ Slanted ceiling.
* 2 A Cardboard boxes marked in a dead man's handwriting.
* 3 A A mannequin with a hat on it.
* 4 A A small round window, dusty light.
5 A ¶ LEONA, 40s, in jeans, kneels over a trunk.
6 A Her brother PASCAL, 40s, in a work jacket, stands at the top of the stairs with his arms folded.
7 D LEONA: You took Dad's watch.
8 D PASCAL: He gave it to me.
9 D LEONA: In the hospital. When he couldn't talk.
10 D PASCAL: He pointed.
11 D LEONA: At you. Or at the window.
12 D PASCAL: At me.
13 A ¶ Leona lifts a sweater from the trunk.
* 14 A A box of old photographs falls out.
15 A She catches it.
16 A Pascal takes a step forward, both hands out, and they hold the box between them for a moment, each with a grip on a corner.
17 D PASCAL [CONT'D]: Give me that.
18 D LEONA: You give it.
19 A ¶ They tug.
* 20 A The lid pops.
21 A Photographs scatter across the floor, and both stop, crouch, and begin gathering them without a word.
22 D LEONA [CONT'D]: This one. Do you remember?
23 D PASCAL: Don't.
24 D LEONA: You were nine. You had that haircut.
25 D PASCAL: He cut it himself, with kitchen scissors.
26 D LEONA: You cried for a week.
27 D PASCAL: I did not.
28 D LEONA: You hid in the car.
29 D PASCAL: Okay. I hid in the car.
30 A ¶ She hands him the photograph.
31 A He studies it for a long time.
32 A His thumb moves over the face.
33 D PASCAL [CONT'D]: Take the watch.
34 D LEONA: I don't want the watch.
35 D PASCAL: Then why are we here?
36 D LEONA: Because I don't want to be here alone.
37 A ¶ He sits on the trunk.
38 A She sits beside him, and they look at the photographs spread across the boards like leaves.

### SCENE s00717 | INT. COUNTY COURTHOUSE - COURTROOM 4B - DAY
Detected names (may be incomplete or contain aliases): DELIA WHITCOMBE, JUDGE HORATIO NG
* 1 A ¶ A cavernous room of dark oak and brass.
* 2 A A ceiling fan turns lazily.
* 3 A Afternoon light angles through tall, dusty windows onto a worn gallery bench.
* 4 A The gallery is empty.
* 5 A The jury box is empty.
* 6 A A court reporter's stenograph sits unmanned.
7 A ¶ DELIA WHITCOMBE, 40s, in a charcoal suit that has been pressed too many times, stands alone at the defense table with a stack of file folders.
8 A Her reading glasses hang from a chain.
9 A Her jaw is set.
10 A On the bench above her, JUDGE HORATIO NG, 70s, white-haired, with a face carved of patience and old tobacco, peers down through half-moon spectacles.
11 D JUDGE NG: Ms. Whitcombe, your motion is untimely.
12 D DELIA: Your Honor, the evidence was only disclosed yesterday.
13 D JUDGE NG: By whom?
14 D DELIA: By the prosecution. In a box. Left on my doorstep.
15 D JUDGE NG: At what hour?
16 D DELIA: Ten past midnight.
17 D JUDGE NG: And who delivered it?
18 D DELIA: No one signed for it.
19 A ¶ The judge removes his spectacles and polishes them on his sleeve.
* 20 A The ceiling fan creaks.
21 D JUDGE NG [CONT'D]: Ms. Whitcombe, I have sat on this bench for thirty-one years. I have heard a great many motions. This is the first one that arrived by phantom.
22 D DELIA: The contents are not phantom, Your Honor. They are bank records. They show the victim's account was emptied three weeks before the alleged crime.
23 D JUDGE NG: By whom?
24 D DELIA: By my client's accuser.
25 D JUDGE NG: Do you have a witness?
26 D DELIA: I have the documents.
27 D JUDGE NG: Documents do not testify.
28 D DELIA: Then let me call the bank.
29 D JUDGE NG: Today?
30 D DELIA: Now.
31 A ¶ He sets his glasses back on his nose.
32 A For a long moment he studies her, and the silence stretches.
33 A Delia does not blink.
34 D JUDGE NG [CONT'D]: You understand that if I allow this, and it fails, your client's sentence will be harsher.
35 D DELIA: I understand.
36 D JUDGE NG: And you still wish to proceed?
37 D DELIA: I have never wished anything more.
38 A ¶ Judge Ng nods once, slowly.
39 A He lifts his gavel, looks at it, and sets it down without striking.
40 D JUDGE NG: Then bring in the bank.

### SCENE s00718 | EXT. MOUNTAIN PASS - SNOWBOUND BUS - DAY
Detected names (may be incomplete or contain aliases): KIT, BERNARD, YARA, LARS, PILAR, RADIO, TOBIAS
* 1 A ¶ A stalled coach bus lists on a white slope, wheels buried to the axles.
* 2 A Wind hisses across the frozen glass.
* 3 A Pines bend under the weight of snow.
* 4 A ¶ Inside, a dim cabin.
* 5 A Frost on the windows.
* 6 A Seven seats cleared in a tight circle near the driver's cab.
7 A ¶ KIT, 40s, a nurse in a puffy coat, rubs a young girl's hands.
8 A BERNARD, 60s, a retired surveyor with a thick gray scarf, studies a folded map.
9 A YARA, 20s, a student with a backpack, shivers in her sleeping bag.
10 A LARS, 50s, the bus driver, in his uniform jacket, works a hand-crank radio.
11 A PILAR, 30s, a mother, holds a thermos of soup between her palms.
12 A They are all gaunt, hollow-eyed, patient.
13 D KIT: Everyone drink something.
14 D BERNARD: We're low on water.
15 D KIT: We have snow.
16 D LARS: Snow takes heat to melt.
17 D YARA: Then we burn something.
18 D BERNARD: We burned the seat covers yesterday.
19 D PILAR (to herself): Hold on, hold on.
20 D LARS (cranking): Come on, you old brute.
* 21 A ¶ The radio coughs.
* 22 A A thin, tinny voice breaks through.
23 D RADIO [V.O.] (garbled): -- anyone -- copy --
24 A ¶ Everyone freezes.
25 A Lars twists the dial.
26 D LARS: This is the Valmont Pass bus, number twelve. We're stranded at mile forty. Do you read?
27 D RADIO [V.O.] (garbled): -- stay put -- help -- morning --
28 D LARS: Say again?
* 29 A ¶ The signal dies.
30 A Lars slumps.
31 A Pilar clutches the thermos.
32 D KIT: Morning. That's something.
33 D YARA: Whose morning?
34 D BERNARD: Don't start.
35 A ¶ Kit pulls her glove off and checks the girl's pulse at the wrist.
36 A The girl, who has not spoken, turns her head toward the door.
* 37 A ¶ The bus door hisses open.
* 38 A A gust of snow sweeps in.
39 A A figure stands in the stairwell, bundled in white, a rifle slung over one shoulder: TOBIAS, 40s, a ranger, ice crusted on his beard.
40 D TOBIAS: Got your signal. I'm Tobias. I'm here to get you out.
41 A ¶ Nobody moves.
42 A Then Pilar lets out a sob.
43 A Kit rises.
44 A Bernard folds the map.
45 D LARS: How many of you?
46 D TOBIAS: Just me. Sled's at the bottom. Two trips.
47 D KIT: She goes first.
48 D TOBIAS: Who?
49 D KIT (gesturing): Her. And she goes with her.
50 A ¶ Pilar nods.
51 A She stands, takes the girl's hand, and moves to the door.

### SCENE s00719 | INT. STARSHIP ARGENT DAWN - ENGINE CORE - SHIP NIGHT
Detected names (may be incomplete or contain aliases): COMMANDER HALLORAN, XIMENA ROJAS-VANCE, BOSUN TUCK, ENSIGN RAVI
* 1 A ¶ A cathedral of glowing pipes and throbbing coils.
* 2 A A yellow warning lamp spins.
3 A ¶ COMMANDER HALLORAN, 50s, in a gold-trimmed uniform, grips a rail.
4 A DR. XIMENA ROJAS-VANCE, 40s, a physicist with wild gray hair, taps a console.
5 A BOSUN TUCK, 60s, a grizzled engineer in oil-stained overalls, hauls on a valve wheel.
6 D HALLORAN: Doctor, how long?
7 D XIMENA: Eleven minutes before the core goes critical.
8 D TUCK: Eleven? I said nine.
9 D XIMENA: Your instruments are older than my daughter, Tuck.
10 D TUCK: They've never lied to me.
11 A ¶ ENSIGN RAVI, 20s, in a crisp blue jumpsuit, bursts through the hatch, breathless.
12 D RAVI: Commander! The aft shields are failing!
13 D HALLORAN: Ensign, take the other console.
14 D RAVI: Sir, I haven't been trained --
15 D HALLORAN: Neither was I, when I started.
16 A ¶ Ravi darts to the console.
17 A Ximena and Tuck both reach for the same lever.
18 A Their hands collide.
19 A They glare at each other and then, as one, push.
* 20 A ¶ The lamp flares white.
* 21 A The pipes shudder.
22 A Halloran braces, Ravi ducks, Tuck is thrown against the wall.
23 D XIMENA: It's working!
24 D TUCK: Don't say that. Saying it jinxes it.
25 D HALLORAN (quiet): Bosun. Doctor. Ensign. If we get through this, I'm buying the first round.
26 D RAVI: Sir, is that a promise?
27 D HALLORAN: It's an order.
* 28 A ¶ The core's hum drops to a purr.
* 29 A The warning lamp dims.
30 A All four slump, grinning.

### SCENE s00720 | INT. MUNICIPAL PIGEON CENSUS OFFICE - SUBBASEMENT - DAY
Detected names (may be incomplete or contain aliases): GWENDOLYN PRATT, TOBIAS NKEMELU, ANJALI VERMA, OSKAR LINDQVIST, MARISOL DUARTE, INTERCOM, LEONARD
* 1 A ¶ A windowless room under City Hall, lit by one fluorescent tube that has been dying since the last administration.
* 2 A Clipboards hang from nails like pelts.
* 3 A On every wall, laminated maps of the city are stuck with coloured pins, each pin a flock nobody has visited in years.
4 A ¶ GWENDOLYN PRATT, fifties, Regional Avian Statistics Director, stands on a wobbling chair in a cardigan the colour of weak tea.
5 A She holds a single grey feather aloft like a verdict.
6 A ¶ Around the long table, the team has gone still.
7 A ¶ TOBIAS NKEMELU, thirties, the only person in the office with a tan, lowers his sandwich.
8 A ANJALI VERMA, twenties, sharp-eyed, clicks her pen once, twice.
9 A OSKAR LINDQVIST, sixties, a man built entirely of corduroy, does not look up from his crossword.
10 A MARISOL DUARTE, forties, the department's tired heart, sits with her coat still on.
11 D GWENDOLYN (to everyone): Colleagues. The Mayor's office wants the Q3 count by four o'clock. We have counted, by my reckoning, eleven pigeons.
12 D TOBIAS: Eleven in total? In the city?
13 D GWENDOLYN: Eleven that are confirmed to be pigeons and not, as Oskar's report suggested, "a mood."
14 D OSKAR (not looking up): Seven letters. "Regret, in a hat."
15 D ANJALI (to Gwendolyn): Ma'am, I've been telling you since March. The spreadsheet's counting the same bird. Reginald. He's got a limp.
16 D GWENDOLYN: Reginald is a limp. Reginald is not a flock.
17 A ¶ Gwendolyn steps down from the chair.
* 18 A It rocks, then forgives her.
19 A She smooths the cardigan and, for the first time, looks tired.
20 D GWENDOLYN [CONT'D] (muttering, to herself): Thirty years. Thirty years of pins.
* 21 A ¶ An INTERCOM crackles on the wall above the door, a beige box with a tongue of dust.
22 D LEONARD [V.O.] (over intercom, bright): Hello, subbasement! Leonard from Facilities. Quick heads up, the four o'clock deadline has been moved to "whenever." The Mayor has discovered squirrels.
23 A ¶ The room exhales as one body.
24 A Tobias resumes his sandwich.
25 A Anjali caps her pen.
26 D MARISOL (to Leonard's box): Thank you, Leonard.
27 D LEONARD [V.O.] (over intercom): Also, someone's been leaving feathers in the lift. Just flagging.
28 A ¶ Gwendolyn looks at the feather in her hand.
29 A She walks to the nearest map and, with great ceremony, pins it to the middle of the city.
30 D GWENDOLYN (quietly, to Marisol): Put that down as twelve.
31 D MARISOL: It's a feather.
32 D GWENDOLYN: It's a pigeon in spirit.
33 A ¶ Oskar fills in a word.
34 A He nods, satisfied, at no one at all.
35 D OSKAR (to himself): Hat.

### SCENE s00721 | INT. ALL-NIGHT LAUNDROMAT - 3 A.M.
Detected names (may be incomplete or contain aliases): CATALINA SOTO-MERCADO, EZEKIEL
* 1 A ¶ Forty dryers turn like slow, patient moons.
* 2 A The windows have gone to black mirrors.
3 A In the one plastic chair that isn't cracked, CATALINA SOTO-MERCADO, seventies, sits guarding a wicker basket on her lap as if it were a sleeping child.
4 A ¶ Across the aisle, her grandson EZEKIEL, sixteen, all elbows and hood, stares at his phone and refuses to be in the building.
5 D EZEKIEL: You said an hour, Abuela. It's been three.
6 D CATALINA: Then sit. Fold something.
7 D EZEKIEL: There's nothing to fold. It's all in the dryer. Mom's stuff. Dad's stuff.
8 A ¶ Catalina's hand tightens on the basket.
* 9 A A dryer thuds to a stop behind them.
10 A Neither moves.
11 D CATALINA: That is not your father's stuff.
12 A ¶ Ezekiel pockets the phone and crosses the aisle in four strides.
13 A He reaches for the basket.
14 A She pulls it to her chest.
15 A For a moment they hold opposite ends of it, nose to nose, a wicker tug-of-war under the buzzing light.
16 D EZEKIEL: He left it. It's a shirt, it's a stupid shirt.
17 D CATALINA: It is the shirt he was wearing the day he taught you to ride.
18 D EZEKIEL: That I don't remember!
* 19 A ¶ The basket tips.
* 20 A A faded blue shirt slides out and lands between them, half open on the tile.
21 A They both freeze, breath held, staring at it as if it might stand up.
22 A ¶ Ezekiel kneels first.
23 A Catalina follows, knees cracking, and together they lift it by the sleeves, like folding a flag with no ceremony.
24 D CATALINA (softly): Hold your end.

### SCENE s00722 | EXT. SALT-FLAT FERRY LANDING - NOON
Detected names (may be incomplete or contain aliases): DEACON CROWE, BIRDIE PRUETT
* 1 A ¶ White.
* 2 A Everything white.
* 3 A Heat shimmer.
* 4 A A rotting dock jutting into a lake that dried up a decade ago.
* 5 A A ferry sits stranded on cracked crust, hull tilted.
6 A ¶ DEACON CROWE, forties, sits on an upturned bucket by the ramp.
7 A Black coat, grey with salt.
8 A Rifle across his knees.
9 A He doesn't aim it.
10 A He just keeps it.
* 11 A ¶ Hoofbeats, slow.
12 A A shape resolves in the glare.
13 A Rider.
* 14 A Mule.
15 A ¶ BIRDIE PRUETT, thirties, wide hat, rolled sleeves.
16 A Sunburnt nose.
17 A She dismounts without hurry.
18 A Ties the mule to a piling.
19 A ¶ He watches.
20 A Doesn't rise.
21 D BIRDIE: Deacon.
22 D DEACON: Birdie.
23 A ¶ She takes a canteen off the saddle.
24 A Drinks.
25 A Holds it out.
26 A He considers it.
27 A Takes it.
28 D BIRDIE: You're a long way from anybody.
29 D DEACON: That's the idea.
30 A ¶ She sits on the ramp's edge.
31 A Boots dangling over dry crust.
32 A He caps the canteen, passes it back.
33 A Neither says anything for a while.
* 34 A ¶ A gull cries.
* 35 A Where it came from, no one knows.
36 A Both look up.
37 A Both look down again.
38 D DEACON [CONT'D]: They say the lake'll come back.
39 D BIRDIE: They say a lot.
40 A ¶ He grins.
41 A Small.
42 A It leaves quick.
43 A ¶ She pulls a folded paper from her vest.
44 A Turns it over in her fingers.
45 A He sees it.
46 A Eyes narrow.
47 A Rifle shifts a half inch on his knees.
48 A ¶ They both go still.
* 49 A Wind hushes the dock timbers.
50 D DEACON [CONT'D]: That mine?
51 D BIRDIE: Was yours. It's a telegram now.
52 D DEACON: Who from?
53 D BIRDIE: Your sister. Says come home.
54 D DEACON (flat): Don't have one.
55 D BIRDIE: Then somebody's lying, Deacon.
56 A ¶ He stares at the ferry.
57 A Her eyes stay on him.
* 58 A The heat hums.
59 A ¶ She unfolds the paper.
60 A Holds it up between them like a card she doesn't want to play.
61 D BIRDIE [CONT'D]: Read it with me.
62 A ¶ He doesn't take it.
63 A He doesn't leave.
64 A ¶ After a long moment he sets the rifle down on the planks.
65 A Slides over on the bucket.
66 A She shifts toward him, paper between them.
67 A They read.
68 D DEACON (low): Hell.
69 D BIRDIE: Yeah.
* 70 A ¶ Salt glitters.
71 A Neither moves.
