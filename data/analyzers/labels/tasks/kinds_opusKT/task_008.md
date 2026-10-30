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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_opusKT/group_0008.json with the Write tool:
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
38 A He angles the lid down a few degrees, and the three of them stand there in the green light of the hopper doors, pretending not to see it.
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
* 54 A The water runs down his beard.
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
74 A The road.
75 A The ridge.
76 A The long, long distance.
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
23 A She crosses the clay with the shotgun in the crook of her arm, stopping ten paces from him, and he, in answer, takes his hand away from the horse's flank and lets it hang loose and open beside his coat.
24 D YOUNG WOMAN [CONT'D]: What's your name, mister?
25 A ¶ The Stranger's eyes go to the bridge.
26 A To the hawk.
27 A To her.
28 D STRANGER: Jedediah.
29 D YOUNG WOMAN: That's a church name.
30 D JEDEDIAH: My mother had hopes.
31 A ¶ She laughs, one short breath, and it startles her more than it does him.
32 A The shotgun dips an inch.
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
* 8 A ¶ Nobody below hears.
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
* 5 A ¶ Four flashlight beams cut the gloom.
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
45 A Her flashlight beam wobbles over a patch of floor.
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
63 A His duffel scrapes a shelf.
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
* 84 A Zuzu's bucket tips and spills a hundred pale caps onto the concrete.
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

### SCENE s00020 | INT. LIGHTHOUSE FOG-SIGNAL ROOM - NIGHT
Detected names (may be incomplete or contain aliases): IGNATIUS BRAND, TAMSIN OKORO
* 1 A ¶ The brass horn sits silent.
* 2 A Rain ticks on the glass.
3 A IGNATIUS BRAND (60s, salt-cracked hands, wool cap) pours tea for TAMSIN OKORO (20s, relief keeper, soaked parka).
4 D TAMSIN: Quiet night.
5 D IGNATIUS: Always is, after the horn stops.
6 A ¶ They sip.
* 7 A The kettle ticks as it cools.
8 A Tamsin smiles.
9 D TAMSIN: Thought it'd be worse out here.
10 A ¶ Ignatius stares at the floor between her boots.
* 11 A Water pools there.
* 12 A Too much water, and it runs uphill toward the horn.
13 D IGNATIUS (barely a whisper): You came up alone?
14 D TAMSIN: Yes. Why?
15 A ¶ Below them, slow wet footsteps climb the iron stairs.
16 A Tamsin and Ignatius both freeze, cups halfway to their mouths.
* 17 A ¶ The horn BLARES on its own.
18 A They scramble for the hatch, collide, and drag it shut together.
19 D IGNATIUS: That's not the tide.

### SCENE s00021 | INT. COMMUNITY POOL SNACK BAR - DAY
Detected names (may be incomplete or contain aliases): BEATRIX LOMBARDI, DESMOND, PIPPA, NANA ROSALIND, LIFEGUARD, KOFI MENSAH
* 1 A ¶ Chlorine haze.
* 2 A A hand-lettered menu.
* 3 A Rain drums the skylight and the pool outside is closed for the day.
4 A ¶ BEATRIX LOMBARDI (40s, harried, whistle around her neck) wipes the counter.
5 A Her kids sit on stools: DESMOND (12, serious, goggles pushed up on his forehead) and little PIPPA (6, one flip-flop on).
6 D BEATRIX: Who ate the last pretzel?
7 D PIPPA: Not me.
8 D DESMOND: She did. There's salt on her chin.
9 A ¶ Pippa wipes her chin with her whole sleeve.
10 D BEATRIX: Pippa.
11 D PIPPA: It was a small pretzel.
12 A ¶ NANA ROSALIND (70s, plastic rain bonnet, enormous purse) pushes in through the swinging door, shaking water off her arms.
13 D NANA ROSALIND: Nobody told me the pool was closed. I swam in the lobby for ten minutes.
14 D DESMOND: You didn't.
15 D NANA ROSALIND: Figuratively.
16 A ¶ Beatrix pours her a coffee.
17 A Nana Rosalind sits, takes Pippa's lone flip-flop, and studies it.
18 D NANA ROSALIND [CONT'D]: Where's the other one?
19 D PIPPA: Lost.
* 20 A ¶ A crackle from the wall speaker.
21 D LIFEGUARD [V.O.] (over intercom): Attention. Someone's goldfish is in the deep end. In a bag. Please claim it.
22 A ¶ Pippa slides off her stool.
23 D PIPPA: Mine.
24 D BEATRIX: You brought a fish to the pool?
25 D PIPPA: He wanted to swim.
26 D DESMOND: It was a good idea, actually.
27 A ¶ Beatrix looks at him, then laughs, helpless.
28 A Nana Rosalind pats her hand.
29 D NANA ROSALIND: Go get the fish, Beatrix. I'll watch the counter.
30 A ¶ A teenager, KOFI MENSAH (16, lifeguard polo, dripping), leans through the pass-through, holding up a sagging bag with a small orange fish.
31 D KOFI: Whose is this? He seems calm.
32 D PIPPA: That's Mr. Bubbles. He's always calm.
33 A ¶ Kofi hands the bag over.
34 A Pippa cradles it like an egg.
35 D BEATRIX: Thank you, Kofi. I'm so sorry.
36 D KOFI: It's the most exciting thing today.
* 37 A ¶ Rain softens on the skylight.
38 A Everyone watches the fish circle once, then settle.

### SCENE s00022 | INT. ABANDONED DRIVE-IN PROJECTION BOOTH - NIGHT
Detected names (may be incomplete or contain aliases): YUSUF HAMDAN, LUCKY, MORROW, BARNABY QUILL, DAHLIA REYES, MAGNUS WICK
* 1 A ¶ A cinderblock room, the size of a closet.
* 2 A A dead projector the color of old teeth squats in the middle.
* 3 A Spray-painted names cover the walls.
* 4 A A battery lantern throws everything into hard shadow.
5 A ¶ YUSUF HAMDAN (17, thin, nervous laugh, a cheap digital camera on a strap) sits on an overturned crate.
6 A Beside him, LUCINDA "LUCKY" MORROW (17, bleached hair, scraped knees) plays with a lighter.
7 A BARNABY QUILL (18, built like a linebacker, soft voice) blocks the doorway.
8 A DAHLIA REYES (16, hoodie, headphones around her neck) holds a flask she shouldn't have.
9 A MAGNUS WICK (17, varsity jacket, too clean) stands apart from them.
10 D LUCKY: You said you'd be here at nine.
11 D MAGNUS: I was here at nine.
12 D DAHLIA: You were not here at nine, I was here at nine, I sat alone for twenty minutes--
13 D YUSUF: It's not a big deal, we're all here now--
14 D LUCKY: It is a big deal! We swore. After graduation, nobody leaves without--
15 D BARNABY: Lucky.
16 D LUCKY: --without saying it to everyone, that's the rule!
17 D MAGNUS: There's no rule. You made it up.
18 D DAHLIA: She did not make it up, we all signed the wall.
19 A ¶ Dahlia jabs a finger at the concrete.
* 20 A Under a layer of paint, five signatures sit in a ragged circle.
21 D YUSUF (trying to joke): Technically, I signed it in marker. Pretty permanent.
22 D MAGNUS: I'm going to Dartmouth. Fine? I got in. It's done. I didn't want to tell you like this.
* 23 A ¶ Silence.
24 A Then everyone speaks at once.
25 D LUCKY: Dartmouth?
26 D BARNABY: You said Ohio State.
27 D DAHLIA: Why would you lie about that?
28 D YUSUF: Congratulations, I guess?
29 D MAGNUS: Because I knew you'd all look like this!
30 A ¶ Barnaby steps in from the doorway.
31 A Magnus doesn't back up.
32 D BARNABY: Like what?
33 D MAGNUS: Like I already left.
34 A ¶ Lucky snaps the lighter shut.
* 35 A The lantern flickers.
36 A Yusuf lifts the camera and, without asking, takes one picture of all of them.
* 37 A ¶ The flash leaves white afterimages.
* 38 A Nobody says anything.

### SCENE s00023 | INT. FREIGHT ELEVATOR, CANNERY - NIGHT
Detected names (may be incomplete or contain aliases): SAUL VERHOEVEN, NADIA PRUITT, EMEKA OSEI
* 1 A ¶ Steel cage.
* 2 A Flickering bulb.
* 3 A Stuck between floors.
4 A ¶ SAUL VERHOEVEN (50s, grey suit, bleeding sleeve) leans on the wall.
5 A NADIA PRUITT (30s, tactical vest, gun lowered) watches the hatch.
6 A Beside her, a young courier, EMEKA OSEI (20s, backpack hugged tight).
7 D NADIA (to everyone): Nobody touches the panel.
8 D EMEKA (quiet, to Saul): Is it bad? Your arm?
9 D SAUL: It's fine, kid.
10 A ¶ Nadia cranes toward the ceiling.
* 11 A Dust drifts down.
12 D NADIA (under her breath): Come on, come on. Not now.
* 13 A ¶ Boots thump overhead.
* 14 A Then stop.
* 15 A Then nothing.
16 D EMEKA: They're gone?
17 D NADIA (to Emeka): Be still.
18 A ¶ Saul slides the backpack from Emeka's arms.
19 A Emeka lets him.
20 D SAUL (to himself): Should've taken the stairs.
* 21 A ¶ The cage lurches.
* 22 A Slowly, it starts to rise.

### SCENE s00024 | EXT. GLACIER CREVASSE LEDGE - DAWN
Detected names (may be incomplete or contain aliases): TOBIAS ANSELM, MARGUERITE DELACROIX-ODUYA, RANGER
* 1 A ¶ A blue throat of ice drops away into dark.
2 A Forty feet down, on a shelf barely wider than a door, a man and a woman cling together in the frozen quiet.
3 A His left leg is bent wrong.
4 A She has one crampon and a rope that ends in frayed threads.
5 A ¶ TOBIAS ANSELM (40s, beard crusted white) tries to sit upright.
6 A He gasps and slides back against the wall.
7 A MARGUERITE DELACROIX-ODUYA (30s, climbing helmet cracked at the brow) crouches beside him, working a splint from a tent pole and webbing.
8 A ¶ She does not look at his face.
9 A She looks at the knot.
10 D TOBIAS: Leave it. Go up.
11 D MARGUERITE (without looking up): Shut up and hold the pole.
12 A ¶ He holds it.
13 A His hands shake.
14 A She pulls the strap tight and he screams, a sound that echoes down and never comes back.
* 15 A ¶ A hiss from her chest pocket.
16 A She freezes, then fumbles out a handheld radio.
17 D RANGER [O.S.] (over radio, thin with static): Team Four, Base. We have you on the thermal. Hold position. Helicopter wheels up in forty.
18 A ¶ Relief breaks across her face.
19 A She laughs, a cracked sound, and kisses the radio.
20 D MARGUERITE (into radio): Copy, Base. Two alive. One leg. Please hurry.
21 D RANGER [O.S.] (over radio): Copy two alive. Wind is picking up on the ridge. Stay low.
22 A ¶ She turns to him, grinning for the first time.
23 D MARGUERITE (to Tobias): Forty minutes. You hear that?
24 D TOBIAS (a whisper): I heard.
25 A ¶ He says it too calmly.
26 A She notices his lips, which are turning grey.
27 A She tears off her glove and presses two fingers to his neck.
28 D MARGUERITE (to herself): No. No no no. Stay with me, you stubborn old goat.
29 A ¶ He opens his eyes.
30 A Faintly, he smiles.
* 31 A ¶ Above them, the ice groans.
* 32 A A fine rain of snow sifts down.
33 A She pulls him against her chest and tucks her jacket around them both.
34 D RANGER [O.S.] (over radio): Team Four, Base. Weather window closing. Say again your status.
35 A ¶ She stares at the radio, then at the dark beyond the ledge.
36 A She keys it.
37 D MARGUERITE (into radio): Base, we are not going anywhere. Tell them to hurry.
38 A ¶ She sets the radio on his chest, where he can hear it.
* 39 A The ice groans again, and this time something far below answers.

### SCENE s00025 | INT. MOBILE SURGICAL TRUCK, FAIRGROUND - NIGHT
Detected names (may be incomplete or contain aliases): IMELDA CASTELLANOS-BRIGHT, TOOTS, VASSILIEV, WENDELL, DISPATCH
* 1 A ¶ Steel walls.
* 2 A Fluorescent hum.
* 3 A Outside, a carousel plays a warped waltz.
4 A ¶ DR. IMELDA CASTELLANOS-BRIGHT (50s, silver braid, precise) scrubs at a stainless sink.
5 A Across the narrow room, ANTON "TOOTS" VASSILIEV (30s, medic, tattooed forearms) wheels in a gurney.
* 6 A A sheet covers the shape on it.
7 D IMELDA: Toots. Slower.
8 D TOOTS: Sorry, Doc. Floor's uneven.
9 D IMELDA: It's a truck in a field. Everything's uneven.
10 A ¶ Toots locks the gurney.
* 11 A The carousel music thins, then swells.
12 D TOOTS: Vitals are stable. Pressure's low, but he's talking.
13 D IMELDA: Who is he?
14 D TOOTS: Calls himself Wendell. Fell off the Ferris wheel.
15 D IMELDA: Fell.
16 D TOOTS: That's his word.
17 A ¶ Imelda dries her hands.
18 A She folds the sheet back.
19 A WENDELL (60s, pale, cheerful, fairground jacket) squints up at the lights.
20 D WENDELL: Hello, hello. Don't go to any trouble.
21 D IMELDA: Mr. Wendell, I'm Dr. Castellanos-Bright. Where does it hurt?
22 D WENDELL: Nowhere, really. Funny that.
23 D IMELDA (to Toots): Pain meds?
24 D TOOTS: None. He refused.
25 D IMELDA: Refused?
26 D WENDELL: I like to feel where I am.
27 A ¶ She checks his pupils.
28 A He follows her light with unnerving ease.
29 A Toots shifts on his feet.
30 D TOOTS: Doc, a word?
31 D IMELDA: Say it here.
32 D TOOTS: It's not a thing for here.
33 A ¶ She holds his gaze.
34 A Then she walks him to the corner, out of Wendell's earshot.
35 D IMELDA (low): What.
36 D TOOTS: Fall was sixty feet. He landed on concrete.
37 D IMELDA: And?
38 D TOOTS: Nothing's broken. Not a rib. Not a bruise.
39 A ¶ Imelda looks back at Wendell.
40 A He waves.
41 D IMELDA: Then he's lucky.
42 D TOOTS: Doc, I felt for a pulse four times. I couldn't find one.
* 43 A ¶ The radio on the wall CRACKLES.
44 D DISPATCH [V.O.] (over radio): Mobile Two, dispatch. Ambulance en route, ETA fifteen. Say your patient's condition.
45 A ¶ Imelda keys the radio, eyes on Wendell.
46 D IMELDA (into radio): Dispatch, patient is stable. Repeat, stable.
47 D DISPATCH [V.O.] (over radio): Copy. Be advised, caller says the Ferris wheel victim was pronounced at the scene. Please confirm identity.
* 48 A ¶ Silence.
* 49 A The carousel waltz winds down to a single note.
50 D TOOTS: Doc.
51 D IMELDA: I heard.
52 A ¶ She turns.
53 A Wendell is sitting up, the sheet pooled at his waist.
54 A He's still smiling.
55 A His chest does not rise or fall.
56 D WENDELL: Dr. Castellanos-Bright. I think I'd like some of that pain medicine after all.
57 D IMELDA (slowly): Why's that, Mr. Wendell?
58 D WENDELL: Because it's starting.
59 A ¶ He looks down at his hands.
60 A They are going translucent, like wax over a flame.
61 D TOOTS (whispering): Doc, back away.
62 A ¶ Imelda doesn't.
63 A She reaches out and takes Wendell's hand, which is already cooling.
64 D IMELDA: Toots, tell dispatch to cancel the ambulance.
65 D TOOTS: Doc--
66 D IMELDA (not looking away): Tell them he's been pronounced.
67 A ¶ Toots stares at her.
68 A Then he lifts the radio, and his voice breaks.
69 D TOOTS (into radio): Dispatch, Mobile Two. Cancel the ambulance.
70 D WENDELL: Thank you for staying.
* 71 A ¶ The sheet settles over an empty gurney.
* 72 A Outside, the carousel starts again from the beginning.

### SCENE s00026 | INT. PIGEON LOFT, ROOFTOP - DAWN
Detected names (may be incomplete or contain aliases): STASYS BIRKAVS, DONNIE FUSCO, FAT LEO ARMBRUSTER
* 1 A ¶ Cooing.
* 2 A Feathers.
* 3 A Three men in a cage of chicken wire.
4 A ¶ STASYS BIRKAVS (50s, flat cap, careful) feeds grain from a tin.
5 A DONNIE FUSCO (30s, tracksuit) and FAT LEO ARMBRUSTER (40s, enormous, quiet) sit on upturned buckets.
6 D STASYS: Nobody here is angry. Understand?
7 D DONNIE: Nobody's angry.
8 D STASYS: The money is a number on paper. I like birds more than numbers.
9 D LEO (muttering): Birds don't lend.
10 D STASYS: No. They return. That is the difference.
11 D DONNIE (to the room): So we're square? Everyone square?
12 D STASYS (smiling): Of course. Leo, the bucket.
13 A ¶ Leo lifts his bucket.
* 14 A Underneath, a revolver, and beneath that, an envelope fat with cash.
15 A Donnie's smile slides off his face.

### SCENE s00027 | EXT. FROZEN ORCHARD OF GLASS APPLES - DUSK
Detected names (may be incomplete or contain aliases): WILHELMINA THRALE, FINN CARRAWAY
* 1 A ¶ A hillside of trees that grew crystal fruit and never stopped.
* 2 A Every apple holds a small captured flame.
* 3 A The snow around them glows amber.
4 A ¶ WILHELMINA THRALE (70s, thick gray cloak, a ladder strapped to her back) climbs to the highest branch.
5 A She plucks one apple, careful as a surgeon, and drops it into her satchel.
* 6 A It does not clink.
* 7 A It purrs.
8 A ¶ Below her, a boy waits.
9 A FINN CARRAWAY (11, bare ears, no gloves) holds the base of the ladder.
10 D WILHELMINA: You've not eaten.
11 D FINN: I'm fine.
12 D WILHELMINA: There's bread in my left pocket.
13 A ¶ Finn doesn't reach for it.
14 A Instead, he stares at the apples, his breath fogging.
15 D FINN: They're getting dimmer.
16 D WILHELMINA: They do, in winter.
17 D FINN: Mam says they were bright all year, when Da was alive.
18 A ¶ Wilhelmina lowers herself rung by rung.
19 A At the bottom she stands quietly beside him, close enough that her cloak brushes his shoulder.
20 D WILHELMINA: Your Da climbed this ladder every night.
21 A ¶ Finn picks at a thread on his sleeve.
22 D FINN: Did he ever fall?
23 D WILHELMINA: Twice. Never told your mother.
24 A ¶ Finn almost smiles.
25 A He takes the bread from her pocket without asking and breaks it in two, offering her the bigger half.
26 A ¶ She takes the smaller.
27 A He pretends not to notice.
* 28 A ¶ An apple above them flares, bright as noon, then settles into a soft glow.
29 A They both look up.
30 D FINN: Was that him?
31 A ¶ Wilhelmina folds the cloak tighter around the boy's shoulders.
32 A She says nothing.
33 A She keeps her hand there.

### SCENE s00028 | INT. BACKSTAGE, SUBMARINE-THEMED MUSEUM GIFT SHOP - NIGHT
Detected names (may be incomplete or contain aliases): ELOISE VANTERPOOL, ROMAN ASTOR-LIN, HESTER PENHALLOW, COLM BRADSHAW
* 1 A ¶ A cramped storeroom of plush squid, periscope keychains, and cardboard boxes marked FRAGILE.
* 2 A A string of party lights hangs over a folding table of wilting cupcakes.
3 A ¶ ELOISE VANTERPOOL (30s, rolled-up sleeves, name tag reading "Ask Me About Barnacles") counts stock with a clicker.
4 A At the doorway, ROMAN ASTOR-LIN (30s, rumpled blazer, wet from the rain) lingers with a bouquet of grocery-store carnations.
5 D ROMAN: Hi.
6 D ELOISE: You're late.
7 D ROMAN: I know.
8 D ELOISE: By three years, in fact.
9 D ROMAN (quietly): I know.
10 A ¶ She keeps clicking.
11 A He sets the carnations on the table, beside a cupcake that has "CONGRATS" piped across it in blue.
12 D ROMAN [CONT'D]: Whose party?
13 D ELOISE: Retirement. Dr. Penhallow. Thirty-one years of squid.
14 D ROMAN: I came to see you.
15 D ELOISE: Ro, don't.
16 D ROMAN: Eloise, listen. I didn't leave because I wanted to. My mother got sick, I flew to Singapore, and every time I tried to write the letter it came out like a lie. So I stopped trying. And then it was a year. And then it was too long.
17 D ELOISE: You could have called.
18 D ROMAN: I could have done a lot of things. I'm not asking you to forgive me. I'm only asking you to let me stand here for a minute.
19 A ¶ She stops clicking.
20 A She sets the clicker down and finally turns.
21 D ELOISE: Your mother?
22 D ROMAN: She passed in March.
23 D ELOISE (softer): I'm sorry.
24 D ROMAN: Thank you.
25 D ELOISE: Ro...
26 D ROMAN: Yeah?
27 D ELOISE: You still have that stupid scarf?
28 D ROMAN (laughing, relieved): It's in the car.
* 29 A ¶ Laughter from the corridor.
30 A A door bangs open and a crowd of coworkers fills the storeroom with noise.
31 A At the front, a new arrival: DR. HESTER PENHALLOW (60s, tweed, bow tie shaped like a seahorse), glowing with champagne.
32 D PENHALLOW: Eloise! There you are! Is this the famous Roman?
33 D ELOISE (blushing): Dr. Penhallow, he's not--
34 D PENHALLOW: You've been talking about him for three years. Have a cupcake, dear boy.
35 A ¶ Roman looks at Eloise.
36 A She does not meet his eyes, but she does not deny it.
37 D ROMAN: Thank you. I will.
38 A ¶ Behind them, a grinning intern, COLM BRADSHAW (20s, lanyard, hopeful), holds up a phone.
39 D COLM: Group photo! Everyone squeeze in!
40 A ¶ Eloise steps beside Roman.
41 A Their shoulders touch.
42 A Neither moves away.
43 D ELOISE (low): You're buying dinner.
44 D ROMAN (low): Anything.
45 D ELOISE (low): Anywhere?
46 D ROMAN (low): Anywhere.
* 47 A ¶ Colm's flash goes off.
48 A For one frame, they are both laughing.
49 D PENHALLOW: Lovely. Now, who wants to hear about the giant squid?
50 A ¶ Groans from everyone.
51 A Eloise leans against Roman and whispers.
52 D ELOISE: Run.
53 A ¶ They slip out through the storeroom's back door.
* 54 A The party lights keep swaying behind them.

### SCENE s00029 | INT. AIR TRAFFIC CONTROL TOWER, SMALL REGIONAL AIRPORT - NIGHT
Detected names (may be incomplete or contain aliases): OZZIE, FAIRWEATHER, PRU, MARTIN ESPERANZA, JUNE TAKAHASHI, PILOT
* 1 A ¶ A glass-walled octagon above a dark runway.
* 2 A Radar scope glows green.
* 3 A A cold cup of coffee sits beside a ham sandwich with one bite out of it.
4 A ¶ OSWALD "OZZIE" FAIRWEATHER (60s, headset, cardigan) sits at the console, steady and unhurried.
5 A Next to him stands his granddaughter, PRUDENCE "PRU" FAIRWEATHER (17, school uniform, backpack), holding a notebook.
6 A She is supposed to be doing homework.
7 A She is not.
* 8 A ¶ Two others fill the cramped room.
9 A One is MARTIN ESPERANZA (30s, shift supervisor, tie loosened), who hovers over the radar.
10 A The other is a trainee, JUNE TAKAHASHI (19, apron over uniform, nervous), who clutches a clipboard.
11 D OZZIE: Pru, if you're going to watch, watch properly. Come around here.
12 D PRU: Grandpa, I'm fine.
13 D OZZIE: Come on.
14 A ¶ She steps beside him.
15 A He nods to the scope.
16 D OZZIE [CONT'D]: That blip is a Cessna. November-Four-Two-Seven. See how she drifts?
17 D PRU: Why?
18 D OZZIE: Crosswind. He's fighting it.
19 A ¶ Pru leans closer.
20 A Her breath fogs the glass.
21 D PILOT [V.O.] (over radio, crackling): Tower, Cessna Four-Two-Seven, ten miles out, requesting landing.
22 A ¶ Ozzie squeezes the mic.
23 D OZZIE (into radio): Four-Two-Seven, Tower, runway two-seven, wind two-six-zero at eighteen gusting twenty-five. Say your fuel state.
24 D PILOT [V.O.] (over radio): Tower, Four-Two-Seven, thirty minutes of fuel. We're good.
25 D MARTIN (muttering): Thirty minutes. In that wind.
26 D JUNE: Should I call the fire crew?
27 D MARTIN: Not yet.
28 A ¶ Ozzie hands the headset to Pru.
29 D PRU: Grandpa, no.
30 D OZZIE: Just say what I say. "Four-Two-Seven, cleared to land."
31 A ¶ She hesitates, then pulls the headset on.
32 A Her voice shakes.
33 D PRU (into radio): Four-Two-Seven, cleared to land.
34 D PILOT [V.O.] (over radio): Cleared to land, Four-Two-Seven. Who's this? You sound young.
35 D PRU: Um. I'm... training.
36 D PILOT [V.O.] (over radio): Good job, trainee. See you on the ground.
37 A ¶ Pru stares at her grandfather, wide-eyed.
38 A He chuckles and pats her shoulder.
39 D OZZIE: Eyes on the scope, Pru. That's the whole job.
* 40 A ¶ Below them, tiny landing lights wobble through the dark, steadying, lowering.
41 A They all watch it touch down.

### SCENE s00030 | INT. BEEKEEPER'S KITCHEN - MORNING
Detected names (may be incomplete or contain aliases): FLORIAN ACHTERBERG, MAREN, EZRA, ODALYS
* 1 A ¶ Honey-gold light slants through a window crusted with propolis.
* 2 A On the table, a cracked jar leaks slow amber across oilcloth.
3 A FLORIAN ACHTERBERG (70s, veil pushed back, hands like roots) stands rigid at the stove.
4 A His daughter MAREN (40s, city coat, car keys still in her fist) has not sat down.
5 A At the table, her son EZRA (9, scabbed elbows) hides behind a comic book, while his aunt ODALYS (50s, flour on her apron) pretends to knead dough.
6 D MAREN: You sold the north hives without telling me.
7 D FLORIAN: They were mine to sell.
8 D ODALYS: Maren, sit. There's tea.
9 D MAREN: I don't want tea. Dad, those were Mom's.
10 D FLORIAN: Your mother is dead eleven years. The bees don't know it.
11 D EZRA (from behind the comic): Are we fighting?
12 D ODALYS: No, sweetheart. We're discussing.
13 D MAREN: I drove six hours. I thought you were sick.
14 D FLORIAN: I am old. It's the same thing.
15 D MAREN (breaking): You could have asked me.
16 D FLORIAN: And you would have said keep them. And I would have kept them. And they would have died, because I can't lift the supers anymore.
* 17 A ¶ Silence.
* 18 A A single bee drifts across the room and lands on the leaking jar.
19 D ODALYS: Ezra, bring me the dish towel.
20 A ¶ He does.
21 A Maren sits at last.
22 A Florian turns from the stove, picks up the jar, and sets it in front of her.
23 D FLORIAN: Taste.
24 D MAREN: Dad.
25 D FLORIAN: Taste it.
26 A ¶ She dips a finger.
27 A Her face softens as she tastes, and she covers her mouth with her wrist.
28 D MAREN: It's hers.
29 D FLORIAN: The last of the north. I saved it for you.

### SCENE s00031 | INT. CLOCKMAKER'S GUILD VAULT ANTECHAMBER - NIGHT
Detected names (may be incomplete or contain aliases): SECOND MAN, JANITOR, GUARD, DWYER, STRANGER
* 1 A ¶ Marble floor.
* 2 A Brass pendulums under glass domes, swinging out of sync.
* 3 A A time lock gleams on a steel door.
4 A ¶ A MAN in a janitor's coverall mops, eyes down.
5 A He is tall, mid-40s, with a limp.
6 A Behind him, a second MAN in a security blazer, younger, wide-shouldered, scrolls a tablet.
7 A ¶ The janitor stops mopping and glances at the guard.
8 A The guard doesn't look up.
9 D JANITOR: Quiet shift.
10 D GUARD: Don't talk to me while I'm working.
11 D JANITOR: Right.
12 A ¶ He mops closer to the door.
13 A His mop handle taps the lock panel, twice, a soft tick.
14 D GUARD: Hey. What was that?
15 D JANITOR: Nothing. Sorry.
16 A ¶ The guard approaches, tablet lowered.
17 A The janitor straightens.
18 A Their eyes meet.
19 D GUARD: I don't think I know you.
20 D JANITOR: Third week. Night crew.
21 D GUARD: Name?
* 22 A ¶ A beat.
* 23 A Somewhere, a pendulum clicks.
24 A The janitor's hand slips into his bucket.
25 D JANITOR: Cormac Dwyer.
26 D GUARD (reading from tablet): There's no Dwyer on the roster.
27 D DWYER (calmly): No. There isn't.
28 A ¶ He pulls a taser from the bucket and fires.
29 A The guard drops.
30 A Dwyer kneels, takes his keycard, and turns to the pendulums.
31 A ¶ At the far end of the room, a SECOND MAN has stood watching from the shadows the entire time: a thin figure in a clockmaker's apron, silver hair, spectacles.
32 A He steps forward.
33 D STRANGER: You're early.
34 D DWYER (not surprised): You said midnight.
35 D STRANGER: I said twelve-oh-three. He walks the floor at twelve-oh-two.
36 D DWYER: Then he's dead on schedule.
37 A ¶ The stranger smiles, tucks a loupe into his pocket, and removes a key from around his neck.
38 D STRANGER: Call me Aurelio.
39 A ¶ AURELIO inserts the key.
* 40 A The vault door sighs open on a room of ticking gold.

### SCENE s00032 | EXT. SALT FLATS WAGON STOP - NOON
Detected names (may be incomplete or contain aliases): HANNAH DELACROIX, ZEKE, MARSHAL TOBIAS GRAINGER
* 1 A ¶ White ground.
* 2 A White sky.
* 3 A A single wagon with a cracked wheel.
* 4 A A water barrel under a tarp.
* 5 A The heat shimmers like paper held over a flame.
6 A ¶ HANNAH DELACROIX (30s, dust-caked bonnet, rifle across her knees) sits on the wagon tongue.
7 A Her husband EZEKIEL "ZEKE" DELACROIX (30s, bandaged hand) paces the barrel.
8 A Across the flats, a lone rider approaches slowly, leading a second horse: MARSHAL TOBIAS GRAINGER (50s, gray duster, tin star scratched with age).
9 A ¶ Grainger reins up, tips his hat.
10 D GRAINGER: Afternoon.
11 D HANNAH: Marshal.
12 D ZEKE: Afternoon.
13 D GRAINGER: Looks like a wheel gave out.
14 D HANNAH: It did.
15 D GRAINGER: I could help.
16 D ZEKE: We're fine.
17 A ¶ Grainger swings down.
18 A He pats his horse.
19 A He looks at the barrel, the rifle, Zeke's bandaged hand.
20 D GRAINGER (to Zeke): Cut yourself?
21 D ZEKE: Rope.
22 D GRAINGER: Funny. Rope burns look different from teeth.
23 A ¶ Hannah's finger moves toward the trigger.
24 A Zeke's jaw works.
25 D HANNAH: Marshal, you're welcome to water.
26 D GRAINGER: That's kind. I'm not thirsty.
27 A ¶ He walks to the back of the wagon and lifts the tarp.
* 28 A Underneath: a canvas sack, dark with dried stains.
29 D GRAINGER [CONT'D] (to himself): Well, now.
30 D ZEKE: Let it be, Marshal.
31 D HANNAH: Let it be.
32 A ¶ They say it together, flat and fast.
33 D ZEKE [CONT'D]: ^We didn't kill him for the money.
34 D HANNAH: ^He came for the children.
35 A ¶ Grainger lets the tarp fall.
* 36 A The wind lifts a thin curtain of salt.
37 D GRAINGER (to the flats): Hell of a place to find out you were right.
38 A ¶ He unbuckles his gun belt and drops it in the dust.
39 D GRAINGER [CONT'D] (to Hannah): Put that rifle down, ma'am. I'm only going to sit.
40 A ¶ She doesn't.
41 A He sits anyway.

### SCENE s00033 | INT. LAUNDROMAT - DAY
Detected names (may be incomplete or contain aliases): PERPETUA DUNMORE, BART, CASSIDY, IMOGEN FAIRBANKS, MANAGER
* 1 A ¶ Rows of humming dryers.
* 2 A Fluorescent lights.
* 3 A A television bolted high on the wall plays a cooking show with the sound off.
4 A ¶ PERPETUA DUNMORE (50s, bright cardigan, folding towels with military precision) works at a table.
5 A Nearby, her nephew BARTHOLOMEW "BART" CASSIDY (20s, wrinkled hoodie, guitar case) sits on a dryer, scrolling his phone.
6 A At the vending machine, a stranger, IMOGEN FAIRBANKS (30s, crisp suit, rolling suitcase), feeds coins into the slot.
7 D PERPETUA: Bart, get off the dryer.
8 D BART: It's off.
9 D PERPETUA: The principle is on.
10 D IMOGEN (to the machine): Come on, come on.
* 11 A ¶ The machine rattles.
* 12 A A bag of pretzels hangs from the spiral, refusing to drop.
13 D BART: You have to shake it.
14 D IMOGEN: I'm not shaking a vending machine.
15 D PERPETUA: Everyone shakes the vending machine.
16 D IMOGEN: I have a flight in two hours.
17 D BART: Then shake it faster.
18 A ¶ Imogen glares, then grips the machine and rocks it.
* 19 A The pretzels fall.
20 A She straightens her blazer with great dignity.
21 D PERPETUA: ^Nicely done.
22 D BART: ^Nicely done.
23 A ¶ They say it at the same time and look at each other, startled.
24 A Imogen fights a smile.
* 25 A ¶ A voice crackles from the ceiling speaker.
26 D MANAGER [V.O.] (over intercom): Attention customers. Machine seven is on fire. Machine seven is on fire. This is not a drill.
27 A ¶ Everyone turns.
* 28 A Machine seven is, in fact, on fire.
* 29 A A thin orange flame licks the lint trap.
30 D PERPETUA: Of course it is.
31 D BART: Water?
32 D IMOGEN (heading for the door): I'm not paid for this.
33 D BART: Nobody is!
34 A ¶ Perpetua drags a bucket across the floor and dumps it in.
* 35 A The fire dies with a sad hiss.
* 36 A A single towel drifts out, charred and smoking.
37 D IMOGEN (from the doorway): Is this a regular occurrence?
38 D PERPETUA: Tuesdays.
39 A ¶ Imogen laughs despite herself, tears open her pretzels, and offers one to Bart.

### SCENE s00034 | INT. SALT-PORK STORAGE LOFT, SHIPYARD - EVENING, 1840s
Detected names (may be incomplete or contain aliases): CAPTAIN EZEKIAL HOLLOWAY, SILAS PETHERBRIDGE, OLUWASEUN ADEBAYO, ABIGAIL FINCH, JEREMIAH TUCKER, THEODORE VANE
* 1 A ¶ A low-beamed room smelling of tar and brine.
* 2 A Barrels line the walls.
* 3 A A single oil lamp casts a shaky circle on the planks.
* 4 A Rain drums the roof.
5 A ¶ Six figures sit on barrel tops around a makeshift table of planks.
6 A ¶ CAPTAIN EZEKIAL HOLLOWAY (50s, weathered, grey queue) presides.
7 A Beside him is his first mate, SILAS PETHERBRIDGE (30s, red whiskers, cheerful).
8 A Across from them sits the shipwright, OLUWASEUN ADEBAYO (40s, broad-shouldered, leather apron).
9 A Next to him, the ship's cook, MRS. ABIGAIL FINCH (60s, spectacles, sleeves rolled).
10 A At the end, young cabin boy JEREMIAH TUCKER (13, freckled, wide-eyed).
11 A Lastly, the agent, MR. THEODORE VANE (40s, black coat, ink-stained fingers) sits stiffly apart.
12 D HOLLOWAY: Gentlemen. Madam. We sail Thursday if the weather holds.
13 D PETHERBRIDGE: It won't, Captain.
14 D HOLLOWAY: It will if I will it so.
15 D ADEBAYO: The hull will hold. The cargo is another question.
16 D VANE: The cargo is insured.
17 D FINCH: Insured against what, Mr. Vane? A woman cannot pickle a drowned ship.
18 D VANE: Against everything, Mrs. Finch.
19 D PETHERBRIDGE: Except honesty.
20 D JEREMIAH: Sir, what is the cargo?
* 21 A ¶ Silence.
22 A Vane looks to Holloway.
23 A Holloway looks at his hands.
24 D HOLLOWAY: Tea, boy.
25 D JEREMIAH: Only tea?
26 D ADEBAYO (gently): Tea and what comes with it.
27 D VANE: Mr. Adebayo, I would remind you of your contract.
28 D ADEBAYO: I made the contract in good faith. I did not know the ship was meant for Lisbon.
29 D FINCH: Lisbon.
30 D VANE: A port like any other.
31 D PETHERBRIDGE: Not for what we carry.
32 D HOLLOWAY: Enough.
* 33 A ¶ A long pause.
* 34 A Rain on the roof.
35 D JEREMIAH: I don't mind, sir. I can keep quiet.
36 D FINCH (softly): That, child, is exactly what worries me.

### SCENE s00035 | INT. FROZEN FOOD WAREHOUSE, WALK-IN FREEZER - NIGHT
Detected names (may be incomplete or contain aliases): ROZ, PETKOVIC, DENNIS ABERNATHY-VOSS, LAZARUS BELL
* 1 A ¶ Steel racks of frosted boxes.
* 2 A A vapor cloud rolls off every breath.
* 3 A The door is frozen shut.
4 A ¶ ROSALIND "ROZ" PETKOVIC (30s, thermal jacket, night inventory clipboard) crouches beside the door, pounding the latch.
5 A Behind her, her coworker DENNIS ABERNATHY-VOSS (40s, beard stiff with frost) paces the aisle.
6 A Between them, hunched on a pallet of peas, sits a stranger in a soaked tuxedo: LAZARUS BELL (50s, slow-blinking, shivering).
7 D ROZ: It's jammed!
8 D DENNIS: Hit it harder!
9 D ROZ: I am hitting it!
10 A ¶ Dennis shoves her aside and throws his shoulder into the door.
* 11 A It doesn't budge.
12 A They both slump against it, panting.
13 A ¶ Lazarus lifts his head.
14 D LAZARUS: It will not open.
15 D DENNIS: Who the hell are you?
16 D LAZARUS: A man in the wrong place.
17 D ROZ: How did you get in here?
18 D LAZARUS: I walked in. Hours ago. Perhaps days.
19 D DENNIS: Days? We've been here forty minutes.
20 D LAZARUS: You have been here forty minutes. I have been here longer.
21 A ¶ He stands.
22 A His breath doesn't fog.
23 A Roz sees it first and backs away, clipboard hugged to her chest.
24 D ROZ: Dennis.
25 D DENNIS: What?
26 D ROZ: Look at his breath.
27 A ¶ Dennis looks.
28 A Lazarus smiles, apologetic, and spreads his hands.
29 D LAZARUS: I have found it is easier not to tell people.
30 D DENNIS: Tell people what?
31 D LAZARUS: Only that it does not get warmer. That is all.
32 A ¶ Roz grabs Dennis by the sleeve and they both charge the door again, slamming into it together, again and again, until it cracks and bursts open on a blast of loading-dock air.
33 A ¶ They tumble out onto asphalt.
34 A Roz scrambles to look back.
* 35 A ¶ The freezer door swings gently shut.
36 A Through the shrinking gap, Lazarus raises a hand in farewell.

### SCENE s00036 | INT. FAMILY STATION WAGON, PARKED OUTSIDE A PLANETARIUM - NIGHT
Detected names (may be incomplete or contain aliases): STRANGER, GIRL, JOSEPHINE, MAEVE, DESMOND
* 1 A ¶ Rain beads the windshield.
* 2 A The dashboard clock reads 7:52.
* 3 A Across the street, the planetarium dome glows a soft blue, waiting for a show that has already begun.
4 A ¶ In the driver's seat, a man in a thin wool coat grips the wheel, his eyes fixed on the building.
5 A This is the STRANGER: late forties, heavy-lidded, thoughtful.
6 A In the back seat, a girl of ten sits cross-legged, her ticket pinched between two fingers.
7 A She watches him in the rearview mirror and says nothing.
8 A ¶ The man draws a breath to speak.
9 A Doesn't.
10 A ¶ The girl unbuckles, leans forward between the seats.
11 D GIRL: We're late.
12 D STRANGER: I know.
13 D GIRL: Mom says you're always late.
14 D STRANGER (a small laugh): Your mother is usually right.
15 D GIRL: Is that why she left?
16 A ¶ He doesn't answer.
* 17 A A raindrop slides down the glass.
* 18 A The windshield wipers sweep once, twice.
19 D STRANGER: What do you want me to say, Josephine?
20 D JOSEPHINE (shrugging): Just say a true thing.
21 A ¶ The man looks at her, startled.
22 A Something in his shoulders loosens.
23 D STRANGER: All right. I don't know how to do this. I've never known. I walk into rooms and everyone's already decided who I am.
24 D JOSEPHINE: You're my dad.
25 D STRANGER: Yes.
26 D JOSEPHINE: That's all you have to be.
* 27 A ¶ His phone buzzes on the dashboard.
* 28 A A name lights the screen: MAEVE.
29 A He lets it ring.
30 D JOSEPHINE [CONT'D]: Aren't you going to get it?
31 D STRANGER: Later.
* 32 A ¶ The phone goes silent, then buzzes again.
33 A Josephine reaches over and answers it for him, putting it on speaker.
34 D MAEVE [V.O.] (over phone, tense): Desmond? Is she with you? The planetarium said you never checked in.
35 D DESMOND (clearing his throat): She's here, Maeve. We're in the car.
36 D MAEVE [V.O.] (over phone): In the car? It started at seven.
37 D DESMOND: I know. I got us lost. And then I just... sat here.
* 38 A ¶ A pause on the line.
* 39 A Rain on the roof.
40 D MAEVE [V.O.] (over phone, softer): Is she okay?
41 D JOSEPHINE: ^I'm okay.
42 D DESMOND: ^She's okay.
43 A ¶ They say it at the same time.
44 A Desmond glances at his daughter.
45 A She smiles.
46 D MAEVE [V.O.] (over phone): Then go in. They'll let you in late. Tell them it's my fault.
47 D DESMOND: It isn't.
48 D MAEVE [V.O.] (over phone): Just go, Des.
* 49 A ¶ The call ends.
50 A Desmond sets the phone down very gently, as if it might break.
51 D JOSEPHINE: So?
52 D DESMOND: So.
53 A ¶ He opens his door.
* 54 A The rain is barely more than mist.
55 A He walks around, opens hers, and offers his hand.
56 A She takes it.
57 D DESMOND [CONT'D]: Let's go look at the sky.
58 A ¶ They cross the street together, small under the glowing dome.

### SCENE s00037 | INT. NATURAL HISTORY MUSEUM, DINOSAUR HALL - NIGHT
Detected names (may be incomplete or contain aliases): CASSIUS OBAYOMI, RENATA VOSKUIJLEN, FONZ, MARBURY, PALOMA TREVINO-HALE, GUSTAV LINDQVIST, QUINCY ABERNATHY, GUARD, ROLAND PIKE
* 1 A ¶ A cathedral of bones.
* 2 A A Diplodocus skeleton arches over the central floor.
* 3 A Moonlight pours through high windows.
* 4 A Somewhere a pipe drips.
* 5 A ¶ A service door clicks open.
6 A Six figures in black filter in, silent as cats: CASSIUS OBAYOMI (40s, crew boss, headset), RENATA VOSKUIJLEN (30s, safecracker, tool roll), ILDEFONSO "FONZ" MARBURY (20s, climber, harness), PALOMA TREVINO-HALE (30s, hacker, laptop bag), GUSTAV LINDQVIST (60s, forger, silk gloves), and QUINCY ABERNATHY (20s, driver, nervy).
7 D CASSIUS (whispering): Clock's running. Eleven minutes.
8 A ¶ Renata crosses to a glass case under the skeleton's ribs, where a fossilized egg sits on velvet.
9 A Fonz clips a line to the beam above and begins to ascend.
10 A Paloma kneels beside a wall panel, jacks in, and her screen scrolls green code.
11 A Gustav circles the display, comparing the egg to a photograph in his palm, while Quincy hovers at the doorway, watching the corridor with his heart in his throat.
12 D PALOMA: Cameras are looped.
13 D CASSIUS: Fonz?
14 D FONZ (from above): Almost. Bone's slick.
15 A ¶ Renata pries the lock.
16 A It pops.
17 A She lifts the lid and Gustav, with trembling gloved hands, swaps the real egg for a copy, but a sharp CLICK echoes from the corridor and Quincy swallows, Fonz freezes in mid-swing, Paloma shuts her laptop, and Renata drops flat behind the case.
18 D QUINCY (hissing): Guard. Coming this way.
19 D CASSIUS: Positions.
20 A ¶ Fonz hauls himself up onto the Diplodocus ribs.
21 A Gustav tucks the real egg inside his coat and melts behind a pillar.
22 A Paloma and Renata slide under a bench, and Cassius presses against the wall beside the door as a flashlight beam swings across the floor.
23 A ¶ A GUARD, a heavyset man in his fifties named ROLAND PIKE, strolls in humming.
24 A He pauses at the case.
25 A He sweeps his light along the glass.
* 26 A A beat.
* 27 A Another.
28 A Cassius raises a fist, ready.
29 D ROLAND (muttering): Dang pigeons.
30 A ¶ He wanders off.
* 31 A His footsteps fade.
32 A The crew exhales as one.
33 A Fonz drops silently to the floor and the six of them regroup near the door.
34 A Cassius counts heads with a finger.
35 D CASSIUS: Out. Now.
36 A ¶ They file through the service door, one by one, Gustav last, cradling the egg like a newborn.
* 37 A ¶ The Diplodocus watches them go.

### SCENE s00038 | INT. FLOODED COMMAND DUGOUT, WESTERN FRONT - DAWN, 1917
Detected names (may be incomplete or contain aliases): MAJOR ALISTAIR PEMBROKE-HUNT, LIEUTENANT SAMUEL ODUYA, SERGEANT DESMOND ARCHIBALD
* 1 A ¶ Timber props.
* 2 A Water to the ankles.
* 3 A A field telephone dangles from a nail.
* 4 A Shells rumble, miles off.
5 A ¶ MAJOR ALISTAIR PEMBROKE-HUNT (40s, immaculate despite the mud, pipe unlit) sits at a map table.
6 A Across from him, LIEUTENANT SAMUEL ODUYA (20s, shaking hands, cracked spectacles) stands at attention.
7 A In the corner, SERGEANT DESMOND ARCHIBALD (50s, scarred jaw, rifle across his lap) polishes a bayonet.
8 D PEMBROKE-HUNT: Sit, Lieutenant.
9 D ODUYA: I'll stand, sir.
10 D PEMBROKE-HUNT: Sit.
11 A ¶ Oduya sits.
* 12 A The water around his boots ripples.
13 D PEMBROKE-HUNT [CONT'D]: At six o'clock, you'll take your platoon over the top.
14 D ODUYA: Sir, the wire isn't cut.
15 D PEMBROKE-HUNT: It will be.
16 D ODUYA: Sir, with respect, the artillery has been wrong three days running.
17 D PEMBROKE-HUNT: Lieutenant, I did not ask for a critique.
18 D ODUYA: No, sir. But my men will ask me why. And I won't have an answer.
19 D ARCHIBALD (quietly, not looking up): Tell them it's an order, lad. It's the only answer anyone's got.
20 D PEMBROKE-HUNT: Thank you, Sergeant.
21 D ARCHIBALD: Don't thank me, sir. I'm only telling the boy what I told the last one.
22 A ¶ Pembroke-Hunt sets down his pencil.
* 23 A For a long moment, the only sound is dripping.
24 D PEMBROKE-HUNT: Lieutenant Oduya. Do you have family?
25 D ODUYA: A mother, sir. In Lagos. And a fiancee in Kent.
26 D PEMBROKE-HUNT: Write to them now. I'll see the letters go out whatever happens.
27 D ODUYA: Thank you, sir.
28 D PEMBROKE-HUNT: That's all.
29 A ¶ Oduya rises, salutes, and wades toward the ladder.
30 A Archibald watches him go, then turns to the Major.
31 D ARCHIBALD: You'll be writing his, sir?
32 D PEMBROKE-HUNT (after a pause): I always do.

### SCENE s00039 | INT. PRIVATE LIBRARY OF A VICTORIAN MANOR - NIGHT
Detected names (may be incomplete or contain aliases): INSPECTOR PHILOMENA CRABTREE, CONSTABLE REGINALD OKAFOR-WELLS, GWENDOLEN SLOANE
* 1 A ¶ Candles gutter.
* 2 A A thunderclap rattles the leaded glass.
* 3 A In the center of the room, a body lies under a red velvet curtain, only a pair of polished shoes showing.
4 A ¶ INSPECTOR PHILOMENA CRABTREE (50s, damp mackintosh, sharp eyes) enters, followed by CONSTABLE REGINALD OKAFOR-WELLS (20s, helmet under his arm).
5 A A third figure waits by the fireplace: the manor's housekeeper, MRS. GWENDOLEN SLOANE (60s, black dress, key ring at her waist).
6 D CRABTREE: Who found him?
7 D SLOANE: I did, Inspector. At half past nine.
8 D CRABTREE: And the door?
9 D SLOANE: Locked from within.
10 D OKAFOR-WELLS: Then how did you get in?
11 D SLOANE: I have a key.
12 D CRABTREE (to Okafor-Wells): Constable, the windows.
13 A ¶ He checks each in turn.
* 14 A Every latch is down.
15 D OKAFOR-WELLS: Sealed, ma'am.
16 A ¶ Crabtree kneels, lifts the curtain, and studies the dead man's face.
17 A A tiny smile crosses hers.
18 D CRABTREE: Mrs. Sloane. Did Lord Ashworth take his evening port?
19 D SLOANE: He did.
20 D CRABTREE: From this decanter?
21 A ¶ She taps a crystal vessel on the mantel.
* 22 A It is empty.
23 D SLOANE: It was full when I left him.
24 D CRABTREE: Constable, the glass.
25 A ¶ Okafor-Wells lifts it with a handkerchief and sniffs.
26 A He recoils.
27 D OKAFOR-WELLS: Almonds.
28 A ¶ Mrs. Sloane's hand tightens on her keys.
29 A Crabtree rises slowly.
30 D CRABTREE: Mrs. Sloane, I don't believe this man was alone when he died.
31 D SLOANE: Inspector, I assure you--
* 32 A ¶ A thump from the bookcase.
33 A All three freeze.
* 34 A The shelf swings inward on a hidden hinge and a gust of cold air blows out every candle but one.
35 A ¶ Crabtree and Okafor-Wells spin toward the opening.
36 A Mrs. Sloane bolts for the door, but Okafor-Wells catches her sleeve and the two of them struggle, keys clattering across the floor.
37 D CRABTREE (calmly): Constable, hold her.
38 D OKAFOR-WELLS: I've got her, ma'am.
39 A ¶ Crabtree raises the last candle toward the dark passage.
40 D CRABTREE (to the dark): You may come out now.

### SCENE s00040 | INT. BOWLING ALLEY SNACK COUNTER - AFTERNOON
Detected names (may be incomplete or contain aliases): PIP, NAKASHIMA, WALTER GRUNDY-BELL, OTIS, CARMELA, CORRADO PELLEGRINO
* 1 A ¶ A sleepy league day.
* 2 A The pins clatter in the distance like a slow applause.
3 A Five people share a booth built for four.
4 A ¶ PRISCILLA "PIP" NAKASHIMA (30s, team captain, sunburnt nose) stirs a milkshake with great concentration.
5 A Next to her, her husband WALTER GRUNDY-BELL (30s, wearing a shirt that says BOWL OR DIE) eats nachos one chip at a time.
6 A Across the table, her brother OTIS (20s, hoodie, headphones) stares into his phone.
7 A Squeezed at the end are the Pellegrinos: elderly twins CARMELA and CORRADO PELLEGRINO (70s, matching cardigans), who have been bowling together since the Truman administration.
8 D PIP: Walter, you promised you'd bowl a hundred.
9 D WALTER: I bowled ninety-eight, Pip.
10 D PIP: That's two short.
11 D WALTER: It was a very good ninety-eight.
12 D OTIS (not looking up): It was a gutter and a prayer.
13 D CARMELA: Corrado, pass the salt.
14 D CORRADO: Carmela, you don't need salt.
15 D CARMELA: I need what I need.
16 A ¶ Corrado slides the shaker across the table.
17 A Carmela and Walter both reach for it at the same time and knock the nachos into Pip's lap.
18 A All five freeze.
19 D PIP (with great calm): Walter.
20 D WALTER: I'll get napkins.
21 D CORRADO: Carmela, you did that.
22 D CARMELA: I did not.
23 A ¶ Otis finally lifts his eyes from the phone, examines the carnage, and returns to the screen without a word.
24 A Pip dabs cheese from her knee and takes a slow, controlled sip of milkshake.
25 D PIP: Next frame, Walter. Hundred or nothing.

### SCENE s00041 | INT. COMPETITIVE PIE-BAKING TENT, COUNTY FAIR - DAY
Detected names (may be incomplete or contain aliases): AGGIE, LINDQUIST-REYES, LONNIE BIGGS, MEI-LING ARROYO, SIGMUND PRATT, DOROTHEA, DELPHINE VASQUEZ-MOORE, JUDGE
* 1 A ¶ Rows of folding tables.
* 2 A Flour hangs in sunbeams like pollen.
* 3 A A banner reads: 87TH ANNUAL PIE CHAMPIONSHIP.
* 4 A A judge's gavel sits next to a bell.
5 A ¶ Six contestants stand behind their pies in tight, silent ranks.
6 A ¶ AGATHA "AGGIE" LINDQUIST-REYES (60s, blue ribbon pinned to apron, jaw set) polishes a lattice crust with a pastry brush.
7 A Beside her, LONNIE BIGGS (40s, sweating through a chef's coat, flour on his eyebrows) arranges cherries with tweezers.
8 A At the next station, the young prodigy MEI-LING ARROYO (16, braids, calm as a monk) lets her pie rest.
9 A Behind them, SIGMUND PRATT (70s, bolo tie, hands tremble) hums a hymn.
10 A At the end of the row, twin sisters DOROTHEA and DELPHINE VASQUEZ-MOORE (50s, identical aprons, identical glares) tap the same rhythm on their tables.
11 A ¶ A JUDGE in a straw boater strolls the line, clipboard in hand.
12 A He stops at Aggie.
13 D JUDGE: Mrs. Lindquist-Reyes. Third time in the final. Nervous?
14 D AGGIE: Never.
15 A ¶ Her brush twitches.
16 A Lonnie watches it twitch.
17 D JUDGE (to Lonnie): And you, young man?
18 D LONNIE: Oh, I'm great. Great! Totally relaxed!
19 A ¶ A cherry rolls off his tweezers and across the table.
20 A He does not move.
* 21 A Everyone watches it roll.
* 22 A It stops against Mei-Ling's pie.
23 A She regards it, then flicks it back to him with one finger.
24 A ¶ The judge raises his bell.
25 D DOROTHEA: ^Don't you dare.
26 D DELPHINE: ^Don't you dare.
27 A ¶ The twins speak as one, to each other.
* 28 A Neither blinks.
29 A The judge rings the bell.
30 A ¶ All six lift their forks like swords.
* 31 A The tent goes still.
32 A Sigmund's hymn gets louder, then stops mid-note.
33 A ¶ The judge cuts into Aggie's pie.
* 34 A Steam rises.
35 A He takes a bite.
36 A Chews.
37 A His face reveals nothing.
38 D JUDGE: Hm.
39 A ¶ Aggie's brush finally falls from her hand.

### SCENE s00042 | INT. FARMHOUSE DINING ROOM, WHEAT HARVEST SUPPER - NIGHT
Detected names (may be incomplete or contain aliases): GRANDFATHER IVAR HALVORSEN, ARNE HALVORSEN, GUNHILD, ASTRID, LEIF, RAMON BEAUMONT-CRUZ
* 1 A ¶ A long pine table sags under platters of ham, corn, and pickled beets.
* 2 A Kerosene lamps.
* 3 A Outside, combines idle in the dark, still warm.
4 A Six people sit shoulder to shoulder, and nobody has touched the food.
5 A ¶ At the head of the table sits GRANDFATHER IVAR HALVORSEN (80s, overalls pressed for the occasion, a hearing aid whistling softly).
6 A His son ARNE HALVORSEN (50s, sunburnt neck, silent) cuts bread with great deliberation.
7 A Arne's wife GUNHILD (50s, hair pinned too tight) refills a water glass that is already full.
8 A Across from them their daughter ASTRID (20s, city shoes, suitcase by the door) stares at her plate.
9 A Beside her sits her younger brother LEIF (15, braces, a bruise under one eye), and at the foot of the table, farmhand RAMON BEAUMONT-CRUZ (30s, borrowed shirt, hat in lap) looks anywhere but at the family.
10 A ¶ Arne finishes slicing.
11 A The knife stays in his hand.
12 D ARNE: Pass the beets.
13 A ¶ Astrid passes the beets.
14 A Her fingers shake.
15 A Gunhild reaches, touches her daughter's wrist, and pulls back as if burned.
16 D IVAR (too loudly): What's that?
17 D ARNE: Nothing, Pa.
18 D IVAR: What's she doing here?
19 D ARNE: Eating supper.
20 A ¶ Leif knocks over the salt.
* 21 A Nobody moves to clean it.
22 A Ramon sets his hat on the table, then takes it back, then folds it in his lap again.
23 D ASTRID: I'm only here for the night.
24 D ARNE: The night is long.
25 A ¶ He lays the knife on the cloth.
* 26 A It points directly at her.
27 A She looks at it.
28 A Then at him.
29 A Then she picks up her fork and, very carefully, begins to eat.

### SCENE s00043 | INT. CURLING CLUB LOUNGE, SECOND-FLOOR VIEWING GLASS - EVENING
Detected names (may be incomplete or contain aliases): HADLEY BRANTFORD, ABDULLAH FARRUKH, WINNIE, SOLBERG, ARCHIE, TWOMBLY, DISPATCH
* 1 A ¶ The rink below glows blue-white.
* 2 A Granite stones glide silently across ice.
* 3 A A scoreboard reads END 9 / TIED 4-4.
* 4 A The lounge is a warm cave of wood paneling, trophies, and a single fan whirring pointlessly.
5 A ¶ HADLEY BRANTFORD (40s, team skip, wool sweater, thermos of something stronger than tea) leans on the railing.
6 A Behind her, on a leather couch, her teammates ABDULLAH FARRUKH (30s, sweeper, ice-burned cheeks) and WINIFRED "WINNIE" SOLBERG (20s, rookie, ponytail, quivering) sit with their brooms across their laps.
7 A At the bar, a retired champion, ARCHIBALD "ARCHIE" TWOMBLY (70s, cardigan, commentator headset around his neck), polishes a glass.
8 D HADLEY: Winnie, your delivery.
9 D WINNIE: I know.
10 D HADLEY: You pulled it left in the eighth.
11 D WINNIE: I know.
12 D HADLEY: It's all right to know. I'd just like you to fix it.
13 D ABDULLAH: She's got it, Hadley.
14 D HADLEY: Does she?
15 D WINNIE: I've got it.
16 D HADLEY: Then say it with your whole face.
17 D WINNIE (breathing in): I have got it.
18 D HADLEY: Better.
19 D ARCHIE (from the bar): Back in '71, I threw the last stone with a broken wrist.
20 D ABDULLAH: We know, Archie.
21 D ARCHIE: Won, too.
22 D HADLEY (to the room): Everyone's very proud of Archie.
* 23 A ¶ A bell rings below.
* 24 A The teams are called to the ice.
25 A Winnie rises first.
26 A Abdullah follows, and Hadley screws the cap onto her thermos.
27 D ARCHIE (into his headset): This is Archie Twombly, live from the Glenmore Club. The last end is about to begin.
28 A ¶ Hadley, muttering to herself, does not turn around.
29 D HADLEY (muttering): Don't blow it, Brantford.
* 30 A ¶ A phone buzzes on the bar.
31 A Archie answers.
32 D DISPATCH [V.O.] (over phone): Archie? It's the broadcast truck. We've lost your feed. Is the skip ready?
33 D ARCHIE (into phone): She's ready. They're all ready.
34 A ¶ Hadley stops at the stairs.
35 A She looks down at the ice, pale and shining.
36 D HADLEY (quietly): Winnie. Whatever happens, you throw the last one.
37 D WINNIE: Me? Hadley, no.
38 D HADLEY: You. It's what you were born for.
39 D ABDULLAH (low, to Winnie): She's right.
40 D WINNIE: Okay. Okay.
41 A ¶ They file down the stairs.
42 A Archie watches through the glass as three small figures step onto the ice.
43 D DISPATCH [V.O.] (over phone): Archie, we're back. Go ahead.
44 D ARCHIE (into headset): And here they come.
45 A ¶ He lifts a glass to the window and sets it down untouched.

### SCENE s00044 | INT. FAMILY MINIVAN, DRIVE-THRU CAR WASH - DAY
Detected names (may be incomplete or contain aliases): LORETTA PEMBERTON-SHAH, HAROLD PEMBERTON, ZINNIA
* 1 A ¶ Soap foam crawls across the windshield.
* 2 A Brushes thump and swish.
* 3 A Inside, the world is a muffled aquarium.
4 A ¶ LORETTA PEMBERTON-SHAH (40s, driver, rings clacking against the wheel) keeps both hands at ten and two.
5 A In the passenger seat sits her father, HAROLD PEMBERTON (70s, flat cap, silent for forty miles).
6 A In the back, her daughter ZINNIA (14, earbuds in, knees up) watches the brushes beat the glass.
* 7 A ¶ The conveyor tugs the van forward.
* 8 A A giant mitt of foam slaps the roof.
9 D LORETTA: You didn't have to come.
10 D HAROLD: I wanted to.
11 D LORETTA: You hate car washes.
12 D HAROLD: I hate being left behind more.
13 A ¶ Zinnia pulls out one earbud.
14 D ZINNIA: Who left who?
15 A ¶ Loretta and Harold look at each other.
16 A Neither speaks.
* 17 A The brushes whump against the doors.
18 D LORETTA: ^Nobody left anybody.
19 D HAROLD: ^Nobody left anybody.
20 A ¶ Zinnia raises both eyebrows and puts the earbud back.
* 21 A ¶ The conveyor slows.
* 22 A A rinse arch sprays them white.
23 A In the sudden silence, Loretta lets go of the wheel for the first time all day and presses her fingers into her eyes.
24 A ¶ Harold reaches over and, with enormous awkwardness, pats her knee twice.
25 D HAROLD [CONT'D]: Your mother liked this part.
26 D LORETTA (muffled): The foam.
27 D HAROLD: The foam.
* 28 A ¶ The dryers blast.
29 A Zinnia leans forward between the seats and rests her chin on the headrest, close to both of them.
* 30 A Sunlight breaks through the last of the water.
31 A Loretta turns on the wipers.

### SCENE s00045 | INT. ORBITAL HYDROPONICS BAY, STATION KESTREL - CONTINUOUS
Detected names (may be incomplete or contain aliases): COMMANDER INGRID SORENSEN-AKINTOLA, FELIX OYELARAN-DUBOIS, MARISOL TRAN, UNIT FOUR, CASIMIR OKONKWO-BLYTHE, ORION
* 1 A ¶ Racks of lettuce under violet light.
* 2 A Pipes sweat.
* 3 A A hum like a slow pulse.
* 4 A The floor is a grid, the ceiling a curve.
5 A ¶ COMMANDER INGRID SORENSEN-AKINTOLA (50s, gray crop, crisp jumpsuit) walks the aisle with a tablet.
6 A Behind her trails botanist FELIX OYELARAN-DUBOIS (30s, goggles pushed up, hands green to the wrist).
7 A At a bench, engineer MARISOL TRAN (30s, ponytail, wrench in hand) tightens a valve.
8 A In the far corner, a robot technician, UNIT FOUR (a squat maintenance drone with a cheerful chirp), polishes a lens.
9 A The newest arrival is medic CASIMIR OKONKWO-BLYTHE (40s, trim beard), who leans in the hatchway.
10 D INGRID (to the bay): Status report, everyone. Now.
11 D FELIX: Lettuce is thriving.
12 D MARISOL: Valve's holding.
13 D UNIT FOUR: Beep. All systems nominal.
14 D CASIMIR: Medically, I'm bored.
15 D INGRID: That's what I like to hear.
* 16 A ¶ A low metallic thud echoes from the water tank behind the racks.
17 A All five turn.
18 D FELIX: That's not supposed to happen.
19 D MARISOL (muttering): Of course it is.
20 A ¶ Ingrid raises a hand.
* 21 A Silence.
* 22 A Another thud, closer.
* 23 A The lights dim a fraction.
24 A Unit Four chirps and rolls backward.
25 D INGRID: Felix, Marisol, check the tank. Casimir, with me.
26 D FELIX: ^Yes, Commander.
27 D MARISOL: ^Yes, Commander.
28 A ¶ They reply in unison and split.
29 A Felix and Marisol creep toward the tank.
30 A Ingrid and Casimir circle the racks opposite, tablet and medkit held like weapons.
31 A ¶ Behind the tank, a fat grey cat, ORION, sits atop a coil of hose, licking one paw.
32 A It meows.
* 33 A ¶ Everyone stops.
34 A Felix laughs first, a startled bark.
35 A Marisol sags against the rack.
36 A Ingrid pinches the bridge of her nose.
37 D INGRID [CONT'D] (to herself): Who smuggled a cat onto my station?
38 A ¶ Unit Four rolls up and nuzzles the cat's head with a mechanical arm.
39 D UNIT FOUR: Beep. New crew member detected.

### SCENE s00046 | EXT. SHELLED FARMHOUSE ROOF, ARDENNES - DAWN
Detected names (may be incomplete or contain aliases): GENE, BRODSKY, PRIVATE LOUIS TRUDEAU-PARK, SERGEANT MARGUERITE OYELOWO
* 1 A ¶ Snow dusts the broken tiles.
* 2 A Beyond the ridge, the thud of far guns.
3 A ¶ CORPORAL EUGENE "GENE" BRODSKY (20s, frozen mustache) crouches behind a chimney with binoculars.
4 A Beside him, PRIVATE LOUIS TRUDEAU-PARK (19, baby-faced, rifle hugged) shivers.
5 A A few yards away, SERGEANT MARGUERITE OYELOWO (30s, tough, her helmet dented) sits against a beam, tying a rag around her wrist.
6 A ¶ She tightens it with her teeth.
7 A He lowers the binoculars.
8 D GENE: Sarge, I count six.
9 D OYELOWO: Count again.
10 D GENE: Eight.
11 D OYELOWO: Better.
12 D TRUDEAU-PARK: Is it true what they say? About the Tigers?
13 D OYELOWO: Louis, eat your biscuit.
14 D TRUDEAU-PARK: I'm not hungry.
15 D OYELOWO: I didn't ask.
16 A ¶ He opens the biscuit tin.
17 A His fingers are blue.
18 A She reaches over and, without a word, tucks his scarf tighter.
19 D GENE: They're moving.
20 A ¶ She rises on one knee and takes the binoculars.
21 A Her jaw hardens.
22 D OYELOWO: Gene, wire the others. Louis, with me.
23 A ¶ They slide down the roof toward the ladder.

### SCENE s00047 | INT. OPERA HOUSE COAT CHECK ROOM - NIGHT
Detected names (may be incomplete or contain aliases): SERAPHINA DUMONT, STRANGER, LADY CORDELIA ASHBY-FORSYTHE, DELACROIX-WEST
* 1 A ¶ Racks of furs and top hats in the dim glow of a single bulb.
* 2 A A velvet curtain divides the room from the lobby, where an aria swells, muffled.
3 A ¶ SERAPHINA DUMONT (30s, ruby evening gown, a claim ticket pinched between gloved fingers) presses a hat check into the hand of the attendant, a skinny youth with oversized cufflinks.
4 A Behind her, a tall figure in a doorman's coat keeps watch at the curtain: this is the STRANGER, handsome, impassive, a scar through one brow.
5 A In the corner, an older woman in a fur stole examines the rack, LADY CORDELIA ASHBY-FORSYTHE (60s, diamonds heavy at her throat).
6 A ¶ The attendant fetches a coat.
7 A The stranger glances at Lady Cordelia, who has turned her back.
8 A Seraphina slips a small silver key into the coat's lining while the attendant shakes out the sleeve, and the stranger, noticing her motion, slides smoothly between them and the curtain.
9 D STRANGER: Madame, your coat.
10 D SERAPHINA: Thank you.
11 D LADY CORDELIA (without turning): Is that the Dumont girl?
12 D SERAPHINA: Lady Cordelia. How lovely.
13 A ¶ The attendant, flustered, drops a scarf.
14 A Seraphina and the stranger both bend to catch it and their hands collide.
15 A They look at each other, and in that look, a plan changes.
16 D LADY CORDELIA: I do hope you're not leaving before the second act.
17 D SERAPHINA: Never.
* 18 A ¶ The aria hits its high note.
19 A As the room shakes, the stranger lifts the stole from Lady Cordelia's shoulders and, in the same breath, passes it to Seraphina, who drapes it over her arm like a waiter's towel.
20 D LADY CORDELIA (turning): My stole!
21 D STRANGER (bowing): I believe it was mislaid, Madame.
22 A ¶ Seraphina hands it back with an apologetic smile, but one diamond is gone from the hem.
* 23 A The stranger's coat pocket rattles softly as he steps aside to let her pass.
24 A ¶ Seraphina swans through the curtain.
25 A The stranger, whom the attendant addresses as MR. DELACROIX-WEST, follows without a backward glance.

### SCENE s00048 | INT. ROOFTOP GREENHOUSE, LAUNDROMAT BUILDING - DUSK
Detected names (may be incomplete or contain aliases): MIRIAM STOLZ-AGYEMAN, WENDELL, TOVA, CASPIAN DRUMMOND
* 1 A ¶ Cracked glass panes.
* 2 A Tomato vines grown wild.
* 3 A A rusted fan turns without wind.
* 4 A Laundry lines sag with sheets, still dripping.
5 A ¶ MIRIAM STOLZ-AGYEMAN (60s, silver bun, gardening gloves) trims a vine.
6 A Her son WENDELL (30s, work boots, tie loosened) sits on an upturned bucket.
7 A His wife TOVA (30s, pregnant, hand on her belly) leans in the doorway.
8 A Their neighbor, old CASPIAN DRUMMOND (80s, oxygen tank, tiny sunhat), dozes in a lawn chair.
9 D MIRIAM: Landlord says we have until Friday.
10 D WENDELL: Mom.
11 D MIRIAM: Friday. That's four days.
12 D TOVA: We'll find another roof.
13 D MIRIAM: Another roof won't have these.
14 A ¶ She holds up a tomato, ripe and enormous.
15 A Wendell looks at it, then at his wife.
16 D CASPIAN (eyes closed): Beefsteak.
17 D MIRIAM: Cranberry heirloom.
18 D CASPIAN: Beefsteak.
19 A ¶ Miriam sighs and places the tomato in Tova's hand.
20 A Tova weighs it, smiling.
21 D TOVA: It's heavy.
22 D WENDELL: Mom, you can't carry this up the stairs forever.
23 D MIRIAM: Watch me.

### SCENE s00049 | EXT. CLIFFSIDE STAIRCASE OF THE WIND TEMPLE - DAWN
Detected names (may be incomplete or contain aliases): ALDRIC VANTERPOOL, THESSALY, SORREL IRONBARK, BARNABUS GLIMMERWICK
* 1 A ¶ Ten thousand steps, hewn into rock.
* 2 A Prayer flags snap.
* 3 A Clouds boil below.
4 A ¶ ALDRIC VANTERPOOL (30s, battered armor, scabbard empty) climbs, panting.
5 A Behind him, a hooded girl, THESSALY (teen, silver eyes, bare feet) hops step to step like a goat.
6 A Further down, burly SORREL IRONBARK (40s, axe on back, braided beard) hauls himself up, wheezing.
7 A Last comes the old wizard BARNABUS GLIMMERWICK (80s, crooked staff, patched robes), who rests on every third step.
8 D ALDRIC: Barnabus, hurry!
9 D BARNABUS: I am a wizard, not a mountain goat!
10 D THESSALY (skipping): I'm a mountain goat.
11 D SORREL (muttering): Gods, the stairs.
12 A ¶ Thessaly stops at a landing.
* 13 A Above, a stone gate, and between its pillars, a shimmering curtain of wind.
14 A She puts out her hand.
* 15 A It ripples.
16 D THESSALY: It's open.
17 D ALDRIC: Is it safe?
18 D THESSALY: No.
19 D SORREL: Good. I dislike safe.
20 A ¶ Barnabus catches up, bent double.
21 D BARNABUS: Aldric, listen. When we cross, the Wind Warden will ask each of us one question.
22 D ALDRIC: What question?
23 D BARNABUS: What we fear most.
24 D SORREL: ^That's easy.
25 D THESSALY: ^That's easy.
26 A ¶ They answer together, then glare at each other.
27 D ALDRIC: Sorrel?
28 D SORREL: Being forgotten.
29 D ALDRIC: Thessaly?
30 D THESSALY (small): Being found.
31 A ¶ Aldric draws a breath.
* 32 A Wind howls through the gate.
33 A He steps toward it, hand on the empty scabbard.
34 D ALDRIC: Then we go together.

### SCENE s00050 | INT. NIGHT BUS, MIDWEST HIGHWAY - NIGHT
Detected names (may be incomplete or contain aliases): CELESTE ARMITAGE-NOLAN, DOM, ACHEBE, DRIVER
* 1 A ¶ Half-lit aisle.
* 2 A Rows of sleeping strangers.
* 3 A The engine drones like a long exhale.
* 4 A Rain streaks the windows.
5 A ¶ CELESTE ARMITAGE-NOLAN (30s, red scarf, paperback open on her knee) sits halfway back.
6 A Across the aisle, DOMINIC "DOM" ACHEBE (30s, rumpled suit, cold coffee) has been staring at her book for twenty minutes.
7 A He finally leans over.
8 D DOM: Is it any good?
9 D CELESTE: It's a murder mystery.
10 D DOM: Does everyone die?
11 D CELESTE: Mostly.
12 D DOM: Sounds restful.
13 A ¶ She laughs, quietly, despite herself.
* 14 A The bus hits a pothole and the whole cabin lurches.
* 15 A Her book slides to the floor.
16 A Dom retrieves it and hands it back.
17 A Their fingers touch.
18 D DRIVER [V.O.] (over intercom, crackling): Folks, we're pulling into Dubuque for a ten-minute break. Stretch your legs. Don't wander.
19 D CELESTE (to the cabin, dry): Don't wander, he says.
20 D DOM (to himself): Where would I go?
21 A ¶ He stands.
* 22 A The bus brakes hiss.
23 A Celeste rises too, and they collide in the narrow aisle.
24 D CELESTE: Sorry.
25 D DOM: No, I'm sorry.
26 D CELESTE: I'm Celeste.
27 D DOM: Dom.
28 A ¶ They shake hands, lingering.
29 D DRIVER [V.O.] (over intercom): Anybody traveling to Chicago, I'll be holding the bus for exactly ten minutes. Not eleven.
30 D DOM: Chicago.
31 D CELESTE: Me too.
32 A ¶ He looks at her, hope in his face.
33 D DOM: Then I guess we have eleven hours.
34 A ¶ She picks up her book.
35 D CELESTE: Then you'd better tell me who did it.
