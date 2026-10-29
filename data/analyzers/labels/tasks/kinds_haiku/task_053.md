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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0153.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01828 | INT. DESALINATION HABITAT - CORRIDOR - NIGHT
Detected names (may be incomplete or contain aliases): ENGINEER PRIYA NAIR, HELMUT KASSEL, UNIT SEVEN
* 1 A ¶ Seabed pressure hum.
* 2 A Condensation on every pipe.
* 3 A Emergency strips at ankle height.
4 A ¶ ENGINEER PRIYA NAIR, 40s, sits on the floor against a bulkhead, a toolkit open beside her.
5 A She is rewiring a panel by feel.
6 A Her hands are steady.
7 A ¶ DR. HELMUT KASSEL, 60s, stands over her in a gray sweater.
8 A He holds a clipboard he has stopped writing on.
9 A ¶ A drone, UNIT SEVEN, a squat gray cylinder on treads, idles at the end of the corridor, blue eye dimming and brightening.
10 D HELMUT: Pressure's down four percent.
11 D PRIYA: I know.
12 D HELMUT: Since the shift change.
13 D PRIYA: I said I know.
14 A ¶ She strips a wire with her teeth, spits the insulation.
15 A Helmut watches her do it.
16 D HELMUT: You're not asking me to hold the light.
17 D PRIYA: You'd drop it.
18 A ¶ He sets the clipboard on the floor, clicks on the penlight, and aims it at the panel.
19 A She does not thank him.
20 A ¶ The drone rolls forward a meter and stops.
21 A Its eye turns amber.
22 D UNIT SEVEN [V.O.] (flat synthetic voice): Reminder. Evacuation capsule capacity is two. Habitat population is three.
23 A ¶ Priya's hands stop.
24 A Helmut's penlight wavers.
25 D PRIYA: Unit Seven. Mute.
26 D UNIT SEVEN [V.O.]: Muting is not permitted during a pressure advisory.
27 D PRIYA: Then roll back.
28 A ¶ The drone rolls back.
* 29 A A meter.
* 30 A Two.
* 31 A The amber stays on.
32 A ¶ Helmut crouches.
33 A He puts a hand on Priya's wrist.
34 A She looks at it, then at him.
35 A She does not pull away.
36 D HELMUT: How long until it holds?
37 D PRIYA: An hour. Maybe three.
38 D HELMUT: And if it doesn't?
39 A ¶ She shrugs.
40 A He nods slowly.
41 A He takes his hand back, picks up the clipboard, and writes something.
42 A Tears off the page.
43 A Folds it.
44 A Sets it beside her toolkit.
45 D PRIYA: What is that?
46 D HELMUT: Names, for the capsule. In order.
47 A ¶ She doesn't open it.
48 A She goes back to the panel, and the wire slides home with a small click.
* 49 A ¶ The pipes overhead shudder once.
* 50 A A bead of water forms on the ceiling, hangs, and falls onto the folded paper.
51 A ¶ Priya covers it with her palm.
52 A She looks up the corridor at the drone's amber eye.
53 D PRIYA [CONT'D]: Unit Seven. Tell the surface we are fine.
54 D UNIT SEVEN [V.O.]: Transmitting. Confirm: you are fine?
55 A ¶ She says nothing.
56 A The eye returns to blue.
57 A ¶ Helmut slides down the wall until he is sitting beside her.
58 A They watch the panel.
* 59 A The pressure gauge ticks up one notch, then holds.
60 D HELMUT (quietly): Three percent.
61 D PRIYA: Two.
62 A ¶ He laughs, softly, and closes his eyes.

### SCENE s01829 | INT. CIRCUIT COURT HALLWAY - AFTERNOON
Detected names (may be incomplete or contain aliases): ROSALIND HARTE, ELIAS HARTE, ATTORNEY NOEL BASHIR
* 1 A ¶ A long terrazzo corridor lined with scarred oak benches, each with a brass nameplate for a donor nobody remembers.
* 2 A Fluorescent tubes hum overhead.
* 3 A A radiator under a tall window knocks twice and goes silent.
* 4 A Through the glass, a parking structure and a gray sky.
5 A ¶ On the bench nearest the courtroom doors, ROSALIND HARTE, 58, sits upright in a navy suit that fit better ten years ago.
6 A Her hands hold a plastic folder closed on her lap.
7 A Her reading glasses hang from a chain, untouched.
8 A ¶ Next to her but not touching, her son ELIAS HARTE, 31, hunches forward, elbows on his knees, a county-issue lanyard around his neck, his hair cut short by someone else.
9 A He picks at a thread on his cuff.
10 A ¶ At the water fountain, leaning with arms crossed, is ATTORNEY NOEL BASHIR, 40s, in a charcoal suit and a tie loosened half an inch.
11 A He has been standing there for some time.
12 D ROSALIND: You haven't eaten.
13 D ELIAS: I'm fine.
14 D ROSALIND: There's a machine at the end. I have quarters.
15 D ELIAS: I'm not hungry.
16 D ROSALIND: You said that in the car.
17 D ELIAS: Because I wasn't.
18 D NOEL (crossing to them): We have twenty minutes. The judge wants the statement before the lunch recess.
19 D ROSALIND: Does it have to be him who reads it?
20 D NOEL: It's his statement, Mrs. Harte.
21 D ROSALIND: I wrote half of it.
22 D ELIAS: You wrote all of it.
23 D ROSALIND: I wrote what you told me.
24 D ELIAS: You wrote what I should have told you.
25 D NOEL: Either way, it needs to be said out loud. The judge wants to hear a voice, not a page.
26 D ELIAS: And if my voice doesn't work?
27 D NOEL: Then you wait and try again.
28 D ELIAS: She doesn't give people a second try.
29 D NOEL: She gives them more than you think.
30 D ROSALIND: Noel, do you have children?
31 D NOEL: Two.
32 D ROSALIND: Then you know it's not about what the judge gives.
33 D NOEL (gently): I know.
34 A ¶ Elias stands abruptly, walks to the window, and lays his palm flat against the glass.
* 35 A The radiator knocks again.
36 A Rosalind opens the folder, takes out three typed pages, and smooths them against her knee.
37 D ROSALIND: I'll read the first paragraph with you.
38 D ELIAS: Mom.
39 D ROSALIND: Not for the judge. For the hallway.
40 D ELIAS: Nobody's in the hallway.
41 D ROSALIND: Then it won't matter if I stumble.
42 A ¶ She begins, almost inaudibly, to read.
43 A Elias turns from the window.
44 A Noel steps back toward the fountain, giving them the bench.

### SCENE s01830 | INT. VICTORIAN PARLOR - EVENING
Detected names (may be incomplete or contain aliases): LADY CORDELIA ASHWORTH, SIR REGINALD ASHWORTH, PHILIPPA MARLOWE, EZEKIEL FROST, HARGREAVES, CAPTAIN JULIAN VANE
* 1 A ¶ 1893.
* 2 A Gaslight, heavy drapes, a piano no one has touched in years.
* 3 A A dinner is being given and nothing has been eaten.
4 A ¶ LADY CORDELIA ASHWORTH, 50s, black silk, sits very straight at the head of a small table.
5 A Beside her, her husband SIR REGINALD ASHWORTH, 60s, whiskers waxed, studies a fork.
6 A Opposite, their niece PHILIPPA MARLOWE, 20s, pale blue gown, turns her water glass a quarter turn and back.
7 A Next to her, the family solicitor MR. EZEKIEL FROST, 50s, spectacles, holds a folded paper he has not yet unfolded.
8 A By the sideboard stands the butler HARGREAVES, 60s, white gloves, expressionless.
9 A And at the foot of the table, hat still on, sits CAPTAIN JULIAN VANE, 30s, in a regimental coat with one button missing.
* 10 A ¶ A clock ticks.
11 A Nobody lifts a spoon.
12 D LADY CORDELIA: Hargreaves. The soup is cold.
13 D HARGREAVES: It was cold when it was served, madam.
14 D LADY CORDELIA: Then take it away.
15 A ¶ Hargreaves does not move.
16 A Sir Reginald sets the fork down.
17 A Philippa stares at the captain's missing button.
18 D SIR REGINALD: Frost. You had something to read.
19 D MR. FROST: I had, Sir Reginald. After dinner.
20 D SIR REGINALD: There is no dinner.
21 D MR. FROST: Quite.
22 A ¶ Mr. Frost unfolds the paper.
23 A He smooths it twice.
24 A Captain Vane takes off his hat and sets it, crown down, beside his plate.
25 A Philippa lifts her eyes to the ceiling.
* 26 A ¶ A bell rings in the hall.
* 27 A The house telephone, a new brass horn on the wall, rattles.
28 A ¶ Hargreaves slips out to the hall.
29 A The receiver is lifted.
* 30 A His voice carries back through the open door.
31 D HARGREAVES [O.S.]: Yes. Yes. I will convey it.
* 32 A ¶ The receiver is set down with great care.
33 A He returns.
34 D LADY CORDELIA: Well?
35 D HARGREAVES: The constable, madam. He is at the gate.
36 A ¶ Captain Vane stands.
37 A His chair scrapes.
38 A Sir Reginald does not look at him.
39 D PHILIPPA (low): Julian.
40 D CAPTAIN VANE: Sit down, Pippa.
41 A ¶ She does not sit down, because she has not stood.
42 A She holds the glass.
43 A Lady Cordelia dabs her mouth with a napkin that has touched nothing.
44 D LADY CORDELIA: Reginald, the paper.
45 D SIR REGINALD: Frost.
46 D MR. FROST (reading): "I, Hartley Ashworth, being of sound mind--"
47 D CAPTAIN VANE: Stop.
48 D MR. FROST: Captain, I must.
49 D CAPTAIN VANE: Not that one. The other.
50 A ¶ Mr. Frost turns the page over.
* 51 A There is a second sheet beneath it.
52 A He reads it silently.
53 A His face loses color.
54 A He passes it to Sir Reginald, who reads and passes it to his wife.
55 A ¶ Lady Cordelia folds it into a square, then a smaller square, then places it in the candle flame.
* 56 A ¶ The paper curls and blackens.
57 A Nobody breathes.
58 D HARGREAVES (at the door, quietly): Shall I admit the constable, madam?
59 D LADY CORDELIA: Not yet.
60 A ¶ She takes up her spoon.
61 A She tastes the cold soup.
62 A She sets the spoon down.
63 D LADY CORDELIA [CONT'D]: Now.

### SCENE s01831 | INT. MUSEUM VENTILATION DUCT - NIGHT
Detected names (may be incomplete or contain aliases): NELL PARISH
* 1 A ¶ A square steel tunnel, barely wider than shoulders.
* 2 A A penlight clenched in teeth throws a thin beam ahead.
3 A ¶ NELL PARISH, 30s, black bodysuit, crawls on her elbows toward a grate.
4 A She stops.
5 A Listens.
* 6 A Under her, far below, a floor polisher whines and fades.
7 A She starts again, slower, dragging a duffel behind her by a strap.
* 8 A ¶ A tiny recorder clipped to her collar clicks and plays her own voice, recorded days ago, flat and rehearsed.
9 D NELL [V.O.] (recorded): Guard's on the east wing at the top of the hour. Four minutes, no more.
10 A ¶ She does not react.
11 A She reaches the grate and peers through.
* 12 A Below is a gallery, pale, a single painting lit on the far wall.
13 A She takes the penlight out of her mouth and clicks it off.
14 A ¶ She works a screwdriver into the first bolt.
* 15 A It turns.
* 16 A The second.
* 17 A The third sticks.
18 A She breathes out, wipes her palm on her thigh, tries again, and it gives with a squeal that echoes along the duct.
19 A ¶ She freezes.
* 20 A Below, the polisher stops.
* 21 A Footsteps, slow, heavy, approaching.
* 22 A A flashlight beam crosses the gallery floor and slides up the wall.
* 23 A It passes the grate.
* 24 A It passes again.
25 A She holds her breath until the beam moves on.
26 D NELL [V.O.] (recorded): Three minutes. Do not rush the rope.
27 A ¶ She lifts the grate out, lays it in the duct, and rolls onto her back.
28 A She unclips a coil of rope from her belt, ties it to a bracket, tests the knot with her full weight.
29 A Then she feeds the rope through the opening, lowers herself over the edge, and hangs there, boots swinging three meters above the parquet.
30 A ¶ She drops the last meter.
31 A Lands in a crouch.
* 32 A Silent.
33 A ¶ She crosses to the painting, a small landscape in a heavy frame.
34 A She runs two fingers around the wire.
35 A Pulls a thin cutter.
36 A Snips.
* 37 A The frame sags.
* 38 A ¶ Behind her, a door handle turns.
39 D NELL [V.O.] (recorded): If you hear the handle, you're already late.
40 A ¶ She doesn't stop.
41 A She slips the canvas free of the frame, rolls it into a tube, shoves it into her duffel, and runs.
* 42 A The door opens as she reaches the rope.
43 A She climbs, hand over hand, as a flashlight beam swings up through the gap.
44 A ¶ She makes the grate.
45 A Pulls the rope up after her.
46 A Drags the grate back across the opening, and lies flat in the dark, her heart loud in her ears.
* 47 A ¶ Below, the guard's boots stop under the vent.
* 48 A A long moment.
* 49 A Then they turn and walk away.
50 A ¶ She reaches up and switches off the recorder.
51 A She smiles in the dark.

### SCENE s01832 | INT. ROADSIDE WAY STATION - DAY
Detected names (may be incomplete or contain aliases): MA TULLIVER, SPARROW, ORVILLE PENN, SABINA ROJAS, OSCAR HALE, JUDE CALLAHAN, ^OSCAR
* 1 A ¶ Adobe walls, a stove gone cold, six mismatched chairs pulled to a long table.
* 2 A Dust hangs in the shaft of light from the door.
* 3 A Outside, a horse stamps.
4 A ¶ Six people sit down to a meal none of them wants.
5 A The proprietor, MA TULLIVER, sixty, sleeves rolled, ladles beans into tin bowls and says nothing.
6 A Her hired boy, SPARROW, fifteen, sets them down one by one.
7 A A drummer in a checked vest, ORVILLE PENN, forty, sits with his sample case under his boots.
8 A A woman in gray travel wool, SABINA ROJAS, thirty, holds her bowl and does not lift the spoon.
9 A A tall rancher, OSCAR HALE, fifty, takes his hat off for grace though no one says one.
10 A And in the corner chair, back to the wall, a stranger in a dusty duster, JUDE CALLAHAN, thirty-five, watches the door.
* 11 A ¶ The beans steam.
* 12 A For a long moment there is only the sound of spoons.
13 D ORVILLE: Lovely weather for the road.
14 D OSCAR: It's rained twice in a year.
15 D ORVILLE: That's what I said.
16 D SABINA: Is there a stage tonight?
17 D MA TULLIVER: Stage came and went.
18 D SABINA: I was told it comes at four.
19 D SPARROW: It did come at four. You were upstairs.
20 D SABINA: Nobody woke me.
21 D MA TULLIVER (over her): Sparrow, fetch the bread.
22 A ¶ He goes.
23 A Oscar glances at Jude, who has not touched his bowl.
24 A Orville clears his throat and opens his mouth, but Sabina speaks first.
25 D SABINA: Mister, are you not hungry?
26 D JUDE: Not particularly.
27 D OSCAR: He's waiting on somebody.
28 D JUDE: I'm waiting on supper to finish.
29 D OSCAR: Then it's finished.
30 A ¶ He shoves his bowl away.
31 A Ma Tulliver sets down her ladle.
* 32 A The room tightens like a drawn cord.
33 A ¶ She comes around the table, slow, wiping her hands on her apron.
34 A She stops behind Jude's chair and rests one palm on its back.
35 A He does not turn his head.
36 A ¶ Sparrow returns with the bread, sees them, and stops in the doorway with the loaf held against his chest.
37 D SPARROW: Ma?
38 D MA TULLIVER: Put it down, son.
39 A ¶ He sets it on the sideboard.
40 A Orville slides his sample case farther under his chair.
41 A Sabina rises halfway, then sits again as Oscar lays a hand over hers.
42 D JUDE (quietly): Ma'am. You know who I am.
43 D MA TULLIVER (simultaneously): I know whose boy you are.
44 D ^OSCAR (simultaneously): We all know whose boy.
45 A ¶ Jude smiles, tired.
46 A He reaches into his duster.
47 A Everyone in the room draws a breath, and what he takes out is a folded letter, creased soft with handling.
48 D JUDE [CONT'D]: He asked me to bring this.
49 A ¶ He sets it on the table, in the middle of the beans.
50 A Nobody reaches for it.
* 51 A Outside the horse stamps, and stamps again, and a long shadow crosses the doorway.

### SCENE s01833 | INT. DEPARTMENT STORE ELEVATOR - DAY
Detected names (may be incomplete or contain aliases): MISS GWENDOLYN FAIRWEATHER, HERBERT PUMPHREY
* 1 A ¶ An old brass-and-mahogany elevator with a folding gate.
* 2 A A mirror on every wall.
* 3 A Soft music from a hidden speaker.
4 A ¶ MISS GWENDOLYN FAIRWEATHER, 30s, in a bright hat and white gloves, is the lift operator.
5 A HERBERT PUMPHREY, 50s, a floorwalker with a carnation in his lapel, stands in the corner clutching a hatbox.
6 D GWENDOLYN: Third floor. Ladies' gloves, hosiery, and sundries.
7 D HERBERT: I am not going to the third floor.
8 D GWENDOLYN: Then why did you press three?
9 D HERBERT: I did not press three. I pressed the nine.
10 D GWENDOLYN: There is no nine.
11 D HERBERT: There is a nine. The nine is the executive offices.
12 D GWENDOLYN: The executive offices are the eighth.
13 D HERBERT: Miss Fairweather, I have worked in this store for twenty-two years.
14 D GWENDOLYN: And in twenty-two years you've never learned the numbers?
15 D HERBERT: I know the numbers perfectly. It is you who has moved them.
16 D GWENDOLYN: I operate the lift, Mr. Pumphrey. The floors are the floors.
17 D HERBERT: Then explain the hatbox.
18 D GWENDOLYN: What hatbox?
19 D HERBERT: The one I am holding.
20 D GWENDOLYN: You are holding that?
21 D HERBERT: It was given to me by a woman on the second floor. She said, "Take this to the manager." She did not say which manager.
22 D GWENDOLYN: Then it is likely for Mr. Trout.
23 D HERBERT: Mr. Trout retired.
24 D GWENDOLYN: Then it is for his son.
25 D HERBERT: His son is on the ninth.
26 D GWENDOLYN: Which does not exist.
27 D HERBERT: You see my difficulty.
28 D GWENDOLYN: I see two difficulties, Mr. Pumphrey, and neither is mine.
29 D HERBERT: What are they?
30 D GWENDOLYN: You are carrying a box you cannot deliver, and you have been riding up and down for an hour.
31 D HERBERT: It has been forty minutes.
32 D GWENDOLYN: It has been an hour. I have a log.
33 D HERBERT: Then you are keeping a log of me?
34 D GWENDOLYN: Of the lift. You happened to be in it.
35 D HERBERT: Miss Fairweather, I am not accustomed to being a happenstance.
36 D GWENDOLYN: Mr. Pumphrey, I am not accustomed to being accused of misplacing a floor.
37 D HERBERT: Then what shall we do?
38 D GWENDOLYN: Open the box.
39 D HERBERT: It is not mine to open.
40 D GWENDOLYN: Whose is it?
41 D HERBERT: The manager's.
42 D GWENDOLYN: Which manager?
43 D HERBERT: That is the very question.
44 D GWENDOLYN: Then it belongs to whoever opens it first.
45 D HERBERT: That is not the law.
46 D GWENDOLYN: It is the law of the elevator.
47 D HERBERT: Since when?
48 D GWENDOLYN: Since now.
49 D HERBERT (after a pause): Hold the box.
50 D GWENDOLYN: I'm operating the lift.
51 D HERBERT: Hold it with one hand.
52 D GWENDOLYN: I only have two, Mr. Pumphrey, and both are in use.
53 D HERBERT: Then I shall open it myself.
54 A ¶ He lifts the lid.
* 55 A The music swells, a harp glissando, unaccountably.
56 A Gwendolyn leans in.
57 A They both look.
58 D GWENDOLYN: Well?
59 D HERBERT: It is a hat.
60 D GWENDOLYN: What sort of hat?
61 D HERBERT: A very ugly hat.
62 D GWENDOLYN: Whose?
63 D HERBERT (reading the label): Yours.
64 A ¶ Gwendolyn takes off her bright hat, looks at it, looks at the hatbox, and begins to laugh.
65 A After a moment Herbert, appalled, joins her.
* 66 A ¶ The elevator stops.
* 67 A The gate rattles.
68 A Neither moves.

### SCENE s01834 | INT. CLINIC WAITING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): ANGELIQUE MBEKI, PETRUS, ZANELE, ABERNATHY GRIGGS, NURSE
* 1 A ¶ Vinyl chairs bolted in rows.
* 2 A A television mounted high plays a muted game show.
3 A ¶ ANGELIQUE MBEKI, 40s, scrubs under a parka, sits with a clipboard.
4 A Her husband PETRUS, 40s, jiggles one knee.
5 A Their daughter ZANELE, 16, earbuds in, stares at the floor.
6 A An old man, MR. ABERNATHY GRIGGS, 80s, dozes.
7 A A NURSE, 30s, stands behind the glass.
* 8 A ¶ The intercom crackles.
9 D NURSE [O.S.]: Mbeki family?
10 A ¶ Angelique stands.
11 D ANGELIQUE: Yes.
12 D NURSE [O.S.]: Dr. Okafor will see you now.
13 D PETRUS: Finally.
14 D ANGELIQUE: Petrus.
15 D PETRUS: Four hours.
16 D ANGELIQUE: Petrus.
17 A ¶ He stops.
18 A Zanele takes out one earbud.
19 D ZANELE: Is it Gran?
20 A ¶ Nobody answers.
* 21 A The buzzer sounds on the inner door.
22 A ¶ Mr. Griggs wakes, looks at them, and closes his eyes again.
23 A ¶ Petrus shoves the nearest chair.
* 24 A It scrapes six inches across the tile, and the whole room hears it.
25 D ANGELIQUE (low): Not here.
26 D PETRUS: Then where?

### SCENE s01835 | EXT. DRY CREEK BED - SUNSET
Detected names (may be incomplete or contain aliases): MARSHAL JEB TRASK, ALMA SOTELO, TOMASO, DEPUTY HOLLIS FINCH, ^TOMASO
* 1 A ¶ Cracked clay.
* 2 A A dead cottonwood.
* 3 A Four riders have dismounted.
4 A ¶ MARSHAL JEB TRASK, 50s.
5 A Gray mustache.
6 A Badge pinned crooked.
7 A ¶ He watches.
8 A ¶ Across the dry bed, ALMA SOTELO, 30s.
9 A Rifle across her saddle.
10 A Black hat.
11 A ¶ Beside her, her brother TOMASO, 20s.
12 A Hand on his holster.
13 A Sweat.
14 A ¶ Behind them, DEPUTY HOLLIS FINCH, 19.
15 A Shotgun.
16 A Too big for him.
* 17 A ¶ Nobody speaks.
* 18 A ¶ Wind.
* 19 A A tumbleweed rolls through, stops against Trask's boot.
20 D TRASK: Alma.
21 D ALMA: Marshal.
22 D TRASK: Long ride.
23 D ALMA: Longer back.
24 A ¶ Tomaso laughs, high and nervous.
25 D TOMASO: Don't talk to him, Alma.
26 D ALMA: Be quiet, Tomaso.
27 D TRASK: You've got the mule.
28 D ALMA: It's my mule.
29 D TRASK: It was Dalton's.
30 A ¶ Alma shrugs.
31 A Hollis licks his lips.
32 D HOLLIS: Marshal, I got a bad feeling.
33 D TRASK: Everybody has.
34 D ALMA (simultaneously): Everybody has.
35 D ^TOMASO: Everybody has.
* 36 A ¶ Silence.
37 A Trask almost smiles.
38 D TRASK: Alma. Put the rifle down.
39 D ALMA: You first.
40 D TRASK: Hollis.
41 D HOLLIS: Sir?
42 D TRASK: Put yours down.
43 D HOLLIS: Sir?
44 D TRASK: Do it.
45 A ¶ Hollis lowers the shotgun.
46 A Trask unbuckles his gun belt, drops it.
47 A Alma watches.
48 A Slowly she slides the rifle from the saddle and lays it flat in the dust.
49 A ¶ Tomaso does not move.
50 D ALMA: Tomaso.
51 D TOMASO: They'll hang us.
52 D ALMA: They'll hang you. Not me.
53 A ¶ She turns her back on the marshal.
54 A Walks to Tomaso.
55 A Takes his gun hand in both of hers.
56 A Opens the fingers one at a time.
* 57 A The pistol falls.
58 A ¶ Trask exhales.
59 A Hollis sits down on the clay.
* 60 A The tumbleweed rolls on.

### SCENE s01836_0 | EXT. TELEGRAPH OFFICE - HIGH DESERT TOWN - DAY
Detected names (may be incomplete or contain aliases): 
* 1 A ¶ A single-street town of sun-bleached boards.
* 2 A A telegraph pole leans over the roof of a squat office.
* 3 A Heat shimmers above the road.
* 4 A The hitching rail holds one horse and nothing else.

### SCENE s01836_1 | INT. TELEGRAPH OFFICE - CONTINUOUS
Detected names (may be incomplete or contain aliases): CLEM, ODOM, STRANGER, MARCUS, VOICE ON THE WIRE
* 1 A ¶ A narrow room.
* 2 A A counter with brass grille.
* 3 A A key and sounder on a desk, silent.
* 4 A A wall clock stopped at 4:10.
* 5 A Dust motes hang in a bar of light from the lone window.
6 A ¶ CLEMENTINE "CLEM" ODOM, 40s, sits behind the counter in a sleeve garter and green eyeshade.
7 A Lean, quiet, careful with her hands.
8 A She is sorting tickets into pigeonholes when the bell on the door jingles.
9 A ¶ A STRANGER enters.
10 A Late thirties, a long gray coat patched at the elbow, a hat pulled low over a face the sun has worked on for years.
11 A He carries a saddlebag over one shoulder and does not take it off.
12 D STRANGER: Afternoon.
13 D CLEM: Afternoon.
14 D STRANGER: You the operator?
15 D CLEM: I am.
16 D STRANGER: I need to send a wire.
17 D CLEM: Where to?
18 D STRANGER: Cheyenne.
19 A ¶ She slides a form across the counter and a pencil beside it.
20 A He looks at the pencil, then at her, and picks it up with his left hand.
21 A Clem notes this and says nothing.
22 D CLEM: Fifteen words for a quarter. Each one after is two cents.
23 D STRANGER: I'll keep it short.
24 A ¶ He writes slowly.
25 A Clem returns to her pigeonholes, but watches him sidelong.
* 26 A The saddlebag shifts on his shoulder with a faint metallic clink.
27 D CLEM: That heavy?
28 D STRANGER: Some.
29 D CLEM: You can set it down.
30 D STRANGER: I'm fine.
31 A ¶ He finishes, pushes the form back.
32 A She reads it, lips barely moving.
33 D CLEM: "Arrived. Will wait. Send word by Tuesday." No name.
34 D STRANGER: No name.
35 D CLEM: They'll want to know who it's from.
36 D STRANGER: They'll know.
* 37 A ¶ A silence.
* 38 A The sounder on the desk begins to chatter, a rapid stutter of clicks.
39 A Clem turns, listens, takes up a pencil, and writes on a pad as the code runs.
40 A Her face changes by degrees.
41 A The Stranger watches her pencil.
42 D CLEM [CONT'D] (without turning): You want to tell me your name, mister?
43 D STRANGER: Why?
44 D CLEM: Because this just came over the line for a man matching your description.
45 A ¶ She tears off the sheet, holds it up between two fingers.
46 A He doesn't take it.
47 D STRANGER: What's it say?
48 D CLEM: It says "Deputy Marcus Reyes, lawman, last seen heading north with a stolen payroll."
49 A ¶ The Stranger's right hand drifts toward his coat.
50 A Clem's drifts under the counter.
51 D STRANGER: Ma'am.
52 D CLEM: Marcus.
53 A ¶ He stops.
54 D MARCUS: Put your hand where I can see it.
55 D CLEM: I will when you've shown me yours.
56 A ¶ He slowly lifts both hands away from his coat.
* 57 A The saddlebag slides to the floor with a heavy chunk.
58 D MARCUS [CONT'D]: That's not the payroll.
59 D CLEM: Then what is it?
60 D MARCUS: Evidence.
61 D CLEM: Of what?
62 D MARCUS: Of who took it.
63 A ¶ Clem's hand comes up from beneath the counter, empty.
64 A She lays the sheet down on the grille.
65 D CLEM: Then you'd best read the rest of this.
66 A ¶ He steps up, reads.
67 A His lips tighten.
* 68 A The sounder chatters again.
69 D VOICE ON THE WIRE [V.O.] (telegraph operator, Cheyenne; read aloud by Clem): Marshal's office confirms. Reyes is clean. Hold him. Dangerous man trails.
70 A ¶ Marcus lifts his eyes from the page and meets Clem's.
* 71 A Outside, at the end of the street, the clatter of hooves begins and grows.
72 D CLEM: That'd be your dangerous man.
73 D MARCUS: Lock the door.
74 A ¶ She does.
75 A He pulls the shade.
76 A In the dim, they stand a pace apart, listening, while the hoofbeats come on and the sounder, on its desk, goes quiet.

### SCENE s01837 | INT. RETIREMENT HOME RECREATION HALL - DAY
Detected names (may be incomplete or contain aliases): MAX, OKONKWO-BELL, DESMOND, VISITOR, FLO, ABERNATHY, FRONT DESK, MOVER
* 1 A ¶ A long room with a linoleum floor the color of weak tea.
* 2 A A bingo cage in one corner, a folding table of sad cookies in another.
* 3 A On the wall, a banner reads "SPRING FLING" and has read so since the previous spring.
4 A ¶ Three people occupy the room.
5 A ¶ MAXINE "MAX" OKONKWO-BELL, 70s, a retired stunt performer in a velvet tracksuit, sits at the center table with a deck of cards fanned in one hand.
* 6 A Beside her, a dozing oxygen tank on wheels and a bowl of butterscotch.
7 A Across from her, her grandson DESMOND, 20s, thin, pressed shirt, a lanyard that says VISITOR, reads a text message with his thumb stuck in his mouth.
8 A And by the cookie table, hunched over a tray, is the nurse's aide FLORENCE "FLO" ABERNATHY, 50s, teal scrubs, hair under a net, who has been listening to the whole room for years and revealing nothing.
* 9 A ¶ A phone on the wall buzzes.
10 A Nobody answers it.
* 11 A It buzzes again.
12 D MAX: Desmond, your telephone is ringing.
13 D DESMOND: It's a text, Nana.
14 D MAX: That's the wall phone.
15 D DESMOND: Oh.
16 A ¶ He glances at it.
* 17 A It buzzes.
18 A He looks at Max, who raises one eyebrow so high it nearly leaves her face.
19 A He sighs, crosses the room, and lifts the receiver.
20 A Flo watches him.
21 A Max shuffles.
22 A The cards ride a bridge, snap, and settle.
23 A Desmond holds the phone out from his ear as a voice squawks.
24 D FRONT DESK [V.O.] (over the wall phone): Good morning, Mr. Okonkwo-Bell. Your grandmother has a delivery.
25 D DESMOND: My grandmother has a what?
26 D FRONT DESK [V.O.]: A delivery. Two men are bringing it up.
27 D DESMOND (turning): Nana, what did you order?
28 D MAX: Nothing.
29 D DESMOND: They say it's a delivery.
30 D MAX: Then it's a surprise. Hang up.
31 D DESMOND: It's from the front desk.
32 D MAX: Then hang up on the front desk.
33 A ¶ He hangs up.
34 A At once the double doors swing open and two movers in blue coveralls wheel in a crate the size of a refrigerator, strapped to a hand truck.
35 A They park it in the middle of the floor.
36 A Without a word they unstrap it, tip it forward, and peel away the cardboard.
* 37 A Beneath is a vintage motorcycle, gleaming chrome, a leather jacket draped across the seat.
38 A ¶ Desmond walks around it twice.
39 A Flo sets down her tray.
40 A Max does not rise.
41 D DESMOND: Nana.
42 D MAX: Hm?
43 D DESMOND: Is this yours?
44 D MAX: Was.
45 D DESMOND: Nana, you said you sold it in 1994.
46 D MAX: I said a lot of things in 1994.
47 A ¶ Flo approaches the bike, runs a thumb along the handlebar, and glances back at Max.
48 D FLO: Miss Max, it's not on the activity calendar.
49 D MAX: Flo, I will tell you what's on my calendar.
50 D FLO: You're due for your pills at noon.
51 D MAX: My calendar says I'm due for a ride at noon.
52 D DESMOND: You cannot ride it.
53 D MAX: I can sit on it.
54 D DESMOND: You can't sit on it either. Dr. Pruitt specifically--
55 D MAX: Dr. Pruitt isn't here, and the man on the bike, in the photograph over there, was the best looking thing in the state of Ohio.
56 A ¶ She nods at a framed photograph on the wall, a younger Max in a leather jacket mid-leap over a line of cars.
57 A Desmond looks at the photograph, then at the bike, then at the movers, who have stepped back and are clutching a clipboard.
58 D FLO (to the movers): Who sent this?
59 D MOVER (shrugging): Sign here, ma'am.
60 D FLO: Who's the sender?
61 D MOVER: It says "Harlan."
62 A ¶ Max's hand stops on the cards.
* 63 A The room goes quiet.
64 A A small, amused crinkle appears at the corner of her eye, then spreads.
65 D MAX: That son of a gun.
66 D DESMOND: Who's Harlan?
67 D MAX: Your grandfather's brother. He died in the spring.
68 D DESMOND: Then who sent it?
69 D MAX: He did, Desmond. He did. He always said he'd send me something nice when he got where he was going.
70 A ¶ She gets up.
71 A She walks to the bike.
72 A Flo hurries to steady the oxygen tank on its wheels.
73 A Max lays her hand on the seat and strokes it with two fingers.
74 D MAX [CONT'D]: Desmond. Fetch the helmet.
75 D DESMOND: There's a helmet?
76 D MAX: There's always a helmet.
77 A ¶ He lifts the leather jacket and finds one beneath it.
78 A He holds it out.
79 A Max puts it on, buckles the strap, and swings a leg over the seat with a fluency that stops everyone's breath.
80 D FLO (quietly): Miss Max.
81 D MAX: Flo, if you tell Dr. Pruitt, I'll haunt you.
82 D FLO: He'll see the tank.
83 D MAX: Then I'll leave the tank.
84 A ¶ She unhooks the oxygen tube, hands it to Flo, and grips the handlebars.
85 A Desmond covers his face with both hands.
86 A Flo stares at the tube.
* 87 A ¶ The bike does not start.
* 88 A It doesn't have a key.
89 A Max grins, rests her forehead against the tank, and begins to laugh until the laughing turns to a wheeze, then a cough.
90 A Flo is at her side in an instant with the tube.
91 D FLO [CONT'D]: Breathe, Miss Max.
92 D MAX (between breaths): I am. I am. I'm breathing.
93 D DESMOND: Nana.
94 D MAX: Desmond, I want to sit here for a minute.
95 A ¶ He pulls a chair beside the bike and sits.
96 A Flo sits on the other side.
97 A Max rests her hands on the handlebars, eyes closed, and for a while none of them says anything.
98 A The movers back out of the room.

### SCENE s01838 | EXT. LAKESIDE BOATHOUSE - DUSK
Detected names (may be incomplete or contain aliases): TEDDY, LUND, ARMAND BELLWETHER, CORINNE
* 1 A ¶ A weathered boathouse leaning over green water.
* 2 A Paper lanterns hang from the rafters, half of them unlit.
* 3 A A phonograph on an upturned crate turns a record, scratchy and slow.
4 A ¶ THEODORA "TEDDY" LUND, 30s, in a yellow dress that has seen better summers, sits on the dock with her feet in the water.
5 A Next to her, ARMAND BELLWETHER, 30s, a rower's shoulders under a rumpled linen shirt, holds two glasses and a bottle without a label.
6 A Behind them on the boathouse porch stand her sister CORINNE, 40s, arms folded, and Armand's father OLD MR. BELLWETHER, 70s, in a cardigan, who has said nothing since they arrived.
7 D TEDDY: Armand, you're going to drop it.
8 D ARMAND: I'm not going to drop it.
9 D TEDDY: You're holding it like a baby.
10 D ARMAND: A baby wouldn't have a cork.
11 D CORINNE: Teddy. Dinner.
12 D TEDDY: In a minute, Cor.
13 D CORINNE: You said that an hour ago.
14 D TEDDY: I meant it then too.
15 A ¶ Armand pours.
* 16 A The wine is pale.
17 A They clink.
18 A Old Mr. Bellwether coughs once and turns toward the water.
19 D ARMAND: Father, you want some?
20 D OLD MR. BELLWETHER: I want to know why my son is sitting on a dock in a good shirt.
21 D ARMAND: Because I've been meaning to ask her something.
22 D TEDDY (smiling): Then ask.
23 A ¶ He sets his glass down.
* 24 A A dragonfly lands on its rim.
25 A Corinne's arms unfold.

### SCENE s01839 | INT. THRONE ROOM OF THE GLASS KING - NIGHT
Detected names (may be incomplete or contain aliases): KING ORIVEN CLEAR, LADY MYRRHEN, SER BRANDOLF GRAYMANE, GRIMBOLD STONEHAND, THISTLE, BROTHER ANSELM, ^SER BRANDOLF
* 1 A ¶ A hall of translucent pillars lit from within by drifting blue flame.
* 2 A Snow falls indoors from a ceiling that has no ceiling.
* 3 A At the far end, a crystalline throne.
4 A ¶ KING ORIVEN THE CLEAR, 60s, crowned in frost, sits motionless upon it.
5 A At his right stands his sorceress sister LADY MYRRHEN, 50s, hooded.
6 A To his left, the captain of his guard, SER BRANDOLF GRAYMANE, 40s, in silver plate.
7 A Before the throne, kneeling on cold stone, are three travelers: a tattooed dwarf-smith named GRIMBOLD STONEHAND, a young archer with a green scarf named THISTLE, and a robed monk named BROTHER ANSELM.
* 8 A ¶ Snowflakes catch on their shoulders.
9 D KING ORIVEN: Rise.
10 A ¶ They rise.
11 A Thistle stumbles.
12 A Grimbold steadies her.
13 D KING ORIVEN [CONT'D]: You carry the Ember.
14 D GRIMBOLD: We carry nothing.
15 D THISTLE: We carry a letter.
16 D BROTHER ANSELM: We carry a request.
17 D LADY MYRRHEN (simultaneously): They carry the Ember.
18 D ^SER BRANDOLF: They carry a lie.
19 A ¶ King Oriven raises one hand.
* 20 A Silence.
* 21 A A flake lands on his open palm and does not melt.
22 D KING ORIVEN: Show me the letter.
23 A ¶ Thistle fumbles at her satchel.
24 A Grimbold holds up his hand to stop her.
25 D GRIMBOLD: It's not for you.
26 D SER BRANDOLF: You speak to a king.
27 D GRIMBOLD: I speak to a man with a very cold hall.
28 D THISTLE: Grimbold.
29 D BROTHER ANSELM: Peace, friends. Majesty, the letter is for the Queen of the Ash Court.
30 D LADY MYRRHEN: There is no Queen of the Ash Court.
31 D BROTHER ANSELM: There was.
32 D SER BRANDOLF: The Ash Court burned.
33 D THISTLE: That's why we need her.
34 D KING ORIVEN (softly): Enough.
35 A ¶ Everyone stops.
36 A He stands, slowly, his crown ringing like a struck bell.
37 A He descends one step, then another.
38 A He stops in front of Thistle and looks into her scarf, her face, her quiver.
39 D KING ORIVEN [CONT'D]: Child. Who gave you that scarf?
40 D THISTLE: My mother.
41 D KING ORIVEN: And her name?
42 D THISTLE: Ashlyn.
43 A ¶ Lady Myrrhen's hood falls back.
44 A Ser Brandolf's hand lowers from his sword.
45 A King Oriven closes his eyes.
46 D KING ORIVEN [CONT'D]: Then the letter is for me.

### SCENE s01840 | INT. MIDNIGHT BOWLING ALLEY - NIGHT
Detected names (may be incomplete or contain aliases): RICO VALDEZ, DAISY MORALES
* 1 A ¶ Lane 14.
* 2 A Neon pins.
* 3 A The ball return coughs.
* 4 A A scoreboard overhead flickers and shows two names: RICO and BLANK.
5 A ¶ RICO VALDEZ, 40s, a heavy man in a purple league shirt, sits on the bench retying his shoes.
6 A His ball is a scuffed black orb with initials in gold.
7 A He has bowled a perfect game twice in his life, and tonight he is eleven frames in.
* 8 A ¶ On the lane beside him, no one.
* 9 A The scoreboard says BLANK.
* 10 A The seat is empty.
11 A ¶ He rises, takes the ball, steps to the line.
12 A He breathes.
13 A Rolls.
* 14 A The ball hooks gently and blasts the pocket.
* 15 A Strike.
* 16 A The scoreboard dings.
17 A ¶ He does not celebrate.
18 A He walks to the ball return and waits.
* 19 A ¶ A shadow falls across the approach.
20 A A figure stands in the doorway of the lane, small, a tiny silhouette.
21 A A girl, maybe nine, in a pink hoodie, holds a ball two sizes too heavy for her.
22 A ¶ The girl is DAISY MORALES, and she has been looking at him since the ninth frame.
23 D RICO: Closed to the public.
24 D DAISY: I'm not the public.
25 D RICO: Who are you, then?
26 D DAISY: The next frame.
27 D RICO: That's not a thing.
28 D DAISY: It is on your scoreboard.
29 A ¶ He turns.
* 30 A The scoreboard above reads BLANK.
* 31 A As he watches, the letters rearrange.
* 32 A DAISY.
33 D RICO: Somebody typed that.
34 D DAISY: Somebody did.
35 D RICO: Who?
36 D DAISY: My dad. He said you'd show me how.
37 D RICO: Your dad.
38 D DAISY: He bowled here. Before.
39 D RICO (slowly): Before what?
40 D DAISY: Before you took the last frame.
41 A ¶ Rico stares.
* 42 A The ball return rumbles.
* 43 A His ball rolls up and bumps against his hand, and he does not pick it up.
44 D RICO: Kid. What's your father's name?
45 D DAISY: Manuel.
46 D RICO: Manny Morales.
47 D DAISY: Yes.
48 D RICO: Manny's dead.
49 D DAISY: I know.
50 D RICO: He had a seven-ten split in the tenth. Twenty-three years ago. I bowled against him.
51 D DAISY: He said you let him have it.
52 D RICO: I didn't let him.
53 D DAISY: He said you did.
54 D RICO: He missed. He missed the seven.
55 D DAISY: He didn't miss. You moved the pin.
56 A ¶ Rico laughs, a dry bark.
57 A Then he stops.
58 D RICO: Who told you that?
59 D DAISY: My dad. In a letter. He wrote it before.
60 D RICO: Before.
61 D DAISY: He wanted me to ask you why.
62 A ¶ Rico sinks onto the bench.
* 63 A The neon buzzes.
64 A Daisy walks the length of the lane toward him, ball dragging, until she stands in front of him.
65 D RICO: Because I was twenty-two, kid. Because I wanted to be the guy who bowled a three hundred in the state final. And he was better, and I knew it.
66 D DAISY: So you cheated.
67 D RICO: I did.
68 D DAISY: Did you win?
69 D RICO: I won.
70 D DAISY: Did you bowl three hundred?
71 D RICO (barely audible): No. Two seventy-one.
72 D DAISY: Dad said you'd say two seventy-one.
* 73 A ¶ Silence.
74 A Rico looks at her, at the ball, at the empty lane.
75 D RICO: What do you want from me?
76 D DAISY: Show me how to throw.
77 D RICO: That's all?
78 D DAISY: That's all.
79 A ¶ He rises.
80 A He places her fingers in the holes.
81 A He adjusts her wrist.
82 D RICO: Don't look at the pins. Look at the arrow.
83 D DAISY: Which arrow?
84 D RICO: The one in the middle.
85 A ¶ She rolls.
86 A The ball wobbles down the lane, drifts left, and drops into the gutter.
87 A Daisy deflates.
88 D DAISY: That's bad.
89 D RICO: That's a start.
90 D DAISY: Again?
91 A ¶ He fetches her ball.
92 A She rolls.
* 93 A It strikes three pins.
94 A She jumps.
95 A Rico, for the first time in the scene, smiles, and the scoreboard dings.

### SCENE s01841 | INT. FISH MARKET OFFICE - EARLY MORNING
Detected names (may be incomplete or contain aliases): MIRIAM KOSKI, DETECTIVE ANSEL WOO, DETECTIVE RUTH DELACROIX, ENZO FERRARA
* 1 A ¶ A glass-walled office above the ice floor.
* 2 A Fluorescent hum.
* 3 A A wall calendar of tuna.
4 A ¶ MIRIAM KOSKI, 50s, the market's bookkeeper, sits at a steel desk.
5 A Her ledger is open.
6 A Her cardigan smells faintly of brine.
7 A ¶ Across from her sits DETECTIVE ANSEL WOO, 40s, notebook out.
8 A He smiles pleasantly.
9 A Behind him, leaning on the filing cabinet, is his partner DETECTIVE RUTH DELACROIX, 30s, silent, chewing gum.
10 A ¶ Near the door stands the owner, ENZO FERRARA, 60s, in rubber boots, wiping his hands on a rag.
11 A He has been wiping them for some time.
12 D WOO: Quiet morning.
13 D MIRIAM: They start at four.
14 D WOO: And the books balance.
15 D MIRIAM: They always balance.
16 A ¶ Ruth pushes off the cabinet and drifts to the window.
17 A Enzo steps aside to let her pass, and as she goes by she picks a pen off the desk, rolls it in her fingers, sets it back.
18 A Miriam watches the pen.
19 A Woo flips a page of the notebook.
20 A Enzo tosses the rag onto a chair, crosses the room to the door, and locks it, quietly, with a click that makes Miriam's shoulders lift.
21 A Ruth turns from the window.
22 D RUTH: Miriam. Where's the second ledger?
23 D MIRIAM: There isn't a second.
24 D RUTH: She says there isn't.
25 D WOO (to Enzo): He says there isn't, too.
26 D ENZO (tight smile): There isn't.
27 A ¶ Miriam lowers her eyes to the ledger.
28 A Her finger finds a column, and a drop of sweat falls onto the page.

### SCENE s01842 | EXT. WAGON CIRCLE - DUSK
Detected names (may be incomplete or contain aliases): WALT BREDEN, DOROTHEA, HENRY, LUIS ARRIAGA, CATHERINE MULDOON, ABEL
* 1 A ¶ Six wagons drawn into a ring on a wind-scoured flat.
* 2 A A fire burns low in the center.
* 3 A The sky is bruise-colored.
* 4 A Far off, a coyote starts and stops.
5 A ¶ The company is at supper.
6 A WALT BREDEN, 50s, the wagon master, sits on an upturned barrel with a tin plate on his knee.
7 A His wife DOROTHEA, 40s, stirs the pot and slaps a fly off her arm.
8 A Their son HENRY, 13, whittles a stick to nothing.
9 A The scout LUIS ARRIAGA, 30s, squats by the fire with a coffee pot, pouring into mismatched cups for the others.
10 A The widow CATHERINE MULDOON, 60s, rocks in a canvas chair, knitting, her needles clicking.
11 A And the stranger they picked up two days back, a heavy-set man with a limp who calls himself ABEL, 40s, sits a little way off with his plate untouched.
* 12 A ¶ Nobody says much.
* 13 A The knitting needles click.
14 D WALT (to everyone): We make the river by Thursday if the oxen hold.
15 D LUIS: They'll hold. It's the wheels I'd worry about.
16 D DOROTHEA (to Henry): Eat your beans.
17 D HENRY: I'm not hungry.
18 D DOROTHEA: Eat them anyway.
19 A ¶ Walt sets his plate aside, rises, and walks the length of the circle with his thumbs in his belt, checking each wagon's brake.
20 A Luis fills his own cup.
21 A Catherine knits.
22 A Henry flips the stick into the fire.
23 A Dorothea snatches the plate from his hands and hands it to Abel instead, who accepts it with a nod and begins to eat.
24 A Walt, at the far wagon, stops and mutters to himself.
25 D WALT (muttered): Third spoke's cracked.
26 D LUIS (from the fire): What's that?
27 D WALT: Nothing.
28 A ¶ He kneels to inspect it.
29 A Catherine's needles stop.
30 D CATHERINE (to no one in particular): There's a rider.
31 A ¶ Everyone turns.
32 A Far across the flat, a single horseman crests a low rise and halts, black against the afterglow.
33 D HENRY (whispering): Is it Indians?
34 D DOROTHEA: Hush.
35 D LUIS (low, to Walt): He's alone.
36 D WALT (rising): Then he's no trouble. Henry, fetch the rifle.
37 D HENRY: Yes, sir.
38 A ¶ He scrambles to the wagon, rummages, returns with it.
39 A Walt takes it, checks the chamber, and lays it across his arm.
40 A Abel has stopped eating.
41 A He has set his plate on the ground and is looking, not at the rider, but at Luis, who is looking back.
42 A ¶ Catherine resumes her knitting.
* 43 A The rider does not move.
* 44 A The fire pops.
45 D ABEL (to himself): Told him not to follow.
46 A ¶ Nobody hears him but Luis.

### SCENE s01843 | INT. TRAUMA BAY - NIGHT
Detected names (may be incomplete or contain aliases): SADIE OYELARAN, BEN, KOWALCZYK, ILSE VANTERPOOL, MOSES HARGROVE
* 1 A ¶ A curtained bay under hard white light.
* 2 A Monitors beep.
* 3 A A gurney sits canted in the center, stained sheets bunched at the foot.
* 4 A Instruments on a steel tray, a red crash cart, a clock that reads 2:47.
5 A ¶ DR. SADIE OYELARAN, 30s, surgical cap, sleeves pushed up, stands over the gurney with both hands on the chest of an unseen patient and counts under her breath.
6 A Across the gurney, NURSE BENEDICT "BEN" KOWALCZYK, 40s, squeezes a bag-valve mask on a rhythm.
7 A At the foot, with a clipboard, stands the resident DR. ILSE VANTERPOOL, 20s, pale, hair coming loose.
8 A Nearest the door, arms folded, watches the attending, DR. MOSES HARGROVE, 60s, silver hair, a stethoscope draped like a scarf.
9 D SADIE: Thirty. Check.
10 D BEN: No pulse.
11 D SADIE: Again.
12 A ¶ She resumes compressions.
* 13 A The monitor spikes, flatlines, spikes.
14 A Ilse writes a note and drops the pen.
15 D ILSE: Dr. Hargrove, we're at twelve minutes.
16 D HARGROVE: I can read a clock, Dr. Vanterpool.
17 D ILSE: Sir, I think we should--
18 D HARGROVE: Think quietly.
19 D BEN: Sadie, your arms.
20 D SADIE: They're fine.
21 D BEN: Switch with me.
22 D SADIE: I said they're fine.
23 A ¶ He lets go of the mask, rounds the gurney, and puts a hand on her shoulder.
24 A She does not look up.
25 A He waits.
26 A After a beat she steps aside, wiping her brow with her forearm, and he takes her place.
27 A She takes the bag-valve mask.
28 D SADIE [CONT'D]: Ben. Count.
29 D BEN (compressing): One, two, three, four.
* 30 A ¶ The monitor beeps once.
31 A Everyone freezes.
* 32 A It beeps again, uneven.
33 A Ilse looks up.
34 A Hargrove uncrosses his arms.
35 D ILSE: That's a rhythm.
36 D HARGROVE: That's an artifact.
37 D SADIE (still bagging): That's a rhythm.
38 D HARGROVE: Dr. Oyelaran.
39 D SADIE: Look at the screen, Moses.
40 A ¶ He does.
* 41 A A ragged line climbs and descends, climbs and descends.
42 D BEN (breathless): Pulse. I've got a pulse.
43 D SADIE: Pressure?
44 D ILSE: Seventy over forty.
45 D SADIE: Fluids. Wide open.
46 A ¶ Ilse darts to the cart.
47 A Hargrove steps forward, takes the stethoscope from his neck, presses it to the patient's chest, and listens.
* 48 A The line on the monitor holds.
49 A He straightens slowly.
50 D HARGROVE: Good work.
51 D SADIE: That's not a thing you say. That's a thing you do.
52 D HARGROVE (quietly): Meaning?
53 D SADIE: Meaning you called time of death in your head six minutes ago.
54 D HARGROVE: I did not.
55 D SADIE: You did.
56 A ¶ Ben's compressions slow.
57 A Ilse has stopped midway to the cart.
58 D BEN (low): Sadie.
59 D SADIE: No. He did. Say it, Moses.
60 D HARGROVE (after a long pause): I did.
61 D SADIE: Thank you.
62 A ¶ She steps back, peels off a glove, and flexes her hand.
63 A Ben takes the mask and bags, gently.
64 A Ilse brings a bag of fluids and hangs it on the pole.
* 65 A The monitor beeps on, steady, small, alive.
66 A ¶ Hargrove turns to the door.
67 A He pauses there, back to them.
68 D HARGROVE [CONT'D]: I'll tell the family.
69 D SADIE: No. I will.
70 D HARGROVE: They'll ask who made the call.
71 D SADIE: Then I'll tell them she did.
72 A ¶ She looks at Ilse.
73 A Ilse looks at her.
74 A Neither says anything.
75 A ¶ Hargrove exits.
* 76 A The curtain swings behind him.
77 A Sadie leans over the sink and runs cold water over her wrists.
78 A Ben watches her.
79 D BEN: You okay?
80 D SADIE (to the water): Ask me in an hour.
81 A ¶ Ilse pulls the sheet up over the patient's chest and, after a moment, tucks it under the chin as if the patient were a child.

### SCENE s01844 | INT. SWIM STADIUM - STARTING BLOCKS - MORNING
Detected names (may be incomplete or contain aliases): KEIKO TANAKA
* 1 A ¶ Chlorine haze.
* 2 A A thousand empty seats.
* 3 A A pool lit like a jewel, eight lanes, seven of them still.
4 A ¶ KEIKO TANAKA, 20s, in a black racing suit, swim cap tight, stands behind block four shaking out her arms.
5 A A waterproof earbud sits in one ear.
6 A She presses it and her own voice, recorded the night before, plays back thin and steady.
7 D KEIKO [V.O.] (voice memo): Hands loose. Shoulders down. You've done this ten thousand times.
8 A ¶ She steps up.
9 A Toes curl over the edge.
10 A She bounces once on her heels, flexes her fingers, rolls her neck, glances at the empty stands, then at the water, then at the clock above lane eight that reads zero.
* 11 A Her breath fogs in the cold air.
12 A She presses the earbud again.
13 D KEIKO [V.O.] (voice memo): Don't think about her. Think about the wall.
14 A ¶ She pulls the goggles down, snaps the strap, and tucks the earbud deeper.
15 A She lowers into a crouch.
16 D KEIKO (whispering): Breathe.
* 17 A ¶ A beat.
* 18 A A horn blares from nowhere.
19 A She dives.
* 20 A Under the surface there is silence, and then only the sound of her own heart.

### SCENE s01845 | INT. CHEESE CAVE - DAY
Detected names (may be incomplete or contain aliases): BARNABY QUILL, INGRID SOLBERG, ^INGRID
* 1 A ¶ Damp stone.
* 2 A Wheels of cheese on wooden racks stretch into the dark.
* 3 A A single bare bulb.
4 A ¶ BARNABY QUILL, 40s, in a hairnet and white coat, taps a wheel with a wooden mallet and listens.
5 A Behind him stands INGRID SOLBERG, 30s, an inspector in a lanyard, with a clipboard and a thermometer.
6 D INGRID: Mr. Quill. Your humidity's at ninety-four percent.
7 D BARNABY: That's the idea.
8 D INGRID: The code says ninety.
9 D BARNABY: The cheese says ninety-four.
10 D INGRID: The cheese doesn't write the code.
11 D BARNABY: The cheese is older than the code.
12 A ¶ She checks her clipboard.
13 A He taps another wheel.
14 D INGRID: There's mold on the north wall.
15 D BARNABY: That's a feature.
16 D INGRID: It's black.
17 D BARNABY: That's a deluxe feature.
18 D INGRID: It's growing on the cheese.
19 D BARNABY: That's the cheese.
20 D INGRID (flat): Mr. Quill.
21 D BARNABY: Ms. Solberg.
22 A ¶ She thrusts the thermometer into the nearest wheel.
* 23 A A long beat.
24 A She pulls it out and reads it.
25 D INGRID: Fifty-four degrees.
26 D BARNABY: Perfect.
27 D INGRID: It should be fifty.
28 D BARNABY: Perfect plus four.
29 D INGRID: I'm writing you up.
30 D BARNABY: You're writing me up for being warm?
31 D INGRID: For several things.
32 D BARNABY: Name three.
33 D INGRID: Humidity. Temperature. Mold.
34 D BARNABY: Name a fourth.
35 D INGRID (pausing, scanning the room): Smell.
36 D BARNABY (delighted): Now you're getting it.
37 D INGRID: It's not a compliment.
38 D BARNABY (simultaneously): It's not a crime.
39 D ^INGRID (simultaneously): It's not a compliment.
40 A ¶ They stare at each other.
* 41 A The bulb flickers.
* 42 A A drop of water lands on her clipboard.
43 D BARNABY: Ms. Solberg, would you like to taste?
44 D INGRID: No.
45 D BARNABY: Just a sliver.
46 D INGRID: I am an inspector. I cannot be bribed.
47 D BARNABY: It's not a bribe. It's an appetizer.
48 A ¶ She hesitates.
49 A He cuts a thin wedge with a wire, offers it on the blade.
50 A She takes it between two fingers, sniffs, and chews once.
51 A Her eyes close.
52 D INGRID (muffled): Oh, no.
53 D BARNABY: Yes.
54 D INGRID: Oh, that's unfair.
55 D BARNABY: Ninety-four percent.
56 A ¶ She sits down on a wheel of cheese, still chewing, and writes a single line on the clipboard.
57 D INGRID: "Approved with reservations."
58 D BARNABY: What reservations?
59 D INGRID: That I get another piece.

### SCENE s01846 | INT. DERELICT TERRAFORMING STATION - ATRIUM - DAY
Detected names (may be incomplete or contain aliases): SERAFINA KOWALSKI, ISAAC WREN
* 1 A ¶ A vast greenhouse dome, cracked, vines pushing through.
* 2 A Rust-red dust drifts in sunbeams.
* 3 A Rows of dead hydroponic trays, a collapsed gantry, a fountain that flows blue, impossibly, in the center.
4 A ¶ SERAFINA KOWALSKI, 40s, weathered pressure suit, helmet cradled under one arm, steps through a broken airlock.
5 A She stops.
6 A Scans.
* 7 A A scanner on her wrist pings.
8 A ¶ Ten meters behind her, ISAAC WREN, 20s, her tech, ducks through the same gap.
9 A He is thin, too young for the suit, visor fogged.
10 D SERAFINA: Don't touch anything.
11 D ISAAC: I wasn't.
12 A ¶ She walks on.
13 A He follows, hands visibly clasped behind his back.
14 A She crouches by a tray and brushes dust from a withered plant.
15 A He peers over her shoulder.
16 D ISAAC [CONT'D]: That's not possible.
17 D SERAFINA: It's dead.
18 D ISAAC: It's dead and still green.
19 A ¶ She turns it over.
* 20 A The underside is rough, silvery, almost metal.
21 A She snaps a leaf.
* 22 A It rings.
23 D ISAAC [CONT'D]: That's a bell.
24 D SERAFINA: It's a plant.
25 D ISAAC: It's a bell with roots.
26 A ¶ She stands.
* 27 A Her boot scrapes.
* 28 A The whole dome hums, one low note, like a struck glass.
29 A Isaac freezes.
30 A She raises a hand.
* 31 A The note builds.
32 D SERAFINA (whispering): Back to the airlock.
33 D ISAAC: I'm trying.
34 A ¶ He steps back and bumps a tray.
* 35 A A hundred leaves ring at once, a chord that rolls across the atrium and returns.
36 A Both of them cover their helmets with their hands.
* 37 A The fountain's blue turns white, then green.
38 A ¶ She grabs his arm.
39 A They run.
* 40 A Behind them the plants begin to bend toward the sound, every dead stalk leaning like a congregation.
41 A ¶ At the airlock she shoves him through and follows, slamming the hatch.
42 A They stand panting in the cramped chamber.
* 43 A Outside the viewport, the dome glows.
44 D ISAAC [CONT'D]: Are we going back?
45 D SERAFINA: No.
46 D ISAAC: Good.
47 A ¶ She watches the glow.
48 A A faint smile.
49 D SERAFINA: We're going to need a bigger microphone.

### SCENE s01847 | INT. LOCKER ROOM - DAY
Detected names (may be incomplete or contain aliases): COACH ELLIOT PRUITT, RAFI, DELGADO, DUKE ANDERSON, MARCUS WYNN
* 1 A ¶ A cinderblock locker room under a low ceiling.
* 2 A Benches bolted to the floor.
* 3 A A whiteboard with a play half erased.
* 4 A The air smells of liniment and wet tape.
* 5 A They lost by one point, and nobody has moved to the showers.
6 A ¶ COACH ELLIOT PRUITT, 50s, sits on the bench by the door with his cap in his hands.
7 A At the far locker, still in uniform, sits RAFAEL "RAFI" DELGADO, 24, the point guard, staring into his open locker.
8 A His backup, DUKE ANDERSON, 22, towers over the bench with a towel around his neck.
9 A And the team captain, MARCUS WYNN, 28, leans against the whiteboard with his arms crossed over a ruined jersey.
10 D COACH PRUITT (to all of them): Listen up.
11 A ¶ Nobody does.
12 A Rafi pulls his shoe off, studies it, puts it back on.
13 D COACH PRUITT [CONT'D] (louder): I said listen up.
14 D DUKE: We're listening.
15 D MARCUS: We're listening, Coach.
16 D RAFI (muttering to himself): Should've passed.
17 D COACH PRUITT: What was that, Rafi?
18 D RAFI: Nothing.
19 D MARCUS: He said he should've passed.
20 D RAFI: I said nothing.
21 D DUKE: You had Marcus open.
22 D RAFI: Marcus was not open.
23 D MARCUS: I was wide open.
24 D RAFI: You were covered.
25 D MARCUS: By a guy half my size.
26 D COACH PRUITT: Enough.
27 D DUKE (overlapping): He had the lane.
28 D RAFI (overlapping): It was a double team.
29 D MARCUS (overlapping): It was one guy.
30 D COACH PRUITT: I said enough!
31 A ¶ His voice cracks against the cinderblock.
32 A The three of them go still.
33 A Coach Pruitt puts his cap on, takes it off, sets it on his knee.
34 D COACH PRUITT [CONT'D] (quietly): That was my call. The last play. I drew it up. Not Rafi's.
35 A ¶ Rafi looks at him.
36 A Marcus uncrosses his arms.
37 D MARCUS: Coach.
38 D COACH PRUITT: Nobody's showering yet. We sit here for five minutes and nobody says one word.
39 D DUKE: Five minutes?
40 D COACH PRUITT: Duke, that's a word.
41 A ¶ Duke sits.
42 A Rafi takes off the other shoe.
43 A Marcus slides down the whiteboard until he is on the floor.
44 A Coach Pruitt looks at the clock.
45 D COACH PRUITT [CONT'D] (to himself): Four fifty-eight.

### SCENE s01848_0 | EXT. DUST STORM - FRONTIER MAIN STREET - DAY
Detected names (may be incomplete or contain aliases): SHERIFF AUGUSTA PIKE
* 1 A ¶ Wind.
* 2 A Grit.
* 3 A A hanging sign banging.
* 4 A Visibility ten feet.
5 A ¶ A figure in a duster walks down the center of the street.
6 A Head down.
7 A Hand on a holster.
8 A This is SHERIFF AUGUSTA PIKE, 40s.
9 A ¶ She stops outside the saloon.
10 A ¶ She listens.
* 11 A ¶ Inside the saloon, a piano plays one bar.
* 12 A Stops.
13 A ¶ She pushes through the swinging doors.

### SCENE s01848_1 | INT. SALOON - CONTINUOUS
Detected names (may be incomplete or contain aliases): SHERIFF PIKE, CRANE, BARKEEP, JONAH PIKE
* 1 A ¶ Dim.
* 2 A Empty tables.
3 A A man at the bar, his back to her.
4 A Black hat.
5 A Long coat.
6 A He does not turn.
7 A ¶ She steps in.
* 8 A Boots on boards.
* 9 A Slow.
10 A ¶ He lifts a glass.
11 A Drinks.
12 D SHERIFF PIKE: Mr. Crane.
13 D CRANE: Sheriff.
14 D SHERIFF PIKE: You're a long way from Laramie.
15 D CRANE: He's longer.
16 D SHERIFF PIKE: Who?
17 D CRANE: The man you're looking for.
18 A ¶ She moves to the bar.
19 A Stands two stools down.
20 D SHERIFF PIKE: That so?
21 D CRANE: Ask the barkeep.
22 A ¶ She looks.
23 A Behind the bar a man slumps on the floor, hands tied, mouth gagged.
24 A The BARKEEP, 50s.
25 A His eyes plead.
26 A ¶ She keeps her face still.
27 D SHERIFF PIKE: Untie him.
28 D CRANE: Don't think so.
29 D SHERIFF PIKE: I wasn't asking.
30 A ¶ He turns, finally.
31 A Pale eyes.
32 A A thin smile.
33 D CRANE: Augusta. We both know who's in the back room.
34 A ¶ Her hand tightens on the holster.
35 D SHERIFF PIKE: Say it.
36 D CRANE: Your brother.
37 A ¶ She says nothing.
* 38 A The storm howls against the shutters.
* 39 A A floorboard groans overhead.
40 D CRANE [CONT'D]: He wants to talk.
41 D SHERIFF PIKE: Does he.
42 D CRANE: Before the hanging.
43 A ¶ She draws.
44 A So does he.
45 A Both guns level.
* 46 A Neither fires.
47 A The barkeep whimpers.
* 48 A ¶ From the back stair, a voice, rough and tired.
49 D JONAH [O.S.]: Gus. Put it down.
50 A ¶ She doesn't.
51 A Crane doesn't.
* 52 A The piano, somewhere, plays the same bar again.
53 A ¶ Then she lowers the gun.
54 A Crane smiles.
55 A She turns to the stair.
56 D SHERIFF PIKE (softly): Jonah.
* 57 A ¶ The stair creaks.
58 A JONAH PIKE, 40s, her brother, descends out of the dark.
59 A Shackles on his wrists.
60 A A gaunt, unshaven man.

### SCENE s01849 | INT. HOSPITAL ROOM 412 - NIGHT
Detected names (may be incomplete or contain aliases): AMINA FAROUK, WALTER NKEMELU
* 1 A ¶ A single bed.
* 2 A An IV pole.
* 3 A A window onto a dark parking lot.
* 4 A The monitor's green line crawls.
5 A ¶ DR. AMINA FAROUK, 40s, rumpled scrubs, white coat over her arm, sits on the edge of a chair, a tablet balanced on her knee.
6 A In the bed lies WALTER NKEMELU, 70s, a retired bus driver, oxygen cannula in his nose, one hand taped to a board.
7 A ¶ Amina scrolls through the chart.
8 A Walter watches the ceiling tile.
9 D AMINA: Your numbers are better than yesterday.
10 D WALTER (hoarse): I'm a bus driver. I know what that means.
11 D AMINA: It means better.
12 D WALTER: It means you're being polite.
13 D AMINA: I'm being accurate.
14 D WALTER: That's the same thing in your line of work.
15 A ¶ She sets the tablet down.
16 D AMINA (to the room, softly): Okay.
17 D WALTER: Who are you talking to?
18 D AMINA: Nobody. Habit.
19 A ¶ He turns his head on the pillow.
20 D WALTER: You say that when you're about to tell me something I won't like.
21 D AMINA: I do not.
22 D WALTER: You do. Last Tuesday. Before you said the word "biopsy."
23 A ¶ She picks at the cuff of her coat.
24 D AMINA: The scan came back.
25 D WALTER: And?
26 D AMINA: And it's not what we hoped.
27 A ¶ Walter says nothing.
* 28 A The monitor beeps.
29 A She speaks without looking at him.
30 D AMINA [CONT'D] (to herself): Come on, Amina.
31 D WALTER: Say it plain.
32 D AMINA: It's spread. To the liver.
33 A ¶ Walter closes his eyes.
34 A His fingers curl on the board, the tape pulling.
35 D WALTER: How long?
36 D AMINA: I don't want to guess.
37 D WALTER: Guess.
38 D AMINA: Months. Maybe six.
39 D WALTER: Maybe.
40 D AMINA: I'm sorry.
41 D WALTER: Don't apologize. You didn't give it to me.
42 D AMINA: No.
43 D WALTER: Sit closer. I can't see you.
44 A ¶ She slides the chair to the bed.
45 A He opens his eyes and finds her face.
46 D WALTER [CONT'D]: My daughter's flying in Thursday.
47 D AMINA: I'll make sure the visiting hours are flexible.
48 D WALTER: I'd like to tell her myself.
49 D AMINA: Of course.
50 D WALTER: Not on the phone.
51 D AMINA: Not on the phone.
52 A ¶ He nods.
53 A Then, quietly, to the empty air:
54 D WALTER [CONT'D] (muttered): Six months. Might as well finish the route.
55 A ¶ Amina laughs, a short wet sound, and wipes her eye with her sleeve.
56 A Walter pats her hand with the one that isn't taped.
57 D WALTER [CONT'D] (to the room): All right, then.
58 D AMINA: All right.

### SCENE s01850 | INT. RIVERBOAT STATEROOM - NIGHT
Detected names (may be incomplete or contain aliases): CAPTAIN SILAS BARROW, MADAME CELESTINE ROUX, ^CELESTINE, MARGUERITE
* 1 A ¶ 1871.
* 2 A A cramped cabin lit by a swaying oil lamp.
* 3 A A trunk, a washstand, a narrow bunk.
* 4 A The paddlewheel thuds somewhere beneath the floor.
* 5 A Rain streaks the porthole.
6 A ¶ CAPTAIN SILAS BARROW, 50s, in a rumpled blue coat, sits on the trunk with a ledger on his knee.
7 A Across from him, in the only chair, sits MADAME CELESTINE ROUX, 40s, black lace, a small valise in her lap.
8 A She has not taken her gloves off.
9 D SILAS: You've paid for passage to Natchez, Madame Roux.
10 D CELESTINE: I have.
11 D SILAS: We reach Natchez at dawn.
12 D CELESTINE: I am aware.
13 D SILAS: Then I wonder why you ask to speak with me at midnight.
14 D CELESTINE (to herself): Because midnight is when truths wake.
15 D SILAS: I beg your pardon?
16 D CELESTINE: Nothing, Captain. A habit of mine.
17 A ¶ He closes the ledger.
* 18 A The lamp swings.
* 19 A Shadows run across the walls and back.
20 D SILAS: Madame, I run a respectable boat.
21 D CELESTINE: No one doubts it.
22 D SILAS: Then you'll understand that when a lady boards with no luggage but a valise, and a name that is not the one on her papers, I am obliged to ask.
23 D CELESTINE: Ask.
24 D SILAS: Who are you?
25 D CELESTINE: I am the sister of the man you hanged in Vicksburg.
26 A ¶ Silas stands.
* 27 A The ledger slides to the floor.
28 A Celestine does not move.
* 29 A The paddlewheel thuds on.
30 D SILAS (simultaneously): I did not hang him.
31 D ^CELESTINE (simultaneously): You signed the paper.
32 A ¶ They stare.
33 A Silas lowers himself back onto the trunk.
34 D SILAS: That was war, Madame.
35 D CELESTINE: War ended in sixty-five.
36 D SILAS: He was a spy.
37 D CELESTINE: He was a boy of nineteen with a letter.
38 D SILAS: Madame Roux--
39 D CELESTINE: You may call me Marguerite. That is my name.
40 D SILAS (slowly): Marguerite.
41 A ¶ She opens the valise.
* 42 A Inside, on a bed of black velvet, lie a revolver and a folded paper.
43 A Silas looks at them for a long moment.
44 D SILAS [CONT'D] (muttering): So it ends.
45 D MARGUERITE: No. That is for you to choose.
46 A ¶ She takes out the paper, unfolds it, and lays it on his knee.
47 A He reads it.
48 A His lips move.
49 A He finishes.
50 A He looks up.
51 D SILAS: This is a confession.
52 D MARGUERITE: It is yours to sign.
53 D SILAS: And if I do not?
54 A ¶ She lifts the revolver from the velvet and sets it beside the paper on his knee, butt first.
55 D MARGUERITE: Then you will have both.
* 56 A ¶ Rain hammers the porthole.
* 57 A The lamp steadies.
58 A Silas reaches slowly for the pen on the washstand.

### SCENE s01851 | INT. NIGHT TRAIN DINING CAR - NIGHT
Detected names (may be incomplete or contain aliases): POLLY, SCHRADER, MISS VERONIKA HAAS, KAZ, BLUME
* 1 A ¶ A narrow dining car, white tablecloths, brass lamps.
* 2 A The rails clack beneath.
* 3 A Outside the window, the dark country streams by.
4 A ¶ CAPTAIN LEOPOLD "POLLY" SCHRADER, 50s, stout, a retired customs officer in a three-piece suit, cuts into a steak with ceremony.
5 A Across from him, MISS VERONIKA HAAS, 30s, silver cigarette holder, sips from a thin glass and watches him over the rim.
6 A At the next table, alone, sits their waiter-turned-witness, KAZIMIR "KAZ" BLUME, 20s, in a white jacket, polishing the same spoon for the fourth time.
7 D POLLY: You don't eat, Miss Haas.
8 D VERONIKA: I never do at night.
9 D POLLY: A woman who doesn't eat at night is a woman with something on her mind.
10 D VERONIKA: Or on her conscience.
* 11 A ¶ The train lurches.
* 12 A Her glass slides an inch.
13 A Polly catches it before it falls, and holds it a moment too long in his hand.
14 D POLLY: Careful.
15 D VERONIKA: Thank you, Captain.
16 D KAZ (from the next table): Sir, if I may. The steak. Is it satisfactory?
17 D POLLY: Kaz, my boy, the steak is excellent.
18 D KAZ: I'm glad, sir. I prepared it myself.
19 A ¶ Polly's knife stops.
20 D POLLY: Did you.
21 D KAZ: It was the last of the lot. The cook was indisposed.
22 A ¶ Veronika sets her glass down very softly.
* 23 A The lamps shake.
* 24 A The knife rests on the plate.
25 A Polly dabs his lips with a napkin, rises to his full, unsteady height, and clutches the table.
26 D POLLY [CONT'D]: Veronika. I feel--
27 A ¶ She is already on her feet.
28 A She catches his arm as he buckles, easing him into the chair.
29 A Kaz has put down the spoon.
30 D VERONIKA: Kaz. The window.
31 D KAZ: Yes, miss.
32 A ¶ He slides the sash up.
* 33 A Night air floods the car.
34 A Polly breathes, hard, his eyes on her.
35 D POLLY (whispering): Veronika. The steak.
36 D VERONIKA: I know, Polly.
37 D POLLY: You?
38 D VERONIKA: Not me, darling.
39 A ¶ She turns, slowly, to Kaz, who stands in the open window with the spoon in his hand and a different expression than before.
40 D KAZ (quietly): Miss Haas. You weren't meant to be at this table.

### SCENE s01852 | INT. ARCHIVE READING ROOM - DAY
Detected names (may be incomplete or contain aliases): IMOGEN HARCOURT, THADDEUS HARCOURT, ROSALIE, OSWALD BRIGHT, CALLUM FINCH
* 1 A ¶ A high-ceilinged room of old oak tables and green-shaded lamps.
* 2 A Dust turns in the light from tall windows.
* 3 A Shelves of cloth-bound volumes rise into shadow.
* 4 A A clock above the door ticks like a patient animal.
5 A ¶ Five people sit scattered through the room, none of them looking at each other.
6 A ¶ At the center table, a woman in her fifties named IMOGEN HARCOURT turns pages of a parish register with a gloved finger.
7 A She reads with her lips slightly parted, and each time she reaches the bottom of a page she touches the corner of her eye.
8 A Across the room, her estranged husband THADDEUS HARCOURT, sixty, pretends to study a map at the window, though his eyes follow her reflection in the glass.
9 A At the long table by the door, their daughter ROSALIE, twenty-six, builds a tower of index cards and knocks it down by accident, and builds it again.
10 A Two tables over, the archivist OSWALD BRIGHT, forty, in sleeve garters and half-moon glasses, stamps slips with a dry rhythm.
11 A And in the far corner sits a young man named CALLUM FINCH, twenty-eight, a stranger to the family, with a laptop he never opens.
12 A ¶ Imogen reaches the bottom of another page.
13 A She sighs, and the sound carries.
14 A ¶ Thaddeus turns from the window.
15 A He crosses the room, slowly, as if wading, and stops at her table.
16 A She does not look up.
17 A He draws out the chair opposite, and she lets him.
18 A ¶ He sits.
19 A He folds his hands on the table, then unfolds them.
20 A She turns another page.
21 A He watches her thumb smooth the margin.
22 A ¶ When he finally speaks, it is quiet, and the archivist's stamp falters.
23 D THADDEUS: You found it, then.
24 D IMOGEN: I found a name.
25 D THADDEUS: Which?
26 D IMOGEN: Not yours.
27 A ¶ He nods, as if this is the answer he expected and the one he dreaded.
28 A Across the room, Rosalie has stopped building.
29 A She watches her parents through the glass of the index-card tower, and Callum, at the corner table, finally opens his laptop and then closes it again.
30 A Oswald sets down his stamp, takes off his glasses, and polishes them on his sleeve, a private courtesy.
31 D IMOGEN [CONT'D]: Thaddeus, why did you come?
32 D THADDEUS: To see if you'd read it.
33 D IMOGEN: I'm reading it.
34 D THADDEUS: And?
35 A ¶ She turns the register around on the table so he can read.
36 A He leans in.
37 A His finger finds the line.
38 A His mouth moves.
39 A When he looks up, his eyes are wet.
40 D THADDEUS [CONT'D]: That's my mother's hand.
41 D IMOGEN: Yes.
42 D THADDEUS: She never said.
43 D IMOGEN: No.
* 44 A ¶ The clock ticks.
45 A Rosalie rises, crosses to them, and stands behind her mother's chair with one hand on its back.
46 A Imogen reaches up without turning and covers it with her own.
47 A ¶ Callum, in the corner, slips his laptop into its bag and stands.
48 A He leaves, quietly, the door sighing shut behind him.
49 A Oswald resumes his stamping, softer than before.

### SCENE s01853 | INT. DEEP SPACE RELAY STATION - CONTROL ROOM - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): COMMANDER EVELYN ADEYEMI, LIEUTENANT PIERRE DUMONT, ENSIGN TAMSIN BELL, VOICE, TRAVELER
* 1 A ¶ Brass-toned consoles, curved glass, a chart table out of some earlier century's idea of the future.
* 2 A Soft music plays from a hidden speaker.
* 3 A A blue star turns slowly beyond the viewport.
4 A ¶ COMMANDER EVELYN ADEYEMI, 50s, in a crisp gray uniform, stands at a console with a cup of tea.
5 A Beside her, the station's navigator LIEUTENANT PIERRE DUMONT, 30s, leans on the chart table over a spread of star maps.
6 A At the communications desk, the young radio operator ENSIGN TAMSIN BELL, 20s, wears a headset and absentmindedly twirls a pencil.
* 7 A ¶ A soft chime.
8 A Tamsin sits up.
9 D TAMSIN: Commander. Incoming signal on the long channel.
10 D EVELYN: Source?
11 D TAMSIN: Unknown. Wide beam, no authentication.
12 D PIERRE: Probably a drifter.
13 D EVELYN: Probably.
14 A ¶ Tamsin flips a switch.
* 15 A A hush of static fills the room, and out of it a voice, warm, old, faintly amused, as if from the bottom of a well.
16 D VOICE [V.O.] (over speaker): Relay Station Nine, this is a friend. Please do not be alarmed.
17 A ¶ Pierre and Tamsin exchange a look.
18 A Evelyn sets her tea down.
19 D EVELYN: Identify yourself.
20 D VOICE [V.O.]: Names are a luxury. Call me the Traveler.
21 D PIERRE (whispering): That's not a ship's name.
22 D TRAVELER [V.O.]: I am not a ship.
* 23 A ¶ The lights dim.
* 24 A A shape begins to resolve in the viewport, a tall, indistinct column of pale light rising out of the star's glare.
25 A Tamsin takes off her headset.
26 D EVELYN: Ensign. Raise the shields.
27 D TAMSIN: They're up, Commander. They've been up.
28 D TRAVELER [V.O.]: There is no need. I am here only to deliver a warning.
* 29 A ¶ The pale shape leans closer to the glass.
30 A Pierre steps back and knocks a star map to the floor.
31 A Evelyn does not blink.
32 D EVELYN: What warning?
33 A ¶ The shape raises what might be a hand.
* 34 A In the viewport, the blue star flickers once, twice.
35 D TRAVELER [V.O.]: Your sun is not what you think.
* 36 A ¶ Silence.
* 37 A The music, absurdly, continues.
38 A Evelyn crosses to the speaker, finds the knob, and turns it off.
39 D EVELYN: Go on.
* 40 A ¶ The Traveler's voice, when it comes, is very gentle.
41 D TRAVELER [V.O.]: It is a door. And somebody is knocking.
42 A ¶ Evelyn looks at Pierre and Tamsin.
43 A Neither speaks.
* 44 A Beyond the glass, the blue star flickers a third time, and the whole station groans like a ship in a swell.
45 D TAMSIN (small voice): Commander, I think we should go home.
46 D EVELYN (quietly): We are home.
47 A ¶ The shape in the window lowers its hand, and the star goes dark.

### SCENE s01854 | INT. COURTHOUSE CONFERENCE ROOM - DAY
Detected names (may be incomplete or contain aliases): DEFENSE ATTORNEY LEONOR ASTURIAS, PROSECUTOR, DESMOND TULLY, DEPUTY OWEN PRATT, ^OWEN
* 1 A ¶ A windowless room.
* 2 A A long table scarred by decades of folders.
* 3 A A water pitcher beading with sweat.
* 4 A Fluorescent light hums like a distant insect.
5 A ¶ DEFENSE ATTORNEY LEONOR ASTURIAS, 40s, charcoal suit, reading glasses pushed into her hair, shuffles exhibits into a neat pile.
6 A Across from her, a PROSECUTOR, 30s, crisp, a pen behind his ear, taps a laptop.
7 A Between them, at the end of the table, sits their client MR. DESMOND TULLY, 50s, in an ill-fitting suit that smells of mothballs, hands clasped.
8 A ¶ The prosecutor, DEPUTY DA OWEN PRATT, looks at the clock.
9 D OWEN: We have ten minutes before the judge.
10 D LEONOR: We have as long as it takes.
11 D DESMOND: Can I say something?
12 D LEONOR (simultaneously): No.
13 D ^OWEN (simultaneously): Please.
14 A ¶ They look at each other.
15 A Desmond looks at both.
16 D DESMOND: I was going to say I'd like some water.
17 A ¶ Leonor pours.
18 A Her hand is steady.
19 A Owen's pen is not.
20 D OWEN: Ms. Asturias. The offer is five years.
21 D LEONOR: My client doesn't accept.
22 D OWEN: It's a fair number.
23 D LEONOR: It's a number.
24 D DESMOND: Ten minutes, he said?
25 D OWEN: Nine.
26 D LEONOR: Mr. Pratt, I'd like a word with my client.
27 D OWEN: Of course.
28 A ¶ He doesn't move.
29 A She does not either.
* 30 A The pitcher drips.
31 A Desmond sips from the paper cup, studies the rim, and sets it down very carefully.
32 D DESMOND: I didn't do it.
33 D LEONOR (quietly): We know.
34 D OWEN (also quietly): The evidence says otherwise.
35 D DESMOND: Then the evidence is wrong.
36 D OWEN: It's a very strong file, Mr. Tully.
37 D DESMOND: My wife says you can make a file say anything.
38 D OWEN (a flicker of something): Your wife testified.
39 D DESMOND: She said what she saw.
40 D LEONOR: She said what she believed.
41 D OWEN: That's the same thing in a courtroom.
42 A ¶ Leonor pulls a single sheet from the middle of her pile and slides it across the table.
43 A Owen reads it.
44 A The pen stops tapping.
45 A His color changes by degrees.
46 D OWEN [CONT'D]: Where did you get this?
47 D LEONOR: It was in your discovery.
48 D OWEN: It wasn't.
49 D LEONOR: Page four hundred and twelve.
50 D OWEN: That's not possible.
51 D DESMOND (to no one): Is it good?
52 D LEONOR: Mr. Tully, it's very good.
53 A ¶ Owen reaches for his laptop.
54 A His fingers hover over the keys.
* 55 A Outside, a bailiff's voice calls a case number, and a door slams.
56 D OWEN: Give me a minute.
57 D LEONOR: Take nine.

### SCENE s01855 | INT. OPERA HOUSE - FLY GALLERY - NIGHT
Detected names (may be incomplete or contain aliases): DELPHINE ARCHAMBAULT, MONTY, PRYCE, JIN-HO BAEK, ^JIN-HO
* 1 A ¶ Catwalks and ropes in the dark above the stage.
* 2 A Below, far down, a soprano rehearses a long note, and the sound rises through the grating.
* 3 A Canvas drops hang like sails.
4 A ¶ Three figures work their way along a narrow gantry.
5 A The first, a woman in a stagehand's black, carries a coil of rope across her shoulder and does not look down.
6 A The second, a short man in a tuxedo with his collar undone, grips the rail with both hands, his knuckles pale, and mouths a count of the steps.
7 A The third, a lean figure in a hooded sweatshirt, walks backward along the plank, scanning the dark behind them.
8 A ¶ The woman is DELPHINE ARCHAMBAULT, 40s.
9 A The short man is MONTGOMERY "MONTY" PRYCE, 50s.
10 A The hooded figure is JIN-HO BAEK, 20s.
11 D DELPHINE (whispering): Chandelier winch is on the left.
12 D MONTY (simultaneously): I can't do heights.
13 D ^JIN-HO (simultaneously): Left or my left?
14 A ¶ Delphine stops.
15 A She lays the rope on the plank, takes Monty's hand off the rail, and places it on her shoulder.
16 A He grips.
17 A She walks on, with the little man shuffling behind her and the hooded boy turning to follow, still facing backward.
* 18 A ¶ Below, the soprano finishes.
* 19 A Applause, scattered.
* 20 A A voice calls "Take ten."
* 21 A The lights on the stage flicker down.
22 A The three on the gantry freeze, then move again, faster.
23 D MONTY: Where's the box?
24 D JIN-HO: Under the winch.
25 D DELPHINE: It's not under it. It's inside it.
26 A ¶ They reach the winch, a squat iron drum with a hand crank.
27 A Delphine kneels, runs her fingers along its housing, and finds a latch.
* 28 A It clicks.
* 29 A A panel swings open.
* 30 A Inside, wrapped in velvet, a jeweled mask the size of a dinner plate gleams in the dark.
31 A ¶ Monty exhales.
32 A Jin-ho whistles softly.
33 A Delphine lifts the mask, turns it over, and holds it up to the glow of the stage light below.
34 D JIN-HO: It's smaller than I thought.
35 D MONTY: It's bigger than I feared.
36 D DELPHINE: It's exactly right.
* 37 A ¶ A footstep, distant, rings on iron.
* 38 A A flashlight beam swings along the far end of the gantry.
39 A All three duck.
40 A Monty presses himself to the plank.
41 A Jin-ho slides the panel shut with one finger.
42 A Delphine tucks the mask inside her jacket and unspools the rope.
* 43 A ¶ The flashlight comes nearer and stops, a long way below the gantry, searching.
44 A Delphine looks at Monty.
45 A Monty looks at Jin-ho.
46 A Jin-ho shrugs and cups his hands.
47 D JIN-HO (in a gruff voice): Just rigging, boss!
* 48 A ¶ The beam lingers, then turns away.
* 49 A Footsteps recede.
50 A Monty lets out a laugh that is half sob.
51 D MONTY: Don't fall. He said don't fall.
52 D DELPHINE (grinning): Good advice.
53 A ¶ She ties the rope to a rail, tosses the free end into the dark, and swings a leg over the edge.

### SCENE s01856 | INT. COUNTRY HOUSE LIBRARY - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR HORACE LANGLEY, LADY PRUDENCE WHITMORE
* 1 A ¶ Leather, mahogany, a banked fire.
* 2 A A grandfather clock strikes eleven.
* 3 A Rain beats at the French windows.
4 A ¶ INSPECTOR HORACE LANGLEY, 50s, trench coat draped over a chair, stands at the mantelpiece studying a small bronze statue.
5 A At the desk by the window sits LADY PRUDENCE WHITMORE, 60s, black dress, hands folded over a closed ledger.
* 6 A A telephone sits between them.
7 D LANGLEY: A lovely piece.
8 D PRUDENCE: My late husband's.
9 D LANGLEY: He had taste.
10 D PRUDENCE: He had money.
11 D LANGLEY: They're not always the same.
12 A ¶ She does not smile.
13 A He sets the statue down and turns it a quarter inch, so its face looks toward the door.
14 D LANGLEY [CONT'D]: The butler says he found the body at seven.
15 D PRUDENCE: He did.
16 D LANGLEY: And you were?
17 D PRUDENCE: In the conservatory. Watering the orchids.
18 D LANGLEY: At seven in the evening.
19 D PRUDENCE: Orchids keep their own hours.
* 20 A ¶ The telephone rings.
21 A Both look at it.
* 22 A It rings again.
23 A Prudence lifts the receiver, listens, and holds it out to Langley.
24 D PRUDENCE [CONT'D]: For you.
25 A ¶ Langley takes the receiver and carries it, on its long cord, out through the door into the hall.
26 A Prudence listens.
* 27 A She cannot see him, and his voice reaches her only in pieces.
28 D LANGLEY [O.S.]: Langley. Yes. The gardener. He saw whom?
* 29 A ¶ A pause.
30 D LANGLEY [O.S., CONT'D]: Lady Whitmore. In the garden, at half past six. Carrying a spade. Thank you, Sergeant.
* 31 A ¶ The receiver is replaced.
32 A He returns, trailing the cord, and sets the telephone down.
* 33 A The clock ticks.
* 34 A The fire pops.
35 A Prudence folds her hands over the ledger, a little tighter.
36 D PRUDENCE: Orchids need potting, Inspector.
37 D LANGLEY: So they do.
38 A ¶ He lifts the bronze statue and weighs it in his palm.
39 D LANGLEY [CONT'D]: Lady Whitmore. I think we should begin again.

### SCENE s01857 | INT. PARKING GARAGE LEVEL P4 - NIGHT
Detected names (may be incomplete or contain aliases): NORA VESS, ELISE MARCHETTI
* 1 A ¶ Concrete.
* 2 A Sodium light.
* 3 A A single car, hood up.
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
* 17 A Her heels echo.
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
* 39 A ¶ A car engine growls somewhere above.
40 A Both women look up.
* 41 A The sound passes.
42 D NORA: Where do they park?
43 D ELISE: Level two. Executive spaces.
44 D NORA: Then we have time.
45 D ELISE: We have fifteen minutes.
46 A ¶ Nora pulls a recorder from her jacket and sets it on the hood beside the case.
47 A She presses record.
* 48 A A red light glows.
49 D NORA: Say it for the tape.
50 D ELISE: I can't.
51 D NORA: Then show me.
52 A ¶ Elise opens the lid.
* 53 A Papers, hundreds of them, and a small drive.
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
* 81 A The light buzzes overhead.
* 82 A In the distance, a second engine starts.
83 D NORA: Keep talking.
84 D ELISE: Not here.
85 D NORA: Where?
86 D ELISE: Take the case. Go.
87 D NORA: And you?
88 D ELISE (a thin smile): I'll be right behind you.
89 A ¶ Nora snaps the case shut, lifts it, and backs toward the ramp.
90 A Elise watches her go.
* 91 A The engine closes in.

### SCENE s01858 | INT. JUNKYARD OFFICE TRAILER - NIGHT
Detected names (may be incomplete or contain aliases): TESSA MORRIS, DEKE MORRIS, ^TESSA
* 1 A ¶ A cramped trailer office.
* 2 A A fluorescent tube buzzes over a metal desk piled with receipts.
* 3 A A space heater glows orange.
* 4 A On the wall, a calendar from 2009.
* 5 A An old CB radio crackles on a shelf.
6 A ¶ TESSA MORRIS, 16, in a hoodie too big for her, sits on a broken office chair, knees up, a Polaroid camera in her lap.
7 A Across from her, perched on the desk, is her older cousin DEKE MORRIS, 19, hoodie of his own, a rolled cigarette behind his ear.
8 D DEKE: You don't have to do this.
9 D TESSA: Yes I do.
10 D DEKE: Mom's not gonna know.
11 D TESSA: That's not why.
12 D DEKE: Then why?
13 D TESSA: Because he said I couldn't.
14 D DEKE: Who said?
15 D TESSA: Dad.
16 D DEKE: Uncle Roy said a lot of things.
17 D TESSA: He said I couldn't take a picture worth keeping. He said I'd quit.
18 D DEKE: You've been at it two years.
19 D TESSA: That's quitting to him.
20 A ¶ She winds the camera.
21 A Deke picks at the cuff of his hoodie.
* 22 A ¶ Outside, headlights sweep across the window.
* 23 A An engine growls, idles, and cuts out.
24 A Both of them freeze.
* 25 A A truck door slams.
* 26 A Boots crunch on gravel.
27 D DEKE (whispering): It's not him.
28 D TESSA: It could be.
29 D DEKE: Roy doesn't drive a rig.
30 D TESSA: He borrows one.
31 A ¶ Deke slides off the desk and eases the trailer door open a crack.
32 A He peers out, then slips through it and pulls it shut behind him.
33 A Tessa sits alone, camera clutched in both hands, listening to the buzz of the tube.
34 D DEKE [O.S.] (muffled, calling out): Hey! Gate's closed! Come back tomorrow!
35 A ¶ A heavy voice answers, too low to understand.
36 A Deke laughs, a nervous bark.
37 D DEKE [O.S., CONT'D]: Nah, man, he doesn't work here anymore!
38 A ¶ Tessa's knuckles whiten on the camera.
* 39 A A long silence.
* 40 A The engine starts again, backs, and fades up the road.
* 41 A ¶ The door opens.
42 A Deke leans in, grinning with relief, and Tessa raises the camera and the flash pops white.
43 D DEKE: Hey!
44 D TESSA (smiling at last): Keeper.
45 A ¶ He wipes the spots from his eyes.
46 A She waves the Polaroid until the picture begins to bloom.
47 D DEKE: Let me see.
48 D TESSA: Not yet.
49 A ¶ They both lean over it, shoulders touching, as his face slowly appears out of the gray.
50 D DEKE (simultaneously): That's terrible.
51 D ^TESSA (simultaneously): That's perfect.

### SCENE s01859 | INT. LAUNDROMAT - NIGHT
Detected names (may be incomplete or contain aliases): LUCY, TEO REYES
* 1 A ¶ Twenty-four-hour laundromat on a dead corner.
* 2 A Fluorescent tubes buzz.
* 3 A Rows of dryers tumble in the dark.
* 4 A A row of orange plastic chairs faces a window onto the empty street.
5 A ¶ LUCINDA "LUCY" REYES, 30s, scrubs under a coat, sits slumped in the nearest chair watching a dryer turn.
6 A Beside her, her younger brother TEO REYES, 22, thin, new haircut, holds a plastic basket of folded shirts on his lap like a shield.
7 A At the change machine, feeding quarters one at a time, stands their mother ADELA REYES, 60s, in a church dress and sneakers.
* 8 A ¶ The coins ring in the dispenser.
9 D ADELA: Teo. Come help me.
10 D TEO: I'm busy.
11 D ADELA: With what?
12 D TEO: Sitting.
13 D LUCY: He's being a man.
14 D TEO: Lucy.
15 D LUCY: Sorry. Being a grown-up.
16 A ¶ Adela collects the quarters in her cupped hands and carries them over.
17 D ADELA: Two loads. Forty minutes.
18 D LUCY: Mom, it's midnight.
19 D ADELA: So? We have forty minutes.
20 A ¶ She sits between them.
21 A She sets the quarters on her knee and counts them.
22 A Teo sets down the basket.
23 A Lucy tilts her head back against the wall.
24 D TEO: I got the job.
25 A ¶ Adela's fingers stop.
26 D LUCY: What job?
27 D TEO: The one in Tucson.
28 D LUCY (sitting up): Tucson?
29 D TEO: I leave Friday.
* 30 A ¶ Silence.
* 31 A The dryers hum.
32 A Adela resumes counting.
33 D ADELA: That's good.
34 D TEO: You're not mad?
35 D ADELA: Why would I be?
36 D TEO: Because you said--
37 D ADELA: I said a lot of things.
38 D LUCY: Teo, Mom's crying.
39 D ADELA: I'm not crying.
40 D LUCY: You are.
41 D ADELA: It's the lint.
42 A ¶ Teo takes the quarters from his mother's knee and puts them in her palm, and she closes her fingers around his hand.

### SCENE s01860 | INT. BALLROOM OF THE GRAND CAPRICE HOTEL - NIGHT
Detected names (may be incomplete or contain aliases): AUGUSTUS PEMBERTON-HYDE, ODETTE FUSSELL, BARNEY, KRUPP, MISS FLORENCE LOVELACE, TALL MAN
* 1 A ¶ A faded ballroom in a faded resort.
* 2 A A crystal chandelier swings gently, missing every third bulb.
* 3 A Red velvet curtains droop.
* 4 A A banner reads "SENIOR SINGLES MIXER" in glitter.
* 5 A Thirty folding chairs stand in rows, nearly empty.
6 A ¶ A tall, stately man in a white dinner jacket stands at the doorway, shaking out a wet umbrella.
7 A He is MR. AUGUSTUS PEMBERTON-HYDE, 70s.
8 A He sweeps one white glove across his hair, adjusts his tie, and surveys the room as if reviewing troops.
9 A ¶ At the punch bowl, a small woman in a feathered hat and an enormous corsage ladles with great seriousness.
10 A She is MRS. ODETTE FUSSELL, 60s.
11 A She hums.
12 A ¶ Across the dance floor, a stout man in a paisley vest sits alone, tapping his foot to music only he hears.
13 A He is MR. BARTHOLOMEW "BARNEY" KRUPP, 60s.
14 A ¶ And at the piano, in a sequined gown that hasn't fit since 1985, sits MISS FLORENCE LOVELACE, 70s, who thumps a single chord and waits.
15 A ¶ The tall man clears his throat.
16 D TALL MAN: Good evening.
17 A ¶ He bows.
18 A Odette curtsies with the ladle.
19 A Barney waves.
20 A Florence thumps the chord again.
21 D ODETTE: Mr. Pemberton-Hyde! Punch?
22 D PEMBERTON-HYDE: Madam, I would be honored.
23 A ¶ He crosses the floor with his stiff, ceremonious stride.
24 A She hands him a cup.
25 A He sips.
26 A His face goes through three expressions.
27 D PEMBERTON-HYDE [CONT'D]: Is this... gravy?
28 D ODETTE: Oh, dear.
29 D BARNEY (calling): I told her it was gravy!
30 D FLORENCE (from the piano): Is anyone going to dance, or must I play to the walls?
31 A ¶ Odette takes the cup back.
32 A She and Pemberton-Hyde look at each other, and then, without a word, she takes his arm and he leads her out to the center of the floor.
33 A Florence strikes up a waltz, off-key.
34 A Barney leaps to his feet and applauds.
* 35 A ¶ The chandelier swings.
* 36 A A bulb pops.
* 37 A Nobody minds.

### SCENE s01861 | EXT. ROOFTOP WATER TOWER - DAWN
Detected names (may be incomplete or contain aliases): JUNE WEBER, OSCAR PELL, KID
* 1 A ¶ A rusted water tower on a flat tar roof above a sleeping town.
* 2 A Pigeons.
* 3 A A pink smear of sky.
4 A ¶ JUNE WEBER, 17, fraying denim jacket, climbs the last rung.
5 A Chewed fingernails.
6 A A paper bag in her teeth.
7 A ¶ She hauls over the lip.
8 A Looks around.
* 9 A ¶ Nobody.
10 A ¶ She sits.
11 A Takes a donut from the bag.
* 12 A ¶ A scrape behind her.
13 A ¶ She spins.
14 A ¶ OSCAR PELL, 17, skinny, dyed-blond hair, up the other ladder.
15 A Out of breath.
16 A Grinning.
17 D OSCAR: Told you I'd beat you.
18 D JUNE: You didn't.
19 D OSCAR: I got here at five.
20 D JUNE: Then why were you climbing?
21 D OSCAR: I went down for coffee.
22 A ¶ He holds up two paper cups.
23 A Hands her one.
24 A She takes it, suspicious.
25 D JUNE: It's cold.
26 D OSCAR: It's iced.
27 D JUNE: It's November.
28 D OSCAR: It's committed.
29 A ¶ She laughs despite herself.
30 A Drinks.
* 31 A ¶ Below, a milk truck rattles down Main Street.
* 32 A The light spreads.
* 33 A ¶ A third voice, below, thin and sharp.
* 34 A A kid's.
35 D KID [O.S.]: Oscar! Mom says come home!
36 A ¶ Oscar closes his eyes.
37 D OSCAR: Ten minutes!
38 D KID [O.S.]: She says now!
39 D JUNE: Who's that?
40 D OSCAR: My sister.
41 D JUNE: How old?
42 D OSCAR: Nine. Terrifying.
43 A ¶ He stands.
44 A Offers June a hand.
45 A She takes it.
46 D JUNE: Tomorrow?
47 D OSCAR: Same tower.
48 D JUNE: Bring hot coffee.
49 D OSCAR: Bring a better donut.
