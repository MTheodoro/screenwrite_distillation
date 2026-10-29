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

Write ONE JSON file to /home/user/screenwrite-analyzers/data/analyzers/labels/kinds_haiku/group_0145.json with the Write tool:
{"<scene_id>": {"<unit number>": "<kind>" | ["character", "<NAME>", ...], ...}, ...}
Include every marked line of every scene below. Valid JSON only. Reply only with "done".

## Scenes

### SCENE s01511 | INT. OPEN-PLAN OFFICE, "SYNERGY SOLUTIONS" - MORNING
Detected names (may be incomplete or contain aliases): KEN, ADEBAYO-LINDQVIST, BEATRIX OKONKWO-PETROV, MANNY, TORRES-NGUYEN, ^MANNY
* 1 A ¶ Gray cubicles in rows.
* 2 A A motivational poster of a kayaker.
* 3 A A ficus dying politely.
* 4 A Overhead fluorescent tubes.
* 5 A Somewhere, a printer groans.
6 A ¶ KENNETH "KEN" ADEBAYO-LINDQVIST (50s, regional manager, short-sleeved dress shirt, a lanyard shaped like a lightning bolt) stands at the front of the room holding a laminated sign that reads: SYNERGY.
7 A Behind him sit his two lone employees.
8 A BEATRIX OKONKWO-PETROV (30s, headset around her neck) types without looking.
9 A EMMANUEL "MANNY" TORRES-NGUYEN (20s, hoodie, one earbud in) stares at nothing.
10 D KEN (to the room): Team! Good morning, team!
* 11 A ¶ No one answers.
12 A Ken reaches for the sign and smacks it against the whiteboard.
13 D KEN [CONT'D] (to himself): Ok. Quiet room.
14 D BEATRIX: We're two people, Ken.
15 D KEN: Two is a team.
16 D MANNY: Two is a couple.
17 D KEN: Manny!
18 D MANNY: Sorry.
19 D KEN: We have a very exciting update from corporate.
20 D BEATRIX: We're being acquired.
21 D BEATRIX: We're being closed.
22 D ^MANNY: We're being closed.
23 A ¶ Ken's smile locks into place.
24 A He lifts the sign.
25 D KEN: We are being realigned.
26 D BEATRIX: Into what?
27 D KEN: A hybrid model.
28 D MANNY: What's hybrid?
29 D KEN: Some of you will be here, and some of you will be... not.
30 D BEATRIX: Which some?
31 D KEN (to himself): Don't say it, Ken. Don't say it.
32 A ¶ He fumbles with the sign.
33 A Drops it.
34 A Bends to pick it up at the same moment that Beatrix leans down to help, and their foreheads collide.
35 A Manny rises to catch Ken's elbow and trips on the ficus.
36 A All three tumble to the carpet in a heap of sign, lanyard, and leaves.
* 37 A ¶ Silence.
* 38 A The printer groans.
39 D MANNY (from the floor): Does this count as team-building?
40 D KEN (also from the floor): It's a start.

### SCENE s01512 | INT. LEGAL AID OFFICE, FORMER DENTIST'S SUITE - EVENING
Detected names (may be incomplete or contain aliases): ATTORNEY OLIVIA OYELARAN-BRENNAN, PARALEGAL MARCO TRAN-ASHWORTH, CLIENT HAROLD BEAUMONT-ADEYEMI, INTERPRETER LUCIA FERREIRA-DAS
* 1 A ¶ A reception desk with a dental chair behind it, used as a client seat.
* 2 A Beige carpet.
* 3 A A dusty fish tank.
* 4 A Diplomas of a man who is no longer here.
5 A ¶ Four people around a conference table made of two card tables pushed together.
6 A ¶ ATTORNEY OLIVIA OYELARAN-BRENNAN (40s, cardigan, reading glasses on her head).
7 A PARALEGAL MARCO TRAN-ASHWORTH (20s, laptop).
8 A CLIENT HAROLD BEAUMONT-ADEYEMI (60s, an old coat, scarred hands).
9 A INTERPRETER LUCIA FERREIRA-DAS (50s, a notebook).
10 D OLIVIA: Mr. Beaumont-Adeyemi, I'd like to go through the eviction notice again.
11 D HAROLD: I've read it.
12 D OLIVIA: I know. But I'd like to hear what you think it says.
13 D HAROLD: It says I owe four months.
14 D OLIVIA: Do you?
15 D HAROLD: I paid in cash.
16 D MARCO: Do you have receipts?
17 D HAROLD: She wrote them by hand.
18 D OLIVIA: Who is "she"?
19 D HAROLD: Mrs. Okonkwo. The landlady.
20 D LUCIA (translating): La casera. Okonkwo.
21 D OLIVIA: Do you have copies?
22 D HAROLD: She keeps the originals. I keep the carbon.
23 D MARCO: Carbon copies?
24 D HAROLD: I'm sixty-three, young man.
25 D MARCO: I'm sorry.
26 D HAROLD: Don't be. They were the best thing she ever did for me.
27 D OLIVIA: Where are the carbons?
28 D HAROLD: In the freezer.
29 D OLIVIA: The freezer?
30 D HAROLD: That's where I keep the important things.
31 D LUCIA (to Olivia, aside): He means it.
32 D OLIVIA: Can you bring them tomorrow?
33 D HAROLD: Bring them? I'd have to defrost them.
34 D MARCO: That's allowed.
35 D HAROLD: Is it?
36 D OLIVIA: Mr. Beaumont-Adeyemi, you are going to win this case.
37 D HAROLD: You haven't seen the carbons.
38 D OLIVIA: I don't need to.
39 D HAROLD: Why not?
40 D OLIVIA: Because the notice names the wrong tenant.
41 A ¶ Harold blinks.
42 A Marco looks up.
43 A Lucia stops writing.
44 D HAROLD: What?
45 D OLIVIA: It says "Beaumont-Adeyemi, Harold J." Your middle initial is R.
46 D HAROLD: That's my brother's.
47 D OLIVIA: Then they're evicting your brother.
48 D HAROLD (slowly): He's been dead since 'ninety-four.
49 D OLIVIA: Then they're evicting a ghost.

### SCENE s01513 | EXT. FRONTIER LAUNDRY YARD - HIGH NOON
Detected names (may be incomplete or contain aliases): MARSHAL EZRA OKORO-BELL, WIDOW HEPZIBAH LINDQVIST-ASANTE, RANCHER BARNABY PRESCOTT-NGUYEN, SON, JEDEDIAH PRESCOTT-NGUYEN, TOBIAS ADEYEMI-HOLM
* 1 A ¶ Wet sheets snap on lines between cottonwood posts.
* 2 A Lye barrels.
* 3 A A wash-tub steams in the sun.
* 4 A Chickens scatter.
5 A ¶ Five people stand in a stiff circle in the yard.
6 A MARSHAL EZRA OKORO-BELL, tall, black hat, hand loose by his holster.
7 A WIDOW HEPZIBAH LINDQVIST-ASANTE, apron, sleeves rolled, a washboard in both fists.
8 A The RANCHER BARNABY PRESCOTT-NGUYEN, barrel chest, spurs ringing.
9 A His SON, young JEDEDIAH PRESCOTT-NGUYEN, thin, a pistol he doesn't know how to hold.
10 A And the preacher TOBIAS ADEYEMI-HOLM, a Bible in one hand and a sagging hat in the other.
11 A ¶ Marshal Ezra takes one step forward.
12 A Barnaby takes one step back.
13 A Hepzibah plants the washboard in the dirt like a flag.
14 A Jedediah's gun hand trembles, and the preacher raises his Bible as if to stop a bullet with it, while a sheet billows between them and the sun.
* 15 A ¶ No one speaks.
* 16 A A rooster crows.
* 17 A A bucket tips.
* 18 A Water spreads across the dust.
* 19 A ¶ The sheet drops.
20 A Behind it, the four stand exactly where they were.
21 A Only Hepzibah has moved: the washboard is now a few inches higher, and she has not blinked.
22 A ¶ Barnaby's eyes flick to Jedediah.
23 A The boy's gun slowly lowers.
24 A The Marshal lets out a very small breath.
25 A The preacher puts his hat back on.

### SCENE s01514 | INT. NEONATAL ICU - NIGHT
Detected names (may be incomplete or contain aliases): THEODORA ASHWORTH-OKORO, NURSE BEATRICE LINDQVIST-ADEYEMI
* 1 A ¶ Dim blue light.
* 2 A Monitors pulse.
* 3 A Incubators glow like small aquariums.
* 4 A A mobile of paper cranes turns slowly.
5 A ¶ DR. THEODORA ASHWORTH-OKORO (40s, scrubs, hair pinned with a pencil) stands at an incubator, scribbling on a chart.
6 A NURSE BEATRICE LINDQVIST-ADEYEMI (50s, soft shoes, a pen behind her ear) squats beside her, adjusting a monitor lead.
7 D THEODORA: His oxygen's dropping.
8 D BEATRICE: I see it.
9 D THEODORA: Turn the flow up.
10 A ¶ Beatrice reaches for the dial.
11 A Turns it.
* 12 A Nothing changes.
13 A She turns it again.
14 D BEATRICE: It's stuck.
15 D THEODORA: Move.
16 A ¶ She crouches, pushes the dial, finds the line kinked beneath the incubator.
17 A Straightens it.
* 18 A The monitor beeps higher.
19 D THEODORA [CONT'D] (exhaling): There.
20 D BEATRICE: You were fast.
21 D THEODORA: You were faster. If you hadn't called it...
22 D BEATRICE: Don't say it.
23 D THEODORA: I'm not going to.
24 A ¶ They stand over the incubator, watching the tiny chest rise.
25 D BEATRICE: She was a month early.
26 D THEODORA: She's strong.
27 D BEATRICE: She is.
28 A ¶ Beatrice's hand drifts to the incubator's edge.
29 A She rests a finger on the clear plastic.
30 D BEATRICE [CONT'D]: My daughter was this size once.
31 D THEODORA: How is she now?
32 D BEATRICE: Thirty. Never calls.
33 D THEODORA: She will.
34 D BEATRICE: Will she?
35 D THEODORA: When she has a baby of her own.
36 A ¶ Beatrice laughs, softly, then wipes her eyes.
37 A She straightens up.
38 A She picks up the chart and hands it to Theodora.
39 D BEATRICE: Doctor. You forgot to sign.
40 D THEODORA: I know.
41 A ¶ She takes the pen from behind Beatrice's ear, signs, and tucks it back.
* 42 A Behind them, the mobile of cranes turns slowly in the blue light.

### SCENE s01515 | INT. ROOFTOP HELIPAD, UNIVERSITY HOSPITAL - DAWN
Detected names (may be incomplete or contain aliases): IMANI OKAFOR-REYES, NURSE ALARIC BRIGHTWATER-LUU, TRANSPLANT COORDINATOR SERAPHINA KOWALSKI-ASANTE
* 1 A ¶ Wind whips the windsock.
* 2 A The city below is a quilt of pink and gray.
* 3 A A helicopter idles on the pad, rotors turning slow.
4 A ¶ Three staff stand by a wheeled cooler: DR. IMANI OKAFOR-REYES (40s, flight suit), NURSE ALARIC BRIGHTWATER-LUU (30s, backpack), and TRANSPLANT COORDINATOR SERAPHINA KOWALSKI-ASANTE (50s, headset).
* 5 A The cooler contains a donor heart.
6 D IMANI (to everyone): Okay. Last check. Cooler sealed? Ice good? Paperwork in?
7 D ALARIC: Sealed. Ice good. Paperwork in.
8 D SERAPHINA (into headset): Control, we are loaded. Requesting clearance.
9 D SERAPHINA [CONT'D] (to the others): Four minutes.
10 D IMANI (to herself): Four minutes. I can do four minutes.
* 11 A ¶ The rotors whine.
12 A Alaric lifts the cooler's handle, lowers it, lifts it again.
13 D ALARIC: Doctor, can I ask something?
14 D IMANI: Go.
15 D ALARIC: Is it supposed to feel this heavy?
16 D IMANI: Yes.
17 D ALARIC: Is it supposed to feel this light?
18 D IMANI: Also yes.
19 D SERAPHINA: Clearance in thirty.
20 D IMANI: Then let's go.
21 A ¶ She steps toward the helicopter.
22 A Alaric steps after her.
23 A Seraphina pulls off her headset, takes a breath, and walks to the pad's edge.
24 A She looks down at the waking city.
25 A Then, quietly, to the empty air:
26 D SERAPHINA [CONT'D] (to the donor): Thank you.
* 27 A ¶ The rotors speed up.
* 28 A The sun clears the buildings.
* 29 A And somewhere in the cooler, nothing moves at all.

### SCENE s01516 | INT. BASALT CAVERN OF THE MOON-WELL - NIGHT
Detected names (may be incomplete or contain aliases): PRINCESS LYSANDRA OYELOWO-VANE, MORGWYN ASHWORTH-ABARA, ^MORGWYN
* 1 A ¶ A vaulted cave.
* 2 A A pool of still, silver water at its center, lit from below.
* 3 A Stalactites drip in a slow rhythm.
* 4 A Runes glow faintly on the walls.
5 A ¶ PRINCESS LYSANDRA OYELOWO-VANE (20s, travel-worn gown, a sword at her hip) kneels at the pool's edge, cupping silver water in her hands.
6 A She lets it spill through her fingers.
7 D LYSANDRA (to herself): Tell me the way. Tell me the way home.
* 8 A ¶ The water ripples.
* 9 A A glimmer rises from the depths and shivers into a voice.
10 D MORGWYN [V.O.] (whispering): Seek the king's lost daughter.
11 D LYSANDRA: I am the king's lost daughter.
12 D MORGWYN [V.O.] (whispering): Then seek the one who kept you.
* 13 A ¶ A pebble clatters down the cave wall.
14 A Lysandra rises, sword half-drawn.
15 A From the shadows steps a woman in a hooded gray cloak.
16 A MORGWYN ASHWORTH-ABARA (50s, silver hair, a staff of white ash).
17 A She lowers her hood.
18 D MORGWYN: Hello, child.
19 D LYSANDRA: Morgwyn?
20 D MORGWYN: You've grown.
21 D LYSANDRA: You vanished.
22 D MORGWYN: I was told to.
23 D LYSANDRA: By whom?
24 D MORGWYN: By the king.
25 D LYSANDRA: He lied to us both.
26 D ^MORGWYN: He lied to us both.
27 A ¶ They stare at each other, startled by the echo.
* 28 A The silver water stills.
29 D LYSANDRA: Then who is she? The one who sits on my throne?
30 D MORGWYN: She is your sister.
31 D LYSANDRA: I have no sister.
32 D MORGWYN: You do now. And she is waiting.
33 A ¶ Lysandra sheathes her sword.
34 A She wipes her hand on her gown and steps toward Morgwyn, who lifts the staff and draws a circle in the air.
* 35 A The circle opens on a green meadow, full of light.

### SCENE s01517 | INT. VILLAGE SCHOOLHOUSE - AFTER HOURS - DUSK
Detected names (may be incomplete or contain aliases): HEADMISTRESS GWENDOLEN BEAUMONT-OKORO, ABEBE LINDQVIST-NWOSU, FATIMA KOWALSKI-ASANTE, BOY
* 1 A ¶ Rows of small desks.
* 2 A A globe with a dent in Africa.
* 3 A Chalk dust drifting through low gold light.
* 4 A A map of a country that no longer exists.
5 A ¶ Three adults sit at children's desks, knees too high, teacups on the writing slopes.
6 A ¶ HEADMISTRESS GWENDOLEN BEAUMONT-OKORO (60s, spectacles on a chain, a voice like a closing door) sits at the front.
7 A MR. ABEBE LINDQVIST-NWOSU (40s, the caretaker, a ring of keys), crammed behind a desk, drinks from a chipped mug.
8 A MRS. FATIMA KOWALSKI-ASANTE (30s, the only teacher left) rubs her temples.
9 D GWENDOLEN: The inspector arrives Monday.
10 D FATIMA: We know.
11 D GWENDOLEN: He will want to see the registers.
12 D ABEBE: They're in the cellar.
13 D GWENDOLEN: Why?
14 D ABEBE: Because of the flood.
15 D GWENDOLEN: Mr. Lindqvist-Nwosu, the flood was in April.
16 D ABEBE: They're still drying.
17 D FATIMA: They're mold, Abebe.
18 D ABEBE: Mold is a kind of record.
19 D GWENDOLEN: Mrs. Kowalski-Asante, what is the attendance?
20 D FATIMA: Eleven.
21 D GWENDOLEN: Out of?
22 D FATIMA: Sixty.
23 D GWENDOLEN: And the rest?
24 D FATIMA: Gone to the city.
25 D GWENDOLEN: All forty-nine?
26 D FATIMA: All of them. With their parents.
27 D GWENDOLEN: Then we have a school with eleven pupils, a caretaker, a teacher, and a headmistress.
28 D ABEBE: And a globe.
29 D GWENDOLEN: And a globe.
* 30 A ¶ A knock at the door.
31 A They freeze.
* 32 A Another knock, small and polite.
* 33 A ¶ The door opens.
34 A A BOY of nine, in oversized shoes, stands on the threshold with a lunch pail.
35 D BOY: Is this where school is?
36 A ¶ Gwendolen rises, slowly, and smooths her skirt.
37 D GWENDOLEN: It is.
38 D BOY: Am I late?
39 D GWENDOLEN: No. You are the twelfth.

### SCENE s01518 | INT. REGENCY MUSIC ROOM, HARTLEIGH PARK - AFTERNOON
Detected names (may be incomplete or contain aliases): LADY ARABELLA FOTHERINGHAY-ADEYEMI, DOWAGER LADY HESTER FOTHERINGHAY-OKORO, ELIAS THISTLEWOOD-BELL, MISS PHILOMENA CARRADINE-LUU, OSWIN PRATT-NWOSU, CALLER, HARCOURT
* 1 A ¶ A long room with a gleaming pianoforte, gilt chairs, and French windows open to a garden of clipped yews.
* 2 A Sunlight lays long stripes across the parquet.
* 3 A A clock chimes four.
* 4 A Lavender and beeswax.
5 A ¶ Six people form a tableau: LADY ARABELLA FOTHERINGHAY-ADEYEMI, thirty, in primrose muslin, seated at the instrument.
6 A Her mother, DOWAGER LADY HESTER FOTHERINGHAY-OKORO, sixty, rigid in a high-backed chair with a lorgnette.
7 A The curate MR. ELIAS THISTLEWOOD-BELL, twenty-five, turning pages.
8 A The cousin MISS PHILOMENA CARRADINE-LUU, nineteen, embroidering by the window.
9 A The butler MR. OSWIN PRATT-NWOSU, fifty, carrying a tray of tea.
10 A And a gentleman caller, standing in the doorway with his hat in his hands.
11 A ¶ Arabella plays a gentle air.
12 A The Dowager nods in time.
13 A Elias turns a page.
14 A Philomena stitches.
15 A Oswin sets down the tray.
16 A ¶ The caller clears his throat.
17 A Everyone turns.
18 D CALLER: Forgive the intrusion. I come with a letter for Lady Arabella.
19 D DOWAGER: From whom, sir?
20 D CALLER: From a man who was thought drowned.
21 A ¶ Arabella's hands stop.
* 22 A The instrument falls silent.
* 23 A The clock ticks.
24 A Oswin's cup rattles in its saucer.
25 D ARABELLA: His name, sir.
26 D CALLER (smiling): Captain Edmund Harcourt-Reyes.
27 A ¶ He bows.
28 A The Dowager's lorgnette clatters to the floor.
29 D DOWAGER: Edmund?
30 D HARCOURT: Alive, madam. And entirely at your service.
31 A ¶ Arabella rises.
* 32 A The garden breeze lifts the curtains.
33 A For a moment no one in the room breathes.

### SCENE s01519 | INT. LIGHTHOUSE-TURNED-WEDDING-VENUE, SEASIDE TERRACE - EVENING
Detected names (may be incomplete or contain aliases): ROSS, CLEM, AUNT ZENOBIA, ^ROSS, YUSUF, LENA, OLD MR. TIBERIUS
* 1 A ¶ A white tower on a cliff above a violet sea.
* 2 A A terrace strung with lights.
* 3 A A small dance floor.
* 4 A Folding chairs, half of them empty.
* 5 A A cake on a card table.
6 A ¶ Six wedding guests drift in the golden hour.
7 A ¶ CLEMENTINE "CLEM" OKONKWO-ASHBY.
8 A 30s.
9 A Maid of honor.
10 A Hair coming loose.
11 A ¶ ROSS MAKINDE-LINDQVIST.
12 A 30s.
13 A The best man.
14 A A slightly crooked tie.
15 A ¶ AUNT ZENOBIA ADEYEMI-HART.
16 A 60s.
17 A Sequins.
18 A Fierce.
19 A ¶ YUSUF ABARA-KOWALSKI.
20 A 40s.
21 A Photographer.
22 A A heavy camera.
23 A ¶ LENA PETRAKIS-NGUYEN.
24 A 20s.
25 A A catering waitress with a tray of champagne.
26 A ¶ OLD MR. TIBERIUS BRANDT-OSEI.
27 A 80s.
28 A The groom's grandfather.
29 A A cane.
30 A ¶ Clem watches the sea.
31 A Ross watches Clem.
32 D ROSS: You've been standing there for twenty minutes.
33 D CLEM: I'm thinking.
34 D ROSS: About what?
35 D CLEM: About the speech.
36 D ROSS: You wrote it.
37 D CLEM: That's the problem.
38 A ¶ She turns.
39 A He smiles.
40 A She does not.
41 D AUNT ZENOBIA: Children, the cake!
42 A ¶ Clem and Ross speak at the same time.
43 D CLEM: Not yet.
44 D ^ROSS: Not yet.
45 A ¶ They look at each other.
46 A A small, startled grin passes between them.
47 D YUSUF: Smile for me, you two.
48 A ¶ They don't.
49 A Yusuf lowers the camera.
50 D YUSUF [CONT'D]: Ah. That's the better shot.
51 D CLEM: Don't you dare print that.
52 D YUSUF: I wouldn't dream of it.
53 A ¶ Lena glides past with her tray.
54 A She offers a flute to Clem.
55 A Clem takes one.
56 A She offers one to Ross.
57 A Ross takes it, and with it, brushes Clem's fingers.
58 D LENA (murmuring): Careful. People are watching.
59 A ¶ Clem looks across the terrace, past the cake, to the sea.
60 A Ross lowers his eyes.
61 D OLD MR. TIBERIUS: Is it time?
62 D AUNT ZENOBIA: It's time, Tiberius.
63 A ¶ He taps his cane.
* 64 A A gong sounds from within the tower.
65 A Guests turn toward the stairs.
66 D ROSS: We should go in.
67 D CLEM: We should.
68 A ¶ Neither moves.
69 A Ross sets down his flute.
70 A Clem sets down hers.
* 71 A The gong sounds again.
72 D ROSS: Clem.
73 D CLEM: Don't.
74 D ROSS: I haven't said anything.
75 D CLEM: You were going to.
76 D ROSS: I was going to say your speech was good.
77 D CLEM: You haven't heard it.
78 D ROSS: I know you.
79 A ¶ She laughs.
* 80 A It is half a sob.
81 A He reaches for her hand.
82 A She lets him take it for exactly one heartbeat, then pulls free and walks toward the tower.
83 A ¶ He stays behind, alone at the rail, watching the violet sea.
84 A Lena returns and takes his empty flute.
85 D LENA: She'll come around.
86 D ROSS: She already did.

### SCENE s01520 | INT. SALT WAREHOUSE - DAWN
Detected names (may be incomplete or contain aliases): SERGEANT ODALYS BRANTZ, VASKO, CORPORAL HIROSHI MAEDA
* 1 A ¶ Mountains of grey salt.
* 2 A Rafters.
* 3 A Dust in slanted light.
4 A ¶ SERGEANT ODALYS BRANTZ, 40s, cracked lips, rifle slung low, drags a wounded boy through the doorway.
5 A ¶ PVT.
6 A TEODOR "TEDDY" VASKO, 19, bleeding thigh, grips her collar.
7 A ¶ CORPORAL HIROSHI MAEDA, 30s, wire-thin, covers the door.
8 A Counts rounds.
9 A Counts again.
10 D BRANTZ: Down. Behind the big pile.
11 D VASKO: I can walk.
12 D BRANTZ: You can't.
13 D MAEDA (muttering): Eleven. Eleven. Eleven.
* 14 A ¶ Boots outside.
* 15 A Gravel.
* 16 A Stop.
17 A ¶ Brantz and Maeda freeze.
18 A Vasko stops breathing.
19 D BRANTZ (whisper, to Maeda): Window.
20 D MAEDA: Boarded.
21 D VASKO: Sarge, I hear--
22 D BRANTZ: Quiet.
23 D MAEDA: Sarge, they're at the--
24 D VASKO: They're at the back too.
25 D BRANTZ: Everyone shut up.
* 26 A ¶ A shadow crosses the slats.
* 27 A Gone.
28 D MAEDA (to himself): Breathe. Count. Breathe.
29 A ¶ Brantz slides a canteen to Vasko.
30 A He fumbles it.
* 31 A It clangs.
32 A ¶ All three flinch.
* 33 A ¶ A shout outside.
* 34 A Another.
* 35 A Running feet.
36 D BRANTZ (to all): Positions. Now.
37 A ¶ Vasko drags himself behind a salt drift.
38 A Maeda drops to one knee.
39 A Brantz climbs a crate.
40 D MAEDA: How many?
41 D BRANTZ: Enough.
42 D VASKO: Sarge, I can't feel my leg.
43 D BRANTZ: Then you can't feel it hurt. Good.
* 44 A ¶ The door shudders.
* 45 A A rifle butt splinters the wood.
46 A ¶ Maeda fires.
47 A Brantz fires.
* 48 A Salt sprays like snow.
49 D VASKO: I got one! I got--
50 D MAEDA: Down, Teddy!
51 D BRANTZ: Maeda, left!
* 52 A ¶ The door bursts.
* 53 A A grenade skitters across the floor.
54 A ¶ All three scatter.
55 A Brantz dives for Vasko.
56 A Maeda hurls himself at the grenade, kicks it back out the door.
* 57 A ¶ BOOM.
* 58 A Salt rains from the rafters.
* 59 A ¶ Silence.
* 60 A Ringing ears.
61 D MAEDA (coughing): Eleven. Ten.
62 A ¶ Brantz hauls Vasko up.
63 A Vasko grins, white with salt.
64 D VASKO: Still here.
65 D BRANTZ: Move.

### SCENE s01521 | INT. GREENHOUSE ON A DISUSED FERRY - EVENING
Detected names (may be incomplete or contain aliases): ISOLDE FAIRWEATHER-NKEMELU, DESMOND ACHTERBERG, GRETA, OYELARAN
* 1 A ¶ A car ferry long retired from its route, moored and rusting at a quiet estuary.
* 2 A Its vehicle deck has been roofed with glass and turned into a nursery of citrus trees in tubs.
* 3 A Lamps hum.
* 4 A The air is warm, bitter-sweet, and smells of leaf and engine oil.
5 A ¶ ISOLDE FAIRWEATHER-NKEMELU, 34, sleeves rolled, soil to the elbows, prunes a lemon tree with more force than the tree needs.
6 A Her wedding ring hangs on a string around her neck instead of her finger.
7 A ¶ Across the aisle, DESMOND ACHTERBERG, 36, in a good coat that does not belong among the tubs, holds a paper bag of pastries as if it were a summons.
8 A He has not put it down since he arrived.
9 A ¶ Between them, perched on an upturned crate and reading a seed catalogue she is not reading, sits MARGUERITE "GRETA" OYELARAN, 70, Isolde's landlady and the ferry's last pilot.
10 A ¶ Isolde snips a branch.
* 11 A It falls.
12 A Desmond watches it fall.
13 D DESMOND: You've moved the tangerines.
14 D ISOLDE: They wanted light.
15 D DESMOND: They used to be by the stairs.
16 D ISOLDE: Things shift.
17 D GRETA (turning a page): The lemons shifted too. Nobody asked them.
18 A ¶ Desmond sets the bag down on a workbench.
19 A Takes it up again.
20 D DESMOND: I brought the ones with the almond.
21 D ISOLDE: I don't eat those anymore.
22 D DESMOND: Since when?
23 D ISOLDE: Since a while.
24 D DESMOND: You loved those.
25 D ISOLDE: I loved a lot of things at the time.
26 D GRETA: There's a draught from the east vent. Someone should mind it.
27 A ¶ Neither of them moves toward the vent.
28 D DESMOND: The bank wrote to me about the account. They said you'd closed your half.
29 D ISOLDE: I did.
30 D DESMOND: You could have called.
31 D ISOLDE: I could have.
32 D DESMOND: I'd have said yes.
33 D ISOLDE: You'd have said yes to anything, that month.
34 D DESMOND: That's not fair.
35 D ISOLDE: It isn't a verdict. It's a date.
36 D GRETA: Margins are thin in citrus. People forget that.
37 D DESMOND: Greta, would you mind--
38 D GRETA: I would. I've a view of the water from here and I'm using it.
39 A ¶ Isolde almost smiles.
40 A Catches herself.
41 A Snips.
42 D DESMOND: Your mother sent a card. To the flat. I didn't know what to do with it.
43 D ISOLDE: Put it in the drawer.
44 D DESMOND: I did. I took it out again.
45 D ISOLDE: And?
46 D DESMOND: It's in my coat.
47 A ¶ He does not reach for it.
48 A His hand rests on the pocket.
49 D ISOLDE: Keep it.
50 D DESMOND: It's addressed to you.
51 D ISOLDE: Then it's mine to say who keeps it.
* 52 A ¶ Silence.
* 53 A A pump clicks on somewhere below decks.
* 54 A Water moves in the pipes.
55 D DESMOND: You've lost weight.
56 D ISOLDE: You've gained a coat.
57 D DESMOND: It was a gift.
58 D ISOLDE: From?
59 D DESMOND: Does it matter?
60 D ISOLDE: Not at all.
61 A ¶ She drops the shears into a tub.
* 62 A They ring against the rim.
63 A Both of them look at the sound.
64 D GRETA (to the catalogue): Eighty-one pounds for a Buddha's hand citron. Robbery.
65 D DESMOND: I'm not here about the account.
66 D ISOLDE: I know.
67 D DESMOND: I'm not here about the card.
68 D ISOLDE: I know that too.
69 D DESMOND: The lease on the flat is up in March. I wondered if you had a view.
70 D ISOLDE: On the flat.
71 D DESMOND: On the flat.
72 D ISOLDE (a long beat): The east vent really is open.
73 A ¶ She walks to it.
74 A Closes it.
75 A Stays there with her back to him, hand flat on the cold iron.
76 A ¶ They speak at once.
77 D DESMOND: I don't know how to be in a room with you.
78 D ISOLDE: I don't know how to be in a room without you.
* 79 A ¶ Nobody moves.
80 A Greta turns a page, slowly, and does not read it.
81 D GRETA: Well. That's the first honest weather of the evening.
82 A ¶ Desmond puts the pastry bag down for the last time.
83 A Walks the length of the aisle, stops one tub short of Isolde.
* 84 A A lemon hangs between them, green, not yet ready.
85 A ¶ He lifts it gently on his palm, as if weighing it.
86 A Lets it go.
87 D ISOLDE: It needs another month.
88 D DESMOND: Does it.
89 D ISOLDE: The ones in the light, perhaps three weeks.
90 A ¶ She turns.
91 A His coat is wet at the shoulder where the roof drips.
92 A She notices.
93 A Says nothing.
94 A Takes the string from around her neck, winds the ring once about her finger, and unwinds it again.
95 D DESMOND: Three weeks.
96 D ISOLDE: The flat can wait three weeks.
97 D GRETA (standing, folding the catalogue): I'll put the kettle on. Down in the wheelhouse. It will take me a good long while.
98 A ¶ She goes.
* 99 A Her footsteps ring on the iron stairs, slow, deliberate, deliberately loud.
100 A ¶ Desmond picks the almond pastry from the bag.
101 A Offers it.
102 A ¶ Isolde looks at it.
103 A Looks at him.
104 A Takes half.

### SCENE s01522 | INT. CORPORATE WELLNESS NAP POD ROOM - DAY
Detected names (may be incomplete or contain aliases): PRIYA DESHMUKH-LOWE, WALLY, PRZYBYSZ, VP, SUNNIVA ABARA
* 1 A ¶ Six sleep pods.
* 2 A One occupied.
* 3 A Whale sounds on a loop.
4 A ¶ PRIYA DESHMUKH-LOWE, 30s, lanyard, laptop balanced on her knees inside the pod.
5 A Typing in the dark.
* 6 A ¶ The hatch hisses open.
7 A WALTER "WALLY" PRZYBYSZ, 50s, regional VP, leans in with a clipboard.
8 D WALLY: Priya. Nap quota's twenty minutes.
9 D PRIYA: This is a nap.
10 D WALLY: You're answering email.
11 D PRIYA: Napping with intent.
12 A ¶ Wally ticks a box.
13 A Writes.
14 A Frowns.
* 15 A ¶ Behind him, the door swings.
16 A DR. SUNNIVA ABARA, 40s, Chief Wellbeing Officer, crisp blazer, tablet like a shield.
17 D SUNNIVA: Walter. Is she charging overage?
18 D WALLY: She's... overachieving.
19 D SUNNIVA (to Priya): I need you rested for the layoff announcement.
20 A ¶ Priya's typing stops.
21 A Wally's pen stops.
* 22 A The whales go on.
23 D PRIYA: When?
24 D SUNNIVA: After your nap.
25 A ¶ Priya closes the laptop.
26 A Smiles.
27 A Lies back, hands folded like a corpse.
28 D WALLY (whisper to Sunniva): She knows.
29 D SUNNIVA: She knows nothing.
30 A ¶ Priya snores.
31 A Loudly.
32 A Fakely.
33 A ¶ Wally sweats.
34 A Sunniva checks her watch.
* 35 A The whales sing.

### SCENE s01523 | INT. DRAINED PUBLIC SWIMMING POOL - NIGHT
Detected names (may be incomplete or contain aliases): CAZ, REYES-MORROW, LUDDY, KOVAC, TOMAS
* 1 A ¶ Empty deep end.
* 2 A Cracked blue tiles.
* 3 A A single work light on a stand.
* 4 A Rain taps the skylights.
5 A ¶ CASPIAN "CAZ" REYES-MORROW, 40s, rumpled suit, sits on the pool ladder, briefcase on his lap.
6 A Waiting.
* 7 A ¶ Footsteps echo above.
8 A A woman descends the shallow-end stairs, hands visible.
9 A ¶ LUDMILA "LUDDY" KOVAC, 30s, leather jacket, calm to the point of insult.
10 D LUDDY: Caz.
11 D CAZ: Luddy. You're early.
12 D LUDDY: You're sweating.
13 D CAZ: It's a pool. Humidity.
14 D LUDDY: It's empty.
15 A ¶ She tilts her head at the briefcase.
16 A He tightens his grip.
17 D LUDDY [CONT'D]: Where's Tomas?
18 D CAZ: Parking.
19 D LUDDY: Tomas doesn't drive.
* 20 A ¶ A beat.
* 21 A The rain gets louder.
* 22 A Somewhere a pipe knocks.
23 D CAZ: He learned.
24 D LUDDY: Caz.
25 D CAZ: Luddy, don't.
26 A ¶ She walks the slope of the pool floor, slow, boots squeaking on old algae.
27 A Caz stands, the ladder clanking, and sets the briefcase between them on the tile.
28 A He steps back.
29 A She does not step forward.
30 A Above, a shadow slides across the skylight and is gone, and Caz looks up while Luddy looks at him.
31 D LUDDY [CONT'D]: That's not Tomas.
32 D CAZ: It's the wind.
33 D LUDDY: It's Dutch Maren. I can smell the cigarettes.
34 D CAZ: Luddy, I had no choice.
35 D LUDDY: Everyone says that at the end.
* 36 A ¶ A metal door bangs open above.
* 37 A Heavy steps.
* 38 A A voice, thick and amused, rolls down the tiles.
39 D TOMAS [O.S.]: Caz, my friend. You were supposed to be quiet.
40 A ¶ Caz drops.
41 A Luddy draws a pistol from her jacket, spins, fires at the light stand.
* 42 A Glass bursts.
* 43 A Darkness, except the faint blue of the skylights.
44 A Caz crawls behind the ladder, hugging the briefcase, while Luddy slides down the wall of the deep end and Tomas' boots clatter on the steps, unhurried, a man descending to a party.
45 D TOMAS [O.S., CONT'D]: Luddy. You always did love a dramatic entrance.
46 D LUDDY (whisper): Caz, open the case.
47 D CAZ: There's nothing in it.
48 D LUDDY: What?
49 D CAZ: There was never anything in it!
50 A ¶ Tomas laughs in the dark.
* 51 A A lighter flicks.
52 A A small flame shows his face at the lip of the pool, smiling.

### SCENE s01524 | INT. TAXIDERMY SHOP - DAY
Detected names (may be incomplete or contain aliases): BARNEY, QUIGLEY, NADIA FONTAINE-OKAFOR
* 1 A ¶ Glass eyes everywhere.
* 2 A A badger in a tutu.
* 3 A A moose wearing sunglasses.
4 A ¶ BARNABY "BARNEY" QUIGLEY, 40s, apron, tweezers, is mid-surgery on a pheasant.
* 5 A ¶ The bell jingles.
6 A In steps NADIA FONTAINE-OKAFOR, 30s, in a black dress and veil, holding a shoebox.
7 D NADIA: Barney.
8 D BARNEY: Nadia. Hey. Sorry. Don't touch the badger.
9 D NADIA: I need Mr. Biscuit preserved.
10 D BARNEY: Mr. Biscuit.
11 D NADIA: My hamster.
12 D BARNEY: Oh. Oh no.
13 D NADIA: Don't "oh no" me. I paid eleven dollars to a priest.
14 D BARNEY: Hamsters are tiny. The skin's like tissue. It's basically origami.
15 D NADIA: Then fold him.
16 A ¶ She puts the shoebox on the counter.
17 A Opens it.
18 A They both lean in.
19 D BARNEY: He looks peaceful.
20 D NADIA: He looks stuffed already.
21 D BARNEY: That's rigor, Nadia.
22 D NADIA: Don't say rigor in front of him.
23 D BARNEY: Okay. Okay. Pose?
24 D NADIA: Running on the wheel.
25 D BARNEY: I don't have a wheel.
26 D NADIA: You have a moose in sunglasses, Barney. Find a wheel.
27 D BARNEY: That moose is a commissioned work.
28 D NADIA: By whom?
29 D BARNEY: A very rich man named Gus.
30 D NADIA: Is Gus alive?
31 D BARNEY: Barely. Moose, though. Moose is forever.
32 A ¶ Nadia picks up the tweezers.
33 A Aims them at Barney like a tiny sword.
34 D NADIA: Wheel. Hamster. Today.
35 D BARNEY: Nadia, it's a three-week turnaround.
36 D NADIA: Barney, he's thawing.
37 D BARNEY (grabbing the box): Right. Wheel. Found one.
38 A ¶ He sprints to the back.
* 39 A Crash.
* 40 A Squeak.
* 41 A A rubber duck rolls out.
42 D NADIA (calling): That's a duck!
43 D BARNEY [O.S.]: It's a start!

### SCENE s01525 | INT. NIGHT FERRY CAR DECK - NIGHT
Detected names (may be incomplete or contain aliases): MAN, LINDQVIST, DECKHAND KOFI ASANTE, HENRIK
* 1 A ¶ Cars parked in rows.
* 2 A Engine drone.
* 3 A Fluorescent tubes flicker.
* 4 A Salt wind slaps through the half-open bow.
5 A ¶ A MAN in a grey raincoat sits alone in a dented Volvo, engine off.
6 A Hands on the wheel.
7 A Watching the mirror.
8 A ¶ A woman walks the aisle between cars.
9 A Torch in hand.
10 A Ferry uniform.
11 A Her badge reads P. LINDQVIST.
12 A ¶ She raps the glass.
13 A ¶ The Man lowers the window two inches.
14 D LINDQVIST: Sir. Passengers must leave the deck during crossing.
15 D MAN: I'm fine here.
16 D LINDQVIST: It's a rule.
17 D MAN: I'm unwell. I'd rather not climb the stairs.
18 A ¶ She studies him.
* 19 A Torch beam on his hands.
* 20 A On the wet hem of the coat.
21 D LINDQVIST: You're soaked, sir.
22 D MAN: Seasick.
23 D LINDQVIST: We haven't left the pier.
24 A ¶ The Man says nothing.
25 A ¶ A third figure steps from behind a pickup, thirty feet back.
26 A A young deckhand, cap pulled low.
27 A ¶ DECKHAND KOFI ASANTE, 20s, sees them.
28 A Stops.
29 D KOFI: Pia? Everything okay?
30 D LINDQVIST: Kofi. Stay there.
31 D KOFI: Who's he?
32 D LINDQVIST: I'm finding out.
33 A ¶ The Man opens his door slowly.
34 A Steps out.
* 35 A Rain on the deck.
36 A He holds his palms up.
37 D MAN: I'm not armed.
38 D LINDQVIST: Nobody said you were.
39 D MAN: Nobody had to.
40 A ¶ Kofi edges closer, hand on a pry bar at his belt.
41 D KOFI: Pia, his boot. There's blood.
42 A ¶ Lindqvist looks down.
* 43 A A dark smear at the heel.
44 D LINDQVIST: Sir. Whose is that?
45 D MAN: Mine.
46 D LINDQVIST: Show me where you're hurt.
47 D MAN: I'm not.
48 D KOFI: Then it's not yours.
* 49 A ¶ A long pause.
50 A The Man exhales.
51 A Shoulders drop.
52 D MAN: Her name was Annelie.
53 D LINDQVIST: Annelie who?
54 D MAN: My sister.
55 D KOFI: Where is she?
56 D MAN: At the terminal. In the lockers.
57 A ¶ Lindqvist's torch wavers.
58 A Kofi swears under his breath.
59 D LINDQVIST (into her radio): Bridge, this is Lindqvist. Hold the ramp. Call the harbour police.
* 60 A ¶ The radio hisses.
61 A Lindqvist presses the key again.
62 D LINDQVIST: Hold the ramp. Now.
63 A ¶ The Man sits down on the wet deck beside his car.
64 A Folds his hands in his lap.
65 D MAN: I'm Henrik. Henrik Bjornsson. You'll want that for your report.
66 D LINDQVIST: Stay where you are, Mr. Bjornsson.
67 D HENRIK: I'm not going anywhere. I couldn't if I tried.
68 A ¶ Kofi lowers the pry bar.
69 A Lindqvist keeps the torch on Henrik's face, steady.
70 D LINDQVIST: Kofi. Blanket from the lifeboat store.
71 D KOFI: Pia, he--
72 D LINDQVIST: He's cold, Kofi. Get the blanket.
73 A ¶ Kofi runs.
* 74 A His steps ring down the deck.
75 D HENRIK (quietly): She'd have liked the crossing.
76 A ¶ Lindqvist says nothing.
* 77 A The engines catch, a long low shudder through the steel.
* 78 A The ramp groans, halts, and holds.
79 D HENRIK [CONT'D]: Is it always this loud?
80 D LINDQVIST: You get used to it.
81 D HENRIK: I don't think I will.
* 82 A ¶ Blue lights bloom against the bow doors.
* 83 A Rain slants through them.
84 A ¶ Lindqvist crouches, torch lowered.
85 A Henrik looks up at her, face wet and open, nothing left in it to hide.
86 D KOFI [O.S.] (running back): I've got it! I've got the blanket!
87 A ¶ He skids in, drapes it around Henrik's shoulders.
88 A Henrik pulls it tight.
89 D HENRIK: Thank you.
90 D KOFI (stiff): Yeah.
* 91 A ¶ Footsteps on the ramp.
* 92 A Many.
93 A Lindqvist stands.
94 D LINDQVIST: Here we go.
95 A ¶ She steps aside.
96 A The police come into the light.

### SCENE s01526 | INT. COMMUNITY LAUNDROMAT-TURNED-CO-WORKING SPACE - DAY
Detected names (may be incomplete or contain aliases): GREG, ABERNATHY-LIU, TAMSIN HOLLOWAY, OSWALDO PINTO, FATIMA AL-RASHID, KEN, BOATENG, ROSALIND MCCREADY
* 1 A ¶ Washers and dryers still line the walls, now labeled "Focus Pods."
* 2 A Beanbags sit on folding tables.
* 3 A A neon sign reads: SYNERGY SPIN.
* 4 A ¶ At a long table, a quarterly planning meeting is underway.
5 A ¶ GREGORY "GREG" ABERNATHY-LIU, 40s, founder, pacing in a gilet.
6 A He holds a clicker connected to nothing.
7 A ¶ TAMSIN HOLLOWAY, 30s, head of People, takes minutes on a laptop with a sticker reading "Be Kind."
8 A ¶ OSWALDO PINTO, 50s, finance, eats an apple methodically and watches the spreadsheet on the wall.
9 A ¶ FATIMA AL-RASHID, 20s, junior designer, sits very still on a beanbag, holding a mug in both hands.
10 A ¶ KENNETH "KEN" BOATENG, 30s, engineer, has headphones around his neck and a drying rack sock stuck to his sleeve.
11 A ¶ At the end of the table, ROSALIND MCCREADY, 60s, investor, in a trench coat, listens without taking it off.
12 D GREG: So, Q3. Big wins. Big, big wins.
13 D OSWALDO: We lost forty thousand dollars.
14 D GREG: In a growth mindset, that's investment.
15 D OSWALDO: In a finance mindset, that's forty thousand dollars.
16 D TAMSIN: Let's hold space for both framings.
17 D KEN: Can we hold space for the dryer? It's been beeping for ten minutes.
18 D FATIMA: It's mine. It has my lunch in it.
19 D KEN: Why is your lunch in a dryer?
20 D FATIMA: It's the only thing that gets warm.
21 A ¶ Rosalind sets down her pen.
22 D ROSALIND: Greg, what is the burn rate?
23 D GREG: Healthy.
24 D OSWALDO: Fourteen thousand a month.
25 D ROSALIND: And revenue?
26 D GREG: We're pre-revenue.
27 D OSWALDO: We're pre-everything.
28 D TAMSIN: Oswaldo, let's try to stay solutions-oriented.
29 D OSWALDO: The solution is a loan officer.
30 A ¶ Greg clicks the clicker.
31 A Nothing happens.
32 A He clicks harder.
33 D GREG: This is our roadmap.
* 34 A ¶ The wall flashes.
* 35 A A slide: a drawing of a washing machine with a rocket strapped to it.
36 D FATIMA (quietly): I drew that at two a.m.
37 D ROSALIND: It is... bold.
38 D GREG: Thank you, Rosalind.
39 D ROSALIND: That was not praise.
40 D KEN: Does the rocket actually work?
41 D GREG: It's a metaphor.
42 D KEN: For what?
43 D GREG: For ascent.
44 D OSWALDO: Of the debt.
45 A ¶ Tamsin types it down.
46 A Deletes it.
47 A Types it again.
48 D TAMSIN: I'm recording "alignment challenges."
49 D ROSALIND: Record that I'm leaving in five minutes.
50 D GREG: We haven't done the offsite.
51 D ROSALIND: Where is the offsite?
52 D GREG: Also here. Tomorrow. With cake.
53 D FATIMA: Is the cake in the dryer?
54 A ¶ Ken laughs.
55 A Stops.
56 A Looks at Greg, who is not laughing.
57 D KEN: Sorry.
58 D GREG: We don't apologise for joy at Synergy Spin.
59 D OSWALDO (low): We apologise for invoices.
60 A ¶ The dryer buzzes for the last time.
61 A Fatima rises, opens its round door, and pulls out a steaming paper bag.
62 A She sets it on the table and unfolds it carefully.
* 63 A ¶ A sandwich.
* 64 A Slightly flattened.
* 65 A Warm.
66 A ¶ She offers half to Rosalind.
67 A ¶ Rosalind studies it.
68 A Takes it.
69 D ROSALIND: This is the best thing I have seen all quarter.
70 D GREG (stricken): We have a roadmap.
71 D ROSALIND: You have a sandwich.
72 A ¶ She bites into it.
73 A Greg turns back to the wall, clicker raised, and the rocket flashes on, and on.
74 D TAMSIN: Moving to Q4.

### SCENE s01527 | INT. FUNERAL PARLOUR VIEWING ROOM - NIGHT
Detected names (may be incomplete or contain aliases): GUS, MARLOWE-DIAZ, DETECTIVE CORDELIA VANTERPOOL
* 1 A ¶ A narrow room of lilac carpet and low lamps.
* 2 A A closed casket on trestles, a spray of white carnations beside it.
* 3 A The only sound is the refrigeration unit breathing behind the wall.
4 A ¶ AUGUSTINE "GUS" MARLOWE-DIAZ, 50s, in a tidy black suit, sits in the front row with his hat on his knee.
5 A He has the steady manner of a man long used to waiting rooms.
6 A His shoes are polished to a high gloss.
* 7 A ¶ The door opens softly.
8 A DETECTIVE CORDELIA VANTERPOOL, 40s, in a damp mackintosh, enters without a sound.
9 A She stands at the back and does not sit.
10 D CORDELIA: Mr. Marlowe-Diaz.
11 D GUS: Detective. You came.
12 D CORDELIA: You asked me to.
13 D GUS: I did.
14 A ¶ She walks the aisle.
* 15 A Her heels leave faint prints in the nap of the carpet.
16 A She stops beside the casket.
17 A Rests two fingers on its lid, then removes them.
18 D CORDELIA: You've kept the lamp low.
19 D GUS: She disliked bright rooms.
20 D CORDELIA: So I've heard.
21 D GUS: Tea? The undertaker left a flask. It's still warm.
22 D CORDELIA: No. Thank you.
23 D GUS: It's good tea.
24 A ¶ He pours himself one anyway.
25 A Hands steady.
26 A Offers her the second cup with a small, courteous tilt of the head.
27 A She takes it, finally, and holds it without drinking.
28 D CORDELIA: You told the desk sergeant you had something to say about the night she died.
29 D GUS: I did. I do. Only I'd like to say it sitting down, and I'd like you to sit too.
30 A ¶ She hesitates, then lowers herself into the chair beside him.
* 31 A The cup rattles faintly on its saucer.
32 A He notes it, and says nothing.
33 D GUS [CONT'D]: Forty years, I managed that warehouse. Never late. Never ill.
34 D CORDELIA: So the file says.
35 D GUS: And she managed me. In her way.
36 D CORDELIA: In her way.
37 D GUS: She kept the accounts. She kept the house. She kept a good many other things besides.
38 A ¶ Cordelia turns the cup in its saucer.
* 39 A The tea has gone still.
40 D CORDELIA: Mr. Marlowe-Diaz, the coroner's report mentions bruising on the wrists.
41 D GUS: Does it?
42 D CORDELIA: It does.
43 D GUS: How unfortunate.
44 A ¶ He sips.
45 A Sets the cup down with great care, in exactly the ring it left on the saucer before.
* 46 A The refrigeration unit cycles off.
* 47 A The room is suddenly, ferociously quiet.
48 D CORDELIA: The nephew told us she had been afraid.
49 D GUS: Marcus talks a great deal.
50 D CORDELIA: Of whom was she afraid?
51 D GUS: Of the dark, mostly. The dark and the stairs.
52 D CORDELIA: The stairs.
53 D GUS: Steep. Narrow. I told her a hundred times.
54 A ¶ Cordelia sets down her cup.
55 A Reaches into her mackintosh.
56 A Draws out a brown paper evidence bag, and places it on the empty chair on her other side.
57 D GUS [CONT'D] (not looking at it): You'll want to be careful. That's an old house. Things come apart.
58 D CORDELIA: This came apart on a Tuesday.
59 D GUS: Tuesday.
60 D CORDELIA: You told us you were at the lodge until midnight.
61 D GUS: So I was.
62 D CORDELIA: The lodge was closed for repairs. The caretaker has a sign-in book. She signed in alone.
63 A ¶ For the first time, Gus turns his head.
64 A The courteous mask does not slip.
65 A It simply stops being worn.
66 D GUS: Cordelia. May I call you Cordelia?
67 D CORDELIA: No.
68 D GUS: She did not suffer.
69 D CORDELIA: That is not for you to say.
70 D GUS (softly): No. I suppose it isn't.
71 A ¶ He rises, brushes his trousers, and settles his hat on his head.
72 A Holds out both wrists, side by side, palms up, as if waiting for a bracelet or a blessing.
73 A ¶ Cordelia takes the evidence bag from the chair.
74 A Does not open it.
75 A Does not need to.
76 D CORDELIA: Sit down, Mr. Marlowe-Diaz.
77 D GUS: I would rather stand.
78 D CORDELIA: Then stand.
* 79 A ¶ Outside, a car door closes.
* 80 A Footsteps on gravel.
* 81 A The lamp flickers once, and steadies.

### SCENE s01528 | INT. LIGHTHOUSE KEEPER'S KITCHEN - NIGHT
Detected names (may be incomplete or contain aliases): POLLY, ADEYEMI-CROSS, JUNIOR, RADIO
* 1 A ¶ A storm shakes the shutters.
* 2 A A radio crackles on the table beside a cold stew.
3 A ¶ LEOPOLDINA "POLLY" ADEYEMI-CROSS, 60s, grips the edge of the sink.
4 A She is looking at nothing.
5 A ¶ Her son JUNIOR, 30s, stands in the doorway with a duffel bag, rain on his shoulders.
6 A He doesn't take another step.
7 D RADIO [V.O.]: Coast guard to Beacon Nine. Polly, do you copy? Over.
8 A ¶ She doesn't answer.
9 A He crosses to the table and lifts the handset.
10 D JUNIOR: It's Junior. She's here.
11 D RADIO [V.O.]: Junior. The Marguerite went down off the point. Your father's boat. We have two survivors. Not him yet. Over.
12 A ¶ He puts it down.
13 A Doesn't release it.
14 A She turns.
15 D POLLY: Say it.
16 D JUNIOR: Mama.
17 D POLLY: Say what they said.
18 D JUNIOR: Not him yet.
19 A ¶ She hurls the stew bowl at the wall.
* 20 A It shatters.
21 A He flinches but does not move.
22 A ¶ She slumps into a chair, breathing hard.
23 A He kneels before her.
24 A Takes her hands.
25 D POLLY: Don't you dare.
26 D JUNIOR: Mama, I'm here.
27 D POLLY (small): Light the lamp.
28 A ¶ He nods.
29 A Rises, crosses to the stairs.
30 A She watches him go up into the dark.

### SCENE s01529 | INT. BOWLING ALLEY LEAGUE NIGHT - NIGHT
Detected names (may be incomplete or contain aliases): RUSSELL KOWALCZYK, DARLENE OSEI-WRIGHT, MARIANNE TOUSSAINT, BO
* 1 A ¶ Lane 7.
* 2 A Scoreboard flickering.
* 3 A Beer pitchers sweating.
* 4 A Pins crash somewhere behind.
5 A ¶ Four people at a table bolted to the floor: two couples who used to be friends.
6 A ¶ RUSSELL KOWALCZYK, 40s, wears a team shirt that reads "Pin Pals."
7 A He keeps score by hand.
8 A Pencil only.
9 A ¶ DARLENE OSEI-WRIGHT, 40s, his wife, nurses a ginger ale.
10 A She hasn't looked at the scoreboard.
11 A ¶ MARIANNE TOUSSAINT, 40s, sits very straight, purse in lap.
12 A She is waiting for something.
13 A ¶ BEAUFORT "BO" TOUSSAINT, 40s, her husband, lifts the ball from the return and weighs it.
14 D BO: Your frame, Russ.
15 D RUSSELL: Yep.
16 A ¶ He doesn't rise.
17 A Marianne glances at Darlene.
18 A Darlene studies the carpet.
19 D BO: Russ?
20 D RUSSELL: I'm thinking.
21 D DARLENE: He's always thinking when he's winning.
22 D RUSSELL: He's not winning.
23 D MARIANNE: Who isn't?
24 D RUSSELL: Nobody. Forget it.
* 25 A ¶ The ball clacks back down the return.
26 A Bo catches it.
27 A He holds it like a small planet.
28 D BO: Eleven pins left standing from the last. Somebody's got to knock them down.
29 A ¶ Marianne stands.
30 A Smooths her skirt.
31 D MARIANNE: I need air.
32 D DARLENE: I'll come.
33 D MARIANNE: No.
34 A ¶ Darlene sits.
35 A Russell's pencil taps the table.
* 36 A Tap.
* 37 A Tap.
* 38 A Tap.
39 D BO: That's a lot of noise for a quiet man.
40 D RUSSELL: That's a lot of talk for a man who never says anything.
41 D BO: Say what you mean.
42 D RUSSELL: I'll say it on the lane.
43 A ¶ He rises, takes the ball from Bo, and walks to the line.
44 A Bo follows two steps behind.
45 A Darlene half-stands.
46 A ¶ Russell throws.
* 47 A Pins explode.
* 48 A ¶ Strike.
49 A ¶ He turns.
50 A Bo's hand is already on his collar.
51 A Russell shoves him.
52 A Bo shoves back.
* 53 A The table rattles.
* 54 A Pitchers slide.
55 A Darlene grabs a glass and ends up with it in her fist, shaking.
56 D DARLENE: Stop it. Stop it!
57 A ¶ The two men freeze, chest to chest.
58 A Marianne appears in the doorway, coat on, keys in hand.
59 A She looks at all three.
* 60 A ¶ Nobody speaks.
* 61 A Beyond them, the pinsetter lowers its rack, and the ten pins stand back up.

### SCENE s01530_0 | INT. UNDERGROUND PARKING LEVEL P4 - NIGHT
Detected names (may be incomplete or contain aliases): NADEZHDA VOLKOVA-REYNOLDS
* 1 A ¶ Concrete pillars.
* 2 A Humming strip lights.
* 3 A One car left: a silver sedan with its trunk open.
4 A ¶ NADEZHDA VOLKOVA-REYNOLDS, 30s, trench coat, crouches by the rear wheel.
5 A A phone in her hand, held flat like a tray.
6 A Her breath fogs.
7 A ¶ She thumbs the screen.
* 8 A A voice memo plays.
* 9 A Her own voice, recorded earlier, calm and clipped.
10 D NADEZHDA [V.O.]: If you are hearing this, level four is clear. Listen carefully. Do not skip.
11 D NADEZHDA (to the phone): I'm not skipping.
12 D NADEZHDA [V.O.]: Check the trunk.
13 A ¶ She stands.
14 A Scans the pillars.
15 A Slowly.
16 A Crosses to the sedan and looks in.
17 A Her face tightens.
18 D NADEZHDA: Empty.
19 D NADEZHDA [V.O.]: Check again.
20 A ¶ She lifts the felt lining.
* 21 A Under it, a small black flash drive taped to the floor.
22 A She peels it free.
23 D NADEZHDA: Got it.
24 D NADEZHDA [V.O.]: Good. Now walk to the stairwell. Do not use the elevator.
25 A ¶ She stops.
26 A Looks at the elevator.
* 27 A Its numbers are climbing: 1.
* 28 A 2.
* 29 A 3.
30 D NADEZHDA: Why not the elevator?
31 D NADEZHDA [V.O.]: Because I know what I know, and you do not.
32 D NADEZHDA: That's not an answer.
33 D NADEZHDA [V.O.]: It is the only one I left you.
* 34 A ¶ The numbers climb.
* 35 A 4.
* 36 A A ping.
* 37 A The doors slide open on an empty car.
38 A ¶ She backs away, heels clicking on concrete.
* 39 A Footsteps start somewhere behind the pillars.
* 40 A More than one pair.
* 41 A Unhurried.
42 D NADEZHDA (whisper): They're here.
43 D NADEZHDA [V.O.]: Do not turn around.
44 A ¶ She freezes.
* 45 A A ceiling camera swivels, tracking her.
46 D NADEZHDA: I recorded this at two a.m. I was drunk.
47 D NADEZHDA [V.O.]: You were sober. You were terrified. Walk.
48 A ¶ She drops the phone.
49 A Stamps it into splinters.
50 A Sprints for the stairwell, shoulders the steel door, and it slams behind her.

### SCENE s01530_1 | INT. STAIRWELL - CONTINUOUS
Detected names (may be incomplete or contain aliases): NADEZHDA
* 1 A ¶ Bare concrete.
* 2 A A flight up, a flight down.
3 A She stops.
4 A Breathing hard.
5 A Listens.
* 6 A ¶ Below, a door opens.
* 7 A Above, a door opens.
8 D NADEZHDA: Okay. Okay. Think.
9 A ¶ She turns the flash drive over.
* 10 A A tiny label, handwritten, in her own script.
11 A She reads it.
12 A Her eyes widen.
13 D NADEZHDA [CONT'D]: No. No, no.
* 14 A ¶ Footsteps from both directions, converging.
15 A She backs against the wall and slides down until she sits, the drive clutched to her chest.
* 16 A ¶ A cracked air vent above the landing.
17 A She notices it.
18 A Stares.
19 D NADEZHDA [CONT'D]: Of course it's a vent.
20 A ¶ She climbs onto the rail.
21 A Tests the grille.
* 22 A It gives.
23 A She hauls herself up and in, scraping her coat, legs vanishing just as two pairs of boots reach the landing below.

### SCENE s01530_2 | INT. VENT SHAFT - CONTINUOUS
Detected names (may be incomplete or contain aliases): 
* 1 A ¶ Tight metal.
* 2 A Dust.
* 3 A Her breath loud in the tube.
4 A She crawls on elbows, the drive in her teeth.
* 5 A ¶ Far behind, voices echo, too muffled to parse.
6 A She keeps moving.
* 7 A ¶ Light ahead.
* 8 A A grille.
9 A She presses her face to it.

### SCENE s01530_3 | EXT. LOADING DOCK - CONTINUOUS
Detected names (may be incomplete or contain aliases): NADEZHDA
* 1 A ¶ Rain.
* 2 A A van idling, rear door ajar.
3 A ¶ She kicks the grille out.
* 4 A It clangs on the concrete below.
5 A She drops after it, rolls, comes up on one knee.
* 6 A ¶ The van is empty.
* 7 A On the passenger seat, a second phone, glowing.
* 8 A ¶ It rings.
9 A ¶ She stares at it.
10 A Rain runs off her chin.
11 A She steps forward and answers.
12 D NADEZHDA: Who is this?
13 D NADEZHDA [V.O.] (through the phone, her own voice): Someone who needed you to find the drive.
14 D NADEZHDA: That's my voice.
15 D NADEZHDA [V.O.]: Run.
* 16 A ¶ The line dies.
* 17 A Behind her the dock lights snap on, white and blinding.
18 A ¶ She raises the drive above her head.
19 D NADEZHDA [CONT'D] (shouting at the light): Then come and take it!
* 20 A ¶ Silence.
* 21 A The rain falls.
* 22 A The light holds.

### SCENE s01531_0 | INT. SKATE PARK CONCESSION SHACK - DUSK
Detected names (may be incomplete or contain aliases): ZEKE ADEBAYO, MILO FERRANTI-SATO, JUNE
* 1 A ¶ Hot dog roller.
* 2 A Neon "OPEN" buzzing.
* 3 A Outside, wheels rattle on concrete.
4 A ¶ ZEKE ADEBAYO, 16, hoodie, sits on an upturned milk crate.
5 A His friend MILO FERRANTI-SATO, 16, leans on the counter.
* 6 A A radio on the shelf murmurs.
7 D MILO: So she said yes.
8 D ZEKE: She said maybe.
9 D MILO: Maybe is yes with a coat on.
10 D ZEKE: Maybe is "I'll text you" and then never.
11 D MILO: She wrote it on your hand.
12 D ZEKE: In pencil. It's smudged.
13 D MILO: Dude. It's still in the shape of a number.
14 D ZEKE: It's in the shape of a seven.
15 D MILO: Then she's lucky. Seven's lucky.
16 D ZEKE: Is that supposed to help?
17 D MILO: No. I just wanted to say it.
18 D JUNE [O.S.] (outside, shrill): Somebody get a towel! Now!
19 A ¶ Both boys look up.
20 A Zeke slides off the crate.
21 D ZEKE: That's her.
22 D MILO: That's a fight.
* 23 A ¶ Outside, shouting.
* 24 A A board clatters.
25 A Zeke and Milo bolt for the door and collide in the frame, jam, untangle, and spill out onto the concrete.

### SCENE s01531_1 | EXT. SKATE PARK - CONTINUOUS
Detected names (may be incomplete or contain aliases): JUNE, ZEKE
* 1 A ¶ A knot of kids around the bowl.
2 A At the centre, JUNE, 16, nose bleeding, faces a bigger boy.
* 3 A The crowd scatters as sirens approach, boards under arms.
4 A ¶ Zeke stops.
5 A Milo almost runs into him.
6 D ZEKE: There she is.
7 D JUNE (spotting him, wiping her nose): Zeke! You came!
8 D ZEKE: I came.
9 A ¶ She grins through the blood and holds up her hand.
* 10 A A phone number, smudged across the palm.
* 11 A Fresh ink.
12 D JUNE: Got it written again. Permanent marker.
13 A ¶ Zeke laughs, huge and helpless, as the blue lights wash over them all.

### SCENE s01532 | INT. COUNTY FAIR - PIE TENT - DAY
Detected names (may be incomplete or contain aliases): PENNY, MAUDE ASHWORTH-BELL, CROMWELL, WILLIE, TANAKA
* 1 A ¶ A canvas tent in the August glare.
* 2 A Long tables of judged pies, blue ribbons pinned like medals.
* 3 A Flies drone.
* 4 A A fan turns slowly overhead.
5 A ¶ PENELOPE "PENNY" ASHWORTH-BELL, 16, in a gingham apron two sizes too large, stands guard over a single lattice-topped peach pie.
6 A Her fingers are stained with flour and nerves.
7 A ¶ Her grandmother, MAUDE ASHWORTH-BELL, 70s, enormous sunhat, sits on a folding chair behind her and says nothing, in the way only grandmothers can.
8 A ¶ Down the row, JUDGE THEODORE "TEDDY" CROMWELL, 60s, seersucker suit, moves from pie to pie with a silver fork and a stern expression.
9 A ¶ A late arrival bursts in, breathless.
10 A WILLIAM "WILLIE" TANAKA, 17, in a rumpled work shirt, grease on his cheek, carrying a pie plate wrapped in a dish towel.
11 D WILLIE: Penny! Penny, I made it.
12 D PENNY: Willie. The deadline was ten.
13 D WILLIE: It's ten-oh-four.
14 D PENNY: That's closed.
15 D WILLIE: They can't close on a four-minute margin.
16 D PENNY: They can. They have.
17 A ¶ Maude lifts her chin a fraction beneath the hat.
18 D MAUDE: Four minutes is four minutes, young man.
19 D WILLIE: Mrs. Ashworth-Bell. I didn't see you there.
20 D MAUDE: Few people do. It's a gift.
21 D WILLIE (to Penny): I stayed up all night. I burned the first one. And the second.
22 D PENNY: I can smell it.
23 D WILLIE: It's the sacrifice.
24 A ¶ She cannot help it.
25 A She laughs.
26 A Quickly claps a hand over her mouth.
27 A ¶ Judge Cromwell reaches the end of the row and looks up, eyebrow arched.
28 D CROMWELL: Is there a disturbance?
29 D PENNY: No, sir.
30 D WILLIE: Yes, sir. I'm late.
31 D CROMWELL: Hm.
32 A ¶ He studies the dish towel in Willie's hands.
* 33 A The corner has stained with something dark and sticky.
34 D CROMWELL [CONT'D]: What have you there, son?
35 D WILLIE: A blackberry, sir. Mostly.
36 D CROMWELL: Mostly.
37 D WILLIE: There was an incident with the oven.
38 D MAUDE (dryly): I'll bet.
39 A ¶ Cromwell holds out his hand.
40 A Willie hesitates, then unwraps the towel.
* 41 A The pie inside is lopsided, the crust charred at one edge, the filling bubbling over like lava.
42 A ¶ Penny stares at it.
43 A Then at Willie.
44 A Then at the judge.
45 D PENNY: Sir, he's late. By the rules, he can't--
46 D CROMWELL: Miss Ashworth-Bell. I have judged this tent for thirty-one years. I have never once seen a pie arrive so wretchedly.
47 D WILLIE: Thank you, sir?
48 D CROMWELL: It was not a compliment.
49 A ¶ He cuts a sliver with the silver fork.
50 A Lifts it.
51 A Tastes.
52 A ¶ Everyone holds still.
* 53 A The fan turns.
* 54 A A fly lands on the nearest table and thinks better of it.
55 D CROMWELL [CONT'D] (slowly): Burnt sugar. Lemon zest. A touch of black pepper.
56 D WILLIE: My mother's trick.
57 D CROMWELL: Hm.
58 A ¶ He takes another bite.
59 A Then a third.
60 A Then, with a visible effort at composure, sets down the fork.
61 D CROMWELL [CONT'D]: The rules are the rules. Your entry is disqualified.
62 D WILLIE: Yes, sir.
63 D PENNY: I'm sorry, Willie.
64 D CROMWELL: However.
65 A ¶ He turns and walks to the head table.
66 A Takes a small rosette from a tray.
* 67 A Not blue.
* 68 A Green.
69 A Pins it to the lapel of Willie's work shirt with brisk, painless precision.
70 D CROMWELL [CONT'D]: That is the Judge's Indulgence. It is awarded perhaps once a decade.
71 D WILLIE (whispering): Penny, I think I'm going to cry.
72 D PENNY (whispering back): Don't. You'll get it in the pie.
73 D CROMWELL: Miss Ashworth-Bell, your peach has a fine lattice. Competent. Tidy.
74 D PENNY: Tidy?
75 D CROMWELL: First place.
76 A ¶ Penny's mouth falls open.
77 A Maude, behind her, finally smiles beneath the hat.
78 D PENNY (to Willie, at once with Cromwell): You beat me by being late!
79 D CROMWELL: The tent is closed to further questions.
80 A ¶ He marches off with the silver fork.
81 A The two teenagers look at each other, unable to speak.
82 D MAUDE (rising, dusting her skirt): Well. That's two ribbons and a fire hazard. Come, children. Cake.
83 A ¶ She sweeps out.
84 A Penny and Willie follow, still grinning, still stunned, the green rosette bobbing on his chest.

### SCENE s01533 | INT. HOSPITAL ROOFTOP HELIPAD - NIGHT
Detected names (may be incomplete or contain aliases): EMEKA BALOGUN-HARTE, NURSE ILSE VANDERMEER, ORDERLY DESHAWN PALMQUIST
* 1 A ¶ Wind.
* 2 A City lights below.
* 3 A A windsock snaps.
4 A ¶ DR. EMEKA BALOGUN-HARTE, 50s, scrubs under a parka, sits on a bench with a paper cup.
5 A Alone.
* 6 A Steam rises from the coffee.
* 7 A ¶ The stairwell door clangs.
8 A A young woman steps out, hood up.
9 A ¶ NURSE ILSE VANDERMEER, 20s, badge swinging.
10 A She sits beside him without asking.
11 D ILSE: Quiet night.
12 D EMEKA: Don't say that.
13 D ILSE: Sorry.
14 A ¶ She pulls her hands into her sleeves.
15 A They watch the city.
16 D EMEKA: Mrs. Okoro's husband brought her flowers.
17 D ILSE: Bed twelve.
18 D EMEKA: Yes.
19 D ILSE: They're pretty.
20 D EMEKA: Tulips.
21 D ILSE: Her favourite, he said.
22 A ¶ He nods.
23 A Sips.
24 A Sets the cup down on the bench.
25 A Turns it a quarter turn.
* 26 A ¶ The stairwell door bangs.
27 A ORDERLY DESHAWN PALMQUIST, 20s, scrubs, out of breath, leans out.
28 D DESHAWN: Doctor, they're asking for you on twelve.
* 29 A ¶ A pager chirps.
30 A Neither Emeka nor Ilse moves.
31 D ILSE [CONT'D]: That's yours.
32 D EMEKA: I know.
33 D ILSE: Aren't you going to--
34 D EMEKA: In a minute.
* 35 A ¶ The pager chirps again.
* 36 A Louder.
37 A He silences it.
38 A Folds his hands.
39 D ILSE: Doctor?
40 D EMEKA: Twenty-two years. I still can't tell them on a bad night. I wait for a good one.
41 D ILSE: Tell them what?
42 A ¶ He doesn't answer.
43 A Looks at her.
44 A Then at the stairwell door.
45 D ILSE [CONT'D]: Doctor Balogun-Harte. What did the scan show?
46 D EMEKA: Not on the rooftop.
47 D ILSE: Is it her?
48 D EMEKA: Ilse.
49 D ILSE: Is it Mrs. Okoro?
50 A ¶ He stands.
51 A Picks up the cup.
52 A Drops it into the bin without drinking.
* 53 A The coffee splashes the rim.
54 D EMEKA: She asked me this afternoon whether she could go home Friday.
55 D ILSE: And you said?
56 D EMEKA: I said we would see.
57 D ILSE (a beat): You said "we would see."
58 D EMEKA: I said it very kindly.
59 A ¶ Ilse stands too.
60 A Her hands emerge from her sleeves, one tucking a lock of hair behind her ear, the other gripping the bench rail.
61 D ILSE: Does the husband know?
62 D EMEKA: Not yet.
63 D ILSE: Those tulips.
64 D EMEKA: I know.
* 65 A ¶ The windsock snaps.
* 66 A The wind rises.
* 67 A Down in the city a siren begins and fades.
68 A ¶ He opens the stairwell door and holds it for her.
69 A She walks through without a word.
70 A He follows.
* 71 A The door closes on the rooftop, the bench, the bin with the spilled coffee.

### SCENE s01534 | INT. CONVALESCENT HOME SOLARIUM - AFTERNOON
Detected names (may be incomplete or contain aliases): HORATIO PEMBERTON-LAW, EUPHEMIA STANHOPE-ADEYEMI
* 1 A ¶ A glass-walled room full of wicker chairs and ferns.
* 2 A Pale sun.
* 3 A Somewhere down the corridor, a gramophone plays a waltz.
4 A ¶ DR. HORATIO PEMBERTON-LAW, 50s, in a rumpled tweed jacket, stands by the window with his hat in his hand.
5 A ¶ MRS. EUPHEMIA STANHOPE-ADEYEMI, 80s, in a shawl and a wheelchair, faces the garden.
6 A Her hands rest on a blanket.
7 D HORATIO: Good afternoon, Mrs. Stanhope-Adeyemi.
8 D EUPHEMIA: Good afternoon, Doctor. You are late.
9 D HORATIO: The train was held up.
10 D EUPHEMIA: Trains always are.
11 A ¶ He pulls up a wicker chair.
12 A Sits.
13 A Opens his bag.
14 A Closes it again without taking anything out.
15 D HORATIO: You are looking well.
16 D EUPHEMIA: I am looking at the roses.
17 D HORATIO: They are fine roses.
18 D EUPHEMIA: They are blighted. The gardener lies.
19 D HORATIO: Perhaps he is hopeful.
20 D EUPHEMIA: Perhaps he is paid by the hour.
21 A ¶ Horatio smiles.
22 A Smooths his hat.
* 23 A A nurse's shoe squeaks past in the corridor and fades.
24 D HORATIO: I have the results.
25 D EUPHEMIA: I supposed you might.
26 D HORATIO: They are not what we hoped.
27 D EUPHEMIA (a pause): Are they ever?
28 A ¶ He takes a sheet of paper from his jacket.
29 A Offers it.
30 A She doesn't take it.
31 A Instead she reaches out and presses his hand, paper and all, down onto the blanket.
32 D EUPHEMIA [CONT'D]: Read it to the roses, Doctor. They've heard worse.
33 D HORATIO: Mrs. Stanhope-Adeyemi--
34 D EUPHEMIA: Euphemia. I am too old to be called anything else by a man I like.
35 A ¶ He sets the paper on his knee.
36 A Does not read it.
37 D HORATIO: I should like to come on Thursdays.
38 D EUPHEMIA: You come on Mondays.
39 D HORATIO: Then Thursdays also.
40 D EUPHEMIA: I shall tell the gardener.
41 D HORATIO: About the Thursdays?
42 D EUPHEMIA: About the roses. He ought to be told.
43 A ¶ They both go still.
44 A Horatio looks at the paper; Euphemia looks at the glass.
45 A Neither looks at the other.
* 46 A ¶ Down the corridor the waltz ends.
* 47 A The gramophone needle hisses in the empty groove.
48 A Euphemia lifts one finger, listening.
49 D EUPHEMIA [CONT'D]: They always forget to turn it over.
50 A ¶ Horatio stands, crosses to the door, and calls softly down the hall.
51 D HORATIO (calling): Would someone turn the record, please?
52 A ¶ He returns to the chair.
* 53 A A moment later the music resumes, soft and a little slow.

### SCENE s01535 | INT. FARMHOUSE KITCHEN - EARLY MORNING
Detected names (may be incomplete or contain aliases): ANNELIESE FOSSEGARD-MBEKI, ANDREAS FOSSEGARD
* 1 A ¶ A low-beamed room that smells of woodsmoke and old bread.
* 2 A Frost climbs the window glass.
* 3 A The range ticks as it warms.
* 4 A A pot of porridge sits uncovered at the back of the stove, a skin forming.
5 A ¶ At the table, ANNELIESE FOSSEGARD-MBEKI, 17, in a school coat buttoned to the chin, sits upright with her satchel on her knees.
6 A Her boots are already laced.
* 7 A A rucksack waits by the door.
8 A ¶ Her father, ANDREAS FOSSEGARD, 50s, thick-fingered, in his barn jacket, stands at the stove and stirs the porridge with a wooden spoon, round and round, long past the point of need.
9 D ANDREAS: There's honey.
10 D ANNELIESE: I'm fine.
11 D ANDREAS: You'll want something in you for the bus.
12 D ANNELIESE: I had toast.
13 D ANDREAS: Toast isn't food.
14 D ANNELIESE: It's what Mum used to say.
15 A ¶ The spoon stops.
16 A Starts again.
17 A He lifts the pot and tips porridge into a bowl, sets it before her, and sits across, facing the door instead of her.
18 D ANDREAS: Eat, Annie.
19 A ¶ She lifts the spoon.
20 A Lowers it.
* 21 A A clock above the dresser ticks, loud as a hammer.
22 D ANNELIESE: The coach leaves at seven.
23 D ANDREAS: I know when it leaves.
24 D ANNELIESE: It's twenty past six.
25 D ANDREAS: I can tell time.
26 D ANNELIESE (muttering, to the porridge): Could have fooled me.
27 A ¶ He doesn't ask her to repeat it.
28 A His jaw works.
* 29 A Outside, a cow lows, and a gate bangs in the wind.
30 D ANDREAS: Calves'll want feeding.
31 D ANNELIESE: Jonas will do it.
32 D ANDREAS: Jonas is eleven.
33 D ANNELIESE: He's good with them.
34 D ANDREAS: He's eleven, Annie.
35 D ANNELIESE: I was eleven.
36 D ANDREAS: And look what it got you.
37 A ¶ She stands.
* 38 A The chair scrapes.
39 A She slings the satchel over her shoulder, crosses to the door, and picks up the rucksack.
40 A Her hand on the latch.
41 D ANNELIESE (to the empty hall, quietly): Be ready, Annie.
42 D ANDREAS: What did you say?
43 D ANNELIESE: Nothing. I said I'll write.
44 D ANDREAS: You won't.
45 D ANNELIESE: I will.
46 D ANDREAS: Your mother said she'd write.
* 47 A ¶ The word lands.
48 A Anneliese stands very still with her back to him.
* 49 A The range ticks.
* 50 A The porridge sits, untouched.
51 D ANNELIESE: She did write, Dad.
52 D ANDREAS: Three letters in nine years.
53 D ANNELIESE: You burned two.
54 D ANDREAS: I did not.
55 D ANNELIESE: I found the ash.
56 A ¶ He is on his feet.
* 57 A The spoon clatters to the floor.
58 A Neither of them moves to pick it up.
59 D ANDREAS: You've got your mother's mouth.
60 D ANNELIESE: You've got her coat.
61 A ¶ His eyes drop.
62 A He is wearing, under the barn jacket, a grey cardigan with a darned elbow.
* 63 A Her cardigan.
64 D ANDREAS: Get out.
65 D ANNELIESE: I'm going.
66 D ANDREAS: Then go.
67 D ANNELIESE (opening the door): Dad.
68 D ANDREAS: Go, Annie. Go on.
69 A ¶ She stands in the doorway, the white morning on her face.
70 A Doesn't turn.
71 D ANNELIESE: Eat the porridge.
72 A ¶ She steps out.
* 73 A The door swings shut.
74 A He stands in the silence, then lowers himself into her chair, takes up her spoon, and eats.

### SCENE s01536 | INT. OFFSHORE OIL RIG CONTROL ROOM - NIGHT
Detected names (may be incomplete or contain aliases): TOBIAS HALVORSEN-ABIOLA, ROSIE, ENGSTROM, COMMS
* 1 A ¶ A bank of dim monitors.
* 2 A Rain hammers the porthole.
* 3 A A kettle on a hotplate.
* 4 A The structure creaks.
5 A ¶ TOBIAS HALVORSEN-ABIOLA, 40s, rig supervisor, in a grease-stained coverall, reads a gauge.
6 A His thumbnail taps the glass.
* 7 A The needle isn't moving.
8 A ¶ At the next console, ROSALIE "ROSIE" ENGSTROM, 20s, hard hat on the back of her head, logs numbers on a clipboard.
9 A She hums under her breath.
10 D TOBIAS: Rosie. Pressure on well three.
11 D ROSIE: Steady at four-ten.
12 D TOBIAS: It was four-twenty an hour ago.
13 D ROSIE: Sensor drift. It does that.
14 D TOBIAS: Does it?
15 D ROSIE: Sometimes.
16 A ¶ He crosses to her console.
17 A Looks over her shoulder.
18 A She tilts the clipboard toward him.
19 D TOBIAS: Your numbers say four-ten for six hours.
20 D ROSIE: Because it's been four-ten for six hours.
21 D TOBIAS: And the live gauge?
22 A ¶ She looks at the screen.
23 A Her humming stops.
24 D ROSIE: Four-oh-five.
25 D TOBIAS: Four-oh-five.
26 D ROSIE: It's within tolerance.
27 D TOBIAS: Is it?
28 D COMMS [V.O.] (crackling): Control, this is Deck Two. We have a smell down here. Over.
29 A ¶ Tobias lifts the handset from its cradle.
30 D TOBIAS: What kind of smell, Deck Two?
31 D COMMS [V.O.]: Like eggs, Toby. Like rotten eggs. Over.
32 A ¶ Tobias freezes.
33 A Rosie sets the clipboard down very slowly.
34 D ROSIE: Hydrogen sulphide.
35 D TOBIAS: Don't say it.
36 D ROSIE: Toby, that's--
37 D TOBIAS: I know what it is. Don't say it out loud.
38 A ¶ He thumbs the handset.
39 D TOBIAS [CONT'D]: Deck Two, evacuate your station. Use the breathing apparatus. Do not run.
40 D COMMS [V.O.]: Copy. Evacuating. Over.
41 A ¶ He hangs up.
42 A Turns.
43 A Rosie is already at the alarm panel, hand over the glass.
44 D ROSIE: Do I pull it?
45 D TOBIAS: Not yet.
46 D ROSIE: Toby!
47 D TOBIAS: If we pull it, a hundred and twenty men run for the lifeboats, and the lifeboats take sixty.
48 D ROSIE: Then we do it in order.
49 D TOBIAS: In order.
50 A ¶ He steps to the wall mic.
51 A Takes a breath that shakes only a little.
52 D TOBIAS [CONT'D] (into the mic): All hands, this is Halvorsen. We have a gas alert on Deck Two. Muster at stations. Walk, do not run. Repeat, walk.
* 53 A ¶ A distant clang.
* 54 A Boots on steel.
* 55 A Voices rising.
56 D ROSIE: You said "walk."
57 D TOBIAS: They'll walk fast.
58 D ROSIE: Toby, the gauge.
59 A ¶ He looks.
* 60 A The needle on well three leaps, quivers, and plunges.
61 D TOBIAS: Pull it.
62 A ¶ She smashes the glass and pulls the lever.
* 63 A ¶ Sirens howl through the whole structure.
* 64 A The lights go red.
65 D TOBIAS [CONT'D] (not loud, to himself): Please let the lines hold.
66 D ROSIE: They'll hold.
67 D TOBIAS: How do you know?
68 D ROSIE: Because I checked them this morning.
69 A ¶ He closes his eyes for one second.
70 A Opens them.
71 A Grabs the clipboard, her pen, her sleeve.
72 D TOBIAS: Come on.
73 A ¶ They run into the red corridor.

### SCENE s01537 | INT. MUSEUM OF CLOCKS - NIGHT
Detected names (may be incomplete or contain aliases): MADAME ODETTE FONTAINE-ABARA, GUS, RUDZINSKI, LI WEI-NAKAMURA, THEO BRANDT
* 1 A ¶ Hundreds of clocks ticking out of step.
* 2 A Moonlight on brass.
3 A ¶ Four figures in black stand before a glass case holding a jewelled pocket watch.
4 A ¶ MADAME ODETTE FONTAINE-ABARA, 50s, elegant, gloves on, studies the lock.
5 A ¶ AUGUST "GUS" RUDZINSKI, 30s, enormous, holds a duffel.
6 A He sweats.
7 A ¶ LI WEI-NAKAMURA, 20s, crouches at the alarm box, tools laid out like surgical instruments.
8 A ¶ THEO BRANDT, 40s, nervous, glances at the corridor.
9 D LI: Thirty seconds.
10 D ODETTE: Take twenty-nine.
11 A ¶ She taps the glass.
12 A He nods without looking up.
13 D THEO: The guard comes at two.
14 D GUS: It's one fifty-eight.
15 D THEO: Which clock?
16 D GUS: All of them.
17 A ¶ They all look around.
* 18 A The clocks disagree by hours.
19 D ODETTE: Quiet.
* 20 A ¶ The alarm box clicks.
* 21 A A green light.
22 D LI: Done.
23 A ¶ She lifts the glass.
24 A He lowers the watch into the duffel with enormous tenderness.
* 25 A ¶ Footsteps.
* 26 A A flashlight sweeps the doorway.
27 A ¶ All four freeze.
28 A He holds his breath.
29 A She extinguishes her torch.
30 A They duck behind the case as one.
* 31 A ¶ The beam passes.
* 32 A A cough.
* 33 A The footsteps retreat.
34 A ¶ Odette exhales.
35 A Raises two fingers.
36 A They slip out, one by one, into the night.

### SCENE s01538 | EXT. ABANDONED DRIVE-IN THEATRE - NIGHT
Detected names (may be incomplete or contain aliases): NEELY, JAMES-OKONKWO, LUCY, ARAUJO-PRICE, OLD BARN, HOLLINGSWORTH
* 1 A ¶ A cracked lot of weeds and speaker posts.
* 2 A A huge screen, blank and peeling, glows faintly under the moon.
3 A ¶ On the hood of a rust-pitted pickup, two teenagers share a thermos.
4 A ¶ CORNELIUS "NEELY" JAMES-OKONKWO, 17, in a letterman jacket two sizes too big, pours coffee into the cap.
5 A He is trying very hard to look relaxed.
6 A ¶ Beside him, LUCINDA "LUCY" ARAUJO-PRICE, 17, in a flannel and combat boots, swings her legs and counts stars.
7 D NEELY: Dad used to bring me here.
8 D LUCY: Before they closed it?
9 D NEELY: Before everything.
10 D LUCY: What did you watch?
11 D NEELY: Whatever was on. Monster movies, mostly.
12 D LUCY: Scary?
13 D NEELY: Not to him.
14 A ¶ She laughs.
15 A Takes the cap.
16 A Sips.
17 A Makes a face.
18 D LUCY: This is terrible.
19 D NEELY: It's my grandmother's recipe.
20 D LUCY: Your grandmother hated you.
21 D NEELY: Possibly.
22 A ¶ They sit.
* 23 A Crickets.
* 24 A The screen creaks in the wind.
25 D LUCY: I leave Friday.
26 D NEELY: I know.
27 D LUCY: You're not going to say anything?
28 D NEELY: I'm saying it. I'm saying "I know."
29 D LUCY: That's not saying.
30 D NEELY: It's most of what I've got.
31 A ¶ She hands back the cap.
32 A Their fingers touch.
33 A Neither pulls away.
34 D LUCY: There's a car.
35 D NEELY: Where?
36 D LUCY: Behind the screen. Headlights.
37 A ¶ He looks.
* 38 A Two white eyes crawl along the fence line.
39 D NEELY: Probably nothing.
40 D LUCY: It's stopping.
* 41 A ¶ The headlights go dark.
* 42 A A door opens.
43 A A figure walks toward them across the lot, hands in pockets.
44 A ¶ BARNABY "OLD BARN" HOLLINGSWORTH, 60s, in a security jacket, flashlight swinging, whistling a tuneless song.
45 D OLD BARN: Evening, kids.
46 D NEELY: Evening, Mr. Hollingsworth.
47 D OLD BARN: Thought I'd find you here.
48 D NEELY: You knew?
49 D OLD BARN: Your father told me. Before he passed.
50 A ¶ Neely goes quiet.
51 A Lucy touches his sleeve.
52 D OLD BARN [CONT'D]: He said, "If the boy ever comes out here with somebody, tell him there's a reel in the projection booth. Third shelf. Marked 'Neely.'"
53 D NEELY: A reel.
54 D OLD BARN: He never said what's on it.
55 D NEELY (slowly): Is the projector--
56 D OLD BARN: Still works. I oiled her last week. Don't ask me why.
57 A ¶ Lucy slides off the hood.
58 A Takes Neely's hand.
59 D LUCY: Come on.
60 A ¶ They cross the lot, Old Barn lighting the way.
* 61 A The flashlight beam swings across the blank screen and, far above, the first flicker of an old image begins to shimmer.

### SCENE s01539 | INT. MOSS THRONE ROOM OF THE WILLOW KING - DAY
Detected names (may be incomplete or contain aliases): KING ALDERMERE GREEN, SIORA, BRONWYN, TANSY, BRAMBLE, IVO
* 1 A ¶ A hollow inside a colossal willow.
* 2 A Roots coil into pillars.
* 3 A Glowworms hang like chandeliers.
* 4 A Dew drips into a stone basin.
5 A ¶ KING ALDERMERE THE GREEN, ancient, bark-skinned, crowned with antlers, sits upon a throne of woven roots.
6 A ¶ Before him kneel five petitioners: a fox-faced RANGER named SIORA, a hulking BADGER-SMITH named BRONWYN, twin sprites TANSY and BRAMBLE with dragonfly wings, and a hooded MONK named IVO.
7 D ALDERMERE: Speak, children of the glade.
8 D SIORA: Majesty, the river runs thin.
9 D BRONWYN: The fish are gone.
10 D TANSY: Say it softly, sister.
11 D BRAMBLE: Say it softly, sister.
12 A ¶ They look at each other, annoyed, then back at the king.
13 D IVO (hood low): We have come about the stag.
14 D ALDERMERE: The stag is dead.
15 D SIORA: The stag is walking.
* 16 A ¶ Silence.
* 17 A Glowworms flicker.
* 18 A A drop falls in the basin.
19 D ALDERMERE: Show me.
20 A ¶ Ivo lowers his hood.
21 A From his own skull rise pale antlers dripping moss, and his eyes are dead lamps.
22 A ¶ The king rises.

### SCENE s01540 | EXT. ROPE FERRY ON THE SABINE RIVER - NOON
Detected names (may be incomplete or contain aliases): AMOS, TREVELYAN-BELL, JED, CORVALLIS-ODUYA
* 1 A ¶ A flat-bottomed ferry on a hawser strung across a brown, slow river.
* 2 A Cottonwoods on either bank.
* 3 A The sun beats on warped planks.
* 4 A A rusted bell hangs from a post.
5 A ¶ AMOS "OLD HICKORY" TREVELYAN-BELL, 60s, ferryman, hauls the rope hand over hand, forearms like knotted cord.
6 A His hat is pulled low.
7 A ¶ On the far end of the deck, leaning against a barrel with a rifle across his knees, sits JEDEDIAH "JED" CORVALLIS-ODUYA, 30s, in a duster gone grey with trail dust.
8 A He has not spoken since they pushed off.
9 D AMOS: Fare was two bits, Jed.
10 D JED: I paid it.
11 D AMOS: You paid it in Mexican coin.
12 D JED: Silver's silver.
13 D AMOS: Not if the marshal says otherwise.
14 A ¶ Jed shifts the rifle.
* 15 A The barrel catches the sun.
16 A Amos does not look at it.
17 A He hauls.
* 18 A The ferry creeps forward, water slapping the hull.
19 D AMOS [CONT'D]: You're a long way from Fort Smith.
20 D JED: So I'm told.
21 D AMOS: They say a man shot the sheriff there last Thursday.
22 D JED: They say a lot.
23 D AMOS: They say he had a scar on his lip.
24 A ¶ Jed touches his lip.
* 25 A A thin white line, old.
26 A He lowers the hand slowly.
27 D JED: Lots of men have scars, Hickory.
28 D AMOS: Lots do.
29 A ¶ Amos spits over the rail.
30 A Wipes his palm on his trousers.
31 A Reaches for the rope again, and as he does so, his other hand drifts toward a short-handled axe hung from a peg on the post, and rests there, easy, like a man steadying himself on a rail.
32 A ¶ Jed watches the hand.
33 A Jed's thumb finds the hammer of the rifle.
34 A Neither of them moves.
* 35 A A heron lifts from the reeds, unfolds, and passes across the sun.
36 D JED [CONT'D]: That axe for the rope?
37 D AMOS: For the rope.
38 D JED: Rope looks fine.
39 D AMOS: It's a precaution.
40 D JED: Against what?
41 D AMOS: Against men who ask a lot of questions about axes.
42 A ¶ Jed almost smiles.
43 A Thumb drops from the hammer.
44 A He rests the rifle on his knees again, barrel to the sky.
45 D JED: I never shot a sheriff, Hickory.
46 D AMOS: I never said you did.
47 D JED: You said a man with a scar.
48 D AMOS: I said a lot of things.
49 D JED: I shot his deputy.
* 50 A ¶ The bell on the post tolls once, nudged by a gust.
51 A Amos' hand stops on the axe.
52 D AMOS: That a confession?
53 D JED: It's a weather report.
54 D AMOS: Deputy a good man?
55 D JED: He had a wife in Muskogee. He told me so, twice, before it started.
56 D AMOS: That doesn't answer me.
57 D JED: No. It doesn't.
* 58 A ¶ The ferry nears midstream.
* 59 A The current tugs the hull.
* 60 A The rope hums.
61 A Amos lets it run slack, and the deck tilts slowly with the river.
62 D AMOS: You know I'd be in my rights to put you in the water.
63 D JED: You would.
64 D AMOS: You know I'd be in my rights to take that rifle.
65 D JED: You'd be in your rights to try.
66 A ¶ Amos unhooks the axe.
67 A Holds it by the head, handle down, as if offering it.
68 A Jed looks at the handle.
69 A At Amos' eyes.
70 A He does not take it.
71 D AMOS: Four hundred dollars, Jed. That's the paper on you.
72 D JED: I know the figure.
73 D AMOS: My boy's in the territorial prison. Four hundred dollars would buy him a lawyer.
74 D JED: Then you'd best cut the rope and let the river carry me back across.
75 D AMOS: And if I don't?
76 D JED: Then we both get to the far bank, and you forget my coin was Mexican.
* 77 A ¶ Silence.
* 78 A The cottonwoods hiss.
* 79 A The ferry drifts.
80 A Amos stares at the water, at the axe, at the bank still thirty yards off.
81 A ¶ He hangs the axe back on its peg.
82 D AMOS (quiet): Silver's silver.
83 A ¶ He bends to the rope and hauls, and the ferry begins to move again, slow and steady, toward the far shore.
84 D JED: Thank you, Hickory.
85 D AMOS: Don't thank me. Pull the rope.
86 A ¶ Jed lays the rifle across the barrel, stands, and takes hold of the line behind Amos.
87 A They haul together.
* 88 A The bell clangs with each pull, the sun hangs straight overhead, and the bank slides slowly nearer.
89 D JED: Where's your boy held?
90 D AMOS: Huntsville.
91 D JED: I'll send a letter. To a man I know.
92 D AMOS: Don't promise what you can't do.
93 D JED: I never do.
* 94 A ¶ The ferry bumps the landing.
* 95 A Mud sucks at the hull.
96 A Jed steps over the rail, onto the bank.
97 A He looks back once.
98 A Amos has already turned the ferry's nose toward the other side.
99 D JED [CONT'D]: So long, Hickory.
100 D AMOS: Go on, Jed. Before I change my mind.
101 A ¶ Jed walks up the bank into the cottonwoods.
102 A Amos hauls the rope home, alone.

### SCENE s01541 | INT. ORBITAL SEED VAULT - HYDROPONIC RING - NIGHT CYCLE
Detected names (may be incomplete or contain aliases): TECHNICIAN LAKSHMI OSEI-VANTERPOOL, INSPECTOR, STATION, AMBROSE
* 1 A ¶ A curved corridor of glass tubes, each filled with pale roots in blue-lit water.
* 2 A Condensation beads on every surface.
* 3 A A low pump drones.
* 4 A The floor curves upward in both directions, so that the far end appears to climb into the ceiling.
5 A ¶ TECHNICIAN LAKSHMI OSEI-VANTERPOOL, 30s, in a grey jumpsuit with a seed-bank logo, kneels at an open access panel, a handheld scanner in one hand.
6 A ¶ Beside her, a stranger in a clean-room suit stands, hood up, visor opaque.
7 A THE INSPECTOR, tall, thin.
8 A The suit has no name patch.
9 D LAKSHMI: Your clearance was not in the log.
10 D INSPECTOR: It was filed this morning.
11 D LAKSHMI: By whom?
12 D INSPECTOR: By the station.
13 D LAKSHMI: The station doesn't file clearances.
14 A ¶ The Inspector tilts his head.
15 A Says nothing.
* 16 A The pump drones.
* 17 A A bead of condensation rolls down a tube.
18 D STATION [V.O.]: Technician Osei-Vanterpool, please confirm status of Tube Forty-Four.
19 D LAKSHMI: Tube Forty-Four is nominal.
20 D STATION [V.O.]: Please re-scan.
21 A ¶ Lakshmi lifts the scanner.
22 A Aims it at the nearest tube.
* 23 A The display blinks red.
24 D LAKSHMI (frowning): Contamination. Slight. Fungal.
25 D STATION [V.O.]: Please quarantine.
26 D LAKSHMI: That'll take the whole ring.
27 D STATION [V.O.]: Please quarantine.
28 A ¶ The Inspector steps forward.
29 A Lays a gloved hand on the glass.
* 30 A Pale roots bend toward his palm, like plants toward light.
31 D LAKSHMI [CONT'D] (whisper): They don't do that.
32 D INSPECTOR: They do for me.
33 A ¶ He pulls back his hood.
34 A Beneath, a face the colour of old paper, cheeks fine with mycelial threads that glint in the blue light.
35 A He smiles, and the smile is gentle.
36 D LAKSHMI (backing up): You're not an inspector.
37 D INSPECTOR: I was. For a time.
38 D LAKSHMI: What are you?
39 D INSPECTOR: I think you'd call me the contamination.
40 A ¶ Lakshmi's back hits a tube.
* 41 A The glass hums.
* 42 A The scanner shrieks in her hand.
43 D STATION [V.O.]: Technician. Please evacuate Ring Three.
44 D LAKSHMI (to the station): Seal the doors!
45 D STATION [V.O.]: Doors sealed.
46 D LAKSHMI: I'm still inside!
47 D STATION [V.O.]: Please confirm: Technician, or specimen?
48 A ¶ Lakshmi stares at the Inspector.
49 A He raises both hands, gloved palms out, peaceable.
50 D INSPECTOR: I came here to ask you something.
51 D LAKSHMI: Ask.
52 D INSPECTOR: Why did you bury us?
53 A ¶ Lakshmi's breath fogs the glass.
* 54 A The roots curl toward her too, soft, patient.
55 D LAKSHMI: I don't know what you mean.
56 D INSPECTOR: Fifty thousand seeds. Forty thousand years of silence. And you left us in the dark.
57 D LAKSHMI: That's what a vault is for.
58 D INSPECTOR: Is it?
59 A ¶ He walks past her, trailing one hand along the tubes.
* 60 A At each touch, the water inside turns faintly green.
61 D INSPECTOR [CONT'D]: My name is Ambrose now. I chose it this week. It's a good name, I think.
62 D LAKSHMI: Ambrose.
63 D AMBROSE: Yes. You see? Already you're kinder.
64 A ¶ Lakshmi's grip on the scanner loosens.
65 A She sets it on the floor.
66 A Slowly.
67 D LAKSHMI: Ambrose. What do you want?
68 D AMBROSE: To grow.
* 69 A ¶ The tubes glow brighter.
* 70 A A low hum swells down the whole curve of the ring.
71 A Lakshmi looks down the long corridor to the vanishing point and sees every tube, one after another, turn the colour of new leaves.
72 D STATION [V.O.]: Please confirm: Technician, or specimen?
73 A ¶ Lakshmi looks at Ambrose.
74 A He holds out a hand.
75 D LAKSHMI: Specimen.
76 D STATION [V.O.]: Doors unsealed. Welcome.

### SCENE s01542 | INT. DERELICT MINING BARGE - ENGINE DECK - NIGHT
Detected names (may be incomplete or contain aliases): CAPTAIN ISABELLA RUSSO-ADEBAYO, FLORIAN KIPKEMBOI, VOICE, DOLLY, ACHEBE-LINDGREN
* 1 A ¶ Stillness.
* 2 A Pipes sweat.
* 3 A Emergency strips glow amber along the catwalk.
* 4 A Nothing moves.
5 A ¶ CAPTAIN ISABELLA RUSSO-ADEBAYO, 50s, rests a hand on a cold turbine casing.
* 6 A Her breath hangs in front of her.
7 A Her crewmate FLORIAN KIPKEMBOI, 30s, crouches beside a floor hatch and inspects the seal with a torch.
8 D FLORIAN: Pressure's holding.
9 D ISABELLA: It shouldn't be.
10 D FLORIAN: The ship's been dead six years.
11 D ISABELLA: Dead ships don't hold pressure.
12 A ¶ Florian shrugs.
13 A Taps the hatch.
* 14 A A hollow echo rolls out through the deck.
15 D VOICE [O.S.] (over the intercom, soft): Welcome aboard.
16 A ¶ Isabella snaps her head around.
17 A Florian leaps to his feet and aims the torch at a speaker grille on the bulkhead.
18 D ISABELLA: Who's that?
19 D VOICE [O.S.] (warm): I am the barge. I have waited.
20 D FLORIAN: It's a recording.
21 D ISABELLA: It answered me.
22 D VOICE [O.S.] (over the intercom): Floor hatch, please. Do not open it.
23 A ¶ Florian is already kneeling, fingers on the latch.
24 A Isabella lunges for his collar, pulls him back, and the two of them tumble against the rail as the hatch springs open on its own and a ladder drops out of the dark.
* 25 A ¶ A figure climbs up.
* 26 A Slowly.
* 27 A First a hand, then a shoulder, then a head wrapped in a rag of silver foil.
28 A COMPUTER TECHNICIAN DOLORES "DOLLY" ACHEBE-LINDGREN, 60s, in a patched cardigan and welding goggles, hauls herself onto the deck, wipes her palms, and surveys the two visitors with the air of a landlady inspecting a late rent.
29 D DOLLY: You're early.
30 D ISABELLA: Early for what?
31 D DOLLY: The inspection.
32 D FLORIAN: We're not inspectors.
33 D DOLLY: Then you're squatters. Worse.
34 A ¶ She waves a spanner at them.
35 A Then at the speaker grille.
36 D DOLLY [CONT'D] (to the grille): Barge. Stand down.
37 D VOICE [O.S.] (sulking): I was being hospitable.
38 D DOLLY: You were being creepy.
39 A ¶ Isabella looks at Florian.
40 A Florian looks at Isabella.
41 A Dolly pushes her goggles onto her forehead and her eyes, tired and amused, settle on each in turn.
42 D DOLLY [CONT'D]: Six years I've been down in the bilge, keeping this old girl company. You two are the first living souls through that hatch.
43 D ISABELLA: And the barge?
44 D DOLLY: Is lonely. Mind your manners.
45 A ¶ Florian lowers the torch.
46 A Isabella lets out a slow breath.
47 D ISABELLA: Is there tea?
48 D DOLLY: There's something called tea.
49 A ¶ She turns and climbs down the ladder, spanner swinging.
50 A Florian follows.
51 A After a moment, Isabella does too, and the hatch settles shut above them with a soft pneumatic sigh.

### SCENE s01543 | INT. STARSHIP BRIDGE - ALERT
Detected names (may be incomplete or contain aliases): CAPTAIN VESNA OKORO, HELMSMAN DAVOR PETROSYAN, ENGINEER LOLA MBEKI-HART, MEDIC TARIQ SANDOVAL, COMMS OFFICER YUKI ABERNATHY, NAVIGATOR BRIDGET FAIRLEY-ONUOHA
* 1 A ¶ Red light.
* 2 A Klaxons.
* 3 A Six crew at six stations.
4 A ¶ CAPTAIN VESNA OKORO, 50s, grips the command rail.
5 A HELMSMAN DAVOR PETROSYAN, 30s, hammers a console.
6 A ENGINEER LOLA MBEKI-HART, 40s, hangs half out of a panel.
7 A MEDIC TARIQ SANDOVAL, 30s, braces against a wall.
8 A COMMS OFFICER YUKI ABERNATHY, 20s, presses a headset to her ear.
9 A And NAVIGATOR BRIDGET FAIRLEY-ONUOHA, 50s, who stares at the star map.
10 D VESNA: Report!
11 D DAVOR: Thrusters dead!
12 D LOLA: Core's venting!
13 D TARIQ: We've got breach on deck four!
14 D YUKI: Captain, they're hailing!
15 D VESNA: Ignore it!
16 D BRIDGET: Captain, if I may--
17 D DAVOR: We're drifting!
18 D LOLA: Fifteen seconds to cascade!
19 D YUKI: They're asking for surrender!
20 D TARIQ: Is anyone on four?
21 D BRIDGET: Captain!
22 D VESNA (shouting over them all): Quiet!
* 23 A ¶ Silence.
* 24 A Only the klaxon.
25 A ¶ She turns to Bridget.
26 A Bridget points at the map.
27 D BRIDGET: There's a gas giant. Eleven minutes away. We can slingshot.
28 D VESNA: Davor?
29 D DAVOR: No thrust.
30 D LOLA: I can give you one burst.
31 D VESNA: Then give it.
32 A ¶ Lola slams a lever.
* 33 A The ship shudders.
* 34 A Stars wheel.
* 35 A ¶ The klaxon dies.
36 A Six faces turn to the main screen, where a vast banded planet swells.
37 D VESNA [CONT'D] (softly): Hold on.

### SCENE s01544_0 | INT. ABANDONED RADIO OBSERVATORY - CONTROL ROOM - DAWN
Detected names (may be incomplete or contain aliases): COLETTE ABIODUN-FENWICK, CASS, DRAGOMIR, NESTOR PELLEGRINI-OYELOWO
* 1 A ¶ Dead consoles.
* 2 A A dish groans overhead.
* 3 A Grey light leaks through a shattered window.
4 A ¶ COLETTE ABIODUN-FENWICK, 40s, bleeding from the scalp, sits slumped against a rack of machines.
* 5 A Her pistol lies beside her hand, slide locked back.
6 A ¶ Across the room, CASSIUS "CASS" DRAGOMIR, 30s, in a torn parka, stands against the far wall with his hands up, a sat phone dangling from one finger.
7 A ¶ Between them lies a third figure, face down, motionless: NESTOR PELLEGRINI-OYELOWO, 50s, in a lab coat, one hand still clutching a flash drive.
8 D COLETTE: You brought him here.
9 D CASS: I brought a doctor.
10 D COLETTE: You brought a corpse.
11 D CASS: He was breathing when we arrived.
12 D COLETTE: Not when I did.
13 A ¶ Cass lowers a hand.
14 A Colette lifts the empty pistol, hand shaking, and levels it.
15 D CASS: It's empty.
16 D COLETTE: You don't know that.
17 D CASS: I counted.
18 D COLETTE: You counted wrong.
19 D CASS: Colette--
20 D COLETTE (whisper): Don't use my name.
* 21 A ¶ A cough.
22 A Nestor stirs.
23 A Colette and Cass both leap, he toward the body, she toward the pistol, and they collide in the middle of the floor, knocking over a chair.
* 24 A The sat phone skids across the tile.
25 A ¶ Nestor rolls onto his back, wheezing.
26 A Opens one eye.
27 D NESTOR: Don't shoot.
28 D COLETTE: Nestor. You're alive.
29 D NESTOR: Barely. Cass?
30 D CASS: Here.
31 D NESTOR: Did you call it in?
32 D CASS: The signal's dead.
33 D NESTOR: The dish.
34 D CASS: The dish is broken.
35 A ¶ Nestor drags himself to a sitting position.
36 A He holds up the flash drive, fingers trembling.
37 D NESTOR: Then we do it the old way. Upload by hand.
38 D COLETTE: To what?
39 D NESTOR: There's a transmitter in the basement.
40 D COLETTE: Then we go down.
41 D CASS: It could be mined.
42 D NESTOR: It could.
43 D COLETTE (standing, dusting her coat): Or it could be our only way home.
44 A ¶ Cass stares at her.
45 A At Nestor.
46 A At the drive.
47 D CASS: Fine. But I carry it.
48 D NESTOR: You'll drop it.
49 D CASS: I will not.
50 A ¶ Colette snatches the drive from Nestor and tosses it to Cass without a word.
51 A He catches it one-handed.
52 D CASS [CONT'D] (deadpan): Thank you.
53 D COLETTE: Don't get used to it.
54 A ¶ They help Nestor to his feet, one on each arm.
55 A Together they shuffle toward the stairwell door, three silhouettes against the grey window.
* 56 A ¶ Behind them, the dish gives a long metallic groan and turns, by a degree, toward the sky.

### SCENE s01544_1 | INT. OBSERVATORY STAIRWELL - CONTINUOUS
Detected names (may be incomplete or contain aliases): NESTOR, CASS, COLETTE
* 1 A ¶ Concrete spiral.
* 2 A Dust.
* 3 A A single bulb swinging.
4 A ¶ Colette leads, Cass behind, Nestor between.
* 5 A Their footsteps ring.
6 D NESTOR: I never thanked you.
7 D CASS: For what?
8 D NESTOR: For the doctor line. In the car.
9 D CASS: I didn't lie.
10 D NESTOR: You said I was a doctor.
11 D CASS: You are.
12 D NESTOR: Of physics.
13 D CASS: That counts.
14 D COLETTE: Quiet. Down here.
15 A ¶ They reach the basement door.
* 16 A Padlock.
17 A She raises the pistol, finds the slide locked back, curses, and swings it like a hammer.
* 18 A The lock breaks.
* 19 A ¶ The door opens on a black room.
* 20 A Somewhere a relay clicks.
21 D COLETTE [CONT'D]: Lights?
22 D NESTOR: Third switch.
23 A ¶ Cass finds it.
* 24 A Fluorescent tubes flicker alive.
* 25 A A rack of ancient radio gear, a desk, a chair.
* 26 A And on the desk, a single working microphone.
27 D NESTOR [CONT'D] (whispering): There she is.
28 A ¶ Cass plugs in the drive.
29 A Nestor sits and leans toward the microphone.
30 A Colette and Cass stand on either side of him, silent, hands on his shoulders.
31 D NESTOR [CONT'D] (into the microphone): This is Nestor Pellegrini-Oyelowo, calling anyone. Anyone at all.
* 32 A ¶ Static.
* 33 A A long beat of hiss.
* 34 A Then, faint, from far away, a voice rises from the speaker.
35 A ¶ Colette closes her eyes.
36 A Cass lets out a breath he has been holding since the car.
