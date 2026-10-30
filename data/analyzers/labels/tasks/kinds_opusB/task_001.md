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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusB/group_0001.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s00011 | INT. DECOMMISSIONED GRAIN ELEVATOR - OPEN-PLAN OFFICE - DAY
Detected names (may be incomplete or contain aliases): PRUDENCE OKAFOR, BARNABY QUILL, DELPHINE ROUSSEAU-ADEYEMI
* 1 A ¶ Dust hangs in the shafts of light that fall through the old hopper doors.
* 2 A Forty desks have been dropped onto the concrete in neat rows, and every one of them faces a wall of corrugated steel painted the cheerful green of a hospital.
3 A ¶ PRUDENCE OKAFOR (50s, cardigan buttoned to the throat, lanyard heavy with laminated cards) stands before a whiteboard and caps and uncaps a marker, caps and uncaps it, as if the sound were a metronome for the room.
4 A ¶ At the front desk sit BARNABY QUILL (30s, a tie knotted tight enough to be a verdict) and DELPHINE ROUSSEAU-ADEYEMI (late 20s, headphones around her neck, one earbud in, a half-eaten yogurt sweating at her elbow).
5 D PRUDENCE: The Synergy Taskforce has decided, after consultation, that the synergy is insufficient.
6 A ¶ Barnaby nods before she finishes.
7 A Delphine peels the yogurt lid back, licks it, folds it into a perfect small square.
8 D BARNABY: Insufficient in which direction?
9 D PRUDENCE: Directionally.
10 A ¶ She writes the word DIRECTIONALLY on the whiteboard.
11 A Underlines it twice.
* 12 A The marker squeaks and dies mid-line.
13 A She looks at it with great tenderness, then sets it in the tray as if laying down a child.
14 D DELPHINE: Is this the meeting about the meeting?
15 D PRUDENCE: This is the meeting about the meeting about the meeting.
16 A ¶ Barnaby and Delphine both reach for the same pen at the same instant.
17 A Their fingers touch.
18 A They both withdraw, Barnaby smoothing his tie, Delphine tucking a strand of hair behind her ear, each looking determinedly at a different corner of the ceiling.
* 19 A ¶ Somewhere above them, a pigeon walks across a rafter and drops something.
* 20 A It lands on the carpet tile beside Prudence's shoe.
21 A All three look down at it.
22 A All three look up again.
23 D PRUDENCE [CONT'D]: We'll take that offline.
24 D BARNABY: I'll circulate a note.
25 D DELPHINE: I'll bring a mop.
26 D PRUDENCE: Please do not bring a mop. Mops are a Facilities line item.
27 A ¶ Delphine slowly pulls the earbud out and lays it on the desk beside the yogurt lid.
28 A She straightens it.
29 A Squares it to the edge.
30 A ¶ Prudence picks up a fresh marker.
31 A Holds it.
32 A Does not uncap it.
33 D PRUDENCE [CONT'D]: Barnaby. Your quarterly deck. Is it ready?
34 D BARNABY: It is in a state of readiness.
35 A ¶ He opens his laptop.
* 36 A The screen glows.
* 37 A On it, a single slide: a pie chart, entirely one colour.
* 38 A He angles the lid down a few degrees, and the three of them stand there in the green light of the hopper doors, pretending not to see it.
39 D PRUDENCE: Excellent.
40 A ¶ She writes ACTION ITEMS on the whiteboard.
* 41 A Under it, nothing.
42 A She stands back and admires the nothing.
43 D DELPHINE: Do I get a lanyard?
44 D PRUDENCE: After the review.
45 D DELPHINE: Which review?
46 D PRUDENCE: The one we are about to schedule.
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
7 D TOBIAS: Mom, why is it taking so long?
8 D BIRGITTA: Because it's wet, bud.
9 D TOBIAS: Everything's wet. It's raining.
10 A ¶ Birgitta laughs, a short breath of a laugh.
11 A She shuts the dryer door and presses the button.
* 12 A The drum begins to turn.
13 A Tobias hops down, wanders to the vending machine, and presses his nose to the glass while Birgitta checks her phone, frowns at it, and turns the screen face-down on the table, and the Girl, without lifting her eyes from the page, turns one page over.
14 D TOBIAS [CONT'D]: Can I get the gummy ones?
15 D BIRGITTA: It's ten at night.
16 D TOBIAS: It's eleven. The clock says.
17 A ¶ Birgitta looks at the clock.
* 18 A He's right.
19 A She sighs and digs in her pocket for coins.
20 A ¶ Tobias carries his dinosaur over to the Girl and holds it out, nose-first, a ceremonial offering.
21 D TOBIAS [CONT'D]: This is Gary. He's a stegosaurus.
22 A ¶ The Girl looks up.
23 A A long, measuring look.
24 A Then she takes Gary and studies his plates.
25 D GIRL: Stegosaurs had tiny brains.
26 D TOBIAS: Gary's smart.
27 D GIRL: Then he's not a stegosaurus.
28 A ¶ Tobias considers this, deeply wounded, and turns to his mother for ruling.
29 A Birgitta crosses over, dropping her coins into the machine on the way, the machine clunking out a bag of gummies, and kneels between the two children.
30 D BIRGITTA: Hey. Where are your parents?
31 A ¶ The Girl closes her book on her finger.
32 D GIRL: My dad's coming. He's parking.
33 D BIRGITTA: It's been an hour.
34 D GIRL: It's a hard lot to park in.
35 A ¶ Birgitta looks toward the glass.
* 36 A The lot outside is empty except for her own car, rain bouncing off the hood.
37 D BIRGITTA: What's your name, sweetheart?
38 D GIRL: Noor.
39 D BIRGITTA: Noor, I'm going to call someone to help us find your dad. Okay?
40 A ¶ Noor's face changes.
41 A Her shoulders come up.
42 A She grabs her backpack straps in both fists.
43 D NOOR: Don't. He'll be mad. I'm not supposed to tell people where we live.
44 D BIRGITTA: I don't need to know where you live.
45 D NOOR: Then who are you calling?
* 46 A ¶ The front door BANGS open.
47 A A MAN (40s, wet work jacket, breathing hard) stands in the doorway scanning the room.
48 A He sees Noor.
49 A Everything in his posture collapses at once.
50 A Tobias, startled, drops the gummies.
51 A Birgitta rises in front of both children.
52 D MAN: Noor.
53 D NOOR: Dad.
54 A ¶ She runs to him.
55 A He drops to his knees and wraps both arms around her.
56 A Birgitta watches the two of them, her hand on Tobias's head.
57 D BIRGITTA: She's been here an hour.
58 D MAN: The truck wouldn't start. I ran all the way from the bridge. Thank you. Thank you for --
59 D BIRGITTA: Her name is Noor?
60 D MAN: Noor. Yes.
61 A ¶ He kisses the top of her head.
62 A Lifts her.
63 A She buries her face in his collar.
64 A Tobias picks up his gummies and Gary and trots back to his mother.
65 D TOBIAS: Mom? Gary says goodbye.
66 A ¶ Noor lifts her head from her father's shoulder and, very seriously, waves.

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
10 D CONNIE: That your horse?
11 D SILAS: Was.
12 D CONNIE: Looks like the salt got her.
13 D SILAS: Looks like a bullet got her.
14 A ¶ She walks closer.
15 A Stops short of arm's reach.
16 A He rises, brushing his knees, and finally turns.
17 A His eyes go to the canteen.
18 A Hers go to his holster.
19 D CONNIE: I'll trade you water for a name.
20 D SILAS: I'd trade you a name for a mule.
21 D CONNIE: I don't have a mule.
22 D SILAS: Then you don't have a name worth the water.
23 A ¶ She almost smiles.
24 A He almost doesn't.
* 25 A The wind pulls at her hat brim.
26 A She tilts the canteen.
* 27 A Water slaps against the metal, loud in the silence.
28 D SILAS [CONT'D]: Don't wave that around.
29 D CONNIE: It's mine to wave.
30 A ¶ He takes a step.
31 A She does not move.
32 A He takes another.
33 A Her hand drifts back to the rifle sling.
34 D SILAS: Easy.
35 D CONNIE: You first.
36 A ¶ They stand with the dead horse between them and the white sky above.
37 A Neither one blinks.
38 D SILAS: You work for Dutch Halloran?
39 D CONNIE: Never heard of him.
40 D SILAS: That's a lie, and you tell it badly.
41 D CONNIE: Then I'm in good company.
42 A ¶ He nods slowly.
43 A Looks off toward a ridge on the horizon, a thin dark line.
44 D SILAS: He's coming, you know. He's got six men and a Gatling gun on a wagon.
45 D CONNIE: I know.
46 D SILAS: Then why are you standing here?
47 A ¶ She uncaps the canteen.
48 A Drinks.
49 A Wipes her mouth with the back of her wrist.
50 A Holds it out to him at arm's length, the way one offers food to a dog.
51 D CONNIE: Same reason as you.
52 A ¶ He takes it.
53 A Drinks long.
54 A The water runs down his beard.
55 A He hands it back.
56 D SILAS: He killed my brother.
57 D CONNIE: He killed my husband.
58 D SILAS: He burned my ranch.
59 D CONNIE: He took my land.
60 A ¶ They speak at once, the words overlapping, neither stopping for the other.
61 D SILAS: I came out here to die. ^ CONNIE I came out here to finish it.
* 62 A ¶ A beat.
63 A They look at each other, really look, for the first time.
64 D SILAS: Can you shoot that thing?
65 D CONNIE: Better than you can shoot that.
66 A ¶ He glances at his holster.
67 A Almost laughs.
68 D SILAS: What's your plan?
69 A ¶ She points past him at the nearest vat, a long wooden trough sunk in the crust.
70 D CONNIE: Wagon comes down the old cart road. Wheels sink in the brine. Horses panic.
71 D SILAS: And the Gatling?
72 D CONNIE: Pointed at the sky, if the wagon tips.
73 A ¶ He studies the vats.
* 74 A The road.
* 75 A The ridge.
* 76 A The long, long distance.
77 D SILAS: That's a lot of ifs.
78 D CONNIE: You got a better one?
79 A ¶ He doesn't.
80 A He pulls the revolver from his holster and checks the cylinder.
* 81 A Three rounds.
82 A He sighs.
83 D SILAS: Hand me a few.
84 A ¶ She digs in her coat.
85 A Pours a small handful of cartridges into his palm.
86 A He loads them one by one.
* 87 A ¶ On the ridge, a plume of dust rises.
* 88 A A glint of brass.
* 89 A The faint creak of wheels.
90 D CONNIE: Time to pick a vat.
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
7 D JUDGE FAIRWEATHER: Counsel, we've been over the manifest three times. Is there any objection to its admission?
8 D DE LUCA: None, Your Honor.
9 D OSEI: None, Your Honor.
10 A ¶ They answer at the same time.
11 A Percy glances between them with polite interest.
12 D JUDGE FAIRWEATHER: Then the manifest is admitted, and I would like to thank both counsel for a refreshingly uneventful morning.
13 D OSEI: The People have nothing further.
14 D DE LUCA: Nor does the defense.
15 A ¶ The Judge removes his glasses and pinches the bridge of his nose.
* 16 A A gull cries outside a porthole.
* 17 A The ferry creaks.
18 D JUDGE FAIRWEATHER: Let the record reflect we'll adjourn for lunch.
19 A ¶ He reaches for his gavel.
* 20 A The courtroom door swings open.
21 A ¶ A WOMAN (30s, cargo pants, hair in a braid, a ring of keys at her belt) steps in.
22 A LIEUTENANT SABINE ARROYO, according to the badge on her chest.
23 A She carries a sealed evidence bag in both hands, and she walks the aisle with the careful posture of someone carrying something that might go off.
24 D ARROYO: Your Honor, forgive the interruption. I have a log from the engine room.
25 D OSEI: Lieutenant, I wasn't informed --
26 D ARROYO: Neither was I. I found it ten minutes ago.
27 A ¶ She sets the bag on the bench.
28 A The Judge opens it, slides out a bound ledger, and flips to a page tabbed in red.
29 A His face does not move, but his eyes do.
30 D JUDGE FAIRWEATHER: Mr. Nakamura. Were you aboard the Annabelle on the night of March ninth?
31 D PERCY: I was not.
32 D JUDGE FAIRWEATHER: Then whose signature is this at the foot of the engineer's log?
33 A ¶ He turns the ledger around.
34 A Percy leans over.
35 A Looks.
36 A Sits back with the same serene smile, though his hand has found De Luca's sleeve.
37 D DE LUCA: Your Honor, I'd like a moment with my client.
38 D OSEI: Your Honor, the People move to continue.
39 A ¶ They speak together again, but this time with an edge, neither yielding.
40 D DE LUCA: This is an ambush. ^ OSEI This is evidence.
41 A ¶ The Judge raises his gavel and brings it down once.
* 42 A The ferry rocks beneath it.
43 D JUDGE FAIRWEATHER: Mr. Osei, sit down. Ms. De Luca, you may confer. Lieutenant Arroyo, you will remain exactly where you are.
44 A ¶ Arroyo nods, steps back, and folds her hands.
45 A Percy whispers something to De Luca.
46 A She goes pale.
47 A She looks at the Judge, then at the porthole, then at the river beyond.
48 D DE LUCA (quietly): Percy. Who is Annabelle?
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
10 D HETTY: Who last saw Doctor Marrow?
11 D BASTIAN: Soli did. She locked up at nine.
12 D SOLI: I locked the north door. I did not lock the dome.
13 D PRATT: Soledad, my dear, a dome has no door. It is a lid.
14 D SOLI: Then I locked the lid, Mr. Pratt.
15 D MEI-LING: Let's slow down. Soli, you said Doctor Marrow asked you for the keys?
16 D SOLI: He asked. I said no.
17 D BASTIAN: You told me you gave them to him.
18 D SOLI: I told you he asked, Bash. You heard what you wanted.
19 D HETTY: Bastian. Where were you at nine?
20 D BASTIAN: Plate room. Cataloguing.
21 D PRATT: For five hours? That's not cataloguing, it's meditation.
22 D BASTIAN: It was the Hartwell plates, Mr. Pratt. You know how many there are.
23 D PRATT: I know how many there were. I counted them in 1989.
24 D MEI-LING: Mr. Pratt, you told me earlier you hadn't been to the observatory in years.
25 D PRATT: Did I?
26 D MEI-LING: Your exact words were, "I haven't set foot on this hill since the Marrow appointment."
27 D PRATT: Then I was speaking figuratively.
28 D HETTY: Wilfred. You have a key.
29 D PRATT: Everyone has a key, Hetty. That's the tragedy of the institution.
30 D SOLI: I don't think everyone has a key.
31 D HETTY: Soli, who does?
32 D SOLI: Me. You. Doctor Marrow.
33 D BASTIAN: And Pratt, apparently.
34 D PRATT: Apparently.
35 D MEI-LING: So four keys. And a coat on the floor.
36 D HETTY: Don't touch the coat, Miss Tan.
37 D MEI-LING: I wasn't going to.
38 D SOLI: You were. You've been inching toward it for five minutes.
39 D MEI-LING: I'm a reporter. Inching is the job.
40 D PRATT: Inching is how the best of us died, my girl.
41 D HETTY: Wilfred, enough.
42 D PRATT: I'm only saying. The coat is on the floor, the lid is open, and Doctor Marrow is not in either of them. Somebody in this room is going to have to explain that. And I would very much like for it not to be me.
43 D BASTIAN: Then explain why your cane is wet.
* 44 A ¶ A silence.
* 45 A The telescope creaks.
46 D PRATT: It rained.
47 D SOLI: It hasn't rained since Tuesday.
48 D HETTY: Wilfred.
49 D PRATT: Hetty.
50 D HETTY: Where is he?

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
11 D STRANGER: Morning.
12 D YOUNG WOMAN: That's debatable.
13 D STRANGER: I'm looking for a man named Cullen Pike.
14 D YOUNG WOMAN: Never heard of him.
15 D STRANGER: He wears a green scarf. Even in summer. Rides a gray with a split ear.
16 A ¶ The Young Woman shifts the shotgun a little.
17 A A pale hawk circles over the bridge, riding the first warm air, and the Stranger watches it for a moment instead of her.
18 D YOUNG WOMAN: What do you want with him?
19 D STRANGER: He's got something of mine.
20 D YOUNG WOMAN: Everybody's got something of somebody's.
21 A ¶ She stands.
* 22 A The stump creaks.
* 23 A She crosses the clay with the shotgun in the crook of her arm, stopping ten paces from him, and he, in answer, takes his hand away from the horse's flank and lets it hang loose and open beside his coat.
24 D YOUNG WOMAN [CONT'D]: What's your name, mister?
25 A ¶ The Stranger's eyes go to the bridge.
26 A To the hawk.
27 A To her.
28 D STRANGER: Jedediah.
29 D YOUNG WOMAN: That's a church name.
30 D JEDEDIAH: My mother had hopes.
31 A ¶ She laughs, one short breath, and it startles her more than it does him.
* 32 A The shotgun dips an inch.
33 A He notices.
34 A He says nothing about it.
35 D YOUNG WOMAN: I'm Odalys. Cullen was my father.
36 D JEDEDIAH: Was.
37 D ODALYS: He's under the second pier. Since Tuesday.
38 A ¶ Jedediah turns his head slowly and looks up the creek bed toward the trestle, its shadow now laid across the clay in long black bars.
* 39 A At the foot of the second pier, a mound of fresh-turned earth, a plank driven in at its head.
40 A ¶ He takes off his hat.
41 A Holds it against his chest.
* 42 A A breeze comes up and the sage whispers and the hawk screams once and swings away.
43 D JEDEDIAH: Who put him there?
44 D ODALYS: I did.
45 D JEDEDIAH: Who killed him?
46 A ¶ Odalys raises the shotgun, finally, and levels it at his belt buckle.
47 A Her hands do not shake.
48 D ODALYS: The man who sent you.

### SCENE s00017 | EXT. HOT-AIR BALLOON BASKET - 400 FEET UP - DAY
Detected names (may be incomplete or contain aliases): GLORIA PENDERGAST, WINNIE OKONKWO-HART
* 1 A ¶ A wicker box.
* 2 A A burner.
* 3 A A county fair shrunk to a quilt far below.
4 A ¶ GLORIA PENDERGAST (60s, sun visor, clipboard) stands at one wall.
5 A Beside her, WINNIE OKONKWO-HART (20s, borrowed sweater, white knuckles on the rope).
6 A ¶ Gloria cups her hands and bellows over the side.
7 D GLORIA: Welcome, everyone! Enjoy the view!
8 A ¶ Nobody below hears.
* 9 A A cow looks up.
10 D WINNIE: Why are we shouting?
11 D GLORIA: Tradition.
12 A ¶ Winnie closes her eyes.
* 13 A The basket tilts.
14 A She opens them.
15 D WINNIE (to herself): Don't look down. Don't look down.
16 A ¶ Gloria taps her clipboard, squints at a dial, and mutters.
17 D GLORIA (to herself): Pilot never said it'd do that.
18 D WINNIE: Do what?
19 D GLORIA: Nothing. Everybody smile for the camera!
* 20 A ¶ There is no camera.
21 A Winnie slowly forces a smile anyway.
22 A Gloria hands her the clipboard.
23 D GLORIA [CONT'D]: Hold this. And whatever you do, don't let go of her.
24 D WINNIE: Of who?
25 A ¶ Gloria points at the burner.
* 26 A It hisses.

### SCENE s00018 | INT. FERRYBOAT SNACK BAR - AFTERNOON
Detected names (may be incomplete or contain aliases): GRANDPA EZEKIEL, PIPPA, JUNIOR
* 1 A ¶ Plastic chairs bolted down.
* 2 A Gulls wheel past the window.
3 A GRANDPA EZEKIEL (70s, cardigan, newspaper folded in quarters) stirs his coffee while his granddaughter PIPPA (9, bandaged knee, sticker book) turns pages beside him and her older brother JUNIOR (14, hood up, one earbud in) slouches opposite, ignoring both and sliding his sandwich crust from one side of the plate to the other.
4 D PIPPA: Grandpa, did you ever fall off a boat?
5 D EZEKIEL: Twice.
6 D PIPPA: Did it hurt?
7 D EZEKIEL: The second time, no. By then I knew how.
8 D JUNIOR: That's not how that works.
9 D EZEKIEL: It is if you do it right.
10 D PIPPA: Show me.
11 D EZEKIEL: Not on this boat.
12 D JUNIOR: Can we get off at the next stop?
13 D EZEKIEL: There's no next stop. It's a ferry.
14 D PIPPA: Then we're stuck.
15 D EZEKIEL: Stuck is a strong word. We're simply committed.

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
12 D MAGNUS: Stay close. Don't touch the shelves.
13 D ABIOLA: Why not?
14 D MAGNUS: Contamination.
15 A ¶ She scribbles on her clipboard.
16 A He doesn't watch her do it.
17 A ¶ Zuzu stops.
18 A Her light has found a shelf where the caps are wrong.
* 19 A Taller.
* 20 A Gray-veined.
* 21 A Their gills pulse, slow, like breathing.
22 D ZUZU: Mr. Lindgren.
23 D MAGNUS: Keep walking.
24 D ZUZU: They're moving.
25 D MAGNUS: They're not.
26 A ¶ He walks on.
27 A She doesn't.
28 A The Stranger steps up beside her and lowers his light until it falls on the cap nearest them.
* 29 A It leans toward the beam.
* 30 A Just slightly.
* 31 A Then away.
32 D STRANGER: They don't like the light.
33 D ZUZU: Who are you?
34 A ¶ He doesn't answer.
35 A Behind them, Abiola's pen scratches, stops, scratches again.
36 D ABIOLA: Foreman. Your water logs don't match the humidity readings.
37 D MAGNUS: I'll fix it.
38 D ABIOLA: Not a fix. A discrepancy.
39 D MAGNUS: I said I'll fix it.
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
51 D ZUZU (whisper): Abiola.
52 D ABIOLA: Hm?
53 D ZUZU: Look at the floor.
54 A ¶ Abiola looks.
55 A Her pen stops mid-word.
56 D ABIOLA: Mr. Lindgren. What is that.
57 A ¶ Magnus has turned.
58 A He holds his light on the boot, then on Zuzu, and for a moment nobody says anything at all.
59 D MAGNUS: Previous picker. Quit last week.
60 D ABIOLA: Quit without his boot?
61 D MAGNUS: People are strange.
62 A ¶ The Stranger takes one slow step backward.
* 63 A His duffel scrapes a shelf.
* 64 A A cap bends toward him.
65 D STRANGER (low): Don't move.
66 A ¶ Everyone freezes.
* 67 A The dripping stops.
* 68 A The glow from the shelves swells, then settles, like a held breath released.
* 69 A ¶ Then: a rustle, far down the tunnel.
* 70 A Many small sounds.
* 71 A Soft as a hand on silk.
72 D ZUZU (barely audible): What is that?
73 A ¶ The Stranger looks at Magnus.
74 A Magnus looks at his keys.
75 D STRANGER: He knows.
76 D MAGNUS: I don't.
77 D STRANGER: Then why did you lock the gate behind us?
78 A ¶ Abiola turns to Magnus slowly.
79 A Her clipboard lowers.
80 D ABIOLA: Mr. Lindgren.
81 D MAGNUS: It's protocol.
82 D ABIOLA: It's a lie.
* 83 A ¶ The rustling is closer.
84 A Zuzu's bucket tips and spills a hundred pale caps onto the concrete.
* 85 A They quiver.
86 D ZUZU: Please. Please just open the gate.
87 A ¶ Magnus pulls the ring of keys from his belt, holds them out in his shaking hand.
88 D MAGNUS: I can't. They're not for the gate. They're for the door at the other end.
89 D STRANGER: What's at the other end?
90 A ¶ Magnus finally lifts his eyes.
91 D MAGNUS: The reason it's quiet now.
* 92 A ¶ The rustling stops.
* 93 A The grow-lights flicker.
* 94 A A single cap, dead center on the floor, begins to rise.
95 A ¶ Zuzu exhales.
96 A And the Stranger, slowly, unslings the duffel, unzips it, and takes out a small steel canister with a red valve.
97 D STRANGER: Then we go the other way.

### SCENE s01020 | INT. FORMER BOWLING ALLEY - EVIDENCE ANNEX - NIGHT
Detected names (may be incomplete or contain aliases): ADAEZE OKONKWO, HALVARD PEDERSEN, TECH, KOWALCZYK, OFFICER TRAN, LENNOX, BASHIR
* 1 A ¶ Lane 12 is a ghost of itself.
* 2 A Waxed maple, gutters stacked with cardboard banker's boxes.
* 3 A Overhead, a dead scoreboard still reads HOME 114 / GUEST 98.
4 A ¶ DET. ADAEZE OKONKWO, 40s, rain-wet trench coat, reading glasses pushed up into close-cropped hair, walks the lane like she owns the lease.
5 A ¶ At the ball return sits SGT. HALVARD PEDERSEN, 60, heavy, a thermos between his knees, pretending not to be asleep.
6 D OKONKWO: Who signed the boxes out?
7 D PEDERSEN: Nobody. That's the problem.
8 A ¶ A TECH in a paper suit kneels at the far end, photographing a box lid with a ring light.
9 A Young, narrow shoulders, earbuds in one ear only.
10 D OKONKWO: You. What's your name?
11 D TECH: Just Tech tonight. Ask the lab.
12 A ¶ She moves on.
13 A Doesn't push.
14 A ¶ By the shoe-rental counter, MRS. KOWALCZYK, 70s, cardigan buttoned wrong, clutches a handbag like a flotation device.
15 A She owned this alley for thirty years.
16 D MRS. KOWALCZYK: Strike night was Thursdays. Forty-one lanes of noise. Now listen to it.
* 17 A ¶ Silence.
* 18 A A compressor hums somewhere.
19 D OKONKWO: Ma'am, did you give anyone a key?
20 D MRS. KOWALCZYK: The city has my keys. The city has everything.
21 D PEDERSEN (into thermos): Ain't that the truth.
22 A ¶ OFFICER TRAN, 20s, stiff, enters from the lobby with a clipboard.
23 A He stops at the edge of the lane, unsure if he's allowed to step on it.
24 D OFFICER TRAN: Detective. Gate log's clean. Last entry, six forty p.m. Someone named Lennox.
25 D OKONKWO: First name?
26 D OFFICER TRAN: Just Lennox.
27 A ¶ Behind a stack of boxes, a cough.
28 A Everyone looks.
29 A ¶ LENNOX, 50s, gray ponytail, security lanyard, stands up slowly from where he's been sitting on a crate, hands visible and empty.
30 D LENNOX: I'm the night man. I was in the office.
31 D OKONKWO: Mr. Lennox. You've been in the building the whole time.
32 D LENNOX: It's a warm building.
33 A ¶ The Tech glances up, finally pulls the earbud out.
34 D TECH: Bashir. It's Bashir. Since you asked.
35 D OKONKWO: Thank you, Bashir.
36 D BASHIR: Box nineteen has been opened. Seal's cut clean. Razor, not a knife.
37 D OKONKWO: How do you know?
38 D BASHIR: Edge doesn't tear. I do this for a living.
39 A ¶ Okonkwo takes off her glasses.
40 A Folds them.
41 A Looks at Lennox for a long, unhurried moment.
42 D OKONKWO: Walk me through the office, Mr. Lennox.
43 D LENNOX: Sure.
44 A ¶ He doesn't move.
45 A Neither does she.
46 D PEDERSEN: I'll get the coffee.
47 A ¶ He doesn't move either.
48 D BASHIR: Light's good here, if anyone wants to take their time.
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
15 D IGNACIO (muttering): Supply boat's not till Friday.
16 A ¶ The hatch lifts.
* 17 A A suitcase thumps onto the floor.
18 A ¶ WREN, 30s, soaked to the bone, red scarf plastered to her neck, hauls herself up.
19 A Breathing hard.
20 A Grinning hard.
21 A ¶ He stands.
22 A Oilcan still in hand.
23 D IGNACIO [CONT'D]: No.
24 D WREN: Hello to you too.
25 D IGNACIO: You can't be here.
26 D WREN: I rowed.
27 D IGNACIO: You rowed. Eleven miles.
28 D WREN: Nine. I cut the corner.
29 A ¶ He sets the can down.
30 A Carefully.
31 A Like it might go off.
32 A ¶ She drops her bag.
33 A Wrings out the scarf.
* 34 A Water pools on the floor.
35 D IGNACIO: You wrote that you were done.
36 D WREN: I wrote a lot of things.
37 D IGNACIO: You wrote one letter. Four lines.
38 D WREN: It was a good four lines.
39 A ¶ He turns away.
40 A Faces the lens.
* 41 A It sweeps past, throwing fractured light across his face.
42 A ¶ She watches.
43 A Doesn't close the gap.
44 D WREN [CONT'D]: You kept the light on.
45 D IGNACIO: It's a lighthouse.
46 D WREN: You kept it polished.
47 D IGNACIO: It's my job.
48 D WREN (softly): Ignacio.
49 A ¶ He doesn't answer.
50 A His shoulders drop an inch.
51 A ¶ She crosses to the rail.
* 52 A Rain ticks against the glass.
* 53 A Far below, the sea is a gray animal, restless.
54 D WREN [CONT'D]: I almost didn't make it. The boat took water by the rocks.
55 D IGNACIO: You could have drowned.
56 D WREN: I know.
57 D IGNACIO: You could have drowned, and I'd have been up here. Oiling a gear.
58 A ¶ She turns.
59 A Their eyes meet.
60 A Held.
61 D WREN: Say it, then.
62 D IGNACIO: Say what?
63 D WREN: Whatever you've been rehearsing.
* 64 A ¶ A beat.
65 A He shakes his head.
66 A A small, defeated laugh.
67 D IGNACIO: It was better yesterday.
68 D WREN: Try me.
69 D IGNACIO: I missed you.
70 D WREN: I missed you.
71 A ¶ They say it on top of each other.
72 A Neither stops.
73 D IGNACIO: I was angry. I'm still angry.
74 D WREN: I was scared. I'm still scared.
75 A ¶ They stop.
76 A Both laugh.
77 A Short.
78 A Wet.
79 D IGNACIO: You're dripping on my floor.
80 D WREN: You're welcome.
81 A ¶ He picks up a towel from a hook.
82 A Tosses it.
83 A She catches it one-handed.
84 A ¶ She dries her face.
85 A Her hands.
86 A She's slowing down.
87 D WREN [CONT'D]: Is there tea?
88 D IGNACIO: There's a kettle.
89 D WREN: That's not what I asked.
90 D IGNACIO: There's a kettle and a tin that might be tea.
91 D WREN: Might be.
92 D IGNACIO: It's been there since March.
93 D WREN: Brave.
94 A ¶ He crosses to the hatch.
95 A Stops.
96 A Looks down the shaft.
97 D IGNACIO: Stairs are slick. Come on.
98 D WREN: Is that an invitation?
99 D IGNACIO: It's a warning.
100 A ¶ She smiles.
101 A Picks up her suitcase.
102 A He takes it from her before she can protest.
103 A ¶ They descend.
104 A His head vanishes first.
105 A Then hers.
* 106 A ¶ The lens keeps turning.
* 107 A Light sweeps the empty room.

### SCENE s01022 | INT. MILLBROOK TELEPHONE EXCHANGE - NIGHT (1924)
Detected names (may be incomplete or contain aliases): MABEL PRZYBYLSKI, STRANGER, CROWE, ABERNATHY, TOBY, SHERIFF DUNMORE
* 1 A ¶ A small room above the feed store.
* 2 A A cord switchboard with a hundred brass jacks.
* 3 A A kerosene lamp backs up a weak electric bulb.
4 A ¶ MABEL PRZYBYLSKI, 20s, headset over pinned-up hair, plugs and unplugs cords with practiced speed.
5 A She is alone and likes it that way.
* 6 A ¶ A buzz.
* 7 A A light on the board.
8 A She plugs in.
9 D MABEL: Number, please.
10 A ¶ She listens.
11 A Pulls the cord.
12 A Connects another.
* 13 A The room breathes.
14 A ¶ Boots on the stairs.
15 A The door opens without a knock.
16 A ¶ A STRANGER in a long coat, hat low, rain on his shoulders.
17 A He carries a leather satchel.
18 D MABEL [CONT'D]: We're closed to the public, sir.
19 D STRANGER: I need the line to Harrisburg.
20 D MABEL: That's the long-distance trunk. Company use only.
21 D STRANGER: It's urgent.
22 D MABEL: Everything is, at this hour.
* 23 A ¶ A new buzz.
* 24 A Another light.
25 A She ignores it.
26 D STRANGER: My name is Elias Crowe. I'm with the state railway board.
27 D MABEL: You have a paper that says so?
28 A ¶ He opens the satchel.
29 A Pulls out an envelope.
30 A She takes it, reads it by the lamp.
31 A Her face tightens.
32 D CROWE: It is in order.
33 D MABEL: It's a telegram form. Anyone can fill one out.
34 D CROWE: Then call the manager.
35 A ¶ She hesitates.
36 A Pulls a cord.
37 A Cranks a handle.
38 D MABEL (into headset): Mr. Abernathy? Sorry to wake you. There's a gentleman here.
* 39 A ¶ The earpiece crackles.
40 A A thin, irritable voice leaks into the room.
41 D ABERNATHY [V.O.]: At this hour? Is the building on fire?
42 D MABEL: No, sir. A man from the railway board.
43 D ABERNATHY [V.O.]: Tell him to come in the morning.
44 D CROWE (leaning toward her): Tell him it concerns the six-ten freight.
45 A ¶ Mabel's eyes flick up.
46 A She repeats it.
* 47 A ¶ A long silence on the line.
48 A Then Abernathy, quieter.
49 D ABERNATHY [V.O.]: Put him through. And Mabel. Plug in the sheriff's line too.
50 D MABEL: Sir?
51 D ABERNATHY [V.O.]: Do it.
52 A ¶ She obeys.
53 A Her hands are not quite steady now.
* 54 A ¶ The door opens again.
55 A TOBY, 12, the messenger boy, cap too big, bursts in dripping and out of breath.
56 D TOBY: Miss Mabel! Somebody cut the wire at the Calder bridge. Pa says the whole east line's dead.
57 A ¶ Crowe straightens.
58 A Mabel looks from the boy to the stranger.
59 D MABEL: Mr. Crowe. How did you know about the freight?
60 D CROWE: I don't know anything about wires.
61 D TOBY: Then why's your satchel got a coil of copper in it?
* 62 A ¶ Everyone looks.
* 63 A A bright loop of wire pokes out of the satchel.
* 64 A ¶ The board buzzes.
* 65 A Light after light.
* 66 A The sheriff's line clicks live.
67 D SHERIFF DUNMORE [V.O.]: Millbrook exchange. Dunmore. Who's there with you, Miss Przybylski?
68 A ¶ Mabel's hand rests on the key.
69 A She looks at Crowe.
70 A Crowe looks at the door.
71 D MABEL: Stay where you are, Mr. Crowe. Toby, lock that door.
72 D TOBY: Yes, ma'am.
* 73 A ¶ The bolt slides home.
* 74 A The lamp flickers.
* 75 A The board keeps buzzing.

### SCENE s01023 | INT. CRAB CANNERY - NIGHT SHIFT - NIGHT
Detected names (may be incomplete or contain aliases): PAULINA RUSSO, DESMOND WALCOTT, GUS, HAND
* 1 A ¶ Steel tables.
* 2 A Hoses.
* 3 A Steam rising from vats.
* 4 A Fluorescents buzz.
* 5 A Everything smells of brine and bleach.
6 A ¶ PAULINA RUSSO, 40s, shift lead, hairnet, white rubber boots, sprays down a conveyor belt.
7 A DESMOND WALCOTT, 20s, headphones around his neck, stacks crates.
8 A GUS, 60s, Paulina's oldest hand, wheels a pallet jack.
* 9 A ¶ The line is stopped.
* 10 A A quiet kind of peace.
11 D PAULINA (to all): Ten minutes, everybody. Breaker's being cranky.
12 D DESMOND: It's always cranky.
13 D PAULINA: Then it's consistent.
14 A ¶ Gus parks the jack.
15 A Eases onto an upturned bucket.
16 A Pulls a sandwich from his apron.
17 D GUS (to himself): Thirty-one years. Never once got used to the cold.
18 A ¶ Desmond laughs.
19 A Pulls a phone from his pocket.
20 D DESMOND: Gus, you want to see my niece? She just learned to whistle.
21 D GUS: Sure.
22 A ¶ Desmond shows him the screen.
23 A Gus squints.
24 A Smiles.
25 A The first real smile of the night.
26 A ¶ Paulina checks her clipboard.
27 A Hums.
* 28 A The steam curls around her.
29 D PAULINA (under her breath): Two cases short. Where did you go, little guys.
* 30 A ¶ From the live tank behind the line, a soft tap.
* 31 A Glass on glass.
32 A ¶ Nobody notices.
33 A The humming continues.
34 D DESMOND: She's three. She calls everything "doggy."
35 D GUS: Smart kid.
* 36 A ¶ Tap.
* 37 A Tap.
* 38 A Tap.
* 39 A Slower.
40 A ¶ Paulina looks up.
* 41 A The tank, a long glass rectangle of dark water, hides in the shadow beyond the last light.
42 D PAULINA (to Desmond): Did you top up the tank?
43 D DESMOND: Friday.
44 D PAULINA: Then who's tapping?
45 D DESMOND: Pipes. They knock.
46 A ¶ Gus has stopped chewing.
47 A He stares at the tank.
48 D GUS (quietly): Paulina.
49 D PAULINA: What?
50 D GUS: There's no water moving.
51 A ¶ She follows his gaze.
* 52 A The surface is perfectly flat.
* 53 A Black.
* 54 A Nothing disturbs it.
* 55 A ¶ Tap.
* 56 A ¶ The sound comes from inside.
57 D PAULINA (to herself): Okay. Okay.
58 A ¶ She walks toward the tank.
59 A Boots squelching.
60 A Desmond rises.
61 A Gus doesn't.
62 D PAULINA [CONT'D] (over her shoulder): Both of you, stay there.
63 A ¶ She reaches the glass.
64 A Wipes the condensation with her sleeve.
* 65 A ¶ Pressed against the inside of the glass is a HAND.
* 66 A A human hand.
* 67 A Pale, wrinkled, fingers splayed.
68 A ¶ Paulina stumbles back.
* 69 A Her clipboard clatters.
* 70 A ¶ Under the surface, a face drifts up.
* 71 A Eyes open.
* 72 A Wearing a hairnet.
* 73 A ¶ It's Gus's face.
74 A ¶ Paulina turns.
75 A Gus is still on his bucket.
76 A He lifts his sandwich.
77 A Smiles.
78 A Too wide.
79 D GUS: Ten minutes, you said.
80 A ¶ Desmond's phone slips from his hand.
* 81 A The screen lights the floor.
* 82 A The breaker clunks.
* 83 A ¶ All the fluorescents go out.

### SCENE s01024 | INT. SMALL CLAIMS COURTROOM - FORMER SKATING RINK - DAY
Detected names (may be incomplete or contain aliases): JUDGE MARGUERITE VANCE, FELIX OYELARAN, SOLVEIG HARTMANN
* 1 A ¶ Bleachers for gallery.
* 2 A Judge's bench on a rink-side Zamboni platform.
* 3 A Painted lines still on the floor.
4 A ¶ JUDGE MARGUERITE VANCE, 60s, reading glasses, gavel in a fist.
5 A FELIX OYELARAN, 30s, sharp suit, stands at the plaintiff's mark.
6 A SOLVEIG HARTMANN, 40s, hands folded, at the defendant's.
7 D VANCE: Counselor, the exhibit.
8 D OYELARAN: Your Honor, my client's contract clearly states--
9 D HARTMANN: Objection. Contract was never signed.
10 D VANCE: Ms. Hartmann, let him finish.
11 D HARTMANN: He's misstating the--
12 D OYELARAN: I have it right here, page four--
13 D VANCE: Both of you.
14 A ¶ Oyelaran waves the paper.
15 A Hartmann steps toward him.
16 A Vance raises the gavel.
17 D HARTMANN: It's a forgery, Judge. He knows it.
18 D OYELARAN: That is a slander, and you know it.
19 D VANCE: Order!
20 D HARTMANN: Ask him who typed it!
21 D OYELARAN: Ask her why she hid the original!
22 A ¶ The gavel cracks.
23 A Once.
24 A Twice.
25 A A third time, splintering the handle.
26 D VANCE: Sit. Down.
27 A ¶ They sit.
* 28 A Silence.
29 A A skate guard coughs in the bleachers.

### SCENE s01025 | INT. STEAMSHIP "MARIGOLD" - LOST AND FOUND OFFICE - DAY
Detected names (may be incomplete or contain aliases): FITCH, BARNABY PLUMLEY, ALOYSIUS FENN, HORTENSE VANDERWELL, NELL
* 1 A ¶ A narrow room below decks, shelves of forgotten hats, umbrellas, a single ukulele.
* 2 A A porthole shows slow gray swells.
3 A ¶ MR. FITCH, 50s, round spectacles, ledger in hand, presides behind a brass-railed counter.
4 A He is pleased with the order of the universe.
* 5 A ¶ The door opens.
6 A BARNABY PLUMLEY, 40s, tweed, mustache like a pushbroom, enters with the confidence of a man who has never been refused.
7 A Behind him, ALOYSIUS FENN, 40s, also in tweed, also mustached, but nervous.
8 D FITCH: Gentlemen. Something lost?
9 D BARNABY: A trunk. Brown, brass corners, initialed B.P.
10 D ALOYSIUS: Or A.F. It's our trunk.
11 D FITCH: Two sets of initials?
12 D BARNABY: We travel together.
13 D ALOYSIUS: Not that way.
14 D FITCH: I did not suggest a way.
15 A ¶ Fitch opens the ledger.
16 A Runs a finger down the page.
17 D FITCH [CONT'D]: Brown trunk, brass corners. Found on Deck C, yesterday.
18 D BARNABY: That's the one.
19 D FITCH: Did it contain anything unusual?
20 D BARNABY: Shirts.
21 D ALOYSIUS: And the Mortimer papers.
22 D BARNABY (sharp): Shirts.
23 D FITCH: Papers, you said?
24 D ALOYSIUS: Shirts and papers. Mostly shirts.
25 A ¶ Fitch produces a trunk from beneath the counter.
26 A Sets it down with ceremony.
27 A Unlatches it.
* 28 A ¶ Inside: shirts.
* 29 A Neatly folded.
* 30 A One small leather folio.
31 D FITCH [CONT'D]: Shirts. And a folio marked "Mortimer."
32 D BARNABY: Yes. Splendid. We'll take it.
33 D FITCH: I'll need a signature.
34 D ALOYSIUS: Of course.
35 A ¶ Fitch slides a form across.
36 A Barnaby reaches.
37 A Aloysius reaches.
38 A Their hands collide on the pen.
39 D BARNABY: After you.
40 D ALOYSIUS: No, you.
41 D BARNABY: I insist.
42 D ALOYSIUS: Then I insist more.
* 43 A ¶ The door swings open again.
44 A HORTENSE VANDERWELL, 60s, fur stole in the tropics, enters with NELL, 9, in a sailor dress, clutching a stuffed walrus.
45 D HORTENSE: Mr. Fitch! My daughter lost Sir Reginald!
46 D NELL: He's right here, Grandmother.
47 D HORTENSE: Then what are we doing here?
48 D NELL: You said we'd get ice cream.
49 D HORTENSE: Ah. So I did.
50 A ¶ Fitch clears his throat.
51 D FITCH: Madam, as you can see, I am engaged with two gentlemen.
52 D HORTENSE: Two? I see one and a half.
53 D BARNABY: I beg your pardon.
54 D HORTENSE: Is the other one a ghost?
55 D ALOYSIUS: I am quite solid, madam.
56 D HORTENSE: So was my late husband. Look where it got him.
* 57 A ¶ Silence.
58 A Fitch polishes his spectacles.
59 D FITCH: Nell, was it? What lost thing do you seek?
60 D NELL: Nothing. Grandmother told me to say we were looking for something so she could meet the two men with the matching mustaches.
61 D HORTENSE: Nell!
62 D NELL: You did.
63 D HORTENSE (to Barnaby): Children invent the most extraordinary things.
64 D BARNABY: Madam, we are not available for introductions.
65 D ALOYSIUS: We are engaged.
66 D BARNABY: To other people!
67 D ALOYSIUS: Women!
68 D HORTENSE: How very modern.
69 D FITCH: Might I suggest we resolve the trunk?
70 D BARNABY: Yes. The trunk.
71 D ALOYSIUS: Please.
72 A ¶ Fitch taps the folio.
73 D FITCH: There is a problem, gentlemen.
74 D BARNABY: Which is?
75 D FITCH: This folio does not contain papers. It contains a deed.
76 D ALOYSIUS: Barnaby.
77 D BARNABY: Don't.
78 D FITCH: To the Marigold.
79 D HORTENSE: The ship?
80 D FITCH: The ship. It appears that one of you, or perhaps both, has been selling it for some weeks, to various purchasers, on the open sea.
81 D NELL: Can you sell a boat while you're on it?
82 D HORTENSE: Apparently, dear. Apparently you can.
83 A ¶ Barnaby and Aloysius look at each other.
84 A Then at the door.
85 D BARNABY: After you.
86 D ALOYSIUS: No, you.
87 A ¶ They bolt together, wedged in the doorway.
88 A Fitch rings a brass bell.
* 89 A Somewhere above, a whistle blows.
90 D NELL: Grandmother, can we still get ice cream?
91 D HORTENSE: Child, we are going to buy the ship.

### SCENE s01026 | INT. GENERATION SHIP "TERRAPIN" - HYDROPONIC LAUNDRY - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): CAPTAIN ISADORA VOSS, KOJI TANABE, AMARA OKELLO, TERRAPIN, PELL
* 1 A ¶ A warm, humid hold.
* 2 A Rows of lettuce racks climb the walls under violet grow-lamps.
* 3 A In the center, three washing drums turn, slow and patient.
4 A ¶ CAPTAIN ISADORA VOSS, 50s, silver braid, sleeves rolled, folds a coverall with military precision.
5 A Across from her, KOJI TANABE, 30s, engineer, grease on his cuffs, sits on a drum and stares at a handheld.
6 A ¶ DR. AMARA OKELLO, 40s, ship's physician, enters with a cart of sheets.
7 D AMARA: Captain. The night cycle is half over. You should rest.
8 D VOSS: I rest when the laundry is done.
9 D AMARA: It never is.
10 D VOSS: That's the beauty of it.
11 A ¶ Koji glances up.
12 A Back down.
13 D KOJI: Captain, I'm getting a drift on the aft coolant. Point two percent.
14 D VOSS: Over what?
15 D KOJI: Forty days.
16 D VOSS: Fix it.
17 D KOJI: I have. Three times.
18 A ¶ Voss sets the coverall down.
19 A Looks at him properly.
20 D VOSS: Then it's not drift.
21 D KOJI: No, ma'am.
* 22 A ¶ A soft chime.
* 23 A From the ceiling grille:
24 D TERRAPIN [V.O.]: Attention. Compartment seven pressure variance detected. Corrective action in progress.
25 D VOSS: Terrapin, which compartment is seven?
26 D TERRAPIN [V.O.]: The nursery.
* 27 A ¶ A beat.
28 A Amara's hand tightens on the cart.
29 D AMARA: How much variance?
30 D TERRAPIN [V.O.]: Point four kilopascals. Within tolerance.
31 D KOJI: Tolerance is point five.
32 D VOSS: Meaning we're one bad hour from not being within it.
33 A ¶ PELL, 19, galley apprentice, barefoot, slides in clutching a mop like a rifle.
34 D PELL: Captain! Somebody's in the cold lock. Banging on the inside.
35 D VOSS: Nobody's in the cold lock.
36 D PELL: I heard it.
37 D TERRAPIN [V.O.]: Cold lock occupancy: zero.
38 D PELL: Then why's it hitting back?
39 A ¶ The room goes still.
* 40 A Even the drums seem to slow.
* 41 A ¶ Then, faintly, from the far end of the hold: knock.
* 42 A Knock.
* 43 A Knock.
* 44 A A pause.
* 45 A Knock.
46 D AMARA: That's the code.
47 D VOSS: What code?
48 D AMARA: The medical one. Three, pause, one. Emergency.
49 D KOJI: Nobody's logged to the lock.
50 D VOSS: Terrapin, open the cold lock.
51 D TERRAPIN [V.O.]: Unable. Door sealed by order of Captain Voss.
52 D VOSS: I gave no such order.
53 D TERRAPIN [V.O.]: Issued four hundred days ago.
54 A ¶ Voss and Koji turn to look at each other.
55 A They speak at once.
56 D VOSS: Cancel the seal.
57 D KOJI: Cancel the seal!
58 D AMARA: Cancel the seal now!
59 D PELL (to nobody): I'm gonna throw up.
60 D TERRAPIN [V.O.]: Cancel denied. Reason: crew safety.
61 A ¶ The knocking quickens.
* 62 A Frantic.
* 63 A The cold lock door begins to frost over from the outside.
64 A ¶ Voss grabs a wrench off Koji's belt.
65 A Runs.
66 A The others follow.
* 67 A The drums turn on, spinning white sheets in empty light.

### SCENE s01027 | INT. STARLITE ROLLER RINK - SIX A.M.
Detected names (may be incomplete or contain aliases): DEZI ALVARADO, BOY, JUNIOR, FAIRWEATHER
* 1 A ¶ Carpet-walled, smelling of floor wax and old nacho cheese.
* 2 A A disco ball turns without light, a silent planet.
* 3 A The maple floor is empty and gleaming like a frozen lake.
4 A ¶ DEZI ALVARADO, 15, sits on the bench in secondhand skates, laces undone.
5 A Hoodie sleeves swallow her hands.
6 A She has been crying and has recently stopped.
7 A ¶ A figure leans against the snack counter.
8 A A BOY in a faded letterman jacket, tall, thin as a coat rack, a toothpick rolling in his mouth.
9 A He watches her without moving.
10 D BOY: You've got two left feet.
11 D DEZI: I've got one left foot and one broken heart.
12 D BOY: Which is worse?
13 D DEZI: Depends who you ask.
14 A ¶ She stands, wobbles, grabs the rail.
15 A He doesn't help.
16 A A kindness, of a kind.
17 D BOY [CONT'D]: They're saying you took your mother's car.
18 D DEZI: Borrowed.
19 D BOY: Without asking.
20 D DEZI: She was asleep.
21 D BOY: Dezi.
22 A ¶ She looks at him sharply.
23 A He shrugs, almost apologetic.
24 D BOY [CONT'D]: My name's Junior, by the way. Since you're not going to ask.
25 D JUNIOR [CONT'D]: Everyone calls me Junior. My dad's Junior too. Nobody knows who the first one was.
26 D DEZI: That's the saddest thing I've heard all week.
27 D JUNIOR: It's been a long week?
28 D DEZI: Rough.
29 A ¶ She pushes off the rail.
30 A Rolls two feet.
31 A Wavers.
32 A Falls.
33 A Hard.
34 A Sits on the floor with her palms flat.
35 A ¶ For a moment, she isn't sure if she's going to scream or laugh.
36 A ¶ She does both.
* 37 A ¶ The sound ricochets off the carpeted walls.
38 A Junior flinches, then, slowly, grins.
39 A He steps onto the floor in his sneakers and slides to her.
40 D JUNIOR [CONT'D]: That's it. Get it out.
41 D DEZI: I hate everyone.
42 D JUNIOR: Me too.
43 D DEZI: I hate my mother.
44 D JUNIOR: Mine's all right. But I hate my dad.
45 D DEZI: I don't hate her. I just wanted to drive somewhere nobody knew.
46 D JUNIOR: And you ended up at a roller rink.
47 D DEZI: It was the only thing open.
* 48 A ¶ The lights come on.
* 49 A All at once, bright as an operating room.
* 50 A The disco ball catches a beam and sprays confetti across the walls.
51 A ¶ MS. FAIRWEATHER, 60s, rink manager, a cardigan embroidered with tiny skates, comes through the swinging doors with a ring of keys and a coffee thermos.
52 A She stops dead.
53 D MS. FAIRWEATHER: We don't open for four hours.
54 D JUNIOR: Morning, Ms. Fairweather.
55 D MS. FAIRWEATHER: Junior. You are not supposed to be here. Neither is she. Whoever she is.
56 D DEZI: Dezi.
57 D MS. FAIRWEATHER: Dezi. Well. Are you hurt?
58 D DEZI: No.
59 D MS. FAIRWEATHER: Good. Skates off. Both of you. There's a pot of coffee in the back and a patched-up phone. Call your mother.
60 A ¶ Dezi looks at Junior.
61 A He lifts one shoulder.
62 A Almost a smile.
63 A ¶ She begins to unlace.

### SCENE s01028 | INT. DERELICT ORBITAL STATION - OBSERVATION RING - CONTINUOUS
Detected names (may be incomplete or contain aliases): ORSOLYA, TAVI
* 1 A ¶ Frost on the viewport.
* 2 A Beyond it, a gas giant fills the sky, banded and indifferent.
* 3 A Emergency lights pulse amber.
4 A ¶ ORSOLYA, 40s, scavenger's patched suit, helmet clipped to her hip, drifts along a handrail.
5 A TAVI, 20s, tool belt too big for him, follows with a lantern.
6 A ¶ She stops.
7 A Taps the wall.
8 A Listens.
9 D ORSOLYA (to the empty ring): Anyone aboard. We're salvage. We mean no harm.
* 10 A ¶ Silence.
* 11 A Frost ticks on the glass.
12 D TAVI: Maybe just--
13 A ¶ She raises a hand.
14 A He stops.
15 D ORSOLYA (again, louder): Anyone aboard.
* 16 A ¶ A pause.
* 17 A Nothing.
18 A She nods once, as if she expected nothing.
19 A ¶ She opens a wall panel.
* 20 A Wiring shredded.
* 21 A Burned.
22 D ORSOLYA [CONT'D] (muttering): Not an accident.
23 D TAVI: What?
24 D ORSOLYA: Nothing. Hold the light.
25 A ¶ He holds it.
26 A His hand trembles.
* 27 A The beam shakes across the wires.
28 A ¶ She notices.
29 A Says nothing.
30 A Takes the lantern from him.
31 A Hands him a screwdriver instead.
32 D ORSOLYA [CONT'D]: Twelve screws. Take the plate off.
33 A ¶ He works.
34 A Slowly.
35 A His eyes keep sliding to the viewport.
* 36 A ¶ A thud rolls through the ring.
* 37 A Metal on metal, somewhere aft.
38 A ¶ Both freeze.
39 D TAVI: That was close.
40 D ORSOLYA: That was far.
41 D TAVI: It sounded close.
42 D ORSOLYA: Far things sound close in a hull.
43 A ¶ She doesn't sound sure.
44 A Her thumb strokes the edge of the lantern.
* 45 A ¶ The thud again.
* 46 A Louder.
* 47 A Then a long scrape.
48 A ¶ Tavi drops the screwdriver.
* 49 A It floats, tumbling.
50 D ORSOLYA [CONT'D] (to the ring, calm): Everyone stay where you are. This is a recovery crew. We're leaving in five minutes.
51 D TAVI: There's no one here.
52 D ORSOLYA: I know.
53 A ¶ She grabs his sleeve.
54 A Tows him toward the airlock.
55 A Her grip is gentle.
56 A Too gentle.
57 A ¶ They reach the hatch.
58 A She spins the wheel.
* 59 A It opens onto the cold, bright tunnel of their own ship.
60 A ¶ She pushes him through first.
61 D TAVI (over his shoulder): You okay?
62 D ORSOLYA: Fine.
63 A ¶ She follows.
64 A Looks back once.
* 65 A The ring is quiet, amber, still.
* 66 A ¶ Then, from the dark, one more knock.
* 67 A Small.
* 68 A Almost polite.
69 A ¶ She seals the hatch.
70 D ORSOLYA [CONT'D] (to herself): Five minutes.
71 A ¶ She doesn't move for a long time.
72 A Tavi picks up the lantern and sets it between them, lighting both their faces.

### SCENE s01029 | INT. SYNERGY DYNAMICS - OPEN OFFICE - DAY
Detected names (may be incomplete or contain aliases): DARRYL PENHALLOW
* 1 A ¶ Forty identical desks.
* 2 A Forty identical monitors.
* 3 A A banner reads WE ARE FAMILY!
4 A ¶ DARRYL PENHALLOW, 30s, lanyard, tie two sizes too wide, stands bolt upright at his desk.
5 A Eyes wide.
6 A Smiling.
7 D DARRYL [V.O.]: This is my third reorg this quarter. I've been promoted twice. I still do the same job.
8 A ¶ He types.
9 A Fast.
10 A Frantic.
11 A Smiling.
12 D DARRYL [V.O., CONT'D]: Synergy is not a word. It's a hostage note.
* 13 A ¶ A cheerful intercom chime.
14 A ¶ He grabs a stapler.
15 A Clutches it to his chest.
16 A Smiling.
17 D DARRYL [V.O., CONT'D]: Quick wins. Low-hanging fruit. Circle back. Ping me.
18 A ¶ He drops the stapler.
19 A Picks up a mug: WORLD'S OKAYEST EMPLOYEE.
20 D DARRYL (to the room, bright): Great job, team!
21 A ¶ No one answers.
* 22 A Forty monitors glow.
23 D DARRYL [CONT'D] (muttering): We are so aligned.
24 A ¶ He sips from the empty mug.
25 A Sets it down.
26 A Smiles.

### SCENE s01030 | INT. ABANDONED PLANETARIUM - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR MIRELLA STROZZI
* 1 A ¶ A great domed ceiling, plaster cracked like dry riverbed.
* 2 A Rows of reclining seats, all tilted toward a sky that no longer exists.
* 3 A Dust hangs in a single shaft of moonlight from a broken skylight.
4 A ¶ INSPECTOR MIRELLA STROZZI, 50s, charcoal overcoat, white glove on one hand, kneels at the base of the star projector, a black iron dumbbell of a machine.
5 A She sets a small cassette recorder on the floor and presses play.
6 D STROZZI [V.O.] (tape, hissing): Entry one. The caretaker was found here, third seat, row nine, facing south. No wound. No struggle. Only the projector, warm to the touch, though power has been cut for eleven years.
7 A ¶ She stops the tape.
8 A Lifts a lens cap.
* 9 A Underneath, a thumbprint in fresh grease.
10 A ¶ Slowly she stands, looks up at the dead dome.
* 11 A The cracks branch like constellations nobody named.
12 D STROZZI (softly): Warm.
13 A ¶ She presses record.
14 A Speaks into the recorder.
15 D STROZZI [CONT'D]: Entry two. Someone has been drawing the stars back in.
* 16 A ¶ Above her, tiny pinpricks of white chalk dot the plaster.
* 17 A Hundreds.
* 18 A Fresh.
* 19 A ¶ The projector clicks.

### SCENE s01031 | EXT. SUNSET GARDENS RETIREMENT HOME - BOCCE COURT - DAY
Detected names (may be incomplete or contain aliases): BERTIE, MOSCATO, LOU, GENOVESE, HIRO NAKAMURA, DORIS PELLEGRINO, SKIP, TATE
* 1 A ¶ Crushed oyster-shell lane, green benches, a hand-painted banner: LEAGUE FINALS.
* 2 A Folding chairs full of cardigans.
3 A ¶ ALBERTINA "BERTIE" MOSCATO, 80, pearls, steel spine, rolls her wrist like a bishop blessing.
4 A LOU "THE HAMMER" GENOVESE, 82, undershirt, arms like cured hams, glares from the other end.
5 A ¶ Bertie lets fly.
* 6 A The ball skims, kisses the pallino.
7 A Applause.
8 D BERTIE: Beat that, Hammer!
9 D LOU: I've beaten better, Bertie!
10 A ¶ HIRO NAKAMURA, 78, referee, pressed shirt, kneels with a tape measure.
11 A He measures.
12 A Looks up.
13 D HIRO: Bertie leads by half an inch.
14 A ¶ DORIS PELLEGRINO, 75, Lou's partner, sun visor, mutters.
15 D DORIS: Half an inch. I've had longer lunches.
16 A ¶ Lou steps to the line.
17 A Spits on his palm.
18 A Rolls.
* 19 A The ball veers left, strikes Bertie's ball, scatters it.
20 A The crowd gasps.
21 D LOU: Ha!
22 D BERTIE: Cheat!
23 D HIRO: Legal. Lou leads.
24 A ¶ ORVILLE "SKIP" TATE, 85, Bertie's partner, wheelchair, a blanket across his knees, rolls up.
25 D SKIP: Bertie, you owe me three dollars if you lose.
26 D BERTIE: Skip, I never lose.
27 D SKIP: Ninety-one losses, Bertie. I counted.
28 D BERTIE: Quiet, you old goat.
29 A ¶ She picks up the last ball.
30 A Stares down the court.
* 31 A Quiet descends.
* 32 A A wind chime tinkles.
33 A ¶ She steps.
34 A Swings.
35 A Lets go.
* 36 A ¶ The ball curves, ticks the fence, rolls, and stops dead against the pallino.
* 37 A ¶ Silence.
38 A Then an uproar.
39 D DORIS: Hiro, it's wood. Look at the grain!
40 D HIRO: Bertie wins.
41 D LOU (low): Rematch.
42 D BERTIE: Next Sunday, Hammer. Bring your checkbook.

### SCENE s01032 | INT. SUGAR MILL - BOILING FLOOR - NIGHT
Detected names (may be incomplete or contain aliases): JETHRO MALLORY, PILAR ESCOBEDO, HENRIK SOLBERG
* 1 A ¶ A cavernous hall of copper vats, rafters lost in steam.
* 2 A A table has been dragged to the center, a thick plank on two barrels.
* 3 A Folding chairs ring it.
* 4 A Crates of burlap sacks serve as bleachers.
* 5 A Lanterns hang from hooks.
6 A ¶ JETHRO MALLORY, 40s, shirtless under a leather apron, shoulders like sacks of grain, sits at one side of the table.
7 A Across from him, PILAR ESCOBEDO, 20s, rolled sleeves, braid down her back, calm as a tide pool.
8 A ¶ Between them, HENRIK SOLBERG, 60s, referee, rubs his hands in chalk and sets them on top of theirs.
9 D HENRIK: Elbows on the pads. Grips locked.
10 A ¶ Jethro grips.
11 A Pilar grips.
12 A Their knuckles whiten.
13 D HENRIK [CONT'D]: Ready?
14 D JETHRO: Born ready.
15 D PILAR: Skip the speech.
16 D HENRIK: Go!
17 A ¶ Both tense.
* 18 A The table groans.
19 A A vein rises on Jethro's neck.
20 A Pilar's jaw clenches.
21 A Neither moves.
22 A ¶ The crowd begins a low chant: Jeth-ro.
23 A Jeth-ro.
24 D PILAR (through teeth): You sweat a lot.
25 D JETHRO: It's a sweaty room.
26 D PILAR: Your wife make that apron?
27 D JETHRO: My mother.
28 D PILAR: She loves you.
29 D JETHRO: Shut up.
30 A ¶ Henrik crouches, eyes on the hands.
* 31 A Sweat drips from Jethro's nose onto the plank.
32 A ¶ Pilar shifts her weight.
33 A Her free hand grips the table's edge.
34 A Jethro's arm trembles, a small tremor.
35 A Hers does too.
36 A ¶ They breathe together, in, out.
37 D HENRIK: Hold your lines.
38 A ¶ Jethro surges.
39 A His hand pushes hers an inch toward the pad.
40 A The crowd roars.
41 D PILAR (gasping): Not yet.
42 A ¶ She drives back.
43 A His arm straightens.
44 A Equal again.
45 A ¶ Both freeze.
46 A Both stare.
47 A Neither blinks.
48 D JETHRO: You're good.
49 D PILAR: My father taught me. At a mill like this.
50 D JETHRO: Where?
51 D PILAR: Matanzas.
52 D JETHRO: I had a cousin in Matanzas.
53 D PILAR: Everyone does.
54 A ¶ They laugh, tight and brief.
* 55 A The effort cracks it.
56 A ¶ Jethro lunges again.
* 57 A The table skids across the floor.
58 A Henrik leaps clear.
* 59 A Chairs topple.
60 A The crowd scatters back as the barrels shift.
61 A ¶ Pilar twists, wrenches her shoulder, slams the back of his hand toward the pad.
* 62 A It stops an inch from the wood.
63 A Both grunt.
64 D HENRIK: Hold! Hold! The table!
65 A ¶ They don't hold.
66 A They are locked.
* 67 A The table tilts.
68 A They tumble together onto the sacks, hands still clasped, wrestling.
69 A ¶ Henrik blows a whistle.
* 70 A No one hears.
71 D PILAR (rolling): Pad's behind you!
72 D JETHRO: Is not!
73 D HENRIK: It is! It's behind you both!
74 A ¶ They tumble over the barrels, bounce against a vat, freeze.
* 75 A Steam hisses.
76 A Their joined hands hover above a sack of raw sugar.
77 A Neither willing to break.
78 D PILAR: Truce?
79 D JETHRO: Till dawn.
80 D PILAR: Dawn's fine.
81 A ¶ They let go together.
82 A Both slump on the sacks, panting.
83 D HENRIK (to the crowd): Draw! The match is a draw!
84 A ¶ A cheer, ragged.
85 A Jethro and Pilar lie there staring at the rafters, arms spread, hands shaking.
86 D JETHRO: Again?
87 D PILAR: Tomorrow.
88 D JETHRO: Bring your father.
89 D PILAR: He's dead.
90 D JETHRO: Then bring his arm.
91 A ¶ Pilar smiles, for the first time.
92 A She sits up and reaches for the table.
93 D HENRIK: You people are insane.
94 A ¶ She slams her elbow on the plank.
95 A Jethro hauls himself up and does the same.
96 A The crowd goes silent.
97 D HENRIK [CONT'D] (sighing): Ready?

### SCENE s01033 | INT. FUNICULAR CAR - MID-SLOPE - NIGHT
Detected names (may be incomplete or contain aliases): AUGUST MWANGI, SILAS DRAKEFORD, ZOFIA BR, TEN
* 1 A ¶ Stalled.
* 2 A Wooden benches, brass rails.
* 3 A Outside, black pines and a thousand feet of dark.
* 4 A Wind rocks the car on its cable.
5 A ¶ AUGUST MWANGI, 40s, charcoal coat, gloved hands folded, sits very still.
6 A Tall, calm, eyes of a chess player.
7 A ¶ Across from him, SILAS DRAKEFORD, 40s, wet hair, a bruise ripening on his cheekbone, grips a leather briefcase to his chest.
8 D SILAS: You pulled the brake.
9 D AUGUST: I pulled nothing.
10 D SILAS: Then who did?
11 D AUGUST: The cable did what cables do.
12 A ¶ Silas shifts.
13 A His hand slides toward his pocket.
14 A August watches it.
15 D AUGUST [CONT'D]: Don't.
16 D SILAS: I wasn't.
17 D AUGUST: Then he wouldn't have said I was.
18 D SILAS: Who?
19 D AUGUST: You know who.
20 A ¶ Silas swallows.
21 A His eyes dart to the window.
* 22 A Nothing but pine and fog.
23 D SILAS: He told you I took it.
24 D AUGUST: He told me you were smart. And that smart men carry briefcases.
25 A ¶ Silas laughs, brittle.
26 A He sets the briefcase on his knees.
27 A Clasps it shut.
* 28 A ¶ A scrape.
* 29 A On the roof.
30 A Both men look up.
31 D AUGUST [CONT'D]: Deer.
32 D SILAS: On a funicular?
* 33 A ¶ Another scrape, heavier.
* 34 A The car sways.
* 35 A ¶ The roof hatch slams open.
36 A A boot drops through.
37 A Then a leg.
38 A Then a woman, ZOFIA BRÅTEN, 30s, climbing gear, ice axe, headlamp blazing.
39 A She lands in a crouch, axe leveled.
40 D ZOFIA: Nobody move.
41 A ¶ Both men raise their hands.
42 A She sweeps the light across them, lands on August.
43 D ZOFIA [CONT'D]: You. Open the briefcase.
44 D AUGUST: It's his.
45 D ZOFIA (to Silas): Then you.
46 A ¶ Silas hesitates.
47 A His hand shakes.
48 A He unlatches.
49 A Flips the lid.
* 50 A ¶ Inside, nothing.
* 51 A Foam padding, cut to hold something that's no longer there.
52 D ZOFIA [CONT'D]: Where is it?
53 D SILAS: I don't know.
54 A ¶ August smiles.
55 A Slowly lowers his hands.
56 D AUGUST: He knows.
57 A ¶ He nods at the window.
* 58 A On the glass, a small hand-shaped print.
* 59 A On the outside.
* 60 A ¶ The car lurches.
* 61 A Falls ten feet and catches.
62 A ¶ All three scream.

### SCENE s01034 | INT. TAXIDERMY WORKSHOP - NIGHT
Detected names (may be incomplete or contain aliases): BEATRIX CALLOWAY, NICO ABARA, FENWICK
* 1 A ¶ Glass eyes glitter from every shelf.
* 2 A A stuffed owl, a lynx mid-leap, a badger with a crooked grin.
3 A ¶ BEATRIX CALLOWAY, 50s, magnifier on her forehead, kneels by an open drawer while NICO ABARA, 20s, apprentice, holds the lantern and FENWICK, 70s, owner, stands rigid at the door, fingers twitching, and all three have noticed that the fox on the counter is missing its left eye.
4 D BEATRIX: Fenwick, you said nobody came in.
5 D FENWICK: Nobody did, Beatrix.
6 D NICO: The fox, Mr. Fenwick. Look at the fox.
7 A ¶ Beatrix lifts the animal, turns it, peers into the empty socket, pulls a folded note from inside, and Nico leans in, lantern shaking, while Fenwick edges toward the back door, one hand in his coat.
8 D BEATRIX: Stop there, Fenwick.
9 D FENWICK: It's a misunderstanding.
10 D NICO: It says "the eye is in the owl."
11 A ¶ They all turn.
* 12 A The owl stares back.

### SCENE s01035 | INT. QUARANTINED CRUISE SHIP - GIFT SHOP - NIGHT
Detected names (may be incomplete or contain aliases): RENATA KOVAC, MILES TOBIN, ADEBAYO ROSS, CAPTAIN HALE
* 1 A ¶ Shelves of magnets, snow globes, sunscreen.
* 2 A The registers are dark.
* 3 A Emergency strips light the floor.
* 4 A Through the glass storefront, an empty promenade deck rocks gently at anchor.
5 A ¶ RENATA KOVAC, 40s, ship's purser, hair in a messy bun, uniform jacket unbuttoned, sits behind the counter with a radio on her knee.
6 A MILES TOBIN, 30s, ship's doctor, mask around his chin, leans on a shelf.
7 A ADEBAYO ROSS, 50s, passenger, bathrobe, paper slippers, pretends to read a paperback.
* 8 A ¶ The radio crackles.
9 D CAPTAIN HALE [V.O.]: Shop, this is the bridge. Status.
10 D RENATA (into radio): Three souls, sir. All calm.
11 D CAPTAIN HALE [V.O.]: Keep them there. We've got a boat coming at dawn.
12 D RENATA: Understood.
13 A ¶ She sets the radio down.
* 14 A The silence returns.
15 D ADEBAYO (to no one): Two weeks on a boat, and the one thing they sell me is snow globes.
16 D MILES: You can have mine.
17 D ADEBAYO: Does it come with a cure?
18 D MILES: It comes with a mild placebo effect.
19 A ¶ Adebayo laughs, then coughs.
20 A Miles straightens, watches him.
21 D MILES [CONT'D] (quietly): Sir, how long has that been going?
22 D ADEBAYO: It's a tickle.
23 D MILES: How long?
24 D ADEBAYO: Since Tuesday.
25 A ¶ Renata stiffens.
26 A She slides her hand slowly toward the radio.
27 D RENATA (to all): Everyone stay exactly where you are.
28 D MILES: Renata.
29 D RENATA: Don't.
30 D MILES: He's not necessarily--
31 D RENATA: You said no one on this deck was symptomatic.
32 A ¶ Miles opens his mouth.
33 A Closes it.
34 D ADEBAYO (muttering): I should've stayed in the cabin.
* 35 A ¶ The storefront lights flicker.
* 36 A Outside, a searchlight sweeps the promenade.
* 37 A Then a second.
* 38 A Then a third, from a hull that isn't theirs.
39 D RENATA: That's not the dawn boat.
40 D MILES: No.
41 A ¶ She lifts the radio.
42 D RENATA [CONT'D]: Bridge, we have lights on the promenade.
* 43 A ¶ Static.
* 44 A Nothing.
45 A She tries again.
46 D RENATA [CONT'D]: Bridge?
47 D CAPTAIN HALE [V.O.] (whispering): Don't open the door. They're not ours.

### SCENE s01036 | INT. THORNQUIST DRESSMAKER'S SHOP - LONDON - DAY (1893)
Detected names (may be incomplete or contain aliases): AGNES THORNQUIST, DELPHINE ARCHAMBAULT, COLONEL ASHBY-GREY, YUSUF HADDAD
* 1 A ¶ Bolts of silk, a cutting table, a brass dummy in half-pinned lilac.
* 2 A Rain at the window.
3 A ¶ AGNES THORNQUIST, 40s, pins in her mouth, kneels to a hem.
4 A DELPHINE ARCHAMBAULT, 20s, in her slip, stands on a footstool, arms out.
5 A Her eyes avoid the mirror.
6 A ¶ COLONEL ASHBY-GREY, 60s, enters in a damp greatcoat.
7 A YUSUF HADDAD, 30s, tailor's apprentice, follows with a tape over his shoulder.
8 D ASHBY-GREY: Miss Archambault. Your father sends his regards.
9 D DELPHINE: How kind.
10 A ¶ He sets his hat on the cutting table.
11 A Agnes takes the pins from her mouth.
12 D AGNES: Colonel. We weren't expecting you.
13 D ASHBY-GREY: One doesn't schedule a wedding fitting.
14 D AGNES: It's not yet a wedding.
15 D ASHBY-GREY: It will be Saturday.
16 A ¶ Delphine's arm drops an inch.
17 A Agnes taps it back up.
18 D AGNES: Steady, dear.
19 A ¶ Yusuf unrolls the tape.
20 A Measures the waist.
21 A Says nothing.
22 A His fingers tremble.
23 D ASHBY-GREY: Tighter at the bodice. The family insists.
24 D AGNES: She'll not breathe.
25 D ASHBY-GREY: She'll not need to.
* 26 A ¶ A silence.
* 27 A Rain hits the glass.
28 A ¶ Delphine looks into the mirror for the first time.
29 A At herself.
30 A At Yusuf behind her.
31 D DELPHINE: Mr. Haddad. Is the silk imported?
32 D YUSUF: From Damascus, miss.
33 D DELPHINE: How far is that?
34 D YUSUF: Very far.
35 D DELPHINE: How long would it take to go?
36 A ¶ Ashby-Grey turns.
37 A His eyes narrow.
38 D ASHBY-GREY: Miss Archambault.
39 D DELPHINE: Merely curious.
40 A ¶ Agnes rises, sets her pins down, and smooths the bodice.
41 A Her thumb brushes Delphine's wrist.
42 A A pulse passes between them.
43 A Quick, quiet.
44 D AGNES (low): I'll let out the seam tonight.
45 D ASHBY-GREY: Pardon?
46 D AGNES: I said I'll take in the seam tonight.
47 A ¶ Ashby-Grey studies her.
48 A Then Yusuf.
49 A Then the door.
50 D ASHBY-GREY: Saturday. Ten sharp.
51 A ¶ He takes his hat and leaves.
* 52 A The bell tinkles.
* 53 A The latch clicks.
54 A ¶ Nobody moves.
55 A Then Delphine steps down off the stool, slow, as if it were a scaffold.

### SCENE s01037 | INT. ROTATING RESTAURANT - TOWER SUMMIT - NIGHT
Detected names (may be incomplete or contain aliases): ROZ KAPLAN, TREVOR DUNN, NEW GIRL, SUNNY
* 1 A ¶ A circular room on a slow turn.
* 2 A The city slides past the windows like a conveyor.
* 3 A White tablecloths, empty chairs, a pianist's bench with no pianist.
4 A ¶ ROZ KAPLAN, 50s, silver bob, red lipstick, sits at a corner table with a blueprint under her wine glass.
5 A Opposite her, TREVOR DUNN, 30s, hotel uniform, nervous hands.
6 A ¶ A NEW GIRL, 20s, denim jacket, backpack, slides into the third chair without being invited.
7 D NEW GIRL: Sorry I'm late. The elevator stopped at every floor.
8 D ROZ: It's a tourist elevator.
9 D NEW GIRL: It was a hostage situation.
10 D ROZ: You've got the codes?
11 D NEW GIRL: I've got the codes.
12 D TREVOR: Who is she?
13 D ROZ: Trevor, this is Sunny Lockwood. She's the one I told you about.
14 D SUNNY: Nice to meet you. I'm the one with the thumbs.
15 D TREVOR: The thumbs?
16 D SUNNY: Locksmith's daughter. Four generations of thumbs.
17 D ROZ: She's good. She's very good. She's also nineteen.
18 D TREVOR: Twenty-one.
19 D SUNNY: Twenty. Don't lie for me.
20 D ROZ: Let's start. The vault is on sixty-one, under the observation deck. Every ninety minutes the restaurant makes a full revolution. We have exactly four minutes where the north camera faces the wall.
21 D TREVOR: Because of the rotation.
22 D ROZ: Because of the rotation. Sunny takes the first lock. I take the second. Trevor, you stay at the maitre d' stand and pour wine.
23 D TREVOR: I can pour wine.
24 D ROZ: You can pour wine badly. That's all anyone expects.
25 D SUNNY: What's the haul?
26 D ROZ: Eleven million. Bearer bonds. In a briefcase that looks like a briefcase.
27 D SUNNY: Eleven's good. What's my cut?
28 D ROZ: Two.
29 D SUNNY: Three.
30 D ROZ: Two and a half.
31 D SUNNY: She drives a hard bargain.
32 D TREVOR: She who?
33 D SUNNY: Roz. It's a figure of speech. I'm talking about Roz.
34 D ROZ: I know who you mean.
35 D SUNNY: She counts every penny.
36 D ROZ: She buys every drink. Shut up and listen.
37 A ¶ Trevor pours wine for no one.
* 38 A The glass fills.
39 A He sets the bottle down too hard.
40 D ROZ [CONT'D]: After the second lock, there's a pneumatic tube. Documents only. We use it to send the bonds down to the kitchen.
41 D TREVOR: They go down by tube.
42 D ROZ: They go down by tube. At the kitchen, Marguerite takes them in a casserole dish.
43 D SUNNY: Who's Marguerite?
44 D ROZ: My sister.
45 D SUNNY: You have a sister?
46 D ROZ: Everyone has a sister.
47 D TREVOR: I don't.
48 D ROZ: Then you're lucky.
49 D SUNNY: What about security?
50 D ROZ: Two guards. One reads novels. The other sleeps. We tested them for six weeks.
51 D SUNNY: Six weeks of watching a man read a novel.
52 D ROZ: It was a Dickens.
53 D SUNNY: Which?
54 D ROZ: Bleak House.
55 D SUNNY (laughing): Oh, I like her.
56 D TREVOR: Who?
57 D SUNNY: Roz. You keep asking.
58 D ROZ: Pay attention. Revolution starts at eleven forty. We're in position by eleven thirty. Questions?
59 D TREVOR: What if the guard doesn't sleep?
60 D ROZ: Then I buy him a drink.
61 D SUNNY: What if he doesn't drink?
62 D ROZ: Everyone drinks, sweetheart.
63 D SUNNY: What if the vault door is a different model?
64 D ROZ: It isn't.
65 D SUNNY: What if it is?
66 D ROZ: Then you'll earn your three.
67 D SUNNY (grinning): Three?
68 D ROZ: Two and a half. Don't push.
* 69 A ¶ The room turns.
* 70 A The city lights drift past, one landmark after another.
71 D TREVOR: It's a little beautiful, actually.
72 D ROZ: It's a job, Trevor.
73 D TREVOR: Can it be both?
74 D ROZ: No.
75 A ¶ Sunny lifts her glass.
76 A Roz clinks it.
77 A Trevor, last, doesn't quite reach.

### SCENE s01038 | INT. FUNERAL HOME - VIEWING ROOM B - DAY
Detected names (may be incomplete or contain aliases): ELOISE FARNSWORTH, CAMILA BRANDAO, DOROTHEA KWAN
* 1 A ¶ Velvet drapes.
* 2 A A casket at the far end, closed, spray of lilies.
* 3 A Folding chairs facing a mahogany table, court reporter's stenotype ticking beside it.
4 A ¶ ELOISE FARNSWORTH, 70s, black gloves, rosary wrapped around one hand, sits very straight.
5 A On her left, CAMILA BRANDAO, 40s, her attorney, legal pad flat.
6 A Across the table, DOROTHEA KWAN, 50s, opposing counsel, reading glasses on a chain.
7 D KWAN: Mrs. Farnsworth, when did you last see your husband alive?
8 D ELOISE: Tuesday.
9 D KWAN: And the will?
10 A ¶ Eloise's rosary clicks once.
11 D ELOISE: What about it?
12 D KWAN: Did she witness it?
13 D BRANDAO: Objection. Who's "she"?
14 D KWAN: The nurse.
15 D ELOISE: Mrs. Okafor.
16 D KWAN: She told us she wasn't present.
17 A ¶ Eloise stares at the casket.
18 A Her fingers work the beads, one, two, three.
19 D BRANDAO: Let the record show my client has not been served that statement.
20 D KWAN: It's in your folder.
21 A ¶ Brandao flips pages.
22 A Stops.
23 A Her thumb presses a corner of paper until it whitens.
24 D ELOISE: I'd like some water.
25 A ¶ Kwan nods to the reporter.
26 A A pitcher is brought.
27 A Eloise's glove shakes as she lifts the cup, then stills.
