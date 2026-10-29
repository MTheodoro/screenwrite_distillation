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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opus/group_0004.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00013 | EXT. SALT FLATS - ABANDONED EVAPORATION WORKS - DAY
Detected names (may be incomplete or contain aliases): SILAS WHITTAKER, CONNIE, REYES
* 1 A ¶ A white plain stretches to a white sky.
* 2 A Rotting wooden vats lie in rows like open coffins.
* 3 A Heat shimmers off the crust.
4 A ¶ SILAS WHITTAKER (50s, gray beard, duster bleached by sun) kneels beside a dead horse.
5 A He runs one hand along its neck and says nothing.
* 6 A ¶ Behind him, a shadow lengthens.
7 A He doesn't turn.
8 A ¶ CONSTANCE "CONNIE" REYES (30s, wide-brimmed hat, rifle across her back) stands twenty feet away on the crust.
9 A She holds a canteen by its strap.
* 10 D CONNIE: That your horse?
* 11 D SILAS: Was.
* 12 D CONNIE: Looks like the salt got her.
* 13 D SILAS: Looks like a bullet got her.
14 A ¶ She walks closer.
15 A Stops short of arm's reach.
16 A He rises, brushing his knees, and finally turns.
17 A His eyes go to the canteen.
18 A Hers go to his holster.
* 19 D CONNIE: I'll trade you water for a name.
* 20 D SILAS: I'd trade you a name for a mule.
* 21 D CONNIE: I don't have a mule.
* 22 D SILAS: Then you don't have a name worth the water.
23 A ¶ She almost smiles.
24 A He almost doesn't.
* 25 A The wind pulls at her hat brim.
26 A She tilts the canteen.
* 27 A Water slaps against the metal, loud in the silence.
* 28 D SILAS [CONT'D]: Don't wave that around.
* 29 D CONNIE: It's mine to wave.
30 A ¶ He takes a step.
31 A She does not move.
32 A He takes another.
33 A Her hand drifts back to the rifle sling.
* 34 D SILAS: Easy.
* 35 D CONNIE: You first.
36 A ¶ They stand with the dead horse between them and the white sky above.
37 A Neither one blinks.
* 38 D SILAS: You work for Dutch Halloran?
* 39 D CONNIE: Never heard of him.
* 40 D SILAS: That's a lie, and you tell it badly.
* 41 D CONNIE: Then I'm in good company.
42 A ¶ He nods slowly.
43 A Looks off toward a ridge on the horizon, a thin dark line.
* 44 D SILAS: He's coming, you know. He's got six men and a Gatling gun on a wagon.
* 45 D CONNIE: I know.
* 46 D SILAS: Then why are you standing here?
47 A ¶ She uncaps the canteen.
48 A Drinks.
49 A Wipes her mouth with the back of her wrist.
50 A Holds it out to him at arm's length, the way one offers food to a dog.
* 51 D CONNIE: Same reason as you.
52 A ¶ He takes it.
53 A Drinks long.
54 A The water runs down his beard.
55 A He hands it back.
* 56 D SILAS: He killed my brother.
* 57 D CONNIE: He killed my husband.
* 58 D SILAS: He burned my ranch.
* 59 D CONNIE: He took my land.
60 A ¶ They speak at once, the words overlapping, neither stopping for the other.
* 61 D SILAS: I came out here to die. ^ CONNIE I came out here to finish it.
* 62 A ¶ A beat.
63 A They look at each other, really look, for the first time.
* 64 D SILAS: Can you shoot that thing?
* 65 D CONNIE: Better than you can shoot that.
66 A ¶ He glances at his holster.
67 A Almost laughs.
* 68 D SILAS: What's your plan?
69 A ¶ She points past him at the nearest vat, a long wooden trough sunk in the crust.
* 70 D CONNIE: Wagon comes down the old cart road. Wheels sink in the brine. Horses panic.
* 71 D SILAS: And the Gatling?
* 72 D CONNIE: Pointed at the sky, if the wagon tips.
73 A ¶ He studies the vats.
* 74 A The road.
* 75 A The ridge.
* 76 A The long, long distance.
* 77 D SILAS: That's a lot of ifs.
* 78 D CONNIE: You got a better one?
79 A ¶ He doesn't.
80 A He pulls the revolver from his holster and checks the cylinder.
* 81 A Three rounds.
82 A He sighs.
* 83 D SILAS: Hand me a few.
84 A ¶ She digs in her coat.
85 A Pours a small handful of cartridges into his palm.
86 A He loads them one by one.
* 87 A ¶ On the ridge, a plume of dust rises.
* 88 A A glint of brass.
* 89 A The faint creak of wheels.
* 90 D CONNIE: Time to pick a vat.
91 A ¶ She walks away toward the trough.
92 A He lingers over the dead horse for one last moment, touches its mane, and follows.

### SCENE s00014 | INT. COURTROOM ABOARD A MOORED RIVER FERRY - DAY
Detected names (may be incomplete or contain aliases): JUDGE AUGUSTINE FAIRWEATHER, MARCELLA DE LUCA, PERCY, NAKAMURA, DISTRICT ATTORNEY WENDELL OSEI, WOMAN, LIEUTENANT SABINE ARROYO
* 1 A ¶ A converted paddle steamer.
* 2 A The bench is a captain's table.
* 3 A Brass portholes line the walls, and the floor lifts gently with the river's swell.
4 A ¶ JUDGE AUGUSTINE FAIRWEATHER (60s, silver hair, half-moon glasses) peers down from the bench.
5 A At the defense table sit MARCELLA DE LUCA (40s, sharp suit, pearl earrings) and her client, PERCIVAL "PERCY" NAKAMURA (50s, rumpled, calm to the point of serenity).
6 A Across the aisle stands DISTRICT ATTORNEY WENDELL OSEI (50s, booming baritone, fountain pen in his breast pocket).
* 7 D JUDGE FAIRWEATHER: Counsel, we've been over the manifest three times. Is there any objection to its admission?
* 8 D DE LUCA: None, Your Honor.
* 9 D OSEI: None, Your Honor.
10 A ¶ They answer at the same time.
11 A Percy glances between them with polite interest.
* 12 D JUDGE FAIRWEATHER: Then the manifest is admitted, and I would like to thank both counsel for a refreshingly uneventful morning.
* 13 D OSEI: The People have nothing further.
* 14 D DE LUCA: Nor does the defense.
15 A ¶ The Judge removes his glasses and pinches the bridge of his nose.
* 16 A A gull cries outside a porthole.
* 17 A The ferry creaks.
* 18 D JUDGE FAIRWEATHER: Let the record reflect we'll adjourn for lunch.
19 A ¶ He reaches for his gavel.
* 20 A The courtroom door swings open.
21 A ¶ A WOMAN (30s, cargo pants, hair in a braid, a ring of keys at her belt) steps in.
22 A LIEUTENANT SABINE ARROYO, according to the badge on her chest.
23 A She carries a sealed evidence bag in both hands, and she walks the aisle with the careful posture of someone carrying something that might go off.
* 24 D ARROYO: Your Honor, forgive the interruption. I have a log from the engine room.
* 25 D OSEI: Lieutenant, I wasn't informed --
* 26 D ARROYO: Neither was I. I found it ten minutes ago.
27 A ¶ She sets the bag on the bench.
28 A The Judge opens it, slides out a bound ledger, and flips to a page tabbed in red.
29 A His face does not move, but his eyes do.
* 30 D JUDGE FAIRWEATHER: Mr. Nakamura. Were you aboard the Annabelle on the night of March ninth?
* 31 D PERCY: I was not.
* 32 D JUDGE FAIRWEATHER: Then whose signature is this at the foot of the engineer's log?
33 A ¶ He turns the ledger around.
34 A Percy leans over.
35 A Looks.
36 A Sits back with the same serene smile, though his hand has found De Luca's sleeve.
* 37 D DE LUCA: Your Honor, I'd like a moment with my client.
* 38 D OSEI: Your Honor, the People move to continue.
39 A ¶ They speak together again, but this time with an edge, neither yielding.
* 40 D DE LUCA: This is an ambush. ^ OSEI This is evidence.
41 A ¶ The Judge raises his gavel and brings it down once.
* 42 A The ferry rocks beneath it.
* 43 D JUDGE FAIRWEATHER: Mr. Osei, sit down. Ms. De Luca, you may confer. Lieutenant Arroyo, you will remain exactly where you are.
44 A ¶ Arroyo nods, steps back, and folds her hands.
45 A Percy whispers something to De Luca.
46 A She goes pale.
47 A She looks at the Judge, then at the porthole, then at the river beyond.
* 48 D DE LUCA (quietly): Percy. Who is Annabelle?
49 A ¶ Percy smiles.
* 50 A The ferry creaks.

### SCENE s00015 | INT. OBSERVATORY DOME - NIGHT
Detected names (may be incomplete or contain aliases): HETTY, BLACKWOOD, BASTIAN ODUYA, SOLI, VARGAS, WILFRED PRATT, MEI-LING TAN
* 1 A ¶ A brass telescope as long as a bus points at a slit of stars.
* 2 A The floor is parquet, the walls lined with star charts and one tipped-over teacup.
* 3 A On the floor beside the eyepiece platform lies a coat, empty, its sleeves flung wide.
4 A ¶ Five people stand in a loose ring around it, and nobody wants to be the first to look down.
5 A ¶ HENRIETTA "HETTY" BLACKWOOD (60s, observatory director, tweed, a magnifying glass on a chain) stares at the coat.
6 A BASTIAN ODUYA (30s, graduate student, ink on his fingers, a wool hat pulled low).
7 A SOLEDAD "SOLI" VARGAS (40s, night technician, thermos in one hand and the dome keys in the other).
8 A WILFRED PRATT (70s, retired astronomer, a cane, a rumpled evening jacket).
9 A And MEI-LING TAN (20s, journalist, notebook, recorder held out like a candle).
* 10 D HETTY: Who last saw Doctor Marrow?
* 11 D BASTIAN: Soli did. She locked up at nine.
12 D SOLI: I locked the north door. I did not lock the dome.
* 13 D PRATT: Soledad, my dear, a dome has no door. It is a lid.
* 14 D SOLI: Then I locked the lid, Mr. Pratt.
* 15 D MEI-LING: Let's slow down. Soli, you said Doctor Marrow asked you for the keys?
* 16 D SOLI: He asked. I said no.
* 17 D BASTIAN: You told me you gave them to him.
* 18 D SOLI: I told you he asked, Bash. You heard what you wanted.
* 19 D HETTY: Bastian. Where were you at nine?
* 20 D BASTIAN: Plate room. Cataloguing.
* 21 D PRATT: For five hours? That's not cataloguing, it's meditation.
* 22 D BASTIAN: It was the Hartwell plates, Mr. Pratt. You know how many there are.
* 23 D PRATT: I know how many there were. I counted them in 1989.
* 24 D MEI-LING: Mr. Pratt, you told me earlier you hadn't been to the observatory in years.
* 25 D PRATT: Did I?
* 26 D MEI-LING: Your exact words were, "I haven't set foot on this hill since the Marrow appointment."
* 27 D PRATT: Then I was speaking figuratively.
* 28 D HETTY: Wilfred. You have a key.
* 29 D PRATT: Everyone has a key, Hetty. That's the tragedy of the institution.
* 30 D SOLI: I don't think everyone has a key.
* 31 D HETTY: Soli, who does?
* 32 D SOLI: Me. You. Doctor Marrow.
* 33 D BASTIAN: And Pratt, apparently.
* 34 D PRATT: Apparently.
* 35 D MEI-LING: So four keys. And a coat on the floor.
* 36 D HETTY: Don't touch the coat, Miss Tan.
* 37 D MEI-LING: I wasn't going to.
* 38 D SOLI: You were. You've been inching toward it for five minutes.
* 39 D MEI-LING: I'm a reporter. Inching is the job.
* 40 D PRATT: Inching is how the best of us died, my girl.
* 41 D HETTY: Wilfred, enough.
* 42 D PRATT: I'm only saying. The coat is on the floor, the lid is open, and Doctor Marrow is not in either of them. Somebody in this room is going to have to explain that. And I would very much like for it not to be me.
* 43 D BASTIAN: Then explain why your cane is wet.
* 44 A ¶ A silence.
* 45 A The telescope creaks.
* 46 D PRATT: It rained.
* 47 D SOLI: It hasn't rained since Tuesday.
* 48 D HETTY: Wilfred.
* 49 D PRATT: Hetty.
* 50 D HETTY: Where is he?

### SCENE s00016 | EXT. DRY CREEK BED BENEATH A TRESTLE BRIDGE - DAWN
Detected names (may be incomplete or contain aliases): STRANGER, YOUNG WOMAN, JEDEDIAH, ODALYS
* 1 A ¶ A ribbon of cracked clay winds between two banks of sage.
* 2 A Above, the old trestle spans the gap like the ribs of a long-dead animal, and the first light slides along its timbers in gold and rust.
3 A ¶ A STRANGER (40s, long coat the color of dried blood, hat low, a face the weather has been arguing with for years) walks his horse down the bank in no particular hurry.
* 4 A The animal's hooves crunch on the clay.
5 A He halts at the creek's center and swings down, loosens the cinch, and lets the horse stand, ears flicking at the early flies.
6 A ¶ Across the creek, on the opposite bank, sits a YOUNG WOMAN (20s, a man's shirt rolled at the sleeves, hair cut short with a knife, a shotgun resting across her knees) on a stump.
7 A She has been sitting there all night.
* 8 A A cold fire, a tin cup, a bedroll folded precisely, and a boot print the size of a dinner plate in the dirt beside her.
9 A She does not raise the shotgun.
10 A She does not lower her eyes.
* 11 D STRANGER: Morning.
* 12 D YOUNG WOMAN: That's debatable.
* 13 D STRANGER: I'm looking for a man named Cullen Pike.
* 14 D YOUNG WOMAN: Never heard of him.
* 15 D STRANGER: He wears a green scarf. Even in summer. Rides a gray with a split ear.
16 A ¶ The Young Woman shifts the shotgun a little.
17 A A pale hawk circles over the bridge, riding the first warm air, and the Stranger watches it for a moment instead of her.
* 18 D YOUNG WOMAN: What do you want with him?
* 19 D STRANGER: He's got something of mine.
* 20 D YOUNG WOMAN: Everybody's got something of somebody's.
21 A ¶ She stands.
* 22 A The stump creaks.
* 23 A She crosses the clay with the shotgun in the crook of her arm, stopping ten paces from him, and he, in answer, takes his hand away from the horse's flank and lets it hang loose and open beside his coat.
* 24 D YOUNG WOMAN [CONT'D]: What's your name, mister?
25 A ¶ The Stranger's eyes go to the bridge.
26 A To the hawk.
27 A To her.
* 28 D STRANGER: Jedediah.
* 29 D YOUNG WOMAN: That's a church name.
* 30 D JEDEDIAH: My mother had hopes.
31 A ¶ She laughs, one short breath, and it startles her more than it does him.
* 32 A The shotgun dips an inch.
33 A He notices.
34 A He says nothing about it.
* 35 D YOUNG WOMAN: I'm Odalys. Cullen was my father.
* 36 D JEDEDIAH: Was.
* 37 D ODALYS: He's under the second pier. Since Tuesday.
38 A ¶ Jedediah turns his head slowly and looks up the creek bed toward the trestle, its shadow now laid across the clay in long black bars.
* 39 A At the foot of the second pier, a mound of fresh-turned earth, a plank driven in at its head.
40 A ¶ He takes off his hat.
41 A Holds it against his chest.
* 42 A A breeze comes up and the sage whispers and the hawk screams once and swings away.
* 43 D JEDEDIAH: Who put him there?
* 44 D ODALYS: I did.
* 45 D JEDEDIAH: Who killed him?
46 A ¶ Odalys raises the shotgun, finally, and levels it at his belt buckle.
47 A Her hands do not shake.
* 48 D ODALYS: The man who sent you.

### SCENE s00017 | EXT. HOT-AIR BALLOON BASKET - 400 FEET UP - DAY
Detected names (may be incomplete or contain aliases): GLORIA PENDERGAST, WINNIE OKONKWO-HART
* 1 A ¶ A wicker box.
* 2 A A burner.
* 3 A A county fair shrunk to a quilt far below.
4 A ¶ GLORIA PENDERGAST (60s, sun visor, clipboard) stands at one wall.
5 A Beside her, WINNIE OKONKWO-HART (20s, borrowed sweater, white knuckles on the rope).
6 A ¶ Gloria cups her hands and bellows over the side.
* 7 D GLORIA: Welcome, everyone! Enjoy the view!
8 A ¶ Nobody below hears.
* 9 A A cow looks up.
* 10 D WINNIE: Why are we shouting?
* 11 D GLORIA: Tradition.
12 A ¶ Winnie closes her eyes.
* 13 A The basket tilts.
14 A She opens them.
* 15 D WINNIE (to herself): Don't look down. Don't look down.
16 A ¶ Gloria taps her clipboard, squints at a dial, and mutters.
* 17 D GLORIA (to herself): Pilot never said it'd do that.
* 18 D WINNIE: Do what?
* 19 D GLORIA: Nothing. Everybody smile for the camera!
* 20 A ¶ There is no camera.
21 A Winnie slowly forces a smile anyway.
22 A Gloria hands her the clipboard.
* 23 D GLORIA [CONT'D]: Hold this. And whatever you do, don't let go of her.
* 24 D WINNIE: Of who?
25 A ¶ Gloria points at the burner.
* 26 A It hisses.

### SCENE s00018 | INT. FERRYBOAT SNACK BAR - AFTERNOON
Detected names (may be incomplete or contain aliases): GRANDPA EZEKIEL, PIPPA, JUNIOR
* 1 A ¶ Plastic chairs bolted down.
* 2 A Gulls wheel past the window.
3 A GRANDPA EZEKIEL (70s, cardigan, newspaper folded in quarters) stirs his coffee while his granddaughter PIPPA (9, bandaged knee, sticker book) turns pages beside him and her older brother JUNIOR (14, hood up, one earbud in) slouches opposite, ignoring both and sliding his sandwich crust from one side of the plate to the other.
* 4 D PIPPA: Grandpa, did you ever fall off a boat?
* 5 D EZEKIEL: Twice.
* 6 D PIPPA: Did it hurt?
* 7 D EZEKIEL: The second time, no. By then I knew how.
* 8 D JUNIOR: That's not how that works.
* 9 D EZEKIEL: It is if you do it right.
* 10 D PIPPA: Show me.
* 11 D EZEKIEL: Not on this boat.
* 12 D JUNIOR: Can we get off at the next stop?
* 13 D EZEKIEL: There's no next stop. It's a ferry.
14 D PIPPA: Then we're stuck.
* 15 D EZEKIEL: Stuck is a strong word. We're simply committed.

### SCENE s00019 | INT. MUSHROOM FARM - GROWING TUNNEL - NIGHT
Detected names (may be incomplete or contain aliases): MAGNUS LINDGREN, ZUZU, KOWALCZYK, ABIOLA ADEBAYO-CLARK, STRANGER
* 1 A ¶ A mile of dark.
* 2 A Wet concrete.
* 3 A Shelves of pale caps stacked to the ceiling, glowing faintly under purple grow-lights.
* 4 A The air is thick with spores and damp rot.
5 A ¶ Four flashlight beams cut the gloom.
6 A ¶ MAGNUS LINDGREN (50s, farm foreman, a ring of keys, a limp) walks point.
7 A Behind him, ZUZANNA "ZUZU" KOWALCZYK (20s, seasonal picker, hairnet, boots too big) clutches a bucket.
8 A Then ABIOLA ADEBAYO-CLARK (30s, state inspector, clipboard, mask pulled under her chin).
9 A Last of all, a STRANGER (30s, soaked jacket, no ID, a duffel strapped across his back) who joined them at the gate.
* 10 A ¶ Something drips.
* 11 A Something shifts.
* 12 D MAGNUS: Stay close. Don't touch the shelves.
* 13 D ABIOLA: Why not?
* 14 D MAGNUS: Contamination.
15 A ¶ She scribbles on her clipboard.
16 A He doesn't watch her do it.
17 A ¶ Zuzu stops.
18 A Her light has found a shelf where the caps are wrong.
* 19 A Taller.
* 20 A Gray-veined.
* 21 A Their gills pulse, slow, like breathing.
* 22 D ZUZU: Mr. Lindgren.
* 23 D MAGNUS: Keep walking.
* 24 D ZUZU: They're moving.
* 25 D MAGNUS: They're not.
26 A ¶ He walks on.
27 A She doesn't.
28 A The Stranger steps up beside her and lowers his light until it falls on the cap nearest them.
* 29 A It leans toward the beam.
* 30 A Just slightly.
* 31 A Then away.
* 32 D STRANGER: They don't like the light.
* 33 D ZUZU: Who are you?
34 A ¶ He doesn't answer.
35 A Behind them, Abiola's pen scratches, stops, scratches again.
* 36 D ABIOLA: Foreman. Your water logs don't match the humidity readings.
* 37 D MAGNUS: I'll fix it.
* 38 D ABIOLA: Not a fix. A discrepancy.
* 39 D MAGNUS: I said I'll fix it.
40 A ¶ He is walking faster.
41 A Keys jangling.
* 42 A The tunnel bends.
* 43 A The grow-lights dim in the curve and the shelves close in on both sides.
44 A ¶ Zuzu hurries to catch up, nearly stumbling.
* 45 A Her flashlight beam wobbles over a patch of floor.
* 46 A Something lies there, wrapped in a hairnet.
* 47 A A boot.
* 48 A Half a boot.
49 A ¶ She stops.
50 A Her mouth opens, closes.
* 51 D ZUZU (whisper): Abiola.
* 52 D ABIOLA: Hm?
* 53 D ZUZU: Look at the floor.
54 A ¶ Abiola looks.
55 A Her pen stops mid-word.
* 56 D ABIOLA: Mr. Lindgren. What is that.
57 A ¶ Magnus has turned.
58 A He holds his light on the boot, then on Zuzu, and for a moment nobody says anything at all.
* 59 D MAGNUS: Previous picker. Quit last week.
* 60 D ABIOLA: Quit without his boot?
* 61 D MAGNUS: People are strange.
62 A ¶ The Stranger takes one slow step backward.
* 63 A His duffel scrapes a shelf.
* 64 A A cap bends toward him.
* 65 D STRANGER (low): Don't move.
66 A ¶ Everyone freezes.
* 67 A The dripping stops.
* 68 A The glow from the shelves swells, then settles, like a held breath released.
* 69 A ¶ Then: a rustle, far down the tunnel.
* 70 A Many small sounds.
* 71 A Soft as a hand on silk.
* 72 D ZUZU (barely audible): What is that?
73 A ¶ The Stranger looks at Magnus.
74 A Magnus looks at his keys.
75 D STRANGER: He knows.
* 76 D MAGNUS: I don't.
* 77 D STRANGER: Then why did you lock the gate behind us?
78 A ¶ Abiola turns to Magnus slowly.
79 A Her clipboard lowers.
* 80 D ABIOLA: Mr. Lindgren.
* 81 D MAGNUS: It's protocol.
* 82 D ABIOLA: It's a lie.
* 83 A ¶ The rustling is closer.
84 A Zuzu's bucket tips and spills a hundred pale caps onto the concrete.
* 85 A They quiver.
* 86 D ZUZU: Please. Please just open the gate.
87 A ¶ Magnus pulls the ring of keys from his belt, holds them out in his shaking hand.
* 88 D MAGNUS: I can't. They're not for the gate. They're for the door at the other end.
* 89 D STRANGER: What's at the other end?
90 A ¶ Magnus finally lifts his eyes.
* 91 D MAGNUS: The reason it's quiet now.
* 92 A ¶ The rustling stops.
* 93 A The grow-lights flicker.
* 94 A A single cap, dead center on the floor, begins to rise.
95 A ¶ Zuzu exhales.
96 A And the Stranger, slowly, unslings the duffel, unzips it, and takes out a small steel canister with a red valve.
* 97 D STRANGER: Then we go the other way.

### SCENE s01020 | INT. FORMER BOWLING ALLEY - EVIDENCE ANNEX - NIGHT
Detected names (may be incomplete or contain aliases): ADAEZE OKONKWO, HALVARD PEDERSEN, TECH, KOWALCZYK, OFFICER TRAN, LENNOX, BASHIR
* 1 A ¶ Lane 12 is a ghost of itself.
* 2 A Waxed maple, gutters stacked with cardboard banker's boxes.
* 3 A Overhead, a dead scoreboard still reads HOME 114 / GUEST 98.
4 A ¶ DET. ADAEZE OKONKWO, 40s, rain-wet trench coat, reading glasses pushed up into close-cropped hair, walks the lane like she owns the lease.
5 A ¶ At the ball return sits SGT. HALVARD PEDERSEN, 60, heavy, a thermos between his knees, pretending not to be asleep.
* 6 D OKONKWO: Who signed the boxes out?
* 7 D PEDERSEN: Nobody. That's the problem.
8 A ¶ A TECH in a paper suit kneels at the far end, photographing a box lid with a ring light.
9 A Young, narrow shoulders, earbuds in one ear only.
* 10 D OKONKWO: You. What's your name?
* 11 D TECH: Just Tech tonight. Ask the lab.
12 A ¶ She moves on.
13 A Doesn't push.
14 A ¶ By the shoe-rental counter, MRS. KOWALCZYK, 70s, cardigan buttoned wrong, clutches a handbag like a flotation device.
15 A She owned this alley for thirty years.
* 16 D MRS. KOWALCZYK: Strike night was Thursdays. Forty-one lanes of noise. Now listen to it.
* 17 A ¶ Silence.
* 18 A A compressor hums somewhere.
* 19 D OKONKWO: Ma'am, did you give anyone a key?
* 20 D MRS. KOWALCZYK: The city has my keys. The city has everything.
* 21 D PEDERSEN (into thermos): Ain't that the truth.
22 A ¶ OFFICER TRAN, 20s, stiff, enters from the lobby with a clipboard.
23 A He stops at the edge of the lane, unsure if he's allowed to step on it.
* 24 D OFFICER TRAN: Detective. Gate log's clean. Last entry, six forty p.m. Someone named Lennox.
* 25 D OKONKWO: First name?
* 26 D OFFICER TRAN: Just Lennox.
27 A ¶ Behind a stack of boxes, a cough.
28 A Everyone looks.
29 A ¶ LENNOX, 50s, gray ponytail, security lanyard, stands up slowly from where he's been sitting on a crate, hands visible and empty.
* 30 D LENNOX: I'm the night man. I was in the office.
* 31 D OKONKWO: Mr. Lennox. You've been in the building the whole time.
* 32 D LENNOX: It's a warm building.
33 A ¶ The Tech glances up, finally pulls the earbud out.
* 34 D TECH: Bashir. It's Bashir. Since you asked.
* 35 D OKONKWO: Thank you, Bashir.
* 36 D BASHIR: Box nineteen has been opened. Seal's cut clean. Razor, not a knife.
* 37 D OKONKWO: How do you know?
* 38 D BASHIR: Edge doesn't tear. I do this for a living.
39 A ¶ Okonkwo takes off her glasses.
40 A Folds them.
41 A Looks at Lennox for a long, unhurried moment.
* 42 D OKONKWO: Walk me through the office, Mr. Lennox.
* 43 D LENNOX: Sure.
44 A ¶ He doesn't move.
45 A Neither does she.
* 46 D PEDERSEN: I'll get the coffee.
47 A ¶ He doesn't move either.
* 48 D BASHIR: Light's good here, if anyone wants to take their time.
49 A ¶ Okonkwo sits down on the foul line, crosses her legs, and waits.

### SCENE s01021 | INT. LIGHTHOUSE LAMP ROOM - DAWN
Detected names (may be incomplete or contain aliases): IGNACIO, WREN
* 1 A ¶ Salt-streaked glass.
* 2 A A Fresnel lens the size of a bus shelter, still turning.
* 3 A Slow.
* 4 A Heavy.
5 A ¶ IGNACIO, 30s, keeper's wool sweater, kneels at the brass base with an oilcan.
6 A Hands black with grease.
7 A ¶ He hums.
8 A Off-key.
9 A Pleased with himself.
* 10 A ¶ The hatch bangs.
11 A ¶ He freezes.
12 A Listens.
* 13 A ¶ Boots on iron stairs.
* 14 A Coming up.
* 15 D IGNACIO (muttering): Supply boat's not till Friday.
16 A ¶ The hatch lifts.
* 17 A A suitcase thumps onto the floor.
18 A ¶ WREN, 30s, soaked to the bone, red scarf plastered to her neck, hauls herself up.
19 A Breathing hard.
20 A Grinning hard.
21 A ¶ He stands.
22 A Oilcan still in hand.
* 23 D IGNACIO [CONT'D]: No.
* 24 D WREN: Hello to you too.
* 25 D IGNACIO: You can't be here.
* 26 D WREN: I rowed.
* 27 D IGNACIO: You rowed. Eleven miles.
* 28 D WREN: Nine. I cut the corner.
29 A ¶ He sets the can down.
30 A Carefully.
31 A Like it might go off.
32 A ¶ She drops her bag.
33 A Wrings out the scarf.
* 34 A Water pools on the floor.
* 35 D IGNACIO: You wrote that you were done.
* 36 D WREN: I wrote a lot of things.
* 37 D IGNACIO: You wrote one letter. Four lines.
* 38 D WREN: It was a good four lines.
39 A ¶ He turns away.
40 A Faces the lens.
* 41 A It sweeps past, throwing fractured light across his face.
42 A ¶ She watches.
43 A Doesn't close the gap.
* 44 D WREN [CONT'D]: You kept the light on.
* 45 D IGNACIO: It's a lighthouse.
* 46 D WREN: You kept it polished.
* 47 D IGNACIO: It's my job.
* 48 D WREN (softly): Ignacio.
49 A ¶ He doesn't answer.
50 A His shoulders drop an inch.
51 A ¶ She crosses to the rail.
* 52 A Rain ticks against the glass.
* 53 A Far below, the sea is a gray animal, restless.
* 54 D WREN [CONT'D]: I almost didn't make it. The boat took water by the rocks.
* 55 D IGNACIO: You could have drowned.
* 56 D WREN: I know.
* 57 D IGNACIO: You could have drowned, and I'd have been up here. Oiling a gear.
58 A ¶ She turns.
59 A Their eyes meet.
60 A Held.
* 61 D WREN: Say it, then.
* 62 D IGNACIO: Say what?
* 63 D WREN: Whatever you've been rehearsing.
* 64 A ¶ A beat.
65 A He shakes his head.
66 A A small, defeated laugh.
* 67 D IGNACIO: It was better yesterday.
* 68 D WREN: Try me.
* 69 D IGNACIO: I missed you.
* 70 D WREN: I missed you.
71 A ¶ They say it on top of each other.
72 A Neither stops.
* 73 D IGNACIO: I was angry. I'm still angry.
* 74 D WREN: I was scared. I'm still scared.
75 A ¶ They stop.
76 A Both laugh.
77 A Short.
78 A Wet.
* 79 D IGNACIO: You're dripping on my floor.
* 80 D WREN: You're welcome.
81 A ¶ He picks up a towel from a hook.
82 A Tosses it.
83 A She catches it one-handed.
84 A ¶ She dries her face.
85 A Her hands.
86 A She's slowing down.
* 87 D WREN [CONT'D]: Is there tea?
* 88 D IGNACIO: There's a kettle.
* 89 D WREN: That's not what I asked.
* 90 D IGNACIO: There's a kettle and a tin that might be tea.
* 91 D WREN: Might be.
* 92 D IGNACIO: It's been there since March.
* 93 D WREN: Brave.
94 A ¶ He crosses to the hatch.
95 A Stops.
96 A Looks down the shaft.
* 97 D IGNACIO: Stairs are slick. Come on.
* 98 D WREN: Is that an invitation?
* 99 D IGNACIO: It's a warning.
100 A ¶ She smiles.
101 A Picks up her suitcase.
102 A He takes it from her before she can protest.
103 A ¶ They descend.
104 A His head vanishes first.
105 A Then hers.
* 106 A ¶ The lens keeps turning.
* 107 A Light sweeps the empty room.
